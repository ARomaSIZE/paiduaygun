import Banner from "../imgs/ImageHeader.jpg";
import Image from "next/image";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

export default function Home() {
  return (
    <>
      <Image src={Banner} alt="banner" />
      <Container sx={{ marginTop: 20 }} maxWidth="xl">
        <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={2} sm={4} md={4}>
            <h3>Your pick of rides at low prices</h3>
            <p>
              No matter where you’re going, by bus or carpool, find the perfect
              ride from our wide range of destinations and routes at low prices.
            </p>
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
            <h3>Your pick of rides at low prices</h3>
            <p>
              No matter where you’re going, by bus or carpool, find the perfect
              ride from our wide range of destinations and routes at low prices.
            </p>
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
            <h3>Your pick of rides at low prices</h3>
            <p>
              No matter where you’re going, by bus or carpool, find the perfect
              ride from our wide range of destinations and routes at low prices.
            </p>
          </Grid>
        </Grid>


        <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={2} sm={4} md={4}>
            <h3>Your pick of rides at low prices</h3>
            <p>
              No matter where you’re going, by bus or carpool, find the perfect
              ride from our wide range of destinations and routes at low prices.
            </p>
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
            <h3>Your pick of rides at low prices</h3>
            <p>
              No matter where you’re going, by bus or carpool, find the perfect
              ride from our wide range of destinations and routes at low prices.
            </p>
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
            <h3>Your pick of rides at low prices</h3>
            <p>
              No matter where you’re going, by bus or carpool, find the perfect
              ride from our wide range of destinations and routes at low prices.
            </p>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
