import React, { useRef, useState } from 'react';
import { Box, Button, TextField, Typography, Link } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { useForm } from 'react-hook-form';
import { contactsStyle } from '@/components/common/styles';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import useWindowSize from '@/utils/useWindowSize';

const Contacts = () => {
  const [isCaptcha, setIsCaptcha] = useState(false);
  const form = useRef(null);
  const captcha = useRef(null);
  const width = useWindowSize();
  const classes = contactsStyle(width);
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = handleSubmit(() => {
    emailjs
      .sendForm(
        'service_jrf9i7w',
        'template_vtvygll',
        form.current,
        'hO7NV89ubPM0Mj4uS'
      )
      .then(
        () => {
          toast.success(t('contacts.success'));
          captcha.current.reset();
          setIsCaptcha(false);
          reset();
        },
        () => {
          toast.error(t('contacts.error'));
        }
      );
  });

  const onCaptcha = value => {
    if (value) {
      setIsCaptcha(true);
    }
  };

  return (
    <Box sx={classes.wrapper}>
      <Typography variant="h2" sx={classes.title}>
        {t('contacts.title')}
      </Typography>
      <Box sx={classes.content}>
        <Box sx={classes.column}>
          <Box sx={classes.emailWrapper}>
            <Typography variant="h6" sx={classes.label}>
              {t('contacts.email')}
            </Typography>
            <Link href="mailto:tygrolovy.ua@gmail.com" sx={classes.email}>
              tygrolovy.ua@gmail.com
            </Link>
          </Box>
          <Typography variant="h6" sx={classes.label}>
            {t('contacts.social')}
          </Typography>
          <Box sx={classes.socialIcons}>
            <a
              href="https://instagram.com/tygrolovy.ua"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="40px"
                height="40px"
                style={classes.icon}
              >
                <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100090947342598"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="40px"
                height="40px"
                style={classes.icon}
              >
                <path d="M 25 3 C 12.861562 3 3 12.861562 3 25 C 3 36.019135 11.127533 45.138355 21.712891 46.728516 L 22.861328 46.902344 L 22.861328 29.566406 L 17.664062 29.566406 L 17.664062 26.046875 L 22.861328 26.046875 L 22.861328 21.373047 C 22.861328 18.494965 23.551973 16.599417 24.695312 15.410156 C 25.838652 14.220896 27.528004 13.621094 29.878906 13.621094 C 31.758714 13.621094 32.490022 13.734993 33.185547 13.820312 L 33.185547 16.701172 L 30.738281 16.701172 C 29.349697 16.701172 28.210449 17.475903 27.619141 18.507812 C 27.027832 19.539724 26.84375 20.771816 26.84375 22.027344 L 26.84375 26.044922 L 32.966797 26.044922 L 32.421875 29.564453 L 26.84375 29.564453 L 26.84375 46.929688 L 27.978516 46.775391 C 38.71434 45.319366 47 36.126845 47 25 C 47 12.861562 37.138438 3 25 3 z M 25 5 C 36.057562 5 45 13.942438 45 25 C 45 34.729791 38.035799 42.731796 28.84375 44.533203 L 28.84375 31.564453 L 34.136719 31.564453 L 35.298828 24.044922 L 28.84375 24.044922 L 28.84375 22.027344 C 28.84375 20.989871 29.033574 20.060293 29.353516 19.501953 C 29.673457 18.943614 29.981865 18.701172 30.738281 18.701172 L 35.185547 18.701172 L 35.185547 12.009766 L 34.318359 11.892578 C 33.718567 11.811418 32.349197 11.621094 29.878906 11.621094 C 27.175808 11.621094 24.855567 12.357448 23.253906 14.023438 C 21.652246 15.689426 20.861328 18.170128 20.861328 21.373047 L 20.861328 24.046875 L 15.664062 24.046875 L 15.664062 31.566406 L 20.861328 31.566406 L 20.861328 44.470703 C 11.816995 42.554813 5 34.624447 5 25 C 5 13.942438 13.942438 5 25 5 z" />
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@tygrolovy.ua"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="40px"
                height="40px"
                style={classes.icon}
              >
                <path d="M 9 4 C 6.2495759 4 4 6.2495759 4 9 L 4 41 C 4 43.750424 6.2495759 46 9 46 L 41 46 C 43.750424 46 46 43.750424 46 41 L 46 9 C 46 6.2495759 43.750424 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.671576 6 44 7.3284241 44 9 L 44 41 C 44 42.671576 42.671576 44 41 44 L 9 44 C 7.3284241 44 6 42.671576 6 41 L 6 9 C 6 7.3284241 7.3284241 6 9 6 z M 26.042969 10 A 1.0001 1.0001 0 0 0 25.042969 10.998047 C 25.042969 10.998047 25.031984 15.873262 25.021484 20.759766 C 25.016184 23.203017 25.009799 25.64879 25.005859 27.490234 C 25.001922 29.331679 25 30.496833 25 30.59375 C 25 32.409009 23.351421 33.892578 21.472656 33.892578 C 19.608867 33.892578 18.121094 32.402853 18.121094 30.539062 C 18.121094 28.675273 19.608867 27.1875 21.472656 27.1875 C 21.535796 27.1875 21.663054 27.208245 21.880859 27.234375 A 1.0001 1.0001 0 0 0 23 26.240234 L 23 22.039062 A 1.0001 1.0001 0 0 0 22.0625 21.041016 C 21.906673 21.031216 21.710581 21.011719 21.472656 21.011719 C 16.223131 21.011719 11.945313 25.289537 11.945312 30.539062 C 11.945312 35.788589 16.223131 40.066406 21.472656 40.066406 C 26.72204 40.066409 31 35.788588 31 30.539062 L 31 21.490234 C 32.454611 22.653646 34.267517 23.390625 36.269531 23.390625 C 36.542588 23.390625 36.802305 23.374442 37.050781 23.351562 A 1.0001 1.0001 0 0 0 37.958984 22.355469 L 37.958984 17.685547 A 1.0001 1.0001 0 0 0 37.03125 16.6875 C 33.886609 16.461891 31.379838 14.012216 31.052734 10.896484 A 1.0001 1.0001 0 0 0 30.058594 10 L 26.042969 10 z M 27.041016 12 L 29.322266 12 C 30.049047 15.2987 32.626734 17.814404 35.958984 18.445312 L 35.958984 21.310547 C 33.820114 21.201935 31.941489 20.134948 30.835938 18.453125 A 1.0001 1.0001 0 0 0 29 19.003906 L 29 30.539062 C 29 34.707538 25.641273 38.066406 21.472656 38.066406 C 17.304181 38.066406 13.945312 34.707538 13.945312 30.539062 C 13.945312 26.538539 17.066083 23.363182 21 23.107422 L 21 25.283203 C 18.286416 25.535721 16.121094 27.762246 16.121094 30.539062 C 16.121094 33.483274 18.528445 35.892578 21.472656 35.892578 C 24.401892 35.892578 27 33.586491 27 30.59375 C 27 30.64267 27.001859 29.335571 27.005859 27.494141 C 27.009759 25.65271 27.016224 23.20692 27.021484 20.763672 C 27.030884 16.376775 27.039186 12.849206 27.041016 12 z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/%D0%B1%D0%BB%D0%B0%D0%B3%D0%BE%D0%B4%D1%96%D0%B9%D0%BD%D0%B8%D0%B9-%D1%84%D0%BE%D0%BD%D0%B4-%D1%82%D0%B8%D0%B3%D1%80%D0%BE%D0%BB%D0%BE%D0%B2%D0%B8/"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="40px"
                height="40px"
                style={classes.icon}
              >
                <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 16 12 C 14.35499 12 13 13.35499 13 15 C 13 16.64501 14.35499 18 16 18 C 17.64501 18 19 16.64501 19 15 C 19 13.35499 17.64501 12 16 12 z M 16 14 C 16.564129 14 17 14.435871 17 15 C 17 15.564129 16.564129 16 16 16 C 15.435871 16 15 15.564129 15 15 C 15 14.435871 15.435871 14 16 14 z M 14 19 A 1.0001 1.0001 0 0 0 13 20 L 13 35 A 1.0001 1.0001 0 0 0 14 36 L 18 36 A 1.0001 1.0001 0 0 0 19 35 L 19 20 A 1.0001 1.0001 0 0 0 18 19 L 14 19 z M 22 19 A 1.0001 1.0001 0 0 0 21 20 L 21 35 A 1.0001 1.0001 0 0 0 22 36 L 26 36 A 1.0001 1.0001 0 0 0 27 35 L 27 27.5 C 27 26.120455 28.120455 25 29.5 25 C 30.879545 25 32 26.120455 32 27.5 L 32 30 L 32 35 A 1.0001 1.0001 0 0 0 33 36 L 37 36 A 1.0001 1.0001 0 0 0 38 35 L 38 26.5 C 38 22.36961 34.63039 19 30.5 19 C 29.213528 19 28.059744 19.41615 27 19.990234 A 1.0001 1.0001 0 0 0 26 19 L 22 19 z M 15 21 L 17 21 L 17 34 L 15 34 L 15 21 z M 23 21 L 25 21 L 25 21.816406 A 1.0001 1.0001 0 0 0 26.693359 22.537109 C 27.684186 21.585305 29.016683 21 30.5 21 C 33.54961 21 36 23.45039 36 26.5 L 36 34 L 34 34 L 34 30 L 34 27.5 C 34 25.029545 31.970455 23 29.5 23 C 27.029545 23 25 25.029545 25 27.5 L 25 34 L 23 34 L 23 21 z" />
              </svg>
            </a>
          </Box>
        </Box>
        <Box sx={classes.column}>
          <Typography variant="h4" sx={classes.formTitle}>
            {t('contacts.formTitle')}
          </Typography>
          <form onSubmit={onSubmit} style={classes.form} ref={form}>
            <Box sx={classes.formInputWrapper}>
              <label style={classes.formLabel}>{t('contacts.yourName')}</label>
              <TextField
                sx={{
                  ...classes.formInput,
                  ...{
                    border: Boolean(errors.name) && '1px solid red',
                    borderRadius: '12px',
                  },
                }}
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                {...register('name', { required: true })}
              />
              {errors.name && (
                <Typography variant="body2" sx={classes.error}>
                  Required field
                </Typography>
              )}
            </Box>
            <Box sx={classes.formInputWrapper}>
              <label style={classes.formLabel}>{t('contacts.yourEmail')}</label>
              <TextField
                sx={{
                  ...classes.formInput,
                  ...{
                    border: Boolean(errors.email) && '1px solid red',
                    borderRadius: '12px',
                  },
                }}
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                {...register('email', {
                  required: true,
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: 'Entered value does not match email format',
                  },
                })}
              />
              {errors.email && (
                <Typography variant="body2" sx={classes.error}>
                  {errors.email.type === 'pattern'
                    ? 'Invalid email'
                    : 'Required field'}
                </Typography>
              )}
            </Box>
            <Box sx={classes.formInputWrapper}>
              <label style={classes.formLabel}>
                {t('contacts.yourMessage')}
              </label>
              <textarea
                style={{
                  ...classes.textarea,
                  ...{
                    border: Boolean(errors.message) && '1px solid red',
                    borderRadius: '12px',
                  },
                }}
                {...register('message', { required: true })}
              />
              {errors.message && (
                <Typography variant="body2" sx={classes.error}>
                  Required field
                </Typography>
              )}
            </Box>
            <ReCAPTCHA
              sitekey="6LfmGsgkAAAAAMnt3Ecf141L4iPj7FwnTq54mUEg"
              onChange={onCaptcha}
              ref={captcha}
            />
            <Box sx={classes.buttonWrapper}>
              <Button
                variant="contained"
                sx={classes.formButton}
                type="submit"
                disabled={!isCaptcha}
              >
                {t('contacts.sendMessage')}
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Contacts;
