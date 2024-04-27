import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import "./style.css"
import { styled } from '@mui/material/styles';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


//images
import background1 from "../../Assets/Images/topBackground.png";
import background2 from "../../Assets/Images/bottomBackground.png";
import Clogo from "../../Assets/Images/CLogo.png";
import earthLogo from "../../Assets/Images/earthIcon.png";
import dropIcon from "../../Assets/Images/WDropIcon.png";
import Bs1 from "../../Assets/Images/Bs1.png";
import Bs2 from "../../Assets/Images/Bs1.png";
import Bs3 from "../../Assets/Images/bs3.png";
import userIcon from "../../Assets/Images/userIcon.png";
import emailIcon from "../../Assets/Images/mailIcon.png";
import gstIcon from "../../Assets/Images/gstIcon.png";
import panIcon from "../../Assets/Images/panIcon.png";
import rupayIcon from "../../Assets/Images/repeIcon.png";
import featuresBgLine from "../../Assets/Images/featuresBgLine.png";
import featuresBgImg from "../../Assets/Images/portrait-indian-asian-young-family-four-sitting-white-flour-against-white-background-looking-camera 1 copy copy 1.png";
import tik from "../../Assets/Images/tik.png";
import eligibilityImg from "../../Assets/Images/eligibilityimg.png";
import blackStar from "../../Assets/Images/blackStar.png";
import questionimg from "../../Assets/Images/questions.png";
import dropIconB from "../../Assets/Images/dropIcon.png";
import step1 from "../../Assets/Images/step1.png";
import step2 from "../../Assets/Images/step2.png"
import step3 from "../../Assets/Images/step3.png";
import stars from "../../Assets/Images/stars.png";
import cote from "../../Assets/Images/cote.png";

import storesBg from "../../Assets/Images/RectangleBg.png"

//Data
import { chooseData } from "../../Assets/Data"

//components
import AppSlider from "../../Components/Slider"
import { AppBtn } from '../../Components/AppButton';
import Slider, { SliderThumb } from '@mui/material/Slider';
import Tooltip from '@mui/material/Tooltip';
import Footer from '../../Components/Footer';
import { useTranslation } from 'react-i18next';




