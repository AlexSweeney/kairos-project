import { 
	whiteBackground,
  lightBlueBackground,
  pinkBackground,
  lightGreyBorder,
  pinkBorder,
  lightGreyBoxShadow,
  whiteText,
  darkBlueText,
} from './colors.js';

// ================= Background
export const priceOptionsViewStyle = {
	background: lightBlueBackground,
};

// ================= Boxes
export const priceOptionsBoxStyle = {
	width: '264px',
	height: '228px',
	borderRadius: '10px',
	background: whiteBackground,
	border: `1px solid ${lightGreyBorder}`,
	boxShadow: `0px 13px 19px 0px ${lightGreyBoxShadow}`, 
};
						 
export const priceOptionsBorderBoxStyle = {
	...priceOptionsBoxStyle,
	border: `2px solid ${pinkBorder}`,
};

export const priceOptionsHighlightBoxStyle = {
	...priceOptionsBoxStyle,
	background: pinkBackground,
	color: whiteText,
};

// ================= Heading
export const priceOptionBoxHeadingStyle = {
	fontFamily: 'Roboto, sans-serif',
	fontSize: '22px',
	fontStyle: 'normal',
	fontWeight: '700',
	lineHeight: '33px',
	letterSpacing: '0.1px',
	textAlign: 'left',
	color: darkBlueText,
};

export const priceOptionBoxHighlightHeadingStyle = {
	...priceOptionBoxHeadingStyle,
	color: '',
};

// ================= SubHeading
export const priceOptionBoxSubHeadingStyle = {
	fontFamily: 'Roboto, sans-serif',
	fontSize: '12px',
	fontStyle: 'normal',
	fontWeight: '700',
	lineHeight: '18px',
	letterSpacing: '0.1px',
	textAlign: 'left',
	color: '#374754',
};

export const priceOptionBoxHighlightSubHeadingStyle = {
	...priceOptionBoxSubHeadingStyle,
	color: '',
};

// ================= Price
export const priceNumberStyle = {
	fontFamily: 'Noto Sans, sans-serif',
	fontSize: '36px',
	fontStyle: 'normal',
	fontWeight: '700',
	lineHeight: '66px',
	letterSpacing: '0.2px',
	textAlign: 'left',
	paddingRight: '5px',
	color: '#252B42',
}

export const priceNumberHighlightStyle = {
	...priceNumberStyle,
	color: '',
}

export const priceZeroStyle = {
	...priceNumberStyle,
	fontSize: '64px',
}; 

export const priceUnitStyle = {
	fontFamily: 'Roboto, sans-serif',
	fontSize: '22px',
	fontStyle: 'normal',
	fontWeight: '700',
	lineHeight: '33px',
	letterSpacing: '0.1px',
	textAlign: 'left',
	color: '#252B42',
}; 

export const priceUnitHightLightStyle = {
	...priceUnitStyle,
	color: '',
};

export const priceLabelStyle = {
	fontFamily: 'Roboto, sans-serif',
	fontSize: '12px',
	fontStyle: 'normal',
	fontWeight: '700',
	lineHeight: '18px',
	letterSpacing: '0.1px',
	textAlign: 'left',
	color: '#374754',
}; 

export const priceLabelHighlightStyle = {
	...priceLabelStyle,
	color: '',
};