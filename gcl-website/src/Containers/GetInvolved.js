const GetInvolved = () => {
  return (
    <section className="bg-grey col-12 py-5" id="get-involved">
      <div className="text-center col-11 mx-auto mb-3">
        <h2 className="font-weight-bold mb-3 text-light">Get Involved as a:</h2>
        <div className="col-lg-6 col-md-8 col-xs-12 d-flex flex-row justify-content-center mx-auto">
          <div className="card-deck">
            <div className="card">
              <img
                alt="Students with their completion certificates"
                className="card-img-top"
                src="/assets/img/student-background.jpg"
              />
              <div className="card-body">
                <h5 className="card-title">Student</h5>
                <div>
                  <button
                    className="btn btn-sm info-btn text-light"
                    disabled
                    id="join-club"
                  >
                    Applications are closed
                  </button>
                </div>
              </div>
            </div>
            <div className="card">
              <img
                alt="Volunteers planning club logistics"
                className="card-img-top"
                src="/assets/img/volunteer-background.jpg"
              />
              <div className="card-body">
                <h5 className="card-title">Volunteer</h5>
                <div>
                  <a
                    className="btn btn-sm info-btn text-light"
                    href="/assets/pdf/GCL-Volunteer-Information.pdf"
                    id="volunteerInfo"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Information
                  </a>
                  <a
                    className="btn btn-sm cta-btn"
                    href="https://www.surveymonkey.com/r/2JNS682"
                    id="joinTeam"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Join our team
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
