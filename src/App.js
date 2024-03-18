import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";

import PlataformArtist from "./components/AllSectionsPlataform/PlataformArtist/PlataformArtist";
import MusicPlayerComponent from "./components/GlobalComponents/MusicAllComponents/MusicPlayerComponent/MusicPlayerComponent";
import NavBarPlataform from "./components/NavBarPlataform/NavBarPlataform";
import HeaderBarPlataform from "./components/HeaderBarPlataform/HeaderBarPlataform";



function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <>
    <section className="app-content-navbar-header-allpageplataform">
      <NavBarPlataform />
      <section className="app-content-headerbar-allroutes">
      <HeaderBarPlataform/>
      <Routes>
        <Route path="/" element={""}></Route>
        <Route path="/profile" element={<PlataformArtist />} />
      </Routes>
      </section>
    </section>
    <MusicPlayerComponent />
  </>
  );
}
export default App;
