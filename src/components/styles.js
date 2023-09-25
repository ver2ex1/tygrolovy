import theme from '@/config/theme';

export const useReportFormStyles = () => {
  return {
    formWrapper: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
    },
    buttonsWrapper: {
      display: 'flex',
      justifyContent: 'end',
      gap: '12px',
      alignItems: 'center',
    },
    createButton: {
      color: theme.palette.primary.light,
      width: '150px',
    },
  };
};

export const useEditReportStyles = () => {
  return {
    root: {
      padding: '24px',
      background: theme.palette.primary.light,
      overflow: 'auto',
      height: '100%',
      '& .MuiTextField-root': {
        '& .MuiInputBase-root': {
          width: '350px',
          height: '44px',
        },
      },
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '32px',
    },
  };
};
