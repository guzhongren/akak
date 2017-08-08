// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../renderers/support/utils","../../lib/glMatrix","../graphics/graphicUtils"],function(F,l,w,x,A){function h(a){return null!==a&&void 0!==a}function m(a){return"number"===typeof a}function e(a,b){a&&a.push(b)}function k(a,b,c,d,f){var g=a.minSize,y=a.maxSize;if(a.expression)return e(f,"Could not convert size info: expression not supported"),!1;if(a.useSymbolValue)return a=d.symbolSize[c],b.minSize[c]=a,b.maxSize[c]=a,b.offset[c]=b.minSize[c],b.factor[c]=0,b.type[c]=
1,!0;if(h(a.field)){if(h(a.stops)){if(2===a.stops.length&&m(a.stops[0].size)&&m(a.stops[1].size))return z(a.stops[0].size,a.stops[1].size,a.stops[0].value,a.stops[1].value,b,c),b.type[c]=1,!0;e(f,"Could not convert size info: stops only supported with 2 elements");return!1}if(m(g)&&m(y)&&h(a.minDataValue)&&h(a.maxDataValue))return z(g,y,a.minDataValue,a.maxDataValue,b,c),b.type[c]=1,!0;if(null!=w.meterIn[a.valueUnit])return b.minSize[c]=-Infinity,b.maxSize[c]=Infinity,b.offset[c]=0,b.factor[c]=1/
w.meterIn[a.valueUnit],b.type[c]=1,!0;"unknown"===a.valueUnit?e(f,"Could not convert size info: proportional size not supported"):e(f,"Could not convert size info: scale-dependent size not supported");return!1}if(!h(a.field)){if(a.stops&&a.stops[0]&&m(a.stops[0].size))return b.minSize[c]=a.stops[0].size,b.maxSize[c]=a.stops[0].size,b.offset[c]=b.minSize[c],b.factor[c]=0,b.type[c]=1,!0;if(m(g))return b.minSize[c]=g,b.maxSize[c]=g,b.offset[c]=g,b.factor[c]=0,b.type[c]=1,!0}e(f,"Could not convert size info: unsupported variant of sizeInfo");
return!1}function z(a,b,c,d,f,g){d=0<Math.abs(d-c)?(b-a)/(d-c):0;f.minSize[g]=0<d?a:b;f.maxSize[g]=0<d?b:a;f.offset[g]=a-c*d;f.factor[g]=d}function B(a,b,c,d){if(a.normalizationField||a.valueRepresentation)return e(d,"Could not convert size info: unsupported property"),null;var f=a.field;if(null!=f&&"string"!==typeof f)return e(d,"Could not convert size info: field is not a string"),null;if(!b.size)b.size={field:a.field,minSize:[0,0,0],maxSize:[0,0,0],offset:[0,0,0],factor:[0,0,0],type:[0,0,0]};else if(a.field)if(!b.size.field)b.size.field=
a.field;else if(a.field!==b.size.field)return e(d,"Could not convert size info: multiple fields in use"),null;switch(a.axis){case "width":return(f=k(a,b.size,0,c,d))?b:null;case "height":return(f=k(a,b.size,2,c,d))?b:null;case "depth":return(f=k(a,b.size,1,c,d))?b:null;case "width-and-depth":return(f=k(a,b.size,0,c,d))&&k(a,b.size,1,c,d),f?b:null;case null:case void 0:case "all":return(f=(f=(f=k(a,b.size,0,c,d))&&k(a,b.size,1,c,d))&&k(a,b.size,2,c,d))?b:null;default:return e(d,'Could not convert size info: unknown axis "'+
a.axis+'""'),null}}function C(a,b,c){for(var d=0;3>d;++d){var f=b.unitInMeters;1===a.type[d]&&(f*=b.modelSize[d],a.type[d]=2);a.minSize[d]/=f;a.maxSize[d]/=f;a.offset[d]/=f;a.factor[d]/=f}if(0!==a.type[0])b=0;else if(0!==a.type[1])b=1;else if(0!==a.type[2])b=2;else return e(c,"No size axis contains a valid size or scale"),!1;for(d=0;3>d;++d)0===a.type[d]&&(a.minSize[d]=a.minSize[b],a.maxSize[d]=a.maxSize[b],a.offset[d]=a.offset[b],a.factor[d]=a.factor[b],a.type[d]=a.type[b]);return!0}function p(a,
b,c){a[4*b+0]=c.r/255;a[4*b+1]=c.g/255;a[4*b+2]=c.b/255;a[4*b+3]=c.a}function D(a,b,c){if(a.normalizationField)return e(c,"Could not convert color info: unsupported property"),null;if("string"===typeof a.field)if(a.stops){if(8<a.stops.length)return e(c,"Could not convert color info: too many color stops"),null;b.color={field:a.field,values:[],colors:[]};a=a.stops;for(c=0;8>c;++c){var d=a[Math.min(c,a.length-1)];b.color.values[c]=d.value;p(b.color.colors,c,d.color)}}else if(a.colors){if(!h(a.minDataValue)||
!h(a.maxDataValue))return e(c,"Could not convert color info: missing data values"),null;if(2!==a.colors.length)return e(c,"Could not convert color info: invalid colors array"),null;b.color={field:a.field,values:[],colors:[]};b.color.values[0]=a.minDataValue;p(b.color.colors,0,a.colors[0]);b.color.values[1]=a.maxDataValue;p(b.color.colors,1,a.colors[1]);for(c=2;8>c;++c)b.color.values[c]=a.maxDataValue,p(b.color.colors,c,a.colors[1])}else return e(c,"Could not convert color info: missing stops or colors"),
null;else if(a.stops&&0<=a.stops.length||a.colors&&0<=a.colors.length)for(a=a.stops&&0<=a.stops.length?a.stops[0].color:a.colors[0],b.color={field:null,values:Array(8),colors:Array(32)},c=0;8>c;c++)b.color.values[c]=Infinity,p(b.color.colors,c,a);else return e(c,"Could not convert color info: no field and no colors/stops"),null;return b}function q(a,b,c,d){a=2===c&&"arithmetic"===a.rotationType;b.offset[c]=a?90:0;b.factor[c]=a?-1:1;b.type[c]=1}function E(a,b,c){if("string"!==typeof a.field)return e(c,
"Could not convert rotation info: field is not a string"),null;if(!b.rotation)b.rotation={field:a.field,offset:[0,0,0],factor:[1,1,1],type:[0,0,0]};else if(a.field)if(!b.rotation.field)b.rotation.field=a.field;else if(a.field!==b.rotation.field)return e(c,"Could not convert rotation info: multiple fields in use"),null;switch(a.axis){case "tilt":return q(a,b.rotation,0,c),b;case "roll":return q(a,b.rotation,1,c),b;case null:case void 0:case "heading":return q(a,b.rotation,2,c),b;default:return e(c,
'Could not convert rotation info: unknown axis "'+a.axis+'""'),null}}function r(a,b,c){if(!a)return null;var d=!b.supportedTypes||!!b.supportedTypes.size,f=!b.supportedTypes||!!b.supportedTypes.color,g=!b.supportedTypes||!!b.supportedTypes.rotation;return(a=a.reduce(function(a,n){if(!a)return a;if(n.valueExpression)return e(c,"Could not convert visual variables: arcade expressions not supported"),null;switch(n.type){case "size":return d?B(n,a,b,c):a;case "color":return f?D(n,a,c):a;case "rotation":return g?
E(n,a,c):a;default:return e(c,"Could not convert visual variables: unsupported type "+n.type),null}},{size:null,color:null,rotation:null}))&&a.size&&!C(a.size,b,c)?null:a}function t(a,b,c){if(!!a!==!!b||a&&a.field!==b.field)return!1;if(a&&"rotation"===c)for(c=0;3>c;c++)if(a.type[c]!==b.type[c]||a.offset[c]!==b.offset[c]||a.factor[c]!==b.factor[c])return!1;return!0}function u(a,b){var c={vvSizeEnabled:!1,vvSizeMinSize:null,vvSizeMaxSize:null,vvSizeOffset:null,vvSizeFactor:null,vvSizeValue:null,vvColorEnabled:!1,
vvColorValues:null,vvColorColors:null,vvSymbolAnchor:null,vvSymbolRotation:null},d=a&&null!=a.size;a&&a.size?(c.vvSizeEnabled=!0,c.vvSizeMinSize=a.size.minSize,c.vvSizeMaxSize=a.size.maxSize,c.vvSizeOffset=a.size.offset,c.vvSizeFactor=a.size.factor):a&&d&&(c.vvSizeValue=b.transformation.scale);a&&d&&(c.vvSymbolAnchor=b.transformation.anchor,c.vvSymbolRotation=b.transformation.rotation);a&&a.color&&(c.vvColorEnabled=!0,c.vvColorValues=a.color.values,c.vvColorColors=a.color.colors);return c}Object.defineProperty(l,
"__esModule",{value:!0});l.convertVisualVariables=r;l.initFastSymbolUpdatesState=function(a,b,c){return b&&a&&!a.disableFastUpdates?(a=r(a.visualVariables,c))?{enabled:!0,visualVariables:a,materialParameters:u(a,c),customTransformation:a&&null!=a.size}:{enabled:!1}:{enabled:!1}};l.updateFastSymbolUpdatesState=function(a,b,c){if(!b||!a.enabled)return!1;var d=a.visualVariables;b=r(b.visualVariables,c);if(!(b&&t(d.size,b.size,"size")&&t(d.color,b.color,"color")&&t(d.rotation,b.rotation,"rotation")))return!1;
a.visualVariables=b;a.materialParameters=u(b,c);a.customTransformation=b&&null!=b.size;return!0};l.getMaterialParams=u;var v;(function(a){var b=x.mat4d,c=x.vec3,d=b.create(),f=c.create();a.evaluateModelTransform=function(a,c,e){if(!a.vvSizeEnabled)return e;b.identity(d);b.multiply(e,d,d);A.computeObjectRotation(a.vvSymbolRotation[2],a.vvSymbolRotation[0],a.vvSymbolRotation[1],d);if(a.vvSizeEnabled){for(e=0;3>e;++e){var g=a.vvSizeOffset[e]+c[0]*a.vvSizeFactor[e],k=e;var h=a.vvSizeMinSize[e],l=a.vvSizeMaxSize[e],
g=g<h?h:g>l?l:g;f[k]=g}b.scale(d,f,d)}else b.scale(d,a.vvSizeValue,d);b.translate(d,a.vvSymbolAnchor,d);return d}})(v||(v={}));l.evaluateModelTransform=v.evaluateModelTransform});