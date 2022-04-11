import { Container, IconButton, Typography, useTheme } from '@mui/material';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookSquare,
  faGithub,
  faInstagram,
  faLinkedinIn,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getCurrentYear } from '../utils';
import { Box } from '@mui/system';

const Footer = () => {
  const theme = useTheme();

  return (
    <Container
      component="footer"
      sx={{
        ...theme.components.MuiContainer.defaultProps.sx,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        align="center"
        marginTop={0}
        marginBottom={1}
      >
        Connect With Us
      </Typography>

      <Box marginBottom={1}>
        {socialButtons.map((socialButton) => (
          <IconButton
            key={socialButton.id}
            aria-label={socialButton.name}
            title={socialButton.name}
            href={socialButton.href}
            rel="noopener noreferrer"
            target="_blank"
            sx={{ height: theme.spacing(6), width: theme.spacing(6) }}
          >
            <FontAwesomeIcon icon={socialButton.icon} fixedWidth />
          </IconButton>
        ))}
      </Box>

      <Typography>Lincoln, NE</Typography>
      <Typography>
        Copyright &copy; {getCurrentYear()} Girls Code Lincoln
      </Typography>
    </Container>
  );
};

const socialButtons = [
  {
    id: 'email-list-footer',
    name: 'Mailing List',
    href: 'https://www.mailchi.mp/97830933907d/signup',
    icon: faEnvelope,
  },
  {
    id: 'instagram',
    name: 'Instagram',
    href: 'https://www.instagram.com/girlscodelincoln/',
    icon: faInstagram,
  },
  {
    id: 'facebook',
    name: 'Facebook',
    href: 'https://www.facebook.com/girlscodelincoln/',
    icon: faFacebookSquare,
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/girlscodelincoln',
    icon: faLinkedinIn,
  },
  {
    id: 'youtube',
    name: 'YouTube',
    href: 'https://www.youtube.com/channel/UCB1dk_q4VmA48RFak6vRINQ/',
    icon: faYoutube,
  },
  {
    id: 'github',
    name: 'GitHub',
    href: 'https://github.com/GirlsCodeLincoln',
    icon: faGithub,
  },
];

export default Footer;
