import React from "react"
import { BasicsSection } from "./BasicsSection/BasicsSection"

export interface AsideProps {
  className?: string
}

export const Aside = (props: AsideProps) => {
  return (
    <div className={`${props.className} aside container mx-auto  bg-shadow2 rounded-r-lg py-10  px-5  sm:w-2/5 `}>
      <div className=" h-auto sticky top-14">
        <div className="flex  items-center justify-center">
          <BasicsSection />
        </div>
      </div>
    </div>
  )
}
