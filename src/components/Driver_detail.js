import { Box, Grid, Divider, Typography, Button, Card, Checkbox } from "@mui/material";
import Stack from '@mui/material/Stack';

import { COLORS } from "../../values/colors";
import Image from 'next/image';
import profile_boy from "../../imgs/profile_boy.jpg"

import StarIcon from '@mui/icons-material/Star'; //star
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';

export default function Driver_detail(){
    return(
        <>
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
        </>
    )
}