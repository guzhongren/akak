// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/accessorSupport/decorators dojo/_base/lang ../request ../core/Error ../core/promiseUtils ../core/requireUtils ./TiledLayer ./mixins/ArcGISMapService ./mixins/ArcGISCachedService ./mixins/OperationalLayer ./mixins/PortalLayer ./support/rasterFormats/LercCodec".split(" "),function(k,c,l,d,b,e,f,m,g,n,p,q,r,t,u,v){c=function(c){function b(a){a=c.call(this)||this;a.type="elevation";a.url=null;a.opacity=
1;a.operationalLayerType="ArcGISTiledElevationServiceLayer";return a}l(b,c);b.prototype.normalizeCtorArgs=function(a,b){return"string"===typeof a?e.mixin({},{url:a},b):a};b.prototype.load=function(){var a=this;this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:function(a){for(var b=0;b<a.typeKeywords.length;b++)if("elevation 3d layer"===a.typeKeywords[b].toLowerCase())return!0;throw new m("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",
{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"});}}).always(function(){return a._fetchImageService()}));return this};b.prototype.fetchTile=function(a,b,c,d){var h=this;void 0===d&&(d=0);return this.load().then(function(){return h._fetchTileAvailability(a,b,c)}).then(function(){var d=h.getTileUrl(a,b,c);return f(d,{responseType:"array-buffer",failOk:!0})}).then(function(a){a=v.decode(a.data,{noDataValue:d,returnFileInfo:!0});return{values:a.pixelData,width:a.width,height:a.height,
maxZError:a.fileInfo.maxZError,noDataValue:a.noDataValue}})};b.prototype.queryElevation=function(a,b){var c=this;return n.when(k,"./support/ElevationQuery").then(function(d){return(new d.ElevationQuery).query(c,a,b)})};b.prototype._fetchTileAvailability=function(a,b,c){return this.tilemapCache?this.tilemapCache.fetchAvailability(a,b,c):g.resolve("unknown")};b.prototype._fetchImageService=function(){var a=this;return g.resolve().then(function(){if(a.resourceInfo)return a.resourceInfo;var b={query:e.mixin({f:"json"},
a.parsedUrl.query),responseType:"json",callbackParamName:"callback"};return f(a.parsedUrl.path,b)}).then(function(b){b.ssl&&(a.url=a.url.replace(/^http:/i,"https:"));a.read(b.data,{origin:"service",url:a.parsedUrl})})};return b}(b.declared(p,q,r,t,u));d([b.shared({"3d":"../views/3d/layers/ElevationLayerView3D"})],c.prototype,"viewModulePaths",void 0);d([b.property()],c.prototype,"resourceInfo",void 0);d([b.property()],c.prototype,"type",void 0);d([b.property()],c.prototype,"url",void 0);d([b.property({json:{read:!1,
write:!1}})],c.prototype,"opacity",void 0);d([b.property()],c.prototype,"operationalLayerType",void 0);return c=d([b.subclass("esri.layers.ElevationLayer")],c)});