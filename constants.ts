import { PricingTier, FaqItem, Review, TimeSlot } from './types';

export const NAV_LINKS = [
  { name: 'Home', href: '#hero' },
  { name: 'Tariffs', href: '#tariffs' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'single',
    title: 'One-Shot',
    subtitle: 'Точечный удар',
    topicCount: 1,
    pricePerTopic: 2000, // Example currency
    totalPrice: 2000,
    description: 'Идеально для разбора сложной темы или подготовки к контрольной.',
    features: ['1 час интенсива', 'Выбор конкретной темы', 'Личный график', 'Конспект после урока'],
  },
  {
    id: 'basic',
    title: 'Base',
    subtitle: 'Фундамент',
    topicCount: 5,
    pricePerTopic: 1800,
    totalPrice: 9000,
    discount: '-10%',
    description: 'Закрепление блока тем. Подойдет для устранения пробелов.',
    features: ['5 занятий', 'Домашние задания', 'Связь 24/7', 'Отчет прогресса'],
  },
  {
    id: 'standard',
    title: 'Core',
    subtitle: 'Стандарт',
    topicCount: 10,
    pricePerTopic: 1600,
    totalPrice: 16000,
    discount: '-20%',
    recommended: true,
    description: 'Уверенное прохождение программы. Системный подход.',
    features: ['10 занятий', 'Пробный экзамен', 'Индивидуальный план', 'Доступ к базе знаний'],
  },
  {
    id: 'max',
    title: 'Ultimate',
    subtitle: 'Максимум',
    topicCount: 20,
    pricePerTopic: 1400,
    totalPrice: 28000,
    discount: '-30%',
    description: 'Полное погружение. Гарантия результата при выполнении рекомендаций.',
    features: ['20 занятий', 'Приоритет в расписании', 'Менторство', 'Стратегия поступления'],
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: '1',
    question: 'Как проходят занятия?',
    answer: 'Все занятия проходят онлайн на удобной платформе с интерактивной доской. Мы не просто учим, мы строим нейронные связи.'
  },
  {
    id: '2',
    question: 'Что если я не смогу прийти?',
    answer: 'Мы ценим гибкость. Перенос занятия возможен за 24 часа до начала без потери оплаты.'
  },
  {
    id: '3',
    question: 'Как оплатить?',
    answer: 'Оплата производится картой или переводом. Для пакетов доступна рассрочка 50/50.'
  },
  {
    id: '4',
    question: 'Какой уровень подготовки нужен?',
    answer: 'Любой. F.O.K. адаптируется под текущий уровень знаний ученика, от нуля до профи.'
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Алексей С.',
    role: 'Студент, 1 курс',
    rating: 5,
    text: 'F0nkell объясняет так, что квантовая физика кажется проще таблицы умножения. Сдал ЕГЭ на 92 балла!'
  },
  {
    id: '2',
    name: 'Мария К.',
    role: '11 класс',
    rating: 5,
    text: 'Формат занятий — пушка. Никакой нудятины, только хардкор и реальные знания. Очень нравится дизайн материалов.'
  },
  {
    id: '3',
    name: 'Дмитрий В.',
    role: 'Родитель',
    rating: 5,
    text: 'Сын впервые перестал бояться уроков. Система F.O.K. действительно работает. Спасибо за подход.'
  },
];

export const TIME_SLOTS: TimeSlot[] = [
  { id: '1', time: '14:00', available: true },
  { id: '2', time: '15:30', available: true },
  { id: '3', time: '17:00', available: false },
  { id: '4', time: '18:30', available: true },
  { id: '5', time: '20:00', available: true },
];