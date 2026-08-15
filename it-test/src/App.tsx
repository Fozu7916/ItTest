import { useState } from 'react'
import type { Screen, TestResult, TestType } from './types'
import { shortQuestions } from './data/questions-short'
import { longQuestions } from './data/questions-long'
import { calculateResults } from './utils/scoring'
import {
  trackRetakeLong,
  trackTestAbandon,
  trackTestComplete,
  trackTestStart,
} from './utils/metrika'
import { Home } from './components/Home'
import { TestScreen } from './components/TestScreen'
import { Results } from './components/Results'
import './App.css'

function App() {
  const [screen, setScreen] = useState<Screen>('home')
  const [testType, setTestType] = useState<TestType>('short')
  const [results, setResults] = useState<TestResult[]>([])
  const [questionIndex, setQuestionIndex] = useState(0)

  const questions = testType === 'short' ? shortQuestions : longQuestions

  function handleSelectTest(type: TestType) {
    setTestType(type)
    setQuestionIndex(0)
    setScreen('test')
    trackTestStart(type)
  }

  function handleComplete(answers: number[]) {
    const testResults = calculateResults(questions, answers)
    setResults(testResults)
    setScreen('results')

    const top = testResults[0]
    const second = testResults[1]
    if (top) {
      trackTestComplete(
        testType,
        top.directionId,
        top.score,
        second?.directionId,
      )
    }
  }

  function handleRestart(fromTest = false) {
    if (fromTest) {
      trackTestAbandon(testType, questionIndex)
    }
    setScreen('home')
    setResults([])
    setQuestionIndex(0)
  }

  function handleRetakeLong() {
    trackRetakeLong()
    setTestType('long')
    setQuestionIndex(0)
    setScreen('test')
    setResults([])
    trackTestStart('long')
  }

  return (
    <div className="app">
      {screen === 'home' && <Home onSelectTest={handleSelectTest} />}
      {screen === 'test' && (
        <TestScreen
          questions={questions}
          onComplete={handleComplete}
          onBack={() => handleRestart(true)}
          onQuestionChange={setQuestionIndex}
        />
      )}
      {screen === 'results' && (
        <Results
          results={results}
          onRestart={() => handleRestart()}
          onRetakeLong={handleRetakeLong}
          wasShort={testType === 'short'}
        />
      )}
    </div>
  )
}

export default App
