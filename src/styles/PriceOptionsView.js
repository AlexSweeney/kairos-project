import { 
	whiteBackground,
  lightBlueBackground,
  lightGreyBorder,
} from './colors.js';

export const priceOptionsViewStyle = {
	background: lightBlueBackground,
};

export const priceOptionsBoxStyle = {
	width: '264px',
	height: '228px',
	padding: '42px 29px',	
	borderRadius: '10px',
	background: whiteBackground,
	border: `1px solid ${lightGreyBorder}`,
	boxShadow: '0px 13px 19px 0px #00000012',
};
						 
export const priceOptionsBorderBoxStyle = {
	...priceOptionsBoxStyle,
	border: '2px solid #E6367E',
};

export const priceOptionsHighlightBoxStyle = {
	...priceOptionsBoxStyle,
	background: '#E6367E',
	color: '#FFFFFF',
};

export const priceOptionBoxHeadingStyle = {
	fontFamily: 'Roboto, sans-serif',
	fontSize: '22px',
	fontStyle: 'normal',
	fontWeight: '700',
	lineHeight: '33px',
	letterSpacing: '0.10000000149011612px',
	textAlign: 'left',
};

export const priceOptionBoxSubHeadingStyle = {
	fontFamily: 'Roboto, sans-serif',
	fontSize: '12px',
	fontStyle: 'normal',
	fontWeight: '700',
	lineHeight: '18px',
	letterSpacing: '0.10000000149011612px',
	textAlign: 'left',
};

export const priceNumberStyle = {
	fontFamily: 'Noto Sans, sans-serif',
	fontSize: '36px',
	fontStyle: 'normal',
	fontWeight: '700',
	lineHeight: '66px',
	letterSpacing: '0.20000000298023224px',
	textAlign: 'left',
	paddingRight: '5px',
}

export const priceZeroStyle = {
	...priceNumberStyle,
	fontSize: '64px',
}; 

export const priceDollarStyle = {
	fontFamily: 'Roboto, sans-serif',
	fontSize: '22px',
	fontStyle: 'normal',
	fontWeight: '700',
	lineHeight: '33px',
	letterSpacing: '0.10000000149011612px',
	textAlign: 'left',
}; 

export const priceTextStyle = {
	fontFamily: 'Roboto, sans-serif',
	fontSize: '12px',
	fontStyle: 'normal',
	fontWeight: '700',
	lineHeight: '18px',
	letterSpacing: '0.10000000149011612px',
	textAlign: 'left',
}; 
