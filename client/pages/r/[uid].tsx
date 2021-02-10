import { GetStaticProps, GetStaticPaths } from "next"
import React from "react"
import { ResumeProvider } from "../../components/Resume/ResumeProvider/ResumeProvider"
import { getAllResumeUids, getResume } from "../../lib/api/resume"
import { Resumes } from "../../lib/models/resume"
import { generateResumeRoute } from "../../lib/routes"
import { ResumeContent } from "../../components/Resume/ResumeContent"
import Layout from "../../components/shared/Layout/Layout"

interface ResumePageProps {
  resume: Resumes.Resume
}

export const ResumePage = (props: ResumePageProps) => {
  const { resume } = props

  return (
    <div>
      <ResumeProvider resume={resume}>
        <Layout bgColor={true} className="layout_create-cv">
          <div className="container mx-auto md:w-8/12 w-12/12  mb-5">
            <ResumeContent />
          </div>
        </Layout>
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
