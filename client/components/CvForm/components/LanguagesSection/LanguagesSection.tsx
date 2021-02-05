import FormControl from "@material-ui/core/FormControl"
import Grid from "@material-ui/core/Grid"
import React from "react"
import styled from "styled-components"
import { FormInput } from "../../../shared/Form/FormInput/FormInput"
import { FormSection } from "../../../shared/Form/FormSection/FormSection"
import { FormSectionSubtitle } from "../../../shared/Form/FormSectionSubtitle/FormSectionSubtitle"
import { FormSectionTitle } from "../../../shared/Form/FormSectionTitle/FormSectionTitle"

export interface LanguagesSectionProps {
  className?: string
}

const LanguagesSectionInner = (props: LanguagesSectionProps) => {
  return (
    <FormSection className={props.className}>
      <FormSectionTitle>Jazyky</FormSectionTitle>

      <Grid container spacing={2}>
        <Grid item xs={4}>
          <FormControl>
            <FormInput name="language.name" placeholder="Jazyk" />
          </FormControl>
        </Grid>

        <Grid item xs={4}>
          <FormControl>
            <FormInput name="language.fluency" placeholder="Stupeň" />
          </FormControl>
        </Grid>
      </Grid>
    </FormSection>
  )
}

export const LanguagesSection = styled(LanguagesSectionInner)``
