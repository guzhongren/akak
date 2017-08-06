// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/Logger ../lib/GLTextureRep ../lib/GLMaterialRep ../lib/ShaderSnippets ../lib/GLSLShaderRep ../lib/TextureRenderer ../lib/gl-matrix ../lib/webgl-utils ./Model ./Viewport ../materials/repository ../lib/SSAOHelperObscurance ../lib/HighlightHelper ../lib/OffscreenRenderingHelper ../lib/tracer ../../../webgl/RenderingContext ../lib/ProgramRepository ../../../support/screenshotUtils".split(" "),function(n,I,q,r,t,u,v,w,p,x,y,z,A,B,C,D,m,E,F,G){var l=p.vec3d,f=p.vec4d,
H=q.getLogger("esri.views.3d.webgl-engine.parts.View");n=function(){function b(a,c,b,k){var e=this;this._backgroundColor=f.createFrom(1,1,1,1);this._lightDirection=l.createFrom(0,1,0);this._didRender=!1;this._idleSuspend=this._needsRender=!0;this._shouldRender=!1;this._screenCaptureQueue=[];this._container=a;this._stage=c;this._initializeContext(k);this._initializeShaders();this._textureRep=new r(c.getAll(y.ContentType.TEXTURE),this._programRepository,function(){return e._viewport.getCamera().viewport},
this._rctx);this._materialRep=new t(this._textureRep,this._programRepository);this._viewport=new z(this._programRepository,this._materialRep,this._textureRep,this._rctx);this._initializeViewportCamera();this._textureRenderer=new w(this._rctx,this._canvas,this._programRepository,this._materialRep,this._textureRep,b);this._initializeFrameTask()}b.prototype._initializeFrameTask=function(){var a=this;this._frameTask={preRender:function(){m.begin();a._stage.processDirty();a.needsRender()?(a._shouldRender=
!0,a._viewport.getCamera().setGLViewport(a._rctx),a._rctx.setClearColor.apply(a._rctx,a._backgroundColor),a._rctx.clear(16640)):a._shouldRender=!1},render:function(){a._shouldRender&&(a._didRender=!0,a._viewport.render(a._lightDirection,null))},postRender:function(){m.end()},update:function(){a._performScreenCaptures();a.resetNeedsRender()}}};b.prototype._initializeViewportCamera=function(){var a=this._container.getBoundingClientRect(),c=this._viewport.getCamera();c.viewport[2]=a.width;c.viewport[3]=
a.height;this._viewport.setCamera(c)};b.prototype._initializeContext=function(a){this._canvas=a.canvas;this._canvas||(this._canvas=document.createElement("canvas"));this._canvas.setAttribute("style","width: 100%; height:100%; display:block;");var c=x.setupWebGL(this._canvas,{alpha:a.alpha||!1,antialias:!1,depth:!0,stencil:null==a.stencil?!0:a.stencil});this._gl=m.instrumentContext(c[0]);this._rctx=new E(c[0],{disabledExtensions:a.deactivatedWebGLExtensions});!a.alpha&&this._rctx.contextAttributes.alpha&&
H.error("WebGL context has alpha channel even though no alpha channel was requested");this._container.appendChild(this._canvas)};b.prototype._initializeShaders=function(){this._shaderSnippets=new u;this._shaderRep=new v;this._programRepository=new F;A.initializeShaders(this._shaderSnippets,this._shaderRep,this._programRepository,this._rctx);C.loadShaders(this._shaderSnippets,this._shaderRep,this._programRepository,this._rctx);B.loadShaders(this._shaderSnippets,this._shaderRep,this._programRepository,
this._rctx);D.loadShaders(this._shaderSnippets,this._shaderRep,this._programRepository,this._rctx)};b.prototype.dispose=function(){this._viewport.dispose();this._viewport=null;this._textureRenderer.dispose();this._textureRenderer=null;this._programRepository.dispose();this._programRepository=null;this._container.contains(this._canvas)&&this._container.removeChild(this._canvas);this._gl=this._canvas=this._container=null};b.prototype.getCombinedStats=function(){return this._viewport.getCombinedStats()};
b.prototype.setNeedsRender=function(){this._didRender=!1;this._needsRender=!0};b.prototype.resetNeedsRender=function(){this._didRender&&(this._didRender=this._needsRender=!1);this._viewport.resetNeedsRender();this._textureRep.resetNeedsRender()};b.prototype.needsRender=function(){return this._needsRender||!this._idleSuspend||this._viewport.needsRender()||this._textureRep.needsRender()};b.prototype.getFrameTask=function(){return this._frameTask};b.prototype.setLights=function(a,c){l.set(c.direction,
this._lightDirection);f.set4(a.color[0],a.color[1],a.color[2],a.intensity,h.ambient);f.set4(c.color[0],c.color[1],c.color[2],c.intensity,h.diffuse);f.set4(c.color[0],c.color[1],c.color[2],Math.min(c.intensity+a.intensity,1),h.specular);l.set(c.direction,h.direction);this._viewport.setLightingData(h);this._needsRender=!0};b.prototype.getViewParams=function(a){var c=this._viewport.getViewParams(a);if(!a||a.backgroundColor)c.backgroundColor=this._backgroundColor;return c};b.prototype.setViewParams=function(a){this._needsRender=
!0;a.backgroundColor&&(this._backgroundColor=a.backgroundColor);this._viewport.setViewParams(a)};b.prototype.setRenderParams=function(a){this._needsRender=!0;void 0!==a.idleSuspend&&(this._idleSuspend=!!a.idleSuspend);this._viewport.setRenderParams(a)};b.prototype.getRenderParams=function(){var a=this._viewport.getRenderParams();a.anisotropicFiltering=this._textureRep.getMaxAnisotropy();a.idleSuspend=this._idleSuspend;return a};Object.defineProperty(b.prototype,"renderingContext",{get:function(){return this._rctx},
enumerable:!0,configurable:!0});b.prototype.has=function(a){return"s3tc"===a?!!this._rctx.extensions.compressedTextureS3TC:"standardDerivatives"===a?!!this._rctx.extensions.standardDerivatives:"shaderTextureLOD"===a?!!this._rctx.extensions.shaderTextureLOD:"angleInstancedArrays"===a?!!this._rctx.extensions.angleInstancedArrays:!1};b.prototype.getFrustumObjects=function(){return this._viewport.getFrustumObjects()};b.prototype.modify=function(a,c,b,k){this._viewport.modify(a,c,b,k)};b.prototype.setSelectionObject=
function(a,c){this._viewport.setSelectionObject(a,c)};b.prototype.setCamera=function(a){this._viewport.setCamera(a)};b.prototype.getCamera=function(){return this._viewport.getCamera()};b.prototype.getPickRay=function(a,c,b){this._viewport.getPickRay(a,c,b)};b.prototype.pickRayWithBeginPoint=function(a,c,b,k,e){this._viewport.pickRayWithBeginPoint(a,c,b,k,e)};b.prototype.getCanvas=function(){return this._canvas};b.prototype.getTextureGraphicsRenderer=function(){return this._textureRenderer};b.prototype.requestScreenCapture=
function(a,c){this._screenCaptureQueue.push({settings:a||{},callback:c});this._needsRender=!0};b.prototype.getAllTexturesLoaded=function(){return 0===this._textureRep.getLoadingCount()};b.prototype.getTextureLoaded=function(a){return this._textureRep.getIsLoaded(a)};b.prototype.addTextureListener=function(a){this._textureRep.addTextureListener(a)};b.prototype.removeTextureListener=function(a){this._textureRep.removeTextureListener(a)};b.prototype.addExternalRenderer=function(a,c){return this._viewport.addExternalRenderer(a,
c)?(c.initializeRenderContext({rctx:this._rctx,gl:this._rctx.gl,shaderSnippets:this._shaderSnippets,shaderRep:this._shaderRep,programRep:this._programRepository,textureRep:this._textureRep}),!0):!1};b.prototype.removeExternalRenderer=function(a){return this._viewport.removeExternalRenderer(a)?(a.uninitializeRenderContext({rctx:this._rctx,gl:this._rctx.gl}),!0):!1};b.prototype._performScreenCaptures=function(){if(0!==this._screenCaptureQueue.length){for(var a=0;a<this._screenCaptureQueue.length;a++){var c=
this._screenCaptureQueue[a],b=0,k=0,e=this._canvas.width,g=this._canvas.height,d=this._canvas.width,f=this._canvas.height;if(d=c.settings.area)b=d.x,k=d.y,e=d.width,g=d.height;void 0!==c.settings.width&&void 0!==c.settings.height?(d=c.settings.width/c.settings.height,g*d<e?(d*=g,b+=Math.floor((e-d)/2),e=Math.floor(d)):(d=e/d,k+=Math.floor((g-d)/2),g=Math.floor(d)),d=c.settings.width,f=c.settings.height):(d=e,f=g);var h=this._canvas;if(0!==b||0!==k||e!==this._canvas.width||g!==this._canvas.height||
d!==this._canvas.width||f!==this._canvas.height){this._resizeCanvas||(this._resizeCanvas=document.createElement("canvas"));this._resizeCanvas.width=d;this._resizeCanvas.height=f;var l=this._resizeCanvas.getContext("2d"),h=new Uint8Array(e*g*4);this._gl.readPixels(b,this._canvas.height-(k+g),e,g,6408,5121,h);b=l.getImageData(0,0,d,f);G.resampleHermite(h,e,g,b.data,d,f,!0);l.putImageData(b,0,0);h=this._resizeCanvas;l=null}e={png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg"}[c.settings.format?c.settings.format.toLowerCase():
"png"];g=1;void 0!==c.settings.quality&&(g=c.settings.quality/100);e=h.toDataURL(e,g);c.callback({dataURL:e,x:0,y:0,width:d,height:f})}this._screenCaptureQueue=[]}};return b}();var h={ambient:f.create(),diffuse:f.create(),specular:f.create(),direction:l.create()};return n});