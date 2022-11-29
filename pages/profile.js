import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { COLORS } from "../values/colors";

export default function Profile() {
   const status =1;
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
   
   return (
      <>
         <Container maxWidth="xl" sx={{ marginTop: 5 }}>

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
                  <Box>
                     {status == 0 ? <TextField
                        id="outlined-basic"
                        variant="outlined"
                        sx={{ width: 300 }}
                     // disabled={true}
                     /> : <TextField
                        id="outlined-basic"
                        variant="outlined"
                        sx={{ width: 300 }}
                        disabled={true}
                        defaultValue={username}
                        InputProps={{
                          readOnly: true,
                        }}
                     />}
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
                  <Box>
                  {status == 0 ? <TextField
                        id="outlined-basic"
                        variant="outlined"
                        sx={{ width: 300 }}
                     // disabled={true}
                     /> : <TextField
                        id="outlined-basic"
                        variant="outlined"
                        sx={{ width: 300 }}
                        disabled={true}
                        defaultValue={password}
                        InputProps={{
                          readOnly: true,
                        }}
                     />}
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
                     Firstname
                  </Typography>
                  <Box>
                  {status == 0 ? <TextField
                        id="outlined-basic"
                        variant="outlined"
                        sx={{ width: 300 }}
                     // disabled={true}
                     /> : <TextField
                        id="outlined-basic"
                        variant="outlined"
                        sx={{ width: 300 }}
                        disabled={true}
                        defaultValue={name}
                        InputProps={{
                          readOnly: true,
                        }}
                     />}
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
                  <Box>
                  {status == 0 ? <TextField
                        id="outlined-basic"
                        variant="outlined"
                        sx={{ width: 300 }}
                     // disabled={true}
                     /> : <TextField
                        id="outlined-basic"
                        variant="outlined"
                        sx={{ width: 300 }}
                        disabled={true}
                        defaultValue={lastname}
                        InputProps={{
                          readOnly: true,
                        }}
                     />}
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
                     GENDER
                  </Typography>
                  <Box>
                  {status == 0 ? <TextField
                        id="outlined-basic"
                        variant="outlined"
                        sx={{ width: 300 }}
                     // disabled={true}
                     /> : <TextField
                        id="outlined-basic"
                        variant="outlined"
                        sx={{ width: 300 }}
                        disabled={true}
                        defaultValue={gender}
                        InputProps={{
                          readOnly: true,
                        }}
                     />}
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
                  <Box>
                  {status == 0 ? <TextField
                        id="outlined-basic"
                        variant="outlined"
                        sx={{ width: 300 }}
                     // disabled={true}
                     /> : <TextField
                        id="outlined-basic"
                        variant="outlined"
                        sx={{ width: 300 }}
                        disabled={true}
                        defaultValue={age}
                        InputProps={{
                          readOnly: true,
                        }}
                     />}
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
                  <Box>
                  {status == 0 ? <TextField
                        id="outlined-basic"
                        variant="outlined"
                        sx={{ width: 300 }}
                     // disabled={true}
                     /> : <TextField
                        id="outlined-basic"
                        variant="outlined"
                        sx={{ width: 300 }}
                        disabled={true}
                        defaultValue={email}
                        InputProps={{
                          readOnly: true,
                        }}
                     />}
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
                  <Box>
                  {status == 0 ? <TextField
                        id="outlined-basic"
                        variant="outlined"
                        sx={{ width: 300 }}
                     // disabled={true}
                     /> : <TextField
                        id="outlined-basic"
                        variant="outlined"
                        sx={{ width: 300 }}
                        disabled={true}
                        defaultValue={phone}
                        InputProps={{
                          readOnly: true,
                        }}
                     />}
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
                  <Box>
                  {status == 0 ? <TextField
                        id="outlined-basic"
                        variant="outlined"
                        sx={{ width: 300 }}
                     // disabled={true}
                     /> : <TextField
                        id="outlined-basic"
                        variant="outlined"
                        sx={{ width: 300 }}
                        disabled={true}
                        defaultValue={contact}
                        InputProps={{
                          readOnly: true,
                        }}
                     />}
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
                  <Box>
                  {status == 0 ? <TextField
                        id="outlined-basic"
                        variant="outlined"
                        sx={{ width: 300 }}
                     // disabled={true}
                     /> : <TextField
                        id="outlined-basic"
                        variant="outlined"
                        sx={{ width: 300 }}
                        disabled={true}
                        defaultValue={address}
                        InputProps={{
                          readOnly: true,
                        }}
                     />}
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

            <Box sx={{ display: "flex", justifyContent: "center" }}>
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
                             // maxHeight: { xs: 233, md: 167 },
                             // maxWidth: { xs: 350, md: 250 },
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
                     Driver Licaense
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

            <Button
               variant="contained"
               sx={{
                  textTransform: "none",
                  boxShadow: "none",
                  width: 120,
                  backgroundColor: COLORS.B3,
                  fontWeight: 600,
                  marginLeft: 50.5,
                  marginTop: 2
               }}
               href="/login"
            >
               Edit profile
            </Button>
         </Container>
      </>
   );
}
