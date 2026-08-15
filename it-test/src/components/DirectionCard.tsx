import { useState } from 'react'
import type { TestResult } from '../types'
import { directionMap } from '../data/directions'

interface DirectionCardProps {
  result: TestResult
  rank?: number
  expanded?: boolean
}

export function DirectionCard({ result, rank, expanded = false }: DirectionCardProps) {
  const [isOpen, setIsOpen] = useState(expanded)
  const direction = directionMap[result.directionId]

  if (!direction) return null

  const rankEmoji = rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : null

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
        </div>
      )}
    </div>
  )
}
