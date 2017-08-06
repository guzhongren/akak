// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["./TileAgentBase","./tileUtils","./UpsampleInfo","../../../core/ObjectPool"],function(b,c,d,e){var a=function(){b.apply(this,arguments)};a.prototype=new b;a.prototype.constructor=a;a.prototype.dataArrived=function(a){a!==this.tile?this._setUpsamplingTile(a):this.tile.updateTexture();this._dataRequested=null;a!==this.tile&&this._requestNext()};a.prototype._desiredMinLevelDelta=function(){return 0};a.prototype.START_LOADING_LEVEL_DELTA=4;a.prototype.SCALE_RANGE_ENABLED=!0;a.prototype._setUpsamplingTile=
function(a){this._tileLayerInfo.upsampleFromTile&&this._tileLayerInfo.upsampleFromTile.tile===a||(this._tileLayerInfo.upsampleFromTile&&d.Pool.release(this._tileLayerInfo.upsampleFromTile),this._tileLayerInfo.upsampleFromTile=c.computeUpsampleInfoForAncestor(this.tile,a),this.tile.updateTexture())};a.Pool=new e(a);return a});