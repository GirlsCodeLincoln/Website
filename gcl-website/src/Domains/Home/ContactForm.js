import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Button, Grid, TextField, Typography } from '@mui/material';

const ContactForm = () => {
  return (
    <section className="col-12 py-5">
      <Typography variant="h2" textAlign="center">
        Contact
      </Typography>
      <Typography textAlign="center">
        Send us a message and we will get back to you soon!
      </Typography>
      <form
        className="col-10 col-lg-6 mx-auto text-white"
        data-netlify="true"
        data-netlify-recaptcha="true"
        method="POST"
        name="contact"
        netlify-honeypot="bot-field"
      >
        <Grid container direction="column" alignItems="center" spacing={2}>
          <Grid item>
            <p className="d-none">
              <label>
                Don't fill this out if you're human: <input name="bot-field" />
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
            <div className="g-recaptcha" data-sitekey="6LdacrcfAAAAAKzbU1anCKR-6IdG61CxY6Z8D3mi"/>
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
    </section>
  );
};

export default ContactForm;
