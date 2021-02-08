import TextField from "@material-ui/core/TextField"
import React from "react"
import { Controller, useFormContext } from "react-hook-form"

export interface FormInputProps {
  className?: string
  defaultValue?: string
}

const FormInputInner = (props) => {
  const { control, errors } = useFormContext()
  const { name, label, defaultValue } = props

  return (
    <Controller
      as={TextField}
      name={name}
      control={control}
      defaultValue={defaultValue}
      label={label}
      fullWidth={true}
      error={errors[name]}
      helperText={errors[name]?.message}
      {...props}
    />
  )
}

export const FormInput = FormInputInner
