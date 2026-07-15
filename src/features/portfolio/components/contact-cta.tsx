"use client"

import { MailIcon } from "@animateicons/react/lucide"
import { ArrowDownIcon } from "lucide-react"

import { useTranslation } from "@/lib/i18n/use-translation"
import { Button } from "@/components/base/ui/button"
import { USER } from "@/features/portfolio/data/user"

export function ContactCTA() {
  const { t } = useTranslation()

  const email = atob(USER.emailB64)

  return (
    <div className="border-x border-line py-12 text-center">
      <h2 className="mb-2 text-2xl font-semibold tracking-tight">
        {t("cta.title")}
      </h2>
      <p className="mx-auto mb-6 max-w-md text-muted-foreground">
        {t("cta.description")}
      </p>
      <div className="flex items-center justify-center gap-3">
        <Button
          nativeButton={false}
          render={
            <a href={`mailto:${email}`}>
              <MailIcon className="size-4" />
              {t("cta.sendEmail")}
            </a>
          }
        />
        <Button
          variant="secondary"
          nativeButton={false}
          render={
            <a href="/cv.pdf" download>
              <ArrowDownIcon className="size-4" />
              {t("cta.downloadCV")}
            </a>
          }
        />
      </div>
    </div>
  )
}
