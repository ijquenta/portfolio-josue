"use client"

import { useRouter } from "next/navigation"

import { useLocale } from "@/components/locale-provider"
import { locales } from "@/lib/i18n/config"
import { Button } from "@/components/ui/button"

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale()
  const router = useRouter()

  const nextLocale = locales.find((l) => l !== locale) ?? locales[0]

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => {
        setLocale(nextLocale)
        router.refresh()
      }}
      aria-label={nextLocale === "es" ? "Cambiar a espanol" : "Switch to English"}
      className="size-8 min-w-8 rounded-lg text-xs font-medium"
    >
      {nextLocale === "es" ? "ES" : "EN"}
    </Button>
  )
}
