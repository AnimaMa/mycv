import { Grid, FormControl, FormLabel } from "@material-ui/core"
import React from "react"
import { FormInput } from "../../../../shared/Form/FormInput/FormInput"
import { FormSectionSubtitle } from "../../../../shared/Form/FormSectionSubtitle/FormSectionSubtitle"

export interface NetworksProps {
  className?: string
}

export const Networks = (props: NetworksProps) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <FormSectionSubtitle>Siete</FormSectionSubtitle>
        <span className="text-xs">Môžeš pridať odkazy na tvoje práce a profily.</span>
      </Grid>
      <Grid item sm={3} xs={6}>
        <FormControl>
          <FormLabel>Tvoj web</FormLabel>
          <FormInput
            name="basics.networks.customWebsite"
            placeholder="https://www.tvojeportfolio.com/"
            rules={{
              pattern: {
                value: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&\/\/=]*)/,
                message: "Zadaj validnú url adresu",
              },
            }}
          />
        </FormControl>
      </Grid>
      <Grid item sm={3} xs={6}>
        <FormControl>
          <FormLabel>Linkedin</FormLabel>
          <FormInput
            name="basics.networks.linkedin"
            placeholder="https://www.linkedin.com/"
            rules={{
              pattern: {
                value: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&\/\/=]*)/,
                message: "Zadaj validnú url adresu",
              },
            }}
          />
        </FormControl>
      </Grid>

      <Grid item sm={3} xs={6}>
        <FormControl>
          <FormLabel>Github</FormLabel>
          <FormInput
            name="basics.networks.github"
            placeholder="https://github.com/TvojProfil"
            rules={{
              pattern: {
                value: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&\/\/=]*)/,
                message: "Zadaj validnú url adresu",
              },
            }}
          />
        </FormControl>
      </Grid>

      <Grid item sm={3} xs={6}>
        <FormControl>
          <FormLabel>Gitlab</FormLabel>
          <FormInput
            name="basics.networks.gitlab"
            placeholder="https://gitlab.com/"
            rules={{
              pattern: {
                value: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&\/\/=]*)/,
                message: "Zadaj validnú url adresu",
              },
            }}
          />
        </FormControl>
      </Grid>
    </Grid>
  )
}
