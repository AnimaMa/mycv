import React from "react"
import styled from "styled-components"
import { FormProvider, useForm } from "react-hook-form"
import { BasicsSection } from "./components/BasicsSection/BasicsSection"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import { WorkExperiences } from "./components/WorkExperiences/WorkExperiences"
import { EducationSection } from "./components/EducationSection/EducationSection"
import { SkillsSection } from "./components/SkillsSection/SkillsSection"
import { LanguagesSection } from "./components/LanguagesSection/LanguagesSection"
import { InterestsSection } from "./components/InterestsSection/InterestsSection"
import { ReferencesSection } from "./components/ReferencesSection/ReferencesSection"
import { CoursesSection } from "./components/CoursesSection/CoursesSection"
import { useMutation } from "react-query"
import axios from "axios"
import { api } from "../../lib/api"

export interface CvFormProps {
  className?: string
}

const CvFormInner = (props: CvFormProps) => {
  const rhfMethods = useForm()
  const { register, handleSubmit, watch } = rhfMethods

  const { mutate } = useMutation((values: any) => api({ url: `/resumes`, data: values, method: "POST" }), {
    onSuccess: () => {
      // Query Invalidations
      // queryCache.invalidateQueries('todos')
      console.log("yes")
    },
  })

  const onSubmit = (values) => {
    mutate(values)
  }

  return (
    <div className={props.className}>
      <FormProvider {...rhfMethods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <BasicsSection />
          <WorkExperiences />
          <LanguagesSection />
          <EducationSection />
          <SkillsSection />
          <CoursesSection />
          <InterestsSection />
          <ReferencesSection />

          <Grid container justify="center">
            <Button variant="contained" color="primary" type="submit" className="btn btn-primary">
              Create
            </Button>
          </Grid>
        </form>
      </FormProvider>
    </div>
  )
}

export const CvForm = styled(CvFormInner)``
