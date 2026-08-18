import type { Direction } from '../types'

export const directions: Direction[] = [
  {
    id: 'backend',
    name: 'Бэкенд-разработка',
    emoji: '⚙️',
    description:
      'Создание серверной логики, API, работа с базами данных. Всё, что происходит «за кулисами» приложений.',
    stack: ['Python', 'Go', 'Java', 'Node.js', 'PostgreSQL', 'Redis', 'C#'],
    startWith: 'Python + FastAPI или Node.js + Express. Освой SQL.',
    salary: '120–350k ₽',
    courses: [
      {
        title: 'Руководство по C#',
        platform: 'Metanit',
        url: 'https://metanit.com/sharp/',
        isFree: true,
      },
      {
        title: 'Руководство по Go',
        platform: 'Metanit',
        url: 'https://metanit.com/go/tutorial/',
        isFree: true,
      },
      {
        title: 'Roadmap бэкендера',
        platform: 'Мой Telegram-канал',
        url: 'https://t.me/+MAwXHuFGbMU4ZjAy',
        isFree: true,
      },
      {
        title: 'Профессия Backend-разработчик',
        platform: 'Нетология (Ищи курс в поиске на сайте)',
        url: 'https://go.avck.ws/4d7a321b23adf7b1',
        isFree: false,
      },
    ],
  },
  {
    id: 'frontend',
    name: 'Фронтенд-разработка',
    emoji: '🎨',
    description:
      'Вёрстка и программирование пользовательских интерфейсов — то, что видит и с чем взаимодействует пользователь.',
    stack: ['HTML/CSS', 'JavaScript', 'TypeScript', 'React', 'Vue', 'Next.js'],
    startWith: 'HTML, CSS, JavaScript → React или Vue. Сделай 2–3 pet-проекта.',
    salary: '100–300k ₽',
    courses: [
      {
        title: 'Руководство по JavaScript',
        platform: 'Metanit',
        url: 'https://metanit.com/web/javascript/',
        isFree: true,
      },
      {
        title: 'Руководство по React',
        platform: 'Metanit',
        url: 'https://metanit.com/web/react/',
        isFree: true,
      },
      {
        title: 'Roadmap фронтендера',
        platform: 'Мой Telegram-канал',
        url: 'https://t.me/+MAwXHuFGbMU4ZjAy',
        isFree: true,
      },
      {
        title: 'Профессия Frontend-разработчик',
        platform: 'Нетология (Ищи курс в поиске на сайте)',
        url: 'https://go.avck.ws/4d7a321b23adf7b1',
        isFree: false,
      },
    ],
  },
  {
    id: 'mobile',
    name: 'Мобильная разработка',
    emoji: '📱',
    description:
      'Разработка приложений для iOS и Android — от соцсетей до банковских приложений.',
    stack: ['Swift', 'Kotlin', 'Flutter', 'React Native', 'Dart'],
    startWith: 'Flutter (один язык — две платформы) или Kotlin для Android.',
    salary: '120–350k ₽',
    courses: [
      {
        title: 'Руководство по Android и Flutter',
        platform: 'Metanit',
        url: 'https://metanit.com/java/android/',
        isFree: true,
      },
      {
        title: 'Roadmap мобильного разработчика',
        platform: 'Мой Telegram-канал',
        url: 'https://t.me/+MAwXHuFGbMU4ZjAy',
        isFree: true,
      },
      {
        title: 'Профессия iOS / Android разработчик',
        platform: 'Нетология (Ищи курс в поиске на сайте)',
        url: 'https://go.avck.ws/4d7a321b23adf7b1',
        isFree: false,
      },
    ],
  },
  {
    id: 'ml',
    name: 'ML / AI',
    emoji: '🤖',
    description:
      'Машинное обучение и искусственный интеллект — модели, нейросети, ChatGPT-подобные системы.',
    stack: ['Python', 'PyTorch', 'TensorFlow', 'scikit-learn', 'CUDA'],
    startWith: 'Python + математика (линал, статистика) → курсы Andrew Ng.',
    salary: '150–500k ₽',
    courses: [
      {
        title: 'Руководство по PyTorch',
        platform: 'Metanit',
        url: 'https://metanit.com/python/pytorch/',
        isFree: true,
      },
      {
        title: 'Roadmap ML инженера',
        platform: 'Мой Telegram-канал',
        url: 'https://t.me/+MAwXHuFGbMU4ZjAy',
        isFree: true,
      },
      {
        title: 'Специалист по Машинному обучению (ML)',
        platform: 'Нетология (Ищи курс в поиске на сайте)',
        url: 'https://go.avck.ws/4d7a321b23adf7b1',
        isFree: false,
      },
    ],
  },
  {
    id: 'datascience',
    name: 'Data Science',
    emoji: '📊',
    description:
      'Анализ данных, построение моделей, визуализация и поиск инсайтов для бизнеса.',
    stack: ['Python', 'Pandas', 'SQL', 'Tableau', 'Jupyter', 'R'],
    startWith: 'Python + Pandas + SQL. Решай задачи на Kaggle.',
    salary: '130–400k ₽',
    courses: [
      {
        title: 'Руководство по Pandas',
        platform: 'Metanit',
        url: 'https://metanit.com/python/pandas/',
        isFree: true,
      },
      {
        title: 'Roadmap Data Scientist',
        platform: 'Мой Telegram-канал',
        url: 'https://t.me/+MAwXHuFGbMU4ZjAy',
        isFree: true,
      },
      {
        title: 'Профессия Data Scientist',
        platform: 'Нетология (Ищи курс в поиске на сайте)',
        url: 'https://go.avck.ws/4d7a321b23adf7b1',
        isFree: false,
      },
    ],
  },
  {
    id: 'devops',
    name: 'DevOps',
    emoji: '🚀',
    description:
      'Автоматизация деплоя, CI/CD, контейнеры, облачная инфраструктура.',
    stack: ['Docker', 'Kubernetes', 'Linux', 'AWS/GCP', 'Terraform', 'GitLab CI'],
    startWith: 'Linux + Docker + основы сетей. Подними свой сервер.',
    salary: '140–450k ₽',
    courses: [
      {
        title: 'Введение в Linux и сети',
        platform: 'Stepik (Бесплатный курс)',
        url: 'https://stepik.org/course/73',
        isFree: true,
      },
      {
        title: 'Roadmap DevOps-инженера',
        platform: 'Мой Telegram-канал',
        url: 'https://t.me/+MAwXHuFGbMU4ZjAy',
        isFree: true,
      },
      {
        title: 'Профессия DevOps-инженер',
        platform: 'Нетология (Ищи курс в поиске на сайте)',
        url: 'https://go.avck.ws/4d7a321b23adf7b1',
        isFree: false,
      },
    ],
  },
  {
    id: 'qa',
    name: 'QA / Тестирование',
    emoji: '🔍',
    description:
      'Поиск багов, автоматизация тестов, обеспечение качества продуктов.',
    stack: ['Selenium', 'Playwright', 'Postman', 'Python', 'Jira'],
    startWith: 'Ручное тестирование → Python + автотесты (Playwright).',
    salary: '80–250k ₽',
    courses: [
      {
        title: 'Базовый курс по тестированию ПО',
        platform: 'hexlet курс',
        url: 'https://ru.hexlet.io/programs/testing-basics-free',
        isFree: true,
      },
      {
        title: 'Roadmap QA-инженера',
        platform: 'Мой Telegram-канал',
        url: 'https://t.me/+MAwXHuFGbMU4ZjAy',
        isFree: true,
      },
      {
        title: 'Инженер по тестированию (QA)',
        platform: 'Нетология (Ищи курс в поиске на сайте)',
        url: 'https://go.avck.ws/4d7a321b23adf7b1',
        isFree: false,
      },
    ],
  },
  {
    id: 'security',
    name: 'Кибербезопасность',
    emoji: '🔐',
    description:
      'Защита систем от атак, пентест, анализ уязвимостей, SOC.',
    stack: ['Python', 'Kali Linux', 'Wireshark', 'Burp Suite', 'Metasploit'],
    startWith: 'Сети + Linux + основы Python. TryHackMe / HackTheBox.',
    salary: '150–500k ₽',
    courses: [
      {
        title: 'Основы кибербезопасности',
        platform: 'TryHackMe (Pre-Security)',
        url: 'https://tryhackme.com/path/outline/presecurity',
        isFree: true,
      },
      {
        title: 'Roadmap специалиста по ИБ',
        platform: 'Мой Telegram-канал',
        url: 'https://t.me/+MAwXHuFGbMU4ZjAy',
        isFree: true,
      },
      {
        title: 'Специалист по кибербезопасности',
        platform: 'Нетология (Ищи курс в поиске на сайте)',
        url: 'https://go.avck.ws/4d7a321b23adf7b1',
        isFree: false,
      },
    ],
  },
  {
    id: 'gamedev',
    name: 'Game Dev',
    emoji: '🎮',
    description:
      'Создание игр — от мобильных казуалок до AAA-проектов.',
    stack: ['Unity', 'Unreal Engine', 'C#', 'C++', 'Blender'],
    startWith: 'Unity + C#. Сделай простую 2D-игру за месяц.',
    salary: '100–350k ₽',
    courses: [
      {
        title: 'Руководство по C++',
        platform: 'Metanit',
        url: 'https://metanit.com/cpp/tutorial/',
        isFree: true,
      },
      {
        title: 'Руководство по C#',
        platform: 'Metanit',
        url: 'https://metanit.com/sharp/',
        isFree: true,
      },
      {
        title: 'Roadmap разработчика игр',
        platform: 'Мой Telegram-канал',
        url: 'https://t.me/+MAwXHuFGbMU4ZjAy',
        isFree: true,
      },
      {
        title: 'Разработчик игр на Unity / Unreal',
        platform: 'Нетология (Ищи курс в поиске на сайте)',
        url: 'https://go.avck.ws/4d7a321b23adf7b1',
        isFree: false,
      },
    ],
  },
  {
    id: 'design',
    name: 'UI/UX Дизайн',
    emoji: '✏️',
    description:
      'Проектирование интерфейсов, пользовательский опыт, прототипы и дизайн-системы.',
    stack: ['Figma', 'Adobe XD', 'Principle', 'Miro', 'HTML/CSS (базово)'],
    startWith: 'Figma + основы UX. Перерисуй 5 популярных приложений.',
    salary: '90–280k ₽',
    courses: [
      {
title: 'Основы дизайна: бесплатная вводная часть',
        platform: 'нетология',
        url: 'https://netology.ru/programs/web-ux-ui-design-free',
        isFree: true,
      },
      {
        title: 'Roadmap UX/UI дизайнера',
        platform: 'Мой Telegram-канал',
        url: 'https://t.me/+MAwXHuFGbMU4ZjAy',
        isFree: true,
      },
      {
        title: 'Профессия UX/UI-дизайнер',
        platform: 'Нетология (Ищи курс в поиске на сайте)',
        url: 'https://go.avck.ws/4d7a321b23adf7b1',
        isFree: false,
      },
    ],
  },
  {
    id: 'sysadmin',
    name: 'Системное администрирование',
    emoji: '🖥️',
    description:
      'Настройка и поддержка серверов, сетей, рабочих станций в компаниях.',
    stack: ['Linux', 'Windows Server', 'Active Directory', 'VMware', 'Bash'],
    startWith: 'Linux (Ubuntu) + сети. Поставь домашний сервер.',
    salary: '90–250k ₽',
    courses: [
      {
        title: 'Руководство по Linux',
        platform: 'Metanit',
        url: 'https://metanit.com/os/linux/',
        isFree: true,
      },
      {
        title: 'Roadmap Системного администратора',
        platform: 'Мой Telegram-канал',
        url: 'https://t.me/+MAwXHuFGbMU4ZjAy',
        isFree: true,
      },
      {
        title: 'Системный администратор',
        platform: 'Нетология (Ищи курс в поиске на сайте)',
        url: 'https://go.avck.ws/4d7a321b23adf7b1',
        isFree: false,
      },
    ],
  },
  {
    id: 'embedded',
    name: 'Embedded / IoT',
    emoji: '🔌',
    description:
      'Программирование микроконтроллеров, умные устройства, робототехника.',
    stack: ['C', 'C++', 'Arduino', 'Raspberry Pi', 'RTOS', 'ESP32'],
    startWith: 'C + Arduino/Raspberry Pi. Собери умную лампочку.',
    salary: '120–350k ₽',
    courses: [
      {
        title: 'Руководство по языку C',
        platform: 'Metanit',
        url: 'https://metanit.com/c/tutorial/',
        isFree: true,
      },
      {
        title: 'Roadmap Embedded-инженера',
        platform: 'Мой Telegram-канал',
        url: 'https://t.me/+MAwXHuFGbMU4ZjAy',
        isFree: true,
      },
      {
        title: 'Разработчик встраиваемых систем',
        platform: 'Нетология (Ищи курс в поиске на сайте)',
        url: 'https://go.avck.ws/4d7a321b23adf7b1',
        isFree: false,
      },
    ],
  },
  {
    id: 'pm',
    name: 'IT Product Management',
    emoji: '📋',
    description:
      'Управление IT-продуктами — от идеи до релиза, работа с командой и заказчиками.',
    stack: ['Jira', 'Figma', 'SQL (базово)', 'Analytics', 'Notion'],
    startWith: 'Изучи Agile/Scrum. Веди pet-проект как продакт.',
    salary: '120–400k ₽',
    courses: [
      {
        title: 'Основы Product Management',
        platform: 'GoPractice (Бесплатный симулятор)',
        url: 'https://gopractice.ru/',
        isFree: true,
      },
      {
        title: 'Roadmap Product Manager',
        platform: 'Мой Telegram-канал',
        url: 'https://t.me/+MAwXHuFGbMU4ZjAy',
        isFree: true,
      },
      {
        title: 'Профессия Product Manager',
        platform: 'Нетология (Ищи курс в поиске на сайте)',
        url: 'https://go.avck.ws/4d7a321b23adf7b1',
        isFree: false,
      },
    ],
  },
  {
    id: 'dba',
    name: 'Базы данных (DBA)',
    emoji: '🗄️',
    description:
      'Проектирование, оптимизация и администрирование баз данных.',
    stack: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQL', 'Redis', 'ClickHouse'],
    startWith: 'SQL на глубоком уровне → PostgreSQL. Решай задачи на SQL-ex.ru.',
    salary: '130–380k ₽',
    courses: [
      {
        title: 'Руководство по PostgreSQL',
        platform: 'Metanit',
        url: 'https://metanit.com/sql/postgresql/',
        isFree: true,
      },
      {
        title: 'Roadmap Администратора БД',
        platform: 'Мой Telegram-канал',
        url: 'https://t.me/+MAwXHuFGbMU4ZjAy',
        isFree: true,
      },
      {
        title: 'Разработчик баз данных (DBA)',
        platform: 'Нетология (Ищи курс в поиске на сайте)',
        url: 'https://go.avck.ws/4d7a321b23adf7b1',
        isFree: false,
      },
    ],
  },
]

export const directionMap = Object.fromEntries(
  directions.map((d) => [d.id, d]),
) as Record<string, Direction>