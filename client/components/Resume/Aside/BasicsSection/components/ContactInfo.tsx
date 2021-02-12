import React from "react"
import { useResume } from "../../../ResumeProvider/ResumeProvider"
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi"

export const ContactInfo = () => {
  const { basics } = useResume()

  return (
    <div className="mt-8">
      <div className="my-4 flex justify-center flex-col">
        <div className=" flex sm:flex-row flex-col items-center sm:justify-start space-x-2 space-y-2 mt-2 ">
          <HiOutlineMail className="text-base mr-1  text-secondary" />
          <a href={`mailto:${basics.email}`} className=" text-primary hover:text-secondary text-base ">
            {basics.email}
          </a>
        </div>
        {basics.phone && (
          <div className="  flex sm:flex-row flex-col space-x-2 items-center sm:items-start mt-4">
            <HiOutlinePhone className="text-base mr-1   text-secondary" />
            <a href={`tel:${basics.phone}`} className=" text-primary hover:text-secondary text-base">
              {basics.phone}
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
