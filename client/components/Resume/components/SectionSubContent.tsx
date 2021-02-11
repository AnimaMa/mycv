import React, { ReactNode } from "react"

export interface SectionSubContentProps {
  className?: string
  children?: ReactNode
  title: string
  text?: string
}

export const SectionSubContent = (props: SectionSubContentProps) => {
  const { title, text } = props
  return (
    <div className={`${props?.className} my-6`}>
      <p className="text-secondary  uppercase font-nomal my-2">{title}</p>
      {text && <p className="font-thin">{text}</p>}
    </div>
  )
}
