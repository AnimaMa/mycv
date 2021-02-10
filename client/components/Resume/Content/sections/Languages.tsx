import React from "react"
import { SectionHeading } from "../../components/SectionHeading"
import { useResume } from "../../ResumeProvider/ResumeProvider"

export interface LanguagesProps {
  className?: string
}

export const Languages = (props: LanguagesProps) => {
  const { language } = useResume()

  return (
    <div className={props.className}>
      <SectionHeading
        withIcon={true}
        heading="Cudzie jazyky"
        iconUrl="/img/icon_languages.svg"
        iconAlt="certificate icon"
      />
      <div className="md:pl-12">
        {language &&
          language.map((l) => (
            <div className="flex mb-3" key={l.id}>
              <p className="text-secondary font-bold mr-2  ">{l.language}</p>
              <p className="text-primary uppercase">{l.fluency}</p>
            </div>
          ))}
      </div>
    </div>
  )
}
