import React from "react";

export default function AddOrderPage() {
  return (
    <div>
      <section className="h-100 h-custom">
        <div className="container h-100 py-5 ">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col border border-danger border-2 ">
              <div
                className="card shopping-cart"
                style={{ borderRadius: "15px" }}
              >
                <div className="card-body text-black ">
                  <div className="row">
                    <div className="col-lg-6 px-5 py-4">
                      <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">
                        Your products
                      </h3>
                      {/* Product 1 */}
                      <div className="d-flex align-items-center mb-5">
                        <div className="flex-shrink-0">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/13.webp"
                            className="img-fluid"
                            style={{ width: "150px" }}
                            alt="Generic placeholder image"
                          />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <a href="#!" className="float-end text-black">
                            <i className="fas fa-times"></i>
                          </a>
                          <h5 className="text-primary">
                            Samsung Galaxy M11 64GB
                          </h5>
                          <h6 style={{ color: "#9e9e9e" }}>Color: white</h6>
                          <div className="d-flex align-items-center">
                            <p className="fw-bold mb-0 me-5 pe-3">799$</p>
                            <div className="def-number-input number-input safari_only">
                              <button
                                onClick={() =>
                                  document
                                    .querySelector("input[type=number]")
                                    .stepDown()
                                }
                                className="minus"
                              ></button>
                              <input
                                className="quantity fw-bold text-black"
                                min="0"
                                name="quantity"
                                value="1"
                                type="number"
                              />
                              <button
                                onClick={() =>
                                  document
                                    .querySelector("input[type=number]")
                                    .stepUp()
                                }
                                className="plus"
                              ></button>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Product 2 */}
                      <div className="d-flex align-items-center mb-5">
                        <div className="flex-shrink-0">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/6.webp"
                            className="img-fluid"
                            style={{ width: "150px" }}
                            alt="Generic placeholder image"
                          />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <a href="#!" className="float-end text-black">
                            <i className="fas fa-times"></i>
                          </a>
                          <h5 className="text-primary">
                            Headphones Bose 35 II
                          </h5>
                          <h6 style={{ color: "#9e9e9e" }}>Color: Red</h6>
                          <div className="d-flex align-items-center">
                            <p className="fw-bold mb-0 me-5 pe-3">239$</p>
                            <div className="def-number-input number-input safari_only">
                              <button
                                onClick={() =>
                                  document
                                    .querySelector("input[type=number]")
                                    .stepDown()
                                }
                                className="minus"
                              ></button>
                              <input
                                className="quantity fw-bold text-black"
                                min="0"
                                name="quantity"
                                value="1"
                                type="number"
                              />
                              <button
                                onClick={() =>
                                  document
                                    .querySelector("input[type=number]")
                                    .stepUp()
                                }
                                className="plus"
                              ></button>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Product 3 */}
                      <div className="d-flex align-items-center mb-5">
                        <div className="flex-shrink-0">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/1.webp"
                            className="img-fluid"
                            style={{ width: "150px" }}
                            alt="Generic placeholder image"
                          />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <a href="#!" className="float-end text-black">
                            <i className="fas fa-times"></i>
                          </a>
                          <h5 className="text-primary">
                            iPad 9.7 6-gen WiFi 32GB
                          </h5>
                          <h6 style={{ color: "#9e9e9e" }}>Color: rose pink</h6>
                          <div className="d-flex align-items-center">
                            <p className="fw-bold mb-0 me-5 pe-3">659$</p>
                            <div className="def-number-input number-input safari_only">
                              <button
                                onClick={() =>
                                  document
                                    .querySelector("input[type=number]")
                                    .stepDown()
                                }
                                className="minus"
                              ></button>
                              <input
                                className="quantity fw-bold text-black"
                                min="0"
                                name="quantity"
                                value="2"
                                type="number"
                              />
                              <button
                                onClick={() =>
                                  document
                                    .querySelector("input[type=number]")
                                    .stepUp()
                                }
                                className="plus"
                              ></button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr
                        className="mb-4"
                        style={{
                          height: "2px",
                          backgroundColor: "#1266f1",
                          opacity: 1,
                        }}
                      />
                      <div className="d-flex justify-content-between px-x">
                        <p className="fw-bold">Discount:</p>
                        <p className="fw-bold">95$</p>
                      </div>
                      <div
                        className="d-flex justify-content-between p-2 mb-2"
                        style={{ backgroundColor: "#e1f5fe" }}
                      >
                        <h5 className="fw-bold mb-0">Total:</h5>
                        <h5 className="fw-bold mb-0">2261$</h5>
                      </div>
                    </div>
                    <div className="col-lg-6 px-5 py-4">
                      <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">
                        Payment
                      </h3>
                      <form className="mb-5">
                        <div className="form-outline mb-5">
                          <input
                            type="text"
                            id="typeText"
                            className="form-control form-control-lg"
                            size="17"
                            value="1234 5678 9012 3457"
                            minLength="19"
                            maxLength="19"
                          />
                          <label className="form-label" for="typeText">
                            Card Number
                          </label>
                        </div>
                        <div className="form-outline mb-5">
                          <input
                            type="text"
                            id="typeName"
                            className="form-control form-control-lg"
                            size="17"
                            value="John Smith"
                          />
                          <label className="form-label" for="typeName">
                            Name on card
                          </label>
                        </div>
                        <div className="row">
                          <div className="col-md-6 mb-5">
                            <div className="form-outline">
                              <input
                                type="text"
                                id="typeExp"
                                className="form-control form-control-lg"
                                value="01/22"
                                size="7"
                                minLength="7"
                                maxLength="7"
                              />
                              <label className="form-label" for="typeExp">
                                Expiration
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6 mb-5">
                            <div className="form-outline">
                              <input
                                type="password"
                                id="typeText"
                                className="form-control form-control-lg"
                                value="&#9679;&#9679;&#9679;"
                                size="1"
                                minLength="3"
                                maxLength="3"
                              />
                              <label className="form-label" for="typeText">
                                Cvv
                              </label>
                            </div>
                          </div>
                        </div>
                        <p className="mb-5">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit <a href="#!">obcaecati sapiente</a>.
                        </p>
                        <button
                          type="button"
                          className="btn btn-primary btn-block btn-lg"
                        >
                          Buy now
                        </button>
                        <h5
                          className="fw-bold mb-5"
                          style={{ position: "absolute", bottom: 0 }}
                        >
                          <a href="#!">
                            <i className="fas fa-angle-left me-2"></i>Back to
                            shopping
                          </a>
                        </h5>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container productsComponents">
        <section
          className="h-100 min-vh-100 "
          style={{ backgroundColor: "#eee" }}
        >
          <div className="container h-100 py-5">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-10">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
                  <div>
                    <p className="mb-0">
                      <span className="text-muted">Sort by:</span>{" "}
                      <a href="#!" className="text-body">
                        price <i className="fas fa-angle-down mt-1"></i>
                      </a>
                    </p>
                  </div>
                </div>
                <div className="card rounded-3 mb-4">
                  <div className="card-body p-4">
                    {/* Repeat this card structure for each item in the shopping cart */}
                    <div className="row d-flex justify-content-between align-items-center">
                      <div className="col-md-2 col-lg-2 col-xl-2">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                          className="img-fluid rounded-3"
                          alt="Cotton T-shirt"
                        />
                      </div>
                      <div className="col-md-3 col-lg-3 col-xl-3">
                        <p className="lead fw-normal mb-2">Basic T-shirt</p>
                        <p>
                          <span className="text-muted">Size: </span>M{" "}
                          <span className="text-muted">Color: </span>Grey
                        </p>
                      </div>
                      <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                        <button
                          className="btn btn-link px-2"
                          onClick={() =>
                            document
                              .querySelector("input[type=number]")
                              .stepDown()
                          }
                        >
                          <i className="fas fa-minus"></i>
                        </button>
                        <input
                          id="form1"
                          min="0"
                          name="quantity"
                          value="2"
                          type="number"
                          className="form-control form-control-sm"
                        />
                        <button
                          className="btn btn-link px-2"
                          onClick={() =>
                            document
                              .querySelector("input[type=number]")
                              .stepUp()
                          }
                        >
                          <i className="fas fa-plus"></i>
                        </button>
                      </div>
                      <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                        <h5 className="mb-0">$499.00</h5>
                      </div>
                      <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                        <a href="#!" className="text-danger">
                          <i className="fas fa-trash fa-lg"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Repeat the above card structure for each item in the shopping cart */}
                <div className="card rounded-3 mb-4">
                  {/* Add content for the second item here */}
                </div>
                {/* Repeat for other items */}
                <div className="card mb-4">
                  <div className="card-body p-4 d-flex flex-row">
                    <div className="form-outline flex-fill">
                      <input
                        type="text"
                        id="form1"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="form1">
                        Discount code
                      </label>
                    </div>
                    <button
                      type="button"
                      className="btn btn-outline-warning btn-lg ms-3"
                    >
                      Apply
                    </button>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <button
                      type="button"
                      className="btn btn-warning btn-block btn-lg"
                    >
                      Proceed to Pay
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
