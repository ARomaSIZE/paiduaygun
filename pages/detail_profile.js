import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { COLORS } from "../values/colors";
import { Grid } from "@mui/material";
import { useState } from "react";
import Rating from '@mui/material/Rating';

export default function Detail_profile() {
   
    const username = 'aimaim';
    const password ='********';
    const name = 'Thidawan';
    const lastname = 'Chaichana';
    const gender = 'Female';
    const age = '16';
    const email ='aimaim/win@gmail.com'
    const phone = '082547111';
    const contact = 'facebook:Aumaim Thidawan';
    const address = '333 M.1'
    const idcard = 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2';
    const license = 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2';

    //Rating
    const [valueRating, setValueRating] = useState(4.2);
    const reviwer = 15;
    

    return (
        <>
           {
             <Container maxWidth="xl" sx={{ marginTop: 5 }}>

             <Box
                 sx={{
                     display: "flex",
                     justifyContent: "left",
                     marginLeft: 50,
                     marginBottom: 5,
                 }}
             >
                 <Grid container>
                     <Grid item xs={3}>
                         <div><Typography sx={{ color: COLORS.grey }}>overall Rating</Typography></div>
                         <div ><Typography variant="h3">{valueRating}</Typography> </div>
                     </Grid>
                     <Grid item xs={9}>
                         <div> <Rating name="read-only"
                             value={valueRating}
                             size="large"
                             sx={{ fontSize: "3rem" }}
                             readOnly /></div>
                         <div ><Typography sx={{ color: COLORS.grey, marginLeft: 2 }}>based on {reviwer} reviews</Typography> </div>

                     </Grid>

                 </Grid>
             </Box>

             <Box
                 sx={{ display: "flex", justifyContent: "center", marginBottom: 2 }}
             >
                 <Box>
                     <Typography
                         variant="body1"
                         color="initial"
                         sx={{ fontWeight: 600, fontSize: 16 }}
                     >
                         Username
                     </Typography>
                     <Box sx={{ border: 1, borderColor: 'grey.400', borderRadius: 1 }}>
                         <Typography
                             variant="body1"
                             sx={{ fontSize: 16, p: 2, width: '19rem', color: COLORS.grey }}
                         >
                           {username} 
                         </Typography>

                     </Box>
                 </Box>

                 <Box sx={{ marginLeft: 10 }}>
                     <Typography
                         variant="body1"
                         color="initial"
                         sx={{ fontWeight: 600, fontSize: 16 }}
                     >
                         Password
                     </Typography>
                     <Box sx={{ border: 1, borderColor: 'grey.400', borderRadius: 1 }}>
                         <Typography
                             variant="body1"
                             sx={{ fontSize: 16, p: 2, width: '19rem', color: COLORS.grey }}
                         >
                             {password}
                         </Typography>

                     </Box>
                 </Box>
             </Box>

             <Box
                 sx={{ display: "flex", justifyContent: "center", marginBottom: 2 }}
             >
                 <Box>
                     <Typography
                         variant="body1"
                         color="initial"
                         sx={{ fontWeight: 600, fontSize: 16 }}
                     >
                         Name
                     </Typography>
                     <Box sx={{ border: 1, borderColor: 'grey.400', borderRadius: 1 }}>
                         <Typography
                             variant="body1"
                             sx={{ fontSize: 16, p: 2, width: '19rem', color: COLORS.grey }}
                         >
                             {name}
                         </Typography>

                     </Box>
                 </Box>

                 <Box sx={{ marginLeft: 10 }}>
                 <Typography
                         variant="body1"
                         color="initial"
                         sx={{ fontWeight: 600, fontSize: 16 }}
                     >
                         Lastname
                     </Typography>
                     <Box sx={{ border: 1, borderColor: 'grey.400', borderRadius: 1 }}>
                         <Typography
                             variant="body1"
                             sx={{ fontSize: 16, p: 2, width: '19rem', color: COLORS.grey }}
                         >
                             {lastname}
                         </Typography>

                     </Box>
                 </Box>
             </Box>

             <Box
                 sx={{ display: "flex", justifyContent: "center", marginBottom: 2 }}
             >
                 <Box>
                 <Typography
                         variant="body1"
                         color="initial"
                         sx={{ fontWeight: 600, fontSize: 16 }}
                     >
                         Gender
                     </Typography>
                     <Box sx={{ border: 1, borderColor: 'grey.400', borderRadius: 1 }}>
                         <Typography
                             variant="body1"
                             sx={{ fontSize: 16, p: 2, width: '19rem', color: COLORS.grey }}
                         >
                             {gender}
                         </Typography>

                     </Box>
                 </Box>

                 <Box sx={{ marginLeft: 10 }}>
                 <Typography
                         variant="body1"
                         color="initial"
                         sx={{ fontWeight: 600, fontSize: 16 }}
                     >
                         Age
                     </Typography>
                     <Box sx={{ border: 1, borderColor: 'grey.400', borderRadius: 1 }}>
                         <Typography
                             variant="body1"
                             sx={{ fontSize: 16, p: 2, width: '19rem', color: COLORS.grey }}
                         >
                             {age}
                         </Typography>

                     </Box>
                 </Box>
             </Box>

             <Box
                 sx={{ display: "flex", justifyContent: "center", marginBottom: 2 }}
             >
                 <Box>
                 <Typography
                         variant="body1"
                         color="initial"
                         sx={{ fontWeight: 600, fontSize: 16 }}
                     >
                         Email
                     </Typography>
                     <Box sx={{ border: 1, borderColor: 'grey.400', borderRadius: 1 }}>
                         <Typography
                             variant="body1"
                             sx={{ fontSize: 16, p: 2, width: '19rem', color: COLORS.grey }}
                         >
                             {email}
                         </Typography>

                     </Box>
                 </Box>

                 <Box sx={{ marginLeft: 10 }}>
                 <Typography
                         variant="body1"
                         color="initial"
                         sx={{ fontWeight: 600, fontSize: 16 }}
                     >
                         Phone
                     </Typography>
                     <Box sx={{ border: 1, borderColor: 'grey.400', borderRadius: 1 }}>
                         <Typography
                             variant="body1"
                             sx={{ fontSize: 16, p: 2, width: '19rem', color: COLORS.grey }}
                         >
                             {phone}
                         </Typography>

                     </Box>
                 </Box>
             </Box>

             <Box
                 sx={{ display: "flex", justifyContent: "center", marginBottom: 2 }}
             >
                 <Box>
                 <Typography
                         variant="body1"
                         color="initial"
                         sx={{ fontWeight: 600, fontSize: 16 }}
                     >
                         Other contact
                     </Typography>
                     <Box sx={{ border: 1, borderColor: 'grey.400', borderRadius: 1 }}>
                         <Typography
                             variant="body1"
                             sx={{ fontSize: 16, p: 2, width: '19rem', color: COLORS.grey }}
                         >
                             {contact}
                         </Typography>

                     </Box>
                 </Box>

                 <Box sx={{ marginLeft: 10 }}>
                 <Typography
                         variant="body1"
                         color="initial"
                         sx={{ fontWeight: 600, fontSize: 16 }}
                     >
                         Address
                     </Typography>
                     <Box sx={{ border: 1, borderColor: 'grey.400', borderRadius: 1 }}>
                         <Typography
                             variant="body1"
                             sx={{ fontSize: 16, p: 2, width: '19rem', color: COLORS.grey }}
                         >
                             {address}
                         </Typography>

                     </Box>
                 </Box>
             </Box>

             <Box
                 sx={{
                     display: "flex",
                     justifyContent: "left",
                     marginLeft: 50.5,
                     marginBottom: 2,
                 }}
             >
                 <Typography variant="body1" color="initial" sx={{ fontWeight: 600 }}>
                     Import information
                 </Typography>
             </Box>

             <Box sx={{ display: "flex", justifyContent: "center", marginBottom: '5rem' }}>
                 <Box>
                     <Typography
                         variant="body1"
                         color="initial"
                         sx={{ fontWeight: 600, fontSize: 16 }}
                     >
                         ID Card
                     </Typography>
                     <Box
                         component="img"
                         sx={{
                             height: 210,
                             width: 300,
                             // // maxHeight: { xs: 200, md: 167 },
                             // maxWidth: { xs: 100, md: 100 },
                         }}
                         src={idcard}
                     />
                 </Box>

                 <Box sx={{ marginLeft: 10 }}>
                     <Typography
                         variant="body1"
                         color="initial"
                         sx={{ fontWeight: 600, fontSize: 16 }}
                     >
                         Driver License
                     </Typography>
                     <Box
                         component="img"
                         sx={{
                             height: 210,
                             width: 300,
                             // maxHeight: { xs: 233, md: 167 },
                             // maxWidth: { xs: 350, md: 250 },
                         }}
                         src={license}
                     />
                 </Box>
             </Box>
         </Container>
           }
        </>
    );
}
