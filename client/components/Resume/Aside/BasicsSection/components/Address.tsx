import React from "react"
import { useResume } from "../../../ResumeProvider/ResumeProvider"
import { IoMdPin } from "react-icons/io"

export const Address = () => {
  const { basics } = useResume()

  return (
    <div className="my-4">
      {basics.location && (
        <div className="my-4">
          <div className="flex justify-start items-center ">
            <IoMdPin className="text-base mr-1" />
            <div>
              <p>{basics.location.address}</p>
              <p>{`${basics.location.city}, ${basics.location.postalCode}`}</p>
              <p> {basics.location.country}</p>{" "}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
