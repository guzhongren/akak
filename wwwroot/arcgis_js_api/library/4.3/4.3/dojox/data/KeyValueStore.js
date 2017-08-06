//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/xhr dojo/_base/kernel dojo/data/util/simpleFetch dojo/data/util/filter".split(" "),function(f,h,p,q,r,m){f=f("dojox.data.KeyValueStore",null,{constructor:function(a){a.url&&(this.url=a.url);this._keyValueString=a.data;this._keyValueVar=a.dataVar;this._keyAttribute="key";this._valueAttribute="value";this._storeProp="_keyValueStore";this._features={"dojo.data.api.Read":!0,"dojo.data.api.Identity":!0};this._loadInProgress=!1;this._queuedFetches=[];
a&&"urlPreventCache"in a&&(this.urlPreventCache=a.urlPreventCache?!0:!1)},url:"",data:"",urlPreventCache:!1,_assertIsItem:function(a){if(!this.isItem(a))throw Error("dojox.data.KeyValueStore: a function was passed an item argument that was not an item");},_assertIsAttribute:function(a,b){if(!h.isString(b))throw Error("dojox.data.KeyValueStore: a function was passed an attribute argument that was not an attribute object nor an attribute name string");},getValue:function(a,b,c){this._assertIsItem(a);
this._assertIsAttribute(a,b);a=b==this._keyAttribute?a[this._keyAttribute]:a[this._valueAttribute];void 0===a&&(a=c);return a},getValues:function(a,b){return(a=this.getValue(a,b))?[a]:[]},getAttributes:function(a){return[this._keyAttribute,this._valueAttribute,a[this._keyAttribute]]},hasAttribute:function(a,b){this._assertIsItem(a);this._assertIsAttribute(a,b);return b==this._keyAttribute||b==this._valueAttribute||b==a[this._keyAttribute]},containsValue:function(a,b,c){var e=void 0;"string"===typeof c&&
(e=m.patternToRegExp(c,!1));return this._containsValue(a,b,c,e)},_containsValue:function(a,b,c,e){a=this.getValues(a,b);for(b=0;b<a.length;++b){var d=a[b];if("string"===typeof d&&e)return null!==d.match(e);if(c===d)return!0}return!1},isItem:function(a){return a&&a[this._storeProp]===this?!0:!1},isItemLoaded:function(a){return this.isItem(a)},loadItem:function(a){},getFeatures:function(){return this._features},close:function(a){},getLabel:function(a){return a[this._keyAttribute]},getLabelAttributes:function(a){return[this._keyAttribute]},
_fetchItems:function(a,b,c){var e=this,d=function(a,c){var d=null;if(a.query){var d=[],k=a.queryOptions?a.queryOptions.ignoreCase:!1,l={},g;for(g in a.query){var f=a.query[g];"string"===typeof f&&(l[g]=m.patternToRegExp(f,k))}for(k=0;k<c.length;++k){var n=!0,h=c[k];for(g in a.query)f=a.query[g],e._containsValue(h,g,f,l[g])||(n=!1);n&&d.push(h)}}else if(a.identity)for(g in d=[],c){if(l=c[g],l[e._keyAttribute]==a.identity){d.push(l);break}}else 0<c.length&&(d=c.slice(0,c.length));b(d,a)};if(this._loadFinished)d(a,
this._arrayOfAllItems);else if(""!==this.url)this._loadInProgress?this._queuedFetches.push({args:a,filter:d}):(this._loadInProgress=!0,c=p.get({url:e.url,handleAs:"json-comment-filtered",preventCache:this.urlPreventCache}),c.addCallback(function(b){e._processData(b);d(a,e._arrayOfAllItems);e._handleQueuedFetches()}),c.addErrback(function(a){e._loadInProgress=!1;throw a;}));else if(this._keyValueString)this._processData(eval(this._keyValueString)),this._keyValueString=null,d(a,this._arrayOfAllItems);
else if(this._keyValueVar)this._processData(this._keyValueVar),this._keyValueVar=null,d(a,this._arrayOfAllItems);else throw Error("dojox.data.KeyValueStore: No source data was provided as either URL, String, or Javascript variable data input.");},_handleQueuedFetches:function(){if(0<this._queuedFetches.length){for(var a=0;a<this._queuedFetches.length;a++){var b=this._queuedFetches[a],c=b.filter,e=b.args;c?c(e,this._arrayOfAllItems):this.fetchItemByIdentity(b.args)}this._queuedFetches=[]}},_processData:function(a){this._arrayOfAllItems=
[];for(var b=0;b<a.length;b++)this._arrayOfAllItems.push(this._createItem(a[b]));this._loadFinished=!0;this._loadInProgress=!1},_createItem:function(a){var b={};b[this._storeProp]=this;for(var c in a){b[this._keyAttribute]=c;b[this._valueAttribute]=a[c];break}return b},getIdentity:function(a){return this.isItem(a)?a[this._keyAttribute]:null},getIdentityAttributes:function(a){return[this._keyAttribute]},fetchItemByIdentity:function(a){a.oldOnItem=a.onItem;a.onItem=null;a.onComplete=this._finishFetchItemByIdentity;
this.fetch(a)},_finishFetchItemByIdentity:function(a,b){var c=b.scope||q.global;a.length?b.oldOnItem.call(c,a[0]):b.oldOnItem.call(c,null)}});h.extend(f,r);return f});