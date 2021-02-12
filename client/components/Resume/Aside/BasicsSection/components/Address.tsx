import React from "react"
import { useResume } from "../../../ResumeProvider/ResumeProvider"
import { IoMdPin } from "react-icons/io"

export const Address = () => {
  const { basics } = useResume()

  return (
    <div className="my-4">
      {basics.location && (
        <div className="my-4">
          <div className="flex sm:flex-row flex-col items-center sm:items-start">
            <IoMdPin className="text-base mr-1 text-secondary" />
            <div className="mt-3 sm:mt-0">
              <p className="mb-2 font-thin">{basics.location.address}</p>
              <p className="mb-2 font-thin">{`${basics.location.city}, ${basics.location.postalCode}`}</p>
              <p className="font-thin"> {basics.location.country}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
