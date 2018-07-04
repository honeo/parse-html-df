console.log('parse-html-df: test');

// Modules
const path = require('path');
const pagepath = 'file://' + path.join(__dirname, 'test.html');
const Nightmare = require('nightmare');
const nightmare = Nightmare({
	show: true,
	nodeIntegration: true
});

nightmare
	.goto(pagepath)
	.evaluate( ()=>{
		require('babel-register')({
			presets: ['es2015', 'stage-0']
		});
		const isRegister = require('../register.mjs').default;
		const parseHTML = require('../').default;
		const htmlString = '<div>hoge</div><span>fuga</span>';
		const df1 = parseHTML(htmlString);
		const df2 = document.parseHTML(htmlString);
		return isRegister && df1.childNodes.length===2 && df2.childNodes.length===2;
	})
	.end()
	.then( (arg)=>{
		if(arg){
			console.log('test: success')
		}else{
			throw new Error('test: failed');
		}
	})
	.catch( (error)=>{
		console.log('catch', error);
	});
