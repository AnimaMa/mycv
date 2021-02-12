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
    label: "Vytvoriť resume",
  },

  {
    to: "/r/4f90d13a42",
    label: "Ukážka",
  },
]
