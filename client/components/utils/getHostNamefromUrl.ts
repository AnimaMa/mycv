export const getHostNamefromUrl = (url?: string) => {
  const hostname = new URL(url).hostname
  return hostname
}
