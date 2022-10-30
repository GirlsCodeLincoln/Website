import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const PersonCard = (props) => {
  return (
    <Card
      variant="outlined"
      align="center"
      sx={{ height: '100%', borderRight: 'red' }}
    >
      {props.image && (
        <CardMedia component="img" image={props.image} alt={props.name} />
      )}

      <CardContent>
        <Typography
          variant="h4"
          variantMapping={{ h4: 'h3' }}
          sx={{ marginBottom: 0.5, marginTop: 1 }}
        >
          {props.name}
        </Typography>

        <Typography>{props.title}</Typography>

        {props.email && (
          <IconButton
            href={`mailto:${props.email}`}
            aria-label={`Email ${props.name}`}
          >
            <FontAwesomeIcon icon={faEnvelope} size="xs" />
          </IconButton>
        )}
      </CardContent>
    </Card>
  );
};

export default PersonCard;
