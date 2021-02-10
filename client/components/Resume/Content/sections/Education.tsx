import Timeline from "@material-ui/lab/Timeline"
import TimelineConnector from "@material-ui/lab/TimelineConnector"
import TimelineContent from "@material-ui/lab/TimelineContent"
import TimelineDot from "@material-ui/lab/TimelineDot"
import TimelineItem from "@material-ui/lab/TimelineItem"
import TimelineSeparator from "@material-ui/lab/TimelineSeparator"
import React from "react"
import { MdSchool } from "react-icons/md"
import { SectionHeading } from "../../components/SectionHeading"
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
                  <span className="text-dark text-sm">
                    {school.startDate} - {school.stillStudy ? "Present" : school.endDate}
                  </span>
                  <p>Titul: {school.degree}</p>
                  <p className="text-secondary text-bold uppercase font-bold my-2">{school.area}</p>
                  {school.activitiesAndSocietiess && <p>{school.activitiesAndSocietiess}</p>}
                </div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </div>
  )
}
