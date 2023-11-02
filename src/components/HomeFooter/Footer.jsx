import React from "react";

function Footer() {
  return (
    <footer className="text-center text-lg-start bg-dark  text-primary ">
      {/* Section: Social media */}
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        {/* Left */}
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        {/* Left */}

        {/* Right */}
        <div>
          <a href="/" className="me-4 link-secondary">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="/" className="me-4 link-secondary">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="/" className="me-4 link-secondary">
            <i className="fab fa-google"></i>
          </a>
          <a href="/" className="me-4 link-secondary">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="/" className="me-4 link-secondary">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="/" className="me-4 link-secondary">
            <i className="fab fa-github"></i>
          </a>
        </div>
        {/* Right */}
      </section>
      {/* Section: Social media */}

      {/* Section: Links */}
      <section>
        <div className="container text-center text-md-start mt-5">
          {/* Grid row */}
          <div className="row mt-3">
            {/* Grid column */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* Content */}
              <h6 style={{ fontSize: '48px' }} className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3 text-secondary"></i>Company 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A
              </h6>
              <p>
                
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Delivery Product Categories</h6>
              <p>
                Food and Groceries
              </p>
              <p>
                Retail and Consumer Goods
              </p>
              <p>
                Building and Construction Materials
              </p>
              <p>
                Automotive Products
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <p>
                <br></br>
                <br></br>
              </p>
              <p>
                Industrial and Manufacturing Supplies
              </p>
              <p>
                Printed Materials
              </p>
              <p>
                Medical Supplies
              </p>
              <p>
                Specialty Products
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home me-3 text-secondary"></i> P09/0107 Company A(Private) Ltd No 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;715, Peradeniya Road , Kandy
              </p>
              <p>
                <i className="fas fa-envelope me-3 text-secondary"></i>
                companyA@gmail.com
              </p>
              <p>
                <i className="fas fa-phone me-3 text-secondary"></i> + 71 30 44 687
              </p>
              <p>
                <i className="fas fa-print me-3 text-secondary"></i> + 81 22 45 461
              </p>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
      </section>
      {/* Section: Links */}
    </footer>
  );
}

export default Footer;