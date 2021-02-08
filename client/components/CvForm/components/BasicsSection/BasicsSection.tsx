import { FormLabel, Grid } from "@material-ui/core"
import FormControl from "@material-ui/core/FormControl"
import React from "react"
import { FormInput } from "../../../shared/Form/FormInput/FormInput"
import { FormSection } from "../../../shared/Form/FormSection/FormSection"
import { FormSectionSubtitle } from "../../../shared/Form/FormSectionSubtitle/FormSectionSubtitle"
import { FormSectionTitle } from "../../../shared/Form/FormSectionTitle/FormSectionTitle"

export interface BasicsSectionProps {
  className?: string
}

const BasicsSectionInner = (props: BasicsSectionProps) => {
  return (
    <FormSection className={props.className}>
      <FormSectionTitle>Základné informácie </FormSectionTitle>
      <Grid container justify="flex-start" spacing={4}>
        <Grid item sm={2} xs={6} className="my-2">
          <FormControl>
            <FormLabel>Titul</FormLabel>
            <FormInput name="basics.titleBefore" placeholder="Bc" defaultValue="" />
          </FormControl>
        </Grid>

        <Grid item sm={3} xs={6}>
          <FormControl>
            <FormLabel>Meno</FormLabel>
            <FormInput name="basics.firstName" defaultValue="" placeholder="Hermiona" />
          </FormControl>
        </Grid>

        <Grid item sm={4} xs={6}>
          <FormControl>
            <FormLabel>Priezvisko</FormLabel>
            <FormInput name="basics.lastName" defaultValue="" placeholder="Granger" />
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
            <FormInput name="basics.phone" defaultValue="" placeholder="09000 000 000" />
          </FormControl>
        </Grid>

        <Grid item sm={6} xs={6}>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <FormInput name="basics.email" defaultValue="" placeholder="hermiona@rokfort.com" />
          </FormControl>
        </Grid>
      </Grid>

      <Grid container justify="flex-start" spacing={3}>
        <Grid item sm={12} xs={12}>
          <FormSectionSubtitle>Adresa</FormSectionSubtitle>
          <span className="text-xs">Ak je potrebná adresa, pridaj si ju :) </span>
        </Grid>

        <Grid item sm={6} xs={6}>
          <FormControl>
            <FormLabel>Ulica, č. domu</FormLabel>
            <FormInput name="basics.location.address" defaultValue="" placeholder="Chrabromilova 7" />
          </FormControl>
        </Grid>

        <Grid item sm={6} xs={6}>
          <FormControl>
            <FormLabel>Mesto</FormLabel>
            <FormInput name="basics.location.city" defaultValue="" placeholder="London" />
          </FormControl>
        </Grid>

        <Grid item sm={3} xs={6}>
          <FormControl>
            <FormLabel>PSČ</FormLabel>
            <FormInput name="basics.location.postalCode" defaultValue="" placeholder="912 34" />
          </FormControl>
        </Grid>

        <Grid item sm={3} xs={6}>
          <FormControl>
            <FormLabel>Krajina</FormLabel>
            <FormInput name="basics.location.country" defaultValue="" placeholder="Slovensko" />
          </FormControl>
        </Grid>
      </Grid>

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
              defaultValue=""
              placeholder="https://www.tvojeportfolio.com/"
            />
          </FormControl>
        </Grid>
        <Grid item sm={3} xs={6}>
          <FormControl>
            <FormLabel>Linkedin</FormLabel>
            <FormInput name="basics.networks.linkedin" placeholder="https://www.linkedin.com/" defaultValue="" />
          </FormControl>
        </Grid>

        <Grid item sm={3} xs={6}>
          <FormControl>
            <FormLabel>Github</FormLabel>
            <FormInput name="basics.networks.github" placeholder="https://github.com/TvojProfil" defaultValue="" />
          </FormControl>
        </Grid>

        <Grid item sm={3} xs={6}>
          <FormControl>
            <FormLabel>Gitlab</FormLabel>
            <FormInput name="basics.networks.gitlab" placeholder="https://gitlab.com/" defaultValue="" />
          </FormControl>
        </Grid>
      </Grid>
    </FormSection>
  )
}

export const BasicsSection = BasicsSectionInner
