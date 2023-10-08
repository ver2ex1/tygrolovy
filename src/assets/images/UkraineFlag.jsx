import { SvgIcon } from '@mui/material';

const UkraineFlag = ({ sx = {}, ...props }) => {
  return (
    <SvgIcon
      width="24px"
      height="24px"
      viewBox="0 0 24 28"
      sx={{ ...sx }}
      {...props}
    >
      <g id="surface1">
        <path
          style={{
            stroke: 'none',
            fillRule: 'nonzero',
            fill: 'rgb(100%,85.490196%,26.666667%)',
            fillOpacity: 1,
          }}
          d="M 24 12 C 24 18.628906 18.628906 24 12 24 C 5.371094 24 0 18.628906 0 12 C 0 5.371094 5.371094 0 12 0 C 18.628906 0 24 5.371094 24 12 Z M 24 12 "
        />
        <path
          style={{
            stroke: 'none',
            fillRule: 'nonzero',
            fill: 'rgb(20%,54.117647%,95.294118%)',
            fillOpacity: 1,
          }}
          d="M 0 12 C 0 5.371094 5.371094 0 12 0 C 18.628906 0 24 5.371094 24 12 "
        />
      </g>
    </SvgIcon>
  );
};

export default UkraineFlag;
