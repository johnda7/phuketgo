# PhuketGo

This repository contains automation scripts for importing and rewriting
content for the PhuketGo project. The main script `scripts/rewrite_articles.py`
fetches the latest articles from **Phuket Insider**, rewrites them using the
OpenAI API and publishes drafts via the WordPress REST API.

## Usage

1. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
2. Set the following environment variables:
   - `OPENAI_API_KEY` – API key for OpenAI.
   - `WORDPRESS_USER` – WordPress username.
   - `WORDPRESS_PASS` – WordPress password.
   - `WORDPRESS_URL` – URL for creating posts, e.g.
     `https://example.com/wp-json/wp/v2/posts`.
   - `SOURCE_URL` (optional) – URL of the article list. Defaults to
     `https://phuket-insider.com/ru/`.
3. Run the script:
   ```bash
   python scripts/rewrite_articles.py
   ```

The script will process the first five article links found on the source page,
rewrite their contents and publish them as draft posts on your WordPress site.
