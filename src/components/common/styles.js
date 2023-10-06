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
      boxShadow: '0 3px 5px rgba(57, 63, 72, 0.3)',
      color: theme.palette.primary.light,
      '& p': {
        fontWeight: 600,
      },
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      [theme.breakpoints.down('sm')]: {
        padding: '20px 5px',
        justifyContent: 'initial',
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
      gap: '16px',
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
      gap: '32px',
    },
    langDropDown: {
      display: 'flex',
      gap: '8px',
      alignItems: 'center',
      cursor: 'pointer',
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
    },
    arrowUp: {
      color: theme.palette.primary.light,
      transform: 'rotate(180deg)',
    },
    mobileLink: {
      '& a': {
        color: theme.palette.primary.light,
        fontWeight: 600,
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
      color: theme.palette.primary.dark,
      fontWeight: 600,
      background: theme.palette.primary.main,
      padding: '10px 15px',
      borderRadius: '8px',
      fontSize: 18,
      width: 'fit-content',
    },
  };
};

export const aboutStyles = () => {
  return {
    wrapper: {
      display: 'flex',
      padding: '3%',
      flexDirection: 'column',
      gap: '30px',
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
        gap: '20px',
      },
    },
    title: {
      fontSize: '48px',
      fontWeight: 600,
      padding: '15px 5px 0px 5px',
      textAlign: 'center',
      [theme.breakpoints.down('sm')]: {
        fontSize: '32px',
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
      fontWeight: 800,
      fontSize: '18px',
      fontStyle: 'normal',
      color: theme.palette.primary.dark,
    },
  };
};

export const reportStyles = () => {
  return {
    wrapper: {
      backgroundImage:
        'url(https://i.im.ge/2023/03/11/74ghjh.reportBackground.jpg)',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: '100%',
      minHeight: '100vh',
      padding: '2%',
    },
    title: {
      fontWeight: 600,
      color: theme.palette.primary.light,
      width: 'fit-content',
      padding: '0.5%',
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
      fontWeight: 600,
      color: theme.palette.primary.main,
      width: 'object-fit',
      padding: '0 10px',
      [theme.breakpoints.down('lg')]: {
        fontSize: '18px',
        display: 'block',
        padding: 0,
        whiteSpace: 'normal',
        textAlign: 'center',
      },
      [theme.breakpoints.down('lg')]: {
        display: 'block',
        padding: 0,
        whiteSpace: 'normal',
        textAlign: 'center',
      },
    },
    subTitleWrapper: {
      display: 'flex',
      justifyContent: 'center',
      whiteSpace: 'nowrap',
      marginTop: '5%',
    },
    itemsWrapper: {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      maxHeight: '300px',
      marginTop: '5%',
      alignItems: 'center',
      [theme.breakpoints.down('lg')]: {
        textAlign: 'center',
        maxHeight: 'initial',
        flexWrap: 'initital',
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
    item: {
      color: theme.palette.primary.light,
      fontWeight: 600,
      [theme.breakpoints.down('lg')]: {
        fontSize: '19px',
      },
    },
    content: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    iconWrapper: {
      width: '24px',
      '& svg': {
        fill: theme.palette.primary.light,
      },
    },
  };
};

export const donateStyles = () => {
  return {
    wrapper: {
      display: 'flex',
      padding: '3%',
      flexDirection: 'column',
      gap: '30px',
      alignItems: 'center',
      height: '100vh',
      background: '#F5F5F5',
    },
    title: {
      fontWeight: 600,
      width: 'fit-content',
      padding: '0.5%',
      [theme.breakpoints.down('sm')]: {
        fontSize: '32px',
      },
    },
    content: {
      display: 'flex',
      width: '100%',
      rowGap: '10px',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        gap: 4,
      },
    },
    donateColumn: {
      display: 'flex',
      flexDirection: 'column',
      width: '50%',
      paddingTop: '5%',
      gap: 5,
      alignItems: 'center',
      width: '50%',
      '& button': {
        color: theme.palette.primary.light,
        fontWeight: 600,
        padding: '3% 3%',
        fontSize: '18px',
        borderRadius: '50px',
        width: '100%',
      },
      '& form': {
        width: '100%',
      },
      [theme.breakpoints.down('md')]: {
        width: '100%',
        gap: 4,
        paddingTop: '5%',
        '& h4': {
          fontSize: '24px',
        },
      },
    },
    requisitesColumn: {
      paddingTop: '5%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '50%',
      '& h4': {
        marginBottom: '45px',
      },
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        '& h4': {
          fontSize: '24px',
          marginBottom: '20px',
        },
      },
    },
    requisitesContent: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7,
      [theme.breakpoints.down('md')]: {
        gap: 5,
      },
    },
    requisitesCopy: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    requisitesSymbol: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '40px',
      height: '56px',
      background: theme.palette.primary.dark,
      color: theme.palette.primary.light,
      borderRadius: '10px 0px 0px 10px',
      fontWeight: 600,
    },
    requisitesInput: {
      '&.MuiTextField-root': {
        '& div': {
          borderRadius: '0px',
          background: theme.palette.primary.main,
        },
      },
    },
    requisitesCopyButton: {
      background: theme.palette.primary.dark,
      color: theme.palette.primary.light,
      borderRadius: '0px 10px 10px 0px',
      width: '40px',
      height: '56px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
    },
  };
};

