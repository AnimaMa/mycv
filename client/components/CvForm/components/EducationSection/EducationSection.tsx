import DateFnsUtils from "@date-io/date-fns"
import FormControl from "@material-ui/core/FormControl"
import FormLabel from "@material-ui/core/FormLabel"
import Grid from "@material-ui/core/Grid"
import Switch from "@material-ui/core/Switch"
import { KeyboardDatePicker } from "@material-ui/pickers/DatePicker"
import MuiPickersUtilsProvider from "@material-ui/pickers/MuiPickersUtilsProvider"
import React, { useState } from "react"
import styled from "styled-components"
import { FormInput } from "../../../shared/Form/FormInput/FormInput"
import { FormSection } from "../../../shared/Form/FormSection/FormSection"
import { FormSectionSubtitle } from "../../../shared/Form/FormSectionSubtitle/FormSectionSubtitle"
import { FormSectionTitle } from "../../../shared/Form/FormSectionTitle/FormSectionTitle"

export interface EducationSectionProps {
  className?: string
}

const EducationSectionInner = (props: EducationSectionProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date())

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date)
  }

  const [state, setState] = useState({
    educationsStillStudy: true,
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked })
  }
  return (
    <FormSection className={props.className}>
      <FormSectionTitle>Vzdelanie </FormSectionTitle>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <FormControl>
            <FormInput name="educations.institution" placeholder="Škola" />
          </FormControl>
        </Grid>

        <Grid item xs={4}>
          <FormControl>
            <FormInput name="educations.area" placeholder="Štúdijný odbor" />
          </FormControl>
        </Grid>

        <Grid item xs={2}>
          <FormControl>
            <FormInput name="educations.degree" placeholder="Degree" />
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormSectionSubtitle>Dĺžka štúdia</FormSectionSubtitle>
        </Grid>
        <Grid item xs={4}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <FormControl>
              <KeyboardDatePicker
                name="workExperiences.startDate"
                format="dd.MM.yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Start date"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
                cancelLabel="Zavrieť"
                okLabel="Pridať"
              />
            </FormControl>
          </MuiPickersUtilsProvider>
        </Grid>

        <Grid item xs={4}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <FormControl>
              <KeyboardDatePicker
                name="workExperiences.endDate"
                format="dd.MM.yyyy"
                margin="normal"
                id="date-picker-inline"
                label="End date"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
                cancelLabel="Zavrieť"
                okLabel="Pridať"
              />
            </FormControl>
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={2}>
          <FormControl>
            <FormLabel>Stále tu študujem.</FormLabel>
            <Switch
              checked={state.educationsStillStudy}
              onChange={handleChange}
              color="primary"
              name="educations.stillStudy"
              inputProps={{ "aria-label": "primary checkbox" }}
            />
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormSectionSubtitle>Krátky sumár</FormSectionSubtitle>
        </Grid>

        <Grid item xs={12}>
          <FormControl>
            <FormInput
              name="educations.activitiesAndSocietiess"
              placeholder="Aktivity, ktoré si robil"
              multiline
              rows={6}
            />
          </FormControl>
        </Grid>
      </Grid>
    </FormSection>
  )
}

export const EducationSection = styled(EducationSectionInner)``
