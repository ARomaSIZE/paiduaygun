import { Box, Grid, Divider, Paper, Typography, Button, Checkbox, Link } from "@mui/material";
import Stack from '@mui/material/Stack';
import { COLORS } from "../../values/colors";

const NavsiadProfile = ( ) => {
  return(<>
  <Stack spacing={3}>
    <Link href="/profile" sx={{textDecoration:'none'}}><Typography sx={{fontSize:25,color: COLORS.B2 , fontWeight:600 }}>Personal data</Typography></Link>
    <Link href="/history_booking" sx={{textDecoration:'none'}}><Typography sx={{fontSize:25,color: COLORS.B2 , fontWeight:600}}>History post</Typography></Link>
    <Link href="/history_post" sx={{textDecoration:'none'}}><Typography sx={{fontSize:25,color: COLORS.B2 , fontWeight:600}}>History booking</Typography></Link>
 </Stack>
</>)
}

export default NavsiadProfile