export default function Home() {
  const [t, i18n] = useTranslation("global")
  const [langDrop, setLangDrop] = useState(false)
  const [langDropVal, setLangDropVal] = useState("English")
  const [time, setTime] = useState(0)

  const [drop1, setDrop1] = useState(false)
  const [drop2, setDrop2] = useState(false)
  const [drop3, setDrop3] = useState(false)
  const [drop4, setDrop4] = useState(false)
  const [drop5, setDrop5] = useState(false)



  const languageList = [
    "Hindi", "English", "Marathi", "Gujarati", "Malyalam", "Telugu", " Kannada"
  ]

  const handelChangeLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }


  const businessCard = ({ img, title, subText }) => {
    return (
      <Box className="businessCard">
        <img src={img} />
        <Typography>{title}<span>{subText}</span></Typography>
      </Box>
    )
  }


  const trustCard = ({ num, title, subTitle, color, marginClass }) => {
    return (
      <Box sx={{ background: color }} className={`trustCard ${marginClass}`}>
        <Typography>{num}</Typography>
        <span>{title}</span>
        <samp>{subTitle}</samp>
      </Box>
    )
  }


  function ValueLabelComponent(props) {
    const { children, value } = props;

    return (
      <Tooltip enterTouchDelay={0} placement="top" title={value}>
        {children}
      </Tooltip>
    );
  }



  return (
    <>
      <Box className="homeContainer">
        <Box className="heroSection">
          <img className='homeBg1' src={background1} />
          <img className='homeBg2' src={background2} />

          <Box className="navBar AppBox">
            <Box className="Clogo">
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

          <Box className="homeMainBox AppBox">
            <Box className="applyInfoBox homeMainSubBox">
              {/* <Typography className='homeBoldText'>We provide <br /> funds for all your business needs</Typography> */}
              <Typography className='homeBoldText'>{t("header.pageHeader")}</Typography>
              <Typography className='homeSubText'>{t("header.pageSubHeader")}</Typography>
              <Box className="BusinessCardBox">
                {businessCard({
                  img: Bs1,
                  title: t("businessCard1.title"),
                  subText: t("businessCard1.subText"),
                })}
                {businessCard({
                  img: Bs2,
                  title: t("businessCard2.title"),
                  subText: t("businessCard2.subText"),
                })}
                {businessCard({
                  img: Bs3,
                  title: t("businessCard3.title"),
                  subText: t("businessCard3.subText"),
                })}
              </Box>
              <Box className="topBtnBox">
                <AppBtn btnText={t("button.applyBtn")} width="222px" />
              </Box>
            </Box>

            <Box className="applyInputBox homeMainSubBox">
              <Typography className='applyHeaderText'>{t("form.header1")}<span>{t("form.header2")}<br /> </span>
                {t("form.header3")}</Typography>

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
                  <p>{t("button.otpSend")}</p>
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
              <AppBtn btnText={t("button.eligibilityBtn")} width="100%" />

              <Box className="check">
                <input type="checkBox" />
                <Typography>{t("form.check1")}</Typography>
              </Box>

              <Box className="check">
                <input type="checkBox" />
                <Typography>{t("form.check2")}</Typography>
              </Box>

              <Typography className='findtText'>
                {t("form.fromBottomText1")}<span>{t("form.fromBottomText2")}</span> <samp>{t("form.fromBottomText3")}</samp>
              </Typography>
            </Box>
          </Box>
        </Box>


        <Box className="TrustSection AppBox">
          <Typography className='sectionBlueLabel'>{t("Trust.trustHeader")}</Typography>
          <Typography className='sectionBoldLabel'>{t("Trust.trustSubHeader")}</Typography>
          <Box className="trustCardBox">
            {trustCard({ num: "120+", title: t("Trust.trustCardHeader1"), subTitle: t("Trust.trustCardHeaderSub1"), color: "#DFF3FF" })}
            {trustCard({ num: "120+", title: t("Trust.trustCardHeader2"), subTitle: t("Trust.trustCardHeaderSub2"), color: "#E0E9FF", marginClass: "topMargin" })}
            {trustCard({ num: "120+", title: t("Trust.trustCardHeader1"), subTitle: t("Trust.trustCardHeaderSub1"), color: "#FFD9D3" })}
            {trustCard({ num: "120+", title: t("Trust.trustCardHeader1"), subTitle: t("Trust.trustCardHeaderSub1"), color: "#D9FEE2", marginClass: "topMargin" })}
          </Box>
        </Box>

        <Box className="featuresBox AppBox">
          <Box className="featureInnerBox">
            <img className='featuresBgLine' src={featuresBgLine} />
            <img className='featuresBgImg' src={featuresBgImg} />
            <Box className="loanTextBox">
              <Typography className='sectionBlueLabel'>{t("Loan.loanHeader")}</Typography>
              <Typography className='sectionBoldLabel'>{t("Loan.loanSubHeader")}</Typography>
              <Typography className='homeSubText'>{t("Loan.loanSubHeader2")}</Typography>

              <Box className="tikTextBox">
                <img src={tik} />
                <Typography className='homeSubText'>{t("Loan.loanLabel1")}</Typography>
              </Box>
              <Box className="tikTextBox">
                <img src={tik} />
                <Typography className='homeSubText'>{t("Loan.loanLabel2")}</Typography>
              </Box>
              <Box className="tikTextBox">
                <img src={tik} />
                <Typography className='homeSubText'>{t("Loan.loanLabel3")}</Typography>
              </Box>
              <Box className="tikTextBox">
                <img src={tik} />
                <Typography className='homeSubText'>{t("Loan.loanLabel4")}</Typography>
              </Box>
              <Box className="tikTextBox">
                <img src={tik} />
                <Typography className='homeSubText'>{t("Loan.loanLabel5")}</Typography>
              </Box>
              <Box mb={4} className="tikTextBox">
                <img src={tik} />
                <Typography className='homeSubText'>{t("Loan.loanLabel6")}</Typography>
              </Box>
              <AppBtn btnText={t("button.applyBtn")} />
            </Box>
          </Box>
        </Box>


        <Box className="calculatorSection AppBox">
          <Typography className='sectionBlueLabel'>Calculator</Typography>
          <Typography className='sectionBoldLabel'>Calculate and confirm your loans</Typography>
          <Box className="calculatorBox">
            <img className='featuresBgLine' src={featuresBgLine} />

            <Box className="controller">
              <Typography className='calHeaderText'>Loan Calculator</Typography>
              <Typography className='subText'>Loan Term</Typography>

              <Box className="yearsBox">
                <Box onClick={() => setTime(0)} className={time === 0 ? "yearsBoxItem yearsBoxItemActive" : "yearsBoxItem"}><p>Yearly</p></Box>
                <Box onClick={() => setTime(1)} className={time === 1 ? "yearsBoxItem yearsBoxItemActive" : "yearsBoxItem"}><p>Monthly</p></Box>
                <Box onClick={() => setTime(2)} className={time === 2 ? "yearsBoxItem yearsBoxItemActive" : "yearsBoxItem"}><p>Weekly</p></Box>
              </Box>


              <Typography className='lineBarLabel'>Loan Amount</Typography>
              <Box className="lineBarBox">
                <Slider
                  valueLabelDisplay="auto"
                  slots={{
                    valueLabel: ValueLabelComponent,
                  }}
                  aria-label="custom thumb label"
                  defaultValue={20}
                />
                <Box className="valueBox">
                  <Typography className='lineBarLabel'>20,590</Typography>
                  <Typography className='lineBarLabel'>₹</Typography>
                </Box>
              </Box>

              <Typography className='lineBarLabel'>Interest Rate</Typography>
              <Box className="lineBarBox">
                <Slider
                  valueLabelDisplay="auto"
                  slots={{
                    valueLabel: ValueLabelComponent,
                  }}
                  aria-label="custom thumb label"
                  defaultValue={20}
                />
                <Box className="valueBox">
                  <Typography className='lineBarLabel'>8</Typography>
                  <Typography className='lineBarLabel'>%</Typography>
                </Box>
              </Box>

              <Typography className='lineBarLabel'>Loan Duration</Typography>
              <Box className="lineBarBox">
                <Slider
                  valueLabelDisplay="auto"
                  slots={{
                    valueLabel: ValueLabelComponent,
                  }}
                  aria-label="custom thumb label"
                  defaultValue={20}
                />
                <Box className="valueBox">
                  <Typography className='lineBarLabel'>5</Typography>
                  <Typography className='lineBarLabel'>Y</Typography>
                </Box>
              </Box>


              <Box className="dateBox">

                <Box className="dateInputBox">
                  <Typography className='lineBarLabel'>Start Date</Typography>
                  <Box>
                    <p className='lineBarLabel'>Select Date</p>
                  </Box>
                </Box>

                <Box className="dateInputBox">
                  <Typography className='lineBarLabel'>End Date</Typography>
                  <Box>
                    <p className='lineBarLabel'>Select Date</p>
                  </Box>
                </Box>
              </Box>
            </Box>



            <Box className="metter">
              <Box className="metterBg"></Box>
              <Box mt={2} className="greenCircul">
                <CircularProgressbar value={66} />
                <Typography>Total Amount</Typography>
                <span>$27,535*</span>
              </Box>
              <Box mt={3} className="emiIndecatorBox">
                <Box className="emiIndecatorItem">
                  <Box sx={{ background: "#2BE158" }}></Box>
                  <Typography className='lineBarLabel'>EMI Amount</Typography>
                </Box>
                <Box className="emiIndecatorItem">
                  <Box sx={{ background: "#FFFFFF" }}></Box>
                  <Typography className='lineBarLabel'>Interest Payable</Typography>
                </Box>
              </Box>

              <Box className="metterTextRow">
                <Typography className='lineBarLabel'>EMI Amount (Principal + Interest)</Typography>
                <Typography className='lineBarLabel'> ₹27,535*</Typography>
              </Box>
              <Box className="metterTextRow">
                <Typography className='lineBarLabel'>Interest Payable</Typography>
                <Typography className='lineBarLabel'>₹2,040*</Typography>
              </Box>
              <Box className="metterTextRow">
                <Typography className='lineBarLabel'>Loan Duration</Typography>
                <Typography className='lineBarLabel'>5 Year</Typography>
              </Box>
              <Box className="borderLine"></Box>
              <Box className="metterTextRow trowMargin">
                <Typography className='lineBarLabel'>Your EMI Amount</Typography>
                <Typography className='lineBarLabel'>₹5,507*</Typography>
              </Box>
              <AppBtn btnText="Apply Now" bgColor="#2BE158" width="80%" />
            </Box>
          </Box>
        </Box>


        <Box className="AppProcessSection AppBox">
          <Typography className='sectionBlueLabel'>Process</Typography>
          <Typography className='sectionBoldLabel'>Application Process</Typography>
          <Typography className='homeSubText'>Give us a call, request a callback or drop us an email, we’re here to help. There are many variations of passages of Lorem Ipsum available,</Typography>

          <Box className="stepBox">
            <Box className="stepItem">
              <img className='stepBg' src={step1} />
              <Typography>Steps1</Typography>
              <span>Project Discovery Call</span>
              <samp>Give us a call, request a callback or drop us an email, we’re here to help. </samp>
            </Box>

            <Box className="stepItem">
              <img className='stepBg' src={step2} />
              <Typography>Steps2</Typography>
              <span>Project Discovery Call</span>
              <samp>Give us a call, request a callback or drop us an email, we’re here to help. </samp>
            </Box>

            <Box className="stepItem">
              <img className='stepBg' src={step3} />
              <Typography>Steps3</Typography>
              <span>Project Discovery Call</span>
              <samp>Give us a call, request a callback or drop us an email, we’re here to help. </samp>
            </Box>
          </Box>
        </Box>


        <Box className="chooseUsBox AppBox">
          <Typography className='sectionBlueLabel'>Why Choose us</Typography>
          <Typography className='sectionBoldLabel'>Why Choose Open <br /> Capital?</Typography>

          <Box className="chooseCardBox">
            <img className='featuresBgLine' src={featuresBgLine} />
            {chooseData?.map((el, i) => (
              <Box key={i} className="chooseCard">
                <img src={el.img} />
                <Typography>{el.text}</Typography>
                <span>{el.subText}</span>
              </Box>
            ))
            }
          </Box>
        </Box>

        <Box className="eligibility AppBox">
          <Box className="eligibilityImg">
            <img src={eligibilityImg} />
          </Box>
          <Box className="eligibilityTextBox">
            <Typography className='sectionBoldLabel marginText'>Eligibility & Documentation</Typography>
            <Typography className='homeSubText'>Give us a call, request a callback or drop us an email, we’re here to help. There are many variations of passages of Lorem Ipsum available,</Typography>
            <Typography className='appSubHeaderText'>The following documents are required:</Typography>
            <Box className="rowBox">
              <img src={blackStar} />
              <Typography>PAN card photocopy or Form 60</Typography>
            </Box>
            <Box className="rowBox">
              <img src={blackStar} />
              <Typography>Colour photograph</Typography>
            </Box>
            <Box className="rowBox">
              <img src={blackStar} />
              <Typography>Latest payslip/Form 16/IT return copy as proof of income</Typography>
            </Box>
            <Typography className='appSubHeaderText'>Residence proof (any one of the following):</Typography>
            <Box className="rowBox">
              <img src={blackStar} />
              <Typography>Passport</Typography>
            </Box>
            <Box className="rowBox">
              <img src={blackStar} />
              <Typography>Ration Card</Typography>
            </Box>
            <Box className="rowBox">
              <img src={blackStar} />
              <Typography>Electricity bill</Typography>
            </Box>
            <Box className="rowBox">
              <img src={blackStar} />
              <Typography>Landline telephone bill</Typography>
            </Box>
            <Typography className='homeSubText '>Please note that this list is only indicative. Documents required may vary on a case-to-case basis.</Typography>
            <Typography className='appSubHeaderText'>Disclaimer:  <span>The credit card decision would be communicated within 21 working days</span></Typography>
          </Box>
        </Box>



        <img className='storiesBg' src={storesBg} />
        <Box className="StoriesSection AppBox">
          {/* <Box className="storiesBg"></Box> */}
          <Typography className='sectionBlueLabel'>Testimonials</Typography>
          <Typography className='sectionBoldLabel'>Customer Stories</Typography>
          <Box className="croselBox">
            {/* <AppSlider /> */}
            <Box className="storiesCard">
              <Box className="bgBox"></Box>
              <Box className="starBox">
                <img src={stars} />
              </Box>
              <Box className="cote"><img src={cote} /></Box>
              <Typography>
                The lab-grown diamond portal market is expected to reach $5.46 billion by 2026, according to a report by Grand View Research. The market is growing.
              </Typography>
              <span>Minik Nielsen</span>
              <samp>Customer</samp>
            </Box>

            <Box className="storiesCard">
              <Box className="bgBox"></Box>
              <Box className="starBox">
                <img src={stars} />
              </Box>
              <Box className="cote"><img src={cote} /></Box>
              <Typography>
                The lab-grown diamond portal market is expected to reach $5.46 billion by 2026, according to a report by Grand View Research. The market is growing.
              </Typography>
              <span>Minik Nielsen</span>
              <samp>Customer</samp>
            </Box>

            <Box className="storiesCard">
              <Box className="bgBox"></Box>
              <Box className="starBox">
                <img src={stars} />
              </Box>
              <Box className="cote"><img src={cote} /></Box>
              <Typography>
                The lab-grown diamond portal market is expected to reach $5.46 billion by 2026, according to a report by Grand View Research. The market is growing.
              </Typography>
              <span>Minik Nielsen</span>
              <samp>Customer</samp>
            </Box>


          </Box>
        </Box>



        <Box className="questionSection AppBox">
          <Box className="questionBox">
            <Typography className='sectionBlueLabel'>FAQS</Typography>
            <Typography className='sectionBoldLabel'>Got questions for us?</Typography>

            <Box className={drop1 ? "colapsBox colapsBoxActive" : "colapsBox"} onClick={() => setDrop1(!drop1)} >
              <Box className={drop1 ? "colapsDrop colapsDropActive" : "colapsDrop"}>
                <Typography>Justo nunc ad in vulputate posuere massa mauris?</Typography>
                <img src={dropIconB} style={{ transform: drop1 ? "rotate(0deg)" : "rotate(-180deg)" }} />
              </Box>
              <Box className="colapsTextArea">
                <p>Nisl tortor torquent sociosqu dictumst egestas felis senectus aliquet fringilla accumsan cursus. Auctor efficitur si mollis viverra penatibus ultrices potenti. Velit est finibus commodo bibendum auctor eleifend sociosqu etiam sem aenean nisl.</p>
              </Box>
            </Box>

            <Box className={drop2 ? "colapsBox colapsBoxActive" : "colapsBox"} onClick={() => setDrop2(!drop2)} >
              <Box className={drop2 ? "colapsDrop colapsDropActive" : "colapsDrop"}>
                <Typography>Primis scelerisque placerat mattis netus imperdiet ex finibus?</Typography>
                <img src={dropIconB} style={{ transform: drop2 ? "rotate(0deg)" : "rotate(-180deg)" }} />
              </Box>
              <Box className="colapsTextArea">
                <p>Nisl tortor torquent sociosqu dictumst egestas felis senectus aliquet fringilla accumsan cursus. Auctor efficitur si mollis viverra penatibus ultrices potenti. Velit est finibus commodo bibendum auctor eleifend sociosqu etiam sem aenean nisl.</p>
              </Box>
            </Box>

            <Box className={drop3 ? "colapsBox colapsBoxActive" : "colapsBox"} onClick={() => setDrop3(!drop3)} >
              <Box className={drop3 ? "colapsDrop colapsDropActive" : "colapsDrop"}>
                <Typography>Primis scelerisque placerat mattis netus imperdiet ex finibus?</Typography>
                <img src={dropIconB} style={{ transform: drop3 ? "rotate(0deg)" : "rotate(-180deg)" }} />
              </Box>
              <Box className="colapsTextArea">
                <p>Nisl tortor torquent sociosqu dictumst egestas felis senectus aliquet fringilla accumsan cursus. Auctor efficitur si mollis viverra penatibus ultrices potenti. Velit est finibus commodo bibendum auctor eleifend sociosqu etiam sem aenean nisl.</p>
              </Box>
            </Box>

            <Box className={drop4 ? "colapsBox colapsBoxActive" : "colapsBox"} onClick={() => setDrop4(!drop4)} >
              <Box className={drop4 ? "colapsDrop colapsDropActive" : "colapsDrop"}>
                <Typography>Primis scelerisque placerat mattis netus imperdiet ex finibus?</Typography>
                <img src={dropIconB} style={{ transform: drop4 ? "rotate(0deg)" : "rotate(-180deg)" }} />
              </Box>
              <Box className="colapsTextArea">
                <p>Nisl tortor torquent sociosqu dictumst egestas felis senectus aliquet fringilla accumsan cursus. Auctor efficitur si mollis viverra penatibus ultrices potenti. Velit est finibus commodo bibendum auctor eleifend sociosqu etiam sem aenean nisl.</p>
              </Box>
            </Box>

            <Box className={drop5 ? "colapsBox colapsBoxActive" : "colapsBox"} onClick={() => setDrop5(!drop5)} >
              <Box className={drop5 ? "colapsDrop colapsDropActive" : "colapsDrop"}>
                <Typography>Primis scelerisque placerat mattis netus imperdiet ex finibus?</Typography>
                <img src={dropIconB} style={{ transform: drop5 ? "rotate(0deg)" : "rotate(-180deg)" }} />
              </Box>
              <Box className="colapsTextArea">
                <p>Nisl tortor torquent sociosqu dictumst egestas felis senectus aliquet fringilla accumsan cursus. Auctor efficitur si mollis viverra penatibus ultrices potenti. Velit est finibus commodo bibendum auctor eleifend sociosqu etiam sem aenean nisl.</p>
              </Box>
            </Box>
          </Box>
          <Box className="questionImgBox">
            <img src={questionimg} />
          </Box>
        </Box>


        <Footer />
      </Box >
    </>

  )
}
