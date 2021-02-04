import { TextField } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import React from "react";
import { useFormContext } from "react-hook-form";
import styled from "styled-components";

export interface BasicsSectionProps {
  className?: string;
}

const BasicsSectionInner = (props: BasicsSectionProps) => {
  const { register, errors, getValues, setValue } = useFormContext();

  return (
    <div className={props.className}>
      <h1>BasicsSection</h1>
      <FormControl fullWidth id="name-input">
        <FormLabel>Názov</FormLabel>
        <input
          id="name-input"
          placeholder="Názov businessu"
          name="kde"
          ref={register({ required: true, maxLength: 10 })}
        />
      </FormControl>
    </div>
  );
};

export const BasicsSection = styled(BasicsSectionInner)``;
