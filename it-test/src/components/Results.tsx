import type { TestResult } from '../types'
import { getTopResults } from '../utils/scoring'
import { DirectionCard } from './DirectionCard'

interface ResultsProps {
  results: TestResult[]
  onRestart: () => void
  onRetakeLong: () => void
  wasShort: boolean
}

export function Results({ results, onRestart, onRetakeLong, wasShort }: ResultsProps) {
  const top3 = getTopResults(results, 3)
  const hasScores = results.some((r) => r.score > 0)

  return (
    <div className="results">
      <div className="results-header">
        <span className="results-badge">Твой результат</span>
        <h1>Твои направления в IT</h1>
        <p className="results-subtitle">
          {hasScores
            ? 'Вот все области, которые тебе подходят — от самой подходящей к менее подходящей'
            : 'Пройди тест ещё раз, отвечая на вопросы'}
        </p>
      </div>

      {top3.length > 0 && (
        <section className="results-top">
          <h2 className="section-title">Топ-{top3.length}</h2>
          <div className="top-cards">
            {top3.map((result, index) => (
              <DirectionCard
                key={result.directionId}
                result={result}
                rank={index + 1}
                expanded={index === 0}
              />
            ))}
          </div>
        </section>
      )}

      <section className="results-all">
        <h2 className="section-title">Все направления</h2>
        <div className="all-cards">
          {results.map((result) => (
            <DirectionCard key={result.directionId} result={result} />
          ))}
        </div>
      </section>

      <div className="results-share">
        <p className="share-hint">
          📸 Сделай скриншот и поделись — узнай, что у друзей!
        </p>
      </div>

      <div className="results-cta">
        <div className="cta-box">
          <h3>Остались вопросы?</h3>
          <p>
            Напиши мне в Telegram — разберём твой результат, подскажу с чего
            начать и отвечу на любые вопросы про IT. Бесплатно.
          </p>
          <a
            href="https://t.me/FozuZXC"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn-tg"
          >
            Написать @FozuZXC
          </a>
        </div>
      </div>

      <div className="results-actions">
        {wasShort && (
          <button type="button" className="btn-secondary" onClick={onRetakeLong}>
            Пройти полный тест (50 вопросов)
          </button>
        )}
        <button type="button" className="btn-ghost" onClick={onRestart}>
          ← На главную
        </button>
      </div>
    </div>
  )
}
