import { SvgIcon } from '@mui/material';

const ArrowDown = ({ sx = {}, ...props }) => {
  return (
    <SvgIcon
      width="24px"
      height="24px"
      viewBox="0 0 24 28"
      sx={{ ...sx }}
      {...props}
    >
      <mask
        id="mask0_45_16"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <rect width="24" height="24" />
      </mask>
      <g mask="url(#mask0_45_16)">
        <path d="M11.3 14.3L8.69998 11.7C8.38331 11.3833 8.31248 11.0208 8.48748 10.6125C8.66248 10.2042 8.97498 10 9.42498 10H14.575C15.025 10 15.3375 10.2042 15.5125 10.6125C15.6875 11.0208 15.6166 11.3833 15.3 11.7L12.7 14.3C12.6 14.4 12.4916 14.475 12.375 14.525C12.2583 14.575 12.1333 14.6 12 14.6C11.8666 14.6 11.7416 14.575 11.625 14.525C11.5083 14.475 11.4 14.4 11.3 14.3Z" />
      </g>
    </SvgIcon>
  );
};

export default ArrowDown;
