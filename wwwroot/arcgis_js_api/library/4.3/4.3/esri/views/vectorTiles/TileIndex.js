// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["require","exports","../2d/layers/support/TileKey"],function(k,l,g){return function(){function f(a){if(!("index"in a))throw Error("The tilemap is missing the 'index' property.");this._tilemap=a.index}f.prototype.dataKey=function(a){var d=[a];if(0>a.level||0>a.row||0>a.col||0<a.row>>a.level||0<a.col>>a.level)return null;for(;0!==a.level;)a=new g(a.level-1,a.row>>1,a.col>>1,a.world),d.push(a);a=this._tilemap;var b=d.pop(),c,e;if(1===a)return b;for(;d.length;){c=d.pop();e=b.level+1;var f=2*b.row,
h=2*b.col;e=[g.getId(e,f,h,c.world),g.getId(e,f,h+1,c.world),g.getId(e,f+1,h,c.world),g.getId(e,f+1,h+1,c.world)].indexOf(c.id);if(a)if(0===a[e]){b=null;break}else if(1===a[e]){b=c;break}else b=c,a=a[e]}return b};f.prototype.forEach=function(a,d,b,c,e){this._callback=e;this._maxLevel=d+a;this._forEach(this._tilemap,d,b,c)};f.prototype._forEach=function(a,d,b,c){0!==a&&(this._callback(d,b,c),d!==this._maxLevel&&"object"===typeof a&&(this._forEach(a[0],d+1,2*b,2*c),this._forEach(a[1],d+1,2*b,2*c+1),
this._forEach(a[2],d+1,2*b+1,2*c),this._forEach(a[3],d+1,2*b+1,2*c+1)))};return f}()});