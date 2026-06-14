"use client"

import React from "react"
import type { Route } from "next"
import Link from "next/link"

import type { NavItem } from "@/types/nav"
import { useTranslation, type TranslationKey } from "@/lib/i18n/use-translation"
import { cn } from "@/lib/utils"

const NAV_KEY_MAP: Record<string, TranslationKey> = {
  "/": "nav.home",
  "/#hello": "nav.about",
  "/#experience": "nav.experience",
  "/#projects": "nav.projects",
}

export function Nav({
  items,
  activeId,
  className,
  exactMatch = false,
}: {
  items: NavItem<Route>[]
  activeId?: string
  className?: string
  exactMatch?: boolean
}) {
  const { t } = useTranslation()

  return (
    <nav
      data-active-id={activeId}
      className={cn("flex items-center gap-4", className)}
    >
      {items.map(({ href }) => {
        const isActive = exactMatch
          ? activeId === href
          : activeId === href ||
            (href === "/" // Home page
              ? ["/", "/index"].includes(activeId || "")
              : activeId?.startsWith(href))

        return (
          <NavItem
            key={href}
            href={href}
            aria-current={isActive ? "page" : undefined}
          >
            {t(NAV_KEY_MAP[href])}
          </NavItem>
        )
      })}
    </nav>
  )
}

export function NavItem({
  className,
  ...props
}: React.ComponentProps<typeof Link>) {
  return (
    <Link
      className={cn(
        "text-sm font-medium text-muted-foreground transition-[color] hover:text-foreground aria-[current=page]:text-foreground",
        className
      )}
      {...props}
    />
  )
}
