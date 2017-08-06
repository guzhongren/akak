// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define("./ActionSpherical ../../mixins/PanMixin ../../../lib/glMatrix ../../../support/earthUtils ../../../support/mathUtils ../../../webgl-engine/lib/Util ../../ContinuousAction ../../NavigationConstants ../../../webgl-engine/lib/Camera ./Momentum".split(" "),function(z,A,l,f,v,m,B,u,C,D){var n=l.vec2d,b=l.vec3d,w=l.vec4d,h=l.mat4d,e=b.create(),g=b.create(),p=b.create(),x=b.create(),q=b.create(),r=b.create(),k=h.create(),t=u.Pan.Mode,c=u.Pan.Direction,y=u.Pan.Vertical;return z.createSubclass([A],
{declaredClass:"esri.views.3d.navigation.spherical.actions.PanSpherical",constructor:function(){this._panMode=0;this._plane=w.create();this.momentum=null;this._momentumEstimator=new D.ScreenspaceMomentumEstimator(.05,500,12,.82);this._momentumDirection=b.create();this.momentumEnabled=!0;this._momentumInitialCamera=new C;this.continuous=new B},begin:function(a,d){this.inherited(arguments);this._momentumEstimator.reset();this.pickPointInScreen(a,this._navPickPoint)?this._navSphereRadius=b.length(this._navPickPoint):
(this._navSphereRadius=b.length(this.targetCamera.center),this._navSphereRadius<.9*f.earthRadius&&(this._navSphereRadius=f.earthRadius),this.createPickRay(a,a,this.currentCamera.viewMatrix,e,g),b.subtract(g,this.currentCamera.eye),this.intersectManifold(this.currentCamera.eye,g,this._navSphereRadius-f.earthRadius,this._navPickPoint)||this.closestPointOnSphereSilhouette(this.currentCamera.eye,e,this._navSphereRadius,this._navPickPoint));var c=!1;this.renderCoordsHelper.getAltitude(this.currentCamera.eye)<
y.ELEVATION_THRESHOLD&&(this._navSphereRadius>b.length(this.currentCamera.eye)?c=!0:(b.normalize(b.subtract(this.targetCamera.eye,this._navPickPoint,p)),c=Math.abs(.5*Math.PI-Math.acos(b.dot(this._navPickPoint,p)/b.length(this._navPickPoint)))<y.ANGLE_THRESHOLD));c?(this._panMode=t.VERTICAL,b.normalize(b.subtract(this.targetCamera.eye,this.targetCamera.center,p)),this.updatePlane(this._navPickPoint,p)):(this._panMode=t.HORIZONTAL,c=void 0===d?m.performance.now():d,this._momentumEstimator.add(a[0],
a[1],this._navPickPoint,.001*c));n.set(a,this._dragLastPoint);n.set(a,this._dragBeginPoint);this._mouseDownCamera.copyFrom(this.targetCamera)},update:function(a,d){if(this._panMode===t.HORIZONTAL){if(0>=this._navSphereRadius)return;this.createPickRay(a,this._dragBeginPoint,this._mouseDownCamera.viewMatrix,e,g);b.subtract(g,this._mouseDownCamera.eye);this.intersectManifold(this._mouseDownCamera.eye,g,this._navSphereRadius-f.earthRadius,this._targetOnSphere)||this.closestPointOnSphereSilhouette(this._mouseDownCamera.eye,
e,this._navSphereRadius,this._targetOnSphere);this.rotateCameraWithPointsOnSphere(this._navPickPoint,this._targetOnSphere,this._mouseDownCamera,this.targetCamera,this._navSphereRadius);var c=void 0===d?m.performance.now():d;this._momentumEstimator.add(a[0],a[1],this._targetOnSphere,.001*c)}else{this.createPickRay(this._dragLastPoint,this._dragBeginPoint,this.currentCamera.viewMatrix,e,g);b.subtract(g,e);if(!m.rayPlane(e,g,this._plane,x))return;this.createPickRay(a,this._dragBeginPoint,this.currentCamera.viewMatrix,
e,g);b.subtract(g,e);if(!m.rayPlane(e,g,this._plane,q))return;b.subtract(q,x);b.subtract(this.targetCamera.eye,q);b.subtract(this.targetCamera.center,q);n.set(a,this._dragLastPoint)}this.constrainTargetEyeByElevationAndMoveLookAt();n.set(a,this._dragLastPoint);this.fixTargetUpVector();this.targetAndCurrentChanged();this.inherited(arguments)},end:function(a,b){this._panMode===t.HORIZONTAL&&this._initiateMomentumPanning(a,b);this._navSphereRadius=0;this.inherited(arguments)},_initiateMomentumPanning:function(a,
b){if(0>=this._navSphereRadius)return this.setPoiAuto(a,!0),!1;this.update(a,b);this.momentumEnabled&&(this.momentum=this._momentumEstimator.evaluateMomentum());if(this.momentum)return this._momentumInitialVelocity=this.rotationFromPointsOnSphere(this.momentum.dataOldest,this.momentum.dataNewest,this._navSphereRadius,this._momentumDirection)/this.momentum.dataTimeDelta,this._momentumElapsed=0,this._momentumInitialCamera.copyFrom(this.currentCamera),this.animationStarted(),!0;this.currentReachedTarget();
return!1},beginContinuous:function(a){var d=0===this.continuous.status;this.momentum=null;d&&(this.navigation.begin(this),this.active=!0,this.emit("begin"));this.inherited(arguments);this.setCurrentToTarget();d&&b.set3(0,0,0,this.continuous.direction);this.continuous.status&a||(this.continuous.status|=a,a&(c.LEFT|c.RIGHT|c.FORWARD|c.BACKWARD)?(this._computePanAxis(a,r),b.add(this.continuous.direction,r)):(d=this.continuous.status&(c.UP|c.DOWN),this.continuous.radiusChange=d===c.UP?1:d===c.DOWN?-1:
0),this.continuous.velocity=this._computePanVelocity());this.continuous.timer=0},updateContinuous:function(a){if(this.continuous){var d=0,c=null,e=!1;if(this.momentum)this._momentumElapsed+=.001*a,d=this.momentum.valueFromInitialVelocity(this._momentumInitialVelocity,this._momentumElapsed),c=this._momentumDirection,h.identity(k),h.rotate(k,d,c),h.multiplyVec3(k,this._momentumInitialCamera.eye,this.targetCamera.eye),h.multiplyVec3(k,this._momentumInitialCamera.center,this.targetCamera.center),h.multiplyVec3(k,
this._momentumInitialCamera.up,this.targetCamera.up),this.applyConstraints(this.targetCamera),this.constrainTargetEyeByElevationAndMoveLookAt(),this.fixTargetUpVector(),this.momentum.isFinished(this._momentumElapsed)?(this.momentum=null,this.targetAndCurrentChanged(!0)):this.targetAndCurrentChanged();else{var d=this.continuous.step(a),c=this.continuous.direction,e=.01<b.dot(this.continuous.direction,this.continuous.direction),f=this.targetCamera;if(0<Math.abs(this.continuous.radiusChange)){a=1+d*
this.continuous.radiusChange;var l=f.viewForward,f=b.normalize(f.center,g);(-.999<b.dot(l,f)||0>this.continuous.radiusChange)&&b.scale(this.targetCamera.center,a);b.scale(this.targetCamera.eye,a);this.continuous.velocity=this._computePanVelocity();e||(this.applyConstraints(this.targetCamera),this.constrainTargetEyeByElevationAndMoveLookAt(),this.fixTargetUpVector(),this.targetAndCurrentChanged())}}e&&(h.identity(k),h.rotate(k,d,c),h.multiplyVec3(k,this.targetCamera.eye),h.multiplyVec3(k,this.targetCamera.center),
h.multiplyVec3(k,this.targetCamera.up),this.applyConstraints(this.targetCamera),this.constrainTargetEyeByElevationAndMoveLookAt(),this.fixTargetUpVector(),this.targetAndCurrentChanged());this.emit("update")}},endContinuous:function(a){this.continuous.status&=~a;this.momentum=null;if(0===this.continuous.status)this.continuous.stop(),this.continuous.radiusChange=0,this.active=!1,this.emit("end"),this.navigation.end(this);else if(a&(c.LEFT|c.RIGHT|c.FORWARD|c.BACKWARD))this._computePanAxis(a,r),b.subtract(this.continuous.direction,
r),.01>b.length(this.continuous.direction)&&b.set3(0,0,0,this.continuous.direction);else{var d=this.continuous.status&(c.UP|c.DOWN);this.continuous.radiusChange=d==c.UP?1:d==c.DOWN?-1:0}this.inherited(arguments)},_computePanAxis:function(a,d){b.subtract(this.targetCamera.center,this.targetCamera.eye,d);b.cross(d,this.targetCamera.up);if(a===c.LEFT||a===c.RIGHT)b.normalize(d),b.cross(d,this.targetCamera.center);a!==c.RIGHT&&a!==c.FORWARD||b.negate(d);b.normalize(d)},_computePanVelocity:function(){var a=
.5*Math.abs(b.length(this.targetCamera.eye)-f.earthRadius),a=v.clamp(a,1,2*f.earthRadius);return v.acos(1-a*a/(2*f.earthRadius*f.earthRadius))},updatePlane:function(a,c){w.set4(c[0],c[1],c[2],-b.dot(c,a),this._plane)}})});