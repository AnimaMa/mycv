import Button from "@material-ui/core/Button"
import FormControl from "@material-ui/core/FormControl"
import FormLabel from "@material-ui/core/FormLabel"
import Grid from "@material-ui/core/Grid"
import React, { useEffect } from "react"
import { useFieldArray, useFormContext } from "react-hook-form"
import { FormInput } from "../../../shared/Form/FormInput/FormInput"
import { FormKeyboardDatePicker } from "../../../shared/Form/FormKeyboardDatePicker/FormKeyboardDatePicker"
import { FormSection } from "../../../shared/Form/FormSection/FormSection"
import { FormSectionSubtitle } from "../../../shared/Form/FormSectionSubtitle/FormSectionSubtitle"
import { FormSectionTitle } from "../../../shared/Form/FormSectionTitle/FormSectionTitle"
import { FormSwitch } from "../../../shared/Form/FormSwitch/FormSwitch"
import { TooltipDelete } from "../../../shared/Tooltips/TooltipDelete/TooltipDelete"

export interface EducationSectionProps {
  className?: string
}

const EducationSectionInner = (props: EducationSectionProps) => {
  const { control } = useFormContext()
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
    control,
    name: "education",
  })
  useEffect(() => {
    append({})
  }, [])

  return (
    <FormSection className={props.className}>
      <FormSectionTitle>Vzdelanie </FormSectionTitle>

      {fields.map((education, index) => (
        <Grid container spacing={2} key={education.id}>
          <Grid item xs={4}>
            <FormControl>
              <FormInput name={`education[${index}].institution`} placeholder="Škola" defaultValue="" />
            </FormControl>
          </Grid>

          <Grid item xs={4}>
            <FormControl>
              <FormInput name={`education[${index}].area`} placeholder="Štúdijný odbor" defaultValue="" />
            </FormControl>
          </Grid>

          <Grid item xs={2}>
            <FormControl>
              <FormInput name={`education[${index}].degree`} placeholder="Degree" defaultValue="" />
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormSectionSubtitle>Dĺžka štúdia</FormSectionSubtitle>
          </Grid>

          <Grid item xs={4}>
            <FormKeyboardDatePicker label="Začiatok štúdia" name={`education[${index}].startDate`} defaultValue="" />
          </Grid>

          <Grid item xs={4}>
            <FormKeyboardDatePicker label="Koniec štúdia" name={`education[${index}].endDate`} defaultValue="" />
          </Grid>

          <Grid item xs={2}>
            <FormControl>
              <FormLabel>Stále tu študujem.</FormLabel>
              <FormSwitch name={`education[${index}].stillStudy`} defaultValue={false} />
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormSectionSubtitle>Krátky sumár</FormSectionSubtitle>
          </Grid>

          <Grid item xs={10}>
            <FormControl>
              <FormInput
                name={`education[${index}].activitiesAndSocietiess`}
                placeholder="Aktivity, ktoré si robil počas štúdia."
                multiline
                rows={6}
                defaultValue=""
              />
            </FormControl>
          </Grid>

          <Grid item xs={2}>
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

export const EducationSection = EducationSectionInner
