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

export default function Post() {
  const [alignment, setAlignment] = useState("Cabrio");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const [value, setValue] = useState(null);

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
                Destination time*
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
              onChange={handleChange}
              aria-label="Platform"
              sx={{ marginTop: 2 }}
            >
              <ToggleButton
                value="Cabrio"
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
                value="Van"
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
                value="Pickup"
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
                value="SUV"
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
                value="Sedan"
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
                value="Sport"
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
                value="Motercycle"
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
                control={<Checkbox />}
                label="Pet allowed for cat, dog, bird..."
              />
            </Box>

            <Box>
              <Typography variant="body1" color="initial" sx={{ fontSize: 18 }}>
                Music allowed
              </Typography>
              <FormControlLabel
                control={<Checkbox />}
                label="Music allowed just for chill..."
              />
            </Box>

            <Box>
              <Typography variant="body1" color="initial" sx={{ fontSize: 18 }}>
                Smoking allowed
              </Typography>
              <FormControlLabel
                control={<Checkbox />}
                label="Rider can smoked..."
              />
            </Box>
          </Box>

          <Box sx={{ marginTop: 5 }}>
            <Typography variant="body1" color="initial" sx={{ fontSize: 24 }}>
              Other details
            </Typography>
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
            <Button variant="contained">
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
