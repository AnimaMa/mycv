import React from "react";
import { useResume } from "../../../ResumeProvider/ResumeProvider";
import { IoMdPin } from "react-icons/io";

export const Address = () => {
  const { basics } = useResume();

  return (
    <div className="my-4">
      {basics.location && (
        <div className="my-4">
          <div className="flex  items-center space-x-2">
            <IoMdPin className="text-base mr-1 min-w-min text-secondary" />
            <div>
              <p className="mb-2 font-thin">{basics.location.address}</p>
              <p className="mb-2 font-thin">{`${basics.location.city}, ${basics.location.postalCode}`}</p>
              <p className="font-thin"> {basics.location.country}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
