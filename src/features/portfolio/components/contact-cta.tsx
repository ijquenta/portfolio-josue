"use client"

import { useTranslation } from "@/lib/i18n/use-translation"
import { MailIcon } from "@animateicons/react/lucide"
import { ArrowDownIcon } from "lucide-react"
import { USER } from "@/features/portfolio/data/user"
import { Button } from "@/components/base/ui/button"

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
          render={
            <a href={`mailto:${email}`}>
              <MailIcon className="size-4" />
              {t("cta.sendEmail")}
            </a>
          }
        />
        <Button
          variant="secondary"
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
