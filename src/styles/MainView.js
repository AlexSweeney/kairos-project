import { 
  whiteBackground, 
  darkBlueBackground, 
  lightPinkBackground, 
  darkBlueText, 
  lightBlueText, 
  whiteText, 
  greyText,
} from './colors.js';
import backgroundImage from './../imgs/background-image.jpg';

// ==================== Main-View left */
export const mainViewLeftStyle = {
  background: whiteBackground,
};

export const mainViewLeftHeaderStyle = {
  fontFamily: 'Noto Sans, sans-serif',
  fontSize: '56px',
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: '76px',
  letterSpacing: '0.01em',
  color: darkBlueText,
};   

export const mainViewRightHeaderStyle = {
  ...mainViewLeftHeaderStyle,
  color: whiteText,
};   

export const mainViewRightButtonStyle = {
  // button 
  borderRadius: '8px',
  padding: '8px',
  background: darkBlueBackground, 

  // text
  fontFamily: 'Noto Sans, sans-serif',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: '600',
  lineHeight: '16px',
  letterSpacing: '0px',
  textAlign: 'center',
  color: '#FFFFFF',
}; 

// ==================== Main-View Right */
export const mainViewRightStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
};

// ===== Main-View Button */
export const mainViewButtonButtonStyle = {
  background: 'transparent',
  width: '124.42px',
  paddingBottom: '16px',
  fontFamily: 'Noto Sans, sans-serif',
  fontStyle: 'SemiBold',
  fontSize: '22px',
  fontWeight: '600',
  lineHeight: '30px',
  color: whiteText,
};

export const mainViewButtonSelectedStyle = {
  ...mainViewButtonButtonStyle,
  opacity: 1,
  borderBottom: `1.5px solid ${lightBlueText}`,
};

export const mainViewButtonDeselectedStyle = {
  ...mainViewButtonButtonStyle,
  opacity: 0.5,
}; 

// ===== Main-View Content */
export const mainViewInfoNumberStyle = {
  fontFamily: 'Noto Sans, sans-serif',
  fontStyle: 'normal',
  fontSize: '64px',
  fontWeight: '700',
  lineHeight: '87px',
  color: lightBlueText,
}; 

export const mainViewInfoTextStyle = {
  fontFamily: 'Noto Sans, sans-serif',
  fontSize: '20px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '27px', 
  textAlign: 'center',
  color: whiteBackground,
};