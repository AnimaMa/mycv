import { Box } from "@material-ui/core"
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

export interface InterestsSectionProps {
  className?: string
}

const InterestsSectionInner = (props: InterestsSectionProps) => {
  const { control } = useFormContext()
  const { fields, append, remove } = useFieldArray({
    control,
    name: "interests",
  })
  return (
    <FormSection className={props.className}>
      <FormSectionTitle>Záujmy</FormSectionTitle>
      {fields.map((interest, index) => (
        <Box my={6} key={interest.id}>
          <Grid container xs={12} spacing={2}>
            <Grid item xs={10}>
              <FormControl>
                <FormLabel>Záujem / Hobby</FormLabel>
                <FormInput name={`interest[${index}].name`} placeholder="Čítanie kníh" defaultValue="" />
              </FormControl>
            </Grid>

            <Grid container item xs={2} justify="flex-end">
              <TooltipDelete onClick={() => remove(index)} />
            </Grid>
          </Grid>
        </Box>
      ))}
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
