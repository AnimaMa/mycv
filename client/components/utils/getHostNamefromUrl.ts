export const getHostNamefromUrl = (url?: string) => {
  try {
    const hostname = new URL(url).hostname
    return hostname
  } catch {
    return url
  }
}
