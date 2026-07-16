import dynamic from "next/dynamic"
import Link from "next/link"

import { MAIN_NAV } from "@/config/site"
import { Separator } from "@/components/ui/separator"
import { LanguageSwitcher } from "@/components/language-switcher"
import { NavDesktop } from "@/components/nav-desktop"
import { SiteMark } from "@/components/site-mark"
import { ThemeToggle } from "@/components/theme-toggle"

const BrandContextMenu = dynamic(
  () => import("@/components/brand-context-menu")
)

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 max-w-screen overflow-x-hidden bg-background px-2 pt-(--header-pt) [--header-h:calc(var(--header-height)-var(--header-pt))] [--header-pt:--spacing(2)]">
      <div className="screen-line-top screen-line-bottom mx-auto flex h-(--header-h) items-center justify-between gap-2 border-x border-line px-2 group-has-data-[slot=layout-wide]/layout:container after:z-1 after:transition-[background-color] sm:gap-4 md:max-w-3xl">
        <BrandContextMenu>
          <Link href="/" aria-label="Home">
            <SiteMark className="h-8 shrink-0" />
          </Link>
        </BrandContextMenu>

        <div className="flex-1" />

        <NavDesktop items={MAIN_NAV} />

        <div className="flex items-center">
          <Separator
            orientation="vertical"
            className="mx-2 data-vertical:h-4 data-vertical:self-center"
          />
          <ThemeToggle />
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  )
}
