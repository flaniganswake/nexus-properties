/*! jQuery v1.11.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k="".trim,l={},m="1.11.0",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(l.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:k&&!k.call("\ufeff\xa0")?function(a){return null==a?"":k.call(a)}:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||n.guid++,e):void 0},now:function(){return+new Date},support:l}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s="sizzle"+-new Date,t=a.document,u=0,v=0,w=eb(),x=eb(),y=eb(),z=function(a,b){return a===b&&(j=!0),0},A="undefined",B=1<<31,C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=D.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",M=L.replace("w","w#"),N="\\["+K+"*("+L+")"+K+"*(?:([*^$|!~]?=)"+K+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+M+")|)|)"+K+"*\\]",O=":("+L+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+N.replace(3,8)+")*)|.*)\\)|)",P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(O),U=new RegExp("^"+M+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L.replace("w","w*")+")"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=/'|\\/g,ab=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),bb=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{G.apply(D=H.call(t.childNodes),t.childNodes),D[t.childNodes.length].nodeType}catch(cb){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function db(a,b,d,e){var f,g,h,i,j,m,p,q,u,v;if((b?b.ownerDocument||b:t)!==l&&k(b),b=b||l,d=d||[],!a||"string"!=typeof a)return d;if(1!==(i=b.nodeType)&&9!==i)return[];if(n&&!e){if(f=Z.exec(a))if(h=f[1]){if(9===i){if(g=b.getElementById(h),!g||!g.parentNode)return d;if(g.id===h)return d.push(g),d}else if(b.ownerDocument&&(g=b.ownerDocument.getElementById(h))&&r(b,g)&&g.id===h)return d.push(g),d}else{if(f[2])return G.apply(d,b.getElementsByTagName(a)),d;if((h=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(h)),d}if(c.qsa&&(!o||!o.test(a))){if(q=p=s,u=b,v=9===i&&a,1===i&&"object"!==b.nodeName.toLowerCase()){m=ob(a),(p=b.getAttribute("id"))?q=p.replace(_,"\\$&"):b.setAttribute("id",q),q="[id='"+q+"'] ",j=m.length;while(j--)m[j]=q+pb(m[j]);u=$.test(a)&&mb(b.parentNode)||b,v=m.join(",")}if(v)try{return G.apply(d,u.querySelectorAll(v)),d}catch(w){}finally{p||b.removeAttribute("id")}}}return xb(a.replace(P,"$1"),b,d,e)}function eb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function fb(a){return a[s]=!0,a}function gb(a){var b=l.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function hb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function ib(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||B)-(~a.sourceIndex||B);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function jb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function kb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function lb(a){return fb(function(b){return b=+b,fb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function mb(a){return a&&typeof a.getElementsByTagName!==A&&a}c=db.support={},f=db.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},k=db.setDocument=function(a){var b,e=a?a.ownerDocument||a:t,g=e.defaultView;return e!==l&&9===e.nodeType&&e.documentElement?(l=e,m=e.documentElement,n=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){k()},!1):g.attachEvent&&g.attachEvent("onunload",function(){k()})),c.attributes=gb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=gb(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(e.getElementsByClassName)&&gb(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=gb(function(a){return m.appendChild(a).id=s,!e.getElementsByName||!e.getElementsByName(s).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==A&&n){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){var c=typeof a.getAttributeNode!==A&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==A?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==A&&n?b.getElementsByClassName(a):void 0},p=[],o=[],(c.qsa=Y.test(e.querySelectorAll))&&(gb(function(a){a.innerHTML="<select t=''><option selected=''></option></select>",a.querySelectorAll("[t^='']").length&&o.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||o.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll(":checked").length||o.push(":checked")}),gb(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&o.push("name"+K+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||o.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),o.push(",.*:")})),(c.matchesSelector=Y.test(q=m.webkitMatchesSelector||m.mozMatchesSelector||m.oMatchesSelector||m.msMatchesSelector))&&gb(function(a){c.disconnectedMatch=q.call(a,"div"),q.call(a,"[s!='']:x"),p.push("!=",O)}),o=o.length&&new RegExp(o.join("|")),p=p.length&&new RegExp(p.join("|")),b=Y.test(m.compareDocumentPosition),r=b||Y.test(m.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},z=b?function(a,b){if(a===b)return j=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===t&&r(t,a)?-1:b===e||b.ownerDocument===t&&r(t,b)?1:i?I.call(i,a)-I.call(i,b):0:4&d?-1:1)}:function(a,b){if(a===b)return j=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],k=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:i?I.call(i,a)-I.call(i,b):0;if(f===g)return ib(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)k.unshift(c);while(h[d]===k[d])d++;return d?ib(h[d],k[d]):h[d]===t?-1:k[d]===t?1:0},e):l},db.matches=function(a,b){return db(a,null,null,b)},db.matchesSelector=function(a,b){if((a.ownerDocument||a)!==l&&k(a),b=b.replace(S,"='$1']"),!(!c.matchesSelector||!n||p&&p.test(b)||o&&o.test(b)))try{var d=q.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return db(b,l,null,[a]).length>0},db.contains=function(a,b){return(a.ownerDocument||a)!==l&&k(a),r(a,b)},db.attr=function(a,b){(a.ownerDocument||a)!==l&&k(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!n):void 0;return void 0!==f?f:c.attributes||!n?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},db.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},db.uniqueSort=function(a){var b,d=[],e=0,f=0;if(j=!c.detectDuplicates,i=!c.sortStable&&a.slice(0),a.sort(z),j){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return i=null,a},e=db.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=db.selectors={cacheLength:50,createPseudo:fb,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ab,bb),a[3]=(a[4]||a[5]||"").replace(ab,bb),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||db.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&db.error(a[0]),a},PSEUDO:function(a){var b,c=!a[5]&&a[2];return V.CHILD.test(a[0])?null:(a[3]&&void 0!==a[4]?a[2]=a[4]:c&&T.test(c)&&(b=ob(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ab,bb).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=w[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&w(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==A&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=db.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),t=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&t){k=q[s]||(q[s]={}),j=k[a]||[],n=j[0]===u&&j[1],m=j[0]===u&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[u,n,m];break}}else if(t&&(j=(b[s]||(b[s]={}))[a])&&j[0]===u)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(t&&((l[s]||(l[s]={}))[a]=[u,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||db.error("unsupported pseudo: "+a);return e[s]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?fb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:fb(function(a){var b=[],c=[],d=g(a.replace(P,"$1"));return d[s]?fb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:fb(function(a){return function(b){return db(a,b).length>0}}),contains:fb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:fb(function(a){return U.test(a||"")||db.error("unsupported lang: "+a),a=a.replace(ab,bb).toLowerCase(),function(b){var c;do if(c=n?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===m},focus:function(a){return a===l.activeElement&&(!l.hasFocus||l.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:lb(function(){return[0]}),last:lb(function(a,b){return[b-1]}),eq:lb(function(a,b,c){return[0>c?c+b:c]}),even:lb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:lb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:lb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:lb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=jb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=kb(b);function nb(){}nb.prototype=d.filters=d.pseudos,d.setFilters=new nb;function ob(a,b){var c,e,f,g,h,i,j,k=x[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=Q.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?db.error(a):x(a,i).slice(0)}function pb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function qb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=v++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[u,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[s]||(b[s]={}),(h=i[d])&&h[0]===u&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function rb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function sb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function tb(a,b,c,d,e,f){return d&&!d[s]&&(d=tb(d)),e&&!e[s]&&(e=tb(e,f)),fb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||wb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:sb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=sb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=sb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ub(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],i=g||d.relative[" "],j=g?1:0,k=qb(function(a){return a===b},i,!0),l=qb(function(a){return I.call(b,a)>-1},i,!0),m=[function(a,c,d){return!g&&(d||c!==h)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>j;j++)if(c=d.relative[a[j].type])m=[qb(rb(m),c)];else{if(c=d.filter[a[j].type].apply(null,a[j].matches),c[s]){for(e=++j;f>e;e++)if(d.relative[a[e].type])break;return tb(j>1&&rb(m),j>1&&pb(a.slice(0,j-1).concat({value:" "===a[j-2].type?"*":""})).replace(P,"$1"),c,e>j&&ub(a.slice(j,e)),f>e&&ub(a=a.slice(e)),f>e&&pb(a))}m.push(c)}return rb(m)}function vb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,i,j,k){var m,n,o,p=0,q="0",r=f&&[],s=[],t=h,v=f||e&&d.find.TAG("*",k),w=u+=null==t?1:Math.random()||.1,x=v.length;for(k&&(h=g!==l&&g);q!==x&&null!=(m=v[q]);q++){if(e&&m){n=0;while(o=a[n++])if(o(m,g,i)){j.push(m);break}k&&(u=w)}c&&((m=!o&&m)&&p--,f&&r.push(m))}if(p+=q,c&&q!==p){n=0;while(o=b[n++])o(r,s,g,i);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=E.call(j));s=sb(s)}G.apply(j,s),k&&!f&&s.length>0&&p+b.length>1&&db.uniqueSort(j)}return k&&(u=w,h=t),r};return c?fb(f):f}g=db.compile=function(a,b){var c,d=[],e=[],f=y[a+" "];if(!f){b||(b=ob(a)),c=b.length;while(c--)f=ub(b[c]),f[s]?d.push(f):e.push(f);f=y(a,vb(e,d))}return f};function wb(a,b,c){for(var d=0,e=b.length;e>d;d++)db(a,b[d],c);return c}function xb(a,b,e,f){var h,i,j,k,l,m=ob(a);if(!f&&1===m.length){if(i=m[0]=m[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&c.getById&&9===b.nodeType&&n&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(ab,bb),b)||[])[0],!b)return e;a=a.slice(i.shift().value.length)}h=V.needsContext.test(a)?0:i.length;while(h--){if(j=i[h],d.relative[k=j.type])break;if((l=d.find[k])&&(f=l(j.matches[0].replace(ab,bb),$.test(i[0].type)&&mb(b.parentNode)||b))){if(i.splice(h,1),a=f.length&&pb(i),!a)return G.apply(e,f),e;break}}}return g(a,m)(f,b,!n,e,$.test(a)&&mb(b.parentNode)||b),e}return c.sortStable=s.split("").sort(z).join("")===s,c.detectDuplicates=!!j,k(),c.sortDetached=gb(function(a){return 1&a.compareDocumentPosition(l.createElement("div"))}),gb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||hb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&gb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||hb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),gb(function(a){return null==a.getAttribute("disabled")})||hb(J,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),db}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=a.document,A=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,B=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:A.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:z,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=z.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return y.find(a);this.length=1,this[0]=d}return this.context=z,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};B.prototype=n.fn,y=n(z);var C=/^(?:parents|prev(?:Until|All))/,D={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!n(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function E(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return E(a,"nextSibling")},prev:function(a){return E(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(D[a]||(e=n.unique(e)),C.test(a)&&(e=e.reverse())),this.pushStack(e)}});var F=/\S+/g,G={};function H(a){var b=G[a]={};return n.each(a.match(F)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?G[a]||H(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&n.each(arguments,function(a,c){var d;while((d=n.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){if(a===!0?!--n.readyWait:!n.isReady){if(!z.body)return setTimeout(n.ready);n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(z,[n]),n.fn.trigger&&n(z).trigger("ready").off("ready"))}}});function J(){z.addEventListener?(z.removeEventListener("DOMContentLoaded",K,!1),a.removeEventListener("load",K,!1)):(z.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(z.addEventListener||"load"===event.type||"complete"===z.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===z.readyState)setTimeout(n.ready);else if(z.addEventListener)z.addEventListener("DOMContentLoaded",K,!1),a.addEventListener("load",K,!1);else{z.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&z.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!n.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}J(),n.ready()}}()}return I.promise(b)};var L="undefined",M;for(M in n(l))break;l.ownLast="0"!==M,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c=z.getElementsByTagName("body")[0];c&&(a=z.createElement("div"),a.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",b=z.createElement("div"),c.appendChild(a).appendChild(b),typeof b.style.zoom!==L&&(b.style.cssText="border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1",(l.inlineBlockNeedsLayout=3===b.offsetWidth)&&(c.style.zoom=1)),c.removeChild(a),a=b=null)}),function(){var a=z.createElement("div");if(null==l.deleteExpando){l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}}a=null}(),n.acceptData=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(n.acceptData(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f
}}function S(a,b,c){if(n.acceptData(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d]));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},W=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},X=/^(?:checkbox|radio)$/i;!function(){var a=z.createDocumentFragment(),b=z.createElement("div"),c=z.createElement("input");if(b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a>",l.leadingWhitespace=3===b.firstChild.nodeType,l.tbody=!b.getElementsByTagName("tbody").length,l.htmlSerialize=!!b.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==z.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,a.appendChild(c),l.appendChecked=c.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,a.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){l.noCloneEvent=!1}),b.cloneNode(!0).click()),null==l.deleteExpando){l.deleteExpando=!0;try{delete b.test}catch(d){l.deleteExpando=!1}}a=b=c=null}(),function(){var b,c,d=z.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),l[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var Y=/^(?:input|select|textarea)$/i,Z=/^key/,$=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,ab=/^([^.]*)(?:\.(.+)|)$/;function bb(){return!0}function cb(){return!1}function db(){try{return z.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof n===L||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(F)||[""],h=b.length;while(h--)f=ab.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(F)||[""],j=b.length;while(j--)if(h=ab.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,m,o=[d||z],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||z,3!==d.nodeType&&8!==d.nodeType&&!_.test(p+n.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[n.expando]?b:new n.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),k=n.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!n.isWindow(d)){for(i=k.delegateType||p,_.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||z)&&o.push(l.defaultView||l.parentWindow||a)}m=0;while((h=o[m++])&&!b.isPropagationStopped())b.type=m>1?i:k.bindType||p,f=(n._data(h,"events")||{})[b.type]&&n._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&n.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&n.acceptData(d)&&g&&d[p]&&!n.isWindow(d)){l=d[g],l&&(d[g]=null),n.event.triggered=p;try{d[p]()}catch(r){}n.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((n.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?n(c,this).index(i)>=0:n.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=$.test(e)?this.mouseHooks:Z.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||z),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||z,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==db()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===db()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=z.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===L&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&(a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault())?bb:cb):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:cb,isPropagationStopped:cb,isImmediatePropagationStopped:cb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=bb,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=bb,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submitBubbles||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?b.form:void 0;c&&!n._data(c,"submitBubbles")&&(n.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),n._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.changeBubbles||(n.event.special.change={setup:function(){return Y.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),n.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),n.event.simulate("change",this,a,!0)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;Y.test(b.nodeName)&&!n._data(b,"changeBubbles")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a,!0)}),n._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!Y.test(this.nodeName)}}),l.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=cb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return n().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=cb),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});function eb(a){var b=fb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var fb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gb=/ jQuery\d+="(?:null|\d+)"/g,hb=new RegExp("<(?:"+fb+")[\\s/>]","i"),ib=/^\s+/,jb=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,kb=/<([\w:]+)/,lb=/<tbody/i,mb=/<|&#?\w+;/,nb=/<(?:script|style|link)/i,ob=/checked\s*(?:[^=]|=\s*.checked.)/i,pb=/^$|\/(?:java|ecma)script/i,qb=/^true\/(.*)/,rb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,sb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},tb=eb(z),ub=tb.appendChild(z.createElement("div"));sb.optgroup=sb.option,sb.tbody=sb.tfoot=sb.colgroup=sb.caption=sb.thead,sb.th=sb.td;function vb(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==L?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==L?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,vb(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function wb(a){X.test(a.type)&&(a.defaultChecked=a.checked)}function xb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function yb(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function zb(a){var b=qb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ab(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}function Bb(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Cb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(yb(b).text=a.text,zb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&X.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}n.extend({clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!hb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ub.innerHTML=a.outerHTML,ub.removeChild(f=ub.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=vb(f),h=vb(a),g=0;null!=(e=h[g]);++g)d[g]&&Cb(e,d[g]);if(b)if(c)for(h=h||vb(a),d=d||vb(f),g=0;null!=(e=h[g]);g++)Bb(e,d[g]);else Bb(a,f);return d=vb(f,"script"),d.length>0&&Ab(d,!i&&vb(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k,m=a.length,o=eb(b),p=[],q=0;m>q;q++)if(f=a[q],f||0===f)if("object"===n.type(f))n.merge(p,f.nodeType?[f]:f);else if(mb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(kb.exec(f)||["",""])[1].toLowerCase(),k=sb[i]||sb._default,h.innerHTML=k[1]+f.replace(jb,"<$1></$2>")+k[2],e=k[0];while(e--)h=h.lastChild;if(!l.leadingWhitespace&&ib.test(f)&&p.push(b.createTextNode(ib.exec(f)[0])),!l.tbody){f="table"!==i||lb.test(f)?"<table>"!==k[1]||lb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)n.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}n.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),l.appendChecked||n.grep(vb(p,"input"),wb),q=0;while(f=p[q++])if((!d||-1===n.inArray(f,d))&&(g=n.contains(f.ownerDocument,f),h=vb(o.appendChild(f),"script"),g&&Ab(h),c)){e=0;while(f=h[e++])pb.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.deleteExpando,m=n.event.special;null!=(d=a[h]);h++)if((b||n.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k?delete d[i]:typeof d.removeAttribute!==L?d.removeAttribute(i):d[i]=null,c.push(f))}}}),n.fn.extend({text:function(a){return W(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||z).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=xb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=xb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(vb(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&Ab(vb(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(vb(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return W(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(gb,""):void 0;if(!("string"!=typeof a||nb.test(a)||!l.htmlSerialize&&hb.test(a)||!l.leadingWhitespace&&ib.test(a)||sb[(kb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(jb,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(vb(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(vb(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,k=this.length,m=this,o=k-1,p=a[0],q=n.isFunction(p);if(q||k>1&&"string"==typeof p&&!l.checkClone&&ob.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(k&&(i=n.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=n.map(vb(i,"script"),yb),f=g.length;k>j;j++)d=i,j!==o&&(d=n.clone(d,!0,!0),f&&n.merge(g,vb(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,n.map(g,zb),j=0;f>j;j++)d=g[j],pb.test(d.type||"")&&!n._data(d,"globalEval")&&n.contains(h,d)&&(d.src?n._evalUrl&&n._evalUrl(d.src):n.globalEval((d.text||d.textContent||d.innerHTML||"").replace(rb,"")));i=c=null}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],g=n(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Db,Eb={};function Fb(b,c){var d=n(c.createElement(b)).appendTo(c.body),e=a.getDefaultComputedStyle?a.getDefaultComputedStyle(d[0]).display:n.css(d[0],"display");return d.detach(),e}function Gb(a){var b=z,c=Eb[a];return c||(c=Fb(a,b),"none"!==c&&c||(Db=(Db||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Db[0].contentWindow||Db[0].contentDocument).document,b.write(),b.close(),c=Fb(a,b),Db.detach()),Eb[a]=c),c}!function(){var a,b,c=z.createElement("div"),d="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],a.style.cssText="float:left;opacity:.5",l.opacity=/^0.5/.test(a.style.opacity),l.cssFloat=!!a.style.cssFloat,c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===c.style.backgroundClip,a=c=null,l.shrinkWrapBlocks=function(){var a,c,e,f;if(null==b){if(a=z.getElementsByTagName("body")[0],!a)return;f="border:0;width:0;height:0;position:absolute;top:0;left:-9999px",c=z.createElement("div"),e=z.createElement("div"),a.appendChild(c).appendChild(e),b=!1,typeof e.style.zoom!==L&&(e.style.cssText=d+";width:1px;padding:1px;zoom:1",e.innerHTML="<div></div>",e.firstChild.style.width="5px",b=3!==e.offsetWidth),a.removeChild(c),a=c=e=null}return b}}();var Hb=/^margin/,Ib=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Jb,Kb,Lb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Jb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Kb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Jb(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),Ib.test(g)&&Hb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):z.documentElement.currentStyle&&(Jb=function(a){return a.currentStyle},Kb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Jb(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ib.test(g)&&!Lb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Mb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h=z.createElement("div"),i="border:0;width:0;height:0;position:absolute;top:0;left:-9999px",j="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";h.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",b=h.getElementsByTagName("a")[0],b.style.cssText="float:left;opacity:.5",l.opacity=/^0.5/.test(b.style.opacity),l.cssFloat=!!b.style.cssFloat,h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,b=h=null,n.extend(l,{reliableHiddenOffsets:function(){if(null!=c)return c;var a,b,d,e=z.createElement("div"),f=z.getElementsByTagName("body")[0];if(f)return e.setAttribute("className","t"),e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=z.createElement("div"),a.style.cssText=i,f.appendChild(a).appendChild(e),e.innerHTML="<table><tr><td></td><td>t</td></tr></table>",b=e.getElementsByTagName("td"),b[0].style.cssText="padding:0;margin:0;border:0;display:none",d=0===b[0].offsetHeight,b[0].style.display="",b[1].style.display="none",c=d&&0===b[0].offsetHeight,f.removeChild(a),e=f=null,c},boxSizing:function(){return null==d&&k(),d},boxSizingReliable:function(){return null==e&&k(),e},pixelPosition:function(){return null==f&&k(),f},reliableMarginRight:function(){var b,c,d,e;if(null==g&&a.getComputedStyle){if(b=z.getElementsByTagName("body")[0],!b)return;c=z.createElement("div"),d=z.createElement("div"),c.style.cssText=i,b.appendChild(c).appendChild(d),e=d.appendChild(z.createElement("div")),e.style.cssText=d.style.cssText=j,e.style.marginRight=e.style.width="0",d.style.width="1px",g=!parseFloat((a.getComputedStyle(e,null)||{}).marginRight),b.removeChild(c)}return g}});function k(){var b,c,h=z.getElementsByTagName("body")[0];h&&(b=z.createElement("div"),c=z.createElement("div"),b.style.cssText=i,h.appendChild(b).appendChild(c),c.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%",n.swap(h,null!=h.style.zoom?{zoom:1}:{},function(){d=4===c.offsetWidth}),e=!0,f=!1,g=!0,a.getComputedStyle&&(f="1%"!==(a.getComputedStyle(c,null)||{}).top,e="4px"===(a.getComputedStyle(c,null)||{width:"4px"}).width),h.removeChild(b),c=h=null)}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Nb=/alpha\([^)]*\)/i,Ob=/opacity\s*=\s*([^)]*)/,Pb=/^(none|table(?!-c[ea]).+)/,Qb=new RegExp("^("+T+")(.*)$","i"),Rb=new RegExp("^([+-])=("+T+")","i"),Sb={position:"absolute",visibility:"hidden",display:"block"},Tb={letterSpacing:0,fontWeight:400},Ub=["Webkit","O","Moz","ms"];function Vb(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Ub.length;while(e--)if(b=Ub[e]+c,b in a)return b;return d}function Wb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=n._data(d,"olddisplay",Gb(d.nodeName)))):f[g]||(e=V(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Xb(a,b,c){var d=Qb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Yb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Zb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Jb(a),g=l.boxSizing()&&"border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Kb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ib.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Yb(a,b,c||(g?"border":"content"),d,f)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Kb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=Vb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Rb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]="",i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Vb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Kb(a,b,d)),"normal"===f&&b in Tb&&(f=Tb[b]),""===c||c?(e=parseFloat(f),c===!0||n.isNumeric(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?0===a.offsetWidth&&Pb.test(n.css(a,"display"))?n.swap(a,Sb,function(){return Zb(a,b,d)}):Zb(a,b,d):void 0},set:function(a,c,d){var e=d&&Jb(a);return Xb(a,c,d?Yb(a,b,d,l.boxSizing()&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Ob.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Nb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Nb.test(f)?f.replace(Nb,e):f+" "+e)}}),n.cssHooks.marginRight=Mb(l.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},Kb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Hb.test(a)||(n.cssHooks[a+b].set=Xb)}),n.fn.extend({css:function(a,b){return W(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Jb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)
},a,b,arguments.length>1)},show:function(){return Wb(this,!0)},hide:function(){return Wb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function $b(a,b,c,d,e){return new $b.prototype.init(a,b,c,d,e)}n.Tween=$b,$b.prototype={constructor:$b,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=$b.propHooks[this.prop];return a&&a.get?a.get(this):$b.propHooks._default.get(this)},run:function(a){var b,c=$b.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):$b.propHooks._default.set(this),this}},$b.prototype.init.prototype=$b.prototype,$b.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},$b.propHooks.scrollTop=$b.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=$b.prototype.init,n.fx.step={};var _b,ac,bc=/^(?:toggle|show|hide)$/,cc=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),dc=/queueHooks$/,ec=[jc],fc={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=cc.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&cc.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function gc(){return setTimeout(function(){_b=void 0}),_b=n.now()}function hc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=U[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function ic(a,b,c){for(var d,e=(fc[b]||[]).concat(fc["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function jc(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&V(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k=Gb(a.nodeName),"none"===j&&(j=k),"inline"===j&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==k?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],bc.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}if(!n.isEmptyObject(o)){r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=ic(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function kc(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function lc(a,b,c){var d,e,f=0,g=ec.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=_b||gc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:_b||gc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(kc(k,j.opts.specialEasing);g>f;f++)if(d=ec[f].call(j,a,k,j.opts))return d;return n.map(k,ic,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(lc,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],fc[c]=fc[c]||[],fc[c].unshift(b)},prefilter:function(a,b){b?ec.unshift(a):ec.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=lc(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&dc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(hc(b,!0),a,d,e)}}),n.each({slideDown:hc("show"),slideUp:hc("hide"),slideToggle:hc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(_b=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),_b=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ac||(ac=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(ac),ac=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e=z.createElement("div");e.setAttribute("className","t"),e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=e.getElementsByTagName("a")[0],c=z.createElement("select"),d=c.appendChild(z.createElement("option")),b=e.getElementsByTagName("input")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==e.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=d.selected,l.enctype=!!z.createElement("form").enctype,c.disabled=!0,l.optDisabled=!d.disabled,b=z.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value,a=b=c=d=e=null}();var mc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(mc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.text(a)}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(l.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var nc,oc,pc=n.expr.attrHandle,qc=/^(?:checked|selected)$/i,rc=l.getSetAttribute,sc=l.input;n.fn.extend({attr:function(a,b){return W(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===L?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?oc:nc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(F);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?sc&&rc||!qc.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(rc?c:d)},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),oc={set:function(a,b,c){return b===!1?n.removeAttr(a,c):sc&&rc||!qc.test(c)?a.setAttribute(!rc&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=pc[b]||n.find.attr;pc[b]=sc&&rc||!qc.test(b)?function(a,b,d){var e,f;return d||(f=pc[b],pc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,pc[b]=f),e}:function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),sc&&rc||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):nc&&nc.set(a,b,c)}}),rc||(nc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},pc.id=pc.name=pc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:nc.set},n.attrHooks.contenteditable={set:function(a,b,c){nc.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var tc=/^(?:input|select|textarea|button|object)$/i,uc=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return W(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):tc.test(a.nodeName)||uc.test(a.nodeName)&&a.href?0:-1}}}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var vc=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(F)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(vc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(F)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(vc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(F)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===L||"boolean"===c)&&(this.className&&n._data(this,"__className__",this.className),this.className=this.className||a===!1?"":n._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(vc," ").indexOf(b)>=0)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var wc=n.now(),xc=/\?/,yc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(yc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var zc,Ac,Bc=/#.*$/,Cc=/([?&])_=[^&]*/,Dc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Ec=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Fc=/^(?:GET|HEAD)$/,Gc=/^\/\//,Hc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ic={},Jc={},Kc="*/".concat("*");try{Ac=location.href}catch(Lc){Ac=z.createElement("a"),Ac.href="",Ac=Ac.href}zc=Hc.exec(Ac.toLowerCase())||[];function Mc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(F)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nc(a,b,c,d){var e={},f=a===Jc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Oc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Pc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Qc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ac,type:"GET",isLocal:Ec.test(zc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Oc(Oc(a,n.ajaxSettings),b):Oc(n.ajaxSettings,a)},ajaxPrefilter:Mc(Ic),ajaxTransport:Mc(Jc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Dc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||Ac)+"").replace(Bc,"").replace(Gc,zc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(F)||[""],null==k.crossDomain&&(c=Hc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===zc[1]&&c[2]===zc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(zc[3]||("http:"===zc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),Nc(Ic,k,b,v),2===t)return v;h=k.global,h&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Fc.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(xc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Cc.test(e)?e.replace(Cc,"$1_="+wc++):e+(xc.test(e)?"&":"?")+"_="+wc++)),k.ifModified&&(n.lastModified[e]&&v.setRequestHeader("If-Modified-Since",n.lastModified[e]),n.etag[e]&&v.setRequestHeader("If-None-Match",n.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Kc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Nc(Jc,k,b,v)){v.readyState=1,h&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Pc(k,v,c)),u=Qc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(n.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!l.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||n.css(a,"display"))},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var Rc=/%20/g,Sc=/\[\]$/,Tc=/\r?\n/g,Uc=/^(?:submit|button|image|reset|file)$/i,Vc=/^(?:input|select|textarea|keygen)/i;function Wc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Sc.test(a)?d(a,e):Wc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Wc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Wc(c,a[c],b,e);return d.join("&").replace(Rc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Vc.test(this.nodeName)&&!Uc.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Tc,"\r\n")}}):{name:b.name,value:c.replace(Tc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&$c()||_c()}:$c;var Xc=0,Yc={},Zc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Yc)Yc[a](void 0,!0)}),l.cors=!!Zc&&"withCredentials"in Zc,Zc=l.ajax=!!Zc,Zc&&n.ajaxTransport(function(a){if(!a.crossDomain||l.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Xc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Yc[g],b=void 0,f.onreadystatechange=n.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Yc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function $c(){try{return new a.XMLHttpRequest}catch(b){}}function _c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=z.head||n("head")[0]||z.documentElement;return{send:function(d,e){b=z.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var ad=[],bd=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=ad.pop()||n.expando+"_"+wc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(bd.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&bd.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(bd,"$1"+e):b.jsonp!==!1&&(b.url+=(xc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,ad.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||z;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var cd=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&cd)return cd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=a.slice(h,a.length),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&n.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var dd=a.document.documentElement;function ed(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?(typeof e.getBoundingClientRect!==L&&(d=e.getBoundingClientRect()),c=ed(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||dd;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||dd})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return W(this,function(a,d,e){var f=ed(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Mb(l.pixelPosition,function(a,c){return c?(c=Kb(a,b),Ib.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return W(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var fd=a.jQuery,gd=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=gd),b&&a.jQuery===n&&(a.jQuery=fd),n},typeof b===L&&(a.jQuery=a.$=n),n});

//     Underscore.js 1.6.0
//     http://underscorejs.org
//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,h=e.reduce,v=e.reduceRight,g=e.filter,d=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,w=Object.keys,_=i.bind,j=function(n){return n instanceof j?n:this instanceof j?void(this._wrapped=n):new j(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=j),exports._=j):n._=j,j.VERSION="1.6.0";var A=j.each=j.forEach=function(n,t,e){if(null==n)return n;if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a=j.keys(n),u=0,i=a.length;i>u;u++)if(t.call(e,n[a[u]],a[u],n)===r)return;return n};j.map=j.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e.push(t.call(r,n,u,i))}),e)};var O="Reduce of empty array with no initial value";j.reduce=j.foldl=j.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduce===h)return e&&(t=j.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(O);return r},j.reduceRight=j.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduceRight===v)return e&&(t=j.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=j.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(O);return r},j.find=j.detect=function(n,t,r){var e;return k(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},j.filter=j.select=function(n,t,r){var e=[];return null==n?e:g&&n.filter===g?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&e.push(n)}),e)},j.reject=function(n,t,r){return j.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},j.every=j.all=function(n,t,e){t||(t=j.identity);var u=!0;return null==n?u:d&&n.every===d?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var k=j.some=j.any=function(n,t,e){t||(t=j.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};j.contains=j.include=function(n,t){return null==n?!1:y&&n.indexOf===y?n.indexOf(t)!=-1:k(n,function(n){return n===t})},j.invoke=function(n,t){var r=o.call(arguments,2),e=j.isFunction(t);return j.map(n,function(n){return(e?t:n[t]).apply(n,r)})},j.pluck=function(n,t){return j.map(n,j.property(t))},j.where=function(n,t){return j.filter(n,j.matches(t))},j.findWhere=function(n,t){return j.find(n,j.matches(t))},j.max=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.max.apply(Math,n);var e=-1/0,u=-1/0;return A(n,function(n,i,a){var o=t?t.call(r,n,i,a):n;o>u&&(e=n,u=o)}),e},j.min=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.min.apply(Math,n);var e=1/0,u=1/0;return A(n,function(n,i,a){var o=t?t.call(r,n,i,a):n;u>o&&(e=n,u=o)}),e},j.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=j.random(r++),e[r-1]=e[t],e[t]=n}),e},j.sample=function(n,t,r){return null==t||r?(n.length!==+n.length&&(n=j.values(n)),n[j.random(n.length-1)]):j.shuffle(n).slice(0,Math.max(0,t))};var E=function(n){return null==n?j.identity:j.isFunction(n)?n:j.property(n)};j.sortBy=function(n,t,r){return t=E(t),j.pluck(j.map(n,function(n,e,u){return{value:n,index:e,criteria:t.call(r,n,e,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=E(r),A(t,function(i,a){var o=r.call(e,i,a,t);n(u,o,i)}),u}};j.groupBy=F(function(n,t,r){j.has(n,t)?n[t].push(r):n[t]=[r]}),j.indexBy=F(function(n,t,r){n[t]=r}),j.countBy=F(function(n,t){j.has(n,t)?n[t]++:n[t]=1}),j.sortedIndex=function(n,t,r,e){r=E(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;r.call(e,n[o])<u?i=o+1:a=o}return i},j.toArray=function(n){return n?j.isArray(n)?o.call(n):n.length===+n.length?j.map(n,j.identity):j.values(n):[]},j.size=function(n){return null==n?0:n.length===+n.length?n.length:j.keys(n).length},j.first=j.head=j.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:0>t?[]:o.call(n,0,t)},j.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},j.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},j.rest=j.tail=j.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},j.compact=function(n){return j.filter(n,j.identity)};var M=function(n,t,r){return t&&j.every(n,j.isArray)?c.apply(r,n):(A(n,function(n){j.isArray(n)||j.isArguments(n)?t?a.apply(r,n):M(n,t,r):r.push(n)}),r)};j.flatten=function(n,t){return M(n,t,[])},j.without=function(n){return j.difference(n,o.call(arguments,1))},j.partition=function(n,t){var r=[],e=[];return A(n,function(n){(t(n)?r:e).push(n)}),[r,e]},j.uniq=j.unique=function(n,t,r,e){j.isFunction(t)&&(e=r,r=t,t=!1);var u=r?j.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:j.contains(a,r))||(a.push(r),i.push(n[e]))}),i},j.union=function(){return j.uniq(j.flatten(arguments,!0))},j.intersection=function(n){var t=o.call(arguments,1);return j.filter(j.uniq(n),function(n){return j.every(t,function(t){return j.contains(t,n)})})},j.difference=function(n){var t=c.apply(e,o.call(arguments,1));return j.filter(n,function(n){return!j.contains(t,n)})},j.zip=function(){for(var n=j.max(j.pluck(arguments,"length").concat(0)),t=new Array(n),r=0;n>r;r++)t[r]=j.pluck(arguments,""+r);return t},j.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},j.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=j.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},j.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},j.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=new Array(e);e>u;)i[u++]=n,n+=r;return i};var R=function(){};j.bind=function(n,t){var r,e;if(_&&n.bind===_)return _.apply(n,o.call(arguments,1));if(!j.isFunction(n))throw new TypeError;return r=o.call(arguments,2),e=function(){if(!(this instanceof e))return n.apply(t,r.concat(o.call(arguments)));R.prototype=n.prototype;var u=new R;R.prototype=null;var i=n.apply(u,r.concat(o.call(arguments)));return Object(i)===i?i:u}},j.partial=function(n){var t=o.call(arguments,1);return function(){for(var r=0,e=t.slice(),u=0,i=e.length;i>u;u++)e[u]===j&&(e[u]=arguments[r++]);for(;r<arguments.length;)e.push(arguments[r++]);return n.apply(this,e)}},j.bindAll=function(n){var t=o.call(arguments,1);if(0===t.length)throw new Error("bindAll must be passed function names");return A(t,function(t){n[t]=j.bind(n[t],n)}),n},j.memoize=function(n,t){var r={};return t||(t=j.identity),function(){var e=t.apply(this,arguments);return j.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},j.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},j.defer=function(n){return j.delay.apply(j,[n,1].concat(o.call(arguments,1)))},j.throttle=function(n,t,r){var e,u,i,a=null,o=0;r||(r={});var c=function(){o=r.leading===!1?0:j.now(),a=null,i=n.apply(e,u),e=u=null};return function(){var l=j.now();o||r.leading!==!1||(o=l);var f=t-(l-o);return e=this,u=arguments,0>=f?(clearTimeout(a),a=null,o=l,i=n.apply(e,u),e=u=null):a||r.trailing===!1||(a=setTimeout(c,f)),i}},j.debounce=function(n,t,r){var e,u,i,a,o,c=function(){var l=j.now()-a;t>l?e=setTimeout(c,t-l):(e=null,r||(o=n.apply(i,u),i=u=null))};return function(){i=this,u=arguments,a=j.now();var l=r&&!e;return e||(e=setTimeout(c,t)),l&&(o=n.apply(i,u),i=u=null),o}},j.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},j.wrap=function(n,t){return j.partial(t,n)},j.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},j.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},j.keys=function(n){if(!j.isObject(n))return[];if(w)return w(n);var t=[];for(var r in n)j.has(n,r)&&t.push(r);return t},j.values=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},j.pairs=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},j.invert=function(n){for(var t={},r=j.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},j.functions=j.methods=function(n){var t=[];for(var r in n)j.isFunction(n[r])&&t.push(r);return t.sort()},j.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},j.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},j.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)j.contains(r,u)||(t[u]=n[u]);return t},j.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]===void 0&&(n[r]=t[r])}),n},j.clone=function(n){return j.isObject(n)?j.isArray(n)?n.slice():j.extend({},n):n},j.tap=function(n,t){return t(n),n};var S=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof j&&(n=n._wrapped),t instanceof j&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==String(t);case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;var a=n.constructor,o=t.constructor;if(a!==o&&!(j.isFunction(a)&&a instanceof a&&j.isFunction(o)&&o instanceof o)&&"constructor"in n&&"constructor"in t)return!1;r.push(n),e.push(t);var c=0,f=!0;if("[object Array]"==u){if(c=n.length,f=c==t.length)for(;c--&&(f=S(n[c],t[c],r,e)););}else{for(var s in n)if(j.has(n,s)&&(c++,!(f=j.has(t,s)&&S(n[s],t[s],r,e))))break;if(f){for(s in t)if(j.has(t,s)&&!c--)break;f=!c}}return r.pop(),e.pop(),f};j.isEqual=function(n,t){return S(n,t,[],[])},j.isEmpty=function(n){if(null==n)return!0;if(j.isArray(n)||j.isString(n))return 0===n.length;for(var t in n)if(j.has(n,t))return!1;return!0},j.isElement=function(n){return!(!n||1!==n.nodeType)},j.isArray=x||function(n){return"[object Array]"==l.call(n)},j.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){j["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),j.isArguments(arguments)||(j.isArguments=function(n){return!(!n||!j.has(n,"callee"))}),"function"!=typeof/./&&(j.isFunction=function(n){return"function"==typeof n}),j.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},j.isNaN=function(n){return j.isNumber(n)&&n!=+n},j.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},j.isNull=function(n){return null===n},j.isUndefined=function(n){return n===void 0},j.has=function(n,t){return f.call(n,t)},j.noConflict=function(){return n._=t,this},j.identity=function(n){return n},j.constant=function(n){return function(){return n}},j.property=function(n){return function(t){return t[n]}},j.matches=function(n){return function(t){if(t===n)return!0;for(var r in n)if(n[r]!==t[r])return!1;return!0}},j.times=function(n,t,r){for(var e=Array(Math.max(0,n)),u=0;n>u;u++)e[u]=t.call(r,u);return e},j.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},j.now=Date.now||function(){return(new Date).getTime()};var T={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};T.unescape=j.invert(T.escape);var I={escape:new RegExp("["+j.keys(T.escape).join("")+"]","g"),unescape:new RegExp("("+j.keys(T.unescape).join("|")+")","g")};j.each(["escape","unescape"],function(n){j[n]=function(t){return null==t?"":(""+t).replace(I[n],function(t){return T[n][t]})}}),j.result=function(n,t){if(null==n)return void 0;var r=n[t];return j.isFunction(r)?r.call(n):r},j.mixin=function(n){A(j.functions(n),function(t){var r=j[t]=n[t];j.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),z.call(this,r.apply(j,n))}})};var N=0;j.uniqueId=function(n){var t=++N+"";return n?n+t:t},j.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var q=/(.)^/,B={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\t|\u2028|\u2029/g;j.template=function(n,t,r){var e;r=j.defaults({},r,j.templateSettings);var u=new RegExp([(r.escape||q).source,(r.interpolate||q).source,(r.evaluate||q).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(D,function(n){return"\\"+B[n]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=new Function(r.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return e(t,j);var c=function(n){return e.call(this,n,j)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c},j.chain=function(n){return j(n).chain()};var z=function(n){return this._chain?j(n).chain():n};j.mixin(j),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];j.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],z.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];j.prototype[n]=function(){return z.call(this,t.apply(this._wrapped,arguments))}}),j.extend(j.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}}),"function"==typeof define&&define.amd&&define("underscore",[],function(){return j})}).call(this);
//# sourceMappingURL=underscore-min.map
/*!
 * Bootstrap v3.1.0 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(jQuery),+function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function c(){f.trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one(a.support.transition.end,c).emulateTransitionEnd(150):c())};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),"string"==typeof b&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.isLoading=!1};b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",f.resetText||d.data("resetText",d[e]()),d[e](f[b]||this.options[b]),setTimeout(a.proxy(function(){"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},b.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}a&&this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof c&&c;e||d.data("bs.button",e=new b(this,f)),"toggle"==c?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault()})}(jQuery),+function(a){"use strict";var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){return this.sliding?void 0:this.slide("next")},b.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},b.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}if(e.hasClass("active"))return this.sliding=!1;var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});return this.$element.trigger(j),j.isDefaultPrevented()?void 0:(this.sliding=!0,f&&this.pause(),this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid.bs.carousel",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")})),a.support.transition&&this.$element.hasClass("slide")?(e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid.bs.carousel")},0)}).emulateTransitionEnd(1e3*d.css("transition-duration").slice(0,-1))):(d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid.bs.carousel")),f&&this.cycle(),this)};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c),g="string"==typeof c?c:f.slide;e||d.data("bs.carousel",e=new b(this,f)),"number"==typeof c?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c,d=a(this),e=a(d.attr("data-target")||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),d.data()),g=d.attr("data-slide-to");g&&(f.interval=!1),e.carousel(f),(g=d.attr("data-slide-to"))&&e.data("bs.carousel").to(g),b.preventDefault()}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);b.carousel(b.data())})})}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b=a.Event("show.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("collapse in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])}}},b.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?void this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350):d.call(this)}}},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c);!e&&f.toggle&&"show"==c&&(c=!c),e||d.data("bs.collapse",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c,d=a(this),e=d.attr("data-target")||b.preventDefault()||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":d.data(),i=d.attr("data-parent"),j=i&&a(i);g&&g.transitioning||(j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(d).addClass("collapsed"),d[f.hasClass("in")?"addClass":"removeClass"]("collapsed")),f.collapse(h)})}(jQuery),+function(a){"use strict";function b(b){a(d).remove(),a(e).each(function(){var d=c(a(this)),e={relatedTarget:this};d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown",e)),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown",e))})}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}var d=".dropdown-backdrop",e="[data-toggle=dropdown]",f=function(b){a(b).on("click.bs.dropdown",this.toggle)};f.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;f.toggleClass("open").trigger("shown.bs.dropdown",h),e.focus()}return!1}},f.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var f=c(d),g=f.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&f.find(e).focus(),d.click();var h=" li:not(.divider):visible a",i=f.find("[role=menu]"+h+", [role=listbox]"+h);if(i.length){var j=i.index(i.filter(":focus"));38==b.keyCode&&j>0&&j--,40==b.keyCode&&j<i.length-1&&j++,~j||(j=0),i.eq(j).focus()}}}};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new f(this)),"string"==typeof b&&d[b].call(c)})},a.fn.dropdown.Constructor=f,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",e,f.prototype.toggle).on("keydown.bs.dropdown.data-api",e+", [role=menu], [role=listbox]",f.prototype.keydown)}(jQuery),+function(a){"use strict";var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show().scrollTop(0),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)}))},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=a.support.transition&&c;if(this.$backdrop=a('<div class="modal-backdrop '+c+'" />').appendTo(document.body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),d&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),"object"==typeof c&&c);f||e.data("bs.modal",f=new b(this,g)),"string"==typeof c?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());c.is("a")&&b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})}),a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(jQuery),+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show()},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(b),b.isDefaultPrevented())return;var c=this,d=this.tip();this.setContent(),this.options.animation&&d.addClass("fade");var e="function"==typeof this.options.placement?this.options.placement.call(this,d[0],this.$element[0]):this.options.placement,f=/\s?auto?\s?/i,g=f.test(e);g&&(e=e.replace(f,"")||"top"),d.detach().css({top:0,left:0,display:"block"}).addClass(e),this.options.container?d.appendTo(this.options.container):d.insertAfter(this.$element);var h=this.getPosition(),i=d[0].offsetWidth,j=d[0].offsetHeight;if(g){var k=this.$element.parent(),l=e,m=document.documentElement.scrollTop||document.body.scrollTop,n="body"==this.options.container?window.innerWidth:k.outerWidth(),o="body"==this.options.container?window.innerHeight:k.outerHeight(),p="body"==this.options.container?0:k.offset().left;e="bottom"==e&&h.top+h.height+j-m>o?"top":"top"==e&&h.top-m-j<0?"bottom":"right"==e&&h.right+i>n?"left":"left"==e&&h.left-i<p?"right":e,d.removeClass(l).addClass(e)}var q=this.getCalculatedOffset(e,h,i,j);this.applyPlacement(q,e),this.hoverState=null;var r=function(){c.$element.trigger("shown.bs."+c.type)};a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,r).emulateTransitionEnd(150):r()}},b.prototype.applyPlacement=function(b,c){var d,e=this.tip(),f=e[0].offsetWidth,g=e[0].offsetHeight,h=parseInt(e.css("margin-top"),10),i=parseInt(e.css("margin-left"),10);isNaN(h)&&(h=0),isNaN(i)&&(i=0),b.top=b.top+h,b.left=b.left+i,a.offset.setOffset(e[0],a.extend({using:function(a){e.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),e.addClass("in");var j=e[0].offsetWidth,k=e[0].offsetHeight;if("top"==c&&k!=g&&(d=!0,b.top=b.top+g-k),/bottom|top/.test(c)){var l=0;b.left<0&&(l=-2*b.left,b.left=0,e.offset(b),j=e[0].offsetWidth,k=e[0].offsetHeight),this.replaceArrow(l-f+j,j,"left")}else this.replaceArrow(k-g,k,"top");d&&e.offset(b)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach(),c.$element.trigger("hidden.bs."+c.type)}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,b).emulateTransitionEnd(150):b(),this.hoverState=null,this)},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},"function"==typeof b.getBoundingClientRect?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.tooltip",e=new b(this,f)),"string"==typeof c&&e[c]())})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(jQuery),+function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.popover",e=new b(this,f)),"string"==typeof c&&e[c]())})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(jQuery),+function(a){"use strict";function b(c,d){var e,f=a.proxy(this.process,this);this.$element=a(a(c).is("body")?window:c),this.$body=a("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()}b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?"offset":"position";this.offsets=a([]),this.targets=a([]);{var c=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})}},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,d=c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(b>=d)return g!=(a=f.last()[0])&&this.activate(a);if(g&&b<=e[0])return g!=(a=f[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(jQuery),+function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},b.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),f.removeClass("in")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),"string"==typeof c&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(jQuery),+function(a){"use strict";var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(b.RESET).addClass("affix");var a=this.$window.scrollTop(),c=this.$element.offset();return this.pinnedOffset=c.top-a},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(this.$element.is(":visible")){var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"top"==this.affixed&&(e.top+=d),"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top(this.$element)),"function"==typeof h&&(h=f.bottom(this.$element));var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=c-h?"bottom":null!=g&&g>=d?"top":!1;if(this.affixed!==i){this.unpin&&this.$element.css("top","");var j="affix"+(i?"-"+i:""),k=a.Event(j+".bs.affix");this.$element.trigger(k),k.isDefaultPrevented()||(this.affixed=i,this.unpin="bottom"==i?this.getPinnedOffset():null,this.$element.removeClass(b.RESET).addClass(j).trigger(a.Event(j.replace("affix","affixed"))),"bottom"==i&&this.$element.offset({top:c-h-this.$element.height()}))}}};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof c&&c;e||d.data("bs.affix",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(jQuery);
/*!
 * Bootstrap v3.1.1 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);var e=this.options.trigger.split(" ");for(var f=e.length;f--;){var g=e[f];if(g=="click")this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if(g!="manual"){var h=g=="hover"?"mouseenter":"focusin",i=g=="hover"?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&typeof b.delay=="number"&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);clearTimeout(c.timeout),c.hoverState="in";if(!c.options.delay||!c.options.delay.show)return c.show();c.timeout=setTimeout(function(){c.hoverState=="in"&&c.show()},c.options.delay.show)},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);clearTimeout(c.timeout),c.hoverState="out";if(!c.options.delay||!c.options.delay.hide)return c.hide();c.timeout=setTimeout(function(){c.hoverState=="out"&&c.hide()},c.options.delay.hide)},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);if(b.isDefaultPrevented())return;var c=this,d=this.tip();this.setContent(),this.options.animation&&d.addClass("fade");var e=typeof this.options.placement=="function"?this.options.placement.call(this,d[0],this.$element[0]):this.options.placement,f=/\s?auto?\s?/i,g=f.test(e);g&&(e=e.replace(f,"")||"top"),d.detach().css({top:0,left:0,display:"block"}).addClass(e),this.options.container?d.appendTo(this.options.container):d.insertAfter(this.$element);var h=this.getPosition(),i=d[0].offsetWidth,j=d[0].offsetHeight;if(g){var k=this.$element.parent(),l=e,m=document.documentElement.scrollTop||document.body.scrollTop,n=this.options.container=="body"?window.innerWidth:k.outerWidth(),o=this.options.container=="body"?window.innerHeight:k.outerHeight(),p=this.options.container=="body"?0:k.offset().left;e=e=="bottom"&&h.top+h.height+j-m>o?"top":e=="top"&&h.top-m-j<0?"bottom":e=="right"&&h.right+i>n?"left":e=="left"&&h.left-i<p?"right":e,d.removeClass(l).addClass(e)}var q=this.getCalculatedOffset(e,h,i,j);this.applyPlacement(q,e),this.hoverState=null;var r=function(){c.$element.trigger("shown.bs."+c.type)};a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,r).emulateTransitionEnd(150):r()}},b.prototype.applyPlacement=function(b,c){var d,e=this.tip(),f=e[0].offsetWidth,g=e[0].offsetHeight,h=parseInt(e.css("margin-top"),10),i=parseInt(e.css("margin-left"),10);isNaN(h)&&(h=0),isNaN(i)&&(i=0),b.top=b.top+h,b.left=b.left+i,a.offset.setOffset(e[0],a.extend({using:function(a){e.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),e.addClass("in");var j=e[0].offsetWidth,k=e[0].offsetHeight;c=="top"&&k!=g&&(d=!0,b.top=b.top+g-k);if(/bottom|top/.test(c)){var l=0;b.left<0&&(l=b.left*-2,b.left=0,e.offset(b),j=e[0].offsetWidth,k=e[0].offsetHeight),this.replaceArrow(l-f+j,j,"left")}else this.replaceArrow(k-g,k,"top");d&&e.offset(b)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function e(){b.hoverState!="in"&&c.detach(),b.$element.trigger("hidden.bs."+b.type)}var b=this,c=this.tip(),d=a.Event("hide.bs."+this.type);this.$element.trigger(d);if(d.isDefaultPrevented())return;return c.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?c.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),this.hoverState=null,this},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||typeof a.attr("data-original-title")!="string")&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},typeof b.getBoundingClientRect=="function"?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return a=="bottom"?{top:b.top+b.height,left:b.left+b.width/2-c/2}:a=="top"?{top:b.top-d,left:b.left+b.width/2-c/2}:a=="left"?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||(typeof c.title=="function"?c.title.call(b[0]):c.title),a},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f=typeof c=="object"&&c;if(!e&&c=="destroy")return;e||d.data("bs.tooltip",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(jQuery)
/*!
 * FooTable - Awesome Responsive Tables
 * Version : 2.0.1.4
 * http://fooplugins.com/plugins/footable-jquery/
 *
 * Requires jQuery - http://jquery.com/
 *
 * Copyright 2014 Steven Usher & Brad Vincent
 * Released under the MIT license
 * You are free to use FooTable in commercial projects as long as this copyright header is left intact.
 *
 * Date: 16 Feb 2014
 */
(function ($, w, undefined) {
    w.footable = {
        options: {
            delay: 100, // The number of millseconds to wait before triggering the react event
            breakpoints: { // The different screen resolution breakpoints
                phone: 480,
                tablet: 1024
            },
            parsers: {  // The default parser to parse the value out of a cell (values are used in building up row detail)
                alpha: function (cell) {
                    return $(cell).data('value') || $.trim($(cell).text());
                },
                numeric: function (cell) {
                    var val = $(cell).data('value') || $(cell).text().replace(/[^0-9.\-]/g, '');
                    val = parseFloat(val);
                    if (isNaN(val)) val = 0;
                    return val;
                }
            },
            addRowToggle: true,
            calculateWidthOverride: null,
            toggleSelector: ' > tbody > tr:not(.footable-row-detail)', //the selector to show/hide the detail row
            columnDataSelector: '> thead > tr:last-child > th, > thead > tr:last-child > td', //the selector used to find the column data in the thead
            detailSeparator: ':', //the separator character used when building up the detail row
            toggleHTMLElement: '<span />', // override this if you want to insert a click target rather than use a background image.
            createGroupedDetail: function (data) {
                var groups = { '_none': { 'name': null, 'data': [] } };
                for (var i = 0; i < data.length; i++) {
                    var groupid = data[i].group;
                    if (groupid !== null) {
                        if (!(groupid in groups))
                            groups[groupid] = { 'name': data[i].groupName || data[i].group, 'data': [] };

                        groups[groupid].data.push(data[i]);
                    } else {
                        groups._none.data.push(data[i]);
                    }
                }
                return groups;
            },
            createDetail: function (element, data, createGroupedDetail, separatorChar, classes) {
                /// <summary>This function is used by FooTable to generate the detail view seen when expanding a collapsed row.</summary>
                /// <param name="element">This is the div that contains all the detail row information, anything could be added to it.</param>
                /// <param name="data">
                ///  This is an array of objects containing the cell information for the current row.
                ///  These objects look like the below:
                ///    obj = {
                ///      'name': String, // The name of the column
                ///      'value': Object, // The value parsed from the cell using the parsers. This could be a string, a number or whatever the parser outputs.
                ///      'display': String, // This is the actual HTML from the cell, so if you have images etc you want moved this is the one to use and is the default value used.
                ///      'group': String, // This is the identifier used in the data-group attribute of the column.
                ///      'groupName': String // This is the actual name of the group the column belongs to.
                ///    }
                /// </param>
                /// <param name="createGroupedDetail">The grouping function to group the data</param>
                /// <param name="separatorChar">The separator charactor used</param>
                /// <param name="classes">The array of class names used to build up the detail row</param>

                var groups = createGroupedDetail(data);
                for (var group in groups) {
                    if (groups[group].data.length === 0) continue;
                    if (group !== '_none') element.append('<div class="' + classes.detailInnerGroup + '">' + groups[group].name + '</div>');

                    for (var j = 0; j < groups[group].data.length; j++) {
                        var separator = (groups[group].data[j].name) ? separatorChar : '';
                        element.append('<div class="' + classes.detailInnerRow + '"><div class="' + classes.detailInnerName + '">' + groups[group].data[j].name + separator + '</div><div class="' + classes.detailInnerValue + '">' + groups[group].data[j].display + '</div></div>');
                    }
                }
            },
            classes: {
                main: 'footable',
                loading: 'footable-loading',
                loaded: 'footable-loaded',
                toggle: 'footable-toggle',
                disabled: 'footable-disabled',
                detail: 'footable-row-detail',
                detailCell: 'footable-row-detail-cell',
                detailInner: 'footable-row-detail-inner',
                detailInnerRow: 'footable-row-detail-row',
                detailInnerGroup: 'footable-row-detail-group',
                detailInnerName: 'footable-row-detail-name',
                detailInnerValue: 'footable-row-detail-value',
                detailShow: 'footable-detail-show'
            },
            triggers: {
                initialize: 'footable_initialize',                      //trigger this event to force FooTable to reinitialize
                resize: 'footable_resize',                              //trigger this event to force FooTable to resize
                redraw: 'footable_redraw',								//trigger this event to force FooTable to redraw
                toggleRow: 'footable_toggle_row',                       //trigger this event to force FooTable to toggle a row
                expandFirstRow: 'footable_expand_first_row',            //trigger this event to force FooTable to expand the first row
                expandAll: 'footable_expand_all',                       //trigger this event to force FooTable to expand all rows
                collapseAll: 'footable_collapse_all'                    //trigger this event to force FooTable to collapse all rows
            },
            events: {
                alreadyInitialized: 'footable_already_initialized',     //fires when the FooTable has already been initialized
                initializing: 'footable_initializing',                  //fires before FooTable starts initializing
                initialized: 'footable_initialized',                    //fires after FooTable has finished initializing
                resizing: 'footable_resizing',                          //fires before FooTable resizes
                resized: 'footable_resized',                            //fires after FooTable has resized
                redrawn: 'footable_redrawn',                            //fires after FooTable has redrawn
                breakpoint: 'footable_breakpoint',                      //fires inside the resize function, when a breakpoint is hit
                columnData: 'footable_column_data',                     //fires when setting up column data. Plugins should use this event to capture their own info about a column
                rowDetailUpdating: 'footable_row_detail_updating',      //fires before a detail row is updated
                rowDetailUpdated: 'footable_row_detail_updated',        //fires when a detail row is being updated
                rowCollapsed: 'footable_row_collapsed',                 //fires when a row is collapsed
                rowExpanded: 'footable_row_expanded',                   //fires when a row is expanded
                rowRemoved: 'footable_row_removed',                     //fires when a row is removed
                reset: 'footable_reset'                                 //fires when FooTable is reset
            },
            debug: false, // Whether or not to log information to the console.
            log: null
        },

        version: {
            major: 0, minor: 5,
            toString: function () {
                return w.footable.version.major + '.' + w.footable.version.minor;
            },
            parse: function (str) {
                version = /(\d+)\.?(\d+)?\.?(\d+)?/.exec(str);
                return {
                    major: parseInt(version[1], 10) || 0,
                    minor: parseInt(version[2], 10) || 0,
                    patch: parseInt(version[3], 10) || 0
                };
            }
        },

        plugins: {
            _validate: function (plugin) {
                ///<summary>Simple validation of the <paramref name="plugin"/> to make sure any members called by FooTable actually exist.</summary>
                ///<param name="plugin">The object defining the plugin, this should implement a string property called "name" and a function called "init".</param>

                if (!$.isFunction(plugin)) {
                    if (w.footable.options.debug === true) console.error('Validation failed, expected type "function", received type "{0}".', typeof plugin);
                    return false;
                }
                var p = new plugin();
                if (typeof p['name'] !== 'string') {
                    if (w.footable.options.debug === true) console.error('Validation failed, plugin does not implement a string property called "name".', p);
                    return false;
                }
                if (!$.isFunction(p['init'])) {
                    if (w.footable.options.debug === true) console.error('Validation failed, plugin "' + p['name'] + '" does not implement a function called "init".', p);
                    return false;
                }
                if (w.footable.options.debug === true) console.log('Validation succeeded for plugin "' + p['name'] + '".', p);
                return true;
            },
            registered: [], // An array containing all registered plugins.
            register: function (plugin, options) {
                ///<summary>Registers a <paramref name="plugin"/> and its default <paramref name="options"/> with FooTable.</summary>
                ///<param name="plugin">The plugin that should implement a string property called "name" and a function called "init".</param>
                ///<param name="options">The default options to merge with the FooTable's base options.</param>

                if (w.footable.plugins._validate(plugin)) {
                    w.footable.plugins.registered.push(plugin);
                    if (typeof options === 'object') $.extend(true, w.footable.options, options);
                }
            },
            load: function (instance) {
                var loaded = [], registered, i;
                for (i = 0; i < w.footable.plugins.registered.length; i++) {
                    try {
                        registered = w.footable.plugins.registered[i];
                        loaded.push(new registered(instance));
                    } catch (err) {
                        if (w.footable.options.debug === true) console.error(err);
                    }
                }
                return loaded;
            },
            init: function (instance) {
                ///<summary>Loops through all registered plugins and calls the "init" method supplying the current <paramref name="instance"/> of the FooTable as the first parameter.</summary>
                ///<param name="instance">The current instance of the FooTable that the plugin is being initialized for.</param>

                for (var i = 0; i < instance.plugins.length; i++) {
                    try {
                        instance.plugins[i]['init'](instance);
                    } catch (err) {
                        if (w.footable.options.debug === true) console.error(err);
                    }
                }
            }
        }
    };

    var instanceCount = 0;

    $.fn.footable = function (options) {
        ///<summary>The main constructor call to initialize the plugin using the supplied <paramref name="options"/>.</summary>
        ///<param name="options">
        ///<para>A JSON object containing user defined options for the plugin to use. Any options not supplied will have a default value assigned.</para>
        ///<para>Check the documentation or the default options object above for more information on available options.</para>
        ///</param>

        options = options || {};
        var o = $.extend(true, {}, w.footable.options, options); //merge user and default options
        return this.each(function () {
            instanceCount++;
            var footable = new Footable(this, o, instanceCount);
            $(this).data('footable', footable);
        });
    };

    //helper for using timeouts
    function Timer() {
        ///<summary>Simple timer object created around a timeout.</summary>
        var t = this;
        t.id = null;
        t.busy = false;
        t.start = function (code, milliseconds) {
            ///<summary>Starts the timer and waits the specified amount of <paramref name="milliseconds"/> before executing the supplied <paramref name="code"/>.</summary>
            ///<param name="code">The code to execute once the timer runs out.</param>
            ///<param name="milliseconds">The time in milliseconds to wait before executing the supplied <paramref name="code"/>.</param>

            if (t.busy) {
                return;
            }
            t.stop();
            t.id = setTimeout(function () {
                code();
                t.id = null;
                t.busy = false;
            }, milliseconds);
            t.busy = true;
        };
        t.stop = function () {
            ///<summary>Stops the timer if its runnning and resets it back to its starting state.</summary>

            if (t.id !== null) {
                clearTimeout(t.id);
                t.id = null;
                t.busy = false;
            }
        };
    }

    function Footable(t, o, id) {
        ///<summary>Inits a new instance of the plugin.</summary>
        ///<param name="t">The main table element to apply this plugin to.</param>
        ///<param name="o">The options supplied to the plugin. Check the defaults object to see all available options.</param>
        ///<param name="id">The id to assign to this instance of the plugin.</param>

        var ft = this;
        ft.id = id;
        ft.table = t;
        ft.options = o;
        ft.breakpoints = [];
        ft.breakpointNames = '';
        ft.columns = {};
        ft.plugins = w.footable.plugins.load(ft);

        var opt = ft.options,
            cls = opt.classes,
            evt = opt.events,
            trg = opt.triggers,
            indexOffset = 0;

        // This object simply houses all the timers used in the FooTable.
        ft.timers = {
            resize: new Timer(),
            register: function (name) {
                ft.timers[name] = new Timer();
                return ft.timers[name];
            }
        };

        ft.init = function () {
            var $window = $(w), $table = $(ft.table);

            w.footable.plugins.init(ft);

            if ($table.hasClass(cls.loaded)) {
                //already loaded FooTable for the table, so don't init again
                ft.raise(evt.alreadyInitialized);
                return;
            }

            //raise the initializing event
            ft.raise(evt.initializing);

            $table.addClass(cls.loading);

            // Get the column data once for the life time of the plugin
            $table.find(opt.columnDataSelector).each(function () {
                var data = ft.getColumnData(this);
                ft.columns[data.index] = data;
            });

            // Create a nice friendly array to work with out of the breakpoints object.
            for (var name in opt.breakpoints) {
                ft.breakpoints.push({ 'name': name, 'width': opt.breakpoints[name] });
                ft.breakpointNames += (name + ' ');
            }

            // Sort the breakpoints so the smallest is checked first
            ft.breakpoints.sort(function (a, b) {
                return a['width'] - b['width'];
            });

            $table
                .unbind(trg.initialize)
                //bind to FooTable initialize trigger
                .bind(trg.initialize, function () {
                    //remove previous "state" (to "force" a resize)
                    $table.removeData('footable_info');
                    $table.data('breakpoint', '');

                    //trigger the FooTable resize
                    $table.trigger(trg.resize);

                    //remove the loading class
                    $table.removeClass(cls.loading);

                    //add the FooTable and loaded class
                    $table.addClass(cls.loaded).addClass(cls.main);

                    //raise the initialized event
                    ft.raise(evt.initialized);
                })
                .unbind(trg.redraw)
                //bind to FooTable redraw trigger
                .bind(trg.redraw, function () {
                    ft.redraw();
                })
                .unbind(trg.resize)
                //bind to FooTable resize trigger
                .bind(trg.resize, function () {
                    ft.resize();
                })
                .unbind(trg.expandFirstRow)
                //bind to FooTable expandFirstRow trigger
                .bind(trg.expandFirstRow, function () {
                    $table.find(opt.toggleSelector).first().not('.' + cls.detailShow).trigger(trg.toggleRow);
                })
                .unbind(trg.expandAll)
                //bind to FooTable expandFirstRow trigger
                .bind(trg.expandAll, function () {
                    $table.find(opt.toggleSelector).not('.' + cls.detailShow).trigger(trg.toggleRow);
                })
                .unbind(trg.collapseAll)
                //bind to FooTable expandFirstRow trigger
                .bind(trg.collapseAll, function () {
                    $table.find('.' + cls.detailShow).trigger(trg.toggleRow);
                });

            //trigger a FooTable initialize
            $table.trigger(trg.initialize);

            //bind to window resize
            $window
                .bind('resize.footable', function () {
                    ft.timers.resize.stop();
                    ft.timers.resize.start(function () {
                        ft.raise(trg.resize);
                    }, opt.delay);
                });
        };

        ft.addRowToggle = function () {
            if (!opt.addRowToggle) return;

            var $table = $(ft.table),
                hasToggleColumn = false;

            //first remove all toggle spans
            $table.find('span.' + cls.toggle).remove();

            for (var c in ft.columns) {
                var col = ft.columns[c];
                if (col.toggle) {
                    hasToggleColumn = true;
                    var selector = '> tbody > tr:not(.' + cls.detail + ',.' + cls.disabled + ') > td:nth-child(' + (parseInt(col.index, 10) + 1) + ')';
                    $table.find(selector).not('.' + cls.detailCell).prepend($(opt.toggleHTMLElement).addClass(cls.toggle));
                    return;
                }
            }
            //check if we have an toggle column. If not then add it to the first column just to be safe
            if (!hasToggleColumn) {
                $table
                    .find('> tbody > tr:not(.' + cls.detail + ',.' + cls.disabled + ') > td:first-child')
                    .not('.' + cls.detailCell)
                    .prepend($(opt.toggleHTMLElement).addClass(cls.toggle));
            }
        };

        ft.setColumnClasses = function () {
            $table = $(ft.table);
            for (var c in ft.columns) {
                var col = ft.columns[c];
                if (col.className !== null) {
                    var selector = '', first = true;
                    $.each(col.matches, function (m, match) { //support for colspans
                        if (!first) selector += ', ';
                        selector += '> tbody > tr:not(.' + cls.detail + ') > td:nth-child(' + (parseInt(match, 10) + 1) + ')';
                        first = false;
                    });
                    //add the className to the cells specified by data-class="blah"
                    $table.find(selector).not('.' + cls.detailCell).addClass(col.className);
                }
            }
        };

        //moved this out into it's own function so that it can be called from other add-ons
        ft.bindToggleSelectors = function () {
            var $table = $(ft.table);

            if (!ft.hasAnyBreakpointColumn()) return;

            $table.find(opt.toggleSelector).unbind(trg.toggleRow).bind(trg.toggleRow, function (e) {
                var $row = $(this).is('tr') ? $(this) : $(this).parents('tr:first');
                ft.toggleDetail($row);
            });

            $table.find(opt.toggleSelector).unbind('click.footable').bind('click.footable', function (e) {
                if ($table.is('.breakpoint') && $(e.target).is('td,.' + cls.toggle)) {
                    $(this).trigger(trg.toggleRow);
                }
            });
        };

        ft.parse = function (cell, column) {
            var parser = opt.parsers[column.type] || opt.parsers.alpha;
            return parser(cell);
        };

        ft.getColumnData = function (th) {
            var $th = $(th), hide = $th.data('hide'), index = $th.index();
            hide = hide || '';
            hide = jQuery.map(hide.split(','), function (a) {
                return jQuery.trim(a);
            });
            var data = {
                'index': index,
                'hide': {},
                'type': $th.data('type') || 'alpha',
                'name': $th.data('name') || $.trim($th.text()),
                'ignore': $th.data('ignore') || false,
                'toggle': $th.data('toggle') || false,
                'className': $th.data('class') || null,
                'matches': [],
                'names': {},
                'group': $th.data('group') || null,
                'groupName': null
            };

            if (data.group !== null) {
                var $group = $(ft.table).find('> thead > tr.footable-group-row > th[data-group="' + data.group + '"], > thead > tr.footable-group-row > td[data-group="' + data.group + '"]').first();
                data.groupName = ft.parse($group, { 'type': 'alpha' });
            }

            var pcolspan = parseInt($th.prev().attr('colspan') || 0, 10);
            indexOffset += pcolspan > 1 ? pcolspan - 1 : 0;
            var colspan = parseInt($th.attr('colspan') || 0, 10), curindex = data.index + indexOffset;
            if (colspan > 1) {
                var names = $th.data('names');
                names = names || '';
                names = names.split(',');
                for (var i = 0; i < colspan; i++) {
                    data.matches.push(i + curindex);
                    if (i < names.length) data.names[i + curindex] = names[i];
                }
            } else {
                data.matches.push(curindex);
            }

            data.hide['default'] = ($th.data('hide') === "all") || ($.inArray('default', hide) >= 0);

            var hasBreakpoint = false;
            for (var name in opt.breakpoints) {
                data.hide[name] = ($th.data('hide') === "all") || ($.inArray(name, hide) >= 0);
                hasBreakpoint = hasBreakpoint || data.hide[name];
            }
            data.hasBreakpoint = hasBreakpoint;
            var e = ft.raise(evt.columnData, { 'column': { 'data': data, 'th': th } });
            return e.column.data;
        };

        ft.getViewportWidth = function () {
            return window.innerWidth || (document.body ? document.body.offsetWidth : 0);
        };

        ft.calculateWidth = function ($table, info) {
            if (jQuery.isFunction(opt.calculateWidthOverride)) {
                return opt.calculateWidthOverride($table, info);
            }
            if (info.viewportWidth < info.width) info.width = info.viewportWidth;
            if (info.parentWidth < info.width) info.width = info.parentWidth;
            return info;
        };

        ft.hasBreakpointColumn = function (breakpoint) {
            for (var c in ft.columns) {
                if (ft.columns[c].hide[breakpoint]) {
                    if (ft.columns[c].ignore) {
                        continue;
                    }
                    return true;
                }
            }
            return false;
        };

        ft.hasAnyBreakpointColumn = function () {
            for (var c in ft.columns) {
                if (ft.columns[c].hasBreakpoint) {
                    return true;
                }
            }
            return false;
        };

        ft.resize = function () {
            var $table = $(ft.table);

            if (!$table.is(':visible')) {
                return;
            } //we only care about FooTables that are visible

            if (!ft.hasAnyBreakpointColumn()) {
                return;
            } //we only care about FooTables that have breakpoints

            var info = {
                'width': $table.width(),                  //the table width
                'viewportWidth': ft.getViewportWidth(),   //the width of the viewport
                'parentWidth': $table.parent().width()    //the width of the parent
            };

            info = ft.calculateWidth($table, info);

            var pinfo = $table.data('footable_info');
            $table.data('footable_info', info);
            ft.raise(evt.resizing, { 'old': pinfo, 'info': info });

            // This (if) statement is here purely to make sure events aren't raised twice as mobile safari seems to do
            if (!pinfo || (pinfo && pinfo.width && pinfo.width !== info.width)) {

                var current = null, breakpoint;
                for (var i = 0; i < ft.breakpoints.length; i++) {
                    breakpoint = ft.breakpoints[i];
                    if (breakpoint && breakpoint.width && info.width <= breakpoint.width) {
                        current = breakpoint;
                        break;
                    }
                }

                var breakpointName = (current === null ? 'default' : current['name']),
                    hasBreakpointFired = ft.hasBreakpointColumn(breakpointName),
                    previousBreakpoint = $table.data('breakpoint');

                $table
                    .data('breakpoint', breakpointName)
                    .removeClass('default breakpoint').removeClass(ft.breakpointNames)
                    .addClass(breakpointName + (hasBreakpointFired ? ' breakpoint' : ''));

                //only do something if the breakpoint has changed
                if (breakpointName !== previousBreakpoint) {
                    //trigger a redraw
                    $table.trigger(trg.redraw);
                    //raise a breakpoint event
                    ft.raise(evt.breakpoint, { 'breakpoint': breakpointName, 'info': info });
                }
            }

            ft.raise(evt.resized, { 'old': pinfo, 'info': info });
        };

        ft.redraw = function () {
            //add the toggler to each row
            ft.addRowToggle();

            //bind the toggle selector click events
            ft.bindToggleSelectors();

            //set any cell classes defined for the columns
            ft.setColumnClasses();

            var $table = $(ft.table),
                breakpointName = $table.data('breakpoint'),
                hasBreakpointFired = ft.hasBreakpointColumn(breakpointName);

            $table
                .find('> tbody > tr:not(.' + cls.detail + ')').data('detail_created', false).end()
                .find('> thead > tr:last-child > th')
                .each(function () {
                    var data = ft.columns[$(this).index()], selector = '', first = true;
                    $.each(data.matches, function (m, match) {
                        if (!first) {
                            selector += ', ';
                        }
                        var count = match + 1;
                        selector += '> tbody > tr:not(.' + cls.detail + ') > td:nth-child(' + count + ')';
                        selector += ', > tfoot > tr:not(.' + cls.detail + ') > td:nth-child(' + count + ')';
                        selector += ', > colgroup > col:nth-child(' + count + ')';
                        first = false;
                    });

                    selector += ', > thead > tr[data-group-row="true"] > th[data-group="' + data.group + '"]';
                    var $column = $table.find(selector).add(this);
                    if (breakpointName !== '') {
                        if (data.hide[breakpointName] === false) $column.addClass('footable-visible').show();
                        else $column.removeClass('footable-visible').hide();
                    }

                    if ($table.find('> thead > tr.footable-group-row').length === 1) {
                        var $groupcols = $table.find('> thead > tr:last-child > th[data-group="' + data.group + '"]:visible, > thead > tr:last-child > th[data-group="' + data.group + '"]:visible'),
                            $group = $table.find('> thead > tr.footable-group-row > th[data-group="' + data.group + '"], > thead > tr.footable-group-row > td[data-group="' + data.group + '"]'),
                            groupspan = 0;

                        $.each($groupcols, function () {
                            groupspan += parseInt($(this).attr('colspan') || 1, 10);
                        });

                        if (groupspan > 0) $group.attr('colspan', groupspan).show();
                        else $group.hide();
                    }
                })
                .end()
                .find('> tbody > tr.' + cls.detailShow).each(function () {
                    ft.createOrUpdateDetailRow(this);
                });

            $table.find('> tbody > tr.' + cls.detailShow + ':visible').each(function () {
                var $next = $(this).next();
                if ($next.hasClass(cls.detail)) {
                    if (!hasBreakpointFired) $next.hide();
                    else $next.show();
                }
            });

            // adding .footable-first-column and .footable-last-column to the first and last th and td of each row in order to allow
            // for styling if the first or last column is hidden (which won't work using :first-child or :last-child)
            $table.find('> thead > tr > th.footable-last-column, > tbody > tr > td.footable-last-column').removeClass('footable-last-column');
            $table.find('> thead > tr > th.footable-first-column, > tbody > tr > td.footable-first-column').removeClass('footable-first-column');
            $table.find('> thead > tr, > tbody > tr')
                .find('> th.footable-visible:last, > td.footable-visible:last')
                .addClass('footable-last-column')
                .end()
                .find('> th.footable-visible:first, > td.footable-visible:first')
                .addClass('footable-first-column');

            ft.raise(evt.redrawn);
        };

        ft.toggleDetail = function (row) {
            var $row = (row.jquery) ? row : $(row),
                $next = $row.next();

            //check if the row is already expanded
            if ($row.hasClass(cls.detailShow)) {
                $row.removeClass(cls.detailShow);

                //only hide the next row if it's a detail row
                if ($next.hasClass(cls.detail)) $next.hide();

                ft.raise(evt.rowCollapsed, { 'row': $row[0] });

            } else {
                ft.createOrUpdateDetailRow($row[0]);
                $row.addClass(cls.detailShow)
					.next().show();

                ft.raise(evt.rowExpanded, { 'row': $row[0] });
            }
        };

        ft.removeRow = function (row) {
            var $row = (row.jquery) ? row : $(row);
            if ($row.hasClass(cls.detail)) {
                $row = $row.prev();
            }
            var $next = $row.next();
            if ($row.data('detail_created') === true) {
                //remove the detail row
                $next.remove();
            }
            $row.remove();

            //raise event
            ft.raise(evt.rowRemoved);
        };

        ft.appendRow = function (row) {
            var $row = (row.jquery) ? row : $(row);
            $(ft.table).find('tbody').append($row);

            //redraw the table
            ft.redraw();
        };

        ft.getColumnFromTdIndex = function (index) {
            /// <summary>Returns the correct column data for the supplied index taking into account colspans.</summary>
            /// <param name="index">The index to retrieve the column data for.</param>
            /// <returns type="json">A JSON object containing the column data for the supplied index.</returns>
            var result = null;
            for (var column in ft.columns) {
                if ($.inArray(index, ft.columns[column].matches) >= 0) {
                    result = ft.columns[column];
                    break;
                }
            }
            return result;
        };

        ft.createOrUpdateDetailRow = function (actualRow) {
            var $row = $(actualRow), $next = $row.next(), $detail, values = [];
            if ($row.data('detail_created') === true) return true;

            if ($row.is(':hidden')) return false; //if the row is hidden for some reason (perhaps filtered) then get out of here
            ft.raise(evt.rowDetailUpdating, { 'row': $row, 'detail': $next });
            $row.find('> td:hidden').each(function () {
                var index = $(this).index(), column = ft.getColumnFromTdIndex(index), name = column.name;
                if (column.ignore === true) return true;

                if (index in column.names) name = column.names[index];
                values.push({ 'name': name, 'value': ft.parse(this, column), 'display': $.trim($(this).html()), 'group': column.group, 'groupName': column.groupName });
                return true;
            });
            if (values.length === 0) return false; //return if we don't have any data to show
            var colspan = $row.find('> td:visible').length;
            var exists = $next.hasClass(cls.detail);
            if (!exists) { // Create
                $next = $('<tr class="' + cls.detail + '"><td class="' + cls.detailCell + '"><div class="' + cls.detailInner + '"></div></td></tr>');
                $row.after($next);
            }
            $next.find('> td:first').attr('colspan', colspan);
            $detail = $next.find('.' + cls.detailInner).empty();
            opt.createDetail($detail, values, opt.createGroupedDetail, opt.detailSeparator, cls);
            $row.data('detail_created', true);
            ft.raise(evt.rowDetailUpdated, { 'row': $row, 'detail': $next });
            return !exists;
        };

        ft.raise = function (eventName, args) {

            if (ft.options.debug === true && $.isFunction(ft.options.log)) ft.options.log(eventName, 'event');

            args = args || {};
            var def = { 'ft': ft };
            $.extend(true, def, args);
            var e = $.Event(eventName, def);
            if (!e.ft) {
                $.extend(true, e, def);
            } //pre jQuery 1.6 which did not allow data to be passed to event object constructor
            $(ft.table).trigger(e);
            return e;
        };

        //reset the state of FooTable
        ft.reset = function () {
            var $table = $(ft.table);
            $table.removeData('footable_info')
                .data('breakpoint', '')
                .removeClass(cls.loading)
                .removeClass(cls.loaded);

            $table.find(opt.toggleSelector).unbind(trg.toggleRow).unbind('click.footable');

            $table.find('> tbody > tr').removeClass(cls.detailShow);

            $table.find('> tbody > tr.' + cls.detail).remove();

            ft.raise(evt.reset);
        };

        ft.init();
        return ft;
    }
})(jQuery, window);

(function ($, w, undefined) {
    if (w.footable === undefined || w.footable === null)
        throw new Error('Please check and make sure footable.js is included in the page and is loaded prior to this script.');

    var defaults = {
        sort: true,
        sorters: {
            alpha: function (a, b) {
                if (typeof (a) === 'string') { a = a.toLowerCase(); }
                if (typeof (b) === 'string') { b = b.toLowerCase(); }
                if (a === b) return 0;
                if (a < b) return -1;
                return 1;
            },
            numeric: function (a, b) {
                return a - b;
            }
        },
        classes: {
            sort: {
                sortable: 'footable-sortable',
                sorted: 'footable-sorted',
                descending: 'footable-sorted-desc',
                indicator: 'footable-sort-indicator'
            }
        },
        events: {
            sort: {
                sorting: 'footable_sorting',
                sorted: 'footable_sorted'
            }
        }
    };

    function Sort() {
        var p = this;
        p.name = 'Footable Sortable';
        p.init = function (ft) {
            p.footable = ft;
            if (ft.options.sort === true) {
                $(ft.table)
                    .unbind('.sorting')
                    .bind({
                        'footable_initialized.sorting': function (e) {
                            var $table = $(ft.table),
                                $tbody = $table.find('> tbody'),
                                cls = ft.options.classes.sort,
                                column, $th;

                            if ($table.data('sort') === false) return;

                            $table.find('> thead > tr:last-child > th, > thead > tr:last-child > td').each(function (ec) {
                                $th = $(this), column = ft.columns[$th.index()];
                                if (column.sort.ignore !== true && !$th.hasClass(cls.sortable)) {
                                    $th.addClass(cls.sortable);
                                    $('<span />').addClass(cls.indicator).appendTo($th);
                                }
                            });

                            $table.find('> thead > tr:last-child > th.' + cls.sortable + ', > thead > tr:last-child > td.' + cls.sortable).unbind('click.footable').bind('click.footable', function (ec) {
                                ec.preventDefault();
                                $th = $(this);
                                var ascending = !$th.hasClass(cls.sorted);
                                p.doSort($th.index(), ascending);
                                return false;
                            });

                            var didSomeSorting = false;
                            for (var c in ft.columns) {
                                column = ft.columns[c];
                                if (column.sort.initial) {
                                    var ascending = (column.sort.initial !== 'descending');
                                    p.doSort(column.index, ascending);
                                    break;
                                }
                            }
                            if (didSomeSorting) {
                                ft.bindToggleSelectors();
                            }
                        },
                        'footable_redrawn.sorting': function (e) {
                            var $table = $(ft.table),
                                cls = ft.options.classes.sort;
                            if ($table.data('sorted') >= 0) {
                                $table.find('> thead > tr:last-child > th').each(function (i) {
                                    var $th = $(this);
                                    if ($th.hasClass(cls.sorted) || $th.hasClass(cls.descending)) {
                                        p.doSort(i);
                                        return;
                                    }
                                });
                            }
                        },
                        'footable_column_data.sorting': function (e) {
                            var $th = $(e.column.th);
                            e.column.data.sort = e.column.data.sort || {};
                            e.column.data.sort.initial = $th.data('sort-initial') || false;
                            e.column.data.sort.ignore = $th.data('sort-ignore') || false;
                            e.column.data.sort.selector = $th.data('sort-selector') || null;

                            var match = $th.data('sort-match') || 0;
                            if (match >= e.column.data.matches.length) match = 0;
                            e.column.data.sort.match = e.column.data.matches[match];
                        }
                    })
                //save the sort object onto the table so we can access it later
                .data('footable-sort', p);
            }
        };

        p.doSort = function (columnIndex, ascending) {
            var ft = p.footable;
            if ($(ft.table).data('sort') === false) return;

            var $table = $(ft.table),
                $tbody = $table.find('> tbody'),
                column = ft.columns[columnIndex],
                $th = $table.find('> thead > tr:last-child > th:eq(' + columnIndex + ')'),
                cls = ft.options.classes.sort,
                evt = ft.options.events.sort;

            ascending = (ascending === undefined) ? $th.hasClass(cls.sorted) :
                (ascending === 'toggle') ? !$th.hasClass(cls.sorted) : ascending;

            if (column.sort.ignore === true) return true;

            //raise a pre-sorting event so that we can cancel the sorting if needed
            var event = ft.raise(evt.sorting, { column: column, direction: ascending ? 'ASC' : 'DESC' });
            if (event && event.result === false) return;

            $table.data('sorted', column.index);

            $table.find('> thead > tr:last-child > th, > thead > tr:last-child > td').not($th).removeClass(cls.sorted + ' ' + cls.descending);

            if (ascending === undefined) {
                ascending = $th.hasClass(cls.sorted);
            }

            if (ascending) {
                $th.removeClass(cls.descending).addClass(cls.sorted);
            } else {
                $th.removeClass(cls.sorted).addClass(cls.descending);
            }

            p.sort(ft, $tbody, column, ascending);

            ft.bindToggleSelectors();
            ft.raise(evt.sorted, { column: column, direction: ascending ? 'ASC' : 'DESC' });
        };

        p.rows = function (ft, tbody, column) {
            var rows = [];
            tbody.find('> tr').each(function () {
                var $row = $(this), $next = null;
                if ($row.hasClass(ft.options.classes.detail)) return true;
                if ($row.next().hasClass(ft.options.classes.detail)) {
                    $next = $row.next().get(0);
                }
                var row = { 'row': $row, 'detail': $next };
                if (column !== undefined) {
                    row.value = ft.parse(this.cells[column.sort.match], column);
                }
                rows.push(row);
                return true;
            }).detach();
            return rows;
        };

        p.sort = function (ft, tbody, column, ascending) {
            var rows = p.rows(ft, tbody, column);
            var sorter = ft.options.sorters[column.type] || ft.options.sorters.alpha;
            rows.sort(function (a, b) {
                if (ascending) {
                    return sorter(a.value, b.value);
                } else {
                    return sorter(b.value, a.value);
                }
            });
            for (var j = 0; j < rows.length; j++) {
                tbody.append(rows[j].row);
                if (rows[j].detail !== null) {
                    tbody.append(rows[j].detail);
                }
            }
        };
    }

    w.footable.plugins.register(Sort, defaults);

})(jQuery, window);
/**
 * @summary     DataTables
 * @description Paginate, search and sort HTML tables
 * @version     1.9.4
 * @file        jquery.dataTables.js
 * @author      Allan Jardine (www.sprymedia.co.uk)
 * @contact     www.sprymedia.co.uk/contact
 *
 * @copyright Copyright 2008-2012 Allan Jardine, all rights reserved.
 *
 * This source file is free software, under either the GPL v2 license or a
 * BSD style license, available at:
 *   http://datatables.net/license_gpl2
 *   http://datatables.net/license_bsd
 * 
 * This source file is distributed in the hope that it will be useful, but 
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY 
 * or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.
 * 
 * For details please refer to: http://www.datatables.net
 */

/*jslint evil: true, undef: true, browser: true */
/*globals $, jQuery,define,_fnExternApiFunc,_fnInitialise,_fnInitComplete,_fnLanguageCompat,_fnAddColumn,_fnColumnOptions,_fnAddData,_fnCreateTr,_fnGatherData,_fnBuildHead,_fnDrawHead,_fnDraw,_fnReDraw,_fnAjaxUpdate,_fnAjaxParameters,_fnAjaxUpdateDraw,_fnServerParams,_fnAddOptionsHtml,_fnFeatureHtmlTable,_fnScrollDraw,_fnAdjustColumnSizing,_fnFeatureHtmlFilter,_fnFilterComplete,_fnFilterCustom,_fnFilterColumn,_fnFilter,_fnBuildSearchArray,_fnBuildSearchRow,_fnFilterCreateSearch,_fnDataToSearch,_fnSort,_fnSortAttachListener,_fnSortingClasses,_fnFeatureHtmlPaginate,_fnPageChange,_fnFeatureHtmlInfo,_fnUpdateInfo,_fnFeatureHtmlLength,_fnFeatureHtmlProcessing,_fnProcessingDisplay,_fnVisibleToColumnIndex,_fnColumnIndexToVisible,_fnNodeToDataIndex,_fnVisbleColumns,_fnCalculateEnd,_fnConvertToWidth,_fnCalculateColumnWidths,_fnScrollingWidthAdjust,_fnGetWidestNode,_fnGetMaxLenString,_fnStringToCss,_fnDetectType,_fnSettingsFromNode,_fnGetDataMaster,_fnGetTrNodes,_fnGetTdNodes,_fnEscapeRegex,_fnDeleteIndex,_fnReOrderIndex,_fnColumnOrdering,_fnLog,_fnClearTable,_fnSaveState,_fnLoadState,_fnCreateCookie,_fnReadCookie,_fnDetectHeader,_fnGetUniqueThs,_fnScrollBarWidth,_fnApplyToChildren,_fnMap,_fnGetRowData,_fnGetCellData,_fnSetCellData,_fnGetObjectDataFn,_fnSetObjectDataFn,_fnApplyColumnDefs,_fnBindAction,_fnCallbackReg,_fnCallbackFire,_fnJsonString,_fnRender,_fnNodeToColumnIndex,_fnInfoMacros,_fnBrowserDetect,_fnGetColumns*/

(/** @lends <global> */function (window, document, undefined) {

    (function (factory) {
        "use strict";

        // Define as an AMD module if possible
        if (typeof define === 'function' && define.amd) {
            define(['jquery'], factory);
        }
            /* Define using browser globals otherwise
             * Prevent multiple instantiations if the script is loaded twice
             */
        else if (jQuery && !jQuery.fn.dataTable) {
            factory(jQuery);
        }
    }
    (/** @lends <global> */function ($) {
        "use strict";
        /** 
         * DataTables is a plug-in for the jQuery Javascript library. It is a 
         * highly flexible tool, based upon the foundations of progressive 
         * enhancement, which will add advanced interaction controls to any 
         * HTML table. For a full list of features please refer to
         * <a href="http://datatables.net">DataTables.net</a>.
         *
         * Note that the <i>DataTable</i> object is not a global variable but is
         * aliased to <i>jQuery.fn.DataTable</i> and <i>jQuery.fn.dataTable</i> through which 
         * it may be  accessed.
         *
         *  @class
         *  @param {object} [oInit={}] Configuration object for DataTables. Options
         *    are defined by {@link DataTable.defaults}
         *  @requires jQuery 1.3+
         * 
         *  @example
         *    // Basic initialisation
         *    $(document).ready( function {
         *      $('#example').dataTable();
         *    } );
         *  
         *  @example
         *    // Initialisation with configuration options - in this case, disable
         *    // pagination and sorting.
         *    $(document).ready( function {
         *      $('#example').dataTable( {
         *        "bPaginate": false,
         *        "bSort": false 
         *      } );
         *    } );
         */
        var DataTable = function (oInit) {


            /**
             * Add a column to the list used for the table with default values
             *  @param {object} oSettings dataTables settings object
             *  @param {node} nTh The th element for this column
             *  @memberof DataTable#oApi
             */
            function _fnAddColumn(oSettings, nTh) {
                var oDefaults = DataTable.defaults.columns;
                var iCol = oSettings.aoColumns.length;
                var oCol = $.extend({}, DataTable.models.oColumn, oDefaults, {
                    "sSortingClass": oSettings.oClasses.sSortable,
                    "sSortingClassJUI": oSettings.oClasses.sSortJUI,
                    "nTh": nTh ? nTh : document.createElement('th'),
                    "sTitle": oDefaults.sTitle ? oDefaults.sTitle : nTh ? nTh.innerHTML : '',
                    "aDataSort": oDefaults.aDataSort ? oDefaults.aDataSort : [iCol],
                    "mData": oDefaults.mData ? oDefaults.oDefaults : iCol
                });
                oSettings.aoColumns.push(oCol);

                /* Add a column specific filter */
                if (oSettings.aoPreSearchCols[iCol] === undefined || oSettings.aoPreSearchCols[iCol] === null) {
                    oSettings.aoPreSearchCols[iCol] = $.extend({}, DataTable.models.oSearch);
                }
                else {
                    var oPre = oSettings.aoPreSearchCols[iCol];

                    /* Don't require that the user must specify bRegex, bSmart or bCaseInsensitive */
                    if (oPre.bRegex === undefined) {
                        oPre.bRegex = true;
                    }

                    if (oPre.bSmart === undefined) {
                        oPre.bSmart = true;
                    }

                    if (oPre.bCaseInsensitive === undefined) {
                        oPre.bCaseInsensitive = true;
                    }
                }

                /* Use the column options function to initialise classes etc */
                _fnColumnOptions(oSettings, iCol, null);
            }


            /**
             * Apply options for a column
             *  @param {object} oSettings dataTables settings object
             *  @param {int} iCol column index to consider
             *  @param {object} oOptions object with sType, bVisible and bSearchable etc
             *  @memberof DataTable#oApi
             */
            function _fnColumnOptions(oSettings, iCol, oOptions) {
                var oCol = oSettings.aoColumns[iCol];

                /* User specified column options */
                if (oOptions !== undefined && oOptions !== null) {
                    /* Backwards compatibility for mDataProp */
                    if (oOptions.mDataProp && !oOptions.mData) {
                        oOptions.mData = oOptions.mDataProp;
                    }

                    if (oOptions.sType !== undefined) {
                        oCol.sType = oOptions.sType;
                        oCol._bAutoType = false;
                    }

                    $.extend(oCol, oOptions);
                    _fnMap(oCol, oOptions, "sWidth", "sWidthOrig");

                    /* iDataSort to be applied (backwards compatibility), but aDataSort will take
                     * priority if defined
                     */
                    if (oOptions.iDataSort !== undefined) {
                        oCol.aDataSort = [oOptions.iDataSort];
                    }
                    _fnMap(oCol, oOptions, "aDataSort");
                }

                /* Cache the data get and set functions for speed */
                var mRender = oCol.mRender ? _fnGetObjectDataFn(oCol.mRender) : null;
                var mData = _fnGetObjectDataFn(oCol.mData);

                oCol.fnGetData = function (oData, sSpecific) {
                    var innerData = mData(oData, sSpecific);

                    if (oCol.mRender && (sSpecific && sSpecific !== '')) {
                        return mRender(innerData, sSpecific, oData);
                    }
                    return innerData;
                };
                oCol.fnSetData = _fnSetObjectDataFn(oCol.mData);

                /* Feature sorting overrides column specific when off */
                if (!oSettings.oFeatures.bSort) {
                    oCol.bSortable = false;
                }

                /* Check that the class assignment is correct for sorting */
                if (!oCol.bSortable ||
                     ($.inArray('asc', oCol.asSorting) == -1 && $.inArray('desc', oCol.asSorting) == -1)) {
                    oCol.sSortingClass = oSettings.oClasses.sSortableNone;
                    oCol.sSortingClassJUI = "";
                }
                else if ($.inArray('asc', oCol.asSorting) == -1 && $.inArray('desc', oCol.asSorting) == -1) {
                    oCol.sSortingClass = oSettings.oClasses.sSortable;
                    oCol.sSortingClassJUI = oSettings.oClasses.sSortJUI;
                }
                else if ($.inArray('asc', oCol.asSorting) != -1 && $.inArray('desc', oCol.asSorting) == -1) {
                    oCol.sSortingClass = oSettings.oClasses.sSortableAsc;
                    oCol.sSortingClassJUI = oSettings.oClasses.sSortJUIAscAllowed;
                }
                else if ($.inArray('asc', oCol.asSorting) == -1 && $.inArray('desc', oCol.asSorting) != -1) {
                    oCol.sSortingClass = oSettings.oClasses.sSortableDesc;
                    oCol.sSortingClassJUI = oSettings.oClasses.sSortJUIDescAllowed;
                }
            }


            /**
             * Adjust the table column widths for new data. Note: you would probably want to 
             * do a redraw after calling this function!
             *  @param {object} oSettings dataTables settings object
             *  @memberof DataTable#oApi
             */
            function _fnAdjustColumnSizing(oSettings) {
                /* Not interested in doing column width calculation if auto-width is disabled */
                if (oSettings.oFeatures.bAutoWidth === false) {
                    return false;
                }

                _fnCalculateColumnWidths(oSettings);
                for (var i = 0, iLen = oSettings.aoColumns.length ; i < iLen ; i++) {
                    oSettings.aoColumns[i].nTh.style.width = oSettings.aoColumns[i].sWidth;
                }
            }


            /**
             * Covert the index of a visible column to the index in the data array (take account
             * of hidden columns)
             *  @param {object} oSettings dataTables settings object
             *  @param {int} iMatch Visible column index to lookup
             *  @returns {int} i the data index
             *  @memberof DataTable#oApi
             */
            function _fnVisibleToColumnIndex(oSettings, iMatch) {
                var aiVis = _fnGetColumns(oSettings, 'bVisible');

                return typeof aiVis[iMatch] === 'number' ?
                    aiVis[iMatch] :
                    null;
            }


            /**
             * Covert the index of an index in the data array and convert it to the visible
             *   column index (take account of hidden columns)
             *  @param {int} iMatch Column index to lookup
             *  @param {object} oSettings dataTables settings object
             *  @returns {int} i the data index
             *  @memberof DataTable#oApi
             */
            function _fnColumnIndexToVisible(oSettings, iMatch) {
                var aiVis = _fnGetColumns(oSettings, 'bVisible');
                var iPos = $.inArray(iMatch, aiVis);

                return iPos !== -1 ? iPos : null;
            }


            /**
             * Get the number of visible columns
             *  @param {object} oSettings dataTables settings object
             *  @returns {int} i the number of visible columns
             *  @memberof DataTable#oApi
             */
            function _fnVisbleColumns(oSettings) {
                return _fnGetColumns(oSettings, 'bVisible').length;
            }


            /**
             * Get an array of column indexes that match a given property
             *  @param {object} oSettings dataTables settings object
             *  @param {string} sParam Parameter in aoColumns to look for - typically 
             *    bVisible or bSearchable
             *  @returns {array} Array of indexes with matched properties
             *  @memberof DataTable#oApi
             */
            function _fnGetColumns(oSettings, sParam) {
                var a = [];

                $.map(oSettings.aoColumns, function (val, i) {
                    if (val[sParam]) {
                        a.push(i);
                    }
                });

                return a;
            }


            /**
             * Get the sort type based on an input string
             *  @param {string} sData data we wish to know the type of
             *  @returns {string} type (defaults to 'string' if no type can be detected)
             *  @memberof DataTable#oApi
             */
            function _fnDetectType(sData) {
                var aTypes = DataTable.ext.aTypes;
                var iLen = aTypes.length;

                for (var i = 0 ; i < iLen ; i++) {
                    var sType = aTypes[i](sData);
                    if (sType !== null) {
                        return sType;
                    }
                }

                return 'string';
            }


            /**
             * Figure out how to reorder a display list
             *  @param {object} oSettings dataTables settings object
             *  @returns array {int} aiReturn index list for reordering
             *  @memberof DataTable#oApi
             */
            function _fnReOrderIndex(oSettings, sColumns) {
                var aColumns = sColumns.split(',');
                var aiReturn = [];

                for (var i = 0, iLen = oSettings.aoColumns.length ; i < iLen ; i++) {
                    for (var j = 0 ; j < iLen ; j++) {
                        if (oSettings.aoColumns[i].sName == aColumns[j]) {
                            aiReturn.push(j);
                            break;
                        }
                    }
                }

                return aiReturn;
            }


            /**
             * Get the column ordering that DataTables expects
             *  @param {object} oSettings dataTables settings object
             *  @returns {string} comma separated list of names
             *  @memberof DataTable#oApi
             */
            function _fnColumnOrdering(oSettings) {
                var sNames = '';
                for (var i = 0, iLen = oSettings.aoColumns.length ; i < iLen ; i++) {
                    sNames += oSettings.aoColumns[i].sName + ',';
                }
                if (sNames.length == iLen) {
                    return "";
                }
                return sNames.slice(0, -1);
            }


            /**
             * Take the column definitions and static columns arrays and calculate how
             * they relate to column indexes. The callback function will then apply the
             * definition found for a column to a suitable configuration object.
             *  @param {object} oSettings dataTables settings object
             *  @param {array} aoColDefs The aoColumnDefs array that is to be applied
             *  @param {array} aoCols The aoColumns array that defines columns individually
             *  @param {function} fn Callback function - takes two parameters, the calculated
             *    column index and the definition for that column.
             *  @memberof DataTable#oApi
             */
            function _fnApplyColumnDefs(oSettings, aoColDefs, aoCols, fn) {
                var i, iLen, j, jLen, k, kLen;

                // Column definitions with aTargets
                if (aoColDefs) {
                    /* Loop over the definitions array - loop in reverse so first instance has priority */
                    for (i = aoColDefs.length - 1 ; i >= 0 ; i--) {
                        /* Each definition can target multiple columns, as it is an array */
                        var aTargets = aoColDefs[i].aTargets;
                        if (!$.isArray(aTargets)) {
                            _fnLog(oSettings, 1, 'aTargets must be an array of targets, not a ' + (typeof aTargets));
                        }

                        for (j = 0, jLen = aTargets.length ; j < jLen ; j++) {
                            if (typeof aTargets[j] === 'number' && aTargets[j] >= 0) {
                                /* Add columns that we don't yet know about */
                                while (oSettings.aoColumns.length <= aTargets[j]) {
                                    _fnAddColumn(oSettings);
                                }

                                /* Integer, basic index */
                                fn(aTargets[j], aoColDefs[i]);
                            }
                            else if (typeof aTargets[j] === 'number' && aTargets[j] < 0) {
                                /* Negative integer, right to left column counting */
                                fn(oSettings.aoColumns.length + aTargets[j], aoColDefs[i]);
                            }
                            else if (typeof aTargets[j] === 'string') {
                                /* Class name matching on TH element */
                                for (k = 0, kLen = oSettings.aoColumns.length ; k < kLen ; k++) {
                                    if (aTargets[j] == "_all" ||
                                         $(oSettings.aoColumns[k].nTh).hasClass(aTargets[j])) {
                                        fn(k, aoColDefs[i]);
                                    }
                                }
                            }
                        }
                    }
                }

                // Statically defined columns array
                if (aoCols) {
                    for (i = 0, iLen = aoCols.length ; i < iLen ; i++) {
                        fn(i, aoCols[i]);
                    }
                }
            }

            /**
             * Add a data array to the table, creating DOM node etc. This is the parallel to 
             * _fnGatherData, but for adding rows from a Javascript source, rather than a
             * DOM source.
             *  @param {object} oSettings dataTables settings object
             *  @param {array} aData data array to be added
             *  @returns {int} >=0 if successful (index of new aoData entry), -1 if failed
             *  @memberof DataTable#oApi
             */
            function _fnAddData(oSettings, aDataSupplied) {
                var oCol;

                /* Take an independent copy of the data source so we can bash it about as we wish */
                var aDataIn = ($.isArray(aDataSupplied)) ?
                    aDataSupplied.slice() :
                    $.extend(true, {}, aDataSupplied);

                /* Create the object for storing information about this new row */
                var iRow = oSettings.aoData.length;
                var oData = $.extend(true, {}, DataTable.models.oRow);
                oData._aData = aDataIn;
                oSettings.aoData.push(oData);

                /* Create the cells */
                var nTd, sThisType;
                for (var i = 0, iLen = oSettings.aoColumns.length ; i < iLen ; i++) {
                    oCol = oSettings.aoColumns[i];

                    /* Use rendered data for filtering / sorting */
                    if (typeof oCol.fnRender === 'function' && oCol.bUseRendered && oCol.mData !== null) {
                        _fnSetCellData(oSettings, iRow, i, _fnRender(oSettings, iRow, i));
                    }
                    else {
                        _fnSetCellData(oSettings, iRow, i, _fnGetCellData(oSettings, iRow, i));
                    }

                    /* See if we should auto-detect the column type */
                    if (oCol._bAutoType && oCol.sType != 'string') {
                        /* Attempt to auto detect the type - same as _fnGatherData() */
                        var sVarType = _fnGetCellData(oSettings, iRow, i, 'type');
                        if (sVarType !== null && sVarType !== '') {
                            sThisType = _fnDetectType(sVarType);
                            if (oCol.sType === null) {
                                oCol.sType = sThisType;
                            }
                            else if (oCol.sType != sThisType && oCol.sType != "html") {
                                /* String is always the 'fallback' option */
                                oCol.sType = 'string';
                            }
                        }
                    }
                }

                /* Add to the display array */
                oSettings.aiDisplayMaster.push(iRow);

                /* Create the DOM information */
                if (!oSettings.oFeatures.bDeferRender) {
                    _fnCreateTr(oSettings, iRow);
                }

                return iRow;
            }


            /**
             * Read in the data from the target table from the DOM
             *  @param {object} oSettings dataTables settings object
             *  @memberof DataTable#oApi
             */
            function _fnGatherData(oSettings) {
                var iLoop, i, iLen, j, jLen, jInner,
                    nTds, nTrs, nTd, nTr, aLocalData, iThisIndex,
                    iRow, iRows, iColumn, iColumns, sNodeName,
                    oCol, oData;

                /*
                 * Process by row first
                 * Add the data object for the whole table - storing the tr node. Note - no point in getting
                 * DOM based data if we are going to go and replace it with Ajax source data.
                 */
                if (oSettings.bDeferLoading || oSettings.sAjaxSource === null) {
                    nTr = oSettings.nTBody.firstChild;
                    while (nTr) {
                        if (nTr.nodeName.toUpperCase() == "TR") {
                            iThisIndex = oSettings.aoData.length;
                            nTr._DT_RowIndex = iThisIndex;
                            oSettings.aoData.push($.extend(true, {}, DataTable.models.oRow, {
                                "nTr": nTr
                            }));

                            oSettings.aiDisplayMaster.push(iThisIndex);
                            nTd = nTr.firstChild;
                            jInner = 0;
                            while (nTd) {
                                sNodeName = nTd.nodeName.toUpperCase();
                                if (sNodeName == "TD" || sNodeName == "TH") {
                                    _fnSetCellData(oSettings, iThisIndex, jInner, $.trim(nTd.innerHTML));
                                    jInner++;
                                }
                                nTd = nTd.nextSibling;
                            }
                        }
                        nTr = nTr.nextSibling;
                    }
                }

                /* Gather in the TD elements of the Table - note that this is basically the same as
                 * fnGetTdNodes, but that function takes account of hidden columns, which we haven't yet
                 * setup!
                 */
                nTrs = _fnGetTrNodes(oSettings);
                nTds = [];
                for (i = 0, iLen = nTrs.length ; i < iLen ; i++) {
                    nTd = nTrs[i].firstChild;
                    while (nTd) {
                        sNodeName = nTd.nodeName.toUpperCase();
                        if (sNodeName == "TD" || sNodeName == "TH") {
                            nTds.push(nTd);
                        }
                        nTd = nTd.nextSibling;
                    }
                }

                /* Now process by column */
                for (iColumn = 0, iColumns = oSettings.aoColumns.length ; iColumn < iColumns ; iColumn++) {
                    oCol = oSettings.aoColumns[iColumn];

                    /* Get the title of the column - unless there is a user set one */
                    if (oCol.sTitle === null) {
                        oCol.sTitle = oCol.nTh.innerHTML;
                    }

                    var
                        bAutoType = oCol._bAutoType,
                        bRender = typeof oCol.fnRender === 'function',
                        bClass = oCol.sClass !== null,
                        bVisible = oCol.bVisible,
                        nCell, sThisType, sRendered, sValType;

                    /* A single loop to rule them all (and be more efficient) */
                    if (bAutoType || bRender || bClass || !bVisible) {
                        for (iRow = 0, iRows = oSettings.aoData.length ; iRow < iRows ; iRow++) {
                            oData = oSettings.aoData[iRow];
                            nCell = nTds[(iRow * iColumns) + iColumn];

                            /* Type detection */
                            if (bAutoType && oCol.sType != 'string') {
                                sValType = _fnGetCellData(oSettings, iRow, iColumn, 'type');
                                if (sValType !== '') {
                                    sThisType = _fnDetectType(sValType);
                                    if (oCol.sType === null) {
                                        oCol.sType = sThisType;
                                    }
                                    else if (oCol.sType != sThisType &&
                                              oCol.sType != "html") {
                                        /* String is always the 'fallback' option */
                                        oCol.sType = 'string';
                                    }
                                }
                            }

                            if (oCol.mRender) {
                                // mRender has been defined, so we need to get the value and set it
                                nCell.innerHTML = _fnGetCellData(oSettings, iRow, iColumn, 'display');
                            }
                            else if (oCol.mData !== iColumn) {
                                // If mData is not the same as the column number, then we need to
                                // get the dev set value. If it is the column, no point in wasting
                                // time setting the value that is already there!
                                nCell.innerHTML = _fnGetCellData(oSettings, iRow, iColumn, 'display');
                            }

                            /* Rendering */
                            if (bRender) {
                                sRendered = _fnRender(oSettings, iRow, iColumn);
                                nCell.innerHTML = sRendered;
                                if (oCol.bUseRendered) {
                                    /* Use the rendered data for filtering / sorting */
                                    _fnSetCellData(oSettings, iRow, iColumn, sRendered);
                                }
                            }

                            /* Classes */
                            if (bClass) {
                                nCell.className += ' ' + oCol.sClass;
                            }

                            /* Column visibility */
                            if (!bVisible) {
                                oData._anHidden[iColumn] = nCell;
                                nCell.parentNode.removeChild(nCell);
                            }
                            else {
                                oData._anHidden[iColumn] = null;
                            }

                            if (oCol.fnCreatedCell) {
                                oCol.fnCreatedCell.call(oSettings.oInstance,
                                    nCell, _fnGetCellData(oSettings, iRow, iColumn, 'display'), oData._aData, iRow, iColumn
                                );
                            }
                        }
                    }
                }

                /* Row created callbacks */
                if (oSettings.aoRowCreatedCallback.length !== 0) {
                    for (i = 0, iLen = oSettings.aoData.length ; i < iLen ; i++) {
                        oData = oSettings.aoData[i];
                        _fnCallbackFire(oSettings, 'aoRowCreatedCallback', null, [oData.nTr, oData._aData, i]);
                    }
                }
            }


            /**
             * Take a TR element and convert it to an index in aoData
             *  @param {object} oSettings dataTables settings object
             *  @param {node} n the TR element to find
             *  @returns {int} index if the node is found, null if not
             *  @memberof DataTable#oApi
             */
            function _fnNodeToDataIndex(oSettings, n) {
                return (n._DT_RowIndex !== undefined) ? n._DT_RowIndex : null;
            }


            /**
             * Take a TD element and convert it into a column data index (not the visible index)
             *  @param {object} oSettings dataTables settings object
             *  @param {int} iRow The row number the TD/TH can be found in
             *  @param {node} n The TD/TH element to find
             *  @returns {int} index if the node is found, -1 if not
             *  @memberof DataTable#oApi
             */
            function _fnNodeToColumnIndex(oSettings, iRow, n) {
                var anCells = _fnGetTdNodes(oSettings, iRow);

                for (var i = 0, iLen = oSettings.aoColumns.length ; i < iLen ; i++) {
                    if (anCells[i] === n) {
                        return i;
                    }
                }
                return -1;
            }


            /**
             * Get an array of data for a given row from the internal data cache
             *  @param {object} oSettings dataTables settings object
             *  @param {int} iRow aoData row id
             *  @param {string} sSpecific data get type ('type' 'filter' 'sort')
             *  @param {array} aiColumns Array of column indexes to get data from
             *  @returns {array} Data array
             *  @memberof DataTable#oApi
             */
            function _fnGetRowData(oSettings, iRow, sSpecific, aiColumns) {
                var out = [];
                for (var i = 0, iLen = aiColumns.length ; i < iLen ; i++) {
                    out.push(_fnGetCellData(oSettings, iRow, aiColumns[i], sSpecific));
                }
                return out;
            }


            /**
             * Get the data for a given cell from the internal cache, taking into account data mapping
             *  @param {object} oSettings dataTables settings object
             *  @param {int} iRow aoData row id
             *  @param {int} iCol Column index
             *  @param {string} sSpecific data get type ('display', 'type' 'filter' 'sort')
             *  @returns {*} Cell data
             *  @memberof DataTable#oApi
             */
            function _fnGetCellData(oSettings, iRow, iCol, sSpecific) {
                var sData;
                var oCol = oSettings.aoColumns[iCol];
                var oData = oSettings.aoData[iRow]._aData;

                if ((sData = oCol.fnGetData(oData, sSpecific)) === undefined) {
                    if (oSettings.iDrawError != oSettings.iDraw && oCol.sDefaultContent === null) {
                        _fnLog(oSettings, 0, "Requested unknown parameter " +
                            (typeof oCol.mData == 'function' ? '{mData function}' : "'" + oCol.mData + "'") +
                            " from the data source for row " + iRow);
                        oSettings.iDrawError = oSettings.iDraw;
                    }
                    return oCol.sDefaultContent;
                }

                /* When the data source is null, we can use default column data */
                if (sData === null && oCol.sDefaultContent !== null) {
                    sData = oCol.sDefaultContent;
                }
                else if (typeof sData === 'function') {
                    /* If the data source is a function, then we run it and use the return */
                    return sData();
                }

                if (sSpecific == 'display' && sData === null) {
                    return '';
                }
                return sData;
            }


            /**
             * Set the value for a specific cell, into the internal data cache
             *  @param {object} oSettings dataTables settings object
             *  @param {int} iRow aoData row id
             *  @param {int} iCol Column index
             *  @param {*} val Value to set
             *  @memberof DataTable#oApi
             */
            function _fnSetCellData(oSettings, iRow, iCol, val) {
                var oCol = oSettings.aoColumns[iCol];
                var oData = oSettings.aoData[iRow]._aData;

                oCol.fnSetData(oData, val);
            }


            // Private variable that is used to match array syntax in the data property object
            var __reArray = /\[.*?\]$/;

            /**
             * Return a function that can be used to get data from a source object, taking
             * into account the ability to use nested objects as a source
             *  @param {string|int|function} mSource The data source for the object
             *  @returns {function} Data get function
             *  @memberof DataTable#oApi
             */
            function _fnGetObjectDataFn(mSource) {
                if (mSource === null) {
                    /* Give an empty string for rendering / sorting etc */
                    return function (data, type) {
                        return null;
                    };
                }
                else if (typeof mSource === 'function') {
                    return function (data, type, extra) {
                        return mSource(data, type, extra);
                    };
                }
                else if (typeof mSource === 'string' && (mSource.indexOf('.') !== -1 || mSource.indexOf('[') !== -1)) {
                    /* If there is a . in the source string then the data source is in a 
                     * nested object so we loop over the data for each level to get the next
                     * level down. On each loop we test for undefined, and if found immediately
                     * return. This allows entire objects to be missing and sDefaultContent to
                     * be used if defined, rather than throwing an error
                     */
                    var fetchData = function (data, type, src) {
                        var a = src.split('.');
                        var arrayNotation, out, innerSrc;

                        if (src !== "") {
                            for (var i = 0, iLen = a.length ; i < iLen ; i++) {
                                // Check if we are dealing with an array notation request
                                arrayNotation = a[i].match(__reArray);

                                if (arrayNotation) {
                                    a[i] = a[i].replace(__reArray, '');

                                    // Condition allows simply [] to be passed in
                                    if (a[i] !== "") {
                                        data = data[a[i]];
                                    }
                                    out = [];

                                    // Get the remainder of the nested object to get
                                    a.splice(0, i + 1);
                                    innerSrc = a.join('.');

                                    // Traverse each entry in the array getting the properties requested
                                    for (var j = 0, jLen = data.length ; j < jLen ; j++) {
                                        out.push(fetchData(data[j], type, innerSrc));
                                    }

                                    // If a string is given in between the array notation indicators, that
                                    // is used to join the strings together, otherwise an array is returned
                                    var join = arrayNotation[0].substring(1, arrayNotation[0].length - 1);
                                    data = (join === "") ? out : out.join(join);

                                    // The inner call to fetchData has already traversed through the remainder
                                    // of the source requested, so we exit from the loop
                                    break;
                                }

                                if (data === null || data[a[i]] === undefined) {
                                    return undefined;
                                }
                                data = data[a[i]];
                            }
                        }

                        return data;
                    };

                    return function (data, type) {
                        return fetchData(data, type, mSource);
                    };
                }
                else {
                    /* Array or flat object mapping */
                    return function (data, type) {
                        return data[mSource];
                    };
                }
            }


            /**
             * Return a function that can be used to set data from a source object, taking
             * into account the ability to use nested objects as a source
             *  @param {string|int|function} mSource The data source for the object
             *  @returns {function} Data set function
             *  @memberof DataTable#oApi
             */
            function _fnSetObjectDataFn(mSource) {
                if (mSource === null) {
                    /* Nothing to do when the data source is null */
                    return function (data, val) { };
                }
                else if (typeof mSource === 'function') {
                    return function (data, val) {
                        mSource(data, 'set', val);
                    };
                }
                else if (typeof mSource === 'string' && (mSource.indexOf('.') !== -1 || mSource.indexOf('[') !== -1)) {
                    /* Like the get, we need to get data from a nested object */
                    var setData = function (data, val, src) {
                        var a = src.split('.'), b;
                        var arrayNotation, o, innerSrc;

                        for (var i = 0, iLen = a.length - 1 ; i < iLen ; i++) {
                            // Check if we are dealing with an array notation request
                            arrayNotation = a[i].match(__reArray);

                            if (arrayNotation) {
                                a[i] = a[i].replace(__reArray, '');
                                data[a[i]] = [];

                                // Get the remainder of the nested object to set so we can recurse
                                b = a.slice();
                                b.splice(0, i + 1);
                                innerSrc = b.join('.');

                                // Traverse each entry in the array setting the properties requested
                                for (var j = 0, jLen = val.length ; j < jLen ; j++) {
                                    o = {};
                                    setData(o, val[j], innerSrc);
                                    data[a[i]].push(o);
                                }

                                // The inner call to setData has already traversed through the remainder
                                // of the source and has set the data, thus we can exit here
                                return;
                            }

                            // If the nested object doesn't currently exist - since we are
                            // trying to set the value - create it
                            if (data[a[i]] === null || data[a[i]] === undefined) {
                                data[a[i]] = {};
                            }
                            data = data[a[i]];
                        }

                        // If array notation is used, we just want to strip it and use the property name
                        // and assign the value. If it isn't used, then we get the result we want anyway
                        data[a[a.length - 1].replace(__reArray, '')] = val;
                    };

                    return function (data, val) {
                        return setData(data, val, mSource);
                    };
                }
                else {
                    /* Array or flat object mapping */
                    return function (data, val) {
                        data[mSource] = val;
                    };
                }
            }


            /**
             * Return an array with the full table data
             *  @param {object} oSettings dataTables settings object
             *  @returns array {array} aData Master data array
             *  @memberof DataTable#oApi
             */
            function _fnGetDataMaster(oSettings) {
                var aData = [];
                var iLen = oSettings.aoData.length;
                for (var i = 0 ; i < iLen; i++) {
                    aData.push(oSettings.aoData[i]._aData);
                }
                return aData;
            }


            /**
             * Nuke the table
             *  @param {object} oSettings dataTables settings object
             *  @memberof DataTable#oApi
             */
            function _fnClearTable(oSettings) {
                oSettings.aoData.splice(0, oSettings.aoData.length);
                oSettings.aiDisplayMaster.splice(0, oSettings.aiDisplayMaster.length);
                oSettings.aiDisplay.splice(0, oSettings.aiDisplay.length);
                _fnCalculateEnd(oSettings);
            }


            /**
            * Take an array of integers (index array) and remove a target integer (value - not 
            * the key!)
            *  @param {array} a Index array to target
            *  @param {int} iTarget value to find
            *  @memberof DataTable#oApi
            */
            function _fnDeleteIndex(a, iTarget) {
                var iTargetIndex = -1;

                for (var i = 0, iLen = a.length ; i < iLen ; i++) {
                    if (a[i] == iTarget) {
                        iTargetIndex = i;
                    }
                    else if (a[i] > iTarget) {
                        a[i]--;
                    }
                }

                if (iTargetIndex != -1) {
                    a.splice(iTargetIndex, 1);
                }
            }


            /**
            * Call the developer defined fnRender function for a given cell (row/column) with
            * the required parameters and return the result.
            *  @param {object} oSettings dataTables settings object
            *  @param {int} iRow aoData index for the row
            *  @param {int} iCol aoColumns index for the column
            *  @returns {*} Return of the developer's fnRender function
            *  @memberof DataTable#oApi
            */
            function _fnRender(oSettings, iRow, iCol) {
                var oCol = oSettings.aoColumns[iCol];

                return oCol.fnRender({
                    "iDataRow": iRow,
                    "iDataColumn": iCol,
                    "oSettings": oSettings,
                    "aData": oSettings.aoData[iRow]._aData,
                    "mDataProp": oCol.mData
                }, _fnGetCellData(oSettings, iRow, iCol, 'display'));
            }
            /**
             * Create a new TR element (and it's TD children) for a row
             *  @param {object} oSettings dataTables settings object
             *  @param {int} iRow Row to consider
             *  @memberof DataTable#oApi
             */
            function _fnCreateTr(oSettings, iRow) {
                var oData = oSettings.aoData[iRow];
                var nTd;

                if (oData.nTr === null) {
                    oData.nTr = document.createElement('tr');

                    /* Use a private property on the node to allow reserve mapping from the node
                     * to the aoData array for fast look up
                     */
                    oData.nTr._DT_RowIndex = iRow;

                    /* Special parameters can be given by the data source to be used on the row */
                    if (oData._aData.DT_RowId) {
                        oData.nTr.id = oData._aData.DT_RowId;
                    }

                    if (oData._aData.DT_RowClass) {
                        oData.nTr.className = oData._aData.DT_RowClass;
                    }

                    /* Process each column */
                    for (var i = 0, iLen = oSettings.aoColumns.length ; i < iLen ; i++) {
                        var oCol = oSettings.aoColumns[i];
                        nTd = document.createElement(oCol.sCellType);

                        /* Render if needed - if bUseRendered is true then we already have the rendered
                         * value in the data source - so can just use that
                         */
                        nTd.innerHTML = (typeof oCol.fnRender === 'function' && (!oCol.bUseRendered || oCol.mData === null)) ?
                            _fnRender(oSettings, iRow, i) :
                            _fnGetCellData(oSettings, iRow, i, 'display');

                        /* Add user defined class */
                        if (oCol.sClass !== null) {
                            nTd.className = oCol.sClass;
                        }

                        if (oCol.bVisible) {
                            oData.nTr.appendChild(nTd);
                            oData._anHidden[i] = null;
                        }
                        else {
                            oData._anHidden[i] = nTd;
                        }

                        if (oCol.fnCreatedCell) {
                            oCol.fnCreatedCell.call(oSettings.oInstance,
                                nTd, _fnGetCellData(oSettings, iRow, i, 'display'), oData._aData, iRow, i
                            );
                        }
                    }

                    _fnCallbackFire(oSettings, 'aoRowCreatedCallback', null, [oData.nTr, oData._aData, iRow]);
                }
            }


            /**
             * Create the HTML header for the table
             *  @param {object} oSettings dataTables settings object
             *  @memberof DataTable#oApi
             */
            function _fnBuildHead(oSettings) {
                var i, nTh, iLen, j, jLen;
                var iThs = $('th, td', oSettings.nTHead).length;
                var iCorrector = 0;
                var jqChildren;

                /* If there is a header in place - then use it - otherwise it's going to get nuked... */
                if (iThs !== 0) {
                    /* We've got a thead from the DOM, so remove hidden columns and apply width to vis cols */
                    for (i = 0, iLen = oSettings.aoColumns.length ; i < iLen ; i++) {
                        nTh = oSettings.aoColumns[i].nTh;
                        nTh.setAttribute('role', 'columnheader');
                        if (oSettings.aoColumns[i].bSortable) {
                            nTh.setAttribute('tabindex', oSettings.iTabIndex);
                            nTh.setAttribute('aria-controls', oSettings.sTableId);
                        }

                        if (oSettings.aoColumns[i].sClass !== null) {
                            $(nTh).addClass(oSettings.aoColumns[i].sClass);
                        }

                        /* Set the title of the column if it is user defined (not what was auto detected) */
                        if (oSettings.aoColumns[i].sTitle != nTh.innerHTML) {
                            nTh.innerHTML = oSettings.aoColumns[i].sTitle;
                        }
                    }
                }
                else {
                    /* We don't have a header in the DOM - so we are going to have to create one */
                    var nTr = document.createElement("tr");

                    for (i = 0, iLen = oSettings.aoColumns.length ; i < iLen ; i++) {
                        nTh = oSettings.aoColumns[i].nTh;
                        nTh.innerHTML = oSettings.aoColumns[i].sTitle;
                        nTh.setAttribute('tabindex', '0');

                        if (oSettings.aoColumns[i].sClass !== null) {
                            $(nTh).addClass(oSettings.aoColumns[i].sClass);
                        }

                        nTr.appendChild(nTh);
                    }
                    $(oSettings.nTHead).html('')[0].appendChild(nTr);
                    _fnDetectHeader(oSettings.aoHeader, oSettings.nTHead);
                }

                /* ARIA role for the rows */
                $(oSettings.nTHead).children('tr').attr('role', 'row');

                /* Add the extra markup needed by jQuery UI's themes */
                if (oSettings.bJUI) {
                    for (i = 0, iLen = oSettings.aoColumns.length ; i < iLen ; i++) {
                        nTh = oSettings.aoColumns[i].nTh;

                        var nDiv = document.createElement('div');
                        nDiv.className = oSettings.oClasses.sSortJUIWrapper;
                        $(nTh).contents().appendTo(nDiv);

                        var nSpan = document.createElement('span');
                        nSpan.className = oSettings.oClasses.sSortIcon;
                        nDiv.appendChild(nSpan);
                        nTh.appendChild(nDiv);
                    }
                }

                if (oSettings.oFeatures.bSort) {
                    for (i = 0 ; i < oSettings.aoColumns.length ; i++) {
                        if (oSettings.aoColumns[i].bSortable !== false) {
                            _fnSortAttachListener(oSettings, oSettings.aoColumns[i].nTh, i);
                        }
                        else {
                            $(oSettings.aoColumns[i].nTh).addClass(oSettings.oClasses.sSortableNone);
                        }
                    }
                }

                /* Deal with the footer - add classes if required */
                if (oSettings.oClasses.sFooterTH !== "") {
                    $(oSettings.nTFoot).children('tr').children('th').addClass(oSettings.oClasses.sFooterTH);
                }

                /* Cache the footer elements */
                if (oSettings.nTFoot !== null) {
                    var anCells = _fnGetUniqueThs(oSettings, null, oSettings.aoFooter);
                    for (i = 0, iLen = oSettings.aoColumns.length ; i < iLen ; i++) {
                        if (anCells[i]) {
                            oSettings.aoColumns[i].nTf = anCells[i];
                            if (oSettings.aoColumns[i].sClass) {
                                $(anCells[i]).addClass(oSettings.aoColumns[i].sClass);
                            }
                        }
                    }
                }
            }


            /**
             * Draw the header (or footer) element based on the column visibility states. The
             * methodology here is to use the layout array from _fnDetectHeader, modified for
             * the instantaneous column visibility, to construct the new layout. The grid is
             * traversed over cell at a time in a rows x columns grid fashion, although each 
             * cell insert can cover multiple elements in the grid - which is tracks using the
             * aApplied array. Cell inserts in the grid will only occur where there isn't
             * already a cell in that position.
             *  @param {object} oSettings dataTables settings object
             *  @param array {objects} aoSource Layout array from _fnDetectHeader
             *  @param {boolean} [bIncludeHidden=false] If true then include the hidden columns in the calc, 
             *  @memberof DataTable#oApi
             */
            function _fnDrawHead(oSettings, aoSource, bIncludeHidden) {
                var i, iLen, j, jLen, k, kLen, n, nLocalTr;
                var aoLocal = [];
                var aApplied = [];
                var iColumns = oSettings.aoColumns.length;
                var iRowspan, iColspan;

                if (bIncludeHidden === undefined) {
                    bIncludeHidden = false;
                }

                /* Make a copy of the master layout array, but without the visible columns in it */
                for (i = 0, iLen = aoSource.length ; i < iLen ; i++) {
                    aoLocal[i] = aoSource[i].slice();
                    aoLocal[i].nTr = aoSource[i].nTr;

                    /* Remove any columns which are currently hidden */
                    for (j = iColumns - 1 ; j >= 0 ; j--) {
                        if (!oSettings.aoColumns[j].bVisible && !bIncludeHidden) {
                            aoLocal[i].splice(j, 1);
                        }
                    }

                    /* Prep the applied array - it needs an element for each row */
                    aApplied.push([]);
                }

                for (i = 0, iLen = aoLocal.length ; i < iLen ; i++) {
                    nLocalTr = aoLocal[i].nTr;

                    /* All cells are going to be replaced, so empty out the row */
                    if (nLocalTr) {
                        while ((n = nLocalTr.firstChild)) {
                            nLocalTr.removeChild(n);
                        }
                    }

                    for (j = 0, jLen = aoLocal[i].length ; j < jLen ; j++) {
                        iRowspan = 1;
                        iColspan = 1;

                        /* Check to see if there is already a cell (row/colspan) covering our target
                         * insert point. If there is, then there is nothing to do.
                         */
                        if (aApplied[i][j] === undefined) {
                            nLocalTr.appendChild(aoLocal[i][j].cell);
                            aApplied[i][j] = 1;

                            /* Expand the cell to cover as many rows as needed */
                            while (aoLocal[i + iRowspan] !== undefined &&
                                    aoLocal[i][j].cell == aoLocal[i + iRowspan][j].cell) {
                                aApplied[i + iRowspan][j] = 1;
                                iRowspan++;
                            }

                            /* Expand the cell to cover as many columns as needed */
                            while (aoLocal[i][j + iColspan] !== undefined &&
                                    aoLocal[i][j].cell == aoLocal[i][j + iColspan].cell) {
                                /* Must update the applied array over the rows for the columns */
                                for (k = 0 ; k < iRowspan ; k++) {
                                    aApplied[i + k][j + iColspan] = 1;
                                }
                                iColspan++;
                            }

                            /* Do the actual expansion in the DOM */
                            aoLocal[i][j].cell.rowSpan = iRowspan;
                            aoLocal[i][j].cell.colSpan = iColspan;
                        }
                    }
                }
            }


            /**
             * Insert the required TR nodes into the table for display
             *  @param {object} oSettings dataTables settings object
             *  @memberof DataTable#oApi
             */
            function _fnDraw(oSettings) {
                /* Provide a pre-callback function which can be used to cancel the draw is false is returned */
                var aPreDraw = _fnCallbackFire(oSettings, 'aoPreDrawCallback', 'preDraw', [oSettings]);
                if ($.inArray(false, aPreDraw) !== -1) {
                    _fnProcessingDisplay(oSettings, false);
                    return;
                }

                var i, iLen, n;
                var anRows = [];
                var iRowCount = 0;
                var iStripes = oSettings.asStripeClasses.length;
                var iOpenRows = oSettings.aoOpenRows.length;

                oSettings.bDrawing = true;

                /* Check and see if we have an initial draw position from state saving */
                if (oSettings.iInitDisplayStart !== undefined && oSettings.iInitDisplayStart != -1) {
                    if (oSettings.oFeatures.bServerSide) {
                        oSettings._iDisplayStart = oSettings.iInitDisplayStart;
                    }
                    else {
                        oSettings._iDisplayStart = (oSettings.iInitDisplayStart >= oSettings.fnRecordsDisplay()) ?
                            0 : oSettings.iInitDisplayStart;
                    }
                    oSettings.iInitDisplayStart = -1;
                    _fnCalculateEnd(oSettings);
                }

                /* Server-side processing draw intercept */
                if (oSettings.bDeferLoading) {
                    oSettings.bDeferLoading = false;
                    oSettings.iDraw++;
                }
                else if (!oSettings.oFeatures.bServerSide) {
                    oSettings.iDraw++;
                }
                else if (!oSettings.bDestroying && !_fnAjaxUpdate(oSettings)) {
                    return;
                }

                if (oSettings.aiDisplay.length !== 0) {
                    var iStart = oSettings._iDisplayStart;
                    var iEnd = oSettings._iDisplayEnd;

                    if (oSettings.oFeatures.bServerSide) {
                        iStart = 0;
                        iEnd = oSettings.aoData.length;
                    }

                    for (var j = iStart ; j < iEnd ; j++) {
                        var aoData = oSettings.aoData[oSettings.aiDisplay[j]];
                        if (aoData.nTr === null) {
                            _fnCreateTr(oSettings, oSettings.aiDisplay[j]);
                        }

                        var nRow = aoData.nTr;

                        /* Remove the old striping classes and then add the new one */
                        if (iStripes !== 0) {
                            var sStripe = oSettings.asStripeClasses[iRowCount % iStripes];
                            if (aoData._sRowStripe != sStripe) {
                                $(nRow).removeClass(aoData._sRowStripe).addClass(sStripe);
                                aoData._sRowStripe = sStripe;
                            }
                        }

                        /* Row callback functions - might want to manipulate the row */
                        _fnCallbackFire(oSettings, 'aoRowCallback', null,
                            [nRow, oSettings.aoData[oSettings.aiDisplay[j]]._aData, iRowCount, j]);

                        anRows.push(nRow);
                        iRowCount++;

                        /* If there is an open row - and it is attached to this parent - attach it on redraw */
                        if (iOpenRows !== 0) {
                            for (var k = 0 ; k < iOpenRows ; k++) {
                                if (nRow == oSettings.aoOpenRows[k].nParent) {
                                    anRows.push(oSettings.aoOpenRows[k].nTr);
                                    break;
                                }
                            }
                        }
                    }
                }
                else {
                    /* Table is empty - create a row with an empty message in it */
                    anRows[0] = document.createElement('tr');

                    if (oSettings.asStripeClasses[0]) {
                        anRows[0].className = oSettings.asStripeClasses[0];
                    }

                    var oLang = oSettings.oLanguage;
                    var sZero = oLang.sZeroRecords;
                    if (oSettings.iDraw == 1 && oSettings.sAjaxSource !== null && !oSettings.oFeatures.bServerSide) {
                        sZero = oLang.sLoadingRecords;
                    }
                    else if (oLang.sEmptyTable && oSettings.fnRecordsTotal() === 0) {
                        sZero = oLang.sEmptyTable;
                    }

                    var nTd = document.createElement('td');
                    nTd.setAttribute('valign', "top");
                    nTd.colSpan = _fnVisbleColumns(oSettings);
                    nTd.className = oSettings.oClasses.sRowEmpty;
                    nTd.innerHTML = _fnInfoMacros(oSettings, sZero);

                    anRows[iRowCount].appendChild(nTd);
                }

                /* Header and footer callbacks */
                _fnCallbackFire(oSettings, 'aoHeaderCallback', 'header', [$(oSettings.nTHead).children('tr')[0],
                    _fnGetDataMaster(oSettings), oSettings._iDisplayStart, oSettings.fnDisplayEnd(), oSettings.aiDisplay]);

                _fnCallbackFire(oSettings, 'aoFooterCallback', 'footer', [$(oSettings.nTFoot).children('tr')[0],
                    _fnGetDataMaster(oSettings), oSettings._iDisplayStart, oSettings.fnDisplayEnd(), oSettings.aiDisplay]);

                /* 
                 * Need to remove any old row from the display - note we can't just empty the tbody using
                 * $().html('') since this will unbind the jQuery event handlers (even although the node 
                 * still exists!) - equally we can't use innerHTML, since IE throws an exception.
                 */
                var
                    nAddFrag = document.createDocumentFragment(),
                    nRemoveFrag = document.createDocumentFragment(),
                    nBodyPar, nTrs;

                if (oSettings.nTBody) {
                    nBodyPar = oSettings.nTBody.parentNode;
                    nRemoveFrag.appendChild(oSettings.nTBody);

                    /* When doing infinite scrolling, only remove child rows when sorting, filtering or start
                     * up. When not infinite scroll, always do it.
                     */
                    if (!oSettings.oScroll.bInfinite || !oSettings._bInitComplete ||
                        oSettings.bSorted || oSettings.bFiltered) {
                        while ((n = oSettings.nTBody.firstChild)) {
                            oSettings.nTBody.removeChild(n);
                        }
                    }

                    /* Put the draw table into the dom */
                    for (i = 0, iLen = anRows.length ; i < iLen ; i++) {
                        nAddFrag.appendChild(anRows[i]);
                    }

                    oSettings.nTBody.appendChild(nAddFrag);
                    if (nBodyPar !== null) {
                        nBodyPar.appendChild(oSettings.nTBody);
                    }
                }

                /* Call all required callback functions for the end of a draw */
                _fnCallbackFire(oSettings, 'aoDrawCallback', 'draw', [oSettings]);

                /* Draw is complete, sorting and filtering must be as well */
                oSettings.bSorted = false;
                oSettings.bFiltered = false;
                oSettings.bDrawing = false;

                if (oSettings.oFeatures.bServerSide) {
                    _fnProcessingDisplay(oSettings, false);
                    if (!oSettings._bInitComplete) {
                        _fnInitComplete(oSettings);
                    }
                }
            }


            /**
             * Redraw the table - taking account of the various features which are enabled
             *  @param {object} oSettings dataTables settings object
             *  @memberof DataTable#oApi
             */
            function _fnReDraw(oSettings) {
                if (oSettings.oFeatures.bSort) {
                    /* Sorting will refilter and draw for us */
                    _fnSort(oSettings, oSettings.oPreviousSearch);
                }
                else if (oSettings.oFeatures.bFilter) {
                    /* Filtering will redraw for us */
                    _fnFilterComplete(oSettings, oSettings.oPreviousSearch);
                }
                else {
                    _fnCalculateEnd(oSettings);
                    _fnDraw(oSettings);
                }
            }


            /**
             * Add the options to the page HTML for the table
             *  @param {object} oSettings dataTables settings object
             *  @memberof DataTable#oApi
             */
            function _fnAddOptionsHtml(oSettings) {
                /*
                 * Create a temporary, empty, div which we can later on replace with what we have generated
                 * we do it this way to rendering the 'options' html offline - speed :-)
                 */
                var nHolding = $('<div></div>')[0];
                oSettings.nTable.parentNode.insertBefore(nHolding, oSettings.nTable);

                /* 
                 * All DataTables are wrapped in a div
                 */
                oSettings.nTableWrapper = $('<div id="' + oSettings.sTableId + '_wrapper" class="' + oSettings.oClasses.sWrapper + '" role="grid"></div>')[0];
                oSettings.nTableReinsertBefore = oSettings.nTable.nextSibling;

                /* Track where we want to insert the option */
                var nInsertNode = oSettings.nTableWrapper;

                /* Loop over the user set positioning and place the elements as needed */
                var aDom = oSettings.sDom.split('');
                var nTmp, iPushFeature, cOption, nNewNode, cNext, sAttr, j;
                for (var i = 0 ; i < aDom.length ; i++) {
                    iPushFeature = 0;
                    cOption = aDom[i];

                    if (cOption == '<') {
                        /* New container div */
                        nNewNode = $('<div></div>')[0];

                        /* Check to see if we should append an id and/or a class name to the container */
                        cNext = aDom[i + 1];
                        if (cNext == "'" || cNext == '"') {
                            sAttr = "";
                            j = 2;
                            while (aDom[i + j] != cNext) {
                                sAttr += aDom[i + j];
                                j++;
                            }

                            /* Replace jQuery UI constants */
                            if (sAttr == "H") {
                                sAttr = oSettings.oClasses.sJUIHeader;
                            }
                            else if (sAttr == "F") {
                                sAttr = oSettings.oClasses.sJUIFooter;
                            }

                            /* The attribute can be in the format of "#id.class", "#id" or "class" This logic
                             * breaks the string into parts and applies them as needed
                             */
                            if (sAttr.indexOf('.') != -1) {
                                var aSplit = sAttr.split('.');
                                nNewNode.id = aSplit[0].substr(1, aSplit[0].length - 1);
                                nNewNode.className = aSplit[1];
                            }
                            else if (sAttr.charAt(0) == "#") {
                                nNewNode.id = sAttr.substr(1, sAttr.length - 1);
                            }
                            else {
                                nNewNode.className = sAttr;
                            }

                            i += j; /* Move along the position array */
                        }

                        nInsertNode.appendChild(nNewNode);
                        nInsertNode = nNewNode;
                    }
                    else if (cOption == '>') {
                        /* End container div */
                        nInsertNode = nInsertNode.parentNode;
                    }
                    else if (cOption == 'l' && oSettings.oFeatures.bPaginate && oSettings.oFeatures.bLengthChange) {
                        /* Length */
                        nTmp = _fnFeatureHtmlLength(oSettings);
                        iPushFeature = 1;
                    }
                    else if (cOption == 'f' && oSettings.oFeatures.bFilter) {
                        /* Filter */
                        nTmp = _fnFeatureHtmlFilter(oSettings);
                        iPushFeature = 1;
                    }
                    else if (cOption == 'r' && oSettings.oFeatures.bProcessing) {
                        /* pRocessing */
                        nTmp = _fnFeatureHtmlProcessing(oSettings);
                        iPushFeature = 1;
                    }
                    else if (cOption == 't') {
                        /* Table */
                        nTmp = _fnFeatureHtmlTable(oSettings);
                        iPushFeature = 1;
                    }
                    else if (cOption == 'i' && oSettings.oFeatures.bInfo) {
                        /* Info */
                        nTmp = _fnFeatureHtmlInfo(oSettings);
                        iPushFeature = 1;
                    }
                    else if (cOption == 'p' && oSettings.oFeatures.bPaginate) {
                        /* Pagination */
                        nTmp = _fnFeatureHtmlPaginate(oSettings);
                        iPushFeature = 1;
                    }
                    else if (DataTable.ext.aoFeatures.length !== 0) {
                        /* Plug-in features */
                        var aoFeatures = DataTable.ext.aoFeatures;
                        for (var k = 0, kLen = aoFeatures.length ; k < kLen ; k++) {
                            if (cOption == aoFeatures[k].cFeature) {
                                nTmp = aoFeatures[k].fnInit(oSettings);
                                if (nTmp) {
                                    iPushFeature = 1;
                                }
                                break;
                            }
                        }
                    }

                    /* Add to the 2D features array */
                    if (iPushFeature == 1 && nTmp !== null) {
                        if (typeof oSettings.aanFeatures[cOption] !== 'object') {
                            oSettings.aanFeatures[cOption] = [];
                        }
                        oSettings.aanFeatures[cOption].push(nTmp);
                        nInsertNode.appendChild(nTmp);
                    }
                }

                /* Built our DOM structure - replace the holding div with what we want */
                nHolding.parentNode.replaceChild(oSettings.nTableWrapper, nHolding);
            }


            /**
             * Use the DOM source to create up an array of header cells. The idea here is to
             * create a layout grid (array) of rows x columns, which contains a reference
             * to the cell that that point in the grid (regardless of col/rowspan), such that
             * any column / row could be removed and the new grid constructed
             *  @param array {object} aLayout Array to store the calculated layout in
             *  @param {node} nThead The header/footer element for the table
             *  @memberof DataTable#oApi
             */
            function _fnDetectHeader(aLayout, nThead) {
                var nTrs = $(nThead).children('tr');
                var nTr, nCell;
                var i, k, l, iLen, jLen, iColShifted, iColumn, iColspan, iRowspan;
                var bUnique;
                var fnShiftCol = function (a, i, j) {
                    var k = a[i];
                    while (k[j]) {
                        j++;
                    }
                    return j;
                };

                aLayout.splice(0, aLayout.length);

                /* We know how many rows there are in the layout - so prep it */
                for (i = 0, iLen = nTrs.length ; i < iLen ; i++) {
                    aLayout.push([]);
                }

                /* Calculate a layout array */
                for (i = 0, iLen = nTrs.length ; i < iLen ; i++) {
                    nTr = nTrs[i];
                    iColumn = 0;

                    /* For every cell in the row... */
                    nCell = nTr.firstChild;
                    while (nCell) {
                        if (nCell.nodeName.toUpperCase() == "TD" ||
                             nCell.nodeName.toUpperCase() == "TH") {
                            /* Get the col and rowspan attributes from the DOM and sanitise them */
                            iColspan = nCell.getAttribute('colspan') * 1;
                            iRowspan = nCell.getAttribute('rowspan') * 1;
                            iColspan = (!iColspan || iColspan === 0 || iColspan === 1) ? 1 : iColspan;
                            iRowspan = (!iRowspan || iRowspan === 0 || iRowspan === 1) ? 1 : iRowspan;

                            /* There might be colspan cells already in this row, so shift our target 
                             * accordingly
                             */
                            iColShifted = fnShiftCol(aLayout, i, iColumn);

                            /* Cache calculation for unique columns */
                            bUnique = iColspan === 1 ? true : false;

                            /* If there is col / rowspan, copy the information into the layout grid */
                            for (l = 0 ; l < iColspan ; l++) {
                                for (k = 0 ; k < iRowspan ; k++) {
                                    aLayout[i + k][iColShifted + l] = {
                                        "cell": nCell,
                                        "unique": bUnique
                                    };
                                    aLayout[i + k].nTr = nTr;
                                }
                            }
                        }
                        nCell = nCell.nextSibling;
                    }
                }
            }


            /**
             * Get an array of unique th elements, one for each column
             *  @param {object} oSettings dataTables settings object
             *  @param {node} nHeader automatically detect the layout from this node - optional
             *  @param {array} aLayout thead/tfoot layout from _fnDetectHeader - optional
             *  @returns array {node} aReturn list of unique th's
             *  @memberof DataTable#oApi
             */
            function _fnGetUniqueThs(oSettings, nHeader, aLayout) {
                var aReturn = [];
                if (!aLayout) {
                    aLayout = oSettings.aoHeader;
                    if (nHeader) {
                        aLayout = [];
                        _fnDetectHeader(aLayout, nHeader);
                    }
                }

                for (var i = 0, iLen = aLayout.length ; i < iLen ; i++) {
                    for (var j = 0, jLen = aLayout[i].length ; j < jLen ; j++) {
                        if (aLayout[i][j].unique &&
                             (!aReturn[j] || !oSettings.bSortCellsTop)) {
                            aReturn[j] = aLayout[i][j].cell;
                        }
                    }
                }

                return aReturn;
            }



            /**
             * Update the table using an Ajax call
             *  @param {object} oSettings dataTables settings object
             *  @returns {boolean} Block the table drawing or not
             *  @memberof DataTable#oApi
             */
            function _fnAjaxUpdate(oSettings) {
                if (oSettings.bAjaxDataGet) {
                    oSettings.iDraw++;
                    _fnProcessingDisplay(oSettings, true);
                    var iColumns = oSettings.aoColumns.length;
                    var aoData = _fnAjaxParameters(oSettings);
                    _fnServerParams(oSettings, aoData);

                    oSettings.fnServerData.call(oSettings.oInstance, oSettings.sAjaxSource, aoData,
                        function (json) {
                            _fnAjaxUpdateDraw(oSettings, json);
                        }, oSettings);
                    return false;
                }
                else {
                    return true;
                }
            }


            /**
             * Build up the parameters in an object needed for a server-side processing request
             *  @param {object} oSettings dataTables settings object
             *  @returns {bool} block the table drawing or not
             *  @memberof DataTable#oApi
             */
            function _fnAjaxParameters(oSettings) {
                var iColumns = oSettings.aoColumns.length;
                var aoData = [], mDataProp, aaSort, aDataSort;
                var i, j;

                aoData.push({ "name": "sEcho", "value": oSettings.iDraw });
                aoData.push({ "name": "iColumns", "value": iColumns });
                aoData.push({ "name": "sColumns", "value": _fnColumnOrdering(oSettings) });
                aoData.push({ "name": "iDisplayStart", "value": oSettings._iDisplayStart });
                aoData.push({
                    "name": "iDisplayLength", "value": oSettings.oFeatures.bPaginate !== false ?
                        oSettings._iDisplayLength : -1
                });

                for (i = 0 ; i < iColumns ; i++) {
                    mDataProp = oSettings.aoColumns[i].mData;
                    aoData.push({ "name": "mDataProp_" + i, "value": typeof (mDataProp) === "function" ? 'function' : mDataProp });
                }

                /* Filtering */
                if (oSettings.oFeatures.bFilter !== false) {
                    aoData.push({ "name": "sSearch", "value": oSettings.oPreviousSearch.sSearch });
                    aoData.push({ "name": "bRegex", "value": oSettings.oPreviousSearch.bRegex });
                    for (i = 0 ; i < iColumns ; i++) {
                        aoData.push({ "name": "sSearch_" + i, "value": oSettings.aoPreSearchCols[i].sSearch });
                        aoData.push({ "name": "bRegex_" + i, "value": oSettings.aoPreSearchCols[i].bRegex });
                        aoData.push({ "name": "bSearchable_" + i, "value": oSettings.aoColumns[i].bSearchable });
                    }
                }

                /* Sorting */
                if (oSettings.oFeatures.bSort !== false) {
                    var iCounter = 0;

                    aaSort = (oSettings.aaSortingFixed !== null) ?
                        oSettings.aaSortingFixed.concat(oSettings.aaSorting) :
                        oSettings.aaSorting.slice();

                    for (i = 0 ; i < aaSort.length ; i++) {
                        aDataSort = oSettings.aoColumns[aaSort[i][0]].aDataSort;

                        for (j = 0 ; j < aDataSort.length ; j++) {
                            aoData.push({ "name": "iSortCol_" + iCounter, "value": aDataSort[j] });
                            aoData.push({ "name": "sSortDir_" + iCounter, "value": aaSort[i][1] });
                            iCounter++;
                        }
                    }
                    aoData.push({ "name": "iSortingCols", "value": iCounter });

                    for (i = 0 ; i < iColumns ; i++) {
                        aoData.push({ "name": "bSortable_" + i, "value": oSettings.aoColumns[i].bSortable });
                    }
                }

                return aoData;
            }


            /**
             * Add Ajax parameters from plug-ins
             *  @param {object} oSettings dataTables settings object
             *  @param array {objects} aoData name/value pairs to send to the server
             *  @memberof DataTable#oApi
             */
            function _fnServerParams(oSettings, aoData) {
                _fnCallbackFire(oSettings, 'aoServerParams', 'serverParams', [aoData]);
            }


            /**
             * Data the data from the server (nuking the old) and redraw the table
             *  @param {object} oSettings dataTables settings object
             *  @param {object} json json data return from the server.
             *  @param {string} json.sEcho Tracking flag for DataTables to match requests
             *  @param {int} json.iTotalRecords Number of records in the data set, not accounting for filtering
             *  @param {int} json.iTotalDisplayRecords Number of records in the data set, accounting for filtering
             *  @param {array} json.aaData The data to display on this page
             *  @param {string} [json.sColumns] Column ordering (sName, comma separated)
             *  @memberof DataTable#oApi
             */
            function _fnAjaxUpdateDraw(oSettings, json) {
                if (json.sEcho !== undefined) {
                    /* Protect against old returns over-writing a new one. Possible when you get
                     * very fast interaction, and later queries are completed much faster
                     */
                    if (json.sEcho * 1 < oSettings.iDraw) {
                        return;
                    }
                    else {
                        oSettings.iDraw = json.sEcho * 1;
                    }
                }

                if (!oSettings.oScroll.bInfinite ||
                       (oSettings.oScroll.bInfinite && (oSettings.bSorted || oSettings.bFiltered))) {
                    _fnClearTable(oSettings);
                }
                oSettings._iRecordsTotal = parseInt(json.iTotalRecords, 10);
                oSettings._iRecordsDisplay = parseInt(json.iTotalDisplayRecords, 10);

                /* Determine if reordering is required */
                var sOrdering = _fnColumnOrdering(oSettings);
                var bReOrder = (json.sColumns !== undefined && sOrdering !== "" && json.sColumns != sOrdering);
                var aiIndex;
                if (bReOrder) {
                    aiIndex = _fnReOrderIndex(oSettings, json.sColumns);
                }

                var aData = _fnGetObjectDataFn(oSettings.sAjaxDataProp)(json);
                for (var i = 0, iLen = aData.length ; i < iLen ; i++) {
                    if (bReOrder) {
                        /* If we need to re-order, then create a new array with the correct order and add it */
                        var aDataSorted = [];
                        for (var j = 0, jLen = oSettings.aoColumns.length ; j < jLen ; j++) {
                            aDataSorted.push(aData[i][aiIndex[j]]);
                        }
                        _fnAddData(oSettings, aDataSorted);
                    }
                    else {
                        /* No re-order required, sever got it "right" - just straight add */
                        _fnAddData(oSettings, aData[i]);
                    }
                }
                oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();

                oSettings.bAjaxDataGet = false;
                _fnDraw(oSettings);
                oSettings.bAjaxDataGet = true;
                _fnProcessingDisplay(oSettings, false);
            }



            /**
             * Generate the node required for filtering text
             *  @returns {node} Filter control element
             *  @param {object} oSettings dataTables settings object
             *  @memberof DataTable#oApi
             */
            function _fnFeatureHtmlFilter(oSettings) {
                var oPreviousSearch = oSettings.oPreviousSearch;

                var sSearchStr = oSettings.oLanguage.sSearch;
                sSearchStr = (sSearchStr.indexOf('_INPUT_') !== -1) ?
                  sSearchStr.replace('_INPUT_', '<input type="text" />') :
                  sSearchStr === "" ? '<input type="text" />' : sSearchStr + ' <input type="text" />';

                var nFilter = document.createElement('div');
                nFilter.className = oSettings.oClasses.sFilter;
                nFilter.innerHTML = '<label>' + sSearchStr + '</label>';
                if (!oSettings.aanFeatures.f) {
                    nFilter.id = oSettings.sTableId + '_filter';
                }

                var jqFilter = $('input[type="text"]', nFilter);

                // Store a reference to the input element, so other input elements could be
                // added to the filter wrapper if needed (submit button for example)
                nFilter._DT_Input = jqFilter[0];

                jqFilter.val(oPreviousSearch.sSearch.replace('"', '&quot;'));
                jqFilter.bind('keyup.DT', function (e) {
                    /* Update all other filter input elements for the new display */
                    var n = oSettings.aanFeatures.f;
                    var val = this.value === "" ? "" : this.value; // mental IE8 fix :-(

                    for (var i = 0, iLen = n.length ; i < iLen ; i++) {
                        if (n[i] != $(this).parents('div.dataTables_filter')[0]) {
                            $(n[i]._DT_Input).val(val);
                        }
                    }

                    /* Now do the filter */
                    if (val != oPreviousSearch.sSearch) {
                        _fnFilterComplete(oSettings, {
                            "sSearch": val,
                            "bRegex": oPreviousSearch.bRegex,
                            "bSmart": oPreviousSearch.bSmart,
                            "bCaseInsensitive": oPreviousSearch.bCaseInsensitive
                        });
                    }
                });

                jqFilter
                    .attr('aria-controls', oSettings.sTableId)
                    .bind('keypress.DT', function (e) {
                        /* Prevent form submission */
                        if (e.keyCode == 13) {
                            return false;
                        }
                    }
                );

                return nFilter;
            }


            /**
             * Filter the table using both the global filter and column based filtering
             *  @param {object} oSettings dataTables settings object
             *  @param {object} oSearch search information
             *  @param {int} [iForce] force a research of the master array (1) or not (undefined or 0)
             *  @memberof DataTable#oApi
             */
            function _fnFilterComplete(oSettings, oInput, iForce) {
                var oPrevSearch = oSettings.oPreviousSearch;
                var aoPrevSearch = oSettings.aoPreSearchCols;
                var fnSaveFilter = function (oFilter) {
                    /* Save the filtering values */
                    oPrevSearch.sSearch = oFilter.sSearch;
                    oPrevSearch.bRegex = oFilter.bRegex;
                    oPrevSearch.bSmart = oFilter.bSmart;
                    oPrevSearch.bCaseInsensitive = oFilter.bCaseInsensitive;
                };

                /* In server-side processing all filtering is done by the server, so no point hanging around here */
                if (!oSettings.oFeatures.bServerSide) {
                    /* Global filter */
                    _fnFilter(oSettings, oInput.sSearch, iForce, oInput.bRegex, oInput.bSmart, oInput.bCaseInsensitive);
                    fnSaveFilter(oInput);

                    /* Now do the individual column filter */
                    for (var i = 0 ; i < oSettings.aoPreSearchCols.length ; i++) {
                        _fnFilterColumn(oSettings, aoPrevSearch[i].sSearch, i, aoPrevSearch[i].bRegex,
                            aoPrevSearch[i].bSmart, aoPrevSearch[i].bCaseInsensitive);
                    }

                    /* Custom filtering */
                    _fnFilterCustom(oSettings);
                }
                else {
                    fnSaveFilter(oInput);
                }

                /* Tell the draw function we have been filtering */
                oSettings.bFiltered = true;
                $(oSettings.oInstance).trigger('filter', oSettings);

                /* Redraw the table */
                oSettings._iDisplayStart = 0;
                _fnCalculateEnd(oSettings);
                _fnDraw(oSettings);

                /* Rebuild search array 'offline' */
                _fnBuildSearchArray(oSettings, 0);
            }


            /**
             * Apply custom filtering functions
             *  @param {object} oSettings dataTables settings object
             *  @memberof DataTable#oApi
             */
            function _fnFilterCustom(oSettings) {
                var afnFilters = DataTable.ext.afnFiltering;
                var aiFilterColumns = _fnGetColumns(oSettings, 'bSearchable');

                for (var i = 0, iLen = afnFilters.length ; i < iLen ; i++) {
                    var iCorrector = 0;
                    for (var j = 0, jLen = oSettings.aiDisplay.length ; j < jLen ; j++) {
                        var iDisIndex = oSettings.aiDisplay[j - iCorrector];
                        var bTest = afnFilters[i](
                            oSettings,
                            _fnGetRowData(oSettings, iDisIndex, 'filter', aiFilterColumns),
                            iDisIndex
                        );

                        /* Check if we should use this row based on the filtering function */
                        if (!bTest) {
                            oSettings.aiDisplay.splice(j - iCorrector, 1);
                            iCorrector++;
                        }
                    }
                }
            }


            /**
             * Filter the table on a per-column basis
             *  @param {object} oSettings dataTables settings object
             *  @param {string} sInput string to filter on
             *  @param {int} iColumn column to filter
             *  @param {bool} bRegex treat search string as a regular expression or not
             *  @param {bool} bSmart use smart filtering or not
             *  @param {bool} bCaseInsensitive Do case insenstive matching or not
             *  @memberof DataTable#oApi
             */
            function _fnFilterColumn(oSettings, sInput, iColumn, bRegex, bSmart, bCaseInsensitive) {
                if (sInput === "") {
                    return;
                }

                var iIndexCorrector = 0;
                var rpSearch = _fnFilterCreateSearch(sInput, bRegex, bSmart, bCaseInsensitive);

                for (var i = oSettings.aiDisplay.length - 1 ; i >= 0 ; i--) {
                    var sData = _fnDataToSearch(_fnGetCellData(oSettings, oSettings.aiDisplay[i], iColumn, 'filter'),
                        oSettings.aoColumns[iColumn].sType);
                    if (!rpSearch.test(sData)) {
                        oSettings.aiDisplay.splice(i, 1);
                        iIndexCorrector++;
                    }
                }
            }


            /**
             * Filter the data table based on user input and draw the table
             *  @param {object} oSettings dataTables settings object
             *  @param {string} sInput string to filter on
             *  @param {int} iForce optional - force a research of the master array (1) or not (undefined or 0)
             *  @param {bool} bRegex treat as a regular expression or not
             *  @param {bool} bSmart perform smart filtering or not
             *  @param {bool} bCaseInsensitive Do case insenstive matching or not
             *  @memberof DataTable#oApi
             */
            function _fnFilter(oSettings, sInput, iForce, bRegex, bSmart, bCaseInsensitive) {
                var i;
                var rpSearch = _fnFilterCreateSearch(sInput, bRegex, bSmart, bCaseInsensitive);
                var oPrevSearch = oSettings.oPreviousSearch;

                /* Check if we are forcing or not - optional parameter */
                if (!iForce) {
                    iForce = 0;
                }

                /* Need to take account of custom filtering functions - always filter */
                if (DataTable.ext.afnFiltering.length !== 0) {
                    iForce = 1;
                }

                /*
                 * If the input is blank - we want the full data set
                 */
                if (sInput.length <= 0) {
                    oSettings.aiDisplay.splice(0, oSettings.aiDisplay.length);
                    oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();
                }
                else {
                    /*
                     * We are starting a new search or the new search string is smaller 
                     * then the old one (i.e. delete). Search from the master array
                     */
                    if (oSettings.aiDisplay.length == oSettings.aiDisplayMaster.length ||
                           oPrevSearch.sSearch.length > sInput.length || iForce == 1 ||
                           sInput.indexOf(oPrevSearch.sSearch) !== 0) {
                        /* Nuke the old display array - we are going to rebuild it */
                        oSettings.aiDisplay.splice(0, oSettings.aiDisplay.length);

                        /* Force a rebuild of the search array */
                        _fnBuildSearchArray(oSettings, 1);

                        /* Search through all records to populate the search array
                         * The the oSettings.aiDisplayMaster and asDataSearch arrays have 1 to 1 
                         * mapping
                         */
                        for (i = 0 ; i < oSettings.aiDisplayMaster.length ; i++) {
                            if (rpSearch.test(oSettings.asDataSearch[i])) {
                                oSettings.aiDisplay.push(oSettings.aiDisplayMaster[i]);
                            }
                        }
                    }
                    else {
                        /* Using old search array - refine it - do it this way for speed
                         * Don't have to search the whole master array again
                             */
                        var iIndexCorrector = 0;

                        /* Search the current results */
                        for (i = 0 ; i < oSettings.asDataSearch.length ; i++) {
                            if (!rpSearch.test(oSettings.asDataSearch[i])) {
                                oSettings.aiDisplay.splice(i - iIndexCorrector, 1);
                                iIndexCorrector++;
                            }
                        }
                    }
                }
            }


            /**
             * Create an array which can be quickly search through
             *  @param {object} oSettings dataTables settings object
             *  @param {int} iMaster use the master data array - optional
             *  @memberof DataTable#oApi
             */
            function _fnBuildSearchArray(oSettings, iMaster) {
                if (!oSettings.oFeatures.bServerSide) {
                    /* Clear out the old data */
                    oSettings.asDataSearch = [];

                    var aiFilterColumns = _fnGetColumns(oSettings, 'bSearchable');
                    var aiIndex = (iMaster === 1) ?
                        oSettings.aiDisplayMaster :
                        oSettings.aiDisplay;

                    for (var i = 0, iLen = aiIndex.length ; i < iLen ; i++) {
                        oSettings.asDataSearch[i] = _fnBuildSearchRow(
                            oSettings,
                            _fnGetRowData(oSettings, aiIndex[i], 'filter', aiFilterColumns)
                        );
                    }
                }
            }


            /**
             * Create a searchable string from a single data row
             *  @param {object} oSettings dataTables settings object
             *  @param {array} aData Row data array to use for the data to search
             *  @memberof DataTable#oApi
             */
            function _fnBuildSearchRow(oSettings, aData) {
                var sSearch = aData.join('  ');

                /* If it looks like there is an HTML entity in the string, attempt to decode it */
                if (sSearch.indexOf('&') !== -1) {
                    sSearch = $('<div>').html(sSearch).text();
                }

                // Strip newline characters
                return sSearch.replace(/[\n\r]/g, " ");
            }

            /**
             * Build a regular expression object suitable for searching a table
             *  @param {string} sSearch string to search for
             *  @param {bool} bRegex treat as a regular expression or not
             *  @param {bool} bSmart perform smart filtering or not
             *  @param {bool} bCaseInsensitive Do case insensitive matching or not
             *  @returns {RegExp} constructed object
             *  @memberof DataTable#oApi
             */
            function _fnFilterCreateSearch(sSearch, bRegex, bSmart, bCaseInsensitive) {
                var asSearch, sRegExpString;

                if (bSmart) {
                    /* Generate the regular expression to use. Something along the lines of:
                     * ^(?=.*?\bone\b)(?=.*?\btwo\b)(?=.*?\bthree\b).*$
                     */
                    asSearch = bRegex ? sSearch.split(' ') : _fnEscapeRegex(sSearch).split(' ');
                    sRegExpString = '^(?=.*?' + asSearch.join(')(?=.*?') + ').*$';
                    return new RegExp(sRegExpString, bCaseInsensitive ? "i" : "");
                }
                else {
                    sSearch = bRegex ? sSearch : _fnEscapeRegex(sSearch);
                    return new RegExp(sSearch, bCaseInsensitive ? "i" : "");
                }
            }


            /**
             * Convert raw data into something that the user can search on
             *  @param {string} sData data to be modified
             *  @param {string} sType data type
             *  @returns {string} search string
             *  @memberof DataTable#oApi
             */
            function _fnDataToSearch(sData, sType) {
                if (typeof DataTable.ext.ofnSearch[sType] === "function") {
                    return DataTable.ext.ofnSearch[sType](sData);
                }
                else if (sData === null) {
                    return '';
                }
                else if (sType == "html") {
                    return sData.replace(/[\r\n]/g, " ").replace(/<.*?>/g, "");
                }
                else if (typeof sData === "string") {
                    return sData.replace(/[\r\n]/g, " ");
                }
                return sData;
            }


            /**
             * scape a string such that it can be used in a regular expression
             *  @param {string} sVal string to escape
             *  @returns {string} escaped string
             *  @memberof DataTable#oApi
             */
            function _fnEscapeRegex(sVal) {
                var acEscape = ['/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\', '$', '^', '-'];
                var reReplace = new RegExp('(\\' + acEscape.join('|\\') + ')', 'g');
                return sVal.replace(reReplace, '\\$1');
            }


            /**
             * Generate the node required for the info display
             *  @param {object} oSettings dataTables settings object
             *  @returns {node} Information element
             *  @memberof DataTable#oApi
             */
            function _fnFeatureHtmlInfo(oSettings) {
                var nInfo = document.createElement('div');
                nInfo.className = oSettings.oClasses.sInfo;

                /* Actions that are to be taken once only for this feature */
                if (!oSettings.aanFeatures.i) {
                    /* Add draw callback */
                    oSettings.aoDrawCallback.push({
                        "fn": _fnUpdateInfo,
                        "sName": "information"
                    });

                    /* Add id */
                    nInfo.id = oSettings.sTableId + '_info';
                }
                oSettings.nTable.setAttribute('aria-describedby', oSettings.sTableId + '_info');

                return nInfo;
            }


            /**
             * Update the information elements in the display
             *  @param {object} oSettings dataTables settings object
             *  @memberof DataTable#oApi
             */
            function _fnUpdateInfo(oSettings) {
                /* Show information about the table */
                if (!oSettings.oFeatures.bInfo || oSettings.aanFeatures.i.length === 0) {
                    return;
                }

                var
                    oLang = oSettings.oLanguage,
                    iStart = oSettings._iDisplayStart + 1,
                    iEnd = oSettings.fnDisplayEnd(),
                    iMax = oSettings.fnRecordsTotal(),
                    iTotal = oSettings.fnRecordsDisplay(),
                    sOut;

                if (iTotal === 0) {
                    /* Empty record set */
                    sOut = oLang.sInfoEmpty;
                }
                else {
                    /* Normal record set */
                    sOut = oLang.sInfo;
                }

                if (iTotal != iMax) {
                    /* Record set after filtering */
                    sOut += ' ' + oLang.sInfoFiltered;
                }

                // Convert the macros
                sOut += oLang.sInfoPostFix;
                sOut = _fnInfoMacros(oSettings, sOut);

                if (oLang.fnInfoCallback !== null) {
                    sOut = oLang.fnInfoCallback.call(oSettings.oInstance,
                        oSettings, iStart, iEnd, iMax, iTotal, sOut);
                }

                var n = oSettings.aanFeatures.i;
                for (var i = 0, iLen = n.length ; i < iLen ; i++) {
                    $(n[i]).html(sOut);
                }
            }


            function _fnInfoMacros(oSettings, str) {
                var
                    iStart = oSettings._iDisplayStart + 1,
                    sStart = oSettings.fnFormatNumber(iStart),
                    iEnd = oSettings.fnDisplayEnd(),
                    sEnd = oSettings.fnFormatNumber(iEnd),
                    iTotal = oSettings.fnRecordsDisplay(),
                    sTotal = oSettings.fnFormatNumber(iTotal),
                    iMax = oSettings.fnRecordsTotal(),
                    sMax = oSettings.fnFormatNumber(iMax);

                // When infinite scrolling, we are always starting at 1. _iDisplayStart is used only
                // internally
                if (oSettings.oScroll.bInfinite) {
                    sStart = oSettings.fnFormatNumber(1);
                }

                return str.
                    replace(/_START_/g, sStart).
                    replace(/_END_/g, sEnd).
                    replace(/_TOTAL_/g, sTotal).
                    replace(/_MAX_/g, sMax);
            }



            /**
             * Draw the table for the first time, adding all required features
             *  @param {object} oSettings dataTables settings object
             *  @memberof DataTable#oApi
             */
            function _fnInitialise(oSettings) {
                var i, iLen, iAjaxStart = oSettings.iInitDisplayStart;

                /* Ensure that the table data is fully initialised */
                if (oSettings.bInitialised === false) {
                    setTimeout(function () { _fnInitialise(oSettings); }, 200);
                    return;
                }

                /* Show the display HTML options */
                _fnAddOptionsHtml(oSettings);

                /* Build and draw the header / footer for the table */
                _fnBuildHead(oSettings);
                _fnDrawHead(oSettings, oSettings.aoHeader);
                if (oSettings.nTFoot) {
                    _fnDrawHead(oSettings, oSettings.aoFooter);
                }

                /* Okay to show that something is going on now */
                _fnProcessingDisplay(oSettings, true);

                /* Calculate sizes for columns */
                if (oSettings.oFeatures.bAutoWidth) {
                    _fnCalculateColumnWidths(oSettings);
                }

                for (i = 0, iLen = oSettings.aoColumns.length ; i < iLen ; i++) {
                    if (oSettings.aoColumns[i].sWidth !== null) {
                        oSettings.aoColumns[i].nTh.style.width = _fnStringToCss(oSettings.aoColumns[i].sWidth);
                    }
                }

                /* If there is default sorting required - let's do it. The sort function will do the
                 * drawing for us. Otherwise we draw the table regardless of the Ajax source - this allows
                 * the table to look initialised for Ajax sourcing data (show 'loading' message possibly)
                 */
                if (oSettings.oFeatures.bSort) {
                    _fnSort(oSettings);
                }
                else if (oSettings.oFeatures.bFilter) {
                    _fnFilterComplete(oSettings, oSettings.oPreviousSearch);
                }
                else {
                    oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();
                    _fnCalculateEnd(oSettings);
                    _fnDraw(oSettings);
                }

                /* if there is an ajax source load the data */
                if (oSettings.sAjaxSource !== null && !oSettings.oFeatures.bServerSide) {
                    var aoData = [];
                    _fnServerParams(oSettings, aoData);
                    oSettings.fnServerData.call(oSettings.oInstance, oSettings.sAjaxSource, aoData, function (json) {
                        var aData = (oSettings.sAjaxDataProp !== "") ?
                            _fnGetObjectDataFn(oSettings.sAjaxDataProp)(json) : json;

                        /* Got the data - add it to the table */
                        for (i = 0 ; i < aData.length ; i++) {
                            _fnAddData(oSettings, aData[i]);
                        }

                        /* Reset the init display for cookie saving. We've already done a filter, and
                         * therefore cleared it before. So we need to make it appear 'fresh'
                         */
                        oSettings.iInitDisplayStart = iAjaxStart;

                        if (oSettings.oFeatures.bSort) {
                            _fnSort(oSettings);
                        }
                        else {
                            oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();
                            _fnCalculateEnd(oSettings);
                            _fnDraw(oSettings);
                        }

                        _fnProcessingDisplay(oSettings, false);
                        _fnInitComplete(oSettings, json);
                    }, oSettings);
                    return;
                }

                /* Server-side processing initialisation complete is done at the end of _fnDraw */
                if (!oSettings.oFeatures.bServerSide) {
                    _fnProcessingDisplay(oSettings, false);
                    _fnInitComplete(oSettings);
                }
            }


            /**
             * Draw the table for the first time, adding all required features
             *  @param {object} oSettings dataTables settings object
             *  @param {object} [json] JSON from the server that completed the table, if using Ajax source
             *    with client-side processing (optional)
             *  @memberof DataTable#oApi
             */
            function _fnInitComplete(oSettings, json) {
                oSettings._bInitComplete = true;
                _fnCallbackFire(oSettings, 'aoInitComplete', 'init', [oSettings, json]);
            }


            /**
             * Language compatibility - when certain options are given, and others aren't, we
             * need to duplicate the values over, in order to provide backwards compatibility
             * with older language files.
             *  @param {object} oSettings dataTables settings object
             *  @memberof DataTable#oApi
             */
            function _fnLanguageCompat(oLanguage) {
                var oDefaults = DataTable.defaults.oLanguage;

                /* Backwards compatibility - if there is no sEmptyTable given, then use the same as
                 * sZeroRecords - assuming that is given.
                 */
                if (!oLanguage.sEmptyTable && oLanguage.sZeroRecords &&
                    oDefaults.sEmptyTable === "No data available in table") {
                    _fnMap(oLanguage, oLanguage, 'sZeroRecords', 'sEmptyTable');
                }

                /* Likewise with loading records */
                if (!oLanguage.sLoadingRecords && oLanguage.sZeroRecords &&
                    oDefaults.sLoadingRecords === "Loading...") {
                    _fnMap(oLanguage, oLanguage, 'sZeroRecords', 'sLoadingRecords');
                }
            }



            /**
             * Generate the node required for user display length changing
             *  @param {object} oSettings dataTables settings object
             *  @returns {node} Display length feature node
             *  @memberof DataTable#oApi
             */
            function _fnFeatureHtmlLength(oSettings) {
                if (oSettings.oScroll.bInfinite) {
                    return null;
                }

                /* This can be overruled by not using the _MENU_ var/macro in the language variable */
                var sName = 'name="' + oSettings.sTableId + '_length"';
                var sStdMenu = '<select size="1" ' + sName + '>';
                var i, iLen;
                var aLengthMenu = oSettings.aLengthMenu;

                if (aLengthMenu.length == 2 && typeof aLengthMenu[0] === 'object' &&
                        typeof aLengthMenu[1] === 'object') {
                    for (i = 0, iLen = aLengthMenu[0].length ; i < iLen ; i++) {
                        sStdMenu += '<option value="' + aLengthMenu[0][i] + '">' + aLengthMenu[1][i] + '</option>';
                    }
                }
                else {
                    for (i = 0, iLen = aLengthMenu.length ; i < iLen ; i++) {
                        sStdMenu += '<option value="' + aLengthMenu[i] + '">' + aLengthMenu[i] + '</option>';
                    }
                }
                sStdMenu += '</select>';

                var nLength = document.createElement('div');
                if (!oSettings.aanFeatures.l) {
                    nLength.id = oSettings.sTableId + '_length';
                }
                nLength.className = oSettings.oClasses.sLength;
                nLength.innerHTML = '<label>' + oSettings.oLanguage.sLengthMenu.replace('_MENU_', sStdMenu) + '</label>';

                /*
                 * Set the length to the current display length - thanks to Andrea Pavlovic for this fix,
                 * and Stefan Skopnik for fixing the fix!
                 */
                $('select option[value="' + oSettings._iDisplayLength + '"]', nLength).attr("selected", true);

                $('select', nLength).bind('change.DT', function (e) {
                    var iVal = $(this).val();

                    /* Update all other length options for the new display */
                    var n = oSettings.aanFeatures.l;
                    for (i = 0, iLen = n.length ; i < iLen ; i++) {
                        if (n[i] != this.parentNode) {
                            $('select', n[i]).val(iVal);
                        }
                    }

                    /* Redraw the table */
                    oSettings._iDisplayLength = parseInt(iVal, 10);
                    _fnCalculateEnd(oSettings);

                    /* If we have space to show extra rows (backing up from the end point - then do so */
                    if (oSettings.fnDisplayEnd() == oSettings.fnRecordsDisplay()) {
                        oSettings._iDisplayStart = oSettings.fnDisplayEnd() - oSettings._iDisplayLength;
                        if (oSettings._iDisplayStart < 0) {
                            oSettings._iDisplayStart = 0;
                        }
                    }

                    if (oSettings._iDisplayLength == -1) {
                        oSettings._iDisplayStart = 0;
                    }

                    _fnDraw(oSettings);
                });


                $('select', nLength).attr('aria-controls', oSettings.sTableId);

                return nLength;
            }


            /**
             * Recalculate the end point based on the start point
             *  @param {object} oSettings dataTables settings object
             *  @memberof DataTable#oApi
             */
            function _fnCalculateEnd(oSettings) {
                if (oSettings.oFeatures.bPaginate === false) {
                    oSettings._iDisplayEnd = oSettings.aiDisplay.length;
                }
                else {
                    /* Set the end point of the display - based on how many elements there are
                     * still to display
                     */
                    if (oSettings._iDisplayStart + oSettings._iDisplayLength > oSettings.aiDisplay.length ||
                           oSettings._iDisplayLength == -1) {
                        oSettings._iDisplayEnd = oSettings.aiDisplay.length;
                    }
                    else {
                        oSettings._iDisplayEnd = oSettings._iDisplayStart + oSettings._iDisplayLength;
                    }
                }
            }



            /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
             * Note that most of the paging logic is done in 
             * DataTable.ext.oPagination
             */

            /**
             * Generate the node required for default pagination
             *  @param {object} oSettings dataTables settings object
             *  @returns {node} Pagination feature node
             *  @memberof DataTable#oApi
             */
            function _fnFeatureHtmlPaginate(oSettings) {
                if (oSettings.oScroll.bInfinite) {
                    return null;
                }

                var nPaginate = document.createElement('div');
                nPaginate.className = oSettings.oClasses.sPaging + oSettings.sPaginationType;

                DataTable.ext.oPagination[oSettings.sPaginationType].fnInit(oSettings, nPaginate,
                    function (oSettings) {
                        _fnCalculateEnd(oSettings);
                        _fnDraw(oSettings);
                    }
                );

                /* Add a draw callback for the pagination on first instance, to update the paging display */
                if (!oSettings.aanFeatures.p) {
                    oSettings.aoDrawCallback.push({
                        "fn": function (oSettings) {
                            DataTable.ext.oPagination[oSettings.sPaginationType].fnUpdate(oSettings, function (oSettings) {
                                _fnCalculateEnd(oSettings);
                                _fnDraw(oSettings);
                            });
                        },
                        "sName": "pagination"
                    });
                }
                return nPaginate;
            }


            /**
             * Alter the display settings to change the page
             *  @param {object} oSettings dataTables settings object
             *  @param {string|int} mAction Paging action to take: "first", "previous", "next" or "last"
             *    or page number to jump to (integer)
             *  @returns {bool} true page has changed, false - no change (no effect) eg 'first' on page 1
             *  @memberof DataTable#oApi
             */
            function _fnPageChange(oSettings, mAction) {
                var iOldStart = oSettings._iDisplayStart;

                if (typeof mAction === "number") {
                    oSettings._iDisplayStart = mAction * oSettings._iDisplayLength;
                    if (oSettings._iDisplayStart > oSettings.fnRecordsDisplay()) {
                        oSettings._iDisplayStart = 0;
                    }
                }
                else if (mAction == "first") {
                    oSettings._iDisplayStart = 0;
                }
                else if (mAction == "previous") {
                    oSettings._iDisplayStart = oSettings._iDisplayLength >= 0 ?
                        oSettings._iDisplayStart - oSettings._iDisplayLength :
                        0;

                    /* Correct for under-run */
                    if (oSettings._iDisplayStart < 0) {
                        oSettings._iDisplayStart = 0;
                    }
                }
                else if (mAction == "next") {
                    if (oSettings._iDisplayLength >= 0) {
                        /* Make sure we are not over running the display array */
                        if (oSettings._iDisplayStart + oSettings._iDisplayLength < oSettings.fnRecordsDisplay()) {
                            oSettings._iDisplayStart += oSettings._iDisplayLength;
                        }
                    }
                    else {
                        oSettings._iDisplayStart = 0;
                    }
                }
                else if (mAction == "last") {
                    if (oSettings._iDisplayLength >= 0) {
                        var iPages = parseInt((oSettings.fnRecordsDisplay() - 1) / oSettings._iDisplayLength, 10) + 1;
                        oSettings._iDisplayStart = (iPages - 1) * oSettings._iDisplayLength;
                    }
                    else {
                        oSettings._iDisplayStart = 0;
                    }
                }
                else {
                    _fnLog(oSettings, 0, "Unknown paging action: " + mAction);
                }
                $(oSettings.oInstance).trigger('page', oSettings);

                return iOldStart != oSettings._iDisplayStart;
            }



            /**
             * Generate the node required for the processing node
             *  @param {object} oSettings dataTables settings object
             *  @returns {node} Processing element
             *  @memberof DataTable#oApi
             */
            function _fnFeatureHtmlProcessing(oSettings) {
                var nProcessing = document.createElement('div');

                if (!oSettings.aanFeatures.r) {
                    nProcessing.id = oSettings.sTableId + '_processing';
                }
                nProcessing.innerHTML = oSettings.oLanguage.sProcessing;
                nProcessing.className = oSettings.oClasses.sProcessing;
                oSettings.nTable.parentNode.insertBefore(nProcessing, oSettings.nTable);

                return nProcessing;
            }


            /**
             * Display or hide the processing indicator
             *  @param {object} oSettings dataTables settings object
             *  @param {bool} bShow Show the processing indicator (true) or not (false)
             *  @memberof DataTable#oApi
             */
            function _fnProcessingDisplay(oSettings, bShow) {
                if (oSettings.oFeatures.bProcessing) {
                    var an = oSettings.aanFeatures.r;
                    for (var i = 0, iLen = an.length ; i < iLen ; i++) {
                        an[i].style.visibility = bShow ? "visible" : "hidden";
                    }
                }

                $(oSettings.oInstance).trigger('processing', [oSettings, bShow]);
            }

            /**
             * Add any control elements for the table - specifically scrolling
             *  @param {object} oSettings dataTables settings object
             *  @returns {node} Node to add to the DOM
             *  @memberof DataTable#oApi
             */
            function _fnFeatureHtmlTable(oSettings) {
                /* Check if scrolling is enabled or not - if not then leave the DOM unaltered */
                if (oSettings.oScroll.sX === "" && oSettings.oScroll.sY === "") {
                    return oSettings.nTable;
                }

                /*
                 * The HTML structure that we want to generate in this function is:
                 *  div - nScroller
                 *    div - nScrollHead
                 *      div - nScrollHeadInner
                 *        table - nScrollHeadTable
                 *          thead - nThead
                 *    div - nScrollBody
                 *      table - oSettings.nTable
                 *        thead - nTheadSize
                 *        tbody - nTbody
                 *    div - nScrollFoot
                 *      div - nScrollFootInner
                 *        table - nScrollFootTable
                 *          tfoot - nTfoot
                 */
                var
                    nScroller = document.createElement('div'),
                    nScrollHead = document.createElement('div'),
                    nScrollHeadInner = document.createElement('div'),
                    nScrollBody = document.createElement('div'),
                    nScrollFoot = document.createElement('div'),
                    nScrollFootInner = document.createElement('div'),
                    nScrollHeadTable = oSettings.nTable.cloneNode(false),
                    nScrollFootTable = oSettings.nTable.cloneNode(false),
                    nThead = oSettings.nTable.getElementsByTagName('thead')[0],
                    nTfoot = oSettings.nTable.getElementsByTagName('tfoot').length === 0 ? null :
                        oSettings.nTable.getElementsByTagName('tfoot')[0],
                    oClasses = oSettings.oClasses;

                nScrollHead.appendChild(nScrollHeadInner);
                nScrollFoot.appendChild(nScrollFootInner);
                nScrollBody.appendChild(oSettings.nTable);
                nScroller.appendChild(nScrollHead);
                nScroller.appendChild(nScrollBody);
                nScrollHeadInner.appendChild(nScrollHeadTable);
                nScrollHeadTable.appendChild(nThead);
                if (nTfoot !== null) {
                    nScroller.appendChild(nScrollFoot);
                    nScrollFootInner.appendChild(nScrollFootTable);
                    nScrollFootTable.appendChild(nTfoot);
                }

                nScroller.className = oClasses.sScrollWrapper;
                nScrollHead.className = oClasses.sScrollHead;
                nScrollHeadInner.className = oClasses.sScrollHeadInner;
                nScrollBody.className = oClasses.sScrollBody;
                nScrollFoot.className = oClasses.sScrollFoot;
                nScrollFootInner.className = oClasses.sScrollFootInner;

                if (oSettings.oScroll.bAutoCss) {
                    nScrollHead.style.overflow = "hidden";
                    nScrollHead.style.position = "relative";
                    nScrollFoot.style.overflow = "hidden";
                    nScrollBody.style.overflow = "auto";
                }

                nScrollHead.style.border = "0";
                nScrollHead.style.width = "100%";
                nScrollFoot.style.border = "0";
                nScrollHeadInner.style.width = oSettings.oScroll.sXInner !== "" ?
                    oSettings.oScroll.sXInner : "100%"; /* will be overwritten */

                /* Modify attributes to respect the clones */
                nScrollHeadTable.removeAttribute('id');
                nScrollHeadTable.style.marginLeft = "0";
                oSettings.nTable.style.marginLeft = "0";
                if (nTfoot !== null) {
                    nScrollFootTable.removeAttribute('id');
                    nScrollFootTable.style.marginLeft = "0";
                }

                /* Move caption elements from the body to the header, footer or leave where it is
                 * depending on the configuration. Note that the DTD says there can be only one caption */
                var nCaption = $(oSettings.nTable).children('caption');
                if (nCaption.length > 0) {
                    nCaption = nCaption[0];
                    if (nCaption._captionSide === "top") {
                        nScrollHeadTable.appendChild(nCaption);
                    }
                    else if (nCaption._captionSide === "bottom" && nTfoot) {
                        nScrollFootTable.appendChild(nCaption);
                    }
                }

                /*
                 * Sizing
                 */
                /* When x-scrolling add the width and a scroller to move the header with the body */
                if (oSettings.oScroll.sX !== "") {
                    nScrollHead.style.width = _fnStringToCss(oSettings.oScroll.sX);
                    nScrollBody.style.width = _fnStringToCss(oSettings.oScroll.sX);

                    if (nTfoot !== null) {
                        nScrollFoot.style.width = _fnStringToCss(oSettings.oScroll.sX);
                    }

                    /* When the body is scrolled, then we also want to scroll the headers */
                    $(nScrollBody).scroll(function (e) {
                        nScrollHead.scrollLeft = this.scrollLeft;

                        if (nTfoot !== null) {
                            nScrollFoot.scrollLeft = this.scrollLeft;
                        }
                    });
                }

                /* When yscrolling, add the height */
                if (oSettings.oScroll.sY !== "") {
                    nScrollBody.style.height = _fnStringToCss(oSettings.oScroll.sY);
                }

                /* Redraw - align columns across the tables */
                oSettings.aoDrawCallback.push({
                    "fn": _fnScrollDraw,
                    "sName": "scrolling"
                });

                /* Infinite scrolling event handlers */
                if (oSettings.oScroll.bInfinite) {
                    $(nScrollBody).scroll(function () {
                        /* Use a blocker to stop scrolling from loading more data while other data is still loading */
                        if (!oSettings.bDrawing && $(this).scrollTop() !== 0) {
                            /* Check if we should load the next data set */
                            if ($(this).scrollTop() + $(this).height() >
                                $(oSettings.nTable).height() - oSettings.oScroll.iLoadGap) {
                                /* Only do the redraw if we have to - we might be at the end of the data */
                                if (oSettings.fnDisplayEnd() < oSettings.fnRecordsDisplay()) {
                                    _fnPageChange(oSettings, 'next');
                                    _fnCalculateEnd(oSettings);
                                    _fnDraw(oSettings);
                                }
                            }
                        }
                    });
                }

                oSettings.nScrollHead = nScrollHead;
                oSettings.nScrollFoot = nScrollFoot;

                return nScroller;
            }


            /**
             * Update the various tables for resizing. It's a bit of a pig this function, but
             * basically the idea to:
             *   1. Re-create the table inside the scrolling div
             *   2. Take live measurements from the DOM
             *   3. Apply the measurements
             *   4. Clean up
             *  @param {object} o dataTables settings object
             *  @returns {node} Node to add to the DOM
             *  @memberof DataTable#oApi
             */
            function _fnScrollDraw(o) {
                var
                    nScrollHeadInner = o.nScrollHead.getElementsByTagName('div')[0],
                    nScrollHeadTable = nScrollHeadInner.getElementsByTagName('table')[0],
                    nScrollBody = o.nTable.parentNode,
                    i, iLen, j, jLen, anHeadToSize, anHeadSizers, anFootSizers, anFootToSize, oStyle, iVis,
                    nTheadSize, nTfootSize,
                    iWidth, aApplied = [], aAppliedFooter = [], iSanityWidth,
                    nScrollFootInner = (o.nTFoot !== null) ? o.nScrollFoot.getElementsByTagName('div')[0] : null,
                    nScrollFootTable = (o.nTFoot !== null) ? nScrollFootInner.getElementsByTagName('table')[0] : null,
                    ie67 = o.oBrowser.bScrollOversize,
                    zeroOut = function (nSizer) {
                        oStyle = nSizer.style;
                        oStyle.paddingTop = "0";
                        oStyle.paddingBottom = "0";
                        oStyle.borderTopWidth = "0";
                        oStyle.borderBottomWidth = "0";
                        oStyle.height = 0;
                    };

                /*
                 * 1. Re-create the table inside the scrolling div
                 */

                /* Remove the old minimised thead and tfoot elements in the inner table */
                $(o.nTable).children('thead, tfoot').remove();

                /* Clone the current header and footer elements and then place it into the inner table */
                nTheadSize = $(o.nTHead).clone()[0];
                o.nTable.insertBefore(nTheadSize, o.nTable.childNodes[0]);
                anHeadToSize = o.nTHead.getElementsByTagName('tr');
                anHeadSizers = nTheadSize.getElementsByTagName('tr');

                if (o.nTFoot !== null) {
                    nTfootSize = $(o.nTFoot).clone()[0];
                    o.nTable.insertBefore(nTfootSize, o.nTable.childNodes[1]);
                    anFootToSize = o.nTFoot.getElementsByTagName('tr');
                    anFootSizers = nTfootSize.getElementsByTagName('tr');
                }

                /*
                 * 2. Take live measurements from the DOM - do not alter the DOM itself!
                 */

                /* Remove old sizing and apply the calculated column widths
                 * Get the unique column headers in the newly created (cloned) header. We want to apply the
                 * calculated sizes to this header
                 */
                if (o.oScroll.sX === "") {
                    nScrollBody.style.width = '100%';
                    nScrollHeadInner.parentNode.style.width = '100%';
                }

                var nThs = _fnGetUniqueThs(o, nTheadSize);
                for (i = 0, iLen = nThs.length ; i < iLen ; i++) {
                    iVis = _fnVisibleToColumnIndex(o, i);
                    nThs[i].style.width = o.aoColumns[iVis].sWidth;
                }

                if (o.nTFoot !== null) {
                    _fnApplyToChildren(function (n) {
                        n.style.width = "";
                    }, anFootSizers);
                }

                // If scroll collapse is enabled, when we put the headers back into the body for sizing, we
                // will end up forcing the scrollbar to appear, making our measurements wrong for when we
                // then hide it (end of this function), so add the header height to the body scroller.
                if (o.oScroll.bCollapse && o.oScroll.sY !== "") {
                    nScrollBody.style.height = (nScrollBody.offsetHeight + o.nTHead.offsetHeight) + "px";
                }

                /* Size the table as a whole */
                iSanityWidth = $(o.nTable).outerWidth();
                if (o.oScroll.sX === "") {
                    /* No x scrolling */
                    o.nTable.style.width = "100%";

                    /* I know this is rubbish - but IE7 will make the width of the table when 100% include
                     * the scrollbar - which is shouldn't. When there is a scrollbar we need to take this
                     * into account.
                     */
                    if (ie67 && ($('tbody', nScrollBody).height() > nScrollBody.offsetHeight ||
                        $(nScrollBody).css('overflow-y') == "scroll")) {
                        o.nTable.style.width = _fnStringToCss($(o.nTable).outerWidth() - o.oScroll.iBarWidth);
                    }
                }
                else {
                    if (o.oScroll.sXInner !== "") {
                        /* x scroll inner has been given - use it */
                        o.nTable.style.width = _fnStringToCss(o.oScroll.sXInner);
                    }
                    else if (iSanityWidth == $(nScrollBody).width() &&
                       $(nScrollBody).height() < $(o.nTable).height()) {
                        /* There is y-scrolling - try to take account of the y scroll bar */
                        o.nTable.style.width = _fnStringToCss(iSanityWidth - o.oScroll.iBarWidth);
                        if ($(o.nTable).outerWidth() > iSanityWidth - o.oScroll.iBarWidth) {
                            /* Not possible to take account of it */
                            o.nTable.style.width = _fnStringToCss(iSanityWidth);
                        }
                    }
                    else {
                        /* All else fails */
                        o.nTable.style.width = _fnStringToCss(iSanityWidth);
                    }
                }

                /* Recalculate the sanity width - now that we've applied the required width, before it was
                 * a temporary variable. This is required because the column width calculation is done
                 * before this table DOM is created.
                 */
                iSanityWidth = $(o.nTable).outerWidth();

                /* We want the hidden header to have zero height, so remove padding and borders. Then
                 * set the width based on the real headers
                 */

                // Apply all styles in one pass. Invalidates layout only once because we don't read any 
                // DOM properties.
                _fnApplyToChildren(zeroOut, anHeadSizers);

                // Read all widths in next pass. Forces layout only once because we do not change 
                // any DOM properties.
                _fnApplyToChildren(function (nSizer) {
                    aApplied.push(_fnStringToCss($(nSizer).width()));
                }, anHeadSizers);

                // Apply all widths in final pass. Invalidates layout only once because we do not
                // read any DOM properties.
                _fnApplyToChildren(function (nToSize, i) {
                    nToSize.style.width = aApplied[i];
                }, anHeadToSize);

                $(anHeadSizers).height(0);

                /* Same again with the footer if we have one */
                if (o.nTFoot !== null) {
                    _fnApplyToChildren(zeroOut, anFootSizers);

                    _fnApplyToChildren(function (nSizer) {
                        aAppliedFooter.push(_fnStringToCss($(nSizer).width()));
                    }, anFootSizers);

                    _fnApplyToChildren(function (nToSize, i) {
                        nToSize.style.width = aAppliedFooter[i];
                    }, anFootToSize);

                    $(anFootSizers).height(0);
                }

                /*
                 * 3. Apply the measurements
                 */

                /* "Hide" the header and footer that we used for the sizing. We want to also fix their width
                 * to what they currently are
                 */
                _fnApplyToChildren(function (nSizer, i) {
                    nSizer.innerHTML = "";
                    nSizer.style.width = aApplied[i];
                }, anHeadSizers);

                if (o.nTFoot !== null) {
                    _fnApplyToChildren(function (nSizer, i) {
                        nSizer.innerHTML = "";
                        nSizer.style.width = aAppliedFooter[i];
                    }, anFootSizers);
                }

                /* Sanity check that the table is of a sensible width. If not then we are going to get
                 * misalignment - try to prevent this by not allowing the table to shrink below its min width
                 */
                if ($(o.nTable).outerWidth() < iSanityWidth) {
                    /* The min width depends upon if we have a vertical scrollbar visible or not */
                    var iCorrection = ((nScrollBody.scrollHeight > nScrollBody.offsetHeight ||
                        $(nScrollBody).css('overflow-y') == "scroll")) ?
                            iSanityWidth + o.oScroll.iBarWidth : iSanityWidth;

                    /* IE6/7 are a law unto themselves... */
                    if (ie67 && (nScrollBody.scrollHeight >
                        nScrollBody.offsetHeight || $(nScrollBody).css('overflow-y') == "scroll")) {
                        o.nTable.style.width = _fnStringToCss(iCorrection - o.oScroll.iBarWidth);
                    }

                    /* Apply the calculated minimum width to the table wrappers */
                    nScrollBody.style.width = _fnStringToCss(iCorrection);
                    o.nScrollHead.style.width = _fnStringToCss(iCorrection);

                    if (o.nTFoot !== null) {
                        o.nScrollFoot.style.width = _fnStringToCss(iCorrection);
                    }

                    /* And give the user a warning that we've stopped the table getting too small */
                    if (o.oScroll.sX === "") {
                        _fnLog(o, 1, "The table cannot fit into the current element which will cause column" +
                            " misalignment. The table has been drawn at its minimum possible width.");
                    }
                    else if (o.oScroll.sXInner !== "") {
                        _fnLog(o, 1, "The table cannot fit into the current element which will cause column" +
                            " misalignment. Increase the sScrollXInner value or remove it to allow automatic" +
                            " calculation");
                    }
                }
                else {
                    nScrollBody.style.width = _fnStringToCss('100%');
                    o.nScrollHead.style.width = _fnStringToCss('100%');

                    if (o.nTFoot !== null) {
                        o.nScrollFoot.style.width = _fnStringToCss('100%');
                    }
                }


                /*
                 * 4. Clean up
                 */
                if (o.oScroll.sY === "") {
                    /* IE7< puts a vertical scrollbar in place (when it shouldn't be) due to subtracting
                     * the scrollbar height from the visible display, rather than adding it on. We need to
                     * set the height in order to sort this. Don't want to do it in any other browsers.
                     */
                    if (ie67) {
                        nScrollBody.style.height = _fnStringToCss(o.nTable.offsetHeight + o.oScroll.iBarWidth);
                    }
                }

                if (o.oScroll.sY !== "" && o.oScroll.bCollapse) {
                    nScrollBody.style.height = _fnStringToCss(o.oScroll.sY);

                    var iExtra = (o.oScroll.sX !== "" && o.nTable.offsetWidth > nScrollBody.offsetWidth) ?
                        o.oScroll.iBarWidth : 0;
                    if (o.nTable.offsetHeight < nScrollBody.offsetHeight) {
                        nScrollBody.style.height = _fnStringToCss(o.nTable.offsetHeight + iExtra);
                    }
                }

                /* Finally set the width's of the header and footer tables */
                var iOuterWidth = $(o.nTable).outerWidth();
                nScrollHeadTable.style.width = _fnStringToCss(iOuterWidth);
                nScrollHeadInner.style.width = _fnStringToCss(iOuterWidth);

                // Figure out if there are scrollbar present - if so then we need a the header and footer to
                // provide a bit more space to allow "overflow" scrolling (i.e. past the scrollbar)
                var bScrolling = $(o.nTable).height() > nScrollBody.clientHeight || $(nScrollBody).css('overflow-y') == "scroll";
                nScrollHeadInner.style.paddingRight = bScrolling ? o.oScroll.iBarWidth + "px" : "0px";

                if (o.nTFoot !== null) {
                    nScrollFootTable.style.width = _fnStringToCss(iOuterWidth);
                    nScrollFootInner.style.width = _fnStringToCss(iOuterWidth);
                    nScrollFootInner.style.paddingRight = bScrolling ? o.oScroll.iBarWidth + "px" : "0px";
                }

                /* Adjust the position of the header in case we loose the y-scrollbar */
                $(nScrollBody).scroll();

                /* If sorting or filtering has occurred, jump the scrolling back to the top */
                if (o.bSorted || o.bFiltered) {
                    nScrollBody.scrollTop = 0;
                }
            }


            /**
             * Apply a given function to the display child nodes of an element array (typically
             * TD children of TR rows
             *  @param {function} fn Method to apply to the objects
             *  @param array {nodes} an1 List of elements to look through for display children
             *  @param array {nodes} an2 Another list (identical structure to the first) - optional
             *  @memberof DataTable#oApi
             */
            function _fnApplyToChildren(fn, an1, an2) {
                var index = 0, i = 0, iLen = an1.length;
                var nNode1, nNode2;

                while (i < iLen) {
                    nNode1 = an1[i].firstChild;
                    nNode2 = an2 ? an2[i].firstChild : null;
                    while (nNode1) {
                        if (nNode1.nodeType === 1) {
                            if (an2) {
                                fn(nNode1, nNode2, index);
                            }
                            else {
                                fn(nNode1, index);
                            }
                            index++;
                        }
                        nNode1 = nNode1.nextSibling;
                        nNode2 = an2 ? nNode2.nextSibling : null;
                    }
                    i++;
                }
            }

            /**
             * Convert a CSS unit width to pixels (e.g. 2em)
             *  @param {string} sWidth width to be converted
             *  @param {node} nParent parent to get the with for (required for relative widths) - optional
             *  @returns {int} iWidth width in pixels
             *  @memberof DataTable#oApi
             */
            function _fnConvertToWidth(sWidth, nParent) {
                if (!sWidth || sWidth === null || sWidth === '') {
                    return 0;
                }

                if (!nParent) {
                    nParent = document.body;
                }

                var iWidth;
                var nTmp = document.createElement("div");
                nTmp.style.width = _fnStringToCss(sWidth);

                nParent.appendChild(nTmp);
                iWidth = nTmp.offsetWidth;
                nParent.removeChild(nTmp);

                return (iWidth);
            }


            /**
             * Calculate the width of columns for the table
             *  @param {object} oSettings dataTables settings object
             *  @memberof DataTable#oApi
             */
            function _fnCalculateColumnWidths(oSettings) {
                var iTableWidth = oSettings.nTable.offsetWidth;
                var iUserInputs = 0;
                var iTmpWidth;
                var iVisibleColumns = 0;
                var iColums = oSettings.aoColumns.length;
                var i, iIndex, iCorrector, iWidth;
                var oHeaders = $('th', oSettings.nTHead);
                var widthAttr = oSettings.nTable.getAttribute('width');
                var nWrapper = oSettings.nTable.parentNode;

                /* Convert any user input sizes into pixel sizes */
                for (i = 0 ; i < iColums ; i++) {
                    if (oSettings.aoColumns[i].bVisible) {
                        iVisibleColumns++;

                        if (oSettings.aoColumns[i].sWidth !== null) {
                            iTmpWidth = _fnConvertToWidth(oSettings.aoColumns[i].sWidthOrig,
                                nWrapper);
                            if (iTmpWidth !== null) {
                                oSettings.aoColumns[i].sWidth = _fnStringToCss(iTmpWidth);
                            }

                            iUserInputs++;
                        }
                    }
                }

                /* If the number of columns in the DOM equals the number that we have to process in 
                 * DataTables, then we can use the offsets that are created by the web-browser. No custom 
                 * sizes can be set in order for this to happen, nor scrolling used
                 */
                if (iColums == oHeaders.length && iUserInputs === 0 && iVisibleColumns == iColums &&
                    oSettings.oScroll.sX === "" && oSettings.oScroll.sY === "") {
                    for (i = 0 ; i < oSettings.aoColumns.length ; i++) {
                        iTmpWidth = $(oHeaders[i]).width();
                        if (iTmpWidth !== null) {
                            oSettings.aoColumns[i].sWidth = _fnStringToCss(iTmpWidth);
                        }
                    }
                }
                else {
                    /* Otherwise we are going to have to do some calculations to get the width of each column.
                     * Construct a 1 row table with the widest node in the data, and any user defined widths,
                     * then insert it into the DOM and allow the browser to do all the hard work of
                     * calculating table widths.
                     */
                    var
                        nCalcTmp = oSettings.nTable.cloneNode(false),
                        nTheadClone = oSettings.nTHead.cloneNode(true),
                        nBody = document.createElement('tbody'),
                        nTr = document.createElement('tr'),
                        nDivSizing;

                    nCalcTmp.removeAttribute("id");
                    nCalcTmp.appendChild(nTheadClone);
                    if (oSettings.nTFoot !== null) {
                        nCalcTmp.appendChild(oSettings.nTFoot.cloneNode(true));
                        _fnApplyToChildren(function (n) {
                            n.style.width = "";
                        }, nCalcTmp.getElementsByTagName('tr'));
                    }

                    nCalcTmp.appendChild(nBody);
                    nBody.appendChild(nTr);

                    /* Remove any sizing that was previously applied by the styles */
                    var jqColSizing = $('thead th', nCalcTmp);
                    if (jqColSizing.length === 0) {
                        jqColSizing = $('tbody tr:eq(0)>td', nCalcTmp);
                    }

                    /* Apply custom sizing to the cloned header */
                    var nThs = _fnGetUniqueThs(oSettings, nTheadClone);
                    iCorrector = 0;
                    for (i = 0 ; i < iColums ; i++) {
                        var oColumn = oSettings.aoColumns[i];
                        if (oColumn.bVisible && oColumn.sWidthOrig !== null && oColumn.sWidthOrig !== "") {
                            nThs[i - iCorrector].style.width = _fnStringToCss(oColumn.sWidthOrig);
                        }
                        else if (oColumn.bVisible) {
                            nThs[i - iCorrector].style.width = "";
                        }
                        else {
                            iCorrector++;
                        }
                    }

                    /* Find the biggest td for each column and put it into the table */
                    for (i = 0 ; i < iColums ; i++) {
                        if (oSettings.aoColumns[i].bVisible) {
                            var nTd = _fnGetWidestNode(oSettings, i);
                            if (nTd !== null) {
                                nTd = nTd.cloneNode(true);
                                if (oSettings.aoColumns[i].sContentPadding !== "") {
                                    nTd.innerHTML += oSettings.aoColumns[i].sContentPadding;
                                }
                                nTr.appendChild(nTd);
                            }
                        }
                    }

                    /* Build the table and 'display' it */
                    nWrapper.appendChild(nCalcTmp);

                    /* When scrolling (X or Y) we want to set the width of the table as appropriate. However,
                     * when not scrolling leave the table width as it is. This results in slightly different,
                     * but I think correct behaviour
                     */
                    if (oSettings.oScroll.sX !== "" && oSettings.oScroll.sXInner !== "") {
                        nCalcTmp.style.width = _fnStringToCss(oSettings.oScroll.sXInner);
                    }
                    else if (oSettings.oScroll.sX !== "") {
                        nCalcTmp.style.width = "";
                        if ($(nCalcTmp).width() < nWrapper.offsetWidth) {
                            nCalcTmp.style.width = _fnStringToCss(nWrapper.offsetWidth);
                        }
                    }
                    else if (oSettings.oScroll.sY !== "") {
                        nCalcTmp.style.width = _fnStringToCss(nWrapper.offsetWidth);
                    }
                    else if (widthAttr) {
                        nCalcTmp.style.width = _fnStringToCss(widthAttr);
                    }
                    nCalcTmp.style.visibility = "hidden";

                    /* Scrolling considerations */
                    _fnScrollingWidthAdjust(oSettings, nCalcTmp);

                    /* Read the width's calculated by the browser and store them for use by the caller. We
                     * first of all try to use the elements in the body, but it is possible that there are
                     * no elements there, under which circumstances we use the header elements
                     */
                    var oNodes = $("tbody tr:eq(0)", nCalcTmp).children();
                    if (oNodes.length === 0) {
                        oNodes = _fnGetUniqueThs(oSettings, $('thead', nCalcTmp)[0]);
                    }

                    /* Browsers need a bit of a hand when a width is assigned to any columns when 
                     * x-scrolling as they tend to collapse the table to the min-width, even if
                     * we sent the column widths. So we need to keep track of what the table width
                     * should be by summing the user given values, and the automatic values
                     */
                    if (oSettings.oScroll.sX !== "") {
                        var iTotal = 0;
                        iCorrector = 0;
                        for (i = 0 ; i < oSettings.aoColumns.length ; i++) {
                            if (oSettings.aoColumns[i].bVisible) {
                                if (oSettings.aoColumns[i].sWidthOrig === null) {
                                    iTotal += $(oNodes[iCorrector]).outerWidth();
                                }
                                else {
                                    iTotal += parseInt(oSettings.aoColumns[i].sWidth.replace('px', ''), 10) +
                                        ($(oNodes[iCorrector]).outerWidth() - $(oNodes[iCorrector]).width());
                                }
                                iCorrector++;
                            }
                        }

                        nCalcTmp.style.width = _fnStringToCss(iTotal);
                        oSettings.nTable.style.width = _fnStringToCss(iTotal);
                    }

                    iCorrector = 0;
                    for (i = 0 ; i < oSettings.aoColumns.length ; i++) {
                        if (oSettings.aoColumns[i].bVisible) {
                            iWidth = $(oNodes[iCorrector]).width();
                            if (iWidth !== null && iWidth > 0) {
                                oSettings.aoColumns[i].sWidth = _fnStringToCss(iWidth);
                            }
                            iCorrector++;
                        }
                    }

                    var cssWidth = $(nCalcTmp).css('width');
                    oSettings.nTable.style.width = (cssWidth.indexOf('%') !== -1) ?
                        cssWidth : _fnStringToCss($(nCalcTmp).outerWidth());
                    nCalcTmp.parentNode.removeChild(nCalcTmp);
                }

                if (widthAttr) {
                    oSettings.nTable.style.width = _fnStringToCss(widthAttr);
                }
            }


            /**
             * Adjust a table's width to take account of scrolling
             *  @param {object} oSettings dataTables settings object
             *  @param {node} n table node
             *  @memberof DataTable#oApi
             */
            function _fnScrollingWidthAdjust(oSettings, n) {
                if (oSettings.oScroll.sX === "" && oSettings.oScroll.sY !== "") {
                    /* When y-scrolling only, we want to remove the width of the scroll bar so the table
                     * + scroll bar will fit into the area avaialble.
                     */
                    var iOrigWidth = $(n).width();
                    n.style.width = _fnStringToCss($(n).outerWidth() - oSettings.oScroll.iBarWidth);
                }
                else if (oSettings.oScroll.sX !== "") {
                    /* When x-scrolling both ways, fix the table at it's current size, without adjusting */
                    n.style.width = _fnStringToCss($(n).outerWidth());
                }
            }


            /**
             * Get the widest node
             *  @param {object} oSettings dataTables settings object
             *  @param {int} iCol column of interest
             *  @returns {node} widest table node
             *  @memberof DataTable#oApi
             */
            function _fnGetWidestNode(oSettings, iCol) {
                var iMaxIndex = _fnGetMaxLenString(oSettings, iCol);
                if (iMaxIndex < 0) {
                    return null;
                }

                if (oSettings.aoData[iMaxIndex].nTr === null) {
                    var n = document.createElement('td');
                    n.innerHTML = _fnGetCellData(oSettings, iMaxIndex, iCol, '');
                    return n;
                }
                return _fnGetTdNodes(oSettings, iMaxIndex)[iCol];
            }


            /**
             * Get the maximum strlen for each data column
             *  @param {object} oSettings dataTables settings object
             *  @param {int} iCol column of interest
             *  @returns {string} max string length for each column
             *  @memberof DataTable#oApi
             */
            function _fnGetMaxLenString(oSettings, iCol) {
                var iMax = -1;
                var iMaxIndex = -1;

                for (var i = 0 ; i < oSettings.aoData.length ; i++) {
                    var s = _fnGetCellData(oSettings, i, iCol, 'display') + "";
                    s = s.replace(/<.*?>/g, "");
                    if (s.length > iMax) {
                        iMax = s.length;
                        iMaxIndex = i;
                    }
                }

                return iMaxIndex;
            }


            /**
             * Append a CSS unit (only if required) to a string
             *  @param {array} aArray1 first array
             *  @param {array} aArray2 second array
             *  @returns {int} 0 if match, 1 if length is different, 2 if no match
             *  @memberof DataTable#oApi
             */
            function _fnStringToCss(s) {
                if (s === null) {
                    return "0px";
                }

                if (typeof s == 'number') {
                    if (s < 0) {
                        return "0px";
                    }
                    return s + "px";
                }

                /* Check if the last character is not 0-9 */
                var c = s.charCodeAt(s.length - 1);
                if (c < 0x30 || c > 0x39) {
                    return s;
                }
                return s + "px";
            }


            /**
             * Get the width of a scroll bar in this browser being used
             *  @returns {int} width in pixels
             *  @memberof DataTable#oApi
             */
            function _fnScrollBarWidth() {
                var inner = document.createElement('p');
                var style = inner.style;
                style.width = "100%";
                style.height = "200px";
                style.padding = "0px";

                var outer = document.createElement('div');
                style = outer.style;
                style.position = "absolute";
                style.top = "0px";
                style.left = "0px";
                style.visibility = "hidden";
                style.width = "200px";
                style.height = "150px";
                style.padding = "0px";
                style.overflow = "hidden";
                outer.appendChild(inner);

                document.body.appendChild(outer);
                var w1 = inner.offsetWidth;
                outer.style.overflow = 'scroll';
                var w2 = inner.offsetWidth;
                if (w1 == w2) {
                    w2 = outer.clientWidth;
                }

                document.body.removeChild(outer);
                return (w1 - w2);
            }

            /**
             * Change the order of the table
             *  @param {object} oSettings dataTables settings object
             *  @param {bool} bApplyClasses optional - should we apply classes or not
             *  @memberof DataTable#oApi
             */
            function _fnSort(oSettings, bApplyClasses) {
                var
                    i, iLen, j, jLen, k, kLen,
                    sDataType, nTh,
                    aaSort = [],
                    aiOrig = [],
                    oSort = DataTable.ext.oSort,
                    aoData = oSettings.aoData,
                    aoColumns = oSettings.aoColumns,
                    oAria = oSettings.oLanguage.oAria;

                /* No sorting required if server-side or no sorting array */
                if (!oSettings.oFeatures.bServerSide &&
                    (oSettings.aaSorting.length !== 0 || oSettings.aaSortingFixed !== null)) {
                    aaSort = (oSettings.aaSortingFixed !== null) ?
                        oSettings.aaSortingFixed.concat(oSettings.aaSorting) :
                        oSettings.aaSorting.slice();

                    /* If there is a sorting data type, and a function belonging to it, then we need to
                     * get the data from the developer's function and apply it for this column
                     */
                    for (i = 0 ; i < aaSort.length ; i++) {
                        var iColumn = aaSort[i][0];
                        var iVisColumn = _fnColumnIndexToVisible(oSettings, iColumn);
                        sDataType = oSettings.aoColumns[iColumn].sSortDataType;
                        if (DataTable.ext.afnSortData[sDataType]) {
                            var aData = DataTable.ext.afnSortData[sDataType].call(
                                oSettings.oInstance, oSettings, iColumn, iVisColumn
                            );
                            if (aData.length === aoData.length) {
                                for (j = 0, jLen = aoData.length ; j < jLen ; j++) {
                                    _fnSetCellData(oSettings, j, iColumn, aData[j]);
                                }
                            }
                            else {
                                _fnLog(oSettings, 0, "Returned data sort array (col " + iColumn + ") is the wrong length");
                            }
                        }
                    }

                    /* Create a value - key array of the current row positions such that we can use their
                     * current position during the sort, if values match, in order to perform stable sorting
                     */
                    for (i = 0, iLen = oSettings.aiDisplayMaster.length ; i < iLen ; i++) {
                        aiOrig[oSettings.aiDisplayMaster[i]] = i;
                    }

                    /* Build an internal data array which is specific to the sort, so we can get and prep
                     * the data to be sorted only once, rather than needing to do it every time the sorting
                     * function runs. This make the sorting function a very simple comparison
                     */
                    var iSortLen = aaSort.length;
                    var fnSortFormat, aDataSort;
                    for (i = 0, iLen = aoData.length ; i < iLen ; i++) {
                        for (j = 0 ; j < iSortLen ; j++) {
                            aDataSort = aoColumns[aaSort[j][0]].aDataSort;

                            for (k = 0, kLen = aDataSort.length ; k < kLen ; k++) {
                                sDataType = aoColumns[aDataSort[k]].sType;
                                fnSortFormat = oSort[(sDataType ? sDataType : 'string') + "-pre"];

                                aoData[i]._aSortData[aDataSort[k]] = fnSortFormat ?
                                    fnSortFormat(_fnGetCellData(oSettings, i, aDataSort[k], 'sort')) :
                                    _fnGetCellData(oSettings, i, aDataSort[k], 'sort');
                            }
                        }
                    }

                    /* Do the sort - here we want multi-column sorting based on a given data source (column)
                     * and sorting function (from oSort) in a certain direction. It's reasonably complex to
                     * follow on it's own, but this is what we want (example two column sorting):
                     *  fnLocalSorting = function(a,b){
                     *  	var iTest;
                     *  	iTest = oSort['string-asc']('data11', 'data12');
                     *  	if (iTest !== 0)
                     *  		return iTest;
                     *    iTest = oSort['numeric-desc']('data21', 'data22');
                     *    if (iTest !== 0)
                     *  		return iTest;
                     *  	return oSort['numeric-asc']( aiOrig[a], aiOrig[b] );
                     *  }
                     * Basically we have a test for each sorting column, if the data in that column is equal,
                     * test the next column. If all columns match, then we use a numeric sort on the row 
                     * positions in the original data array to provide a stable sort.
                     */
                    oSettings.aiDisplayMaster.sort(function (a, b) {
                        var k, l, lLen, iTest, aDataSort, sDataType;
                        for (k = 0 ; k < iSortLen ; k++) {
                            aDataSort = aoColumns[aaSort[k][0]].aDataSort;

                            for (l = 0, lLen = aDataSort.length ; l < lLen ; l++) {
                                sDataType = aoColumns[aDataSort[l]].sType;

                                iTest = oSort[(sDataType ? sDataType : 'string') + "-" + aaSort[k][1]](
                                    aoData[a]._aSortData[aDataSort[l]],
                                    aoData[b]._aSortData[aDataSort[l]]
                                );

                                if (iTest !== 0) {
                                    return iTest;
                                }
                            }
                        }

                        return oSort['numeric-asc'](aiOrig[a], aiOrig[b]);
                    });
                }

                /* Alter the sorting classes to take account of the changes */
                if ((bApplyClasses === undefined || bApplyClasses) && !oSettings.oFeatures.bDeferRender) {
                    _fnSortingClasses(oSettings);
                }

                for (i = 0, iLen = oSettings.aoColumns.length ; i < iLen ; i++) {
                    var sTitle = aoColumns[i].sTitle.replace(/<.*?>/g, "");
                    nTh = aoColumns[i].nTh;
                    nTh.removeAttribute('aria-sort');
                    nTh.removeAttribute('aria-label');

                    /* In ARIA only the first sorting column can be marked as sorting - no multi-sort option */
                    if (aoColumns[i].bSortable) {
                        if (aaSort.length > 0 && aaSort[0][0] == i) {
                            nTh.setAttribute('aria-sort', aaSort[0][1] == "asc" ? "ascending" : "descending");

                            var nextSort = (aoColumns[i].asSorting[aaSort[0][2] + 1]) ?
                                aoColumns[i].asSorting[aaSort[0][2] + 1] : aoColumns[i].asSorting[0];
                            nTh.setAttribute('aria-label', sTitle +
                                (nextSort == "asc" ? oAria.sSortAscending : oAria.sSortDescending));
                        }
                        else {
                            nTh.setAttribute('aria-label', sTitle +
                                (aoColumns[i].asSorting[0] == "asc" ? oAria.sSortAscending : oAria.sSortDescending));
                        }
                    }
                    else {
                        nTh.setAttribute('aria-label', sTitle);
                    }
                }

                /* Tell the draw function that we have sorted the data */
                oSettings.bSorted = true;
                $(oSettings.oInstance).trigger('sort', oSettings);

                /* Copy the master data into the draw array and re-draw */
                if (oSettings.oFeatures.bFilter) {
                    /* _fnFilter() will redraw the table for us */
                    _fnFilterComplete(oSettings, oSettings.oPreviousSearch, 1);
                }
                else {
                    oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();
                    oSettings._iDisplayStart = 0; /* reset display back to page 0 */
                    _fnCalculateEnd(oSettings);
                    _fnDraw(oSettings);
                }
            }


            /**
             * Attach a sort handler (click) to a node
             *  @param {object} oSettings dataTables settings object
             *  @param {node} nNode node to attach the handler to
             *  @param {int} iDataIndex column sorting index
             *  @param {function} [fnCallback] callback function
             *  @memberof DataTable#oApi
             */
            function _fnSortAttachListener(oSettings, nNode, iDataIndex, fnCallback) {
                _fnBindAction(nNode, {}, function (e) {
                    /* If the column is not sortable - don't to anything */
                    if (oSettings.aoColumns[iDataIndex].bSortable === false) {
                        return;
                    }

                    /*
                     * This is a little bit odd I admit... I declare a temporary function inside the scope of
                     * _fnBuildHead and the click handler in order that the code presented here can be used 
                     * twice - once for when bProcessing is enabled, and another time for when it is 
                     * disabled, as we need to perform slightly different actions.
                     *   Basically the issue here is that the Javascript engine in modern browsers don't 
                     * appear to allow the rendering engine to update the display while it is still executing
                     * it's thread (well - it does but only after long intervals). This means that the 
                     * 'processing' display doesn't appear for a table sort. To break the js thread up a bit
                     * I force an execution break by using setTimeout - but this breaks the expected 
                     * thread continuation for the end-developer's point of view (their code would execute
                     * too early), so we only do it when we absolutely have to.
                     */
                    var fnInnerSorting = function () {
                        var iColumn, iNextSort;

                        /* If the shift key is pressed then we are multiple column sorting */
                        if (e.shiftKey) {
                            /* Are we already doing some kind of sort on this column? */
                            var bFound = false;
                            for (var i = 0 ; i < oSettings.aaSorting.length ; i++) {
                                if (oSettings.aaSorting[i][0] == iDataIndex) {
                                    bFound = true;
                                    iColumn = oSettings.aaSorting[i][0];
                                    iNextSort = oSettings.aaSorting[i][2] + 1;

                                    if (!oSettings.aoColumns[iColumn].asSorting[iNextSort]) {
                                        /* Reached the end of the sorting options, remove from multi-col sort */
                                        oSettings.aaSorting.splice(i, 1);
                                    }
                                    else {
                                        /* Move onto next sorting direction */
                                        oSettings.aaSorting[i][1] = oSettings.aoColumns[iColumn].asSorting[iNextSort];
                                        oSettings.aaSorting[i][2] = iNextSort;
                                    }
                                    break;
                                }
                            }

                            /* No sort yet - add it in */
                            if (bFound === false) {
                                oSettings.aaSorting.push([iDataIndex,
                                    oSettings.aoColumns[iDataIndex].asSorting[0], 0]);
                            }
                        }
                        else {
                            /* If no shift key then single column sort */
                            if (oSettings.aaSorting.length == 1 && oSettings.aaSorting[0][0] == iDataIndex) {
                                iColumn = oSettings.aaSorting[0][0];
                                iNextSort = oSettings.aaSorting[0][2] + 1;
                                if (!oSettings.aoColumns[iColumn].asSorting[iNextSort]) {
                                    iNextSort = 0;
                                }
                                oSettings.aaSorting[0][1] = oSettings.aoColumns[iColumn].asSorting[iNextSort];
                                oSettings.aaSorting[0][2] = iNextSort;
                            }
                            else {
                                oSettings.aaSorting.splice(0, oSettings.aaSorting.length);
                                oSettings.aaSorting.push([iDataIndex,
                                    oSettings.aoColumns[iDataIndex].asSorting[0], 0]);
                            }
                        }

                        /* Run the sort */
                        _fnSort(oSettings);
                    }; /* /fnInnerSorting */

                    if (!oSettings.oFeatures.bProcessing) {
                        fnInnerSorting();
                    }
                    else {
                        _fnProcessingDisplay(oSettings, true);
                        setTimeout(function () {
                            fnInnerSorting();
                            if (!oSettings.oFeatures.bServerSide) {
                                _fnProcessingDisplay(oSettings, false);
                            }
                        }, 0);
                    }

                    /* Call the user specified callback function - used for async user interaction */
                    if (typeof fnCallback == 'function') {
                        fnCallback(oSettings);
                    }
                });
            }


            /**
             * Set the sorting classes on the header, Note: it is safe to call this function 
             * when bSort and bSortClasses are false
             *  @param {object} oSettings dataTables settings object
             *  @memberof DataTable#oApi
             */
            function _fnSortingClasses(oSettings) {
                var i, iLen, j, jLen, iFound;
                var aaSort, sClass;
                var iColumns = oSettings.aoColumns.length;
                var oClasses = oSettings.oClasses;

                for (i = 0 ; i < iColumns ; i++) {
                    if (oSettings.aoColumns[i].bSortable) {
                        $(oSettings.aoColumns[i].nTh).removeClass(oClasses.sSortAsc + " " + oClasses.sSortDesc +
                            " " + oSettings.aoColumns[i].sSortingClass);
                    }
                }

                if (oSettings.aaSortingFixed !== null) {
                    aaSort = oSettings.aaSortingFixed.concat(oSettings.aaSorting);
                }
                else {
                    aaSort = oSettings.aaSorting.slice();
                }

                /* Apply the required classes to the header */
                for (i = 0 ; i < oSettings.aoColumns.length ; i++) {
                    if (oSettings.aoColumns[i].bSortable) {
                        sClass = oSettings.aoColumns[i].sSortingClass;
                        iFound = -1;
                        for (j = 0 ; j < aaSort.length ; j++) {
                            if (aaSort[j][0] == i) {
                                sClass = (aaSort[j][1] == "asc") ?
                                    oClasses.sSortAsc : oClasses.sSortDesc;
                                iFound = j;
                                break;
                            }
                        }
                        $(oSettings.aoColumns[i].nTh).addClass(sClass);

                        if (oSettings.bJUI) {
                            /* jQuery UI uses extra markup */
                            var jqSpan = $("span." + oClasses.sSortIcon, oSettings.aoColumns[i].nTh);
                            jqSpan.removeClass(oClasses.sSortJUIAsc + " " + oClasses.sSortJUIDesc + " " +
                                oClasses.sSortJUI + " " + oClasses.sSortJUIAscAllowed + " " + oClasses.sSortJUIDescAllowed);

                            var sSpanClass;
                            if (iFound == -1) {
                                sSpanClass = oSettings.aoColumns[i].sSortingClassJUI;
                            }
                            else if (aaSort[iFound][1] == "asc") {
                                sSpanClass = oClasses.sSortJUIAsc;
                            }
                            else {
                                sSpanClass = oClasses.sSortJUIDesc;
                            }

                            jqSpan.addClass(sSpanClass);
                        }
                    }
                    else {
                        /* No sorting on this column, so add the base class. This will have been assigned by
                         * _fnAddColumn
                         */
                        $(oSettings.aoColumns[i].nTh).addClass(oSettings.aoColumns[i].sSortingClass);
                    }
                }

                /* 
                 * Apply the required classes to the table body
                 * Note that this is given as a feature switch since it can significantly slow down a sort
                 * on large data sets (adding and removing of classes is always slow at the best of times..)
                 * Further to this, note that this code is admittedly fairly ugly. It could be made a lot 
                 * simpler using jQuery selectors and add/removeClass, but that is significantly slower
                 * (on the order of 5 times slower) - hence the direct DOM manipulation here.
                 * Note that for deferred drawing we do use jQuery - the reason being that taking the first
                 * row found to see if the whole column needs processed can miss classes since the first
                 * column might be new.
                 */
                sClass = oClasses.sSortColumn;

                if (oSettings.oFeatures.bSort && oSettings.oFeatures.bSortClasses) {
                    var nTds = _fnGetTdNodes(oSettings);

                    /* Determine what the sorting class for each column should be */
                    var iClass, iTargetCol;
                    var asClasses = [];
                    for (i = 0; i < iColumns; i++) {
                        asClasses.push("");
                    }
                    for (i = 0, iClass = 1; i < aaSort.length; i++) {
                        iTargetCol = parseInt(aaSort[i][0], 10);
                        asClasses[iTargetCol] = sClass + iClass;

                        if (iClass < 3) {
                            iClass++;
                        }
                    }

                    /* Make changes to the classes for each cell as needed */
                    var reClass = new RegExp(sClass + "[123]");
                    var sTmpClass, sCurrentClass, sNewClass;
                    for (i = 0, iLen = nTds.length; i < iLen; i++) {
                        /* Determine which column we're looking at */
                        iTargetCol = i % iColumns;

                        /* What is the full list of classes now */
                        sCurrentClass = nTds[i].className;
                        /* What sorting class should be applied? */
                        sNewClass = asClasses[iTargetCol];
                        /* What would the new full list be if we did a replacement? */
                        sTmpClass = sCurrentClass.replace(reClass, sNewClass);

                        if (sTmpClass != sCurrentClass) {
                            /* We changed something */
                            nTds[i].className = $.trim(sTmpClass);
                        }
                        else if (sNewClass.length > 0 && sCurrentClass.indexOf(sNewClass) == -1) {
                            /* We need to add a class */
                            nTds[i].className = sCurrentClass + " " + sNewClass;
                        }
                    }
                }
            }



            /**
             * Save the state of a table in a cookie such that the page can be reloaded
             *  @param {object} oSettings dataTables settings object
             *  @memberof DataTable#oApi
             */
            function _fnSaveState(oSettings) {
                if (!oSettings.oFeatures.bStateSave || oSettings.bDestroying) {
                    return;
                }

                /* Store the interesting variables */
                var i, iLen, bInfinite = oSettings.oScroll.bInfinite;
                var oState = {
                    "iCreate": new Date().getTime(),
                    "iStart": (bInfinite ? 0 : oSettings._iDisplayStart),
                    "iEnd": (bInfinite ? oSettings._iDisplayLength : oSettings._iDisplayEnd),
                    "iLength": oSettings._iDisplayLength,
                    "aaSorting": $.extend(true, [], oSettings.aaSorting),
                    "oSearch": $.extend(true, {}, oSettings.oPreviousSearch),
                    "aoSearchCols": $.extend(true, [], oSettings.aoPreSearchCols),
                    "abVisCols": []
                };

                for (i = 0, iLen = oSettings.aoColumns.length ; i < iLen ; i++) {
                    oState.abVisCols.push(oSettings.aoColumns[i].bVisible);
                }

                _fnCallbackFire(oSettings, "aoStateSaveParams", 'stateSaveParams', [oSettings, oState]);

                oSettings.fnStateSave.call(oSettings.oInstance, oSettings, oState);
            }


            /**
             * Attempt to load a saved table state from a cookie
             *  @param {object} oSettings dataTables settings object
             *  @param {object} oInit DataTables init object so we can override settings
             *  @memberof DataTable#oApi
             */
            function _fnLoadState(oSettings, oInit) {
                if (!oSettings.oFeatures.bStateSave) {
                    return;
                }

                var oData = oSettings.fnStateLoad.call(oSettings.oInstance, oSettings);
                if (!oData) {
                    return;
                }

                /* Allow custom and plug-in manipulation functions to alter the saved data set and
                 * cancelling of loading by returning false
                 */
                var abStateLoad = _fnCallbackFire(oSettings, 'aoStateLoadParams', 'stateLoadParams', [oSettings, oData]);
                if ($.inArray(false, abStateLoad) !== -1) {
                    return;
                }

                /* Store the saved state so it might be accessed at any time */
                oSettings.oLoadedState = $.extend(true, {}, oData);

                /* Restore key features */
                oSettings._iDisplayStart = oData.iStart;
                oSettings.iInitDisplayStart = oData.iStart;
                oSettings._iDisplayEnd = oData.iEnd;
                oSettings._iDisplayLength = oData.iLength;
                oSettings.aaSorting = oData.aaSorting.slice();
                oSettings.saved_aaSorting = oData.aaSorting.slice();

                /* Search filtering  */
                $.extend(oSettings.oPreviousSearch, oData.oSearch);
                $.extend(true, oSettings.aoPreSearchCols, oData.aoSearchCols);

                /* Column visibility state
                 * Pass back visibility settings to the init handler, but to do not here override
                 * the init object that the user might have passed in
                 */
                oInit.saved_aoColumns = [];
                for (var i = 0 ; i < oData.abVisCols.length ; i++) {
                    oInit.saved_aoColumns[i] = {};
                    oInit.saved_aoColumns[i].bVisible = oData.abVisCols[i];
                }

                _fnCallbackFire(oSettings, 'aoStateLoaded', 'stateLoaded', [oSettings, oData]);
            }


            /**
             * Create a new cookie with a value to store the state of a table
             *  @param {string} sName name of the cookie to create
             *  @param {string} sValue the value the cookie should take
             *  @param {int} iSecs duration of the cookie
             *  @param {string} sBaseName sName is made up of the base + file name - this is the base
             *  @param {function} fnCallback User definable function to modify the cookie
             *  @memberof DataTable#oApi
             */
            function _fnCreateCookie(sName, sValue, iSecs, sBaseName, fnCallback) {
                var date = new Date();
                date.setTime(date.getTime() + (iSecs * 1000));

                /* 
                 * Shocking but true - it would appear IE has major issues with having the path not having
                 * a trailing slash on it. We need the cookie to be available based on the path, so we
                 * have to append the file name to the cookie name. Appalling. Thanks to vex for adding the
                 * patch to use at least some of the path
                 */
                var aParts = window.location.pathname.split('/');
                var sNameFile = sName + '_' + aParts.pop().replace(/[\/:]/g, "").toLowerCase();
                var sFullCookie, oData;

                if (fnCallback !== null) {
                    oData = (typeof $.parseJSON === 'function') ?
                        $.parseJSON(sValue) : eval('(' + sValue + ')');
                    sFullCookie = fnCallback(sNameFile, oData, date.toGMTString(),
                        aParts.join('/') + "/");
                }
                else {
                    sFullCookie = sNameFile + "=" + encodeURIComponent(sValue) +
                        "; expires=" + date.toGMTString() + "; path=" + aParts.join('/') + "/";
                }

                /* Are we going to go over the cookie limit of 4KiB? If so, try to delete a cookies
                 * belonging to DataTables.
                 */
                var
                    aCookies = document.cookie.split(';'),
                    iNewCookieLen = sFullCookie.split(';')[0].length,
                    aOldCookies = [];

                if (iNewCookieLen + document.cookie.length + 10 > 4096) /* Magic 10 for padding */ {
                    for (var i = 0, iLen = aCookies.length ; i < iLen ; i++) {
                        if (aCookies[i].indexOf(sBaseName) != -1) {
                            /* It's a DataTables cookie, so eval it and check the time stamp */
                            var aSplitCookie = aCookies[i].split('=');
                            try {
                                oData = eval('(' + decodeURIComponent(aSplitCookie[1]) + ')');

                                if (oData && oData.iCreate) {
                                    aOldCookies.push({
                                        "name": aSplitCookie[0],
                                        "time": oData.iCreate
                                    });
                                }
                            }
                            catch (e) { }
                        }
                    }

                    // Make sure we delete the oldest ones first
                    aOldCookies.sort(function (a, b) {
                        return b.time - a.time;
                    });

                    // Eliminate as many old DataTables cookies as we need to
                    while (iNewCookieLen + document.cookie.length + 10 > 4096) {
                        if (aOldCookies.length === 0) {
                            // Deleted all DT cookies and still not enough space. Can't state save
                            return;
                        }

                        var old = aOldCookies.pop();
                        document.cookie = old.name + "=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=" +
                            aParts.join('/') + "/";
                    }
                }

                document.cookie = sFullCookie;
            }


            /**
             * Read an old cookie to get a cookie with an old table state
             *  @param {string} sName name of the cookie to read
             *  @returns {string} contents of the cookie - or null if no cookie with that name found
             *  @memberof DataTable#oApi
             */
            function _fnReadCookie(sName) {
                var
                    aParts = window.location.pathname.split('/'),
                    sNameEQ = sName + '_' + aParts[aParts.length - 1].replace(/[\/:]/g, "").toLowerCase() + '=',
                    sCookieContents = document.cookie.split(';');

                for (var i = 0 ; i < sCookieContents.length ; i++) {
                    var c = sCookieContents[i];

                    while (c.charAt(0) == ' ') {
                        c = c.substring(1, c.length);
                    }

                    if (c.indexOf(sNameEQ) === 0) {
                        return decodeURIComponent(c.substring(sNameEQ.length, c.length));
                    }
                }
                return null;
            }


            /**
             * Return the settings object for a particular table
             *  @param {node} nTable table we are using as a dataTable
             *  @returns {object} Settings object - or null if not found
             *  @memberof DataTable#oApi
             */
            function _fnSettingsFromNode(nTable) {
                for (var i = 0 ; i < DataTable.settings.length ; i++) {
                    if (DataTable.settings[i].nTable === nTable) {
                        return DataTable.settings[i];
                    }
                }

                return null;
            }


            /**
             * Return an array with the TR nodes for the table
             *  @param {object} oSettings dataTables settings object
             *  @returns {array} TR array
             *  @memberof DataTable#oApi
             */
            function _fnGetTrNodes(oSettings) {
                var aNodes = [];
                var aoData = oSettings.aoData;
                for (var i = 0, iLen = aoData.length ; i < iLen ; i++) {
                    if (aoData[i].nTr !== null) {
                        aNodes.push(aoData[i].nTr);
                    }
                }
                return aNodes;
            }


            /**
             * Return an flat array with all TD nodes for the table, or row
             *  @param {object} oSettings dataTables settings object
             *  @param {int} [iIndividualRow] aoData index to get the nodes for - optional 
             *    if not given then the return array will contain all nodes for the table
             *  @returns {array} TD array
             *  @memberof DataTable#oApi
             */
            function _fnGetTdNodes(oSettings, iIndividualRow) {
                var anReturn = [];
                var iCorrector;
                var anTds, nTd;
                var iRow, iRows = oSettings.aoData.length,
                    iColumn, iColumns, oData, sNodeName, iStart = 0, iEnd = iRows;

                /* Allow the collection to be limited to just one row */
                if (iIndividualRow !== undefined) {
                    iStart = iIndividualRow;
                    iEnd = iIndividualRow + 1;
                }

                for (iRow = iStart ; iRow < iEnd ; iRow++) {
                    oData = oSettings.aoData[iRow];
                    if (oData.nTr !== null) {
                        /* get the TD child nodes - taking into account text etc nodes */
                        anTds = [];
                        nTd = oData.nTr.firstChild;
                        while (nTd) {
                            sNodeName = nTd.nodeName.toLowerCase();
                            if (sNodeName == 'td' || sNodeName == 'th') {
                                anTds.push(nTd);
                            }
                            nTd = nTd.nextSibling;
                        }

                        iCorrector = 0;
                        for (iColumn = 0, iColumns = oSettings.aoColumns.length ; iColumn < iColumns ; iColumn++) {
                            if (oSettings.aoColumns[iColumn].bVisible) {
                                anReturn.push(anTds[iColumn - iCorrector]);
                            }
                            else {
                                anReturn.push(oData._anHidden[iColumn]);
                                iCorrector++;
                            }
                        }
                    }
                }

                return anReturn;
            }


            /**
             * Log an error message
             *  @param {object} oSettings dataTables settings object
             *  @param {int} iLevel log error messages, or display them to the user
             *  @param {string} sMesg error message
             *  @memberof DataTable#oApi
             */
            function _fnLog(oSettings, iLevel, sMesg) {
                var sAlert = (oSettings === null) ?
                    "DataTables warning: " + sMesg :
                    "DataTables warning (table id = '" + oSettings.sTableId + "'): " + sMesg;

                if (iLevel === 0) {
                    if (DataTable.ext.sErrMode == 'alert') {
                        alert(sAlert);
                    }
                    else {
                        throw new Error(sAlert);
                    }
                    return;
                }
                else if (window.console && console.log) {
                    console.log(sAlert);
                }
            }


            /**
             * See if a property is defined on one object, if so assign it to the other object
             *  @param {object} oRet target object
             *  @param {object} oSrc source object
             *  @param {string} sName property
             *  @param {string} [sMappedName] name to map too - optional, sName used if not given
             *  @memberof DataTable#oApi
             */
            function _fnMap(oRet, oSrc, sName, sMappedName) {
                if (sMappedName === undefined) {
                    sMappedName = sName;
                }
                if (oSrc[sName] !== undefined) {
                    oRet[sMappedName] = oSrc[sName];
                }
            }


            /**
             * Extend objects - very similar to jQuery.extend, but deep copy objects, and shallow
             * copy arrays. The reason we need to do this, is that we don't want to deep copy array
             * init values (such as aaSorting) since the dev wouldn't be able to override them, but
             * we do want to deep copy arrays.
             *  @param {object} oOut Object to extend
             *  @param {object} oExtender Object from which the properties will be applied to oOut
             *  @returns {object} oOut Reference, just for convenience - oOut === the return.
             *  @memberof DataTable#oApi
             *  @todo This doesn't take account of arrays inside the deep copied objects.
             */
            function _fnExtend(oOut, oExtender) {
                var val;

                for (var prop in oExtender) {
                    if (oExtender.hasOwnProperty(prop)) {
                        val = oExtender[prop];

                        if (typeof oInit[prop] === 'object' && val !== null && $.isArray(val) === false) {
                            $.extend(true, oOut[prop], val);
                        }
                        else {
                            oOut[prop] = val;
                        }
                    }
                }

                return oOut;
            }


            /**
             * Bind an event handers to allow a click or return key to activate the callback.
             * This is good for accessibility since a return on the keyboard will have the
             * same effect as a click, if the element has focus.
             *  @param {element} n Element to bind the action to
             *  @param {object} oData Data object to pass to the triggered function
             *  @param {function} fn Callback function for when the event is triggered
             *  @memberof DataTable#oApi
             */
            function _fnBindAction(n, oData, fn) {
                $(n)
                    .bind('click.DT', oData, function (e) {
                        n.blur(); // Remove focus outline for mouse users
                        fn(e);
                    })
                    .bind('keypress.DT', oData, function (e) {
                        if (e.which === 13) {
                            fn(e);
                        }
                    })
                    .bind('selectstart.DT', function () {
                        /* Take the brutal approach to cancelling text selection */
                        return false;
                    });
            }


            /**
             * Register a callback function. Easily allows a callback function to be added to
             * an array store of callback functions that can then all be called together.
             *  @param {object} oSettings dataTables settings object
             *  @param {string} sStore Name of the array storage for the callbacks in oSettings
             *  @param {function} fn Function to be called back
             *  @param {string} sName Identifying name for the callback (i.e. a label)
             *  @memberof DataTable#oApi
             */
            function _fnCallbackReg(oSettings, sStore, fn, sName) {
                if (fn) {
                    oSettings[sStore].push({
                        "fn": fn,
                        "sName": sName
                    });
                }
            }


            /**
             * Fire callback functions and trigger events. Note that the loop over the callback
             * array store is done backwards! Further note that you do not want to fire off triggers
             * in time sensitive applications (for example cell creation) as its slow.
             *  @param {object} oSettings dataTables settings object
             *  @param {string} sStore Name of the array storage for the callbacks in oSettings
             *  @param {string} sTrigger Name of the jQuery custom event to trigger. If null no trigger
             *    is fired
             *  @param {array} aArgs Array of arguments to pass to the callback function / trigger
             *  @memberof DataTable#oApi
             */
            function _fnCallbackFire(oSettings, sStore, sTrigger, aArgs) {
                var aoStore = oSettings[sStore];
                var aRet = [];

                for (var i = aoStore.length - 1 ; i >= 0 ; i--) {
                    aRet.push(aoStore[i].fn.apply(oSettings.oInstance, aArgs));
                }

                if (sTrigger !== null) {
                    $(oSettings.oInstance).trigger(sTrigger, aArgs);
                }

                return aRet;
            }


            /**
             * JSON stringify. If JSON.stringify it provided by the browser, json2.js or any other
             * library, then we use that as it is fast, safe and accurate. If the function isn't 
             * available then we need to built it ourselves - the inspiration for this function comes
             * from Craig Buckler ( http://www.sitepoint.com/javascript-json-serialization/ ). It is
             * not perfect and absolutely should not be used as a replacement to json2.js - but it does
             * do what we need, without requiring a dependency for DataTables.
             *  @param {object} o JSON object to be converted
             *  @returns {string} JSON string
             *  @memberof DataTable#oApi
             */
            var _fnJsonString = (window.JSON) ? JSON.stringify : function (o) {
                /* Not an object or array */
                var sType = typeof o;
                if (sType !== "object" || o === null) {
                    // simple data type
                    if (sType === "string") {
                        o = '"' + o + '"';
                    }
                    return o + "";
                }

                /* If object or array, need to recurse over it */
                var
                    sProp, mValue,
                    json = [],
                    bArr = $.isArray(o);

                for (sProp in o) {
                    mValue = o[sProp];
                    sType = typeof mValue;

                    if (sType === "string") {
                        mValue = '"' + mValue + '"';
                    }
                    else if (sType === "object" && mValue !== null) {
                        mValue = _fnJsonString(mValue);
                    }

                    json.push((bArr ? "" : '"' + sProp + '":') + mValue);
                }

                return (bArr ? "[" : "{") + json + (bArr ? "]" : "}");
            };


            /**
             * From some browsers (specifically IE6/7) we need special handling to work around browser
             * bugs - this function is used to detect when these workarounds are needed.
             *  @param {object} oSettings dataTables settings object
             *  @memberof DataTable#oApi
             */
            function _fnBrowserDetect(oSettings) {
                /* IE6/7 will oversize a width 100% element inside a scrolling element, to include the
                 * width of the scrollbar, while other browsers ensure the inner element is contained
                 * without forcing scrolling
                 */
                var n = $(
                    '<div style="position:absolute; top:0; left:0; height:1px; width:1px; overflow:hidden">' +
                        '<div style="position:absolute; top:1px; left:1px; width:100px; overflow:scroll;">' +
                            '<div id="DT_BrowserTest" style="width:100%; height:10px;"></div>' +
                        '</div>' +
                    '</div>')[0];

                document.body.appendChild(n);
                oSettings.oBrowser.bScrollOversize = $('#DT_BrowserTest', n)[0].offsetWidth === 100 ? true : false;
                document.body.removeChild(n);
            }


            /**
             * Perform a jQuery selector action on the table's TR elements (from the tbody) and
             * return the resulting jQuery object.
             *  @param {string|node|jQuery} sSelector jQuery selector or node collection to act on
             *  @param {object} [oOpts] Optional parameters for modifying the rows to be included
             *  @param {string} [oOpts.filter=none] Select TR elements that meet the current filter
             *    criterion ("applied") or all TR elements (i.e. no filter).
             *  @param {string} [oOpts.order=current] Order of the TR elements in the processed array.
             *    Can be either 'current', whereby the current sorting of the table is used, or
             *    'original' whereby the original order the data was read into the table is used.
             *  @param {string} [oOpts.page=all] Limit the selection to the currently displayed page
             *    ("current") or not ("all"). If 'current' is given, then order is assumed to be 
             *    'current' and filter is 'applied', regardless of what they might be given as.
             *  @returns {object} jQuery object, filtered by the given selector.
             *  @dtopt API
             *
             *  @example
             *    $(document).ready(function() {
             *      var oTable = $('#example').dataTable();
             *
             *      // Highlight every second row
             *      oTable.$('tr:odd').css('backgroundColor', 'blue');
             *    } );
             *
             *  @example
             *    $(document).ready(function() {
             *      var oTable = $('#example').dataTable();
             *
             *      // Filter to rows with 'Webkit' in them, add a background colour and then
             *      // remove the filter, thus highlighting the 'Webkit' rows only.
             *      oTable.fnFilter('Webkit');
             *      oTable.$('tr', {"filter": "applied"}).css('backgroundColor', 'blue');
             *      oTable.fnFilter('');
             *    } );
             */
            this.$ = function (sSelector, oOpts) {
                var i, iLen, a = [], tr;
                var oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);
                var aoData = oSettings.aoData;
                var aiDisplay = oSettings.aiDisplay;
                var aiDisplayMaster = oSettings.aiDisplayMaster;

                if (!oOpts) {
                    oOpts = {};
                }

                oOpts = $.extend({}, {
                    "filter": "none", // applied
                    "order": "current", // "original"
                    "page": "all" // current
                }, oOpts);

                // Current page implies that order=current and fitler=applied, since it is fairly
                // senseless otherwise
                if (oOpts.page == 'current') {
                    for (i = oSettings._iDisplayStart, iLen = oSettings.fnDisplayEnd() ; i < iLen ; i++) {
                        tr = aoData[aiDisplay[i]].nTr;
                        if (tr) {
                            a.push(tr);
                        }
                    }
                }
                else if (oOpts.order == "current" && oOpts.filter == "none") {
                    for (i = 0, iLen = aiDisplayMaster.length ; i < iLen ; i++) {
                        tr = aoData[aiDisplayMaster[i]].nTr;
                        if (tr) {
                            a.push(tr);
                        }
                    }
                }
                else if (oOpts.order == "current" && oOpts.filter == "applied") {
                    for (i = 0, iLen = aiDisplay.length ; i < iLen ; i++) {
                        tr = aoData[aiDisplay[i]].nTr;
                        if (tr) {
                            a.push(tr);
                        }
                    }
                }
                else if (oOpts.order == "original" && oOpts.filter == "none") {
                    for (i = 0, iLen = aoData.length ; i < iLen ; i++) {
                        tr = aoData[i].nTr;
                        if (tr) {
                            a.push(tr);
                        }
                    }
                }
                else if (oOpts.order == "original" && oOpts.filter == "applied") {
                    for (i = 0, iLen = aoData.length ; i < iLen ; i++) {
                        tr = aoData[i].nTr;
                        if ($.inArray(i, aiDisplay) !== -1 && tr) {
                            a.push(tr);
                        }
                    }
                }
                else {
                    _fnLog(oSettings, 1, "Unknown selection options");
                }

                /* We need to filter on the TR elements and also 'find' in their descendants
                 * to make the selector act like it would in a full table - so we need
                 * to build both results and then combine them together
                 */
                var jqA = $(a);
                var jqTRs = jqA.filter(sSelector);
                var jqDescendants = jqA.find(sSelector);

                return $([].concat($.makeArray(jqTRs), $.makeArray(jqDescendants)));
            };


            /**
             * Almost identical to $ in operation, but in this case returns the data for the matched
             * rows - as such, the jQuery selector used should match TR row nodes or TD/TH cell nodes
             * rather than any descendants, so the data can be obtained for the row/cell. If matching
             * rows are found, the data returned is the original data array/object that was used to  
             * create the row (or a generated array if from a DOM source).
             *
             * This method is often useful in-combination with $ where both functions are given the
             * same parameters and the array indexes will match identically.
             *  @param {string|node|jQuery} sSelector jQuery selector or node collection to act on
             *  @param {object} [oOpts] Optional parameters for modifying the rows to be included
             *  @param {string} [oOpts.filter=none] Select elements that meet the current filter
             *    criterion ("applied") or all elements (i.e. no filter).
             *  @param {string} [oOpts.order=current] Order of the data in the processed array.
             *    Can be either 'current', whereby the current sorting of the table is used, or
             *    'original' whereby the original order the data was read into the table is used.
             *  @param {string} [oOpts.page=all] Limit the selection to the currently displayed page
             *    ("current") or not ("all"). If 'current' is given, then order is assumed to be 
             *    'current' and filter is 'applied', regardless of what they might be given as.
             *  @returns {array} Data for the matched elements. If any elements, as a result of the
             *    selector, were not TR, TD or TH elements in the DataTable, they will have a null 
             *    entry in the array.
             *  @dtopt API
             *
             *  @example
             *    $(document).ready(function() {
             *      var oTable = $('#example').dataTable();
             *
             *      // Get the data from the first row in the table
             *      var data = oTable._('tr:first');
             *
             *      // Do something useful with the data
             *      alert( "First cell is: "+data[0] );
             *    } );
             *
             *  @example
             *    $(document).ready(function() {
             *      var oTable = $('#example').dataTable();
             *
             *      // Filter to 'Webkit' and get all data for 
             *      oTable.fnFilter('Webkit');
             *      var data = oTable._('tr', {"filter": "applied"});
             *      
             *      // Do something with the data
             *      alert( data.length+" rows matched the filter" );
             *    } );
             */
            this._ = function (sSelector, oOpts) {
                var aOut = [];
                var i, iLen, iIndex;
                var aTrs = this.$(sSelector, oOpts);

                for (i = 0, iLen = aTrs.length ; i < iLen ; i++) {
                    aOut.push(this.fnGetData(aTrs[i]));
                }

                return aOut;
            };


            /**
             * Add a single new row or multiple rows of data to the table. Please note
             * that this is suitable for client-side processing only - if you are using 
             * server-side processing (i.e. "bServerSide": true), then to add data, you
             * must add it to the data source, i.e. the server-side, through an Ajax call.
             *  @param {array|object} mData The data to be added to the table. This can be:
             *    <ul>
             *      <li>1D array of data - add a single row with the data provided</li>
             *      <li>2D array of arrays - add multiple rows in a single call</li>
             *      <li>object - data object when using <i>mData</i></li>
             *      <li>array of objects - multiple data objects when using <i>mData</i></li>
             *    </ul>
             *  @param {bool} [bRedraw=true] redraw the table or not
             *  @returns {array} An array of integers, representing the list of indexes in 
             *    <i>aoData</i> ({@link DataTable.models.oSettings}) that have been added to 
             *    the table.
             *  @dtopt API
             *
             *  @example
             *    // Global var for counter
             *    var giCount = 2;
             *    
             *    $(document).ready(function() {
             *      $('#example').dataTable();
             *    } );
             *    
             *    function fnClickAddRow() {
             *      $('#example').dataTable().fnAddData( [
             *        giCount+".1",
             *        giCount+".2",
             *        giCount+".3",
             *        giCount+".4" ]
             *      );
             *        
             *      giCount++;
             *    }
             */
            this.fnAddData = function (mData, bRedraw) {
                if (mData.length === 0) {
                    return [];
                }

                var aiReturn = [];
                var iTest;

                /* Find settings from table node */
                var oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);

                /* Check if we want to add multiple rows or not */
                if (typeof mData[0] === "object" && mData[0] !== null) {
                    for (var i = 0 ; i < mData.length ; i++) {
                        iTest = _fnAddData(oSettings, mData[i]);
                        if (iTest == -1) {
                            return aiReturn;
                        }
                        aiReturn.push(iTest);
                    }
                }
                else {
                    iTest = _fnAddData(oSettings, mData);
                    if (iTest == -1) {
                        return aiReturn;
                    }
                    aiReturn.push(iTest);
                }

                oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();

                if (bRedraw === undefined || bRedraw) {
                    _fnReDraw(oSettings);
                }
                return aiReturn;
            };


            /**
             * This function will make DataTables recalculate the column sizes, based on the data 
             * contained in the table and the sizes applied to the columns (in the DOM, CSS or 
             * through the sWidth parameter). This can be useful when the width of the table's 
             * parent element changes (for example a window resize).
             *  @param {boolean} [bRedraw=true] Redraw the table or not, you will typically want to
             *  @dtopt API
             *
             *  @example
             *    $(document).ready(function() {
             *      var oTable = $('#example').dataTable( {
             *        "sScrollY": "200px",
             *        "bPaginate": false
             *      } );
             *      
             *      $(window).bind('resize', function () {
             *        oTable.fnAdjustColumnSizing();
             *      } );
             *    } );
             */
            this.fnAdjustColumnSizing = function (bRedraw) {
                var oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);
                _fnAdjustColumnSizing(oSettings);

                if (bRedraw === undefined || bRedraw) {
                    this.fnDraw(false);
                }
                else if (oSettings.oScroll.sX !== "" || oSettings.oScroll.sY !== "") {
                    /* If not redrawing, but scrolling, we want to apply the new column sizes anyway */
                    this.oApi._fnScrollDraw(oSettings);
                }
            };


            /**
             * Quickly and simply clear a table
             *  @param {bool} [bRedraw=true] redraw the table or not
             *  @dtopt API
             *
             *  @example
             *    $(document).ready(function() {
             *      var oTable = $('#example').dataTable();
             *      
             *      // Immediately 'nuke' the current rows (perhaps waiting for an Ajax callback...)
             *      oTable.fnClearTable();
             *    } );
             */
            this.fnClearTable = function (bRedraw) {
                /* Find settings from table node */
                var oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);
                _fnClearTable(oSettings);

                if (bRedraw === undefined || bRedraw) {
                    _fnDraw(oSettings);
                }
            };


            /**
             * The exact opposite of 'opening' a row, this function will close any rows which 
             * are currently 'open'.
             *  @param {node} nTr the table row to 'close'
             *  @returns {int} 0 on success, or 1 if failed (can't find the row)
             *  @dtopt API
             *
             *  @example
             *    $(document).ready(function() {
             *      var oTable;
             *      
             *      // 'open' an information row when a row is clicked on
             *      $('#example tbody tr').click( function () {
             *        if ( oTable.fnIsOpen(this) ) {
             *          oTable.fnClose( this );
             *        } else {
             *          oTable.fnOpen( this, "Temporary row opened", "info_row" );
             *        }
             *      } );
             *      
             *      oTable = $('#example').dataTable();
             *    } );
             */
            this.fnClose = function (nTr) {
                /* Find settings from table node */
                var oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);

                for (var i = 0 ; i < oSettings.aoOpenRows.length ; i++) {
                    if (oSettings.aoOpenRows[i].nParent == nTr) {
                        var nTrParent = oSettings.aoOpenRows[i].nTr.parentNode;
                        if (nTrParent) {
                            /* Remove it if it is currently on display */
                            nTrParent.removeChild(oSettings.aoOpenRows[i].nTr);
                        }
                        oSettings.aoOpenRows.splice(i, 1);
                        return 0;
                    }
                }
                return 1;
            };


            /**
             * Remove a row for the table
             *  @param {mixed} mTarget The index of the row from aoData to be deleted, or
             *    the TR element you want to delete
             *  @param {function|null} [fnCallBack] Callback function
             *  @param {bool} [bRedraw=true] Redraw the table or not
             *  @returns {array} The row that was deleted
             *  @dtopt API
             *
             *  @example
             *    $(document).ready(function() {
             *      var oTable = $('#example').dataTable();
             *      
             *      // Immediately remove the first row
             *      oTable.fnDeleteRow( 0 );
             *    } );
             */
            this.fnDeleteRow = function (mTarget, fnCallBack, bRedraw) {
                /* Find settings from table node */
                var oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);
                var i, iLen, iAODataIndex;

                iAODataIndex = (typeof mTarget === 'object') ?
                    _fnNodeToDataIndex(oSettings, mTarget) : mTarget;

                /* Return the data array from this row */
                var oData = oSettings.aoData.splice(iAODataIndex, 1);

                /* Update the _DT_RowIndex parameter */
                for (i = 0, iLen = oSettings.aoData.length ; i < iLen ; i++) {
                    if (oSettings.aoData[i].nTr !== null) {
                        oSettings.aoData[i].nTr._DT_RowIndex = i;
                    }
                }

                /* Remove the target row from the search array */
                var iDisplayIndex = $.inArray(iAODataIndex, oSettings.aiDisplay);
                oSettings.asDataSearch.splice(iDisplayIndex, 1);

                /* Delete from the display arrays */
                _fnDeleteIndex(oSettings.aiDisplayMaster, iAODataIndex);
                _fnDeleteIndex(oSettings.aiDisplay, iAODataIndex);

                /* If there is a user callback function - call it */
                if (typeof fnCallBack === "function") {
                    fnCallBack.call(this, oSettings, oData);
                }

                /* Check for an 'overflow' they case for displaying the table */
                if (oSettings._iDisplayStart >= oSettings.fnRecordsDisplay()) {
                    oSettings._iDisplayStart -= oSettings._iDisplayLength;
                    if (oSettings._iDisplayStart < 0) {
                        oSettings._iDisplayStart = 0;
                    }
                }

                if (bRedraw === undefined || bRedraw) {
                    _fnCalculateEnd(oSettings);
                    _fnDraw(oSettings);
                }

                return oData;
            };


            /**
             * Restore the table to it's original state in the DOM by removing all of DataTables 
             * enhancements, alterations to the DOM structure of the table and event listeners.
             *  @param {boolean} [bRemove=false] Completely remove the table from the DOM
             *  @dtopt API
             *
             *  @example
             *    $(document).ready(function() {
             *      // This example is fairly pointless in reality, but shows how fnDestroy can be used
             *      var oTable = $('#example').dataTable();
             *      oTable.fnDestroy();
             *    } );
             */
            this.fnDestroy = function (bRemove) {
                var oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);
                var nOrig = oSettings.nTableWrapper.parentNode;
                var nBody = oSettings.nTBody;
                var i, iLen;

                bRemove = (bRemove === undefined) ? false : bRemove;

                /* Flag to note that the table is currently being destroyed - no action should be taken */
                oSettings.bDestroying = true;

                /* Fire off the destroy callbacks for plug-ins etc */
                _fnCallbackFire(oSettings, "aoDestroyCallback", "destroy", [oSettings]);

                /* If the table is not being removed, restore the hidden columns */
                if (!bRemove) {
                    for (i = 0, iLen = oSettings.aoColumns.length ; i < iLen ; i++) {
                        if (oSettings.aoColumns[i].bVisible === false) {
                            this.fnSetColumnVis(i, true);
                        }
                    }
                }

                /* Blitz all DT events */
                $(oSettings.nTableWrapper).find('*').andSelf().unbind('.DT');

                /* If there is an 'empty' indicator row, remove it */
                $('tbody>tr>td.' + oSettings.oClasses.sRowEmpty, oSettings.nTable).parent().remove();

                /* When scrolling we had to break the table up - restore it */
                if (oSettings.nTable != oSettings.nTHead.parentNode) {
                    $(oSettings.nTable).children('thead').remove();
                    oSettings.nTable.appendChild(oSettings.nTHead);
                }

                if (oSettings.nTFoot && oSettings.nTable != oSettings.nTFoot.parentNode) {
                    $(oSettings.nTable).children('tfoot').remove();
                    oSettings.nTable.appendChild(oSettings.nTFoot);
                }

                /* Remove the DataTables generated nodes, events and classes */
                oSettings.nTable.parentNode.removeChild(oSettings.nTable);
                $(oSettings.nTableWrapper).remove();

                oSettings.aaSorting = [];
                oSettings.aaSortingFixed = [];
                _fnSortingClasses(oSettings);

                $(_fnGetTrNodes(oSettings)).removeClass(oSettings.asStripeClasses.join(' '));

                $('th, td', oSettings.nTHead).removeClass([
                    oSettings.oClasses.sSortable,
                    oSettings.oClasses.sSortableAsc,
                    oSettings.oClasses.sSortableDesc,
                    oSettings.oClasses.sSortableNone].join(' ')
                );
                if (oSettings.bJUI) {
                    $('th span.' + oSettings.oClasses.sSortIcon
                        + ', td span.' + oSettings.oClasses.sSortIcon, oSettings.nTHead).remove();

                    $('th, td', oSettings.nTHead).each(function () {
                        var jqWrapper = $('div.' + oSettings.oClasses.sSortJUIWrapper, this);
                        var kids = jqWrapper.contents();
                        $(this).append(kids);
                        jqWrapper.remove();
                    });
                }

                /* Add the TR elements back into the table in their original order */
                if (!bRemove && oSettings.nTableReinsertBefore) {
                    nOrig.insertBefore(oSettings.nTable, oSettings.nTableReinsertBefore);
                }
                else if (!bRemove) {
                    nOrig.appendChild(oSettings.nTable);
                }

                for (i = 0, iLen = oSettings.aoData.length ; i < iLen ; i++) {
                    if (oSettings.aoData[i].nTr !== null) {
                        nBody.appendChild(oSettings.aoData[i].nTr);
                    }
                }

                /* Restore the width of the original table */
                if (oSettings.oFeatures.bAutoWidth === true) {
                    oSettings.nTable.style.width = _fnStringToCss(oSettings.sDestroyWidth);
                }

                /* If the were originally stripe classes - then we add them back here. Note
                 * this is not fool proof (for example if not all rows had stripe classes - but
                 * it's a good effort without getting carried away
                 */
                iLen = oSettings.asDestroyStripes.length;
                if (iLen) {
                    var anRows = $(nBody).children('tr');
                    for (i = 0 ; i < iLen ; i++) {
                        anRows.filter(':nth-child(' + iLen + 'n + ' + i + ')').addClass(oSettings.asDestroyStripes[i]);
                    }
                }

                /* Remove the settings object from the settings array */
                for (i = 0, iLen = DataTable.settings.length ; i < iLen ; i++) {
                    if (DataTable.settings[i] == oSettings) {
                        DataTable.settings.splice(i, 1);
                    }
                }

                /* End it all */
                oSettings = null;
                oInit = null;
            };


            /**
             * Redraw the table
             *  @param {bool} [bComplete=true] Re-filter and resort (if enabled) the table before the draw.
             *  @dtopt API
             *
             *  @example
             *    $(document).ready(function() {
             *      var oTable = $('#example').dataTable();
             *      
             *      // Re-draw the table - you wouldn't want to do it here, but it's an example :-)
             *      oTable.fnDraw();
             *    } );
             */
            this.fnDraw = function (bComplete) {
                var oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);
                if (bComplete === false) {
                    _fnCalculateEnd(oSettings);
                    _fnDraw(oSettings);
                }
                else {
                    _fnReDraw(oSettings);
                }
            };


            /**
             * Filter the input based on data
             *  @param {string} sInput String to filter the table on
             *  @param {int|null} [iColumn] Column to limit filtering to
             *  @param {bool} [bRegex=false] Treat as regular expression or not
             *  @param {bool} [bSmart=true] Perform smart filtering or not
             *  @param {bool} [bShowGlobal=true] Show the input global filter in it's input box(es)
             *  @param {bool} [bCaseInsensitive=true] Do case-insensitive matching (true) or not (false)
             *  @dtopt API
             *
             *  @example
             *    $(document).ready(function() {
             *      var oTable = $('#example').dataTable();
             *      
             *      // Sometime later - filter...
             *      oTable.fnFilter( 'test string' );
             *    } );
             */
            this.fnFilter = function (sInput, iColumn, bRegex, bSmart, bShowGlobal, bCaseInsensitive) {
                var oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);

                if (!oSettings.oFeatures.bFilter) {
                    return;
                }

                if (bRegex === undefined || bRegex === null) {
                    bRegex = false;
                }

                if (bSmart === undefined || bSmart === null) {
                    bSmart = true;
                }

                if (bShowGlobal === undefined || bShowGlobal === null) {
                    bShowGlobal = true;
                }

                if (bCaseInsensitive === undefined || bCaseInsensitive === null) {
                    bCaseInsensitive = true;
                }

                if (iColumn === undefined || iColumn === null) {
                    /* Global filter */
                    _fnFilterComplete(oSettings, {
                        "sSearch": sInput + "",
                        "bRegex": bRegex,
                        "bSmart": bSmart,
                        "bCaseInsensitive": bCaseInsensitive
                    }, 1);

                    if (bShowGlobal && oSettings.aanFeatures.f) {
                        var n = oSettings.aanFeatures.f;
                        for (var i = 0, iLen = n.length ; i < iLen ; i++) {
                            // IE9 throws an 'unknown error' if document.activeElement is used
                            // inside an iframe or frame...
                            try {
                                if (n[i]._DT_Input != document.activeElement) {
                                    $(n[i]._DT_Input).val(sInput);
                                }
                            }
                            catch (e) {
                                $(n[i]._DT_Input).val(sInput);
                            }
                        }
                    }
                }
                else {
                    /* Single column filter */
                    $.extend(oSettings.aoPreSearchCols[iColumn], {
                        "sSearch": sInput + "",
                        "bRegex": bRegex,
                        "bSmart": bSmart,
                        "bCaseInsensitive": bCaseInsensitive
                    });
                    _fnFilterComplete(oSettings, oSettings.oPreviousSearch, 1);
                }
            };


            /**
             * Get the data for the whole table, an individual row or an individual cell based on the 
             * provided parameters.
             *  @param {int|node} [mRow] A TR row node, TD/TH cell node or an integer. If given as
             *    a TR node then the data source for the whole row will be returned. If given as a
             *    TD/TH cell node then iCol will be automatically calculated and the data for the
             *    cell returned. If given as an integer, then this is treated as the aoData internal
             *    data index for the row (see fnGetPosition) and the data for that row used.
             *  @param {int} [iCol] Optional column index that you want the data of.
             *  @returns {array|object|string} If mRow is undefined, then the data for all rows is
             *    returned. If mRow is defined, just data for that row, and is iCol is
             *    defined, only data for the designated cell is returned.
             *  @dtopt API
             *
             *  @example
             *    // Row data
             *    $(document).ready(function() {
             *      oTable = $('#example').dataTable();
             *
             *      oTable.$('tr').click( function () {
             *        var data = oTable.fnGetData( this );
             *        // ... do something with the array / object of data for the row
             *      } );
             *    } );
             *
             *  @example
             *    // Individual cell data
             *    $(document).ready(function() {
             *      oTable = $('#example').dataTable();
             *
             *      oTable.$('td').click( function () {
             *        var sData = oTable.fnGetData( this );
             *        alert( 'The cell clicked on had the value of '+sData );
             *      } );
             *    } );
             */
            this.fnGetData = function (mRow, iCol) {
                var oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);

                if (mRow !== undefined) {
                    var iRow = mRow;
                    if (typeof mRow === 'object') {
                        var sNode = mRow.nodeName.toLowerCase();
                        if (sNode === "tr") {
                            iRow = _fnNodeToDataIndex(oSettings, mRow);
                        }
                        else if (sNode === "td") {
                            iRow = _fnNodeToDataIndex(oSettings, mRow.parentNode);
                            iCol = _fnNodeToColumnIndex(oSettings, iRow, mRow);
                        }
                    }

                    if (iCol !== undefined) {
                        return _fnGetCellData(oSettings, iRow, iCol, '');
                    }
                    return (oSettings.aoData[iRow] !== undefined) ?
                        oSettings.aoData[iRow]._aData : null;
                }
                return _fnGetDataMaster(oSettings);
            };


            /**
             * Get an array of the TR nodes that are used in the table's body. Note that you will 
             * typically want to use the '$' API method in preference to this as it is more 
             * flexible.
             *  @param {int} [iRow] Optional row index for the TR element you want
             *  @returns {array|node} If iRow is undefined, returns an array of all TR elements
             *    in the table's body, or iRow is defined, just the TR element requested.
             *  @dtopt API
             *
             *  @example
             *    $(document).ready(function() {
             *      var oTable = $('#example').dataTable();
             *      
             *      // Get the nodes from the table
             *      var nNodes = oTable.fnGetNodes( );
             *    } );
             */
            this.fnGetNodes = function (iRow) {
                var oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);

                if (iRow !== undefined) {
                    return (oSettings.aoData[iRow] !== undefined) ?
                        oSettings.aoData[iRow].nTr : null;
                }
                return _fnGetTrNodes(oSettings);
            };


            /**
             * Get the array indexes of a particular cell from it's DOM element
             * and column index including hidden columns
             *  @param {node} nNode this can either be a TR, TD or TH in the table's body
             *  @returns {int} If nNode is given as a TR, then a single index is returned, or
             *    if given as a cell, an array of [row index, column index (visible), 
             *    column index (all)] is given.
             *  @dtopt API
             *
             *  @example
             *    $(document).ready(function() {
             *      $('#example tbody td').click( function () {
             *        // Get the position of the current data from the node
             *        var aPos = oTable.fnGetPosition( this );
             *        
             *        // Get the data array for this row
             *        var aData = oTable.fnGetData( aPos[0] );
             *        
             *        // Update the data array and return the value
             *        aData[ aPos[1] ] = 'clicked';
             *        this.innerHTML = 'clicked';
             *      } );
             *      
             *      // Init DataTables
             *      oTable = $('#example').dataTable();
             *    } );
             */
            this.fnGetPosition = function (nNode) {
                var oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);
                var sNodeName = nNode.nodeName.toUpperCase();

                if (sNodeName == "TR") {
                    return _fnNodeToDataIndex(oSettings, nNode);
                }
                else if (sNodeName == "TD" || sNodeName == "TH") {
                    var iDataIndex = _fnNodeToDataIndex(oSettings, nNode.parentNode);
                    var iColumnIndex = _fnNodeToColumnIndex(oSettings, iDataIndex, nNode);
                    return [iDataIndex, _fnColumnIndexToVisible(oSettings, iColumnIndex), iColumnIndex];
                }
                return null;
            };


            /**
             * Check to see if a row is 'open' or not.
             *  @param {node} nTr the table row to check
             *  @returns {boolean} true if the row is currently open, false otherwise
             *  @dtopt API
             *
             *  @example
             *    $(document).ready(function() {
             *      var oTable;
             *      
             *      // 'open' an information row when a row is clicked on
             *      $('#example tbody tr').click( function () {
             *        if ( oTable.fnIsOpen(this) ) {
             *          oTable.fnClose( this );
             *        } else {
             *          oTable.fnOpen( this, "Temporary row opened", "info_row" );
             *        }
             *      } );
             *      
             *      oTable = $('#example').dataTable();
             *    } );
             */
            this.fnIsOpen = function (nTr) {
                var oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);
                var aoOpenRows = oSettings.aoOpenRows;

                for (var i = 0 ; i < oSettings.aoOpenRows.length ; i++) {
                    if (oSettings.aoOpenRows[i].nParent == nTr) {
                        return true;
                    }
                }
                return false;
            };


            /**
             * This function will place a new row directly after a row which is currently 
             * on display on the page, with the HTML contents that is passed into the 
             * function. This can be used, for example, to ask for confirmation that a 
             * particular record should be deleted.
             *  @param {node} nTr The table row to 'open'
             *  @param {string|node|jQuery} mHtml The HTML to put into the row
             *  @param {string} sClass Class to give the new TD cell
             *  @returns {node} The row opened. Note that if the table row passed in as the
             *    first parameter, is not found in the table, this method will silently
             *    return.
             *  @dtopt API
             *
             *  @example
             *    $(document).ready(function() {
             *      var oTable;
             *      
             *      // 'open' an information row when a row is clicked on
             *      $('#example tbody tr').click( function () {
             *        if ( oTable.fnIsOpen(this) ) {
             *          oTable.fnClose( this );
             *        } else {
             *          oTable.fnOpen( this, "Temporary row opened", "info_row" );
             *        }
             *      } );
             *      
             *      oTable = $('#example').dataTable();
             *    } );
             */
            this.fnOpen = function (nTr, mHtml, sClass) {
                /* Find settings from table node */
                var oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);

                /* Check that the row given is in the table */
                var nTableRows = _fnGetTrNodes(oSettings);
                if ($.inArray(nTr, nTableRows) === -1) {
                    return;
                }

                /* the old open one if there is one */
                this.fnClose(nTr);

                var nNewRow = document.createElement("tr");
                var nNewCell = document.createElement("td");
                nNewRow.appendChild(nNewCell);
                nNewCell.className = sClass;
                nNewCell.colSpan = _fnVisbleColumns(oSettings);

                if (typeof mHtml === "string") {
                    nNewCell.innerHTML = mHtml;
                }
                else {
                    $(nNewCell).html(mHtml);
                }

                /* If the nTr isn't on the page at the moment - then we don't insert at the moment */
                var nTrs = $('tr', oSettings.nTBody);
                if ($.inArray(nTr, nTrs) != -1) {
                    $(nNewRow).insertAfter(nTr);
                }

                oSettings.aoOpenRows.push({
                    "nTr": nNewRow,
                    "nParent": nTr
                });

                return nNewRow;
            };


            /**
             * Change the pagination - provides the internal logic for pagination in a simple API 
             * function. With this function you can have a DataTables table go to the next, 
             * previous, first or last pages.
             *  @param {string|int} mAction Paging action to take: "first", "previous", "next" or "last"
             *    or page number to jump to (integer), note that page 0 is the first page.
             *  @param {bool} [bRedraw=true] Redraw the table or not
             *  @dtopt API
             *
             *  @example
             *    $(document).ready(function() {
             *      var oTable = $('#example').dataTable();
             *      oTable.fnPageChange( 'next' );
             *    } );
             */
            this.fnPageChange = function (mAction, bRedraw) {
                var oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);
                _fnPageChange(oSettings, mAction);
                _fnCalculateEnd(oSettings);

                if (bRedraw === undefined || bRedraw) {
                    _fnDraw(oSettings);
                }
            };


            /**
             * Show a particular column
             *  @param {int} iCol The column whose display should be changed
             *  @param {bool} bShow Show (true) or hide (false) the column
             *  @param {bool} [bRedraw=true] Redraw the table or not
             *  @dtopt API
             *
             *  @example
             *    $(document).ready(function() {
             *      var oTable = $('#example').dataTable();
             *      
             *      // Hide the second column after initialisation
             *      oTable.fnSetColumnVis( 1, false );
             *    } );
             */
            this.fnSetColumnVis = function (iCol, bShow, bRedraw) {
                var oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);
                var i, iLen;
                var aoColumns = oSettings.aoColumns;
                var aoData = oSettings.aoData;
                var nTd, bAppend, iBefore;

                /* No point in doing anything if we are requesting what is already true */
                if (aoColumns[iCol].bVisible == bShow) {
                    return;
                }

                /* Show the column */
                if (bShow) {
                    var iInsert = 0;
                    for (i = 0 ; i < iCol ; i++) {
                        if (aoColumns[i].bVisible) {
                            iInsert++;
                        }
                    }

                    /* Need to decide if we should use appendChild or insertBefore */
                    bAppend = (iInsert >= _fnVisbleColumns(oSettings));

                    /* Which coloumn should we be inserting before? */
                    if (!bAppend) {
                        for (i = iCol ; i < aoColumns.length ; i++) {
                            if (aoColumns[i].bVisible) {
                                iBefore = i;
                                break;
                            }
                        }
                    }

                    for (i = 0, iLen = aoData.length ; i < iLen ; i++) {
                        if (aoData[i].nTr !== null) {
                            if (bAppend) {
                                aoData[i].nTr.appendChild(
                                    aoData[i]._anHidden[iCol]
                                );
                            }
                            else {
                                aoData[i].nTr.insertBefore(
                                    aoData[i]._anHidden[iCol],
                                    _fnGetTdNodes(oSettings, i)[iBefore]);
                            }
                        }
                    }
                }
                else {
                    /* Remove a column from display */
                    for (i = 0, iLen = aoData.length ; i < iLen ; i++) {
                        if (aoData[i].nTr !== null) {
                            nTd = _fnGetTdNodes(oSettings, i)[iCol];
                            aoData[i]._anHidden[iCol] = nTd;
                            nTd.parentNode.removeChild(nTd);
                        }
                    }
                }

                /* Clear to set the visible flag */
                aoColumns[iCol].bVisible = bShow;

                /* Redraw the header and footer based on the new column visibility */
                _fnDrawHead(oSettings, oSettings.aoHeader);
                if (oSettings.nTFoot) {
                    _fnDrawHead(oSettings, oSettings.aoFooter);
                }

                /* If there are any 'open' rows, then we need to alter the colspan for this col change */
                for (i = 0, iLen = oSettings.aoOpenRows.length ; i < iLen ; i++) {
                    oSettings.aoOpenRows[i].nTr.colSpan = _fnVisbleColumns(oSettings);
                }

                /* Do a redraw incase anything depending on the table columns needs it 
                 * (built-in: scrolling) 
                 */
                if (bRedraw === undefined || bRedraw) {
                    _fnAdjustColumnSizing(oSettings);
                    _fnDraw(oSettings);
                }

                _fnSaveState(oSettings);
            };


            /**
             * Get the settings for a particular table for external manipulation
             *  @returns {object} DataTables settings object. See 
             *    {@link DataTable.models.oSettings}
             *  @dtopt API
             *
             *  @example
             *    $(document).ready(function() {
             *      var oTable = $('#example').dataTable();
             *      var oSettings = oTable.fnSettings();
             *      
             *      // Show an example parameter from the settings
             *      alert( oSettings._iDisplayStart );
             *    } );
             */
            this.fnSettings = function () {
                return _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);
            };


            /**
             * Sort the table by a particular column
             *  @param {int} iCol the data index to sort on. Note that this will not match the 
             *    'display index' if you have hidden data entries
             *  @dtopt API
             *
             *  @example
             *    $(document).ready(function() {
             *      var oTable = $('#example').dataTable();
             *      
             *      // Sort immediately with columns 0 and 1
             *      oTable.fnSort( [ [0,'asc'], [1,'asc'] ] );
             *    } );
             */
            this.fnSort = function (aaSort) {
                var oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);
                oSettings.aaSorting = aaSort;
                _fnSort(oSettings);
            };


            /**
             * Attach a sort listener to an element for a given column
             *  @param {node} nNode the element to attach the sort listener to
             *  @param {int} iColumn the column that a click on this node will sort on
             *  @param {function} [fnCallback] callback function when sort is run
             *  @dtopt API
             *
             *  @example
             *    $(document).ready(function() {
             *      var oTable = $('#example').dataTable();
             *      
             *      // Sort on column 1, when 'sorter' is clicked on
             *      oTable.fnSortListener( document.getElementById('sorter'), 1 );
             *    } );
             */
            this.fnSortListener = function (nNode, iColumn, fnCallback) {
                _fnSortAttachListener(_fnSettingsFromNode(this[DataTable.ext.iApiIndex]), nNode, iColumn,
                    fnCallback);
            };


            /**
             * Update a table cell or row - this method will accept either a single value to
             * update the cell with, an array of values with one element for each column or
             * an object in the same format as the original data source. The function is
             * self-referencing in order to make the multi column updates easier.
             *  @param {object|array|string} mData Data to update the cell/row with
             *  @param {node|int} mRow TR element you want to update or the aoData index
             *  @param {int} [iColumn] The column to update (not used of mData is an array or object)
             *  @param {bool} [bRedraw=true] Redraw the table or not
             *  @param {bool} [bAction=true] Perform pre-draw actions or not
             *  @returns {int} 0 on success, 1 on error
             *  @dtopt API
             *
             *  @example
             *    $(document).ready(function() {
             *      var oTable = $('#example').dataTable();
             *      oTable.fnUpdate( 'Example update', 0, 0 ); // Single cell
             *      oTable.fnUpdate( ['a', 'b', 'c', 'd', 'e'], 1, 0 ); // Row
             *    } );
             */
            this.fnUpdate = function (mData, mRow, iColumn, bRedraw, bAction) {
                var oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);
                var i, iLen, sDisplay;
                var iRow = (typeof mRow === 'object') ?
                    _fnNodeToDataIndex(oSettings, mRow) : mRow;

                if ($.isArray(mData) && iColumn === undefined) {
                    /* Array update - update the whole row */
                    oSettings.aoData[iRow]._aData = mData.slice();

                    /* Flag to the function that we are recursing */
                    for (i = 0 ; i < oSettings.aoColumns.length ; i++) {
                        this.fnUpdate(_fnGetCellData(oSettings, iRow, i), iRow, i, false, false);
                    }
                }
                else if ($.isPlainObject(mData) && iColumn === undefined) {
                    /* Object update - update the whole row - assume the developer gets the object right */
                    oSettings.aoData[iRow]._aData = $.extend(true, {}, mData);

                    for (i = 0 ; i < oSettings.aoColumns.length ; i++) {
                        this.fnUpdate(_fnGetCellData(oSettings, iRow, i), iRow, i, false, false);
                    }
                }
                else {
                    /* Individual cell update */
                    _fnSetCellData(oSettings, iRow, iColumn, mData);
                    sDisplay = _fnGetCellData(oSettings, iRow, iColumn, 'display');

                    var oCol = oSettings.aoColumns[iColumn];
                    if (oCol.fnRender !== null) {
                        sDisplay = _fnRender(oSettings, iRow, iColumn);
                        if (oCol.bUseRendered) {
                            _fnSetCellData(oSettings, iRow, iColumn, sDisplay);
                        }
                    }

                    if (oSettings.aoData[iRow].nTr !== null) {
                        /* Do the actual HTML update */
                        _fnGetTdNodes(oSettings, iRow)[iColumn].innerHTML = sDisplay;
                    }
                }

                /* Modify the search index for this row (strictly this is likely not needed, since fnReDraw
                 * will rebuild the search array - however, the redraw might be disabled by the user)
                 */
                var iDisplayIndex = $.inArray(iRow, oSettings.aiDisplay);
                oSettings.asDataSearch[iDisplayIndex] = _fnBuildSearchRow(
                    oSettings,
                    _fnGetRowData(oSettings, iRow, 'filter', _fnGetColumns(oSettings, 'bSearchable'))
                );

                /* Perform pre-draw actions */
                if (bAction === undefined || bAction) {
                    _fnAdjustColumnSizing(oSettings);
                }

                /* Redraw the table */
                if (bRedraw === undefined || bRedraw) {
                    _fnReDraw(oSettings);
                }
                return 0;
            };


            /**
             * Provide a common method for plug-ins to check the version of DataTables being used, in order
             * to ensure compatibility.
             *  @param {string} sVersion Version string to check for, in the format "X.Y.Z". Note that the
             *    formats "X" and "X.Y" are also acceptable.
             *  @returns {boolean} true if this version of DataTables is greater or equal to the required
             *    version, or false if this version of DataTales is not suitable
             *  @method
             *  @dtopt API
             *
             *  @example
             *    $(document).ready(function() {
             *      var oTable = $('#example').dataTable();
             *      alert( oTable.fnVersionCheck( '1.9.0' ) );
             *    } );
             */
            this.fnVersionCheck = DataTable.ext.fnVersionCheck;


            /*
             * This is really a good bit rubbish this method of exposing the internal methods
             * publicly... - To be fixed in 2.0 using methods on the prototype
             */


            /**
             * Create a wrapper function for exporting an internal functions to an external API.
             *  @param {string} sFunc API function name
             *  @returns {function} wrapped function
             *  @memberof DataTable#oApi
             */
            function _fnExternApiFunc(sFunc) {
                return function () {
                    var aArgs = [_fnSettingsFromNode(this[DataTable.ext.iApiIndex])].concat(
                        Array.prototype.slice.call(arguments));
                    return DataTable.ext.oApi[sFunc].apply(this, aArgs);
                };
            }


            /**
             * Reference to internal functions for use by plug-in developers. Note that these
             * methods are references to internal functions and are considered to be private.
             * If you use these methods, be aware that they are liable to change between versions
             * (check the upgrade notes).
             *  @namespace
             */
            this.oApi = {
                "_fnExternApiFunc": _fnExternApiFunc,
                "_fnInitialise": _fnInitialise,
                "_fnInitComplete": _fnInitComplete,
                "_fnLanguageCompat": _fnLanguageCompat,
                "_fnAddColumn": _fnAddColumn,
                "_fnColumnOptions": _fnColumnOptions,
                "_fnAddData": _fnAddData,
                "_fnCreateTr": _fnCreateTr,
                "_fnGatherData": _fnGatherData,
                "_fnBuildHead": _fnBuildHead,
                "_fnDrawHead": _fnDrawHead,
                "_fnDraw": _fnDraw,
                "_fnReDraw": _fnReDraw,
                "_fnAjaxUpdate": _fnAjaxUpdate,
                "_fnAjaxParameters": _fnAjaxParameters,
                "_fnAjaxUpdateDraw": _fnAjaxUpdateDraw,
                "_fnServerParams": _fnServerParams,
                "_fnAddOptionsHtml": _fnAddOptionsHtml,
                "_fnFeatureHtmlTable": _fnFeatureHtmlTable,
                "_fnScrollDraw": _fnScrollDraw,
                "_fnAdjustColumnSizing": _fnAdjustColumnSizing,
                "_fnFeatureHtmlFilter": _fnFeatureHtmlFilter,
                "_fnFilterComplete": _fnFilterComplete,
                "_fnFilterCustom": _fnFilterCustom,
                "_fnFilterColumn": _fnFilterColumn,
                "_fnFilter": _fnFilter,
                "_fnBuildSearchArray": _fnBuildSearchArray,
                "_fnBuildSearchRow": _fnBuildSearchRow,
                "_fnFilterCreateSearch": _fnFilterCreateSearch,
                "_fnDataToSearch": _fnDataToSearch,
                "_fnSort": _fnSort,
                "_fnSortAttachListener": _fnSortAttachListener,
                "_fnSortingClasses": _fnSortingClasses,
                "_fnFeatureHtmlPaginate": _fnFeatureHtmlPaginate,
                "_fnPageChange": _fnPageChange,
                "_fnFeatureHtmlInfo": _fnFeatureHtmlInfo,
                "_fnUpdateInfo": _fnUpdateInfo,
                "_fnFeatureHtmlLength": _fnFeatureHtmlLength,
                "_fnFeatureHtmlProcessing": _fnFeatureHtmlProcessing,
                "_fnProcessingDisplay": _fnProcessingDisplay,
                "_fnVisibleToColumnIndex": _fnVisibleToColumnIndex,
                "_fnColumnIndexToVisible": _fnColumnIndexToVisible,
                "_fnNodeToDataIndex": _fnNodeToDataIndex,
                "_fnVisbleColumns": _fnVisbleColumns,
                "_fnCalculateEnd": _fnCalculateEnd,
                "_fnConvertToWidth": _fnConvertToWidth,
                "_fnCalculateColumnWidths": _fnCalculateColumnWidths,
                "_fnScrollingWidthAdjust": _fnScrollingWidthAdjust,
                "_fnGetWidestNode": _fnGetWidestNode,
                "_fnGetMaxLenString": _fnGetMaxLenString,
                "_fnStringToCss": _fnStringToCss,
                "_fnDetectType": _fnDetectType,
                "_fnSettingsFromNode": _fnSettingsFromNode,
                "_fnGetDataMaster": _fnGetDataMaster,
                "_fnGetTrNodes": _fnGetTrNodes,
                "_fnGetTdNodes": _fnGetTdNodes,
                "_fnEscapeRegex": _fnEscapeRegex,
                "_fnDeleteIndex": _fnDeleteIndex,
                "_fnReOrderIndex": _fnReOrderIndex,
                "_fnColumnOrdering": _fnColumnOrdering,
                "_fnLog": _fnLog,
                "_fnClearTable": _fnClearTable,
                "_fnSaveState": _fnSaveState,
                "_fnLoadState": _fnLoadState,
                "_fnCreateCookie": _fnCreateCookie,
                "_fnReadCookie": _fnReadCookie,
                "_fnDetectHeader": _fnDetectHeader,
                "_fnGetUniqueThs": _fnGetUniqueThs,
                "_fnScrollBarWidth": _fnScrollBarWidth,
                "_fnApplyToChildren": _fnApplyToChildren,
                "_fnMap": _fnMap,
                "_fnGetRowData": _fnGetRowData,
                "_fnGetCellData": _fnGetCellData,
                "_fnSetCellData": _fnSetCellData,
                "_fnGetObjectDataFn": _fnGetObjectDataFn,
                "_fnSetObjectDataFn": _fnSetObjectDataFn,
                "_fnApplyColumnDefs": _fnApplyColumnDefs,
                "_fnBindAction": _fnBindAction,
                "_fnExtend": _fnExtend,
                "_fnCallbackReg": _fnCallbackReg,
                "_fnCallbackFire": _fnCallbackFire,
                "_fnJsonString": _fnJsonString,
                "_fnRender": _fnRender,
                "_fnNodeToColumnIndex": _fnNodeToColumnIndex,
                "_fnInfoMacros": _fnInfoMacros,
                "_fnBrowserDetect": _fnBrowserDetect,
                "_fnGetColumns": _fnGetColumns
            };

            $.extend(DataTable.ext.oApi, this.oApi);

            for (var sFunc in DataTable.ext.oApi) {
                if (sFunc) {
                    this[sFunc] = _fnExternApiFunc(sFunc);
                }
            }


            var _that = this;
            this.each(function () {
                var i = 0, iLen, j, jLen, k, kLen;
                var sId = this.getAttribute('id');
                var bInitHandedOff = false;
                var bUsePassedData = false;


                /* Sanity check */
                if (this.nodeName.toLowerCase() != 'table') {
                    _fnLog(null, 0, "Attempted to initialise DataTables on a node which is not a " +
                        "table: " + this.nodeName);
                    return;
                }

                /* Check to see if we are re-initialising a table */
                for (i = 0, iLen = DataTable.settings.length ; i < iLen ; i++) {
                    /* Base check on table node */
                    if (DataTable.settings[i].nTable == this) {
                        if (oInit === undefined || oInit.bRetrieve) {
                            return DataTable.settings[i].oInstance;
                        }
                        else if (oInit.bDestroy) {
                            DataTable.settings[i].oInstance.fnDestroy();
                            break;
                        }
                        else {
                            _fnLog(DataTable.settings[i], 0, "Cannot reinitialise DataTable.\n\n" +
                                "To retrieve the DataTables object for this table, pass no arguments or see " +
                                "the docs for bRetrieve and bDestroy");
                            return;
                        }
                    }

                    /* If the element we are initialising has the same ID as a table which was previously
                     * initialised, but the table nodes don't match (from before) then we destroy the old
                     * instance by simply deleting it. This is under the assumption that the table has been
                     * destroyed by other methods. Anyone using non-id selectors will need to do this manually
                     */
                    if (DataTable.settings[i].sTableId == this.id) {
                        DataTable.settings.splice(i, 1);
                        break;
                    }
                }

                /* Ensure the table has an ID - required for accessibility */
                if (sId === null || sId === "") {
                    sId = "DataTables_Table_" + (DataTable.ext._oExternConfig.iNextUnique++);
                    this.id = sId;
                }

                /* Create the settings object for this table and set some of the default parameters */
                var oSettings = $.extend(true, {}, DataTable.models.oSettings, {
                    "nTable": this,
                    "oApi": _that.oApi,
                    "oInit": oInit,
                    "sDestroyWidth": $(this).width(),
                    "sInstance": sId,
                    "sTableId": sId
                });
                DataTable.settings.push(oSettings);

                // Need to add the instance after the instance after the settings object has been added
                // to the settings array, so we can self reference the table instance if more than one
                oSettings.oInstance = (_that.length === 1) ? _that : $(this).dataTable();

                /* Setting up the initialisation object */
                if (!oInit) {
                    oInit = {};
                }

                // Backwards compatibility, before we apply all the defaults
                if (oInit.oLanguage) {
                    _fnLanguageCompat(oInit.oLanguage);
                }

                oInit = _fnExtend($.extend(true, {}, DataTable.defaults), oInit);

                // Map the initialisation options onto the settings object
                _fnMap(oSettings.oFeatures, oInit, "bPaginate");
                _fnMap(oSettings.oFeatures, oInit, "bLengthChange");
                _fnMap(oSettings.oFeatures, oInit, "bFilter");
                _fnMap(oSettings.oFeatures, oInit, "bSort");
                _fnMap(oSettings.oFeatures, oInit, "bInfo");
                _fnMap(oSettings.oFeatures, oInit, "bProcessing");
                _fnMap(oSettings.oFeatures, oInit, "bAutoWidth");
                _fnMap(oSettings.oFeatures, oInit, "bSortClasses");
                _fnMap(oSettings.oFeatures, oInit, "bServerSide");
                _fnMap(oSettings.oFeatures, oInit, "bDeferRender");
                _fnMap(oSettings.oScroll, oInit, "sScrollX", "sX");
                _fnMap(oSettings.oScroll, oInit, "sScrollXInner", "sXInner");
                _fnMap(oSettings.oScroll, oInit, "sScrollY", "sY");
                _fnMap(oSettings.oScroll, oInit, "bScrollCollapse", "bCollapse");
                _fnMap(oSettings.oScroll, oInit, "bScrollInfinite", "bInfinite");
                _fnMap(oSettings.oScroll, oInit, "iScrollLoadGap", "iLoadGap");
                _fnMap(oSettings.oScroll, oInit, "bScrollAutoCss", "bAutoCss");
                _fnMap(oSettings, oInit, "asStripeClasses");
                _fnMap(oSettings, oInit, "asStripClasses", "asStripeClasses"); // legacy
                _fnMap(oSettings, oInit, "fnServerData");
                _fnMap(oSettings, oInit, "fnFormatNumber");
                _fnMap(oSettings, oInit, "sServerMethod");
                _fnMap(oSettings, oInit, "aaSorting");
                _fnMap(oSettings, oInit, "aaSortingFixed");
                _fnMap(oSettings, oInit, "aLengthMenu");
                _fnMap(oSettings, oInit, "sPaginationType");
                _fnMap(oSettings, oInit, "sAjaxSource");
                _fnMap(oSettings, oInit, "sAjaxDataProp");
                _fnMap(oSettings, oInit, "iCookieDuration");
                _fnMap(oSettings, oInit, "sCookiePrefix");
                _fnMap(oSettings, oInit, "sDom");
                _fnMap(oSettings, oInit, "bSortCellsTop");
                _fnMap(oSettings, oInit, "iTabIndex");
                _fnMap(oSettings, oInit, "oSearch", "oPreviousSearch");
                _fnMap(oSettings, oInit, "aoSearchCols", "aoPreSearchCols");
                _fnMap(oSettings, oInit, "iDisplayLength", "_iDisplayLength");
                _fnMap(oSettings, oInit, "bJQueryUI", "bJUI");
                _fnMap(oSettings, oInit, "fnCookieCallback");
                _fnMap(oSettings, oInit, "fnStateLoad");
                _fnMap(oSettings, oInit, "fnStateSave");
                _fnMap(oSettings.oLanguage, oInit, "fnInfoCallback");

                /* Callback functions which are array driven */
                _fnCallbackReg(oSettings, 'aoDrawCallback', oInit.fnDrawCallback, 'user');
                _fnCallbackReg(oSettings, 'aoServerParams', oInit.fnServerParams, 'user');
                _fnCallbackReg(oSettings, 'aoStateSaveParams', oInit.fnStateSaveParams, 'user');
                _fnCallbackReg(oSettings, 'aoStateLoadParams', oInit.fnStateLoadParams, 'user');
                _fnCallbackReg(oSettings, 'aoStateLoaded', oInit.fnStateLoaded, 'user');
                _fnCallbackReg(oSettings, 'aoRowCallback', oInit.fnRowCallback, 'user');
                _fnCallbackReg(oSettings, 'aoRowCreatedCallback', oInit.fnCreatedRow, 'user');
                _fnCallbackReg(oSettings, 'aoHeaderCallback', oInit.fnHeaderCallback, 'user');
                _fnCallbackReg(oSettings, 'aoFooterCallback', oInit.fnFooterCallback, 'user');
                _fnCallbackReg(oSettings, 'aoInitComplete', oInit.fnInitComplete, 'user');
                _fnCallbackReg(oSettings, 'aoPreDrawCallback', oInit.fnPreDrawCallback, 'user');

                if (oSettings.oFeatures.bServerSide && oSettings.oFeatures.bSort &&
                       oSettings.oFeatures.bSortClasses) {
                    /* Enable sort classes for server-side processing. Safe to do it here, since server-side
                     * processing must be enabled by the developer
                     */
                    _fnCallbackReg(oSettings, 'aoDrawCallback', _fnSortingClasses, 'server_side_sort_classes');
                }
                else if (oSettings.oFeatures.bDeferRender) {
                    _fnCallbackReg(oSettings, 'aoDrawCallback', _fnSortingClasses, 'defer_sort_classes');
                }

                if (oInit.bJQueryUI) {
                    /* Use the JUI classes object for display. You could clone the oStdClasses object if 
                     * you want to have multiple tables with multiple independent classes 
                     */
                    $.extend(oSettings.oClasses, DataTable.ext.oJUIClasses);

                    if (oInit.sDom === DataTable.defaults.sDom && DataTable.defaults.sDom === "lfrtip") {
                        /* Set the DOM to use a layout suitable for jQuery UI's theming */
                        oSettings.sDom = '<"H"lfr>t<"F"ip>';
                    }
                }
                else {
                    $.extend(oSettings.oClasses, DataTable.ext.oStdClasses);
                }
                $(this).addClass(oSettings.oClasses.sTable);

                /* Calculate the scroll bar width and cache it for use later on */
                if (oSettings.oScroll.sX !== "" || oSettings.oScroll.sY !== "") {
                    oSettings.oScroll.iBarWidth = _fnScrollBarWidth();
                }

                if (oSettings.iInitDisplayStart === undefined) {
                    /* Display start point, taking into account the save saving */
                    oSettings.iInitDisplayStart = oInit.iDisplayStart;
                    oSettings._iDisplayStart = oInit.iDisplayStart;
                }

                /* Must be done after everything which can be overridden by a cookie! */
                if (oInit.bStateSave) {
                    oSettings.oFeatures.bStateSave = true;
                    _fnLoadState(oSettings, oInit);
                    _fnCallbackReg(oSettings, 'aoDrawCallback', _fnSaveState, 'state_save');
                }

                if (oInit.iDeferLoading !== null) {
                    oSettings.bDeferLoading = true;
                    var tmp = $.isArray(oInit.iDeferLoading);
                    oSettings._iRecordsDisplay = tmp ? oInit.iDeferLoading[0] : oInit.iDeferLoading;
                    oSettings._iRecordsTotal = tmp ? oInit.iDeferLoading[1] : oInit.iDeferLoading;
                }

                if (oInit.aaData !== null) {
                    bUsePassedData = true;
                }

                /* Language definitions */
                if (oInit.oLanguage.sUrl !== "") {
                    /* Get the language definitions from a file - because this Ajax call makes the language
                     * get async to the remainder of this function we use bInitHandedOff to indicate that 
                     * _fnInitialise will be fired by the returned Ajax handler, rather than the constructor
                     */
                    oSettings.oLanguage.sUrl = oInit.oLanguage.sUrl;
                    $.getJSON(oSettings.oLanguage.sUrl, null, function (json) {
                        _fnLanguageCompat(json);
                        $.extend(true, oSettings.oLanguage, oInit.oLanguage, json);
                        _fnInitialise(oSettings);
                    });
                    bInitHandedOff = true;
                }
                else {
                    $.extend(true, oSettings.oLanguage, oInit.oLanguage);
                }


                /*
                 * Stripes
                 */
                if (oInit.asStripeClasses === null) {
                    oSettings.asStripeClasses = [
                        oSettings.oClasses.sStripeOdd,
                        oSettings.oClasses.sStripeEven
                    ];
                }

                /* Remove row stripe classes if they are already on the table row */
                iLen = oSettings.asStripeClasses.length;
                oSettings.asDestroyStripes = [];
                if (iLen) {
                    var bStripeRemove = false;
                    var anRows = $(this).children('tbody').children('tr:lt(' + iLen + ')');
                    for (i = 0 ; i < iLen ; i++) {
                        if (anRows.hasClass(oSettings.asStripeClasses[i])) {
                            bStripeRemove = true;

                            /* Store the classes which we are about to remove so they can be re-added on destroy */
                            oSettings.asDestroyStripes.push(oSettings.asStripeClasses[i]);
                        }
                    }

                    if (bStripeRemove) {
                        anRows.removeClass(oSettings.asStripeClasses.join(' '));
                    }
                }

                /*
                 * Columns
                 * See if we should load columns automatically or use defined ones
                 */
                var anThs = [];
                var aoColumnsInit;
                var nThead = this.getElementsByTagName('thead');
                if (nThead.length !== 0) {
                    _fnDetectHeader(oSettings.aoHeader, nThead[0]);
                    anThs = _fnGetUniqueThs(oSettings);
                }

                /* If not given a column array, generate one with nulls */
                if (oInit.aoColumns === null) {
                    aoColumnsInit = [];
                    for (i = 0, iLen = anThs.length ; i < iLen ; i++) {
                        aoColumnsInit.push(null);
                    }
                }
                else {
                    aoColumnsInit = oInit.aoColumns;
                }

                /* Add the columns */
                for (i = 0, iLen = aoColumnsInit.length ; i < iLen ; i++) {
                    /* Short cut - use the loop to check if we have column visibility state to restore */
                    if (oInit.saved_aoColumns !== undefined && oInit.saved_aoColumns.length == iLen) {
                        if (aoColumnsInit[i] === null) {
                            aoColumnsInit[i] = {};
                        }
                        aoColumnsInit[i].bVisible = oInit.saved_aoColumns[i].bVisible;
                    }

                    _fnAddColumn(oSettings, anThs ? anThs[i] : null);
                }

                /* Apply the column definitions */
                _fnApplyColumnDefs(oSettings, oInit.aoColumnDefs, aoColumnsInit, function (iCol, oDef) {
                    _fnColumnOptions(oSettings, iCol, oDef);
                });


                /*
                 * Sorting
                 * Check the aaSorting array
                 */
                for (i = 0, iLen = oSettings.aaSorting.length ; i < iLen ; i++) {
                    if (oSettings.aaSorting[i][0] >= oSettings.aoColumns.length) {
                        oSettings.aaSorting[i][0] = 0;
                    }
                    var oColumn = oSettings.aoColumns[oSettings.aaSorting[i][0]];

                    /* Add a default sorting index */
                    if (oSettings.aaSorting[i][2] === undefined) {
                        oSettings.aaSorting[i][2] = 0;
                    }

                    /* If aaSorting is not defined, then we use the first indicator in asSorting */
                    if (oInit.aaSorting === undefined && oSettings.saved_aaSorting === undefined) {
                        oSettings.aaSorting[i][1] = oColumn.asSorting[0];
                    }

                    /* Set the current sorting index based on aoColumns.asSorting */
                    for (j = 0, jLen = oColumn.asSorting.length ; j < jLen ; j++) {
                        if (oSettings.aaSorting[i][1] == oColumn.asSorting[j]) {
                            oSettings.aaSorting[i][2] = j;
                            break;
                        }
                    }
                }

                /* Do a first pass on the sorting classes (allows any size changes to be taken into
                 * account, and also will apply sorting disabled classes if disabled
                 */
                _fnSortingClasses(oSettings);


                /*
                 * Final init
                 * Cache the header, body and footer as required, creating them if needed
                 */

                /* Browser support detection */
                _fnBrowserDetect(oSettings);

                // Work around for Webkit bug 83867 - store the caption-side before removing from doc
                var captions = $(this).children('caption').each(function () {
                    this._captionSide = $(this).css('caption-side');
                });

                var thead = $(this).children('thead');
                if (thead.length === 0) {
                    thead = [document.createElement('thead')];
                    this.appendChild(thead[0]);
                }
                oSettings.nTHead = thead[0];

                var tbody = $(this).children('tbody');
                if (tbody.length === 0) {
                    tbody = [document.createElement('tbody')];
                    this.appendChild(tbody[0]);
                }
                oSettings.nTBody = tbody[0];
                oSettings.nTBody.setAttribute("role", "alert");
                oSettings.nTBody.setAttribute("aria-live", "polite");
                oSettings.nTBody.setAttribute("aria-relevant", "all");

                var tfoot = $(this).children('tfoot');
                if (tfoot.length === 0 && captions.length > 0 && (oSettings.oScroll.sX !== "" || oSettings.oScroll.sY !== "")) {
                    // If we are a scrolling table, and no footer has been given, then we need to create
                    // a tfoot element for the caption element to be appended to
                    tfoot = [document.createElement('tfoot')];
                    this.appendChild(tfoot[0]);
                }

                if (tfoot.length > 0) {
                    oSettings.nTFoot = tfoot[0];
                    _fnDetectHeader(oSettings.aoFooter, oSettings.nTFoot);
                }

                /* Check if there is data passing into the constructor */
                if (bUsePassedData) {
                    for (i = 0 ; i < oInit.aaData.length ; i++) {
                        _fnAddData(oSettings, oInit.aaData[i]);
                    }
                }
                else {
                    /* Grab the data from the page */
                    _fnGatherData(oSettings);
                }

                /* Copy the data index array */
                oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();

                /* Initialisation complete - table can be drawn */
                oSettings.bInitialised = true;

                /* Check if we need to initialise the table (it might not have been handed off to the
                 * language processor)
                 */
                if (bInitHandedOff === false) {
                    _fnInitialise(oSettings);
                }
            });
            _that = null;
            return this;
        };



        /**
         * Provide a common method for plug-ins to check the version of DataTables being used, in order
         * to ensure compatibility.
         *  @param {string} sVersion Version string to check for, in the format "X.Y.Z". Note that the
         *    formats "X" and "X.Y" are also acceptable.
         *  @returns {boolean} true if this version of DataTables is greater or equal to the required
         *    version, or false if this version of DataTales is not suitable
         *  @static
         *  @dtopt API-Static
         *
         *  @example
         *    alert( $.fn.dataTable.fnVersionCheck( '1.9.0' ) );
         */
        DataTable.fnVersionCheck = function (sVersion) {
            /* This is cheap, but effective */
            var fnZPad = function (Zpad, count) {
                while (Zpad.length < count) {
                    Zpad += '0';
                }
                return Zpad;
            };
            var aThis = DataTable.ext.sVersion.split('.');
            var aThat = sVersion.split('.');
            var sThis = '', sThat = '';

            for (var i = 0, iLen = aThat.length ; i < iLen ; i++) {
                sThis += fnZPad(aThis[i], 3);
                sThat += fnZPad(aThat[i], 3);
            }

            return parseInt(sThis, 10) >= parseInt(sThat, 10);
        };


        /**
         * Check if a TABLE node is a DataTable table already or not.
         *  @param {node} nTable The TABLE node to check if it is a DataTable or not (note that other
         *    node types can be passed in, but will always return false).
         *  @returns {boolean} true the table given is a DataTable, or false otherwise
         *  @static
         *  @dtopt API-Static
         *
         *  @example
         *    var ex = document.getElementById('example');
         *    if ( ! $.fn.DataTable.fnIsDataTable( ex ) ) {
         *      $(ex).dataTable();
         *    }
         */
        DataTable.fnIsDataTable = function (nTable) {
            var o = DataTable.settings;

            for (var i = 0 ; i < o.length ; i++) {
                if (o[i].nTable === nTable || o[i].nScrollHead === nTable || o[i].nScrollFoot === nTable) {
                    return true;
                }
            }

            return false;
        };


        /**
         * Get all DataTable tables that have been initialised - optionally you can select to
         * get only currently visible tables.
         *  @param {boolean} [bVisible=false] Flag to indicate if you want all (default) or 
         *    visible tables only.
         *  @returns {array} Array of TABLE nodes (not DataTable instances) which are DataTables
         *  @static
         *  @dtopt API-Static
         *
         *  @example
         *    var table = $.fn.dataTable.fnTables(true);
         *    if ( table.length > 0 ) {
         *      $(table).dataTable().fnAdjustColumnSizing();
         *    }
         */
        DataTable.fnTables = function (bVisible) {
            var out = [];

            jQuery.each(DataTable.settings, function (i, o) {
                if (!bVisible || (bVisible === true && $(o.nTable).is(':visible'))) {
                    out.push(o.nTable);
                }
            });

            return out;
        };


        /**
         * Version string for plug-ins to check compatibility. Allowed format is
         * a.b.c.d.e where: a:int, b:int, c:int, d:string(dev|beta), e:int. d and
         * e are optional
         *  @member
         *  @type string
         *  @default Version number
         */
        DataTable.version = "1.9.4";

        /**
         * Private data store, containing all of the settings objects that are created for the
         * tables on a given page.
         * 
         * Note that the <i>DataTable.settings</i> object is aliased to <i>jQuery.fn.dataTableExt</i> 
         * through which it may be accessed and manipulated, or <i>jQuery.fn.dataTable.settings</i>.
         *  @member
         *  @type array
         *  @default []
         *  @private
         */
        DataTable.settings = [];

        /**
         * Object models container, for the various models that DataTables has available
         * to it. These models define the objects that are used to hold the active state 
         * and configuration of the table.
         *  @namespace
         */
        DataTable.models = {};


        /**
         * DataTables extension options and plug-ins. This namespace acts as a collection "area"
         * for plug-ins that can be used to extend the default DataTables behaviour - indeed many
         * of the build in methods use this method to provide their own capabilities (sorting methods
         * for example).
         * 
         * Note that this namespace is aliased to jQuery.fn.dataTableExt so it can be readily accessed
         * and modified by plug-ins.
         *  @namespace
         */
        DataTable.models.ext = {
            /**
             * Plug-in filtering functions - this method of filtering is complimentary to the default
             * type based filtering, and a lot more comprehensive as it allows you complete control
             * over the filtering logic. Each element in this array is a function (parameters
             * described below) that is called for every row in the table, and your logic decides if
             * it should be included in the filtered data set or not.
             *   <ul>
             *     <li>
             *       Function input parameters:
             *       <ul>
             *         <li>{object} DataTables settings object: see {@link DataTable.models.oSettings}.</li>
             *         <li>{array|object} Data for the row to be processed (same as the original format
             *           that was passed in as the data source, or an array from a DOM data source</li>
             *         <li>{int} Row index in aoData ({@link DataTable.models.oSettings.aoData}), which can
             *           be useful to retrieve the TR element if you need DOM interaction.</li>
             *       </ul>
             *     </li>
             *     <li>
             *       Function return:
             *       <ul>
             *         <li>{boolean} Include the row in the filtered result set (true) or not (false)</li>
             *       </ul>
             *     </il>
             *   </ul>
             *  @type array
             *  @default []
             *
             *  @example
             *    // The following example shows custom filtering being applied to the fourth column (i.e.
             *    // the aData[3] index) based on two input values from the end-user, matching the data in 
             *    // a certain range.
             *    $.fn.dataTableExt.afnFiltering.push(
             *      function( oSettings, aData, iDataIndex ) {
             *        var iMin = document.getElementById('min').value * 1;
             *        var iMax = document.getElementById('max').value * 1;
             *        var iVersion = aData[3] == "-" ? 0 : aData[3]*1;
             *        if ( iMin == "" && iMax == "" ) {
             *          return true;
             *        }
             *        else if ( iMin == "" && iVersion < iMax ) {
             *          return true;
             *        }
             *        else if ( iMin < iVersion && "" == iMax ) {
             *          return true;
             *        }
             *        else if ( iMin < iVersion && iVersion < iMax ) {
             *          return true;
             *        }
             *        return false;
             *      }
             *    );
             */
            "afnFiltering": [],


            /**
             * Plug-in sorting functions - this method of sorting is complimentary to the default type
             * based sorting that DataTables does automatically, allowing much greater control over the
             * the data that is being used to sort a column. This is useful if you want to do sorting
             * based on live data (for example the contents of an 'input' element) rather than just the
             * static string that DataTables knows of. The way these plug-ins work is that you create
             * an array of the values you wish to be sorted for the column in question and then return
             * that array. Which pre-sorting function is run here depends on the sSortDataType parameter
             * that is used for the column (if any). This is the corollary of <i>ofnSearch</i> for sort 
             * data.
             *   <ul>
             *     <li>
             *       Function input parameters:
             *       <ul>
             *         <li>{object} DataTables settings object: see {@link DataTable.models.oSettings}.</li>
             *         <li>{int} Target column index</li>
             *       </ul>
             *     </li>
             *     <li>
             *       Function return:
             *       <ul>
             *         <li>{array} Data for the column to be sorted upon</li>
             *       </ul>
             *     </il>
             *   </ul>
             *  
             * Note that as of v1.9, it is typically preferable to use <i>mData</i> to prepare data for
             * the different uses that DataTables can put the data to. Specifically <i>mData</i> when
             * used as a function will give you a 'type' (sorting, filtering etc) that you can use to 
             * prepare the data as required for the different types. As such, this method is deprecated.
             *  @type array
             *  @default []
             *  @deprecated
             *
             *  @example
             *    // Updating the cached sorting information with user entered values in HTML input elements
             *    jQuery.fn.dataTableExt.afnSortData['dom-text'] = function ( oSettings, iColumn )
             *    {
             *      var aData = [];
             *      $( 'td:eq('+iColumn+') input', oSettings.oApi._fnGetTrNodes(oSettings) ).each( function () {
             *        aData.push( this.value );
             *      } );
             *      return aData;
             *    }
             */
            "afnSortData": [],


            /**
             * Feature plug-ins - This is an array of objects which describe the feature plug-ins that are
             * available to DataTables. These feature plug-ins are accessible through the sDom initialisation
             * option. As such, each feature plug-in must describe a function that is used to initialise
             * itself (fnInit), a character so the feature can be enabled by sDom (cFeature) and the name
             * of the feature (sFeature). Thus the objects attached to this method must provide:
             *   <ul>
             *     <li>{function} fnInit Initialisation of the plug-in
             *       <ul>
             *         <li>
             *           Function input parameters:
             *           <ul>
             *             <li>{object} DataTables settings object: see {@link DataTable.models.oSettings}.</li>
             *           </ul>
             *         </li>
             *         <li>
             *           Function return:
             *           <ul>
             *             <li>{node|null} The element which contains your feature. Note that the return
             *                may also be void if your plug-in does not require to inject any DOM elements 
             *                into DataTables control (sDom) - for example this might be useful when 
             *                developing a plug-in which allows table control via keyboard entry.</li>
             *           </ul>
             *         </il>
             *       </ul>
             *     </li>
             *     <li>{character} cFeature Character that will be matched in sDom - case sensitive</li>
             *     <li>{string} sFeature Feature name</li>
             *   </ul>
             *  @type array
             *  @default []
             * 
             *  @example
             *    // How TableTools initialises itself.
             *    $.fn.dataTableExt.aoFeatures.push( {
             *      "fnInit": function( oSettings ) {
             *        return new TableTools( { "oDTSettings": oSettings } );
             *      },
             *      "cFeature": "T",
             *      "sFeature": "TableTools"
             *    } );
             */
            "aoFeatures": [],


            /**
             * Type detection plug-in functions - DataTables utilises types to define how sorting and
             * filtering behave, and types can be either  be defined by the developer (sType for the
             * column) or they can be automatically detected by the methods in this array. The functions
             * defined in the array are quite simple, taking a single parameter (the data to analyse) 
             * and returning the type if it is a known type, or null otherwise.
             *   <ul>
             *     <li>
             *       Function input parameters:
             *       <ul>
             *         <li>{*} Data from the column cell to be analysed</li>
             *       </ul>
             *     </li>
             *     <li>
             *       Function return:
             *       <ul>
             *         <li>{string|null} Data type detected, or null if unknown (and thus pass it
             *           on to the other type detection functions.</li>
             *       </ul>
             *     </il>
             *   </ul>
             *  @type array
             *  @default []
             *  
             *  @example
             *    // Currency type detection plug-in:
             *    jQuery.fn.dataTableExt.aTypes.push(
             *      function ( sData ) {
             *        var sValidChars = "0123456789.-";
             *        var Char;
             *        
             *        // Check the numeric part
             *        for ( i=1 ; i<sData.length ; i++ ) {
             *          Char = sData.charAt(i); 
             *          if (sValidChars.indexOf(Char) == -1) {
             *            return null;
             *          }
             *        }
             *        
             *        // Check prefixed by currency
             *        if ( sData.charAt(0) == '$' || sData.charAt(0) == '&pound;' ) {
             *          return 'currency';
             *        }
             *        return null;
             *      }
             *    );
             */
            "aTypes": [],


            /**
             * Provide a common method for plug-ins to check the version of DataTables being used, 
             * in order to ensure compatibility.
             *  @type function
             *  @param {string} sVersion Version string to check for, in the format "X.Y.Z". Note 
             *    that the formats "X" and "X.Y" are also acceptable.
             *  @returns {boolean} true if this version of DataTables is greater or equal to the 
             *    required version, or false if this version of DataTales is not suitable
             *
             *  @example
             *    $(document).ready(function() {
             *      var oTable = $('#example').dataTable();
             *      alert( oTable.fnVersionCheck( '1.9.0' ) );
             *    } );
             */
            "fnVersionCheck": DataTable.fnVersionCheck,


            /**
             * Index for what 'this' index API functions should use
             *  @type int
             *  @default 0
             */
            "iApiIndex": 0,


            /**
             * Pre-processing of filtering data plug-ins - When you assign the sType for a column
             * (or have it automatically detected for you by DataTables or a type detection plug-in), 
             * you will typically be using this for custom sorting, but it can also be used to provide 
             * custom filtering by allowing you to pre-processing the data and returning the data in
             * the format that should be filtered upon. This is done by adding functions this object 
             * with a parameter name which matches the sType for that target column. This is the
             * corollary of <i>afnSortData</i> for filtering data.
             *   <ul>
             *     <li>
             *       Function input parameters:
             *       <ul>
             *         <li>{*} Data from the column cell to be prepared for filtering</li>
             *       </ul>
             *     </li>
             *     <li>
             *       Function return:
             *       <ul>
             *         <li>{string|null} Formatted string that will be used for the filtering.</li>
             *       </ul>
             *     </il>
             *   </ul>
             * 
             * Note that as of v1.9, it is typically preferable to use <i>mData</i> to prepare data for
             * the different uses that DataTables can put the data to. Specifically <i>mData</i> when
             * used as a function will give you a 'type' (sorting, filtering etc) that you can use to 
             * prepare the data as required for the different types. As such, this method is deprecated.
             *  @type object
             *  @default {}
             *  @deprecated
             *
             *  @example
             *    $.fn.dataTableExt.ofnSearch['title-numeric'] = function ( sData ) {
             *      return sData.replace(/\n/g," ").replace( /<.*?>/g, "" );
             *    }
             */
            "ofnSearch": {},


            /**
             * Container for all private functions in DataTables so they can be exposed externally
             *  @type object
             *  @default {}
             */
            "oApi": {},


            /**
             * Storage for the various classes that DataTables uses
             *  @type object
             *  @default {}
             */
            "oStdClasses": {},


            /**
             * Storage for the various classes that DataTables uses - jQuery UI suitable
             *  @type object
             *  @default {}
             */
            "oJUIClasses": {},


            /**
             * Pagination plug-in methods - The style and controls of the pagination can significantly 
             * impact on how the end user interacts with the data in your table, and DataTables allows 
             * the addition of pagination controls by extending this object, which can then be enabled
             * through the <i>sPaginationType</i> initialisation parameter. Each pagination type that
             * is added is an object (the property name of which is what <i>sPaginationType</i> refers
             * to) that has two properties, both methods that are used by DataTables to update the
             * control's state.
             *   <ul>
             *     <li>
             *       fnInit -  Initialisation of the paging controls. Called only during initialisation 
             *         of the table. It is expected that this function will add the required DOM elements 
             *         to the page for the paging controls to work. The element pointer 
             *         'oSettings.aanFeatures.p' array is provided by DataTables to contain the paging 
             *         controls (note that this is a 2D array to allow for multiple instances of each 
             *         DataTables DOM element). It is suggested that you add the controls to this element 
             *         as children
             *       <ul>
             *         <li>
             *           Function input parameters:
             *           <ul>
             *             <li>{object} DataTables settings object: see {@link DataTable.models.oSettings}.</li>
             *             <li>{node} Container into which the pagination controls must be inserted</li>
             *             <li>{function} Draw callback function - whenever the controls cause a page
             *               change, this method must be called to redraw the table.</li>
             *           </ul>
             *         </li>
             *         <li>
             *           Function return:
             *           <ul>
             *             <li>No return required</li>
             *           </ul>
             *         </il>
             *       </ul>
             *     </il>
             *     <li>
             *       fnInit -  This function is called whenever the paging status of the table changes and is
             *         typically used to update classes and/or text of the paging controls to reflex the new 
             *         status.
             *       <ul>
             *         <li>
             *           Function input parameters:
             *           <ul>
             *             <li>{object} DataTables settings object: see {@link DataTable.models.oSettings}.</li>
             *             <li>{function} Draw callback function - in case you need to redraw the table again
             *               or attach new event listeners</li>
             *           </ul>
             *         </li>
             *         <li>
             *           Function return:
             *           <ul>
             *             <li>No return required</li>
             *           </ul>
             *         </il>
             *       </ul>
             *     </il>
             *   </ul>
             *  @type object
             *  @default {}
             *
             *  @example
             *    $.fn.dataTableExt.oPagination.four_button = {
             *      "fnInit": function ( oSettings, nPaging, fnCallbackDraw ) {
             *        nFirst = document.createElement( 'span' );
             *        nPrevious = document.createElement( 'span' );
             *        nNext = document.createElement( 'span' );
             *        nLast = document.createElement( 'span' );
             *        
             *        nFirst.appendChild( document.createTextNode( oSettings.oLanguage.oPaginate.sFirst ) );
             *        nPrevious.appendChild( document.createTextNode( oSettings.oLanguage.oPaginate.sPrevious ) );
             *        nNext.appendChild( document.createTextNode( oSettings.oLanguage.oPaginate.sNext ) );
             *        nLast.appendChild( document.createTextNode( oSettings.oLanguage.oPaginate.sLast ) );
             *        
             *        nFirst.className = "paginate_button first";
             *        nPrevious.className = "paginate_button previous";
             *        nNext.className="paginate_button next";
             *        nLast.className = "paginate_button last";
             *        
             *        nPaging.appendChild( nFirst );
             *        nPaging.appendChild( nPrevious );
             *        nPaging.appendChild( nNext );
             *        nPaging.appendChild( nLast );
             *        
             *        $(nFirst).click( function () {
             *          oSettings.oApi._fnPageChange( oSettings, "first" );
             *          fnCallbackDraw( oSettings );
             *        } );
             *        
             *        $(nPrevious).click( function() {
             *          oSettings.oApi._fnPageChange( oSettings, "previous" );
             *          fnCallbackDraw( oSettings );
             *        } );
             *        
             *        $(nNext).click( function() {
             *          oSettings.oApi._fnPageChange( oSettings, "next" );
             *          fnCallbackDraw( oSettings );
             *        } );
             *        
             *        $(nLast).click( function() {
             *          oSettings.oApi._fnPageChange( oSettings, "last" );
             *          fnCallbackDraw( oSettings );
             *        } );
             *        
             *        $(nFirst).bind( 'selectstart', function () { return false; } );
             *        $(nPrevious).bind( 'selectstart', function () { return false; } );
             *        $(nNext).bind( 'selectstart', function () { return false; } );
             *        $(nLast).bind( 'selectstart', function () { return false; } );
             *      },
             *      
             *      "fnUpdate": function ( oSettings, fnCallbackDraw ) {
             *        if ( !oSettings.aanFeatures.p ) {
             *          return;
             *        }
             *        
             *        // Loop over each instance of the pager
             *        var an = oSettings.aanFeatures.p;
             *        for ( var i=0, iLen=an.length ; i<iLen ; i++ ) {
             *          var buttons = an[i].getElementsByTagName('span');
             *          if ( oSettings._iDisplayStart === 0 ) {
             *            buttons[0].className = "paginate_disabled_previous";
             *            buttons[1].className = "paginate_disabled_previous";
             *          }
             *          else {
             *            buttons[0].className = "paginate_enabled_previous";
             *            buttons[1].className = "paginate_enabled_previous";
             *          }
             *          
             *          if ( oSettings.fnDisplayEnd() == oSettings.fnRecordsDisplay() ) {
             *            buttons[2].className = "paginate_disabled_next";
             *            buttons[3].className = "paginate_disabled_next";
             *          }
             *          else {
             *            buttons[2].className = "paginate_enabled_next";
             *            buttons[3].className = "paginate_enabled_next";
             *          }
             *        }
             *      }
             *    };
             */
            "oPagination": {},


            /**
             * Sorting plug-in methods - Sorting in DataTables is based on the detected type of the
             * data column (you can add your own type detection functions, or override automatic 
             * detection using sType). With this specific type given to the column, DataTables will 
             * apply the required sort from the functions in the object. Each sort type must provide
             * two mandatory methods, one each for ascending and descending sorting, and can optionally
             * provide a pre-formatting method that will help speed up sorting by allowing DataTables
             * to pre-format the sort data only once (rather than every time the actual sort functions
             * are run). The two sorting functions are typical Javascript sort methods:
             *   <ul>
             *     <li>
             *       Function input parameters:
             *       <ul>
             *         <li>{*} Data to compare to the second parameter</li>
             *         <li>{*} Data to compare to the first parameter</li>
             *       </ul>
             *     </li>
             *     <li>
             *       Function return:
             *       <ul>
             *         <li>{int} Sorting match: <0 if first parameter should be sorted lower than
             *           the second parameter, ===0 if the two parameters are equal and >0 if
             *           the first parameter should be sorted height than the second parameter.</li>
             *       </ul>
             *     </il>
             *   </ul>
             *  @type object
             *  @default {}
             *
             *  @example
             *    // Case-sensitive string sorting, with no pre-formatting method
             *    $.extend( $.fn.dataTableExt.oSort, {
             *      "string-case-asc": function(x,y) {
             *        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
             *      },
             *      "string-case-desc": function(x,y) {
             *        return ((x < y) ? 1 : ((x > y) ? -1 : 0));
             *      }
             *    } );
             *
             *  @example
             *    // Case-insensitive string sorting, with pre-formatting
             *    $.extend( $.fn.dataTableExt.oSort, {
             *      "string-pre": function(x) {
             *        return x.toLowerCase();
             *      },
             *      "string-asc": function(x,y) {
             *        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
             *      },
             *      "string-desc": function(x,y) {
             *        return ((x < y) ? 1 : ((x > y) ? -1 : 0));
             *      }
             *    } );
             */
            "oSort": {},


            /**
             * Version string for plug-ins to check compatibility. Allowed format is
             * a.b.c.d.e where: a:int, b:int, c:int, d:string(dev|beta), e:int. d and
             * e are optional
             *  @type string
             *  @default Version number
             */
            "sVersion": DataTable.version,


            /**
             * How should DataTables report an error. Can take the value 'alert' or 'throw'
             *  @type string
             *  @default alert
             */
            "sErrMode": "alert",


            /**
             * Store information for DataTables to access globally about other instances
             *  @namespace
             *  @private
             */
            "_oExternConfig": {
                /* int:iNextUnique - next unique number for an instance */
                "iNextUnique": 0
            }
        };




        /**
         * Template object for the way in which DataTables holds information about
         * search information for the global filter and individual column filters.
         *  @namespace
         */
        DataTable.models.oSearch = {
            /**
             * Flag to indicate if the filtering should be case insensitive or not
             *  @type boolean
             *  @default true
             */
            "bCaseInsensitive": true,

            /**
             * Applied search term
             *  @type string
             *  @default <i>Empty string</i>
             */
            "sSearch": "",

            /**
             * Flag to indicate if the search term should be interpreted as a
             * regular expression (true) or not (false) and therefore and special
             * regex characters escaped.
             *  @type boolean
             *  @default false
             */
            "bRegex": false,

            /**
             * Flag to indicate if DataTables is to use its smart filtering or not.
             *  @type boolean
             *  @default true
             */
            "bSmart": true
        };




        /**
         * Template object for the way in which DataTables holds information about
         * each individual row. This is the object format used for the settings 
         * aoData array.
         *  @namespace
         */
        DataTable.models.oRow = {
            /**
             * TR element for the row
             *  @type node
             *  @default null
             */
            "nTr": null,

            /**
             * Data object from the original data source for the row. This is either
             * an array if using the traditional form of DataTables, or an object if
             * using mData options. The exact type will depend on the passed in
             * data from the data source, or will be an array if using DOM a data 
             * source.
             *  @type array|object
             *  @default []
             */
            "_aData": [],

            /**
             * Sorting data cache - this array is ostensibly the same length as the
             * number of columns (although each index is generated only as it is 
             * needed), and holds the data that is used for sorting each column in the
             * row. We do this cache generation at the start of the sort in order that
             * the formatting of the sort data need be done only once for each cell
             * per sort. This array should not be read from or written to by anything
             * other than the master sorting methods.
             *  @type array
             *  @default []
             *  @private
             */
            "_aSortData": [],

            /**
             * Array of TD elements that are cached for hidden rows, so they can be
             * reinserted into the table if a column is made visible again (or to act
             * as a store if a column is made hidden). Only hidden columns have a 
             * reference in the array. For non-hidden columns the value is either
             * undefined or null.
             *  @type array nodes
             *  @default []
             *  @private
             */
            "_anHidden": [],

            /**
             * Cache of the class name that DataTables has applied to the row, so we
             * can quickly look at this variable rather than needing to do a DOM check
             * on className for the nTr property.
             *  @type string
             *  @default <i>Empty string</i>
             *  @private
             */
            "_sRowStripe": ""
        };



        /**
         * Template object for the column information object in DataTables. This object
         * is held in the settings aoColumns array and contains all the information that
         * DataTables needs about each individual column.
         * 
         * Note that this object is related to {@link DataTable.defaults.columns} 
         * but this one is the internal data store for DataTables's cache of columns.
         * It should NOT be manipulated outside of DataTables. Any configuration should
         * be done through the initialisation options.
         *  @namespace
         */
        DataTable.models.oColumn = {
            /**
             * A list of the columns that sorting should occur on when this column
             * is sorted. That this property is an array allows multi-column sorting
             * to be defined for a column (for example first name / last name columns
             * would benefit from this). The values are integers pointing to the
             * columns to be sorted on (typically it will be a single integer pointing
             * at itself, but that doesn't need to be the case).
             *  @type array
             */
            "aDataSort": null,

            /**
             * Define the sorting directions that are applied to the column, in sequence
             * as the column is repeatedly sorted upon - i.e. the first value is used
             * as the sorting direction when the column if first sorted (clicked on).
             * Sort it again (click again) and it will move on to the next index.
             * Repeat until loop.
             *  @type array
             */
            "asSorting": null,

            /**
             * Flag to indicate if the column is searchable, and thus should be included
             * in the filtering or not.
             *  @type boolean
             */
            "bSearchable": null,

            /**
             * Flag to indicate if the column is sortable or not.
             *  @type boolean
             */
            "bSortable": null,

            /**
             * <code>Deprecated</code> When using fnRender, you have two options for what 
             * to do with the data, and this property serves as the switch. Firstly, you 
             * can have the sorting and filtering use the rendered value (true - default), 
             * or you can have the sorting and filtering us the original value (false).
             *
             * Please note that this option has now been deprecated and will be removed
             * in the next version of DataTables. Please use mRender / mData rather than
             * fnRender.
             *  @type boolean
             *  @deprecated
             */
            "bUseRendered": null,

            /**
             * Flag to indicate if the column is currently visible in the table or not
             *  @type boolean
             */
            "bVisible": null,

            /**
             * Flag to indicate to the type detection method if the automatic type
             * detection should be used, or if a column type (sType) has been specified
             *  @type boolean
             *  @default true
             *  @private
             */
            "_bAutoType": true,

            /**
             * Developer definable function that is called whenever a cell is created (Ajax source,
             * etc) or processed for input (DOM source). This can be used as a compliment to mRender
             * allowing you to modify the DOM element (add background colour for example) when the
             * element is available.
             *  @type function
             *  @param {element} nTd The TD node that has been created
             *  @param {*} sData The Data for the cell
             *  @param {array|object} oData The data for the whole row
             *  @param {int} iRow The row index for the aoData data store
             *  @default null
             */
            "fnCreatedCell": null,

            /**
             * Function to get data from a cell in a column. You should <b>never</b>
             * access data directly through _aData internally in DataTables - always use
             * the method attached to this property. It allows mData to function as
             * required. This function is automatically assigned by the column 
             * initialisation method
             *  @type function
             *  @param {array|object} oData The data array/object for the array 
             *    (i.e. aoData[]._aData)
             *  @param {string} sSpecific The specific data type you want to get - 
             *    'display', 'type' 'filter' 'sort'
             *  @returns {*} The data for the cell from the given row's data
             *  @default null
             */
            "fnGetData": null,

            /**
             * <code>Deprecated</code> Custom display function that will be called for the 
             * display of each cell in this column.
             *
             * Please note that this option has now been deprecated and will be removed
             * in the next version of DataTables. Please use mRender / mData rather than
             * fnRender.
             *  @type function
             *  @param {object} o Object with the following parameters:
             *  @param {int}    o.iDataRow The row in aoData
             *  @param {int}    o.iDataColumn The column in question
             *  @param {array}  o.aData The data for the row in question
             *  @param {object} o.oSettings The settings object for this DataTables instance
             *  @returns {string} The string you which to use in the display
             *  @default null
             *  @deprecated
             */
            "fnRender": null,

            /**
             * Function to set data for a cell in the column. You should <b>never</b> 
             * set the data directly to _aData internally in DataTables - always use
             * this method. It allows mData to function as required. This function
             * is automatically assigned by the column initialisation method
             *  @type function
             *  @param {array|object} oData The data array/object for the array 
             *    (i.e. aoData[]._aData)
             *  @param {*} sValue Value to set
             *  @default null
             */
            "fnSetData": null,

            /**
             * Property to read the value for the cells in the column from the data 
             * source array / object. If null, then the default content is used, if a
             * function is given then the return from the function is used.
             *  @type function|int|string|null
             *  @default null
             */
            "mData": null,

            /**
             * Partner property to mData which is used (only when defined) to get
             * the data - i.e. it is basically the same as mData, but without the
             * 'set' option, and also the data fed to it is the result from mData.
             * This is the rendering method to match the data method of mData.
             *  @type function|int|string|null
             *  @default null
             */
            "mRender": null,

            /**
             * Unique header TH/TD element for this column - this is what the sorting
             * listener is attached to (if sorting is enabled.)
             *  @type node
             *  @default null
             */
            "nTh": null,

            /**
             * Unique footer TH/TD element for this column (if there is one). Not used 
             * in DataTables as such, but can be used for plug-ins to reference the 
             * footer for each column.
             *  @type node
             *  @default null
             */
            "nTf": null,

            /**
             * The class to apply to all TD elements in the table's TBODY for the column
             *  @type string
             *  @default null
             */
            "sClass": null,

            /**
             * When DataTables calculates the column widths to assign to each column,
             * it finds the longest string in each column and then constructs a
             * temporary table and reads the widths from that. The problem with this
             * is that "mmm" is much wider then "iiii", but the latter is a longer 
             * string - thus the calculation can go wrong (doing it properly and putting
             * it into an DOM object and measuring that is horribly(!) slow). Thus as
             * a "work around" we provide this option. It will append its value to the
             * text that is found to be the longest string for the column - i.e. padding.
             *  @type string
             */
            "sContentPadding": null,

            /**
             * Allows a default value to be given for a column's data, and will be used
             * whenever a null data source is encountered (this can be because mData
             * is set to null, or because the data source itself is null).
             *  @type string
             *  @default null
             */
            "sDefaultContent": null,

            /**
             * Name for the column, allowing reference to the column by name as well as
             * by index (needs a lookup to work by name).
             *  @type string
             */
            "sName": null,

            /**
             * Custom sorting data type - defines which of the available plug-ins in
             * afnSortData the custom sorting will use - if any is defined.
             *  @type string
             *  @default std
             */
            "sSortDataType": 'std',

            /**
             * Class to be applied to the header element when sorting on this column
             *  @type string
             *  @default null
             */
            "sSortingClass": null,

            /**
             * Class to be applied to the header element when sorting on this column -
             * when jQuery UI theming is used.
             *  @type string
             *  @default null
             */
            "sSortingClassJUI": null,

            /**
             * Title of the column - what is seen in the TH element (nTh).
             *  @type string
             */
            "sTitle": null,

            /**
             * Column sorting and filtering type
             *  @type string
             *  @default null
             */
            "sType": null,

            /**
             * Width of the column
             *  @type string
             *  @default null
             */
            "sWidth": null,

            /**
             * Width of the column when it was first "encountered"
             *  @type string
             *  @default null
             */
            "sWidthOrig": null
        };



        /**
         * Initialisation options that can be given to DataTables at initialisation 
         * time.
         *  @namespace
         */
        DataTable.defaults = {
            /**
             * An array of data to use for the table, passed in at initialisation which 
             * will be used in preference to any data which is already in the DOM. This is
             * particularly useful for constructing tables purely in Javascript, for
             * example with a custom Ajax call.
             *  @type array
             *  @default null
             *  @dtopt Option
             * 
             *  @example
             *    // Using a 2D array data source
             *    $(document).ready( function () {
             *      $('#example').dataTable( {
             *        "aaData": [
             *          ['Trident', 'Internet Explorer 4.0', 'Win 95+', 4, 'X'],
             *          ['Trident', 'Internet Explorer 5.0', 'Win 95+', 5, 'C'],
             *        ],
             *        "aoColumns": [
             *          { "sTitle": "Engine" },
             *          { "sTitle": "Browser" },
             *          { "sTitle": "Platform" },
             *          { "sTitle": "Version" },
             *          { "sTitle": "Grade" }
             *        ]
             *      } );
             *    } );
             *    
             *  @example
             *    // Using an array of objects as a data source (mData)
             *    $(document).ready( function () {
             *      $('#example').dataTable( {
             *        "aaData": [
             *          {
             *            "engine":   "Trident",
             *            "browser":  "Internet Explorer 4.0",
             *            "platform": "Win 95+",
             *            "version":  4,
             *            "grade":    "X"
             *          },
             *          {
             *            "engine":   "Trident",
             *            "browser":  "Internet Explorer 5.0",
             *            "platform": "Win 95+",
             *            "version":  5,
             *            "grade":    "C"
             *          }
             *        ],
             *        "aoColumns": [
             *          { "sTitle": "Engine",   "mData": "engine" },
             *          { "sTitle": "Browser",  "mData": "browser" },
             *          { "sTitle": "Platform", "mData": "platform" },
             *          { "sTitle": "Version",  "mData": "version" },
             *          { "sTitle": "Grade",    "mData": "grade" }
             *        ]
             *      } );
             *    } );
             */
            "aaData": null,


            /**
             * If sorting is enabled, then DataTables will perform a first pass sort on 
             * initialisation. You can define which column(s) the sort is performed upon, 
             * and the sorting direction, with this variable. The aaSorting array should 
             * contain an array for each column to be sorted initially containing the 
             * column's index and a direction string ('asc' or 'desc').
             *  @type array
             *  @default [[0,'asc']]
             *  @dtopt Option
             * 
             *  @example
             *    // Sort by 3rd column first, and then 4th column
             *    $(document).ready( function() {
             *      $('#example').dataTable( {
             *        "aaSorting": [[2,'asc'], [3,'desc']]
             *      } );
             *    } );
             *    
             *    // No initial sorting
             *    $(document).ready( function() {
             *      $('#example').dataTable( {
             *        "aaSorting": []
             *      } );
             *    } );
             */
            "aaSorting": [[0, 'asc']],


            /**
             * This parameter is basically identical to the aaSorting parameter, but 
             * cannot be overridden by user interaction with the table. What this means 
             * is that you could have a column (visible or hidden) which the sorting will 
             * always be forced on first - any sorting after that (from the user) will 
             * then be performed as required. This can be useful for grouping rows 
             * together.
             *  @type array
             *  @default null
             *  @dtopt Option
             * 
             *  @example
             *    $(document).ready( function() {
             *      $('#example').dataTable( {
             *        "aaSortingFixed": [[0,'asc']]
             *      } );
             *    } )
             */
            "aaSortingFixed": null,


            /**
             * This parameter allows you to readily specify the entries in the length drop
             * down menu that DataTables shows when pagination is enabled. It can be 
             * either a 1D array of options which will be used for both the displayed 
             * option and the value, or a 2D array which will use the array in the first 
             * position as the value, and the array in the second position as the 
             * displayed options (useful for language strings such as 'All').
             *  @type array
             *  @default [ 10, 25, 50, 100 ]
             *  @dtopt Option
             * 
             *  @example
             *    $(document).ready( function() {
             *      $('#example').dataTable( {
             *        "aLengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]]
             *      } );
             *    } );
             *  
             *  @example
             *    // Setting the default display length as well as length menu
             *    // This is likely to be wanted if you remove the '10' option which
             *    // is the iDisplayLength default.
             *    $(document).ready( function() {
             *      $('#example').dataTable( {
             *        "iDisplayLength": 25,
             *        "aLengthMenu": [[25, 50, 100, -1], [25, 50, 100, "All"]]
             *      } );
             *    } );
             */
            "aLengthMenu": [10, 25, 50, 100],


            /**
             * The aoColumns option in the initialisation parameter allows you to define
             * details about the way individual columns behave. For a full list of
             * column options that can be set, please see 
             * {@link DataTable.defaults.columns}. Note that if you use aoColumns to
             * define your columns, you must have an entry in the array for every single
             * column that you have in your table (these can be null if you don't which
             * to specify any options).
             *  @member
             */
            "aoColumns": null,

            /**
             * Very similar to aoColumns, aoColumnDefs allows you to target a specific 
             * column, multiple columns, or all columns, using the aTargets property of 
             * each object in the array. This allows great flexibility when creating 
             * tables, as the aoColumnDefs arrays can be of any length, targeting the 
             * columns you specifically want. aoColumnDefs may use any of the column 
             * options available: {@link DataTable.defaults.columns}, but it _must_
             * have aTargets defined in each object in the array. Values in the aTargets
             * array may be:
             *   <ul>
             *     <li>a string - class name will be matched on the TH for the column</li>
             *     <li>0 or a positive integer - column index counting from the left</li>
             *     <li>a negative integer - column index counting from the right</li>
             *     <li>the string "_all" - all columns (i.e. assign a default)</li>
             *   </ul>
             *  @member
             */
            "aoColumnDefs": null,


            /**
             * Basically the same as oSearch, this parameter defines the individual column
             * filtering state at initialisation time. The array must be of the same size 
             * as the number of columns, and each element be an object with the parameters
             * "sSearch" and "bEscapeRegex" (the latter is optional). 'null' is also
             * accepted and the default will be used.
             *  @type array
             *  @default []
             *  @dtopt Option
             * 
             *  @example
             *    $(document).ready( function() {
             *      $('#example').dataTable( {
             *        "aoSearchCols": [
             *          null,
             *          { "sSearch": "My filter" },
             *          null,
             *          { "sSearch": "^[0-9]", "bEscapeRegex": false }
             *        ]
             *      } );
             *    } )
             */
            "aoSearchCols": [],


            /**
             * An array of CSS classes that should be applied to displayed rows. This 
             * array may be of any length, and DataTables will apply each class 
             * sequentially, looping when required.
             *  @type array
             *  @default null <i>Will take the values determined by the oClasses.sStripe*
             *    options</i>
             *  @dtopt Option
             * 
             *  @example
             *    $(document).ready( function() {
             *      $('#example').dataTable( {
             *        "asStripeClasses": [ 'strip1', 'strip2', 'strip3' ]
             *      } );
             *    } )
             */
            "asStripeClasses": null,


            /**
             * Enable or disable automatic column width calculation. This can be disabled
             * as an optimisation (it takes some time to calculate the widths) if the
             * tables widths are passed in using aoColumns.
             *  @type boolean
             *  @default true
             *  @dtopt Features
             * 
             *  @example
             *    $(document).ready( function () {
             *      $('#example').dataTable( {
             *        "bAutoWidth": false
             *      } );
             *    } );
             */
            "bAutoWidth": true,


            /**
             * Deferred rendering can provide DataTables with a huge speed boost when you
             * are using an Ajax or JS data source for the table. This option, when set to
             * true, will cause DataTables to defer the creation of the table elements for
             * each row until they are needed for a draw - saving a significant amount of
             * time.
             *  @type boolean
             *  @default false
             *  @dtopt Features
             * 
             *  @example
             *    $(document).ready( function() {
             *      var oTable = $('#example').dataTable( {
             *        "sAjaxSource": "sources/arrays.txt",
             *        "bDeferRender": true
             *      } );
             *    } );
             */
            "bDeferRender": false,


            /**
             * Replace a DataTable which matches the given selector and replace it with 
             * one which has the properties of the new initialisation object passed. If no
             * table matches the selector, then the new DataTable will be constructed as
             * per normal.
             *  @type boolean
             *  @default false
             *  @dtopt Options
             * 
             *  @example
             *    $(document).ready( function() {
             *      $('#example').dataTable( {
             *        "sScrollY": "200px",
             *        "bPaginate": false
             *      } );
             *      
             *      // Some time later....
             *      $('#example').dataTable( {
             *        "bFilter": false,
             *        "bDestroy": true
             *      } );
             *    } );
             */
            "bDestroy": false,


            /**
             * Enable or disable filtering of data. Filtering in DataTables is "smart" in
             * that it allows the end user to input multiple words (space separated) and
             * will match a row containing those words, even if not in the order that was
             * specified (this allow matching across multiple columns). Note that if you
             * wish to use filtering in DataTables this must remain 'true' - to remove the
             * default filtering input box and retain filtering abilities, please use
             * {@link DataTable.defaults.sDom}.
             *  @type boolean
             *  @default true
             *  @dtopt Features
             * 
             *  @example
             *    $(document).ready( function () {
             *      $('#example').dataTable( {
             *        "bFilter": false
             *      } );
             *    } );
             */
            "bFilter": true,


            /**
             * Enable or disable the table information display. This shows information 
             * about the data that is currently visible on the page, including information
             * about filtered data if that action is being performed.
             *  @type boolean
             *  @default true
             *  @dtopt Features
             * 
             *  @example
             *    $(document).ready( function () {
             *      $('#example').dataTable( {
             *        "bInfo": false
             *      } );
             *    } );
             */
            "bInfo": true,


            /**
             * Enable jQuery UI ThemeRoller support (required as ThemeRoller requires some
             * slightly different and additional mark-up from what DataTables has
             * traditionally used).
             *  @type boolean
             *  @default false
             *  @dtopt Features
             * 
             *  @example
             *    $(document).ready( function() {
             *      $('#example').dataTable( {
             *        "bJQueryUI": true
             *      } );
             *    } );
             */
            "bJQueryUI": false,


            /**
             * Allows the end user to select the size of a formatted page from a select
             * menu (sizes are 10, 25, 50 and 100). Requires pagination (bPaginate).
             *  @type boolean
             *  @default true
             *  @dtopt Features
             * 
             *  @example
             *    $(document).ready( function () {
             *      $('#example').dataTable( {
             *        "bLengthChange": false
             *      } );
             *    } );
             */
            "bLengthChange": true,


            /**
             * Enable or disable pagination.
             *  @type boolean
             *  @default true
             *  @dtopt Features
             * 
             *  @example
             *    $(document).ready( function () {
             *      $('#example').dataTable( {
             *        "bPaginate": false
             *      } );
             *    } );
             */
            "bPaginate": true,


            /**
             * Enable or disable the display of a 'processing' indicator when the table is
             * being processed (e.g. a sort). This is particularly useful for tables with
             * large amounts of data where it can take a noticeable amount of time to sort
             * the entries.
             *  @type boolean
             *  @default false
             *  @dtopt Features
             * 
             *  @example
             *    $(document).ready( function () {
             *      $('#example').dataTable( {
             *        "bProcessing": true
             *      } );
             *    } );
             */
            "bProcessing": false,


            /**
             * Retrieve the DataTables object for the given selector. Note that if the
             * table has already been initialised, this parameter will cause DataTables
             * to simply return the object that has already been set up - it will not take
             * account of any changes you might have made to the initialisation object
             * passed to DataTables (setting this parameter to true is an acknowledgement
             * that you understand this). bDestroy can be used to reinitialise a table if
             * you need.
             *  @type boolean
             *  @default false
             *  @dtopt Options
             * 
             *  @example
             *    $(document).ready( function() {
             *      initTable();
             *      tableActions();
             *    } );
             *    
             *    function initTable ()
             *    {
             *      return $('#example').dataTable( {
             *        "sScrollY": "200px",
             *        "bPaginate": false,
             *        "bRetrieve": true
             *      } );
             *    }
             *    
             *    function tableActions ()
             *    {
             *      var oTable = initTable();
             *      // perform API operations with oTable 
             *    }
             */
            "bRetrieve": false,


            /**
             * Indicate if DataTables should be allowed to set the padding / margin
             * etc for the scrolling header elements or not. Typically you will want
             * this.
             *  @type boolean
             *  @default true
             *  @dtopt Options
             * 
             *  @example
             *    $(document).ready( function() {
             *      $('#example').dataTable( {
             *        "bScrollAutoCss": false,
             *        "sScrollY": "200px"
             *      } );
             *    } );
             */
            "bScrollAutoCss": true,


            /**
             * When vertical (y) scrolling is enabled, DataTables will force the height of
             * the table's viewport to the given height at all times (useful for layout).
             * However, this can look odd when filtering data down to a small data set,
             * and the footer is left "floating" further down. This parameter (when
             * enabled) will cause DataTables to collapse the table's viewport down when
             * the result set will fit within the given Y height.
             *  @type boolean
             *  @default false
             *  @dtopt Options
             * 
             *  @example
             *    $(document).ready( function() {
             *      $('#example').dataTable( {
             *        "sScrollY": "200",
             *        "bScrollCollapse": true
             *      } );
             *    } );
             */
            "bScrollCollapse": false,


            /**
             * Enable infinite scrolling for DataTables (to be used in combination with
             * sScrollY). Infinite scrolling means that DataTables will continually load
             * data as a user scrolls through a table, which is very useful for large
             * dataset. This cannot be used with pagination, which is automatically
             * disabled. Note - the Scroller extra for DataTables is recommended in
             * in preference to this option.
             *  @type boolean
             *  @default false
             *  @dtopt Features
             * 
             *  @example
             *    $(document).ready( function() {
             *      $('#example').dataTable( {
             *        "bScrollInfinite": true,
             *        "bScrollCollapse": true,
             *        "sScrollY": "200px"
             *      } );
             *    } );
             */
            "bScrollInfinite": false,


            /**
             * Configure DataTables to use server-side processing. Note that the
             * sAjaxSource parameter must also be given in order to give DataTables a
             * source to obtain the required data for each draw.
             *  @type boolean
             *  @default false
             *  @dtopt Features
             *  @dtopt Server-side
             * 
             *  @example
             *    $(document).ready( function () {
             *      $('#example').dataTable( {
             *        "bServerSide": true,
             *        "sAjaxSource": "xhr.php"
             *      } );
             *    } );
             */
            "bServerSide": false,


            /**
             * Enable or disable sorting of columns. Sorting of individual columns can be
             * disabled by the "bSortable" option for each column.
             *  @type boolean
             *  @default true
             *  @dtopt Features
             * 
             *  @example
             *    $(document).ready( function () {
             *      $('#example').dataTable( {
             *        "bSort": false
             *      } );
             *    } );
             */
            "bSort": true,


            /**
             * Allows control over whether DataTables should use the top (true) unique
             * cell that is found for a single column, or the bottom (false - default).
             * This is useful when using complex headers.
             *  @type boolean
             *  @default false
             *  @dtopt Options
             * 
             *  @example
             *    $(document).ready( function() {
             *      $('#example').dataTable( {
             *        "bSortCellsTop": true
             *      } );
             *    } );
             */
            "bSortCellsTop": false,


            /**
             * Enable or disable the addition of the classes 'sorting_1', 'sorting_2' and
             * 'sorting_3' to the columns which are currently being sorted on. This is
             * presented as a feature switch as it can increase processing time (while
             * classes are removed and added) so for large data sets you might want to
             * turn this off.
             *  @type boolean
             *  @default true
             *  @dtopt Features
             * 
             *  @example
             *    $(document).ready( function () {
             *      $('#example').dataTable( {
             *        "bSortClasses": false
             *      } );
             *    } );
             */
            "bSortClasses": true,


            /**
             * Enable or disable state saving. When enabled a cookie will be used to save
             * table display information such as pagination information, display length,
             * filtering and sorting. As such when the end user reloads the page the
             * display display will match what thy had previously set up.
             *  @type boolean
             *  @default false
             *  @dtopt Features
             * 
             *  @example
             *    $(document).ready( function () {
             *      $('#example').dataTable( {
             *        "bStateSave": true
             *      } );
             *    } );
             */
            "bStateSave": false,


            /**
             * Customise the cookie and / or the parameters being stored when using
             * DataTables with state saving enabled. This function is called whenever
             * the cookie is modified, and it expects a fully formed cookie string to be
             * returned. Note that the data object passed in is a Javascript object which
             * must be converted to a string (JSON.stringify for example).
             *  @type function
             *  @param {string} sName Name of the cookie defined by DataTables
             *  @param {object} oData Data to be stored in the cookie
             *  @param {string} sExpires Cookie expires string
             *  @param {string} sPath Path of the cookie to set
             *  @returns {string} Cookie formatted string (which should be encoded by
             *    using encodeURIComponent())
             *  @dtopt Callbacks
             * 
             *  @example
             *    $(document).ready( function () {
             *      $('#example').dataTable( {
             *        "fnCookieCallback": function (sName, oData, sExpires, sPath) {
             *          // Customise oData or sName or whatever else here
             *          return sName + "="+JSON.stringify(oData)+"; expires=" + sExpires +"; path=" + sPath;
             *        }
             *      } );
             *    } );
             */
            "fnCookieCallback": null,


            /**
             * This function is called when a TR element is created (and all TD child
             * elements have been inserted), or registered if using a DOM source, allowing
             * manipulation of the TR element (adding classes etc).
             *  @type function
             *  @param {node} nRow "TR" element for the current row
             *  @param {array} aData Raw data array for this row
             *  @param {int} iDataIndex The index of this row in aoData
             *  @dtopt Callbacks
             * 
             *  @example
             *    $(document).ready( function() {
             *      $('#example').dataTable( {
             *        "fnCreatedRow": function( nRow, aData, iDataIndex ) {
             *          // Bold the grade for all 'A' grade browsers
             *          if ( aData[4] == "A" )
             *          {
             *            $('td:eq(4)', nRow).html( '<b>A</b>' );
             *          }
             *        }
             *      } );
             *    } );
             */
            "fnCreatedRow": null,


            /**
             * This function is called on every 'draw' event, and allows you to
             * dynamically modify any aspect you want about the created DOM.
             *  @type function
             *  @param {object} oSettings DataTables settings object
             *  @dtopt Callbacks
             * 
             *  @example
             *    $(document).ready( function() {
             *      $('#example').dataTable( {
             *        "fnDrawCallback": function( oSettings ) {
             *          alert( 'DataTables has redrawn the table' );
             *        }
             *      } );
             *    } );
             */
            "fnDrawCallback": null,


            /**
             * Identical to fnHeaderCallback() but for the table footer this function
             * allows you to modify the table footer on every 'draw' even.
             *  @type function
             *  @param {node} nFoot "TR" element for the footer
             *  @param {array} aData Full table data (as derived from the original HTML)
             *  @param {int} iStart Index for the current display starting point in the 
             *    display array
             *  @param {int} iEnd Index for the current display ending point in the 
             *    display array
             *  @param {array int} aiDisplay Index array to translate the visual position
             *    to the full data array
             *  @dtopt Callbacks
             * 
             *  @example
             *    $(document).ready( function() {
             *      $('#example').dataTable( {
             *        "fnFooterCallback": function( nFoot, aData, iStart, iEnd, aiDisplay ) {
             *          nFoot.getElementsByTagName('th')[0].innerHTML = "Starting index is "+iStart;
             *        }
             *      } );
             *    } )
             */
            "fnFooterCallback": null,


            /**
             * When rendering large numbers in the information element for the table
             * (i.e. "Showing 1 to 10 of 57 entries") DataTables will render large numbers
             * to have a comma separator for the 'thousands' units (e.g. 1 million is
             * rendered as "1,000,000") to help readability for the end user. This
             * function will override the default method DataTables uses.
             *  @type function
             *  @member
             *  @param {int} iIn number to be formatted
             *  @returns {string} formatted string for DataTables to show the number
             *  @dtopt Callbacks
             * 
             *  @example
             *    $(document).ready( function() {
             *      $('#example').dataTable( {
             *        "fnFormatNumber": function ( iIn ) {
             *          if ( iIn &lt; 1000 ) {
             *            return iIn;
             *          } else {
             *            var 
             *              s=(iIn+""), 
             *              a=s.split(""), out="", 
             *              iLen=s.length;
             *            
             *            for ( var i=0 ; i&lt;iLen ; i++ ) {
             *              if ( i%3 === 0 &amp;&amp; i !== 0 ) {
             *                out = "'"+out;
             *              }
             *              out = a[iLen-i-1]+out;
             *            }
             *          }
             *          return out;
             *        };
             *      } );
             *    } );
             */
            "fnFormatNumber": function (iIn) {
                if (iIn < 1000) {
                    // A small optimisation for what is likely to be the majority of use cases
                    return iIn;
                }

                var s = (iIn + ""), a = s.split(""), out = "", iLen = s.length;

                for (var i = 0 ; i < iLen ; i++) {
                    if (i % 3 === 0 && i !== 0) {
                        out = this.oLanguage.sInfoThousands + out;
                    }
                    out = a[iLen - i - 1] + out;
                }
                return out;
            },


            /**
             * This function is called on every 'draw' event, and allows you to
             * dynamically modify the header row. This can be used to calculate and
             * display useful information about the table.
             *  @type function
             *  @param {node} nHead "TR" element for the header
             *  @param {array} aData Full table data (as derived from the original HTML)
             *  @param {int} iStart Index for the current display starting point in the
             *    display array
             *  @param {int} iEnd Index for the current display ending point in the
             *    display array
             *  @param {array int} aiDisplay Index array to translate the visual position
             *    to the full data array
             *  @dtopt Callbacks
             * 
             *  @example
             *    $(document).ready( function() {
             *      $('#example').dataTable( {
             *        "fnHeaderCallback": function( nHead, aData, iStart, iEnd, aiDisplay ) {
             *          nHead.getElementsByTagName('th')[0].innerHTML = "Displaying "+(iEnd-iStart)+" records";
             *        }
             *      } );
             *    } )
             */
            "fnHeaderCallback": null,


            /**
             * The information element can be used to convey information about the current
             * state of the table. Although the internationalisation options presented by
             * DataTables are quite capable of dealing with most customisations, there may
             * be times where you wish to customise the string further. This callback
             * allows you to do exactly that.
             *  @type function
             *  @param {object} oSettings DataTables settings object
             *  @param {int} iStart Starting position in data for the draw
             *  @param {int} iEnd End position in data for the draw
             *  @param {int} iMax Total number of rows in the table (regardless of
             *    filtering)
             *  @param {int} iTotal Total number of rows in the data set, after filtering
             *  @param {string} sPre The string that DataTables has formatted using it's
             *    own rules
             *  @returns {string} The string to be displayed in the information element.
             *  @dtopt Callbacks
             * 
             *  @example
             *    $('#example').dataTable( {
             *      "fnInfoCallback": function( oSettings, iStart, iEnd, iMax, iTotal, sPre ) {
             *        return iStart +" to "+ iEnd;
             *      }
             *    } );
             */
            "fnInfoCallback": null,


            /**
             * Called when the table has been initialised. Normally DataTables will
             * initialise sequentially and there will be no need for this function,
             * however, this does not hold true when using external language information
             * since that is obtained using an async XHR call.
             *  @type function
             *  @param {object} oSettings DataTables settings object
             *  @param {object} json The JSON object request from the server - only
             *    present if client-side Ajax sourced data is used
             *  @dtopt Callbacks
             * 
             *  @example
             *    $(document).ready( function() {
             *      $('#example').dataTable( {
             *        "fnInitComplete": function(oSettings, json) {
             *          alert( 'DataTables has finished its initialisation.' );
             *        }
             *      } );
             *    } )
             */
            "fnInitComplete": null,


            /**
             * Called at the very start of each table draw and can be used to cancel the
             * draw by returning false, any other return (including undefined) results in
             * the full draw occurring).
             *  @type function
             *  @param {object} oSettings DataTables settings object
             *  @returns {boolean} False will cancel the draw, anything else (including no
             *    return) will allow it to complete.
             *  @dtopt Callbacks
             * 
             *  @example
             *    $(document).ready( function() {
             *      $('#example').dataTable( {
             *        "fnPreDrawCallback": function( oSettings ) {
             *          if ( $('#test').val() == 1 ) {
             *            return false;
             *          }
             *        }
             *      } );
             *    } );
             */
            "fnPreDrawCallback": null,


            /**
             * This function allows you to 'post process' each row after it have been
             * generated for each table draw, but before it is rendered on screen. This
             * function might be used for setting the row class name etc.
             *  @type function
             *  @param {node} nRow "TR" element for the current row
             *  @param {array} aData Raw data array for this row
             *  @param {int} iDisplayIndex The display index for the current table draw
             *  @param {int} iDisplayIndexFull The index of the data in the full list of
             *    rows (after filtering)
             *  @dtopt Callbacks
             * 
             *  @example
             *    $(document).ready( function() {
             *      $('#example').dataTable( {
             *        "fnRowCallback": function( nRow, aData, iDisplayIndex, iDisplayIndexFull ) {
             *          // Bold the grade for all 'A' grade browsers
             *          if ( aData[4] == "A" )
             *          {
             *            $('td:eq(4)', nRow).html( '<b>A</b>' );
             *          }
             *        }
             *      } );
             *    } );
             */
            "fnRowCallback": null,


            /**
             * This parameter allows you to override the default function which obtains
             * the data from the server ($.getJSON) so something more suitable for your
             * application. For example you could use POST data, or pull information from
             * a Gears or AIR database.
             *  @type function
             *  @member
             *  @param {string} sSource HTTP source to obtain the data from (sAjaxSource)
             *  @param {array} aoData A key/value pair object containing the data to send
             *    to the server
             *  @param {function} fnCallback to be called on completion of the data get
             *    process that will draw the data on the page.
             *  @param {object} oSettings DataTables settings object
             *  @dtopt Callbacks
             *  @dtopt Server-side
             * 
             *  @example
             *    // POST data to server
             *    $(document).ready( function() {
             *      $('#example').dataTable( {
             *        "bProcessing": true,
             *        "bServerSide": true,
             *        "sAjaxSource": "xhr.php",
             *        "fnServerData": function ( sSource, aoData, fnCallback, oSettings ) {
             *          oSettings.jqXHR = $.ajax( {
             *            "dataType": 'json', 
             *            "type": "POST", 
             *            "url": sSource, 
             *            "data": aoData, 
             *            "success": fnCallback
             *          } );
             *        }
             *      } );
             *    } );
             */
            "fnServerData": function (sUrl, aoData, fnCallback, oSettings) {
                oSettings.jqXHR = $.ajax({
                    "url": sUrl,
                    "data": aoData,
                    "success": function (json) {
                        if (json.sError) {
                            oSettings.oApi._fnLog(oSettings, 0, json.sError);
                        }

                        $(oSettings.oInstance).trigger('xhr', [oSettings, json]);
                        fnCallback(json);
                    },
                    "dataType": "json",
                    "cache": false,
                    "type": oSettings.sServerMethod,
                    "error": function (xhr, error, thrown) {
                        if (error == "parsererror") {
                            oSettings.oApi._fnLog(oSettings, 0, "DataTables warning: JSON data from " +
                                "server could not be parsed. This is caused by a JSON formatting error.");
                        }
                    }
                });
            },


            /**
             * It is often useful to send extra data to the server when making an Ajax
             * request - for example custom filtering information, and this callback
             * function makes it trivial to send extra information to the server. The
             * passed in parameter is the data set that has been constructed by
             * DataTables, and you can add to this or modify it as you require.
             *  @type function
             *  @param {array} aoData Data array (array of objects which are name/value
             *    pairs) that has been constructed by DataTables and will be sent to the
             *    server. In the case of Ajax sourced data with server-side processing
             *    this will be an empty array, for server-side processing there will be a
             *    significant number of parameters!
             *  @returns {undefined} Ensure that you modify the aoData array passed in,
             *    as this is passed by reference.
             *  @dtopt Callbacks
             *  @dtopt Server-side
             * 
             *  @example
             *    $(document).ready( function() {
             *      $('#example').dataTable( {
             *        "bProcessing": true,
             *        "bServerSide": true,
             *        "sAjaxSource": "scripts/server_processing.php",
             *        "fnServerParams": function ( aoData ) {
             *          aoData.push( { "name": "more_data", "value": "my_value" } );
             *        }
             *      } );
             *    } );
             */
            "fnServerParams": null,


            /**
             * Load the table state. With this function you can define from where, and how, the
             * state of a table is loaded. By default DataTables will load from its state saving
             * cookie, but you might wish to use local storage (HTML5) or a server-side database.
             *  @type function
             *  @member
             *  @param {object} oSettings DataTables settings object
             *  @return {object} The DataTables state object to be loaded
             *  @dtopt Callbacks
             * 
             *  @example
             *    $(document).ready( function() {
             *      $('#example').dataTable( {
             *        "bStateSave": true,
             *        "fnStateLoad": function (oSettings) {
             *          var o;
             *          
             *          // Send an Ajax request to the server to get the data. Note that
             *          // this is a synchronous request.
             *          $.ajax( {
             *            "url": "/state_load",
             *            "async": false,
             *            "dataType": "json",
             *            "success": function (json) {
             *              o = json;
             *            }
             *          } );
             *          
             *          return o;
             *        }
             *      } );
             *    } );
             */
            "fnStateLoad": function (oSettings) {
                var sData = this.oApi._fnReadCookie(oSettings.sCookiePrefix + oSettings.sInstance);
                var oData;

                try {
                    oData = (typeof $.parseJSON === 'function') ?
                        $.parseJSON(sData) : eval('(' + sData + ')');
                } catch (e) {
                    oData = null;
                }

                return oData;
            },


            /**
             * Callback which allows modification of the saved state prior to loading that state.
             * This callback is called when the table is loading state from the stored data, but
             * prior to the settings object being modified by the saved state. Note that for 
             * plug-in authors, you should use the 'stateLoadParams' event to load parameters for 
             * a plug-in.
             *  @type function
             *  @param {object} oSettings DataTables settings object
             *  @param {object} oData The state object that is to be loaded
             *  @dtopt Callbacks
             * 
             *  @example
             *    // Remove a saved filter, so filtering is never loaded
             *    $(document).ready( function() {
             *      $('#example').dataTable( {
             *        "bStateSave": true,
             *        "fnStateLoadParams": function (oSettings, oData) {
             *          oData.oSearch.sSearch = "";
             *        }
             *      } );
             *    } );
             * 
             *  @example
             *    // Disallow state loading by returning false
             *    $(document).ready( function() {
             *      $('#example').dataTable( {
             *        "bStateSave": true,
             *        "fnStateLoadParams": function (oSettings, oData) {
             *          return false;
             *        }
             *      } );
             *    } );
             */
            "fnStateLoadParams": null,


            /**
             * Callback that is called when the state has been loaded from the state saving method
             * and the DataTables settings object has been modified as a result of the loaded state.
             *  @type function
             *  @param {object} oSettings DataTables settings object
             *  @param {object} oData The state object that was loaded
             *  @dtopt Callbacks
             * 
             *  @example
             *    // Show an alert with the filtering value that was saved
             *    $(document).ready( function() {
             *      $('#example').dataTable( {
             *        "bStateSave": true,
             *        "fnStateLoaded": function (oSettings, oData) {
             *          alert( 'Saved filter was: '+oData.oSearch.sSearch );
             *        }
             *      } );
             *    } );
             */
            "fnStateLoaded": null,


            /**
             * Save the table state. This function allows you to define where and how the state
             * information for the table is stored - by default it will use a cookie, but you
             * might want to use local storage (HTML5) or a server-side database.
             *  @type function
             *  @member
             *  @param {object} oSettings DataTables settings object
             *  @param {object} oData The state object to be saved
             *  @dtopt Callbacks
             * 
             *  @example
             *    $(document).ready( function() {
             *      $('#example').dataTable( {
             *        "bStateSave": true,
             *        "fnStateSave": function (oSettings, oData) {
             *          // Send an Ajax request to the server with the state object
             *          $.ajax( {
             *            "url": "/state_save",
             *            "data": oData,
             *            "dataType": "json",
             *            "method": "POST"
             *            "success": function () {}
             *          } );
             *        }
             *      } );
             *    } );
             */
            "fnStateSave": function (oSettings, oData) {
                this.oApi._fnCreateCookie(
                    oSettings.sCookiePrefix + oSettings.sInstance,
                    this.oApi._fnJsonString(oData),
                    oSettings.iCookieDuration,
                    oSettings.sCookiePrefix,
                    oSettings.fnCookieCallback
                );
            },


            /**
             * Callback which allows modification of the state to be saved. Called when the table 
             * has changed state a new state save is required. This method allows modification of
             * the state saving object prior to actually doing the save, including addition or 
             * other state properties or modification. Note that for plug-in authors, you should 
             * use the 'stateSaveParams' event to save parameters for a plug-in.
             *  @type function
             *  @param {object} oSettings DataTables settings object
             *  @param {object} oData The state object to be saved
             *  @dtopt Callbacks
             * 
             *  @example
             *    // Remove a saved filter, so filtering is never saved
             *    $(document).ready( function() {
             *      $('#example').dataTable( {
             *        "bStateSave": true,
             *        "fnStateSaveParams": function (oSettings, oData) {
             *          oData.oSearch.sSearch = "";
             *        }
             *      } );
             *    } );
             */
            "fnStateSaveParams": null,


            /**
             * Duration of the cookie which is used for storing session information. This
             * value is given in seconds.
             *  @type int
             *  @default 7200 <i>(2 hours)</i>
             *  @dtopt Options
             * 
             *  @example
             *    $(document).ready( function() {
             *      $('#example').dataTable( {
             *        "iCookieDuration": 60*60*24; // 1 day
             *      } );
             *    } )
             */
            "iCookieDuration": 7200,


            /**
             * When enabled DataTables will not make a request to the server for the first
             * page draw - rather it will use the data already on the page (no sorting etc
             * will be applied to it), thus saving on an XHR at load time. iDeferLoading
             * is used to indicate that deferred loading is required, but it is also used
             * to tell DataTables how many records there are in the full table (allowing
             * the information element and pagination to be displayed correctly). In the case
             * where a filtering is applied to the table on initial load, this can be
             * indicated by giving the parameter as an array, where the first element is
             * the number of records available after filtering and the second element is the
             * number of records without filtering (allowing the table information element
             * to be shown correctly).
             *  @type int | array
             *  @default null
             *  @dtopt Options
             * 
             *  @example
             *    // 57 records available in the table, no filtering applied
             *    $(document).ready( function() {
             *      $('#example').dataTable( {
             *        "bServerSide": true,
             *        "sAjaxSource": "scripts/server_processing.php",
             *        "iDeferLoading": 57
             *      } );
             *    } );
             * 
             *  @example
             *    // 57 records after filtering, 100 without filtering (an initial filter applied)
             *    $(document).ready( function() {
             *      $('#example').dataTable( {
             *        "bServerSide": true,
             *        "sAjaxSource": "scripts/server_processing.php",
             *        "iDeferLoading": [ 57, 100 ],
             *        "oSearch": {
             *          "sSearch": "my_filter"
             *        }
             *      } );
             *    } );
             */
            "iDeferLoading": null,


            /**
             * Number of rows to display on a single page when using pagination. If
             * feature enabled (bLengthChange) then the end user will be able to override
             * this to a custom setting using a pop-up menu.
             *  @type int
             *  @default 10
             *  @dtopt Options
             * 
             *  @example
             *    $(document).ready( function() {
             *      $('#example').dataTable( {
             *        "iDisplayLength": 50
             *      } );
             *    } )
             */
            "iDisplayLength": 10,


            /**
             * Define the starting point for data display when using DataTables with
             * pagination. Note that this parameter is the number of records, rather than
             * the page number, so if you have 10 records per page and want to start on
             * the third page, it should be "20".
             *  @type int
             *  @default 0
             *  @dtopt Options
             * 
             *  @example
             *    $(document).ready( function() {
             *      $('#example').dataTable( {
             *        "iDisplayStart": 20
             *      } );
             *    } )
             */
            "iDisplayStart": 0,


            /**
             * The scroll gap is the amount of scrolling that is left to go before
             * DataTables will load the next 'page' of data automatically. You typically
             * want a gap which is big enough that the scrolling will be smooth for the
             * user, while not so large that it will load more data than need.
             *  @type int
             *  @default 100
             *  @dtopt Options
             * 
             *  @example
             *    $(document).ready( function() {
             *      $('#example').dataTable( {
             *        "bScrollInfinite": true,
             *        "bScrollCollapse": true,
             *        "sScrollY": "200px",
             *        "iScrollLoadGap": 50
             *      } );
             *    } );
             */
            "iScrollLoadGap": 100,


            /**
             * By default DataTables allows keyboard navigation of the table (sorting, paging,
             * and filtering) by adding a tabindex attribute to the required elements. This
             * allows you to tab through the controls and press the enter key to activate them.
             * The tabindex is default 0, meaning that the tab follows the flow of the document.
             * You can overrule this using this parameter if you wish. Use a value of -1 to
             * disable built-in keyboard navigation.
             *  @type int
             *  @default 0
             *  @dtopt Options
             * 
             *  @example
             *    $(document).ready( function() {
             *      $('#example').dataTable( {
             *        "iTabIndex": 1
             *      } );
             *    } );
             */
            "iTabIndex": 0,


            /**
             * All strings that DataTables uses in the user interface that it creates
             * are defined in this object, allowing you to modified them individually or
             * completely replace them all as required.
             *  @namespace
             */
            "oLanguage": {
                /**
                 * Strings that are used for WAI-ARIA labels and controls only (these are not
                 * actually visible on the page, but will be read by screenreaders, and thus
                 * must be internationalised as well).
                 *  @namespace
                 */
                "oAria": {
                    /**
                     * ARIA label that is added to the table headers when the column may be
                     * sorted ascending by activing the column (click or return when focused).
                     * Note that the column header is prefixed to this string.
                     *  @type string
                     *  @default : activate to sort column ascending
                     *  @dtopt Language
                     * 
                     *  @example
                     *    $(document).ready( function() {
                     *      $('#example').dataTable( {
                     *        "oLanguage": {
                     *          "oAria": {
                     *            "sSortAscending": " - click/return to sort ascending"
                     *          }
                     *        }
                     *      } );
                     *    } );
                     */
                    "sSortAscending": ": activate to sort column ascending",

                    /**
                     * ARIA label that is added to the table headers when the column may be
                     * sorted descending by activing the column (click or return when focused).
                     * Note that the column header is prefixed to this string.
                     *  @type string
                     *  @default : activate to sort column ascending
                     *  @dtopt Language
                     * 
                     *  @example
                     *    $(document).ready( function() {
                     *      $('#example').dataTable( {
                     *        "oLanguage": {
                     *          "oAria": {
                     *            "sSortDescending": " - click/return to sort descending"
                     *          }
                     *        }
                     *      } );
                     *    } );
                     */
                    "sSortDescending": ": activate to sort column descending"
                },

                /**
                 * Pagination string used by DataTables for the two built-in pagination
                 * control types ("two_button" and "full_numbers")
                 *  @namespace
                 */
                "oPaginate": {
                    /**
                     * Text to use when using the 'full_numbers' type of pagination for the
                     * button to take the user to the first page.
                     *  @type string
                     *  @default First
                     *  @dtopt Language
                     * 
                     *  @example
                     *    $(document).ready( function() {
                     *      $('#example').dataTable( {
                     *        "oLanguage": {
                     *          "oPaginate": {
                     *            "sFirst": "First page"
                     *          }
                     *        }
                     *      } );
                     *    } );
                     */
                    "sFirst": "First",


                    /**
                     * Text to use when using the 'full_numbers' type of pagination for the
                     * button to take the user to the last page.
                     *  @type string
                     *  @default Last
                     *  @dtopt Language
                     * 
                     *  @example
                     *    $(document).ready( function() {
                     *      $('#example').dataTable( {
                     *        "oLanguage": {
                     *          "oPaginate": {
                     *            "sLast": "Last page"
                     *          }
                     *        }
                     *      } );
                     *    } );
                     */
                    "sLast": "Last",


                    /**
                     * Text to use for the 'next' pagination button (to take the user to the 
                     * next page).
                     *  @type string
                     *  @default Next
                     *  @dtopt Language
                     * 
                     *  @example
                     *    $(document).ready( function() {
                     *      $('#example').dataTable( {
                     *        "oLanguage": {
                     *          "oPaginate": {
                     *            "sNext": "Next page"
                     *          }
                     *        }
                     *      } );
                     *    } );
                     */
                    "sNext": "Next",


                    /**
                     * Text to use for the 'previous' pagination button (to take the user to  
                     * the previous page).
                     *  @type string
                     *  @default Previous
                     *  @dtopt Language
                     * 
                     *  @example
                     *    $(document).ready( function() {
                     *      $('#example').dataTable( {
                     *        "oLanguage": {
                     *          "oPaginate": {
                     *            "sPrevious": "Previous page"
                     *          }
                     *        }
                     *      } );
                     *    } );
                     */
                    "sPrevious": "Previous"
                },

                /**
                 * This string is shown in preference to sZeroRecords when the table is
                 * empty of data (regardless of filtering). Note that this is an optional
                 * parameter - if it is not given, the value of sZeroRecords will be used
                 * instead (either the default or given value).
                 *  @type string
                 *  @default No data available in table
                 *  @dtopt Language
                 * 
                 *  @example
                 *    $(document).ready( function() {
                 *      $('#example').dataTable( {
                 *        "oLanguage": {
                 *          "sEmptyTable": "No data available in table"
                 *        }
                 *      } );
                 *    } );
                 */
                "sEmptyTable": "No data available in table",


                /**
                 * This string gives information to the end user about the information that 
                 * is current on display on the page. The _START_, _END_ and _TOTAL_ 
                 * variables are all dynamically replaced as the table display updates, and 
                 * can be freely moved or removed as the language requirements change.
                 *  @type string
                 *  @default Showing _START_ to _END_ of _TOTAL_ entries
                 *  @dtopt Language
                 * 
                 *  @example
                 *    $(document).ready( function() {
                 *      $('#example').dataTable( {
                 *        "oLanguage": {
                 *          "sInfo": "Got a total of _TOTAL_ entries to show (_START_ to _END_)"
                 *        }
                 *      } );
                 *    } );
                 */
                "sInfo": "Showing _START_ to _END_ of _TOTAL_ entries",


                /**
                 * Display information string for when the table is empty. Typically the 
                 * format of this string should match sInfo.
                 *  @type string
                 *  @default Showing 0 to 0 of 0 entries
                 *  @dtopt Language
                 * 
                 *  @example
                 *    $(document).ready( function() {
                 *      $('#example').dataTable( {
                 *        "oLanguage": {
                 *          "sInfoEmpty": "No entries to show"
                 *        }
                 *      } );
                 *    } );
                 */
                "sInfoEmpty": "Showing 0 to 0 of 0 entries",


                /**
                 * When a user filters the information in a table, this string is appended 
                 * to the information (sInfo) to give an idea of how strong the filtering 
                 * is. The variable _MAX_ is dynamically updated.
                 *  @type string
                 *  @default (filtered from _MAX_ total entries)
                 *  @dtopt Language
                 * 
                 *  @example
                 *    $(document).ready( function() {
                 *      $('#example').dataTable( {
                 *        "oLanguage": {
                 *          "sInfoFiltered": " - filtering from _MAX_ records"
                 *        }
                 *      } );
                 *    } );
                 */
                "sInfoFiltered": "(filtered from _MAX_ total entries)",


                /**
                 * If can be useful to append extra information to the info string at times,
                 * and this variable does exactly that. This information will be appended to
                 * the sInfo (sInfoEmpty and sInfoFiltered in whatever combination they are
                 * being used) at all times.
                 *  @type string
                 *  @default <i>Empty string</i>
                 *  @dtopt Language
                 * 
                 *  @example
                 *    $(document).ready( function() {
                 *      $('#example').dataTable( {
                 *        "oLanguage": {
                 *          "sInfoPostFix": "All records shown are derived from real information."
                 *        }
                 *      } );
                 *    } );
                 */
                "sInfoPostFix": "",


                /**
                 * DataTables has a build in number formatter (fnFormatNumber) which is used
                 * to format large numbers that are used in the table information. By
                 * default a comma is used, but this can be trivially changed to any
                 * character you wish with this parameter.
                 *  @type string
                 *  @default ,
                 *  @dtopt Language
                 * 
                 *  @example
                 *    $(document).ready( function() {
                 *      $('#example').dataTable( {
                 *        "oLanguage": {
                 *          "sInfoThousands": "'"
                 *        }
                 *      } );
                 *    } );
                 */
                "sInfoThousands": ",",


                /**
                 * Detail the action that will be taken when the drop down menu for the
                 * pagination length option is changed. The '_MENU_' variable is replaced
                 * with a default select list of 10, 25, 50 and 100, and can be replaced
                 * with a custom select box if required.
                 *  @type string
                 *  @default Show _MENU_ entries
                 *  @dtopt Language
                 * 
                 *  @example
                 *    // Language change only
                 *    $(document).ready( function() {
                 *      $('#example').dataTable( {
                 *        "oLanguage": {
                 *          "sLengthMenu": "Display _MENU_ records"
                 *        }
                 *      } );
                 *    } );
                 *    
                 *  @example
                 *    // Language and options change
                 *    $(document).ready( function() {
                 *      $('#example').dataTable( {
                 *        "oLanguage": {
                 *          "sLengthMenu": 'Display <select>'+
                 *            '<option value="10">10</option>'+
                 *            '<option value="20">20</option>'+
                 *            '<option value="30">30</option>'+
                 *            '<option value="40">40</option>'+
                 *            '<option value="50">50</option>'+
                 *            '<option value="-1">All</option>'+
                 *            '</select> records'
                 *        }
                 *      } );
                 *    } );
                 */
                "sLengthMenu": "Show _MENU_ entries",


                /**
                 * When using Ajax sourced data and during the first draw when DataTables is
                 * gathering the data, this message is shown in an empty row in the table to
                 * indicate to the end user the the data is being loaded. Note that this
                 * parameter is not used when loading data by server-side processing, just
                 * Ajax sourced data with client-side processing.
                 *  @type string
                 *  @default Loading...
                 *  @dtopt Language
                 * 
                 *  @example
                 *    $(document).ready( function() {
                 *      $('#example').dataTable( {
                 *        "oLanguage": {
                 *          "sLoadingRecords": "Please wait - loading..."
                 *        }
                 *      } );
                 *    } );
                 */
                "sLoadingRecords": "Loading...",


                /**
                 * Text which is displayed when the table is processing a user action
                 * (usually a sort command or similar).
                 *  @type string
                 *  @default Processing...
                 *  @dtopt Language
                 * 
                 *  @example
                 *    $(document).ready( function() {
                 *      $('#example').dataTable( {
                 *        "oLanguage": {
                 *          "sProcessing": "DataTables is currently busy"
                 *        }
                 *      } );
                 *    } );
                 */
                "sProcessing": "Processing...",


                /**
                 * Details the actions that will be taken when the user types into the
                 * filtering input text box. The variable "_INPUT_", if used in the string,
                 * is replaced with the HTML text box for the filtering input allowing
                 * control over where it appears in the string. If "_INPUT_" is not given
                 * then the input box is appended to the string automatically.
                 *  @type string
                 *  @default Search:
                 *  @dtopt Language
                 * 
                 *  @example
                 *    // Input text box will be appended at the end automatically
                 *    $(document).ready( function() {
                 *      $('#example').dataTable( {
                 *        "oLanguage": {
                 *          "sSearch": "Filter records:"
                 *        }
                 *      } );
                 *    } );
                 *    
                 *  @example
                 *    // Specify where the filter should appear
                 *    $(document).ready( function() {
                 *      $('#example').dataTable( {
                 *        "oLanguage": {
                 *          "sSearch": "Apply filter _INPUT_ to table"
                 *        }
                 *      } );
                 *    } );
                 */
                "sSearch": "Search:",


                /**
                 * All of the language information can be stored in a file on the
                 * server-side, which DataTables will look up if this parameter is passed.
                 * It must store the URL of the language file, which is in a JSON format,
                 * and the object has the same properties as the oLanguage object in the
                 * initialiser object (i.e. the above parameters). Please refer to one of
                 * the example language files to see how this works in action.
                 *  @type string
                 *  @default <i>Empty string - i.e. disabled</i>
                 *  @dtopt Language
                 * 
                 *  @example
                 *    $(document).ready( function() {
                 *      $('#example').dataTable( {
                 *        "oLanguage": {
                 *          "sUrl": "http://www.sprymedia.co.uk/dataTables/lang.txt"
                 *        }
                 *      } );
                 *    } );
                 */
                "sUrl": "",


                /**
                 * Text shown inside the table records when the is no information to be
                 * displayed after filtering. sEmptyTable is shown when there is simply no
                 * information in the table at all (regardless of filtering).
                 *  @type string
                 *  @default No matching records found
                 *  @dtopt Language
                 * 
                 *  @example
                 *    $(document).ready( function() {
                 *      $('#example').dataTable( {
                 *        "oLanguage": {
                 *          "sZeroRecords": "No records to display"
                 *        }
                 *      } );
                 *    } );
                 */
                "sZeroRecords": "No matching records found"
            },


            /**
             * This parameter allows you to have define the global filtering state at
             * initialisation time. As an object the "sSearch" parameter must be
             * defined, but all other parameters are optional. When "bRegex" is true,
             * the search string will be treated as a regular expression, when false
             * (default) it will be treated as a straight string. When "bSmart"
             * DataTables will use it's smart filtering methods (to word match at
             * any point in the data), when false this will not be done.
             *  @namespace
             *  @extends DataTable.models.oSearch
             *  @dtopt Options
             * 
             *  @example
             *    $(document).ready( function() {
             *      $('#example').dataTable( {
             *        "oSearch": {"sSearch": "Initial search"}
             *      } );
             *    } )
             */
            "oSearch": $.extend({}, DataTable.models.oSearch),


            /**
             * By default DataTables will look for the property 'aaData' when obtaining
             * data from an Ajax source or for server-side processing - this parameter
             * allows that property to be changed. You can use Javascript dotted object
             * notation to get a data source for multiple levels of nesting.
             *  @type string
             *  @default aaData
             *  @dtopt Options
             *  @dtopt Server-side
             * 
             *  @example
             *    // Get data from { "data": [...] }
             *    $(document).ready( function() {
             *      var oTable = $('#example').dataTable( {
             *        "sAjaxSource": "sources/data.txt",
             *        "sAjaxDataProp": "data"
             *      } );
             *    } );
             *    
             *  @example
             *    // Get data from { "data": { "inner": [...] } }
             *    $(document).ready( function() {
             *      var oTable = $('#example').dataTable( {
             *        "sAjaxSource": "sources/data.txt",
             *        "sAjaxDataProp": "data.inner"
             *      } );
             *    } );
             */
            "sAjaxDataProp": "aaData",


            /**
             * You can instruct DataTables to load data from an external source using this
             * parameter (use aData if you want to pass data in you already have). Simply
             * provide a url a JSON object can be obtained from. This object must include
             * the parameter 'aaData' which is the data source for the table.
             *  @type string
             *  @default null
             *  @dtopt Options
             *  @dtopt Server-side
             * 
             *  @example
             *    $(document).ready( function() {
             *      $('#example').dataTable( {
             *        "sAjaxSource": "http://www.sprymedia.co.uk/dataTables/json.php"
             *      } );
             *    } )
             */
            "sAjaxSource": null,


            /**
             * This parameter can be used to override the default prefix that DataTables
             * assigns to a cookie when state saving is enabled.
             *  @type string
             *  @default SpryMedia_DataTables_
             *  @dtopt Options
             * 
             *  @example
             *    $(document).ready( function() {
             *      $('#example').dataTable( {
             *        "sCookiePrefix": "my_datatable_",
             *      } );
             *    } );
             */
            "sCookiePrefix": "SpryMedia_DataTables_",


            /**
             * This initialisation variable allows you to specify exactly where in the
             * DOM you want DataTables to inject the various controls it adds to the page
             * (for example you might want the pagination controls at the top of the
             * table). DIV elements (with or without a custom class) can also be added to
             * aid styling. The follow syntax is used:
             *   <ul>
             *     <li>The following options are allowed:	
             *       <ul>
             *         <li>'l' - Length changing</li
             *         <li>'f' - Filtering input</li>
             *         <li>'t' - The table!</li>
             *         <li>'i' - Information</li>
             *         <li>'p' - Pagination</li>
             *         <li>'r' - pRocessing</li>
             *       </ul>
             *     </li>
             *     <li>The following constants are allowed:
             *       <ul>
             *         <li>'H' - jQueryUI theme "header" classes ('fg-toolbar ui-widget-header ui-corner-tl ui-corner-tr ui-helper-clearfix')</li>
             *         <li>'F' - jQueryUI theme "footer" classes ('fg-toolbar ui-widget-header ui-corner-bl ui-corner-br ui-helper-clearfix')</li>
             *       </ul>
             *     </li>
             *     <li>The following syntax is expected:
             *       <ul>
             *         <li>'&lt;' and '&gt;' - div elements</li>
             *         <li>'&lt;"class" and '&gt;' - div with a class</li>
             *         <li>'&lt;"#id" and '&gt;' - div with an ID</li>
             *       </ul>
             *     </li>
             *     <li>Examples:
             *       <ul>
             *         <li>'&lt;"wrapper"flipt&gt;'</li>
             *         <li>'&lt;lf&lt;t&gt;ip&gt;'</li>
             *       </ul>
             *     </li>
             *   </ul>
             *  @type string
             *  @default lfrtip <i>(when bJQueryUI is false)</i> <b>or</b> 
             *    <"H"lfr>t<"F"ip> <i>(when bJQueryUI is true)</i>
             *  @dtopt Options
             * 
             *  @example
             *    $(document).ready( function() {
             *      $('#example').dataTable( {
             *        "sDom": '&lt;"top"i&gt;rt&lt;"bottom"flp&gt;&lt;"clear"&gt;'
             *      } );
             *    } );
             */
            "sDom": "lfrtip",


            /**
             * DataTables features two different built-in pagination interaction methods
             * ('two_button' or 'full_numbers') which present different page controls to
             * the end user. Further methods can be added using the API (see below).
             *  @type string
             *  @default two_button
             *  @dtopt Options
             * 
             *  @example
             *    $(document).ready( function() {
             *      $('#example').dataTable( {
             *        "sPaginationType": "full_numbers"
             *      } );
             *    } )
             */
            "sPaginationType": "two_button",


            /**
             * Enable horizontal scrolling. When a table is too wide to fit into a certain
             * layout, or you have a large number of columns in the table, you can enable
             * x-scrolling to show the table in a viewport, which can be scrolled. This
             * property can be any CSS unit, or a number (in which case it will be treated
             * as a pixel measurement).
             *  @type string
             *  @default <i>blank string - i.e. disabled</i>
             *  @dtopt Features
             * 
             *  @example
             *    $(document).ready( function() {
             *      $('#example').dataTable( {
             *        "sScrollX": "100%",
             *        "bScrollCollapse": true
             *      } );
             *    } );
             */
            "sScrollX": "",


            /**
             * This property can be used to force a DataTable to use more width than it
             * might otherwise do when x-scrolling is enabled. For example if you have a
             * table which requires to be well spaced, this parameter is useful for
             * "over-sizing" the table, and thus forcing scrolling. This property can by
             * any CSS unit, or a number (in which case it will be treated as a pixel
             * measurement).
             *  @type string
             *  @default <i>blank string - i.e. disabled</i>
             *  @dtopt Options
             * 
             *  @example
             *    $(document).ready( function() {
             *      $('#example').dataTable( {
             *        "sScrollX": "100%",
             *        "sScrollXInner": "110%"
             *      } );
             *    } );
             */
            "sScrollXInner": "",


            /**
             * Enable vertical scrolling. Vertical scrolling will constrain the DataTable
             * to the given height, and enable scrolling for any data which overflows the
             * current viewport. This can be used as an alternative to paging to display
             * a lot of data in a small area (although paging and scrolling can both be
             * enabled at the same time). This property can be any CSS unit, or a number
             * (in which case it will be treated as a pixel measurement).
             *  @type string
             *  @default <i>blank string - i.e. disabled</i>
             *  @dtopt Features
             * 
             *  @example
             *    $(document).ready( function() {
             *      $('#example').dataTable( {
             *        "sScrollY": "200px",
             *        "bPaginate": false
             *      } );
             *    } );
             */
            "sScrollY": "",


            /**
             * Set the HTTP method that is used to make the Ajax call for server-side
             * processing or Ajax sourced data.
             *  @type string
             *  @default GET
             *  @dtopt Options
             *  @dtopt Server-side
             * 
             *  @example
             *    $(document).ready( function() {
             *      $('#example').dataTable( {
             *        "bServerSide": true,
             *        "sAjaxSource": "scripts/post.php",
             *        "sServerMethod": "POST"
             *      } );
             *    } );
             */
            "sServerMethod": "GET"
        };



        /**
         * Column options that can be given to DataTables at initialisation time.
         *  @namespace
         */
        DataTable.defaults.columns = {
            /**
             * Allows a column's sorting to take multiple columns into account when 
             * doing a sort. For example first name / last name columns make sense to 
             * do a multi-column sort over the two columns.
             *  @type array
             *  @default null <i>Takes the value of the column index automatically</i>
             *  @dtopt Columns
             * 
             *  @example
             *    // Using aoColumnDefs
             *    $(document).ready( function() {
             *      $('#example').dataTable( {
             *        "aoColumnDefs": [
             *          { "aDataSort": [ 0, 1 ], "aTargets": [ 0 ] },
             *          { "aDataSort": [ 1, 0 ], "aTargets": [ 1 ] },
             *          { "aDataSort": [ 2, 3, 4 ], "aTargets": [ 2 ] }
             *        ]
             *      } );
             *    } );
             *    
             *  @example
             *    // Using aoColumns
             *    $(document).ready( function() {
             *      $('#example').dataTable( {
             *        "aoColumns": [
             *          { "aDataSort": [ 0, 1 ] },
             *          { "aDataSort": [ 1, 0 ] },
             *          { "aDataSort": [ 2, 3, 4 ] },
             *          null,
             *          null
             *        ]
             *      } );
             *    } );
             */
            "aDataSort": null,


            /**
             * You can control the default sorting direction, and even alter the behaviour
             * of the sort handler (i.e. only allow ascending sorting etc) using this
             * parameter.
             *  @type array
             *  @default [ 'asc', 'desc' ]
             *  @dtopt Columns
             * 
             *  @example
             *    // Using aoColumnDefs
             *    $(document).ready( function() {
             *      $('#example').dataTable( {
             *        "aoColumnDefs": [
             *          { "asSorting": [ "asc" ], "aTargets": [ 1 ] },
             *          { "asSorting": [ "desc", "asc", "asc" ], "aTargets": [ 2 ] },
             *          { "asSorting": [ "desc" ], "aTargets": [ 3 ] }
             *        ]
             *      } );
             *    } );
             *    
             *  @example
             *    // Using aoColumns
             *    $(document).ready( function() {
             *      $('#example').dataTable( {
             *        "aoColumns": [
             *          null,
             *          { "asSorting": [ "asc" ] },
             *          { "asSorting": [ "desc", "asc", "asc" ] },
             *          { "asSorting": [ "desc" ] },
             *          null
             *        ]
             *      } );
             *    } );
             */
            "asSorting": ['asc', 'desc'],


            /**
             * Enable or disable filtering on the data in this column.
             *  @type boolean
             *  @default true
             *  @dtopt Columns
             * 
             *  @example
             *    // Using aoColumnDefs
             *    $(document).ready( function() {
             *      $('#example').dataTable( {
             *        "aoColumnDefs": [ 
             *          { "bSearchable": false, "aTargets": [ 0 ] }
             *        ] } );
             *    } );
             *    
             *  @example
             *    // Using aoColumns
             *    $(document).ready( function() {
             *      $('#example').dataTable( {
             *        "aoColumns": [ 
             *          { "bSearchable": false },
             *          null,
             *          null,
             *          null,
             *          null
             *        ] } );
             *    } );
             */
            "bSearchable": true,


            /**
             * Enable or disable sorting on this column.
             *  @type boolean
             *  @default true
             *  @dtopt Columns
             * 
             *  @example
             *    // Using aoColumnDefs
             *    $(document).ready( function() {
             *      $('#example').dataTable( {
             *        "aoColumnDefs": [ 
             *          { "bSortable": false, "aTargets": [ 0 ] }
             *        ] } );
             *    } );
             *    
             *  @example
             *    // Using aoColumns
             *    $(document).ready( function() {
             *      $('#example').dataTable( {
             *        "aoColumns": [ 
             *          { "bSortable": false },
             *          null,
             *          null,
             *          null,
             *          null
             *        ] } );
             *    } );
             */
            "bSortable": true,


            /**
             * <code>Deprecated</code> When using fnRender() for a column, you may wish 
             * to use the original data (before rendering) for sorting and filtering 
             * (the default is to used the rendered data that the user can see). This 
             * may be useful for dates etc.
             * 
             * Please note that this option has now been deprecated and will be removed
             * in the next version of DataTables. Please use mRender / mData rather than
             * fnRender.
             *  @type boolean
             *  @default true
             *  @dtopt Columns
             *  @deprecated
             */
            "bUseRendered": true,


            /**
             * Enable or disable the display of this column.
             *  @type boolean
             *  @default true
             *  @dtopt Columns
             * 
             *  @example
             *    // Using aoColumnDefs
             *    $(document).ready( function() {
             *      $('#example').dataTable( {
             *        "aoColumnDefs": [ 
             *          { "bVisible": false, "aTargets": [ 0 ] }
             *        ] } );
             *    } );
             *    
             *  @example
             *    // Using aoColumns
             *    $(document).ready( function() {
             *      $('#example').dataTable( {
             *        "aoColumns": [ 
             *          { "bVisible": false },
             *          null,
             *          null,
             *          null,
             *          null
             *        ] } );
             *    } );
             */
            "bVisible": true,


            /**
             * Developer definable function that is called whenever a cell is created (Ajax source,
             * etc) or processed for input (DOM source). This can be used as a compliment to mRender
             * allowing you to modify the DOM element (add background colour for example) when the
             * element is available.
             *  @type function
             *  @param {element} nTd The TD node that has been created
             *  @param {*} sData The Data for the cell
             *  @param {array|object} oData The data for the whole row
             *  @param {int} iRow The row index for the aoData data store
             *  @param {int} iCol The column index for aoColumns
             *  @dtopt Columns
             * 
             *  @example
             *    $(document).ready( function() {
             *      $('#example').dataTable( {
             *        "aoColumnDefs": [ {
             *          "aTargets": [3],
             *          "fnCreatedCell": function (nTd, sData, oData, iRow, iCol) {
             *            if ( sData == "1.7" ) {
             *              $(nTd).css('color', 'blue')
             *            }
             *          }
             *        } ]
             *      });
             *    } );
             */
            "fnCreatedCell": null,


            /**
             * <code>Deprecated</code> Custom display function that will be called for the 
             * display of each cell in this column.
             *
             * Please note that this option has now been deprecated and will be removed
             * in the next version of DataTables. Please use mRender / mData rather than
             * fnRender.
             *  @type function
             *  @param {object} o Object with the following parameters:
             *  @param {int}    o.iDataRow The row in aoData
             *  @param {int}    o.iDataColumn The column in question
             *  @param {array}  o.aData The data for the row in question
             *  @param {object} o.oSettings The settings object for this DataTables instance
             *  @param {object} o.mDataProp The data property used for this column
             *  @param {*}      val The current cell value
             *  @returns {string} The string you which to use in the display
             *  @dtopt Columns
             *  @deprecated
             */
            "fnRender": null,


            /**
             * The column index (starting from 0!) that you wish a sort to be performed
             * upon when this column is selected for sorting. This can be used for sorting
             * on hidden columns for example.
             *  @type int
             *  @default -1 <i>Use automatically calculated column index</i>
             *  @dtopt Columns
             * 
             *  @example
             *    // Using aoColumnDefs
             *    $(document).ready( function() {
             *      $('#example').dataTable( {
             *        "aoColumnDefs": [ 
             *          { "iDataSort": 1, "aTargets": [ 0 ] }
             *        ]
             *      } );
             *    } );
             *    
             *  @example
             *    // Using aoColumns
             *    $(document).ready( function() {
             *      $('#example').dataTable( {
             *        "aoColumns": [ 
             *          { "iDataSort": 1 },
             *          null,
             *          null,
             *          null,
             *          null
             *        ]
             *      } );
             *    } );
             */
            "iDataSort": -1,


            /**
             * This parameter has been replaced by mData in DataTables to ensure naming
             * consistency. mDataProp can still be used, as there is backwards compatibility
             * in DataTables for this option, but it is strongly recommended that you use
             * mData in preference to mDataProp.
             *  @name DataTable.defaults.columns.mDataProp
             */


            /**
             * This property can be used to read data from any JSON data source property,
             * including deeply nested objects / properties. mData can be given in a
             * number of different ways which effect its behaviour:
             *   <ul>
             *     <li>integer - treated as an array index for the data source. This is the
             *       default that DataTables uses (incrementally increased for each column).</li>
             *     <li>string - read an object property from the data source. Note that you can
             *       use Javascript dotted notation to read deep properties / arrays from the
             *       data source.</li>
             *     <li>null - the sDefaultContent option will be used for the cell (null
             *       by default, so you will need to specify the default content you want -
             *       typically an empty string). This can be useful on generated columns such 
             *       as edit / delete action columns.</li>
             *     <li>function - the function given will be executed whenever DataTables 
             *       needs to set or get the data for a cell in the column. The function 
             *       takes three parameters:
             *       <ul>
             *         <li>{array|object} The data source for the row</li>
             *         <li>{string} The type call data requested - this will be 'set' when
             *           setting data or 'filter', 'display', 'type', 'sort' or undefined when 
             *           gathering data. Note that when <i>undefined</i> is given for the type
             *           DataTables expects to get the raw data for the object back</li>
             *         <li>{*} Data to set when the second parameter is 'set'.</li>
             *       </ul>
             *       The return value from the function is not required when 'set' is the type
             *       of call, but otherwise the return is what will be used for the data
             *       requested.</li>
             *    </ul>
             *
             * Note that prior to DataTables 1.9.2 mData was called mDataProp. The name change
             * reflects the flexibility of this property and is consistent with the naming of
             * mRender. If 'mDataProp' is given, then it will still be used by DataTables, as
             * it automatically maps the old name to the new if required.
             *  @type string|int|function|null
             *  @default null <i>Use automatically calculated column index</i>
             *  @dtopt Columns
             * 
             *  @example
             *    // Read table data from objects
             *    $(document).ready( function() {
             *      var oTable = $('#example').dataTable( {
             *        "sAjaxSource": "sources/deep.txt",
             *        "aoColumns": [
             *          { "mData": "engine" },
             *          { "mData": "browser" },
             *          { "mData": "platform.inner" },
             *          { "mData": "platform.details.0" },
             *          { "mData": "platform.details.1" }
             *        ]
             *      } );
             *    } );
             * 
             *  @example
             *    // Using mData as a function to provide different information for
             *    // sorting, filtering and display. In this case, currency (price)
             *    $(document).ready( function() {
             *      var oTable = $('#example').dataTable( {
             *        "aoColumnDefs": [ {
             *          "aTargets": [ 0 ],
             *          "mData": function ( source, type, val ) {
             *            if (type === 'set') {
             *              source.price = val;
             *              // Store the computed dislay and filter values for efficiency
             *              source.price_display = val=="" ? "" : "$"+numberFormat(val);
             *              source.price_filter  = val=="" ? "" : "$"+numberFormat(val)+" "+val;
             *              return;
             *            }
             *            else if (type === 'display') {
             *              return source.price_display;
             *            }
             *            else if (type === 'filter') {
             *              return source.price_filter;
             *            }
             *            // 'sort', 'type' and undefined all just use the integer
             *            return source.price;
             *          }
             *        } ]
             *      } );
             *    } );
             */
            "mData": null,


            /**
             * This property is the rendering partner to mData and it is suggested that
             * when you want to manipulate data for display (including filtering, sorting etc)
             * but not altering the underlying data for the table, use this property. mData
             * can actually do everything this property can and more, but this parameter is
             * easier to use since there is no 'set' option. Like mData is can be given
             * in a number of different ways to effect its behaviour, with the addition of 
             * supporting array syntax for easy outputting of arrays (including arrays of
             * objects):
             *   <ul>
             *     <li>integer - treated as an array index for the data source. This is the
             *       default that DataTables uses (incrementally increased for each column).</li>
             *     <li>string - read an object property from the data source. Note that you can
             *       use Javascript dotted notation to read deep properties / arrays from the
             *       data source and also array brackets to indicate that the data reader should
             *       loop over the data source array. When characters are given between the array
             *       brackets, these characters are used to join the data source array together.
             *       For example: "accounts[, ].name" would result in a comma separated list with
             *       the 'name' value from the 'accounts' array of objects.</li>
             *     <li>function - the function given will be executed whenever DataTables 
             *       needs to set or get the data for a cell in the column. The function 
             *       takes three parameters:
             *       <ul>
             *         <li>{array|object} The data source for the row (based on mData)</li>
             *         <li>{string} The type call data requested - this will be 'filter', 'display', 
             *           'type' or 'sort'.</li>
             *         <li>{array|object} The full data source for the row (not based on mData)</li>
             *       </ul>
             *       The return value from the function is what will be used for the data
             *       requested.</li>
             *    </ul>
             *  @type string|int|function|null
             *  @default null <i>Use mData</i>
             *  @dtopt Columns
             * 
             *  @example
             *    // Create a comma separated list from an array of objects
             *    $(document).ready( function() {
             *      var oTable = $('#example').dataTable( {
             *        "sAjaxSource": "sources/deep.txt",
             *        "aoColumns": [
             *          { "mData": "engine" },
             *          { "mData": "browser" },
             *          {
             *            "mData": "platform",
             *            "mRender": "[, ].name"
             *          }
             *        ]
             *      } );
             *    } );
             * 
             *  @example
             *    // Use as a function to create a link from the data source
             *    $(document).ready( function() {
             *      var oTable = $('#example').dataTable( {
             *        "aoColumnDefs": [
             *        {
             *          "aTargets": [ 0 ],
             *          "mData": "download_link",
             *          "mRender": function ( data, type, full ) {
             *            return '<a href="'+data+'">Download</a>';
             *          }
             *        ]
             *      } );
             *    } );
             */
            "mRender": null,


            /**
             * Change the cell type created for the column - either TD cells or TH cells. This
             * can be useful as TH cells have semantic meaning in the table body, allowing them
             * to act as a header for a row (you may wish to add scope='row' to the TH elements).
             *  @type string
             *  @default td
             *  @dtopt Columns
             * 
             *  @example
             *    // Make the first column use TH cells
             *    $(document).ready( function() {
             *      var oTable = $('#example').dataTable( {
             *        "aoColumnDefs": [ {
             *          "aTargets": [ 0 ],
             *          "sCellType": "th"
             *        } ]
             *      } );
             *    } );
             */
            "sCellType": "td",


            /**
             * Class to give to each cell in this column.
             *  @type string
             *  @default <i>Empty string</i>
             *  @dtopt Columns
             * 
             *  @example
             *    // Using aoColumnDefs
             *    $(document).ready( function() {
             *      $('#example').dataTable( {
             *        "aoColumnDefs": [ 
             *          { "sClass": "my_class", "aTargets": [ 0 ] }
             *        ]
             *      } );
             *    } );
             *    
             *  @example
             *    // Using aoColumns
             *    $(document).ready( function() {
             *      $('#example').dataTable( {
             *        "aoColumns": [ 
             *          { "sClass": "my_class" },
             *          null,
             *          null,
             *          null,
             *          null
             *        ]
             *      } );
             *    } );
             */
            "sClass": "",

            /**
             * When DataTables calculates the column widths to assign to each column,
             * it finds the longest string in each column and then constructs a
             * temporary table and reads the widths from that. The problem with this
             * is that "mmm" is much wider then "iiii", but the latter is a longer 
             * string - thus the calculation can go wrong (doing it properly and putting
             * it into an DOM object and measuring that is horribly(!) slow). Thus as
             * a "work around" we provide this option. It will append its value to the
             * text that is found to be the longest string for the column - i.e. padding.
             * Generally you shouldn't need this, and it is not documented on the 
             * general DataTables.net documentation
             *  @type string
             *  @default <i>Empty string<i>
             *  @dtopt Columns
             *    
             *  @example
             *    // Using aoColumns
             *    $(document).ready( function() {
             *      $('#example').dataTable( {
             *        "aoColumns": [ 
             *          null,
             *          null,
             *          null,
             *          {
             *            "sContentPadding": "mmm"
             *          }
             *        ]
             *      } );
             *    } );
             */
            "sContentPadding": "",


            /**
             * Allows a default value to be given for a column's data, and will be used
             * whenever a null data source is encountered (this can be because mData
             * is set to null, or because the data source itself is null).
             *  @type string
             *  @default null
             *  @dtopt Columns
             * 
             *  @example
             *    // Using aoColumnDefs
             *    $(document).ready( function() {
             *      $('#example').dataTable( {
             *        "aoColumnDefs": [ 
             *          {
             *            "mData": null,
             *            "sDefaultContent": "Edit",
             *            "aTargets": [ -1 ]
             *          }
             *        ]
             *      } );
             *    } );
             *    
             *  @example
             *    // Using aoColumns
             *    $(document).ready( function() {
             *      $('#example').dataTable( {
             *        "aoColumns": [ 
             *          null,
             *          null,
             *          null,
             *          {
             *            "mData": null,
             *            "sDefaultContent": "Edit"
             *          }
             *        ]
             *      } );
             *    } );
             */
            "sDefaultContent": null,


            /**
             * This parameter is only used in DataTables' server-side processing. It can
             * be exceptionally useful to know what columns are being displayed on the
             * client side, and to map these to database fields. When defined, the names
             * also allow DataTables to reorder information from the server if it comes
             * back in an unexpected order (i.e. if you switch your columns around on the
             * client-side, your server-side code does not also need updating).
             *  @type string
             *  @default <i>Empty string</i>
             *  @dtopt Columns
             * 
             *  @example
             *    // Using aoColumnDefs
             *    $(document).ready( function() {
             *      $('#example').dataTable( {
             *        "aoColumnDefs": [ 
             *          { "sName": "engine", "aTargets": [ 0 ] },
             *          { "sName": "browser", "aTargets": [ 1 ] },
             *          { "sName": "platform", "aTargets": [ 2 ] },
             *          { "sName": "version", "aTargets": [ 3 ] },
             *          { "sName": "grade", "aTargets": [ 4 ] }
             *        ]
             *      } );
             *    } );
             *    
             *  @example
             *    // Using aoColumns
             *    $(document).ready( function() {
             *      $('#example').dataTable( {
             *        "aoColumns": [ 
             *          { "sName": "engine" },
             *          { "sName": "browser" },
             *          { "sName": "platform" },
             *          { "sName": "version" },
             *          { "sName": "grade" }
             *        ]
             *      } );
             *    } );
             */
            "sName": "",


            /**
             * Defines a data source type for the sorting which can be used to read
             * real-time information from the table (updating the internally cached
             * version) prior to sorting. This allows sorting to occur on user editable
             * elements such as form inputs.
             *  @type string
             *  @default std
             *  @dtopt Columns
             * 
             *  @example
             *    // Using aoColumnDefs
             *    $(document).ready( function() {
             *      $('#example').dataTable( {
             *        "aoColumnDefs": [
             *          { "sSortDataType": "dom-text", "aTargets": [ 2, 3 ] },
             *          { "sType": "numeric", "aTargets": [ 3 ] },
             *          { "sSortDataType": "dom-select", "aTargets": [ 4 ] },
             *          { "sSortDataType": "dom-checkbox", "aTargets": [ 5 ] }
             *        ]
             *      } );
             *    } );
             *    
             *  @example
             *    // Using aoColumns
             *    $(document).ready( function() {
             *      $('#example').dataTable( {
             *        "aoColumns": [
             *          null,
             *          null,
             *          { "sSortDataType": "dom-text" },
             *          { "sSortDataType": "dom-text", "sType": "numeric" },
             *          { "sSortDataType": "dom-select" },
             *          { "sSortDataType": "dom-checkbox" }
             *        ]
             *      } );
             *    } );
             */
            "sSortDataType": "std",


            /**
             * The title of this column.
             *  @type string
             *  @default null <i>Derived from the 'TH' value for this column in the 
             *    original HTML table.</i>
             *  @dtopt Columns
             * 
             *  @example
             *    // Using aoColumnDefs
             *    $(document).ready( function() {
             *      $('#example').dataTable( {
             *        "aoColumnDefs": [ 
             *          { "sTitle": "My column title", "aTargets": [ 0 ] }
             *        ]
             *      } );
             *    } );
             *    
             *  @example
             *    // Using aoColumns
             *    $(document).ready( function() {
             *      $('#example').dataTable( {
             *        "aoColumns": [ 
             *          { "sTitle": "My column title" },
             *          null,
             *          null,
             *          null,
             *          null
             *        ]
             *      } );
             *    } );
             */
            "sTitle": null,


            /**
             * The type allows you to specify how the data for this column will be sorted.
             * Four types (string, numeric, date and html (which will strip HTML tags
             * before sorting)) are currently available. Note that only date formats
             * understood by Javascript's Date() object will be accepted as type date. For
             * example: "Mar 26, 2008 5:03 PM". May take the values: 'string', 'numeric',
             * 'date' or 'html' (by default). Further types can be adding through
             * plug-ins.
             *  @type string
             *  @default null <i>Auto-detected from raw data</i>
             *  @dtopt Columns
             * 
             *  @example
             *    // Using aoColumnDefs
             *    $(document).ready( function() {
             *      $('#example').dataTable( {
             *        "aoColumnDefs": [ 
             *          { "sType": "html", "aTargets": [ 0 ] }
             *        ]
             *      } );
             *    } );
             *    
             *  @example
             *    // Using aoColumns
             *    $(document).ready( function() {
             *      $('#example').dataTable( {
             *        "aoColumns": [ 
             *          { "sType": "html" },
             *          null,
             *          null,
             *          null,
             *          null
             *        ]
             *      } );
             *    } );
             */
            "sType": null,


            /**
             * Defining the width of the column, this parameter may take any CSS value
             * (3em, 20px etc). DataTables apples 'smart' widths to columns which have not
             * been given a specific width through this interface ensuring that the table
             * remains readable.
             *  @type string
             *  @default null <i>Automatic</i>
             *  @dtopt Columns
             * 
             *  @example
             *    // Using aoColumnDefs
             *    $(document).ready( function() {
             *      $('#example').dataTable( {
             *        "aoColumnDefs": [ 
             *          { "sWidth": "20%", "aTargets": [ 0 ] }
             *        ]
             *      } );
             *    } );
             *    
             *  @example
             *    // Using aoColumns
             *    $(document).ready( function() {
             *      $('#example').dataTable( {
             *        "aoColumns": [ 
             *          { "sWidth": "20%" },
             *          null,
             *          null,
             *          null,
             *          null
             *        ]
             *      } );
             *    } );
             */
            "sWidth": null
        };



        /**
         * DataTables settings object - this holds all the information needed for a
         * given table, including configuration, data and current application of the
         * table options. DataTables does not have a single instance for each DataTable
         * with the settings attached to that instance, but rather instances of the
         * DataTable "class" are created on-the-fly as needed (typically by a 
         * $().dataTable() call) and the settings object is then applied to that
         * instance.
         * 
         * Note that this object is related to {@link DataTable.defaults} but this 
         * one is the internal data store for DataTables's cache of columns. It should
         * NOT be manipulated outside of DataTables. Any configuration should be done
         * through the initialisation options.
         *  @namespace
         *  @todo Really should attach the settings object to individual instances so we
         *    don't need to create new instances on each $().dataTable() call (if the
         *    table already exists). It would also save passing oSettings around and
         *    into every single function. However, this is a very significant 
         *    architecture change for DataTables and will almost certainly break
         *    backwards compatibility with older installations. This is something that
         *    will be done in 2.0.
         */
        DataTable.models.oSettings = {
            /**
             * Primary features of DataTables and their enablement state.
             *  @namespace
             */
            "oFeatures": {

                /**
                 * Flag to say if DataTables should automatically try to calculate the
                 * optimum table and columns widths (true) or not (false).
                 * Note that this parameter will be set by the initialisation routine. To
                 * set a default use {@link DataTable.defaults}.
                 *  @type boolean
                 */
                "bAutoWidth": null,

                /**
                 * Delay the creation of TR and TD elements until they are actually
                 * needed by a driven page draw. This can give a significant speed
                 * increase for Ajax source and Javascript source data, but makes no
                 * difference at all fro DOM and server-side processing tables.
                 * Note that this parameter will be set by the initialisation routine. To
                 * set a default use {@link DataTable.defaults}.
                 *  @type boolean
                 */
                "bDeferRender": null,

                /**
                 * Enable filtering on the table or not. Note that if this is disabled
                 * then there is no filtering at all on the table, including fnFilter.
                 * To just remove the filtering input use sDom and remove the 'f' option.
                 * Note that this parameter will be set by the initialisation routine. To
                 * set a default use {@link DataTable.defaults}.
                 *  @type boolean
                 */
                "bFilter": null,

                /**
                 * Table information element (the 'Showing x of y records' div) enable
                 * flag.
                 * Note that this parameter will be set by the initialisation routine. To
                 * set a default use {@link DataTable.defaults}.
                 *  @type boolean
                 */
                "bInfo": null,

                /**
                 * Present a user control allowing the end user to change the page size
                 * when pagination is enabled.
                 * Note that this parameter will be set by the initialisation routine. To
                 * set a default use {@link DataTable.defaults}.
                 *  @type boolean
                 */
                "bLengthChange": null,

                /**
                 * Pagination enabled or not. Note that if this is disabled then length
                 * changing must also be disabled.
                 * Note that this parameter will be set by the initialisation routine. To
                 * set a default use {@link DataTable.defaults}.
                 *  @type boolean
                 */
                "bPaginate": null,

                /**
                 * Processing indicator enable flag whenever DataTables is enacting a
                 * user request - typically an Ajax request for server-side processing.
                 * Note that this parameter will be set by the initialisation routine. To
                 * set a default use {@link DataTable.defaults}.
                 *  @type boolean
                 */
                "bProcessing": null,

                /**
                 * Server-side processing enabled flag - when enabled DataTables will
                 * get all data from the server for every draw - there is no filtering,
                 * sorting or paging done on the client-side.
                 * Note that this parameter will be set by the initialisation routine. To
                 * set a default use {@link DataTable.defaults}.
                 *  @type boolean
                 */
                "bServerSide": null,

                /**
                 * Sorting enablement flag.
                 * Note that this parameter will be set by the initialisation routine. To
                 * set a default use {@link DataTable.defaults}.
                 *  @type boolean
                 */
                "bSort": null,

                /**
                 * Apply a class to the columns which are being sorted to provide a
                 * visual highlight or not. This can slow things down when enabled since
                 * there is a lot of DOM interaction.
                 * Note that this parameter will be set by the initialisation routine. To
                 * set a default use {@link DataTable.defaults}.
                 *  @type boolean
                 */
                "bSortClasses": null,

                /**
                 * State saving enablement flag.
                 * Note that this parameter will be set by the initialisation routine. To
                 * set a default use {@link DataTable.defaults}.
                 *  @type boolean
                 */
                "bStateSave": null
            },


            /**
             * Scrolling settings for a table.
             *  @namespace
             */
            "oScroll": {
                /**
                 * Indicate if DataTables should be allowed to set the padding / margin
                 * etc for the scrolling header elements or not. Typically you will want
                 * this.
                 * Note that this parameter will be set by the initialisation routine. To
                 * set a default use {@link DataTable.defaults}.
                 *  @type boolean
                 */
                "bAutoCss": null,

                /**
                 * When the table is shorter in height than sScrollY, collapse the
                 * table container down to the height of the table (when true).
                 * Note that this parameter will be set by the initialisation routine. To
                 * set a default use {@link DataTable.defaults}.
                 *  @type boolean
                 */
                "bCollapse": null,

                /**
                 * Infinite scrolling enablement flag. Now deprecated in favour of
                 * using the Scroller plug-in.
                 * Note that this parameter will be set by the initialisation routine. To
                 * set a default use {@link DataTable.defaults}.
                 *  @type boolean
                 */
                "bInfinite": null,

                /**
                 * Width of the scrollbar for the web-browser's platform. Calculated
                 * during table initialisation.
                 *  @type int
                 *  @default 0
                 */
                "iBarWidth": 0,

                /**
                 * Space (in pixels) between the bottom of the scrolling container and 
                 * the bottom of the scrolling viewport before the next page is loaded
                 * when using infinite scrolling.
                 * Note that this parameter will be set by the initialisation routine. To
                 * set a default use {@link DataTable.defaults}.
                 *  @type int
                 */
                "iLoadGap": null,

                /**
                 * Viewport width for horizontal scrolling. Horizontal scrolling is 
                 * disabled if an empty string.
                 * Note that this parameter will be set by the initialisation routine. To
                 * set a default use {@link DataTable.defaults}.
                 *  @type string
                 */
                "sX": null,

                /**
                 * Width to expand the table to when using x-scrolling. Typically you
                 * should not need to use this.
                 * Note that this parameter will be set by the initialisation routine. To
                 * set a default use {@link DataTable.defaults}.
                 *  @type string
                 *  @deprecated
                 */
                "sXInner": null,

                /**
                 * Viewport height for vertical scrolling. Vertical scrolling is disabled
                 * if an empty string.
                 * Note that this parameter will be set by the initialisation routine. To
                 * set a default use {@link DataTable.defaults}.
                 *  @type string
                 */
                "sY": null
            },

            /**
             * Language information for the table.
             *  @namespace
             *  @extends DataTable.defaults.oLanguage
             */
            "oLanguage": {
                /**
                 * Information callback function. See 
                 * {@link DataTable.defaults.fnInfoCallback}
                 *  @type function
                 *  @default null
                 */
                "fnInfoCallback": null
            },

            /**
             * Browser support parameters
             *  @namespace
             */
            "oBrowser": {
                /**
                 * Indicate if the browser incorrectly calculates width:100% inside a
                 * scrolling element (IE6/7)
                 *  @type boolean
                 *  @default false
                 */
                "bScrollOversize": false
            },

            /**
             * Array referencing the nodes which are used for the features. The 
             * parameters of this object match what is allowed by sDom - i.e.
             *   <ul>
             *     <li>'l' - Length changing</li>
             *     <li>'f' - Filtering input</li>
             *     <li>'t' - The table!</li>
             *     <li>'i' - Information</li>
             *     <li>'p' - Pagination</li>
             *     <li>'r' - pRocessing</li>
             *   </ul>
             *  @type array
             *  @default []
             */
            "aanFeatures": [],

            /**
             * Store data information - see {@link DataTable.models.oRow} for detailed
             * information.
             *  @type array
             *  @default []
             */
            "aoData": [],

            /**
             * Array of indexes which are in the current display (after filtering etc)
             *  @type array
             *  @default []
             */
            "aiDisplay": [],

            /**
             * Array of indexes for display - no filtering
             *  @type array
             *  @default []
             */
            "aiDisplayMaster": [],

            /**
             * Store information about each column that is in use
             *  @type array
             *  @default []
             */
            "aoColumns": [],

            /**
             * Store information about the table's header
             *  @type array
             *  @default []
             */
            "aoHeader": [],

            /**
             * Store information about the table's footer
             *  @type array
             *  @default []
             */
            "aoFooter": [],

            /**
             * Search data array for regular expression searching
             *  @type array
             *  @default []
             */
            "asDataSearch": [],

            /**
             * Store the applied global search information in case we want to force a 
             * research or compare the old search to a new one.
             * Note that this parameter will be set by the initialisation routine. To
             * set a default use {@link DataTable.defaults}.
             *  @namespace
             *  @extends DataTable.models.oSearch
             */
            "oPreviousSearch": {},

            /**
             * Store the applied search for each column - see 
             * {@link DataTable.models.oSearch} for the format that is used for the
             * filtering information for each column.
             *  @type array
             *  @default []
             */
            "aoPreSearchCols": [],

            /**
             * Sorting that is applied to the table. Note that the inner arrays are
             * used in the following manner:
             * <ul>
             *   <li>Index 0 - column number</li>
             *   <li>Index 1 - current sorting direction</li>
             *   <li>Index 2 - index of asSorting for this column</li>
             * </ul>
             * Note that this parameter will be set by the initialisation routine. To
             * set a default use {@link DataTable.defaults}.
             *  @type array
             *  @todo These inner arrays should really be objects
             */
            "aaSorting": null,

            /**
             * Sorting that is always applied to the table (i.e. prefixed in front of
             * aaSorting).
             * Note that this parameter will be set by the initialisation routine. To
             * set a default use {@link DataTable.defaults}.
             *  @type array|null
             *  @default null
             */
            "aaSortingFixed": null,

            /**
             * Classes to use for the striping of a table.
             * Note that this parameter will be set by the initialisation routine. To
             * set a default use {@link DataTable.defaults}.
             *  @type array
             *  @default []
             */
            "asStripeClasses": null,

            /**
             * If restoring a table - we should restore its striping classes as well
             *  @type array
             *  @default []
             */
            "asDestroyStripes": [],

            /**
             * If restoring a table - we should restore its width 
             *  @type int
             *  @default 0
             */
            "sDestroyWidth": 0,

            /**
             * Callback functions array for every time a row is inserted (i.e. on a draw).
             *  @type array
             *  @default []
             */
            "aoRowCallback": [],

            /**
             * Callback functions for the header on each draw.
             *  @type array
             *  @default []
             */
            "aoHeaderCallback": [],

            /**
             * Callback function for the footer on each draw.
             *  @type array
             *  @default []
             */
            "aoFooterCallback": [],

            /**
             * Array of callback functions for draw callback functions
             *  @type array
             *  @default []
             */
            "aoDrawCallback": [],

            /**
             * Array of callback functions for row created function
             *  @type array
             *  @default []
             */
            "aoRowCreatedCallback": [],

            /**
             * Callback functions for just before the table is redrawn. A return of 
             * false will be used to cancel the draw.
             *  @type array
             *  @default []
             */
            "aoPreDrawCallback": [],

            /**
             * Callback functions for when the table has been initialised.
             *  @type array
             *  @default []
             */
            "aoInitComplete": [],


            /**
             * Callbacks for modifying the settings to be stored for state saving, prior to
             * saving state.
             *  @type array
             *  @default []
             */
            "aoStateSaveParams": [],

            /**
             * Callbacks for modifying the settings that have been stored for state saving
             * prior to using the stored values to restore the state.
             *  @type array
             *  @default []
             */
            "aoStateLoadParams": [],

            /**
             * Callbacks for operating on the settings object once the saved state has been
             * loaded
             *  @type array
             *  @default []
             */
            "aoStateLoaded": [],

            /**
             * Cache the table ID for quick access
             *  @type string
             *  @default <i>Empty string</i>
             */
            "sTableId": "",

            /**
             * The TABLE node for the main table
             *  @type node
             *  @default null
             */
            "nTable": null,

            /**
             * Permanent ref to the thead element
             *  @type node
             *  @default null
             */
            "nTHead": null,

            /**
             * Permanent ref to the tfoot element - if it exists
             *  @type node
             *  @default null
             */
            "nTFoot": null,

            /**
             * Permanent ref to the tbody element
             *  @type node
             *  @default null
             */
            "nTBody": null,

            /**
             * Cache the wrapper node (contains all DataTables controlled elements)
             *  @type node
             *  @default null
             */
            "nTableWrapper": null,

            /**
             * Indicate if when using server-side processing the loading of data 
             * should be deferred until the second draw.
             * Note that this parameter will be set by the initialisation routine. To
             * set a default use {@link DataTable.defaults}.
             *  @type boolean
             *  @default false
             */
            "bDeferLoading": false,

            /**
             * Indicate if all required information has been read in
             *  @type boolean
             *  @default false
             */
            "bInitialised": false,

            /**
             * Information about open rows. Each object in the array has the parameters
             * 'nTr' and 'nParent'
             *  @type array
             *  @default []
             */
            "aoOpenRows": [],

            /**
             * Dictate the positioning of DataTables' control elements - see
             * {@link DataTable.model.oInit.sDom}.
             * Note that this parameter will be set by the initialisation routine. To
             * set a default use {@link DataTable.defaults}.
             *  @type string
             *  @default null
             */
            "sDom": null,

            /**
             * Which type of pagination should be used.
             * Note that this parameter will be set by the initialisation routine. To
             * set a default use {@link DataTable.defaults}.
             *  @type string 
             *  @default two_button
             */
            "sPaginationType": "two_button",

            /**
             * The cookie duration (for bStateSave) in seconds.
             * Note that this parameter will be set by the initialisation routine. To
             * set a default use {@link DataTable.defaults}.
             *  @type int
             *  @default 0
             */
            "iCookieDuration": 0,

            /**
             * The cookie name prefix.
             * Note that this parameter will be set by the initialisation routine. To
             * set a default use {@link DataTable.defaults}.
             *  @type string
             *  @default <i>Empty string</i>
             */
            "sCookiePrefix": "",

            /**
             * Callback function for cookie creation.
             * Note that this parameter will be set by the initialisation routine. To
             * set a default use {@link DataTable.defaults}.
             *  @type function
             *  @default null
             */
            "fnCookieCallback": null,

            /**
             * Array of callback functions for state saving. Each array element is an 
             * object with the following parameters:
             *   <ul>
             *     <li>function:fn - function to call. Takes two parameters, oSettings
             *       and the JSON string to save that has been thus far created. Returns
             *       a JSON string to be inserted into a json object 
             *       (i.e. '"param": [ 0, 1, 2]')</li>
             *     <li>string:sName - name of callback</li>
             *   </ul>
             *  @type array
             *  @default []
             */
            "aoStateSave": [],

            /**
             * Array of callback functions for state loading. Each array element is an 
             * object with the following parameters:
             *   <ul>
             *     <li>function:fn - function to call. Takes two parameters, oSettings 
             *       and the object stored. May return false to cancel state loading</li>
             *     <li>string:sName - name of callback</li>
             *   </ul>
             *  @type array
             *  @default []
             */
            "aoStateLoad": [],

            /**
             * State that was loaded from the cookie. Useful for back reference
             *  @type object
             *  @default null
             */
            "oLoadedState": null,

            /**
             * Source url for AJAX data for the table.
             * Note that this parameter will be set by the initialisation routine. To
             * set a default use {@link DataTable.defaults}.
             *  @type string
             *  @default null
             */
            "sAjaxSource": null,

            /**
             * Property from a given object from which to read the table data from. This
             * can be an empty string (when not server-side processing), in which case 
             * it is  assumed an an array is given directly.
             * Note that this parameter will be set by the initialisation routine. To
             * set a default use {@link DataTable.defaults}.
             *  @type string
             */
            "sAjaxDataProp": null,

            /**
             * Note if draw should be blocked while getting data
             *  @type boolean
             *  @default true
             */
            "bAjaxDataGet": true,

            /**
             * The last jQuery XHR object that was used for server-side data gathering. 
             * This can be used for working with the XHR information in one of the 
             * callbacks
             *  @type object
             *  @default null
             */
            "jqXHR": null,

            /**
             * Function to get the server-side data.
             * Note that this parameter will be set by the initialisation routine. To
             * set a default use {@link DataTable.defaults}.
             *  @type function
             */
            "fnServerData": null,

            /**
             * Functions which are called prior to sending an Ajax request so extra 
             * parameters can easily be sent to the server
             *  @type array
             *  @default []
             */
            "aoServerParams": [],

            /**
             * Send the XHR HTTP method - GET or POST (could be PUT or DELETE if 
             * required).
             * Note that this parameter will be set by the initialisation routine. To
             * set a default use {@link DataTable.defaults}.
             *  @type string
             */
            "sServerMethod": null,

            /**
             * Format numbers for display.
             * Note that this parameter will be set by the initialisation routine. To
             * set a default use {@link DataTable.defaults}.
             *  @type function
             */
            "fnFormatNumber": null,

            /**
             * List of options that can be used for the user selectable length menu.
             * Note that this parameter will be set by the initialisation routine. To
             * set a default use {@link DataTable.defaults}.
             *  @type array
             *  @default []
             */
            "aLengthMenu": null,

            /**
             * Counter for the draws that the table does. Also used as a tracker for
             * server-side processing
             *  @type int
             *  @default 0
             */
            "iDraw": 0,

            /**
             * Indicate if a redraw is being done - useful for Ajax
             *  @type boolean
             *  @default false
             */
            "bDrawing": false,

            /**
             * Draw index (iDraw) of the last error when parsing the returned data
             *  @type int
             *  @default -1
             */
            "iDrawError": -1,

            /**
             * Paging display length
             *  @type int
             *  @default 10
             */
            "_iDisplayLength": 10,

            /**
             * Paging start point - aiDisplay index
             *  @type int
             *  @default 0
             */
            "_iDisplayStart": 0,

            /**
             * Paging end point - aiDisplay index. Use fnDisplayEnd rather than
             * this property to get the end point
             *  @type int
             *  @default 10
             *  @private
             */
            "_iDisplayEnd": 10,

            /**
             * Server-side processing - number of records in the result set
             * (i.e. before filtering), Use fnRecordsTotal rather than
             * this property to get the value of the number of records, regardless of
             * the server-side processing setting.
             *  @type int
             *  @default 0
             *  @private
             */
            "_iRecordsTotal": 0,

            /**
             * Server-side processing - number of records in the current display set
             * (i.e. after filtering). Use fnRecordsDisplay rather than
             * this property to get the value of the number of records, regardless of
             * the server-side processing setting.
             *  @type boolean
             *  @default 0
             *  @private
             */
            "_iRecordsDisplay": 0,

            /**
             * Flag to indicate if jQuery UI marking and classes should be used.
             * Note that this parameter will be set by the initialisation routine. To
             * set a default use {@link DataTable.defaults}.
             *  @type boolean
             */
            "bJUI": null,

            /**
             * The classes to use for the table
             *  @type object
             *  @default {}
             */
            "oClasses": {},

            /**
             * Flag attached to the settings object so you can check in the draw 
             * callback if filtering has been done in the draw. Deprecated in favour of
             * events.
             *  @type boolean
             *  @default false
             *  @deprecated
             */
            "bFiltered": false,

            /**
             * Flag attached to the settings object so you can check in the draw 
             * callback if sorting has been done in the draw. Deprecated in favour of
             * events.
             *  @type boolean
             *  @default false
             *  @deprecated
             */
            "bSorted": false,

            /**
             * Indicate that if multiple rows are in the header and there is more than 
             * one unique cell per column, if the top one (true) or bottom one (false) 
             * should be used for sorting / title by DataTables.
             * Note that this parameter will be set by the initialisation routine. To
             * set a default use {@link DataTable.defaults}.
             *  @type boolean
             */
            "bSortCellsTop": null,

            /**
             * Initialisation object that is used for the table
             *  @type object
             *  @default null
             */
            "oInit": null,

            /**
             * Destroy callback functions - for plug-ins to attach themselves to the
             * destroy so they can clean up markup and events.
             *  @type array
             *  @default []
             */
            "aoDestroyCallback": [],


            /**
             * Get the number of records in the current record set, before filtering
             *  @type function
             */
            "fnRecordsTotal": function () {
                if (this.oFeatures.bServerSide) {
                    return parseInt(this._iRecordsTotal, 10);
                } else {
                    return this.aiDisplayMaster.length;
                }
            },

            /**
             * Get the number of records in the current record set, after filtering
             *  @type function
             */
            "fnRecordsDisplay": function () {
                if (this.oFeatures.bServerSide) {
                    return parseInt(this._iRecordsDisplay, 10);
                } else {
                    return this.aiDisplay.length;
                }
            },

            /**
             * Set the display end point - aiDisplay index
             *  @type function
             *  @todo Should do away with _iDisplayEnd and calculate it on-the-fly here
             */
            "fnDisplayEnd": function () {
                if (this.oFeatures.bServerSide) {
                    if (this.oFeatures.bPaginate === false || this._iDisplayLength == -1) {
                        return this._iDisplayStart + this.aiDisplay.length;
                    } else {
                        return Math.min(this._iDisplayStart + this._iDisplayLength,
                            this._iRecordsDisplay);
                    }
                } else {
                    return this._iDisplayEnd;
                }
            },

            /**
             * The DataTables object for this table
             *  @type object
             *  @default null
             */
            "oInstance": null,

            /**
             * Unique identifier for each instance of the DataTables object. If there
             * is an ID on the table node, then it takes that value, otherwise an
             * incrementing internal counter is used.
             *  @type string
             *  @default null
             */
            "sInstance": null,

            /**
             * tabindex attribute value that is added to DataTables control elements, allowing
             * keyboard navigation of the table and its controls.
             */
            "iTabIndex": 0,

            /**
             * DIV container for the footer scrolling table if scrolling
             */
            "nScrollHead": null,

            /**
             * DIV container for the footer scrolling table if scrolling
             */
            "nScrollFoot": null
        };

        /**
         * Extension object for DataTables that is used to provide all extension options.
         * 
         * Note that the <i>DataTable.ext</i> object is available through
         * <i>jQuery.fn.dataTable.ext</i> where it may be accessed and manipulated. It is
         * also aliased to <i>jQuery.fn.dataTableExt</i> for historic reasons.
         *  @namespace
         *  @extends DataTable.models.ext
         */
        DataTable.ext = $.extend(true, {}, DataTable.models.ext);

        $.extend(DataTable.ext.oStdClasses, {
            "sTable": "dataTable",

            /* Two buttons buttons */
            "sPagePrevEnabled": "paginate_enabled_previous",
            "sPagePrevDisabled": "paginate_disabled_previous",
            "sPageNextEnabled": "paginate_enabled_next",
            "sPageNextDisabled": "paginate_disabled_next",
            "sPageJUINext": "",
            "sPageJUIPrev": "",

            /* Full numbers paging buttons */
            "sPageButton": "paginate_button",
            "sPageButtonActive": "paginate_active",
            "sPageButtonStaticDisabled": "paginate_button paginate_button_disabled",
            "sPageFirst": "first",
            "sPagePrevious": "previous",
            "sPageNext": "next",
            "sPageLast": "last",

            /* Striping classes */
            "sStripeOdd": "odd",
            "sStripeEven": "even",

            /* Empty row */
            "sRowEmpty": "dataTables_empty",

            /* Features */
            "sWrapper": "dataTables_wrapper",
            "sFilter": "dataTables_filter",
            "sInfo": "dataTables_info",
            "sPaging": "dataTables_paginate paging_", /* Note that the type is postfixed */
            "sLength": "dataTables_length",
            "sProcessing": "dataTables_processing",

            /* Sorting */
            "sSortAsc": "sorting_asc",
            "sSortDesc": "sorting_desc",
            "sSortable": "sorting", /* Sortable in both directions */
            "sSortableAsc": "sorting_asc_disabled",
            "sSortableDesc": "sorting_desc_disabled",
            "sSortableNone": "sorting_disabled",
            "sSortColumn": "sorting_", /* Note that an int is postfixed for the sorting order */
            "sSortJUIAsc": "",
            "sSortJUIDesc": "",
            "sSortJUI": "",
            "sSortJUIAscAllowed": "",
            "sSortJUIDescAllowed": "",
            "sSortJUIWrapper": "",
            "sSortIcon": "",

            /* Scrolling */
            "sScrollWrapper": "dataTables_scroll",
            "sScrollHead": "dataTables_scrollHead",
            "sScrollHeadInner": "dataTables_scrollHeadInner",
            "sScrollBody": "dataTables_scrollBody",
            "sScrollFoot": "dataTables_scrollFoot",
            "sScrollFootInner": "dataTables_scrollFootInner",

            /* Misc */
            "sFooterTH": "",
            "sJUIHeader": "",
            "sJUIFooter": ""
        });


        $.extend(DataTable.ext.oJUIClasses, DataTable.ext.oStdClasses, {
            /* Two buttons buttons */
            "sPagePrevEnabled": "fg-button ui-button ui-state-default ui-corner-left",
            "sPagePrevDisabled": "fg-button ui-button ui-state-default ui-corner-left ui-state-disabled",
            "sPageNextEnabled": "fg-button ui-button ui-state-default ui-corner-right",
            "sPageNextDisabled": "fg-button ui-button ui-state-default ui-corner-right ui-state-disabled",
            "sPageJUINext": "ui-icon ui-icon-circle-arrow-e",
            "sPageJUIPrev": "ui-icon ui-icon-circle-arrow-w",

            /* Full numbers paging buttons */
            "sPageButton": "fg-button ui-button ui-state-default",
            "sPageButtonActive": "fg-button ui-button ui-state-default ui-state-disabled",
            "sPageButtonStaticDisabled": "fg-button ui-button ui-state-default ui-state-disabled",
            "sPageFirst": "first ui-corner-tl ui-corner-bl",
            "sPageLast": "last ui-corner-tr ui-corner-br",

            /* Features */
            "sPaging": "dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi " +
                "ui-buttonset-multi paging_", /* Note that the type is postfixed */

            /* Sorting */
            "sSortAsc": "ui-state-default",
            "sSortDesc": "ui-state-default",
            "sSortable": "ui-state-default",
            "sSortableAsc": "ui-state-default",
            "sSortableDesc": "ui-state-default",
            "sSortableNone": "ui-state-default",
            "sSortJUIAsc": "css_right ui-icon ui-icon-triangle-1-n",
            "sSortJUIDesc": "css_right ui-icon ui-icon-triangle-1-s",
            "sSortJUI": "css_right ui-icon ui-icon-carat-2-n-s",
            "sSortJUIAscAllowed": "css_right ui-icon ui-icon-carat-1-n",
            "sSortJUIDescAllowed": "css_right ui-icon ui-icon-carat-1-s",
            "sSortJUIWrapper": "DataTables_sort_wrapper",
            "sSortIcon": "DataTables_sort_icon",

            /* Scrolling */
            "sScrollHead": "dataTables_scrollHead ui-state-default",
            "sScrollFoot": "dataTables_scrollFoot ui-state-default",

            /* Misc */
            "sFooterTH": "ui-state-default",
            "sJUIHeader": "fg-toolbar ui-toolbar ui-widget-header ui-corner-tl ui-corner-tr ui-helper-clearfix",
            "sJUIFooter": "fg-toolbar ui-toolbar ui-widget-header ui-corner-bl ui-corner-br ui-helper-clearfix"
        });

        /*
         * Variable: oPagination
         * Purpose:  
         * Scope:    jQuery.fn.dataTableExt
         */
        $.extend(DataTable.ext.oPagination, {
            /*
             * Variable: two_button
             * Purpose:  Standard two button (forward/back) pagination
             * Scope:    jQuery.fn.dataTableExt.oPagination
             */
            "two_button": {
                /*
                 * Function: oPagination.two_button.fnInit
                 * Purpose:  Initialise dom elements required for pagination with forward/back buttons only
                 * Returns:  -
                 * Inputs:   object:oSettings - dataTables settings object
                 *           node:nPaging - the DIV which contains this pagination control
                 *           function:fnCallbackDraw - draw function which must be called on update
                 */
                "fnInit": function (oSettings, nPaging, fnCallbackDraw) {
                    var oLang = oSettings.oLanguage.oPaginate;
                    var oClasses = oSettings.oClasses;
                    var fnClickHandler = function (e) {
                        if (oSettings.oApi._fnPageChange(oSettings, e.data.action)) {
                            fnCallbackDraw(oSettings);
                        }
                    };

                    var sAppend = (!oSettings.bJUI) ?
                        '<a class="' + oSettings.oClasses.sPagePrevDisabled + '" tabindex="' + oSettings.iTabIndex + '" role="button">' + oLang.sPrevious + '</a>' +
                        '<a class="' + oSettings.oClasses.sPageNextDisabled + '" tabindex="' + oSettings.iTabIndex + '" role="button">' + oLang.sNext + '</a>'
                        :
                        '<a class="' + oSettings.oClasses.sPagePrevDisabled + '" tabindex="' + oSettings.iTabIndex + '" role="button"><span class="' + oSettings.oClasses.sPageJUIPrev + '"></span></a>' +
                        '<a class="' + oSettings.oClasses.sPageNextDisabled + '" tabindex="' + oSettings.iTabIndex + '" role="button"><span class="' + oSettings.oClasses.sPageJUINext + '"></span></a>';
                    $(nPaging).append(sAppend);

                    var els = $('a', nPaging);
                    var nPrevious = els[0],
                        nNext = els[1];

                    oSettings.oApi._fnBindAction(nPrevious, { action: "previous" }, fnClickHandler);
                    oSettings.oApi._fnBindAction(nNext, { action: "next" }, fnClickHandler);

                    /* ID the first elements only */
                    if (!oSettings.aanFeatures.p) {
                        nPaging.id = oSettings.sTableId + '_paginate';
                        nPrevious.id = oSettings.sTableId + '_previous';
                        nNext.id = oSettings.sTableId + '_next';

                        nPrevious.setAttribute('aria-controls', oSettings.sTableId);
                        nNext.setAttribute('aria-controls', oSettings.sTableId);
                    }
                },

                /*
                 * Function: oPagination.two_button.fnUpdate
                 * Purpose:  Update the two button pagination at the end of the draw
                 * Returns:  -
                 * Inputs:   object:oSettings - dataTables settings object
                 *           function:fnCallbackDraw - draw function to call on page change
                 */
                "fnUpdate": function (oSettings, fnCallbackDraw) {
                    if (!oSettings.aanFeatures.p) {
                        return;
                    }

                    var oClasses = oSettings.oClasses;
                    var an = oSettings.aanFeatures.p;
                    var nNode;

                    /* Loop over each instance of the pager */
                    for (var i = 0, iLen = an.length ; i < iLen ; i++) {
                        nNode = an[i].firstChild;
                        if (nNode) {
                            /* Previous page */
                            nNode.className = (oSettings._iDisplayStart === 0) ?
                                oClasses.sPagePrevDisabled : oClasses.sPagePrevEnabled;

                            /* Next page */
                            nNode = nNode.nextSibling;
                            nNode.className = (oSettings.fnDisplayEnd() == oSettings.fnRecordsDisplay()) ?
                                oClasses.sPageNextDisabled : oClasses.sPageNextEnabled;
                        }
                    }
                }
            },


            /*
             * Variable: iFullNumbersShowPages
             * Purpose:  Change the number of pages which can be seen
             * Scope:    jQuery.fn.dataTableExt.oPagination
             */
            "iFullNumbersShowPages": 5,

            /*
             * Variable: full_numbers
             * Purpose:  Full numbers pagination
             * Scope:    jQuery.fn.dataTableExt.oPagination
             */
            "full_numbers": {
                /*
                 * Function: oPagination.full_numbers.fnInit
                 * Purpose:  Initialise dom elements required for pagination with a list of the pages
                 * Returns:  -
                 * Inputs:   object:oSettings - dataTables settings object
                 *           node:nPaging - the DIV which contains this pagination control
                 *           function:fnCallbackDraw - draw function which must be called on update
                 */
                "fnInit": function (oSettings, nPaging, fnCallbackDraw) {
                    var oLang = oSettings.oLanguage.oPaginate;
                    var oClasses = oSettings.oClasses;
                    var fnClickHandler = function (e) {
                        if (oSettings.oApi._fnPageChange(oSettings, e.data.action)) {
                            fnCallbackDraw(oSettings);
                        }
                    };

                    $(nPaging).append(
                        '<a  tabindex="' + oSettings.iTabIndex + '" class="' + oClasses.sPageButton + " " + oClasses.sPageFirst + '">' + oLang.sFirst + '</a>' +
                        '<a  tabindex="' + oSettings.iTabIndex + '" class="' + oClasses.sPageButton + " " + oClasses.sPagePrevious + '">' + oLang.sPrevious + '</a>' +
                        '<span></span>' +
                        '<a tabindex="' + oSettings.iTabIndex + '" class="' + oClasses.sPageButton + " " + oClasses.sPageNext + '">' + oLang.sNext + '</a>' +
                        '<a tabindex="' + oSettings.iTabIndex + '" class="' + oClasses.sPageButton + " " + oClasses.sPageLast + '">' + oLang.sLast + '</a>'
                    );
                    var els = $('a', nPaging);
                    var nFirst = els[0],
                        nPrev = els[1],
                        nNext = els[2],
                        nLast = els[3];

                    oSettings.oApi._fnBindAction(nFirst, { action: "first" }, fnClickHandler);
                    oSettings.oApi._fnBindAction(nPrev, { action: "previous" }, fnClickHandler);
                    oSettings.oApi._fnBindAction(nNext, { action: "next" }, fnClickHandler);
                    oSettings.oApi._fnBindAction(nLast, { action: "last" }, fnClickHandler);

                    /* ID the first elements only */
                    if (!oSettings.aanFeatures.p) {
                        nPaging.id = oSettings.sTableId + '_paginate';
                        nFirst.id = oSettings.sTableId + '_first';
                        nPrev.id = oSettings.sTableId + '_previous';
                        nNext.id = oSettings.sTableId + '_next';
                        nLast.id = oSettings.sTableId + '_last';
                    }
                },

                /*
                 * Function: oPagination.full_numbers.fnUpdate
                 * Purpose:  Update the list of page buttons shows
                 * Returns:  -
                 * Inputs:   object:oSettings - dataTables settings object
                 *           function:fnCallbackDraw - draw function to call on page change
                 */
                "fnUpdate": function (oSettings, fnCallbackDraw) {
                    if (!oSettings.aanFeatures.p) {
                        return;
                    }

                    var iPageCount = DataTable.ext.oPagination.iFullNumbersShowPages;
                    var iPageCountHalf = Math.floor(iPageCount / 2);
                    var iPages = Math.ceil((oSettings.fnRecordsDisplay()) / oSettings._iDisplayLength);
                    var iCurrentPage = Math.ceil(oSettings._iDisplayStart / oSettings._iDisplayLength) + 1;
                    var sList = "";
                    var iStartButton, iEndButton, i, iLen;
                    var oClasses = oSettings.oClasses;
                    var anButtons, anStatic, nPaginateList, nNode;
                    var an = oSettings.aanFeatures.p;
                    var fnBind = function (j) {
                        oSettings.oApi._fnBindAction(this, { "page": j + iStartButton - 1 }, function (e) {
                            /* Use the information in the element to jump to the required page */
                            oSettings.oApi._fnPageChange(oSettings, e.data.page);
                            fnCallbackDraw(oSettings);
                            e.preventDefault();
                        });
                    };

                    /* Pages calculation */
                    if (oSettings._iDisplayLength === -1) {
                        iStartButton = 1;
                        iEndButton = 1;
                        iCurrentPage = 1;
                    }
                    else if (iPages < iPageCount) {
                        iStartButton = 1;
                        iEndButton = iPages;
                    }
                    else if (iCurrentPage <= iPageCountHalf) {
                        iStartButton = 1;
                        iEndButton = iPageCount;
                    }
                    else if (iCurrentPage >= (iPages - iPageCountHalf)) {
                        iStartButton = iPages - iPageCount + 1;
                        iEndButton = iPages;
                    }
                    else {
                        iStartButton = iCurrentPage - Math.ceil(iPageCount / 2) + 1;
                        iEndButton = iStartButton + iPageCount - 1;
                    }


                    /* Build the dynamic list */
                    for (i = iStartButton ; i <= iEndButton ; i++) {
                        sList += (iCurrentPage !== i) ?
                            '<a tabindex="' + oSettings.iTabIndex + '" class="' + oClasses.sPageButton + '">' + oSettings.fnFormatNumber(i) + '</a>' :
                            '<a tabindex="' + oSettings.iTabIndex + '" class="' + oClasses.sPageButtonActive + '">' + oSettings.fnFormatNumber(i) + '</a>';
                    }

                    /* Loop over each instance of the pager */
                    for (i = 0, iLen = an.length ; i < iLen ; i++) {
                        nNode = an[i];
                        if (!nNode.hasChildNodes()) {
                            continue;
                        }

                        /* Build up the dynamic list first - html and listeners */
                        $('span:eq(0)', nNode)
                            .html(sList)
                            .children('a').each(fnBind);

                        /* Update the permanent button's classes */
                        anButtons = nNode.getElementsByTagName('a');
                        anStatic = [
                            anButtons[0], anButtons[1],
                            anButtons[anButtons.length - 2], anButtons[anButtons.length - 1]
                        ];

                        $(anStatic).removeClass(oClasses.sPageButton + " " + oClasses.sPageButtonActive + " " + oClasses.sPageButtonStaticDisabled);
                        $([anStatic[0], anStatic[1]]).addClass(
                            (iCurrentPage == 1) ?
                                oClasses.sPageButtonStaticDisabled :
                                oClasses.sPageButton
                        );
                        $([anStatic[2], anStatic[3]]).addClass(
                            (iPages === 0 || iCurrentPage === iPages || oSettings._iDisplayLength === -1) ?
                                oClasses.sPageButtonStaticDisabled :
                                oClasses.sPageButton
                        );
                    }
                }
            }
        });

        $.extend(DataTable.ext.oSort, {
            /*
             * text sorting
             */
            "string-pre": function (a) {
                if (typeof a != 'string') {
                    a = (a !== null && a.toString) ? a.toString() : '';
                }
                return a.toLowerCase();
            },

            "string-asc": function (x, y) {
                return ((x < y) ? -1 : ((x > y) ? 1 : 0));
            },

            "string-desc": function (x, y) {
                return ((x < y) ? 1 : ((x > y) ? -1 : 0));
            },


            /*
             * html sorting (ignore html tags)
             */
            "html-pre": function (a) {
                return a.replace(/<.*?>/g, "").toLowerCase();
            },

            "html-asc": function (x, y) {
                return ((x < y) ? -1 : ((x > y) ? 1 : 0));
            },

            "html-desc": function (x, y) {
                return ((x < y) ? 1 : ((x > y) ? -1 : 0));
            },


            /*
             * date sorting
             */
            "date-pre": function (a) {
                var x = Date.parse(a);

                if (isNaN(x) || x === "") {
                    x = Date.parse("01/01/1970 00:00:00");
                }
                return x;
            },

            "date-asc": function (x, y) {
                return x - y;
            },

            "date-desc": function (x, y) {
                return y - x;
            },


            /*
             * numerical sorting
             */
            "numeric-pre": function (a) {
                return (a == "-" || a === "") ? 0 : a * 1;
            },

            "numeric-asc": function (x, y) {
                return x - y;
            },

            "numeric-desc": function (x, y) {
                return y - x;
            }
        });


        $.extend(DataTable.ext.aTypes, [
            /*
             * Function: -
             * Purpose:  Check to see if a string is numeric
             * Returns:  string:'numeric' or null
             * Inputs:   mixed:sText - string to check
             */
            function (sData) {
                /* Allow zero length strings as a number */
                if (typeof sData === 'number') {
                    return 'numeric';
                }
                else if (typeof sData !== 'string') {
                    return null;
                }

                var sValidFirstChars = "0123456789-";
                var sValidChars = "0123456789.";
                var Char;
                var bDecimal = false;

                /* Check for a valid first char (no period and allow negatives) */
                Char = sData.charAt(0);
                if (sValidFirstChars.indexOf(Char) == -1) {
                    return null;
                }

                /* Check all the other characters are valid */
                for (var i = 1 ; i < sData.length ; i++) {
                    Char = sData.charAt(i);
                    if (sValidChars.indexOf(Char) == -1) {
                        return null;
                    }

                    /* Only allowed one decimal place... */
                    if (Char == ".") {
                        if (bDecimal) {
                            return null;
                        }
                        bDecimal = true;
                    }
                }

                return 'numeric';
            },

            /*
             * Function: -
             * Purpose:  Check to see if a string is actually a formatted date
             * Returns:  string:'date' or null
             * Inputs:   string:sText - string to check
             */
            function (sData) {
                var iParse = Date.parse(sData);
                if ((iParse !== null && !isNaN(iParse)) || (typeof sData === 'string' && sData.length === 0)) {
                    return 'date';
                }
                return null;
            },

            /*
             * Function: -
             * Purpose:  Check to see if a string should be treated as an HTML string
             * Returns:  string:'html' or null
             * Inputs:   string:sText - string to check
             */
            function (sData) {
                if (typeof sData === 'string' && sData.indexOf('<') != -1 && sData.indexOf('>') != -1) {
                    return 'html';
                }
                return null;
            }
        ]);


        // jQuery aliases
        $.fn.DataTable = DataTable;
        $.fn.dataTable = DataTable;
        $.fn.dataTableSettings = DataTable.settings;
        $.fn.dataTableExt = DataTable.ext;


        // Information about events fired by DataTables - for documentation.
        /**
         * Draw event, fired whenever the table is redrawn on the page, at the same point as
         * fnDrawCallback. This may be useful for binding events or performing calculations when
         * the table is altered at all.
         *  @name DataTable#draw
         *  @event
         *  @param {event} e jQuery event object
         *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
         */

        /**
         * Filter event, fired when the filtering applied to the table (using the build in global
         * global filter, or column filters) is altered.
         *  @name DataTable#filter
         *  @event
         *  @param {event} e jQuery event object
         *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
         */

        /**
         * Page change event, fired when the paging of the table is altered.
         *  @name DataTable#page
         *  @event
         *  @param {event} e jQuery event object
         *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
         */

        /**
         * Sort event, fired when the sorting applied to the table is altered.
         *  @name DataTable#sort
         *  @event
         *  @param {event} e jQuery event object
         *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
         */

        /**
         * DataTables initialisation complete event, fired when the table is fully drawn,
         * including Ajax data loaded, if Ajax data is required.
         *  @name DataTable#init
         *  @event
         *  @param {event} e jQuery event object
         *  @param {object} oSettings DataTables settings object
         *  @param {object} json The JSON object request from the server - only
         *    present if client-side Ajax sourced data is used</li></ol>
         */

        /**
         * State save event, fired when the table has changed state a new state save is required.
         * This method allows modification of the state saving object prior to actually doing the
         * save, including addition or other state properties (for plug-ins) or modification
         * of a DataTables core property.
         *  @name DataTable#stateSaveParams
         *  @event
         *  @param {event} e jQuery event object
         *  @param {object} oSettings DataTables settings object
         *  @param {object} json The state information to be saved
         */

        /**
         * State load event, fired when the table is loading state from the stored data, but
         * prior to the settings object being modified by the saved state - allowing modification
         * of the saved state is required or loading of state for a plug-in.
         *  @name DataTable#stateLoadParams
         *  @event
         *  @param {event} e jQuery event object
         *  @param {object} oSettings DataTables settings object
         *  @param {object} json The saved state information
         */

        /**
         * State loaded event, fired when state has been loaded from stored data and the settings
         * object has been modified by the loaded data.
         *  @name DataTable#stateLoaded
         *  @event
         *  @param {event} e jQuery event object
         *  @param {object} oSettings DataTables settings object
         *  @param {object} json The saved state information
         */

        /**
         * Processing event, fired when DataTables is doing some kind of processing (be it,
         * sort, filter or anything else). Can be used to indicate to the end user that
         * there is something happening, or that something has finished.
         *  @name DataTable#processing
         *  @event
         *  @param {event} e jQuery event object
         *  @param {object} oSettings DataTables settings object
         *  @param {boolean} bShow Flag for if DataTables is doing processing or not
         */

        /**
         * Ajax (XHR) event, fired whenever an Ajax request is completed from a request to 
         * made to the server for new data (note that this trigger is called in fnServerData,
         * if you override fnServerData and which to use this event, you need to trigger it in
         * you success function).
         *  @name DataTable#xhr
         *  @event
         *  @param {event} e jQuery event object
         *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
         *  @param {object} json JSON returned from the server
         */

        /**
         * Destroy event, fired when the DataTable is destroyed by calling fnDestroy or passing
         * the bDestroy:true parameter in the initialisation object. This can be used to remove
         * bound events, added DOM nodes, etc.
         *  @name DataTable#destroy
         *  @event
         *  @param {event} e jQuery event object
         *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
         */
    }));

}(window, document));


var FriendlyDictionary = {
    IN_PROGRESS: "In Progress",
    COMPLETED: "Completed",
    INFO_NEEDED: "Info Needed",
    DRAFT_SENT: "Draft Sent",
    CANCELLED: "Cancelled",
    SCHEDULED: "Scheduled",
    'true': "<span class='glyphicon glyphicon-ok'><i class='hide'>true</i></span>",
    'false': "<span class='glyphicon glyphicon-remove'><i class='hide'>false</i></span>",
    True: "<span class='glyphicon glyphicon-ok'><i class='hide'>true</i></span>",
    False: "<span class='glyphicon glyphicon-remove'><i class='hide'>false</i></span>"
}

var NPVNexus = NPVNexus || {};
NPVNexus.Delay = 1000;
NPVNexus.Nav = (function () {
    Init = function () {
        $(document).ready(function () {
            $('.navbar-nav .dropdown').hover(function () {
                $(this).addClass("open");
            }, function () {
                $(this).removeClass("open");
            });
        });
    }

    return {
        init: Init
    }
}());

//Status Messages
NPVNexus.Status = (function () {
    var tmr = null;
    var timeOut = 1500;
    var Error = function (msg) {
        var $elm = $("#StatusAlert");
        var output = (msg != null) ? msg : "* An error Occured";
        $elm.html(output).removeClass("loading").addClass("error");
        tmr = window.setTimeout(function () { $elm.removeClass("error") }, timeOut);
        console.log(output);
    };
    var Success = function (msg) {
        var $elm = $("#StatusAlert");
        var output = (msg != null) ? msg : "* Saved";
        $elm.html(output).removeClass("loading").addClass("success");
        tmr = window.setTimeout(function () { $elm.removeClass("success") }, timeOut);

        //   console.log(output);
    };
    var Loading = function (msg, expire, call) {
        var $elm = $("#StatusAlert");
        var output = (msg != null) ? msg : "* Processing...";
        $elm.html(output).addClass("loading");
        if (expire) {
            tmr = window.setTimeout(function () { $elm.removeClass("loading") }, expire);
        }
        return true;
    };
    var RemoveLoading = function (msg, expire) {
        var $elm = $("#StatusAlert");
        $elm.removeClass("loading");

    };
    return {
        error: Error,
        loading: Loading,
        success: Success,
        removeLoading: RemoveLoading
    };
}());
NPVNexus.Formatters = (function () {
    var currency = function (val) {
        ret = "";
        if (val) {
            ret = "$" + val.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
        }
        return ret;
    }
    var phone = function (val) {
        return val.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');;
    }
    var friendlyName = function (val) {
        return (FriendlyDictionary[val] != null) ? FriendlyDictionary[val] : val;
    }

    return {
        currency: currency,
        friendlyName: friendlyName
    };
}());

//View Apprasal Page
NPVNexus.View_Appraisal = (function () {
    //Variables
    var footable;
    var tmeOut = [];

    //Public
    var Init = function () {
        $(document).ready(function () {
            //Set visibility of Appraisal Info based on Status DD
            setStatus();
            //Set Up page Event Handlers
            eventHandlers();
            //Instantiate FooTables
            footable = $('table').footable({});
        });

    };
    var SetUpMap = function (elm, coords) {
        if (coords.length > 0) {
            var theSpot = new google.maps.LatLng(coords[0][0], coords[0][1]);
            var mapOptions = { center: theSpot, zoom: 13 };
            var map = new google.maps.Map(elm, mapOptions);

            _.each(coords, function (element, index) {
                var coord = new google.maps.Marker({
                    position: new google.maps.LatLng(coords[index][0], coords[index][1]), map: map
                });
            });
        }
    }

    //Private
    var eventHandlers = function () {

        // Footer Table Btn Toggle
        $("#BtnActive,#BtnHistorical,#BtnSimilar").click(function () {

            setTable($(this).attr("id"));

        });

        //Ajax Actions
        $('#Update').on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            saveInvoiceSent($(this));

        });
        $('#InvoiceSent').on('change', function (e) {
            //Make Ajax Call
            saveAppraisalInfo($(this));
        });
        $('#Status').on('change', function (e) {
            if ($(this).val() != "COMPLETED" && $(this).val() != "DRAFT_SENT") {
                $(".showhideoptions").hide();
                saveAppraisalStatus($(this), function () { saveAppraisalInfo($('#InvoiceSent')); });
                $("#InvoiceSent").removeAttr("checked").attr("disabled", "true");
            } else {
                $("#InvoiceSent").removeAttr("disabled");
                $(".showhideoptions").show();
                if ($(this).val() == "COMPLETED") {
                    $("#InvoiceSent").attr("disabled", "true");
                    disableAppraisalSpecs(true);
                    saveAppraisalStatus($(this));

                } else {
                    disableAppraisalSpecs(false);
                }
            }
            //Make Ajax Call
        });
        $('#Expenses').on('keyup', function (e) {
            if (tmeOut[0]) {
                window.clearTimeout(tmeOut[0]);
            }
            var $elm = $('#Expenses');
            var regex = /^\s*(\+|-)?((\d+(\.\d\d)?)|(\.\d\d))\s*$/;
            tmeOut[0] = window.setTimeout(function () {
                var val = $elm.val()
                if (val.match(regex)) {
                    if (val.indexOf(".") == -1) {
                        $elm.val((val + ".00"));
                    }
                    $elm.removeClass("error")
                    saveAppraisalFee($elm)
                } else {
                    $elm.addClass("error")
                }
            }, NPVNexus.Delay);
        });
        $('#ExpensesHeld').on('keyup', function (e) {
            if (tmeOut[1]) {
                window.clearTimeout(tmeOut[1]);
            }
            var $elm = $('#ExpensesHeld');
            var regex = /^\s*(\+|-)?((\d+(\.\d\d)?)|(\.\d\d))\s*$/;
            tmeOut[1] = window.setTimeout(function () {
                var val = $elm.val()
                if (val.match(regex)) {
                    if (val.indexOf(".") == -1) {
                        $elm.val((val + ".00"));
                    }
                    $elm.removeClass("error")
                    saveAppraisalFee($elm)
                } else {
                    $elm.addClass("error")
                }
            }, NPVNexus.Delay);
        });
    };
    var setTable = function (active) {
        $(".tablebtn.active").removeClass("active");
        $("#" + active).addClass("active");
        switch (active) {
            case "BtnActive":
                $("#Active").show().trigger('footable_resize');
                $("#Historical,#Similar").hide();
                break;
            case "BtnHistorical":
                $("#Historical").show().trigger('footable_resize');
                $("#Active,#Similar").hide();
                break;
            case "BtnSimilar":
                $("#Similar").show().trigger('footable_resize');
                $("#Active,#Historical").hide();
                break;
        }
        $('table.footable').trigger('footable_redraw');
    };
    var saveAppraisalStatus = function ($this,callback) {
        NPVNexus.Status.loading();
        $.ajax({
            type: 'PATCH',
            dataType: 'JSON',
            url: $('#Update').attr('href'),
            data: JSON.stringify({
                'status': $("#Status").val()
            }),
            contentType: 'application/json',
            success: function (data) {
                if (callback) {
                    callback();
                }
                NPVNexus.Status.success();
            },
            error: function (data) {
                NPVNexus.Status.error();
            }
        });
    }
    var saveAppraisalInfo = function ($this) {
        NPVNexus.Status.loading();
        $.ajax({
            type: 'PATCH',
            dataType: 'JSON',
            url: $('#Update').attr('href'),
            data: JSON.stringify({
                'invoice_sent': $this.prop('checked')
            }),
            contentType: 'application/json',
            success: function (data) {
                NPVNexus.Status.success();
            },
            error: function (data) {
                NPVNexus.Status.error();
            }
        });
    }
    var saveAppraisalFee = function ($this) {
        NPVNexus.Status.loading();
        $.ajax({
            type: 'PATCH',
            dataType: 'JSON',
            url: $('#Update').attr('href'),
            data: JSON.stringify({
                'expenses': $('#Expenses').val().toString(),
                'expenses_held': $('#ExpensesHeld').val().toString()
            }),
            contentType: 'application/json',
            success: function (data) {
                NPVNexus.Status.success();
            },
            error: function (data) {
                NPVNexus.Status.error();
            }
        });
    }
    var saveInvoiceSent = function ($this) {
        NPVNexus.Status.loading();
        $.ajax({
            type: 'PATCH',
            dataType: 'JSON',
            url: $this.attr('href'),
            data: JSON.stringify({
                'hours_spent': $("#HoursSpent").val(),
                'final_value': $("#FinalValue").val(),
                'status': $("#Status").val()
            }),
            contentType: 'application/json',
            success: function (data) {
                NPVNexus.Status.success();
            },
            error: function (data) {
                NPVNexus.Status.error();
            }
        });
    }
    var setStatus = function () {
        var statusVal = $("#Status").val();
        if (statusVal != "COMPLETED" && statusVal != "DRAFT_SENT") {
            $(".showhideoptions").hide();
        } else {
            $(".showhideoptions").show();
            if (statusVal == "COMPLETED") {
                $("#InvoiceSent").attr("disabled", "true");
                disableAppraisalSpecs(true);
            }
        }
    }
    var disableAppraisalSpecs = function (disable) {
        if (disable) {
            $("#HoursSpent").attr('disabled', true);
            $("#FinalValue").attr('disabled', true);
            $("#Update").hide();
        }
        else {
            $("#HoursSpent").removeAttr('disabled');
            $("#FinalValue").removeAttr('disabled');
            $("#Update").show();
        }
    }
    return {
        init: Init,
        setUpMap: SetUpMap
    };
}());

//View Client List Page
NPVNexus.View_Client_List = (function () {
    //Public
    var Init = function () {
        $(document).ready(function () {
            $('table').footable({});
            $('.tooltipicon').tooltip({});
        });
    };
    return {
        init: Init
    };
}());

//View Licensing Page
NPVNexus.View_State_Licensing = (function () {
    //Variables
    var stateSelectedColor = "#ccc";
    var stateOverColor = "#ffffff";
    var initialStateColor = "#003e7e"
    var strokeColor = "#6b9dd3";
    var activeStrokeColor = "#d2252c";
    var mapWidth = "730";
    var mapHeight = "480";
    var mobileMapWidth = "330";
    var mobileMapHeight = "200";
    var textAreaWidth;
    var textAreaPadding;
    var mouseX = 0;
    var mouseY = 0;
    var current = null;
    var initialState = "IL";

    // Set up for mouse capture
    if (document.captureEvents && Event.MOUSEMOVE) {
        document.captureEvents(Event.MOUSEMOVE);
    }
    // Main function to retrieve mouse x-y pos.s
    var getMouseXY = function (e) {
        var scrollTop = $(window).scrollTop();
        if (e && e.pageX) {
            mouseX = e.pageX;
            mouseY = e.pageY - scrollTop;
        } else {
            mouseX = event.clientX + document.body.scrollLeft;
            mouseY = event.clientY + document.body.scrollTop;
        }
        // catch possible negative values
        if (mouseX < 0) {
            mouseX = 0;
        }
        if (mouseY < 0) {
            mouseY = 0;
        }
        $('#Map').next('.point').css({
            left: mouseX - 50,
            top: mouseY - 70
        })
    }
    // Set-up to use getMouseXY function onMouseMove

    var resizeMap = function (paper) {
        var height = 0,
            width = 0;
        if ($(window).width() <= 750) {
            height = mobileMapHeight;
            width = mobileMapWidth;
        } else {
            height = mapHeight;
            width = mapWidth;
        }
        paper.changeSize(width, height, true, false);

        $(".mapWrapper").css({
            'width': width + 'px',
            'height': height + 'px'
        });

    }
    //Public
    var Init = function () {
        $(document).ready(function () {
            document.body.onmousemove = getMouseXY;
            $('table').footable({});
            createMap();
        });
    };
    var createMap = function () {
        //start map
        var r = new ScaleRaphael('Map', 930, 580),
        attributes = {
            fill: initialStateColor,
            cursor: 'pointer',
            stroke: strokeColor,
            'stroke-width': 1,
            'stroke-linejoin': 'round'
        },
        abv = new Array();
        names = new Array();
        $stateSelect = $("#StateNames");
        for (var state in usamappaths) {
            //Create obj
            var obj = r.path(usamappaths[state].path);
            obj.attr(attributes);
            abv[obj.id] = usamappaths[state].abv;
            names[obj.id] = usamappaths[state].name;
            var option = $('<option/>', { value: abv[obj.id] }).text(usamappaths[state].name);
            $stateSelect.append(option);
            obj.attr({
                fill: initialStateColor
            });
            obj.mouseover(function (e) {
                //Animate if not already the current state
                if (this != current) {
                    this.animate({
                        fill: stateSelectedColor,
                        stroke: activeStrokeColor,
                        'stroke-width': 2
                    }, 500);
                    this.toFront();
                }
            });
            obj.mouseout(function (e) {
                if (this != current) {
                    this.animate({
                        fill: initialStateColor,
                        fill: initialStateColor,
                        stroke: strokeColor
                    }, 500);
                }
                $('#map').next('.point').remove();
            });
            obj.mouseup(function (e) {

                var stateAbv = abv[this.id];
                window.location = "/license-info/" + stateAbv;
            });
        }
        //Use to PreSet a state
        //var id = jQuery.inArray(initialState, abv);
        //if (id > -1){
        //    r.getById(id).events[2].f.call(r.getById(id));
        //}
        $("body").on("change", "#StateNames", function () {
            window.location = "/license-info/" + $(this).val();
        });
        $(window).resize(function () {
            resizeMap(r);
        });
        resizeMap(r);

    }
    return {
        init: Init
    };
}());

//View State License info
NPVNexus.View_State_Licensing_Info = (function () {
    Init = function () {
        $(document).ready(function () {
            $('.footable').footable({});
        });
    }
    return {
        init: Init
    };
}());

//View Licensing Page
NPVNexus.View_AMF = (function () {
    //Variables

    //Private
    var eventHandlers = function () {
        $("#BtnActive").click(function () {
            $("#Active").show();
            $("#Historical").hide();
            $(".active").removeClass("active");
            $("#BtnActive").addClass("active");
        });

        $("#BtnHistorical").click(function () {
            $("#Active").hide();
            $("#Historical").show();
            $(".active").removeClass("active");
            $("#BtnHistorical").addClass("active");
        });
    };

    //Public
    var Init = function () {
        $(document).ready(function () {
            $('table').footable({});
            eventHandlers();
        });
    };

    return {
        init: Init
    };
}());

//View Appraiser Home Page
NPVNexus.View_Appraiser_Home = (function () {
    //Variables
    var employee, footable;
    var fee = 0;
    var today = new Date();
    var cMonth = today.getMonth() + 1;
    var current_year = today.getFullYear();
    //Public
    var Init = function (emp) {
        employee = emp;
        $(document).ready(function () {
            footable = $('table.footable').footable({});
            eventHandlers();
            setUp();
        });
    };

    //Private
    var eventHandlers = function () {
        $("#DateBtn").click(function () {
            NPVNexus.Status.loading();
            var start_date = convertDate($("#StDate").val());
            var end_date = convertDate($("#EndDate").val());
            //console.log(start_date);
            //console.log(end_date);
            var url = "/api/v1/assignment/?employee=" + employee + "&role__in=APPRAISER,ASSOCIATE,RESEARCHER&appraisal__due_date__gte=" + start_date + "&appraisal__due_date__lte=" + end_date;
            url += "&fields=appraisal__job_number,appraisal__due_date,appraisal__engagement_property__property__name,appraisal__engagement_property__property__id,appraisal__id";
            url += ",appraisal__engagement_property__engagement__client__name,appraisal__engagement_property__engagement__client__id,appraisal__engagement_property__property__property_type,appraisal__engagement_property__property__property_subtype,fee,role,appraisal__status,appraisal__hours_spent";
            loadData($('#Assignments tbody'), url);
        });
        $("#Filter").change(function () {
            if ($(this).val() == "Date Range") {
                $(".quarters").toggle();
                $(".dates").toggle();
            } else if ($(this).val() == "Quarters") {
                $(".quarters").toggle();
                $(".dates").toggle();
            }
        });
        $("#QuarterBtn").click(function () {
            NPVNexus.Status.loading();
            var url = getQuarterDatesRequestURL($("#QuartersQt").val(), $("#QuartersYrs").val());
            loadData($('#Assignments tbody'), url);
        });
    };
    var getCurrentQuarter = function () {
        var cQuarter = 0;
        if (cMonth > 0 && cMonth < 4) {
            cQuarter = 1;
        } else if (cMonth > 3 && cMonth < 7) {
            cQuarter = 2;
        } else if (cMonth > 6 && cMonth < 10) {
            cQuarter = 3;
        } else if (cMonth > 9 && cMonth < 13) {
            cQuarter = 4;
        }
        return cQuarter;
    }
    var setUp = function () {
        //Hide Dates
        $(".dates").hide();
        //Set Filters DD to current year
        NPVNexus.GetYearRange(2010, $("#QuartersYrs"));

        $("#QuartersQt > option[value=" + getCurrentQuarter() + "]").each(function () {
            $(this).prop('selected', 'true');
        });
        $("#Filter option:first-child").attr("selected", "selected");
        //  $('#completed-assignments tbody').html(tableData(assign)[2]);
        $("#QuarterBtn").trigger("click");

    }
    var loadData = function ($elm, url) {
        var loadData = { rs: null };
        $.ajax({
            async: false,
            dataType: "json",
            data: "GET",
            url: url,
            contentType: "application/json",
            success: function (response) {
                //var table = tableData(response.objects);
                //$('#assignment-table tbody').html(table[0]);
                //$('#completed-assignments tbody').html(table[2]);
                //$('#totalFee').html(table[1]);
                if (response != null && response.objects.length > 0)
                    loadData = { rs: response.objects }
                renderTable($elm, loadData);
                //$('table.footable').removeClass("tablet,mobile,breakpoint,footable-loaded");
                //     $('table.footable').unbind("footable");
                $('table.footable').trigger('footable_initialized');
                window.setTimeout(function () { $("#StatusAlert").removeClass("loading"); }, 300);
            },
            error: function (response) {
                NPVNexus.Status.error();
                console.log(response);
            }
        });
    };
    /**
        * Convert the date to a usable format 
        * from the date picker to python datetime-ish
        **/
    var convertDate = function (date) {
        var date_array = date.split('/');
        var month = date_array[0];
        var day = date_array[1];
        var year = date_array[2];
        var conv_date = year + "-" + month + "-" + day;
        return conv_date;

    };

    var renderTable = function ($elm, data) {
        var template = _.template($(".tableRow").html());
        // console.log(data);
        $elm.html(template(data));
        footable.trigger('footable_redraw');
        $('.tooltipicon').tooltip({});
        $("#TotalFee").html(NPVNexus.Formatters.currency(NPVNexus.View_Appraiser_Home.fee.toFixed(2)));
    }
    var getQuarterDatesRequestURL = function (quarter, year) {
        var start_date = "";
        var end_date = "";
        var URL = "";
        var emp = employee;
        if (quarter == 1) {
            start_date = year + "-01-01";
            end_date = year + "-03-31";
        } else if (quarter == 2) {
            start_date = year + "-04-01";
            end_date = year + "-06-30";
        } else if (quarter == 3) {
            start_date = year + "-07-01";
            end_date = year + "-09-30";
        } else if (quarter == 4) {
            start_date = year + "-10-01";
            end_date = year + "-12-31";
        }
        URL = "/api/v1/assignment/?employee=" + emp + "&role__in=APPRAISER,ASSOCIATE,RESEARCHER&appraisal__due_date__gte=" + start_date + "&appraisal__due_date__lte=" + end_date;
        URL += "&fields=appraisal__job_number,appraisal__due_date,appraisal__engagement_property__property__name,appraisal__engagement_property__property__id,appraisal__id";
        URL += ",appraisal__engagement_property__engagement__client__name,appraisal__engagement_property__engagement__client__id,appraisal__engagement_property__property__property_subtype,appraisal__engagement_property__property__property_type,fee,role,appraisal__status,appraisal__hours_spent";
        return URL;
    }
    return {
        init: Init,
        fee: fee
    };
}());

//View All Appraisals Page
NPVNexus.View_Appraisals = (function () {
    //Variables
    var apprsls, clients, assign, employee, footable;
    var fee = 0;
    var today = new Date();
    var current_year = today.getFullYear();
    var cMonth = today.getMonth() + 1;
    var loaded = [false, false];
    var dataLoad = [null, null];
    var winTmr = null;
    var headTmr = null;
    var activeCollection = [];
    var table = null;
    var tableElm = null;
    var showFee = false;

    //Public
    var Init = function (cli, emp, showfee) {
        clients = cli;
        employee = emp;
        showFee = showfee;
        $(document).ready(function () {
            footable = $('table.footable').footable({});
            eventHandlers();
            setUp();
        });
    };
    var setUp = function () {
        //Hide Dates
        $(".dates,.range-div").hide();
        var today = new Date();
        NPVNexus.GetYearRange(2010, $("#QuartersYrs"));
        $("#Filter option:first-child").attr("selected", "selected");
        //  renderTable($('#Appraisals tbody'), { rs: apprsls });
        $("#QuarterBtn").trigger("click");

    }
    //Private
    var eventHandlers = function () {
        $(window).resize(function () {
            table.fnDraw(false);
            $('table.footable').trigger('footable_initialized');
        });
        $("#TimeFilter").change(function () {
            if ($(this).val() == "Date Range") {
                $(".quarters-div").toggle();
                $(".range-div").toggle();
            } else if ($(this).val() == "Quarters") {
                $(".quarters-div").toggle();
                $(".range-div").toggle();
            }
        });
        $("#QuarterBtn, #DateBtn").click(function () {
            loadData($('#Appraisals'), generateUrls());
        });

        $("#QuartersYrs > option").each(function () {
            if ($(this).val() == current_year) {
                $(this).prop("selected", "true");
            }
        });

        $("#QuartersQt > option").each(function () {
            if ($(this).val() == getCurrentQuarter()) {
                $(this).prop("selected", "true");
            }
        });


        $("#Filter").change(function () {
            if ($(this).val() == "Date Range") {
                $(".quarters").toggle();
                $(".dates").toggle();
            } else if ($(this).val() == "Quarters") {
                $(".quarters").toggle();
                $(".dates").toggle();
            }
        });
    };

    var getCurrentQuarter = function () {
        var today = new Date();
        var cMonth = today.getMonth() + 1;
        var cQuarter = 0;
        if (cMonth > 0 && cMonth < 4) {
            cQuarter = 1;
        } else if (cMonth > 3 && cMonth < 7) {
            cQuarter = 2;
        } else if (cMonth > 6 && cMonth < 10) {
            cQuarter = 3;
        } else if (cMonth > 9 && cMonth < 13) {
            cQuarter = 4;
        }
        return cQuarter;
    }

    var generateUrls = function () {
        var appraisalUrl, scheduledAppraisalUrl;
        var appraisalUrlBase = "/api/v1/appraisal/?fields=engagement_property__property__id,engagement_property__property__name,due_date,invoice_sent,engagement_property__engagement__client__name,engagement_property__engagement__client__id,status,id,job_number,engagement_property__property__property_type,engagement_property__property__property_subtype";
        var scheduledAppraisalUrlBase = "/api/v1/scheduled-appraisal/?fields=engagement_property__property__id,engagement_property__property__name,due_date,engagement_property__engagement__client__name,engagement_property__engagement__client__id,id,job_number,engagement_property__property__property_type,engagement_property__property__property_subtype";
        if (showFee) {
            appraisalUrlBase += ",fee";
            scheduledAppraisalUrlBase += ",fee";
        }
        var filter = $("#Filter").val();
        var officeId = $("#OfficeList").val();
        if (officeId != "") {
            appraisalUrlBase += "&office=" + officeId;
            scheduledAppraisalUrlBase += "&office=" + officeId;
        }

        var $statusOpt = $('#StatusFilter option:selected');

        if (filter == "Date Range") {
            appraisalUrlBase += "&due_date__gte=" + $("#StDate").val() + "&due_date__lte=" + $("#EndDate").val();
            scheduledAppraisalUrl = scheduledAppraisalUrlBase + "&due_date__gte=" + $("#StDate").val() + "&due_date__lte=" + $("#EndDate").val();
        } else if (filter == "Quarters") {
            appraisalUrlBase += "&" + getQuarterDatesRequestURL($("#QuartersQt").val(), $("#QuartersYrs").val());
            scheduledAppraisalUrl = scheduledAppraisalUrlBase + "&" + getQuarterDatesRequestURL($("#QuartersQt").val(), $("#QuartersYrs").val());
        }
        if ($('#StatusFilter option:selected').attr('data-statuses') != "ALL") {
            appraisalUrlBase += "&status__in=" + $statusOpt.data('statuses');
            scheduledAppraisalUrl += "&status__in=" + $statusOpt.data('statuses');
        }
        if ($statusOpt.attr('data-statuses') != "ALL" && $statusOpt.attr('data-statuses') != "IN_PROGRESS,INFO_NEEDED,DRAFT_SENT,COMPLETED,SCHEDULED," && $statusOpt.attr('data-statuses') != "SCHEDULED") {
            //Set date early enough to guarentee no results
            scheduledAppraisalUrl = scheduledAppraisalUrlBase + "&due_date__lte=2000-01-01";
        }
        return [appraisalUrlBase, scheduledAppraisalUrl];
    }

    var loadData = function ($elm, urls) {
        _.each(urls, function (url, idx) {
            loaded[idx] = false;
            NPVNexus.Status.loading();
            $.ajax({
                async: true,
                dataType: "json",
                data: "GET",
                url: url,
                contentType: "application/json",
                success: function (response) {
                    loaded[idx] = true;
                    dataLoad[idx] = response.objects
                    if (loaded[0] && loaded[1]) {
                        NPVNexus.Status.loading("* Rendering...");
                        activeCollection = dataLoad[0].concat(dataLoad[1]);
                        // Using timer to allow browser time to repaint before rendering the template - RF
                        //if(winTmr != null){
                        //    window.clearTimeout(winTmr);
                        //}
                        //winTmr = window.setTimeout(function(){
                        //    renderTable($elm, { rs: dataLoad });
                        //    $('table.footable').trigger('footable_initialized');
                        //    NPVNexus.Status.removeLoading();
                        //}, 20);
                        renderTable($elm, { rs: activeCollection });
                        //$('table.footable').trigger('footable_initialized');
                        $('table.footable').trigger('footable_redraw');

                        NPVNexus.Status.removeLoading();
                    }
                },
                error: function (xhr, text_status, error_thrown) {
                    if (xhr.status == 500) {
                        NPVNexus.Status.error();
                        console.log(text_status);
                    }

                }
            });
        });
    };

    /** Convert the date to a usable format 
     * from the date picker to python datetime-ish
     **/
    var convertDate = function (date) {
        var date_array = date.split('/');
        var month = date_array[0];
        var day = date_array[1];
        var year = date_array[2];
        var conv_date = year + "-" + month + "-" + day;
        return conv_date;

    };

    var renderTable = function ($elm, data) {
        //if (tableElm == null){
        //    tableElm = $elm.clone();
        //}
        var false_class_name = NPVNexus.Formatters.friendlyName(false);

        var columns = [
             { "sTitle": "Due Date", "mData": "due_date" },
             { "sTitle": "Job #", "mData": "job_number" },
             { "sTitle": "Appraiser", "mData": "lead_appraiser" },
             { "sTitle": "Client", "mData": "engagement_property__engagement__client__name" },
             { "sTitle": "Type", "mData": "engagement_property__property__property_type" },
             { "sTitle": "Property", "mData": "engagement_property__property__name" },
             { "sTitle": "Address", "mData": "base_address" },
             { "sTitle": "City", "mData": "base_address" },
             { "sTitle": "State", "mData": "base_address" },
             { "sTitle": "Status", "mData": "status" },
             { "sTitle": "Invoiced", "mData": "invoice_sent" }
        ];
        if (showFee) {
            columns.push({ "sTitle": "Fee", "mData": "fee" });
        }
        if (table != null) {
            table.fnDestroy();
        }
        table = $('#Appraisals').dataTable({
            "aaData": data.rs,
            "sDom": "frtpiS",
            "iDisplayLength": 20,
            "bAutoWidth": false,
            "bDeferRender": true,
            "aaSorting": [[0, "desc"]],
            "aoColumns": columns,
            "aoColumnDefs": [{
                "aTargets": [0],
                "mData": "due_date",
                "mRender": function (data, type, full) {
                    var ret = "";
                    //   console.log(data);
                    if (data != null) {
                        ret = data;
                    }
                    return ret;
                }
            }, {
                "aTargets": [1],
                "mData": "job_number",
                "mRender": function (data, type, full) {
                    var ret = "";
                    if (data != null) {
                        if (full.status == "SCHEDULED") {
                            ret = "<a href='" + full.absolute_url + "/'>" + data + "</a>";
                        } else {
                            ret = "<a href='/appraisal/" + full.id + "'>" + data + "</a>";
                        }
                    }
                    return ret;
                }
            }, {
                "aTargets": [2],
                "mData": "lead_appraiser",
                "mRender": function (data, type, full) {
                    var ret = "";
                    if (data != null) {
                        ret = '<a href="#">' + data + '</a>';
                    }
                    return ret;
                }
            }, {
                "aTargets": [3],
                "mData": "engagement_property__engagement__client__name",
                "mRender": function (data, type, full) {
                    var ret = "";
                    if (data != null) {
                        ret = "<a href='/client/" + full.engagement_property__engagement__client__id + "'>" + data + "</a>";
                    }
                    return ret;
                }
            }, {
                "aTargets": [4],
                "mData": "engagement_property__property__property_type",
                "mRender": function (data, type, full) {
                    var ret = "";
                    if (data != null) {
                        ret = data;
                        ret += (full.engagement_property__property__property_subtype) ? '<i class="expand glyphicon glyphicon-question-sign tooltipicon" data-toggle="tooltip" data-placement="top" title="' + full.engagement_property__property__property_subtype + '"> </i>' : "";
                    }
                    return ret;
                }
            }, {
                "aTargets": [5],
                "mData": "engagement_property__property__name",
                "mRender": function (data, type, full) {
                    var ret = "";
                    if (data != null) {
                        if (full.portfolio)
                            ret = "<a href='" + full.portfolio + "'><strong>Portfolio</strong></a>: ";
                        ret += "<a href='/property/" + full.engagement_property__property__id + "'>" + data + "</a>";
                    }
                    return ret;
                }
            }, {
                "aTargets": [6],
                "mRender": function (data, type, full) {
                    var ret = "";
                    if (data != null && data != 'None') {
                        var addy = JSON.parse(data).address1;
                        // console.log(city);
                        ret = addy;
                    }
                    return ret;
                }
            }, {
                "aTargets": [7],
                "mRender": function (data, type, full) {
                    var ret = "";
                    if (data != null && data != 'None') {
                        var city = JSON.parse(data).city;
                        // console.log(city);
                        ret = city;
                    }
                    return ret;
                }
            }, {
                "aTargets": [8],
                "mRender": function (data, type, full) {
                    var ret = "";
                    if (data != null && data != 'None') {
                        var state = JSON.parse(data).state;
                        ret = state;
                    }
                    return ret;
                }
            }, {
                "aTargets": [9],
                "mRender": function (data, type, full) {
                    var ret = "";
                    if (data != null && data != 'None') {
                        if (full.status_display) {
                            ret = full.status_display;
                        } else {
                            ret = NPVNexus.Formatters.friendlyName(data);
                        }
                    }
                    return ret;
                }
            }, {
                "aTargets": [10],
                "mData": "invoice_sent",
                "mRender": function (data, type, full) {
                    var ret = "<span class='" + false_class_name + "'></span>";
                    if (data != null) {
                        var class_name = NPVNexus.Formatters.friendlyName(data);
                        // ret = "<span class='"+class_name+"'></span>";
                        ret = class_name;
                    }
                    return ret;
                }
            }
            ], "fnDrawCallback": function (oSettings) {
                if (!tableElm) {
                    tableElm = $elm.footable({
                    });
                }
                $('.tooltipicon').tooltip({});
                tableElm.trigger('footable_redraw');
            }, 'fnInitComplete': function () {
                $("#TableHead #Appraisals_filter").remove();
                $("#TableHead").prepend($("#Appraisals_filter"));
                $("#Appraisals_filter input").before(' <i class="glyphicon glyphicon-info-sign tooltipicon" data-toggle="tooltip" data-placement="top" title="Filter result set with search terms"></i> ');
                $('.tooltipicon').tooltip({});
            }, "fnHeaderCallback": function (nHead, aData, iStart, iEnd, aiDisplay) {
                if (headTmr) {
                    window.clearTimeout(headTmr);
                }
                headTmr = window.setTimeout(function () {
                    $("#Appraisals thead th").each(function (idx, elm) {
                        var visible = "none";
                        if ($(elm).is(":visible")) {
                            visible = "table-cell";
                        }
                        $(nHead).find("th:eq(" + idx + ")").css("display", visible);
                        if ($(elm).html() == "City") {
                            $(elm).addClass("city");
                        }
                        if ($(elm).html() == "State") {
                            $(elm).addClass("state");
                        }
                        if ($(elm).html() == "Status") {
                            $(elm).addClass("status");
                        }
                        if ($(elm).html() == "Type") {
                            $(elm).addClass("type");
                        }
                        if ($(elm).html() == "Address") {
                            $(elm).addClass("address");
                        }
                        if ($(elm).html() == "Appraiser") {
                            $(elm).addClass("appraiser");
                        }
                        if ($(elm).html() == "Invoiced") {
                            $(elm).addClass("invoiced");
                        }
                        if ($(elm).hasClass("sorting") && $(elm).find(".footable-sort-indicator").length <= 0) {
                            $(elm).append("<span class='footable-sort-indicator'></span>");
                        }
                    });
                    // table.fnAdjustColumnSizing(false);
                }, 300);
            }
        });
        var tot = data.rs.length;
        $(".totals b").html(tot);
    }
    var getQuarterDatesRequestURL = function (quarter, year) {
        var start_date = "";
        var end_date = "";
        var URL = "";
        if (quarter == 1) {
            start_date = year + "-01-01";
            end_date = year + "-03-31";
        } else if (quarter == 2) {
            start_date = year + "-04-01";
            end_date = year + "-06-30";
        } else if (quarter == 3) {
            start_date = year + "-07-01";
            end_date = year + "-09-30";
        } else if (quarter == 4) {
            start_date = year + "-10-01";
            end_date = year + "-12-31";
        }
        // TODO: unhardcode URL
        URL = "due_date__gte=" + start_date + "&due_date__lte=" + end_date;
        return URL;
    }
    return {
        init: Init,
        fee: fee
    };
}());

//View Property Page
NPVNexus.View_Property = (function () {
    //Variables
    var fee = 0;
    //Public
    var Init = function () {

        $(document).ready(function () {
            footable = $('table.footable').footable({});
        });
    };

    return {
        init: Init,
        fee: fee
    };
}());

//View Property Page
NPVNexus.View_Portfolio = (function () {
    //Variables
    //Variables
    var footable;
    var tmeOut = null;

    //Public
    var Init = function () {
        $(document).ready(function () {
            //Set Up page Event Handlers
            eventHandlers();
            //Instantiate FooTables
            footable = $('table').footable({});
        });

    };
    var SetUpMap = function (elm, coords) {
        if (coords.length > 0) {
            var theSpot = new google.maps.LatLng(coords[0][0], coords[0][1]);
            var mapOptions = { center: theSpot, zoom: 13 };
            var map = new google.maps.Map(elm, mapOptions);

            _.each(coords, function (element, index) {
                var coord = new google.maps.Marker({
                    position: new google.maps.LatLng(coords[index][0], coords[index][1]), map: map
                });
            });
        }
    }

    //Private
    var eventHandlers = function () {

        // Footer Table Btn Toggle
        $("#BtnActive,#BtnHistorical").click(function () {

            setTable($(this).attr("id"));

        });


    };
    var setTable = function (active) {
        $(".tablebtn.active").removeClass("active");
        $("#" + active).addClass("active");
        switch (active) {
            case "BtnActive":
                $("#Active").show().trigger('footable_resize');
                $("#Historical,#Similar").hide();
                break;
            case "BtnHistorical":
                $("#Historical").show().trigger('footable_resize');
                $("#Active,#Similar").hide();
                break;
        }
        $('table.footable').trigger('footable_redraw');
    };
    return {
        init: Init,
        setUpMap: SetUpMap
    };
}());

//View Client Page
NPVNexus.View_Client = (function () {
    //Public
    var Init = function () {
        $(document).ready(function () {
            footable = $('table.footable').footable({});
            eventHandlers();
        });
    };
    var eventHandlers = function () {
        $("#BtnActive").click(function () {
            $("#Active").show();
            $("#Historical").hide();
            $("#BtnActive").addClass("active");
            $("#BtnHistorical").removeClass("active");
        });

        $("#BtnHistorical").click(function () {
            $("#Active").hide();
            $("#Historical").show();
            $(".btn-default.active").removeClass("active");
            $("#BtnHistorical").addClass("active");
        });
        $('#Update').on('click', function (e) {
            NPVNexus.Status.loading();
            $.ajax({
                type: 'PATCH',
                dataType: 'JSON',
                url: $('#Update').attr('action'),
                data: JSON.stringify({
                    'appraiser_must_sign': $("#AppraiserSign").prop('checked'),
                    'appraiser_must_inspect': $("#AppraiserInspect").prop('checked'),
                    'invoice_delivery': $("#InvoiceDelivery").html(),
                    'report_delivery': $("#ReportDelivery").val(),
                    'invoice_timing': $("#InvoiceTiming").val(),
                    'requirements_url': $("#ClientRequirements").val(),
                    'notes': $("#ClientNotes").html(),
                }),
                contentType: 'application/json',
                success: function (data) {
                    var test = $("#ClientRequirements").val()
                    NPVNexus.Status.success();
                    if (test != '') {
                        $('#ViewReq').attr('href', test).show();
                    } else {
                        $('#ViewReq').attr('href', test).hide();

                    }
                },
                error: function (data) {
                    NPVNexus.Status.error();
                    if ($("#ClientRequirements").val() != 'None') {
                        $("#ClientRequirements").val('None');
                        alert('Please enter a valid URL for Client Requirements.');
                        $('#ViewReq').hide();
                    }

                },
            });
        });
    };

    return {
        init: Init
    };
}());

//View Employee App Page
NPVNexus.View_Employee_Appraisals = (function () {
    //Variables
    var clients, assign, employee, footable, today, current_year, office, date_min, date_max;
    var fee = 0;
    //Public
    var Init = function (cli, emp) {
        // apprsls = app;
        clients = cli;
        employee = emp;
        today = new Date();
        cMonth = today.getMonth() + 1;
        office = "ALL";
        current_year = today.getFullYear();
        $(document).ready(function () {
            eventHandlers();
            setUp();
        });
    };
    var setUp = function () {
        $("#Filter option:eq(0)").attr('selected', 'selected');
        NPVNexus.GetYearRange(2010, $("#QuarterYrs"));
        //Load Initial Employees
        loadEmployees($("#EmployeesDiv"), employee, null);

    };
    //Private
    var eventHandlers = function () {
        $("#QuarterBtn,#DateBtn").click(function () {
            var $office = $("#OfficeList").val();
            url = "/api/v1/employee/?split__gt=0";
            if ($office != office) {
                office = $("#OfficeList").val();
                url = "/api/v1/employee/?office__name=" + office + "&split__gt=0";
                if (office == "ALL") {
                    url = "/api/v1/employee/?split__gt=0.0";
                }
                loadEmployees($("#EmployeesDiv"), null, url);
            } else {
                //Redraw open panels
                $(".emp-link.opened").each(function () {
                    var $this = $(this);
                    var this_elm = $this.parents(".panel-heading").siblings(".panel-collapse").find("tbody");
                    var this_id = $this.parents(".panel-heading").siblings(".panel-collapse").attr("id");
                    var url = gernerateAppraisalUrl(this_id, false);
                    loadEmpAssigns(this_elm, null, url);
                    // console.log();
                });
            }
        });
        $('#Filter').change(function () {
            var $value = $("#Filter").val();
            if ($value == "Date Range") {
                $('.quarters').toggle();
                $('.dates').show();
            } else {
                $('.quarters').toggle();
                $('.dates').toggle();
            }
        });

        $("#QuarterYrs > option").each(function () {
            if ($(this).val() == current_year) {
                $(this).prop('selected', 'true');
            }
        });

        $("#QuartersQt > option").each(function () {
            if ($(this).val() == getCurrentQuarter()) {
                $(this).prop('selected', 'true');
            }
        });


        $('#EmployeesDiv').delegate('.emp-link', 'click', function (e) {
            e.preventDefault();
            if (!$(this).hasClass("opened")) {
                $(this).closest(".panel-heading").siblings('.panel-collapse').slideDown();
                $(this).addClass("opened");
                $(window).scrollTop($(this).closest(".panel-heading").offset().top);
                var $output = $(this).closest(".panel-heading").siblings('.panel-collapse').find("tbody");
                var emp_id = $(this).closest(".panel-heading").siblings('.panel-collapse').attr('id');
                url = gernerateAppraisalUrl(emp_id, false);
                loadEmpAssigns($output, null, url);
            } else {
                $(this).removeClass("opened");
                $(this).closest(".panel-heading").siblings('.panel-collapse').slideUp();

            }
        });
    };

    var getCurrentQuarter = function () {
        var today = new Date();
        var cMonth = today.getMonth() + 1;
        var cQuarter = 0;
        if (cMonth > 0 && cMonth < 4) {
            cQuarter = 1;
        } else if (cMonth > 3 && cMonth < 7) {
            cQuarter = 2;
        } else if (cMonth > 6 && cMonth < 10) {
            cQuarter = 3;
        } else if (cMonth > 9 && cMonth < 13) {
            cQuarter = 4;
        }
        return cQuarter;
    }

    var loadEmployees = function ($elm, data, url) {
        var passData = {};
        var tmp = $("#AppraiserTemplate").html();
        if (!data && url) {
            NPVNexus.Status.loading();
            $.ajax({
                url: url,
                type: "GET",
                dataType: "json",
                contentType: "application/json",
                success: function (response) {
                    NPVNexus.Status.success("Updated");
                    if (response.objects) {
                        passData = { rs: response.objects };
                        render($elm, tmp, passData);
                    }
                },
                error: function (response) {
                    console.log(response.responseText);
                    App.status.error();
                }
            });
        } else {
            passData = { rs: data };
            render($elm, tmp, passData);
        }
    };
    var loadEmpAssigns = function ($elm, data, url) {
        var passData = { rs: null };
        $elm.html('<h3 class="loading">Loading...</h3>');
        var tmp = $("#AppraisalTemplate").html();
        if (!data && url) {
            NPVNexus.Status.loading();
            $.ajax({
                type: 'GET',
                async: false,
                dataType: 'json',
                contentType: 'application/json',
                url: url,
                success: function (response) {
                    NPVNexus.Status.removeLoading();
                    if (response.meta.total_count != 0) {
                        passData = { rs: response.objects, ttl: response.meta.total_count };
                        passTest = [];
                        _.each(passData.rs, function (app) {
                            var url = app.appraisal + "?fields=engagement_property__property__id,engagement_property__property__name,due_date,invoice_sent,hours_spent,engagement_property__property__client__name,engagement_property__property__client__id,fee,status,id,job_number";
                            $.ajax({
                                url: url,
                                type: "GET",
                                dataType: "json",
                                contentType: "application/json",
                                async: false,
                                success: function (appr) {
                                    // console.log(app.appraisal);
                                    app.extra = appr;
                                },
                                error: function (appr) {
                                    console.log(appr.responseText);
                                }
                            });
                        });
                        // console.log(passData.rs);
                    }
                    $elm.closest("table").siblings(".total-records").find("span").html(response.meta.total_count);
                    render($elm, tmp, passData);
                },
                error: function (response) {
                    console.log(response);
                }
            });

        }
        else {
            passData.rs = data;
            render($elm, tmp, passData);
        }
    };
    var render = function ($elm, tmp, data) {
        $elm.html(_.template(tmp, data));
        $elm.closest(".footable").footable();
        $elm.closest(".footable").trigger('footable_redraw');
        //if (footable == null){
        //    footable = $(".footable").footable();

        //} else {
        //    footable.trigger('footable_redraw');
        //}
        var tot = NPVNexus.View_Employee_Appraisals.fee;
        $elm.closest("table").siblings(".totals").find("span").html(tot);

    };

    function getEmpQuarterDatesRequestURL(quarter, year) {
        var start_date = "";
        var end_date = "";
        var URL = "";
        if (quarter == 1) {
            start_date = year + "-01-01";
            end_date = year + "-03-31";
        } else if (quarter == 2) {
            start_date = year + "-04-01";
            end_date = year + "-06-30";
        } else if (quarter == 3) {
            start_date = year + "-07-01";
            end_date = year + "-09-30";
        } else if (quarter == 4) {
            start_date = year + "-10-01";
            end_date = year + "-12-31";
        }
        URL = "&appraisal__due_date__gte=" + start_date + "&appraisal__due_date__lte=" + end_date;
        return URL;
    }

    var gernerateAppraisalUrl = function (emp_id, init) {
        var baseUrl = "/api/v1/assignment/?employee=" + emp_id + "&role__in=APPRAISER,INSPECTOR,PROCURER,REVIEWER";
        // var office = $("#office-list").val();
        // if (office != "ALL"){
        //     baseUrl += "&ofice__name=" + office;
        // }
        if (init) {
            var today = new Date();
            var year = today.getFullYear();
            var month = today.getMonth() + 1;
            var quarter = 0;
            var end = "";
            if (month > 1 && month < 4) {
                quarter = 1;
            } else if (month > 3 && month < 7) {
                quarter = 2;
            } else if (month > 6 && month < 10) {
                quarter = 3;
            } else if (month > 9 && month < 13) {
                quarter = 4;
            }
            baseUrl += getEmpQuarterDatesRequestURL(quarter, year);
        }
        else if ($('#Filter').val() == "Date Range") {
            baseUrl += "&appraisal__due_date__gte=" + $("#StDate").val() + "&appraisal__due_date__lte=" + $("#EndDate").val();
        }
        else {
            baseUrl += getEmpQuarterDatesRequestURL($("#QuartersQt").val(), $("#QuarterYrs").val())
        }
        var stat = $("#StatusFilter").val();
        if (stat != "ALL" && stat != "ALL w/o Cancelled") {
            baseUrl += "&appraisal__status=" + stat;
        } else if (stat == "ALL w/o Cancelled") {
            baseUrl += "&appraisal__status__in=COMPLETED&appraisal__status__in=IN_PROGRESS&appraisal__status__in=INFO_NEEDED&appraisal__status__in=DRAFT_SENT";
        }
        return baseUrl;
    };

    return {
        init: Init,
        fee: fee
    };
}());

//View Work In Progress Page
NPVNexus.View_Work_In_Progress = (function () {

    //Public
    var Init = function () {
        $(document).ready(function () {
            // eventHandlers();
            setUp();
        });
    };
    var setUp = function () {
        var chiLastName = "";
        var chiFee = 0;
        $(".chicago .line-item").each(function () {
            $this = $(this);
            if (chiLastName == $this.find(".name").html() || chiLastName == "") {
                chiLastName = $this.find(".name").html();
                chiFee += parseFloat($this.find(".fee").attr("data-val"));
            } else {
                chiLastName = $this.find(".name").html();
                $this.before('<tr class="summary"><td colspan="11"><div class="totals"><b>Total:' + NPVNexus.Formatters.currency(chiFee) + '</b></div></td></tr>');
                chiFee = parseFloat($this.find(".fee").attr("data-val"));
            }

            if ($this.is(':last-child')) {
                //console.log("last");
                //chiFee += parseFloat($this.find(".fee").attr("data-val"));
                $this.after('<tr class="summary"><td colspan="11"><div class="totals"><b>Total:' + NPVNexus.Formatters.currency(chiFee) + '</b></div></td></tr>');
            }
            chiLastName = $this.find(".name").html();
        });
        var atlLastName = "";
        var atlFee = 0;
        $(".atlanta .line-item").each(function () {
            $this = $(this);
            if (atlLastName == $this.find(".name").html() || atlLastName == "") {
                atlFee += parseFloat($this.find(".fee").attr("data-val"));
            } else {
                atlLastName = $this.find(".name").html();
                $this.before('<tr class="summary"><td colspan="11"><div class="totals"><b>Total:' + NPVNexus.Formatters.currency(atlFee) + '</b></div></td></tr>');
                atlFee = parseFloat($this.find(".fee").attr("data-val"));
            }
            if ($this.is(':last-child')) {
                $this.after('<tr class="summary"><td colspan="11"><div class="totals"><b>Total:' + NPVNexus.Formatters.currency(atlFee) + '</b></div></td></tr>');
            }
            atlLastName = $this.find(".name").html();

        });
        var newpLastName = "";
        var newpFee = 0;
        $(".newport .line-item").each(function () {
            $this = $(this);
            if (newpLastName == $this.find(".name").html() || newpLastName == "") {
                newpFee += parseFloat($this.find(".fee").attr("data-val"));
            } else {
                newpLastName = $this.find(".name").html()
                $this.before('<tr class="summary"><td colspan="11"><div class="totals"><b>Total:' + NPVNexus.Formatters.currency(newpFee) + '</b></div></td></tr>');
                newpFee = parseFloat($this.find(".fee").attr("data-val"));
            }
            if ($this.is(':last-child')) {
                $this.after('<tr class="summary"><td colspan="11"><div class="totals"><b>Total:' + NPVNexus.Formatters.currency(newpFee) + '</b></div></td></tr>');
            }
            newpLastName = $this.find(".name").html();

        });
    };


    return {
        init: Init
    };
}());

NPVNexus.GetYearRange = function (startY, $elm) {
    var years = [], curYear = new Date().getFullYear();
    var minYear = startY || 2010;

    while (minYear <= curYear + 5) {
        years.push(minYear++);
    }
    _.each(years, function (yr) {
        var selected = (yr == curYear) ? "selected='selected'" : "";
        $elm.append("<option value='" + yr + "' " + selected + ">" + yr + "</option>");
    });
}

/**
 * Utilities and the like useful across the different parts of the Nexus app.
 *
 * NOTE: Requires Underscore.js
 */


/** Keyboard Constants */

var ENTER_KEY = 13;
var ESC_KEY = 27;

// TODO: setup window.npv namespace here?


/**
 * Extract and return just the path part of the Location response header.
 *
 * Obviously you could make this more generic, but until we have the need...
 *
 * @param {jqXHR} xhr The AJAX response object to extract the path from.
 */
function location_path(xhr) {
    var reg = /.+?\:\/\/.+?(\/.+?)(?:#|\?|$)/;
    return reg.exec(xhr.getResponseHeader("Location"))[1];
}


/**
 * Break a flat list into sub lists of a supplied size.
 *
 * @param fillvalue data to use to pad out the last chunk to the length of len
 * @param rmfillchunk whether to remove last chunk if it only has fillvalues
 */
function chunk(arr, len, fillvalue, rmfillchunk) {
    fillvalue = (typeof fillvalue === 'undefined') ? null : fillvalue;
    rmfillchunk = (typeof rmfillchunk === 'undefined') ? true : rmfillchunk;

    var chunks = [];
    var i = 0;
    var n = arr.length;

    while (i < n) {
        chunks.push(arr.slice(i, i += len));
    }

    while (chunks[chunks.length - 1].length < len) {
        chunks[chunks.length - 1].push(fillvalue);
    }

    if (rmfillchunk && !_.without(_.last(chunks), fillvalue).length) {
        chunks.length = chunks.length - 1;
    }

    return chunks;
}


/**
 * Return blank (default null) if val is falsey otherwise return val trimmed.
 */
function handle_empty(val, blank) {
    blank = (typeof blank === 'undefined') ? null : blank;
    if (!val || !val.trim()) {
        return blank;
    }
    return val.trim();
}


/**
 * Shortcut to parse then format a currency value, handling empty and null.
 */
function currency_value(val, blank) {
    // TODO: This will (incorrectly?) return 0 for empty. Fix or verify correct.
    blank = (typeof blank === 'undefined') ? null : blank;
    var parsed = parseFloat(handle_empty(val, 0)) || blank;
    if (parsed && parsed !== blank) {
        return parsed.toFixed(2);
    }
    return blank;
}


var SaveAlert = (function() {
    "use strict";

    var elem, hideHandler, that = {};

    that.init = function(options) {
        elem = $(options.selector);
    };

    that.show = function(text, success) {
        success = (typeof success === 'undefined') ? null : success;
        if (success != null) {
            elem.toggleClass('alert-success', success);
            elem.toggleClass('alert-danger', !success);
        }
        clearTimeout(hideHandler);
        elem.find("span").html(text);
        elem.delay(200).fadeIn().delay(3000).fadeOut();
    };

    that.success = function(text) {
        that.show(text, true);
    };

    that.error = function(text) {
        that.show(text, false);
    };

    return that;
}());

