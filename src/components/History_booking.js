
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




export default function History_booking() {
    const [user, setUser] = useState([]);

    const formatDate = (datetime) => {
        const d = new Date(datetime);
        let year = d.getFullYear();
        let month = d.getMonth();
        let date = d.getDate();
        let time = d.toLocaleTimeString();

        return date + "/" + month + "/" + year + " @ " + time
    }

    function dateToTime(datetime) {
        const d = new Date(datetime);
        let time = d.toLocaleTimeString();
        return time
    }

    useEffect(() => {
        axios.get('http://localhost:3004/api/historyBooking', {
            params: { userID: window.sessionStorage.userID },
        })
            .then(function (response) {
                setUser(response.data)
            }).catch(function (error) {
                console.log(error)
            })
    }, [])


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
                                        <div><Typography variant="h6" sx={{ fontWeight: 'bold' }}>{user.user_firstname} {user.user_lastname}</Typography> </div>
                                        <div>{user.user_age} years old</div>
                                        <div>Intermediate</div>
                                        <div> <StarIcon sx={{ color: COLORS.warign }} /> {user.user_rate} </div>

                                    </Stack>

                                </Grid>
                                <Grid item >
                                    <Divider orientation="vertical"></Divider>

                                </Grid>
                                <Grid item marginLeft={3} xs={5.5}>
                                    <Stack spacing={1} direction="column" >
                                        <div>{formatDate(user.ride_origindatetime)}</div>
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
                                                    {/* <FormControlLabel value="1" control={<Checkbox icon={<CircleIcon sx={{ color: COLORS.grey2 }} />} checkedIcon={<CheckCircleIcon sx={{ color: COLORS.success }} />} />} />
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
