import React from 'react'
import { Box, Typography } from '@mui/material';
import "./style.css"
import { useTranslation } from 'react-i18next';


//images
import featuresBgLine from "../../Assets/Images/featuresBgLine.png";
import CLogo from "../../Assets/Images/ClogoWhite.png";
import facebookIcon from "../../Assets/Images/facebookIcon.png";
import twitterIcon from "../../Assets/Images/twitter.png";
import linkedinIcon from "../../Assets/Images/linkedin-letters.png";
import instaIcon from "../../Assets/Images/instagram-filled.png";
import starIcon from "../.././Assets/Images/starIcon.png";



export default function Footer() {
  const [t] = useTranslation("global")
  return (
    <>
      <Box className="footer">
        <Box className="footermainSection">

          <Box className="footerTextBox">
            <img className='footerClogo' src={CLogo} />
            <Typography sx={{
              textAlign: "center"
            }}
              className='footerText'>{t("Foote.footerSummery")}
            </Typography>
            <Box className="socialIcon">
              <img style={{ width: "22px", height: "22px" }} src={facebookIcon} />
              <img src={twitterIcon} />
              <a href="https://www.linkedin.com/company/finance-karado/" target='_blank'>
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
              <img src={instaIcon} />
            </Box>
          </Box>

          <Box className="footerTextBox">
            <Typography className='footerSubText'>{t("Foote.foLabel1")}</Typography>
            <Typography className='footerText'>Mahakali Caves Road, Lodha Supremus, Mumbai, Maharashtra 400069</Typography>
            <Box className="gapBox"></Box>
            <Typography className='footerSubText'>{t("Foote.foLabel2")}</Typography>
            <Typography sx={{ textDecoration: "underline" }} className='footerText pointer'>tech@financekarado.com</Typography>
            <Box className="gapBox"></Box>
            <Typography className='footerSubText'>{t("Foote.foLabel3")}</Typography>
            <Typography className='footerText'>+91 7304140237</Typography>
            <Typography className='footerText'>+91 8291420806</Typography>
          </Box>
          <Box className="footerTextBox lFBox">
            <Box>
              <img src={starIcon} />
              <Typography className='footerText pointer'>{t("Foote.foLabel4")}</Typography>
            </Box>
            <Box className="gapBox"></Box>
            <Box>
              <img src={starIcon} />
              <Typography className='footerText pointer'>{t("Foote.foLabel5")}</Typography>
            </Box>
            <Box className="gapBox"></Box>
            <Box>
              <img src={starIcon} />
              <Typography className='footerText pointer'>{t("Foote.foLabel6")}</Typography>
            </Box>
          </Box>
        </Box>
        <Box className="footerBottomBox">
          <Typography>{t("Foote.footerBottomText")}</Typography>
        </Box>
        <img className='featuresBgLine' src={featuresBgLine} />
      </Box>
    </>
  )
}
