import FormControl from "@material-ui/core/FormControl"
import Switch from "@material-ui/core/Switch"
import React from "react"
import { Controller, useFormContext } from "react-hook-form"

export interface FormSwitchProps {
  className?: string
  name: string
}

const FormSwitchInner = (props: FormSwitchProps) => {
  const { control } = useFormContext()
  const { name } = props
  return (
    <FormControl>
      <Controller
        name={name}
        control={control}
        render={(props) => (
          <Switch onChange={(e) => props.onChange(e.target.checked)} checked={props.value} color="primary" />
        )}
      />
    </FormControl>
  )
}

export const FormSwitch = FormSwitchInner
