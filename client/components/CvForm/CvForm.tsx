import React, { useEffect, useState } from "react"
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
import { useMutation, useQuery, QueryClient, useQueryClient } from "react-query"
import { api } from "../../lib/api/api"
import { nanoid } from "nanoid"
import { useGeneratedUid } from "./hooks/useGeneratedUid"
import { useRouter } from "next/router"
import { CircularProgress } from "@material-ui/core"
import { generateResumeRoute } from "../../lib/routes"

export interface CvFormProps {
  className?: string
}

const CvFormInner = (props: CvFormProps) => {
  const { uid } = useGeneratedUid()
  const router = useRouter()

  const rhfMethods = useForm()
  const { register, handleSubmit, watch } = rhfMethods

  const { mutate, isLoading } = useMutation(
    (values: any) => api({ url: `/resumes`, data: { ...values, uid: uid }, method: "POST" }),
    {
      onSuccess: () => {
        router.push(generateResumeRoute(uid))
      },
    }
  )

  const onSubmit = (values) => mutate(values)

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
            <Button disabled={isLoading} variant="contained" color="primary" type="submit" className="btn btn-primary">
              {isLoading ? (
                <div>
                  <CircularProgress size={20} color="secondary" />
                  Vytvaram CV
                </div>
              ) : (
                <div>Vytvorit</div>
              )}
            </Button>
          </Grid>
        </form>
      </FormProvider>
    </div>
  )
}

export const CvForm = styled(CvFormInner)``
