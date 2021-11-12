import {  
  lightPinkBackground
} from './colors.js';

export const alertBarStyle = {
  background: lightPinkBackground,
};

export const alertBarTextStyle = {
  fontFamily: 'Noto Sans, sans-serif',
  fontSize: '24px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '33px',
  letterSpacing: '0em',
  textAlign: 'center',
};

export const alertBarTextBoldStyle = {
  ...alertBarTextStyle,
  fontWeight: '700',
};