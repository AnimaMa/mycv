import Box from "@material-ui/core/Box"
import FormControl from "@material-ui/core/FormControl"
import FormLabel from "@material-ui/core/FormLabel"
import Grid from "@material-ui/core/Grid"
import React from "react"
import { FormInput } from "../../../../shared/Form/FormInput/FormInput"
import { FormSectionSubtitle } from "../../../../shared/Form/FormSectionSubtitle/FormSectionSubtitle"
import { FormSectionTitle } from "../../../../shared/Form/FormSectionTitle/FormSectionTitle"

export interface SummaryProps {
  className?: string
}

export const Summary = (props: SummaryProps) => {
  return (
    <Box m="4">
      <Grid item sm={12}>
        <FormControl>
          <FormSectionSubtitle>Niečo o tebe</FormSectionSubtitle>
          <FormLabel></FormLabel>
          <FormInput name="basics.summary" placeholder="Napíš niečo o sebe :)" multiline rows={4} />
        </FormControl>
      </Grid>
    </Box>
  )
}
