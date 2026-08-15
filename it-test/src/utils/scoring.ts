import type { Direction, DirectionId, Question, TestResult } from '../types'
import { directions } from '../data/directions'

export function calculateResults(
  questions: Question[],
  answers: number[],
): TestResult[] {
  const scores: Record<DirectionId, number> = Object.fromEntries(
    directions.map((d: Direction) => [d.id, 0]),
  ) as Record<DirectionId, number>

  for (let i = 0; i < questions.length; i++) {
    const question = questions[i]
    const answerIndex = answers[i]
    if (answerIndex === undefined) continue

    const answer = question.answers[answerIndex]
    if (!answer) continue

    for (const [dirId, points] of Object.entries(answer.scores)) {
      if (points) {
        scores[dirId as DirectionId] += points
      }
    }
  }

  const maxScore = questions.length * 3

  return directions
    .map((d: Direction): TestResult => ({
      directionId: d.id,
      score: scores[d.id],
      maxScore,
      percentage: maxScore > 0 ? Math.round((scores[d.id] / maxScore) * 100) : 0,
    }))
    .sort((a: TestResult, b: TestResult) => b.score - a.score)
}

export function getTopResults(results: TestResult[], count = 3): TestResult[] {
  return results.filter((r) => r.score > 0).slice(0, count)
}
