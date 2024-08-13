import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import axios from 'axios';
import "./style.css";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useNavigate } from "react-router-dom";

//images
import background1 from "../../Assets/Images/topBackground.png";
import background2 from "../../Assets/Images/bottomBackground.png";
import Clogo from "../../Assets/Images/CLogo.png";
import earthLogo from "../../Assets/Images/earthIcon.png";
import dropIcon from "../../Assets/Images/WDropIcon.png";
import Bs1 from "../../Assets/Images/Bs1.png";
import Bs2 from "../../Assets/Images/bs2.png";
import Bs3 from "../../Assets/Images/bs3.png";
import userIcon from "../../Assets/Images/userIcon.png";
import emailIcon from "../../Assets/Images/mailIcon.png";
import gstIcon from "../../Assets/Images/gstIcon.png";
import panIcon from "../../Assets/Images/panIcon.png";
import rupayIcon from "../../Assets/Images/repeIcon.png";
import callIcon from "../../Assets/Images/call-48.png"
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
import storesBg from "../../Assets/Images/RectangleBg.png";

//Data
import { ChooseData } from "../../Assets/Data";

//components
import { AppBtn, scrollToSection } from '../../Components/AppButton';
import Slider from '@mui/material/Slider';
import Tooltip from '@mui/material/Tooltip';
import Footer from '../../Components/Footer';
import { useTranslation } from 'react-i18next';
import Loader from "../../Components/Loader";
import ErrorPop from "../../Components/ErrorPop";


