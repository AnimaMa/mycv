import React from "react";
import styled from "styled-components";
import { FormProvider, useForm } from "react-hook-form";
import { BasicsSection } from "./components/BasicsSection/BasicsSection";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

export interface CvFormProps {
  className?: string;
}

const CvFormInner = (props: CvFormProps) => {
  const rhfMethods = useForm();
  const { register, handleSubmit, watch } = rhfMethods;

  const onSubmit = (data) => console.log(data);
  return (
    <div className={props.className}>
      <FormProvider {...rhfMethods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <BasicsSection />

          <Grid container justify="center">
            <Button variant="contained" color="primary" type="submit" className="btn btn-primary">
              Create
            </Button>
          </Grid>
        </form>
      </FormProvider>
    </div>
  );
};

export const CvForm = styled(CvFormInner)``;
