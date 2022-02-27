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
        <div className="col-xs-6 col-sm-2 d-flex flex-column align-items-center text-center">
          <span className="fa-stack fa-4x">
            <i className="fas fa-circle fa-stack-2x icon-background"></i>
            <i className="fas fa-laptop-code fa-stack-1x icon-foreground"></i>
          </span>
          <h3 className="impact-figure font-weight-bold">20+</h3>
          <h5 className="impact-subtext">
            Multiweek Tech & Leadership Clubs Completed
          </h5>
        </div>
        <div className="col-xs-6 col-sm-2 d-flex flex-column align-items-center text-center mt-3 mt-sm-0">
          <span className="fa-stack fa-4x">
            <i className="fas fa-circle fa-stack-2x icon-background"></i>
            <i className="fas fa-female fa-stack-1x icon-foreground"></i>
          </span>
          <h3 className="impact-figure font-weight-bold">200+</h3>
          <h5 className="impact-subtext">
            Girls Impacted Through Clubs and Workshops
          </h5>
        </div>
        <div className="col-xs-6 col-sm-2 d-flex flex-column align-items-center text-center mt-3 mt-sm-0">
          <span className="fa-stack fa-4x">
            <i className="fas fa-circle fa-stack-2x icon-background"></i>
            <i className="fas fa-sync-alt fa-stack-1x icon-foreground"></i>
          </span>
          <h3 className="impact-figure font-weight-bold">72%</h3>
          <h5 className="impact-subtext">
            of Girls Return for Two or More Semesters
          </h5>
        </div>
        <div className="col-xs-6 col-sm-2 d-flex flex-column align-items-center text-center mt-3 mt-sm-0">
          <span className="fa-stack fa-4x">
            <i className="fas fa-circle fa-stack-2x icon-background"></i>
            <i className="fas fa-hand-holding-heart fa-stack-1x icon-foreground"></i>
          </span>
          <h3 className="impact-figure font-weight-bold">50+</h3>
          <h5 className="impact-subtext">Volunteers Support Our Work</h5>
        </div>
      </div>
    </section>
  );
};

export default About;
