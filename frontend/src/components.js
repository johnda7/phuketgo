import React, { useState } from 'react';

// Main Header Component
export const MainHeader = ({ currentPage, onBackToMain, onCategorySelect, selectedTour, selectedCategory }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    if (currentPage !== 'main') {
      onBackToMain();
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const getPageTitle = () => {
    if (currentPage === 'tour' && selectedTour) {
      return selectedTour.title;
    } else if (currentPage === 'category' && selectedCategory) {
      return selectedCategory.title;
    }
    return 'Экскурсии по Пхукету';
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={onBackToMain}>
            <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">🌴</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">VIP TRAVEL</h1>
              <p className="text-xs text-gray-600">{getPageTitle()}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm font-medium text-gray-800">+66 94 975 24 66</p>
              <p className="text-xs text-gray-600">без выходных</p>
            </div>
            
            <nav className="hidden md:flex items-center space-x-6">
              <button 
                onClick={() => scrollToSection('excursions')}
                className="text-gray-700 hover:text-emerald-600 transition-colors"
              >
                Экскурсии
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-gray-700 hover:text-emerald-600 transition-colors"
              >
                Цены
              </button>
              <button 
                onClick={() => scrollToSection('reviews')}
                className="text-gray-700 hover:text-emerald-600 transition-colors"
              >
                Отзывы
              </button>
              <button 
                onClick={() => scrollToSection('contacts')}
                className="text-gray-700 hover:text-emerald-600 transition-colors"
              >
                О компании
              </button>
            </nav>
            
            <button 
              onClick={() => scrollToSection('contacts')}
              className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
            >
              ЗАКАЗАТЬ
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

// Hero Section Component
export const HeroSection = ({ onCategorySelect }) => {
  const scrollToExcursions = () => {
    const element = document.getElementById('excursions');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/176400/pexels-photo-176400.jpeg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp">
          ЭКСКУРСИИ НА ПХУКЕТЕ
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fadeInUp">
          Откройте для себя райские уголки Таиланда вместе с нами
        </p>
        <button 
          onClick={scrollToExcursions}
          className="bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-700 transition-colors animate-fadeInUp"
        >
          ВЫБРАТЬ ЭКСКУРСИЮ
        </button>
      </div>
    </section>
  );
};

// Excursion Categories Component
export const ExcursionCategories = ({ onCategorySelect }) => {
  const categories = [
    {
      id: 'sea',
      title: 'МОРСКИЕ ЭКСКУРСИИ',
      image: 'https://images.unsplash.com/photo-1643264942781-3be860ed7cfc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxzZWElMjBleGN1cnNpb24lMjBBbmRhbWFufGVufDB8fHx8MTc1MTU0NDQ1NHww&ixlib=rb-4.1.0&q=85',
      tours: [
        {
          title: 'Симиланские острова',
          description: 'Одни из самых красивых островов в мире для снорклинга и дайвинга. Национальный парк Симилан известен своими коралловыми рифами, белоснежными пляжами и невероятно прозрачной водой.',
          price: '3,200₽',
          duration: '12 часов',
          groupSize: 'До 20 человек',
          image: 'https://images.pexels.com/photos/18277777/pexels-photo-18277777.jpeg',
          includes: ['Трансфер из отеля', 'Завтрак и обед', 'Снорклинг', 'Билет в национальный парк', 'Гид', 'Маски и ласты'],
          highlights: ['9 необитаемых островов', 'Коралловые рифы', 'Тропические рыбы', 'Черепахи', 'Sailing Rock']
        },
        {
          title: 'Острова Краби на спидботе',
          description: 'Захватывающая экскурсия к четырем островам провинции Краби: Пода, Чикен, Тап и Прананг. Насладитесь снорклингом, пляжами и невероятными пейзажами.',
          price: '2,800₽',
          duration: '8 часов',
          groupSize: 'До 15 человек',
          image: 'https://images.unsplash.com/photo-1534008897995-27a23e859048?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxQaGklMjBQaGklMjBJc2xhbmRzJTIwTWF5YSUyMEJheXxlbnwwfHx8fDE3NTE1NDQ0MDR8MA&ixlib=rb-4.1.0&q=85',
          includes: ['Трансфер из отеля', 'Завтрак и обед', 'Снорклинг', 'Каякинг', 'Гид', 'Безлимитные напитки'],
          highlights: ['Остров Пода', 'Пляж Прананг', 'Остров Чикен', 'Коса Тап', 'Пещеры и лагуны']
        },
        {
          title: 'Дайвинг для начинающих',
          description: 'Первое погружение с аквалангом в кристально чистых водах Андаманского моря. Профессиональные инструкторы научат вас основам дайвинга и покажут подводный мир.',
          price: '3,500₽',
          duration: '8 часов',
          groupSize: 'До 4 человек',
          image: 'https://images.pexels.com/photos/3046582/pexels-photo-3046582.jpeg',
          includes: ['Трансфер из отеля', 'Обед', 'Дайвинг оборудование', 'Инструктор PADI', 'Сертификат', '2 погружения'],
          highlights: ['Коралловые рифы', 'Тропические рыбы', 'Подводные скалы', 'Сертификат PADI', 'Профессиональное оборудование']
        },
        {
          title: 'Снорклинг тур к коралловым рифам',
          description: 'Исследуйте лучшие места для снорклинга вокруг Пхукета. Увидите разноцветные кораллы, тропических рыб и морских звезд в их естественной среде.',
          price: '1,800₽',
          duration: '6 часов',
          groupSize: 'До 20 человек',
          image: 'https://images.pexels.com/photos/8093150/pexels-photo-8093150.jpeg',
          includes: ['Трансфер из отеля', 'Обед', 'Снорклинг оборудование', 'Гид', 'Фрукты', 'Питьевая вода'],
          highlights: ['Коралловые сады', 'Рыба-клоун', 'Морские черепахи', 'Рифовые акулы', 'Подводная фотосессия']
        },
        {
          title: 'Рыбалка в открытом море',
          description: 'Настоящая морская рыбалка в Андаманском море. Попробуйте поймать барракуду, тунца или красного снэппера под руководством опытных рыбаков.',
          price: '2,900₽',
          duration: '8 часов',
          groupSize: 'До 10 человек',
          image: 'https://images.pexels.com/photos/14784268/pexels-photo-14784268.jpeg',
          includes: ['Трансфер из отеля', 'Завтрак и обед', 'Рыболовные снасти', 'Наживка', 'Гид-рыбак', 'Приготовление улова'],
          highlights: ['Глубоководная рыбалка', 'Тропические виды рыб', 'Профессиональные снасти', 'Готовка улова', 'Сертификат рыбака']
        },
        {
          title: 'Романтический круиз на закате',
          description: 'Незабываемый романтический круиз на роскошной яхте во время заката. Насладитесь ужином, шампанским и невероятными видами Андаманского моря.',
          price: '4,200₽',
          duration: '4 часа',
          groupSize: 'До 8 человек',
          image: 'https://images.unsplash.com/photo-1672741186863-d3ad143cfaa5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHxzdW5zZXQlMjBjcnVpc2UlMjBib2F0JTIwVGhhaWxhbmR8ZW58MHx8fHwxNzUxNTQ1NzE4fDA&ixlib=rb-4.1.0&q=85',
          includes: ['Трансфер из отеля', 'Ужин', 'Шампанское', 'Живая музыка', 'Фотограф', 'Романтическое оформление'],
          highlights: ['Роскошная яхта', 'Закат над морем', 'Ужин при свечах', 'Живая музыка', 'Фотосессия']
        }
      ]
    },
    {
      id: 'phi-phi',
      title: 'ОСТРОВА ПХИ-ПХИ',
      image: 'https://images.pexels.com/photos/1647110/pexels-photo-1647110.jpeg',
      tours: [
        {
          title: 'Острова Пхи-Пхи на спидботе',
          description: 'Посетите знаменитые острова Пхи-Пхи, включая культовый залив Майя Бэй из фильма "Пляж" с Леонардо Ди Каприо. Насладитесь кристально чистой водой, белоснежными пляжами и невероятными видами.',
          price: '2,500₽',
          duration: '8 часов',
          groupSize: 'До 15 человек',
          image: 'https://images.pexels.com/photos/1647110/pexels-photo-1647110.jpeg',
          includes: ['Трансфер из отеля', 'Завтрак и обед', 'Снаряжение для снорклинга', 'Профессиональный гид', 'Спасательные жилеты', 'Страховка'],
          highlights: ['Залив Майя Бэй', 'Пещера Викингов', 'Бухта Лох Самах', 'Остров Бамбу', 'Снорклинг с тропическими рыбками']
        },
        {
          title: 'Пхи-Пхи на рассвете (без толп)',
          description: 'Эксклюзивная экскурсия на острова Пхи-Пхи с ранним выездом, чтобы избежать толп туристов. Встретьте рассвет в заливе Майя Бэй и насладитесь островами в полном уединении.',
          price: '3,200₽',
          duration: '10 часов',
          groupSize: 'До 12 человек',
          image: 'https://images.pexels.com/photos/1647110/pexels-photo-1647110.jpeg',
          includes: ['Ранний трансфер', 'Завтрак и обед', 'Снорклинг', 'Фотосессия на рассвете', 'Гид', 'VIP-сервис'],
          highlights: ['Залив Майя Бэй без толп', 'Рассвет над островами', 'VIP-обслуживание', 'Эксклюзивные фото', 'Приоритетный доступ']
        },
        {
          title: 'Пхи-Пхи + снорклинг тур',
          description: 'Комбинированная экскурсия на острова Пхи-Пхи с акцентом на снорклинг. Исследуйте лучшие коралловые рифы и встретьте тропических рыб в их естественной среде.',
          price: '2,800₽',
          duration: '9 часов',
          groupSize: 'До 18 человек',
          image: 'https://images.pexels.com/photos/8093150/pexels-photo-8093150.jpeg',
          includes: ['Трансфер из отеля', 'Завтрак и обед', 'Профессиональное снорклинг оборудование', 'Инструктор', 'Подводная камера', 'Фрукты'],
          highlights: ['Лучшие споты для снорклинга', 'Коралловые рифы', 'Тропические рыбы', 'Подводная съемка', 'Морские черепахи']
        },
        {
          title: 'Пхи-Пхи на закате',
          description: 'Романтическая вечерняя экскурсия на острова Пхи-Пхи. Проведите день на пляжах, а вечером встретьте невероятный закат с панорамными видами на Андаманское море.',
          price: '2,900₽',
          duration: '8 часов',
          groupSize: 'До 14 человек',
          image: 'https://images.unsplash.com/photo-1672741186863-d3ad143cfaa5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHxzdW5zZXQlMjBjcnVpc2UlMjBib2F0JTIwVGhhaWxhbmR8ZW58MHx8fHwxNzUxNTQ1NzE4fDA&ixlib=rb-4.1.0&q=85',
          includes: ['Трансфер из отеля', 'Обед и ужин', 'Напитки на закате', 'Романтическое оформление', 'Фотосессия', 'Живая музыка'],
          highlights: ['Закат на Пхи-Пхи', 'Романтическая атмосфера', 'Панорамные виды', 'Ужин на борту', 'Незабываемые моменты']
        }
      ]
    },
    {
      id: 'james-bond',
      title: 'ДЖЕЙМС БОНД',
      image: 'https://images.pexels.com/photos/6437646/pexels-photo-6437646.jpeg',
      tours: [
        {
          title: 'Остров Джеймса Бонда',
          description: 'Экскурсия к легендарному острову Ко Тапу из фильма о Джеймсе Бонде "Человек с золотым пистолетом". Исследуйте залив Панг-Нга с его удивительными известняковыми скалами и плавучей деревней.',
          price: '2,200₽',
          duration: '7 часов',
          groupSize: 'До 12 человек',
          image: 'https://images.pexels.com/photos/6437646/pexels-photo-6437646.jpeg',
          includes: ['Трансфер из отеля', 'Обед', 'Каякинг', 'Посещение деревни на воде', 'Гид', 'Страховка'],
          highlights: ['Остров Ко Тапу', 'Каякинг в пещерах', 'Деревня Панйи', 'Мангровые леса', 'Известняковые скалы']
        },
        {
          title: 'Джеймс Бонд + каякинг в пещерах',
          description: 'Расширенная экскурсия к острову Джеймса Бонда с исследованием скрытых пещер и лагун на каяках. Проплывите через таинственные гроты и мангровые туннели.',
          price: '2,600₽',
          duration: '8 часов',
          groupSize: 'До 10 человек',
          image: 'https://images.unsplash.com/photo-1646440912030-d58d2394b1cd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxtYW5ncm92ZSUyMGtheWFraW5nJTIwVGhhaWxhbmR8ZW58MHx8fHwxNzUxNTQ1Njk1fDA&ixlib=rb-4.1.0&q=85',
          includes: ['Трансфер из отеля', 'Обед', 'Каяки и снаряжение', 'Опытный гид-каякер', 'Водонепроницаемые сумки', 'Исследование пещер'],
          highlights: ['Каякинг в пещерах', 'Скрытые лагуны', 'Мангровые туннели', 'Сталактиты и сталагмиты', 'Дикая природа']
        },
        {
          title: 'Джеймс Бонд на лонгтейле',
          description: 'Аутентичная экскурсия к острову Джеймса Бонда на традиционной тайской лодке лонгтейл. Почувствуйте себя настоящим путешественником, как местные рыбаки.',
          price: '1,800₽',
          duration: '6 часов',
          groupSize: 'До 8 человек',
          image: 'https://images.pexels.com/photos/176400/pexels-photo-176400.jpeg',
          includes: ['Трансфер из отеля', 'Обед', 'Лонгтейл лодка', 'Местный гид', 'Рыбалка', 'Традиционный опыт'],
          highlights: ['Традиционная лонгтейл лодка', 'Местная культура', 'Рыбалка с гидом', 'Аутентичный опыт', 'Фото в стиле бонда']
        }
      ]
    },
    {
      id: 'mainland',
      title: 'ЭКСКУРСИИ НА МАТЕРИК',
      image: 'https://images.unsplash.com/photo-1675165309772-28436d37e837?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwyfHxqdW5nbGUlMjB3YXRlcmZhbGwlMjBUaGFpbGFuZHxlbnwwfHx8fDE3NTE1NDQ0MzB8MA&ixlib=rb-4.1.0&q=85',
      tours: [
        {
          title: 'Сафари на слонах в этичном питомнике',
          description: 'Незабываемое приключение в этичном питомнике слонов. Покормите, искупайте слонов и узнайте об их сохранении. Никакого катания - только забота о животных.',
          price: '2,200₽',
          duration: '6 часов',
          groupSize: 'До 10 человек',
          image: 'https://images.pexels.com/photos/32763117/pexels-photo-32763117.jpeg',
          includes: ['Трансфер из отеля', 'Обед', 'Кормление слонов', 'Купание со слонами', 'Гид', 'Фотографии'],
          highlights: ['Этичный питомник слонов', 'Купание со слонами', 'Кормление бананами', 'Изучение поведения', 'Сохранение природы']
        },
        {
          title: 'Храмы и водопады',
          description: 'Культурно-природная экскурсия по самым красивым храмам и водопадам Пхукета. Посетите Большого Будду, храм Ват Чалонг и живописные водопады в джунглях.',
          price: '1,600₽',
          duration: '7 часов',
          groupSize: 'До 15 человек',
          image: 'https://images.pexels.com/photos/32825570/pexels-photo-32825570.jpeg',
          includes: ['Трансфер из отеля', 'Обед', 'Гид', 'Входные билеты', 'Вода', 'Фотосессия'],
          highlights: ['Большой Будда', 'Храм Ват Чалонг', 'Водопад Банграк', 'Смотровая площадка', 'Тайские традиции']
        },
        {
          title: 'Национальный парк Као Сок',
          description: 'Поездка в один из старейших тропических лесов мира возрастом 160 миллионов лет. Сплав по реке, треккинг по джунглям и встреча с дикими животными.',
          price: '2,400₽',
          duration: '12 часов',
          groupSize: 'До 12 человек',
          image: 'https://images.unsplash.com/photo-1675165309772-28436d37e837?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwyfHxqdW5nbGUlMjB3YXRlcmZhbGwlMjBUaGFpbGFuZHxlbnwwfHx8fDE3NTE1NDQ0MzB8MA&ixlib=rb-4.1.0&q=85',
          includes: ['Трансфер из отеля', 'Завтрак и обед', 'Треккинг', 'Сплав по реке', 'Билет в парк', 'Гид-натуралист'],
          highlights: ['160-миллионный лес', 'Река Сок', 'Дикие обезьяны', 'Пещеры', 'Тропические растения']
        },
        {
          title: 'Плавучий рынок и деревня',
          description: 'Посещение аутентичного плавучего рынка, где торговцы продают фрукты и еду прямо с лодок. Знакомство с традиционным образом жизни тайцев.',
          price: '1,500₽',
          duration: '5 часов',
          groupSize: 'До 20 человек',
          image: 'https://images.pexels.com/photos/17117926/pexels-photo-17117926.jpeg',
          includes: ['Трансфер из отеля', 'Обед', 'Лодочная прогулка', 'Дегустация фруктов', 'Гид', 'Сувениры'],
          highlights: ['Плавучий рынок', 'Традиционные лодки', 'Местные фрукты', 'Тайская культура', 'Ремесленные изделия']
        },
        {
          title: 'Тайский массаж и СПА день',
          description: 'Расслабляющий день в лучших СПА-салонах Таиланда. Традиционный тайский массаж, ароматерапия и процедуры с использованием натуральных ингредиентов.',
          price: '2,800₽',
          duration: '6 часов',
          groupSize: 'До 8 человек',
          image: 'https://images.pexels.com/photos/6188120/pexels-photo-6188120.jpeg',
          includes: ['Трансфер из отеля', 'Обед', 'Тайский массаж', 'СПА-процедуры', 'Чай и фрукты', 'Релакс зона'],
          highlights: ['Традиционный тайский массаж', 'Ароматерапия', 'Натуральные масла', 'СПА-процедуры', 'Полное расслабление']
        },
        {
          title: 'Кулинарный мастер-класс',
          description: 'Научитесь готовить настоящие тайские блюда под руководством профессиональных поваров. Посетите рынок, выберите ингредиенты и приготовьте ужин.',
          price: '1,900₽',
          duration: '5 часов',
          groupSize: 'До 12 человек',
          image: 'https://images.pexels.com/photos/10638067/pexels-photo-10638067.jpeg',
          includes: ['Трансфер из отеля', 'Посещение рынка', 'Ингредиенты', 'Мастер-класс', 'Ужин', 'Рецепты'],
          highlights: ['Посещение рынка', 'Мастер-класс от шефа', 'Традиционные рецепты', 'Приготовление 4 блюд', 'Книга рецептов']
        }
      ]
    },
    {
      id: 'active',
      title: 'АКТИВНЫЙ ОТДЫХ',
      image: 'https://images.unsplash.com/photo-1559972360-199685b3232f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwyfHxhY3RpdmUlMjByZWNyZWF0aW9uJTIwVGhhaWxhbmR8ZW58MHx8fHwxNzUxNTQ0NDQ4fDA&ixlib=rb-4.1.0&q=85',
      tours: [
        {
          title: 'Каякинг в заливе Панг-Нга',
          description: 'Исследуйте мангровые леса и скрытые пещеры на каяках. Уникальная возможность увидеть нетронутую природу Таиланда и проплыть через таинственные гроты.',
          price: '2,100₽',
          duration: '6 часов',
          groupSize: 'До 8 человек',
          image: 'https://images.unsplash.com/photo-1646440912030-d58d2394b1cd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxtYW5ncm92ZSUyMGtheWFraW5nJTIwVGhhaWxhbmR8ZW58MHx8fHwxNzUxNTQ1Njk1fDA&ixlib=rb-4.1.0&q=85',
          includes: ['Трансфер из отеля', 'Обед', 'Каяки', 'Инструктор', 'Спасательные жилеты', 'Водонепроницаемые сумки'],
          highlights: ['Мангровые леса', 'Скрытые пещеры', 'Морские цыгане', 'Сталактиты', 'Дикая природа']
        },
        {
          title: 'Зиплайн в джунглях',
          description: 'Захватывающие полеты на тросах над кронами тропических деревьев. Почувствуйте адреналин, паря как птица над девственными джунглями Пхукета.',
          price: '1,900₽',
          duration: '4 часа',
          groupSize: 'До 6 человек',
          image: 'https://images.pexels.com/photos/2041759/pexels-photo-2041759.jpeg',
          includes: ['Трансфер из отеля', 'Обед', 'Снаряжение', 'Инструктор', 'Страховка', 'Видеосъемка'],
          highlights: ['12 платформ', 'Полеты над джунглями', 'Спуск по канату', 'Подвесные мосты', 'Панорамные виды']
        },
        {
          title: 'ATV сафари по джунглям',
          description: 'Экстремальная поездка на квадроциклах по горным тропам и джунглям Пхукета. Преодолевайте препятствия и наслаждайтесь невероятными видами.',
          price: '2,400₽',
          duration: '5 часов',
          groupSize: 'До 10 человек',
          image: 'https://images.pexels.com/photos/2986403/pexels-photo-2986403.jpeg',
          includes: ['Трансфер из отеля', 'Обед', 'Квадроцикл', 'Инструктор', 'Шлем', 'Страховка'],
          highlights: ['Горные тропы', 'Джунгли', 'Водопады', 'Смотровые площадки', 'Экстремальные маршруты']
        },
        {
          title: 'Скалолазание на известняковых скалах',
          description: 'Покорите знаменитые известняковые скалы Таиланда с видом на Андаманское море. Подходит как для новичков, так и для опытных скалолазов.',
          price: '2,800₽',
          duration: '6 часов',
          groupSize: 'До 4 человек',
          image: 'https://images.unsplash.com/photo-1522079803432-e0b7649dc1de?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxyb2NrJTIwY2xpbWJpbmclMjBUaGFpbGFuZHxlbnwwfHx8fDE3NTE1NDU1OTB8MA&ixlib=rb-4.1.0&q=85',
          includes: ['Трансфер из отеля', 'Обед', 'Снаряжение для скалолазания', 'Инструктор', 'Страховка', 'Фотосъемка'],
          highlights: ['Известняковые скалы', 'Виды на море', 'Разные уровни сложности', 'Профессиональное снаряжение', 'Сертификат']
        },
        {
          title: 'Парасейлинг над Пхукетом',
          description: 'Парите над бирюзовыми водами Андаманского моря на высоте 150 метров. Незабываемые виды на остров и соседние острова с высоты птичьего полета.',
          price: '1,600₽',
          duration: '3 часа',
          groupSize: 'До 2 человек',
          image: 'https://images.unsplash.com/photo-1681065761864-8b4b4cfe441a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwxfHxwYXJhc2FpbGluZyUyMFBodWtldHxlbnwwfHx8fDE3NTE1NDU3NTF8MA&ixlib=rb-4.1.0&q=85',
          includes: ['Трансфер из отеля', 'Снаряжение', 'Инструктор', 'Страховка', 'Фото и видео', 'Сертификат'],
          highlights: ['Полет на высоте 150м', 'Панорамные виды', 'Безопасное снаряжение', 'Профессиональные пилоты', 'Незабываемые эмоции']
        },
        {
          title: 'Пляжный волейбол и водные виды спорта',
          description: 'Активный день на лучших пляжах Пхукета с играми в волейбол, водными лыжами, вейкбордингом и другими водными развлечениями.',
          price: '1,400₽',
          duration: '6 часов',
          groupSize: 'До 15 человек',
          image: 'https://images.unsplash.com/photo-1726509911232-3f9e75a33219?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHZvbGxleWJhbGwlMjBUaGFpbGFuZHxlbnwwfHx8fDE3NTE1NDU3MjV8MA&ixlib=rb-4.1.0&q=85',
          includes: ['Трансфер из отеля', 'Обед', 'Спортивное оборудование', 'Инструктор', 'Напитки', 'Пляжные полотенца'],
          highlights: ['Пляжный волейбол', 'Водные лыжи', 'Вейкбординг', 'Команда аниматоров', 'Пляжные игры']
        },
        {
          title: 'Треккинг и хайкинг по горам',
          description: 'Пешие походы по горным тропам Пхукета с посещением скрытых водопадов, смотровых площадок и встречей с дикой природой.',
          price: '1,800₽',
          duration: '7 часов',
          groupSize: 'До 12 человек',
          image: 'https://images.pexels.com/photos/1697496/pexels-photo-1697496.jpeg',
          includes: ['Трансфер из отеля', 'Обед', 'Гид-натуралист', 'Треккинговые палки', 'Вода', 'Аптечка'],
          highlights: ['Горные тропы', 'Скрытые водопады', 'Смотровые площадки', 'Дикие животные', 'Тропические растения']
        }
      ]
    },
    {
      id: 'phuket',
      title: 'НА САМОМ ПХУКЕТЕ',
      image: 'https://images.unsplash.com/photo-1698199826046-1ee0f3f0e1fd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHxQaHVrZXQlMjBjaXR5JTIwdGVtcGxlfGVufDB8fHx8MTc1MTU0NDQ0MXww&ixlib=rb-4.1.0&q=85',
      tours: [
        {
          title: 'Обзорная экскурсия по Пхукету',
          description: 'Полный обзор острова за один день! Посетите главные достопримечательности: Большого Будду, мыс Промтеп, храм Ват Чалонг, старый город Пхукета и лучшие смотровые площадки.',
          price: '1,400₽',
          duration: '8 часов',
          groupSize: 'До 15 человек',
          image: 'https://images.unsplash.com/photo-1698199826046-1ee0f3f0e1fd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHxQaHVrZXQlMjBjaXR5JTIwdGVtcGxlfGVufDB8fHx8MTc1MTU0NDQ0MXww&ixlib=rb-4.1.0&q=85',
          includes: ['Трансфер из отеля', 'Обед', 'Гид', 'Входные билеты', 'Вода', 'Фотосъемка'],
          highlights: ['Большой Будда', 'Мыс Промтеп', 'Храм Ват Чалонг', 'Кешью фабрика', 'Старый город']
        },
        {
          title: 'Старый город Пхукета',
          description: 'Погружение в историю и культуру Пхукета. Прогулка по улицам с колониальной архитектурой, посещение музеев, дегустация местной кухни и знакомство с тайскими традициями.',
          price: '1,200₽',
          duration: '5 часов',
          groupSize: 'До 10 человек',
          image: 'https://images.pexels.com/photos/27034329/pexels-photo-27034329.jpeg',
          includes: ['Трансфер из отеля', 'Гид', 'Дегустация местной кухни', 'Посещение музеев', 'Сувениры'],
          highlights: ['Колониальная архитектура', 'Тайские музеи', 'Уличная еда', 'Местные рынки', 'Культурные традиции']
        },
        {
          title: 'Закат на мысе Промтеп',
          description: 'Романтическая экскурсия на лучшую смотровую площадку острова. Встретьте невероятный закат над Андаманским морем в компании с любимым человеком.',
          price: '800₽',
          duration: '3 часа',
          groupSize: 'До 12 человек',
          image: 'https://images.unsplash.com/photo-1698199826046-1ee0f3f0e1fd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHxQaHVrZXQlMjBjaXR5JTIwdGVtcGxlfGVufDB8fHx8MTc1MTU0NDQ0MXww&ixlib=rb-4.1.0&q=85',
          includes: ['Трансфер из отеля', 'Напитки', 'Закуски', 'Гид', 'Фотосъемка'],
          highlights: ['Мыс Промтеп', 'Закат над морем', 'Романтическая атмосфера', 'Панорамные виды', 'Маяк']
        },
        {
          title: 'Ночная жизнь Пхукета',
          description: 'Знакомство с ночной жизнью острова: посещение лучших баров, ресторанов, ночных рынков и развлекательных районов Патонга и Пхукет-тауна.',
          price: '1,800₽',
          duration: '5 часов',
          groupSize: 'До 12 человек',
          image: 'https://images.pexels.com/photos/27034329/pexels-photo-27034329.jpeg',
          includes: ['Трансфер из отеля', 'Гид', 'Приветственный напиток', 'Закуски', 'Карта баров'],
          highlights: ['Улица Бангла роуд', 'Ночные рынки', 'Лучшие бары', 'Живая музыка', 'Тайская ночная культура']
        },
        {
          title: 'Пляжный тур по острову',
          description: 'Посещение самых красивых пляжей Пхукета: Карон, Ката, Сурин, Банана и других. Узнайте, какой пляж подходит именно вам для отдыха.',
          price: '1,300₽',
          duration: '6 часов',
          groupSize: 'До 15 человек',
          image: 'https://images.unsplash.com/photo-1698199826046-1ee0f3f0e1fd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHxQaHVrZXQlMjBjaXR5JTIwdGVtcGxlfGVufDB8fHx8MTc1MTU0NDQ0MXww&ixlib=rb-4.1.0&q=85',
          includes: ['Трансфер из отеля', 'Обед', 'Гид', 'Пляжные полотенца', 'Вода', 'Карта пляжей'],
          highlights: ['Пляж Карон', 'Пляж Ката', 'Пляж Сурин', 'Скрытые бухты', 'Лучшие места для фото']
        }
      ]
    },
    {
      id: 'shows',
      title: 'ШОУ НА ПХУКЕТЕ',
      image: 'https://images.pexels.com/photos/14591803/pexels-photo-14591803.jpeg',
      tours: [
        {
          title: 'Шоу Simon Cabaret',
          description: 'Всемирно известное кабаре-шоу с профессиональными артистами в ярких костюмах. Незабываемое представление с элементами тайской культуры, современными танцами и впечатляющими номерами.',
          price: '1,100₽',
          duration: '3 часа',
          groupSize: 'До 30 человек',
          image: 'https://images.pexels.com/photos/14591803/pexels-photo-14591803.jpeg',
          includes: ['Трансфер из отеля', 'Билет на шоу', 'Напиток', 'Программка', 'Фото с артистами'],
          highlights: ['Профессиональные артисты', 'Яркие костюмы', 'Тайские танцы', 'Современные номера', 'Фотосессия']
        },
        {
          title: 'Fantasea Show',
          description: 'Грандиозное театрализованное представление, сочетающее элементы цирка, мюзикла и тайской культуры. Шоу проходит в специально построенном театре с участием слонов, акробатов и танцоров.',
          price: '2,400₽',
          duration: '5 часов',
          groupSize: 'До 25 человек',
          image: 'https://images.unsplash.com/photo-1646489471134-f2a91aab85cc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxUaGFpJTIwY3VsdHVyYWwlMjBzaG93fGVufDB8fHx8MTc1MTU0NDQyNHww&ixlib=rb-4.1.0&q=85',
          includes: ['Трансфер из отеля', 'Билет на шоу', 'Ужин', 'Напитки', 'Парк развлечений', 'Сувениры'],
          highlights: ['Шоу со слонами', 'Акробатические номера', 'Тайские легенды', 'Парк развлечений', 'Фейерверк']
        },
        {
          title: 'Тайский бокс на стадионе',
          description: 'Настоящие бои муай-тай на профессиональном стадионе. Окунитесь в атмосферу национального спорта Таиланда, наблюдая за схватками опытных бойцов.',
          price: '900₽',
          duration: '4 часа',
          groupSize: 'До 20 человек',
          image: 'https://images.pexels.com/photos/14591803/pexels-photo-14591803.jpeg',
          includes: ['Трансфер из отеля', 'Билет на матч', 'Напитки', 'Закуски', 'Программка'],
          highlights: ['Настоящий муай-тай', 'Профессиональные бойцы', 'Традиционная церемония', 'Стадион Bangla', 'Атмосфера боя']
        },
        {
          title: 'Alcazar Cabaret Show',
          description: 'Красочное трансвестит-шоу с профессиональными артистами, впечатляющими костюмами и зрелищными номерами. Одно из самых популярных шоу в Таиланде.',
          price: '1,200₽',
          duration: '3 часа',
          groupSize: 'До 35 человек',
          image: 'https://images.pexels.com/photos/14591803/pexels-photo-14591803.jpeg',
          includes: ['Трансфер из отеля', 'Билет на шоу', 'Напиток', 'Фото с артистами', 'Программка'],
          highlights: ['Яркие костюмы', 'Профессиональные номера', 'Интерактивное шоу', 'Фотосессия', 'Незабываемые эмоции']
        },
        {
          title: 'Афродита Кабаре Шоу',
          description: 'Элегантное кабаре-шоу с изысканными костюмами и профессиональной хореографией. Представление включает номера разных стран мира и культур.',
          price: '1,300₽',
          duration: '3 часа',
          groupSize: 'До 30 человек',
          image: 'https://images.unsplash.com/photo-1646489471134-f2a91aab85cc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxUaGFpJTIwY3VsdHVyYWwlMjBzaG93fGVufDB8fHx8MTc1MTU0NDQyNHww&ixlib=rb-4.1.0&q=85',
          includes: ['Трансфер из отеля', 'Билет на шоу', 'Коктейль', 'Программка', 'Meet & Greet'],
          highlights: ['Международные номера', 'Изысканные костюмы', 'Профессиональная хореография', 'Культуры мира', 'VIP зона']
        }
      ]
    }
  ];

  return (
    <section className="py-16 bg-gray-50" id="excursions">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          ЭКСКУРСИИ НА ПХУКЕТЕ
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div 
              key={category.id}
              className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
              onClick={() => onCategorySelect(category)}
            >
              <div 
                className="h-64 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${category.image})` }}
              >
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-xl font-bold text-center px-4 group-hover:scale-105 transition-transform">
                    {category.title}
                  </h3>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm bg-black/30 rounded px-2 py-1">
                    {category.tours.length} экскурсий
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// FAQ Component
export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'Почему стоит покупать экскурсии у нас?',
      answer: 'Мы работаем официально с лицензией 12/03586 и предоставляем только качественные услуги с профессиональными гидами. У нас лучшие цены на рынке и индивидуальный подход к каждому клиенту.'
    },
    {
      question: 'Как заказать экскурсию?',
      answer: 'Вы можете заказать экскурсию через форму на сайте, по телефону +66 94 975 24 66 или в мессенджерах WhatsApp и Telegram. Мы работаем 24/7 и отвечаем в течение 5 минут.'
    },
    {
      question: 'Какие способы оплаты экскурсий на Пхукете доступны?',
      answer: 'Мы принимаем оплату наличными (бат и рубли), банковскими картами Visa/MasterCard, а также через онлайн-переводы. Возможна оплата частями: 50% при бронировании, 50% перед экскурсией.'
    },
    {
      question: 'Какие документы необходимы для бронирования экскурсий?',
      answer: 'Для бронирования необходимо указать ФИО всех участников, контактный телефон, название отеля и желаемую дату. Для морских экскурсий нужен паспорт для посещения национальных парков.'
    },
    {
      question: 'Какие экскурсии обязательно посетить на Пхукете?',
      answer: 'Рекомендуем посетить острова Пхи-Пхи (культовый залив Майя Бэй), остров Джеймса Бонда, совершить сафари на слонах, посетить Большого Будду и обязательно сходить на одно из тайских шоу.'
    },
    {
      question: 'Где можно купить экскурсии на острова Пхукета?',
      answer: 'Вы можете купить экскурсии прямо на нашем сайте со скидкой 10%, связаться с нами через WhatsApp/Telegram или позвонить. Мы также встречаем клиентов в отелях для персональных консультаций.'
    },
    {
      question: 'Что делать если погода испортится?',
      answer: 'При плохой погоде мы переносим экскурсию на другой день бесплатно или возвращаем 100% стоимости. Безопасность наших клиентов - главный приоритет.'
    },
    {
      question: 'Включен ли трансфер в стоимость экскурсий?',
      answer: 'Да, трансфер из всех отелей Пхукета включен в стоимость всех экскурсий. Мы забираем и привозим обратно прямо к вашему отелю на комфортабельном транспорте с кондиционером.'
    }
  ];

  return (
    <section className="py-16 bg-white" id="faq">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full text-left p-4 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-gray-800 pr-4">{faq.question}</h3>
                  <span className="text-emerald-600 text-xl font-bold flex-shrink-0">
                    {activeIndex === index ? '−' : '+'}
                  </span>
                </div>
              </button>
              
              {activeIndex === index && (
                <div className="mt-2 p-4 bg-gray-50 rounded-lg animate-fadeIn">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Why Choose Us Component
export const WhyChooseUs = () => {
  const reasons = [
    {
      icon: '🏆',
      title: 'Работаем официально лицензия 12/03586',
      description: 'Полностью легальная туристическая компания'
    },
    {
      icon: '⭐',
      title: 'Только положительные отзывы',
      description: 'Все наши клиенты остаются довольны'
    },
    {
      icon: '💰',
      title: 'Удобная система оплаты',
      description: 'Принимаем все виды оплат'
    },
    {
      icon: '🎯',
      title: 'Лучшее соотношение цены и качества',
      description: 'Конкурентные цены при высоком качестве'
    },
    {
      icon: '🎫',
      title: 'Даем скидки при бронировании от 3х экскурсий',
      description: 'Выгодные предложения для постоянных клиентов'
    },
    {
      icon: '🛡️',
      title: 'Страховка включена',
      description: 'Полная страховая защита во время экскурсий'
    },
    {
      icon: '👥',
      title: 'Индивидуальный подход',
      description: 'Персональное внимание к каждому клиенту'
    },
    {
      icon: '🌏',
      title: 'Онлайн поддержка на русском языке',
      description: 'Круглосуточная помощь на родном языке'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          ПОЧЕМУ МЫ?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3 className="font-semibold text-gray-800 mb-2">{reason.title}</h3>
              <p className="text-gray-600 text-sm">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Form Component
export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    comment: '',
    contact: 'telegram'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', comment: '', contact: 'telegram' });
  };

  return (
    <section className="py-16 bg-white" id="contacts">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            ОСТАВИТЬ ЗАЯВКУ
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Имя"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full p-4 border border-gray-300 rounded-lg focus:border-emerald-500 focus:outline-none"
                required
              />
            </div>
            
            <div>
              <input
                type="tel"
                placeholder="Номер телефона"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full p-4 border border-gray-300 rounded-lg focus:border-emerald-500 focus:outline-none"
                required
              />
            </div>
            
            <div>
              <textarea
                placeholder="Комментарий"
                value={formData.comment}
                onChange={(e) => setFormData({...formData, comment: e.target.value})}
                rows="4"
                className="w-full p-4 border border-gray-300 rounded-lg focus:border-emerald-500 focus:outline-none"
              />
            </div>
            
            <div>
              <p className="text-gray-700 mb-2">Как с вами удобнее связаться?</p>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="telegram"
                    checked={formData.contact === 'telegram'}
                    onChange={(e) => setFormData({...formData, contact: e.target.value})}
                    className="mr-2"
                  />
                  Telegram
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="whatsapp"
                    checked={formData.contact === 'whatsapp'}
                    onChange={(e) => setFormData({...formData, contact: e.target.value})}
                    className="mr-2"
                  />
                  WhatsApp
                </label>
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full bg-emerald-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-emerald-700 transition-colors"
            >
              Отправить
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

// Footer Component
export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">🌴</span>
              </div>
              <h3 className="text-xl font-bold">VIP TRAVEL</h3>
            </div>
            <p className="text-gray-400">
              Официальный туроператор по Пхукету с лицензией 12/03586
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-gray-400">
              <p>📞 +66 94 975 24 66</p>
              <p>📧 info@viptravel.tours</p>
              <p>📍 Пхукет, Таиланд</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Экскурсии</h4>
            <div className="space-y-2 text-gray-400">
              <p>Острова Пхи-Пхи</p>
              <p>Остров Джеймса Бонда</p>
              <p>Сафари на слонах</p>
              <p>Шоу в Пхукете</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 VIP Travel. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};