import React, { useEffect, useState } from "react";
import axios from "axios";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import AccountBoxIcon from "@mui/icons-material/AccountBox";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import Modal from "@mui/material/Modal";
import Charts from "../../components/Charts";

import "../../styles/AdminDashBoard.css";

import { useNavigate } from "react-router-dom";

import { Link, useParams } from "react-router-dom";

import PieChartContainer from "../../components/PieChartContainer";

import HomeIcon from "@mui/icons-material/Home";
import TrainIcon from "@mui/icons-material/Train";
import TokenIcon from "@mui/icons-material/Token";
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

const modelStyle = {
  width: "800px",
  height: "800px",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "150px",
};

// Define the styles for the icon
const iconStyle = {
  width: "40px", // Adjust this value to your desired width
  height: "40px", // Adjust this value to your desired height
  //border: "2px solid black", // Add a black border
};

// functionalaties ----------------------
// all functions ---------------------

export default function COODash({ children, username }) {
  const navigate = useNavigate();
  const [Modelopen, setModelOpen] = useState(false);
  const handleModelOpen = () => setModelOpen(true);
  const handleModelClose = () => setModelOpen(false);
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  // kfafdjlgljghjljhklgh
  const [anchorEl, setAnchorEl] = React.useState(null);
  const Menuopen = Boolean(anchorEl);
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const [coodinater, setCoordinater] = useState([{}]);

  // functions -------------
  const logOut = () => {
    localStorage.removeItem("token");
    console.log("logged out");
    navigate("/CoOrdinaterLogin");
  };

  useEffect(() => {
    console.log("UserName  : ", username);

    axios
      .get(`http://localhost:8000/coordinater/get/${username}`)
      .then((res) => {
        console.log("Data : ", res.data);
        if (res.data.sucess) {
          console.log("Cooo Get Success ----");
          setCoordinater(res.data.coordinater[0]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log("Coordinater : ", coodinater);
  return (
    <div className="overlay">
      {/* model eka  */}
      <Modal
        open={Modelopen}
        onClose={handleModelClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
      >
        <Box style={modelStyle} className="h-auto bg-primary">
          <section style={{ backgroundColor: "#eee" }}>
            <div className="container py-5 ">
              <div className="row">
                <div className="col-lg-4">
                  <div className="card mb-4">
                    <div className="h-auto text-center">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                        alt="avatar"
                        className="rounded-circle img-fluid"
                        style={{ width: "150px" }}
                      />
                      <h5 className="my-3">{coodinater?.user_name}</h5>
                      <p className="text-muted mb-1">SCMS - Co-Ordinater</p>
                      <p className="text-muted mb-4">
                        Bay Area, San Francisco, CA
                      </p>
                      <div className="d-flex justify-content-center mb-2">
                        <button type="button" className="btn btn-primary">
                          Follow
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-primary ms-1"
                        >
                          Message
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="card mb-4">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Full Name</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {coodinater?.first_name} {coodinater?.last_name}
                          </p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Email</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{coodinater?.email}</p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Phone</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {coodinater?.phone_number}
                          </p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Mobile</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">(098) 765-4321</p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Address</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {coodinater?.address}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Box>
      </Modal>

      {/* Model eka iwarai */}

      <Box
        sx={{
          display: "flex",

          // Optional, makes the background fixed
          background: "fixed",
        }}
      >
        <CssBaseline />
        <AppBar position="absolute" sx={{}} open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
              backgroundColor: "grey",
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
              Dashboard
            </Typography>
            <IconButton color="inherit" onClick={handleMenuClick}>
              {/* <NotificationsIcon /> */}

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
                  marginRight: "5px",
                }}
              >
                {coodinater?.user_name}
              </Typography>

              <AccountBoxIcon style={iconStyle} />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={Menuopen}
              onClose={handleMenuClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              sx={{
                position: "absolute",
              }}
            >
              {/* ////////////////////// */}

              <MenuItem
                onClick={() => {
                  handleModelOpen();
                  handleMenuClose();
                }}
              >
                Profile
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>My account</MenuItem>
              <MenuItem onClick={logOut}>Logout</MenuItem>
            </Menu>
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
            {/* {mainListItems} */}
            <React.Fragment>
              <Link to={`/`} className="link-no-decoration">
                <ListItemButton>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItemButton>
              </Link>

              <Link
                to={`/traincodinaterboard/${username}`}
                className="link-no-decoration"
              >
                <ListItemButton>
                  <ListItemIcon>
                    <DashboardIcon />
                  </ListItemIcon>
                  <ListItemText primary="Dashboard" />
                </ListItemButton>
              </Link>

              <Link
                to={`/coo_train_token/${username}`}
                className="link-no-decoration"
              >
                <ListItemButton>
                  <ListItemIcon>
                    <TokenIcon />
                  </ListItemIcon>
                  <ListItemText primary="Tokens" />
                </ListItemButton>
              </Link>

              {/* /admincustomerlist/:id */}
              <Link
                className="link-no-decoration"
                to={`/coo_trains/${username}`}
              >
                <ListItemButton>
                  <ListItemIcon>
                    <TrainIcon />
                  </ListItemIcon>
                  <ListItemText primary="Trains" />
                </ListItemButton>
              </Link>

              <ListItemButton>
                <ListItemIcon>
                  <BarChartIcon />
                </ListItemIcon>
                <ListItemText primary="Reports" />
              </ListItemButton>

              <Link
                className="link-no-decoration"
                to={`/coostorelist/${username}`}
              >
                <ListItemButton>
                  <ListItemIcon>
                    <LayersIcon />
                  </ListItemIcon>
                  <ListItemText primary="Stores" />
                </ListItemButton>
              </Link>
            </React.Fragment>

            <Divider sx={{ my: 1 }} />
            {/* {secondaryListItems} */}
            <React.Fragment>
              <ListSubheader component="div" inset>
                Saved reports
              </ListSubheader>
              <ListItemButton>
                <ListItemIcon>
                  <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="Current month" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="Last quarter" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="Year-end sale" />
              </ListItemButton>
            </React.Fragment>
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
          {/* -------------------------------------------------------------------------------------------------------------------------- */}
          {children}
        </Box>
      </Box>
    </div>
  );
}
