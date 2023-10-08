import theme from '../../config/theme';

export const layoutStyles = () => {
  return {
    wrapper: {
      minHeight: '100vh',
      height: '100%',
      overflow: 'hidden',
      [theme.breakpoints.down('sm')]: {
        height: '100%',
      },
    },
  };
};

export const headerStyles = () => {
  return {
    wrapper: {
      background: theme.palette.primary.main,
      padding: '16px 40px',
      color: theme.palette.primary.light,
      '& p': {
        fontWeight: 600,
      },
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      [theme.breakpoints.down('sm')]: {
        padding: '8px 16px',
      },
    },
    logo: {
      [theme.breakpoints.down('md')]: {
        width: '130px',
      },
    },
    title: {
      fontWeight: 600,
      opacity: 0.7,
      width: 'calc(100%/3)',
      textAlign: 'end',
    },
    links: {
      display: 'flex',
      gap: '18px',
      [theme.breakpoints.down('sm')]: {
        display: 'flex !important',
        flexDirection: 'column !important',
        gap: '15px !important',
      },
    },
    switch: {
      marginLeft: 'auto',
      marginRight: '70px',
    },
    link: {
      display: 'flex',
      gap: '5px',
      alignItems: 'center',
      '& a': {
        cursor: 'pointer',
        color: theme.palette.primary.dark,
        transition: 'color 0.3s ease-in-out',
        padding: '2px',
        textDecoration: 'none',
        fontSize: '18px',
        '&:hover': {
          color: theme.palette.primary.light,
        },
      },
    },
    actions: {
      display: 'flex',
      alignItems: 'center',
      gap: '48px',
      [theme.breakpoints.down('md')]: {
        gap: '24px',
      },
    },
    langDropDown: {
      display: 'flex',
      gap: '8px',
      alignItems: 'center',
      cursor: 'pointer',
      [theme.breakpoints.down('sm')]: {
        width: 'fit-content',
      },
    },
    langDropDownContent: {
      '& .MuiPaper-root': {
        background: 'rgba(43, 56, 38, 0.90)',
      },
    },
    langDropDownItem: {
      color: theme.palette.primary.light,
      display: 'flex',
      gap: '10px',
      alignItems: 'center',
    },
    arrowDown: {
      color: theme.palette.secondary.main,
      transition: 'opacity 0.3s ease',
      [theme.breakpoints.down('sm')]: {
        color: theme.palette.primary.light,
      },
    },
    arrowUp: {
      color: theme.palette.primary.light,
      transform: 'rotate(180deg)',
    },
    mobileDropDownTitle: {
      display: 'flex',
      gap: '10px',
      alignItems: 'center',
      fontWeight: 400,
      fontSize: '18px',
    },
    mobileLink: {
      '& a': {
        color: theme.palette.primary.light,
        textDecoration: 'none',
      },
    },
    donate: {
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      color: theme.palette.primary.light,
      background: theme.palette.secondary.main,
      padding: '8px',
      fontSize: 16,
      cursor: 'pointer',
      fontSize: '18px',
    },
    mobileDonate: {
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      color: theme.palette.secondary.main,
      background: theme.palette.primary.light,
      padding: '8px',
      fontSize: 16,
      width: 'fit-content',
    },
  };
};

export const aboutStyles = () => {
  return {
    wrapper: {
      display: 'flex',
      padding: '128px 0',
      flexDirection: 'column',
      gap: '32px',
      alignItems: 'center',
      background: theme.palette.primary.main,
      height: '100vh',
      [theme.breakpoints.down('lg')]: {
        padding: '25px 0',
      },
      [theme.breakpoints.down('sm')]: {
        gap: '16px',
        padding: '32px 16px',
      },
      [theme.breakpoints.down(321)]: {
        padding: '12px',
      },
    },
    title: {
      fontSize: '48px',
      fontWeight: 700,
      padding: '15px 5px 0px 5px',
      textAlign: 'center',
      [theme.breakpoints.down('sm')]: {
        fontSize: '24px',
      },
    },
    textWrapper: {
      maxWidth: '75%',
      display: 'flex',
      flexDirection: 'column',
      gap: 3,
      [theme.breakpoints.down('sm')]: {
        maxWidth: '100%',
      },
    },
    text: {
      fontWeight: 600,
      fontSize: '18px',
      fontStyle: 'normal',
      color: theme.palette.primary.dark,
      [theme.breakpoints.down('sm')]: {
        fontSize: '16px',
      },
    },
    textBold: {
      fontSize: '24px',
      '& span': {
        display: 'inline-block',
        position: 'relative',
        zIndex: '1',
        textDecoration: 'underline',
        textDecorationColor: '#77ADF5',
        textDecorationThickness: '3px',
      },
      [theme.breakpoints.down('lg')]: {
        fontSize: '20px',
      },
      [theme.breakpoints.down('md')]: {
        fontSize: '18px',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '16px',
      },
      [theme.breakpoints.down(376)]: {
        fontSize: '14px',
      },
    },
    textBoldYellow: {
      fontSize: '24px',
      '& span': {
        display: 'inline-block',
        position: 'relative',
        zIndex: '1',
        textDecoration: 'underline',
        textDecorationColor: '#F5E14D',
        textDecorationThickness: '3px',
      },
      [theme.breakpoints.down('lg')]: {
        fontSize: '20px',
      },
      [theme.breakpoints.down('md')]: {
        fontSize: '18px',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '16px',
      },
      [theme.breakpoints.down(376)]: {
        fontSize: '14px',
      },
    },
  };
};

