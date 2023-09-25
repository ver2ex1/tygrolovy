import React from 'react';
import { useEditReportStyles } from './styles';
import { Box, IconButton, Modal, Typography } from '@mui/material';
import ReportForm from '@/components/ReportForm';
import CancelIcon from '@mui/icons-material/Cancel';

const EditReport = ({ report, onClose, ...props }) => {
  const classes = useEditReportStyles();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <Modal onClose={onClose} {...props}>
      <Box sx={classes.root}>
        <Box sx={classes.header}>
          <Typography variant="h5" fontWeight={600}>
            Форма редагування позиції
          </Typography>
          <IconButton onClick={onClose} disableFocusRipple disableRipple>
            <CancelIcon />
          </IconButton>
        </Box>
        <ReportForm onSubmit={onSubmit} report={report} />
      </Box>
    </Modal>
  );
};

export default EditReport;
