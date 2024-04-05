import { Button } from '@mui/material';
import "./style.css"


export const AppBtn = ({ btnText, width }) => {
  return (
    <Button sx={{ width: width }} variant="contained" className='appBtn'>
      {btnText}
    </Button>
  )
}