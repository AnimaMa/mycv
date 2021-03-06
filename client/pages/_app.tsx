import { QueryClient, QueryClientProvider } from "react-query"
import "tailwindcss/tailwind.css"
import "../styles/globals.css"
import "../components/shared/Theme/Theme"

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

export default MyApp
