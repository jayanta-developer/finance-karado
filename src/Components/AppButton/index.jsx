import { Button } from '@mui/material';
import "./style.css"


export const AppBtn = ({ btnText, width, bgColor }) => {
  return (
    <Button sx={{ width: width, background: bgColor || "#305ccd" }} variant="contained" className='appBtn'>
      {btnText}
    </Button>
  )
}