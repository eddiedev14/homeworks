import { Header } from "../components/shared/Header";
import { Loader } from "../components/shared/PageLoader";
import { SongForm } from "../components/spotify/SongForm";
import { SearchForm } from "../components/spotify/SearchForm";
import { SearchResults } from "../components/spotify/SearchResults";
import { TopSongs } from "../components/spotify/TopSongs";
import { GraphPanel } from "../components/spotify/GraphPanel";
import { useSong } from "../hooks/spotify/useSong";
import { useAuth } from "../hooks/auth/useAuth";

export const HomePage = () => {
  const { loading } = useSong();
  const { logout } = useAuth();

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <button type="button" onClick={logout} className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition cursor-pointer">
        Cerrar Sesión
      </button>

      <Header
        title="Spotify Structures"
        paragraph="Eddie Santiago Delgado Campo (2235060)"
      />

      <div className="grid grid-cols-3 gap-8 px-16 py-10">
        <div className="flex flex-col gap-4">
          <SongForm />
          <SearchForm />
          <SearchResults />
        </div>

        <TopSongs />
        <GraphPanel />
      </div>
    </>
  );
};