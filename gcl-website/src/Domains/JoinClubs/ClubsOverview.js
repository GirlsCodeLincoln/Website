const ClubsOverview = () => {
  return (
    <section className="bg-pink col-12 py-5" id="our-clubs">
      <div className="text-center col-lg-7 col-xs-8 mx-auto mb-3">
        <h2 className="font-weight-bold">Our Clubs</h2>
        <i>
          Our clubs give girls interested in coding a gentle introduction to
          software, hardware, computer science fundamentals, and leadership
          through projects, activities, and community speakers.
        </i>
      </div>
      <div className="col-12 d-flex justify-content-center">
        <div className="col-lg-8 col-xs-10">
          <ul className="timeline">
            <li>
              <h5 className="font-weight-bold">Spring 2020</h5>
              <p>
                Three clubs were held in Spring 2020 - a beginner club, a web
                development club, and a hardware club!
              </p>
            </li>
            <li>
              <h5 className="font-weight-bold">Fall 2019</h5>
              <p>
                Three clubs were held at FUSE Coworking - a beginner, an
                intermediate, and an advanced! The beginner club learned web
                development for the first time. The intermediate club expanded
                their knowledge base on web development and programmed
                Micro:Bits microcontrollers. The advanced club learned special
                topics and helped teach workshops.
              </p>
            </li>
            <li>
              <h5 className="font-weight-bold">Spring 2019</h5>
              <p>
                Two clubs were held at FUSE Coworking. The beginner club learned
                web development using HTML, CSS, and JavaScript. The
                intermediate club focused on hardware projects and softskills
                including leadership and mentoring.
              </p>
            </li>
            <li className="previous-club">
              <h5 className="font-weight-bold">Fall 2018</h5>
              <p>
                The girls in the FUSE Coworking club learned advanced web
                development including making custom extensions for Chrome. They
                also programmed Micro:Bits microcontrollers using the JavaScript
                programming language. Girls in a second club learned the basics
                of computer science through web development using HTML, CSS, and
                JavaScript.
              </p>
            </li>
            <li className="previous-club">
              <h5 className="font-weight-bold">Spring 2018</h5>
              <p>
                The FUSE Coworking club learned web development using HTML, CSS,
                and JavaScript. They were the first club to learn leadership
                skills through our continued partnership with
                <a
                  href="https://launchleadership.org"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Launch Leadership.
                </a>
              </p>
            </li>
            <li className="previous-club">
              <h5 className="font-weight-bold">Fall 2017</h5>
              <p>
                Girls at the FUSE Coworking weekend club learned to code
                drawings and animations using Dr. Racket, a LISP-style
                programming language. For a final project, the girls created
                light-up clothing using an Arduino microcontroller, programmable
                LEDs, and the C++ programming language.
              </p>
            </li>
            <li className="previous-club">
              <h5 className="font-weight-bold">Spring 2017</h5>
              <p>
                The Goodrich Middle School club programmed Arduino robots with
                the C++ programming language. A weekend club at Turbine Flats
                taught game development using the Python programming language
                and Codesters. The girls completed a community impact project by
                building
                <a
                  href="http://womenempowerment.tech/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  a women empowerment website
                </a>
                featuring inspiring quotes, stories, and the games they
                developed.
              </p>
            </li>
            <li className="previous-club">
              <h5 className="font-weight-bold">Fall 2016</h5>
              <p>
                The Park Middle School club taught game development while the
                Goodrich Middle School taught computer programming basics using
                JavaScript and the Khan Academy platform.
              </p>
            </li>
            <li className="previous-club">
              <h5 className="font-weight-bold">Spring 2016</h5>
              <p>
                Girls Code Lincoln started as a branch of Girls Who Code. Clubs
                were held after-school at six Lincoln middle schools: Dawes,
                Park, Culler, Goodrich, Mickle, and Lefler. The girls learned
                basic programming and game development using the Python
                programming language on the Codesters platform.
              </p>
            </li>
          </ul>
          <h5 className="timeline-show-more">View Previous Clubs</h5>
          <h5 className="timeline-show-less">Hide Previous Clubs</h5>
        </div>
      </div>
    </section>
  );
};

export default ClubsOverview;
