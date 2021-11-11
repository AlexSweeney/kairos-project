export function hexToRGB(hex) {
	hex = hex.replace('#', '');
	const aRgbHex = hex.match(/.{1,2}/g);
	const a =  parseInt(aRgbHex[0], 16);
	const b =  parseInt(aRgbHex[1], 16);
  const c = parseInt(aRgbHex[2], 16);

  return `rgb(${a}, ${b}, ${c})`;
}

export function containsTextContent(nodes, text) {
	return Array.from(nodes).some(node => node.textContent === text);
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