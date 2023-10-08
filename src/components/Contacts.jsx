import { useRef, useState } from 'react';
import { Box, Button, TextField, Typography, Link } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { useForm } from 'react-hook-form';
import { contactsStyle } from '@/components/common/styles';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import useWindowSize from '@/utils/useWindowSize';

const Contacts = () => {
  const form = useRef(null);
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
          reset();
        },
        () => {
          toast.error(t('contacts.error'));
        }
      );
  });

  return (
    <Box sx={classes.wrapper}>
      <Typography variant="h2" sx={classes.title}>
        {t('contacts.title')}:
      </Typography>
      <Box sx={classes.content}>
        <Box sx={classes.column}>
          <Box sx={classes.socialIconsWrapper}>
            <Typography sx={classes.label}>{t('contacts.social')}</Typography>
            <Box sx={classes.socialIcons}>
              <a
                href="https://instagram.com/tygrolovy.ua"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <path
                    d="M15.6 4H32.4C38.8 4 44 9.2 44 15.6V32.4C44 35.4765 42.7779 38.427 40.6024 40.6024C38.427 42.7779 35.4765 44 32.4 44H15.6C9.2 44 4 38.8 4 32.4V15.6C4 12.5235 5.22214 9.57298 7.39756 7.39756C9.57298 5.22214 12.5235 4 15.6 4ZM15.2 8C13.2904 8 11.4591 8.75857 10.1088 10.1088C8.75857 11.4591 8 13.2904 8 15.2V32.8C8 36.78 11.22 40 15.2 40H32.8C34.7096 40 36.5409 39.2414 37.8912 37.8912C39.2414 36.5409 40 34.7096 40 32.8V15.2C40 11.22 36.78 8 32.8 8H15.2ZM34.5 11C35.163 11 35.7989 11.2634 36.2678 11.7322C36.7366 12.2011 37 12.837 37 13.5C37 14.163 36.7366 14.7989 36.2678 15.2678C35.7989 15.7366 35.163 16 34.5 16C33.837 16 33.2011 15.7366 32.7322 15.2678C32.2634 14.7989 32 14.163 32 13.5C32 12.837 32.2634 12.2011 32.7322 11.7322C33.2011 11.2634 33.837 11 34.5 11ZM24 14C26.6522 14 29.1957 15.0536 31.0711 16.9289C32.9464 18.8043 34 21.3478 34 24C34 26.6522 32.9464 29.1957 31.0711 31.0711C29.1957 32.9464 26.6522 34 24 34C21.3478 34 18.8043 32.9464 16.9289 31.0711C15.0536 29.1957 14 26.6522 14 24C14 21.3478 15.0536 18.8043 16.9289 16.9289C18.8043 15.0536 21.3478 14 24 14ZM24 18C22.4087 18 20.8826 18.6321 19.7574 19.7574C18.6321 20.8826 18 22.4087 18 24C18 25.5913 18.6321 27.1174 19.7574 28.2426C20.8826 29.3679 22.4087 30 24 30C25.5913 30 27.1174 29.3679 28.2426 28.2426C29.3679 27.1174 30 25.5913 30 24C30 22.4087 29.3679 20.8826 28.2426 19.7574C27.1174 18.6321 25.5913 18 24 18Z"
                    fill="#2B3826"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/%D0%B1%D0%BB%D0%B0%D0%B3%D0%BE%D0%B4%D1%96%D0%B9%D0%BD%D0%B8%D0%B9-%D1%84%D0%BE%D0%BD%D0%B4-%D1%82%D0%B8%D0%B3%D1%80%D0%BE%D0%BB%D0%BE%D0%B2%D0%B8/"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <path
                    d="M38 6C39.0609 6 40.0783 6.42143 40.8284 7.17157C41.5786 7.92172 42 8.93913 42 10V38C42 39.0609 41.5786 40.0783 40.8284 40.8284C40.0783 41.5786 39.0609 42 38 42H10C8.93913 42 7.92172 41.5786 7.17157 40.8284C6.42143 40.0783 6 39.0609 6 38V10C6 8.93913 6.42143 7.92172 7.17157 7.17157C7.92172 6.42143 8.93913 6 10 6H38ZM37 37V26.4C37 24.6708 36.3131 23.0124 35.0903 21.7897C33.8676 20.5669 32.2092 19.88 30.48 19.88C28.78 19.88 26.8 20.92 25.84 22.48V20.26H20.26V37H25.84V27.14C25.84 25.6 27.08 24.34 28.62 24.34C29.3626 24.34 30.0748 24.635 30.5999 25.1601C31.125 25.6852 31.42 26.3974 31.42 27.14V37H37ZM13.76 17.12C14.6511 17.12 15.5058 16.766 16.1359 16.1359C16.766 15.5058 17.12 14.6511 17.12 13.76C17.12 11.9 15.62 10.38 13.76 10.38C12.8636 10.38 12.0039 10.7361 11.37 11.37C10.7361 12.0039 10.38 12.8636 10.38 13.76C10.38 15.62 11.9 17.12 13.76 17.12ZM16.54 37V20.26H11V37H16.54Z"
                    fill="#2B3826"
                  />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100090947342598"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <path
                    d="M24 4.07996C13 4.07996 4 13.06 4 24.12C4 34.12 11.32 42.42 20.88 43.92V29.92H15.8V24.12H20.88V19.7C20.88 14.68 23.86 11.92 28.44 11.92C30.62 11.92 32.9 12.3 32.9 12.3V17.24H30.38C27.9 17.24 27.12 18.78 27.12 20.36V24.12H32.68L31.78 29.92H27.12V43.92C31.8329 43.1756 36.1244 40.771 39.2199 37.1401C42.3153 33.5092 44.0107 28.8912 44 24.12C44 13.06 35 4.07996 24 4.07996Z"
                    fill="#2B3826"
                  />
                </svg>
              </a>
            </Box>
          </Box>
          <Box sx={classes.emailWrapper}>
            <Typography variant="h6" sx={classes.label}>
              {t('contacts.email')}
            </Typography>
            <Link href="mailto:tygrolovy.ua@gmail.com" sx={classes.email}>
              tygrolovy.ua@gmail.com
            </Link>
          </Box>
        </Box>
        <Box sx={classes.column}>
          <form onSubmit={onSubmit} style={classes.form} ref={form}>
            <Box sx={classes.doubleInputsWrapper}>
              <TextField
                sx={{
                  ...classes.formInput,
                  ...{
                    borderBottom: Boolean(errors.name)
                      ? '1px solid red'
                      : '1px solid #2B3826',
                  },
                }}
                InputProps={{ disableUnderline: true }}
                variant="standard"
                {...register('name', { required: true })}
                placeholder={t('contacts.yourName')}
              />
              <TextField
                sx={{
                  ...classes.formInput,
                  ...{
                    borderBottom: Boolean(errors.name)
                      ? '1px solid red'
                      : '1px solid #2B3826',
                  },
                }}
                InputProps={{ disableUnderline: true }}
                variant="standard"
                {...register('email', {
                  required: true,
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: 'Entered value does not match email format',
                  },
                })}
                placeholder={t('contacts.yourEmail')}
              />
            </Box>
            <Box sx={classes.formInputWrapper}>
              <textarea
                className="textArea"
                style={{
                  ...classes.textarea,
                  ...{
                    borderBottom: Boolean(errors.message)
                      ? '1px solid red'
                      : '1px solid #2B3826',
                  },
                }}
                {...register('message', { required: true })}
                placeholder={t('contacts.yourMessage')}
              />
            </Box>
            <Button variant="contained" sx={classes.formButton} type="submit">
              {t('contacts.sendMessage')}
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Contacts;
