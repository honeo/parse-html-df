# parse-html-df
* [honeo/parse-html-df](https://github.com/honeo/parse-html-df)  
* [parse-html-df](https://www.npmjs.com/package/parse-html-df)


## なにこれ
HTML string -> documentFragment


## 使い方
```sh
$ npm i parse-html-df
```
```js
import parseHTML from 'parse-html-df';

// or dynamic-import, CDN
const parseHTML = await import('https://cdn.rawgit.com/honeo/url-change/master/index.mjs');


const df = parseHTML('hoge<div class="fuga"><span class="piyo">foobar</span></div>');
document.body.append(df);
```
```html
<body>
	...
	"hoge"
	<div class="fuga">
		<span class="piyo">foobar</span>
	</div>
<body>
```
