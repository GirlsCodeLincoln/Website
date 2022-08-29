import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Typography,
  useTheme,
} from '@mui/material';

const PersonCard = (props) => {
  const theme = useTheme();

  return (
    <Card>
      <Grid container gap={1}>
        <Grid item>
          <CardMedia
            component="img"
            image={props.image}
            alt={props.name}
            sx={{
              height: theme.spacing(20),
              width: theme.spacing(20),
            }}
          />
        </Grid>

        <Grid item>
          <CardContent>
            <Typography variant="h3">{props.name}</Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {props.title}
            </Typography>
            {props.email && (
              <Typography>
                <Link href={`mailto:${props.email}`}>{props.email}</Link>
              </Typography>
            )}
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default PersonCard;
