import FormControl from "@material-ui/core/FormControl"
import FormLabel from "@material-ui/core/FormLabel"
import Grid from "@material-ui/core/Grid"
import React from "react"
import styled from "styled-components"
import { FormInput } from "../../../shared/Form/FormInput/FormInput"
import { FormKeyboardDatePicker } from "../../../shared/Form/FormKeyboardDatePicker/FormKeyboardDatePicker"
import { FormSection } from "../../../shared/Form/FormSection/FormSection"
import { FormSectionSubtitle } from "../../../shared/Form/FormSectionSubtitle/FormSectionSubtitle"
import { FormSectionTitle } from "../../../shared/Form/FormSectionTitle/FormSectionTitle"
import { FormSwitch } from "../../../shared/Form/FormSwitch/FormSwitch"

export interface EducationSectionProps {
  className?: string
}

const EducationSectionInner = (props: EducationSectionProps) => {
  return (
    <FormSection className={props.className}>
      <FormSectionTitle>Vzdelanie </FormSectionTitle>

      <Grid container spacing={2}>
        <Grid item xs={4}>
          <FormControl>
            <FormInput name="education.institution" placeholder="Škola" />
          </FormControl>
        </Grid>

        <Grid item xs={4}>
          <FormControl>
            <FormInput name="education.area" placeholder="Štúdijný odbor" />
          </FormControl>
        </Grid>

        <Grid item xs={2}>
          <FormControl>
            <FormInput name="education.degree" placeholder="Degree" />
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormSectionSubtitle>Dĺžka štúdia</FormSectionSubtitle>
        </Grid>

        <Grid item xs={4}>
          <FormKeyboardDatePicker label="Začiatok štúdia" name="education.startDate" />
        </Grid>

        <Grid item xs={4}>
          <FormKeyboardDatePicker label="Koniec štúdia" name="education.endDate" />
        </Grid>

        <Grid item xs={2}>
          <FormControl>
            <FormLabel>Stále tu študujem.</FormLabel>
            <FormSwitch name="education.stillStudy" />
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormSectionSubtitle>Krátky sumár</FormSectionSubtitle>
        </Grid>

        <Grid item xs={12}>
          <FormControl>
            <FormInput
              name="education.activitiesAndSocietiess"
              placeholder="Aktivity, ktoré si robil"
              multiline
              rows={6}
            />
          </FormControl>
        </Grid>
      </Grid>
    </FormSection>
  )
}

export const EducationSection = styled(EducationSectionInner)``
