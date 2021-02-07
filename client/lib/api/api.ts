import axios from "axios"

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_API_URL,
})

export const graphqlApi = async (query, { variables = {} } = {}) => {
  try {
    const {
      data: { data },
    } = await api({
      url: `/graphql`,
      method: "POST",
      data: {
        query,
        variables,
      },
    })
    return data
  } catch (e) {
    console.log("Error reaching gql endpoint", e)
    throw e
  }
}
