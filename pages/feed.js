import * as React from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Image from "next/image";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Map from "../imgs/map.jpg";
import { Container } from "@mui/system";
import { COLORS } from "../values/colors";
import { Divider } from "@mui/material";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Slider from '@mui/material/Slider';
import Stack from "@mui/system";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

//Date
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from '@mui/material/Button';

import History_post from "../src/components/History_post";
import Link from "next/link";


function valuetext(value) {
  return `${value}°C`;
}




export default function Feed() {
  const [valueAge, setValueAge] = useState([20, 99]);
  const [valuePrice, setValuePrice] = useState([10, 3000]);
  const [valueDate, setValueDate] = useState(null);
  const [valueGender , setGender] = useState(0)


  const handleChangeAge = (event, newValue) => {
    setValueAge(newValue);

  };
  const handleChangePrice = (event, newValue) => {
    setValuePrice(newValue);
  };

  const handleChangeGender = (event) => {
    setGender(event.target.value);
  }

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <Container sx={{ backgroundColor: COLORS.F4, p: 2 }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                p: 2,
                m: 0,

                borderRadius: 1,
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: 'bold' }}
              >
                FILTERS
              </Typography>
              <Typography
                variant="h7"
                sx={{ fontWeight: 'bold', color: COLORS.grey1 }}
              >
                RESET
              </Typography>
            </Box>
            <Divider sx={{ marginBottom: '1rem' }}></Divider>
            <FormGroup>
              <FormControlLabel control={<Checkbox defaultChecked />} label="Nearby" />
            </FormGroup>

            <Typography
              variant="h5"
              sx={{ marginBottom: '0.5rem', marginTop: '1rem' }}
            >
              Gender
            </Typography>
            <FormGroup>
              <RadioGroup defaultValue="3" onChange={handleChangeGender} value={valueGender}>
                <FormControlLabel control={<Radio />} value={1} label="Male" />
                <FormControlLabel control={<Radio />} value={2} label="Female" />
                <FormControlLabel control={<Radio />} value={3} label="All" />
              </RadioGroup>
            </FormGroup>

            <Typography
              variant="h5"
              sx={{ marginBottom: '0.5rem', marginTop: '1rem' }}
            >
              Age
            </Typography>
            <Box sx={{ width: 300 }}>
              <Slider
                getAriaLabel={() => 'Age range'}
                value={valueAge}
                onChange={handleChangeAge}
                valueLabelDisplay="auto"

                getAriaValueText={valuetext}
              />
            </Box>

            <Typography
              variant="h5"
              sx={{ marginBottom: '0.5rem', marginTop: '1rem' }}
            >
              Price
            </Typography>
            <Box sx={{ width: 300 }}>
              <Slider
                getAriaLabel={() => 'Age range'}
                value={valuePrice}
                onChange={handleChangePrice}
                valueLabelDisplay="auto"
                valueLabelFormat={value => <>{value * 1000}</>}
                getAriaValueText={valuetext}
              />
            </Box>
            <Divider sx={{ marginBottom: '0.1rem', marginTop: '1rem' }}></Divider>
            <Typography
              variant="h5"
              sx={{ marginBottom: '0.5rem', marginTop: '1rem' }}
            >
              Select date
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs} >
              <DatePicker
                label="Enter Date"
                value={valueDate}
                onChange={(newValue) => {
                  setValueDate(newValue);

                }}
                renderInput={(params) => <TextField {...params} />}

              />
            </LocalizationProvider>
          </Container>
        </Grid>

        <Grid item xs={9} >

          <Box sx={{ flexGrow: 0, backgroundColor: COLORS.F4 }}>
            <Grid container marginLeft={3}>
              <Grid item xs={10}>
                <Box sx={{ display: "flex", padding: 5 }}>
                  <Box sx={{ marginRight: 4 }}>
                    <Card sx={{ width: 300 }}>
                      <Image src={Map} alt="Map" height={150} width={300} />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{ fontWeight: 500 }}
                        >
                          PULOMLO
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Current pin: Chiang Mai
                        </Typography>
                      </CardContent>
                    </Card>
                  </Box>

                  <Box sx={{ marginRight: 4 }}>
                    <Card sx={{ width: 300 }}>
                      <Image src={Map} alt="Map" height={150} width={300} />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{ fontWeight: 500 }}
                        >
                          PULOMLO
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Current pin: Chiang Mai
                        </Typography>
                      </CardContent>
                    </Card>
                  </Box>


                  <Box sx={{ marginRight: 4 }}>
                    <Card sx={{ width: 300 }}>
                      <Image src={Map} alt="Map" height={150} width={300} />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{ fontWeight: 500 }}
                        >
                          PULOMLO
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Current pin: Chiang Mai
                        </Typography>
                      </CardContent>
                    </Card>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                p: 1,
                m: 1,
                borderRadius: 1,
                marginLeft: 7,
                marginRight: 15
              }}
            >
              <div>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 'bold' }}
                  >
                    Chiangmai  <ArrowForwardIcon /> MaehongSorn
                  </Typography>

                </Box>
                <Box>
                  <Typography

                    sx={{ fontSize: '16px', marginTop: '7px', color: COLORS.grey, marginBottom: '2rem' }}
                  >
                    01/10/2022  |  2  persons
                  </Typography>

                </Box>


              </div>

              <Button variant="outlined" sx={{ height: '3rem' }}><Link href={{ pathname: "/home" }}>Change Search</Link></Button>
            </Box>

          </Box>
          <History_post data={{ valueAge, valuePrice, valueDate , valueGender }} />

        </Grid>


      </Grid>

    </>
  );
}
