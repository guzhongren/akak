// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/accessorSupport/decorators ../Viewpoint ../Basemap ../support/basemapUtils ../core/JSONSupport ../core/lang ../core/Logger ../core/Collection ../core/collectionUtils ../core/promiseUtils ./Environment ./Lighting ./support/Description ./support/Title ./support/Thumbnail dojo/_base/lang dojo/promise/all ../views/3d/lib/glMatrix".split(" "),function(e,J,t,f,d,z,A,u,v,B,C,w,D,h,k,E,x,y,n,p,F,G){var H=
0,m=l=function(d){function c(){var a=null!==d&&d.apply(this,arguments)||this;a.id="";return a}t(c,d);c.prototype.clone=function(){return new l({id:this.id})};return c}(d.declared(v));f([d.property({type:String,json:{write:!0}})],m.prototype,"id",void 0);var m=l=f([d.subclass()],m),q=w.ofType(m),I=C.getLogger("esri.webscene.Slide");e=function(d){function c(a){a=d.call(this,a)||this;a._currentAnimation=null;a.id=Date.now().toString(16)+"-slide-"+H++;a.title=new y.default;a.description=new x.default;
a.thumbnail=new n.default;a.viewpoint=null;a.basemap=null;a.environment=new k;a.visibleLayers=new q;return a}t(c,d);c.prototype.readBasemap=function(a,b){return b.baseMap?A.fromJSON(b.baseMap):null};c.prototype.writeBasemap=function(a,b,g,c){b.baseMap||(b.baseMap={});a.write(b.baseMap,c)};c.prototype.castBasemap=function(a){return u.ensureType(a)};Object.defineProperty(c.prototype,"visibleLayers",{set:function(a){this._set("visibleLayers",D.referenceSetter(a,this._get("visibleLayers"),q))},enumerable:!0,
configurable:!0});c.prototype.castVisibleLayers=function(a){return a&&"function"===typeof a.map?a.map(function(a){if("string"===typeof a)return{id:a};if(a.id)return{id:a.id};I.warn('Invalid visible layer, expected { id }, Layer or "id"');return a}):a};c.prototype.clone=function(){return new this.constructor({id:this.id,title:this.title.clone(),thumbnail:this.thumbnail.clone(),description:this.description&&this.description.clone()||null,viewpoint:this.viewpoint&&this.viewpoint.clone()||null,basemap:this.basemap&&
this.basemap.clone()||null,visibleLayers:this.visibleLayers.clone(),environment:this.environment&&this.environment.clone()||null})};c.prototype._updateVisibleLayersFrom=function(a){var b=this,g=[];return h.eachAlways(this._allLayers(a.map).map(function(b){return a.whenLayerView(b).then(function(a){a.visible&&g.push(new m({id:a.layer.id}))})}).toArray()).then(function(){b.visibleLayers.removeAll();b.visibleLayers.addMany(g)})};c.prototype.updateFrom=function(a,b){var g=this;b=p.mixin({screenshot:p.mixin({format:"jpeg",
quality:80,width:120,height:75},b&&b.screenshot)},b);return a.then(function(){g.viewpoint=a.viewpoint.clone();g.environment.lighting=E.prototype.clone.apply(a.environment.lighting);g.basemap=a.map.basemap&&a.map.basemap.clone()||null;return g._updateVisibleLayersFrom(a)}).then(function(){return a.takeScreenshot(b.screenshot)}).then(function(a){g.thumbnail=new n.default({url:a.dataURL});return g})};c.prototype.applyTo=function(a,b){var g=this,c=p.mixin({animate:!0},b);return this._applyBasemap(a).then(function(){return F([g._applyViewpoint(a,
c),g._applyLayerVisibility(a,c)])}).then(function(){return g})};c.prototype._applyBasemap=function(a){var b=this;return this.basemap?this.basemap.load().always(function(){a.map.basemap=u.clonePreservingTiledLayers(b.basemap,a.map.basemap)}):h.resolve()};c.prototype._allLayers=function(a){var b=new w;this._collectLayers(a,b);this._collectLayers(a.ground,b);return b};c.prototype._collectLayers=function(a,b){var c=this;a.layers.forEach(function(a){b.add(a);a.layers&&c._collectLayers(a,b)})};c.prototype._applyLayerVisibility=
function(a,b){var c=this;if(this.visibleLayers){var d=this._allLayers(a.map);if(b.applyToLayerViews)return h.eachAlways(d.map(function(b){return a.whenLayerView(b).then(function(a){a.visible=c.visibleLayers.some(function(b){return b.id===a.layer.id})})}).toArray());d.forEach(function(a){return a.visible=c.visibleLayers.some(function(b){return b.id===a.id})});return h.resolve()}};c.prototype._applyViewpoint=function(a,b){if(this.viewpoint){this.viewpoint.camera.fov=a.camera.fov;if(b.animate){if(this.get("environment.lighting.date"))return this._animateToLighting(a,
b).then(function(){});a.environment.lighting=this.environment.lighting.clone();return a.goTo(this.viewpoint,b).then(function(){})}a.viewpoint=this.viewpoint;a.environment.lighting=this.environment.lighting.clone()}return h.resolve()};c.prototype._animateToLighting=function(a,b){var c=this,d;"global"===a.viewingMode&&(d=this._animateLightingWithCamera(a));this._currentAnimation&&(this._currentAnimation.stop(),this._currentAnimation=null);a.environment.lighting.cameraTrackingEnabled=!1;a.environment.lighting.directShadowsEnabled=
this.environment.lighting.directShadowsEnabled;null!=this.environment.lighting.displayUTCOffset&&(a.environment.lighting.displayUTCOffset=this.environment.lighting.displayUTCOffset);this._currentAnimation=a.goTo(this.viewpoint,b);this._currentAnimation.then(function(b){d&&d.remove();c._currentAnimation===b&&(a.environment.lighting.cameraTrackingEnabled=!0);"finished"===b.state&&(a.environment.lighting=c.environment.lighting.clone())});return this._currentAnimation};c.prototype._getTime=function(a){var b=
a.getTime();a=3600*a.getUTCHours()+60*a.getUTCMinutes()+a.getUTCSeconds();return[b,a]};c.prototype._setTime=function(a,b,c){a.setTime(b);a.setUTCHours(c/3600);a.setUTCMinutes(c%3600/60);a.setUTCSeconds(c%3600%60);return a};c.prototype._animateLightingWithCamera=function(a){var b=this,c=G.vec3d,d=this._getTime(new Date(a.environment.lighting.date.toString())),e=d[0],f=d[1],d=this._getTime(this.environment.lighting.date),h=d[0],m=d[1],k=a.renderCoordsHelper,n=[0,0,0];k.toRenderCoords(a.camera.position,
n);var p=[0,0,0];k.toRenderCoords(this.viewpoint.camera.position,p);var l=[0,0,0],q=new Date;return a.watch("camera",function(d){k.toRenderCoords(d.position,l);d=c.dist2(n,l);var g=c.dist2(p,l),r=0;0!==d+g&&(r=d/(d+g));a.environment.lighting.date=b._setTime(q,e+(h-e)*r,f+(m-f)*r)})};c.createFrom=function(a,b){return(new this).updateFrom(a,b)};c.sanitizeJSON=function(a){var b;b=void 0!==a.visibleLayers&&Array.isArray(a.visibleLayers)?B.clone(a.visibleLayers):[];b={id:a.id||"",title:a.title||{text:""},
thumbnail:a.thumbnail||{url:""},viewpoint:a.viewpoint,baseMap:a.baseMap,visibleLayers:b};void 0!==a.description&&(b.description=a.description);void 0!==a.environment&&(b.environment=k.sanitizeJSON(a.environment));return b};return c}(d.declared(v));f([d.property({json:{write:!0}})],e.prototype,"id",void 0);f([d.property({type:y.default,json:{write:!0}})],e.prototype,"title",void 0);f([d.property({type:x.default,json:{write:!0}})],e.prototype,"description",void 0);f([d.property({type:n.default,json:{write:!0}})],
e.prototype,"thumbnail",void 0);f([d.property({type:z,json:{write:!0}})],e.prototype,"viewpoint",void 0);f([d.property({json:{write:{target:"baseMap"}}})],e.prototype,"basemap",void 0);f([d.reader("basemap",["baseMap"])],e.prototype,"readBasemap",null);f([d.writer("basemap")],e.prototype,"writeBasemap",null);f([d.cast("basemap")],e.prototype,"castBasemap",null);f([d.property({type:q,json:{write:!0}})],e.prototype,"visibleLayers",null);f([d.cast("visibleLayers")],e.prototype,"castVisibleLayers",null);
f([d.property({type:k,json:{write:!0}})],e.prototype,"environment",void 0);e=f([d.subclass("esri.webscene.Slide")],e);var l;return e});