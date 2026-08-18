import { useState } from 'react'
import type { TestResult } from '../types'
import { directionMap } from '../data/directions'

interface DirectionCardProps {
  result: TestResult
  rank?: number
  expanded?: boolean
}

interface ActiveModal {
  title: string
  url: string
}

export function DirectionCard({ result, rank, expanded = false }: DirectionCardProps) {
  const [isOpen, setIsOpen] = useState(expanded)
  const [activeModal, setActiveModal] = useState<ActiveModal | null>(null)
  const [isZoomed, setIsZoomed] = useState(false) // Состояние для увеличения картинки
  const direction = directionMap[result.directionId]

  if (!direction) return null

  const rankEmoji = rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : null

  // Клик по курсу
  const handleCourseClick = (e: React.MouseEvent<HTMLAnchorElement>, course: { title: string; isFree?: boolean; url: string }) => {
    if (!course.isFree) {
      e.preventDefault()
      const searchTerms = course.title.replace('Профессия ', '')

      navigator.clipboard.writeText(searchTerms).then(() => {
        setActiveModal({
          title: course.title,
          url: course.url,
        })
        setIsZoomed(false) // Сбрасываем зум при открытии нового окна
      })
    }
  }

  const handleCloseModal = () => {
    if (activeModal) {
      window.open(activeModal.url, '_blank', 'noopener,noreferrer')
      setActiveModal(null)
      setIsZoomed(false)
    }
  }

  return (
    <div
      className={`direction-card ${rank && rank <= 3 ? 'direction-card--top' : ''}`}
    >
      <button
        type="button"
        className="direction-card-header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="direction-card-left">
          {rankEmoji && <span className="direction-rank">{rankEmoji}</span>}
          <span className="direction-emoji">{direction.emoji}</span>
          <div className="direction-info">
            <span className="direction-name">{direction.name}</span>
            <span className="direction-salary">{direction.salary}</span>
          </div>
        </div>
        <div className="direction-card-right">
          <div className="score-badge">
            <span className="score-value">{result.score}</span>
            <span className="score-label">баллов</span>
          </div>
          <span className={`chevron ${isOpen ? 'chevron--open' : ''}`}>›</span>
        </div>
      </button>

      <div className="direction-bar-track">
        <div
          className="direction-bar-fill"
          style={{ width: `${result.percentage}%` }}
        />
      </div>

      {isOpen && (
        <div className="direction-card-body">
          <p className="direction-desc">{direction.description}</p>

          <div className="direction-detail">
            <h4>Стек технологий</h4>
            <div className="stack-tags">
              {direction.stack.map((tech) => (
                <span key={tech} className="stack-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="direction-detail">
            <h4>С чего начать</h4>
            <p>{direction.startWith}</p>
          </div>

          {direction.courses && direction.courses.length > 0 && (
            <div className="direction-detail">
              <h4>Материалы для старта</h4>
              <div className="courses-list">
                {direction.courses.map((course, idx) => (
                  <a
                    key={idx}
                    href={course.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="course-card"
                    onClick={(e) => handleCourseClick(e, course)}
                  >
                    <div className="course-info">
                      <span className="course-title">{course.title}</span>
                      <span className="course-platform">{course.platform}</span>
                    </div>
                    <span className={`course-badge ${course.isFree ? 'course-badge--free' : 'course-badge--paid'}`}>
                      {course.isFree ? 'Бесплатно' : 'Курс'}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* МОДАЛЬНОЕ ОКНО С ИНСТРУКЦИЕЙ И КАРТИНКОЙ С ЗУМОМ */}
      {activeModal && (
        <div className="modal-overlay" onClick={() => setActiveModal(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-badge-copy">📋 Скопировано в буфер обмена</div>
            <h3>Остался один шаг!</h3>
            
            <p className="modal-text">
              Общая профессия выбрана, но платформ и программ много. Мы подобрали для тебя наиболее подходящую по названию:
            </p>

            <div className="modal-highlight-box">
              <code className="modal-code">{activeModal.title.replace('Профессия ', '')}</code>
            </div>

            {/* Картинка с возможностью клика для увеличения */}
            <div className="modal-img-container" onClick={() => setIsZoomed(true)} title="Нажмите, чтобы увеличить">
              <img 
                src="/search-preview.jpg" 
                alt="Как искать курс" 
                className="modal-preview-img"
              />
              <span className="zoom-hint">🔍 Нажмите для увеличения</span>
            </div>

            <p className="modal-hint">
              <b>Совет:</b> профессию не стоит выбирать мгновенно. Перейди на сайт, вставь скопированный текст в поиск через <b>Ctrl + V</b> и немного поресёрчи программы, чтобы понять, что тебе ближе.
            </p>

            <button type="button" className="btn-primary modal-btn" onClick={handleCloseModal}>
              Открыть Нетологию и найти курс →
            </button>
          </div>
        </div>
      )}

      {/* ЛАЙТБОКС (ПОЛНОЭКРАННЫЙ ПРОСМОТР КАРТИНКИ) */}
      {isZoomed && (
        <div className="zoomed-overlay" onClick={() => setIsZoomed(false)}>
          <div className="zoomed-container" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="zoomed-close" onClick={() => setIsZoomed(false)}>✕ Закрыть</button>
            <img src="/search-preview.jpg" alt="Увеличенный скриншот" className="zoomed-img" />
          </div>
        </div>
      )}
    </div>
  )
}