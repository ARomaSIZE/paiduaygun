import { Box, Grid, Divider, Paper, Typography, Button, Checkbox, Link } from "@mui/material";
import Stack from '@mui/material/Stack';
import { useState } from "react";
import { COLORS } from "../values/colors";
import Image from 'next/image';
import profile_boy from "../imgs/profile_boy.jpg"
import car_detail from "../imgs/car_detail.png"
import StarIcon from '@mui/icons-material/Star'; //star
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; //check

import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';

import History_booking from "../src/components/History_booking";





export default function history_booking() {



    return (
        <>
            <Grid container padding={5} marginLeft={15}>
                <Grid item xs={1.5}>
                    <Stack spacing={3}>
                        <Paper elevation={0}>
                            <MenuList>
                                <MenuItem>Personal data</MenuItem>
                                <MenuItem>History post</MenuItem>
                                <MenuItem>History booking</MenuItem>
                            </MenuList>
                        </Paper>
                    </Stack>

                </Grid>
                <Grid item xs={9}>
                    
                    <History_booking/>
                
                </Grid>

            </Grid>
        </>
    )
}