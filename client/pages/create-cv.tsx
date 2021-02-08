import { Box } from "@material-ui/core"
import React from "react"
import { CvForm } from "../components/CvForm/CvForm"
import Layout from "../components/shared/Layout/Layout"
import { PageHeader } from "../components/shared/PageHeader/PageHeader"

export default function CreateCv() {
  return (
    <div className="create-cv-page">
      <Layout bgColor={true} className="layout_create-cv">
        <PageHeader />
        <div className="container mx-auto">
          <section>
            <Box m={3}>
              <h1 className="tac">Vytvor si svoj CV</h1>
            </Box>
            <CvForm />
          </section>
        </div>
      </Layout>
    </div>
  )
}
