import { Grid } from "@material-ui/core"
import FormControl from "@material-ui/core/FormControl"
import React from "react"
import styled from "styled-components"
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
      <Grid container justify="flex-start" spacing={3}>
        <Grid item xs={2}>
          <FormControl id="name-input">
            <FormInput name="titleBefore" placeholder="Titul pred menom" />
          </FormControl>
        </Grid>

        <Grid item xs={4}>
          <FormControl>
            <FormInput name="firstName" placeholder="Meno" />
          </FormControl>
        </Grid>

        <Grid item xs={4}>
          <FormControl>
            <FormInput name="lastName" placeholder="Priezvisko" />
          </FormControl>
        </Grid>

        <Grid item xs={2}>
          <FormControl>
            <FormInput name="titleAfter" placeholder="Titul za menom" />
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <FormControl>
            <FormInput name="phone" placeholder="Telefónne číslo" />
          </FormControl>
        </Grid>

        <Grid item xs={3}>
          <FormControl>
            <FormInput name="email" placeholder="Email" />
          </FormControl>
        </Grid>

        <Grid item xs={3}>
          <FormControl>
            <FormInput name="location.address" placeholder="Adresa" />
          </FormControl>
        </Grid>

        <Grid item xs={3}>
          <FormControl>
            <FormInput name="location.city" placeholder="Mesto" />
          </FormControl>
        </Grid>

        <Grid item xs={3}>
          <FormControl>
            <FormInput name="location.postalCode" placeholder="PSC" />
          </FormControl>
        </Grid>

        <Grid item xs={3}>
          <FormControl>
            <FormInput name="location.country" placeholder="Krajina" />
          </FormControl>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormSectionSubtitle>Siete</FormSectionSubtitle>
          <span>Pridaj odkazy na tvoje práce a profily.</span>
        </Grid>
        <Grid item xs={3}>
          <FormControl>
            <FormInput name="networks.customWebsite" placeholder="Tvoj web - Ak máš online svoje portfólio" />
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <FormControl>
            <FormInput name="networks.linkedin" placeholder="Linkedin" />
          </FormControl>
        </Grid>

        <Grid item xs={3}>
          <FormControl>
            <FormInput name="networks.github" placeholder="Github" />
          </FormControl>
        </Grid>

        <Grid item xs={3}>
          <FormControl>
            <FormInput name="networks.gitlab" placeholder="Gitlab" />
          </FormControl>
        </Grid>
      </Grid>
    </FormSection>
  )
}

export const BasicsSection = styled(BasicsSectionInner)``
