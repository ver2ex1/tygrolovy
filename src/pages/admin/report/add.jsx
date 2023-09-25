import React from 'react';
import AdminLayout from '@/components/common/AdminLayout';
import { useAddReportStyles } from '@/styles/adminReportStyles';
import { Box, Typography } from '@mui/material';
import ReportForm from '@/components/ReportForm';

const AddReport = () => {
  const classes = useAddReportStyles();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <AdminLayout>
      <Box sx={classes.root}>
        <Typography variant="h5" fontWeight={600}>
          Форма створення позиції
        </Typography>
        <ReportForm onSubmit={onSubmit} />
      </Box>
    </AdminLayout>
  );
};

export default AddReport;
