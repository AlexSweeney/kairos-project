export function hexToRGB(hex) {
	hex = hex.replace('#', '');
	const aRgbHex = hex.match(/.{1,2}/g);
	const a =  parseInt(aRgbHex[0], 16);
	const b =  parseInt(aRgbHex[1], 16);
  const c = parseInt(aRgbHex[2], 16);

  return `rgb(${a}, ${b}, ${c})`;
}

export function getAllChildren(node) {
	let children = [];

	function getChildren(node) { 
		children.push(node);
		if(node.children.length > 0) Array.from(node.children).forEach(child => getChildren(child))
	}

	getChildren(node)
	// first call adds initial node
	return children.slice(1);
}	

/*export function makeObjectKeysLowerCase(obj) {
	let newObj = {};

	Object.keys(obj).forEach(key => {
		const thisKey = key.toLowerCase();
		const thisVal = obj[key];
		newObj[thisKey] = thisVal;
	})

	return newObj;
}
 
export function testObjectsForEquality(objOne, objTwo) {
	// same keys
	const keysOne = Object.keys(objOne);
	const keysTwo = Object.keys(objTwo);

	if(keysOne.length !== keysTwo.length) {
		// console.error(`testObjectsForEquality() failed: objOne.keys.length === ${keysOne.length}, objTwo.keys.length === ${keysTwo.length}`)
		return false; 
	}

	for(let i = 0; i < keysOne.length; i++) {
		const key = keysOne[i];
		if(keysTwo.indexOf(key) === -1) {
			// console.error(`testObjectsForEquality() failed: objOne[${key}] === ${objOne[key]}, objTwo[${key}] === ${objTwo[key]}`)
			return false;
		}
	} 

	// same values
	for(let y = 0; y < keysOne.length; y++) {
		const keyOne = keysOne[y];
		
		const valueOne = objOne[keyOne];
		const valueTwo = objTwo[keyOne];

		if(valueOne !== valueTwo) return false;
	}  
 
	return true;
}*/

/*export function getObjectFromStyle(style) {
	const keys = Object.keys(style);
	let obj = {};
	console.log('style', style)
	keys.forEach(keyNum => {
		// only add public key : vals 
		if(keyNum[0] !== '_') {
			const thisKey = style[keyNum];
			const thisVal = style[thisKey];
			const displayKey = thisKey.replace('-', '');
			obj[displayKey] = thisVal; 
		}
	})
 
	return obj;
}*/