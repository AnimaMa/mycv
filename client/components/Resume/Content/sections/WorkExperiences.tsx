import React from "react"
import { SectionHeading } from "../../components/SectionHeading"
import { useResume } from "../../ResumeProvider/ResumeProvider"
import Timeline from "@material-ui/lab/Timeline"
import TimelineItem from "@material-ui/lab/TimelineItem"
import TimelineSeparator from "@material-ui/lab/TimelineSeparator"
import TimelineDot from "@material-ui/lab/TimelineDot"
import TimelineConnector from "@material-ui/lab/TimelineConnector"
import TimelineContent from "@material-ui/lab/TimelineContent"
import { MdWork } from "react-icons/md"

export interface SummaryProps {
  className?: string
}

export const WorkExperiences = (props: SummaryProps) => {
  const { workExperience } = useResume()
  return (
    <div className={props.className}>
      <SectionHeading>Pracovné skúsenosti</SectionHeading>
      <div className=" ">
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
                  <span className="text-dark text-sm">
                    {work.startDate} - {work.stillWorks ? "Present" : work.endDate}
                  </span>
                  <p className="text-secondary text-bold uppercase font-bold my-2">{work.position}</p>
                  {work.summary && <p>{work.summary}</p>}
                  {work.usedTechnologies && (
                    <div className="flex my-2 flex-col">
                      <p className="pb-1  text-secondary">Technologie s ktorymi si pracoval:</p>
                      <p className="pl-2">{work.usedTechnologies}</p>
                    </div>
                  )}

                  {work.website && (
                    <p>
                      <span className="text-secondary">Webová stránka spoločnosti: </span>
                      <a href={work.website} className=" hover:text-opacity-25">
                        {work.website}
                      </a>
                    </p>
                  )}
                </div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </div>
  )
}
