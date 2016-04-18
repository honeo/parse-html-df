/*
	prototype
*/
import parseHTML from './parse-html.js';

Object.defineProperty(HTMLDocument.prototype, 'parseHTML', {
    value: parseHTML,
    writable: true,
    configurable: true,
    enumerable: false
});

export default true;
