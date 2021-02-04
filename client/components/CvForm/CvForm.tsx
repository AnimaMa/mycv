import React from "react";
import styled from "styled-components";
import { FormProvider, useForm } from "react-hook-form";
import { BasicsSection } from "./components/BasicsSection/BasicsSection";

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
          <button type="submit" className="btn btn-primary">
            Create
          </button>
        </form>
      </FormProvider>
    </div>
  );
};

export const CvForm = styled(CvFormInner)``;
