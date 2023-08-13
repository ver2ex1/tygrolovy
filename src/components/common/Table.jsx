import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from '@mui/material';
import { useCustomTableStyles } from './styles';

const CustomTable = ({ columns, data, actions }) => {
  const classes = useCustomTableStyles();
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column, index) => (
              <TableCell key={index}>{column.header}</TableCell>
            ))}
            {actions && <TableCell>Дії</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {columns.map((column, colIndex) => (
                <TableCell key={colIndex}>
                  {typeof column.render === 'function'
                    ? column.render(row)
                    : row[column.field]}
                </TableCell>
              ))}
              {actions && (
                <TableCell>
                  {actions.map((action, actionIndex) => (
                    <IconButton
                      key={actionIndex}
                      aria-label={action.label}
                      onClick={() => action.onClick(row)}
                      sx={classes.icon}
                    >
                      {action.icon}
                    </IconButton>
                  ))}
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
