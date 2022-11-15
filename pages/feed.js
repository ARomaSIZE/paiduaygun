import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function Feed() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={2}></Grid>
          <Grid item xs={10}>
            <Box sx={{ display: "flex" }}>
              <Box sx={{ marginRight: 5 }}>
                <Card sx={{ width: 300 }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
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
                  <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      PULOMLO
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Current pin: Chiang Mai
                    </Typography>
                  </CardContent>
                </Card>
              </Box>

              <Box sx={{ marginRight: 5 }}>
                <Card sx={{width: 300}}>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      PULOMLO
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Current pin: Chiang Mai
                    </Typography>
                  </CardContent>
                </Card>
              </Box>

              <Box sx={{ marginRight: 5 }}>
                <Card sx={{ width: 300}}>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
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
    </>
  );
}
