import Divider from "@material-ui/core/Divider"
import Button from "@material-ui/core/Button"
import FormControl from "@material-ui/core/FormControl"
import FormLabel from "@material-ui/core/FormLabel"
import Grid from "@material-ui/core/Grid"
import React from "react"
import { useFieldArray, useFormContext } from "react-hook-form"
import { FormInput } from "../../../shared/Form/FormInput/FormInput"
import { FormSection } from "../../../shared/Form/FormSection/FormSection"
import { FormSectionTitle } from "../../../shared/Form/FormSectionTitle/FormSectionTitle"
import { TooltipDelete } from "../../../shared/Tooltips/TooltipDelete/TooltipDelete"
import { Box } from "@material-ui/core"

export interface CoursesSectionProps {
  className?: string
}

const CoursesSectionInner = (props: CoursesSectionProps) => {
  const { control } = useFormContext()
  const { fields, append, remove } = useFieldArray({ control, name: "courses" })
  return (
    <FormSection className={props.className}>
      <FormSectionTitle>Kurzy</FormSectionTitle>
      {fields.map((course, index) => (
        <Box my={6} key={course.id}>
          <Grid container>
            <Grid container xs={10} spacing={2}>
              <Grid item sm={6} xs={12}>
                <FormControl>
                  <FormLabel>Názov kurzu</FormLabel>
                  <FormInput name={`course[${index}].name`} defaultValue="" placeholder="Metlobal" />
                </FormControl>
              </Grid>

              <Grid item sm={6} xs={12}>
                <FormControl>
                  <FormLabel>
                    Miesto kurzu <span className="text-xs">(ak nebol online)</span>
                  </FormLabel>

                  <FormInput name={`course[${index}].place`} placeholder="Rockford" defaultValue="" />
                </FormControl>
              </Grid>

              <Grid item sm={10} xs={12}>
                <FormControl>
                  <FormLabel>Webový odkaz na kurz / firmu</FormLabel>
                  <FormInput
                    name={`course[${index}].website`}
                    placeholder="http://rockfordschool.com/"
                    defaultValue=""
                  />
                </FormControl>
              </Grid>
            </Grid>

            <Grid container sm={2} xs={2} alignItems="center">
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
      <div>
        <Button
          variant="outlined"
          color="primary"
          type="button"
          onClick={() => append({ firstName: "appendBill", lastName: "appendLuo" })}
        >
          Pridať kurz
        </Button>
      </div>
    </FormSection>
  )
}

export const CoursesSection = CoursesSectionInner
