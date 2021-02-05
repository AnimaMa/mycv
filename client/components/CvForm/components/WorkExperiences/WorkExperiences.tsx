import FormControl from "@material-ui/core/FormControl"
import FormLabel from "@material-ui/core/FormLabel"
import Grid from "@material-ui/core/Grid"
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers"
import React, { useState } from "react"
import styled from "styled-components"
import { FormInput } from "../../../shared/Form/FormInput/FormInput"
import { FormSection } from "../../../shared/Form/FormSection/FormSection"
import { FormSectionTitle } from "../../../shared/Form/FormSectionTitle/FormSectionTitle"
import DateFnsUtils from "@date-io/date-fns"
import { FormSectionSubtitle } from "../../../shared/Form/FormSectionSubtitle/FormSectionSubtitle"
import Switch from "@material-ui/core/Switch"

export interface WorkExperiencesProps {
  className?: string
}

const WorkExperiencesInner = (props: WorkExperiencesProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date())

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date)
  }

  const [state, setState] = useState({
    workExperiencesStillWorks: true,
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked })
  }
  return (
    <FormSection className={props.className}>
      <FormSectionTitle>Pracovné skúsenosti </FormSectionTitle>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <FormControl>
            <FormInput name="workExperiences.company" placeholder="Spoločnosť" />
          </FormControl>
        </Grid>

        <Grid item xs={4}>
          <FormControl>
            <FormInput name="workExperiences.position" placeholder="Pozícia" />
          </FormControl>
        </Grid>

        <Grid item xs={4}>
          <FormControl>
            <FormInput name="workExperiences.usedTechnologies" placeholder="Technológie s ktorými si pracoval" />
          </FormControl>
        </Grid>

        <Grid item xs={4}>
          <FormControl>
            <FormInput name="workExperiences.website" placeholder="Odkaz na ich webstránku" />
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormSectionSubtitle>Trvanie</FormSectionSubtitle>
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
            <FormLabel>Stále tu pracujem.</FormLabel>
            <Switch
              checked={state.workExperiencesStillWorks}
              onChange={handleChange}
              color="primary"
              name="workExperiences.stillWorks"
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
              name="workExperiences.summary"
              placeholder="Môžeš napísať krátky sumár o tom, čo si robil v tejto spoločnosti."
              multiline
              rows={6}
            />
          </FormControl>
        </Grid>
      </Grid>
    </FormSection>
  )
}

export const WorkExperiences = styled(WorkExperiencesInner)``
