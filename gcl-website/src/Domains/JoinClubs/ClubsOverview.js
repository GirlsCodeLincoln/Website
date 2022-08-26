import { Box, Container, Typography, useTheme } from '@mui/material';

const ClubsOverview = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: theme.palette.primary,
        background:
          "linear-gradient(180deg, rgba(242, 175, 228, 1), rgba(242, 175, 228, 0.9) 80%, rgba(242, 175, 228, 1)), url('/assets/img/clubs-background.jpg')",
        backgroundPosition: 'center right',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container sx={{ paddingY: theme.spacing(8), textAlign: 'center' }}>
        <Typography variant="h2" sx={{ marginTop: 0 }}>
          Our Clubs
        </Typography>
        <Typography>
          Our clubs give girls interested in coding a gentle introduction to
          software, hardware, computer science fundamentals, and leadership
          through projects, activities, and community speakers.
        </Typography>
      </Container>
    </Box>
  );
};

export default ClubsOverview;
