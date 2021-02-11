import React from "react"
import { Resumes } from "../../../../../../lib/models/resume"

export interface LanguageProps extends Resumes.Language {
  className?: string
}

export const Language = (props: LanguageProps) => {
  const { id, language, fluency } = props
  return (
    <div className="flex mb-3" key={id}>
      <p className="text-secondary  mr-2  ">{language}: </p>
      <p className="text-primary uppercase">{fluency}</p>
    </div>
  )
}
