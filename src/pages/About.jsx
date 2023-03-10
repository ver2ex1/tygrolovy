import { Box, Typography } from '@mui/material';
import { aboutStyles } from '../components/styles';
import { useTranslation } from 'next-i18next';

const About = () => {
  const classes = aboutStyles();
  const { t } = useTranslation();
  return (
    <Box sx={classes.wrapper}>
      <Typography variant='h2' sx={classes.title}>
        {t('about.title')}
      </Typography>
      <Box sx={classes.textWrapper}>
        <Typography variant='body1' sx={classes.textBold}>
          {t('about.article1')}
        </Typography>
        <Typography variant='body1' sx={classes.text}>
          {t('about.article2')}
        </Typography>
        <Typography variant='body1' sx={classes.text}>
          {t('about.article3')}
        </Typography>
        <Typography variant='body1' sx={classes.text}>
          {t('about.article4')}
        </Typography>
        <Typography variant='body1' sx={classes.text}>
          {t('about.article5')}
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
