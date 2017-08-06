// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["../../core/declare","../../Graphic","../../geometry/Polyline","./TrackFilter"],function(h,m,n,p){return h([p],{declaredClass:"esri.processors.filters.TracklineFilter",normalizeCtorArgs:function(a){"string"===typeof a&&(a={trackIdField:a});return a},nextLineId:1,run:function(a){if(this.trackIdField&&a){var e,b,d,k,f;a=this._getTracksAffectedByChanges(a);for(var l=0,h=a.length;l<h;l++){var c,g;e=a[l];if(b=this._getItemsByParent(e,this.output))for(c=0,g=b.length;c<g;c++)d=b.getItemAt(c),this.output.remove(d);
b=this._getItemsByParent(e,this.input);if(1<b.length){f=new n;k=[];c=0;for(g=b.length;c<g;c++)d=b.getItemAt(c),0===c&&(f.spatialReference=d.geometry.spatialReference),k.push(d.geometry);f.addPath(k);b=new m({geometry:f});b.parent=e;this.output.add(b)}}}}})});