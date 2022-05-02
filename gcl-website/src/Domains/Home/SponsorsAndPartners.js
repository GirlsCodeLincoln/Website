import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
  useTheme,
} from '@mui/material';

const SponsorsAndPartners = () => {
  const theme = useTheme();

  return (
    <Container component="section" align="center">
      <Typography variant="h2" align="center">
        A Huge Thank You to Our Sponsors and Partners
      </Typography>

      <Typography variant="h3" align="center">
        Sponsors
      </Typography>
      <Grid
        container
        gap={5}
        alignItems="center"
        justifyContent="center"
        marginBottom={theme.spacing(5)}
      >
        {sponsors.map((sponsor) => (
          <Grid item key={sponsor.id}>
            <a
              href={sponsor.href}
              id={sponsor.id}
              rel="noopener noreferrer"
              target="_blank"
              key={sponsor.id}
            >
              <Box
                component="img"
                alt={sponsor.name}
                src={sponsor.logo}
                width={theme.spacing(30)}
                sx={{
                  transition: 'transform 0.3s ease',

                  // Hover effects
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },

                  // On mobile devices, do not show hover effects
                  '@media (hover: none)': {
                    '&:hover': {
                      transform: 'none',
                    },
                  },
                }}
              />
            </a>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ marginBottom: theme.spacing(5) }} />

      <Typography variant="h3" align="center">
        Partners
      </Typography>
      <Grid
        container
        gap={5}
        alignItems="center"
        justifyContent="center"
        marginBottom={theme.spacing(5)}
      >
        {partners.map((partner) => (
          <Grid item key={partner.id}>
            <a
              href={partner.href}
              id={partner.id}
              rel="noopener noreferrer"
              target="_blank"
              key={partner.id}
            >
              <Box
                component="img"
                alt={partner.name}
                src={partner.logo}
                width={theme.spacing(30)}
                sx={{
                  transition: 'transform 0.3s ease',

                  // Hover effects
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },

                  // On mobile devices, do not show hover effects
                  '@media (hover: none)': {
                    '&:hover': {
                      transform: 'none',
                    },
                  },
                }}
              />
            </a>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ marginBottom: theme.spacing(5) }} />

      <Button
        variant="contained"
        href="assets/pdf/GCL-Donation-Info.pdf"
        id="donatebutton"
        rel="noopener noreferrer"
        role="button"
        target="_blank"
      >
        Want to become a Sponsor or Partner?
      </Button>
    </Container>
  );
};

const sponsors = [
  {
    id: 'mentorsfound',
    name: 'Mentors Found',
    href: 'https://mentorsfound.com',
    logo: '/assets/img/sponsors/mentors.png',
  },
  {
    id: 'hudl',
    name: 'Hudl',
    href: 'https://www.hudl.com',
    logo: '/assets/img/sponsors/hudl.png',
  },
  {
    id: 'assurity',
    name: 'Assurity',
    href: 'https://www.assurity.com/',
    logo: '/assets/img/sponsors/assurity.png',
  },
  {
    id: 'ameritas',
    name: 'Ameritas',
    href: 'https://www.ameritas.com/',
    logo: '/assets/img/sponsors/ameritas.svg',
  },
  {
    id: 'dpl',
    name: "Don't Panic Labs",
    href: 'https://dontpaniclabs.com/',
    logo: '/assets/img/sponsors/dpl.png',
  },
  {
    id: 'ngtc',
    name: 'Nebraska Governance and Technology Center',
    href: 'https://ngtc.unl.edu/',
    logo: '/assets/img/sponsors/NGTC.png',
  },
];

const partners = [
  {
    id: 'muchachos',
    name: 'Muchachos',
    href: 'https://www.yomuchacho.com',
    logo: '/assets/img/partners/muchachos.webp',
  },
  {
    id: 'launchleadership',
    name: 'Launch Leadership',
    href: 'https://www.launchleadership.org',
    logo: '/assets/img/partners/launch.png',
  },
  {
    id: 'fusecoworking',
    name: 'FUSE Coworking',
    href: 'https://www.fusecoworking.com',
    logo: '/assets/img/partners/fuse.png',
  },
  {
    id: 'makeshiftlincoln',
    name: 'Makeshift Lincoln',
    href: 'http://makeshiftlincoln.org',
    logo: '/assets/img/partners/makeshift.png',
  },
  {
    id: 'selfimagedefined',
    name: 'Self Image Defined',
    href: 'https://www.selfimagedefined.org',
    logo: '/assets/img/partners/selfid.png',
  },
  {
    id: 'leturaidigima',
    name: 'Letura Idigima',
    href: 'https://leturaidigima.com',
    logo: '/assets/img/partners/letura.png',
  },
  {
    id: 'carlosvelascodesign',
    name: 'Carlos Velasco Design',
    href: 'https://www.carlosvelascodesign.com',
    logo: '/assets/img/partners/carlos.png',
  },
];

export default SponsorsAndPartners;
