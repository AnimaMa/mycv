import { Box } from "@material-ui/core"
import Button from "@material-ui/core/Button"
import Divider from "@material-ui/core/Divider"
import FormControl from "@material-ui/core/FormControl"
import FormLabel from "@material-ui/core/FormLabel"
import Grid from "@material-ui/core/Grid"
import React from "react"
import { useFieldArray, useFormContext } from "react-hook-form"
import { FormInput } from "../../../shared/Form/FormInput/FormInput"
import { FormKeyboardDatePicker } from "../../../shared/Form/FormKeyboardDatePicker/FormKeyboardDatePicker"
import { FormSection } from "../../../shared/Form/FormSection/FormSection"
import { FormSectionSubtitle } from "../../../shared/Form/FormSectionSubtitle/FormSectionSubtitle"
import { FormSectionTitle } from "../../../shared/Form/FormSectionTitle/FormSectionTitle"
import { FormSwitch } from "../../../shared/Form/FormSwitch/FormSwitch"
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
        <Box my={6} key={field.id}>
          <Grid container>
            <Grid container spacing={2} xs={10}>
              <Grid item sm={6} xs={12}>
                <FormControl>
                  <FormLabel>Názov spoločnosti</FormLabel>

                  <FormInput name={`workExperience[${index}].company`} placeholder="Rockford company" defaultValue="" />
                </FormControl>
              </Grid>

              <Grid item sm={6} xs={12}>
                <FormControl>
                  <FormLabel>Tvoja pozícia</FormLabel>
                  <FormInput
                    name={`workExperience[${index}].position`}
                    placeholder="Učiteľka metlobalu"
                    defaultValue=""
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl>
                  <FormLabel>Technológie s ktorými si pracoval</FormLabel>
                  <FormInput
                    name={`workExperience[${index}].usedTechnologies`}
                    placeholder="React, Laravel, Node, ..."
                    defaultValue=""
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl>
                  <FormLabel>
                    Webstránka spoločnosti <span className="text-xs">ak to uznáš za potrebné</span>
                  </FormLabel>
                  <FormInput
                    name={`workExperience[${index}].website`}
                    placeholder="http://google.com/"
                    defaultValue=""
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormSectionSubtitle>Trvanie</FormSectionSubtitle>
              </Grid>

              <Grid item sm={4} xs={12}>
                <FormLabel>Od</FormLabel>
                <FormKeyboardDatePicker label="Začiatok" name={`workExperience[${index}].startDate`} />
              </Grid>

              <Grid item sm={4} xs={12}>
                <FormLabel>Do</FormLabel>
                <FormKeyboardDatePicker label="Koniec" name={`workExperience[${index}].endDate`} />
              </Grid>

              <Grid item sm={4} xs={12}>
                <FormControl>
                  <FormLabel>Stále tu pracujem.</FormLabel>
                  <FormSwitch name={`workExperience[${index}].stillWorks`} />
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormSectionSubtitle>Krátky sumár</FormSectionSubtitle>
              </Grid>

              <Grid item xs={12}>
                <FormControl>
                  <FormLabel>Napíš všetko čo uznáš za vhodné</FormLabel>
                  <FormInput
                    name={`workExperience[${index}].summary`}
                    placeholder="Môžeš napísať krátky sumár o tom, čo si robil v tejto spoločnosti."
                    multiline
                    rows={6}
                    defaultValue=""
                  />
                </FormControl>
              </Grid>
            </Grid>

            <Grid container item xs={2} justify="flex-end" alignItems="center">
              <TooltipDelete onClick={() => remove(index)} />
            </Grid>
          </Grid>

          <Box marginTop={3}>
            <Divider light />
          </Box>
        </Box>
      ))}

      <Button variant="outlined" color="primary" type="button" onClick={() => append({})}>
        Pridať pracovné skúsenosti
      </Button>
    </FormSection>
  )
}

export const WorkExperiences = WorkExperiencesInner
