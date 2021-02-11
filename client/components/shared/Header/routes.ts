export interface RouteLink {
  label: string
  to: string
  activeClassName?: string
}

export const routes: RouteLink[] = [
  {
    to: "/",
    label: "Home",
  },
  {
    to: "/create-resume",
    label: "Create resume",
  },
]
