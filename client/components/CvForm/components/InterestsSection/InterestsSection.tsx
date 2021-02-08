import Button from "@material-ui/core/Button"
import FormControl from "@material-ui/core/FormControl"
import Grid from "@material-ui/core/Grid"
import React from "react"
import { useFieldArray, useFormContext } from "react-hook-form"
import { FormInput } from "../../../shared/Form/FormInput/FormInput"
import { FormSection } from "../../../shared/Form/FormSection/FormSection"
import { FormSectionTitle } from "../../../shared/Form/FormSectionTitle/FormSectionTitle"
import { TooltipDelete } from "../../../shared/Tooltips/TooltipDelete/TooltipDelete"

export interface InterestsSectionProps {
  className?: string
}

const InterestsSectionInner = (props: InterestsSectionProps) => {
  const { control } = useFormContext()
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
    control,
    name: "interests",
  })
  return (
    <FormSection className={props.className}>
      <FormSectionTitle>Záujmy</FormSectionTitle>
      <Grid container spacing={2}>
        {fields.map((interest, index) => (
          <Grid item xs={6} key={interest.id}>
            <Grid container>
              <Grid item xs={9}>
                <FormControl>
                  <FormInput name={`interest[${index}].name`} placeholder="Názov" defaultValue="" />
                </FormControl>
              </Grid>

              <Grid item xs={3}>
                <TooltipDelete onClick={() => remove(index)} />
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
      <Button
        variant="outlined"
        color="primary"
        type="button"
        onClick={() => append({ firstName: "appendBill", lastName: "appendLuo" })}
      >
        Pridať záujem
      </Button>
    </FormSection>
  )
}

export const InterestsSection = InterestsSectionInner
