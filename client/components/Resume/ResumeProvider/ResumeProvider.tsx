import React, { createContext, ReactNode, useContext } from "react"
import { Resumes } from "../../../lib/models/resume"

const ResumeContext = createContext<Resumes.Resume>(null)

interface ResumeProviderProps {
  children: ReactNode
  resume: Resumes.Resume
}

export const useResume = (): Resumes.Resume => {
  const resume = useContext(ResumeContext)
  if (resume === null) throw new Error("No resume provided")
  return resume
}

export const ResumeProvider = ({ children, resume }: ResumeProviderProps) => {
  return <ResumeContext.Provider value={resume}>{children}</ResumeContext.Provider>
}
