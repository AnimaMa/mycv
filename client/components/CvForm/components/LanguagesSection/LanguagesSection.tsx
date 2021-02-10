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

export interface LanguagesSectionProps {
  className?: string
}

const LanguagesSectionInner = (props: LanguagesSectionProps) => {
  const { control } = useFormContext()
  const { fields, append, remove } = useFieldArray({
    control,
    name: "language",
  })
  return (
    <FormSection className={props.className}>
      <FormSectionTitle>Jazykové znalosti</FormSectionTitle>

      {fields.map((language, index) => (
        <Box my={6} key={language.id}>
          <Grid container spacing={2}>
            <Grid item sm={6} xs={8}>
              <FormControl>
                <FormLabel>Cudzí jazyk</FormLabel>
                <FormInput name={`language[${index}].language`} placeholder="Anglický jazyk" defaultValue="" />
              </FormControl>
            </Grid>

            <Grid item sm={4} xs={2}>
              <FormControl>
                <FormLabel>Úroveň</FormLabel>
                <FormInput name={`language[${index}].fluency`} placeholder="B2" defaultValue="" />
              </FormControl>
            </Grid>
            <Grid item xs={2}>
              <TooltipDelete onClick={() => remove(index)} />
            </Grid>
          </Grid>
        </Box>
      ))}

      <Button variant="outlined" color="primary" type="button" onClick={() => append({})}>
        Pridať jazyk
      </Button>
    </FormSection>
  )
}

export const LanguagesSection = LanguagesSectionInner
