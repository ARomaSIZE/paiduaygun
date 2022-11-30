import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "next/link";
import { COLORS } from "../values/colors";
import KeyIcon from '@mui/icons-material/Key';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import axios from 'axios';
import { useState } from "react";
import { useRouter } from "next/router";
import Swal from 'sweetalert2'


export default function Login() {

  const [inputs, setInputs] = useState({});
  const router = useRouter();


  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs({ ...inputs, [name]: value });
  }

  const signIn = () => {

    axios.post('http://localhost:3004/api/signin', {
      username: inputs.username,
      password: inputs.password
    }).then(function (response) {
      Swal.fire({
        icon: 'success',
        text: 'Login success',
      })

      router.push({ pathname: '/' })
      window.sessionStorage.token = response.data.token;
      window.sessionStorage.userID = response.data.userData.id
      console.log(window.sessionStorage.userID);
    }).catch(function (error) {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Username or Password is not correct',
      })
    })
  }

  return (

    <>
      <Container maxWidth="xl" sx={{ marginTop: 30 }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            variant="body1"
            color="initial"
            sx={{ fontWeight: 600, fontSize: 32 }}
          >
            LOGIN
          </Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 5 }}>
          <Box>
            <Box>
              <Typography
                variant="body1"
                color="initial"
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

            <Box sx={{ marginTop: 2 }}>
              <Typography
                variant="body1"
                color="initial"
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

            <Box
              sx={{
                justifyContent: "space-between",
                display: "flex",
                marginTop: 3,
              }}
            >
              <Button
                variant="contained"
                onClick={signIn}
                sx={{
                  textTransform: "none",
                  boxShadow: "none",
                  width: 120,
                  backgroundColor: COLORS.B3,
                  fontWeight: 600,
                }}
              >
                Login
              </Button>
              <Button
                variant="outlined"
                sx={{
                  textTransform: "none",
                  boxShadow: "none",
                  width: 120,
                  backgroundColor: COLORS.bgcolor,
                  color: COLORS.grey1,
                  borderColor: COLORS.grey1,
                  fontWeight: 600,
                }}
                href="register"
              >
                Signup
              </Button>
            </Box>

            <Box sx={{ marginTop: 2 }}>
              <Link href="/home">
                <Typography variant="body1" color="initial">
                  Forgot password?
                </Typography>
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}
