try{if(!Uint8Array.prototype.slice)Object.defineProperty(Uint8Array.prototype,"slice",{value:function(begin,end){return new Uint8Array(Array.prototype.slice.call(this,begin,end))}})}catch(err){}var fa="function"==typeof Object.create?Object.create:function(r){function m(){}m.prototype=r;return new m},D;
if("function"==typeof Object.setPrototypeOf)D=Object.setPrototypeOf;else{var L;a:{var ha={sa:!0},O={};try{O.__proto__=ha;L=O.sa;break a}catch(r){}L=!1}D=L?function(r,m){r.__proto__=m;if(r.__proto__!==m)throw new TypeError(r+" is not extensible");return r}:null}var P=D;
function Q(r,m){r.prototype=fa(m.prototype);r.prototype.constructor=r;if(P)P(r,m);else for(var n in m)if("prototype"!=n)if(Object.defineProperties){var k=Object.getOwnPropertyDescriptor(m,n);k&&Object.defineProperty(r,n,k)}else r[n]=m[n]}var ia="function"==typeof Object.defineProperties?Object.defineProperty:function(r,m,n){r!=Array.prototype&&r!=Object.prototype&&(r[m]=n.value)},ja="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
function R(r,m){if(m){for(var n=ja,k=r.split("."),t=0;t<k.length-1;t++){var q=k[t];q in n||(n[q]={});n=n[q]}k=k[k.length-1];t=n[k];q=m(t);q!=t&&null!=q&&ia(n,k,{configurable:!0,writable:!0,value:q})}}R("Object.is",function(r){return r?r:function(m,n){return m===n?0!==m||1/m===1/n:m!==m&&n!==n}});
R("Array.prototype.includes",function(r){return r?r:function(m,n){var k=this;k instanceof String&&(k=String(k));var t=k.length,q=n||0;for(0>q&&(q=Math.max(q+t,0));q<t;q++){var u=k[q];if(u===m||Object.is(u,m))return!0}return!1}});
R("String.prototype.codePointAt",function(r){return r?r:function(m){if(null==this)throw new TypeError("The 'this' value for String.prototype.codePointAt must not be null or undefined");var n=this.length;m=Number(m)||0;if(0<=m&&m<n){m|=0;var k=this.charCodeAt(m);if(55296>k||56319<k||m+1===n)return k;m=this.charCodeAt(m+1);return 56320>m||57343<m?k:1024*(k-55296)+m+9216}}});
var ka="function"==typeof Object.assign?Object.assign:function(r,m){for(var n=1;n<arguments.length;n++){var k=arguments[n];if(k)for(var t in k)Object.prototype.hasOwnProperty.call(k,t)&&(r[t]=k[t])}return r};R("Object.assign",function(r){return r||ka});var Y=this;
function Z(r){function m(a){a=void 0===a?null:a;var b=n.call(this)||this;a&&b.fromBuffer(a);return b}function n(){return k.apply(this,arguments)||this}function k(){return t.apply(this,arguments)||this}function t(){var a=q.call(this)||this;a.bitDepth="0";a.f={h:0,m:!1,A:!1,C:!1};a.M={4:17,8:1,"8a":6,"8m":7,16:1,24:1,32:1,"32f":3,64:3};return a}function q(){return u.apply(this,arguments)||this}function u(){var a=y.call(this)||this;a.U.push("RF64");a.fmt={chunkId:"",chunkSize:0,audioFormat:0,numChannels:0,
sampleRate:0,byteRate:0,blockAlign:0,bitsPerSample:0,cbSize:0,validBitsPerSample:0,dwChannelMask:0,subformat:[]};a.fact={chunkId:"",chunkSize:0,dwSampleLength:0};a.cue={chunkId:"",chunkSize:0,dwCuePoints:0,points:[]};a.smpl={chunkId:"",chunkSize:0,dwManufacturer:0,dwProduct:0,dwSamplePeriod:0,dwMIDIUnityNote:0,dwMIDIPitchFraction:0,dwSMPTEFormat:0,dwSMPTEOffset:0,dwNumSampleLoops:0,dwSamplerData:0,loops:[]};a.bext={chunkId:"",chunkSize:0,description:"",originator:"",originatorReference:"",originationDate:"",
originationTime:"",timeReference:[0,0],version:0,UMID:"",loudnessValue:0,loudnessRange:0,maxTruePeakLevel:0,maxMomentaryLoudness:0,maxShortTermLoudness:0,reserved:"",codingHistory:""};a.iXML={chunkId:"",chunkSize:0,value:""};a.ds64={chunkId:"",chunkSize:0,riffSizeHigh:0,riffSizeLow:0,dataSizeHigh:0,dataSizeLow:0,originationTime:0,sampleCountHigh:0,sampleCountLow:0};a.data={chunkId:"",chunkSize:0,samples:new Uint8Array(0)};a.LIST=[];a.junk={chunkId:"",chunkSize:0,chunkData:[]};a._PMX={chunkId:"",chunkSize:0,
value:""};a.g={h:16,m:!1,A:!1,C:!1};return a}function y(){this.container="";this.chunkSize=0;this.format="";this.T={};this.c=0;this.a={h:32,m:!1,A:!1,C:!1};this.U=["RIFF","RIFX"]}function F(a,b,c){this.a=this.c(a,b,c);this.offset=Math.ceil(a/8)}function K(a){a=z.call(this,a)||this;a.max=Math.pow(2,a.h)/2-1;a.min=-a.max-1;return a}function z(a){this.h=a;this.b=8>a?1:Math.ceil(a/8);this.max=Math.pow(2,a)-1;this.min=0;a=8-((a-1|7)+1-a);this.f=Math.pow(2,0<a?a:8)-1}function G(a,b){this.b=a;this.c=b;this.a=
(1<<a-1)-1;this.f=Math.ceil((a+b)/8);this.g=Math.pow(2,this.a+1);this.i=a+b;this.j=Math.pow(2,-(8*this.f-1-a))}function la(a){for(var b=new Uint8Array(256),c=0;64>c;c++)b["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charCodeAt(c)]=c;c=.75*a.length;"="===a[a.length-1]&&(c--,"="===a[a.length-2]&&c--);c=new ArrayBuffer(c);for(var d=new Uint8Array(c),e=0,f=0;e<a.length;e+=4){var h=b[a.charCodeAt(e)],l=b[a.charCodeAt(e+1)],p=b[a.charCodeAt(e+2)],v=b[a.charCodeAt(e+3)];d[f++]=h<<2|
l>>4;d[f++]=(l&15)<<4|p>>2;d[f++]=(p&3)<<6|v&63}return c}function ma(a,b){return a=0<a?parseInt(a/b.Z*b.X,10):parseInt(a/b.$*b.Y,10)}function na(a,b){return parseInt(0<a?a*b.X:a*b.Y,10)}function oa(a,b){return 0<a?a/b.Z:a/b.$}function pa(a){aa[0]=a;return aa[0]}function qa(a,b){function c(d){return d}a!=b&&(["32f","64"].includes(a)?["32f","64"].includes(b)?c=pa:c=na:c=["32f","64"].includes(b)?oa:ma);return c}function ba(a){if("32f"!=a&&"64"!=a&&("8">parseInt(a,10)||"53"<parseInt(a,10)))throw Error("Invalid bit depth.");
}function ra(a){for(var b=new Uint8Array(a.length),c=[],d=0,e=0,f=0;f<a.length;f++)0==f%505&&0!=f&&(b.set(sa(c),d),d+=256,c=[],e++),c.push(a[f]);a=a.length/2;a%2&&a++;return b.slice(0,a+512+4*e)}function ta(a,b){b=void 0===b?256:b;for(var c=new Int16Array(2*a.length),d=[],e=0,f=0;f<a.length;f++){if(0==f%b&&0!=f){var h=d[1]<<8|d[0];A=32768<h?h-65536:h;B=d[2];H=S[B];h=[A,A];for(var l=4;l<d.length;l++){var p=d[l],v=p>>4;h.push(ca(v<<4^p));h.push(ca(v))}d=h;c.set(d,e);e+=d.length;d=[]}d.push(a[f])}return c}
function sa(a){var b=a[0];T(b);var c=[];c.push(b&255);c.push(b>>8&255);c.push(E);c.push(0);for(b=3;b<a.length;b+=2){var d=T(a[b]),e=T(a[b+1]);c.push(e<<4|d)}return c}function T(a){var b=a-C;0<=b?a=0:(a=8,b=-b);var c=S[E],d=c>>3;b>c&&(a|=4,b-=c,d+=c);c>>=1;b>c&&(a|=2,b-=c,d+=c);c>>=1;b>c&&(a|=1,d+=c);b=a;C=b&8?C-d:C+d;-32768>C?C=-32768:32767<C&&(C=32767);E+=da[b&7];0>E?E=0:88<E&&(E=88);return a}function ca(a){var b=0;a&4&&(b+=H);a&2&&(b+=H>>1);a&1&&(b+=H>>2);b+=H>>3;a&8&&(b=-b);A+=b;32767<A?A=32767:
-32767>A&&(A=-32767);B+=da[a];0>B?B=0:88<B&&(B=88);H=S[B];return A}function ua(a){for(var b=new Uint8Array(a.length),c=0;c<a.length;c++){var d=c;var e=a[c];e=-32768==e?-32767:e;var f=~e>>8&128;f||(e*=-1);32635<e&&(e=32635);if(256<=e){var h=va[e>>8&127];e=h<<4|e>>h+3&15}else e>>=4;b[d]=e^f^85}return b}function wa(a){for(var b=new Int16Array(a.length),c=0;c<a.length;c++){var d=c,e=a[c],f=0;e^=85;e&128&&(e&=-129,f=-1);var h=((e&240)>>4)+4;e=4!=h?1<<h|(e&15)<<h-4|1<<h-5:e<<1|1;b[d]=-8*(0===f?e:-e)}return b}
function xa(a){for(var b=new Uint8Array(a.length),c=0;c<a.length;c++){var d=c,e=a[c];var f=e>>8&128;0!=f&&(e=-e);32635<e&&(e=32635);e+=132;var h=ya[e>>7&255];b[d]=~(f|h<<4|e>>h+3&15)}return b}function za(a){for(var b=new Int16Array(a.length),c=0;c<a.length;c++){var d=c,e=a[c];e=~e;var f=e>>4&7;f=Aa[f]+((e&15)<<f+3);0!=(e&128)&&(f=-f);b[d]=f}return b}function U(a,b,c,d){d=void 0===d?a.length:d;if(d%b)throw Error("Bad buffer length.");for(c=void 0===c?0:c;c<d;c+=b){var e=a,f=b,h=c;f--;for(var l=0;l<
f;l++){var p=e[h+l];e[h+l]=e[h+f];e[h+f]=p;f--}}}function V(a,b,c){c=void 0===c?0:c;for(var d=0,e=a.length;d<e;d++){var f=a.codePointAt(d);if(128>f)b[c]=f,c++;else{var h=0,l=0;2047>=f?(h=1,l=192):65535>=f?(h=2,l=224):1114111>=f&&(h=3,l=240,d++);b[c]=(f>>6*h)+l;for(c++;0<h;)b[c]=128|f>>6*(h-1)&63,c++,h--}}return c}function W(a){var b=Math.floor(a);a-=b;return.5>a?b:.5<a?b+1:b%2?b+1:b}function I(a,b,c){c=void 0===c?a.length:c;var d=void 0===b?0:b;c=void 0===c?a.length:c;b="";for(d=void 0===d?0:d;d<
c;){var e=128,f=191,h=!1,l=a[d++];if(0<=l&&127>=l)b+=String.fromCharCode(l);else{var p=0;194<=l&&223>=l?p=1:224<=l&&239>=l?(p=2,224===a[d]&&(e=160),237===a[d]&&(f=159)):240<=l&&244>=l?(p=3,240===a[d]&&(e=144),244===a[d]&&(f=143)):h=!0;l&=(1<<8-p-1)-1;for(var v=0;v<p;v++){if(a[d]<e||a[d]>f)h=!0;l=l<<6|a[d]&63;d++}h?b+=String.fromCharCode(65533):65535>=l?b+=String.fromCharCode(l):(l-=65536,b+=String.fromCharCode((l>>10&1023)+55296,(l&1023)+56320))}}return b}function w(a){var b=[];V(a,b,0);return b}
function M(a,b,c,d){d=void 0===d?0:d;b=b||{};var e=new F(b.h,b.C,b.A),f=0,h=d;try{for(var l=a.length;f<l;f++)d=e.w(c,a[f],d);b.m&&U(c,e.offset,h,d)}catch(p){ea(p,a[f],f)}return d}function J(a,b,c,d,e,f){d=void 0===d?0:d;e=void 0===e?a.length:e;f=void 0===f?!1:f;b=b||{};var h=new F(b.h,b.C,b.A),l=h.offset,p=(e-d)%l;if(f&&(p||a.length<l))throw Error("Bad buffer length");e-=p;f=0;p=d;try{for(b.m&&U(a,l,d,e);p<e;p+=l,f++)c[f]=h.D(a,p);b.m&&U(a,l,d,e)}catch(v){ea(v,a.slice(p,p+l),p)}}function g(a,b){var c=
[];M([a],b,c,0);return c}function X(a,b,c,d,e){d=void 0===d?a.length:d;var f=[];J(a,b,f,void 0===c?0:c,d,void 0===e?!1:e);return f}function N(a,b,c){c=void 0===c?0:c;return X(a,b,c,c+Math.ceil(b.h/8),!0)[0]}function ea(a,b,c){a.message=a.constructor.name+" at index "+c+": "+b;throw a;}function x(a,b,c){c=void 0===c?!0:c;a=w(a);if(c)for(c=a.length;c<b;c++)a.push(0);return a}var aa=new Float32Array(1),da=[-1,-1,-1,-1,2,4,6,8,-1,-1,-1,-1,2,4,6,8],S=[7,8,9,10,11,12,13,14,16,17,19,21,23,25,28,31,34,37,
41,45,50,55,60,66,73,80,88,97,107,118,130,143,157,173,190,209,230,253,279,307,337,371,408,449,494,544,598,658,724,796,876,963,1060,1166,1282,1411,1552,1707,1878,2066,2272,2499,2749,3024,3327,3660,4026,4428,4871,5358,5894,6484,7132,7845,8630,9493,10442,11487,12635,13899,15289,16818,18500,20350,22385,24623,27086,29794,32767],C=0,E=0,A=0,B=0,H=7,va=[1,1,2,2,3,3,3,3,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,
7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7],ya=[0,0,1,1,2,2,2,2,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7],Aa=[0,132,396,924,1980,4092,8316,16764];G.prototype.w=function(a,b,c){if("number"!=typeof b)throw new TypeError;Math.abs(b)>this.g-2*this.i&&(b=0>b?-Infinity:Infinity);var d=0>((b=+b)||1/b)?1:0>b?1:0;b=Math.abs(b);var e=Math.min(Math.floor(Math.log(b)/Math.LN2),1023),f=W(b/Math.pow(2,e)*Math.pow(2,this.c));b!==b?(f=Math.pow(2,this.c-1),e=(1<<this.b)-1):0!==b&&(b>=Math.pow(2,1-this.a)?
(2<=f/Math.pow(2,this.c)&&(e+=1,f=1),e>this.a?(e=(1<<this.b)-1,f=0):(e+=this.a,f=W(f)-Math.pow(2,this.c))):(f=W(b/Math.pow(2,1-this.a-this.c)),e=0));return this.l(a,c,d,e,f)};G.prototype.D=function(a,b){for(var c=(1<<this.b)-1,d="",e=this.f-1;0<=e;e--){var f=a[e+b].toString(2);d+="00000000".substring(f.length)+f}e="1"==d.charAt(0)?-1:1;d=d.substring(1);f=parseInt(d.substring(0,this.b),2);d=d.substring(this.b);if(f==c)return 0!==parseInt(d,2)?NaN:Infinity*e;0===f?(f+=1,c=parseInt(d,2)):c=parseInt("1"+
d,2);return e*c*this.j*Math.pow(2,f-this.a)};G.prototype.l=function(a,b,c,d,e){var f=[];f.push(c);for(c=this.b;0<c;--c)f[c]=d%2?1:0,d=Math.floor(d/2);d=f.length;for(c=this.c;0<c;--c)f[d+c]=e%2?1:0,e=Math.floor(e/2);e=f.join("");f=this.f+b-1;for(d=b;f>=b;)a[f]=parseInt(e.substring(0,8),2),e=e.substring(8),f--,d++;return d};z.prototype.w=function(a,b,c){c=void 0===c?0:c;if(b!==b||"number"!=typeof b)throw new TypeError;this.a(b);return this.g(a,b,c)};z.prototype.D=function(a,b){var c=this.c(a,void 0===
b?0:b);this.a(c);return c};z.prototype.c=function(a,b){b=void 0===b?0:b;for(var c=0,d=0;d<this.b;d++)c+=a[b+d]*Math.pow(256,d);return c};z.prototype.a=function(a){if(a>this.max||a<this.min)throw new RangeError;};z.prototype.g=function(a,b,c){c=void 0===c?0:c;a[c]=(0>b?b+Math.pow(2,this.h):b)&255;c++;for(var d=this.b,e=2;e<d;e++)a[c]=Math.floor(b/Math.pow(2,8*(e-1)))&255,c++;8<this.h&&(a[c]=Math.floor(b/Math.pow(2,8*(this.b-1)))&this.f,c++);return c};Q(K,z);K.prototype.w=function(a,b,c){return z.prototype.w.call(this,
a,b,void 0===c?0:c)};K.prototype.D=function(a,b){var c=z.prototype.c.call(this,a,void 0===b?0:b);c=this.i(c);this.a(c);return c};K.prototype.i=function(a){a>this.max&&(a-=2*this.max+2);return a};F.prototype.D=function(a,b){return this.a.D(a,void 0===b?0:b)};F.prototype.w=function(a,b,c){return this.a.w(a,b,void 0===c?0:c)};F.prototype.c=function(a,b,c){if(b){if(!a||16!==a&&32!==a&&64!==a)throw Error("Unsupported type: float, bits: "+a);return this.b(a)}if(!a||1>a||53<a)throw Error("Unsupported type: int, bits: "+
a);return c?new K(a):new z(a)};F.prototype.b=function(a){return 16===a?new G(5,11):32===a?new G(8,23):new G(11,52)};y.prototype.ha=function(a){this.c=0;this.container=this.o(a,4);if(-1===this.U.indexOf(this.container))throw Error("Not a supported format.");this.a.m="RIFX"===this.container;this.chunkSize=this.b(a);this.format=this.o(a,4);this.T={chunkId:this.container,chunkSize:this.chunkSize,format:this.format,subChunks:this.P(a)}};y.prototype.l=function(a,b){b=void 0===b?!1:b;for(var c=this.T.subChunks,
d=[],e=0;e<c.length;e++)if(c[e].chunkId==a)if(b)d.push(c[e]);else return c[e];return"LIST"==a?d.length?d:null:null};y.prototype.o=function(a,b){var c=I(a,this.c,this.c+b);this.c+=b;return c};y.prototype.b=function(a){a=N(a,this.a,this.c);this.c+=4;return a};y.prototype.P=function(a){for(var b=[],c=this.c;c<=a.length-8;)b.push(this.Fa(a,c)),c+=8+b[b.length-1].chunkSize,c=c%2?c+1:c;return b};y.prototype.Fa=function(a,b){var c={chunkId:this.pa(a,b),chunkSize:this.qa(a,b)};"LIST"==c.chunkId?(c.format=
I(a,b+8,b+12),this.c+=4,c.subChunks=this.P(a)):(this.c=b+8+(c.chunkSize%2?c.chunkSize+1:c.chunkSize),c.chunkData={start:b+8,end:this.c});return c};y.prototype.pa=function(a,b){this.c+=4;return I(a,b,b+4)};y.prototype.qa=function(a,b){this.c+=4;return N(a,this.a,b+4)};Q(u,y);u.prototype.fromBuffer=function(a,b){b=void 0===b?!0:b;this.O();this.ha(a);this.g.m=this.a.m;if("WAVE"!=this.format)throw Error('Could not find the "WAVE" format identifier');this.Ma(a);this.Oa(a);this.Na(a);this.Ja(a);this.da(a);
this.Ka(a);this.ba(a);this.La(a,b);this.Qa(a);this.Ra(a);this.ca(a)};u.prototype.O=function(){var a=new u;Object.assign(this.fmt,a.fmt);Object.assign(this.fact,a.fact);Object.assign(this.cue,a.cue);Object.assign(this.smpl,a.smpl);Object.assign(this.bext,a.bext);Object.assign(this.iXML,a.iXML);Object.assign(this.ds64,a.ds64);Object.assign(this.data,a.data);this.LIST=[];Object.assign(this.junk,a.junk);Object.assign(this._PMX,a._PMX)};u.prototype.Oa=function(a){var b=this.l("fmt ");if(b)this.c=b.chunkData.start,
this.fmt.chunkId=b.chunkId,this.fmt.chunkSize=b.chunkSize,this.fmt.audioFormat=this.i(a),this.fmt.numChannels=this.i(a),this.fmt.sampleRate=this.b(a),this.fmt.byteRate=this.b(a),this.fmt.blockAlign=this.i(a),this.fmt.bitsPerSample=this.i(a),this.Pa(a);else throw Error('Could not find the "fmt " chunk');};u.prototype.Pa=function(a){16<this.fmt.chunkSize&&(this.fmt.cbSize=this.i(a),18<this.fmt.chunkSize&&(this.fmt.validBitsPerSample=this.i(a),20<this.fmt.chunkSize&&(this.fmt.dwChannelMask=this.b(a),
this.fmt.subformat=[this.b(a),this.b(a),this.b(a),this.b(a)])))};u.prototype.Na=function(a){var b=this.l("fact");b&&(this.c=b.chunkData.start,this.fact.chunkId=b.chunkId,this.fact.chunkSize=b.chunkSize,this.fact.dwSampleLength=this.b(a))};u.prototype.Ka=function(a){var b=this.l("cue ");if(b)for(this.c=b.chunkData.start,this.cue.chunkId=b.chunkId,this.cue.chunkSize=b.chunkSize,this.cue.dwCuePoints=this.b(a),b=0;b<this.cue.dwCuePoints;b++)this.cue.points.push({dwName:this.b(a),dwPosition:this.b(a),
fccChunk:this.o(a,4),dwChunkStart:this.b(a),dwBlockStart:this.b(a),dwSampleOffset:this.b(a)})};u.prototype.ba=function(a){var b=this.l("smpl");if(b)for(this.c=b.chunkData.start,this.smpl.chunkId=b.chunkId,this.smpl.chunkSize=b.chunkSize,this.smpl.dwManufacturer=this.b(a),this.smpl.dwProduct=this.b(a),this.smpl.dwSamplePeriod=this.b(a),this.smpl.dwMIDIUnityNote=this.b(a),this.smpl.dwMIDIPitchFraction=this.b(a),this.smpl.dwSMPTEFormat=this.b(a),this.smpl.dwSMPTEOffset=this.b(a),this.smpl.dwNumSampleLoops=
this.b(a),this.smpl.dwSamplerData=this.b(a),b=0;b<this.smpl.dwNumSampleLoops;b++)this.smpl.loops.push({dwName:this.b(a),dwType:this.b(a),dwStart:this.b(a),dwEnd:this.b(a),dwFraction:this.b(a),dwPlayCount:this.b(a)})};u.prototype.La=function(a,b){var c=this.l("data");if(c)this.data.chunkId="data",this.data.chunkSize=c.chunkSize,b&&(this.data.samples=a.slice(c.chunkData.start,c.chunkData.end));else throw Error('Could not find the "data" chunk');};u.prototype.Ja=function(a){var b=this.l("bext");b&&(this.c=
b.chunkData.start,this.bext.chunkId=b.chunkId,this.bext.chunkSize=b.chunkSize,this.bext.description=this.o(a,256),this.bext.originator=this.o(a,32),this.bext.originatorReference=this.o(a,32),this.bext.originationDate=this.o(a,10),this.bext.originationTime=this.o(a,8),this.bext.timeReference=[this.b(a),this.b(a)],this.bext.version=this.i(a),this.bext.UMID=this.o(a,64),this.bext.loudnessValue=this.i(a),this.bext.loudnessRange=this.i(a),this.bext.maxTruePeakLevel=this.i(a),this.bext.maxMomentaryLoudness=
this.i(a),this.bext.maxShortTermLoudness=this.i(a),this.bext.reserved=this.o(a,180),this.bext.codingHistory=this.o(a,this.bext.chunkSize-602))};u.prototype.da=function(a){var b=this.l("iXML");b&&(this.c=b.chunkData.start,this.iXML.chunkId=b.chunkId,this.iXML.chunkSize=b.chunkSize,this.iXML.value=I(a,this.c,this.c+this.iXML.chunkSize))};u.prototype.Ma=function(a){var b=this.l("ds64");if(b)this.c=b.chunkData.start,this.ds64.chunkId=b.chunkId,this.ds64.chunkSize=b.chunkSize,this.ds64.riffSizeHigh=this.b(a),
this.ds64.riffSizeLow=this.b(a),this.ds64.dataSizeHigh=this.b(a),this.ds64.dataSizeLow=this.b(a),this.ds64.originationTime=this.b(a),this.ds64.sampleCountHigh=this.b(a),this.ds64.sampleCountLow=this.b(a);else if("RF64"==this.container)throw Error('Could not find the "ds64" chunk');};u.prototype.Ra=function(a){var b=this.l("LIST",!0);if(null!==b)for(var c=0;c<b.length;c++){var d=b[c];this.LIST.push({chunkId:d.chunkId,chunkSize:d.chunkSize,format:d.format,subChunks:[]});for(var e=0;e<d.subChunks.length;e++)this.Sa(d.subChunks[e],
d.format,a)}};u.prototype.Sa=function(a,b,c){"adtl"==b?-1<["labl","note","ltxt"].indexOf(a.chunkId)&&(this.c=a.chunkData.start,b={chunkId:a.chunkId,chunkSize:a.chunkSize,dwName:this.b(c)},"ltxt"==a.chunkId?(b.dwSampleLength=this.b(c),b.dwPurposeID=this.b(c),b.dwCountry=this.i(c),b.dwLanguage=this.i(c),b.dwDialect=this.i(c),b.dwCodePage=this.i(c),b.value=""):b.value=this.S(c,this.c),this.LIST[this.LIST.length-1].subChunks.push(b)):"INFO"==b&&(this.c=a.chunkData.start,this.LIST[this.LIST.length-1].subChunks.push({chunkId:a.chunkId,
chunkSize:a.chunkSize,value:this.S(c,this.c)}))};u.prototype.Qa=function(a){var b=this.l("junk");b&&(this.junk={chunkId:b.chunkId,chunkSize:b.chunkSize,chunkData:[].slice.call(a.slice(b.chunkData.start,b.chunkData.end))})};u.prototype.ca=function(a){var b=this.l("_PMX");b&&(this.c=b.chunkData.start,this._PMX.chunkId=b.chunkId,this._PMX.chunkSize=b.chunkSize,this._PMX.value=I(a,this.c,this.c+this._PMX.chunkSize))};u.prototype.S=function(a,b){for(var c=b=void 0===b?0:b;c<a.length&&(this.c++,0!==a[c]);c++);
return I(a,b,this.c-1)};u.prototype.i=function(a){a=N(a,this.g,this.c);this.c+=2;return a};Q(q,u);q.prototype.toBuffer=function(){this.g.m="RIFX"===this.container;this.a.m=this.g.m;for(var a=[this.ya(),this.ua(),this.oa(),this.Ha(),this.wa(),this.va(),w(this.data.chunkId),g(this.data.samples.length,this.a),this.data.samples,this.ra(),this.Da(),this.za(),this.Ga()],b=0,c=0;c<a.length;c++)b+=a[c].length;c=new Uint8Array(b+12);var d=V(this.container,c,0);d=M([b+4],this.a,c,void 0===d?0:d);d=V(this.format,
c,void 0===d?0:d);for(b=0;b<a.length;b++)c.set(a[b],d),d+=a[b].length;return c};q.prototype.oa=function(){var a=[];this.na();this.bext.chunkId&&(this.bext.chunkSize=602+this.bext.codingHistory.length,a=a.concat(w(this.bext.chunkId),g(602+this.bext.codingHistory.length,this.a),x(this.bext.description,256),x(this.bext.originator,32),x(this.bext.originatorReference,32),x(this.bext.originationDate,10),x(this.bext.originationTime,8),g(this.bext.timeReference[0],this.a),g(this.bext.timeReference[1],this.a),
g(this.bext.version,this.g),x(this.bext.UMID,64),g(this.bext.loudnessValue,this.g),g(this.bext.loudnessRange,this.g),g(this.bext.maxTruePeakLevel,this.g),g(this.bext.maxMomentaryLoudness,this.g),g(this.bext.maxShortTermLoudness,this.g),x(this.bext.reserved,180),x(this.bext.codingHistory,this.bext.codingHistory.length)));this.j(a);return a};q.prototype.na=function(){for(var a in this.bext)if(this.bext.hasOwnProperty(a)&&this.bext[a]&&"timeReference"!=a){this.bext.chunkId="bext";break}if(this.bext.timeReference[0]||
this.bext.timeReference[1])this.bext.chunkId="bext"};q.prototype.Ha=function(){var a=[];if(this.iXML.chunkId){var b=w(this.iXML.value);this.iXML.chunkSize=b.length;a=a.concat(w(this.iXML.chunkId),g(this.iXML.chunkSize,this.a),b)}this.j(a);return a};q.prototype.ua=function(){var a=[];this.ds64.chunkId&&(a=a.concat(w(this.ds64.chunkId),g(this.ds64.chunkSize,this.a),g(this.ds64.riffSizeHigh,this.a),g(this.ds64.riffSizeLow,this.a),g(this.ds64.dataSizeHigh,this.a),g(this.ds64.dataSizeLow,this.a),g(this.ds64.originationTime,
this.a),g(this.ds64.sampleCountHigh,this.a),g(this.ds64.sampleCountLow,this.a)));this.j(a);return a};q.prototype.ra=function(){var a=[];if(this.cue.chunkId){var b=this.aa();a=a.concat(w(this.cue.chunkId),g(b.length+4,this.a),g(this.cue.dwCuePoints,this.a),b)}this.j(a);return a};q.prototype.aa=function(){for(var a=[],b=0;b<this.cue.dwCuePoints;b++)a=a.concat(g(this.cue.points[b].dwName,this.a),g(this.cue.points[b].dwPosition,this.a),w(this.cue.points[b].fccChunk),g(this.cue.points[b].dwChunkStart,
this.a),g(this.cue.points[b].dwBlockStart,this.a),g(this.cue.points[b].dwSampleOffset,this.a));return a};q.prototype.Da=function(){var a=[];if(this.smpl.chunkId){var b=this.Ea();a=a.concat(w(this.smpl.chunkId),g(b.length+36,this.a),g(this.smpl.dwManufacturer,this.a),g(this.smpl.dwProduct,this.a),g(this.smpl.dwSamplePeriod,this.a),g(this.smpl.dwMIDIUnityNote,this.a),g(this.smpl.dwMIDIPitchFraction,this.a),g(this.smpl.dwSMPTEFormat,this.a),g(this.smpl.dwSMPTEOffset,this.a),g(this.smpl.dwNumSampleLoops,
this.a),g(this.smpl.dwSamplerData,this.a),b)}this.j(a);return a};q.prototype.Ea=function(){for(var a=[],b=0;b<this.smpl.dwNumSampleLoops;b++)a=a.concat(g(this.smpl.loops[b].dwName,this.a),g(this.smpl.loops[b].dwType,this.a),g(this.smpl.loops[b].dwStart,this.a),g(this.smpl.loops[b].dwEnd,this.a),g(this.smpl.loops[b].dwFraction,this.a),g(this.smpl.loops[b].dwPlayCount,this.a));return a};q.prototype.va=function(){var a=[];this.fact.chunkId&&(a=a.concat(w(this.fact.chunkId),g(this.fact.chunkSize,this.a),
g(this.fact.dwSampleLength,this.a)));this.j(a);return a};q.prototype.wa=function(){var a=[];if(this.fmt.chunkId)return a=a.concat(w(this.fmt.chunkId),g(this.fmt.chunkSize,this.a),g(this.fmt.audioFormat,this.g),g(this.fmt.numChannels,this.g),g(this.fmt.sampleRate,this.a),g(this.fmt.byteRate,this.a),g(this.fmt.blockAlign,this.g),g(this.fmt.bitsPerSample,this.g),this.xa()),this.j(a),a;throw Error('Could not find the "fmt " chunk');};q.prototype.xa=function(){var a=[];16<this.fmt.chunkSize&&(a=a.concat(g(this.fmt.cbSize,
this.g)));18<this.fmt.chunkSize&&(a=a.concat(g(this.fmt.validBitsPerSample,this.g)));20<this.fmt.chunkSize&&(a=a.concat(g(this.fmt.dwChannelMask,this.a)));24<this.fmt.chunkSize&&(a=a.concat(g(this.fmt.subformat[0],this.a),g(this.fmt.subformat[1],this.a),g(this.fmt.subformat[2],this.a),g(this.fmt.subformat[3],this.a)));return a};q.prototype.za=function(){for(var a=[],b=0;b<this.LIST.length;b++){var c=this.Ba(this.LIST[b].subChunks,this.LIST[b].format);a=a.concat(w(this.LIST[b].chunkId),g(c.length+
4,this.a),w(this.LIST[b].format),c)}this.j(a);return a};q.prototype.Ba=function(a,b){for(var c=[],d=0;d<a.length;d++){if("INFO"==b){var e=x(a[d].value,a[d].value.length);c=c.concat(w(a[d].chunkId),g(e.length+1,this.a),e);c.push(0)}else"adtl"==b&&(-1<["labl","note"].indexOf(a[d].chunkId)?(e=x(a[d].value,a[d].value.length),c=c.concat(w(a[d].chunkId),g(e.length+5,this.a),g(a[d].dwName,this.a),e),c.push(0)):"ltxt"==a[d].chunkId&&(c=c.concat(this.Ca(a[d]))));this.j(c)}return c};q.prototype.Ga=function(){var a=
[];if(this._PMX.chunkId){var b=w(this._PMX.value);this._PMX.chunkSize=b.length;a=a.concat(w(this._PMX.chunkId),g(this._PMX.chunkSize,this.a),b)}this.j(a);return a};q.prototype.Ca=function(a){return w(a.chunkId).concat(g(a.value.length+20,this.a),g(a.dwName,this.a),g(a.dwSampleLength,this.a),g(a.dwPurposeID,this.a),g(a.dwCountry,this.g),g(a.dwLanguage,this.g),g(a.dwDialect,this.g),g(a.dwCodePage,this.g),x(a.value,a.value.length))};q.prototype.ya=function(){var a=[];if(this.junk.chunkId)return a.concat(w(this.junk.chunkId),
g(this.junk.chunkData.length,this.a),this.junk.chunkData);this.j(a);return a};q.prototype.j=function(a){a.length%2&&a.push(0)};Q(t,q);t.prototype.fromScratch=function(a,b,c,d,e){e=void 0===e?{}:e;this.O();this.R(a,b,c,d,e)};t.prototype.R=function(a,b,c,d,e){e=void 0===e?{}:e;e.container||(e.container="RIFF");this.container=e.container;this.bitDepth=c;if(0<d.length&&d[0].constructor===Array){for(var f=[],h=0,l=d[0].length;h<l;h++)for(var p=0,v=d.length;p<v;p++)f.push(d[p][h]);d=f}this.V();f=this.f.h/
8;this.data.samples=new Uint8Array(d.length*f);M(d,this.f,this.data.samples);this.Ia(c,a,b,f,this.data.samples.length,e);this.data.chunkId="data";this.data.chunkSize=this.data.samples.length;this.W()};t.prototype.fromBuffer=function(a,b){q.prototype.fromBuffer.call(this,a,void 0===b?!0:b);this.ja();this.V()};t.prototype.toBuffer=function(){this.W();return q.prototype.toBuffer.call(this)};t.prototype.getSamples=function(a){a=void 0===a?!1:a;var b=new Float64Array(this.data.samples.length/(this.f.h/
8));J(this.data.samples,this.f,b);if(!a&&1<this.fmt.numChannels){a=this.fmt.numChannels;for(var c=[],d=0;d<a;d++)c[d]=new Float64Array(b.length/a);for(d=0;d<a;d++)for(var e=0,f=d;f<b.length;f+=a)c[d][e++]=b[f];b=c}return b};t.prototype.getSample=function(a){a*=this.f.h/8;if(a+this.f.h/8>this.data.samples.length)throw Error("Range error");return N(this.data.samples.slice(a,a+this.f.h/8),this.f)};t.prototype.setSample=function(a,b){a*=this.f.h/8;if(a+this.f.h/8>this.data.samples.length)throw Error("Range error");
M([b],this.f,this.data.samples,void 0===a?0:a)};t.prototype.getiXML=function(){return this.iXML.value};t.prototype.setiXML=function(a){if("string"!==typeof a)throw new TypeError("iXML value must be a string.");this.iXML.value=a;this.iXML.chunkId="iXML"};t.prototype.get_PMX=function(){return this._PMX.value};t.prototype.set_PMX=function(a){if("string"!==typeof a)throw new TypeError("_PMX value must be a string.");this._PMX.value=a;this._PMX.chunkId="_PMX"};t.prototype.Ia=function(a,b,c,d,e,f){"4"==
a?this.ka(a,b,c,d,e,f):"8a"==a||"8m"==a?this.la(a,b,c,d,e,f):-1==Object.keys(this.M).indexOf(a)||2<b?this.ma(a,b,c,d,e,f):this.F(a,b,c,d,e,f)};t.prototype.F=function(a,b,c,d,e,f){this.container=f.container;this.chunkSize=36+e;this.format="WAVE";this.bitDepth=a;this.fmt={chunkId:"fmt ",chunkSize:16,audioFormat:this.M[a]||65534,numChannels:b,sampleRate:c,byteRate:b*d*c,blockAlign:b*d,bitsPerSample:parseInt(a,10),cbSize:0,validBitsPerSample:0,dwChannelMask:0,subformat:[]}};t.prototype.ka=function(a,
b,c,d,e,f){this.F(a,b,c,d,e,f);this.chunkSize=40+e;this.fmt.chunkSize=20;this.fmt.byteRate=4055;this.fmt.blockAlign=256;this.fmt.bitsPerSample=4;this.fmt.cbSize=2;this.fmt.validBitsPerSample=505;this.fact={chunkId:"fact",chunkSize:4,dwSampleLength:2*e}};t.prototype.ma=function(a,b,c,d,e,f){this.F(a,b,c,d,e,f);this.chunkSize=60+e;this.fmt.chunkSize=40;this.fmt.bitsPerSample=(parseInt(a,10)-1|7)+1;this.fmt.cbSize=22;this.fmt.validBitsPerSample=parseInt(a,10);a=this.fmt;c=0;1===b?c=4:2===b?c=3:4===b?
c=51:6===b?c=63:8===b&&(c=1599);a.dwChannelMask=c;this.fmt.subformat=[1,1048576,2852126848,1905997824]};t.prototype.la=function(a,b,c,d,e,f){this.F(a,b,c,d,e,f);this.chunkSize=40+e;this.fmt.chunkSize=20;this.fmt.cbSize=2;this.fmt.validBitsPerSample=8;this.fact={chunkId:"fact",chunkSize:4,dwSampleLength:e}};t.prototype.ja=function(){3===this.fmt.audioFormat&&32===this.fmt.bitsPerSample?this.bitDepth="32f":6===this.fmt.audioFormat?this.bitDepth="8a":7===this.fmt.audioFormat?this.bitDepth="8m":this.bitDepth=
this.fmt.bitsPerSample.toString()};t.prototype.ia=function(){if(!(this.M[this.bitDepth]||8<parseInt(this.bitDepth,10)&&54>parseInt(this.bitDepth,10)))throw Error("Invalid bit depth.");};t.prototype.V=function(){this.f={h:(parseInt(this.bitDepth,10)-1|7)+1,C:"32f"==this.bitDepth||"64"==this.bitDepth,A:"8"!=this.bitDepth,m:"RIFX"==this.container};-1<["4","8a","8m"].indexOf(this.bitDepth)&&(this.f.h=8,this.f.A=!1)};t.prototype.W=function(){this.ia();var a=this.fmt.numChannels;if(1>a||65535<a*this.fmt.bitsPerSample/
8)throw Error("Invalid number of channels.");a=this.fmt.sampleRate;if(1>a||4294967295<this.fmt.bitsPerSample/8*this.fmt.numChannels*a)throw Error("Invalid sample rate.");};Q(k,t);k.prototype.getTag=function(a){a=this.K(a);return null!==a.u?this.LIST[a.LIST].subChunks[a.u].value:null};k.prototype.setTag=function(a,b){var c=a;if(c.constructor!==String)throw Error("Invalid tag name.");if(4>c.length)for(var d=0,e=4-c.length;d<e;d++)c+=" ";a=c;c=this.K(a);null!==c.u?(this.LIST[c.LIST].subChunks[c.u].chunkSize=
b.length+1,this.LIST[c.LIST].subChunks[c.u].value=b):null!==c.LIST?this.LIST[c.LIST].subChunks.push({chunkId:a,chunkSize:b.length+1,value:b}):(this.LIST.push({chunkId:"LIST",chunkSize:b.length+9,format:"INFO",subChunks:[]}),this.LIST[this.LIST.length-1].subChunks.push({chunkId:a,chunkSize:b.length+1,value:b}))};k.prototype.deleteTag=function(a){a=this.K(a);return null!==a.u?(this.LIST[a.LIST].subChunks.splice(a.u,1),!0):!1};k.prototype.listTags=function(){var a=this.Aa(),b={};if(null!==a)for(var c=
0,d=this.LIST[a].subChunks.length;c<d;c++)b[this.LIST[a].subChunks[c].chunkId]=this.LIST[a].subChunks[c].value;return b};k.prototype.listCuePoints=function(){for(var a=this.J(),b=0,c=a.length;b<c;b++)a[b].position=a[b].dwSampleOffset/this.fmt.sampleRate*1E3,a[b].dwSampleLength?(a[b].end=a[b].dwSampleLength/this.fmt.sampleRate*1E3,a[b].end+=a[b].position):a[b].end=null,delete a[b].value;return a};k.prototype.setCuePoint=function(a){this.cue.chunkId="cue ";a.label||(a.label="");var b=this.J();this.H();
var c=this.cue.points.length;this.cue.points=[];a.dwSampleOffset=a.position*this.fmt.sampleRate/1E3;a.dwSampleLength=0;a.end&&(a.dwSampleLength=a.end*this.fmt.sampleRate/1E3-a.dwSampleOffset);if(0===c)this.B(a,1);else{for(var d=!1,e=0;e<c;e++)b[e].dwSampleOffset>a.dwSampleOffset&&!d?(this.B(a,e+1),this.B(b[e],e+2),d=!0):this.B(b[e],d?e+2:e+1);d||this.B(a,this.cue.points.length+1)}this.cue.dwCuePoints=this.cue.points.length};k.prototype.deleteCuePoint=function(a){this.cue.chunkId="cue ";var b=this.J();
this.H();var c=this.cue.points.length;this.cue.points=[];for(var d=0;d<c;d++)d+1!==a&&this.B(b[d],d+1);this.cue.dwCuePoints=this.cue.points.length;this.cue.dwCuePoints?this.cue.chunkId="cue ":(this.cue.chunkId="",this.H())};k.prototype.updateLabel=function(a,b){var c=this.I();if(null!==c)for(var d=0,e=this.LIST[c].subChunks.length;d<e;d++)this.LIST[c].subChunks[d].dwName==a&&(this.LIST[c].subChunks[d].value=b)};k.prototype.J=function(){for(var a=[],b=0;b<this.cue.points.length;b++){var c=this.cue.points[b],
d=this.ta(c.dwName);d.label=d.value?d.value:"";d.dwPosition=c.dwPosition;d.fccChunk=c.fccChunk;d.dwChunkStart=c.dwChunkStart;d.dwBlockStart=c.dwBlockStart;d.dwSampleOffset=c.dwSampleOffset;a.push(d)}return a};k.prototype.ta=function(a){var b=this.I(),c={};if(null!==b)for(var d=0,e=this.LIST[b].subChunks.length;d<e;d++)if(this.LIST[b].subChunks[d].dwName==a&&this.LIST[b].subChunks[d].chunkId){var f=this.LIST[b].subChunks[d];c.value=f.value?f.value:c.value;c.dwName=f.dwName?f.dwName:0;c.dwSampleLength=
f.dwSampleLength?f.dwSampleLength:0;c.dwPurposeID=f.dwPurposeID?f.dwPurposeID:0;c.dwCountry=f.dwCountry?f.dwCountry:0;c.dwLanguage=f.dwLanguage?f.dwLanguage:0;c.dwDialect=f.dwDialect?f.dwDialect:0;c.dwCodePage=f.dwCodePage?f.dwCodePage:0}return c};k.prototype.Aa=function(){for(var a=null,b=0,c=this.LIST.length;b<c;b++)if("INFO"===this.LIST[b].format){a=b;break}return a};k.prototype.I=function(){for(var a=0,b=this.LIST.length;a<b;a++)if("adtl"==this.LIST[a].format)return a;return null};k.prototype.K=
function(a){for(var b={LIST:null,u:null},c=0,d=this.LIST.length;c<d;c++)if("INFO"==this.LIST[c].format){b.LIST=c;d=0;for(var e=this.LIST[c].subChunks.length;d<e;d++)if(this.LIST[c].subChunks[d].chunkId==a){b.u=d;break}break}return b};k.prototype.B=function(a,b){this.cue.points.push({dwName:b,dwPosition:a.dwPosition?a.dwPosition:0,fccChunk:a.fccChunk?a.fccChunk:"data",dwChunkStart:a.dwChunkStart?a.dwChunkStart:0,dwBlockStart:a.dwBlockStart?a.dwBlockStart:0,dwSampleOffset:a.dwSampleOffset});this.fa(a,
b)};k.prototype.H=function(){for(var a=0,b=this.LIST.length;a<b;a++)"adtl"==this.LIST[a].format&&this.LIST.splice(a)};k.prototype.fa=function(a,b){var c=this.I();null===c&&(this.LIST.push({chunkId:"LIST",chunkSize:4,format:"adtl",subChunks:[]}),c=this.LIST.length-1);this.ea(c,a,b);a.dwSampleLength&&this.ga(c,a,b)};k.prototype.ea=function(a,b,c){this.LIST[a].subChunks.push({chunkId:"labl",chunkSize:4,dwName:c,value:b.label});this.LIST[a].chunkSize+=12};k.prototype.ga=function(a,b,c){this.LIST[a].subChunks.push({chunkId:"ltxt",
chunkSize:20,dwName:c,dwSampleLength:b.dwSampleLength,dwPurposeID:b.dwPurposeID?b.dwPurposeID:0,dwCountry:b.dwCountry?b.dwCountry:0,dwLanguage:b.dwLanguage?b.dwLanguage:0,dwDialect:b.dwDialect?b.dwDialect:0,dwCodePage:b.dwCodePage?b.dwCodePage:0,value:b.label});this.LIST[a].chunkSize+=28};Q(n,k);n.prototype.toRIFF=function(){this.s(this.fmt.numChannels,this.fmt.sampleRate,this.bitDepth,X(this.data.samples,this.f))};n.prototype.toRIFX=function(){this.s(this.fmt.numChannels,this.fmt.sampleRate,this.bitDepth,
X(this.data.samples,this.f),{container:"RIFX"})};n.prototype.toIMAADPCM=function(){if(8E3!==this.fmt.sampleRate)throw Error("Only 8000 Hz files can be compressed as IMA-ADPCM.");if(1!==this.fmt.numChannels)throw Error("Only mono files can be compressed as IMA-ADPCM.");this.G();var a=new Int16Array(this.L());J(this.data.samples,this.f,a);this.s(this.fmt.numChannels,this.fmt.sampleRate,"4",ra(a),{container:this.v()})};n.prototype.fromIMAADPCM=function(a){a=void 0===a?"16":a;this.s(this.fmt.numChannels,
this.fmt.sampleRate,"16",ta(this.data.samples,this.fmt.blockAlign),{container:this.v()});"16"!=a&&this.toBitDepth(a)};n.prototype.toALaw=function(){this.G();var a=new Int16Array(this.L());J(this.data.samples,this.f,a);this.s(this.fmt.numChannels,this.fmt.sampleRate,"8a",ua(a),{container:this.v()})};n.prototype.fromALaw=function(a){a=void 0===a?"16":a;this.s(this.fmt.numChannels,this.fmt.sampleRate,"16",wa(this.data.samples),{container:this.v()});"16"!=a&&this.toBitDepth(a)};n.prototype.toMuLaw=function(){this.G();
var a=new Int16Array(this.L());J(this.data.samples,this.f,a);this.s(this.fmt.numChannels,this.fmt.sampleRate,"8m",xa(a),{container:this.v()})};n.prototype.fromMuLaw=function(a){a=void 0===a?"16":a;this.s(this.fmt.numChannels,this.fmt.sampleRate,"16",za(this.data.samples),{container:this.v()});"16"!=a&&this.toBitDepth(a)};n.prototype.toBitDepth=function(a,b){var c=a,d=this.bitDepth;void 0===b||b||("32f"!=a&&(c=this.f.h.toString()),d=""+this.f.h);this.N();var e=this.data.samples.length/(this.f.h/8),
f=new Float64Array(e);e=new Float64Array(e);J(this.data.samples,this.f,f);if("32f"==d||"64"==d)for(var h=0,l=f.length;h<l;h++)1<f[h]?f[h]=1:-1>f[h]&&(f[h]=-1);var p=d;d=c;ba(p);ba(d);h=qa(p,d);l={$:Math.pow(2,parseInt(p,10))/2,Y:Math.pow(2,parseInt(d,10))/2,Z:Math.pow(2,parseInt(p,10))/2-1,X:Math.pow(2,parseInt(d,10))/2-1};c=f.length;if("8"==p)for(var v=0;v<c;v++)e[v]=f[v]-=128;if("32f"==p||"64"==p)for(p=f.length,v=0;v<p;v++)1<f[v]?f[v]=1:-1>f[v]&&(f[v]=-1);for(p=0;p<c;p++)e[p]=h(f[p],l);if("8"==
d)for(f=0;f<c;f++)e[f]=e[f]+=128;this.s(this.fmt.numChannels,this.fmt.sampleRate,a,e,{container:this.v()})};n.prototype.G=function(){this.N();"16"!=this.bitDepth&&this.toBitDepth("16")};n.prototype.N=function(){"8a"==this.bitDepth?this.fromALaw():"8m"==this.bitDepth?this.fromMuLaw():"4"==this.bitDepth&&this.fromIMAADPCM()};n.prototype.v=function(){return"RF64"==this.container?"RIFF":this.container};n.prototype.s=function(a,b,c,d,e){e=void 0===e?{}:e;var f=new k;Object.assign(this.fmt,f.fmt);Object.assign(this.fact,
f.fact);Object.assign(this.ds64,f.ds64);Object.assign(this.data,f.data);this.R(a,b,c,d,e)};n.prototype.L=function(){var a=this.data.samples.length/2;a%2&&a++;return a};Q(m,n);m.prototype.fromBase64=function(a){this.fromBuffer(new Uint8Array(la(a)))};m.prototype.toBase64=function(){for(var a=this.toBuffer(),b="",c=0;c<a.length;c+=3)b+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[a[c]>>2],b+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(a[c]&3)<<4|a[c+1]>>
4],b+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(a[c+1]&15)<<2|a[c+2]>>6],b+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[a[c+2]&63];2===a.length%3?b=b.substring(0,b.length-1)+"=":1===a.length%3&&(b=b.substring(0,b.length-2)+"==");return b};m.prototype.toDataURI=function(){return"data:audio/wav;base64,"+this.toBase64()};m.prototype.fromDataURI=function(a){this.fromBase64(a.replace("data:audio/wav;base64,",""))};r.WaveFile=m;Object.defineProperty(r,"__esModule",
{value:!0})}"object"===typeof exports&&"undefined"!==typeof module?Z(exports):"function"===typeof define&&define.amd?define(["exports"],Z):(Y=Y||self,Z(Y.wavefile={}));
