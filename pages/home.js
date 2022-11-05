import Banner from "../imgs/ImageHeader.jpg";
import Image from "next/image";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { COLORS } from "../values/colors";

export default function Home() {
  return (
    <>
      <Box>
        <Image src={Banner} alt="banner" />
      </Box>
      <Container sx={{ marginTop: 20 }} maxWidth="xl">
        <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={2} sm={4} md={4} sx={{ paddingRight: 20 }}>
            <Typography sx={{fontWeight:'bold'}}>Your pick of rides at low prices</Typography>
            <Typography color={COLORS.grey}>
              No matter where you’re going, by bus or carpool, find the perfect
              ride from our wide range of destinations and routes at low prices.
            </Typography>
          </Grid>

          <Grid item xs={2} sm={4} md={4} sx={{ paddingRight: 20 }}>
            <Typography sx={{fontWeight:'bold'}}>Trust who you share with</Typography>
            <Typography color={COLORS.grey}>
              We take the time to get to know each of our members and bus
              partners. We check reviews, profiles and IDs, so you know who
              you’re travelling with and can book your ride at ease on our
              secure platform.
            </Typography>
          </Grid>

          <Grid item xs={2} sm={4} md={4} sx={{ paddingRight: 20 }}>
            <Typography sx={{fontWeight:'bold'}}>Scroll, click, tap and go!</Typography>
            <Typography color={COLORS.grey}>
              Booking a ride has never been easier! Thanks to our simple app
              powered by great technology, you can book a ride close to you in
              just minutes.
            </Typography>
          </Grid>
        </Grid>

        <Typography sx={{fontWeight:'bold'}}>
          COVID-19 Safety Guidelines
        </Typography>
        <Typography  color={COLORS.grey}>
          To keep everyone safe, please make sure to follow the guidelines
          below.
        </Typography>

        <Box sx={{marginTop:5}}>
          <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={2} sm={4} md={4} sx={{ paddingRight: 20 }}>
              <Typography sx={{fontWeight:'bold'}}>Synptom-free</Typography>
              <Typography color={COLORS.grey}>Check your covid-19 and show ATK testing</Typography>
            </Grid>

            <Grid item xs={2} sm={4} md={4} sx={{ paddingRight: 20 }}>
              <Typography sx={{fontWeight:'bold'}}>Wearing a mask</Typography>
              <Typography color={COLORS.grey}>
                We recommend wearing a mask, please follow the regulations in
                your province.
              </Typography>
            </Grid>

            <Grid item xs={2} sm={4} md={4} sx={{ paddingRight: 20 }}>
              <Typography sx={{fontWeight:'bold'}}>Avoid contact</Typography>
              <Typography color={COLORS.grey}>Avoid handshakes or physical contact with other members</Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
