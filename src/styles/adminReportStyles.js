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
  };
};

export const useAddReportStyles = () => {
  return {
    root: {},
  };
};

export default useAdminReportStyles;
