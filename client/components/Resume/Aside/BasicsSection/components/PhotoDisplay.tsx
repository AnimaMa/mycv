import React from "react"
import { IoPersonCircle } from "react-icons/io5"

export const PhotoDisplay = () => {
  return (
    <div className="bg-shadow  w-24 mx-auto rounded-3xl h-1/2 flex justify-center">
      <IoPersonCircle className="text-6xl text-dark" />
      {/* <Image src="/img/logo.svg" alt="cloudresume logo" width={90} height={75} /> */}
    </div>
  )
}
