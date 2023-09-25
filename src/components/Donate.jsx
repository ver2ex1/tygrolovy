import React, { useState } from 'react';
import { Box, Typography, Button, TextField, Tooltip } from '@mui/material';
import { donateStyles } from '@/components/common/styles';
import { useTranslation } from 'next-i18next';
import PaypalLogo from '@/assets/images/PaypalLogo';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import useWindowSize from '@/utils/useWindowSize';
import copy from 'copy-to-clipboard';

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
      <Box sx={classes.content}>
        <Box sx={classes.donateColumn}>
          <Typography variant="h4">{t('donate.title')}</Typography>
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
            <Button variant="contained" type="submit">
              {t('donate.donateUah')} ₴
            </Button>
          </form>
          <form
            method="POST"
            action="https://www.liqpay.ua/api/3/checkout"
            acceptCharset="utf-8"
          >
            <input
              type="hidden"
              name="data"
              value="eyJwdWJsaWNfa2V5IjoiaTgxMTU2OTcxOTMzIiwiYWN0aW9uIjoicGF5ZG9uYXRlIiwiY3VycmVuY3kiOiJVU0QiLCJ2ZXJzaW9uIjozfQ=="
            />
            <input
              type="hidden"
              name="signature"
              value="Yqct8WWfGgyi9DI4ab1piF9Zyqk="
            />
            <Button variant="contained" type="submit">
              {t('donate.donateUsd')} $
            </Button>
          </form>
          <form
            method="POST"
            action="https://www.liqpay.ua/api/3/checkout"
            acceptCharset="utf-8"
          >
            <input
              type="hidden"
              name="data"
              value="eyJwdWJsaWNfa2V5IjoiaTgxMTU2OTcxOTMzIiwiYWN0aW9uIjoicGF5ZG9uYXRlIiwiY3VycmVuY3kiOiJFVVIiLCJ2ZXJzaW9uIjozfQ=="
            />
            <input
              type="hidden"
              name="signature"
              value="luSZ59v5eZgAP+yzmKPJYdeZxp0="
            />
            <Button variant="contained" type="submit">
              {t('donate.donateEuro')} €
            </Button>
          </form>
        </Box>
        <Box sx={classes.requisitesColumn}>
          <Typography variant="h4">{t('donate.requisites')}</Typography>
          <Box sx={classes.requisitesContent}>
            <Box sx={classes.requisitesCopy}>
              <Box sx={classes.requisitesSymbol}>₴</Box>
              <TextField
                disabled
                value="UA303052990000026008006231254"
                sx={classes.requisitesInput}
              />
              <Tooltip
                title="Copied"
                placement={width > 375 ? 'top' : 'top-start'}
                arrow
                disableFocusListener
                disableHoverListener
                disableTouchListener
                PopperProps={{
                  disablePortal: true,
                }}
                open={Boolean(openedTooltip === 'uah')}
              >
                <Box
                  sx={classes.requisitesCopyButton}
                  onClick={() =>
                    handleCopy('uah', 'UA303052990000026008006231254')
                  }
                >
                  <LinkOutlinedIcon />
                </Box>
              </Tooltip>
            </Box>
            <Box sx={classes.requisitesCopy}>
              <Box sx={classes.requisitesSymbol}>€</Box>
              <TextField
                disabled
                value="UA323052990000026006046247084"
                sx={classes.requisitesInput}
              />
              <Tooltip
                title="Copied"
                placement={width > 375 ? 'top' : 'top-start'}
                arrow
                disableFocusListener
                disableHoverListener
                disableTouchListener
                PopperProps={{
                  disablePortal: true,
                }}
                open={Boolean(openedTooltip === 'usd')}
              >
                <Box
                  sx={classes.requisitesCopyButton}
                  onClick={() =>
                    handleCopy('usd', 'UA323052990000026006046247084')
                  }
                >
                  <LinkOutlinedIcon />
                </Box>
              </Tooltip>
            </Box>
            <Box sx={classes.requisitesCopy}>
              <Box sx={classes.requisitesSymbol}>
                <PaypalLogo />
              </Box>
              <TextField
                disabled
                value="tygrolovy.ua@gmail.com"
                sx={classes.requisitesInput}
              />
              <Tooltip
                title="Copied"
                placement={width > 375 ? 'top' : 'top-start'}
                arrow
                disableFocusListener
                disableHoverListener
                disableTouchListener
                PopperProps={{
                  disablePortal: true,
                }}
                open={Boolean(openedTooltip === 'paypal')}
              >
                <Box
                  sx={classes.requisitesCopyButton}
                  onClick={() => handleCopy('paypal', 'tygrolovy.ua@gmail.com')}
                >
                  <LinkOutlinedIcon />
                </Box>
              </Tooltip>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Donate;
