import { Container, Grid ,Box} from "@mui/material"
import Typography from "@mui/material/Typography";
import { color } from "@mui/system";
import { COLORS } from "../values/colors";
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
export default function Contact() {
   return (
      <>
         <Container style={{marginBottom:'3rem'}}>
         <Typography variant="h4" sx={{fontWeight:'bold',marginTop:'3rem',marginBottom:'3rem'}} align="center">Let's Start a Conversation</Typography>
            <Grid container spacing={10}>
               <Grid item xs={6} >
                  <div><Typography variant="h6" sx={{fontWeight:'bold',marginTop:'2rem'}}>Ask how we can help you:</Typography></div>
                  <div><Typography sx={{fontWeight:'bold',marginTop:'2rem'}}>See our platform in action</Typography></div>
                  <div><Typography sx={{color:COLORS.grey}}>Request a personalized demo.or <span style={{color:'blue'}}>request a trial</span>of TUNE's partner marking platform.</Typography></div>
                  <div><Typography sx={{fontWeight:'bold',marginTop:'2rem'}}>Master performance marketing</Typography></div>
                  <div><Typography sx={{color:COLORS.grey}}>From <span style={{color:'blue'}}>PAIDUAYGUN</span>platform. learn how to making friend and contact. serch car for sharing travel.</Typography></div>
                  <div><Typography sx={{fontWeight:'bold',marginTop:'2rem'}}>Explore life at PAIDUAYGUN</Typography></div>
                  <div><Typography sx={{color:COLORS.grey}}>Search <span style={{color:'blue'}}>option positions</span>read about company culture and values and explore our chaitable initiative.</Typography></div>
                  <div><Typography variant="h6" sx={{fontWeight:'bold',marginTop:'3rem'}}>Points of Contact</Typography></div>
                  <div><Typography sx={{fontWeight:'500',marginTop:'2rem'}}>T.H | PAIDUAYGUN</Typography></div>
                  <div><Typography sx={{color:COLORS.grey}}>Meuang ChiangRai- Rd.Ep 57100</Typography></div>
                  <div><Typography sx={{color:COLORS.grey}}>Thailand</Typography></div>
                  <div><Typography sx={{fontWeight:'bold',marginTop:'2rem'}}>Information and Sales</Typography></div>
                  <div><Typography sx={{color:'blue'}}>paiduayguncarpool@gmail.com</Typography></div>
                  <div><Typography sx={{fontWeight:'bold',marginTop:'2rem'}}>Support</Typography></div>
                  <div><Typography sx={{color:'blue'}}>support@paiduaydun.com</Typography></div>
                  <div><Typography sx={{fontWeight:'bold',marginTop:'2rem'}}>Verification of Employment</Typography></div>
                  <div><Typography sx={{color:'blue'}}>employment@consult.com</Typography></div>
                  {/* <div><Typography variant="h6" sx={{fontWeight:'bold',marginTop:'3rem'}}>Additional Office Location</Typography></div>
                  <div><Typography sx={{fontWeight:'500',marginTop:'2rem'}}>Thailand</Typography></div>
                  <div><Typography sx={{color:COLORS.grey}}>413/22 Tha Sud, Chiang Rai 57100</Typography></div> */}


               </Grid>
               <Grid item xs={6}>
               <div><Typography sx={{fontWeight:'500',marginTop:'2rem'}}>Please note:all fields are requires.</Typography></div>
               <div><Typography sx={{fontWeight:'500',marginTop:'2rem'}}>Name</Typography></div>
               <div><TextField id="outlined-basic"  variant="outlined" fullWidth/></div>
               <div><Typography sx={{fontWeight:'500',marginTop:'0.5rem'}}>Company Name</Typography></div>
               <div><TextField id="outlined-basic"  variant="outlined" fullWidth/></div>
               <div><Typography sx={{fontWeight:'500',marginTop:'0.5rem'}}>Company Email</Typography></div>
               <div><TextField id="outlined-basic"  variant="outlined" fullWidth/></div>
               <div><Typography sx={{fontWeight:'500',marginTop:'0.5rem'}}>Job Title</Typography></div>
               <div><TextField id="outlined-basic"  variant="outlined" fullWidth/></div>
               <div><Typography sx={{fontWeight:'500',marginTop:'0.5rem'}}>Country</Typography></div>
               <div><TextField id="outlined-basic"  variant="outlined" fullWidth/></div>
               {/* <div><Typography sx={{fontWeight:'500',marginTop:'0.5rem'}}>Business Type</Typography></div>
               <div><TextField id="outlined-basic"  variant="outlined" fullWidth/></div> */}
               <div><Typography sx={{fontWeight:'500',marginTop:'0.5rem'}}>Comment</Typography></div>
               <div><TextField id="outlined-basic"  variant="outlined" fullWidth  multiline rows={2}/></div>
               <Box sx={{display: 'flex'}}><Checkbox {...label} defaultChecked /><Typography sx={{color:COLORS.grey,marginTop:2,fontSize:'14px'}}>I'd like to receive more information about PAIDUAYGUN. I understand and agree to the <span style={{color:'blue'}}>privacy policy.</span></Typography></Box>  
               <Button variant="contained" sx={{backgroundColor:'blue',marginTop:'2rem',width:'100%'}}>SEND MESSAGE</Button>


               </Grid>
            </Grid>
         </Container>
      </>
   )
}
