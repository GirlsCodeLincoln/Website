import { Box, Container, Typography, useTheme } from '@mui/material';

const HeroHeader = () => {
  const theme = useTheme();

  return (
    <>
      <Box
        component="section"
        width="100%"
        sx={{
          backgroundColor: theme.palette.grey[900],
          backgroundImage: 'url(/assets/img/background.jpg)',
          backgroundPosition: 'center',
        }}
      >
        <Container
          sx={{
            paddingY: theme.spacing(15),
            textAlign: 'center',
            color: theme.palette.getContrastText(theme.palette.grey[900]),
          }}
        >
          <img
            alt="Girls Code Lincoln"
            src="/assets/img/girlscodelincoln.svg"
          />

          <Typography variant="h5" component="p">
            Teaching girls about technology through creativity, community,
            collaboration, and confidence.
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default HeroHeader;
