import React from 'react'
import { Box, Typography } from '@mui/material';
import "./style.css"
import { useTranslation } from 'react-i18next';


//images
import featuresBgLine from "../../Assets/Images/featuresBgLine.png";
import footerBackround from "../../Assets/Images/footerBackground.png"
import CLogo from "../../Assets/Images/ClogoWhite.png"
import facebookIcon from "../../Assets/Images/facebook-logo.png"
import twitterIcon from "../../Assets/Images/twitter.png"
import linkedinIcon from "../../Assets/Images/linkedin-letters.png"
import instaIcon from "../../Assets/Images/instagram-filled.png"
import starIcon from "../.././Assets/Images/starIcon.png"






export default function Footer() {
  const [t, i18n] = useTranslation("global")
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
              <img src={facebookIcon} />
              <img src={twitterIcon} />
              <img src={linkedinIcon} />
              <img src={instaIcon} />
            </Box>
          </Box>

          <Box className="footerTextBox">
            <Typography className='footerSubText'>{t("Foote.foLabel1")}</Typography>
            <Typography className='footerText'>{t("Foote.foAddress")}</Typography>
            <Box className="gapBox"></Box>
            <Typography className='footerSubText'>{t("Foote.foLabel2")}</Typography>
            <Typography sx={{ textDecoration: "underline" }} className='footerText pointer'>{t("Foote.foEmail")}</Typography>
            <Box className="gapBox"></Box>
            <Typography className='footerSubText'>{t("Foote.foLabel3")}</Typography>
            <Typography className='footerText'>+91 8850596802</Typography>
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
