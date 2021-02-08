import Button from "@material-ui/core/Button"
import FormControl from "@material-ui/core/FormControl"
import Grid from "@material-ui/core/Grid"
import React from "react"
import { useFieldArray, useFormContext } from "react-hook-form"
import { FormInput } from "../../../shared/Form/FormInput/FormInput"
import { FormSection } from "../../../shared/Form/FormSection/FormSection"
import { FormSectionTitle } from "../../../shared/Form/FormSectionTitle/FormSectionTitle"
import { TooltipDelete } from "../../../shared/Tooltips/TooltipDelete/TooltipDelete"

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
        <Grid key={course.id} container spacing={2}>
          <Grid item xs={4}>
            <FormControl>
              <FormInput name={`course[${index}].name`} defaultValue="" placeholder="Názov" />
            </FormControl>
          </Grid>

          <Grid item xs={4}>
            <FormControl>
              <FormInput name={`course[${index}].place`} placeholder="Miesto kurzu (ak nebol online)" defaultValue="" />
            </FormControl>
          </Grid>

          <Grid item xs={2}>
            <FormControl>
              <FormInput name={`course[${index}].website`} placeholder="Webový odkaz na kurz / firmu" defaultValue="" />
            </FormControl>
          </Grid>

          <Grid item xs={2}>
            <TooltipDelete onClick={() => remove(index)} />
          </Grid>
        </Grid>
      ))}
      <Button
        variant="outlined"
        color="primary"
        type="button"
        onClick={() => append({ firstName: "appendBill", lastName: "appendLuo" })}
      >
        Pridať kurz
      </Button>
    </FormSection>
  )
}

export const CoursesSection = CoursesSectionInner
