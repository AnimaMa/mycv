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
import { useFieldArray, useFormContext } from "react-hook-form"
import Button from "@material-ui/core/Button"
import { TooltipDelete } from "../../../shared/Tooltips/TooltipDelete/TooltipDelete"

export interface WorkExperiencesProps {
  className?: string
}

const WorkExperiencesInner = (props: WorkExperiencesProps) => {
  const { control } = useFormContext()
  const { fields, append, remove } = useFieldArray({
    control,
    name: "workExperiences",
  })
  return (
    <FormSection className={props.className}>
      <FormSectionTitle>Pracovné skúsenosti </FormSectionTitle>

      {fields.map((field, index) => (
        <Grid container spacing={2} key={field.id}>
          <Grid item xs={4}>
            <FormControl>
              <FormInput name={`workExperience[${index}].company`} placeholder="Spoločnosť" defaultValue="" />
            </FormControl>
          </Grid>

          <Grid item xs={4}>
            <FormControl>
              <FormInput name={`workExperience[${index}].position`} placeholder="Pozícia" defaultValue="" />
            </FormControl>
          </Grid>

          <Grid item xs={4}>
            <FormControl>
              <FormInput
                name={`workExperience[${index}].usedTechnologies`}
                placeholder="Technológie s ktorými si pracoval"
                defaultValue=""
              />
            </FormControl>
          </Grid>

          <Grid item xs={4}>
            <FormControl>
              <FormInput
                name={`workExperience[${index}].website`}
                placeholder="Odkaz na ich webstránku"
                defaultValue=""
              />
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormSectionSubtitle>Trvanie</FormSectionSubtitle>
          </Grid>

          <Grid item xs={4}>
            <FormKeyboardDatePicker label="Začiatok" name={`workExperience[${index}].startDate`} defaultValue="" />
          </Grid>

          <Grid item xs={4}>
            <FormKeyboardDatePicker label="Koniec" name={`workExperience[${index}].endDate`} defaultValue="" />
          </Grid>

          <Grid item xs={2}>
            <FormControl>
              <FormLabel>Stále tu pracujem.</FormLabel>
              <FormSwitch name={`workExperience[${index}].stillWorks`} defaultValue={false} />
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormSectionSubtitle>Krátky sumár</FormSectionSubtitle>
          </Grid>

          <Grid item xs={12}>
            <FormControl>
              <FormInput
                name={`workExperience[${index}].summary`}
                placeholder="Môžeš napísať krátky sumár o tom, čo si robil v tejto spoločnosti."
                multiline
                rows={6}
                defaultValue=""
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TooltipDelete onClick={() => remove(index)} />
          </Grid>
        </Grid>
      ))}

      <Button variant="outlined" color="primary" type="button" onClick={() => append({})}>
        Pridať vzdelanie
      </Button>
    </FormSection>
  )
}

export const WorkExperiences = styled(WorkExperiencesInner)``
