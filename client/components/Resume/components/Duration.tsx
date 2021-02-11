import React from "react"
import { formatDate } from "../../utils/formatDate"

export interface DuraionProps {
  className?: string
  startDate: string
  endDate?: string
  stillLasts: boolean
}

export const Duration = (props: DuraionProps) => {
  const { stillLasts, startDate, endDate } = props
  return (
    <p className="text-dark italic text-sm mb-3">
      {formatDate(startDate)}
      <span className=" font-body"> - </span>
      {stillLasts ? "Present" : formatDate(endDate)}
    </p>
  )
}
