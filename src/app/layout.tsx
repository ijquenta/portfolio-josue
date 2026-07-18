import "@/styles/globals.css"

import type { Metadata, Viewport } from "next"
import { cookies } from "next/headers"
import Script from "next/script"
import { NuqsAdapter } from "nuqs/adapters/next/app"
import type { WebSite, WithContext } from "schema-dts"

import { META_THEME_COLORS, SITE_INFO, X_HANDLE } from "@/config/site"
import { fontVariables } from "@/lib/fonts"
import type { Locale } from "@/lib/i18n/config"
import { defaultLocale } from "@/lib/i18n/config"
import { JsonLdScript } from "@/lib/json-ld"
import { LocaleProvider } from "@/components/locale-provider"
import { Providers } from "@/components/providers"
import { USER } from "@/features/portfolio/data/user"

function getWebSiteJsonLd(): WithContext<WebSite> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_INFO.name,
    url: SITE_INFO.url,
    alternateName: [USER.username],
  }
}

// Thanks @shadcn-ui, @tailwindcss
const darkModeScript = String.raw`
  try {
    if (localStorage.theme === 'dark' || ((!('theme' in localStorage) || localStorage.theme === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.querySelector('meta[name="theme-color"]').setAttribute('content', '${META_THEME_COLORS.dark}')
    }
  } catch (_) {}

  try {
    if (/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)) {
      document.documentElement.classList.add('os-macos')
    }
  } catch (_) {}
`

export const metadata: Metadata = {
  metadataBase: new URL(SITE_INFO.url),
  title: {
    template: `%s – ${SITE_INFO.name}`,
    default: `${USER.displayName} – ${USER.jobTitle}`,
  },
  description: SITE_INFO.description,
  keywords: SITE_INFO.keywords,
  authors: [
    {
      name: USER.displayName,
      url: SITE_INFO.url,
    },
  ],
  creator: USER.displayName,
  alternates: {
    languages: {
      en: `${SITE_INFO.url}/en`,
      es: `${SITE_INFO.url}/es`,
    },
  },
  openGraph: {
    siteName: SITE_INFO.name,
    url: SITE_INFO.url,
    type: "profile",
    locale: "es_BO",
    firstName: USER.firstName,
    lastName: USER.lastName,
    username: USER.username,
    gender: USER.gender,
    images: [
      {
        url: `/og/simple?title=${encodeURIComponent(`${USER.displayName} – ${USER.jobTitle}`)}&description=${encodeURIComponent(SITE_INFO.description)}`,
        width: 1200,
        height: 630,
        alt: SITE_INFO.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: X_HANDLE,
    creator: X_HANDLE,
    images: [
      `/og/simple?title=${encodeURIComponent(`${USER.displayName} – ${USER.jobTitle}`)}&description=${encodeURIComponent(SITE_INFO.description)}`,
    ],
  },
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicon-dark.svg",
        sizes: "any",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: META_THEME_COLORS.light,
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = await cookies()
  const locale = (cookieStore.get("locale")?.value as Locale) || defaultLocale

  return (
    <html lang={locale} className={fontVariables} suppressHydrationWarning>
      <head>
        <JsonLdScript data={getWebSiteJsonLd()} />
      </head>

      <body>
        <Script
          id="dark-mode-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: darkModeScript }}
        />
        <Script
          id="avatar-lights-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var value = localStorage.getItem('avatarLights');
                document.documentElement.dataset.avatarLights = JSON.parse(value || '"on"');
              } catch(_) {}
            `,
          }}
        />
        <LocaleProvider initialLocale={locale}>
          <Providers>
            <NuqsAdapter>{children}</NuqsAdapter>
          </Providers>
        </LocaleProvider>
      </body>
    </html>
  )
}
