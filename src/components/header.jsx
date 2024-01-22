import { Banner } from "./header-components/Banner";
import { Nav } from "./header-components/Nav";
import { NavOpciones } from "./header-components/NavOpciones";

export const Header = () => {
  return (
    <>
      <div className="bg-[#dad3fd] top-0 left-0 w-full shadow-lg ">
        <Nav />
        <NavOpciones />
        <Banner />
      </div>
    </>
  );
};
