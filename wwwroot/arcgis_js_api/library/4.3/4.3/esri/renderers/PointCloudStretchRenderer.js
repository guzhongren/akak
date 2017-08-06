// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/accessorSupport/decorators ../core/accessorSupport/ensureType ./PointCloudRenderer ../Color".split(" "),function(b,l,k,e,a,f,g,h){b=function(b){function a(d){d=b.call(this)||this;d.type="pointCloudStretchRenderer";d.field=null;d.fieldTransformType=null;d.stops=null;return d}k(a,b);a.prototype.readStops=function(d,a,c){if(!Array.isArray(d))return null;a=[];for(c=0;c<d.length;c++){var b=d[c];b&&"object"===
typeof b&&a.push({label:b.label,value:b.value,color:h.fromJSON(b.color)})}return a};a.prototype.castStops=function(d,b,a){if(!Array.isArray(d))return null;b=[];for(a=0;a<d.length;a++){var c=d[a];c&&"object"===typeof c&&b.push({label:f.ensureString(c.label),value:f.ensureNumber(c.value),color:f.ensureType(h,c.color)})}return b};a.prototype.writeStops=function(a,b,c,e){if(this.stops)for(b.stops=[],a=0;a<this.stops.length;a++)c=this.stops[a],b.stops.push({}),b.stops[a].value=c.value,b.stops[a].color=
c.color&&c.color.toJSON(),null!=c.label&&(b.stops[a].label=c.label)};return a}(a.declared(g));e([a.property()],b.prototype,"type",void 0);e([a.property({json:{write:!0},type:String})],b.prototype,"field",void 0);e([a.property({json:{read:g.fieldTransformTypeKebabDict.read,write:g.fieldTransformTypeKebabDict.write},type:String})],b.prototype,"fieldTransformType",void 0);e([a.property({json:{write:!0}})],b.prototype,"stops",void 0);e([a.reader("stops")],b.prototype,"readStops",null);e([a.cast("stops")],
b.prototype,"castStops",null);e([a.writer("stops")],b.prototype,"writeStops",null);return b=e([a.subclass("esri.renderers.PointCloudStretchRenderer")],b)});