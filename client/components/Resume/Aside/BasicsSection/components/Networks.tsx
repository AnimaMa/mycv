import React from "react"
import { useResume } from "../../../ResumeProvider/ResumeProvider"
import { AiFillLinkedin, AiFillGithub, AiFillGitlab } from "react-icons/ai"

export interface ComponentNameProps {
  className?: string
}

export const Networks = (props: ComponentNameProps) => {
  const resume = useResume()

  const networks = resume.basics.networks
  const iconClassNames = "text-2xl transition-all text-secondary hover:text-dark"
  return (
    <div className={props.className}>
      <div className="flex justify-center">
        {networks?.linkedin && (
          <a href={networks.linkedin}>
            <AiFillLinkedin className={iconClassNames} />
          </a>
        )}
        {networks?.github && (
          <a href={networks.github}>
            <AiFillGithub className={iconClassNames} />
          </a>
        )}
        {networks?.gitlab && (
          <a href={networks.gitlab} className={iconClassNames}>
            <AiFillGitlab />
          </a>
        )}
      </div>
      {networks?.customWebsite && (
        <div className="my-4">
          <a href="networks?.customWebsite" className="text-sm text-primary hover:text-secondary">
            {networks?.customWebsite}
          </a>
        </div>
      )}
    </div>
  )
}
