import { Button } from '@mui/material';
import "./style.css"


export const AppBtn = ({ btnText }) => {
  return (
    <Button variant="contained" className='appBtn'>
      {btnText}
    </Button>
  )
}