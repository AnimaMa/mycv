import FormControl from "@material-ui/core/FormControl"
import FormLabel from "@material-ui/core/FormLabel"
import Grid from "@material-ui/core/Grid"
import React from "react"
import { FormInput } from "../../../../shared/Form/FormInput/FormInput"
import { FormSectionSubtitle } from "../../../../shared/Form/FormSectionSubtitle/FormSectionSubtitle"

export interface AddressProps {
  className?: string
}

export const Address = (props: AddressProps) => {
  return (
    <Grid container justify="flex-start" spacing={3}>
      <Grid item sm={12} xs={12}>
        <FormSectionSubtitle>Adresa</FormSectionSubtitle>
        <span className="text-xs">Ak je potrebná adresa, pridaj si ju :) </span>
      </Grid>

      <Grid item sm={6} xs={6}>
        <FormControl>
          <FormLabel>Ulica, č. domu</FormLabel>
          <FormInput name="basics.location.address" placeholder="Chrabromilova 7" />
        </FormControl>
      </Grid>

      <Grid item sm={6} xs={6}>
        <FormControl>
          <FormLabel>Mesto</FormLabel>
          <FormInput name="basics.location.city" placeholder="London" />
        </FormControl>
      </Grid>

      <Grid item sm={3} xs={6}>
        <FormControl>
          <FormLabel>PSČ</FormLabel>
          <FormInput name="basics.location.postalCode" placeholder="912 34" />
        </FormControl>
      </Grid>

      <Grid item sm={3} xs={6}>
        <FormControl>
          <FormLabel>Krajina</FormLabel>
          <FormInput name="basics.location.country" placeholder="Slovensko" />
        </FormControl>
      </Grid>
    </Grid>
  )
}
