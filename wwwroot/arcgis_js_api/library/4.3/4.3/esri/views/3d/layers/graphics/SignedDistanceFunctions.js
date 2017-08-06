// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["require","exports","../../support/mathUtils"],function(v,m,u){function n(a){return a-Math.floor(a)}function p(a,b,g){a=u.clamp(a,0,.9999991);var h=n(a*q[0]),e=n(a*q[1]),f=n(a*q[2]);a=n(a*q[3]);b[g+0]=256*(h-h*r[0]);b[g+1]=256*(e-h*r[1]);b[g+2]=256*(f-e*r[2]);b[g+3]=256*(a-f*r[3])}var q=[16777216,65536,256,1],r=[0,1/256,1/256,1/256],t=[1/16777216,1/65536,1/256,1];m.packFloat=p;m.unpackFloat=function(a,b){var g=a[b+1]/256,h=a[b+2]/256,e=a[b+3]/256;a=0+a[b+0]/256*t[0];a+=g*t[1];a+=h*t[2];return a+=
e*t[3]};m.computeSignedDistancefieldCicle=function(a,b){var g=new Uint8Array(4*a*a),h=a/2-.5;b/=2;for(var e=0;e<a;e++)for(var f=0;f<a;f++){var d=f+a*e,c=f-h,l=e-h,c=Math.sqrt(c*c+l*l)-b,c=c/a+.5;p(c,g,4*d)}return g};m.computeSignedDistancefieldSquare=function(a,b,g){g&&(b/=Math.SQRT2);for(var h=new Uint8Array(4*a*a),e=0;e<a;e++)for(var f=0;f<a;f++){var d=f-.5*(a-.5),c=e-.5*(a-.5),l=e*a+f;if(g)var k=(d+c)/Math.SQRT2,c=(c-d)/Math.SQRT2,d=k;d=Math.max(Math.abs(d),Math.abs(c))-.5*b;d=d/a+.5;p(d,h,4*l)}return h};
m.computeSignedDistancefieldCrossAndX=function(a,b,g){g&&(b*=Math.SQRT2);b*=.5;for(var h=new Uint8Array(4*a*a),e=0;e<a;e++)for(var f=0;f<a;f++){var d=f-.5*a+0,c=e-.5*a+0,l=e*a+f;if(g)var k=(d+c)/Math.SQRT2,c=(c-d)/Math.SQRT2,d=k;d=Math.abs(d);c=Math.abs(c);k=void 0;k=d>c?d>b?Math.sqrt((d-b)*(d-b)+c*c):c:c>b?Math.sqrt(d*d+(c-b)*(c-b)):d;k=k/a+.5;p(k,h,4*l)}return h}});