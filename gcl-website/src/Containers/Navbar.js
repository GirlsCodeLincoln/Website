const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md row bg-blue navbar-dark">
      <div className="navbar-brand">
        <img
          alt="Girls Code Lincoln"
          src="/assets/img/girlscodelincoln-nav.svg"
        />
      </div>
      <a
        className="cta-btn nav-link font-weight-bold btn btn-sm ml-auto mr-2 d-md-none"
        href="/donate"
        id="donate-sm"
        rel="noopener noreferrer"
        target="_blank"
      >
        Donate
      </a>
      <button
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        className="navbar-toggler"
        data-target="#navbarNav"
        data-toggle="collapse"
        type="button"
      >
        <span className="navbar-toggler-icon d-flex justify-content-center align-items-center">
          <i aria-hidden="true" className="fas fa-bars"></i>
        </span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto align-items-md-center">
          <li className="nav-item">
            <a className="nav-link intrapage-nav" href="#about-us">
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link intrapage-nav" href="#get-involved">
              Get Involved
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link intrapage-nav" href="#podcast">
              Podcast
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="/shop"
              id="shop"
              rel="noopener noreferrer"
              target="_blank"
            >
              Shop
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://mailchi.mp/97830933907d/signup"
              id="email-list-header"
              rel="noopener noreferrer"
              target="_blank"
            >
              Mailing List
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link intrapage-nav" href="#contact">
              Contact
            </a>
          </li>
          <li className="nav-item d-none d-md-block">
            <a
              className="cta-btn nav-link font-weight-bold btn ml-lg-2"
              href="/donate"
              id="donate"
              rel="noopener noreferrer"
              target="_blank"
            >
              Donate
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