export const contactsStyle = (width) => {
  return {
    wrapper: {
      display: 'flex',
      padding: '20px',
      flexDirection: 'column',
      gap: '30px',
      [theme.breakpoints.down('sm')]: {
        padding: '5px',
        gap: '10px',
      },
    },
    title: {
      fontSize: '48px',
      fontWeight: 600,
      color: theme.palette.primary.dark,
      textStroke: '1px #fff',
      [theme.breakpoints.down('sm')]: {
        fontSize: '32px',
      },
    },
    content: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: '50px',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
      },
      [theme.breakpoints.down('md')]: {
        gap: '20px',
      },
    },
    column: {
      width: 'calc(100% / 2)',
      background: theme.palette.primary.main,
      minHeight: '80vh',
      height: '100%',
      borderRadius: '8px',
      textAlign: 'initial',
      padding: '2%',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        minHeight: '250px',
        height: 'initial',
      },
    },
    emailWrapper: {
      marginBottom: '30px',
    },
    label: {
      fontWeight: 600,
      borderBottom: '2px solid',
      width: 'fit-content',
      fontSize: '20px',
    },
    email: {
      textDecoration: 'none',
      fontWeight: 600,
      color: theme.palette.primary.light,
      fontSize: '28px',
      [theme.breakpoints.down('sm')]: {
        fontSize: '24px',
      },
    },
    socialIcons: {
      display: 'flex',
      marginTop: '5px',
      gap: '10px',
    },
    icon: {
      cursor: 'pointer',
      fill: '#fff',
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
      height: '70px',
      resize: 'none',
      borderRadius: '12px',
      padding: '10px',
      fontWeight: 600,
      fontFamily: 'Amazing Grotesk',
      outline: 'none',
      border: '0px',
    },
    formInput: {
      '& .MuiInputBase-input': {
        background: theme.palette.primary.light,
        height: '40px',
        paddingLeft: '5px',
        borderRadius: '12px',
        fontWeight: 600,
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
      background: theme.palette.primary.dark,
      color: theme.palette.primary.light,
      fontWeight: 600,
      height: '40px',
      fontSize: '18px',
      [theme.breakpoints.down('sm')]: {
        fontSize: '16px',
      },
    },
    error: {
      fontSize: '12px',
      color: 'red',
      fontWeight: 600,
      position: 'absolute',
      bottom: -20,
    },
    buttonWrapper: {
      display: 'flex',
      height: width > 1024 ? '70px' : '50px',
      alignItems: 'end',
      '& button': {
        width: '100%',
        '&.Mui-disabled': {
          background: 'gray',
          color: '#fff',
        },
      },
    },
  };
};

export const footerStyles = () => {
  return {
    wrapper: {
      background: theme.palette.primary.main,
      padding: '0% 2% 2% 2%',
      display: 'flex',
      justifyContent: 'space-between',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
      },
    },
    logo: {
      width: '150px',
    },
    pdfLink: {
      color: theme.palette.primary.light,
      fontWeight: 600,
      cursor: 'pointer',
      textDecoration: 'none',
    },
    leftSide: {
      display: 'flex',
      flexDirection: 'column',
    },
    links: {
      paddingLeft: '17px',
      display: 'flex',
      gap: '10px',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
      },
    },
    rightSide: {
      padding: '2% 5% 0% 0%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'end',
      gap: '10px',
      [theme.breakpoints.down('sm')]: {
        alignItems: 'start',
        paddingLeft: '17px',
        flexDirection: 'column-reverse',
      },
    },
    donateLink: {
      textDecoration: 'none',
      color: theme.palette.primary.light,
      fontWeight: 600,
      background: theme.palette.primary.dark,
      padding: '4%',
      width: '150px',
      textAlign: 'center',
      [theme.breakpoints.down('sm')]: {
        width: '210px',
      },
    },
    mail: {
      color: theme.palette.primary.light,
      fontWeight: 600,
      textDecoration: 'none',
    },
  };
};
