import { Box, Grid, Divider, Typography, Button, Card, Checkbox } from "@mui/material";
import Stack from '@mui/material/Stack';
import { useState } from "react";
import {COLORS} from "../values/colors.js"
import Image from 'next/image';
import profile_boy from "../imgs/profile_boy.jpg"

import StarIcon from '@mui/icons-material/Star'; //star
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';


import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';

import Dialog from '@mui/material/Dialog';

import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';


import Rating from '@mui/material/Rating';
//import car info component
import CarInfo from "../src/components/CarInfo";

import Driver_detail from "../src/components/Driver_detail.js";
import Other_detail from "../src/components/Other_detail.js";

const steps = [
    'Step',
    'Payment',
    'Approve'
];



export default function step1() {
    var step = 3;
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

                       {/* driver info  */}
                       <Driver_detail/>


                        <Grid container marginTop={5} marginBottom={1}>
                            <Grid item sx={2}>
                                <span style={{ fontWeight: 'bold' }}> CAR INFO </span>
                            </Grid>
                            <Grid item sx={10}>
                                <HorizontalRuleIcon width={100}></HorizontalRuleIcon>
                            </Grid>

                        </Grid>
                        
                        
                       <Grid><CarInfo/></Grid> 
                    

                        <Grid container marginTop={5} marginBottom={1}>
                            <Grid item sx={2}>
                                <span style={{ fontWeight: 'bold' }}> OTHER DETAILS </span>
                            </Grid>
                            <Grid item sx={10}>
                                <HorizontalRuleIcon width={100}></HorizontalRuleIcon>
                            </Grid>

                        </Grid>
                        {/* <div><span style={{ fontWeight: 'bold' }}> OTHER DETAILS</span></div> */}
                       <Other_detail/>


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
                                                <Button variant="contained" sx={{ color: COLORS.B1 }} fullWidth>CHECK OUT</Button> :
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
