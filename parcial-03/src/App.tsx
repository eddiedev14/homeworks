import { ToastContainer } from "react-toastify"
import { AppRouter } from "./router/AppRouter"
import { SongContextProvider } from "./contexts/Song.context"
import { AuthContextProvider } from "./contexts/Auth.context"

export const App = () => {
  return <>
    <AuthContextProvider>
      <SongContextProvider>
        <ToastContainer />
        <AppRouter />
      </SongContextProvider>
    </AuthContextProvider>
  </>
}
