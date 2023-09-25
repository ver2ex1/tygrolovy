import React from 'react';
import AdminLayout from '@/components/common/AdminLayout';
import { useAddReportStyles } from '@/styles/adminReportStyles';
import { Box, TextField, Typography } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import DropzoneComponent from '@/components/common/Dropzone';

const schema = yup.object().shape({
  name: yup.string().required(),
  count: yup.string(),
  shop: yup.string(),
  receiver: yup.string(),
  price: yup.string(),
  check: yup.mixed(),
  invoice: yup.mixed(),
  delivery_check_to_fund: yup.mixed(),
  delivery_check_from_fund: yup.mixed(),
  date: yup.string(),
  report: yup.string(),
});

const AddReport = () => {
  const classes = useAddReportStyles();

  const { register, handleSubmit, control } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit(data => {
    console.log(data);
  });

  return (
    <AdminLayout>
      <Box sx={classes.root}>
        <Typography variant="h5" fontWeight={600}>
          Форма створення позиції
        </Typography>
        <form onSubmit={onSubmit}>
          <Box sx={classes.formWrapper}>
            <TextField placeholder="Назва*" {...register('name')} />
            <TextField
              placeholder="Кількість"
              type="number"
              {...register('count')}
            />
            <TextField placeholder="Посилання на товар" {...register('shop')} />
            <TextField placeholder="Для кого" {...register('receiver')} />
            <TextField placeholder="Ціна" {...register('price')} />
            <Controller
              name="check"
              control={control}
              defaultValue={[]}
              render={({ field: { onChange } }) => (
                <DropzoneComponent
                  topLabel="Завантажте чек"
                  onDrop={acceptedFiles => onChange(acceptedFiles)}
                />
              )}
            />
          </Box>
        </form>
      </Box>
    </AdminLayout>
  );
};

export default AddReport;
