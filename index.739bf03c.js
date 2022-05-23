// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"A65tn":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "ba60c367739bf03c";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ('reload' in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === 'undefined' ? typeof browser === 'undefined' ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"ebWYT":[function(require,module,exports) {
// Allowed keyboard keys
var keyCodes = {
    37: "left",
    38: "up",
    39: "right",
    40: "down",
    // Vi(m) style
    72: "left",
    75: "up",
    76: "right",
    74: "down"
};
// 2048 GAME CLASS //
// // // // // // //
function Game(display, rows, cols) {
    this.rows = rows || 4;
    this.cols = cols || 4;
    this.numStartTiles = 2;
    this.goal = 2048;
    this.plan = [];
    for(var i = 0; i < this.rows; i++){
        this.plan.push([]);
        for(var j = 0; j < this.cols; j++)this.plan[i][j] = 0;
    }
    this.ended = false;
    this.paused = false;
    this.display = display;
}
Game.prototype.clear = function() {
    this.goal = 2048;
    this.ended = false;
    this.paused = false;
    this.display.clear();
    for(var i = 0; i < this.rows; i++)for(var j = 0; j < this.cols; j++)this.plan[i][j] = 0;
};
Game.prototype.withinBounds = function(x, y) {
    return x >= 0 && y >= 0 && x < this.rows && y < this.cols;
};
Game.prototype.start = function() {
    this.clear();
    for(var i = 0; i < this.numStartTiles; i++)this.addRandomTile();
};
Game.prototype.pause = function(state) {
    // state: 0 pause, else go
    this.paused = state === 0 ? true : false;
};
Game.prototype.addRandomTile = function() {
    if (this.ended || this.paused) return;
    var randomIndex, rowIndex, colIndex;
    tileContent = Math.random() > 0.3 ? 2 : 4;
    do {
        randomIndex = Math.floor(Math.random() * this.cols * this.rows);
        rowIndex = Math.floor(randomIndex / this.rows);
        colIndex = randomIndex % this.cols;
    }while (this.plan[rowIndex][colIndex] !== 0)
    this.plan[rowIndex][colIndex] = tileContent;
    this.display.newTile(this.plan, rowIndex, colIndex);
    this.checkResult();
};
// Move the tiles in the specific direction
Game.prototype.move = function(direction) {
    if (this.ended || this.paused) return;
    var that = this, planCopy = this.plan.slice(), didMerge = [], madeAMove = false, i1, j1;
    // Get the next tile for the specific direction
    function next(currIndex) {
        var vect = {
            x: currIndex.x,
            y: currIndex.y
        };
        switch(direction){
            case "up":
                vect.x = currIndex.x - 1;
                break;
            case "down":
                vect.x = currIndex.x + 1;
                break;
            case "left":
                vect.y = currIndex.y - 1;
                break;
            case "right":
                vect.y = currIndex.y + 1;
                break;
        }
        return vect;
    }
    // Get the plan value for the index vector
    function planValue(indexVect) {
        if (!that.withinBounds(indexVect.x, indexVect.y)) return undefined;
        return that.plan[indexVect.x][indexVect.y];
    }
    // Move the tile in the specific direction
    function updateTile(i, j) {
        var dest = {
            x: i,
            y: j
        }, nextDest, shouldChange = false;
        val = that.plan[i][j];
        if (planCopy[i][j] === 0) return;
        // Get the next empty tile
        while(planValue(next(dest)) === 0){
            dest = next(dest);
            madeAMove = true;
            shouldChange = true;
        }
        // Only one merge per row/col
        nextDest = next(dest);
        if (planValue(nextDest) === val && !didMerge[nextDest.x][nextDest.y]) {
            dest = nextDest;
            didMerge[nextDest.x][nextDest.y] = true;
            madeAMove = true;
            shouldChange = true;
        }
        // Update the plan content
        if (shouldChange) {
            that.plan[i][j] = 0;
            that.plan[dest.x][dest.y] += val;
            that.display.moveTile(that.plan, i, j, dest.x, dest.y);
        }
    }
    if (direction === "up" || direction === "left") for(i1 = 0; i1 < this.rows; i1++){
        didMerge[i1] = [];
        for(j1 = 0; j1 < this.cols; j1++)updateTile(i1, j1);
    }
    else for(i1 = this.rows - 1; i1 >= 0; i1--){
        didMerge[i1] = [];
        for(j1 = this.cols - 1; j1 >= 0; j1--)updateTile(i1, j1);
    }
    if (madeAMove) this.addRandomTile();
};
Game.prototype.checkResult = function() {
    var planFull = true;
    var highestTile = 0;
    this.plan.forEach(function(row) {
        row.forEach(function(val) {
            if (val === this.goal) {
                this.pause(0);
                this.display.result(1, this.goal);
                this.goal *= 2;
            } else if (val === 0) planFull = false;
        }, this);
    }, this);
    // Check if there are any more valable moves
    if (planFull) {
        for(var i = 0; i < this.rows; i++)for(var j = 0; j < this.cols; j++){
            if (this.withinBounds(i, j + 1) && this.plan[i][j] === this.plan[i][j + 1] || this.withinBounds(i + 1, j) && this.plan[i][j] === this.plan[i + 1][j]) return;
            highestTile = this.plan[i][j] > highestTile ? this.plan[i][j] : highestTile;
        }
        //result
        this.ended = true;
        this.display.result(0, highestTile);
    }
};
// DOM DISPLAY  //
// // // // // //
function DOMDisplay() {
    this.tiles = document.querySelectorAll(".tile");
    this.resultBox = document.querySelector("#result-box");
    this.colors = {
        2: "#D2AADA",
        4: "#AD7FB9",
        8: "#8F4C9F",
        16: "#693476",
        32: "#E387AD",
        64: "#D16B9B",
        128: "#9D437A",
        256: "#5E1C47",
        512: "#E0727F",
        1024: "#D05668",
        2048: "#CB0030",
        4096: "#900029",
        8192: "#5DA6C2",
        16384: "#4187AB",
        32768: "#286D89",
        65536: "#135A79",
        131072: "#0B2330"
    };
}
DOMDisplay.prototype.addTile = function(tile, val) {
    var length = val.toString().length, span = document.createElement("SPAN");
    span.style.backgroundColor = this.colors[val];
    span.textContent = val;
    tile.appendChild(span);
    // Add font-size classes
    if (length === 4) span.className = "small-text";
    else if (length === 5 || length === 6) span.className = "smallest-text";
};
DOMDisplay.prototype.newTile = function(plan, x, y) {
    var tile = this.tiles[x * plan[0].length + y], span, val = plan[x][y], interval, dimension = 0, offset = 50;
    // Add the tile
    this.addTile(tile, val);
    span = tile.firstChild;
    // Pop up animation
    span.style.height = "0%";
    span.style.width = "0%";
    span.style.top = "50%";
    span.style.left = "50%";
    span.textContent = "";
    interval = setInterval(function() {
        if (dimension === 100 && offset === 0) {
            clearInterval(interval);
            // Add value after the animation
            span.textContent = val;
            return;
        }
        dimension += 10;
        offset -= 5;
        span.style.height = dimension + "%";
        span.style.width = dimension + "%";
        span.style.top = offset + "%";
        span.style.left = offset + "%";
    }, 15);
};
DOMDisplay.prototype.mergeTile = function(tile, val) {
    var span, dimension = 100, offset = 0, way = 1, interval;
    // Remove the old tile
    this.removeTile(tile);
    // Add the merged tile
    this.addTile(tile, val);
    span = tile.firstChild;
    // Pop animation
    interval = setInterval(function() {
        if (dimension === 110) way = -1;
        dimension += way * 2;
        offset -= way * 1;
        span.style.height = dimension + "%";
        span.style.width = dimension + "%";
        span.style.top = offset + "%";
        span.style.left = offset + "%";
        if (dimension === 100) {
            clearInterval(interval);
            return;
        }
    }, 15);
};
DOMDisplay.prototype.removeTile = function(tile) {
    if (tile.firstChild !== null) tile.removeChild(tile.firstChild);
};
DOMDisplay.prototype.moveTile = function(plan, srcX, srcY, dstX, dstY) {
    var srcTile = this.tiles[srcX * plan[0].length + srcY], dstTile = this.tiles[dstX * plan[0].length + dstY];
    // Remove the source tile
    this.removeTile(srcTile);
    // Add the destination tile
    if (dstTile.firstChild !== null) this.mergeTile(dstTile, plan[dstX][dstY]);
    else this.addTile(dstTile, plan[dstX][dstY]);
};
DOMDisplay.prototype.clear = function() {
    for(var i = 0; i < this.tiles.length; i++)this.removeTile(this.tiles[i]);
    // Remove the result box if on display
    this.resultBox.style.display = "";
};
DOMDisplay.prototype.result = function(state, score) {
    // State: 0 = lost, 1 = won
    var lostMessage = "GAME OVER", wonMessages = [
        "AWESOME",
        "WELL DONE",
        "NICE PLAY",
        "BRILLIANT",
        "GREAT",
        "NEAT",
        "RIGHT ON",
        "FANTASTIC",
        "SUPERB",
        "EXCELLENT",
        "BRAVO",
        "CONGRATS",
        "WAY TO GO",
        "TERRIFIC"
    ], backgroundColor = [
        "grey",
        "#5C4561"
    ], that = this, resultButton;
    // Set up the result box
    resultButton = document.querySelector(state === 0 ? "#try-again-button" : "#keep-going-button");
    resultTile = document.querySelector("#result-tile");
    resultMessage = state === 0 ? lostMessage : wonMessages[Math.floor(Math.random() * wonMessages.length)];
    setTimeout(function() {
        // Display the result box for the appropriate state
        that.resultBox.style.display = "block";
        document.querySelector("#result-background").style.backgroundColor = backgroundColor[state];
        document.querySelector("#result-message").textContent = resultMessage;
        that.removeTile(resultTile);
        that.addTile(resultTile, score);
        resultButton.style.display = "block";
        resultButton.addEventListener("click", function() {
            that.resultBox.style.display = "";
        });
    }, 300);
};
// DOCUMENT READY  //
// // // // // // //
window.onload = function() {
    // Resize
    var game = document.querySelector("#game");
    var resizeHandler = function() {
        var marginTop = (window.innerHeight - game.offsetHeight) / 2;
        if (marginTop > 0) game.style.marginTop = marginTop + "px";
    };
    resizeHandler();
    window.onresize = resizeHandler;
    // Game Logic
    // // // // //
    var myGame = new Game(new DOMDisplay());
    myGame.start();
    // "How to play" message
    var messageDisplay = document.querySelector("#message-box");
    var messageTimeout = setTimeout(function() {
        messageDisplay.textContent = "SWIPE OR USE ARROW KEYS TO PLAY";
    }, 4000);
    // Restart button
    var restartButton = document.querySelector("#restart");
    restartButton.addEventListener("click", function() {
        myGame.start();
    });
    // Menu buttons
    var keepGoingButton = document.querySelector("#keep-going-button");
    var tryAgainButton = document.querySelector("#try-again-button");
    keepGoingButton.addEventListener("click", function() {
        myGame.pause(1);
        keepGoingButton.style.display = "";
    });
    tryAgainButton.addEventListener("click", function() {
        myGame.start();
        tryAgainButton.style.display = "";
    });
    // Key events
    // // // // //
    addEventListener("keydown", function(event) {
        if (keyCodes.hasOwnProperty(event.keyCode)) {
            // Clear message box
            if (messageTimeout) {
                clearTimeout(messageTimeout);
                messageDisplay.textContent = "";
            }
            // Make the move
            myGame.move(keyCodes[event.keyCode]);
            event.preventDefault();
        }
    });
    // Touch events
    // // // // // //
    var board = document.querySelector("#board"), startX = null, startY = null, direction = null;
    board.addEventListener("touchstart", function(event) {
        var toucheStart = event.touches;
        if (toucheStart.length > 1) return;
        // Start position
        startX = toucheStart[0].clientX;
        startY = toucheStart[0].clientY;
    }, false);
    board.addEventListener("touchmove", function(event) {
        event.preventDefault();
    }, false);
    board.addEventListener("touchend", function(event) {
        if (!startX || !startY) return;
        var touchEnd = event.changedTouches;
        if (touchEnd.length > 1) return;
        // End position
        var endX = touchEnd[0].clientX, endY = touchEnd[0].clientY;
        // Distance moved
        var diffX = endX - startX, diffY = endY - startY;
        // Test direction to slide
        if (Math.abs(diffX) > Math.abs(diffY)) {
            if (diffX > 0) direction = "right";
            else if (diffX < 0) direction = "left";
        } else {
            if (diffY > 0) direction = "down";
            else if (diffY < 0) direction = "up";
        }
        // Move in specific direction
        if (direction) {
            // Clear message box
            if (messageTimeout) {
                clearTimeout(messageTimeout);
                messageDisplay.textContent = "";
            }
            myGame.move(direction);
        }
        // Reset
        startX = null;
        startY = null;
        direction = null;
    }, false);
};

},{}]},["A65tn","ebWYT"], "ebWYT", "parcelRequiree5c7")

//# sourceMappingURL=index.739bf03c.js.map
