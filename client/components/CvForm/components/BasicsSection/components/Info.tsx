import FormControl from "@material-ui/core/FormControl"
import FormLabel from "@material-ui/core/FormLabel"
import Grid from "@material-ui/core/Grid"
import React from "react"
import { FormInput } from "../../../../shared/Form/FormInput/FormInput"

export interface InfoProps {
  className?: string
}

export const Info = (props: InfoProps) => {
  return (
    <>
      <Grid container justify="flex-start" spacing={4}>
        <Grid item sm={2} xs={6} className="my-2">
          <FormControl>
            <FormLabel>Titul</FormLabel>
            <FormInput name="basics.titleBefore" placeholder="Bc" />
          </FormControl>
        </Grid>

        <Grid item sm={3} xs={6}>
          <FormControl>
            <FormLabel>Meno</FormLabel>
            <FormInput
              rules={{
                required: {
                  value: true,
                  message: "Meno je povinné",
                },
              }}
              name="basics.firstName"
              placeholder="Hermiona"
            />
          </FormControl>
          {}
        </Grid>

        <Grid item sm={4} xs={6}>
          <FormControl>
            <FormLabel>Priezvisko</FormLabel>
            <FormInput
              required
              name="basics.lastName"
              defaultValue=""
              placeholder="Granger"
              rules={{
                required: {
                  value: true,
                  message: "Priezvisko je povinné",
                },
              }}
            />
          </FormControl>
        </Grid>

        <Grid item sm={3} xs={6}>
          <FormControl>
            <FormLabel>Titul za menom</FormLabel>
            <FormInput name="basics.titleAfter" defaultValue="" placeholder="Csc" />
          </FormControl>
        </Grid>
        <Grid item sm={6} xs={6}>
          <FormControl>
            <FormLabel>Telefónne číslo</FormLabel>
            <FormInput required name="basics.phone" defaultValue="" placeholder="09000 000 000" />
          </FormControl>
        </Grid>

        <Grid item sm={6} xs={6}>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <FormInput
              required
              name="basics.email"
              defaultValue=""
              placeholder="hermiona@rokfort.com"
              rules={{
                required: {
                  value: true,
                  message: "Email je povinný",
                },
              }}
            />
          </FormControl>
        </Grid>
      </Grid>
    </>
  )
}
