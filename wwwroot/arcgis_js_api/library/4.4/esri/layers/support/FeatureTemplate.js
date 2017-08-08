// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/accessorSupport/decorators ../../core/JSONSupport ../../core/kebabDictionary ../../core/lang".split(" "),function(b,k,f,c,a,g,h,d){var e=h({esriFeatureEditToolAutoCompletePolygon:"auto-complete-polygon",esriFeatureEditToolCircle:"circle",esriFeatureEditToolEllipse:"ellipse",esriFeatureEditToolFreehand:"freehand",esriFeatureEditToolLine:"line",esriFeatureEditToolNone:"none",esriFeatureEditToolPoint:"point",
esriFeatureEditToolPolygon:"polygon",esriFeatureEditToolRectangle:"rectangle",esriFeatureEditToolArrow:"arrow",esriFeatureEditToolTriangle:"triangle",esriFeatureEditToolLeftArrow:"left-arrow",esriFeatureEditToolRightArrow:"right-arrow",esriFeatureEditToolUpArrow:"up-arrow",esriFeatureEditToolDownArrow:"down-arrow"});b=function(b){function a(a){a=b.call(this,a)||this;a.name=null;a.description=null;a.drawingTool=null;a.prototype=null;a.thumbnail=null;return a}f(a,b);a.prototype.writeDrawingTool=function(a,
b){b.drawingTool=e.toJSON(a)};a.prototype.writePrototype=function(a,b){b.prototype=d.fixJson(d.clone(a),!0)};a.prototype.writeThumbnail=function(a,b){b.thumbnail=d.fixJson(d.clone(a))};return a}(a.declared(g));c([a.property({json:{write:!0}})],b.prototype,"name",void 0);c([a.property({json:{write:!0}})],b.prototype,"description",void 0);c([a.property({json:{read:e.fromJSON,write:!0}})],b.prototype,"drawingTool",void 0);c([a.writer("drawingTool")],b.prototype,"writeDrawingTool",null);c([a.property({json:{write:!0}})],
b.prototype,"prototype",void 0);c([a.writer("prototype")],b.prototype,"writePrototype",null);c([a.property({json:{write:!0}})],b.prototype,"thumbnail",void 0);c([a.writer("thumbnail")],b.prototype,"writeThumbnail",null);return b=c([a.subclass("esri.layers.support.FeatureTemplate")],b)});