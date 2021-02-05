import FormControl from "@material-ui/core/FormControl"
import Grid from "@material-ui/core/Grid"
import React from "react"
import styled from "styled-components"
import { FormInput } from "../../../shared/Form/FormInput/FormInput"
import { FormSection } from "../../../shared/Form/FormSection/FormSection"
import { FormSectionTitle } from "../../../shared/Form/FormSectionTitle/FormSectionTitle"

export interface ReferencesSectionProps {
  className?: string
}

const ReferencesSectionInner = (props: ReferencesSectionProps) => {
  return (
    <FormSection className={props.className}>
      <FormSectionTitle>Referencie</FormSectionTitle>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <FormControl>
            <FormInput name="reference.name" placeholder="Meno" />
          </FormControl>
        </Grid>

        <Grid item xs={4}>
          <FormControl>
            <FormInput name="reference.position" placeholder="Pozícia" />
          </FormControl>
        </Grid>

        <Grid item xs={4}>
          <FormControl>
            <FormInput name="reference.company" placeholder="Spoločnosť" />
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControl>
            <FormInput name="reference.reference" placeholder="Referencia" multiline rows={4} />
          </FormControl>
        </Grid>
      </Grid>
    </FormSection>
  )
}

export const ReferencesSection = styled(ReferencesSectionInner)``
