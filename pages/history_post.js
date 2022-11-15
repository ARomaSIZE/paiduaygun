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

import History_post from "../src/components/History_booking";





export default function history_post() {

    const [user, setUser] = useState([
        { "id": 1, "name": "Taeo Maxview", "age": 12, "rating": 3.2, "date": '12/10/2023 - 12:00', "origin": 'Meaung Chiang mai ', 'timeorigin': '12:00', "destination": "Meag lampang", "timedes": "18:00" ,"price":350},
        { "id": 2, "name": "Macho", "age": 18, "rating": 5.0, "date": '12/10/2023 - 12:00', "origin": 'Meaung Chiang mai ', 'timeorigin': '12:00', "destination": "Meag lampang", "timedes": "18:00" ,"price":350},
        { "id": 3, "name": "Nuna Maxview", "age": 20, "rating": 5.4, "date": '12/10/2023 - 12:00', "origin": 'Meaung Chiang mai ', 'timeorigin': '12:00', "destination": "Meag lampang", "timedes": "18:00" ,"price":350},

    ]);

    return (
        <>
            <Grid container padding={5} marginLeft={15}>
                <Grid item xs={1.5}>
                    <Stack spacing={3}>
                        <Link><Typography>Personal data</Typography></Link>
                        <Link><Typography>History post</Typography></Link>
                        <Link><Typography>History booking</Typography></Link>
                    </Stack>

                </Grid>
                <Grid item xs={9}>
                <Grid item xs={9}>
                    
                    <History_post/>
                
                </Grid>
                </Grid>

            </Grid>
        </>
    )
}