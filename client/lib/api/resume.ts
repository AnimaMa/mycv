import { Resumes } from "../models/resume"
import { graphqlApi } from "./api"

export const getAllResumeUids = async (): Promise<string[]> => {
  const { resumes } =
    (await graphqlApi(`
    query getAllResumeUids {
      resumes {
        uid
      }
    }
  `)) || []

  return resumes.map((resume) => resume.uid)
}

export const getResume = async (where: any = {}): Promise<Resumes.Resume> => {
  const { resumes } = await graphqlApi(
    `
    query getResume ($where: JSON) {
      resumes (where: $where) {
        uid
        basics {
          firstName
          lastName
          titleAfter
          titleBefore
          networks {
            linkedin
            github
            gitlab
            customWebsite
          }
          profilePhoto {
            url
          }
          phone
          location {
            address
            postalCode
            city
            country
          }
          email
          summary
        }
        workExperience {
          company
          position
          website
          startDate
          endDate
          summary
          usedTechnologies
          stillWorks
        }
        education {
          id
          institution
          area
          degree
          startDate
          endDate
          activitiesAndSocietiess
          stillStudy
        }
        course {
          id
          name
          website
          place
          certificate
        }
        skill {
          id
          name
          level
          technologies
        }
        reference {
          id
          name
          company
          position
          reference
        }
        language {
          id
          language
          fluency
        }
        interest {
          id
          name
        }
        uid
        published_at
      }
    }
  `,
    { variables: { where } }
  )
  const [resume] = resumes
  return resume
}
