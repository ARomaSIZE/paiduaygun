import { useState } from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from "@mui/material/IconButton";
import Select from "@mui/material/Select";
import { COLORS } from "../values/colors";

import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import CakeIcon from '@mui/icons-material/Cake';
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import axios from "axios";
import { useRouter } from "next/router";

export default function Register() {

  const [gender, setGender] = useState('');
  const [inputs , setInputs] = useState({});
  const router = useRouter();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs({...inputs , [name]: value})
  };

  const handleChangeGender = (event) => {
    setGender(event.target.value);
  }

  const Register = () => {
    const idCard = document.getElementById("picIDcard");
    const liCenseCard = document.getElementById("picLicense");

    console.log(idCard.files , liCenseCard.files);

    var _formData = new FormData();
    
    _formData.append('idcard' , idCard.files[0]);
    _formData.append('driverlicense' , liCenseCard.files[0]);

    _formData.append('username' , inputs.username);
    _formData.append('password' , inputs.password);
    _formData.append('firstname', inputs.firstname);
    _formData.append('lastname' , inputs.lastname);
    _formData.append('gender' , gender);
    _formData.append('age' , inputs.age);
    _formData.append('email' , inputs.email);
    _formData.append('phonenum' , inputs.phone);
    _formData.append('othercon' , inputs.othercon);
    _formData.append('latitude' , '19.65320484911604');
    _formData.append('longtitude' , '99.7689085555405');
    _formData.append('address' , inputs.address)

    axios.post('http://localhost:3004/api/signup' , _formData , {
    }).then(response => {
      console.log(response);
      alert('ลงทะเบียนเสร็จสิ้น');
      router.push({pathname: '/login'})
    }).catch(error => {
      console.log(error);
    })


  }

  return (
    <>
      <Container maxWidth="xl" sx={{ marginTop: 5 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "left",
            marginLeft: 38,
            marginBottom: 5,
          }}
        >
          <Typography
            variant="body1"
            color="initial"
            sx={{ fontWeight: 600, fontSize: 32 }}
          >
            SIGNUP
          </Typography>
        </Box>

        <Box
          sx={{ display: "flex", justifyContent: "center", marginBottom: 2 }}
        >
          <Box>
            <Typography
              variant="body1"
              color={COLORS.grey1}
              sx={{ fontWeight: 600, fontSize: 16 }}
            >
              Username
            </Typography>
            <Box>
              <TextField
                id="outlined-basic"
                onChange={handleChange}
                name="username"
                value={inputs.username}
                variant="outlined"
                sx={{ width: 400 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircleIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Box>

          <Box sx={{ marginLeft: 10 }}>
            <Typography
              variant="body1"
              color={COLORS.grey1}
              sx={{ fontWeight: 600, fontSize: 16 }}
            >
              Password
            </Typography>
            <Box>
              <TextField
                id="outlined-basic"
                onChange={handleChange}
                name="password"
                value={inputs.password}
                variant="outlined"
                sx={{ width: 400 }}
                type="password"
                autoComplete="current-password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <KeyIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Box>
        </Box>

        <Box
          sx={{ display: "flex", justifyContent: "center", marginBottom: 2 }}
        >
          <Box>
            <Typography
              variant="body1"
              color={COLORS.grey1}
              sx={{ fontWeight: 600, fontSize: 16 }}
            >
              Firstname
            </Typography>
            <Box>
              <TextField
                id="outlined-basic"
                onChange={handleChange}
                name="firstname"
                value={inputs.firstname}
                variant="outlined"
                sx={{ width: 400 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Box>

          <Box sx={{ marginLeft: 10 }}>
            <Typography
              variant="body1"
              color={COLORS.grey1}
              sx={{ fontWeight: 600, fontSize: 16 }}
            >
              Lastname
            </Typography>
            <Box>
              <TextField
                id="outlined-basic"
                onChange={handleChange}
                name="lastname"
                value={inputs.lastname}
                variant="outlined"
                sx={{ width: 400 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Box>
        </Box>

        <Box
          sx={{ display: "flex", justifyContent: "center", marginBottom: 2 }}
        >
          <Box>
            <Typography
              variant="body1"
              color={COLORS.grey1}
              sx={{ fontWeight: 600, fontSize: 16 }}
            >
              GENDER
            </Typography>
            <Box>
              <FormControl sx={{ minWidth: 400 }}>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={gender}
                  label="Age"
                  onChange={handleChangeGender}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={1}>Male</MenuItem>
                  <MenuItem value={2}>Female</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>

          <Box sx={{ marginLeft: 10 }}>
            <Typography
              variant="body1"
              color={COLORS.grey1}
              sx={{ fontWeight: 600, fontSize: 16 }}
            >
              Age
            </Typography>
            <Box>
              <TextField
                id="outlined-basic"
                variant="outlined"
                onChange={handleChange}
                name="age"
                value={inputs.age}
                sx={{ width: 400 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CakeIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Box>
        </Box>

        <Box
          sx={{ display: "flex", justifyContent: "center", marginBottom: 2 }}
        >
          <Box>
            <Typography
              variant="body1"
              color={COLORS.grey1}
              sx={{ fontWeight: 600, fontSize: 16 }}
            >
              Email
            </Typography>
            <Box>
              <TextField
                id="outlined-basic"
                variant="outlined"
                onChange={handleChange}
                value={inputs.email}
                name="email"
                sx={{ width: 400 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Box>

          <Box sx={{ marginLeft: 10 }}>
            <Typography
              variant="body1"
              color={COLORS.grey1}
              sx={{ fontWeight: 600, fontSize: 16 }}
            >
              Phone
            </Typography>
            <Box>
              <TextField
                id="outlined-basic"
                onChange={handleChange}
                name="phone"
                value={inputs.phone}
                variant="outlined"
                sx={{ width: 400 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocalPhoneIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Box>
        </Box>

        <Box
          sx={{ display: "flex", justifyContent: "center", marginBottom: 2 }}
        >
          <Box>
            <Typography
              variant="body1"
              color={COLORS.grey1}
              sx={{ fontWeight: 600, fontSize: 16 }}
            >
              Other contact
            </Typography>
            <Box>
              <TextField
                id="outlined-basic"
                onChange={handleChange}
                name="othercon"
                value={inputs.othercon}
                variant="outlined"
                sx={{ width: 400 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <ConnectWithoutContactIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Box>

          <Box sx={{ marginLeft: 10 }}>
            <Typography
              variant="body1"
              color={COLORS.grey1}
              sx={{ fontWeight: 600, fontSize: 16 }}
            >
              Address
            </Typography>
            <Box>
              <TextField
                id="outlined-basic"
                variant="outlined"
                onChange={handleChange}
                name="address"
                value={inputs.address}
                sx={{ width: 400 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationOnIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "left",
            marginLeft: 38,
            marginBottom: 2,
          }}
        >
          <Typography variant="body1" color="initial" sx={{ fontWeight: 600 }}>
            Import information
          </Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box>
            <Typography
              variant="body1"
              color={COLORS.grey1}
              sx={{ fontWeight: 600, fontSize: 16 }}
            >
              ID Card
            </Typography>
            <Box>
              <Box
                variant="standard"
                disableUnderline={true}
                sx={{ width: 400, height: 50, border: '2px dashed', borderRadius: 2, borderColor: COLORS.B2 }}
              >

                <Box sx={{ display: 'flex' }}>
                  <IconButton color="primary" aria-label="upload picture" component="label" sx={{ marginTop: 0.4, marginLeft: 2, marginRight: 2 }}>
                    <input hidden accept="image/*" type="file" id="picIDcard" />
                    <AddPhotoAlternateOutlinedIcon />
                  </IconButton>
                  <Typography variant="body1" color={COLORS.backtext} sx={{ marginTop: 1.5, marginRight: 4 }}>
                    Upload  file here
                  </Typography>

                  <Typography variant="body1" color={COLORS.grey1} sx={{ marginTop: 1.5 }}>
                    JPG,PNG
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box sx={{ marginLeft: 10 }}>
            <Typography
              variant="body1"
              color={COLORS.grey1}
              sx={{ fontWeight: 600, fontSize: 16 }}
            >
              Driver Licaense
            </Typography>
            <Box>
              <Box
                variant="standard"
                disableUnderline={true}
                sx={{ width: 400, height: 50, border: '2px dashed', borderRadius: 2, borderColor: COLORS.B2 }}
              >

                <Box sx={{ display: 'flex' }}>
                  <IconButton color="primary" aria-label="upload picture" component="label" sx={{ marginTop: 0.4, marginLeft: 2, marginRight: 2 }}>
                    <input hidden accept="image/*" type="file" id="picLicense" />
                    <AddPhotoAlternateOutlinedIcon />
                  </IconButton>
                  <Typography variant="body1" color={COLORS.backtext} sx={{ marginTop: 1.5, marginRight: 4 }}>
                    Upload  file here
                  </Typography>

                  <Typography variant="body1" color={COLORS.grey1} sx={{ marginTop: 1.5 }}>
                    JPG,PNG
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Button
          variant="contained"
          onClick={Register}
          sx={{
            textTransform: "none",
            boxShadow: "none",
            width: 120,
            height: 50,
            backgroundColor: COLORS.B3,
            fontWeight: 600,
            marginLeft: 38,
            marginTop: 2,
          }}
        >
          Signup
        </Button>
      </Container>
    </>
  );
}
