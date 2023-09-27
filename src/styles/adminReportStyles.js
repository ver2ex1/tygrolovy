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
      '& .MuiInputBase-root': {
        height: '40px',
      },
    },
    leftHeaderPart: {
      display: 'flex',
      alignItems: 'center',
    },
    createCSVButton: {
      marginLeft: '12px',
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
  };
};

export default useAdminReportStyles;
