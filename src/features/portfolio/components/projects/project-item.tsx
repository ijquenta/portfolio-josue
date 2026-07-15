import { addQueryParams } from "@/utils/url"

import { UTM_PARAMS } from "@/config/site"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import type { Project } from "../../types/projects"

export function ProjectCard({
  className,
  project,
}: {
  className?: string
  project: Project
}) {
  const { start, end } = project.period
  const isOngoing = !end

  return (
    <Card className={cn("relative w-full pt-0", className)}>
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src={project.cover ?? "https://avatar.vercel.sh/placeholder"}
        alt=""
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
      />
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">
            {start}
            {isOngoing ? " — Present" : end ? ` — ${end}` : ""}
          </Badge>
        </CardAction>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>
          {project.skills.slice(0, 3).join(" · ")}
          {project.skills.length > 3 && " · ..."}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full" asChild>
          <a
            href={addQueryParams(project.link, UTM_PARAMS)}
            target="_blank"
            rel="noopener"
          >
            View Project
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}
