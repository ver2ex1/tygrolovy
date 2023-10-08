import { reportStyles } from './common/styles';
import { Typography, Box } from '@mui/material';
import { useTranslation } from 'next-i18next';
import CustomCarousel from './common/CustomCarousel';

const Report = ({ reportImages }) => {
  const classes = reportStyles();
  const { t } = useTranslation();

  const reportData = {
    tacticalEquipment: [
      'helmets',
      'tactical_knee_pads',
      'bulletproof_vests',
      'tactical_glasses',
      'tactical_headphones',
      'night_vision_googles',
      'thermal_imagers',
      'tactical_pearls',
      'accessories_to_weapons',
      'hydrators',
      'reset_bags',
      'unloading_vests',
      'strikeball_grenades',
    ],
    medical: [
      'turnstiles',
      'tablets',
      'gas_masks',
      'paramedic_chest_seals',
      'hydrators',
      'projectors',
      'warmers',
      'tactical_clothing',
      'backpacks',
      'panama',
      'caps',
      'first_aid_kits',
      'batteries_for_walkie_talkies',
      'accessories_for_laptops',
    ],
    field: [
      'cars',
      'chargers_for_machines',
      'mask_tapes',
      'gas_cylinders',
      'flipcharts',
      'inflatable_carmat',
      'binoculars',
      'heaters',
      'transmission_oil',
      'generators',
    ],
  };

  return (
    <Box sx={classes.wrapper}>
      <Box sx={classes.titleWrapper}>
        <Typography variant="h3" sx={classes.title}>
          {t('reporting.title')}
        </Typography>
      </Box>
      <Box sx={classes.subTitleWrapper}>
        <Typography variant="h5" sx={classes.subTitle}>
          {t('reporting.subTitle')}
        </Typography>
      </Box>
      <Box sx={classes.positionsWrapper}>
        {Object.keys(reportData).map(key => (
          <Box sx={classes.position} key={key}>
            <Typography sx={classes.positionTitle}>
              {t(`reporting.${key}`)}:
            </Typography>
            <Typography sx={classes.positionItems}>
              {reportData[key].map(item => t(`reporting.${item}`)).join(', ')}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box>
        <Typography sx={classes.imageTitle}>
          Фото-звіти від захисників:
        </Typography>
        <CustomCarousel images={reportImages} />
      </Box>
    </Box>
  );
};

export default Report;
