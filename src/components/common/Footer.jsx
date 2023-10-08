import { Box, Typography } from '@mui/material';
import Logo from '@/assets/images/Logo';
import { footerStyles } from './styles';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

const Footer = () => {
  const classes = footerStyles();
  const { t } = useTranslation();
  return (
    <Box sx={classes.wrapper}>
      <Logo />
      <Box sx={classes.links}>
        <Link
          href="https://www.docdroid.net/W8wf2HA/publicna-oferta-pdf"
          variant="body2"
          target="_blank"
        >
          <Typography sx={classes.pdfLink}>
            {t('footer.publicOffer')}
          </Typography>
        </Link>
        <Link
          href="https://docdro.id/SwCSU86"
          variant="body2"
          sx={classes.pdfLink}
          target="_blank"
        >
          <Typography sx={classes.pdfLink}>
            {t('footer.privacyPolicy')}
          </Typography>
        </Link>
      </Box>
      <Link
        href="https://www.linkedin.com/in/yarema-kertytsky/"
        target="_blank"
      >
        <Typography sx={classes.pdfLink}>© 2023, Yarema Kertytsky</Typography>
      </Link>
    </Box>
  );
};

export default Footer;
