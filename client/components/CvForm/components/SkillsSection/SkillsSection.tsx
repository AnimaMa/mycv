import FormControl from "@material-ui/core/FormControl"
import Grid from "@material-ui/core/Grid"
import React, { useState } from "react"
import styled from "styled-components"
import { FormInput } from "../../../shared/Form/FormInput/FormInput"
import { FormSection } from "../../../shared/Form/FormSection/FormSection"
import { FormSectionTitle } from "../../../shared/Form/FormSectionTitle/FormSectionTitle"

export interface SkillsSectionProps {
  className?: string
}

const SkillsSectionInner = (props: SkillsSectionProps) => {
  return (
    <FormSection className={props.className}>
      <FormSectionTitle>Skills</FormSectionTitle>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <FormControl>
            <FormInput name="skills.name" placeholder="Názov" />
          </FormControl>
        </Grid>

        <Grid item xs={4}>
          <FormControl>
            <FormInput name="skills.level" placeholder="Stupeň" />
          </FormControl>
        </Grid>

        <Grid item xs={4}>
          <FormControl>
            <FormInput name="skills.technologies" placeholder="Skill (napr. Communication, Teamwork, React, Design)" />
          </FormControl>
        </Grid>
      </Grid>
    </FormSection>
  )
}

export const SkillsSection = styled(SkillsSectionInner)``
