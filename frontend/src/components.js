import React, { useState } from 'react';

// Main Header Component
export const MainHeader = ({ currentPage, onBackToMain, onCategorySelect, selectedTour, selectedCategory, onPageSelect }) => {
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

  const handlePageSelect = (pageType) => {
    if (onPageSelect) {
      onPageSelect(pageType);
    }
  };

  const getPageTitle = () => {
    if (currentPage === 'tour' && selectedTour) {
      return selectedTour.title;
    } else if (currentPage === 'category' && selectedCategory) {
      return selectedCategory.title;
    } else if (currentPage === 'about') {
      return 'О компании';
    } else if (currentPage === 'prices') {
      return 'Цены';
    } else if (currentPage === 'reviews') {
      return 'Отзывы';
    }
    return 'Экскурсии по Пхукету';
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-cyan-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={onBackToMain}>
            <div className="w-14 h-14 rounded-full overflow-hidden shadow-lg">
              <img 
                src="/logo.svg" 
                alt="Пхукет GO"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-teal-500 bg-clip-text text-transparent">
                ПХУКЕТ GO
              </h1>
              <p className="text-xs text-gray-500">{getPageTitle()}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-semibold text-gray-800">+66 94 975 24 66</p>
              <p className="text-xs text-cyan-600">24/7 поддержка</p>
            </div>
            
            <nav className="hidden lg:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('excursions')}
                className="text-gray-700 hover:text-cyan-600 transition-colors font-medium"
              >
                Экскурсии
              </button>
              <button 
                onClick={() => handlePageSelect('prices')}
                className="text-gray-700 hover:text-cyan-600 transition-colors font-medium"
              >
                Цены
              </button>
              <button 
                onClick={() => handlePageSelect('reviews')}
                className="text-gray-700 hover:text-cyan-600 transition-colors font-medium"
              >
                Отзывы
              </button>
              <button 
                onClick={() => handlePageSelect('about')}
                className="text-gray-700 hover:text-cyan-600 transition-colors font-medium"
              >
                О компании
              </button>
            </nav>
            
            <a 
              href="https://t.me/+qkhh55Ozg6gxY2Y1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-2 rounded-full hover:from-cyan-600 hover:to-teal-600 transition-all transform hover:scale-105 font-semibold shadow-lg flex items-center space-x-2"
            >
              <span>💬</span>
              <span>TELEGRAM</span>
            </a>
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/176400/pexels-photo-176400.jpeg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/50"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="animate-fadeInUp">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
              ПХУКЕТ GO
            </span>
          </h1>
          <p className="text-xl md:text-3xl mb-8 text-gray-100 font-light leading-relaxed">
            Откройте для себя райские уголки Таиланда<br />
            <span className="text-cyan-300">вместе с нами</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={scrollToExcursions}
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-10 py-4 rounded-full text-lg font-semibold hover:from-cyan-600 hover:to-teal-600 transition-all transform hover:scale-105 shadow-2xl"
            >
              ВЫБРАТЬ ЭКСКУРСИЮ
            </button>
            <div className="text-cyan-200 text-sm">
              🌟 Более 10,000 довольных туристов
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-teal-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
    </section>
  );
};

