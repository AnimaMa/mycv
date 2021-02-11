import React from "react"
import { useResume } from "../../../ResumeProvider/ResumeProvider"
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi"

export const ContactInfo = () => {
  const { basics } = useResume()

  return (
    <div className="mt-8">
      {basics.email && (
        <div className="my-4">
          <div className="flex justify-start items-center space-x-2">
            <HiOutlineMail className="text-base mr-1" />
            <a href={`mailto:${basics.email}`} className=" text-primary hover:text-secondary">
              {basics.email}
            </a>
          </div>
          <div className="flex justify-start items-center space-x-2">
            <HiOutlinePhone className="text-base mr-1" />
            <a href={`tel:${basics.phone}`} className=" text-primary hover:text-secondary">
              {basics.phone}
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
