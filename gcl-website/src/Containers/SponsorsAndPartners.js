const SponsorsAndPartners = () => {
  return (
    <section className="col-12 py-5" id="sponsors-partners">
      <h2 className="text-center mb-5 font-weight-bold">
        A Huge Thank You to Our Sponsors and Partners
      </h2>

      <h3 className="text-center mb-4">Sponsors</h3>
      <div className="col-10 d-flex flex-wrap justify-content-center mx-auto mb-5 align-items-center">
        {sponsors.map((sponsor) => (
          <a
            href={sponsor.href}
            id={sponsor.id}
            rel="noopener noreferrer"
            target="_blank"
            key={sponsor.id}
          >
            <img alt={sponsor.name} className="px-3 logo" src={sponsor.logo} />
          </a>
        ))}
      </div>

      <h3 className="text-center mb-4">Partners</h3>
      <div className="col-10 d-flex flex-wrap justify-content-center mx-auto align-items-center">
        {partners.map((partner) => (
          <a
            href={partner.href}
            id={partner.id}
            rel="noopener noreferrer"
            target="_blank"
            key={partner.id}
          >
            <img alt={partner.name} className="px-3 logo" src={partner.logo} />
          </a>
        ))}
      </div>

      <div className="col-10 mx-auto">
        <hr className="hr" />
      </div>

      <div className="mx-auto mt-5 d-flex justify-content-center align-items-center">
        <a
          className="btn info-btn text-light"
          href="assets/pdf/GCL-Donation-Info.pdf"
          id="donatebutton"
          rel="noopener noreferrer"
          role="button"
          target="_blank"
        >
          Want to become a Sponsor or Partner?
        </a>
      </div>
    </section>
  );
};

const sponsors = [
  {
    id: "mentorsfound",
    name: "Mentors Found",
    href: "https://mentorsfound.com",
    logo: "/assets/img/sponsors/mentors.png",
  },
  {
    id: "hudl",
    name: "Hudl",
    href: "https://www.hudl.com",
    logo: "/assets/img/sponsors/hudl.png",
  },
  {
    id: "assurity",
    name: "Assurity",
    href: "https://www.assurity.com/",
    logo: "/assets/img/sponsors/assurity.png",
  },
  {
    id: "ameritas",
    name: "Ameritas",
    href: "https://www.ameritas.com/",
    logo: "/assets/img/sponsors/ameritas.svg",
  },
  {
    id: "dpl",
    name: "Don't Panic Labs",
    href: "https://dontpaniclabs.com/",
    logo: "/assets/img/sponsors/dpl.png",
  },
  {
    id: "ngtc",
    name: "Nebraska Governance and Technology Center",
    href: "https://ngtc.unl.edu/",
    logo: "/assets/img/sponsors/NGTC.png",
  },
];

const partners = [
  {
    id: "muchachos",
    name: "Muchachos",
    href: "https://www.yomuchacho.com",
    logo: "/assets/img/partners/muchachos.webp",
  },
  {
    id: "launchleadership",
    name: "Launch Leadership",
    href: "https://www.launchleadership.org",
    logo: "/assets/img/partners/launch.png",
  },
  {
    id: "fusecoworking",
    name: "FUSE Coworking",
    href: "https://www.fusecoworking.com",
    logo: "/assets/img/partners/fuse.png",
  },
  {
    id: "makeshiftlincoln",
    name: "Makeshift Lincoln",
    href: "http://makeshiftlincoln.org",
    logo: "/assets/img/partners/makeshift.png",
  },
  {
    id: "selfimagedefined",
    name: "Self Image Defined",
    href: "https://www.selfimagedefined.org",
    logo: "/assets/img/partners/selfid.png",
  },
  {
    id: "leturaidigima",
    name: "Letura Idigima",
    href: "https://leturaidigima.com",
    logo: "/assets/img/partners/letura.png",
  },
  {
    id: "carlosvelascodesign",
    name: "Carlos Velasco Design",
    href: "https://www.carlosvelascodesign.com",
    logo: "/assets/img/partners/carlos.png",
  },
];

export default SponsorsAndPartners;
