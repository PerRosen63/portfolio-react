import PostsList from "./components/PostsList";
import { Profile } from "./components/Profile";

function App() {
  return (
    <>
      <main className="container border max-w-screen-xl mx-auto">
        <section className="flex-row bg-blue-300 text-white flex items-center justify-between">
          <Profile></Profile>
        </section>
        <section className="max-w-2xl mx-auto">
          <PostsList></PostsList>
        </section>
        {/* <section className="max-w-2xl mx-auto">
          <CasesList></CasesList>
        </section> */}
      </main>
    </>
  );
}

export default App;
