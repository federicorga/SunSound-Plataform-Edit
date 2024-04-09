import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
  BrowserRouter as Router,
} from "react-router-dom";

import PlataformArtist from "./components/AllSectionsPlataform/PlataformArtist/PlataformArtist";
import MusicPlayerComponent from "./components/GlobalComponents/MusicAllComponents/MusicPlayerComponent/MusicPlayerComponent";
import NavBarPlataform from "./components/NavBarPlataform/NavBarPlataform";
import HeaderBarPlataform from "./components/HeaderBarPlataform/HeaderBarPlataform";
import PlataformMyCollections from "./components/AllSectionsPlataform/PlataformMyCollections/PlataformMyCollections";


//Providers
import MusicProvider from "./components/providers/MusicProvider";
import { PlayerProvider } from "./components/providers/PlayerProvider";
import SectionInicioPlataform from "./components/AllSectionsPlataform/SectionInicioPlataform/SectionInicioPlataform";
import { AppWalletProvider } from "./components/providers/AppWalletProvider";

//https://owlcarousel2.github.io/OwlCarousel2/demos/basic.html

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

      <AppWalletProvider>
      <MusicProvider>
  
        <PlayerProvider>

          <HeaderBarPlataform />
          <NavBarPlataform />
          <main className="page-main">
            <section className="app-content-headerbar-allroutes">
                <Routes>
                  <Route path="/" element={<SectionInicioPlataform/>}></Route>
                  <Route
                    path="/mycollections"
                    element={<PlataformMyCollections />}/>
                  <Route path="/profile/*" element={<PlataformArtist />} />
                </Routes>
            </section>
          </main>  
          <MusicPlayerComponent />

        </PlayerProvider>

      </MusicProvider>
      </AppWalletProvider>
    </>
  );
}

export default App;