export const reportStyles = () => {
  return {
    wrapper: {
      height: '100%',
      minHeight: '100vh',
      padding: '64px 32px',
      display: 'flex',
      flexDirection: 'column',
      gap: '32px',
      [theme.breakpoints.down('sm')]: {
        gap: '16px',
        padding: '32px 8px',
      },
    },
    title: {
      fontWeight: 600,
      width: 'fit-content',
      fontSize: '48px',
      [theme.breakpoints.down('lg')]: {
        fontSize: '36px',
        paddingTop: '10px',
      },
    },
    titleWrapper: {
      display: 'flex',
      justifyContent: 'center',
    },
    subTitle: {
      fontSize: '24px',
      [theme.breakpoints.down('sm')]: {
        fontSize: '16px',
        textAlign: 'center',
      },
    },
    subTitleWrapper: {
      display: 'flex',
      justifyContent: 'center',
    },
    positionsWrapper: {
      display: 'flex',
      flexDirection: 'column',
      gap: '32px',
      [theme.breakpoints.down('sm')]: {
        gap: '16px',
      },
    },
    position: {
      padding: '32px',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      background: theme.palette.primary.main,
    },
    positionTitle: {
      fontSize: '18px',
      fontWeight: 500,
      margin: 0,
      [theme.breakpoints.down('sm')]: {
        fontSize: '16px',
      },
    },
    positionItems: {
      margin: 0,
      fontSize: '16px',
      [theme.breakpoints.down('sm')]: {
        fontSize: '14px',
      },
    },
    imageTitle: {
      marginBottom: '16px',
      textAlign: 'center',
      fontSize: '24px',
      fontWeight: 700,
    },
  };
};

export const donateStyles = () => {
  return {
    wrapper: {
      display: 'flex',
      padding: '128px 64px',
      flexDirection: 'column',
      alignItems: 'center',
      height: '100vh',
      [theme.breakpoints.down('md')]: {
        padding: '32px',
      },
      [theme.breakpoints.down('sm')]: {
        padding: '32px 16px',
      },
    },
    title: {
      fontSize: '48px',
      fontWeight: 700,
      textAlign: 'center',
      marginBottom: '64px',
      [theme.breakpoints.down('md')]: {
        marginBottom: '16px',
        fontSize: '32px',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '24px',
      },
    },
    content: {
      display: 'flex',
      gap: '10px',
      width: '100%',
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
      },
    },
    block: {
      padding: '35px 0px',
      width: '50%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '32px',
      background: theme.palette.primary.main,
      [theme.breakpoints.down('md')]: {
        width: '100%',
        padding: '12px 0px',
        '& img': {
          height: '120px',
          width: '120px',
        },
      },
    },
    blockTitle: {
      fontSize: '24px',
      fontWeight: 700,
      [theme.breakpoints.down('sm')]: {
        fontSize: '18px',
      },
    },
    donateButton: {
      background: theme.palette.secondary.main,
      boxShadow: 'none',
      borderRadius: '0px',
      color: theme.palette.primary.light,
      textTransform: 'none',
      fontSize: '24px',
      padding: '8px 0px',
      fontWeight: 400,
      width: '400px',
      [theme.breakpoints.down('md')]: {
        width: '300px',
      },
      [theme.breakpoints.down('md')]: {
        width: '250px',
      },
      height: '47px',
    },
    bankInstruction: {
      fontSize: '16px',
      color: theme.palette.secondary.main,
      textAlign: 'center',
      [theme.breakpoints.down(321)]: {
        fontSize: '12px',
      },
    },
  };
};

