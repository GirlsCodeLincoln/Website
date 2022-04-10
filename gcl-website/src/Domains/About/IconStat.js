import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Avatar, Typography, useTheme } from '@mui/material';
import { Box } from '@mui/system';

const IconStat = ({ icon, figure, subtext }) => {
  const theme = useTheme();

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Avatar
        sx={{
          bgcolor: theme.palette.secondary.main,
          height: theme.spacing(16),
          width: theme.spacing(16),
          marginBottom: theme.spacing(1),
        }}
      >
        <FontAwesomeIcon icon={icon} fixedWidth size="3x" />
      </Avatar>

      <Typography
        sx={{ ...theme.typography.h3, marginTop: 0, marginBottom: 0 }}
        align="center"
      >
        {figure}
      </Typography>
      <Typography align="center">{subtext}</Typography>
    </Box>
  );
};

export default IconStat;
