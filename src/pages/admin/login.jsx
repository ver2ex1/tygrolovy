import useAdminLoginStyles from '@/styles/adminLoginStyles';
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
} from '@mui/material';
import { useEffect, useState } from 'react';
import anime from 'animejs';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const schema = yup.object().shape({
  login: yup.string().required("Це обов'язкове поле"),
  password: yup
    .string()
    .min(8, 'Мінімальна довжина пароля 8 символів')
    .required("Це обов'язкове поле"),
});

const AdminLogin = () => {
  const classes = useAdminLoginStyles();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  useEffect(() => {
    anime({
      targets: '.animated-background',
      backgroundColor: [
        { value: '#9ECDBB', duration: 1000 },
        { value: '#7AB7A6', duration: 1000 },
        { value: '#5FA291', duration: 1000 },
        { value: '#447C7C', duration: 1000 },
        { value: '#2A6666', duration: 1000 },
        { value: '#0F5050', duration: 1000 },
        { value: '#2A6666', duration: 1000 },
        { value: '#447C7C', duration: 1000 },
        { value: '#5FA291', duration: 1000 },
        { value: '#7AB7A6', duration: 1000 },
        { value: '#9ECDBB', duration: 1000 },
      ],
      easing: 'easeInOutSine',
      loop: true,
      direction: 'alternate',
    });
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <div
      className='animated-background'
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <form onSubmit={onSubmit}>
        <Box sx={classes.form}>
          <TextField
            placeholder='Логін'
            {...register('login')}
            helperText={errors?.login?.message}
          />
          <TextField
            placeholder='Пароль'
            {...register('password')}
            helperText={errors?.password?.message}
            type={showPassword ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <RemoveRedEyeIcon
                    onClick={handleClickShowPassword}
                    style={{ cursor: 'pointer' }}
                  />
                </InputAdornment>
              ),
            }}
          />
          <Button variant='contained' type='submit'>
            Увійти
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default AdminLogin;
