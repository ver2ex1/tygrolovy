import { Box, Link, Typography } from '@mui/material';
import Logo from '@/assets/images/Logo';
import { footerStyles } from './styles';
import { Link as AnchorLink } from 'react-scroll/modules';
import { useTranslation } from 'next-i18next';

const Footer = () => {
  const classes = footerStyles();
  const { t } = useTranslation();
  return (
    <Box sx={classes.wrapper}>
      <Box sx={classes.leftSide}>
        <Logo sx={classes.logo} />
        <Box sx={classes.links}>
          <Link
            href='https://www.docdroid.net/W8wf2HA/publicna-oferta-pdf'
            variant='body2'
            sx={classes.pdfLink}
            target='_blank'
          >
            {t('footer.publicOffer')}
          </Link>
          <Link
            href='https://docdro.id/SwCSU86'
            variant='body2'
            sx={classes.pdfLink}
            target='_blank'
          >
            {t('footer.privacyPolicy')}
          </Link>
        </Box>
      </Box>
      <Box sx={classes.rightSide}>
        <AnchorLink
          to='donate'
          style={{ textDecoration: 'none', cursor: 'pointer' }}
        >
          <Typography sx={classes.donateLink}>{t('donate.title')}</Typography>
        </AnchorLink>
        <Link href='mailto:tygrolovy.ua@gmail.com' sx={classes.mail}>
          tygrolovy.ua@gmail.com
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
