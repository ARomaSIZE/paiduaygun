import { Box, Grid, Container, Divider, Paper, Typography, Button, Card, Checkbox } from "@mui/material";
import Stack from '@mui/material/Stack';

import { COLORS } from "../../values/colors";
import Image from 'next/image';

import car_detail from "../../imgs/car_detail.png"

import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';   //car type
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined'; //License Car:
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined'; //pet
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined'; //music
import SmokingRoomsOutlinedIcon from '@mui/icons-material/SmokingRoomsOutlined';  //smoking
import EventSeatOutlinedIcon from '@mui/icons-material/EventSeatOutlined'; //seat
import ChildCareOutlinedIcon from '@mui/icons-material/ChildCareOutlined'; //baby
import LuggageOutlinedIcon from '@mui/icons-material/LuggageOutlined'; //Trunk space
import { useEffect, useState } from "react";




export default function CarInfo({data}){

    // const [detailCar , setDetailCar] = useState([]);
    // useEffect(() => {
    //     setDetailCar(...data);

    // } , [data])
    
    return(
        <>
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
                                            <span style={{ color: COLORS.grey1 }}>{data[0]?.car_name}</span>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Box sx={{ backgroundColor: COLORS.F4, padding: 1, marginTop: 1 }}>
                                    <Grid container direction="row" justifyContent="space-between" alignItems="center">
                                        <Grid item>
                                            <CreditCardOutlinedIcon sx={{ color: COLORS.B2 }} /> License Car:
                                        </Grid>
                                        <Grid item>
                                            <span style={{ color: COLORS.grey1 }}>{data[0]?.ride_licensecar}</span>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Box sx={{ backgroundColor: COLORS.F4, padding: 1, marginTop: 1 }}>
                                    <Grid container direction="row" justifyContent="space-between" alignItems="center">
                                        <Grid item>
                                            <PetsOutlinedIcon sx={{ color: COLORS.B2 }} /> Pet allowed:
                                        </Grid>
                                        <Grid item>
                                            <span style={{ color: COLORS.grey1 }}>{data[0]?.ride_pet == 1 ? "Yes" : "No"}</span>
                                        </Grid>
                                    </Grid>
                                </Box>

                                <Box sx={{ backgroundColor: COLORS.F4, padding: 1, marginTop: 1 }}>
                                    <Grid container direction="row" justifyContent="space-between" alignItems="center">
                                        <Grid item>
                                            <MusicNoteOutlinedIcon sx={{ color: COLORS.B2 }} /> Music:
                                        </Grid>
                                        <Grid item>
                                            <span style={{ color: COLORS.grey1 }}>{data[0]?.ride_music == 1 ? "Yes" : "No"}</span>
                                        </Grid>
                                    </Grid>
                                </Box>

                                <Box sx={{ backgroundColor: COLORS.F4, padding: 1, marginTop: 1 }}>
                                    <Grid container direction="row" justifyContent="space-between" alignItems="center">
                                        <Grid item>
                                            <SmokingRoomsOutlinedIcon sx={{ color: COLORS.B2 }} /> Smoking:
                                        </Grid>
                                        <Grid item>
                                            <span style={{ color: COLORS.grey1 }}>{data[0]?.ride_music == 1 ? "Yes" : "No"}</span>
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
                                            <span style={{ color: COLORS.grey1 }}>{data[0]?.ride_seatnum}</span>
                                        </Grid>
                                    </Grid>
                                </Box>

                                <Box sx={{ backgroundColor: COLORS.F4, padding: 1, marginTop: 1 }}>
                                    <Grid container direction="row" justifyContent="space-between" alignItems="center">
                                        <Grid item>
                                            <ChildCareOutlinedIcon sx={{ color: COLORS.B2 }} /> Baby seat:
                                        </Grid>
                                        <Grid item>
                                            <span style={{ color: COLORS.grey1 }}>{data[0]?.ride_babysetnum}</span>
                                        </Grid>
                                    </Grid>
                                </Box>

                                <Box sx={{ backgroundColor: COLORS.F4, padding: 1, marginTop: 1 }}>
                                    <Grid container direction="row" justifyContent="space-between" alignItems="center">
                                        <Grid item>
                                            <LuggageOutlinedIcon sx={{ color: COLORS.B2 }} /> Trunk space::
                                        </Grid>
                                        <Grid item>
                                            <span style={{ color: COLORS.grey1 }}>{data[0]?.ride_trunkspace}</span>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                        </Grid>
        </>
    )
}