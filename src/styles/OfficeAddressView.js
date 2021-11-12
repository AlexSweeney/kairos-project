import { 
  lightBlueBackground,
  greyBorder,
  greyText,
  darkBlueText,
} from './colors.js';

export const officeAddressViewStyle = {
	background: lightBlueBackground,
	borderTop: `1px solid ${greyBorder}`,
};

export const officeAddressBoxStyle = { 
	borderRight: `2px solid ${greyBorder}`,
};

export const officeAddressBoxHeadingStyle = {
	fontFamily: 'Noto Sans, sans-serif',
	fontSize: '22px',
	fontStyle: 'normal',
	fontWeight: '500',
	lineHeight: '30px',
	letterSpacing: '-0.3px',
	textAlign: 'left',
	color: darkBlueText,
};

export const officeAddressTextStyle = {
	fontFamily: 'Noto Sans, sans-serif',
	fontSize: '14px',
	fontStyle: 'normal',
	fontWeight: '400',
	lineHeight: '19px',
	letterSpacing: '-0.2px',
	textAlign: 'left',
	color: greyText,
};
