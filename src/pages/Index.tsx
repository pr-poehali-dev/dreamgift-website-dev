import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    recipient: '',
    occasion: '',
    budget: ''
  });

  const topGifts = [
    { 
      id: 1, 
      title: 'Умная колонка Яндекс.Станция', 
      category: 'Технологии', 
      price: '12 990 ₽',
      image: 'https://cdn.poehali.dev/files/634288e3-f05e-4fe8-ae58-9ee37c471917.jpg',
      rating: 4.9 
    },
    { 
      id: 2, 
      title: 'Набор премиальной косметики', 
      category: 'Красота', 
      price: '8 500 ₽',
      image: 'https://cdn.poehali.dev/files/634288e3-f05e-4fe8-ae58-9ee37c471917.jpg',
      rating: 4.8 
    },
    { 
      id: 3, 
      title: 'Беспроводные наушники Sony', 
      category: 'Аудио', 
      price: '15 990 ₽',
      image: 'https://cdn.poehali.dev/files/634288e3-f05e-4fe8-ae58-9ee37c471917.jpg',
      rating: 4.9 
    },
  ];

  const advantages = [
    {
      icon: 'Sparkles',
      title: 'Персонализация AI',
      description: 'Искусственный интеллект анализирует предпочтения и подбирает идеальный подарок'
    },
    {
      icon: 'Clock',
      title: 'Экономия времени',
      description: 'Не нужно часами искать в интернете — AI сделает это за секунды'
    },
    {
      icon: 'TrendingUp',
      title: 'Умный анализ',
      description: 'Учитываем возраст, интересы, повод и бюджет для точных рекомендаций'
    },
    {
      icon: 'Award',
      title: '100% попадание',
      description: 'Наши рекомендации основаны на миллионах успешных подарков'
    }
  ];

  const howItWorks = [
    {
      step: '01',
      title: 'Опишите получателя',
      description: 'Расскажите о человеке: возраст, интересы, хобби',
      icon: 'User'
    },
    {
      step: '02',
      title: 'Укажите повод и бюджет',
      description: 'День рождения, свадьба или просто так? Какой бюджет планируете?',
      icon: 'Calendar'
    },
    {
      step: '03',
      title: 'AI анализирует данные',
      description: 'Нейросеть обрабатывает информацию и ищет оптимальные варианты',
      icon: 'Brain'
    },
    {
      step: '04',
      title: 'Получите подборку',
      description: 'Персональные рекомендации с ссылками на магазины партнеров',
      icon: 'Gift'
    }
  ];

  const partners = [
    'Wildberries', 'OZON', 'Яндекс.Маркет', 'Lamoda', 'М.Видео'
  ];

  const reviews = [
    {
      name: 'Анна Соколова',
      text: 'Искала подарок мужу на 10 лет вместе. AI подобрал идеальные часы — он в восторге!',
      rating: 5,
      avatar: '👩'
    },
    {
      name: 'Михаил Петров',
      text: 'Корпоративные подарки для 50 сотрудников подобрали за 5 минут. Все довольны!',
      rating: 5,
      avatar: '👨'
    },
    {
      name: 'Елена Волкова',
      text: 'Не знала что подарить подруге. Сервис предложил уникальный набор, которого я никогда не нашла бы сама',
      rating: 5,
      avatar: '👩‍🦰'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Gift" className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                DreamGift AI
              </span>
            </div>
            
            <nav className="hidden md:flex items-center gap-8">
              <a 
                href="#home" 
                onClick={() => setActiveSection('home')}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Главная
              </a>
              <a 
                href="#how" 
                onClick={() => setActiveSection('how')}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Как работает
              </a>
              <a 
                href="#services" 
                onClick={() => setActiveSection('services')}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Услуги
              </a>
              <a 
                href="#about" 
                onClick={() => setActiveSection('about')}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                О компании
              </a>
              <a 
                href="#contacts" 
                onClick={() => setActiveSection('contacts')}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Контакты
              </a>
            </nav>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="MessageCircle" size={20} />
              </Button>
              <Button className="hidden md:inline-flex bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                Попробовать
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 mb-6">
                <Icon name="Sparkles" size={16} className="text-secondary" />
                <span className="text-sm font-medium">Искусственный интеллект в подборе подарков</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
                Идеальный подарок<br />за 60 секунд
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Нейросеть анализирует получателя и находит персональные варианты среди тысяч товаров от проверенных партнеров
              </p>
            </div>

            <Card className="max-w-2xl mx-auto shadow-2xl border-0 bg-white/80 backdrop-blur">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Начните подбор подарка</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Кому подарок?</label>
                    <Select onValueChange={(value) => setFormData({...formData, recipient: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите получателя" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="partner">Партнёр / супруг(а)</SelectItem>
                        <SelectItem value="parent">Родитель</SelectItem>
                        <SelectItem value="friend">Друг / подруга</SelectItem>
                        <SelectItem value="colleague">Коллега</SelectItem>
                        <SelectItem value="child">Ребёнок</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Повод</label>
                    <Select onValueChange={(value) => setFormData({...formData, occasion: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите повод" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="birthday">День рождения</SelectItem>
                        <SelectItem value="wedding">Свадьба</SelectItem>
                        <SelectItem value="anniversary">Годовщина</SelectItem>
                        <SelectItem value="newyear">Новый год</SelectItem>
                        <SelectItem value="justsoso">Просто так</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Бюджет</label>
                    <Select onValueChange={(value) => setFormData({...formData, budget: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Укажите бюджет" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1000-3000">1 000 - 3 000 ₽</SelectItem>
                        <SelectItem value="3000-7000">3 000 - 7 000 ₽</SelectItem>
                        <SelectItem value="7000-15000">7 000 - 15 000 ₽</SelectItem>
                        <SelectItem value="15000+">15 000+ ₽</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-primary to-secondary text-white py-6 text-lg font-semibold hover:opacity-90 transition-opacity"
                  >
                    <Icon name="Sparkles" className="mr-2" />
                    Подобрать подарок с AI
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Топ подарков недели</h2>
              <p className="text-gray-600 text-lg">Самые популярные рекомендации нашего AI</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {topGifts.map((gift) => (
                <Card key={gift.id} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden">
                  <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-50 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-6xl">
                      🎁
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-sm text-gray-600 ml-2">{gift.rating}</span>
                    </div>
                    <span className="text-xs text-secondary font-semibold">{gift.category}</span>
                    <h3 className="font-bold text-lg mt-1 mb-3">{gift.title}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">{gift.price}</span>
                      <Button size="sm" className="bg-gradient-to-r from-primary to-secondary">
                        Смотреть
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Почему DreamGift AI?</h2>
              <p className="text-gray-600 text-lg">Технологии будущего для идеального выбора</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {advantages.map((adv, index) => (
                <Card key={index} className="text-center p-8 hover:shadow-xl transition-shadow border-0 bg-white">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary mx-auto mb-4 flex items-center justify-center">
                    <Icon name={adv.icon as any} className="text-white" size={32} />
                  </div>
                  <h3 className="font-bold text-xl mb-3">{adv.title}</h3>
                  <p className="text-gray-600">{adv.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="how" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Как это работает</h2>
              <p className="text-gray-600 text-lg">Простой процесс от идеи до покупки</p>
            </div>

            <div className="max-w-4xl mx-auto">
              {howItWorks.map((step, index) => (
                <div key={index} className="flex gap-8 mb-12 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <span className="text-3xl font-bold text-white">{step.step}</span>
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <div className="flex items-start gap-4 mb-2">
                      <Icon name={step.icon as any} className="text-secondary mt-1" size={24} />
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                        <p className="text-gray-600 text-lg">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-6 text-lg hover:opacity-90">
                Попробовать демо-режим
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы клиентов</h2>
              <p className="text-gray-600 text-lg">Тысячи довольных пользователей по всей России</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {reviews.map((review, index) => (
                <Card key={index} className="p-8 hover:shadow-xl transition-shadow border-0">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl">
                      {review.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold">{review.name}</h4>
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon key={i} name="Star" size={14} className="fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{review.text}"</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white border-y">
          <div className="container mx-auto px-4">
            <h3 className="text-center text-xl font-bold mb-8 text-gray-400">Наши партнёры</h3>
            <div className="flex flex-wrap justify-center items-center gap-12">
              {partners.map((partner, index) => (
                <div key={index} className="text-2xl font-bold text-gray-300 hover:text-primary transition-colors">
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contacts" className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Готовы найти идеальный подарок?</h2>
            <p className="text-xl mb-8 opacity-90">Начните прямо сейчас — это займёт меньше минуты</p>
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg font-semibold">
              Попробовать бесплатно
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Icon name="Gift" className="text-white" size={20} />
                </div>
                <span className="text-xl font-bold">DreamGift AI</span>
              </div>
              <p className="text-gray-400 text-sm">
                Инновационный сервис подбора подарков с помощью искусственного интеллекта
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Преимущества</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Партнёры</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Подбор подарка</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Корпоративные заказы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Премиум тарифы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API для бизнеса</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  hello@dreamgift.ai
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Clock" size={16} />
                  Отвечаем за 15 минут
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2024 DreamGift AI. Все права защищены
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="MessageCircle" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
