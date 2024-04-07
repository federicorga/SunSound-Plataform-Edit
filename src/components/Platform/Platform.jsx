import { useEffect } from "react";
import {
    Routes,
    Route,
    useNavigationType,
    useLocation,
    BrowserRouter as Router,
} from "react-router-dom";




import PlataformArtist from "../AllSectionsPlataform/PlataformArtist/PlataformArtist";
import MusicPlayerComponent from "../GlobalComponents/MusicAllComponents/MusicPlayerComponent/MusicPlayerComponent";
import NavBarPlataform from "../NavBarPlataform/NavBarPlataform";
import HeaderBarPlataform from "../HeaderBarPlataform/HeaderBarPlataform";
import PlataformMyCollections from "../AllSectionsPlataform/PlataformMyCollections/PlataformMyCollections";


//Providers
import AppWalletProvider from "../providers/AppWalletProvider";

import MusicProvider from "../providers/MusicProvider";
import { PlayerProvider } from "../providers/PlayerProvider";
import DropDownList from "../GlobalComponents/DropDownList/DropDownList";



const Platform = () => {

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

        <AppWalletProvider>
            <MusicProvider>
                <PlayerProvider>
                    <HeaderBarPlataform />
                    <NavBarPlataform />
                    <main className="page-main">
                        <section className="app-content-headerbar-allroutes">

                            <Routes>
                                <Route
                                    path="/mycollections"
                                    element={<PlataformMyCollections />}
                                />
                                <Route path="/profile/*" element={<PlataformArtist />} />
                                <Route path="/DropDown" element={<DropDownList />} />
                            </Routes>

                        </section>
                    </main>

                    <MusicPlayerComponent />
                </PlayerProvider>
            </MusicProvider>
        </AppWalletProvider>
    )
}

export default Platform