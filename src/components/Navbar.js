import Link from "next/link";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { COLORS } from "../../values/colors";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

export default function Navbar() {
  return (
    <Container sx={{ marginTop: 2 }} maxWidth="xl">
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{ flexGrow: 1, justifyContent: "space-between", marginTop: 0.7 }}
        >
          <Grid container spacing={6}>
            <Grid item>
              <Link href="/home">
                <Typography color={COLORS.grey1} sx={{ fontSize: 20 }}>
                  [BrandLogo]
                </Typography>
              </Link>
            </Grid>
            <Grid item>
              <Link href="/home">
                <Typography color={COLORS.grey1} sx={{ fontSize: 20 }}>
                  Home
                </Typography>
              </Link>
            </Grid>
            <Grid item>
              <Link href="/feed">
                <Typography color={COLORS.grey1} sx={{ fontSize: 20 }}>
                  Feed
                </Typography>
              </Link>
            </Grid>
            <Grid item>
              <Link href="/contact">
                <Typography color={COLORS.grey1} sx={{ fontSize: 20 }}>
                  Contact
                </Typography>
              </Link>
            </Grid>
            <Grid item>
              <Link href="/profile">
                <Typography color={COLORS.grey1} sx={{ fontSize: 20 }}>
                  Profile
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Box>

        <Box>
          <IconButton sx={{ marginRight: 1 }}>
            <NotificationsOutlinedIcon />
          </IconButton>
          <Button
            variant="contained"
            sx={{
              marginRight: 2,
              backgroundColor: COLORS.B1,
              textTransform: "none",
              boxShadow: "none",
            }}
          >
            <Typography color={COLORS.B2} sx={{ fontWeight: 600 }}>
              Login
            </Typography>
          </Button>
          <Button
            variant="contained"
            sx={{ textTransform: "none", boxShadow: "none" }}
          >
            <AddCircleOutlineIcon sx={{ marginRight: 1 }} />
            <Typography color={COLORS.F4} sx={{ fontWeight: 600 }}>
              Add a ride
            </Typography>
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
