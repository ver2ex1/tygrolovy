import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { TextField } from '@mui/material';

const MonthYearPicker = ({ value, onChange, isRange, ...props }) => {
  const valueProps =
    isRange && Array.isArray(value) && value.length
      ? { startDate: value[0], endDate: value[1] }
      : { selected: value };
  return (
    <DatePicker
      onChange={onChange}
      dateFormat={isRange ? 'MM/yyyy' : 'dd/MM/yyyy'}
      showMonthYearPicker={isRange}
      selectsRange={isRange}
      placeholderText="Select month and year"
      customInput={<TextField autoComplete="off" />}
      maxDate={new Date()}
      showPopperArrow={false}
      {...valueProps}
      {...props}
    />
  );
};

export default MonthYearPicker;
