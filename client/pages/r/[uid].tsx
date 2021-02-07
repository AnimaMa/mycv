import { GetStaticProps, GetStaticPaths } from "next"
import React from "react"
import { BasicsDisplaySection } from "../../components/Resume/BasicsSection/BasicsSection"
import { ResumeProvider } from "../../components/Resume/ResumeProvider/ResumeProvider"
import { getAllResumeUids, getResume } from "../../lib/api/resume"
import { generateResumeRoute } from "../../lib/routes"

interface ResumePageProps {
  resume: Resumes.Resume
}

export const ResumePage = (props: ResumePageProps) => {
  const { resume } = props

  return (
    <div>
      <ResumeProvider resume={resume}>
        <BasicsDisplaySection />
      </ResumeProvider>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ params: { uid } }) => {
  const resume = await getResume({ uid })
  return {
    props: {
      resume,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allResumeUids = await getAllResumeUids()

  return {
    paths: allResumeUids?.map((resumeUid) => generateResumeRoute(resumeUid)) || [],
    fallback: false,
  }
}

export default ResumePage
