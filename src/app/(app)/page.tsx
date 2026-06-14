import type { Metadata } from "next"
import type { ProfilePage as PageSchema, WithContext } from "schema-dts"

import { JsonLdScript } from "@/lib/json-ld"
import { cn } from "@/lib/utils"
import { About } from "@/features/portfolio/components/about"
import { ContactCTA } from "@/features/portfolio/components/contact-cta"
import { Experiences } from "@/features/portfolio/components/experiences"
import { Overview } from "@/features/portfolio/components/overview"
import { ProfileHeader } from "@/features/portfolio/components/profile-header"
import { Projects } from "@/features/portfolio/components/projects"
import { SocialLinks } from "@/features/portfolio/components/social-links-v2"
import { TechStack } from "@/features/portfolio/components/tech-stack"
import { USER } from "@/features/portfolio/data/user"

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
}

export default function HomePage() {
  return (
    <>
      <JsonLdScript data={getPageJsonLd()} />

      <div className="[--separator-height:--spacing(8)] **:data-[slot=panel]:scroll-mt-[calc(var(--header-height)+var(--separator-height))]">
        <div className="mx-auto md:max-w-3xl">
          <ProfileHeader />
          <Separator />

          <Overview />
          <SocialLinks />
          <Separator />

          <About />
          <Separator />

          <Projects />
          <Separator />

          <TechStack />
          <Separator />

          <Experiences />
          <Separator />

          <ContactCTA />
          <Separator />
        </div>
      </div>
    </>
  )
}

function getPageJsonLd(): WithContext<PageSchema> {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: new Date(USER.dateCreated).toISOString(),
    dateModified: new Date().toISOString(),
    mainEntity: {
      "@type": "Person",
      name: USER.displayName,
      identifier: USER.username,
      image: USER.avatar,
    },
  }
}

function Separator({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-(--separator-height) w-full border-x border-line",
        "before:absolute before:left-[-100vw] before:-z-1 before:h-(--separator-height) before:w-[200vw]",
        "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-line)]/56",
        className
      )}
    >
    </div>
  )
}
