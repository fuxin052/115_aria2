// ==UserScript==
// @name         115pan_aria2
// @namespace    115pan_aria2
// @version      1.1.6
// @author       f
// @description  115文件导出到 Aria2
// @icon         https://115.com/web_icon.jpg
// @match        *://115.com/?ct=file*
// @connect      115.com
// @connect      192.168.50.44
// @connect      *
// @grant        GM.xmlHttpRequest
// @grant        GM.setValue
// @grant        GM.getValue
// @grant        unsafeWindow
// @grant        GM_addValueChangeListener
// @grant        GM_removeValueChangeListener
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_xmlhttpRequest
// @run-at       document-end
// ==/UserScript==

(e=>{const t=document.createElement("style");t.dataset.source="vite-plugin-monkey",t.innerText=e,document.head.appendChild(t)})(".bdp-button{position:absolute;right:200px;z-index:100;text-align:center;color:#fff;cursor:pointer;margin-right:8px}.bdp-button-text{font-size:12px;line-height:1}.bdp-setting{width:100%;font-size:16px;margin-top:12px}.bdp-setting td{height:36px;padding-right:10px;vertical-align:middle}.bdp-setting input{height:26px;vertical-align:middle;font-size:16px;color:#000;border:1px solid #000}.bdp-setting input[type=text]{width:100%}.bdp-setting button{margin-top:20px;width:100%;height:36px}.bdp-row{display:flex;justify-content:space-between}.failList{outline:1px solid red;font-size:12px}.failList>div{overflow:hidden;width:100%;white-space:nowrap;text-overflow:ellipsis}.failList>div:nth-child(2n){background-color:#0003}.bdp-buttons{display:flex}.bdp-buttons-close{flex:2 2 100%}.tcuLAu{left:80px}");

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var vite_plugin_monkey_599159e48f2f4 = function(exports) {
  var _a, _b;
  "use strict";
  var n, l$1, u$2, t, o$3, f$1 = {}, e$1 = [], c$1 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function s$1(n2, l2) {
    for (var u2 in l2)
      n2[u2] = l2[u2];
    return n2;
  }
  function a$1(n2) {
    var l2 = n2.parentNode;
    l2 && l2.removeChild(n2);
  }
  function h$2(l2, u2, i2) {
    var t2, o2, r2, f2 = {};
    for (r2 in u2)
      "key" == r2 ? t2 = u2[r2] : "ref" == r2 ? o2 = u2[r2] : f2[r2] = u2[r2];
    if (arguments.length > 2 && (f2.children = arguments.length > 3 ? n.call(arguments, 2) : i2), "function" == typeof l2 && null != l2.defaultProps)
      for (r2 in l2.defaultProps)
        void 0 === f2[r2] && (f2[r2] = l2.defaultProps[r2]);
    return v$1(l2, f2, t2, o2, null);
  }
  function v$1(n2, i2, t2, o2, r2) {
    var f2 = { type: n2, props: i2, key: t2, ref: o2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r2 ? ++u$2 : r2 };
    return null == r2 && null != l$1.vnode && l$1.vnode(f2), f2;
  }
  function p$1(n2) {
    return n2.children;
  }
  function d$2(n2, l2) {
    this.props = n2, this.context = l2;
  }
  function _$1(n2, l2) {
    if (null == l2)
      return n2.__ ? _$1(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
    for (var u2; l2 < n2.__k.length; l2++)
      if (null != (u2 = n2.__k[l2]) && null != u2.__e)
        return u2.__e;
    return "function" == typeof n2.type ? _$1(n2) : null;
  }
  function k$1(n2) {
    var l2, u2;
    if (null != (n2 = n2.__) && null != n2.__c) {
      for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++)
        if (null != (u2 = n2.__k[l2]) && null != u2.__e) {
          n2.__e = n2.__c.base = u2.__e;
          break;
        }
      return k$1(n2);
    }
  }
  function b$1(n2) {
    (!n2.__d && (n2.__d = true) && t.push(n2) && !g$2.__r++ || o$3 !== l$1.debounceRendering) && ((o$3 = l$1.debounceRendering) || setTimeout)(g$2);
  }
  function g$2() {
    for (var n2; g$2.__r = t.length; )
      n2 = t.sort(function(n3, l2) {
        return n3.__v.__b - l2.__v.__b;
      }), t = [], n2.some(function(n3) {
        var l2, u2, i2, t2, o2, r2;
        n3.__d && (o2 = (t2 = (l2 = n3).__v).__e, (r2 = l2.__P) && (u2 = [], (i2 = s$1({}, t2)).__v = t2.__v + 1, j$2(r2, t2, i2, l2.__n, void 0 !== r2.ownerSVGElement, null != t2.__h ? [o2] : null, u2, null == o2 ? _$1(t2) : o2, t2.__h), z$2(u2, t2), t2.__e != o2 && k$1(t2)));
      });
  }
  function w$2(n2, l2, u2, i2, t2, o2, r2, c2, s2, a2) {
    var h2, y2, d2, k2, b2, g2, w2, x2 = i2 && i2.__k || e$1, C2 = x2.length;
    for (u2.__k = [], h2 = 0; h2 < l2.length; h2++)
      if (null != (k2 = u2.__k[h2] = null == (k2 = l2[h2]) || "boolean" == typeof k2 ? null : "string" == typeof k2 || "number" == typeof k2 || "bigint" == typeof k2 ? v$1(null, k2, null, null, k2) : Array.isArray(k2) ? v$1(p$1, { children: k2 }, null, null, null) : k2.__b > 0 ? v$1(k2.type, k2.props, k2.key, k2.ref ? k2.ref : null, k2.__v) : k2)) {
        if (k2.__ = u2, k2.__b = u2.__b + 1, null === (d2 = x2[h2]) || d2 && k2.key == d2.key && k2.type === d2.type)
          x2[h2] = void 0;
        else
          for (y2 = 0; y2 < C2; y2++) {
            if ((d2 = x2[y2]) && k2.key == d2.key && k2.type === d2.type) {
              x2[y2] = void 0;
              break;
            }
            d2 = null;
          }
        j$2(n2, k2, d2 = d2 || f$1, t2, o2, r2, c2, s2, a2), b2 = k2.__e, (y2 = k2.ref) && d2.ref != y2 && (w2 || (w2 = []), d2.ref && w2.push(d2.ref, null, k2), w2.push(y2, k2.__c || b2, k2)), null != b2 ? (null == g2 && (g2 = b2), "function" == typeof k2.type && k2.__k === d2.__k ? k2.__d = s2 = m$1(k2, s2, n2) : s2 = A$1(n2, k2, d2, x2, b2, s2), "function" == typeof u2.type && (u2.__d = s2)) : s2 && d2.__e == s2 && s2.parentNode != n2 && (s2 = _$1(d2));
      }
    for (u2.__e = g2, h2 = C2; h2--; )
      null != x2[h2] && ("function" == typeof u2.type && null != x2[h2].__e && x2[h2].__e == u2.__d && (u2.__d = _$1(i2, h2 + 1)), N(x2[h2], x2[h2]));
    if (w2)
      for (h2 = 0; h2 < w2.length; h2++)
        M$1(w2[h2], w2[++h2], w2[++h2]);
  }
  function m$1(n2, l2, u2) {
    for (var i2, t2 = n2.__k, o2 = 0; t2 && o2 < t2.length; o2++)
      (i2 = t2[o2]) && (i2.__ = n2, l2 = "function" == typeof i2.type ? m$1(i2, l2, u2) : A$1(u2, i2, i2, t2, i2.__e, l2));
    return l2;
  }
  function x(n2, l2) {
    return l2 = l2 || [], null == n2 || "boolean" == typeof n2 || (Array.isArray(n2) ? n2.some(function(n3) {
      x(n3, l2);
    }) : l2.push(n2)), l2;
  }
  function A$1(n2, l2, u2, i2, t2, o2) {
    var r2, f2, e2;
    if (void 0 !== l2.__d)
      r2 = l2.__d, l2.__d = void 0;
    else if (null == u2 || t2 != o2 || null == t2.parentNode)
      n:
        if (null == o2 || o2.parentNode !== n2)
          n2.appendChild(t2), r2 = null;
        else {
          for (f2 = o2, e2 = 0; (f2 = f2.nextSibling) && e2 < i2.length; e2 += 2)
            if (f2 == t2)
              break n;
          n2.insertBefore(t2, o2), r2 = o2;
        }
    return void 0 !== r2 ? r2 : t2.nextSibling;
  }
  function C$2(n2, l2, u2, i2, t2) {
    var o2;
    for (o2 in u2)
      "children" === o2 || "key" === o2 || o2 in l2 || H$1(n2, o2, null, u2[o2], i2);
    for (o2 in l2)
      t2 && "function" != typeof l2[o2] || "children" === o2 || "key" === o2 || "value" === o2 || "checked" === o2 || u2[o2] === l2[o2] || H$1(n2, o2, l2[o2], u2[o2], i2);
  }
  function $$1(n2, l2, u2) {
    "-" === l2[0] ? n2.setProperty(l2, u2) : n2[l2] = null == u2 ? "" : "number" != typeof u2 || c$1.test(l2) ? u2 : u2 + "px";
  }
  function H$1(n2, l2, u2, i2, t2) {
    var o2;
    n:
      if ("style" === l2)
        if ("string" == typeof u2)
          n2.style.cssText = u2;
        else {
          if ("string" == typeof i2 && (n2.style.cssText = i2 = ""), i2)
            for (l2 in i2)
              u2 && l2 in u2 || $$1(n2.style, l2, "");
          if (u2)
            for (l2 in u2)
              i2 && u2[l2] === i2[l2] || $$1(n2.style, l2, u2[l2]);
        }
      else if ("o" === l2[0] && "n" === l2[1])
        o2 = l2 !== (l2 = l2.replace(/Capture$/, "")), l2 = l2.toLowerCase() in n2 ? l2.toLowerCase().slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + o2] = u2, u2 ? i2 || n2.addEventListener(l2, o2 ? T$2 : I$1, o2) : n2.removeEventListener(l2, o2 ? T$2 : I$1, o2);
      else if ("dangerouslySetInnerHTML" !== l2) {
        if (t2)
          l2 = l2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("href" !== l2 && "list" !== l2 && "form" !== l2 && "tabIndex" !== l2 && "download" !== l2 && l2 in n2)
          try {
            n2[l2] = null == u2 ? "" : u2;
            break n;
          } catch (n3) {
          }
        "function" == typeof u2 || (null != u2 && (false !== u2 || "a" === l2[0] && "r" === l2[1]) ? n2.setAttribute(l2, u2) : n2.removeAttribute(l2));
      }
  }
  function I$1(n2) {
    this.l[n2.type + false](l$1.event ? l$1.event(n2) : n2);
  }
  function T$2(n2) {
    this.l[n2.type + true](l$1.event ? l$1.event(n2) : n2);
  }
  function j$2(n2, u2, i2, t2, o2, r2, f2, e2, c2) {
    var a2, h2, v2, y2, _2, k2, b2, g2, m2, x2, A2, C2, $2, H2 = u2.type;
    if (void 0 !== u2.constructor)
      return null;
    null != i2.__h && (c2 = i2.__h, e2 = u2.__e = i2.__e, u2.__h = null, r2 = [e2]), (a2 = l$1.__b) && a2(u2);
    try {
      n:
        if ("function" == typeof H2) {
          if (g2 = u2.props, m2 = (a2 = H2.contextType) && t2[a2.__c], x2 = a2 ? m2 ? m2.props.value : a2.__ : t2, i2.__c ? b2 = (h2 = u2.__c = i2.__c).__ = h2.__E : ("prototype" in H2 && H2.prototype.render ? u2.__c = h2 = new H2(g2, x2) : (u2.__c = h2 = new d$2(g2, x2), h2.constructor = H2, h2.render = O$1), m2 && m2.sub(h2), h2.props = g2, h2.state || (h2.state = {}), h2.context = x2, h2.__n = t2, v2 = h2.__d = true, h2.__h = []), null == h2.__s && (h2.__s = h2.state), null != H2.getDerivedStateFromProps && (h2.__s == h2.state && (h2.__s = s$1({}, h2.__s)), s$1(h2.__s, H2.getDerivedStateFromProps(g2, h2.__s))), y2 = h2.props, _2 = h2.state, v2)
            null == H2.getDerivedStateFromProps && null != h2.componentWillMount && h2.componentWillMount(), null != h2.componentDidMount && h2.__h.push(h2.componentDidMount);
          else {
            if (null == H2.getDerivedStateFromProps && g2 !== y2 && null != h2.componentWillReceiveProps && h2.componentWillReceiveProps(g2, x2), !h2.__e && null != h2.shouldComponentUpdate && false === h2.shouldComponentUpdate(g2, h2.__s, x2) || u2.__v === i2.__v) {
              h2.props = g2, h2.state = h2.__s, u2.__v !== i2.__v && (h2.__d = false), h2.__v = u2, u2.__e = i2.__e, u2.__k = i2.__k, u2.__k.forEach(function(n3) {
                n3 && (n3.__ = u2);
              }), h2.__h.length && f2.push(h2);
              break n;
            }
            null != h2.componentWillUpdate && h2.componentWillUpdate(g2, h2.__s, x2), null != h2.componentDidUpdate && h2.__h.push(function() {
              h2.componentDidUpdate(y2, _2, k2);
            });
          }
          if (h2.context = x2, h2.props = g2, h2.__v = u2, h2.__P = n2, A2 = l$1.__r, C2 = 0, "prototype" in H2 && H2.prototype.render)
            h2.state = h2.__s, h2.__d = false, A2 && A2(u2), a2 = h2.render(h2.props, h2.state, h2.context);
          else
            do {
              h2.__d = false, A2 && A2(u2), a2 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s;
            } while (h2.__d && ++C2 < 25);
          h2.state = h2.__s, null != h2.getChildContext && (t2 = s$1(s$1({}, t2), h2.getChildContext())), v2 || null == h2.getSnapshotBeforeUpdate || (k2 = h2.getSnapshotBeforeUpdate(y2, _2)), $2 = null != a2 && a2.type === p$1 && null == a2.key ? a2.props.children : a2, w$2(n2, Array.isArray($2) ? $2 : [$2], u2, i2, t2, o2, r2, f2, e2, c2), h2.base = u2.__e, u2.__h = null, h2.__h.length && f2.push(h2), b2 && (h2.__E = h2.__ = null), h2.__e = false;
        } else
          null == r2 && u2.__v === i2.__v ? (u2.__k = i2.__k, u2.__e = i2.__e) : u2.__e = L$1(i2.__e, u2, i2, t2, o2, r2, f2, c2);
      (a2 = l$1.diffed) && a2(u2);
    } catch (n3) {
      u2.__v = null, (c2 || null != r2) && (u2.__e = e2, u2.__h = !!c2, r2[r2.indexOf(e2)] = null), l$1.__e(n3, u2, i2);
    }
  }
  function z$2(n2, u2) {
    l$1.__c && l$1.__c(u2, n2), n2.some(function(u3) {
      try {
        n2 = u3.__h, u3.__h = [], n2.some(function(n3) {
          n3.call(u3);
        });
      } catch (n3) {
        l$1.__e(n3, u3.__v);
      }
    });
  }
  function L$1(l2, u2, i2, t2, o2, r2, e2, c2) {
    var s2, h2, v2, y2 = i2.props, p2 = u2.props, d2 = u2.type, k2 = 0;
    if ("svg" === d2 && (o2 = true), null != r2) {
      for (; k2 < r2.length; k2++)
        if ((s2 = r2[k2]) && "setAttribute" in s2 == !!d2 && (d2 ? s2.localName === d2 : 3 === s2.nodeType)) {
          l2 = s2, r2[k2] = null;
          break;
        }
    }
    if (null == l2) {
      if (null === d2)
        return document.createTextNode(p2);
      l2 = o2 ? document.createElementNS("http://www.w3.org/2000/svg", d2) : document.createElement(d2, p2.is && p2), r2 = null, c2 = false;
    }
    if (null === d2)
      y2 === p2 || c2 && l2.data === p2 || (l2.data = p2);
    else {
      if (r2 = r2 && n.call(l2.childNodes), h2 = (y2 = i2.props || f$1).dangerouslySetInnerHTML, v2 = p2.dangerouslySetInnerHTML, !c2) {
        if (null != r2)
          for (y2 = {}, k2 = 0; k2 < l2.attributes.length; k2++)
            y2[l2.attributes[k2].name] = l2.attributes[k2].value;
        (v2 || h2) && (v2 && (h2 && v2.__html == h2.__html || v2.__html === l2.innerHTML) || (l2.innerHTML = v2 && v2.__html || ""));
      }
      if (C$2(l2, p2, y2, o2, c2), v2)
        u2.__k = [];
      else if (k2 = u2.props.children, w$2(l2, Array.isArray(k2) ? k2 : [k2], u2, i2, t2, o2 && "foreignObject" !== d2, r2, e2, r2 ? r2[0] : i2.__k && _$1(i2, 0), c2), null != r2)
        for (k2 = r2.length; k2--; )
          null != r2[k2] && a$1(r2[k2]);
      c2 || ("value" in p2 && void 0 !== (k2 = p2.value) && (k2 !== l2.value || "progress" === d2 && !k2 || "option" === d2 && k2 !== y2.value) && H$1(l2, "value", k2, y2.value, false), "checked" in p2 && void 0 !== (k2 = p2.checked) && k2 !== l2.checked && H$1(l2, "checked", k2, y2.checked, false));
    }
    return l2;
  }
  function M$1(n2, u2, i2) {
    try {
      "function" == typeof n2 ? n2(u2) : n2.current = u2;
    } catch (n3) {
      l$1.__e(n3, i2);
    }
  }
  function N(n2, u2, i2) {
    var t2, o2;
    if (l$1.unmount && l$1.unmount(n2), (t2 = n2.ref) && (t2.current && t2.current !== n2.__e || M$1(t2, null, u2)), null != (t2 = n2.__c)) {
      if (t2.componentWillUnmount)
        try {
          t2.componentWillUnmount();
        } catch (n3) {
          l$1.__e(n3, u2);
        }
      t2.base = t2.__P = null, n2.__c = void 0;
    }
    if (t2 = n2.__k)
      for (o2 = 0; o2 < t2.length; o2++)
        t2[o2] && N(t2[o2], u2, "function" != typeof n2.type);
    i2 || null == n2.__e || a$1(n2.__e), n2.__ = n2.__e = n2.__d = void 0;
  }
  function O$1(n2, l2, u2) {
    return this.constructor(n2, u2);
  }
  function P$1(u2, i2, t2) {
    var o2, r2, e2;
    l$1.__ && l$1.__(u2, i2), r2 = (o2 = "function" == typeof t2) ? null : t2 && t2.__k || i2.__k, e2 = [], j$2(i2, u2 = (!o2 && t2 || i2).__k = h$2(p$1, null, [u2]), r2 || f$1, f$1, void 0 !== i2.ownerSVGElement, !o2 && t2 ? [t2] : r2 ? null : i2.firstChild ? n.call(i2.childNodes) : null, e2, !o2 && t2 ? t2 : r2 ? r2.__e : i2.firstChild, o2), z$2(e2, u2);
  }
  n = e$1.slice, l$1 = { __e: function(n2, l2, u2, i2) {
    for (var t2, o2, r2; l2 = l2.__; )
      if ((t2 = l2.__c) && !t2.__)
        try {
          if ((o2 = t2.constructor) && null != o2.getDerivedStateFromError && (t2.setState(o2.getDerivedStateFromError(n2)), r2 = t2.__d), null != t2.componentDidCatch && (t2.componentDidCatch(n2, i2 || {}), r2 = t2.__d), r2)
            return t2.__E = t2;
        } catch (l3) {
          n2 = l3;
        }
    throw n2;
  } }, u$2 = 0, d$2.prototype.setState = function(n2, l2) {
    var u2;
    u2 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = s$1({}, this.state), "function" == typeof n2 && (n2 = n2(s$1({}, u2), this.props)), n2 && s$1(u2, n2), null != n2 && this.__v && (l2 && this.__h.push(l2), b$1(this));
  }, d$2.prototype.forceUpdate = function(n2) {
    this.__v && (this.__e = true, n2 && this.__h.push(n2), b$1(this));
  }, d$2.prototype.render = p$1, t = [], g$2.__r = 0;
  var r$1, u$1, i, o$2, f = 0, c = [], e = [], a = l$1.__b, v = l$1.__r, l = l$1.diffed, m = l$1.__c, d$1 = l$1.unmount;
  function p(t2, r2) {
    l$1.__h && l$1.__h(u$1, t2, f || r2), f = 0;
    var i2 = u$1.__H || (u$1.__H = { __: [], __h: [] });
    return t2 >= i2.__.length && i2.__.push({ __V: e }), i2.__[t2];
  }
  function y(n2) {
    return f = 1, h$1(C$1, n2);
  }
  function h$1(n2, t2, i2) {
    var o2 = p(r$1++, 2);
    if (o2.t = n2, !o2.__c && (o2.__ = [i2 ? i2(t2) : C$1(void 0, t2), function(n3) {
      var t3 = o2.__N ? o2.__N[0] : o2.__[0], r2 = o2.t(t3, n3);
      t3 !== r2 && (o2.__N = [r2, o2.__[1]], o2.__c.setState({}));
    }], o2.__c = u$1, !u$1.u)) {
      u$1.u = true;
      var f2 = u$1.shouldComponentUpdate;
      u$1.shouldComponentUpdate = function(n3, t3, r2) {
        if (!o2.__c.__H)
          return true;
        var u2 = o2.__c.__H.__.filter(function(n4) {
          return n4.__c;
        });
        if (u2.every(function(n4) {
          return !n4.__N;
        }))
          return !f2 || f2.call(this, n3, t3, r2);
        var i3 = false;
        return u2.forEach(function(n4) {
          if (n4.__N) {
            var t4 = n4.__[0];
            n4.__ = n4.__N, n4.__N = void 0, t4 !== n4.__[0] && (i3 = true);
          }
        }), !!i3 && (!f2 || f2.call(this, n3, t3, r2));
      };
    }
    return o2.__N || o2.__;
  }
  function s(t2, i2) {
    var o2 = p(r$1++, 3);
    !l$1.__s && B$1(o2.__H, i2) && (o2.__ = t2, o2.i = i2, u$1.__H.__h.push(o2));
  }
  function A(n2) {
    return f = 5, T$1(function() {
      return { current: n2 };
    }, []);
  }
  function T$1(n2, t2) {
    var u2 = p(r$1++, 7);
    return B$1(u2.__H, t2) ? (u2.__V = n2(), u2.i = t2, u2.__h = n2, u2.__V) : u2.__;
  }
  function q$1(n2, t2) {
    return f = 8, T$1(function() {
      return n2;
    }, t2);
  }
  function g$1() {
    for (var t2; t2 = c.shift(); )
      if (t2.__P && t2.__H)
        try {
          t2.__H.__h.forEach(w$1), t2.__H.__h.forEach(z$1), t2.__H.__h = [];
        } catch (r2) {
          t2.__H.__h = [], l$1.__e(r2, t2.__v);
        }
  }
  l$1.__b = function(n2) {
    "function" != typeof n2.type || n2.o || n2.type === p$1 ? n2.o || (n2.o = n2.__ && n2.__.o ? n2.__.o : "") : n2.o = (n2.__ && n2.__.o ? n2.__.o : "") + (n2.__ && n2.__.__k ? n2.__.__k.indexOf(n2) : 0), u$1 = null, a && a(n2);
  }, l$1.__r = function(n2) {
    v && v(n2), r$1 = 0;
    var t2 = (u$1 = n2.__c).__H;
    t2 && (i === u$1 ? (t2.__h = [], u$1.__h = [], t2.__.forEach(function(n3) {
      n3.__N && (n3.__ = n3.__N), n3.__V = e, n3.__N = n3.i = void 0;
    })) : (t2.__h.forEach(w$1), t2.__h.forEach(z$1), t2.__h = [])), i = u$1;
  }, l$1.diffed = function(t2) {
    l && l(t2);
    var r2 = t2.__c;
    r2 && r2.__H && (r2.__H.__h.length && (1 !== c.push(r2) && o$2 === l$1.requestAnimationFrame || ((o$2 = l$1.requestAnimationFrame) || k)(g$1)), r2.__H.__.forEach(function(n2) {
      n2.i && (n2.__H = n2.i), n2.__V !== e && (n2.__ = n2.__V), n2.i = void 0, n2.__V = e;
    })), i = u$1 = null;
  }, l$1.__c = function(t2, r2) {
    r2.some(function(t3) {
      try {
        t3.__h.forEach(w$1), t3.__h = t3.__h.filter(function(n2) {
          return !n2.__ || z$1(n2);
        });
      } catch (u2) {
        r2.some(function(n2) {
          n2.__h && (n2.__h = []);
        }), r2 = [], l$1.__e(u2, t3.__v);
      }
    }), m && m(t2, r2);
  }, l$1.unmount = function(t2) {
    d$1 && d$1(t2);
    var r2, u2 = t2.__c;
    u2 && u2.__H && (u2.__H.__.forEach(function(n2) {
      try {
        w$1(n2);
      } catch (n3) {
        r2 = n3;
      }
    }), u2.__H = void 0, r2 && l$1.__e(r2, u2.__v));
  };
  var j$1 = "function" == typeof requestAnimationFrame;
  function k(n2) {
    var t2, r2 = function() {
      clearTimeout(u2), j$1 && cancelAnimationFrame(t2), setTimeout(n2);
    }, u2 = setTimeout(r2, 100);
    j$1 && (t2 = requestAnimationFrame(r2));
  }
  function w$1(n2) {
    var t2 = u$1, r2 = n2.__c;
    "function" == typeof r2 && (n2.__c = void 0, r2()), u$1 = t2;
  }
  function z$1(n2) {
    var t2 = u$1;
    n2.__c = n2.__(), u$1 = t2;
  }
  function B$1(n2, t2) {
    return !n2 || n2.length !== t2.length || t2.some(function(t3, r2) {
      return t3 !== n2[r2];
    });
  }
  function C$1(n2, t2) {
    return "function" == typeof t2 ? t2(n2) : t2;
  }
  const app = "";
  var r = (_a = Reflect.get(document, "__monkeyWindow")) != null ? _a : window;
  r.GM;
  r.unsafeWindow = (_b = r.unsafeWindow) != null ? _b : window;
  r.unsafeWindow;
  r.GM_info;
  r.GM_cookie;
  var u = (...e2) => r.GM_setValue(...e2), o$1 = (...e2) => r.GM_addValueChangeListener(...e2), d = (...e2) => r.GM_removeValueChangeListener(...e2), b = (...e2) => r.GM_xmlhttpRequest(...e2), h = (...e2) => r.GM_getValue(...e2);
  const defaultSetting = {
    url: "http://127.0.0.1:6800/jsonrpc",
    token: "123456",
    dir: "",
    check: false,
    checkMin: "0",
    interval: "300",
    useSystemUserAgent: true,
    customUserAgent: navigator.userAgent
  };
  const waitTime = (t2) => {
    t2 = t2 || parseInt(getSetting().interval) || 300;
    return new Promise((r2) => setTimeout(r2, t2));
  };
  const updateInterval = (t2) => {
    t2 = t2.trim();
    let t22 = parseInt(t2);
    if (t22 !== t22)
      return;
    if (t22 < 300) {
      t22 = 100;
    }
    const t3 = t22.toString();
    saveSetting({
      ...getSetting(),
      interval: t3
    });
  };
  const xhrGet = (url, headers) => {
    return new Promise((resolve, reject) => {
      let requestObj = b({
        method: "GET",
        url,
        headers,
        responseType: "json",
        onload: (res) => {
          if (res.status === 204) {
            requestObj.abort();
          }
          resolve(res.response || res.responseText);
        },
        onerror: (err) => {
          reject(err);
        }
      });
    });
  };
  function getCookieFromHeader(params) {
    var _a2;
    var setCookieStrings = ((_a2 = params.match(/^.*$/gm)) == null ? void 0 : _a2.filter((c2) => c2.toLowerCase().startsWith("set-cookie"))) || [];
    for (let index2 = 0; index2 < setCookieStrings.length; index2++) {
      const setCookieStr = setCookieStrings[index2].replace(/^set-cookie:\s+/gi, "");
      const cookies = setCookieStr.replace(/expires=(.*?)GMT/g, "").split(", ");
      for (let j2 = 0; j2 < cookies.length; j2++) {
        const cookieStr = cookies[j2];
        if (cookieStr.toLowerCase().startsWith("acw_tc=")) {
          return cookieStr.replace(/\s?;.*$/, "");
        }
      }
    }
  }
  const xhrPost = (url, data, headers) => {
    if (Object.prototype.toString.call(data) === "[object Object]") {
      data = JSON.stringify(data);
    }
    return new Promise((resolve, reject) => {
      b({
        method: "POST",
        url,
        headers,
        data,
        responseType: "json",
        onload: (res) => {
          var cookie = getCookieFromHeader((res == null ? void 0 : res.responseHeaders) || "");
          var response = res.response || res.responseText;
          if (cookie) {
            u("115cookie", cookie);
            try {
              response.cookie = cookie;
            } catch (error) {
            }
          } else {
            response.cookie = h("115cookie", "");
          }
          if (res.status === 200) {
            resolve(response);
          } else {
            reject(res);
          }
        },
        onerror: (err) => {
          reject(err);
        }
      });
    });
  };
  const saveSetting = (data) => {
    const n2 = {};
    let key;
    for (key in defaultSetting) {
      if (Object.prototype.hasOwnProperty.call(defaultSetting, key)) {
        const element = defaultSetting[key];
        if (data[key] !== element || key === "customUserAgent") {
          n2[key] = data[key];
        }
      }
    }
    u("115aria2_config", JSON.stringify(n2));
  };
  const getSetting = () => {
    try {
      var data = JSON.parse(h("115aria2_config", ""));
      Object.keys(defaultSetting).forEach((o2) => {
        if (data[o2] == null) {
          data[o2] = defaultSetting[o2];
        }
      });
      return data;
    } catch (error) {
      return defaultSetting;
    }
  };
  const getUA = () => {
    const {
      useSystemUserAgent,
      customUserAgent
    } = getSetting();
    if (useSystemUserAgent)
      return navigator.userAgent;
    return customUserAgent || "";
  };
  function uuid() {
    var d2 = new Date().getTime();
    var uuid2 = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c2) {
      var r2 = (d2 + Math.random() * 16) % 16 | 0;
      d2 = Math.floor(d2 / 16);
      return (c2 === "x" ? r2 : r2 & 7 | 8).toString(16);
    });
    return uuid2;
  }
  class defer {
    constructor() {
      __publicField(this, "resolve", null);
      __publicField(this, "reject", null);
      __publicField(this, "id");
      __publicField(this, "promise");
      this.id = uuid();
      this.promise = new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
      });
      Object.freeze(this);
    }
  }
  class DownloadTool {
    constructor() {
      __publicField(this, "domain");
      __publicField(this, "token");
      __publicField(this, "dir");
      __publicField(this, "check");
      __publicField(this, "checkMin");
      const setting = getSetting();
      this.domain = setting.url;
      this.token = setting.token;
      this.dir = setting.dir;
      this.check = setting.check;
      this.checkMin = parseInt(setting.checkMin) || 0;
    }
    async sendToAria2(item) {
      var _filename = item.fileName;
      var filename = item.parent ? `${item.parent}/${_filename}` : _filename;
      const other = {
        dir: this.dir || void 0,
        out: filename,
        header: [`User-Agent: ${getUA()}`, `Referer: https://115.com/`]
      };
      let rpcData = {
        id: item.sha1 || String(Date.now()),
        jsonrpc: "2.0",
        method: "aria2.addUri",
        params: [[item.file_url], other]
      };
      if (this.check && item.file_size >= this.checkMin * 1024 * 1024) {
        other.checksum = `sha-1=${item.sha1}`;
      }
      if (this.token) {
        rpcData.params.unshift(`token:${this.token}`);
      }
      if (item.cookie) {
        other.header.push(`Cookie: ${item.cookie}`);
      }
      return xhrPost(this.domain, rpcData, {});
    }
  }
  function g(n2, t2) {
    for (var e2 in t2)
      n2[e2] = t2[e2];
    return n2;
  }
  function C(n2, t2) {
    for (var e2 in n2)
      if ("__source" !== e2 && !(e2 in t2))
        return true;
    for (var r2 in t2)
      if ("__source" !== r2 && n2[r2] !== t2[r2])
        return true;
    return false;
  }
  function E(n2) {
    this.props = n2;
  }
  function w(n2, e2) {
    function r2(n3) {
      var t2 = this.props.ref, r3 = t2 == n3.ref;
      return !r3 && t2 && (t2.call ? t2(null) : t2.current = null), e2 ? !e2(this.props, n3) || !r3 : C(this.props, n3);
    }
    function u2(e3) {
      return this.shouldComponentUpdate = r2, h$2(n2, e3);
    }
    return u2.displayName = "Memo(" + (n2.displayName || n2.name) + ")", u2.prototype.isReactComponent = true, u2.__f = true, u2;
  }
  (E.prototype = new d$2()).isPureReactComponent = true, E.prototype.shouldComponentUpdate = function(n2, t2) {
    return C(this.props, n2) || C(this.state, t2);
  };
  var R = l$1.__b;
  l$1.__b = function(n2) {
    n2.type && n2.type.__f && n2.ref && (n2.props.ref = n2.ref, n2.ref = null), R && R(n2);
  };
  var O = l$1.__e;
  l$1.__e = function(n2, t2, e2, r2) {
    if (n2.then) {
      for (var u2, o2 = t2; o2 = o2.__; )
        if ((u2 = o2.__c) && u2.__c)
          return null == t2.__e && (t2.__e = e2.__e, t2.__k = e2.__k), u2.__c(n2, t2);
    }
    O(n2, t2, e2, r2);
  };
  var T = l$1.unmount;
  function I(n2, t2, e2) {
    return n2 && (n2.__c && n2.__c.__H && (n2.__c.__H.__.forEach(function(n3) {
      "function" == typeof n3.__c && n3.__c();
    }), n2.__c.__H = null), null != (n2 = g({}, n2)).__c && (n2.__c.__P === e2 && (n2.__c.__P = t2), n2.__c = null), n2.__k = n2.__k && n2.__k.map(function(n3) {
      return I(n3, t2, e2);
    })), n2;
  }
  function L(n2, t2, e2) {
    return n2 && (n2.__v = null, n2.__k = n2.__k && n2.__k.map(function(n3) {
      return L(n3, t2, e2);
    }), n2.__c && n2.__c.__P === t2 && (n2.__e && e2.insertBefore(n2.__e, n2.__d), n2.__c.__e = true, n2.__c.__P = e2)), n2;
  }
  function U() {
    this.__u = 0, this.t = null, this.__b = null;
  }
  function D(n2) {
    var t2 = n2.__.__c;
    return t2 && t2.__a && t2.__a(n2);
  }
  function M() {
    this.u = null, this.o = null;
  }
  l$1.unmount = function(n2) {
    var t2 = n2.__c;
    t2 && t2.__R && t2.__R(), t2 && true === n2.__h && (n2.type = null), T && T(n2);
  }, (U.prototype = new d$2()).__c = function(n2, t2) {
    var e2 = t2.__c, r2 = this;
    null == r2.t && (r2.t = []), r2.t.push(e2);
    var u2 = D(r2.__v), o2 = false, i2 = function() {
      o2 || (o2 = true, e2.__R = null, u2 ? u2(l2) : l2());
    };
    e2.__R = i2;
    var l2 = function() {
      if (!--r2.__u) {
        if (r2.state.__a) {
          var n3 = r2.state.__a;
          r2.__v.__k[0] = L(n3, n3.__c.__P, n3.__c.__O);
        }
        var t3;
        for (r2.setState({ __a: r2.__b = null }); t3 = r2.t.pop(); )
          t3.forceUpdate();
      }
    }, c2 = true === t2.__h;
    r2.__u++ || c2 || r2.setState({ __a: r2.__b = r2.__v.__k[0] }), n2.then(i2, i2);
  }, U.prototype.componentWillUnmount = function() {
    this.t = [];
  }, U.prototype.render = function(n2, e2) {
    if (this.__b) {
      if (this.__v.__k) {
        var r2 = document.createElement("div"), o2 = this.__v.__k[0].__c;
        this.__v.__k[0] = I(this.__b, r2, o2.__O = o2.__P);
      }
      this.__b = null;
    }
    var i2 = e2.__a && h$2(p$1, null, n2.fallback);
    return i2 && (i2.__h = null), [h$2(p$1, null, e2.__a ? null : n2.children), i2];
  };
  var V = function(n2, t2, e2) {
    if (++e2[1] === e2[0] && n2.o.delete(t2), n2.props.revealOrder && ("t" !== n2.props.revealOrder[0] || !n2.o.size))
      for (e2 = n2.u; e2; ) {
        for (; e2.length > 3; )
          e2.pop()();
        if (e2[1] < e2[0])
          break;
        n2.u = e2 = e2[2];
      }
  };
  function W(n2) {
    return this.getChildContext = function() {
      return n2.context;
    }, n2.children;
  }
  function P(n2) {
    var e2 = this, r2 = n2.i;
    e2.componentWillUnmount = function() {
      P$1(null, e2.l), e2.l = null, e2.i = null;
    }, e2.i && e2.i !== r2 && e2.componentWillUnmount(), n2.__v ? (e2.l || (e2.i = r2, e2.l = { nodeType: 1, parentNode: r2, childNodes: [], appendChild: function(n3) {
      this.childNodes.push(n3), e2.i.appendChild(n3);
    }, insertBefore: function(n3, t2) {
      this.childNodes.push(n3), e2.i.appendChild(n3);
    }, removeChild: function(n3) {
      this.childNodes.splice(this.childNodes.indexOf(n3) >>> 1, 1), e2.i.removeChild(n3);
    } }), P$1(h$2(W, { context: e2.context }, n2.__v), e2.l)) : e2.l && e2.componentWillUnmount();
  }
  function $(n2, e2) {
    var r2 = h$2(P, { __v: n2, i: e2 });
    return r2.containerInfo = e2, r2;
  }
  (M.prototype = new d$2()).__a = function(n2) {
    var t2 = this, e2 = D(t2.__v), r2 = t2.o.get(n2);
    return r2[0]++, function(u2) {
      var o2 = function() {
        t2.props.revealOrder ? (r2.push(u2), V(t2, n2, r2)) : u2();
      };
      e2 ? e2(o2) : o2();
    };
  }, M.prototype.render = function(n2) {
    this.u = null, this.o = /* @__PURE__ */ new Map();
    var t2 = x(n2.children);
    n2.revealOrder && "b" === n2.revealOrder[0] && t2.reverse();
    for (var e2 = t2.length; e2--; )
      this.o.set(t2[e2], this.u = [1, 0, this.u]);
    return n2.children;
  }, M.prototype.componentDidUpdate = M.prototype.componentDidMount = function() {
    var n2 = this;
    this.o.forEach(function(t2, e2) {
      V(n2, e2, t2);
    });
  };
  var j = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103, z = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, B = "undefined" != typeof document, H = function(n2) {
    return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/i : /fil|che|ra/i).test(n2);
  };
  d$2.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t2) {
    Object.defineProperty(d$2.prototype, t2, { configurable: true, get: function() {
      return this["UNSAFE_" + t2];
    }, set: function(n2) {
      Object.defineProperty(this, t2, { configurable: true, writable: true, value: n2 });
    } });
  });
  var q = l$1.event;
  function G() {
  }
  function J() {
    return this.cancelBubble;
  }
  function K() {
    return this.defaultPrevented;
  }
  l$1.event = function(n2) {
    return q && (n2 = q(n2)), n2.persist = G, n2.isPropagationStopped = J, n2.isDefaultPrevented = K, n2.nativeEvent = n2;
  };
  var X = { configurable: true, get: function() {
    return this.class;
  } }, nn = l$1.vnode;
  l$1.vnode = function(n2) {
    var t2 = n2.type, e2 = n2.props, u2 = e2;
    if ("string" == typeof t2) {
      var o2 = -1 === t2.indexOf("-");
      for (var i2 in u2 = {}, e2) {
        var l2 = e2[i2];
        B && "children" === i2 && "noscript" === t2 || "value" === i2 && "defaultValue" in e2 && null == l2 || ("defaultValue" === i2 && "value" in e2 && null == e2.value ? i2 = "value" : "download" === i2 && true === l2 ? l2 = "" : /ondoubleclick/i.test(i2) ? i2 = "ondblclick" : /^onchange(textarea|input)/i.test(i2 + t2) && !H(e2.type) ? i2 = "oninput" : /^onfocus$/i.test(i2) ? i2 = "onfocusin" : /^onblur$/i.test(i2) ? i2 = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(i2) ? i2 = i2.toLowerCase() : o2 && z.test(i2) ? i2 = i2.replace(/[A-Z0-9]/g, "-$&").toLowerCase() : null === l2 && (l2 = void 0), /^oninput$/i.test(i2) && (i2 = i2.toLowerCase(), u2[i2] && (i2 = "oninputCapture")), u2[i2] = l2);
      }
      "select" == t2 && u2.multiple && Array.isArray(u2.value) && (u2.value = x(e2.children).forEach(function(n3) {
        n3.props.selected = -1 != u2.value.indexOf(n3.props.value);
      })), "select" == t2 && null != u2.defaultValue && (u2.value = x(e2.children).forEach(function(n3) {
        n3.props.selected = u2.multiple ? -1 != u2.defaultValue.indexOf(n3.props.value) : u2.defaultValue == n3.props.value;
      })), n2.props = u2, e2.class != e2.className && (X.enumerable = "className" in e2, null != e2.className && (u2.class = e2.className), Object.defineProperty(u2, "className", X));
    }
    n2.$$typeof = j, nn && nn(n2);
  };
  var tn = l$1.__r;
  l$1.__r = function(n2) {
    tn && tn(n2), n2.__c;
  };
  var _ = 0;
  function o(o2, e2, n2, t2, f2) {
    var l2, s2, u2 = {};
    for (s2 in e2)
      "ref" == s2 ? l2 = e2[s2] : u2[s2] = e2[s2];
    var a2 = { type: o2, props: u2, key: n2, ref: l2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --_, __source: f2, __self: t2 };
    if ("function" == typeof o2 && (l2 = o2.defaultProps))
      for (s2 in l2)
        void 0 === u2[s2] && (u2[s2] = l2[s2]);
    return l$1.vnode && l$1.vnode(a2), a2;
  }
  const Modal = ({
    children,
    onCloseClick,
    closeIcon,
    isOpen,
    hideClose = false,
    width = 600
  }) => {
    const [isStateOpen, setIsStateOpen] = y(isOpen);
    s(() => {
      setIsStateOpen(isOpen);
    }, [isOpen]);
    return isStateOpen ? $(o(p$1, {
      children: [o(Overlay, {}), o(Holder, {
        width,
        children: [hideClose ? null : o(Close, {
          onClick: onCloseClick,
          children: o("img", {
            src: closeIcon || DefaultCloseIcon,
            alt: "Close"
          })
        }), children]
      })]
    }), document.body) : null;
  };
  const DefaultCloseIcon = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="14" height="14"><path d="M444 387L312 255l132-130c5-5 5-14 0-19l-38-38c-2-2-6-4-9-4-4 0-8 2-10 4L256 198 125 68c-3-2-6-4-10-4s-7 2-10 4l-37 38c-5 5-5 14 0 20l132 130L68 387a14 14 0 000 20l38 37a14 14 0 0019 0l131-131 131 131a14 14 0 0019 0l38-37c2-3 4-6 4-10s-2-7-4-10z" fill="black"/></svg>`;
  const Overlay = () => o("div", {
    className: "overlay",
    style: {
      position: "fixed",
      left: 0,
      top: 0,
      width: "100%",
      height: "100%",
      background: "rgba(200,200,200,0.5)",
      zIndex: 101
    }
  });
  const Holder = ({
    children,
    width
  }) => o("div", {
    className: "holder",
    style: {
      position: "fixed",
      left: "50%",
      top: 100,
      width,
      transform: "translateX(-50%)",
      background: "#fff",
      borderRadius: 5,
      boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
      padding: 20,
      zIndex: 102
    },
    children
  });
  const Close = (props) => o("button", {
    style: {
      position: "absolute",
      cursor: "pointer",
      right: 0,
      top: 0,
      padding: "5px 10px",
      background: "#eee",
      border: 0
    },
    ...props
  });
  const Modal$1 = w(Modal);
  var eventemitter3 = { exports: {} };
  (function(module) {
    var has = Object.prototype.hasOwnProperty, prefix = "~";
    function Events() {
    }
    if (Object.create) {
      Events.prototype = /* @__PURE__ */ Object.create(null);
      if (!new Events().__proto__)
        prefix = false;
    }
    function EE(fn, context, once) {
      this.fn = fn;
      this.context = context;
      this.once = once || false;
    }
    function addListener(emitter, event, fn, context, once) {
      if (typeof fn !== "function") {
        throw new TypeError("The listener must be a function");
      }
      var listener = new EE(fn, context || emitter, once), evt = prefix ? prefix + event : event;
      if (!emitter._events[evt])
        emitter._events[evt] = listener, emitter._eventsCount++;
      else if (!emitter._events[evt].fn)
        emitter._events[evt].push(listener);
      else
        emitter._events[evt] = [emitter._events[evt], listener];
      return emitter;
    }
    function clearEvent(emitter, evt) {
      if (--emitter._eventsCount === 0)
        emitter._events = new Events();
      else
        delete emitter._events[evt];
    }
    function EventEmitter2() {
      this._events = new Events();
      this._eventsCount = 0;
    }
    EventEmitter2.prototype.eventNames = function eventNames() {
      var names = [], events, name;
      if (this._eventsCount === 0)
        return names;
      for (name in events = this._events) {
        if (has.call(events, name))
          names.push(prefix ? name.slice(1) : name);
      }
      if (Object.getOwnPropertySymbols) {
        return names.concat(Object.getOwnPropertySymbols(events));
      }
      return names;
    };
    EventEmitter2.prototype.listeners = function listeners(event) {
      var evt = prefix ? prefix + event : event, handlers = this._events[evt];
      if (!handlers)
        return [];
      if (handlers.fn)
        return [handlers.fn];
      for (var i2 = 0, l2 = handlers.length, ee = new Array(l2); i2 < l2; i2++) {
        ee[i2] = handlers[i2].fn;
      }
      return ee;
    };
    EventEmitter2.prototype.listenerCount = function listenerCount(event) {
      var evt = prefix ? prefix + event : event, listeners = this._events[evt];
      if (!listeners)
        return 0;
      if (listeners.fn)
        return 1;
      return listeners.length;
    };
    EventEmitter2.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt])
        return false;
      var listeners = this._events[evt], len = arguments.length, args, i2;
      if (listeners.fn) {
        if (listeners.once)
          this.removeListener(event, listeners.fn, void 0, true);
        switch (len) {
          case 1:
            return listeners.fn.call(listeners.context), true;
          case 2:
            return listeners.fn.call(listeners.context, a1), true;
          case 3:
            return listeners.fn.call(listeners.context, a1, a2), true;
          case 4:
            return listeners.fn.call(listeners.context, a1, a2, a3), true;
          case 5:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
          case 6:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
        }
        for (i2 = 1, args = new Array(len - 1); i2 < len; i2++) {
          args[i2 - 1] = arguments[i2];
        }
        listeners.fn.apply(listeners.context, args);
      } else {
        var length = listeners.length, j2;
        for (i2 = 0; i2 < length; i2++) {
          if (listeners[i2].once)
            this.removeListener(event, listeners[i2].fn, void 0, true);
          switch (len) {
            case 1:
              listeners[i2].fn.call(listeners[i2].context);
              break;
            case 2:
              listeners[i2].fn.call(listeners[i2].context, a1);
              break;
            case 3:
              listeners[i2].fn.call(listeners[i2].context, a1, a2);
              break;
            case 4:
              listeners[i2].fn.call(listeners[i2].context, a1, a2, a3);
              break;
            default:
              if (!args)
                for (j2 = 1, args = new Array(len - 1); j2 < len; j2++) {
                  args[j2 - 1] = arguments[j2];
                }
              listeners[i2].fn.apply(listeners[i2].context, args);
          }
        }
      }
      return true;
    };
    EventEmitter2.prototype.on = function on(event, fn, context) {
      return addListener(this, event, fn, context, false);
    };
    EventEmitter2.prototype.once = function once(event, fn, context) {
      return addListener(this, event, fn, context, true);
    };
    EventEmitter2.prototype.removeListener = function removeListener(event, fn, context, once) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt])
        return this;
      if (!fn) {
        clearEvent(this, evt);
        return this;
      }
      var listeners = this._events[evt];
      if (listeners.fn) {
        if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
          clearEvent(this, evt);
        }
      } else {
        for (var i2 = 0, events = [], length = listeners.length; i2 < length; i2++) {
          if (listeners[i2].fn !== fn || once && !listeners[i2].once || context && listeners[i2].context !== context) {
            events.push(listeners[i2]);
          }
        }
        if (events.length)
          this._events[evt] = events.length === 1 ? events[0] : events;
        else
          clearEvent(this, evt);
      }
      return this;
    };
    EventEmitter2.prototype.removeAllListeners = function removeAllListeners(event) {
      var evt;
      if (event) {
        evt = prefix ? prefix + event : event;
        if (this._events[evt])
          clearEvent(this, evt);
      } else {
        this._events = new Events();
        this._eventsCount = 0;
      }
      return this;
    };
    EventEmitter2.prototype.off = EventEmitter2.prototype.removeListener;
    EventEmitter2.prototype.addListener = EventEmitter2.prototype.on;
    EventEmitter2.prefixed = prefix;
    EventEmitter2.EventEmitter = EventEmitter2;
    {
      module.exports = EventEmitter2;
    }
  })(eventemitter3);
  const EventEmitter = eventemitter3.exports;
  var sparkMd5 = { exports: {} };
  (function(module, exports2) {
    (function(factory) {
      {
        module.exports = factory();
      }
    })(function(undefined$1) {
      var hex_chr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
      function md5cycle(x2, k2) {
        var a2 = x2[0], b2 = x2[1], c2 = x2[2], d2 = x2[3];
        a2 += (b2 & c2 | ~b2 & d2) + k2[0] - 680876936 | 0;
        a2 = (a2 << 7 | a2 >>> 25) + b2 | 0;
        d2 += (a2 & b2 | ~a2 & c2) + k2[1] - 389564586 | 0;
        d2 = (d2 << 12 | d2 >>> 20) + a2 | 0;
        c2 += (d2 & a2 | ~d2 & b2) + k2[2] + 606105819 | 0;
        c2 = (c2 << 17 | c2 >>> 15) + d2 | 0;
        b2 += (c2 & d2 | ~c2 & a2) + k2[3] - 1044525330 | 0;
        b2 = (b2 << 22 | b2 >>> 10) + c2 | 0;
        a2 += (b2 & c2 | ~b2 & d2) + k2[4] - 176418897 | 0;
        a2 = (a2 << 7 | a2 >>> 25) + b2 | 0;
        d2 += (a2 & b2 | ~a2 & c2) + k2[5] + 1200080426 | 0;
        d2 = (d2 << 12 | d2 >>> 20) + a2 | 0;
        c2 += (d2 & a2 | ~d2 & b2) + k2[6] - 1473231341 | 0;
        c2 = (c2 << 17 | c2 >>> 15) + d2 | 0;
        b2 += (c2 & d2 | ~c2 & a2) + k2[7] - 45705983 | 0;
        b2 = (b2 << 22 | b2 >>> 10) + c2 | 0;
        a2 += (b2 & c2 | ~b2 & d2) + k2[8] + 1770035416 | 0;
        a2 = (a2 << 7 | a2 >>> 25) + b2 | 0;
        d2 += (a2 & b2 | ~a2 & c2) + k2[9] - 1958414417 | 0;
        d2 = (d2 << 12 | d2 >>> 20) + a2 | 0;
        c2 += (d2 & a2 | ~d2 & b2) + k2[10] - 42063 | 0;
        c2 = (c2 << 17 | c2 >>> 15) + d2 | 0;
        b2 += (c2 & d2 | ~c2 & a2) + k2[11] - 1990404162 | 0;
        b2 = (b2 << 22 | b2 >>> 10) + c2 | 0;
        a2 += (b2 & c2 | ~b2 & d2) + k2[12] + 1804603682 | 0;
        a2 = (a2 << 7 | a2 >>> 25) + b2 | 0;
        d2 += (a2 & b2 | ~a2 & c2) + k2[13] - 40341101 | 0;
        d2 = (d2 << 12 | d2 >>> 20) + a2 | 0;
        c2 += (d2 & a2 | ~d2 & b2) + k2[14] - 1502002290 | 0;
        c2 = (c2 << 17 | c2 >>> 15) + d2 | 0;
        b2 += (c2 & d2 | ~c2 & a2) + k2[15] + 1236535329 | 0;
        b2 = (b2 << 22 | b2 >>> 10) + c2 | 0;
        a2 += (b2 & d2 | c2 & ~d2) + k2[1] - 165796510 | 0;
        a2 = (a2 << 5 | a2 >>> 27) + b2 | 0;
        d2 += (a2 & c2 | b2 & ~c2) + k2[6] - 1069501632 | 0;
        d2 = (d2 << 9 | d2 >>> 23) + a2 | 0;
        c2 += (d2 & b2 | a2 & ~b2) + k2[11] + 643717713 | 0;
        c2 = (c2 << 14 | c2 >>> 18) + d2 | 0;
        b2 += (c2 & a2 | d2 & ~a2) + k2[0] - 373897302 | 0;
        b2 = (b2 << 20 | b2 >>> 12) + c2 | 0;
        a2 += (b2 & d2 | c2 & ~d2) + k2[5] - 701558691 | 0;
        a2 = (a2 << 5 | a2 >>> 27) + b2 | 0;
        d2 += (a2 & c2 | b2 & ~c2) + k2[10] + 38016083 | 0;
        d2 = (d2 << 9 | d2 >>> 23) + a2 | 0;
        c2 += (d2 & b2 | a2 & ~b2) + k2[15] - 660478335 | 0;
        c2 = (c2 << 14 | c2 >>> 18) + d2 | 0;
        b2 += (c2 & a2 | d2 & ~a2) + k2[4] - 405537848 | 0;
        b2 = (b2 << 20 | b2 >>> 12) + c2 | 0;
        a2 += (b2 & d2 | c2 & ~d2) + k2[9] + 568446438 | 0;
        a2 = (a2 << 5 | a2 >>> 27) + b2 | 0;
        d2 += (a2 & c2 | b2 & ~c2) + k2[14] - 1019803690 | 0;
        d2 = (d2 << 9 | d2 >>> 23) + a2 | 0;
        c2 += (d2 & b2 | a2 & ~b2) + k2[3] - 187363961 | 0;
        c2 = (c2 << 14 | c2 >>> 18) + d2 | 0;
        b2 += (c2 & a2 | d2 & ~a2) + k2[8] + 1163531501 | 0;
        b2 = (b2 << 20 | b2 >>> 12) + c2 | 0;
        a2 += (b2 & d2 | c2 & ~d2) + k2[13] - 1444681467 | 0;
        a2 = (a2 << 5 | a2 >>> 27) + b2 | 0;
        d2 += (a2 & c2 | b2 & ~c2) + k2[2] - 51403784 | 0;
        d2 = (d2 << 9 | d2 >>> 23) + a2 | 0;
        c2 += (d2 & b2 | a2 & ~b2) + k2[7] + 1735328473 | 0;
        c2 = (c2 << 14 | c2 >>> 18) + d2 | 0;
        b2 += (c2 & a2 | d2 & ~a2) + k2[12] - 1926607734 | 0;
        b2 = (b2 << 20 | b2 >>> 12) + c2 | 0;
        a2 += (b2 ^ c2 ^ d2) + k2[5] - 378558 | 0;
        a2 = (a2 << 4 | a2 >>> 28) + b2 | 0;
        d2 += (a2 ^ b2 ^ c2) + k2[8] - 2022574463 | 0;
        d2 = (d2 << 11 | d2 >>> 21) + a2 | 0;
        c2 += (d2 ^ a2 ^ b2) + k2[11] + 1839030562 | 0;
        c2 = (c2 << 16 | c2 >>> 16) + d2 | 0;
        b2 += (c2 ^ d2 ^ a2) + k2[14] - 35309556 | 0;
        b2 = (b2 << 23 | b2 >>> 9) + c2 | 0;
        a2 += (b2 ^ c2 ^ d2) + k2[1] - 1530992060 | 0;
        a2 = (a2 << 4 | a2 >>> 28) + b2 | 0;
        d2 += (a2 ^ b2 ^ c2) + k2[4] + 1272893353 | 0;
        d2 = (d2 << 11 | d2 >>> 21) + a2 | 0;
        c2 += (d2 ^ a2 ^ b2) + k2[7] - 155497632 | 0;
        c2 = (c2 << 16 | c2 >>> 16) + d2 | 0;
        b2 += (c2 ^ d2 ^ a2) + k2[10] - 1094730640 | 0;
        b2 = (b2 << 23 | b2 >>> 9) + c2 | 0;
        a2 += (b2 ^ c2 ^ d2) + k2[13] + 681279174 | 0;
        a2 = (a2 << 4 | a2 >>> 28) + b2 | 0;
        d2 += (a2 ^ b2 ^ c2) + k2[0] - 358537222 | 0;
        d2 = (d2 << 11 | d2 >>> 21) + a2 | 0;
        c2 += (d2 ^ a2 ^ b2) + k2[3] - 722521979 | 0;
        c2 = (c2 << 16 | c2 >>> 16) + d2 | 0;
        b2 += (c2 ^ d2 ^ a2) + k2[6] + 76029189 | 0;
        b2 = (b2 << 23 | b2 >>> 9) + c2 | 0;
        a2 += (b2 ^ c2 ^ d2) + k2[9] - 640364487 | 0;
        a2 = (a2 << 4 | a2 >>> 28) + b2 | 0;
        d2 += (a2 ^ b2 ^ c2) + k2[12] - 421815835 | 0;
        d2 = (d2 << 11 | d2 >>> 21) + a2 | 0;
        c2 += (d2 ^ a2 ^ b2) + k2[15] + 530742520 | 0;
        c2 = (c2 << 16 | c2 >>> 16) + d2 | 0;
        b2 += (c2 ^ d2 ^ a2) + k2[2] - 995338651 | 0;
        b2 = (b2 << 23 | b2 >>> 9) + c2 | 0;
        a2 += (c2 ^ (b2 | ~d2)) + k2[0] - 198630844 | 0;
        a2 = (a2 << 6 | a2 >>> 26) + b2 | 0;
        d2 += (b2 ^ (a2 | ~c2)) + k2[7] + 1126891415 | 0;
        d2 = (d2 << 10 | d2 >>> 22) + a2 | 0;
        c2 += (a2 ^ (d2 | ~b2)) + k2[14] - 1416354905 | 0;
        c2 = (c2 << 15 | c2 >>> 17) + d2 | 0;
        b2 += (d2 ^ (c2 | ~a2)) + k2[5] - 57434055 | 0;
        b2 = (b2 << 21 | b2 >>> 11) + c2 | 0;
        a2 += (c2 ^ (b2 | ~d2)) + k2[12] + 1700485571 | 0;
        a2 = (a2 << 6 | a2 >>> 26) + b2 | 0;
        d2 += (b2 ^ (a2 | ~c2)) + k2[3] - 1894986606 | 0;
        d2 = (d2 << 10 | d2 >>> 22) + a2 | 0;
        c2 += (a2 ^ (d2 | ~b2)) + k2[10] - 1051523 | 0;
        c2 = (c2 << 15 | c2 >>> 17) + d2 | 0;
        b2 += (d2 ^ (c2 | ~a2)) + k2[1] - 2054922799 | 0;
        b2 = (b2 << 21 | b2 >>> 11) + c2 | 0;
        a2 += (c2 ^ (b2 | ~d2)) + k2[8] + 1873313359 | 0;
        a2 = (a2 << 6 | a2 >>> 26) + b2 | 0;
        d2 += (b2 ^ (a2 | ~c2)) + k2[15] - 30611744 | 0;
        d2 = (d2 << 10 | d2 >>> 22) + a2 | 0;
        c2 += (a2 ^ (d2 | ~b2)) + k2[6] - 1560198380 | 0;
        c2 = (c2 << 15 | c2 >>> 17) + d2 | 0;
        b2 += (d2 ^ (c2 | ~a2)) + k2[13] + 1309151649 | 0;
        b2 = (b2 << 21 | b2 >>> 11) + c2 | 0;
        a2 += (c2 ^ (b2 | ~d2)) + k2[4] - 145523070 | 0;
        a2 = (a2 << 6 | a2 >>> 26) + b2 | 0;
        d2 += (b2 ^ (a2 | ~c2)) + k2[11] - 1120210379 | 0;
        d2 = (d2 << 10 | d2 >>> 22) + a2 | 0;
        c2 += (a2 ^ (d2 | ~b2)) + k2[2] + 718787259 | 0;
        c2 = (c2 << 15 | c2 >>> 17) + d2 | 0;
        b2 += (d2 ^ (c2 | ~a2)) + k2[9] - 343485551 | 0;
        b2 = (b2 << 21 | b2 >>> 11) + c2 | 0;
        x2[0] = a2 + x2[0] | 0;
        x2[1] = b2 + x2[1] | 0;
        x2[2] = c2 + x2[2] | 0;
        x2[3] = d2 + x2[3] | 0;
      }
      function md5blk(s2) {
        var md5blks = [], i2;
        for (i2 = 0; i2 < 64; i2 += 4) {
          md5blks[i2 >> 2] = s2.charCodeAt(i2) + (s2.charCodeAt(i2 + 1) << 8) + (s2.charCodeAt(i2 + 2) << 16) + (s2.charCodeAt(i2 + 3) << 24);
        }
        return md5blks;
      }
      function md5blk_array(a2) {
        var md5blks = [], i2;
        for (i2 = 0; i2 < 64; i2 += 4) {
          md5blks[i2 >> 2] = a2[i2] + (a2[i2 + 1] << 8) + (a2[i2 + 2] << 16) + (a2[i2 + 3] << 24);
        }
        return md5blks;
      }
      function md51(s2) {
        var n2 = s2.length, state = [1732584193, -271733879, -1732584194, 271733878], i2, length, tail, tmp, lo, hi;
        for (i2 = 64; i2 <= n2; i2 += 64) {
          md5cycle(state, md5blk(s2.substring(i2 - 64, i2)));
        }
        s2 = s2.substring(i2 - 64);
        length = s2.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i2 = 0; i2 < length; i2 += 1) {
          tail[i2 >> 2] |= s2.charCodeAt(i2) << (i2 % 4 << 3);
        }
        tail[i2 >> 2] |= 128 << (i2 % 4 << 3);
        if (i2 > 55) {
          md5cycle(state, tail);
          for (i2 = 0; i2 < 16; i2 += 1) {
            tail[i2] = 0;
          }
        }
        tmp = n2 * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
      }
      function md51_array(a2) {
        var n2 = a2.length, state = [1732584193, -271733879, -1732584194, 271733878], i2, length, tail, tmp, lo, hi;
        for (i2 = 64; i2 <= n2; i2 += 64) {
          md5cycle(state, md5blk_array(a2.subarray(i2 - 64, i2)));
        }
        a2 = i2 - 64 < n2 ? a2.subarray(i2 - 64) : new Uint8Array(0);
        length = a2.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i2 = 0; i2 < length; i2 += 1) {
          tail[i2 >> 2] |= a2[i2] << (i2 % 4 << 3);
        }
        tail[i2 >> 2] |= 128 << (i2 % 4 << 3);
        if (i2 > 55) {
          md5cycle(state, tail);
          for (i2 = 0; i2 < 16; i2 += 1) {
            tail[i2] = 0;
          }
        }
        tmp = n2 * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
      }
      function rhex(n2) {
        var s2 = "", j2;
        for (j2 = 0; j2 < 4; j2 += 1) {
          s2 += hex_chr[n2 >> j2 * 8 + 4 & 15] + hex_chr[n2 >> j2 * 8 & 15];
        }
        return s2;
      }
      function hex(x2) {
        var i2;
        for (i2 = 0; i2 < x2.length; i2 += 1) {
          x2[i2] = rhex(x2[i2]);
        }
        return x2.join("");
      }
      if (hex(md51("hello")) !== "5d41402abc4b2a76b9719d911017c592")
        ;
      if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) {
        (function() {
          function clamp(val, length) {
            val = val | 0 || 0;
            if (val < 0) {
              return Math.max(val + length, 0);
            }
            return Math.min(val, length);
          }
          ArrayBuffer.prototype.slice = function(from, to) {
            var length = this.byteLength, begin = clamp(from, length), end = length, num, target, targetArray, sourceArray;
            if (to !== undefined$1) {
              end = clamp(to, length);
            }
            if (begin > end) {
              return new ArrayBuffer(0);
            }
            num = end - begin;
            target = new ArrayBuffer(num);
            targetArray = new Uint8Array(target);
            sourceArray = new Uint8Array(this, begin, num);
            targetArray.set(sourceArray);
            return target;
          };
        })();
      }
      function toUtf8(str) {
        if (/[\u0080-\uFFFF]/.test(str)) {
          str = unescape(encodeURIComponent(str));
        }
        return str;
      }
      function utf8Str2ArrayBuffer(str, returnUInt8Array) {
        var length = str.length, buff = new ArrayBuffer(length), arr = new Uint8Array(buff), i2;
        for (i2 = 0; i2 < length; i2 += 1) {
          arr[i2] = str.charCodeAt(i2);
        }
        return returnUInt8Array ? arr : buff;
      }
      function arrayBuffer2Utf8Str(buff) {
        return String.fromCharCode.apply(null, new Uint8Array(buff));
      }
      function concatenateArrayBuffers(first, second, returnUInt8Array) {
        var result = new Uint8Array(first.byteLength + second.byteLength);
        result.set(new Uint8Array(first));
        result.set(new Uint8Array(second), first.byteLength);
        return returnUInt8Array ? result : result.buffer;
      }
      function hexToBinaryString(hex2) {
        var bytes = [], length = hex2.length, x2;
        for (x2 = 0; x2 < length - 1; x2 += 2) {
          bytes.push(parseInt(hex2.substr(x2, 2), 16));
        }
        return String.fromCharCode.apply(String, bytes);
      }
      function SparkMD52() {
        this.reset();
      }
      SparkMD52.prototype.append = function(str) {
        this.appendBinary(toUtf8(str));
        return this;
      };
      SparkMD52.prototype.appendBinary = function(contents) {
        this._buff += contents;
        this._length += contents.length;
        var length = this._buff.length, i2;
        for (i2 = 64; i2 <= length; i2 += 64) {
          md5cycle(this._hash, md5blk(this._buff.substring(i2 - 64, i2)));
        }
        this._buff = this._buff.substring(i2 - 64);
        return this;
      };
      SparkMD52.prototype.end = function(raw) {
        var buff = this._buff, length = buff.length, i2, tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ret;
        for (i2 = 0; i2 < length; i2 += 1) {
          tail[i2 >> 2] |= buff.charCodeAt(i2) << (i2 % 4 << 3);
        }
        this._finish(tail, length);
        ret = hex(this._hash);
        if (raw) {
          ret = hexToBinaryString(ret);
        }
        this.reset();
        return ret;
      };
      SparkMD52.prototype.reset = function() {
        this._buff = "";
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      };
      SparkMD52.prototype.getState = function() {
        return {
          buff: this._buff,
          length: this._length,
          hash: this._hash.slice()
        };
      };
      SparkMD52.prototype.setState = function(state) {
        this._buff = state.buff;
        this._length = state.length;
        this._hash = state.hash;
        return this;
      };
      SparkMD52.prototype.destroy = function() {
        delete this._hash;
        delete this._buff;
        delete this._length;
      };
      SparkMD52.prototype._finish = function(tail, length) {
        var i2 = length, tmp, lo, hi;
        tail[i2 >> 2] |= 128 << (i2 % 4 << 3);
        if (i2 > 55) {
          md5cycle(this._hash, tail);
          for (i2 = 0; i2 < 16; i2 += 1) {
            tail[i2] = 0;
          }
        }
        tmp = this._length * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(this._hash, tail);
      };
      SparkMD52.hash = function(str, raw) {
        return SparkMD52.hashBinary(toUtf8(str), raw);
      };
      SparkMD52.hashBinary = function(content, raw) {
        var hash = md51(content), ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
      };
      SparkMD52.ArrayBuffer = function() {
        this.reset();
      };
      SparkMD52.ArrayBuffer.prototype.append = function(arr) {
        var buff = concatenateArrayBuffers(this._buff.buffer, arr, true), length = buff.length, i2;
        this._length += arr.byteLength;
        for (i2 = 64; i2 <= length; i2 += 64) {
          md5cycle(this._hash, md5blk_array(buff.subarray(i2 - 64, i2)));
        }
        this._buff = i2 - 64 < length ? new Uint8Array(buff.buffer.slice(i2 - 64)) : new Uint8Array(0);
        return this;
      };
      SparkMD52.ArrayBuffer.prototype.end = function(raw) {
        var buff = this._buff, length = buff.length, tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], i2, ret;
        for (i2 = 0; i2 < length; i2 += 1) {
          tail[i2 >> 2] |= buff[i2] << (i2 % 4 << 3);
        }
        this._finish(tail, length);
        ret = hex(this._hash);
        if (raw) {
          ret = hexToBinaryString(ret);
        }
        this.reset();
        return ret;
      };
      SparkMD52.ArrayBuffer.prototype.reset = function() {
        this._buff = new Uint8Array(0);
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      };
      SparkMD52.ArrayBuffer.prototype.getState = function() {
        var state = SparkMD52.prototype.getState.call(this);
        state.buff = arrayBuffer2Utf8Str(state.buff);
        return state;
      };
      SparkMD52.ArrayBuffer.prototype.setState = function(state) {
        state.buff = utf8Str2ArrayBuffer(state.buff, true);
        return SparkMD52.prototype.setState.call(this, state);
      };
      SparkMD52.ArrayBuffer.prototype.destroy = SparkMD52.prototype.destroy;
      SparkMD52.ArrayBuffer.prototype._finish = SparkMD52.prototype._finish;
      SparkMD52.ArrayBuffer.hash = function(arr, raw) {
        var hash = md51_array(new Uint8Array(arr)), ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
      };
      return SparkMD52;
    });
  })(sparkMd5);
  const SparkMD5 = sparkMd5.exports;
  var BigInteger = { exports: {} };
  (function(module) {
    var bigInt2 = function(undefined$1) {
      var BASE = 1e7, LOG_BASE = 7, MAX_INT = 9007199254740992, MAX_INT_ARR = smallToArray(MAX_INT), DEFAULT_ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyz";
      var supportsNativeBigInt = typeof BigInt === "function";
      function Integer(v2, radix, alphabet, caseSensitive) {
        if (typeof v2 === "undefined")
          return Integer[0];
        if (typeof radix !== "undefined")
          return +radix === 10 && !alphabet ? parseValue(v2) : parseBase(v2, radix, alphabet, caseSensitive);
        return parseValue(v2);
      }
      function BigInteger2(value, sign) {
        this.value = value;
        this.sign = sign;
        this.isSmall = false;
      }
      BigInteger2.prototype = Object.create(Integer.prototype);
      function SmallInteger(value) {
        this.value = value;
        this.sign = value < 0;
        this.isSmall = true;
      }
      SmallInteger.prototype = Object.create(Integer.prototype);
      function NativeBigInt(value) {
        this.value = value;
      }
      NativeBigInt.prototype = Object.create(Integer.prototype);
      function isPrecise(n2) {
        return -MAX_INT < n2 && n2 < MAX_INT;
      }
      function smallToArray(n2) {
        if (n2 < 1e7)
          return [n2];
        if (n2 < 1e14)
          return [n2 % 1e7, Math.floor(n2 / 1e7)];
        return [n2 % 1e7, Math.floor(n2 / 1e7) % 1e7, Math.floor(n2 / 1e14)];
      }
      function arrayToSmall(arr) {
        trim(arr);
        var length = arr.length;
        if (length < 4 && compareAbs(arr, MAX_INT_ARR) < 0) {
          switch (length) {
            case 0:
              return 0;
            case 1:
              return arr[0];
            case 2:
              return arr[0] + arr[1] * BASE;
            default:
              return arr[0] + (arr[1] + arr[2] * BASE) * BASE;
          }
        }
        return arr;
      }
      function trim(v2) {
        var i3 = v2.length;
        while (v2[--i3] === 0)
          ;
        v2.length = i3 + 1;
      }
      function createArray(length) {
        var x2 = new Array(length);
        var i3 = -1;
        while (++i3 < length) {
          x2[i3] = 0;
        }
        return x2;
      }
      function truncate(n2) {
        if (n2 > 0)
          return Math.floor(n2);
        return Math.ceil(n2);
      }
      function add(a2, b2) {
        var l_a = a2.length, l_b = b2.length, r2 = new Array(l_a), carry = 0, base = BASE, sum, i3;
        for (i3 = 0; i3 < l_b; i3++) {
          sum = a2[i3] + b2[i3] + carry;
          carry = sum >= base ? 1 : 0;
          r2[i3] = sum - carry * base;
        }
        while (i3 < l_a) {
          sum = a2[i3] + carry;
          carry = sum === base ? 1 : 0;
          r2[i3++] = sum - carry * base;
        }
        if (carry > 0)
          r2.push(carry);
        return r2;
      }
      function addAny(a2, b2) {
        if (a2.length >= b2.length)
          return add(a2, b2);
        return add(b2, a2);
      }
      function addSmall(a2, carry) {
        var l2 = a2.length, r2 = new Array(l2), base = BASE, sum, i3;
        for (i3 = 0; i3 < l2; i3++) {
          sum = a2[i3] - base + carry;
          carry = Math.floor(sum / base);
          r2[i3] = sum - carry * base;
          carry += 1;
        }
        while (carry > 0) {
          r2[i3++] = carry % base;
          carry = Math.floor(carry / base);
        }
        return r2;
      }
      BigInteger2.prototype.add = function(v2) {
        var n2 = parseValue(v2);
        if (this.sign !== n2.sign) {
          return this.subtract(n2.negate());
        }
        var a2 = this.value, b2 = n2.value;
        if (n2.isSmall) {
          return new BigInteger2(addSmall(a2, Math.abs(b2)), this.sign);
        }
        return new BigInteger2(addAny(a2, b2), this.sign);
      };
      BigInteger2.prototype.plus = BigInteger2.prototype.add;
      SmallInteger.prototype.add = function(v2) {
        var n2 = parseValue(v2);
        var a2 = this.value;
        if (a2 < 0 !== n2.sign) {
          return this.subtract(n2.negate());
        }
        var b2 = n2.value;
        if (n2.isSmall) {
          if (isPrecise(a2 + b2))
            return new SmallInteger(a2 + b2);
          b2 = smallToArray(Math.abs(b2));
        }
        return new BigInteger2(addSmall(b2, Math.abs(a2)), a2 < 0);
      };
      SmallInteger.prototype.plus = SmallInteger.prototype.add;
      NativeBigInt.prototype.add = function(v2) {
        return new NativeBigInt(this.value + parseValue(v2).value);
      };
      NativeBigInt.prototype.plus = NativeBigInt.prototype.add;
      function subtract(a2, b2) {
        var a_l = a2.length, b_l = b2.length, r2 = new Array(a_l), borrow = 0, base = BASE, i3, difference;
        for (i3 = 0; i3 < b_l; i3++) {
          difference = a2[i3] - borrow - b2[i3];
          if (difference < 0) {
            difference += base;
            borrow = 1;
          } else
            borrow = 0;
          r2[i3] = difference;
        }
        for (i3 = b_l; i3 < a_l; i3++) {
          difference = a2[i3] - borrow;
          if (difference < 0)
            difference += base;
          else {
            r2[i3++] = difference;
            break;
          }
          r2[i3] = difference;
        }
        for (; i3 < a_l; i3++) {
          r2[i3] = a2[i3];
        }
        trim(r2);
        return r2;
      }
      function subtractAny(a2, b2, sign) {
        var value;
        if (compareAbs(a2, b2) >= 0) {
          value = subtract(a2, b2);
        } else {
          value = subtract(b2, a2);
          sign = !sign;
        }
        value = arrayToSmall(value);
        if (typeof value === "number") {
          if (sign)
            value = -value;
          return new SmallInteger(value);
        }
        return new BigInteger2(value, sign);
      }
      function subtractSmall(a2, b2, sign) {
        var l2 = a2.length, r2 = new Array(l2), carry = -b2, base = BASE, i3, difference;
        for (i3 = 0; i3 < l2; i3++) {
          difference = a2[i3] + carry;
          carry = Math.floor(difference / base);
          difference %= base;
          r2[i3] = difference < 0 ? difference + base : difference;
        }
        r2 = arrayToSmall(r2);
        if (typeof r2 === "number") {
          if (sign)
            r2 = -r2;
          return new SmallInteger(r2);
        }
        return new BigInteger2(r2, sign);
      }
      BigInteger2.prototype.subtract = function(v2) {
        var n2 = parseValue(v2);
        if (this.sign !== n2.sign) {
          return this.add(n2.negate());
        }
        var a2 = this.value, b2 = n2.value;
        if (n2.isSmall)
          return subtractSmall(a2, Math.abs(b2), this.sign);
        return subtractAny(a2, b2, this.sign);
      };
      BigInteger2.prototype.minus = BigInteger2.prototype.subtract;
      SmallInteger.prototype.subtract = function(v2) {
        var n2 = parseValue(v2);
        var a2 = this.value;
        if (a2 < 0 !== n2.sign) {
          return this.add(n2.negate());
        }
        var b2 = n2.value;
        if (n2.isSmall) {
          return new SmallInteger(a2 - b2);
        }
        return subtractSmall(b2, Math.abs(a2), a2 >= 0);
      };
      SmallInteger.prototype.minus = SmallInteger.prototype.subtract;
      NativeBigInt.prototype.subtract = function(v2) {
        return new NativeBigInt(this.value - parseValue(v2).value);
      };
      NativeBigInt.prototype.minus = NativeBigInt.prototype.subtract;
      BigInteger2.prototype.negate = function() {
        return new BigInteger2(this.value, !this.sign);
      };
      SmallInteger.prototype.negate = function() {
        var sign = this.sign;
        var small = new SmallInteger(-this.value);
        small.sign = !sign;
        return small;
      };
      NativeBigInt.prototype.negate = function() {
        return new NativeBigInt(-this.value);
      };
      BigInteger2.prototype.abs = function() {
        return new BigInteger2(this.value, false);
      };
      SmallInteger.prototype.abs = function() {
        return new SmallInteger(Math.abs(this.value));
      };
      NativeBigInt.prototype.abs = function() {
        return new NativeBigInt(this.value >= 0 ? this.value : -this.value);
      };
      function multiplyLong(a2, b2) {
        var a_l = a2.length, b_l = b2.length, l2 = a_l + b_l, r2 = createArray(l2), base = BASE, product, carry, i3, a_i, b_j;
        for (i3 = 0; i3 < a_l; ++i3) {
          a_i = a2[i3];
          for (var j2 = 0; j2 < b_l; ++j2) {
            b_j = b2[j2];
            product = a_i * b_j + r2[i3 + j2];
            carry = Math.floor(product / base);
            r2[i3 + j2] = product - carry * base;
            r2[i3 + j2 + 1] += carry;
          }
        }
        trim(r2);
        return r2;
      }
      function multiplySmall(a2, b2) {
        var l2 = a2.length, r2 = new Array(l2), base = BASE, carry = 0, product, i3;
        for (i3 = 0; i3 < l2; i3++) {
          product = a2[i3] * b2 + carry;
          carry = Math.floor(product / base);
          r2[i3] = product - carry * base;
        }
        while (carry > 0) {
          r2[i3++] = carry % base;
          carry = Math.floor(carry / base);
        }
        return r2;
      }
      function shiftLeft(x2, n2) {
        var r2 = [];
        while (n2-- > 0)
          r2.push(0);
        return r2.concat(x2);
      }
      function multiplyKaratsuba(x2, y2) {
        var n2 = Math.max(x2.length, y2.length);
        if (n2 <= 30)
          return multiplyLong(x2, y2);
        n2 = Math.ceil(n2 / 2);
        var b2 = x2.slice(n2), a2 = x2.slice(0, n2), d2 = y2.slice(n2), c2 = y2.slice(0, n2);
        var ac = multiplyKaratsuba(a2, c2), bd = multiplyKaratsuba(b2, d2), abcd = multiplyKaratsuba(addAny(a2, b2), addAny(c2, d2));
        var product = addAny(addAny(ac, shiftLeft(subtract(subtract(abcd, ac), bd), n2)), shiftLeft(bd, 2 * n2));
        trim(product);
        return product;
      }
      function useKaratsuba(l1, l2) {
        return -0.012 * l1 - 0.012 * l2 + 15e-6 * l1 * l2 > 0;
      }
      BigInteger2.prototype.multiply = function(v2) {
        var n2 = parseValue(v2), a2 = this.value, b2 = n2.value, sign = this.sign !== n2.sign, abs;
        if (n2.isSmall) {
          if (b2 === 0)
            return Integer[0];
          if (b2 === 1)
            return this;
          if (b2 === -1)
            return this.negate();
          abs = Math.abs(b2);
          if (abs < BASE) {
            return new BigInteger2(multiplySmall(a2, abs), sign);
          }
          b2 = smallToArray(abs);
        }
        if (useKaratsuba(a2.length, b2.length))
          return new BigInteger2(multiplyKaratsuba(a2, b2), sign);
        return new BigInteger2(multiplyLong(a2, b2), sign);
      };
      BigInteger2.prototype.times = BigInteger2.prototype.multiply;
      function multiplySmallAndArray(a2, b2, sign) {
        if (a2 < BASE) {
          return new BigInteger2(multiplySmall(b2, a2), sign);
        }
        return new BigInteger2(multiplyLong(b2, smallToArray(a2)), sign);
      }
      SmallInteger.prototype._multiplyBySmall = function(a2) {
        if (isPrecise(a2.value * this.value)) {
          return new SmallInteger(a2.value * this.value);
        }
        return multiplySmallAndArray(Math.abs(a2.value), smallToArray(Math.abs(this.value)), this.sign !== a2.sign);
      };
      BigInteger2.prototype._multiplyBySmall = function(a2) {
        if (a2.value === 0)
          return Integer[0];
        if (a2.value === 1)
          return this;
        if (a2.value === -1)
          return this.negate();
        return multiplySmallAndArray(Math.abs(a2.value), this.value, this.sign !== a2.sign);
      };
      SmallInteger.prototype.multiply = function(v2) {
        return parseValue(v2)._multiplyBySmall(this);
      };
      SmallInteger.prototype.times = SmallInteger.prototype.multiply;
      NativeBigInt.prototype.multiply = function(v2) {
        return new NativeBigInt(this.value * parseValue(v2).value);
      };
      NativeBigInt.prototype.times = NativeBigInt.prototype.multiply;
      function square(a2) {
        var l2 = a2.length, r2 = createArray(l2 + l2), base = BASE, product, carry, i3, a_i, a_j;
        for (i3 = 0; i3 < l2; i3++) {
          a_i = a2[i3];
          carry = 0 - a_i * a_i;
          for (var j2 = i3; j2 < l2; j2++) {
            a_j = a2[j2];
            product = 2 * (a_i * a_j) + r2[i3 + j2] + carry;
            carry = Math.floor(product / base);
            r2[i3 + j2] = product - carry * base;
          }
          r2[i3 + l2] = carry;
        }
        trim(r2);
        return r2;
      }
      BigInteger2.prototype.square = function() {
        return new BigInteger2(square(this.value), false);
      };
      SmallInteger.prototype.square = function() {
        var value = this.value * this.value;
        if (isPrecise(value))
          return new SmallInteger(value);
        return new BigInteger2(square(smallToArray(Math.abs(this.value))), false);
      };
      NativeBigInt.prototype.square = function(v2) {
        return new NativeBigInt(this.value * this.value);
      };
      function divMod1(a2, b2) {
        var a_l = a2.length, b_l = b2.length, base = BASE, result = createArray(b2.length), divisorMostSignificantDigit = b2[b_l - 1], lambda = Math.ceil(base / (2 * divisorMostSignificantDigit)), remainder = multiplySmall(a2, lambda), divisor = multiplySmall(b2, lambda), quotientDigit, shift, carry, borrow, i3, l2, q2;
        if (remainder.length <= a_l)
          remainder.push(0);
        divisor.push(0);
        divisorMostSignificantDigit = divisor[b_l - 1];
        for (shift = a_l - b_l; shift >= 0; shift--) {
          quotientDigit = base - 1;
          if (remainder[shift + b_l] !== divisorMostSignificantDigit) {
            quotientDigit = Math.floor((remainder[shift + b_l] * base + remainder[shift + b_l - 1]) / divisorMostSignificantDigit);
          }
          carry = 0;
          borrow = 0;
          l2 = divisor.length;
          for (i3 = 0; i3 < l2; i3++) {
            carry += quotientDigit * divisor[i3];
            q2 = Math.floor(carry / base);
            borrow += remainder[shift + i3] - (carry - q2 * base);
            carry = q2;
            if (borrow < 0) {
              remainder[shift + i3] = borrow + base;
              borrow = -1;
            } else {
              remainder[shift + i3] = borrow;
              borrow = 0;
            }
          }
          while (borrow !== 0) {
            quotientDigit -= 1;
            carry = 0;
            for (i3 = 0; i3 < l2; i3++) {
              carry += remainder[shift + i3] - base + divisor[i3];
              if (carry < 0) {
                remainder[shift + i3] = carry + base;
                carry = 0;
              } else {
                remainder[shift + i3] = carry;
                carry = 1;
              }
            }
            borrow += carry;
          }
          result[shift] = quotientDigit;
        }
        remainder = divModSmall(remainder, lambda)[0];
        return [arrayToSmall(result), arrayToSmall(remainder)];
      }
      function divMod2(a2, b2) {
        var a_l = a2.length, b_l = b2.length, result = [], part = [], base = BASE, guess, xlen, highx, highy, check;
        while (a_l) {
          part.unshift(a2[--a_l]);
          trim(part);
          if (compareAbs(part, b2) < 0) {
            result.push(0);
            continue;
          }
          xlen = part.length;
          highx = part[xlen - 1] * base + part[xlen - 2];
          highy = b2[b_l - 1] * base + b2[b_l - 2];
          if (xlen > b_l) {
            highx = (highx + 1) * base;
          }
          guess = Math.ceil(highx / highy);
          do {
            check = multiplySmall(b2, guess);
            if (compareAbs(check, part) <= 0)
              break;
            guess--;
          } while (guess);
          result.push(guess);
          part = subtract(part, check);
        }
        result.reverse();
        return [arrayToSmall(result), arrayToSmall(part)];
      }
      function divModSmall(value, lambda) {
        var length = value.length, quotient = createArray(length), base = BASE, i3, q2, remainder, divisor;
        remainder = 0;
        for (i3 = length - 1; i3 >= 0; --i3) {
          divisor = remainder * base + value[i3];
          q2 = truncate(divisor / lambda);
          remainder = divisor - q2 * lambda;
          quotient[i3] = q2 | 0;
        }
        return [quotient, remainder | 0];
      }
      function divModAny(self, v2) {
        var value, n2 = parseValue(v2);
        if (supportsNativeBigInt) {
          return [new NativeBigInt(self.value / n2.value), new NativeBigInt(self.value % n2.value)];
        }
        var a2 = self.value, b2 = n2.value;
        var quotient;
        if (b2 === 0)
          throw new Error("Cannot divide by zero");
        if (self.isSmall) {
          if (n2.isSmall) {
            return [new SmallInteger(truncate(a2 / b2)), new SmallInteger(a2 % b2)];
          }
          return [Integer[0], self];
        }
        if (n2.isSmall) {
          if (b2 === 1)
            return [self, Integer[0]];
          if (b2 == -1)
            return [self.negate(), Integer[0]];
          var abs = Math.abs(b2);
          if (abs < BASE) {
            value = divModSmall(a2, abs);
            quotient = arrayToSmall(value[0]);
            var remainder = value[1];
            if (self.sign)
              remainder = -remainder;
            if (typeof quotient === "number") {
              if (self.sign !== n2.sign)
                quotient = -quotient;
              return [new SmallInteger(quotient), new SmallInteger(remainder)];
            }
            return [new BigInteger2(quotient, self.sign !== n2.sign), new SmallInteger(remainder)];
          }
          b2 = smallToArray(abs);
        }
        var comparison = compareAbs(a2, b2);
        if (comparison === -1)
          return [Integer[0], self];
        if (comparison === 0)
          return [Integer[self.sign === n2.sign ? 1 : -1], Integer[0]];
        if (a2.length + b2.length <= 200)
          value = divMod1(a2, b2);
        else
          value = divMod2(a2, b2);
        quotient = value[0];
        var qSign = self.sign !== n2.sign, mod = value[1], mSign = self.sign;
        if (typeof quotient === "number") {
          if (qSign)
            quotient = -quotient;
          quotient = new SmallInteger(quotient);
        } else
          quotient = new BigInteger2(quotient, qSign);
        if (typeof mod === "number") {
          if (mSign)
            mod = -mod;
          mod = new SmallInteger(mod);
        } else
          mod = new BigInteger2(mod, mSign);
        return [quotient, mod];
      }
      BigInteger2.prototype.divmod = function(v2) {
        var result = divModAny(this, v2);
        return {
          quotient: result[0],
          remainder: result[1]
        };
      };
      NativeBigInt.prototype.divmod = SmallInteger.prototype.divmod = BigInteger2.prototype.divmod;
      BigInteger2.prototype.divide = function(v2) {
        return divModAny(this, v2)[0];
      };
      NativeBigInt.prototype.over = NativeBigInt.prototype.divide = function(v2) {
        return new NativeBigInt(this.value / parseValue(v2).value);
      };
      SmallInteger.prototype.over = SmallInteger.prototype.divide = BigInteger2.prototype.over = BigInteger2.prototype.divide;
      BigInteger2.prototype.mod = function(v2) {
        return divModAny(this, v2)[1];
      };
      NativeBigInt.prototype.mod = NativeBigInt.prototype.remainder = function(v2) {
        return new NativeBigInt(this.value % parseValue(v2).value);
      };
      SmallInteger.prototype.remainder = SmallInteger.prototype.mod = BigInteger2.prototype.remainder = BigInteger2.prototype.mod;
      BigInteger2.prototype.pow = function(v2) {
        var n2 = parseValue(v2), a2 = this.value, b2 = n2.value, value, x2, y2;
        if (b2 === 0)
          return Integer[1];
        if (a2 === 0)
          return Integer[0];
        if (a2 === 1)
          return Integer[1];
        if (a2 === -1)
          return n2.isEven() ? Integer[1] : Integer[-1];
        if (n2.sign) {
          return Integer[0];
        }
        if (!n2.isSmall)
          throw new Error("The exponent " + n2.toString() + " is too large.");
        if (this.isSmall) {
          if (isPrecise(value = Math.pow(a2, b2)))
            return new SmallInteger(truncate(value));
        }
        x2 = this;
        y2 = Integer[1];
        while (true) {
          if (b2 & true) {
            y2 = y2.times(x2);
            --b2;
          }
          if (b2 === 0)
            break;
          b2 /= 2;
          x2 = x2.square();
        }
        return y2;
      };
      SmallInteger.prototype.pow = BigInteger2.prototype.pow;
      NativeBigInt.prototype.pow = function(v2) {
        var n2 = parseValue(v2);
        var a2 = this.value, b2 = n2.value;
        var _0 = BigInt(0), _1 = BigInt(1), _2 = BigInt(2);
        if (b2 === _0)
          return Integer[1];
        if (a2 === _0)
          return Integer[0];
        if (a2 === _1)
          return Integer[1];
        if (a2 === BigInt(-1))
          return n2.isEven() ? Integer[1] : Integer[-1];
        if (n2.isNegative())
          return new NativeBigInt(_0);
        var x2 = this;
        var y2 = Integer[1];
        while (true) {
          if ((b2 & _1) === _1) {
            y2 = y2.times(x2);
            --b2;
          }
          if (b2 === _0)
            break;
          b2 /= _2;
          x2 = x2.square();
        }
        return y2;
      };
      BigInteger2.prototype.modPow = function(exp, mod) {
        exp = parseValue(exp);
        mod = parseValue(mod);
        if (mod.isZero())
          throw new Error("Cannot take modPow with modulus 0");
        var r2 = Integer[1], base = this.mod(mod);
        if (exp.isNegative()) {
          exp = exp.multiply(Integer[-1]);
          base = base.modInv(mod);
        }
        while (exp.isPositive()) {
          if (base.isZero())
            return Integer[0];
          if (exp.isOdd())
            r2 = r2.multiply(base).mod(mod);
          exp = exp.divide(2);
          base = base.square().mod(mod);
        }
        return r2;
      };
      NativeBigInt.prototype.modPow = SmallInteger.prototype.modPow = BigInteger2.prototype.modPow;
      function compareAbs(a2, b2) {
        if (a2.length !== b2.length) {
          return a2.length > b2.length ? 1 : -1;
        }
        for (var i3 = a2.length - 1; i3 >= 0; i3--) {
          if (a2[i3] !== b2[i3])
            return a2[i3] > b2[i3] ? 1 : -1;
        }
        return 0;
      }
      BigInteger2.prototype.compareAbs = function(v2) {
        var n2 = parseValue(v2), a2 = this.value, b2 = n2.value;
        if (n2.isSmall)
          return 1;
        return compareAbs(a2, b2);
      };
      SmallInteger.prototype.compareAbs = function(v2) {
        var n2 = parseValue(v2), a2 = Math.abs(this.value), b2 = n2.value;
        if (n2.isSmall) {
          b2 = Math.abs(b2);
          return a2 === b2 ? 0 : a2 > b2 ? 1 : -1;
        }
        return -1;
      };
      NativeBigInt.prototype.compareAbs = function(v2) {
        var a2 = this.value;
        var b2 = parseValue(v2).value;
        a2 = a2 >= 0 ? a2 : -a2;
        b2 = b2 >= 0 ? b2 : -b2;
        return a2 === b2 ? 0 : a2 > b2 ? 1 : -1;
      };
      BigInteger2.prototype.compare = function(v2) {
        if (v2 === Infinity) {
          return -1;
        }
        if (v2 === -Infinity) {
          return 1;
        }
        var n2 = parseValue(v2), a2 = this.value, b2 = n2.value;
        if (this.sign !== n2.sign) {
          return n2.sign ? 1 : -1;
        }
        if (n2.isSmall) {
          return this.sign ? -1 : 1;
        }
        return compareAbs(a2, b2) * (this.sign ? -1 : 1);
      };
      BigInteger2.prototype.compareTo = BigInteger2.prototype.compare;
      SmallInteger.prototype.compare = function(v2) {
        if (v2 === Infinity) {
          return -1;
        }
        if (v2 === -Infinity) {
          return 1;
        }
        var n2 = parseValue(v2), a2 = this.value, b2 = n2.value;
        if (n2.isSmall) {
          return a2 == b2 ? 0 : a2 > b2 ? 1 : -1;
        }
        if (a2 < 0 !== n2.sign) {
          return a2 < 0 ? -1 : 1;
        }
        return a2 < 0 ? 1 : -1;
      };
      SmallInteger.prototype.compareTo = SmallInteger.prototype.compare;
      NativeBigInt.prototype.compare = function(v2) {
        if (v2 === Infinity) {
          return -1;
        }
        if (v2 === -Infinity) {
          return 1;
        }
        var a2 = this.value;
        var b2 = parseValue(v2).value;
        return a2 === b2 ? 0 : a2 > b2 ? 1 : -1;
      };
      NativeBigInt.prototype.compareTo = NativeBigInt.prototype.compare;
      BigInteger2.prototype.equals = function(v2) {
        return this.compare(v2) === 0;
      };
      NativeBigInt.prototype.eq = NativeBigInt.prototype.equals = SmallInteger.prototype.eq = SmallInteger.prototype.equals = BigInteger2.prototype.eq = BigInteger2.prototype.equals;
      BigInteger2.prototype.notEquals = function(v2) {
        return this.compare(v2) !== 0;
      };
      NativeBigInt.prototype.neq = NativeBigInt.prototype.notEquals = SmallInteger.prototype.neq = SmallInteger.prototype.notEquals = BigInteger2.prototype.neq = BigInteger2.prototype.notEquals;
      BigInteger2.prototype.greater = function(v2) {
        return this.compare(v2) > 0;
      };
      NativeBigInt.prototype.gt = NativeBigInt.prototype.greater = SmallInteger.prototype.gt = SmallInteger.prototype.greater = BigInteger2.prototype.gt = BigInteger2.prototype.greater;
      BigInteger2.prototype.lesser = function(v2) {
        return this.compare(v2) < 0;
      };
      NativeBigInt.prototype.lt = NativeBigInt.prototype.lesser = SmallInteger.prototype.lt = SmallInteger.prototype.lesser = BigInteger2.prototype.lt = BigInteger2.prototype.lesser;
      BigInteger2.prototype.greaterOrEquals = function(v2) {
        return this.compare(v2) >= 0;
      };
      NativeBigInt.prototype.geq = NativeBigInt.prototype.greaterOrEquals = SmallInteger.prototype.geq = SmallInteger.prototype.greaterOrEquals = BigInteger2.prototype.geq = BigInteger2.prototype.greaterOrEquals;
      BigInteger2.prototype.lesserOrEquals = function(v2) {
        return this.compare(v2) <= 0;
      };
      NativeBigInt.prototype.leq = NativeBigInt.prototype.lesserOrEquals = SmallInteger.prototype.leq = SmallInteger.prototype.lesserOrEquals = BigInteger2.prototype.leq = BigInteger2.prototype.lesserOrEquals;
      BigInteger2.prototype.isEven = function() {
        return (this.value[0] & 1) === 0;
      };
      SmallInteger.prototype.isEven = function() {
        return (this.value & 1) === 0;
      };
      NativeBigInt.prototype.isEven = function() {
        return (this.value & BigInt(1)) === BigInt(0);
      };
      BigInteger2.prototype.isOdd = function() {
        return (this.value[0] & 1) === 1;
      };
      SmallInteger.prototype.isOdd = function() {
        return (this.value & 1) === 1;
      };
      NativeBigInt.prototype.isOdd = function() {
        return (this.value & BigInt(1)) === BigInt(1);
      };
      BigInteger2.prototype.isPositive = function() {
        return !this.sign;
      };
      SmallInteger.prototype.isPositive = function() {
        return this.value > 0;
      };
      NativeBigInt.prototype.isPositive = SmallInteger.prototype.isPositive;
      BigInteger2.prototype.isNegative = function() {
        return this.sign;
      };
      SmallInteger.prototype.isNegative = function() {
        return this.value < 0;
      };
      NativeBigInt.prototype.isNegative = SmallInteger.prototype.isNegative;
      BigInteger2.prototype.isUnit = function() {
        return false;
      };
      SmallInteger.prototype.isUnit = function() {
        return Math.abs(this.value) === 1;
      };
      NativeBigInt.prototype.isUnit = function() {
        return this.abs().value === BigInt(1);
      };
      BigInteger2.prototype.isZero = function() {
        return false;
      };
      SmallInteger.prototype.isZero = function() {
        return this.value === 0;
      };
      NativeBigInt.prototype.isZero = function() {
        return this.value === BigInt(0);
      };
      BigInteger2.prototype.isDivisibleBy = function(v2) {
        var n2 = parseValue(v2);
        if (n2.isZero())
          return false;
        if (n2.isUnit())
          return true;
        if (n2.compareAbs(2) === 0)
          return this.isEven();
        return this.mod(n2).isZero();
      };
      NativeBigInt.prototype.isDivisibleBy = SmallInteger.prototype.isDivisibleBy = BigInteger2.prototype.isDivisibleBy;
      function isBasicPrime(v2) {
        var n2 = v2.abs();
        if (n2.isUnit())
          return false;
        if (n2.equals(2) || n2.equals(3) || n2.equals(5))
          return true;
        if (n2.isEven() || n2.isDivisibleBy(3) || n2.isDivisibleBy(5))
          return false;
        if (n2.lesser(49))
          return true;
      }
      function millerRabinTest(n2, a2) {
        var nPrev = n2.prev(), b2 = nPrev, r2 = 0, d2, i3, x2;
        while (b2.isEven())
          b2 = b2.divide(2), r2++;
        next:
          for (i3 = 0; i3 < a2.length; i3++) {
            if (n2.lesser(a2[i3]))
              continue;
            x2 = bigInt2(a2[i3]).modPow(b2, n2);
            if (x2.isUnit() || x2.equals(nPrev))
              continue;
            for (d2 = r2 - 1; d2 != 0; d2--) {
              x2 = x2.square().mod(n2);
              if (x2.isUnit())
                return false;
              if (x2.equals(nPrev))
                continue next;
            }
            return false;
          }
        return true;
      }
      BigInteger2.prototype.isPrime = function(strict) {
        var isPrime = isBasicPrime(this);
        if (isPrime !== undefined$1)
          return isPrime;
        var n2 = this.abs();
        var bits = n2.bitLength();
        if (bits <= 64)
          return millerRabinTest(n2, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
        var logN = Math.log(2) * bits.toJSNumber();
        var t2 = Math.ceil(strict === true ? 2 * Math.pow(logN, 2) : logN);
        for (var a2 = [], i3 = 0; i3 < t2; i3++) {
          a2.push(bigInt2(i3 + 2));
        }
        return millerRabinTest(n2, a2);
      };
      NativeBigInt.prototype.isPrime = SmallInteger.prototype.isPrime = BigInteger2.prototype.isPrime;
      BigInteger2.prototype.isProbablePrime = function(iterations, rng) {
        var isPrime = isBasicPrime(this);
        if (isPrime !== undefined$1)
          return isPrime;
        var n2 = this.abs();
        var t2 = iterations === undefined$1 ? 5 : iterations;
        for (var a2 = [], i3 = 0; i3 < t2; i3++) {
          a2.push(bigInt2.randBetween(2, n2.minus(2), rng));
        }
        return millerRabinTest(n2, a2);
      };
      NativeBigInt.prototype.isProbablePrime = SmallInteger.prototype.isProbablePrime = BigInteger2.prototype.isProbablePrime;
      BigInteger2.prototype.modInv = function(n2) {
        var t2 = bigInt2.zero, newT = bigInt2.one, r2 = parseValue(n2), newR = this.abs(), q2, lastT, lastR;
        while (!newR.isZero()) {
          q2 = r2.divide(newR);
          lastT = t2;
          lastR = r2;
          t2 = newT;
          r2 = newR;
          newT = lastT.subtract(q2.multiply(newT));
          newR = lastR.subtract(q2.multiply(newR));
        }
        if (!r2.isUnit())
          throw new Error(this.toString() + " and " + n2.toString() + " are not co-prime");
        if (t2.compare(0) === -1) {
          t2 = t2.add(n2);
        }
        if (this.isNegative()) {
          return t2.negate();
        }
        return t2;
      };
      NativeBigInt.prototype.modInv = SmallInteger.prototype.modInv = BigInteger2.prototype.modInv;
      BigInteger2.prototype.next = function() {
        var value = this.value;
        if (this.sign) {
          return subtractSmall(value, 1, this.sign);
        }
        return new BigInteger2(addSmall(value, 1), this.sign);
      };
      SmallInteger.prototype.next = function() {
        var value = this.value;
        if (value + 1 < MAX_INT)
          return new SmallInteger(value + 1);
        return new BigInteger2(MAX_INT_ARR, false);
      };
      NativeBigInt.prototype.next = function() {
        return new NativeBigInt(this.value + BigInt(1));
      };
      BigInteger2.prototype.prev = function() {
        var value = this.value;
        if (this.sign) {
          return new BigInteger2(addSmall(value, 1), true);
        }
        return subtractSmall(value, 1, this.sign);
      };
      SmallInteger.prototype.prev = function() {
        var value = this.value;
        if (value - 1 > -MAX_INT)
          return new SmallInteger(value - 1);
        return new BigInteger2(MAX_INT_ARR, true);
      };
      NativeBigInt.prototype.prev = function() {
        return new NativeBigInt(this.value - BigInt(1));
      };
      var powersOfTwo = [1];
      while (2 * powersOfTwo[powersOfTwo.length - 1] <= BASE)
        powersOfTwo.push(2 * powersOfTwo[powersOfTwo.length - 1]);
      var powers2Length = powersOfTwo.length, highestPower2 = powersOfTwo[powers2Length - 1];
      function shift_isSmall(n2) {
        return Math.abs(n2) <= BASE;
      }
      BigInteger2.prototype.shiftLeft = function(v2) {
        var n2 = parseValue(v2).toJSNumber();
        if (!shift_isSmall(n2)) {
          throw new Error(String(n2) + " is too large for shifting.");
        }
        if (n2 < 0)
          return this.shiftRight(-n2);
        var result = this;
        if (result.isZero())
          return result;
        while (n2 >= powers2Length) {
          result = result.multiply(highestPower2);
          n2 -= powers2Length - 1;
        }
        return result.multiply(powersOfTwo[n2]);
      };
      NativeBigInt.prototype.shiftLeft = SmallInteger.prototype.shiftLeft = BigInteger2.prototype.shiftLeft;
      BigInteger2.prototype.shiftRight = function(v2) {
        var remQuo;
        var n2 = parseValue(v2).toJSNumber();
        if (!shift_isSmall(n2)) {
          throw new Error(String(n2) + " is too large for shifting.");
        }
        if (n2 < 0)
          return this.shiftLeft(-n2);
        var result = this;
        while (n2 >= powers2Length) {
          if (result.isZero() || result.isNegative() && result.isUnit())
            return result;
          remQuo = divModAny(result, highestPower2);
          result = remQuo[1].isNegative() ? remQuo[0].prev() : remQuo[0];
          n2 -= powers2Length - 1;
        }
        remQuo = divModAny(result, powersOfTwo[n2]);
        return remQuo[1].isNegative() ? remQuo[0].prev() : remQuo[0];
      };
      NativeBigInt.prototype.shiftRight = SmallInteger.prototype.shiftRight = BigInteger2.prototype.shiftRight;
      function bitwise(x2, y2, fn) {
        y2 = parseValue(y2);
        var xSign = x2.isNegative(), ySign = y2.isNegative();
        var xRem = xSign ? x2.not() : x2, yRem = ySign ? y2.not() : y2;
        var xDigit = 0, yDigit = 0;
        var xDivMod = null, yDivMod = null;
        var result = [];
        while (!xRem.isZero() || !yRem.isZero()) {
          xDivMod = divModAny(xRem, highestPower2);
          xDigit = xDivMod[1].toJSNumber();
          if (xSign) {
            xDigit = highestPower2 - 1 - xDigit;
          }
          yDivMod = divModAny(yRem, highestPower2);
          yDigit = yDivMod[1].toJSNumber();
          if (ySign) {
            yDigit = highestPower2 - 1 - yDigit;
          }
          xRem = xDivMod[0];
          yRem = yDivMod[0];
          result.push(fn(xDigit, yDigit));
        }
        var sum = fn(xSign ? 1 : 0, ySign ? 1 : 0) !== 0 ? bigInt2(-1) : bigInt2(0);
        for (var i3 = result.length - 1; i3 >= 0; i3 -= 1) {
          sum = sum.multiply(highestPower2).add(bigInt2(result[i3]));
        }
        return sum;
      }
      BigInteger2.prototype.not = function() {
        return this.negate().prev();
      };
      NativeBigInt.prototype.not = SmallInteger.prototype.not = BigInteger2.prototype.not;
      BigInteger2.prototype.and = function(n2) {
        return bitwise(this, n2, function(a2, b2) {
          return a2 & b2;
        });
      };
      NativeBigInt.prototype.and = SmallInteger.prototype.and = BigInteger2.prototype.and;
      BigInteger2.prototype.or = function(n2) {
        return bitwise(this, n2, function(a2, b2) {
          return a2 | b2;
        });
      };
      NativeBigInt.prototype.or = SmallInteger.prototype.or = BigInteger2.prototype.or;
      BigInteger2.prototype.xor = function(n2) {
        return bitwise(this, n2, function(a2, b2) {
          return a2 ^ b2;
        });
      };
      NativeBigInt.prototype.xor = SmallInteger.prototype.xor = BigInteger2.prototype.xor;
      var LOBMASK_I = 1 << 30, LOBMASK_BI = (BASE & -BASE) * (BASE & -BASE) | LOBMASK_I;
      function roughLOB(n2) {
        var v2 = n2.value, x2 = typeof v2 === "number" ? v2 | LOBMASK_I : typeof v2 === "bigint" ? v2 | BigInt(LOBMASK_I) : v2[0] + v2[1] * BASE | LOBMASK_BI;
        return x2 & -x2;
      }
      function integerLogarithm(value, base) {
        if (base.compareTo(value) <= 0) {
          var tmp = integerLogarithm(value, base.square(base));
          var p2 = tmp.p;
          var e2 = tmp.e;
          var t2 = p2.multiply(base);
          return t2.compareTo(value) <= 0 ? { p: t2, e: e2 * 2 + 1 } : { p: p2, e: e2 * 2 };
        }
        return { p: bigInt2(1), e: 0 };
      }
      BigInteger2.prototype.bitLength = function() {
        var n2 = this;
        if (n2.compareTo(bigInt2(0)) < 0) {
          n2 = n2.negate().subtract(bigInt2(1));
        }
        if (n2.compareTo(bigInt2(0)) === 0) {
          return bigInt2(0);
        }
        return bigInt2(integerLogarithm(n2, bigInt2(2)).e).add(bigInt2(1));
      };
      NativeBigInt.prototype.bitLength = SmallInteger.prototype.bitLength = BigInteger2.prototype.bitLength;
      function max(a2, b2) {
        a2 = parseValue(a2);
        b2 = parseValue(b2);
        return a2.greater(b2) ? a2 : b2;
      }
      function min(a2, b2) {
        a2 = parseValue(a2);
        b2 = parseValue(b2);
        return a2.lesser(b2) ? a2 : b2;
      }
      function gcd(a2, b2) {
        a2 = parseValue(a2).abs();
        b2 = parseValue(b2).abs();
        if (a2.equals(b2))
          return a2;
        if (a2.isZero())
          return b2;
        if (b2.isZero())
          return a2;
        var c2 = Integer[1], d2, t2;
        while (a2.isEven() && b2.isEven()) {
          d2 = min(roughLOB(a2), roughLOB(b2));
          a2 = a2.divide(d2);
          b2 = b2.divide(d2);
          c2 = c2.multiply(d2);
        }
        while (a2.isEven()) {
          a2 = a2.divide(roughLOB(a2));
        }
        do {
          while (b2.isEven()) {
            b2 = b2.divide(roughLOB(b2));
          }
          if (a2.greater(b2)) {
            t2 = b2;
            b2 = a2;
            a2 = t2;
          }
          b2 = b2.subtract(a2);
        } while (!b2.isZero());
        return c2.isUnit() ? a2 : a2.multiply(c2);
      }
      function lcm(a2, b2) {
        a2 = parseValue(a2).abs();
        b2 = parseValue(b2).abs();
        return a2.divide(gcd(a2, b2)).multiply(b2);
      }
      function randBetween(a2, b2, rng) {
        a2 = parseValue(a2);
        b2 = parseValue(b2);
        var usedRNG = rng || Math.random;
        var low = min(a2, b2), high = max(a2, b2);
        var range = high.subtract(low).add(1);
        if (range.isSmall)
          return low.add(Math.floor(usedRNG() * range));
        var digits = toBase(range, BASE).value;
        var result = [], restricted = true;
        for (var i3 = 0; i3 < digits.length; i3++) {
          var top = restricted ? digits[i3] + (i3 + 1 < digits.length ? digits[i3 + 1] / BASE : 0) : BASE;
          var digit = truncate(usedRNG() * top);
          result.push(digit);
          if (digit < digits[i3])
            restricted = false;
        }
        return low.add(Integer.fromArray(result, BASE, false));
      }
      var parseBase = function(text, base, alphabet, caseSensitive) {
        alphabet = alphabet || DEFAULT_ALPHABET;
        text = String(text);
        if (!caseSensitive) {
          text = text.toLowerCase();
          alphabet = alphabet.toLowerCase();
        }
        var length = text.length;
        var i3;
        var absBase = Math.abs(base);
        var alphabetValues = {};
        for (i3 = 0; i3 < alphabet.length; i3++) {
          alphabetValues[alphabet[i3]] = i3;
        }
        for (i3 = 0; i3 < length; i3++) {
          var c2 = text[i3];
          if (c2 === "-")
            continue;
          if (c2 in alphabetValues) {
            if (alphabetValues[c2] >= absBase) {
              if (c2 === "1" && absBase === 1)
                continue;
              throw new Error(c2 + " is not a valid digit in base " + base + ".");
            }
          }
        }
        base = parseValue(base);
        var digits = [];
        var isNegative = text[0] === "-";
        for (i3 = isNegative ? 1 : 0; i3 < text.length; i3++) {
          var c2 = text[i3];
          if (c2 in alphabetValues)
            digits.push(parseValue(alphabetValues[c2]));
          else if (c2 === "<") {
            var start = i3;
            do {
              i3++;
            } while (text[i3] !== ">" && i3 < text.length);
            digits.push(parseValue(text.slice(start + 1, i3)));
          } else
            throw new Error(c2 + " is not a valid character");
        }
        return parseBaseFromArray(digits, base, isNegative);
      };
      function parseBaseFromArray(digits, base, isNegative) {
        var val = Integer[0], pow = Integer[1], i3;
        for (i3 = digits.length - 1; i3 >= 0; i3--) {
          val = val.add(digits[i3].times(pow));
          pow = pow.times(base);
        }
        return isNegative ? val.negate() : val;
      }
      function stringify(digit, alphabet) {
        alphabet = alphabet || DEFAULT_ALPHABET;
        if (digit < alphabet.length) {
          return alphabet[digit];
        }
        return "<" + digit + ">";
      }
      function toBase(n2, base) {
        base = bigInt2(base);
        if (base.isZero()) {
          if (n2.isZero())
            return { value: [0], isNegative: false };
          throw new Error("Cannot convert nonzero numbers to base 0.");
        }
        if (base.equals(-1)) {
          if (n2.isZero())
            return { value: [0], isNegative: false };
          if (n2.isNegative())
            return {
              value: [].concat.apply(
                [],
                Array.apply(null, Array(-n2.toJSNumber())).map(Array.prototype.valueOf, [1, 0])
              ),
              isNegative: false
            };
          var arr = Array.apply(null, Array(n2.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
          arr.unshift([1]);
          return {
            value: [].concat.apply([], arr),
            isNegative: false
          };
        }
        var neg = false;
        if (n2.isNegative() && base.isPositive()) {
          neg = true;
          n2 = n2.abs();
        }
        if (base.isUnit()) {
          if (n2.isZero())
            return { value: [0], isNegative: false };
          return {
            value: Array.apply(null, Array(n2.toJSNumber())).map(Number.prototype.valueOf, 1),
            isNegative: neg
          };
        }
        var out = [];
        var left = n2, divmod;
        while (left.isNegative() || left.compareAbs(base) >= 0) {
          divmod = left.divmod(base);
          left = divmod.quotient;
          var digit = divmod.remainder;
          if (digit.isNegative()) {
            digit = base.minus(digit).abs();
            left = left.next();
          }
          out.push(digit.toJSNumber());
        }
        out.push(left.toJSNumber());
        return { value: out.reverse(), isNegative: neg };
      }
      function toBaseString(n2, base, alphabet) {
        var arr = toBase(n2, base);
        return (arr.isNegative ? "-" : "") + arr.value.map(function(x2) {
          return stringify(x2, alphabet);
        }).join("");
      }
      BigInteger2.prototype.toArray = function(radix) {
        return toBase(this, radix);
      };
      SmallInteger.prototype.toArray = function(radix) {
        return toBase(this, radix);
      };
      NativeBigInt.prototype.toArray = function(radix) {
        return toBase(this, radix);
      };
      BigInteger2.prototype.toString = function(radix, alphabet) {
        if (radix === undefined$1)
          radix = 10;
        if (radix !== 10)
          return toBaseString(this, radix, alphabet);
        var v2 = this.value, l2 = v2.length, str = String(v2[--l2]), zeros = "0000000", digit;
        while (--l2 >= 0) {
          digit = String(v2[l2]);
          str += zeros.slice(digit.length) + digit;
        }
        var sign = this.sign ? "-" : "";
        return sign + str;
      };
      SmallInteger.prototype.toString = function(radix, alphabet) {
        if (radix === undefined$1)
          radix = 10;
        if (radix != 10)
          return toBaseString(this, radix, alphabet);
        return String(this.value);
      };
      NativeBigInt.prototype.toString = SmallInteger.prototype.toString;
      NativeBigInt.prototype.toJSON = BigInteger2.prototype.toJSON = SmallInteger.prototype.toJSON = function() {
        return this.toString();
      };
      BigInteger2.prototype.valueOf = function() {
        return parseInt(this.toString(), 10);
      };
      BigInteger2.prototype.toJSNumber = BigInteger2.prototype.valueOf;
      SmallInteger.prototype.valueOf = function() {
        return this.value;
      };
      SmallInteger.prototype.toJSNumber = SmallInteger.prototype.valueOf;
      NativeBigInt.prototype.valueOf = NativeBigInt.prototype.toJSNumber = function() {
        return parseInt(this.toString(), 10);
      };
      function parseStringValue(v2) {
        if (isPrecise(+v2)) {
          var x2 = +v2;
          if (x2 === truncate(x2))
            return supportsNativeBigInt ? new NativeBigInt(BigInt(x2)) : new SmallInteger(x2);
          throw new Error("Invalid integer: " + v2);
        }
        var sign = v2[0] === "-";
        if (sign)
          v2 = v2.slice(1);
        var split = v2.split(/e/i);
        if (split.length > 2)
          throw new Error("Invalid integer: " + split.join("e"));
        if (split.length === 2) {
          var exp = split[1];
          if (exp[0] === "+")
            exp = exp.slice(1);
          exp = +exp;
          if (exp !== truncate(exp) || !isPrecise(exp))
            throw new Error("Invalid integer: " + exp + " is not a valid exponent.");
          var text = split[0];
          var decimalPlace = text.indexOf(".");
          if (decimalPlace >= 0) {
            exp -= text.length - decimalPlace - 1;
            text = text.slice(0, decimalPlace) + text.slice(decimalPlace + 1);
          }
          if (exp < 0)
            throw new Error("Cannot include negative exponent part for integers");
          text += new Array(exp + 1).join("0");
          v2 = text;
        }
        var isValid = /^([0-9][0-9]*)$/.test(v2);
        if (!isValid)
          throw new Error("Invalid integer: " + v2);
        if (supportsNativeBigInt) {
          return new NativeBigInt(BigInt(sign ? "-" + v2 : v2));
        }
        var r2 = [], max2 = v2.length, l2 = LOG_BASE, min2 = max2 - l2;
        while (max2 > 0) {
          r2.push(+v2.slice(min2, max2));
          min2 -= l2;
          if (min2 < 0)
            min2 = 0;
          max2 -= l2;
        }
        trim(r2);
        return new BigInteger2(r2, sign);
      }
      function parseNumberValue(v2) {
        if (supportsNativeBigInt) {
          return new NativeBigInt(BigInt(v2));
        }
        if (isPrecise(v2)) {
          if (v2 !== truncate(v2))
            throw new Error(v2 + " is not an integer.");
          return new SmallInteger(v2);
        }
        return parseStringValue(v2.toString());
      }
      function parseValue(v2) {
        if (typeof v2 === "number") {
          return parseNumberValue(v2);
        }
        if (typeof v2 === "string") {
          return parseStringValue(v2);
        }
        if (typeof v2 === "bigint") {
          return new NativeBigInt(v2);
        }
        return v2;
      }
      for (var i2 = 0; i2 < 1e3; i2++) {
        Integer[i2] = parseValue(i2);
        if (i2 > 0)
          Integer[-i2] = parseValue(-i2);
      }
      Integer.one = Integer[1];
      Integer.zero = Integer[0];
      Integer.minusOne = Integer[-1];
      Integer.max = max;
      Integer.min = min;
      Integer.gcd = gcd;
      Integer.lcm = lcm;
      Integer.isInstance = function(x2) {
        return x2 instanceof BigInteger2 || x2 instanceof SmallInteger || x2 instanceof NativeBigInt;
      };
      Integer.randBetween = randBetween;
      Integer.fromArray = function(digits, base, isNegative) {
        return parseBaseFromArray(digits.map(parseValue), parseValue(base || 10), isNegative);
      };
      return Integer;
    }();
    if (module.hasOwnProperty("exports")) {
      module.exports = bigInt2;
    }
  })(BigInteger);
  const bigInt = BigInteger.exports;
  class MyRsa {
    constructor() {
      __publicField(this, "n");
      __publicField(this, "e");
      this.n = bigInt("8686980c0f5a24c4b9d43020cd2c22703ff3f450756529058b1cf88f09b8602136477198a6e2683149659bd122c33592fdb5ad47944ad1ea4d36c6b172aad6338c3bb6ac6227502d010993ac967d1aef00f0c8e038de2e4d3bc2ec368af2e9f10a6f1eda4f7262f136420c07c331b871bf139f74f3010e3c4fe57df3afb71683", 16);
      this.e = bigInt("10001", 16);
    }
    a2hex(byteArray) {
      var hexString = "";
      var nextHexByte;
      for (var i2 = 0; i2 < byteArray.length; i2++) {
        nextHexByte = byteArray[i2].toString(16);
        if (nextHexByte.length < 2) {
          nextHexByte = "0" + nextHexByte;
        }
        hexString += nextHexByte;
      }
      return hexString;
    }
    hex2a(hex) {
      var str = "";
      for (var i2 = 0; i2 < hex.length; i2 += 2) {
        str += String.fromCharCode(parseInt(hex.substr(i2, 2), 16));
      }
      return str;
    }
    pkcs1pad2(s2, n2) {
      if (n2 < s2.length + 11) {
        return null;
      }
      var ba = [];
      var i2 = s2.length - 1;
      while (i2 >= 0 && n2 > 0) {
        ba[--n2] = s2.charCodeAt(i2--);
      }
      ba[--n2] = 0;
      while (n2 > 2) {
        ba[--n2] = 255;
      }
      ba[--n2] = 2;
      ba[--n2] = 0;
      var c2 = this.a2hex(ba);
      return bigInt(c2, 16);
    }
    pkcs1unpad2(a2) {
      var b2 = a2.toString(16);
      if (b2.length % 2 !== 0) {
        b2 = "0" + b2;
      }
      var c2 = this.hex2a(b2);
      var i2 = 1;
      while (c2.charCodeAt(i2) !== 0) {
        i2++;
      }
      return c2.slice(i2 + 1);
    }
    encrypt(text) {
      var m2 = this.pkcs1pad2(text, 128);
      var c2 = m2.modPow(this.e, this.n);
      var h2 = c2.toString(16);
      while (h2.length < 128 * 2) {
        h2 = "0" + h2;
      }
      return h2;
    }
    decrypt(text) {
      var ba = [];
      var i2 = 0;
      while (i2 < text.length) {
        ba[i2] = text.charCodeAt(i2);
        i2 += 1;
      }
      var a2 = bigInt(this.a2hex(ba), 16);
      var c2 = a2.modPow(this.e, this.n);
      var d2 = this.pkcs1unpad2(c2);
      return d2;
    }
  }
  class Secret {
    constructor() {
      __publicField(this, "rsa");
      __publicField(this, "kts");
      __publicField(this, "keyS");
      __publicField(this, "keyL");
      this.rsa = new MyRsa();
      this.kts = [240, 229, 105, 174, 191, 220, 191, 138, 26, 69, 232, 190, 125, 166, 115, 184, 222, 143, 231, 196, 69, 218, 134, 196, 155, 100, 139, 20, 106, 180, 241, 170, 56, 1, 53, 158, 38, 105, 44, 134, 0, 107, 79, 165, 54, 52, 98, 166, 42, 150, 104, 24, 242, 74, 253, 189, 107, 151, 143, 77, 143, 137, 19, 183, 108, 142, 147, 237, 14, 13, 72, 62, 215, 47, 136, 216, 254, 254, 126, 134, 80, 149, 79, 209, 235, 131, 38, 52, 219, 102, 123, 156, 126, 157, 122, 129, 50, 234, 182, 51, 222, 58, 169, 89, 52, 102, 59, 170, 186, 129, 96, 72, 185, 213, 129, 156, 248, 108, 132, 119, 255, 84, 120, 38, 95, 190, 232, 30, 54, 159, 52, 128, 92, 69, 44, 155, 118, 213, 27, 143, 204, 195, 184, 245];
      this.keyS = [41, 35, 33, 94];
      this.keyL = [120, 6, 173, 76, 51, 134, 93, 24, 76, 1, 63, 70];
    }
    xor115Enc(src, srclen, key, keylen) {
      let i2, j2, k2, mod4, ref, ref1, ref2, ret;
      mod4 = srclen % 4;
      ret = [];
      if (mod4 !== 0) {
        for (i2 = j2 = 0, ref = mod4; ref >= 0 ? j2 < ref : j2 > ref; i2 = ref >= 0 ? ++j2 : --j2) {
          ret.push(src[i2] ^ key[i2 % keylen]);
        }
      }
      for (i2 = k2 = ref1 = mod4, ref2 = srclen; ref1 <= ref2 ? k2 < ref2 : k2 > ref2; i2 = ref1 <= ref2 ? ++k2 : --k2) {
        ret.push(src[i2] ^ key[(i2 - mod4) % keylen]);
      }
      return ret;
    }
    getkey(length, key) {
      let i2;
      if (key != null) {
        return (() => {
          let j2, ref, results;
          results = [];
          for (i2 = j2 = 0, ref = length; ref >= 0 ? j2 < ref : j2 > ref; i2 = ref >= 0 ? ++j2 : --j2) {
            results.push(key[i2] + this.kts[length * i2] & 255 ^ this.kts[length * (length - 1 - i2)]);
          }
          return results;
        })();
      }
      if (length === 12) {
        return this.keyL.slice(0);
      }
      return this.keyS.slice(0);
    }
    asymEncode(src, srclen) {
      let i2, j2, m2, ref, ret;
      m2 = 128 - 11;
      ret = "";
      for (i2 = j2 = 0, ref = Math.floor((srclen + m2 - 1) / m2); ref >= 0 ? j2 < ref : j2 > ref; i2 = ref >= 0 ? ++j2 : --j2) {
        ret += this.rsa.encrypt(this.bytesToString(src.slice(i2 * m2, Math.min((i2 + 1) * m2, srclen))));
      }
      return window.btoa(this.rsa.hex2a(ret));
    }
    asymDecode(src, srclen) {
      let i2, j2, m2, ref, ret;
      m2 = 128;
      ret = "";
      for (i2 = j2 = 0, ref = Math.floor((srclen + m2 - 1) / m2); ref >= 0 ? j2 < ref : j2 > ref; i2 = ref >= 0 ? ++j2 : --j2) {
        ret += this.rsa.decrypt(this.bytesToString(src.slice(i2 * m2, Math.min((i2 + 1) * m2, srclen))));
      }
      return this.stringToBytes(ret);
    }
    symEncode(src, srclen, key1, key2) {
      let k1, k2, ret;
      k1 = this.getkey(4, key1);
      k2 = this.getkey(12, key2);
      ret = this.xor115Enc(src, srclen, k1, 4);
      ret.reverse();
      ret = this.xor115Enc(ret, srclen, k2, 12);
      return ret;
    }
    symDecode(src, srclen, key1, key2) {
      let k1, k2, ret;
      k1 = this.getkey(4, key1);
      k2 = this.getkey(12, key2);
      ret = this.xor115Enc(src, srclen, k2, 12);
      ret.reverse();
      ret = this.xor115Enc(ret, srclen, k1, 4);
      return ret;
    }
    bytesToString(buf) {
      let i2, j2, len, ret;
      ret = "";
      for (j2 = 0, len = buf.length; j2 < len; j2++) {
        i2 = buf[j2];
        ret += String.fromCharCode(i2);
      }
      return ret;
    }
    stringToBytes(str) {
      let i2, j2, ref, ret;
      ret = [];
      for (i2 = j2 = 0, ref = str.length; ref >= 0 ? j2 < ref : j2 > ref; i2 = ref >= 0 ? ++j2 : --j2) {
        ret.push(str.charCodeAt(i2));
      }
      return ret;
    }
    encode(str, timestamp) {
      const key = this.stringToBytes(SparkMD5.hash(`!@###@#${timestamp}DFDR@#@#`));
      let temp = this.stringToBytes(str);
      temp = this.symEncode(temp, temp.length, key, null);
      temp = key.slice(0, 16).concat(temp);
      return {
        data: this.asymEncode(temp, temp.length),
        key
      };
    }
    decode(str, key) {
      let temp = this.stringToBytes(window.atob(str));
      temp = this.asymDecode(temp, temp.length);
      return this.bytesToString(this.symDecode(temp.slice(16), temp.length - 16, key, temp.slice(0, 16)));
    }
  }
  const secret = new Secret();
  class Resolve extends EventEmitter {
    constructor(fileList, folderList) {
      super();
      __publicField(this, "fileList", []);
      __publicField(this, "folderList", []);
      __publicField(this, "resolvedList", []);
      __publicField(this, "failList", []);
      __publicField(this, "execPromise", null);
      this.fileList = fileList;
      this.folderList = folderList;
    }
    immediately() {
      var _a2, _b2;
      (_b2 = (_a2 = this.execPromise) == null ? void 0 : _a2.resolve) == null ? void 0 : _b2.call(_a2);
    }
    async start(wait = false) {
      if (this.fileList.length === 0 && this.folderList.length === 0) {
        this.emit("end");
        return;
      }
      if (wait) {
        this.emit("waitStart");
        this.execPromise = new defer();
        await Promise.race([this.execPromise.promise, waitTime()]);
        this.execPromise = null;
      }
      if (this.folderList.length > 0) {
        await this._resolveFolderList();
      } else if (this.fileList.length > 0) {
        await this._resolveFileList();
      }
      this.start(true);
    }
    async _resolveFileList() {
      this.fileList.sort((a2, v2) => a2.fileSize - v2.fileSize);
      const item = this.fileList.shift();
      if (!item)
        return;
      this.emit("fileStart", item);
      const pickcode = item.pick_code;
      const now = Date.now();
      const timestamp = Math.floor(now / 1e3);
      const {
        data,
        key
      } = secret.encode(JSON.stringify({
        pickcode
      }), timestamp);
      return xhrPost(`https://proapi.115.com/app/chrome/downurl?t=${timestamp}`, `data=${encodeURIComponent(data)}`, {
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": getUA()
      }).then((json) => {
        if (json.state) {
          var str = secret.decode(json.data, key);
          const result = JSON.parse(str);
          const data2 = Object.values(result).pop();
          if (data2 && data2.url.url) {
            const resolveItem = {
              ...item,
              fileName: item.fileName.replace(/\\|\/|:|\*|\?|"|<|>|\|/g, "_").trim(),
              file_url: data2.url.url,
              file_size: parseInt(data2.file_size),
              cookie: json.cookie
            };
            this.resolvedList.push(resolveItem);
            this.emit("update", {
              type: "file-success",
              item: resolveItem,
              file: this.fileList.length,
              fail: this.failList.length,
              folder: this.folderList.length,
              resolved: this.resolvedList.length
            });
          } else {
            console.log("\u83B7\u53D6\u4E0B\u8F7D\u5730\u5740\u5931\u8D25");
            console.log(result);
            throw new Error("\u8FD4\u56DE\u9519\u8BEF");
          }
        } else {
          console.log("\u83B7\u53D6\u4E0B\u8F7D\u5730\u5740\u5931\u8D25");
          console.log(json);
          throw new Error("\u8BF7\u6C42\u9519\u8BEF");
        }
      }).catch(() => {
        console.log(item.fileName, item.tryTimes);
        if (item.tryTimes >= 3) {
          this.failList.push({
            ...item
          });
        } else {
          this.fileList.push({
            ...item,
            tryTimes: item.tryTimes + 1
          });
        }
        this.emit("update", {
          type: "file-failed",
          item,
          file: this.fileList.length,
          fail: this.failList.length,
          folder: this.folderList.length,
          resolved: this.resolvedList.length
        });
      });
    }
    async _resolveFolderList() {
      const waitItem = this.folderList.shift();
      if (!waitItem)
        return;
      this.emit("folderStart", waitItem);
      var limit = 1e3;
      const fetchList = (page2 = 0) => {
        return xhrGet(`https://webapi.115.com/files?aid=1&limit=${limit}&offset=${page2 * limit}&show_dir=1&cid=${waitItem.cate_id}`, {});
      };
      let page = 0;
      while (true) {
        const data = await fetchList(page);
        data.data.forEach((item) => {
          let _folderName = waitItem.folderName;
          _folderName = _folderName.replace(/\\|\/|:|\*|\?|"|<|>|\|/g, "_").trim();
          const parent = waitItem.parent ? `${waitItem.parent}/${_folderName}` : _folderName;
          if (!item.sha) {
            this.folderList.push({
              cate_id: item.cid,
              isdir: true,
              parent,
              folderName: item.n
            });
          } else {
            this.fileList.push({
              parent,
              isdir: false,
              sha1: item.sha,
              pick_code: item.pc,
              fileName: item.n,
              fileSize: item.s,
              tryTimes: 0
            });
          }
        });
        if (data.count > (page + 1) * limit) {
          page = page + 1;
          await waitTime();
        } else {
          break;
        }
      }
      this.emit("update", {
        type: "folder-success",
        item: waitItem,
        file: this.fileList.length,
        fail: this.failList.length,
        folder: this.folderList.length,
        resolved: this.resolvedList.length
      });
    }
    redo() {
      this.fileList = this.failList.map((s2) => ({
        ...s2,
        tryTimes: 0
      }));
      this.failList = [];
      this.start();
    }
  }
  const Message = ({
    pan115,
    visible,
    onClose
  }) => {
    const {
      selectedFile,
      selectedFolder
    } = pan115.selectFileList();
    const [interval_, setInterval_] = y(() => parseInt(getSetting().interval) || 300);
    const [aFail, setAFail] = y(0);
    const [aOk, setAOk] = y(0);
    const [file, setFile] = y(() => selectedFile.length);
    const [folder, setFolder] = y(() => selectedFolder.length);
    const [fail, setFail] = y(0);
    const [resolved, setResolved] = y(0);
    const [running, setRunning] = y(true);
    const [log, setLog] = y(o(p$1, {}));
    const [waiting, setWaiting] = y(false);
    const resolveRef = A();
    s(() => {
      const listenerId = o$1("115aria2_config", () => {
        setInterval_(() => parseInt(getSetting().interval) || 300);
      });
      return () => {
        d(listenerId);
      };
    }, []);
    s(() => {
      const downloadTool = new DownloadTool();
      const resolve = new Resolve(selectedFile, selectedFolder);
      resolveRef.current = resolve;
      resolve.on("update", function(e2) {
        var item = e2.item;
        if (item !== null && e2.type === "file-success") {
          downloadTool.sendToAria2(item).then((r2) => {
            setAOk((a2) => a2 + 1);
          }).catch((e22) => {
            console.log("\u5BFC\u5165\u5230aria2\u5931\u8D25");
            console.log(item);
            setAFail((a2) => a2 + 1);
          });
        } else if (e2.type === "folder-success")
          ;
        else if (e2.type === "file-failed")
          ;
        setFile(e2.file);
        setFolder(e2.folder);
        setRunning(true);
        setFail(e2.fail);
        setResolved(e2.resolved);
      });
      resolve.on("end", function() {
        setRunning(false);
      });
      resolve.on("waitStart", function() {
        setWaiting(true);
      });
      resolve.on("folderStart", function(item) {
        setWaiting(false);
        setLog(o("span", {
          style: {
            color: "green"
          },
          children: item.folderName
        }));
      });
      resolve.on("fileStart", function(item) {
        setWaiting(false);
        setLog(o("span", {
          style: {
            color: "blue"
          },
          children: item.fileName
        }));
      });
      resolve.start();
    }, []);
    const redo = () => {
      var _a2;
      setAFail(0);
      setAOk(0);
      setFile(() => {
        var _a3;
        return ((_a3 = resolveRef.current) == null ? void 0 : _a3.failList.length) || 0;
      });
      setFolder(0);
      setFail(0);
      setResolved(0);
      setRunning(true);
      setLog(o(p$1, {}));
      setWaiting(false);
      (_a2 = resolveRef.current) == null ? void 0 : _a2.redo();
    };
    const resolveObj = resolveRef.current;
    if (resolveObj == null)
      return null;
    return o(Modal$1, {
      width: 600,
      hideClose: true,
      isOpen: visible,
      onCloseClick: onClose,
      children: o("div", {
        style: {
          fontSize: 14
        },
        children: [o("div", {
          className: "bdp-row",
          children: [!running ? o("div", {
            children: "\u5168\u90E8\u83B7\u53D6\u5B8C\u6210"
          }) : folder === 0 ? o("div", {
            children: ["2. \u6B63\u5728\u89E3\u6790\u6587\u4EF6 \u5269\u4F59", file]
          }) : o("div", {
            children: ["1. \u6B63\u5728\u89E3\u6790\u6587\u4EF6\u5939 \u5269\u4F59", folder]
          }), running ? o("div", {
            style: {
              whiteSpace: "nowrap"
            },
            children: o("button", {
              onClick: () => resolveObj.immediately(),
              disabled: !waiting,
              children: "\u7ACB\u5373"
            })
          }) : null]
        }), o("div", {
          className: "bdp-row",
          children: running ? o(p$1, {
            children: o("div", {
              style: {
                color: waiting ? "" : "red"
              },
              children: [log, waiting ? o(WaitTime, {}) : "\u83B7\u53D6\u4E2D"]
            })
          }) : null
        }), running ? o("div", {
          children: ["\u4FEE\u6539\u7B49\u5F85\u65F6\u95F4", o("input", {
            type: "number",
            id: "115-aria2-change-interval"
          }), o("button", {
            onClick: (e2) => {
              var _a2;
              updateInterval(((_a2 = e2.target.parentElement.children[0]) == null ? void 0 : _a2.value) || "");
            },
            children: "ok"
          }), "\u5F53\u524D\u7B49\u5F85\u65F6\u95F4", o("span", {
            children: interval_
          }), " "]
        }) : null, o("div", {
          className: "bdp-row",
          children: [o("div", {
            children: "\u5DF2\u5BFC\u5165\u5230aria2"
          }), o("div", {
            style: {
              display: "flex"
            },
            children: [resolved, "/", o("span", {
              style: {
                color: "green"
              },
              children: aOk
            }), "/", o("span", {
              style: {
                color: "red"
              },
              children: aFail
            })]
          })]
        }), o("div", {
          hidden: fail === 0,
          className: "failList",
          children: resolveObj.failList.map((s2) => o("div", {
            children: s2.fileName
          }, s2.pick_code + "~" + s2.fileName))
        }), o("div", {
          style: {
            color: "red",
            marginTop: 5
          },
          hidden: aFail == 0,
          children: "\u6709\u6587\u4EF6\u5BFC\u5165\u5230aria2\u5931\u8D25, \u8BF7\u68C0\u67E5\u8BBE\u7F6E"
        }), running ? null : o("div", {
          className: "bdp-buttons",
          children: [o("button", {
            className: "bdp-buttons-close",
            onClick: onClose,
            style: {
              marginTop: 5,
              border: 0
            },
            children: "\u5173\u95ED"
          }), o("button", {
            className: "bdp-buttons-redo",
            hidden: fail === 0,
            style: {
              color: "#fff",
              marginTop: 5,
              width: "100%",
              border: 0,
              background: "#09aaff"
            },
            onClick: redo,
            children: "\u91CD\u65B0\u4E0B\u8F7D\u5931\u8D25\u6587\u4EF6"
          })]
        })]
      })
    });
  };
  function WaitTime() {
    const [timeO] = y(() => parseInt(getSetting().interval) || 300);
    const [time, setTime] = y(() => parseInt(getSetting().interval) || 300);
    const [now] = y(Date.now);
    s(() => {
      const timer = setInterval(() => {
        setTime(() => timeO + now - Date.now());
      }, 50);
      return () => clearInterval(timer);
    }, []);
    return o(p$1, {
      children: ["\u5B8C\u6210,\u7B49\u5F85", (time / 1e3 || 0).toFixed(1), "\u79D2"]
    });
  }
  const Setting = (props) => {
    const [data, setData] = y(getSetting);
    const change = (e2) => {
      const {
        name,
        value,
        checked,
        type
      } = e2.target;
      const newValue = type === "checkbox" ? checked : value;
      setData((o2) => ({
        ...o2,
        [name]: newValue
      }));
    };
    const save = () => {
      const newData = {
        ...data
      };
      newData.interval = newData.interval || "300";
      newData.checkMin = newData.checkMin || "0";
      saveSetting(newData);
      props.onClose();
    };
    return o(Modal$1, {
      isOpen: props.visible,
      onCloseClick: props.onClose,
      children: o("table", {
        className: "bdp-setting",
        children: [o("tr", {
          children: [o("td", {
            children: "aria2\u5730\u5740"
          }), o("td", {
            children: o("input", {
              type: "text",
              name: "url",
              value: data.url,
              onChange: change,
              placeholder: defaultSetting.url
            })
          })]
        }), o("tr", {
          children: [o("td", {
            children: "aria2token"
          }), o("td", {
            children: o("input", {
              type: "text",
              name: "token",
              value: data.token,
              onChange: change
            })
          })]
        }), o("tr", {
          children: [o("td", {
            children: "aria2\u4E0B\u8F7D\u76EE\u5F55"
          }), o("td", {
            children: o("input", {
              type: "text",
              name: "dir",
              value: data.dir,
              onChange: change,
              placeholder: "\u9ED8\u8BA4\u503C\u4E3A\u7A7A, \u4EE3\u8868aria2\u914D\u7F6E\u6587\u4EF6\u91CC\u7684\u4E0B\u8F7D\u76EE\u5F55"
            })
          })]
        }), o("tr", {
          children: [o("td", {
            children: "\u6587\u4EF6\u6821\u9A8C"
          }), o("td", {
            children: [o("input", {
              type: "checkbox",
              name: "check",
              checked: data.check,
              onChange: change
            }), "\u5F53\u6587\u4EF6\u5927\u5C0F\u2265", o("input", {
              type: "number",
              name: "checkMin",
              value: data.checkMin,
              onChange: change,
              placeholder: defaultSetting.checkMin
            }), "Mb"]
          })]
        }), o("tr", {
          children: [o("td", {
            children: "\u8BF7\u6C42\u95F4\u9694"
          }), o("td", {
            children: [o("input", {
              type: "number",
              name: "interval",
              value: data.interval,
              onChange: change,
              placeholder: defaultSetting.interval
            }), "ms"]
          })]
        }), o("tr", {
          children: [o("td", {
            title: "",
            children: "\u81EA\u5B9A\u4E49UA"
          }), o("td", {
            children: [o("input", {
              type: "checkbox",
              name: "useSystemUserAgent",
              checked: data.useSystemUserAgent,
              onChange: change
            }), "\u4F7F\u7528\u6D4F\u89C8\u5668UA", o("input", {
              type: "text",
              name: "customUserAgent",
              disabled: data.useSystemUserAgent,
              value: data.customUserAgent,
              onChange: change
            })]
          })]
        }), o("tr", {
          children: [o("td", {
            children: o("button", {
              onClick: props.onClose,
              children: "\u53D6\u6D88"
            })
          }), o("td", {
            children: o("button", {
              onClick: save,
              children: "\u4FDD\u5B58"
            })
          })]
        })]
      })
    });
  };
  function App(props) {
    const {
      pan115
    } = props;
    const [setting, setSetting] = y(false);
    const [messageVisible, setMessageVisible] = y(false);
    const click = q$1(async (e2) => {
      e2.stopPropagation();
      e2.preventDefault();
      const aria2url = getSetting().url;
      if (!aria2url)
        return setSetting(true);
      const {
        selectedFile,
        selectedFolder
      } = pan115.selectFileList();
      if (selectedFile.length == 0 && selectedFolder.length == 0)
        return;
      setMessageVisible(true);
    }, []);
    return o(p$1, {
      children: [o("button", {
        onClick: click,
        onContextMenu: q$1((e2) => {
          e2.stopPropagation();
          e2.preventDefault();
          setSetting(true);
        }, []),
        className: "bdp-button button",
        title: "\u9F20\u6807\u5DE6\u952E\u4E0B\u8F7D\u6587\u4EF6, \u53F3\u952E\u6253\u5F00\u8BBE\u7F6E",
        children: o("span", {
          className: "bdp-button-text",
          children: "ARIA2"
        })
      }), o(Setting, {
        visible: setting,
        onClose: () => {
          setSetting(false);
        }
      }), messageVisible && o(Message, {
        visible: messageVisible,
        pan115,
        onClose: () => {
          setMessageVisible(false);
        }
      })]
    });
  }
  const index = "";
  class Pan115 {
    constructor() {
      this._initUi();
    }
    selectFileList() {
      const list = document.querySelectorAll('li[rel="item"].selected');
      return this._selectFileList(list);
    }
    _selectFileList(list) {
      const selectedFile = [];
      const selectedFolder = [];
      Array.from(list).forEach((item) => {
        const type = item.getAttribute("file_type");
        if (type === "1") {
          selectedFile.push({
            isdir: false,
            sha1: item.getAttribute("sha1"),
            pick_code: item.getAttribute("pick_code"),
            parent: "",
            fileName: item.getAttribute("title"),
            fileSize: Number(item.getAttribute("file_size")) || 0,
            tryTimes: 0
          });
        }
        if (type === "0") {
          selectedFolder.push({
            isdir: true,
            cate_id: item.getAttribute("cate_id"),
            parent: "",
            folderName: item.getAttribute("title")
          });
        }
      });
      return {
        selectedFile,
        selectedFolder
      };
    }
    async fetchFolder(folderItem) {
      var result = [];
      return result;
    }
    async _initUi() {
      var select = "#js_top_panel_box";
      let $toolWrap = document.querySelector(select);
      while (!$toolWrap) {
        await new Promise((r2) => setTimeout(r2, 20));
        $toolWrap = document.querySelector(select);
      }
      P$1(o(App, {
        pan115: this
      }), $toolWrap);
    }
  }
  new Pan115();
  exports.Pan115 = Pan115;
  Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
  return exports;
}({});
