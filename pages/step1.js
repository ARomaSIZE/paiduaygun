import { Box, Grid, Container, Divider, Paper, Typography, Button, Card, Checkbox } from "@mui/material";
import Stack from '@mui/material/Stack';
import { useState } from "react";
import { COLORS } from "../values/colors";
import Image from 'next/image';
import profile_boy from "../imgs/profile_boy.jpg"
import car_detail from "../imgs/car_detail.png"
import StarIcon from '@mui/icons-material/Star'; //star
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

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

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import Rating from '@mui/material/Rating';


const steps = [
    'Step',
    'Payment',
    'Approve'
];



export default function step1() {
    var step = 4;
    var btntxt = '';

    //Dialog rating
    const [openDialog, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    //Dialog payment
    



    return (
        <>
            <Box sx={{ backgroundColor: COLORS.B1 }}>
                <Typography sx={{ color: COLORS.grey, fontWeight: 'bold', padding: 2, marginLeft: 6 }} >OFFER A JOIN WITH THIS CAR</Typography>
            </Box>

            <Box sx={{ marginTop: 5, marginLeft: 12, marginRight: 12, marginBottom: 12 }}>
                <Grid container spacing={3}>
                    <Grid item xs={8}>
                        <Box sx={{ width: '100%' }}>
                            <Stepper activeStep={step} alternativeLabel>
                                {steps.map((label) => (
                                    <Step key={label}>
                                        <StepLabel Step >{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                        </Box>

                        <Box sx={{ backgroundColor: COLORS.F4, borderRadius: 5, marginTop: 6, padding: 4 }}>
                            <Grid container >
                                <Grid item xs={2} sm={4} md={2.5}>
                                    <div style={{ borderRadius: '1px', overflow: 'hidden', width: '130px', height: '130px' }}>
                                        <Image
                                            src={profile_boy}
                                            alt="profile"
                                            width={130}
                                            height={130}
                                        />
                                    </div>
                                </Grid>
                                <Grid item xs={3} >
                                    <Stack spacing={1} direction="column"  >
                                        <div><Typography variant="h6" sx={{ fontWeight: 'bold' }}>Taeo Maxview.</Typography> </div>
                                        <div>23 years old</div>
                                        <div>Intermediate</div>
                                        <div> <StarIcon sx={{ color: COLORS.warign }} /> 4.2 </div>

                                    </Stack>

                                </Grid>
                                <Grid item >
                                    <Divider orientation="vertical"></Divider>

                                </Grid>
                                <Grid item marginLeft={3}>
                                    <Stack spacing={1.8} direction="column" >
                                    <div>12/01/2023 - 12:00</div>
                                    <Box ><span>16:00</span><PlaceOutlinedIcon sx={{ color: COLORS.grey2 }} />  <span>Meaung Chiang mai</span>  </Box>
                                    <Box><span>18:00</span> <PlaceOutlinedIcon sx={{ color: COLORS.B2 }} /> <span>Mae hong sorn</span>  </Box>

                                    </Stack>
                                   
                                </Grid>
                            </Grid>
                        </Box>

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






                    </Grid>
                    <Grid item xs={4}>
                        <Card>
                            <List component="nav" aria-label="mailbox folders">
                                <ListItem>
                                    <Grid container direction="row" justifyContent="space-between" alignItems="center" marginBottom={2}>
                                        <Grid item>
                                            <Typography style={{ fontWeight: 'bold' }} >DETAILS</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Button variant="text"><Typography style={{ color: COLORS.B2, fontWeight: 'bold' }} >EDIT</Typography></Button>
                                        </Grid>
                                    </Grid>
                                </ListItem>
                                <Divider light />
                                <ListItem >
                                    <Grid container direction="row" justifyContent="space-between" alignItems="center" marginBottom={2}>
                                        <Grid item>
                                            <Typography style={{ color: COLORS.grey2 }} >Pick-up point:</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography style={{ color: COLORS.grey1, fontWeight: 'bold' }} >Ban du</Typography>
                                        </Grid>
                                    </Grid>
                                </ListItem>
                                <Divider light />
                                <ListItem >
                                    <Grid container direction="row" justifyContent="space-between" alignItems="center" marginBottom={2}>
                                        <Grid item>
                                            <Typography style={{ color: COLORS.grey2 }} >Seats:</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography style={{ color: COLORS.grey1, fontWeight: 'bold' }} >1 seat</Typography>
                                        </Grid>
                                    </Grid>
                                </ListItem>
                                <Divider light />
                                <ListItem >
                                    <Grid container direction="row" justifyContent="space-between" alignItems="center" marginBottom={2}>
                                        <Grid item>
                                            <Typography style={{ color: COLORS.grey2 }} >Price:</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography style={{ color: COLORS.grey1, fontWeight: 'bold' }} >$350</Typography>
                                        </Grid>
                                    </Grid>
                                </ListItem>
                                <Divider light />
                                <ListItem >
                                    <Grid container direction="row" justifyContent="space-between" alignItems="center" marginBottom={2}>
                                        <Grid item>
                                            <Typography style={{ color: COLORS.grey2 }} >Taxes:</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography style={{ color: COLORS.grey1, fontWeight: 'bold' }} >$17.5</Typography>
                                        </Grid>
                                    </Grid>
                                </ListItem>
                                <Divider light />
                                <ListItem >
                                    <Grid container direction="row" justifyContent="space-between" alignItems="center" marginBottom={2}>
                                        <Grid item>
                                            <Typography variant="h5">Total:</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography style={{ color: COLORS.B2, fontWeight: 'bold' }} variant="h5" >$367.5</Typography>
                                        </Grid>
                                    </Grid>

                                </ListItem>
                                <ListItem >
                                    <Grid container>
                                        <Grid item xs={12}>
                                            {step == 0 ?
                                                <Button variant="contained" sx={{ color: COLORS.B1 }} fullWidth>PAYMENT</Button> :
                                                step == 1 ? <Button variant="contained" sx={{ color: COLORS.B1 }} fullWidth>PAYMENT</Button> : step == 2 ?
                                                    <Box sx={{ display: 'flex' }}>
                                                        <Button variant="contained" sx={{ color: COLORS.white, width: '100%' }} color="error">CANCEL
                                                        </Button>
                                                        <Button variant="contained" sx={{ color: COLORS.B1, width: '100%' }} >APPROVE
                                                        </Button> </Box> : <Button variant="contained" sx={{ color: COLORS.B1 }} fullWidth onClick={handleClickOpen}>RATING</Button>
                                                // Dialog
                                            }

                                        </Grid>
                                    </Grid>
                                </ListItem>
                            </List>
                        </Card>

                    </Grid>
                </Grid>

            </Box>

            <Dialog
                open={openDialog}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >

                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <Stack spacing={2} direction="column" justifyContent="center" padding={2}>
                            <Box><Typography variant="h6" align="center" style={{ fontWeight: 'bold' }}>Rating</Typography></Box>
                            <Box><Rating name="size-large" defaultValue={0} size="large" sx={{ fontSize: '3rem', marginLeft: '3.5rem' }} /></Box>
                            <Box sx={{ display: 'flex' }}>
                                <Button variant="contained" sx={{ color: COLORS.white, width: '180px' }} >OK
                                </Button>
                                <Button variant="contained" sx={{ color: COLORS.B1, width: '180px' }} color="error">cancel
                                </Button>
                            </Box>
                        </Stack>

                    </DialogContentText>
                </DialogContent>


            </Dialog>

        </>
    )
}
