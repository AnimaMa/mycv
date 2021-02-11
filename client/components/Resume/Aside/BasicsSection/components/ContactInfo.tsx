import React from "react";
import { useResume } from "../../../ResumeProvider/ResumeProvider";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

export const ContactInfo = () => {
  const { basics } = useResume();

  return (
    <div className="mt-8">
      {basics.email && (
        <div className="my-4 flex justify-center flex-col">
          <div className=" flex flex-row space-x-2">
            <HiOutlineMail className="text-base mr-1 min-w-min text-secondary" />
            <a href={`mailto:${basics.email}`} className=" text-primary hover:text-secondary text-base ">
              {basics.email}
            </a>
          </div>
          <div className="  flex flex-row space-x-2">
            <HiOutlinePhone className="text-base mr-1  min-w-min text-secondary" />
            <a href={`tel:${basics.phone}`} className=" text-primary hover:text-secondary text-base">
              {basics.phone}
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
