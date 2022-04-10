import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faGithub,
  faInstagram,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
            {socialButtons.map((socialButton) => (
              <a
                aria-label={socialButton.name}
                href={socialButton.href}
                id={socialButton.id}
                key={socialButton.id}
                rel="noopener noreferrer"
                target="_blank"
                style={{ margin: "0 0.25em" }}
              >
                <FontAwesomeIcon
                  icon={socialButton.icon}
                  fixedWidth
                  size="2x"
                />
              </a>
            ))}
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

const socialButtons = [
  {
    id: "email-list-footer",
    name: "Mailing List",
    href: "https://www.mailchi.mp/97830933907d/signup",
    icon: faEnvelope,
  },
  {
    id: "instagram",
    name: "Instagram",
    href: "https://www.instagram.com/girlscodelincoln/",
    icon: faInstagram,
  },
  {
    id: "facebook",
    name: "Facebook",
    href: "https://www.facebook.com/girlscodelincoln/",
    icon: faFacebookSquare,
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/girlscodelincoln",
    icon: faLinkedinIn,
  },
  {
    id: "youtube",
    name: "YouTube",
    href: "https://www.youtube.com/channel/UCB1dk_q4VmA48RFak6vRINQ/",
    icon: faYoutube,
  },
  {
    id: "github",
    name: "GitHub",
    href: "https://github.com/GirlsCodeLincoln",
    icon: faGithub,
  },
];

export default Footer;
