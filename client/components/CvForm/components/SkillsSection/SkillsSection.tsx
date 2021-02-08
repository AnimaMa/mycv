import { Box, FormLabel } from "@material-ui/core"
import Button from "@material-ui/core/Button"
import Divider from "@material-ui/core/Divider"
import FormControl from "@material-ui/core/FormControl"
import Grid from "@material-ui/core/Grid"
import React, { useEffect } from "react"
import { useFieldArray, useFormContext } from "react-hook-form"
import { FormInput } from "../../../shared/Form/FormInput/FormInput"
import { FormSection } from "../../../shared/Form/FormSection/FormSection"
import { FormSectionTitle } from "../../../shared/Form/FormSectionTitle/FormSectionTitle"
import { TooltipDelete } from "../../../shared/Tooltips/TooltipDelete/TooltipDelete"

export interface SkillsSectionProps {
  className?: string
}

const SkillsSectionInner = (props: SkillsSectionProps) => {
  const { control } = useFormContext()
  const { fields, append, remove } = useFieldArray({
    control,
    name: "skills",
  })

  useEffect(() => {
    append({})
  }, [])

  return (
    <FormSection className={props.className}>
      <FormSectionTitle>Zručnosti / Silné stránky</FormSectionTitle>
      {fields.map((field, index) => (
        <Box my={6} key={field.id}>
          <Grid  container>
            <Grid container spacing={2} xs={10}>
              <Grid item sm={6} xs={12}>
                <FormControl>
                  <FormLabel>Názov</FormLabel>
                  <FormInput
                    name={`skill[${index}].name`}
                    placeholder="Kreativita,  Zodpovednosť, Organizačné schopnosti..."
                    defaultValue=""
                    rules={{}}
                  />
                </FormControl>
              </Grid>

              <Grid item sm={6} xs={12}>
                <FormControl>
                  <FormLabel>Úroveň</FormLabel>
                  <FormInput name={`skill[${index}].level`} placeholder="Pokročilá" defaultValue="" rules={{}} />
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl>
                  <FormLabel>Názov technológie </FormLabel>
                  <FormInput
                    name={`skill[${index}].technologies`}
                    placeholder="Skill (napr. Communication, Teamwork, React, Design)"
                    defaultValue=""
                    rules={{}}
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
        Pridať skill
      </Button>
    </FormSection>
  )
}

export const SkillsSection = SkillsSectionInner
