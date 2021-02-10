import React from "react"
import { Aside } from "./Aside/Aside"
import { Content } from "./Content/Content"
import Image from "next/image"
import { useResume } from "./ResumeProvider/ResumeProvider"

export interface ResumeContentProps {
  className?: string
}

export const ResumeContent = (props: ResumeContentProps) => {
  const { workExperience, education, language, interest, skill, course } = useResume()
  const linkStyles = ""
  return (
    <div className="wrapper">
      <nav className="flex items-center justify-end">
        <div className="flex  justify-center ">
          <div className="flex items-end">
            <Image
              src="/img/vlnka.svg"
              alt="cloudresume logo"
              width={200}
              height={75}
              className=" object-cover w-full"
            />
          </div>

          <div className="sm:flex  min-w-300 bg-white items-center px-4">
            {workExperience.length && (
              <a href="#work" className="text-primary sm:flex hidden hover:text-secondary font-bold mr-4 uppercase">
                Praca
              </a>
            )}
            {education.length && (
              <a
                href="#education"
                className="text-primary sm:flex hidden hover:text-secondary font-bold mr-4 uppercase"
              >
                Vzdelanie
              </a>
            )}

            {course.length && (
              <a href="#course" className="text-primary sm:flex hidden hover:text-secondary font-bold mr-4 uppercase">
                Kurzy
              </a>
            )}
            {language.length && (
              <a href="#language" className="text-primary sm:flex hidden hover:text-secondary font-bold mr-4 uppercase">
                Jazyky
              </a>
            )}

            {skill.length && (
              <a href="#skill" className="text-primary sm:flex hidden hover:text-secondary font-bold mr-4 uppercase">
                Zrucnosti
              </a>
            )}
            {interest.length && (
              <a href="#interest" className="text-primary sm:flex hidden hover:text-secondary font-bold mr-4 uppercase">
                zaujmy
              </a>
            )}
          </div>
        </div>
      </nav>

      <div className="flex flex-col sm:flex-row bg-white h-full relative w-full mb-8">
        <Aside />
        <Content />
      </div>
    </div>
  )
}
