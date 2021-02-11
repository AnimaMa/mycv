import React from "react"
import { SectionHeading } from "../../../components/SectionHeading"
import { SectionWrap } from "../../../components/SectionWrap"
import { useResume } from "../../../ResumeProvider/ResumeProvider"
import { Language } from "./components/Language"

export interface LanguagesProps {
  className?: string
}

export const Languages = (props: LanguagesProps) => {
  const { language } = useResume()

  return (
    <div className={props.className} id="languages">
      <SectionHeading
        withIcon={true}
        heading="Cudzie jazyky"
        iconUrl="/img/icon_languages.svg"
        iconAlt="certificate icon"
      />
      <SectionWrap>{language && language.map((lan, index) => <Language {...lan} key={index} />)}</SectionWrap>
    </div>
  )
}
