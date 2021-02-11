import { nanoid } from "nanoid"
import { useEffect, useState } from "react"
import { useQuery } from "react-query"
import { api } from "../../../lib/api/api"

const ALREADY_USED = "4f90d13a42"

export const useGeneratedUid = () => {
  const [uid, setUid] = useState(ALREADY_USED)

  const { refetch, isLoading } = useQuery(["checkUid", { uid }], async ({ queryKey }) => {
    const { data } = await api.get(`/resumes?uid=${uid}`)
    if (data.length > 0) {
      setUid(nanoid())
    }
  })

  useEffect(() => {
    refetch()
  }, [uid])

  return { uid, isGenerating: isLoading }
}
