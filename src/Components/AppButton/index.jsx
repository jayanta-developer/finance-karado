import { Button } from '@mui/material';
import "./style.css"


export const AppBtn = ({ btnText, width, bgColor, onClick, submitBtn }) => {
  return (
    <Button disabled={submitBtn} onClick={onClick} sx={{ width: width, background: bgColor || "#305ccd" }} variant="contained" className='appBtn'>
      {btnText}
    </Button>
  )
}

// export const GoTop = () => {
//   return window.scrollTo({ top: "0", behavior: "smooth" });
// };

export const scrollToSection = () => {
  const section = document.getElementById('InputSection');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};