// Excursion Categories Component with updated prices in Baht
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
          price: '3,200฿',
          duration: '12 часов',
          groupSize: 'До 20 человек',
          image: 'https://images.pexels.com/photos/18277777/pexels-photo-18277777.jpeg',
          includes: ['Трансфер из отеля', 'Завтрак и обед', 'Снорклинг', 'Билет в национальный парк', 'Гид', 'Маски и ласты'],
          highlights: ['9 необитаемых островов', 'Коралловые рифы', 'Тропические рыбы', 'Черепахи', 'Sailing Rock']
        },
        {
          title: 'Острова Краби на спидботе',
          description: 'Захватывающая экскурсия к четырем островам провинции Краби: Пода, Чикен, Тап и Прананг. Насладитесь снорклингом, пляжами и невероятными пейзажами.',
          price: '2,800฿',
          duration: '8 часов',
          groupSize: 'До 15 человек',
          image: 'https://images.unsplash.com/photo-1534008897995-27a23e859048?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxQaGklMjBQaGklMjBJc2xhbmRzJTIwTWF5YSUyMEJheXxlbnwwfHx8fDE3NTE1NDQ0MDR8MA&ixlib=rb-4.1.0&q=85',
          includes: ['Трансфер из отеля', 'Завтрак и обед', 'Снорклинг', 'Каякинг', 'Гид', 'Безлимитные напитки'],
          highlights: ['Остров Пода', 'Пляж Прананг', 'Остров Чикен', 'Коса Тап', 'Пещеры и лагуны']
        },
        {
          title: 'Дайвинг для начинающих',
          description: 'Первое погружение с аквалангом в кристально чистых водах Андаманского моря. Профессиональные инструкторы научат вас основам дайвинга и покажут подводный мир.',
          price: '3,500฿',
          duration: '8 часов',
          groupSize: 'До 4 человек',
          image: 'https://images.pexels.com/photos/3046582/pexels-photo-3046582.jpeg',
          includes: ['Трансфер из отеля', 'Обед', 'Дайвинг оборудование', 'Инструктор PADI', 'Сертификат', '2 погружения'],
          highlights: ['Коралловые рифы', 'Тропические рыбы', 'Подводные скалы', 'Сертификат PADI', 'Профессиональное оборудование']
        },
        {
          title: 'Снорклинг тур к коралловым рифам',
          description: 'Исследуйте лучшие места для снорклинга вокруг Пхукета. Увидите разноцветные кораллы, тропических рыб и морских звезд в их естественной среде.',
          price: '1,800฿',
          duration: '6 часов',
          groupSize: 'До 20 человек',
          image: 'https://images.pexels.com/photos/8093150/pexels-photo-8093150.jpeg',
          includes: ['Трансфер из отеля', 'Обед', 'Снорклинг оборудование', 'Гид', 'Фрукты', 'Питьевая вода'],
          highlights: ['Коралловые сады', 'Рыба-клоун', 'Морские черепахи', 'Рифовые акулы', 'Подводная фотосессия']
        },
        {
          title: 'Рыбалка в открытом море',
          description: 'Настоящая морская рыбалка в Андаманском море. Попробуйте поймать барракуду, тунца или красного снэппера под руководством опытных рыбаков.',
          price: '2,900฿',
          duration: '8 часов',
          groupSize: 'До 10 человек',
          image: 'https://images.pexels.com/photos/14784268/pexels-photo-14784268.jpeg',
          includes: ['Трансфер из отеля', 'Завтрак и обед', 'Рыболовные снасти', 'Наживка', 'Гид-рыбак', 'Приготовление улова'],
          highlights: ['Глубоководная рыбалка', 'Тропические виды рыб', 'Профессиональные снасти', 'Готовка улова', 'Сертификат рыбака']
        },
        {
          title: 'Романтический круиз на закате',
          description: 'Незабываемый романтический круиз на роскошной яхте во время заката. Насладитесь ужином, шампанским и невероятными видами Андаманского моря.',
          price: '4,200฿',
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
          description: 'Посетите знаменитые острова Пхи-Пхи, включая культовый залив Майя Бэй из фильма "Пляж" с Леонардо Ди Каприо.',
          price: '2,500฿',
          duration: '8 часов',
          groupSize: 'До 15 человек',
          image: 'https://images.pexels.com/photos/1647110/pexels-photo-1647110.jpeg',
          includes: ['Трансфер из отеля', 'Завтрак и обед', 'Снаряжение для снорклинга', 'Профессиональный гид', 'Спасательные жилеты', 'Страховка'],
          highlights: ['Залив Майя Бэй', 'Пещера Викингов', 'Бухта Лох Самах', 'Остров Бамбу', 'Снорклинг с тропическими рыбками']
        },
        {
          title: 'Пхи-Пхи на рассвете (без толп)',
          description: 'Эксклюзивная экскурсия на острова Пхи-Пхи с ранним выездом, чтобы избежать толп туристов.',
          price: '3,200฿',
          duration: '10 часов',
          groupSize: 'До 12 человек',
          image: 'https://images.pexels.com/photos/1647110/pexels-photo-1647110.jpeg',
          includes: ['Ранний трансфер', 'Завтрак и обед', 'Снорклинг', 'Фотосессия на рассвете', 'Гид', 'VIP-сервис'],
          highlights: ['Залив Майя Бэй без толп', 'Рассвет над островами', 'VIP-обслуживание', 'Эксклюзивные фото', 'Приоритетный доступ']
        },
        {
          title: 'Пхи-Пхи + снорклинг тур',
          description: 'Комбинированная экскурсия на острова Пхи-Пхи с акцентом на снорклинг.',
          price: '2,800฿',
          duration: '9 часов',
          groupSize: 'До 18 человек',
          image: 'https://images.pexels.com/photos/8093150/pexels-photo-8093150.jpeg',
          includes: ['Трансфер из отеля', 'Завтрак и обед', 'Профессиональное снорклинг оборудование', 'Инструктор', 'Подводная камера', 'Фрукты'],
          highlights: ['Лучшие споты для снорклинга', 'Коралловые рифы', 'Тропические рыбы', 'Подводная съемка', 'Морские черепахи']
        },
        {
          title: 'Пхи-Пхи на закате',
          description: 'Романтическая вечерняя экскурсия на острова Пхи-Пхи.',
          price: '2,900฿',
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
          description: 'Экскурсия к легендарному острову Ко Тапу из фильма о Джеймсе Бонде "Человек с золотым пистолетом".',
          price: '2,200฿',
          duration: '7 часов',
          groupSize: 'До 12 человек',
          image: 'https://images.pexels.com/photos/6437646/pexels-photo-6437646.jpeg',
          includes: ['Трансфер из отеля', 'Обед', 'Каякинг', 'Посещение деревни на воде', 'Гид', 'Страховка'],
          highlights: ['Остров Ко Тапу', 'Каякинг в пещерах', 'Деревня Панйи', 'Мангровые леса', 'Известняковые скалы']
        },
        {
          title: 'Джеймс Бонд + каякинг в пещерах',
          description: 'Расширенная экскурсия к острову Джеймса Бонда с исследованием скрытых пещер и лагун на каяках.',
          price: '2,600฿',
          duration: '8 часов',
          groupSize: 'До 10 человек',
          image: 'https://images.unsplash.com/photo-1646440912030-d58d2394b1cd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxtYW5ncm92ZSUyMGtheWFraW5nJTIwVGhhaWxhbmR8ZW58MHx8fHwxNzUxNTQ1Njk1fDA&ixlib=rb-4.1.0&q=85',
          includes: ['Трансфер из отеля', 'Обед', 'Каяки и снаряжение', 'Опытный гид-каякер', 'Водонепроницаемые сумки', 'Исследование пещер'],
          highlights: ['Каякинг в пещерах', 'Скрытые лагуны', 'Мангровые туннели', 'Сталактиты и сталагмиты', 'Дикая природа']
        },
        {
          title: 'Джеймс Бонд на лонгтейле',
          description: 'Аутентичная экскурсия к острову Джеймса Бонда на традиционной тайской лодке лонгтейл.',
          price: '1,800฿',
          duration: '6 часов',
          groupSize: 'До 8 человек',
          image: 'https://images.pexels.com/photos/176400/pexels-photo-176400.jpeg',
          includes: ['Трансфер из отеля', 'Обед', 'Лонгтейл лодка', 'Местный гид', 'Рыбалка', 'Традиционный опыт'],
          highlights: ['Традиционная лонгтейл лодка', 'Местная культура', 'Рыбалка с гидом', 'Аутентичный опыт', 'Фото в стиле бонда']
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="excursions">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              ЭКСКУРСИИ НА ПХУКЕТЕ
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Выберите идеальное приключение из нашей коллекции незабываемых экскурсий
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div 
              key={category.id}
              className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 bg-white"
              onClick={() => onCategorySelect(category)}
            >
              <div 
                className="h-80 bg-cover bg-center relative overflow-hidden"
                style={{ backgroundImage: `url(${category.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/60 transition-all duration-500"></div>
                <div className="absolute inset-0 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2 group-hover:scale-105 transition-transform duration-300">
                      {category.title}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <span className="bg-emerald-500/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                        {category.tours.length} экскурсий
                      </span>
                      <span className="text-emerald-300">
                        от {Math.min(...category.tours.map(t => parseInt(t.price.replace(/[^\d]/g, ''))))}฿
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-emerald-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-4xl mb-4">🌊</div>
                    <p className="text-lg font-semibold">Смотреть все экскурсии</p>
                    <div className="mt-2 text-emerald-200">→</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Three Steps Section Component
export const ThreeStepsSection = () => {
  const steps = [
    {
      number: "1",
      title: "Напишите нам",
      description: "Свяжитесь с нами удобным для вас способом – по телефону, Telegram или WhatsApp и сообщите, куда планируете отправиться.",
      icon: "📱"
    },
    {
      number: "2", 
      title: "Оплатите экскурсию",
      description: "Для вашего удобства мы предлагаем различные способы оплаты. Батская банковская карта, наличные, банковский платеж, рубли, криптовалюта",
      icon: "💳"
    },
    {
      number: "3",
      title: "Отправляйтесь в новое приключение", 
      description: "В назначенное время вас заберет наш трансфер и отвезет прямо на остров для отправления на экскурсию. Трансфер включен в стоимость",
      icon: "🚐"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            ТРИ ПРОСТЫХ ШАГА ПУТЕШЕСТВЕННИКА
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto text-2xl group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {step.number}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// About Page Component
export const AboutPage = ({ onBackToMain }) => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container mx-auto px-4 py-12">
        <button
          onClick={onBackToMain}
          className="mb-8 flex items-center text-emerald-600 hover:text-emerald-700 font-medium text-lg transition-colors"
        >
          ← Главная
        </button>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-center text-gray-800 mb-12">О КОМПАНИИ</h1>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Добро пожаловать в мир незабываемых впечатлений на острове Пхукет вместе с Пхукет Go. 
                Мы, как настоящие эксперты, поможем путешественникам открыть для себя удивительный остров 
                Пхукет во всей его красе и сделаем ваш отпуск незабываемым.
              </p>
              
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Наша миссия</h2>
              <p className="text-gray-700 mb-8">
                Наша команда превращает ваши поездки на острове в настоящее приключение. 
                Цель Пхукет Go — сделать ваше пребывание максимально незабываемым и комфортным, 
                будь то ваш первый визит или вы уже давно влюблены в этот тропический рай.
              </p>
              
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Что мы предлагаем</h2>
              <p className="text-gray-700 mb-6">
                Мы предлагаем экскурсии на Пхукете, где каждый гость найдет идеальный тур для себя.
              </p>
              
              <ul className="space-y-4 text-gray-700 mb-8">
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-3 mt-1">•</span>
                  Разнообразные экскурсии: от захватывающих морских прогулок, насыщенных туров на материк до вечерних шоу на Пхукете
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-3 mt-1">•</span>
                  Поддержка на русском языке: наша команда русскоязычных менеджеров всегда на связи
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-3 mt-1">•</span>
                  Комфорт и безопасность: мы гарантируем безопасность и надежность на каждом этапе тура
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-3 mt-1">•</span>
                  Гибкие варианты оплаты: мы предлагаем различные способы оплаты
                </li>
              </ul>
              
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Почему выбирают Пхукет Go</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-emerald-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-emerald-800 mb-2">Многолетний опыт</h3>
                  <p className="text-gray-700 text-sm">Благодаря нашему опыту, мы предлагаем проверенные экскурсии</p>
                </div>
                <div className="bg-emerald-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-emerald-800 mb-2">Положительные отзывы</h3>
                  <p className="text-gray-700 text-sm">Туристы уже оценили высокий уровень сервиса</p>
                </div>
                <div className="bg-emerald-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-emerald-800 mb-2">Гибкость и внимание к деталям</h3>
                  <p className="text-gray-700 text-sm">Мы подбираем с учетом ваших предпочтений</p>
                </div>
                <div className="bg-emerald-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-emerald-800 mb-2">Официальная лицензия</h3>
                  <p className="text-gray-700 text-sm">Как лицензированная компания, мы гарантируем полную надежность</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Prices Page Component  
export const PricesPage = ({ onBackToMain }) => {
  const priceCategories = [
    {
      title: "Морские экскурсии",
      prices: [
        { name: "Симиланские острова", price: "3,200฿", duration: "12 часов" },
        { name: "Острова Краби", price: "2,800฿", duration: "8 часов" },
        { name: "Снорклинг тур", price: "1,800฿", duration: "6 часов" },
        { name: "Дайвинг для начинающих", price: "3,500฿", duration: "8 часов" },
        { name: "Морская рыбалка", price: "2,900฿", duration: "8 часов" },
        { name: "Романтический круиз", price: "4,200฿", duration: "4 часа" }
      ]
    },
    {
      title: "Острова Пхи-Пхи", 
      prices: [
        { name: "Пхи-Пхи на спидботе", price: "2,500฿", duration: "8 часов" },
        { name: "Пхи-Пхи на рассвете", price: "3,200฿", duration: "10 часов" },
        { name: "Пхи-Пхи + снорклинг", price: "2,800฿", duration: "9 часов" },
        { name: "Пхи-Пхи на закате", price: "2,900฿", duration: "8 часов" }
      ]
    },
    {
      title: "Джеймс Бонд",
      prices: [
        { name: "Остров Джеймса Бонда", price: "2,200฿", duration: "7 часов" },
        { name: "Джеймс Бонд + каякинг", price: "2,600฿", duration: "8 часов" },
        { name: "Джеймс Бонд на лонгтейле", price: "1,800฿", duration: "6 часов" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container mx-auto px-4 py-12">
        <button
          onClick={onBackToMain}
          className="mb-8 flex items-center text-emerald-600 hover:text-emerald-700 font-medium text-lg transition-colors"
        >
          ← Главная
        </button>
        
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-center text-gray-800 mb-12">ЦЕНЫ НА ЭКСКУРСИИ</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {priceCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-emerald-600 mb-6 text-center">
                  {category.title}
                </h2>
                <div className="space-y-4">
                  {category.prices.map((item, i) => (
                    <div key={i} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-emerald-50 transition-colors">
                      <div>
                        <h3 className="font-semibold text-gray-800">{item.name}</h3>
                        <p className="text-sm text-gray-600">{item.duration}</p>
                      </div>
                      <div className="text-xl font-bold text-emerald-600">
                        {item.price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Скидки при бронировании от 3х экскурсий</h2>
            <p className="text-xl mb-6">Получите скидку до 15% при заказе нескольких экскурсий</p>
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Узнать подробности
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reviews Page Component
export const ReviewsPage = ({ onBackToMain }) => {
  const reviews = [
    {
      name: "Анна Петрова",
      rating: 5,
      date: "15 февраля 2025",
      tour: "Острова Пхи-Пхи",
      text: "Невероятная экскурсия! Организация на высшем уровне, гид был очень внимательным и знающим. Виды просто потрясающие! Особенно понравился залив Майя Бэй - такой красоты я никогда не видела.",
      avatar: "👩‍🦰"
    },
    {
      name: "Михаил Сидоров",
      rating: 5, 
      date: "8 февраля 2025",
      tour: "Симиланские острова",
      text: "Отличное соотношение цены и качества. Все было организовано четко по времени, обед вкусный, снорклинг незабываемый! Видели черепах и множество тропических рыб. Команда профессиональная.",
      avatar: "👨‍💼"
    },
    {
      name: "Елена Коваленко",
      rating: 4,
      date: "28 января 2025",
      tour: "Джеймс Бонд + каякинг", 
      text: "Очень понравилось! Каякинг в пещерах - это что-то невероятное. Единственный минус - много людей на основных точках, но это не помешало насладиться красотой природы.",
      avatar: "👩‍🎓"
    },
    {
      name: "Дмитрий Волков",
      rating: 5,
      date: "20 января 2025", 
      tour: "Дайвинг для начинающих",
      text: "Первый раз пробовал дайвинг и остался в полном восторге! Инструктор очень терпеливый, все объяснил, чувствовал себя безопасно. Подводный мир Андаманского моря просто фантастический!",
      avatar: "👨‍🔬"
    },
    {
      name: "Ольга Смирнова",
      rating: 5,
      date: "12 января 2025",
      tour: "Романтический круиз",
      text: "Идеальная экскурсия для пары! Закат был волшебным, ужин изысканный, обслуживание на высоте. Фотограф сделал потрясающие снимки. Рекомендую всем влюбленным!",
      avatar: "👩‍❤️‍👨"
    },
    {
      name: "Александр Попов",
      rating: 5,
      date: "5 января 2025",
      tour: "Морская рыбалка", 
      text: "Отличная рыбалка! Поймал барракуду и красного снэппера. Капитан знает лучшие места, снасти профессиональные. А когда приготовили улов на обед - объедение! Мужчинам очень рекомендую.",
      avatar: "👨‍🎣"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container mx-auto px-4 py-12">
        <button
          onClick={onBackToMain}
          className="mb-8 flex items-center text-emerald-600 hover:text-emerald-700 font-medium text-lg transition-colors"
        >
          ← Главная
        </button>
        
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-center text-gray-800 mb-4">ОТЗЫВЫ ТУРИСТОВ</h1>
          <p className="text-xl text-gray-600 text-center mb-12">Более 10,000 довольных путешественников уже выбрали нас</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{review.avatar}</div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{review.name}</h3>
                    <div className="flex items-center mt-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-500">⭐</span>
                      ))}
                      <span className="text-gray-500 text-sm ml-2">{review.date}</span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-3">
                  <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                    {review.tour}
                  </span>
                </div>
                
                <p className="text-gray-700 leading-relaxed">{review.text}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-white rounded-2xl shadow-xl p-8 inline-block">
              <div className="text-4xl mb-4">⭐</div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">4.9 из 5</h2>
              <p className="text-gray-600">Средняя оценка наших экскурсий</p>
              <p className="text-sm text-gray-500 mt-2">На основе 1,247 отзывов</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// FAQ Component with improved design
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
      answer: 'Мы принимаем оплату наличными (баты и рубли), банковскими картами Visa/MasterCard, а также через онлайн-переводы. Возможна оплата частями: 50% при бронировании, 50% перед экскурсией.'
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
    <section className="py-20 bg-white" id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ
          </h2>
          <p className="text-xl text-gray-600">Ответы на самые популярные вопросы наших туристов</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full text-left p-6 bg-gradient-to-r from-emerald-50 to-teal-50 hover:from-emerald-100 hover:to-teal-100 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-gray-800 pr-4 text-lg">{faq.question}</h3>
                  <span className="text-emerald-600 text-2xl font-bold flex-shrink-0 transform transition-transform duration-300">
                    {activeIndex === index ? '−' : '+'}
                  </span>
                </div>
              </button>
              
              {activeIndex === index && (
                <div className="mt-2 p-6 bg-gray-50 rounded-xl animate-fadeIn border-l-4 border-emerald-500">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Why Choose Us Component with improved design
export const WhyChooseUs = () => {
  const reasons = [
    {
      icon: '🏆',
      title: 'Работаем официально лицензия 12/03586',
      description: 'Полностью легальная туристическая компания с государственной лицензией'
    },
    {
      icon: '⭐',
      title: 'Только положительные отзывы',
      description: 'Более 10,000 довольных туристов и рейтинг 4.9 из 5 звезд'
    },
    {
      icon: '💳',
      title: 'Удобная система оплаты',
      description: 'Принимаем все виды оплат: карты, наличные, криптовалюта'
    },
    {
      icon: '🎯',
      title: 'Лучшее соотношение цены и качества',
      description: 'Конкурентные цены при высочайшем качестве обслуживания'
    },
    {
      icon: '🎫',
      title: 'Скидки при бронировании от 3х экскурсий',
      description: 'Выгодные предложения для постоянных клиентов до 15%'
    },
    {
      icon: '🛡️',
      title: 'Страховка включена',
      description: 'Полная страховая защита во время всех экскурсий'
    },
    {
      icon: '👥',
      title: 'Индивидуальный подход',
      description: 'Персональное внимание к каждому клиенту и его пожеланиям'
    },
    {
      icon: '🌏',
      title: 'Онлайн поддержка 24/7',
      description: 'Круглосуточная помощь на русском языке в любое время'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            ПОЧЕМУ МЫ?
          </h2>
          <p className="text-xl text-gray-600">8 причин выбрать Пхукет Go для ваших приключений</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div key={index} className="group text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{reason.icon}</div>
              <h3 className="font-semibold text-gray-800 mb-3 text-lg leading-tight">{reason.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Form Component with improved design
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
    <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600" id="contacts">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              ОСТАВИТЬ ЗАЯВКУ
            </h2>
            <p className="text-xl text-emerald-100">Свяжитесь с нами и мы подберем идеальную экскурсию для вас</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Ваше имя</label>
                  <input
                    type="text"
                    placeholder="Введите ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full p-4 border border-gray-300 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Номер телефона</label>
                  <input
                    type="tel"
                    placeholder="+66 xxx xxx xxx"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full p-4 border border-gray-300 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Комментарий</label>
                <textarea
                  placeholder="Расскажите о ваших пожеланиях или задайте вопрос..."
                  value={formData.comment}
                  onChange={(e) => setFormData({...formData, comment: e.target.value})}
                  rows="4"
                  className="w-full p-4 border border-gray-300 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                />
              </div>
              
              <div>
                <p className="text-gray-700 font-semibold mb-3">Как с вами удобнее связаться?</p>
                <div className="flex space-x-6">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      value="telegram"
                      checked={formData.contact === 'telegram'}
                      onChange={(e) => setFormData({...formData, contact: e.target.value})}
                      className="mr-3 w-4 h-4 text-emerald-600"
                    />
                    <span className="text-gray-700">📱 Telegram</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      value="whatsapp"
                      checked={formData.contact === 'whatsapp'}
                      onChange={(e) => setFormData({...formData, contact: e.target.value})}
                      className="mr-3 w-4 h-4 text-emerald-600"
                    />
                    <span className="text-gray-700">💬 WhatsApp</span>
                  </label>
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-4 rounded-xl text-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all transform hover:scale-105 shadow-lg"
              >
                Отправить заявку
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component with improved design
export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">🏝️</span>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                ПХУКЕТ GO
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Официальный туроператор по Пхукету с лицензией 12/03586. 
              Создаем незабываемые путешествия с 2020 года.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-lg">Контакты</h4>
            <div className="space-y-3 text-gray-400">
              <p className="flex items-center">
                <span className="mr-2">📞</span> +66 94 975 24 66
              </p>
              <p className="flex items-center">
                <span className="mr-2">📧</span> info@phuketgo.tours
              </p>
              <p className="flex items-center">
                <span className="mr-2">📍</span> Пхукет, Таиланд
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-lg">Популярные экскурсии</h4>
            <div className="space-y-2 text-gray-400">
              <p className="hover:text-emerald-400 transition-colors cursor-pointer">Острова Пхи-Пхи</p>
              <p className="hover:text-emerald-400 transition-colors cursor-pointer">Остров Джеймса Бонда</p>
              <p className="hover:text-emerald-400 transition-colors cursor-pointer">Симиланские острова</p>
              <p className="hover:text-emerald-400 transition-colors cursor-pointer">Дайвинг и снорклинг</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-lg">Следите за нами</h4>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                <span className="text-white">f</span>
              </div>
              <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-pink-700 transition-colors">
                <span className="text-white">📷</span>
              </div>
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-700 transition-colors">
                <span className="text-white">💬</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Пхукет Go. Все права защищены. Лицензия туроператора 12/03586</p>
        </div>
      </div>
    </footer>
  );
};