import DateFnsUtils from "@date-io/date-fns"
import FormControl from "@material-ui/core/FormControl"
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers"
import React from "react"
import { Controller, useFormContext } from "react-hook-form"

export interface FormKeyboardDatePickerProps {
  className?: string
  label: string
  name: string
  required?: boolean
}

const FormKeyboardDatePickerInner = (props: FormKeyboardDatePickerProps) => {
  const { control } = useFormContext()
  const { name, label, required } = props

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
              required={required}
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

export const FormKeyboardDatePicker = FormKeyboardDatePickerInner
