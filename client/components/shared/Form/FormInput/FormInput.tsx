import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";

// function FormInput(props) {
//   const { control, errors } = useFormContext();
//   const { name, label } = props;

//   return (
//     <Controller
//       as={TextField}
//       name={name}
//       control={control}
//       defaultValue=""
//       label={label}
//       fullWidth={true}
//       error={errors[name]}
//       helperText={errors[name]?.message}
//       {...props}
//     />
//   );
// }

// export default FormInput;

export interface FormInputProps {
  className?: string;
}

const FormInputInner = (props) => {
  const { control, errors } = useFormContext();
  const { name, label } = props;

  return (
    <Controller
      as={TextField}
      name={name}
      control={control}
      defaultValue=""
      label={label}
      fullWidth={true}
      error={errors[name]}
      helperText={errors[name]?.message}
      {...props}
    />
  );
};

export const FormInput = styled(FormInputInner)`
  input {
    font-size: 16px;
  }

  input::placeholder {
    font-size: 14px;
  }
`;