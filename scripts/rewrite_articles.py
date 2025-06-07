import os
import requests
from bs4 import BeautifulSoup
import openai

OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')
WP_USER = os.getenv('WORDPRESS_USER')
WP_PASS = os.getenv('WORDPRESS_PASS')
WP_URL = os.getenv('WORDPRESS_URL')  # e.g. https://example.com/wp-json/wp/v2/posts
BASE_URL = os.getenv('SOURCE_URL', 'https://phuket-insider.com/ru/')


def fetch_article_links(count=5):
    resp = requests.get(BASE_URL, headers={'User-Agent': 'Mozilla/5.0'})
    resp.raise_for_status()
    soup = BeautifulSoup(resp.text, 'html.parser')
    links = []
    for a in soup.select('a'):  # simple approach; site-specific selectors may vary
        href = a.get('href')
        if href and '/ru/' in href and href not in links:
            if href.startswith('http'):
                links.append(href)
            else:
                links.append(os.path.join(BASE_URL, href))
        if len(links) >= count:
            break
    return links


def fetch_article_text(url):
    resp = requests.get(url, headers={'User-Agent': 'Mozilla/5.0'})
    resp.raise_for_status()
    soup = BeautifulSoup(resp.text, 'html.parser')
    article = soup.find('article')
    if not article:
        article = soup
    return article.get_text(separator='\n', strip=True)


def rewrite_text(text):
    if not OPENAI_API_KEY:
        raise RuntimeError('OPENAI_API_KEY not set')
    openai.api_key = OPENAI_API_KEY
    messages = [
        {'role': 'system', 'content': 'Перепиши данный текст на русском языке, сохраняя смысл, но изменяя формулировки.'},
        {'role': 'user', 'content': text[:6000]},
    ]
    response = openai.ChatCompletion.create(model='gpt-3.5-turbo', messages=messages)
    return response['choices'][0]['message']['content'].strip()


def publish_post(title, content):
    if not (WP_USER and WP_PASS and WP_URL):
        raise RuntimeError('WORDPRESS_USER, WORDPRESS_PASS, WORDPRESS_URL env vars required')
    data = {'title': title, 'content': content, 'status': 'draft'}
    resp = requests.post(WP_URL, auth=(WP_USER, WP_PASS), json=data)
    resp.raise_for_status()
    return resp.json()


def main():
    links = fetch_article_links()
    for link in links:
        text = fetch_article_text(link)
        rewritten = rewrite_text(text)
        title = f'Rewritten: {link}'
        publish_post(title, rewritten)
        print(f'Published rewritten article from {link}')


if __name__ == '__main__':
    main()
