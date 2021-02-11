import Timeline from "@material-ui/lab/Timeline"
import TimelineConnector from "@material-ui/lab/TimelineConnector"
import TimelineContent from "@material-ui/lab/TimelineContent"
import TimelineDot from "@material-ui/lab/TimelineDot"
import TimelineItem from "@material-ui/lab/TimelineItem"
import TimelineSeparator from "@material-ui/lab/TimelineSeparator"
import React from "react"
import { MdSchool } from "react-icons/md"
import { Duration } from "../../components/Duration"
import { SectionHeading } from "../../components/SectionHeading"
import { SectionSubContent } from "../../components/SectionSubContent"
import { useResume } from "../../ResumeProvider/ResumeProvider"

export interface SummaryProps {
  className?: string
}

export const Education = (props: SummaryProps) => {
  const { education } = useResume()

  return (
    <div className={`${props.className} my-4`}>
      <SectionHeading withIcon={true} heading="Vzdelanie" iconUrl="/img/icon_edu.svg" iconAlt="education icon" />
      <div className=" ">
        <Timeline>
          {education.map((school, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot color="primary">
                  <MdSchool />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <div className="pb-2">
                  <h3>{school.institution}</h3>
                  <Duration startDate={school.startDate} endDate={school.endDate} stillLasts={school.stillStudy} />
                  <p>{school.degree}</p>

                  <SectionSubContent title={school.area} text={school.activitiesAndSocietiess}></SectionSubContent>
                </div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </div>
  )
}
