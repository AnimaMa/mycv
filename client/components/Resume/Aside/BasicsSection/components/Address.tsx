import React from "react"
import { useResume } from "../../../ResumeProvider/ResumeProvider"
import { IoMdPin } from "react-icons/io"

export const Address = () => {
  const resume = useResume()
  const location = resume.basics.location

  return (
    <div className="my-4">
      {location && (
        <div className="my-4">
          <div className="flex justify-start items-center ">
            <IoMdPin className="text-base mr-1" />
            <div>
              <p>{location.address}</p>
              <p>{`${location.city}, ${location.postalCode}`}</p>
              <p> {location.country}</p>{" "}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
