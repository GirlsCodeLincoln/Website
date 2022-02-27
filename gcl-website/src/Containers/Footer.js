import { getCurrentYear } from "../utils";

const Footer = () => {
  return (
    <footer className="row py-3 bg-grey">
      <div className="col-12 text-black text-center">
        <div className="my-4">
          <h5>
            <i className="font-weight-bold">Connect With Us</i>
          </h5>
          <div id="social-links">
            <a
              aria-label="Mailing List"
              href="https://www.mailchi.mp/97830933907d/signup"
              id="email-list-footer"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fas fa-envelope fa-2x mx-2"></i>
            </a>
            <a
              aria-label="Instagram"
              href="https://www.instagram.com/girlscodelincoln/"
              id="instagram"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i aria-hidden="true" className="fab fa-instagram fa-2x mx-2"></i>
            </a>
            <a
              aria-label="Facebook"
              href="https://www.facebook.com/girlscodelincoln/"
              id="facebook"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i
                aria-hidden="true"
                className="fab fa-facebook-square fa-2x mx-2"
              ></i>
            </a>
            <a
              aria-label="LinkedIn"
              href="https://www.linkedin.com/company/girlscodelincoln"
              id="linkedin"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i
                aria-hidden="true"
                className="fab fa-linkedin-in fa-2x mx-2"
              ></i>
            </a>
            <a
              aria-label="YouTube"
              href="https://www.youtube.com/channel/UCB1dk_q4VmA48RFak6vRINQ/"
              id="youtube"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i aria-hidden="true" className="fab fa-youtube fa-2x mx-2"></i>
            </a>
            <a
              aria-label="GitHub"
              href="https://github.com/GirlsCodeLincoln"
              id="github"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i aria-hidden="true" className="fab fa-github fa-2x mx-2"></i>
            </a>
          </div>
        </div>
        <i>Lincoln, NE</i>
        <br />
        <i id="copyright-container">
          Copyright &copy; {getCurrentYear()} Girls Code Lincoln
        </i>
      </div>
    </footer>
  );
};

export default Footer;
