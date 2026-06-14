import {
  siTypescript,
  siJavascript,
  siPython,
  siDart,
  siReact,
  siNextdotjs,
  siAngular,
  siVuedotjs,
  siFlutter,
  siTailwindcss,
  siShadcnui,
  siBootstrap,
  siPrimeng,
  siNodedotjs,
  siExpress,
  siSpringboot,
  siFlask,
  siFastapi,
  siFirebase,
  siPostgresql,
  siMysql,
  siGit,
  siDocker,
  siLinux,
  siGitlab,
  siPostman,
  siFigma,
} from "simple-icons"

import type { TechStack } from "../types/tech-stack"

function siIcon(si: { path: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d={si.path} />
    </svg>
  )
}

export const TECH_STACK: TechStack[] = [
  {
    key: "typescript",
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
    icon: siIcon(siTypescript),
    color: siTypescript.hex,
    categories: ["Languages"],
  },
  {
    key: "js",
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: siIcon(siJavascript),
    color: siJavascript.hex,
    categories: ["Languages"],
  },
  {
    key: "python",
    title: "Python",
    href: "https://www.python.org",
    icon: siIcon(siPython),
    color: siPython.hex,
    categories: ["Languages"],
  },
  {
    key: "java",
    title: "Java",
    href: "https://www.java.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path
          d="M8.851 18.56s-.417.242.297.323c.844.099 1.275.085 2.203-.093 0 0 .244.153.585.285-2.078.891-4.649-.158-3.085-.515m-.19-1.47s-.467.346.246.42c.922.096 1.65.104 2.91-.141 0 0 .17.172.437.266-2.511.735-5.307-.177-3.593-.545m5.016 2.569s.543.448-1.336.794c-1.085.2-2.617.26-3.943.072 0 0 .47.39 2.468.521 1.784.118 4.062-.268 4.405-.872.375-.661-1.232-.883-1.594-.515m-4.432-3.532c.789.165 2.023.11 2.889-.067a10.4 10.4 0 0 0-1.534-.712c-.482-.197-.978-.395-1.49-.571-.355-.124-.679-.406-.258-.46.696-.089 1.295-.073 2.089-.06.531.009 1.085.031 1.693.1l.415.068c-1.416-.558-2.862-.93-4.224-.702-.802.135-1.755.374-1.69.917.057.466.492.63 1.11.767m4.299 2.434c.06.061.033.15-.062.174s-.175.059-.256.025c-.077-.032-.11-.108-.053-.164s.143-.069.235-.034.123.066.136 0zm-.887.126c0 .106-.163.193-.365.193s-.366-.087-.366-.193.163-.193.366-.193.365.086.365.193"
        />
        <path
          d="M15.637 17.477c1.283-.136 2.04-.368 2.04-.368s-.374.422-1.866.619c-1.773.233-3.702.155-4.918.067 0 0 .421.281 2.257.444 1.342.119 3.4.03 4.895-.196.243-.037.373-.138.373-.138s-.144.222-.487.379c-1.425.636-4.301.614-5.69.479 0 0 .164.123.971.196 1.224.106 3.649.082 4.828-.215.398-.1.688-.209.688-.209s-.165.15-.465.303c-1.326.652-4.667.591-6.12.127 0 0 .307.326 1.444.481 1.358.186 3.526.13 4.536-.178.349-.107.574-.225.574-.225"
        />
        <path
          d="M11.912 11.223c.436.951-.171 1.757-.171 1.757s1.105-.276 1.513-1.234c.388-.913.18-1.773.18-1.773s.805 1.577-.246 2.778c-1.463 1.682-2.692 1.24-2.692 1.24s-.077-.064-.202-.158c1.086-.36 1.77-.984 1.77-.984s-.898-.199-1.898-.299c-.885-.089-1.872-.119-2.19-.43.014-.006.066-.019.066-.019s1.84-.565 3.88.122m-2.503.672c.698.39 1.552.767 1.552.767s-.799.161-1.76.125c-.59-.023-1.298-.162-1.646-.348 0 0 .262.213 1.02.362.376.074.806.092 1.247.053.474-.042.924-.154 1.245-.276 0 0-.703.255-1.658.117z"
        />
      </svg>
    ),
    color: "007396",
    categories: ["Languages"],
  },
  {
    key: "dart",
    title: "Dart",
    href: "https://dart.dev",
    icon: siIcon(siDart),
    color: siDart.hex,
    categories: ["Languages"],
  },
  {
    key: "react",
    title: "React",
    href: "https://react.dev",
    icon: siIcon(siReact),
    color: siReact.hex,
    categories: ["Frontend"],
  },
  {
    key: "nextjs",
    title: "Next.js",
    href: "https://nextjs.org",
    icon: siIcon(siNextdotjs),
    color: siNextdotjs.hex,
    categories: ["Frontend"],
  },
  {
    key: "angular",
    title: "Angular",
    href: "https://angular.dev",
    icon: siIcon(siAngular),
    color: siAngular.hex,
    categories: ["Frontend"],
  },
  {
    key: "vuejs",
    title: "Vue.js",
    href: "https://vuejs.org",
    icon: siIcon(siVuedotjs),
    color: siVuedotjs.hex,
    categories: ["Frontend"],
  },
  {
    key: "flutter",
    title: "Flutter",
    href: "https://flutter.dev",
    icon: siIcon(siFlutter),
    color: siFlutter.hex,
    categories: ["Frontend"],
  },
  {
    key: "tailwindcss",
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
    icon: siIcon(siTailwindcss),
    color: siTailwindcss.hex,
    categories: ["Frontend"],
  },
  {
    key: "shadcn-ui",
    title: "shadcn/ui",
    href: "https://ui.shadcn.com",
    icon: siIcon(siShadcnui),
    color: siShadcnui.hex,
    categories: ["Frontend"],
  },
  {
    key: "bootstrap",
    title: "Bootstrap",
    href: "https://getbootstrap.com",
    icon: siIcon(siBootstrap),
    color: siBootstrap.hex,
    categories: ["Frontend"],
  },
  {
    key: "primeng",
    title: "PrimeNG",
    href: "https://primeng.org",
    icon: siIcon(siPrimeng),
    color: siPrimeng.hex,
    categories: ["Frontend"],
  },
  {
    key: "nodejs",
    title: "Node.js",
    href: "https://nodejs.org",
    icon: siIcon(siNodedotjs),
    color: siNodedotjs.hex,
    categories: ["Backend & Database"],
  },
  {
    key: "express",
    title: "Express",
    href: "https://expressjs.com",
    icon: siIcon(siExpress),
    color: siExpress.hex,
    categories: ["Backend & Database"],
  },
  {
    key: "spring-boot",
    title: "Spring Boot",
    href: "https://spring.io/projects/spring-boot",
    icon: siIcon(siSpringboot),
    color: siSpringboot.hex,
    categories: ["Backend & Database"],
  },
  {
    key: "flask",
    title: "Flask",
    href: "https://flask.palletsprojects.com",
    icon: siIcon(siFlask),
    color: siFlask.hex,
    categories: ["Backend & Database"],
  },
  {
    key: "fastapi",
    title: "FastAPI",
    href: "https://fastapi.tiangolo.com",
    icon: siIcon(siFastapi),
    color: siFastapi.hex,
    categories: ["Backend & Database"],
  },
  {
    key: "firebase",
    title: "Firebase",
    href: "https://firebase.google.com",
    icon: siIcon(siFirebase),
    color: siFirebase.hex,
    categories: ["Backend & Database"],
  },
  {
    key: "postgresql",
    title: "PostgreSQL",
    href: "https://www.postgresql.org",
    icon: siIcon(siPostgresql),
    color: siPostgresql.hex,
    categories: ["Backend & Database"],
  },
  {
    key: "mysql",
    title: "MySQL",
    href: "https://www.mysql.com",
    icon: siIcon(siMysql),
    color: siMysql.hex,
    categories: ["Backend & Database"],
  },
  {
    key: "git",
    title: "Git",
    href: "https://git-scm.com",
    icon: siIcon(siGit),
    color: siGit.hex,
    categories: ["Dev Tools & AI"],
  },
  {
    key: "docker",
    title: "Docker",
    href: "https://www.docker.com",
    icon: siIcon(siDocker),
    color: siDocker.hex,
    categories: ["Dev Tools & AI"],
  },
  {
    key: "linux",
    title: "Linux",
    href: "https://www.linux.org",
    icon: siIcon(siLinux),
    color: siLinux.hex,
    categories: ["Dev Tools & AI"],
  },
  {
    key: "gitlab",
    title: "GitLab",
    href: "https://gitlab.com",
    icon: siIcon(siGitlab),
    color: siGitlab.hex,
    categories: ["Dev Tools & AI"],
  },
  {
    key: "postman",
    title: "Postman",
    href: "https://www.postman.com",
    icon: siIcon(siPostman),
    color: siPostman.hex,
    categories: ["Dev Tools & AI"],
  },
  {
    key: "figma",
    title: "Figma",
    href: "https://www.figma.com",
    icon: siIcon(siFigma),
    color: siFigma.hex,
    categories: ["Design"],
  },
]
