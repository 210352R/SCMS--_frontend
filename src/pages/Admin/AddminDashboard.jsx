import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";

import backgroundImage from "../../images/Supply Chain Jobs_ Procurement, Logistics, and Management.jpg";

import Charts from "../../components/Charts";

import "../../styles/AdminDashBoard.css";

import { mainListItems, secondaryListItems } from "./NavBarList";
import PieChartContainer from "../../components/PieChartContainer";

// import { mainListItems, secondaryListItems } from "./listItems";

// function Copyright(props) {

// }

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

// TODO remove, this demo shouldn't need to reset the theme.

export default function AddminDashboard() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div className="overlay">
      <div></div>

      <Box
        sx={{
          display: "flex",
          // Optional, makes the background fixed
        }}
      >
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{
                flexGrow: 1,
                fontStyle: "italic",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              Admin Dashboard
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="primary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 1 }} />
            {secondaryListItems}
          </List>
        </Drawer>
        <Box
          sx={{
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3} sx={{ alignItems: "center" }}>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 5,
                    display: "flex",
                    flexDirection: "column",
                    height: 450,
                  }}
                  className="luminous-border container"
                >
                  <Charts />
                  {/* <Chart /> */}
                  {/* <Charts /> */}
                </Paper>
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} md={10} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                    width: 300,
                    height: 380,
                  }}
                  className="luminous-border container "
                >
                  <PieChartContainer />
                </Paper>
              </Grid>
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper
                  sx={{ p: 2, display: "flex", flexDirection: "column" }}
                  className="luminous-border my-5"
                >
                  {/* <Orders /> */}
                  <section class="intro my-3">
                    <div class="bg-image h-100">
                      <div class="mask d-flex align-items-center h-100">
                        <div class="container">
                          <div class="row justify-content-center">
                            <div class="col-12">
                              <div class="card">
                                <div class="card-body">
                                  <div class="table-responsive">
                                    <table class="table table-hover mb-0">
                                      <thead>
                                        <tr>
                                          <th scope="col"></th>
                                          <th scope="col">
                                            Product Detail Views
                                          </th>
                                          <th scope="col">Unique Purchases</th>
                                          <th scope="col">Quantity</th>
                                          <th scope="col">Product Revenue</th>
                                          <th scope="col">Avg. Price</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <th scope="row">Value</th>
                                          <td>18,492</td>
                                          <td>228</td>
                                          <td>350</td>
                                          <td>$4,787.64</td>
                                          <td>$13.68</td>
                                        </tr>
                                        <tr>
                                          <th scope="row">Percentage change</th>
                                          <td>
                                            <span class="text-danger">
                                              <i class="fas fa-caret-down me-1"></i>
                                              <span>-48.8%%</span>
                                            </span>
                                          </td>
                                          <td>
                                            <span class="text-success">
                                              <i class="fas fa-caret-up me-1"></i>
                                              <span>14.0%</span>
                                            </span>
                                          </td>
                                          <td>
                                            <span class="text-success">
                                              <i class="fas fa-caret-up me-1"></i>
                                              <span>46.4%</span>
                                            </span>
                                          </td>
                                          <td>
                                            <span class="text-success">
                                              <i class="fas fa-caret-up me-1"></i>
                                              <span>29.6%</span>
                                            </span>
                                          </td>
                                          <td>
                                            <span class="text-danger">
                                              <i class="fas fa-caret-down me-1"></i>
                                              <span>-11.5%</span>
                                            </span>
                                          </td>
                                        </tr>
                                        <tr>
                                          <th scope="row">Average</th>
                                          <td>
                                            <span class="text-danger">
                                              <i class="fas fa-caret-down me-1"></i>
                                              <span>-17,654</span>
                                            </span>
                                          </td>
                                          <td>
                                            <span class="text-success">
                                              <i class="fas fa-caret-up me-1"></i>
                                              <span>28</span>
                                            </span>
                                          </td>
                                          <td>
                                            <span class="text-success">
                                              <i class="fas fa-caret-up me-1"></i>
                                              <span>111</span>
                                            </span>
                                          </td>
                                          <td>
                                            <span class="text-success">
                                              <i class="fas fa-caret-up me-1"></i>
                                              <span>$1,092.72</span>
                                            </span>
                                          </td>
                                          <td>
                                            <span class="text-danger">
                                              <i class="fas fa-caret-down me-1"></i>
                                              <span>$-1.78</span>
                                            </span>
                                          </td>
                                        </tr>
                                        <tr>
                                          <th scope="row">Buy-to-details</th>
                                          <td>
                                            <span class="text-danger">
                                              <i class="fas fa-caret-down me-1"></i>
                                              <span>-48.8%%</span>
                                            </span>
                                          </td>
                                          <td>
                                            <span class="text-success">
                                              <i class="fas fa-caret-up me-1"></i>
                                              <span>14.0%</span>
                                            </span>
                                          </td>
                                          <td>
                                            <span class="text-success">
                                              <i class="fas fa-caret-up me-1"></i>
                                              <span>46.4%</span>
                                            </span>
                                          </td>
                                          <td>
                                            <span class="text-success">
                                              <i class="fas fa-caret-up me-1"></i>
                                              <span>29.6%</span>
                                            </span>
                                          </td>
                                          <td>
                                            <span class="text-danger">
                                              <i class="fas fa-caret-down me-1"></i>
                                              <span>-11.5%</span>
                                            </span>
                                          </td>
                                        </tr>
                                        <tr>
                                          <th scope="row">Sales</th>
                                          <td>
                                            <span class="text-danger">
                                              <i class="fas fa-caret-down me-1"></i>
                                              <span>-17,654</span>
                                            </span>
                                          </td>
                                          <td>
                                            <span class="text-success">
                                              <i class="fas fa-caret-up me-1"></i>
                                              <span>28</span>
                                            </span>
                                          </td>
                                          <td>
                                            <span class="text-success">
                                              <i class="fas fa-caret-up me-1"></i>
                                              <span>111</span>
                                            </span>
                                          </td>
                                          <td>
                                            <span class="text-success">
                                              <i class="fas fa-caret-up me-1"></i>
                                              <span>$1,092.72</span>
                                            </span>
                                          </td>
                                          <td>
                                            <span class="text-danger">
                                              <i class="fas fa-caret-down me-1"></i>
                                              <span>$-1.78</span>
                                            </span>
                                          </td>
                                        </tr>
                                        <tr>
                                          <th scope="row">Website traffic</th>
                                          <td>
                                            <span class="text-danger">
                                              <i class="fas fa-caret-down me-1"></i>
                                              <span>-48.8%%</span>
                                            </span>
                                          </td>
                                          <td>
                                            <span class="text-success">
                                              <i class="fas fa-caret-up me-1"></i>
                                              <span>14.0%</span>
                                            </span>
                                          </td>
                                          <td>
                                            <span class="text-success">
                                              <i class="fas fa-caret-up me-1"></i>
                                              <span>46.4%</span>
                                            </span>
                                          </td>
                                          <td>
                                            <span class="text-success">
                                              <i class="fas fa-caret-up me-1"></i>
                                              <span>29.6%</span>
                                            </span>
                                          </td>
                                          <td>
                                            <span class="text-danger">
                                              <i class="fas fa-caret-down me-1"></i>
                                              <span>-11.5%</span>
                                            </span>
                                          </td>
                                        </tr>
                                        <tr>
                                          <th scope="row">Clickthrough</th>
                                          <td>
                                            <span class="text-danger">
                                              <i class="fas fa-caret-down me-1"></i>
                                              <span>-17,654</span>
                                            </span>
                                          </td>
                                          <td>
                                            <span class="text-success">
                                              <i class="fas fa-caret-up me-1"></i>
                                              <span>28</span>
                                            </span>
                                          </td>
                                          <td>
                                            <span class="text-success">
                                              <i class="fas fa-caret-up me-1"></i>
                                              <span>111</span>
                                            </span>
                                          </td>
                                          <td>
                                            <span class="text-success">
                                              <i class="fas fa-caret-up me-1"></i>
                                              <span>$1,092.72</span>
                                            </span>
                                          </td>
                                          <td>
                                            <span class="text-danger">
                                              <i class="fas fa-caret-down me-1"></i>
                                              <span>$-1.78</span>
                                            </span>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </div>
  );
}
