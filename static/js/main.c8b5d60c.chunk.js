(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[function(e,n,o){e.exports=o(2)},function(e,n,o){},function(e,n,o){"use strict";o.r(n);var r={};o.r(r),o.d(r,"useState",function(){return W}),o.d(r,"useReducer",function(){return O}),o.d(r,"useEffect",function(){return T}),o.d(r,"useLayoutEffect",function(){return R}),o.d(r,"useRef",function(){return j}),o.d(r,"useImperativeHandle",function(){return I}),o.d(r,"useMemo",function(){return F}),o.d(r,"useCallback",function(){return V}),o.d(r,"useContext",function(){return $}),o.d(r,"useDebugValue",function(){return z});var t,i,a,l,u,s={},p=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;function f(e,n){for(var o in n)e[o]=n[o];return e}function h(e){var n=e.parentNode;n&&n.removeChild(e)}function d(e,n,o){var r,t,i,a,l=arguments;if(n=f({},n),arguments.length>3)for(o=[o],r=3;r<arguments.length;r++)o.push(l[r]);if(null!=o&&(n.children=o),null!=e&&null!=e.defaultProps)for(t in e.defaultProps)void 0===n[t]&&(n[t]=e.defaultProps[t]);return(i=n.ref)&&delete n.ref,(a=n.key)&&delete n.key,_(e,n,null,a,i)}function _(e,n,o,r,i){var a={type:e,props:n,text:o,key:r,ref:i,__k:null,__e:null,l:null,__c:null};return a._=a,t.vnode&&t.vnode(a),a}function m(){}function g(e){if(null==e||"boolean"==typeof e)return null;if("string"==typeof e||"number"==typeof e)return _(null,null,e,null,null);if(Array.isArray(e))return d(m,null,e);if(null!=e.__e||null!=e.__c){var n=_(e.type,e.props,e.text,e.key,null);return n.__e=e.__e,n}return e}function v(e,n){this.props=e,this.context=n}function k(e){!e.__d&&(e.__d=!0)&&1===i.push(e)&&(t.debounceRendering||a)(y)}function y(){var e;for(i.sort(function(e,n){return n.__b-e.__b});e=i.pop();)e.__d&&e.forceUpdate(!1)}function C(e,n,o,r,t,i,a,l,u){var c,f,d,_,v,k,y,C=n.__k||M(n.props.children,n.__k=[],g,!0),q=null!=o&&o.__k||p,G=q.length;if(u==s)if(u=null,null!=i)for(f=0;null==u&&f<i.length;f++)u=i[f];else for(f=0;null==u&&f<G;f++)u=q[f]&&q[f].__e,y=q[f];for(f=0;f<C.length;f++)if(null!=(c=C[f]=g(C[f]))){if(null===(_=q[f])||null!=_&&(null==c.key&&null==_.key?c.type===_.type:c.key===_.key))q[f]=void 0;else for(d=0;d<G;d++){if(null!=(_=q[d])&&(null==c.key&&null==_.key?c.type===_.type:c.key===_.key)){q[d]=void 0,G!==C.length&&_.type!==(y&&y.type)&&(u=_.__e);break}_=null}if(null!=(v=S(e,c,_,r,t,i,a,l,null,u))){if(null!=c.l)v=c.l;else if(i==_||v!=u||null==v.parentNode)e:if(null==u||u.parentNode!==e)e.appendChild(v);else{for(k=u,d=0;(k=k.nextSibling)&&d++<G/2;)if(k===v)break e;e.insertBefore(v,u)}u=v.nextSibling}}if(null!=i&&n.type!==m)for(f=i.length;f--;)null!=i[f]&&h(i[f]);for(f=G;f--;)null!=q[f]&&A(q[f],l)}function M(e,n,o,r){if(null==n&&(n=[]),null==e||"boolean"==typeof e)r&&n.push(null);else if(Array.isArray(e))for(var t=0;t<e.length;t++)M(e[t],n,o,r);else n.push(o?o(e):e);return n}function q(e,n,o,r,t){var i,a,u,s,p,f;if("class"!==n&&"className"!==n||(n=t?"class":"className"),"style"===n)if(a=e.style,"string"==typeof o)a.cssText=o;else{if("string"==typeof r)a.cssText="";else for(u in r)null!=o&&u in o||a.setProperty(u.replace(l,"-"),"");for(s in o)i=o[s],null!=r&&i===r[s]||a.setProperty(s.replace(l,"-"),"number"==typeof i&&!1===c.test(s)?i+"px":i)}else{if("dangerouslySetInnerHTML"===n)return;"o"===n[0]&&"n"===n[1]?(p=n!==(n=n.replace(/Capture$/,"")),f=n.toLowerCase(),n=(f in self?f:n).substring(2),o?r||e.addEventListener(n,G,p):e.removeEventListener(n,G,p),(e.u||(e.u={}))[n]=o):"list"!==n&&"tagName"!==n&&!t&&n in e?e[n]=null==o?"":o:null==o||!1===o?n!==(n=n.replace(/^xlink:?/,""))?e.removeAttributeNS("http://www.w3.org/1999/xlink",n.toLowerCase()):e.removeAttribute(n):"function"!=typeof o&&(n!==(n=n.replace(/^xlink:?/,""))?e.setAttributeNS("http://www.w3.org/1999/xlink",n.toLowerCase(),o):e.setAttribute(n,o))}}function G(e){return this.u[e.type](t.event?t.event(e):e)}function S(e,n,o,r,i,a,l,u,p,c){var h,d,_,k,y,M,q,G,b,K,J,x,H,U;if(null==o||null==n||o.type!==n.type||o.key!==n.key){if(null!=o&&A(o,u),null==n)return null;o=s}if(n._!==n)return null;t.diff&&t.diff(n),_=!1,q=n.type;try{e:if(o.type===m||q===m){if(C(e,n,o,r,i,a,l,h,c),n.__k.length&&null!=n.__k[0])for(n.__e=n.__k[0].__e,b=n.__k.length;b--&&(n.l=(d=n.__k[b])&&(d.l||d.__e),!n.l););}else if("function"==typeof q){if(J=(K=q.contextType)&&r[K.__c],x=null!=K?J?J.props.value:K.__p:r,o.__c?(G=(h=n.__c=o.__c).__p=h.__E,n.__e=o.__e):(q.prototype&&q.prototype.render?n.__c=h=new q(n.props,x):(n.__c=h=new v(n.props,x),h.constructor=q,h.render=N),h.__a=u,J&&J.sub(h),h.props=n.props,h.state||(h.state={}),h.context=x,h.__n=r,_=h.__d=!0,h.__h=[]),h.__v=n,null==h.__s&&(h.__s=h.state),null!=q.getDerivedStateFromProps&&f(h.__s==h.state?h.__s=f({},h.__s):h.__s,q.getDerivedStateFromProps(n.props,h.__s)),_)null==q.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&l.push(h);else{if(null==q.getDerivedStateFromProps&&null==p&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(n.props,x),!p&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(n.props,h.__s,x)){h.props=n.props,h.state=h.__s,h.__d=!1,n.l=o.l;break e}null!=h.componentWillUpdate&&h.componentWillUpdate(n.props,h.__s,x)}for(k=h.props,y=h.state,h.context=x,h.props=n.props,h.state=h.__s,t.render&&t.render(n),H=h.__t||null,h.__d=!1,U=h.__t=g(h.render(h.props,h.state,h.context)),null!=h.getChildContext&&(r=f(f({},r),h.getChildContext())),_||null==h.getSnapshotBeforeUpdate||(M=h.getSnapshotBeforeUpdate(k,y)),h.__b=u?(u.__b||0)+1:0,h.base=n.__e=S(e,U,H,r,i,a,l,h,null,c),null!=U&&(n.l=U.l),h.__P=e,n.ref&&w(n.ref,h,u);d=h.__h.pop();)d.call(h);_||null==k||null==h.componentDidUpdate||h.componentDidUpdate(k,y,M)}else n.__e=E(o.__e,n,o,r,i,a,l,u),n.ref&&o.ref!==n.ref&&w(n.ref,n.__e,u);G&&(h.__E=h.__p=null),t.diffed&&t.diffed(n)}catch(B){P(B,u)}return n.__e}function b(e,n){for(var o;o=e.pop();)try{o.componentDidMount()}catch(r){P(r,o.__a)}t.commit&&t.commit(n)}function E(e,n,o,r,t,i,a,l){var u,c,f,h,d,_,m,g,v=e;if(t="svg"===n.type||t,null==e&&null!=i)for(u=0;u<i.length;u++)if(null!=(c=i[u])&&(null===n.type?3===c.nodeType:c.localName===n.type)){e=c,i[u]=null;break}if(null==e&&(e=null===n.type?document.createTextNode(n.text):t?document.createElementNS("http://www.w3.org/2000/svg",n.type):document.createElement(n.type),i=null),null===n.type)null!=v&&e!==v||n.text===o.text||(e.data=n.text);else if(null!=i&&null!=e.childNodes&&(i=p.slice.call(e.childNodes)),n!==o){if(h=n.props,null==(f=o.props)&&(f={},null!=i))for(_=0;_<e.attributes.length;_++)f["class"==(d=e.attributes[_].name)&&h.className?"className":d]=e.attributes[_].value;m=f.dangerouslySetInnerHTML,((g=h.dangerouslySetInnerHTML)||m)&&(g&&m&&g.__html==m.__html||(e.innerHTML=g&&g.__html||"")),h.multiple&&(e.multiple=h.multiple),C(e,n,o,r,"foreignObject"!==n.type&&t,i,a,l,s),function(e,n,o,r){var t,i,a=Object.keys(n).sort();for(t=0;t<a.length;t++)"children"===a[t]||"key"===a[t]||o&&("value"===a[t]||"checked"===a[t]?e:o)[a[t]]===n[a[t]]||q(e,a[t],n[a[t]],o[a[t]],r);for(i in o)"children"===i||"key"===i||n&&i in n||q(e,i,null,o[i],r)}(e,h,f,t)}return e}function w(e,n,o){try{"function"==typeof e?e(n):e.current=n}catch(e){P(e,o)}}function A(e,n,o){var r,i,a;if(t.unmount&&t.unmount(e),(r=e.ref)&&w(r,null,n),o||null!=e.l||(o=null!=(i=e.__e)),e.__e=e.l=null,null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(l){P(l,n)}r.base=r.__P=null,(r=r.__t)&&A(r,n,o)}else if(r=e.__k)for(a=0;a<r.length;a++)r[a]&&A(r[a],n,o);null!=i&&h(i)}function N(e,n,o){return this.constructor(e,o)}function P(e,n){for(;n;n=n.__a)if(!n.__p)try{if(null!=n.constructor.getDerivedStateFromError)n.setState(n.constructor.getDerivedStateFromError(e));else{if(null==n.componentDidCatch)continue;n.componentDidCatch(e)}return k(n.__E=n)}catch(n){e=n}throw e}function K(e,n,o){var r,i;t.root&&t.root(e,n),r=n.__t,e=d(m,null,[e]),i=[],C(n,o?e:n.__t=e,o?void 0:r,s,void 0!==n.ownerSVGElement,o?[o]:r?null:p.slice.call(n.childNodes),i,e,o||s),b(i,e)}t={},v.prototype.setState=function(e,n){var o=this.__s!==this.state&&this.__s||(this.__s=f({},this.state));("function"!=typeof e||(e=e(o,this.props)))&&f(o,e),null!=e&&this.__v&&(n&&this.__h.push(n),k(this))},v.prototype.forceUpdate=function(e){var n,o=this.__v,r=this.__v.__e,t=this.__P;t&&(null!=(r=S(t,o,o,this.__n,void 0!==t.ownerSVGElement,null,n=[],this.__a,!1!==e,r))&&r.parentNode!==t&&t.appendChild(r),b(n,o)),e&&e()},v.prototype.render=m,i=[],a="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,l=/-?(?=[A-Z])/g,u=0;var J,x,H=[],U=t.render;t.render=function(e){U&&U(e),J=0,(x=e.__c).__H&&(x.__H.t=X(x.__H.t))};var B=t.diffed;t.diffed=function(e){B&&B(e);var n=e.__c;if(n){var o=n.__H;o&&(o.u=X(o.u))}};var D=t.unmount;function L(e){t.hook&&t.hook(x);var n=x.__H||(x.__H={i:[],t:[],u:[]});return e>=n.i.length&&n.i.push({}),n.i[e]}function W(e){return O(re,e)}function O(e,n,o){var r=L(J++);return null==r.__c&&(r.__c=x,r.o=[null==o?re(null,n):o(n),function(n){var o=e(r.o[0],n);r.o[0]!==o&&(r.o[0]=o,r.__c.setState({}))}]),r.o}function T(e,n){var o=L(J++);oe(o.v,n)&&(o.o=e,o.v=n,x.__H.t.push(o),Y(x))}function R(e,n){var o=L(J++);oe(o.v,n)&&(o.o=e,o.v=n,x.__H.u.push(o))}function j(e){var n=L(J++);return null==n.o&&(n.o={current:e}),n.o}function I(e,n,o){var r=L(J++);oe(r.v,o)&&(r.v=o,e.current=n())}function F(e,n){var o=L(J++);return oe(o.v,n)?(o.v=n,o.l=e,o.o=e()):o.o}function V(e,n){return F(function(){return e},n)}function $(e){var n=x.context[e.__c];if(null==n)return e.__p;var o=L(J++);return null==o.o&&(o.o=!0,n.sub(x)),n.props.value}function z(e,n){t.useDebugValue&&t.useDebugValue(n?n(e):e)}t.unmount=function(e){D&&D(e);var n=e.__c;if(n){var o=n.__H;o&&o.i.forEach(function(e){return e.p&&e.p()})}};var Y=function(){};function Q(){H.forEach(function(e){e.m=!1,e.__P&&(e.__H.t=X(e.__H.t))}),H=[]}function Z(){setTimeout(Q,0)}function X(e){return e.forEach(ee),e.forEach(ne),[]}function ee(e){e.p&&e.p()}function ne(e){var n=e.o();"function"==typeof n&&(e.p=n)}function oe(e,n){return null==e||n.some(function(n,o){return n!==e[o]})}function re(e,n){return"function"==typeof n?n(e):n}function te(e,n){for(var o in n)e[o]=n[o];return e}"undefined"!=typeof window&&(Y=function(e){!e.m&&(e.m=!0)&&1===H.push(e)&&(t.requestAnimationFrame?t.requestAnimationFrame(Q):requestAnimationFrame(Z))});var ie="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,ae=/^(?:accent|alignment|arabic|baseline|cap|clip|color|fill|flood|font|glyph|horiz|marker|overline|paint|stop|strikethrough|stroke|text|underline|unicode|units|v|vector|vert|word|writing|x)[A-Z]/,le=t.event;function ue(e,n,o){return K(e,n),"function"==typeof o&&o(),null!=e?e.__c:null}t.event=function(e){return le&&(e=le(e)),e.persist=function(){},e.nativeEvent=e,e};var se=function(){};function pe(e){return ue(d(se,{context:this.context},e.vnode),e.container),this.componentWillUnmount=function(){ue(null,e.container)},null}se.prototype.getChildContext=function(){return this.props.context},se.prototype.render=function(e){return e.children};var ce=function(e,n){return null==e?null:(e=M(e)).map(n)},fe={map:ce,forEach:ce,count:function(e){return e?M(e).length:0},only:function(e){if(1!==(e=M(e)).length)throw new Error("Children.only() expects only one child.");return e[0]},toArray:M};function he(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];var o=d.apply(void 0,e),r=o.type,t=o.props;return"function"!=typeof r&&(t.defaultValue&&(t.value||0===t.value||(t.value=t.defaultValue),delete t.defaultValue),Array.isArray(t.value)&&t.multiple&&"select"===r&&(M(t.children).forEach(function(e){-1!==t.value.indexOf(e.props.value)&&(e.props.selected=!0)}),delete t.value),function(e,n){var o,r,t;for(t in n)if(o=ae.test(t))break;if(o)for(t in r=e.props={},n)r[ae.test(t)?t.replace(/([A-Z0-9])/,"-$1").toLowerCase():t]=n[t]}(o,t)),o.preactCompatNormalized=!1,de(o)}function de(e){return e.preactCompatNormalized=!0,function(e){var n=e.props;(n.class||n.className)&&(me.enumerable="className"in n,n.className&&(n.class=n.className),Object.defineProperty(n,"className",me))}(e),e}function _e(e){return null!=e&&e.$$typeof===ie}var me={configurable:!0,get:function(){return this.class}};function ge(e,n){for(var o in e)if(!(o in n))return!0;for(var r in n)if(e[r]!==n[r])return!0;return!1}var ve=function(e){function n(n){e.call(this,n),this.isPureReactComponent=!0}return e&&(n.__proto__=e),(n.prototype=Object.create(e&&e.prototype)).constructor=n,n.prototype.shouldComponentUpdate=function(e,n){return ge(this.props,e)||ge(this.state,n)},n}(v);function ke(e,n){Object.defineProperty(e.prototype,"UNSAFE_"+n,{configurable:!0,get:function(){return this[n]},set:function(e){this[n]=e}})}v.prototype.isReactComponent={},ke(v,"componentWillMount"),ke(v,"componentWillReceiveProps"),ke(v,"componentWillUpdate");var ye=t.vnode;t.vnode=function(e){e.$$typeof=ie,function(n){var o=e.type,r=e.props;if(r&&"string"==typeof o){var t={};for(var i in r)t[i.toLowerCase()]=i;if(t.ondoubleclick&&(r.ondblclick=r[t.ondoubleclick],delete r[t.ondoubleclick]),t.onbeforeinput&&(r.onbeforeinput=r[t.onbeforeinput],delete r[t.onbeforeinput]),t.onchange&&("textarea"===o||"input"===o.toLowerCase()&&!/^fil|che|rad/i.test(r.type))){var a=t.oninput||"oninput";r[a]||(r[a]=r[t.onchange],delete r[t.onchange])}}}();var n=e.type;null!=n&&n.t&&null!=e.ref&&(e.props.ref=e.ref,e.ref=null),ye&&ye(e)};var Ce=te({version:"16.8.0",Children:fe,render:ue,hydrate:ue,unmountComponentAtNode:function(e){return null!=e.__t&&(K(null,e),!0)},createPortal:function(e,n){return d(pe,{vnode:e,container:n})},createElement:he,createContext:function(e){var n,o={__c:"__cC"+u++,__p:e};function r(e,n){return e.children(n)}return r.contextType=o,o.Consumer=r,n={},o.Provider=function(e){var r,t;return this.getChildContext||(t=[],(r=this).getChildContext=function(){return n[o.__c]=r,n},r.shouldComponentUpdate=function(e){t.map(function(n){n.__P&&(n.context=e.value,k(n))})},r.sub=function(e){t.push(e);var n=e.componentWillUnmount;e.componentWillUnmount=function(){t.splice(t.indexOf(e),1),n&&n()}}),e.children},o},createFactory:function(e){return he.bind(null,e)},cloneElement:function(e){if(!_e(e))return e;var n=de(function(e,n){return n=f(f({},e.props),n),arguments.length>2&&(n.children=p.slice.call(arguments,2)),_(e.type,n,null,n.key||e.key,n.ref||e.ref)}.apply(null,arguments));return n.$$typeof=ie,n},createRef:function(){return{}},Fragment:m,isValidElement:_e,findDOMNode:function(e){return e&&(e.base||1===e.nodeType&&e)||null},Component:v,PureComponent:ve,memo:function(e,n){function o(e){var o=this.props.ref,r=o==e.ref;return r||(o.call?o(null):o.current=null),(null==n?ge(this.props,e):!n(this.props,e))||!r}function r(n){return this.shouldComponentUpdate=o,d(e,te({},n))}return r.displayName="Memo("+(e.displayName||e.name)+")",r.t=!0,r},forwardRef:function(e){function n(n){var o=n.ref;return delete n.ref,e(n,o)}return n.t=!0,n.displayName="ForwardRef("+(e.displayName||e.name)+")",n},unstable_batchedUpdates:function(e,n){e(n)}},r),Me=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function qe(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var o=e.installing;null!=o&&(o.onstatechange=function(){"installed"===o.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}function Ge(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var o=[],r=!0,t=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done)&&(o.push(a.value),!n||o.length!==n);r=!0);}catch(u){t=!0,i=u}finally{try{r||null==l.return||l.return()}finally{if(t)throw i}}return o}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function Se(e){var n=e.title,o=e.meta;return Ce.createElement("h2",{className:"header"},Ce.createElement("span",null,n),o&&" ",o&&Ce.createElement("span",{className:"header__meta"},o))}function be({name:e,value:n,status:o,onAnswerSelected:r}){const t=V(()=>{r(n)},[r,n]),i={unguessed:"",guessedCorrect:" answer--correct",guessedIncorrect:" answer--incorrect"}[o];return Ce.createElement("label",{className:"answer"+i},Ce.createElement("input",{type:"radio",name:e,value:n,onClick:t}),Ce.createElement("span",{className:"answer__text"},n))}function Ee({name:e,query:n,answer:o,possibleAnswers:r,isActive:t,offset:i}){const a=Ge(W(void 0),2),l=a[0],u=a[1],s=V(e=>{u(e)},[]),p=r.map((n,r)=>{let t="unguessed";return n===l&&(t=l===o?"guessedCorrect":"guessedIncorrect"),Ce.createElement(be,{key:r,name:e,value:n,status:t,onAnswerSelected:s})}),c="question"+(t?" question--active":"");return Ce.createElement("div",{className:c},Ce.createElement(Se,{title:n,meta:i}),p)}function we(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function Ae(e){var n=e.questionBanks,o=e.onSubmit,r=Ge(W(function(){return Object.keys(n).reduce(function(e,n){return Object.assign(e,we({},n,!0))},{})}),2),t=r[0],i=r[1],a=V(function(e){i(function(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{},r=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),r.forEach(function(n){we(e,n,o[n])})}return e}({},t,we({},e.target.name,e.target.checked)))},[t]),l=V(function(e){e.preventDefault();var r=Object.keys(n).reduce(function(e,o){return t[o]&&(e[o]=n[o]),e},{});o(r)},[o,t,n]),u=Object.keys(n).map(function(e,n){return Ce.createElement("label",{key:n,className:"question-bank__item"},Ce.createElement("input",{type:"checkbox",name:e,checked:t[e],onChange:a}),e)});return Ce.createElement("form",{onSubmit:l,className:"question-bank"},Ce.createElement(Se,{title:"Choose your question sets:"}),u,Ce.createElement("button",{type:"submit",className:"fat-button"},"Submit"))}function Ne(e,n,o){let r=Ke(n.filter(n=>n!==e),o-1);return r.splice(Pe(0,r.length-1),0,e),r}function Pe(e,n){return e=Math.ceil(e),n=Math.floor(n),Math.floor(Math.random()*(n-e+1))+e}function Ke(e,n){const o=new Set;for(;o.size<n;)o.add(e[Pe(0,e.length-1)]);return Array.from(o)}o(1);Ce.render(Ce.createElement(function({questionBanks:e,questionsPerQuiz:n=10,answersPerQuestion:o=4}){const r=Ge(W([]),2),t=r[0],i=r[1],a=Ge(W([]),2),l=a[0],u=a[1],s=Ge(W(0),2),p=s[0],c=s[1],f=Ge(W(0),2),h=(f[0],f[1]),d=V(e=>{i(e),u(function(e,n){return Ke(e,n)}(function(e,n){let o=[];for(let r in e){const t=e[r],i=Array.from(new Set(t.map(e=>e.a)));for(const e of t)o.push({query:e.q,answer:e.a,possibleAnswers:Ne(e.a,i,n)})}return o}(e,o),n))},[o,n]),_=V(()=>{c(p+1)},[p]),m=V(()=>{c(0),h(0)},[]),g=V(()=>{i([]),u([]),c(0),h(0)},[]);return Object.keys(t).length?p>=l.length?Ce.createElement("div",{className:"quiz"},Ce.createElement(Se,{title:"The end"}),Ce.createElement("button",{className:"fat-button",onClick:m},"Ask the same questions again"),Ce.createElement("button",{className:"fat-button",onClick:g},"Pick a new set of questions")):Ce.createElement("div",{className:"quiz"},l.map((e,n)=>Ce.createElement(Ee,Object.assign({key:n,name:"question"+(n+1),isActive:n===p,offset:(n+1).toString()+" / "+l.length},e))),Ce.createElement("button",{className:"next-button",onClick:_},"Next Question")):Ce.createElement("div",{className:"quiz"},Ce.createElement(Ae,{questionBanks:e,onSubmit:d}))},{questionBanks:{"Maek Chi Gi: English Pressure Points":[{q:"English pressure point for Maek Chi Gi 1?",a:"Broken Sequence"},{q:"English pressure point for Maek Chi Gi 2?",a:"Arms Three Measures"},{q:"English pressure point for Maek Chi Gi 3?",a:"Heavens Residence"},{q:"English pressure point for Maek Chi Gi 4?",a:"Summits Spring"},{q:"English pressure point for Maek Chi Gi 5?",a:"Not on a meridian"},{q:"English pressure point for Maek Chi Gi 6?",a:"Upper Hinge"},{q:"English pressure point for Maek Chi Gi 7?",a:"Not on a meridian"},{q:"English pressure point for Maek Chi Gi 8?",a:"Big Wrapping"},{q:"English pressure point for Maek Chi Gi 9?",a:"Sea of Ki/Ums Junction"},{q:"English pressure point for Maek Chi Gi 10?",a:"Doves Tail"},{q:"English pressure point for Maek Chi Gi 11?",a:"Modesty Spring"},{q:"English pressure point for Maek Chi Gi 12?",a:"Systems Door"},{q:"English pressure point for Maek Chi Gi 13?",a:"Door of Awareness"},{q:"English pressure point for Maek Chi Gi 14?",a:"Spirit Yard"},{q:"English pressure point for Maek Chi Gi 15?",a:"Breasts Root/Heavens Pool"}],"Maek Chi Gi: Korean Pressure Points":[{q:"Korean pressure point for Maek Chi Gi 1?",a:"Yuhl Guhl"},{q:"Korean pressure point for Maek Chi Gi 2?",a:"Soo Sahm Ri"},{q:"Korean pressure point for Maek Chi Gi 3?",a:"Chung Boo"},{q:"Korean pressure point for Maek Chi Gi 4?",a:"Geuk Chuhn"},{q:"Korean pressure point for Maek Chi Gi 5?",a:"Hohn Soo"},{q:"Korean pressure point for Maek Chi Gi 6?",a:"Gaek Joo In"},{q:"Korean pressure point for Maek Chi Gi 7?",a:"Hohn Soo"},{q:"Korean pressure point for Maek Chi Gi 8?",a:"Dae Po"},{q:"Korean pressure point for Maek Chi Gi 9?",a:"Ki Hae/Um Kyo"},{q:"Korean pressure point for Maek Chi Gi 10?",a:"Goo Mi"},{q:"Korean pressure point for Maek Chi Gi 11?",a:"Yuhm Chuhn"},{q:"Korean pressure point for Maek Chi Gi 12?",a:"Jahng Moon"},{q:"Korean pressure point for Maek Chi Gi 13?",a:"Ah Moon"},{q:"Korean pressure point for Maek Chi Gi 14?",a:"Shin Juhng"},{q:"Korean pressure point for Maek Chi Gi 15?",a:"Yoo Geun/Choong Ji"}],"Maek Chi Gi: Meridians":[{q:"Meridian point for Maek Chi Gi 1?",a:"Lung 7"},{q:"Meridian point for Maek Chi Gi 2?",a:"Large Intestine 10"},{q:"Meridian point for Maek Chi Gi 3?",a:"Lung 3"},{q:"Meridian point for Maek Chi Gi 4?",a:"Heart 1"},{q:"Meridian point for Maek Chi Gi 5?",a:"Not on a meridian"},{q:"Meridian point for Maek Chi Gi 6?",a:"Gall Bladder 3"},{q:"Meridian point for Maek Chi Gi 7?",a:"Not on a meridian"},{q:"Meridian point for Maek Chi Gi 8?",a:"Spleen 21"},{q:"Meridian point for Maek Chi Gi 9?",a:"Conception 6/7"},{q:"Meridian point for Maek Chi Gi 10?",a:"Conception 15"},{q:"Meridian point for Maek Chi Gi 11?",a:"Conception 23"},{q:"Meridian point for Maek Chi Gi 12?",a:"Liver 13"},{q:"Meridian point for Maek Chi Gi 13?",a:"Governing 15"},{q:"Meridian point for Maek Chi Gi 14?",a:"Governing 24"},{q:"Meridian point for Maek Chi Gi 15?",a:"Stomach 18/Pericardium 1"}],"Maek Cha Gi: English Pressure Points":[{q:"English pressure point for Maek Cha Gi 1?",a:"Three Um Junction"},{q:"English pressure point for Maek Cha Gi 2?",a:"Eyes of the Knee"},{q:"English pressure point for Maek Cha Gi 3?",a:"Bend Middle"},{q:"English pressure point for Maek Cha Gi 4?",a:"Sea of Blood"},{q:"English pressure point for Maek Cha Gi 5?",a:"Systems Door"},{q:"English pressure point for Maek Cha Gi 6?",a:"Summits Spring"},{q:"English pressure point for Maek Cha Gi 7?",a:"Sea of Ki"},{q:"English pressure point for Maek Cha Gi 8?",a:"Doves Tail"},{q:"English pressure point for Maek Cha Gi 9?",a:"Modesty Spring"},{q:"English pressure point for Maek Cha Gi 10?",a:"Not on a meridian"},{q:"English pressure point for Maek Cha Gi 11?",a:"Breasts Root/Heavens Pool"},{q:"English pressure point for Maek Cha Gi 12?",a:"Door of Awareness"},{q:"English pressure point for Maek Cha Gi 13?",a:"Upper Hinge"},{q:"English pressure point for Maek Cha Gi 14?",a:"Big Vertebrae"},{q:"English pressure point for Maek Cha Gi 15?",a:"Sunny Hill Spring"}],"Maek Cha Gi: Korean Pressure Points":[{q:"Korean pressure point for Maek Cha Gi 1?",a:"Sahm Um Kyo"},{q:"Korean pressure point for Maek Cha Gi 2?",a:"Dohk Bi"},{q:"Korean pressure point for Maek Cha Gi 3?",a:"Wee Joong"},{q:"Korean pressure point for Maek Cha Gi 4?",a:"Hyul Hae"},{q:"Korean pressure point for Maek Cha Gi 5?",a:"Jahng Moon"},{q:"Korean pressure point for Maek Cha Gi 6?",a:"Geuk Chuhn"},{q:"Korean pressure point for Maek Cha Gi 7?",a:"Ki Hae"},{q:"Korean pressure point for Maek Cha Gi 8?",a:"Goo Mi"},{q:"Korean pressure point for Maek Cha Gi 9?",a:"Yuhm Chuhn"},{q:"Korean pressure point for Maek Cha Gi 10?",a:"Hohn Soo"},{q:"Korean pressure point for Maek Cha Gi 11?",a:"Yoo Geun/Choong Ji"},{q:"Korean pressure point for Maek Cha Gi 12?",a:"Ah Moon"},{q:"Korean pressure point for Maek Cha Gi 13?",a:"Gaek Joo In"},{q:"Korean pressure point for Maek Cha Gi 14?",a:"Dae Choo"},{q:"Korean pressure point for Maek Cha Gi 15?",a:"Yahng Neung Chuhn"}],"Maek Cha Gi: Meridians":[{q:"Meridian point for Maek Cha Gi 1?",a:"Spleen 6"},{q:"Meridian point for Maek Cha Gi 2?",a:"Stomach 35"},{q:"Meridian point for Maek Cha Gi 3?",a:"Bladder 54"},{q:"Meridian point for Maek Cha Gi 4?",a:"Spleen 10"},{q:"Meridian point for Maek Cha Gi 5?",a:"Liver 13"},{q:"Meridian point for Maek Cha Gi 6?",a:"Heart 1"},{q:"Meridian point for Maek Cha Gi 7?",a:"Conception 8"},{q:"Meridian point for Maek Cha Gi 8?",a:"Conception 15"},{q:"Meridian point for Maek Cha Gi 9?",a:"Conception 23"},{q:"Meridian point for Maek Cha Gi 10?",a:"Not on a meridian"},{q:"Meridian point for Maek Cha Gi 11?",a:"Stomach 18/Pericardium 1"},{q:"Meridian point for Maek Cha Gi 12?",a:"Governing 15"},{q:"Meridian point for Maek Cha Gi 13?",a:"Gall Bladder 3"},{q:"Meridian point for Maek Cha Gi 14?",a:"Governing 14"},{q:"Meridian point for Maek Cha Gi 15?",a:"Gall Bladder 34"}],"Jee Ahp Sool: English Pressure Points":[{q:"English pressure point for Jee Ahp Sool - left hand point?",a:"Union Valley"},{q:"English pressure point for Jee Ahp Sool 1?",a:"Yahngs Creek"},{q:"English pressure point for Jee Ahp Sool 2?",a:"Arms Three Measures"},{q:"English pressure point for Jee Ahp Sool 3?",a:"Heavens Residence"},{q:"English pressure point for Jee Ahp Sool 4?",a:"Empty Basin"},{q:"English pressure point for Jee Ahp Sool 5?",a:"Heavens Pillar"},{q:"English pressure point for Jee Ahp Sool 6?",a:"Pupil Seam"},{q:"English pressure point for Jee Ahp Sool 7?",a:"Mans Center"},{q:"English pressure point for Jee Ahp Sool 8?",a:"Summits Spring"},{q:"English pressure point for Jee Ahp Sool 9?",a:"Surging Ki"},{q:"English pressure point for Jee Ahp Sool 10?",a:"Bend Middle"}],"Jee Ahp Sool: Korean Pressure Points":[{q:"Korean pressure point for Jee Ahp Sool - left hand point?",a:"Hahp Gohk"},{q:"Korean pressure point for Jee Ahp Sool 1?",a:"Yahng Gyea"},{q:"Korean pressure point for Jee Ahp Sool 2?",a:"Soo Sahm Ri"},{q:"Korean pressure point for Jee Ahp Sool 3?",a:"Chung Boo"},{q:"Korean pressure point for Jee Ahp Sool 4?",a:"Gyul Bun"},{q:"Korean pressure point for Jee Ahp Sool 5?",a:"Chuhn Joo"},{q:"Korean pressure point for Jee Ahp Sool 6?",a:"Dohng Jah Ryoh"},{q:"Korean pressure point for Jee Ahp Sool 7?",a:"In Joong"},{q:"Korean pressure point for Jee Ahp Sool 8?",a:"Geuk Chuhn"},{q:"Korean pressure point for Jee Ahp Sool 9?",a:"Ki Choong"},{q:"Korean pressure point for Jee Ahp Sool 10?",a:"Wee Joong"}],"Jee Ahp Sool: Meridians":[{q:"Meridian point for Jee Ahp Sool - left hand point?",a:"Large Intestine 4"},{q:"Meridian point for Jee Ahp Sool 1?",a:"Large Intestine 5"},{q:"Meridian point for Jee Ahp Sool 2?",a:"Large Intestine 10"},{q:"Meridian point for Jee Ahp Sool 3?",a:"Lung 3"},{q:"Meridian point for Jee Ahp Sool 4?",a:"Stomach 12"},{q:"Meridian point for Jee Ahp Sool 5?",a:"Bladder 10"},{q:"Meridian point for Jee Ahp Sool 6?",a:"Gall Bladder 1"},{q:"Meridian point for Jee Ahp Sool 7?",a:"Governing 26"},{q:"Meridian point for Jee Ahp Sool 8?",a:"Heart 1"},{q:"Meridian point for Jee Ahp Sool 9?",a:"Stomach 30"},{q:"Meridian point for Jee Ahp Sool 10?",a:"Bladder 40/54"}]}}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("","/service-worker.js");Me?(function(e,n){fetch(e).then(function(o){var r=o.headers.get("content-type");404===o.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):qe(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):qe(n,e)})}}()}],[[0,1]]]);
//# sourceMappingURL=main.c8b5d60c.chunk.js.map