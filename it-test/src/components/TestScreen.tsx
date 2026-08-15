import { useEffect, useState } from 'react'
import type { Question } from '../types'
import { ProgressBar } from './ProgressBar'

interface TestScreenProps {
  questions: Question[]
  onComplete: (answers: number[]) => void
  onBack: () => void
  onQuestionChange?: (index: number) => void
}

export function TestScreen({
  questions,
  onComplete,
  onBack,
  onQuestionChange,
}: TestScreenProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [selected, setSelected] = useState<number | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)

  const question = questions[currentIndex]
  const isLast = currentIndex === questions.length - 1

  useEffect(() => {
    onQuestionChange?.(currentIndex)
  }, [currentIndex, onQuestionChange])

  function handleSelect(index: number) {
    if (isAnimating) return
    setSelected(index)
  }

  function handleNext() {
    if (selected === null || isAnimating) return

    const newAnswers = [...answers, selected]
    setIsAnimating(true)

    setTimeout(() => {
      if (isLast) {
        onComplete(newAnswers)
      } else {
        setAnswers(newAnswers)
        setCurrentIndex((i) => i + 1)
        setSelected(null)
        setIsAnimating(false)
      }
    }, 300)
  }

  function handleBack() {
    if (currentIndex === 0) {
      onBack()
      return
    }
    setCurrentIndex((i) => i - 1)
    setAnswers((a) => a.slice(0, -1))
    setSelected(null)
  }

  return (
    <div className={`test-screen ${isAnimating ? 'test-screen--out' : ''}`}>
      <div className="test-header">
        <button type="button" className="btn-back" onClick={handleBack}>
          ← Назад
        </button>
        <ProgressBar current={currentIndex + 1} total={questions.length} />
      </div>

      <div className="question-block">
        <h2 className="question-text">{question.text}</h2>

        <div className="answers">
          {question.answers.map((answer, index) => (
            <button
              key={index}
              type="button"
              className={`answer-btn ${selected === index ? 'answer-btn--selected' : ''}`}
              onClick={() => handleSelect(index)}
            >
              <span className="answer-letter">
                {String.fromCharCode(65 + index)}
              </span>
              <span className="answer-text">{answer.text}</span>
            </button>
          ))}
        </div>
      </div>

      <button
        type="button"
        className="btn-primary btn-next"
        disabled={selected === null}
        onClick={handleNext}
      >
        {isLast ? 'Узнать результат' : 'Далее →'}
      </button>
    </div>
  )
}
