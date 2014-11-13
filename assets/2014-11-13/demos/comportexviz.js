if(typeof Math.imul == "undefined" || (Math.imul(0xffffffff,5) == 0)) {
    Math.imul = function (a, b) {
        var ah  = (a >>> 16) & 0xffff;
        var al = a & 0xffff;
        var bh  = (b >>> 16) & 0xffff;
        var bl = b & 0xffff;
        // the shift by 0 fixes the sign on the high part
        // the final |0 converts the unsigned value into a signed value
        return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0)|0);
    }
}

;(function(){
var k, aa = this;
function ba(a) {
  return void 0 !== a;
}
function m(a) {
  var b = typeof a;
  if ("object" == b) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return b;
      }
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) {
        return "object";
      }
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == b && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return b;
}
function ca(a) {
  var b = m(a);
  return "array" == b || "object" == b && "number" == typeof a.length;
}
function da(a) {
  return "string" == typeof a;
}
function ea(a) {
  return "function" == m(a);
}
function fa(a) {
  var b = typeof a;
  return "object" == b && null != a || "function" == b;
}
var ja = "closure_uid_" + (1E9 * Math.random() >>> 0), la = 0;
function ma(a, b, c) {
  return a.call.apply(a.bind, arguments);
}
function sa(a, b, c) {
  if (!a) {
    throw Error();
  }
  if (2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, d);
      return a.apply(b, c);
    };
  }
  return function() {
    return a.apply(b, arguments);
  };
}
function ta(a, b, c) {
  ta = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ma : sa;
  return ta.apply(null, arguments);
}
function ua(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = c.slice();
    b.push.apply(b, arguments);
    return a.apply(this, b);
  };
}
function va(a, b) {
  var c = a.split("."), d = aa;
  c[0] in d || !d.execScript || d.execScript("var " + c[0]);
  for (var e;c.length && (e = c.shift());) {
    !c.length && ba(b) ? d[e] = b : d = d[e] ? d[e] : d[e] = {};
  }
}
function wa(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.hh = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a;
  a.pd = function(a, c, f) {
    return b.prototype[c].apply(a, Array.prototype.slice.call(arguments, 2));
  };
}
;var xa;
function za(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
}
function Aa(a) {
  if (!Ba.test(a)) {
    return a;
  }
  -1 != a.indexOf("\x26") && (a = a.replace(Da, "\x26amp;"));
  -1 != a.indexOf("\x3c") && (a = a.replace(Ea, "\x26lt;"));
  -1 != a.indexOf("\x3e") && (a = a.replace(Ga, "\x26gt;"));
  -1 != a.indexOf('"') && (a = a.replace(Ia, "\x26quot;"));
  -1 != a.indexOf("'") && (a = a.replace(Ja, "\x26#39;"));
  -1 != a.indexOf("\x00") && (a = a.replace(Ka, "\x26#0;"));
  return a;
}
var Da = /&/g, Ea = /</g, Ga = />/g, Ia = /"/g, Ja = /'/g, Ka = /\x00/g, Ba = /[\x00&<>"']/;
function La(a) {
  return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
}
function Ma(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}
function Na(a) {
  return String(a).replace(/\-([a-z])/g, function(a, c) {
    return c.toUpperCase();
  });
}
function Oa(a) {
  var b = da(void 0) ? La(void 0) : "\\s";
  return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(a, b, e) {
    return b + e.toUpperCase();
  });
}
;var Pa = Array.prototype, Qa = Pa.indexOf ? function(a, b, c) {
  return Pa.indexOf.call(a, b, c);
} : function(a, b, c) {
  c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if (da(a)) {
    return da(b) && 1 == b.length ? a.indexOf(b, c) : -1;
  }
  for (;c < a.length;c++) {
    if (c in a && a[c] === b) {
      return c;
    }
  }
  return-1;
}, Ra = Pa.forEach ? function(a, b, c) {
  Pa.forEach.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = da(a) ? a.split("") : a, f = 0;f < d;f++) {
    f in e && b.call(c, e[f], f, a);
  }
};
function Sa(a) {
  var b = a.length;
  if (0 < b) {
    for (var c = Array(b), d = 0;d < b;d++) {
      c[d] = a[d];
    }
    return c;
  }
  return[];
}
function Ua(a, b) {
  a.sort(b || Va);
}
function Wa(a, b) {
  for (var c = 0;c < a.length;c++) {
    a[c] = {index:c, value:a[c]};
  }
  var d = b || Va;
  Ua(a, function(a, b) {
    return d(a.value, b.value) || a.index - b.index;
  });
  for (c = 0;c < a.length;c++) {
    a[c] = a[c].value;
  }
}
function Va(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
}
;var Xa;
a: {
  var Za = aa.navigator;
  if (Za) {
    var $a = Za.userAgent;
    if ($a) {
      Xa = $a;
      break a;
    }
  }
  Xa = "";
}
;var ab = -1 != Xa.indexOf("Opera") || -1 != Xa.indexOf("OPR"), bb = -1 != Xa.indexOf("Trident") || -1 != Xa.indexOf("MSIE"), cb = -1 != Xa.indexOf("Gecko") && -1 == Xa.toLowerCase().indexOf("webkit") && !(-1 != Xa.indexOf("Trident") || -1 != Xa.indexOf("MSIE")), eb = -1 != Xa.toLowerCase().indexOf("webkit");
function fb() {
  var a = aa.document;
  return a ? a.documentMode : void 0;
}
var jb = function() {
  var a = "", b;
  if (ab && aa.opera) {
    return a = aa.opera.version, ea(a) ? a() : a;
  }
  cb ? b = /rv\:([^\);]+)(\)|;)/ : bb ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : eb && (b = /WebKit\/(\S+)/);
  b && (a = (a = b.exec(Xa)) ? a[1] : "");
  return bb && (b = fb(), b > parseFloat(a)) ? String(b) : a;
}(), kb = {};
function lb(a) {
  var b;
  if (!(b = kb[a])) {
    b = 0;
    for (var c = za(String(jb)).split("."), d = za(String(a)).split("."), e = Math.max(c.length, d.length), f = 0;0 == b && f < e;f++) {
      var g = c[f] || "", h = d[f] || "", l = RegExp("(\\d*)(\\D*)", "g"), p = RegExp("(\\d*)(\\D*)", "g");
      do {
        var r = l.exec(g) || ["", "", ""], t = p.exec(h) || ["", "", ""];
        if (0 == r[0].length && 0 == t[0].length) {
          break;
        }
        b = Ma(0 == r[1].length ? 0 : parseInt(r[1], 10), 0 == t[1].length ? 0 : parseInt(t[1], 10)) || Ma(0 == r[2].length, 0 == t[2].length) || Ma(r[2], t[2]);
      } while (0 == b);
    }
    b = kb[a] = 0 <= b;
  }
  return b;
}
var mb = aa.document, nb = mb && bb ? fb() || ("CSS1Compat" == mb.compatMode ? parseInt(jb, 10) : 5) : void 0;
var ob = !bb || bb && 9 <= nb;
!cb && !bb || bb && bb && 9 <= nb || cb && lb("1.9.1");
var pb = bb && !lb("9");
function qb(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
}
var rb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function sb(a, b) {
  for (var c, d, e = 1;e < arguments.length;e++) {
    d = arguments[e];
    for (c in d) {
      a[c] = d[c];
    }
    for (var f = 0;f < rb.length;f++) {
      c = rb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
}
;function vb(a) {
  return a ? new wb(xb(a)) : xa || (xa = new wb);
}
function yb(a, b) {
  var c = b && "*" != b ? b.toUpperCase() : "";
  return a.querySelectorAll && a.querySelector && c ? a.querySelectorAll(c + "") : a.getElementsByTagName(c || "*");
}
function zb(a, b) {
  qb(b, function(b, d) {
    "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in Ab ? a.setAttribute(Ab[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b;
  });
}
var Ab = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", frameborder:"frameBorder", height:"height", maxlength:"maxLength", role:"role", rowspan:"rowSpan", type:"type", usemap:"useMap", valign:"vAlign", width:"width"};
function Db(a, b, c, d) {
  function e(c) {
    c && b.appendChild(da(c) ? a.createTextNode(c) : c);
  }
  for (;d < c.length;d++) {
    var f = c[d];
    !ca(f) || fa(f) && 0 < f.nodeType ? e(f) : Ra(Fb(f) ? Sa(f) : f, e);
  }
}
function Gb(a) {
  return void 0 != a.firstElementChild ? a.firstElementChild : Hb(a.firstChild);
}
function Hb(a) {
  for (;a && 1 != a.nodeType;) {
    a = a.nextSibling;
  }
  return a;
}
function xb(a) {
  return 9 == a.nodeType ? a : a.ownerDocument || a.document;
}
var Ib = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, Jb = {IMG:" ", BR:"\n"};
function Nb(a, b, c) {
  if (!(a.nodeName in Ib)) {
    if (3 == a.nodeType) {
      c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
    } else {
      if (a.nodeName in Jb) {
        b.push(Jb[a.nodeName]);
      } else {
        for (a = a.firstChild;a;) {
          Nb(a, b, c), a = a.nextSibling;
        }
      }
    }
  }
}
function Fb(a) {
  if (a && "number" == typeof a.length) {
    if (fa(a)) {
      return "function" == typeof a.item || "string" == typeof a.item;
    }
    if (ea(a)) {
      return "function" == typeof a.item;
    }
  }
  return!1;
}
function wb(a) {
  this.Tc = a || aa.document || document;
}
k = wb.prototype;
k.Ec = function(a, b, c) {
  var d = this.Tc, e = arguments, f = e[0], g = e[1];
  if (!ob && g && (g.name || g.type)) {
    f = ["\x3c", f];
    g.name && f.push(' name\x3d"', Aa(g.name), '"');
    if (g.type) {
      f.push(' type\x3d"', Aa(g.type), '"');
      var h = {};
      sb(h, g);
      delete h.type;
      g = h;
    }
    f.push("\x3e");
    f = f.join("");
  }
  f = d.createElement(f);
  g && (da(g) ? f.className = g : "array" == m(g) ? f.className = g.join(" ") : zb(f, g));
  2 < e.length && Db(d, f, e, 2);
  return f;
};
k.createElement = function(a) {
  return this.Tc.createElement(a);
};
k.createTextNode = function(a) {
  return this.Tc.createTextNode(String(a));
};
k.appendChild = function(a, b) {
  a.appendChild(b);
};
k.append = function(a, b) {
  Db(xb(a), a, arguments, 1);
};
k.contains = function(a, b) {
  if (a.contains && 1 == b.nodeType) {
    return a == b || a.contains(b);
  }
  if ("undefined" != typeof a.compareDocumentPosition) {
    return a == b || Boolean(a.compareDocumentPosition(b) & 16);
  }
  for (;b && a != b;) {
    b = b.parentNode;
  }
  return b == a;
};
function Ob(a, b) {
  if (a.classList) {
    a.classList.add(b);
  } else {
    var c;
    a.classList ? c = !a.classList.contains(b) : (a.classList ? c = a.classList : (c = a.className, c = da(c) && c.match(/\S+/g) || []), c = !(0 <= Qa(c, b)));
    c && (a.className += 0 < a.className.length ? " " + b : b);
  }
}
;var Pb = !bb || bb && 9 <= nb, Rb = bb && !lb("9");
!eb || lb("528");
cb && lb("1.9b") || bb && lb("8") || ab && lb("9.5") || eb && lb("528");
cb && !lb("8") || bb && lb("9");
function Tb() {
  0 != Ub && (this[ja] || (this[ja] = ++la));
}
var Ub = 0;
function Vb(a, b) {
  this.type = a;
  this.currentTarget = this.target = b;
  this.defaultPrevented = this.$c = !1;
  this.Of = !0;
}
Vb.prototype.preventDefault = function() {
  this.defaultPrevented = !0;
  this.Of = !1;
};
function Wb(a) {
  Wb[" "](a);
  return a;
}
Wb[" "] = function() {
};
function Xb(a, b) {
  Vb.call(this, a ? a.type : "");
  this.relatedTarget = this.currentTarget = this.target = null;
  this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
  this.mf = this.state = null;
  if (a) {
    var c = this.type = a.type;
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    var d = a.relatedTarget;
    if (d) {
      if (cb) {
        var e;
        a: {
          try {
            Wb(d.nodeName);
            e = !0;
            break a;
          } catch (f) {
          }
          e = !1;
        }
        e || (d = null);
      }
    } else {
      "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
    }
    this.relatedTarget = d;
    this.offsetX = eb || void 0 !== a.offsetX ? a.offsetX : a.layerX;
    this.offsetY = eb || void 0 !== a.offsetY ? a.offsetY : a.layerY;
    this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
    this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
    this.screenX = a.screenX || 0;
    this.screenY = a.screenY || 0;
    this.button = a.button;
    this.keyCode = a.keyCode || 0;
    this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.state = a.state;
    this.mf = a;
    a.defaultPrevented && this.preventDefault();
  }
}
wa(Xb, Vb);
Xb.prototype.preventDefault = function() {
  Xb.hh.preventDefault.call(this);
  var a = this.mf;
  if (a.preventDefault) {
    a.preventDefault();
  } else {
    if (a.returnValue = !1, Rb) {
      try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1;
        }
      } catch (b) {
      }
    }
  }
};
var Yb = "closure_listenable_" + (1E6 * Math.random() | 0), Zb = 0;
function $b(a, b, c, d, e) {
  this.Jc = a;
  this.Nd = null;
  this.src = b;
  this.type = c;
  this.sd = !!d;
  this.Vb = e;
  this.key = ++Zb;
  this.ad = this.rd = !1;
}
function ac(a) {
  a.ad = !0;
  a.Jc = null;
  a.Nd = null;
  a.src = null;
  a.Vb = null;
}
;function bc(a) {
  this.src = a;
  this.Hb = {};
  this.Od = 0;
}
bc.prototype.add = function(a, b, c, d, e) {
  var f = a.toString();
  a = this.Hb[f];
  a || (a = this.Hb[f] = [], this.Od++);
  var g = cc(a, b, d, e);
  -1 < g ? (b = a[g], c || (b.rd = !1)) : (b = new $b(b, this.src, f, !!d, e), b.rd = c, a.push(b));
  return b;
};
bc.prototype.remove = function(a, b, c, d) {
  a = a.toString();
  if (!(a in this.Hb)) {
    return!1;
  }
  var e = this.Hb[a];
  b = cc(e, b, c, d);
  return-1 < b ? (ac(e[b]), Pa.splice.call(e, b, 1), 0 == e.length && (delete this.Hb[a], this.Od--), !0) : !1;
};
function dc(a, b) {
  var c = b.type;
  if (c in a.Hb) {
    var d = a.Hb[c], e = Qa(d, b), f;
    (f = 0 <= e) && Pa.splice.call(d, e, 1);
    f && (ac(b), 0 == a.Hb[c].length && (delete a.Hb[c], a.Od--));
  }
}
bc.prototype.oe = function(a, b, c, d) {
  a = this.Hb[a.toString()];
  var e = -1;
  a && (e = cc(a, b, c, d));
  return-1 < e ? a[e] : null;
};
function cc(a, b, c, d) {
  for (var e = 0;e < a.length;++e) {
    var f = a[e];
    if (!f.ad && f.Jc == b && f.sd == !!c && f.Vb == d) {
      return e;
    }
  }
  return-1;
}
;var ec = "closure_lm_" + (1E6 * Math.random() | 0), fc = {}, gc = 0;
function ic(a, b, c, d, e) {
  if ("array" == m(b)) {
    for (var f = 0;f < b.length;f++) {
      ic(a, b[f], c, d, e);
    }
    return null;
  }
  c = kc(c);
  if (a && a[Yb]) {
    a = a.zg(b, c, d, e);
  } else {
    if (!b) {
      throw Error("Invalid event type");
    }
    var f = !!d, g = lc(a);
    g || (a[ec] = g = new bc(a));
    c = g.add(b, c, !1, d, e);
    c.Nd || (d = mc(), c.Nd = d, d.src = a, d.Jc = c, a.addEventListener ? a.addEventListener(b.toString(), d, f) : a.attachEvent(nc(b.toString()), d), gc++);
    a = c;
  }
  return a;
}
function mc() {
  var a = oc, b = Pb ? function(c) {
    return a.call(b.src, b.Jc, c);
  } : function(c) {
    c = a.call(b.src, b.Jc, c);
    if (!c) {
      return c;
    }
  };
  return b;
}
function pc(a, b, c, d, e) {
  if ("array" == m(b)) {
    for (var f = 0;f < b.length;f++) {
      pc(a, b[f], c, d, e);
    }
  } else {
    c = kc(c), a && a[Yb] ? a.kh(b, c, d, e) : a && (a = lc(a)) && (b = a.oe(b, c, !!d, e)) && sc(b);
  }
}
function sc(a) {
  if ("number" != typeof a && a && !a.ad) {
    var b = a.src;
    if (b && b[Yb]) {
      dc(b.Xc, a);
    } else {
      var c = a.type, d = a.Nd;
      b.removeEventListener ? b.removeEventListener(c, d, a.sd) : b.detachEvent && b.detachEvent(nc(c), d);
      gc--;
      (c = lc(b)) ? (dc(c, a), 0 == c.Od && (c.src = null, b[ec] = null)) : ac(a);
    }
  }
}
function nc(a) {
  return a in fc ? fc[a] : fc[a] = "on" + a;
}
function uc(a, b, c, d) {
  var e = 1;
  if (a = lc(a)) {
    if (b = a.Hb[b.toString()]) {
      for (b = b.concat(), a = 0;a < b.length;a++) {
        var f = b[a];
        f && f.sd == c && !f.ad && (e &= !1 !== vc(f, d));
      }
    }
  }
  return Boolean(e);
}
function vc(a, b) {
  var c = a.Jc, d = a.Vb || a.src;
  a.rd && sc(a);
  return c.call(d, b);
}
function oc(a, b) {
  if (a.ad) {
    return!0;
  }
  if (!Pb) {
    var c;
    if (!(c = b)) {
      a: {
        c = ["window", "event"];
        for (var d = aa, e;e = c.shift();) {
          if (null != d[e]) {
            d = d[e];
          } else {
            c = null;
            break a;
          }
        }
        c = d;
      }
    }
    e = c;
    c = new Xb(e, this);
    d = !0;
    if (!(0 > e.keyCode || void 0 != e.returnValue)) {
      a: {
        var f = !1;
        if (0 == e.keyCode) {
          try {
            e.keyCode = -1;
            break a;
          } catch (g) {
            f = !0;
          }
        }
        if (f || void 0 == e.returnValue) {
          e.returnValue = !0;
        }
      }
      e = [];
      for (f = c.currentTarget;f;f = f.parentNode) {
        e.push(f);
      }
      for (var f = a.type, h = e.length - 1;!c.$c && 0 <= h;h--) {
        c.currentTarget = e[h], d &= uc(e[h], f, !0, c);
      }
      for (h = 0;!c.$c && h < e.length;h++) {
        c.currentTarget = e[h], d &= uc(e[h], f, !1, c);
      }
    }
    return d;
  }
  return vc(a, new Xb(b, this));
}
function lc(a) {
  a = a[ec];
  return a instanceof bc ? a : null;
}
var wc = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
function kc(a) {
  if (ea(a)) {
    return a;
  }
  a[wc] || (a[wc] = function(b) {
    return a.handleEvent(b);
  });
  return a[wc];
}
;function xc() {
  Tb.call(this);
  this.Xc = new bc(this);
  this.Tf = this;
  this.Nf = null;
}
wa(xc, Tb);
xc.prototype[Yb] = !0;
k = xc.prototype;
k.addEventListener = function(a, b, c, d) {
  ic(this, a, b, c, d);
};
k.removeEventListener = function(a, b, c, d) {
  pc(this, a, b, c, d);
};
k.dispatchEvent = function(a) {
  var b, c = this.Nf;
  if (c) {
    for (b = [];c;c = c.Nf) {
      b.push(c);
    }
  }
  var c = this.Tf, d = a.type || a;
  if (da(a)) {
    a = new Vb(a, c);
  } else {
    if (a instanceof Vb) {
      a.target = a.target || c;
    } else {
      var e = a;
      a = new Vb(d, c);
      sb(a, e);
    }
  }
  var e = !0, f;
  if (b) {
    for (var g = b.length - 1;!a.$c && 0 <= g;g--) {
      f = a.currentTarget = b[g], e = yc(f, d, !0, a) && e;
    }
  }
  a.$c || (f = a.currentTarget = c, e = yc(f, d, !0, a) && e, a.$c || (e = yc(f, d, !1, a) && e));
  if (b) {
    for (g = 0;!a.$c && g < b.length;g++) {
      f = a.currentTarget = b[g], e = yc(f, d, !1, a) && e;
    }
  }
  return e;
};
k.zg = function(a, b, c, d) {
  return this.Xc.add(String(a), b, !1, c, d);
};
k.kh = function(a, b, c, d) {
  this.Xc.remove(String(a), b, c, d);
};
function yc(a, b, c, d) {
  b = a.Xc.Hb[String(b)];
  if (!b) {
    return!0;
  }
  b = b.concat();
  for (var e = !0, f = 0;f < b.length;++f) {
    var g = b[f];
    if (g && !g.ad && g.sd == c) {
      var h = g.Jc, l = g.Vb || g.src;
      g.rd && dc(a.Xc, g);
      e = !1 !== h.call(l, d) && e;
    }
  }
  return e && !1 != d.Of;
}
k.oe = function(a, b, c, d) {
  return this.Xc.oe(String(a), b, c, d);
};
function Ec(a, b, c) {
  a: {
    if (c = Na(c), void 0 === a.style[c]) {
      var d = (eb ? "Webkit" : cb ? "Moz" : bb ? "ms" : ab ? "O" : null) + Oa(c);
      if (void 0 !== a.style[d]) {
        c = d;
        break a;
      }
    }
  }
  c && (a.style[c] = b);
}
function Fc(a) {
  bb && ba(a.cssText) ? a.cssText = ".goog-tabpane-clear { clear: both; height: 0px; overflow: hidden }" : a.innerHTML = ".goog-tabpane-clear { clear: both; height: 0px; overflow: hidden }";
}
;function Gc(a, b, c, d) {
  xc.call(this);
  this.Uc = c || vb();
  this.Hd = a;
  this.Kb = [];
  this.jh = b ? b : Hc;
  this.lh = !!d;
  this.Hd.className = "goog-tabpane";
  a = [];
  for (b = Gb(this.Hd);b;) {
    a.push(b), b = void 0 != b.nextElementSibling ? b.nextElementSibling : Hb(b.nextSibling);
  }
  this.Ob = this.Uc.Ec("ul", {className:"goog-tabpane-tabs", tabIndex:"0"});
  this.Ub = this.Uc.Ec("div", "goog-tabpane-cont");
  this.Hd.appendChild(this.Ub);
  b = this.Hd;
  switch(this.jh) {
    case Hc:
      b.insertBefore(this.Ob, this.Ub);
      b.insertBefore(Ic(this), this.Ub);
      Ob(b, "goog-tabpane-top");
      break;
    case 1:
      b.appendChild(this.Ob);
      b.appendChild(Ic(this));
      Ob(b, "goog-tabpane-bottom");
      break;
    case 2:
      b.insertBefore(this.Ob, this.Ub);
      Ob(b, "goog-tabpane-left");
      break;
    case 3:
      b.insertBefore(this.Ob, this.Ub);
      Ob(b, "goog-tabpane-right");
      break;
    default:
      throw Error("Invalid tab location");;
  }
  this.Ob.tabIndex = 0;
  ic(this.Ob, this.lh ? "mousedown" : "click", this.Qg, !1, this);
  ic(this.Ob, "keydown", this.Rg, !1, this);
  for (b = 0;c = a[b];b++) {
    c = new Jc(c);
    if (c.Mc && c.Mc != this && c.Mc instanceof Gc) {
      d = c.Mc;
      var e = c;
      "number" == typeof e && (e = d.Kb[e]);
      d.Kb.splice(e.Hc, 1);
      var f = e;
      f.Mc = null;
      f.Hc = ba(void 0) ? void 0 : null;
      (f = e.Gd) && f.parentNode && f.parentNode.removeChild(f);
      (e = e.Ub) && e.parentNode && e.parentNode.removeChild(e);
      f = void 0;
      for (e = 0;f = d.Kb[e];e++) {
        var g = e;
        f.Mc = d;
        f.Hc = ba(g) ? g : null;
      }
    }
    d = this.Kb.length;
    ba(void 0) && void 0 != d ? (d = void 0, this.Kb.splice(d, 0, c), this.Ob.insertBefore(c.Gd, this.Ob.childNodes[d])) : (this.Kb.push(c), this.Ob.appendChild(c.Gd));
    e = c;
    f = d;
    e.Mc = this;
    e.Hc = ba(f) ? f : null;
    this.Yb || (this.Yb = c, this.dispatchEvent(new Kc("change", this, this.Yb)));
    this.Ub.appendChild(c.Ub);
    Lc(c, c == this.Yb);
    c = void 0;
    for (d += 1;c = this.Kb[d];d++) {
      c.Hc = d;
    }
  }
}
wa(Gc, xc);
var Hc = 0;
function Ic(a) {
  var b = vb(void 0), c = null, d = b.Tc;
  bb && d.createStyleSheet ? (c = d.createStyleSheet(), Fc(c)) : (d = yb(b.Tc, "head")[0], d || (c = yb(b.Tc, "body")[0], d = b.Ec("head"), c.parentNode.insertBefore(d, c)), c = b.Ec("style"), Fc(c), b.appendChild(d, c));
  return a.Uc.Ec("div", "goog-tabpane-clear");
}
function Mc(a, b) {
  if (0 <= b && b < a.Kb.length) {
    var c = a.Kb[b];
    !c.isEnabled() || a.Yb && c == a.Yb || (Lc(a.Yb, !1), Lc(c, !0), a.Yb = c, a.dispatchEvent(new Kc("change", a, a.Yb)));
  }
}
Gc.prototype.Qg = function(a) {
  for (var b = a.target;b != this.Ob;) {
    if ("LI" == b.tagName) {
      var c;
      for (c = 0;b = b.previousSibling;c++) {
      }
      Mc(this, c);
      break;
    }
    b = b.parentNode;
  }
  a.preventDefault();
};
Gc.prototype.Rg = function(a) {
  if (!(a.altKey || a.metaKey || a.ctrlKey)) {
    switch(a.keyCode) {
      case 37:
        a = this.Yb.Hc - 1;
        Mc(this, 0 > a ? this.Kb.length - 1 : a);
        break;
      case 39:
        a = this.Yb.Hc + 1;
        Mc(this, a >= this.Kb.length ? 0 : a);
        break;
      case 36:
        Mc(this, 0);
        break;
      case 35:
        Mc(this, this.Kb.length - 1);
    }
  }
};
function Jc(a, b, c) {
  var d, e;
  if (da(a) && !ba(b)) {
    d = a;
  } else {
    if (b) {
      d = b, e = a;
    } else {
      if (a) {
        if (b = Gb(a)) {
          pb && "innerText" in b ? d = b.innerText.replace(/(\r\n|\r|\n)/g, "\n") : (d = [], Nb(b, d, !0), d = d.join("")), d = d.replace(/ \xAD /g, " ").replace(/\xAD/g, ""), d = d.replace(/\u200B/g, ""), pb || (d = d.replace(/ +/g, " ")), " " != d && (d = d.replace(/^\s*/, "")), b.parentNode.removeChild(b);
        }
        e = a;
      }
    }
  }
  this.Uc = c || vb();
  this.Ub = e || this.Uc.Ec("div");
  this.Gd = this.Uc.Ec("li", null, d);
  this.Hc = this.Mc = null;
  this.rg = !0;
}
Jc.prototype.isEnabled = function() {
  return this.rg;
};
function Lc(a, b) {
  a.isEnabled() && (a.Ub.style.display = b ? "" : "none", a.Gd.className = b ? "goog-tabpane-tab-selected" : "goog-tabpane-tab");
}
function Kc(a, b, c) {
  Vb.call(this, a, b);
  this.page = c;
}
wa(Kc, Vb);
function Nc(a, b) {
  null != a && this.append.apply(this, arguments);
}
Nc.prototype.Pc = "";
Nc.prototype.append = function(a, b, c) {
  this.Pc += a;
  if (null != b) {
    for (var d = 1;d < arguments.length;d++) {
      this.Pc += arguments[d];
    }
  }
  return this;
};
Nc.prototype.toString = function() {
  return this.Pc;
};
function Oc() {
  throw Error("No *print-fn* fn set for evaluation environment");
}
var Pc = !0, Qc = null;
function Rc() {
  return new n(null, 5, [Vc, !0, Wc, !0, Xc, !1, Yc, !1, Zc, null], null);
}
function q(a) {
  return null != a && !1 !== a;
}
function id(a) {
  return q(a) ? !1 : !0;
}
function kd(a, b) {
  return a[m(null == b ? null : b)] ? !0 : a._ ? !0 : !1;
}
function ld(a) {
  return null == a ? null : a.constructor;
}
function s(a, b) {
  var c = ld(b), c = q(q(c) ? c.hb : c) ? c.gb : m(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function md(a) {
  var b = a.gb;
  return q(b) ? b : "" + v.g(a);
}
function nd(a) {
  for (var b = a.length, c = Array(b), d = 0;;) {
    if (d < b) {
      c[d] = a[d], d += 1;
    } else {
      break;
    }
  }
  return c;
}
var td = function() {
  function a(a, b) {
    function c(a, b) {
      a.push(b);
      return a;
    }
    var g = [];
    return od.j ? od.j(c, g, b) : od.call(null, c, g, b);
  }
  function b(a) {
    return c.h(null, a);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, 0, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.g = b;
  c.h = a;
  return c;
}(), vd = {}, wd = {};
function xd(a) {
  if (a ? a.V : a) {
    return a.V(a);
  }
  var b;
  b = xd[m(null == a ? null : a)];
  if (!b && (b = xd._, !b)) {
    throw s("ICounted.-count", a);
  }
  return b.call(null, a);
}
function yd(a) {
  if (a ? a.Ha : a) {
    return a.Ha(a);
  }
  var b;
  b = yd[m(null == a ? null : a)];
  if (!b && (b = yd._, !b)) {
    throw s("IEmptyableCollection.-empty", a);
  }
  return b.call(null, a);
}
var zd = {};
function Ad(a, b) {
  if (a ? a.U : a) {
    return a.U(a, b);
  }
  var c;
  c = Ad[m(null == a ? null : a)];
  if (!c && (c = Ad._, !c)) {
    throw s("ICollection.-conj", a);
  }
  return c.call(null, a, b);
}
var Bd = {}, w = function() {
  function a(a, b, c) {
    if (a ? a.ab : a) {
      return a.ab(a, b, c);
    }
    var g;
    g = w[m(null == a ? null : a)];
    if (!g && (g = w._, !g)) {
      throw s("IIndexed.-nth", a);
    }
    return g.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.F : a) {
      return a.F(a, b);
    }
    var c;
    c = w[m(null == a ? null : a)];
    if (!c && (c = w._, !c)) {
      throw s("IIndexed.-nth", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.h = b;
  c.j = a;
  return c;
}(), Cd = {};
function Ed(a) {
  if (a ? a.Ja : a) {
    return a.Ja(a);
  }
  var b;
  b = Ed[m(null == a ? null : a)];
  if (!b && (b = Ed._, !b)) {
    throw s("ISeq.-first", a);
  }
  return b.call(null, a);
}
function Fd(a) {
  if (a ? a.Sa : a) {
    return a.Sa(a);
  }
  var b;
  b = Fd[m(null == a ? null : a)];
  if (!b && (b = Fd._, !b)) {
    throw s("ISeq.-rest", a);
  }
  return b.call(null, a);
}
var Gd = {}, Hd = {}, Md = function() {
  function a(a, b, c) {
    if (a ? a.L : a) {
      return a.L(a, b, c);
    }
    var g;
    g = Md[m(null == a ? null : a)];
    if (!g && (g = Md._, !g)) {
      throw s("ILookup.-lookup", a);
    }
    return g.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.N : a) {
      return a.N(a, b);
    }
    var c;
    c = Md[m(null == a ? null : a)];
    if (!c && (c = Md._, !c)) {
      throw s("ILookup.-lookup", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.h = b;
  c.j = a;
  return c;
}(), Nd = {};
function Od(a, b) {
  if (a ? a.ud : a) {
    return a.ud(a, b);
  }
  var c;
  c = Od[m(null == a ? null : a)];
  if (!c && (c = Od._, !c)) {
    throw s("IAssociative.-contains-key?", a);
  }
  return c.call(null, a, b);
}
function Pd(a, b, c) {
  if (a ? a.Ia : a) {
    return a.Ia(a, b, c);
  }
  var d;
  d = Pd[m(null == a ? null : a)];
  if (!d && (d = Pd._, !d)) {
    throw s("IAssociative.-assoc", a);
  }
  return d.call(null, a, b, c);
}
var Qd = {};
function Rd(a, b) {
  if (a ? a.Ra : a) {
    return a.Ra(a, b);
  }
  var c;
  c = Rd[m(null == a ? null : a)];
  if (!c && (c = Rd._, !c)) {
    throw s("IMap.-dissoc", a);
  }
  return c.call(null, a, b);
}
var Sd = {};
function Td(a) {
  if (a ? a.dd : a) {
    return a.dd(a);
  }
  var b;
  b = Td[m(null == a ? null : a)];
  if (!b && (b = Td._, !b)) {
    throw s("IMapEntry.-key", a);
  }
  return b.call(null, a);
}
function be(a) {
  if (a ? a.ed : a) {
    return a.ed(a);
  }
  var b;
  b = be[m(null == a ? null : a)];
  if (!b && (b = be._, !b)) {
    throw s("IMapEntry.-val", a);
  }
  return b.call(null, a);
}
var ce = {};
function de(a, b) {
  if (a ? a.Ze : a) {
    return a.Ze(0, b);
  }
  var c;
  c = de[m(null == a ? null : a)];
  if (!c && (c = de._, !c)) {
    throw s("ISet.-disjoin", a);
  }
  return c.call(null, a, b);
}
function ee(a) {
  if (a ? a.tc : a) {
    return a.tc(a);
  }
  var b;
  b = ee[m(null == a ? null : a)];
  if (!b && (b = ee._, !b)) {
    throw s("IStack.-peek", a);
  }
  return b.call(null, a);
}
function fe(a) {
  if (a ? a.uc : a) {
    return a.uc(a);
  }
  var b;
  b = fe[m(null == a ? null : a)];
  if (!b && (b = fe._, !b)) {
    throw s("IStack.-pop", a);
  }
  return b.call(null, a);
}
var ge = {};
function he(a, b, c) {
  if (a ? a.Dc : a) {
    return a.Dc(a, b, c);
  }
  var d;
  d = he[m(null == a ? null : a)];
  if (!d && (d = he._, !d)) {
    throw s("IVector.-assoc-n", a);
  }
  return d.call(null, a, b, c);
}
function ie(a) {
  if (a ? a.Qc : a) {
    return a.Qc(a);
  }
  var b;
  b = ie[m(null == a ? null : a)];
  if (!b && (b = ie._, !b)) {
    throw s("IDeref.-deref", a);
  }
  return b.call(null, a);
}
var je = {};
function ke(a) {
  if (a ? a.I : a) {
    return a.I(a);
  }
  var b;
  b = ke[m(null == a ? null : a)];
  if (!b && (b = ke._, !b)) {
    throw s("IMeta.-meta", a);
  }
  return b.call(null, a);
}
var ne = {};
function oe(a, b) {
  if (a ? a.J : a) {
    return a.J(a, b);
  }
  var c;
  c = oe[m(null == a ? null : a)];
  if (!c && (c = oe._, !c)) {
    throw s("IWithMeta.-with-meta", a);
  }
  return c.call(null, a, b);
}
var se = {}, te = function() {
  function a(a, b, c) {
    if (a ? a.Ma : a) {
      return a.Ma(a, b, c);
    }
    var g;
    g = te[m(null == a ? null : a)];
    if (!g && (g = te._, !g)) {
      throw s("IReduce.-reduce", a);
    }
    return g.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.La : a) {
      return a.La(a, b);
    }
    var c;
    c = te[m(null == a ? null : a)];
    if (!c && (c = te._, !c)) {
      throw s("IReduce.-reduce", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.h = b;
  c.j = a;
  return c;
}();
function ue(a, b, c) {
  if (a ? a.cd : a) {
    return a.cd(a, b, c);
  }
  var d;
  d = ue[m(null == a ? null : a)];
  if (!d && (d = ue._, !d)) {
    throw s("IKVReduce.-kv-reduce", a);
  }
  return d.call(null, a, b, c);
}
function ve(a, b) {
  if (a ? a.O : a) {
    return a.O(a, b);
  }
  var c;
  c = ve[m(null == a ? null : a)];
  if (!c && (c = ve._, !c)) {
    throw s("IEquiv.-equiv", a);
  }
  return c.call(null, a, b);
}
function we(a) {
  if (a ? a.R : a) {
    return a.R(a);
  }
  var b;
  b = we[m(null == a ? null : a)];
  if (!b && (b = we._, !b)) {
    throw s("IHash.-hash", a);
  }
  return b.call(null, a);
}
var xe = {};
function ye(a) {
  if (a ? a.S : a) {
    return a.S(a);
  }
  var b;
  b = ye[m(null == a ? null : a)];
  if (!b && (b = ye._, !b)) {
    throw s("ISeqable.-seq", a);
  }
  return b.call(null, a);
}
var ze = {}, Ae = {};
function Be(a) {
  if (a ? a.fd : a) {
    return a.fd(a);
  }
  var b;
  b = Be[m(null == a ? null : a)];
  if (!b && (b = Be._, !b)) {
    throw s("IReversible.-rseq", a);
  }
  return b.call(null, a);
}
function Ce(a, b) {
  if (a ? a.af : a) {
    return a.af(0, b);
  }
  var c;
  c = Ce[m(null == a ? null : a)];
  if (!c && (c = Ce._, !c)) {
    throw s("IWriter.-write", a);
  }
  return c.call(null, a, b);
}
var De = {};
function Ee(a, b, c) {
  if (a ? a.P : a) {
    return a.P(a, b, c);
  }
  var d;
  d = Ee[m(null == a ? null : a)];
  if (!d && (d = Ee._, !d)) {
    throw s("IPrintWithWriter.-pr-writer", a);
  }
  return d.call(null, a, b, c);
}
function Fe(a, b, c) {
  if (a ? a.Xd : a) {
    return a.Xd(a, b, c);
  }
  var d;
  d = Fe[m(null == a ? null : a)];
  if (!d && (d = Fe._, !d)) {
    throw s("IWatchable.-notify-watches", a);
  }
  return d.call(null, a, b, c);
}
function Ge(a, b, c) {
  if (a ? a.Wd : a) {
    return a.Wd(a, b, c);
  }
  var d;
  d = Ge[m(null == a ? null : a)];
  if (!d && (d = Ge._, !d)) {
    throw s("IWatchable.-add-watch", a);
  }
  return d.call(null, a, b, c);
}
function He(a, b) {
  if (a ? a.Yd : a) {
    return a.Yd(a, b);
  }
  var c;
  c = He[m(null == a ? null : a)];
  if (!c && (c = He._, !c)) {
    throw s("IWatchable.-remove-watch", a);
  }
  return c.call(null, a, b);
}
function Ie(a) {
  if (a ? a.Rc : a) {
    return a.Rc(a);
  }
  var b;
  b = Ie[m(null == a ? null : a)];
  if (!b && (b = Ie._, !b)) {
    throw s("IEditableCollection.-as-transient", a);
  }
  return b.call(null, a);
}
function Je(a, b) {
  if (a ? a.Bc : a) {
    return a.Bc(a, b);
  }
  var c;
  c = Je[m(null == a ? null : a)];
  if (!c && (c = Je._, !c)) {
    throw s("ITransientCollection.-conj!", a);
  }
  return c.call(null, a, b);
}
function Ke(a) {
  if (a ? a.Cc : a) {
    return a.Cc(a);
  }
  var b;
  b = Ke[m(null == a ? null : a)];
  if (!b && (b = Ke._, !b)) {
    throw s("ITransientCollection.-persistent!", a);
  }
  return b.call(null, a);
}
function Oe(a, b, c) {
  if (a ? a.hd : a) {
    return a.hd(a, b, c);
  }
  var d;
  d = Oe[m(null == a ? null : a)];
  if (!d && (d = Oe._, !d)) {
    throw s("ITransientAssociative.-assoc!", a);
  }
  return d.call(null, a, b, c);
}
function Pe(a, b, c) {
  if (a ? a.$e : a) {
    return a.$e(0, b, c);
  }
  var d;
  d = Pe[m(null == a ? null : a)];
  if (!d && (d = Pe._, !d)) {
    throw s("ITransientVector.-assoc-n!", a);
  }
  return d.call(null, a, b, c);
}
function Qe(a) {
  if (a ? a.Ve : a) {
    return a.Ve();
  }
  var b;
  b = Qe[m(null == a ? null : a)];
  if (!b && (b = Qe._, !b)) {
    throw s("IChunk.-drop-first", a);
  }
  return b.call(null, a);
}
function x(a) {
  if (a ? a.Ud : a) {
    return a.Ud(a);
  }
  var b;
  b = x[m(null == a ? null : a)];
  if (!b && (b = x._, !b)) {
    throw s("IChunkedSeq.-chunked-first", a);
  }
  return b.call(null, a);
}
function z(a) {
  if (a ? a.Vd : a) {
    return a.Vd(a);
  }
  var b;
  b = z[m(null == a ? null : a)];
  if (!b && (b = z._, !b)) {
    throw s("IChunkedSeq.-chunked-rest", a);
  }
  return b.call(null, a);
}
function Re(a) {
  if (a ? a.Td : a) {
    return a.Td(a);
  }
  var b;
  b = Re[m(null == a ? null : a)];
  if (!b && (b = Re._, !b)) {
    throw s("IChunkedNext.-chunked-next", a);
  }
  return b.call(null, a);
}
function Se(a, b) {
  if (a ? a.gg : a) {
    return a.gg(a, b);
  }
  var c;
  c = Se[m(null == a ? null : a)];
  if (!c && (c = Se._, !c)) {
    throw s("IReset.-reset!", a);
  }
  return c.call(null, a, b);
}
var bf = function() {
  function a(a, b, c, d, e) {
    if (a ? a.kg : a) {
      return a.kg(a, b, c, d, e);
    }
    var r;
    r = bf[m(null == a ? null : a)];
    if (!r && (r = bf._, !r)) {
      throw s("ISwap.-swap!", a);
    }
    return r.call(null, a, b, c, d, e);
  }
  function b(a, b, c, d) {
    if (a ? a.jg : a) {
      return a.jg(a, b, c, d);
    }
    var e;
    e = bf[m(null == a ? null : a)];
    if (!e && (e = bf._, !e)) {
      throw s("ISwap.-swap!", a);
    }
    return e.call(null, a, b, c, d);
  }
  function c(a, b, c) {
    if (a ? a.ig : a) {
      return a.ig(a, b, c);
    }
    var d;
    d = bf[m(null == a ? null : a)];
    if (!d && (d = bf._, !d)) {
      throw s("ISwap.-swap!", a);
    }
    return d.call(null, a, b, c);
  }
  function d(a, b) {
    if (a ? a.hg : a) {
      return a.hg(a, b);
    }
    var c;
    c = bf[m(null == a ? null : a)];
    if (!c && (c = bf._, !c)) {
      throw s("ISwap.-swap!", a);
    }
    return c.call(null, a, b);
  }
  var e = null, e = function(e, g, h, l, p) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, g);
      case 3:
        return c.call(this, e, g, h);
      case 4:
        return b.call(this, e, g, h, l);
      case 5:
        return a.call(this, e, g, h, l, p);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.h = d;
  e.j = c;
  e.p = b;
  e.M = a;
  return e;
}();
function cf(a) {
  if (a ? a.bd : a) {
    return a.bd(a);
  }
  var b;
  b = cf[m(null == a ? null : a)];
  if (!b && (b = cf._, !b)) {
    throw s("IIterable.-iterator", a);
  }
  return b.call(null, a);
}
function df(a) {
  this.dh = a;
  this.G = 0;
  this.t = 1073741824;
}
df.prototype.af = function(a, b) {
  return this.dh.append(b);
};
function ef(a) {
  var b = new Nc;
  a.P(null, new df(b), Rc());
  return "" + v.g(b);
}
var ff = "undefined" !== typeof Math.imul && 0 !== (Math.imul.h ? Math.imul.h(4294967295, 5) : Math.imul.call(null, 4294967295, 5)) ? function(a, b) {
  return Math.imul.h ? Math.imul.h(a, b) : Math.imul.call(null, a, b);
} : function(a, b) {
  var c = a & 65535, d = b & 65535;
  return c * d + ((a >>> 16 & 65535) * d + c * (b >>> 16 & 65535) << 16 >>> 0) | 0;
};
function gf(a) {
  a = ff(a, 3432918353);
  return ff(a << 15 | a >>> -15, 461845907);
}
function hf(a, b) {
  var c = a ^ b;
  return ff(c << 13 | c >>> -13, 5) + 3864292196;
}
function jf(a, b) {
  var c = a ^ b, c = ff(c ^ c >>> 16, 2246822507), c = ff(c ^ c >>> 13, 3266489909);
  return c ^ c >>> 16;
}
function kf(a) {
  var b;
  a: {
    b = 1;
    for (var c = 0;;) {
      if (b < a.length) {
        var d = b + 2, c = hf(c, gf(a.charCodeAt(b - 1) | a.charCodeAt(b) << 16));
        b = d;
      } else {
        b = c;
        break a;
      }
    }
    b = void 0;
  }
  b = 1 === (a.length & 1) ? b ^ gf(a.charCodeAt(a.length - 1)) : b;
  return jf(b, ff(2, a.length));
}
var lf = {}, mf = 0;
function nf(a) {
  255 < mf && (lf = {}, mf = 0);
  var b = lf[a];
  if ("number" !== typeof b) {
    a: {
      if (null != a) {
        if (b = a.length, 0 < b) {
          for (var c = 0, d = 0;;) {
            if (c < b) {
              var e = c + 1, d = ff(31, d) + a.charCodeAt(c), c = e
            } else {
              b = d;
              break a;
            }
          }
          b = void 0;
        } else {
          b = 0;
        }
      } else {
        b = 0;
      }
    }
    lf[a] = b;
    mf += 1;
  }
  return a = b;
}
function of(a) {
  a && (a.t & 4194304 || a.ag) ? a = a.R(null) : "number" === typeof a ? a = (Math.floor.g ? Math.floor.g(a) : Math.floor.call(null, a)) % 2147483647 : !0 === a ? a = 1 : !1 === a ? a = 0 : "string" === typeof a ? (a = nf(a), 0 !== a && (a = gf(a), a = hf(0, a), a = jf(a, 4))) : a = null == a ? 0 : we(a);
  return a;
}
function pf(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
function uf(a, b) {
  if (q(vf.h ? vf.h(a, b) : vf.call(null, a, b))) {
    return 0;
  }
  if (q(function() {
    var c = id(a.Rb);
    return c ? b.Rb : c;
  }())) {
    return-1;
  }
  if (q(a.Rb)) {
    if (id(b.Rb)) {
      return 1;
    }
    var c = function() {
      var c = a.Rb, d = b.Rb;
      return wf.h ? wf.h(c, d) : wf.call(null, c, d);
    }();
    if (0 === c) {
      var c = a.name, d = b.name;
      return wf.h ? wf.h(c, d) : wf.call(null, c, d);
    }
    return c;
  }
  c = a.name;
  d = b.name;
  return wf.h ? wf.h(c, d) : wf.call(null, c, d);
}
function xf(a, b, c, d, e) {
  this.Rb = a;
  this.name = b;
  this.Ac = c;
  this.Oc = d;
  this.Za = e;
  this.t = 2154168321;
  this.G = 4096;
}
k = xf.prototype;
k.P = function(a, b) {
  return Ce(b, this.Ac);
};
k.R = function() {
  var a = this.Oc;
  return null != a ? a : this.Oc = a = pf(kf(this.name), nf(this.Rb));
};
k.J = function(a, b) {
  return new xf(this.Rb, this.name, this.Ac, this.Oc, b);
};
k.I = function() {
  return this.Za;
};
k.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Md.j(c, this, null);
      case 3:
        return Md.j(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.h = function(a, c) {
    return Md.j(c, this, null);
  };
  a.j = function(a, c, d) {
    return Md.j(c, this, d);
  };
  return a;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(nd(b)));
};
k.g = function(a) {
  return Md.j(a, this, null);
};
k.h = function(a, b) {
  return Md.j(a, this, b);
};
k.O = function(a, b) {
  return b instanceof xf ? this.Ac === b.Ac : !1;
};
k.toString = function() {
  return this.Ac;
};
var yf = function() {
  function a(a, b) {
    var c = null != a ? "" + v.g(a) + "/" + v.g(b) : b;
    return new xf(a, b, c, null, null);
  }
  function b(a) {
    return a instanceof xf ? a : c.h(null, a);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.g = b;
  c.h = a;
  return c;
}();
function B(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.t & 8388608 || a.Ye)) {
    return a.S(null);
  }
  if (a instanceof Array || "string" === typeof a) {
    return 0 === a.length ? null : new zf(a, 0);
  }
  if (kd(xe, a)) {
    return ye(a);
  }
  throw Error("" + v.g(a) + " is not ISeqable");
}
function D(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.t & 64 || a.gd)) {
    return a.Ja(null);
  }
  a = B(a);
  return null == a ? null : Ed(a);
}
function E(a) {
  return null != a ? a && (a.t & 64 || a.gd) ? a.Sa(null) : (a = B(a)) ? Fd(a) : Lf : Lf;
}
function G(a) {
  return null == a ? null : a && (a.t & 128 || a.yd) ? a.Va(null) : B(E(a));
}
var vf = function() {
  function a(a, b) {
    return null == a ? null == b : a === b || ve(a, b);
  }
  var b = null, c = function() {
    function a(b, d, h) {
      var l = null;
      2 < arguments.length && (l = H(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (b.h(a, d)) {
          if (G(e)) {
            a = d, d = D(e), e = G(e);
          } else {
            return b.h(d, D(e));
          }
        } else {
          return!1;
        }
      }
    }
    a.B = 2;
    a.o = function(a) {
      var b = D(a);
      a = G(a);
      var d = D(a);
      a = E(a);
      return c(b, d, a);
    };
    a.k = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a.call(this, b, e);
      default:
        return c.k(b, e, H(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.B = 2;
  b.o = c.o;
  b.g = function() {
    return!0;
  };
  b.h = a;
  b.k = c.k;
  return b;
}();
function Mf(a, b) {
  var c = gf(a), c = hf(0, c);
  return jf(c, b);
}
function Nf(a) {
  var b = 0, c = 1;
  for (a = B(a);;) {
    if (null != a) {
      b += 1, c = ff(31, c) + of(D(a)) | 0, a = G(a);
    } else {
      return Mf(c, b);
    }
  }
}
function Of(a) {
  var b = 0, c = 0;
  for (a = B(a);;) {
    if (null != a) {
      b += 1, c = c + of(D(a)) | 0, a = G(a);
    } else {
      return Mf(c, b);
    }
  }
}
wd["null"] = !0;
xd["null"] = function() {
  return 0;
};
Date.prototype.O = function(a, b) {
  return b instanceof Date && this.toString() === b.toString();
};
ve.number = function(a, b) {
  return a === b;
};
je["function"] = !0;
ke["function"] = function() {
  return null;
};
vd["function"] = !0;
we._ = function(a) {
  return a[ja] || (a[ja] = ++la);
};
function Pf(a) {
  return a + 1;
}
function Qf(a) {
  this.D = a;
  this.G = 0;
  this.t = 32768;
}
Qf.prototype.Qc = function() {
  return this.D;
};
function Rf(a) {
  return a instanceof Qf;
}
function K(a) {
  return ie(a);
}
var Sf = function() {
  function a(a, b, c, d) {
    for (var l = xd(a);;) {
      if (d < l) {
        var p = w.h(a, d);
        c = b.h ? b.h(c, p) : b.call(null, c, p);
        if (Rf(c)) {
          return ie(c);
        }
        d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    var d = xd(a), l = c;
    for (c = 0;;) {
      if (c < d) {
        var p = w.h(a, c), l = b.h ? b.h(l, p) : b.call(null, l, p);
        if (Rf(l)) {
          return ie(l);
        }
        c += 1;
      } else {
        return l;
      }
    }
  }
  function c(a, b) {
    var c = xd(a);
    if (0 === c) {
      return b.q ? b.q() : b.call(null);
    }
    for (var d = w.h(a, 0), l = 1;;) {
      if (l < c) {
        var p = w.h(a, l), d = b.h ? b.h(d, p) : b.call(null, d, p);
        if (Rf(d)) {
          return ie(d);
        }
        l += 1;
      } else {
        return d;
      }
    }
  }
  var d = null, d = function(d, f, g, h) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, g);
      case 4:
        return a.call(this, d, f, g, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.h = c;
  d.j = b;
  d.p = a;
  return d;
}(), Tf = function() {
  function a(a, b, c, d) {
    for (var l = a.length;;) {
      if (d < l) {
        var p = a[d];
        c = b.h ? b.h(c, p) : b.call(null, c, p);
        if (Rf(c)) {
          return ie(c);
        }
        d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    var d = a.length, l = c;
    for (c = 0;;) {
      if (c < d) {
        var p = a[c], l = b.h ? b.h(l, p) : b.call(null, l, p);
        if (Rf(l)) {
          return ie(l);
        }
        c += 1;
      } else {
        return l;
      }
    }
  }
  function c(a, b) {
    var c = a.length;
    if (0 === a.length) {
      return b.q ? b.q() : b.call(null);
    }
    for (var d = a[0], l = 1;;) {
      if (l < c) {
        var p = a[l], d = b.h ? b.h(d, p) : b.call(null, d, p);
        if (Rf(d)) {
          return ie(d);
        }
        l += 1;
      } else {
        return d;
      }
    }
  }
  var d = null, d = function(d, f, g, h) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, g);
      case 4:
        return a.call(this, d, f, g, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.h = c;
  d.j = b;
  d.p = a;
  return d;
}();
function Uf(a) {
  return a ? a.t & 2 || a.Yf ? !0 : a.t ? !1 : kd(wd, a) : kd(wd, a);
}
function Vf(a) {
  return a ? a.t & 16 || a.We ? !0 : a.t ? !1 : kd(Bd, a) : kd(Bd, a);
}
function Wf(a, b) {
  this.n = a;
  this.H = b;
}
Wf.prototype.Id = function() {
  return this.H < this.n.length;
};
Wf.prototype.next = function() {
  var a = this.n[this.H];
  this.H += 1;
  return a;
};
function zf(a, b) {
  this.n = a;
  this.H = b;
  this.t = 166199550;
  this.G = 8192;
}
k = zf.prototype;
k.toString = function() {
  return ef(this);
};
k.F = function(a, b) {
  var c = b + this.H;
  return c < this.n.length ? this.n[c] : null;
};
k.ab = function(a, b, c) {
  a = b + this.H;
  return a < this.n.length ? this.n[a] : c;
};
k.bd = function() {
  return new Wf(this.n, this.H);
};
k.Va = function() {
  return this.H + 1 < this.n.length ? new zf(this.n, this.H + 1) : null;
};
k.V = function() {
  return this.n.length - this.H;
};
k.fd = function() {
  var a = xd(this);
  return 0 < a ? new Xf(this, a - 1, null) : null;
};
k.R = function() {
  return Nf(this);
};
k.O = function(a, b) {
  return Yf.h ? Yf.h(this, b) : Yf.call(null, this, b);
};
k.Ha = function() {
  return Lf;
};
k.La = function(a, b) {
  return Tf.p(this.n, b, this.n[this.H], this.H + 1);
};
k.Ma = function(a, b, c) {
  return Tf.p(this.n, b, c, this.H);
};
k.Ja = function() {
  return this.n[this.H];
};
k.Sa = function() {
  return this.H + 1 < this.n.length ? new zf(this.n, this.H + 1) : Lf;
};
k.S = function() {
  return this;
};
k.U = function(a, b) {
  return Zf.h ? Zf.h(b, this) : Zf.call(null, b, this);
};
var $f = function() {
  function a(a, b) {
    return b < a.length ? new zf(a, b) : null;
  }
  function b(a) {
    return c.h(a, 0);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.g = b;
  c.h = a;
  return c;
}(), H = function() {
  function a(a, b) {
    return $f.h(a, b);
  }
  function b(a) {
    return $f.h(a, 0);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.g = b;
  c.h = a;
  return c;
}();
function Xf(a, b, c) {
  this.td = a;
  this.H = b;
  this.C = c;
  this.t = 32374990;
  this.G = 8192;
}
k = Xf.prototype;
k.toString = function() {
  return ef(this);
};
k.I = function() {
  return this.C;
};
k.Va = function() {
  return 0 < this.H ? new Xf(this.td, this.H - 1, null) : null;
};
k.V = function() {
  return this.H + 1;
};
k.R = function() {
  return Nf(this);
};
k.O = function(a, b) {
  return Yf.h ? Yf.h(this, b) : Yf.call(null, this, b);
};
k.Ha = function() {
  var a = this.C;
  return ag.h ? ag.h(Lf, a) : ag.call(null, Lf, a);
};
k.La = function(a, b) {
  return bg.h ? bg.h(b, this) : bg.call(null, b, this);
};
k.Ma = function(a, b, c) {
  return bg.j ? bg.j(b, c, this) : bg.call(null, b, c, this);
};
k.Ja = function() {
  return w.h(this.td, this.H);
};
k.Sa = function() {
  return 0 < this.H ? new Xf(this.td, this.H - 1, null) : Lf;
};
k.S = function() {
  return this;
};
k.J = function(a, b) {
  return new Xf(this.td, this.H, b);
};
k.U = function(a, b) {
  return Zf.h ? Zf.h(b, this) : Zf.call(null, b, this);
};
function cg(a) {
  return D(G(a));
}
function dg(a) {
  for (;;) {
    var b = G(a);
    if (null != b) {
      a = b;
    } else {
      return D(a);
    }
  }
}
ve._ = function(a, b) {
  return a === b;
};
var qg = function() {
  function a(a, b) {
    return null != a ? Ad(a, b) : Ad(Lf, b);
  }
  var b = null, c = function() {
    function a(b, d, h) {
      var l = null;
      2 < arguments.length && (l = H(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (q(e)) {
          a = b.h(a, d), d = D(e), e = G(e);
        } else {
          return b.h(a, d);
        }
      }
    }
    a.B = 2;
    a.o = function(a) {
      var b = D(a);
      a = G(a);
      var d = D(a);
      a = E(a);
      return c(b, d, a);
    };
    a.k = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 0:
        return pg;
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.k(b, e, H(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.B = 2;
  b.o = c.o;
  b.q = function() {
    return pg;
  };
  b.g = function(a) {
    return a;
  };
  b.h = a;
  b.k = c.k;
  return b;
}();
function N(a) {
  if (null != a) {
    if (a && (a.t & 2 || a.Yf)) {
      a = a.V(null);
    } else {
      if (a instanceof Array) {
        a = a.length;
      } else {
        if ("string" === typeof a) {
          a = a.length;
        } else {
          if (kd(wd, a)) {
            a = xd(a);
          } else {
            a: {
              a = B(a);
              for (var b = 0;;) {
                if (Uf(a)) {
                  a = b + xd(a);
                  break a;
                }
                a = G(a);
                b += 1;
              }
              a = void 0;
            }
          }
        }
      }
    }
  } else {
    a = 0;
  }
  return a;
}
var rg = function() {
  function a(a, b, c) {
    for (;;) {
      if (null == a) {
        return c;
      }
      if (0 === b) {
        return B(a) ? D(a) : c;
      }
      if (Vf(a)) {
        return w.j(a, b, c);
      }
      if (B(a)) {
        a = G(a), b -= 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b) {
    for (;;) {
      if (null == a) {
        throw Error("Index out of bounds");
      }
      if (0 === b) {
        if (B(a)) {
          return D(a);
        }
        throw Error("Index out of bounds");
      }
      if (Vf(a)) {
        return w.h(a, b);
      }
      if (B(a)) {
        var c = G(a), g = b - 1;
        a = c;
        b = g;
      } else {
        throw Error("Index out of bounds");
      }
    }
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.h = b;
  c.j = a;
  return c;
}(), O = function() {
  function a(a, b, c) {
    if ("number" !== typeof b) {
      throw Error("index argument to nth must be a number.");
    }
    if (null == a) {
      return c;
    }
    if (a && (a.t & 16 || a.We)) {
      return a.ab(null, b, c);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : c;
    }
    if (kd(Bd, a)) {
      return w.h(a, b);
    }
    if (a ? a.t & 64 || a.gd || (a.t ? 0 : kd(Cd, a)) : kd(Cd, a)) {
      return rg.j(a, b, c);
    }
    throw Error("nth not supported on this type " + v.g(md(ld(a))));
  }
  function b(a, b) {
    if ("number" !== typeof b) {
      throw Error("index argument to nth must be a number");
    }
    if (null == a) {
      return a;
    }
    if (a && (a.t & 16 || a.We)) {
      return a.F(null, b);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : null;
    }
    if (kd(Bd, a)) {
      return w.h(a, b);
    }
    if (a ? a.t & 64 || a.gd || (a.t ? 0 : kd(Cd, a)) : kd(Cd, a)) {
      return rg.h(a, b);
    }
    throw Error("nth not supported on this type " + v.g(md(ld(a))));
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.h = b;
  c.j = a;
  return c;
}(), Q = function() {
  function a(a, b, c) {
    return null != a ? a && (a.t & 256 || a.Xe) ? a.L(null, b, c) : a instanceof Array ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : kd(Hd, a) ? Md.j(a, b, c) : c : c;
  }
  function b(a, b) {
    return null == a ? null : a && (a.t & 256 || a.Xe) ? a.N(null, b) : a instanceof Array ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : kd(Hd, a) ? Md.h(a, b) : null;
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.h = b;
  c.j = a;
  return c;
}(), R = function() {
  function a(a, b, c) {
    return null != a ? Pd(a, b, c) : sg([b], [c]);
  }
  var b = null, c = function() {
    function a(b, d, h, l) {
      var p = null;
      3 < arguments.length && (p = H(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, h, p);
    }
    function c(a, d, e, l) {
      for (;;) {
        if (a = b.j(a, d, e), q(l)) {
          d = D(l), e = cg(l), l = G(G(l));
        } else {
          return a;
        }
      }
    }
    a.B = 3;
    a.o = function(a) {
      var b = D(a);
      a = G(a);
      var d = D(a);
      a = G(a);
      var l = D(a);
      a = E(a);
      return c(b, d, l, a);
    };
    a.k = c;
    return a;
  }(), b = function(b, e, f, g) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, e, f);
      default:
        return c.k(b, e, f, H(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.B = 3;
  b.o = c.o;
  b.j = a;
  b.k = c.k;
  return b;
}(), tg = function() {
  function a(a, b) {
    return null == a ? null : Rd(a, b);
  }
  var b = null, c = function() {
    function a(b, d, h) {
      var l = null;
      2 < arguments.length && (l = H(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (null == a) {
          return null;
        }
        a = b.h(a, d);
        if (q(e)) {
          d = D(e), e = G(e);
        } else {
          return a;
        }
      }
    }
    a.B = 2;
    a.o = function(a) {
      var b = D(a);
      a = G(a);
      var d = D(a);
      a = E(a);
      return c(b, d, a);
    };
    a.k = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.k(b, e, H(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.B = 2;
  b.o = c.o;
  b.g = function(a) {
    return a;
  };
  b.h = a;
  b.k = c.k;
  return b;
}();
function ug(a) {
  var b = ea(a);
  return q(b) ? b : a ? q(q(null) ? null : a.Xf) ? !0 : a.Ah ? !1 : kd(vd, a) : kd(vd, a);
}
function vg(a, b) {
  this.v = a;
  this.C = b;
  this.G = 0;
  this.t = 393217;
}
k = vg.prototype;
k.call = function() {
  function a(a, b, c, d, e, f, g, h, l, p, r, t, u, A, y, C, F, M, J, I, L, P) {
    a = this.v;
    return S.xd ? S.xd(a, b, c, d, e, f, g, h, l, p, r, t, u, A, y, C, F, M, J, I, L, P) : S.call(null, a, b, c, d, e, f, g, h, l, p, r, t, u, A, y, C, F, M, J, I, L, P);
  }
  function b(a, b, c, d, e, f, g, h, l, p, r, t, u, A, y, C, F, M, J, I, L) {
    a = this;
    return a.v.lc ? a.v.lc(b, c, d, e, f, g, h, l, p, r, t, u, A, y, C, F, M, J, I, L) : a.v.call(null, b, c, d, e, f, g, h, l, p, r, t, u, A, y, C, F, M, J, I, L);
  }
  function c(a, b, c, d, e, f, g, h, l, p, r, t, u, A, y, C, F, M, J, I) {
    a = this;
    return a.v.kc ? a.v.kc(b, c, d, e, f, g, h, l, p, r, t, u, A, y, C, F, M, J, I) : a.v.call(null, b, c, d, e, f, g, h, l, p, r, t, u, A, y, C, F, M, J, I);
  }
  function d(a, b, c, d, e, f, g, h, l, p, r, t, u, A, y, C, F, M, J) {
    a = this;
    return a.v.jc ? a.v.jc(b, c, d, e, f, g, h, l, p, r, t, u, A, y, C, F, M, J) : a.v.call(null, b, c, d, e, f, g, h, l, p, r, t, u, A, y, C, F, M, J);
  }
  function e(a, b, c, d, e, f, g, h, l, p, r, t, u, A, y, C, F, M) {
    a = this;
    return a.v.ic ? a.v.ic(b, c, d, e, f, g, h, l, p, r, t, u, A, y, C, F, M) : a.v.call(null, b, c, d, e, f, g, h, l, p, r, t, u, A, y, C, F, M);
  }
  function f(a, b, c, d, e, f, g, h, l, p, r, t, u, A, y, C, F) {
    a = this;
    return a.v.hc ? a.v.hc(b, c, d, e, f, g, h, l, p, r, t, u, A, y, C, F) : a.v.call(null, b, c, d, e, f, g, h, l, p, r, t, u, A, y, C, F);
  }
  function g(a, b, c, d, e, f, g, h, l, p, r, t, u, A, y, C) {
    a = this;
    return a.v.gc ? a.v.gc(b, c, d, e, f, g, h, l, p, r, t, u, A, y, C) : a.v.call(null, b, c, d, e, f, g, h, l, p, r, t, u, A, y, C);
  }
  function h(a, b, c, d, e, f, g, h, l, p, r, t, u, A, y) {
    a = this;
    return a.v.fc ? a.v.fc(b, c, d, e, f, g, h, l, p, r, t, u, A, y) : a.v.call(null, b, c, d, e, f, g, h, l, p, r, t, u, A, y);
  }
  function l(a, b, c, d, e, f, g, h, l, p, r, t, u, A) {
    a = this;
    return a.v.ec ? a.v.ec(b, c, d, e, f, g, h, l, p, r, t, u, A) : a.v.call(null, b, c, d, e, f, g, h, l, p, r, t, u, A);
  }
  function p(a, b, c, d, e, f, g, h, l, p, r, t, u) {
    a = this;
    return a.v.dc ? a.v.dc(b, c, d, e, f, g, h, l, p, r, t, u) : a.v.call(null, b, c, d, e, f, g, h, l, p, r, t, u);
  }
  function r(a, b, c, d, e, f, g, h, l, p, r, t) {
    a = this;
    return a.v.cc ? a.v.cc(b, c, d, e, f, g, h, l, p, r, t) : a.v.call(null, b, c, d, e, f, g, h, l, p, r, t);
  }
  function t(a, b, c, d, e, f, g, h, l, p, r) {
    a = this;
    return a.v.bc ? a.v.bc(b, c, d, e, f, g, h, l, p, r) : a.v.call(null, b, c, d, e, f, g, h, l, p, r);
  }
  function u(a, b, c, d, e, f, g, h, l, p) {
    a = this;
    return a.v.nc ? a.v.nc(b, c, d, e, f, g, h, l, p) : a.v.call(null, b, c, d, e, f, g, h, l, p);
  }
  function A(a, b, c, d, e, f, g, h, l) {
    a = this;
    return a.v.mc ? a.v.mc(b, c, d, e, f, g, h, l) : a.v.call(null, b, c, d, e, f, g, h, l);
  }
  function y(a, b, c, d, e, f, g, h) {
    a = this;
    return a.v.$a ? a.v.$a(b, c, d, e, f, g, h) : a.v.call(null, b, c, d, e, f, g, h);
  }
  function C(a, b, c, d, e, f, g) {
    a = this;
    return a.v.Qa ? a.v.Qa(b, c, d, e, f, g) : a.v.call(null, b, c, d, e, f, g);
  }
  function F(a, b, c, d, e, f) {
    a = this;
    return a.v.M ? a.v.M(b, c, d, e, f) : a.v.call(null, b, c, d, e, f);
  }
  function J(a, b, c, d, e) {
    a = this;
    return a.v.p ? a.v.p(b, c, d, e) : a.v.call(null, b, c, d, e);
  }
  function L(a, b, c, d) {
    a = this;
    return a.v.j ? a.v.j(b, c, d) : a.v.call(null, b, c, d);
  }
  function I(a, b, c) {
    a = this;
    return a.v.h ? a.v.h(b, c) : a.v.call(null, b, c);
  }
  function P(a, b) {
    a = this;
    return a.v.g ? a.v.g(b) : a.v.call(null, b);
  }
  function T(a) {
    a = this;
    return a.v.q ? a.v.q() : a.v.call(null);
  }
  var M = null, M = function(M, Y, na, ha, pa, ka, oa, qa, ib, Ha, tb, Fa, Ca, Ya, Bb, Ta, ub, Cb, ra, jd, jc, tc) {
    switch(arguments.length) {
      case 1:
        return T.call(this, M);
      case 2:
        return P.call(this, M, Y);
      case 3:
        return I.call(this, M, Y, na);
      case 4:
        return L.call(this, M, Y, na, ha);
      case 5:
        return J.call(this, M, Y, na, ha, pa);
      case 6:
        return F.call(this, M, Y, na, ha, pa, ka);
      case 7:
        return C.call(this, M, Y, na, ha, pa, ka, oa);
      case 8:
        return y.call(this, M, Y, na, ha, pa, ka, oa, qa);
      case 9:
        return A.call(this, M, Y, na, ha, pa, ka, oa, qa, ib);
      case 10:
        return u.call(this, M, Y, na, ha, pa, ka, oa, qa, ib, Ha);
      case 11:
        return t.call(this, M, Y, na, ha, pa, ka, oa, qa, ib, Ha, tb);
      case 12:
        return r.call(this, M, Y, na, ha, pa, ka, oa, qa, ib, Ha, tb, Fa);
      case 13:
        return p.call(this, M, Y, na, ha, pa, ka, oa, qa, ib, Ha, tb, Fa, Ca);
      case 14:
        return l.call(this, M, Y, na, ha, pa, ka, oa, qa, ib, Ha, tb, Fa, Ca, Ya);
      case 15:
        return h.call(this, M, Y, na, ha, pa, ka, oa, qa, ib, Ha, tb, Fa, Ca, Ya, Bb);
      case 16:
        return g.call(this, M, Y, na, ha, pa, ka, oa, qa, ib, Ha, tb, Fa, Ca, Ya, Bb, Ta);
      case 17:
        return f.call(this, M, Y, na, ha, pa, ka, oa, qa, ib, Ha, tb, Fa, Ca, Ya, Bb, Ta, ub);
      case 18:
        return e.call(this, M, Y, na, ha, pa, ka, oa, qa, ib, Ha, tb, Fa, Ca, Ya, Bb, Ta, ub, Cb);
      case 19:
        return d.call(this, M, Y, na, ha, pa, ka, oa, qa, ib, Ha, tb, Fa, Ca, Ya, Bb, Ta, ub, Cb, ra);
      case 20:
        return c.call(this, M, Y, na, ha, pa, ka, oa, qa, ib, Ha, tb, Fa, Ca, Ya, Bb, Ta, ub, Cb, ra, jd);
      case 21:
        return b.call(this, M, Y, na, ha, pa, ka, oa, qa, ib, Ha, tb, Fa, Ca, Ya, Bb, Ta, ub, Cb, ra, jd, jc);
      case 22:
        return a.call(this, M, Y, na, ha, pa, ka, oa, qa, ib, Ha, tb, Fa, Ca, Ya, Bb, Ta, ub, Cb, ra, jd, jc, tc);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  M.g = T;
  M.h = P;
  M.j = I;
  M.p = L;
  M.M = J;
  M.Qa = F;
  M.$a = C;
  M.mc = y;
  M.nc = A;
  M.bc = u;
  M.cc = t;
  M.dc = r;
  M.ec = p;
  M.fc = l;
  M.gc = h;
  M.hc = g;
  M.ic = f;
  M.jc = e;
  M.kc = d;
  M.lc = c;
  M.$f = b;
  M.xd = a;
  return M;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(nd(b)));
};
k.q = function() {
  return this.v.q ? this.v.q() : this.v.call(null);
};
k.g = function(a) {
  return this.v.g ? this.v.g(a) : this.v.call(null, a);
};
k.h = function(a, b) {
  return this.v.h ? this.v.h(a, b) : this.v.call(null, a, b);
};
k.j = function(a, b, c) {
  return this.v.j ? this.v.j(a, b, c) : this.v.call(null, a, b, c);
};
k.p = function(a, b, c, d) {
  return this.v.p ? this.v.p(a, b, c, d) : this.v.call(null, a, b, c, d);
};
k.M = function(a, b, c, d, e) {
  return this.v.M ? this.v.M(a, b, c, d, e) : this.v.call(null, a, b, c, d, e);
};
k.Qa = function(a, b, c, d, e, f) {
  return this.v.Qa ? this.v.Qa(a, b, c, d, e, f) : this.v.call(null, a, b, c, d, e, f);
};
k.$a = function(a, b, c, d, e, f, g) {
  return this.v.$a ? this.v.$a(a, b, c, d, e, f, g) : this.v.call(null, a, b, c, d, e, f, g);
};
k.mc = function(a, b, c, d, e, f, g, h) {
  return this.v.mc ? this.v.mc(a, b, c, d, e, f, g, h) : this.v.call(null, a, b, c, d, e, f, g, h);
};
k.nc = function(a, b, c, d, e, f, g, h, l) {
  return this.v.nc ? this.v.nc(a, b, c, d, e, f, g, h, l) : this.v.call(null, a, b, c, d, e, f, g, h, l);
};
k.bc = function(a, b, c, d, e, f, g, h, l, p) {
  return this.v.bc ? this.v.bc(a, b, c, d, e, f, g, h, l, p) : this.v.call(null, a, b, c, d, e, f, g, h, l, p);
};
k.cc = function(a, b, c, d, e, f, g, h, l, p, r) {
  return this.v.cc ? this.v.cc(a, b, c, d, e, f, g, h, l, p, r) : this.v.call(null, a, b, c, d, e, f, g, h, l, p, r);
};
k.dc = function(a, b, c, d, e, f, g, h, l, p, r, t) {
  return this.v.dc ? this.v.dc(a, b, c, d, e, f, g, h, l, p, r, t) : this.v.call(null, a, b, c, d, e, f, g, h, l, p, r, t);
};
k.ec = function(a, b, c, d, e, f, g, h, l, p, r, t, u) {
  return this.v.ec ? this.v.ec(a, b, c, d, e, f, g, h, l, p, r, t, u) : this.v.call(null, a, b, c, d, e, f, g, h, l, p, r, t, u);
};
k.fc = function(a, b, c, d, e, f, g, h, l, p, r, t, u, A) {
  return this.v.fc ? this.v.fc(a, b, c, d, e, f, g, h, l, p, r, t, u, A) : this.v.call(null, a, b, c, d, e, f, g, h, l, p, r, t, u, A);
};
k.gc = function(a, b, c, d, e, f, g, h, l, p, r, t, u, A, y) {
  return this.v.gc ? this.v.gc(a, b, c, d, e, f, g, h, l, p, r, t, u, A, y) : this.v.call(null, a, b, c, d, e, f, g, h, l, p, r, t, u, A, y);
};
k.hc = function(a, b, c, d, e, f, g, h, l, p, r, t, u, A, y, C) {
  return this.v.hc ? this.v.hc(a, b, c, d, e, f, g, h, l, p, r, t, u, A, y, C) : this.v.call(null, a, b, c, d, e, f, g, h, l, p, r, t, u, A, y, C);
};
k.ic = function(a, b, c, d, e, f, g, h, l, p, r, t, u, A, y, C, F) {
  return this.v.ic ? this.v.ic(a, b, c, d, e, f, g, h, l, p, r, t, u, A, y, C, F) : this.v.call(null, a, b, c, d, e, f, g, h, l, p, r, t, u, A, y, C, F);
};
k.jc = function(a, b, c, d, e, f, g, h, l, p, r, t, u, A, y, C, F, J) {
  return this.v.jc ? this.v.jc(a, b, c, d, e, f, g, h, l, p, r, t, u, A, y, C, F, J) : this.v.call(null, a, b, c, d, e, f, g, h, l, p, r, t, u, A, y, C, F, J);
};
k.kc = function(a, b, c, d, e, f, g, h, l, p, r, t, u, A, y, C, F, J, L) {
  return this.v.kc ? this.v.kc(a, b, c, d, e, f, g, h, l, p, r, t, u, A, y, C, F, J, L) : this.v.call(null, a, b, c, d, e, f, g, h, l, p, r, t, u, A, y, C, F, J, L);
};
k.lc = function(a, b, c, d, e, f, g, h, l, p, r, t, u, A, y, C, F, J, L, I) {
  return this.v.lc ? this.v.lc(a, b, c, d, e, f, g, h, l, p, r, t, u, A, y, C, F, J, L, I) : this.v.call(null, a, b, c, d, e, f, g, h, l, p, r, t, u, A, y, C, F, J, L, I);
};
k.$f = function(a, b, c, d, e, f, g, h, l, p, r, t, u, A, y, C, F, J, L, I, P) {
  var T = this.v;
  return S.xd ? S.xd(T, a, b, c, d, e, f, g, h, l, p, r, t, u, A, y, C, F, J, L, I, P) : S.call(null, T, a, b, c, d, e, f, g, h, l, p, r, t, u, A, y, C, F, J, L, I, P);
};
k.Xf = !0;
k.J = function(a, b) {
  return new vg(this.v, b);
};
k.I = function() {
  return this.C;
};
function ag(a, b) {
  return ug(a) && !(a ? a.t & 262144 || a.lg || (a.t ? 0 : kd(ne, a)) : kd(ne, a)) ? new vg(a, b) : null == a ? null : oe(a, b);
}
function wg(a) {
  var b = null != a;
  return(b ? a ? a.t & 131072 || a.dg || (a.t ? 0 : kd(je, a)) : kd(je, a) : b) ? ke(a) : null;
}
function xg(a) {
  return null == a ? null : ee(a);
}
var yg = function() {
  function a(a, b) {
    return null == a ? null : de(a, b);
  }
  var b = null, c = function() {
    function a(b, d, h) {
      var l = null;
      2 < arguments.length && (l = H(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (null == a) {
          return null;
        }
        a = b.h(a, d);
        if (q(e)) {
          d = D(e), e = G(e);
        } else {
          return a;
        }
      }
    }
    a.B = 2;
    a.o = function(a) {
      var b = D(a);
      a = G(a);
      var d = D(a);
      a = E(a);
      return c(b, d, a);
    };
    a.k = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.k(b, e, H(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.B = 2;
  b.o = c.o;
  b.g = function(a) {
    return a;
  };
  b.h = a;
  b.k = c.k;
  return b;
}();
function zg(a) {
  return null == a || id(B(a));
}
function Ag(a) {
  return null == a ? !1 : a ? a.t & 8 || a.vh ? !0 : a.t ? !1 : kd(zd, a) : kd(zd, a);
}
function Bg(a) {
  return null == a ? !1 : a ? a.t & 4096 || a.yh ? !0 : a.t ? !1 : kd(ce, a) : kd(ce, a);
}
function Cg(a) {
  return a ? a.t & 16777216 || a.xh ? !0 : a.t ? !1 : kd(ze, a) : kd(ze, a);
}
function Dg(a) {
  return null == a ? !1 : a ? a.t & 1024 || a.bg ? !0 : a.t ? !1 : kd(Qd, a) : kd(Qd, a);
}
function Eg(a) {
  return a ? a.t & 16384 || a.zh ? !0 : a.t ? !1 : kd(ge, a) : kd(ge, a);
}
function U(a) {
  return a ? a.G & 512 || a.uh ? !0 : !1 : !1;
}
function Fg(a) {
  var b = [];
  qb(a, function(a, b) {
    return function(a, c) {
      return b.push(c);
    };
  }(a, b));
  return b;
}
function Gg(a, b, c, d, e) {
  for (;0 !== e;) {
    c[d] = a[b], d += 1, e -= 1, b += 1;
  }
}
function Hg(a, b, c, d, e) {
  b += e - 1;
  for (d += e - 1;0 !== e;) {
    c[d] = a[b], d -= 1, e -= 1, b -= 1;
  }
}
var Ig = {};
function Jg(a) {
  return null == a ? !1 : a ? a.t & 64 || a.gd ? !0 : a.t ? !1 : kd(Cd, a) : kd(Cd, a);
}
function Kg(a) {
  return q(a) ? !0 : !1;
}
function Lg(a, b) {
  return Q.j(a, b, Ig) === Ig ? !1 : !0;
}
function Mg(a, b) {
  var c;
  if (c = null != a) {
    c = a ? a.t & 512 || a.th ? !0 : a.t ? !1 : kd(Nd, a) : kd(Nd, a);
  }
  return c && Lg(a, b) ? new V(null, 2, 5, W, [b, Q.h(a, b)], null) : null;
}
function wf(a, b) {
  if (a === b) {
    return 0;
  }
  if (null == a) {
    return-1;
  }
  if (null == b) {
    return 1;
  }
  if (ld(a) === ld(b)) {
    return a && (a.G & 2048 || a.vd) ? a.wd(null, b) : Va(a, b);
  }
  throw Error("compare on non-nil objects of different types");
}
var Ng = function() {
  function a(a, b, c, g) {
    for (;;) {
      var h = wf(O.h(a, g), O.h(b, g));
      if (0 === h && g + 1 < c) {
        g += 1;
      } else {
        return h;
      }
    }
  }
  function b(a, b) {
    var f = N(a), g = N(b);
    return f < g ? -1 : f > g ? 1 : c.p(a, b, f, 0);
  }
  var c = null, c = function(c, e, f, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 4:
        return a.call(this, c, e, f, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.h = b;
  c.p = a;
  return c;
}();
function Og(a) {
  return vf.h(a, wf) ? wf : function(b, c) {
    var d = a.h ? a.h(b, c) : a.call(null, b, c);
    return "number" === typeof d ? d : q(d) ? -1 : q(a.h ? a.h(c, b) : a.call(null, c, b)) ? 1 : 0;
  };
}
var Qg = function() {
  function a(a, b) {
    if (B(b)) {
      var c = Pg.g ? Pg.g(b) : Pg.call(null, b), g = Og(a);
      Wa(c, g);
      return B(c);
    }
    return Lf;
  }
  function b(a) {
    return c.h(wf, a);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.g = b;
  c.h = a;
  return c;
}(), Rg = function() {
  function a(a, b, c) {
    return Qg.h(function(c, f) {
      return Og(b).call(null, a.g ? a.g(c) : a.call(null, c), a.g ? a.g(f) : a.call(null, f));
    }, c);
  }
  function b(a, b) {
    return c.j(a, wf, b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.h = b;
  c.j = a;
  return c;
}(), bg = function() {
  function a(a, b, c) {
    for (c = B(c);;) {
      if (c) {
        var g = D(c);
        b = a.h ? a.h(b, g) : a.call(null, b, g);
        if (Rf(b)) {
          return ie(b);
        }
        c = G(c);
      } else {
        return b;
      }
    }
  }
  function b(a, b) {
    var c = B(b);
    if (c) {
      var g = D(c), c = G(c);
      return od.j ? od.j(a, g, c) : od.call(null, a, g, c);
    }
    return a.q ? a.q() : a.call(null);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.h = b;
  c.j = a;
  return c;
}(), od = function() {
  function a(a, b, c) {
    return c && (c.t & 524288 || c.fg) ? c.Ma(null, a, b) : c instanceof Array ? Tf.j(c, a, b) : "string" === typeof c ? Tf.j(c, a, b) : kd(se, c) ? te.j(c, a, b) : bg.j(a, b, c);
  }
  function b(a, b) {
    return b && (b.t & 524288 || b.fg) ? b.La(null, a) : b instanceof Array ? Tf.h(b, a) : "string" === typeof b ? Tf.h(b, a) : kd(se, b) ? te.h(b, a) : bg.h(a, b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.h = b;
  c.j = a;
  return c;
}();
function Sg(a, b, c) {
  return null != c ? ue(c, a, b) : b;
}
function Tg(a) {
  return a;
}
var Ug = function() {
  function a(a, b, c, g) {
    a = a.g ? a.g(b) : a.call(null, b);
    c = od.j(a, c, g);
    return a.g ? a.g(c) : a.call(null, c);
  }
  function b(a, b, f) {
    return c.p(a, b, b.q ? b.q() : b.call(null), f);
  }
  var c = null, c = function(c, e, f, g) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, f);
      case 4:
        return a.call(this, c, e, f, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.j = b;
  c.p = a;
  return c;
}(), Vg = function() {
  var a = null, b = function() {
    function b(a, c, g) {
      var h = null;
      2 < arguments.length && (h = H(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, a, c, h);
    }
    function d(b, c, d) {
      return od.j(a, b + c, d);
    }
    b.B = 2;
    b.o = function(a) {
      var b = D(a);
      a = G(a);
      var c = D(a);
      a = E(a);
      return d(b, c, a);
    };
    b.k = d;
    return b;
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 0:
        return 0;
      case 1:
        return a;
      case 2:
        return a + d;
      default:
        return b.k(a, d, H(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.B = 2;
  a.o = b.o;
  a.q = function() {
    return 0;
  };
  a.g = function(a) {
    return a;
  };
  a.h = function(a, b) {
    return a + b;
  };
  a.k = b.k;
  return a;
}(), Wg = function() {
  var a = null, b = function() {
    function b(a, c, g) {
      var h = null;
      2 < arguments.length && (h = H(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, a, c, h);
    }
    function d(b, c, d) {
      return od.j(a, b * c, d);
    }
    b.B = 2;
    b.o = function(a) {
      var b = D(a);
      a = G(a);
      var c = D(a);
      a = E(a);
      return d(b, c, a);
    };
    b.k = d;
    return b;
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 0:
        return 1;
      case 1:
        return a;
      case 2:
        return a * d;
      default:
        return b.k(a, d, H(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.B = 2;
  a.o = b.o;
  a.q = function() {
    return 1;
  };
  a.g = function(a) {
    return a;
  };
  a.h = function(a, b) {
    return a * b;
  };
  a.k = b.k;
  return a;
}(), Xg = function() {
  var a = null, b = function() {
    function a(c, f, g) {
      var h = null;
      2 < arguments.length && (h = H(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, f, h);
    }
    function b(a, c, d) {
      for (;;) {
        if (a > c) {
          if (G(d)) {
            a = c, c = D(d), d = G(d);
          } else {
            return c > D(d);
          }
        } else {
          return!1;
        }
      }
    }
    a.B = 2;
    a.o = function(a) {
      var c = D(a);
      a = G(a);
      var g = D(a);
      a = E(a);
      return b(c, g, a);
    };
    a.k = b;
    return a;
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a > d;
      default:
        return b.k(a, d, H(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.B = 2;
  a.o = b.o;
  a.g = function() {
    return!0;
  };
  a.h = function(a, b) {
    return a > b;
  };
  a.k = b.k;
  return a;
}();
function Yg(a) {
  return a - 1;
}
var Zg = function() {
  function a(a, b) {
    return a > b ? a : b;
  }
  var b = null, c = function() {
    function a(b, d, h) {
      var l = null;
      2 < arguments.length && (l = H(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      return od.j(b, a > d ? a : d, e);
    }
    a.B = 2;
    a.o = function(a) {
      var b = D(a);
      a = G(a);
      var d = D(a);
      a = E(a);
      return c(b, d, a);
    };
    a.k = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.k(b, e, H(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.B = 2;
  b.o = c.o;
  b.g = function(a) {
    return a;
  };
  b.h = a;
  b.k = c.k;
  return b;
}(), $g = function() {
  function a(a, b) {
    return a < b ? a : b;
  }
  var b = null, c = function() {
    function a(b, d, h) {
      var l = null;
      2 < arguments.length && (l = H(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      return od.j(b, a < d ? a : d, e);
    }
    a.B = 2;
    a.o = function(a) {
      var b = D(a);
      a = G(a);
      var d = D(a);
      a = E(a);
      return c(b, d, a);
    };
    a.k = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.k(b, e, H(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.B = 2;
  b.o = c.o;
  b.g = function(a) {
    return a;
  };
  b.h = a;
  b.k = c.k;
  return b;
}();
function ah(a) {
  return 0 <= a ? Math.floor.g ? Math.floor.g(a) : Math.floor.call(null, a) : Math.ceil.g ? Math.ceil.g(a) : Math.ceil.call(null, a);
}
function bh(a) {
  return ah(a);
}
function ch(a, b) {
  return ah((a - a % b) / b);
}
function dh(a, b) {
  var c = ch(a, b);
  return a - b * c;
}
var eh = function() {
  function a(a) {
    return a * c.q();
  }
  function b() {
    return Math.random.q ? Math.random.q() : Math.random.call(null);
  }
  var c = null, c = function(c) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a.call(this, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.q = b;
  c.g = a;
  return c;
}();
function fh(a) {
  return ah(eh.g(a));
}
function gh(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24;
}
function hh(a) {
  return 0 < a;
}
function qh(a) {
  return 0 === a;
}
function rh(a) {
  var b = 1;
  for (a = B(a);;) {
    if (a && 0 < b) {
      b -= 1, a = G(a);
    } else {
      return a;
    }
  }
}
var v = function() {
  function a(a) {
    return null == a ? "" : "" + a;
  }
  var b = null, c = function() {
    function a(b, d) {
      var h = null;
      1 < arguments.length && (h = H(Array.prototype.slice.call(arguments, 1), 0));
      return c.call(this, b, h);
    }
    function c(a, d) {
      for (var e = new Nc(b.g(a)), l = d;;) {
        if (q(l)) {
          e = e.append(b.g(D(l))), l = G(l);
        } else {
          return e.toString();
        }
      }
    }
    a.B = 1;
    a.o = function(a) {
      var b = D(a);
      a = E(a);
      return c(b, a);
    };
    a.k = c;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 0:
        return "";
      case 1:
        return a.call(this, b);
      default:
        return c.k(b, H(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.B = 1;
  b.o = c.o;
  b.q = function() {
    return "";
  };
  b.g = a;
  b.k = c.k;
  return b;
}(), sh = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return a.substring(c);
      case 3:
        return a.substring(c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.h = function(a, c) {
    return a.substring(c);
  };
  a.j = function(a, c, d) {
    return a.substring(c, d);
  };
  return a;
}();
function Yf(a, b) {
  var c;
  if (Cg(b)) {
    if (Uf(a) && Uf(b) && N(a) !== N(b)) {
      c = !1;
    } else {
      a: {
        c = B(a);
        for (var d = B(b);;) {
          if (null == c) {
            c = null == d;
            break a;
          }
          if (null != d && vf.h(D(c), D(d))) {
            c = G(c), d = G(d);
          } else {
            c = !1;
            break a;
          }
        }
        c = void 0;
      }
    }
  } else {
    c = null;
  }
  return Kg(c);
}
function th(a) {
  var b = 0;
  for (a = B(a);;) {
    if (a) {
      var c = D(a), b = (b + (of(function() {
        var a = c;
        return uh.g ? uh.g(a) : uh.call(null, a);
      }()) ^ of(function() {
        var a = c;
        return vh.g ? vh.g(a) : vh.call(null, a);
      }()))) % 4503599627370496;
      a = G(a);
    } else {
      return b;
    }
  }
}
function wh(a, b, c, d, e) {
  this.C = a;
  this.first = b;
  this.qc = c;
  this.count = d;
  this.w = e;
  this.t = 65937646;
  this.G = 8192;
}
k = wh.prototype;
k.toString = function() {
  return ef(this);
};
k.I = function() {
  return this.C;
};
k.Va = function() {
  return 1 === this.count ? null : this.qc;
};
k.V = function() {
  return this.count;
};
k.tc = function() {
  return this.first;
};
k.uc = function() {
  return Fd(this);
};
k.R = function() {
  var a = this.w;
  return null != a ? a : this.w = a = Nf(this);
};
k.O = function(a, b) {
  return Yf(this, b);
};
k.Ha = function() {
  return Lf;
};
k.La = function(a, b) {
  return bg.h(b, this);
};
k.Ma = function(a, b, c) {
  return bg.j(b, c, this);
};
k.Ja = function() {
  return this.first;
};
k.Sa = function() {
  return 1 === this.count ? Lf : this.qc;
};
k.S = function() {
  return this;
};
k.J = function(a, b) {
  return new wh(b, this.first, this.qc, this.count, this.w);
};
k.U = function(a, b) {
  return new wh(this.C, b, this, this.count + 1, null);
};
function xh(a) {
  this.C = a;
  this.t = 65937614;
  this.G = 8192;
}
k = xh.prototype;
k.toString = function() {
  return ef(this);
};
k.I = function() {
  return this.C;
};
k.Va = function() {
  return null;
};
k.V = function() {
  return 0;
};
k.tc = function() {
  return null;
};
k.uc = function() {
  throw Error("Can't pop empty list");
};
k.R = function() {
  return 0;
};
k.O = function(a, b) {
  return Yf(this, b);
};
k.Ha = function() {
  return this;
};
k.La = function(a, b) {
  return bg.h(b, this);
};
k.Ma = function(a, b, c) {
  return bg.j(b, c, this);
};
k.Ja = function() {
  return null;
};
k.Sa = function() {
  return Lf;
};
k.S = function() {
  return null;
};
k.J = function(a, b) {
  return new xh(b);
};
k.U = function(a, b) {
  return new wh(this.C, b, null, 1, null);
};
var Lf = new xh(null);
function yh(a) {
  return(a ? a.t & 134217728 || a.wh || (a.t ? 0 : kd(Ae, a)) : kd(Ae, a)) ? Be(a) : od.j(qg, Lf, a);
}
var zh = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = H(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b;
    if (a instanceof zf && 0 === a.H) {
      b = a.n;
    } else {
      a: {
        for (b = [];;) {
          if (null != a) {
            b.push(a.Ja(null)), a = a.Va(null);
          } else {
            break a;
          }
        }
        b = void 0;
      }
    }
    a = b.length;
    for (var e = Lf;;) {
      if (0 < a) {
        var f = a - 1, e = e.U(null, b[a - 1]);
        a = f;
      } else {
        return e;
      }
    }
  }
  a.B = 0;
  a.o = function(a) {
    a = B(a);
    return b(a);
  };
  a.k = b;
  return a;
}();
function Ah(a, b, c, d) {
  this.C = a;
  this.first = b;
  this.qc = c;
  this.w = d;
  this.t = 65929452;
  this.G = 8192;
}
k = Ah.prototype;
k.toString = function() {
  return ef(this);
};
k.I = function() {
  return this.C;
};
k.Va = function() {
  return null == this.qc ? null : B(this.qc);
};
k.R = function() {
  var a = this.w;
  return null != a ? a : this.w = a = Nf(this);
};
k.O = function(a, b) {
  return Yf(this, b);
};
k.Ha = function() {
  return ag(Lf, this.C);
};
k.La = function(a, b) {
  return bg.h(b, this);
};
k.Ma = function(a, b, c) {
  return bg.j(b, c, this);
};
k.Ja = function() {
  return this.first;
};
k.Sa = function() {
  return null == this.qc ? Lf : this.qc;
};
k.S = function() {
  return this;
};
k.J = function(a, b) {
  return new Ah(b, this.first, this.qc, this.w);
};
k.U = function(a, b) {
  return new Ah(null, b, this, this.w);
};
function Zf(a, b) {
  var c = null == b;
  return(c ? c : b && (b.t & 64 || b.gd)) ? new Ah(null, a, b, null) : new Ah(null, a, B(b), null);
}
function X(a, b, c, d) {
  this.Rb = a;
  this.name = b;
  this.ca = c;
  this.Oc = d;
  this.t = 2153775105;
  this.G = 4096;
}
k = X.prototype;
k.P = function(a, b) {
  return Ce(b, ":" + v.g(this.ca));
};
k.R = function() {
  var a = this.Oc;
  return null != a ? a : this.Oc = a = pf(kf(this.name), nf(this.Rb)) + 2654435769 | 0;
};
k.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Q.h(c, this);
      case 3:
        return Q.j(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.h = function(a, c) {
    return Q.h(c, this);
  };
  a.j = function(a, c, d) {
    return Q.j(c, this, d);
  };
  return a;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(nd(b)));
};
k.g = function(a) {
  return Q.h(a, this);
};
k.h = function(a, b) {
  return Q.j(a, this, b);
};
k.O = function(a, b) {
  return b instanceof X ? this.ca === b.ca : !1;
};
k.toString = function() {
  return ":" + v.g(this.ca);
};
function Z(a, b) {
  return a === b ? !0 : a instanceof X && b instanceof X ? a.ca === b.ca : !1;
}
var Ch = function() {
  function a(a, b) {
    return new X(a, b, "" + v.g(q(a) ? "" + v.g(a) + "/" : null) + v.g(b), null);
  }
  function b(a) {
    if (a instanceof X) {
      return a;
    }
    if (a instanceof xf) {
      var b;
      if (a && (a.G & 4096 || a.eg)) {
        b = a.Rb;
      } else {
        throw Error("Doesn't support namespace: " + v.g(a));
      }
      return new X(b, Bh.g ? Bh.g(a) : Bh.call(null, a), a.Ac, null);
    }
    return "string" === typeof a ? (b = a.split("/"), 2 === b.length ? new X(b[0], b[1], a, null) : new X(null, b[0], a, null)) : null;
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.g = b;
  c.h = a;
  return c;
}();
function Dh(a, b, c, d) {
  this.C = a;
  this.Yc = b;
  this.pa = c;
  this.w = d;
  this.G = 0;
  this.t = 32374988;
}
k = Dh.prototype;
k.toString = function() {
  return ef(this);
};
function Eh(a) {
  null != a.Yc && (a.pa = a.Yc.q ? a.Yc.q() : a.Yc.call(null), a.Yc = null);
  return a.pa;
}
k.I = function() {
  return this.C;
};
k.Va = function() {
  ye(this);
  return null == this.pa ? null : G(this.pa);
};
k.R = function() {
  var a = this.w;
  return null != a ? a : this.w = a = Nf(this);
};
k.O = function(a, b) {
  return Yf(this, b);
};
k.Ha = function() {
  return ag(Lf, this.C);
};
k.La = function(a, b) {
  return bg.h(b, this);
};
k.Ma = function(a, b, c) {
  return bg.j(b, c, this);
};
k.Ja = function() {
  ye(this);
  return null == this.pa ? null : D(this.pa);
};
k.Sa = function() {
  ye(this);
  return null != this.pa ? E(this.pa) : Lf;
};
k.S = function() {
  Eh(this);
  if (null == this.pa) {
    return null;
  }
  for (var a = this.pa;;) {
    if (a instanceof Dh) {
      a = Eh(a);
    } else {
      return this.pa = a, B(this.pa);
    }
  }
};
k.J = function(a, b) {
  return new Dh(b, this.Yc, this.pa, this.w);
};
k.U = function(a, b) {
  return Zf(b, this);
};
function Fh(a, b) {
  this.ra = a;
  this.end = b;
  this.G = 0;
  this.t = 2;
}
Fh.prototype.V = function() {
  return this.end;
};
Fh.prototype.add = function(a) {
  this.ra[this.end] = a;
  return this.end += 1;
};
Fh.prototype.ac = function() {
  var a = new Gh(this.ra, 0, this.end);
  this.ra = null;
  return a;
};
function Hh(a) {
  return new Fh(Array(a), 0);
}
function Gh(a, b, c) {
  this.n = a;
  this.Ua = b;
  this.end = c;
  this.G = 0;
  this.t = 524306;
}
k = Gh.prototype;
k.La = function(a, b) {
  return Tf.p(this.n, b, this.n[this.Ua], this.Ua + 1);
};
k.Ma = function(a, b, c) {
  return Tf.p(this.n, b, c, this.Ua);
};
k.Ve = function() {
  if (this.Ua === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new Gh(this.n, this.Ua + 1, this.end);
};
k.F = function(a, b) {
  return this.n[this.Ua + b];
};
k.ab = function(a, b, c) {
  return 0 <= b && b < this.end - this.Ua ? this.n[this.Ua + b] : c;
};
k.V = function() {
  return this.end - this.Ua;
};
var Ih = function() {
  function a(a, b, c) {
    return new Gh(a, b, c);
  }
  function b(a, b) {
    return new Gh(a, b, a.length);
  }
  function c(a) {
    return new Gh(a, 0, a.length);
  }
  var d = null, d = function(d, f, g) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 2:
        return b.call(this, d, f);
      case 3:
        return a.call(this, d, f, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.g = c;
  d.h = b;
  d.j = a;
  return d;
}();
function Jh(a, b, c, d) {
  this.ac = a;
  this.Jb = b;
  this.C = c;
  this.w = d;
  this.t = 31850732;
  this.G = 1536;
}
k = Jh.prototype;
k.toString = function() {
  return ef(this);
};
k.I = function() {
  return this.C;
};
k.Va = function() {
  if (1 < xd(this.ac)) {
    return new Jh(Qe(this.ac), this.Jb, this.C, null);
  }
  var a = ye(this.Jb);
  return null == a ? null : a;
};
k.R = function() {
  var a = this.w;
  return null != a ? a : this.w = a = Nf(this);
};
k.O = function(a, b) {
  return Yf(this, b);
};
k.Ha = function() {
  return ag(Lf, this.C);
};
k.Ja = function() {
  return w.h(this.ac, 0);
};
k.Sa = function() {
  return 1 < xd(this.ac) ? new Jh(Qe(this.ac), this.Jb, this.C, null) : null == this.Jb ? Lf : this.Jb;
};
k.S = function() {
  return this;
};
k.Ud = function() {
  return this.ac;
};
k.Vd = function() {
  return null == this.Jb ? Lf : this.Jb;
};
k.J = function(a, b) {
  return new Jh(this.ac, this.Jb, b, this.w);
};
k.U = function(a, b) {
  return Zf(b, this);
};
k.Td = function() {
  return null == this.Jb ? null : this.Jb;
};
function Kh(a, b) {
  return 0 === xd(a) ? b : new Jh(a, b, null, null);
}
function Lh(a, b) {
  a.add(b);
}
function Mh(a) {
  return a.ac();
}
function Pg(a) {
  for (var b = [];;) {
    if (B(a)) {
      b.push(D(a)), a = G(a);
    } else {
      return b;
    }
  }
}
var Nh = function() {
  function a(a, b) {
    var c = Array(a);
    if (Jg(b)) {
      for (var g = 0, h = B(b);;) {
        if (h && g < a) {
          c[g] = D(h), g += 1, h = G(h);
        } else {
          return c;
        }
      }
    } else {
      for (g = 0;;) {
        if (g < a) {
          c[g] = b, g += 1;
        } else {
          break;
        }
      }
      return c;
    }
  }
  function b(a) {
    return "number" === typeof a ? c.h(a, null) : td.g(a);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.g = b;
  c.h = a;
  return c;
}();
function Oh(a, b) {
  if (Uf(a)) {
    return N(a);
  }
  for (var c = a, d = b, e = 0;;) {
    if (0 < d && B(c)) {
      c = G(c), d -= 1, e += 1;
    } else {
      return e;
    }
  }
}
var Qh = function Ph(b) {
  return null == b ? null : null == G(b) ? B(D(b)) : Zf(D(b), Ph(G(b)));
}, Rh = function() {
  function a(a, b) {
    return new Dh(null, function() {
      var c = B(a);
      return c ? U(c) ? Kh(x(c), d.h(z(c), b)) : Zf(D(c), d.h(E(c), b)) : b;
    }, null, null);
  }
  function b(a) {
    return new Dh(null, function() {
      return a;
    }, null, null);
  }
  function c() {
    return new Dh(null, function() {
      return null;
    }, null, null);
  }
  var d = null, e = function() {
    function a(c, d, e) {
      var f = null;
      2 < arguments.length && (f = H(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, f);
    }
    function b(a, c, e) {
      return function t(a, b) {
        return new Dh(null, function() {
          var c = B(a);
          return c ? U(c) ? Kh(x(c), t(z(c), b)) : Zf(D(c), t(E(c), b)) : q(b) ? t(D(b), G(b)) : null;
        }, null, null);
      }(d.h(a, c), e);
    }
    a.B = 2;
    a.o = function(a) {
      var c = D(a);
      a = G(a);
      var d = D(a);
      a = E(a);
      return b(c, d, a);
    };
    a.k = b;
    return a;
  }(), d = function(d, g, h) {
    switch(arguments.length) {
      case 0:
        return c.call(this);
      case 1:
        return b.call(this, d);
      case 2:
        return a.call(this, d, g);
      default:
        return e.k(d, g, H(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.B = 2;
  d.o = e.o;
  d.q = c;
  d.g = b;
  d.h = a;
  d.k = e.k;
  return d;
}(), Sh = function() {
  function a(a, b, c, d) {
    return Zf(a, Zf(b, Zf(c, d)));
  }
  function b(a, b, c) {
    return Zf(a, Zf(b, c));
  }
  var c = null, d = function() {
    function a(c, d, e, p, r) {
      var t = null;
      4 < arguments.length && (t = H(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, p, t);
    }
    function b(a, c, d, e, f) {
      return Zf(a, Zf(c, Zf(d, Zf(e, Qh(f)))));
    }
    a.B = 4;
    a.o = function(a) {
      var c = D(a);
      a = G(a);
      var d = D(a);
      a = G(a);
      var e = D(a);
      a = G(a);
      var r = D(a);
      a = E(a);
      return b(c, d, e, r, a);
    };
    a.k = b;
    return a;
  }(), c = function(c, f, g, h, l) {
    switch(arguments.length) {
      case 1:
        return B(c);
      case 2:
        return Zf(c, f);
      case 3:
        return b.call(this, c, f, g);
      case 4:
        return a.call(this, c, f, g, h);
      default:
        return d.k(c, f, g, h, H(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.B = 4;
  c.o = d.o;
  c.g = function(a) {
    return B(a);
  };
  c.h = function(a, b) {
    return Zf(a, b);
  };
  c.j = b;
  c.p = a;
  c.k = d.k;
  return c;
}();
function Th(a) {
  return Ke(a);
}
var Uh = function() {
  function a() {
    return Ie(pg);
  }
  var b = null, c = function() {
    function a(c, d, h) {
      var l = null;
      2 < arguments.length && (l = H(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      for (;;) {
        if (a = Je(a, c), q(d)) {
          c = D(d), d = G(d);
        } else {
          return a;
        }
      }
    }
    a.B = 2;
    a.o = function(a) {
      var c = D(a);
      a = G(a);
      var d = D(a);
      a = E(a);
      return b(c, d, a);
    };
    a.k = b;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 0:
        return a.call(this);
      case 1:
        return b;
      case 2:
        return Je(b, e);
      default:
        return c.k(b, e, H(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.B = 2;
  b.o = c.o;
  b.q = a;
  b.g = function(a) {
    return a;
  };
  b.h = function(a, b) {
    return Je(a, b);
  };
  b.k = c.k;
  return b;
}(), Vh = function() {
  var a = null, b = function() {
    function a(c, f, g, h) {
      var l = null;
      3 < arguments.length && (l = H(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, f, g, l);
    }
    function b(a, c, d, h) {
      for (;;) {
        if (a = Oe(a, c, d), q(h)) {
          c = D(h), d = cg(h), h = G(G(h));
        } else {
          return a;
        }
      }
    }
    a.B = 3;
    a.o = function(a) {
      var c = D(a);
      a = G(a);
      var g = D(a);
      a = G(a);
      var h = D(a);
      a = E(a);
      return b(c, g, h, a);
    };
    a.k = b;
    return a;
  }(), a = function(a, d, e, f) {
    switch(arguments.length) {
      case 3:
        return Oe(a, d, e);
      default:
        return b.k(a, d, e, H(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.B = 3;
  a.o = b.o;
  a.j = function(a, b, e) {
    return Oe(a, b, e);
  };
  a.k = b.k;
  return a;
}();
function Wh(a, b, c) {
  var d = B(c);
  if (0 === b) {
    return a.q ? a.q() : a.call(null);
  }
  c = Ed(d);
  var e = Fd(d);
  if (1 === b) {
    return a.g ? a.g(c) : a.g ? a.g(c) : a.call(null, c);
  }
  var d = Ed(e), f = Fd(e);
  if (2 === b) {
    return a.h ? a.h(c, d) : a.h ? a.h(c, d) : a.call(null, c, d);
  }
  var e = Ed(f), g = Fd(f);
  if (3 === b) {
    return a.j ? a.j(c, d, e) : a.j ? a.j(c, d, e) : a.call(null, c, d, e);
  }
  var f = Ed(g), h = Fd(g);
  if (4 === b) {
    return a.p ? a.p(c, d, e, f) : a.p ? a.p(c, d, e, f) : a.call(null, c, d, e, f);
  }
  var g = Ed(h), l = Fd(h);
  if (5 === b) {
    return a.M ? a.M(c, d, e, f, g) : a.M ? a.M(c, d, e, f, g) : a.call(null, c, d, e, f, g);
  }
  var h = Ed(l), p = Fd(l);
  if (6 === b) {
    return a.Qa ? a.Qa(c, d, e, f, g, h) : a.Qa ? a.Qa(c, d, e, f, g, h) : a.call(null, c, d, e, f, g, h);
  }
  var l = Ed(p), r = Fd(p);
  if (7 === b) {
    return a.$a ? a.$a(c, d, e, f, g, h, l) : a.$a ? a.$a(c, d, e, f, g, h, l) : a.call(null, c, d, e, f, g, h, l);
  }
  var p = Ed(r), t = Fd(r);
  if (8 === b) {
    return a.mc ? a.mc(c, d, e, f, g, h, l, p) : a.mc ? a.mc(c, d, e, f, g, h, l, p) : a.call(null, c, d, e, f, g, h, l, p);
  }
  var r = Ed(t), u = Fd(t);
  if (9 === b) {
    return a.nc ? a.nc(c, d, e, f, g, h, l, p, r) : a.nc ? a.nc(c, d, e, f, g, h, l, p, r) : a.call(null, c, d, e, f, g, h, l, p, r);
  }
  var t = Ed(u), A = Fd(u);
  if (10 === b) {
    return a.bc ? a.bc(c, d, e, f, g, h, l, p, r, t) : a.bc ? a.bc(c, d, e, f, g, h, l, p, r, t) : a.call(null, c, d, e, f, g, h, l, p, r, t);
  }
  var u = Ed(A), y = Fd(A);
  if (11 === b) {
    return a.cc ? a.cc(c, d, e, f, g, h, l, p, r, t, u) : a.cc ? a.cc(c, d, e, f, g, h, l, p, r, t, u) : a.call(null, c, d, e, f, g, h, l, p, r, t, u);
  }
  var A = Ed(y), C = Fd(y);
  if (12 === b) {
    return a.dc ? a.dc(c, d, e, f, g, h, l, p, r, t, u, A) : a.dc ? a.dc(c, d, e, f, g, h, l, p, r, t, u, A) : a.call(null, c, d, e, f, g, h, l, p, r, t, u, A);
  }
  var y = Ed(C), F = Fd(C);
  if (13 === b) {
    return a.ec ? a.ec(c, d, e, f, g, h, l, p, r, t, u, A, y) : a.ec ? a.ec(c, d, e, f, g, h, l, p, r, t, u, A, y) : a.call(null, c, d, e, f, g, h, l, p, r, t, u, A, y);
  }
  var C = Ed(F), J = Fd(F);
  if (14 === b) {
    return a.fc ? a.fc(c, d, e, f, g, h, l, p, r, t, u, A, y, C) : a.fc ? a.fc(c, d, e, f, g, h, l, p, r, t, u, A, y, C) : a.call(null, c, d, e, f, g, h, l, p, r, t, u, A, y, C);
  }
  var F = Ed(J), L = Fd(J);
  if (15 === b) {
    return a.gc ? a.gc(c, d, e, f, g, h, l, p, r, t, u, A, y, C, F) : a.gc ? a.gc(c, d, e, f, g, h, l, p, r, t, u, A, y, C, F) : a.call(null, c, d, e, f, g, h, l, p, r, t, u, A, y, C, F);
  }
  var J = Ed(L), I = Fd(L);
  if (16 === b) {
    return a.hc ? a.hc(c, d, e, f, g, h, l, p, r, t, u, A, y, C, F, J) : a.hc ? a.hc(c, d, e, f, g, h, l, p, r, t, u, A, y, C, F, J) : a.call(null, c, d, e, f, g, h, l, p, r, t, u, A, y, C, F, J);
  }
  var L = Ed(I), P = Fd(I);
  if (17 === b) {
    return a.ic ? a.ic(c, d, e, f, g, h, l, p, r, t, u, A, y, C, F, J, L) : a.ic ? a.ic(c, d, e, f, g, h, l, p, r, t, u, A, y, C, F, J, L) : a.call(null, c, d, e, f, g, h, l, p, r, t, u, A, y, C, F, J, L);
  }
  var I = Ed(P), T = Fd(P);
  if (18 === b) {
    return a.jc ? a.jc(c, d, e, f, g, h, l, p, r, t, u, A, y, C, F, J, L, I) : a.jc ? a.jc(c, d, e, f, g, h, l, p, r, t, u, A, y, C, F, J, L, I) : a.call(null, c, d, e, f, g, h, l, p, r, t, u, A, y, C, F, J, L, I);
  }
  P = Ed(T);
  T = Fd(T);
  if (19 === b) {
    return a.kc ? a.kc(c, d, e, f, g, h, l, p, r, t, u, A, y, C, F, J, L, I, P) : a.kc ? a.kc(c, d, e, f, g, h, l, p, r, t, u, A, y, C, F, J, L, I, P) : a.call(null, c, d, e, f, g, h, l, p, r, t, u, A, y, C, F, J, L, I, P);
  }
  var M = Ed(T);
  Fd(T);
  if (20 === b) {
    return a.lc ? a.lc(c, d, e, f, g, h, l, p, r, t, u, A, y, C, F, J, L, I, P, M) : a.lc ? a.lc(c, d, e, f, g, h, l, p, r, t, u, A, y, C, F, J, L, I, P, M) : a.call(null, c, d, e, f, g, h, l, p, r, t, u, A, y, C, F, J, L, I, P, M);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var S = function() {
  function a(a, b, c, d, e) {
    b = Sh.p(b, c, d, e);
    c = a.B;
    return a.o ? (d = Oh(b, c + 1), d <= c ? Wh(a, d, b) : a.o(b)) : a.apply(a, Pg(b));
  }
  function b(a, b, c, d) {
    b = Sh.j(b, c, d);
    c = a.B;
    return a.o ? (d = Oh(b, c + 1), d <= c ? Wh(a, d, b) : a.o(b)) : a.apply(a, Pg(b));
  }
  function c(a, b, c) {
    b = Sh.h(b, c);
    c = a.B;
    if (a.o) {
      var d = Oh(b, c + 1);
      return d <= c ? Wh(a, d, b) : a.o(b);
    }
    return a.apply(a, Pg(b));
  }
  function d(a, b) {
    var c = a.B;
    if (a.o) {
      var d = Oh(b, c + 1);
      return d <= c ? Wh(a, d, b) : a.o(b);
    }
    return a.apply(a, Pg(b));
  }
  var e = null, f = function() {
    function a(c, d, e, f, g, A) {
      var y = null;
      5 < arguments.length && (y = H(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, e, f, g, y);
    }
    function b(a, c, d, e, f, g) {
      c = Zf(c, Zf(d, Zf(e, Zf(f, Qh(g)))));
      d = a.B;
      return a.o ? (e = Oh(c, d + 1), e <= d ? Wh(a, e, c) : a.o(c)) : a.apply(a, Pg(c));
    }
    a.B = 5;
    a.o = function(a) {
      var c = D(a);
      a = G(a);
      var d = D(a);
      a = G(a);
      var e = D(a);
      a = G(a);
      var f = D(a);
      a = G(a);
      var g = D(a);
      a = E(a);
      return b(c, d, e, f, g, a);
    };
    a.k = b;
    return a;
  }(), e = function(e, h, l, p, r, t) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, h);
      case 3:
        return c.call(this, e, h, l);
      case 4:
        return b.call(this, e, h, l, p);
      case 5:
        return a.call(this, e, h, l, p, r);
      default:
        return f.k(e, h, l, p, r, H(arguments, 5));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.B = 5;
  e.o = f.o;
  e.h = d;
  e.j = c;
  e.p = b;
  e.M = a;
  e.k = f.k;
  return e;
}(), Xh = function() {
  function a(a, b, c, d, e, f) {
    var g = ag, y = wg(a);
    b = b.M ? b.M(y, c, d, e, f) : b.call(null, y, c, d, e, f);
    return g(a, b);
  }
  function b(a, b, c, d, e) {
    var f = ag, g = wg(a);
    b = b.p ? b.p(g, c, d, e) : b.call(null, g, c, d, e);
    return f(a, b);
  }
  function c(a, b, c, d) {
    var e = ag, f = wg(a);
    b = b.j ? b.j(f, c, d) : b.call(null, f, c, d);
    return e(a, b);
  }
  function d(a, b, c) {
    var d = ag, e = wg(a);
    b = b.h ? b.h(e, c) : b.call(null, e, c);
    return d(a, b);
  }
  function e(a, b) {
    var c = ag, d;
    d = wg(a);
    d = b.g ? b.g(d) : b.call(null, d);
    return c(a, d);
  }
  var f = null, g = function() {
    function a(c, d, e, f, g, h, C) {
      var F = null;
      6 < arguments.length && (F = H(Array.prototype.slice.call(arguments, 6), 0));
      return b.call(this, c, d, e, f, g, h, F);
    }
    function b(a, c, d, e, f, g, h) {
      return ag(a, S.k(c, wg(a), d, e, f, H([g, h], 0)));
    }
    a.B = 6;
    a.o = function(a) {
      var c = D(a);
      a = G(a);
      var d = D(a);
      a = G(a);
      var e = D(a);
      a = G(a);
      var f = D(a);
      a = G(a);
      var g = D(a);
      a = G(a);
      var h = D(a);
      a = E(a);
      return b(c, d, e, f, g, h, a);
    };
    a.k = b;
    return a;
  }(), f = function(f, l, p, r, t, u, A) {
    switch(arguments.length) {
      case 2:
        return e.call(this, f, l);
      case 3:
        return d.call(this, f, l, p);
      case 4:
        return c.call(this, f, l, p, r);
      case 5:
        return b.call(this, f, l, p, r, t);
      case 6:
        return a.call(this, f, l, p, r, t, u);
      default:
        return g.k(f, l, p, r, t, u, H(arguments, 6));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  f.B = 6;
  f.o = g.o;
  f.h = e;
  f.j = d;
  f.p = c;
  f.M = b;
  f.Qa = a;
  f.k = g.k;
  return f;
}(), Yh = function() {
  function a(a, b) {
    return!vf.h(a, b);
  }
  var b = null, c = function() {
    function a(c, d, h) {
      var l = null;
      2 < arguments.length && (l = H(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      return id(S.p(vf, a, c, d));
    }
    a.B = 2;
    a.o = function(a) {
      var c = D(a);
      a = G(a);
      var d = D(a);
      a = E(a);
      return b(c, d, a);
    };
    a.k = b;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return!1;
      case 2:
        return a.call(this, b, e);
      default:
        return c.k(b, e, H(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.B = 2;
  b.o = c.o;
  b.g = function() {
    return!1;
  };
  b.h = a;
  b.k = c.k;
  return b;
}();
function Zh(a) {
  return B(a) ? a : null;
}
function $h(a, b) {
  for (;;) {
    if (null == B(b)) {
      return!0;
    }
    var c;
    c = D(b);
    c = a.g ? a.g(c) : a.call(null, c);
    if (q(c)) {
      c = a;
      var d = G(b);
      a = c;
      b = d;
    } else {
      return!1;
    }
  }
}
function ai(a, b) {
  for (;;) {
    if (B(b)) {
      var c;
      c = D(b);
      c = a.g ? a.g(c) : a.call(null, c);
      if (q(c)) {
        return c;
      }
      c = a;
      var d = G(b);
      a = c;
      b = d;
    } else {
      return null;
    }
  }
}
function bi(a) {
  if ("number" === typeof a && id(isNaN(a)) && Infinity !== a && parseFloat(a) === parseInt(a, 10)) {
    return 0 === (a & 1);
  }
  throw Error("Argument must be an integer: " + v.g(a));
}
function ci(a) {
  return function() {
    function b(b, c) {
      return id(a.h ? a.h(b, c) : a.call(null, b, c));
    }
    function c(b) {
      return id(a.g ? a.g(b) : a.call(null, b));
    }
    function d() {
      return id(a.q ? a.q() : a.call(null));
    }
    var e = null, f = function() {
      function b(a, d, e) {
        var f = null;
        2 < arguments.length && (f = H(Array.prototype.slice.call(arguments, 2), 0));
        return c.call(this, a, d, f);
      }
      function c(b, d, e) {
        return id(S.p(a, b, d, e));
      }
      b.B = 2;
      b.o = function(a) {
        var b = D(a);
        a = G(a);
        var d = D(a);
        a = E(a);
        return c(b, d, a);
      };
      b.k = c;
      return b;
    }(), e = function(a, e, l) {
      switch(arguments.length) {
        case 0:
          return d.call(this);
        case 1:
          return c.call(this, a);
        case 2:
          return b.call(this, a, e);
        default:
          return f.k(a, e, H(arguments, 2));
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    e.B = 2;
    e.o = f.o;
    e.q = d;
    e.g = c;
    e.h = b;
    e.k = f.k;
    return e;
  }();
}
function di(a) {
  return function() {
    function b(b) {
      0 < arguments.length && H(Array.prototype.slice.call(arguments, 0), 0);
      return a;
    }
    b.B = 0;
    b.o = function(b) {
      B(b);
      return a;
    };
    b.k = function() {
      return a;
    };
    return b;
  }();
}
var ei = function() {
  function a(a, b, c) {
    return function() {
      function d(h, l, r) {
        h = c.j ? c.j(h, l, r) : c.call(null, h, l, r);
        h = b.g ? b.g(h) : b.call(null, h);
        return a.g ? a.g(h) : a.call(null, h);
      }
      function l(d, h) {
        var l;
        l = c.h ? c.h(d, h) : c.call(null, d, h);
        l = b.g ? b.g(l) : b.call(null, l);
        return a.g ? a.g(l) : a.call(null, l);
      }
      function p(d) {
        d = c.g ? c.g(d) : c.call(null, d);
        d = b.g ? b.g(d) : b.call(null, d);
        return a.g ? a.g(d) : a.call(null, d);
      }
      function r() {
        var d;
        d = c.q ? c.q() : c.call(null);
        d = b.g ? b.g(d) : b.call(null, d);
        return a.g ? a.g(d) : a.call(null, d);
      }
      var t = null, u = function() {
        function d(a, b, c, e) {
          var f = null;
          3 < arguments.length && (f = H(Array.prototype.slice.call(arguments, 3), 0));
          return h.call(this, a, b, c, f);
        }
        function h(d, l, r, p) {
          d = S.M(c, d, l, r, p);
          d = b.g ? b.g(d) : b.call(null, d);
          return a.g ? a.g(d) : a.call(null, d);
        }
        d.B = 3;
        d.o = function(a) {
          var b = D(a);
          a = G(a);
          var c = D(a);
          a = G(a);
          var d = D(a);
          a = E(a);
          return h(b, c, d, a);
        };
        d.k = h;
        return d;
      }(), t = function(a, b, c, e) {
        switch(arguments.length) {
          case 0:
            return r.call(this);
          case 1:
            return p.call(this, a);
          case 2:
            return l.call(this, a, b);
          case 3:
            return d.call(this, a, b, c);
          default:
            return u.k(a, b, c, H(arguments, 3));
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      t.B = 3;
      t.o = u.o;
      t.q = r;
      t.g = p;
      t.h = l;
      t.j = d;
      t.k = u.k;
      return t;
    }();
  }
  function b(a, b) {
    return function() {
      function c(d, g, h) {
        d = b.j ? b.j(d, g, h) : b.call(null, d, g, h);
        return a.g ? a.g(d) : a.call(null, d);
      }
      function d(c, g) {
        var h = b.h ? b.h(c, g) : b.call(null, c, g);
        return a.g ? a.g(h) : a.call(null, h);
      }
      function l(c) {
        c = b.g ? b.g(c) : b.call(null, c);
        return a.g ? a.g(c) : a.call(null, c);
      }
      function p() {
        var c = b.q ? b.q() : b.call(null);
        return a.g ? a.g(c) : a.call(null, c);
      }
      var r = null, t = function() {
        function c(a, b, e, f) {
          var g = null;
          3 < arguments.length && (g = H(Array.prototype.slice.call(arguments, 3), 0));
          return d.call(this, a, b, e, g);
        }
        function d(c, g, h, l) {
          c = S.M(b, c, g, h, l);
          return a.g ? a.g(c) : a.call(null, c);
        }
        c.B = 3;
        c.o = function(a) {
          var b = D(a);
          a = G(a);
          var c = D(a);
          a = G(a);
          var e = D(a);
          a = E(a);
          return d(b, c, e, a);
        };
        c.k = d;
        return c;
      }(), r = function(a, b, e, f) {
        switch(arguments.length) {
          case 0:
            return p.call(this);
          case 1:
            return l.call(this, a);
          case 2:
            return d.call(this, a, b);
          case 3:
            return c.call(this, a, b, e);
          default:
            return t.k(a, b, e, H(arguments, 3));
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      r.B = 3;
      r.o = t.o;
      r.q = p;
      r.g = l;
      r.h = d;
      r.j = c;
      r.k = t.k;
      return r;
    }();
  }
  var c = null, d = function() {
    function a(c, d, e, p) {
      var r = null;
      3 < arguments.length && (r = H(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, d, e, r);
    }
    function b(a, c, d, e) {
      return function(a) {
        return function() {
          function b(a) {
            var d = null;
            0 < arguments.length && (d = H(Array.prototype.slice.call(arguments, 0), 0));
            return c.call(this, d);
          }
          function c(b) {
            b = S.h(D(a), b);
            for (var d = G(a);;) {
              if (d) {
                b = D(d).call(null, b), d = G(d);
              } else {
                return b;
              }
            }
          }
          b.B = 0;
          b.o = function(a) {
            a = B(a);
            return c(a);
          };
          b.k = c;
          return b;
        }();
      }(yh(Sh.p(a, c, d, e)));
    }
    a.B = 3;
    a.o = function(a) {
      var c = D(a);
      a = G(a);
      var d = D(a);
      a = G(a);
      var e = D(a);
      a = E(a);
      return b(c, d, e, a);
    };
    a.k = b;
    return a;
  }(), c = function(c, f, g, h) {
    switch(arguments.length) {
      case 0:
        return Tg;
      case 1:
        return c;
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, g);
      default:
        return d.k(c, f, g, H(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.B = 3;
  c.o = d.o;
  c.q = function() {
    return Tg;
  };
  c.g = function(a) {
    return a;
  };
  c.h = b;
  c.j = a;
  c.k = d.k;
  return c;
}(), fi = function() {
  function a(a, b, c, d) {
    return function() {
      function e(a) {
        var b = null;
        0 < arguments.length && (b = H(Array.prototype.slice.call(arguments, 0), 0));
        return r.call(this, b);
      }
      function r(e) {
        return S.M(a, b, c, d, e);
      }
      e.B = 0;
      e.o = function(a) {
        a = B(a);
        return r(a);
      };
      e.k = r;
      return e;
    }();
  }
  function b(a, b, c) {
    return function() {
      function d(a) {
        var b = null;
        0 < arguments.length && (b = H(Array.prototype.slice.call(arguments, 0), 0));
        return e.call(this, b);
      }
      function e(d) {
        return S.p(a, b, c, d);
      }
      d.B = 0;
      d.o = function(a) {
        a = B(a);
        return e(a);
      };
      d.k = e;
      return d;
    }();
  }
  function c(a, b) {
    return function() {
      function c(a) {
        var b = null;
        0 < arguments.length && (b = H(Array.prototype.slice.call(arguments, 0), 0));
        return d.call(this, b);
      }
      function d(c) {
        return S.j(a, b, c);
      }
      c.B = 0;
      c.o = function(a) {
        a = B(a);
        return d(a);
      };
      c.k = d;
      return c;
    }();
  }
  var d = null, e = function() {
    function a(c, d, e, f, t) {
      var u = null;
      4 < arguments.length && (u = H(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, u);
    }
    function b(a, c, d, e, f) {
      return function() {
        function b(a) {
          var c = null;
          0 < arguments.length && (c = H(Array.prototype.slice.call(arguments, 0), 0));
          return g.call(this, c);
        }
        function g(b) {
          return S.M(a, c, d, e, Rh.h(f, b));
        }
        b.B = 0;
        b.o = function(a) {
          a = B(a);
          return g(a);
        };
        b.k = g;
        return b;
      }();
    }
    a.B = 4;
    a.o = function(a) {
      var c = D(a);
      a = G(a);
      var d = D(a);
      a = G(a);
      var e = D(a);
      a = G(a);
      var f = D(a);
      a = E(a);
      return b(c, d, e, f, a);
    };
    a.k = b;
    return a;
  }(), d = function(d, g, h, l, p) {
    switch(arguments.length) {
      case 1:
        return d;
      case 2:
        return c.call(this, d, g);
      case 3:
        return b.call(this, d, g, h);
      case 4:
        return a.call(this, d, g, h, l);
      default:
        return e.k(d, g, h, l, H(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.B = 4;
  d.o = e.o;
  d.g = function(a) {
    return a;
  };
  d.h = c;
  d.j = b;
  d.p = a;
  d.k = e.k;
  return d;
}();
function gi(a, b) {
  return function d(b, f) {
    return new Dh(null, function() {
      var g = B(f);
      if (g) {
        if (U(g)) {
          for (var h = x(g), l = N(h), p = Hh(l), r = 0;;) {
            if (r < l) {
              Lh(p, function() {
                var d = b + r, f = w.h(h, r);
                return a.h ? a.h(d, f) : a.call(null, d, f);
              }()), r += 1;
            } else {
              break;
            }
          }
          return Kh(Mh(p), d(b + l, z(g)));
        }
        return Zf(function() {
          var d = D(g);
          return a.h ? a.h(b, d) : a.call(null, b, d);
        }(), d(b + 1, E(g)));
      }
      return null;
    }, null, null);
  }(0, b);
}
var hi = function() {
  function a(a, b) {
    return new Dh(null, function() {
      var f = B(b);
      if (f) {
        if (U(f)) {
          for (var g = x(f), h = N(g), l = Hh(h), p = 0;;) {
            if (p < h) {
              var r = function() {
                var b = w.h(g, p);
                return a.g ? a.g(b) : a.call(null, b);
              }();
              null != r && l.add(r);
              p += 1;
            } else {
              break;
            }
          }
          return Kh(Mh(l), c.h(a, z(f)));
        }
        h = function() {
          var b = D(f);
          return a.g ? a.g(b) : a.call(null, b);
        }();
        return null == h ? c.h(a, E(f)) : Zf(h, c.h(a, E(f)));
      }
      return null;
    }, null, null);
  }
  function b(a) {
    return function(b) {
      return function() {
        function c(f, g) {
          var h = a.g ? a.g(g) : a.call(null, g);
          return null == h ? f : b.h ? b.h(f, h) : b.call(null, f, h);
        }
        function g(a) {
          return b.g ? b.g(a) : b.call(null, a);
        }
        function h() {
          return b.q ? b.q() : b.call(null);
        }
        var l = null, l = function(a, b) {
          switch(arguments.length) {
            case 0:
              return h.call(this);
            case 1:
              return g.call(this, a);
            case 2:
              return c.call(this, a, b);
          }
          throw Error("Invalid arity: " + arguments.length);
        };
        l.q = h;
        l.g = g;
        l.h = c;
        return l;
      }();
    };
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.g = b;
  c.h = a;
  return c;
}();
function ii(a, b, c, d) {
  this.state = a;
  this.C = b;
  this.mh = c;
  this.Ka = d;
  this.t = 6455296;
  this.G = 16386;
}
k = ii.prototype;
k.R = function() {
  return this[ja] || (this[ja] = ++la);
};
k.Xd = function(a, b, c) {
  for (var d = B(this.Ka), e = null, f = 0, g = 0;;) {
    if (g < f) {
      a = e.F(null, g);
      var h = O.j(a, 0, null);
      a = O.j(a, 1, null);
      var l = b, p = c;
      a.p ? a.p(h, this, l, p) : a.call(null, h, this, l, p);
      g += 1;
    } else {
      if (a = B(d)) {
        d = a, U(d) ? (e = x(d), d = z(d), a = e, f = N(e), e = a) : (a = D(d), h = O.j(a, 0, null), a = O.j(a, 1, null), e = h, f = b, g = c, a.p ? a.p(e, this, f, g) : a.call(null, e, this, f, g), d = G(d), e = null, f = 0), g = 0;
      } else {
        return null;
      }
    }
  }
};
k.Wd = function(a, b, c) {
  this.Ka = R.j(this.Ka, b, c);
  return this;
};
k.Yd = function(a, b) {
  return this.Ka = tg.h(this.Ka, b);
};
k.I = function() {
  return this.C;
};
k.Qc = function() {
  return this.state;
};
k.O = function(a, b) {
  return this === b;
};
var li = function() {
  function a(a) {
    return new ii(a, null, null, null);
  }
  var b = null, c = function() {
    function a(c, d) {
      var h = null;
      1 < arguments.length && (h = H(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, h);
    }
    function b(a, c) {
      var d = Jg(c) ? S.h(ji, c) : c, e = Q.h(d, ki), d = Q.h(d, Xc);
      return new ii(a, d, e, null);
    }
    a.B = 1;
    a.o = function(a) {
      var c = D(a);
      a = E(a);
      return b(c, a);
    };
    a.k = b;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.k(b, H(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.B = 1;
  b.o = c.o;
  b.g = a;
  b.k = c.k;
  return b;
}();
function mi(a, b) {
  if (a instanceof ii) {
    var c = a.mh;
    if (null != c && !q(c.g ? c.g(b) : c.call(null, b))) {
      throw Error("Assert failed: Validator rejected reference state\n" + v.g(function() {
        var a = zh(new xf(null, "validate", "validate", 1439230700, null), new xf(null, "new-value", "new-value", -1567397401, null));
        return ni.g ? ni.g(a) : ni.call(null, a);
      }()));
    }
    c = a.state;
    a.state = b;
    null != a.Ka && Fe(a, c, b);
    return b;
  }
  return Se(a, b);
}
var oi = function() {
  function a(a, b, c, d) {
    if (a instanceof ii) {
      var e = a.state;
      b = b.j ? b.j(e, c, d) : b.call(null, e, c, d);
      a = mi(a, b);
    } else {
      a = bf.p(a, b, c, d);
    }
    return a;
  }
  function b(a, b, c) {
    if (a instanceof ii) {
      var d = a.state;
      b = b.h ? b.h(d, c) : b.call(null, d, c);
      a = mi(a, b);
    } else {
      a = bf.j(a, b, c);
    }
    return a;
  }
  function c(a, b) {
    var c;
    a instanceof ii ? (c = a.state, c = b.g ? b.g(c) : b.call(null, c), c = mi(a, c)) : c = bf.h(a, b);
    return c;
  }
  var d = null, e = function() {
    function a(c, d, e, f, t) {
      var u = null;
      4 < arguments.length && (u = H(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, u);
    }
    function b(a, c, d, e, f) {
      return a instanceof ii ? mi(a, S.M(c, a.state, d, e, f)) : bf.M(a, c, d, e, f);
    }
    a.B = 4;
    a.o = function(a) {
      var c = D(a);
      a = G(a);
      var d = D(a);
      a = G(a);
      var e = D(a);
      a = G(a);
      var f = D(a);
      a = E(a);
      return b(c, d, e, f, a);
    };
    a.k = b;
    return a;
  }(), d = function(d, g, h, l, p) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, g);
      case 3:
        return b.call(this, d, g, h);
      case 4:
        return a.call(this, d, g, h, l);
      default:
        return e.k(d, g, h, l, H(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.B = 4;
  d.o = e.o;
  d.h = c;
  d.j = b;
  d.p = a;
  d.k = e.k;
  return d;
}(), pi = function() {
  function a(a, b) {
    return function g(b, c) {
      return new Dh(null, function() {
        var e = B(c);
        if (e) {
          if (U(e)) {
            for (var r = x(e), t = N(r), u = Hh(t), A = 0;;) {
              if (A < t) {
                var y = function() {
                  var c = b + A, e = w.h(r, A);
                  return a.h ? a.h(c, e) : a.call(null, c, e);
                }();
                null != y && u.add(y);
                A += 1;
              } else {
                break;
              }
            }
            return Kh(Mh(u), g(b + t, z(e)));
          }
          t = function() {
            var c = D(e);
            return a.h ? a.h(b, c) : a.call(null, b, c);
          }();
          return null == t ? g(b + 1, E(e)) : Zf(t, g(b + 1, E(e)));
        }
        return null;
      }, null, null);
    }(0, b);
  }
  function b(a) {
    return function(b) {
      return function(c) {
        return function() {
          function g(g, h) {
            var l = oi.h(c, Pf), l = a.h ? a.h(l, h) : a.call(null, l, h);
            return null == l ? g : b.h ? b.h(g, l) : b.call(null, g, l);
          }
          function h(a) {
            return b.g ? b.g(a) : b.call(null, a);
          }
          function l() {
            return b.q ? b.q() : b.call(null);
          }
          var p = null, p = function(a, b) {
            switch(arguments.length) {
              case 0:
                return l.call(this);
              case 1:
                return h.call(this, a);
              case 2:
                return g.call(this, a, b);
            }
            throw Error("Invalid arity: " + arguments.length);
          };
          p.q = l;
          p.g = h;
          p.h = g;
          return p;
        }();
      }(li.g(-1));
    };
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.g = b;
  c.h = a;
  return c;
}(), qi = function() {
  function a(a, b, c, d) {
    return new Dh(null, function() {
      var f = B(b), t = B(c), u = B(d);
      if (f && t && u) {
        var A = Zf, y;
        y = D(f);
        var C = D(t), F = D(u);
        y = a.j ? a.j(y, C, F) : a.call(null, y, C, F);
        f = A(y, e.p(a, E(f), E(t), E(u)));
      } else {
        f = null;
      }
      return f;
    }, null, null);
  }
  function b(a, b, c) {
    return new Dh(null, function() {
      var d = B(b), f = B(c);
      if (d && f) {
        var t = Zf, u;
        u = D(d);
        var A = D(f);
        u = a.h ? a.h(u, A) : a.call(null, u, A);
        d = t(u, e.j(a, E(d), E(f)));
      } else {
        d = null;
      }
      return d;
    }, null, null);
  }
  function c(a, b) {
    return new Dh(null, function() {
      var c = B(b);
      if (c) {
        if (U(c)) {
          for (var d = x(c), f = N(d), t = Hh(f), u = 0;;) {
            if (u < f) {
              Lh(t, function() {
                var b = w.h(d, u);
                return a.g ? a.g(b) : a.call(null, b);
              }()), u += 1;
            } else {
              break;
            }
          }
          return Kh(Mh(t), e.h(a, z(c)));
        }
        return Zf(function() {
          var b = D(c);
          return a.g ? a.g(b) : a.call(null, b);
        }(), e.h(a, E(c)));
      }
      return null;
    }, null, null);
  }
  function d(a) {
    return function(b) {
      return function() {
        function c(d, e) {
          var f = a.g ? a.g(e) : a.call(null, e);
          return b.h ? b.h(d, f) : b.call(null, d, f);
        }
        function d(a) {
          return b.g ? b.g(a) : b.call(null, a);
        }
        function e() {
          return b.q ? b.q() : b.call(null);
        }
        var f = null, u = function() {
          function c(a, b, e) {
            var f = null;
            2 < arguments.length && (f = H(Array.prototype.slice.call(arguments, 2), 0));
            return d.call(this, a, b, f);
          }
          function d(c, e, f) {
            e = S.j(a, e, f);
            return b.h ? b.h(c, e) : b.call(null, c, e);
          }
          c.B = 2;
          c.o = function(a) {
            var b = D(a);
            a = G(a);
            var c = D(a);
            a = E(a);
            return d(b, c, a);
          };
          c.k = d;
          return c;
        }(), f = function(a, b, f) {
          switch(arguments.length) {
            case 0:
              return e.call(this);
            case 1:
              return d.call(this, a);
            case 2:
              return c.call(this, a, b);
            default:
              return u.k(a, b, H(arguments, 2));
          }
          throw Error("Invalid arity: " + arguments.length);
        };
        f.B = 2;
        f.o = u.o;
        f.q = e;
        f.g = d;
        f.h = c;
        f.k = u.k;
        return f;
      }();
    };
  }
  var e = null, f = function() {
    function a(c, d, e, f, g) {
      var A = null;
      4 < arguments.length && (A = H(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, A);
    }
    function b(a, c, d, f, g) {
      var h = function C(a) {
        return new Dh(null, function() {
          var b = e.h(B, a);
          return $h(Tg, b) ? Zf(e.h(D, b), C(e.h(E, b))) : null;
        }, null, null);
      };
      return e.h(function() {
        return function(b) {
          return S.h(a, b);
        };
      }(h), h(qg.k(g, f, H([d, c], 0))));
    }
    a.B = 4;
    a.o = function(a) {
      var c = D(a);
      a = G(a);
      var d = D(a);
      a = G(a);
      var e = D(a);
      a = G(a);
      var f = D(a);
      a = E(a);
      return b(c, d, e, f, a);
    };
    a.k = b;
    return a;
  }(), e = function(e, h, l, p, r) {
    switch(arguments.length) {
      case 1:
        return d.call(this, e);
      case 2:
        return c.call(this, e, h);
      case 3:
        return b.call(this, e, h, l);
      case 4:
        return a.call(this, e, h, l, p);
      default:
        return f.k(e, h, l, p, H(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.B = 4;
  e.o = f.o;
  e.g = d;
  e.h = c;
  e.j = b;
  e.p = a;
  e.k = f.k;
  return e;
}(), ri = function() {
  function a(a, b) {
    return new Dh(null, function() {
      if (0 < a) {
        var f = B(b);
        return f ? Zf(D(f), c.h(a - 1, E(f))) : null;
      }
      return null;
    }, null, null);
  }
  function b(a) {
    return function(b) {
      return function(a) {
        return function() {
          function c(d, g) {
            var h = ie(a), l = oi.h(a, Yg), h = 0 < h ? b.h ? b.h(d, g) : b.call(null, d, g) : d;
            return 0 < l ? h : new Qf(h);
          }
          function d(a) {
            return b.g ? b.g(a) : b.call(null, a);
          }
          function l() {
            return b.q ? b.q() : b.call(null);
          }
          var p = null, p = function(a, b) {
            switch(arguments.length) {
              case 0:
                return l.call(this);
              case 1:
                return d.call(this, a);
              case 2:
                return c.call(this, a, b);
            }
            throw Error("Invalid arity: " + arguments.length);
          };
          p.q = l;
          p.g = d;
          p.h = c;
          return p;
        }();
      }(li.g(a));
    };
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.g = b;
  c.h = a;
  return c;
}(), si = function() {
  function a(a, b) {
    return new Dh(null, function(c) {
      return function() {
        return c(a, b);
      };
    }(function(a, b) {
      for (;;) {
        var c = B(b);
        if (0 < a && c) {
          var d = a - 1, c = E(c);
          a = d;
          b = c;
        } else {
          return c;
        }
      }
    }), null, null);
  }
  function b(a) {
    return function(b) {
      return function(a) {
        return function() {
          function c(d, g) {
            var h = ie(a);
            oi.h(a, Yg);
            return 0 < h ? d : b.h ? b.h(d, g) : b.call(null, d, g);
          }
          function d(a) {
            return b.g ? b.g(a) : b.call(null, a);
          }
          function l() {
            return b.q ? b.q() : b.call(null);
          }
          var p = null, p = function(a, b) {
            switch(arguments.length) {
              case 0:
                return l.call(this);
              case 1:
                return d.call(this, a);
              case 2:
                return c.call(this, a, b);
            }
            throw Error("Invalid arity: " + arguments.length);
          };
          p.q = l;
          p.g = d;
          p.h = c;
          return p;
        }();
      }(li.g(a));
    };
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.g = b;
  c.h = a;
  return c;
}(), ti = function() {
  function a(a, b) {
    return new Dh(null, function(c) {
      return function() {
        return c(a, b);
      };
    }(function(a, b) {
      for (;;) {
        var c = B(b), d;
        if (d = c) {
          d = D(c), d = a.g ? a.g(d) : a.call(null, d);
        }
        if (q(d)) {
          d = a, c = E(c), a = d, b = c;
        } else {
          return c;
        }
      }
    }), null, null);
  }
  function b(a) {
    return function(b) {
      return function(c) {
        return function() {
          function g(g, h) {
            var l = ie(c);
            if (q(q(l) ? a.g ? a.g(h) : a.call(null, h) : l)) {
              return g;
            }
            mi(c, null);
            return b.h ? b.h(g, h) : b.call(null, g, h);
          }
          function h(a) {
            return b.g ? b.g(a) : b.call(null, a);
          }
          function l() {
            return b.q ? b.q() : b.call(null);
          }
          var p = null, p = function(a, b) {
            switch(arguments.length) {
              case 0:
                return l.call(this);
              case 1:
                return h.call(this, a);
              case 2:
                return g.call(this, a, b);
            }
            throw Error("Invalid arity: " + arguments.length);
          };
          p.q = l;
          p.g = h;
          p.h = g;
          return p;
        }();
      }(li.g(!0));
    };
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.g = b;
  c.h = a;
  return c;
}(), ui = function() {
  function a(a, b) {
    return ri.h(a, c.g(b));
  }
  function b(a) {
    return new Dh(null, function() {
      return Zf(a, c.g(a));
    }, null, null);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.g = b;
  c.h = a;
  return c;
}(), vi = function() {
  function a(a, b) {
    return ri.h(a, c.g(b));
  }
  function b(a) {
    return new Dh(null, function() {
      return Zf(a.q ? a.q() : a.call(null), c.g(a));
    }, null, null);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.g = b;
  c.h = a;
  return c;
}(), wi = function() {
  function a(a, c) {
    return new Dh(null, function() {
      var f = B(a), g = B(c);
      return f && g ? Zf(D(f), Zf(D(g), b.h(E(f), E(g)))) : null;
    }, null, null);
  }
  var b = null, c = function() {
    function a(b, d, h) {
      var l = null;
      2 < arguments.length && (l = H(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      return new Dh(null, function() {
        var c = qi.h(B, qg.k(e, d, H([a], 0)));
        return $h(Tg, c) ? Rh.h(qi.h(D, c), S.h(b, qi.h(E, c))) : null;
      }, null, null);
    }
    a.B = 2;
    a.o = function(a) {
      var b = D(a);
      a = G(a);
      var d = D(a);
      a = E(a);
      return c(b, d, a);
    };
    a.k = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.k(b, e, H(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.B = 2;
  b.o = c.o;
  b.h = a;
  b.k = c.k;
  return b;
}();
function xi(a, b) {
  return si.h(1, wi.h(ui.g(a), b));
}
var Ai = function() {
  function a(a) {
    return ei.h(qi.g(a), zi);
  }
  var b = null, c = function() {
    function a(c, d) {
      var h = null;
      1 < arguments.length && (h = H(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, h);
    }
    function b(a, c) {
      return S.h(Rh, S.j(qi, a, c));
    }
    a.B = 1;
    a.o = function(a) {
      var c = D(a);
      a = E(a);
      return b(c, a);
    };
    a.k = b;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.k(b, H(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.B = 1;
  b.o = c.o;
  b.g = a;
  b.k = c.k;
  return b;
}(), Bi = function() {
  function a(a, b) {
    return new Dh(null, function() {
      var f = B(b);
      if (f) {
        if (U(f)) {
          for (var g = x(f), h = N(g), l = Hh(h), p = 0;;) {
            if (p < h) {
              var r;
              r = w.h(g, p);
              r = a.g ? a.g(r) : a.call(null, r);
              q(r) && (r = w.h(g, p), l.add(r));
              p += 1;
            } else {
              break;
            }
          }
          return Kh(Mh(l), c.h(a, z(f)));
        }
        g = D(f);
        f = E(f);
        return q(a.g ? a.g(g) : a.call(null, g)) ? Zf(g, c.h(a, f)) : c.h(a, f);
      }
      return null;
    }, null, null);
  }
  function b(a) {
    return function(b) {
      return function() {
        function c(f, g) {
          return q(a.g ? a.g(g) : a.call(null, g)) ? b.h ? b.h(f, g) : b.call(null, f, g) : f;
        }
        function g(a) {
          return b.g ? b.g(a) : b.call(null, a);
        }
        function h() {
          return b.q ? b.q() : b.call(null);
        }
        var l = null, l = function(a, b) {
          switch(arguments.length) {
            case 0:
              return h.call(this);
            case 1:
              return g.call(this, a);
            case 2:
              return c.call(this, a, b);
          }
          throw Error("Invalid arity: " + arguments.length);
        };
        l.q = h;
        l.g = g;
        l.h = c;
        return l;
      }();
    };
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.g = b;
  c.h = a;
  return c;
}(), Ci = function() {
  function a(a, b) {
    return Bi.h(ci(a), b);
  }
  function b(a) {
    return Bi.g(ci(a));
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.g = b;
  c.h = a;
  return c;
}();
function Mi(a) {
  return function c(a) {
    return new Dh(null, function() {
      return Zf(a, q(Cg.g ? Cg.g(a) : Cg.call(null, a)) ? Ai.k(c, H([B.g ? B.g(a) : B.call(null, a)], 0)) : null);
    }, null, null);
  }(a);
}
function Ni(a) {
  return Bi.h(function(a) {
    return!Cg(a);
  }, E(Mi(a)));
}
var Oi = function() {
  function a(a, b, c) {
    return a && (a.G & 4 || a.Zf) ? ag(Th(Ug.p(b, Uh, Ie(a), c)), wg(a)) : Ug.p(b, qg, a, c);
  }
  function b(a, b) {
    return null != a ? a && (a.G & 4 || a.Zf) ? ag(Th(od.j(Je, Ie(a), b)), wg(a)) : od.j(Ad, a, b) : od.j(qg, Lf, b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.h = b;
  c.j = a;
  return c;
}(), Pi = function() {
  function a(a, b, c, d) {
    return Oi.h(pg, qi.p(a, b, c, d));
  }
  function b(a, b, c) {
    return Oi.h(pg, qi.j(a, b, c));
  }
  function c(a, b) {
    return Th(od.j(function(b, c) {
      return Uh.h(b, a.g ? a.g(c) : a.call(null, c));
    }, Ie(pg), b));
  }
  var d = null, e = function() {
    function a(c, d, e, f, t) {
      var u = null;
      4 < arguments.length && (u = H(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, u);
    }
    function b(a, c, d, e, f) {
      return Oi.h(pg, S.k(qi, a, c, d, e, H([f], 0)));
    }
    a.B = 4;
    a.o = function(a) {
      var c = D(a);
      a = G(a);
      var d = D(a);
      a = G(a);
      var e = D(a);
      a = G(a);
      var f = D(a);
      a = E(a);
      return b(c, d, e, f, a);
    };
    a.k = b;
    return a;
  }(), d = function(d, g, h, l, p) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, g);
      case 3:
        return b.call(this, d, g, h);
      case 4:
        return a.call(this, d, g, h, l);
      default:
        return e.k(d, g, h, l, H(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.B = 4;
  d.o = e.o;
  d.h = c;
  d.j = b;
  d.p = a;
  d.k = e.k;
  return d;
}(), Qi = function() {
  function a(a, b, c, h) {
    return new Dh(null, function() {
      var l = B(h);
      if (l) {
        var p = ri.h(a, l);
        return a === N(p) ? Zf(p, d.p(a, b, c, si.h(b, l))) : Ad(Lf, ri.h(a, Rh.h(p, c)));
      }
      return null;
    }, null, null);
  }
  function b(a, b, c) {
    return new Dh(null, function() {
      var h = B(c);
      if (h) {
        var l = ri.h(a, h);
        return a === N(l) ? Zf(l, d.j(a, b, si.h(b, h))) : null;
      }
      return null;
    }, null, null);
  }
  function c(a, b) {
    return d.j(a, a, b);
  }
  var d = null, d = function(d, f, g, h) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, g);
      case 4:
        return a.call(this, d, f, g, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.h = c;
  d.j = b;
  d.p = a;
  return d;
}(), Ri = function() {
  function a(a, b, c) {
    var g = Ig;
    for (b = B(b);;) {
      if (b) {
        var h = a;
        if (h ? h.t & 256 || h.Xe || (h.t ? 0 : kd(Hd, h)) : kd(Hd, h)) {
          a = Q.j(a, D(b), g);
          if (g === a) {
            return c;
          }
          b = G(b);
        } else {
          return c;
        }
      } else {
        return a;
      }
    }
  }
  function b(a, b) {
    return c.j(a, b, null);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.h = b;
  c.j = a;
  return c;
}(), Ti = function Si(b, c, d) {
  var e = O.j(c, 0, null);
  return(c = rh(c)) ? R.j(b, e, Si(Q.h(b, e), c, d)) : R.j(b, e, d);
}, Ui = function() {
  function a(a, b, c, d, f, t) {
    var u = O.j(b, 0, null);
    return(b = rh(b)) ? R.j(a, u, e.Qa(Q.h(a, u), b, c, d, f, t)) : R.j(a, u, function() {
      var b = Q.h(a, u);
      return c.p ? c.p(b, d, f, t) : c.call(null, b, d, f, t);
    }());
  }
  function b(a, b, c, d, f) {
    var t = O.j(b, 0, null);
    return(b = rh(b)) ? R.j(a, t, e.M(Q.h(a, t), b, c, d, f)) : R.j(a, t, function() {
      var b = Q.h(a, t);
      return c.j ? c.j(b, d, f) : c.call(null, b, d, f);
    }());
  }
  function c(a, b, c, d) {
    var f = O.j(b, 0, null);
    return(b = rh(b)) ? R.j(a, f, e.p(Q.h(a, f), b, c, d)) : R.j(a, f, function() {
      var b = Q.h(a, f);
      return c.h ? c.h(b, d) : c.call(null, b, d);
    }());
  }
  function d(a, b, c) {
    var d = O.j(b, 0, null);
    return(b = rh(b)) ? R.j(a, d, e.j(Q.h(a, d), b, c)) : R.j(a, d, function() {
      var b = Q.h(a, d);
      return c.g ? c.g(b) : c.call(null, b);
    }());
  }
  var e = null, f = function() {
    function a(c, d, e, f, g, A, y) {
      var C = null;
      6 < arguments.length && (C = H(Array.prototype.slice.call(arguments, 6), 0));
      return b.call(this, c, d, e, f, g, A, C);
    }
    function b(a, c, d, f, g, h, y) {
      var C = O.j(c, 0, null);
      return(c = rh(c)) ? R.j(a, C, S.k(e, Q.h(a, C), c, d, f, H([g, h, y], 0))) : R.j(a, C, S.k(d, Q.h(a, C), f, g, h, H([y], 0)));
    }
    a.B = 6;
    a.o = function(a) {
      var c = D(a);
      a = G(a);
      var d = D(a);
      a = G(a);
      var e = D(a);
      a = G(a);
      var f = D(a);
      a = G(a);
      var g = D(a);
      a = G(a);
      var y = D(a);
      a = E(a);
      return b(c, d, e, f, g, y, a);
    };
    a.k = b;
    return a;
  }(), e = function(e, h, l, p, r, t, u) {
    switch(arguments.length) {
      case 3:
        return d.call(this, e, h, l);
      case 4:
        return c.call(this, e, h, l, p);
      case 5:
        return b.call(this, e, h, l, p, r);
      case 6:
        return a.call(this, e, h, l, p, r, t);
      default:
        return f.k(e, h, l, p, r, t, H(arguments, 6));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.B = 6;
  e.o = f.o;
  e.j = d;
  e.p = c;
  e.M = b;
  e.Qa = a;
  e.k = f.k;
  return e;
}();
function Vi(a, b) {
  this.sa = a;
  this.n = b;
}
function Wi(a) {
  return new Vi(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function Xi(a) {
  return new Vi(a.sa, nd(a.n));
}
function Yi(a) {
  a = a.A;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function Zi(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = Wi(a);
    d.n[0] = c;
    c = d;
    b -= 5;
  }
}
var aj = function $i(b, c, d, e) {
  var f = Xi(d), g = b.A - 1 >>> c & 31;
  5 === c ? f.n[g] = e : (d = d.n[g], b = null != d ? $i(b, c - 5, d, e) : Zi(null, c - 5, e), f.n[g] = b);
  return f;
};
function bj(a, b) {
  throw Error("No item " + v.g(a) + " in vector of length " + v.g(b));
}
function cj(a, b) {
  if (b >= Yi(a)) {
    return a.fa;
  }
  for (var c = a.root, d = a.shift;;) {
    if (0 < d) {
      var e = d - 5, c = c.n[b >>> d & 31], d = e
    } else {
      return c.n;
    }
  }
}
function dj(a, b) {
  return 0 <= b && b < a.A ? cj(a, b) : bj(b, a.A);
}
var fj = function ej(b, c, d, e, f) {
  var g = Xi(d);
  if (0 === c) {
    g.n[e & 31] = f;
  } else {
    var h = e >>> c & 31;
    b = ej(b, c - 5, d.n[h], e, f);
    g.n[h] = b;
  }
  return g;
}, hj = function gj(b, c, d) {
  var e = b.A - 2 >>> c & 31;
  if (5 < c) {
    b = gj(b, c - 5, d.n[e]);
    if (null == b && 0 === e) {
      return null;
    }
    d = Xi(d);
    d.n[e] = b;
    return d;
  }
  if (0 === e) {
    return null;
  }
  d = Xi(d);
  d.n[e] = null;
  return d;
};
function ij(a, b, c, d, e, f) {
  this.H = a;
  this.pd = b;
  this.n = c;
  this.Tb = d;
  this.start = e;
  this.end = f;
}
ij.prototype.Id = function() {
  return this.H < this.end;
};
ij.prototype.next = function() {
  32 === this.H - this.pd && (this.n = cj(this.Tb, this.H), this.pd += 32);
  var a = this.n[this.H & 31];
  this.H += 1;
  return a;
};
function V(a, b, c, d, e, f) {
  this.C = a;
  this.A = b;
  this.shift = c;
  this.root = d;
  this.fa = e;
  this.w = f;
  this.t = 167668511;
  this.G = 8196;
}
k = V.prototype;
k.toString = function() {
  return ef(this);
};
k.N = function(a, b) {
  return Md.j(this, b, null);
};
k.L = function(a, b, c) {
  return "number" === typeof b ? w.j(this, b, c) : c;
};
k.cd = function(a, b, c) {
  a = 0;
  for (var d = c;;) {
    if (a < this.A) {
      var e = cj(this, a);
      c = e.length;
      a: {
        for (var f = 0;;) {
          if (f < c) {
            var g = f + a, h = e[f], d = b.j ? b.j(d, g, h) : b.call(null, d, g, h);
            if (Rf(d)) {
              e = d;
              break a;
            }
            f += 1;
          } else {
            e = d;
            break a;
          }
        }
        e = void 0;
      }
      if (Rf(e)) {
        return b = e, K.g ? K.g(b) : K.call(null, b);
      }
      a += c;
      d = e;
    } else {
      return d;
    }
  }
};
k.F = function(a, b) {
  return dj(this, b)[b & 31];
};
k.ab = function(a, b, c) {
  return 0 <= b && b < this.A ? cj(this, b)[b & 31] : c;
};
k.Dc = function(a, b, c) {
  if (0 <= b && b < this.A) {
    return Yi(this) <= b ? (a = nd(this.fa), a[b & 31] = c, new V(this.C, this.A, this.shift, this.root, a, null)) : new V(this.C, this.A, this.shift, fj(this, this.shift, this.root, b, c), this.fa, null);
  }
  if (b === this.A) {
    return Ad(this, c);
  }
  throw Error("Index " + v.g(b) + " out of bounds  [0," + v.g(this.A) + "]");
};
k.bd = function() {
  var a = this.A;
  return new ij(0, 0, 0 < N(this) ? cj(this, 0) : null, this, 0, a);
};
k.I = function() {
  return this.C;
};
k.V = function() {
  return this.A;
};
k.dd = function() {
  return w.h(this, 0);
};
k.ed = function() {
  return w.h(this, 1);
};
k.tc = function() {
  return 0 < this.A ? w.h(this, this.A - 1) : null;
};
k.uc = function() {
  if (0 === this.A) {
    throw Error("Can't pop empty vector");
  }
  if (1 === this.A) {
    return oe(pg, this.C);
  }
  if (1 < this.A - Yi(this)) {
    return new V(this.C, this.A - 1, this.shift, this.root, this.fa.slice(0, -1), null);
  }
  var a = cj(this, this.A - 2), b = hj(this, this.shift, this.root), b = null == b ? W : b, c = this.A - 1;
  return 5 < this.shift && null == b.n[1] ? new V(this.C, c, this.shift - 5, b.n[0], a, null) : new V(this.C, c, this.shift, b, a, null);
};
k.fd = function() {
  return 0 < this.A ? new Xf(this, this.A - 1, null) : null;
};
k.R = function() {
  var a = this.w;
  return null != a ? a : this.w = a = Nf(this);
};
k.O = function(a, b) {
  if (b instanceof V) {
    if (this.A === N(b)) {
      for (var c = cf(this), d = cf(b);;) {
        if (q(c.Id())) {
          var e = c.next(), f = d.next();
          if (!vf.h(e, f)) {
            return!1;
          }
        } else {
          return!0;
        }
      }
    } else {
      return!1;
    }
  } else {
    return Yf(this, b);
  }
};
k.Rc = function() {
  var a = this;
  return new jj(a.A, a.shift, function() {
    var b = a.root;
    return kj.g ? kj.g(b) : kj.call(null, b);
  }(), function() {
    var b = a.fa;
    return lj.g ? lj.g(b) : lj.call(null, b);
  }());
};
k.Ha = function() {
  return ag(pg, this.C);
};
k.La = function(a, b) {
  return Sf.h(this, b);
};
k.Ma = function(a, b, c) {
  a = 0;
  for (var d = c;;) {
    if (a < this.A) {
      var e = cj(this, a);
      c = e.length;
      a: {
        for (var f = 0;;) {
          if (f < c) {
            var g = e[f], d = b.h ? b.h(d, g) : b.call(null, d, g);
            if (Rf(d)) {
              e = d;
              break a;
            }
            f += 1;
          } else {
            e = d;
            break a;
          }
        }
        e = void 0;
      }
      if (Rf(e)) {
        return b = e, K.g ? K.g(b) : K.call(null, b);
      }
      a += c;
      d = e;
    } else {
      return d;
    }
  }
};
k.Ia = function(a, b, c) {
  if ("number" === typeof b) {
    return he(this, b, c);
  }
  throw Error("Vector's key for assoc must be a number.");
};
k.S = function() {
  if (0 === this.A) {
    return null;
  }
  if (32 >= this.A) {
    return new zf(this.fa, 0);
  }
  var a;
  a: {
    a = this.root;
    for (var b = this.shift;;) {
      if (0 < b) {
        b -= 5, a = a.n[0];
      } else {
        a = a.n;
        break a;
      }
    }
    a = void 0;
  }
  return mj.p ? mj.p(this, a, 0, 0) : mj.call(null, this, a, 0, 0);
};
k.J = function(a, b) {
  return new V(b, this.A, this.shift, this.root, this.fa, this.w);
};
k.U = function(a, b) {
  if (32 > this.A - Yi(this)) {
    for (var c = this.fa.length, d = Array(c + 1), e = 0;;) {
      if (e < c) {
        d[e] = this.fa[e], e += 1;
      } else {
        break;
      }
    }
    d[c] = b;
    return new V(this.C, this.A + 1, this.shift, this.root, d, null);
  }
  c = (d = this.A >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = Wi(null), d.n[0] = this.root, e = Zi(null, this.shift, new Vi(null, this.fa)), d.n[1] = e) : d = aj(this, this.shift, this.root, new Vi(null, this.fa));
  return new V(this.C, this.A + 1, c, d, [b], null);
};
k.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.F(null, c);
      case 3:
        return this.ab(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.h = function(a, c) {
    return this.F(null, c);
  };
  a.j = function(a, c, d) {
    return this.ab(null, c, d);
  };
  return a;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(nd(b)));
};
k.g = function(a) {
  return this.F(null, a);
};
k.h = function(a, b) {
  return this.ab(null, a, b);
};
var W = new Vi(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), pg = new V(null, 0, 5, W, [], 0);
function nj(a) {
  return Ke(od.j(Je, Ie(pg), a));
}
var oj = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = H(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    if (a instanceof zf && 0 === a.H) {
      a: {
        a = a.n;
        var b = a.length;
        if (32 > b) {
          a = new V(null, b, 5, W, a, null);
        } else {
          for (var e = 32, f = (new V(null, 32, 5, W, a.slice(0, 32), null)).Rc(null);;) {
            if (e < b) {
              var g = e + 1, f = Uh.h(f, a[e]), e = g
            } else {
              a = Ke(f);
              break a;
            }
          }
          a = void 0;
        }
      }
    } else {
      a = nj(a);
    }
    return a;
  }
  a.B = 0;
  a.o = function(a) {
    a = B(a);
    return b(a);
  };
  a.k = b;
  return a;
}();
function pj(a, b, c, d, e, f) {
  this.Bb = a;
  this.pc = b;
  this.H = c;
  this.Ua = d;
  this.C = e;
  this.w = f;
  this.t = 32375020;
  this.G = 1536;
}
k = pj.prototype;
k.toString = function() {
  return ef(this);
};
k.I = function() {
  return this.C;
};
k.Va = function() {
  if (this.Ua + 1 < this.pc.length) {
    var a;
    a = this.Bb;
    var b = this.pc, c = this.H, d = this.Ua + 1;
    a = mj.p ? mj.p(a, b, c, d) : mj.call(null, a, b, c, d);
    return null == a ? null : a;
  }
  return Re(this);
};
k.R = function() {
  var a = this.w;
  return null != a ? a : this.w = a = Nf(this);
};
k.O = function(a, b) {
  return Yf(this, b);
};
k.Ha = function() {
  return ag(pg, this.C);
};
k.La = function(a, b) {
  var c = this;
  return Sf.h(function() {
    var a = c.Bb, b = c.H + c.Ua, f = N(c.Bb);
    return qj.j ? qj.j(a, b, f) : qj.call(null, a, b, f);
  }(), b);
};
k.Ma = function(a, b, c) {
  var d = this;
  return Sf.j(function() {
    var a = d.Bb, b = d.H + d.Ua, c = N(d.Bb);
    return qj.j ? qj.j(a, b, c) : qj.call(null, a, b, c);
  }(), b, c);
};
k.Ja = function() {
  return this.pc[this.Ua];
};
k.Sa = function() {
  if (this.Ua + 1 < this.pc.length) {
    var a;
    a = this.Bb;
    var b = this.pc, c = this.H, d = this.Ua + 1;
    a = mj.p ? mj.p(a, b, c, d) : mj.call(null, a, b, c, d);
    return null == a ? Lf : a;
  }
  return z(this);
};
k.S = function() {
  return this;
};
k.Ud = function() {
  return Ih.h(this.pc, this.Ua);
};
k.Vd = function() {
  var a = this.H + this.pc.length;
  if (a < xd(this.Bb)) {
    var b = this.Bb, c = cj(this.Bb, a);
    return mj.p ? mj.p(b, c, a, 0) : mj.call(null, b, c, a, 0);
  }
  return Lf;
};
k.J = function(a, b) {
  var c = this.Bb, d = this.pc, e = this.H, f = this.Ua;
  return mj.M ? mj.M(c, d, e, f, b) : mj.call(null, c, d, e, f, b);
};
k.U = function(a, b) {
  return Zf(b, this);
};
k.Td = function() {
  var a = this.H + this.pc.length;
  if (a < xd(this.Bb)) {
    var b = this.Bb, c = cj(this.Bb, a);
    return mj.p ? mj.p(b, c, a, 0) : mj.call(null, b, c, a, 0);
  }
  return null;
};
var mj = function() {
  function a(a, b, c, d, l) {
    return new pj(a, b, c, d, l, null);
  }
  function b(a, b, c, d) {
    return new pj(a, b, c, d, null, null);
  }
  function c(a, b, c) {
    return new pj(a, dj(a, b), b, c, null, null);
  }
  var d = null, d = function(d, f, g, h, l) {
    switch(arguments.length) {
      case 3:
        return c.call(this, d, f, g);
      case 4:
        return b.call(this, d, f, g, h);
      case 5:
        return a.call(this, d, f, g, h, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.j = c;
  d.p = b;
  d.M = a;
  return d;
}();
function rj(a, b, c, d, e) {
  this.C = a;
  this.Tb = b;
  this.start = c;
  this.end = d;
  this.w = e;
  this.t = 166617887;
  this.G = 8192;
}
k = rj.prototype;
k.toString = function() {
  return ef(this);
};
k.N = function(a, b) {
  return Md.j(this, b, null);
};
k.L = function(a, b, c) {
  return "number" === typeof b ? w.j(this, b, c) : c;
};
k.F = function(a, b) {
  return 0 > b || this.end <= this.start + b ? bj(b, this.end - this.start) : w.h(this.Tb, this.start + b);
};
k.ab = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : w.j(this.Tb, this.start + b, c);
};
k.Dc = function(a, b, c) {
  var d = this.start + b;
  a = this.C;
  c = R.j(this.Tb, d, c);
  b = this.start;
  var e = this.end, d = d + 1, d = e > d ? e : d;
  return sj.M ? sj.M(a, c, b, d, null) : sj.call(null, a, c, b, d, null);
};
k.I = function() {
  return this.C;
};
k.V = function() {
  return this.end - this.start;
};
k.tc = function() {
  return w.h(this.Tb, this.end - 1);
};
k.uc = function() {
  if (this.start === this.end) {
    throw Error("Can't pop empty vector");
  }
  var a = this.C, b = this.Tb, c = this.start, d = this.end - 1;
  return sj.M ? sj.M(a, b, c, d, null) : sj.call(null, a, b, c, d, null);
};
k.fd = function() {
  return this.start !== this.end ? new Xf(this, this.end - this.start - 1, null) : null;
};
k.R = function() {
  var a = this.w;
  return null != a ? a : this.w = a = Nf(this);
};
k.O = function(a, b) {
  return Yf(this, b);
};
k.Ha = function() {
  return ag(pg, this.C);
};
k.La = function(a, b) {
  return Sf.h(this, b);
};
k.Ma = function(a, b, c) {
  return Sf.j(this, b, c);
};
k.Ia = function(a, b, c) {
  if ("number" === typeof b) {
    return he(this, b, c);
  }
  throw Error("Subvec's key for assoc must be a number.");
};
k.S = function() {
  var a = this;
  return function(b) {
    return function d(e) {
      return e === a.end ? null : Zf(w.h(a.Tb, e), new Dh(null, function() {
        return function() {
          return d(e + 1);
        };
      }(b), null, null));
    };
  }(this)(a.start);
};
k.J = function(a, b) {
  var c = this.Tb, d = this.start, e = this.end, f = this.w;
  return sj.M ? sj.M(b, c, d, e, f) : sj.call(null, b, c, d, e, f);
};
k.U = function(a, b) {
  var c = this.C, d = he(this.Tb, this.end, b), e = this.start, f = this.end + 1;
  return sj.M ? sj.M(c, d, e, f, null) : sj.call(null, c, d, e, f, null);
};
k.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.F(null, c);
      case 3:
        return this.ab(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.h = function(a, c) {
    return this.F(null, c);
  };
  a.j = function(a, c, d) {
    return this.ab(null, c, d);
  };
  return a;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(nd(b)));
};
k.g = function(a) {
  return this.F(null, a);
};
k.h = function(a, b) {
  return this.ab(null, a, b);
};
function sj(a, b, c, d, e) {
  for (;;) {
    if (b instanceof rj) {
      c = b.start + c, d = b.start + d, b = b.Tb;
    } else {
      var f = N(b);
      if (0 > c || 0 > d || c > f || d > f) {
        throw Error("Index out of bounds");
      }
      return new rj(a, b, c, d, e);
    }
  }
}
var qj = function() {
  function a(a, b, c) {
    return sj(null, a, b, c, null);
  }
  function b(a, b) {
    return c.j(a, b, N(a));
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.h = b;
  c.j = a;
  return c;
}();
function tj(a, b) {
  return a === b.sa ? b : new Vi(a, nd(b.n));
}
function kj(a) {
  return new Vi({}, nd(a.n));
}
function lj(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  Gg(a, 0, b, 0, a.length);
  return b;
}
var vj = function uj(b, c, d, e) {
  d = tj(b.root.sa, d);
  var f = b.A - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var g = d.n[f];
    b = null != g ? uj(b, c - 5, g, e) : Zi(b.root.sa, c - 5, e);
  }
  d.n[f] = b;
  return d;
};
function jj(a, b, c, d) {
  this.A = a;
  this.shift = b;
  this.root = c;
  this.fa = d;
  this.t = 275;
  this.G = 88;
}
k = jj.prototype;
k.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.N(null, c);
      case 3:
        return this.L(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.h = function(a, c) {
    return this.N(null, c);
  };
  a.j = function(a, c, d) {
    return this.L(null, c, d);
  };
  return a;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(nd(b)));
};
k.g = function(a) {
  return this.N(null, a);
};
k.h = function(a, b) {
  return this.L(null, a, b);
};
k.N = function(a, b) {
  return Md.j(this, b, null);
};
k.L = function(a, b, c) {
  return "number" === typeof b ? w.j(this, b, c) : c;
};
k.F = function(a, b) {
  if (this.root.sa) {
    return dj(this, b)[b & 31];
  }
  throw Error("nth after persistent!");
};
k.ab = function(a, b, c) {
  return 0 <= b && b < this.A ? w.h(this, b) : c;
};
k.V = function() {
  if (this.root.sa) {
    return this.A;
  }
  throw Error("count after persistent!");
};
k.$e = function(a, b, c) {
  var d = this;
  if (d.root.sa) {
    if (0 <= b && b < d.A) {
      return Yi(this) <= b ? d.fa[b & 31] = c : (a = function() {
        return function f(a, h) {
          var l = tj(d.root.sa, h);
          if (0 === a) {
            l.n[b & 31] = c;
          } else {
            var p = b >>> a & 31, r = f(a - 5, l.n[p]);
            l.n[p] = r;
          }
          return l;
        };
      }(this).call(null, d.shift, d.root), d.root = a), this;
    }
    if (b === d.A) {
      return Je(this, c);
    }
    throw Error("Index " + v.g(b) + " out of bounds for TransientVector of length" + v.g(d.A));
  }
  throw Error("assoc! after persistent!");
};
k.hd = function(a, b, c) {
  if ("number" === typeof b) {
    return Pe(this, b, c);
  }
  throw Error("TransientVector's key for assoc! must be a number.");
};
k.Bc = function(a, b) {
  if (this.root.sa) {
    if (32 > this.A - Yi(this)) {
      this.fa[this.A & 31] = b;
    } else {
      var c = new Vi(this.root.sa, this.fa), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.fa = d;
      if (this.A >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = Zi(this.root.sa, this.shift, c);
        this.root = new Vi(this.root.sa, d);
        this.shift = e;
      } else {
        this.root = vj(this, this.shift, this.root, c);
      }
    }
    this.A += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
k.Cc = function() {
  if (this.root.sa) {
    this.root.sa = null;
    var a = this.A - Yi(this), b = Array(a);
    Gg(this.fa, 0, b, 0, a);
    return new V(null, this.A, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
function wj(a, b, c, d) {
  this.C = a;
  this.pb = b;
  this.Xb = c;
  this.w = d;
  this.G = 0;
  this.t = 31850572;
}
k = wj.prototype;
k.toString = function() {
  return ef(this);
};
k.I = function() {
  return this.C;
};
k.R = function() {
  var a = this.w;
  return null != a ? a : this.w = a = Nf(this);
};
k.O = function(a, b) {
  return Yf(this, b);
};
k.Ha = function() {
  return ag(Lf, this.C);
};
k.Ja = function() {
  return D(this.pb);
};
k.Sa = function() {
  var a = G(this.pb);
  return a ? new wj(this.C, a, this.Xb, null) : null == this.Xb ? yd(this) : new wj(this.C, this.Xb, null, null);
};
k.S = function() {
  return this;
};
k.J = function(a, b) {
  return new wj(b, this.pb, this.Xb, this.w);
};
k.U = function(a, b) {
  return Zf(b, this);
};
function xj(a, b, c, d, e) {
  this.C = a;
  this.count = b;
  this.pb = c;
  this.Xb = d;
  this.w = e;
  this.t = 31858766;
  this.G = 8192;
}
k = xj.prototype;
k.toString = function() {
  return ef(this);
};
k.I = function() {
  return this.C;
};
k.V = function() {
  return this.count;
};
k.tc = function() {
  return D(this.pb);
};
k.uc = function() {
  if (q(this.pb)) {
    var a = G(this.pb);
    return a ? new xj(this.C, this.count - 1, a, this.Xb, null) : new xj(this.C, this.count - 1, B(this.Xb), pg, null);
  }
  return this;
};
k.R = function() {
  var a = this.w;
  return null != a ? a : this.w = a = Nf(this);
};
k.O = function(a, b) {
  return Yf(this, b);
};
k.Ha = function() {
  return yj;
};
k.Ja = function() {
  return D(this.pb);
};
k.Sa = function() {
  return E(B(this));
};
k.S = function() {
  var a = B(this.Xb), b = this.pb;
  return q(q(b) ? b : a) ? new wj(null, this.pb, B(a), null) : null;
};
k.J = function(a, b) {
  return new xj(b, this.count, this.pb, this.Xb, this.w);
};
k.U = function(a, b) {
  var c;
  q(this.pb) ? (c = this.Xb, c = new xj(this.C, this.count + 1, this.pb, qg.h(q(c) ? c : pg, b), null)) : c = new xj(this.C, this.count + 1, qg.h(this.pb, b), pg, null);
  return c;
};
var yj = new xj(null, 0, null, pg, 0);
function zj() {
  this.G = 0;
  this.t = 2097152;
}
zj.prototype.O = function() {
  return!1;
};
var Aj = new zj;
function Bj(a, b) {
  return Kg(Dg(b) ? N(a) === N(b) ? $h(Tg, qi.h(function(a) {
    return vf.h(Q.j(b, D(a), Aj), cg(a));
  }, a)) : null : null);
}
function Cj(a) {
  this.pa = a;
}
Cj.prototype.next = function() {
  if (null != this.pa) {
    var a = D(this.pa);
    this.pa = G(this.pa);
    return{done:!1, value:a};
  }
  return{done:!0, value:null};
};
function Dj(a) {
  return new Cj(B(a));
}
function Ej(a, b) {
  var c = a.n;
  if (b instanceof X) {
    a: {
      for (var d = c.length, e = b.ca, f = 0;;) {
        if (d <= f) {
          c = -1;
          break a;
        }
        var g = c[f];
        if (g instanceof X && e === g.ca) {
          c = f;
          break a;
        }
        f += 2;
      }
      c = void 0;
    }
  } else {
    if (d = da(b), q(q(d) ? d : "number" === typeof b)) {
      a: {
        d = c.length;
        for (e = 0;;) {
          if (d <= e) {
            c = -1;
            break a;
          }
          if (b === c[e]) {
            c = e;
            break a;
          }
          e += 2;
        }
        c = void 0;
      }
    } else {
      if (b instanceof xf) {
        a: {
          d = c.length;
          e = b.Ac;
          for (f = 0;;) {
            if (d <= f) {
              c = -1;
              break a;
            }
            g = c[f];
            if (g instanceof xf && e === g.Ac) {
              c = f;
              break a;
            }
            f += 2;
          }
          c = void 0;
        }
      } else {
        if (null == b) {
          a: {
            d = c.length;
            for (e = 0;;) {
              if (d <= e) {
                c = -1;
                break a;
              }
              if (null == c[e]) {
                c = e;
                break a;
              }
              e += 2;
            }
            c = void 0;
          }
        } else {
          a: {
            d = c.length;
            for (e = 0;;) {
              if (d <= e) {
                c = -1;
                break a;
              }
              if (vf.h(b, c[e])) {
                c = e;
                break a;
              }
              e += 2;
            }
            c = void 0;
          }
        }
      }
    }
  }
  return c;
}
function Fj(a, b, c) {
  this.n = a;
  this.H = b;
  this.Za = c;
  this.G = 0;
  this.t = 32374990;
}
k = Fj.prototype;
k.toString = function() {
  return ef(this);
};
k.I = function() {
  return this.Za;
};
k.Va = function() {
  return this.H < this.n.length - 2 ? new Fj(this.n, this.H + 2, this.Za) : null;
};
k.V = function() {
  return(this.n.length - this.H) / 2;
};
k.R = function() {
  return Nf(this);
};
k.O = function(a, b) {
  return Yf(this, b);
};
k.Ha = function() {
  return ag(Lf, this.Za);
};
k.La = function(a, b) {
  return bg.h(b, this);
};
k.Ma = function(a, b, c) {
  return bg.j(b, c, this);
};
k.Ja = function() {
  return new V(null, 2, 5, W, [this.n[this.H], this.n[this.H + 1]], null);
};
k.Sa = function() {
  return this.H < this.n.length - 2 ? new Fj(this.n, this.H + 2, this.Za) : Lf;
};
k.S = function() {
  return this;
};
k.J = function(a, b) {
  return new Fj(this.n, this.H, b);
};
k.U = function(a, b) {
  return Zf(b, this);
};
function Gj(a, b, c) {
  this.n = a;
  this.H = b;
  this.A = c;
}
Gj.prototype.Id = function() {
  return this.H < this.A;
};
Gj.prototype.next = function() {
  var a = new V(null, 2, 5, W, [this.n[this.H], this.n[this.H + 1]], null);
  this.H += 2;
  return a;
};
function n(a, b, c, d) {
  this.C = a;
  this.A = b;
  this.n = c;
  this.w = d;
  this.t = 16647951;
  this.G = 8196;
}
k = n.prototype;
k.toString = function() {
  return ef(this);
};
k.values = function() {
  return Dj(Hj.g ? Hj.g(this) : Hj.call(null, this));
};
k.forEach = function(a) {
  for (var b = B(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.F(null, e), g = O.j(f, 0, null), f = O.j(f, 1, null);
      a.h ? a.h(f, g) : a.call(null, f, g);
      e += 1;
    } else {
      if (b = B(b)) {
        U(b) ? (c = x(b), b = z(b), g = c, d = N(c), c = g) : (c = D(b), g = O.j(c, 0, null), c = f = O.j(c, 1, null), a.h ? a.h(c, g) : a.call(null, c, g), b = G(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
k.N = function(a, b) {
  return Md.j(this, b, null);
};
k.L = function(a, b, c) {
  a = Ej(this, b);
  return-1 === a ? c : this.n[a + 1];
};
k.cd = function(a, b, c) {
  a = this.n.length;
  for (var d = 0;;) {
    if (d < a) {
      var e = this.n[d], f = this.n[d + 1];
      c = b.j ? b.j(c, e, f) : b.call(null, c, e, f);
      if (Rf(c)) {
        return b = c, K.g ? K.g(b) : K.call(null, b);
      }
      d += 2;
    } else {
      return c;
    }
  }
};
k.bd = function() {
  return new Gj(this.n, 0, 2 * this.A);
};
k.I = function() {
  return this.C;
};
k.V = function() {
  return this.A;
};
k.R = function() {
  var a = this.w;
  return null != a ? a : this.w = a = Of(this);
};
k.O = function(a, b) {
  if (b && (b.t & 1024 || b.bg)) {
    var c = this.n.length;
    if (this.A === b.V(null)) {
      for (var d = 0;;) {
        if (d < c) {
          var e = b.L(null, this.n[d], Ig);
          if (e !== Ig) {
            if (vf.h(this.n[d + 1], e)) {
              d += 2;
            } else {
              return!1;
            }
          } else {
            return!1;
          }
        } else {
          return!0;
        }
      }
    } else {
      return!1;
    }
  } else {
    return Bj(this, b);
  }
};
k.Rc = function() {
  return new Ij({}, this.n.length, nd(this.n));
};
k.Ha = function() {
  return oe(Jj, this.C);
};
k.La = function(a, b) {
  return bg.h(b, this);
};
k.Ma = function(a, b, c) {
  return bg.j(b, c, this);
};
k.Ra = function(a, b) {
  if (0 <= Ej(this, b)) {
    var c = this.n.length, d = c - 2;
    if (0 === d) {
      return yd(this);
    }
    for (var d = Array(d), e = 0, f = 0;;) {
      if (e >= c) {
        return new n(this.C, this.A - 1, d, null);
      }
      vf.h(b, this.n[e]) || (d[f] = this.n[e], d[f + 1] = this.n[e + 1], f += 2);
      e += 2;
    }
  } else {
    return this;
  }
};
k.Ia = function(a, b, c) {
  a = Ej(this, b);
  if (-1 === a) {
    if (this.A < Kj) {
      a = this.n;
      for (var d = a.length, e = Array(d + 2), f = 0;;) {
        if (f < d) {
          e[f] = a[f], f += 1;
        } else {
          break;
        }
      }
      e[d] = b;
      e[d + 1] = c;
      return new n(this.C, this.A + 1, e, null);
    }
    return oe(Pd(Oi.h(Lj, this), b, c), this.C);
  }
  if (c === this.n[a + 1]) {
    return this;
  }
  b = nd(this.n);
  b[a + 1] = c;
  return new n(this.C, this.A, b, null);
};
k.ud = function(a, b) {
  return-1 !== Ej(this, b);
};
k.S = function() {
  var a = this.n;
  return 0 <= a.length - 2 ? new Fj(a, 0, null) : null;
};
k.J = function(a, b) {
  return new n(b, this.A, this.n, this.w);
};
k.U = function(a, b) {
  if (Eg(b)) {
    return Pd(this, w.h(b, 0), w.h(b, 1));
  }
  for (var c = this, d = B(b);;) {
    if (null == d) {
      return c;
    }
    var e = D(d);
    if (Eg(e)) {
      c = Pd(c, w.h(e, 0), w.h(e, 1)), d = G(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
k.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.N(null, c);
      case 3:
        return this.L(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.h = function(a, c) {
    return this.N(null, c);
  };
  a.j = function(a, c, d) {
    return this.L(null, c, d);
  };
  return a;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(nd(b)));
};
k.g = function(a) {
  return this.N(null, a);
};
k.h = function(a, b) {
  return this.L(null, a, b);
};
var Jj = new n(null, 0, [], null), Kj = 8;
function Mj(a) {
  for (var b = a.length, c = 0, d = Ie(Jj);;) {
    if (c < b) {
      var e = c + 2, d = Oe(d, a[c], a[c + 1]), c = e
    } else {
      return Ke(d);
    }
  }
}
function Ij(a, b, c) {
  this.Vc = a;
  this.Zc = b;
  this.n = c;
  this.G = 56;
  this.t = 258;
}
k = Ij.prototype;
k.hd = function(a, b, c) {
  var d = this;
  if (q(d.Vc)) {
    a = Ej(this, b);
    if (-1 === a) {
      return d.Zc + 2 <= 2 * Kj ? (d.Zc += 2, d.n.push(b), d.n.push(c), this) : Vh.j(function() {
        var a = d.Zc, b = d.n;
        return ak.h ? ak.h(a, b) : ak.call(null, a, b);
      }(), b, c);
    }
    c !== d.n[a + 1] && (d.n[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
k.Bc = function(a, b) {
  if (q(this.Vc)) {
    if (b ? b.t & 2048 || b.cg || (b.t ? 0 : kd(Sd, b)) : kd(Sd, b)) {
      return Oe(this, uh.g ? uh.g(b) : uh.call(null, b), vh.g ? vh.g(b) : vh.call(null, b));
    }
    for (var c = B(b), d = this;;) {
      var e = D(c);
      if (q(e)) {
        var f = e, c = G(c), d = Oe(d, function() {
          var a = f;
          return uh.g ? uh.g(a) : uh.call(null, a);
        }(), function() {
          var a = f;
          return vh.g ? vh.g(a) : vh.call(null, a);
        }())
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent!");
  }
};
k.Cc = function() {
  if (q(this.Vc)) {
    return this.Vc = !1, new n(null, ch(this.Zc, 2), this.n, null);
  }
  throw Error("persistent! called twice");
};
k.N = function(a, b) {
  return Md.j(this, b, null);
};
k.L = function(a, b, c) {
  if (q(this.Vc)) {
    return a = Ej(this, b), -1 === a ? c : this.n[a + 1];
  }
  throw Error("lookup after persistent!");
};
k.V = function() {
  if (q(this.Vc)) {
    return ch(this.Zc, 2);
  }
  throw Error("count after persistent!");
};
function ak(a, b) {
  for (var c = Ie(Lj), d = 0;;) {
    if (d < a) {
      c = Vh.j(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function bk() {
  this.D = !1;
}
function ck(a, b) {
  return a === b ? !0 : Z(a, b) ? !0 : vf.h(a, b);
}
var dk = function() {
  function a(a, b, c, g, h) {
    a = nd(a);
    a[b] = c;
    a[g] = h;
    return a;
  }
  function b(a, b, c) {
    a = nd(a);
    a[b] = c;
    return a;
  }
  var c = null, c = function(c, e, f, g, h) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, f);
      case 5:
        return a.call(this, c, e, f, g, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.j = b;
  c.M = a;
  return c;
}();
function ek(a, b) {
  var c = Array(a.length - 2);
  Gg(a, 0, c, 0, 2 * b);
  Gg(a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
  return c;
}
var fk = function() {
  function a(a, b, c, g, h, l) {
    a = a.Wc(b);
    a.n[c] = g;
    a.n[h] = l;
    return a;
  }
  function b(a, b, c, g) {
    a = a.Wc(b);
    a.n[c] = g;
    return a;
  }
  var c = null, c = function(c, e, f, g, h, l) {
    switch(arguments.length) {
      case 4:
        return b.call(this, c, e, f, g);
      case 6:
        return a.call(this, c, e, f, g, h, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.p = b;
  c.Qa = a;
  return c;
}();
function gk(a, b, c) {
  for (var d = a.length, e = 0, f = c;;) {
    if (e < d) {
      c = a[e];
      if (null != c) {
        var g = a[e + 1];
        c = b.j ? b.j(f, c, g) : b.call(null, f, c, g);
      } else {
        c = a[e + 1], c = null != c ? c.Ic(b, f) : f;
      }
      if (Rf(c)) {
        return a = c, K.g ? K.g(a) : K.call(null, a);
      }
      e += 2;
      f = c;
    } else {
      return f;
    }
  }
}
function hk(a, b, c) {
  this.sa = a;
  this.Ga = b;
  this.n = c;
}
k = hk.prototype;
k.Wc = function(a) {
  if (a === this.sa) {
    return this;
  }
  var b = gh(this.Ga), c = Array(0 > b ? 4 : 2 * (b + 1));
  Gg(this.n, 0, c, 0, 2 * b);
  return new hk(a, this.Ga, c);
};
k.kd = function() {
  var a = this.n;
  return ik.g ? ik.g(a) : ik.call(null, a);
};
k.Ic = function(a, b) {
  return gk(this.n, a, b);
};
k.wc = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.Ga & e)) {
    return d;
  }
  var f = gh(this.Ga & e - 1), e = this.n[2 * f], f = this.n[2 * f + 1];
  return null == e ? f.wc(a + 5, b, c, d) : ck(c, e) ? f : d;
};
k.Qb = function(a, b, c, d, e, f) {
  var g = 1 << (c >>> b & 31), h = gh(this.Ga & g - 1);
  if (0 === (this.Ga & g)) {
    var l = gh(this.Ga);
    if (2 * l < this.n.length) {
      var p = this.Wc(a), r = p.n;
      f.D = !0;
      Hg(r, 2 * h, r, 2 * (h + 1), 2 * (l - h));
      r[2 * h] = d;
      r[2 * h + 1] = e;
      p.Ga |= g;
      return p;
    }
    if (16 <= l) {
      g = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      g[c >>> b & 31] = jk.Qb(a, b + 5, c, d, e, f);
      for (p = h = 0;;) {
        if (32 > h) {
          0 !== (this.Ga >>> h & 1) && (g[h] = null != this.n[p] ? jk.Qb(a, b + 5, of(this.n[p]), this.n[p], this.n[p + 1], f) : this.n[p + 1], p += 2), h += 1;
        } else {
          break;
        }
      }
      return new kk(a, l + 1, g);
    }
    r = Array(2 * (l + 4));
    Gg(this.n, 0, r, 0, 2 * h);
    r[2 * h] = d;
    r[2 * h + 1] = e;
    Gg(this.n, 2 * h, r, 2 * (h + 1), 2 * (l - h));
    f.D = !0;
    p = this.Wc(a);
    p.n = r;
    p.Ga |= g;
    return p;
  }
  var t = this.n[2 * h], u = this.n[2 * h + 1];
  if (null == t) {
    return l = u.Qb(a, b + 5, c, d, e, f), l === u ? this : fk.p(this, a, 2 * h + 1, l);
  }
  if (ck(d, t)) {
    return e === u ? this : fk.p(this, a, 2 * h + 1, e);
  }
  f.D = !0;
  return fk.Qa(this, a, 2 * h, null, 2 * h + 1, function() {
    var f = b + 5;
    return lk.$a ? lk.$a(a, f, t, u, c, d, e) : lk.call(null, a, f, t, u, c, d, e);
  }());
};
k.Pb = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), g = gh(this.Ga & f - 1);
  if (0 === (this.Ga & f)) {
    var h = gh(this.Ga);
    if (16 <= h) {
      f = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      f[b >>> a & 31] = jk.Pb(a + 5, b, c, d, e);
      for (var l = g = 0;;) {
        if (32 > g) {
          0 !== (this.Ga >>> g & 1) && (f[g] = null != this.n[l] ? jk.Pb(a + 5, of(this.n[l]), this.n[l], this.n[l + 1], e) : this.n[l + 1], l += 2), g += 1;
        } else {
          break;
        }
      }
      return new kk(null, h + 1, f);
    }
    l = Array(2 * (h + 1));
    Gg(this.n, 0, l, 0, 2 * g);
    l[2 * g] = c;
    l[2 * g + 1] = d;
    Gg(this.n, 2 * g, l, 2 * (g + 1), 2 * (h - g));
    e.D = !0;
    return new hk(null, this.Ga | f, l);
  }
  var p = this.n[2 * g], r = this.n[2 * g + 1];
  if (null == p) {
    return h = r.Pb(a + 5, b, c, d, e), h === r ? this : new hk(null, this.Ga, dk.j(this.n, 2 * g + 1, h));
  }
  if (ck(c, p)) {
    return d === r ? this : new hk(null, this.Ga, dk.j(this.n, 2 * g + 1, d));
  }
  e.D = !0;
  return new hk(null, this.Ga, dk.M(this.n, 2 * g, null, 2 * g + 1, function() {
    var e = a + 5;
    return lk.Qa ? lk.Qa(e, p, r, b, c, d) : lk.call(null, e, p, r, b, c, d);
  }()));
};
k.ld = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if (0 === (this.Ga & d)) {
    return this;
  }
  var e = gh(this.Ga & d - 1), f = this.n[2 * e], g = this.n[2 * e + 1];
  return null == f ? (a = g.ld(a + 5, b, c), a === g ? this : null != a ? new hk(null, this.Ga, dk.j(this.n, 2 * e + 1, a)) : this.Ga === d ? null : new hk(null, this.Ga ^ d, ek(this.n, e))) : ck(c, f) ? new hk(null, this.Ga ^ d, ek(this.n, e)) : this;
};
var jk = new hk(null, 0, []);
function kk(a, b, c) {
  this.sa = a;
  this.A = b;
  this.n = c;
}
k = kk.prototype;
k.Wc = function(a) {
  return a === this.sa ? this : new kk(a, this.A, nd(this.n));
};
k.kd = function() {
  var a = this.n;
  return mk.g ? mk.g(a) : mk.call(null, a);
};
k.Ic = function(a, b) {
  for (var c = this.n.length, d = 0, e = b;;) {
    if (d < c) {
      var f = this.n[d];
      if (null != f && (e = f.Ic(a, e), Rf(e))) {
        return c = e, K.g ? K.g(c) : K.call(null, c);
      }
      d += 1;
    } else {
      return e;
    }
  }
};
k.wc = function(a, b, c, d) {
  var e = this.n[b >>> a & 31];
  return null != e ? e.wc(a + 5, b, c, d) : d;
};
k.Qb = function(a, b, c, d, e, f) {
  var g = c >>> b & 31, h = this.n[g];
  if (null == h) {
    return a = fk.p(this, a, g, jk.Qb(a, b + 5, c, d, e, f)), a.A += 1, a;
  }
  b = h.Qb(a, b + 5, c, d, e, f);
  return b === h ? this : fk.p(this, a, g, b);
};
k.Pb = function(a, b, c, d, e) {
  var f = b >>> a & 31, g = this.n[f];
  if (null == g) {
    return new kk(null, this.A + 1, dk.j(this.n, f, jk.Pb(a + 5, b, c, d, e)));
  }
  a = g.Pb(a + 5, b, c, d, e);
  return a === g ? this : new kk(null, this.A, dk.j(this.n, f, a));
};
k.ld = function(a, b, c) {
  var d = b >>> a & 31, e = this.n[d];
  if (null != e) {
    a = e.ld(a + 5, b, c);
    if (a === e) {
      d = this;
    } else {
      if (null == a) {
        if (8 >= this.A) {
          a: {
            e = this.n;
            a = e.length;
            b = Array(2 * (this.A - 1));
            c = 0;
            for (var f = 1, g = 0;;) {
              if (c < a) {
                c !== d && null != e[c] && (b[f] = e[c], f += 2, g |= 1 << c), c += 1;
              } else {
                d = new hk(null, g, b);
                break a;
              }
            }
            d = void 0;
          }
        } else {
          d = new kk(null, this.A - 1, dk.j(this.n, d, a));
        }
      } else {
        d = new kk(null, this.A, dk.j(this.n, d, a));
      }
    }
    return d;
  }
  return this;
};
function nk(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (ck(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return-1;
    }
  }
}
function ok(a, b, c, d) {
  this.sa = a;
  this.oc = b;
  this.A = c;
  this.n = d;
}
k = ok.prototype;
k.Wc = function(a) {
  if (a === this.sa) {
    return this;
  }
  var b = Array(2 * (this.A + 1));
  Gg(this.n, 0, b, 0, 2 * this.A);
  return new ok(a, this.oc, this.A, b);
};
k.kd = function() {
  var a = this.n;
  return ik.g ? ik.g(a) : ik.call(null, a);
};
k.Ic = function(a, b) {
  return gk(this.n, a, b);
};
k.wc = function(a, b, c, d) {
  a = nk(this.n, this.A, c);
  return 0 > a ? d : ck(c, this.n[a]) ? this.n[a + 1] : d;
};
k.Qb = function(a, b, c, d, e, f) {
  if (c === this.oc) {
    b = nk(this.n, this.A, d);
    if (-1 === b) {
      if (this.n.length > 2 * this.A) {
        return a = fk.Qa(this, a, 2 * this.A, d, 2 * this.A + 1, e), f.D = !0, a.A += 1, a;
      }
      c = this.n.length;
      b = Array(c + 2);
      Gg(this.n, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      f.D = !0;
      f = this.A + 1;
      a === this.sa ? (this.n = b, this.A = f, a = this) : a = new ok(this.sa, this.oc, f, b);
      return a;
    }
    return this.n[b + 1] === e ? this : fk.p(this, a, b + 1, e);
  }
  return(new hk(a, 1 << (this.oc >>> b & 31), [null, this, null, null])).Qb(a, b, c, d, e, f);
};
k.Pb = function(a, b, c, d, e) {
  return b === this.oc ? (a = nk(this.n, this.A, c), -1 === a ? (a = 2 * this.A, b = Array(a + 2), Gg(this.n, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.D = !0, new ok(null, this.oc, this.A + 1, b)) : vf.h(this.n[a], d) ? this : new ok(null, this.oc, this.A, dk.j(this.n, a + 1, d))) : (new hk(null, 1 << (this.oc >>> a & 31), [null, this])).Pb(a, b, c, d, e);
};
k.ld = function(a, b, c) {
  a = nk(this.n, this.A, c);
  return-1 === a ? this : 1 === this.A ? null : new ok(null, this.oc, this.A - 1, ek(this.n, ch(a, 2)));
};
var lk = function() {
  function a(a, b, c, g, h, l, p) {
    var r = of(c);
    if (r === h) {
      return new ok(null, r, 2, [c, g, l, p]);
    }
    var t = new bk;
    return jk.Qb(a, b, r, c, g, t).Qb(a, b, h, l, p, t);
  }
  function b(a, b, c, g, h, l) {
    var p = of(b);
    if (p === g) {
      return new ok(null, p, 2, [b, c, h, l]);
    }
    var r = new bk;
    return jk.Pb(a, p, b, c, r).Pb(a, g, h, l, r);
  }
  var c = null, c = function(c, e, f, g, h, l, p) {
    switch(arguments.length) {
      case 6:
        return b.call(this, c, e, f, g, h, l);
      case 7:
        return a.call(this, c, e, f, g, h, l, p);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.Qa = b;
  c.$a = a;
  return c;
}();
function pk(a, b, c, d, e) {
  this.C = a;
  this.eb = b;
  this.H = c;
  this.pa = d;
  this.w = e;
  this.G = 0;
  this.t = 32374860;
}
k = pk.prototype;
k.toString = function() {
  return ef(this);
};
k.I = function() {
  return this.C;
};
k.R = function() {
  var a = this.w;
  return null != a ? a : this.w = a = Nf(this);
};
k.O = function(a, b) {
  return Yf(this, b);
};
k.Ha = function() {
  return ag(Lf, this.C);
};
k.La = function(a, b) {
  return bg.h(b, this);
};
k.Ma = function(a, b, c) {
  return bg.j(b, c, this);
};
k.Ja = function() {
  return null == this.pa ? new V(null, 2, 5, W, [this.eb[this.H], this.eb[this.H + 1]], null) : D(this.pa);
};
k.Sa = function() {
  if (null == this.pa) {
    var a = this.eb, b = this.H + 2;
    return ik.j ? ik.j(a, b, null) : ik.call(null, a, b, null);
  }
  var a = this.eb, b = this.H, c = G(this.pa);
  return ik.j ? ik.j(a, b, c) : ik.call(null, a, b, c);
};
k.S = function() {
  return this;
};
k.J = function(a, b) {
  return new pk(b, this.eb, this.H, this.pa, this.w);
};
k.U = function(a, b) {
  return Zf(b, this);
};
var ik = function() {
  function a(a, b, c) {
    if (null == c) {
      for (c = a.length;;) {
        if (b < c) {
          if (null != a[b]) {
            return new pk(null, a, b, null, null);
          }
          var g = a[b + 1];
          if (q(g) && (g = g.kd(), q(g))) {
            return new pk(null, a, b + 2, g, null);
          }
          b += 2;
        } else {
          return null;
        }
      }
    } else {
      return new pk(null, a, b, c, null);
    }
  }
  function b(a) {
    return c.j(a, 0, null);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.g = b;
  c.j = a;
  return c;
}();
function qk(a, b, c, d, e) {
  this.C = a;
  this.eb = b;
  this.H = c;
  this.pa = d;
  this.w = e;
  this.G = 0;
  this.t = 32374860;
}
k = qk.prototype;
k.toString = function() {
  return ef(this);
};
k.I = function() {
  return this.C;
};
k.R = function() {
  var a = this.w;
  return null != a ? a : this.w = a = Nf(this);
};
k.O = function(a, b) {
  return Yf(this, b);
};
k.Ha = function() {
  return ag(Lf, this.C);
};
k.La = function(a, b) {
  return bg.h(b, this);
};
k.Ma = function(a, b, c) {
  return bg.j(b, c, this);
};
k.Ja = function() {
  return D(this.pa);
};
k.Sa = function() {
  var a = this.eb, b = this.H, c = G(this.pa);
  return mk.p ? mk.p(null, a, b, c) : mk.call(null, null, a, b, c);
};
k.S = function() {
  return this;
};
k.J = function(a, b) {
  return new qk(b, this.eb, this.H, this.pa, this.w);
};
k.U = function(a, b) {
  return Zf(b, this);
};
var mk = function() {
  function a(a, b, c, g) {
    if (null == g) {
      for (g = b.length;;) {
        if (c < g) {
          var h = b[c];
          if (q(h) && (h = h.kd(), q(h))) {
            return new qk(a, b, c + 1, h, null);
          }
          c += 1;
        } else {
          return null;
        }
      }
    } else {
      return new qk(a, b, c, g, null);
    }
  }
  function b(a) {
    return c.p(null, a, 0, null);
  }
  var c = null, c = function(c, e, f, g) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 4:
        return a.call(this, c, e, f, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.g = b;
  c.p = a;
  return c;
}();
function rk(a, b, c, d, e, f) {
  this.C = a;
  this.A = b;
  this.root = c;
  this.Xa = d;
  this.rb = e;
  this.w = f;
  this.t = 16123663;
  this.G = 8196;
}
k = rk.prototype;
k.toString = function() {
  return ef(this);
};
k.values = function() {
  return Dj(Hj.g ? Hj.g(this) : Hj.call(null, this));
};
k.forEach = function(a) {
  for (var b = B(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.F(null, e), g = O.j(f, 0, null), f = O.j(f, 1, null);
      a.h ? a.h(f, g) : a.call(null, f, g);
      e += 1;
    } else {
      if (b = B(b)) {
        U(b) ? (c = x(b), b = z(b), g = c, d = N(c), c = g) : (c = D(b), g = O.j(c, 0, null), c = f = O.j(c, 1, null), a.h ? a.h(c, g) : a.call(null, c, g), b = G(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
k.N = function(a, b) {
  return Md.j(this, b, null);
};
k.L = function(a, b, c) {
  return null == b ? this.Xa ? this.rb : c : null == this.root ? c : this.root.wc(0, of(b), b, c);
};
k.cd = function(a, b, c) {
  this.Xa && (a = this.rb, c = b.j ? b.j(c, null, a) : b.call(null, c, null, a));
  return Rf(c) ? K.g ? K.g(c) : K.call(null, c) : null != this.root ? this.root.Ic(b, c) : c;
};
k.I = function() {
  return this.C;
};
k.V = function() {
  return this.A;
};
k.R = function() {
  var a = this.w;
  return null != a ? a : this.w = a = Of(this);
};
k.O = function(a, b) {
  return Bj(this, b);
};
k.Rc = function() {
  return new sk({}, this.root, this.A, this.Xa, this.rb);
};
k.Ha = function() {
  return oe(Lj, this.C);
};
k.Ra = function(a, b) {
  if (null == b) {
    return this.Xa ? new rk(this.C, this.A - 1, this.root, !1, null, null) : this;
  }
  if (null == this.root) {
    return this;
  }
  var c = this.root.ld(0, of(b), b);
  return c === this.root ? this : new rk(this.C, this.A - 1, c, this.Xa, this.rb, null);
};
k.Ia = function(a, b, c) {
  if (null == b) {
    return this.Xa && c === this.rb ? this : new rk(this.C, this.Xa ? this.A : this.A + 1, this.root, !0, c, null);
  }
  a = new bk;
  b = (null == this.root ? jk : this.root).Pb(0, of(b), b, c, a);
  return b === this.root ? this : new rk(this.C, a.D ? this.A + 1 : this.A, b, this.Xa, this.rb, null);
};
k.ud = function(a, b) {
  return null == b ? this.Xa : null == this.root ? !1 : this.root.wc(0, of(b), b, Ig) !== Ig;
};
k.S = function() {
  if (0 < this.A) {
    var a = null != this.root ? this.root.kd() : null;
    return this.Xa ? Zf(new V(null, 2, 5, W, [null, this.rb], null), a) : a;
  }
  return null;
};
k.J = function(a, b) {
  return new rk(b, this.A, this.root, this.Xa, this.rb, this.w);
};
k.U = function(a, b) {
  if (Eg(b)) {
    return Pd(this, w.h(b, 0), w.h(b, 1));
  }
  for (var c = this, d = B(b);;) {
    if (null == d) {
      return c;
    }
    var e = D(d);
    if (Eg(e)) {
      c = Pd(c, w.h(e, 0), w.h(e, 1)), d = G(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
k.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.N(null, c);
      case 3:
        return this.L(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.h = function(a, c) {
    return this.N(null, c);
  };
  a.j = function(a, c, d) {
    return this.L(null, c, d);
  };
  return a;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(nd(b)));
};
k.g = function(a) {
  return this.N(null, a);
};
k.h = function(a, b) {
  return this.L(null, a, b);
};
var Lj = new rk(null, 0, null, !1, null, 0);
function sg(a, b) {
  for (var c = a.length, d = 0, e = Ie(Lj);;) {
    if (d < c) {
      var f = d + 1, e = e.hd(null, a[d], b[d]), d = f
    } else {
      return Ke(e);
    }
  }
}
function sk(a, b, c, d, e) {
  this.sa = a;
  this.root = b;
  this.count = c;
  this.Xa = d;
  this.rb = e;
  this.G = 56;
  this.t = 258;
}
k = sk.prototype;
k.hd = function(a, b, c) {
  return tk(this, b, c);
};
k.Bc = function(a, b) {
  return uk(this, b);
};
k.Cc = function() {
  var a;
  if (this.sa) {
    this.sa = null, a = new rk(null, this.count, this.root, this.Xa, this.rb, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
k.N = function(a, b) {
  return null == b ? this.Xa ? this.rb : null : null == this.root ? null : this.root.wc(0, of(b), b);
};
k.L = function(a, b, c) {
  return null == b ? this.Xa ? this.rb : c : null == this.root ? c : this.root.wc(0, of(b), b, c);
};
k.V = function() {
  if (this.sa) {
    return this.count;
  }
  throw Error("count after persistent!");
};
function uk(a, b) {
  if (a.sa) {
    if (b ? b.t & 2048 || b.cg || (b.t ? 0 : kd(Sd, b)) : kd(Sd, b)) {
      return tk(a, uh.g ? uh.g(b) : uh.call(null, b), vh.g ? vh.g(b) : vh.call(null, b));
    }
    for (var c = B(b), d = a;;) {
      var e = D(c);
      if (q(e)) {
        var f = e, c = G(c), d = tk(d, function() {
          var a = f;
          return uh.g ? uh.g(a) : uh.call(null, a);
        }(), function() {
          var a = f;
          return vh.g ? vh.g(a) : vh.call(null, a);
        }())
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent");
  }
}
function tk(a, b, c) {
  if (a.sa) {
    if (null == b) {
      a.rb !== c && (a.rb = c), a.Xa || (a.count += 1, a.Xa = !0);
    } else {
      var d = new bk;
      b = (null == a.root ? jk : a.root).Qb(a.sa, 0, of(b), b, c, d);
      b !== a.root && (a.root = b);
      d.D && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
function vk(a, b, c) {
  for (var d = b;;) {
    if (null != a) {
      b = c ? a.left : a.right, d = qg.h(d, a), a = b;
    } else {
      return d;
    }
  }
}
function wk(a, b, c, d, e) {
  this.C = a;
  this.stack = b;
  this.od = c;
  this.A = d;
  this.w = e;
  this.G = 0;
  this.t = 32374862;
}
k = wk.prototype;
k.toString = function() {
  return ef(this);
};
k.I = function() {
  return this.C;
};
k.V = function() {
  return 0 > this.A ? N(G(this)) + 1 : this.A;
};
k.R = function() {
  var a = this.w;
  return null != a ? a : this.w = a = Nf(this);
};
k.O = function(a, b) {
  return Yf(this, b);
};
k.Ha = function() {
  return ag(Lf, this.C);
};
k.La = function(a, b) {
  return bg.h(b, this);
};
k.Ma = function(a, b, c) {
  return bg.j(b, c, this);
};
k.Ja = function() {
  return xg(this.stack);
};
k.Sa = function() {
  var a = D(this.stack), a = vk(this.od ? a.right : a.left, G(this.stack), this.od);
  return null != a ? new wk(null, a, this.od, this.A - 1, null) : Lf;
};
k.S = function() {
  return this;
};
k.J = function(a, b) {
  return new wk(b, this.stack, this.od, this.A, this.w);
};
k.U = function(a, b) {
  return Zf(b, this);
};
function xk(a, b, c) {
  return new wk(null, vk(a, null, b), b, c, null);
}
function yk(a, b, c, d) {
  return c instanceof zk ? c.left instanceof zk ? new zk(c.key, c.D, c.left.$b(), new Ak(a, b, c.right, d, null), null) : c.right instanceof zk ? new zk(c.right.key, c.right.D, new Ak(c.key, c.D, c.left, c.right.left, null), new Ak(a, b, c.right.right, d, null), null) : new Ak(a, b, c, d, null) : new Ak(a, b, c, d, null);
}
function Bk(a, b, c, d) {
  return d instanceof zk ? d.right instanceof zk ? new zk(d.key, d.D, new Ak(a, b, c, d.left, null), d.right.$b(), null) : d.left instanceof zk ? new zk(d.left.key, d.left.D, new Ak(a, b, c, d.left.left, null), new Ak(d.key, d.D, d.left.right, d.right, null), null) : new Ak(a, b, c, d, null) : new Ak(a, b, c, d, null);
}
function Ck(a, b, c, d) {
  if (c instanceof zk) {
    return new zk(a, b, c.$b(), d, null);
  }
  if (d instanceof Ak) {
    return Bk(a, b, c, d.nd());
  }
  if (d instanceof zk && d.left instanceof Ak) {
    return new zk(d.left.key, d.left.D, new Ak(a, b, c, d.left.left, null), Bk(d.key, d.D, d.left.right, d.right.nd()), null);
  }
  throw Error("red-black tree invariant violation");
}
var Ek = function Dk(b, c, d) {
  d = null != b.left ? Dk(b.left, c, d) : d;
  if (Rf(d)) {
    return K.g ? K.g(d) : K.call(null, d);
  }
  var e = b.key, f = b.D;
  d = c.j ? c.j(d, e, f) : c.call(null, d, e, f);
  if (Rf(d)) {
    return K.g ? K.g(d) : K.call(null, d);
  }
  b = null != b.right ? Dk(b.right, c, d) : d;
  return Rf(b) ? K.g ? K.g(b) : K.call(null, b) : b;
};
function Ak(a, b, c, d, e) {
  this.key = a;
  this.D = b;
  this.left = c;
  this.right = d;
  this.w = e;
  this.G = 0;
  this.t = 32402207;
}
k = Ak.prototype;
k.Le = function(a) {
  return a.Oe(this);
};
k.nd = function() {
  return new zk(this.key, this.D, this.left, this.right, null);
};
k.$b = function() {
  return this;
};
k.Ke = function(a) {
  return a.Ne(this);
};
k.replace = function(a, b, c, d) {
  return new Ak(a, b, c, d, null);
};
k.Ne = function(a) {
  return new Ak(a.key, a.D, this, a.right, null);
};
k.Oe = function(a) {
  return new Ak(a.key, a.D, a.left, this, null);
};
k.Ic = function(a, b) {
  return Ek(this, a, b);
};
k.N = function(a, b) {
  return w.j(this, b, null);
};
k.L = function(a, b, c) {
  return w.j(this, b, c);
};
k.F = function(a, b) {
  return 0 === b ? this.key : 1 === b ? this.D : null;
};
k.ab = function(a, b, c) {
  return 0 === b ? this.key : 1 === b ? this.D : c;
};
k.Dc = function(a, b, c) {
  return(new V(null, 2, 5, W, [this.key, this.D], null)).Dc(null, b, c);
};
k.I = function() {
  return null;
};
k.V = function() {
  return 2;
};
k.dd = function() {
  return this.key;
};
k.ed = function() {
  return this.D;
};
k.tc = function() {
  return this.D;
};
k.uc = function() {
  return new V(null, 1, 5, W, [this.key], null);
};
k.R = function() {
  var a = this.w;
  return null != a ? a : this.w = a = Nf(this);
};
k.O = function(a, b) {
  return Yf(this, b);
};
k.Ha = function() {
  return pg;
};
k.La = function(a, b) {
  return Sf.h(this, b);
};
k.Ma = function(a, b, c) {
  return Sf.j(this, b, c);
};
k.Ia = function(a, b, c) {
  return R.j(new V(null, 2, 5, W, [this.key, this.D], null), b, c);
};
k.S = function() {
  return Ad(Ad(Lf, this.D), this.key);
};
k.J = function(a, b) {
  return ag(new V(null, 2, 5, W, [this.key, this.D], null), b);
};
k.U = function(a, b) {
  return new V(null, 3, 5, W, [this.key, this.D, b], null);
};
k.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.N(null, c);
      case 3:
        return this.L(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.h = function(a, c) {
    return this.N(null, c);
  };
  a.j = function(a, c, d) {
    return this.L(null, c, d);
  };
  return a;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(nd(b)));
};
k.g = function(a) {
  return this.N(null, a);
};
k.h = function(a, b) {
  return this.L(null, a, b);
};
function zk(a, b, c, d, e) {
  this.key = a;
  this.D = b;
  this.left = c;
  this.right = d;
  this.w = e;
  this.G = 0;
  this.t = 32402207;
}
k = zk.prototype;
k.Le = function(a) {
  return new zk(this.key, this.D, this.left, a, null);
};
k.nd = function() {
  throw Error("red-black tree invariant violation");
};
k.$b = function() {
  return new Ak(this.key, this.D, this.left, this.right, null);
};
k.Ke = function(a) {
  return new zk(this.key, this.D, a, this.right, null);
};
k.replace = function(a, b, c, d) {
  return new zk(a, b, c, d, null);
};
k.Ne = function(a) {
  return this.left instanceof zk ? new zk(this.key, this.D, this.left.$b(), new Ak(a.key, a.D, this.right, a.right, null), null) : this.right instanceof zk ? new zk(this.right.key, this.right.D, new Ak(this.key, this.D, this.left, this.right.left, null), new Ak(a.key, a.D, this.right.right, a.right, null), null) : new Ak(a.key, a.D, this, a.right, null);
};
k.Oe = function(a) {
  return this.right instanceof zk ? new zk(this.key, this.D, new Ak(a.key, a.D, a.left, this.left, null), this.right.$b(), null) : this.left instanceof zk ? new zk(this.left.key, this.left.D, new Ak(a.key, a.D, a.left, this.left.left, null), new Ak(this.key, this.D, this.left.right, this.right, null), null) : new Ak(a.key, a.D, a.left, this, null);
};
k.Ic = function(a, b) {
  return Ek(this, a, b);
};
k.N = function(a, b) {
  return w.j(this, b, null);
};
k.L = function(a, b, c) {
  return w.j(this, b, c);
};
k.F = function(a, b) {
  return 0 === b ? this.key : 1 === b ? this.D : null;
};
k.ab = function(a, b, c) {
  return 0 === b ? this.key : 1 === b ? this.D : c;
};
k.Dc = function(a, b, c) {
  return(new V(null, 2, 5, W, [this.key, this.D], null)).Dc(null, b, c);
};
k.I = function() {
  return null;
};
k.V = function() {
  return 2;
};
k.dd = function() {
  return this.key;
};
k.ed = function() {
  return this.D;
};
k.tc = function() {
  return this.D;
};
k.uc = function() {
  return new V(null, 1, 5, W, [this.key], null);
};
k.R = function() {
  var a = this.w;
  return null != a ? a : this.w = a = Nf(this);
};
k.O = function(a, b) {
  return Yf(this, b);
};
k.Ha = function() {
  return pg;
};
k.La = function(a, b) {
  return Sf.h(this, b);
};
k.Ma = function(a, b, c) {
  return Sf.j(this, b, c);
};
k.Ia = function(a, b, c) {
  return R.j(new V(null, 2, 5, W, [this.key, this.D], null), b, c);
};
k.S = function() {
  return Ad(Ad(Lf, this.D), this.key);
};
k.J = function(a, b) {
  return ag(new V(null, 2, 5, W, [this.key, this.D], null), b);
};
k.U = function(a, b) {
  return new V(null, 3, 5, W, [this.key, this.D, b], null);
};
k.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.N(null, c);
      case 3:
        return this.L(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.h = function(a, c) {
    return this.N(null, c);
  };
  a.j = function(a, c, d) {
    return this.L(null, c, d);
  };
  return a;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(nd(b)));
};
k.g = function(a) {
  return this.N(null, a);
};
k.h = function(a, b) {
  return this.L(null, a, b);
};
var Gk = function Fk(b, c, d, e, f) {
  if (null == c) {
    return new zk(d, e, null, null, null);
  }
  var g;
  g = c.key;
  g = b.h ? b.h(d, g) : b.call(null, d, g);
  if (0 === g) {
    return f[0] = c, null;
  }
  if (0 > g) {
    return b = Fk(b, c.left, d, e, f), null != b ? c.Ke(b) : null;
  }
  b = Fk(b, c.right, d, e, f);
  return null != b ? c.Le(b) : null;
}, Ik = function Hk(b, c) {
  if (null == b) {
    return c;
  }
  if (null == c) {
    return b;
  }
  if (b instanceof zk) {
    if (c instanceof zk) {
      var d = Hk(b.right, c.left);
      return d instanceof zk ? new zk(d.key, d.D, new zk(b.key, b.D, b.left, d.left, null), new zk(c.key, c.D, d.right, c.right, null), null) : new zk(b.key, b.D, b.left, new zk(c.key, c.D, d, c.right, null), null);
    }
    return new zk(b.key, b.D, b.left, Hk(b.right, c), null);
  }
  if (c instanceof zk) {
    return new zk(c.key, c.D, Hk(b, c.left), c.right, null);
  }
  d = Hk(b.right, c.left);
  return d instanceof zk ? new zk(d.key, d.D, new Ak(b.key, b.D, b.left, d.left, null), new Ak(c.key, c.D, d.right, c.right, null), null) : Ck(b.key, b.D, b.left, new Ak(c.key, c.D, d, c.right, null));
}, Kk = function Jk(b, c, d, e) {
  if (null != c) {
    var f;
    f = c.key;
    f = b.h ? b.h(d, f) : b.call(null, d, f);
    if (0 === f) {
      return e[0] = c, Ik(c.left, c.right);
    }
    if (0 > f) {
      return b = Jk(b, c.left, d, e), null != b || null != e[0] ? c.left instanceof Ak ? Ck(c.key, c.D, b, c.right) : new zk(c.key, c.D, b, c.right, null) : null;
    }
    b = Jk(b, c.right, d, e);
    if (null != b || null != e[0]) {
      if (c.right instanceof Ak) {
        if (e = c.key, d = c.D, c = c.left, b instanceof zk) {
          c = new zk(e, d, c, b.$b(), null);
        } else {
          if (c instanceof Ak) {
            c = yk(e, d, c.nd(), b);
          } else {
            if (c instanceof zk && c.right instanceof Ak) {
              c = new zk(c.right.key, c.right.D, yk(c.key, c.D, c.left.nd(), c.right.left), new Ak(e, d, c.right.right, b, null), null);
            } else {
              throw Error("red-black tree invariant violation");
            }
          }
        }
      } else {
        c = new zk(c.key, c.D, c.left, b, null);
      }
    } else {
      c = null;
    }
    return c;
  }
  return null;
}, Mk = function Lk(b, c, d, e) {
  var f = c.key, g = b.h ? b.h(d, f) : b.call(null, d, f);
  return 0 === g ? c.replace(f, e, c.left, c.right) : 0 > g ? c.replace(f, c.D, Lk(b, c.left, d, e), c.right) : c.replace(f, c.D, c.left, Lk(b, c.right, d, e));
};
function Nk(a, b, c, d, e) {
  this.Mb = a;
  this.sc = b;
  this.A = c;
  this.C = d;
  this.w = e;
  this.t = 418776847;
  this.G = 8192;
}
k = Nk.prototype;
k.forEach = function(a) {
  for (var b = B(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.F(null, e), g = O.j(f, 0, null), f = O.j(f, 1, null);
      a.h ? a.h(f, g) : a.call(null, f, g);
      e += 1;
    } else {
      if (b = B(b)) {
        U(b) ? (c = x(b), b = z(b), g = c, d = N(c), c = g) : (c = D(b), g = O.j(c, 0, null), c = f = O.j(c, 1, null), a.h ? a.h(c, g) : a.call(null, c, g), b = G(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
k.toString = function() {
  return ef(this);
};
k.values = function() {
  return Dj(Hj.g ? Hj.g(this) : Hj.call(null, this));
};
function Ok(a, b) {
  for (var c = a.sc;;) {
    if (null != c) {
      var d;
      d = c.key;
      d = a.Mb.h ? a.Mb.h(b, d) : a.Mb.call(null, b, d);
      if (0 === d) {
        return c;
      }
      c = 0 > d ? c.left : c.right;
    } else {
      return null;
    }
  }
}
k.N = function(a, b) {
  return Md.j(this, b, null);
};
k.L = function(a, b, c) {
  a = Ok(this, b);
  return null != a ? a.D : c;
};
k.cd = function(a, b, c) {
  return null != this.sc ? Ek(this.sc, b, c) : c;
};
k.I = function() {
  return this.C;
};
k.V = function() {
  return this.A;
};
k.fd = function() {
  return 0 < this.A ? xk(this.sc, !1, this.A) : null;
};
k.R = function() {
  var a = this.w;
  return null != a ? a : this.w = a = Of(this);
};
k.O = function(a, b) {
  return Bj(this, b);
};
k.Ha = function() {
  return ag(Pk, this.C);
};
k.Ra = function(a, b) {
  var c = [null], d = Kk(this.Mb, this.sc, b, c);
  return null == d ? null == O.h(c, 0) ? this : new Nk(this.Mb, null, 0, this.C, null) : new Nk(this.Mb, d.$b(), this.A - 1, this.C, null);
};
k.Ia = function(a, b, c) {
  a = [null];
  var d = Gk(this.Mb, this.sc, b, c, a);
  return null == d ? (a = O.h(a, 0), vf.h(c, a.D) ? this : new Nk(this.Mb, Mk(this.Mb, this.sc, b, c), this.A, this.C, null)) : new Nk(this.Mb, d.$b(), this.A + 1, this.C, null);
};
k.ud = function(a, b) {
  return null != Ok(this, b);
};
k.S = function() {
  return 0 < this.A ? xk(this.sc, !0, this.A) : null;
};
k.J = function(a, b) {
  return new Nk(this.Mb, this.sc, this.A, b, this.w);
};
k.U = function(a, b) {
  if (Eg(b)) {
    return Pd(this, w.h(b, 0), w.h(b, 1));
  }
  for (var c = this, d = B(b);;) {
    if (null == d) {
      return c;
    }
    var e = D(d);
    if (Eg(e)) {
      c = Pd(c, w.h(e, 0), w.h(e, 1)), d = G(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
k.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.N(null, c);
      case 3:
        return this.L(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.h = function(a, c) {
    return this.N(null, c);
  };
  a.j = function(a, c, d) {
    return this.L(null, c, d);
  };
  return a;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(nd(b)));
};
k.g = function(a) {
  return this.N(null, a);
};
k.h = function(a, b) {
  return this.L(null, a, b);
};
var Pk = new Nk(wf, null, 0, null, 0), ji = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = H(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = B(a);
    for (var b = Ie(Lj);;) {
      if (a) {
        var e = G(G(a)), b = Vh.j(b, D(a), cg(a));
        a = e;
      } else {
        return Ke(b);
      }
    }
  }
  a.B = 0;
  a.o = function(a) {
    a = B(a);
    return b(a);
  };
  a.k = b;
  return a;
}(), Qk = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = H(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    for (var e = B(b), f = new Nk(Og(a), null, 0, null, 0);;) {
      if (e) {
        var g = G(G(e)), f = R.j(f, D(e), cg(e)), e = g
      } else {
        return f;
      }
    }
  }
  a.B = 1;
  a.o = function(a) {
    var d = D(a);
    a = E(a);
    return b(d, a);
  };
  a.k = b;
  return a;
}();
function Rk(a, b) {
  this.Ya = a;
  this.Za = b;
  this.G = 0;
  this.t = 32374988;
}
k = Rk.prototype;
k.toString = function() {
  return ef(this);
};
k.I = function() {
  return this.Za;
};
k.Va = function() {
  var a = this.Ya, a = (a ? a.t & 128 || a.yd || (a.t ? 0 : kd(Gd, a)) : kd(Gd, a)) ? this.Ya.Va(null) : G(this.Ya);
  return null == a ? null : new Rk(a, this.Za);
};
k.R = function() {
  return Nf(this);
};
k.O = function(a, b) {
  return Yf(this, b);
};
k.Ha = function() {
  return ag(Lf, this.Za);
};
k.La = function(a, b) {
  return bg.h(b, this);
};
k.Ma = function(a, b, c) {
  return bg.j(b, c, this);
};
k.Ja = function() {
  return this.Ya.Ja(null).dd(null);
};
k.Sa = function() {
  var a = this.Ya, a = (a ? a.t & 128 || a.yd || (a.t ? 0 : kd(Gd, a)) : kd(Gd, a)) ? this.Ya.Va(null) : G(this.Ya);
  return null != a ? new Rk(a, this.Za) : Lf;
};
k.S = function() {
  return this;
};
k.J = function(a, b) {
  return new Rk(this.Ya, b);
};
k.U = function(a, b) {
  return Zf(b, this);
};
function Sk(a) {
  return(a = B(a)) ? new Rk(a, null) : null;
}
function uh(a) {
  return Td(a);
}
function Tk(a, b) {
  this.Ya = a;
  this.Za = b;
  this.G = 0;
  this.t = 32374988;
}
k = Tk.prototype;
k.toString = function() {
  return ef(this);
};
k.I = function() {
  return this.Za;
};
k.Va = function() {
  var a = this.Ya, a = (a ? a.t & 128 || a.yd || (a.t ? 0 : kd(Gd, a)) : kd(Gd, a)) ? this.Ya.Va(null) : G(this.Ya);
  return null == a ? null : new Tk(a, this.Za);
};
k.R = function() {
  return Nf(this);
};
k.O = function(a, b) {
  return Yf(this, b);
};
k.Ha = function() {
  return ag(Lf, this.Za);
};
k.La = function(a, b) {
  return bg.h(b, this);
};
k.Ma = function(a, b, c) {
  return bg.j(b, c, this);
};
k.Ja = function() {
  return this.Ya.Ja(null).ed(null);
};
k.Sa = function() {
  var a = this.Ya, a = (a ? a.t & 128 || a.yd || (a.t ? 0 : kd(Gd, a)) : kd(Gd, a)) ? this.Ya.Va(null) : G(this.Ya);
  return null != a ? new Tk(a, this.Za) : Lf;
};
k.S = function() {
  return this;
};
k.J = function(a, b) {
  return new Tk(this.Ya, b);
};
k.U = function(a, b) {
  return Zf(b, this);
};
function Hj(a) {
  return(a = B(a)) ? new Tk(a, null) : null;
}
function vh(a) {
  return be(a);
}
var Uk = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = H(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    return q(ai(Tg, a)) ? od.h(function(a, b) {
      return qg.h(q(a) ? a : Jj, b);
    }, a) : null;
  }
  a.B = 0;
  a.o = function(a) {
    a = B(a);
    return b(a);
  };
  a.k = b;
  return a;
}();
function Vk(a, b) {
  for (var c = Jj, d = B(b);;) {
    if (d) {
      var e = D(d), f = Q.j(a, e, Wk), c = Yh.h(f, Wk) ? R.j(c, e, f) : c, d = G(d)
    } else {
      return c;
    }
  }
}
function Xk(a, b, c) {
  this.C = a;
  this.Fc = b;
  this.w = c;
  this.t = 15077647;
  this.G = 8196;
}
k = Xk.prototype;
k.toString = function() {
  return ef(this);
};
k.values = function() {
  return Dj(B(this));
};
k.forEach = function(a) {
  for (var b = B(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.F(null, e), g = O.j(f, 0, null), f = O.j(f, 1, null);
      a.h ? a.h(f, g) : a.call(null, f, g);
      e += 1;
    } else {
      if (b = B(b)) {
        U(b) ? (c = x(b), b = z(b), g = c, d = N(c), c = g) : (c = D(b), g = O.j(c, 0, null), c = f = O.j(c, 1, null), a.h ? a.h(c, g) : a.call(null, c, g), b = G(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
k.N = function(a, b) {
  return Md.j(this, b, null);
};
k.L = function(a, b, c) {
  return Od(this.Fc, b) ? b : c;
};
k.I = function() {
  return this.C;
};
k.V = function() {
  return xd(this.Fc);
};
k.R = function() {
  var a = this.w;
  return null != a ? a : this.w = a = Of(this);
};
k.O = function(a, b) {
  return Bg(b) && N(this) === N(b) && $h(function(a) {
    return function(b) {
      return Lg(a, b);
    };
  }(this), b);
};
k.Rc = function() {
  return new Yk(Ie(this.Fc));
};
k.Ha = function() {
  return ag(Zk, this.C);
};
k.Ze = function(a, b) {
  return new Xk(this.C, Rd(this.Fc, b), null);
};
k.S = function() {
  return Sk(this.Fc);
};
k.J = function(a, b) {
  return new Xk(b, this.Fc, this.w);
};
k.U = function(a, b) {
  return new Xk(this.C, R.j(this.Fc, b, null), null);
};
k.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.N(null, c);
      case 3:
        return this.L(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.h = function(a, c) {
    return this.N(null, c);
  };
  a.j = function(a, c, d) {
    return this.L(null, c, d);
  };
  return a;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(nd(b)));
};
k.g = function(a) {
  return this.N(null, a);
};
k.h = function(a, b) {
  return this.L(null, a, b);
};
var Zk = new Xk(null, Jj, 0);
function Yk(a) {
  this.rc = a;
  this.t = 259;
  this.G = 136;
}
k = Yk.prototype;
k.call = function() {
  function a(a, b, c) {
    return Md.j(this.rc, b, Ig) === Ig ? c : b;
  }
  function b(a, b) {
    return Md.j(this.rc, b, Ig) === Ig ? null : b;
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.h = b;
  c.j = a;
  return c;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(nd(b)));
};
k.g = function(a) {
  return Md.j(this.rc, a, Ig) === Ig ? null : a;
};
k.h = function(a, b) {
  return Md.j(this.rc, a, Ig) === Ig ? b : a;
};
k.N = function(a, b) {
  return Md.j(this, b, null);
};
k.L = function(a, b, c) {
  return Md.j(this.rc, b, Ig) === Ig ? c : b;
};
k.V = function() {
  return N(this.rc);
};
k.Bc = function(a, b) {
  this.rc = Vh.j(this.rc, b, null);
  return this;
};
k.Cc = function() {
  return new Xk(null, Ke(this.rc), null);
};
function $k(a) {
  a = B(a);
  if (null == a) {
    return Zk;
  }
  if (a instanceof zf && 0 === a.H) {
    a = a.n;
    a: {
      for (var b = 0, c = Ie(Zk);;) {
        if (b < a.length) {
          var d = b + 1, c = c.Bc(null, a[b]), b = d
        } else {
          a = c;
          break a;
        }
      }
      a = void 0;
    }
    return a.Cc(null);
  }
  for (d = Ie(Zk);;) {
    if (null != a) {
      b = a.Va(null), d = d.Bc(null, a.Ja(null)), a = b;
    } else {
      return d.Cc(null);
    }
  }
}
function al(a) {
  return function c(a, e) {
    return new Dh(null, function() {
      return function(a, d) {
        for (;;) {
          var e = a, l = O.j(e, 0, null);
          if (e = B(e)) {
            if (Lg(d, l)) {
              l = E(e), e = d, a = l, d = e;
            } else {
              return Zf(l, c(E(e), qg.h(d, l)));
            }
          } else {
            return null;
          }
        }
      }.call(null, a, e);
    }, null, null);
  }(a, Zk);
}
function Bh(a) {
  if (a && (a.G & 4096 || a.eg)) {
    return a.name;
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error("Doesn't support name: " + v.g(a));
}
function bl(a, b) {
  for (var c = Ie(Jj), d = B(a), e = B(b);;) {
    if (d && e) {
      c = Vh.j(c, D(d), D(e)), d = G(d), e = G(e);
    } else {
      return Ke(c);
    }
  }
}
var cl = function() {
  function a(a, b, c) {
    return(a.g ? a.g(b) : a.call(null, b)) > (a.g ? a.g(c) : a.call(null, c)) ? b : c;
  }
  var b = null, c = function() {
    function a(b, d, h, l) {
      var p = null;
      3 < arguments.length && (p = H(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, h, p);
    }
    function c(a, d, e, l) {
      return od.j(function(c, d) {
        return b.j(a, c, d);
      }, b.j(a, d, e), l);
    }
    a.B = 3;
    a.o = function(a) {
      var b = D(a);
      a = G(a);
      var d = D(a);
      a = G(a);
      var l = D(a);
      a = E(a);
      return c(b, d, l, a);
    };
    a.k = c;
    return a;
  }(), b = function(b, e, f, g) {
    switch(arguments.length) {
      case 2:
        return e;
      case 3:
        return a.call(this, b, e, f);
      default:
        return c.k(b, e, f, H(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.B = 3;
  b.o = c.o;
  b.h = function(a, b) {
    return b;
  };
  b.j = a;
  b.k = c.k;
  return b;
}(), dl = function() {
  function a(a, b, c) {
    return(a.g ? a.g(b) : a.call(null, b)) < (a.g ? a.g(c) : a.call(null, c)) ? b : c;
  }
  var b = null, c = function() {
    function a(b, d, h, l) {
      var p = null;
      3 < arguments.length && (p = H(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, h, p);
    }
    function c(a, d, e, l) {
      return od.j(function(c, d) {
        return b.j(a, c, d);
      }, b.j(a, d, e), l);
    }
    a.B = 3;
    a.o = function(a) {
      var b = D(a);
      a = G(a);
      var d = D(a);
      a = G(a);
      var l = D(a);
      a = E(a);
      return c(b, d, l, a);
    };
    a.k = c;
    return a;
  }(), b = function(b, e, f, g) {
    switch(arguments.length) {
      case 2:
        return e;
      case 3:
        return a.call(this, b, e, f);
      default:
        return c.k(b, e, f, H(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.B = 3;
  b.o = c.o;
  b.h = function(a, b) {
    return b;
  };
  b.j = a;
  b.k = c.k;
  return b;
}();
function el(a, b, c) {
  this.H = a;
  this.end = b;
  this.step = c;
}
el.prototype.Id = function() {
  return 0 < this.step ? this.H < this.end : this.H > this.end;
};
el.prototype.next = function() {
  var a = this.H;
  this.H += this.step;
  return a;
};
function fl(a, b, c, d, e) {
  this.C = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.w = e;
  this.t = 32375006;
  this.G = 8192;
}
k = fl.prototype;
k.toString = function() {
  return ef(this);
};
k.F = function(a, b) {
  if (b < xd(this)) {
    return this.start + b * this.step;
  }
  if (this.start > this.end && 0 === this.step) {
    return this.start;
  }
  throw Error("Index out of bounds");
};
k.ab = function(a, b, c) {
  return b < xd(this) ? this.start + b * this.step : this.start > this.end && 0 === this.step ? this.start : c;
};
k.bd = function() {
  return new el(this.start, this.end, this.step);
};
k.I = function() {
  return this.C;
};
k.Va = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new fl(this.C, this.start + this.step, this.end, this.step, null) : null : this.start + this.step > this.end ? new fl(this.C, this.start + this.step, this.end, this.step, null) : null;
};
k.V = function() {
  if (id(ye(this))) {
    return 0;
  }
  var a = (this.end - this.start) / this.step;
  return Math.ceil.g ? Math.ceil.g(a) : Math.ceil.call(null, a);
};
k.R = function() {
  var a = this.w;
  return null != a ? a : this.w = a = Nf(this);
};
k.O = function(a, b) {
  return Yf(this, b);
};
k.Ha = function() {
  return ag(Lf, this.C);
};
k.La = function(a, b) {
  return Sf.h(this, b);
};
k.Ma = function(a, b, c) {
  for (a = this.start;;) {
    if (0 < this.step ? a < this.end : a > this.end) {
      var d = a;
      c = b.h ? b.h(c, d) : b.call(null, c, d);
      if (Rf(c)) {
        return b = c, K.g ? K.g(b) : K.call(null, b);
      }
      a += this.step;
    } else {
      return c;
    }
  }
};
k.Ja = function() {
  return null == ye(this) ? null : this.start;
};
k.Sa = function() {
  return null != ye(this) ? new fl(this.C, this.start + this.step, this.end, this.step, null) : Lf;
};
k.S = function() {
  return 0 < this.step ? this.start < this.end ? this : null : this.start > this.end ? this : null;
};
k.J = function(a, b) {
  return new fl(b, this.start, this.end, this.step, this.w);
};
k.U = function(a, b) {
  return Zf(b, this);
};
var ql = function() {
  function a(a, b, c) {
    return new fl(null, a, b, c, null);
  }
  function b(a, b) {
    return e.j(a, b, 1);
  }
  function c(a) {
    return e.j(0, a, 1);
  }
  function d() {
    return e.j(0, Number.MAX_VALUE, 1);
  }
  var e = null, e = function(e, g, h) {
    switch(arguments.length) {
      case 0:
        return d.call(this);
      case 1:
        return c.call(this, e);
      case 2:
        return b.call(this, e, g);
      case 3:
        return a.call(this, e, g, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.q = d;
  e.g = c;
  e.h = b;
  e.j = a;
  return e;
}();
function rl(a) {
  return Th(od.j(function(a, c) {
    return Vh.j(a, c, Q.j(a, c, 0) + 1);
  }, Ie(Jj), a));
}
var sl = function() {
  function a(a, b, f) {
    return Zf(b, new Dh(null, function() {
      var g = B(f);
      return g ? c.j(a, function() {
        var c = D(g);
        return a.h ? a.h(b, c) : a.call(null, b, c);
      }(), E(g)) : null;
    }, null, null));
  }
  function b(a, b) {
    return new Dh(null, function() {
      var f = B(b);
      return f ? c.j(a, D(f), E(f)) : Ad(Lf, a.q ? a.q() : a.call(null));
    }, null, null);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.h = b;
  c.j = a;
  return c;
}(), tl = function() {
  function a(a, b, c) {
    return function() {
      function d(e, l, r) {
        return new V(null, 3, 5, W, [a.j ? a.j(e, l, r) : a.call(null, e, l, r), b.j ? b.j(e, l, r) : b.call(null, e, l, r), c.j ? c.j(e, l, r) : c.call(null, e, l, r)], null);
      }
      function e(d, l) {
        return new V(null, 3, 5, W, [a.h ? a.h(d, l) : a.call(null, d, l), b.h ? b.h(d, l) : b.call(null, d, l), c.h ? c.h(d, l) : c.call(null, d, l)], null);
      }
      function r(d) {
        return new V(null, 3, 5, W, [a.g ? a.g(d) : a.call(null, d), b.g ? b.g(d) : b.call(null, d), c.g ? c.g(d) : c.call(null, d)], null);
      }
      function t() {
        return new V(null, 3, 5, W, [a.q ? a.q() : a.call(null), b.q ? b.q() : b.call(null), c.q ? c.q() : c.call(null)], null);
      }
      var u = null, A = function() {
        function d(a, b, c, f) {
          var g = null;
          3 < arguments.length && (g = H(Array.prototype.slice.call(arguments, 3), 0));
          return e.call(this, a, b, c, g);
        }
        function e(d, l, r, p) {
          return new V(null, 3, 5, W, [S.M(a, d, l, r, p), S.M(b, d, l, r, p), S.M(c, d, l, r, p)], null);
        }
        d.B = 3;
        d.o = function(a) {
          var b = D(a);
          a = G(a);
          var c = D(a);
          a = G(a);
          var d = D(a);
          a = E(a);
          return e(b, c, d, a);
        };
        d.k = e;
        return d;
      }(), u = function(a, b, c, f) {
        switch(arguments.length) {
          case 0:
            return t.call(this);
          case 1:
            return r.call(this, a);
          case 2:
            return e.call(this, a, b);
          case 3:
            return d.call(this, a, b, c);
          default:
            return A.k(a, b, c, H(arguments, 3));
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      u.B = 3;
      u.o = A.o;
      u.q = t;
      u.g = r;
      u.h = e;
      u.j = d;
      u.k = A.k;
      return u;
    }();
  }
  function b(a, b) {
    return function() {
      function c(d, e, h) {
        return new V(null, 2, 5, W, [a.j ? a.j(d, e, h) : a.call(null, d, e, h), b.j ? b.j(d, e, h) : b.call(null, d, e, h)], null);
      }
      function d(c, e) {
        return new V(null, 2, 5, W, [a.h ? a.h(c, e) : a.call(null, c, e), b.h ? b.h(c, e) : b.call(null, c, e)], null);
      }
      function e(c) {
        return new V(null, 2, 5, W, [a.g ? a.g(c) : a.call(null, c), b.g ? b.g(c) : b.call(null, c)], null);
      }
      function r() {
        return new V(null, 2, 5, W, [a.q ? a.q() : a.call(null), b.q ? b.q() : b.call(null)], null);
      }
      var t = null, u = function() {
        function c(a, b, e, f) {
          var g = null;
          3 < arguments.length && (g = H(Array.prototype.slice.call(arguments, 3), 0));
          return d.call(this, a, b, e, g);
        }
        function d(c, e, h, l) {
          return new V(null, 2, 5, W, [S.M(a, c, e, h, l), S.M(b, c, e, h, l)], null);
        }
        c.B = 3;
        c.o = function(a) {
          var b = D(a);
          a = G(a);
          var c = D(a);
          a = G(a);
          var e = D(a);
          a = E(a);
          return d(b, c, e, a);
        };
        c.k = d;
        return c;
      }(), t = function(a, b, f, g) {
        switch(arguments.length) {
          case 0:
            return r.call(this);
          case 1:
            return e.call(this, a);
          case 2:
            return d.call(this, a, b);
          case 3:
            return c.call(this, a, b, f);
          default:
            return u.k(a, b, f, H(arguments, 3));
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      t.B = 3;
      t.o = u.o;
      t.q = r;
      t.g = e;
      t.h = d;
      t.j = c;
      t.k = u.k;
      return t;
    }();
  }
  function c(a) {
    return function() {
      function b(c, d, e) {
        return new V(null, 1, 5, W, [a.j ? a.j(c, d, e) : a.call(null, c, d, e)], null);
      }
      function c(b, d) {
        return new V(null, 1, 5, W, [a.h ? a.h(b, d) : a.call(null, b, d)], null);
      }
      function d(b) {
        return new V(null, 1, 5, W, [a.g ? a.g(b) : a.call(null, b)], null);
      }
      function e() {
        return new V(null, 1, 5, W, [a.q ? a.q() : a.call(null)], null);
      }
      var r = null, t = function() {
        function b(a, d, e, f) {
          var g = null;
          3 < arguments.length && (g = H(Array.prototype.slice.call(arguments, 3), 0));
          return c.call(this, a, d, e, g);
        }
        function c(b, d, e, g) {
          return new V(null, 1, 5, W, [S.M(a, b, d, e, g)], null);
        }
        b.B = 3;
        b.o = function(a) {
          var b = D(a);
          a = G(a);
          var d = D(a);
          a = G(a);
          var e = D(a);
          a = E(a);
          return c(b, d, e, a);
        };
        b.k = c;
        return b;
      }(), r = function(a, f, r, C) {
        switch(arguments.length) {
          case 0:
            return e.call(this);
          case 1:
            return d.call(this, a);
          case 2:
            return c.call(this, a, f);
          case 3:
            return b.call(this, a, f, r);
          default:
            return t.k(a, f, r, H(arguments, 3));
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      r.B = 3;
      r.o = t.o;
      r.q = e;
      r.g = d;
      r.h = c;
      r.j = b;
      r.k = t.k;
      return r;
    }();
  }
  var d = null, e = function() {
    function a(c, d, e, f) {
      var t = null;
      3 < arguments.length && (t = H(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, d, e, t);
    }
    function b(a, c, d, e) {
      return function(a) {
        return function() {
          function b(c, d, e) {
            return od.j(function() {
              return function(a, b) {
                return qg.h(a, b.j ? b.j(c, d, e) : b.call(null, c, d, e));
              };
            }(a), pg, a);
          }
          function c(b, d) {
            return od.j(function() {
              return function(a, c) {
                return qg.h(a, c.h ? c.h(b, d) : c.call(null, b, d));
              };
            }(a), pg, a);
          }
          function d(b) {
            return od.j(function() {
              return function(a, c) {
                return qg.h(a, c.g ? c.g(b) : c.call(null, b));
              };
            }(a), pg, a);
          }
          function e() {
            return od.j(function() {
              return function(a, b) {
                return qg.h(a, b.q ? b.q() : b.call(null));
              };
            }(a), pg, a);
          }
          var f = null, g = function() {
            function b(a, d, e, f) {
              var g = null;
              3 < arguments.length && (g = H(Array.prototype.slice.call(arguments, 3), 0));
              return c.call(this, a, d, e, g);
            }
            function c(b, d, e, f) {
              return od.j(function() {
                return function(a, c) {
                  return qg.h(a, S.M(c, b, d, e, f));
                };
              }(a), pg, a);
            }
            b.B = 3;
            b.o = function(a) {
              var b = D(a);
              a = G(a);
              var d = D(a);
              a = G(a);
              var e = D(a);
              a = E(a);
              return c(b, d, e, a);
            };
            b.k = c;
            return b;
          }(), f = function(a, f, h, l) {
            switch(arguments.length) {
              case 0:
                return e.call(this);
              case 1:
                return d.call(this, a);
              case 2:
                return c.call(this, a, f);
              case 3:
                return b.call(this, a, f, h);
              default:
                return g.k(a, f, h, H(arguments, 3));
            }
            throw Error("Invalid arity: " + arguments.length);
          };
          f.B = 3;
          f.o = g.o;
          f.q = e;
          f.g = d;
          f.h = c;
          f.j = b;
          f.k = g.k;
          return f;
        }();
      }(Sh.p(a, c, d, e));
    }
    a.B = 3;
    a.o = function(a) {
      var c = D(a);
      a = G(a);
      var d = D(a);
      a = G(a);
      var e = D(a);
      a = E(a);
      return b(c, d, e, a);
    };
    a.k = b;
    return a;
  }(), d = function(d, g, h, l) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 2:
        return b.call(this, d, g);
      case 3:
        return a.call(this, d, g, h);
      default:
        return e.k(d, g, h, H(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.B = 3;
  d.o = e.o;
  d.g = c;
  d.h = b;
  d.j = a;
  d.k = e.k;
  return d;
}(), ul = function() {
  function a(a, b) {
    for (;;) {
      if (B(b) && 0 < a) {
        var c = a - 1, g = G(b);
        a = c;
        b = g;
      } else {
        return null;
      }
    }
  }
  function b(a) {
    for (;;) {
      if (B(a)) {
        a = G(a);
      } else {
        return null;
      }
    }
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.g = b;
  c.h = a;
  return c;
}(), vl = function() {
  function a(a, b) {
    ul.h(a, b);
    return b;
  }
  function b(a) {
    ul.g(a);
    return a;
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.g = b;
  c.h = a;
  return c;
}();
function wl(a, b) {
  if ("string" === typeof b) {
    var c = a.exec(b);
    return vf.h(D(c), b) ? 1 === N(c) ? D(c) : nj(c) : null;
  }
  throw new TypeError("re-matches must match against a string.");
}
function xl(a, b) {
  if ("string" === typeof b) {
    var c = a.exec(b);
    return null == c ? null : 1 === N(c) ? D(c) : nj(c);
  }
  throw new TypeError("re-find must match against a string.");
}
function yl(a) {
  if (a instanceof RegExp) {
    return a;
  }
  var b = xl(/^(?:\(\?([idmsux]*)\))?(.*)/, a);
  O.j(b, 0, null);
  a = O.j(b, 1, null);
  b = O.j(b, 2, null);
  return new RegExp(b, a);
}
function zl(a, b, c, d, e, f, g) {
  var h = Qc;
  try {
    Qc = null == Qc ? null : Qc - 1;
    if (null != Qc && 0 > Qc) {
      return Ce(a, "#");
    }
    Ce(a, c);
    if (B(g)) {
      var l = D(g);
      b.j ? b.j(l, a, f) : b.call(null, l, a, f);
    }
    for (var p = G(g), r = Zc.g(f) - 1;;) {
      if (!p || null != r && 0 === r) {
        B(p) && 0 === r && (Ce(a, d), Ce(a, "..."));
        break;
      } else {
        Ce(a, d);
        var t = D(p);
        c = a;
        g = f;
        b.j ? b.j(t, c, g) : b.call(null, t, c, g);
        var u = G(p);
        c = r - 1;
        p = u;
        r = c;
      }
    }
    return Ce(a, e);
  } finally {
    Qc = h;
  }
}
var Al = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = H(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    for (var e = B(b), f = null, g = 0, h = 0;;) {
      if (h < g) {
        var l = f.F(null, h);
        Ce(a, l);
        h += 1;
      } else {
        if (e = B(e)) {
          f = e, U(f) ? (e = x(f), g = z(f), f = e, l = N(e), e = g, g = l) : (l = D(f), Ce(a, l), e = G(f), f = null, g = 0), h = 0;
        } else {
          return null;
        }
      }
    }
  }
  a.B = 1;
  a.o = function(a) {
    var d = D(a);
    a = E(a);
    return b(d, a);
  };
  a.k = b;
  return a;
}(), Bl = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function Cl(a) {
  return'"' + v.g(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return Bl[a];
  })) + '"';
}
var Fl = function Dl(b, c, d) {
  if (null == b) {
    return Ce(c, "nil");
  }
  if (void 0 === b) {
    return Ce(c, "#\x3cundefined\x3e");
  }
  q(function() {
    var c = Q.h(d, Xc);
    return q(c) ? (c = b ? b.t & 131072 || b.dg ? !0 : b.t ? !1 : kd(je, b) : kd(je, b)) ? wg(b) : c : c;
  }()) && (Ce(c, "^"), Dl(wg(b), c, d), Ce(c, " "));
  if (null == b) {
    return Ce(c, "nil");
  }
  if (b.hb) {
    return b.mb(b, c, d);
  }
  if (b && (b.t & 2147483648 || b.Ba)) {
    return b.P(null, c, d);
  }
  if (ld(b) === Boolean || "number" === typeof b) {
    return Ce(c, "" + v.g(b));
  }
  if (null != b && b.constructor === Object) {
    Ce(c, "#js ");
    var e = qi.h(function(c) {
      return new V(null, 2, 5, W, [Ch.g(c), b[c]], null);
    }, Fg(b));
    return El.p ? El.p(e, Dl, c, d) : El.call(null, e, Dl, c, d);
  }
  return b instanceof Array ? zl(c, Dl, "#js [", " ", "]", d, b) : q(da(b)) ? q(Wc.g(d)) ? Ce(c, Cl(b)) : Ce(c, b) : ug(b) ? Al.k(c, H(["#\x3c", "" + v.g(b), "\x3e"], 0)) : b instanceof Date ? (e = function(b, c) {
    for (var d = "" + v.g(b);;) {
      if (N(d) < c) {
        d = "0" + v.g(d);
      } else {
        return d;
      }
    }
  }, Al.k(c, H(['#inst "', "" + v.g(b.getUTCFullYear()), "-", e(b.getUTCMonth() + 1, 2), "-", e(b.getUTCDate(), 2), "T", e(b.getUTCHours(), 2), ":", e(b.getUTCMinutes(), 2), ":", e(b.getUTCSeconds(), 2), ".", e(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0))) : b instanceof RegExp ? Al.k(c, H(['#"', b.source, '"'], 0)) : (b ? b.t & 2147483648 || b.Ba || (b.t ? 0 : kd(De, b)) : kd(De, b)) ? Ee(b, c, d) : Al.k(c, H(["#\x3c", "" + v.g(b), "\x3e"], 0));
};
function Gl(a, b) {
  var c = new Nc;
  a: {
    var d = new df(c);
    Fl(D(a), d, b);
    for (var e = B(G(a)), f = null, g = 0, h = 0;;) {
      if (h < g) {
        var l = f.F(null, h);
        Ce(d, " ");
        Fl(l, d, b);
        h += 1;
      } else {
        if (e = B(e)) {
          f = e, U(f) ? (e = x(f), g = z(f), f = e, l = N(e), e = g, g = l) : (l = D(f), Ce(d, " "), Fl(l, d, b), e = G(f), f = null, g = 0), h = 0;
        } else {
          break a;
        }
      }
    }
  }
  return c;
}
function Hl(a, b) {
  return zg(a) ? "" : "" + v.g(Gl(a, b));
}
var ni = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = H(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    return Hl(a, Rc());
  }
  a.B = 0;
  a.o = function(a) {
    a = B(a);
    return b(a);
  };
  a.k = b;
  return a;
}(), Il = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = H(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b = R.j(Rc(), Wc, !1);
    a = Hl(a, b);
    Oc.g ? Oc.g(a) : Oc.call(null, a);
    q(Pc) ? (a = Rc(), Oc.g ? Oc.g("\n") : Oc.call(null, "\n"), a = (Q.h(a, Vc), null)) : a = null;
    return a;
  }
  a.B = 0;
  a.o = function(a) {
    a = B(a);
    return b(a);
  };
  a.k = b;
  return a;
}();
function El(a, b, c, d) {
  return zl(c, function(a, c, d) {
    var h = Td(a);
    b.j ? b.j(h, c, d) : b.call(null, h, c, d);
    Ce(c, " ");
    a = be(a);
    return b.j ? b.j(a, c, d) : b.call(null, a, c, d);
  }, "{", ", ", "}", d, B(a));
}
zf.prototype.Ba = !0;
zf.prototype.P = function(a, b, c) {
  return zl(b, Fl, "(", " ", ")", c, this);
};
Dh.prototype.Ba = !0;
Dh.prototype.P = function(a, b, c) {
  return zl(b, Fl, "(", " ", ")", c, this);
};
wk.prototype.Ba = !0;
wk.prototype.P = function(a, b, c) {
  return zl(b, Fl, "(", " ", ")", c, this);
};
pk.prototype.Ba = !0;
pk.prototype.P = function(a, b, c) {
  return zl(b, Fl, "(", " ", ")", c, this);
};
Ak.prototype.Ba = !0;
Ak.prototype.P = function(a, b, c) {
  return zl(b, Fl, "[", " ", "]", c, this);
};
Fj.prototype.Ba = !0;
Fj.prototype.P = function(a, b, c) {
  return zl(b, Fl, "(", " ", ")", c, this);
};
pj.prototype.Ba = !0;
pj.prototype.P = function(a, b, c) {
  return zl(b, Fl, "(", " ", ")", c, this);
};
Ah.prototype.Ba = !0;
Ah.prototype.P = function(a, b, c) {
  return zl(b, Fl, "(", " ", ")", c, this);
};
Xf.prototype.Ba = !0;
Xf.prototype.P = function(a, b, c) {
  return zl(b, Fl, "(", " ", ")", c, this);
};
rk.prototype.Ba = !0;
rk.prototype.P = function(a, b, c) {
  return El(this, Fl, b, c);
};
qk.prototype.Ba = !0;
qk.prototype.P = function(a, b, c) {
  return zl(b, Fl, "(", " ", ")", c, this);
};
rj.prototype.Ba = !0;
rj.prototype.P = function(a, b, c) {
  return zl(b, Fl, "[", " ", "]", c, this);
};
Nk.prototype.Ba = !0;
Nk.prototype.P = function(a, b, c) {
  return El(this, Fl, b, c);
};
Xk.prototype.Ba = !0;
Xk.prototype.P = function(a, b, c) {
  return zl(b, Fl, "#{", " ", "}", c, this);
};
Jh.prototype.Ba = !0;
Jh.prototype.P = function(a, b, c) {
  return zl(b, Fl, "(", " ", ")", c, this);
};
ii.prototype.Ba = !0;
ii.prototype.P = function(a, b, c) {
  Ce(b, "#\x3cAtom: ");
  Fl(this.state, b, c);
  return Ce(b, "\x3e");
};
Tk.prototype.Ba = !0;
Tk.prototype.P = function(a, b, c) {
  return zl(b, Fl, "(", " ", ")", c, this);
};
zk.prototype.Ba = !0;
zk.prototype.P = function(a, b, c) {
  return zl(b, Fl, "[", " ", "]", c, this);
};
V.prototype.Ba = !0;
V.prototype.P = function(a, b, c) {
  return zl(b, Fl, "[", " ", "]", c, this);
};
wj.prototype.Ba = !0;
wj.prototype.P = function(a, b, c) {
  return zl(b, Fl, "(", " ", ")", c, this);
};
xh.prototype.Ba = !0;
xh.prototype.P = function(a, b) {
  return Ce(b, "()");
};
xj.prototype.Ba = !0;
xj.prototype.P = function(a, b, c) {
  return zl(b, Fl, "#queue [", " ", "]", c, B(this));
};
n.prototype.Ba = !0;
n.prototype.P = function(a, b, c) {
  return El(this, Fl, b, c);
};
fl.prototype.Ba = !0;
fl.prototype.P = function(a, b, c) {
  return zl(b, Fl, "(", " ", ")", c, this);
};
Rk.prototype.Ba = !0;
Rk.prototype.P = function(a, b, c) {
  return zl(b, Fl, "(", " ", ")", c, this);
};
wh.prototype.Ba = !0;
wh.prototype.P = function(a, b, c) {
  return zl(b, Fl, "(", " ", ")", c, this);
};
V.prototype.vd = !0;
V.prototype.wd = function(a, b) {
  return Ng.h(this, b);
};
rj.prototype.vd = !0;
rj.prototype.wd = function(a, b) {
  return Ng.h(this, b);
};
X.prototype.vd = !0;
X.prototype.wd = function(a, b) {
  return uf(this, b);
};
xf.prototype.vd = !0;
xf.prototype.wd = function(a, b) {
  return uf(this, b);
};
function Jl(a, b, c) {
  Ge(a, b, c);
}
var Kl = null, Ll = function() {
  function a(a) {
    null == Kl && (Kl = li.g ? li.g(0) : li.call(null, 0));
    return yf.g("" + v.g(a) + v.g(oi.h(Kl, Pf)));
  }
  function b() {
    return c.g("G__");
  }
  var c = null, c = function(c) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a.call(this, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.q = b;
  c.g = a;
  return c;
}();
function Ml(a) {
  return function(b, c) {
    var d = a.h ? a.h(b, c) : a.call(null, b, c);
    return Rf(d) ? new Qf(d) : d;
  };
}
function zi(a) {
  return function(b) {
    return function() {
      function c(a, c) {
        return od.j(b, a, c);
      }
      function d(b) {
        return a.g ? a.g(b) : a.call(null, b);
      }
      function e() {
        return a.q ? a.q() : a.call(null);
      }
      var f = null, f = function(a, b) {
        switch(arguments.length) {
          case 0:
            return e.call(this);
          case 1:
            return d.call(this, a);
          case 2:
            return c.call(this, a, b);
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      f.q = e;
      f.g = d;
      f.h = c;
      return f;
    }();
  }(Ml(a));
}
eh = function() {
  function a(a) {
    return(Math.random.q ? Math.random.q() : Math.random.call(null)) * a;
  }
  function b() {
    return c.g(1);
  }
  var c = null, c = function(c) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a.call(this, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.q = b;
  c.g = a;
  return c;
}();
fh = function(a) {
  a *= Math.random.q ? Math.random.q() : Math.random.call(null);
  return Math.floor.g ? Math.floor.g(a) : Math.floor.call(null, a);
};
function Nl(a, b) {
  return Th(od.j(function(b, d) {
    var e = a.g ? a.g(d) : a.call(null, d);
    return Vh.j(b, e, qg.h(Q.j(b, e, pg), d));
  }, Ie(Jj), b));
}
function Ol(a) {
  this.sb = a;
  this.G = 0;
  this.t = 2153775104;
}
Ol.prototype.R = function() {
  for (var a = ni.k(H([this], 0)), b = 0, c = 0;c < a.length;++c) {
    b = 31 * b + a.charCodeAt(c), b %= 4294967296;
  }
  return b;
};
Ol.prototype.P = function(a, b) {
  return Ce(b, '#uuid "' + v.g(this.sb) + '"');
};
Ol.prototype.O = function(a, b) {
  return b instanceof Ol && this.sb === b.sb;
};
Ol.prototype.toString = function() {
  return this.sb;
};
var Pl = new X(null, "inactive", "inactive", -306247616), Ql = new X(null, "y", "y", -1757859776), Rl = new X(null, "learn-segs", "learn-segs", -481861280), Sl = new X(null, "no-deref-monitor", "no-deref-monitor", 1171473184), Tl = new X(null, "seg-w-px", "seg-w-px", 1192509248), Ul = new X(null, "fieldset", "fieldset", -1949770816), Vl = new X(null, "fieldset#sim-controls", "fieldset#sim-controls", 443000993), Wl = new X(null, "watches", "watches", -273097535), Xl = new X(null, "boost-overlap-duty-ratio", 
"boost-overlap-duty-ratio", -1153915647), Yl = new X(null, "ff-perm-connected", "ff-perm-connected", 828443105), Zl = new X(null, "ff-synapses", "ff-synapses", -1536453151), $l = new X(null, "gap-countdown", "gap-countdown", -2051578079), am = new X(null, "target-density", "target-density", 391599009), bm = new X(null, "fieldset.region-spec", "fieldset.region-spec", 1547815873), cm = new X(null, "run-0-5", "run-0-5", -60879870), dm = new X(null, "ff-perm-init", "ff-perm-init", -588489726), em = new X(null, 
"min", "min", 444991522), fm = new X(null, "down", "down", 1565245570), gm = new X(null, "boosts", "boosts", 2116854050), hm = new X(null, "n-segments", "n-segments", -370398), im = new X(null, "max-syns", "max-syns", -930774526), jm = new X(null, "distal-punish?", "distal-punish?", 1652249154), km = new X(null, "span#sim-rate", "span#sim-rate", -400148894), lm = new X(null, "global-inhibition?", "global-inhibition?", 500661922), mm = new X(null, "text-margin", "text-margin", 1161346978), nm = new X(null, 
"g.tick.major-tick", "g.tick.major-tick", 1467819139), om = new X(null, "dh", "dh", 528137731), pm = new X(null, "run-sim", "run-sim", 1708970627), qm = new X(null, "burst-cols", "burst-cols", 1737318083), rm = new X(null, "a#sim-faster", "a#sim-faster", 1179722499), sm = new X(null, "diag-tl-br", "diag-tl-br", 307182435), tm = new X(null, "inh-radius", "inh-radius", 849540035), um = new X(null, "span#sim-timestep", "span#sim-timestep", -764964893), vm = new X(null, "max-segs", "max-segs", -976352252), 
wm = new X(null, "prior-active-cells", "prior-active-cells", -1121033212), xm = new X(null, "alternative", "alternative", 51666308), ym = new X(null, "freeze?", "freeze?", -1165808188), zm = new X(null, "transform", "transform", 1381301764), Xc = new X(null, "meta", "meta", 1499536964), Am = new X(null, "selected", "selected", 574897764), Bm = new X(null, "dx", "dx", -381796732), lo = new X(null, "seg-new-synapse-count", "seg-new-synapse-count", 841824004), mo = new X(null, "seg-h-space-px", "seg-h-space-px", 
1353315204), no = new X(null, "scroll-top", "scroll-top", -46723100), oo = new X(null, "scroll-counter", "scroll-counter", 628002885), po = new X("org.nfrac.comportex.demos.isolated-1d", "current-pattern-index", "org.nfrac.comportex.demos.isolated-1d/current-pattern-index", -20812731), Yc = new X(null, "dup", "dup", 556298533), qo = new X(null, "g.ticks", "g.ticks", 28507493), ro = new X(null, "temporal-pooling", "temporal-pooling", 240992677), so = new X(null, "segment-idx", "segment-idx", -248867259), 
to = new X(null, "key", "key", -1516042587), uo = new X(null, "index", "index", -1531685915), vo = new X(null, "pred-cells", "pred-cells", -549223386), wo = new X(null, "bottom", "bottom", -1550509018), xo = new X(null, "max-segments", "max-segments", -157037498), yo = new X(null, "encoder", "encoder", -1113127834), zo = new X("org.nfrac.comportex.demos.isolated-2d", "current-pattern-index", "org.nfrac.comportex.demos.isolated-2d/current-pattern-index", -20812698), Ao = new X(null, "button#sim-start", 
"button#sim-start", -924760922), Bo = new X(null, "exit", "exit", 351849638), Co = new X(null, "src-\x3ei", "src-\x3ei", -1634218746), Do = new X(null, "distal-perm-dec", "distal-perm-dec", -223583802), Eo = new X(null, "disconnected", "disconnected", -1908014586), Fo = new X(null, "boost-active-duty-ratio", "boost-active-duty-ratio", 891850342), Go = new X(null, "lateral-synapses?", "lateral-synapses?", -963308249), Ho = new X(null, "lat-synapses", "lat-synapses", 1341366663), Io = new X(null, "button#sim-reset", 
"button#sim-reset", -1103042169), Jo = new X(null, "top", "top", -1856271961), Ko = new X(null, "derefed", "derefed", 590684583), Lo = new X(null, "uuid-\x3eid", "uuid-\x3eid", 175040135), Mo = new X(null, "text.label", "text.label", 210580295), No = new X(null, "topo", "topo", -1894825145), Oo = new X(null, "yellow", "yellow", -881035449), ki = new X(null, "validator", "validator", -1966190681), Po = new X(null, "highlight", "highlight", -800930873), Qo = new X(null, "line.rule", "line.rule", -722114232), 
Ro = new X(null, "button#anim-step", "button#anim-step", 1065036136), So = new X(null, "seg-h-px", "seg-h-px", -443969112), To = new X(null, "finally-block", "finally-block", 832982472), Uo = new X(null, "h-space-px", "h-space-px", -766035480), Vo = new X(null, "col-shrink", "col-shrink", -1043182072), Wo = new X(null, "i-\x3esrc", "i-\x3esrc", -299811032), Xo = new X(null, "learn-segments", "learn-segments", 1869208392), Yo = new X(null, "distal-perm-connected", "distal-perm-connected", -1849103512), 
Zo = new X(null, "columns", "columns", 1998437288), $o = new X(null, "a#anim-slower", "a#anim-slower", -2103660568), ap = new X(null, "w", "w", 354169001), bp = new X(null, "seg-learn-threshold", "seg-learn-threshold", 1271249129), cp = new X(null, "sy", "sy", 227523849), dp = new X(null, "element-h", "element-h", -1458880151), ep = new X(null, "fb-deps-map", "fb-deps-map", -2087874103), fp = new X(null, "anim-go?", "anim-go?", 1109067401), gp = new X(null, "dt", "dt", -368444759), hp = new X(null, 
"formatter", "formatter", -483008823), ip = new X(null, "parent-watchables", "parent-watchables", -319854903), jp = new X(null, "value", "value", 305978217), kp = new X(null, "seg-stimulus-threshold", "seg-stimulus-threshold", -1901580343), lp = new X(null, "green", "green", -945526839), mp = new X(null, "rand-10", "rand-10", -1131947990), np = new X(null, "time", "time", 1385887882), op = new X(null, "fieldset#anim-controls", "fieldset#anim-controls", 750977322), pp = new X(null, "mapping", "mapping", 
-1242405430), qp = new X(null, "sig-overlaps", "sig-overlaps", 436652586), rp = new X(null, "page-up", "page-up", 1352555050), sp = new X(null, "regions", "regions", -1023815958), tp = new X(null, "timestep", "timestep", -1557942486), up = new X(null, "dirty?", "dirty?", -2059845846), vp = new X(null, "y1", "y1", 589123466), wp = new X(null, "width", "width", -384071477), xp = new X(null, "a#sim-slower", "a#sim-slower", -8187669), yp = new X(null, "background", "background", -863952629), zp = new X(null, 
"column-dimensions", "column-dimensions", 935248171), Ap = new X(null, "button#sim-step", "button#sim-step", -991688373), Bp = new X(null, "dy", "dy", 1719547243), Cp = new X(null, "connected", "connected", -169833045), Dp = new X(null, "p.detail", "p.detail", -259333685), Ep = new X(null, "submit", "submit", -49315317), Fp = new X(null, "active-duty-cycles", "active-duty-cycles", -2100410837), Gp = new X(null, "legend", "legend", -1027192245), Hp = new X(null, "shrink", "shrink", 1415287595), Ip = 
new X(null, "orientation", "orientation", 623557579), Jp = new X(null, "fieldset#viz-options", "fieldset#viz-options", -957799412), Kp = new X(null, "predictive", "predictive", 742235276), Lp = new X(null, "channel", "channel", 734187692), Mp = new X(null, "signal-cells", "signal-cells", -451652436), Np = new X(null, "draw-steps", "draw-steps", -100988692), $ = new X(null, "recur", "recur", -437573268), Op = new X(null, "type", "type", 1174270348), Pp = new X("comportexviz.viz-canvas", "acols", "comportexviz.viz-canvas/acols", 
1747707340), Qp = new X(null, "inputs-map", "inputs-map", 2087933420), Rp = new X(null, "distal-vs-proximal-weight", "distal-vs-proximal-weight", 1616745132), kq = new X(null, "update", "update", 1045576396), lq = new X(null, "catch-block", "catch-block", 1175212748), Eq = new X(null, "twos", "twos", 709888876), Fq = new X(null, "ff-init-frac", "ff-init-frac", 503945132), Gq = new X(null, "state", "state", -1988618099), Hq = new X(null, "proximal-exc", "proximal-exc", -571761459), Iq = new X(null, 
"votes-frac", "votes-frac", -680687347), Jq = new X(null, "g.timestep", "g.timestep", -1438660275), Kq = new X(null, "proximal-sg", "proximal-sg", -717554323), Lq = new X(null, "distal-perm-inc", "distal-perm-inc", -162111059), Mq = new X(null, "major-tick-width", "major-tick-width", -401901043), Nq = new X("comportexviz.viz-canvas", "abits", "comportexviz.viz-canvas/abits", -1378531795), Oq = new X(null, "update-dom", "update-dom", 1414664877), Pq = new X(null, "seg-max-synapse-count", "seg-max-synapse-count", 
-139057427), Qq = new X(null, "span.detail", "span.detail", -1905752307), Rq = new X(null, "span#sim-ms-text", "span#sim-ms-text", -117079187), Vc = new X(null, "flush-on-newline", "flush-on-newline", -151457939), Sq = new X(null, "overlap-duty-cycles", "overlap-duty-cycles", 1224111053), Tq = new X(null, "sim-step-ms", "sim-step-ms", -1192536083), Uq = new X(null, "button#anim-start", "button#anim-start", 373847086), Vq = new X(null, "distal-topdown-dimensions", "distal-topdown-dimensions", 914721102), 
Wq = new X(null, "learn-cells", "learn-cells", -1536897586), Xq = new X(null, "all", "all", 892129742), Yq = new X(null, "span#anim-every-text", "span#anim-every-text", -815816561), Zq = new X(null, "seed", "seed", 68613327), $q = new X(null, "up", "up", -269712113), ar = new X(null, "canvas", "canvas", -1798817489), br = new X(null, "size", "size", 1098693007), cr = new X(null, "enter", "enter", 1792452624), dr = new X(null, "bit-h-px", "bit-h-px", -1081204688), er = new X("comportexviz.viz-canvas", 
"nsegcols", "comportexviz.viz-canvas/nsegcols", 1473275952), fr = new X(null, "learning", "learning", 612366512), gr = new X(null, "region", "region", 270415120), hr = new X(null, "style", "style", -496642736), ir = new X(null, "clamp?", "clamp?", 249465200), jr = new X(null, "ts", "ts", 1617209904), kr = new X(null, "div", "div", 1057191632), lr = new X(null, "option", "option", 65132272), Wc = new X(null, "readably", "readably", 1129599760), mr = new X(null, "run-start", "run-start", 1984981840), 
nr = new X(null, "activation", "activation", 2128521072), or = new X(null, "use-feedback?", "use-feedback?", -485653423), pr = new X("comportexviz.viz-canvas", "tpcols", "comportexviz.viz-canvas/tpcols", 500403377), qr = new X(null, "ff-grow-and-die?", "ff-grow-and-die?", 1154098385), rr = new X(null, "key-fn", "key-fn", -636154479), sr = new X(null, "spec", "spec", 347520401), tr = new X(null, "distal-motor-dimensions", "distal-motor-dimensions", -1463346767), ur = new X(null, "g", "g", 1738089905), 
vr = new X(null, "bit-precision", "bit-precision", 2066921041), wr = new X(null, "button#anim-stop", "button#anim-stop", -279088527), xr = new X(null, "random-double", "random-double", -922602767), yr = new X(null, "active-predicted", "active-predicted", -72115407), zr = new X(null, "click", "click", 1912301393), Ar = new X(null, "cp1x", "cp1x", 465245137), Br = new X(null, "active-cols", "active-cols", -922660398), Cr = new X(null, "anim-every", "anim-every", 1633754642), Dr = new X(null, "max-boost", 
"max-boost", 608482834), Er = new X(null, "ff-potential-radius", "ff-potential-radius", 254943154), Fr = new X(null, "label-margin", "label-margin", -17690670), Gr = new X(null, "height-px", "height-px", -1391665005), Hr = new X(null, "nodes", "nodes", -2099585805), Ir = new X(null, "cp2x", "cp2x", -1682644749), Jr = new X(null, "line", "line", 212345235), Kr = new X(null, "ff-perm-inc", "ff-perm-inc", -742369901), Lr = new X(null, "i-\x3etgt", "i-\x3etgt", -1469739469), Mr = new X("comportexviz.viz-canvas", 
"pbits", "comportexviz.viz-canvas/pbits", 1988133491), Nr = new X(null, "active-cells-by-col", "active-cells-by-col", 782265971), Or = new X(null, "div#comportex-drawing", "div#comportex-drawing", 1638716307), Pr = new X(null, "active-cells", "active-cells", -1277925485), Qr = new X(null, "targets-by-source", "targets-by-source", -1472501869), Rr = new X(null, "motor", "motor", -1310194765), Sr = new X(null, "g.plot-space", "g.plot-space", -1258275917), Tr = new X(null, "h", "h", 1109658740), Ur = 
new X(null, "from", "from", 1815293044), Vr = new X(null, "prior-learn-cells", "prior-learn-cells", 94172276), Wr = new X(null, "a#anim-faster", "a#anim-faster", -1294334764), Zc = new X(null, "print-length", "print-length", 1931866356), Xr = new X(null, "max", "max", 61366548), Yr = new X(null, "bit-coverage", "bit-coverage", -771349196), Zr = new X(null, "active", "active", 1895962068), $r = new X(null, "col", "col", -1959363084), as = new X(null, "activation-level", "activation-level", -1385123308), 
bs = new X(null, "overlaps", "overlaps", 1398230580), cs = new X(null, "label", "label", 1718410804), ds = new X(null, "id", "id", -1388402092), es = new X(null, "class", "class", -2030961996), fs = new X(null, "red", "red", -969428204), gs = new X(null, "blue", "blue", -622100620), hs = new X(null, "extent", "extent", -186399820), is = new X(null, "catch-exception", "catch-exception", -1997306795), js = new X(null, "opts", "opts", 155075701), ks = new X(null, "init-value", "init-value", -374892331), 
ls = new X(null, "input-w-px", "input-w-px", -99789611), ms = new X(null, "top-px", "top-px", 1982343477), ns = new X(null, "distal-sg", "distal-sg", 752001365), os = new X("comportexviz.viz-canvas", "pcols", "comportexviz.viz-canvas/pcols", 1740826069), ps = new X(null, "checked", "checked", -50955819), qs = new X("org.nfrac.comportex.demos.isolated-1d", "gap-countdown", "org.nfrac.comportex.demos.isolated-1d/gap-countdown", 1385863765), rs = new X(null, "left-px", "left-px", -745883979), ss = new X(null, 
"ts-plot", "ts-plot", -1498457323), ts = new X(null, "prev", "prev", -1597069226), us = new X(null, "svg", "svg", 856789142), vs = new X(null, "span.parameter-label", "span.parameter-label", -815265354), ws = new X(null, "length", "length", 588987862), xs = new X(null, "button#sim-stop", "button#sim-stop", 1477647862), ys = new X(null, "continue-block", "continue-block", -1852047850), zs = new X("org.nfrac.comportex.demos.isolated-2d", "gap-countdown", "org.nfrac.comportex.demos.isolated-2d/gap-countdown", 
1385863862), As = new X(null, "step-counter", "step-counter", 881657879), Bs = new X(null, "cp1y", "cp1y", 628283543), Cs = new X(null, "div#comportex-controls", "div#comportex-controls", -1291722569), Ds = new X(null, "div#comportex-parameters", "div#comportex-parameters", 737276119), Es = new X(null, "ff-deps-map", "ff-deps-map", 418359639), Fs = new X(null, "ff-perm-dec", "ff-perm-dec", 1363415607), Gs = new X(null, "right", "right", -452581833), Hs = new X(null, "ticks", "ticks", -406190313), 
Is = new X(null, "dw", "dw", -821060841), Js = new X(null, "redraw", "redraw", -1075394793), Ks = new X(null, "input-dimensions", "input-dimensions", -1946955913), Ls = new X(null, "input-topology", "input-topology", -2015425577), Ms = new X(null, "display", "display", 242065432), Ns = new X(null, "syns-by-target", "syns-by-target", 1015999640), Os = new X(null, "drawing", "drawing", 1181749528), Ps = new X(null, "f", "f", -1597136552), Qs = new X(null, "sx", "sx", -403071592), Rs = new X(null, "cell-id", 
"cell-id", 1789875608), Ss = new X(null, "saw-10-15", "saw-10-15", 953187768), Ts = new X(null, "depth", "depth", 1768663640), Us = new X(null, "br", "br", 934104792), Vs = new X(null, "inhibition-base-distance", "inhibition-base-distance", 645074808), Ws = new X(null, "rev-5-1", "rev-5-1", -252300392), Xs = new X(null, "regions-map", "regions-map", 424218584), Ys = new X(null, "standard", "standard", -1769206695), Zs = new X(null, "define-me!", "define-me!", -268367591), $s = new X(null, "x", "x", 
2099068185), at = new X(null, "x1", "x1", -1863922247), bt = new X(null, "bit-w-px", "bit-w-px", -531552775), ct = new X(null, "form", "form", -1624062471), dt = new X(null, "prior-pred-cells", "prior-pred-cells", 2074077785), et = new X(null, "tag", "tag", -1290361223), ft = new X(null, "neighbors", "neighbors", 1430436473), gt = new X(null, "predicted", "predicted", 2110738041), ht = new X(null, "res", "res", -1395007879), it = new X(null, "sh", "sh", -682444007), jt = new X(null, "capture", "capture", 
-677031143), kt = new X(null, "sw", "sw", 833113913), lt = new X(null, "domain", "domain", 1847214937), mt = new X(null, "input", "input", 556931961), nt = new X(null, "cp2y", "cp2y", 903335801), ot = new X(null, "ff-grow-up-to-count", "ff-grow-up-to-count", 738299833), pt = new X(null, "uuid", "uuid", -2145095719), qt = new X(null, "seq", "seq", -1817803783), rt = new X(null, "keep-n", "keep-n", -176064454), st = new X(null, "change", "change", -1163046502), tt = new X(null, "down-1", "down-1", 
-85274150), ut = new X(null, "page-down", "page-down", -392838598), vt = new X(null, "purple", "purple", -876021126), wt = new X(null, "y2", "y2", -718691301), xt = new X(null, "strata", "strata", -1244192485), gv = new X(null, "circles?", "circles?", -1676300005), hv = new X("comportexviz", "draw-input", "comportexviz/draw-input", -516395685), iv = new X(null, "inactive-syn", "inactive-syn", 1351816571), jv = new X(null, "signal", "signal", -1984951589), kv = new X(null, "down-right", "down-right", 
1213350619), lv = new X(null, "jump-6-12", "jump-6-12", -1217478725), mv = new X(null, "tgt-\x3ei", "tgt-\x3ei", -220968868), nv = new X(null, "highlight-color", "highlight-color", -1394121540), ov = new X("comportexviz.viz-canvas", "cache", "comportexviz.viz-canvas/cache", 33193148), pv = new X(null, "force-update?", "force-update?", 137364796), qv = new X(null, "distal-exc", "distal-exc", -506020516), rv = new X(null, "duty-cycle-period", "duty-cycle-period", -962296356), sv = new X(null, "layer-3", 
"layer-3", 891136476), tv = new X(null, "pcon", "pcon", 219389436), uv = new X(null, "permanences", "permanences", -1713734116), vv = new X("comportexviz.viz-canvas", "ocols", "comportexviz.viz-canvas/ocols", -2081286436), wv = new X(null, "rect", "rect", -108902628), xv = new X(null, "step", "step", 1288888124), yv = new X(null, "prox-exc", "prox-exc", -708084900), zv = new X(null, "p", "p", 151049309), Av = new X(null, "ff-max-synapse-count", "ff-max-synapse-count", -497183491), Bv = new X(null, 
"column-field", "column-field", -2123020963), Cv = new X(null, "x2", "x2", -1362513475), Dv = new X(null, "spontaneous-activation?", "spontaneous-activation?", 1807538270), Ev = new X(null, "run-6-10", "run-6-10", 295893118), Fv = new X(null, "href", "href", -793805698), Gv = new X(null, "none", "none", 1333468478), Hv = new X(null, "votes-per-bit", "votes-per-bit", -1001226722), Iv = new X(null, "bucket", "bucket", 1126218366), Jv = new X(null, "cull-zeros?", "cull-zeros?", -434506978), Kv = new X(null, 
"col-d-px", "col-d-px", -985327682), Lv = new X(null, "bit-shrink", "bit-shrink", -1161684994), Mv = new X(null, "range", "range", 1639692286), Nv = new X(null, "height", "height", 1025178622), Ov = new X(null, "select", "select", 1147833503), Pv = new X(null, "distal-perm-init", "distal-perm-init", -48514913), Qv = new X(null, "ff-stimulus-threshold", "ff-stimulus-threshold", -48644961), Rv = new X(null, "cell-r-px", "cell-r-px", 423637311), Sv = new X(null, "topology", "topology", -474296001), 
Tv = new X(null, "left", "left", -399115937), Wk = new X("cljs.core", "not-found", "cljs.core/not-found", -1572889185), Uv = new X(null, "raw-sg", "raw-sg", 955489791), Vv = new X(null, "text", "text", -1790561697), Wv = new X(null, "proximal-sig-exc", "proximal-sig-exc", 1395177055), Xv = new X(null, "element-w", "element-w", 2089708127), Yv = new X(null, "span", "span", 1394872991), Zv = new X(null, "margin", "margin", -995903681), $v = new X(null, "data", "data", -232669377);
function aw() {
  function a() {
    return fh(16).toString(16);
  }
  return new Ol((new Nc(a(), a(), a(), a(), a(), a(), a(), a(), "-", a(), a(), a(), a(), "-4", a(), a(), a(), "-", (8 | 3 & fh(15)).toString(16), a(), a(), a(), "-", a(), a(), a(), a(), a(), a(), a(), a(), a(), a(), a(), a())).toString());
}
;function bw(a, b) {
  var c = S.j(cl, a, b);
  return Zf(c, Ci.h(function(a) {
    return function(b) {
      return a === b;
    };
  }(c), b));
}
var cw = function() {
  function a(a, b) {
    return N(a) < N(b) ? od.j(qg, b, a) : od.j(qg, a, b);
  }
  var b = null, c = function() {
    function a(c, d, h) {
      var l = null;
      2 < arguments.length && (l = H(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      a = bw(N, qg.k(d, c, H([a], 0)));
      return od.j(Oi, D(a), E(a));
    }
    a.B = 2;
    a.o = function(a) {
      var c = D(a);
      a = G(a);
      var d = D(a);
      a = E(a);
      return b(c, d, a);
    };
    a.k = b;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 0:
        return Zk;
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.k(b, e, H(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.B = 2;
  b.o = c.o;
  b.q = function() {
    return Zk;
  };
  b.g = function(a) {
    return a;
  };
  b.h = a;
  b.k = c.k;
  return b;
}(), dw = function() {
  function a(a, b) {
    for (;;) {
      if (N(b) < N(a)) {
        var c = a;
        a = b;
        b = c;
      } else {
        return od.j(function(a, b) {
          return function(a, c) {
            return Lg(b, c) ? a : yg.h(a, c);
          };
        }(a, b), a, a);
      }
    }
  }
  var b = null, c = function() {
    function a(b, d, h) {
      var l = null;
      2 < arguments.length && (l = H(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      a = bw(function(a) {
        return-N(a);
      }, qg.k(e, d, H([a], 0)));
      return od.j(b, D(a), E(a));
    }
    a.B = 2;
    a.o = function(a) {
      var b = D(a);
      a = G(a);
      var d = D(a);
      a = E(a);
      return c(b, d, a);
    };
    a.k = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.k(b, e, H(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.B = 2;
  b.o = c.o;
  b.g = function(a) {
    return a;
  };
  b.h = a;
  b.k = c.k;
  return b;
}(), ew = function() {
  function a(a, b) {
    return N(a) < N(b) ? od.j(function(a, c) {
      return Lg(b, c) ? yg.h(a, c) : a;
    }, a, a) : od.j(yg, a, b);
  }
  var b = null, c = function() {
    function a(b, d, h) {
      var l = null;
      2 < arguments.length && (l = H(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      return od.j(b, a, qg.h(e, d));
    }
    a.B = 2;
    a.o = function(a) {
      var b = D(a);
      a = G(a);
      var d = D(a);
      a = E(a);
      return c(b, d, a);
    };
    a.k = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.k(b, e, H(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.B = 2;
  b.o = c.o;
  b.g = function(a) {
    return a;
  };
  b.h = a;
  b.k = c.k;
  return b;
}();
function fw(a) {
  if (a ? a.sf : a) {
    return a.sf();
  }
  var b;
  b = fw[m(null == a ? null : a)];
  if (!b && (b = fw._, !b)) {
    throw s("PHTM.htm-activate", a);
  }
  return b.call(null, a);
}
function gw(a) {
  if (a ? a.uf : a) {
    return a.uf();
  }
  var b;
  b = gw[m(null == a ? null : a)];
  if (!b && (b = gw._, !b)) {
    throw s("PHTM.htm-learn", a);
  }
  return b.call(null, a);
}
function hw(a) {
  if (a ? a.tf : a) {
    return a.tf();
  }
  var b;
  b = hw[m(null == a ? null : a)];
  if (!b && (b = hw._, !b)) {
    throw s("PHTM.htm-depolarise", a);
  }
  return b.call(null, a);
}
function iw(a) {
  if (a ? a.wf : a) {
    return a.wf();
  }
  var b;
  b = iw[m(null == a ? null : a)];
  if (!b && (b = iw._, !b)) {
    throw s("PHTM.region-seq", a);
  }
  return b.call(null, a);
}
function jw(a) {
  if (a ? a.vf : a) {
    return a.vf();
  }
  var b;
  b = jw[m(null == a ? null : a)];
  if (!b && (b = jw._, !b)) {
    throw s("PHTM.input-seq", a);
  }
  return b.call(null, a);
}
function kw(a, b, c) {
  if (a ? a.xf : a) {
    return a.xf(0, b, c);
  }
  var d;
  d = kw[m(null == a ? null : a)];
  if (!d && (d = kw._, !d)) {
    throw s("PHTM.update-by-uuid", a);
  }
  return d.call(null, a, b, c);
}
function lw(a) {
  return hw(gw(fw(a)));
}
function mw(a, b, c) {
  if (a ? a.Ff : a) {
    return a.Ff(0, b, c);
  }
  var d;
  d = mw[m(null == a ? null : a)];
  if (!d && (d = mw._, !d)) {
    throw s("PRegion.region-activate", a);
  }
  return d.call(null, a, b, c);
}
function nw(a, b) {
  if (a ? a.Hf : a) {
    return a.Hf(0, b);
  }
  var c;
  c = nw[m(null == a ? null : a)];
  if (!c && (c = nw._, !c)) {
    throw s("PRegion.region-learn", a);
  }
  return c.call(null, a, b);
}
function ow(a, b, c) {
  if (a ? a.Gf : a) {
    return a.Gf(0, b, c);
  }
  var d;
  d = ow[m(null == a ? null : a)];
  if (!d && (d = ow._, !d)) {
    throw s("PRegion.region-depolarise", a);
  }
  return d.call(null, a, b, c);
}
function pw(a) {
  if (a ? a.se : a) {
    return a.se(a);
  }
  var b;
  b = pw[m(null == a ? null : a)];
  if (!b && (b = pw._, !b)) {
    throw s("PFeedForward.ff-topology", a);
  }
  return b.call(null, a);
}
function qw(a, b) {
  if (a ? a.re : a) {
    return a.re(a, b);
  }
  var c;
  c = qw[m(null == a ? null : a)];
  if (!c && (c = qw._, !c)) {
    throw s("PFeedForward.bits-value", a);
  }
  return c.call(null, a, b);
}
function rw(a, b) {
  if (a ? a.te : a) {
    return a.te(a, b);
  }
  var c;
  c = rw[m(null == a ? null : a)];
  if (!c && (c = rw._, !c)) {
    throw s("PFeedForward.signal-bits-value", a);
  }
  return c.call(null, a, b);
}
function sw(a, b) {
  if (a ? a.ue : a) {
    return a.ue(a, b);
  }
  var c;
  c = sw[m(null == a ? null : a)];
  if (!c && (c = sw._, !c)) {
    throw s("PFeedForward.source-of-bit", a);
  }
  return c.call(null, a, b);
}
function tw(a) {
  if (a ? a.ve : a) {
    return a.ve(a);
  }
  var b;
  b = tw[m(null == a ? null : a)];
  if (!b && (b = tw._, !b)) {
    throw s("PFeedForwardMotor.ff-motor-topology", a);
  }
  return b.call(null, a);
}
function uw(a, b) {
  if (a ? a.we : a) {
    return a.we(a, b);
  }
  var c;
  c = uw[m(null == a ? null : a)];
  if (!c && (c = uw._, !c)) {
    throw s("PFeedForwardMotor.motor-bits-value", a);
  }
  return c.call(null, a, b);
}
function vw(a, b, c) {
  if (a ? a.zf : a) {
    return a.zf(0, b, c);
  }
  var d;
  d = vw[m(null == a ? null : a)];
  if (!d && (d = vw._, !d)) {
    throw s("PLayerOfCells.layer-activate", a);
  }
  return d.call(null, a, b, c);
}
function ww(a, b) {
  if (a ? a.Cf : a) {
    return a.Cf(0, b);
  }
  var c;
  c = ww[m(null == a ? null : a)];
  if (!c && (c = ww._, !c)) {
    throw s("PLayerOfCells.layer-learn", a);
  }
  return c.call(null, a, b);
}
function xw(a, b, c) {
  if (a ? a.Af : a) {
    return a.Af();
  }
  var d;
  d = xw[m(null == a ? null : a)];
  if (!d && (d = xw._, !d)) {
    throw s("PLayerOfCells.layer-depolarise", a);
  }
  return d.call(null, a, b, c);
}
function yw(a) {
  if (a ? a.Bf : a) {
    return a.Bf();
  }
  var b;
  b = yw[m(null == a ? null : a)];
  if (!b && (b = yw._, !b)) {
    throw s("PLayerOfCells.layer-depth", a);
  }
  return b.call(null, a);
}
function zw(a) {
  if (a ? a.Vg : a) {
    return a.ma;
  }
  var b;
  b = zw[m(null == a ? null : a)];
  if (!b && (b = zw._, !b)) {
    throw s("PLayerOfCells.column-excitation", a);
  }
  return b.call(null, a);
}
function Aw(a) {
  if (a ? a.Ug : a) {
    return a.ga;
  }
  var b;
  b = Aw[m(null == a ? null : a)];
  if (!b && (b = Aw._, !b)) {
    throw s("PLayerOfCells.bursting-columns", a);
  }
  return b.call(null, a);
}
function Bw(a) {
  if (a ? a.Tg : a) {
    return a.ea;
  }
  var b;
  b = Bw[m(null == a ? null : a)];
  if (!b && (b = Bw._, !b)) {
    throw s("PLayerOfCells.active-columns", a);
  }
  return b.call(null, a);
}
function Cw(a) {
  if (a ? a.yf : a) {
    return a.yf();
  }
  var b;
  b = Cw[m(null == a ? null : a)];
  if (!b && (b = Cw._, !b)) {
    throw s("PLayerOfCells.active-cells", a);
  }
  return b.call(null, a);
}
function Dw(a) {
  if (a ? a.Wg : a) {
    return a.ka;
  }
  var b;
  b = Dw[m(null == a ? null : a)];
  if (!b && (b = Dw._, !b)) {
    throw s("PLayerOfCells.learnable-cells", a);
  }
  return b.call(null, a);
}
function Ew(a) {
  if (a ? a.Df : a) {
    return a.Df();
  }
  var b;
  b = Ew[m(null == a ? null : a)];
  if (!b && (b = Ew._, !b)) {
    throw s("PLayerOfCells.signal-cells", a);
  }
  return b.call(null, a);
}
function Fw(a) {
  if (a ? a.Ef : a) {
    return a.Ef();
  }
  var b;
  b = Fw[m(null == a ? null : a)];
  if (!b && (b = Fw._, !b)) {
    throw s("PLayerOfCells.temporal-pooling-cells", a);
  }
  return b.call(null, a);
}
function Gw(a) {
  if (a ? a.Xg : a) {
    return a.ha;
  }
  var b;
  b = Gw[m(null == a ? null : a)];
  if (!b && (b = Gw._, !b)) {
    throw s("PLayerOfCells.predictive-cells", a);
  }
  return b.call(null, a);
}
function Hw(a) {
  if (a ? a.Yg : a) {
    return a.la;
  }
  var b;
  b = Hw[m(null == a ? null : a)];
  if (!b && (b = Hw._, !b)) {
    throw s("PLayerOfCells.prior-predictive-cells", a);
  }
  return b.call(null, a);
}
function Iw(a, b) {
  if (a ? a.Ae : a) {
    return a.Ae(a, b);
  }
  var c;
  c = Iw[m(null == a ? null : a)];
  if (!c && (c = Iw._, !c)) {
    throw s("PSynapseGraph.in-synapses", a);
  }
  return c.call(null, a, b);
}
function Jw(a, b) {
  if (a ? a.Ce : a) {
    return a.Ce(a, b);
  }
  var c;
  c = Jw[m(null == a ? null : a)];
  if (!c && (c = Jw._, !c)) {
    throw s("PSynapseGraph.sources-connected-to", a);
  }
  return c.call(null, a, b);
}
function Kw(a, b) {
  if (a ? a.De : a) {
    return a.De(a, b);
  }
  var c;
  c = Kw[m(null == a ? null : a)];
  if (!c && (c = Kw._, !c)) {
    throw s("PSynapseGraph.targets-connected-from", a);
  }
  return c.call(null, a, b);
}
function Lw(a, b, c, d, e, f) {
  if (a ? a.Be : a) {
    return a.Be(a, b, c, d, e, f);
  }
  var g;
  g = Lw[m(null == a ? null : a)];
  if (!g && (g = Lw._, !g)) {
    throw s("PSynapseGraph.reinforce-in-synapses", a);
  }
  return g.call(null, a, b, c, d, e, f);
}
function Mw(a, b, c, d) {
  if (a ? a.ye : a) {
    return a.ye(a, b, c, d);
  }
  var e;
  e = Mw[m(null == a ? null : a)];
  if (!e && (e = Mw._, !e)) {
    throw s("PSynapseGraph.conj-synapses", a);
  }
  return e.call(null, a, b, c, d);
}
function Nw(a, b, c) {
  if (a ? a.ze : a) {
    return a.ze(a, b, c);
  }
  var d;
  d = Nw[m(null == a ? null : a)];
  if (!d && (d = Nw._, !d)) {
    throw s("PSynapseGraph.disj-synapses", a);
  }
  return d.call(null, a, b, c);
}
function Ow(a, b) {
  if (a ? a.If : a) {
    return a.If(0, b);
  }
  var c;
  c = Ow[m(null == a ? null : a)];
  if (!c && (c = Ow._, !c)) {
    throw s("PSegments.cell-segments", a);
  }
  return c.call(null, a, b);
}
function Pw(a, b, c) {
  if (a ? a.yc : a) {
    return a.yc(a, b, c);
  }
  var d;
  d = Pw[m(null == a ? null : a)];
  if (!d && (d = Pw._, !d)) {
    throw s("PEncodable.encode", a);
  }
  return d.call(null, a, b, c);
}
function Qw(a, b, c) {
  if (a ? a.md : a) {
    return a.md(a, b, c);
  }
  var d;
  d = Qw[m(null == a ? null : a)];
  if (!d && (d = Qw._, !d)) {
    throw s("PEncodable.decode", a);
  }
  return d.call(null, a, b, c);
}
function Rw(a) {
  if (a ? a.Jf : a) {
    return a.Jf();
  }
  var b;
  b = Rw[m(null == a ? null : a)];
  if (!b && (b = Rw._, !b)) {
    throw s("PSensoryInput.input-step", a);
  }
  return b.call(null, a);
}
function Sw(a) {
  if (a ? a.Zg : a) {
    return a.value;
  }
  var b;
  b = Sw[m(null == a ? null : a)];
  if (!b && (b = Sw._, !b)) {
    throw s("PSensoryInput.domain-value", a);
  }
  return b.call(null, a);
}
function Tw(a) {
  if (a ? a.Ld : a) {
    return a.Ld(a);
  }
  var b;
  b = Tw[m(null == a ? null : a)];
  if (!b && (b = Tw._, !b)) {
    throw s("PResettable.reset", a);
  }
  return b.call(null, a);
}
function Uw(a) {
  if (a ? a.Md : a) {
    return a.Md(a);
  }
  var b;
  b = Uw[m(null == a ? null : a)];
  if (!b && (b = Uw._, !b)) {
    throw s("PTemporal.timestep", a);
  }
  return b.call(null, a);
}
function Vw(a) {
  if (a ? a.xe : a) {
    return a.xe(a);
  }
  var b;
  b = Vw[m(null == a ? null : a)];
  if (!b && (b = Vw._, !b)) {
    throw s("PParameterised.params", a);
  }
  return b.call(null, a);
}
function Ww(a) {
  if (a ? a.Sb : a) {
    return a.Sb(a);
  }
  var b;
  b = Ww[m(null == a ? null : a)];
  if (!b && (b = Ww._, !b)) {
    throw s("PTopological.topology", a);
  }
  return b.call(null, a);
}
function Xw(a) {
  if (a ? a.Ge : a) {
    return a.Ge(a);
  }
  var b;
  b = Xw[m(null == a ? null : a)];
  if (!b && (b = Xw._, !b)) {
    throw s("PTopology.dimensions", a);
  }
  return b.call(null, a);
}
function Yw(a, b) {
  if (a ? a.Fe : a) {
    return a.Fe(a, b);
  }
  var c;
  c = Yw[m(null == a ? null : a)];
  if (!c && (c = Yw._, !c)) {
    throw s("PTopology.coordinates-of-index", a);
  }
  return c.call(null, a, b);
}
function Zw(a, b) {
  if (a ? a.He : a) {
    return a.He(a, b);
  }
  var c;
  c = Zw[m(null == a ? null : a)];
  if (!c && (c = Zw._, !c)) {
    throw s("PTopology.index-of-coordinates", a);
  }
  return c.call(null, a, b);
}
function $w(a, b, c, d) {
  if (a ? a.Ie : a) {
    return a.Ie(a, b, c, d);
  }
  var e;
  e = $w[m(null == a ? null : a)];
  if (!e && (e = $w._, !e)) {
    throw s("PTopology.neighbours*", a);
  }
  return e.call(null, a, b, c, d);
}
function ax(a, b, c) {
  if (a ? a.Ee : a) {
    return a.Ee(a, b, c);
  }
  var d;
  d = ax[m(null == a ? null : a)];
  if (!d && (d = ax._, !d)) {
    throw s("PTopology.coord-distance", a);
  }
  return d.call(null, a, b, c);
}
function bx(a) {
  return S.h(Wg, Xw(a));
}
function cx(a) {
  return Xw(Ww(a));
}
function dx(a) {
  return bx(Ww(a));
}
var ex = function() {
  function a(a, b, e) {
    return $w(a, b, e, 0);
  }
  var b = null, b = function(b, d, e, f) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, d, e);
      case 4:
        return $w(b, d, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.j = a;
  b.p = function(a, b, e, f) {
    return $w(a, b, e, f);
  };
  return b;
}(), fx = function() {
  function a(a, b, c, g) {
    return qi.h(fi.h(Zw, a), $w(a, Yw(a, b), c, g));
  }
  function b(a, b, f) {
    return c.p(a, b, f, 0);
  }
  var c = null, c = function(c, e, f, g) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, f);
      case 4:
        return a.call(this, c, e, f, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.j = b;
  c.p = a;
  return c;
}();
Math.seedrandom = null;
(function(a, b, c, d, e, f) {
  function g(a) {
    var b, c = a.length, e = this, f = 0, g = e.H = e.pf = 0, h = e.Je = [];
    for (c || (a = [c++]);f < d;) {
      h[f] = f++;
    }
    for (f = 0;f < d;f++) {
      h[f] = h[g = y & g + a[f % c] + (b = h[f])], h[g] = b;
    }
    (e.nf = function(a) {
      for (var b, c = 0, f = e.H, g = e.pf, h = e.Je;a--;) {
        b = h[f = y & f + 1], c = c * d + h[y & (h[f] = h[g = y & g + b]) + (h[g] = b)];
      }
      e.H = f;
      e.pf = g;
      return c;
    })(d);
  }
  function h(a, b) {
    var c = [], d = (typeof a)[0], e;
    if (b && "o" == d) {
      for (e in a) {
        if (a.hasOwnProperty(e)) {
          try {
            c.push(h(a[e], b - 1));
          } catch (f) {
          }
        }
      }
    }
    return c.length ? c : "s" == d ? a : a + "\x00";
  }
  function l(a, b) {
    for (var c = a + "", d, e = 0;e < c.length;) {
      b[y & e] = y & (d ^= 19 * b[y & e]) + c.charCodeAt(e++);
    }
    return r(b);
  }
  function p() {
    var c;
    try {
      return a.crypto.getRandomValues(c = new Uint8Array(d)), r(c);
    } catch (e) {
      return[+new Date, a.document, a.history, a.navigator, a.screen, r(b)];
    }
  }
  function r(a) {
    return String.fromCharCode.apply(0, a);
  }
  var t = c.pow(d, e), u = c.pow(2, f), A = 2 * u, y = d - 1;
  c.seedrandom = function(a, f) {
    var y = [], L = l(h(f ? [a, r(b)] : 0 in arguments ? a : p(), 3), y), I = new g(y);
    l(r(I.Je), b);
    c.random = function() {
      for (var a = I.nf(e), b = t, c = 0;a < u;) {
        a = (a + c) * d, b *= d, c = I.nf(1);
      }
      for (;a >= A;) {
        a /= 2, b /= 2, c >>>= 1;
      }
      return(a + c) / b;
    };
    return L;
  };
  l(c.random(), b);
})(this, [], Math, 256, 6, 52);
function gx(a) {
  if (a ? a.Se : a) {
    return a.Se();
  }
  var b;
  b = gx[m(null == a ? null : a)];
  if (!b && (b = gx._, !b)) {
    throw s("IRandom.-next-double", a);
  }
  return b.call(null, a);
}
var hx = function() {
  function a(a, b) {
    if (a ? a.Ue : a) {
      return a.Ue(0, b);
    }
    var c;
    c = hx[m(null == a ? null : a)];
    if (!c && (c = hx._, !c)) {
      throw s("IRandom.-next-int", a);
    }
    return c.call(null, a, b);
  }
  function b(a) {
    if (a ? a.Te : a) {
      return a.Te();
    }
    var b;
    b = hx[m(null == a ? null : a)];
    if (!b && (b = hx._, !b)) {
      throw s("IRandom.-next-int", a);
    }
    return b.call(null, a);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.g = b;
  c.h = a;
  return c;
}();
function ix(a, b, c) {
  return b + (a.q ? a.q() : a.call(null)) * (c - b);
}
function jx(a, b, c, d) {
  this.seed = a;
  this.Lb = b;
  this.m = c;
  this.l = d;
  this.t = 2229667594;
  this.G = 8192;
  2 < arguments.length ? (this.m = c, this.l = d) : this.l = this.m = null;
}
k = jx.prototype;
k.N = function(a, b) {
  return Md.j(this, b, null);
};
k.L = function(a, b, c) {
  switch(b instanceof X ? b.ca : null) {
    case "random-double":
      return this.Lb;
    case "seed":
      return this.seed;
    default:
      return Q.j(this.l, b, c);
  }
};
k.P = function(a, b, c) {
  return zl(b, function() {
    return function(a) {
      return zl(b, Fl, "", " ", "", c, a);
    };
  }(this), "#cemerick.pprng.SeededRandom{", ", ", "}", c, Rh.h(new V(null, 2, 5, W, [new V(null, 2, 5, W, [Zq, this.seed], null), new V(null, 2, 5, W, [xr, this.Lb], null)], null), this.l));
};
k.I = function() {
  return this.m;
};
k.V = function() {
  return 2 + N(this.l);
};
k.R = function() {
  var a = this.w;
  return null != a ? a : this.w = a = th(this);
};
k.O = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && Bj(this, b) : b) ? !0 : !1;
};
k.Ra = function(a, b) {
  return Lg(new Xk(null, new n(null, 2, [Zq, null, xr, null], null), null), b) ? tg.h(ag(Oi.h(Jj, this), this.m), b) : new jx(this.seed, this.Lb, this.m, Zh(tg.h(this.l, b)), null);
};
k.Ia = function(a, b, c) {
  return q(Z.h ? Z.h(Zq, b) : Z.call(null, Zq, b)) ? new jx(c, this.Lb, this.m, this.l, null) : q(Z.h ? Z.h(xr, b) : Z.call(null, xr, b)) ? new jx(this.seed, c, this.m, this.l, null) : new jx(this.seed, this.Lb, this.m, R.j(this.l, b, c), null);
};
k.S = function() {
  return B(Rh.h(new V(null, 2, 5, W, [new V(null, 2, 5, W, [Zq, this.seed], null), new V(null, 2, 5, W, [xr, this.Lb], null)], null), this.l));
};
k.J = function(a, b) {
  return new jx(this.seed, this.Lb, b, this.l, this.w);
};
k.U = function(a, b) {
  return Eg(b) ? Pd(this, w.h(b, 0), w.h(b, 1)) : od.j(Ad, this, b);
};
k.Se = function() {
  return this.Lb.q ? this.Lb.q() : this.Lb.call(null);
};
k.Te = function() {
  return bh(ix(this.Lb, -2147483648, 2147483647));
};
k.Ue = function(a, b) {
  return bh(ix(this.Lb, 0, b));
};
var kx = function() {
  function a(a, b) {
    return hx.h(a, b);
  }
  function b(a) {
    return hx.g(a);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.g = b;
  c.h = a;
  return c;
}();
var lx = function() {
  function a(a, b) {
    var f = Math.pow.h ? Math.pow.h(10, b) : Math.pow.call(null, 10, b);
    return c.g(a * f) / f;
  }
  function b(a) {
    return Math.round.g ? Math.round.g(a) : Math.round.call(null, a);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.g = b;
  c.h = a;
  return c;
}(), mx = function() {
  function a(a) {
    Math.seedrandom.g ? Math.seedrandom.g(a) : Math.seedrandom.call(null, a);
    Math.seedrandom.g ? Math.seedrandom.g(a) : Math.seedrandom.call(null, a);
    return new jx(a, Math.random);
  }
  function b() {
    return c.g((new Date).getTime());
  }
  var c = null, c = function(c) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a.call(this, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.q = b;
  c.g = a;
  return c;
}().q(), nx = function() {
  function a(a, b) {
    if (!(a < b)) {
      throw Error("Assert failed: " + v.g(ni.k(H([zh(new xf(null, "\x3c", "\x3c", 993667236, null), new xf(null, "lower", "lower", -1534114948, null), new xf(null, "upper", "upper", 1886775433, null))], 0))));
    }
    return a + gx(mx) * (b - a);
  }
  function b() {
    return c.h(0, 1);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.q = b;
  c.h = a;
  return c;
}(), ox = function() {
  function a(a, b) {
    return a + kx.h(mx, b - a);
  }
  function b(a) {
    return kx.h(mx, a);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.g = b;
  c.h = a;
  return c;
}();
function px(a) {
  return O.h(a, ox.g(N(a)));
}
function qx(a, b) {
  var c;
  c = nj(ri.h(a, b));
  c = Ie(c);
  for (var d = a, e = si.h(a, b);;) {
    if (B(e)) {
      var f = ox.g(d);
      c = f < a ? Vh.j(c, f, D(e)) : c;
      d += 1;
      e = E(e);
    } else {
      return Ke(c);
    }
  }
}
function rx(a, b) {
  return vi.h(a, function() {
    return px(b);
  });
}
function sx(a, b) {
  return od.j(function(b, d) {
    return q(a.g ? a.g(d) : a.call(null, d)) ? b + 1 : b;
  }, 0, b);
}
var tx = function() {
  function a(a, b, c) {
    return Th(od.j(function(a, b) {
      var c = O.j(b, 0, null), d = O.j(b, 1, null);
      return Vh.j(a, c, Ke(d));
    }, Ie(Jj), Th(od.j(function(b, e) {
      var l = O.j(e, 0, null), p = O.j(e, 1, null), r = a.h ? a.h(l, p) : a.call(null, l, p), t = Q.j(b, r, Ie(c));
      return Vh.j(b, r, Vh.j(t, l, p));
    }, Ie(Jj), b))));
  }
  function b(a, b) {
    return c.j(a, b, Jj);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.h = b;
  c.j = a;
  return c;
}();
function ux(a, b, c) {
  return zg(b) ? a : Th(od.j(function(a, b) {
    return Vh.j(a, b, function() {
      var f = Q.h(a, b);
      return c.g ? c.g(f) : c.call(null, f);
    }());
  }, Ie(a), b));
}
function vx(a, b) {
  return Oi.h(function() {
    var a = null == b ? null : yd(b);
    return q(a) ? a : Jj;
  }(), Pi.h(function(b) {
    var d = O.j(b, 0, null);
    b = O.j(b, 1, null);
    return new V(null, 2, 5, W, [d, a.g ? a.g(b) : a.call(null, b)], null);
  }, b));
}
function wx(a, b) {
  if (0 >= a) {
    return pg;
  }
  if (1 === a) {
    return new V(null, 1, 5, W, [uh(S.j(cl, vh, B(b)))], null);
  }
  for (var c = B(b), d = Qk(function() {
    return function(a, c) {
      return wf(new V(null, 2, 5, W, [b.g ? b.g(a) : b.call(null, a), a], null), new V(null, 2, 5, W, [b.g ? b.g(c) : b.call(null, c), c], null));
    };
  }(c)), e = -1;;) {
    if (zg(c)) {
      return Sk(d);
    }
    var f = D(c), g = O.j(f, 0, null), h = O.j(f, 1, null);
    zg(d) ? (c = G(c), d = R.j(d, g, h), g = h) : N(d) < a ? (c = G(c), d = R.j(d, g, h), g = function() {
      var a = e, b = h;
      return a < b ? a : b;
    }()) : h > e ? (g = R.j(tg.h(d, D(Sk(d))), g, h), c = G(c), d = g, g = D(Hj(g))) : (c = G(c), g = e);
    e = g;
  }
}
;function xx(a, b, c, d, e, f, g) {
  this.zb = a;
  this.Ab = b;
  this.fb = c;
  this.Ib = d;
  this.Nb = e;
  this.m = f;
  this.l = g;
  this.t = 2229667594;
  this.G = 8192;
  5 < arguments.length ? (this.m = f, this.l = g) : this.l = this.m = null;
}
k = xx.prototype;
k.N = function(a, b) {
  return Md.j(this, b, null);
};
k.L = function(a, b, c) {
  switch(b instanceof X ? b.ca : null) {
    case "cull-zeros?":
      return this.Nb;
    case "max-syns":
      return this.Ib;
    case "pcon":
      return this.fb;
    case "targets-by-source":
      return this.Ab;
    case "syns-by-target":
      return this.zb;
    default:
      return Q.j(this.l, b, c);
  }
};
k.P = function(a, b, c) {
  return zl(b, function() {
    return function(a) {
      return zl(b, Fl, "", " ", "", c, a);
    };
  }(this), "#org.nfrac.comportex.synapses.SynapseGraph{", ", ", "}", c, Rh.h(new V(null, 5, 5, W, [new V(null, 2, 5, W, [Ns, this.zb], null), new V(null, 2, 5, W, [Qr, this.Ab], null), new V(null, 2, 5, W, [tv, this.fb], null), new V(null, 2, 5, W, [im, this.Ib], null), new V(null, 2, 5, W, [Jv, this.Nb], null)], null), this.l));
};
k.I = function() {
  return this.m;
};
k.V = function() {
  return 5 + N(this.l);
};
k.R = function() {
  var a = this.w;
  return null != a ? a : this.w = a = th(this);
};
k.O = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && Bj(this, b) : b) ? !0 : !1;
};
k.Ra = function(a, b) {
  return Lg(new Xk(null, new n(null, 5, [im, null, Qr, null, Ns, null, tv, null, Jv, null], null), null), b) ? tg.h(ag(Oi.h(Jj, this), this.m), b) : new xx(this.zb, this.Ab, this.fb, this.Ib, this.Nb, this.m, Zh(tg.h(this.l, b)), null);
};
k.Ia = function(a, b, c) {
  return q(Z.h ? Z.h(Ns, b) : Z.call(null, Ns, b)) ? new xx(c, this.Ab, this.fb, this.Ib, this.Nb, this.m, this.l, null) : q(Z.h ? Z.h(Qr, b) : Z.call(null, Qr, b)) ? new xx(this.zb, c, this.fb, this.Ib, this.Nb, this.m, this.l, null) : q(Z.h ? Z.h(tv, b) : Z.call(null, tv, b)) ? new xx(this.zb, this.Ab, c, this.Ib, this.Nb, this.m, this.l, null) : q(Z.h ? Z.h(im, b) : Z.call(null, im, b)) ? new xx(this.zb, this.Ab, this.fb, c, this.Nb, this.m, this.l, null) : q(Z.h ? Z.h(Jv, b) : Z.call(null, Jv, 
  b)) ? new xx(this.zb, this.Ab, this.fb, this.Ib, c, this.m, this.l, null) : new xx(this.zb, this.Ab, this.fb, this.Ib, this.Nb, this.m, R.j(this.l, b, c), null);
};
k.S = function() {
  return B(Rh.h(new V(null, 5, 5, W, [new V(null, 2, 5, W, [Ns, this.zb], null), new V(null, 2, 5, W, [Qr, this.Ab], null), new V(null, 2, 5, W, [tv, this.fb], null), new V(null, 2, 5, W, [im, this.Ib], null), new V(null, 2, 5, W, [Jv, this.Nb], null)], null), this.l));
};
k.J = function(a, b) {
  return new xx(this.zb, this.Ab, this.fb, this.Ib, this.Nb, b, this.l, this.w);
};
k.U = function(a, b) {
  return Eg(b) ? Pd(this, w.h(b, 0), w.h(b, 1)) : od.j(Ad, this, b);
};
k.Ae = function(a, b) {
  return this.zb.g ? this.zb.g(b) : this.zb.call(null, b);
};
k.Ce = function(a, b) {
  var c = this;
  return hi.h(function() {
    return function(a) {
      var b = O.j(a, 0, null);
      return O.j(a, 1, null) >= c.fb ? b : null;
    };
  }(this), Iw(this, b));
};
k.De = function(a, b) {
  return this.Ab.g ? this.Ab.g(b) : this.Ab.call(null, b);
};
k.Be = function(a, b, c, d, e, f) {
  var g = this;
  a = Iw(this, b);
  for (var h = B(a), l = Lf, p = Lf, r = Lf, t = Lf, u = Lf;;) {
    if (B(h)) {
      var A = D(h), y = O.j(A, 0, null), C = O.j(A, 1, null);
      q(function() {
        var a = y;
        return c.g ? c.g(a) : c.call(null, a);
      }()) ? (h = G(h), A = p, p = r, r = A) : q(function() {
        var a = y;
        return d.g ? d.g(a) : d.call(null, a);
      }()) ? (h = G(h), l = 1 > C ? qg.h(l, y) : l, p = C < g.fb && C >= g.fb - e ? qg.h(p, y) : p) : (h = G(h), r = 0 < C ? qg.h(r, y) : r, t = C >= g.fb && C < g.fb + f ? qg.h(t, y) : t, u = q(function() {
        var a = 0 >= C;
        return a ? g.Nb : a;
      }()) ? qg.h(u, y) : u);
    } else {
      return Ui.M(Ui.M(Ui.j(this, new V(null, 2, 5, W, [Ns, b], null), function(a, b, c, d, g, h, l, r) {
        return function(p) {
          return ux(ux(B(h) ? S.j(tg, p, h) : p, b, function() {
            return function(a) {
              a += e;
              return 1 > a ? a : 1;
            };
          }(a, b, c, d, g, h, l, r)), d, function() {
            return function(a) {
              a -= f;
              return 0 < a ? a : 0;
            };
          }(a, b, c, d, g, h, l, r));
        };
      }(h, l, p, r, t, u, a, this)), new V(null, 1, 5, W, [Qr], null), ux, p, function() {
        return function(a) {
          return qg.h(a, b);
        };
      }(h, l, p, r, t, u, a, this)), new V(null, 1, 5, W, [Qr], null), ux, t, function() {
        return function(a) {
          return yg.h(a, b);
        };
      }(h, l, p, r, t, u, a, this));
    }
  }
};
k.ye = function(a, b, c, d) {
  var e = Iw(this, b);
  a = Uk.k(H([e, bl(c, ui.g(d))], 0));
  var f = Ti(this, new V(null, 2, 5, W, [Ns, b], null), a);
  c = d >= this.fb ? Ui.M(f, new V(null, 1, 5, W, [Qr], null), ux, c, function() {
    return function(a) {
      return qg.h(a, b);
    };
  }(f, e, a, this)) : f;
  return N(a) > this.Ib ? Nw(c, b, ri.h(N(a) - this.Ib, Sk(Rg.h(vh, a)))) : c;
};
k.ze = function(a, b, c) {
  return Ui.M(Ui.j(this, new V(null, 2, 5, W, [Ns, b], null), function() {
    return function(a) {
      return S.j(tg, a, c);
    };
  }(this)), new V(null, 1, 5, W, [Qr], null), ux, c, function() {
    return function(a) {
      return yg.h(a, b);
    };
  }(this));
};
function yx(a) {
  return new xx(Ns.g(a), Qr.g(a), tv.g(a), im.g(a), Jv.g(a), null, tg.k(a, Ns, H([Qr, tv, im, Jv], 0)));
}
function zx(a, b, c, d, e) {
  b = Sg(function(a, b, d) {
    d = hi.h(function(a) {
      var b = O.j(a, 0, null);
      return O.j(a, 1, null) >= c ? b : null;
    }, d);
    return ux(a, d, function() {
      return function(a) {
        return qg.h(a, b);
      };
    }(d));
  }, nj(ui.h(b, Zk)), a);
  return yx(new n(null, 5, [Ns, a, Qr, b, tv, c, im, d, Jv, e], null));
}
function Ax(a, b) {
  return Th(od.j(function(b, d) {
    return od.j(function(a, b) {
      return Vh.j(a, b, Q.j(a, b, 0) + 1);
    }, b, Kw(a, d));
  }, Ie(Jj), b));
}
function Bx(a, b) {
  var c = O.j(b, 0, null), d = O.j(b, 1, null);
  return c * a + d;
}
function Cx(a, b) {
  return new V(null, 2, 5, W, [ch(b, a), dh(b, a)], null);
}
function Dx(a, b, c) {
  var d = O.j(c, 0, null), e = O.j(c, 1, null);
  c = O.j(c, 2, null);
  return d * a * b + e * b + c;
}
function Ex(a, b, c) {
  var d = ch(c, a * b);
  a = dh(c, a * b);
  return new V(null, 3, 5, W, [d, ch(a, b), dh(a, b)], null);
}
function Fx(a, b, c, d, e, f, g, h, l) {
  this.kb = a;
  this.depth = b;
  this.vb = c;
  this.Wa = d;
  this.jb = e;
  this.Fa = f;
  this.ub = g;
  this.m = h;
  this.l = l;
  this.t = 2229667594;
  this.G = 8192;
  7 < arguments.length ? (this.m = h, this.l = l) : this.l = this.m = null;
}
k = Fx.prototype;
k.N = function(a, b) {
  return Md.j(this, b, null);
};
k.L = function(a, b, c) {
  switch(b instanceof X ? b.ca : null) {
    case "i-\x3etgt":
      return this.ub;
    case "tgt-\x3ei":
      return this.Fa;
    case "i-\x3esrc":
      return this.jb;
    case "src-\x3ei":
      return this.Wa;
    case "max-segs":
      return this.vb;
    case "depth":
      return this.depth;
    case "raw-sg":
      return this.kb;
    default:
      return Q.j(this.l, b, c);
  }
};
k.P = function(a, b, c) {
  return zl(b, function() {
    return function(a) {
      return zl(b, Fl, "", " ", "", c, a);
    };
  }(this), "#org.nfrac.comportex.synapses.SynapseGraphBySegments{", ", ", "}", c, Rh.h(new V(null, 7, 5, W, [new V(null, 2, 5, W, [Uv, this.kb], null), new V(null, 2, 5, W, [Ts, this.depth], null), new V(null, 2, 5, W, [vm, this.vb], null), new V(null, 2, 5, W, [Co, this.Wa], null), new V(null, 2, 5, W, [Wo, this.jb], null), new V(null, 2, 5, W, [mv, this.Fa], null), new V(null, 2, 5, W, [Lr, this.ub], null)], null), this.l));
};
k.I = function() {
  return this.m;
};
k.V = function() {
  return 7 + N(this.l);
};
k.If = function(a, b) {
  var c = O.j(b, 0, null), d = O.j(b, 1, null);
  return Pi.h(function(a, b, c, d) {
    return function(a) {
      return Iw(d, new V(null, 3, 5, W, [b, c, a], null));
    };
  }(b, c, d, this), ql.g(this.vb));
};
k.R = function() {
  var a = this.w;
  return null != a ? a : this.w = a = th(this);
};
k.O = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && Bj(this, b) : b) ? !0 : !1;
};
k.Ra = function(a, b) {
  return Lg(new Xk(null, new n(null, 7, [vm, null, Co, null, Wo, null, Lr, null, Ts, null, mv, null, Uv, null], null), null), b) ? tg.h(ag(Oi.h(Jj, this), this.m), b) : new Fx(this.kb, this.depth, this.vb, this.Wa, this.jb, this.Fa, this.ub, this.m, Zh(tg.h(this.l, b)), null);
};
k.Ia = function(a, b, c) {
  return q(Z.h ? Z.h(Uv, b) : Z.call(null, Uv, b)) ? new Fx(c, this.depth, this.vb, this.Wa, this.jb, this.Fa, this.ub, this.m, this.l, null) : q(Z.h ? Z.h(Ts, b) : Z.call(null, Ts, b)) ? new Fx(this.kb, c, this.vb, this.Wa, this.jb, this.Fa, this.ub, this.m, this.l, null) : q(Z.h ? Z.h(vm, b) : Z.call(null, vm, b)) ? new Fx(this.kb, this.depth, c, this.Wa, this.jb, this.Fa, this.ub, this.m, this.l, null) : q(Z.h ? Z.h(Co, b) : Z.call(null, Co, b)) ? new Fx(this.kb, this.depth, this.vb, c, this.jb, 
  this.Fa, this.ub, this.m, this.l, null) : q(Z.h ? Z.h(Wo, b) : Z.call(null, Wo, b)) ? new Fx(this.kb, this.depth, this.vb, this.Wa, c, this.Fa, this.ub, this.m, this.l, null) : q(Z.h ? Z.h(mv, b) : Z.call(null, mv, b)) ? new Fx(this.kb, this.depth, this.vb, this.Wa, this.jb, c, this.ub, this.m, this.l, null) : q(Z.h ? Z.h(Lr, b) : Z.call(null, Lr, b)) ? new Fx(this.kb, this.depth, this.vb, this.Wa, this.jb, this.Fa, c, this.m, this.l, null) : new Fx(this.kb, this.depth, this.vb, this.Wa, this.jb, 
  this.Fa, this.ub, this.m, R.j(this.l, b, c), null);
};
k.S = function() {
  return B(Rh.h(new V(null, 7, 5, W, [new V(null, 2, 5, W, [Uv, this.kb], null), new V(null, 2, 5, W, [Ts, this.depth], null), new V(null, 2, 5, W, [vm, this.vb], null), new V(null, 2, 5, W, [Co, this.Wa], null), new V(null, 2, 5, W, [Wo, this.jb], null), new V(null, 2, 5, W, [mv, this.Fa], null), new V(null, 2, 5, W, [Lr, this.ub], null)], null), this.l));
};
k.J = function(a, b) {
  return new Fx(this.kb, this.depth, this.vb, this.Wa, this.jb, this.Fa, this.ub, b, this.l, this.w);
};
k.U = function(a, b) {
  return Eg(b) ? Pd(this, w.h(b, 0), w.h(b, 1)) : od.j(Ad, this, b);
};
k.Ae = function(a, b) {
  var c = Iw(this.kb, this.Fa.g ? this.Fa.g(b) : this.Fa.call(null, b));
  return bl(qi.h(this.jb, Sk(c)), Hj(c));
};
k.Ce = function(a, b) {
  return qi.h(this.Wa, Jw(this.kb, this.Fa.g ? this.Fa.g(b) : this.Fa.call(null, b)));
};
k.De = function(a, b) {
  return qi.h(this.ub, Kw(this.kb, this.Wa.g ? this.Wa.g(b) : this.Wa.call(null, b)));
};
k.Be = function(a, b, c, d, e, f) {
  return Ui.k(this, new V(null, 1, 5, W, [Uv], null), Lw, this.Fa.g ? this.Fa.g(b) : this.Fa.call(null, b), ei.h(c, this.jb), ei.h(d, this.jb), H([e, f], 0));
};
k.ye = function(a, b, c, d) {
  return Ui.Qa(this, new V(null, 1, 5, W, [Uv], null), Mw, this.Fa.g ? this.Fa.g(b) : this.Fa.call(null, b), qi.h(this.Wa, c), d);
};
k.ze = function(a, b, c) {
  return Ui.M(this, new V(null, 1, 5, W, [Uv], null), Nw, this.Fa.g ? this.Fa.g(b) : this.Fa.call(null, b), qi.h(this.Wa, c));
};
function Gx(a, b) {
  var c = Uv.g(a), d = mv.g(a), e = O.j(b, 0, null), f = O.j(b, 1, null);
  return Pi.h(function(a, b, c, d, e) {
    return function(c) {
      var f = Iw;
      c = new V(null, 3, 5, W, [d, e, c], null);
      c = b.g ? b.g(c) : b.call(null, c);
      return f(a, c);
    };
  }(c, d, b, e, f), ql.g(vm.g(a)));
}
;function Hx(a) {
  return S.h(Zg, a) - S.h($g, a);
}
function Ix(a, b, c) {
  var d = Jw(a, c), e = qi.h(fi.h(Yw, b), d);
  if (B(e)) {
    if ("number" === typeof D(e)) {
      return Hx(e);
    }
    var f = N(Xw(b));
    return S.h(Zg, function() {
      return function(a, b, c) {
        return function r(d) {
          return new Dh(null, function(a, b, c) {
            return function() {
              for (;;) {
                var e = B(d);
                if (e) {
                  var f = e;
                  if (U(f)) {
                    var g = x(f), h = N(g), l = Hh(h);
                    return function() {
                      for (var d = 0;;) {
                        if (d < h) {
                          var r = w.h(g, d);
                          Lh(l, Hx(qi.h(function(a, b) {
                            return function(a) {
                              return O.h(a, b);
                            };
                          }(d, r, g, h, l, f, e, a, b, c), c)));
                          d += 1;
                        } else {
                          return!0;
                        }
                      }
                    }() ? Kh(Mh(l), r(z(f))) : Kh(Mh(l), null);
                  }
                  var P = D(f);
                  return Zf(Hx(qi.h(function(a) {
                    return function(b) {
                      return O.h(b, a);
                    };
                  }(P, f, e, a, b, c), c)), r(E(f)));
                }
                return null;
              }
            };
          }(a, b, c), null, null);
        };
      }(f, d, e)(ql.g(f));
    }());
  }
  return 0;
}
function Jx(a, b, c) {
  var d = S.h(Zg, Xw(b)), e = S.h(Zg, Xw(c));
  a = qi.h(fi.j(Ix, a, c), ql.g(bx(b)));
  a = S.h(Vg, a) / N(a);
  d = ch(a / e * d, 2);
  d = lx.g(.5 * d);
  return 1 < d ? d : 1;
}
function Kx(a, b, c) {
  b = lx.g(b * c);
  return wx(1 > b ? 1 : b, a);
}
function Lx(a) {
  return Th(Sg(function(a, c, d) {
    return q(d) ? Vh.j(a, c, d) : a;
  }, Ie(Jj), a));
}
function Mx(a, b, c, d) {
  var e = Sk(Rg.j(vh, Xg, a)), f = bx(b);
  a = Pi.h(a, ql.g(f));
  for (a = Ie(a);;) {
    if (f = D(e), q(f)) {
      var g = f, f = g, f = a.g ? a.g(f) : a.call(null, f);
      if (q(f)) {
        e = G(e);
        a: {
          var h = a;
          a = f;
          for (var f = b, l = c, p = d, g = Yw(f, g), r = ex.p(f, g, l, 0);;) {
            var t = D(r);
            if (q(t)) {
              var u = t, t = Zw(f, u), A;
              A = t;
              A = h.g ? h.g(A) : h.call(null, A);
              q(A) ? (u = ax(f, g, u) - p, A <= a * (1 - (0 > u ? 0 : u) / (l - p)) ? (r = G(r), h = Vh.j(h, t, null)) : r = G(r)) : r = G(r);
            } else {
              a = h;
              break a;
            }
          }
          a = void 0;
        }
      } else {
        e = G(e);
      }
    } else {
      return Sk(Lx(Ke(a)));
    }
  }
}
;function Nx(a) {
  return 0 > a ? -a : a;
}
function Ox(a, b, c) {
  this.size = a;
  this.m = b;
  this.l = c;
  this.t = 2229667594;
  this.G = 8192;
  1 < arguments.length ? (this.m = b, this.l = c) : this.l = this.m = null;
}
k = Ox.prototype;
k.N = function(a, b) {
  return Md.j(this, b, null);
};
k.L = function(a, b, c) {
  switch(b instanceof X ? b.ca : null) {
    case "size":
      return this.size;
    default:
      return Q.j(this.l, b, c);
  }
};
k.P = function(a, b, c) {
  return zl(b, function() {
    return function(a) {
      return zl(b, Fl, "", " ", "", c, a);
    };
  }(this), "#org.nfrac.comportex.topology.OneDTopology{", ", ", "}", c, Rh.h(new V(null, 1, 5, W, [new V(null, 2, 5, W, [br, this.size], null)], null), this.l));
};
k.I = function() {
  return this.m;
};
k.V = function() {
  return 1 + N(this.l);
};
k.R = function() {
  var a = this.w;
  return null != a ? a : this.w = a = th(this);
};
k.O = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && Bj(this, b) : b) ? !0 : !1;
};
k.Ge = function() {
  return new V(null, 1, 5, W, [this.size], null);
};
k.Fe = function(a, b) {
  return b;
};
k.He = function(a, b) {
  return b;
};
k.Ie = function(a, b, c, d) {
  var e = this;
  return Rh.h(ql.h(function() {
    var a = b + d + 1, c = e.size;
    return a < c ? a : c;
  }(), function() {
    var a = b + c + 1, d = e.size;
    return a < d ? a : d;
  }()), ql.h(function() {
    var a = b - c;
    return 0 < a ? a : 0;
  }(), function() {
    var a = b - d;
    return 0 < a ? a : 0;
  }()));
};
k.Ee = function(a, b, c) {
  return Nx(c - b);
};
k.Ra = function(a, b) {
  return Lg(new Xk(null, new n(null, 1, [br, null], null), null), b) ? tg.h(ag(Oi.h(Jj, this), this.m), b) : new Ox(this.size, this.m, Zh(tg.h(this.l, b)), null);
};
k.Ia = function(a, b, c) {
  return q(Z.h ? Z.h(br, b) : Z.call(null, br, b)) ? new Ox(c, this.m, this.l, null) : new Ox(this.size, this.m, R.j(this.l, b, c), null);
};
k.S = function() {
  return B(Rh.h(new V(null, 1, 5, W, [new V(null, 2, 5, W, [br, this.size], null)], null), this.l));
};
k.J = function(a, b) {
  return new Ox(this.size, b, this.l, this.w);
};
k.U = function(a, b) {
  return Eg(b) ? Pd(this, w.h(b, 0), w.h(b, 1)) : od.j(Ad, this, b);
};
function Px(a, b, c, d) {
  this.width = a;
  this.height = b;
  this.m = c;
  this.l = d;
  this.t = 2229667594;
  this.G = 8192;
  2 < arguments.length ? (this.m = c, this.l = d) : this.l = this.m = null;
}
k = Px.prototype;
k.N = function(a, b) {
  return Md.j(this, b, null);
};
k.L = function(a, b, c) {
  switch(b instanceof X ? b.ca : null) {
    case "height":
      return this.height;
    case "width":
      return this.width;
    default:
      return Q.j(this.l, b, c);
  }
};
k.P = function(a, b, c) {
  return zl(b, function() {
    return function(a) {
      return zl(b, Fl, "", " ", "", c, a);
    };
  }(this), "#org.nfrac.comportex.topology.TwoDTopology{", ", ", "}", c, Rh.h(new V(null, 2, 5, W, [new V(null, 2, 5, W, [wp, this.width], null), new V(null, 2, 5, W, [Nv, this.height], null)], null), this.l));
};
k.I = function() {
  return this.m;
};
k.V = function() {
  return 2 + N(this.l);
};
k.R = function() {
  var a = this.w;
  return null != a ? a : this.w = a = th(this);
};
k.O = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && Bj(this, b) : b) ? !0 : !1;
};
k.Ge = function() {
  return new V(null, 2, 5, W, [this.width, this.height], null);
};
k.Fe = function(a, b) {
  return new V(null, 2, 5, W, [ch(b, this.height), dh(b, this.height)], null);
};
k.He = function(a, b) {
  var c = O.j(b, 0, null), d = O.j(b, 1, null);
  return c * this.height + d;
};
k.Ie = function(a, b, c, d) {
  var e = this, f = O.j(b, 0, null);
  a = O.j(b, 1, null);
  return function(a, b, f, p) {
    return function t(u) {
      return new Dh(null, function(a, b, f, g) {
        return function() {
          for (var h = u;;) {
            var l = B(h);
            if (l) {
              var p = l, P = D(p);
              if (l = B(function(a, b, c, e, f, g, h, l) {
                return function qa(p) {
                  return new Dh(null, function(a, b, c, e, f, g, h) {
                    return function() {
                      for (var a = p;;) {
                        if (a = B(a)) {
                          if (U(a)) {
                            var c = x(a), e = N(c), f = Hh(e);
                            a: {
                              for (var l = 0;;) {
                                if (l < e) {
                                  var t = w.h(c, l);
                                  (Nx(b - g) > d || Nx(t - h) > d) && f.add(new V(null, 2, 5, W, [b, t], null));
                                  l += 1;
                                } else {
                                  c = !0;
                                  break a;
                                }
                              }
                              c = void 0;
                            }
                            return c ? Kh(Mh(f), qa(z(a))) : Kh(Mh(f), null);
                          }
                          f = D(a);
                          if (Nx(b - g) > d || Nx(f - h) > d) {
                            return Zf(new V(null, 2, 5, W, [b, f], null), qa(E(a)));
                          }
                          a = E(a);
                        } else {
                          return null;
                        }
                      }
                    };
                  }(a, b, c, e, f, g, h, l), null, null);
                };
              }(h, P, p, l, a, b, f, g)(ql.h(function() {
                var a = f - c;
                return 0 < a ? a : 0;
              }(), function() {
                var a = f + c + 1, b = e.height;
                return a < b ? a : b;
              }())))) {
                return Rh.h(l, t(E(h)));
              }
              h = E(h);
            } else {
              return null;
            }
          }
        };
      }(a, b, f, p), null, null);
    };
  }(b, f, a, this)(ql.h(function() {
    var a = f - c;
    return 0 < a ? a : 0;
  }(), function() {
    var a = f + c + 1, b = e.width;
    return a < b ? a : b;
  }()));
};
k.Ee = function(a, b, c) {
  a = O.j(b, 0, null);
  b = O.j(b, 1, null);
  var d = O.j(c, 0, null);
  c = O.j(c, 1, null);
  return Nx(d - a) + Nx(c - b);
};
k.Ra = function(a, b) {
  return Lg(new Xk(null, new n(null, 2, [wp, null, Nv, null], null), null), b) ? tg.h(ag(Oi.h(Jj, this), this.m), b) : new Px(this.width, this.height, this.m, Zh(tg.h(this.l, b)), null);
};
k.Ia = function(a, b, c) {
  return q(Z.h ? Z.h(wp, b) : Z.call(null, wp, b)) ? new Px(c, this.height, this.m, this.l, null) : q(Z.h ? Z.h(Nv, b) : Z.call(null, Nv, b)) ? new Px(this.width, c, this.m, this.l, null) : new Px(this.width, this.height, this.m, R.j(this.l, b, c), null);
};
k.S = function() {
  return B(Rh.h(new V(null, 2, 5, W, [new V(null, 2, 5, W, [wp, this.width], null), new V(null, 2, 5, W, [Nv, this.height], null)], null), this.l));
};
k.J = function(a, b) {
  return new Px(this.width, this.height, b, this.l, this.w);
};
k.U = function(a, b) {
  return Eg(b) ? Pd(this, w.h(b, 0), w.h(b, 1)) : od.j(Ad, this, b);
};
var Rx = function Qx(b, c, d) {
  return Qx(b, c, d);
};
function Sx(a) {
  var b = O.j(a, 0, null), c = O.j(a, 1, null), d = O.j(a, 2, null), e = O.j(a, 3, null);
  switch(N(a)) {
    case 0:
      return new Ox(0);
    case 1:
      return new Ox(b);
    case 2:
      return new Px(b, c);
    case 3:
      return Rx(b, c, d);
    case 4:
      return Rx(b, c, d * e);
    default:
      throw Error("No matching clause: " + v.g(N(a)));;
  }
}
var Tx = Sx(new V(null, 1, 5, W, [0], null)), Ux = function() {
  function a(a, b) {
    for (;;) {
      var c = N(a), d = N(b), l = a, p = O.j(l, 0, null), r = O.j(l, 1, null), l = O.j(l, 2, null), t = b, u = O.j(t, 0, null), A = O.j(t, 1, null), t = O.j(t, 2, null);
      if (d > c) {
        p = a, a = b, b = p;
      } else {
        var y;
        y = (y = 0 === d) ? y : ai(qh, b);
        if (q(y)) {
          return a;
        }
        if (1 === c && 1 === d) {
          return new V(null, 1, 5, W, [p + u], null);
        }
        if (2 === c && 2 === d && r === A) {
          return new V(null, 2, 5, W, [p + u, r], null);
        }
        if (2 === c && 2 === d) {
          b = new V(null, 1, 5, W, [u * A], null);
        } else {
          if (2 === c && 1 === d && 0 === dh(u, r)) {
            return new V(null, 2, 5, W, [p + ch(u, r), r], null);
          }
          if (2 === c && 1 === d) {
            return new V(null, 1, 5, W, [p * r + u], null);
          }
          if (3 === c && 3 === d && l === t && r === A) {
            return new V(null, 3, 5, W, [p + u, r, l], null);
          }
          if (3 === c && 3 === d) {
            b = new V(null, 2, 5, W, [u, A * t], null);
          } else {
            if (3 === c && 2 === d && r === u && l === A) {
              return new V(null, 3, 5, W, [p + 1, r, l], null);
            }
            if (3 === c && 2 === d) {
              c = b, a = new V(null, 2, 5, W, [p, r * l], null), b = c;
            } else {
              if (3 === c && 1 === d && 0 === dh(u, l)) {
                return new V(null, 3, 5, W, [p, r + ch(u, l), l], null);
              }
              if (3 === c && 1 === d) {
                c = a, a = new V(null, 2, 5, W, [p, r * l], null), b = c;
              } else {
                return null;
              }
            }
          }
        }
      }
    }
  }
  function b() {
    return new V(null, 1, 5, W, [0], null);
  }
  var c = null, d = function() {
    function a(c, d, e) {
      var p = null;
      2 < arguments.length && (p = H(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, p);
    }
    function b(a, d, e) {
      return od.j(c, c.h(a, d), e);
    }
    a.B = 2;
    a.o = function(a) {
      var c = D(a);
      a = G(a);
      var d = D(a);
      a = E(a);
      return b(c, d, a);
    };
    a.k = b;
    return a;
  }(), c = function(c, f, g) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return c;
      case 2:
        return a.call(this, c, f);
      default:
        return d.k(c, f, H(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.B = 2;
  c.o = d.o;
  c.q = b;
  c.g = function(a) {
    return a;
  };
  c.h = a;
  c.k = d.k;
  return c;
}();
function Vx(a, b, c) {
  var d = Yl.g(c), e = Kr.g(c), f = function() {
    var a = d + 1 * e;
    return 1 > a ? a : 1;
  }(), g = function() {
    var a = d - 2 * e;
    return 0 < a ? a : 0;
  }(), h = 1 <= Er.g(c), l = bh(Er.g(c) * S.h(Zg, Xw(b)));
  c = Fq.g(c);
  var p = bx(b), r = bx(a), t = 1 === N(Xw(a)) || 1 === N(Xw(b)), u = Xw(a), A = O.j(u, 0, null), y = O.j(u, 1, null), C = Xw(b), F = O.j(C, 0, null), J = O.j(C, 1, null);
  return h ? Pi.h(function(a, b, c, d, e, f, g, h, l, r, p, t, u, y, A, C) {
    return function() {
      var F = lx.g(g * h), J = vi.h(F, function(a, b, c, d, e, f, g, h, l) {
        return function() {
          return ox.g(l - 1);
        };
      }(F, a, b, c, d, e, f, g, h, l, r, p, t, u, y, A, C)), F = vi.h(F, function(a, b, c, d, e, f) {
        return function() {
          return nx.h(f, e);
        };
      }(F, J, a, b, c, d, e, f, g, h, l, r, p, t, u, y, A, C));
      return bl(J, F);
    };
  }(d, e, f, g, h, l, c, p, r, t, u, A, y, C, F, J), ql.g(r)) : Pi.h(function(c, d, e, f, g, h, l, r, p, t, u, y, A, C, F, J) {
    return function(Fa) {
      var Ca = t ? lx.g(Fa / p * r) : function() {
        var c = Yw(a, Fa), d = O.j(c, 0, null), c = O.j(c, 1, null);
        return Zw(b, new V(null, 2, 5, W, [lx.g(d / y * F), lx.g(c / A * J)], null));
      }(), Ya = nj(fx.j(b, Ca, h)), Bb = lx.g(l * N(Ya)), Ta = .4 > l ? rx(Bb, Ya) : qx(Bb, Ya), Ca = vi.h(Bb, function(a, b, c, d, e, f, g, h) {
        return function() {
          return nx.h(h, g);
        };
      }(Ca, Ya, Bb, Ta, c, d, e, f, g, h, l, r, p, t, u, y, A, C, F, J));
      return bl(Ta, Ca);
    };
  }(d, e, f, g, h, l, c, p, r, t, u, A, y, C, F, J), ql.g(r));
}
function Wx(a, b, c) {
  c = Qv.g(c);
  return Th(Sg(function(a) {
    return function(c, f, g) {
      if (g < a) {
        return c;
      }
      var h = Q.h(b, f);
      return Vh.j(c, f, g * h);
    };
  }(c), Ie(Jj), a));
}
function Xx(a, b, c, d, e, f, g) {
  var h = Kr.g(g), l = Fs.g(g), p = dm.g(g), r = qr.g(g), t = ot.g(g), u = Av.g(g);
  g = bh(Er.g(g) * S.h(Zg, Xw(b)));
  c = bx(c);
  return od.j(function(a, c, d, g, h, l, r, p) {
    return function(l, t) {
      var u = f.g ? f.g(t) : f.call(null, t), Y, u = h - u;
      Y = 0 > u ? 0 : u;
      u = Lw(l, t, di(!1), e, a, c);
      if (q(q(g) ? 0 < Y : g)) {
        var L = bx(b), L = lx.g(t / p * L), L = Yw(b, L);
        a: {
          var ha = Iw(u, t), pa = Lf, ka;
          b: {
            ka = Nh.g(e);
            for (var oa = N(ka) - 1;;) {
              if (1 <= oa) {
                var qa = ox.g(oa + 1), ib = ka[oa];
                ka[oa] = ka[qa];
                ka[qa] = ib;
                oa -= 1;
              } else {
                ka = Oi.h(null == e ? null : yd(e), B(ka));
                break b;
              }
            }
            ka = void 0;
          }
          for (;;) {
            if (zg(ka) || N(pa) >= Y) {
              Y = pa;
              break a;
            }
            qa = oa = D(e);
            qa = ha.g ? ha.g(qa) : ha.call(null, qa);
            q(qa) || (qa = Yw(b, oa), ax(b, qa, L) < r && (pa = qg.h(pa, oa)));
            ka = G(ka);
          }
          Y = void 0;
        }
        u = Mw(u, t, Y, d);
      }
      return u;
    };
  }(h, l, p, r, t, u, g, c), a, d);
}
function Yx(a, b) {
  var c = sr.g(a), d = Xl.g(c), e = Fo.g(c), f = Dr.g(c), c = Kr.g(c), g = Sq.g(a), h = Fp.g(a), l = tm.g(a), p = fx.j(Ww(a), b, l), l = S.j(Zg, 1, Hj(Vk(g, p))), p = S.j(Zg, 1, Hj(Vk(h, p))), d = d * l, l = e * p, e = Q.h(g, b), h = Q.h(h, b), f = f - h / l * (f - 1), f = 1 < f ? f : 1;
  return e < d ? Ui.k(a, new V(null, 1, 5, W, [Kq], null), Lw, b, di(!1), di(!0), H([c, 0], 0)) : Ti(a, new V(null, 2, 5, W, [gm, b], null), f);
}
function Zx(a, b, c) {
  var d = 1 / c;
  c = d * (c - 1);
  return ux(Pi.h(function(a, b) {
    return function(a) {
      return a * b;
    };
  }(d, c), a), b, function(a) {
    return function(b) {
      return b + a;
    };
  }(d, c));
}
;var $x = sg([Xl, Yl, dm, jm, lm, lo, xo, Do, Fo, Go, Yo, bp, kp, zp, Rp, Fq, Lq, Pq, Vq, or, qr, tr, Dr, Er, Kr, as, Fs, Ks, Ts, Vs, ot, rv, Av, Dv, Pv, Qv], [.001, .2, .16, !0, !1, 15, 5, .01, .001, !0, .2, 8, 12, new V(null, 1, 5, W, [2048], null), 0, .3, .05, 22, new V(null, 1, 5, W, [0], null), !1, !1, new V(null, 1, 5, W, [0], null), 3, .3, .05, .02, .005, new V(null, 1, 5, W, [Zs], null), 16, 1, 15, 1E3, 1E3, !1, .16, 3]);
function ay(a, b, c) {
  return sx(function(a) {
    var e = O.j(a, 0, null);
    return(a = O.j(a, 1, null) >= c) ? b.g ? b.g(e) : b.call(null, e) : a;
  }, a);
}
function by(a, b, c, d) {
  return pi.h(function(a, f) {
    var g = ay(f, b, d);
    return g >= c ? new n(null, 2, [nr, g, so, a], null) : null;
  }, a);
}
function cy(a, b) {
  return Th(Sg(function(a, d, e) {
    if (e < b) {
      return a;
    }
    var f = null == d ? null : fe(d);
    return Vh.j(a, f, function() {
      var b = Q.j(a, f, 0) + 1;
      return e > b ? e : b;
    }());
  }, Ie(Jj), a));
}
function dy(a, b, c, d) {
  return 0 === c ? a : Th(Sg(function(a, d, g) {
    var h = Hj(b.g ? b.g(d) : b.call(null, d));
    return q(h) ? (h = c * S.h(Zg, h), Vh.j(a, d, h + g)) : Vh.j(a, d, g);
  }, Ie(Jj), q(d) ? Uk.k(H([bl(Sk(b), ui.g(0)), a], 0)) : a));
}
function ey(a, b, c, d, e) {
  var f = tx.h(function(a) {
    var b = O.j(a, 0, null);
    O.j(a, 1, null);
    return b;
  }, b);
  a = dy(a, f, Rp.g(e), Dv.g(e));
  b = as.g(e);
  c = q(lm.g(e)) ? Kx(a, b, bx(c)) : Mx(a, c, d, Vs.g(e));
  e = Ts.g(e);
  d = Ie(Jj);
  for (a = Ie(Zk);;) {
    if (b = D(c), q(b)) {
      var g = b;
      b = function() {
        var a = g;
        return f.g ? f.g(a) : f.call(null, a);
      }();
      if (q(b)) {
        var h = S.j(cl, vh, b);
        b = O.j(h, 0, null);
        O.j(h, 1, null);
        c = G(c);
        d = Vh.j(d, g, new V(null, 1, 5, W, [b], null));
      } else {
        c = G(c), d = Vh.j(d, g, qi.j(oj, ui.g(g), ql.g(e))), a = Uh.h(a, g);
      }
    } else {
      return new n(null, 2, [Nr, Ke(d), qm, Ke(a)], null);
    }
  }
}
function fy(a, b, c) {
  a = by(a, b, 0, c);
  return B(a) ? S.j(cl, nr, a) : new n(null, 2, [so, null, nr, 0], null);
}
function gy(a, b, c, d) {
  if (zg(c)) {
    return new n(null, 1, [Rs, D(b)], null);
  }
  var e = qi.h(function(b) {
    var d = Ow(a, b);
    return R.j(fy(d, c, 0), Rs, b);
  }, b), e = S.j(cl, nr, e);
  return nr.g(e) >= bp.g(d) ? e : new n(null, 1, [Rs, px(b)], null);
}
function hy(a, b, c, d) {
  var e = xo.g(d), f = Pq.g(d), g = bp.g(d);
  d = Yo.g(d);
  a = Gx(a, new V(null, 2, 5, W, [b, c], null));
  return N(a) >= e ? S.j(dl, function(a, b, c, d, e) {
    return function(f) {
      var g = O.h(e, f);
      return sx(function(a, b, c, d, e) {
        return function(a) {
          return a >= e;
        };
      }(g, a, b, c, d, e), Hj(g)) * b + N(g) + f / N(e);
    };
  }(e, f, g, d, a), ql.g(N(a))) : N(a);
}
function iy(a, b, c, d) {
  return B(c) ? Ci.h(function(c) {
    var d = a.g ? a.g(c) : a.call(null, c);
    return q(d) ? d : vf.h(b, D(c));
  }, al(rx(d, c))) : null;
}
function jy(a, b, c, d, e, f) {
  e = nj(e);
  return Sg(function(a) {
    return function(b, e, p) {
      var r = O.j(e, 0, null);
      e = O.j(e, 1, null);
      var t = c.g ? c.g(r) : c.call(null, r), u = Lq.g(f), A = Do.g(f);
      q(p) ? (b = Lw(b, new V(null, 3, 5, W, [r, e, p], null), di(!1), d, u, A), q(t) && (r = new V(null, 3, 5, W, [r, e, p], null), e = D(r), p = Iw(b, r), t = ay(p, d, 0), t = lo.g(f) - t, 0 < t && (e = iy(p, e, a, t), b = Mw(b, r, e, Pv.g(f))))) : (p = lo.g(f), t = bp.g(f), u = hy(b, r, e, f), p = iy(Jj, r, a, p), N(p) < t || (r = new V(null, 3, 5, W, [r, e, u], null), e = Iw(b, r), b = B(e) ? Nw(b, r, Sk(e)) : b, b = Mw(b, r, p, Pv.g(f))));
      return b;
    };
  }(e), a, b);
}
function ky(a, b, c, d, e, f, g) {
  var h = Ow(a, new V(null, 2, 5, W, [b, c], null));
  e = by(h, d, e, f);
  return od.j(function() {
    return function(a, e) {
      var f = so.g(e);
      return Lw(a, new V(null, 3, 5, W, [b, c, f], null), d, di(!1), 0, g);
    };
  }(h, e), a, e);
}
function ly(a, b, c, d, e, f) {
  var g = kp.g(f), h = Yo.g(f);
  f = Do.g(f);
  b = ew.k(e, b, H([d], 0));
  return od.j(function(a, b, d) {
    return function(e, f) {
      var g = O.j(f, 0, null), h = O.j(f, 1, null);
      return ky(e, g, h, c, a, b, d);
    };
  }(g, h, f, b), a, b);
}
function my(a, b, c) {
  if (q(function() {
    var b = lm.h(a, !1);
    return q(b) ? b : 0 === c;
  }())) {
    return a;
  }
  var d = as.h(a, .02);
  return Ui.j(a, new V(null, 1, 5, W, [Qv], null), function(a) {
    return function(c) {
      c += c * (b / a - 1) * .1;
      c = 1 < c ? c : 1;
      return 1E3 > c ? c : 1E3;
    };
  }(d));
}
function ny(a) {
  return R.j(a, tm, Jx(Kq.g(a), Sv.g(a), Ls.g(a)));
}
function oy(a, b, c, d, e, f, g, h, l, p, r, t, u, A, y, C, F, J, L, I, P, T, M, ga) {
  this.Y = a;
  this.qa = b;
  this.xa = c;
  this.wa = d;
  this.na = e;
  this.ja = f;
  this.ya = g;
  this.ma = h;
  this.Da = l;
  this.va = p;
  this.ea = r;
  this.ga = t;
  this.ia = u;
  this.ka = A;
  this.Ea = y;
  this.ta = C;
  this.za = F;
  this.ha = J;
  this.la = L;
  this.ua = I;
  this.Aa = P;
  this.Ca = T;
  this.m = M;
  this.l = ga;
  this.t = 2229667594;
  this.G = 8192;
  22 < arguments.length ? (this.m = M, this.l = ga) : this.l = this.m = null;
}
k = oy.prototype;
k.N = function(a, b) {
  return Md.j(this, b, null);
};
k.L = function(a, b, c) {
  switch(b instanceof X ? b.ca : null) {
    case "boosts":
      return this.ua;
    case "burst-cols":
      return this.ga;
    case "inh-radius":
      return this.wa;
    case "prior-active-cells":
      return this.ta;
    case "pred-cells":
      return this.ha;
    case "active-duty-cycles":
      return this.Aa;
    case "signal-cells":
      return this.Ea;
    case "proximal-exc":
      return this.ma;
    case "proximal-sg":
      return this.na;
    case "overlap-duty-cycles":
      return this.Ca;
    case "learn-cells":
      return this.ka;
    case "spec":
      return this.Y;
    case "active-cols":
      return this.ea;
    case "active-cells":
      return this.ia;
    case "prior-learn-cells":
      return this.za;
    case "overlaps":
      return this.ya;
    case "distal-sg":
      return this.ja;
    case "input-topology":
      return this.xa;
    case "prior-pred-cells":
      return this.la;
    case "distal-exc":
      return this.va;
    case "topology":
      return this.qa;
    case "proximal-sig-exc":
      return this.Da;
    default:
      return Q.j(this.l, b, c);
  }
};
k.Sb = function() {
  return Sv.g(this);
};
k.P = function(a, b, c) {
  return zl(b, function() {
    return function(a) {
      return zl(b, Fl, "", " ", "", c, a);
    };
  }(this), "#org.nfrac.comportex.cells.LayerOfCells{", ", ", "}", c, Rh.h(new V(null, 22, 5, W, [new V(null, 2, 5, W, [sr, this.Y], null), new V(null, 2, 5, W, [Sv, this.qa], null), new V(null, 2, 5, W, [Ls, this.xa], null), new V(null, 2, 5, W, [tm, this.wa], null), new V(null, 2, 5, W, [Kq, this.na], null), new V(null, 2, 5, W, [ns, this.ja], null), new V(null, 2, 5, W, [bs, this.ya], null), new V(null, 2, 5, W, [Hq, this.ma], null), new V(null, 2, 5, W, [Wv, this.Da], null), new V(null, 2, 5, 
  W, [qv, this.va], null), new V(null, 2, 5, W, [Br, this.ea], null), new V(null, 2, 5, W, [qm, this.ga], null), new V(null, 2, 5, W, [Pr, this.ia], null), new V(null, 2, 5, W, [Wq, this.ka], null), new V(null, 2, 5, W, [Mp, this.Ea], null), new V(null, 2, 5, W, [wm, this.ta], null), new V(null, 2, 5, W, [Vr, this.za], null), new V(null, 2, 5, W, [vo, this.ha], null), new V(null, 2, 5, W, [dt, this.la], null), new V(null, 2, 5, W, [gm, this.ua], null), new V(null, 2, 5, W, [Fp, this.Aa], null), new V(null, 
  2, 5, W, [Sq, this.Ca], null)], null), this.l));
};
k.I = function() {
  return this.m;
};
k.V = function() {
  return 22 + N(this.l);
};
k.zf = function(a, b, c) {
  a = Ax(this.na, b);
  b = Wx(a, this.ua, this.Y);
  c = Ax(this.na, c);
  var d = ey(b, this.va, this.qa, this.wa, this.Y), e = Jg(d) ? S.h(ji, d) : d, d = Q.h(e, Nr), e = Q.h(e, qm), f = $k(Sk(d)), g = $k(S.h(Rh, Hj(d))), h = $k(S.h(Rh, Hj(S.j(tg, d, e))));
  return R.k(this, tp, tp.h(this, 0) + 1, H([bs, a, Hq, b, qp, c, Nr, d, Pr, g, Br, f, qm, e, Mp, h, wm, this.ia, Vr, this.ka], 0));
};
k.Af = function() {
  var a = Ax(this.ja, this.ia), a = cy(a, kp.g(this.Y)), b = $k(Sk(a));
  return R.k(this, vo, b, H([dt, this.ha, qv, a], 0));
};
k.Ef = function() {
  return Zk;
};
k.Ug = function() {
  return this.ga;
};
k.Cf = function(a, b) {
  var c = rv.g(this.Y), d = 0 === (tp.g(this) % c + c) % c, e = my(this.Y, N(this.ea) / bx(this.qa), N(b)), f = this.ta, g = this.za, h;
  a: {
    var l = Nr.g(this);
    h = this.ga;
    for (var p = this.ja, r = this.ta, t = this.Y, u = Yo.g(t), l = B(l), A = Ie(Zk), y = Ie(Jj);;) {
      var C = D(l);
      if (q(C)) {
        var F = O.j(C, 0, null), C = O.j(C, 1, null), F = h.g ? h.g(F) : h.call(null, F);
        if (q(F)) {
          F = gy(p, C, r, t), C = Rs.g(F);
        } else {
          var C = D(C), J = Ow(p, C), F = fy(J, r, u), F = q(so.g(F)) ? F : fy(J, r, 0)
        }
        l = G(l);
        A = Uh.h(A, C);
        y = Vh.j(y, C, so.g(F));
      } else {
        h = new n(null, 2, [Wq, Ke(A), Rl, Ke(y)], null);
        break a;
      }
    }
    h = void 0;
  }
  p = Jg(h) ? S.h(ji, h) : h;
  h = Q.h(p, Wq);
  p = Q.h(p, Rl);
  g = jy(this.ja, p, this.ga, f, g, this.Y);
  f = q(jm.g(this.Y)) ? ly(g, this.ia, f, this.ha, this.la, this.Y) : g;
  g = Xx(this.na, this.xa, this.qa, this.ea, b, this.ya, this.Y);
  e = R.k(this, sr, e, H([Wq, h, Xo, p, ns, f, Kq, g], 0));
  e = Ui.M(e, new V(null, 1, 5, W, [Sq], null), Zx, Sk(this.ma), c);
  c = Ui.M(e, new V(null, 1, 5, W, [Fp], null), Zx, this.ea, c);
  c = d ? od.j(Yx, c, ql.g(dx(c))) : c;
  return d ? ny(c) : c;
};
k.Bf = function() {
  return Ts.g(this.Y);
};
k.Df = function() {
  return Mp.g(this);
};
k.Tg = function() {
  return this.ea;
};
k.Yg = function() {
  return this.la;
};
k.yf = function() {
  return Pr.g(this);
};
k.Wg = function() {
  return this.ka;
};
k.Xg = function() {
  return this.ha;
};
k.Vg = function() {
  return this.ma;
};
k.R = function() {
  var a = this.w;
  return null != a ? a : this.w = a = th(this);
};
k.O = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && Bj(this, b) : b) ? !0 : !1;
};
k.xe = function() {
  return this.Y;
};
k.Md = function() {
  return tp.h(this, 0);
};
k.Ra = function(a, b) {
  return Lg(new Xk(null, new n(null, 22, [gm, null, qm, null, tm, null, wm, null, vo, null, Fp, null, Mp, null, Hq, null, Kq, null, Sq, null, Wq, null, sr, null, Br, null, Pr, null, Vr, null, bs, null, ns, null, Ls, null, dt, null, qv, null, Sv, null, Wv, null], null), null), b) ? tg.h(ag(Oi.h(Jj, this), this.m), b) : new oy(this.Y, this.qa, this.xa, this.wa, this.na, this.ja, this.ya, this.ma, this.Da, this.va, this.ea, this.ga, this.ia, this.ka, this.Ea, this.ta, this.za, this.ha, this.la, this.ua, 
  this.Aa, this.Ca, this.m, Zh(tg.h(this.l, b)), null);
};
k.Ia = function(a, b, c) {
  return q(Z.h ? Z.h(sr, b) : Z.call(null, sr, b)) ? new oy(c, this.qa, this.xa, this.wa, this.na, this.ja, this.ya, this.ma, this.Da, this.va, this.ea, this.ga, this.ia, this.ka, this.Ea, this.ta, this.za, this.ha, this.la, this.ua, this.Aa, this.Ca, this.m, this.l, null) : q(Z.h ? Z.h(Sv, b) : Z.call(null, Sv, b)) ? new oy(this.Y, c, this.xa, this.wa, this.na, this.ja, this.ya, this.ma, this.Da, this.va, this.ea, this.ga, this.ia, this.ka, this.Ea, this.ta, this.za, this.ha, this.la, this.ua, this.Aa, 
  this.Ca, this.m, this.l, null) : q(Z.h ? Z.h(Ls, b) : Z.call(null, Ls, b)) ? new oy(this.Y, this.qa, c, this.wa, this.na, this.ja, this.ya, this.ma, this.Da, this.va, this.ea, this.ga, this.ia, this.ka, this.Ea, this.ta, this.za, this.ha, this.la, this.ua, this.Aa, this.Ca, this.m, this.l, null) : q(Z.h ? Z.h(tm, b) : Z.call(null, tm, b)) ? new oy(this.Y, this.qa, this.xa, c, this.na, this.ja, this.ya, this.ma, this.Da, this.va, this.ea, this.ga, this.ia, this.ka, this.Ea, this.ta, this.za, this.ha, 
  this.la, this.ua, this.Aa, this.Ca, this.m, this.l, null) : q(Z.h ? Z.h(Kq, b) : Z.call(null, Kq, b)) ? new oy(this.Y, this.qa, this.xa, this.wa, c, this.ja, this.ya, this.ma, this.Da, this.va, this.ea, this.ga, this.ia, this.ka, this.Ea, this.ta, this.za, this.ha, this.la, this.ua, this.Aa, this.Ca, this.m, this.l, null) : q(Z.h ? Z.h(ns, b) : Z.call(null, ns, b)) ? new oy(this.Y, this.qa, this.xa, this.wa, this.na, c, this.ya, this.ma, this.Da, this.va, this.ea, this.ga, this.ia, this.ka, this.Ea, 
  this.ta, this.za, this.ha, this.la, this.ua, this.Aa, this.Ca, this.m, this.l, null) : q(Z.h ? Z.h(bs, b) : Z.call(null, bs, b)) ? new oy(this.Y, this.qa, this.xa, this.wa, this.na, this.ja, c, this.ma, this.Da, this.va, this.ea, this.ga, this.ia, this.ka, this.Ea, this.ta, this.za, this.ha, this.la, this.ua, this.Aa, this.Ca, this.m, this.l, null) : q(Z.h ? Z.h(Hq, b) : Z.call(null, Hq, b)) ? new oy(this.Y, this.qa, this.xa, this.wa, this.na, this.ja, this.ya, c, this.Da, this.va, this.ea, this.ga, 
  this.ia, this.ka, this.Ea, this.ta, this.za, this.ha, this.la, this.ua, this.Aa, this.Ca, this.m, this.l, null) : q(Z.h ? Z.h(Wv, b) : Z.call(null, Wv, b)) ? new oy(this.Y, this.qa, this.xa, this.wa, this.na, this.ja, this.ya, this.ma, c, this.va, this.ea, this.ga, this.ia, this.ka, this.Ea, this.ta, this.za, this.ha, this.la, this.ua, this.Aa, this.Ca, this.m, this.l, null) : q(Z.h ? Z.h(qv, b) : Z.call(null, qv, b)) ? new oy(this.Y, this.qa, this.xa, this.wa, this.na, this.ja, this.ya, this.ma, 
  this.Da, c, this.ea, this.ga, this.ia, this.ka, this.Ea, this.ta, this.za, this.ha, this.la, this.ua, this.Aa, this.Ca, this.m, this.l, null) : q(Z.h ? Z.h(Br, b) : Z.call(null, Br, b)) ? new oy(this.Y, this.qa, this.xa, this.wa, this.na, this.ja, this.ya, this.ma, this.Da, this.va, c, this.ga, this.ia, this.ka, this.Ea, this.ta, this.za, this.ha, this.la, this.ua, this.Aa, this.Ca, this.m, this.l, null) : q(Z.h ? Z.h(qm, b) : Z.call(null, qm, b)) ? new oy(this.Y, this.qa, this.xa, this.wa, this.na, 
  this.ja, this.ya, this.ma, this.Da, this.va, this.ea, c, this.ia, this.ka, this.Ea, this.ta, this.za, this.ha, this.la, this.ua, this.Aa, this.Ca, this.m, this.l, null) : q(Z.h ? Z.h(Pr, b) : Z.call(null, Pr, b)) ? new oy(this.Y, this.qa, this.xa, this.wa, this.na, this.ja, this.ya, this.ma, this.Da, this.va, this.ea, this.ga, c, this.ka, this.Ea, this.ta, this.za, this.ha, this.la, this.ua, this.Aa, this.Ca, this.m, this.l, null) : q(Z.h ? Z.h(Wq, b) : Z.call(null, Wq, b)) ? new oy(this.Y, this.qa, 
  this.xa, this.wa, this.na, this.ja, this.ya, this.ma, this.Da, this.va, this.ea, this.ga, this.ia, c, this.Ea, this.ta, this.za, this.ha, this.la, this.ua, this.Aa, this.Ca, this.m, this.l, null) : q(Z.h ? Z.h(Mp, b) : Z.call(null, Mp, b)) ? new oy(this.Y, this.qa, this.xa, this.wa, this.na, this.ja, this.ya, this.ma, this.Da, this.va, this.ea, this.ga, this.ia, this.ka, c, this.ta, this.za, this.ha, this.la, this.ua, this.Aa, this.Ca, this.m, this.l, null) : q(Z.h ? Z.h(wm, b) : Z.call(null, wm, 
  b)) ? new oy(this.Y, this.qa, this.xa, this.wa, this.na, this.ja, this.ya, this.ma, this.Da, this.va, this.ea, this.ga, this.ia, this.ka, this.Ea, c, this.za, this.ha, this.la, this.ua, this.Aa, this.Ca, this.m, this.l, null) : q(Z.h ? Z.h(Vr, b) : Z.call(null, Vr, b)) ? new oy(this.Y, this.qa, this.xa, this.wa, this.na, this.ja, this.ya, this.ma, this.Da, this.va, this.ea, this.ga, this.ia, this.ka, this.Ea, this.ta, c, this.ha, this.la, this.ua, this.Aa, this.Ca, this.m, this.l, null) : q(Z.h ? 
  Z.h(vo, b) : Z.call(null, vo, b)) ? new oy(this.Y, this.qa, this.xa, this.wa, this.na, this.ja, this.ya, this.ma, this.Da, this.va, this.ea, this.ga, this.ia, this.ka, this.Ea, this.ta, this.za, c, this.la, this.ua, this.Aa, this.Ca, this.m, this.l, null) : q(Z.h ? Z.h(dt, b) : Z.call(null, dt, b)) ? new oy(this.Y, this.qa, this.xa, this.wa, this.na, this.ja, this.ya, this.ma, this.Da, this.va, this.ea, this.ga, this.ia, this.ka, this.Ea, this.ta, this.za, this.ha, c, this.ua, this.Aa, this.Ca, 
  this.m, this.l, null) : q(Z.h ? Z.h(gm, b) : Z.call(null, gm, b)) ? new oy(this.Y, this.qa, this.xa, this.wa, this.na, this.ja, this.ya, this.ma, this.Da, this.va, this.ea, this.ga, this.ia, this.ka, this.Ea, this.ta, this.za, this.ha, this.la, c, this.Aa, this.Ca, this.m, this.l, null) : q(Z.h ? Z.h(Fp, b) : Z.call(null, Fp, b)) ? new oy(this.Y, this.qa, this.xa, this.wa, this.na, this.ja, this.ya, this.ma, this.Da, this.va, this.ea, this.ga, this.ia, this.ka, this.Ea, this.ta, this.za, this.ha, 
  this.la, this.ua, c, this.Ca, this.m, this.l, null) : q(Z.h ? Z.h(Sq, b) : Z.call(null, Sq, b)) ? new oy(this.Y, this.qa, this.xa, this.wa, this.na, this.ja, this.ya, this.ma, this.Da, this.va, this.ea, this.ga, this.ia, this.ka, this.Ea, this.ta, this.za, this.ha, this.la, this.ua, this.Aa, c, this.m, this.l, null) : new oy(this.Y, this.qa, this.xa, this.wa, this.na, this.ja, this.ya, this.ma, this.Da, this.va, this.ea, this.ga, this.ia, this.ka, this.Ea, this.ta, this.za, this.ha, this.la, this.ua, 
  this.Aa, this.Ca, this.m, R.j(this.l, b, c), null);
};
k.S = function() {
  return B(Rh.h(new V(null, 22, 5, W, [new V(null, 2, 5, W, [sr, this.Y], null), new V(null, 2, 5, W, [Sv, this.qa], null), new V(null, 2, 5, W, [Ls, this.xa], null), new V(null, 2, 5, W, [tm, this.wa], null), new V(null, 2, 5, W, [Kq, this.na], null), new V(null, 2, 5, W, [ns, this.ja], null), new V(null, 2, 5, W, [bs, this.ya], null), new V(null, 2, 5, W, [Hq, this.ma], null), new V(null, 2, 5, W, [Wv, this.Da], null), new V(null, 2, 5, W, [qv, this.va], null), new V(null, 2, 5, W, [Br, this.ea], 
  null), new V(null, 2, 5, W, [qm, this.ga], null), new V(null, 2, 5, W, [Pr, this.ia], null), new V(null, 2, 5, W, [Wq, this.ka], null), new V(null, 2, 5, W, [Mp, this.Ea], null), new V(null, 2, 5, W, [wm, this.ta], null), new V(null, 2, 5, W, [Vr, this.za], null), new V(null, 2, 5, W, [vo, this.ha], null), new V(null, 2, 5, W, [dt, this.la], null), new V(null, 2, 5, W, [gm, this.ua], null), new V(null, 2, 5, W, [Fp, this.Aa], null), new V(null, 2, 5, W, [Sq, this.Ca], null)], null), this.l));
};
k.J = function(a, b) {
  return new oy(this.Y, this.qa, this.xa, this.wa, this.na, this.ja, this.ya, this.ma, this.Da, this.va, this.ea, this.ga, this.ia, this.ka, this.Ea, this.ta, this.za, this.ha, this.la, this.ua, this.Aa, this.Ca, b, this.l, this.w);
};
k.U = function(a, b) {
  return Eg(b) ? Pd(this, w.h(b, 0), w.h(b, 1)) : od.j(Ad, this, b);
};
function py(a, b, c, d) {
  this.eb = a;
  this.Lc = b;
  this.m = c;
  this.l = d;
  this.t = 2229667594;
  this.G = 8192;
  2 < arguments.length ? (this.m = c, this.l = d) : this.l = this.m = null;
}
k = py.prototype;
k.N = function(a, b) {
  return Md.j(this, b, null);
};
k.L = function(a, b, c) {
  switch(b instanceof X ? b.ca : null) {
    case "neighbors":
      return this.Lc;
    case "nodes":
      return this.eb;
    default:
      return Q.j(this.l, b, c);
  }
};
k.P = function(a, b, c) {
  return zl(b, function() {
    return function(a) {
      return zl(b, Fl, "", " ", "", c, a);
    };
  }(this), "#org.nfrac.comportex.algo-graph.DirectedGraph{", ", ", "}", c, Rh.h(new V(null, 2, 5, W, [new V(null, 2, 5, W, [Hr, this.eb], null), new V(null, 2, 5, W, [ft, this.Lc], null)], null), this.l));
};
k.I = function() {
  return this.m;
};
k.V = function() {
  return 2 + N(this.l);
};
k.R = function() {
  var a = this.w;
  return null != a ? a : this.w = a = th(this);
};
k.O = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && Bj(this, b) : b) ? !0 : !1;
};
k.Ra = function(a, b) {
  return Lg(new Xk(null, new n(null, 2, [Hr, null, ft, null], null), null), b) ? tg.h(ag(Oi.h(Jj, this), this.m), b) : new py(this.eb, this.Lc, this.m, Zh(tg.h(this.l, b)), null);
};
k.Ia = function(a, b, c) {
  return q(Z.h ? Z.h(Hr, b) : Z.call(null, Hr, b)) ? new py(c, this.Lc, this.m, this.l, null) : q(Z.h ? Z.h(ft, b) : Z.call(null, ft, b)) ? new py(this.eb, c, this.m, this.l, null) : new py(this.eb, this.Lc, this.m, R.j(this.l, b, c), null);
};
k.S = function() {
  return B(Rh.h(new V(null, 2, 5, W, [new V(null, 2, 5, W, [Hr, this.eb], null), new V(null, 2, 5, W, [ft, this.Lc], null)], null), this.l));
};
k.J = function(a, b) {
  return new py(this.eb, this.Lc, b, this.l, this.w);
};
k.U = function(a, b) {
  return Eg(b) ? Pd(this, w.h(b, 0), w.h(b, 1)) : od.j(Ad, this, b);
};
function qy(a, b) {
  return new py(a, b);
}
function ry(a, b) {
  return ft.g(a).call(null, b);
}
function sy(a) {
  var b = od.j(function(b, d) {
    var e = ry(a, d);
    return od.j(function() {
      return function(a, b) {
        return R.j(a, b, qg.h(Q.j(a, b, Zk), d));
      };
    }(e), b, e);
  }, Jj, Hr.g(a));
  return qy(Hr.g(a), b);
}
function ty(a, b, c) {
  var d = vf;
  return function(a, c) {
    for (;;) {
      if (q(function() {
        var a = c;
        return q(a) ? vf.h(0, c) : a;
      }())) {
        throw Error("Fixed point overflow");
      }
      var g = function() {
        var c = a;
        return b.g ? b.g(c) : b.call(null, c);
      }();
      if (q(function() {
        var b = a, c = g;
        return d.h ? d.h(b, c) : d.call(null, b, c);
      }())) {
        return g;
      }
      var h = function() {
        var a = c;
        return q(a) ? c - 1 : a;
      }();
      a = g;
      c = h;
    }
  }(a, c);
}
function uy(a) {
  var b = S.j(Zg, 0, Hj(a)) + 1;
  return od.j(function() {
    return function(a, b) {
      var e = O.j(b, 0, null), f = O.j(b, 1, null);
      return R.j(a, f, qg.h(a.g ? a.g(f) : a.call(null, f), e));
    };
  }(b), nj(ri.h(b, ui.g(Zk))), a);
}
function vy(a) {
  var b = ty(bl(Hr.g(a), ui.g(0)), function(b) {
    return Oi.h(Jj, qi.h(function(a) {
      return function(b) {
        var c = O.j(b, 0, null);
        O.j(b, 1, null);
        return new V(null, 2, 5, W, [c, a(c)], null);
      };
    }(function(d) {
      return S.j(Zg, -1, qi.h(b, ry(a, d))) + 1;
    }), b));
  }, N(Hr.g(a)) + 1);
  return uy(b);
}
;function wy(a, b, c) {
  var d = O.j(c, 0, null);
  c = O.j(c, 1, null);
  return a + b * d + c;
}
function xy(a, b, c, d, e) {
  this.Ta = a;
  this.sb = b;
  this.Zb = c;
  this.m = d;
  this.l = e;
  this.t = 2229667594;
  this.G = 8192;
  3 < arguments.length ? (this.m = d, this.l = e) : this.l = this.m = null;
}
k = xy.prototype;
k.Ld = function() {
  var a = this;
  return R.j(function() {
    var b = Vw(a);
    return yy.g ? yy.g(b) : yy.call(null, b);
  }(), pt, this.sb);
};
k.N = function(a, b) {
  return Md.j(this, b, null);
};
k.L = function(a, b, c) {
  switch(b instanceof X ? b.ca : null) {
    case "step-counter":
      return this.Zb;
    case "uuid":
      return this.sb;
    case "layer-3":
      return this.Ta;
    default:
      return Q.j(this.l, b, c);
  }
};
k.Sb = function() {
  return Ww(this.Ta);
};
k.P = function(a, b, c) {
  return zl(b, function() {
    return function(a) {
      return zl(b, Fl, "", " ", "", c, a);
    };
  }(this), "#org.nfrac.comportex.core.SensoryRegion{", ", ", "}", c, Rh.h(new V(null, 3, 5, W, [new V(null, 2, 5, W, [sv, this.Ta], null), new V(null, 2, 5, W, [pt, this.sb], null), new V(null, 2, 5, W, [As, this.Zb], null)], null), this.l));
};
k.I = function() {
  return this.m;
};
k.ve = function() {
  return Tx;
};
k.we = function() {
  return Zk;
};
k.V = function() {
  return 3 + N(this.l);
};
k.R = function() {
  var a = this.w;
  return null != a ? a : this.w = a = th(this);
};
k.O = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && Bj(this, b) : b) ? !0 : !1;
};
k.xe = function() {
  return Vw(this.Ta);
};
k.se = function() {
  return Sx(qg.h(cx(this), yw(this.Ta)));
};
k.re = function(a, b) {
  var c = yw(this.Ta);
  return Oi.h(Zk, Pi.h(fi.j(wy, b, c), Cw(this.Ta)));
};
k.te = function(a, b) {
  var c = yw(this.Ta);
  return Oi.h(Zk, Pi.h(fi.j(wy, b, c), Ew(this.Ta)));
};
k.ue = function(a, b) {
  var c = yw(this.Ta);
  return new V(null, 2, 5, W, [ch(b, c), dh(b, c)], null);
};
k.Md = function() {
  return this.Zb;
};
k.Ra = function(a, b) {
  return Lg(new Xk(null, new n(null, 3, [As, null, pt, null, sv, null], null), null), b) ? tg.h(ag(Oi.h(Jj, this), this.m), b) : new xy(this.Ta, this.sb, this.Zb, this.m, Zh(tg.h(this.l, b)), null);
};
k.Ia = function(a, b, c) {
  return q(Z.h ? Z.h(sv, b) : Z.call(null, sv, b)) ? new xy(c, this.sb, this.Zb, this.m, this.l, null) : q(Z.h ? Z.h(pt, b) : Z.call(null, pt, b)) ? new xy(this.Ta, c, this.Zb, this.m, this.l, null) : q(Z.h ? Z.h(As, b) : Z.call(null, As, b)) ? new xy(this.Ta, this.sb, c, this.m, this.l, null) : new xy(this.Ta, this.sb, this.Zb, this.m, R.j(this.l, b, c), null);
};
k.S = function() {
  return B(Rh.h(new V(null, 3, 5, W, [new V(null, 2, 5, W, [sv, this.Ta], null), new V(null, 2, 5, W, [pt, this.sb], null), new V(null, 2, 5, W, [As, this.Zb], null)], null), this.l));
};
k.J = function(a, b) {
  return new xy(this.Ta, this.sb, this.Zb, b, this.l, this.w);
};
k.Ff = function(a, b, c) {
  return R.k(this, As, this.Zb + 1, H([sv, vw(this.Ta, b, c)], 0));
};
k.Hf = function(a, b) {
  return q(ym.g(Vw(this))) ? this : R.j(this, sv, ww(this.Ta, b));
};
k.Gf = function(a, b, c) {
  return R.j(this, sv, xw(this.Ta, b, c));
};
k.U = function(a, b) {
  return Eg(b) ? Pd(this, w.h(b, 0), w.h(b, 1)) : od.j(Ad, this, b);
};
function yy(a) {
  var b = ew.h($k(Sk(a)), $k(Sk($x)));
  B(b) && Il.k(H(["Warning: unknown keys in spec:", b], 0));
  a = Uk.k(H([$x, a], 0));
  var b = Sx(Ks.g(a)), c = Sx(zp.g(a)), d = bx(c), e = Vx(c, b, a), e = zx(e, bx(b), Yl.g(a), Av.g(a), qr.g(a)), f, g = Ts.g(a);
  f = xo.g(a);
  var h = Yo.g(a), l = Pq.g(a), p = d * g, h = yx(new n(null, 5, [Ns, nj(ui.h(d * g * f, Jj)), Qr, nj(ui.h(p, Zk)), tv, h, im, l, Jv, !0], null)), l = fi.j(Dx, g, f), p = fi.j(Ex, g, f), r = fi.h(Bx, g), g = fi.h(Cx, g);
  f = new n(null, 6, [Uv, h, vm, f, mv, l, Lr, p, Co, r, Wo, g], null);
  f = new Fx(Uv.g(f), Ts.g(f), vm.g(f), Co.g(f), Wo.g(f), mv.g(f), Lr.g(f), null, tg.k(f, Uv, H([Ts, vm, Co, Wo, mv, Lr], 0)));
  a = sg([gm, qm, tm, vo, qp, Fp, Mp, Kq, Sq, Wq, sr, Br, Pr, bs, ns, Ls, dt, qv, yv, Sv], [nj(ui.h(d, 1)), Zk, 1, Zk, Jj, nj(ui.h(d, 0)), Zk, e, nj(ui.h(d, 0)), Zk, a, Zk, Zk, Jj, f, b, Zk, Jj, Jj, c]);
  a = new oy(sr.g(a), Sv.g(a), Ls.g(a), tm.g(a), Kq.g(a), ns.g(a), bs.g(a), Hq.g(a), Wv.g(a), qv.g(a), Br.g(a), qm.g(a), Pr.g(a), Wq.g(a), Mp.g(a), wm.g(a), Vr.g(a), vo.g(a), dt.g(a), gm.g(a), Fp.g(a), Sq.g(a), null, tg.k(a, sr, H([Sv, Ls, tm, Kq, ns, bs, Hq, Wv, qv, Br, qm, Pr, Wq, Mp, wm, Vr, vo, dt, gm, Fp, Sq], 0)));
  a = ny(a);
  a = new n(null, 3, [sv, a, pt, aw(), As, 0], null);
  return new xy(sv.g(a), pt.g(a), As.g(a), null, tg.k(a, sv, H([pt, As], 0)));
}
function zy(a, b, c, d, e, f) {
  this.Wb = a;
  this.value = b;
  this.transform = c;
  this.Eb = d;
  this.m = e;
  this.l = f;
  this.t = 2229667594;
  this.G = 8192;
  4 < arguments.length ? (this.m = e, this.l = f) : this.l = this.m = null;
}
k = zy.prototype;
k.Ld = function() {
  return R.j(this, jp, this.Wb);
};
k.N = function(a, b) {
  return Md.j(this, b, null);
};
k.L = function(a, b, c) {
  switch(b instanceof X ? b.ca : null) {
    case "encoder":
      return this.Eb;
    case "transform":
      return this.transform;
    case "value":
      return this.value;
    case "init-value":
      return this.Wb;
    default:
      return Q.j(this.l, b, c);
  }
};
k.Sb = function() {
  return Ww(this.Eb);
};
k.Jf = function() {
  var a = this;
  return R.j(this, jp, function() {
    var b = a.value;
    return a.transform.g ? a.transform.g(b) : a.transform.call(null, b);
  }());
};
k.Zg = function() {
  return this.value;
};
k.P = function(a, b, c) {
  return zl(b, function() {
    return function(a) {
      return zl(b, Fl, "", " ", "", c, a);
    };
  }(this), "#org.nfrac.comportex.core.SensoryInput{", ", ", "}", c, Rh.h(new V(null, 4, 5, W, [new V(null, 2, 5, W, [ks, this.Wb], null), new V(null, 2, 5, W, [jp, this.value], null), new V(null, 2, 5, W, [zm, this.transform], null), new V(null, 2, 5, W, [yo, this.Eb], null)], null), this.l));
};
k.I = function() {
  return this.m;
};
k.ve = function() {
  return Tx;
};
k.we = function() {
  return Zk;
};
k.V = function() {
  return 4 + N(this.l);
};
k.R = function() {
  var a = this.w;
  return null != a ? a : this.w = a = th(this);
};
k.O = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && Bj(this, b) : b) ? !0 : !1;
};
k.se = function() {
  return Ww(this.Eb);
};
k.re = function(a, b) {
  return Pw(this.Eb, b, this.value);
};
k.te = function() {
  return Zk;
};
k.ue = function(a, b) {
  return new V(null, 1, 5, W, [b], null);
};
k.Ra = function(a, b) {
  return Lg(new Xk(null, new n(null, 4, [zm, null, yo, null, jp, null, ks, null], null), null), b) ? tg.h(ag(Oi.h(Jj, this), this.m), b) : new zy(this.Wb, this.value, this.transform, this.Eb, this.m, Zh(tg.h(this.l, b)), null);
};
k.Ia = function(a, b, c) {
  return q(Z.h ? Z.h(ks, b) : Z.call(null, ks, b)) ? new zy(c, this.value, this.transform, this.Eb, this.m, this.l, null) : q(Z.h ? Z.h(jp, b) : Z.call(null, jp, b)) ? new zy(this.Wb, c, this.transform, this.Eb, this.m, this.l, null) : q(Z.h ? Z.h(zm, b) : Z.call(null, zm, b)) ? new zy(this.Wb, this.value, c, this.Eb, this.m, this.l, null) : q(Z.h ? Z.h(yo, b) : Z.call(null, yo, b)) ? new zy(this.Wb, this.value, this.transform, c, this.m, this.l, null) : new zy(this.Wb, this.value, this.transform, 
  this.Eb, this.m, R.j(this.l, b, c), null);
};
k.S = function() {
  return B(Rh.h(new V(null, 4, 5, W, [new V(null, 2, 5, W, [ks, this.Wb], null), new V(null, 2, 5, W, [jp, this.value], null), new V(null, 2, 5, W, [zm, this.transform], null), new V(null, 2, 5, W, [yo, this.Eb], null)], null), this.l));
};
k.J = function(a, b) {
  return new zy(this.Wb, this.value, this.transform, this.Eb, b, this.l, this.w);
};
k.U = function(a, b) {
  return Eg(b) ? Pd(this, w.h(b, 0), w.h(b, 1)) : od.j(Ad, this, b);
};
function Ay(a, b, c) {
  return new zy(a, a, b, c);
}
function By(a, b) {
  var c = function() {
    switch(b instanceof X ? b.ca : null) {
      case "motor":
        return tw;
      case "signal":
        return pw;
      case "standard":
        return pw;
      default:
        throw Error("No matching clause: " + v.g(b));;
    }
  }(), d = function() {
    switch(b instanceof X ? b.ca : null) {
      case "motor":
        return uw;
      case "signal":
        return rw;
      case "standard":
        return qw;
      default:
        throw Error("No matching clause: " + v.g(b));;
    }
  }(), c = qi.h(ei.h(bx, c), a), c = Sh.h(0, sl.h(Vg, c));
  return S.h(cw, qi.j(d, a, c));
}
function Cy(a) {
  return S.h(Ux, qi.h(Xw, a));
}
function Dy(a) {
  a = Uk.k(H([$x, a], 0));
  return Sx(qg.h(zp.g(a), Ts.g(a)));
}
function Ey(a, b, c, d, e, f, g, h) {
  this.Pa = a;
  this.ob = b;
  this.yb = c;
  this.Na = d;
  this.oa = e;
  this.tb = f;
  this.m = g;
  this.l = h;
  this.t = 2229667594;
  this.G = 8192;
  6 < arguments.length ? (this.m = g, this.l = h) : this.l = this.m = null;
}
k = Ey.prototype;
k.Ld = function() {
  var a = this;
  return R.k(this, Xs, bl(Sk(a.oa), function() {
    var b = Hj(a.oa);
    return qi.h ? qi.h(Tw, b) : qi.call(null, Tw, b);
  }()), H([Qp, vx(Tw, a.Na)], 0));
};
k.N = function(a, b) {
  return Md.j(this, b, null);
};
k.L = function(a, b, c) {
  switch(b instanceof X ? b.ca : null) {
    case "uuid-\x3eid":
      return this.tb;
    case "regions-map":
      return this.oa;
    case "inputs-map":
      return this.Na;
    case "strata":
      return this.yb;
    case "fb-deps-map":
      return this.ob;
    case "ff-deps-map":
      return this.Pa;
    default:
      return Q.j(this.l, b, c);
  }
};
k.P = function(a, b, c) {
  return zl(b, function() {
    return function(a) {
      return zl(b, Fl, "", " ", "", c, a);
    };
  }(this), "#org.nfrac.comportex.core.RegionNetwork{", ", ", "}", c, Rh.h(new V(null, 6, 5, W, [new V(null, 2, 5, W, [Es, this.Pa], null), new V(null, 2, 5, W, [ep, this.ob], null), new V(null, 2, 5, W, [xt, this.yb], null), new V(null, 2, 5, W, [Qp, this.Na], null), new V(null, 2, 5, W, [Xs, this.oa], null), new V(null, 2, 5, W, [Lo, this.tb], null)], null), this.l));
};
k.I = function() {
  return this.m;
};
k.V = function() {
  return 6 + N(this.l);
};
k.R = function() {
  var a = this.w;
  return null != a ? a : this.w = a = th(this);
};
k.O = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && Bj(this, b) : b) ? !0 : !1;
};
k.sf = function() {
  var a = this, b = bl(Sk(a.Na), function() {
    var b = Hj(a.Na);
    return qi.h ? qi.h(Rw, b) : qi.call(null, Rw, b);
  }()), c = Vk(od.j(function(b, c) {
    return function(f, g) {
      return Oi.h(f, bl(g, function() {
        var h = function() {
          return function(b) {
            var c = a.oa.g ? a.oa.g(b) : a.oa.call(null, b);
            b = a.Pa.g ? a.Pa.g(b) : a.Pa.call(null, b);
            b = qi.h(f, b);
            return mw(c, By(b, Ys), By(b, jv));
          };
        }(b, c);
        return qi.h ? qi.h(h, g) : qi.call(null, h, g);
      }()));
    };
  }(b, this), b, E(a.yb)), Sk(a.oa));
  return R.k(this, Qp, b, H([Xs, c], 0));
};
k.uf = function() {
  var a = this, b = this, c = bl(Sk(a.oa), function() {
    var c = function(b) {
      return function(c) {
        var d = O.j(c, 0, null), e = O.j(c, 1, null), p = a.Pa.g ? a.Pa.g(d) : a.Pa.call(null, d);
        c = qi.h(function() {
          return function(b) {
            var c = a.Na.g ? a.Na.g(b) : a.Na.call(null, b);
            return q(c) ? c : a.oa.g ? a.oa.g(b) : a.oa.call(null, b);
          };
        }(p, c, d, e, b), p);
        return nw(e, By(c, Ys));
      };
    }(b), e = a.oa;
    return qi.h ? qi.h(c, e) : qi.call(null, c, e);
  }());
  return R.j(b, Xs, c);
};
k.tf = function() {
  var a = this, b = this, c = bl(Sk(a.oa), function() {
    var c = function(b) {
      return function(c) {
        var d = O.j(c, 0, null), e = O.j(c, 1, null), p = a.Pa.g ? a.Pa.g(d) : a.Pa.call(null, d), r = a.ob.g ? a.ob.g(d) : a.ob.call(null, d);
        c = qi.h(function() {
          return function(b) {
            var c = a.Na.g ? a.Na.g(b) : a.Na.call(null, b);
            return q(c) ? c : a.oa.g ? a.oa.g(b) : a.oa.call(null, b);
          };
        }(p, r, c, d, e, b), p);
        r = qi.h(a.oa, r);
        return ow(e, By(c, Rr), By(r, Ys));
      };
    }(b), e = a.oa;
    return qi.h ? qi.h(c, e) : qi.call(null, c, e);
  }());
  return R.j(b, Xs, c);
};
k.wf = function() {
  return qi.h(this.oa, S.h(Rh, E(this.yb)));
};
k.vf = function() {
  return Hj(this.Na);
};
k.xf = function(a, b, c) {
  var d = this;
  return Ui.j(this, new V(null, 2, 5, W, [Xs, function() {
    var a = d.tb.g ? d.tb.g(b) : d.tb.call(null, b);
    return q(a) ? a : b;
  }()], null), c);
};
k.Md = function() {
  return Uw(D(Hj(this.oa)));
};
k.Ra = function(a, b) {
  return Lg(new Xk(null, new n(null, 6, [Lo, null, ep, null, Qp, null, Es, null, Xs, null, xt, null], null), null), b) ? tg.h(ag(Oi.h(Jj, this), this.m), b) : new Ey(this.Pa, this.ob, this.yb, this.Na, this.oa, this.tb, this.m, Zh(tg.h(this.l, b)), null);
};
k.Ia = function(a, b, c) {
  return q(Z.h ? Z.h(Es, b) : Z.call(null, Es, b)) ? new Ey(c, this.ob, this.yb, this.Na, this.oa, this.tb, this.m, this.l, null) : q(Z.h ? Z.h(ep, b) : Z.call(null, ep, b)) ? new Ey(this.Pa, c, this.yb, this.Na, this.oa, this.tb, this.m, this.l, null) : q(Z.h ? Z.h(xt, b) : Z.call(null, xt, b)) ? new Ey(this.Pa, this.ob, c, this.Na, this.oa, this.tb, this.m, this.l, null) : q(Z.h ? Z.h(Qp, b) : Z.call(null, Qp, b)) ? new Ey(this.Pa, this.ob, this.yb, c, this.oa, this.tb, this.m, this.l, null) : 
  q(Z.h ? Z.h(Xs, b) : Z.call(null, Xs, b)) ? new Ey(this.Pa, this.ob, this.yb, this.Na, c, this.tb, this.m, this.l, null) : q(Z.h ? Z.h(Lo, b) : Z.call(null, Lo, b)) ? new Ey(this.Pa, this.ob, this.yb, this.Na, this.oa, c, this.m, this.l, null) : new Ey(this.Pa, this.ob, this.yb, this.Na, this.oa, this.tb, this.m, R.j(this.l, b, c), null);
};
k.S = function() {
  return B(Rh.h(new V(null, 6, 5, W, [new V(null, 2, 5, W, [Es, this.Pa], null), new V(null, 2, 5, W, [ep, this.ob], null), new V(null, 2, 5, W, [xt, this.yb], null), new V(null, 2, 5, W, [Qp, this.Na], null), new V(null, 2, 5, W, [Xs, this.oa], null), new V(null, 2, 5, W, [Lo, this.tb], null)], null), this.l));
};
k.J = function(a, b) {
  return new Ey(this.Pa, this.ob, this.yb, this.Na, this.oa, this.tb, b, this.l, this.w);
};
k.U = function(a, b) {
  return Eg(b) ? Pd(this, w.h(b, 0), w.h(b, 1)) : od.j(Ad, this, b);
};
function Fy(a) {
  return new Ey(Es.g(a), ep.g(a), xt.g(a), Qp.g(a), Xs.g(a), Lo.g(a), null, tg.k(a, Es, H([ep, xt, Qp, Xs, Lo], 0)));
}
function Gy(a) {
  var b = $k(Sk(a));
  a = $k(S.h(Rh, Hj(a)));
  return ew.h(a, b);
}
function Hy(a, b, c, d) {
  if (!$h(a, Sk(d))) {
    throw Error("Assert failed: " + v.g(ni.k(H([zh(new xf(null, "every?", "every?", 2083724064, null), new xf(null, "ff-deps-map", "ff-deps-map", 2058891166, null), zh(new xf(null, "keys", "keys", -1586012071, null), new xf(null, "region-specs-map", "region-specs-map", -591017907, null)))], 0))));
  }
  if (!$h(Gy(a), Sk(b))) {
    throw Error("Assert failed: " + v.g(ni.k(H([zh(new xf(null, "every?", "every?", 2083724064, null), zh(new xf(null, "in-vals-not-keys", "in-vals-not-keys", -567229716, null), new xf(null, "ff-deps-map", "ff-deps-map", 2058891166, null)), zh(new xf(null, "keys", "keys", -1586012071, null), new xf(null, "inputs-map", "inputs-map", -566502349, null)))], 0))));
  }
  if (!$h(d, Sk(a))) {
    throw Error("Assert failed: " + v.g(ni.k(H([zh(new xf(null, "every?", "every?", 2083724064, null), new xf(null, "region-specs-map", "region-specs-map", -591017907, null), zh(new xf(null, "keys", "keys", -1586012071, null), new xf(null, "ff-deps-map", "ff-deps-map", 2058891166, null)))], 0))));
  }
  if (!$h(b, Gy(a))) {
    throw Error("Assert failed: " + v.g(ni.k(H([zh(new xf(null, "every?", "every?", 2083724064, null), new xf(null, "inputs-map", "inputs-map", -566502349, null), zh(new xf(null, "in-vals-not-keys", "in-vals-not-keys", -567229716, null), new xf(null, "ff-deps-map", "ff-deps-map", 2058891166, null)))], 0))));
  }
  var e = Oi.h($k(Sk(a)), Gy(a)), f = new py(e, a), g = vy(f), h = vx(B, ft.g(sy(f))), e = Vk(od.j(function(b, e, f, g) {
    return function(b, e) {
      var f = d.g ? d.g(e) : d.call(null, e), h = a.g ? a.g(e) : a.call(null, e), h = qi.h(b, h), l = Cy(qi.h(pw, h)), r = Cy(qi.h(tw, h)), h = g.g ? g.g(e) : g.call(null, e), h = qi.h(d, h), p = Cy(qi.h(Dy, h));
      return R.j(b, e, function() {
        var a = R.k(f, Ks, l, H([tr, r, Vq, p], 0));
        return c.g ? c.g(a) : c.call(null, a);
      }());
    };
  }(e, f, g, h), b, S.h(Rh, E(g))), Sk(d));
  return Fy(new n(null, 6, [Es, a, ep, h, xt, g, Qp, b, Xs, e, Lo, bl(qi.h(pt, Hj(e)), Sk(e))], null));
}
function Iy(a, b, c, d) {
  c = qi.h(function(a) {
    return Ch.g("r" + v.g(a));
  }, ql.g(c));
  var e = bl(c, qi.h(oj, Sh.h(mt, c)));
  return Hy(e, new n(null, 1, [mt, b], null), a, bl(c, ui.g(d)));
}
var Jy = function() {
  function a(a, b) {
    var c = b.g ? b.g(a) : b.call(null, a), g = Bw(c), c = Hw(c), c = Oi.h(Zk, qi.h(D, c)), h = dw.h(c, g), g = Uk.k(H([bl(c, ui.g(gt)), bl(g, ui.g(Zr)), bl(h, ui.g(yr))], 0));
    return R.k(Uk.k(H([new n(null, 3, [Zr, 0, gt, 0, yr, 0], null), rl(Hj(g))], 0)), tp, Uw(a), H([br, bx(Ww(a))], 0));
  }
  function b(a) {
    return c.h(a, sv);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.g = b;
  c.h = a;
  return c;
}(), Ky = function() {
  function a(a, b, c) {
    a = c.g ? c.g(a) : c.call(null, a);
    c = Kq.g(a);
    return Th(od.j(function(a, b) {
      return function(c, d) {
        var e = Jw(b, d);
        return od.j(function() {
          return function(a, b) {
            return Vh.j(a, b, Q.j(a, b, 0) + 1);
          };
        }(e, a, b), c, e);
      };
    }(a, c), Ie(Jj), b));
  }
  function b(a, b) {
    return c.j(a, b, sv);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.h = b;
  c.j = a;
  return c;
}();
var Ly, My, Ny, Oy;
function Py(a, b) {
  if (a ? a.Ad : a) {
    return a.Ad(a, b);
  }
  var c;
  c = Py[m(null == a ? null : a)];
  if (!c && (c = Py._, !c)) {
    throw s("ReadPort.take!", a);
  }
  return c.call(null, a, b);
}
function Qy(a, b, c) {
  if (a ? a.Bd : a) {
    return a.Bd(a, b, c);
  }
  var d;
  d = Qy[m(null == a ? null : a)];
  if (!d && (d = Qy._, !d)) {
    throw s("WritePort.put!", a);
  }
  return d.call(null, a, b, c);
}
function Ry(a) {
  if (a ? a.jd : a) {
    return a.jd(a);
  }
  var b;
  b = Ry[m(null == a ? null : a)];
  if (!b && (b = Ry._, !b)) {
    throw s("Channel.close!", a);
  }
  return b.call(null, a);
}
function Sy(a) {
  if (a ? a.Db : a) {
    return a.Db(a);
  }
  var b;
  b = Sy[m(null == a ? null : a)];
  if (!b && (b = Sy._, !b)) {
    throw s("Handler.active?", a);
  }
  return b.call(null, a);
}
function Ty(a) {
  if (a ? a.lb : a) {
    return a.lb(a);
  }
  var b;
  b = Ty[m(null == a ? null : a)];
  if (!b && (b = Ty._, !b)) {
    throw s("Handler.commit", a);
  }
  return b.call(null, a);
}
function Uy(a, b) {
  if (a ? a.ef : a) {
    return a.ef(0, b);
  }
  var c;
  c = Uy[m(null == a ? null : a)];
  if (!c && (c = Uy._, !c)) {
    throw s("Buffer.add!*", a);
  }
  return c.call(null, a, b);
}
var Vy = function() {
  function a(a, b) {
    if (null == b) {
      throw Error("Assert failed: " + v.g(ni.k(H([zh(new xf(null, "not", "not", 1044554643, null), zh(new xf(null, "nil?", "nil?", 1612038930, null), new xf(null, "itm", "itm", -713282527, null)))], 0))));
    }
    return Uy(a, b);
  }
  var b = null, b = function(b, d) {
    switch(arguments.length) {
      case 1:
        return b;
      case 2:
        return a.call(this, b, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.g = function(a) {
    return a;
  };
  b.h = a;
  return b;
}();
function Wy(a, b, c, d, e) {
  for (var f = 0;;) {
    if (f < e) {
      c[d + f] = a[b + f], f += 1;
    } else {
      break;
    }
  }
}
function Xy(a, b, c, d) {
  this.head = a;
  this.fa = b;
  this.length = c;
  this.n = d;
}
Xy.prototype.pop = function() {
  if (0 === this.length) {
    return null;
  }
  var a = this.n[this.fa];
  this.n[this.fa] = null;
  this.fa = (this.fa + 1) % this.n.length;
  this.length -= 1;
  return a;
};
Xy.prototype.unshift = function(a) {
  this.n[this.head] = a;
  this.head = (this.head + 1) % this.n.length;
  this.length += 1;
  return null;
};
function Yy(a, b) {
  a.length + 1 === a.n.length && a.resize();
  a.unshift(b);
}
Xy.prototype.resize = function() {
  var a = Array(2 * this.n.length);
  return this.fa < this.head ? (Wy(this.n, this.fa, a, 0, this.length), this.fa = 0, this.head = this.length, this.n = a) : this.fa > this.head ? (Wy(this.n, this.fa, a, 0, this.n.length - this.fa), Wy(this.n, 0, a, this.n.length - this.fa, this.head), this.fa = 0, this.head = this.length, this.n = a) : this.fa === this.head ? (this.head = this.fa = 0, this.n = a) : null;
};
function Zy(a, b) {
  for (var c = a.length, d = 0;;) {
    if (d < c) {
      var e = a.pop(), f;
      f = e;
      f = b.g ? b.g(f) : b.call(null, f);
      q(f) && a.unshift(e);
      d += 1;
    } else {
      break;
    }
  }
}
function $y(a) {
  if (!(0 < a)) {
    throw Error("Assert failed: Can't create a ring buffer of size 0\n" + v.g(ni.k(H([zh(new xf(null, "\x3e", "\x3e", 1085014381, null), new xf(null, "n", "n", -2092305744, null), 0)], 0))));
  }
  return new Xy(0, 0, 0, Array(a));
}
function az(a, b) {
  this.ra = a;
  this.Kc = b;
  this.G = 0;
  this.t = 2;
}
az.prototype.V = function() {
  return this.ra.length;
};
function bz(a) {
  return a.ra.length === a.Kc;
}
az.prototype.zd = function() {
  return this.ra.pop();
};
az.prototype.ef = function(a, b) {
  Yy(this.ra, b);
  return this;
};
function cz(a) {
  return new az($y(a), a);
}
;var dz;
function ez() {
  var a = aa.MessageChannel;
  "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && (a = function() {
    var a = document.createElement("iframe");
    a.style.display = "none";
    a.src = "";
    document.documentElement.appendChild(a);
    var b = a.contentWindow, a = b.document;
    a.open();
    a.write("");
    a.close();
    var c = "callImmediate" + Math.random(), d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host, a = ta(function(a) {
      if (a.origin == d || a.data == c) {
        this.port1.onmessage();
      }
    }, this);
    b.addEventListener("message", a, !1);
    this.port1 = {};
    this.port2 = {postMessage:function() {
      b.postMessage(c, d);
    }};
  });
  if ("undefined" !== typeof a) {
    var b = new a, c = {}, d = c;
    b.port1.onmessage = function() {
      c = c.next;
      var a = c.Pe;
      c.Pe = null;
      a();
    };
    return function(a) {
      d.next = {Pe:a};
      d = d.next;
      b.port2.postMessage(0);
    };
  }
  return "undefined" !== typeof document && "onreadystatechange" in document.createElement("script") ? function(a) {
    var b = document.createElement("script");
    b.onreadystatechange = function() {
      b.onreadystatechange = null;
      b.parentNode.removeChild(b);
      b = null;
      a();
      a = null;
    };
    document.documentElement.appendChild(b);
  } : function(a) {
    aa.setTimeout(a, 0);
  };
}
;var fz = $y(32), gz = !1, mC = !1;
function nC() {
  gz = !0;
  mC = !1;
  for (var a = 0;;) {
    var b = fz.pop();
    if (null != b && (b.q ? b.q() : b.call(null), 1024 > a)) {
      a += 1;
      continue;
    }
    break;
  }
  gz = !1;
  return 0 < fz.length ? oC.q ? oC.q() : oC.call(null) : null;
}
function oC() {
  var a = mC;
  if (q(q(a) ? gz : a)) {
    return null;
  }
  mC = !0;
  ea(aa.setImmediate) ? aa.setImmediate(nC) : (dz || (dz = ez()), dz(nC));
}
function pC(a) {
  Yy(fz, a);
  oC();
}
function qC(a, b) {
  setTimeout(a, b);
}
;var rC, tC = function sC(b) {
  "undefined" === typeof rC && (rC = function(b, d, e) {
    this.D = b;
    this.Uf = d;
    this.Fg = e;
    this.G = 0;
    this.t = 425984;
  }, rC.hb = !0, rC.gb = "cljs.core.async.impl.channels/t34042", rC.mb = function(b, d) {
    return Ce(d, "cljs.core.async.impl.channels/t34042");
  }, rC.prototype.Qc = function() {
    return this.D;
  }, rC.prototype.I = function() {
    return this.Fg;
  }, rC.prototype.J = function(b, d) {
    return new rC(this.D, this.Uf, d);
  });
  return new rC(b, sC, null);
};
function uC(a, b) {
  this.Vb = a;
  this.D = b;
}
function vC(a) {
  return Sy(a.Vb);
}
function wC(a) {
  if (a ? a.df : a) {
    return a.df();
  }
  var b;
  b = wC[m(null == a ? null : a)];
  if (!b && (b = wC._, !b)) {
    throw s("MMC.abort", a);
  }
  return b.call(null, a);
}
function xC(a, b, c, d, e, f, g) {
  this.Nc = a;
  this.Fd = b;
  this.zc = c;
  this.Ed = d;
  this.ra = e;
  this.closed = f;
  this.Cb = g;
}
xC.prototype.jd = function() {
  var a = this;
  if (!a.closed) {
    a.closed = !0;
    if (q(function() {
      var b = a.ra;
      return q(b) ? 0 === a.zc.length : b;
    }())) {
      var b = a.ra;
      a.Cb.g ? a.Cb.g(b) : a.Cb.call(null, b);
    }
    for (;;) {
      if (b = a.Nc.pop(), null != b) {
        if (b.Db(null)) {
          var c = b.lb(null), d = q(function() {
            var b = a.ra;
            return q(b) ? 0 < N(a.ra) : b;
          }()) ? a.ra.zd() : null;
          pC(function(a, b) {
            return function() {
              return a.g ? a.g(b) : a.call(null, b);
            };
          }(c, d, b, this));
        }
      } else {
        break;
      }
    }
  }
  return null;
};
xC.prototype.Ad = function(a, b) {
  var c = this;
  if (b.Db(null)) {
    if (null != c.ra && 0 < N(c.ra)) {
      for (var d = b.lb(null), e = tC(c.ra.zd());;) {
        if (!q(bz(c.ra))) {
          var f = c.zc.pop();
          if (null != f) {
            var g = f.Vb, h = f.D;
            if (g.Db(null)) {
              var l = g.lb(null);
              b.lb(null);
              pC(function(a) {
                return function() {
                  return a.g ? a.g(!0) : a.call(null, !0);
                };
              }(l, g, h, f, d, e, this));
              Rf(function() {
                var a = c.ra, b = h;
                return c.Cb.h ? c.Cb.h(a, b) : c.Cb.call(null, a, b);
              }()) && wC(this);
            }
            continue;
          }
        }
        break;
      }
      return e;
    }
    d = function() {
      for (;;) {
        var a = c.zc.pop();
        if (q(a)) {
          if (Sy(a.Vb)) {
            return a;
          }
        } else {
          return null;
        }
      }
    }();
    if (q(d)) {
      return e = Ty(d.Vb), b.lb(null), pC(function(a) {
        return function() {
          return a.g ? a.g(!0) : a.call(null, !0);
        };
      }(e, d, this)), tC(d.D);
    }
    if (q(c.closed)) {
      return q(c.ra) && (d = c.ra, c.Cb.g ? c.Cb.g(d) : c.Cb.call(null, d)), q(function() {
        var a = b.Db(null);
        return q(a) ? b.lb(null) : a;
      }()) ? (d = function() {
        var a = c.ra;
        return q(a) ? 0 < N(c.ra) : a;
      }(), d = q(d) ? c.ra.zd() : null, tC(d)) : null;
    }
    64 < c.Fd ? (c.Fd = 0, Zy(c.Nc, Sy)) : c.Fd += 1;
    if (!(1024 > c.Nc.length)) {
      throw Error("Assert failed: " + v.g("No more than " + v.g(1024) + " pending takes are allowed on a single channel.") + "\n" + v.g(ni.k(H([zh(new xf(null, "\x3c", "\x3c", 993667236, null), zh(new xf(null, ".-length", ".-length", -280799999, null), new xf(null, "takes", "takes", 298247964, null)), new xf("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", 1508600732, null))], 0))));
    }
    Yy(c.Nc, b);
  }
  return null;
};
xC.prototype.Bd = function(a, b, c) {
  var d = this;
  if (null == b) {
    throw Error("Assert failed: Can't put nil in on a channel\n" + v.g(ni.k(H([zh(new xf(null, "not", "not", 1044554643, null), zh(new xf(null, "nil?", "nil?", 1612038930, null), new xf(null, "val", "val", 1769233139, null)))], 0))));
  }
  if ((a = d.closed) || !c.Db(null)) {
    return tC(!a);
  }
  if (q(function() {
    var a = d.ra;
    return q(a) ? id(bz(d.ra)) : a;
  }())) {
    c.lb(null);
    for (c = Rf(function() {
      var a = d.ra;
      return d.Cb.h ? d.Cb.h(a, b) : d.Cb.call(null, a, b);
    }());;) {
      if (0 < d.Nc.length && 0 < N(d.ra)) {
        var e = d.Nc.pop();
        if (e.Db(null)) {
          var f = e.lb(null), g = d.ra.zd();
          pC(function(a, b) {
            return function() {
              return a.g ? a.g(b) : a.call(null, b);
            };
          }(f, g, e, c, a, this));
        } else {
          continue;
        }
      }
      break;
    }
    c && wC(this);
    return tC(!0);
  }
  e = function() {
    for (;;) {
      var a = d.Nc.pop();
      if (q(a)) {
        if (q(a.Db(null))) {
          return a;
        }
      } else {
        return null;
      }
    }
  }();
  if (q(e)) {
    return f = Ty(e), c.lb(null), pC(function(a) {
      return function() {
        return a.g ? a.g(b) : a.call(null, b);
      };
    }(f, e, a, this)), tC(!0);
  }
  64 < d.Ed ? (d.Ed = 0, Zy(d.zc, vC)) : d.Ed += 1;
  if (!(1024 > d.zc.length)) {
    throw Error("Assert failed: " + v.g("No more than " + v.g(1024) + " pending puts are allowed on a single channel. Consider using a windowed buffer.") + "\n" + v.g(ni.k(H([zh(new xf(null, "\x3c", "\x3c", 993667236, null), zh(new xf(null, ".-length", ".-length", -280799999, null), new xf(null, "puts", "puts", -1883877054, null)), new xf("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", 1508600732, null))], 0))));
  }
  Yy(d.zc, new uC(c, b));
  return null;
};
xC.prototype.df = function() {
  for (;;) {
    var a = this.zc.pop();
    if (null != a) {
      var b = a.Vb, c = a.D;
      if (b.Db(null)) {
        var d = b.lb(null);
        pC(function(a) {
          return function() {
            return a.g ? a.g(!0) : a.call(null, !0);
          };
        }(d, b, c, a, this));
      } else {
        continue;
      }
    }
    break;
  }
  Zy(this.zc, di(!1));
  return Ry(this);
};
function yC(a) {
  console.log(a);
  return null;
}
function zC(a, b, c) {
  b = (q(b) ? b : yC).call(null, c);
  return null == b ? a : Vy.h(a, b);
}
var AC = function() {
  function a(a, b, c) {
    return new xC($y(32), 0, $y(32), 0, a, !1, function() {
      return function(a) {
        return function() {
          function b(d, e) {
            try {
              return a.h ? a.h(d, e) : a.call(null, d, e);
            } catch (f) {
              return zC(d, c, f);
            }
          }
          function d(b) {
            try {
              return a.g ? a.g(b) : a.call(null, b);
            } catch (e) {
              return zC(b, c, e);
            }
          }
          var e = null, e = function(a, c) {
            switch(arguments.length) {
              case 1:
                return d.call(this, a);
              case 2:
                return b.call(this, a, c);
            }
            throw Error("Invalid arity: " + arguments.length);
          };
          e.g = d;
          e.h = b;
          return e;
        }();
      }(q(b) ? b.g ? b.g(Vy) : b.call(null, Vy) : Vy);
    }());
  }
  function b(a, b) {
    return d.j(a, b, null);
  }
  function c(a) {
    return d.h(a, null);
  }
  var d = null, d = function(d, f, g) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 2:
        return b.call(this, d, f);
      case 3:
        return a.call(this, d, f, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.g = c;
  d.h = b;
  d.j = a;
  return d;
}();
var BC, DC = function CC(b) {
  "undefined" === typeof BC && (BC = function(b, d, e) {
    this.f = b;
    this.ne = d;
    this.Eg = e;
    this.G = 0;
    this.t = 393216;
  }, BC.hb = !0, BC.gb = "cljs.core.async.impl.ioc-helpers/t33925", BC.mb = function(b, d) {
    return Ce(d, "cljs.core.async.impl.ioc-helpers/t33925");
  }, BC.prototype.Db = function() {
    return!0;
  }, BC.prototype.lb = function() {
    return this.f;
  }, BC.prototype.I = function() {
    return this.Eg;
  }, BC.prototype.J = function(b, d) {
    return new BC(this.f, this.ne, d);
  });
  return new BC(b, CC, null);
};
function EC(a) {
  try {
    return a[0].call(null, a);
  } catch (b) {
    throw b instanceof Object && a[6].jd(null), b;
  }
}
function FC(a, b, c) {
  c = c.Ad(null, DC(function(c) {
    a[2] = c;
    a[1] = b;
    return EC(a);
  }));
  return q(c) ? (a[2] = K.g ? K.g(c) : K.call(null, c), a[1] = b, $) : null;
}
function GC(a, b) {
  var c = a[6];
  null != b && c.Bd(null, b, DC(function() {
    return function() {
      return null;
    };
  }(c)));
  c.jd(null);
  return c;
}
function HC(a) {
  for (;;) {
    var b = a[4], c = lq.g(b), d = is.g(b), e = a[5];
    if (q(function() {
      var a = e;
      return q(a) ? id(b) : a;
    }())) {
      throw e;
    }
    if (q(function() {
      var a = e;
      return q(a) ? (a = c, q(a) ? e instanceof d : a) : a;
    }())) {
      a[1] = c;
      a[2] = e;
      a[5] = null;
      a[4] = R.k(b, lq, null, H([is, null], 0));
      break;
    }
    if (q(function() {
      var a = e;
      return q(a) ? id(c) && id(To.g(b)) : a;
    }())) {
      a[4] = ts.g(b);
    } else {
      if (q(function() {
        var a = e;
        return q(a) ? (a = id(c)) ? To.g(b) : a : a;
      }())) {
        a[1] = To.g(b);
        a[4] = R.j(b, To, null);
        break;
      }
      if (q(function() {
        var a = id(e);
        return a ? To.g(b) : a;
      }())) {
        a[1] = To.g(b);
        a[4] = R.j(b, To, null);
        break;
      }
      if (id(e) && id(To.g(b))) {
        a[1] = ys.g(b);
        a[4] = ts.g(b);
        break;
      }
      throw Error("No matching clause");
    }
  }
}
;var IC = function() {
  function a(a) {
    for (;;) {
      if (.5 > Math.random() && 15 > a) {
        a += 1;
      } else {
        return a;
      }
    }
  }
  function b() {
    return c.g(0);
  }
  var c = null, c = function(c) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a.call(this, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.q = b;
  c.g = a;
  return c;
}();
function JC(a, b, c) {
  this.key = a;
  this.D = b;
  this.forward = c;
  this.G = 0;
  this.t = 2155872256;
}
JC.prototype.P = function(a, b, c) {
  return zl(b, Fl, "[", " ", "]", c, this);
};
JC.prototype.S = function() {
  return Ad(Ad(Lf, this.D), this.key);
};
var KC = function() {
  function a(a, b, c) {
    c = Array(c + 1);
    for (var g = 0;;) {
      if (g < c.length) {
        c[g] = null, g += 1;
      } else {
        break;
      }
    }
    return new JC(a, b, c);
  }
  function b(a) {
    return c.j(null, null, a);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.g = b;
  c.j = a;
  return c;
}(), LC = function() {
  function a(a, b, c, g) {
    for (;;) {
      if (0 > c) {
        return a;
      }
      a: {
        for (;;) {
          var h = a.forward[c];
          if (q(h)) {
            if (h.key < b) {
              a = h;
            } else {
              break a;
            }
          } else {
            break a;
          }
        }
        a = void 0;
      }
      null != g && (g[c] = a);
      c -= 1;
    }
  }
  function b(a, b, f) {
    return c.p(a, b, f, null);
  }
  var c = null, c = function(c, e, f, g) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, f);
      case 4:
        return a.call(this, c, e, f, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.j = b;
  c.p = a;
  return c;
}();
function MC(a, b) {
  this.Gc = a;
  this.Gb = b;
  this.G = 0;
  this.t = 2155872256;
}
MC.prototype.P = function(a, b, c) {
  return zl(b, function() {
    return function(a) {
      return zl(b, Fl, "", " ", "", c, a);
    };
  }(this), "{", ", ", "}", c, this);
};
MC.prototype.S = function() {
  return function(a) {
    return function c(d) {
      return new Dh(null, function() {
        return function() {
          return null == d ? null : Zf(new V(null, 2, 5, W, [d.key, d.D], null), c(d.forward[0]));
        };
      }(a), null, null);
    };
  }(this)(this.Gc.forward[0]);
};
MC.prototype.put = function(a, b) {
  var c = Array(15), d = LC.p(this.Gc, a, this.Gb, c).forward[0];
  if (null != d && d.key === a) {
    return d.D = b;
  }
  d = IC.q();
  if (d > this.Gb) {
    for (var e = this.Gb + 1;;) {
      if (e <= d + 1) {
        c[e] = this.Gc, e += 1;
      } else {
        break;
      }
    }
    this.Gb = d;
  }
  for (d = KC.j(a, b, Array(d));;) {
    return 0 <= this.Gb ? (c = c[0].forward, d.forward[0] = c[0], c[0] = d) : null;
  }
};
MC.prototype.remove = function(a) {
  var b = Array(15), c = LC.p(this.Gc, a, this.Gb, b).forward[0];
  if (null != c && c.key === a) {
    for (a = 0;;) {
      if (a <= this.Gb) {
        var d = b[a].forward;
        d[a] === c && (d[a] = c.forward[a]);
        a += 1;
      } else {
        break;
      }
    }
    for (;;) {
      if (0 < this.Gb && null == this.Gc.forward[this.Gb]) {
        this.Gb -= 1;
      } else {
        return null;
      }
    }
  } else {
    return null;
  }
};
function NC(a) {
  for (var b = OC, c = b.Gc, d = b.Gb;;) {
    if (0 > d) {
      return c === b.Gc ? null : c;
    }
    var e;
    a: {
      for (e = c;;) {
        e = e.forward[d];
        if (null == e) {
          e = null;
          break a;
        }
        if (e.key >= a) {
          break a;
        }
      }
      e = void 0;
    }
    null != e ? (d -= 1, c = e) : d -= 1;
  }
}
var OC = new MC(KC.g(0), 0);
function PC(a) {
  var b = (new Date).valueOf() + a, c = NC(b), d = q(q(c) ? c.key < b + 10 : c) ? c.D : null;
  if (q(d)) {
    return d;
  }
  var e = AC.g(null);
  OC.put(b, e);
  qC(function(a, b, c) {
    return function() {
      OC.remove(c);
      return Ry(a);
    };
  }(e, d, b, c), a);
  return e;
}
;var RC = function QC(b) {
  "undefined" === typeof Ly && (Ly = function(b, d, e) {
    this.f = b;
    this.ne = d;
    this.Bg = e;
    this.G = 0;
    this.t = 393216;
  }, Ly.hb = !0, Ly.gb = "cljs.core.async/t30519", Ly.mb = function(b, d) {
    return Ce(d, "cljs.core.async/t30519");
  }, Ly.prototype.Db = function() {
    return!0;
  }, Ly.prototype.lb = function() {
    return this.f;
  }, Ly.prototype.I = function() {
    return this.Bg;
  }, Ly.prototype.J = function(b, d) {
    return new Ly(this.f, this.ne, d);
  });
  return new Ly(b, QC, null);
}, SC = function() {
  function a(a, b, c) {
    a = vf.h(a, 0) ? null : a;
    if (q(b) && !q(a)) {
      throw Error("Assert failed: buffer must be supplied when transducer is\n" + v.g(ni.k(H([new xf(null, "buf-or-n", "buf-or-n", -1646815050, null)], 0))));
    }
    return AC.j("number" === typeof a ? cz(a) : a, b, c);
  }
  function b(a, b) {
    return e.j(a, b, null);
  }
  function c(a) {
    return e.j(a, null, null);
  }
  function d() {
    return e.g(null);
  }
  var e = null, e = function(e, g, h) {
    switch(arguments.length) {
      case 0:
        return d.call(this);
      case 1:
        return c.call(this, e);
      case 2:
        return b.call(this, e, g);
      case 3:
        return a.call(this, e, g, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.q = d;
  e.g = c;
  e.h = b;
  e.j = a;
  return e;
}(), TC = RC(function() {
  return null;
}), UC = function() {
  function a(a, b, c, d) {
    a = Qy(a, b, RC(c));
    return q(a) ? (b = K.g ? K.g(a) : K.call(null, a), q(d) ? c.g ? c.g(b) : c.call(null, b) : pC(function(a) {
      return function() {
        return c.g ? c.g(a) : c.call(null, a);
      };
    }(b, a, a)), b) : !0;
  }
  function b(a, b, c) {
    return d.p(a, b, c, !0);
  }
  function c(a, b) {
    var c = Qy(a, b, TC);
    return q(c) ? K.g ? K.g(c) : K.call(null, c) : !0;
  }
  var d = null, d = function(d, f, g, h) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, g);
      case 4:
        return a.call(this, d, f, g, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.h = c;
  d.j = b;
  d.p = a;
  return d;
}();
function VC(a, b, c) {
  if (a ? a.bf : a) {
    return a.bf(a, b, c);
  }
  var d;
  d = VC[m(null == a ? null : a)];
  if (!d && (d = VC._, !d)) {
    throw s("Mult.tap*", a);
  }
  return d.call(null, a, b, c);
}
var WC = function() {
  function a(a, b, c) {
    VC(a, b, c);
    return b;
  }
  function b(a, b) {
    return c.j(a, b, !0);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.h = b;
  c.j = a;
  return c;
}(), YC = function XC(b, c) {
  "undefined" === typeof Ny && (Ny = function(b, c, f, g) {
    this.ch = b;
    this.f = c;
    this.Jd = f;
    this.Kd = g;
    this.G = 0;
    this.t = 393216;
  }, Ny.hb = !0, Ny.gb = "cljs.core.async/t33087", Ny.mb = function(b, c) {
    return Ce(c, "cljs.core.async/t33087");
  }, Ny.prototype.Bd = function(b, c, f) {
    return Qy(this.ch, c, f);
  }, Ny.prototype.Ad = function(b, c) {
    var f = this, g = this, h = Py(f.ch, function() {
      "undefined" === typeof Oy && (Oy = function(b, c, d, e, f, g, h) {
        this.me = b;
        this.Sf = c;
        this.Kd = d;
        this.ch = e;
        this.f = f;
        this.Jd = g;
        this.Dg = h;
        this.G = 0;
        this.t = 393216;
      }, Oy.hb = !0, Oy.gb = "cljs.core.async/t33090", Oy.mb = function() {
        return function(b, c) {
          return Ce(c, "cljs.core.async/t33090");
        };
      }(g), Oy.prototype.Db = function() {
        return function() {
          return Sy(this.me);
        };
      }(g), Oy.prototype.lb = function(b) {
        return function() {
          var c = this;
          return function(b) {
            return function(d) {
              d = null == d ? null : c.f.g ? c.f.g(d) : c.f.call(null, d);
              return b.g ? b.g(d) : b.call(null, d);
            };
          }(Ty(c.me), this, b);
        };
      }(g), Oy.prototype.I = function() {
        return function() {
          return this.Dg;
        };
      }(g), Oy.prototype.J = function() {
        return function(b, c) {
          return new Oy(this.me, this.Sf, this.Kd, this.ch, this.f, this.Jd, c);
        };
      }(g));
      return new Oy(c, g, f.Kd, f.ch, f.f, f.Jd, null);
    }());
    return q(q(h) ? null != (K.g ? K.g(h) : K.call(null, h)) : h) ? tC(function() {
      var b = K.g ? K.g(h) : K.call(null, h);
      return f.f.g ? f.f.g(b) : f.f.call(null, b);
    }()) : h;
  }, Ny.prototype.jd = function() {
    return Ry(this.ch);
  }, Ny.prototype.I = function() {
    return this.Kd;
  }, Ny.prototype.J = function(b, c) {
    return new Ny(this.ch, this.f, this.Jd, c);
  });
  return new Ny(c, b, XC, null);
};
var ZC = function() {
  function a(a, b) {
    return S.h(v, xi(a, b));
  }
  function b(a) {
    return S.h(v, a);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.g = b;
  c.h = a;
  return c;
}();
function $C(a, b) {
  if (0 >= b || b >= 2 + N(a)) {
    return qg.h(nj(Zf("", qi.h(v, B(a)))), "");
  }
  if (q(vf.h ? vf.h(1, b) : vf.call(null, 1, b))) {
    return new V(null, 1, 5, W, [a], null);
  }
  if (q(vf.h ? vf.h(2, b) : vf.call(null, 2, b))) {
    return new V(null, 2, 5, W, ["", a], null);
  }
  var c = b - 2;
  return qg.h(nj(Zf("", qj.j(nj(qi.h(v, B(a))), 0, c))), sh.h(a, c));
}
var aD = function() {
  function a(a, b, c) {
    if (vf.h("" + v.g(b), "/(?:)/")) {
      b = $C(a, c);
    } else {
      if (1 > c) {
        b = nj(("" + v.g(a)).split(b));
      } else {
        a: {
          for (var g = c, h = pg;;) {
            if (vf.h(g, 1)) {
              b = qg.h(h, a);
              break a;
            }
            var l = xl(b, a);
            if (q(l)) {
              var p = l, l = a.indexOf(p), p = a.substring(l + N(p)), g = g - 1, h = qg.h(h, a.substring(0, l));
              a = p;
            } else {
              b = qg.h(h, a);
              break a;
            }
          }
          b = void 0;
        }
      }
    }
    if (vf.h(0, c)) {
      a: {
        for (c = b;;) {
          if (vf.h("", xg(c))) {
            c = null == c ? null : fe(c);
          } else {
            break a;
          }
        }
        c = void 0;
      }
    } else {
      c = b;
    }
    return c;
  }
  function b(a, b) {
    return c.j(a, b, 0);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.h = b;
  c.j = a;
  return c;
}();
function bD(a) {
  a.beginPath();
}
function cD(a) {
  a.save();
  return a;
}
function dD(a) {
  a.restore();
  return a;
}
function eD(a, b, c) {
  a.translate(b, c);
  return a;
}
function fD(a) {
  a.stroke();
}
function gD(a, b) {
  var c = Jg(b) ? S.h(ji, b) : b, d = Q.h(c, Tr), e = Q.h(c, ap), f = Q.h(c, Ql), c = Q.h(c, $s);
  a.clearRect(c, f, e, d);
  return a;
}
function hD(a, b) {
  var c = Jg(b) ? S.h(ji, b) : b, d = Q.h(c, Tr), e = Q.h(c, ap), f = Q.h(c, Ql), c = Q.h(c, $s);
  a.strokeRect(c, f, e, d);
}
function iD(a, b) {
  var c = Jg(b) ? S.h(ji, b) : b, d = Q.h(c, Tr), e = Q.h(c, ap), f = Q.h(c, Ql), c = Q.h(c, $s);
  a.fillRect(c, f, e, d);
}
function jD(a, b) {
  var c = Jg(b) ? S.h(ji, b) : b, d = Q.h(c, Ql), e = Q.h(c, $s), c = Q.h(c, Vv);
  a.fillText(c, e, d);
  return a;
}
function kD(a, b) {
  a.fillStyle = Bh(b);
}
function lD(a, b) {
  a.strokeStyle = Bh(b);
}
function mD(a, b) {
  a.globalAlpha = b;
  return a;
}
function nD(a, b) {
  a.textAlign = Bh(b);
  return a;
}
function oD(a) {
  a.textBaseline = Bh(Jo);
  return a;
}
var pD = function() {
  function a(a, b, c, g) {
    a.drawImage(b, c, g);
    return a;
  }
  function b(a, b, c) {
    var g = Jg(c) ? S.h(ji, c) : c;
    c = Q.h(g, it);
    var h = Q.h(g, kt), l = Q.h(g, $s), p = Q.h(g, Ql), r = Q.h(g, om), t = Q.h(g, Bm), u = Q.h(g, ap), A = Q.h(g, cp), y = Q.h(g, Bp), C = Q.h(g, Tr), F = Q.h(g, Is), J = Q.h(g, Qs), g = N(g);
    if (q(vf.h ? vf.h(2, g) : vf.call(null, 2, g))) {
      a.drawImage(b, l, p);
    } else {
      if (q(vf.h ? vf.h(4, g) : vf.call(null, 4, g))) {
        a.drawImage(b, l, p, u, C);
      } else {
        if (q(vf.h ? vf.h(8, g) : vf.call(null, 8, g))) {
          a.drawImage(b, J, A, h, c, t, y, F, r);
        } else {
          throw Error("No matching clause: " + v.g(g));
        }
      }
    }
    return a;
  }
  var c = null, c = function(c, e, f, g) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, f);
      case 4:
        return a.call(this, c, e, f, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.j = b;
  c.p = a;
  return c;
}(), qD = function() {
  function a(a, b, c, g, h, l, p) {
    a.bezierCurveTo(b, c, g, h, l, p);
    return a;
  }
  function b(a, b) {
    var c = Jg(b) ? S.h(ji, b) : b, g = Q.h(c, Ql), h = Q.h(c, $s), l = Q.h(c, nt), p = Q.h(c, Ir), r = Q.h(c, Bs), c = Q.h(c, Ar);
    a.bezierCurveTo(c, r, p, l, h, g);
    return a;
  }
  var c = null, c = function(c, e, f, g, h, l, p) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 7:
        return a.call(this, c, e, f, g, h, l, p);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.h = b;
  c.$a = a;
  return c;
}();
function rD(a, b) {
  var c = Jg(b) ? S.h(ji, b) : b, d = Q.h(c, Vv), e = Q.h(c, Ql), c = Q.h(c, $s);
  cD(a);
  eD(a, c, e);
  a.rotate(Math.PI / 2);
  jD(a, new n(null, 3, [$s, 0, Ql, 0, Vv, d], null));
  dD(a);
}
function sD(a) {
  return function(b, c, d, e, f, g, h) {
    var l = Sw(b), p = O.j(l, 0, null), r = O.j(l, 1, null), t = O.j(l, 2, null), u = Q.h(a, p), A = qi.h(D, Gw(sv.g(h)));
    h = Ky.h(h, A);
    var y = f - 30, C = f - 5, F = ch(g, 3), J = 2 * ch(g, 3);
    cD(c);
    eD(c, d, e);
    c.font = "small-caps 14px sans-serif";
    nD(c, Gs);
    rD(c, new n(null, 3, [Vv, "votes %", $s, y, Ql, J + 14], null));
    rD(c, new n(null, 3, [Vv, "votes per bit", $s, C, Ql, J + 14], null));
    c.font = "small-caps bold 14px sans-serif";
    oD(c);
    nD(c, Tv);
    jD(c, new n(null, 3, [Vv, "Sentences", $s, 5, Ql, 5], null));
    jD(c, new n(null, 3, [Vv, "Current sentence", $s, 5, Ql, F], null));
    jD(c, new n(null, 3, [Vv, "Predictions", $s, 5, Ql, J], null));
    c.font = "12px sans-serif";
    for (var L = B(gi(oj, ri.h(9, si.h(p - 4, gi(oj, a))))), I = null, P = 0, T = 0;;) {
      if (T < P) {
        var M = I.F(null, T), ga = O.j(M, 0, null), Y = O.j(M, 1, null), M = O.j(Y, 0, null), Y = O.j(Y, 1, null), ga = 5 + 24 * (ga + 1);
        M === p && (kD(c, "#eee"), iD(c, new n(null, 4, [$s, 0, Ql, ga - ch(24, 4), ap, f, Tr, 24], null)), kD(c, "#000"));
        jD(c, new n(null, 3, [Vv, ZC.h(" ", Y), $s, 5, Ql, ga], null));
        T += 1;
      } else {
        if (L = B(L)) {
          U(L) ? (P = x(L), L = z(L), I = P, P = N(P)) : (P = D(L), I = O.j(P, 0, null), T = O.j(P, 1, null), P = O.j(T, 0, null), T = O.j(T, 1, null), I = 5 + 24 * (I + 1), P === p && (kD(c, "#eee"), iD(c, new n(null, 4, [$s, 0, Ql, I - ch(24, 4), ap, f, Tr, 24], null)), kD(c, "#000")), jD(c, new n(null, 3, [Vv, ZC.h(" ", T), $s, 5, Ql, I], null)), L = G(L), I = null, P = 0), T = 0;
        } else {
          break;
        }
      }
    }
    L = B(gi(oj, u));
    I = null;
    for (T = P = 0;;) {
      if (T < P) {
        M = I.F(null, T), ga = O.j(M, 0, null), M = O.j(M, 1, null), Y = F + 24 * (ga + 1), ga === r && (kD(c, "#eee"), iD(c, new n(null, 4, [$s, 0, Ql, Y - ch(24, 4), ap, f, Tr, 24], null)), kD(c, "#000")), jD(c, new n(null, 3, [Vv, M, $s, 5, Ql, Y], null)), T += 1;
      } else {
        if (L = B(L)) {
          U(L) ? (P = x(L), L = z(L), I = P, P = N(P)) : (P = D(L), I = O.j(P, 0, null), P = O.j(P, 1, null), T = F + 24 * (I + 1), I === r && (kD(c, "#eee"), iD(c, new n(null, 4, [$s, 0, Ql, T - ch(24, 4), ap, f, Tr, 24], null)), kD(c, "#000")), jD(c, new n(null, 3, [Vv, P, $s, 5, Ql, T], null)), L = G(L), I = null, P = 0), T = 0;
        } else {
          break;
        }
      }
    }
    dD(c);
    L = SC.g(1);
    pC(function(a, h, l, r, p, t, u, y, M, A, F, C, J, I, Y) {
      return function() {
        var L = function() {
          return function(a) {
            return function() {
              function b(c) {
                for (;;) {
                  var d;
                  a: {
                    try {
                      for (;;) {
                        var e = a(c);
                        if (!Z(e, $)) {
                          d = e;
                          break a;
                        }
                      }
                    } catch (f) {
                      if (f instanceof Object) {
                        c[5] = f;
                        HC(c);
                        d = $;
                        break a;
                      }
                      throw f;
                    }
                    d = void 0;
                  }
                  if (!Z(d, $)) {
                    return d;
                  }
                }
              }
              function c() {
                var a = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
                a[0] = d;
                a[1] = 1;
                return a;
              }
              var d = null, d = function(a) {
                switch(arguments.length) {
                  case 0:
                    return c.call(this);
                  case 1:
                    return b.call(this, a);
                }
                throw Error("Invalid arity: " + arguments.length);
              };
              d.q = c;
              d.g = b;
              return d;
            }();
          }(function(a, h, l, r, p, t, u, y, M, A, F, C, J, I, Y) {
            return function(a) {
              var h = a[1];
              if (7 === h) {
                var h = a[2], l = dD(c);
                a[7] = h;
                return GC(a, l);
              }
              if (20 === h) {
                return h = a[8], h = S.h(ji, h), a[2] = h, a[1] = 22, $;
              }
              if (1 === h) {
                return h = a[9], h = a[10], h = yo.g(b), h = Qw(h, y, 8), l = Lp.g(h), a[9] = h, a[10] = l, a[1] = q(l) ? 2 : 3, $;
              }
              if (4 === h) {
                var h = a[2], l = cD(c), r = eD(c, d, e), p = sg([$s, Ql, ap, Tr], [0, I + Y, f, g]), p = gD(c, p), t = oD(c), h = B(gi(oj, h));
                a[11] = r;
                a[12] = 0;
                a[13] = 0;
                a[14] = l;
                a[15] = p;
                a[16] = t;
                a[17] = h;
                a[18] = null;
                a[2] = null;
                a[1] = 6;
                return $;
              }
              if (15 === h) {
                return a[2] = null, a[1] = 16, $;
              }
              if (21 === h) {
                return h = a[8], a[2] = h, a[1] = 22, $;
              }
              if (13 === h) {
                var r = a[12], p = a[13], t = a[19], h = a[17], l = a[18], u = a[2], C = Q.h(u, Hv), J = Q.h(u, Iq), u = Q.h(u, jp), L = I + Y * (t + 1), t = nD(c, Tv), u = sg([Vv, $s, Ql], [u, M, L]), u = jD(c, u), P = nD(c, Gs), ga = [Vv, $s, Ql], J = lx.g(100 * J), J = ["" + v.g(J), A, L], J = sg(ga, J), J = jD(c, J), ga = [Vv, $s, Ql], C = lx.g(C), C = ["" + v.g(C), F, L], C = sg(ga, C), C = jD(c, C);
                a[20] = J;
                a[21] = C;
                a[12] = r;
                a[13] = p + 1;
                a[17] = h;
                a[22] = u;
                a[18] = l;
                a[23] = P;
                a[24] = t;
                a[2] = null;
                a[1] = 6;
                return $;
              }
              return 22 === h ? (h = a[25], l = a[26], r = a[2], t = Q.h(r, Hv), u = Q.h(r, Iq), r = Q.h(r, jp), C = I + Y * (l + 1), l = nD(c, Tv), r = sg([Vv, $s, Ql], [r, M, C]), r = jD(c, r), p = nD(c, Gs), P = [Vv, $s, Ql], u = lx.g(100 * u), u = ["" + v.g(u), A, C], u = sg(P, u), u = jD(c, u), P = [Vv, $s, Ql], t = lx.g(t), t = ["" + v.g(t), F, C], t = sg(P, t), t = jD(c, t), h = G(h), a[27] = l, a[12] = 0, a[13] = 0, a[28] = u, a[17] = h, a[29] = p, a[18] = null, a[30] = t, a[31] = r, a[2] = 
              null, a[1] = 6, $) : 6 === h ? (r = a[12], p = a[13], a[1] = q(p < r) ? 8 : 9, $) : 17 === h ? (h = a[25], l = x(h), h = z(h), r = N(l), a[12] = r, a[13] = 0, a[17] = h, a[18] = l, a[2] = null, a[1] = 6, $) : 3 === h ? (h = a[9], a[2] = h, a[1] = 4, $) : 12 === h ? (h = a[32], a[2] = h, a[1] = 13, $) : 2 === h ? (h = a[10], FC(a, 5, h)) : 19 === h ? (h = a[2], a[2] = h, a[1] = 16, $) : 11 === h ? (h = a[32], h = S.h(ji, h), a[2] = h, a[1] = 13, $) : 9 === h ? (h = a[17], h = B(h), a[25] = 
              h, a[1] = h ? 14 : 15, $) : 5 === h ? (h = a[2], a[2] = h, a[1] = 4, $) : 14 === h ? (h = a[25], h = U(h), a[1] = h ? 17 : 18, $) : 16 === h ? (h = a[2], a[2] = h, a[1] = 10, $) : 10 === h ? (h = a[2], a[2] = h, a[1] = 7, $) : 18 === h ? (h = a[25], h = D(h), l = O.j(h, 0, null), h = O.j(h, 1, null), r = Jg(h), a[8] = h, a[26] = l, a[1] = r ? 20 : 21, $) : 8 === h ? (p = a[13], l = a[18], h = w.h(l, p), t = O.j(h, 0, null), h = O.j(h, 1, null), l = Jg(h), a[19] = t, a[32] = h, a[1] = 
              l ? 11 : 12, $) : null;
            };
          }(a, h, l, r, p, t, u, y, M, A, F, C, J, I, Y), a, h, l, r, p, t, u, y, M, A, F, C, J, I, Y);
        }(), P = function() {
          var b = L.q ? L.q() : L.call(null);
          b[6] = a;
          return b;
        }();
        return EC(P);
      };
    }(L, l, p, r, t, u, A, h, 5, y, C, 5, F, J, 24));
    return L;
  };
}
;function tD(a) {
  var b = a.type;
  if (!ba(b)) {
    return null;
  }
  switch(b.toLowerCase()) {
    case "checkbox":
    ;
    case "radio":
      return a.checked ? a.value : null;
    case "select-one":
      return b = a.selectedIndex, 0 <= b ? a.options[b].value : null;
    case "select-multiple":
      for (var b = [], c, d = 0;c = a.options[d];d++) {
        c.selected && b.push(c.value);
      }
      return b.length ? b : null;
    default:
      return ba(a.value) ? a.value : null;
  }
}
;var uD, vD, wD, xD, yD, zD, AD, BD, CD, DD, ED, FD, GD, HD, ID, JD, KD = {}.hasOwnProperty;
BD = function(a) {
  console.log(a);
};
ED = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
DD = /^(svg|g|rect|circle|clipPath|path|line|polygon|polyline|text|textPath)$/;
FD = /^\s+$/;
CD = /:(.+)/;
JD = {sh:"http://www.w3.org/1999/xhtml", Bh:"http://www.w3.org/1999/xlink", ih:"http://www.w3.org/2000/svg", xml:"http://www.w3.org/XML/1998/namespace", Ch:"http://www.w3.org/2000/xmlns"};
zD = function(a) {
  var b, c;
  c = a.split(":");
  b = c[0];
  c = c[1];
  return null != c ? [JD[b] || b, c] : a.match(DD) ? [JD.ih, a] : [JD.sh, a];
};
wD = function(a) {
  return ":*:" === a[0];
};
HD = function(a) {
  return null != a && a instanceof LD;
};
xD = function(a) {
  return null != a && !1;
};
uD = function(a) {
  return null != a && null != a.forEach;
};
yD = function(a) {
  return null != a && !uD(a) && !HD(a) && !xD(a) && a instanceof Object;
};
vD = function(a) {
  return null != a && null != a.nodeType;
};
GD = function(a) {
  return null != a && null != a.substring;
};
AD = function(a) {
  return null != a && null != a.toFixed;
};
ID = function(a) {
  return 8 === a.nodeType || 3 === a.nodeType && a.textContent.match(FD);
};
function MD(a, b) {
  var c, d, e, f, g;
  if (null != b.style) {
    f = b.style;
    var h;
    h = [];
    for (g in f) {
      KD.call(f, g) && (c = f[g], h.push(a.style[Na(g)] = c));
    }
    delete b.style;
  }
  if (null != b.properties) {
    f = b.properties;
    c = [];
    for (e in f) {
      KD.call(f, e) && (g = f[e], c.push(a[e] = g));
    }
    delete b.properties;
  }
  uD(b["class"]) && (a.setAttribute("class", b["class"].join(" ")), delete b["class"]);
  g = [];
  for (d in b) {
    KD.call(b, d) && (f = b[d], null != f ? (c = d.split(CD), e = c[0], c = c[1], null != c ? g.push(a.setAttributeNS(JD[e] || e, c, f)) : g.push(a.setAttribute(d, f))) : g.push(a.removeAttribute(d)));
  }
}
function ND(a, b) {
  return null != b ? a.__singult_data__ = b : a.__singult_data__;
}
function OD(a) {
  return AD(a) ? a.toString() : uD(a) ? PD(a) : a;
}
function PD(a) {
  var b, c, d, e, f;
  f = a[0];
  d = yD(a[1]) ? [a[1], a.slice(2)] : [{}, a.slice(1)];
  a = d[0];
  d = d[1];
  e = f.match(ED);
  f = e[1];
  b = e[2];
  e = e[3];
  null != b && (a.id = b);
  null != e && (b = e.split("."), uD(a["class"]) ? a["class"] = a["class"].concat(b) : GD(a["class"]) ? a["class"] = b.concat([a["class"]]) : null == a["class"] && (a["class"] = b));
  f = zD(f);
  b = f[0];
  f = f[1];
  c = [];
  d.forEach(function(a) {
    if (null != a) {
      return wD(a) ? a.slice(1).forEach(function(a) {
        return c.push(OD(a));
      }) : c.push(OD(a));
    }
  });
  return{Pg:b, tag:f, Me:a, children:c};
}
function QD(a) {
  var b, c;
  if (HD(a)) {
    throw Error("Unify must be the first and only child of its parent.");
  }
  if (xD(a)) {
    return null;
  }
  if (GD(a)) {
    return document.createTextNode(a);
  }
  if (vD(a)) {
    return a;
  }
  b = document.createElementNS(a.Pg, a.tag);
  MD(b, a.Me);
  HD(c = a.children[0]) ? null != c.bb ? c.data.forEach(function(a) {
    var e;
    e = c.bb(a);
    ND(e, a);
    return b.appendChild(e);
  }) : c.data.forEach(function(a) {
    var e;
    e = QD(OD(c.cb(a)));
    ND(e, a);
    return b.appendChild(e);
  }) : a.children.forEach(function(a) {
    a = QD(a);
    if (null != a) {
      return b.appendChild(a);
    }
  });
  return b;
}
function LD(a, b, c, d, e, f, g) {
  this.data = a;
  this.cb = b;
  this.qb = c;
  this.bb = d;
  this.update = e;
  this.nb = f;
  this.tg = g;
  return this;
}
function RD(a, b) {
  var c, d, e, f, g, h, l, p, r, t, u, A, y;
  g = b.bb || function(c) {
    c = QD(OD(b.cb(c)));
    a.appendChild(c);
    return c;
  };
  y = b.update || function(a, c) {
    return SD(a, OD(b.cb(c)));
  };
  h = b.nb || function(b) {
    return a.removeChild(b);
  };
  r = b.qb || function(a, b) {
    return b;
  };
  c = a.childNodes;
  f = function(a, b) {
    return "\x00" + r(a, b);
  };
  u = function(a, b) {
    return f(ND(a), b);
  };
  t = function(a, c) {
    var d;
    if (b.tg) {
      return d = y(a, c), ND(d, c);
    }
    d = ND(a);
    if (null != d.O ? !d.O(d, c) : d !== c) {
      return d = y(a, c), ND(d, c);
    }
  };
  l = function(b, d) {
    d < c.length ? a.insertBefore(b, c[d]) : a.appendChild(b);
  };
  e = {};
  b.data.forEach(function(a, b) {
    var c;
    c = f(a, b);
    return e[c] = a;
  });
  A = {};
  for (d = 0;d < c.length;) {
    p = u(c[d], d), e[p] && (A[p] = c[d]), d += 1;
  }
  b.data.forEach(function(a, b) {
    var d, e, r;
    r = (d = b < c.length ? c[b] : void 0) ? u(d, b) : void 0;
    e = f(a, b);
    if (null == d) {
      return d = g(a), ND(d, a);
    }
    if (r === e) {
      return t(c[b], a);
    }
    A[r] || h(d);
    if (A[e]) {
      return d = A[e], l(d, b), t(d, a);
    }
    d = g(a);
    l(d, b);
    return ND(d, a);
  });
  for (d = b.data.length;d < c.length;) {
    h(c[d]);
  }
}
function SD(a, b) {
  var c, d, e, f;
  if (HD(b)) {
    RD(a, b);
  } else {
    if (!xD(b)) {
      if (a.nodeName.toLowerCase() !== b.tag.toLowerCase()) {
        throw BD(a), BD(b), Error("Cannot merge $e into node of different type");
      }
      MD(a, b.Me);
      if (a.hasChildNodes()) {
        for (e = d = f = a.childNodes.length - 1;0 >= f ? 0 >= d : 0 <= d;e = 0 >= f ? ++d : --d) {
          c = a.childNodes[e], ID(c) && a.removeChild(c);
        }
      }
      if (HD(b.children[0])) {
        SD(a, b.children[0]);
      } else {
        if (a.childNodes.length > b.children.length) {
          for (e = c = d = a.childNodes.length - 1;0 >= d ? 0 >= c : 0 <= c;e = 0 >= d ? ++c : --c) {
            a.removeChild(a.childNodes[e]);
          }
        }
        for (e = 0;e < b.children.length;) {
          d = b.children[e] || "";
          c = a.childNodes[e];
          if (GD(d)) {
            null != c ? c.textContent = d : a.appendChild(document.createTextNode(d));
          } else {
            if (!xD(d)) {
              if (yD(d)) {
                null != c ? SD(c, d) : a.appendChild(QD(d));
              } else {
                throw BD(c), BD(d), Error("Cannot merge children");
              }
            }
          }
          e += 1;
        }
      }
    }
  }
  return a;
}
;function TD(a, b, c, d, e, f, g, h, l) {
  this.data = a;
  this.cb = b;
  this.qb = c;
  this.bb = d;
  this.update = e;
  this.nb = f;
  this.Fb = g;
  this.m = h;
  this.l = l;
  this.t = 2229667594;
  this.G = 8192;
  7 < arguments.length ? (this.m = h, this.l = l) : this.l = this.m = null;
}
k = TD.prototype;
k.N = function(a, b) {
  return Md.j(this, b, null);
};
k.L = function(a, b, c) {
  switch(b instanceof X ? b.ca : null) {
    case "force-update?":
      return this.Fb;
    case "exit":
      return this.nb;
    case "update":
      return this.update;
    case "enter":
      return this.bb;
    case "key-fn":
      return this.qb;
    case "mapping":
      return this.cb;
    case "data":
      return this.data;
    default:
      return Q.j(this.l, b, c);
  }
};
k.P = function(a, b, c) {
  return zl(b, function() {
    return function(a) {
      return zl(b, Fl, "", " ", "", c, a);
    };
  }(this), "#singult.core.Unify{", ", ", "}", c, Rh.h(new V(null, 7, 5, W, [new V(null, 2, 5, W, [$v, this.data], null), new V(null, 2, 5, W, [pp, this.cb], null), new V(null, 2, 5, W, [rr, this.qb], null), new V(null, 2, 5, W, [cr, this.bb], null), new V(null, 2, 5, W, [kq, this.update], null), new V(null, 2, 5, W, [Bo, this.nb], null), new V(null, 2, 5, W, [pv, this.Fb], null)], null), this.l));
};
k.I = function() {
  return this.m;
};
k.V = function() {
  return 7 + N(this.l);
};
k.R = function() {
  var a = this.w;
  return null != a ? a : this.w = a = th(this);
};
k.O = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && Bj(this, b) : b) ? !0 : !1;
};
k.Ra = function(a, b) {
  return Lg(new Xk(null, new n(null, 7, [Bo, null, pp, null, kq, null, cr, null, rr, null, pv, null, $v, null], null), null), b) ? tg.h(ag(Oi.h(Jj, this), this.m), b) : new TD(this.data, this.cb, this.qb, this.bb, this.update, this.nb, this.Fb, this.m, Zh(tg.h(this.l, b)), null);
};
k.Ia = function(a, b, c) {
  return q(Z.h ? Z.h($v, b) : Z.call(null, $v, b)) ? new TD(c, this.cb, this.qb, this.bb, this.update, this.nb, this.Fb, this.m, this.l, null) : q(Z.h ? Z.h(pp, b) : Z.call(null, pp, b)) ? new TD(this.data, c, this.qb, this.bb, this.update, this.nb, this.Fb, this.m, this.l, null) : q(Z.h ? Z.h(rr, b) : Z.call(null, rr, b)) ? new TD(this.data, this.cb, c, this.bb, this.update, this.nb, this.Fb, this.m, this.l, null) : q(Z.h ? Z.h(cr, b) : Z.call(null, cr, b)) ? new TD(this.data, this.cb, this.qb, 
  c, this.update, this.nb, this.Fb, this.m, this.l, null) : q(Z.h ? Z.h(kq, b) : Z.call(null, kq, b)) ? new TD(this.data, this.cb, this.qb, this.bb, c, this.nb, this.Fb, this.m, this.l, null) : q(Z.h ? Z.h(Bo, b) : Z.call(null, Bo, b)) ? new TD(this.data, this.cb, this.qb, this.bb, this.update, c, this.Fb, this.m, this.l, null) : q(Z.h ? Z.h(pv, b) : Z.call(null, pv, b)) ? new TD(this.data, this.cb, this.qb, this.bb, this.update, this.nb, c, this.m, this.l, null) : new TD(this.data, this.cb, this.qb, 
  this.bb, this.update, this.nb, this.Fb, this.m, R.j(this.l, b, c), null);
};
k.S = function() {
  return B(Rh.h(new V(null, 7, 5, W, [new V(null, 2, 5, W, [$v, this.data], null), new V(null, 2, 5, W, [pp, this.cb], null), new V(null, 2, 5, W, [rr, this.qb], null), new V(null, 2, 5, W, [cr, this.bb], null), new V(null, 2, 5, W, [kq, this.update], null), new V(null, 2, 5, W, [Bo, this.nb], null), new V(null, 2, 5, W, [pv, this.Fb], null)], null), this.l));
};
k.J = function(a, b) {
  return new TD(this.data, this.cb, this.qb, this.bb, this.update, this.nb, this.Fb, b, this.l, this.w);
};
k.U = function(a, b) {
  return Eg(b) ? Pd(this, w.h(b, 0), w.h(b, 1)) : od.j(Ad, this, b);
};
var VD = function UD(b) {
  if (b instanceof TD) {
    var c = Jg(b) ? S.h(ji, b) : b, d = Q.h(c, pv), e = Q.h(c, Bo), f = Q.h(c, kq), g = Q.h(c, cr), h = Q.h(c, rr), l = Q.h(c, pp), p = Q.h(c, $v), r = function() {
      for (var b = [], c = B(p), d = null, e = 0, f = 0;;) {
        if (f < e) {
          var g = d.F(null, f);
          b.push(g);
          f += 1;
        } else {
          if (c = B(c)) {
            d = c, U(d) ? (c = x(d), f = z(d), d = c, e = N(c), c = f) : (c = D(d), b.push(c), c = G(d), d = null, e = 0), f = 0;
          } else {
            break;
          }
        }
      }
      return b;
    }();
    return new LD(r, function(b, c, d, e, f, g, h, l) {
      return function(b) {
        return UD(l.g ? l.g(b) : l.call(null, b));
      };
    }(b, c, d, e, f, g, h, l, p, r), h, g, f, e, d);
  }
  if (b instanceof X) {
    return Bh(b);
  }
  if (Dg(b)) {
    c = {};
    b = B(b);
    d = null;
    for (f = e = 0;;) {
      if (f < e) {
        h = d.F(null, f);
        g = O.j(h, 0, null);
        h = O.j(h, 1, null);
        g = UD(g);
        if ("string" !== typeof g) {
          throw "Cannot convert; JavaScript map keys must be strings";
        }
        c[g] = UD(h);
        f += 1;
      } else {
        if (b = B(b)) {
          if (U(b)) {
            e = x(b), b = z(b), d = e, e = N(e);
          } else {
            e = D(b);
            d = O.j(e, 0, null);
            e = O.j(e, 1, null);
            d = UD(d);
            if ("string" !== typeof d) {
              throw "Cannot convert; JavaScript map keys must be strings";
            }
            c[d] = UD(e);
            b = G(b);
            d = null;
            e = 0;
          }
          f = 0;
        } else {
          break;
        }
      }
    }
    return c;
  }
  if (Jg(b)) {
    c = [];
    c.push(":*:");
    b = B(b);
    d = null;
    for (f = e = 0;;) {
      if (f < e) {
        g = d.F(null, f), c.push(UD(g)), f += 1;
      } else {
        if (b = B(b)) {
          d = b, U(d) ? (b = x(d), f = z(d), d = b, e = N(b), b = f) : (b = D(d), c.push(UD(b)), b = G(d), d = null, e = 0), f = 0;
        } else {
          break;
        }
      }
    }
    return c;
  }
  if (Ag(b)) {
    c = [];
    b = B(b);
    d = null;
    for (f = e = 0;;) {
      if (f < e) {
        g = d.F(null, f), c.push(UD(g)), f += 1;
      } else {
        if (b = B(b)) {
          d = b, U(d) ? (b = x(d), f = z(d), d = b, e = N(b), b = f) : (b = D(d), c.push(UD(b)), b = G(d), d = null, e = 0), f = 0;
        } else {
          break;
        }
      }
    }
    return c;
  }
  return b;
};
function WD(a, b) {
  if (null == b) {
    return null;
  }
  var c;
  c = VD(b);
  c = OD.g ? OD.g(c) : OD.call(null, c);
  return SD.h ? SD.h(a, c) : SD.call(null, a, c);
}
var XD = function() {
  function a(a, d, e) {
    var f = null;
    2 < arguments.length && (f = H(Array.prototype.slice.call(arguments, 2), 0));
    return b.call(this, a, d, f);
  }
  function b(a, b, e) {
    var f = Jg(e) ? S.h(ji, e) : e;
    e = Q.h(f, pv);
    var g = Q.h(f, Bo), h = Q.h(f, kq), l = Q.h(f, cr), f = Q.h(f, rr);
    return new TD(a, b, f, l, h, g, e);
  }
  a.B = 2;
  a.o = function(a) {
    var d = D(a);
    a = G(a);
    var e = D(a);
    a = E(a);
    return b(d, e, a);
  };
  a.k = b;
  return a;
}();
q("undefined" != typeof NodeList) && (NodeList.prototype.Ye = !0, NodeList.prototype.S = function() {
  return H.h(this, 0);
});
HTMLCollection.prototype.Ye = !0;
HTMLCollection.prototype.S = function() {
  return H.h(this, 0);
};
function YD(a) {
  if (a ? a.Sd : a) {
    return a.Sd(a);
  }
  var b;
  b = YD[m(null == a ? null : a)];
  if (!b && (b = YD._, !b)) {
    throw s("IDom.-\x3edom", a);
  }
  return b.call(null, a);
}
V.prototype.Sd = function() {
  var a;
  a = VD(this);
  a = OD.g ? OD.g(a) : OD.call(null, a);
  return QD.g ? QD.g(a) : QD.call(null, a);
};
YD.string = function(a) {
  return ZD.g ? ZD.g(a) : ZD.call(null, a);
};
q("undefined" != typeof Node) && (Node.prototype.Sd = function() {
  return this;
});
var ZD = function() {
  function a(a, b) {
    return YD(b).querySelector(a);
  }
  function b(a) {
    return document.querySelector(a);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.g = b;
  c.h = a;
  return c;
}(), $D = function() {
  function a(a, b, c) {
    var d = YD(a), l = Bh(b);
    b = "string" === typeof c ? c : "number" === typeof c ? q((new Xk(null, new n(null, 6, [wo, null, Jo, null, wp, null, Gs, null, Nv, null, Tv, null], null), null)).call(null, Ch.g(b))) ? "" + v.g(c) + "px" : c : null;
    da(l) ? Ec(d, b, l) : qb(l, ua(Ec, d));
    return a;
  }
  function b(a, b) {
    var c = YD(a);
    if (b instanceof X) {
      a: {
        var h = Bh(b), l = xb(c);
        if (l.defaultView && l.defaultView.getComputedStyle && (c = l.defaultView.getComputedStyle(c, null))) {
          c = c[h] || c.getPropertyValue(h) || "";
          break a;
        }
        c = "";
      }
      return c;
    }
    if (Dg(b)) {
      for (var h = B(b), l = null, p = 0, r = 0;;) {
        if (r < p) {
          var t = l.F(null, r), u = O.j(t, 0, null), t = O.j(t, 1, null);
          d.j(c, u, t);
          r += 1;
        } else {
          if (h = B(h)) {
            U(h) ? (p = x(h), h = z(h), l = p, p = N(p)) : (p = D(h), l = O.j(p, 0, null), p = O.j(p, 1, null), d.j(c, l, p), h = G(h), l = null, p = 0), r = 0;
          } else {
            break;
          }
        }
      }
      return c;
    }
    return null;
  }
  function c() {
    throw Error("TODO: return map of element styles");
  }
  var d = null, d = function(d, f, g) {
    switch(arguments.length) {
      case 1:
        return c.call(this);
      case 2:
        return b.call(this, d, f);
      case 3:
        return a.call(this, d, f, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.g = c;
  d.h = b;
  d.j = a;
  return d;
}(), aE = function() {
  function a(a, b) {
    var c = YD(a), g = c.type;
    if (ba(g)) {
      switch(g.toLowerCase()) {
        case "checkbox":
        ;
        case "radio":
          c.checked = b ? "checked" : null;
          break;
        case "select-one":
          c.selectedIndex = -1;
          if (da(b)) {
            for (var h = 0;g = c.options[h];h++) {
              if (g.value == b) {
                g.selected = !0;
                break;
              }
            }
          }
          break;
        case "select-multiple":
          g = b;
          da(g) && (g = [g]);
          for (var l = 0;h = c.options[l];l++) {
            if (h.selected = !1, g) {
              for (var p, r = 0;p = g[r];r++) {
                h.value == p && (h.selected = !0);
              }
            }
          }
          break;
        default:
          c.value = null != b ? b : "";
      }
    }
    return c;
  }
  function b(a) {
    a = YD(a);
    return tD(a);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.g = b;
  c.h = a;
  return c;
}(), bE = function() {
  var a = window.requestAnimationFrame;
  if (q(a)) {
    return a;
  }
  var b = window.webkitRequestAnimationFrame;
  return q(b) ? b : function(a, b) {
    return function(e) {
      return setTimeout(function() {
        return function() {
          return e.q ? e.q() : e.call(null);
        };
      }(a, b), 10);
    };
  }(b, a);
}();
var cE;
function dE(a) {
  var b = cE;
  try {
    cE = function() {
      var a = new n(null, 1, [Sl, !0], null);
      return li.j ? li.j(Zk, Xc, a) : li.call(null, Zk, Xc, a);
    }();
    var c = a.q ? a.q() : a.call(null);
    Jg(c) && vl.g(c);
    return new n(null, 2, [ht, c, Ko, function() {
      var a = cE;
      return K.g ? K.g(a) : K.call(null, a);
    }()], null);
  } finally {
    cE = b;
  }
}
function eE(a) {
  q(function() {
    var b = cE;
    return q(b) ? id(Sl.g(wg(a))) : b;
  }()) && oi.h(cE, function(b) {
    return qg.h(b, a);
  });
}
ii.prototype.Qc = function() {
  eE(this);
  return this.state;
};
function fE(a, b, c, d, e, f, g, h) {
  this.state = a;
  this.ib = b;
  this.f = c;
  this.key = d;
  this.wb = e;
  this.Ka = f;
  this.m = g;
  this.l = h;
  this.t = 2229700362;
  this.G = 8194;
  6 < arguments.length ? (this.m = g, this.l = h) : this.l = this.m = null;
}
k = fE.prototype;
k.N = function(a, b) {
  return Md.j(this, b, null);
};
k.L = function(a, b, c) {
  switch(b instanceof X ? b.ca : null) {
    case "watches":
      return this.Ka;
    case "parent-watchables":
      return this.wb;
    case "key":
      return this.key;
    case "f":
      return this.f;
    case "dirty?":
      return this.ib;
    case "state":
      return this.state;
    default:
      return Q.j(this.l, b, c);
  }
};
k.P = function(a, b, c) {
  return zl(b, function() {
    return function(a) {
      return zl(b, Fl, "", " ", "", c, a);
    };
  }(this), "#reflex.core.ComputedObservable{", ", ", "}", c, Rh.h(new V(null, 6, 5, W, [new V(null, 2, 5, W, [Gq, this.state], null), new V(null, 2, 5, W, [up, this.ib], null), new V(null, 2, 5, W, [Ps, this.f], null), new V(null, 2, 5, W, [to, this.key], null), new V(null, 2, 5, W, [ip, this.wb], null), new V(null, 2, 5, W, [Wl, this.Ka], null)], null), this.l));
};
k.I = function() {
  return this.m;
};
k.V = function() {
  return 6 + N(this.l);
};
k.R = function() {
  var a = this.w;
  return null != a ? a : this.w = a = th(this);
};
k.O = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && Bj(this, b) : b) ? !0 : !1;
};
k.Ra = function(a, b) {
  return Lg(new Xk(null, new n(null, 6, [Wl, null, to, null, ip, null, up, null, Gq, null, Ps, null], null), null), b) ? tg.h(ag(Oi.h(Jj, this), this.m), b) : new fE(this.state, this.ib, this.f, this.key, this.wb, this.Ka, this.m, Zh(tg.h(this.l, b)), null);
};
k.Ia = function(a, b, c) {
  return q(Z.h ? Z.h(Gq, b) : Z.call(null, Gq, b)) ? new fE(c, this.ib, this.f, this.key, this.wb, this.Ka, this.m, this.l, null) : q(Z.h ? Z.h(up, b) : Z.call(null, up, b)) ? new fE(this.state, c, this.f, this.key, this.wb, this.Ka, this.m, this.l, null) : q(Z.h ? Z.h(Ps, b) : Z.call(null, Ps, b)) ? new fE(this.state, this.ib, c, this.key, this.wb, this.Ka, this.m, this.l, null) : q(Z.h ? Z.h(to, b) : Z.call(null, to, b)) ? new fE(this.state, this.ib, this.f, c, this.wb, this.Ka, this.m, this.l, 
  null) : q(Z.h ? Z.h(ip, b) : Z.call(null, ip, b)) ? new fE(this.state, this.ib, this.f, this.key, c, this.Ka, this.m, this.l, null) : q(Z.h ? Z.h(Wl, b) : Z.call(null, Wl, b)) ? new fE(this.state, this.ib, this.f, this.key, this.wb, c, this.m, this.l, null) : new fE(this.state, this.ib, this.f, this.key, this.wb, this.Ka, this.m, R.j(this.l, b, c), null);
};
k.S = function() {
  return B(Rh.h(new V(null, 6, 5, W, [new V(null, 2, 5, W, [Gq, this.state], null), new V(null, 2, 5, W, [up, this.ib], null), new V(null, 2, 5, W, [Ps, this.f], null), new V(null, 2, 5, W, [to, this.key], null), new V(null, 2, 5, W, [ip, this.wb], null), new V(null, 2, 5, W, [Wl, this.Ka], null)], null), this.l));
};
k.Xd = function() {
  for (var a = B(this.Ka), b = null, c = 0, d = 0;;) {
    if (d < c) {
      var e = b.F(null, d);
      O.j(e, 0, null);
      e = O.j(e, 1, null);
      e.q ? e.q() : e.call(null);
      d += 1;
    } else {
      if (a = B(a)) {
        U(a) ? (c = x(a), a = z(a), b = c, c = N(c)) : (b = D(a), O.j(b, 0, null), e = O.j(b, 1, null), e.q ? e.q() : e.call(null), a = G(a), b = null, c = 0), d = 0;
      } else {
        return null;
      }
    }
  }
};
k.Wd = function(a, b, c) {
  return this.Ka = R.j(this.Ka, b, c);
};
k.Yd = function(a, b) {
  return this.Ka = tg.h(this.Ka, b);
};
k.J = function(a, b) {
  return new fE(this.state, this.ib, this.f, this.key, this.wb, this.Ka, b, this.l, this.w);
};
k.U = function(a, b) {
  return Eg(b) ? Pd(this, w.h(b, 0), w.h(b, 1)) : od.j(Ad, this, b);
};
k.Qc = function() {
  eE(this);
  if (id(this.ib)) {
    return this.state;
  }
  for (var a = dE(this.f), b = Jg(a) ? S.h(ji, a) : a, c = Q.h(b, Ko), d = Q.h(b, ht), e = B(this.wb), f = null, g = 0, h = 0;;) {
    if (h < g) {
      var l = f.F(null, h);
      He(l, this.key);
      h += 1;
    } else {
      if (e = B(e)) {
        f = e, U(f) ? (e = x(f), h = z(f), f = e, g = N(e), e = h) : (e = D(f), He(e, this.key), e = G(f), f = null, g = 0), h = 0;
      } else {
        break;
      }
    }
  }
  this.wb = c;
  e = B(c);
  f = null;
  for (h = g = 0;;) {
    if (h < g) {
      l = f.F(null, h), Jl(l, this.key, function(a, b, c, d, e, f, g, h, l, r) {
        return function() {
          r.ib = !0;
          return Fe(r, null, null);
        };
      }(e, f, g, h, l, a, b, c, d, this)), h += 1;
    } else {
      var p = B(e);
      if (p) {
        l = p;
        if (U(l)) {
          e = x(l), h = z(l), f = e, g = N(e), e = h;
        } else {
          var r = D(l);
          Jl(r, this.key, function(a, b, c, d, e, f, g, h, l, r, p, M) {
            return function() {
              M.ib = !0;
              return Fe(M, null, null);
            };
          }(e, f, g, h, r, l, p, a, b, c, d, this));
          e = G(l);
          f = null;
          g = 0;
        }
        h = 0;
      } else {
        break;
      }
    }
  }
  this.state = d;
  this.ib = !1;
  return d;
};
k.ag = !0;
k.R = function() {
  return this.key;
};
var gE = function() {
  function a(a, d, e) {
    var f = null;
    2 < arguments.length && (f = H(Array.prototype.slice.call(arguments, 2), 0));
    return b.call(this, a, d, f);
  }
  function b(a, b, e) {
    if (B(a)) {
      var f = D(a);
      b.g ? b.g(f) : b.call(null, f);
    }
    return S.p(XD, a, b, e);
  }
  a.B = 2;
  a.o = function(a) {
    var d = D(a);
    a = G(a);
    var e = D(a);
    a = E(a);
    return b(d, e, a);
  };
  a.k = b;
  return a;
}();
function hE(a) {
  if (a ? a.ff : a) {
    return a.ff();
  }
  var b;
  b = hE[m(null == a ? null : a)];
  if (!b && (b = hE._, !b)) {
    throw s("PushbackReader.read-char", a);
  }
  return b.call(null, a);
}
function iE(a, b) {
  if (a ? a.gf : a) {
    return a.gf(0, b);
  }
  var c;
  c = iE[m(null == a ? null : a)];
  if (!c && (c = iE._, !c)) {
    throw s("PushbackReader.unread", a);
  }
  return c.call(null, a, b);
}
function jE(a, b, c) {
  this.pa = a;
  this.buffer = b;
  this.pe = c;
}
jE.prototype.ff = function() {
  return 0 === this.buffer.length ? (this.pe += 1, this.pa[this.pe]) : this.buffer.pop();
};
jE.prototype.gf = function(a, b) {
  return this.buffer.push(b);
};
function kE(a) {
  var b = !/[^\t\n\r ]/.test(a);
  return q(b) ? b : "," === a;
}
function lE(a, b) {
  var c;
  !(c = !/[^0-9]/.test(b)) && (c = "+" === b || "-" === b) && (c = hE(a), iE(a, c), c = !/[^0-9]/.test(c));
  return c;
}
var mE = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = H(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, 0, e);
  }
  function b(a, b) {
    throw Error(S.h(v, b));
  }
  a.B = 1;
  a.o = function(a) {
    D(a);
    a = E(a);
    return b(0, a);
  };
  a.k = b;
  return a;
}();
function nE(a, b) {
  for (var c = new Nc(b), d = hE(a);;) {
    var e;
    if (!(e = null == d || kE(d))) {
      e = d;
      var f = "#" !== e;
      e = f ? (f = "'" !== e) ? (f = ":" !== e) ? oE.g ? oE.g(e) : oE.call(null, e) : f : f : f;
    }
    if (e) {
      return iE(a, d), c.toString();
    }
    c.append(d);
    d = hE(a);
  }
}
function pE(a) {
  for (;;) {
    var b = hE(a);
    if ("\n" === b || "\r" === b || null == b) {
      return a;
    }
  }
}
var qE = yl("^([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+))(N)?$"), rE = yl("^([-+]?[0-9]+)/([0-9]+)$"), sE = yl("^([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?$"), tE = yl("^[:]?([^0-9/].*/)?([^0-9/][^/]*)$");
function uE(a, b) {
  var c = a.exec(b);
  return null != c && c[0] === b ? 1 === c.length ? c[0] : c : null;
}
function vE(a) {
  if (q(uE(qE, a))) {
    a = uE(qE, a);
    var b = a[2];
    if (null != (vf.h(b, "") ? null : b)) {
      a = 0;
    } else {
      var b = q(a[3]) ? [a[3], 10] : q(a[4]) ? [a[4], 16] : q(a[5]) ? [a[5], 8] : q(a[6]) ? [a[7], parseInt(a[6], 10)] : [null, null], c = b[0];
      null == c ? a = null : (b = parseInt(c, b[1]), a = "-" === a[1] ? -b : b);
    }
  } else {
    q(uE(rE, a)) ? (a = uE(rE, a), a = parseInt(a[1], 10) / parseInt(a[2], 10)) : a = q(uE(sE, a)) ? parseFloat(a) : null;
  }
  return a;
}
var wE = yl("^[0-9A-Fa-f]{2}$"), xE = yl("^[0-9A-Fa-f]{4}$");
function yE(a, b, c, d) {
  return q(wl(a, d)) ? d : mE.k(b, H(["Unexpected unicode escape \\", c, d], 0));
}
function zE(a) {
  return String.fromCharCode(parseInt(a, 16));
}
function AE(a) {
  var b = hE(a), c = "t" === b ? "\t" : "r" === b ? "\r" : "n" === b ? "\n" : "\\" === b ? "\\" : '"' === b ? '"' : "b" === b ? "\b" : "f" === b ? "\f" : null;
  q(c) ? a = c : "x" === b ? (c = (new Nc(hE(a), hE(a))).toString(), a = zE(yE(wE, a, b, c))) : "u" === b ? (c = (new Nc(hE(a), hE(a), hE(a), hE(a))).toString(), a = zE(yE(xE, a, b, c))) : a = /[^0-9]/.test(b) ? mE.k(a, H(["Unexpected unicode escape \\", b], 0)) : String.fromCharCode(b);
  return a;
}
function BE(a) {
  for (var b = hE(a);;) {
    var c;
    c = b;
    c = kE.g ? kE.g(c) : kE.call(null, c);
    if (q(c)) {
      b = hE(a);
    } else {
      return b;
    }
  }
}
function CE(a, b) {
  for (var c = Ie(pg);;) {
    var d = BE(b);
    q(d) || mE.k(b, H(["EOF while reading"], 0));
    if (a === d) {
      return Ke(c);
    }
    var e = function() {
      var a = d;
      return oE.g ? oE.g(a) : oE.call(null, a);
    }();
    if (q(e)) {
      var f = e, e = function() {
        var a = d;
        return f.h ? f.h(b, a) : f.call(null, b, a);
      }()
    } else {
      iE(b, d), e = DE.p ? DE.p(b, !0, null, !0) : DE.call(null, b, !0, null);
    }
    c = e === b ? c : Uh.h(c, e);
  }
}
function EE(a, b) {
  return mE.k(a, H(["Reader for ", b, " not implemented yet"], 0));
}
function FE(a, b) {
  var c = hE(a), d = GE.g ? GE.g(c) : GE.call(null, c);
  if (q(d)) {
    return d.h ? d.h(a, b) : d.call(null, a, b);
  }
  d = HE.h ? HE.h(a, c) : HE.call(null, a, c);
  return q(d) ? d : mE.k(a, H(["No dispatch macro for ", c], 0));
}
function IE(a, b) {
  return mE.k(a, H(["Unmached delimiter ", b], 0));
}
function JE(a) {
  return S.h(zh, CE(")", a));
}
function KE(a) {
  return CE("]", a);
}
function LE(a) {
  var b = CE("}", a), c = N(b);
  !bi(c) && mE.k(a, H(["Map literal must contain an even number of forms"], 0));
  return S.h(ji, b);
}
function ME(a, b) {
  for (var c = new Nc(b), d = hE(a);;) {
    if (q(function() {
      var a = null == d;
      if (a || (a = kE(d))) {
        return a;
      }
      a = d;
      return oE.g ? oE.g(a) : oE.call(null, a);
    }())) {
      iE(a, d);
      var e = c.toString(), c = vE(e);
      return q(c) ? c : mE.k(a, H(["Invalid number format [", e, "]"], 0));
    }
    c.append(d);
    d = e = hE(a);
  }
}
function NE(a) {
  for (var b = new Nc, c = hE(a);;) {
    if (null == c) {
      return mE.k(a, H(["EOF while reading"], 0));
    }
    if ("\\" === c) {
      b.append(AE(a));
    } else {
      if ('"' === c) {
        return b.toString();
      }
      b.append(c);
    }
    c = hE(a);
  }
}
function OE(a) {
  for (var b = new Nc, c = hE(a);;) {
    if (null == c) {
      return mE.k(a, H(["EOF while reading"], 0));
    }
    if ("\\" === c) {
      b.append(c);
      var d = hE(a);
      if (null == d) {
        return mE.k(a, H(["EOF while reading"], 0));
      }
      var e = function() {
        var a = b;
        a.append(d);
        return a;
      }(), f = hE(a);
    } else {
      if ('"' === c) {
        return b.toString();
      }
      e = function() {
        var a = b;
        a.append(c);
        return a;
      }();
      f = hE(a);
    }
    b = e;
    c = f;
  }
}
function PE(a, b) {
  var c = nE(a, b);
  if (q(-1 != c.indexOf("/"))) {
    c = yf.h(sh.j(c, 0, c.indexOf("/")), sh.j(c, c.indexOf("/") + 1, c.length));
  } else {
    var d = yf.g(c), c = "nil" === c ? null : "true" === c ? !0 : "false" === c ? !1 : d
  }
  return c;
}
function QE(a) {
  var b = nE(a, hE(a)), c = uE(tE, b), b = c[0], d = c[1], c = c[2];
  return void 0 !== d && ":/" === d.substring(d.length - 2, d.length) || ":" === c[c.length - 1] || -1 !== b.indexOf("::", 1) ? mE.k(a, H(["Invalid token: ", b], 0)) : null != d && 0 < d.length ? Ch.h(d.substring(0, d.indexOf("/")), c) : Ch.g(b);
}
function RE(a) {
  return function(b) {
    return Ad(Ad(Lf, DE.p ? DE.p(b, !0, null, !0) : DE.call(null, b, !0, null)), a);
  };
}
function SE() {
  return function(a) {
    return mE.k(a, H(["Unreadable form"], 0));
  };
}
function TE(a) {
  var b;
  b = DE.p ? DE.p(a, !0, null, !0) : DE.call(null, a, !0, null);
  b = b instanceof xf ? new n(null, 1, [et, b], null) : "string" === typeof b ? new n(null, 1, [et, b], null) : b instanceof X ? new Mj([b, !0]) : b;
  Dg(b) || mE.k(a, H(["Metadata must be Symbol,Keyword,String or Map"], 0));
  var c = DE.p ? DE.p(a, !0, null, !0) : DE.call(null, a, !0, null);
  return(c ? c.t & 262144 || c.lg || (c.t ? 0 : kd(ne, c)) : kd(ne, c)) ? ag(c, Uk.k(H([wg(c), b], 0))) : mE.k(a, H(["Metadata can only be applied to IWithMetas"], 0));
}
function UE(a) {
  return $k(CE("}", a));
}
function VE(a) {
  return yl(OE(a));
}
function WE(a) {
  DE.p ? DE.p(a, !0, null, !0) : DE.call(null, a, !0, null);
  return a;
}
function oE(a) {
  return'"' === a ? NE : ":" === a ? QE : ";" === a ? pE : "'" === a ? RE(new xf(null, "quote", "quote", 1377916282, null)) : "@" === a ? RE(new xf(null, "deref", "deref", 1494944732, null)) : "^" === a ? TE : "`" === a ? EE : "~" === a ? EE : "(" === a ? JE : ")" === a ? IE : "[" === a ? KE : "]" === a ? IE : "{" === a ? LE : "}" === a ? IE : "\\" === a ? hE : "#" === a ? FE : null;
}
function GE(a) {
  return "{" === a ? UE : "\x3c" === a ? SE() : '"' === a ? VE : "!" === a ? pE : "_" === a ? WE : null;
}
function DE(a, b, c) {
  for (;;) {
    var d = hE(a);
    if (null == d) {
      return q(b) ? mE.k(a, H(["EOF while reading"], 0)) : c;
    }
    if (!kE(d)) {
      if (";" === d) {
        var e = function() {
          var b = a, c = d;
          return pE.h ? pE.h(b, c) : pE.call(null, b);
        }();
        a = e;
      } else {
        var f = oE(d), e = q(f) ? function() {
          var b = a, c = d;
          return f.h ? f.h(b, c) : f.call(null, b, c);
        }() : lE(a, d) ? ME(a, d) : PE(a, d);
        if (e !== a) {
          return e;
        }
      }
    }
  }
}
function XE(a) {
  return DE(new jE(a, [], -1), !1, null);
}
var YE = function(a, b) {
  return function(c, d) {
    return Q.h(q(d) ? b : a, c);
  };
}(new V(null, 13, 5, W, [null, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], null), new V(null, 13, 5, W, [null, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], null)), ZE = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
function $E(a) {
  a = parseInt(a, 10);
  return id(isNaN(a)) ? a : null;
}
function aF(a, b, c, d) {
  a <= b && b <= c || mE.k(null, H(["" + v.g(d) + " Failed:  " + v.g(a) + "\x3c\x3d" + v.g(b) + "\x3c\x3d" + v.g(c)], 0));
  return b;
}
function bF(a) {
  var b = wl(ZE, a);
  O.j(b, 0, null);
  var c = O.j(b, 1, null), d = O.j(b, 2, null), e = O.j(b, 3, null), f = O.j(b, 4, null), g = O.j(b, 5, null), h = O.j(b, 6, null), l = O.j(b, 7, null), p = O.j(b, 8, null), r = O.j(b, 9, null), t = O.j(b, 10, null);
  if (id(b)) {
    return mE.k(null, H(["Unrecognized date/time syntax: " + v.g(a)], 0));
  }
  var u = $E(c), A = function() {
    var a = $E(d);
    return q(a) ? a : 1;
  }();
  a = function() {
    var a = $E(e);
    return q(a) ? a : 1;
  }();
  var b = function() {
    var a = $E(f);
    return q(a) ? a : 0;
  }(), c = function() {
    var a = $E(g);
    return q(a) ? a : 0;
  }(), y = function() {
    var a = $E(h);
    return q(a) ? a : 0;
  }(), C = function() {
    var a;
    a: {
      if (vf.h(3, N(l))) {
        a = l;
      } else {
        if (3 < N(l)) {
          a = sh.j(l, 0, 3);
        } else {
          for (a = new Nc(l);;) {
            if (3 > a.Pc.length) {
              a = a.append("0");
            } else {
              a = a.toString();
              break a;
            }
          }
          a = void 0;
        }
      }
    }
    a = $E(a);
    return q(a) ? a : 0;
  }(), p = (vf.h(p, "-") ? -1 : 1) * (60 * function() {
    var a = $E(r);
    return q(a) ? a : 0;
  }() + function() {
    var a = $E(t);
    return q(a) ? a : 0;
  }());
  return new V(null, 8, 5, W, [u, aF(1, A, 12, "timestamp month field must be in range 1..12"), aF(1, a, function() {
    var a;
    if (a = 0 === (u % 4 + 4) % 4) {
      a = 0 !== (u % 100 + 100) % 100 || 0 === (u % 400 + 400) % 400;
    }
    return YE.h ? YE.h(A, a) : YE.call(null, A, a);
  }(), "timestamp day field must be in range 1..last day in month"), aF(0, b, 23, "timestamp hour field must be in range 0..23"), aF(0, c, 59, "timestamp minute field must be in range 0..59"), aF(0, y, vf.h(c, 59) ? 60 : 59, "timestamp second field must be in range 0..60"), aF(0, C, 999, "timestamp millisecond field must be in range 0..999"), p], null);
}
var cF, dF = new n(null, 4, ["inst", function(a) {
  var b;
  if ("string" === typeof a) {
    if (b = bF(a), q(b)) {
      a = O.j(b, 0, null);
      var c = O.j(b, 1, null), d = O.j(b, 2, null), e = O.j(b, 3, null), f = O.j(b, 4, null), g = O.j(b, 5, null), h = O.j(b, 6, null);
      b = O.j(b, 7, null);
      b = new Date(Date.UTC(a, c - 1, d, e, f, g, h) - 6E4 * b);
    } else {
      b = mE.k(null, H(["Unrecognized date/time syntax: " + v.g(a)], 0));
    }
  } else {
    b = mE.k(null, H(["Instance literal expects a string for its timestamp."], 0));
  }
  return b;
}, "uuid", function(a) {
  return "string" === typeof a ? new Ol(a) : mE.k(null, H(["UUID literal expects a string as its representation."], 0));
}, "queue", function(a) {
  return Eg(a) ? Oi.h(yj, a) : mE.k(null, H(["Queue literal expects a vector for its elements."], 0));
}, "js", function(a) {
  if (Eg(a)) {
    var b = [];
    a = B(a);
    for (var c = null, d = 0, e = 0;;) {
      if (e < d) {
        var f = c.F(null, e);
        b.push(f);
        e += 1;
      } else {
        if (a = B(a)) {
          c = a, U(c) ? (a = x(c), e = z(c), c = a, d = N(a), a = e) : (a = D(c), b.push(a), a = G(c), c = null, d = 0), e = 0;
        } else {
          break;
        }
      }
    }
    return b;
  }
  if (Dg(a)) {
    b = {};
    a = B(a);
    c = null;
    for (e = d = 0;;) {
      if (e < d) {
        var g = c.F(null, e), f = O.j(g, 0, null), g = O.j(g, 1, null);
        b[Bh(f)] = g;
        e += 1;
      } else {
        if (a = B(a)) {
          U(a) ? (d = x(a), a = z(a), c = d, d = N(d)) : (d = D(a), c = O.j(d, 0, null), d = O.j(d, 1, null), b[Bh(c)] = d, a = G(a), c = null, d = 0), e = 0;
        } else {
          break;
        }
      }
    }
    return b;
  }
  return mE.k(null, H(["JS literal expects a vector or map containing only string or unqualified keyword keys"], 0));
}], null);
cF = li.g ? li.g(dF) : li.call(null, dF);
var eF = li.g ? li.g(null) : li.call(null, null);
function HE(a, b) {
  var c = PE(a, b), d = Q.h(K.g ? K.g(cF) : K.call(null, cF), "" + v.g(c)), e = K.g ? K.g(eF) : K.call(null, eF);
  return q(d) ? (c = DE(a, !0, null), d.g ? d.g(c) : d.call(null, c)) : q(e) ? (d = DE(a, !0, null), e.h ? e.h(c, d) : e.call(null, c, d)) : mE.k(a, H(["Could not find tag parser for ", "" + v.g(c), " in ", ni.k(H([Sk(K.g ? K.g(cF) : K.call(null, cF))], 0))], 0));
}
;var fF = function() {
  function a(a, d, e, f) {
    var g = null;
    3 < arguments.length && (g = H(Array.prototype.slice.call(arguments, 3), 0));
    return b.call(this, a, d, e, g);
  }
  function b(a, b, e, f) {
    f = Jg(f) ? S.h(ji, f) : f;
    f = Q.j(f, jt, !1);
    a = YD(a);
    b = Bh(b);
    return ic(a, b, e, f);
  }
  a.B = 3;
  a.o = function(a) {
    var d = D(a);
    a = G(a);
    var e = D(a);
    a = G(a);
    var f = D(a);
    a = E(a);
    return b(d, e, f, a);
  };
  a.k = b;
  return a;
}();
var gF, hF, iF, jF, kF, lF, mF;
function nF(a, b, c) {
  var d = Vk(b, a), e = S.h(Vg, Hj(d)), d = Sk(d);
  return new n(null, 4, [Yr, N(d) / function() {
    var b = N(a);
    return 1 > b ? 1 : b;
  }(), vr, N(d) / function() {
    var a = N(b);
    return 1 > a ? 1 : a;
  }(), Iq, e / (1 > c ? 1 : c), Hv, e / function() {
    var b = N(a);
    return 1 > b ? 1 : b;
  }()], null);
}
function oF(a, b, c) {
  var d = S.h(Vg, Hj(c));
  return 0 < d ? Rg.j(tl.j(Iq, Yr, vr), Xg, Bi.h(ei.h(hh, Iq), qi.h(function(b) {
    return function(d) {
      var g = Pw(a, 0, d);
      return R.j(nF(g, c, b), jp, d);
    };
  }(d), b))) : null;
}
var qF = function pF(b, c) {
  "undefined" === typeof gF && (gF = function(b, c, f, g) {
    this.e = b;
    this.f = c;
    this.bh = f;
    this.Gg = g;
    this.G = 0;
    this.t = 393216;
  }, gF.hb = !0, gF.gb = "org.nfrac.comportex.encoders/t35849", gF.mb = function(b, c) {
    return Ce(c, "org.nfrac.comportex.encoders/t35849");
  }, gF.prototype.yc = function(b, c, f) {
    return Pw(this.e, c, this.f.g ? this.f.g(f) : this.f.call(null, f));
  }, gF.prototype.md = function(b, c, f) {
    return Qw(this.e, c, f);
  }, gF.prototype.Sb = function() {
    return Ww(this.e);
  }, gF.prototype.I = function() {
    return this.Gg;
  }, gF.prototype.J = function(b, c) {
    return new gF(this.e, this.f, this.bh, c);
  });
  return new gF(c, b, pF, null);
}, sF = function rF(b) {
  "undefined" === typeof hF && (hF = function(b, d, e) {
    this.e = b;
    this.sg = d;
    this.Hg = e;
    this.G = 0;
    this.t = 393216;
  }, hF.hb = !0, hF.gb = "org.nfrac.comportex.encoders/t35856", hF.mb = function(b, d) {
    return Ce(d, "org.nfrac.comportex.encoders/t35856");
  }, hF.prototype.yc = function(b, d, e) {
    var f = this;
    return S.h(cw, qi.h(function() {
      return function(b) {
        return Pw(f.e, d, b);
      };
    }(this), e));
  }, hF.prototype.Sb = function() {
    return Ww(this.e);
  }, hF.prototype.I = function() {
    return this.Hg;
  }, hF.prototype.J = function(b, d) {
    return new hF(this.e, this.sg, d);
  });
  return new hF(b, rF, null);
}, tF = function() {
  function a(a, c) {
    var f = cx(c), g = dx(c), h = Ui.p(f, new V(null, 1, 5, W, [0], null), Wg, a), l = Sx(h);
    "undefined" === typeof iF && (iF = function(a, b, c, d, e, f, g, h) {
      this.K = a;
      this.ke = b;
      this.kf = c;
      this.qg = d;
      this.e = e;
      this.Kc = f;
      this.le = g;
      this.Ig = h;
      this.G = 0;
      this.t = 393216;
    }, iF.hb = !0, iF.gb = "org.nfrac.comportex.encoders/t35865", iF.mb = function() {
      return function(a, b) {
        return Ce(b, "org.nfrac.comportex.encoders/t35865");
      };
    }(f, g, h, l), iF.prototype.yc = function(a, b, c, d) {
      return function(e, f, g) {
        var h = this;
        return S.h(cw, gi(function() {
          return function(a, b) {
            return Pw(h.e, f + a * h.kf, b);
          };
        }(this, a, b, c, d), g));
      };
    }(f, g, h, l), iF.prototype.Sb = function() {
      return function() {
        return this.K;
      };
    }(f, g, h, l), iF.prototype.I = function() {
      return function() {
        return this.Ig;
      };
    }(f, g, h, l), iF.prototype.J = function() {
      return function(a, b) {
        return new iF(this.K, this.ke, this.kf, this.qg, this.e, this.Kc, this.le, b);
      };
    }(f, g, h, l));
    return new iF(l, h, g, f, c, a, b, null);
  }
  var b = null, c = function() {
    function a(b, d, h) {
      var l = null;
      2 < arguments.length && (l = H(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      var l = Sh.h(d, e), p = qi.h(dx, l), r = Sh.h(0, sl.h(Vg, p)), t = S.h(Ux, qi.h(cx, l)), u = Sx(t);
      "undefined" === typeof jF && (jF = function(a, b, c, d, e, f, g, h, l, r) {
        this.K = a;
        this.ke = b;
        this.Kf = c;
        this.rh = d;
        this.lf = e;
        this.Jb = f;
        this.e = g;
        this.Kc = h;
        this.le = l;
        this.Jg = r;
        this.G = 0;
        this.t = 393216;
      }, jF.hb = !0, jF.gb = "org.nfrac.comportex.encoders/t35868", jF.mb = function() {
        return function(a, b) {
          return Ce(b, "org.nfrac.comportex.encoders/t35868");
        };
      }(l, p, r, t, u), jF.prototype.yc = function(a, b, c, d, e) {
        return function(f, g, h) {
          return S.h(cw, qi.p(function() {
            return function(a, b, c) {
              return Pw(a, g + b, c);
            };
          }(this, a, b, c, d, e), this.lf, this.Kf, h));
        };
      }(l, p, r, t, u), jF.prototype.Sb = function() {
        return function() {
          return this.K;
        };
      }(l, p, r, t, u), jF.prototype.I = function() {
        return function() {
          return this.Jg;
        };
      }(l, p, r, t, u), jF.prototype.J = function() {
        return function(a, b) {
          return new jF(this.K, this.ke, this.Kf, this.rh, this.lf, this.Jb, this.e, this.Kc, this.le, b);
        };
      }(l, p, r, t, u));
      return new jF(u, t, r, p, l, e, d, a, b, null);
    }
    a.B = 2;
    a.o = function(a) {
      var b = D(a);
      a = G(a);
      var d = D(a);
      a = E(a);
      return c(b, d, a);
    };
    a.k = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.k(b, e, H(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.B = 2;
  b.o = c.o;
  b.h = a;
  b.k = c.k;
  return b;
}(), vF = function uF(b, c, d) {
  var e = O.j(d, 0, null), f = O.j(d, 1, null), g = Sx(new V(null, 1, 5, W, [b], null)), h = f - e;
  "undefined" === typeof kF && (kF = function(b, c, d, e, f, g, h, C, F, J) {
    this.span = b;
    this.K = c;
    this.upper = d;
    this.lower = e;
    this.oh = f;
    this.$g = g;
    this.xc = h;
    this.qd = C;
    this.yg = F;
    this.Kg = J;
    this.G = 0;
    this.t = 393216;
  }, kF.hb = !0, kF.gb = "org.nfrac.comportex.encoders/t35879", kF.mb = function() {
    return function(b, c) {
      return Ce(c, "org.nfrac.comportex.encoders/t35879");
    };
  }(g, h, d, e, f), kF.prototype.yc = function() {
    return function(b, c, d) {
      return q(d) ? (b = this.lower, d = d > b ? d : b, b = this.upper, d = ah(((d < b ? d : b) - this.lower) / this.span * (this.qd - this.xc)), $k(ql.h(c + d, c + d + this.xc))) : Zk;
    };
  }(g, h, d, e, f), kF.prototype.md = function() {
    return function(b, c, d) {
      b = ql.j(this.lower, this.upper, 5 < this.span && 250 > this.span ? 1 : this.span / 50);
      return ri.h(d, oF(this, b, c));
    };
  }(g, h, d, e, f), kF.prototype.Sb = function() {
    return function() {
      return this.K;
    };
  }(g, h, d, e, f), kF.prototype.I = function() {
    return function() {
      return this.Kg;
    };
  }(g, h, d, e, f), kF.prototype.J = function() {
    return function(b, c) {
      return new kF(this.span, this.K, this.upper, this.lower, this.oh, this.$g, this.xc, this.qd, this.yg, c);
    };
  }(g, h, d, e, f));
  return new kF(h, g, f, e, d, d, c, b, uF, null);
}, xF = function wF(b, c) {
  var d = N(c), e = b / d, f = bl(c, ql.q()), g = vF(b, e, new V(null, 2, 5, W, [0, d - 1], null));
  "undefined" === typeof lF && (lF = function(b, c, d, e, f, g, A, y) {
    this.qe = b;
    this.Pd = c;
    this.xc = d;
    this.Kc = e;
    this.values = f;
    this.qd = g;
    this.Vf = A;
    this.Lg = y;
    this.G = 0;
    this.t = 393216;
  }, lF.hb = !0, lF.gb = "org.nfrac.comportex.encoders/t35886", lF.mb = function() {
    return function(b, c) {
      return Ce(c, "org.nfrac.comportex.encoders/t35886");
    };
  }(d, e, f, g), lF.prototype.yc = function() {
    return function(b, c, d) {
      return Pw(this.qe, c, this.Pd.g ? this.Pd.g(d) : this.Pd.call(null, d));
    };
  }(d, e, f, g), lF.prototype.md = function() {
    return function(b, c, d) {
      return ri.h(d, oF(this, this.values, c));
    };
  }(d, e, f, g), lF.prototype.Sb = function() {
    return function() {
      return Ww(this.qe);
    };
  }(d, e, f, g), lF.prototype.I = function() {
    return function() {
      return this.Lg;
    };
  }(d, e, f, g), lF.prototype.J = function() {
    return function(b, c) {
      return new lF(this.qe, this.Pd, this.xc, this.Kc, this.values, this.qd, this.Vf, c);
    };
  }(d, e, f, g));
  return new lF(g, f, e, d, c, b, wF, null);
};
function yF(a, b) {
  return function(c) {
    var d = O.j(c, 0, null), e = O.j(c, 1, null);
    c = O.j(c, 2, null);
    var f = Q.h(a, d), g = N(a);
    return e === N(f) ? c === b - 1 ? new V(null, 3, 5, W, [((d + 1) % g + g) % g, 0, 0], null) : new V(null, 3, 5, W, [d, 0, c + 1], null) : new V(null, 3, 5, W, [d, e + 1, c], null);
  };
}
function zF(a) {
  return Pi.h(function(a) {
    return nj(Rh.k(new V(null, 1, 5, W, ["\x3e"], null), a, H([new V(null, 1, 5, W, ["."], null)], 0)));
  }, Pi.h(function(a) {
    return aD.h(a, /[^\w']+/);
  }, aD.h(za(a), /[^\w]*\.+[^\w]*/)));
}
function AF(a, b) {
  var c = zF(a), d = al(S.h(Rh, c)), e = 35 * N(d), d = qF(function(a) {
    return function(b) {
      var c = O.j(b, 0, null), d = O.j(b, 1, null);
      O.j(b, 2, null);
      return Ri.h(a, new V(null, 2, 5, W, [c, d], null));
    };
  }(c, d, e), xF(e, d));
  return Ay(new V(null, 3, 5, W, [0, -1, 0], null), yF(c, b), d);
}
var BF = sg([Yl, jm, lm, lo, xo, Do, Yo, bp, kp, zp, Rp, Fq, Lq, Pq, Dr, Er, Kr, as, Fs, Ts, rv, Pv, Qv], [.2, !1, !0, 12, 5, .01, .2, 7, 9, new V(null, 1, 5, W, [1E3], null), .5, .3, .05, 18, 2, 1, .05, .02, .005, 8, 1E5, .16, 3]);
function CF(a, b) {
  var c = Array.prototype.slice.call(arguments), d = c.shift();
  if ("undefined" == typeof d) {
    throw Error("[goog.string.format] Template required");
  }
  return d.replace(/%([0\-\ \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(a, b, d, h, l, p, r, t) {
    if ("%" == p) {
      return "%";
    }
    var u = c.shift();
    if ("undefined" == typeof u) {
      throw Error("[goog.string.format] Not enough arguments");
    }
    arguments[0] = u;
    return DF[p].apply(null, arguments);
  });
}
var DF = {s:function(a, b, c) {
  return isNaN(c) || "" == c || a.length >= c ? a : a = -1 < b.indexOf("-", 0) ? a + Array(c - a.length + 1).join(" ") : Array(c - a.length + 1).join(" ") + a;
}, f:function(a, b, c, d, e) {
  d = a.toString();
  isNaN(e) || "" == e || (d = a.toFixed(e));
  var f;
  f = 0 > a ? "-" : 0 <= b.indexOf("+") ? "+" : 0 <= b.indexOf(" ") ? " " : "";
  0 <= a && (d = f + d);
  if (isNaN(c) || d.length >= c) {
    return d;
  }
  d = isNaN(e) ? Math.abs(a).toString() : Math.abs(a).toFixed(e);
  a = c - d.length - f.length;
  return d = 0 <= b.indexOf("-", 0) ? f + d + Array(a + 1).join(" ") : f + Array(a + 1).join(0 <= b.indexOf("0", 0) ? "0" : " ") + d;
}, d:function(a, b, c, d, e, f, g, h) {
  return DF.f(parseInt(a, 10), b, c, d, 0, f, g, h);
}};
DF.i = DF.d;
DF.u = DF.d;
function EF(a) {
  if (a ? a.fe : a) {
    return a.fe(a);
  }
  var b;
  b = EF[m(null == a ? null : a)];
  if (!b && (b = EF._, !b)) {
    throw s("PArrayLayout.layout-bounds", a);
  }
  return b.call(null, a);
}
function FF(a, b) {
  if (a ? a.ie : a) {
    return a.ie(a, b);
  }
  var c;
  c = FF[m(null == a ? null : a)];
  if (!c && (c = FF._, !c)) {
    throw s("PArrayLayout.origin-px-topleft", a);
  }
  return c.call(null, a, b);
}
function GF(a, b) {
  if (a ? a.ge : a) {
    return a.ge(a, b);
  }
  var c;
  c = GF[m(null == a ? null : a)];
  if (!c && (c = GF._, !c)) {
    throw s("PArrayLayout.local-px-topleft", a);
  }
  return c.call(null, a, b);
}
function HF(a) {
  if (a ? a.ce : a) {
    return a.ce(a);
  }
  var b;
  b = HF[m(null == a ? null : a)];
  if (!b && (b = HF._, !b)) {
    throw s("PArrayLayout.element-size-px", a);
  }
  return b.call(null, a);
}
function IF(a) {
  if (a ? a.he : a) {
    return a.he(a);
  }
  var b;
  b = IF[m(null == a ? null : a)];
  if (!b && (b = IF._, !b)) {
    throw s("PArrayLayout.n-onscreen", a);
  }
  return b.call(null, a);
}
function JF(a) {
  if (a ? a.jf : a) {
    return a.X;
  }
  var b;
  b = JF[m(null == a ? null : a)];
  if (!b && (b = JF._, !b)) {
    throw s("PArrayLayout.top-id-onscreen", a);
  }
  return b.call(null, a);
}
function KF(a, b, c) {
  if (a ? a.ae : a) {
    return a.ae(a, b, c);
  }
  var d;
  d = KF[m(null == a ? null : a)];
  if (!d && (d = KF._, !d)) {
    throw s("PArrayLayout.clicked-id", a);
  }
  return d.call(null, a, b, c);
}
function LF(a, b, c) {
  if (a ? a.be : a) {
    return a.be(a, b, c);
  }
  var d;
  d = LF[m(null == a ? null : a)];
  if (!d && (d = LF._, !d)) {
    throw s("PArrayLayout.draw-element", a);
  }
  return d.call(null, a, b, c);
}
function MF(a, b, c) {
  if (a ? a.de : a) {
    return a.de(a, b, c);
  }
  var d;
  d = MF[m(null == a ? null : a)];
  if (!d && (d = MF._, !d)) {
    throw s("PArrayLayout.highlight-dt", a);
  }
  return d.call(null, a, b, c);
}
function NF(a, b, c, d) {
  if (a ? a.ee : a) {
    return a.ee(a, b, c, d);
  }
  var e;
  e = NF[m(null == a ? null : a)];
  if (!e && (e = NF._, !e)) {
    throw s("PArrayLayout.highlight-element", a);
  }
  return e.call(null, a, b, c, d);
}
function OF(a) {
  a = EF(a);
  return $s.g(a) + ap.g(a);
}
function PF(a, b, c) {
  var d = HF(a), e = O.j(d, 0, null), d = O.j(d, 1, null), f = FF(a, c);
  c = O.j(f, 0, null);
  f = O.j(f, 1, null);
  b = GF(a, b);
  a = O.j(b, 0, null);
  b = O.j(b, 1, null);
  return new V(null, 2, 5, W, [c + a + .5 * e, f + b + .5 * d], null);
}
function QF(a, b, c) {
  var d = JF(b), e = d + IF(b) + -1, f = 1 === N(Xw(No.g(b)));
  bD(a);
  c = B(c);
  for (var g = null, h = 0, l = 0;;) {
    if (l < h) {
      var p = g.F(null, l);
      d <= p && p <= e && (LF(b, a, p), f || (a.fill(), bD(a)));
      l += 1;
    } else {
      if (c = B(c)) {
        g = c, U(g) ? (c = x(g), l = z(g), g = c, h = N(c), c = l) : (c = D(g), d <= c && c <= e && (LF(b, a, c), f || (a.fill(), bD(a))), c = G(g), g = null, h = 0), l = 0;
      } else {
        break;
      }
    }
  }
  f && a.fill();
}
function RF(a, b, c) {
  cD(a);
  c = B(Nl(c, Sk(c)));
  for (var d = null, e = 0, f = 0;;) {
    if (f < e) {
      var g = d.F(null, f), h = O.j(g, 0, null), g = O.j(g, 1, null), l = a;
      mD.h ? mD.h(l, h) : mD.call(null, l, h);
      QF(a, b, g);
      a.fill();
      f += 1;
    } else {
      if (c = B(c)) {
        U(c) ? (e = x(c), c = z(c), d = e, e = N(e)) : (e = D(c), d = O.j(e, 0, null), e = O.j(e, 1, null), f = a, mD.h ? mD.h(f, d) : mD.call(null, f, d), QF(a, b, e), a.fill(), c = G(c), d = null, e = 0), f = 0;
      } else {
        break;
      }
    }
  }
  dD(a);
}
function SF(a, b, c, d) {
  return a.arc(b, c, d, 0, 2 * Math.PI, !0);
}
function TF(a, b, c, d) {
  return new n(null, 4, [$s, a - c / 2, Ql, b - d / 2, ap, c, Tr, d], null);
}
function UF(a, b, c) {
  lD(a, c);
  a.lineWidth = 3;
  hD(a, b);
  lD(a, "black");
  a.lineWidth = 1;
  hD(a, b);
  return a;
}
function VF(a, b, c, d, e, f, g, h, l, p, r, t, u) {
  this.K = a;
  this.X = b;
  this.Oa = c;
  this.Q = d;
  this.T = e;
  this.$ = f;
  this.Z = g;
  this.W = h;
  this.aa = l;
  this.da = p;
  this.ba = r;
  this.m = t;
  this.l = u;
  this.t = 2229667594;
  this.G = 8192;
  11 < arguments.length ? (this.m = t, this.l = u) : this.l = this.m = null;
}
k = VF.prototype;
k.N = function(a, b) {
  return Md.j(this, b, null);
};
k.L = function(a, b, c) {
  switch(b instanceof X ? b.ca : null) {
    case "scroll-top":
      return this.X;
    case "topo":
      return this.K;
    case "element-h":
      return this.T;
    case "shrink":
      return this.$;
    case "draw-steps":
      return this.Oa;
    case "height-px":
      return this.aa;
    case "top-px":
      return this.W;
    case "left-px":
      return this.Z;
    case "circles?":
      return this.da;
    case "highlight-color":
      return this.ba;
    case "element-w":
      return this.Q;
    default:
      return Q.j(this.l, b, c);
  }
};
k.P = function(a, b, c) {
  return zl(b, function() {
    return function(a) {
      return zl(b, Fl, "", " ", "", c, a);
    };
  }(this), "#comportexviz.viz-layouts.Grid1dLayout{", ", ", "}", c, Rh.h(new V(null, 11, 5, W, [new V(null, 2, 5, W, [No, this.K], null), new V(null, 2, 5, W, [no, this.X], null), new V(null, 2, 5, W, [Np, this.Oa], null), new V(null, 2, 5, W, [Xv, this.Q], null), new V(null, 2, 5, W, [dp, this.T], null), new V(null, 2, 5, W, [Hp, this.$], null), new V(null, 2, 5, W, [rs, this.Z], null), new V(null, 2, 5, W, [ms, this.W], null), new V(null, 2, 5, W, [Gr, this.aa], null), new V(null, 2, 5, W, [gv, 
  this.da], null), new V(null, 2, 5, W, [nv, this.ba], null)], null), this.l));
};
k.I = function() {
  return this.m;
};
k.V = function() {
  return 11 + N(this.l);
};
k.he = function() {
  var a = bx(this.K), b = (this.aa - this.W) / this.T;
  return a < b ? a : b;
};
k.de = function(a, b, c) {
  c = FF(this, c);
  a = O.j(c, 0, null);
  c = O.j(c, 1, null);
  var d = EF(this);
  return UF(b, new n(null, 4, [$s, a, Ql, c - 5, ap, this.Q + 1, Tr, 10 + Tr.g(d)], null), this.ba);
};
k.ce = function() {
  return new V(null, 2, 5, W, [this.Q, this.T], null);
};
k.be = function(a, b, c) {
  c = GF(this, c);
  a = O.j(c, 0, null);
  c = O.j(c, 1, null);
  if (q(this.da)) {
    var d = this.Q * this.$ * .5;
    b = SF(b, a + d, c + d, d);
  } else {
    b = b.rect(a, c, this.Q * this.$, this.T * this.$);
  }
  return b;
};
k.jf = function() {
  return this.X;
};
k.ie = function(a, b) {
  return new V(null, 2, 5, W, [this.Z + this.Oa * this.Q - (b + 1) * this.Q, this.W], null);
};
k.ge = function(a, b) {
  return new V(null, 2, 5, W, [0, (b - this.X) * this.T], null);
};
k.ae = function(a, b, c) {
  var d = this, e = d.Z + d.Oa * d.Q;
  a = function() {
    var a = (e - b) / d.Q;
    return Math.floor.g ? Math.floor.g(a) : Math.floor.call(null, a);
  }();
  var f = function() {
    var a = (c - d.W) / d.T;
    return Math.floor.g ? Math.floor.g(a) : Math.floor.call(null, a);
  }(), g = f + d.X;
  return 0 <= a && a <= d.Oa && 0 <= f && f <= IF(this) ? new V(null, 2, 5, W, [a, g], null) : null;
};
k.ee = function(a, b, c, d) {
  a = FF(this, c);
  O.j(a, 0, null);
  a = O.j(a, 1, null);
  d = GF(this, d);
  O.j(d, 0, null);
  d = O.j(d, 1, null);
  c = EF(this);
  return UF(b, new n(null, 4, [$s, $s.g(c) - 5, Ql, a + d, ap, ap.g(c) + 10, Tr, this.T + 1], null), this.ba);
};
k.fe = function() {
  var a = this.Z, b = this.W, c = this.Oa * this.Q, d = this.aa, e = bx(this.K) * this.T;
  return new n(null, 4, [$s, a, Ql, b, ap, c, Tr, d < e ? d : e], null);
};
k.R = function() {
  var a = this.w;
  return null != a ? a : this.w = a = th(this);
};
k.O = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && Bj(this, b) : b) ? !0 : !1;
};
k.Ra = function(a, b) {
  return Lg(new Xk(null, new n(null, 11, [no, null, No, null, dp, null, Hp, null, Np, null, Gr, null, ms, null, rs, null, gv, null, nv, null, Xv, null], null), null), b) ? tg.h(ag(Oi.h(Jj, this), this.m), b) : new VF(this.K, this.X, this.Oa, this.Q, this.T, this.$, this.Z, this.W, this.aa, this.da, this.ba, this.m, Zh(tg.h(this.l, b)), null);
};
k.Ia = function(a, b, c) {
  return q(Z.h ? Z.h(No, b) : Z.call(null, No, b)) ? new VF(c, this.X, this.Oa, this.Q, this.T, this.$, this.Z, this.W, this.aa, this.da, this.ba, this.m, this.l, null) : q(Z.h ? Z.h(no, b) : Z.call(null, no, b)) ? new VF(this.K, c, this.Oa, this.Q, this.T, this.$, this.Z, this.W, this.aa, this.da, this.ba, this.m, this.l, null) : q(Z.h ? Z.h(Np, b) : Z.call(null, Np, b)) ? new VF(this.K, this.X, c, this.Q, this.T, this.$, this.Z, this.W, this.aa, this.da, this.ba, this.m, this.l, null) : q(Z.h ? 
  Z.h(Xv, b) : Z.call(null, Xv, b)) ? new VF(this.K, this.X, this.Oa, c, this.T, this.$, this.Z, this.W, this.aa, this.da, this.ba, this.m, this.l, null) : q(Z.h ? Z.h(dp, b) : Z.call(null, dp, b)) ? new VF(this.K, this.X, this.Oa, this.Q, c, this.$, this.Z, this.W, this.aa, this.da, this.ba, this.m, this.l, null) : q(Z.h ? Z.h(Hp, b) : Z.call(null, Hp, b)) ? new VF(this.K, this.X, this.Oa, this.Q, this.T, c, this.Z, this.W, this.aa, this.da, this.ba, this.m, this.l, null) : q(Z.h ? Z.h(rs, b) : 
  Z.call(null, rs, b)) ? new VF(this.K, this.X, this.Oa, this.Q, this.T, this.$, c, this.W, this.aa, this.da, this.ba, this.m, this.l, null) : q(Z.h ? Z.h(ms, b) : Z.call(null, ms, b)) ? new VF(this.K, this.X, this.Oa, this.Q, this.T, this.$, this.Z, c, this.aa, this.da, this.ba, this.m, this.l, null) : q(Z.h ? Z.h(Gr, b) : Z.call(null, Gr, b)) ? new VF(this.K, this.X, this.Oa, this.Q, this.T, this.$, this.Z, this.W, c, this.da, this.ba, this.m, this.l, null) : q(Z.h ? Z.h(gv, b) : Z.call(null, gv, 
  b)) ? new VF(this.K, this.X, this.Oa, this.Q, this.T, this.$, this.Z, this.W, this.aa, c, this.ba, this.m, this.l, null) : q(Z.h ? Z.h(nv, b) : Z.call(null, nv, b)) ? new VF(this.K, this.X, this.Oa, this.Q, this.T, this.$, this.Z, this.W, this.aa, this.da, c, this.m, this.l, null) : new VF(this.K, this.X, this.Oa, this.Q, this.T, this.$, this.Z, this.W, this.aa, this.da, this.ba, this.m, R.j(this.l, b, c), null);
};
k.S = function() {
  return B(Rh.h(new V(null, 11, 5, W, [new V(null, 2, 5, W, [No, this.K], null), new V(null, 2, 5, W, [no, this.X], null), new V(null, 2, 5, W, [Np, this.Oa], null), new V(null, 2, 5, W, [Xv, this.Q], null), new V(null, 2, 5, W, [dp, this.T], null), new V(null, 2, 5, W, [Hp, this.$], null), new V(null, 2, 5, W, [rs, this.Z], null), new V(null, 2, 5, W, [ms, this.W], null), new V(null, 2, 5, W, [Gr, this.aa], null), new V(null, 2, 5, W, [gv, this.da], null), new V(null, 2, 5, W, [nv, this.ba], null)], 
  null), this.l));
};
k.J = function(a, b) {
  return new VF(this.K, this.X, this.Oa, this.Q, this.T, this.$, this.Z, this.W, this.aa, this.da, this.ba, b, this.l, this.w);
};
k.U = function(a, b) {
  return Eg(b) ? Pd(this, w.h(b, 0), w.h(b, 1)) : od.j(Ad, this, b);
};
function WF(a) {
  return new VF(No.g(a), no.g(a), Np.g(a), Xv.g(a), dp.g(a), Hp.g(a), rs.g(a), ms.g(a), Gr.g(a), gv.g(a), nv.g(a), null, tg.k(a, No, H([no, Np, Xv, dp, Hp, rs, ms, Gr, gv, nv], 0)));
}
function XF(a, b, c) {
  var d = Jg(c) ? S.h(ji, c) : c;
  c = Q.h(d, nv);
  var e = Q.h(d, Lv), f = Q.h(d, dr), g = Q.h(d, bt), d = Q.h(d, Np);
  return WF(sg([no, No, dp, Hp, Np, Gr, ms, rs, gv, nv, Xv], [0, a, f, e, d, 900, 30, b, !1, c, g]));
}
function YF(a, b, c, d, e, f, g, h, l, p, r, t) {
  this.K = a;
  this.X = b;
  this.Q = c;
  this.T = d;
  this.$ = e;
  this.Z = f;
  this.W = g;
  this.aa = h;
  this.da = l;
  this.ba = p;
  this.m = r;
  this.l = t;
  this.t = 2229667594;
  this.G = 8192;
  10 < arguments.length ? (this.m = r, this.l = t) : this.l = this.m = null;
}
k = YF.prototype;
k.N = function(a, b) {
  return Md.j(this, b, null);
};
k.L = function(a, b, c) {
  switch(b instanceof X ? b.ca : null) {
    case "scroll-top":
      return this.X;
    case "topo":
      return this.K;
    case "element-h":
      return this.T;
    case "shrink":
      return this.$;
    case "height-px":
      return this.aa;
    case "top-px":
      return this.W;
    case "left-px":
      return this.Z;
    case "circles?":
      return this.da;
    case "highlight-color":
      return this.ba;
    case "element-w":
      return this.Q;
    default:
      return Q.j(this.l, b, c);
  }
};
k.P = function(a, b, c) {
  return zl(b, function() {
    return function(a) {
      return zl(b, Fl, "", " ", "", c, a);
    };
  }(this), "#comportexviz.viz-layouts.Grid2dLayout{", ", ", "}", c, Rh.h(new V(null, 10, 5, W, [new V(null, 2, 5, W, [No, this.K], null), new V(null, 2, 5, W, [no, this.X], null), new V(null, 2, 5, W, [Xv, this.Q], null), new V(null, 2, 5, W, [dp, this.T], null), new V(null, 2, 5, W, [Hp, this.$], null), new V(null, 2, 5, W, [rs, this.Z], null), new V(null, 2, 5, W, [ms, this.W], null), new V(null, 2, 5, W, [Gr, this.aa], null), new V(null, 2, 5, W, [gv, this.da], null), new V(null, 2, 5, W, [nv, 
  this.ba], null)], null), this.l));
};
k.I = function() {
  return this.m;
};
k.V = function() {
  return 10 + N(this.l);
};
k.he = function() {
  var a = Xw(this.K), b = O.j(a, 0, null), a = O.j(a, 1, null), c = (this.aa - this.W) / this.T;
  return b * (a < c ? a : c);
};
k.de = function(a, b, c) {
  c = FF(this, c);
  a = O.j(c, 0, null);
  c = O.j(c, 1, null);
  var d = EF(this);
  return UF(b, new n(null, 4, [$s, a - 5, Ql, c - 5, ap, 10 + ap.g(d), Tr, 10 + Tr.g(d)], null), this.ba);
};
k.ce = function() {
  return new V(null, 2, 5, W, [this.Q, this.T], null);
};
k.be = function(a, b, c) {
  c = GF(this, c);
  a = O.j(c, 0, null);
  c = O.j(c, 1, null);
  if (q(this.da)) {
    var d = this.Q * this.$ * .5;
    b = SF(b, a + d, c + d, d);
  } else {
    b = b.rect(a, c, this.Q * this.$, this.T * this.$);
  }
  return b;
};
k.jf = function() {
  return this.X;
};
k.ie = function() {
  return new V(null, 2, 5, W, [this.Z, this.W], null);
};
k.ge = function(a, b) {
  var c = Yw(this.K, b + this.X), d = O.j(c, 0, null), c = O.j(c, 1, null);
  return new V(null, 2, 5, W, [d * this.Q, c * this.T], null);
};
k.ae = function(a, b, c) {
  var d = this, e = Xw(d.K);
  a = O.j(e, 0, null);
  var e = O.j(e, 1, null), f = function() {
    var a = (b - d.Z) / d.Q;
    return Math.floor.g ? Math.floor.g(a) : Math.floor.call(null, a);
  }(), g = function() {
    var a = (c - d.W) / d.T;
    return Math.floor.g ? Math.floor.g(a) : Math.floor.call(null, a);
  }();
  return 0 <= f && f <= a - 1 && 0 <= g && g <= e - 1 ? (a = Zw(d.K, new V(null, 2, 5, W, [f, g], null)) - d.X, new V(null, 2, 5, W, [0, a], null)) : null;
};
k.ee = function(a, b, c, d) {
  c = FF(this, c);
  a = O.j(c, 0, null);
  c = O.j(c, 1, null);
  var e = GF(this, d);
  d = O.j(e, 0, null);
  e = O.j(e, 1, null);
  EF(this);
  return UF(b, new n(null, 4, [$s, a + d, Ql, c + e, ap, this.Q + 1, Tr, this.T + 1], null), this.ba);
};
k.fe = function() {
  var a = Xw(this.K), b = O.j(a, 0, null), c = O.j(a, 1, null), a = this.aa, c = c * this.T;
  return new n(null, 4, [$s, this.Z, Ql, this.W, ap, b * this.Q, Tr, a < c ? a : c], null);
};
k.R = function() {
  var a = this.w;
  return null != a ? a : this.w = a = th(this);
};
k.O = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && Bj(this, b) : b) ? !0 : !1;
};
k.Ra = function(a, b) {
  return Lg(new Xk(null, new n(null, 10, [no, null, No, null, dp, null, Hp, null, Gr, null, ms, null, rs, null, gv, null, nv, null, Xv, null], null), null), b) ? tg.h(ag(Oi.h(Jj, this), this.m), b) : new YF(this.K, this.X, this.Q, this.T, this.$, this.Z, this.W, this.aa, this.da, this.ba, this.m, Zh(tg.h(this.l, b)), null);
};
k.Ia = function(a, b, c) {
  return q(Z.h ? Z.h(No, b) : Z.call(null, No, b)) ? new YF(c, this.X, this.Q, this.T, this.$, this.Z, this.W, this.aa, this.da, this.ba, this.m, this.l, null) : q(Z.h ? Z.h(no, b) : Z.call(null, no, b)) ? new YF(this.K, c, this.Q, this.T, this.$, this.Z, this.W, this.aa, this.da, this.ba, this.m, this.l, null) : q(Z.h ? Z.h(Xv, b) : Z.call(null, Xv, b)) ? new YF(this.K, this.X, c, this.T, this.$, this.Z, this.W, this.aa, this.da, this.ba, this.m, this.l, null) : q(Z.h ? Z.h(dp, b) : Z.call(null, 
  dp, b)) ? new YF(this.K, this.X, this.Q, c, this.$, this.Z, this.W, this.aa, this.da, this.ba, this.m, this.l, null) : q(Z.h ? Z.h(Hp, b) : Z.call(null, Hp, b)) ? new YF(this.K, this.X, this.Q, this.T, c, this.Z, this.W, this.aa, this.da, this.ba, this.m, this.l, null) : q(Z.h ? Z.h(rs, b) : Z.call(null, rs, b)) ? new YF(this.K, this.X, this.Q, this.T, this.$, c, this.W, this.aa, this.da, this.ba, this.m, this.l, null) : q(Z.h ? Z.h(ms, b) : Z.call(null, ms, b)) ? new YF(this.K, this.X, this.Q, 
  this.T, this.$, this.Z, c, this.aa, this.da, this.ba, this.m, this.l, null) : q(Z.h ? Z.h(Gr, b) : Z.call(null, Gr, b)) ? new YF(this.K, this.X, this.Q, this.T, this.$, this.Z, this.W, c, this.da, this.ba, this.m, this.l, null) : q(Z.h ? Z.h(gv, b) : Z.call(null, gv, b)) ? new YF(this.K, this.X, this.Q, this.T, this.$, this.Z, this.W, this.aa, c, this.ba, this.m, this.l, null) : q(Z.h ? Z.h(nv, b) : Z.call(null, nv, b)) ? new YF(this.K, this.X, this.Q, this.T, this.$, this.Z, this.W, this.aa, this.da, 
  c, this.m, this.l, null) : new YF(this.K, this.X, this.Q, this.T, this.$, this.Z, this.W, this.aa, this.da, this.ba, this.m, R.j(this.l, b, c), null);
};
k.S = function() {
  return B(Rh.h(new V(null, 10, 5, W, [new V(null, 2, 5, W, [No, this.K], null), new V(null, 2, 5, W, [no, this.X], null), new V(null, 2, 5, W, [Xv, this.Q], null), new V(null, 2, 5, W, [dp, this.T], null), new V(null, 2, 5, W, [Hp, this.$], null), new V(null, 2, 5, W, [rs, this.Z], null), new V(null, 2, 5, W, [ms, this.W], null), new V(null, 2, 5, W, [Gr, this.aa], null), new V(null, 2, 5, W, [gv, this.da], null), new V(null, 2, 5, W, [nv, this.ba], null)], null), this.l));
};
k.J = function(a, b) {
  return new YF(this.K, this.X, this.Q, this.T, this.$, this.Z, this.W, this.aa, this.da, this.ba, b, this.l, this.w);
};
k.U = function(a, b) {
  return Eg(b) ? Pd(this, w.h(b, 0), w.h(b, 1)) : od.j(Ad, this, b);
};
function ZF(a) {
  return new YF(No.g(a), no.g(a), Xv.g(a), dp.g(a), Hp.g(a), rs.g(a), ms.g(a), Gr.g(a), gv.g(a), nv.g(a), null, tg.k(a, No, H([no, Xv, dp, Hp, rs, ms, Gr, gv, nv], 0)));
}
function $F(a, b, c) {
  var d = Jg(c) ? S.h(ji, c) : c;
  c = Q.h(d, nv);
  var e = Q.h(d, Lv), f = Q.h(d, dr), d = Q.h(d, bt);
  return ZF(sg([no, No, dp, Hp, Gr, ms, rs, gv, nv, Xv], [0, a, f, e, 900, 30, b, !1, c, d]));
}
;var aG, bG = function() {
  function a(a, b, c, g) {
    var h = a instanceof X ? function() {
      switch(a instanceof X ? a.ca : null) {
        case "pink":
          return 300;
        case "purple":
          return 270;
        case "blue":
          return 210;
        case "green":
          return 120;
        case "yellow-green":
          return 90;
        case "yellow":
          return 60;
        case "orange":
          return 30;
        case "red":
          return 0;
        default:
          throw Error("No matching clause: " + v.g(a));;
      }
    }() : a;
    return "hsla(" + v.g(h) + "," + v.g(ah(100 * b)) + "%," + v.g(ah(100 * c)) + "%," + v.g(g) + ")";
  }
  function b(a, b, f) {
    return c.p(a, b, f, 1);
  }
  var c = null, c = function(c, e, f, g) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, f);
      case 4:
        return a.call(this, c, e, f, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.j = b;
  c.p = a;
  return c;
}(), cG = sg([Pl, ro, Eo, Po, yp, yr, Zr, gt, iv], ["white", bG.p(lp, 1, .5, .4), "white", bG.p(Oo, 1, .75, .5), "white", bG.j(vt, 1, .4), bG.j(fs, 1, .5), bG.p(gs, 1, .5, .5), "black"]), dG, eG = new n(null, 5, [mt, new n(null, 2, [Zr, !0, gt, !0], null), Zo, new n(null, 6, [Zr, !0, bs, null, hm, null, Kp, !0, ro, !0, oo, 0], null), Zl, new n(null, 4, [Zr, null, Pl, null, Eo, null, uv, null], null), Ho, new n(null, 5, [Ur, fr, Zr, !0, Pl, null, Eo, null, uv, null], null), Os, sg([Tl, mo, So, Uo, 
Vo, Np, dr, ls, bt, nv, Kv, Lv, Rv], [30, 50, 10, 60, .85, 25, 3, 150, 3, Po.g(cG), 5, .85, 10])], null);
dG = li.g ? li.g(eG) : li.call(null, eG);
var fG = li.g ? li.g(25) : li.call(null, 25), gG = li.g ? li.g(pg) : li.call(null, pg), hG = li.g ? li.g(null) : li.call(null, null);
function iG(a, b, c, d) {
  c = FF(b, c);
  b = O.j(c, 0, null);
  c = O.j(c, 1, null);
  pD.p(a, d, b, c);
}
function jG(a) {
  oi.p(hG, Ui, new V(null, 1, 5, W, [sp], null), function(b) {
    return Pi.h(function(b) {
      var d = IF(b), e = bx(No.g(b));
      return Ui.j(b, new V(null, 1, 5, W, [no], null), function(b, c) {
        return function(d) {
          if (q(a)) {
            d += b;
            var e = c - b;
            return d < e ? d : e;
          }
          d -= b;
          return 0 < d ? d : 0;
        };
      }(d, e));
    }, b);
  });
  return oi.p(dG, Ui, new V(null, 2, 5, W, [Zo, oo], null), function(b) {
    return q(a) ? b + 1 : b - 1;
  });
}
function kG(a, b, c, d, e, f, g, h) {
  cD(a);
  a.lineWidth = 1;
  mD(a, 1);
  for (var l = Kq.g(b), p = q(f) ? new V(null, 1, 5, W, [f], null) : Bw(b), r = qw(d, 0), t = rw(d, 0), u = Ri.h(h, new V(null, 2, 5, W, [Zl, Pl], null)), A = Ri.h(h, new V(null, 2, 5, W, [Zl, Eo], null)), y = Ri.h(h, new V(null, 2, 5, W, [Zl, uv], null)), C = B(p), F = null, J = 0, L = 0;;) {
    if (L < J) {
      for (var I = F.F(null, L), P = B(Rh.k(q(A) ? new V(null, 1, 5, W, [Eo], null) : null, q(u) ? new V(null, 1, 5, W, [iv], null) : null, H([new V(null, 2, 5, W, [Zr, yr], null)], 0))), T = null, M = 0, ga = 0;;) {
        if (ga < M) {
          var Y = T.F(null, ga), na = Iw(l, I), ha = Vk(na, Jw(l, I)), pa = function() {
            switch(Y instanceof X ? Y.ca : null) {
              case "disconnected":
                return S.j(tg, na, Sk(ha));
              case "inactive-syn":
                return S.j(tg, ha, r);
              case "active-predicted":
                return Vk(ha, t);
              case "active":
                return Vk(ha, r);
              default:
                throw Error("No matching clause: " + v.g(Y));;
            }
          }(), ka = PF(c, I, g), oa = O.j(ka, 0, null), qa = O.j(ka, 1, null);
          lD(a, function() {
            var a = Y;
            return cG.g ? cG.g(a) : cG.call(null, a);
          }());
          for (var ib = B(pa), Ha = null, tb = 0, Fa = 0;;) {
            if (Fa < tb) {
              var Ca = Ha.F(null, Fa), Ya = O.j(Ca, 0, null), Bb = O.j(Ca, 1, null), Ta = sw(d, Ya), ub = O.j(Ta, 0, null);
              O.j(Ta, 1, null);
              var Cb = PF(e, ub, g), ra = O.j(Cb, 0, null), jd = O.j(Cb, 1, null), jc = a;
              mD(jc, q(y) ? Bb : 1);
              bD(jc);
              jc.moveTo(oa - 1, qa);
              jc.lineTo(ra + 1, jd);
              fD(jc);
              Fa += 1;
            } else {
              var tc = B(ib);
              if (tc) {
                var $c = tc;
                if (U($c)) {
                  var Dd = x($c), ya = z($c), Le = Dd, qf = N(Dd), ib = ya, Ha = Le, tb = qf
                } else {
                  var Me = D($c), le = O.j(Me, 0, null), rf = O.j(Me, 1, null), zc = sw(d, le), Ac = O.j(zc, 0, null);
                  O.j(zc, 1, null);
                  var pd = PF(e, Ac, g), Bc = O.j(pd, 0, null), Cc = O.j(pd, 1, null), qd = a;
                  mD(qd, q(y) ? rf : 1);
                  bD(qd);
                  qd.moveTo(oa - 1, qa);
                  qd.lineTo(Bc + 1, Cc);
                  fD(qd);
                  ib = G($c);
                  Ha = null;
                  tb = 0;
                }
                Fa = 0;
              } else {
                break;
              }
            }
          }
          ga += 1;
        } else {
          var me = B(P);
          if (me) {
            var Ne = me;
            if (U(Ne)) {
              var sf = x(Ne), yi = z(Ne), tf = sf, rd = N(sf), P = yi, T = tf, M = rd
            } else {
              var Eb = D(Ne), qc = Iw(l, I), Qb = Vk(qc, Jw(l, I)), sd = function() {
                switch(Eb instanceof X ? Eb.ca : null) {
                  case "disconnected":
                    return S.j(tg, qc, Sk(Qb));
                  case "inactive-syn":
                    return S.j(tg, Qb, r);
                  case "active-predicted":
                    return Vk(Qb, t);
                  case "active":
                    return Vk(Qb, r);
                  default:
                    throw Error("No matching clause: " + v.g(Eb));;
                }
              }(), ad = PF(c, I, g), Sc = O.j(ad, 0, null), Af = O.j(ad, 1, null);
              lD(a, function() {
                var a = Eb;
                return cG.g ? cG.g(a) : cG.call(null, a);
              }());
              for (var Te = B(sd), Ud = null, gb = 0, bd = 0;;) {
                if (bd < gb) {
                  var pe = Ud.F(null, bd), Ue = O.j(pe, 0, null), Vd = O.j(pe, 1, null), Id = sw(d, Ue), ia = O.j(Id, 0, null);
                  O.j(Id, 1, null);
                  var Bf = PF(e, ia, g), eg = O.j(Bf, 0, null), Cf = O.j(Bf, 1, null), Dc = a;
                  mD(Dc, q(y) ? Vd : 1);
                  bD(Dc);
                  Dc.moveTo(Sc - 1, Af);
                  Dc.lineTo(eg + 1, Cf);
                  fD(Dc);
                  bd += 1;
                } else {
                  var cd = B(Te);
                  if (cd) {
                    var Sb = cd;
                    if (U(Sb)) {
                      var hc = x(Sb), Wd = z(Sb), Ve = hc, fg = N(hc), Te = Wd, Ud = Ve, gb = fg
                    } else {
                      var Jd = D(Sb), hb = O.j(Jd, 0, null), ih = O.j(Jd, 1, null), Tc = sw(d, hb), dd = O.j(Tc, 0, null);
                      O.j(Tc, 1, null);
                      var Xd = PF(e, dd, g), ed = O.j(Xd, 0, null), Uc = O.j(Xd, 1, null), fd = a;
                      mD(fd, q(y) ? ih : 1);
                      bD(fd);
                      fd.moveTo(Sc - 1, Af);
                      fd.lineTo(ed + 1, Uc);
                      fD(fd);
                      Te = G(Sb);
                      Ud = null;
                      gb = 0;
                    }
                    bd = 0;
                  } else {
                    break;
                  }
                }
              }
              P = G(Ne);
              T = null;
              M = 0;
            }
            ga = 0;
          } else {
            break;
          }
        }
      }
      L += 1;
    } else {
      var jh = B(C);
      if (jh) {
        var Yd = jh;
        if (U(Yd)) {
          var We = x(Yd), gg = z(Yd), qe = We, ud = N(We), C = gg, F = qe, J = ud
        } else {
          for (var Kd = D(Yd), rc = B(Rh.k(q(A) ? new V(null, 1, 5, W, [Eo], null) : null, q(u) ? new V(null, 1, 5, W, [iv], null) : null, H([new V(null, 2, 5, W, [Zr, yr], null)], 0))), Zd = null, hg = 0, Xe = 0;;) {
            if (Xe < hg) {
              var Ye = Zd.F(null, Xe), ig = Iw(l, Kd), Ze = Vk(ig, Jw(l, Kd)), Df = function() {
                switch(Ye instanceof X ? Ye.ca : null) {
                  case "disconnected":
                    return S.j(tg, ig, Sk(Ze));
                  case "inactive-syn":
                    return S.j(tg, Ze, r);
                  case "active-predicted":
                    return Vk(Ze, t);
                  case "active":
                    return Vk(Ze, r);
                  default:
                    throw Error("No matching clause: " + v.g(Ye));;
                }
              }(), gd = PF(c, Kd, g), $d = O.j(gd, 0, null), Ld = O.j(gd, 1, null);
              lD(a, function() {
                var a = Ye;
                return cG.g ? cG.g(a) : cG.call(null, a);
              }());
              for (var hd = B(Df), Ef = null, re = 0, $e = 0;;) {
                if ($e < re) {
                  var kh = Ef.F(null, $e), lh = O.j(kh, 0, null), jg = O.j(kh, 1, null), af = sw(d, lh), kg = O.j(af, 0, null);
                  O.j(af, 1, null);
                  var Nj = PF(e, kg, g), gl = O.j(Nj, 0, null), Cm = O.j(Nj, 1, null), ae = a;
                  mD(ae, q(y) ? jg : 1);
                  bD(ae);
                  ae.moveTo($d - 1, Ld);
                  ae.lineTo(gl + 1, Cm);
                  fD(ae);
                  $e += 1;
                } else {
                  var Oj = B(hd);
                  if (Oj) {
                    var mh = Oj;
                    if (U(mh)) {
                      var hl = x(mh), nh = z(mh), il = hl, oh = N(hl), hd = nh, Ef = il, re = oh
                    } else {
                      var Pj = D(mh), Dm = O.j(Pj, 0, null), db = O.j(Pj, 1, null), Sp = sw(d, Dm), Tp = O.j(Sp, 0, null);
                      O.j(Sp, 1, null);
                      var Em = PF(e, Tp, g), yt = O.j(Em, 0, null), zt = O.j(Em, 1, null), Di = a;
                      mD(Di, q(y) ? db : 1);
                      bD(Di);
                      Di.moveTo($d - 1, Ld);
                      Di.lineTo(yt + 1, zt);
                      fD(Di);
                      hd = G(mh);
                      Ef = null;
                      re = 0;
                    }
                    $e = 0;
                  } else {
                    break;
                  }
                }
              }
              Xe += 1;
            } else {
              var Up = B(rc);
              if (Up) {
                var Qj = Up;
                if (U(Qj)) {
                  var Ei = x(Qj), Vp = z(Qj), Rj = Ei, Wp = N(Ei), rc = Vp, Zd = Rj, hg = Wp
                } else {
                  var jl = D(Qj), Xp = Iw(l, Kd), kl = Vk(Xp, Jw(l, Kd)), At = function() {
                    switch(jl instanceof X ? jl.ca : null) {
                      case "disconnected":
                        return S.j(tg, Xp, Sk(kl));
                      case "inactive-syn":
                        return S.j(tg, kl, r);
                      case "active-predicted":
                        return Vk(kl, t);
                      case "active":
                        return Vk(kl, r);
                      default:
                        throw Error("No matching clause: " + v.g(jl));;
                    }
                  }(), Yp = PF(c, Kd, g), ll = O.j(Yp, 0, null), ml = O.j(Yp, 1, null);
                  lD(a, function() {
                    var a = jl;
                    return cG.g ? cG.g(a) : cG.call(null, a);
                  }());
                  for (var Sj = B(At), ph = null, nl = 0, Fi = 0;;) {
                    if (Fi < nl) {
                      var Zp = ph.F(null, Fi), Bt = O.j(Zp, 0, null), $p = O.j(Zp, 1, null), aq = sw(d, Bt), Ct = O.j(aq, 0, null);
                      O.j(aq, 1, null);
                      var Gi = PF(e, Ct, g), bq = O.j(Gi, 0, null), Tj = O.j(Gi, 1, null), Hi = a;
                      mD(Hi, q(y) ? $p : 1);
                      bD(Hi);
                      Hi.moveTo(ll - 1, ml);
                      Hi.lineTo(bq + 1, Tj);
                      fD(Hi);
                      Fi += 1;
                    } else {
                      var cq = B(Sj);
                      if (cq) {
                        var Uj = cq;
                        if (U(Uj)) {
                          var dq = x(Uj), eq = z(Uj), fq = dq, Dt = N(dq), Sj = eq, ph = fq, nl = Dt
                        } else {
                          var gq = D(Uj), hq = O.j(gq, 0, null), ol = O.j(gq, 1, null), iq = sw(d, hq), Vj = O.j(iq, 0, null);
                          O.j(iq, 1, null);
                          var Fm = PF(e, Vj, g), Wj = O.j(Fm, 0, null), jq = O.j(Fm, 1, null), Xj = a;
                          mD(Xj, q(y) ? ol : 1);
                          bD(Xj);
                          Xj.moveTo(ll - 1, ml);
                          Xj.lineTo(Wj + 1, jq);
                          fD(Xj);
                          Sj = G(Uj);
                          ph = null;
                          nl = 0;
                        }
                        Fi = 0;
                      } else {
                        break;
                      }
                    }
                  }
                  rc = G(Qj);
                  Zd = null;
                  hg = 0;
                }
                Xe = 0;
              } else {
                break;
              }
            }
          }
          C = G(Yd);
          F = null;
          J = 0;
        }
        L = 0;
      } else {
        break;
      }
    }
  }
  dD(a);
}
function lG(a, b, c) {
  return Nl(function(a) {
    var e = O.j(a, 0, null);
    a = O.j(a, 1, null);
    return new V(null, 2, 5, W, [a >= c ? Cp : Eo, q(b.g ? b.g(e) : b.call(null, e)) ? Zr : iv], null);
  }, a);
}
function mG(a, b, c) {
  if (a ? a.Sc : a) {
    return a.Sc(a, b, c);
  }
  var d;
  d = mG[m(null == a ? null : a)];
  if (!d && (d = mG._, !d)) {
    throw s("PCellsSegmentsLayout.seg-xy", a);
  }
  return d.call(null, a, b, c);
}
function nG(a, b) {
  if (a ? a.Cd : a) {
    return a.Cd(a, b);
  }
  var c;
  c = nG[m(null == a ? null : a)];
  if (!c && (c = nG._, !c)) {
    throw s("PCellsSegmentsLayout.cell-xy", a);
  }
  return c.call(null, a, b);
}
function oG(a, b, c) {
  a = qi.j(oj, ui.g(a), ql.g(b));
  return Pi.h(function() {
    return function(a) {
      return yh(ti.h(zg, yh(Ow(c, a))));
    };
  }(a), a);
}
var qG = function pG(b, c, d, e, f, g) {
  var h = qi.h(N, c), l = qi.h(fi.h(Zg, 1), h), p = S.h(Vg, l), r = f + Ri.h(g, new V(null, 2, 5, W, [Os, mo], null)), t = Ri.h(g, new V(null, 2, 5, W, [Os, Kv], null)), u = .5 * t, A = Ri.h(g, new V(null, 2, 5, W, [Os, Rv], null)), y = Ri.h(g, new V(null, 2, 5, W, [Os, So], null)), C = Ri.h(g, new V(null, 2, 5, W, [Os, Tl], null)), F = .5 * C, J = .95 * window.innerHeight, L = window.pageYOffset + 2 * A, I = PF(d, b, e), P = O.j(I, 0, null), T = O.j(I, 1, null);
  "undefined" === typeof aG && (aG = function(b, c, d, e, f, g, h, l, r, p, t, u, y, A, C, F, J, I, L, P, T, jc, tc) {
    this.rf = b;
    this.Pf = c;
    this.ng = d;
    this.og = e;
    this.Qe = f;
    this.fh = g;
    this.Lf = h;
    this.$d = l;
    this.Wf = r;
    this.eh = p;
    this.pg = t;
    this.nh = u;
    this.Og = y;
    this.hf = A;
    this.Zd = C;
    this.qf = F;
    this.gh = J;
    this.mg = I;
    this.Qf = L;
    this.Sg = P;
    this.Mf = T;
    this.Re = jc;
    this.Ag = tc;
    this.G = 0;
    this.t = 393216;
  }, aG.hb = !0, aG.gb = "comportexviz.viz-canvas/t20328", aG.mb = function() {
    return function(b, c) {
      return Ce(c, "comportexviz.viz-canvas/t20328");
    };
  }(h, l, p, r, t, u, A, y, C, F, J, L, I, P, T), aG.prototype.Sc = function() {
    return function(b, c, d) {
      b = S.j(Vg, d, ri.h(c, this.rf)) / this.qf;
      return new V(null, 2, 5, W, [this.Qf + this.Pf, this.Mf + 30 + b * this.Lf], null);
    };
  }(h, l, p, r, t, u, A, y, C, F, J, L, I, P, T), aG.prototype.Cd = function() {
    return function(b, c) {
      var d = mG(this, c, 0);
      O.j(d, 0, null);
      d = O.j(d, 1, null);
      return new V(null, 2, 5, W, [this.Re, d], null);
    };
  }(h, l, p, r, t, u, A, y, C, F, J, L, I, P, T), aG.prototype.Dd = function() {
    return function(b, c, d) {
      d = nG(this, d);
      b = O.j(d, 0, null);
      d = O.j(d, 1, null);
      bD(c);
      c.moveTo(this.Zd + this.hf + 1, this.$d);
      var e = this.Zd, f = (b - e) / 3;
      qD.$a(c, b - f, this.$d, e + f, d, b, d);
      fD(c);
      return c;
    };
  }(h, l, p, r, t, u, A, y, C, F, J, L, I, P, T), aG.prototype.vc = function() {
    return function(b, c, d, e) {
      var f = nG(this, d);
      b = O.j(f, 0, null);
      f = O.j(f, 1, null);
      e = mG(this, d, e);
      d = O.j(e, 0, null);
      e = O.j(e, 1, null);
      bD(c);
      c.moveTo(d, e);
      c.lineTo(b + this.Qe, f);
      fD(c);
      return c;
    };
  }(h, l, p, r, t, u, A, y, C, F, J, L, I, P, T), aG.prototype.I = function() {
    return function() {
      return this.Ag;
    };
  }(h, l, p, r, t, u, A, y, C, F, J, L, I, P, T), aG.prototype.J = function() {
    return function(b, c) {
      return new aG(this.rf, this.Pf, this.ng, this.og, this.Qe, this.fh, this.Lf, this.$d, this.Wf, this.eh, this.pg, this.nh, this.Og, this.hf, this.Zd, this.qf, this.gh, this.mg, this.Qf, this.Sg, this.Mf, this.Re, c);
    };
  }(h, l, p, r, t, u, A, y, C, F, J, L, I, P, T));
  return new aG(l, F, t, d, A, C, J, T, pG, y, e, I, h, u, P, p, c, b, r, g, L, f, null);
};
function rG(a, b, c, d, e, f, g, h) {
  cD(a);
  var l = Vw(c), p = kp.g(l), r = Yo.g(l), t = Cw(b), u = Cw(c), A = Gw(c), y = Xo.g(b), C = Q.h(Bw(b), e), F = Q.h(Aw(b), e), J = ns.g(b), L = oG(e, yw(b), J), I = qG(e, L, d, f, g, h), P = Ri.h(h, new V(null, 2, 5, W, [Os, Kv], null)), T = Ri.h(h, new V(null, 2, 5, W, [Os, Rv], null)), M = Ri.h(h, new V(null, 2, 5, W, [Os, So], null)), ga = Ri.h(h, new V(null, 2, 5, W, [Os, Tl], null)), Y = .5 * ga;
  a.lineWidth = P;
  lD(a, yp.g(cG));
  for (var na = B(gi(oj, L)), ha = null, pa = 0, ka = 0;;) {
    if (ka < pa) {
      var oa = ha.F(null, ka), qa = O.j(oa, 0, null), ib = O.j(oa, 1, null);
      I.Dd(null, a, qa);
      for (var Ha = B(ql.g(N(ib))), tb = null, Fa = 0, Ca = 0;;) {
        if (Ca < Fa) {
          var Ya = tb.F(null, Ca);
          I.vc(null, a, qa, Ya);
          Ca += 1;
        } else {
          var Bb = B(Ha);
          if (Bb) {
            var Ta = Bb;
            if (U(Ta)) {
              var ub = x(Ta), Cb = z(Ta), ra = ub, jd = N(ub), Ha = Cb, tb = ra, Fa = jd
            } else {
              var jc = D(Ta);
              I.vc(null, a, qa, jc);
              Ha = G(Ta);
              tb = null;
              Fa = 0;
            }
            Ca = 0;
          } else {
            break;
          }
        }
      }
      ka += 1;
    } else {
      var tc = B(na);
      if (tc) {
        var $c = tc;
        if (U($c)) {
          var Dd = x($c), ya = z($c), Le = Dd, qf = N(Dd), na = ya, ha = Le, pa = qf
        } else {
          var Me = D($c), le = O.j(Me, 0, null), rf = O.j(Me, 1, null);
          I.Dd(null, a, le);
          for (var zc = B(ql.g(N(rf))), Ac = null, pd = 0, Bc = 0;;) {
            if (Bc < pd) {
              var Cc = Ac.F(null, Bc);
              I.vc(null, a, le, Cc);
              Bc += 1;
            } else {
              var qd = B(zc);
              if (qd) {
                var me = qd;
                if (U(me)) {
                  var Ne = x(me), sf = z(me), yi = Ne, tf = N(Ne), zc = sf, Ac = yi, pd = tf
                } else {
                  var rd = D(me);
                  I.vc(null, a, le, rd);
                  zc = G(me);
                  Ac = null;
                  pd = 0;
                }
                Bc = 0;
              } else {
                break;
              }
            }
          }
          na = G($c);
          ha = null;
          pa = 0;
        }
        ka = 0;
      } else {
        break;
      }
    }
  }
  for (var Eb = B(gi(oj, L)), qc = null, Qb = 0, sd = 0;;) {
    if (sd < Qb) {
      var ad = qc.F(null, sd), Sc = O.j(ad, 0, null), Af = O.j(ad, 1, null), Te = I.Cd(null, Sc), Ud = O.j(Te, 0, null), gb = O.j(Te, 1, null), bd = new V(null, 2, 5, W, [e, Sc], null), pe = function() {
        var a = bd;
        return t.g ? t.g(a) : t.call(null, a);
      }(), Ue = function() {
        var a = bd;
        return A.g ? A.g(a) : A.call(null, a);
      }(), Vd = Mg(y, bd), Id = q(Vd) ? be(Vd) : null, ia = Pi.h(function(a, b, c, d, e, f, g, h, l, r, p, t, u, y, M, A, C, F, J, I) {
        return function(a) {
          return lG(a, I, F);
        };
      }(Eb, qc, Qb, sd, Te, Ud, gb, bd, pe, Ue, Vd, Id, ad, Sc, Af, l, p, r, t, u, A, y, C, F, J, L, I, P, T, M, ga, Y), Af), Bf = function(a, b, c, d, e, f, g, h, l, r, p, t, u, y, M, A, C, F) {
        return function(a) {
          var b = new V(null, 2, 5, W, [Cp, Zr], null);
          a = a.g ? a.g(b) : a.call(null, b);
          return N(a) >= F;
        };
      }(Eb, qc, Qb, sd, Te, Ud, gb, bd, pe, Ue, Vd, Id, ia, ad, Sc, Af, l, p, r, t, u, A, y, C, F, J, L, I, P, T, M, ga, Y), eg = q(function() {
        var a = pe;
        return q(a) ? Ue : a;
      }()) ? yr : q(Ue) ? gt : q(pe) ? Zr : Pl;
      if (q(pe)) {
        var Cf = a;
        lD(Cf, Zr.g(cG));
        Cf.lineWidth = 2;
        I.Dd(null, a, Sc);
      }
      if (q(Vd)) {
        var Dc = a;
        kD(Dc, Po.g(cG));
        bD(Dc);
        SF(Dc, Ud, gb, T + 8);
        Dc.fill();
      }
      var cd = a;
      kD(cd, function() {
        var a = eg;
        return cG.g ? cG.g(a) : cG.call(null, a);
      }());
      lD(cd, "black");
      cd.lineWidth = 1;
      bD(cd);
      SF(cd, Ud, gb, T);
      fD(cd);
      cd.fill();
      kD(a, "black");
      jD(a, new n(null, 3, [Vv, "cell " + v.g(Sc) + v.g(q(Vd) ? "   (learning on " + v.g(q(Id) ? "segment " + v.g(Id) : "new segment") + ")" : null), $s, Ud, Ql, gb - T - 5], null));
      for (var Sb = B(gi(oj, ia)), hc = null, Wd = 0, Ve = 0;;) {
        if (Ve < Wd) {
          var fg = hc.F(null, Ve), Jd = O.j(fg, 0, null), hb = O.j(fg, 1, null), ih = I.Sc(null, Sc, Jd), Tc = O.j(ih, 0, null), dd = O.j(ih, 1, null), Xd = N(function() {
            var a = new V(null, 2, 5, W, [Cp, Zr], null);
            return hb.g ? hb.g(a) : hb.call(null, a);
          }()), ed = Xd + N(function() {
            var a = new V(null, 2, 5, W, [Cp, Pl], null);
            return hb.g ? hb.g(a) : hb.call(null, a);
          }()), Uc = N(function() {
            var a = new V(null, 2, 5, W, [Eo, Zr], null);
            return hb.g ? hb.g(a) : hb.call(null, a);
          }()), fd = Uc + N(function() {
            var a = new V(null, 2, 5, W, [Eo, Pl], null);
            return hb.g ? hb.g(a) : hb.call(null, a);
          }()), jh = function() {
            var a = Xd / p;
            return 1 > a ? a : 1;
          }(), Yd = function() {
            var a = Vd;
            return q(a) ? vf.h(Jd, Id) : a;
          }(), We = TF(Tc, dd, ga, M), gg = TF(Tc, dd, ga + 8, M + 8);
          if (q(Yd)) {
            var qe = a;
            kD(qe, Po.g(cG));
            iD(qe, gg);
          }
          var ud = a;
          mD(ud, 1);
          lD(ud, "black");
          ud.lineWidth = 1;
          hD(ud, We);
          kD(ud, "white");
          iD(ud, We);
          mD(ud, jh);
          kD(ud, Zr.g(cG));
          iD(ud, We);
          mD(ud, 1);
          if (Bf(hb)) {
            var Kd = a;
            lD(Kd, Zr.g(cG));
            Kd.lineWidth = 2;
            I.vc(null, a, Sc, Jd);
          }
          kD(a, "black");
          jD(a, new n(null, 3, [Vv, "[" + v.g(Jd) + "],  active " + v.g(Xd) + " / " + v.g(ed) + " conn. (" + v.g(Uc) + " / " + v.g(fd) + " disconn.)", $s, Tc + 5 + Y, Ql, dd], null));
          a.lineWidth = 1;
          var rc = Ri.h(h, new V(null, 2, 5, W, [Ho, uv], null)), Zd = Ri.h(h, new V(null, 2, 5, W, [Ho, Zr], null)), hg = Ri.h(h, new V(null, 2, 5, W, [Ho, Pl], null)), Xe = Ri.h(h, new V(null, 2, 5, W, [Ho, Eo], null)), Ye = Ri.h(h, new V(null, 2, 5, W, [Ho, Ur], null));
          if (q(function() {
            var a = vf.h(Ye, Xq);
            return a ? a : (a = vf.h(Ye, fr)) ? Yd : a;
          }())) {
            for (var ig = B(Rh.h(q(hg) ? new V(null, 1, 5, W, [iv], null) : null, q(Zd) ? new V(null, 1, 5, W, [Zr], null) : null)), Ze = null, Df = 0, gd = 0;;) {
              if (gd < Df) {
                for (var $d = Ze.F(null, gd), Ld = B(Rh.h(q(Xe) ? new V(null, 1, 5, W, [Eo], null) : null, new V(null, 1, 5, W, [Cp], null))), hd = null, Ef = 0, re = 0;;) {
                  if (re < Ef) {
                    var $e = hd.F(null, re), kh = function() {
                      var a = new V(null, 2, 5, W, [$e, $d], null);
                      return hb.g ? hb.g(a) : hb.call(null, a);
                    }();
                    lD(a, function() {
                      var a = $d;
                      return cG.g ? cG.g(a) : cG.call(null, a);
                    }());
                    for (var lh = B(kh), jg = null, af = 0, kg = 0;;) {
                      if (kg < af) {
                        var Nj = jg.F(null, kg), gl = O.j(Nj, 0, null), Cm = O.j(gl, 0, null);
                        O.j(gl, 1, null);
                        var ae = O.j(Nj, 1, null), Oj = PF(d, Cm, f + 1), mh = O.j(Oj, 0, null), hl = O.j(Oj, 1, null), nh = a;
                        mD(nh, q(rc) ? ae : 1);
                        bD(nh);
                        nh.moveTo(Tc, dd);
                        nh.lineTo(mh + 1, hl);
                        fD(nh);
                        kg += 1;
                      } else {
                        var il = B(lh);
                        if (il) {
                          var oh = il;
                          if (U(oh)) {
                            var Pj = x(oh), Dm = z(oh), db = Pj, Sp = N(Pj), lh = Dm, jg = db, af = Sp
                          } else {
                            var Tp = D(oh), Em = O.j(Tp, 0, null), yt = O.j(Em, 0, null);
                            O.j(Em, 1, null);
                            var zt = O.j(Tp, 1, null), Di = PF(d, yt, f + 1), Up = O.j(Di, 0, null), Qj = O.j(Di, 1, null), Ei = a;
                            mD(Ei, q(rc) ? zt : 1);
                            bD(Ei);
                            Ei.moveTo(Tc, dd);
                            Ei.lineTo(Up + 1, Qj);
                            fD(Ei);
                            lh = G(oh);
                            jg = null;
                            af = 0;
                          }
                          kg = 0;
                        } else {
                          break;
                        }
                      }
                    }
                    mD(a, 1);
                    re += 1;
                  } else {
                    var Vp = B(Ld);
                    if (Vp) {
                      var Rj = Vp;
                      if (U(Rj)) {
                        var Wp = x(Rj), jl = z(Rj), Xp = Wp, kl = N(Wp), Ld = jl, hd = Xp, Ef = kl
                      } else {
                        var At = D(Rj), Yp = function() {
                          var a = new V(null, 2, 5, W, [At, $d], null);
                          return hb.g ? hb.g(a) : hb.call(null, a);
                        }();
                        lD(a, function() {
                          var a = $d;
                          return cG.g ? cG.g(a) : cG.call(null, a);
                        }());
                        for (var ll = B(Yp), ml = null, Sj = 0, ph = 0;;) {
                          if (ph < Sj) {
                            var nl = ml.F(null, ph), Fi = O.j(nl, 0, null), Zp = O.j(Fi, 0, null);
                            O.j(Fi, 1, null);
                            var Bt = O.j(nl, 1, null), $p = PF(d, Zp, f + 1), aq = O.j($p, 0, null), Ct = O.j($p, 1, null), Gi = a;
                            mD(Gi, q(rc) ? Bt : 1);
                            bD(Gi);
                            Gi.moveTo(Tc, dd);
                            Gi.lineTo(aq + 1, Ct);
                            fD(Gi);
                            ph += 1;
                          } else {
                            var bq = B(ll);
                            if (bq) {
                              var Tj = bq;
                              if (U(Tj)) {
                                var Hi = x(Tj), cq = z(Tj), Uj = Hi, dq = N(Hi), ll = cq, ml = Uj, Sj = dq
                              } else {
                                var eq = D(Tj), fq = O.j(eq, 0, null), Dt = O.j(fq, 0, null);
                                O.j(fq, 1, null);
                                var gq = O.j(eq, 1, null), hq = PF(d, Dt, f + 1), ol = O.j(hq, 0, null), iq = O.j(hq, 1, null), Vj = a;
                                mD(Vj, q(rc) ? gq : 1);
                                bD(Vj);
                                Vj.moveTo(Tc, dd);
                                Vj.lineTo(ol + 1, iq);
                                fD(Vj);
                                ll = G(Tj);
                                ml = null;
                                Sj = 0;
                              }
                              ph = 0;
                            } else {
                              break;
                            }
                          }
                        }
                        mD(a, 1);
                        Ld = G(Rj);
                        hd = null;
                        Ef = 0;
                      }
                      re = 0;
                    } else {
                      break;
                    }
                  }
                }
                gd += 1;
              } else {
                var Fm = B(ig);
                if (Fm) {
                  var Wj = Fm;
                  if (U(Wj)) {
                    var jq = x(Wj), Xj = z(Wj), lH = jq, mq = N(jq), ig = Xj, Ze = lH, Df = mq
                  } else {
                    for (var nq = D(Wj), Et = B(Rh.h(q(Xe) ? new V(null, 1, 5, W, [Eo], null) : null, new V(null, 1, 5, W, [Cp], null))), Ft = null, Gt = 0, Gm = 0;;) {
                      if (Gm < Gt) {
                        var qH = Ft.F(null, Gm), oq = function() {
                          var a = new V(null, 2, 5, W, [qH, nq], null);
                          return hb.g ? hb.g(a) : hb.call(null, a);
                        }();
                        lD(a, function() {
                          var a = nq;
                          return cG.g ? cG.g(a) : cG.call(null, a);
                        }());
                        for (var Ht = B(oq), It = null, Jt = 0, Hm = 0;;) {
                          if (Hm < Jt) {
                            var hz = It.F(null, Hm), iz = O.j(hz, 0, null), rH = O.j(iz, 0, null);
                            O.j(iz, 1, null);
                            var pq = O.j(hz, 1, null), jz = PF(d, rH, f + 1), sH = O.j(jz, 0, null), tH = O.j(jz, 1, null), Im = a;
                            mD(Im, q(rc) ? pq : 1);
                            bD(Im);
                            Im.moveTo(Tc, dd);
                            Im.lineTo(sH + 1, tH);
                            fD(Im);
                            Hm += 1;
                          } else {
                            var kz = B(Ht);
                            if (kz) {
                              var Jm = kz;
                              if (U(Jm)) {
                                var lz = x(Jm), uH = z(Jm), vH = lz, wH = N(lz), Ht = uH, It = vH, Jt = wH
                              } else {
                                var mz = D(Jm), nz = O.j(mz, 0, null), xH = O.j(nz, 0, null);
                                O.j(nz, 1, null);
                                var yH = O.j(mz, 1, null), oz = PF(d, xH, f + 1), zH = O.j(oz, 0, null), AH = O.j(oz, 1, null), Km = a;
                                mD(Km, q(rc) ? yH : 1);
                                bD(Km);
                                Km.moveTo(Tc, dd);
                                Km.lineTo(zH + 1, AH);
                                fD(Km);
                                Ht = G(Jm);
                                It = null;
                                Jt = 0;
                              }
                              Hm = 0;
                            } else {
                              break;
                            }
                          }
                        }
                        mD(a, 1);
                        Gm += 1;
                      } else {
                        var pz = B(Et);
                        if (pz) {
                          var Lm = pz;
                          if (U(Lm)) {
                            var qz = x(Lm), BH = z(Lm), CH = qz, DH = N(qz), Et = BH, Ft = CH, Gt = DH
                          } else {
                            var EH = D(Lm), FH = function() {
                              var a = new V(null, 2, 5, W, [EH, nq], null);
                              return hb.g ? hb.g(a) : hb.call(null, a);
                            }();
                            lD(a, function() {
                              var a = nq;
                              return cG.g ? cG.g(a) : cG.call(null, a);
                            }());
                            for (var Kt = B(FH), Lt = null, Mt = 0, Mm = 0;;) {
                              if (Mm < Mt) {
                                var rz = Lt.F(null, Mm), sz = O.j(rz, 0, null), GH = O.j(sz, 0, null);
                                O.j(sz, 1, null);
                                var HH = O.j(rz, 1, null), tz = PF(d, GH, f + 1), IH = O.j(tz, 0, null), JH = O.j(tz, 1, null), Nm = a;
                                mD(Nm, q(rc) ? HH : 1);
                                bD(Nm);
                                Nm.moveTo(Tc, dd);
                                Nm.lineTo(IH + 1, JH);
                                fD(Nm);
                                Mm += 1;
                              } else {
                                var uz = B(Kt);
                                if (uz) {
                                  var Om = uz;
                                  if (U(Om)) {
                                    var vz = x(Om), KH = z(Om), LH = vz, MH = N(vz), Kt = KH, Lt = LH, Mt = MH
                                  } else {
                                    var wz = D(Om), xz = O.j(wz, 0, null), NH = O.j(xz, 0, null);
                                    O.j(xz, 1, null);
                                    var OH = O.j(wz, 1, null), yz = PF(d, NH, f + 1), PH = O.j(yz, 0, null), QH = O.j(yz, 1, null), Pm = a;
                                    mD(Pm, q(rc) ? OH : 1);
                                    bD(Pm);
                                    Pm.moveTo(Tc, dd);
                                    Pm.lineTo(PH + 1, QH);
                                    fD(Pm);
                                    Kt = G(Om);
                                    Lt = null;
                                    Mt = 0;
                                  }
                                  Mm = 0;
                                } else {
                                  break;
                                }
                              }
                            }
                            mD(a, 1);
                            Et = G(Lm);
                            Ft = null;
                            Gt = 0;
                          }
                          Gm = 0;
                        } else {
                          break;
                        }
                      }
                    }
                    ig = G(Wj);
                    Ze = null;
                    Df = 0;
                  }
                  gd = 0;
                } else {
                  break;
                }
              }
            }
          }
          Ve += 1;
        } else {
          var zz = B(Sb);
          if (zz) {
            var Qm = zz;
            if (U(Qm)) {
              var Az = x(Qm), RH = z(Qm), SH = Az, TH = N(Az), Sb = RH, hc = SH, Wd = TH
            } else {
              var Bz = D(Qm), qq = O.j(Bz, 0, null), Kb = O.j(Bz, 1, null), Cz = I.Sc(null, Sc, qq), Ff = O.j(Cz, 0, null), Gf = O.j(Cz, 1, null), Nt = N(function() {
                var a = new V(null, 2, 5, W, [Cp, Zr], null);
                return Kb.g ? Kb.g(a) : Kb.call(null, a);
              }()), UH = Nt + N(function() {
                var a = new V(null, 2, 5, W, [Cp, Pl], null);
                return Kb.g ? Kb.g(a) : Kb.call(null, a);
              }()), Dz = N(function() {
                var a = new V(null, 2, 5, W, [Eo, Zr], null);
                return Kb.g ? Kb.g(a) : Kb.call(null, a);
              }()), VH = Dz + N(function() {
                var a = new V(null, 2, 5, W, [Eo, Pl], null);
                return Kb.g ? Kb.g(a) : Kb.call(null, a);
              }()), WH = function() {
                var a = Nt / p;
                return 1 > a ? a : 1;
              }(), Ez = function() {
                var a = Vd;
                return q(a) ? vf.h(qq, Id) : a;
              }(), Ot = TF(Ff, Gf, ga, M), XH = TF(Ff, Gf, ga + 8, M + 8);
              if (q(Ez)) {
                var Fz = a;
                kD(Fz, Po.g(cG));
                iD(Fz, XH);
              }
              var lg = a;
              mD(lg, 1);
              lD(lg, "black");
              lg.lineWidth = 1;
              hD(lg, Ot);
              kD(lg, "white");
              iD(lg, Ot);
              mD(lg, WH);
              kD(lg, Zr.g(cG));
              iD(lg, Ot);
              mD(lg, 1);
              if (Bf(Kb)) {
                var Gz = a;
                lD(Gz, Zr.g(cG));
                Gz.lineWidth = 2;
                I.vc(null, a, Sc, qq);
              }
              kD(a, "black");
              jD(a, new n(null, 3, [Vv, "[" + v.g(qq) + "],  active " + v.g(Nt) + " / " + v.g(UH) + " conn. (" + v.g(Dz) + " / " + v.g(VH) + " disconn.)", $s, Ff + 5 + Y, Ql, Gf], null));
              a.lineWidth = 1;
              var Ii = Ri.h(h, new V(null, 2, 5, W, [Ho, uv], null)), YH = Ri.h(h, new V(null, 2, 5, W, [Ho, Zr], null)), ZH = Ri.h(h, new V(null, 2, 5, W, [Ho, Pl], null)), Hz = Ri.h(h, new V(null, 2, 5, W, [Ho, Eo], null)), Iz = Ri.h(h, new V(null, 2, 5, W, [Ho, Ur], null));
              if (q(function() {
                var a = vf.h(Iz, Xq);
                return a ? a : (a = vf.h(Iz, fr)) ? Ez : a;
              }())) {
                for (var Pt = B(Rh.h(q(ZH) ? new V(null, 1, 5, W, [iv], null) : null, q(YH) ? new V(null, 1, 5, W, [Zr], null) : null)), Qt = null, Rt = 0, Rm = 0;;) {
                  if (Rm < Rt) {
                    for (var rq = Qt.F(null, Rm), St = B(Rh.h(q(Hz) ? new V(null, 1, 5, W, [Eo], null) : null, new V(null, 1, 5, W, [Cp], null))), Tt = null, Ut = 0, Sm = 0;;) {
                      if (Sm < Ut) {
                        var $H = Tt.F(null, Sm), aI = function() {
                          var a = new V(null, 2, 5, W, [$H, rq], null);
                          return Kb.g ? Kb.g(a) : Kb.call(null, a);
                        }();
                        lD(a, function() {
                          var a = rq;
                          return cG.g ? cG.g(a) : cG.call(null, a);
                        }());
                        for (var Vt = B(aI), Wt = null, Xt = 0, Tm = 0;;) {
                          if (Tm < Xt) {
                            var Jz = Wt.F(null, Tm), Kz = O.j(Jz, 0, null), bI = O.j(Kz, 0, null);
                            O.j(Kz, 1, null);
                            var cI = O.j(Jz, 1, null), Lz = PF(d, bI, f + 1), dI = O.j(Lz, 0, null), eI = O.j(Lz, 1, null), Um = a;
                            mD(Um, q(Ii) ? cI : 1);
                            bD(Um);
                            Um.moveTo(Ff, Gf);
                            Um.lineTo(dI + 1, eI);
                            fD(Um);
                            Tm += 1;
                          } else {
                            var Mz = B(Vt);
                            if (Mz) {
                              var Vm = Mz;
                              if (U(Vm)) {
                                var Nz = x(Vm), fI = z(Vm), gI = Nz, hI = N(Nz), Vt = fI, Wt = gI, Xt = hI
                              } else {
                                var Oz = D(Vm), Pz = O.j(Oz, 0, null), iI = O.j(Pz, 0, null);
                                O.j(Pz, 1, null);
                                var jI = O.j(Oz, 1, null), Qz = PF(d, iI, f + 1), kI = O.j(Qz, 0, null), lI = O.j(Qz, 1, null), Wm = a;
                                mD(Wm, q(Ii) ? jI : 1);
                                bD(Wm);
                                Wm.moveTo(Ff, Gf);
                                Wm.lineTo(kI + 1, lI);
                                fD(Wm);
                                Vt = G(Vm);
                                Wt = null;
                                Xt = 0;
                              }
                              Tm = 0;
                            } else {
                              break;
                            }
                          }
                        }
                        mD(a, 1);
                        Sm += 1;
                      } else {
                        var Rz = B(St);
                        if (Rz) {
                          var Xm = Rz;
                          if (U(Xm)) {
                            var Sz = x(Xm), mI = z(Xm), nI = Sz, oI = N(Sz), St = mI, Tt = nI, Ut = oI
                          } else {
                            var pI = D(Xm), qI = function() {
                              var a = new V(null, 2, 5, W, [pI, rq], null);
                              return Kb.g ? Kb.g(a) : Kb.call(null, a);
                            }();
                            lD(a, function() {
                              var a = rq;
                              return cG.g ? cG.g(a) : cG.call(null, a);
                            }());
                            for (var Yt = B(qI), Zt = null, $t = 0, Ym = 0;;) {
                              if (Ym < $t) {
                                var Tz = Zt.F(null, Ym), Uz = O.j(Tz, 0, null), rI = O.j(Uz, 0, null);
                                O.j(Uz, 1, null);
                                var sI = O.j(Tz, 1, null), Vz = PF(d, rI, f + 1), tI = O.j(Vz, 0, null), uI = O.j(Vz, 1, null), Zm = a;
                                mD(Zm, q(Ii) ? sI : 1);
                                bD(Zm);
                                Zm.moveTo(Ff, Gf);
                                Zm.lineTo(tI + 1, uI);
                                fD(Zm);
                                Ym += 1;
                              } else {
                                var Wz = B(Yt);
                                if (Wz) {
                                  var $m = Wz;
                                  if (U($m)) {
                                    var Xz = x($m), vI = z($m), wI = Xz, xI = N(Xz), Yt = vI, Zt = wI, $t = xI
                                  } else {
                                    var Yz = D($m), Zz = O.j(Yz, 0, null), yI = O.j(Zz, 0, null);
                                    O.j(Zz, 1, null);
                                    var zI = O.j(Yz, 1, null), $z = PF(d, yI, f + 1), AI = O.j($z, 0, null), BI = O.j($z, 1, null), an = a;
                                    mD(an, q(Ii) ? zI : 1);
                                    bD(an);
                                    an.moveTo(Ff, Gf);
                                    an.lineTo(AI + 1, BI);
                                    fD(an);
                                    Yt = G($m);
                                    Zt = null;
                                    $t = 0;
                                  }
                                  Ym = 0;
                                } else {
                                  break;
                                }
                              }
                            }
                            mD(a, 1);
                            St = G(Xm);
                            Tt = null;
                            Ut = 0;
                          }
                          Sm = 0;
                        } else {
                          break;
                        }
                      }
                    }
                    Rm += 1;
                  } else {
                    var aA = B(Pt);
                    if (aA) {
                      var bn = aA;
                      if (U(bn)) {
                        var bA = x(bn), CI = z(bn), DI = bA, EI = N(bA), Pt = CI, Qt = DI, Rt = EI
                      } else {
                        for (var sq = D(bn), au = B(Rh.h(q(Hz) ? new V(null, 1, 5, W, [Eo], null) : null, new V(null, 1, 5, W, [Cp], null))), bu = null, cu = 0, cn = 0;;) {
                          if (cn < cu) {
                            var FI = bu.F(null, cn), GI = function() {
                              var a = new V(null, 2, 5, W, [FI, sq], null);
                              return Kb.g ? Kb.g(a) : Kb.call(null, a);
                            }();
                            lD(a, function() {
                              var a = sq;
                              return cG.g ? cG.g(a) : cG.call(null, a);
                            }());
                            for (var du = B(GI), eu = null, fu = 0, dn = 0;;) {
                              if (dn < fu) {
                                var cA = eu.F(null, dn), dA = O.j(cA, 0, null), HI = O.j(dA, 0, null);
                                O.j(dA, 1, null);
                                var II = O.j(cA, 1, null), eA = PF(d, HI, f + 1), JI = O.j(eA, 0, null), KI = O.j(eA, 1, null), en = a;
                                mD(en, q(Ii) ? II : 1);
                                bD(en);
                                en.moveTo(Ff, Gf);
                                en.lineTo(JI + 1, KI);
                                fD(en);
                                dn += 1;
                              } else {
                                var fA = B(du);
                                if (fA) {
                                  var fn = fA;
                                  if (U(fn)) {
                                    var gA = x(fn), LI = z(fn), MI = gA, NI = N(gA), du = LI, eu = MI, fu = NI
                                  } else {
                                    var hA = D(fn), iA = O.j(hA, 0, null), OI = O.j(iA, 0, null);
                                    O.j(iA, 1, null);
                                    var PI = O.j(hA, 1, null), jA = PF(d, OI, f + 1), QI = O.j(jA, 0, null), RI = O.j(jA, 1, null), gn = a;
                                    mD(gn, q(Ii) ? PI : 1);
                                    bD(gn);
                                    gn.moveTo(Ff, Gf);
                                    gn.lineTo(QI + 1, RI);
                                    fD(gn);
                                    du = G(fn);
                                    eu = null;
                                    fu = 0;
                                  }
                                  dn = 0;
                                } else {
                                  break;
                                }
                              }
                            }
                            mD(a, 1);
                            cn += 1;
                          } else {
                            var kA = B(au);
                            if (kA) {
                              var hn = kA;
                              if (U(hn)) {
                                var lA = x(hn), SI = z(hn), TI = lA, UI = N(lA), au = SI, bu = TI, cu = UI
                              } else {
                                var VI = D(hn), WI = function() {
                                  var a = new V(null, 2, 5, W, [VI, sq], null);
                                  return Kb.g ? Kb.g(a) : Kb.call(null, a);
                                }();
                                lD(a, function() {
                                  var a = sq;
                                  return cG.g ? cG.g(a) : cG.call(null, a);
                                }());
                                for (var gu = B(WI), hu = null, iu = 0, jn = 0;;) {
                                  if (jn < iu) {
                                    var mA = hu.F(null, jn), nA = O.j(mA, 0, null), XI = O.j(nA, 0, null);
                                    O.j(nA, 1, null);
                                    var YI = O.j(mA, 1, null), oA = PF(d, XI, f + 1), ZI = O.j(oA, 0, null), $I = O.j(oA, 1, null), kn = a;
                                    mD(kn, q(Ii) ? YI : 1);
                                    bD(kn);
                                    kn.moveTo(Ff, Gf);
                                    kn.lineTo(ZI + 1, $I);
                                    fD(kn);
                                    jn += 1;
                                  } else {
                                    var pA = B(gu);
                                    if (pA) {
                                      var ln = pA;
                                      if (U(ln)) {
                                        var qA = x(ln), aJ = z(ln), bJ = qA, cJ = N(qA), gu = aJ, hu = bJ, iu = cJ
                                      } else {
                                        var rA = D(ln), sA = O.j(rA, 0, null), dJ = O.j(sA, 0, null);
                                        O.j(sA, 1, null);
                                        var eJ = O.j(rA, 1, null), tA = PF(d, dJ, f + 1), fJ = O.j(tA, 0, null), gJ = O.j(tA, 1, null), mn = a;
                                        mD(mn, q(Ii) ? eJ : 1);
                                        bD(mn);
                                        mn.moveTo(Ff, Gf);
                                        mn.lineTo(fJ + 1, gJ);
                                        fD(mn);
                                        gu = G(ln);
                                        hu = null;
                                        iu = 0;
                                      }
                                      jn = 0;
                                    } else {
                                      break;
                                    }
                                  }
                                }
                                mD(a, 1);
                                au = G(hn);
                                bu = null;
                                cu = 0;
                              }
                              cn = 0;
                            } else {
                              break;
                            }
                          }
                        }
                        Pt = G(bn);
                        Qt = null;
                        Rt = 0;
                      }
                      Rm = 0;
                    } else {
                      break;
                    }
                  }
                }
              }
              Sb = G(Qm);
              hc = null;
              Wd = 0;
            }
            Ve = 0;
          } else {
            break;
          }
        }
      }
      sd += 1;
    } else {
      var tq = B(Eb);
      if (tq) {
        var Yj = tq;
        if (U(Yj)) {
          var uA = x(Yj), hJ = z(Yj), iJ = uA, jJ = N(uA), Eb = hJ, qc = iJ, Qb = jJ
        } else {
          var uq = D(Yj), mg = O.j(uq, 0, null), ju = O.j(uq, 1, null), vq = I.Cd(null, mg), nn = O.j(vq, 0, null), on = O.j(vq, 1, null), pn = new V(null, 2, 5, W, [e, mg], null), qn = function() {
            var a = pn;
            return t.g ? t.g(a) : t.call(null, a);
          }(), wq = function() {
            var a = pn;
            return A.g ? A.g(a) : A.call(null, a);
          }(), Ji = Mg(y, pn), pl = q(Ji) ? be(Ji) : null, vA = Pi.h(function(a, b, c, d, e, f, g, h, l, r, p, t, u, y, M, A, C, F, I, J, Y, db) {
            return function(a) {
              return lG(a, db, J);
            };
          }(Eb, qc, Qb, sd, vq, nn, on, pn, qn, wq, Ji, pl, uq, mg, ju, Yj, tq, l, p, r, t, u, A, y, C, F, J, L, I, P, T, M, ga, Y), ju), wA = function(a, b, c, d, e, f, g, h, l, r, p, t, u, y, M, A, C, F, J, I) {
            return function(a) {
              var b = new V(null, 2, 5, W, [Cp, Zr], null);
              a = a.g ? a.g(b) : a.call(null, b);
              return N(a) >= I;
            };
          }(Eb, qc, Qb, sd, vq, nn, on, pn, qn, wq, Ji, pl, vA, uq, mg, ju, Yj, tq, l, p, r, t, u, A, y, C, F, J, L, I, P, T, M, ga, Y), kJ = q(function() {
            var a = qn;
            return q(a) ? wq : a;
          }()) ? yr : q(wq) ? gt : q(qn) ? Zr : Pl;
          if (q(qn)) {
            var xA = a;
            lD(xA, Zr.g(cG));
            xA.lineWidth = 2;
            I.Dd(null, a, mg);
          }
          if (q(Ji)) {
            var xq = a;
            kD(xq, Po.g(cG));
            bD(xq);
            SF(xq, nn, on, T + 8);
            xq.fill();
          }
          var Zj = a;
          kD(Zj, function() {
            var a = kJ;
            return cG.g ? cG.g(a) : cG.call(null, a);
          }());
          lD(Zj, "black");
          Zj.lineWidth = 1;
          bD(Zj);
          SF(Zj, nn, on, T);
          fD(Zj);
          Zj.fill();
          kD(a, "black");
          jD(a, new n(null, 3, [Vv, "cell " + v.g(mg) + v.g(q(Ji) ? "   (learning on " + v.g(q(pl) ? "segment " + v.g(pl) : "new segment") + ")" : null), $s, nn, Ql, on - T - 5], null));
          for (var ku = B(gi(oj, vA)), lu = null, mu = 0, rn = 0;;) {
            if (rn < mu) {
              var yA = lu.F(null, rn), yq = O.j(yA, 0, null), Lb = O.j(yA, 1, null), zA = I.Sc(null, mg, yq), Hf = O.j(zA, 0, null), If = O.j(zA, 1, null), nu = N(function() {
                var a = new V(null, 2, 5, W, [Cp, Zr], null);
                return Lb.g ? Lb.g(a) : Lb.call(null, a);
              }()), lJ = nu + N(function() {
                var a = new V(null, 2, 5, W, [Cp, Pl], null);
                return Lb.g ? Lb.g(a) : Lb.call(null, a);
              }()), AA = N(function() {
                var a = new V(null, 2, 5, W, [Eo, Zr], null);
                return Lb.g ? Lb.g(a) : Lb.call(null, a);
              }()), mJ = AA + N(function() {
                var a = new V(null, 2, 5, W, [Eo, Pl], null);
                return Lb.g ? Lb.g(a) : Lb.call(null, a);
              }()), nJ = function() {
                var a = nu / p;
                return 1 > a ? a : 1;
              }(), BA = function() {
                var a = Ji;
                return q(a) ? vf.h(yq, pl) : a;
              }(), ou = TF(Hf, If, ga, M), oJ = TF(Hf, If, ga + 8, M + 8);
              if (q(BA)) {
                var CA = a;
                kD(CA, Po.g(cG));
                iD(CA, oJ);
              }
              var ng = a;
              mD(ng, 1);
              lD(ng, "black");
              ng.lineWidth = 1;
              hD(ng, ou);
              kD(ng, "white");
              iD(ng, ou);
              mD(ng, nJ);
              kD(ng, Zr.g(cG));
              iD(ng, ou);
              mD(ng, 1);
              if (wA(Lb)) {
                var DA = a;
                lD(DA, Zr.g(cG));
                DA.lineWidth = 2;
                I.vc(null, a, mg, yq);
              }
              kD(a, "black");
              jD(a, new n(null, 3, [Vv, "[" + v.g(yq) + "],  active " + v.g(nu) + " / " + v.g(lJ) + " conn. (" + v.g(AA) + " / " + v.g(mJ) + " disconn.)", $s, Hf + 5 + Y, Ql, If], null));
              a.lineWidth = 1;
              var Ki = Ri.h(h, new V(null, 2, 5, W, [Ho, uv], null)), pJ = Ri.h(h, new V(null, 2, 5, W, [Ho, Zr], null)), qJ = Ri.h(h, new V(null, 2, 5, W, [Ho, Pl], null)), EA = Ri.h(h, new V(null, 2, 5, W, [Ho, Eo], null)), FA = Ri.h(h, new V(null, 2, 5, W, [Ho, Ur], null));
              if (q(function() {
                var a = vf.h(FA, Xq);
                return a ? a : (a = vf.h(FA, fr)) ? BA : a;
              }())) {
                for (var pu = B(Rh.h(q(qJ) ? new V(null, 1, 5, W, [iv], null) : null, q(pJ) ? new V(null, 1, 5, W, [Zr], null) : null)), qu = null, ru = 0, sn = 0;;) {
                  if (sn < ru) {
                    for (var zq = qu.F(null, sn), su = B(Rh.h(q(EA) ? new V(null, 1, 5, W, [Eo], null) : null, new V(null, 1, 5, W, [Cp], null))), tu = null, uu = 0, tn = 0;;) {
                      if (tn < uu) {
                        var rJ = tu.F(null, tn), sJ = function() {
                          var a = new V(null, 2, 5, W, [rJ, zq], null);
                          return Lb.g ? Lb.g(a) : Lb.call(null, a);
                        }();
                        lD(a, function() {
                          var a = zq;
                          return cG.g ? cG.g(a) : cG.call(null, a);
                        }());
                        for (var vu = B(sJ), wu = null, xu = 0, un = 0;;) {
                          if (un < xu) {
                            var GA = wu.F(null, un), HA = O.j(GA, 0, null), tJ = O.j(HA, 0, null);
                            O.j(HA, 1, null);
                            var uJ = O.j(GA, 1, null), IA = PF(d, tJ, f + 1), vJ = O.j(IA, 0, null), wJ = O.j(IA, 1, null), vn = a;
                            mD(vn, q(Ki) ? uJ : 1);
                            bD(vn);
                            vn.moveTo(Hf, If);
                            vn.lineTo(vJ + 1, wJ);
                            fD(vn);
                            un += 1;
                          } else {
                            var JA = B(vu);
                            if (JA) {
                              var wn = JA;
                              if (U(wn)) {
                                var KA = x(wn), xJ = z(wn), yJ = KA, zJ = N(KA), vu = xJ, wu = yJ, xu = zJ
                              } else {
                                var LA = D(wn), MA = O.j(LA, 0, null), AJ = O.j(MA, 0, null);
                                O.j(MA, 1, null);
                                var BJ = O.j(LA, 1, null), NA = PF(d, AJ, f + 1), CJ = O.j(NA, 0, null), DJ = O.j(NA, 1, null), xn = a;
                                mD(xn, q(Ki) ? BJ : 1);
                                bD(xn);
                                xn.moveTo(Hf, If);
                                xn.lineTo(CJ + 1, DJ);
                                fD(xn);
                                vu = G(wn);
                                wu = null;
                                xu = 0;
                              }
                              un = 0;
                            } else {
                              break;
                            }
                          }
                        }
                        mD(a, 1);
                        tn += 1;
                      } else {
                        var OA = B(su);
                        if (OA) {
                          var yn = OA;
                          if (U(yn)) {
                            var PA = x(yn), EJ = z(yn), FJ = PA, GJ = N(PA), su = EJ, tu = FJ, uu = GJ
                          } else {
                            var HJ = D(yn), IJ = function() {
                              var a = new V(null, 2, 5, W, [HJ, zq], null);
                              return Lb.g ? Lb.g(a) : Lb.call(null, a);
                            }();
                            lD(a, function() {
                              var a = zq;
                              return cG.g ? cG.g(a) : cG.call(null, a);
                            }());
                            for (var yu = B(IJ), zu = null, Au = 0, zn = 0;;) {
                              if (zn < Au) {
                                var QA = zu.F(null, zn), RA = O.j(QA, 0, null), JJ = O.j(RA, 0, null);
                                O.j(RA, 1, null);
                                var KJ = O.j(QA, 1, null), SA = PF(d, JJ, f + 1), LJ = O.j(SA, 0, null), MJ = O.j(SA, 1, null), An = a;
                                mD(An, q(Ki) ? KJ : 1);
                                bD(An);
                                An.moveTo(Hf, If);
                                An.lineTo(LJ + 1, MJ);
                                fD(An);
                                zn += 1;
                              } else {
                                var TA = B(yu);
                                if (TA) {
                                  var Bn = TA;
                                  if (U(Bn)) {
                                    var UA = x(Bn), NJ = z(Bn), OJ = UA, PJ = N(UA), yu = NJ, zu = OJ, Au = PJ
                                  } else {
                                    var VA = D(Bn), WA = O.j(VA, 0, null), QJ = O.j(WA, 0, null);
                                    O.j(WA, 1, null);
                                    var RJ = O.j(VA, 1, null), XA = PF(d, QJ, f + 1), SJ = O.j(XA, 0, null), TJ = O.j(XA, 1, null), Cn = a;
                                    mD(Cn, q(Ki) ? RJ : 1);
                                    bD(Cn);
                                    Cn.moveTo(Hf, If);
                                    Cn.lineTo(SJ + 1, TJ);
                                    fD(Cn);
                                    yu = G(Bn);
                                    zu = null;
                                    Au = 0;
                                  }
                                  zn = 0;
                                } else {
                                  break;
                                }
                              }
                            }
                            mD(a, 1);
                            su = G(yn);
                            tu = null;
                            uu = 0;
                          }
                          tn = 0;
                        } else {
                          break;
                        }
                      }
                    }
                    sn += 1;
                  } else {
                    var YA = B(pu);
                    if (YA) {
                      var Dn = YA;
                      if (U(Dn)) {
                        var ZA = x(Dn), UJ = z(Dn), VJ = ZA, WJ = N(ZA), pu = UJ, qu = VJ, ru = WJ
                      } else {
                        for (var Aq = D(Dn), Bu = B(Rh.h(q(EA) ? new V(null, 1, 5, W, [Eo], null) : null, new V(null, 1, 5, W, [Cp], null))), Cu = null, Du = 0, En = 0;;) {
                          if (En < Du) {
                            var XJ = Cu.F(null, En), YJ = function() {
                              var a = new V(null, 2, 5, W, [XJ, Aq], null);
                              return Lb.g ? Lb.g(a) : Lb.call(null, a);
                            }();
                            lD(a, function() {
                              var a = Aq;
                              return cG.g ? cG.g(a) : cG.call(null, a);
                            }());
                            for (var Eu = B(YJ), Fu = null, Gu = 0, Fn = 0;;) {
                              if (Fn < Gu) {
                                var $A = Fu.F(null, Fn), aB = O.j($A, 0, null), ZJ = O.j(aB, 0, null);
                                O.j(aB, 1, null);
                                var $J = O.j($A, 1, null), bB = PF(d, ZJ, f + 1), aK = O.j(bB, 0, null), bK = O.j(bB, 1, null), Gn = a;
                                mD(Gn, q(Ki) ? $J : 1);
                                bD(Gn);
                                Gn.moveTo(Hf, If);
                                Gn.lineTo(aK + 1, bK);
                                fD(Gn);
                                Fn += 1;
                              } else {
                                var cB = B(Eu);
                                if (cB) {
                                  var Hn = cB;
                                  if (U(Hn)) {
                                    var dB = x(Hn), cK = z(Hn), dK = dB, eK = N(dB), Eu = cK, Fu = dK, Gu = eK
                                  } else {
                                    var eB = D(Hn), fB = O.j(eB, 0, null), fK = O.j(fB, 0, null);
                                    O.j(fB, 1, null);
                                    var gK = O.j(eB, 1, null), gB = PF(d, fK, f + 1), hK = O.j(gB, 0, null), iK = O.j(gB, 1, null), In = a;
                                    mD(In, q(Ki) ? gK : 1);
                                    bD(In);
                                    In.moveTo(Hf, If);
                                    In.lineTo(hK + 1, iK);
                                    fD(In);
                                    Eu = G(Hn);
                                    Fu = null;
                                    Gu = 0;
                                  }
                                  Fn = 0;
                                } else {
                                  break;
                                }
                              }
                            }
                            mD(a, 1);
                            En += 1;
                          } else {
                            var hB = B(Bu);
                            if (hB) {
                              var Jn = hB;
                              if (U(Jn)) {
                                var iB = x(Jn), jK = z(Jn), kK = iB, lK = N(iB), Bu = jK, Cu = kK, Du = lK
                              } else {
                                var mK = D(Jn), nK = function() {
                                  var a = new V(null, 2, 5, W, [mK, Aq], null);
                                  return Lb.g ? Lb.g(a) : Lb.call(null, a);
                                }();
                                lD(a, function() {
                                  var a = Aq;
                                  return cG.g ? cG.g(a) : cG.call(null, a);
                                }());
                                for (var Hu = B(nK), Iu = null, Ju = 0, Kn = 0;;) {
                                  if (Kn < Ju) {
                                    var jB = Iu.F(null, Kn), kB = O.j(jB, 0, null), oK = O.j(kB, 0, null);
                                    O.j(kB, 1, null);
                                    var pK = O.j(jB, 1, null), lB = PF(d, oK, f + 1), qK = O.j(lB, 0, null), rK = O.j(lB, 1, null), Ln = a;
                                    mD(Ln, q(Ki) ? pK : 1);
                                    bD(Ln);
                                    Ln.moveTo(Hf, If);
                                    Ln.lineTo(qK + 1, rK);
                                    fD(Ln);
                                    Kn += 1;
                                  } else {
                                    var mB = B(Hu);
                                    if (mB) {
                                      var Mn = mB;
                                      if (U(Mn)) {
                                        var nB = x(Mn), sK = z(Mn), tK = nB, uK = N(nB), Hu = sK, Iu = tK, Ju = uK
                                      } else {
                                        var oB = D(Mn), pB = O.j(oB, 0, null), vK = O.j(pB, 0, null);
                                        O.j(pB, 1, null);
                                        var wK = O.j(oB, 1, null), qB = PF(d, vK, f + 1), xK = O.j(qB, 0, null), yK = O.j(qB, 1, null), Nn = a;
                                        mD(Nn, q(Ki) ? wK : 1);
                                        bD(Nn);
                                        Nn.moveTo(Hf, If);
                                        Nn.lineTo(xK + 1, yK);
                                        fD(Nn);
                                        Hu = G(Mn);
                                        Iu = null;
                                        Ju = 0;
                                      }
                                      Kn = 0;
                                    } else {
                                      break;
                                    }
                                  }
                                }
                                mD(a, 1);
                                Bu = G(Jn);
                                Cu = null;
                                Du = 0;
                              }
                              En = 0;
                            } else {
                              break;
                            }
                          }
                        }
                        pu = G(Dn);
                        qu = null;
                        ru = 0;
                      }
                      sn = 0;
                    } else {
                      break;
                    }
                  }
                }
              }
              rn += 1;
            } else {
              var rB = B(ku);
              if (rB) {
                var On = rB;
                if (U(On)) {
                  var sB = x(On), zK = z(On), AK = sB, BK = N(sB), ku = zK, lu = AK, mu = BK
                } else {
                  var tB = D(On), Bq = O.j(tB, 0, null), Mb = O.j(tB, 1, null), uB = I.Sc(null, mg, Bq), Jf = O.j(uB, 0, null), Kf = O.j(uB, 1, null), Ku = N(function() {
                    var a = new V(null, 2, 5, W, [Cp, Zr], null);
                    return Mb.g ? Mb.g(a) : Mb.call(null, a);
                  }()), CK = Ku + N(function() {
                    var a = new V(null, 2, 5, W, [Cp, Pl], null);
                    return Mb.g ? Mb.g(a) : Mb.call(null, a);
                  }()), vB = N(function() {
                    var a = new V(null, 2, 5, W, [Eo, Zr], null);
                    return Mb.g ? Mb.g(a) : Mb.call(null, a);
                  }()), DK = vB + N(function() {
                    var a = new V(null, 2, 5, W, [Eo, Pl], null);
                    return Mb.g ? Mb.g(a) : Mb.call(null, a);
                  }()), EK = function() {
                    var a = Ku / p;
                    return 1 > a ? a : 1;
                  }(), wB = function() {
                    var a = Ji;
                    return q(a) ? vf.h(Bq, pl) : a;
                  }(), Lu = TF(Jf, Kf, ga, M), FK = TF(Jf, Kf, ga + 8, M + 8);
                  if (q(wB)) {
                    var xB = a;
                    kD(xB, Po.g(cG));
                    iD(xB, FK);
                  }
                  var og = a;
                  mD(og, 1);
                  lD(og, "black");
                  og.lineWidth = 1;
                  hD(og, Lu);
                  kD(og, "white");
                  iD(og, Lu);
                  mD(og, EK);
                  kD(og, Zr.g(cG));
                  iD(og, Lu);
                  mD(og, 1);
                  if (wA(Mb)) {
                    var yB = a;
                    lD(yB, Zr.g(cG));
                    yB.lineWidth = 2;
                    I.vc(null, a, mg, Bq);
                  }
                  kD(a, "black");
                  jD(a, new n(null, 3, [Vv, "[" + v.g(Bq) + "],  active " + v.g(Ku) + " / " + v.g(CK) + " conn. (" + v.g(vB) + " / " + v.g(DK) + " disconn.)", $s, Jf + 5 + Y, Ql, Kf], null));
                  a.lineWidth = 1;
                  var Li = Ri.h(h, new V(null, 2, 5, W, [Ho, uv], null)), GK = Ri.h(h, new V(null, 2, 5, W, [Ho, Zr], null)), HK = Ri.h(h, new V(null, 2, 5, W, [Ho, Pl], null)), zB = Ri.h(h, new V(null, 2, 5, W, [Ho, Eo], null)), AB = Ri.h(h, new V(null, 2, 5, W, [Ho, Ur], null));
                  if (q(function() {
                    var a = vf.h(AB, Xq);
                    return a ? a : (a = vf.h(AB, fr)) ? wB : a;
                  }())) {
                    for (var Mu = B(Rh.h(q(HK) ? new V(null, 1, 5, W, [iv], null) : null, q(GK) ? new V(null, 1, 5, W, [Zr], null) : null)), Nu = null, Ou = 0, Pn = 0;;) {
                      if (Pn < Ou) {
                        for (var Cq = Nu.F(null, Pn), Pu = B(Rh.h(q(zB) ? new V(null, 1, 5, W, [Eo], null) : null, new V(null, 1, 5, W, [Cp], null))), Qu = null, Ru = 0, Qn = 0;;) {
                          if (Qn < Ru) {
                            var IK = Qu.F(null, Qn), JK = function() {
                              var a = new V(null, 2, 5, W, [IK, Cq], null);
                              return Mb.g ? Mb.g(a) : Mb.call(null, a);
                            }();
                            lD(a, function() {
                              var a = Cq;
                              return cG.g ? cG.g(a) : cG.call(null, a);
                            }());
                            for (var Su = B(JK), Tu = null, Uu = 0, Rn = 0;;) {
                              if (Rn < Uu) {
                                var BB = Tu.F(null, Rn), CB = O.j(BB, 0, null), KK = O.j(CB, 0, null);
                                O.j(CB, 1, null);
                                var LK = O.j(BB, 1, null), DB = PF(d, KK, f + 1), MK = O.j(DB, 0, null), NK = O.j(DB, 1, null), Sn = a;
                                mD(Sn, q(Li) ? LK : 1);
                                bD(Sn);
                                Sn.moveTo(Jf, Kf);
                                Sn.lineTo(MK + 1, NK);
                                fD(Sn);
                                Rn += 1;
                              } else {
                                var EB = B(Su);
                                if (EB) {
                                  var Tn = EB;
                                  if (U(Tn)) {
                                    var FB = x(Tn), OK = z(Tn), PK = FB, QK = N(FB), Su = OK, Tu = PK, Uu = QK
                                  } else {
                                    var GB = D(Tn), HB = O.j(GB, 0, null), RK = O.j(HB, 0, null);
                                    O.j(HB, 1, null);
                                    var SK = O.j(GB, 1, null), IB = PF(d, RK, f + 1), TK = O.j(IB, 0, null), UK = O.j(IB, 1, null), Un = a;
                                    mD(Un, q(Li) ? SK : 1);
                                    bD(Un);
                                    Un.moveTo(Jf, Kf);
                                    Un.lineTo(TK + 1, UK);
                                    fD(Un);
                                    Su = G(Tn);
                                    Tu = null;
                                    Uu = 0;
                                  }
                                  Rn = 0;
                                } else {
                                  break;
                                }
                              }
                            }
                            mD(a, 1);
                            Qn += 1;
                          } else {
                            var JB = B(Pu);
                            if (JB) {
                              var Vn = JB;
                              if (U(Vn)) {
                                var KB = x(Vn), VK = z(Vn), WK = KB, XK = N(KB), Pu = VK, Qu = WK, Ru = XK
                              } else {
                                var YK = D(Vn), ZK = function() {
                                  var a = new V(null, 2, 5, W, [YK, Cq], null);
                                  return Mb.g ? Mb.g(a) : Mb.call(null, a);
                                }();
                                lD(a, function() {
                                  var a = Cq;
                                  return cG.g ? cG.g(a) : cG.call(null, a);
                                }());
                                for (var Vu = B(ZK), Wu = null, Xu = 0, Wn = 0;;) {
                                  if (Wn < Xu) {
                                    var LB = Wu.F(null, Wn), MB = O.j(LB, 0, null), $K = O.j(MB, 0, null);
                                    O.j(MB, 1, null);
                                    var aL = O.j(LB, 1, null), NB = PF(d, $K, f + 1), bL = O.j(NB, 0, null), cL = O.j(NB, 1, null), Xn = a;
                                    mD(Xn, q(Li) ? aL : 1);
                                    bD(Xn);
                                    Xn.moveTo(Jf, Kf);
                                    Xn.lineTo(bL + 1, cL);
                                    fD(Xn);
                                    Wn += 1;
                                  } else {
                                    var OB = B(Vu);
                                    if (OB) {
                                      var Yn = OB;
                                      if (U(Yn)) {
                                        var PB = x(Yn), dL = z(Yn), eL = PB, fL = N(PB), Vu = dL, Wu = eL, Xu = fL
                                      } else {
                                        var QB = D(Yn), RB = O.j(QB, 0, null), gL = O.j(RB, 0, null);
                                        O.j(RB, 1, null);
                                        var hL = O.j(QB, 1, null), SB = PF(d, gL, f + 1), iL = O.j(SB, 0, null), jL = O.j(SB, 1, null), Zn = a;
                                        mD(Zn, q(Li) ? hL : 1);
                                        bD(Zn);
                                        Zn.moveTo(Jf, Kf);
                                        Zn.lineTo(iL + 1, jL);
                                        fD(Zn);
                                        Vu = G(Yn);
                                        Wu = null;
                                        Xu = 0;
                                      }
                                      Wn = 0;
                                    } else {
                                      break;
                                    }
                                  }
                                }
                                mD(a, 1);
                                Pu = G(Vn);
                                Qu = null;
                                Ru = 0;
                              }
                              Qn = 0;
                            } else {
                              break;
                            }
                          }
                        }
                        Pn += 1;
                      } else {
                        var TB = B(Mu);
                        if (TB) {
                          var $n = TB;
                          if (U($n)) {
                            var UB = x($n), kL = z($n), lL = UB, mL = N(UB), Mu = kL, Nu = lL, Ou = mL
                          } else {
                            for (var Dq = D($n), Yu = B(Rh.h(q(zB) ? new V(null, 1, 5, W, [Eo], null) : null, new V(null, 1, 5, W, [Cp], null))), Zu = null, $u = 0, ao = 0;;) {
                              if (ao < $u) {
                                var nL = Zu.F(null, ao), oL = function() {
                                  var a = new V(null, 2, 5, W, [nL, Dq], null);
                                  return Mb.g ? Mb.g(a) : Mb.call(null, a);
                                }();
                                lD(a, function() {
                                  var a = Dq;
                                  return cG.g ? cG.g(a) : cG.call(null, a);
                                }());
                                for (var av = B(oL), bv = null, cv = 0, bo = 0;;) {
                                  if (bo < cv) {
                                    var VB = bv.F(null, bo), WB = O.j(VB, 0, null), pL = O.j(WB, 0, null);
                                    O.j(WB, 1, null);
                                    var qL = O.j(VB, 1, null), XB = PF(d, pL, f + 1), rL = O.j(XB, 0, null), sL = O.j(XB, 1, null), co = a;
                                    mD(co, q(Li) ? qL : 1);
                                    bD(co);
                                    co.moveTo(Jf, Kf);
                                    co.lineTo(rL + 1, sL);
                                    fD(co);
                                    bo += 1;
                                  } else {
                                    var YB = B(av);
                                    if (YB) {
                                      var eo = YB;
                                      if (U(eo)) {
                                        var ZB = x(eo), tL = z(eo), uL = ZB, vL = N(ZB), av = tL, bv = uL, cv = vL
                                      } else {
                                        var $B = D(eo), aC = O.j($B, 0, null), wL = O.j(aC, 0, null);
                                        O.j(aC, 1, null);
                                        var xL = O.j($B, 1, null), bC = PF(d, wL, f + 1), yL = O.j(bC, 0, null), zL = O.j(bC, 1, null), fo = a;
                                        mD(fo, q(Li) ? xL : 1);
                                        bD(fo);
                                        fo.moveTo(Jf, Kf);
                                        fo.lineTo(yL + 1, zL);
                                        fD(fo);
                                        av = G(eo);
                                        bv = null;
                                        cv = 0;
                                      }
                                      bo = 0;
                                    } else {
                                      break;
                                    }
                                  }
                                }
                                mD(a, 1);
                                ao += 1;
                              } else {
                                var cC = B(Yu);
                                if (cC) {
                                  var go = cC;
                                  if (U(go)) {
                                    var dC = x(go), AL = z(go), BL = dC, CL = N(dC), Yu = AL, Zu = BL, $u = CL
                                  } else {
                                    var DL = D(go), EL = function() {
                                      var a = new V(null, 2, 5, W, [DL, Dq], null);
                                      return Mb.g ? Mb.g(a) : Mb.call(null, a);
                                    }();
                                    lD(a, function() {
                                      var a = Dq;
                                      return cG.g ? cG.g(a) : cG.call(null, a);
                                    }());
                                    for (var dv = B(EL), ev = null, fv = 0, ho = 0;;) {
                                      if (ho < fv) {
                                        var eC = ev.F(null, ho), fC = O.j(eC, 0, null), FL = O.j(fC, 0, null);
                                        O.j(fC, 1, null);
                                        var GL = O.j(eC, 1, null), gC = PF(d, FL, f + 1), HL = O.j(gC, 0, null), IL = O.j(gC, 1, null), io = a;
                                        mD(io, q(Li) ? GL : 1);
                                        bD(io);
                                        io.moveTo(Jf, Kf);
                                        io.lineTo(HL + 1, IL);
                                        fD(io);
                                        ho += 1;
                                      } else {
                                        var hC = B(dv);
                                        if (hC) {
                                          var jo = hC;
                                          if (U(jo)) {
                                            var iC = x(jo), JL = z(jo), KL = iC, LL = N(iC), dv = JL, ev = KL, fv = LL
                                          } else {
                                            var jC = D(jo), kC = O.j(jC, 0, null), ML = O.j(kC, 0, null);
                                            O.j(kC, 1, null);
                                            var NL = O.j(jC, 1, null), lC = PF(d, ML, f + 1), OL = O.j(lC, 0, null), PL = O.j(lC, 1, null), ko = a;
                                            mD(ko, q(Li) ? NL : 1);
                                            bD(ko);
                                            ko.moveTo(Jf, Kf);
                                            ko.lineTo(OL + 1, PL);
                                            fD(ko);
                                            dv = G(jo);
                                            ev = null;
                                            fv = 0;
                                          }
                                          ho = 0;
                                        } else {
                                          break;
                                        }
                                      }
                                    }
                                    mD(a, 1);
                                    Yu = G(go);
                                    Zu = null;
                                    $u = 0;
                                  }
                                  ao = 0;
                                } else {
                                  break;
                                }
                              }
                            }
                            Mu = G($n);
                            Nu = null;
                            Ou = 0;
                          }
                          Pn = 0;
                        } else {
                          break;
                        }
                      }
                    }
                  }
                  ku = G(On);
                  lu = null;
                  mu = 0;
                }
                rn = 0;
              } else {
                break;
              }
            }
          }
          Eb = G(Yj);
          qc = null;
          Qb = 0;
        }
        sd = 0;
      } else {
        break;
      }
    }
  }
  dD(a);
}
function sG(a) {
  var b = Jg(a) ? S.h(ji, a) : a, c = Q.h(b, gp), d = Q.h(b, gr), e = Q.h(b, $r), f = O.h(K.g ? K.g(gG) : K.call(null, gG), c), g = iw(f), h = O.h(g, d), l = sv.g(h), p = D(jw(f)), r = Sw(p), t = qw(p, 0);
  return S.h(v, xi("\n", Ni(new V(null, 29, 5, W, ["__Selection__", "* timestep " + v.g(Uw(h)) + " (delay " + v.g(c) + ")", "* column " + v.g(q(e) ? e : "nil"), "", "__Input__", "" + v.g(r) + " (" + v.g(N(t)) + " bits)", "", "__Active columns__", "" + v.g(Qg.g(Bw(l))), "", "__Active cells__", "" + v.g(Qg.g(Cw(l))), "", "__Learnable cells__", "" + v.g(Qg.g(Dw(l))), "", "__Learning segments__", "" + v.g(Qg.g(Xo.g(l))), "", "__Signal cells__", "" + v.g(Qg.g(Ew(l))), "", "__Predicted cells__", "" + v.g(Qg.g(Gw(l))), 
  "", q(e) ? function() {
    var u = c + 1, A = O.h(K.g ? K.g(gG) : K.call(null, gG), u), y = O.h(iw(A), d), C = sv.g(y), F = Kq.g(C), J = ns.g(C), L = Cw(C), I = function() {
      var a = Dw(C);
      return q(a) ? a : Zk;
    }(), P = Yo.g(Vw(y));
    return new V(null, 14, 5, W, ["__Active cells prev__", "" + v.g(Qg.g(L)), "", "__Learn cells prev__", "" + v.g(Qg.g(I)), "", "__Predicted cells prev__", "" + v.g(Qg.g(Gw(C))), "", "__Selected column__", "__Connected ff-synapses__", function() {
      var T = Iw(F, e);
      return function(a, b, c, d, e, f, g, h, l, r, p, t, u, y, A, C, F, I, J, L, P, T, tc, $c, Dd) {
        return function Le(qf) {
          return new Dh(null, function(a, b, c, d, e, f, g, h, l, r, p, t) {
            return function() {
              for (;;) {
                var a = B(qf);
                if (a) {
                  if (U(a)) {
                    var b = x(a), c = N(b), d = Hh(c);
                    return function() {
                      for (var a = 0;;) {
                        if (a < c) {
                          var e = w.h(b, a), f = O.j(e, 0, null), e = O.j(e, 1, null);
                          Lh(d, "  " + v.g(f) + " :\x3d\x3e " + v.g(CF("%.2f", e)) + v.g(q(function() {
                            var a = f;
                            return t.g ? t.g(a) : t.call(null, a);
                          }()) ? " S" : null) + v.g(q(function() {
                            var a = f;
                            return p.g ? p.g(a) : p.call(null, a);
                          }()) ? " A " : null));
                          a += 1;
                        } else {
                          return!0;
                        }
                      }
                    }() ? Kh(Mh(d), Le(z(a))) : Kh(Mh(d), null);
                  }
                  var e = D(a), f = O.j(e, 0, null), e = O.j(e, 1, null);
                  return Zf("  " + v.g(f) + " :\x3d\x3e " + v.g(CF("%.2f", e)) + v.g(q(function() {
                    var a = f;
                    return t.g ? t.g(a) : t.call(null, a);
                  }()) ? " S" : null) + v.g(q(function() {
                    var a = f;
                    return p.g ? p.g(a) : p.call(null, a);
                  }()) ? " A " : null), Le(E(a)));
                }
                return null;
              }
            };
          }(a, b, c, d, e, f, g, h, l, r, p, t, u, y, A, C, F, I, J, L, P, T, tc, $c, Dd), null, null);
        };
      }(T, u, A, y, C, F, J, L, I, P, Zk, Zk, f, g, h, l, p, r, t, a, b, b, c, d, e)(Qg.g(T));
    }(), "__Cells and their Dendrite segments__", function() {
      return function(a, b, c, d, e, f, g, h, l, r, p, t, u, y, A, C, F, I, J, L, P, jd, jc, tc) {
        return function Dd(ya) {
          return new Dh(null, function(a, b, c, d, e, f, g, h, l, r, p, t, u, y, M, A, C, F, I, J, L, Y, P, T) {
            return function() {
              for (;;) {
                var ga = B(ya);
                if (ga) {
                  var ha = ga;
                  if (U(ha)) {
                    var ka = x(ha), qa = N(ka), na = Hh(qa);
                    return function() {
                      for (var pa = 0;;) {
                        if (pa < qa) {
                          var oa = w.h(ka, pa), Ca = Ow(f, new V(null, 2, 5, W, [T, oa], null));
                          Lh(na, new V(null, 4, 5, W, ["CELL " + v.g(oa), "" + v.g(N(Ca)) + " \x3d " + v.g(qi.h(N, Ca)), "Lateral excitation from this cell: " + v.g(Kw(f, new V(null, 2, 5, W, [T, oa], null))), function() {
                            return function(a, b, c, d, e, f, g, h, l, r, p, t, u, y, M, A, C, F, I, J, L, Y, P, T, ga, ha, pa, oa, ka, qa, na, Ca) {
                              return function gd(ia) {
                                return new Dh(null, function(a, b, c, d, e, f, g, h, l, r, p, t, u, y, M, A, C, F, I, J, L, Y, db, P, T, ga, ha, pa, oa, ka, qa, na) {
                                  return function() {
                                    for (;;) {
                                      var Ca = B(ia);
                                      if (Ca) {
                                        var ra = Ca;
                                        if (U(ra)) {
                                          var Ha = x(ra), ib = N(Ha), ya = Hh(ib);
                                          return function() {
                                            for (var ia = 0;;) {
                                              if (ia < ib) {
                                                var Fa = w.h(Ha, ia), Ta = O.j(Fa, 0, null), Ya = O.j(Fa, 1, null);
                                                Lh(ya, new V(null, 2, 5, W, ["  SEGMENT " + v.g(Ta), function() {
                                                  return function(a, b, c, d, e, f, g, h, l, r, p, t, u, y, M, A, C, F, I, J, L, Y, P, db, T, ga, ha, pa, oa, ka, qa, na, Ca, ia, ra, Ha, Fa, ya, ib, Ta, Ya) {
                                                    return function pq(Bb) {
                                                      return new Dh(null, function(a, b, c, d, e, f, g, h, l, r, p, t, u, y, M, A, C, F, I, J, L, Y, P, db, T, ga) {
                                                        return function() {
                                                          for (;;) {
                                                            var a = B(Bb);
                                                            if (a) {
                                                              if (U(a)) {
                                                                var b = x(a), c = N(b), d = Hh(c);
                                                                return function() {
                                                                  for (var a = 0;;) {
                                                                    if (a < c) {
                                                                      var e = w.h(b, a), f = O.j(e, 0, null), e = O.j(e, 1, null);
                                                                      Lh(d, "  " + v.g(f) + v.g(e >= ga ? " :\x3d\x3e " : " :.: ") + v.g(CF("%.2f", e)) + v.g(q(function() {
                                                                        var a = f;
                                                                        return T.g ? T.g(a) : T.call(null, a);
                                                                      }()) ? " L" : q(function() {
                                                                        var a = f;
                                                                        return db.g ? db.g(a) : db.call(null, a);
                                                                      }()) ? " A" : null));
                                                                      a += 1;
                                                                    } else {
                                                                      return!0;
                                                                    }
                                                                  }
                                                                }() ? Kh(Mh(d), pq(z(a))) : Kh(Mh(d), null);
                                                              }
                                                              var e = D(a), f = O.j(e, 0, null), e = O.j(e, 1, null);
                                                              return Zf("  " + v.g(f) + v.g(e >= ga ? " :\x3d\x3e " : " :.: ") + v.g(CF("%.2f", e)) + v.g(q(function() {
                                                                var a = f;
                                                                return T.g ? T.g(a) : T.call(null, a);
                                                              }()) ? " L" : q(function() {
                                                                var a = f;
                                                                return db.g ? db.g(a) : db.call(null, a);
                                                              }()) ? " A" : null), pq(E(a)));
                                                            }
                                                            return null;
                                                          }
                                                        };
                                                      }(a, b, c, d, e, f, g, h, l, r, p, t, u, y, M, A, C, F, I, J, L, Y, P, db, T, ga, ha, pa, oa, ka, qa, na, Ca, ia, ra, Ha, Fa, ya, ib, Ta, Ya), null, null);
                                                    };
                                                  }(ia, a, Fa, Ta, Ya, Ha, ib, ya, ra, Ca, b, c, d, e, f, g, h, l, r, p, t, u, y, M, A, C, F, I, J, L, Y, db, P, T, ga, ha, pa, oa, ka, qa, na)(Qg.g(Ya));
                                                }()], null));
                                                ia += 1;
                                              } else {
                                                return!0;
                                              }
                                            }
                                          }() ? Kh(Mh(ya), gd(z(ra))) : Kh(Mh(ya), null);
                                        }
                                        var Fa = D(ra), Ta = O.j(Fa, 0, null), Ya = O.j(Fa, 1, null);
                                        return Zf(new V(null, 2, 5, W, ["  SEGMENT " + v.g(Ta), function() {
                                          return function(a, b, c, d, e, f, g, h, l, r, p, t, u, y, M, A, C, F, I, J, L, db, Y, P, T, ga, ha, pa, oa, ka, qa, na, Ca, ia, ra, Ha, Fa) {
                                            return function oq(ya) {
                                              return new Dh(null, function(a, b, c, d, e, f, g, h, l, r, p, t, u, y, M, A, C, F, I, J, L, db) {
                                                return function() {
                                                  for (;;) {
                                                    var a = B(ya);
                                                    if (a) {
                                                      if (U(a)) {
                                                        var b = x(a), c = N(b), d = Hh(c);
                                                        return function() {
                                                          for (var a = 0;;) {
                                                            if (a < c) {
                                                              var e = w.h(b, a), f = O.j(e, 0, null), e = O.j(e, 1, null);
                                                              Lh(d, "  " + v.g(f) + v.g(e >= db ? " :\x3d\x3e " : " :.: ") + v.g(CF("%.2f", e)) + v.g(q(function() {
                                                                var a = f;
                                                                return L.g ? L.g(a) : L.call(null, a);
                                                              }()) ? " L" : q(function() {
                                                                var a = f;
                                                                return J.g ? J.g(a) : J.call(null, a);
                                                              }()) ? " A" : null));
                                                              a += 1;
                                                            } else {
                                                              return!0;
                                                            }
                                                          }
                                                        }() ? Kh(Mh(d), oq(z(a))) : Kh(Mh(d), null);
                                                      }
                                                      var e = D(a), f = O.j(e, 0, null), e = O.j(e, 1, null);
                                                      return Zf("  " + v.g(f) + v.g(e >= db ? " :\x3d\x3e " : " :.: ") + v.g(CF("%.2f", e)) + v.g(q(function() {
                                                        var a = f;
                                                        return L.g ? L.g(a) : L.call(null, a);
                                                      }()) ? " L" : q(function() {
                                                        var a = f;
                                                        return J.g ? J.g(a) : J.call(null, a);
                                                      }()) ? " A" : null), oq(E(a)));
                                                    }
                                                    return null;
                                                  }
                                                };
                                              }(a, b, c, d, e, f, g, h, l, r, p, t, u, y, M, A, C, F, I, J, L, db, Y, P, T, ga, ha, pa, oa, ka, qa, na, Ca, ia, ra, Ha, Fa), null, null);
                                            };
                                          }(a, Fa, Ta, Ya, ra, Ca, b, c, d, e, f, g, h, l, r, p, t, u, y, M, A, C, F, I, J, L, Y, db, P, T, ga, ha, pa, oa, ka, qa, na)(Qg.g(Ya));
                                        }()], null), gd(E(ra)));
                                      }
                                      return null;
                                    }
                                  };
                                }(a, b, c, d, e, f, g, h, l, r, p, t, u, y, M, A, C, F, I, J, L, Y, P, T, ga, ha, pa, oa, ka, qa, na, Ca), null, null);
                              };
                            }(pa, Ca, oa, ka, qa, na, ha, ga, a, b, c, d, e, f, g, h, l, r, p, t, u, y, M, A, C, F, I, J, L, Y, P, T)(gi(oj, Ca));
                          }()], null));
                          pa += 1;
                        } else {
                          return!0;
                        }
                      }
                    }() ? Kh(Mh(na), Dd(z(ha))) : Kh(Mh(na), null);
                  }
                  var pa = D(ha), oa = Ow(f, new V(null, 2, 5, W, [T, pa], null));
                  return Zf(new V(null, 4, 5, W, ["CELL " + v.g(pa), "" + v.g(N(oa)) + " \x3d " + v.g(qi.h(N, oa)), "Lateral excitation from this cell: " + v.g(Kw(f, new V(null, 2, 5, W, [T, pa], null))), function() {
                    return function(a, b, c, d, e, f, g, h, l, r, p, t, u, y, M, A, C, F, J, I, L, Y, P, T, ga, ha, pa, oa) {
                      return function Zd(ka) {
                        return new Dh(null, function(a, b, c, d, e, f, g, h, l, r, p, t, u, y, M, A, C, F, J, I, L, Y, P, T, ga, ha, pa, oa) {
                          return function() {
                            for (;;) {
                              var qa = B(ka);
                              if (qa) {
                                var db = qa;
                                if (U(db)) {
                                  var na = x(db), Ca = N(na), ra = Hh(Ca);
                                  return function() {
                                    for (var ka = 0;;) {
                                      if (ka < Ca) {
                                        var ia = w.h(na, ka), Ha = O.j(ia, 0, null), Fa = O.j(ia, 1, null);
                                        Lh(ra, new V(null, 2, 5, W, ["  SEGMENT " + v.g(Ha), function() {
                                          return function(a, b, c, d, e, f, g, h, l, r, p, t, u, y, M, A, C, F, J, I, L, Y, db, P, T, ga, ha, ka, pa, oa, qa, na, Ca, ia, ra, Ha, Fa) {
                                            return function mq(ya) {
                                              return new Dh(null, function(a, b, c, d, e, f, g, h, l, r, p, t, u, y, M, A, C, F, J, I, L, Y) {
                                                return function() {
                                                  for (;;) {
                                                    var a = B(ya);
                                                    if (a) {
                                                      if (U(a)) {
                                                        var b = x(a), c = N(b), d = Hh(c);
                                                        return function() {
                                                          for (var a = 0;;) {
                                                            if (a < c) {
                                                              var e = w.h(b, a), f = O.j(e, 0, null), e = O.j(e, 1, null);
                                                              Lh(d, "  " + v.g(f) + v.g(e >= Y ? " :\x3d\x3e " : " :.: ") + v.g(CF("%.2f", e)) + v.g(q(function() {
                                                                var a = f;
                                                                return L.g ? L.g(a) : L.call(null, a);
                                                              }()) ? " L" : q(function() {
                                                                var a = f;
                                                                return I.g ? I.g(a) : I.call(null, a);
                                                              }()) ? " A" : null));
                                                              a += 1;
                                                            } else {
                                                              return!0;
                                                            }
                                                          }
                                                        }() ? Kh(Mh(d), mq(z(a))) : Kh(Mh(d), null);
                                                      }
                                                      var e = D(a), f = O.j(e, 0, null), e = O.j(e, 1, null);
                                                      return Zf("  " + v.g(f) + v.g(e >= Y ? " :\x3d\x3e " : " :.: ") + v.g(CF("%.2f", e)) + v.g(q(function() {
                                                        var a = f;
                                                        return L.g ? L.g(a) : L.call(null, a);
                                                      }()) ? " L" : q(function() {
                                                        var a = f;
                                                        return I.g ? I.g(a) : I.call(null, a);
                                                      }()) ? " A" : null), mq(E(a)));
                                                    }
                                                    return null;
                                                  }
                                                };
                                              }(a, b, c, d, e, f, g, h, l, r, p, t, u, y, M, A, C, F, J, I, L, Y, db, P, T, ga, ha, ka, pa, oa, qa, na, Ca, ia, ra, Ha, Fa), null, null);
                                            };
                                          }(ka, ia, Ha, Fa, na, Ca, ra, db, qa, a, b, c, d, e, f, g, h, l, r, p, t, u, y, M, A, C, F, J, I, L, Y, P, T, ga, ha, pa, oa)(Qg.g(Fa));
                                        }()], null));
                                        ka += 1;
                                      } else {
                                        return!0;
                                      }
                                    }
                                  }() ? Kh(Mh(ra), Zd(z(db))) : Kh(Mh(ra), null);
                                }
                                var ia = D(db), Ha = O.j(ia, 0, null), Fa = O.j(ia, 1, null);
                                return Zf(new V(null, 2, 5, W, ["  SEGMENT " + v.g(Ha), function() {
                                  return function(a, b, c, d, e, f, g, h, l, r, p, t, u, y, M, A, C, F, I, J, L, Y, db, P, T, ga, ha, ka, pa, oa, qa, na, Ca) {
                                    return function ol(ia) {
                                      return new Dh(null, function(a, b, c, d, e, f, g, h, l, r, p, t, u, y, M, A, C, F) {
                                        return function() {
                                          for (;;) {
                                            var a = B(ia);
                                            if (a) {
                                              if (U(a)) {
                                                var b = x(a), c = N(b), d = Hh(c);
                                                return function() {
                                                  for (var a = 0;;) {
                                                    if (a < c) {
                                                      var e = w.h(b, a), f = O.j(e, 0, null), e = O.j(e, 1, null);
                                                      Lh(d, "  " + v.g(f) + v.g(e >= F ? " :\x3d\x3e " : " :.: ") + v.g(CF("%.2f", e)) + v.g(q(function() {
                                                        var a = f;
                                                        return C.g ? C.g(a) : C.call(null, a);
                                                      }()) ? " L" : q(function() {
                                                        var a = f;
                                                        return A.g ? A.g(a) : A.call(null, a);
                                                      }()) ? " A" : null));
                                                      a += 1;
                                                    } else {
                                                      return!0;
                                                    }
                                                  }
                                                }() ? Kh(Mh(d), ol(z(a))) : Kh(Mh(d), null);
                                              }
                                              var e = D(a), f = O.j(e, 0, null), e = O.j(e, 1, null);
                                              return Zf("  " + v.g(f) + v.g(e >= F ? " :\x3d\x3e " : " :.: ") + v.g(CF("%.2f", e)) + v.g(q(function() {
                                                var a = f;
                                                return C.g ? C.g(a) : C.call(null, a);
                                              }()) ? " L" : q(function() {
                                                var a = f;
                                                return A.g ? A.g(a) : A.call(null, a);
                                              }()) ? " A" : null), ol(E(a)));
                                            }
                                            return null;
                                          }
                                        };
                                      }(a, b, c, d, e, f, g, h, l, r, p, t, u, y, M, A, C, F, I, J, L, Y, db, P, T, ga, ha, ka, pa, oa, qa, na, Ca), null, null);
                                    };
                                  }(ia, Ha, Fa, db, qa, a, b, c, d, e, f, g, h, l, r, p, t, u, y, M, A, C, F, J, I, L, Y, P, T, ga, ha, pa, oa)(Qg.g(Fa));
                                }()], null), Zd(E(db)));
                              }
                              return null;
                            }
                          };
                        }(a, b, c, d, e, f, g, h, l, r, p, t, u, y, M, A, C, F, J, I, L, Y, P, T, ga, ha, pa, oa), null, null);
                      };
                    }(oa, pa, ha, ga, a, b, c, d, e, f, g, h, l, r, p, t, u, y, M, A, C, F, I, J, L, Y, P, T)(gi(oj, oa));
                  }()], null), Dd(E(ha)));
                }
                return null;
              }
            };
          }(a, b, c, d, e, f, g, h, l, r, p, t, u, y, A, C, F, I, J, L, P, jd, jc, tc), null, null);
        };
      }(u, A, y, C, F, J, L, I, P, Zk, Zk, f, g, h, l, p, r, t, a, b, b, c, d, e)(ql.g(yw(l)));
    }()], null);
  }() : null, "", "__spec__", Qg.g(Vw(h))], null))));
}
function tG(a) {
  var b = Jg(a) ? S.h(ji, a) : a;
  a = Q.h(b, Tr);
  var b = Q.h(b, ap), c = YD(new V(null, 1, 5, W, [ar], null));
  c.width = b;
  c.height = a;
  return c;
}
function uG(a) {
  var b = tG(EF(a)), c = b.getContext(Bh("2d")), d = JF(a);
  kD(c, yp.g(cG));
  QF(c, a, ql.h(d, d + IF(a)));
  return b;
}
function vG(a, b) {
  var c = tG(EF(a)), d = c.getContext(Bh("2d")), e = qw(b, 0);
  kD(d, Zr.g(cG));
  QF(d, a, e);
  return c;
}
function wG(a, b) {
  var c = tG(EF(a)), d = c.getContext(Bh("2d")), e = al(qi.h(D, Gw(sv.g(b)))), f = Ky.h(b, e), e = vx(function() {
    return function(a) {
      a /= 8;
      return 1 < a ? 1 : a;
    };
  }(c, d, e, f), f);
  kD(d, gt.g(cG));
  RF(d, a, e);
  return c;
}
function xG(a, b) {
  var c = tG(EF(a)), d = c.getContext(Bh("2d")), e = Bw(sv.g(b));
  kD(d, Zr.g(cG));
  QF(d, a, e);
  return c;
}
function yG(a, b) {
  var c = tG(EF(a)), d = c.getContext(Bh("2d")), e = al(qi.h(D, Hw(sv.g(b))));
  kD(d, gt.g(cG));
  QF(d, a, e);
  return c;
}
function zG(a, b) {
  var c = tG(EF(a)), d = c.getContext(Bh("2d")), e = qi.h(D, Fw(sv.g(b)));
  kD(d, ro.g(cG));
  QF(d, a, e);
  return c;
}
function AG(a, b) {
  var c = tG(EF(a)), d = c.getContext(Bh("2d")), e = vx(function() {
    return function(a) {
      a /= 16;
      return 1 < a ? 1 : a;
    };
  }(c, d), zw(sv.g(b)));
  kD(d, "black");
  RF(d, a, e);
  return c;
}
function BG(a, b, c) {
  return od.j(function(b, e) {
    return b + sx(B, Gx(a, new V(null, 2, 5, W, [c, e], null)));
  }, 0, ql.g(b));
}
function CG(a, b) {
  var c = tG(EF(a)), d = c.getContext(Bh("2d")), e = sv.g(b), f = ns.g(e), g = dx(e), h = yw(e), l = JF(a), p = ql.h(l, l + IF(a)), e = bl(p, qi.h(function() {
    return function(a) {
      a /= 16;
      return 1 < a ? 1 : a;
    };
  }(c, d, e, f, g, h, l, p), qi.h(function(a, b, c, d, e, f) {
    return function(a) {
      return BG(d, f, a);
    };
  }(c, d, e, f, g, h, l, p), p)));
  kD(d, "black");
  RF(d, a, e);
  return c;
}
function DG(a) {
  return "Showing " + v.g(JF(a)) + "--" + v.g(JF(a) + IF(a) + -1) + " of " + v.g(bx(No.g(a)));
}
function EG() {
  var a = K.g ? K.g(FG) : K.call(null, FG), b = Jg(a) ? S.h(ji, a) : a, c = Q.h(b, gp), d = Q.h(b, gr), e = Q.h(b, $r);
  aE.h("#detail-text", q(e) ? sG(b) : "Select a column (by clicking on it) to see details.");
  var f = K.g ? K.g(dG) : K.call(null, dG), g = mt.g(K.g ? K.g(hG) : K.call(null, hG)), h = sp.g(K.g ? K.g(hG) : K.call(null, hG)), l = Ri.h(f, new V(null, 2, 5, W, [Os, Np], null)), p = O.h(K.g ? K.g(gG) : K.call(null, gG), c), r = O.j(K.g ? K.g(gG) : K.call(null, gG), c + 1, null), t = YD("#comportex-viz"), u = t.getContext(Bh("2d")), A = uG(g), y = qi.h(uG, h), C = OF(dg(h)) + Ri.h(f, new V(null, 2, 5, W, [Os, Uo], null));
  gD(u, new n(null, 4, [$s, 0, Ql, 0, ap, t.width, Tr, 900], null));
  oD(u);
  jD(u, new n(null, 3, [Vv, "Input on selected timestep.", $s, 2, Ql, 0], null));
  jD(u, new n(null, 3, [Vv, "Encoded bits.", $s, $s.g(EF(g)), Ql, 0], null));
  jD(u, new n(null, 3, [Vv, DG(g), $s, $s.g(EF(g)), Ql, 10], null));
  for (var F = B(gi(oj, h)), J = null, L = 0, I = 0;;) {
    if (I < L) {
      var P = J.F(null, I), T = O.j(P, 0, null), M = O.j(P, 1, null);
      jD(u, new n(null, 3, [Vv, "Region " + v.g(T) + " columns.", $s, $s.g(EF(M)), Ql, 0], null));
      jD(u, new n(null, 3, [Vv, DG(M), $s, $s.g(EF(M)), Ql, 10], null));
      I += 1;
    } else {
      var ga = B(F);
      if (ga) {
        var Y = ga;
        if (U(Y)) {
          var na = x(Y), ha = z(Y), pa = na, ka = N(na), F = ha, J = pa, L = ka
        } else {
          var oa = D(Y), qa = O.j(oa, 0, null), ib = O.j(oa, 1, null);
          jD(u, new n(null, 3, [Vv, "Region " + v.g(qa) + " columns.", $s, $s.g(EF(ib)), Ql, 0], null));
          jD(u, new n(null, 3, [Vv, DG(ib), $s, $s.g(EF(ib)), Ql, 10], null));
          F = G(Y);
          J = null;
          L = 0;
        }
        I = 0;
      } else {
        break;
      }
    }
  }
  var Ha = C + Ri.h(f, new V(null, 2, 5, W, [Os, mo], null));
  jD(u, new n(null, 3, [Vv, "Segments. " + v.g(q(e) ? "(arrows keys to move)" : "(click on a column)") + " Page up / page down to scroll columns.", $s, Ha, Ql, 0], null));
  var tb = Ri.h(f, new V(null, 2, 5, W, [Os, ls], null)), Fa = D(jw(p)), Ca = D(iw(p)), Ya = hv.g(Fa);
  q(Ya) && (Ya.$a ? Ya.$a(Fa, u, 0, 30, tb, 870, Ca) : Ya.call(null, Fa, u, 0, 30, tb, 870, Ca));
  for (var Bb = B(ql.g(function() {
    var a = N(K.g ? K.g(gG) : K.call(null, gG));
    return l < a ? l : a;
  }())), Ta = null, ub = 0, Cb = 0;;) {
    if (Cb < ub) {
      var ra = Ta.F(null, Cb), jd = O.h(K.g ? K.g(gG) : K.call(null, gG), ra), jc = O.j(K.g ? K.g(gG) : K.call(null, gG), ra + 1, null), tc = q(jc) ? D(iw(jc)) : null, $c = iw(jd), Dd = D(jw(jd)), ya = ov.g(wg(jd));
      if (1 === N(cx(Dd)) || ra === c) {
        iG(u, g, ra, A), q(Ri.h(f, new V(null, 2, 5, W, [mt, Zr], null))) && iG(u, g, ra, Q.h(vf.h(mt.g(f), mt.g(js.g(function() {
          var a = ya;
          return K.g ? K.g(a) : K.call(null, a);
        }()))) ? function() {
          var a = ya;
          return K.g ? K.g(a) : K.call(null, a);
        }() : oi.p(ya, R, Nq, vG(g, Dd)), Nq)), q(function() {
          var a = Ri.h(f, new V(null, 2, 5, W, [mt, gt], null));
          return q(a) ? tc : a;
        }()) && iG(u, g, ra, Q.h(vf.h(mt.g(f), mt.g(js.g(function() {
          var a = ya;
          return K.g ? K.g(a) : K.call(null, a);
        }()))) ? function() {
          var a = ya;
          return K.g ? K.g(a) : K.call(null, a);
        }() : oi.p(ya, R, Mr, wG(g, tc)), Mr));
      }
      for (var Le = B(qi.k(oj, ql.q(), h, $c, H([y], 0))), qf = null, Me = 0, le = 0;;) {
        if (le < Me) {
          var rf = qf.F(null, le), zc = O.j(rf, 0, null), Ac = O.j(rf, 1, null), pd = O.j(rf, 2, null), Bc = O.j(rf, 3, null);
          if (1 === N(cx(pd)) || ra === c) {
            iG(u, Ac, ra, Bc), q(Ri.h(f, new V(null, 2, 5, W, [Zo, bs], null))) && iG(u, Ac, ra, Q.h(vf.h(Zo.g(f), Zo.g(js.g(function() {
              var a = ya;
              return K.g ? K.g(a) : K.call(null, a);
            }()))) ? function() {
              var a = ya;
              return K.g ? K.g(a) : K.call(null, a);
            }() : oi.p(ya, R, new V(null, 2, 5, W, [vv, zc], null), AG(Ac, pd)), new V(null, 2, 5, W, [vv, zc], null))), q(Ri.h(f, new V(null, 2, 5, W, [Zo, hm], null))) && iG(u, Ac, ra, Q.h(vf.h(Zo.g(f), Zo.g(js.g(function() {
              var a = ya;
              return K.g ? K.g(a) : K.call(null, a);
            }()))) ? function() {
              var a = ya;
              return K.g ? K.g(a) : K.call(null, a);
            }() : oi.p(ya, R, new V(null, 2, 5, W, [er, zc], null), CG(Ac, pd)), new V(null, 2, 5, W, [er, zc], null))), q(Ri.h(f, new V(null, 2, 5, W, [Zo, Zr], null))) && iG(u, Ac, ra, Q.h(vf.h(Zo.g(f), Zo.g(js.g(function() {
              var a = ya;
              return K.g ? K.g(a) : K.call(null, a);
            }()))) ? function() {
              var a = ya;
              return K.g ? K.g(a) : K.call(null, a);
            }() : oi.p(ya, R, new V(null, 2, 5, W, [Pp, zc], null), xG(Ac, pd)), new V(null, 2, 5, W, [Pp, zc], null))), q(Ri.h(f, new V(null, 2, 5, W, [Zo, Kp], null))) && iG(u, Ac, ra, Q.h(vf.h(Zo.g(f), Zo.g(js.g(function() {
              var a = ya;
              return K.g ? K.g(a) : K.call(null, a);
            }()))) ? function() {
              var a = ya;
              return K.g ? K.g(a) : K.call(null, a);
            }() : oi.p(ya, R, new V(null, 2, 5, W, [os, zc], null), yG(Ac, pd)), new V(null, 2, 5, W, [os, zc], null))), q(Ri.h(f, new V(null, 2, 5, W, [Zo, ro], null))) && iG(u, Ac, ra, Q.h(vf.h(Zo.g(f), Zo.g(js.g(function() {
              var a = ya;
              return K.g ? K.g(a) : K.call(null, a);
            }()))) ? function() {
              var a = ya;
              return K.g ? K.g(a) : K.call(null, a);
            }() : oi.p(ya, R, new V(null, 2, 5, W, [pr, zc], null), zG(Ac, pd)), new V(null, 2, 5, W, [pr, zc], null)));
          }
          le += 1;
        } else {
          var Cc = B(Le);
          if (Cc) {
            var qd = Cc;
            if (U(qd)) {
              var me = x(qd), Ne = z(qd), sf = me, yi = N(me), Le = Ne, qf = sf, Me = yi
            } else {
              var tf = D(qd), rd = O.j(tf, 0, null), Eb = O.j(tf, 1, null), qc = O.j(tf, 2, null), Qb = O.j(tf, 3, null);
              if (1 === N(cx(qc)) || ra === c) {
                iG(u, Eb, ra, Qb), q(Ri.h(f, new V(null, 2, 5, W, [Zo, bs], null))) && iG(u, Eb, ra, Q.h(vf.h(Zo.g(f), Zo.g(js.g(function() {
                  var a = ya;
                  return K.g ? K.g(a) : K.call(null, a);
                }()))) ? function() {
                  var a = ya;
                  return K.g ? K.g(a) : K.call(null, a);
                }() : oi.p(ya, R, new V(null, 2, 5, W, [vv, rd], null), AG(Eb, qc)), new V(null, 2, 5, W, [vv, rd], null))), q(Ri.h(f, new V(null, 2, 5, W, [Zo, hm], null))) && iG(u, Eb, ra, Q.h(vf.h(Zo.g(f), Zo.g(js.g(function() {
                  var a = ya;
                  return K.g ? K.g(a) : K.call(null, a);
                }()))) ? function() {
                  var a = ya;
                  return K.g ? K.g(a) : K.call(null, a);
                }() : oi.p(ya, R, new V(null, 2, 5, W, [er, rd], null), CG(Eb, qc)), new V(null, 2, 5, W, [er, rd], null))), q(Ri.h(f, new V(null, 2, 5, W, [Zo, Zr], null))) && iG(u, Eb, ra, Q.h(vf.h(Zo.g(f), Zo.g(js.g(function() {
                  var a = ya;
                  return K.g ? K.g(a) : K.call(null, a);
                }()))) ? function() {
                  var a = ya;
                  return K.g ? K.g(a) : K.call(null, a);
                }() : oi.p(ya, R, new V(null, 2, 5, W, [Pp, rd], null), xG(Eb, qc)), new V(null, 2, 5, W, [Pp, rd], null))), q(Ri.h(f, new V(null, 2, 5, W, [Zo, Kp], null))) && iG(u, Eb, ra, Q.h(vf.h(Zo.g(f), Zo.g(js.g(function() {
                  var a = ya;
                  return K.g ? K.g(a) : K.call(null, a);
                }()))) ? function() {
                  var a = ya;
                  return K.g ? K.g(a) : K.call(null, a);
                }() : oi.p(ya, R, new V(null, 2, 5, W, [os, rd], null), yG(Eb, qc)), new V(null, 2, 5, W, [os, rd], null))), q(Ri.h(f, new V(null, 2, 5, W, [Zo, ro], null))) && iG(u, Eb, ra, Q.h(vf.h(Zo.g(f), Zo.g(js.g(function() {
                  var a = ya;
                  return K.g ? K.g(a) : K.call(null, a);
                }()))) ? function() {
                  var a = ya;
                  return K.g ? K.g(a) : K.call(null, a);
                }() : oi.p(ya, R, new V(null, 2, 5, W, [pr, rd], null), zG(Eb, qc)), new V(null, 2, 5, W, [pr, rd], null)));
              }
              Le = G(qd);
              qf = null;
              Me = 0;
            }
            le = 0;
          } else {
            break;
          }
        }
      }
      Yh.h(f, js.g(function() {
        var a = ya;
        return K.g ? K.g(a) : K.call(null, a);
      }())) && oi.p(ya, R, js, f);
      Cb += 1;
    } else {
      var sd = B(Bb);
      if (sd) {
        var ad = sd;
        if (U(ad)) {
          var Sc = x(ad), Af = z(ad), Te = Sc, Ud = N(Sc), Bb = Af, Ta = Te, ub = Ud
        } else {
          var gb = D(ad), bd = O.h(K.g ? K.g(gG) : K.call(null, gG), gb), pe = O.j(K.g ? K.g(gG) : K.call(null, gG), gb + 1, null), Ue = q(pe) ? D(iw(pe)) : null, Vd = iw(bd), Id = D(jw(bd)), ia = ov.g(wg(bd));
          if (1 === N(cx(Id)) || gb === c) {
            iG(u, g, gb, A), q(Ri.h(f, new V(null, 2, 5, W, [mt, Zr], null))) && iG(u, g, gb, Q.h(vf.h(mt.g(f), mt.g(js.g(function() {
              var a = ia;
              return K.g ? K.g(a) : K.call(null, a);
            }()))) ? function() {
              var a = ia;
              return K.g ? K.g(a) : K.call(null, a);
            }() : oi.p(ia, R, Nq, vG(g, Id)), Nq)), q(function() {
              var a = Ri.h(f, new V(null, 2, 5, W, [mt, gt], null));
              return q(a) ? Ue : a;
            }()) && iG(u, g, gb, Q.h(vf.h(mt.g(f), mt.g(js.g(function() {
              var a = ia;
              return K.g ? K.g(a) : K.call(null, a);
            }()))) ? function() {
              var a = ia;
              return K.g ? K.g(a) : K.call(null, a);
            }() : oi.p(ia, R, Mr, wG(g, Ue)), Mr));
          }
          for (var Bf = B(qi.k(oj, ql.q(), h, Vd, H([y], 0))), eg = null, Cf = 0, Dc = 0;;) {
            if (Dc < Cf) {
              var cd = eg.F(null, Dc), Sb = O.j(cd, 0, null), hc = O.j(cd, 1, null), Wd = O.j(cd, 2, null), Ve = O.j(cd, 3, null);
              if (1 === N(cx(Wd)) || gb === c) {
                iG(u, hc, gb, Ve), q(Ri.h(f, new V(null, 2, 5, W, [Zo, bs], null))) && iG(u, hc, gb, Q.h(vf.h(Zo.g(f), Zo.g(js.g(function() {
                  var a = ia;
                  return K.g ? K.g(a) : K.call(null, a);
                }()))) ? function() {
                  var a = ia;
                  return K.g ? K.g(a) : K.call(null, a);
                }() : oi.p(ia, R, new V(null, 2, 5, W, [vv, Sb], null), AG(hc, Wd)), new V(null, 2, 5, W, [vv, Sb], null))), q(Ri.h(f, new V(null, 2, 5, W, [Zo, hm], null))) && iG(u, hc, gb, Q.h(vf.h(Zo.g(f), Zo.g(js.g(function() {
                  var a = ia;
                  return K.g ? K.g(a) : K.call(null, a);
                }()))) ? function() {
                  var a = ia;
                  return K.g ? K.g(a) : K.call(null, a);
                }() : oi.p(ia, R, new V(null, 2, 5, W, [er, Sb], null), CG(hc, Wd)), new V(null, 2, 5, W, [er, Sb], null))), q(Ri.h(f, new V(null, 2, 5, W, [Zo, Zr], null))) && iG(u, hc, gb, Q.h(vf.h(Zo.g(f), Zo.g(js.g(function() {
                  var a = ia;
                  return K.g ? K.g(a) : K.call(null, a);
                }()))) ? function() {
                  var a = ia;
                  return K.g ? K.g(a) : K.call(null, a);
                }() : oi.p(ia, R, new V(null, 2, 5, W, [Pp, Sb], null), xG(hc, Wd)), new V(null, 2, 5, W, [Pp, Sb], null))), q(Ri.h(f, new V(null, 2, 5, W, [Zo, Kp], null))) && iG(u, hc, gb, Q.h(vf.h(Zo.g(f), Zo.g(js.g(function() {
                  var a = ia;
                  return K.g ? K.g(a) : K.call(null, a);
                }()))) ? function() {
                  var a = ia;
                  return K.g ? K.g(a) : K.call(null, a);
                }() : oi.p(ia, R, new V(null, 2, 5, W, [os, Sb], null), yG(hc, Wd)), new V(null, 2, 5, W, [os, Sb], null))), q(Ri.h(f, new V(null, 2, 5, W, [Zo, ro], null))) && iG(u, hc, gb, Q.h(vf.h(Zo.g(f), Zo.g(js.g(function() {
                  var a = ia;
                  return K.g ? K.g(a) : K.call(null, a);
                }()))) ? function() {
                  var a = ia;
                  return K.g ? K.g(a) : K.call(null, a);
                }() : oi.p(ia, R, new V(null, 2, 5, W, [pr, Sb], null), zG(hc, Wd)), new V(null, 2, 5, W, [pr, Sb], null)));
              }
              Dc += 1;
            } else {
              var fg = B(Bf);
              if (fg) {
                var Jd = fg;
                if (U(Jd)) {
                  var hb = x(Jd), ih = z(Jd), Tc = hb, dd = N(hb), Bf = ih, eg = Tc, Cf = dd
                } else {
                  var Xd = D(Jd), ed = O.j(Xd, 0, null), Uc = O.j(Xd, 1, null), fd = O.j(Xd, 2, null), jh = O.j(Xd, 3, null);
                  if (1 === N(cx(fd)) || gb === c) {
                    iG(u, Uc, gb, jh), q(Ri.h(f, new V(null, 2, 5, W, [Zo, bs], null))) && iG(u, Uc, gb, Q.h(vf.h(Zo.g(f), Zo.g(js.g(function() {
                      var a = ia;
                      return K.g ? K.g(a) : K.call(null, a);
                    }()))) ? function() {
                      var a = ia;
                      return K.g ? K.g(a) : K.call(null, a);
                    }() : oi.p(ia, R, new V(null, 2, 5, W, [vv, ed], null), AG(Uc, fd)), new V(null, 2, 5, W, [vv, ed], null))), q(Ri.h(f, new V(null, 2, 5, W, [Zo, hm], null))) && iG(u, Uc, gb, Q.h(vf.h(Zo.g(f), Zo.g(js.g(function() {
                      var a = ia;
                      return K.g ? K.g(a) : K.call(null, a);
                    }()))) ? function() {
                      var a = ia;
                      return K.g ? K.g(a) : K.call(null, a);
                    }() : oi.p(ia, R, new V(null, 2, 5, W, [er, ed], null), CG(Uc, fd)), new V(null, 2, 5, W, [er, ed], null))), q(Ri.h(f, new V(null, 2, 5, W, [Zo, Zr], null))) && iG(u, Uc, gb, Q.h(vf.h(Zo.g(f), Zo.g(js.g(function() {
                      var a = ia;
                      return K.g ? K.g(a) : K.call(null, a);
                    }()))) ? function() {
                      var a = ia;
                      return K.g ? K.g(a) : K.call(null, a);
                    }() : oi.p(ia, R, new V(null, 2, 5, W, [Pp, ed], null), xG(Uc, fd)), new V(null, 2, 5, W, [Pp, ed], null))), q(Ri.h(f, new V(null, 2, 5, W, [Zo, Kp], null))) && iG(u, Uc, gb, Q.h(vf.h(Zo.g(f), Zo.g(js.g(function() {
                      var a = ia;
                      return K.g ? K.g(a) : K.call(null, a);
                    }()))) ? function() {
                      var a = ia;
                      return K.g ? K.g(a) : K.call(null, a);
                    }() : oi.p(ia, R, new V(null, 2, 5, W, [os, ed], null), yG(Uc, fd)), new V(null, 2, 5, W, [os, ed], null))), q(Ri.h(f, new V(null, 2, 5, W, [Zo, ro], null))) && iG(u, Uc, gb, Q.h(vf.h(Zo.g(f), Zo.g(js.g(function() {
                      var a = ia;
                      return K.g ? K.g(a) : K.call(null, a);
                    }()))) ? function() {
                      var a = ia;
                      return K.g ? K.g(a) : K.call(null, a);
                    }() : oi.p(ia, R, new V(null, 2, 5, W, [pr, ed], null), zG(Uc, fd)), new V(null, 2, 5, W, [pr, ed], null)));
                  }
                  Bf = G(Jd);
                  eg = null;
                  Cf = 0;
                }
                Dc = 0;
              } else {
                break;
              }
            }
          }
          Yh.h(f, js.g(function() {
            var a = ia;
            return K.g ? K.g(a) : K.call(null, a);
          }())) && oi.p(ia, R, js, f);
          Bb = G(ad);
          Ta = null;
          ub = 0;
        }
        Cb = 0;
      } else {
        break;
      }
    }
  }
  MF(g, u, c);
  for (var Yd = B(h), We = null, gg = 0, qe = 0;;) {
    if (qe < gg) {
      var ud = We.F(null, qe);
      MF(ud, u, c);
      qe += 1;
    } else {
      var Kd = B(Yd);
      if (Kd) {
        var rc = Kd;
        if (U(rc)) {
          var Zd = x(rc), hg = z(rc), Xe = Zd, Ye = N(Zd), Yd = hg, We = Xe, gg = Ye
        } else {
          var ig = D(rc);
          MF(ig, u, c);
          Yd = G(rc);
          We = null;
          gg = 0;
        }
        qe = 0;
      } else {
        break;
      }
    }
  }
  if (q(e)) {
    var Ze = O.h(h, d);
    NF(Ze, u, c, e);
  }
  if (q(Ri.h(f, new V(null, 2, 5, W, [Zl, Zr], null)))) {
    for (var Df = B(qi.k(oj, ql.q(), iw(p), q(r) ? iw(r) : null, H([Sh.h(D(jw(p)), iw(p)), h, Sh.h(g, h)], 0))), gd = null, $d = 0, Ld = 0;;) {
      if (Ld < $d) {
        var hd = gd.F(null, Ld), Ef = O.j(hd, 0, null), re = O.j(hd, 1, null);
        O.j(hd, 2, null);
        var $e = O.j(hd, 3, null), kh = O.j(hd, 4, null), lh = O.j(hd, 5, null);
        (id(e) || vf.h(d, Ef)) && kG(u, sv.g(re), kh, $e, lh, e, c, f);
        Ld += 1;
      } else {
        var jg = B(Df);
        if (jg) {
          var af = jg;
          if (U(af)) {
            var kg = x(af), Nj = z(af), gl = kg, Cm = N(kg), Df = Nj, gd = gl, $d = Cm
          } else {
            var ae = D(af), Oj = O.j(ae, 0, null), mh = O.j(ae, 1, null);
            O.j(ae, 2, null);
            var hl = O.j(ae, 3, null), nh = O.j(ae, 4, null), il = O.j(ae, 5, null);
            (id(e) || vf.h(d, Oj)) && kG(u, sv.g(mh), nh, hl, il, e, c, f);
            Df = G(af);
            gd = null;
            $d = 0;
          }
          Ld = 0;
        } else {
          break;
        }
      }
    }
  }
  if (q(q(e) ? c + 1 < N(K.g ? K.g(gG) : K.call(null, gG)) : e)) {
    var oh = O.h(iw(p), d), Pj = q(r) ? O.h(iw(r), d) : null, Dm = O.h(h, d);
    rG(u, sv.g(oh), sv.g(Pj), Dm, e, c, C, f);
  }
  return null;
}
function GG(a, b, c) {
  var d = SC.q();
  ic(a, b, function(a, b, d) {
    return function(a) {
      UC.h(d, a);
      return q(c.g ? c.g(a) : c.call(null, a)) ? (a.preventDefault(), !1) : null;
    };
  }(a, b, d));
  return d;
}
function HG(a, b) {
  var c = GG(a, "click", function() {
    return!1;
  }), d = SC.g(1);
  pC(function(a, c) {
    return function() {
      var d = function() {
        return function(a) {
          return function() {
            function b(c) {
              for (;;) {
                var d;
                a: {
                  try {
                    for (;;) {
                      var e = a(c);
                      if (!Z(e, $)) {
                        d = e;
                        break a;
                      }
                    }
                  } catch (f) {
                    if (f instanceof Object) {
                      c[5] = f;
                      HC(c);
                      d = $;
                      break a;
                    }
                    throw f;
                  }
                  d = void 0;
                }
                if (!Z(d, $)) {
                  return d;
                }
              }
            }
            function c() {
              var a = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
              a[0] = d;
              a[1] = 1;
              return a;
            }
            var d = null, d = function(a) {
              switch(arguments.length) {
                case 0:
                  return c.call(this);
                case 1:
                  return b.call(this, a);
              }
              throw Error("Invalid arity: " + arguments.length);
            };
            d.q = c;
            d.g = b;
            return d;
          }();
        }(function(a, c) {
          return function(a) {
            var d = a[1];
            if (7 === d) {
              var e = a[7], d = a[8], f = a[9], d = a[2], g = d.offsetX, f = d.offsetY, d = K.g ? K.g(hG) : K.call(null, hG), h = mt.g(d), d = K.g ? K.g(hG) : K.call(null, hG), e = sp.g(d), d = K.g ? K.g(gG) : K.call(null, gG), d = N(d) - 2, d = 0 > d ? 0 : d, h = KF(h, g, f);
              a[7] = h;
              a[8] = g;
              a[9] = f;
              a[10] = e;
              a[11] = d;
              a[1] = q(h) ? 8 : 9;
              return $;
            }
            return 1 === d ? (a[2] = null, a[1] = 2, $) : 4 === d ? FC(a, 7, c) : 15 === d ? (d = a[2], a[2] = d, a[1] = 12, $) : 13 === d ? (g = a[12], d = a[8], f = a[9], e = a[13], e = a[10], g = O.h(e, g), d = KF(g, d, f), a[13] = d, a[1] = q(d) ? 16 : 17, $) : 6 === d ? (d = a[2], a[2] = d, a[1] = 3, $) : 17 === d ? (g = a[12], a[12] = g + 1, a[2] = null, a[1] = 11, $) : 3 === d ? (d = a[2], GC(a, d)) : 12 === d ? (d = a[2], a[2] = d, a[1] = 10, $) : 2 === d ? (a[1] = 4, $) : 11 === d ? (g = 
            a[12], e = a[10], d = N(e), a[1] = q(g < d) ? 13 : 14, $) : 9 === d ? (a[12] = 0, a[2] = null, a[1] = 11, $) : 5 === d ? (a[2] = null, a[1] = 6, $) : 14 === d ? (d = oi.p(b, R, $r, null), a[2] = d, a[1] = 15, $) : 16 === d ? (g = a[12], e = a[13], d = a[11], f = O.j(e, 0, null), e = O.j(e, 1, null), d = sg([gr, $r, gp], [g, e, f < d ? f : d]), d = mi.h ? mi.h(b, d) : mi.call(null, b, d), a[2] = d, a[1] = 18, $) : 10 === d ? (a[14] = a[2], a[2] = null, a[1] = 2, $) : 18 === d ? (d = a[2], 
            a[2] = d, a[1] = 15, $) : 8 === d ? (e = a[7], d = a[11], g = O.j(e, 0, null), e = O.j(e, 1, null), d = oi.p(b, R, gp, g < d ? g : d), a[15] = e, a[2] = d, a[1] = 10, $) : null;
          };
        }(a, c), a, c);
      }(), h = function() {
        var b = d.q ? d.q() : d.call(null);
        b[6] = a;
        return b;
      }();
      return EC(h);
    };
  }(d, c));
}
var IG = new n(null, 6, [33, rp, 34, ut, 37, Tv, 38, $q, 39, Gs, 40, fm], null);
function JG(a, b) {
  var c = GG(document, "keydown", function(a) {
    a = a.keyCode;
    return IG.g ? IG.g(a) : IG.call(null, a);
  }), d = SC.g(1);
  pC(function(c, d) {
    return function() {
      var g = function() {
        return function(a) {
          return function() {
            function b(c) {
              for (;;) {
                var d;
                a: {
                  try {
                    for (;;) {
                      var e = a(c);
                      if (!Z(e, $)) {
                        d = e;
                        break a;
                      }
                    }
                  } catch (f) {
                    if (f instanceof Object) {
                      c[5] = f;
                      HC(c);
                      d = $;
                      break a;
                    }
                    throw f;
                  }
                  d = void 0;
                }
                if (!Z(d, $)) {
                  return d;
                }
              }
            }
            function c() {
              var a = [null, null, null, null, null, null, null, null, null, null, null, null];
              a[0] = d;
              a[1] = 1;
              return a;
            }
            var d = null, d = function(a) {
              switch(arguments.length) {
                case 0:
                  return c.call(this);
                case 1:
                  return b.call(this, a);
              }
              throw Error("Invalid arity: " + arguments.length);
            };
            d.q = c;
            d.g = b;
            return d;
          }();
        }(function(c, d) {
          return function(e) {
            var f = e[1];
            if (7 === f) {
              var g = e[7], h = e[8], y = e[2], C = y.keyCode, C = IG.g ? IG.g(C) : IG.call(null, C), F = K.g ? K.g(gG) : K.call(null, gG), F = N(F) - 2, J = 0 > F ? 0 : F;
              e[7] = y;
              e[8] = C;
              e[9] = J;
              e[1] = q(C) ? 8 : 9;
              return $;
            }
            if (20 === f) {
              return y = jG(!0), e[2] = y, e[1] = 11, $;
            }
            if (1 === f) {
              return e[2] = null, e[1] = 2, $;
            }
            if (4 === f) {
              return FC(e, 7, d);
            }
            if (15 === f) {
              var g = e[7], h = e[8], J = e[9], L = [gp], I = new V(null, 1, 5, W, L, null), y = oi.p(a, Ui, I, function() {
                return function() {
                  return function(a) {
                    a -= 1;
                    return 0 < a ? a : 0;
                  };
                }(J, h, g, g, h, J, W, L, I, f, c, d);
              }());
              e[2] = y;
              e[1] = 16;
              return $;
            }
            if (13 === f) {
              return y = K.g ? K.g(a) : K.call(null, a), y = 0 === gp.g(y), e[1] = q(y) ? 14 : 15, $;
            }
            if (6 === f) {
              return y = e[2], e[2] = y, e[1] = 3, $;
            }
            if (17 === f) {
              var g = e[7], h = e[8], J = e[9], P = [$r], T = new V(null, 1, 5, W, P, null), y = oi.p(a, Ui, T, function() {
                return function() {
                  return function(a) {
                    return q(a) ? a - 1 : null;
                  };
                }(J, h, g, g, h, J, W, P, T, f, c, d);
              }());
              e[2] = y;
              e[1] = 11;
              return $;
            }
            if (3 === f) {
              return y = e[2], GC(e, y);
            }
            if (12 === f) {
              var g = e[7], h = e[8], J = e[9], M = [gp], ga = new V(null, 1, 5, W, M, null), y = oi.p(a, Ui, ga, function() {
                return function(a) {
                  return function(b) {
                    b += 1;
                    return b < a ? b : a;
                  };
                }(J, h, g, g, h, J, W, M, ga, f, c, d);
              }());
              e[2] = y;
              e[1] = 11;
              return $;
            }
            if (2 === f) {
              return e[1] = 4, $;
            }
            if (19 === f) {
              return y = jG(!1), e[2] = y, e[1] = 11, $;
            }
            if (11 === f) {
              return y = e[2], e[2] = y, e[1] = 10, $;
            }
            if (9 === f) {
              return e[2] = null, e[1] = 10, $;
            }
            if (5 === f) {
              return e[2] = null, e[1] = 6, $;
            }
            if (14 === f) {
              return C = b.q ? b.q() : b.call(null), y = oi.h(a, Tg), e[10] = C, e[2] = y, e[1] = 16, $;
            }
            if (16 === f) {
              return y = e[2], e[2] = y, e[1] = 11, $;
            }
            if (10 === f) {
              return e[11] = e[2], e[2] = null, e[1] = 2, $;
            }
            if (18 === f) {
              var g = e[7], h = e[8], J = e[9], Y = [$r], na = new V(null, 1, 5, W, Y, null), y = oi.p(a, Ui, na, function() {
                return function() {
                  return function(a) {
                    return q(a) ? a + 1 : null;
                  };
                }(J, h, g, g, h, J, W, Y, na, f, c, d);
              }());
              e[2] = y;
              e[1] = 11;
              return $;
            }
            if (8 === f) {
              h = e[8];
              switch(h instanceof X ? h.ca : null) {
                case "page-down":
                  e[1] = 20;
                  break;
                case "page-up":
                  e[1] = 19;
                  break;
                case "down":
                  e[1] = 18;
                  break;
                case "up":
                  e[1] = 17;
                  break;
                case "right":
                  e[1] = 13;
                  break;
                case "left":
                  e[1] = 12;
                  break;
                default:
                  throw Error("No matching clause: " + v.g(h));;
              }
              return $;
            }
            return null;
          };
        }(c, d), c, d);
      }(), h = function() {
        var a = g.q ? g.q() : g.call(null);
        a[6] = c;
        return a;
      }();
      return EC(h);
    };
  }(d, c));
}
function KG(a) {
  var b = LG(), c = FG, d = MG, e = iw(a), f = Os.g(K.g ? K.g(dG) : K.call(null, dG)), g = D(jw(a)), h = ls.g(f), l = Ww(g);
  a = 1 === N(Xw(l)) ? XF(l, h + 10, f) : $F(l, h + 10, f);
  var p = Uo.g(f), e = od.j(function(a, b, c, d, e, f, g) {
    return function(a, c) {
      var d = Ww(c), e = xg(a), e = OF(q(e) ? e : f) + g;
      if (1 === N(Xw(d))) {
        var h = Jg(b) ? S.h(ji, b) : b, l = Q.h(h, nv), p = Q.h(h, Vo), r = Q.h(h, Kv), h = Q.h(h, Np), d = WF(sg([no, No, dp, Hp, Np, Gr, ms, rs, gv, nv, Xv], [0, d, r, p, h, 900, 30, e, !0, l, r]))
      } else {
        r = Jg(b) ? S.h(ji, b) : b, l = Q.h(r, nv), p = Q.h(r, Vo), r = Q.h(r, Kv), d = ZF(sg([no, No, dp, Hp, Gr, ms, rs, gv, nv, Xv], [0, d, r, p, 900, 30, e, !0, l, r]));
      }
      return qg.h(a, d);
    };
  }(e, f, g, h, l, a, p), pg, e), e = new n(null, 2, [mt, a, sp, e], null);
  mi.h ? mi.h(hG, e) : mi.call(null, hG, e);
  e = SC.g(1);
  pC(function(a) {
    return function() {
      var c = function() {
        return function(a) {
          return function() {
            function b(c) {
              for (;;) {
                var d;
                a: {
                  try {
                    for (;;) {
                      var e = a(c);
                      if (!Z(e, $)) {
                        d = e;
                        break a;
                      }
                    }
                  } catch (f) {
                    if (f instanceof Object) {
                      c[5] = f;
                      HC(c);
                      d = $;
                      break a;
                    }
                    throw f;
                  }
                  d = void 0;
                }
                if (!Z(d, $)) {
                  return d;
                }
              }
            }
            function c() {
              var a = [null, null, null, null, null, null, null, null, null];
              a[0] = d;
              a[1] = 1;
              return a;
            }
            var d = null, d = function(a) {
              switch(arguments.length) {
                case 0:
                  return c.call(this);
                case 1:
                  return b.call(this, a);
              }
              throw Error("Invalid arity: " + arguments.length);
            };
            d.q = c;
            d.g = b;
            return d;
          }();
        }(function(a) {
          return function(c) {
            var d = c[1];
            if (7 === d) {
              var e = c;
              e[2] = c[2];
              e[1] = 3;
              return $;
            }
            if (6 === d) {
              return c[2] = null, c[1] = 7, $;
            }
            if (5 === d) {
              var f = c[7], g = function() {
                var a = Lj;
                return li.g ? li.g(a) : li.call(null, a);
              }(), h = Xh.p(f, R, ov, g), e = oi.h(gG, function() {
                return function(a) {
                  return function(b) {
                    return nj(ri.h(K.g ? K.g(fG) : K.call(null, fG), Zf(a, b)));
                  };
                }(h, f, f, f, Lj, g, h, d, a);
              }());
              c[8] = e;
              c[2] = null;
              c[1] = 2;
              return $;
            }
            return 4 === d ? (f = c[7], e = c[2], c[7] = e, c[1] = q(e) ? 5 : 6, $) : 3 === d ? (e = c[2], GC(c, e)) : 2 === d ? FC(c, 4, b) : 1 === d ? (c[2] = null, c[1] = 2, $) : null;
          };
        }(a), a);
      }(), d = function() {
        var b = c.q ? c.q() : c.call(null);
        b[6] = a;
        return b;
      }();
      return EC(d);
    };
  }(e));
  e = YD("#comportex-viz");
  e.width = .7 * (window.innerWidth - 20);
  e.height = 900;
  HG(e, c);
  JG(c, d);
}
;var NG = function() {
  function a(a, b) {
    return Math.pow.h ? Math.pow.h(a, b) : Math.pow.call(null, a, b);
  }
  function b(a) {
    return Math.exp.g ? Math.exp.g(a) : Math.exp.call(null, a);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.g = b;
  c.h = a;
  return c;
}();
function OG(a) {
  return Math.floor.g ? Math.floor.g(a) : Math.floor.call(null, a);
}
function PG(a) {
  return Math.ceil.g ? Math.ceil.g(a) : Math.ceil.call(null, a);
}
function QG(a) {
  return od.h(Vg, a) / N(a);
}
var RG = function() {
  function a(a, b, c) {
    a = ql.j(a, b, c);
    return(D(a) % c + c) % c === (b % c + c) % c ? Rh.h(a, new V(null, 1, 5, W, [b], null)) : a;
  }
  function b(a, b) {
    return Rh.h(ql.h(a, b), new V(null, 1, 5, W, [b], null));
  }
  function c(a) {
    return ql.g(a);
  }
  var d = null, d = function(d, f, g) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 2:
        return b.call(this, d, f);
      case 3:
        return a.call(this, d, f, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.g = c;
  d.h = b;
  d.j = a;
  return d;
}();
var SG = new V(null, 6, 5, W, [1, 5, 2, 2.5, 4, 3], null);
function TG(a) {
  return D(function() {
    return function c(d) {
      return new Dh(null, function() {
        for (var e = d;;) {
          if (e = B(e)) {
            if (U(e)) {
              var f = x(e), g = N(f), h = Hh(g);
              a: {
                for (var l = 0;;) {
                  if (l < g) {
                    var p = w.h(f, l), r = O.j(p, 0, null), p = O.j(p, 1, null);
                    vf.h(p, a) && h.add(r);
                    l += 1;
                  } else {
                    f = !0;
                    break a;
                  }
                }
                f = void 0;
              }
              return f ? Kh(Mh(h), c(z(e))) : Kh(Mh(h), null);
            }
            f = D(e);
            h = O.j(f, 0, null);
            f = O.j(f, 1, null);
            if (vf.h(f, a)) {
              return Zf(h, c(E(e)));
            }
            e = E(e);
          } else {
            return null;
          }
        }
      }, null, null);
    }(gi(oj, SG));
  }());
}
function UG(a, b, c) {
  c = q(c) ? 1 : 0;
  return 1 >= N(SG) ? 1 - b + c : 1 - TG(a) / (N(SG) - 1) - b + c;
}
function VG(a, b, c, d) {
  return 1 - .5 * ((NG.h(b - d, 2) + NG.h(a - c, 2)) / NG.h(.1 * (b - a), 2));
}
function WG(a, b, c) {
  a = b - a;
  return c > a ? 1 - NG.h((c - a) / (.2 * a), 2) : 1;
}
function XG(a, b) {
  var c = a / b, d = b / a;
  return 2 - (c > d ? c : d);
}
function YG(a, b) {
  return a >= b ? 2 - a / b : 1;
}
function ZG(a) {
  var b = O.j(a, 0, null), c = O.j(a, 1, null), d = O.j(a, 2, null);
  a = O.j(a, 3, null);
  var e = new V(null, 4, 5, W, [.2, .25, .5, .05], null);
  return b * (e.g ? e.g(0) : e.call(null, 0)) + c * (e.g ? e.g(1) : e.call(null, 1)) + d * (e.g ? e.g(2) : e.call(null, 2)) + a * (e.g ? e.g(3) : e.call(null, 3));
}
var $G = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = H(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    var e = O.j(a, 0, null), f = O.j(a, 1, null), g = Jg(b) ? S.h(ji, b) : b, h = Q.j(g, ir, !1), l = Q.j(g, ws, 500), p = Q.j(g, am, .01);
    if ("number" === typeof e && "number" === typeof f && Yh.h(e, f)) {
      for (var r = li.g ? li.g(-2) : li.call(null, -2), t = li.g ? li.g(Jj) : li.call(null, Jj), u = SG;!zg(u);) {
        for (var A = D(u), y = 1;;) {
          var C = UG(A, y, !0);
          if (ZG(new V(null, 4, 5, W, [C, 1, 1, 1], null)) < (K.g ? K.g(r) : K.call(null, r))) {
            break;
          } else {
            for (var F = 2;;) {
              var J = YG(F / l, p);
              if (ZG(new V(null, 4, 5, W, [C, 1, J, 1], null)) < (K.g ? K.g(r) : K.call(null, r))) {
                break;
              } else {
                for (var L = PG(Math.log((f - e) / ((F + 1) * y * F)) / Math.LN10);;) {
                  var I = A * y * NG.h(10, L), P = WG(e, f, (F - 1) * I);
                  if (ZG(new V(null, 4, 5, W, [C, P, J, 1], null)) < (K.g ? K.g(r) : K.call(null, r))) {
                    break;
                  } else {
                    for (var P = e / I, T = OG(f / I) - (F - 1);;) {
                      if (!(T > P)) {
                        var M = T * I, ga = M + (F - 1) * I, Y = UG(A, y, 0 < ga && 0 > M && 0 === (M % I + I) % I), na = VG(e, f, M, ga), na = ZG(new V(null, 4, 5, W, [Y, na, XG(F / l, p), 1], null));
                        if (!(na < (K.g ? K.g(r) : K.call(null, r)))) {
                          Y = r;
                          mi.h ? mi.h(Y, na) : mi.call(null, Y, na);
                          Y = t;
                          M = new n(null, 3, [em, M, Xr, ga, xv, I], null);
                          mi.h ? mi.h(Y, M) : mi.call(null, Y, M);
                          T += 1 / y;
                          continue;
                        }
                      }
                      break;
                    }
                    L += 1;
                  }
                }
                F += 1;
              }
            }
            y += 1;
          }
        }
        u = G(u);
      }
      var ha = K.g ? K.g(t) : K.call(null, t), u = new V(null, 2, 5, W, [q(h) ? e : function() {
        var a = em.g(ha);
        return a < e ? a : e;
      }(), q(h) ? f : function() {
        var a = Xr.g(ha);
        return a > f ? a : f;
      }()], null);
      return new n(null, 4, [hs, u, em, D(u), Xr, cg(u), Hs, Bi.h(function(a, b) {
        return function(a) {
          var c = O.j(b, 0, null), d = O.j(b, 1, null);
          return c <= a && a <= d;
        };
      }(ha, u, r, t, a, e, f, b, g, h, l, p), RG.j(em.g(ha), Xr.g(ha), xv.g(ha)))], null);
    }
    return new n(null, 4, [hs, 0, em, e, Xr, f, Hs, pg], null);
  }
  a.B = 1;
  a.o = function(a) {
    var d = D(a);
    a = E(a);
    return b(d, a);
  };
  a.k = b;
  return a;
}();
function aH(a, b, c, d) {
  this.domain = a;
  this.xb = b;
  this.m = c;
  this.l = d;
  this.t = 2229667595;
  this.G = 8192;
  2 < arguments.length ? (this.m = c, this.l = d) : this.l = this.m = null;
}
k = aH.prototype;
k.N = function(a, b) {
  return Md.j(this, b, null);
};
k.L = function(a, b, c) {
  switch(b instanceof X ? b.ca : null) {
    case "range":
      return this.xb;
    case "domain":
      return this.domain;
    default:
      return Q.j(this.l, b, c);
  }
};
k.P = function(a, b, c) {
  return zl(b, function() {
    return function(a) {
      return zl(b, Fl, "", " ", "", c, a);
    };
  }(this), "#c2.scale._linear{", ", ", "}", c, Rh.h(new V(null, 2, 5, W, [new V(null, 2, 5, W, [lt, this.domain], null), new V(null, 2, 5, W, [Mv, this.xb], null)], null), this.l));
};
k.I = function() {
  return this.m;
};
k.V = function() {
  return 2 + N(this.l);
};
k.R = function() {
  var a = this.w;
  return null != a ? a : this.w = a = th(this);
};
k.O = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && Bj(this, b) : b) ? !0 : !1;
};
k.Ra = function(a, b) {
  return Lg(new Xk(null, new n(null, 2, [lt, null, Mv, null], null), null), b) ? tg.h(ag(Oi.h(Jj, this), this.m), b) : new aH(this.domain, this.xb, this.m, Zh(tg.h(this.l, b)), null);
};
k.Ia = function(a, b, c) {
  return q(Z.h ? Z.h(lt, b) : Z.call(null, lt, b)) ? new aH(c, this.xb, this.m, this.l, null) : q(Z.h ? Z.h(Mv, b) : Z.call(null, Mv, b)) ? new aH(this.domain, c, this.m, this.l, null) : new aH(this.domain, this.xb, this.m, R.j(this.l, b, c), null);
};
k.S = function() {
  return B(Rh.h(new V(null, 2, 5, W, [new V(null, 2, 5, W, [lt, this.domain], null), new V(null, 2, 5, W, [Mv, this.xb], null)], null), this.l));
};
k.J = function(a, b) {
  return new aH(this.domain, this.xb, b, this.l, this.w);
};
k.U = function(a, b) {
  return Eg(b) ? Pd(this, w.h(b, 0), w.h(b, 1)) : od.j(Ad, this, b);
};
k.call = function(a, b) {
  a = this;
  var c = dg(a.domain) - D(a.domain), d = dg(a.xb) - D(a.xb);
  return D(a.xb) + d * ((b - D(a.domain)) / c);
};
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(nd(b)));
};
k.g = function(a) {
  var b = dg(this.domain) - D(this.domain), c = dg(this.xb) - D(this.xb);
  return D(this.xb) + c * ((a - D(this.domain)) / b);
};
var bH = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = H(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = Uk.k(H([new n(null, 2, [lt, new V(null, 2, 5, W, [0, 1], null), Mv, new V(null, 2, 5, W, [0, 1], null)], null), S.h(ji, a)], 0));
    return new aH(lt.g(a), Mv.g(a), null, tg.k(a, lt, H([Mv], 0)));
  }
  a.B = 0;
  a.o = function(a) {
    a = B(a);
    return b(a);
  };
  a.k = b;
  return a;
}();
function cH(a) {
  return Cg(a) && vf.h(2, N(a)) ? a : Dg(a) ? new V(null, 2, 5, W, [$s.g(a), Ql.g(a)], null) : null;
}
function dH(a) {
  var b = cH(a);
  a = O.j(b, 0, null);
  b = O.j(b, 1, null);
  return "translate(" + v.g(a) + "," + v.g(b) + ")";
}
var eH = function() {
  function a(a, b) {
    var c = cH(b), g = O.j(c, 0, null), c = O.j(c, 1, null);
    return "rotate(" + v.g(a) + "," + v.g(g) + "," + v.g(c) + ")";
  }
  function b(a) {
    return c.h(a, new V(null, 2, 5, W, [0, 0], null));
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.g = b;
  c.h = a;
  return c;
}(), fH = function() {
  function a(a, d, e) {
    var f = null;
    2 < arguments.length && (f = H(Array.prototype.slice.call(arguments, 2), 0));
    return b.call(this, a, d, f);
  }
  function b(a, b, e) {
    var f = Jg(e) ? S.h(ji, e) : e, g = Q.j(f, Fr, 28), h = Q.h(f, cs), l = Q.j(f, mm, 9), p = Q.j(f, Mq, 6), r = Q.j(f, hp, v), t = Q.j(f, Ip, Tv), u = function() {
      switch(t instanceof X ? t.ca : null) {
        case "bottom":
          return new V(null, 6, 5, W, [Ql, $s, vp, wt, at, Cv], null);
        case "top":
          return new V(null, 6, 5, W, [Ql, $s, vp, wt, at, Cv], null);
        case "right":
          return new V(null, 6, 5, W, [$s, Ql, at, Cv, vp, wt], null);
        case "left":
          return new V(null, 6, 5, W, [$s, Ql, at, Cv, vp, wt], null);
        default:
          throw Error("No matching clause: " + v.g(t));;
      }
    }(), A = O.j(u, 0, null), y = O.j(u, 1, null), C = O.j(u, 2, null), F = O.j(u, 3, null), J = O.j(u, 4, null), L = O.j(u, 5, null), I = function() {
      switch(t instanceof X ? t.ca : null) {
        case "bottom":
          return 1;
        case "right":
          return 1;
        case "top":
          return-1;
        case "left":
          return-1;
        default:
          throw Error("No matching clause: " + v.g(t));;
      }
    }();
    return new V(null, 5, 5, W, [ur, new n(null, 1, [es, "axis " + v.g(Bh(t))], null), new V(null, 2, 5, W, [Qo, S.h(ji, wi.h(new V(null, 2, 5, W, [J, L], null), Mv.g(a)))], null), new V(null, 2, 5, W, [qo, gE(qi.j(oj, b, ui.g(a)), function(a, b, c, d, e, f, g, h, l, p, r, t, u, y, A) {
      return function(a) {
        var f = O.j(a, 0, null);
        a = O.j(a, 1, null);
        return new V(null, 4, 5, W, [nm, new n(null, 1, [zm, dH(new Mj([b, 0, c, a.g ? a.g(f) : a.call(null, f)]))], null), new V(null, 3, 5, W, [Vv, new Mj([b, h * u]), A.g ? A.g(f) : A.call(null, f)], null), new V(null, 2, 5, W, [Jr, new Mj([d, 0, e, h * y])], null)], null);
      };
    }(u, A, y, C, F, J, L, I, e, f, g, h, l, p, r, t))], null), q(h) ? new V(null, 3, 5, W, [Mo, new n(null, 1, [zm, "" + v.g(dH(new Mj([A, I * g, y, QG(Mv.g(a))]))) + " " + v.g(function() {
      switch(t instanceof X ? t.ca : null) {
        case "right":
          return eH.g(90);
        case "left":
          return eH.g(-90);
        default:
          return "";
      }
    }())], null), h], null) : null], null);
  }
  a.B = 2;
  a.o = function(a) {
    var d = D(a);
    a = G(a);
    var e = D(a);
    a = E(a);
    return b(d, e, a);
  };
  a.k = b;
  return a;
}();
function gH(a) {
  return S.h(Vg, a) / N(a);
}
function hH(a, b) {
  var c = Sk(D(b));
  return Oi.h(Jj, function() {
    return function(c) {
      return function f(g) {
        return new Dh(null, function() {
          return function() {
            for (;;) {
              var c = B(g);
              if (c) {
                if (U(c)) {
                  var d = x(c), p = N(d), r = Hh(p);
                  return function() {
                    for (var c = 0;;) {
                      if (c < p) {
                        var f = w.h(d, c), g = r, h = W, t = f, f = qi.h(f, b), f = a.g ? a.g(f) : a.call(null, f);
                        g.add(new V(null, 2, 5, h, [t, f], null));
                        c += 1;
                      } else {
                        return!0;
                      }
                    }
                  }() ? Kh(Mh(r), f(z(c))) : Kh(Mh(r), null);
                }
                var t = D(c);
                return Zf(new V(null, 2, 5, W, [t, function() {
                  var c = qi.h(t, b);
                  return a.g ? a.g(c) : a.call(null, c);
                }()], null), f(E(c)));
              }
              return null;
            }
          };
        }(c), null, null);
      };
    }(c)(c);
  }());
}
function iH(a, b, c) {
  a = Ui.p(a, new V(null, 1, 5, W, [jr], null), qg, hH(gH, b));
  b = N(jr.g(a));
  b > c && bi(b) ? (c = Jg(a) ? S.h(ji, a) : a, a = Q.h(c, jr), b = 2 * Q.h(c, Iv), c = R.k(c, Iv, b, H([jr, Pi.h(fi.h(hH, gH), Qi.h(2, a))], 0))) : c = a;
  return c;
}
function jH(a) {
  var b = function() {
    var a = new n(null, 3, [Iv, 1, jr, pg, rt, 200], null);
    return li.g ? li.g(a) : li.call(null, a);
  }(), c = SC.g(1);
  pC(function(b, c) {
    return function() {
      var f = function() {
        return function(a) {
          return function() {
            function b(c) {
              for (;;) {
                var d;
                a: {
                  try {
                    for (;;) {
                      var e = a(c);
                      if (!Z(e, $)) {
                        d = e;
                        break a;
                      }
                    }
                  } catch (f) {
                    if (f instanceof Object) {
                      c[5] = f;
                      HC(c);
                      d = $;
                      break a;
                    }
                    throw f;
                  }
                  d = void 0;
                }
                if (!Z(d, $)) {
                  return d;
                }
              }
            }
            function c() {
              var a = [null, null, null, null, null, null, null, null, null, null];
              a[0] = d;
              a[1] = 1;
              return a;
            }
            var d = null, d = function(a) {
              switch(arguments.length) {
                case 0:
                  return c.call(this);
                case 1:
                  return b.call(this, a);
              }
              throw Error("Invalid arity: " + arguments.length);
            };
            d.q = c;
            d.g = b;
            return d;
          }();
        }(function(b, c) {
          return function(b) {
            var d = b[1];
            if (7 === d) {
              return d = b, d[2] = b[2], d[1] = 3, $;
            }
            if (6 === d) {
              var e = b[7], d = oi.p(c, iH, e, 200), e = null == e ? null : yd(e);
              b[8] = e;
              b[9] = d;
              b[2] = null;
              b[1] = 2;
              return $;
            }
            if (5 === d) {
              return e = b[7], b[8] = e, b[2] = null, b[1] = 2, $;
            }
            if (4 === d) {
              var e = b[8], d = qg.h(e, b[2]), e = N(d), f = K.g ? K.g(c) : K.call(null, c), f = Iv.g(f);
              b[7] = d;
              b[1] = q(e < f) ? 5 : 6;
              return $;
            }
            return 3 === d ? (d = b[2], GC(b, d)) : 2 === d ? FC(b, 4, a) : 1 === d ? (e = pg, b[8] = e, b[2] = null, b[1] = 2, $) : null;
          };
        }(b, c), b, c);
      }(), g = function() {
        var a = f.q ? f.q() : f.call(null);
        a[6] = b;
        return a;
      }();
      return EC(g);
    };
  }(c, b));
  return b;
}
function kH(a, b) {
  var c = new V(null, 3, 5, W, [Zr, yr, gt], null), d = new n(null, 4, [Tv, 50, Gs, 30, wo, 50, Jo, 20], null), e = function() {
    var a = new fE(null, !0, function(a) {
      return function() {
        var d = Jg(b) ? S.h(ji, b) : b, e = Q.h(d, Iv), f = Q.h(d, rt), g = Q.h(d, jr), u = e * f, A = br.g(xg(g)), y = .1 * A, C = bH.k(H([lt, new V(null, 2, 5, W, [0, u], null), Mv, new V(null, 2, 5, W, [0, 399], null)], 0)), F = Hs.g($G.k(lt.g(C), H([ws, 400], 0))), J = bH.k(H([lt, new V(null, 2, 5, W, [0, y], null), Mv, new V(null, 2, 5, W, [179, 0], null)], 0)), L = bH.k(H([lt, new V(null, 2, 5, W, [0, y], null), Mv, new V(null, 2, 5, W, [0, 179], null)], 0)), I = Hs.g($G.k(lt.g(J), H([ws, 450], 
        0)));
        return 0 < A ? new V(null, 3, 5, W, [kr, new V(null, 3, 5, W, [hr, new n(null, 1, [Op, "text/css"], null), S.M(v, "g.timestep rect { stroke-width: 0px; }", ".plot-space line { stroke: black; }", ".plot-space text { font-size: 80%; }", function() {
          return function(a, b, c, d, e, f, g, h, l, p, r, t, u, y, A) {
            return function Ya(C) {
              return new Dh(null, function() {
                return function() {
                  for (;;) {
                    var a = B(C);
                    if (a) {
                      if (U(a)) {
                        var b = x(a), c = N(b), d = Hh(c);
                        return function() {
                          for (var a = 0;;) {
                            if (a < c) {
                              var e = w.h(b, a);
                              Lh(d, "." + v.g(Bh(e)) + " { fill: " + v.g(function() {
                                var a = e;
                                return cG.g ? cG.g(a) : cG.call(null, a);
                              }()) + "}");
                              a += 1;
                            } else {
                              return!0;
                            }
                          }
                        }() ? Kh(Mh(d), Ya(z(a))) : Kh(Mh(d), null);
                      }
                      var e = D(a);
                      return Zf("." + v.g(Bh(e)) + " { fill: " + v.g(function() {
                        var a = e;
                        return cG.g ? cG.g(a) : cG.call(null, a);
                      }()) + "}", Ya(E(a)));
                    }
                    return null;
                  }
                };
              }(a, b, c, d, e, f, g, h, l, p, r, t, u, y, A), null, null);
            };
          }(b, d, e, f, g, u, A, y, C, C, F, J, L, I, a)(c);
        }())], null), new V(null, 3, 5, W, [us, new n(null, 1, [hr, new n(null, 4, [Ms, "block", Zv, "auto", wp, 400 + Tv.g(a) + Gs.g(a), Nv, 180 + wo.g(a) + Jo.g(a)], null)], null), new V(null, 5, 5, W, [Sr, new n(null, 1, [zm, dH(new V(null, 2, 5, W, [Tv.g(a), Jo.g(a)], null))], null), fH.k(J, I, H([Ip, Tv, mm, 28, cs, "n. columns", Fr, 35], 0)), new V(null, 3, 5, W, [ur, new n(null, 1, [zm, dH(new V(null, 2, 5, W, [0, 180], null))], null), fH.k(C, F, H([Ip, wo, mm, 18, cs, "timestep", Fr, 35], 
        0))], null), new V(null, 2, 5, W, [ur, gE.k(gi(oj, g), function(a, b, d, e, f, g, h, l, p, r, t, u, y, A, C) {
          return function(F) {
            var I = O.j(F, 0, null), J = O.j(F, 1, null), L = qi.h(J, c), ub = sl.h(Vg, L);
            return Oi.h(new V(null, 1, 5, W, [Jq], null), function() {
              return function(a, b, c, d, e, f, g, h, l, p, r, t, u, M, y, A, C, F, I, J) {
                return function sf(L) {
                  return new Dh(null, function(a, b, c, d, e, f, g, h, l, p, r, t, u, M, y, A, C, F) {
                    return function() {
                      for (;;) {
                        var a = B(L);
                        if (a) {
                          if (U(a)) {
                            var b = x(a), c = N(b), e = Hh(c);
                            return function() {
                              for (var a = 0;;) {
                                if (a < c) {
                                  var f = w.h(b, a), g = O.j(f, 0, null), l = O.j(f, 1, null), p = O.j(f, 2, null);
                                  Lh(e, new V(null, 2, 5, W, [wv, new n(null, 5, [es, g, $s, function() {
                                    var a = d * h;
                                    return M.g ? M.g(a) : M.call(null, a);
                                  }(), Ql, function() {
                                    var a = p;
                                    return C.g ? C.g(a) : C.call(null, a);
                                  }(), wp, y.g ? y.g(h) : y.call(null, h), Nv, function() {
                                    var a = l;
                                    return F.g ? F.g(a) : F.call(null, a);
                                  }()], null)], null));
                                  a += 1;
                                } else {
                                  return!0;
                                }
                              }
                            }() ? Kh(Mh(e), sf(z(a))) : Kh(Mh(e), null);
                          }
                          var f = D(a), g = O.j(f, 0, null), l = O.j(f, 1, null), p = O.j(f, 2, null);
                          return Zf(new V(null, 2, 5, W, [wv, new n(null, 5, [es, g, $s, function() {
                            var a = d * h;
                            return M.g ? M.g(a) : M.call(null, a);
                          }(), Ql, function() {
                            var a = p;
                            return C.g ? C.g(a) : C.call(null, a);
                          }(), wp, y.g ? y.g(h) : y.call(null, h), Nv, function() {
                            var a = l;
                            return F.g ? F.g(a) : F.call(null, a);
                          }()], null)], null), sf(E(a)));
                        }
                        return null;
                      }
                    };
                  }(a, b, c, d, e, f, g, h, l, p, r, t, u, M, y, A, C, F, I, J), null, null);
                };
              }(L, ub, F, I, J, a, b, d, e, f, g, h, l, p, r, t, u, y, A, C)(qi.p(oj, c, L, ub));
            }());
          };
        }(b, d, e, f, g, u, A, y, C, C, F, J, L, I, a), H([rr, ei.h(tp, cg)], 0))], null)], null)], null)], null) : null;
      };
    }(d), Ll.g("computed-observable"), Jj, Jj);
    K.g ? K.g(a) : K.call(null, a);
    return a;
  }(), f = YD(a);
  WD(f, K.g ? K.g(e) : K.call(null, e));
  Jl(e, Oq, function(a, b) {
    return function() {
      return WD(b, K.g ? K.g(a) : K.call(null, a));
    };
  }(e, f, d));
  return e;
}
;function mH() {
}
mH.ug = function() {
  mH.wg || (mH.wg = new mH);
};
mH.ug();
bb || eb && lb("525");
bb || cb && lb("1.9.3");
function nH(a) {
  return S.j(v, "comportex-", xi("_", qi.h(function(a) {
    a = a.replace(new RegExp(La("?"), "g"), "_QMARK_");
    return a;
  }, qi.h(function(a) {
    return "number" === typeof a ? "" + v.g(a) : Bh(a);
  }, a))));
}
function oH(a, b, c) {
  return new V(null, 3, 5, W, [cs, new V(null, 2, 5, W, [mt, new n(null, 3, [ds, nH(b), Op, "checkbox", ps, q(Ri.h(a, b)) ? "checked" : null], null)], null), c], null);
}
function pH(a) {
  var b = new V(null, 2, 5, W, [Ho, Ur], null), c = new V(null, 3, 5, W, [fr, Xq, Gv], null);
  return new V(null, 3, 5, W, [cs, "Synapses from ", new V(null, 3, 5, W, [Ov, new n(null, 1, [ds, nH(b)], null), function() {
    return function e(c) {
      return new Dh(null, function() {
        for (;;) {
          var g = B(c);
          if (g) {
            if (U(g)) {
              var h = x(g), l = N(h), p = Hh(l);
              a: {
                for (var r = 0;;) {
                  if (r < l) {
                    var t = w.h(h, r), t = new V(null, 3, 5, W, [lr, new n(null, 2, [jp, Bh(t), Am, vf.h(Ri.h(a, b), t) ? "selected" : null], null), Bh(t)], null);
                    p.add(t);
                    r += 1;
                  } else {
                    h = !0;
                    break a;
                  }
                }
                h = void 0;
              }
              return h ? Kh(Mh(p), e(z(g))) : Kh(Mh(p), null);
            }
            p = D(g);
            return Zf(new V(null, 3, 5, W, [lr, new n(null, 2, [jp, Bh(p), Am, vf.h(Ri.h(a, b), p) ? "selected" : null], null), Bh(p)], null), e(E(g)));
          }
          return null;
        }
      }, null, null);
    }(c);
  }()], null)], null);
}
function QL(a, b) {
  var c = O.j(b, 0, null), d = O.j(b, 1, null);
  return new V(null, 3, 5, W, [cs, new V(null, 2, 5, W, [vs, Bh(c)], null), new V(null, 2, 5, W, [mt, new n(null, 2, [ds, nH(new V(null, 2, 5, W, [a, c], null)), jp, "" + v.g(d)], null)], null)], null);
}
function RL() {
  var a = SL, b = TL, c = UL, d = MG, e = VL, f = function() {
    var d = new fE(null, !0, function() {
      var d = W, e = W, f = new V(null, 2, 5, W, [Gp, "Simulation"], null), g = new V(null, 3, 5, W, [cs, "Timestep:", new V(null, 2, 5, W, [um, Uw(K.g ? K.g(a) : K.call(null, a))], null)], null), h = W, A = new n(null, 1, [es, "detail"], null), y;
      if (q(K.g ? K.g(b) : K.call(null, b))) {
        y = K.g ? K.g(a) : K.call(null, a);
        if (q(np.g(mr.g(y)))) {
          var C = mr.g(y), F = (new Date).getTime() - np.g(C);
          y = (Uw(y) - tp.g(C)) / F * 1E3;
        } else {
          y = null;
        }
        y = CF("%.1f steps/sec.", y);
      } else {
        y = null;
      }
      return new V(null, 3, 5, d, [Cs, new V(null, 10, 5, e, [Vl, f, g, new V(null, 3, 5, h, [km, A, y], null), new V(null, 1, 5, W, [Us], null), new V(null, 3, 5, W, [Ao, new n(null, 1, [hr, new n(null, 1, [Ms, q(K.g ? K.g(b) : K.call(null, b)) ? "none" : null], null)], null), "Start"], null), new V(null, 3, 5, W, [xs, new n(null, 1, [hr, new n(null, 1, [Ms, q(K.g ? K.g(b) : K.call(null, b)) ? null : "none"], null)], null), "Stop"], null), new V(null, 2, 5, W, [Ap, "Step"], null), new V(null, 5, 
      5, W, [cs, "Step every:", new V(null, 2, 5, W, [Rq, "" + v.g(Tq.g(K.g ? K.g(c) : K.call(null, c))) + " ms"], null), new V(null, 2, 5, W, [Yv, new V(null, 3, 5, W, [xp, new n(null, 1, [Fv, "#"], null), "slower"], null)], null), new V(null, 2, 5, W, [Yv, new V(null, 3, 5, W, [rm, new n(null, 1, [Fv, "#"], null), "faster"], null)], null)], null), new V(null, 2, 5, W, [Io, "Reset"], null)], null), new V(null, 6, 5, W, [op, new V(null, 2, 5, W, [Gp, "Animation"], null), new V(null, 3, 5, W, [Uq, 
      new n(null, 1, [hr, new n(null, 1, [Ms, q(fp.g(K.g ? K.g(c) : K.call(null, c))) ? "none" : null], null)], null), "Start"], null), new V(null, 3, 5, W, [wr, new n(null, 1, [hr, new n(null, 1, [Ms, q(fp.g(K.g ? K.g(c) : K.call(null, c))) ? null : "none"], null)], null), "Stop"], null), new V(null, 2, 5, W, [Ro, "Draw now"], null), new V(null, 5, 5, W, [cs, "Draw every:", new V(null, 2, 5, W, [Yq, "" + v.g(Cr.g(K.g ? K.g(c) : K.call(null, c))) + " steps"], null), new V(null, 2, 5, W, [Yv, new V(null, 
      3, 5, W, [$o, new n(null, 1, [Fv, "#"], null), "slower"], null)], null), new V(null, 2, 5, W, [Yv, new V(null, 3, 5, W, [Wr, new n(null, 1, [Fv, "#"], null), "faster"], null)], null)], null)], null)], null);
    }, Ll.g("computed-observable"), Jj, Jj);
    K.g ? K.g(d) : K.call(null, d);
    return d;
  }(), g = YD("#comportex-controls");
  WD(g, K.g ? K.g(f) : K.call(null, f));
  Jl(f, Oq, function(a, b) {
    return function() {
      return WD(b, K.g ? K.g(a) : K.call(null, a));
    };
  }(f, g));
  fF("#sim-start", zr, function() {
    return mi.h ? mi.h(b, !0) : mi.call(null, b, !0);
  });
  fF("#sim-stop", zr, function() {
    return mi.h ? mi.h(b, !1) : mi.call(null, b, !1);
  });
  fF("#sim-step", zr, function() {
    return d.q ? d.q() : d.call(null);
  });
  fF("#sim-faster", zr, function() {
    return oi.p(c, Ui, new V(null, 1, 5, W, [Tq], null), function(a) {
      a -= 100;
      return 0 < a ? a : 0;
    });
  });
  fF("#sim-slower", zr, function() {
    return oi.p(c, Ui, new V(null, 1, 5, W, [Tq], null), function(a) {
      return a + 100;
    });
  });
  fF("#sim-reset", zr, function() {
    var b = YD("#comportex-loading");
    $D.h(b, new n(null, 1, [Ms, "block"], null));
    return setTimeout(function(b) {
      return function() {
        oi.h(a, Tw);
        return $D.h(b, new n(null, 1, [Ms, "none"], null));
      };
    }(b), 100);
  });
  fF("#anim-start", zr, function() {
    return oi.p(c, R, fp, !0);
  });
  fF("#anim-stop", zr, function() {
    return oi.p(c, R, fp, !1);
  });
  fF("#anim-step", zr, function() {
    return e.q ? e.q() : e.call(null);
  });
  fF("#anim-faster", zr, function() {
    return oi.p(c, Ui, new V(null, 1, 5, W, [Cr], null), function(a) {
      a -= 1;
      return 1 < a ? a : 1;
    });
  });
  fF("#anim-slower", zr, function() {
    return oi.p(c, Ui, new V(null, 1, 5, W, [Cr], null), function(a) {
      return a + 1;
    });
  });
}
function WL() {
  var a = function() {
    var a = new fE(null, !0, function() {
      var a = W, b;
      b = K.g ? K.g(dG) : K.call(null, dG);
      b = new V(null, 6, 5, W, [Jp, new V(null, 2, 5, W, [Gp, "Visualisation"], null), new V(null, 5, 5, W, [Ul, new V(null, 2, 5, W, [Gp, "Input"], null), oH(b, new V(null, 2, 5, W, [mt, Zr], null), "Active bits"), new V(null, 1, 5, W, [Us], null), oH(b, new V(null, 2, 5, W, [mt, gt], null), "Predicted bits")], null), new V(null, 13, 5, W, [Ul, new V(null, 2, 5, W, [Gp, "Columns"], null), oH(b, new V(null, 2, 5, W, [Zo, bs], null), "Overlap scores"), new V(null, 1, 5, W, [Us], null), oH(b, new V(null, 
      2, 5, W, [Zo, hm], null), "Num segments"), new V(null, 1, 5, W, [Us], null), oH(b, new V(null, 2, 5, W, [Zo, Zr], null), "Active columns"), new V(null, 1, 5, W, [Us], null), oH(b, new V(null, 2, 5, W, [Zo, Kp], null), "Predictive columns"), new V(null, 1, 5, W, [Us], null), oH(b, new V(null, 2, 5, W, [Zo, ro], null), "TP columns"), new V(null, 1, 5, W, [Us], null), oH(b, new V(null, 2, 5, W, [Zo, xm], null), "Alternative")], null), new V(null, 9, 5, W, [Ul, new V(null, 2, 5, W, [Gp, "Feed-forward synapses"], 
      null), oH(b, new V(null, 2, 5, W, [Zl, Zr], null), "Active ff-synapses"), new V(null, 1, 5, W, [Us], null), oH(b, new V(null, 2, 5, W, [Zl, Pl], null), "Inactive ff-synapses"), new V(null, 1, 5, W, [Us], null), oH(b, new V(null, 2, 5, W, [Zl, Eo], null), "Disconnected ff-synapses"), new V(null, 1, 5, W, [Us], null), oH(b, new V(null, 2, 5, W, [Zl, uv], null), "Permanences")], null), new V(null, 11, 5, W, [Ul, new V(null, 2, 5, W, [Gp, "Lateral dendrite segments"], null), pH(b), new V(null, 
      1, 5, W, [Us], null), oH(b, new V(null, 2, 5, W, [Ho, Zr], null), "Active synapses"), new V(null, 1, 5, W, [Us], null), oH(b, new V(null, 2, 5, W, [Ho, Pl], null), "Inactive synapses"), new V(null, 1, 5, W, [Us], null), oH(b, new V(null, 2, 5, W, [Ho, Eo], null), "Disconnected synapses"), new V(null, 1, 5, W, [Us], null), oH(b, new V(null, 2, 5, W, [Ho, uv], null), "Permanences")], null)], null);
      return new V(null, 2, 5, a, [Or, b], null);
    }, Ll.g("computed-observable"), Jj, Jj);
    K.g ? K.g(a) : K.call(null, a);
    return a;
  }(), b = YD("#comportex-drawing");
  WD(b, K.g ? K.g(a) : K.call(null, a));
  Jl(a, Oq, function(a, b) {
    return function() {
      return WD(b, K.g ? K.g(a) : K.call(null, a));
    };
  }(a, b));
  for (var a = B(K.g ? K.g(dG) : K.call(null, dG)), b = null, c = 0, d = 0;;) {
    if (d < c) {
      for (var e = b.F(null, d), f = O.j(e, 0, null), g = O.j(e, 1, null), h = B(g), l = null, p = 0, r = 0;;) {
        if (r < p) {
          var t = l.F(null, r), u = O.j(t, 0, null), A = O.j(t, 1, null), y = nH(new V(null, 2, 5, W, [f, u], null)), C = YD("#" + v.g(y));
          q(C) && fF(C, st, function(a, b, c, d, e, f, g, h, l, p, r, t, u, y, A) {
            return function() {
              var a;
              a = aE.g(p);
              a = q(a) ? Ch.g(a) : null;
              return oi.p(dG, Ti, new V(null, 2, 5, W, [A, t], null), a);
            };
          }(h, l, p, r, a, b, c, d, y, C, t, u, A, e, f, g));
          r += 1;
        } else {
          if (u = B(h)) {
            t = u;
            if (U(t)) {
              h = x(t), r = z(t), l = h, p = N(h), h = r;
            } else {
              var A = D(t), y = O.j(A, 0, null), C = O.j(A, 1, null), F = nH(new V(null, 2, 5, W, [f, y], null)), J = YD("#" + v.g(F));
              q(J) && fF(J, st, function(a, b, c, d, e, f, g, h, l, p, r, t, u, y, A, C, F) {
                return function() {
                  var a;
                  a = aE.g(p);
                  a = q(a) ? Ch.g(a) : null;
                  return oi.p(dG, Ti, new V(null, 2, 5, W, [F, t], null), a);
                };
              }(h, l, p, r, a, b, c, d, F, J, A, y, C, t, u, e, f, g));
              h = G(t);
              l = null;
              p = 0;
            }
            r = 0;
          } else {
            break;
          }
        }
      }
      d += 1;
    } else {
      if (h = B(a)) {
        e = h;
        if (U(e)) {
          a = x(e), d = z(e), b = a, c = N(a), a = d;
        } else {
          l = D(e);
          f = O.j(l, 0, null);
          g = O.j(l, 1, null);
          p = B(g);
          r = null;
          for (u = t = 0;;) {
            if (u < t) {
              A = r.F(null, u), y = O.j(A, 0, null), C = O.j(A, 1, null), F = nH(new V(null, 2, 5, W, [f, y], null)), J = YD("#" + v.g(F)), q(J) && fF(J, st, function(a, b, c, d, e, f, g, h, l, p, r, t, u, y, A) {
                return function() {
                  var a;
                  a = aE.g(p);
                  a = q(a) ? Ch.g(a) : null;
                  return oi.p(dG, Ti, new V(null, 2, 5, W, [A, t], null), a);
                };
              }(p, r, t, u, a, b, c, d, F, J, A, y, C, l, f, g, e, h)), u += 1;
            } else {
              if (y = B(p)) {
                A = y;
                if (U(A)) {
                  p = x(A), u = z(A), r = p, t = N(p), p = u;
                } else {
                  var C = D(A), F = O.j(C, 0, null), J = O.j(C, 1, null), L = nH(new V(null, 2, 5, W, [f, F], null)), I = YD("#" + v.g(L));
                  q(I) && fF(I, st, function(a, b, c, d, e, f, g, h, l, p, r, t, u, y, A, C, F) {
                    return function() {
                      var a;
                      a = aE.g(p);
                      a = q(a) ? Ch.g(a) : null;
                      return oi.p(dG, Ti, new V(null, 2, 5, W, [F, t], null), a);
                    };
                  }(p, r, t, u, a, b, c, d, L, I, C, F, J, A, y, l, f, g, e, h));
                  p = G(A);
                  r = null;
                  t = 0;
                }
                u = 0;
              } else {
                break;
              }
            }
          }
          a = G(e);
          b = null;
          c = 0;
        }
        d = 0;
      } else {
        break;
      }
    }
  }
}
function XL() {
  var a = SL, b = FG, c = function() {
    var c = new fE(null, !0, function() {
      var c = gr.g(K.g ? K.g(b) : K.call(null, b));
      return new V(null, 2, 5, W, [Ds, function() {
        var b = iw(K.g ? K.g(a) : K.call(null, a));
        return function(a, b) {
          return function F(c) {
            return new Dh(null, function(a, b) {
              return function() {
                for (;;) {
                  var d = B(c);
                  if (d) {
                    if (U(d)) {
                      var e = x(d), f = N(e), g = Hh(f);
                      a: {
                        for (var h = 0;;) {
                          if (h < f) {
                            var l = w.h(e, h), p = O.h(a, l), p = Vw(p), l = new V(null, 3, 5, W, [kr, new n(null, 1, [hr, new n(null, 1, [Ms, Yh.h(l, b) ? "none" : null], null)], null), new V(null, 4, 5, W, [ct, new n(null, 1, [ds, "region-spec-form-" + v.g(l)], null), new V(null, 4, 5, W, [zv, "Region " + v.g(l), new V(null, 1, 5, W, [Us], null), new V(null, 2, 5, W, [Qq, "(click on a region to select it)"], null)], null), new V(null, 4, 5, W, [bm, new V(null, 2, 5, W, [Gp, "Parameters"], null), 
                            qi.h(fi.h(QL, l), Qg.g(p)), new V(null, 3, 5, W, [Dp, new V(null, 2, 5, W, [mt, new n(null, 2, [Op, "submit", jp, "Set!"], null)], null), " (will be set immediately, but then use Reset above for any parameters that apply only in initialisation)"], null)], null)], null)], null);
                            g.add(l);
                            h += 1;
                          } else {
                            e = !0;
                            break a;
                          }
                        }
                        e = void 0;
                      }
                      return e ? Kh(Mh(g), F(z(d))) : Kh(Mh(g), null);
                    }
                    g = D(d);
                    e = O.h(a, g);
                    e = Vw(e);
                    return Zf(new V(null, 3, 5, W, [kr, new n(null, 1, [hr, new n(null, 1, [Ms, Yh.h(g, b) ? "none" : null], null)], null), new V(null, 4, 5, W, [ct, new n(null, 1, [ds, "region-spec-form-" + v.g(g)], null), new V(null, 4, 5, W, [zv, "Region " + v.g(g), new V(null, 1, 5, W, [Us], null), new V(null, 2, 5, W, [Qq, "(click on a region to select it)"], null)], null), new V(null, 4, 5, W, [bm, new V(null, 2, 5, W, [Gp, "Parameters"], null), qi.h(fi.h(QL, g), Qg.g(e)), new V(null, 3, 5, 
                    W, [Dp, new V(null, 2, 5, W, [mt, new n(null, 2, [Op, "submit", jp, "Set!"], null)], null), " (will be set immediately, but then use Reset above for any parameters that apply only in initialisation)"], null)], null)], null)], null), F(E(d)));
                  }
                  return null;
                }
              };
            }(a, b), null, null);
          };
        }(b, c)(ql.g(N(b)));
      }()], null);
    }, Ll.g("computed-observable"), Jj, Jj);
    K.g ? K.g(c) : K.call(null, c);
    return c;
  }(), d = YD("#comportex-parameters");
  WD(d, K.g ? K.g(c) : K.call(null, c));
  Jl(c, Oq, function(a, b) {
    return function() {
      return WD(b, K.g ? K.g(a) : K.call(null, a));
    };
  }(c, d));
  for (var c = B(ql.g(N(iw(K.g ? K.g(a) : K.call(null, a))))), d = null, e = 0, f = 0;;) {
    if (f < e) {
      var g = d.F(null, f), h = YD("#region-spec-form-" + v.g(g));
      fF(h, Ep, function(b, c, d, e, f, g) {
        return function(h) {
          var l = O.h(iw(K.g ? K.g(a) : K.call(null, a)), g), p = Vw(l), I = od.j(function(a, b, c, d, e, f, g, h) {
            return function(a, b) {
              var c = nH(new V(null, 2, 5, W, [h, b], null)), c = YD("#" + v.g(c)), c = XE(aE.g(c));
              return R.j(a, b, c);
            };
          }(b, c, d, e, l, p, f, g), Jj, Sk(p));
          oi.p(a, kw, pt.g(l), function(a, b, c, d, e, f, g) {
            return function(a) {
              return Ti(Ti(a, new V(null, 2, 5, W, [Bv, sr], null), g), new V(null, 2, 5, W, [sv, sr], null), g);
            };
          }(b, c, d, e, l, p, I, f, g));
          h.preventDefault();
          return!1;
        };
      }(c, d, e, f, h, g));
      f += 1;
    } else {
      var l = B(c);
      if (l) {
        h = l;
        if (U(h)) {
          c = x(h), f = z(h), d = c, e = N(c), c = f;
        } else {
          var g = D(h), p = YD("#region-spec-form-" + v.g(g));
          fF(p, Ep, function(b, c, d, e, f, g, h, l) {
            return function(p) {
              var I = O.h(iw(K.g ? K.g(a) : K.call(null, a)), g), P = Vw(I), T = od.j(function(a, b, c, d, e, f, g, h) {
                return function(a, b) {
                  var c = nH(new V(null, 2, 5, W, [h, b], null)), c = YD("#" + v.g(c)), c = XE(aE.g(c));
                  return R.j(a, b, c);
                };
              }(b, c, d, e, I, P, f, g, h, l), Jj, Sk(P));
              oi.p(a, kw, pt.g(I), function(a, b, c, d, e, f, g) {
                return function(a) {
                  return Ti(Ti(a, new V(null, 2, 5, W, [Bv, sr], null), g), new V(null, 2, 5, W, [sv, sr], null), g);
                };
              }(b, c, d, e, I, P, T, f, g, h, l));
              p.preventDefault();
              return!1;
            };
          }(c, d, e, f, p, g, h, l));
          c = G(h);
          d = null;
          e = 0;
        }
        f = 0;
      } else {
        break;
      }
    }
  }
}
;Pc = !1;
Oc = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = H(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    return console.log.apply(console, td.g ? td.g(a) : td.call(null, a));
  }
  a.B = 0;
  a.o = function(a) {
    a = B(a);
    return b(a);
  };
  a.k = b;
  return a;
}();
function LG() {
  var a = YL, b = SC.q();
  WC.h(a, b);
  return b;
}
var SL = li.g ? li.g(null) : li.call(null, null), FG, ZL = new n(null, 3, [gr, 0, gp, 0, $r, null], null);
FG = li.g ? li.g(ZL) : li.call(null, ZL);
var $L = SC.q(), YL = function aM(b) {
  var c = li.g ? li.g(Jj) : li.call(null, Jj), d = function() {
    "undefined" === typeof My && (My = function(b, c, d, e) {
      this.je = b;
      this.ch = c;
      this.Ng = d;
      this.Cg = e;
      this.G = 0;
      this.t = 393216;
    }, My.hb = !0, My.gb = "cljs.core.async/t31723", My.mb = function() {
      return function(b, c) {
        return Ce(c, "cljs.core.async/t31723");
      };
    }(c), My.prototype.bf = function() {
      return function(b, c, d) {
        oi.p(this.je, R, c, d);
        return null;
      };
    }(c), My.prototype.cf = function() {
      return function(b, c) {
        oi.j(this.je, tg, c);
        return null;
      };
    }(c), My.prototype.I = function() {
      return function() {
        return this.Cg;
      };
    }(c), My.prototype.J = function() {
      return function(b, c) {
        return new My(this.je, this.ch, this.Ng, c);
      };
    }(c));
    return new My(c, b, aM, null);
  }(), e = SC.g(1), f = li.g ? li.g(null) : li.call(null, null), g = function(b, c, d, e) {
    return function() {
      return 0 === oi.h(e, Yg) ? UC.h(d, !0) : null;
    };
  }(c, d, e, f), h = SC.g(1);
  pC(function(c, d, e, f, g, h) {
    return function() {
      var y = function() {
        return function(b) {
          return function() {
            function c(d) {
              for (;;) {
                var e;
                a: {
                  try {
                    for (;;) {
                      var f = b(d);
                      if (!Z(f, $)) {
                        e = f;
                        break a;
                      }
                    }
                  } catch (g) {
                    if (g instanceof Object) {
                      d[5] = g;
                      HC(d);
                      e = $;
                      break a;
                    }
                    throw g;
                  }
                  e = void 0;
                }
                if (!Z(e, $)) {
                  return e;
                }
              }
            }
            function d() {
              var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
              b[0] = e;
              b[1] = 1;
              return b;
            }
            var e = null, e = function(b) {
              switch(arguments.length) {
                case 0:
                  return d.call(this);
                case 1:
                  return c.call(this, b);
              }
              throw Error("Invalid arity: " + arguments.length);
            };
            e.q = d;
            e.g = c;
            return e;
          }();
        }(function(c, d, e, f, g, h) {
          return function(c) {
            var l = c[1];
            if (7 === l) {
              var p = c, r = p;
              r[2] = c[2];
              r[1] = 3;
              return $;
            }
            if (20 === l) {
              var t = c[7], u = D(t), y = O.j(u, 0, null), A = O.j(u, 1, null);
              c[8] = y;
              p = c;
              p[1] = q(A) ? 22 : 23;
              return $;
            }
            if (27 === l) {
              var C = c[9], F = c[10], Ha = c[11], tb = c[12], Fa = w.h(Ha, C), Ca = UC.j(Fa, tb, h);
              c[10] = Fa;
              p = c;
              p[1] = q(Ca) ? 30 : 31;
              return $;
            }
            if (1 === l) {
              var Ya = p = c;
              Ya[2] = null;
              Ya[1] = 2;
              return $;
            }
            if (24 === l) {
              var t = c[7], Bb = c[2], Ta = G(t), ub = null, Cb = 0, ra = 0;
              c[13] = ub;
              c[14] = Cb;
              c[15] = Bb;
              c[16] = ra;
              c[17] = Ta;
              var jd = p = c;
              jd[2] = null;
              jd[1] = 8;
              return $;
            }
            if (39 === l) {
              var jc = p = c;
              jc[2] = null;
              jc[1] = 41;
              return $;
            }
            if (4 === l) {
              var tb = c[12], tc = c[2], $c = null == tc;
              c[12] = tc;
              p = c;
              p[1] = q($c) ? 5 : 6;
              return $;
            }
            if (15 === l) {
              var ub = c[13], Cb = c[14], ra = c[16], Ta = c[17], Dd = c[2], ya = Ta, Le = Cb, qf = ra + 1;
              c[13] = ub;
              c[18] = Dd;
              c[14] = Le;
              c[16] = qf;
              c[17] = ya;
              var Me = p = c;
              Me[2] = null;
              Me[1] = 8;
              return $;
            }
            if (21 === l) {
              var le = c[2], rf = p = c;
              rf[2] = le;
              rf[1] = 18;
              return $;
            }
            if (31 === l) {
              var F = c[10], zc = h(null), Ac = e.cf(null, F);
              c[19] = zc;
              var pd = p = c;
              pd[2] = Ac;
              pd[1] = 32;
              return $;
            }
            if (32 === l) {
              var C = c[9], Bc = c[20], Ha = c[11], Cc = c[21], qd = c[2], me = Cc, Ne = Ha, sf = Bc;
              c[9] = C + 1;
              c[22] = qd;
              c[20] = sf;
              c[11] = Ne;
              c[21] = me;
              var yi = p = c;
              yi[2] = null;
              yi[1] = 25;
              return $;
            }
            if (40 === l) {
              var tf = c[23], rd = h(null), Eb = e.cf(null, tf);
              c[24] = rd;
              var qc = p = c;
              qc[2] = Eb;
              qc[1] = 41;
              return $;
            }
            if (33 === l) {
              var Qb = c[25], sd = U(Qb), p = c;
              p[1] = sd ? 36 : 37;
              return $;
            }
            if (13 === l) {
              var ad = c[26], Sc = Ry(ad), Af = p = c;
              Af[2] = Sc;
              Af[1] = 15;
              return $;
            }
            if (22 === l) {
              var y = c[8], Te = Ry(y), Ud = p = c;
              Ud[2] = Te;
              Ud[1] = 24;
              return $;
            }
            if (36 === l) {
              var Qb = c[25], gb = x(Qb), bd = z(Qb), pe = N(gb), Cc = bd, Ha = gb, Bc = pe, C = 0;
              c[9] = C;
              c[20] = Bc;
              c[11] = Ha;
              c[21] = Cc;
              var Ue = p = c;
              Ue[2] = null;
              Ue[1] = 25;
              return $;
            }
            if (41 === l) {
              var Qb = c[25], Vd = c[2], Cc = G(Qb), Ha = null, C = Bc = 0;
              c[27] = Vd;
              c[9] = C;
              c[20] = Bc;
              c[11] = Ha;
              c[21] = Cc;
              var Id = p = c;
              Id[2] = null;
              Id[1] = 25;
              return $;
            }
            if (43 === l) {
              var ia = p = c;
              ia[2] = null;
              ia[1] = 44;
              return $;
            }
            if (29 === l) {
              var Bf = c[2], eg = p = c;
              eg[2] = Bf;
              eg[1] = 26;
              return $;
            }
            if (44 === l) {
              c[28] = c[2];
              var Cf = p = c;
              Cf[2] = null;
              Cf[1] = 2;
              return $;
            }
            if (6 === l) {
              var Dc = c[29], cd = K.g ? K.g(d) : K.call(null, d), Sb = Sk(cd), hc = N(Sb), Wd = mi.h ? mi.h(g, hc) : mi.call(null, g, hc), Cc = B(Sb), Ha = null, C = Bc = 0;
              c[9] = C;
              c[29] = Sb;
              c[20] = Bc;
              c[11] = Ha;
              c[21] = Cc;
              c[30] = Wd;
              var Ve = p = c;
              Ve[2] = null;
              Ve[1] = 25;
              return $;
            }
            if (28 === l) {
              var Qb = c[25], Cc = c[21], fg = B(Cc);
              c[25] = fg;
              p = c;
              p[1] = fg ? 33 : 34;
              return $;
            }
            if (25 === l) {
              var C = c[9], Bc = c[20], Jd = C < Bc, p = c;
              p[1] = q(Jd) ? 27 : 28;
              return $;
            }
            if (34 === l) {
              var hb = p = c;
              hb[2] = null;
              hb[1] = 35;
              return $;
            }
            if (17 === l) {
              var ih = p = c;
              ih[2] = null;
              ih[1] = 18;
              return $;
            }
            if (3 === l) {
              var Tc = c[2], p = c;
              return GC(p, Tc);
            }
            if (12 === l) {
              var dd = c[2], Xd = p = c;
              Xd[2] = dd;
              Xd[1] = 9;
              return $;
            }
            if (2 === l) {
              return p = c, FC(p, 4, b);
            }
            if (23 === l) {
              var ed = p = c;
              ed[2] = null;
              ed[1] = 24;
              return $;
            }
            if (35 === l) {
              var Uc = c[2], fd = p = c;
              fd[2] = Uc;
              fd[1] = 29;
              return $;
            }
            if (19 === l) {
              var t = c[7], jh = x(t), Yd = z(t), We = N(jh), Ta = Yd, ub = jh, Cb = We, ra = 0;
              c[13] = ub;
              c[14] = Cb;
              c[16] = ra;
              c[17] = Ta;
              var gg = p = c;
              gg[2] = null;
              gg[1] = 8;
              return $;
            }
            if (11 === l) {
              var t = c[7], Ta = c[17], qe = B(Ta);
              c[7] = qe;
              p = c;
              p[1] = qe ? 16 : 17;
              return $;
            }
            if (9 === l) {
              var ud = c[2], Kd = p = c;
              Kd[2] = ud;
              Kd[1] = 7;
              return $;
            }
            if (5 === l) {
              var rc = K.g ? K.g(d) : K.call(null, d), Ta = B(rc), ub = null, ra = Cb = 0;
              c[13] = ub;
              c[14] = Cb;
              c[16] = ra;
              c[17] = Ta;
              var Zd = p = c;
              Zd[2] = null;
              Zd[1] = 8;
              return $;
            }
            if (14 === l) {
              var hg = p = c;
              hg[2] = null;
              hg[1] = 15;
              return $;
            }
            if (45 === l) {
              var Xe = c[2], Ye = p = c;
              Ye[2] = Xe;
              Ye[1] = 44;
              return $;
            }
            if (26 === l) {
              var Dc = c[29], ig = c[2], Ze = B(Dc);
              c[31] = ig;
              p = c;
              p[1] = Ze ? 42 : 43;
              return $;
            }
            if (16 === l) {
              var t = c[7], Df = U(t), p = c;
              p[1] = Df ? 19 : 20;
              return $;
            }
            if (38 === l) {
              var gd = c[2], $d = p = c;
              $d[2] = gd;
              $d[1] = 35;
              return $;
            }
            if (30 === l) {
              var Ld = p = c;
              Ld[2] = null;
              Ld[1] = 32;
              return $;
            }
            if (10 === l) {
              var ub = c[13], ra = c[16], hd = w.h(ub, ra), ad = O.j(hd, 0, null), Ef = O.j(hd, 1, null);
              c[26] = ad;
              p = c;
              p[1] = q(Ef) ? 13 : 14;
              return $;
            }
            if (18 === l) {
              var re = c[2], $e = p = c;
              $e[2] = re;
              $e[1] = 12;
              return $;
            }
            if (42 === l) {
              return p = c, FC(p, 45, f);
            }
            if (37 === l) {
              var Qb = c[25], tb = c[12], tf = c[23], kh = D(Qb), lh = UC.j(kh, tb, h);
              c[23] = kh;
              p = c;
              p[1] = q(lh) ? 39 : 40;
              return $;
            }
            if (8 === l) {
              var Cb = c[14], ra = c[16], jg = ra < Cb, p = c;
              p[1] = q(jg) ? 10 : 11;
              return $;
            }
            return null;
          };
        }(c, d, e, f, g, h), c, d, e, f, g, h);
      }(), C = function() {
        var b = y.q ? y.q() : y.call(null);
        b[6] = c;
        return b;
      }();
      return EC(C);
    };
  }(h, c, d, e, f, g));
  return d;
}($L), TL = li.g ? li.g(!1) : li.call(null, !1), UL, bM = new n(null, 3, [Tq, 200, fp, !0, Cr, 1], null);
UL = li.g ? li.g(bM) : li.call(null, bM);
function MG() {
  return UC.h($L, oi.h(SL, lw));
}
function cM() {
  oi.p(SL, R, mr, new n(null, 2, [np, (new Date).getTime(), tp, Uw(K.g ? K.g(SL) : K.call(null, SL))], null));
  var a = SC.g(1);
  pC(function(a) {
    return function() {
      var c = function() {
        return function(a) {
          return function() {
            function b(c) {
              for (;;) {
                var d;
                a: {
                  try {
                    for (;;) {
                      var f = a(c);
                      if (!Z(f, $)) {
                        d = f;
                        break a;
                      }
                    }
                  } catch (g) {
                    if (g instanceof Object) {
                      c[5] = g;
                      HC(c);
                      d = $;
                      break a;
                    }
                    throw g;
                  }
                  d = void 0;
                }
                if (!Z(d, $)) {
                  return d;
                }
              }
            }
            function c() {
              var a = [null, null, null, null, null, null, null, null, null];
              a[0] = d;
              a[1] = 1;
              return a;
            }
            var d = null, d = function(a) {
              switch(arguments.length) {
                case 0:
                  return c.call(this);
                case 1:
                  return b.call(this, a);
              }
              throw Error("Invalid arity: " + arguments.length);
            };
            d.q = c;
            d.g = b;
            return d;
          }();
        }(function() {
          return function(a) {
            var b = a[1];
            if (7 === b) {
              return a[7] = a[2], a[2] = null, a[1] = 2, $;
            }
            if (6 === b) {
              return b = a[2], a[2] = b, a[1] = 3, $;
            }
            if (5 === b) {
              return a[2] = null, a[1] = 6, $;
            }
            if (4 === b) {
              var b = K.g ? K.g(UL) : K.call(null, UL), b = Tq.g(b), b = PC(b), c = MG();
              a[8] = c;
              return FC(a, 7, b);
            }
            return 3 === b ? (b = a[2], GC(a, b)) : 2 === b ? (b = K.g ? K.g(TL) : K.call(null, TL), a[1] = q(b) ? 4 : 5, $) : 1 === b ? (a[2] = null, a[1] = 2, $) : null;
          };
        }(a), a);
      }(), d = function() {
        var d = c.q ? c.q() : c.call(null);
        d[6] = a;
        return d;
      }();
      return EC(d);
    };
  }(a));
  return a;
}
Ge(TL, pm, function(a, b, c, d) {
  return q(d) ? cM() : null;
});
function dM(a) {
  var b = YD("#comportex-plots"), c = iw(a);
  a = function() {
    var a = new fE(null, !0, function(a) {
      return function() {
        return new V(null, 2, 5, W, [kr, function() {
          return function(a) {
            return function F(b) {
              return new Dh(null, function() {
                return function() {
                  for (;;) {
                    var a = B(b);
                    if (a) {
                      if (U(a)) {
                        var c = x(a), d = N(c), e = Hh(d);
                        a: {
                          for (var f = 0;;) {
                            if (f < d) {
                              var g = w.h(c, f), h = "comportex-plot-" + v.g(g), g = new V(null, 3, 5, W, [Ul, new V(null, 2, 5, W, [Gp, "Region " + v.g(g)], null), new V(null, 2, 5, W, [kr, new n(null, 1, [ds, h], null)], null)], null);
                              e.add(g);
                              f += 1;
                            } else {
                              c = !0;
                              break a;
                            }
                          }
                          c = void 0;
                        }
                        return c ? Kh(Mh(e), F(z(a))) : Kh(Mh(e), null);
                      }
                      e = D(a);
                      c = "comportex-plot-" + v.g(e);
                      return Zf(new V(null, 3, 5, W, [Ul, new V(null, 2, 5, W, [Gp, "Region " + v.g(e)], null), new V(null, 2, 5, W, [kr, new n(null, 1, [ds, c], null)], null)], null), F(E(a)));
                    }
                    return null;
                  }
                };
              }(a), null, null);
            };
          }(a)(ql.g(N(a)));
        }()], null);
      };
    }(c), Ll.g("computed-observable"), Jj, Jj);
    K.g ? K.g(a) : K.call(null, a);
    return a;
  }();
  b = YD(b);
  WD(b, K.g ? K.g(a) : K.call(null, a));
  Jl(a, Oq, function(a, b) {
    return function() {
      return WD(b, K.g ? K.g(a) : K.call(null, a));
    };
  }(a, b, c));
  b = B(ql.g(N(c)));
  a = null;
  for (var d = 0, e = 0;;) {
    if (e < d) {
      var f = a.F(null, e), g = "comportex-plot-" + v.g(f), h = YD("#" + v.g(g)), l = YC(ei.j(Jy, function(a, b, c, d, e, f, g) {
        return function(a) {
          return O.h(a, g);
        };
      }(b, a, d, e, h, g, f, c), iw), LG()), p = jH(l);
      Jl(p, ss, function(a, b, c, d, e) {
        return function(a, b, c, d) {
          return kH(e, d);
        };
      }(b, a, d, e, h, l, p, g, f, c));
      e += 1;
    } else {
      if (h = B(b)) {
        g = h;
        if (U(g)) {
          b = x(g), e = z(g), a = b, d = N(b), b = e;
        } else {
          var f = D(g), l = "comportex-plot-" + v.g(f), p = YD("#" + v.g(l)), r = YC(ei.j(Jy, function(a, b, c, d, e, f, g) {
            return function(a) {
              return O.h(a, g);
            };
          }(b, a, d, e, p, l, f, g, h, c), iw), LG()), t = jH(r);
          Jl(t, ss, function(a, b, c, d, e) {
            return function(a, b, c, d) {
              return kH(e, d);
            };
          }(b, a, d, e, p, r, t, l, f, g, h, c));
          b = G(g);
          a = null;
          d = 0;
        }
        e = 0;
      } else {
        break;
      }
    }
  }
}
function VL() {
  function a() {
    return EG();
  }
  return bE.g ? bE.g(a) : bE.call(null, a);
}
Ge(dG, Js, function() {
  return VL();
});
Ge(FG, Js, function() {
  return VL();
});
var eM = SC.g(1);
pC(function(a) {
  return function() {
    var b = function() {
      return function(a) {
        return function() {
          function b(c) {
            for (;;) {
              var e;
              a: {
                try {
                  for (;;) {
                    var f = a(c);
                    if (!Z(f, $)) {
                      e = f;
                      break a;
                    }
                  }
                } catch (g) {
                  if (g instanceof Object) {
                    c[5] = g;
                    HC(c);
                    e = $;
                    break a;
                  }
                  throw g;
                }
                e = void 0;
              }
              if (!Z(e, $)) {
                return e;
              }
            }
          }
          function c() {
            var a = [null, null, null, null, null, null, null, null, null, null, null, null, null];
            a[0] = g;
            a[1] = 1;
            return a;
          }
          var g = null, g = function(a) {
            switch(arguments.length) {
              case 0:
                return c.call(this);
              case 1:
                return b.call(this, a);
            }
            throw Error("Invalid arity: " + arguments.length);
          };
          g.q = c;
          g.g = b;
          return g;
        }();
      }(function() {
        return function(a) {
          var b = a[1];
          if (7 === b) {
            return b = a, b[2] = a[2], b[1] = 3, $;
          }
          if (1 === b) {
            return b = LG(), a[7] = b, a[2] = null, a[1] = 2, $;
          }
          if (4 === b) {
            return b = a[8], b = a[2], a[8] = b, a[1] = q(b) ? 5 : 6, $;
          }
          if (13 === b) {
            return b = a[7], a[9] = a[2], a[7] = b, a[2] = null, a[1] = 2, $;
          }
          if (6 === b) {
            return a[2] = null, a[1] = 7, $;
          }
          if (3 === b) {
            return b = a[2], GC(a, b);
          }
          if (12 === b) {
            return a[2] = null, a[1] = 13, $;
          }
          if (2 === b) {
            return b = a[7], FC(a, 4, b);
          }
          if (11 === b) {
            return b = VL(), a[2] = b, a[1] = 13, $;
          }
          if (9 === b) {
            return b = a[10], a[2] = b, a[1] = 10, $;
          }
          if (5 === b) {
            var b = a[8], b = Uw(b), c = K.g ? K.g(UL) : K.call(null, UL), c = Cr.g(c), g = K.g ? K.g(UL) : K.call(null, UL), g = fp.g(g);
            a[11] = b;
            a[10] = g;
            a[12] = c;
            a[1] = q(g) ? 8 : 9;
            return $;
          }
          return 10 === b ? (b = a[2], a[1] = q(b) ? 11 : 12, $) : 8 === b ? (b = a[11], c = a[12], a[2] = 0 === (b % c + c) % c, a[1] = 10, $) : null;
        };
      }(a), a);
    }(), c = function() {
      var c = b.q ? b.q() : b.call(null);
      c[6] = a;
      return c;
    }();
    return EC(c);
  };
}(eM));
function fM(a) {
  var b = null == (K.g ? K.g(SL) : K.call(null, SL));
  UC.h($L, mi.h ? mi.h(SL, a) : mi.call(null, SL, a));
  b && (dM(a), KG(a), RL(), WL(), XL());
}
;function gM(a, b, c) {
  var d = YD("#comportex-loading");
  $D.h(d, new n(null, 1, [Ms, "block"], null));
  return setTimeout(function(d) {
    return function() {
      var f;
      f = AF(a, b);
      var g = zF(a);
      f = R.j(f, hv, sD(g));
      fM(Iy(yy, f, c, BF));
      return $D.h(d, new n(null, 1, [Ms, "none"], null));
    };
  }(d), 100);
}
va("comportexviz.demos.simple_sentences.set_n_region_model", gM);
function hM() {
  var a = XE(aE.g(YD("#comportex-input-repeats"))), b = aE.g(YD("#comportex-input-text"));
  return gM(b, a, 1);
}
va("comportexviz.demos.simple_sentences.restart_from_ui", hM);
va("comportexviz.demos.simple_sentences.init", function() {
  new Gc(YD("#comportex-tabs"));
  var a = YD("#comportex-input-text-form");
  return fF(a, Ep, function() {
    return function(a) {
      hM();
      a.preventDefault();
      return!1;
    };
  }(a));
});
var iM = new V(null, 2, 5, W, [0, 15], null), jM = new n(null, 6, [cm, new V(null, 6, 5, W, [0, 1, 2, 3, 4, 5], null), Ws, new V(null, 5, 5, W, [5, 4, 3, 2, 1], null), Ev, new V(null, 5, 5, W, [6, 7, 8, 9, 10], null), lv, new V(null, 5, 5, W, [6, 7, 8, 11, 12], null), Eq, new V(null, 8, 5, W, [0, 2, 4, 6, 8, 10, 12, 14], null), Ss, new V(null, 8, 5, W, [10, 12, 11, 13, 12, 14, 13, 15], null)], null), kM = Sk(jM);
function lM() {
  return R.k(vx(function(a) {
    return new n(null, 2, [qt, a, uo, null], null);
  }, jM), po, 0, H([qs, null], 0));
}
function mM(a) {
  var b = O.h(kM, po.g(a)), c = a.g ? a.g(b) : a.call(null, b), d = vf.h(uo.g(c), N(qt.g(c)) - 1), e = qs.g(a);
  return Ui.j(Ui.j(Ui.j(a, new V(null, 1, 5, W, [b], null), function(a, b, c, d) {
    return function(a) {
      return c ? R.j(a, uo, null) : q(d) ? a : id(uo.g(a)) ? R.j(a, uo, 0) : Ui.j(a, new V(null, 1, 5, W, [uo], null), Pf);
    };
  }(b, c, d, e)), new V(null, 1, 5, W, [po], null), function(a, b, c) {
    return function(a) {
      return c ? ox.h(0, N(jM)) : a;
    };
  }(b, c, d, e)), new V(null, 1, 5, W, [qs], null), function(a, b, c, d) {
    return function(a) {
      return c ? 4 : q(q(d) ? 0 < a - 1 : d) ? a - 1 : q(d) ? null : a;
    };
  }(b, c, d, e));
}
function nM(a) {
  return q(uo.g(a)) ? Q.h(qt.g(a), uo.g(a)) : null;
}
var oM = qF(function(a) {
  return qi.h(nM, qi.h(a, kM));
}, sF(vF(400, 25, iM))), pM = sg([Yl, lm, lo, xo, Do, Yo, bp, kp, zp, Fq, Lq, Pq, Dr, Er, Kr, as, Fs, Ts, Vs, rv, Pv, Qv], [.2, !1, 12, 5, .01, .2, 7, 9, new V(null, 1, 5, W, [1E3], null), .3, .05, 18, 2, .1, .05, .02, .01, 8, 1, 1E5, .16, 3]), qM = function() {
  function a(a, b) {
    return Iy(yy, Ay(lM(), mM, oM), a, b);
  }
  function b(a) {
    return c.h(a, pM);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.g = b;
  c.h = a;
  return c;
}();
va("comportexviz.demos.isolated_1d.set_n_region_model", function(a) {
  var b = YD("#comportex-loading");
  $D.h(b, new n(null, 1, [Ms, "block"], null));
  return setTimeout(function(b) {
    return function() {
      fM(qM.g(a));
      return $D.h(b, new n(null, 1, [Ms, "none"], null));
    };
  }(b), 100);
});
va("comportexviz.demos.isolated_1d.init", function() {
  return new Gc(document.getElementById("comportex-tabs"));
});
var rM = new V(null, 2, 5, W, [0, 15], null), sM = new n(null, 6, [cm, new V(null, 6, 5, W, [0, 1, 2, 3, 4, 5], null), Ws, new V(null, 5, 5, W, [5, 4, 3, 2, 1], null), Ev, new V(null, 5, 5, W, [6, 7, 8, 9, 10], null), lv, new V(null, 5, 5, W, [6, 7, 8, 11, 12], null), Eq, new V(null, 8, 5, W, [0, 2, 4, 6, 8, 10, 12, 14], null), Ss, new V(null, 8, 5, W, [10, 12, 11, 13, 12, 14, 13, 15], null)], null), tM = Sk(sM), uM = 2 * bh(od.h(Vg, qi.h(N, Hj(sM))));
function vM() {
  return vx(function(a) {
    return new n(null, 3, [qt, a, uo, null, $l, ox.h(0, uM)], null);
  }, sM);
}
function wM(a) {
  return vx(function(a) {
    return vf.h(uo.g(a), N(qt.g(a)) - 1) ? R.k(a, uo, null, H([$l, ox.h(0, uM)], 0)) : id(uo.g(a)) && 0 < $l.g(a) ? Ui.j(a, new V(null, 1, 5, W, [$l], null), Yg) : id(uo.g(a)) && 0 === $l.g(a) ? R.j(a, uo, 0) : Ui.j(a, new V(null, 1, 5, W, [uo], null), Pf);
  }, a);
}
function xM(a) {
  return q(uo.g(a)) ? Q.h(qt.g(a), uo.g(a)) : null;
}
var yM = qF(function(a) {
  return qi.h(xM, qi.h(a, tM));
}, sF(vF(400, 25, rM))), zM = sg([Yl, lm, lo, xo, Do, Yo, bp, kp, zp, Lq, Pq, Dr, Er, Kr, as, Fs, Ts, rv, Pv, Qv], [.2, !1, 12, 5, .01, .2, 7, 9, new V(null, 1, 5, W, [1E3], null), .05, 18, 2, .1, .05, .02, .01, 8, 1E5, .16, 3]), AM = function() {
  function a(a, b) {
    return Iy(yy, Ay(vM(), wM, yM), a, b);
  }
  function b(a) {
    return c.h(a, zM);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.g = b;
  c.h = a;
  return c;
}();
var BM = new V(null, 2, 5, W, [50, 50], null), CM = new V(null, 2, 5, W, [10, 10], null), DM = new n(null, 4, [tt, Pi.j(oj, ui.g(1), ql.g(10)), kv, Oi.h(Pi.j(oj, ui.g(1), ql.g(5)), Pi.j(oj, ql.j(1, 10, 2), ui.g(5))), sm, Pi.j(oj, ql.g(10), ql.g(10)), mp, nj(vi.h(10, function() {
  return new V(null, 2, 5, W, [nx.h(0, 10), nx.h(0, 10)], null);
}))], null), EM = Sk(DM);
function FM() {
  return R.k(vx(function(a) {
    return new n(null, 2, [qt, a, uo, null], null);
  }, DM), zo, 0, H([zs, null], 0));
}
function GM(a) {
  var b = O.h(EM, zo.g(a)), c = a.g ? a.g(b) : a.call(null, b), d = vf.h(uo.g(c), N(qt.g(c)) - 1), e = zs.g(a);
  return Ui.j(Ui.j(Ui.j(a, new V(null, 1, 5, W, [b], null), function(a, b, c, d) {
    return function(a) {
      return c ? R.j(a, uo, null) : q(d) ? a : id(uo.g(a)) ? R.j(a, uo, 0) : Ui.j(a, new V(null, 1, 5, W, [uo], null), Pf);
    };
  }(b, c, d, e)), new V(null, 1, 5, W, [zo], null), function(a, b, c) {
    return function(a) {
      return c ? ox.h(0, N(DM)) : a;
    };
  }(b, c, d, e)), new V(null, 1, 5, W, [zs], null), function(a, b, c, d) {
    return function(a) {
      return c ? 0 : q(q(d) ? 0 < a - 1 : d) ? a - 1 : q(d) ? null : a;
    };
  }(b, c, d, e));
}
function HM(a) {
  return q(uo.g(a)) ? Q.h(qt.g(a), uo.g(a)) : null;
}
var JM = qF(function(a) {
  return qi.h(HM, qi.h(a, EM));
}, sF(function IM(b, c, d) {
  var e = O.j(d, 0, null), f = O.j(d, 1, null), g = Sx(b), h = O.j(b, 0, null), l = O.j(b, 1, null);
  "undefined" === typeof mF && (mF = function(b, c, d, e, f, g, h, l, J, L, I, P) {
    this.ph = b;
    this.Rd = c;
    this.qh = d;
    this.xc = e;
    this.K = f;
    this.Rf = g;
    this.ah = h;
    this.vg = l;
    this.Qd = J;
    this.of = L;
    this.xg = I;
    this.Mg = P;
    this.G = 0;
    this.t = 393216;
  }, mF.hb = !0, mF.gb = "org.nfrac.comportex.encoders/t35925", mF.mb = function() {
    return function(b, c) {
      return Ce(c, "org.nfrac.comportex.encoders/t35925");
    };
  }(g, b, h, l, d, e, f), mF.prototype.yc = function(b, c, d, e, f, g, h) {
    return function(l, J, L) {
      var I = this, P = O.j(L, 0, null), T = O.j(L, 1, null);
      if (q(P)) {
        l = function() {
          var b = 0 < P ? P : 0, c = I.Qd;
          return b < c ? b : c;
        }();
        J = function() {
          var b = 0 < T ? T : 0, c = I.Rd;
          return b < c ? b : c;
        }();
        var M = l / I.Qd, ga = J / I.Rd, Y = ah(M * I.Rf), na = ah(ga * I.of), ha = new V(null, 2, 5, W, [Y, na], null), pa = Zw(I.K, ha);
        return $k(ri.h(I.xc, Ai.k(function(b, c, d, e, f, g, h, l) {
          return function(b) {
            return fx.p(I.K, l, b, b - 1);
          };
        }(l, J, M, ga, Y, na, ha, pa, this, L, P, T, b, c, d, e, f, g, h), H([ql.g(10)], 0))));
      }
      return Zk;
    };
  }(g, b, h, l, d, e, f), mF.prototype.md = function(b, c, d, e, f, g, h) {
    return function(l, J, L) {
      var I = this, P = this;
      l = function() {
        return function(b, c, d, e, f, g, h, l) {
          return function qa(p) {
            return new Dh(null, function(b, c, d, e, f, g, h, l) {
              return function() {
                for (var r = p;;) {
                  var t = B(r);
                  if (t) {
                    var u = t, y = D(u);
                    if (t = B(function(b, c, d, e, f, g, h, l, p, r, t, u) {
                      return function Cc(y) {
                        return new Dh(null, function(b, c) {
                          return function() {
                            for (;;) {
                              var b = B(y);
                              if (b) {
                                if (U(b)) {
                                  var d = x(b), e = N(d), f = Hh(e);
                                  a: {
                                    for (var g = 0;;) {
                                      if (g < e) {
                                        var h = w.h(d, g);
                                        f.add(new V(null, 2, 5, W, [c, h], null));
                                        g += 1;
                                      } else {
                                        d = !0;
                                        break a;
                                      }
                                    }
                                    d = void 0;
                                  }
                                  return d ? Kh(Mh(f), Cc(z(b))) : Kh(Mh(f), null);
                                }
                                f = D(b);
                                return Zf(new V(null, 2, 5, W, [c, f], null), Cc(E(b)));
                              }
                              return null;
                            }
                          };
                        }(b, c, d, e, f, g, h, l, p, r, t, u), null, null);
                      };
                    }(r, y, u, t, b, c, d, e, f, g, h, l)(ql.g(I.Rd)))) {
                      return Rh.h(t, qa(E(r)));
                    }
                    r = E(r);
                  } else {
                    return null;
                  }
                }
              };
            }(b, c, d, e, f, g, h, l), null, null);
          };
        }(P, b, c, d, e, f, g, h)(ql.g(I.Qd));
      }();
      return ri.h(L, oF(P, l, J));
    };
  }(g, b, h, l, d, e, f), mF.prototype.Sb = function() {
    return function() {
      return this.K;
    };
  }(g, b, h, l, d, e, f), mF.prototype.I = function() {
    return function() {
      return this.Mg;
    };
  }(g, b, h, l, d, e, f), mF.prototype.J = function() {
    return function(b, c) {
      return new mF(this.ph, this.Rd, this.qh, this.xc, this.K, this.Rf, this.ah, this.vg, this.Qd, this.of, this.xg, c);
    };
  }(g, b, h, l, d, e, f));
  return new mF(d, f, b, c, g, h, d, b, e, l, IM, null);
}(BM, 64, CM))), KM = sg([Yl, lm, lo, xo, Do, Yo, bp, kp, zp, Fq, Lq, Pq, Dr, Er, Kr, as, Fs, Ts, Vs, rv, Pv, Qv], [.2, !1, 10, 5, .01, .2, 4, 5, new V(null, 2, 5, W, [20, 50], null), .3, .05, 18, 2, .2, .05, .02, .01, 8, 1, 1E5, .16, 3]), LM = function() {
  function a(a, b) {
    return Iy(yy, Ay(FM(), GM, JM), a, b);
  }
  function b(a) {
    return c.h(a, KM);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.g = b;
  c.h = a;
  return c;
}();
va("comportexviz.demos.isolated_2d.set_n_region_model", function(a) {
  var b = YD("#comportex-loading");
  $D.h(b, new n(null, 1, [Ms, "block"], null));
  return setTimeout(function(b) {
    return function() {
      fM(LM.g(a));
      return $D.h(b, new n(null, 1, [Ms, "none"], null));
    };
  }(b), 100);
});
va("comportexviz.demos.isolated_2d.init", function() {
  return new Gc(document.getElementById("comportex-tabs"));
});
va("comportexviz.demos.mixed_gaps_1d.set_n_region_model", function(a) {
  var b = YD("#comportex-loading");
  $D.h(b, new n(null, 1, [Ms, "block"], null));
  return setTimeout(function(b) {
    return function() {
      fM(AM.g(a));
      return $D.h(b, new n(null, 1, [Ms, "none"], null));
    };
  }(b), 100);
});
va("comportexviz.demos.mixed_gaps_1d.init", function() {
  return new Gc(document.getElementById("comportex-tabs"));
});
var MM = new V(null, 2, 5, W, [0, 7], null), NM = new V(null, 2, 5, W, [$q, 0], null);
function OM(a) {
  var b = O.j(a, 0, null);
  a = O.j(a, 1, null);
  a: {
    switch(b instanceof X ? b.ca : null) {
      case "down":
        b = a - 1;
        break a;
      case "up":
        b = a + 1;
        break a;
      default:
        throw Error("No matching clause: " + v.g(b));;
    }
  }
  b = 7 > b ? b : 7;
  b = 0 < b ? b : 0;
  a = px(new V(null, 2, 5, W, [$q, fm], null));
  return new V(null, 2, 5, W, [a, b], null);
}
var PM = tF.k(2, xF(60, new V(null, 2, 5, W, [fm, $q], null)), H([vF(240, 30, MM)], 0)), QM = sg([Yl, lm, lo, xo, Do, Yo, bp, kp, zp, Lq, Pq, Dr, Er, Kr, as, Fs, Ts, rv, Pv, Qv], [.2, !1, 12, 5, .01, .2, 7, 9, new V(null, 1, 5, W, [500], null), .05, 18, 2, .2, .05, .04, .01, 4, 1E5, .16, 3]), RM = function() {
  function a(a, b) {
    return Iy(yy, Ay(NM, OM, PM), a, b);
  }
  function b(a) {
    return c.h(a, QM);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.g = b;
  c.h = a;
  return c;
}();
va("comportexviz.demos.directional_steps_1d.set_n_region_model", function(a) {
  var b = YD("#comportex-loading");
  $D.h(b, new n(null, 1, [Ms, "block"], null));
  return setTimeout(function(b) {
    return function() {
      fM(RM.g(a));
      return $D.h(b, new n(null, 1, [Ms, "none"], null));
    };
  }(b), 100);
});
va("comportexviz.demos.directional_steps_1d.init", function() {
  return new Gc(document.getElementById("comportex-tabs"));
});

})();

//# sourceMappingURL=comportexviz.js.map