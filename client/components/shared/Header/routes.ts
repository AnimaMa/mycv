export interface RouteLink {
  label: string
  href: string
  activeClassName?: string
}

export const routes: RouteLink[] = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/create-resume",
    label: "Create resume",
  },
]
