import { Box } from '@mui/material';
import { useHeadBlockStyles } from './common/styles';
import Image from 'next/image';
import { Link as AnchorLink } from 'react-scroll/modules';
import { useTranslation } from 'next-i18next';

const Head = () => {
  const classes = useHeadBlockStyles();
  const { t } = useTranslation();
  return (
    <Box sx={classes.root}>
      <Box sx={classes.imageWrapper}>
        <Image
          alt="Head Image"
          src="/assets/headText.svg"
          width={853}
          height={333}
        />
      </Box>
      <Box sx={classes.buttonsWrapper}>
        <AnchorLink to="donate" style={classes.donate}>
          {t('donate.title')}
        </AnchorLink>
        <AnchorLink to="contacts" style={classes.request}>
          {t('contacts.request')}
        </AnchorLink>
      </Box>
    </Box>
  );
};

export default Head;
