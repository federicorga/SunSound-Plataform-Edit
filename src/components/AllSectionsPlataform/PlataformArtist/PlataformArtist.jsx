import React, { useState } from "react";
import "./PlataformArtist.css";
import UserTitlePlataform from "../../UserTitlePlataform/UserTitlePlataform";
import ArtistRectangleCard from "../../ArtistRectangleCard/ArtistRectangleCard";
import NFTRectangleCard from "../../NFTRectangleCard/NFTRectangleCard";
import LoadingMusicForm from "../../LoadingMusicForm/LoadingMusicForm";

import BalanceTotalCard from "../../BalanceTotalCard/BalanceTotalCard";

import SecondNavBarPlataform from "../../SecondNavBarPlataform/SecondNavBarPlataform";

import ReleasesArtis from "./ReleasesArtis/ReleasesArtis";
import { Route, Routes } from "react-router-dom";

function PlataformArtist() {
  const [showForm, setShowForm] = useState(false);

  const CardAddMusicClickActive = () => {
    setShowForm(true); // Al hacer clic en el CardImgMusic, muestra el formulario

  };
  const CardAddMusicClickClose = () => {
    setShowForm(false); // Cierra el formulario al hacer clic en el botón de cierre
  };
  return (
    <>

    <div className="content-all-PlataformArtist">
      <section className="SectionA">
        <div className="nav-plataform">
          <div className="plataform-usertitleplataform-content">

          <UserTitlePlataform></UserTitlePlataform>
        
          
          </div>
        </div>
      </section>

      <section>
        <SecondNavBarPlataform></SecondNavBarPlataform>
      </section>

      <section className="content-allSection-PlataformArtist">
        <section className="SectionB">
        <Routes>
        <Route path="releases" element={<ReleasesArtis funcionActiveCard={CardAddMusicClickActive}></ReleasesArtis>}></Route>
         </Routes>

          <section className="SectionB-B">
            <div>
              <BalanceTotalCard></BalanceTotalCard>
            </div>
            <div>
              <ArtistRectangleCard></ArtistRectangleCard>
            </div>
            <div>
              <NFTRectangleCard></NFTRectangleCard>
            </div>
          </section>
        </section>

       
      </section>
    </div>
      {showForm && (
        <div className="content-form-loadingMusic-inPlataform">
          <LoadingMusicForm onCloseForm={CardAddMusicClickClose} />
        </div>

        
      )}
    </>
  );
}

export default PlataformArtist;
