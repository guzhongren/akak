// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/JSONSupport ../core/kebabDictionary ../core/accessorSupport/decorators".split(" "),function(b,h,f,d,g,e,c){b=function(b){function c(a){a=b.call(this)||this;a.pointSizeAlgorithm=null;a.colorModulation=null;a.pointsPerInch=10;return a}f(c,b);c.prototype.readPointSizeAlgorithm=function(a,b,c){return null==a||"object"!==typeof a?null:"pointCloudFixedSizeAlgorithm"===a.type?{type:"fixed-size",useRealWorldSymbolSizes:!!a.useRealWorldSymbolSizes,
size:null!=a.size?parseFloat(a.size):0}:"pointCloudSplatAlgorithm"===a.type?{type:"splat",scaleFactor:null!=a.scaleFactor?parseFloat(a.scaleFactor):1,minSize:null!=a.minSize?parseFloat(a.minSize):4}:null};c.prototype.writePointSizeAlgorithm=function(a,b,c,d){a&&(b.pointSizeAlgorithm="fixed-size"===a.type?{type:"pointCloudFixedSizeAlgorithm",useRealWorldSymbolSizes:a.useRealWorldSymbolSizes,size:a.size}:{type:"pointCloudSplatAlgorithm",scaleFactor:a.scaleFactor,minSize:a.minSize})};c.prototype.readColorModulation=
function(a,b,c){return null==a||"object"!==typeof a?null:{field:String(a.field),minValue:null!=a.minValue?parseFloat(a.minValue):0,maxValue:null!=a.maxValue?parseFloat(a.maxValue):255}};return c}(c.declared(g));d([c.property({readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],b.prototype,"type",void 0);d([c.property({json:{write:!0}})],b.prototype,"pointSizeAlgorithm",void 0);d([c.reader("pointSizeAlgorithm")],b.prototype,"readPointSizeAlgorithm",null);d([c.writer("pointSizeAlgorithm")],b.prototype,
"writePointSizeAlgorithm",null);d([c.property({json:{write:!0}})],b.prototype,"colorModulation",void 0);d([c.reader("colorModulation")],b.prototype,"readColorModulation",null);d([c.property({json:{write:!0},type:Number})],b.prototype,"pointsPerInch",void 0);b=d([c.subclass("esri.renderers.PointCloudRenderer")],b);(function(b){b.pointSizeKebabDict=e({pointCloudSplatAlgorithm:"fixed-size",pointCloudFixedSizeAlgorithm:"splat"});b.fieldTransformTypeKebabDict=e({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",
absoluteValue:"absolute-value",moduloTen:"modulo-ten"})})(b||(b={}));return b});