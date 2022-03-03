import {
  faFemale,
  faHandHoldingHeart,
  faLaptopCode,
  faRotate,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
  return (
    <section
      className="col-12 justify-content-center bg-grey py-5"
      id="about-us"
    >
      <div className="col-xs-10 col-md-8 text-center mx-auto mb-5">
        <h3 className="mb-3 font-weight-bold">
          Girls Code Lincoln is a 501(c)(3) nonprofit organization. We strive to
          ignite passion for technology and leadership in young girls with the
          long-term goal of closing the gender gap in S.T.E.M.
        </h3>
        <i>
          We host multiweek technology clubs for 4th-9th grade girls. All clubs
          are completely free and 100% volunteer-run.
          <br />
          We partner with Nebraska organizations and build in-house curriculum
          to teach technology, leadership, and life skills.
        </i>
      </div>
      <h3 className="text-center mb-4">Our Impact</h3>
      <div className="col-9 d-flex flex-row justify-content-between align-items-start mx-auto flex-wrap">
        {impactStats.map((impactStat) => (
          <div className="col-xs-6 col-sm-2 d-flex flex-column align-items-center text-center">
            <div
              style={{
                backgroundColor: "#d895ca",
                color: "#EEF1F6",
                borderRadius: "50%",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                height: "8em",
                width: "8em",
              }}
            >
              <FontAwesomeIcon icon={impactStat.icon} fixedWidth size="4x" />
            </div>
            <h3 className="impact-figure font-weight-bold">
              {impactStat.figure}
            </h3>
            <h5 className="impact-subtext">{impactStat.subtext}</h5>
          </div>
        ))}
      </div>
    </section>
  );
};

const impactStats = [
  {
    figure: "20+",
    subtext: "Multiweek Tech & Leadership Clubs Completed",
    icon: faLaptopCode,
  },
  {
    figure: "200+",
    subtext: "Girls Impacted Through Clubs and Workshops",
    icon: faFemale,
  },
  {
    figure: "72%",
    subtext: "of Girls Return for Two or More Semesters",
    icon: faRotate,
  },
  {
    figure: "50+",
    subtext: "Volunteers Support Our Work",
    icon: faHandHoldingHeart,
  },
];

export default About;
