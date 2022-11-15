
import { Box, Grid, Divider, Paper, Typography, Button, Checkbox, Link } from "@mui/material";
import Stack from '@mui/material/Stack';
import { useState } from "react";
import { COLORS } from "../../values/colors";
import Image from 'next/image';
import profile_boy from "../../imgs/profile_boy.jpg"
import StarIcon from '@mui/icons-material/Star'; //star
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; //check




export default function History_post() {
    const [user, setUser] = useState([
        { "id": 1, "name": "Taeo Maxview", "age": 12, "rating": 3.2, "date": '12/10/2023 - 12:00', "origin": 'Meaung Chiang mai ', 'timeorigin': '12:00', "destination": "Meag lampang", "timedes": "18:00", "price": 350 },
        { "id": 2, "name": "Macho", "age": 18, "rating": 5.0, "date": '12/10/2023 - 12:00', "origin": 'Meaung Chiang mai ', 'timeorigin': '12:00', "destination": "Meag lampang", "timedes": "18:00", "price": 350 },
        { "id": 3, "name": "Nuna Maxview", "age": 20, "rating": 5.4, "date": '12/10/2023 - 12:00', "origin": 'Meaung Chiang mai ', 'timeorigin': '12:00', "destination": "Meag lampang", "timedes": "18:00", "price": 350 },

    ]);
    return (
        <>
            {user.map((user, index) => {
                return (
                    <div key={index}>
                        <Box sx={{ backgroundColor: COLORS.F4, borderRadius: 5, marginTop: 6, padding: 4 }}>
                            <Grid container >
                                <Grid item xs={1} sm={4} md={2}>
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
                                        <div><Typography variant="h6" sx={{ fontWeight: 'bold' }}>{user.name}</Typography> </div>
                                        <div>{user.age} years old</div>
                                        <div>Intermediate</div>
                                        <div> <StarIcon sx={{ color: COLORS.warign }} /> {user.rating} </div>

                                    </Stack>

                                </Grid>
                                <Grid item >
                                    <Divider orientation="vertical"></Divider>

                                </Grid>
                                <Grid item marginLeft={3} xs={5.5}>
                                    <Stack spacing={1} direction="column" >
                                        <div>{user.date}</div>
                                        <Box ><span>{user.timeorigin}</span><PlaceOutlinedIcon sx={{ color: COLORS.grey2 }} />  <span>{user.origin}</span>  </Box>
                                        <Box><span>{user.timedes}</span> <PlaceOutlinedIcon sx={{ color: COLORS.B2 }} /> <span>{user.destination}</span>  </Box>
                                        <Box>
                                            <Checkbox icon={<CircleIcon sx={{ color: COLORS.grey2 }} />} checkedIcon={<CheckCircleIcon sx={{ color: COLORS.success }} />} />
                                            <Checkbox icon={<CircleIcon sx={{ color: COLORS.grey2 }} />} checkedIcon={<CheckCircleIcon sx={{ color: COLORS.success }} />} />
                                            <Checkbox icon={<CircleIcon sx={{ color: COLORS.grey2 }} />} checkedIcon={<CheckCircleIcon sx={{ color: COLORS.success }} />} />
                                            <Checkbox icon={<CircleIcon sx={{ color: COLORS.grey2 }} />} checkedIcon={<CheckCircleIcon sx={{ color: COLORS.success }} />} />
                                        </Box>

                                    </Stack>
                                </Grid>
                                <Grid item >
                                    <Typography variant="h4" sx={{ fontWeight: 'bold' }}>$ {user.price} </Typography>
                                    <Typography sx={{ color: COLORS.grey1 }}>per passenger </Typography>

                                </Grid>
                            </Grid>
                        </Box>
                    </div>
                );
            })}
        </>
    )
}