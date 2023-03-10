import { useState, useEffect } from 'react';
import { reportStyles } from '../components/styles';
import { Typography, Box } from '@mui/material';
import { useTranslation } from 'next-i18next';
import useWindowSize from '@/utils/useWindowSize';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import Papa from 'papaparse';
import Loading from '@/components/Loading';

const Report = () => {
  const classes = reportStyles();
  const { t } = useTranslation();
  const { width } = useWindowSize();
  const [currentColumn, setCurrentColumn] = useState(1);
  const [itemsPerColumn] = useState(18);
  const [reportData, setReportData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Papa.parse(
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vTVPO84e4sSjlkaH46psth_3VvW_dsRNFCBJNAc9pavd68b4VXeBgNGV_tweRV6LYmJMMZY7Cp3Tsno/pub?output=csv',
      {
        download: true,
        header: true,
        complete: (results) => {
          setReportData(results.data);
        },
      }
    );
  }, []);

  const items = Array.from(reportData);

  useEffect(() => {
    if (items.length) {
      setIsLoading(false);
    }
  }, [items]);

  const indexOfLastPost = currentColumn * itemsPerColumn;
  const indexOfFirstPost = indexOfLastPost - itemsPerColumn;
  const currentItems = items.slice(indexOfFirstPost, indexOfLastPost);
  const isLastPage =
    currentItems.length !== itemsPerColumn || indexOfLastPost === items.length;
  const handleBack = () => setCurrentColumn(currentColumn - 1);
  const handleNext = () => setCurrentColumn(currentColumn + 1);
  return (
    <Box sx={classes.wrapper}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Box sx={classes.titleWrapper}>
            <Typography variant='h3' sx={classes.title}>
              {t('reporting.title')}
            </Typography>
          </Box>
          <Box sx={classes.subTitleWrapper}>
            <Typography variant='h5' sx={classes.subTitle}>
              {t('reporting.subTitle')}
            </Typography>
          </Box>
          {width > 1024 && (
            <Box sx={classes.itemsWrapper}>
              {items.map((item) => (
                <Typography variant='h6' sx={classes.item} key={item.name}>
                  {t(`reporting.${item.name.replace(' ', '')}`)}
                </Typography>
              ))}
            </Box>
          )}
          {width <= 1024 && (
            <Box sx={classes.content}>
              <Box sx={classes.iconWrapper}>
                {currentColumn !== 1 && (
                  <ArrowCircleLeftIcon onClick={handleBack} />
                )}
              </Box>
              <Box sx={classes.itemsWrapper}>
                {currentItems.map((item) => (
                  <Typography variant='h6' sx={classes.item} key={item.name}>
                    {t(`reporting.${item.name.replace(' ', '')}`)}
                  </Typography>
                ))}
              </Box>
              <Box sx={classes.iconWrapper}>
                {!isLastPage && <ArrowCircleRightIcon onClick={handleNext} />}
              </Box>
            </Box>
          )}
        </>
      )}
    </Box>
  );
};

export default Report;
