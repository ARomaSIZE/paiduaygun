
import { Box, Grid, Divider, Paper, Typography, Button, Checkbox, Link } from "@mui/material";
import Stack from '@mui/material/Stack';
import { useEffect, useState } from "react";
import { COLORS } from "../../values/colors";
import Image from 'next/image';
import profile_boy from "../../imgs/profile_boy.jpg"
import StarIcon from '@mui/icons-material/Star'; //star
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; //check

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import axios from "axios";
import { useRouter } from "next/router";





export default function History_post({data}) {


    const router = useRouter();
    const {from , to , date , person} = router.query;
    const [user, setUser] = useState([]);
    // from , to , date , person , gender , agemin , agemax , pricemin , pricemax
    useEffect(() => {
        axios.get("http://localhost:3004/api/showRidebySearch", {params: {from: from , to : to , date: date || null , person : person , gender : 1 , agemin : data.valueAge[0] , agemax: data.valueAge[1] , pricemin: data.valuePrice[0] , pricemax: data.valuePrice[1]}})
            .then(response => {
                setUser(response.data);
            }).catch(error => {
                console.log(error);
            })
    } , [data])

    console.log(user);

    function dateToTime(datetime){
        const d = new Date(datetime);
        let time = d.toLocaleTimeString();
        return time
    }




    // const [user, setUser] = useState([
    //     { "id": 1, "name": "Taeo Maxview", "age": 12, "rating": 3.2, "date": '12/10/2023 - 12:00', "origin": 'Meaung Chiang mai ', 'timeorigin': '12:00', "destination": "Meag lampang", "timedes": "18:00", "price": 350 , "pass": 3 },
    //     { "id": 2, "name": "Macho", "age": 18, "rating": 5.0, "date": '12/10/2023 - 12:00', "origin": 'Meaung Chiang mai ', 'timeorigin': '12:00', "destination": "Meag lampang", "timedes": "18:00", "price": 350 , "pass": 2},
    //     { "id": 3, "name": "Nuna Maxview", "age": 20, "rating": 5.4, "date": '12/10/2023 - 12:00', "origin": 'Meaung Chiang mai ', 'timeorigin': '12:00', "destination": "Meag lampang", "timedes": "18:00", "price": 350 , "pass": 1},

    // ]);

    return (
        <>
            {user.map((user, index) => {
                return (
                    <div key={index} style={{cursor: 'pointer'}} onClick={() =>  router.push({pathname: '/detail_feed' , query:{rideID: user.ride_id}})}>
                        <Box sx={{ backgroundColor: COLORS.F4, borderRadius: 3, marginTop: 3, padding: 4 }}>
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
                                        <div><Typography variant="h6" sx={{ fontWeight: 'bold' }}>{user.user_firstname + " " + user.user_lastname}</Typography> </div>
                                        <div>{user.user_age} years old</div>
                                        <div>Intermediate</div>
                                        <div> <StarIcon sx={{ color: COLORS.warign }} /> {user.rating} </div>

                                    </Stack>

                                </Grid>
                                <Grid item >
                                    <Divider orientation="vertical"></Divider>

                                </Grid>
                                <Grid item marginLeft={3} xs={5.5}>
                                    <Stack spacing={1} direction="column" >
                                        <div>{user.ride_origindatetime}</div>
                                        <Box ><span>{dateToTime(user.ride_origindatetime)}</span><PlaceOutlinedIcon sx={{ color: COLORS.grey2 }} />  <span>{user.ride_origin}</span>  </Box>
                                        <Box><span>{dateToTime(user.ride_destinationdatetime)}</span> <PlaceOutlinedIcon sx={{ color: COLORS.B2 }} /> <span>{user.ride_destination}</span>  </Box>
                                        <Box sx={{ display: 'flex' }}>
                                            <FormControl>
                                                <FormGroup aria-label="position" row>
                                                    {
                                                        (() => {
                                                            const check = [];
                                                            for (let i = 0; i < user.ride_passenger; i++) {
                                                                if ((i) >= user.ride_nowhaspass) {
                                                                    check.push(<FormControlLabel value="1" control={<Checkbox disabled icon={<CircleIcon sx={{ color: COLORS.grey2 }} />} checkedIcon={<CheckCircleIcon sx={{ color: COLORS.success }} />} />} />)
                                                                } else {
                                                                    check.push(<FormControlLabel value="1" control={<Checkbox disabled checked icon={<CircleIcon sx={{ color: COLORS.grey2 }} />} checkedIcon={<CheckCircleIcon sx={{ color: COLORS.success }} />} />} />)

                                                                }
                                                            }
                                                            return check
                                                        })()
                                                    }
                                                    {/* 
                                                    <FormControlLabel value="2" control={<Checkbox icon={<CircleIcon sx={{ color: COLORS.grey2 }} />} checkedIcon={<CheckCircleIcon sx={{ color: COLORS.success }} />} />} />
                                                    <FormControlLabel value="3" control={<Checkbox icon={<CircleIcon sx={{ color: COLORS.grey2 }} />} checkedIcon={<CheckCircleIcon sx={{ color: COLORS.success }} />} />} />
                                                    <FormControlLabel value="4" control={<Checkbox icon={<CircleIcon sx={{ color: COLORS.grey2 }} />} checkedIcon={<CheckCircleIcon sx={{ color: COLORS.success }} />} />} /> */}
                                                </FormGroup>
                                            </FormControl>
                                        </Box>
                                    </Stack>
                                </Grid>
                                <Grid item >
                                    <Typography variant="h4" sx={{ fontWeight: 'bold' }}>$ {user.ride_priceperpass} </Typography>
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
