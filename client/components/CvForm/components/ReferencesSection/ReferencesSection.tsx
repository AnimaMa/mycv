import { Box, Divider, FormLabel } from "@material-ui/core"
import Button from "@material-ui/core/Button"
import FormControl from "@material-ui/core/FormControl"
import Grid from "@material-ui/core/Grid"
import React from "react"
import { useFieldArray, useFormContext } from "react-hook-form"
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
        <Box my={6} key={reference.id}>
          <Grid container>
            <Grid container xs={10} spacing={2}>
              <Grid item sm={6} xs={12}>
                <FormControl>
                  <FormLabel>Meno referenta</FormLabel>
                  <FormInput name={`reference[${index}].name`} placeholder="Albus Dumbledore" defaultValue="" />
                </FormControl>
              </Grid>

              <Grid item sm={6} xs={12}>
                <FormControl>
                  <FormLabel>Pozícia referenta</FormLabel>
                  <FormInput name={`reference[${index}].position`} placeholder="CEO" defaultValue="" />
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl>
                  <FormLabel>Názov firmy / spoločnosti</FormLabel>
                  <FormInput name={`reference[${index}].company`} placeholder="Rockford s.r.o " defaultValue="" />
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl>
                  <FormLabel>Referencia</FormLabel>
                  <FormInput
                    name={`reference[${index}].reference`}
                    placeholder="Hermiona Grangere je veľmi úspešná v študovaní...."
                    multiline
                    rows={4}
                    defaultValue=""
                  />
                </FormControl>
              </Grid>
            </Grid>

            <Grid container item xs={2} justify="flex-end">
              <TooltipDelete onClick={() => remove(index)} />
            </Grid>
          </Grid>
          <Box marginTop={3}>
            <Divider light />
          </Box>
        </Box>
      ))}
      <Button variant="outlined" color="primary" type="button" onClick={() => append({})}>
        Pridať referenciu
      </Button>
    </FormSection>
  )
}

export const ReferencesSection = ReferencesSectionInner
