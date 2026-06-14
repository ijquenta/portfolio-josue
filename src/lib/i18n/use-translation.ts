import { useLocale } from "@/components/locale-provider"
import es from "@/messages/es.json"
import en from "@/messages/en.json"
import type { Locale } from "@/lib/i18n/config"

const allMessages = { es, en } as const

type Messages = typeof es

type DotKey<T, Prefix extends string = ""> = {
  [K in keyof T & string]: T[K] extends string
    ? `${Prefix}${K}`
    : T[K] extends object
      ? `${Prefix}${K}.${DotKey<T[K], ""> extends string ? DotKey<T[K], ""> : never}`
      : never
}[keyof T & string]

export type TranslationKey = DotKey<Messages>

function getNestedValue(obj: Record<string, unknown>, path: string): string {
  const keys = path.split(".")
  let current: unknown = obj
  for (const key of keys) {
    if (current && typeof current === "object" && key in current) {
      current = (current as Record<string, unknown>)[key]
    } else {
      return path
    }
  }
  return typeof current === "string" ? current : path
}

export function useTranslation() {
  const { locale } = useLocale()

  function t(key: TranslationKey): string {
    const messages = allMessages[locale as Locale] ?? allMessages.es
    return getNestedValue(messages as unknown as Record<string, unknown>, key)
  }

  return { t, locale }
}
