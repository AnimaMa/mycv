import React from "react"
import { useFormContext, Controller } from "react-hook-form"
import TextField from "@material-ui/core/TextField"
import styled from "styled-components"

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

export const FormInput = styled(FormInputInner)`
  input {
    font-size: 17px;
    height: 22px;
  }

  input::placeholder {
    font-size: 14px;
  }
`
