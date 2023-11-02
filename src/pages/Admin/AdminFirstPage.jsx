import AddminDashboard from "./AddminDashboard";
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

import { Link, useParams } from "react-router-dom";

import { mainListItems, secondaryListItems } from "./NavBarList";
import PieChartContainer from "../../components/PieChartContainer";

// import { mainListItems, secondaryListItems } from "./listItems";

// function Copyright(props) {

// }

export default function AdminFirstPage() {
  const { id } = useParams();
  const [cooDetails, setCooDetails] = useState([{}]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/coordinater/get`)
      .then((res) => {
        console.log(res.data);
        setCooDetails(res.data?.coordinater);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  console.log("******* : ", cooDetails);

  return (
    <div>
      <AddminDashboard id={id}>
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
                  width: 380,
                  height: 450,
                }}
                className="luminous-border container "
              >
                <PieChartContainer />
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "#f5f5f5",
                }}
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
                                        <th scope="col">Train_Coordinater</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">email</th>
                                        <th scope="col">phone_number</th>
                                        <th scope="col">address</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {cooDetails?.map((coo) => (
                                        <tr>
                                          <th scope="row">{coo?.user_name}</th>
                                          <td>
                                            {coo?.first_name} {coo?.last_name}
                                          </td>
                                          <td>{coo?.email}</td>
                                          <td>{coo?.phone_number}</td>
                                          <td>{coo?.address}</td>
                                        </tr>
                                      ))}
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
      </AddminDashboard>
    </div>
  );
}
