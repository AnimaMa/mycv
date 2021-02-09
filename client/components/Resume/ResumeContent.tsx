import React from "react"
import { Aside } from "./Aside/Aside"
import { Content } from "./Content/Content"
import Image from "next/image"

export interface ResumeContentProps {
  className?: string
}

export const ResumeContent = (props: ResumeContentProps) => {
  return (
    <div className="wrapper">
      <nav className="flex items-center justify-end">
        <div className="flex  justify-center ">
          <div className="flex items-end">
            <Image
              src="/img/vlnka.svg"
              alt="cloudresume logo"
              width={200}
              height={75}
              className=" object-cover w-full"
            />
          </div>
          <div className="flex min-w-300 bg-white items-center px-4">
            <a href="#" className="text-primary  hover:text-secondary font-bold mr-4 uppercase">
              asdf
            </a>
            <a href="#" className="text-primary  hover:text-secondary font-bold mr-4 uppercase">
              ff
            </a>
            <a href="#" className="text-primary  hover:text-secondary font-bold mr-4 uppercase">
              ffff
            </a>
            <a href="#" className="text-primary  hover:text-secondary font-bold mr-4 uppercase">
              xxxx
            </a>
          </div>
        </div>
      </nav>

      <div className="flex bg-white">
        <Aside />
        <Content />
      </div>
    </div>
  )
}
