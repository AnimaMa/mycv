import { CircularProgress } from "@material-ui/core"
import Backdrop from "@material-ui/core/Backdrop"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import { useRouter } from "next/router"
import React, { useState } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { useMutation } from "react-query"
import { api } from "../../lib/api/api"
import { generateResumeRoute } from "../../lib/routes"
import { BasicsSection } from "./components/BasicsSection/BasicsSection"
import { CoursesSection } from "./components/CoursesSection/CoursesSection"
import { EducationSection } from "./components/EducationSection/EducationSection"
import { InterestsSection } from "./components/InterestsSection/InterestsSection"
import { LanguagesSection } from "./components/LanguagesSection/LanguagesSection"
import { ReferencesSection } from "./components/ReferencesSection/ReferencesSection"
import { SkillsSection } from "./components/SkillsSection/SkillsSection"
import { WorkExperiences } from "./components/WorkExperiences/WorkExperiences"
import { useGeneratedUid } from "./hooks/useGeneratedUid"

export interface CvFormProps {
  className?: string
}

const CvFormInner = (props: CvFormProps) => {
  const { uid } = useGeneratedUid()
  const router = useRouter()

  const rhfMethods = useForm()
  const { handleSubmit, errors } = rhfMethods

  const [backdropOpen, setBackdropOpen] = useState(false)

  const { mutate, isLoading } = useMutation(
    (values: any) => api({ url: `/resumes`, data: { ...values, uid: uid }, method: "POST" }),
    {
      onMutate: () => {
        setBackdropOpen(true)
      },
      onSuccess: () => {
        router.push(generateResumeRoute(uid))
      },
    }
  )

  const onSubmit = (values) => mutate(values)

  return (
    <div className={props.className}>
      <FormProvider {...rhfMethods}>
        <form onSubmit={handleSubmit(onSubmit)} className="z-10 relative">
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
              <div>Vytvoriť</div>
            </Button>
          </Grid>
        </form>
        <Backdrop
          style={{
            zIndex: 100,
          }}
          open={backdropOpen}
          className=""
        >
          <div className="flex flex-col items-center space-y-8">
            <CircularProgress size={80} style={{ zIndex: 101, color: "white" }} />
            <h3 className="text-white">Generujem tvoje Resumecko v cloude...</h3>
          </div>
        </Backdrop>
      </FormProvider>
    </div>
  )
}

export const CvForm = CvFormInner
