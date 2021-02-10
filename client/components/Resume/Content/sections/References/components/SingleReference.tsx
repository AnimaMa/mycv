import React from "react"
import { GoQuote } from "react-icons/go"
import { Resumes } from "../../../../../../lib/models/resume"

export interface SingleReferenceProps extends Resumes.Reference {
  className?: string
}

export const SingleReference = (props: SingleReferenceProps) => {
  const { name, position, company, id, reference } = props
  return (
    <div className="bg-shadow p-6 md:p-8 rounded-lg" key={id}>
      <div className="flex justify-between">
        <h3>
          {name}{" "}
          <span className="text-xs">
            {position}, {company}
          </span>
        </h3>
        <GoQuote className="text-primary text-2xl" />
      </div>
      <div className="my-2">
        <p className="text-left">{reference}</p>
      </div>
    </div>
  )
}
