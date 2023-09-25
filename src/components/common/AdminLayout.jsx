import React from 'react';
import { Box, Button } from '@mui/material';
import { useAdminLayoutStyles } from './styles';
import Link from 'next/link';
import RequestPageOutlinedIcon from '@mui/icons-material/RequestPageOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';

const links = [
  {
    label: 'Звітність',
    href: '/admin/report',
    icon: <RequestPageOutlinedIcon />,
  },
  { label: 'Запити', href: '/admin/requests', icon: <CheckBoxOutlinedIcon /> },
];

const AdminLayout = ({ children }) => {
  const classes = useAdminLayoutStyles();

  return (
    <Box sx={classes.root}>
      <Box sx={classes.sidebar}>
        <Box sx={classes.navigation}>
          {links.map((link, index) => (
            <Link key={index} href={link.href}>
              {link.icon}
              {link.label}
            </Link>
          ))}
        </Box>
      </Box>
      <Box minHeight="100vh" width="100%">
        <Box sx={classes.header}>
          <Button variant="contained">Вийти</Button>
        </Box>
        {children}
      </Box>
    </Box>
  );
};

export default AdminLayout;
