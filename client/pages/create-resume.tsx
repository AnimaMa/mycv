import { Box, MuiThemeProvider } from "@material-ui/core"
import React from "react"
import { CvForm } from "../components/CvForm/CvForm"
import Layout from "../components/shared/Layout/Layout"
import { PageHeader } from "../components/shared/PageHeader/PageHeader"
import { muiTheme } from "../components/shared/Theme/Theme"

export default function CreateCv() {
  return (
    <div className="create-cv-page">
      <Layout bgColor={true} className="layout_create-cv">
        <PageHeader />
        <div className="container mx-auto md:w-1/2 w-11/12">
          <section>
            <Box m={3}>
              <h1 className="uppercase text-center text-3xl  md:text-5xl">Vytvor si svoje resume</h1>
            </Box>
            <MuiThemeProvider theme={muiTheme}>
              <CvForm />
            </MuiThemeProvider>
          </section>
        </div>
      </Layout>
    </div>
  )
}
