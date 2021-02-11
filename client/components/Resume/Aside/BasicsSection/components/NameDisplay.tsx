import React from "react";
import { useResume } from "../../../ResumeProvider/ResumeProvider";

const NameDisplayInner = () => {
  const { basics } = useResume();
  return (
    <p className="my-3 font-normal text-2xl text-dark mx-auto text-center">{`${basics.firstName} ${basics.lastName}`}</p>
  );
};

export const NameDisplay = NameDisplayInner;
