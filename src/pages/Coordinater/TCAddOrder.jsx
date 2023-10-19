import React from "react";
//import usestate
import { useState } from "react";
//import useeffect
import { useEffect } from "react";
import "../../styles/TCAOder.css";
import "../../styles/TCAOder.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import the CSS

import { Link, useParams } from "react-router-dom";

import axios from "axios";

export default function TCAddOrder() {
  const { id, storeId, capacity } = useParams();

  const [tripChoose, setTripChoose] = useState(false);
  const [addNew, setAddNew] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const [selectedTrain, setSelectedTrain] = useState(null);

  let [trainOrderList, setTrainOrderList] = useState([{}]);

  const [readyToSubmit, setReadyToSubmit] = useState(false);

  console.log("ID : ", id, "Store ID : ", storeId);

  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Update every second

    return () => {
      clearInterval(intervalId); // Clean up the interval on component unmount
    };
  }, []);

  // useEffect Hook ---
  useEffect(() => {
    if (selectedDate && selectedTrain && selectedTime) {
      setReadyToSubmit(true);
    }
    axios
      .get(`http://localhost:8000/train/getTrain/${storeId}`)
      .then((res) => {
        if (res.data.sucess) {
          if (selectedDate) {
            // console.log("iuguitgtgrjkrjkjkhjkthjkhjkhkjh");
            axios
              .get(
                `http://localhost:8000/train/getTrainAvilable/${storeId}/${selectedDate}`
              )
              .then((res) => {
                setTrainOrderList(res.data.trains);
                if (selectedTrain) {
                  trainOrderList = trainOrderList.filter(
                    (train) => train.train_id === selectedTrain
                  );
                  setTrainOrderList(trainOrderList);
                }
              })
              .catch((err) => {
                console.log("Error ---- ", err);
              });
          } else {
            console.log(
              "iugu--------------------------------------------------------"
            );
            setTrainOrderList(res.data.trains);
          }
        }
      })
      .catch((err) => {
        console.log("Error ---- ", err);
      });
    console.log("Running ---- ");
  }, [selectedDate, selectedTrain, selectedTime, setTripChoose]);

  const handleSubmit = () => {
    if (addNew) {
      console.log("Meka athulata aawwaaaaaa");
      const trainTrip = {
        date: selectedDate,
        train_id: selectedTrain,
        start_time: selectedTime,
      };
      console.log("Train Trip ----------------- /*/*/*/*/  : ", trainTrip);
      setAddNew(false);

      const result = axios.post(
        "http://localhost:8000/traintrip/addTrainTrip",
        trainTrip
      );
      console.log("Result");
      setTripChoose(true);
    } else {
      console.log(" select avilable train trip");
    }
    setTripChoose(true);
  };

  const handleSelectChange = (e) => {
    setSelectedTrain(e.target.value);
  };

  //functions ----------------
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  // implement handleTimeChange
  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  console.log("Train Order : ", trainOrderList);
  console.log("Selected Train -------  : ", selectedTrain);
  console.log("Selected date : ", selectedDate);

  console.log("Time ****** : ", selectedTime);

  console.log("IS Ready ----", readyToSubmit);

  console.log("Tranin  lIst , ", trainOrderList);

  return (
    <>
      {tripChoose ? (
        <div className="container-fluid min-vh-100 running-border">
          <div className="">
            <div
              className="col-12"
              style={{ height: "50px", backgroundColor: "#B8CCF0" }}
            >
              <h2>Submit Train Token ----- </h2>
            </div>
          </div>
          <div className=" row d-flex justify-content-center align-items-center flex-wrap  ">
            <div className="bg-light col-12 col-lg-11 addOrderContainer my-4">
              <div className="col-12 col-md-8 float-md-start m-2 border-bottom border-1 d-flex  ">
                <h3 className="orderTopic">{`Order_ID : ${id}`} </h3>
                <h3 className="storeTopic mx-5 ">{`Store_ID : ${storeId}`} </h3>
                <h3 className="tokenTopic">TK_ 001</h3>
                <h3 className="dateTopic mx-5 ">
                  {currentDate.toLocaleString()}
                </h3>
              </div>
              <div className="col-12 col-md-3 m-2 bg-body-tertiary float-md-end">
                <div className="capacityContainer text-center ">
                  <h3>Capacity : 1500</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container-fluid min-vh-100 running-border">
          <div className="row justify-content-center align-items-center">
            <div className="bg-light col-12 col-lg-8 addOrderContainer my-4">
              <div className="topicBar m-4">
                <h6 className="mx-2">Choose Train Trip</h6>
              </div>
              <div className="row mx-4 my-2">
                <div className="col-12 col-md-4 ">
                  <h6 className="">
                    <span className="subTopic">
                      Store ID : {` ${storeId}`}{" "}
                    </span>
                  </h6>
                </div>
                <div className="col-12 col-md-4 ">
                  <h6 className="">
                    <span className="subTopic">Order ID :{` ${id}`} </span>{" "}
                  </h6>
                </div>
                <div className="col-12 col-md-4 ">
                  <h6 className="">
                    <span className="subTopic">
                      Capacity : {` ${capacity}`}
                    </span>{" "}
                  </h6>
                </div>
              </div>
              <div className="row my-5 mx-4">
                <div className="col-12 col-md-6 ">
                  <h5>Avilable Train Trips</h5>
                </div>
              </div>
              <div className="row my-5 mx-4">
                <div className="col-12">
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">Token ID</th>
                        <th scope="col">Train Name</th>
                        <th scope="col">DATE</th>
                        <th scope="col">STORE</th>
                        <th scope="col">AVILABLE CAPACITY</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Express Train</td>
                        <td>2023-10-16</td>
                        <td>Store A</td>
                        <td>250</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Local Train</td>
                        <td>2023-10-17</td>
                        <td>Store B</td>
                        <td>100</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>High-Speed Train</td>
                        <td>2023-10-18</td>
                        <td>Store C</td>
                        <td>400</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="row my-4 mx-5">
                <div className="col-12 col-md-3">
                  <button
                    type="button"
                    class="btn btn-dark"
                    data-mdb-toggle="modal"
                    data-mdb-target="#exampleModal"
                    onClick={() => setAddNew(true)}
                  >
                    Add New Trip
                  </button>
                </div>
                <div className="col-12 col-md-9 d-flex justify-content-end">
                  <button
                    type="button"
                    class="btn btn-success btn-rounded px-4"
                    onClick={handleSubmit}
                    disabled={!readyToSubmit}
                  >
                    <span className="text-">Submit</span>
                  </button>
                </div>
              </div>
              <div className="row my-5 mx-5 justify-content-center ">
                <div className="col-12 col-md-10">
                  {" "}
                  {/* Adjust the column width as needed */}
                  {addNew && (
                    <div className="row">
                      <div className="col-12 col-md-6">
                        <h5>Select a Date:</h5>
                        <input
                          type="date"
                          value={selectedDate}
                          onChange={handleDateChange}
                        />

                        <p>
                          Selected Date:{" "}
                          {selectedDate ? selectedDate : "No date selected"}
                        </p>
                      </div>
                      <div className="col-12 col-md-6">
                        <label htmlFor="selectOption">Select an option:</label>
                        <select
                          className="form-control"
                          id="selectOption"
                          value={selectedTrain}
                          onChange={handleSelectChange}
                        >
                          <option value="option4"> Choose Train</option>
                          {trainOrderList?.map((train) => {
                            return (
                              <>
                                <option
                                  value={train.train_id}
                                >{`${train.train_id} : ${train.train_capacity}`}</option>
                              </>
                            );
                          })}
                          {/* <option value="option1">Train 1</option>
                        <option value="option2">Train 2</option>
                        <option value="option3">Train 3</option>
                        <option value="option4">Train 4</option> */}
                        </select>
                      </div>
                      <div className="col-12 col-md-6 text-center mt-3">
                        {/* Added class to center the new select */}
                        <label htmlFor="selectTime">Select a time:</label>
                        <select
                          className="form-control"
                          id="selectTime"
                          value={selectedTime}
                          onChange={handleTimeChange}
                        >
                          <option value="option4"> Choose Time</option>
                          {trainOrderList?.map((train) => {
                            return (
                              <>
                                <option
                                  value={train.start_time}
                                >{`${train.train_id}:${train.start_time}`}</option>
                              </>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
