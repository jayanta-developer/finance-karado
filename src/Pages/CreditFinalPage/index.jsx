import React, { useState } from 'react';
import "./style.css"
import { Box, Typography } from '@mui/material';
import ReactSpeedometer from "react-d3-speedometer";
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";

//image
import Clogo from "../../Assets/Images/CLogo.png";
import earthLogo from "../../Assets/Images/earthIcon.png";
import dropIcon from "../../Assets/Images/WDropIcon.png";
import background1 from "../../Assets/Images/topBackground.png";
import background2 from "../../Assets/Images/bottomBackground.png";


export default function CreditFinalPage({ data, setData }) {
  const [t, i18n] = useTranslation("global");
  const [langDrop, setLangDrop] = useState(false);
  const [langDropVal, setLangDropVal] = useState("English");
  const navigate = useNavigate()

  const languageList = ["English", "Hindi", "Marathi", "Gujarati", "Malayalam", "Telugu", "Kannada"];

  const handelChangeLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }


  return (
    <>
      <Box className="creditPage">
        <img className='homeBg1' src={background1} />
        <img className='homeBg2' src={background2} />

        <Box className="navBar AppBox">
          <Box className="Clogo" onClick={() => navigate("/")}>
            <img src={Clogo} />
          </Box>

          <Box className="navLanguage" onClick={() => setLangDrop(!langDrop)}>
            <img src={earthLogo} />
            <Typography>{langDropVal}</Typography>
            <img className='LanDropIcon' src={dropIcon} style={{ rotate: langDrop ? "180deg" : "0deg" }} />
            <Box className="LanDrop" sx={{ height: langDrop ? "210px" : "0px" }}>
              {
                languageList?.map((el, index) => (
                  <Box key={index} onClick={() => {
                    setLangDropVal(el)
                    handelChangeLanguage(el)
                  }}>
                    <p>{el}</p>
                  </Box>
                ))
              }
            </Box>
          </Box>
        </Box>


        <Typography className='thakMessage'>{t("credit.message")}</Typography>
        <Box className="creditMeterBox">
          <Box className="popInnerBox">
            <Typography className='popHeader'>{t("credit.Welcome")} {data?.name}</Typography>
            <Typography className='popSubText'>{t("credit.YourScore")}</Typography>
            <Box className="scoreMeter">
              <ReactSpeedometer height={200} minValue={300} maxValue={900} value={data?.credit_score || 300} />
            </Box>
          </Box>
        </Box>

      </Box>

    </>
  )
}
