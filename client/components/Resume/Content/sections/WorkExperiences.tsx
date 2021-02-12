import Timeline from "@material-ui/lab/Timeline"
import TimelineConnector from "@material-ui/lab/TimelineConnector"
import TimelineContent from "@material-ui/lab/TimelineContent"
import TimelineDot from "@material-ui/lab/TimelineDot"
import TimelineItem from "@material-ui/lab/TimelineItem"
import TimelineSeparator from "@material-ui/lab/TimelineSeparator"
import React from "react"
import { MdWork } from "react-icons/md"
import { getHostNamefromUrl } from "../../../utils/getHostNamefromUrl"
import { Duration } from "../../components/Duration"
import { SectionHeading } from "../../components/SectionHeading"
import { SectionSubContent } from "../../components/SectionSubContent"
import { useResume } from "../../ResumeProvider/ResumeProvider"
import styles from "./sections.module.css"

export interface SummaryProps {
  className?: string
}

export const WorkExperiences = (props: SummaryProps) => {
  const { workExperience } = useResume()
  return (
    <div className={`${props.className} ${styles.section} my-2`} id="workExperiences">
      <SectionHeading
        withIcon={true}
        heading="Pracovné skúsenosti"
        iconUrl="/img/icon_work.svg"
        iconAlt="education icon"
      />

      <Timeline>
        {workExperience.map((work) => (
          <TimelineItem key={work.company}>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <MdWork />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="pb-2">
                <h3>{work.company}</h3>

                <Duration startDate={work.startDate} endDate={work.endDate} stillLasts={work.stillWorks} />

                <SectionSubContent title={work.position} text={work.summary}></SectionSubContent>

                {work.usedTechnologies && (
                  <div className="flex my-2 flex-row">
                    <p className="pb-1 font-thin text-secondary">Technologie s ktorymi si pracoval:</p>
                    <p className="pl-2 font-thin">{work.usedTechnologies}</p>
                  </div>
                )}

                {work.website && (
                  <div className="flex my-2 flex-row ">
                    <p className="font-thin text-secondary">Webová stránka spoločnosti: </p>
                    <a href={work.website} className=" pl-2 hover:text-opacity-25 text-dark">
                      {getHostNamefromUrl(work.website)}
                    </a>
                  </div>
                )}
              </div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  )
}
