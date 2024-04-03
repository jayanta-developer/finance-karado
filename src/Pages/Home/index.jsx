import React, { useRef, useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import "./style.css"


//images
import background1 from "../../Assets/Images/topBackground.png"
import background2 from "../../Assets/Images/bottomBackground.png"
import Clogo from "../../Assets/Images/CLogo.png"
import ClogoSvg from "../../Assets/Images/CLogoSvg.svg"
import earthLogo from "../../Assets/Images/earthIcon.png"
import dropIcon from "../../Assets/Images/WDropIcon.png"

//Data

//components

export default function Home() {
  const [langDrop, setLangDrop] = useState(false)
  const [langDropVal, setLangDropVal] = useState("EN")


  const languageList = [
    "EN",
    "ES",
    "FR",
    "ZH",
    "HI"
  ]



  return (
    <>
      <Box className="homeContainer">
        <Box className="heroSection">
          <img className='homeBg1' src={background1} />
          <img className='homeBg2' src={background2} />

          <Box className="navBar">
            <Box className="Clogo">
              <img src={Clogo} />
            </Box>

            <Box className="navLanguage" onClick={() => setLangDrop(!langDrop)}>
              <img src={earthLogo} />
              <Typography>{langDropVal}</Typography>
              <img className='LanDropIcon' src={dropIcon} style={{ rotate: langDrop ? "180deg" : "0deg" }} />
              <Box className="LanDrop" sx={{ height: langDrop ? "150px" : "0px" }}>
                {
                  languageList?.map((el, index) => (
                    <Box key={index} onClick={() => setLangDropVal(el)}>
                      <p>{el}</p>
                    </Box>
                  ))
                }
              </Box>
            </Box>
          </Box>

          <Box className="homeMainBox">
            <Box className="applyInfoBox homeMainSubBox">
              <Typography className='homeBoldText'>We provide <br /> funds for all your business needs</Typography>
              <Typography className='homeSubText'>Give us a call, request a callback or drop us an email, we’re here to help.</Typography>

            </Box>


            <Box className="applyInputBox homeMainSubBox"></Box>


          </Box>






        </Box>



      </Box>
    </>

  )
}
