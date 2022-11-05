import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "next/link";
import { COLORS } from "../values/colors";

export default function Register() {
  return (
    <>
      <Container maxWidth="xl" sx={{ marginTop: 5 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "left",
            marginLeft: 50,
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
              color="initial"
              sx={{ fontWeight: 600, fontSize: 16 }}
            >
              Username
            </Typography>
            <Box>
              <TextField
                id="outlined-basic"
                variant="outlined"
                sx={{ width: 300 }}
              />
            </Box>
          </Box>

          <Box sx={{ marginLeft: 10 }}>
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
                sx={{ width: 300 }}
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
              color="initial"
              sx={{ fontWeight: 600, fontSize: 16 }}
            >
              Firstname
            </Typography>
            <Box>
              <TextField
                id="outlined-basic"
                variant="outlined"
                sx={{ width: 300 }}
              />
            </Box>
          </Box>

          <Box sx={{ marginLeft: 10 }}>
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontWeight: 600, fontSize: 16 }}
            >
              Lastname
            </Typography>
            <Box>
              <TextField
                id="outlined-basic"
                variant="outlined"
                sx={{ width: 300 }}
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
              color="initial"
              sx={{ fontWeight: 600, fontSize: 16 }}
            >
              GENDER
            </Typography>
            <Box>
              <TextField
                id="outlined-basic"
                variant="outlined"
                sx={{ width: 300 }}
              />
            </Box>
          </Box>

          <Box sx={{ marginLeft: 10 }}>
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontWeight: 600, fontSize: 16 }}
            >
              Age
            </Typography>
            <Box>
              <TextField
                id="outlined-basic"
                variant="outlined"
                sx={{ width: 300 }}
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
              color="initial"
              sx={{ fontWeight: 600, fontSize: 16 }}
            >
              Email
            </Typography>
            <Box>
              <TextField
                id="outlined-basic"
                variant="outlined"
                sx={{ width: 300 }}
              />
            </Box>
          </Box>

          <Box sx={{ marginLeft: 10 }}>
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontWeight: 600, fontSize: 16 }}
            >
              Phone
            </Typography>
            <Box>
              <TextField
                id="outlined-basic"
                variant="outlined"
                sx={{ width: 300 }}
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
              color="initial"
              sx={{ fontWeight: 600, fontSize: 16 }}
            >
              Other contact
            </Typography>
            <Box>
              <TextField
                id="outlined-basic"
                variant="outlined"
                sx={{ width: 300 }}
              />
            </Box>
          </Box>

          <Box sx={{ marginLeft: 10 }}>
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontWeight: 600, fontSize: 16 }}
            >
              Address
            </Typography>
            <Box>
              <TextField
                id="outlined-basic"
                variant="outlined"
                sx={{ width: 300 }}
              />
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "left",
            marginLeft: 50.5,
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
              color="initial"
              sx={{ fontWeight: 600, fontSize: 16 }}
            >
              ID Card
            </Typography>
            <Box>
              <TextField
                id="outlined-basic"
                variant="outlined"
                sx={{ width: 300 }}
              />
            </Box>
          </Box>

          <Box sx={{ marginLeft: 10 }}>
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontWeight: 600, fontSize: 16 }}
            >
              Driver Licaense
            </Typography>
            <Box>
              <TextField
                id="outlined-basic"
                variant="outlined"
                sx={{ width: 300 }}
              />
            </Box>
          </Box>
        </Box>

        <Button
          variant="contained"
          sx={{
            textTransform: "none",
            boxShadow: "none",
            width: 120,
            backgroundColor: COLORS.B3,
            fontWeight: 600,
            marginLeft: 50.5,
            marginTop:2
          }}
          href="/login"
        >
          Signup
        </Button>
      </Container>
    </>
  );
}
