import { Icons } from "@/components/icons"
import type { SocialLink } from "@/features/portfolio/types/social-links-v2"

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "github",
    icon: <Icons.github />,
    title: "GitHub",
    handle: "ijquenta",
    href: "https://github.com/ijquenta",
  },
  {
    name: "linkedin",
    icon: <Icons.linkedin />,
    title: "LinkedIn",
    handle: "ijquenta",
    href: "https://linkedin.com/in/ijquenta",
  },
  {
    name: "email",
    icon: <Icons.mail />,
    title: "Email",
    handle: "ivanjosuequentavargas@gmail.com",
    href: "mailto:ivanjosuequentavargas@gmail.com",
  },
]

export function getSocialLinkByName(name: string) {
  return SOCIAL_LINKS.find((link) => link.name === name)
}
