import Button from "@material-ui/core/Button"
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
      <FormSectionTitle>Skills</FormSectionTitle>
      {fields.map((field, index) => (
        <Grid key={field.id} container spacing={2}>
          <Grid item xs={4}>
            <FormControl>
              <FormInput name={`skill[${index}].name`} placeholder="Názov" defaultValue="" rules={{}} />
            </FormControl>
          </Grid>

          <Grid item xs={2}>
            <FormControl>
              <FormInput name={`skill[${index}].level`} placeholder="Stupeň" defaultValue="" rules={{}} />
            </FormControl>
          </Grid>

          <Grid item xs={4}>
            <FormControl>
              <FormInput
                name={`skill[${index}].technologies`}
                placeholder="Skill (napr. Communication, Teamwork, React, Design)"
                defaultValue=""
                rules={{}}
              />
            </FormControl>
          </Grid>

          <Grid item xs={2}>
            <TooltipDelete onClick={() => remove(index)} />
          </Grid>
        </Grid>
      ))}
      <Button variant="outlined" color="primary" type="button" onClick={() => append({})}>
        Pridať skill
      </Button>
    </FormSection>
  )
}

export const SkillsSection = SkillsSectionInner
