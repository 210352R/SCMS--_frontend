import React from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

import "../styles/calender.css";

export default function Calender() {
  return (
    <div className="container-fluid">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker", "StaticDatePicker"]}>
          <DemoItem>
            <StaticDatePicker
              defaultValue={dayjs("2022-04-17")}
              className="custom-calendar"
            />
          </DemoItem>
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
}
