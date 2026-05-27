import { ToastContainer } from "react-toastify"
import { AppRouter } from "./router/AppRouter"
import { SongContextProvider } from "./contexts/Song.context"

export const App = () => {
  return <>
  <SongContextProvider>
    <ToastContainer />
    <AppRouter />
  </SongContextProvider>
  </>
}
