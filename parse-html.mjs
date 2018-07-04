/*
	本体
		this = document
*/

function parseHTML(htmlText){
	if(typeof htmlText!=='string'){
		throw new TypeError('invalid argument');
	}
	const range = this.createRange();
	range.selectNodeContents(this.body);
	return range.createContextualFragment(htmlText);
}
export default parseHTML;
