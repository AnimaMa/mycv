import React from "react"
import { useResume } from "../../../ResumeProvider/ResumeProvider"
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi"

export interface ContactInfoProps {
  className?: string
}

export const ContactInfo = (props: ContactInfoProps) => {
  const resume = useResume()

  return (
    <div className="my-4">
      {resume.basics.email && (
        <div className="my-4">
          <div className="flex justify-start items-center">
            <HiOutlineMail className="text-base mr-1" />
            <a href={`mailto:${resume.basics.email}`} className=" text-primary hover:text-secondary">
              {resume.basics.email}
            </a>
          </div>
          <div className="flex justify-start items-center">
            <HiOutlinePhone className="text-base mr-1" />
            <a href={`tel:${resume.basics.phone}`} className=" text-primary hover:text-secondary">
              {resume.basics.phone}
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
