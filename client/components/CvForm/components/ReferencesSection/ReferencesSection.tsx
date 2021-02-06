import Button from "@material-ui/core/Button"
import FormControl from "@material-ui/core/FormControl"
import Grid from "@material-ui/core/Grid"
import React from "react"
import { useFieldArray, useFormContext } from "react-hook-form"
import styled from "styled-components"
import { FormInput } from "../../../shared/Form/FormInput/FormInput"
import { FormSection } from "../../../shared/Form/FormSection/FormSection"
import { FormSectionTitle } from "../../../shared/Form/FormSectionTitle/FormSectionTitle"
import { TooltipDelete } from "../../../shared/Tooltips/TooltipDelete/TooltipDelete"

export interface ReferencesSectionProps {
  className?: string
}

const ReferencesSectionInner = (props: ReferencesSectionProps) => {
  const { control } = useFormContext()

  const { fields, append, remove } = useFieldArray({
    control,
    name: "references",
  })
  return (
    <FormSection className={props.className}>
      <FormSectionTitle>Referencie</FormSectionTitle>
      {fields.map((reference, index) => (
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <FormControl>
              <FormInput name={`reference[${index}].name`} placeholder="Meno" defaultValue="" />
            </FormControl>
          </Grid>

          <Grid item xs={4}>
            <FormControl>
              <FormInput name={`reference[${index}].position`} placeholder="Pozícia" defaultValue="" />
            </FormControl>
          </Grid>

          <Grid item xs={4}>
            <FormControl>
              <FormInput name={`reference[${index}].company`} placeholder="Spoločnosť" defaultValue="" />
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl>
              <FormInput
                name={`reference[${index}].reference`}
                placeholder="Referencia"
                multiline
                rows={4}
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
        Pridať referenciu
      </Button>
    </FormSection>
  )
}

export const ReferencesSection = styled(ReferencesSectionInner)``
