// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["../../../core/numberUtils","../../../symbols/support/symbolUtils"],function(p,r){var A=[255,255,255],B=[200,200,200],q=[128,128,128];return{getRampStops:function(a,c,b,e){var d=c.legendOptions,d=d&&d.customValues,l,h,f;f=this._getSizeSymbol(a,b);var g=null!=c.minSize&&null!=c.maxSize;b=c.stops&&1<c.stops.length;var n=!!c.target;if(f&&(d||g||b&&!n)){var k=r.isVolumetricSymbol(f),d=k&&!b?[c.minDataValue,c.maxDataValue]:d||this._getSizeDataValues(a,c,f,e);!d&&b&&(d=c.stops.map(function(a){return a.value}),
(l=c.stops.some(function(a){return!!a.label}))&&(h=c.stops.map(function(a){return a.label})));b=!k||d&&2===d.length;if(!d||!b)return null;var t=d.length-1,u=[12,30];return d.map(function(b,d){var g=k?u[d]:this._getSize(a,c,f,b,e),n=this._getSizeAppliedCloneSymbol(f,g),m=p.format(b);d===t?m="\x3e "+m:0===d&&(m="\x3c "+m);m=l?h[d]:m;return{value:b,symbol:n,label:m,size:g}},this).reverse()}},_isFillSymbol:function(a){if(a)return-1<a.type.indexOf("3d")?(a=a.symbolLayers)?a.some(function(a){return a&&
"Fill"===a.type}):!1:-1!==a.type.indexOf("fill-symbol")},_getSizeSymbol:function(a,c){var b,e;if("simple"===a.type)b=a.symbol;else if("uniqueValue"===a.type||"classBreaks"===a.type)b=(b=(a=a.classBreakInfos||a.uniqueValueInfos)&&a[0])&&b.symbol,e=1<a.length;if(!b||this._isFillSymbol(b))return null;b=b.clone();if(c||e)c=b&&b.type,-1<c.indexOf("3d")?r.isVolumetricSymbol(b)||(-1!==c.indexOf("line-symbol-3d")?b.symbolLayers.forEach(function(a){a.material={color:q}}):b.symbolLayers.forEach(function(a){"Icon"!==
a.type||a.resource&&a.resource.href?a.material={color:B}:(a.material={color:A},a.outline={color:q,size:1.5})})):-1!==c.indexOf("line-symbol")?b.color=q:(b.color=A,"simple-marker-symbol"===c&&(b.outline={color:q,width:1.5}));return b},_getSizeDataValues:function(a,c,b,e){var d=a.getSizeRangeAtScale(c,e),l=d&&this._interpolateSizeRange(d),h;if(d||l){h=l.map(function(a){return this._getDataValueFromSize(a,c,d)},this);h=p.round(h);for(var f=1;f<h.length-1;f++){var g=this._roundDataValue(a,c,b,h[f],h[f-
1],e);g&&(h[f]=g[0],l[f]=g[1])}return h}},_interpolateSizeRange:function(a){var c=a.minSize;a=(a.maxSize-c)/4;for(var b=[],e=0;5>e;e++)b.push(c+a*e);return b},_getDataValueFromSize:function(a,c,b){var e=b.minSize;b=b.maxSize;var d=c.minDataValue;c=c.maxDataValue;return a<=e?d:a>=b?c:(a-e)/(b-e)*(c-d)+d},_roundDataValue:function(a,c,b,e,d,l){var h=this._getSize(a,c,b,e,l);d=this._getSize(a,c,b,d,l);var f,g=p.numDigits(e),n=g.integer,g=g.fractional,k,t,u,q,r,y,z,m,v,w,x;0<e&&1>e&&(f=Math.pow(10,g),
e*=f,n=p.numDigits(e).integer);for(--n;0<=n&&(k=Math.pow(10,n),g=Math.floor(e/k)*k,k*=Math.ceil(e/k),null!=f&&(g/=f,k/=f),t=(g+k)/2,t=p.round([g,t,k],{indexes:[1]})[1],u=this._getSize(a,c,b,g,l),q=this._getSize(a,c,b,k,l),r=this._getSize(a,c,b,t,l),y=p.percentChange(h,u,d,null),z=p.percentChange(h,q,d,null),m=p.percentChange(h,r,d,null),v=20>=y.previous,w=20>=z.previous,v&&w&&(y.previous<=z.previous?(v=!0,w=!1):(w=!0,v=!1)),v?x=[g,u]:w?x=[k,q]:20>=m.previous&&(x=[t,r]),!x);n--);return x},_getSizeAppliedCloneSymbol:function(a,
c){a=a.clone();var b=a.type;if(-1<b.indexOf("3d"))r.isVolumetricSymbol(a)||a.symbolLayers.forEach(function(a){"Fill"!==a.type&&(a.size=c)});else switch(b){case "simple-marker-symbol":a.size=c;break;case "picture-marker-symbol":var b=a.width,e=a.height;a.height=c;a.width=b/e*c;break;case "simple-line-symbol":a.width=c;break;case "text-symbol":a.font&&(a.font.size=c)}return a},_getSize:function(a,c,b,e,d){return a.getSize(e,{sizeInfo:c,scale:d,shape:-1!==b.type.indexOf("marker-symbol")?b.style:null})}}});