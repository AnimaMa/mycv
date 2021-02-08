import { Divider } from "@material-ui/core"
import Box from "@material-ui/core/Box"
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
  const { fields, append, remove } = useFieldArray({
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
        <Box my={6} key={education.id}>
          <Grid container >
            <Grid container xs={10} spacing={2}>
              <Grid item xs={12}>
                <FormControl>
                  <FormLabel>Názov školy</FormLabel>
                  <FormInput
                    name={`education[${index}].institution`}
                    placeholder="Rokfortská stredná škola čarodejnícka"
                    defaultValue=""
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl>
                  <FormLabel>Štúdijný odbor / špecializácia</FormLabel>
                  <FormInput name={`education[${index}].area`} placeholder="Čarovanie" defaultValue="" />
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl>
                  <FormLabel>Degree</FormLabel>
                  <FormInput name={`education[${index}].degree`} placeholder="Maturita :D " defaultValue="" />
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormSectionSubtitle>Dĺžka štúdia</FormSectionSubtitle>
              </Grid>

              <Grid item xs={12}>
                <FormLabel>Začiatok štúdia</FormLabel>
                <FormKeyboardDatePicker label="Začiatok štúdia" name={`education[${index}].startDate`} />
              </Grid>

              <Grid item xs={12}>
                <FormLabel>Koniec štúdia</FormLabel>

                <FormKeyboardDatePicker label="Koniec štúdia" name={`education[${index}].endDate`} />
              </Grid>

              <Grid item xs={12}>
                <FormControl>
                  <FormLabel>Stále tu študujem.</FormLabel>
                  <FormSwitch name={`education[${index}].stillStudy`} />
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormSectionSubtitle>Krátky sumár</FormSectionSubtitle>
              </Grid>

              <Grid item xs={12}>
                <FormControl>
                  <FormLabel>Aktivity</FormLabel>
                  <FormInput
                    name={`education[${index}].activitiesAndSocietiess`}
                    placeholder="Aktivity, ktoré si robil počas štúdia. Napíš všetko čo pokladáš za dôležité."
                    multiline
                    rows={6}
                    defaultValue=""
                  />
                </FormControl>
              </Grid>
            </Grid>

            <Grid container item sm={2} xs={2} alignItems="center">
              <Grid item sm={12} xs={12} container justify="flex-end">
                <TooltipDelete onClick={() => remove(index)} />
              </Grid>
            </Grid>
          </Grid>

          <Box marginTop={3}>
            <Divider light />
          </Box>
        </Box>
      ))}
      <Button variant="outlined" color="primary" type="button" onClick={() => append({})}>
        Pridať vzdelanie
      </Button>
    </FormSection>
  )
}

export const EducationSection = EducationSectionInner
