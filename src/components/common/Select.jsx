import { Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import React from 'react';

const CustomSelect = ({ label, options, ...props }) => {
  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel id={`${label}-label`}>{label}</InputLabel>
      <Select
        labelId={`${label}-label`}
        label={label}
        sx={{ height: '44px', width: '200px', ...props.sx }}
        {...props}
      >
        {options.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;
