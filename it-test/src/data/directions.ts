import type { Direction } from '../types'

export const directions: Direction[] = [
  {
    id: 'backend',
    name: 'Бэкенд-разработка',
    emoji: '⚙️',
    description:
      'Создание серверной логики, API, работа с базами данных. Всё, что происходит «за кулисами» приложений.',
    stack: ['Python', 'Go', 'Java', 'Node.js', 'PostgreSQL', 'Redis'],
    startWith: 'Python + FastAPI или Node.js + Express. Освой SQL.',
    salary: '120–350k ₽',
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
  },
]

export const directionMap = Object.fromEntries(
  directions.map((d) => [d.id, d]),
) as Record<string, Direction>
