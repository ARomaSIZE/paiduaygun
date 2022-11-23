import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Image from "next/image";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Map from "../imgs/map.jpg";
import { Container } from "@mui/system";

export default function Feed() {
  return (
    <>
      <Container maxWidth="xl">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={2}></Grid>
            <Grid item xs={10}>
              <Box sx={{ display: "flex", marginTop: 5 }}>
                <Box sx={{ marginRight: 5 }}>
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

                <Box sx={{ marginRight: 5 }}>
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

                <Box sx={{ marginRight: 5 }}>
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

                <Box sx={{ marginRight: 5 }}>
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
        </Box>
      </Container>
    </>
  );
}
