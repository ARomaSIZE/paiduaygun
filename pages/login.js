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

export default function Login() {
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
                variant="outlined"
                sx={{ width: 400}}
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
