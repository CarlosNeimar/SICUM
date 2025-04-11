import { ThemeProvider } from "@/components/theme-provider"
import { Dash } from "./pages/dashboard"

function App() {


  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Dash />
        Hello
      </ThemeProvider>
    </>
  )
}

export default App
