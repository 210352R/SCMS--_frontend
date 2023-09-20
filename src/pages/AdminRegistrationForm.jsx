import React from "react";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../styles/AdminRegisterFormStyle.css";

export default function AdminRegistrationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const phoneRegExp = /^[0-9]{10}$/; // Define your phone number pattern here
  const formik = useFormik({
    initialValues: {
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      gender: "",
      date_birth: "",
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
      username: Yup.string().required("username Required"),
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
              <div class="col col-lg-8">
                <div class="card card-registration my-4">
                  <div class="row g-0">
                    <div class="col-12">
                      <div class="card-body p-md-5 text-black">
                        <h3 class="mb-5 text-uppercase font_heading">
                          Admin Registration Form
                        </h3>

                        <div class="row">
                          <div class="col-md-6 mb-4">
                            <div class="form-outline ">
                              <input
                                type="text"
                                id="firstName" // Id ekatah aniwa danna one ara namama  ----
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
                          <div class="col-md-6 mb-4">
                            <div class="form-outline">
                              <input
                                type="text"
                                id="lastName"
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
                              {formik.errors.address}
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
                            type="text"
                            id="username" // Id ekatah aniwa danna one ara namama  ----
                            class="form-control form-control-lg"
                            value={formik.values.username}
                            onChange={formik.handleChange}
                          />
                          {isSubmitted && formik.errors.username && (
                            <p style={{ color: "red" }}>
                              {formik.errors.username}
                            </p>
                          )}
                          <label class="form-label" for="firstName">
                            User Name
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
                          {isSubmitted && formik.errors.password && (
                            <p style={{ color: "red" }}>
                              {formik.errors.password}
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
