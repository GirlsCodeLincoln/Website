import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, IconButton, Stack, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';

const ImageGallery = () => {
  const theme = useTheme();

  // Images to display in the gallery
  const images = [
    {
      src: '/assets/img/gallery/girlscode-17.jpg',
      alt: 'Girl Smiling While Coding',
    },
    {
      src: '/assets/img/gallery/girlscode-1.jpg',
      alt: 'Girls With Yarn During a Leadership Activity',
    },
    {
      src: '/assets/img/gallery/girlscode-4.jpg',
      alt: 'Girls High Fiving',
    },
    {
      src: '/assets/img/gallery/girlscode-18.jpg',
      alt: 'Girl Focusing While Coding',
    },
    {
      src: '/assets/img/gallery/girlscode-19.jpg',
      alt: 'Volunteer and Two Girls Laughing While Coding',
    },
  ];

  const [step, setStep] = useState(0);
  const maxSteps = images.length;

  // Automatically change the image shown in the gallery every few seconds
  useEffect(() => {
    let timeoutId = setTimeout(
      () => setStep(step + 1 < maxSteps ? step + 1 : 0),
      4000 // milliseconds
    );
    return () => clearTimeout(timeoutId);
  }, [step, maxSteps]);

  return (
    <Box
      component="section"
      width="100%"
      height="80vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      position="relative"
    >
      {images.map(
        (image, index) =>
          index === step && (
            <Box
              key={image.src}
              component="img"
              src={image.src}
              alt={image.alt}
              sx={{ objectFit: 'cover' }}
              width="100%"
              height="100%"
              zIndex={0}
            />
          )
      )}

      <Stack direction="row" position="absolute" bottom={theme.spacing(1)}>
        {images.map((image, index) => (
          <IconButton
            key={image.src}
            disableRipple
            onClick={() => setStep(index)}
            aria-label={`Show the image ${image.alt}`}
            sx={{
              color: theme.palette.grey[100],
              opacity: step === index ? 1 : 0.5,
              transition: 'opacity 0.25s',
            }}
          >
            <FontAwesomeIcon icon={faMinus} />
          </IconButton>
        ))}
      </Stack>
    </Box>
  );
};

export default ImageGallery;
