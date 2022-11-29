import { Box, Grid, Container, Divider, Paper, Typography, Button, Card, Checkbox } from "@mui/material";
import { useState } from "react";
import { COLORS } from "../values/colors";
import Image from 'next/image';
import profile_boy from "../imgs/profile_boy.jpg"
import car_detail from "../imgs/car_detail.png"
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';   //car type
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined'; //License Car:
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined'; //pet
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined'; //music
import SmokingRoomsOutlinedIcon from '@mui/icons-material/SmokingRoomsOutlined';  //smoking
import EventSeatOutlinedIcon from '@mui/icons-material/EventSeatOutlined'; //seat
import ChildCareOutlinedIcon from '@mui/icons-material/ChildCareOutlined'; //baby
import LuggageOutlinedIcon from '@mui/icons-material/LuggageOutlined'; //Trunk space
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; //check
import CircleIcon from '@mui/icons-material/Circle';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';

import StarIcon from '@mui/icons-material/Star'; //star

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import CarInfo from "../src/components/CarInfo";
import Other_detail from "../src/components/Other_detail.js";


import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';




export default function detail_feed() {
    const phone = '02811212';
    const email = 'aimaim.3112@gmail.com';
    const otherContact = 'Facebook:Aumaim';

    const [open, setOpen] = useState(false);

    const handleClickOpenContact = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Box sx={{ backgroundColor: COLORS.B2 }}>
                <Grid container color={COLORS.F4} padding={5} >
                    <Grid item xs={2} marginTop={10} marginLeft={8}>
                        <PersonOutlineOutlinedIcon />2 seates available
                    </Grid>

                    <Grid item xs={12} marginLeft={8}>
                        <h1>Meaung Chiang mai   <ArrowForwardIosOutlinedIcon />   Meaung Mae hong sorn</h1>
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{ marginTop: 5, marginLeft: 12, marginRight: 12, marginBottom: 12 }}>
                <Grid container spacing={5}>
                    <Grid item xs={8} wrap='nowrap'>
                        <Grid container marginBottom={1}>
                            <Grid item sx={2}>
                                <span style={{ fontWeight: 'bold' }}> SCHEDULE INFO </span>
                            </Grid>
                            <Grid item sx={10}>
                                <HorizontalRuleIcon width={100}></HorizontalRuleIcon>
                            </Grid>

                        </Grid>

                        <CalendarTodayOutlinedIcon sx={{ color: COLORS.B2 }} />  <span >Date & time:</span>  <span style={{ color: COLORS.grey }}> 06/03/2022 @16:00    to     07/03/2022 @15:00</span>
                        <Grid container marginTop={5} marginBottom={1}>
                            <Grid item sx={2}>
                                <span style={{ fontWeight: 'bold' }}> DESTINATION INFO</span>
                            </Grid>
                            <Grid item sx={10}>
                                <HorizontalRuleIcon width={100}></HorizontalRuleIcon>
                            </Grid>

                        </Grid>
                        {/* <div><span style={{ fontWeight: 'bold' }}> DESTINATION INFO</span></div> */}
                        <Box ><PlaceOutlinedIcon sx={{ color: COLORS.grey2 }} /> <span>16:00</span> <span>Meaung Chiang mai</span>  </Box>
                        <Box><PlaceOutlinedIcon sx={{ color: COLORS.B2 }} /> <span>18:00</span> <span>Mae hong sorn</span>  </Box>

                        <Grid container marginTop={5} marginBottom={1}>
                            <Grid item sx={2}>
                                <span style={{ fontWeight: 'bold' }}> CAR INFO </span>
                            </Grid>
                            <Grid item sx={10}>
                                <HorizontalRuleIcon width={100}></HorizontalRuleIcon>
                            </Grid>

                        </Grid>
                        {/* <div><span style={{ fontWeight: 'bold' }}> CAR INFO</span></div> */}
                        <Grid><CarInfo /></Grid>

                        <Grid container marginTop={5} marginBottom={1}>
                            <Grid item sx={2}>
                                <span style={{ fontWeight: 'bold' }}> OTHER DETAILS </span>
                            </Grid>
                            <Grid item sx={10}>
                                <HorizontalRuleIcon width={100}></HorizontalRuleIcon>
                            </Grid>

                        </Grid>
                        {/* <div><span style={{ fontWeight: 'bold' }}> OTHER DETAILS</span></div> */}
                        <Other_detail />


                        <Grid container marginTop={5} marginBottom={1}>
                            <Grid item sx={2}>
                                <span style={{ fontWeight: 'bold' }}> DRIVER INFO </span>
                            </Grid>
                            <Grid item sx={10}>
                                <HorizontalRuleIcon width={100}></HorizontalRuleIcon>
                            </Grid>

                        </Grid>

                        {/* <div><span style={{ fontWeight: 'bold' }}> DRIVER INFO</span></div> */}
                        <Grid container spacing={2}>
                            <Grid item xs={2}>
                                <div style={{ borderRadius: '3px', overflow: 'hidden', width: '130px', height: '130px' }}>
                                    <Image
                                        src={profile_boy}
                                        alt="profile"
                                        width={130}
                                        height={130}
                                    />

                                </div>

                            </Grid>
                            <Grid item xs={10}>
                                <Grid container direction="row" justifyContent="space-between" alignItems="center" marginBottom={2}>
                                    <Grid item>
                                        <Typography style={{ fontWeight: 'bold' }} variant="h5">Taeo Maxview. <CheckCircleIcon sx={{ color: COLORS.success }} /></Typography>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="outlined" style={{ color: COLORS.B2 }} onClick={handleClickOpenContact}>
                                            Contact
                                        </Button>
                                    </Grid>
                                </Grid>

                                <Dialog
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="alert-dialog-title"
                                    aria-describedby="alert-dialog-description"
                                >

                                    <DialogContent>
                                        <DialogContentText id="alert-dialog-description">
                                            <Typography sx={{color:'black'}}>CONTACT</Typography>
                                            <Divider></Divider>
                                            <Box sx={{  borderColor: 'grey.400', borderRadius: 1 ,backgroundColor:COLORS.F4,marginTop:'1rem'}}>
                                                <Typography
                                                    variant="body1"
                                                    sx={{ fontSize: 16, p: 2, width: '19rem', color: COLORS.grey }}
                                                >
                                                 <Box sx={{ display: 'flex' }}> <LocalPhoneIcon sx={{color:COLORS.B3,marginRight:'15px'}}/>  <Typography sx={{}}>{phone}</Typography> </Box>
                                                </Typography>
                                            </Box>
                                            <Box sx={{ backgroundColor:COLORS.F4, borderColor: 'grey.400', borderRadius: 1 ,marginTop:'0.5rem'}}>
                                                <Typography
                                                    variant="body1"
                                                    sx={{ fontSize: 16, p: 2, width: '19rem', color: COLORS.grey }}
                                                >
                                                 <Box sx={{ display: 'flex' }}> <MailOutlineIcon sx={{color:COLORS.B3,marginRight:'15px'}}/>  <Typography sx={{}}>{email}</Typography> </Box>
                                                </Typography>
                                            </Box>
                                            
                                            <Box sx={{ backgroundColor:COLORS.F4, borderColor: 'grey.400', borderRadius: 1,marginTop:'0.5rem' }}>
                                                <Typography
                                                    variant="body1"
                                                    sx={{ fontSize: 16, p: 2, width: '19rem', color: COLORS.grey }}
                                                >
                                                 <Box sx={{ display: 'flex' }} > <ContactMailOutlinedIcon sx={{color:COLORS.B3 ,marginRight:'15px'}}/>  <Typography >{otherContact}</Typography> </Box>
                                                </Typography>
                                            </Box>

                                            <Button variant="contained" sx={{ color: COLORS.B1,marginTop:'1rem' }} onClick={handleClose} autoFocus fullWidth>OK</Button>

                                        </DialogContentText>
                                    </DialogContent>
                                    
                                </Dialog>
                                {/* Dialog cantact */}

                                <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
                                <Grid container direction="row" alignItems="center" spacing={5}  >
                                    <Grid item>
                                        <span>Gender : Male</span>
                                    </Grid>
                                    <Grid item>
                                        <span>Age : 23 years old</span>
                                    </Grid>
                                    <Grid item>
                                        <StarIcon sx={{ color: COLORS.warign }} /> 4.3
                                    </Grid>
                                </Grid>
                                <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
                                <span style={{ color: COLORS.grey }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam,quis nostrud exercitation ullamco.
                                </span>
                            </Grid>
                        </Grid>

                    </Grid>
                    <Grid item xs={4} >
                        <Card>
                            <List component="nav" aria-label="mailbox folders">
                                <ListItem >
                                    <Grid container direction="row" justifyContent="space-between" alignItems="center" marginBottom={2}>
                                        <Grid item>
                                            <Typography style={{ fontWeight: 'bold' }} >PRICE PER SEAT</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography style={{ fontWeight: 'bold', color: COLORS.B2 }} variant="h4">$ 350</Typography>
                                        </Grid>
                                    </Grid>
                                </ListItem>
                                <Divider light />
                                <ListItem >
                                    <Grid container>
                                        <Grid item xs={12}>
                                            <div > <span style={{ fontWeight: 'bold' }}>HOW MANY SEATS DO YOU NEED?</span> </div>
                                            <div>Please,  in order to book your ride, select  preferred
                                                seat(s) in the vehicle.
                                            </div>
                                            <Box>
                                                <Checkbox icon={<CircleIcon sx={{ color: COLORS.grey2 }} />} checkedIcon={<CheckCircleIcon sx={{ color: COLORS.success }} />} />
                                                <Checkbox icon={<CircleIcon sx={{ color: COLORS.grey2 }} />} checkedIcon={<CheckCircleIcon sx={{ color: COLORS.success }} />} />
                                                <Checkbox icon={<CircleIcon sx={{ color: COLORS.grey2 }} />} checkedIcon={<CheckCircleIcon sx={{ color: COLORS.success }} />} />
                                                <Checkbox icon={<CircleIcon sx={{ color: COLORS.grey2 }} />} checkedIcon={<CheckCircleIcon sx={{ color: COLORS.success }} />} />
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <span style={{ color: COLORS.grey2 }}> 2 seats available</span>
                                        </Grid>
                                    </Grid>
                                </ListItem>
                                <Divider light />
                                <ListItem >
                                    <Grid container>
                                        <div > <span style={{ fontWeight: 'bold' }}>CHECK PICK-UP POINT</span> </div>
                                        <div>Please, check preferred pick-up point and make
                                            sure to be there at least 25 minutes earlier.
                                        </div>
                                        <Box sx={{ border: 1, borderRadius: '10px', padding: '10px', borderColor: COLORS.grey2, margin: '10px' }}>
                                            413/22 M.1  Tasud ...
                                        </Box>

                                    </Grid>
                                </ListItem>
                                <Divider light />
                                <ListItem >
                                    <Checkbox> </Checkbox><span style={{ color: COLORS.grey1 }}>I accept the T&Cs and Privacy Policy.</span>
                                </ListItem>
                                <ListItem >
                                    <Grid container>
                                        <Grid item xs={12}>
                                            <Button variant="contained" sx={{ color: COLORS.B1 }} fullWidth>BOOK THIS RIDE</Button>
                                        </Grid>
                                    </Grid>

                                </ListItem>
                            </List>
                        </Card>
                        <Grid container style={{ marginTop: "3rem", marginBottom: "1rem" }}>
                            <Grid item xs={3} >
                                <span style={{ fontWeight: 'bold' }}> JOINER INFO </span>
                            </Grid>
                            <Grid item xs={8}>
                                <HorizontalRuleIcon width={100}></HorizontalRuleIcon>
                            </Grid>

                        </Grid>
                        <Card sx={{ backgroundColor: COLORS.F4, }} elevation={0}>
                            <Grid container padding={2}>
                                <Grid item sx={2} >
                                    <Image
                                        src={profile_boy}
                                        alt="profile"
                                        width={60}
                                        height={60}
                                    />
                                </Grid>
                                <Grid item sx={10} marginLeft={3}>
                                    <Typography style={{ fontWeight: 'bold' }} variant="h5">Macho.</Typography>
                                    <div>24 years old</div>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
