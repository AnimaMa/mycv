import React from "react"
import { filterEmptySections } from "../../utils/filterEmptySections"
import { useSections } from "./hooks/useSections"
import { Summary } from "./sections/Summary"

export const Content = () => {
  const sections = useSections()
  return (
    <div className="container mx-auto  sm:p-10 p-3 sm:w-3/5">
      <div>
        <Summary />
        {sections.filter(filterEmptySections).map((section) => (
          <div key={section.name}>{section.component}</div>
        ))}
      </div>
    </div>
  )
}
