/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_YANDEX_METRIKA_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare global {
  interface Window {
    ym?: YandexMetrika
  }
}

type YandexMetrika = (
  counterId: number,
  method: string,
  ...args: unknown[]
) => void

export {}
