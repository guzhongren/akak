// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/accessorSupport/decorators ./support/widget ./Widget ./Compass/CompassViewModel dojo/i18n!./Compass/nls/Compass".split(" "),function(a,p,m,c,d,f,n,k,l){a=function(a){function b(g){g=a.call(this)||this;g.view=null;g.viewModel=new k;return g}m(b,a);b.prototype.reset=function(){};b.prototype.render=function(){var a=this.viewModel.orientation,b=this.viewModel.state,c="disabled"===b,d="compass"===("rotation"===
b?"rotation":"compass"),b=(e={},e["esri-disabled"]=c,e["esri-interactive"]=!c,e),e=(h={},h["esri-icon-compass"]=d,h["esri-icon-dial"]=!d,h);return f.jsxFactory.createElement("div",{bind:this,class:"esri-compass esri-widget-button esri-widget",classes:b,onclick:this._reset,onkeydown:this._reset,role:"button",tabIndex:c?-1:0},f.jsxFactory.createElement("span",{"aria-hidden":"true",class:"esri-compass__icon",classes:e,styles:this._toRotationTransform(a),title:l.reset}),f.jsxFactory.createElement("span",
{class:"esri-icon-font-fallback-text"},l.reset));var e,h};b.prototype._reset=function(){this.reset()};b.prototype._toRotationTransform=function(a){return{transform:"rotateZ("+a.z+"deg)"}};return b}(d.declared(n));c([d.aliasOf("viewModel.view")],a.prototype,"view",void 0);c([d.property({type:k}),f.renderable(["viewModel.orientation","viewModel.state"])],a.prototype,"viewModel",void 0);c([d.aliasOf("viewModel.reset")],a.prototype,"reset",null);c([f.accessibleHandler()],a.prototype,"_reset",null);return a=
c([d.subclass("esri.widgets.Compass")],a)});