import { ChevronDown } from "lucide-react";
import PostsList from "./components/PostsList";
import { Profile } from "./components/Profile";

function App() {
  const onClick = () => {
    window.location.href = "#tabs";
  };

  return (
    <>
      <main className="max-lg:container max-w-6xl md:px-4 mx-auto scroll-smooth">
        <section className="flex-col max-w-full mx-auto flex items-center justify-between gap-4 p-4">
          <Profile></Profile>
          <button className="max-lg:hidden my-0.5 hover:my-0">
            {" "}
            <ChevronDown
              className="h-8 w-8 shrink-0 text-muted-foreground hover:text-foreground hover:h-9 hover:w-9"
              onClick={onClick}
            ></ChevronDown>
          </button>
        </section>
        <section id="tabs" className="max-w-full mx-auto p-4">
          <PostsList></PostsList>
        </section>
      </main>
    </>
  );
}

export default App;
