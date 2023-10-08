import { useState } from 'react';
import { Box, Typography, Button, TextField, Tooltip } from '@mui/material';
import { donateStyles } from '@/components/common/styles';
import { useTranslation } from 'next-i18next';
import PaypalLogo from '@/assets/images/PaypalLogo';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import useWindowSize from '@/utils/useWindowSize';
import copy from 'copy-to-clipboard';
import Image from 'next/image';
import Link from 'next/link';

const Donate = () => {
  const { t } = useTranslation();
  const classes = donateStyles();
  const [openedTooltip, setOpenedTooltip] = useState('');
  const handleCopy = (tooltip, value) => {
    setOpenedTooltip(tooltip);
    copy(value);
    setTimeout(() => setOpenedTooltip(''), 1500);
  };
  const { width } = useWindowSize();
  return (
    <Box sx={classes.wrapper}>
      <Typography sx={classes.title}>
        {t('donate.title')} {t('donate.afu')}:
      </Typography>
      <Box sx={classes.content}>
        <Box sx={classes.block}>
          <Typography sx={classes.blockTitle}>
            {t('donate.liqpayPayment')}
          </Typography>
          <Image
            src="/assets/liqpayQR.png"
            alt="liqpay QR"
            width={197}
            height={197}
          />
          <form
            method="POST"
            action="https://www.liqpay.ua/api/3/checkout"
            acceptCharset="utf-8"
          >
            <input
              type="hidden"
              name="data"
              value="eyJwdWJsaWNfa2V5IjoiaTgxMTU2OTcxOTMzIiwiYWN0aW9uIjoicGF5ZG9uYXRlIiwiY3VycmVuY3kiOiJVQUgiLCJ2ZXJzaW9uIjozfQ=="
            />
            <input
              type="hidden"
              name="signature"
              value="+upisot7bQFSZufD8cSQQOu1tX8="
            />
            <Button
              variant="contained"
              type="submit"
              sx={classes.donateButton}
              disableRipple
            >
              {t('donate.title')}
            </Button>
          </form>
        </Box>
        <Box sx={classes.block}>
          <Typography sx={classes.blockTitle}>
            {t('donate.charityBank')}
          </Typography>
          <Link href="https://send.monobank.ua/jar/3TEdr9Qf5u" target="_blank">
            <Image
              src="/assets/charityBank.png"
              alt="Charity Bank"
              width={227}
              height={227}
            />
          </Link>
          <Typography sx={classes.bankInstruction}>
            ({t('donate.bankInstruction')})
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Donate;
