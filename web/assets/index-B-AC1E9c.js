var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { cv as BaseStyle, cw as script$9, dQ as getWidth, dR as getHeight, cS as getOuterWidth, dS as getOuterHeight, dP as isRTL, dH as getVNodeProp, dT as isArray, o as openBlock, f as createElementBlock, aM as mergeProps, F as Fragment, E as renderList, y as createBlock, C as resolveDynamicComponent, m as createBaseVNode, B as createCommentVNode, A as renderSlot, di as script$a, cF as resolveComponent, k as createVNode, df as resolve, d2 as isNotEmpty, dU as nestedPosition, d4 as script$b, cC as Ripple, r as resolveDirective, cn as Transition, z as withCtx, i as withDirectives, a5 as normalizeClass, G as toDisplayString, cD as UniqueComponentId, cN as ZIndex, cz as focus, d6 as isPrintableCharacter, d7 as isEmpty, cX as OverlayEventBus, cx as findSingle, cO as addStyle, cT as absolutePosition, cP as ConnectedOverlayScrollHandler, cQ as isTouchDevice, d8 as findLastIndex, c_ as script$c, l as script$d, cB as script$e, dd as createSlots, dw as script$f, n as normalizeStyle, dk as normalizeProps, dq as guardReactiveProps } from "./index-Hblmz8kc.js";
import { s as script$g } from "./index-dVgcC0fG.js";
var theme$5 = /* @__PURE__ */ __name(function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-splitter {\n    display: flex;\n    flex-wrap: nowrap;\n    border: 1px solid ".concat(dt("splitter.border.color"), ";\n    background: ").concat(dt("splitter.background"), ";\n    border-radius: ").concat(dt("border.radius.md"), ";\n    color: ").concat(dt("splitter.color"), ";\n}\n\n.p-splitter-vertical {\n    flex-direction: column;\n}\n\n.p-splitter-gutter {\n    flex-grow: 0;\n    flex-shrink: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    z-index: 1;\n    background: ").concat(dt("splitter.gutter.background"), ";\n}\n\n.p-splitter-gutter-handle {\n    border-radius: ").concat(dt("splitter.handle.border.radius"), ";\n    background: ").concat(dt("splitter.handle.background"), ";\n    transition: outline-color ").concat(dt("splitter.transition.duration"), ", box-shadow ").concat(dt("splitter.transition.duration"), ";\n    outline-color: transparent;\n}\n\n.p-splitter-gutter-handle:focus-visible {\n    box-shadow: ").concat(dt("splitter.handle.focus.ring.shadow"), ";\n    outline: ").concat(dt("splitter.handle.focus.ring.width"), " ").concat(dt("splitter.handle.focus.ring.style"), " ").concat(dt("splitter.handle.focus.ring.color"), ";\n    outline-offset: ").concat(dt("splitter.handle.focus.ring.offset"), ";\n}\n\n.p-splitter-horizontal.p-splitter-resizing {\n    cursor: col-resize;\n    user-select: none;\n}\n\n.p-splitter-vertical.p-splitter-resizing {\n    cursor: row-resize;\n    user-select: none;\n}\n\n.p-splitter-horizontal > .p-splitter-gutter > .p-splitter-gutter-handle {\n    height: ").concat(dt("splitter.handle.size"), ";\n    width: 100%;\n}\n\n.p-splitter-vertical > .p-splitter-gutter > .p-splitter-gutter-handle {\n    width: ").concat(dt("splitter.handle.size"), ";\n    height: 100%;\n}\n\n.p-splitter-horizontal > .p-splitter-gutter {\n    cursor: col-resize;\n}\n\n.p-splitter-vertical > .p-splitter-gutter {\n    cursor: row-resize;\n}\n\n.p-splitterpanel {\n    flex-grow: 1;\n    overflow: hidden;\n}\n\n.p-splitterpanel-nested {\n    display: flex;\n}\n\n.p-splitterpanel .p-splitter {\n    flex-grow: 1;\n    border: 0 none;\n}\n");
}, "theme");
var classes$6 = {
  root: /* @__PURE__ */ __name(function root(_ref2) {
    var props = _ref2.props;
    return ["p-splitter p-component", "p-splitter-" + props.layout];
  }, "root"),
  gutter: "p-splitter-gutter",
  gutterHandle: "p-splitter-gutter-handle"
};
var inlineStyles$2 = {
  root: /* @__PURE__ */ __name(function root2(_ref3) {
    var props = _ref3.props;
    return [{
      display: "flex",
      "flex-wrap": "nowrap"
    }, props.layout === "vertical" ? {
      "flex-direction": "column"
    } : ""];
  }, "root")
};
var SplitterStyle = BaseStyle.extend({
  name: "splitter",
  theme: theme$5,
  classes: classes$6,
  inlineStyles: inlineStyles$2
});
var script$1$6 = {
  name: "BaseSplitter",
  "extends": script$9,
  props: {
    layout: {
      type: String,
      "default": "horizontal"
    },
    gutterSize: {
      type: Number,
      "default": 4
    },
    stateKey: {
      type: String,
      "default": null
    },
    stateStorage: {
      type: String,
      "default": "session"
    },
    step: {
      type: Number,
      "default": 5
    }
  },
  style: SplitterStyle,
  provide: /* @__PURE__ */ __name(function provide() {
    return {
      $pcSplitter: this,
      $parentInstance: this
    };
  }, "provide")
};
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
__name(_toConsumableArray, "_toConsumableArray");
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
__name(_nonIterableSpread, "_nonIterableSpread");
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
__name(_unsupportedIterableToArray, "_unsupportedIterableToArray");
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
__name(_iterableToArray, "_iterableToArray");
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
__name(_arrayWithoutHoles, "_arrayWithoutHoles");
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
__name(_arrayLikeToArray, "_arrayLikeToArray");
var script$8 = {
  name: "Splitter",
  "extends": script$1$6,
  inheritAttrs: false,
  emits: ["resizestart", "resizeend", "resize"],
  dragging: false,
  mouseMoveListener: null,
  mouseUpListener: null,
  touchMoveListener: null,
  touchEndListener: null,
  size: null,
  gutterElement: null,
  startPos: null,
  prevPanelElement: null,
  nextPanelElement: null,
  nextPanelSize: null,
  prevPanelSize: null,
  panelSizes: null,
  prevPanelIndex: null,
  timer: null,
  data: /* @__PURE__ */ __name(function data() {
    return {
      prevSize: null
    };
  }, "data"),
  mounted: /* @__PURE__ */ __name(function mounted() {
    this.initializePanels();
  }, "mounted"),
  beforeUnmount: /* @__PURE__ */ __name(function beforeUnmount() {
    this.clear();
    this.unbindMouseListeners();
  }, "beforeUnmount"),
  methods: {
    isSplitterPanel: /* @__PURE__ */ __name(function isSplitterPanel(child) {
      return child.type.name === "SplitterPanel";
    }, "isSplitterPanel"),
    initializePanels: /* @__PURE__ */ __name(function initializePanels() {
      var _this = this;
      if (this.panels && this.panels.length) {
        var initialized = false;
        if (this.isStateful()) {
          initialized = this.restoreState();
        }
        if (!initialized) {
          var children = _toConsumableArray(this.$el.children).filter(function(child) {
            return child.getAttribute("data-pc-name") === "splitterpanel";
          });
          var _panelSizes = [];
          this.panels.map(function(panel, i) {
            var panelInitialSize = panel.props && panel.props.size ? panel.props.size : null;
            var panelSize = panelInitialSize || 100 / _this.panels.length;
            _panelSizes[i] = panelSize;
            children[i].style.flexBasis = "calc(" + panelSize + "% - " + (_this.panels.length - 1) * _this.gutterSize + "px)";
          });
          this.panelSizes = _panelSizes;
          this.prevSize = parseFloat(_panelSizes[0]).toFixed(4);
        }
      }
    }, "initializePanels"),
    onResizeStart: /* @__PURE__ */ __name(function onResizeStart(event, index, isKeyDown) {
      this.gutterElement = event.currentTarget || event.target.parentElement;
      this.size = this.horizontal ? getWidth(this.$el) : getHeight(this.$el);
      if (!isKeyDown) {
        this.dragging = true;
        this.startPos = this.layout === "horizontal" ? event.pageX || event.changedTouches[0].pageX : event.pageY || event.changedTouches[0].pageY;
      }
      this.prevPanelElement = this.gutterElement.previousElementSibling;
      this.nextPanelElement = this.gutterElement.nextElementSibling;
      if (isKeyDown) {
        this.prevPanelSize = this.horizontal ? getOuterWidth(this.prevPanelElement, true) : getOuterHeight(this.prevPanelElement, true);
        this.nextPanelSize = this.horizontal ? getOuterWidth(this.nextPanelElement, true) : getOuterHeight(this.nextPanelElement, true);
      } else {
        this.prevPanelSize = 100 * (this.horizontal ? getOuterWidth(this.prevPanelElement, true) : getOuterHeight(this.prevPanelElement, true)) / this.size;
        this.nextPanelSize = 100 * (this.horizontal ? getOuterWidth(this.nextPanelElement, true) : getOuterHeight(this.nextPanelElement, true)) / this.size;
      }
      this.prevPanelIndex = index;
      this.$emit("resizestart", {
        originalEvent: event,
        sizes: this.panelSizes
      });
      this.$refs.gutter[index].setAttribute("data-p-gutter-resizing", true);
      this.$el.setAttribute("data-p-resizing", true);
    }, "onResizeStart"),
    onResize: /* @__PURE__ */ __name(function onResize(event, step, isKeyDown) {
      var newPos, newPrevPanelSize, newNextPanelSize;
      if (isKeyDown) {
        if (this.horizontal) {
          newPrevPanelSize = 100 * (this.prevPanelSize + step) / this.size;
          newNextPanelSize = 100 * (this.nextPanelSize - step) / this.size;
        } else {
          newPrevPanelSize = 100 * (this.prevPanelSize - step) / this.size;
          newNextPanelSize = 100 * (this.nextPanelSize + step) / this.size;
        }
      } else {
        if (this.horizontal) {
          if (isRTL(this.$el)) {
            newPos = (this.startPos - event.pageX) * 100 / this.size;
          } else {
            newPos = (event.pageX - this.startPos) * 100 / this.size;
          }
        } else {
          newPos = (event.pageY - this.startPos) * 100 / this.size;
        }
        newPrevPanelSize = this.prevPanelSize + newPos;
        newNextPanelSize = this.nextPanelSize - newPos;
      }
      if (this.validateResize(newPrevPanelSize, newNextPanelSize)) {
        this.prevPanelElement.style.flexBasis = "calc(" + newPrevPanelSize + "% - " + (this.panels.length - 1) * this.gutterSize + "px)";
        this.nextPanelElement.style.flexBasis = "calc(" + newNextPanelSize + "% - " + (this.panels.length - 1) * this.gutterSize + "px)";
        this.panelSizes[this.prevPanelIndex] = newPrevPanelSize;
        this.panelSizes[this.prevPanelIndex + 1] = newNextPanelSize;
        this.prevSize = parseFloat(newPrevPanelSize).toFixed(4);
      }
      this.$emit("resize", {
        originalEvent: event,
        sizes: this.panelSizes
      });
    }, "onResize"),
    onResizeEnd: /* @__PURE__ */ __name(function onResizeEnd(event) {
      if (this.isStateful()) {
        this.saveState();
      }
      this.$emit("resizeend", {
        originalEvent: event,
        sizes: this.panelSizes
      });
      this.$refs.gutter.forEach(function(gutter) {
        return gutter.setAttribute("data-p-gutter-resizing", false);
      });
      this.$el.setAttribute("data-p-resizing", false);
      this.clear();
    }, "onResizeEnd"),
    repeat: /* @__PURE__ */ __name(function repeat(event, index, step) {
      this.onResizeStart(event, index, true);
      this.onResize(event, step, true);
    }, "repeat"),
    setTimer: /* @__PURE__ */ __name(function setTimer(event, index, step) {
      var _this2 = this;
      if (!this.timer) {
        this.timer = setInterval(function() {
          _this2.repeat(event, index, step);
        }, 40);
      }
    }, "setTimer"),
    clearTimer: /* @__PURE__ */ __name(function clearTimer() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
    }, "clearTimer"),
    onGutterKeyUp: /* @__PURE__ */ __name(function onGutterKeyUp() {
      this.clearTimer();
      this.onResizeEnd();
    }, "onGutterKeyUp"),
    onGutterKeyDown: /* @__PURE__ */ __name(function onGutterKeyDown(event, index) {
      switch (event.code) {
        case "ArrowLeft": {
          if (this.layout === "horizontal") {
            this.setTimer(event, index, this.step * -1);
          }
          event.preventDefault();
          break;
        }
        case "ArrowRight": {
          if (this.layout === "horizontal") {
            this.setTimer(event, index, this.step);
          }
          event.preventDefault();
          break;
        }
        case "ArrowDown": {
          if (this.layout === "vertical") {
            this.setTimer(event, index, this.step * -1);
          }
          event.preventDefault();
          break;
        }
        case "ArrowUp": {
          if (this.layout === "vertical") {
            this.setTimer(event, index, this.step);
          }
          event.preventDefault();
          break;
        }
      }
    }, "onGutterKeyDown"),
    onGutterMouseDown: /* @__PURE__ */ __name(function onGutterMouseDown(event, index) {
      this.onResizeStart(event, index);
      this.bindMouseListeners();
    }, "onGutterMouseDown"),
    onGutterTouchStart: /* @__PURE__ */ __name(function onGutterTouchStart(event, index) {
      this.onResizeStart(event, index);
      this.bindTouchListeners();
      event.preventDefault();
    }, "onGutterTouchStart"),
    onGutterTouchMove: /* @__PURE__ */ __name(function onGutterTouchMove(event) {
      this.onResize(event);
      event.preventDefault();
    }, "onGutterTouchMove"),
    onGutterTouchEnd: /* @__PURE__ */ __name(function onGutterTouchEnd(event) {
      this.onResizeEnd(event);
      this.unbindTouchListeners();
      event.preventDefault();
    }, "onGutterTouchEnd"),
    bindMouseListeners: /* @__PURE__ */ __name(function bindMouseListeners() {
      var _this3 = this;
      if (!this.mouseMoveListener) {
        this.mouseMoveListener = function(event) {
          return _this3.onResize(event);
        };
        document.addEventListener("mousemove", this.mouseMoveListener);
      }
      if (!this.mouseUpListener) {
        this.mouseUpListener = function(event) {
          _this3.onResizeEnd(event);
          _this3.unbindMouseListeners();
        };
        document.addEventListener("mouseup", this.mouseUpListener);
      }
    }, "bindMouseListeners"),
    bindTouchListeners: /* @__PURE__ */ __name(function bindTouchListeners() {
      var _this4 = this;
      if (!this.touchMoveListener) {
        this.touchMoveListener = function(event) {
          return _this4.onResize(event.changedTouches[0]);
        };
        document.addEventListener("touchmove", this.touchMoveListener);
      }
      if (!this.touchEndListener) {
        this.touchEndListener = function(event) {
          _this4.resizeEnd(event);
          _this4.unbindTouchListeners();
        };
        document.addEventListener("touchend", this.touchEndListener);
      }
    }, "bindTouchListeners"),
    validateResize: /* @__PURE__ */ __name(function validateResize(newPrevPanelSize, newNextPanelSize) {
      if (newPrevPanelSize > 100 || newPrevPanelSize < 0) return false;
      if (newNextPanelSize > 100 || newNextPanelSize < 0) return false;
      var prevPanelMinSize = getVNodeProp(this.panels[this.prevPanelIndex], "minSize");
      if (this.panels[this.prevPanelIndex].props && prevPanelMinSize && prevPanelMinSize > newPrevPanelSize) {
        return false;
      }
      var newPanelMinSize = getVNodeProp(this.panels[this.prevPanelIndex + 1], "minSize");
      if (this.panels[this.prevPanelIndex + 1].props && newPanelMinSize && newPanelMinSize > newNextPanelSize) {
        return false;
      }
      return true;
    }, "validateResize"),
    unbindMouseListeners: /* @__PURE__ */ __name(function unbindMouseListeners() {
      if (this.mouseMoveListener) {
        document.removeEventListener("mousemove", this.mouseMoveListener);
        this.mouseMoveListener = null;
      }
      if (this.mouseUpListener) {
        document.removeEventListener("mouseup", this.mouseUpListener);
        this.mouseUpListener = null;
      }
    }, "unbindMouseListeners"),
    unbindTouchListeners: /* @__PURE__ */ __name(function unbindTouchListeners() {
      if (this.touchMoveListener) {
        document.removeEventListener("touchmove", this.touchMoveListener);
        this.touchMoveListener = null;
      }
      if (this.touchEndListener) {
        document.removeEventListener("touchend", this.touchEndListener);
        this.touchEndListener = null;
      }
    }, "unbindTouchListeners"),
    clear: /* @__PURE__ */ __name(function clear() {
      this.dragging = false;
      this.size = null;
      this.startPos = null;
      this.prevPanelElement = null;
      this.nextPanelElement = null;
      this.prevPanelSize = null;
      this.nextPanelSize = null;
      this.gutterElement = null;
      this.prevPanelIndex = null;
    }, "clear"),
    isStateful: /* @__PURE__ */ __name(function isStateful() {
      return this.stateKey != null;
    }, "isStateful"),
    getStorage: /* @__PURE__ */ __name(function getStorage() {
      switch (this.stateStorage) {
        case "local":
          return window.localStorage;
        case "session":
          return window.sessionStorage;
        default:
          throw new Error(this.stateStorage + ' is not a valid value for the state storage, supported values are "local" and "session".');
      }
    }, "getStorage"),
    saveState: /* @__PURE__ */ __name(function saveState() {
      if (isArray(this.panelSizes)) {
        this.getStorage().setItem(this.stateKey, JSON.stringify(this.panelSizes));
      }
    }, "saveState"),
    restoreState: /* @__PURE__ */ __name(function restoreState() {
      var _this5 = this;
      var storage = this.getStorage();
      var stateString = storage.getItem(this.stateKey);
      if (stateString) {
        this.panelSizes = JSON.parse(stateString);
        var children = _toConsumableArray(this.$el.children).filter(function(child) {
          return child.getAttribute("data-pc-name") === "splitterpanel";
        });
        children.forEach(function(child, i) {
          child.style.flexBasis = "calc(" + _this5.panelSizes[i] + "% - " + (_this5.panels.length - 1) * _this5.gutterSize + "px)";
        });
        return true;
      }
      return false;
    }, "restoreState"),
    resetState: /* @__PURE__ */ __name(function resetState() {
      this.initializePanels();
    }, "resetState")
  },
  computed: {
    panels: /* @__PURE__ */ __name(function panels() {
      var _this6 = this;
      var panels2 = [];
      this.$slots["default"]().forEach(function(child) {
        if (_this6.isSplitterPanel(child)) {
          panels2.push(child);
        } else if (child.children instanceof Array) {
          child.children.forEach(function(nestedChild) {
            if (_this6.isSplitterPanel(nestedChild)) {
              panels2.push(nestedChild);
            }
          });
        }
      });
      return panels2;
    }, "panels"),
    gutterStyle: /* @__PURE__ */ __name(function gutterStyle() {
      if (this.horizontal) return {
        width: this.gutterSize + "px"
      };
      else return {
        height: this.gutterSize + "px"
      };
    }, "gutterStyle"),
    horizontal: /* @__PURE__ */ __name(function horizontal() {
      return this.layout === "horizontal";
    }, "horizontal"),
    getPTOptions: /* @__PURE__ */ __name(function getPTOptions() {
      var _this$$parentInstance;
      return {
        context: {
          nested: (_this$$parentInstance = this.$parentInstance) === null || _this$$parentInstance === void 0 ? void 0 : _this$$parentInstance.nestedState
        }
      };
    }, "getPTOptions")
  }
};
var _hoisted_1$4 = ["onMousedown", "onTouchstart", "onTouchmove", "onTouchend"];
var _hoisted_2$2 = ["aria-orientation", "aria-valuenow", "onKeydown"];
function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root"),
    style: _ctx.sx("root"),
    "data-p-resizing": false
  }, _ctx.ptmi("root", $options.getPTOptions)), [(openBlock(true), createElementBlock(Fragment, null, renderList($options.panels, function(panel, i) {
    return openBlock(), createElementBlock(Fragment, {
      key: i
    }, [(openBlock(), createBlock(resolveDynamicComponent(panel), {
      tabindex: "-1"
    })), i !== $options.panels.length - 1 ? (openBlock(), createElementBlock("div", mergeProps({
      key: 0,
      ref_for: true,
      ref: "gutter",
      "class": _ctx.cx("gutter"),
      role: "separator",
      tabindex: "-1",
      onMousedown: /* @__PURE__ */ __name(function onMousedown($event) {
        return $options.onGutterMouseDown($event, i);
      }, "onMousedown"),
      onTouchstart: /* @__PURE__ */ __name(function onTouchstart($event) {
        return $options.onGutterTouchStart($event, i);
      }, "onTouchstart"),
      onTouchmove: /* @__PURE__ */ __name(function onTouchmove($event) {
        return $options.onGutterTouchMove($event, i);
      }, "onTouchmove"),
      onTouchend: /* @__PURE__ */ __name(function onTouchend($event) {
        return $options.onGutterTouchEnd($event, i);
      }, "onTouchend"),
      "data-p-gutter-resizing": false
    }, _ctx.ptm("gutter")), [createBaseVNode("div", mergeProps({
      "class": _ctx.cx("gutterHandle"),
      tabindex: "0",
      style: [$options.gutterStyle],
      "aria-orientation": _ctx.layout,
      "aria-valuenow": $data.prevSize,
      onKeyup: _cache[0] || (_cache[0] = function() {
        return $options.onGutterKeyUp && $options.onGutterKeyUp.apply($options, arguments);
      }),
      onKeydown: /* @__PURE__ */ __name(function onKeydown($event) {
        return $options.onGutterKeyDown($event, i);
      }, "onKeydown"),
      ref_for: true
    }, _ctx.ptm("gutterHandle")), null, 16, _hoisted_2$2)], 16, _hoisted_1$4)) : createCommentVNode("", true)], 64);
  }), 128))], 16);
}
__name(render$7, "render$7");
script$8.render = render$7;
var classes$5 = {
  root: /* @__PURE__ */ __name(function root3(_ref) {
    var instance = _ref.instance;
    return ["p-splitterpanel", {
      "p-splitterpanel-nested": instance.isNested
    }];
  }, "root")
};
var SplitterPanelStyle = BaseStyle.extend({
  name: "splitterpanel",
  classes: classes$5
});
var script$1$5 = {
  name: "BaseSplitterPanel",
  "extends": script$9,
  props: {
    size: {
      type: Number,
      "default": null
    },
    minSize: {
      type: Number,
      "default": null
    }
  },
  style: SplitterPanelStyle,
  provide: /* @__PURE__ */ __name(function provide2() {
    return {
      $pcSplitterPanel: this,
      $parentInstance: this
    };
  }, "provide")
};
var script$7 = {
  name: "SplitterPanel",
  "extends": script$1$5,
  inheritAttrs: false,
  data: /* @__PURE__ */ __name(function data2() {
    return {
      nestedState: null
    };
  }, "data"),
  computed: {
    isNested: /* @__PURE__ */ __name(function isNested() {
      var _this = this;
      return this.$slots["default"]().some(function(child) {
        _this.nestedState = child.type.name === "Splitter" ? true : null;
        return _this.nestedState;
      });
    }, "isNested"),
    getPTOptions: /* @__PURE__ */ __name(function getPTOptions2() {
      return {
        context: {
          nested: this.isNested
        }
      };
    }, "getPTOptions")
  }
};
function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    ref: "container",
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root", $options.getPTOptions)), [renderSlot(_ctx.$slots, "default")], 16);
}
__name(render$6, "render$6");
script$7.render = render$6;
var theme$4 = /* @__PURE__ */ __name(function theme2(_ref) {
  _ref.dt;
  return "\n.p-buttongroup {\n    display: inline-flex;\n}\n\n.p-buttongroup .p-button {\n    margin: 0;\n}\n\n.p-buttongroup .p-button:not(:last-child),\n.p-buttongroup .p-button:not(:last-child):hover {\n    border-inline-end: 0 none;\n}\n\n.p-buttongroup .p-button:not(:first-of-type):not(:last-of-type) {\n    border-radius: 0;\n}\n\n.p-buttongroup .p-button:first-of-type:not(:only-of-type) {\n    border-start-end-radius: 0;\n    border-end-end-radius: 0;\n}\n\n.p-buttongroup .p-button:last-of-type:not(:only-of-type) {\n    border-start-start-radius: 0;\n    border-end-start-radius: 0;\n}\n\n.p-buttongroup .p-button:focus {\n    position: relative;\n    z-index: 1;\n}\n";
}, "theme");
var classes$4 = {
  root: "p-buttongroup p-component"
};
var ButtonGroupStyle = BaseStyle.extend({
  name: "buttongroup",
  theme: theme$4,
  classes: classes$4
});
var script$1$4 = {
  name: "BaseButtonGroup",
  "extends": script$9,
  style: ButtonGroupStyle,
  provide: /* @__PURE__ */ __name(function provide3() {
    return {
      $pcButtonGroup: this,
      $parentInstance: this
    };
  }, "provide")
};
var script$6 = {
  name: "ButtonGroup",
  "extends": script$1$4,
  inheritAttrs: false
};
function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", mergeProps({
    "class": _ctx.cx("root"),
    role: "group"
  }, _ctx.ptmi("root")), [renderSlot(_ctx.$slots, "default")], 16);
}
__name(render$5, "render$5");
script$6.render = render$5;
var theme$3 = /* @__PURE__ */ __name(function theme3(_ref) {
  var dt = _ref.dt;
  return "\n.p-overlaybadge {\n    position: relative;\n}\n\n.p-overlaybadge .p-badge {\n    position: absolute;\n    inset-block-start: 0;\n    inset-inline-end: 0;\n    transform: translate(50%, -50%);\n    transform-origin: 100% 0;\n    margin: 0;\n    outline-width: ".concat(dt("overlaybadge.outline.width"), ";\n    outline-style: solid;\n    outline-color: ").concat(dt("overlaybadge.outline.color"), ";\n}\n\n.p-overlaybadge .p-badge:dir(rtl) {\n    transform: translate(-50%, -50%);\n}\n");
}, "theme");
var classes$3 = {
  root: "p-overlaybadge"
};
var OverlayBadgeStyle = BaseStyle.extend({
  name: "overlaybadge",
  theme: theme$3,
  classes: classes$3
});
var script$1$3 = {
  name: "OverlayBadge",
  "extends": script$a,
  style: OverlayBadgeStyle,
  provide: /* @__PURE__ */ __name(function provide4() {
    return {
      $pcOverlayBadge: this,
      $parentInstance: this
    };
  }, "provide")
};
var script$5 = {
  name: "OverlayBadge",
  "extends": script$1$3,
  inheritAttrs: false,
  components: {
    Badge: script$a
  }
};
function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Badge = resolveComponent("Badge");
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [renderSlot(_ctx.$slots, "default"), createVNode(_component_Badge, mergeProps(_ctx.$props, {
    pt: _ctx.ptm("pcBadge")
  }), null, 16, ["pt"])], 16);
}
__name(render$4, "render$4");
script$5.render = render$4;
var theme$2 = /* @__PURE__ */ __name(function theme4(_ref) {
  var dt = _ref.dt;
  return "\n.p-tieredmenu {\n    background: ".concat(dt("tieredmenu.background"), ";\n    color: ").concat(dt("tieredmenu.color"), ";\n    border: 1px solid ").concat(dt("tieredmenu.border.color"), ";\n    border-radius: ").concat(dt("tieredmenu.border.radius"), ";\n    min-width: 12.5rem;\n}\n\n.p-tieredmenu-root-list,\n.p-tieredmenu-submenu {\n    margin: 0;\n    padding: ").concat(dt("tieredmenu.list.padding"), ";\n    list-style: none;\n    outline: 0 none;\n    display: flex;\n    flex-direction: column;\n    gap: ").concat(dt("tieredmenu.list.gap"), ";\n}\n\n.p-tieredmenu-submenu {\n    position: absolute;\n    min-width: 100%;\n    z-index: 1;\n    background: ").concat(dt("tieredmenu.background"), ";\n    color: ").concat(dt("tieredmenu.color"), ";\n    border: 1px solid ").concat(dt("tieredmenu.border.color"), ";\n    border-radius: ").concat(dt("tieredmenu.border.radius"), ";\n    box-shadow: ").concat(dt("tieredmenu.shadow"), ";\n}\n\n.p-tieredmenu-item {\n    position: relative;\n}\n\n.p-tieredmenu-item-content {\n    transition: background ").concat(dt("tieredmenu.transition.duration"), ", color ").concat(dt("tieredmenu.transition.duration"), ";\n    border-radius: ").concat(dt("tieredmenu.item.border.radius"), ";\n    color: ").concat(dt("tieredmenu.item.color"), ";\n}\n\n.p-tieredmenu-item-link {\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n    overflow: hidden;\n    position: relative;\n    color: inherit;\n    padding: ").concat(dt("tieredmenu.item.padding"), ";\n    gap: ").concat(dt("tieredmenu.item.gap"), ";\n    user-select: none;\n    outline: 0 none;\n}\n\n.p-tieredmenu-item-label {\n    line-height: 1;\n}\n\n.p-tieredmenu-item-icon {\n    color: ").concat(dt("tieredmenu.item.icon.color"), ";\n}\n\n.p-tieredmenu-submenu-icon {\n    color: ").concat(dt("tieredmenu.submenu.icon.color"), ";\n    margin-left: auto;\n    font-size: ").concat(dt("tieredmenu.submenu.icon.size"), ";\n    width: ").concat(dt("tieredmenu.submenu.icon.size"), ";\n    height: ").concat(dt("tieredmenu.submenu.icon.size"), ";\n}\n\n.p-tieredmenu-submenu-icon:dir(rtl) {\n    margin-left: 0;\n    margin-right: auto;\n}\n\n.p-tieredmenu-item.p-focus > .p-tieredmenu-item-content {\n    color: ").concat(dt("tieredmenu.item.focus.color"), ";\n    background: ").concat(dt("tieredmenu.item.focus.background"), ";\n}\n\n.p-tieredmenu-item.p-focus > .p-tieredmenu-item-content .p-tieredmenu-item-icon {\n    color: ").concat(dt("tieredmenu.item.icon.focus.color"), ";\n}\n\n.p-tieredmenu-item.p-focus > .p-tieredmenu-item-content .p-tieredmenu-submenu-icon {\n    color: ").concat(dt("tieredmenu.submenu.icon.focus.color"), ";\n}\n\n.p-tieredmenu-item:not(.p-disabled) > .p-tieredmenu-item-content:hover {\n    color: ").concat(dt("tieredmenu.item.focus.color"), ";\n    background: ").concat(dt("tieredmenu.item.focus.background"), ";\n}\n\n.p-tieredmenu-item:not(.p-disabled) > .p-tieredmenu-item-content:hover .p-tieredmenu-item-icon {\n    color: ").concat(dt("tieredmenu.item.icon.focus.color"), ";\n}\n\n.p-tieredmenu-item:not(.p-disabled) > .p-tieredmenu-item-content:hover .p-tieredmenu-submenu-icon {\n    color: ").concat(dt("tieredmenu.submenu.icon.focus.color"), ";\n}\n\n.p-tieredmenu-item-active > .p-tieredmenu-item-content {\n    color: ").concat(dt("tieredmenu.item.active.color"), ";\n    background: ").concat(dt("tieredmenu.item.active.background"), ";\n}\n\n.p-tieredmenu-item-active > .p-tieredmenu-item-content .p-tieredmenu-item-icon {\n    color: ").concat(dt("tieredmenu.item.icon.active.color"), ";\n}\n\n.p-tieredmenu-item-active > .p-tieredmenu-item-content .p-tieredmenu-submenu-icon {\n    color: ").concat(dt("tieredmenu.submenu.icon.active.color"), ";\n}\n\n.p-tieredmenu-separator {\n    border-block-start: 1px solid ").concat(dt("tieredmenu.separator.border.color"), ";\n}\n\n.p-tieredmenu-overlay {\n    box-shadow: ").concat(dt("tieredmenu.shadow"), ";\n}\n\n.p-tieredmenu-enter-from,\n.p-tieredmenu-leave-active {\n    opacity: 0;\n}\n\n.p-tieredmenu-enter-active {\n    transition: opacity 250ms;\n}\n\n.p-tieredmenu-mobile .p-tieredmenu-submenu {\n    position: static;\n    box-shadow: none;\n    border: 0 none;\n    padding-inline-start: ").concat(dt("tieredmenu.submenu.mobile.indent"), ";\n    padding-inline-end: 0;\n}\n\n.p-tieredmenu-mobile .p-tieredmenu-submenu:dir(rtl) {\n    padding-inline-start: 0;\n    padding-inline-end: ").concat(dt("tieredmenu.submenu.mobile.indent"), ";\n}\n\n.p-tieredmenu-mobile .p-tieredmenu-submenu-icon {\n    transition: transform 0.2s;\n    transform: rotate(90deg);\n}\n\n.p-tieredmenu-mobile .p-tieredmenu-item-active > .p-tieredmenu-item-content .p-tieredmenu-submenu-icon {\n    transform: rotate(-90deg);\n}\n");
}, "theme");
var inlineStyles$1 = {
  submenu: /* @__PURE__ */ __name(function submenu(_ref2) {
    var instance = _ref2.instance, processedItem = _ref2.processedItem;
    return {
      display: instance.isItemActive(processedItem) ? "flex" : "none"
    };
  }, "submenu")
};
var classes$2 = {
  root: /* @__PURE__ */ __name(function root4(_ref3) {
    var props = _ref3.props, instance = _ref3.instance;
    return ["p-tieredmenu p-component", {
      "p-tieredmenu-overlay": props.popup,
      "p-tieredmenu-mobile": instance.queryMatches
    }];
  }, "root"),
  start: "p-tieredmenu-start",
  rootList: "p-tieredmenu-root-list",
  item: /* @__PURE__ */ __name(function item(_ref4) {
    var instance = _ref4.instance, processedItem = _ref4.processedItem;
    return ["p-tieredmenu-item", {
      "p-tieredmenu-item-active": instance.isItemActive(processedItem),
      "p-focus": instance.isItemFocused(processedItem),
      "p-disabled": instance.isItemDisabled(processedItem)
    }];
  }, "item"),
  itemContent: "p-tieredmenu-item-content",
  itemLink: "p-tieredmenu-item-link",
  itemIcon: "p-tieredmenu-item-icon",
  itemLabel: "p-tieredmenu-item-label",
  submenuIcon: "p-tieredmenu-submenu-icon",
  submenu: "p-tieredmenu-submenu",
  separator: "p-tieredmenu-separator",
  end: "p-tieredmenu-end"
};
var TieredMenuStyle = BaseStyle.extend({
  name: "tieredmenu",
  theme: theme$2,
  classes: classes$2,
  inlineStyles: inlineStyles$1
});
var script$2$1 = {
  name: "BaseTieredMenu",
  "extends": script$9,
  props: {
    popup: {
      type: Boolean,
      "default": false
    },
    model: {
      type: Array,
      "default": null
    },
    appendTo: {
      type: [String, Object],
      "default": "body"
    },
    breakpoint: {
      type: String,
      "default": "960px"
    },
    autoZIndex: {
      type: Boolean,
      "default": true
    },
    baseZIndex: {
      type: Number,
      "default": 0
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    tabindex: {
      type: Number,
      "default": 0
    },
    ariaLabelledby: {
      type: String,
      "default": null
    },
    ariaLabel: {
      type: String,
      "default": null
    }
  },
  style: TieredMenuStyle,
  provide: /* @__PURE__ */ __name(function provide5() {
    return {
      $pcTieredMenu: this,
      $parentInstance: this
    };
  }, "provide")
};
var script$1$2 = {
  name: "TieredMenuSub",
  hostName: "TieredMenu",
  "extends": script$9,
  emits: ["item-click", "item-mouseenter", "item-mousemove"],
  container: null,
  props: {
    menuId: {
      type: String,
      "default": null
    },
    focusedItemId: {
      type: String,
      "default": null
    },
    items: {
      type: Array,
      "default": null
    },
    visible: {
      type: Boolean,
      "default": false
    },
    level: {
      type: Number,
      "default": 0
    },
    templates: {
      type: Object,
      "default": null
    },
    activeItemPath: {
      type: Object,
      "default": null
    },
    tabindex: {
      type: Number,
      "default": 0
    }
  },
  methods: {
    getItemId: /* @__PURE__ */ __name(function getItemId(processedItem) {
      return "".concat(this.menuId, "_").concat(processedItem.key);
    }, "getItemId"),
    getItemKey: /* @__PURE__ */ __name(function getItemKey(processedItem) {
      return this.getItemId(processedItem);
    }, "getItemKey"),
    getItemProp: /* @__PURE__ */ __name(function getItemProp(processedItem, name, params) {
      return processedItem && processedItem.item ? resolve(processedItem.item[name], params) : void 0;
    }, "getItemProp"),
    getItemLabel: /* @__PURE__ */ __name(function getItemLabel(processedItem) {
      return this.getItemProp(processedItem, "label");
    }, "getItemLabel"),
    getItemLabelId: /* @__PURE__ */ __name(function getItemLabelId(processedItem) {
      return "".concat(this.menuId, "_").concat(processedItem.key, "_label");
    }, "getItemLabelId"),
    getPTOptions: /* @__PURE__ */ __name(function getPTOptions3(processedItem, index, key) {
      return this.ptm(key, {
        context: {
          item: processedItem.item,
          index,
          active: this.isItemActive(processedItem),
          focused: this.isItemFocused(processedItem),
          disabled: this.isItemDisabled(processedItem)
        }
      });
    }, "getPTOptions"),
    isItemActive: /* @__PURE__ */ __name(function isItemActive(processedItem) {
      return this.activeItemPath.some(function(path) {
        return path.key === processedItem.key;
      });
    }, "isItemActive"),
    isItemVisible: /* @__PURE__ */ __name(function isItemVisible(processedItem) {
      return this.getItemProp(processedItem, "visible") !== false;
    }, "isItemVisible"),
    isItemDisabled: /* @__PURE__ */ __name(function isItemDisabled(processedItem) {
      return this.getItemProp(processedItem, "disabled");
    }, "isItemDisabled"),
    isItemFocused: /* @__PURE__ */ __name(function isItemFocused(processedItem) {
      return this.focusedItemId === this.getItemId(processedItem);
    }, "isItemFocused"),
    isItemGroup: /* @__PURE__ */ __name(function isItemGroup(processedItem) {
      return isNotEmpty(processedItem.items);
    }, "isItemGroup"),
    onEnter: /* @__PURE__ */ __name(function onEnter() {
      nestedPosition(this.container, this.level);
    }, "onEnter"),
    onItemClick: /* @__PURE__ */ __name(function onItemClick(event, processedItem) {
      this.getItemProp(processedItem, "command", {
        originalEvent: event,
        item: processedItem.item
      });
      this.$emit("item-click", {
        originalEvent: event,
        processedItem,
        isFocus: true
      });
    }, "onItemClick"),
    onItemMouseEnter: /* @__PURE__ */ __name(function onItemMouseEnter(event, processedItem) {
      this.$emit("item-mouseenter", {
        originalEvent: event,
        processedItem
      });
    }, "onItemMouseEnter"),
    onItemMouseMove: /* @__PURE__ */ __name(function onItemMouseMove(event, processedItem) {
      this.$emit("item-mousemove", {
        originalEvent: event,
        processedItem
      });
    }, "onItemMouseMove"),
    getAriaSetSize: /* @__PURE__ */ __name(function getAriaSetSize() {
      var _this = this;
      return this.items.filter(function(processedItem) {
        return _this.isItemVisible(processedItem) && !_this.getItemProp(processedItem, "separator");
      }).length;
    }, "getAriaSetSize"),
    getAriaPosInset: /* @__PURE__ */ __name(function getAriaPosInset(index) {
      var _this2 = this;
      return index - this.items.slice(0, index).filter(function(processedItem) {
        return _this2.isItemVisible(processedItem) && _this2.getItemProp(processedItem, "separator");
      }).length + 1;
    }, "getAriaPosInset"),
    getMenuItemProps: /* @__PURE__ */ __name(function getMenuItemProps(processedItem, index) {
      return {
        action: mergeProps({
          "class": this.cx("itemLink"),
          tabindex: -1
        }, this.getPTOptions(processedItem, index, "itemLink")),
        icon: mergeProps({
          "class": [this.cx("itemIcon"), this.getItemProp(processedItem, "icon")]
        }, this.getPTOptions(processedItem, index, "itemIcon")),
        label: mergeProps({
          "class": this.cx("itemLabel")
        }, this.getPTOptions(processedItem, index, "itemLabel")),
        submenuicon: mergeProps({
          "class": this.cx("submenuIcon")
        }, this.getPTOptions(processedItem, index, "submenuIcon"))
      };
    }, "getMenuItemProps"),
    containerRef: /* @__PURE__ */ __name(function containerRef(el) {
      this.container = el;
    }, "containerRef")
  },
  components: {
    AngleRightIcon: script$b
  },
  directives: {
    ripple: Ripple
  }
};
var _hoisted_1$1$1 = ["tabindex"];
var _hoisted_2$1 = ["id", "aria-label", "aria-disabled", "aria-expanded", "aria-haspopup", "aria-level", "aria-setsize", "aria-posinset", "data-p-active", "data-p-focused", "data-p-disabled"];
var _hoisted_3$1 = ["onClick", "onMouseenter", "onMousemove"];
var _hoisted_4$1 = ["href", "target"];
var _hoisted_5$1 = ["id"];
var _hoisted_6 = ["id"];
function render$1$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_AngleRightIcon = resolveComponent("AngleRightIcon");
  var _component_TieredMenuSub = resolveComponent("TieredMenuSub", true);
  var _directive_ripple = resolveDirective("ripple");
  return openBlock(), createBlock(Transition, mergeProps({
    name: "p-tieredmenu",
    onEnter: $options.onEnter
  }, _ctx.ptm("menu.transition")), {
    "default": withCtx(function() {
      return [($props.level === 0 ? true : $props.visible) ? (openBlock(), createElementBlock("ul", {
        key: 0,
        ref: $options.containerRef,
        tabindex: $props.tabindex
      }, [(openBlock(true), createElementBlock(Fragment, null, renderList($props.items, function(processedItem, index) {
        return openBlock(), createElementBlock(Fragment, {
          key: $options.getItemKey(processedItem)
        }, [$options.isItemVisible(processedItem) && !$options.getItemProp(processedItem, "separator") ? (openBlock(), createElementBlock("li", mergeProps({
          key: 0,
          id: $options.getItemId(processedItem),
          style: $options.getItemProp(processedItem, "style"),
          "class": [_ctx.cx("item", {
            processedItem
          }), $options.getItemProp(processedItem, "class")],
          role: "menuitem",
          "aria-label": $options.getItemLabel(processedItem),
          "aria-disabled": $options.isItemDisabled(processedItem) || void 0,
          "aria-expanded": $options.isItemGroup(processedItem) ? $options.isItemActive(processedItem) : void 0,
          "aria-haspopup": $options.isItemGroup(processedItem) && !$options.getItemProp(processedItem, "to") ? "menu" : void 0,
          "aria-level": $props.level + 1,
          "aria-setsize": $options.getAriaSetSize(),
          "aria-posinset": $options.getAriaPosInset(index),
          ref_for: true
        }, $options.getPTOptions(processedItem, index, "item"), {
          "data-p-active": $options.isItemActive(processedItem),
          "data-p-focused": $options.isItemFocused(processedItem),
          "data-p-disabled": $options.isItemDisabled(processedItem)
        }), [createBaseVNode("div", mergeProps({
          "class": _ctx.cx("itemContent"),
          onClick: /* @__PURE__ */ __name(function onClick($event) {
            return $options.onItemClick($event, processedItem);
          }, "onClick"),
          onMouseenter: /* @__PURE__ */ __name(function onMouseenter($event) {
            return $options.onItemMouseEnter($event, processedItem);
          }, "onMouseenter"),
          onMousemove: /* @__PURE__ */ __name(function onMousemove($event) {
            return $options.onItemMouseMove($event, processedItem);
          }, "onMousemove"),
          ref_for: true
        }, $options.getPTOptions(processedItem, index, "itemContent")), [!$props.templates.item ? withDirectives((openBlock(), createElementBlock("a", mergeProps({
          key: 0,
          href: $options.getItemProp(processedItem, "url"),
          "class": _ctx.cx("itemLink"),
          target: $options.getItemProp(processedItem, "target"),
          tabindex: "-1",
          ref_for: true
        }, $options.getPTOptions(processedItem, index, "itemLink")), [$props.templates.itemicon ? (openBlock(), createBlock(resolveDynamicComponent($props.templates.itemicon), {
          key: 0,
          item: processedItem.item,
          "class": normalizeClass(_ctx.cx("itemIcon"))
        }, null, 8, ["item", "class"])) : $options.getItemProp(processedItem, "icon") ? (openBlock(), createElementBlock("span", mergeProps({
          key: 1,
          "class": [_ctx.cx("itemIcon"), $options.getItemProp(processedItem, "icon")],
          ref_for: true
        }, $options.getPTOptions(processedItem, index, "itemIcon")), null, 16)) : createCommentVNode("", true), createBaseVNode("span", mergeProps({
          id: $options.getItemLabelId(processedItem),
          "class": _ctx.cx("itemLabel"),
          ref_for: true
        }, $options.getPTOptions(processedItem, index, "itemLabel")), toDisplayString($options.getItemLabel(processedItem)), 17, _hoisted_5$1), $options.getItemProp(processedItem, "items") ? (openBlock(), createElementBlock(Fragment, {
          key: 2
        }, [$props.templates.submenuicon ? (openBlock(), createBlock(resolveDynamicComponent($props.templates.submenuicon), mergeProps({
          key: 0,
          "class": _ctx.cx("submenuIcon"),
          active: $options.isItemActive(processedItem),
          ref_for: true
        }, $options.getPTOptions(processedItem, index, "submenuIcon")), null, 16, ["class", "active"])) : (openBlock(), createBlock(_component_AngleRightIcon, mergeProps({
          key: 1,
          "class": _ctx.cx("submenuIcon"),
          ref_for: true
        }, $options.getPTOptions(processedItem, index, "submenuIcon")), null, 16, ["class"]))], 64)) : createCommentVNode("", true)], 16, _hoisted_4$1)), [[_directive_ripple]]) : (openBlock(), createBlock(resolveDynamicComponent($props.templates.item), {
          key: 1,
          item: processedItem.item,
          hasSubmenu: $options.getItemProp(processedItem, "items"),
          label: $options.getItemLabel(processedItem),
          props: $options.getMenuItemProps(processedItem, index)
        }, null, 8, ["item", "hasSubmenu", "label", "props"]))], 16, _hoisted_3$1), $options.isItemVisible(processedItem) && $options.isItemGroup(processedItem) ? (openBlock(), createBlock(_component_TieredMenuSub, mergeProps({
          key: 0,
          id: $options.getItemId(processedItem) + "_list",
          "class": _ctx.cx("submenu"),
          style: _ctx.sx("submenu", true, {
            processedItem
          }),
          "aria-labelledby": $options.getItemLabelId(processedItem),
          role: "menu",
          menuId: $props.menuId,
          focusedItemId: $props.focusedItemId,
          items: processedItem.items,
          templates: $props.templates,
          activeItemPath: $props.activeItemPath,
          level: $props.level + 1,
          visible: $options.isItemActive(processedItem) && $options.isItemGroup(processedItem),
          pt: _ctx.pt,
          unstyled: _ctx.unstyled,
          onItemClick: _cache[0] || (_cache[0] = function($event) {
            return _ctx.$emit("item-click", $event);
          }),
          onItemMouseenter: _cache[1] || (_cache[1] = function($event) {
            return _ctx.$emit("item-mouseenter", $event);
          }),
          onItemMousemove: _cache[2] || (_cache[2] = function($event) {
            return _ctx.$emit("item-mousemove", $event);
          }),
          ref_for: true
        }, _ctx.ptm("submenu")), null, 16, ["id", "class", "style", "aria-labelledby", "menuId", "focusedItemId", "items", "templates", "activeItemPath", "level", "visible", "pt", "unstyled"])) : createCommentVNode("", true)], 16, _hoisted_2$1)) : createCommentVNode("", true), $options.isItemVisible(processedItem) && $options.getItemProp(processedItem, "separator") ? (openBlock(), createElementBlock("li", mergeProps({
          key: 1,
          id: $options.getItemId(processedItem),
          style: $options.getItemProp(processedItem, "style"),
          "class": [_ctx.cx("separator"), $options.getItemProp(processedItem, "class")],
          role: "separator",
          ref_for: true
        }, _ctx.ptm("separator")), null, 16, _hoisted_6)) : createCommentVNode("", true)], 64);
      }), 128))], 8, _hoisted_1$1$1)) : createCommentVNode("", true)];
    }),
    _: 1
  }, 16, ["onEnter"]);
}
__name(render$1$1, "render$1$1");
script$1$2.render = render$1$1;
var script$4 = {
  name: "TieredMenu",
  "extends": script$2$1,
  inheritAttrs: false,
  emits: ["focus", "blur", "before-show", "before-hide", "hide", "show"],
  outsideClickListener: null,
  matchMediaListener: null,
  scrollHandler: null,
  resizeListener: null,
  target: null,
  container: null,
  menubar: null,
  searchTimeout: null,
  searchValue: null,
  data: /* @__PURE__ */ __name(function data3() {
    return {
      id: this.$attrs.id,
      focused: false,
      focusedItemInfo: {
        index: -1,
        level: 0,
        parentKey: ""
      },
      activeItemPath: [],
      visible: !this.popup,
      submenuVisible: false,
      dirty: false,
      query: null,
      queryMatches: false
    };
  }, "data"),
  watch: {
    "$attrs.id": /* @__PURE__ */ __name(function $attrsId(newValue) {
      this.id = newValue || UniqueComponentId();
    }, "$attrsId"),
    activeItemPath: /* @__PURE__ */ __name(function activeItemPath(newPath) {
      if (!this.popup) {
        if (isNotEmpty(newPath)) {
          this.bindOutsideClickListener();
          this.bindResizeListener();
        } else {
          this.unbindOutsideClickListener();
          this.unbindResizeListener();
        }
      }
    }, "activeItemPath")
  },
  mounted: /* @__PURE__ */ __name(function mounted2() {
    this.id = this.id || UniqueComponentId();
    this.bindMatchMediaListener();
  }, "mounted"),
  beforeUnmount: /* @__PURE__ */ __name(function beforeUnmount2() {
    this.unbindOutsideClickListener();
    this.unbindResizeListener();
    this.unbindMatchMediaListener();
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
    if (this.container && this.autoZIndex) {
      ZIndex.clear(this.container);
    }
    this.target = null;
    this.container = null;
  }, "beforeUnmount"),
  methods: {
    getItemProp: /* @__PURE__ */ __name(function getItemProp2(item3, name) {
      return item3 ? resolve(item3[name]) : void 0;
    }, "getItemProp"),
    getItemLabel: /* @__PURE__ */ __name(function getItemLabel2(item3) {
      return this.getItemProp(item3, "label");
    }, "getItemLabel"),
    isItemDisabled: /* @__PURE__ */ __name(function isItemDisabled2(item3) {
      return this.getItemProp(item3, "disabled");
    }, "isItemDisabled"),
    isItemVisible: /* @__PURE__ */ __name(function isItemVisible2(item3) {
      return this.getItemProp(item3, "visible") !== false;
    }, "isItemVisible"),
    isItemGroup: /* @__PURE__ */ __name(function isItemGroup2(item3) {
      return isNotEmpty(this.getItemProp(item3, "items"));
    }, "isItemGroup"),
    isItemSeparator: /* @__PURE__ */ __name(function isItemSeparator(item3) {
      return this.getItemProp(item3, "separator");
    }, "isItemSeparator"),
    getProccessedItemLabel: /* @__PURE__ */ __name(function getProccessedItemLabel(processedItem) {
      return processedItem ? this.getItemLabel(processedItem.item) : void 0;
    }, "getProccessedItemLabel"),
    isProccessedItemGroup: /* @__PURE__ */ __name(function isProccessedItemGroup(processedItem) {
      return processedItem && isNotEmpty(processedItem.items);
    }, "isProccessedItemGroup"),
    toggle: /* @__PURE__ */ __name(function toggle(event) {
      this.visible ? this.hide(event, true) : this.show(event);
    }, "toggle"),
    show: /* @__PURE__ */ __name(function show(event, isFocus) {
      if (this.popup) {
        this.$emit("before-show");
        this.visible = true;
        this.target = this.target || event.currentTarget;
        this.relatedTarget = event.relatedTarget || null;
      }
      isFocus && focus(this.menubar);
    }, "show"),
    hide: /* @__PURE__ */ __name(function hide(event, isFocus) {
      if (this.popup) {
        this.$emit("before-hide");
        this.visible = false;
      }
      this.activeItemPath = [];
      this.focusedItemInfo = {
        index: -1,
        level: 0,
        parentKey: ""
      };
      isFocus && focus(this.relatedTarget || this.target || this.menubar);
      this.dirty = false;
    }, "hide"),
    onFocus: /* @__PURE__ */ __name(function onFocus(event) {
      this.focused = true;
      if (!this.popup) {
        this.focusedItemInfo = this.focusedItemInfo.index !== -1 ? this.focusedItemInfo : {
          index: this.findFirstFocusedItemIndex(),
          level: 0,
          parentKey: ""
        };
      }
      this.$emit("focus", event);
    }, "onFocus"),
    onBlur: /* @__PURE__ */ __name(function onBlur(event) {
      this.focused = false;
      this.focusedItemInfo = {
        index: -1,
        level: 0,
        parentKey: ""
      };
      this.searchValue = "";
      this.dirty = false;
      this.$emit("blur", event);
    }, "onBlur"),
    onKeyDown: /* @__PURE__ */ __name(function onKeyDown(event) {
      if (this.disabled) {
        event.preventDefault();
        return;
      }
      var metaKey = event.metaKey || event.ctrlKey;
      switch (event.code) {
        case "ArrowDown":
          this.onArrowDownKey(event);
          break;
        case "ArrowUp":
          this.onArrowUpKey(event);
          break;
        case "ArrowLeft":
          this.onArrowLeftKey(event);
          break;
        case "ArrowRight":
          this.onArrowRightKey(event);
          break;
        case "Home":
          this.onHomeKey(event);
          break;
        case "End":
          this.onEndKey(event);
          break;
        case "Space":
          this.onSpaceKey(event);
          break;
        case "Enter":
        case "NumpadEnter":
          this.onEnterKey(event);
          break;
        case "Escape":
          this.onEscapeKey(event);
          break;
        case "Tab":
          this.onTabKey(event);
          break;
        case "PageDown":
        case "PageUp":
        case "Backspace":
        case "ShiftLeft":
        case "ShiftRight":
          break;
        default:
          if (!metaKey && isPrintableCharacter(event.key)) {
            this.searchItems(event, event.key);
          }
          break;
      }
    }, "onKeyDown"),
    onItemChange: /* @__PURE__ */ __name(function onItemChange(event, type) {
      var processedItem = event.processedItem, isFocus = event.isFocus;
      if (isEmpty(processedItem)) return;
      var index = processedItem.index, key = processedItem.key, level = processedItem.level, parentKey = processedItem.parentKey, items = processedItem.items;
      var grouped = isNotEmpty(items);
      var activeItemPath3 = this.activeItemPath.filter(function(p) {
        return p.parentKey !== parentKey && p.parentKey !== key;
      });
      if (grouped) {
        activeItemPath3.push(processedItem);
        this.submenuVisible = true;
      }
      this.focusedItemInfo = {
        index,
        level,
        parentKey
      };
      grouped && (this.dirty = true);
      isFocus && focus(this.menubar);
      if (type === "hover" && this.queryMatches) {
        return;
      }
      this.activeItemPath = activeItemPath3;
    }, "onItemChange"),
    onOverlayClick: /* @__PURE__ */ __name(function onOverlayClick(event) {
      OverlayEventBus.emit("overlay-click", {
        originalEvent: event,
        target: this.target
      });
    }, "onOverlayClick"),
    onItemClick: /* @__PURE__ */ __name(function onItemClick2(event) {
      var originalEvent = event.originalEvent, processedItem = event.processedItem;
      var grouped = this.isProccessedItemGroup(processedItem);
      var root7 = isEmpty(processedItem.parent);
      var selected = this.isSelected(processedItem);
      if (selected) {
        var index = processedItem.index, key = processedItem.key, level = processedItem.level, parentKey = processedItem.parentKey;
        this.activeItemPath = this.activeItemPath.filter(function(p) {
          return key !== p.key && key.startsWith(p.key);
        });
        this.focusedItemInfo = {
          index,
          level,
          parentKey
        };
        this.dirty = !root7;
        focus(this.menubar);
      } else {
        if (grouped) {
          this.onItemChange(event);
        } else {
          var rootProcessedItem = root7 ? processedItem : this.activeItemPath.find(function(p) {
            return p.parentKey === "";
          });
          this.hide(originalEvent);
          this.changeFocusedItemIndex(originalEvent, rootProcessedItem ? rootProcessedItem.index : -1);
          focus(this.menubar);
        }
      }
    }, "onItemClick"),
    onItemMouseEnter: /* @__PURE__ */ __name(function onItemMouseEnter2(event) {
      if (this.dirty) {
        this.onItemChange(event, "hover");
      }
    }, "onItemMouseEnter"),
    onItemMouseMove: /* @__PURE__ */ __name(function onItemMouseMove2(event) {
      if (this.focused) {
        this.changeFocusedItemIndex(event, event.processedItem.index);
      }
    }, "onItemMouseMove"),
    onArrowDownKey: /* @__PURE__ */ __name(function onArrowDownKey(event) {
      var itemIndex = this.focusedItemInfo.index !== -1 ? this.findNextItemIndex(this.focusedItemInfo.index) : this.findFirstFocusedItemIndex();
      this.changeFocusedItemIndex(event, itemIndex);
      event.preventDefault();
    }, "onArrowDownKey"),
    onArrowUpKey: /* @__PURE__ */ __name(function onArrowUpKey(event) {
      if (event.altKey) {
        if (this.focusedItemInfo.index !== -1) {
          var processedItem = this.visibleItems[this.focusedItemInfo.index];
          var grouped = this.isProccessedItemGroup(processedItem);
          !grouped && this.onItemChange({
            originalEvent: event,
            processedItem
          });
        }
        this.popup && this.hide(event, true);
        event.preventDefault();
      } else {
        var itemIndex = this.focusedItemInfo.index !== -1 ? this.findPrevItemIndex(this.focusedItemInfo.index) : this.findLastFocusedItemIndex();
        this.changeFocusedItemIndex(event, itemIndex);
        event.preventDefault();
      }
    }, "onArrowUpKey"),
    onArrowLeftKey: /* @__PURE__ */ __name(function onArrowLeftKey(event) {
      var _this = this;
      var processedItem = this.visibleItems[this.focusedItemInfo.index];
      var parentItem = this.activeItemPath.find(function(p) {
        return p.key === processedItem.parentKey;
      });
      var root7 = isEmpty(processedItem.parent);
      if (!root7) {
        this.focusedItemInfo = {
          index: -1,
          parentKey: parentItem ? parentItem.parentKey : ""
        };
        this.searchValue = "";
        this.onArrowDownKey(event);
      }
      this.activeItemPath = this.activeItemPath.filter(function(p) {
        return p.parentKey !== _this.focusedItemInfo.parentKey;
      });
      event.preventDefault();
    }, "onArrowLeftKey"),
    onArrowRightKey: /* @__PURE__ */ __name(function onArrowRightKey(event) {
      var processedItem = this.visibleItems[this.focusedItemInfo.index];
      var grouped = this.isProccessedItemGroup(processedItem);
      if (grouped) {
        this.onItemChange({
          originalEvent: event,
          processedItem
        });
        this.focusedItemInfo = {
          index: -1,
          parentKey: processedItem.key
        };
        this.searchValue = "";
        this.onArrowDownKey(event);
      }
      event.preventDefault();
    }, "onArrowRightKey"),
    onHomeKey: /* @__PURE__ */ __name(function onHomeKey(event) {
      this.changeFocusedItemIndex(event, this.findFirstItemIndex());
      event.preventDefault();
    }, "onHomeKey"),
    onEndKey: /* @__PURE__ */ __name(function onEndKey(event) {
      this.changeFocusedItemIndex(event, this.findLastItemIndex());
      event.preventDefault();
    }, "onEndKey"),
    onEnterKey: /* @__PURE__ */ __name(function onEnterKey(event) {
      if (this.focusedItemInfo.index !== -1) {
        var element = findSingle(this.menubar, 'li[id="'.concat("".concat(this.focusedItemId), '"]'));
        var anchorElement = element && findSingle(element, '[data-pc-section="itemlink"]');
        anchorElement ? anchorElement.click() : element && element.click();
        if (!this.popup) {
          var processedItem = this.visibleItems[this.focusedItemInfo.index];
          var grouped = this.isProccessedItemGroup(processedItem);
          !grouped && (this.focusedItemInfo.index = this.findFirstFocusedItemIndex());
        }
      }
      event.preventDefault();
    }, "onEnterKey"),
    onSpaceKey: /* @__PURE__ */ __name(function onSpaceKey(event) {
      this.onEnterKey(event);
    }, "onSpaceKey"),
    onEscapeKey: /* @__PURE__ */ __name(function onEscapeKey(event) {
      if (this.popup || this.focusedItemInfo.level !== 0) {
        var _focusedItemInfo = this.focusedItemInfo;
        this.hide(event, false);
        this.focusedItemInfo = {
          index: Number(_focusedItemInfo.parentKey.split("_")[0]),
          level: 0,
          parentKey: ""
        };
        this.popup && focus(this.target);
      }
      event.preventDefault();
    }, "onEscapeKey"),
    onTabKey: /* @__PURE__ */ __name(function onTabKey(event) {
      if (this.focusedItemInfo.index !== -1) {
        var processedItem = this.visibleItems[this.focusedItemInfo.index];
        var grouped = this.isProccessedItemGroup(processedItem);
        !grouped && this.onItemChange({
          originalEvent: event,
          processedItem
        });
      }
      this.hide();
    }, "onTabKey"),
    onEnter: /* @__PURE__ */ __name(function onEnter2(el) {
      if (this.autoZIndex) {
        ZIndex.set("menu", el, this.baseZIndex + this.$primevue.config.zIndex.menu);
      }
      addStyle(el, {
        position: "absolute",
        top: "0",
        left: "0"
      });
      this.alignOverlay();
      focus(this.menubar);
      this.scrollInView();
    }, "onEnter"),
    onAfterEnter: /* @__PURE__ */ __name(function onAfterEnter() {
      this.bindOutsideClickListener();
      this.bindScrollListener();
      this.bindResizeListener();
      this.$emit("show");
    }, "onAfterEnter"),
    onLeave: /* @__PURE__ */ __name(function onLeave() {
      this.unbindOutsideClickListener();
      this.unbindScrollListener();
      this.unbindResizeListener();
      this.$emit("hide");
      this.container = null;
      this.dirty = false;
    }, "onLeave"),
    onAfterLeave: /* @__PURE__ */ __name(function onAfterLeave(el) {
      if (this.autoZIndex) {
        ZIndex.clear(el);
      }
    }, "onAfterLeave"),
    alignOverlay: /* @__PURE__ */ __name(function alignOverlay() {
      absolutePosition(this.container, this.target);
      var targetWidth = getOuterWidth(this.target);
      if (targetWidth > getOuterWidth(this.container)) {
        this.container.style.minWidth = getOuterWidth(this.target) + "px";
      }
    }, "alignOverlay"),
    bindOutsideClickListener: /* @__PURE__ */ __name(function bindOutsideClickListener() {
      var _this2 = this;
      if (!this.outsideClickListener) {
        this.outsideClickListener = function(event) {
          var isOutsideContainer = _this2.container && !_this2.container.contains(event.target);
          var isOutsideTarget = _this2.popup ? !(_this2.target && (_this2.target === event.target || _this2.target.contains(event.target))) : true;
          if (isOutsideContainer && isOutsideTarget) {
            _this2.hide();
          }
        };
        document.addEventListener("click", this.outsideClickListener);
      }
    }, "bindOutsideClickListener"),
    unbindOutsideClickListener: /* @__PURE__ */ __name(function unbindOutsideClickListener() {
      if (this.outsideClickListener) {
        document.removeEventListener("click", this.outsideClickListener);
        this.outsideClickListener = null;
      }
    }, "unbindOutsideClickListener"),
    bindScrollListener: /* @__PURE__ */ __name(function bindScrollListener() {
      var _this3 = this;
      if (!this.scrollHandler) {
        this.scrollHandler = new ConnectedOverlayScrollHandler(this.target, function(event) {
          _this3.hide(event, true);
        });
      }
      this.scrollHandler.bindScrollListener();
    }, "bindScrollListener"),
    unbindScrollListener: /* @__PURE__ */ __name(function unbindScrollListener() {
      if (this.scrollHandler) {
        this.scrollHandler.unbindScrollListener();
      }
    }, "unbindScrollListener"),
    bindResizeListener: /* @__PURE__ */ __name(function bindResizeListener() {
      var _this4 = this;
      if (!this.resizeListener) {
        this.resizeListener = function(event) {
          if (!isTouchDevice()) {
            _this4.hide(event, true);
          }
        };
        window.addEventListener("resize", this.resizeListener);
      }
    }, "bindResizeListener"),
    unbindResizeListener: /* @__PURE__ */ __name(function unbindResizeListener() {
      if (this.resizeListener) {
        window.removeEventListener("resize", this.resizeListener);
        this.resizeListener = null;
      }
    }, "unbindResizeListener"),
    bindMatchMediaListener: /* @__PURE__ */ __name(function bindMatchMediaListener() {
      var _this5 = this;
      if (!this.matchMediaListener) {
        var query = matchMedia("(max-width: ".concat(this.breakpoint, ")"));
        this.query = query;
        this.queryMatches = query.matches;
        this.matchMediaListener = function() {
          _this5.queryMatches = query.matches;
        };
        this.query.addEventListener("change", this.matchMediaListener);
      }
    }, "bindMatchMediaListener"),
    unbindMatchMediaListener: /* @__PURE__ */ __name(function unbindMatchMediaListener() {
      if (this.matchMediaListener) {
        this.query.removeEventListener("change", this.matchMediaListener);
        this.matchMediaListener = null;
      }
    }, "unbindMatchMediaListener"),
    isItemMatched: /* @__PURE__ */ __name(function isItemMatched(processedItem) {
      var _this$getProccessedIt;
      return this.isValidItem(processedItem) && ((_this$getProccessedIt = this.getProccessedItemLabel(processedItem)) === null || _this$getProccessedIt === void 0 ? void 0 : _this$getProccessedIt.toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase()));
    }, "isItemMatched"),
    isValidItem: /* @__PURE__ */ __name(function isValidItem(processedItem) {
      return !!processedItem && !this.isItemDisabled(processedItem.item) && !this.isItemSeparator(processedItem.item) && this.isItemVisible(processedItem.item);
    }, "isValidItem"),
    isValidSelectedItem: /* @__PURE__ */ __name(function isValidSelectedItem(processedItem) {
      return this.isValidItem(processedItem) && this.isSelected(processedItem);
    }, "isValidSelectedItem"),
    isSelected: /* @__PURE__ */ __name(function isSelected(processedItem) {
      return this.activeItemPath.some(function(p) {
        return p.key === processedItem.key;
      });
    }, "isSelected"),
    findFirstItemIndex: /* @__PURE__ */ __name(function findFirstItemIndex() {
      var _this6 = this;
      return this.visibleItems.findIndex(function(processedItem) {
        return _this6.isValidItem(processedItem);
      });
    }, "findFirstItemIndex"),
    findLastItemIndex: /* @__PURE__ */ __name(function findLastItemIndex() {
      var _this7 = this;
      return findLastIndex(this.visibleItems, function(processedItem) {
        return _this7.isValidItem(processedItem);
      });
    }, "findLastItemIndex"),
    findNextItemIndex: /* @__PURE__ */ __name(function findNextItemIndex(index) {
      var _this8 = this;
      var matchedItemIndex = index < this.visibleItems.length - 1 ? this.visibleItems.slice(index + 1).findIndex(function(processedItem) {
        return _this8.isValidItem(processedItem);
      }) : -1;
      return matchedItemIndex > -1 ? matchedItemIndex + index + 1 : index;
    }, "findNextItemIndex"),
    findPrevItemIndex: /* @__PURE__ */ __name(function findPrevItemIndex(index) {
      var _this9 = this;
      var matchedItemIndex = index > 0 ? findLastIndex(this.visibleItems.slice(0, index), function(processedItem) {
        return _this9.isValidItem(processedItem);
      }) : -1;
      return matchedItemIndex > -1 ? matchedItemIndex : index;
    }, "findPrevItemIndex"),
    findSelectedItemIndex: /* @__PURE__ */ __name(function findSelectedItemIndex() {
      var _this10 = this;
      return this.visibleItems.findIndex(function(processedItem) {
        return _this10.isValidSelectedItem(processedItem);
      });
    }, "findSelectedItemIndex"),
    findFirstFocusedItemIndex: /* @__PURE__ */ __name(function findFirstFocusedItemIndex() {
      var selectedIndex = this.findSelectedItemIndex();
      return selectedIndex < 0 ? this.findFirstItemIndex() : selectedIndex;
    }, "findFirstFocusedItemIndex"),
    findLastFocusedItemIndex: /* @__PURE__ */ __name(function findLastFocusedItemIndex() {
      var selectedIndex = this.findSelectedItemIndex();
      return selectedIndex < 0 ? this.findLastItemIndex() : selectedIndex;
    }, "findLastFocusedItemIndex"),
    searchItems: /* @__PURE__ */ __name(function searchItems(event, _char) {
      var _this11 = this;
      this.searchValue = (this.searchValue || "") + _char;
      var itemIndex = -1;
      var matched = false;
      if (this.focusedItemInfo.index !== -1) {
        itemIndex = this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(processedItem) {
          return _this11.isItemMatched(processedItem);
        });
        itemIndex = itemIndex === -1 ? this.visibleItems.slice(0, this.focusedItemInfo.index).findIndex(function(processedItem) {
          return _this11.isItemMatched(processedItem);
        }) : itemIndex + this.focusedItemInfo.index;
      } else {
        itemIndex = this.visibleItems.findIndex(function(processedItem) {
          return _this11.isItemMatched(processedItem);
        });
      }
      if (itemIndex !== -1) {
        matched = true;
      }
      if (itemIndex === -1 && this.focusedItemInfo.index === -1) {
        itemIndex = this.findFirstFocusedItemIndex();
      }
      if (itemIndex !== -1) {
        this.changeFocusedItemIndex(event, itemIndex);
      }
      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout);
      }
      this.searchTimeout = setTimeout(function() {
        _this11.searchValue = "";
        _this11.searchTimeout = null;
      }, 500);
      return matched;
    }, "searchItems"),
    changeFocusedItemIndex: /* @__PURE__ */ __name(function changeFocusedItemIndex(event, index) {
      if (this.focusedItemInfo.index !== index) {
        this.focusedItemInfo.index = index;
        this.scrollInView();
      }
    }, "changeFocusedItemIndex"),
    scrollInView: /* @__PURE__ */ __name(function scrollInView() {
      var index = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : -1;
      var id = index !== -1 ? "".concat(this.id, "_").concat(index) : this.focusedItemId;
      var element = findSingle(this.menubar, 'li[id="'.concat(id, '"]'));
      if (element) {
        element.scrollIntoView && element.scrollIntoView({
          block: "nearest",
          inline: "start"
        });
      }
    }, "scrollInView"),
    createProcessedItems: /* @__PURE__ */ __name(function createProcessedItems(items) {
      var _this12 = this;
      var level = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      var parent = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var parentKey = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "";
      var processedItems3 = [];
      items && items.forEach(function(item3, index) {
        var key = (parentKey !== "" ? parentKey + "_" : "") + index;
        var newItem = {
          item: item3,
          index,
          level,
          key,
          parent,
          parentKey
        };
        newItem["items"] = _this12.createProcessedItems(item3.items, level + 1, newItem, key);
        processedItems3.push(newItem);
      });
      return processedItems3;
    }, "createProcessedItems"),
    containerRef: /* @__PURE__ */ __name(function containerRef2(el) {
      this.container = el;
    }, "containerRef"),
    menubarRef: /* @__PURE__ */ __name(function menubarRef(el) {
      this.menubar = el ? el.$el : void 0;
    }, "menubarRef")
  },
  computed: {
    processedItems: /* @__PURE__ */ __name(function processedItems() {
      return this.createProcessedItems(this.model || []);
    }, "processedItems"),
    visibleItems: /* @__PURE__ */ __name(function visibleItems() {
      var _this13 = this;
      var processedItem = this.activeItemPath.find(function(p) {
        return p.key === _this13.focusedItemInfo.parentKey;
      });
      return processedItem ? processedItem.items : this.processedItems;
    }, "visibleItems"),
    focusedItemId: /* @__PURE__ */ __name(function focusedItemId() {
      return this.focusedItemInfo.index !== -1 ? "".concat(this.id).concat(isNotEmpty(this.focusedItemInfo.parentKey) ? "_" + this.focusedItemInfo.parentKey : "", "_").concat(this.focusedItemInfo.index) : null;
    }, "focusedItemId")
  },
  components: {
    TieredMenuSub: script$1$2,
    Portal: script$c
  }
};
var _hoisted_1$3 = ["id"];
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_TieredMenuSub = resolveComponent("TieredMenuSub");
  var _component_Portal = resolveComponent("Portal");
  return openBlock(), createBlock(_component_Portal, {
    appendTo: _ctx.appendTo,
    disabled: !_ctx.popup
  }, {
    "default": withCtx(function() {
      return [createVNode(Transition, mergeProps({
        name: "p-connected-overlay",
        onEnter: $options.onEnter,
        onAfterEnter: $options.onAfterEnter,
        onLeave: $options.onLeave,
        onAfterLeave: $options.onAfterLeave
      }, _ctx.ptm("transition")), {
        "default": withCtx(function() {
          return [$data.visible ? (openBlock(), createElementBlock("div", mergeProps({
            key: 0,
            ref: $options.containerRef,
            id: $data.id,
            "class": _ctx.cx("root"),
            onClick: _cache[0] || (_cache[0] = function() {
              return $options.onOverlayClick && $options.onOverlayClick.apply($options, arguments);
            })
          }, _ctx.ptmi("root")), [_ctx.$slots.start ? (openBlock(), createElementBlock("div", mergeProps({
            key: 0,
            "class": _ctx.cx("start")
          }, _ctx.ptm("start")), [renderSlot(_ctx.$slots, "start")], 16)) : createCommentVNode("", true), createVNode(_component_TieredMenuSub, mergeProps({
            ref: $options.menubarRef,
            id: $data.id + "_list",
            "class": _ctx.cx("rootList"),
            tabindex: !_ctx.disabled ? _ctx.tabindex : -1,
            role: "menubar",
            "aria-label": _ctx.ariaLabel,
            "aria-labelledby": _ctx.ariaLabelledby,
            "aria-disabled": _ctx.disabled || void 0,
            "aria-orientation": "vertical",
            "aria-activedescendant": $data.focused ? $options.focusedItemId : void 0,
            menuId: $data.id,
            focusedItemId: $data.focused ? $options.focusedItemId : void 0,
            items: $options.processedItems,
            templates: _ctx.$slots,
            activeItemPath: $data.activeItemPath,
            level: 0,
            visible: $data.submenuVisible,
            pt: _ctx.pt,
            unstyled: _ctx.unstyled,
            onFocus: $options.onFocus,
            onBlur: $options.onBlur,
            onKeydown: $options.onKeyDown,
            onItemClick: $options.onItemClick,
            onItemMouseenter: $options.onItemMouseEnter,
            onItemMousemove: $options.onItemMouseMove
          }, _ctx.ptm("rootList")), null, 16, ["id", "class", "tabindex", "aria-label", "aria-labelledby", "aria-disabled", "aria-activedescendant", "menuId", "focusedItemId", "items", "templates", "activeItemPath", "visible", "pt", "unstyled", "onFocus", "onBlur", "onKeydown", "onItemClick", "onItemMouseenter", "onItemMousemove"]), _ctx.$slots.end ? (openBlock(), createElementBlock("div", mergeProps({
            key: 1,
            "class": _ctx.cx("end")
          }, _ctx.ptm("end")), [renderSlot(_ctx.$slots, "end")], 16)) : createCommentVNode("", true)], 16, _hoisted_1$3)) : createCommentVNode("", true)];
        }),
        _: 3
      }, 16, ["onEnter", "onAfterEnter", "onLeave", "onAfterLeave"])];
    }),
    _: 3
  }, 8, ["appendTo", "disabled"]);
}
__name(render$3, "render$3");
script$4.render = render$3;
var theme$1 = /* @__PURE__ */ __name(function theme5(_ref) {
  var dt = _ref.dt;
  return "\n.p-splitbutton {\n    display: inline-flex;\n    position: relative;\n    border-radius: ".concat(dt("splitbutton.border.radius"), ";\n}\n\n.p-splitbutton-button {\n    border-start-end-radius: 0;\n    border-end-end-radius: 0;\n    border-inline-end: 0 none;\n}\n\n.p-splitbutton-button:focus-visible,\n.p-splitbutton-dropdown:focus-visible {\n    z-index: 1;\n}\n\n.p-splitbutton-button:not(:disabled):hover,\n.p-splitbutton-button:not(:disabled):active {\n    border-inline-end: 0 none;\n}\n\n.p-splitbutton-dropdown {\n    border-start-start-radius: 0;\n    border-end-start-radius: 0;\n}\n\n.p-splitbutton .p-menu {\n    min-width: 100%;\n}\n\n.p-splitbutton-fluid {\n    display: flex;\n}\n\n.p-splitbutton-rounded .p-splitbutton-dropdown {\n    border-start-end-radius: ").concat(dt("splitbutton.rounded.border.radius"), ";\n    border-end-end-radius: ").concat(dt("splitbutton.rounded.border.radius"), ";\n}\n\n.p-splitbutton-rounded .p-splitbutton-button {\n    border-start-start-radius: ").concat(dt("splitbutton.rounded.border.radius"), ";\n    border-end-start-radius: ").concat(dt("splitbutton.rounded.border.radius"), ";\n}\n\n.p-splitbutton-raised {\n    box-shadow: ").concat(dt("splitbutton.raised.shadow"), ";\n}\n");
}, "theme");
var classes$1 = {
  root: /* @__PURE__ */ __name(function root5(_ref2) {
    var instance = _ref2.instance, props = _ref2.props;
    return ["p-splitbutton p-component", {
      "p-splitbutton-raised": props.raised,
      "p-splitbutton-rounded": props.rounded,
      "p-splitbutton-fluid": instance.hasFluid
    }];
  }, "root"),
  pcButton: "p-splitbutton-button",
  pcDropdown: "p-splitbutton-dropdown"
};
var SplitButtonStyle = BaseStyle.extend({
  name: "splitbutton",
  theme: theme$1,
  classes: classes$1
});
var script$1$1 = {
  name: "BaseSplitButton",
  "extends": script$9,
  props: {
    label: {
      type: String,
      "default": null
    },
    icon: {
      type: String,
      "default": null
    },
    model: {
      type: Array,
      "default": null
    },
    autoZIndex: {
      type: Boolean,
      "default": true
    },
    baseZIndex: {
      type: Number,
      "default": 0
    },
    appendTo: {
      type: [String, Object],
      "default": "body"
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    fluid: {
      type: Boolean,
      "default": null
    },
    "class": {
      type: null,
      "default": null
    },
    style: {
      type: null,
      "default": null
    },
    buttonProps: {
      type: null,
      "default": null
    },
    menuButtonProps: {
      type: null,
      "default": null
    },
    menuButtonIcon: {
      type: String,
      "default": void 0
    },
    dropdownIcon: {
      type: String,
      "default": void 0
    },
    severity: {
      type: String,
      "default": null
    },
    raised: {
      type: Boolean,
      "default": false
    },
    rounded: {
      type: Boolean,
      "default": false
    },
    text: {
      type: Boolean,
      "default": false
    },
    outlined: {
      type: Boolean,
      "default": false
    },
    size: {
      type: String,
      "default": null
    },
    plain: {
      type: Boolean,
      "default": false
    }
  },
  style: SplitButtonStyle,
  provide: /* @__PURE__ */ __name(function provide6() {
    return {
      $pcSplitButton: this,
      $parentInstance: this
    };
  }, "provide")
};
var script$3 = {
  name: "SplitButton",
  "extends": script$1$1,
  inheritAttrs: false,
  emits: ["click"],
  inject: {
    $pcFluid: {
      "default": null
    }
  },
  data: /* @__PURE__ */ __name(function data4() {
    return {
      id: this.$attrs.id,
      isExpanded: false
    };
  }, "data"),
  watch: {
    "$attrs.id": /* @__PURE__ */ __name(function $attrsId2(newValue) {
      this.id = newValue || UniqueComponentId();
    }, "$attrsId")
  },
  mounted: /* @__PURE__ */ __name(function mounted3() {
    var _this = this;
    this.id = this.id || UniqueComponentId();
    this.$watch("$refs.menu.visible", function(newValue) {
      _this.isExpanded = newValue;
    });
  }, "mounted"),
  methods: {
    onDropdownButtonClick: /* @__PURE__ */ __name(function onDropdownButtonClick(event) {
      if (event) {
        event.preventDefault();
      }
      this.$refs.menu.toggle({
        currentTarget: this.$el,
        relatedTarget: this.$refs.button.$el
      });
      this.isExpanded = this.$refs.menu.visible;
    }, "onDropdownButtonClick"),
    onDropdownKeydown: /* @__PURE__ */ __name(function onDropdownKeydown(event) {
      if (event.code === "ArrowDown" || event.code === "ArrowUp") {
        this.onDropdownButtonClick();
        event.preventDefault();
      }
    }, "onDropdownKeydown"),
    onDefaultButtonClick: /* @__PURE__ */ __name(function onDefaultButtonClick(event) {
      if (this.isExpanded) {
        this.$refs.menu.hide(event);
      }
      this.$emit("click", event);
    }, "onDefaultButtonClick")
  },
  computed: {
    containerClass: /* @__PURE__ */ __name(function containerClass() {
      return [this.cx("root"), this["class"]];
    }, "containerClass"),
    hasFluid: /* @__PURE__ */ __name(function hasFluid() {
      return isEmpty(this.fluid) ? !!this.$pcFluid : this.fluid;
    }, "hasFluid")
  },
  components: {
    PVSButton: script$d,
    PVSMenu: script$4,
    ChevronDownIcon: script$e
  }
};
var _hoisted_1$2 = ["data-p-severity"];
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_PVSButton = resolveComponent("PVSButton");
  var _component_PVSMenu = resolveComponent("PVSMenu");
  return openBlock(), createElementBlock("div", mergeProps({
    "class": $options.containerClass,
    style: _ctx.style
  }, _ctx.ptmi("root"), {
    "data-p-severity": _ctx.severity
  }), [createVNode(_component_PVSButton, mergeProps({
    type: "button",
    "class": _ctx.cx("pcButton"),
    label: _ctx.label,
    disabled: _ctx.disabled,
    severity: _ctx.severity,
    text: _ctx.text,
    icon: _ctx.icon,
    outlined: _ctx.outlined,
    size: _ctx.size,
    fluid: _ctx.fluid,
    "aria-label": _ctx.label,
    onClick: $options.onDefaultButtonClick
  }, _ctx.buttonProps, {
    pt: _ctx.ptm("pcButton"),
    unstyled: _ctx.unstyled
  }), createSlots({
    "default": withCtx(function() {
      return [renderSlot(_ctx.$slots, "default")];
    }),
    _: 2
  }, [_ctx.$slots.icon ? {
    name: "icon",
    fn: withCtx(function(slotProps) {
      return [renderSlot(_ctx.$slots, "icon", {
        "class": normalizeClass(slotProps["class"])
      }, function() {
        return [createBaseVNode("span", mergeProps({
          "class": [_ctx.icon, slotProps["class"]]
        }, _ctx.ptm("pcButton")["icon"], {
          "data-pc-section": "buttonicon"
        }), null, 16)];
      })];
    }),
    key: "0"
  } : void 0]), 1040, ["class", "label", "disabled", "severity", "text", "icon", "outlined", "size", "fluid", "aria-label", "onClick", "pt", "unstyled"]), createVNode(_component_PVSButton, mergeProps({
    ref: "button",
    type: "button",
    "class": _ctx.cx("pcDropdown"),
    disabled: _ctx.disabled,
    "aria-haspopup": "true",
    "aria-expanded": $data.isExpanded,
    "aria-controls": $data.id + "_overlay",
    onClick: $options.onDropdownButtonClick,
    onKeydown: $options.onDropdownKeydown,
    severity: _ctx.severity,
    text: _ctx.text,
    outlined: _ctx.outlined,
    size: _ctx.size,
    unstyled: _ctx.unstyled
  }, _ctx.menuButtonProps, {
    pt: _ctx.ptm("pcDropdown")
  }), {
    icon: withCtx(function(slotProps) {
      return [renderSlot(_ctx.$slots, _ctx.$slots.dropdownicon ? "dropdownicon" : "menubuttonicon", {
        "class": normalizeClass(slotProps["class"])
      }, function() {
        return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.menuButtonIcon || _ctx.dropdownIcon ? "span" : "ChevronDownIcon"), mergeProps({
          "class": [_ctx.dropdownIcon || _ctx.menuButtonIcon, slotProps["class"]]
        }, _ctx.ptm("pcDropdown")["icon"], {
          "data-pc-section": "menubuttonicon"
        }), null, 16, ["class"]))];
      })];
    }),
    _: 3
  }, 16, ["class", "disabled", "aria-expanded", "aria-controls", "onClick", "onKeydown", "severity", "text", "outlined", "size", "unstyled", "pt"]), createVNode(_component_PVSMenu, {
    ref: "menu",
    id: $data.id + "_overlay",
    model: _ctx.model,
    popup: true,
    autoZIndex: _ctx.autoZIndex,
    baseZIndex: _ctx.baseZIndex,
    appendTo: _ctx.appendTo,
    unstyled: _ctx.unstyled,
    pt: _ctx.ptm("pcMenu")
  }, createSlots({
    _: 2
  }, [_ctx.$slots.menuitemicon ? {
    name: "itemicon",
    fn: withCtx(function(slotProps) {
      return [renderSlot(_ctx.$slots, "menuitemicon", {
        item: slotProps.item,
        "class": normalizeClass(slotProps["class"])
      })];
    }),
    key: "0"
  } : void 0, _ctx.$slots.item ? {
    name: "item",
    fn: withCtx(function(slotProps) {
      return [renderSlot(_ctx.$slots, "item", {
        item: slotProps.item,
        hasSubmenu: slotProps.hasSubmenu,
        label: slotProps.label,
        props: slotProps.props
      })];
    }),
    key: "1"
  } : void 0]), 1032, ["id", "model", "autoZIndex", "baseZIndex", "appendTo", "unstyled", "pt"])], 16, _hoisted_1$2);
}
__name(render$2, "render$2");
script$3.render = render$2;
var theme6 = /* @__PURE__ */ __name(function theme7(_ref) {
  var dt = _ref.dt;
  return "\n.p-menubar {\n    display: flex;\n    align-items: center;\n    background: ".concat(dt("menubar.background"), ";\n    border: 1px solid ").concat(dt("menubar.border.color"), ";\n    border-radius: ").concat(dt("menubar.border.radius"), ";\n    color: ").concat(dt("menubar.color"), ";\n    padding: ").concat(dt("menubar.padding"), ";\n    gap: ").concat(dt("menubar.gap"), ";\n}\n\n.p-menubar-start,\n.p-megamenu-end {\n    display: flex;\n    align-items: center;\n}\n\n.p-menubar-root-list,\n.p-menubar-submenu {\n    display: flex;\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    outline: 0 none;\n}\n\n.p-menubar-root-list {\n    align-items: center;\n    flex-wrap: wrap;\n    gap: ").concat(dt("menubar.gap"), ";\n}\n\n.p-menubar-root-list > .p-menubar-item > .p-menubar-item-content {\n    border-radius: ").concat(dt("menubar.base.item.border.radius"), ";\n}\n\n.p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {\n    padding: ").concat(dt("menubar.base.item.padding"), ";\n}\n\n.p-menubar-item-content {\n    transition: background ").concat(dt("menubar.transition.duration"), ", color ").concat(dt("menubar.transition.duration"), ";\n    border-radius: ").concat(dt("menubar.item.border.radius"), ";\n    color: ").concat(dt("menubar.item.color"), ";\n}\n\n.p-menubar-item-link {\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n    overflow: hidden;\n    position: relative;\n    color: inherit;\n    padding: ").concat(dt("menubar.item.padding"), ";\n    gap: ").concat(dt("menubar.item.gap"), ";\n    user-select: none;\n    outline: 0 none;\n}\n\n.p-menubar-item-label {\n    line-height: 1;\n}\n\n.p-menubar-item-icon {\n    color: ").concat(dt("menubar.item.icon.color"), ";\n}\n\n.p-menubar-submenu-icon {\n    color: ").concat(dt("menubar.submenu.icon.color"), ";\n    margin-left: auto;\n    font-size: ").concat(dt("menubar.submenu.icon.size"), ";\n    width: ").concat(dt("menubar.submenu.icon.size"), ";\n    height: ").concat(dt("menubar.submenu.icon.size"), ";\n}\n\n.p-menubar-submenu .p-menubar-submenu-icon:dir(rtl) {\n    margin-left: 0;\n    margin-right: auto;\n}\n\n.p-menubar-item.p-focus > .p-menubar-item-content {\n    color: ").concat(dt("menubar.item.focus.color"), ";\n    background: ").concat(dt("menubar.item.focus.background"), ";\n}\n\n.p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-item-icon {\n    color: ").concat(dt("menubar.item.icon.focus.color"), ";\n}\n\n.p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-submenu-icon {\n    color: ").concat(dt("menubar.submenu.icon.focus.color"), ";\n}\n\n.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover {\n    color: ").concat(dt("menubar.item.focus.color"), ";\n    background: ").concat(dt("menubar.item.focus.background"), ";\n}\n\n.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-item-icon {\n    color: ").concat(dt("menubar.item.icon.focus.color"), ";\n}\n\n.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-submenu-icon {\n    color: ").concat(dt("menubar.submenu.icon.focus.color"), ";\n}\n\n.p-menubar-item-active > .p-menubar-item-content {\n    color: ").concat(dt("menubar.item.active.color"), ";\n    background: ").concat(dt("menubar.item.active.background"), ";\n}\n\n.p-menubar-item-active > .p-menubar-item-content .p-menubar-item-icon {\n    color: ").concat(dt("menubar.item.icon.active.color"), ";\n}\n\n.p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {\n    color: ").concat(dt("menubar.submenu.icon.active.color"), ";\n}\n\n.p-menubar-submenu {\n    display: none;\n    position: absolute;\n    min-width: 12.5rem;\n    z-index: 1;\n    background: ").concat(dt("menubar.submenu.background"), ";\n    border: 1px solid ").concat(dt("menubar.submenu.border.color"), ";\n    border-radius: ").concat(dt("menubar.submenu.border.radius"), ";\n    box-shadow: ").concat(dt("menubar.submenu.shadow"), ";\n    color: ").concat(dt("menubar.submenu.color"), ";\n    flex-direction: column;\n    padding: ").concat(dt("menubar.submenu.padding"), ";\n    gap: ").concat(dt("menubar.submenu.gap"), ";\n}\n\n.p-menubar-submenu .p-menubar-separator {\n    border-block-start: 1px solid ").concat(dt("menubar.separator.border.color"), ";\n}\n\n.p-menubar-submenu .p-menubar-item {\n    position: relative;\n}\n\n.p-menubar-submenu > .p-menubar-item-active > .p-menubar-submenu {\n    display: block;\n    left: 100%;\n    top: 0;\n}\n\n.p-menubar-end {\n    margin-left: auto;\n    align-self: center;\n}\n\n.p-menubar-end:dir(rtl) {\n    margin-left: 0;\n    margin-right: auto;\n}\n\n.p-menubar-button {\n    display: none;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    width: ").concat(dt("menubar.mobile.button.size"), ";\n    height: ").concat(dt("menubar.mobile.button.size"), ";\n    position: relative;\n    color: ").concat(dt("menubar.mobile.button.color"), ";\n    border: 0 none;\n    background: transparent;\n    border-radius: ").concat(dt("menubar.mobile.button.border.radius"), ";\n    transition: background ").concat(dt("menubar.transition.duration"), ", color ").concat(dt("menubar.transition.duration"), ", outline-color ").concat(dt("menubar.transition.duration"), ";\n    outline-color: transparent;\n}\n\n.p-menubar-button:hover {\n    color: ").concat(dt("menubar.mobile.button.hover.color"), ";\n    background: ").concat(dt("menubar.mobile.button.hover.background"), ";\n}\n\n.p-menubar-button:focus-visible {\n    box-shadow: ").concat(dt("menubar.mobile.button.focus.ring.shadow"), ";\n    outline: ").concat(dt("menubar.mobile.button.focus.ring.width"), " ").concat(dt("menubar.mobile.button.focus.ring.style"), " ").concat(dt("menubar.mobile.button.focus.ring.color"), ";\n    outline-offset: ").concat(dt("menubar.mobile.button.focus.ring.offset"), ";\n}\n\n.p-menubar-mobile {\n    position: relative;\n}\n\n.p-menubar-mobile .p-menubar-button {\n    display: flex;\n}\n\n.p-menubar-mobile .p-menubar-root-list {\n    position: absolute;\n    display: none;\n    width: 100%;\n    flex-direction: column;\n    top: 100%;\n    left: 0;\n    z-index: 1;\n    padding: ").concat(dt("menubar.submenu.padding"), ";\n    background: ").concat(dt("menubar.submenu.background"), ";\n    border: 1px solid ").concat(dt("menubar.submenu.border.color"), ";\n    box-shadow: ").concat(dt("menubar.submenu.shadow"), ";\n    border-radius: ").concat(dt("menubar.submenu.border.radius"), ";\n    gap: ").concat(dt("menubar.submenu.gap"), ";\n}\n\n.p-menubar-mobile .p-menubar-root-list:dir(rtl) {\n    left: auto;\n    right: 0;\n}\n\n.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {\n    padding: ").concat(dt("menubar.item.padding"), ";\n}\n\n.p-menubar-mobile-active .p-menubar-root-list {\n    display: flex;\n}\n\n.p-menubar-mobile .p-menubar-root-list .p-menubar-item {\n    width: 100%;\n    position: static;\n}\n\n.p-menubar-mobile .p-menubar-root-list .p-menubar-separator {\n    border-block-start: 1px solid ").concat(dt("menubar.separator.border.color"), ";\n}\n\n.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon {\n    margin-left: auto;\n    transition: transform 0.2s;\n}\n\n.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon:dir(rtl),\n.p-menubar-mobile .p-menubar-submenu-icon:dir(rtl) {\n    margin-left: 0;\n    margin-right: auto;\n}\n\n.p-menubar-mobile .p-menubar-root-list > .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {\n    transform: rotate(-180deg);\n}\n\n.p-menubar-mobile .p-menubar-submenu .p-menubar-submenu-icon {\n    transition: transform 0.2s;\n    transform: rotate(90deg);\n}\n\n.p-menubar-mobile .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {\n    transform: rotate(-90deg);\n}\n\n.p-menubar-mobile .p-menubar-submenu {\n    width: 100%;\n    position: static;\n    box-shadow: none;\n    border: 0 none;\n    padding-inline-start: ").concat(dt("menubar.submenu.mobile.indent"), ";\n    padding-inline-end: 0;\n}\n");
}, "theme");
var inlineStyles = {
  submenu: /* @__PURE__ */ __name(function submenu2(_ref2) {
    var instance = _ref2.instance, processedItem = _ref2.processedItem;
    return {
      display: instance.isItemActive(processedItem) ? "flex" : "none"
    };
  }, "submenu")
};
var classes = {
  root: /* @__PURE__ */ __name(function root6(_ref3) {
    var instance = _ref3.instance;
    return ["p-menubar p-component", {
      "p-menubar-mobile": instance.queryMatches,
      "p-menubar-mobile-active": instance.mobileActive
    }];
  }, "root"),
  start: "p-menubar-start",
  button: "p-menubar-button",
  rootList: "p-menubar-root-list",
  item: /* @__PURE__ */ __name(function item2(_ref4) {
    var instance = _ref4.instance, processedItem = _ref4.processedItem;
    return ["p-menubar-item", {
      "p-menubar-item-active": instance.isItemActive(processedItem),
      "p-focus": instance.isItemFocused(processedItem),
      "p-disabled": instance.isItemDisabled(processedItem)
    }];
  }, "item"),
  itemContent: "p-menubar-item-content",
  itemLink: "p-menubar-item-link",
  itemIcon: "p-menubar-item-icon",
  itemLabel: "p-menubar-item-label",
  submenuIcon: "p-menubar-submenu-icon",
  submenu: "p-menubar-submenu",
  separator: "p-menubar-separator",
  end: "p-menubar-end"
};
var MenubarStyle = BaseStyle.extend({
  name: "menubar",
  theme: theme6,
  classes,
  inlineStyles
});
var script$2 = {
  name: "BaseMenubar",
  "extends": script$9,
  props: {
    model: {
      type: Array,
      "default": null
    },
    buttonProps: {
      type: null,
      "default": null
    },
    breakpoint: {
      type: String,
      "default": "960px"
    },
    ariaLabelledby: {
      type: String,
      "default": null
    },
    ariaLabel: {
      type: String,
      "default": null
    }
  },
  style: MenubarStyle,
  provide: /* @__PURE__ */ __name(function provide7() {
    return {
      $pcMenubar: this,
      $parentInstance: this
    };
  }, "provide")
};
var script$1 = {
  name: "MenubarSub",
  hostName: "Menubar",
  "extends": script$9,
  emits: ["item-mouseenter", "item-click", "item-mousemove"],
  props: {
    items: {
      type: Array,
      "default": null
    },
    root: {
      type: Boolean,
      "default": false
    },
    popup: {
      type: Boolean,
      "default": false
    },
    mobileActive: {
      type: Boolean,
      "default": false
    },
    templates: {
      type: Object,
      "default": null
    },
    level: {
      type: Number,
      "default": 0
    },
    menuId: {
      type: String,
      "default": null
    },
    focusedItemId: {
      type: String,
      "default": null
    },
    activeItemPath: {
      type: Object,
      "default": null
    }
  },
  list: null,
  methods: {
    getItemId: /* @__PURE__ */ __name(function getItemId2(processedItem) {
      return "".concat(this.menuId, "_").concat(processedItem.key);
    }, "getItemId"),
    getItemKey: /* @__PURE__ */ __name(function getItemKey2(processedItem) {
      return this.getItemId(processedItem);
    }, "getItemKey"),
    getItemProp: /* @__PURE__ */ __name(function getItemProp3(processedItem, name, params) {
      return processedItem && processedItem.item ? resolve(processedItem.item[name], params) : void 0;
    }, "getItemProp"),
    getItemLabel: /* @__PURE__ */ __name(function getItemLabel3(processedItem) {
      return this.getItemProp(processedItem, "label");
    }, "getItemLabel"),
    getItemLabelId: /* @__PURE__ */ __name(function getItemLabelId2(processedItem) {
      return "".concat(this.menuId, "_").concat(processedItem.key, "_label");
    }, "getItemLabelId"),
    getPTOptions: /* @__PURE__ */ __name(function getPTOptions4(processedItem, index, key) {
      return this.ptm(key, {
        context: {
          item: processedItem.item,
          index,
          active: this.isItemActive(processedItem),
          focused: this.isItemFocused(processedItem),
          disabled: this.isItemDisabled(processedItem),
          level: this.level
        }
      });
    }, "getPTOptions"),
    isItemActive: /* @__PURE__ */ __name(function isItemActive2(processedItem) {
      return this.activeItemPath.some(function(path) {
        return path.key === processedItem.key;
      });
    }, "isItemActive"),
    isItemVisible: /* @__PURE__ */ __name(function isItemVisible3(processedItem) {
      return this.getItemProp(processedItem, "visible") !== false;
    }, "isItemVisible"),
    isItemDisabled: /* @__PURE__ */ __name(function isItemDisabled3(processedItem) {
      return this.getItemProp(processedItem, "disabled");
    }, "isItemDisabled"),
    isItemFocused: /* @__PURE__ */ __name(function isItemFocused2(processedItem) {
      return this.focusedItemId === this.getItemId(processedItem);
    }, "isItemFocused"),
    isItemGroup: /* @__PURE__ */ __name(function isItemGroup3(processedItem) {
      return isNotEmpty(processedItem.items);
    }, "isItemGroup"),
    onItemClick: /* @__PURE__ */ __name(function onItemClick3(event, processedItem) {
      this.getItemProp(processedItem, "command", {
        originalEvent: event,
        item: processedItem.item
      });
      this.$emit("item-click", {
        originalEvent: event,
        processedItem,
        isFocus: true
      });
    }, "onItemClick"),
    onItemMouseEnter: /* @__PURE__ */ __name(function onItemMouseEnter3(event, processedItem) {
      this.$emit("item-mouseenter", {
        originalEvent: event,
        processedItem
      });
    }, "onItemMouseEnter"),
    onItemMouseMove: /* @__PURE__ */ __name(function onItemMouseMove3(event, processedItem) {
      this.$emit("item-mousemove", {
        originalEvent: event,
        processedItem
      });
    }, "onItemMouseMove"),
    getAriaPosInset: /* @__PURE__ */ __name(function getAriaPosInset2(index) {
      return index - this.calculateAriaSetSize.slice(0, index).length + 1;
    }, "getAriaPosInset"),
    getMenuItemProps: /* @__PURE__ */ __name(function getMenuItemProps2(processedItem, index) {
      return {
        action: mergeProps({
          "class": this.cx("itemLink"),
          tabindex: -1
        }, this.getPTOptions(processedItem, index, "itemLink")),
        icon: mergeProps({
          "class": [this.cx("itemIcon"), this.getItemProp(processedItem, "icon")]
        }, this.getPTOptions(processedItem, index, "itemIcon")),
        label: mergeProps({
          "class": this.cx("itemLabel")
        }, this.getPTOptions(processedItem, index, "itemLabel")),
        submenuicon: mergeProps({
          "class": this.cx("submenuIcon")
        }, this.getPTOptions(processedItem, index, "submenuIcon"))
      };
    }, "getMenuItemProps")
  },
  computed: {
    calculateAriaSetSize: /* @__PURE__ */ __name(function calculateAriaSetSize() {
      var _this = this;
      return this.items.filter(function(processedItem) {
        return _this.isItemVisible(processedItem) && _this.getItemProp(processedItem, "separator");
      });
    }, "calculateAriaSetSize"),
    getAriaSetSize: /* @__PURE__ */ __name(function getAriaSetSize2() {
      var _this2 = this;
      return this.items.filter(function(processedItem) {
        return _this2.isItemVisible(processedItem) && !_this2.getItemProp(processedItem, "separator");
      }).length;
    }, "getAriaSetSize")
  },
  components: {
    AngleRightIcon: script$b,
    AngleDownIcon: script$f
  },
  directives: {
    ripple: Ripple
  }
};
var _hoisted_1$1 = ["id", "aria-label", "aria-disabled", "aria-expanded", "aria-haspopup", "aria-level", "aria-setsize", "aria-posinset", "data-p-active", "data-p-focused", "data-p-disabled"];
var _hoisted_2 = ["onClick", "onMouseenter", "onMousemove"];
var _hoisted_3 = ["href", "target"];
var _hoisted_4 = ["id"];
var _hoisted_5 = ["id"];
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_MenubarSub = resolveComponent("MenubarSub", true);
  var _directive_ripple = resolveDirective("ripple");
  return openBlock(), createElementBlock("ul", mergeProps({
    "class": $props.level === 0 ? _ctx.cx("rootList") : _ctx.cx("submenu")
  }, $props.level === 0 ? _ctx.ptm("rootList") : _ctx.ptm("submenu")), [(openBlock(true), createElementBlock(Fragment, null, renderList($props.items, function(processedItem, index) {
    return openBlock(), createElementBlock(Fragment, {
      key: $options.getItemKey(processedItem)
    }, [$options.isItemVisible(processedItem) && !$options.getItemProp(processedItem, "separator") ? (openBlock(), createElementBlock("li", mergeProps({
      key: 0,
      id: $options.getItemId(processedItem),
      style: $options.getItemProp(processedItem, "style"),
      "class": [_ctx.cx("item", {
        processedItem
      }), $options.getItemProp(processedItem, "class")],
      role: "menuitem",
      "aria-label": $options.getItemLabel(processedItem),
      "aria-disabled": $options.isItemDisabled(processedItem) || void 0,
      "aria-expanded": $options.isItemGroup(processedItem) ? $options.isItemActive(processedItem) : void 0,
      "aria-haspopup": $options.isItemGroup(processedItem) && !$options.getItemProp(processedItem, "to") ? "menu" : void 0,
      "aria-level": $props.level + 1,
      "aria-setsize": $options.getAriaSetSize,
      "aria-posinset": $options.getAriaPosInset(index),
      ref_for: true
    }, $options.getPTOptions(processedItem, index, "item"), {
      "data-p-active": $options.isItemActive(processedItem),
      "data-p-focused": $options.isItemFocused(processedItem),
      "data-p-disabled": $options.isItemDisabled(processedItem)
    }), [createBaseVNode("div", mergeProps({
      "class": _ctx.cx("itemContent"),
      onClick: /* @__PURE__ */ __name(function onClick($event) {
        return $options.onItemClick($event, processedItem);
      }, "onClick"),
      onMouseenter: /* @__PURE__ */ __name(function onMouseenter($event) {
        return $options.onItemMouseEnter($event, processedItem);
      }, "onMouseenter"),
      onMousemove: /* @__PURE__ */ __name(function onMousemove($event) {
        return $options.onItemMouseMove($event, processedItem);
      }, "onMousemove"),
      ref_for: true
    }, $options.getPTOptions(processedItem, index, "itemContent")), [!$props.templates.item ? withDirectives((openBlock(), createElementBlock("a", mergeProps({
      key: 0,
      href: $options.getItemProp(processedItem, "url"),
      "class": _ctx.cx("itemLink"),
      target: $options.getItemProp(processedItem, "target"),
      tabindex: "-1",
      ref_for: true
    }, $options.getPTOptions(processedItem, index, "itemLink")), [$props.templates.itemicon ? (openBlock(), createBlock(resolveDynamicComponent($props.templates.itemicon), {
      key: 0,
      item: processedItem.item,
      "class": normalizeClass(_ctx.cx("itemIcon"))
    }, null, 8, ["item", "class"])) : $options.getItemProp(processedItem, "icon") ? (openBlock(), createElementBlock("span", mergeProps({
      key: 1,
      "class": [_ctx.cx("itemIcon"), $options.getItemProp(processedItem, "icon")],
      ref_for: true
    }, $options.getPTOptions(processedItem, index, "itemIcon")), null, 16)) : createCommentVNode("", true), createBaseVNode("span", mergeProps({
      id: $options.getItemLabelId(processedItem),
      "class": _ctx.cx("itemLabel"),
      ref_for: true
    }, $options.getPTOptions(processedItem, index, "itemLabel")), toDisplayString($options.getItemLabel(processedItem)), 17, _hoisted_4), $options.getItemProp(processedItem, "items") ? (openBlock(), createElementBlock(Fragment, {
      key: 2
    }, [$props.templates.submenuicon ? (openBlock(), createBlock(resolveDynamicComponent($props.templates.submenuicon), {
      key: 0,
      root: $props.root,
      active: $options.isItemActive(processedItem),
      "class": normalizeClass(_ctx.cx("submenuIcon"))
    }, null, 8, ["root", "active", "class"])) : (openBlock(), createBlock(resolveDynamicComponent($props.root ? "AngleDownIcon" : "AngleRightIcon"), mergeProps({
      key: 1,
      "class": _ctx.cx("submenuIcon"),
      ref_for: true
    }, $options.getPTOptions(processedItem, index, "submenuIcon")), null, 16, ["class"]))], 64)) : createCommentVNode("", true)], 16, _hoisted_3)), [[_directive_ripple]]) : (openBlock(), createBlock(resolveDynamicComponent($props.templates.item), {
      key: 1,
      item: processedItem.item,
      root: $props.root,
      hasSubmenu: $options.getItemProp(processedItem, "items"),
      label: $options.getItemLabel(processedItem),
      props: $options.getMenuItemProps(processedItem, index)
    }, null, 8, ["item", "root", "hasSubmenu", "label", "props"]))], 16, _hoisted_2), $options.isItemVisible(processedItem) && $options.isItemGroup(processedItem) ? (openBlock(), createBlock(_component_MenubarSub, {
      key: 0,
      id: $options.getItemId(processedItem) + "_list",
      menuId: $props.menuId,
      role: "menu",
      style: normalizeStyle(_ctx.sx("submenu", true, {
        processedItem
      })),
      focusedItemId: $props.focusedItemId,
      items: processedItem.items,
      mobileActive: $props.mobileActive,
      activeItemPath: $props.activeItemPath,
      templates: $props.templates,
      level: $props.level + 1,
      "aria-labelledby": $options.getItemLabelId(processedItem),
      pt: _ctx.pt,
      unstyled: _ctx.unstyled,
      onItemClick: _cache[0] || (_cache[0] = function($event) {
        return _ctx.$emit("item-click", $event);
      }),
      onItemMouseenter: _cache[1] || (_cache[1] = function($event) {
        return _ctx.$emit("item-mouseenter", $event);
      }),
      onItemMousemove: _cache[2] || (_cache[2] = function($event) {
        return _ctx.$emit("item-mousemove", $event);
      })
    }, null, 8, ["id", "menuId", "style", "focusedItemId", "items", "mobileActive", "activeItemPath", "templates", "level", "aria-labelledby", "pt", "unstyled"])) : createCommentVNode("", true)], 16, _hoisted_1$1)) : createCommentVNode("", true), $options.isItemVisible(processedItem) && $options.getItemProp(processedItem, "separator") ? (openBlock(), createElementBlock("li", mergeProps({
      key: 1,
      id: $options.getItemId(processedItem),
      "class": [_ctx.cx("separator"), $options.getItemProp(processedItem, "class")],
      style: $options.getItemProp(processedItem, "style"),
      role: "separator",
      ref_for: true
    }, _ctx.ptm("separator")), null, 16, _hoisted_5)) : createCommentVNode("", true)], 64);
  }), 128))], 16);
}
__name(render$1, "render$1");
script$1.render = render$1;
var script = {
  name: "Menubar",
  "extends": script$2,
  inheritAttrs: false,
  emits: ["focus", "blur"],
  matchMediaListener: null,
  data: /* @__PURE__ */ __name(function data5() {
    return {
      id: this.$attrs.id,
      mobileActive: false,
      focused: false,
      focusedItemInfo: {
        index: -1,
        level: 0,
        parentKey: ""
      },
      activeItemPath: [],
      dirty: false,
      query: null,
      queryMatches: false
    };
  }, "data"),
  watch: {
    "$attrs.id": /* @__PURE__ */ __name(function $attrsId3(newValue) {
      this.id = newValue || UniqueComponentId();
    }, "$attrsId"),
    activeItemPath: /* @__PURE__ */ __name(function activeItemPath2(newPath) {
      if (isNotEmpty(newPath)) {
        this.bindOutsideClickListener();
        this.bindResizeListener();
      } else {
        this.unbindOutsideClickListener();
        this.unbindResizeListener();
      }
    }, "activeItemPath")
  },
  outsideClickListener: null,
  container: null,
  menubar: null,
  mounted: /* @__PURE__ */ __name(function mounted4() {
    this.id = this.id || UniqueComponentId();
    this.bindMatchMediaListener();
  }, "mounted"),
  beforeUnmount: /* @__PURE__ */ __name(function beforeUnmount3() {
    this.mobileActive = false;
    this.unbindOutsideClickListener();
    this.unbindResizeListener();
    this.unbindMatchMediaListener();
    if (this.container) {
      ZIndex.clear(this.container);
    }
    this.container = null;
  }, "beforeUnmount"),
  methods: {
    getItemProp: /* @__PURE__ */ __name(function getItemProp4(item3, name) {
      return item3 ? resolve(item3[name]) : void 0;
    }, "getItemProp"),
    getItemLabel: /* @__PURE__ */ __name(function getItemLabel4(item3) {
      return this.getItemProp(item3, "label");
    }, "getItemLabel"),
    isItemDisabled: /* @__PURE__ */ __name(function isItemDisabled4(item3) {
      return this.getItemProp(item3, "disabled");
    }, "isItemDisabled"),
    isItemVisible: /* @__PURE__ */ __name(function isItemVisible4(item3) {
      return this.getItemProp(item3, "visible") !== false;
    }, "isItemVisible"),
    isItemGroup: /* @__PURE__ */ __name(function isItemGroup4(item3) {
      return isNotEmpty(this.getItemProp(item3, "items"));
    }, "isItemGroup"),
    isItemSeparator: /* @__PURE__ */ __name(function isItemSeparator2(item3) {
      return this.getItemProp(item3, "separator");
    }, "isItemSeparator"),
    getProccessedItemLabel: /* @__PURE__ */ __name(function getProccessedItemLabel2(processedItem) {
      return processedItem ? this.getItemLabel(processedItem.item) : void 0;
    }, "getProccessedItemLabel"),
    isProccessedItemGroup: /* @__PURE__ */ __name(function isProccessedItemGroup2(processedItem) {
      return processedItem && isNotEmpty(processedItem.items);
    }, "isProccessedItemGroup"),
    toggle: /* @__PURE__ */ __name(function toggle2(event) {
      var _this = this;
      if (this.mobileActive) {
        this.mobileActive = false;
        ZIndex.clear(this.menubar);
        this.hide();
      } else {
        this.mobileActive = true;
        ZIndex.set("menu", this.menubar, this.$primevue.config.zIndex.menu);
        setTimeout(function() {
          _this.show();
        }, 1);
      }
      this.bindOutsideClickListener();
      event.preventDefault();
    }, "toggle"),
    show: /* @__PURE__ */ __name(function show2() {
      focus(this.menubar);
    }, "show"),
    hide: /* @__PURE__ */ __name(function hide2(event, isFocus) {
      var _this2 = this;
      if (this.mobileActive) {
        this.mobileActive = false;
        setTimeout(function() {
          focus(_this2.$refs.menubutton);
        }, 0);
      }
      this.activeItemPath = [];
      this.focusedItemInfo = {
        index: -1,
        level: 0,
        parentKey: ""
      };
      isFocus && focus(this.menubar);
      this.dirty = false;
    }, "hide"),
    onFocus: /* @__PURE__ */ __name(function onFocus2(event) {
      this.focused = true;
      this.focusedItemInfo = this.focusedItemInfo.index !== -1 ? this.focusedItemInfo : {
        index: this.findFirstFocusedItemIndex(),
        level: 0,
        parentKey: ""
      };
      this.$emit("focus", event);
    }, "onFocus"),
    onBlur: /* @__PURE__ */ __name(function onBlur2(event) {
      this.focused = false;
      this.focusedItemInfo = {
        index: -1,
        level: 0,
        parentKey: ""
      };
      this.searchValue = "";
      this.dirty = false;
      this.$emit("blur", event);
    }, "onBlur"),
    onKeyDown: /* @__PURE__ */ __name(function onKeyDown2(event) {
      var metaKey = event.metaKey || event.ctrlKey;
      switch (event.code) {
        case "ArrowDown":
          this.onArrowDownKey(event);
          break;
        case "ArrowUp":
          this.onArrowUpKey(event);
          break;
        case "ArrowLeft":
          this.onArrowLeftKey(event);
          break;
        case "ArrowRight":
          this.onArrowRightKey(event);
          break;
        case "Home":
          this.onHomeKey(event);
          break;
        case "End":
          this.onEndKey(event);
          break;
        case "Space":
          this.onSpaceKey(event);
          break;
        case "Enter":
        case "NumpadEnter":
          this.onEnterKey(event);
          break;
        case "Escape":
          this.onEscapeKey(event);
          break;
        case "Tab":
          this.onTabKey(event);
          break;
        case "PageDown":
        case "PageUp":
        case "Backspace":
        case "ShiftLeft":
        case "ShiftRight":
          break;
        default:
          if (!metaKey && isPrintableCharacter(event.key)) {
            this.searchItems(event, event.key);
          }
          break;
      }
    }, "onKeyDown"),
    onItemChange: /* @__PURE__ */ __name(function onItemChange2(event, type) {
      var processedItem = event.processedItem, isFocus = event.isFocus;
      if (isEmpty(processedItem)) return;
      var index = processedItem.index, key = processedItem.key, level = processedItem.level, parentKey = processedItem.parentKey, items = processedItem.items;
      var grouped = isNotEmpty(items);
      var activeItemPath3 = this.activeItemPath.filter(function(p) {
        return p.parentKey !== parentKey && p.parentKey !== key;
      });
      grouped && activeItemPath3.push(processedItem);
      this.focusedItemInfo = {
        index,
        level,
        parentKey
      };
      grouped && (this.dirty = true);
      isFocus && focus(this.menubar);
      if (type === "hover" && this.queryMatches) {
        return;
      }
      this.activeItemPath = activeItemPath3;
    }, "onItemChange"),
    onItemClick: /* @__PURE__ */ __name(function onItemClick4(event) {
      var originalEvent = event.originalEvent, processedItem = event.processedItem;
      var grouped = this.isProccessedItemGroup(processedItem);
      var root7 = isEmpty(processedItem.parent);
      var selected = this.isSelected(processedItem);
      if (selected) {
        var index = processedItem.index, key = processedItem.key, level = processedItem.level, parentKey = processedItem.parentKey;
        this.activeItemPath = this.activeItemPath.filter(function(p) {
          return key !== p.key && key.startsWith(p.key);
        });
        this.focusedItemInfo = {
          index,
          level,
          parentKey
        };
        this.dirty = !root7;
        focus(this.menubar);
      } else {
        if (grouped) {
          this.onItemChange(event);
        } else {
          var rootProcessedItem = root7 ? processedItem : this.activeItemPath.find(function(p) {
            return p.parentKey === "";
          });
          this.hide(originalEvent);
          this.changeFocusedItemIndex(originalEvent, rootProcessedItem ? rootProcessedItem.index : -1);
          this.mobileActive = false;
          focus(this.menubar);
        }
      }
    }, "onItemClick"),
    onItemMouseEnter: /* @__PURE__ */ __name(function onItemMouseEnter4(event) {
      if (this.dirty) {
        this.onItemChange(event, "hover");
      }
    }, "onItemMouseEnter"),
    onItemMouseMove: /* @__PURE__ */ __name(function onItemMouseMove4(event) {
      if (this.focused) {
        this.changeFocusedItemIndex(event, event.processedItem.index);
      }
    }, "onItemMouseMove"),
    menuButtonClick: /* @__PURE__ */ __name(function menuButtonClick(event) {
      this.toggle(event);
    }, "menuButtonClick"),
    menuButtonKeydown: /* @__PURE__ */ __name(function menuButtonKeydown(event) {
      (event.code === "Enter" || event.code === "NumpadEnter" || event.code === "Space") && this.menuButtonClick(event);
    }, "menuButtonKeydown"),
    onArrowDownKey: /* @__PURE__ */ __name(function onArrowDownKey2(event) {
      var processedItem = this.visibleItems[this.focusedItemInfo.index];
      var root7 = processedItem ? isEmpty(processedItem.parent) : null;
      if (root7) {
        var grouped = this.isProccessedItemGroup(processedItem);
        if (grouped) {
          this.onItemChange({
            originalEvent: event,
            processedItem
          });
          this.focusedItemInfo = {
            index: -1,
            parentKey: processedItem.key
          };
          this.onArrowRightKey(event);
        }
      } else {
        var itemIndex = this.focusedItemInfo.index !== -1 ? this.findNextItemIndex(this.focusedItemInfo.index) : this.findFirstFocusedItemIndex();
        this.changeFocusedItemIndex(event, itemIndex);
      }
      event.preventDefault();
    }, "onArrowDownKey"),
    onArrowUpKey: /* @__PURE__ */ __name(function onArrowUpKey2(event) {
      var _this3 = this;
      var processedItem = this.visibleItems[this.focusedItemInfo.index];
      var root7 = isEmpty(processedItem.parent);
      if (root7) {
        var grouped = this.isProccessedItemGroup(processedItem);
        if (grouped) {
          this.onItemChange({
            originalEvent: event,
            processedItem
          });
          this.focusedItemInfo = {
            index: -1,
            parentKey: processedItem.key
          };
          var itemIndex = this.findLastItemIndex();
          this.changeFocusedItemIndex(event, itemIndex);
        }
      } else {
        var parentItem = this.activeItemPath.find(function(p) {
          return p.key === processedItem.parentKey;
        });
        if (this.focusedItemInfo.index === 0) {
          this.focusedItemInfo = {
            index: -1,
            parentKey: parentItem ? parentItem.parentKey : ""
          };
          this.searchValue = "";
          this.onArrowLeftKey(event);
          this.activeItemPath = this.activeItemPath.filter(function(p) {
            return p.parentKey !== _this3.focusedItemInfo.parentKey;
          });
        } else {
          var _itemIndex = this.focusedItemInfo.index !== -1 ? this.findPrevItemIndex(this.focusedItemInfo.index) : this.findLastFocusedItemIndex();
          this.changeFocusedItemIndex(event, _itemIndex);
        }
      }
      event.preventDefault();
    }, "onArrowUpKey"),
    onArrowLeftKey: /* @__PURE__ */ __name(function onArrowLeftKey2(event) {
      var _this4 = this;
      var processedItem = this.visibleItems[this.focusedItemInfo.index];
      var parentItem = processedItem ? this.activeItemPath.find(function(p) {
        return p.key === processedItem.parentKey;
      }) : null;
      if (parentItem) {
        this.onItemChange({
          originalEvent: event,
          processedItem: parentItem
        });
        this.activeItemPath = this.activeItemPath.filter(function(p) {
          return p.parentKey !== _this4.focusedItemInfo.parentKey;
        });
        event.preventDefault();
      } else {
        var itemIndex = this.focusedItemInfo.index !== -1 ? this.findPrevItemIndex(this.focusedItemInfo.index) : this.findLastFocusedItemIndex();
        this.changeFocusedItemIndex(event, itemIndex);
        event.preventDefault();
      }
    }, "onArrowLeftKey"),
    onArrowRightKey: /* @__PURE__ */ __name(function onArrowRightKey2(event) {
      var processedItem = this.visibleItems[this.focusedItemInfo.index];
      var parentItem = processedItem ? this.activeItemPath.find(function(p) {
        return p.key === processedItem.parentKey;
      }) : null;
      if (parentItem) {
        var grouped = this.isProccessedItemGroup(processedItem);
        if (grouped) {
          this.onItemChange({
            originalEvent: event,
            processedItem
          });
          this.focusedItemInfo = {
            index: -1,
            parentKey: processedItem.key
          };
          this.onArrowDownKey(event);
        }
      } else {
        var itemIndex = this.focusedItemInfo.index !== -1 ? this.findNextItemIndex(this.focusedItemInfo.index) : this.findFirstFocusedItemIndex();
        this.changeFocusedItemIndex(event, itemIndex);
        event.preventDefault();
      }
    }, "onArrowRightKey"),
    onHomeKey: /* @__PURE__ */ __name(function onHomeKey2(event) {
      this.changeFocusedItemIndex(event, this.findFirstItemIndex());
      event.preventDefault();
    }, "onHomeKey"),
    onEndKey: /* @__PURE__ */ __name(function onEndKey2(event) {
      this.changeFocusedItemIndex(event, this.findLastItemIndex());
      event.preventDefault();
    }, "onEndKey"),
    onEnterKey: /* @__PURE__ */ __name(function onEnterKey2(event) {
      if (this.focusedItemInfo.index !== -1) {
        var element = findSingle(this.menubar, 'li[id="'.concat("".concat(this.focusedItemId), '"]'));
        var anchorElement = element && findSingle(element, 'a[data-pc-section="itemlink"]');
        anchorElement ? anchorElement.click() : element && element.click();
        var processedItem = this.visibleItems[this.focusedItemInfo.index];
        var grouped = this.isProccessedItemGroup(processedItem);
        !grouped && (this.focusedItemInfo.index = this.findFirstFocusedItemIndex());
      }
      event.preventDefault();
    }, "onEnterKey"),
    onSpaceKey: /* @__PURE__ */ __name(function onSpaceKey2(event) {
      this.onEnterKey(event);
    }, "onSpaceKey"),
    onEscapeKey: /* @__PURE__ */ __name(function onEscapeKey2(event) {
      if (this.focusedItemInfo.level !== 0) {
        var _focusedItemInfo = this.focusedItemInfo;
        this.hide(event, false);
        this.focusedItemInfo = {
          index: Number(_focusedItemInfo.parentKey.split("_")[0]),
          level: 0,
          parentKey: ""
        };
      }
      event.preventDefault();
    }, "onEscapeKey"),
    onTabKey: /* @__PURE__ */ __name(function onTabKey2(event) {
      if (this.focusedItemInfo.index !== -1) {
        var processedItem = this.visibleItems[this.focusedItemInfo.index];
        var grouped = this.isProccessedItemGroup(processedItem);
        !grouped && this.onItemChange({
          originalEvent: event,
          processedItem
        });
      }
      this.hide();
    }, "onTabKey"),
    bindOutsideClickListener: /* @__PURE__ */ __name(function bindOutsideClickListener2() {
      var _this5 = this;
      if (!this.outsideClickListener) {
        this.outsideClickListener = function(event) {
          var isOutsideContainer = _this5.container && !_this5.container.contains(event.target);
          var isOutsideTarget = !(_this5.target && (_this5.target === event.target || _this5.target.contains(event.target)));
          if (isOutsideContainer && isOutsideTarget) {
            _this5.hide();
          }
        };
        document.addEventListener("click", this.outsideClickListener);
      }
    }, "bindOutsideClickListener"),
    unbindOutsideClickListener: /* @__PURE__ */ __name(function unbindOutsideClickListener2() {
      if (this.outsideClickListener) {
        document.removeEventListener("click", this.outsideClickListener);
        this.outsideClickListener = null;
      }
    }, "unbindOutsideClickListener"),
    bindResizeListener: /* @__PURE__ */ __name(function bindResizeListener2() {
      var _this6 = this;
      if (!this.resizeListener) {
        this.resizeListener = function(event) {
          if (!isTouchDevice()) {
            _this6.hide(event, true);
          }
          _this6.mobileActive = false;
        };
        window.addEventListener("resize", this.resizeListener);
      }
    }, "bindResizeListener"),
    unbindResizeListener: /* @__PURE__ */ __name(function unbindResizeListener2() {
      if (this.resizeListener) {
        window.removeEventListener("resize", this.resizeListener);
        this.resizeListener = null;
      }
    }, "unbindResizeListener"),
    bindMatchMediaListener: /* @__PURE__ */ __name(function bindMatchMediaListener2() {
      var _this7 = this;
      if (!this.matchMediaListener) {
        var query = matchMedia("(max-width: ".concat(this.breakpoint, ")"));
        this.query = query;
        this.queryMatches = query.matches;
        this.matchMediaListener = function() {
          _this7.queryMatches = query.matches;
          _this7.mobileActive = false;
        };
        this.query.addEventListener("change", this.matchMediaListener);
      }
    }, "bindMatchMediaListener"),
    unbindMatchMediaListener: /* @__PURE__ */ __name(function unbindMatchMediaListener2() {
      if (this.matchMediaListener) {
        this.query.removeEventListener("change", this.matchMediaListener);
        this.matchMediaListener = null;
      }
    }, "unbindMatchMediaListener"),
    isItemMatched: /* @__PURE__ */ __name(function isItemMatched2(processedItem) {
      var _this$getProccessedIt;
      return this.isValidItem(processedItem) && ((_this$getProccessedIt = this.getProccessedItemLabel(processedItem)) === null || _this$getProccessedIt === void 0 ? void 0 : _this$getProccessedIt.toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase()));
    }, "isItemMatched"),
    isValidItem: /* @__PURE__ */ __name(function isValidItem2(processedItem) {
      return !!processedItem && !this.isItemDisabled(processedItem.item) && !this.isItemSeparator(processedItem.item) && this.isItemVisible(processedItem.item);
    }, "isValidItem"),
    isValidSelectedItem: /* @__PURE__ */ __name(function isValidSelectedItem2(processedItem) {
      return this.isValidItem(processedItem) && this.isSelected(processedItem);
    }, "isValidSelectedItem"),
    isSelected: /* @__PURE__ */ __name(function isSelected2(processedItem) {
      return this.activeItemPath.some(function(p) {
        return p.key === processedItem.key;
      });
    }, "isSelected"),
    findFirstItemIndex: /* @__PURE__ */ __name(function findFirstItemIndex2() {
      var _this8 = this;
      return this.visibleItems.findIndex(function(processedItem) {
        return _this8.isValidItem(processedItem);
      });
    }, "findFirstItemIndex"),
    findLastItemIndex: /* @__PURE__ */ __name(function findLastItemIndex2() {
      var _this9 = this;
      return findLastIndex(this.visibleItems, function(processedItem) {
        return _this9.isValidItem(processedItem);
      });
    }, "findLastItemIndex"),
    findNextItemIndex: /* @__PURE__ */ __name(function findNextItemIndex2(index) {
      var _this10 = this;
      var matchedItemIndex = index < this.visibleItems.length - 1 ? this.visibleItems.slice(index + 1).findIndex(function(processedItem) {
        return _this10.isValidItem(processedItem);
      }) : -1;
      return matchedItemIndex > -1 ? matchedItemIndex + index + 1 : index;
    }, "findNextItemIndex"),
    findPrevItemIndex: /* @__PURE__ */ __name(function findPrevItemIndex2(index) {
      var _this11 = this;
      var matchedItemIndex = index > 0 ? findLastIndex(this.visibleItems.slice(0, index), function(processedItem) {
        return _this11.isValidItem(processedItem);
      }) : -1;
      return matchedItemIndex > -1 ? matchedItemIndex : index;
    }, "findPrevItemIndex"),
    findSelectedItemIndex: /* @__PURE__ */ __name(function findSelectedItemIndex2() {
      var _this12 = this;
      return this.visibleItems.findIndex(function(processedItem) {
        return _this12.isValidSelectedItem(processedItem);
      });
    }, "findSelectedItemIndex"),
    findFirstFocusedItemIndex: /* @__PURE__ */ __name(function findFirstFocusedItemIndex2() {
      var selectedIndex = this.findSelectedItemIndex();
      return selectedIndex < 0 ? this.findFirstItemIndex() : selectedIndex;
    }, "findFirstFocusedItemIndex"),
    findLastFocusedItemIndex: /* @__PURE__ */ __name(function findLastFocusedItemIndex2() {
      var selectedIndex = this.findSelectedItemIndex();
      return selectedIndex < 0 ? this.findLastItemIndex() : selectedIndex;
    }, "findLastFocusedItemIndex"),
    searchItems: /* @__PURE__ */ __name(function searchItems2(event, _char) {
      var _this13 = this;
      this.searchValue = (this.searchValue || "") + _char;
      var itemIndex = -1;
      var matched = false;
      if (this.focusedItemInfo.index !== -1) {
        itemIndex = this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(processedItem) {
          return _this13.isItemMatched(processedItem);
        });
        itemIndex = itemIndex === -1 ? this.visibleItems.slice(0, this.focusedItemInfo.index).findIndex(function(processedItem) {
          return _this13.isItemMatched(processedItem);
        }) : itemIndex + this.focusedItemInfo.index;
      } else {
        itemIndex = this.visibleItems.findIndex(function(processedItem) {
          return _this13.isItemMatched(processedItem);
        });
      }
      if (itemIndex !== -1) {
        matched = true;
      }
      if (itemIndex === -1 && this.focusedItemInfo.index === -1) {
        itemIndex = this.findFirstFocusedItemIndex();
      }
      if (itemIndex !== -1) {
        this.changeFocusedItemIndex(event, itemIndex);
      }
      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout);
      }
      this.searchTimeout = setTimeout(function() {
        _this13.searchValue = "";
        _this13.searchTimeout = null;
      }, 500);
      return matched;
    }, "searchItems"),
    changeFocusedItemIndex: /* @__PURE__ */ __name(function changeFocusedItemIndex2(event, index) {
      if (this.focusedItemInfo.index !== index) {
        this.focusedItemInfo.index = index;
        this.scrollInView();
      }
    }, "changeFocusedItemIndex"),
    scrollInView: /* @__PURE__ */ __name(function scrollInView2() {
      var index = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : -1;
      var id = index !== -1 ? "".concat(this.id, "_").concat(index) : this.focusedItemId;
      var element = findSingle(this.menubar, 'li[id="'.concat(id, '"]'));
      if (element) {
        element.scrollIntoView && element.scrollIntoView({
          block: "nearest",
          inline: "start"
        });
      }
    }, "scrollInView"),
    createProcessedItems: /* @__PURE__ */ __name(function createProcessedItems2(items) {
      var _this14 = this;
      var level = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      var parent = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var parentKey = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "";
      var processedItems3 = [];
      items && items.forEach(function(item3, index) {
        var key = (parentKey !== "" ? parentKey + "_" : "") + index;
        var newItem = {
          item: item3,
          index,
          level,
          key,
          parent,
          parentKey
        };
        newItem["items"] = _this14.createProcessedItems(item3.items, level + 1, newItem, key);
        processedItems3.push(newItem);
      });
      return processedItems3;
    }, "createProcessedItems"),
    containerRef: /* @__PURE__ */ __name(function containerRef3(el) {
      this.container = el;
    }, "containerRef"),
    menubarRef: /* @__PURE__ */ __name(function menubarRef2(el) {
      this.menubar = el ? el.$el : void 0;
    }, "menubarRef")
  },
  computed: {
    processedItems: /* @__PURE__ */ __name(function processedItems2() {
      return this.createProcessedItems(this.model || []);
    }, "processedItems"),
    visibleItems: /* @__PURE__ */ __name(function visibleItems2() {
      var _this15 = this;
      var processedItem = this.activeItemPath.find(function(p) {
        return p.key === _this15.focusedItemInfo.parentKey;
      });
      return processedItem ? processedItem.items : this.processedItems;
    }, "visibleItems"),
    focusedItemId: /* @__PURE__ */ __name(function focusedItemId2() {
      return this.focusedItemInfo.index !== -1 ? "".concat(this.id).concat(isNotEmpty(this.focusedItemInfo.parentKey) ? "_" + this.focusedItemInfo.parentKey : "", "_").concat(this.focusedItemInfo.index) : null;
    }, "focusedItemId")
  },
  components: {
    MenubarSub: script$1,
    BarsIcon: script$g
  }
};
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
__name(_typeof, "_typeof");
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
__name(ownKeys, "ownKeys");
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
__name(_objectSpread, "_objectSpread");
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
__name(_defineProperty, "_defineProperty");
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
__name(_toPropertyKey, "_toPropertyKey");
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
__name(_toPrimitive, "_toPrimitive");
var _hoisted_1 = ["aria-haspopup", "aria-expanded", "aria-controls", "aria-label"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_BarsIcon = resolveComponent("BarsIcon");
  var _component_MenubarSub = resolveComponent("MenubarSub");
  return openBlock(), createElementBlock("div", mergeProps({
    ref: $options.containerRef,
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [_ctx.$slots.start ? (openBlock(), createElementBlock("div", mergeProps({
    key: 0,
    "class": _ctx.cx("start")
  }, _ctx.ptm("start")), [renderSlot(_ctx.$slots, "start")], 16)) : createCommentVNode("", true), renderSlot(_ctx.$slots, _ctx.$slots.button ? "button" : "menubutton", {
    id: $data.id,
    "class": normalizeClass(_ctx.cx("button")),
    toggleCallback: /* @__PURE__ */ __name(function toggleCallback(event) {
      return $options.menuButtonClick(event);
    }, "toggleCallback")
  }, function() {
    var _ctx$$primevue$config;
    return [_ctx.model && _ctx.model.length > 0 ? (openBlock(), createElementBlock("a", mergeProps({
      key: 0,
      ref: "menubutton",
      role: "button",
      tabindex: "0",
      "class": _ctx.cx("button"),
      "aria-haspopup": _ctx.model.length && _ctx.model.length > 0 ? true : false,
      "aria-expanded": $data.mobileActive,
      "aria-controls": $data.id,
      "aria-label": (_ctx$$primevue$config = _ctx.$primevue.config.locale.aria) === null || _ctx$$primevue$config === void 0 ? void 0 : _ctx$$primevue$config.navigation,
      onClick: _cache[0] || (_cache[0] = function($event) {
        return $options.menuButtonClick($event);
      }),
      onKeydown: _cache[1] || (_cache[1] = function($event) {
        return $options.menuButtonKeydown($event);
      })
    }, _objectSpread(_objectSpread({}, _ctx.buttonProps), _ctx.ptm("button"))), [renderSlot(_ctx.$slots, _ctx.$slots.buttonicon ? "buttonicon" : "menubuttonicon", {}, function() {
      return [createVNode(_component_BarsIcon, normalizeProps(guardReactiveProps(_ctx.ptm("buttonicon"))), null, 16)];
    })], 16, _hoisted_1)) : createCommentVNode("", true)];
  }), createVNode(_component_MenubarSub, {
    ref: $options.menubarRef,
    id: $data.id + "_list",
    role: "menubar",
    items: $options.processedItems,
    templates: _ctx.$slots,
    root: true,
    mobileActive: $data.mobileActive,
    tabindex: "0",
    "aria-activedescendant": $data.focused ? $options.focusedItemId : void 0,
    menuId: $data.id,
    focusedItemId: $data.focused ? $options.focusedItemId : void 0,
    activeItemPath: $data.activeItemPath,
    level: 0,
    "aria-labelledby": _ctx.ariaLabelledby,
    "aria-label": _ctx.ariaLabel,
    pt: _ctx.pt,
    unstyled: _ctx.unstyled,
    onFocus: $options.onFocus,
    onBlur: $options.onBlur,
    onKeydown: $options.onKeyDown,
    onItemClick: $options.onItemClick,
    onItemMouseenter: $options.onItemMouseEnter,
    onItemMousemove: $options.onItemMouseMove
  }, null, 8, ["id", "items", "templates", "mobileActive", "aria-activedescendant", "menuId", "focusedItemId", "activeItemPath", "aria-labelledby", "aria-label", "pt", "unstyled", "onFocus", "onBlur", "onKeydown", "onItemClick", "onItemMouseenter", "onItemMousemove"]), _ctx.$slots.end ? (openBlock(), createElementBlock("div", mergeProps({
    key: 1,
    "class": _ctx.cx("end")
  }, _ctx.ptm("end")), [renderSlot(_ctx.$slots, "end")], 16)) : createCommentVNode("", true)], 16);
}
__name(render, "render");
script.render = render;
export {
  script$8 as a,
  script$6 as b,
  script$5 as c,
  script$3 as d,
  script as e,
  script$7 as s
};
//# sourceMappingURL=index-B-AC1E9c.js.map
