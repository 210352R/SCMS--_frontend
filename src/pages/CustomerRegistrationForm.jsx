import React from "react";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../styles/CustomerRegisterFormStyle.css";
import axios from "axios";

// const token = localStorage.getItem("token");

// // Create an Axios instance with custom headers
// const axiosInstance = axios.create({
//   headers: {
//     Authorization: `Bearer ${token}`, // Set the token in the 'Authorization' header
//   },
// });

export default function CustomerRegistrationForm() {
  const [file, setFile] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFile = (e) => {
    e.preventDefault();
    setFile(e.target.files[0]);
    //setFileName(e.target.files[0].name);
  };
  const uploadFile = async (id) => {
    const formData = new FormData();
    formData.append("image", file);

    console.log("Form Data : ", formData);
    //formData.append("fileName", fileName);
    try {
      const res = await axios.put(
        `http://localhost:8000/customer/upload/${id}`,
        formData
      );
      console.log(res.data);
      alert("Image Added successfull --- ");
    } catch (ex) {
      console.log(ex);
    }
  };

  const phoneRegExp = /^[0-9]{10}$/; // Define your phone number pattern here
  const formik = useFormik({
    initialValues: {
      customer_id: "",
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      gender: "",
      date_birth: "",
      customer_type: "",
      phone_number: "",
      password: "",
      confirmpassword: "",
    },

    // validate items  ----
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(50, "Too Long!")
        .required("firast name is Required"),
      lastName: Yup.string()
        .max(50, "Too Long!")
        .required("last name is Required"),
      email: Yup.string().email("Invalid email").required("Email Required"),
      address: Yup.string().max(50, "Too Long!").required("address Required"),
      gender: Yup.string().required("Gender Required"),
      date_birth: Yup.string().required("Date of Birth Required"),
      phone_number: Yup.string()
        .matches(phoneRegExp, "Phone number is not valid")
        .required("Phone number is required"),
      customer_type: Yup.string().required("Customer Type Required"),
      customer_id: Yup.string().required("Customer ID  Required"),
      password: Yup.string()
        .min(6, "Password contain at least 6 characters")
        .required("Password Required"),
      //username: Yup.string().required("user name is  Required"),
      confirmpassword: Yup.string()
        .oneOf([Yup.ref("password")], "Confirm password must match")
        .required("Confirm password is required"),
    }),
    onSubmit(values) {
      delete values.confirmpassword;
      console.log(values);
      axios
        .post("http://localhost:8000/customer/save", values)
        .then((res) => {
          console.log(res.data);
          uploadFile(values.customer_id)
            .then((res) => {
              console.log(res);
              alert("Customer Added Sucessfully --- ");
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
      //saveDetails(values);
    },
  });

  const handleRadioButtons = (e) => (formik.values.gender = e.target.value);

  const handleReset = () => {
    formik.resetForm(); // Reset the form values to initial values
  };
  return (
    <div>
      <form>
        <section class="h-100 bg-dark ">
          <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col">
                <div class="card card-registration my-4">
                  <div class="row g-0">
                    <div class="col-xl-6 d-none d-xl-block ">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                        alt="Sample photo"
                        class="img-fluid picture"
                      />
                    </div>
                    <div class="col-xl-6">
                      <div class="card-body p-md-5 text-black">
                        <h3 class="mb-5 text-uppercase font_heading">
                          Customer Registration Form
                        </h3>

                        <div class="row">
                          <div class="col-md-6 mb-4">
                            <div class="form-outline mb-4">
                              <input
                                type="text"
                                id="customer_id" // Id ekatah aniwa danna one ara namama  ----
                                class="form-control form-control-lg"
                                value={formik.values.customer_id}
                                onChange={formik.handleChange}
                              />
                              {isSubmitted && formik.errors.customer_id && (
                                <p style={{ color: "red" }}>
                                  {formik.errors.customer_id}
                                </p>
                              )}
                              <label class="form-label" for="firstName">
                                Customer ID
                              </label>
                            </div>
                            <div class="form-outline ">
                              <input
                                type="text"
                                id="lastName" // Id ekatah aniwa danna one ara namama  ----
                                class="form-control form-control-lg"
                                value={formik.values.lastName}
                                onChange={formik.handleChange}
                              />
                              {isSubmitted && formik.errors.lastName && (
                                <p style={{ color: "red" }}>
                                  {formik.errors.lastName}
                                </p>
                              )}
                              <label class="form-label" for="lastName">
                                Last name
                              </label>
                            </div>
                          </div>
                          <div class="col-md-6 mb-4">
                            <div class="form-outline">
                              <input
                                type="text"
                                id="firstName"
                                class="form-control form-control-lg"
                                value={formik.values.firstName}
                                onChange={formik.handleChange}
                              />
                              {isSubmitted && formik.errors.firstName && (
                                <p style={{ color: "red" }}>
                                  {formik.errors.firstName}
                                </p>
                              )}
                              <label class="form-label" for="firstName">
                                First name
                              </label>
                            </div>
                          </div>
                        </div>

                        <div class="form-outline mb-4">
                          <input
                            type="text"
                            id="address"
                            class="form-control form-control-lg"
                            value={formik.values.address}
                            onChange={formik.handleChange}
                          />
                          {isSubmitted && formik.errors.address && (
                            <p style={{ color: "red" }}>
                              {formik.errors.lastName}
                            </p>
                          )}
                          <label class="form-label" for="city">
                            Address
                          </label>
                        </div>

                        <div class="d-md-flex justify-content-start align-items-center mb-4 py-2 my-2 pppp">
                          <h6 class="mb-0 me-4">Gender: </h6>
                          {isSubmitted && formik.errors.gender && (
                            <p style={{ color: "red" }}>
                              {formik.errors.gender}
                            </p>
                          )}
                          <div class="form-check form-check-inline mb-0 me-4">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="gender"
                              value="female"
                              onChange={(e) => {
                                handleRadioButtons(e);
                              }}
                            />
                            <label class="form-check-label" for="gender">
                              Female
                            </label>
                          </div>

                          <div class="form-check form-check-inline mb-0 me-4">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="gender"
                              value="male"
                              onChange={(e) => {
                                handleRadioButtons(e);
                              }}
                            />
                            <label class="form-check-label" for="gender">
                              Male
                            </label>
                          </div>
                        </div>

                        <div class="form-outline mb-4 mt-4">
                          <input
                            type="date"
                            id="date_birth"
                            class="form-control form-control-lg"
                            value={formik.values.date_birth}
                            onChange={formik.handleChange}
                          />
                          {isSubmitted && formik.errors.date_birth && (
                            <p style={{ color: "red" }}>
                              {formik.errors.date_birth}
                            </p>
                          )}
                          <label class="form-label" for="date_birth">
                            DOB
                          </label>
                        </div>

                        {/* Add phone number  */}
                        <div class="form-outline mb-4 mt-4">
                          <input
                            type="tel"
                            id="phone_number"
                            class="form-control form-control-lg"
                            value={formik.values.phone_number}
                            onChange={formik.handleChange}
                          />
                          {isSubmitted && formik.errors.phone_number && (
                            <p style={{ color: "red" }}>
                              {formik.errors.phone_number}
                            </p>
                          )}
                          <label class="form-label" for="date_birth">
                            Contact Number
                          </label>
                        </div>

                        {/* Add customer type ---- */}
                        <div class="form-outline mb-4 py-2 px-3 d-flex align-items-center text-center">
                          <select
                            id="customer_type"
                            name="customer_type"
                            onChange={formik.handleChange}
                            value={formik.values.customer_type}
                          >
                            <option value="">Select a Customer Type</option>
                            <option value="wholeseller">Wholeseller</option>
                            <option value="retailler">Retailer</option>
                            <option value="endCustomer">End-Customer</option>
                          </select>

                          {isSubmitted && formik.errors.customer_type && (
                            <p style={{ color: "red" }}>
                              {formik.errors.customer_type}
                            </p>
                          )}
                        </div>
                        {/* Add customer type ---- */}

                        <div class="form-outline mb-4">
                          <input
                            type="text"
                            id="email"
                            class="form-control form-control-lg"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                          />
                          {isSubmitted && formik.errors.email && (
                            <p style={{ color: "red" }}>
                              {formik.errors.email}
                            </p>
                          )}
                          <label class="form-label" for="email">
                            Email
                          </label>
                        </div>

                        <div class="form-outline mb-4">
                          <input
                            type="password"
                            id="password"
                            class="form-control form-control-lg"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                          />
                          {isSubmitted && formik.errors.customer_type && (
                            <p style={{ color: "red" }}>
                              {formik.errors.customer_type}
                            </p>
                          )}
                          <label class="form-label" for="password">
                            Password
                          </label>
                        </div>

                        <div class="form-outline mb-4">
                          <input
                            type="password"
                            id="confirmpassword"
                            class="form-control form-control-lg"
                            value={formik.values.confirmpassword}
                            onChange={formik.handleChange}
                          />
                          {isSubmitted && formik.errors.confirmpassword && (
                            <p style={{ color: "red" }}>
                              {formik.errors.confirmpassword}
                            </p>
                          )}
                          <label class="form-label" for="confirmpassword">
                            Confirm Password
                          </label>
                        </div>
                        <div class="form-outline mb-4">
                          <input type="file" onChange={handleFile} />
                          {/* <button onClick={uploadFile}>submit </button> */}
                        </div>

                        <div class="d-flex justify-content-end pt-3">
                          <button
                            type="button"
                            class="btn btn-light btn-lg"
                            onClick={handleReset}
                          >
                            Reset all
                          </button>
                          <button
                            type="button"
                            class="btn btn-warning btn-lg ms-2"
                            onClick={(e) => {
                              setIsSubmitted(true);
                              formik.handleSubmit(e);
                            }}
                          >
                            Submit form
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
}
