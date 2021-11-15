import {
	hexToRGB,
	containsTextContent,
	getAllChildren,
	makeObjectKeysLowerCase,
 	testObjectsForEquality,
	getObjectFromStyle,
} from './../utils/testUtils.js';

it('hexToRGB()', () => {
	const whiteHex = '#ffffff';
	const whiteRGB = 'rgb(255, 255, 255)'; 

	const test = hexToRGB(whiteHex);
	expect(test).toEqual(whiteRGB)
})
 