import IconButton from "@material-ui/core/IconButton"
import Tooltip from "@material-ui/core/Tooltip"
import DeleteIcon from "@material-ui/icons/Delete"
import React from "react"

export interface TooltipDeleteProps {
  className?: string
  onClick: () => void
}

const TooltipDeleteInner = (props: TooltipDeleteProps) => {
  return (
    <Tooltip className={props.className} title="Delete" onClick={props.onClick}>
      <IconButton aria-label="delete" className="icon-button">
        <DeleteIcon color="primary" className="icon-delete" />
      </IconButton>
    </Tooltip>
  )
}

export const TooltipDelete = TooltipDeleteInner

/* .icon-delete {
    font-size: 24px;
  }
` */
