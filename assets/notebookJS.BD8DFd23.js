const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./preCompileModule.D6udID2n.js","./pixel.PHV1U_RE.js","./pixel.D2isS4xr.css"])))=>i.map(i=>d[i]);
import"./pixel.PHV1U_RE.js";/* empty css              */import{e as P,b as _,E as Qe,c as ye,v as Ar,w as Vr}from"./scc.keDE2M48.js";import{r as qr,C as Mr}from"./codemirror.BeiFTLV5.js";import{n as Lr}from"./index.browser.vcSNLBTf.js";(function(l,u){(function(a){a(qr())})(function(a){a.defineMode("javascript",function(c,p){var h=c.indentUnit,b=p.statementIndent,x=p.jsonld,S=p.json||x,T=p.trackScope!==!1,y=p.typescript,U=p.wordCharacters||/[\w$\xa1-\uffff]/,V=function(){function e(A){return{type:A,style:"keyword"}}var r=e("keyword a"),n=e("keyword b"),o=e("keyword c"),s=e("keyword d"),k=e("operator"),v={type:"atom",style:"atom"};return{if:e("if"),while:r,with:r,else:n,do:n,try:n,finally:n,return:s,break:s,continue:s,new:e("new"),delete:o,void:o,throw:o,debugger:e("debugger"),var:e("var"),const:e("var"),let:e("var"),function:e("function"),catch:e("catch"),for:e("for"),switch:e("switch"),case:e("case"),default:e("default"),in:k,typeof:k,instanceof:k,true:v,false:v,null:v,undefined:v,NaN:v,Infinity:v,this:e("this"),class:e("class"),super:e("atom"),yield:o,export:e("export"),import:e("import"),extends:o,await:o}}(),D=/[+\-*&%=<>!?|~^@]/,J=/^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;function Ze(e){for(var r=!1,n,o=!1;(n=e.next())!=null;){if(!r){if(n=="/"&&!o)return;n=="["?o=!0:o&&n=="]"&&(o=!1)}r=!r&&n=="\\"}}var te,fe;function C(e,r,n){return te=e,fe=n,r}function F(e,r){var n=e.next();if(n=='"'||n=="'")return r.tokenize=er(n),r.tokenize(e,r);if(n=="."&&e.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/))return C("number","number");if(n=="."&&e.match(".."))return C("spread","meta");if(/[\[\]{}\(\),;\:\.]/.test(n))return C(n);if(n=="="&&e.eat(">"))return C("=>","operator");if(n=="0"&&e.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/))return C("number","number");if(/\d/.test(n))return e.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/),C("number","number");if(n=="/")return e.eat("*")?(r.tokenize=se,se(e,r)):e.eat("/")?(e.skipToEnd(),C("comment","comment")):Fe(e,r,1)?(Ze(e),e.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/),C("regexp","string-2")):(e.eat("="),C("operator","operator",e.current()));if(n=="`")return r.tokenize=ne,ne(e,r);if(n=="#"&&e.peek()=="!")return e.skipToEnd(),C("meta","meta");if(n=="#"&&e.eatWhile(U))return C("variable","property");if(n=="<"&&e.match("!--")||n=="-"&&e.match("->")&&!/\S/.test(e.string.slice(0,e.start)))return e.skipToEnd(),C("comment","comment");if(D.test(n))return(n!=">"||!r.lexical||r.lexical.type!=">")&&(e.eat("=")?(n=="!"||n=="=")&&e.eat("="):/[<>*+\-|&?]/.test(n)&&(e.eat(n),n==">"&&e.eat(n))),n=="?"&&e.eat(".")?C("."):C("operator","operator",e.current());if(U.test(n)){e.eatWhile(U);var o=e.current();if(r.lastType!="."){if(V.propertyIsEnumerable(o)){var s=V[o];return C(s.type,s.style,o)}if(o=="async"&&e.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/,!1))return C("async","keyword",o)}return C("variable","variable",o)}}function er(e){return function(r,n){var o=!1,s;if(x&&r.peek()=="@"&&r.match(J))return n.tokenize=F,C("jsonld-keyword","meta");for(;(s=r.next())!=null&&!(s==e&&!o);)o=!o&&s=="\\";return o||(n.tokenize=F),C("string","string")}}function se(e,r){for(var n=!1,o;o=e.next();){if(o=="/"&&n){r.tokenize=F;break}n=o=="*"}return C("comment","comment")}function ne(e,r){for(var n=!1,o;(o=e.next())!=null;){if(!n&&(o=="`"||o=="$"&&e.eat("{"))){r.tokenize=F;break}n=!n&&o=="\\"}return C("quasi","string-2",e.current())}var rr="([{}])";function ge(e,r){r.fatArrowAt&&(r.fatArrowAt=null);var n=e.string.indexOf("=>",e.start);if(!(n<0)){if(y){var o=/:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(e.string.slice(e.start,n));o&&(n=o.index)}for(var s=0,k=!1,v=n-1;v>=0;--v){var A=e.string.charAt(v),R=rr.indexOf(A);if(R>=0&&R<3){if(!s){++v;break}if(--s==0){A=="("&&(k=!0);break}}else if(R>=3&&R<6)++s;else if(U.test(A))k=!0;else if(/["'\/`]/.test(A))for(;;--v){if(v==0)return;var _r=e.string.charAt(v-1);if(_r==A&&e.string.charAt(v-2)!="\\"){v--;break}}else if(k&&!s){++v;break}}k&&!s&&(r.fatArrowAt=v)}}var tr={atom:!0,number:!0,variable:!0,string:!0,regexp:!0,this:!0,import:!0,"jsonld-keyword":!0};function Ae(e,r,n,o,s,k){this.indented=e,this.column=r,this.type=n,this.prev=s,this.info=k,o!=null&&(this.align=o)}function nr(e,r){if(!T)return!1;for(var n=e.localVars;n;n=n.next)if(n.name==r)return!0;for(var o=e.context;o;o=o.prev)for(var n=o.vars;n;n=n.next)if(n.name==r)return!0}function Ve(e,r,n,o,s){var k=e.cc;for(i.state=e,i.stream=s,i.marked=null,i.cc=k,i.style=r,e.lexical.hasOwnProperty("align")||(e.lexical.align=!0);;){var v=k.length?k.pop():S?E:j;if(v(n,o)){for(;k.length&&k[k.length-1].lex;)k.pop()();return i.marked?i.marked:n=="variable"&&nr(e,o)?"variable-2":r}}}var i={state:null,column:null,marked:null,cc:null};function d(){for(var e=arguments.length-1;e>=0;e--)i.cc.push(arguments[e])}function t(){return d.apply(null,arguments),!0}function ve(e,r){for(var n=r;n;n=n.next)if(n.name==e)return!0;return!1}function G(e){var r=i.state;if(i.marked="def",!!T){if(r.context){if(r.lexical.info=="var"&&r.context&&r.context.block){var n=qe(e,r.context);if(n!=null){r.context=n;return}}else if(!ve(e,r.localVars)){r.localVars=new oe(e,r.localVars);return}}p.globalVars&&!ve(e,r.globalVars)&&(r.globalVars=new oe(e,r.globalVars))}}function qe(e,r){if(r)if(r.block){var n=qe(e,r.prev);return n?n==r.prev?r:new ie(n,r.vars,!0):null}else return ve(e,r.vars)?r:new ie(r.prev,new oe(e,r.vars),!1);else return null}function ce(e){return e=="public"||e=="private"||e=="protected"||e=="abstract"||e=="readonly"}function ie(e,r,n){this.prev=e,this.vars=r,this.block=n}function oe(e,r){this.name=e,this.next=r}var ir=new oe("this",new oe("arguments",null));function H(){i.state.context=new ie(i.state.context,i.state.localVars,!1),i.state.localVars=ir}function de(){i.state.context=new ie(i.state.context,i.state.localVars,!0),i.state.localVars=null}H.lex=de.lex=!0;function M(){i.state.localVars=i.state.context.vars,i.state.context=i.state.context.prev}M.lex=!0;function m(e,r){var n=function(){var o=i.state,s=o.indented;if(o.lexical.type=="stat")s=o.lexical.indented;else for(var k=o.lexical;k&&k.type==")"&&k.align;k=k.prev)s=k.indented;o.lexical=new Ae(s,i.stream.column(),e,null,o.lexical,r)};return n.lex=!0,n}function f(){var e=i.state;e.lexical.prev&&(e.lexical.type==")"&&(e.indented=e.lexical.indented),e.lexical=e.lexical.prev)}f.lex=!0;function w(e){function r(n){return n==e?t():e==";"||n=="}"||n==")"||n=="]"?d():t(r)}return r}function j(e,r){return e=="var"?t(m("vardef",r),je,w(";"),f):e=="keyword a"?t(m("form"),xe,j,f):e=="keyword b"?t(m("form"),j,f):e=="keyword d"?i.stream.match(/^\s*$/,!1)?t():t(m("stat"),X,w(";"),f):e=="debugger"?t(w(";")):e=="{"?t(m("}"),de,he,f,M):e==";"?t():e=="if"?(i.state.lexical.info=="else"&&i.state.cc[i.state.cc.length-1]==f&&i.state.cc.pop()(),t(m("form"),xe,j,f,Be)):e=="function"?t($):e=="for"?t(m("form"),de,Oe,j,M,f):e=="class"||y&&r=="interface"?(i.marked="keyword",t(m("form",e=="class"?e:r),$e,f)):e=="variable"?y&&r=="declare"?(i.marked="keyword",t(j)):y&&(r=="module"||r=="enum"||r=="type")&&i.stream.match(/^\s*\w/,!1)?(i.marked="keyword",r=="enum"?t(Je):r=="type"?t(ze,w("operator"),g,w(";")):t(m("form"),L,w("{"),m("}"),he,f,f)):y&&r=="namespace"?(i.marked="keyword",t(m("form"),E,j,f)):y&&r=="abstract"?(i.marked="keyword",t(j)):t(m("stat"),sr):e=="switch"?t(m("form"),xe,w("{"),m("}","switch"),de,he,f,f,M):e=="case"?t(E,w(":")):e=="default"?t(w(":")):e=="catch"?t(m("form"),H,or,j,f,M):e=="export"?t(m("stat"),Er,f):e=="import"?t(m("stat"),Sr,f):e=="async"?t(j):r=="@"?t(E,j):d(m("stat"),E,w(";"),f)}function or(e){if(e=="(")return t(K,w(")"))}function E(e,r){return Me(e,r,!1)}function q(e,r){return Me(e,r,!0)}function xe(e){return e!="("?d():t(m(")"),X,w(")"),f)}function Me(e,r,n){if(i.state.fatArrowAt==i.stream.start){var o=n?Re:Le;if(e=="(")return t(H,m(")"),I(K,")"),f,w("=>"),o,M);if(e=="variable")return d(H,L,w("=>"),o,M)}var s=n?Y:W;return tr.hasOwnProperty(e)?t(s):e=="function"?t($,s):e=="class"||y&&r=="interface"?(i.marked="keyword",t(m("form"),xr,f)):e=="keyword c"||e=="async"?t(n?q:E):e=="("?t(m(")"),X,w(")"),f,s):e=="operator"||e=="spread"?t(n?q:E):e=="["?t(m("]"),jr,f,s):e=="{"?ae(me,"}",null,s):e=="quasi"?d(pe,s):e=="new"?t(ur(n)):t()}function X(e){return e.match(/[;\}\)\],]/)?d():d(E)}function W(e,r){return e==","?t(X):Y(e,r,!1)}function Y(e,r,n){var o=n==!1?W:Y,s=n==!1?E:q;if(e=="=>")return t(H,n?Re:Le,M);if(e=="operator")return/\+\+|--/.test(r)||y&&r=="!"?t(o):y&&r=="<"&&i.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/,!1)?t(m(">"),I(g,">"),f,o):r=="?"?t(E,w(":"),s):t(s);if(e=="quasi")return d(pe,o);if(e!=";"){if(e=="(")return ae(q,")","call",o);if(e==".")return t(cr,o);if(e=="[")return t(m("]"),X,w("]"),f,o);if(y&&r=="as")return i.marked="keyword",t(g,o);if(e=="regexp")return i.state.lastType=i.marked="operator",i.stream.backUp(i.stream.pos-i.stream.start-1),t(s)}}function pe(e,r){return e!="quasi"?d():r.slice(r.length-2)!="${"?t(pe):t(X,ar)}function ar(e){if(e=="}")return i.marked="string-2",i.state.tokenize=ne,t(pe)}function Le(e){return ge(i.stream,i.state),d(e=="{"?j:E)}function Re(e){return ge(i.stream,i.state),d(e=="{"?j:q)}function ur(e){return function(r){return r=="."?t(e?fr:lr):r=="variable"&&y?t(kr,e?Y:W):d(e?q:E)}}function lr(e,r){if(r=="target")return i.marked="keyword",t(W)}function fr(e,r){if(r=="target")return i.marked="keyword",t(Y)}function sr(e){return e==":"?t(f,j):d(W,w(";"),f)}function cr(e){if(e=="variable")return i.marked="property",t()}function me(e,r){if(e=="async")return i.marked="property",t(me);if(e=="variable"||i.style=="keyword"){if(i.marked="property",r=="get"||r=="set")return t(dr);var n;return y&&i.state.fatArrowAt==i.stream.start&&(n=i.stream.match(/^\s*:\s*/,!1))&&(i.state.fatArrowAt=i.stream.pos+n[0].length),t(Q)}else{if(e=="number"||e=="string")return i.marked=x?"property":i.style+" property",t(Q);if(e=="jsonld-keyword")return t(Q);if(y&&ce(r))return i.marked="keyword",t(me);if(e=="[")return t(E,Z,w("]"),Q);if(e=="spread")return t(q,Q);if(r=="*")return i.marked="keyword",t(me);if(e==":")return d(Q)}}function dr(e){return e!="variable"?d(Q):(i.marked="property",t($))}function Q(e){if(e==":")return t(q);if(e=="(")return d($)}function I(e,r,n){function o(s,k){if(n?n.indexOf(s)>-1:s==","){var v=i.state.lexical;return v.info=="call"&&(v.pos=(v.pos||0)+1),t(function(A,R){return A==r||R==r?d():d(e)},o)}return s==r||k==r?t():n&&n.indexOf(";")>-1?d(e):t(w(r))}return function(s,k){return s==r||k==r?t():d(e,o)}}function ae(e,r,n){for(var o=3;o<arguments.length;o++)i.cc.push(arguments[o]);return t(m(r,n),I(e,r),f)}function he(e){return e=="}"?t():d(j,he)}function Z(e,r){if(y){if(e==":")return t(g);if(r=="?")return t(Z)}}function pr(e,r){if(y&&(e==":"||r=="in"))return t(g)}function De(e){if(y&&e==":")return i.stream.match(/^\s*\w+\s+is\b/,!1)?t(E,mr,g):t(g)}function mr(e,r){if(r=="is")return i.marked="keyword",t()}function g(e,r){if(r=="keyof"||r=="typeof"||r=="infer"||r=="readonly")return i.marked="keyword",t(r=="typeof"?q:g);if(e=="variable"||r=="void")return i.marked="type",t(N);if(r=="|"||r=="&")return t(g);if(e=="string"||e=="number"||e=="atom")return t(N);if(e=="[")return t(m("]"),I(g,"]",","),f,N);if(e=="{")return t(m("}"),Ee,f,N);if(e=="(")return t(I(Ce,")"),hr,N);if(e=="<")return t(I(g,">"),g);if(e=="quasi")return d(Se,N)}function hr(e){if(e=="=>")return t(g)}function Ee(e){return e.match(/[\}\)\]]/)?t():e==","||e==";"?t(Ee):d(ue,Ee)}function ue(e,r){if(e=="variable"||i.style=="keyword")return i.marked="property",t(ue);if(r=="?"||e=="number"||e=="string")return t(ue);if(e==":")return t(g);if(e=="[")return t(w("variable"),pr,w("]"),ue);if(e=="(")return d(re,ue);if(!e.match(/[;\}\)\],]/))return t()}function Se(e,r){return e!="quasi"?d():r.slice(r.length-2)!="${"?t(Se):t(g,wr)}function wr(e){if(e=="}")return i.marked="string-2",i.state.tokenize=ne,t(Se)}function Ce(e,r){return e=="variable"&&i.stream.match(/^\s*[?:]/,!1)||r=="?"?t(Ce):e==":"?t(g):e=="spread"?t(Ce):d(g)}function N(e,r){if(r=="<")return t(m(">"),I(g,">"),f,N);if(r=="|"||e=="."||r=="&")return t(g);if(e=="[")return t(g,w("]"),N);if(r=="extends"||r=="implements")return i.marked="keyword",t(g);if(r=="?")return t(g,w(":"),g)}function kr(e,r){if(r=="<")return t(m(">"),I(g,">"),f,N)}function we(){return d(g,br)}function br(e,r){if(r=="=")return t(g)}function je(e,r){return r=="enum"?(i.marked="keyword",t(Je)):d(L,Z,z,gr)}function L(e,r){if(y&&ce(r))return i.marked="keyword",t(L);if(e=="variable")return G(r),t();if(e=="spread")return t(L);if(e=="[")return ae(yr,"]");if(e=="{")return ae(Ne,"}")}function Ne(e,r){return e=="variable"&&!i.stream.match(/^\s*:/,!1)?(G(r),t(z)):(e=="variable"&&(i.marked="property"),e=="spread"?t(L):e=="}"?d():e=="["?t(E,w("]"),w(":"),Ne):t(w(":"),L,z))}function yr(){return d(L,z)}function z(e,r){if(r=="=")return t(q)}function gr(e){if(e==",")return t(je)}function Be(e,r){if(e=="keyword b"&&r=="else")return t(m("form","else"),j,f)}function Oe(e,r){if(r=="await")return t(Oe);if(e=="(")return t(m(")"),vr,f)}function vr(e){return e=="var"?t(je,ee):e=="variable"?t(ee):d(ee)}function ee(e,r){return e==")"?t():e==";"?t(ee):r=="in"||r=="of"?(i.marked="keyword",t(E,ee)):d(E,ee)}function $(e,r){if(r=="*")return i.marked="keyword",t($);if(e=="variable")return G(r),t($);if(e=="(")return t(H,m(")"),I(K,")"),f,De,j,M);if(y&&r=="<")return t(m(">"),I(we,">"),f,$)}function re(e,r){if(r=="*")return i.marked="keyword",t(re);if(e=="variable")return G(r),t(re);if(e=="(")return t(H,m(")"),I(K,")"),f,De,M);if(y&&r=="<")return t(m(">"),I(we,">"),f,re)}function ze(e,r){if(e=="keyword"||e=="variable")return i.marked="type",t(ze);if(r=="<")return t(m(">"),I(we,">"),f)}function K(e,r){return r=="@"&&t(E,K),e=="spread"?t(K):y&&ce(r)?(i.marked="keyword",t(K)):y&&e=="this"?t(Z,z):d(L,Z,z)}function xr(e,r){return e=="variable"?$e(e,r):ke(e,r)}function $e(e,r){if(e=="variable")return G(r),t(ke)}function ke(e,r){if(r=="<")return t(m(">"),I(we,">"),f,ke);if(r=="extends"||r=="implements"||y&&e==",")return r=="implements"&&(i.marked="keyword"),t(y?g:E,ke);if(e=="{")return t(m("}"),B,f)}function B(e,r){if(e=="async"||e=="variable"&&(r=="static"||r=="get"||r=="set"||y&&ce(r))&&i.stream.match(/^\s+#?[\w$\xa1-\uffff]/,!1))return i.marked="keyword",t(B);if(e=="variable"||i.style=="keyword")return i.marked="property",t(le,B);if(e=="number"||e=="string")return t(le,B);if(e=="[")return t(E,Z,w("]"),le,B);if(r=="*")return i.marked="keyword",t(B);if(y&&e=="(")return d(re,B);if(e==";"||e==",")return t(B);if(e=="}")return t();if(r=="@")return t(E,B)}function le(e,r){if(r=="!"||r=="?")return t(le);if(e==":")return t(g,z);if(r=="=")return t(q);var n=i.state.lexical.prev,o=n&&n.info=="interface";return d(o?re:$)}function Er(e,r){return r=="*"?(i.marked="keyword",t(Te,w(";"))):r=="default"?(i.marked="keyword",t(E,w(";"))):e=="{"?t(I(Pe,"}"),Te,w(";")):d(j)}function Pe(e,r){if(r=="as")return i.marked="keyword",t(w("variable"));if(e=="variable")return d(q,Pe)}function Sr(e){return e=="string"?t():e=="("?d(E):e=="."?d(W):d(be,Ue,Te)}function be(e,r){return e=="{"?ae(be,"}"):(e=="variable"&&G(r),r=="*"&&(i.marked="keyword"),t(Cr))}function Ue(e){if(e==",")return t(be,Ue)}function Cr(e,r){if(r=="as")return i.marked="keyword",t(be)}function Te(e,r){if(r=="from")return i.marked="keyword",t(E)}function jr(e){return e=="]"?t():d(I(q,"]"))}function Je(){return d(m("form"),L,w("{"),m("}"),I(Tr,"}"),f,f)}function Tr(){return d(L,z)}function Ir(e,r){return e.lastType=="operator"||e.lastType==","||D.test(r.charAt(0))||/[,.]/.test(r.charAt(0))}function Fe(e,r,n){return r.tokenize==F&&/^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(r.lastType)||r.lastType=="quasi"&&/\{\s*$/.test(e.string.slice(0,e.pos-(n||0)))}return{startState:function(e){var r={tokenize:F,lastType:"sof",cc:[],lexical:new Ae((e||0)-h,0,"block",!1),localVars:p.localVars,context:p.localVars&&new ie(null,null,!1),indented:e||0};return p.globalVars&&typeof p.globalVars=="object"&&(r.globalVars=p.globalVars),r},token:function(e,r){if(e.sol()&&(r.lexical.hasOwnProperty("align")||(r.lexical.align=!1),r.indented=e.indentation(),ge(e,r)),r.tokenize!=se&&e.eatSpace())return null;var n=r.tokenize(e,r);return te=="comment"?n:(r.lastType=te=="operator"&&(fe=="++"||fe=="--")?"incdec":te,Ve(r,n,te,fe,e))},indent:function(e,r){if(e.tokenize==se||e.tokenize==ne)return a.Pass;if(e.tokenize!=F)return 0;var n=r&&r.charAt(0),o=e.lexical,s;if(!/^\s*else\b/.test(r))for(var k=e.cc.length-1;k>=0;--k){var v=e.cc[k];if(v==f)o=o.prev;else if(v!=Be&&v!=M)break}for(;(o.type=="stat"||o.type=="form")&&(n=="}"||(s=e.cc[e.cc.length-1])&&(s==W||s==Y)&&!/^[,\.=+\-*:?[\(]/.test(r));)o=o.prev;b&&o.type==")"&&o.prev.type=="stat"&&(o=o.prev);var A=o.type,R=n==A;return A=="vardef"?o.indented+(e.lastType=="operator"||e.lastType==","?o.info.length+1:0):A=="form"&&n=="{"?o.indented:A=="form"?o.indented+h:A=="stat"?o.indented+(Ir(e,r)?b||h:0):o.info=="switch"&&!R&&p.doubleIndentSwitch!=!1?o.indented+(/^(?:case|default)\b/.test(r)?h:2*h):o.align?o.column+(R?0:1):o.indented+(R?0:h)},electricInput:/^\s*(?:case .*?:|default:|\{|\})$/,blockCommentStart:S?null:"/*",blockCommentEnd:S?null:"*/",blockCommentContinue:S?null:" * ",lineComment:S?null:"//",fold:"brace",closeBrackets:"()[]{}''\"\"``",helperType:S?"json":"javascript",jsonldMode:x,jsonMode:S,expressionAllowed:Fe,skipExpression:function(e){Ve(e,"atom","atom","true",new a.StringStream("",2,null))}}}),a.registerHelper("wordChars","javascript",/[\w$]/),a.defineMIME("text/javascript","javascript"),a.defineMIME("text/ecmascript","javascript"),a.defineMIME("application/javascript","javascript"),a.defineMIME("application/x-javascript","javascript"),a.defineMIME("application/ecmascript","javascript"),a.defineMIME("application/json",{name:"javascript",json:!0}),a.defineMIME("application/x-json",{name:"javascript",json:!0}),a.defineMIME("application/manifest+json",{name:"javascript",json:!0}),a.defineMIME("application/ld+json",{name:"javascript",jsonld:!0}),a.defineMIME("text/typescript",{name:"javascript",typescript:!0}),a.defineMIME("application/typescript",{name:"javascript",typescript:!0})})})();const Rr="modulepreload",Dr=function(l,u){return new URL(l,u).href},He={},Nr=function(u,a,c){let p=Promise.resolve();if(a&&a.length>0){const h=document.getElementsByTagName("link"),b=document.querySelector("meta[property=csp-nonce]"),x=(b==null?void 0:b.nonce)||(b==null?void 0:b.getAttribute("nonce"));p=Promise.all(a.map(S=>{if(S=Dr(S,c),S in He)return;He[S]=!0;const T=S.endsWith(".css"),y=T?'[rel="stylesheet"]':"";if(!!c)for(let D=h.length-1;D>=0;D--){const J=h[D];if(J.href===S&&(!T||J.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${S}"]${y}`))return;const V=document.createElement("link");if(V.rel=T?"stylesheet":Rr,T||(V.as="script",V.crossOrigin=""),V.href=S,x&&V.setAttribute("nonce",x),document.head.appendChild(V),T)return new Promise((D,J)=>{V.addEventListener("load",D),V.addEventListener("error",()=>J(new Error(`Unable to preload CSS for ${S}`)))})}))}return p.then(()=>u()).catch(h=>{const b=new Event("vite:preloadError",{cancelable:!0});if(b.payload=h,window.dispatchEvent(b),!b.defaultPrevented)throw h})};async function Br(l){return(await Nr(()=>import("./preCompileModule.D6udID2n.js"),__vite__mapDeps([0,1,2]),import.meta.url)).precompileJavascriptCode(l)}class Ke{async run(u){const a={error:!1,code:u};try{/^\s*\{/.test(u)&&/\}\s*$/.test(u)&&(u=`(${u})`);const c=await this.precompile(u);if(!window)return a.error=!0,a.value="Run error: container or window is null",a;const p=await window.eval(c);return p===void 0?(a.value=void 0,a):(await Or(p.returnValue)==="fulfilled"?a.value=await p.returnValue:a.value=p.returnValue,a)}catch(c){return a.error=!0,a.value=c,a}}precompile(u){return Br(u)}}function Or(l){const u={};return Promise.race([l,u]).then(a=>a===u?"pending":"fulfilled",()=>"rejected")}function zr(l,u,a,c){const p=document.getElementById(l),h=new Ke,b=Mr(p.querySelector("div.computelite-text-editor"),{lineNumbers:!0,lineWrapping:!0,mode:"javascript",autoRefresh:!0,autofocus:!0,tabSize:4,indentUnit:4,extraKeys:{"Ctrl-Enter":async x=>$r(b,p,h,u,a)}});return b.addKeyMap({Backspace:function(x){Pr(x)}}),setTimeout(()=>{b.refresh(),b.setValue(c)},10),b}async function $r(l,u,a,c,p){l.getInputField().blur();const h=l.getValue();u.querySelector(".cell-bottom").innerHTML="",u.querySelector(".sidebar-inner")&&(u.querySelector(".sidebar-inner").innerHTML=""),We(u,!0),await P("updateData",c,"UPDATE S_JsNotebook SET CellContent = ? WHERE CellId = ?",[h,p]);const b=_("div");u.querySelector(".cell-bottom").appendChild(b),window.outputArea=b;const x=console.log;console.log=(...T)=>{Qe(u,[T.join(" ")]),x.apply(console,T)};const S=await a.run(h);console.log=x,We(u,!1),Ur(u,S,b)}function We(l,u){const a=l.querySelector("span.fa-regular");a&&(a.classList.toggle("fa-play-circle",!u),a.classList.toggle("fa-hourglass",u))}function Pr(l){const u=l.getCursor(),a=l.getLine(u.line),c=l.getOption("indentUnit");/^\s*$/.test(a.slice(0,u.ch))&&u.ch>0?l.setCursor({line:u.line,ch:Math.max(0,u.ch-c)}):l.execCommand("delCharBefore")}function Ur(l,u,a){const{value:c,error:p}=u;if(!Ge(c,a)&&c!==void 0&&Qe(l,[c],p?"error":void 0),p)throw c}function Ge(l,u){return l instanceof HTMLElement?(u.appendChild(l),!0):!1}async function Jr(l,u){l.innerHTML="";const c=await P("fetchData",u,"SELECT CellId,CellContent FROM S_JsNotebook");for(let p of c){const h=_("computelite-cell","cell-grid cell-container celltype-python");h.setAttribute("tabindex","0");const b=_("div","cell-bottom"),x=_("div");window.outputArea=x,b.appendChild(x),h.appendChild(b),l.appendChild(h),await Fr(p[1],x)}}async function Fr(l,u){const c=await new Ke().run(l);if(!Ge(c.value,u)&&c.error)throw c.value}const Hr=new URLSearchParams(window.location.search);let O=Hr.get("modelName"),Ie=!1;const _e=document.getElementById("cellContainer");window.onload=async function(){try{window.loadCDNScripts=async function(u){const a=(c,p)=>new Promise((h,b)=>{if(p&&window[p]){h(window[p]);return}const x=document.createElement("script");x.src=c,x.async=!0,x.onload=()=>h(window[p]||!0),x.onerror=()=>b(new Error(`Failed to load script: ${c}`)),document.head.appendChild(x)});return Promise.all(u.map(c=>a(c.url,c.globalVar)))},window.loadCDNStylesheets=async function(u){return Promise.all(u.map(({url:a})=>new Promise((c,p)=>{const h=document.createElement("link");h.rel="stylesheet",h.href=a,h.onload=()=>c(a),h.onerror=()=>p(`Failed to load CSS: ${a}`),document.head.appendChild(h)})))};let l=await P("init");if(!l||l.msg!="Success"){ye("Alert!","Some error occured while initializing sqlite.");return}if(!O&&!((await Ar("home","getUserModels")).some(c=>c[0]==="Default_DB")?"Default_DB":(await Vr())[0]||null)){ye("Alert!","Model Name not found in the URL.");return}window.getData=async(u,a=[])=>P("fetchData",O,u,a),window.executeQuery=async(u,a=[])=>P("updateData",O,u,a),await Xe()}catch(l){ye("",`Error during initialization:, ${l}`),console.error("Error during initialization:",l);return}};async function Xe(){document.getElementById("loadingOverlay").classList.remove("hidden");try{(await P("fetchData",O,"SELECT CellId,CellContent FROM S_JsNotebook")).forEach(([a,c])=>Ye(a,c))}catch(l){console.error("Error populating cells:",l)}finally{document.getElementById("loadingOverlay").classList.add("hidden")}}function Ye(l,u=""){const a=Lr(),c=_("computelite-cell","cell-grid cell-container celltype-python",a);c.setAttribute("tabindex","0");const p=_("div","cell-controls cell-controls-left cell-controls-left-top"),h=_("button","btn cell-controls-button py-1");h.title="Run Cell";const b=_("span","fa-regular fa-play-circle");b.style.fontSize="16px",h.appendChild(b),p.appendChild(h);const x=_("div","cell-top flush");let S=_("div");S.style="position: relative;width: 100%;height: 0;";const T=_("div","computelite-text-editor-controls",null,_("div"));T.firstChild.appendChild(_("button","btn btn-small transparent p-1 px-1 me-1",null,_("span","fa-solid fa-trash-alt"))),T.querySelector("button").title="Delete Cell",T.querySelector("span").style="color: #00000066;",T.querySelector("button").onclick=async function(){await P("deleteData",O,"DELETE FROM S_JsNotebook WHERE CellId = ?",[l])&&c.remove()};const y=_("computelite-text-editor"),U=_("div","computelite-text-editor");S.appendChild(T),y.appendChild(S),y.appendChild(U),x.appendChild(y),c.appendChild(p),c.appendChild(x);const V=_("div","cell-bottom");c.appendChild(V),_e.appendChild(c),zr(a,O,l,u)}document.getElementById("addCell").onclick=async function(){if(!O){ye("Alert!","Model Name not found in the URL.");return}try{let l=await P("insertData",O,"INSERT INTO S_JsNotebook (CellContent) VALUES (?)",[""]);Ye(l)}catch(l){console.error("Error adding cell:",l)}};document.getElementById("hideCode").onclick=async function(){try{Ie?(this.innerText="Hide Code",_e.innerHTML="",await Xe()):(await Jr(_e,O),this.innerText="Show Code"),Ie=!Ie}catch(l){console.error("Error toggling cells:",l)}};
