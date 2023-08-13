import AdminLayout from '@/components/common/AdminLayout';
import useAdminReportStyles from '@/styles/adminReportStyles';
import { Box, Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Link from 'next/link';

const AdminReport = () => {
  const classes = useAdminReportStyles();
  return (
    <AdminLayout>
      <Box sx={classes.root}>
        <Link href='report/add'>
          <Button variant='contained'>
            <AddCircleIcon /> Додати позицію
          </Button>
        </Link>
      </Box>
    </AdminLayout>
  );
};

export default AdminReport;
