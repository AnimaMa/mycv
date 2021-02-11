import TextField from "@material-ui/core/TextField";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

import dot from "dot-object";

export interface FormInputProps {
  className?: string;
  defaultValue?: string;
  rules: Object;
}

const FormInputInner = (props) => {
  const { control, errors } = useFormContext();
  const { name, label, defaultValue, rules } = props;

  return (
    <Controller
    // render={(props) => <TextField {...props} inputRef={props.ref} />}
      as={TextField}
      name={name}
      control={control}
      defaultValue={defaultValue}
      label={label}
      fullWidth={true}
      error={!!dot.pick(name, errors)}
      helperText={dot.pick(`${name}.message`, errors)}
      rules={rules}
    />
  );
};

export const FormInput = FormInputInner;
