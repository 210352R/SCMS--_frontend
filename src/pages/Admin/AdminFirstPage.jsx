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
      </AddminDashboard>
    </div>
  );
}
