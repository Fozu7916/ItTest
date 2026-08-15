import { useState } from 'react'
import type { Screen, TestResult, TestType } from './types'
import { shortQuestions } from './data/questions-short'
import { longQuestions } from './data/questions-long'
import { calculateResults } from './utils/scoring'
import { Home } from './components/Home'
import { TestScreen } from './components/TestScreen'
import { Results } from './components/Results'
import './App.css'

function App() {
  const [screen, setScreen] = useState<Screen>('home')
  const [testType, setTestType] = useState<TestType>('short')
  const [results, setResults] = useState<TestResult[]>([])

  const questions = testType === 'short' ? shortQuestions : longQuestions

  function handleSelectTest(type: TestType) {
    setTestType(type)
    setScreen('test')
  }

  function handleComplete(answers: number[]) {
    const testResults = calculateResults(questions, answers)
    setResults(testResults)
    setScreen('results')
  }

  function handleRestart() {
    setScreen('home')
    setResults([])
  }

  function handleRetakeLong() {
    setTestType('long')
    setScreen('test')
    setResults([])
  }

  return (
    <div className="app">
      {screen === 'home' && <Home onSelectTest={handleSelectTest} />}
      {screen === 'test' && (
        <TestScreen
          questions={questions}
          onComplete={handleComplete}
          onBack={handleRestart}
        />
      )}
      {screen === 'results' && (
        <Results
          results={results}
          onRestart={handleRestart}
          onRetakeLong={handleRetakeLong}
          wasShort={testType === 'short'}
        />
      )}
    </div>
  )
}

export default App