export default function Home({ data, setData }) {
  const navigate = useNavigate();
  const choose_Data = ChooseData();
  const [t, i18n] = useTranslation("global");
  const [langDrop, setLangDrop] = useState(false);
  const [langDropVal, setLangDropVal] = useState("English");
  const [drop1, setDrop1] = useState(false);
  const [drop2, setDrop2] = useState(false);
  const [drop3, setDrop3] = useState(false);
  const [drop4, setDrop4] = useState(false);
  const [drop5, setDrop5] = useState(false);
  const [value, setValue] = useState({});
  const [pop, setPop] = useState(false);
  const [loader, setLoader] = useState(false);
  const [errorPop, setErrorPop] = useState(false);
  const [errorMsg, setErrorMsg] = useState();
  const [submitBtn, setSubmitBtn] = useState(true);
  const [termsCheck, setTermsCheck] = useState(false);
  const [termsCheck2, setTermsCheck2] = useState(false);
  const [yearDrop, setYearDrop] = useState(false);
  const [monthDrop, setMonthDrop] = useState(false);
  const [monthDropVal, setMonthDropVal] = useState(0);
  const [loonAmoutnValue, setLoonAmountValue] = useState(200000)
  const [interestRates, setInterestRates] = useState(1)
  const [loadDuration, setLoadDuration] = useState(0)
  const [result, setResult] = useState()


  const handleLoAmChange = (event, newValue) => {
    if (typeof newValue === 'number') {
      setLoonAmountValue(newValue);
    }
  };

  const handleInterestReteChange = (event, newValue) => {
    if (typeof newValue === 'number') {
      setInterestRates(newValue);
    }
  };
  const handleLoanDurationChange = (event, newValue) => {
    if (typeof newValue === 'number') {
      setLoadDuration(newValue);
    }
  };


  const years = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const token = `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcxNjAyMTA3MCwianRpIjoiMzIzMTdhMTMtYTc0YS00YmYyLWI3MmEtNzI4YzRlYmUwYmZkIiwidHlwZSI6ImFjY2VzcyIsImlkZW50aXR5IjoiZGV2LnVzZXJuYW1lXzJ4bnZ3ZmtkZjNuYnUzYnkxNjdkcWxzcDdtY0BzdXJlcGFzcy5pbyIsIm5iZiI6MTcxNjAyMTA3MCwiZXhwIjoyMDMxMzgxMDcwLCJlbWFpbCI6InVzZXJuYW1lXzJ4bnZ3ZmtkZjNuYnUzYnkxNjdkcWxzcDdtY0BzdXJlcGFzcy5pbyIsInRlbmFudF9pZCI6Im1haW4iLCJ1c2VyX2NsYWltcyI6eyJzY29wZXMiOlsidXNlciJdfX0.nIfhCjWuXgtXFpe7tDy2BoSTla6-876mmZXrLpEShSU`;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const SubmitData = async (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setLoader(true);

    try {
      const response = await axios.post('https://kyc-api.surepass.io/api/v1/credit-report-v2/fetch-report', {
        name: value.name,
        pan: value.pan,
        mobile: value.mobile,
        consent: "Y"
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        }
      });
      document.body.style.overflow = 'hidden';
      setData(response.data.data);
      navigate("/credit-score")
      await updateGoogleSheet(response.data.data);
    } catch (error) {
      console.error('Error fetching PDF report or updating Google Sheet:', error);
      setErrorPop(true);
      setErrorMsg(error.message);
    } finally {
      setLoader(false);
    }
  };

  const updateGoogleSheet = async (data) => {
    console.log(new Date());

    try {
      await axios.post("https://sheet.best/api/sheets/ecb84873-04ff-4ecc-9875-58bb32cd33d1", {
        SubmissionDate: new Date(),
        Name: data.name,
        Phone: data.mobile,
        Email: value.email,
        PAN: data.pan,
        LoanAmount: value.loan_amount,
        CibilScore: data.credit_score,
        GSTNumber: value?.gst,
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(() => {
        setValue({
          name: "",
          email: "",
          gst: "",
          pan: "",
          mobile: "",
          loan_amount: "",
        })
        setTermsCheck(false)
        setTermsCheck2(false)
      })
    }

    catch (err) {
      console.log('Error updating Google Sheet:', err);
      setErrorPop(true);
      setErrorMsg(err.message);
      throw err;
    }
  };

  const languageList = ["English", "Hindi", "Marathi", "Gujarati", "Malayalam", "Telugu", "Kannada"];

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

  const handlePopClose = (e) => {
    if (e?.target?.id === "creditPop") {
      setPop(false)
      document.body.style.overflow = '';
      window.location.reload()
    }
  }


  //Emi calculate
  function calculateEMI(loanAmount, annualRate, tenureMonths) {
    // Convert annual interest rate to monthly interest rate
    let monthlyRate = annualRate / (12 * 100);

    // Calculate EMI using the formula
    let EMI = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
      (Math.pow(1 + monthlyRate, tenureMonths) - 1);

    // Calculate the total amount payable
    let totalAmount = EMI * tenureMonths;

    let emiDetails = [];
    let remainingPrincipal = loanAmount;

    for (let month = 1; month <= tenureMonths; month++) {
      let interestForMonth = remainingPrincipal * monthlyRate;
      let principalForMonth = EMI - interestForMonth;
      remainingPrincipal -= principalForMonth;

      emiDetails.push({
        month: month,
        principalComponent: principalForMonth.toFixed(2),
        interestComponent: interestForMonth.toFixed(2),
        totalEMI: EMI.toFixed(2)
      });
    }



    return {
      EMI: EMI.toFixed(2),
      totalAmount: totalAmount.toFixed(2),
      emiDetails: emiDetails
    };
  }

  const handelCalculate = () => {
    const tenureMonths = (loadDuration * 12) + monthDropVal;
    const result = calculateEMI(
      loonAmoutnValue,
      interestRates,
      tenureMonths
    )
    setResult(result);
  }

  const totalVal = Math.floor(result?.totalAmount * 1) || 0;
  const text = `₹ ${totalVal}`;


  useEffect(() => {
    if (value.name && value.email && value.pan && value.mobile && value.loan_amount && termsCheck && termsCheck2) {
      setSubmitBtn(false)
    } else {
      setSubmitBtn(true)
    }
  }, [value, termsCheck, termsCheck2])

  return (
    <>
      <Box className="homeContainer">
        {/* <CreditScorePop /> */}
        <Loader visiblety={loader} />
        <ErrorPop errorActive={errorPop} setErrorPop={setErrorPop} errorMsg={errorMsg} />
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
              <Box className="topBtnBox FappBtn">
                <AppBtn btnText={t("button.applyBtn")} width="222px" onClick={scrollToSection} />
              </Box>
            </Box>

            <Box id="InputSection" className="applyInputBox homeMainSubBox FappBtn">
              <Typography className='applyHeaderText'>{t("form.header1")}<span>{t("form.header2")}<br /> </span>
                {t("form.header3")}</Typography>

              <Box className="input2Box">
                <Box className="inputBox">
                  <input value={value.name} name='name' placeholder="Name *" onChange={handleChange} />
                  {value?.name ? null : <img src={userIcon} />}
                </Box>
                <Box className="inputBox">
                  <input value={value.email} type="email" placeholder="Email ID *" name='email' onChange={handleChange} />
                  {value?.email ? null : <img src={emailIcon} />}
                </Box>
              </Box>

              <Box className="inputBox">
                <input value={value.gst} placeholder="GST Number" name='gst' onChange={handleChange} />
                <img src={gstIcon} />
              </Box>

              <Box className="inputBox">
                <input value={value.pan} placeholder="PAN number*" name='pan' onChange={handleChange} />
                <img src={panIcon} />
              </Box>

              <Box className="inputBox">
                <input value={value.mobile} placeholder="Mobile number link to PAN*" name='mobile' onChange={handleChange} />
                <img src={callIcon} />
              </Box>

              <Box className="inputBox">
                <input value={value.loan_amount} placeholder="Loan Amount *" name='loan_amount' onChange={handleChange} />
                <img src={rupayIcon} />
              </Box>
              <AppBtn submitBtn={submitBtn} btnText={t("button.eligibilityBtn")} width="100%" onClick={SubmitData} />

              <Box className="check">
                <input value={termsCheck} type="checkBox" onChange={(e) => setTermsCheck(e.target.checked)} />
                <Typography>{t("form.check1")}</Typography>
              </Box>

              <Box className="check">
                <input value={termsCheck2} type="checkBox" onChange={(e) => setTermsCheck2(e.target.checked)} />
                <Typography>{t("form.check2")}</Typography>
              </Box>

              <Typography className='findtText'>
                {t("form.fromBottomText1")}<span>{t("form.fromBottomText2")}</span> <samp>{t("form.fromBottomText3")}</samp>
              </Typography>
            </Box>
          </Box>
        </Box>


        <Box className="featuresBox AppBox">
          <Box className="featureInnerBox">
            <img className='featuresBgLine' src={featuresBgLine} />
            <img className='featuresBgImg' src={featuresBgImg} />
            <Box className="loanTextBox FappBtn">
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
              <AppBtn btnText={t("button.applyBtn")} onClick={scrollToSection} />
            </Box>
          </Box>
        </Box>


        <Box className="calculatorSection AppBox">
          <Typography className='sectionBlueLabel'>{t("Calculator.calHeader")}</Typography>
          <Typography className='sectionBoldLabel'>{t("Calculator.calSubHeader")}</Typography>
          <Box className="calculatorBox">
            <img className='featuresBgLine' src={featuresBgLine} />

            <Box className="controller">
              <Typography className='calHeaderText'>{t("Calculator.calBoxHeader")}</Typography>
              <Typography className='subText'>{t("Calculator.calBoxSubHeader")}</Typography>

              <Box className="dateBox">

                <Box className="dateInputBox">
                  <Typography className='TimeDLabel'>Years</Typography>
                  <Box onClick={() => setYearDrop(!yearDrop)} className="dropInputBox">
                    <p style={{ marginLeft: "16px" }} className='lineBarLabel'>{loadDuration} {loadDuration === 1 ? " year" : " years"}</p>
                  </Box>
                  <Box className="DropBox" sx={{ display: yearDrop ? "flex" : 'none' }}>
                    {years?.map((el, i) => (
                      <Box onClick={() => {
                        setLoadDuration(el)
                        setYearDrop(false)
                      }} className="dropItem" key={i}>
                        <Typography>{el} {el === 1 ? " year" : " years"}</Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>

                <Box className="dateInputBox">
                  <Typography className='TimeDLabel'>Months</Typography>
                  <Box onClick={() => setMonthDrop(!monthDrop)} className="dropInputBox">
                    <p style={{ marginLeft: "16px" }} className='lineBarLabel'>{monthDropVal} {monthDropVal === 1 ? " month" : " months"}</p>
                  </Box>
                  <Box className="DropBox" sx={{ display: monthDrop ? "flex" : 'none' }}>
                    {months?.map((el, i) => (
                      <Box onClick={() => {
                        setMonthDropVal(el)
                        setMonthDrop(false)
                      }} className="dropItem" key={i}>
                        <Typography>{el} {el === 1 ? " month" : " months"}</Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>


              <Typography className='lineBarLabel'>{t("Calculator.calLine1")}</Typography>
              <Box className="lineBarBox">
                <Slider
                  valueLabelDisplay="auto"
                  slots={{ valueLabel: ValueLabelComponent }}
                  aria-label="custom thumb label"
                  min={100000}
                  max={2000000}
                  onChange={handleLoAmChange}
                  value={loonAmoutnValue}
                />
                <Box className="valueBox">
                  <input type="number" value={loonAmoutnValue} onChange={(e) => setLoonAmountValue(e.target.value)} max="2000000" />
                  <Typography className='lineBarLabel'>₹</Typography>
                </Box>
              </Box>

              <Typography className='lineBarLabel'>{t("Calculator.calLine2")}</Typography>
              <Box className="lineBarBox">
                <Slider
                  valueLabelDisplay="auto"
                  slots={{ valueLabel: ValueLabelComponent }}
                  aria-label="custom thumb label"
                  min={1}
                  max={25}
                  onChange={handleInterestReteChange}
                  value={interestRates}
                />
                <Box className="valueBox">
                  <input type="number" value={interestRates} onChange={(e) => setInterestRates(e.target.value)} />
                  <Typography className='lineBarLabel'>%</Typography>
                </Box>
              </Box>

              <Typography className='lineBarLabel'>{t("Calculator.calLine3")}</Typography>
              <Box className="lineBarBox">
                <Slider
                  valueLabelDisplay="auto"
                  slots={{ valueLabel: ValueLabelComponent }}
                  aria-label="custom thumb label"
                  min={0}
                  max={10}
                  onChange={handleLoanDurationChange}
                  value={loadDuration}
                />
                <Box className="valueBox">
                  <input type="number" value={loadDuration} onChange={(e) => setLoadDuration(e.target.value)} />
                  <Typography className='lineBarLabel'>Y</Typography>
                </Box>
              </Box>

              <Box className='calculateBtnBox'>
                <AppBtn bgColor="#2BE158" btnText="Calculate" onClick={handelCalculate} />
              </Box>

            </Box>


            <Box className="metter">
              <Box className="metterBg"></Box>
              <Box mt={2} className="greenCircul">
                <CircularProgressbar value={64} text={text} />
              </Box>
              <Typography className='totalAmoutLabel'>{t("Calculator.TAmount")}</Typography>
              <Box mt={3} className="emiIndecatorBox">
                <Box className="emiIndecatorItem">
                  <Box sx={{ background: "#2BE158" }}></Box>
                  <Typography className='lineBarLabel'>{t("Calculator.IPayable")}</Typography>
                </Box>
                <Box className="emiIndecatorItem">
                  <Box sx={{ background: "#FFFFFF" }}></Box>
                  <Typography className='lineBarLabel'>{t("Calculator.EAmount")}</Typography>
                </Box>
              </Box>

              {/* <Box className="metterTextRow">
                <Typography className='lineBarLabel'>{t("Calculator.EMIA")}</Typography>
                <Typography className='lineBarLabel'> ₹ 5,000*</Typography>
              </Box> */}
              <Box className="metterTextRow">
                <Typography className='lineBarLabel'>{t("Calculator.IPayable")}</Typography>
                <Typography className='lineBarLabel'>₹ {Math.floor(result?.totalAmount * 1) - loonAmoutnValue}*</Typography>
              </Box>
              <Box className="metterTextRow">
                <Typography className='lineBarLabel'>{t("Calculator.LDuration")}</Typography>
                <Typography className='lineBarLabel'>{loadDuration} Year {monthDropVal} Month</Typography>
              </Box>
              <Box className="borderLine"></Box>
              <Box className="metterTextRow trowMargin">
                <Typography className='lineBarLabel'>{t("Calculator.YEAmount")}</Typography>
                <Typography className='lineBarLabel'>₹ {result?.EMI}*</Typography>
              </Box>
              <AppBtn btnText={t("button.applyBtn")} bgColor="#2BE158" width="80%" onClick={scrollToSection} />
            </Box>
          </Box>
        </Box>


        <Box className="AppProcessSection AppBox">
          <Typography className='sectionBlueLabel'>{t("Process.PHeader")}</Typography>
          <Typography className='sectionBoldLabel'>{t("Process.PSubHeader")}</Typography>
          <Typography className='homeSubText'>{t("Process.PSubHeader2")}</Typography>

          <Box className="stepBox">
            <Box className="stepItem">
              <img className='stepBg' src={step1} />
              <Typography>{t("Process.Steps1")}</Typography>
              <span>{t("Process.StepsHeader1")}</span>
              <samp>{t("Process.StepsSubHeader1")}</samp>
            </Box>

            <Box className="stepItem">
              <img className='stepBg' src={step2} />
              <Typography>{t("Process.Steps2")}</Typography>
              <span>{t("Process.StepsHeader2")}</span>
              <samp>{t("Process.StepsSubHeader2")}</samp>
            </Box>

            <Box className="stepItem">
              <img className='stepBg' src={step3} />
              <Typography>{t("Process.Steps3")}</Typography>
              <span>{t("Process.StepsHeader3")}</span>
              <samp>{t("Process.StepsSubHeader3")}</samp>
            </Box>
          </Box>
        </Box>


        <Box className="chooseUsBox AppBox">
          <Typography className='sectionBlueLabel'>{t("Choose.chooseHeader")}</Typography>
          <Typography className='sectionBoldLabel'>{t("Choose.chooseSubHeader")}<br />{t("Choose.chooseSubHeader2")}</Typography>

          <Box className="chooseCardBox">
            <img className='featuresBgLine' src={featuresBgLine} />
            {choose_Data?.map((el, i) => (
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
            <Typography className='sectionBoldLabel marginText'>{t("Eligibility.EHeader")}</Typography>
            <Typography className='homeSubText'>{t("Eligibility.EHeaderSub")}</Typography>
            <Typography className='appSubHeaderText'>{t("Eligibility.ELabelA1")}</Typography>
            <Box className="rowBox">
              <img src={blackStar} />
              <Typography>{t("Eligibility.ELA2")}</Typography>
            </Box>
            <Box className="rowBox">
              <img src={blackStar} />
              <Typography>{t("Eligibility.ELA3")}</Typography>
            </Box>
            <Box className="rowBox">
              <img src={blackStar} />
              <Typography>{t("Eligibility.ELA4")}</Typography>
            </Box>
            <Typography className='appSubHeaderText'>{t("Eligibility.ELabelB1")}</Typography>
            <Box className="rowBox">
              <img src={blackStar} />
              <Typography>{t("Eligibility.ELB2")}</Typography>
            </Box>
            <Box className="rowBox">
              <img src={blackStar} />
              <Typography>{t("Eligibility.ELB3")}</Typography>
            </Box>
            <Box className="rowBox">
              <img src={blackStar} />
              <Typography>{t("Eligibility.ELB4")}</Typography>
            </Box>
            <Box className="rowBox">
              <img src={blackStar} />
              <Typography>{t("Eligibility.ELB5")}</Typography>
            </Box>
            {/* <Typography className='homeSubText '>{t("Eligibility.ENoteText")}</Typography> */}
            <Typography className='appSubHeaderText'>{t("Eligibility.EDis")}:  <span>{t("Eligibility.EDisLabel")}</span></Typography>
          </Box>
        </Box>



        <img className='storiesBg' src={storesBg} />
        <Box className="StoriesSection AppBox">
          <Typography className='sectionBlueLabel'>{t("Testimonials.THeader")}</Typography>
          <Typography className='sectionBoldLabel'>{t("Testimonials.Tcs")}</Typography>
          <Box className="croselBox">
            <Box className="storiesCard">
              <Box className="bgBox"></Box>
              <Box className="starBox">
                <img src={stars} />
              </Box>
              <Box className="cote"><img src={cote} /></Box>
              <Typography>{t("Testimonials.TCardLabe1")}</Typography>
              <span>{t("Testimonials.TCardL1")}</span>
              <samp>{t("Testimonials.TCBL1")}</samp>
            </Box>

            <Box className="storiesCard">
              <Box className="bgBox"></Box>
              <Box className="starBox">
                <img src={stars} />
              </Box>
              <Box className="cote"><img src={cote} /></Box>
              <Typography>{t("Testimonials.TCardLabe2")}</Typography>
              <span>{t("Testimonials.TCardL2")}</span>
              <samp>{t("Testimonials.TCBL1")}</samp>
            </Box>

            <Box className="storiesCard">
              <Box className="bgBox"></Box>
              <Box className="starBox">
                <img src={stars} />
              </Box>
              <Box className="cote"><img src={cote} /></Box>
              <Typography>{t("Testimonials.TCardLabe3")}</Typography>
              <span>{t("Testimonials.TCardL3")}</span>
              <samp>{t("Testimonials.TCBL1")}</samp>
            </Box>
          </Box>
        </Box>



        <Box className="questionSection AppBox">
          <Box className="questionBox">
            <Typography className='sectionBlueLabel'>{t("FAQS.FAQS")}</Typography>
            <Typography className='sectionBoldLabel'>{t("FAQS.FHeader")}</Typography>

            <Box className={drop1 ? "colapsBox colapsBoxActive" : "colapsBox"} onClick={() => setDrop1(!drop1)} >
              <Box className={drop1 ? "colapsDrop colapsDropActive" : "colapsDrop"}>
                <Typography>{t("FAQS.FAQSLabel1")}</Typography>
                <img src={dropIconB} style={{ transform: drop1 ? "rotate(0deg)" : "rotate(-180deg)" }} />
              </Box>
              <Box className="colapsTextArea">
                <p>{t("FAQS.FAQSLabelSub1")}</p>
              </Box>
            </Box>

            <Box className={drop2 ? "colapsBox colapsBoxActive" : "colapsBox"} onClick={() => setDrop2(!drop2)} >
              <Box className={drop2 ? "colapsDrop colapsDropActive" : "colapsDrop"}>
                <Typography>{t("FAQS.FAQSLabel2")}</Typography>
                <img src={dropIconB} style={{ transform: drop2 ? "rotate(0deg)" : "rotate(-180deg)" }} />
              </Box>
              <Box className="colapsTextArea">
                <p>{t("FAQS.FAQSLabelSub2")}</p>
              </Box>
            </Box>

            <Box className={drop3 ? "colapsBox colapsBoxActive" : "colapsBox"} onClick={() => setDrop3(!drop3)} >
              <Box className={drop3 ? "colapsDrop colapsDropActive" : "colapsDrop"}>
                <Typography>{t("FAQS.FAQSLabel3")}</Typography>
                <img src={dropIconB} style={{ transform: drop3 ? "rotate(0deg)" : "rotate(-180deg)" }} />
              </Box>
              <Box className="colapsTextArea">
                <p>{t("FAQS.FAQSLabelSub3")}</p>
              </Box>
            </Box>

            <Box className={drop4 ? "colapsBox colapsBoxActive" : "colapsBox"} onClick={() => setDrop4(!drop4)} >
              <Box className={drop4 ? "colapsDrop colapsDropActive" : "colapsDrop"}>
                <Typography>{t("FAQS.FAQSLabel4")}</Typography>
                <img src={dropIconB} style={{ transform: drop4 ? "rotate(0deg)" : "rotate(-180deg)" }} />
              </Box>
              <Box className="colapsTextArea">
                <p>{t("FAQS.FAQSLabelSub4")}</p>
              </Box>
            </Box>

            <Box className={drop5 ? "colapsBox colapsBoxActive" : "colapsBox"} onClick={() => setDrop5(!drop5)} >
              <Box className={drop5 ? "colapsDrop colapsDropActive" : "colapsDrop"}>
                <Typography>{t("FAQS.FAQSLabel5")}</Typography>
                <img src={dropIconB} style={{ transform: drop5 ? "rotate(0deg)" : "rotate(-180deg)" }} />
              </Box>
              <Box className="colapsTextArea">
                <p>{t("FAQS.FAQSLabelSub5")}</p>
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
