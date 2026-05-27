import { Header } from "../components/shared/Header";
import { Loader } from "../components/shared/PageLoader";
import { SongForm } from "../components/SongForm";
import { SearchForm } from "../components/SearchForm";
import { SearchResults } from "../components/SearchResults";
import { TopSongs } from "../components/TopSongs";
import { GraphPanel } from "../components/GraphPanel";
import { useSong } from "../hooks/useSong";

export const HomePage = () => {
  const { loading } = useSong();

  if (loading) {
    return <Loader />;
  }

  return (
    <>
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