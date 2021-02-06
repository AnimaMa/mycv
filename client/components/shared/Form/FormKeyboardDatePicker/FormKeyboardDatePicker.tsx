import DateFnsUtils from "@date-io/date-fns"
import FormControl from "@material-ui/core/FormControl"
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers"
import React from "react"
import { Controller, useFormContext } from "react-hook-form"
import styled from "styled-components"

export interface FormKeyboardDatePickerProps {
  className?: string
  label: string
  name: string
}

const FormKeyboardDatePickerInner = (props: FormKeyboardDatePickerProps) => {
  const { control, errors } = useFormContext()
  const { name, label } = props

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <FormControl>
        <Controller
          control={control}
          label={label}
          name={name}
          render={(props) => (
            <KeyboardDatePicker
              onChange={props.onChange}
              value={props.value}
              defaultValue={props.value}
              format="dd.MM.yyyy"
              cancelLabel="Zavrieť"
              okLabel="Pridať"
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          )}
        />
      </FormControl>
    </MuiPickersUtilsProvider>
  )
}

export const FormKeyboardDatePicker = styled(FormKeyboardDatePickerInner)``