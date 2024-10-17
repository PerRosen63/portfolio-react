import "./App.css";
import { CasesList } from "./components/CasesList";
import JobsList from "./components/JobsList";
import { Profile } from "./components/Profile";

function App() {
  return (
    <>
      <Profile></Profile>
      <JobsList></JobsList>
      <CasesList></CasesList>
    </>
  );
}

export default App;
