import React from 'react';
import "./style.css";
import cross from "../../Assets/Images/blueCross.png";

import { useTranslation } from 'react-i18next';


export default function ErrorPop({ errorActive, setErrorPop, errorMsg }) {
  const [t, i18n] = useTranslation("global");

  return (
    <div className='loaderBox' style={{ display: errorActive ? "flex" : "none" }}>
      <div className='errorPop'>
        <img src={cross} className='blueCross' onClick={() => setErrorPop(false)} />
        <h2>{t("errorMsg.l1")}  <br /> {t("errorMsg.l2")} </h2>
      </div>
    </div>
  )
}
