import type { Question } from '../types'
import { shortQuestions } from './questions-short'

const longOnlyQuestions: Question[] = [
  {
    id: 16,
    text: 'Как ты реагируешь на ошибки в коде?',
    answers: [
      { text: 'Ищу причину методично, шаг за шагом', scores: { backend: 2, qa: 2, dba: 1 } },
      { text: 'Пробую разные подходы наугад', scores: { frontend: 2, gamedev: 1 } },
      { text: 'Анализирую логи и метрики', scores: { devops: 2, datascience: 1, security: 1 } },
      { text: 'Спрашиваю у ChatGPT / Google', scores: { frontend: 1, mobile: 1, pm: 1 } },
    ],
  },
  {
    id: 17,
    text: 'Что тебе интереснее: фронт или бэк?',
    answers: [
      { text: 'Фронт — хочу видеть результат сразу', scores: { frontend: 3, design: 1 } },
      { text: 'Бэк — логика и архитектура', scores: { backend: 3, dba: 1 } },
      { text: 'И то, и другое (fullstack)', scores: { frontend: 2, backend: 2, mobile: 1 } },
      { text: 'Ни то, ни другое — что-то другое', scores: { devops: 1, qa: 1, pm: 1, security: 1 } },
    ],
  },
  {
    id: 18,
    text: 'Как относишься к работе с командной строкой (терминал)?',
    answers: [
      { text: 'Обожаю — это моя стихия', scores: { devops: 3, sysadmin: 2, security: 1 } },
      { text: 'Нормально, использую когда надо', scores: { backend: 2, datascience: 1, ml: 1 } },
      { text: 'Терплю, но предпочитаю GUI', scores: { frontend: 2, design: 2, qa: 1 } },
      { text: 'Избегаю по возможности', scores: { design: 1, pm: 2, gamedev: 1 } },
    ],
  },
  {
    id: 19,
    text: 'Какой язык программирования тебе ближе по духу?',
    answers: [
      { text: 'Python — простой и мощный', scores: { ml: 2, datascience: 2, backend: 1, security: 1 } },
      { text: 'JavaScript — везде и для всего', scores: { frontend: 3, mobile: 1 } },
      { text: 'C/C++ — контроль и производительность', scores: { embedded: 3, gamedev: 2, security: 1 } },
      { text: 'Пока не пробовал / не знаю', scores: { pm: 1, design: 1, qa: 1 } },
    ],
  },
  {
    id: 20,
    text: 'Что тебя больше бесит?',
    answers: [
      { text: 'Кривой UI / плохой дизайн', scores: { design: 3, frontend: 2 } },
      { text: 'Медленный сайт / приложение', scores: { backend: 2, devops: 2, frontend: 1 } },
      { text: 'Баги и нестабильность', scores: { qa: 3, backend: 1 } },
      { text: 'Утечки данных / взломы', scores: { security: 3, devops: 1 } },
    ],
  },
  {
    id: 21,
    text: 'Как ты работаешь с большим объёмом информации?',
    answers: [
      { text: 'Структурирую в таблицы и графики', scores: { datascience: 3, dba: 1 } },
      { text: 'Ищу паттерны и аномалии', scores: { ml: 2, security: 2, datascience: 1 } },
      { text: 'Разбиваю на части и решаю по очереди', scores: { backend: 2, pm: 2 } },
      { text: 'Теряюсь и откладываю', scores: { design: 1, gamedev: 1 } },
    ],
  },
  {
    id: 22,
    text: 'Интересны ли тебе игры как индустрия?',
    answers: [
      { text: 'Да, хочу делать игры!', scores: { gamedev: 3, design: 1 } },
      { text: 'Играю, но делать не хочу', scores: { frontend: 1, backend: 1 } },
      { text: 'Интересна геймдев-технологи (движки, физика)', scores: { gamedev: 2, embedded: 1 } },
      { text: 'Не интересно', scores: { backend: 1, datascience: 1, devops: 1 } },
    ],
  },
  {
    id: 23,
    text: 'Как ты относишься к работе с базами данных?',
    answers: [
      { text: 'Обожаю SQL и оптимизацию запросов', scores: { dba: 3, backend: 2 } },
      { text: 'Нормально, использую когда надо', scores: { backend: 2, datascience: 1 } },
      { text: 'Предпочитаю NoSQL / MongoDB', scores: { backend: 1, mobile: 1 } },
      { text: 'Избегаю — сложно и скучно', scores: { frontend: 2, design: 1, gamedev: 1 } },
    ],
  },
  {
    id: 24,
    text: 'Что тебе ближе: iOS или Android?',
    answers: [
      { text: 'iOS (Apple)', scores: { mobile: 2, design: 1 } },
      { text: 'Android', scores: { mobile: 2, backend: 1 } },
      { text: 'Обе платформы сразу', scores: { mobile: 3, frontend: 1 } },
      { text: 'Мобилки не интересуют', scores: { backend: 1, frontend: 1, devops: 1 } },
    ],
  },
  {
    id: 25,
    text: 'Как ты относишься к документации?',
    answers: [
      { text: 'Пишу подробно — это важно', scores: { backend: 2, pm: 2, qa: 1 } },
      { text: 'Читаю, но сам не пишу', scores: { frontend: 1, mobile: 1 } },
      { text: 'Документация скучная, лучше код', scores: { gamedev: 1, embedded: 1, security: 1 } },
      { text: 'Документация — лучший способ учиться', scores: { devops: 2, sysadmin: 1, dba: 1 } },
    ],
  },
  {
    id: 26,
    text: 'Что тебя привлекает в AI / ChatGPT?',
    answers: [
      { text: 'Хочу создавать такие модели', scores: { ml: 3, datascience: 1 } },
      { text: 'Хочу использовать AI в своих проектах', scores: { backend: 1, frontend: 1, pm: 1 } },
      { text: 'Интересно, но не моё', scores: { frontend: 1, qa: 1, design: 1 } },
      { text: 'AI — будущее, хочу быть частью', scores: { ml: 2, datascience: 2 } },
    ],
  },
  {
    id: 27,
    text: 'Как ты предпочитаешь работать?',
    answers: [
      { text: 'Один — глубокое погружение', scores: { ml: 1, security: 1, embedded: 1, backend: 1 } },
      { text: 'В команде — обмен идеями', scores: { pm: 2, frontend: 1, design: 1 } },
      { text: 'Пара программистов (pair programming)', scores: { backend: 1, frontend: 1, qa: 1 } },
      { text: 'Зависит от задачи', scores: { devops: 1, datascience: 1 } },
    ],
  },
  {
    id: 28,
    text: 'Что тебе интереснее настроить?',
    answers: [
      { text: 'CI/CD пайплайн для автодеплоя', scores: { devops: 3, backend: 1 } },
      { text: 'Красивую анимацию на сайте', scores: { frontend: 3, design: 1 } },
      { text: 'Автотесты для приложения', scores: { qa: 3, backend: 1 } },
      { text: 'Firewall и систему безопасности', scores: { security: 3, sysadmin: 1 } },
    ],
  },
  {
    id: 29,
    text: 'Как ты относишься к open source?',
    answers: [
      { text: 'Хочу контрибутить в проекты', scores: { backend: 1, devops: 1, frontend: 1, ml: 1 } },
      { text: 'Использую, но не контрибучу', scores: { frontend: 1, mobile: 1, datascience: 1 } },
      { text: 'Не интересно', scores: { pm: 1, qa: 1 } },
      { text: 'Хочу создать свой open source проект', scores: { backend: 2, frontend: 1, gamedev: 1 } },
    ],
  },
  {
    id: 30,
    text: 'Что тебе ближе: стартап или корпорация?',
    answers: [
      { text: 'Стартап — быстро, много задач', scores: { frontend: 1, mobile: 1, pm: 2 } },
      { text: 'Корпорация — стабильность', scores: { dba: 1, sysadmin: 2, qa: 1 } },
      { text: 'Без разницы, главное — интересные задачи', scores: { backend: 1, ml: 1, security: 1 } },
      { text: 'Своё дело / фриланс', scores: { design: 1, frontend: 1, gamedev: 1 } },
    ],
  },
  {
    id: 31,
    text: 'Как ты относишься к дизайну?',
    answers: [
      { text: 'Хочу сам проектировать интерфейсы', scores: { design: 3, frontend: 1 } },
      { text: 'Важно, но пусть дизайнер делает', scores: { frontend: 2, mobile: 1 } },
      { text: 'Главное — функциональность', scores: { backend: 2, devops: 1, embedded: 1 } },
      { text: 'Дизайн — не моя область', scores: { backend: 1, datascience: 1, security: 1 } },
    ],
  },
  {
    id: 32,
    text: 'Что тебя привлекает в облачных технологиях (AWS, GCP)?',
    answers: [
      { text: 'Хочу администрировать облако', scores: { devops: 3, sysadmin: 1 } },
      { text: 'Хочу деплоить свои приложения', scores: { backend: 2, frontend: 1 } },
      { text: 'Интересно, но пока рано', scores: { backend: 1, mobile: 1 } },
      { text: 'Не интересно', scores: { design: 1, gamedev: 1, qa: 1 } },
    ],
  },
  {
    id: 33,
    text: 'Как ты относишься к тестированию своего кода?',
    answers: [
      { text: 'Пишу тесты всегда', scores: { qa: 2, backend: 2 } },
      { text: 'Тестирую вручную перед сдачей', scores: { frontend: 1, mobile: 1 } },
      { text: 'Тесты пишут другие', scores: { frontend: 1, gamedev: 1 } },
      { text: 'Хочу профессионально заниматься тестированием', scores: { qa: 3 } },
    ],
  },
  {
    id: 34,
    text: 'Что тебе интереснее: веб или десктоп?',
    answers: [
      { text: 'Веб — сайты и веб-приложения', scores: { frontend: 2, backend: 2 } },
      { text: 'Десктоп — программы для Windows/Mac', scores: { backend: 1, gamedev: 1, embedded: 1 } },
      { text: 'Мобильные приложения', scores: { mobile: 3 } },
      { text: 'Всё сразу', scores: { frontend: 1, mobile: 1, backend: 1 } },
    ],
  },
  {
    id: 35,
    text: 'Как ты относишься к работе с железом?',
    answers: [
      { text: 'Обожаю паять и собирать', scores: { embedded: 3, sysadmin: 1 } },
      { text: 'Нормально, если нужно', scores: { devops: 1, sysadmin: 2 } },
      { text: 'Только софт, железо — не моё', scores: { frontend: 2, backend: 1, design: 1 } },
      { text: 'Хочу программировать роботов', scores: { embedded: 2, ml: 1 } },
    ],
  },
  {
    id: 36,
    text: 'Что тебе ближе: продукт или технология?',
    answers: [
      { text: 'Продукт — что нужно пользователям', scores: { pm: 3, design: 1 } },
      { text: 'Технология — как это работает', scores: { backend: 2, devops: 1, ml: 1 } },
      { text: 'И то, и другое', scores: { frontend: 1, mobile: 1, datascience: 1 } },
      { text: 'Не задумывался', scores: {} },
    ],
  },
  {
    id: 37,
    text: 'Как ты относишься к Agile / Scrum?',
    answers: [
      { text: 'Хочу быть Scrum Master / PM', scores: { pm: 3 } },
      { text: 'Нормально, работаю в таких командах', scores: { frontend: 1, backend: 1, qa: 1 } },
      { text: 'Не нравится — слишком много митингов', scores: { backend: 1, ml: 1, security: 1 } },
      { text: 'Не знаю, что это', scores: { design: 1, gamedev: 1 } },
    ],
  },
  {
    id: 38,
    text: 'Что тебя привлекает в Data Science?',
    answers: [
      { text: 'Предсказывать будущее по данным', scores: { datascience: 3, ml: 1 } },
      { text: 'Красивые дашборды и визуализации', scores: { datascience: 2, design: 1 } },
      { text: 'Не интересно', scores: { frontend: 1, gamedev: 1, mobile: 1 } },
      { text: 'Интересно, но ML ближе', scores: { ml: 2, datascience: 1 } },
    ],
  },
  {
    id: 39,
    text: 'Как ты относишься к работе с клиентами / заказчиками?',
    answers: [
      { text: 'Обожаю — это моя стихия', scores: { pm: 3, design: 1 } },
      { text: 'Нормально, если не слишком часто', scores: { qa: 1, frontend: 1 } },
      { text: 'Предпочитаю работать без людей', scores: { backend: 1, ml: 1, security: 1, embedded: 1 } },
      { text: 'Стрессую от этого', scores: { backend: 1, devops: 1, datascience: 1 } },
    ],
  },
  {
    id: 40,
    text: 'Что тебе интереснее изучать?',
    answers: [
      { text: 'Как работает интернет (HTTP, DNS, TCP)', scores: { devops: 2, security: 2, backend: 1 } },
      { text: 'Как рисовать в Figma', scores: { design: 3 } },
      { text: 'Как работают нейросети', scores: { ml: 3, datascience: 1 } },
      { text: 'Как устроены игровые движки', scores: { gamedev: 3 } },
    ],
  },
  {
    id: 41,
    text: 'Как ты относишься к монотонной работе?',
    answers: [
      { text: 'Терплю — это часть профессии', scores: { qa: 2, dba: 2, sysadmin: 1 } },
      { text: 'Ненавижу — нужно разнообразие', scores: { frontend: 1, gamedev: 1, design: 1 } },
      { text: 'Автоматизирую монотонное', scores: { devops: 2, backend: 1 } },
      { text: 'Зависит от контекста', scores: { pm: 1, datascience: 1 } },
    ],
  },
  {
    id: 42,
    text: 'Что тебе ближе: Windows, Linux или macOS?',
    answers: [
      { text: 'Linux — свобода и контроль', scores: { devops: 2, sysadmin: 2, security: 1 } },
      { text: 'Windows — привычно', scores: { gamedev: 1, backend: 1, qa: 1 } },
      { text: 'macOS — красота и удобство', scores: { mobile: 1, design: 1, frontend: 1 } },
      { text: 'Без разницы', scores: { backend: 1, frontend: 1 } },
    ],
  },
  {
    id: 43,
    text: 'Как ты относишься к работе с API?',
    answers: [
      { text: 'Хочу создавать API', scores: { backend: 3, mobile: 1 } },
      { text: 'Хочу использовать чужие API', scores: { frontend: 2, mobile: 1, datascience: 1 } },
      { text: 'И то, и другое', scores: { backend: 1, frontend: 1 } },
      { text: 'Не знаю, что это', scores: { design: 1, pm: 1, qa: 1 } },
    ],
  },
  {
    id: 44,
    text: 'Что тебя привлекает в блокчейне / Web3?',
    answers: [
      { text: 'Интересно, хочу разобраться', scores: { backend: 1, security: 1 } },
      { text: 'Не интересно / скам', scores: { frontend: 1, ml: 1, datascience: 1 } },
      { text: 'Интересна криптография', scores: { security: 2, backend: 1 } },
      { text: 'Не слышал / не думал', scores: {} },
    ],
  },
  {
    id: 45,
    text: 'Как ты относишься к работе с legacy-кодом?',
    answers: [
      { text: 'Интересно — как археология', scores: { backend: 2, dba: 1, sysadmin: 1 } },
      { text: 'Терплю, но не люблю', scores: { qa: 1, frontend: 1 } },
      { text: 'Ненавижу — хочу писать с нуля', scores: { frontend: 1, gamedev: 1, mobile: 1 } },
      { text: 'Не сталкивался', scores: {} },
    ],
  },
  {
    id: 46,
    text: 'Что тебе интереснее: 2D или 3D?',
    answers: [
      { text: '2D — сайты, приложения, UI', scores: { frontend: 2, design: 2, mobile: 1 } },
      { text: '3D — игры, моделирование', scores: { gamedev: 3 } },
      { text: 'И то, и другое', scores: { frontend: 1, gamedev: 1 } },
      { text: 'Не интересно', scores: { backend: 1, datascience: 1, devops: 1 } },
    ],
  },
  {
    id: 47,
    text: 'Как ты относишься к работе с данными в реальном времени?',
    answers: [
      { text: 'Обожаю — стримы, Kafka, WebSocket', scores: { backend: 2, devops: 1, datascience: 1 } },
      { text: 'Интересно, но сложно', scores: { backend: 1, ml: 1 } },
      { text: 'Не интересно', scores: { design: 1, qa: 1, pm: 1 } },
      { text: 'Не знаю, что это', scores: { frontend: 1, mobile: 1 } },
    ],
  },
  {
    id: 48,
    text: 'Что для тебя важнее при выборе направления?',
    answers: [
      { text: 'Высокая зарплата', scores: { ml: 1, security: 1, devops: 1 } },
      { text: 'Интересные задачи', scores: { gamedev: 1, ml: 1, security: 1 } },
      { text: 'Быстрый вход в профессию', scores: { qa: 2, frontend: 1, design: 1 } },
      { text: 'Стабильность и карьерный рост', scores: { backend: 1, dba: 1, sysadmin: 1 } },
    ],
  },
  {
    id: 49,
    text: 'Как ты относишься к работе с сетями?',
    answers: [
      { text: 'Обожаю — TCP/IP, routing, VPN', scores: { sysadmin: 2, security: 2, devops: 1 } },
      { text: 'Нормально, если нужно', scores: { backend: 1, devops: 1 } },
      { text: 'Сложно и не интересно', scores: { frontend: 1, design: 1, gamedev: 1 } },
      { text: 'Не знаю основ', scores: { frontend: 1, mobile: 1, pm: 1 } },
    ],
  },
  {
    id: 50,
    text: 'Если бы ты мог выбрать один проект на год — что бы это было?',
    answers: [
      { text: 'Своя игра', scores: { gamedev: 3, design: 1 } },
      { text: 'Стартап / своё приложение', scores: { mobile: 2, frontend: 1, pm: 2 } },
      { text: 'Open source проект для сообщества', scores: { backend: 1, devops: 1, frontend: 1 } },
      { text: 'Исследование в ML / AI', scores: { ml: 3, datascience: 1 } },
    ],
  },
]

export const longQuestions: Question[] = [...shortQuestions, ...longOnlyQuestions]
