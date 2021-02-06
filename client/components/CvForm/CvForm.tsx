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
import { useMutation, useQuery } from "react-query"
import { api } from "../../lib/api"
import { nanoid } from "nanoid"

export interface CvFormProps {
  className?: string
}

const CvFormInner = (props: CvFormProps) => {
  const [uid, setUid] = useState(nanoid())
  // const cvUid = nanoid()
  console.log(uid, "tu")

  const fetchUsers = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    return res.json()
  }

  const getExist = () => {
    const data = api
      .get(`/resumes?uid=${uid}`)
      .then(function (response) {
        if (response.data.length > 0) {
          setUid(nanoid())

          return response
        }
      })
      .catch(function (error) {
        console.log(error)
      })

    console.log(data, "daddada")
  }
  const volamHook = () => {
    const mmm = `/resumes?uid=${uid}`
    const { data, status } = useQuery(mmm, getExist)
    console.log(data)
  }
  volamHook()

  useEffect(() => {
    // console.log(cvUid)
    // 4f90d13a42
  }, [uid])

  const rhfMethods = useForm()
  const { register, handleSubmit, watch } = rhfMethods

  const { mutate } = useMutation(
    (values: any) => api({ url: `/resumes`, data: { ...values, uid: uid }, method: "POST" }),
    {
      onSuccess: () => {},
    }
  )

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
