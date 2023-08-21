import "./App.css";
import { Nav } from "./components/header-components/Nav";
import { NavOpciones } from "./components/header-components/NavOpciones";
import { Banner } from "./components/header-components/Banner";

function App() {
  return (
    <>
      <header className="header">
        <Nav />
        <NavOpciones />
        <Banner />
      </header>
    </>
  );
}

export default App;
