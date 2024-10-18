// import "./App.css";
import { CasesList } from "./components/CasesList";
import JobsList from "./components/JobsList";
import { Profile } from "./components/Profile";

function App() {
  return (
    <>
      <main className="container bg-red-300 max-w-screen-xl mx-auto px-4">
        <section className="bg-blue-300 text-white flex flex-col items-center justify-between p-4">
          <Profile></Profile>
        </section>
        <section className="max-w-2xl mx-auto">
          <JobsList></JobsList>
        </section>
        <section className="max-w-2xl mx-auto">
          <CasesList></CasesList>
        </section>
      </main>
    </>
  );
}

export default App;
