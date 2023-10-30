import React from "react";
import { Link, useParams } from "react-router-dom";

// impoer usestate
import { useState } from "react";
//import useeffect
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddOrderPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  //Fetch data from data base -----------------------------
  const [productsData, setProductsData] = useState([{}]);
  const [routes, setRoutes] = useState([{}]);
  const [stores, setStores] = useState([{}]);

  // -------------------------------------------------------------
  const [tempQuantity, setTempQuantity] = useState(0);
  const [tempQuantity1, setTempQuantity1] = useState(0);
  const [productsArray, setProductsArray] = useState([]);
  const [productsDetailsArray, setProductsDetailsArray] = useState([]);

  const [customer_id, setCustomer_id] = useState(id);
  const [delivery_address, setDelivery_address] = useState(null);
  const [route_id, setRouteId] = useState(null);
  const [state, setState] = useState("new");

  const [selectedStore, setSelectedStore] = useState(null);

  const handleQuantityChange = (e) => {
    const inputValue = e.target.value;
    const intValue = parseInt(inputValue, 10); // Use parseInt to convert the input to an integer
    setTempQuantity1(intValue);
  };

  // Function to enable or disable the button based on some condition

  // useEffects

  // get all products  --------
  useEffect(() => {
    axios
      .get("http://localhost:8000/customer/getAllProduts")
      .then((res) => {
        if (res.data.sucess) {
          setProductsData(res.data.products);
          addTempQuantity(res.data.products);
        } else {
          console.log("Error : ", res.data.message);
        }
      })
      .catch((err) => {
        console.log("Error : ", err);
      });
  }, []);

  /// get all stores --------
  useEffect(() => {
    axios
      .get("http://localhost:8000/store/getAll")
      .then((res) => {
        if (res.data.sucess) {
          setStores(res.data.stores);
        } else {
          console.log("Error : ", res.data.message);
        }
      })
      .catch((err) => {
        console.log("Error : ", err);
      });
  }, []);

  // get routes --------

  useEffect(() => {
    if (selectedStore) {
      axios
        .get(`http://localhost:8000/customer/getRoutes/${selectedStore}`)
        .then((res) => {
          if (res.data.sucess) {
            setRoutes(res.data.route);
          } else {
            console.log("Error : ", res.data.message);
          }
        })
        .catch((err) => {
          console.log("Error : ", err);
        });
    } else {
      axios
        .get("http://localhost:8000/customer/getAllRoutes")
        .then((res) => {
          if (res.data.sucess) {
            setRoutes(res.data.routes);
          } else {
            console.log("Error : ", res.data.message);
          }
        })
        .catch((err) => {
          console.log("Error : ", err);
        });
    }
  }, [selectedStore]);

  const addOrder = async () => {
    const orderDetails = {
      customer_id: customer_id,
      route_id,
      state,
      delivery_address,
      products: productsArray,
    };
    try {
      const result = await axios.post(
        "http://localhost:8000/customer/addOrder",
        orderDetails
      );
      alert("Order Added Successfull ----");
      navigate(`/dashboard/${id}`);
    } catch (err) {
      console.log("Error : ", err);
    }
  };

  console.log("ID ************* : ", id);
  console.log("Arrr :  ", productsArray);
  console.log("Customer Name : ", customer_id);
  console.log("Selected Store : ", selectedStore);
  console.log("Products Array 44444444444 : ", productsArray);
  console.log(
    "Products Details ############################ : ",
    productsDetailsArray
  );
  console.log("Delivery Address : ", delivery_address);
  console.log("Route ID : ", route_id);

  console.log("Products Data : ", productsData);
  console.log("Stores ", stores);
  console.log("Routes : ", routes);

  const addTempQuantity = (productsDatas) => {
    const updatedArray = productsDatas?.map((product) => {
      return { ...product, tempQuantity: 0 };
    });
    setProductsData(updatedArray);
  };

  const resetArray = (id) => {
    const updatedArray = productsDetailsArray.filter(
      (product) => product.product_id !== id
    );
    const updatedArray2 = productsArray.filter(
      (product) => product.product_id !== id
    );
    setProductsDetailsArray(updatedArray);
    setProductsArray(updatedArray2);
  };

  return (
    <div>
      <nav class="navbar navbar-light bg-dark ">
        <div class="container-fluid">
          <h5 className="fw-bold mb-2 text-white ">
            <Link to={`/dashboard/${id}`}>
              <i className="fas fa-angle-left me-2"></i>Back to Dashboard
            </Link>
          </h5>
        </div>
      </nav>

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

                      {productsDetailsArray.length > 0 ? (
                        <>
                          {productsDetailsArray.map((product) => {
                            return (
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
                                  <button
                                    className="bg-transparent text-dark border-0 float-end "
                                    onClick={() => {
                                      resetArray(product.product_id);
                                    }}
                                  >
                                    <i
                                      class="fa-solid fa-trash"
                                      style={{
                                        color: "#000000",
                                        fontSize: "15px",
                                      }}
                                    ></i>
                                  </button>
                                  <h5 className="text-primary">
                                    {product.name}
                                  </h5>
                                  <h6 style={{ color: "#9e9e9e" }}>
                                    Color : {product.color}
                                  </h6>
                                  <div className="d-flex align-items-center">
                                    <p className="fw-bold mb-0 me-5 pe-3">
                                      size : {product.size}
                                    </p>
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
                                        value={product.quantity}
                                        type="number"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </>
                      ) : (
                        <>
                          <div className="my-3 text-center ">
                            <h5>No Selected Items ...</h5>
                          </div>
                        </>
                      )}
                      {/* Product 1
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
                      </div> */}
                      {/* Product 2 */}

                      {/* Product 3 */}

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
                        Order Details
                      </h3>
                      <form className="mb-5">
                        <div className="form-outline mb-5">
                          <input
                            type="text"
                            id="c"
                            className="form-control form-control-md"
                            size="17"
                            value={id}
                            minLength="19"
                            maxLength="19"
                          />
                          <label className="form-label" for="typeText">
                            Customer_ID
                          </label>
                        </div>

                        <div className="form-outline mb-5">
                          <select
                            id="selectedStore"
                            className="form-select form-select-md"
                            value={selectedStore} // You'll need to define a state variable for the selected option
                            onChange={(e) => {
                              setSelectedStore(e.target.value);
                            }}
                          >
                            <option value={null}>choose store</option>
                            {stores?.map((store) => {
                              return (
                                <option value={store.store_id}>
                                  {store.name} : {store.city}
                                </option>
                              );
                            })}
                          </select>
                          <label className="form-label" for="typeName">
                            Store
                          </label>
                        </div>

                        <div className="form-outline mb-5">
                          <input
                            type="text"
                            id="delivery_address"
                            className="form-control form-control-lg"
                            size="17"
                            value={delivery_address}
                            onChange={(e) => {
                              setDelivery_address(e.target.value);
                            }}
                          />
                          <label className="form-label" for="typeName">
                            Delivery Address
                          </label>
                        </div>
                        <div className="row">
                          <div className="col-md-6 mb-5">
                            <select
                              id="route_id"
                              className="form-select form-select-md"
                              value={route_id} // You'll need to define a state variable for the selected option
                              onChange={(e) => {
                                setRouteId(e.target.value);
                              }}
                            >
                              <option value={null}>choose route</option>

                              {routes?.map((route) => {
                                return (
                                  <option value={route.route_id}>
                                    {route.route_id} : {route.destination}
                                  </option>
                                );
                              })}
                            </select>
                            <label className="form-label" for="typeName">
                              Store
                            </label>
                          </div>
                          <div className="col-md-6 mb-5">
                            <div className="form-outline">
                              <input
                                type="text"
                                id="typeText"
                                className="form-control form-control-lg"
                                value={state}
                                size="1"
                                minLength="3"
                                maxLength="3"
                              />
                              <label className="form-label" for="typeText">
                                Status
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
                          onClick={addOrder}
                        >
                          Add Order
                        </button>
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

                {/* Repeat the above card structure for each item in the shopping cart */}

                {/* -- Second Card Item ------------- */}

                {/* // Add products items  ------------------------------------ */}
                {productsData?.map((product) => {
                  return (
                    <>
                      <div className="card rounded-3 mb-4">
                        {/* Add content for the second item here */}

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
                              <p className="lead fw-normal mb-2">
                                {product.name}{" "}
                              </p>
                              <p>
                                <span className="text-muted">Size: </span>M{" "}
                                <span className="text-muted">Color: </span>Grey
                              </p>
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                              <button
                                className="btn btn-link px-2"
                                onClick={() => {
                                  product.tempQuantity--;
                                  setTempQuantity(product.tempQuantity);
                                }}
                              >
                                <i className="fas fa-minus"></i>
                              </button>
                              <input
                                id="product.tempQuantity "
                                min="0"
                                name="product.tempQuantity "
                                value={product.tempQuantity}
                                type="number"
                                className="form-control form-control-sm"
                                onChange={(e) => {
                                  const inputValue = e.target.value;
                                  const intValue = parseInt(inputValue, 10); // Use parseInt to convert the input to an integer
                                  product.tempQuantity = intValue;
                                  setTempQuantity(product.tempQuantity);
                                }}
                              />
                              <button
                                className="btn btn-link px-2"
                                onClick={() => {
                                  product.tempQuantity++;
                                  setTempQuantity(product.tempQuantity);
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                              <h5 className="mb-0">{`Rs. ${product.unit_price}`}</h5>
                            </div>
                            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                              <button
                                className="bg-transparent text-dark border-0"
                                onClick={() => {
                                  console.log("Quantity : ", tempQuantity);
                                  const updatedProduct = {
                                    product_id: product.product_id,
                                    quantity: product.tempQuantity,
                                  };
                                  const updatedProductDet = {
                                    product_id: product.product_id,
                                    quantity: product.tempQuantity,
                                    name: product.name,
                                    unit_price: product.unit_price,
                                    color: "Grey",
                                    size: "M",
                                  };

                                  // Create a copy of the current state array and add the new product

                                  productsArray.push(updatedProduct);
                                  // productsDetailsArray.push(updatedProductDetails);
                                  setProductsDetailsArray([
                                    ...productsDetailsArray,
                                    updatedProductDet,
                                  ]);

                                  // Update the state with the new array
                                  console.log(productsArray);
                                  console.log(productsDetailsArray);
                                }}
                              >
                                <i
                                  class="fa-solid fa-cart-shopping"
                                  style={{ color: "#000000", fontSize: "35px" }}
                                ></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}

                {/* Repeat for other items */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
