import type { TestType } from '../types'

interface HomeProps {
  onSelectTest: (type: TestType) => void
}

export function Home({ onSelectTest }: HomeProps) {
  return (
    <div className="home">
      <div className="home-hero">
        <span className="home-badge">IT-профориентация</span>
        <h1>Куда идти в IT?</h1>
        <p className="home-subtitle">
          Пройди тест и узнай все подходящие направления — не одно, а все с
          баллами. Бэкенд, фронт, ML, DevOps и ещё 10+ областей.
        </p>
      </div>

      <div className="test-cards">
        <button
          type="button"
          className="test-card"
          onClick={() => onSelectTest('short')}
        >
          <div className="test-card-icon">⚡</div>
          <div className="test-card-content">
            <h2>Быстрый тест</h2>
            <p className="test-card-meta">15 вопросов · ~3 минуты</p>
            <p className="test-card-desc">
              Краткий обзор за пару минут — топ-3 направления и полная таблица
              баллов по всем областям.
            </p>
          </div>
          <span className="test-card-arrow">→</span>
        </button>

        <button
          type="button"
          className="test-card test-card--featured"
          onClick={() => onSelectTest('long')}
        >
          <div className="test-card-icon">🎯</div>
          <div className="test-card-content">
            <h2>
              Полный тест
              <span className="test-card-tag">Точнее</span>
            </h2>
            <p className="test-card-meta">50 вопросов · ~10 минут</p>
            <p className="test-card-desc">
              Детальный анализ по 14 направлениям. Рекомендуется, если
              серьёзно выбираешь путь в IT.
            </p>
          </div>
          <span className="test-card-arrow">→</span>
        </button>
      </div>

      <div className="directions-preview">
        <p className="directions-preview-label">14 направлений в тесте</p>
        <div className="directions-preview-list">
          {[
            '⚙️ Бэкенд',
            '🎨 Фронтенд',
            '📱 Мобилки',
            '🤖 ML/AI',
            '📊 Data Science',
            '🚀 DevOps',
            '🔍 QA',
            '🔐 Security',
            '🎮 Game Dev',
            '✏️ UI/UX',
            '🖥️ SysAdmin',
            '🔌 Embedded',
            '📋 PM',
            '🗄️ DBA',
          ].map((item) => (
            <span key={item} className="direction-tag">
              {item}
            </span>
          ))}
        </div>
      </div>

      <footer className="home-footer">
        <p>
          Остались вопросы? Пиши в{' '}
          <a
            href="https://t.me/FozuZXC"
            target="_blank"
            rel="noopener noreferrer"
            className="tg-link"
          >
            @FozuZXC
          </a>{' '}
          — помогу разобраться бесплатно
        </p>
      </footer>
    </div>
  )
}
