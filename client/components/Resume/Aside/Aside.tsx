import React from "react";
import { BasicsSection } from "./BasicsSection/BasicsSection";

export interface AsideProps {
  className?: string;
}

export const Aside = (props: AsideProps) => {
  return (
    <div className={`${props.className} aside container bg-shadow2 rounded-r-lg p-10 xl:w-4/12  2xl:w-3/12`}>
      <div className=" h-auto sticky top-14">
        <BasicsSection className="flex   justify-center flex-col" />
      </div>
    </div>
  );
};
