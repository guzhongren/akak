// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(e,f){return function(){function d(a,b,c){this._clientType=a;this._loader=b;this._activeRequests=null;this._addUrlToken=c&&c.addUrlToken;c&&c.trackRequests&&(this._activeRequests=new Map)}d.prototype.request=function(a,b,c){var d=this;b=this._loader.request(a,b,this._clientType,c,this._addUrlToken);this._activeRequests&&(this._activeRequests.set(a,b),c=function(){d._activeRequests.delete(a)},b.then(c,c));return b};d.prototype.isRequested=function(a){return this._loader.isRequested(a)};
d.prototype.cancelRequest=function(a){this._loader.cancel(a)};d.prototype.cancelAll=function(){var a=this;this._activeRequests&&(this._activeRequests.forEach(function(b){a._loader.cancel(b)}),this._activeRequests.clear())};return d}()});