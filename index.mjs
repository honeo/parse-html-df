/*
	本体
		引数
			1: string
				HTML文字列
		返り値
			documentfragument
*/
function parseHTML(htmlText){

	if(typeof htmlText!=='string'){
		throw new TypeError('invalid argument');
	}

	const range = document.createRange();
	range.selectNodeContents(document.body);
	return range.createContextualFragment(htmlText);
}
export default parseHTML;
