import { Button } from '@mui/material';
import "./style.css"


export const AppBtn = ({ btnText, width, bgColor, onClick }) => {
  return (
    <Button onClick={onClick} sx={{ width: width, background: bgColor || "#305ccd" }} variant="contained" className='appBtn'>
      {btnText}
    </Button>
  )
}