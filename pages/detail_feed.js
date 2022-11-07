import { Box, Grid, Container, Divider, Paper, Typography, Button, Card, Checkbox } from "@mui/material";
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



export default function detail_feed() {
    return (
        <>
            <Box sx={{ backgroundColor: COLORS.B2 }}>
                <Grid container color={COLORS.F4} padding={5} >
                    <Grid item xs={2} marginTop={10} marginLeft={8}>
                        <PersonOutlineOutlinedIcon />2 seates available
                    </Grid>
                    <Grid item xs={4} marginTop={10}>
                        <CalendarTodayOutlinedIcon /> 01/10/2000 @ 16:00
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

                        <CalendarTodayOutlinedIcon sx={{ color: COLORS.B2 }} />  <span >Date & time:</span>  <span style={{ color: COLORS.grey }}> 06/03/2022 - 16:00</span>
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
                        <Grid container spacing={1} >
                            <Grid item xs={2}>
                                <Image
                                    src={car_detail}
                                    alt="car"
                                    width={130}
                                    height={130}
                                />
                            </Grid>
                            <Grid item xs={5} >
                                <Box sx={{ backgroundColor: COLORS.F4, padding: 1, }}>
                                    <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                                        <Grid item>
                                            <DirectionsCarFilledOutlinedIcon sx={{ color: COLORS.B2 }} /> Car:
                                        </Grid>
                                        <Grid item>
                                            <span style={{ color: COLORS.grey1 }}>Van</span>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Box sx={{ backgroundColor: COLORS.F4, padding: 1, marginTop: 1 }}>
                                    <Grid container direction="row" justifyContent="space-between" alignItems="center">
                                        <Grid item>
                                            <CreditCardOutlinedIcon sx={{ color: COLORS.B2 }} /> License Car:
                                        </Grid>
                                        <Grid item>
                                            <span style={{ color: COLORS.grey1 }}>NCT 127XX</span>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Box sx={{ backgroundColor: COLORS.F4, padding: 1, marginTop: 1 }}>
                                    <Grid container direction="row" justifyContent="space-between" alignItems="center">
                                        <Grid item>
                                            <PetsOutlinedIcon sx={{ color: COLORS.B2 }} /> Pet allowed:
                                        </Grid>
                                        <Grid item>
                                            <span style={{ color: COLORS.grey1 }}>Yes</span>
                                        </Grid>
                                    </Grid>
                                </Box>

                                <Box sx={{ backgroundColor: COLORS.F4, padding: 1, marginTop: 1 }}>
                                    <Grid container direction="row" justifyContent="space-between" alignItems="center">
                                        <Grid item>
                                            <MusicNoteOutlinedIcon sx={{ color: COLORS.B2 }} /> Music:
                                        </Grid>
                                        <Grid item>
                                            <span style={{ color: COLORS.grey1 }}>Yes</span>
                                        </Grid>
                                    </Grid>
                                </Box>

                                <Box sx={{ backgroundColor: COLORS.F4, padding: 1, marginTop: 1 }}>
                                    <Grid container direction="row" justifyContent="space-between" alignItems="center">
                                        <Grid item>
                                            <SmokingRoomsOutlinedIcon sx={{ color: COLORS.B2 }} /> Smoking:
                                        </Grid>
                                        <Grid item>
                                            <span style={{ color: COLORS.grey1 }}>No</span>
                                        </Grid>
                                    </Grid>
                                </Box>

                            </Grid>


                            <Grid item xs={5} >
                                <Box sx={{ backgroundColor: COLORS.F4, padding: 1, }}>
                                    <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                                        <Grid item >
                                            <EventSeatOutlinedIcon sx={{ color: COLORS.B2 }} /> Seats:
                                        </Grid>
                                        <Grid item>
                                            <span style={{ color: COLORS.grey1 }}>4</span>
                                        </Grid>
                                    </Grid>
                                </Box>

                                <Box sx={{ backgroundColor: COLORS.F4, padding: 1, marginTop: 1 }}>
                                    <Grid container direction="row" justifyContent="space-between" alignItems="center">
                                        <Grid item>
                                            <ChildCareOutlinedIcon sx={{ color: COLORS.B2 }} /> Baby seat:
                                        </Grid>
                                        <Grid item>
                                            <span style={{ color: COLORS.grey1 }}>1</span>
                                        </Grid>
                                    </Grid>
                                </Box>

                                <Box sx={{ backgroundColor: COLORS.F4, padding: 1, marginTop: 1 }}>
                                    <Grid container direction="row" justifyContent="space-between" alignItems="center">
                                        <Grid item>
                                            <LuggageOutlinedIcon sx={{ color: COLORS.B2 }} /> Trunk space::
                                        </Grid>
                                        <Grid item>
                                            <span style={{ color: COLORS.grey1 }}>2 big bags max</span>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>

                        </Grid>

                        <Grid container marginTop={5} marginBottom={1}>
                            <Grid item sx={2}>
                                <span style={{ fontWeight: 'bold' }}> OTHER DETAILS </span>
                            </Grid>
                            <Grid item sx={10}>
                                <HorizontalRuleIcon width={100}></HorizontalRuleIcon>
                            </Grid>

                        </Grid>
                        {/* <div><span style={{ fontWeight: 'bold' }}> OTHER DETAILS</span></div> */}
                        <span style={{ color: COLORS.grey }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam,quis nostrud exercitation ullamco.
                        </span>

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
                                <div style={{borderRadius: '3px', overflow: 'hidden',width:'130px',  height:'130px'}}>
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
                                        <Button variant="outlined" style={{ color: COLORS.B2 }}>
                                            Contact
                                        </Button>
                                    </Grid>
                                </Grid>
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
                                        <Box sx={{ border: 1, borderRadius: '10px', padding: '10px', borderColor: COLORS.grey2,margin:'10px' }}>
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
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
