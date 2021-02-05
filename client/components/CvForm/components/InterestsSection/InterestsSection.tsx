import React from "react"
import styled from "styled-components"

import FormControl from "@material-ui/core/FormControl"
import Grid from "@material-ui/core/Grid"
import { FormInput } from "../../../shared/Form/FormInput/FormInput"
import { FormSection } from "../../../shared/Form/FormSection/FormSection"
import { FormSectionTitle } from "../../../shared/Form/FormSectionTitle/FormSectionTitle"

export interface InterestsSectionProps {
  className?: string
}

const InterestsSectionInner = (props: InterestsSectionProps) => {
  return (
    <FormSection className={props.className}>
      <FormSectionTitle>Záujmy</FormSectionTitle>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <FormControl>
            <FormInput name="interest.name" placeholder="Názov" />
          </FormControl>
        </Grid>
      </Grid>
    </FormSection>
  )
}

export const InterestsSection = styled(InterestsSectionInner)``
