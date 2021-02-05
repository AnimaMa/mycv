import FormControl from "@material-ui/core/FormControl"
import FormLabel from "@material-ui/core/FormLabel"
import Grid from "@material-ui/core/Grid"
import React from "react"
import styled from "styled-components"
import { FormInput } from "../../../shared/Form/FormInput/FormInput"
import { FormSection } from "../../../shared/Form/FormSection/FormSection"
import { FormSectionTitle } from "../../../shared/Form/FormSectionTitle/FormSectionTitle"
import { FormSectionSubtitle } from "../../../shared/Form/FormSectionSubtitle/FormSectionSubtitle"
import { FormKeyboardDatePicker } from "../../../shared/Form/FormKeyboardDatePicker/FormKeyboardDatePicker"
import { FormSwitch } from "../../../shared/Form/FormSwitch/FormSwitch"

export interface WorkExperiencesProps {
  className?: string
}

const WorkExperiencesInner = (props: WorkExperiencesProps) => {
  return (
    <FormSection className={props.className}>
      <FormSectionTitle>Pracovné skúsenosti </FormSectionTitle>

      <Grid container spacing={2}>
        <Grid item xs={4}>
          <FormControl>
            <FormInput name="workExperience.company" placeholder="Spoločnosť" defaultValue="" />
          </FormControl>
        </Grid>

        <Grid item xs={4}>
          <FormControl>
            <FormInput name="workExperience.position" placeholder="Pozícia" defaultValue="" />
          </FormControl>
        </Grid>

        <Grid item xs={4}>
          <FormControl>
            <FormInput
              name="workExperience.usedTechnologies"
              placeholder="Technológie s ktorými si pracoval"
              defaultValue=""
            />
          </FormControl>
        </Grid>

        <Grid item xs={4}>
          <FormControl>
            <FormInput name="workExperience.website" placeholder="Odkaz na ich webstránku" defaultValue="" />
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormSectionSubtitle>Trvanie</FormSectionSubtitle>
        </Grid>

        <Grid item xs={4}>
          <FormKeyboardDatePicker label="Začiatok" name="workExperience.startDate" defaultValue="" />
        </Grid>

        <Grid item xs={4}>
          <FormKeyboardDatePicker label="Koniec" name="workExperience.endDate" defaultValue="" />
        </Grid>

        <Grid item xs={2}>
          <FormControl>
            <FormLabel>Stále tu pracujem.</FormLabel>
            <FormSwitch name="workExperience.stillWorks" defaultValue={false} />
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormSectionSubtitle>Krátky sumár</FormSectionSubtitle>
        </Grid>

        <Grid item xs={12}>
          <FormControl>
            <FormInput
              name="workExperience.summary"
              placeholder="Môžeš napísať krátky sumár o tom, čo si robil v tejto spoločnosti."
              multiline
              rows={6}
              defaultValue=""
            />
          </FormControl>
        </Grid>
      </Grid>
    </FormSection>
  )
}

export const WorkExperiences = styled(WorkExperiencesInner)``
