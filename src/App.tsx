import PostsList from "./components/PostsList";
import { Profile } from "./components/Profile";

function App() {
  return (
    <>
      <main className="max-lg:container max-w-6xl md:px-4 mx-auto">
        <section className="flex-col max-w-full mx-auto flex items-center justify-between gap-4 p-4">
          <Profile></Profile>
        </section>
        <section className="max-w-full mx-auto p-4">
          <PostsList></PostsList>
        </section>
      </main>
    </>
  );
}

export default App;
