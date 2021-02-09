import React from "react"

export interface PhotoDisplayProps {
  className?: string
}

export const PhotoDisplay = (props: PhotoDisplayProps) => {
  return (
    <div className={props.className}>
      <h1>fotka </h1>
    </div>
  )
}
