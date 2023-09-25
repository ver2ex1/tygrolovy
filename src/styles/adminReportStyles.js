const useAdminReportStyles = () => {
  return {
    root: {
      padding: '25px',
      '& a': { textDecoration: 'none' },
      '& button': {
        color: '#fff',
        display: 'flex',
        gap: '10px',
        alignItems: 'center',
      },
    },
    tableWrapper: { paddingTop: '40px' },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    leftHeaderPart: {
      display: 'flex',
      gap: '12px',
      alignItems: 'center',
    },
    createCSVButton: {
      width: '200px',
    },
  };
};

export const useAddReportStyles = () => {
  return {
    root: {
      padding: '24px',
      '& h5': {
        marginBottom: '32px',
      },
      '& .MuiTextField-root': {
        '& .MuiInputBase-root': {
          width: '350px',
          height: '44px',
        },
      },
    },
    formWrapper: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
    },
  };
};

export default useAdminReportStyles;
