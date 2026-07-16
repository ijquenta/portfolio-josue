import { getServerT } from "@/lib/i18n/server-t"
import { Prose } from "@/components/ui/typography"
import { Markdown } from "@/components/markdown"
import { GitHubContributions } from "@/features/portfolio/components/github-contributions"
import {
  Panel,
  PanelContent,
  PanelHeader,
  PanelTitle,
} from "@/features/portfolio/components/panel"
import { PanelTitleCopy } from "@/features/portfolio/components/panel-title-copy"
import { USER } from "@/features/portfolio/data/user"

const ID = "hello"

export async function About() {
  const { t } = await getServerT()
  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>{t("section.hello")}</a>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      <PanelContent className="screen-line-bottom py-6">
        <Prose>
          <Markdown>{USER.about}</Markdown>
        </Prose>
      </PanelContent>

      <GitHubContributions />
    </Panel>
  )
}
