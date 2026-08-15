import type { Question } from '../types'

export const shortQuestions: Question[] = [
  {
    id: 1,
    text: 'Что тебе больше нравится делать?',
    answers: [
      { text: 'Создавать красивые интерфейсы', scores: { frontend: 3, design: 2 } },
      { text: 'Разбираться, как всё работает внутри', scores: { backend: 3, sysadmin: 1 } },
      { text: 'Решать сложные математические задачи', scores: { ml: 3, datascience: 2 } },
      { text: 'Играть и придумывать игровые механики', scores: { gamedev: 3, design: 1 } },
    ],
  },
  {
    id: 2,
    text: 'Какой предмет в школе/универе тебе ближе?',
    answers: [
      { text: 'Информатика / программирование', scores: { backend: 2, frontend: 2, mobile: 1 } },
      { text: 'Математика', scores: { ml: 2, datascience: 2, backend: 1 } },
      { text: 'Физика / электроника', scores: { embedded: 3, sysadmin: 1 } },
      { text: 'Рисование / дизайн', scores: { design: 3, frontend: 1, gamedev: 1 } },
    ],
  },
  {
    id: 3,
    text: 'Что тебя больше мотивирует?',
    answers: [
      { text: 'Видеть результат своей работы глазами пользователя', scores: { frontend: 3, design: 2, mobile: 1 } },
      { text: 'Решать сложные технические задачи', scores: { backend: 2, devops: 2, security: 1 } },
      { text: 'Находить закономерности в данных', scores: { datascience: 3, ml: 2, dba: 1 } },
      { text: 'Организовывать процессы и людей', scores: { pm: 3, qa: 1 } },
    ],
  },
  {
    id: 4,
    text: 'Как ты относишься к рутинной работе?',
    answers: [
      { text: 'Терплю, если результат того стоит', scores: { qa: 2, dba: 2, sysadmin: 1 } },
      { text: 'Ненавижу — нужно разнообразие', scores: { frontend: 2, gamedev: 2, mobile: 1 } },
      { text: 'Люблю, когда всё по чёткому алгоритму', scores: { backend: 2, embedded: 2, devops: 1 } },
      { text: 'Рутина — это возможность для творчества', scores: { design: 2, pm: 2 } },
    ],
  },
  {
    id: 5,
    text: 'Что бы ты выбрал из этого?',
    answers: [
      { text: 'Написать сайт с нуля', scores: { frontend: 3, design: 1 } },
      { text: 'Настроить сервер и деплой', scores: { devops: 3, sysadmin: 2 } },
      { text: 'Обучить нейросеть распознавать картинки', scores: { ml: 3, datascience: 1 } },
      { text: 'Найти и исправить баги в приложении', scores: { qa: 3, backend: 1 } },
    ],
  },
  {
    id: 6,
    text: 'Насколько тебе интересна математика?',
    answers: [
      { text: 'Обожаю, хочу применять каждый день', scores: { ml: 3, datascience: 2 } },
      { text: 'Нормально, если не слишком сложная', scores: { backend: 2, frontend: 1, dba: 1 } },
      { text: 'Терплю ради результата', scores: { qa: 1, pm: 2, design: 1 } },
      { text: 'Стараюсь обходить стороной', scores: { frontend: 2, design: 2, gamedev: 1, pm: 1 } },
    ],
  },
  {
    id: 7,
    text: 'Какой тип задач тебе ближе?',
    answers: [
      { text: 'Работа с людьми и коммуникация', scores: { pm: 3, design: 1, qa: 1 } },
      { text: 'Глубокое погружение в код', scores: { backend: 2, embedded: 2, security: 1 } },
      { text: 'Визуальное творчество', scores: { design: 3, frontend: 2, gamedev: 1 } },
      { text: 'Анализ и исследование', scores: { datascience: 2, security: 2, ml: 1 } },
    ],
  },
  {
    id: 8,
    text: 'Что тебя привлекает в IT?',
    answers: [
      { text: 'Высокая зарплата', scores: { ml: 1, security: 1, devops: 1, backend: 1 } },
      { text: 'Удалённая работа', scores: { frontend: 2, backend: 2, datascience: 1 } },
      { text: 'Создание чего-то своего', scores: { gamedev: 2, mobile: 2, frontend: 1 } },
      { text: 'Решение реальных проблем', scores: { pm: 2, qa: 1, datascience: 1, security: 1 } },
    ],
  },
  {
    id: 9,
    text: 'Как ты предпочитаешь учиться?',
    answers: [
      { text: 'Делать проекты и учиться на практике', scores: { frontend: 2, mobile: 2, gamedev: 1 } },
      { text: 'Читать документацию и разбираться самому', scores: { backend: 2, devops: 2, embedded: 1 } },
      { text: 'Смотреть видео и проходить курсы', scores: { design: 2, qa: 1, pm: 1 } },
      { text: 'Решать задачи и головоломки', scores: { ml: 2, security: 2, datascience: 1 } },
    ],
  },
  {
    id: 10,
    text: 'Какое устройство тебе интереснее?',
    answers: [
      { text: 'Смартфон / планшет', scores: { mobile: 3, design: 1 } },
      { text: 'Компьютер / ноутбук', scores: { frontend: 2, backend: 2, gamedev: 1 } },
      { text: 'Микроконтроллер / Arduino', scores: { embedded: 3, sysadmin: 1 } },
      { text: 'Сервер / облако', scores: { devops: 2, sysadmin: 2, dba: 1 } },
    ],
  },
  {
    id: 11,
    text: 'Как ты относишься к безопасности?',
    answers: [
      { text: 'Хочу защищать системы от хакеров', scores: { security: 3, devops: 1 } },
      { text: 'Важно, но не моя главная тема', scores: { backend: 1, devops: 1, sysadmin: 1 } },
      { text: 'Интересно взламывать (этично!)', scores: { security: 2, backend: 1 } },
      { text: 'Не думаю об этом', scores: { frontend: 1, design: 1, gamedev: 1, pm: 1 } },
    ],
  },
  {
    id: 12,
    text: 'Что тебе ближе по характеру?',
    answers: [
      { text: 'Перфекционист — всё должно быть идеально', scores: { qa: 2, design: 2, dba: 1 } },
      { text: 'Прагматик — главное, чтобы работало', scores: { backend: 2, devops: 2, sysadmin: 1 } },
      { text: 'Креативщик — хочу создавать новое', scores: { gamedev: 2, design: 2, frontend: 1 } },
      { text: 'Аналитик — люблю копать в глубину', scores: { datascience: 2, ml: 2, security: 1 } },
    ],
  },
  {
    id: 13,
    text: 'Какой масштаб проекта тебе интереснее?',
    answers: [
      { text: 'Свой pet-проект / стартап', scores: { mobile: 2, frontend: 2, gamedev: 1, pm: 1 } },
      { text: 'Продукт, которым пользуются миллионы', scores: { backend: 2, devops: 1, frontend: 1 } },
      { text: 'Корпоративные системы', scores: { dba: 2, sysadmin: 2, backend: 1 } },
      { text: 'Научные исследования', scores: { ml: 2, datascience: 2 } },
    ],
  },
  {
    id: 14,
    text: 'Сколько времени готов уделять обучению в неделю?',
    answers: [
      { text: '5–10 часов (совмещаю с учёбой)', scores: { qa: 1, frontend: 1, design: 1, pm: 1 } },
      { text: '15–20 часов (серьёзно настроен)', scores: { backend: 1, mobile: 1, datascience: 1 } },
      { text: '30+ часов (готов погрузиться)', scores: { ml: 1, security: 1, embedded: 1, gamedev: 1 } },
      { text: 'Пока не знаю', scores: {} },
    ],
  },
  {
    id: 15,
    text: 'Что для тебя важнее в работе?',
    answers: [
      { text: 'Стабильность и понятные задачи', scores: { qa: 2, sysadmin: 2, dba: 1 } },
      { text: 'Быстрый рост и новые технологии', scores: { ml: 2, devops: 2, frontend: 1 } },
      { text: 'Творческая свобода', scores: { design: 2, gamedev: 2, frontend: 1 } },
      { text: 'Влияние на продукт и команду', scores: { pm: 3, backend: 1 } },
    ],
  },
]
