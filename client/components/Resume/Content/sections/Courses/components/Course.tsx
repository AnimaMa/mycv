import React from "react";
import { IoMdGlobe } from "react-icons/io";
import { MdPlace } from "react-icons/md";
import { Resumes } from "../../../../../../lib/models/resume";
import { getHostNamefromUrl } from "../../../../../utils/getHostNamefromUrl";

export interface CourseProps extends Resumes.Course {
  className?: string;
}

export const Course = (props: CourseProps) => {
  const { id, name, place, website } = props;

  return (
    <div className=" bg-shadow rounded-lg py-8 px-12 " key={id}>
      <p className="text-primary text-lg mb-4">{name}</p>

      {place && (
        <div className="flex flex-col items-start justify-center mb-2">
          <p className=" flex">
            <MdPlace className="text-primary mr-4" />
            <span className="">{place}</span>
          </p>
        </div>
      )}

      {website && (
        <div className="flex flex-col items-start justify-center mb-2">
          <p className="flex">
            <IoMdGlobe className="text-primary mr-4" />
            <a href={website} className="text-sm hover:text-opacity-50 ">
              {getHostNamefromUrl(website)}
            </a>
          </p>
        </div>
      )}
    </div>
  );
};
