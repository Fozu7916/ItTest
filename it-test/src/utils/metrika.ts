const COUNTER_ID = import.meta.env.VITE_YANDEX_METRIKA_ID
const METRIKA_SCRIPT = 'https://mc.yandex.ru/metrika/tag.js'

let initialized = false

function getCounterId(): number | null {
  if (!COUNTER_ID) return null
  const id = Number(COUNTER_ID)
  return Number.isFinite(id) ? id : null
}

export function initMetrika(): void {
  const counterId = getCounterId()
  if (!counterId || initialized || typeof window === 'undefined') return

  initialized = true

  window.ym =
    window.ym ||
    function (...args: unknown[]) {
      ;(window.ym!.a = window.ym!.a || []).push(args)
    }
  window.ym!.l = Date.now()

  const script = document.createElement('script')
  script.async = true
  script.src = METRIKA_SCRIPT
  document.head.appendChild(script)

  window.ym(counterId, 'init', {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true,
  })
}

function callMetrika(method: string, ...args: unknown[]): void {
  const counterId = getCounterId()
  if (!counterId || !window.ym) return
  window.ym(counterId, method, ...args)
}

/** Виртуальный просмотр страницы (для SPA) */
export function trackPage(path: string): void {
  callMetrika('hit', path)
}

/** Цель — создай такие же идентификаторы в настройках Метрики */
export function trackGoal(
  goal: string,
  params?: Record<string, string | number>,
): void {
  callMetrika('reachGoal', goal, params)
}

/** Параметры визита — видны в отчёте «Параметры визитов» без настройки целей */
export function trackParams(params: Record<string, string | number>): void {
  callMetrika('params', params)
}

export type TestEventType = 'short' | 'long'

export function trackTestStart(type: TestEventType): void {
  trackPage(type === 'short' ? '/test/short' : '/test/long')
  trackGoal(`test_start_${type}`)
  trackParams({ event: 'test_start', test_type: type })
}

export function trackTestComplete(
  type: TestEventType,
  topDirection: string,
  topScore: number,
  secondDirection?: string,
): void {
  trackPage('/results')
  trackGoal(`test_complete_${type}`, {
    top_direction: topDirection,
    top_score: topScore,
  })
  trackParams({
    event: 'test_complete',
    test_type: type,
    top_direction: topDirection,
    top_score: topScore,
    ...(secondDirection ? { second_direction: secondDirection } : {}),
  })
}

export function trackTestAbandon(type: TestEventType, questionIndex: number): void {
  trackGoal('test_abandon')
  trackParams({
    event: 'test_abandon',
    test_type: type,
    question_index: questionIndex,
  })
}

export function trackRetakeLong(): void {
  trackGoal('retake_long')
  trackParams({ event: 'retake_long' })
}

export function trackTelegramClick(source: 'home' | 'results'): void {
  trackGoal('telegram_click')
  trackParams({ event: 'telegram_click', source })
}
