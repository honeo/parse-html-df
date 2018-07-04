# parse-html-df
* [honeo/parse-html-df](https://github.com/honeo/parse-html-df)  
* [parse-html-df](https://www.npmjs.com/package/parse-html-df)


## なにこれ
文字列をHTMLにしてDocumentFragmentに入れて返す。


## 使い方
```sh
$ npm i parse-html-df
```
```js
import parseHTML from 'parse-html-df';

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


## prototype拡張
ご利用は計画的に。
```js
import 'parse-html-df/register';

const df = document.parseHTML('htmlstring');
```