export const contactsStyle = width => {
  return {
    wrapper: {
      display: 'flex',
      padding: '128px 0px',
      flexDirection: 'column',
      gap: '64px',
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
        padding: '5px',
        gap: '10px',
      },
    },
    title: {
      fontSize: '48px',
      fontWeight: 600,
      [theme.breakpoints.down('sm')]: {
        fontSize: '32px',
      },
    },
    content: {
      display: 'flex',
      gap: '25px',
      width: '100%',
      padding: '0px 64px',
      [theme.breakpoints.down('md')]: {
        padding: '0px 32px',
      },
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column-reverse',
        gap: '32px',
        padding: '0px 16px',
      },
    },
    column: {
      width: '50%',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
    },
    label: {
      fontWeight: 600,
      marginBottom: '16px',
      fontSize: '24px',
      textAlign: 'center',
    },
    email: {
      textDecoration: 'none',
      color: theme.palette.secondary.main,
      fontSize: '24px',
    },
    emailWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    socialIconsWrapper: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      alignItems: 'center',
      marginBottom: '32px',
    },
    socialIcons: {
      display: 'flex',
      gap: '16px',
    },
    icon: {
      cursor: 'pointer',
      fill: theme.palette.secondary.main,
    },
    formTitle: {
      fontWeight: 600,
      marginBottom: '20px',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: width > 1024 ? '30px' : '20px',
    },
    textarea: {
      height: '150px',
      resize: 'none',
      padding: '8px',
      fontFamily: 'NT Somic',
      outline: 'none',
      border: '0px',
      fontSize: '18px',
    },
    doubleInputsWrapper: {
      display: 'flex',
      gap: '16px',
      width: '100%',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
      },
    },
    formInput: {
      width: '50%',
      '& .MuiInputBase-input': {
        height: '40px',
        padding: '8px',
        fontSize: '18px',
        '&::placeholder': {
          color: theme.palette.primary.main,
        },
      },
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
    },
    formLabel: {
      fontWeight: 600,
      color: theme.palette.primary.dark,
    },
    formInputWrapper: {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
    },
    formButton: {
      background: theme.palette.secondary.main,
      boxShadow: 'none',
      borderRadius: '0px',
      color: theme.palette.primary.light,
      textTransform: 'none',
      fontSize: '18px',
      padding: '8px 0px',
      fontWeight: 400,
    },
    error: {
      fontSize: '12px',
      color: 'red',
      fontWeight: 600,
      position: 'absolute',
      bottom: -20,
    },
  };
};

export const footerStyles = () => {
  return {
    wrapper: {
      background: theme.palette.primary.main,
      padding: '16px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        gap: '8px',
      },
    },
    logo: {
      width: '150px',
    },
    pdfLink: {
      color: theme.palette.primary.dark,
      cursor: 'pointer',
      textDecoration: 'none',
      fontSize: '18px',
      [theme.breakpoints.down('md')]: {
        fontSize: '13px',
      },
    },
    links: {
      display: 'flex',
      gap: '32px',
      [theme.breakpoints.down('sm')]: {
        gap: '16px',
      },
      [theme.breakpoints.down('sm')]: {
        gap: '8px',
        flexDirection: 'column',
        alignItems: 'center',
      },
    },
  };
};

export const useHeadBlockStyles = () => {
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      padding: '130px 0',
      gap: '96px',
      [theme.breakpoints.down('md')]: {
        padding: '80px 0',
      },
    },
    imageWrapper: {
      '& img': {
        [theme.breakpoints.down('md')]: {
          maxWidth: '700px',
        },
        [theme.breakpoints.down('sm')]: {
          maxWidth: '400px',
        },
        [theme.breakpoints.down(376)]: {
          maxWidth: '320px',
        },
        [theme.breakpoints.down(321)]: {
          maxWidth: '300px',
        },
        [theme.breakpoints.up('xxl')]: {
          width: '1500px',
          height: '900px',
        },
      },
    },
    buttonsWrapper: {
      display: 'flex',
      gap: '10px',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        gap: '8px',
        '& a': {
          width: '328px !important',
        },
      },
      [theme.breakpoints.down(321)]: {
        '& a': {
          width: '315px !important',
        },
      },
      [theme.breakpoints.up('xxl')]: {
        gap: '25px',
        '& a': {
          width: '500px !important',
          fontSize: '32px !important',
        },
      },
    },
    donate: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textDecoration: 'none',
      color: theme.palette.primary.light,
      background: theme.palette.secondary.main,
      padding: '8px',
      fontSize: 16,
      cursor: 'pointer',
      fontSize: '18px',
      width: '332px',
    },
    request: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textDecoration: 'none',
      color: theme.palette.primary.dark,
      background: theme.palette.primary.light,
      border: `1px solid ${theme.palette.secondary.main}`,
      padding: '8px',
      fontSize: 16,
      cursor: 'pointer',
      fontSize: '18px',
      width: '332px',
    },
  };
};

export const useCustomCarouselStyles = () => {
  return {
    customDot: {
      margin: '0 8px',
      cursor: 'pointer',
      width: '28px',
      height: '7px',
      [theme.breakpoints.down('sm')]: {
        margin: '0 4px',
      },
    },
    wrapper: {
      paddingBottom: '16px',
      position: 'relative',
    },
    imagesWrapper: { display: 'flex', gap: '10px' },
  };
};
