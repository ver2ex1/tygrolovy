const useAdminLoginStyles = () => {
  return {
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      background: '#fff',
      padding: '30px',
      borderRadius: '12px',
      '& .MuiInputBase-root': {
        width: '300px',
        position: 'relative',
      },
      '& .MuiFormHelperText-root': {
        color: '#FF0000',
        position: 'absolute',
        bottom: -21,
      },
      '& .MuiButtonBase-root': {
        color: '#fff',
      },
      boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.75)',
    },
  };
};

export default useAdminLoginStyles;
