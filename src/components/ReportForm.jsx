import React from 'react';
import { Box, Button, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import DropzoneComponent from '@/components/common/Dropzone';
import MonthYearPicker from '@/components/common/DatePicker';
import { useReportFormStyles } from './styles';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';

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
  report: yup.mixed(),
});

const ReportForm = ({ onSubmit, report }) => {
  const classes = useReportFormStyles();
  console.log(report);
  const { register, handleSubmit, control } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={classes.formWrapper}>
        <TextField placeholder="Назва*" {...register('name')} />
        <TextField
          placeholder="Кількість"
          type="number"
          {...register('count')}
        />
        <TextField placeholder="Посилання на товар" {...register('shop')} />
        <TextField placeholder="Для кого" {...register('receiver')} />
        <TextField placeholder="Ціна" {...register('price')} type="number" />
        <Controller
          name="date"
          control={control}
          render={({ field }) => <MonthYearPicker {...field} />}
        />
        <Controller
          name="check"
          control={control}
          render={({ field: { onChange } }) => (
            <DropzoneComponent
              topLabel="Завантажте чек"
              onDrop={acceptedFiles => onChange(acceptedFiles)}
            />
          )}
        />
        <Controller
          name="invoice"
          control={control}
          render={({ field: { onChange } }) => (
            <DropzoneComponent
              topLabel="Завантажте рахунок"
              onDrop={acceptedFiles => onChange(acceptedFiles)}
            />
          )}
        />
        <Controller
          name="delivery_check_to_fund"
          control={control}
          render={({ field: { onChange } }) => (
            <DropzoneComponent
              topLabel="Завантажте чек відправки до фонда"
              onDrop={acceptedFiles => onChange(acceptedFiles)}
            />
          )}
        />
        <Controller
          name="delivery_check_from_fund"
          control={control}
          render={({ field: { onChange } }) => (
            <DropzoneComponent
              topLabel="Завантажте чек відправки від фонда"
              onDrop={acceptedFiles => onChange(acceptedFiles)}
            />
          )}
        />
        <Controller
          name="report"
          control={control}
          render={({ field: { onChange } }) => (
            <DropzoneComponent
              topLabel="Завантажте фотозвіт"
              onDrop={acceptedFiles => onChange(acceptedFiles)}
            />
          )}
        />
      </Box>
      <Box sx={classes.buttonsWrapper}>
        <Button variant="contained" sx={classes.createButton} type="submit">
          {report ? 'Редагувати' : 'Створити'}
        </Button>
      </Box>
    </form>
  );
};

export default ReportForm;
