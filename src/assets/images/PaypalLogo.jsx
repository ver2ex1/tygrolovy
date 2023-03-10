import { SvgIcon } from '@mui/material';

const PaypalLogo = ({ sx = {}, ...props }) => {
  return (
    <SvgIcon
      width='24px'
      height='24px'
      viewBox='0 0 24 28'
      sx={{ ...sx }}
      {...props}
    >
      <path
        fill='#253b80'
        d='m7.2659888 29.154.523-3.322-1.165-.027h-5.563l3.866-24.513c.012-.074.051-.143.108-.192.057-.049.13-.076.206-.076h9.3800002c3.114 0 5.263.648 6.385 1.927.526.6.861 1.227 1.023 1.917.17.724.173 1.589.007 2.644l-.012.077v.676l.526.298c.443.235.795.504 1.065.812.45.513.741 1.165.864 1.938.127.795.085 1.741-.123 2.812-.24 1.232-.628 2.305-1.152 3.183-.482.809-1.096 1.48-1.825 2-.696.494-1.523.869-2.458 1.109-.906.236-1.939.355-3.072.355h-.73c-.522 0-1.029.188-1.427.525-.399.344-.663.814-.744 1.328l-.055.299-.924 5.855-.042.215c-.011.068-.03.102-.058.125-.025.021-.061.035-.096.035H7.2659888z'
      />
      <path
        fill='#179bd7'
        d='M23.047989 7.667c-.028.179-.06.362-.096.55-1.237 6.351-5.469 8.545-10.874 8.545H9.3259888c-.661 0-1.218.48-1.321 1.132l-1.409 8.936-.399 2.533c-.067.428.263.814.695.814h4.8810002c.578 0 1.069-.42 1.16-.99l.048-.248.919-5.832.059-.32c.09-.572.582-.992 1.16-.992h.73c4.729 0 8.431-1.92 9.513-7.476.452-2.321.218-4.259-.978-5.622-.362-.411-.811-.752-1.336-1.03z'
      />
      <path
        fill='#222d65'
        d='M21.753989 7.151c-.189-.055-.384-.105-.584-.15-.201-.044-.407-.083-.619-.117-.742-.12-1.555-.177-2.426-.177h-7.352c-.181 0-.353.041-.507.115-.3390002.163-.5910002.484-.6520002.877l-1.564 9.906-.045.289c.103-.652.66-1.132 1.321-1.132h2.7520002c5.405 0 9.637-2.195 10.874-8.545.037-.188.068-.371.096-.55-.313-.166-.652-.308-1.017-.429-.09-.03-.183-.059-.277-.087z'
      />
      <path
        fill='#253b80'
        d='M9.6139888 7.699c.061-.393.313-.714.6520002-.876.155-.074.326-.115.507-.115h7.352c.871 0 1.684.057 2.426.177.212.034.418.073.619.117.2.045.395.095.584.15.094.028.187.057.278.086.365.121.704.264 1.017.429.368-2.347-.003-3.945-1.272-5.392-1.399-1.593-3.924-2.275-7.155-2.275H5.2419888c-.66 0-1.223.48-1.325 1.133L.00998882 25.898c-.077.49.301.932.795.932H6.5959888l1.454-9.225 1.564-9.906z'
      />
    </SvgIcon>
  );
};

export default PaypalLogo;
