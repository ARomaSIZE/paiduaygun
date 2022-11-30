import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";
import { COLORS } from "../values/colors";
import TextField from "@mui/material/TextField";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Image from "next/image";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

import Hospital from "../imgs/hospitalicon.svg";
import Mask from "../imgs/maskicon.svg";
import Nohandshake from "../imgs/handshakeicon.svg";
import Cabrio from "../imgs/Cabrio.png";
import Van from "../imgs/Van.png";
import Pickup from "../imgs/Pickup.png";
import Suv from "../imgs/SUV.png";
import Sedan from "../imgs/Sedan.png";
import Sport from "../imgs/Sport.png";
import Bike from "../imgs/bike.png";
import InputAdornment from "@mui/material/InputAdornment";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import axios from "axios";
import { useRouter } from "next/router";

export default function Post() {

  const router = useRouter();

  const [alignment, setAlignment] = useState("Cabrio");
  const [inputs, setInputs] = useState({});
  const [value, setValue] = useState(null);
  const [destinationValue, setDestinationValue] = useState(null);
  const [allowPet, setAllowPet] = useState(0);
  const [allowMusic, setAllowMusic] = useState(0);
  const [allowSmoking, setAllowSmoking] = useState(0)

  const handleChangePet = (event) => {
    setAllowPet(event.target.value);
  }
  const handleChangeMusic = (event) => {
    setAllowMusic(event.target.value);
  }
  const hanldeChangeSmoking = (event) => {
    setAllowSmoking(event.target.value);
  }

  const handleChangeCar = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs({ ...inputs, [name]: value })
  };

  const post = () => {

    let d = new Date(destinationValue);
    let year = d.getFullYear();
    let month = d.getMonth();
    let date = d.getDate();
    let hour = d.getHours();
    let minute = d.getMinutes();
    let second = d.getSeconds();

    let o = new Date(value);
    let o_year = o.getFullYear();
    let o_month = o.getMonth();
    let o_date = o.getDate();
    let o_hour = o.getHours();
    let o_minute = o.getMinutes();
    let o_second = o.getSeconds();
    
    axios.post("http://localhost:3004/api/addRide", {
      origin: inputs.origin,
      destination: inputs.destination,
      pickupspot: inputs.pickuppoint,
      origindatetime: o_year+ "-" + o_month + "-" + o_date + " " + o_hour + ":" + o_minute + ":" + o_second,
      origin_lat: '19.65320484911604',
      origin_long: '99.7689085555405',
      destinationdatetime: year+ "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second,
      destination_lat: '19.432',
      destination_long: '99.543',
      licensecar: inputs.licensecar,
      trunkspace: inputs.trunkspace,
      seatnum: inputs.seat,
      babyseatnum: inputs.babyseat,
      pet: allowPet,
      music: allowMusic,
      smoke: allowSmoking,
      otherdetail: inputs.otherDetail,
      passenger: inputs.passenger,
      priceperpass: inputs.priceperpassenger,
      carid: alignment,
      ownerrideid: 2,
    } , { headers: { Authorization: `Bearer ${window.sessionStorage.token}` } }).then(response => {
      console.log(response);
      alert('โพสเสร็จสิ้น');
      router.push({pathname: '/'});
      

    }).then(error => {
      console.log(error);
    })

  }

  return (
    <>
      <Container fixed sx={{ marginTop: 10 }}>
        <Stack>
          <Box
            sx={{
              marginBottom: 2,
            }}
          >
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontWeight: 600, fontSize: 32, color: COLORS.B2 }}
            >
              POST YOUR DRIVE
            </Typography>

            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: 18, color: COLORS.grey1 }}
            >
              Cover your driving costs by filing your seats when you’re driving
              from A to B
            </Typography>

            <Typography
              variant="body1"
              color="initial"
              sx={{
                fontWeight: 600,
                fontSize: 18,
                color: COLORS.backtext,
                marginTop: 5,
              }}
            >
              DESTINATION INFO
            </Typography>

            <Typography
              variant="body1"
              color="initial"
              sx={{ fontWeight: 200, fontSize: 18, color: COLORS.grey1 }}
            >
              Enter your origin and destination
            </Typography>
          </Box>

          <Box
            sx={{ display: "flex", justifyContent: "center", marginBottom: 2 }}
          >
            <Box>
              <Typography
                variant="body1"
                color={COLORS.grey}
                sx={{ fontWeight: 300, fontSize: 16 }}
              >
                Origin *
              </Typography>
              <Box>
                <TextField
                  id="outlined-basic"
                  onChange={handleChange}
                  name="origin"
                  value={inputs.origin}
                  variant="outlined"
                  sx={{ width: 540 }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationOnOutlinedIcon sx={{ color: COLORS.grey1 }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Box>

            <Box sx={{ marginLeft: 10 }}>
              <Typography
                variant="body1"
                color={COLORS.grey}
                sx={{ fontWeight: 300, fontSize: 16 }}
              >
                Destination *
              </Typography>
              <Box>
                <TextField
                  id="outlined-basic"
                  onChange={handleChange}
                  name="destination"
                  value={inputs.destination}
                  variant="outlined"
                  sx={{ width: 540 }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationOnOutlinedIcon sx={{ color: COLORS.grey1 }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Box>
          </Box>

          <Box>
            <Typography
              variant="body1"
              color="initial"
              sx={{
                fontWeight: 600,
                fontSize: 18,
                color: COLORS.backtext,
                marginTop: 5,
              }}
            >
              PICK-UP INFO
            </Typography>

            <Typography
              variant="body1"
              color="initial"
              sx={{ fontWeight: 200, fontSize: 18, color: COLORS.grey1 }}
            >
              Enter your location for pick-up.
            </Typography>
          </Box>

          <Box sx={{ marginTop: 2 }}>
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontWeight: 300, fontSize: 16 }}
            >
              Pick-up point *
            </Typography>
            <Box>
              <TextField
                id="outlined-basic"
                variant="outlined"
                onChange={handleChange}
                name="pickuppoint"
                value={inputs.pickuppoint}
                sx={{ width: 540 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationOnOutlinedIcon sx={{ color: COLORS.grey1 }} />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Box>

          <Box>
            <Typography
              variant="body1"
              color="initial"
              sx={{
                fontWeight: 600,
                fontSize: 18,
                color: COLORS.backtext,
                marginTop: 5,
              }}
            >
              DATE-TIME INFO
            </Typography>

            <Typography
              variant="body1"
              color="initial"
              sx={{ fontWeight: 200, fontSize: 18, color: COLORS.grey1 }}
            >
              Enter your date time of origin and destination
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 2,
              marginTop: 2,
            }}
          >
            <Box>
              <Typography
                variant="body1"
                color="initial"
                sx={{ fontWeight: 300, fontSize: 16 }}
              >
                Origin *
              </Typography>
              <Box>
                <LocalizationProvider
                  dateAdapter={AdapterDayjs}
                  id="outlined-basic"
                  variant="outlined"
                >
                  <DatePicker
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField {...params} sx={{ width: 540 }} />
                    )}
                  />
                </LocalizationProvider>
              </Box>
            </Box>

            <Box sx={{ marginLeft: 10 }}>
              <Typography
                variant="body1"
                color="initial"
                sx={{ fontWeight: 300, fontSize: 16 }}
              >
                Origin time*
              </Typography>
              <Box>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField {...params} sx={{ width: 540 }} />
                    )}
                  />
                </LocalizationProvider>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 2,
              marginTop: 5,
            }}
          >
            <Box>
              <Typography
                variant="body1"
                color="initial"
                sx={{ fontWeight: 300, fontSize: 16 }}
              >
                Destination *
              </Typography>
              <Box>
                <LocalizationProvider
                  dateAdapter={AdapterDayjs}
                  id="outlined-basic"
                  variant="outlined"
                >
                  <DatePicker
                    value={destinationValue}
                    onChange={(newValue) => {
                      setDestinationValue(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField {...params} sx={{ width: 540 }} />
                    )}
                  />
                </LocalizationProvider>
              </Box>
            </Box>

            <Box sx={{ marginLeft: 10 }}>
              <Typography
                variant="body1"
                color="initial"
                sx={{ fontWeight: 300, fontSize: 16 }}
              >
                Destination time*
              </Typography>
              <Box>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker
                    value={destinationValue}
                    onChange={(newValue) => {
                      setDestinationValue(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField {...params} sx={{ width: 540 }} />
                    )}
                  />
                </LocalizationProvider>
              </Box>
            </Box>
          </Box>

          <Box>
            <Typography
              variant="body1"
              color="initial"
              sx={{
                fontWeight: 600,
                fontSize: 18,
                color: COLORS.backtext,
                marginTop: 5,
              }}
            >
              CAR INFO
            </Typography>

            <Typography
              variant="body1"
              color="initial"
              sx={{ fontWeight: 200, fontSize: 18, color: COLORS.grey1 }}
            >
              Enter other details of your dive and your car.
            </Typography>
          </Box>

          <Box sx={{ marginTop: 5 }}>
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontWeight: 200, fontSize: 18, color: COLORS.grey1 }}
            >
              Select car type *
            </Typography>
          </Box>

          <Box>
            <ToggleButtonGroup
              color="primary"
              value={alignment}
              exclusive
              onChange={handleChangeCar}
              aria-label="Platform"
              sx={{ marginTop: 2 }}
            >
              <ToggleButton
                value={1}
                sx={{ marginRight: 2, borderRadius: 1 }}
              >
                <Image src={Cabrio} alt="Cabrio" height={45} />
                <Typography
                  variant="body1"
                  color={COLORS.B2}
                  sx={{ fontWeight: 600, marginLeft: 2 }}
                >
                  Cabrio
                </Typography>
              </ToggleButton>

              <ToggleButton
                value={2}
                sx={{ marginRight: 2, borderRadius: 1 }}
              >
                <Image src={Van} alt="Van" height={25} />
                <Typography
                  variant="body1"
                  color={COLORS.B2}
                  sx={{ fontWeight: 600, marginLeft: 2 }}
                >
                  Van
                </Typography>
              </ToggleButton>

              <ToggleButton
                value={3}
                sx={{ marginRight: 2, borderRadius: 1 }}
              >
                <Image src={Pickup} alt="Pickup" height={45} />
                <Typography
                  variant="body1"
                  color={COLORS.B2}
                  sx={{ fontWeight: 600, marginLeft: 2 }}
                >
                  Pickup
                </Typography>
              </ToggleButton>

              <ToggleButton
                value={4}
                sx={{ marginRight: 2, borderRadius: 1 }}
              >
                <Image src={Suv} alt="SUV" height={45} />
                <Typography
                  variant="body1"
                  color={COLORS.B2}
                  sx={{ fontWeight: 600, marginLeft: 2 }}
                >
                  SUV
                </Typography>
              </ToggleButton>

              <ToggleButton
                value={5}
                sx={{ marginRight: 2, borderRadius: 1 }}
              >
                <Image src={Sedan} alt="Sedan" height={20} />
                <Typography
                  variant="body1"
                  color={COLORS.B2}
                  sx={{ fontWeight: 600, marginLeft: 2 }}
                >
                  Sedan
                </Typography>
              </ToggleButton>

              <ToggleButton
                value={6}
                sx={{ marginRight: 2, borderRadius: 1 }}
              >
                <Image src={Sport} alt="Sport" height={45} />
                <Typography
                  variant="body1"
                  color={COLORS.B2}
                  sx={{ fontWeight: 600, marginLeft: 2 }}
                >
                  Sport
                </Typography>
              </ToggleButton>

              <ToggleButton
                value={7}
                sx={{ marginRight: 2, borderRadius: 1 }}
              >
                <Image src={Bike} alt="Bike" height={45} />
                <Typography
                  variant="body1"
                  color={COLORS.B2}
                  sx={{ fontWeight: 600, marginLeft: 2 }}
                >
                  Bike
                </Typography>
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 2,
              marginTop: 5,
            }}
          >
            <Box>
              <Typography
                variant="body1"
                color="initial"
                sx={{ fontWeight: 300, fontSize: 16 }}
              >
                License car *
              </Typography>
              <Box>
                <TextField
                  id="outlined-basic"
                  onChange={handleChange}
                  name="licensecar"
                  value={inputs.licensecar}
                  variant="outlined"
                  sx={{ width: 540 }}
                />
              </Box>
            </Box>

            <Box sx={{ marginLeft: 10 }}>
              <Typography
                variant="body1"
                color="initial"
                sx={{ fontWeight: 300, fontSize: 16 }}
              >
                Trunk space *
              </Typography>
              <Box>
                <TextField
                  id="outlined-basic"
                  onChange={handleChange}
                  name="trunkspace"
                  value={inputs.trunkspace}
                  variant="outlined"
                  sx={{ width: 540 }}
                />
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 2,
              marginTop: 5,
            }}
          >
            <Box>
              <Typography
                variant="body1"
                color="initial"
                sx={{ fontWeight: 300, fontSize: 16 }}
              >
                Seats*
              </Typography>
              <Box>
                <TextField
                  id="outlined-basic"
                  onChange={handleChange}
                  name="seat"
                  value={inputs.seat}
                  variant="outlined"
                  sx={{ width: 540 }}
                />
              </Box>
            </Box>

            <Box sx={{ marginLeft: 10 }}>
              <Typography
                variant="body1"
                color="initial"
                sx={{ fontWeight: 300, fontSize: 16 }}
              >
                Baby seats*
              </Typography>
              <Box>
                <TextField
                  id="outlined-basic"
                  onChange={handleChange}
                  name="babyseat"
                  value={inputs.babyseat}
                  variant="outlined"
                  sx={{ width: 540 }}
                />
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 3,
            }}
          >
            <Box>
              <Typography variant="body1" color="initial" sx={{ fontSize: 18 }}>
                Pet allowed
              </Typography>
              <FormControlLabel
                control={<Checkbox onChange={handleChangePet} value={1} />}
                label="Pet allowed for cat, dog, bird..."
              />
            </Box>

            <Box>
              <Typography variant="body1" color="initial" sx={{ fontSize: 18 }}>
                Music allowed
              </Typography>
              <FormControlLabel
                control={<Checkbox onChange={handleChangeMusic} value={1} />}
                label="Music allowed just for chill..."
              />
            </Box>

            <Box>
              <Typography variant="body1" color="initial" sx={{ fontSize: 18 }}>
                Smoking allowed
              </Typography>
              <FormControlLabel
                control={<Checkbox onChange={hanldeChangeSmoking} value={1} />}
                label="Rider can smoked..."
              />
            </Box>
          </Box>

          <Box sx={{ marginTop: 5 }}>
            <Typography variant="body1" color="initial" sx={{ fontSize: 24 }}>
              Other details
            </Typography>
            <TextField
              id="outlined-multiline-static"
              onChange={handleChange}
              name="otherDetail"
              value={inputs.otherDetail}
              multiline
              rows={4}
              sx={{ width: 1160 }}

            />
          </Box>

          <Box>
            <Typography
              variant="body1"
              color="initial"
              sx={{
                fontWeight: 600,
                fontSize: 18,
                color: COLORS.backtext,
                marginTop: 5,
              }}
            >
              PRICE INFO
            </Typography>

            <Typography
              variant="body1"
              color="initial"
              sx={{ fontWeight: 200, fontSize: 18, color: COLORS.grey1 }}
            >
              Enter other details of your dive and your car.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 2,
              marginTop: 5,
            }}
          >
            <Box>
              <Typography
                variant="body1"
                color="initial"
                sx={{ fontWeight: 300, fontSize: 16 }}
              >
                Price per passenger *
              </Typography>
              <Box>
                <TextField
                  id="outlined-basic"
                  onChange={handleChange}
                  name="priceperpassenger"
                  value={inputs.priceperpassenger}
                  variant="outlined"
                  sx={{ width: 540 }}
                />
              </Box>
            </Box>

            <Box sx={{ marginLeft: 10 }}>
              <Typography
                variant="body1"
                color="initial"
                sx={{ fontWeight: 300, fontSize: 16 }}
              >
                Passenger *
              </Typography>
              <Box>
                <TextField
                  id="outlined-basic"
                  onChange={handleChange}
                  name="passenger"
                  value={inputs.passenger}
                  variant="outlined"
                  sx={{ width: 540 }}
                />
              </Box>
            </Box>
          </Box>

          <Box sx={{ marginTop: 5 }}>
            <Box sx={{ paddingTop: 5 }}>
              <Typography sx={{ fontWeight: "bold" }}>
                COVID-19 Safety Guidelines
              </Typography>
              <Typography color={COLORS.grey}>
                To keep everyone safe, please make sure to follow the guidelines
                below.
              </Typography>
            </Box>

            <Box sx={{ marginTop: 4, display: "flex" }}>
              <Box sx={{ paddingRight: 20 }}>
                <Box>
                  <Image
                    src={Hospital}
                    alt="listicon"
                    width={120}
                    height={120}
                  />
                </Box>

                <Box sx={{ width: 300 }}>
                  <Typography sx={{ fontWeight: "bold" }}>
                    Synptom-free
                  </Typography>
                  <Typography color={COLORS.grey}>
                    Check your covid-19 and show ATK testing
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ paddingRight: 20 }}>
                <Box>
                  <Image src={Mask} alt="listicon" width={120} height={120} />
                </Box>

                <Box sx={{ width: 300 }}>
                  <Typography sx={{ fontWeight: "bold" }}>
                    Wearing a mask
                  </Typography>
                  <Typography color={COLORS.grey}>
                    We recommend wearing a mask, please follow the regulations
                    in your province.
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ paddingRight: 20, marginBottom: 10 }}>
                <Box>
                  <Image
                    src={Nohandshake}
                    alt="listicon"
                    width={120}
                    height={120}
                  />
                </Box>

                <Box sx={{ width: 300 }}>
                  <Typography sx={{ fontWeight: "bold" }}>
                    Avoid contact
                  </Typography>
                  <Typography color={COLORS.grey}>
                    Avoid handshakes or physical contact with other members
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box sx={{ marginBottom: 20 }}>
            <Button variant="contained" onClick={post}>
              <Typography
                variant="body1"
                color="initial"
                sx={{ color: COLORS.F4, fontWeight: 400, marginTop: 0.5 }}
              >
                POST
              </Typography>
            </Button>
          </Box>
        </Stack>
      </Container>
    </>
  );
}
