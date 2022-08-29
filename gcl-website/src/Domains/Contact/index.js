import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import Header from '../../Components/Header';

const ContactForm = () => {
  return (
    <Box component="main">
      <Header>
        <Typography variant="h1">Contact Us</Typography>
      </Header>

      <Container maxWidth="md">
        <Typography textAlign="center">
          Send us a message and we will get back to you soon!
        </Typography>
        <form
          data-netlify="true"
          data-netlify-recaptcha="true"
          method="POST"
          name="contact"
          netlify-honeypot="bot-field"
        >
          <Grid container direction="column" alignItems="center" spacing={2}>
            <Grid item>
              <p style={{ display: 'none' }}>
                <label>
                  Don't fill this out if you're human:{' '}
                  <input name="bot-field" />
                </label>
              </p>
            </Grid>

            <Grid container item xs spacing={2}>
              <Grid item sm>
                <TextField
                  label="Name"
                  placeholder="Enter name"
                  name="name"
                  required
                  type="text"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item sm>
                <TextField
                  label="Email"
                  placeholder="Enter email"
                  name="email"
                  required
                  type="email"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
            </Grid>

            <Grid container item xs>
              <TextField
                label="Message"
                placeholder="Enter your message"
                name="message"
                required
                multiline
                rows={5}
                fullWidth
              />
            </Grid>

            <Grid item>
              <div
                style={{ display: 'inline-block' }}
                data-sitekey="6LdacrcfAAAAAKzbU1anCKR-6IdG61CxY6Z8D3mi"
              />
            </Grid>

            <Grid item>
              <Button
                type="submit"
                variant="contained"
                startIcon={<FontAwesomeIcon icon={faPaperPlane} />}
                color="secondary"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Box>
  );
};

export default ContactForm;
