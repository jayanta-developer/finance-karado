import React from 'react'
import { Box, Typography } from '@mui/material';
import "./style.css"

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
  return (
    <>
      <Box className="footer">
        <Box className="footermainSection">

          <Box className="footerTextBox">
            <img className='footerClogo' src={CLogo} />
            <Typography sx={{
              textAlign: "center"
            }}

              className='footerText'>
              Get the perfect funding to achieve your business dreams! Explore loan products right for your industry and increase your chances of getting the funding you need to grow!
            </Typography>
            <Box className="socialIcon">
              <img src={facebookIcon} />
              <img src={twitterIcon} />
              <img src={linkedinIcon} />
              <img src={instaIcon} />
            </Box>
          </Box>

          <Box className="footerTextBox">
            <Typography className='footerSubText'>Find Us</Typography>
            <Typography className='footerText'>B-101, Tirupati Complex, Sai Dham, Saravali, Boisar – 401501</Typography>
            <Box className="gapBox"></Box>
            <Typography className='footerSubText'>Email Us</Typography>
            <Typography sx={{ textDecoration: "underline" }} className='footerText pointer'>info@financekarado.com</Typography>
            <Box className="gapBox"></Box>
            <Typography className='footerSubText'>Call us</Typography>
            <Typography className='footerText'>+91 8850596802</Typography>
            <Typography className='footerText'>+91 8291420806</Typography>
          </Box>



          <Box className="footerTextBox lFBox">
            <Box>
              <img src={starIcon} />
              <Typography className='footerText pointer'>Terms and Conditions</Typography>
            </Box>
            <Box className="gapBox"></Box>
            <Box>
              <img src={starIcon} />
              <Typography className='footerText pointer'>Privacy Policy</Typography>
            </Box>
            <Box className="gapBox"></Box>
            <Box>
              <img src={starIcon} />
              <Typography className='footerText pointer'>Apply Now</Typography>
            </Box>
          </Box>
        </Box>


        <Box className="footerBottomBox">
          <Typography>Copyright © 2024 . All Rights Reserved . FINANCEKARADO.COM | Created by Sociohub Media .</Typography>
        </Box>
        <img className='featuresBgLine' src={featuresBgLine} />
        {/* <img className='footerBg' src={footerBackround} /> */}
      </Box>
    </>
  )
}
