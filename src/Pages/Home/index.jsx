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
import Bs1 from "../../Assets/Images/Bs1.png"
import Bs2 from "../../Assets/Images/Bs1.png"
import Bs3 from "../../Assets/Images/bs3.png"
import userIcon from "../../Assets/Images/userIcon.png"
import emailIcon from "../../Assets/Images/mailIcon.png"
import gstIcon from "../../Assets/Images/gstIcon.png"
import panIcon from "../../Assets/Images/panIcon.png"
import rupayIcon from "../../Assets/Images/repeIcon.png"

//Data

//components
import { AppBtn } from '../../Components/AppButton';




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


  const businessCard = ({ img, title, subText }) => {
    return (
      <Box className="businessCard">
        <img src={img} />
        <Typography>{title}<span>{subText}</span></Typography>
      </Box>
    )
  }



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
            <Box mr={5} className="applyInfoBox homeMainSubBox">
              <Typography className='homeBoldText'>We provide <br /> funds for all your business needs</Typography>
              <Typography className='homeSubText'>Give us a call, request a callback or drop us an email, we’re here to help.</Typography>
              <Box className="BusinessCardBox">
                {businessCard({
                  img: Bs1,
                  title: "Business loan up to",
                  subText: " ₹15 Crore"
                })}
                {businessCard({
                  img: Bs2,
                  title: "Interest rate as low as",
                  subText: " 1%"
                })}
                {businessCard({
                  img: Bs3,
                  title: "Money in your Bank in",
                  subText: " 48 hrs"
                })}
              </Box>
              <AppBtn btnText="Apply Now" width="222px" />
            </Box>

            <Box ml={5} className="applyInputBox homeMainSubBox">
              <Typography className='applyHeaderText'>Fill to get your <span>loan eligibility <br /> </span>
                in minutes!</Typography>

              <Box className="input2Box">
                <Box className="inputBox">
                  <input placeholder="Name *" />
                  <img src={userIcon} />
                </Box>
                <Box className="inputBox">
                  <input type="email" placeholder="Email ID *" />
                  <img src={emailIcon} />
                </Box>
              </Box>

              <Box className="inputBox">
                <input placeholder="GST Number *" />
                <img src={gstIcon} />
              </Box>

              <Box className="inputBox">
                <input placeholder="Pan No *" />
                <img src={panIcon} />
              </Box>
              <Box className="inputBox">
                <input placeholder="Mobile No *" />
                <Box className="sendOtpBtn">
                  <p>Send OTP</p>
                </Box>
              </Box>

              <Box className="inputBox otpBox">
                <input type="number" />
                <input type="number" />
                <input type="number" />
                <input type="number" />
              </Box>

              <Box className="inputBox">
                <input placeholder="Loan Amount *" />
                <img src={rupayIcon} />
              </Box>
              <AppBtn btnText="Check loan Eligibility" width="100%" />

              <Box className="check">
                <input type="checkBox" />
                <Typography>I agree to the Terms & Privacy Policy</Typography>
              </Box>

              <Box className="check">
                <input type="checkBox" />
                <Typography>Send me updates on WhatsApp</Typography>
              </Box>

              <Typography className='findtText'>
                Let's find you the <span>Best</span> <samp>Finance</samp>
              </Typography>
            </Box>

          </Box>
        </Box>
      </Box>
    </>

  )
}
