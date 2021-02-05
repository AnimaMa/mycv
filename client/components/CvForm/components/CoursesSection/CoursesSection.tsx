import React from "react"
import styled from "styled-components"

import FormControl from "@material-ui/core/FormControl"
import Grid from "@material-ui/core/Grid"
import { FormInput } from "../../../shared/Form/FormInput/FormInput"
import { FormSection } from "../../../shared/Form/FormSection/FormSection"
import { FormSectionTitle } from "../../../shared/Form/FormSectionTitle/FormSectionTitle"

export interface CoursesSectionProps {
  className?: string
}

const CoursesSectionInner = (props: CoursesSectionProps) => {
  return (
    <FormSection className={props.className}>
      <FormSectionTitle>Kurzy </FormSectionTitle>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <FormControl>
            <FormInput name="course.name" placeholder="Názov" />
          </FormControl>
        </Grid>

        <Grid item xs={4}>
          <FormControl>
            <FormInput name="course.website" placeholder="Webový odkaz na kurz / firmu" />
          </FormControl>
        </Grid>

        <Grid item xs={4}>
          <FormControl>
            <FormInput name="course.place" placeholder="Miesto kurzu (ak nebol online)" />
          </FormControl>
        </Grid>
      </Grid>
    </FormSection>
  )
}

export const CoursesSection = styled(CoursesSectionInner)``
