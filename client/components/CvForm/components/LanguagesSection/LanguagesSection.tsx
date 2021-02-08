import Button from "@material-ui/core/Button"
import FormControl from "@material-ui/core/FormControl"
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
      <FormSectionTitle>Jazyky</FormSectionTitle>

      {fields.map((language, index) => (
        <Grid container spacing={2} key={language.id}>
          <Grid item xs={2}>
            <FormControl>
              <FormInput name={`language[${index}].name`} placeholder="Jazyk" defaultValue="" />
            </FormControl>
          </Grid>

          <Grid item xs={2}>
            <FormControl>
              <FormInput name={`language[${index}].fluency`} placeholder="Stupeň" defaultValue="" />
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <TooltipDelete onClick={() => remove(index)} />
          </Grid>
        </Grid>
      ))}

      <Button variant="outlined" color="primary" type="button" onClick={() => append({})}>
        Pridať jazyk
      </Button>
    </FormSection>
  )
}

export const LanguagesSection = LanguagesSectionInner
