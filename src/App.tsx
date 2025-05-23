import { ArrowDownWideNarrow } from "lucide-react";
import PostsList from "./components/PostsList";
import { Profile } from "./components/Profile";

function App() {
  const onClick = () => {
    window.location.href = "#tabs";
  };

  return (
    <>
      <main className="max-lg:container max-w-7xl md:px-4 mx-auto scroll-smooth">
        <section className="flex-col max-w-full mx-auto flex items-center justify-between gap-4 p-4">
          <Profile></Profile>
          <div className="mt-[-2rem]">
            <button className="max-lg:hidden my-0.5 hover:my-0">
              {" "}
              <ArrowDownWideNarrow
                className="h-10 w-10 shrink-0 animate-bounce text-muted-foreground hover:text-foreground hover:h-11 hover:w-11"
                onClick={onClick}
              ></ArrowDownWideNarrow>
            </button>
          </div>
        </section>
        <section id="tabs" className="max-w-full mx-auto p-4 lg:min-h-svh">
          <PostsList></PostsList>
        </section>
      </main>
    </>
  );
}

export default App;
