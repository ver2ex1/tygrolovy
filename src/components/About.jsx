import { Box, Typography } from '@mui/material';
import { aboutStyles } from './common/styles';
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
        <Box>
          <Typography
            variant='body1'
            sx={classes.textBold}
            dangerouslySetInnerHTML={{ __html: t('about.article2') }}
          />
          <Typography
            variant='body1'
            sx={classes.textBoldYellow}
            dangerouslySetInnerHTML={{ __html: t('about.article3') }}
          />
          <Typography variant='body1' sx={classes.textBold}>
            {t('about.article4')}
            <br />
            {t('about.article5')}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
