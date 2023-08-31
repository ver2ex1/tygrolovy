import AdminLayout from '@/components/common/AdminLayout';
import useAdminReportStyles from '@/styles/adminReportStyles';
import { Box, Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Link from 'next/link';
import CustomTable from '@/components/common/Table';
import EditIcon from '@mui/icons-material/Edit';
import { useRouter } from 'next/router';

const AdminReport = () => {
  const classes = useAdminReportStyles();
  const router = useRouter();

  const columns = [
    {
      header: 'Назва',
      field: 'name',
      render: (row) => <a href={`report/${row.id}`}>{row.name}</a>,
    },
    { header: 'Кількість', field: 'count' },
    {
      header: 'Дата',
      field: 'date',
    },
    {
      header: 'Чек',
      field: 'check',
      render: (row) => <a href={row.check}>Посилання</a>,
    },
    {
      header: 'Рахунок',
      field: 'invoice',
      render: (row) => <a href={row.invoice}>Посилання</a>,
    },
    {
      header: 'Доставка до нас',
      field: 'delivery_to',
      render: (row) => <a href={row.delivery_to}>Посилання</a>,
    },
    {
      header: 'Доставка від нас',
      field: 'delivery_from',
      render: (row) => <a href={row.delivery_from}>Посилання</a>,
    },
  ];

  const data = [
    {
      id: 1,
      name: 'Планшет Oscal Pad 10 8/128GB 4G Diamond Grey',
      count: 2,
      date: '02.08.2023',
      check: 'http://example.com',
      invoice: 'http://example.com',
      delivery_to: 'http://example.com',
      delivery_from: 'http://example.com',
    },
  ];
  const actions = [
    {
      icon: <EditIcon />,
      label: 'Edit',
      onClick: (rowData) => {
        router.push(`report/${rowData.id}/edit`);
      },
    },
  ];

  return (
    <AdminLayout>
      <Box sx={classes.root}>
        <Link href='report/add'>
          <Button variant='contained'>
            <AddCircleIcon /> Додати позицію
          </Button>
        </Link>
        <Box sx={classes.tableWrapper}>
          <CustomTable columns={columns} data={data} actions={actions} />
        </Box>
      </Box>
    </AdminLayout>
  );
};

export default AdminReport;
