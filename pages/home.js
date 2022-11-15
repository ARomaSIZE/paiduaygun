import ImageHeader2 from "../imgs/ImageHeader2.jpg";
import List from "../imgs/iconlist.svg";
import Sraech from "../imgs/iconreshot.svg";
import Car from "../imgs/iconcar.svg";
import Hospital from "../imgs/hospitalicon.svg";
import Mask from "../imgs/maskicon.svg";
import Nohandshake from "../imgs/handshakeicon.svg";
import Carsharing from "../imgs/carsharing.svg";
import Image from "next/image";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";
import { COLORS } from "../values/colors";
import Paper from "@mui/material/Paper";

export default function Home() {
  return (
    <>
      <Stack>
        <Paper>
          {/* <Container maxWidth="xl"> */}
            <Box
              sx={{ backgroundColor: COLORS.B1, height: 500, width: "auto" }}
            >
              <Image src={ImageHeader2} alt="imageheader" height={500} />
            </Box>
          {/* </Container> */}
        </Paper>

        <Paper>
          <Container sx={{ marginTop: 5 }} maxWidth="xl">
            <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
              <Grid item xs={2} sm={4} md={4} sx={{ paddingRight: 20 }}>
                <Image src={List} alt="listicon" width={130} />
                <Typography sx={{ fontWeight: "bold" }}>
                  Your pick of rides at low prices
                </Typography>
                <Typography color={COLORS.grey}>
                  No matter where you’re going, by bus or carpool, find the
                  perfect ride from our wide range of destinations and routes at
                  low prices.
                </Typography>
              </Grid>

              <Grid item xs={2} sm={4} md={4} sx={{ paddingRight: 20 }}>
                <Image src={Sraech} alt="listicon" width={120} height={130} />
                <Typography sx={{ fontWeight: "bold" }}>
                  Trust who you share with
                </Typography>
                <Typography color={COLORS.grey}>
                  We take the time to get to know each of our members and bus
                  partners. We check reviews, profiles and IDs, so you know who
                  you’re travelling with and can book your ride at ease on our
                  secure platform.
                </Typography>
              </Grid>

              <Grid item xs={2} sm={4} md={4} sx={{ paddingRight: 20 }}>
                <Image src={Car} alt="listicon" width={120} height={130} />
                <Typography sx={{ fontWeight: "bold" }}>
                  Scroll, click, tap and go!
                </Typography>
                <Typography color={COLORS.grey}>
                  Booking a ride has never been easier! Thanks to our simple app
                  powered by great technology, you can book a ride close to you
                  in just minutes.
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Paper>

        <Paper>
          <Box sx={{ backgroundColor: COLORS.B1, height: 400, marginTop: 10 }}>
            <Container sx={{ marginTop: 20 }} maxWidth="xl">
              <Box sx={{ paddingTop: 5 }}>
                <Typography sx={{ fontWeight: "bold" }}>
                  COVID-19 Safety Guidelines
                </Typography>
                <Typography color={COLORS.grey}>
                  To keep everyone safe, please make sure to follow the
                  guidelines below.
                </Typography>
              </Box>
              <Box sx={{ marginTop: 4 }}>
                <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                  <Grid item xs={2} sm={4} md={4} sx={{ paddingRight: 20 }}>
                    <Image
                      src={Hospital}
                      alt="listicon"
                      width={120}
                      height={120}
                    />
                    <Typography sx={{ fontWeight: "bold" }}>
                      Synptom-free
                    </Typography>
                    <Typography color={COLORS.grey}>
                      Check your covid-19 and show ATK testing
                    </Typography>
                  </Grid>

                  <Grid item xs={2} sm={4} md={4} sx={{ paddingRight: 20 }}>
                    <Image src={Mask} alt="listicon" width={120} height={120} />
                    <Typography sx={{ fontWeight: "bold" }}>
                      Wearing a mask
                    </Typography>
                    <Typography color={COLORS.grey}>
                      We recommend wearing a mask, please follow the regulations
                      in your province.
                    </Typography>
                  </Grid>

                  <Grid
                    item
                    xs={2}
                    sm={4}
                    md={4}
                    sx={{ paddingRight: 20, marginBottom: 10 }}
                  >
                    <Image
                      src={Nohandshake}
                      alt="listicon"
                      width={120}
                      height={120}
                    />
                    <Typography sx={{ fontWeight: "bold" }}>
                      Avoid contact
                    </Typography>
                    <Typography color={COLORS.grey}>
                      Avoid handshakes or physical contact with other members
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Container>
          </Box>
        </Paper>

        <Paper>
          <Container sx={{ marginTop: 10 }} maxWidth="xl">
            <Box sx={{ marginTop: 5 }}>
              <Box>
                <Typography sx={{ fontWeight: "bold" }}>
                  Guide routes
                </Typography>
                <Typography color={COLORS.grey}>
                  To keep everyone safe, please make sure to follow the
                  guidelines below.
                </Typography>
              </Box>

              <Box sx={{ flexGrow: 1, marginTop: 5, display: "flex" }}>
                <Grid container>
                  <Grid container item spacing={1} sx={{ marginBottom: 2 }}>
                    <FormRow />
                  </Grid>
                  <Grid container item spacing={1} sx={{ marginBottom: 2 }}>
                    <FormRow />
                  </Grid>
                  <Grid container item spacing={1}>
                    <FormRow />
                  </Grid>
                </Grid>

                <Box>
                  <Grid container item spacing={1}>
                    <Image
                      src={Carsharing}
                      alt="Carsharing"
                      width={250}
                      height={250}
                      sx={{ marginRight: 50 }}
                    />
                  </Grid>
                </Box>
              </Box>
            </Box>
          </Container>
        </Paper>

        <Paper>
          <Box
            sx={{ backgroundColor: COLORS.B1, height: 300, marginTop: 10 }}
          ></Box>
        </Paper>
      </Stack>
    </>
  );
}

function FormRow() {
  return (
    <>
      <Grid item xs={6}>
        <Typography>Meang chiang mai to Meang Lampang</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography>Meang chiang mai to Meang Lampang</Typography>
      </Grid>
    </>
  );
}
