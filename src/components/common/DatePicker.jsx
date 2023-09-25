import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { TextField } from '@mui/material';

const MonthYearPicker = ({ value, onChange, isRange, ...props }) => {
  return (
    <DatePicker
      selected={value}
      onChange={onChange}
      dateFormat={isRange ? 'MM/yyyy' : 'dd/MM/yyyy'}
      showMonthYearPicker={isRange}
      selectsRange={isRange}
      placeholderText="Select month and year"
      customInput={<TextField />}
      maxDate={new Date()}
      showPopperArrow={false}
      {...props}
    />
  );
};

export default MonthYearPicker;
