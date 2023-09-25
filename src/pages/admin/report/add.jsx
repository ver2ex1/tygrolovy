import AdminLayout from '@/components/common/AdminLayout';
import { useAddReportStyles } from '@/styles/adminReportStyles';
import { Box } from '@mui/material';

const AddReport = () => {
  const classes = useAddReportStyles();
  return (
    <AdminLayout>
      <Box sx={classes.root}></Box>
    </AdminLayout>
  );
};

export default AddReport;
