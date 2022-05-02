import { Container, Typography } from '@mui/material';

const Podcast = () => {
  return (
    <Container component="section" id="podcast" maxWidth="md" align="center">
      <Typography variant="h2">
        Check out our{' '}
        <a
          href="https://www.buzzsprout.com/1882218"
          target="_blank"
          rel="noopener noreferrer"
        >
          Podcast
        </a>
        !
      </Typography>

      <Typography paragraph>
        Hosts Elsbeth Magilton and Aakriti Agrawal profile a historical woman in
        coding each month and introduce listeners to a coder in or from
        Nebraska.
      </Typography>

      <iframe
        id="player_iframe"
        src="https://www.buzzsprout.com/1882218?client_source=large_player&iframe=true&referrer=https%3A%2F%2Fwww.buzzsprout.com%2F1882218%2Fpodcast%2Fembed"
        loading="lazy"
        width="100%"
        height="375"
        frameBorder="0"
        scrolling="no"
        title="The Girls Code Lincoln Podcast"
      />
    </Container>
  );
};

export default Podcast;
