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
var k, aa = aa || {}, ba = this;
function ca(a) {
  return void 0 !== a;
}
function da(a) {
  a = a.split(".");
  for (var b = ba, c;c = a.shift();) {
    if (null != b[c]) {
      b = b[c];
    } else {
      return null;
    }
  }
  return b;
}
function ea() {
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
function ia(a) {
  var b = m(a);
  return "array" == b || "object" == b && "number" == typeof a.length;
}
function ja(a) {
  return "string" == typeof a;
}
function ka(a) {
  return "number" == typeof a;
}
function la(a) {
  return "function" == m(a);
}
function ma(a) {
  var b = typeof a;
  return "object" == b && null != a || "function" == b;
}
var oa = "closure_uid_" + (1E9 * Math.random() >>> 0), pa = 0;
function sa(a, b, c) {
  return a.call.apply(a.bind, arguments);
}
function ta(a, b, c) {
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
function ya(a, b, c) {
  ya = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? sa : ta;
  return ya.apply(null, arguments);
}
var za = Date.now || function() {
  return+new Date;
};
function Aa(a, b) {
  var c = a.split("."), d = ba;
  c[0] in d || !d.execScript || d.execScript("var " + c[0]);
  for (var e;c.length && (e = c.shift());) {
    !c.length && ca(b) ? d[e] = b : d = d[e] ? d[e] : d[e] = {};
  }
}
function Ca(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.dj = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a;
  a.sj = function(a, c, f) {
    return b.prototype[c].apply(a, Array.prototype.slice.call(arguments, 2));
  };
}
;function Fa(a, b) {
  for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1);e.length && 1 < c.length;) {
    d += c.shift() + e.shift();
  }
  return d + c.join("%s");
}
function Ga(a) {
  return/^[\s\xa0]*$/.test(null == a ? "" : String(a));
}
function Ha(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
}
function Ia(a) {
  if (!Ka.test(a)) {
    return a;
  }
  -1 != a.indexOf("\x26") && (a = a.replace(Ma, "\x26amp;"));
  -1 != a.indexOf("\x3c") && (a = a.replace(Na, "\x26lt;"));
  -1 != a.indexOf("\x3e") && (a = a.replace(Oa, "\x26gt;"));
  -1 != a.indexOf('"') && (a = a.replace(Pa, "\x26quot;"));
  -1 != a.indexOf("'") && (a = a.replace(Qa, "\x26#39;"));
  -1 != a.indexOf("\x00") && (a = a.replace(Ra, "\x26#0;"));
  return a;
}
var Ma = /&/g, Na = /</g, Oa = />/g, Pa = /"/g, Qa = /'/g, Ra = /\x00/g, Ka = /[\x00&<>"']/;
function Sa(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}
function Ta(a) {
  return String(a).replace(/\-([a-z])/g, function(a, c) {
    return c.toUpperCase();
  });
}
;function Ua(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
}
function Va(a) {
  var b = [], c = 0, d;
  for (d in a) {
    b[c++] = a[d];
  }
  return b;
}
function Xa(a) {
  var b = [], c = 0, d;
  for (d in a) {
    b[c++] = d;
  }
  return b;
}
var Ya = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Za(a, b) {
  for (var c, d, e = 1;e < arguments.length;e++) {
    d = arguments[e];
    for (c in d) {
      a[c] = d[c];
    }
    for (var f = 0;f < Ya.length;f++) {
      c = Ya[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
}
;function ab(a, b) {
  null != a && this.append.apply(this, arguments);
}
k = ab.prototype;
k.cd = "";
k.set = function(a) {
  this.cd = "" + a;
};
k.append = function(a, b, c) {
  this.cd += a;
  if (null != b) {
    for (var d = 1;d < arguments.length;d++) {
      this.cd += arguments[d];
    }
  }
  return this;
};
k.clear = function() {
  this.cd = "";
};
k.toString = function() {
  return this.cd;
};
function bb(a) {
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, bb);
  } else {
    var b = Error().stack;
    b && (this.stack = b);
  }
  a && (this.message = String(a));
}
Ca(bb, Error);
bb.prototype.name = "CustomError";
var cb;
function db(a, b) {
  b.unshift(a);
  bb.call(this, Fa.apply(null, b));
  b.shift();
}
Ca(db, bb);
db.prototype.name = "AssertionError";
function eb(a, b) {
  throw new db("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
}
;var gb = Array.prototype, hb = gb.indexOf ? function(a, b, c) {
  return gb.indexOf.call(a, b, c);
} : function(a, b, c) {
  c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if (ja(a)) {
    return ja(b) && 1 == b.length ? a.indexOf(b, c) : -1;
  }
  for (;c < a.length;c++) {
    if (c in a && a[c] === b) {
      return c;
    }
  }
  return-1;
}, kb = gb.forEach ? function(a, b, c) {
  gb.forEach.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = ja(a) ? a.split("") : a, f = 0;f < d;f++) {
    f in e && b.call(c, e[f], f, a);
  }
}, lb = gb.filter ? function(a, b, c) {
  return gb.filter.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = [], f = 0, g = ja(a) ? a.split("") : a, h = 0;h < d;h++) {
    if (h in g) {
      var l = g[h];
      b.call(c, l, h, a) && (e[f++] = l);
    }
  }
  return e;
};
function mb(a) {
  var b;
  a: {
    b = nb;
    for (var c = a.length, d = ja(a) ? a.split("") : a, e = 0;e < c;e++) {
      if (e in d && b.call(void 0, d[e], e, a)) {
        b = e;
        break a;
      }
    }
    b = -1;
  }
  return 0 > b ? null : ja(a) ? a.charAt(b) : a[b];
}
function ob(a) {
  return gb.concat.apply(gb, arguments);
}
function pb(a) {
  var b = a.length;
  if (0 < b) {
    for (var c = Array(b), d = 0;d < b;d++) {
      c[d] = a[d];
    }
    return c;
  }
  return[];
}
function rb(a, b) {
  a.sort(b || sb);
}
function tb(a, b) {
  for (var c = 0;c < a.length;c++) {
    a[c] = {index:c, value:a[c]};
  }
  var d = b || sb;
  rb(a, function(a, b) {
    return d(a.value, b.value) || a.index - b.index;
  });
  for (c = 0;c < a.length;c++) {
    a[c] = a[c].value;
  }
}
function sb(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
}
;function ub() {
  throw Error("No *print-fn* fn set for evaluation environment");
}
var vb = !0, wb = null;
function xb() {
  return new n(null, 5, [zb, !0, Bb, !0, Cb, !1, Db, !1, Fb, null], null);
}
function q(a) {
  return null != a && !1 !== a;
}
function Gb(a) {
  return null == a;
}
function Hb(a) {
  return q(a) ? !1 : !0;
}
function Ib(a, b) {
  return a[m(null == b ? null : b)] ? !0 : a._ ? !0 : !1;
}
function Jb(a) {
  return null == a ? null : a.constructor;
}
function r(a, b) {
  var c = Jb(b), c = q(q(c) ? c.wb : c) ? c.vb : m(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function Kb(a) {
  var b = a.vb;
  return q(b) ? b : "" + u.g(a);
}
function Lb(a) {
  for (var b = a.length, c = Array(b), d = 0;;) {
    if (d < b) {
      c[d] = a[d], d += 1;
    } else {
      break;
    }
  }
  return c;
}
function Mb(a) {
  return Array.prototype.slice.call(arguments);
}
var Ob = function() {
  function a(a, b) {
    function c(a, b) {
      a.push(b);
      return a;
    }
    var g = [];
    return Nb.j ? Nb.j(c, g, b) : Nb.call(null, c, g, b);
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
}(), Pb = {};
function Qb(a) {
  if (a ? a.ma : a) {
    return a.ma(a);
  }
  var b;
  b = Qb[m(null == a ? null : a)];
  if (!b && (b = Qb._, !b)) {
    throw r("ICloneable.-clone", a);
  }
  return b.call(null, a);
}
var Rb = {};
function Xb(a) {
  if (a ? a.Z : a) {
    return a.Z(a);
  }
  var b;
  b = Xb[m(null == a ? null : a)];
  if (!b && (b = Xb._, !b)) {
    throw r("ICounted.-count", a);
  }
  return b.call(null, a);
}
function Yb(a) {
  if (a ? a.wa : a) {
    return a.wa(a);
  }
  var b;
  b = Yb[m(null == a ? null : a)];
  if (!b && (b = Yb._, !b)) {
    throw r("IEmptyableCollection.-empty", a);
  }
  return b.call(null, a);
}
var Zb = {};
function $b(a, b) {
  if (a ? a.Y : a) {
    return a.Y(a, b);
  }
  var c;
  c = $b[m(null == a ? null : a)];
  if (!c && (c = $b._, !c)) {
    throw r("ICollection.-conj", a);
  }
  return c.call(null, a, b);
}
var ac = {}, w = function() {
  function a(a, b, c) {
    if (a ? a.ub : a) {
      return a.ub(a, b, c);
    }
    var g;
    g = w[m(null == a ? null : a)];
    if (!g && (g = w._, !g)) {
      throw r("IIndexed.-nth", a);
    }
    return g.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.H : a) {
      return a.H(a, b);
    }
    var c;
    c = w[m(null == a ? null : a)];
    if (!c && (c = w._, !c)) {
      throw r("IIndexed.-nth", a);
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
}(), bc = {};
function cc(a) {
  if (a ? a.Fa : a) {
    return a.Fa(a);
  }
  var b;
  b = cc[m(null == a ? null : a)];
  if (!b && (b = cc._, !b)) {
    throw r("ISeq.-first", a);
  }
  return b.call(null, a);
}
function dc(a) {
  if (a ? a.Xa : a) {
    return a.Xa(a);
  }
  var b;
  b = dc[m(null == a ? null : a)];
  if (!b && (b = dc._, !b)) {
    throw r("ISeq.-rest", a);
  }
  return b.call(null, a);
}
var ec = {}, fc = {}, hc = function() {
  function a(a, b, c) {
    if (a ? a.P : a) {
      return a.P(a, b, c);
    }
    var g;
    g = hc[m(null == a ? null : a)];
    if (!g && (g = hc._, !g)) {
      throw r("ILookup.-lookup", a);
    }
    return g.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.N : a) {
      return a.N(a, b);
    }
    var c;
    c = hc[m(null == a ? null : a)];
    if (!c && (c = hc._, !c)) {
      throw r("ILookup.-lookup", a);
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
}(), ic = {};
function jc(a, b) {
  if (a ? a.ue : a) {
    return a.ue(a, b);
  }
  var c;
  c = jc[m(null == a ? null : a)];
  if (!c && (c = jc._, !c)) {
    throw r("IAssociative.-contains-key?", a);
  }
  return c.call(null, a, b);
}
function kc(a, b, c) {
  if (a ? a.za : a) {
    return a.za(a, b, c);
  }
  var d;
  d = kc[m(null == a ? null : a)];
  if (!d && (d = kc._, !d)) {
    throw r("IAssociative.-assoc", a);
  }
  return d.call(null, a, b, c);
}
var lc = {};
function pc(a, b) {
  if (a ? a.Ra : a) {
    return a.Ra(a, b);
  }
  var c;
  c = pc[m(null == a ? null : a)];
  if (!c && (c = pc._, !c)) {
    throw r("IMap.-dissoc", a);
  }
  return c.call(null, a, b);
}
var qc = {};
function rc(a) {
  if (a ? a.Yd : a) {
    return a.Yd(a);
  }
  var b;
  b = rc[m(null == a ? null : a)];
  if (!b && (b = rc._, !b)) {
    throw r("IMapEntry.-key", a);
  }
  return b.call(null, a);
}
function sc(a) {
  if (a ? a.Zd : a) {
    return a.Zd(a);
  }
  var b;
  b = sc[m(null == a ? null : a)];
  if (!b && (b = sc._, !b)) {
    throw r("IMapEntry.-val", a);
  }
  return b.call(null, a);
}
var tc = {};
function uc(a, b) {
  if (a ? a.kf : a) {
    return a.kf(a, b);
  }
  var c;
  c = uc[m(null == a ? null : a)];
  if (!c && (c = uc._, !c)) {
    throw r("ISet.-disjoin", a);
  }
  return c.call(null, a, b);
}
function xc(a) {
  if (a ? a.dd : a) {
    return a.dd(a);
  }
  var b;
  b = xc[m(null == a ? null : a)];
  if (!b && (b = xc._, !b)) {
    throw r("IStack.-peek", a);
  }
  return b.call(null, a);
}
function yc(a) {
  if (a ? a.ed : a) {
    return a.ed(a);
  }
  var b;
  b = yc[m(null == a ? null : a)];
  if (!b && (b = yc._, !b)) {
    throw r("IStack.-pop", a);
  }
  return b.call(null, a);
}
var zc = {};
function Ac(a, b, c) {
  if (a ? a.pd : a) {
    return a.pd(a, b, c);
  }
  var d;
  d = Ac[m(null == a ? null : a)];
  if (!d && (d = Ac._, !d)) {
    throw r("IVector.-assoc-n", a);
  }
  return d.call(null, a, b, c);
}
function Bc(a) {
  if (a ? a.Dd : a) {
    return a.Dd(a);
  }
  var b;
  b = Bc[m(null == a ? null : a)];
  if (!b && (b = Bc._, !b)) {
    throw r("IDeref.-deref", a);
  }
  return b.call(null, a);
}
var Cc = {};
function Dc(a) {
  if (a ? a.L : a) {
    return a.L(a);
  }
  var b;
  b = Dc[m(null == a ? null : a)];
  if (!b && (b = Dc._, !b)) {
    throw r("IMeta.-meta", a);
  }
  return b.call(null, a);
}
var Hc = {};
function Ic(a, b) {
  if (a ? a.M : a) {
    return a.M(a, b);
  }
  var c;
  c = Ic[m(null == a ? null : a)];
  if (!c && (c = Ic._, !c)) {
    throw r("IWithMeta.-with-meta", a);
  }
  return c.call(null, a, b);
}
var Jc = {}, Kc = function() {
  function a(a, b, c) {
    if (a ? a.La : a) {
      return a.La(a, b, c);
    }
    var g;
    g = Kc[m(null == a ? null : a)];
    if (!g && (g = Kc._, !g)) {
      throw r("IReduce.-reduce", a);
    }
    return g.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.Ka : a) {
      return a.Ka(a, b);
    }
    var c;
    c = Kc[m(null == a ? null : a)];
    if (!c && (c = Kc._, !c)) {
      throw r("IReduce.-reduce", a);
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
function Lc(a, b, c) {
  if (a ? a.Xd : a) {
    return a.Xd(a, b, c);
  }
  var d;
  d = Lc[m(null == a ? null : a)];
  if (!d && (d = Lc._, !d)) {
    throw r("IKVReduce.-kv-reduce", a);
  }
  return d.call(null, a, b, c);
}
function Mc(a, b) {
  if (a ? a.J : a) {
    return a.J(a, b);
  }
  var c;
  c = Mc[m(null == a ? null : a)];
  if (!c && (c = Mc._, !c)) {
    throw r("IEquiv.-equiv", a);
  }
  return c.call(null, a, b);
}
function Nc(a) {
  if (a ? a.S : a) {
    return a.S(a);
  }
  var b;
  b = Nc[m(null == a ? null : a)];
  if (!b && (b = Nc._, !b)) {
    throw r("IHash.-hash", a);
  }
  return b.call(null, a);
}
var Oc = {};
function Pc(a) {
  if (a ? a.W : a) {
    return a.W(a);
  }
  var b;
  b = Pc[m(null == a ? null : a)];
  if (!b && (b = Pc._, !b)) {
    throw r("ISeqable.-seq", a);
  }
  return b.call(null, a);
}
var Qc = {}, Rc = {};
function Sc(a) {
  if (a ? a.Fd : a) {
    return a.Fd(a);
  }
  var b;
  b = Sc[m(null == a ? null : a)];
  if (!b && (b = Sc._, !b)) {
    throw r("IReversible.-rseq", a);
  }
  return b.call(null, a);
}
function Wc(a, b) {
  if (a ? a.yg : a) {
    return a.yg(0, b);
  }
  var c;
  c = Wc[m(null == a ? null : a)];
  if (!c && (c = Wc._, !c)) {
    throw r("IWriter.-write", a);
  }
  return c.call(null, a, b);
}
var Xc = {};
function Yc(a, b, c) {
  if (a ? a.U : a) {
    return a.U(a, b, c);
  }
  var d;
  d = Yc[m(null == a ? null : a)];
  if (!d && (d = Yc._, !d)) {
    throw r("IPrintWithWriter.-pr-writer", a);
  }
  return d.call(null, a, b, c);
}
function Zc(a, b, c) {
  if (a ? a.mf : a) {
    return a.mf(a, b, c);
  }
  var d;
  d = Zc[m(null == a ? null : a)];
  if (!d && (d = Zc._, !d)) {
    throw r("IWatchable.-notify-watches", a);
  }
  return d.call(null, a, b, c);
}
function $c(a, b, c) {
  if (a ? a.lf : a) {
    return a.lf(a, b, c);
  }
  var d;
  d = $c[m(null == a ? null : a)];
  if (!d && (d = $c._, !d)) {
    throw r("IWatchable.-add-watch", a);
  }
  return d.call(null, a, b, c);
}
function ad(a, b) {
  if (a ? a.nf : a) {
    return a.nf(a, b);
  }
  var c;
  c = ad[m(null == a ? null : a)];
  if (!c && (c = ad._, !c)) {
    throw r("IWatchable.-remove-watch", a);
  }
  return c.call(null, a, b);
}
function bd(a) {
  if (a ? a.Ed : a) {
    return a.Ed(a);
  }
  var b;
  b = bd[m(null == a ? null : a)];
  if (!b && (b = bd._, !b)) {
    throw r("IEditableCollection.-as-transient", a);
  }
  return b.call(null, a);
}
function cd(a, b) {
  if (a ? a.nd : a) {
    return a.nd(a, b);
  }
  var c;
  c = cd[m(null == a ? null : a)];
  if (!c && (c = cd._, !c)) {
    throw r("ITransientCollection.-conj!", a);
  }
  return c.call(null, a, b);
}
function dd(a) {
  if (a ? a.od : a) {
    return a.od(a);
  }
  var b;
  b = dd[m(null == a ? null : a)];
  if (!b && (b = dd._, !b)) {
    throw r("ITransientCollection.-persistent!", a);
  }
  return b.call(null, a);
}
function ed(a, b, c) {
  if (a ? a.ae : a) {
    return a.ae(a, b, c);
  }
  var d;
  d = ed[m(null == a ? null : a)];
  if (!d && (d = ed._, !d)) {
    throw r("ITransientAssociative.-assoc!", a);
  }
  return d.call(null, a, b, c);
}
function fd(a, b, c) {
  if (a ? a.xg : a) {
    return a.xg(0, b, c);
  }
  var d;
  d = fd[m(null == a ? null : a)];
  if (!d && (d = fd._, !d)) {
    throw r("ITransientVector.-assoc-n!", a);
  }
  return d.call(null, a, b, c);
}
function gd(a) {
  if (a ? a.tg : a) {
    return a.tg();
  }
  var b;
  b = gd[m(null == a ? null : a)];
  if (!b && (b = gd._, !b)) {
    throw r("IChunk.-drop-first", a);
  }
  return b.call(null, a);
}
function x(a) {
  if (a ? a.hf : a) {
    return a.hf(a);
  }
  var b;
  b = x[m(null == a ? null : a)];
  if (!b && (b = x._, !b)) {
    throw r("IChunkedSeq.-chunked-first", a);
  }
  return b.call(null, a);
}
function z(a) {
  if (a ? a.jf : a) {
    return a.jf(a);
  }
  var b;
  b = z[m(null == a ? null : a)];
  if (!b && (b = z._, !b)) {
    throw r("IChunkedSeq.-chunked-rest", a);
  }
  return b.call(null, a);
}
function ld(a) {
  if (a ? a.gf : a) {
    return a.gf(a);
  }
  var b;
  b = ld[m(null == a ? null : a)];
  if (!b && (b = ld._, !b)) {
    throw r("IChunkedNext.-chunked-next", a);
  }
  return b.call(null, a);
}
function nd(a, b) {
  if (a ? a.Qh : a) {
    return a.Qh(a, b);
  }
  var c;
  c = nd[m(null == a ? null : a)];
  if (!c && (c = nd._, !c)) {
    throw r("IReset.-reset!", a);
  }
  return c.call(null, a, b);
}
var od = function() {
  function a(a, b, c, d, e) {
    if (a ? a.Uh : a) {
      return a.Uh(a, b, c, d, e);
    }
    var s;
    s = od[m(null == a ? null : a)];
    if (!s && (s = od._, !s)) {
      throw r("ISwap.-swap!", a);
    }
    return s.call(null, a, b, c, d, e);
  }
  function b(a, b, c, d) {
    if (a ? a.Th : a) {
      return a.Th(a, b, c, d);
    }
    var e;
    e = od[m(null == a ? null : a)];
    if (!e && (e = od._, !e)) {
      throw r("ISwap.-swap!", a);
    }
    return e.call(null, a, b, c, d);
  }
  function c(a, b, c) {
    if (a ? a.Sh : a) {
      return a.Sh(a, b, c);
    }
    var d;
    d = od[m(null == a ? null : a)];
    if (!d && (d = od._, !d)) {
      throw r("ISwap.-swap!", a);
    }
    return d.call(null, a, b, c);
  }
  function d(a, b) {
    if (a ? a.Rh : a) {
      return a.Rh(a, b);
    }
    var c;
    c = od[m(null == a ? null : a)];
    if (!c && (c = od._, !c)) {
      throw r("ISwap.-swap!", a);
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
  e.v = b;
  e.Q = a;
  return e;
}();
function pd(a) {
  this.$i = a;
  this.K = 0;
  this.B = 1073741824;
}
pd.prototype.yg = function(a, b) {
  return this.$i.append(b);
};
function qd(a) {
  var b = new ab;
  a.U(null, new pd(b), xb());
  return "" + u.g(b);
}
var rd = "undefined" !== typeof Math.imul && 0 !== (Math.imul.h ? Math.imul.h(4294967295, 5) : Math.imul.call(null, 4294967295, 5)) ? function(a, b) {
  return Math.imul.h ? Math.imul.h(a, b) : Math.imul.call(null, a, b);
} : function(a, b) {
  var c = a & 65535, d = b & 65535;
  return c * d + ((a >>> 16 & 65535) * d + c * (b >>> 16 & 65535) << 16 >>> 0) | 0;
};
function sd(a) {
  a = rd(a, 3432918353);
  return rd(a << 15 | a >>> -15, 461845907);
}
function td(a, b) {
  var c = a ^ b;
  return rd(c << 13 | c >>> -13, 5) + 3864292196;
}
function xd(a, b) {
  var c = a ^ b, c = rd(c ^ c >>> 16, 2246822507), c = rd(c ^ c >>> 13, 3266489909);
  return c ^ c >>> 16;
}
function yd(a) {
  var b;
  a: {
    b = 1;
    for (var c = 0;;) {
      if (b < a.length) {
        var d = b + 2, c = td(c, sd(a.charCodeAt(b - 1) | a.charCodeAt(b) << 16));
        b = d;
      } else {
        b = c;
        break a;
      }
    }
    b = void 0;
  }
  b = 1 === (a.length & 1) ? b ^ sd(a.charCodeAt(a.length - 1)) : b;
  return xd(b, rd(2, a.length));
}
var zd = {}, Ad = 0;
function Bd(a) {
  255 < Ad && (zd = {}, Ad = 0);
  var b = zd[a];
  if ("number" !== typeof b) {
    a: {
      if (null != a) {
        if (b = a.length, 0 < b) {
          for (var c = 0, d = 0;;) {
            if (c < b) {
              var e = c + 1, d = rd(31, d) + a.charCodeAt(c), c = e
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
    zd[a] = b;
    Ad += 1;
  }
  return a = b;
}
function Cd(a) {
  a && (a.B & 4194304 || a.ye) ? a = a.S(null) : "number" === typeof a ? a = (Math.floor.g ? Math.floor.g(a) : Math.floor.call(null, a)) % 2147483647 : !0 === a ? a = 1 : !1 === a ? a = 0 : "string" === typeof a ? (a = Bd(a), 0 !== a && (a = sd(a), a = td(0, a), a = xd(a, 4))) : a = null == a ? 0 : Nc(a);
  return a;
}
function Dd(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
function Ed(a, b) {
  if (q(Fd.h ? Fd.h(a, b) : Fd.call(null, a, b))) {
    return 0;
  }
  if (q(function() {
    var c = Hb(a.uc);
    return c ? b.uc : c;
  }())) {
    return-1;
  }
  if (q(a.uc)) {
    if (Hb(b.uc)) {
      return 1;
    }
    var c = function() {
      var c = a.uc, d = b.uc;
      return Gd.h ? Gd.h(c, d) : Gd.call(null, c, d);
    }();
    if (0 === c) {
      var c = a.name, d = b.name;
      return Gd.h ? Gd.h(c, d) : Gd.call(null, c, d);
    }
    return c;
  }
  c = a.name;
  d = b.name;
  return Gd.h ? Gd.h(c, d) : Gd.call(null, c, d);
}
function Hd(a, b, c, d, e) {
  this.uc = a;
  this.name = b;
  this.Hb = c;
  this.zd = d;
  this.tb = e;
  this.B = 2154168321;
  this.K = 4096;
}
k = Hd.prototype;
k.U = function(a, b) {
  return Wc(b, this.Hb);
};
k.S = function() {
  var a = this.zd;
  return null != a ? a : this.zd = a = Dd(yd(this.name), Bd(this.uc));
};
k.M = function(a, b) {
  return new Hd(this.uc, this.name, this.Hb, this.zd, b);
};
k.L = function() {
  return this.tb;
};
k.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return hc.j(c, this, null);
      case 3:
        return hc.j(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.h = function(a, c) {
    return hc.j(c, this, null);
  };
  a.j = function(a, c, d) {
    return hc.j(c, this, d);
  };
  return a;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Lb(b)));
};
k.g = function(a) {
  return hc.j(a, this, null);
};
k.h = function(a, b) {
  return hc.j(a, this, b);
};
k.J = function(a, b) {
  return b instanceof Hd ? this.Hb === b.Hb : !1;
};
k.toString = function() {
  return this.Hb;
};
k.equiv = function(a) {
  return this.J(null, a);
};
var Id = function() {
  function a(a, b) {
    var c = null != a ? "" + u.g(a) + "/" + u.g(b) : b;
    return new Hd(a, b, c, null, null);
  }
  function b(a) {
    return a instanceof Hd ? a : c.h(null, a);
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
function A(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.B & 8388608 || a.wg)) {
    return a.W(null);
  }
  if (a instanceof Array || "string" === typeof a) {
    return 0 === a.length ? null : new Jd(a, 0);
  }
  if (Ib(Oc, a)) {
    return Pc(a);
  }
  throw Error("" + u.g(a) + " is not ISeqable");
}
function C(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.B & 64 || a.$d)) {
    return a.Fa(null);
  }
  a = A(a);
  return null == a ? null : cc(a);
}
function E(a) {
  return null != a ? a && (a.B & 64 || a.$d) ? a.Xa(null) : (a = A(a)) ? dc(a) : Md : Md;
}
function F(a) {
  return null == a ? null : a && (a.B & 128 || a.ze) ? a.hb(null) : A(E(a));
}
var Fd = function() {
  function a(a, b) {
    return null == a ? null == b : a === b || Mc(a, b);
  }
  var b = null, c = function() {
    function a(b, d, h) {
      var l = null;
      2 < arguments.length && (l = G(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (b.h(a, d)) {
          if (F(e)) {
            a = d, d = C(e), e = F(e);
          } else {
            return b.h(d, C(e));
          }
        } else {
          return!1;
        }
      }
    }
    a.D = 2;
    a.q = function(a) {
      var b = C(a);
      a = F(a);
      var d = C(a);
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
        return c.k(b, e, G(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.D = 2;
  b.q = c.q;
  b.g = function() {
    return!0;
  };
  b.h = a;
  b.k = c.k;
  return b;
}();
function Nd(a, b) {
  var c = sd(a), c = td(0, c);
  return xd(c, b);
}
function Od(a) {
  var b = 0, c = 1;
  for (a = A(a);;) {
    if (null != a) {
      b += 1, c = rd(31, c) + Cd(C(a)) | 0, a = F(a);
    } else {
      return Nd(c, b);
    }
  }
}
function Pd(a) {
  var b = 0, c = 0;
  for (a = A(a);;) {
    if (null != a) {
      b += 1, c = c + Cd(C(a)) | 0, a = F(a);
    } else {
      return Nd(c, b);
    }
  }
}
Rb["null"] = !0;
Xb["null"] = function() {
  return 0;
};
Date.prototype.J = function(a, b) {
  return b instanceof Date && this.toString() === b.toString();
};
Mc.number = function(a, b) {
  return a === b;
};
Cc["function"] = !0;
Dc["function"] = function() {
  return null;
};
Pb["function"] = !0;
Nc._ = function(a) {
  return a[oa] || (a[oa] = ++pa);
};
function Rd(a) {
  return a + 1;
}
function Sd(a) {
  this.I = a;
  this.K = 0;
  this.B = 32768;
}
Sd.prototype.Dd = function() {
  return this.I;
};
function Td(a) {
  return a instanceof Sd;
}
function I(a) {
  return Bc(a);
}
var Ud = function() {
  function a(a, b, c, d) {
    for (var l = Xb(a);;) {
      if (d < l) {
        var p = w.h(a, d);
        c = b.h ? b.h(c, p) : b.call(null, c, p);
        if (Td(c)) {
          return Bc(c);
        }
        d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    var d = Xb(a), l = c;
    for (c = 0;;) {
      if (c < d) {
        var p = w.h(a, c), l = b.h ? b.h(l, p) : b.call(null, l, p);
        if (Td(l)) {
          return Bc(l);
        }
        c += 1;
      } else {
        return l;
      }
    }
  }
  function c(a, b) {
    var c = Xb(a);
    if (0 === c) {
      return b.w ? b.w() : b.call(null);
    }
    for (var d = w.h(a, 0), l = 1;;) {
      if (l < c) {
        var p = w.h(a, l), d = b.h ? b.h(d, p) : b.call(null, d, p);
        if (Td(d)) {
          return Bc(d);
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
  d.v = a;
  return d;
}(), Vd = function() {
  function a(a, b, c, d) {
    for (var l = a.length;;) {
      if (d < l) {
        var p = a[d];
        c = b.h ? b.h(c, p) : b.call(null, c, p);
        if (Td(c)) {
          return Bc(c);
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
        if (Td(l)) {
          return Bc(l);
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
      return b.w ? b.w() : b.call(null);
    }
    for (var d = a[0], l = 1;;) {
      if (l < c) {
        var p = a[l], d = b.h ? b.h(d, p) : b.call(null, d, p);
        if (Td(d)) {
          return Bc(d);
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
  d.v = a;
  return d;
}();
function Wd(a) {
  return a ? a.B & 2 || a.Gh ? !0 : a.B ? !1 : Ib(Rb, a) : Ib(Rb, a);
}
function be(a) {
  return a ? a.B & 16 || a.ug ? !0 : a.B ? !1 : Ib(ac, a) : Ib(ac, a);
}
function Jd(a, b) {
  this.p = a;
  this.R = b;
  this.B = 166199550;
  this.K = 8192;
}
k = Jd.prototype;
k.toString = function() {
  return qd(this);
};
k.equiv = function(a) {
  return this.J(null, a);
};
k.H = function(a, b) {
  var c = b + this.R;
  return c < this.p.length ? this.p[c] : null;
};
k.ub = function(a, b, c) {
  a = b + this.R;
  return a < this.p.length ? this.p[a] : c;
};
k.ma = function() {
  return new Jd(this.p, this.R);
};
k.hb = function() {
  return this.R + 1 < this.p.length ? new Jd(this.p, this.R + 1) : null;
};
k.Z = function() {
  return this.p.length - this.R;
};
k.Fd = function() {
  var a = Xb(this);
  return 0 < a ? new ce(this, a - 1, null) : null;
};
k.S = function() {
  return Od(this);
};
k.J = function(a, b) {
  return de.h ? de.h(this, b) : de.call(null, this, b);
};
k.wa = function() {
  return Md;
};
k.Ka = function(a, b) {
  return Vd.v(this.p, b, this.p[this.R], this.R + 1);
};
k.La = function(a, b, c) {
  return Vd.v(this.p, b, c, this.R);
};
k.Fa = function() {
  return this.p[this.R];
};
k.Xa = function() {
  return this.R + 1 < this.p.length ? new Jd(this.p, this.R + 1) : Md;
};
k.W = function() {
  return this;
};
k.Y = function(a, b) {
  return ee.h ? ee.h(b, this) : ee.call(null, b, this);
};
var fe = function() {
  function a(a, b) {
    return b < a.length ? new Jd(a, b) : null;
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
}(), G = function() {
  function a(a, b) {
    return fe.h(a, b);
  }
  function b(a) {
    return fe.h(a, 0);
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
function ce(a, b, c) {
  this.Wd = a;
  this.R = b;
  this.G = c;
  this.B = 32374990;
  this.K = 8192;
}
k = ce.prototype;
k.toString = function() {
  return qd(this);
};
k.equiv = function(a) {
  return this.J(null, a);
};
k.L = function() {
  return this.G;
};
k.ma = function() {
  return new ce(this.Wd, this.R, this.G);
};
k.hb = function() {
  return 0 < this.R ? new ce(this.Wd, this.R - 1, null) : null;
};
k.Z = function() {
  return this.R + 1;
};
k.S = function() {
  return Od(this);
};
k.J = function(a, b) {
  return de.h ? de.h(this, b) : de.call(null, this, b);
};
k.wa = function() {
  var a = Md, b = this.G;
  return ge.h ? ge.h(a, b) : ge.call(null, a, b);
};
k.Ka = function(a, b) {
  return he.h ? he.h(b, this) : he.call(null, b, this);
};
k.La = function(a, b, c) {
  return he.j ? he.j(b, c, this) : he.call(null, b, c, this);
};
k.Fa = function() {
  return w.h(this.Wd, this.R);
};
k.Xa = function() {
  return 0 < this.R ? new ce(this.Wd, this.R - 1, null) : Md;
};
k.W = function() {
  return this;
};
k.M = function(a, b) {
  return new ce(this.Wd, this.R, b);
};
k.Y = function(a, b) {
  return ee.h ? ee.h(b, this) : ee.call(null, b, this);
};
function ie(a) {
  return C(F(a));
}
function je(a) {
  for (;;) {
    var b = F(a);
    if (null != b) {
      a = b;
    } else {
      return C(a);
    }
  }
}
Mc._ = function(a, b) {
  return a === b;
};
var te = function() {
  function a(a, b) {
    return null != a ? $b(a, b) : $b(Md, b);
  }
  var b = null, c = function() {
    function a(b, d, h) {
      var l = null;
      2 < arguments.length && (l = G(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (q(e)) {
          a = b.h(a, d), d = C(e), e = F(e);
        } else {
          return b.h(a, d);
        }
      }
    }
    a.D = 2;
    a.q = function(a) {
      var b = C(a);
      a = F(a);
      var d = C(a);
      a = E(a);
      return c(b, d, a);
    };
    a.k = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 0:
        return se;
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.k(b, e, G(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.D = 2;
  b.q = c.q;
  b.w = function() {
    return se;
  };
  b.g = function(a) {
    return a;
  };
  b.h = a;
  b.k = c.k;
  return b;
}();
function J(a) {
  if (null != a) {
    if (a && (a.B & 2 || a.Gh)) {
      a = a.Z(null);
    } else {
      if (a instanceof Array) {
        a = a.length;
      } else {
        if ("string" === typeof a) {
          a = a.length;
        } else {
          if (Ib(Rb, a)) {
            a = Xb(a);
          } else {
            a: {
              a = A(a);
              for (var b = 0;;) {
                if (Wd(a)) {
                  a = b + Xb(a);
                  break a;
                }
                a = F(a);
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
var ue = function() {
  function a(a, b, c) {
    for (;;) {
      if (null == a) {
        return c;
      }
      if (0 === b) {
        return A(a) ? C(a) : c;
      }
      if (be(a)) {
        return w.j(a, b, c);
      }
      if (A(a)) {
        a = F(a), b -= 1;
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
        if (A(a)) {
          return C(a);
        }
        throw Error("Index out of bounds");
      }
      if (be(a)) {
        return w.h(a, b);
      }
      if (A(a)) {
        var c = F(a), g = b - 1;
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
    if (a && (a.B & 16 || a.ug)) {
      return a.ub(null, b, c);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : c;
    }
    if (Ib(ac, a)) {
      return w.h(a, b);
    }
    if (a ? a.B & 64 || a.$d || (a.B ? 0 : Ib(bc, a)) : Ib(bc, a)) {
      return ue.j(a, b, c);
    }
    throw Error("nth not supported on this type " + u.g(Kb(Jb(a))));
  }
  function b(a, b) {
    if ("number" !== typeof b) {
      throw Error("index argument to nth must be a number");
    }
    if (null == a) {
      return a;
    }
    if (a && (a.B & 16 || a.ug)) {
      return a.H(null, b);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : null;
    }
    if (Ib(ac, a)) {
      return w.h(a, b);
    }
    if (a ? a.B & 64 || a.$d || (a.B ? 0 : Ib(bc, a)) : Ib(bc, a)) {
      return ue.h(a, b);
    }
    throw Error("nth not supported on this type " + u.g(Kb(Jb(a))));
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
}(), P = function() {
  function a(a, b, c) {
    return null != a ? a && (a.B & 256 || a.vg) ? a.P(null, b, c) : a instanceof Array ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : Ib(fc, a) ? hc.j(a, b, c) : c : c;
  }
  function b(a, b) {
    return null == a ? null : a && (a.B & 256 || a.vg) ? a.N(null, b) : a instanceof Array ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : Ib(fc, a) ? hc.h(a, b) : null;
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
    return null != a ? kc(a, b, c) : ve([b], [c]);
  }
  var b = null, c = function() {
    function a(b, d, h, l) {
      var p = null;
      3 < arguments.length && (p = G(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, h, p);
    }
    function c(a, d, e, l) {
      for (;;) {
        if (a = b.j(a, d, e), q(l)) {
          d = C(l), e = ie(l), l = F(F(l));
        } else {
          return a;
        }
      }
    }
    a.D = 3;
    a.q = function(a) {
      var b = C(a);
      a = F(a);
      var d = C(a);
      a = F(a);
      var l = C(a);
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
        return c.k(b, e, f, G(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.D = 3;
  b.q = c.q;
  b.j = a;
  b.k = c.k;
  return b;
}(), we = function() {
  function a(a, b) {
    return null == a ? null : pc(a, b);
  }
  var b = null, c = function() {
    function a(b, d, h) {
      var l = null;
      2 < arguments.length && (l = G(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (null == a) {
          return null;
        }
        a = b.h(a, d);
        if (q(e)) {
          d = C(e), e = F(e);
        } else {
          return a;
        }
      }
    }
    a.D = 2;
    a.q = function(a) {
      var b = C(a);
      a = F(a);
      var d = C(a);
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
        return c.k(b, e, G(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.D = 2;
  b.q = c.q;
  b.g = function(a) {
    return a;
  };
  b.h = a;
  b.k = c.k;
  return b;
}();
function xe(a) {
  var b = la(a);
  return q(b) ? b : a ? q(q(null) ? null : a.Fh) ? !0 : a.pf ? !1 : Ib(Pb, a) : Ib(Pb, a);
}
function ye(a, b) {
  this.C = a;
  this.G = b;
  this.K = 0;
  this.B = 393217;
}
k = ye.prototype;
k.call = function() {
  function a(a, b, c, d, e, f, g, h, l, p, s, t, v, y, B, D, H, M, N, L, K, R) {
    a = this.C;
    return S.xe ? S.xe(a, b, c, d, e, f, g, h, l, p, s, t, v, y, B, D, H, M, N, L, K, R) : S.call(null, a, b, c, d, e, f, g, h, l, p, s, t, v, y, B, D, H, M, N, L, K, R);
  }
  function b(a, b, c, d, e, f, g, h, l, p, s, t, v, y, B, D, H, M, N, L, K) {
    a = this;
    return a.C.Rc ? a.C.Rc(b, c, d, e, f, g, h, l, p, s, t, v, y, B, D, H, M, N, L, K) : a.C.call(null, b, c, d, e, f, g, h, l, p, s, t, v, y, B, D, H, M, N, L, K);
  }
  function c(a, b, c, d, e, f, g, h, l, p, s, t, v, y, B, D, H, M, N, L) {
    a = this;
    return a.C.Qc ? a.C.Qc(b, c, d, e, f, g, h, l, p, s, t, v, y, B, D, H, M, N, L) : a.C.call(null, b, c, d, e, f, g, h, l, p, s, t, v, y, B, D, H, M, N, L);
  }
  function d(a, b, c, d, e, f, g, h, l, p, s, t, v, y, B, D, H, M, N) {
    a = this;
    return a.C.Pc ? a.C.Pc(b, c, d, e, f, g, h, l, p, s, t, v, y, B, D, H, M, N) : a.C.call(null, b, c, d, e, f, g, h, l, p, s, t, v, y, B, D, H, M, N);
  }
  function e(a, b, c, d, e, f, g, h, l, p, s, t, v, y, B, D, H, M) {
    a = this;
    return a.C.Oc ? a.C.Oc(b, c, d, e, f, g, h, l, p, s, t, v, y, B, D, H, M) : a.C.call(null, b, c, d, e, f, g, h, l, p, s, t, v, y, B, D, H, M);
  }
  function f(a, b, c, d, e, f, g, h, l, p, s, t, v, y, B, D, H) {
    a = this;
    return a.C.Nc ? a.C.Nc(b, c, d, e, f, g, h, l, p, s, t, v, y, B, D, H) : a.C.call(null, b, c, d, e, f, g, h, l, p, s, t, v, y, B, D, H);
  }
  function g(a, b, c, d, e, f, g, h, l, p, s, t, v, y, B, D) {
    a = this;
    return a.C.Mc ? a.C.Mc(b, c, d, e, f, g, h, l, p, s, t, v, y, B, D) : a.C.call(null, b, c, d, e, f, g, h, l, p, s, t, v, y, B, D);
  }
  function h(a, b, c, d, e, f, g, h, l, p, s, t, v, y, B) {
    a = this;
    return a.C.Lc ? a.C.Lc(b, c, d, e, f, g, h, l, p, s, t, v, y, B) : a.C.call(null, b, c, d, e, f, g, h, l, p, s, t, v, y, B);
  }
  function l(a, b, c, d, e, f, g, h, l, p, s, t, v, y) {
    a = this;
    return a.C.Kc ? a.C.Kc(b, c, d, e, f, g, h, l, p, s, t, v, y) : a.C.call(null, b, c, d, e, f, g, h, l, p, s, t, v, y);
  }
  function p(a, b, c, d, e, f, g, h, l, p, s, t, v) {
    a = this;
    return a.C.Jc ? a.C.Jc(b, c, d, e, f, g, h, l, p, s, t, v) : a.C.call(null, b, c, d, e, f, g, h, l, p, s, t, v);
  }
  function s(a, b, c, d, e, f, g, h, l, p, s, t) {
    a = this;
    return a.C.Ic ? a.C.Ic(b, c, d, e, f, g, h, l, p, s, t) : a.C.call(null, b, c, d, e, f, g, h, l, p, s, t);
  }
  function t(a, b, c, d, e, f, g, h, l, p, s) {
    a = this;
    return a.C.Hc ? a.C.Hc(b, c, d, e, f, g, h, l, p, s) : a.C.call(null, b, c, d, e, f, g, h, l, p, s);
  }
  function v(a, b, c, d, e, f, g, h, l, p) {
    a = this;
    return a.C.Tc ? a.C.Tc(b, c, d, e, f, g, h, l, p) : a.C.call(null, b, c, d, e, f, g, h, l, p);
  }
  function B(a, b, c, d, e, f, g, h, l) {
    a = this;
    return a.C.Sc ? a.C.Sc(b, c, d, e, f, g, h, l) : a.C.call(null, b, c, d, e, f, g, h, l);
  }
  function y(a, b, c, d, e, f, g, h) {
    a = this;
    return a.C.Ib ? a.C.Ib(b, c, d, e, f, g, h) : a.C.call(null, b, c, d, e, f, g, h);
  }
  function D(a, b, c, d, e, f, g) {
    a = this;
    return a.C.Wa ? a.C.Wa(b, c, d, e, f, g) : a.C.call(null, b, c, d, e, f, g);
  }
  function H(a, b, c, d, e, f) {
    a = this;
    return a.C.Q ? a.C.Q(b, c, d, e, f) : a.C.call(null, b, c, d, e, f);
  }
  function K(a, b, c, d, e) {
    a = this;
    return a.C.v ? a.C.v(b, c, d, e) : a.C.call(null, b, c, d, e);
  }
  function M(a, b, c, d) {
    a = this;
    return a.C.j ? a.C.j(b, c, d) : a.C.call(null, b, c, d);
  }
  function L(a, b, c) {
    a = this;
    return a.C.h ? a.C.h(b, c) : a.C.call(null, b, c);
  }
  function R(a, b) {
    a = this;
    return a.C.g ? a.C.g(b) : a.C.call(null, b);
  }
  function $(a) {
    a = this;
    return a.C.w ? a.C.w() : a.C.call(null);
  }
  var N = null, N = function(N, Y, ga, fa, na, ua, Ba, Da, Ja, ra, Ea, fb, xa, ib, Eb, jb, yb, Ab, va, Qd, md, Vc) {
    switch(arguments.length) {
      case 1:
        return $.call(this, N);
      case 2:
        return R.call(this, N, Y);
      case 3:
        return L.call(this, N, Y, ga);
      case 4:
        return M.call(this, N, Y, ga, fa);
      case 5:
        return K.call(this, N, Y, ga, fa, na);
      case 6:
        return H.call(this, N, Y, ga, fa, na, ua);
      case 7:
        return D.call(this, N, Y, ga, fa, na, ua, Ba);
      case 8:
        return y.call(this, N, Y, ga, fa, na, ua, Ba, Da);
      case 9:
        return B.call(this, N, Y, ga, fa, na, ua, Ba, Da, Ja);
      case 10:
        return v.call(this, N, Y, ga, fa, na, ua, Ba, Da, Ja, ra);
      case 11:
        return t.call(this, N, Y, ga, fa, na, ua, Ba, Da, Ja, ra, Ea);
      case 12:
        return s.call(this, N, Y, ga, fa, na, ua, Ba, Da, Ja, ra, Ea, fb);
      case 13:
        return p.call(this, N, Y, ga, fa, na, ua, Ba, Da, Ja, ra, Ea, fb, xa);
      case 14:
        return l.call(this, N, Y, ga, fa, na, ua, Ba, Da, Ja, ra, Ea, fb, xa, ib);
      case 15:
        return h.call(this, N, Y, ga, fa, na, ua, Ba, Da, Ja, ra, Ea, fb, xa, ib, Eb);
      case 16:
        return g.call(this, N, Y, ga, fa, na, ua, Ba, Da, Ja, ra, Ea, fb, xa, ib, Eb, jb);
      case 17:
        return f.call(this, N, Y, ga, fa, na, ua, Ba, Da, Ja, ra, Ea, fb, xa, ib, Eb, jb, yb);
      case 18:
        return e.call(this, N, Y, ga, fa, na, ua, Ba, Da, Ja, ra, Ea, fb, xa, ib, Eb, jb, yb, Ab);
      case 19:
        return d.call(this, N, Y, ga, fa, na, ua, Ba, Da, Ja, ra, Ea, fb, xa, ib, Eb, jb, yb, Ab, va);
      case 20:
        return c.call(this, N, Y, ga, fa, na, ua, Ba, Da, Ja, ra, Ea, fb, xa, ib, Eb, jb, yb, Ab, va, Qd);
      case 21:
        return b.call(this, N, Y, ga, fa, na, ua, Ba, Da, Ja, ra, Ea, fb, xa, ib, Eb, jb, yb, Ab, va, Qd, md);
      case 22:
        return a.call(this, N, Y, ga, fa, na, ua, Ba, Da, Ja, ra, Ea, fb, xa, ib, Eb, jb, yb, Ab, va, Qd, md, Vc);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  N.g = $;
  N.h = R;
  N.j = L;
  N.v = M;
  N.Q = K;
  N.Wa = H;
  N.Ib = D;
  N.Sc = y;
  N.Tc = B;
  N.Hc = v;
  N.Ic = t;
  N.Jc = s;
  N.Kc = p;
  N.Lc = l;
  N.Mc = h;
  N.Nc = g;
  N.Oc = f;
  N.Pc = e;
  N.Qc = d;
  N.Rc = c;
  N.Lh = b;
  N.xe = a;
  return N;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Lb(b)));
};
k.w = function() {
  return this.C.w ? this.C.w() : this.C.call(null);
};
k.g = function(a) {
  return this.C.g ? this.C.g(a) : this.C.call(null, a);
};
k.h = function(a, b) {
  return this.C.h ? this.C.h(a, b) : this.C.call(null, a, b);
};
k.j = function(a, b, c) {
  return this.C.j ? this.C.j(a, b, c) : this.C.call(null, a, b, c);
};
k.v = function(a, b, c, d) {
  return this.C.v ? this.C.v(a, b, c, d) : this.C.call(null, a, b, c, d);
};
k.Q = function(a, b, c, d, e) {
  return this.C.Q ? this.C.Q(a, b, c, d, e) : this.C.call(null, a, b, c, d, e);
};
k.Wa = function(a, b, c, d, e, f) {
  return this.C.Wa ? this.C.Wa(a, b, c, d, e, f) : this.C.call(null, a, b, c, d, e, f);
};
k.Ib = function(a, b, c, d, e, f, g) {
  return this.C.Ib ? this.C.Ib(a, b, c, d, e, f, g) : this.C.call(null, a, b, c, d, e, f, g);
};
k.Sc = function(a, b, c, d, e, f, g, h) {
  return this.C.Sc ? this.C.Sc(a, b, c, d, e, f, g, h) : this.C.call(null, a, b, c, d, e, f, g, h);
};
k.Tc = function(a, b, c, d, e, f, g, h, l) {
  return this.C.Tc ? this.C.Tc(a, b, c, d, e, f, g, h, l) : this.C.call(null, a, b, c, d, e, f, g, h, l);
};
k.Hc = function(a, b, c, d, e, f, g, h, l, p) {
  return this.C.Hc ? this.C.Hc(a, b, c, d, e, f, g, h, l, p) : this.C.call(null, a, b, c, d, e, f, g, h, l, p);
};
k.Ic = function(a, b, c, d, e, f, g, h, l, p, s) {
  return this.C.Ic ? this.C.Ic(a, b, c, d, e, f, g, h, l, p, s) : this.C.call(null, a, b, c, d, e, f, g, h, l, p, s);
};
k.Jc = function(a, b, c, d, e, f, g, h, l, p, s, t) {
  return this.C.Jc ? this.C.Jc(a, b, c, d, e, f, g, h, l, p, s, t) : this.C.call(null, a, b, c, d, e, f, g, h, l, p, s, t);
};
k.Kc = function(a, b, c, d, e, f, g, h, l, p, s, t, v) {
  return this.C.Kc ? this.C.Kc(a, b, c, d, e, f, g, h, l, p, s, t, v) : this.C.call(null, a, b, c, d, e, f, g, h, l, p, s, t, v);
};
k.Lc = function(a, b, c, d, e, f, g, h, l, p, s, t, v, B) {
  return this.C.Lc ? this.C.Lc(a, b, c, d, e, f, g, h, l, p, s, t, v, B) : this.C.call(null, a, b, c, d, e, f, g, h, l, p, s, t, v, B);
};
k.Mc = function(a, b, c, d, e, f, g, h, l, p, s, t, v, B, y) {
  return this.C.Mc ? this.C.Mc(a, b, c, d, e, f, g, h, l, p, s, t, v, B, y) : this.C.call(null, a, b, c, d, e, f, g, h, l, p, s, t, v, B, y);
};
k.Nc = function(a, b, c, d, e, f, g, h, l, p, s, t, v, B, y, D) {
  return this.C.Nc ? this.C.Nc(a, b, c, d, e, f, g, h, l, p, s, t, v, B, y, D) : this.C.call(null, a, b, c, d, e, f, g, h, l, p, s, t, v, B, y, D);
};
k.Oc = function(a, b, c, d, e, f, g, h, l, p, s, t, v, B, y, D, H) {
  return this.C.Oc ? this.C.Oc(a, b, c, d, e, f, g, h, l, p, s, t, v, B, y, D, H) : this.C.call(null, a, b, c, d, e, f, g, h, l, p, s, t, v, B, y, D, H);
};
k.Pc = function(a, b, c, d, e, f, g, h, l, p, s, t, v, B, y, D, H, K) {
  return this.C.Pc ? this.C.Pc(a, b, c, d, e, f, g, h, l, p, s, t, v, B, y, D, H, K) : this.C.call(null, a, b, c, d, e, f, g, h, l, p, s, t, v, B, y, D, H, K);
};
k.Qc = function(a, b, c, d, e, f, g, h, l, p, s, t, v, B, y, D, H, K, M) {
  return this.C.Qc ? this.C.Qc(a, b, c, d, e, f, g, h, l, p, s, t, v, B, y, D, H, K, M) : this.C.call(null, a, b, c, d, e, f, g, h, l, p, s, t, v, B, y, D, H, K, M);
};
k.Rc = function(a, b, c, d, e, f, g, h, l, p, s, t, v, B, y, D, H, K, M, L) {
  return this.C.Rc ? this.C.Rc(a, b, c, d, e, f, g, h, l, p, s, t, v, B, y, D, H, K, M, L) : this.C.call(null, a, b, c, d, e, f, g, h, l, p, s, t, v, B, y, D, H, K, M, L);
};
k.Lh = function(a, b, c, d, e, f, g, h, l, p, s, t, v, B, y, D, H, K, M, L, R) {
  var $ = this.C;
  return S.xe ? S.xe($, a, b, c, d, e, f, g, h, l, p, s, t, v, B, y, D, H, K, M, L, R) : S.call(null, $, a, b, c, d, e, f, g, h, l, p, s, t, v, B, y, D, H, K, M, L, R);
};
k.Fh = !0;
k.M = function(a, b) {
  return new ye(this.C, b);
};
k.L = function() {
  return this.G;
};
function ge(a, b) {
  return xe(a) && !(a ? a.B & 262144 || a.Vh || (a.B ? 0 : Ib(Hc, a)) : Ib(Hc, a)) ? new ye(a, b) : null == a ? null : Ic(a, b);
}
function ze(a) {
  var b = null != a;
  return(b ? a ? a.B & 131072 || a.Nh || (a.B ? 0 : Ib(Cc, a)) : Ib(Cc, a) : b) ? Dc(a) : null;
}
function Ae(a) {
  return null == a ? null : xc(a);
}
var Be = function() {
  function a(a, b) {
    return null == a ? null : uc(a, b);
  }
  var b = null, c = function() {
    function a(b, d, h) {
      var l = null;
      2 < arguments.length && (l = G(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (null == a) {
          return null;
        }
        a = b.h(a, d);
        if (q(e)) {
          d = C(e), e = F(e);
        } else {
          return a;
        }
      }
    }
    a.D = 2;
    a.q = function(a) {
      var b = C(a);
      a = F(a);
      var d = C(a);
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
        return c.k(b, e, G(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.D = 2;
  b.q = c.q;
  b.g = function(a) {
    return a;
  };
  b.h = a;
  b.k = c.k;
  return b;
}();
function Ce(a) {
  return null == a || Hb(A(a));
}
function De(a) {
  return null == a ? !1 : a ? a.B & 8 || a.vj ? !0 : a.B ? !1 : Ib(Zb, a) : Ib(Zb, a);
}
function Ee(a) {
  return null == a ? !1 : a ? a.B & 4096 || a.Aj ? !0 : a.B ? !1 : Ib(tc, a) : Ib(tc, a);
}
function Fe(a) {
  return a ? a.B & 16777216 || a.zj ? !0 : a.B ? !1 : Ib(Qc, a) : Ib(Qc, a);
}
function Ge(a) {
  return null == a ? !1 : a ? a.B & 1024 || a.xj ? !0 : a.B ? !1 : Ib(lc, a) : Ib(lc, a);
}
function He(a) {
  return a ? a.B & 16384 || a.Bj ? !0 : a.B ? !1 : Ib(zc, a) : Ib(zc, a);
}
function T(a) {
  return a ? a.K & 512 || a.uj ? !0 : !1 : !1;
}
function Ie(a) {
  var b = [];
  Ua(a, function(a, b) {
    return function(a, c) {
      return b.push(c);
    };
  }(a, b));
  return b;
}
function Je(a, b, c, d, e) {
  for (;0 !== e;) {
    c[d] = a[b], d += 1, e -= 1, b += 1;
  }
}
function Ke(a, b, c, d, e) {
  b += e - 1;
  for (d += e - 1;0 !== e;) {
    c[d] = a[b], d -= 1, e -= 1, b -= 1;
  }
}
var Le = {};
function Xe(a) {
  return null == a ? !1 : a ? a.B & 64 || a.$d ? !0 : a.B ? !1 : Ib(bc, a) : Ib(bc, a);
}
function Ye(a) {
  return q(a) ? !0 : !1;
}
function Ze(a, b) {
  return P.j(a, b, Le) === Le ? !1 : !0;
}
function $e(a, b) {
  var c;
  if (c = null != a) {
    c = a ? a.B & 512 || a.tj ? !0 : a.B ? !1 : Ib(ic, a) : Ib(ic, a);
  }
  return c && Ze(a, b) ? new U(null, 2, 5, V, [b, P.h(a, b)], null) : null;
}
function Gd(a, b) {
  if (a === b) {
    return 0;
  }
  if (null == a) {
    return-1;
  }
  if (null == b) {
    return 1;
  }
  if (Jb(a) === Jb(b)) {
    return a && (a.K & 2048 || a.ve) ? a.we(null, b) : sb(a, b);
  }
  throw Error("compare on non-nil objects of different types");
}
var af = function() {
  function a(a, b, c, g) {
    for (;;) {
      var h = Gd(O.h(a, g), O.h(b, g));
      if (0 === h && g + 1 < c) {
        g += 1;
      } else {
        return h;
      }
    }
  }
  function b(a, b) {
    var f = J(a), g = J(b);
    return f < g ? -1 : f > g ? 1 : c.v(a, b, f, 0);
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
  c.v = a;
  return c;
}();
function bf(a) {
  return Fd.h(a, Gd) ? Gd : function(b, c) {
    var d = a.h ? a.h(b, c) : a.call(null, b, c);
    return "number" === typeof d ? d : q(d) ? -1 : q(a.h ? a.h(c, b) : a.call(null, c, b)) ? 1 : 0;
  };
}
var df = function() {
  function a(a, b) {
    if (A(b)) {
      var c = cf.g ? cf.g(b) : cf.call(null, b), g = bf(a);
      tb(c, g);
      return A(c);
    }
    return Md;
  }
  function b(a) {
    return c.h(Gd, a);
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
}(), ef = function() {
  function a(a, b, c) {
    return df.h(function(c, f) {
      return bf(b).call(null, a.g ? a.g(c) : a.call(null, c), a.g ? a.g(f) : a.call(null, f));
    }, c);
  }
  function b(a, b) {
    return c.j(a, Gd, b);
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
}(), he = function() {
  function a(a, b, c) {
    for (c = A(c);;) {
      if (c) {
        var g = C(c);
        b = a.h ? a.h(b, g) : a.call(null, b, g);
        if (Td(b)) {
          return Bc(b);
        }
        c = F(c);
      } else {
        return b;
      }
    }
  }
  function b(a, b) {
    var c = A(b);
    if (c) {
      var g = C(c), c = F(c);
      return Nb.j ? Nb.j(a, g, c) : Nb.call(null, a, g, c);
    }
    return a.w ? a.w() : a.call(null);
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
}(), Nb = function() {
  function a(a, b, c) {
    return c && (c.B & 524288 || c.Ph) ? c.La(null, a, b) : c instanceof Array ? Vd.j(c, a, b) : "string" === typeof c ? Vd.j(c, a, b) : Ib(Jc, c) ? Kc.j(c, a, b) : he.j(a, b, c);
  }
  function b(a, b) {
    return b && (b.B & 524288 || b.Ph) ? b.Ka(null, a) : b instanceof Array ? Vd.h(b, a) : "string" === typeof b ? Vd.h(b, a) : Ib(Jc, b) ? Kc.h(b, a) : he.h(a, b);
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
function ff(a, b, c) {
  return null != c ? Lc(c, a, b) : b;
}
function gf(a) {
  return a;
}
var hf = function() {
  function a(a, b, c, g) {
    a = a.g ? a.g(b) : a.call(null, b);
    c = Nb.j(a, c, g);
    return a.g ? a.g(c) : a.call(null, c);
  }
  function b(a, b, f) {
    return c.v(a, b, b.w ? b.w() : b.call(null), f);
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
  c.v = a;
  return c;
}(), jf = function() {
  var a = null, b = function() {
    function b(a, c, g) {
      var h = null;
      2 < arguments.length && (h = G(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, a, c, h);
    }
    function d(b, c, d) {
      return Nb.j(a, b + c, d);
    }
    b.D = 2;
    b.q = function(a) {
      var b = C(a);
      a = F(a);
      var c = C(a);
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
        return b.k(a, d, G(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.D = 2;
  a.q = b.q;
  a.w = function() {
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
}(), kf = function() {
  var a = null, b = function() {
    function b(a, c, g) {
      var h = null;
      2 < arguments.length && (h = G(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, a, c, h);
    }
    function d(b, c, d) {
      return Nb.j(a, b * c, d);
    }
    b.D = 2;
    b.q = function(a) {
      var b = C(a);
      a = F(a);
      var c = C(a);
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
        return b.k(a, d, G(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.D = 2;
  a.q = b.q;
  a.w = function() {
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
}(), lf = function() {
  var a = null, b = function() {
    function a(c, f, g) {
      var h = null;
      2 < arguments.length && (h = G(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, f, h);
    }
    function b(a, c, d) {
      for (;;) {
        if (a > c) {
          if (F(d)) {
            a = c, c = C(d), d = F(d);
          } else {
            return c > C(d);
          }
        } else {
          return!1;
        }
      }
    }
    a.D = 2;
    a.q = function(a) {
      var c = C(a);
      a = F(a);
      var g = C(a);
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
        return b.k(a, d, G(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.D = 2;
  a.q = b.q;
  a.g = function() {
    return!0;
  };
  a.h = function(a, b) {
    return a > b;
  };
  a.k = b.k;
  return a;
}();
function mf(a) {
  return a - 1;
}
var nf = function() {
  function a(a, b) {
    return a > b ? a : b;
  }
  var b = null, c = function() {
    function a(b, d, h) {
      var l = null;
      2 < arguments.length && (l = G(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      return Nb.j(b, a > d ? a : d, e);
    }
    a.D = 2;
    a.q = function(a) {
      var b = C(a);
      a = F(a);
      var d = C(a);
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
        return c.k(b, e, G(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.D = 2;
  b.q = c.q;
  b.g = function(a) {
    return a;
  };
  b.h = a;
  b.k = c.k;
  return b;
}(), of = function() {
  function a(a, b) {
    return a < b ? a : b;
  }
  var b = null, c = function() {
    function a(b, d, h) {
      var l = null;
      2 < arguments.length && (l = G(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      return Nb.j(b, a < d ? a : d, e);
    }
    a.D = 2;
    a.q = function(a) {
      var b = C(a);
      a = F(a);
      var d = C(a);
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
        return c.k(b, e, G(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.D = 2;
  b.q = c.q;
  b.g = function(a) {
    return a;
  };
  b.h = a;
  b.k = c.k;
  return b;
}();
function pf(a) {
  return 0 <= a ? Math.floor.g ? Math.floor.g(a) : Math.floor.call(null, a) : Math.ceil.g ? Math.ceil.g(a) : Math.ceil.call(null, a);
}
function zf(a) {
  return pf(a);
}
function Af(a, b) {
  return pf((a - a % b) / b);
}
function Bf(a, b) {
  var c = Af(a, b);
  return a - b * c;
}
var Cf = function() {
  function a(a) {
    return a * c.w();
  }
  function b() {
    return Math.random.w ? Math.random.w() : Math.random.call(null);
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
  c.w = b;
  c.g = a;
  return c;
}();
function Df(a) {
  return pf(Cf.g(a));
}
function Ef(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24;
}
function Ff(a) {
  return 0 < a;
}
function Gf(a) {
  return 0 === a;
}
function Hf(a) {
  var b = 1;
  for (a = A(a);;) {
    if (a && 0 < b) {
      b -= 1, a = F(a);
    } else {
      return a;
    }
  }
}
var u = function() {
  function a(a) {
    return null == a ? "" : "" + a;
  }
  var b = null, c = function() {
    function a(b, d) {
      var h = null;
      1 < arguments.length && (h = G(Array.prototype.slice.call(arguments, 1), 0));
      return c.call(this, b, h);
    }
    function c(a, d) {
      for (var e = new ab(b.g(a)), l = d;;) {
        if (q(l)) {
          e = e.append(b.g(C(l))), l = F(l);
        } else {
          return e.toString();
        }
      }
    }
    a.D = 1;
    a.q = function(a) {
      var b = C(a);
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
        return c.k(b, G(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.D = 1;
  b.q = c.q;
  b.w = function() {
    return "";
  };
  b.g = a;
  b.k = c.k;
  return b;
}(), If = function() {
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
function de(a, b) {
  var c;
  if (Fe(b)) {
    if (Wd(a) && Wd(b) && J(a) !== J(b)) {
      c = !1;
    } else {
      a: {
        c = A(a);
        for (var d = A(b);;) {
          if (null == c) {
            c = null == d;
            break a;
          }
          if (null != d && Fd.h(C(c), C(d))) {
            c = F(c), d = F(d);
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
  return Ye(c);
}
function Jf(a) {
  var b = 0;
  for (a = A(a);;) {
    if (a) {
      var c = C(a), b = (b + (Cd(function() {
        var a = c;
        return Kf.g ? Kf.g(a) : Kf.call(null, a);
      }()) ^ Cd(function() {
        var a = c;
        return Lf.g ? Lf.g(a) : Lf.call(null, a);
      }()))) % 4503599627370496;
      a = F(a);
    } else {
      return b;
    }
  }
}
function Mf(a, b, c, d, e) {
  this.G = a;
  this.first = b;
  this.yc = c;
  this.count = d;
  this.A = e;
  this.B = 65937646;
  this.K = 8192;
}
k = Mf.prototype;
k.toString = function() {
  return qd(this);
};
k.equiv = function(a) {
  return this.J(null, a);
};
k.L = function() {
  return this.G;
};
k.ma = function() {
  return new Mf(this.G, this.first, this.yc, this.count, this.A);
};
k.hb = function() {
  return 1 === this.count ? null : this.yc;
};
k.Z = function() {
  return this.count;
};
k.dd = function() {
  return this.first;
};
k.ed = function() {
  return dc(this);
};
k.S = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Od(this);
};
k.J = function(a, b) {
  return de(this, b);
};
k.wa = function() {
  return Md;
};
k.Ka = function(a, b) {
  return he.h(b, this);
};
k.La = function(a, b, c) {
  return he.j(b, c, this);
};
k.Fa = function() {
  return this.first;
};
k.Xa = function() {
  return 1 === this.count ? Md : this.yc;
};
k.W = function() {
  return this;
};
k.M = function(a, b) {
  return new Mf(b, this.first, this.yc, this.count, this.A);
};
k.Y = function(a, b) {
  return new Mf(this.G, b, this, this.count + 1, null);
};
function Nf(a) {
  this.G = a;
  this.B = 65937614;
  this.K = 8192;
}
k = Nf.prototype;
k.toString = function() {
  return qd(this);
};
k.equiv = function(a) {
  return this.J(null, a);
};
k.L = function() {
  return this.G;
};
k.ma = function() {
  return new Nf(this.G);
};
k.hb = function() {
  return null;
};
k.Z = function() {
  return 0;
};
k.dd = function() {
  return null;
};
k.ed = function() {
  throw Error("Can't pop empty list");
};
k.S = function() {
  return 0;
};
k.J = function(a, b) {
  return de(this, b);
};
k.wa = function() {
  return this;
};
k.Ka = function(a, b) {
  return he.h(b, this);
};
k.La = function(a, b, c) {
  return he.j(b, c, this);
};
k.Fa = function() {
  return null;
};
k.Xa = function() {
  return Md;
};
k.W = function() {
  return null;
};
k.M = function(a, b) {
  return new Nf(b);
};
k.Y = function(a, b) {
  return new Mf(this.G, b, null, 1, null);
};
var Md = new Nf(null);
function Of(a) {
  return(a ? a.B & 134217728 || a.yj || (a.B ? 0 : Ib(Rc, a)) : Ib(Rc, a)) ? Sc(a) : Nb.j(te, Md, a);
}
var Pf = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = G(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b;
    if (a instanceof Jd && 0 === a.R) {
      b = a.p;
    } else {
      a: {
        for (b = [];;) {
          if (null != a) {
            b.push(a.Fa(null)), a = a.hb(null);
          } else {
            break a;
          }
        }
        b = void 0;
      }
    }
    a = b.length;
    for (var e = Md;;) {
      if (0 < a) {
        var f = a - 1, e = e.Y(null, b[a - 1]);
        a = f;
      } else {
        return e;
      }
    }
  }
  a.D = 0;
  a.q = function(a) {
    a = A(a);
    return b(a);
  };
  a.k = b;
  return a;
}();
function Qf(a, b, c, d) {
  this.G = a;
  this.first = b;
  this.yc = c;
  this.A = d;
  this.B = 65929452;
  this.K = 8192;
}
k = Qf.prototype;
k.toString = function() {
  return qd(this);
};
k.equiv = function(a) {
  return this.J(null, a);
};
k.L = function() {
  return this.G;
};
k.ma = function() {
  return new Qf(this.G, this.first, this.yc, this.A);
};
k.hb = function() {
  return null == this.yc ? null : A(this.yc);
};
k.S = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Od(this);
};
k.J = function(a, b) {
  return de(this, b);
};
k.wa = function() {
  return ge(Md, this.G);
};
k.Ka = function(a, b) {
  return he.h(b, this);
};
k.La = function(a, b, c) {
  return he.j(b, c, this);
};
k.Fa = function() {
  return this.first;
};
k.Xa = function() {
  return null == this.yc ? Md : this.yc;
};
k.W = function() {
  return this;
};
k.M = function(a, b) {
  return new Qf(b, this.first, this.yc, this.A);
};
k.Y = function(a, b) {
  return new Qf(null, b, this, this.A);
};
function ee(a, b) {
  var c = null == b;
  return(c ? c : b && (b.B & 64 || b.$d)) ? new Qf(null, a, b, null) : new Qf(null, a, A(b), null);
}
function W(a, b, c, d) {
  this.uc = a;
  this.name = b;
  this.ja = c;
  this.zd = d;
  this.B = 2153775105;
  this.K = 4096;
}
k = W.prototype;
k.U = function(a, b) {
  return Wc(b, ":" + u.g(this.ja));
};
k.S = function() {
  var a = this.zd;
  return null != a ? a : this.zd = a = Dd(yd(this.name), Bd(this.uc)) + 2654435769 | 0;
};
k.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return P.h(c, this);
      case 3:
        return P.j(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.h = function(a, c) {
    return P.h(c, this);
  };
  a.j = function(a, c, d) {
    return P.j(c, this, d);
  };
  return a;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Lb(b)));
};
k.g = function(a) {
  return P.h(a, this);
};
k.h = function(a, b) {
  return P.j(a, this, b);
};
k.J = function(a, b) {
  return b instanceof W ? this.ja === b.ja : !1;
};
k.toString = function() {
  return ":" + u.g(this.ja);
};
k.equiv = function(a) {
  return this.J(null, a);
};
function X(a, b) {
  return a === b ? !0 : a instanceof W && b instanceof W ? a.ja === b.ja : !1;
}
var Sf = function() {
  function a(a, b) {
    return new W(a, b, "" + u.g(q(a) ? "" + u.g(a) + "/" : null) + u.g(b), null);
  }
  function b(a) {
    if (a instanceof W) {
      return a;
    }
    if (a instanceof Hd) {
      var b;
      if (a && (a.K & 4096 || a.Oh)) {
        b = a.uc;
      } else {
        throw Error("Doesn't support namespace: " + u.g(a));
      }
      return new W(b, Rf.g ? Rf.g(a) : Rf.call(null, a), a.Hb, null);
    }
    return "string" === typeof a ? (b = a.split("/"), 2 === b.length ? new W(b[0], b[1], a, null) : new W(null, b[0], a, null)) : null;
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
function Tf(a, b, c, d) {
  this.G = a;
  this.Nd = b;
  this.da = c;
  this.A = d;
  this.K = 0;
  this.B = 32374988;
}
k = Tf.prototype;
k.toString = function() {
  return qd(this);
};
k.equiv = function(a) {
  return this.J(null, a);
};
function Uf(a) {
  null != a.Nd && (a.da = a.Nd.w ? a.Nd.w() : a.Nd.call(null), a.Nd = null);
  return a.da;
}
k.L = function() {
  return this.G;
};
k.hb = function() {
  Pc(this);
  return null == this.da ? null : F(this.da);
};
k.S = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Od(this);
};
k.J = function(a, b) {
  return de(this, b);
};
k.wa = function() {
  return ge(Md, this.G);
};
k.Ka = function(a, b) {
  return he.h(b, this);
};
k.La = function(a, b, c) {
  return he.j(b, c, this);
};
k.Fa = function() {
  Pc(this);
  return null == this.da ? null : C(this.da);
};
k.Xa = function() {
  Pc(this);
  return null != this.da ? E(this.da) : Md;
};
k.W = function() {
  Uf(this);
  if (null == this.da) {
    return null;
  }
  for (var a = this.da;;) {
    if (a instanceof Tf) {
      a = Uf(a);
    } else {
      return this.da = a, A(this.da);
    }
  }
};
k.M = function(a, b) {
  return new Tf(b, this.Nd, this.da, this.A);
};
k.Y = function(a, b) {
  return ee(b, this);
};
function Vf(a, b) {
  this.Ab = a;
  this.end = b;
  this.K = 0;
  this.B = 2;
}
Vf.prototype.Z = function() {
  return this.end;
};
Vf.prototype.add = function(a) {
  this.Ab[this.end] = a;
  return this.end += 1;
};
Vf.prototype.Gc = function() {
  var a = new Wf(this.Ab, 0, this.end);
  this.Ab = null;
  return a;
};
function Xf(a) {
  return new Vf(Array(a), 0);
}
function Wf(a, b, c) {
  this.p = a;
  this.ab = b;
  this.end = c;
  this.K = 0;
  this.B = 524306;
}
k = Wf.prototype;
k.Ka = function(a, b) {
  return Vd.v(this.p, b, this.p[this.ab], this.ab + 1);
};
k.La = function(a, b, c) {
  return Vd.v(this.p, b, c, this.ab);
};
k.tg = function() {
  if (this.ab === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new Wf(this.p, this.ab + 1, this.end);
};
k.H = function(a, b) {
  return this.p[this.ab + b];
};
k.ub = function(a, b, c) {
  return 0 <= b && b < this.end - this.ab ? this.p[this.ab + b] : c;
};
k.Z = function() {
  return this.end - this.ab;
};
var Yf = function() {
  function a(a, b, c) {
    return new Wf(a, b, c);
  }
  function b(a, b) {
    return new Wf(a, b, a.length);
  }
  function c(a) {
    return new Wf(a, 0, a.length);
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
function Zf(a, b, c, d) {
  this.Gc = a;
  this.hc = b;
  this.G = c;
  this.A = d;
  this.B = 31850732;
  this.K = 1536;
}
k = Zf.prototype;
k.toString = function() {
  return qd(this);
};
k.equiv = function(a) {
  return this.J(null, a);
};
k.L = function() {
  return this.G;
};
k.hb = function() {
  if (1 < Xb(this.Gc)) {
    return new Zf(gd(this.Gc), this.hc, this.G, null);
  }
  var a = Pc(this.hc);
  return null == a ? null : a;
};
k.S = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Od(this);
};
k.J = function(a, b) {
  return de(this, b);
};
k.wa = function() {
  return ge(Md, this.G);
};
k.Fa = function() {
  return w.h(this.Gc, 0);
};
k.Xa = function() {
  return 1 < Xb(this.Gc) ? new Zf(gd(this.Gc), this.hc, this.G, null) : null == this.hc ? Md : this.hc;
};
k.W = function() {
  return this;
};
k.hf = function() {
  return this.Gc;
};
k.jf = function() {
  return null == this.hc ? Md : this.hc;
};
k.M = function(a, b) {
  return new Zf(this.Gc, this.hc, b, this.A);
};
k.Y = function(a, b) {
  return ee(b, this);
};
k.gf = function() {
  return null == this.hc ? null : this.hc;
};
function $f(a, b) {
  return 0 === Xb(a) ? b : new Zf(a, b, null, null);
}
function ag(a, b) {
  a.add(b);
}
function rg(a) {
  return a.Gc();
}
function cf(a) {
  for (var b = [];;) {
    if (A(a)) {
      b.push(C(a)), a = F(a);
    } else {
      return b;
    }
  }
}
var sg = function() {
  function a(a, b) {
    var c = Array(a);
    if (Xe(b)) {
      for (var g = 0, h = A(b);;) {
        if (h && g < a) {
          c[g] = C(h), g += 1, h = F(h);
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
    return "number" === typeof a ? c.h(a, null) : Ob.g(a);
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
function tg(a, b) {
  if (Wd(a)) {
    return J(a);
  }
  for (var c = a, d = b, e = 0;;) {
    if (0 < d && A(c)) {
      c = F(c), d -= 1, e += 1;
    } else {
      return e;
    }
  }
}
var vg = function ug(b) {
  return null == b ? null : null == F(b) ? A(C(b)) : ee(C(b), ug(F(b)));
}, wg = function() {
  function a(a, b) {
    return new Tf(null, function() {
      var c = A(a);
      return c ? T(c) ? $f(x(c), d.h(z(c), b)) : ee(C(c), d.h(E(c), b)) : b;
    }, null, null);
  }
  function b(a) {
    return new Tf(null, function() {
      return a;
    }, null, null);
  }
  function c() {
    return new Tf(null, function() {
      return null;
    }, null, null);
  }
  var d = null, e = function() {
    function a(c, d, e) {
      var f = null;
      2 < arguments.length && (f = G(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, f);
    }
    function b(a, c, e) {
      return function t(a, b) {
        return new Tf(null, function() {
          var c = A(a);
          return c ? T(c) ? $f(x(c), t(z(c), b)) : ee(C(c), t(E(c), b)) : q(b) ? t(C(b), F(b)) : null;
        }, null, null);
      }(d.h(a, c), e);
    }
    a.D = 2;
    a.q = function(a) {
      var c = C(a);
      a = F(a);
      var d = C(a);
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
        return e.k(d, g, G(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.D = 2;
  d.q = e.q;
  d.w = c;
  d.g = b;
  d.h = a;
  d.k = e.k;
  return d;
}(), xg = function() {
  function a(a, b, c, d) {
    return ee(a, ee(b, ee(c, d)));
  }
  function b(a, b, c) {
    return ee(a, ee(b, c));
  }
  var c = null, d = function() {
    function a(c, d, e, p, s) {
      var t = null;
      4 < arguments.length && (t = G(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, p, t);
    }
    function b(a, c, d, e, f) {
      return ee(a, ee(c, ee(d, ee(e, vg(f)))));
    }
    a.D = 4;
    a.q = function(a) {
      var c = C(a);
      a = F(a);
      var d = C(a);
      a = F(a);
      var e = C(a);
      a = F(a);
      var s = C(a);
      a = E(a);
      return b(c, d, e, s, a);
    };
    a.k = b;
    return a;
  }(), c = function(c, f, g, h, l) {
    switch(arguments.length) {
      case 1:
        return A(c);
      case 2:
        return ee(c, f);
      case 3:
        return b.call(this, c, f, g);
      case 4:
        return a.call(this, c, f, g, h);
      default:
        return d.k(c, f, g, h, G(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.D = 4;
  c.q = d.q;
  c.g = function(a) {
    return A(a);
  };
  c.h = function(a, b) {
    return ee(a, b);
  };
  c.j = b;
  c.v = a;
  c.k = d.k;
  return c;
}();
function yg(a) {
  return bd(a);
}
function zg(a) {
  return dd(a);
}
var Ag = function() {
  function a() {
    return bd(se);
  }
  var b = null, c = function() {
    function a(c, d, h) {
      var l = null;
      2 < arguments.length && (l = G(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      for (;;) {
        if (a = cd(a, c), q(d)) {
          c = C(d), d = F(d);
        } else {
          return a;
        }
      }
    }
    a.D = 2;
    a.q = function(a) {
      var c = C(a);
      a = F(a);
      var d = C(a);
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
        return cd(b, e);
      default:
        return c.k(b, e, G(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.D = 2;
  b.q = c.q;
  b.w = a;
  b.g = function(a) {
    return a;
  };
  b.h = function(a, b) {
    return cd(a, b);
  };
  b.k = c.k;
  return b;
}(), Bg = function() {
  var a = null, b = function() {
    function a(c, f, g, h) {
      var l = null;
      3 < arguments.length && (l = G(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, f, g, l);
    }
    function b(a, c, d, h) {
      for (;;) {
        if (a = ed(a, c, d), q(h)) {
          c = C(h), d = ie(h), h = F(F(h));
        } else {
          return a;
        }
      }
    }
    a.D = 3;
    a.q = function(a) {
      var c = C(a);
      a = F(a);
      var g = C(a);
      a = F(a);
      var h = C(a);
      a = E(a);
      return b(c, g, h, a);
    };
    a.k = b;
    return a;
  }(), a = function(a, d, e, f) {
    switch(arguments.length) {
      case 3:
        return ed(a, d, e);
      default:
        return b.k(a, d, e, G(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.D = 3;
  a.q = b.q;
  a.j = function(a, b, e) {
    return ed(a, b, e);
  };
  a.k = b.k;
  return a;
}();
function Cg(a, b, c) {
  var d = A(c);
  if (0 === b) {
    return a.w ? a.w() : a.call(null);
  }
  c = cc(d);
  var e = dc(d);
  if (1 === b) {
    return a.g ? a.g(c) : a.g ? a.g(c) : a.call(null, c);
  }
  var d = cc(e), f = dc(e);
  if (2 === b) {
    return a.h ? a.h(c, d) : a.h ? a.h(c, d) : a.call(null, c, d);
  }
  var e = cc(f), g = dc(f);
  if (3 === b) {
    return a.j ? a.j(c, d, e) : a.j ? a.j(c, d, e) : a.call(null, c, d, e);
  }
  var f = cc(g), h = dc(g);
  if (4 === b) {
    return a.v ? a.v(c, d, e, f) : a.v ? a.v(c, d, e, f) : a.call(null, c, d, e, f);
  }
  var g = cc(h), l = dc(h);
  if (5 === b) {
    return a.Q ? a.Q(c, d, e, f, g) : a.Q ? a.Q(c, d, e, f, g) : a.call(null, c, d, e, f, g);
  }
  var h = cc(l), p = dc(l);
  if (6 === b) {
    return a.Wa ? a.Wa(c, d, e, f, g, h) : a.Wa ? a.Wa(c, d, e, f, g, h) : a.call(null, c, d, e, f, g, h);
  }
  var l = cc(p), s = dc(p);
  if (7 === b) {
    return a.Ib ? a.Ib(c, d, e, f, g, h, l) : a.Ib ? a.Ib(c, d, e, f, g, h, l) : a.call(null, c, d, e, f, g, h, l);
  }
  var p = cc(s), t = dc(s);
  if (8 === b) {
    return a.Sc ? a.Sc(c, d, e, f, g, h, l, p) : a.Sc ? a.Sc(c, d, e, f, g, h, l, p) : a.call(null, c, d, e, f, g, h, l, p);
  }
  var s = cc(t), v = dc(t);
  if (9 === b) {
    return a.Tc ? a.Tc(c, d, e, f, g, h, l, p, s) : a.Tc ? a.Tc(c, d, e, f, g, h, l, p, s) : a.call(null, c, d, e, f, g, h, l, p, s);
  }
  var t = cc(v), B = dc(v);
  if (10 === b) {
    return a.Hc ? a.Hc(c, d, e, f, g, h, l, p, s, t) : a.Hc ? a.Hc(c, d, e, f, g, h, l, p, s, t) : a.call(null, c, d, e, f, g, h, l, p, s, t);
  }
  var v = cc(B), y = dc(B);
  if (11 === b) {
    return a.Ic ? a.Ic(c, d, e, f, g, h, l, p, s, t, v) : a.Ic ? a.Ic(c, d, e, f, g, h, l, p, s, t, v) : a.call(null, c, d, e, f, g, h, l, p, s, t, v);
  }
  var B = cc(y), D = dc(y);
  if (12 === b) {
    return a.Jc ? a.Jc(c, d, e, f, g, h, l, p, s, t, v, B) : a.Jc ? a.Jc(c, d, e, f, g, h, l, p, s, t, v, B) : a.call(null, c, d, e, f, g, h, l, p, s, t, v, B);
  }
  var y = cc(D), H = dc(D);
  if (13 === b) {
    return a.Kc ? a.Kc(c, d, e, f, g, h, l, p, s, t, v, B, y) : a.Kc ? a.Kc(c, d, e, f, g, h, l, p, s, t, v, B, y) : a.call(null, c, d, e, f, g, h, l, p, s, t, v, B, y);
  }
  var D = cc(H), K = dc(H);
  if (14 === b) {
    return a.Lc ? a.Lc(c, d, e, f, g, h, l, p, s, t, v, B, y, D) : a.Lc ? a.Lc(c, d, e, f, g, h, l, p, s, t, v, B, y, D) : a.call(null, c, d, e, f, g, h, l, p, s, t, v, B, y, D);
  }
  var H = cc(K), M = dc(K);
  if (15 === b) {
    return a.Mc ? a.Mc(c, d, e, f, g, h, l, p, s, t, v, B, y, D, H) : a.Mc ? a.Mc(c, d, e, f, g, h, l, p, s, t, v, B, y, D, H) : a.call(null, c, d, e, f, g, h, l, p, s, t, v, B, y, D, H);
  }
  var K = cc(M), L = dc(M);
  if (16 === b) {
    return a.Nc ? a.Nc(c, d, e, f, g, h, l, p, s, t, v, B, y, D, H, K) : a.Nc ? a.Nc(c, d, e, f, g, h, l, p, s, t, v, B, y, D, H, K) : a.call(null, c, d, e, f, g, h, l, p, s, t, v, B, y, D, H, K);
  }
  var M = cc(L), R = dc(L);
  if (17 === b) {
    return a.Oc ? a.Oc(c, d, e, f, g, h, l, p, s, t, v, B, y, D, H, K, M) : a.Oc ? a.Oc(c, d, e, f, g, h, l, p, s, t, v, B, y, D, H, K, M) : a.call(null, c, d, e, f, g, h, l, p, s, t, v, B, y, D, H, K, M);
  }
  var L = cc(R), $ = dc(R);
  if (18 === b) {
    return a.Pc ? a.Pc(c, d, e, f, g, h, l, p, s, t, v, B, y, D, H, K, M, L) : a.Pc ? a.Pc(c, d, e, f, g, h, l, p, s, t, v, B, y, D, H, K, M, L) : a.call(null, c, d, e, f, g, h, l, p, s, t, v, B, y, D, H, K, M, L);
  }
  R = cc($);
  $ = dc($);
  if (19 === b) {
    return a.Qc ? a.Qc(c, d, e, f, g, h, l, p, s, t, v, B, y, D, H, K, M, L, R) : a.Qc ? a.Qc(c, d, e, f, g, h, l, p, s, t, v, B, y, D, H, K, M, L, R) : a.call(null, c, d, e, f, g, h, l, p, s, t, v, B, y, D, H, K, M, L, R);
  }
  var N = cc($);
  dc($);
  if (20 === b) {
    return a.Rc ? a.Rc(c, d, e, f, g, h, l, p, s, t, v, B, y, D, H, K, M, L, R, N) : a.Rc ? a.Rc(c, d, e, f, g, h, l, p, s, t, v, B, y, D, H, K, M, L, R, N) : a.call(null, c, d, e, f, g, h, l, p, s, t, v, B, y, D, H, K, M, L, R, N);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var S = function() {
  function a(a, b, c, d, e) {
    b = xg.v(b, c, d, e);
    c = a.D;
    return a.q ? (d = tg(b, c + 1), d <= c ? Cg(a, d, b) : a.q(b)) : a.apply(a, cf(b));
  }
  function b(a, b, c, d) {
    b = xg.j(b, c, d);
    c = a.D;
    return a.q ? (d = tg(b, c + 1), d <= c ? Cg(a, d, b) : a.q(b)) : a.apply(a, cf(b));
  }
  function c(a, b, c) {
    b = xg.h(b, c);
    c = a.D;
    if (a.q) {
      var d = tg(b, c + 1);
      return d <= c ? Cg(a, d, b) : a.q(b);
    }
    return a.apply(a, cf(b));
  }
  function d(a, b) {
    var c = a.D;
    if (a.q) {
      var d = tg(b, c + 1);
      return d <= c ? Cg(a, d, b) : a.q(b);
    }
    return a.apply(a, cf(b));
  }
  var e = null, f = function() {
    function a(c, d, e, f, g, B) {
      var y = null;
      5 < arguments.length && (y = G(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, e, f, g, y);
    }
    function b(a, c, d, e, f, g) {
      c = ee(c, ee(d, ee(e, ee(f, vg(g)))));
      d = a.D;
      return a.q ? (e = tg(c, d + 1), e <= d ? Cg(a, e, c) : a.q(c)) : a.apply(a, cf(c));
    }
    a.D = 5;
    a.q = function(a) {
      var c = C(a);
      a = F(a);
      var d = C(a);
      a = F(a);
      var e = C(a);
      a = F(a);
      var f = C(a);
      a = F(a);
      var g = C(a);
      a = E(a);
      return b(c, d, e, f, g, a);
    };
    a.k = b;
    return a;
  }(), e = function(e, h, l, p, s, t) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, h);
      case 3:
        return c.call(this, e, h, l);
      case 4:
        return b.call(this, e, h, l, p);
      case 5:
        return a.call(this, e, h, l, p, s);
      default:
        return f.k(e, h, l, p, s, G(arguments, 5));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.D = 5;
  e.q = f.q;
  e.h = d;
  e.j = c;
  e.v = b;
  e.Q = a;
  e.k = f.k;
  return e;
}(), Dg = function() {
  function a(a, b, c, d, e, f) {
    var g = ge, y = ze(a);
    b = b.Q ? b.Q(y, c, d, e, f) : b.call(null, y, c, d, e, f);
    return g(a, b);
  }
  function b(a, b, c, d, e) {
    var f = ge, g = ze(a);
    b = b.v ? b.v(g, c, d, e) : b.call(null, g, c, d, e);
    return f(a, b);
  }
  function c(a, b, c, d) {
    var e = ge, f = ze(a);
    b = b.j ? b.j(f, c, d) : b.call(null, f, c, d);
    return e(a, b);
  }
  function d(a, b, c) {
    var d = ge, e = ze(a);
    b = b.h ? b.h(e, c) : b.call(null, e, c);
    return d(a, b);
  }
  function e(a, b) {
    var c = ge, d;
    d = ze(a);
    d = b.g ? b.g(d) : b.call(null, d);
    return c(a, d);
  }
  var f = null, g = function() {
    function a(c, d, e, f, g, h, D) {
      var H = null;
      6 < arguments.length && (H = G(Array.prototype.slice.call(arguments, 6), 0));
      return b.call(this, c, d, e, f, g, h, H);
    }
    function b(a, c, d, e, f, g, h) {
      return ge(a, S.k(c, ze(a), d, e, f, G([g, h], 0)));
    }
    a.D = 6;
    a.q = function(a) {
      var c = C(a);
      a = F(a);
      var d = C(a);
      a = F(a);
      var e = C(a);
      a = F(a);
      var f = C(a);
      a = F(a);
      var g = C(a);
      a = F(a);
      var h = C(a);
      a = E(a);
      return b(c, d, e, f, g, h, a);
    };
    a.k = b;
    return a;
  }(), f = function(f, l, p, s, t, v, B) {
    switch(arguments.length) {
      case 2:
        return e.call(this, f, l);
      case 3:
        return d.call(this, f, l, p);
      case 4:
        return c.call(this, f, l, p, s);
      case 5:
        return b.call(this, f, l, p, s, t);
      case 6:
        return a.call(this, f, l, p, s, t, v);
      default:
        return g.k(f, l, p, s, t, v, G(arguments, 6));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  f.D = 6;
  f.q = g.q;
  f.h = e;
  f.j = d;
  f.v = c;
  f.Q = b;
  f.Wa = a;
  f.k = g.k;
  return f;
}(), Eg = function() {
  function a(a, b) {
    return!Fd.h(a, b);
  }
  var b = null, c = function() {
    function a(c, d, h) {
      var l = null;
      2 < arguments.length && (l = G(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      return Hb(S.v(Fd, a, c, d));
    }
    a.D = 2;
    a.q = function(a) {
      var c = C(a);
      a = F(a);
      var d = C(a);
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
        return c.k(b, e, G(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.D = 2;
  b.q = c.q;
  b.g = function() {
    return!1;
  };
  b.h = a;
  b.k = c.k;
  return b;
}();
function Fg(a) {
  return A(a) ? a : null;
}
function Gg(a, b) {
  for (;;) {
    if (null == A(b)) {
      return!0;
    }
    var c;
    c = C(b);
    c = a.g ? a.g(c) : a.call(null, c);
    if (q(c)) {
      c = a;
      var d = F(b);
      a = c;
      b = d;
    } else {
      return!1;
    }
  }
}
function Hg(a, b) {
  for (;;) {
    if (A(b)) {
      var c;
      c = C(b);
      c = a.g ? a.g(c) : a.call(null, c);
      if (q(c)) {
        return c;
      }
      c = a;
      var d = F(b);
      a = c;
      b = d;
    } else {
      return null;
    }
  }
}
function Ig(a) {
  if ("number" === typeof a && Hb(isNaN(a)) && Infinity !== a && parseFloat(a) === parseInt(a, 10)) {
    return 0 === (a & 1);
  }
  throw Error("Argument must be an integer: " + u.g(a));
}
function Jg(a) {
  return function() {
    function b(b, c) {
      return Hb(a.h ? a.h(b, c) : a.call(null, b, c));
    }
    function c(b) {
      return Hb(a.g ? a.g(b) : a.call(null, b));
    }
    function d() {
      return Hb(a.w ? a.w() : a.call(null));
    }
    var e = null, f = function() {
      function b(a, d, e) {
        var f = null;
        2 < arguments.length && (f = G(Array.prototype.slice.call(arguments, 2), 0));
        return c.call(this, a, d, f);
      }
      function c(b, d, e) {
        return Hb(S.v(a, b, d, e));
      }
      b.D = 2;
      b.q = function(a) {
        var b = C(a);
        a = F(a);
        var d = C(a);
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
          return f.k(a, e, G(arguments, 2));
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    e.D = 2;
    e.q = f.q;
    e.w = d;
    e.g = c;
    e.h = b;
    e.k = f.k;
    return e;
  }();
}
function Kg(a) {
  return function() {
    function b(b) {
      0 < arguments.length && G(Array.prototype.slice.call(arguments, 0), 0);
      return a;
    }
    b.D = 0;
    b.q = function(b) {
      A(b);
      return a;
    };
    b.k = function() {
      return a;
    };
    return b;
  }();
}
var Lg = function() {
  function a(a, b, c) {
    return function() {
      function d(h, l, p) {
        h = c.j ? c.j(h, l, p) : c.call(null, h, l, p);
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
      function s() {
        var d;
        d = c.w ? c.w() : c.call(null);
        d = b.g ? b.g(d) : b.call(null, d);
        return a.g ? a.g(d) : a.call(null, d);
      }
      var t = null, v = function() {
        function d(a, b, c, e) {
          var f = null;
          3 < arguments.length && (f = G(Array.prototype.slice.call(arguments, 3), 0));
          return h.call(this, a, b, c, f);
        }
        function h(d, l, p, s) {
          d = S.Q(c, d, l, p, s);
          d = b.g ? b.g(d) : b.call(null, d);
          return a.g ? a.g(d) : a.call(null, d);
        }
        d.D = 3;
        d.q = function(a) {
          var b = C(a);
          a = F(a);
          var c = C(a);
          a = F(a);
          var d = C(a);
          a = E(a);
          return h(b, c, d, a);
        };
        d.k = h;
        return d;
      }(), t = function(a, b, c, e) {
        switch(arguments.length) {
          case 0:
            return s.call(this);
          case 1:
            return p.call(this, a);
          case 2:
            return l.call(this, a, b);
          case 3:
            return d.call(this, a, b, c);
          default:
            return v.k(a, b, c, G(arguments, 3));
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      t.D = 3;
      t.q = v.q;
      t.w = s;
      t.g = p;
      t.h = l;
      t.j = d;
      t.k = v.k;
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
        var c = b.w ? b.w() : b.call(null);
        return a.g ? a.g(c) : a.call(null, c);
      }
      var s = null, t = function() {
        function c(a, b, e, f) {
          var g = null;
          3 < arguments.length && (g = G(Array.prototype.slice.call(arguments, 3), 0));
          return d.call(this, a, b, e, g);
        }
        function d(c, g, h, l) {
          c = S.Q(b, c, g, h, l);
          return a.g ? a.g(c) : a.call(null, c);
        }
        c.D = 3;
        c.q = function(a) {
          var b = C(a);
          a = F(a);
          var c = C(a);
          a = F(a);
          var e = C(a);
          a = E(a);
          return d(b, c, e, a);
        };
        c.k = d;
        return c;
      }(), s = function(a, b, e, f) {
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
            return t.k(a, b, e, G(arguments, 3));
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      s.D = 3;
      s.q = t.q;
      s.w = p;
      s.g = l;
      s.h = d;
      s.j = c;
      s.k = t.k;
      return s;
    }();
  }
  var c = null, d = function() {
    function a(c, d, e, p) {
      var s = null;
      3 < arguments.length && (s = G(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, d, e, s);
    }
    function b(a, c, d, e) {
      return function(a) {
        return function() {
          function b(a) {
            var d = null;
            0 < arguments.length && (d = G(Array.prototype.slice.call(arguments, 0), 0));
            return c.call(this, d);
          }
          function c(b) {
            b = S.h(C(a), b);
            for (var d = F(a);;) {
              if (d) {
                b = C(d).call(null, b), d = F(d);
              } else {
                return b;
              }
            }
          }
          b.D = 0;
          b.q = function(a) {
            a = A(a);
            return c(a);
          };
          b.k = c;
          return b;
        }();
      }(Of(xg.v(a, c, d, e)));
    }
    a.D = 3;
    a.q = function(a) {
      var c = C(a);
      a = F(a);
      var d = C(a);
      a = F(a);
      var e = C(a);
      a = E(a);
      return b(c, d, e, a);
    };
    a.k = b;
    return a;
  }(), c = function(c, f, g, h) {
    switch(arguments.length) {
      case 0:
        return gf;
      case 1:
        return c;
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, g);
      default:
        return d.k(c, f, g, G(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.D = 3;
  c.q = d.q;
  c.w = function() {
    return gf;
  };
  c.g = function(a) {
    return a;
  };
  c.h = b;
  c.j = a;
  c.k = d.k;
  return c;
}(), Mg = function() {
  function a(a, b, c, d) {
    return function() {
      function e(a) {
        var b = null;
        0 < arguments.length && (b = G(Array.prototype.slice.call(arguments, 0), 0));
        return s.call(this, b);
      }
      function s(e) {
        return S.Q(a, b, c, d, e);
      }
      e.D = 0;
      e.q = function(a) {
        a = A(a);
        return s(a);
      };
      e.k = s;
      return e;
    }();
  }
  function b(a, b, c) {
    return function() {
      function d(a) {
        var b = null;
        0 < arguments.length && (b = G(Array.prototype.slice.call(arguments, 0), 0));
        return e.call(this, b);
      }
      function e(d) {
        return S.v(a, b, c, d);
      }
      d.D = 0;
      d.q = function(a) {
        a = A(a);
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
        0 < arguments.length && (b = G(Array.prototype.slice.call(arguments, 0), 0));
        return d.call(this, b);
      }
      function d(c) {
        return S.j(a, b, c);
      }
      c.D = 0;
      c.q = function(a) {
        a = A(a);
        return d(a);
      };
      c.k = d;
      return c;
    }();
  }
  var d = null, e = function() {
    function a(c, d, e, f, t) {
      var v = null;
      4 < arguments.length && (v = G(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, v);
    }
    function b(a, c, d, e, f) {
      return function() {
        function b(a) {
          var c = null;
          0 < arguments.length && (c = G(Array.prototype.slice.call(arguments, 0), 0));
          return g.call(this, c);
        }
        function g(b) {
          return S.Q(a, c, d, e, wg.h(f, b));
        }
        b.D = 0;
        b.q = function(a) {
          a = A(a);
          return g(a);
        };
        b.k = g;
        return b;
      }();
    }
    a.D = 4;
    a.q = function(a) {
      var c = C(a);
      a = F(a);
      var d = C(a);
      a = F(a);
      var e = C(a);
      a = F(a);
      var f = C(a);
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
        return e.k(d, g, h, l, G(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.D = 4;
  d.q = e.q;
  d.g = function(a) {
    return a;
  };
  d.h = c;
  d.j = b;
  d.v = a;
  d.k = e.k;
  return d;
}();
function Ng(a, b) {
  return function d(b, f) {
    return new Tf(null, function() {
      var g = A(f);
      if (g) {
        if (T(g)) {
          for (var h = x(g), l = J(h), p = Xf(l), s = 0;;) {
            if (s < l) {
              ag(p, function() {
                var d = b + s, f = w.h(h, s);
                return a.h ? a.h(d, f) : a.call(null, d, f);
              }()), s += 1;
            } else {
              break;
            }
          }
          return $f(rg(p), d(b + l, z(g)));
        }
        return ee(function() {
          var d = C(g);
          return a.h ? a.h(b, d) : a.call(null, b, d);
        }(), d(b + 1, E(g)));
      }
      return null;
    }, null, null);
  }(0, b);
}
var Og = function() {
  function a(a, b) {
    return new Tf(null, function() {
      var f = A(b);
      if (f) {
        if (T(f)) {
          for (var g = x(f), h = J(g), l = Xf(h), p = 0;;) {
            if (p < h) {
              var s = function() {
                var b = w.h(g, p);
                return a.g ? a.g(b) : a.call(null, b);
              }();
              null != s && l.add(s);
              p += 1;
            } else {
              break;
            }
          }
          return $f(rg(l), c.h(a, z(f)));
        }
        h = function() {
          var b = C(f);
          return a.g ? a.g(b) : a.call(null, b);
        }();
        return null == h ? c.h(a, E(f)) : ee(h, c.h(a, E(f)));
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
          return b.w ? b.w() : b.call(null);
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
        l.w = h;
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
function Pg(a, b, c, d) {
  this.state = a;
  this.G = b;
  this.kj = c;
  this.Da = d;
  this.B = 6455296;
  this.K = 16386;
}
k = Pg.prototype;
k.S = function() {
  return this[oa] || (this[oa] = ++pa);
};
k.mf = function(a, b, c) {
  for (var d = A(this.Da), e = null, f = 0, g = 0;;) {
    if (g < f) {
      a = e.H(null, g);
      var h = O.j(a, 0, null);
      a = O.j(a, 1, null);
      var l = b, p = c;
      a.v ? a.v(h, this, l, p) : a.call(null, h, this, l, p);
      g += 1;
    } else {
      if (a = A(d)) {
        d = a, T(d) ? (e = x(d), d = z(d), a = e, f = J(e), e = a) : (a = C(d), h = O.j(a, 0, null), a = O.j(a, 1, null), e = h, f = b, g = c, a.v ? a.v(e, this, f, g) : a.call(null, e, this, f, g), d = F(d), e = null, f = 0), g = 0;
      } else {
        return null;
      }
    }
  }
};
k.lf = function(a, b, c) {
  this.Da = Q.j(this.Da, b, c);
  return this;
};
k.nf = function(a, b) {
  return this.Da = we.h(this.Da, b);
};
k.L = function() {
  return this.G;
};
k.Dd = function() {
  return this.state;
};
k.J = function(a, b) {
  return this === b;
};
k.equiv = function(a) {
  return this.J(null, a);
};
var Sg = function() {
  function a(a) {
    return new Pg(a, null, null, null);
  }
  var b = null, c = function() {
    function a(c, d) {
      var h = null;
      1 < arguments.length && (h = G(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, h);
    }
    function b(a, c) {
      var d = Xe(c) ? S.h(Qg, c) : c, e = P.h(d, Rg), d = P.h(d, Cb);
      return new Pg(a, d, e, null);
    }
    a.D = 1;
    a.q = function(a) {
      var c = C(a);
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
        return c.k(b, G(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.D = 1;
  b.q = c.q;
  b.g = a;
  b.k = c.k;
  return b;
}();
function Tg(a, b) {
  if (a instanceof Pg) {
    var c = a.kj;
    if (null != c && !q(c.g ? c.g(b) : c.call(null, b))) {
      throw Error("Assert failed: Validator rejected reference state\n" + u.g(function() {
        var a = Pf(new Hd(null, "validate", "validate", 1439230700, null), new Hd(null, "new-value", "new-value", -1567397401, null));
        return Ug.g ? Ug.g(a) : Ug.call(null, a);
      }()));
    }
    c = a.state;
    a.state = b;
    null != a.Da && Zc(a, c, b);
    return b;
  }
  return nd(a, b);
}
var Vg = function() {
  function a(a, b, c, d) {
    if (a instanceof Pg) {
      var e = a.state;
      b = b.j ? b.j(e, c, d) : b.call(null, e, c, d);
      a = Tg(a, b);
    } else {
      a = od.v(a, b, c, d);
    }
    return a;
  }
  function b(a, b, c) {
    if (a instanceof Pg) {
      var d = a.state;
      b = b.h ? b.h(d, c) : b.call(null, d, c);
      a = Tg(a, b);
    } else {
      a = od.j(a, b, c);
    }
    return a;
  }
  function c(a, b) {
    var c;
    a instanceof Pg ? (c = a.state, c = b.g ? b.g(c) : b.call(null, c), c = Tg(a, c)) : c = od.h(a, b);
    return c;
  }
  var d = null, e = function() {
    function a(c, d, e, f, t) {
      var v = null;
      4 < arguments.length && (v = G(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, v);
    }
    function b(a, c, d, e, f) {
      return a instanceof Pg ? Tg(a, S.Q(c, a.state, d, e, f)) : od.Q(a, c, d, e, f);
    }
    a.D = 4;
    a.q = function(a) {
      var c = C(a);
      a = F(a);
      var d = C(a);
      a = F(a);
      var e = C(a);
      a = F(a);
      var f = C(a);
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
        return e.k(d, g, h, l, G(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.D = 4;
  d.q = e.q;
  d.h = c;
  d.j = b;
  d.v = a;
  d.k = e.k;
  return d;
}(), Wg = function() {
  function a(a, b) {
    return function g(b, c) {
      return new Tf(null, function() {
        var e = A(c);
        if (e) {
          if (T(e)) {
            for (var s = x(e), t = J(s), v = Xf(t), B = 0;;) {
              if (B < t) {
                var y = function() {
                  var c = b + B, e = w.h(s, B);
                  return a.h ? a.h(c, e) : a.call(null, c, e);
                }();
                null != y && v.add(y);
                B += 1;
              } else {
                break;
              }
            }
            return $f(rg(v), g(b + t, z(e)));
          }
          t = function() {
            var c = C(e);
            return a.h ? a.h(b, c) : a.call(null, b, c);
          }();
          return null == t ? g(b + 1, E(e)) : ee(t, g(b + 1, E(e)));
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
            var l = Vg.h(c, Rd), l = a.h ? a.h(l, h) : a.call(null, l, h);
            return null == l ? g : b.h ? b.h(g, l) : b.call(null, g, l);
          }
          function h(a) {
            return b.g ? b.g(a) : b.call(null, a);
          }
          function l() {
            return b.w ? b.w() : b.call(null);
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
          p.w = l;
          p.g = h;
          p.h = g;
          return p;
        }();
      }(Sg.g(-1));
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
}(), kh = function() {
  function a(a, b, c, d) {
    return new Tf(null, function() {
      var f = A(b), t = A(c), v = A(d);
      if (f && t && v) {
        var B = ee, y;
        y = C(f);
        var D = C(t), H = C(v);
        y = a.j ? a.j(y, D, H) : a.call(null, y, D, H);
        f = B(y, e.v(a, E(f), E(t), E(v)));
      } else {
        f = null;
      }
      return f;
    }, null, null);
  }
  function b(a, b, c) {
    return new Tf(null, function() {
      var d = A(b), f = A(c);
      if (d && f) {
        var t = ee, v;
        v = C(d);
        var B = C(f);
        v = a.h ? a.h(v, B) : a.call(null, v, B);
        d = t(v, e.j(a, E(d), E(f)));
      } else {
        d = null;
      }
      return d;
    }, null, null);
  }
  function c(a, b) {
    return new Tf(null, function() {
      var c = A(b);
      if (c) {
        if (T(c)) {
          for (var d = x(c), f = J(d), t = Xf(f), v = 0;;) {
            if (v < f) {
              ag(t, function() {
                var b = w.h(d, v);
                return a.g ? a.g(b) : a.call(null, b);
              }()), v += 1;
            } else {
              break;
            }
          }
          return $f(rg(t), e.h(a, z(c)));
        }
        return ee(function() {
          var b = C(c);
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
          return b.w ? b.w() : b.call(null);
        }
        var f = null, v = function() {
          function c(a, b, e) {
            var f = null;
            2 < arguments.length && (f = G(Array.prototype.slice.call(arguments, 2), 0));
            return d.call(this, a, b, f);
          }
          function d(c, e, f) {
            e = S.j(a, e, f);
            return b.h ? b.h(c, e) : b.call(null, c, e);
          }
          c.D = 2;
          c.q = function(a) {
            var b = C(a);
            a = F(a);
            var c = C(a);
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
              return v.k(a, b, G(arguments, 2));
          }
          throw Error("Invalid arity: " + arguments.length);
        };
        f.D = 2;
        f.q = v.q;
        f.w = e;
        f.g = d;
        f.h = c;
        f.k = v.k;
        return f;
      }();
    };
  }
  var e = null, f = function() {
    function a(c, d, e, f, g) {
      var B = null;
      4 < arguments.length && (B = G(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, B);
    }
    function b(a, c, d, f, g) {
      var h = function D(a) {
        return new Tf(null, function() {
          var b = e.h(A, a);
          return Gg(gf, b) ? ee(e.h(C, b), D(e.h(E, b))) : null;
        }, null, null);
      };
      return e.h(function() {
        return function(b) {
          return S.h(a, b);
        };
      }(h), h(te.k(g, f, G([d, c], 0))));
    }
    a.D = 4;
    a.q = function(a) {
      var c = C(a);
      a = F(a);
      var d = C(a);
      a = F(a);
      var e = C(a);
      a = F(a);
      var f = C(a);
      a = E(a);
      return b(c, d, e, f, a);
    };
    a.k = b;
    return a;
  }(), e = function(e, h, l, p, s) {
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
        return f.k(e, h, l, p, G(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.D = 4;
  e.q = f.q;
  e.g = d;
  e.h = c;
  e.j = b;
  e.v = a;
  e.k = f.k;
  return e;
}(), lh = function() {
  function a(a, b) {
    return new Tf(null, function() {
      if (0 < a) {
        var f = A(b);
        return f ? ee(C(f), c.h(a - 1, E(f))) : null;
      }
      return null;
    }, null, null);
  }
  function b(a) {
    return function(b) {
      return function(a) {
        return function() {
          function c(d, g) {
            var h = Bc(a), l = Vg.h(a, mf), h = 0 < h ? b.h ? b.h(d, g) : b.call(null, d, g) : d;
            return 0 < l ? h : new Sd(h);
          }
          function d(a) {
            return b.g ? b.g(a) : b.call(null, a);
          }
          function l() {
            return b.w ? b.w() : b.call(null);
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
          p.w = l;
          p.g = d;
          p.h = c;
          return p;
        }();
      }(Sg.g(a));
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
}(), mh = function() {
  function a(a, b) {
    return new Tf(null, function(c) {
      return function() {
        return c(a, b);
      };
    }(function(a, b) {
      for (;;) {
        var c = A(b);
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
            var h = Bc(a);
            Vg.h(a, mf);
            return 0 < h ? d : b.h ? b.h(d, g) : b.call(null, d, g);
          }
          function d(a) {
            return b.g ? b.g(a) : b.call(null, a);
          }
          function l() {
            return b.w ? b.w() : b.call(null);
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
          p.w = l;
          p.g = d;
          p.h = c;
          return p;
        }();
      }(Sg.g(a));
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
}(), nh = function() {
  function a(a, b) {
    return new Tf(null, function(c) {
      return function() {
        return c(a, b);
      };
    }(function(a, b) {
      for (;;) {
        var c = A(b), d;
        if (d = c) {
          d = C(c), d = a.g ? a.g(d) : a.call(null, d);
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
            var l = Bc(c);
            if (q(q(l) ? a.g ? a.g(h) : a.call(null, h) : l)) {
              return g;
            }
            Tg(c, null);
            return b.h ? b.h(g, h) : b.call(null, g, h);
          }
          function h(a) {
            return b.g ? b.g(a) : b.call(null, a);
          }
          function l() {
            return b.w ? b.w() : b.call(null);
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
          p.w = l;
          p.g = h;
          p.h = g;
          return p;
        }();
      }(Sg.g(!0));
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
}(), oh = function() {
  function a(a, b) {
    return lh.h(a, c.g(b));
  }
  function b(a) {
    return new Tf(null, function() {
      return ee(a, c.g(a));
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
}(), ph = function() {
  function a(a, b) {
    return lh.h(a, c.g(b));
  }
  function b(a) {
    return new Tf(null, function() {
      return ee(a.w ? a.w() : a.call(null), c.g(a));
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
}(), rh = function qh(b, c) {
  return ee(c, new Tf(null, function() {
    return qh(b, b.g ? b.g(c) : b.call(null, c));
  }, null, null));
}, sh = function() {
  function a(a, c) {
    return new Tf(null, function() {
      var f = A(a), g = A(c);
      return f && g ? ee(C(f), ee(C(g), b.h(E(f), E(g)))) : null;
    }, null, null);
  }
  var b = null, c = function() {
    function a(b, d, h) {
      var l = null;
      2 < arguments.length && (l = G(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      return new Tf(null, function() {
        var c = kh.h(A, te.k(e, d, G([a], 0)));
        return Gg(gf, c) ? wg.h(kh.h(C, c), S.h(b, kh.h(E, c))) : null;
      }, null, null);
    }
    a.D = 2;
    a.q = function(a) {
      var b = C(a);
      a = F(a);
      var d = C(a);
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
        return c.k(b, e, G(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.D = 2;
  b.q = c.q;
  b.h = a;
  b.k = c.k;
  return b;
}();
function th(a, b) {
  return mh.h(1, sh.h(oh.g(a), b));
}
var vh = function() {
  function a(a) {
    return Lg.h(kh.g(a), uh);
  }
  var b = null, c = function() {
    function a(c, d) {
      var h = null;
      1 < arguments.length && (h = G(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, h);
    }
    function b(a, c) {
      return S.h(wg, S.j(kh, a, c));
    }
    a.D = 1;
    a.q = function(a) {
      var c = C(a);
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
        return c.k(b, G(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.D = 1;
  b.q = c.q;
  b.g = a;
  b.k = c.k;
  return b;
}(), wh = function() {
  function a(a, b) {
    return new Tf(null, function() {
      var f = A(b);
      if (f) {
        if (T(f)) {
          for (var g = x(f), h = J(g), l = Xf(h), p = 0;;) {
            if (p < h) {
              var s;
              s = w.h(g, p);
              s = a.g ? a.g(s) : a.call(null, s);
              q(s) && (s = w.h(g, p), l.add(s));
              p += 1;
            } else {
              break;
            }
          }
          return $f(rg(l), c.h(a, z(f)));
        }
        g = C(f);
        f = E(f);
        return q(a.g ? a.g(g) : a.call(null, g)) ? ee(g, c.h(a, f)) : c.h(a, f);
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
          return b.w ? b.w() : b.call(null);
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
        l.w = h;
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
}(), xh = function() {
  function a(a, b) {
    return wh.h(Jg(a), b);
  }
  function b(a) {
    return wh.g(Jg(a));
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
function yh(a, b, c) {
  return function e(c) {
    return new Tf(null, function() {
      return ee(c, q(a.g ? a.g(c) : a.call(null, c)) ? vh.k(e, G([b.g ? b.g(c) : b.call(null, c)], 0)) : null);
    }, null, null);
  }(c);
}
function zh(a) {
  return wh.h(function(a) {
    return!Fe(a);
  }, E(yh(Fe, A, a)));
}
var Ah = function() {
  function a(a, b, c) {
    return a && (a.K & 4 || a.Hh) ? ge(zg(hf.v(b, Ag, bd(a), c)), ze(a)) : hf.v(b, te, a, c);
  }
  function b(a, b) {
    return null != a ? a && (a.K & 4 || a.Hh) ? ge(zg(Nb.j(cd, bd(a), b)), ze(a)) : Nb.j($b, a, b) : Nb.j(te, Md, b);
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
}(), Bh = function() {
  function a(a, b, c, d) {
    return Ah.h(se, kh.v(a, b, c, d));
  }
  function b(a, b, c) {
    return Ah.h(se, kh.j(a, b, c));
  }
  function c(a, b) {
    return zg(Nb.j(function(b, c) {
      return Ag.h(b, a.g ? a.g(c) : a.call(null, c));
    }, bd(se), b));
  }
  var d = null, e = function() {
    function a(c, d, e, f, t) {
      var v = null;
      4 < arguments.length && (v = G(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, v);
    }
    function b(a, c, d, e, f) {
      return Ah.h(se, S.k(kh, a, c, d, e, G([f], 0)));
    }
    a.D = 4;
    a.q = function(a) {
      var c = C(a);
      a = F(a);
      var d = C(a);
      a = F(a);
      var e = C(a);
      a = F(a);
      var f = C(a);
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
        return e.k(d, g, h, l, G(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.D = 4;
  d.q = e.q;
  d.h = c;
  d.j = b;
  d.v = a;
  d.k = e.k;
  return d;
}(), Ch = function() {
  function a(a, b, c, h) {
    return new Tf(null, function() {
      var l = A(h);
      if (l) {
        var p = lh.h(a, l);
        return a === J(p) ? ee(p, d.v(a, b, c, mh.h(b, l))) : $b(Md, lh.h(a, wg.h(p, c)));
      }
      return null;
    }, null, null);
  }
  function b(a, b, c) {
    return new Tf(null, function() {
      var h = A(c);
      if (h) {
        var l = lh.h(a, h);
        return a === J(l) ? ee(l, d.j(a, b, mh.h(b, h))) : null;
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
  d.v = a;
  return d;
}(), Dh = function() {
  function a(a, b, c) {
    var g = Le;
    for (b = A(b);;) {
      if (b) {
        var h = a;
        if (h ? h.B & 256 || h.vg || (h.B ? 0 : Ib(fc, h)) : Ib(fc, h)) {
          a = P.j(a, C(b), g);
          if (g === a) {
            return c;
          }
          b = F(b);
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
}(), Fh = function Eh(b, c, d) {
  var e = O.j(c, 0, null);
  return(c = Hf(c)) ? Q.j(b, e, Eh(P.h(b, e), c, d)) : Q.j(b, e, d);
}, Gh = function() {
  function a(a, b, c, d, f, t) {
    var v = O.j(b, 0, null);
    return(b = Hf(b)) ? Q.j(a, v, e.Wa(P.h(a, v), b, c, d, f, t)) : Q.j(a, v, function() {
      var b = P.h(a, v);
      return c.v ? c.v(b, d, f, t) : c.call(null, b, d, f, t);
    }());
  }
  function b(a, b, c, d, f) {
    var t = O.j(b, 0, null);
    return(b = Hf(b)) ? Q.j(a, t, e.Q(P.h(a, t), b, c, d, f)) : Q.j(a, t, function() {
      var b = P.h(a, t);
      return c.j ? c.j(b, d, f) : c.call(null, b, d, f);
    }());
  }
  function c(a, b, c, d) {
    var f = O.j(b, 0, null);
    return(b = Hf(b)) ? Q.j(a, f, e.v(P.h(a, f), b, c, d)) : Q.j(a, f, function() {
      var b = P.h(a, f);
      return c.h ? c.h(b, d) : c.call(null, b, d);
    }());
  }
  function d(a, b, c) {
    var d = O.j(b, 0, null);
    return(b = Hf(b)) ? Q.j(a, d, e.j(P.h(a, d), b, c)) : Q.j(a, d, function() {
      var b = P.h(a, d);
      return c.g ? c.g(b) : c.call(null, b);
    }());
  }
  var e = null, f = function() {
    function a(c, d, e, f, g, B, y) {
      var D = null;
      6 < arguments.length && (D = G(Array.prototype.slice.call(arguments, 6), 0));
      return b.call(this, c, d, e, f, g, B, D);
    }
    function b(a, c, d, f, g, h, y) {
      var D = O.j(c, 0, null);
      return(c = Hf(c)) ? Q.j(a, D, S.k(e, P.h(a, D), c, d, f, G([g, h, y], 0))) : Q.j(a, D, S.k(d, P.h(a, D), f, g, h, G([y], 0)));
    }
    a.D = 6;
    a.q = function(a) {
      var c = C(a);
      a = F(a);
      var d = C(a);
      a = F(a);
      var e = C(a);
      a = F(a);
      var f = C(a);
      a = F(a);
      var g = C(a);
      a = F(a);
      var y = C(a);
      a = E(a);
      return b(c, d, e, f, g, y, a);
    };
    a.k = b;
    return a;
  }(), e = function(e, h, l, p, s, t, v) {
    switch(arguments.length) {
      case 3:
        return d.call(this, e, h, l);
      case 4:
        return c.call(this, e, h, l, p);
      case 5:
        return b.call(this, e, h, l, p, s);
      case 6:
        return a.call(this, e, h, l, p, s, t);
      default:
        return f.k(e, h, l, p, s, t, G(arguments, 6));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.D = 6;
  e.q = f.q;
  e.j = d;
  e.v = c;
  e.Q = b;
  e.Wa = a;
  e.k = f.k;
  return e;
}();
function Hh(a, b) {
  this.ra = a;
  this.p = b;
}
function Ih(a) {
  return new Hh(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function Jh(a) {
  return new Hh(a.ra, Lb(a.p));
}
function Kh(a) {
  a = a.F;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function Lh(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = Ih(a);
    d.p[0] = c;
    c = d;
    b -= 5;
  }
}
var Nh = function Mh(b, c, d, e) {
  var f = Jh(d), g = b.F - 1 >>> c & 31;
  5 === c ? f.p[g] = e : (d = d.p[g], b = null != d ? Mh(b, c - 5, d, e) : Lh(null, c - 5, e), f.p[g] = b);
  return f;
};
function Oh(a, b) {
  throw Error("No item " + u.g(a) + " in vector of length " + u.g(b));
}
function Ph(a, b) {
  if (b >= Kh(a)) {
    return a.la;
  }
  for (var c = a.root, d = a.shift;;) {
    if (0 < d) {
      var e = d - 5, c = c.p[b >>> d & 31], d = e
    } else {
      return c.p;
    }
  }
}
function Qh(a, b) {
  return 0 <= b && b < a.F ? Ph(a, b) : Oh(b, a.F);
}
var Sh = function Rh(b, c, d, e, f) {
  var g = Jh(d);
  if (0 === c) {
    g.p[e & 31] = f;
  } else {
    var h = e >>> c & 31;
    b = Rh(b, c - 5, d.p[h], e, f);
    g.p[h] = b;
  }
  return g;
}, Uh = function Th(b, c, d) {
  var e = b.F - 2 >>> c & 31;
  if (5 < c) {
    b = Th(b, c - 5, d.p[e]);
    if (null == b && 0 === e) {
      return null;
    }
    d = Jh(d);
    d.p[e] = b;
    return d;
  }
  if (0 === e) {
    return null;
  }
  d = Jh(d);
  d.p[e] = null;
  return d;
};
function U(a, b, c, d, e, f) {
  this.G = a;
  this.F = b;
  this.shift = c;
  this.root = d;
  this.la = e;
  this.A = f;
  this.B = 167668511;
  this.K = 8196;
}
k = U.prototype;
k.toString = function() {
  return qd(this);
};
k.equiv = function(a) {
  return this.J(null, a);
};
k.N = function(a, b) {
  return hc.j(this, b, null);
};
k.P = function(a, b, c) {
  return "number" === typeof b ? w.j(this, b, c) : c;
};
k.Xd = function(a, b, c) {
  a = 0;
  for (var d = c;;) {
    if (a < this.F) {
      var e = Ph(this, a);
      c = e.length;
      a: {
        for (var f = 0;;) {
          if (f < c) {
            var g = f + a, h = e[f], d = b.j ? b.j(d, g, h) : b.call(null, d, g, h);
            if (Td(d)) {
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
      if (Td(e)) {
        return b = e, I.g ? I.g(b) : I.call(null, b);
      }
      a += c;
      d = e;
    } else {
      return d;
    }
  }
};
k.H = function(a, b) {
  return Qh(this, b)[b & 31];
};
k.ub = function(a, b, c) {
  return 0 <= b && b < this.F ? Ph(this, b)[b & 31] : c;
};
k.pd = function(a, b, c) {
  if (0 <= b && b < this.F) {
    return Kh(this) <= b ? (a = Lb(this.la), a[b & 31] = c, new U(this.G, this.F, this.shift, this.root, a, null)) : new U(this.G, this.F, this.shift, Sh(this, this.shift, this.root, b, c), this.la, null);
  }
  if (b === this.F) {
    return $b(this, c);
  }
  throw Error("Index " + u.g(b) + " out of bounds  [0," + u.g(this.F) + "]");
};
k.L = function() {
  return this.G;
};
k.ma = function() {
  return new U(this.G, this.F, this.shift, this.root, this.la, this.A);
};
k.Z = function() {
  return this.F;
};
k.Yd = function() {
  return w.h(this, 0);
};
k.Zd = function() {
  return w.h(this, 1);
};
k.dd = function() {
  return 0 < this.F ? w.h(this, this.F - 1) : null;
};
k.ed = function() {
  if (0 === this.F) {
    throw Error("Can't pop empty vector");
  }
  if (1 === this.F) {
    return Ic(se, this.G);
  }
  if (1 < this.F - Kh(this)) {
    return new U(this.G, this.F - 1, this.shift, this.root, this.la.slice(0, -1), null);
  }
  var a = Ph(this, this.F - 2), b = Uh(this, this.shift, this.root), b = null == b ? V : b, c = this.F - 1;
  return 5 < this.shift && null == b.p[1] ? new U(this.G, c, this.shift - 5, b.p[0], a, null) : new U(this.G, c, this.shift, b, a, null);
};
k.Fd = function() {
  return 0 < this.F ? new ce(this, this.F - 1, null) : null;
};
k.S = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Od(this);
};
k.J = function(a, b) {
  return de(this, b);
};
k.Ed = function() {
  var a = this;
  return new Vh(a.F, a.shift, function() {
    var b = a.root;
    return Wh.g ? Wh.g(b) : Wh.call(null, b);
  }(), function() {
    var b = a.la;
    return Xh.g ? Xh.g(b) : Xh.call(null, b);
  }());
};
k.wa = function() {
  return ge(se, this.G);
};
k.Ka = function(a, b) {
  return Ud.h(this, b);
};
k.La = function(a, b, c) {
  a = 0;
  for (var d = c;;) {
    if (a < this.F) {
      var e = Ph(this, a);
      c = e.length;
      a: {
        for (var f = 0;;) {
          if (f < c) {
            var g = e[f], d = b.h ? b.h(d, g) : b.call(null, d, g);
            if (Td(d)) {
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
      if (Td(e)) {
        return b = e, I.g ? I.g(b) : I.call(null, b);
      }
      a += c;
      d = e;
    } else {
      return d;
    }
  }
};
k.za = function(a, b, c) {
  if ("number" === typeof b) {
    return Ac(this, b, c);
  }
  throw Error("Vector's key for assoc must be a number.");
};
k.W = function() {
  if (0 === this.F) {
    return null;
  }
  if (32 >= this.F) {
    return new Jd(this.la, 0);
  }
  var a;
  a: {
    a = this.root;
    for (var b = this.shift;;) {
      if (0 < b) {
        b -= 5, a = a.p[0];
      } else {
        a = a.p;
        break a;
      }
    }
    a = void 0;
  }
  return Yh.v ? Yh.v(this, a, 0, 0) : Yh.call(null, this, a, 0, 0);
};
k.M = function(a, b) {
  return new U(b, this.F, this.shift, this.root, this.la, this.A);
};
k.Y = function(a, b) {
  if (32 > this.F - Kh(this)) {
    for (var c = this.la.length, d = Array(c + 1), e = 0;;) {
      if (e < c) {
        d[e] = this.la[e], e += 1;
      } else {
        break;
      }
    }
    d[c] = b;
    return new U(this.G, this.F + 1, this.shift, this.root, d, null);
  }
  c = (d = this.F >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = Ih(null), d.p[0] = this.root, e = Lh(null, this.shift, new Hh(null, this.la)), d.p[1] = e) : d = Nh(this, this.shift, this.root, new Hh(null, this.la));
  return new U(this.G, this.F + 1, c, d, [b], null);
};
k.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.H(null, c);
      case 3:
        return this.ub(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.h = function(a, c) {
    return this.H(null, c);
  };
  a.j = function(a, c, d) {
    return this.ub(null, c, d);
  };
  return a;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Lb(b)));
};
k.g = function(a) {
  return this.H(null, a);
};
k.h = function(a, b) {
  return this.ub(null, a, b);
};
var V = new Hh(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), se = new U(null, 0, 5, V, [], 0);
function Zh(a, b) {
  var c = a.length, d = b ? a : Lb(a);
  if (32 > c) {
    return new U(null, c, 5, V, d, null);
  }
  for (var e = 32, f = (new U(null, 32, 5, V, d.slice(0, 32), null)).Ed(null);;) {
    if (e < c) {
      var g = e + 1, f = Ag.h(f, d[e]), e = g
    } else {
      return dd(f);
    }
  }
}
function $h(a) {
  return dd(Nb.j(cd, bd(se), a));
}
var ai = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = G(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    return a instanceof Jd && 0 === a.R ? Zh(a.p, !0) : $h(a);
  }
  a.D = 0;
  a.q = function(a) {
    a = A(a);
    return b(a);
  };
  a.k = b;
  return a;
}();
function ii(a, b, c, d, e, f) {
  this.Wb = a;
  this.Xc = b;
  this.R = c;
  this.ab = d;
  this.G = e;
  this.A = f;
  this.B = 32375020;
  this.K = 1536;
}
k = ii.prototype;
k.toString = function() {
  return qd(this);
};
k.equiv = function(a) {
  return this.J(null, a);
};
k.L = function() {
  return this.G;
};
k.hb = function() {
  if (this.ab + 1 < this.Xc.length) {
    var a;
    a = this.Wb;
    var b = this.Xc, c = this.R, d = this.ab + 1;
    a = Yh.v ? Yh.v(a, b, c, d) : Yh.call(null, a, b, c, d);
    return null == a ? null : a;
  }
  return ld(this);
};
k.S = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Od(this);
};
k.J = function(a, b) {
  return de(this, b);
};
k.wa = function() {
  return ge(se, this.G);
};
k.Ka = function(a, b) {
  var c = this;
  return Ud.h(function() {
    var a = c.Wb, b = c.R + c.ab, f = J(c.Wb);
    return ji.j ? ji.j(a, b, f) : ji.call(null, a, b, f);
  }(), b);
};
k.La = function(a, b, c) {
  var d = this;
  return Ud.j(function() {
    var a = d.Wb, b = d.R + d.ab, c = J(d.Wb);
    return ji.j ? ji.j(a, b, c) : ji.call(null, a, b, c);
  }(), b, c);
};
k.Fa = function() {
  return this.Xc[this.ab];
};
k.Xa = function() {
  if (this.ab + 1 < this.Xc.length) {
    var a;
    a = this.Wb;
    var b = this.Xc, c = this.R, d = this.ab + 1;
    a = Yh.v ? Yh.v(a, b, c, d) : Yh.call(null, a, b, c, d);
    return null == a ? Md : a;
  }
  return z(this);
};
k.W = function() {
  return this;
};
k.hf = function() {
  return Yf.h(this.Xc, this.ab);
};
k.jf = function() {
  var a = this.R + this.Xc.length;
  if (a < Xb(this.Wb)) {
    var b = this.Wb, c = Ph(this.Wb, a);
    return Yh.v ? Yh.v(b, c, a, 0) : Yh.call(null, b, c, a, 0);
  }
  return Md;
};
k.M = function(a, b) {
  var c = this.Wb, d = this.Xc, e = this.R, f = this.ab;
  return Yh.Q ? Yh.Q(c, d, e, f, b) : Yh.call(null, c, d, e, f, b);
};
k.Y = function(a, b) {
  return ee(b, this);
};
k.gf = function() {
  var a = this.R + this.Xc.length;
  if (a < Xb(this.Wb)) {
    var b = this.Wb, c = Ph(this.Wb, a);
    return Yh.v ? Yh.v(b, c, a, 0) : Yh.call(null, b, c, a, 0);
  }
  return null;
};
var Yh = function() {
  function a(a, b, c, d, l) {
    return new ii(a, b, c, d, l, null);
  }
  function b(a, b, c, d) {
    return new ii(a, b, c, d, null, null);
  }
  function c(a, b, c) {
    return new ii(a, Qh(a, b), b, c, null, null);
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
  d.v = b;
  d.Q = a;
  return d;
}();
function ki(a, b, c, d, e) {
  this.G = a;
  this.Ec = b;
  this.start = c;
  this.end = d;
  this.A = e;
  this.B = 166617887;
  this.K = 8192;
}
k = ki.prototype;
k.toString = function() {
  return qd(this);
};
k.equiv = function(a) {
  return this.J(null, a);
};
k.N = function(a, b) {
  return hc.j(this, b, null);
};
k.P = function(a, b, c) {
  return "number" === typeof b ? w.j(this, b, c) : c;
};
k.H = function(a, b) {
  return 0 > b || this.end <= this.start + b ? Oh(b, this.end - this.start) : w.h(this.Ec, this.start + b);
};
k.ub = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : w.j(this.Ec, this.start + b, c);
};
k.pd = function(a, b, c) {
  var d = this.start + b;
  a = this.G;
  c = Q.j(this.Ec, d, c);
  b = this.start;
  var e = this.end, d = d + 1, d = e > d ? e : d;
  return li.Q ? li.Q(a, c, b, d, null) : li.call(null, a, c, b, d, null);
};
k.L = function() {
  return this.G;
};
k.ma = function() {
  return new ki(this.G, this.Ec, this.start, this.end, this.A);
};
k.Z = function() {
  return this.end - this.start;
};
k.dd = function() {
  return w.h(this.Ec, this.end - 1);
};
k.ed = function() {
  if (this.start === this.end) {
    throw Error("Can't pop empty vector");
  }
  var a = this.G, b = this.Ec, c = this.start, d = this.end - 1;
  return li.Q ? li.Q(a, b, c, d, null) : li.call(null, a, b, c, d, null);
};
k.Fd = function() {
  return this.start !== this.end ? new ce(this, this.end - this.start - 1, null) : null;
};
k.S = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Od(this);
};
k.J = function(a, b) {
  return de(this, b);
};
k.wa = function() {
  return ge(se, this.G);
};
k.Ka = function(a, b) {
  return Ud.h(this, b);
};
k.La = function(a, b, c) {
  return Ud.j(this, b, c);
};
k.za = function(a, b, c) {
  if ("number" === typeof b) {
    return Ac(this, b, c);
  }
  throw Error("Subvec's key for assoc must be a number.");
};
k.W = function() {
  var a = this;
  return function(b) {
    return function d(e) {
      return e === a.end ? null : ee(w.h(a.Ec, e), new Tf(null, function() {
        return function() {
          return d(e + 1);
        };
      }(b), null, null));
    };
  }(this)(a.start);
};
k.M = function(a, b) {
  var c = this.Ec, d = this.start, e = this.end, f = this.A;
  return li.Q ? li.Q(b, c, d, e, f) : li.call(null, b, c, d, e, f);
};
k.Y = function(a, b) {
  var c = this.G, d = Ac(this.Ec, this.end, b), e = this.start, f = this.end + 1;
  return li.Q ? li.Q(c, d, e, f, null) : li.call(null, c, d, e, f, null);
};
k.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.H(null, c);
      case 3:
        return this.ub(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.h = function(a, c) {
    return this.H(null, c);
  };
  a.j = function(a, c, d) {
    return this.ub(null, c, d);
  };
  return a;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Lb(b)));
};
k.g = function(a) {
  return this.H(null, a);
};
k.h = function(a, b) {
  return this.ub(null, a, b);
};
function li(a, b, c, d, e) {
  for (;;) {
    if (b instanceof ki) {
      c = b.start + c, d = b.start + d, b = b.Ec;
    } else {
      var f = J(b);
      if (0 > c || 0 > d || c > f || d > f) {
        throw Error("Index out of bounds");
      }
      return new ki(a, b, c, d, e);
    }
  }
}
var ji = function() {
  function a(a, b, c) {
    return li(null, a, b, c, null);
  }
  function b(a, b) {
    return c.j(a, b, J(a));
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
function mi(a, b) {
  return a === b.ra ? b : new Hh(a, Lb(b.p));
}
function Wh(a) {
  return new Hh({}, Lb(a.p));
}
function Xh(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  Je(a, 0, b, 0, a.length);
  return b;
}
var oi = function ni(b, c, d, e) {
  d = mi(b.root.ra, d);
  var f = b.F - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var g = d.p[f];
    b = null != g ? ni(b, c - 5, g, e) : Lh(b.root.ra, c - 5, e);
  }
  d.p[f] = b;
  return d;
};
function Vh(a, b, c, d) {
  this.F = a;
  this.shift = b;
  this.root = c;
  this.la = d;
  this.B = 275;
  this.K = 88;
}
k = Vh.prototype;
k.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.N(null, c);
      case 3:
        return this.P(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.h = function(a, c) {
    return this.N(null, c);
  };
  a.j = function(a, c, d) {
    return this.P(null, c, d);
  };
  return a;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Lb(b)));
};
k.g = function(a) {
  return this.N(null, a);
};
k.h = function(a, b) {
  return this.P(null, a, b);
};
k.N = function(a, b) {
  return hc.j(this, b, null);
};
k.P = function(a, b, c) {
  return "number" === typeof b ? w.j(this, b, c) : c;
};
k.H = function(a, b) {
  if (this.root.ra) {
    return Qh(this, b)[b & 31];
  }
  throw Error("nth after persistent!");
};
k.ub = function(a, b, c) {
  return 0 <= b && b < this.F ? w.h(this, b) : c;
};
k.Z = function() {
  if (this.root.ra) {
    return this.F;
  }
  throw Error("count after persistent!");
};
k.xg = function(a, b, c) {
  var d = this;
  if (d.root.ra) {
    if (0 <= b && b < d.F) {
      return Kh(this) <= b ? d.la[b & 31] = c : (a = function() {
        return function f(a, h) {
          var l = mi(d.root.ra, h);
          if (0 === a) {
            l.p[b & 31] = c;
          } else {
            var p = b >>> a & 31, s = f(a - 5, l.p[p]);
            l.p[p] = s;
          }
          return l;
        };
      }(this).call(null, d.shift, d.root), d.root = a), this;
    }
    if (b === d.F) {
      return cd(this, c);
    }
    throw Error("Index " + u.g(b) + " out of bounds for TransientVector of length" + u.g(d.F));
  }
  throw Error("assoc! after persistent!");
};
k.ae = function(a, b, c) {
  if ("number" === typeof b) {
    return fd(this, b, c);
  }
  throw Error("TransientVector's key for assoc! must be a number.");
};
k.nd = function(a, b) {
  if (this.root.ra) {
    if (32 > this.F - Kh(this)) {
      this.la[this.F & 31] = b;
    } else {
      var c = new Hh(this.root.ra, this.la), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.la = d;
      if (this.F >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = Lh(this.root.ra, this.shift, c);
        this.root = new Hh(this.root.ra, d);
        this.shift = e;
      } else {
        this.root = oi(this, this.shift, this.root, c);
      }
    }
    this.F += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
k.od = function() {
  if (this.root.ra) {
    this.root.ra = null;
    var a = this.F - Kh(this), b = Array(a);
    Je(this.la, 0, b, 0, a);
    return new U(null, this.F, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
function pi(a, b, c, d) {
  this.G = a;
  this.Eb = b;
  this.xc = c;
  this.A = d;
  this.K = 0;
  this.B = 31850572;
}
k = pi.prototype;
k.toString = function() {
  return qd(this);
};
k.equiv = function(a) {
  return this.J(null, a);
};
k.L = function() {
  return this.G;
};
k.S = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Od(this);
};
k.J = function(a, b) {
  return de(this, b);
};
k.wa = function() {
  return ge(Md, this.G);
};
k.Fa = function() {
  return C(this.Eb);
};
k.Xa = function() {
  var a = F(this.Eb);
  return a ? new pi(this.G, a, this.xc, null) : null == this.xc ? Yb(this) : new pi(this.G, this.xc, null, null);
};
k.W = function() {
  return this;
};
k.M = function(a, b) {
  return new pi(b, this.Eb, this.xc, this.A);
};
k.Y = function(a, b) {
  return ee(b, this);
};
function qi(a, b, c, d, e) {
  this.G = a;
  this.count = b;
  this.Eb = c;
  this.xc = d;
  this.A = e;
  this.B = 31858766;
  this.K = 8192;
}
k = qi.prototype;
k.toString = function() {
  return qd(this);
};
k.equiv = function(a) {
  return this.J(null, a);
};
k.L = function() {
  return this.G;
};
k.ma = function() {
  return new qi(this.G, this.count, this.Eb, this.xc, this.A);
};
k.Z = function() {
  return this.count;
};
k.dd = function() {
  return C(this.Eb);
};
k.ed = function() {
  if (q(this.Eb)) {
    var a = F(this.Eb);
    return a ? new qi(this.G, this.count - 1, a, this.xc, null) : new qi(this.G, this.count - 1, A(this.xc), se, null);
  }
  return this;
};
k.S = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Od(this);
};
k.J = function(a, b) {
  return de(this, b);
};
k.wa = function() {
  return ri;
};
k.Fa = function() {
  return C(this.Eb);
};
k.Xa = function() {
  return E(A(this));
};
k.W = function() {
  var a = A(this.xc), b = this.Eb;
  return q(q(b) ? b : a) ? new pi(null, this.Eb, A(a), null) : null;
};
k.M = function(a, b) {
  return new qi(b, this.count, this.Eb, this.xc, this.A);
};
k.Y = function(a, b) {
  var c;
  q(this.Eb) ? (c = this.xc, c = new qi(this.G, this.count + 1, this.Eb, te.h(q(c) ? c : se, b), null)) : c = new qi(this.G, this.count + 1, te.h(this.Eb, b), se, null);
  return c;
};
var ri = new qi(null, 0, null, se, 0);
function si() {
  this.K = 0;
  this.B = 2097152;
}
si.prototype.J = function() {
  return!1;
};
si.prototype.equiv = function(a) {
  return this.J(null, a);
};
var ti = new si;
function ui(a, b) {
  return Ye(Ge(b) ? J(a) === J(b) ? Gg(gf, kh.h(function(a) {
    return Fd.h(P.j(b, C(a), ti), ie(a));
  }, a)) : null : null);
}
function vi(a) {
  this.da = a;
}
vi.prototype.next = function() {
  if (null != this.da) {
    var a = C(this.da);
    this.da = F(this.da);
    return{done:!1, value:a};
  }
  return{done:!0, value:null};
};
function wi(a) {
  return new vi(A(a));
}
function xi(a) {
  this.da = a;
}
xi.prototype.next = function() {
  if (null != this.da) {
    var a = C(this.da), b = O.j(a, 0, null), a = O.j(a, 1, null);
    this.da = F(this.da);
    return{done:!1, value:[b, a]};
  }
  return{done:!0, value:null};
};
function yi(a) {
  return new xi(A(a));
}
function zi(a) {
  this.da = a;
}
zi.prototype.next = function() {
  if (null != this.da) {
    var a = C(this.da);
    this.da = F(this.da);
    return{done:!1, value:[a, a]};
  }
  return{done:!0, value:null};
};
function Ai(a) {
  return new zi(A(a));
}
function Bi(a, b) {
  var c = a.p;
  if (b instanceof W) {
    a: {
      for (var d = c.length, e = b.ja, f = 0;;) {
        if (d <= f) {
          c = -1;
          break a;
        }
        var g = c[f];
        if (g instanceof W && e === g.ja) {
          c = f;
          break a;
        }
        f += 2;
      }
      c = void 0;
    }
  } else {
    if (d = ja(b), q(q(d) ? d : "number" === typeof b)) {
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
      if (b instanceof Hd) {
        a: {
          d = c.length;
          e = b.Hb;
          for (f = 0;;) {
            if (d <= f) {
              c = -1;
              break a;
            }
            g = c[f];
            if (g instanceof Hd && e === g.Hb) {
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
              if (Fd.h(b, c[e])) {
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
function Ci(a, b, c) {
  this.p = a;
  this.R = b;
  this.tb = c;
  this.K = 0;
  this.B = 32374990;
}
k = Ci.prototype;
k.toString = function() {
  return qd(this);
};
k.equiv = function(a) {
  return this.J(null, a);
};
k.L = function() {
  return this.tb;
};
k.hb = function() {
  return this.R < this.p.length - 2 ? new Ci(this.p, this.R + 2, this.tb) : null;
};
k.Z = function() {
  return(this.p.length - this.R) / 2;
};
k.S = function() {
  return Od(this);
};
k.J = function(a, b) {
  return de(this, b);
};
k.wa = function() {
  return ge(Md, this.tb);
};
k.Ka = function(a, b) {
  return he.h(b, this);
};
k.La = function(a, b, c) {
  return he.j(b, c, this);
};
k.Fa = function() {
  return new U(null, 2, 5, V, [this.p[this.R], this.p[this.R + 1]], null);
};
k.Xa = function() {
  return this.R < this.p.length - 2 ? new Ci(this.p, this.R + 2, this.tb) : Md;
};
k.W = function() {
  return this;
};
k.M = function(a, b) {
  return new Ci(this.p, this.R, b);
};
k.Y = function(a, b) {
  return ee(b, this);
};
function n(a, b, c, d) {
  this.G = a;
  this.F = b;
  this.p = c;
  this.A = d;
  this.B = 16647951;
  this.K = 8196;
}
k = n.prototype;
k.toString = function() {
  return qd(this);
};
k.equiv = function(a) {
  return this.J(null, a);
};
k.keys = function() {
  return wi(Di.g ? Di.g(this) : Di.call(null, this));
};
k.entries = function() {
  return yi(A(this));
};
k.values = function() {
  return wi(Ei.g ? Ei.g(this) : Ei.call(null, this));
};
k.has = function(a) {
  return Ze(this, a);
};
k.get = function(a) {
  return this.N(null, a);
};
k.forEach = function(a) {
  for (var b = A(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.H(null, e), g = O.j(f, 0, null), f = O.j(f, 1, null);
      a.h ? a.h(f, g) : a.call(null, f, g);
      e += 1;
    } else {
      if (b = A(b)) {
        T(b) ? (c = x(b), b = z(b), g = c, d = J(c), c = g) : (c = C(b), g = O.j(c, 0, null), c = f = O.j(c, 1, null), a.h ? a.h(c, g) : a.call(null, c, g), b = F(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
k.N = function(a, b) {
  return hc.j(this, b, null);
};
k.P = function(a, b, c) {
  a = Bi(this, b);
  return-1 === a ? c : this.p[a + 1];
};
k.Xd = function(a, b, c) {
  a = this.p.length;
  for (var d = 0;;) {
    if (d < a) {
      var e = this.p[d], f = this.p[d + 1];
      c = b.j ? b.j(c, e, f) : b.call(null, c, e, f);
      if (Td(c)) {
        return b = c, I.g ? I.g(b) : I.call(null, b);
      }
      d += 2;
    } else {
      return c;
    }
  }
};
k.L = function() {
  return this.G;
};
k.ma = function() {
  return new n(this.G, this.F, this.p, this.A);
};
k.Z = function() {
  return this.F;
};
k.S = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Pd(this);
};
k.J = function(a, b) {
  return ui(this, b);
};
k.Ed = function() {
  return new Fi({}, this.p.length, Lb(this.p));
};
k.wa = function() {
  return Ic(Gi, this.G);
};
k.Ka = function(a, b) {
  return he.h(b, this);
};
k.La = function(a, b, c) {
  return he.j(b, c, this);
};
k.Ra = function(a, b) {
  if (0 <= Bi(this, b)) {
    var c = this.p.length, d = c - 2;
    if (0 === d) {
      return Yb(this);
    }
    for (var d = Array(d), e = 0, f = 0;;) {
      if (e >= c) {
        return new n(this.G, this.F - 1, d, null);
      }
      Fd.h(b, this.p[e]) || (d[f] = this.p[e], d[f + 1] = this.p[e + 1], f += 2);
      e += 2;
    }
  } else {
    return this;
  }
};
k.za = function(a, b, c) {
  a = Bi(this, b);
  if (-1 === a) {
    if (this.F < Hi) {
      a = this.p;
      for (var d = a.length, e = Array(d + 2), f = 0;;) {
        if (f < d) {
          e[f] = a[f], f += 1;
        } else {
          break;
        }
      }
      e[d] = b;
      e[d + 1] = c;
      return new n(this.G, this.F + 1, e, null);
    }
    return Ic(kc(Ah.h(Ii, this), b, c), this.G);
  }
  if (c === this.p[a + 1]) {
    return this;
  }
  b = Lb(this.p);
  b[a + 1] = c;
  return new n(this.G, this.F, b, null);
};
k.ue = function(a, b) {
  return-1 !== Bi(this, b);
};
k.W = function() {
  var a = this.p;
  return 0 <= a.length - 2 ? new Ci(a, 0, null) : null;
};
k.M = function(a, b) {
  return new n(b, this.F, this.p, this.A);
};
k.Y = function(a, b) {
  if (He(b)) {
    return kc(this, w.h(b, 0), w.h(b, 1));
  }
  for (var c = this, d = A(b);;) {
    if (null == d) {
      return c;
    }
    var e = C(d);
    if (He(e)) {
      c = kc(c, w.h(e, 0), w.h(e, 1)), d = F(d);
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
        return this.P(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.h = function(a, c) {
    return this.N(null, c);
  };
  a.j = function(a, c, d) {
    return this.P(null, c, d);
  };
  return a;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Lb(b)));
};
k.g = function(a) {
  return this.N(null, a);
};
k.h = function(a, b) {
  return this.P(null, a, b);
};
var Gi = new n(null, 0, [], null), Hi = 8;
function Ji(a, b, c) {
  a = b ? a : Lb(a);
  if (c) {
    return new n(null, a.length / 2, a, null);
  }
  c = a.length;
  b = 0;
  for (var d = bd(Gi);;) {
    if (b < c) {
      var e = b + 2, d = ed(d, a[b], a[b + 1]);
      b = e;
    } else {
      return dd(d);
    }
  }
}
function Fi(a, b, c) {
  this.Kd = a;
  this.Pd = b;
  this.p = c;
  this.K = 56;
  this.B = 258;
}
k = Fi.prototype;
k.ae = function(a, b, c) {
  var d = this;
  if (q(d.Kd)) {
    a = Bi(this, b);
    if (-1 === a) {
      return d.Pd + 2 <= 2 * Hi ? (d.Pd += 2, d.p.push(b), d.p.push(c), this) : Bg.j(function() {
        var a = d.Pd, b = d.p;
        return Ki.h ? Ki.h(a, b) : Ki.call(null, a, b);
      }(), b, c);
    }
    c !== d.p[a + 1] && (d.p[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
k.nd = function(a, b) {
  if (q(this.Kd)) {
    if (b ? b.B & 2048 || b.Mh || (b.B ? 0 : Ib(qc, b)) : Ib(qc, b)) {
      return ed(this, Kf.g ? Kf.g(b) : Kf.call(null, b), Lf.g ? Lf.g(b) : Lf.call(null, b));
    }
    for (var c = A(b), d = this;;) {
      var e = C(c);
      if (q(e)) {
        var f = e, c = F(c), d = ed(d, function() {
          var a = f;
          return Kf.g ? Kf.g(a) : Kf.call(null, a);
        }(), function() {
          var a = f;
          return Lf.g ? Lf.g(a) : Lf.call(null, a);
        }())
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent!");
  }
};
k.od = function() {
  if (q(this.Kd)) {
    return this.Kd = !1, new n(null, Af(this.Pd, 2), this.p, null);
  }
  throw Error("persistent! called twice");
};
k.N = function(a, b) {
  return hc.j(this, b, null);
};
k.P = function(a, b, c) {
  if (q(this.Kd)) {
    return a = Bi(this, b), -1 === a ? c : this.p[a + 1];
  }
  throw Error("lookup after persistent!");
};
k.Z = function() {
  if (q(this.Kd)) {
    return Af(this.Pd, 2);
  }
  throw Error("count after persistent!");
};
function Ki(a, b) {
  for (var c = bd(Ii), d = 0;;) {
    if (d < a) {
      c = Bg.j(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function Li() {
  this.I = !1;
}
function Mi(a, b) {
  return a === b ? !0 : X(a, b) ? !0 : Fd.h(a, b);
}
var Ni = function() {
  function a(a, b, c, g, h) {
    a = Lb(a);
    a[b] = c;
    a[g] = h;
    return a;
  }
  function b(a, b, c) {
    a = Lb(a);
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
  c.Q = a;
  return c;
}();
function Oi(a, b) {
  var c = Array(a.length - 2);
  Je(a, 0, c, 0, 2 * b);
  Je(a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
  return c;
}
var Pi = function() {
  function a(a, b, c, g, h, l) {
    a = a.Ld(b);
    a.p[c] = g;
    a.p[h] = l;
    return a;
  }
  function b(a, b, c, g) {
    a = a.Ld(b);
    a.p[c] = g;
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
  c.v = b;
  c.Wa = a;
  return c;
}();
function Qi(a, b, c) {
  for (var d = a.length, e = 0, f = c;;) {
    if (e < d) {
      c = a[e];
      if (null != c) {
        var g = a[e + 1];
        c = b.j ? b.j(f, c, g) : b.call(null, f, c, g);
      } else {
        c = a[e + 1], c = null != c ? c.vd(b, f) : f;
      }
      if (Td(c)) {
        return a = c, I.g ? I.g(a) : I.call(null, a);
      }
      e += 2;
      f = c;
    } else {
      return f;
    }
  }
}
function Ri(a, b, c) {
  this.ra = a;
  this.xa = b;
  this.p = c;
}
k = Ri.prototype;
k.Ld = function(a) {
  if (a === this.ra) {
    return this;
  }
  var b = Ef(this.xa), c = Array(0 > b ? 4 : 2 * (b + 1));
  Je(this.p, 0, c, 0, 2 * b);
  return new Ri(a, this.xa, c);
};
k.ge = function() {
  var a = this.p;
  return Si.g ? Si.g(a) : Si.call(null, a);
};
k.vd = function(a, b) {
  return Qi(this.p, a, b);
};
k.hd = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.xa & e)) {
    return d;
  }
  var f = Ef(this.xa & e - 1), e = this.p[2 * f], f = this.p[2 * f + 1];
  return null == e ? f.hd(a + 5, b, c, d) : Mi(c, e) ? f : d;
};
k.tc = function(a, b, c, d, e, f) {
  var g = 1 << (c >>> b & 31), h = Ef(this.xa & g - 1);
  if (0 === (this.xa & g)) {
    var l = Ef(this.xa);
    if (2 * l < this.p.length) {
      var p = this.Ld(a), s = p.p;
      f.I = !0;
      Ke(s, 2 * h, s, 2 * (h + 1), 2 * (l - h));
      s[2 * h] = d;
      s[2 * h + 1] = e;
      p.xa |= g;
      return p;
    }
    if (16 <= l) {
      g = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      g[c >>> b & 31] = Ti.tc(a, b + 5, c, d, e, f);
      for (p = h = 0;;) {
        if (32 > h) {
          0 !== (this.xa >>> h & 1) && (g[h] = null != this.p[p] ? Ti.tc(a, b + 5, Cd(this.p[p]), this.p[p], this.p[p + 1], f) : this.p[p + 1], p += 2), h += 1;
        } else {
          break;
        }
      }
      return new Ui(a, l + 1, g);
    }
    s = Array(2 * (l + 4));
    Je(this.p, 0, s, 0, 2 * h);
    s[2 * h] = d;
    s[2 * h + 1] = e;
    Je(this.p, 2 * h, s, 2 * (h + 1), 2 * (l - h));
    f.I = !0;
    p = this.Ld(a);
    p.p = s;
    p.xa |= g;
    return p;
  }
  var t = this.p[2 * h], v = this.p[2 * h + 1];
  if (null == t) {
    return l = v.tc(a, b + 5, c, d, e, f), l === v ? this : Pi.v(this, a, 2 * h + 1, l);
  }
  if (Mi(d, t)) {
    return e === v ? this : Pi.v(this, a, 2 * h + 1, e);
  }
  f.I = !0;
  return Pi.Wa(this, a, 2 * h, null, 2 * h + 1, function() {
    var f = b + 5;
    return Vi.Ib ? Vi.Ib(a, f, t, v, c, d, e) : Vi.call(null, a, f, t, v, c, d, e);
  }());
};
k.sc = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), g = Ef(this.xa & f - 1);
  if (0 === (this.xa & f)) {
    var h = Ef(this.xa);
    if (16 <= h) {
      f = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      f[b >>> a & 31] = Ti.sc(a + 5, b, c, d, e);
      for (var l = g = 0;;) {
        if (32 > g) {
          0 !== (this.xa >>> g & 1) && (f[g] = null != this.p[l] ? Ti.sc(a + 5, Cd(this.p[l]), this.p[l], this.p[l + 1], e) : this.p[l + 1], l += 2), g += 1;
        } else {
          break;
        }
      }
      return new Ui(null, h + 1, f);
    }
    l = Array(2 * (h + 1));
    Je(this.p, 0, l, 0, 2 * g);
    l[2 * g] = c;
    l[2 * g + 1] = d;
    Je(this.p, 2 * g, l, 2 * (g + 1), 2 * (h - g));
    e.I = !0;
    return new Ri(null, this.xa | f, l);
  }
  var p = this.p[2 * g], s = this.p[2 * g + 1];
  if (null == p) {
    return h = s.sc(a + 5, b, c, d, e), h === s ? this : new Ri(null, this.xa, Ni.j(this.p, 2 * g + 1, h));
  }
  if (Mi(c, p)) {
    return d === s ? this : new Ri(null, this.xa, Ni.j(this.p, 2 * g + 1, d));
  }
  e.I = !0;
  return new Ri(null, this.xa, Ni.Q(this.p, 2 * g, null, 2 * g + 1, function() {
    var e = a + 5;
    return Vi.Wa ? Vi.Wa(e, p, s, b, c, d) : Vi.call(null, e, p, s, b, c, d);
  }()));
};
k.he = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if (0 === (this.xa & d)) {
    return this;
  }
  var e = Ef(this.xa & d - 1), f = this.p[2 * e], g = this.p[2 * e + 1];
  return null == f ? (a = g.he(a + 5, b, c), a === g ? this : null != a ? new Ri(null, this.xa, Ni.j(this.p, 2 * e + 1, a)) : this.xa === d ? null : new Ri(null, this.xa ^ d, Oi(this.p, e))) : Mi(c, f) ? new Ri(null, this.xa ^ d, Oi(this.p, e)) : this;
};
var Ti = new Ri(null, 0, []);
function Ui(a, b, c) {
  this.ra = a;
  this.F = b;
  this.p = c;
}
k = Ui.prototype;
k.Ld = function(a) {
  return a === this.ra ? this : new Ui(a, this.F, Lb(this.p));
};
k.ge = function() {
  var a = this.p;
  return Wi.g ? Wi.g(a) : Wi.call(null, a);
};
k.vd = function(a, b) {
  for (var c = this.p.length, d = 0, e = b;;) {
    if (d < c) {
      var f = this.p[d];
      if (null != f && (e = f.vd(a, e), Td(e))) {
        return c = e, I.g ? I.g(c) : I.call(null, c);
      }
      d += 1;
    } else {
      return e;
    }
  }
};
k.hd = function(a, b, c, d) {
  var e = this.p[b >>> a & 31];
  return null != e ? e.hd(a + 5, b, c, d) : d;
};
k.tc = function(a, b, c, d, e, f) {
  var g = c >>> b & 31, h = this.p[g];
  if (null == h) {
    return a = Pi.v(this, a, g, Ti.tc(a, b + 5, c, d, e, f)), a.F += 1, a;
  }
  b = h.tc(a, b + 5, c, d, e, f);
  return b === h ? this : Pi.v(this, a, g, b);
};
k.sc = function(a, b, c, d, e) {
  var f = b >>> a & 31, g = this.p[f];
  if (null == g) {
    return new Ui(null, this.F + 1, Ni.j(this.p, f, Ti.sc(a + 5, b, c, d, e)));
  }
  a = g.sc(a + 5, b, c, d, e);
  return a === g ? this : new Ui(null, this.F, Ni.j(this.p, f, a));
};
k.he = function(a, b, c) {
  var d = b >>> a & 31, e = this.p[d];
  if (null != e) {
    a = e.he(a + 5, b, c);
    if (a === e) {
      d = this;
    } else {
      if (null == a) {
        if (8 >= this.F) {
          a: {
            e = this.p;
            a = e.length;
            b = Array(2 * (this.F - 1));
            c = 0;
            for (var f = 1, g = 0;;) {
              if (c < a) {
                c !== d && null != e[c] && (b[f] = e[c], f += 2, g |= 1 << c), c += 1;
              } else {
                d = new Ri(null, g, b);
                break a;
              }
            }
            d = void 0;
          }
        } else {
          d = new Ui(null, this.F - 1, Ni.j(this.p, d, a));
        }
      } else {
        d = new Ui(null, this.F, Ni.j(this.p, d, a));
      }
    }
    return d;
  }
  return this;
};
function Xi(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (Mi(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return-1;
    }
  }
}
function Yi(a, b, c, d) {
  this.ra = a;
  this.Vc = b;
  this.F = c;
  this.p = d;
}
k = Yi.prototype;
k.Ld = function(a) {
  if (a === this.ra) {
    return this;
  }
  var b = Array(2 * (this.F + 1));
  Je(this.p, 0, b, 0, 2 * this.F);
  return new Yi(a, this.Vc, this.F, b);
};
k.ge = function() {
  var a = this.p;
  return Si.g ? Si.g(a) : Si.call(null, a);
};
k.vd = function(a, b) {
  return Qi(this.p, a, b);
};
k.hd = function(a, b, c, d) {
  a = Xi(this.p, this.F, c);
  return 0 > a ? d : Mi(c, this.p[a]) ? this.p[a + 1] : d;
};
k.tc = function(a, b, c, d, e, f) {
  if (c === this.Vc) {
    b = Xi(this.p, this.F, d);
    if (-1 === b) {
      if (this.p.length > 2 * this.F) {
        return a = Pi.Wa(this, a, 2 * this.F, d, 2 * this.F + 1, e), f.I = !0, a.F += 1, a;
      }
      c = this.p.length;
      b = Array(c + 2);
      Je(this.p, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      f.I = !0;
      f = this.F + 1;
      a === this.ra ? (this.p = b, this.F = f, a = this) : a = new Yi(this.ra, this.Vc, f, b);
      return a;
    }
    return this.p[b + 1] === e ? this : Pi.v(this, a, b + 1, e);
  }
  return(new Ri(a, 1 << (this.Vc >>> b & 31), [null, this, null, null])).tc(a, b, c, d, e, f);
};
k.sc = function(a, b, c, d, e) {
  return b === this.Vc ? (a = Xi(this.p, this.F, c), -1 === a ? (a = 2 * this.F, b = Array(a + 2), Je(this.p, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.I = !0, new Yi(null, this.Vc, this.F + 1, b)) : Fd.h(this.p[a], d) ? this : new Yi(null, this.Vc, this.F, Ni.j(this.p, a + 1, d))) : (new Ri(null, 1 << (this.Vc >>> a & 31), [null, this])).sc(a, b, c, d, e);
};
k.he = function(a, b, c) {
  a = Xi(this.p, this.F, c);
  return-1 === a ? this : 1 === this.F ? null : new Yi(null, this.Vc, this.F - 1, Oi(this.p, Af(a, 2)));
};
var Vi = function() {
  function a(a, b, c, g, h, l, p) {
    var s = Cd(c);
    if (s === h) {
      return new Yi(null, s, 2, [c, g, l, p]);
    }
    var t = new Li;
    return Ti.tc(a, b, s, c, g, t).tc(a, b, h, l, p, t);
  }
  function b(a, b, c, g, h, l) {
    var p = Cd(b);
    if (p === g) {
      return new Yi(null, p, 2, [b, c, h, l]);
    }
    var s = new Li;
    return Ti.sc(a, p, b, c, s).sc(a, g, h, l, s);
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
  c.Wa = b;
  c.Ib = a;
  return c;
}();
function Zi(a, b, c, d, e) {
  this.G = a;
  this.jd = b;
  this.R = c;
  this.da = d;
  this.A = e;
  this.K = 0;
  this.B = 32374860;
}
k = Zi.prototype;
k.toString = function() {
  return qd(this);
};
k.equiv = function(a) {
  return this.J(null, a);
};
k.L = function() {
  return this.G;
};
k.S = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Od(this);
};
k.J = function(a, b) {
  return de(this, b);
};
k.wa = function() {
  return ge(Md, this.G);
};
k.Ka = function(a, b) {
  return he.h(b, this);
};
k.La = function(a, b, c) {
  return he.j(b, c, this);
};
k.Fa = function() {
  return null == this.da ? new U(null, 2, 5, V, [this.jd[this.R], this.jd[this.R + 1]], null) : C(this.da);
};
k.Xa = function() {
  if (null == this.da) {
    var a = this.jd, b = this.R + 2;
    return Si.j ? Si.j(a, b, null) : Si.call(null, a, b, null);
  }
  var a = this.jd, b = this.R, c = F(this.da);
  return Si.j ? Si.j(a, b, c) : Si.call(null, a, b, c);
};
k.W = function() {
  return this;
};
k.M = function(a, b) {
  return new Zi(b, this.jd, this.R, this.da, this.A);
};
k.Y = function(a, b) {
  return ee(b, this);
};
var Si = function() {
  function a(a, b, c) {
    if (null == c) {
      for (c = a.length;;) {
        if (b < c) {
          if (null != a[b]) {
            return new Zi(null, a, b, null, null);
          }
          var g = a[b + 1];
          if (q(g) && (g = g.ge(), q(g))) {
            return new Zi(null, a, b + 2, g, null);
          }
          b += 2;
        } else {
          return null;
        }
      }
    } else {
      return new Zi(null, a, b, c, null);
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
function $i(a, b, c, d, e) {
  this.G = a;
  this.jd = b;
  this.R = c;
  this.da = d;
  this.A = e;
  this.K = 0;
  this.B = 32374860;
}
k = $i.prototype;
k.toString = function() {
  return qd(this);
};
k.equiv = function(a) {
  return this.J(null, a);
};
k.L = function() {
  return this.G;
};
k.S = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Od(this);
};
k.J = function(a, b) {
  return de(this, b);
};
k.wa = function() {
  return ge(Md, this.G);
};
k.Ka = function(a, b) {
  return he.h(b, this);
};
k.La = function(a, b, c) {
  return he.j(b, c, this);
};
k.Fa = function() {
  return C(this.da);
};
k.Xa = function() {
  var a = this.jd, b = this.R, c = F(this.da);
  return Wi.v ? Wi.v(null, a, b, c) : Wi.call(null, null, a, b, c);
};
k.W = function() {
  return this;
};
k.M = function(a, b) {
  return new $i(b, this.jd, this.R, this.da, this.A);
};
k.Y = function(a, b) {
  return ee(b, this);
};
var Wi = function() {
  function a(a, b, c, g) {
    if (null == g) {
      for (g = b.length;;) {
        if (c < g) {
          var h = b[c];
          if (q(h) && (h = h.ge(), q(h))) {
            return new $i(a, b, c + 1, h, null);
          }
          c += 1;
        } else {
          return null;
        }
      }
    } else {
      return new $i(a, b, c, g, null);
    }
  }
  function b(a) {
    return c.v(null, a, 0, null);
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
  c.v = a;
  return c;
}();
function aj(a, b, c, d, e, f) {
  this.G = a;
  this.F = b;
  this.root = c;
  this.ib = d;
  this.Gb = e;
  this.A = f;
  this.B = 16123663;
  this.K = 8196;
}
k = aj.prototype;
k.toString = function() {
  return qd(this);
};
k.equiv = function(a) {
  return this.J(null, a);
};
k.keys = function() {
  return wi(Di.g ? Di.g(this) : Di.call(null, this));
};
k.entries = function() {
  return yi(A(this));
};
k.values = function() {
  return wi(Ei.g ? Ei.g(this) : Ei.call(null, this));
};
k.has = function(a) {
  return Ze(this, a);
};
k.get = function(a) {
  return this.N(null, a);
};
k.forEach = function(a) {
  for (var b = A(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.H(null, e), g = O.j(f, 0, null), f = O.j(f, 1, null);
      a.h ? a.h(f, g) : a.call(null, f, g);
      e += 1;
    } else {
      if (b = A(b)) {
        T(b) ? (c = x(b), b = z(b), g = c, d = J(c), c = g) : (c = C(b), g = O.j(c, 0, null), c = f = O.j(c, 1, null), a.h ? a.h(c, g) : a.call(null, c, g), b = F(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
k.N = function(a, b) {
  return hc.j(this, b, null);
};
k.P = function(a, b, c) {
  return null == b ? this.ib ? this.Gb : c : null == this.root ? c : this.root.hd(0, Cd(b), b, c);
};
k.Xd = function(a, b, c) {
  this.ib && (a = this.Gb, c = b.j ? b.j(c, null, a) : b.call(null, c, null, a));
  return Td(c) ? I.g ? I.g(c) : I.call(null, c) : null != this.root ? this.root.vd(b, c) : c;
};
k.L = function() {
  return this.G;
};
k.ma = function() {
  return new aj(this.G, this.F, this.root, this.ib, this.Gb, this.A);
};
k.Z = function() {
  return this.F;
};
k.S = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Pd(this);
};
k.J = function(a, b) {
  return ui(this, b);
};
k.Ed = function() {
  return new bj({}, this.root, this.F, this.ib, this.Gb);
};
k.wa = function() {
  return Ic(Ii, this.G);
};
k.Ra = function(a, b) {
  if (null == b) {
    return this.ib ? new aj(this.G, this.F - 1, this.root, !1, null, null) : this;
  }
  if (null == this.root) {
    return this;
  }
  var c = this.root.he(0, Cd(b), b);
  return c === this.root ? this : new aj(this.G, this.F - 1, c, this.ib, this.Gb, null);
};
k.za = function(a, b, c) {
  if (null == b) {
    return this.ib && c === this.Gb ? this : new aj(this.G, this.ib ? this.F : this.F + 1, this.root, !0, c, null);
  }
  a = new Li;
  b = (null == this.root ? Ti : this.root).sc(0, Cd(b), b, c, a);
  return b === this.root ? this : new aj(this.G, a.I ? this.F + 1 : this.F, b, this.ib, this.Gb, null);
};
k.ue = function(a, b) {
  return null == b ? this.ib : null == this.root ? !1 : this.root.hd(0, Cd(b), b, Le) !== Le;
};
k.W = function() {
  if (0 < this.F) {
    var a = null != this.root ? this.root.ge() : null;
    return this.ib ? ee(new U(null, 2, 5, V, [null, this.Gb], null), a) : a;
  }
  return null;
};
k.M = function(a, b) {
  return new aj(b, this.F, this.root, this.ib, this.Gb, this.A);
};
k.Y = function(a, b) {
  if (He(b)) {
    return kc(this, w.h(b, 0), w.h(b, 1));
  }
  for (var c = this, d = A(b);;) {
    if (null == d) {
      return c;
    }
    var e = C(d);
    if (He(e)) {
      c = kc(c, w.h(e, 0), w.h(e, 1)), d = F(d);
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
        return this.P(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.h = function(a, c) {
    return this.N(null, c);
  };
  a.j = function(a, c, d) {
    return this.P(null, c, d);
  };
  return a;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Lb(b)));
};
k.g = function(a) {
  return this.N(null, a);
};
k.h = function(a, b) {
  return this.P(null, a, b);
};
var Ii = new aj(null, 0, null, !1, null, 0);
function ve(a, b) {
  for (var c = a.length, d = 0, e = bd(Ii);;) {
    if (d < c) {
      var f = d + 1, e = e.ae(null, a[d], b[d]), d = f
    } else {
      return dd(e);
    }
  }
}
function bj(a, b, c, d, e) {
  this.ra = a;
  this.root = b;
  this.count = c;
  this.ib = d;
  this.Gb = e;
  this.K = 56;
  this.B = 258;
}
k = bj.prototype;
k.ae = function(a, b, c) {
  return cj(this, b, c);
};
k.nd = function(a, b) {
  return dj(this, b);
};
k.od = function() {
  var a;
  if (this.ra) {
    this.ra = null, a = new aj(null, this.count, this.root, this.ib, this.Gb, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
k.N = function(a, b) {
  return null == b ? this.ib ? this.Gb : null : null == this.root ? null : this.root.hd(0, Cd(b), b);
};
k.P = function(a, b, c) {
  return null == b ? this.ib ? this.Gb : c : null == this.root ? c : this.root.hd(0, Cd(b), b, c);
};
k.Z = function() {
  if (this.ra) {
    return this.count;
  }
  throw Error("count after persistent!");
};
function dj(a, b) {
  if (a.ra) {
    if (b ? b.B & 2048 || b.Mh || (b.B ? 0 : Ib(qc, b)) : Ib(qc, b)) {
      return cj(a, Kf.g ? Kf.g(b) : Kf.call(null, b), Lf.g ? Lf.g(b) : Lf.call(null, b));
    }
    for (var c = A(b), d = a;;) {
      var e = C(c);
      if (q(e)) {
        var f = e, c = F(c), d = cj(d, function() {
          var a = f;
          return Kf.g ? Kf.g(a) : Kf.call(null, a);
        }(), function() {
          var a = f;
          return Lf.g ? Lf.g(a) : Lf.call(null, a);
        }())
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent");
  }
}
function cj(a, b, c) {
  if (a.ra) {
    if (null == b) {
      a.Gb !== c && (a.Gb = c), a.ib || (a.count += 1, a.ib = !0);
    } else {
      var d = new Li;
      b = (null == a.root ? Ti : a.root).tc(a.ra, 0, Cd(b), b, c, d);
      b !== a.root && (a.root = b);
      d.I && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
function ej(a, b, c) {
  for (var d = b;;) {
    if (null != a) {
      b = c ? a.left : a.right, d = te.h(d, a), a = b;
    } else {
      return d;
    }
  }
}
function fj(a, b, c, d, e) {
  this.G = a;
  this.stack = b;
  this.qe = c;
  this.F = d;
  this.A = e;
  this.K = 0;
  this.B = 32374862;
}
k = fj.prototype;
k.toString = function() {
  return qd(this);
};
k.equiv = function(a) {
  return this.J(null, a);
};
k.L = function() {
  return this.G;
};
k.Z = function() {
  return 0 > this.F ? J(F(this)) + 1 : this.F;
};
k.S = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Od(this);
};
k.J = function(a, b) {
  return de(this, b);
};
k.wa = function() {
  return ge(Md, this.G);
};
k.Ka = function(a, b) {
  return he.h(b, this);
};
k.La = function(a, b, c) {
  return he.j(b, c, this);
};
k.Fa = function() {
  return Ae(this.stack);
};
k.Xa = function() {
  var a = C(this.stack), a = ej(this.qe ? a.right : a.left, F(this.stack), this.qe);
  return null != a ? new fj(null, a, this.qe, this.F - 1, null) : Md;
};
k.W = function() {
  return this;
};
k.M = function(a, b) {
  return new fj(b, this.stack, this.qe, this.F, this.A);
};
k.Y = function(a, b) {
  return ee(b, this);
};
function gj(a, b, c) {
  return new fj(null, ej(a, null, b), b, c, null);
}
function hj(a, b, c, d) {
  return c instanceof ij ? c.left instanceof ij ? new ij(c.key, c.I, c.left.Fc(), new jj(a, b, c.right, d, null), null) : c.right instanceof ij ? new ij(c.right.key, c.right.I, new jj(c.key, c.I, c.left, c.right.left, null), new jj(a, b, c.right.right, d, null), null) : new jj(a, b, c, d, null) : new jj(a, b, c, d, null);
}
function kj(a, b, c, d) {
  return d instanceof ij ? d.right instanceof ij ? new ij(d.key, d.I, new jj(a, b, c, d.left, null), d.right.Fc(), null) : d.left instanceof ij ? new ij(d.left.key, d.left.I, new jj(a, b, c, d.left.left, null), new jj(d.key, d.I, d.left.right, d.right, null), null) : new jj(a, b, c, d, null) : new jj(a, b, c, d, null);
}
function lj(a, b, c, d) {
  if (c instanceof ij) {
    return new ij(a, b, c.Fc(), d, null);
  }
  if (d instanceof jj) {
    return kj(a, b, c, d.me());
  }
  if (d instanceof ij && d.left instanceof jj) {
    return new ij(d.left.key, d.left.I, new jj(a, b, c, d.left.left, null), kj(d.key, d.I, d.left.right, d.right.me()), null);
  }
  throw Error("red-black tree invariant violation");
}
var nj = function mj(b, c, d) {
  d = null != b.left ? mj(b.left, c, d) : d;
  if (Td(d)) {
    return I.g ? I.g(d) : I.call(null, d);
  }
  var e = b.key, f = b.I;
  d = c.j ? c.j(d, e, f) : c.call(null, d, e, f);
  if (Td(d)) {
    return I.g ? I.g(d) : I.call(null, d);
  }
  b = null != b.right ? mj(b.right, c, d) : d;
  return Td(b) ? I.g ? I.g(b) : I.call(null, b) : b;
};
function jj(a, b, c, d, e) {
  this.key = a;
  this.I = b;
  this.left = c;
  this.right = d;
  this.A = e;
  this.K = 0;
  this.B = 32402207;
}
k = jj.prototype;
k.ig = function(a) {
  return a.mg(this);
};
k.me = function() {
  return new ij(this.key, this.I, this.left, this.right, null);
};
k.Fc = function() {
  return this;
};
k.hg = function(a) {
  return a.lg(this);
};
k.replace = function(a, b, c, d) {
  return new jj(a, b, c, d, null);
};
k.lg = function(a) {
  return new jj(a.key, a.I, this, a.right, null);
};
k.mg = function(a) {
  return new jj(a.key, a.I, a.left, this, null);
};
k.vd = function(a, b) {
  return nj(this, a, b);
};
k.N = function(a, b) {
  return w.j(this, b, null);
};
k.P = function(a, b, c) {
  return w.j(this, b, c);
};
k.H = function(a, b) {
  return 0 === b ? this.key : 1 === b ? this.I : null;
};
k.ub = function(a, b, c) {
  return 0 === b ? this.key : 1 === b ? this.I : c;
};
k.pd = function(a, b, c) {
  return(new U(null, 2, 5, V, [this.key, this.I], null)).pd(null, b, c);
};
k.L = function() {
  return null;
};
k.Z = function() {
  return 2;
};
k.Yd = function() {
  return this.key;
};
k.Zd = function() {
  return this.I;
};
k.dd = function() {
  return this.I;
};
k.ed = function() {
  return new U(null, 1, 5, V, [this.key], null);
};
k.S = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Od(this);
};
k.J = function(a, b) {
  return de(this, b);
};
k.wa = function() {
  return se;
};
k.Ka = function(a, b) {
  return Ud.h(this, b);
};
k.La = function(a, b, c) {
  return Ud.j(this, b, c);
};
k.za = function(a, b, c) {
  return Q.j(new U(null, 2, 5, V, [this.key, this.I], null), b, c);
};
k.W = function() {
  return $b($b(Md, this.I), this.key);
};
k.M = function(a, b) {
  return ge(new U(null, 2, 5, V, [this.key, this.I], null), b);
};
k.Y = function(a, b) {
  return new U(null, 3, 5, V, [this.key, this.I, b], null);
};
k.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.N(null, c);
      case 3:
        return this.P(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.h = function(a, c) {
    return this.N(null, c);
  };
  a.j = function(a, c, d) {
    return this.P(null, c, d);
  };
  return a;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Lb(b)));
};
k.g = function(a) {
  return this.N(null, a);
};
k.h = function(a, b) {
  return this.P(null, a, b);
};
function ij(a, b, c, d, e) {
  this.key = a;
  this.I = b;
  this.left = c;
  this.right = d;
  this.A = e;
  this.K = 0;
  this.B = 32402207;
}
k = ij.prototype;
k.ig = function(a) {
  return new ij(this.key, this.I, this.left, a, null);
};
k.me = function() {
  throw Error("red-black tree invariant violation");
};
k.Fc = function() {
  return new jj(this.key, this.I, this.left, this.right, null);
};
k.hg = function(a) {
  return new ij(this.key, this.I, a, this.right, null);
};
k.replace = function(a, b, c, d) {
  return new ij(a, b, c, d, null);
};
k.lg = function(a) {
  return this.left instanceof ij ? new ij(this.key, this.I, this.left.Fc(), new jj(a.key, a.I, this.right, a.right, null), null) : this.right instanceof ij ? new ij(this.right.key, this.right.I, new jj(this.key, this.I, this.left, this.right.left, null), new jj(a.key, a.I, this.right.right, a.right, null), null) : new jj(a.key, a.I, this, a.right, null);
};
k.mg = function(a) {
  return this.right instanceof ij ? new ij(this.key, this.I, new jj(a.key, a.I, a.left, this.left, null), this.right.Fc(), null) : this.left instanceof ij ? new ij(this.left.key, this.left.I, new jj(a.key, a.I, a.left, this.left.left, null), new jj(this.key, this.I, this.left.right, this.right, null), null) : new jj(a.key, a.I, a.left, this, null);
};
k.vd = function(a, b) {
  return nj(this, a, b);
};
k.N = function(a, b) {
  return w.j(this, b, null);
};
k.P = function(a, b, c) {
  return w.j(this, b, c);
};
k.H = function(a, b) {
  return 0 === b ? this.key : 1 === b ? this.I : null;
};
k.ub = function(a, b, c) {
  return 0 === b ? this.key : 1 === b ? this.I : c;
};
k.pd = function(a, b, c) {
  return(new U(null, 2, 5, V, [this.key, this.I], null)).pd(null, b, c);
};
k.L = function() {
  return null;
};
k.Z = function() {
  return 2;
};
k.Yd = function() {
  return this.key;
};
k.Zd = function() {
  return this.I;
};
k.dd = function() {
  return this.I;
};
k.ed = function() {
  return new U(null, 1, 5, V, [this.key], null);
};
k.S = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Od(this);
};
k.J = function(a, b) {
  return de(this, b);
};
k.wa = function() {
  return se;
};
k.Ka = function(a, b) {
  return Ud.h(this, b);
};
k.La = function(a, b, c) {
  return Ud.j(this, b, c);
};
k.za = function(a, b, c) {
  return Q.j(new U(null, 2, 5, V, [this.key, this.I], null), b, c);
};
k.W = function() {
  return $b($b(Md, this.I), this.key);
};
k.M = function(a, b) {
  return ge(new U(null, 2, 5, V, [this.key, this.I], null), b);
};
k.Y = function(a, b) {
  return new U(null, 3, 5, V, [this.key, this.I, b], null);
};
k.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.N(null, c);
      case 3:
        return this.P(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.h = function(a, c) {
    return this.N(null, c);
  };
  a.j = function(a, c, d) {
    return this.P(null, c, d);
  };
  return a;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Lb(b)));
};
k.g = function(a) {
  return this.N(null, a);
};
k.h = function(a, b) {
  return this.P(null, a, b);
};
var pj = function oj(b, c, d, e, f) {
  if (null == c) {
    return new ij(d, e, null, null, null);
  }
  var g;
  g = c.key;
  g = b.h ? b.h(d, g) : b.call(null, d, g);
  if (0 === g) {
    return f[0] = c, null;
  }
  if (0 > g) {
    return b = oj(b, c.left, d, e, f), null != b ? c.hg(b) : null;
  }
  b = oj(b, c.right, d, e, f);
  return null != b ? c.ig(b) : null;
}, rj = function qj(b, c) {
  if (null == b) {
    return c;
  }
  if (null == c) {
    return b;
  }
  if (b instanceof ij) {
    if (c instanceof ij) {
      var d = qj(b.right, c.left);
      return d instanceof ij ? new ij(d.key, d.I, new ij(b.key, b.I, b.left, d.left, null), new ij(c.key, c.I, d.right, c.right, null), null) : new ij(b.key, b.I, b.left, new ij(c.key, c.I, d, c.right, null), null);
    }
    return new ij(b.key, b.I, b.left, qj(b.right, c), null);
  }
  if (c instanceof ij) {
    return new ij(c.key, c.I, qj(b, c.left), c.right, null);
  }
  d = qj(b.right, c.left);
  return d instanceof ij ? new ij(d.key, d.I, new jj(b.key, b.I, b.left, d.left, null), new jj(c.key, c.I, d.right, c.right, null), null) : lj(b.key, b.I, b.left, new jj(c.key, c.I, d, c.right, null));
}, tj = function sj(b, c, d, e) {
  if (null != c) {
    var f;
    f = c.key;
    f = b.h ? b.h(d, f) : b.call(null, d, f);
    if (0 === f) {
      return e[0] = c, rj(c.left, c.right);
    }
    if (0 > f) {
      return b = sj(b, c.left, d, e), null != b || null != e[0] ? c.left instanceof jj ? lj(c.key, c.I, b, c.right) : new ij(c.key, c.I, b, c.right, null) : null;
    }
    b = sj(b, c.right, d, e);
    if (null != b || null != e[0]) {
      if (c.right instanceof jj) {
        if (e = c.key, d = c.I, c = c.left, b instanceof ij) {
          c = new ij(e, d, c, b.Fc(), null);
        } else {
          if (c instanceof jj) {
            c = hj(e, d, c.me(), b);
          } else {
            if (c instanceof ij && c.right instanceof jj) {
              c = new ij(c.right.key, c.right.I, hj(c.key, c.I, c.left.me(), c.right.left), new jj(e, d, c.right.right, b, null), null);
            } else {
              throw Error("red-black tree invariant violation");
            }
          }
        }
      } else {
        c = new ij(c.key, c.I, c.left, b, null);
      }
    } else {
      c = null;
    }
    return c;
  }
  return null;
}, vj = function uj(b, c, d, e) {
  var f = c.key, g = b.h ? b.h(d, f) : b.call(null, d, f);
  return 0 === g ? c.replace(f, e, c.left, c.right) : 0 > g ? c.replace(f, c.I, uj(b, c.left, d, e), c.right) : c.replace(f, c.I, c.left, uj(b, c.right, d, e));
};
function wj(a, b, c, d, e) {
  this.Zb = a;
  this.Dc = b;
  this.F = c;
  this.G = d;
  this.A = e;
  this.B = 418776847;
  this.K = 8192;
}
k = wj.prototype;
k.forEach = function(a) {
  for (var b = A(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.H(null, e), g = O.j(f, 0, null), f = O.j(f, 1, null);
      a.h ? a.h(f, g) : a.call(null, f, g);
      e += 1;
    } else {
      if (b = A(b)) {
        T(b) ? (c = x(b), b = z(b), g = c, d = J(c), c = g) : (c = C(b), g = O.j(c, 0, null), c = f = O.j(c, 1, null), a.h ? a.h(c, g) : a.call(null, c, g), b = F(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
k.get = function(a) {
  return this.N(null, a);
};
k.entries = function() {
  return yi(A(this));
};
k.toString = function() {
  return qd(this);
};
k.keys = function() {
  return wi(Di.g ? Di.g(this) : Di.call(null, this));
};
k.values = function() {
  return wi(Ei.g ? Ei.g(this) : Ei.call(null, this));
};
k.equiv = function(a) {
  return this.J(null, a);
};
function xj(a, b) {
  for (var c = a.Dc;;) {
    if (null != c) {
      var d;
      d = c.key;
      d = a.Zb.h ? a.Zb.h(b, d) : a.Zb.call(null, b, d);
      if (0 === d) {
        return c;
      }
      c = 0 > d ? c.left : c.right;
    } else {
      return null;
    }
  }
}
k.has = function(a) {
  return Ze(this, a);
};
k.N = function(a, b) {
  return hc.j(this, b, null);
};
k.P = function(a, b, c) {
  a = xj(this, b);
  return null != a ? a.I : c;
};
k.Xd = function(a, b, c) {
  return null != this.Dc ? nj(this.Dc, b, c) : c;
};
k.L = function() {
  return this.G;
};
k.ma = function() {
  return new wj(this.Zb, this.Dc, this.F, this.G, this.A);
};
k.Z = function() {
  return this.F;
};
k.Fd = function() {
  return 0 < this.F ? gj(this.Dc, !1, this.F) : null;
};
k.S = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Pd(this);
};
k.J = function(a, b) {
  return ui(this, b);
};
k.wa = function() {
  return ge(yj, this.G);
};
k.Ra = function(a, b) {
  var c = [null], d = tj(this.Zb, this.Dc, b, c);
  return null == d ? null == O.h(c, 0) ? this : new wj(this.Zb, null, 0, this.G, null) : new wj(this.Zb, d.Fc(), this.F - 1, this.G, null);
};
k.za = function(a, b, c) {
  a = [null];
  var d = pj(this.Zb, this.Dc, b, c, a);
  return null == d ? (a = O.h(a, 0), Fd.h(c, a.I) ? this : new wj(this.Zb, vj(this.Zb, this.Dc, b, c), this.F, this.G, null)) : new wj(this.Zb, d.Fc(), this.F + 1, this.G, null);
};
k.ue = function(a, b) {
  return null != xj(this, b);
};
k.W = function() {
  return 0 < this.F ? gj(this.Dc, !0, this.F) : null;
};
k.M = function(a, b) {
  return new wj(this.Zb, this.Dc, this.F, b, this.A);
};
k.Y = function(a, b) {
  if (He(b)) {
    return kc(this, w.h(b, 0), w.h(b, 1));
  }
  for (var c = this, d = A(b);;) {
    if (null == d) {
      return c;
    }
    var e = C(d);
    if (He(e)) {
      c = kc(c, w.h(e, 0), w.h(e, 1)), d = F(d);
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
        return this.P(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.h = function(a, c) {
    return this.N(null, c);
  };
  a.j = function(a, c, d) {
    return this.P(null, c, d);
  };
  return a;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Lb(b)));
};
k.g = function(a) {
  return this.N(null, a);
};
k.h = function(a, b) {
  return this.P(null, a, b);
};
var yj = new wj(Gd, null, 0, null, 0), Qg = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = G(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = A(a);
    for (var b = bd(Ii);;) {
      if (a) {
        var e = F(F(a)), b = Bg.j(b, C(a), ie(a));
        a = e;
      } else {
        return dd(b);
      }
    }
  }
  a.D = 0;
  a.q = function(a) {
    a = A(a);
    return b(a);
  };
  a.k = b;
  return a;
}(), zj = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = G(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    return new n(null, Af(J(a), 2), S.h(Mb, a), null);
  }
  a.D = 0;
  a.q = function(a) {
    a = A(a);
    return b(a);
  };
  a.k = b;
  return a;
}(), Aj = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = G(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    for (var e = A(b), f = new wj(bf(a), null, 0, null, 0);;) {
      if (e) {
        var g = F(F(e)), f = Q.j(f, C(e), ie(e)), e = g
      } else {
        return f;
      }
    }
  }
  a.D = 1;
  a.q = function(a) {
    var d = C(a);
    a = E(a);
    return b(d, a);
  };
  a.k = b;
  return a;
}();
function Bj(a, b) {
  this.pb = a;
  this.tb = b;
  this.K = 0;
  this.B = 32374988;
}
k = Bj.prototype;
k.toString = function() {
  return qd(this);
};
k.equiv = function(a) {
  return this.J(null, a);
};
k.L = function() {
  return this.tb;
};
k.hb = function() {
  var a = this.pb, a = (a ? a.B & 128 || a.ze || (a.B ? 0 : Ib(ec, a)) : Ib(ec, a)) ? this.pb.hb(null) : F(this.pb);
  return null == a ? null : new Bj(a, this.tb);
};
k.S = function() {
  return Od(this);
};
k.J = function(a, b) {
  return de(this, b);
};
k.wa = function() {
  return ge(Md, this.tb);
};
k.Ka = function(a, b) {
  return he.h(b, this);
};
k.La = function(a, b, c) {
  return he.j(b, c, this);
};
k.Fa = function() {
  return this.pb.Fa(null).Yd(null);
};
k.Xa = function() {
  var a = this.pb, a = (a ? a.B & 128 || a.ze || (a.B ? 0 : Ib(ec, a)) : Ib(ec, a)) ? this.pb.hb(null) : F(this.pb);
  return null != a ? new Bj(a, this.tb) : Md;
};
k.W = function() {
  return this;
};
k.M = function(a, b) {
  return new Bj(this.pb, b);
};
k.Y = function(a, b) {
  return ee(b, this);
};
function Di(a) {
  return(a = A(a)) ? new Bj(a, null) : null;
}
function Kf(a) {
  return rc(a);
}
function Cj(a, b) {
  this.pb = a;
  this.tb = b;
  this.K = 0;
  this.B = 32374988;
}
k = Cj.prototype;
k.toString = function() {
  return qd(this);
};
k.equiv = function(a) {
  return this.J(null, a);
};
k.L = function() {
  return this.tb;
};
k.hb = function() {
  var a = this.pb, a = (a ? a.B & 128 || a.ze || (a.B ? 0 : Ib(ec, a)) : Ib(ec, a)) ? this.pb.hb(null) : F(this.pb);
  return null == a ? null : new Cj(a, this.tb);
};
k.S = function() {
  return Od(this);
};
k.J = function(a, b) {
  return de(this, b);
};
k.wa = function() {
  return ge(Md, this.tb);
};
k.Ka = function(a, b) {
  return he.h(b, this);
};
k.La = function(a, b, c) {
  return he.j(b, c, this);
};
k.Fa = function() {
  return this.pb.Fa(null).Zd(null);
};
k.Xa = function() {
  var a = this.pb, a = (a ? a.B & 128 || a.ze || (a.B ? 0 : Ib(ec, a)) : Ib(ec, a)) ? this.pb.hb(null) : F(this.pb);
  return null != a ? new Cj(a, this.tb) : Md;
};
k.W = function() {
  return this;
};
k.M = function(a, b) {
  return new Cj(this.pb, b);
};
k.Y = function(a, b) {
  return ee(b, this);
};
function Ei(a) {
  return(a = A(a)) ? new Cj(a, null) : null;
}
function Lf(a) {
  return sc(a);
}
var Lj = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = G(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    return q(Hg(gf, a)) ? Nb.h(function(a, b) {
      return te.h(q(a) ? a : Gi, b);
    }, a) : null;
  }
  a.D = 0;
  a.q = function(a) {
    a = A(a);
    return b(a);
  };
  a.k = b;
  return a;
}();
function Mj(a, b) {
  for (var c = Gi, d = A(b);;) {
    if (d) {
      var e = C(d), f = P.j(a, e, Nj), c = Eg.h(f, Nj) ? Q.j(c, e, f) : c, d = F(d)
    } else {
      return c;
    }
  }
}
function Oj(a, b, c) {
  this.G = a;
  this.gd = b;
  this.A = c;
  this.B = 15077647;
  this.K = 8196;
}
k = Oj.prototype;
k.toString = function() {
  return qd(this);
};
k.equiv = function(a) {
  return this.J(null, a);
};
k.keys = function() {
  return wi(A(this));
};
k.entries = function() {
  return Ai(A(this));
};
k.values = function() {
  return wi(A(this));
};
k.has = function(a) {
  return Ze(this, a);
};
k.forEach = function(a) {
  for (var b = A(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.H(null, e), g = O.j(f, 0, null), f = O.j(f, 1, null);
      a.h ? a.h(f, g) : a.call(null, f, g);
      e += 1;
    } else {
      if (b = A(b)) {
        T(b) ? (c = x(b), b = z(b), g = c, d = J(c), c = g) : (c = C(b), g = O.j(c, 0, null), c = f = O.j(c, 1, null), a.h ? a.h(c, g) : a.call(null, c, g), b = F(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
k.N = function(a, b) {
  return hc.j(this, b, null);
};
k.P = function(a, b, c) {
  return jc(this.gd, b) ? b : c;
};
k.L = function() {
  return this.G;
};
k.ma = function() {
  return new Oj(this.G, this.gd, this.A);
};
k.Z = function() {
  return Xb(this.gd);
};
k.S = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Pd(this);
};
k.J = function(a, b) {
  return Ee(b) && J(this) === J(b) && Gg(function(a) {
    return function(b) {
      return Ze(a, b);
    };
  }(this), b);
};
k.Ed = function() {
  return new Pj(bd(this.gd));
};
k.wa = function() {
  return ge(Qj, this.G);
};
k.kf = function(a, b) {
  return new Oj(this.G, pc(this.gd, b), null);
};
k.W = function() {
  return Di(this.gd);
};
k.M = function(a, b) {
  return new Oj(b, this.gd, this.A);
};
k.Y = function(a, b) {
  return new Oj(this.G, Q.j(this.gd, b, null), null);
};
k.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.N(null, c);
      case 3:
        return this.P(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.h = function(a, c) {
    return this.N(null, c);
  };
  a.j = function(a, c, d) {
    return this.P(null, c, d);
  };
  return a;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Lb(b)));
};
k.g = function(a) {
  return this.N(null, a);
};
k.h = function(a, b) {
  return this.P(null, a, b);
};
var Qj = new Oj(null, Gi, 0);
function Rj(a) {
  var b = a.length;
  if (b <= Hi) {
    for (var c = 0, d = bd(Gi);;) {
      if (c < b) {
        var e = c + 1, d = ed(d, a[c], null), c = e
      } else {
        return new Oj(null, dd(d), null);
      }
    }
  } else {
    for (c = 0, d = bd(Qj);;) {
      if (c < b) {
        e = c + 1, d = cd(d, a[c]), c = e;
      } else {
        return dd(d);
      }
    }
  }
}
function Pj(a) {
  this.$c = a;
  this.B = 259;
  this.K = 136;
}
k = Pj.prototype;
k.call = function() {
  function a(a, b, c) {
    return hc.j(this.$c, b, Le) === Le ? c : b;
  }
  function b(a, b) {
    return hc.j(this.$c, b, Le) === Le ? null : b;
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
  return this.call.apply(this, [this].concat(Lb(b)));
};
k.g = function(a) {
  return hc.j(this.$c, a, Le) === Le ? null : a;
};
k.h = function(a, b) {
  return hc.j(this.$c, a, Le) === Le ? b : a;
};
k.N = function(a, b) {
  return hc.j(this, b, null);
};
k.P = function(a, b, c) {
  return hc.j(this.$c, b, Le) === Le ? c : b;
};
k.Z = function() {
  return J(this.$c);
};
k.nd = function(a, b) {
  this.$c = Bg.j(this.$c, b, null);
  return this;
};
k.od = function() {
  return new Oj(null, dd(this.$c), null);
};
function Sj(a, b, c) {
  this.G = a;
  this.ad = b;
  this.A = c;
  this.B = 417730831;
  this.K = 8192;
}
k = Sj.prototype;
k.toString = function() {
  return qd(this);
};
k.equiv = function(a) {
  return this.J(null, a);
};
k.keys = function() {
  return wi(A(this));
};
k.entries = function() {
  return Ai(A(this));
};
k.values = function() {
  return wi(A(this));
};
k.has = function(a) {
  return Ze(this, a);
};
k.forEach = function(a) {
  for (var b = A(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.H(null, e), g = O.j(f, 0, null), f = O.j(f, 1, null);
      a.h ? a.h(f, g) : a.call(null, f, g);
      e += 1;
    } else {
      if (b = A(b)) {
        T(b) ? (c = x(b), b = z(b), g = c, d = J(c), c = g) : (c = C(b), g = O.j(c, 0, null), c = f = O.j(c, 1, null), a.h ? a.h(c, g) : a.call(null, c, g), b = F(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
k.N = function(a, b) {
  return hc.j(this, b, null);
};
k.P = function(a, b, c) {
  a = xj(this.ad, b);
  return null != a ? a.key : c;
};
k.L = function() {
  return this.G;
};
k.ma = function() {
  return new Sj(this.G, this.ad, this.A);
};
k.Z = function() {
  return J(this.ad);
};
k.Fd = function() {
  return 0 < J(this.ad) ? kh.h(Kf, Sc(this.ad)) : null;
};
k.S = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Pd(this);
};
k.J = function(a, b) {
  return Ee(b) && J(this) === J(b) && Gg(function(a) {
    return function(b) {
      return Ze(a, b);
    };
  }(this), b);
};
k.wa = function() {
  return ge(Tj, this.G);
};
k.kf = function(a, b) {
  return new Sj(this.G, we.h(this.ad, b), null);
};
k.W = function() {
  return Di(this.ad);
};
k.M = function(a, b) {
  return new Sj(b, this.ad, this.A);
};
k.Y = function(a, b) {
  return new Sj(this.G, Q.j(this.ad, b, null), null);
};
k.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.N(null, c);
      case 3:
        return this.P(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.h = function(a, c) {
    return this.N(null, c);
  };
  a.j = function(a, c, d) {
    return this.P(null, c, d);
  };
  return a;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Lb(b)));
};
k.g = function(a) {
  return this.N(null, a);
};
k.h = function(a, b) {
  return this.P(null, a, b);
};
var Tj = new Sj(null, yj, 0);
function Uj(a) {
  a = A(a);
  if (null == a) {
    return Qj;
  }
  if (a instanceof Jd && 0 === a.R) {
    a = a.p;
    a: {
      for (var b = 0, c = bd(Qj);;) {
        if (b < a.length) {
          var d = b + 1, c = c.nd(null, a[b]), b = d
        } else {
          a = c;
          break a;
        }
      }
      a = void 0;
    }
    return a.od(null);
  }
  for (d = bd(Qj);;) {
    if (null != a) {
      b = a.hb(null), d = d.nd(null, a.Fa(null)), a = b;
    } else {
      return d.od(null);
    }
  }
}
var Vj = function() {
  function a(a, b) {
    if (He(b)) {
      var c = J(b);
      return Nb.j(function() {
        return function(b, c) {
          var e = $e(a, O.h(b, c));
          return q(e) ? Q.j(b, c, ie(e)) : b;
        };
      }(c), b, lh.h(c, rh(Rd, 0)));
    }
    return kh.h(function(b) {
      var c = $e(a, b);
      return q(c) ? ie(c) : b;
    }, b);
  }
  function b(a) {
    return kh.g(function(b) {
      var c = $e(a, b);
      return q(c) ? sc(c) : b;
    });
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
function Wj(a) {
  return function c(a, e) {
    return new Tf(null, function() {
      return function(a, d) {
        for (;;) {
          var e = a, l = O.j(e, 0, null);
          if (e = A(e)) {
            if (Ze(d, l)) {
              l = E(e), e = d, a = l, d = e;
            } else {
              return ee(l, c(E(e), te.h(d, l)));
            }
          } else {
            return null;
          }
        }
      }.call(null, a, e);
    }, null, null);
  }(a, Qj);
}
function Rf(a) {
  if (a && (a.K & 4096 || a.Oh)) {
    return a.name;
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error("Doesn't support name: " + u.g(a));
}
function Xj(a, b) {
  for (var c = bd(Gi), d = A(a), e = A(b);;) {
    if (d && e) {
      c = Bg.j(c, C(d), C(e)), d = F(d), e = F(e);
    } else {
      return dd(c);
    }
  }
}
var Yj = function() {
  function a(a, b, c) {
    return(a.g ? a.g(b) : a.call(null, b)) > (a.g ? a.g(c) : a.call(null, c)) ? b : c;
  }
  var b = null, c = function() {
    function a(b, d, h, l) {
      var p = null;
      3 < arguments.length && (p = G(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, h, p);
    }
    function c(a, d, e, l) {
      return Nb.j(function(c, d) {
        return b.j(a, c, d);
      }, b.j(a, d, e), l);
    }
    a.D = 3;
    a.q = function(a) {
      var b = C(a);
      a = F(a);
      var d = C(a);
      a = F(a);
      var l = C(a);
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
        return c.k(b, e, f, G(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.D = 3;
  b.q = c.q;
  b.h = function(a, b) {
    return b;
  };
  b.j = a;
  b.k = c.k;
  return b;
}(), Zj = function() {
  function a(a, b, c) {
    return(a.g ? a.g(b) : a.call(null, b)) < (a.g ? a.g(c) : a.call(null, c)) ? b : c;
  }
  var b = null, c = function() {
    function a(b, d, h, l) {
      var p = null;
      3 < arguments.length && (p = G(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, h, p);
    }
    function c(a, d, e, l) {
      return Nb.j(function(c, d) {
        return b.j(a, c, d);
      }, b.j(a, d, e), l);
    }
    a.D = 3;
    a.q = function(a) {
      var b = C(a);
      a = F(a);
      var d = C(a);
      a = F(a);
      var l = C(a);
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
        return c.k(b, e, f, G(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.D = 3;
  b.q = c.q;
  b.h = function(a, b) {
    return b;
  };
  b.j = a;
  b.k = c.k;
  return b;
}();
function ak(a, b, c, d, e) {
  this.G = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.A = e;
  this.B = 32375006;
  this.K = 8192;
}
k = ak.prototype;
k.toString = function() {
  return qd(this);
};
k.equiv = function(a) {
  return this.J(null, a);
};
k.H = function(a, b) {
  if (b < Xb(this)) {
    return this.start + b * this.step;
  }
  if (this.start > this.end && 0 === this.step) {
    return this.start;
  }
  throw Error("Index out of bounds");
};
k.ub = function(a, b, c) {
  return b < Xb(this) ? this.start + b * this.step : this.start > this.end && 0 === this.step ? this.start : c;
};
k.L = function() {
  return this.G;
};
k.ma = function() {
  return new ak(this.G, this.start, this.end, this.step, this.A);
};
k.hb = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new ak(this.G, this.start + this.step, this.end, this.step, null) : null : this.start + this.step > this.end ? new ak(this.G, this.start + this.step, this.end, this.step, null) : null;
};
k.Z = function() {
  if (Hb(Pc(this))) {
    return 0;
  }
  var a = (this.end - this.start) / this.step;
  return Math.ceil.g ? Math.ceil.g(a) : Math.ceil.call(null, a);
};
k.S = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Od(this);
};
k.J = function(a, b) {
  return de(this, b);
};
k.wa = function() {
  return ge(Md, this.G);
};
k.Ka = function(a, b) {
  return Ud.h(this, b);
};
k.La = function(a, b, c) {
  return Ud.j(this, b, c);
};
k.Fa = function() {
  return null == Pc(this) ? null : this.start;
};
k.Xa = function() {
  return null != Pc(this) ? new ak(this.G, this.start + this.step, this.end, this.step, null) : Md;
};
k.W = function() {
  return 0 < this.step ? this.start < this.end ? this : null : this.start > this.end ? this : null;
};
k.M = function(a, b) {
  return new ak(b, this.start, this.end, this.step, this.A);
};
k.Y = function(a, b) {
  return ee(b, this);
};
var bk = function() {
  function a(a, b, c) {
    return new ak(null, a, b, c, null);
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
  e.w = d;
  e.g = c;
  e.h = b;
  e.j = a;
  return e;
}();
function ck(a) {
  return zg(Nb.j(function(a, c) {
    return Bg.j(a, c, P.j(a, c, 0) + 1);
  }, bd(Gi), a));
}
var dk = function() {
  function a(a, b, f) {
    return ee(b, new Tf(null, function() {
      var g = A(f);
      return g ? c.j(a, function() {
        var c = C(g);
        return a.h ? a.h(b, c) : a.call(null, b, c);
      }(), E(g)) : null;
    }, null, null));
  }
  function b(a, b) {
    return new Tf(null, function() {
      var f = A(b);
      return f ? c.j(a, C(f), E(f)) : $b(Md, a.w ? a.w() : a.call(null));
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
}(), ek = function() {
  function a(a, b, c) {
    return function() {
      function d(e, l, p) {
        return new U(null, 3, 5, V, [a.j ? a.j(e, l, p) : a.call(null, e, l, p), b.j ? b.j(e, l, p) : b.call(null, e, l, p), c.j ? c.j(e, l, p) : c.call(null, e, l, p)], null);
      }
      function e(d, l) {
        return new U(null, 3, 5, V, [a.h ? a.h(d, l) : a.call(null, d, l), b.h ? b.h(d, l) : b.call(null, d, l), c.h ? c.h(d, l) : c.call(null, d, l)], null);
      }
      function s(d) {
        return new U(null, 3, 5, V, [a.g ? a.g(d) : a.call(null, d), b.g ? b.g(d) : b.call(null, d), c.g ? c.g(d) : c.call(null, d)], null);
      }
      function t() {
        return new U(null, 3, 5, V, [a.w ? a.w() : a.call(null), b.w ? b.w() : b.call(null), c.w ? c.w() : c.call(null)], null);
      }
      var v = null, B = function() {
        function d(a, b, c, f) {
          var g = null;
          3 < arguments.length && (g = G(Array.prototype.slice.call(arguments, 3), 0));
          return e.call(this, a, b, c, g);
        }
        function e(d, l, p, s) {
          return new U(null, 3, 5, V, [S.Q(a, d, l, p, s), S.Q(b, d, l, p, s), S.Q(c, d, l, p, s)], null);
        }
        d.D = 3;
        d.q = function(a) {
          var b = C(a);
          a = F(a);
          var c = C(a);
          a = F(a);
          var d = C(a);
          a = E(a);
          return e(b, c, d, a);
        };
        d.k = e;
        return d;
      }(), v = function(a, b, c, f) {
        switch(arguments.length) {
          case 0:
            return t.call(this);
          case 1:
            return s.call(this, a);
          case 2:
            return e.call(this, a, b);
          case 3:
            return d.call(this, a, b, c);
          default:
            return B.k(a, b, c, G(arguments, 3));
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      v.D = 3;
      v.q = B.q;
      v.w = t;
      v.g = s;
      v.h = e;
      v.j = d;
      v.k = B.k;
      return v;
    }();
  }
  function b(a, b) {
    return function() {
      function c(d, e, h) {
        return new U(null, 2, 5, V, [a.j ? a.j(d, e, h) : a.call(null, d, e, h), b.j ? b.j(d, e, h) : b.call(null, d, e, h)], null);
      }
      function d(c, e) {
        return new U(null, 2, 5, V, [a.h ? a.h(c, e) : a.call(null, c, e), b.h ? b.h(c, e) : b.call(null, c, e)], null);
      }
      function e(c) {
        return new U(null, 2, 5, V, [a.g ? a.g(c) : a.call(null, c), b.g ? b.g(c) : b.call(null, c)], null);
      }
      function s() {
        return new U(null, 2, 5, V, [a.w ? a.w() : a.call(null), b.w ? b.w() : b.call(null)], null);
      }
      var t = null, v = function() {
        function c(a, b, e, f) {
          var g = null;
          3 < arguments.length && (g = G(Array.prototype.slice.call(arguments, 3), 0));
          return d.call(this, a, b, e, g);
        }
        function d(c, e, h, l) {
          return new U(null, 2, 5, V, [S.Q(a, c, e, h, l), S.Q(b, c, e, h, l)], null);
        }
        c.D = 3;
        c.q = function(a) {
          var b = C(a);
          a = F(a);
          var c = C(a);
          a = F(a);
          var e = C(a);
          a = E(a);
          return d(b, c, e, a);
        };
        c.k = d;
        return c;
      }(), t = function(a, b, f, g) {
        switch(arguments.length) {
          case 0:
            return s.call(this);
          case 1:
            return e.call(this, a);
          case 2:
            return d.call(this, a, b);
          case 3:
            return c.call(this, a, b, f);
          default:
            return v.k(a, b, f, G(arguments, 3));
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      t.D = 3;
      t.q = v.q;
      t.w = s;
      t.g = e;
      t.h = d;
      t.j = c;
      t.k = v.k;
      return t;
    }();
  }
  function c(a) {
    return function() {
      function b(c, d, e) {
        return new U(null, 1, 5, V, [a.j ? a.j(c, d, e) : a.call(null, c, d, e)], null);
      }
      function c(b, d) {
        return new U(null, 1, 5, V, [a.h ? a.h(b, d) : a.call(null, b, d)], null);
      }
      function d(b) {
        return new U(null, 1, 5, V, [a.g ? a.g(b) : a.call(null, b)], null);
      }
      function e() {
        return new U(null, 1, 5, V, [a.w ? a.w() : a.call(null)], null);
      }
      var s = null, t = function() {
        function b(a, d, e, f) {
          var g = null;
          3 < arguments.length && (g = G(Array.prototype.slice.call(arguments, 3), 0));
          return c.call(this, a, d, e, g);
        }
        function c(b, d, e, g) {
          return new U(null, 1, 5, V, [S.Q(a, b, d, e, g)], null);
        }
        b.D = 3;
        b.q = function(a) {
          var b = C(a);
          a = F(a);
          var d = C(a);
          a = F(a);
          var e = C(a);
          a = E(a);
          return c(b, d, e, a);
        };
        b.k = c;
        return b;
      }(), s = function(a, f, s, D) {
        switch(arguments.length) {
          case 0:
            return e.call(this);
          case 1:
            return d.call(this, a);
          case 2:
            return c.call(this, a, f);
          case 3:
            return b.call(this, a, f, s);
          default:
            return t.k(a, f, s, G(arguments, 3));
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      s.D = 3;
      s.q = t.q;
      s.w = e;
      s.g = d;
      s.h = c;
      s.j = b;
      s.k = t.k;
      return s;
    }();
  }
  var d = null, e = function() {
    function a(c, d, e, f) {
      var t = null;
      3 < arguments.length && (t = G(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, d, e, t);
    }
    function b(a, c, d, e) {
      return function(a) {
        return function() {
          function b(c, d, e) {
            return Nb.j(function() {
              return function(a, b) {
                return te.h(a, b.j ? b.j(c, d, e) : b.call(null, c, d, e));
              };
            }(a), se, a);
          }
          function c(b, d) {
            return Nb.j(function() {
              return function(a, c) {
                return te.h(a, c.h ? c.h(b, d) : c.call(null, b, d));
              };
            }(a), se, a);
          }
          function d(b) {
            return Nb.j(function() {
              return function(a, c) {
                return te.h(a, c.g ? c.g(b) : c.call(null, b));
              };
            }(a), se, a);
          }
          function e() {
            return Nb.j(function() {
              return function(a, b) {
                return te.h(a, b.w ? b.w() : b.call(null));
              };
            }(a), se, a);
          }
          var f = null, g = function() {
            function b(a, d, e, f) {
              var g = null;
              3 < arguments.length && (g = G(Array.prototype.slice.call(arguments, 3), 0));
              return c.call(this, a, d, e, g);
            }
            function c(b, d, e, f) {
              return Nb.j(function() {
                return function(a, c) {
                  return te.h(a, S.Q(c, b, d, e, f));
                };
              }(a), se, a);
            }
            b.D = 3;
            b.q = function(a) {
              var b = C(a);
              a = F(a);
              var d = C(a);
              a = F(a);
              var e = C(a);
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
                return g.k(a, f, h, G(arguments, 3));
            }
            throw Error("Invalid arity: " + arguments.length);
          };
          f.D = 3;
          f.q = g.q;
          f.w = e;
          f.g = d;
          f.h = c;
          f.j = b;
          f.k = g.k;
          return f;
        }();
      }(xg.v(a, c, d, e));
    }
    a.D = 3;
    a.q = function(a) {
      var c = C(a);
      a = F(a);
      var d = C(a);
      a = F(a);
      var e = C(a);
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
        return e.k(d, g, h, G(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.D = 3;
  d.q = e.q;
  d.g = c;
  d.h = b;
  d.j = a;
  d.k = e.k;
  return d;
}(), fk = function() {
  function a(a, b) {
    for (;;) {
      if (A(b) && 0 < a) {
        var c = a - 1, g = F(b);
        a = c;
        b = g;
      } else {
        return null;
      }
    }
  }
  function b(a) {
    for (;;) {
      if (A(a)) {
        a = F(a);
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
}(), gk = function() {
  function a(a, b) {
    fk.h(a, b);
    return b;
  }
  function b(a) {
    fk.g(a);
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
function hk(a, b) {
  if ("string" === typeof b) {
    var c = a.exec(b);
    return Fd.h(C(c), b) ? 1 === J(c) ? C(c) : $h(c) : null;
  }
  throw new TypeError("re-matches must match against a string.");
}
function ik(a, b) {
  if ("string" === typeof b) {
    var c = a.exec(b);
    return null == c ? null : 1 === J(c) ? C(c) : $h(c);
  }
  throw new TypeError("re-find must match against a string.");
}
function jk(a) {
  var b = ik(/^(?:\(\?([idmsux]*)\))?(.*)/, a);
  O.j(b, 0, null);
  a = O.j(b, 1, null);
  b = O.j(b, 2, null);
  return new RegExp(b, a);
}
function kk(a, b, c, d, e, f, g) {
  var h = wb;
  try {
    wb = null == wb ? null : wb - 1;
    if (null != wb && 0 > wb) {
      return Wc(a, "#");
    }
    Wc(a, c);
    if (A(g)) {
      var l = C(g);
      b.j ? b.j(l, a, f) : b.call(null, l, a, f);
    }
    for (var p = F(g), s = Fb.g(f) - 1;;) {
      if (!p || null != s && 0 === s) {
        A(p) && 0 === s && (Wc(a, d), Wc(a, "..."));
        break;
      } else {
        Wc(a, d);
        var t = C(p);
        c = a;
        g = f;
        b.j ? b.j(t, c, g) : b.call(null, t, c, g);
        var v = F(p);
        c = s - 1;
        p = v;
        s = c;
      }
    }
    return Wc(a, e);
  } finally {
    wb = h;
  }
}
var lk = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = G(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    for (var e = A(b), f = null, g = 0, h = 0;;) {
      if (h < g) {
        var l = f.H(null, h);
        Wc(a, l);
        h += 1;
      } else {
        if (e = A(e)) {
          f = e, T(f) ? (e = x(f), g = z(f), f = e, l = J(e), e = g, g = l) : (l = C(f), Wc(a, l), e = F(f), f = null, g = 0), h = 0;
        } else {
          return null;
        }
      }
    }
  }
  a.D = 1;
  a.q = function(a) {
    var d = C(a);
    a = E(a);
    return b(d, a);
  };
  a.k = b;
  return a;
}(), mk = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function nk(a) {
  return'"' + u.g(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return mk[a];
  })) + '"';
}
var qk = function ok(b, c, d) {
  if (null == b) {
    return Wc(c, "nil");
  }
  if (void 0 === b) {
    return Wc(c, "#\x3cundefined\x3e");
  }
  q(function() {
    var c = P.h(d, Cb);
    return q(c) ? (c = b ? b.B & 131072 || b.Nh ? !0 : b.B ? !1 : Ib(Cc, b) : Ib(Cc, b)) ? ze(b) : c : c;
  }()) && (Wc(c, "^"), ok(ze(b), c, d), Wc(c, " "));
  if (null == b) {
    return Wc(c, "nil");
  }
  if (b.wb) {
    return b.Bb(b, c, d);
  }
  if (b && (b.B & 2147483648 || b.ta)) {
    return b.U(null, c, d);
  }
  if (Jb(b) === Boolean || "number" === typeof b) {
    return Wc(c, "" + u.g(b));
  }
  if (null != b && b.constructor === Object) {
    Wc(c, "#js ");
    var e = kh.h(function(c) {
      return new U(null, 2, 5, V, [Sf.g(c), b[c]], null);
    }, Ie(b));
    return pk.v ? pk.v(e, ok, c, d) : pk.call(null, e, ok, c, d);
  }
  return b instanceof Array ? kk(c, ok, "#js [", " ", "]", d, b) : q(ja(b)) ? q(Bb.g(d)) ? Wc(c, nk(b)) : Wc(c, b) : xe(b) ? lk.k(c, G(["#\x3c", "" + u.g(b), "\x3e"], 0)) : b instanceof Date ? (e = function(b, c) {
    for (var d = "" + u.g(b);;) {
      if (J(d) < c) {
        d = "0" + u.g(d);
      } else {
        return d;
      }
    }
  }, lk.k(c, G(['#inst "', "" + u.g(b.getUTCFullYear()), "-", e(b.getUTCMonth() + 1, 2), "-", e(b.getUTCDate(), 2), "T", e(b.getUTCHours(), 2), ":", e(b.getUTCMinutes(), 2), ":", e(b.getUTCSeconds(), 2), ".", e(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0))) : b instanceof RegExp ? lk.k(c, G(['#"', b.source, '"'], 0)) : (b ? b.B & 2147483648 || b.ta || (b.B ? 0 : Ib(Xc, b)) : Ib(Xc, b)) ? Yc(b, c, d) : lk.k(c, G(["#\x3c", "" + u.g(b), "\x3e"], 0));
};
function rk(a, b) {
  var c = new ab;
  a: {
    var d = new pd(c);
    qk(C(a), d, b);
    for (var e = A(F(a)), f = null, g = 0, h = 0;;) {
      if (h < g) {
        var l = f.H(null, h);
        Wc(d, " ");
        qk(l, d, b);
        h += 1;
      } else {
        if (e = A(e)) {
          f = e, T(f) ? (e = x(f), g = z(f), f = e, l = J(e), e = g, g = l) : (l = C(f), Wc(d, " "), qk(l, d, b), e = F(f), f = null, g = 0), h = 0;
        } else {
          break a;
        }
      }
    }
  }
  return c;
}
function sk(a, b) {
  return Ce(a) ? "" : "" + u.g(rk(a, b));
}
var Ug = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = G(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    return sk(a, xb());
  }
  a.D = 0;
  a.q = function(a) {
    a = A(a);
    return b(a);
  };
  a.k = b;
  return a;
}(), tk = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = G(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b = Q.j(xb(), Bb, !1);
    a = sk(a, b);
    ub.g ? ub.g(a) : ub.call(null, a);
    q(vb) ? (a = xb(), ub.g ? ub.g("\n") : ub.call(null, "\n"), a = (P.h(a, zb), null)) : a = null;
    return a;
  }
  a.D = 0;
  a.q = function(a) {
    a = A(a);
    return b(a);
  };
  a.k = b;
  return a;
}();
function pk(a, b, c, d) {
  return kk(c, function(a, c, d) {
    var h = rc(a);
    b.j ? b.j(h, c, d) : b.call(null, h, c, d);
    Wc(c, " ");
    a = sc(a);
    return b.j ? b.j(a, c, d) : b.call(null, a, c, d);
  }, "{", ", ", "}", d, A(a));
}
Jd.prototype.ta = !0;
Jd.prototype.U = function(a, b, c) {
  return kk(b, qk, "(", " ", ")", c, this);
};
Tf.prototype.ta = !0;
Tf.prototype.U = function(a, b, c) {
  return kk(b, qk, "(", " ", ")", c, this);
};
fj.prototype.ta = !0;
fj.prototype.U = function(a, b, c) {
  return kk(b, qk, "(", " ", ")", c, this);
};
Zi.prototype.ta = !0;
Zi.prototype.U = function(a, b, c) {
  return kk(b, qk, "(", " ", ")", c, this);
};
jj.prototype.ta = !0;
jj.prototype.U = function(a, b, c) {
  return kk(b, qk, "[", " ", "]", c, this);
};
Ci.prototype.ta = !0;
Ci.prototype.U = function(a, b, c) {
  return kk(b, qk, "(", " ", ")", c, this);
};
Sj.prototype.ta = !0;
Sj.prototype.U = function(a, b, c) {
  return kk(b, qk, "#{", " ", "}", c, this);
};
ii.prototype.ta = !0;
ii.prototype.U = function(a, b, c) {
  return kk(b, qk, "(", " ", ")", c, this);
};
Qf.prototype.ta = !0;
Qf.prototype.U = function(a, b, c) {
  return kk(b, qk, "(", " ", ")", c, this);
};
ce.prototype.ta = !0;
ce.prototype.U = function(a, b, c) {
  return kk(b, qk, "(", " ", ")", c, this);
};
aj.prototype.ta = !0;
aj.prototype.U = function(a, b, c) {
  return pk(this, qk, b, c);
};
$i.prototype.ta = !0;
$i.prototype.U = function(a, b, c) {
  return kk(b, qk, "(", " ", ")", c, this);
};
ki.prototype.ta = !0;
ki.prototype.U = function(a, b, c) {
  return kk(b, qk, "[", " ", "]", c, this);
};
wj.prototype.ta = !0;
wj.prototype.U = function(a, b, c) {
  return pk(this, qk, b, c);
};
Oj.prototype.ta = !0;
Oj.prototype.U = function(a, b, c) {
  return kk(b, qk, "#{", " ", "}", c, this);
};
Zf.prototype.ta = !0;
Zf.prototype.U = function(a, b, c) {
  return kk(b, qk, "(", " ", ")", c, this);
};
Pg.prototype.ta = !0;
Pg.prototype.U = function(a, b, c) {
  Wc(b, "#\x3cAtom: ");
  qk(this.state, b, c);
  return Wc(b, "\x3e");
};
Cj.prototype.ta = !0;
Cj.prototype.U = function(a, b, c) {
  return kk(b, qk, "(", " ", ")", c, this);
};
ij.prototype.ta = !0;
ij.prototype.U = function(a, b, c) {
  return kk(b, qk, "[", " ", "]", c, this);
};
U.prototype.ta = !0;
U.prototype.U = function(a, b, c) {
  return kk(b, qk, "[", " ", "]", c, this);
};
pi.prototype.ta = !0;
pi.prototype.U = function(a, b, c) {
  return kk(b, qk, "(", " ", ")", c, this);
};
Nf.prototype.ta = !0;
Nf.prototype.U = function(a, b) {
  return Wc(b, "()");
};
qi.prototype.ta = !0;
qi.prototype.U = function(a, b, c) {
  return kk(b, qk, "#queue [", " ", "]", c, A(this));
};
n.prototype.ta = !0;
n.prototype.U = function(a, b, c) {
  return pk(this, qk, b, c);
};
ak.prototype.ta = !0;
ak.prototype.U = function(a, b, c) {
  return kk(b, qk, "(", " ", ")", c, this);
};
Bj.prototype.ta = !0;
Bj.prototype.U = function(a, b, c) {
  return kk(b, qk, "(", " ", ")", c, this);
};
Mf.prototype.ta = !0;
Mf.prototype.U = function(a, b, c) {
  return kk(b, qk, "(", " ", ")", c, this);
};
U.prototype.ve = !0;
U.prototype.we = function(a, b) {
  return af.h(this, b);
};
ki.prototype.ve = !0;
ki.prototype.we = function(a, b) {
  return af.h(this, b);
};
W.prototype.ve = !0;
W.prototype.we = function(a, b) {
  return Ed(this, b);
};
Hd.prototype.ve = !0;
Hd.prototype.we = function(a, b) {
  return Ed(this, b);
};
function uk(a, b, c) {
  $c(a, b, c);
}
var vk = null, wk = function() {
  function a(a) {
    null == vk && (vk = Sg.g ? Sg.g(0) : Sg.call(null, 0));
    return Id.g("" + u.g(a) + u.g(Vg.h(vk, Rd)));
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
  c.w = b;
  c.g = a;
  return c;
}();
function xk(a) {
  return function(b, c) {
    var d = a.h ? a.h(b, c) : a.call(null, b, c);
    return Td(d) ? new Sd(d) : d;
  };
}
function uh(a) {
  return function(b) {
    return function() {
      function c(a, c) {
        return Nb.j(b, a, c);
      }
      function d(b) {
        return a.g ? a.g(b) : a.call(null, b);
      }
      function e() {
        return a.w ? a.w() : a.call(null);
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
      f.w = e;
      f.g = d;
      f.h = c;
      return f;
    }();
  }(xk(a));
}
var yk = {};
function zk(a) {
  if (a ? a.Kh : a) {
    return a.Kh(a);
  }
  var b;
  b = zk[m(null == a ? null : a)];
  if (!b && (b = zk._, !b)) {
    throw r("IEncodeJS.-clj-\x3ejs", a);
  }
  return b.call(null, a);
}
function Ak(a) {
  return(a ? q(q(null) ? null : a.Jh) || (a.pf ? 0 : Ib(yk, a)) : Ib(yk, a)) ? zk(a) : "string" === typeof a || "number" === typeof a || a instanceof W || a instanceof Hd ? Bk.g ? Bk.g(a) : Bk.call(null, a) : Ug.k(G([a], 0));
}
var Bk = function Ck(b) {
  if (null == b) {
    return null;
  }
  if (b ? q(q(null) ? null : b.Jh) || (b.pf ? 0 : Ib(yk, b)) : Ib(yk, b)) {
    return zk(b);
  }
  if (b instanceof W) {
    return Rf(b);
  }
  if (b instanceof Hd) {
    return "" + u.g(b);
  }
  if (Ge(b)) {
    var c = {};
    b = A(b);
    for (var d = null, e = 0, f = 0;;) {
      if (f < e) {
        var g = d.H(null, f), h = O.j(g, 0, null), g = O.j(g, 1, null);
        c[Ak(h)] = Ck(g);
        f += 1;
      } else {
        if (b = A(b)) {
          T(b) ? (e = x(b), b = z(b), d = e, e = J(e)) : (e = C(b), d = O.j(e, 0, null), e = O.j(e, 1, null), c[Ak(d)] = Ck(e), b = F(b), d = null, e = 0), f = 0;
        } else {
          break;
        }
      }
    }
    return c;
  }
  if (De(b)) {
    c = [];
    b = A(kh.h(Ck, b));
    d = null;
    for (f = e = 0;;) {
      if (f < e) {
        h = d.H(null, f), c.push(h), f += 1;
      } else {
        if (b = A(b)) {
          d = b, T(d) ? (b = x(d), f = z(d), d = b, e = J(b), b = f) : (b = C(d), c.push(b), b = F(d), d = null, e = 0), f = 0;
        } else {
          break;
        }
      }
    }
    return c;
  }
  return b;
}, Dk = {};
function Ek(a, b) {
  if (a ? a.Ih : a) {
    return a.Ih(a, b);
  }
  var c;
  c = Ek[m(null == a ? null : a)];
  if (!c && (c = Ek._, !c)) {
    throw r("IEncodeClojure.-js-\x3eclj", a);
  }
  return c.call(null, a, b);
}
var Gk = function() {
  function a(a) {
    return b.k(a, G([new n(null, 1, [Fk, !1], null)], 0));
  }
  var b = null, c = function() {
    function a(c, d) {
      var h = null;
      1 < arguments.length && (h = G(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, h);
    }
    function b(a, c) {
      if (a ? q(q(null) ? null : a.wj) || (a.pf ? 0 : Ib(Dk, a)) : Ib(Dk, a)) {
        return Ek(a, S.h(zj, c));
      }
      if (A(c)) {
        var d = Xe(c) ? S.h(Qg, c) : c, e = P.h(d, Fk);
        return function(a, b, c, d) {
          return function y(e) {
            return Xe(e) ? gk.g(kh.h(y, e)) : De(e) ? Ah.h(null == e ? null : Yb(e), kh.h(y, e)) : e instanceof Array ? $h(kh.h(y, e)) : Jb(e) === Object ? Ah.h(Gi, function() {
              return function(a, b, c, d) {
                return function $(f) {
                  return new Tf(null, function(a, b, c, d) {
                    return function() {
                      for (;;) {
                        var a = A(f);
                        if (a) {
                          if (T(a)) {
                            var b = x(a), c = J(b), g = Xf(c);
                            return function() {
                              for (var a = 0;;) {
                                if (a < c) {
                                  var f = w.h(b, a), h = g, l = V, p;
                                  p = f;
                                  p = d.g ? d.g(p) : d.call(null, p);
                                  f = new U(null, 2, 5, l, [p, y(e[f])], null);
                                  h.add(f);
                                  a += 1;
                                } else {
                                  return!0;
                                }
                              }
                            }() ? $f(rg(g), $(z(a))) : $f(rg(g), null);
                          }
                          var h = C(a);
                          return ee(new U(null, 2, 5, V, [function() {
                            var a = h;
                            return d.g ? d.g(a) : d.call(null, a);
                          }(), y(e[h])], null), $(E(a)));
                        }
                        return null;
                      }
                    };
                  }(a, b, c, d), null, null);
                };
              }(a, b, c, d)(Ie(e));
            }()) : e;
          };
        }(c, d, e, q(e) ? Sf : u)(a);
      }
      return null;
    }
    a.D = 1;
    a.q = function(a) {
      var c = C(a);
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
        return c.k(b, G(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.D = 1;
  b.q = c.q;
  b.g = a;
  b.k = c.k;
  return b;
}(), Cf = function() {
  function a(a) {
    return(Math.random.w ? Math.random.w() : Math.random.call(null)) * a;
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
  c.w = b;
  c.g = a;
  return c;
}(), Df = function(a) {
  a *= Math.random.w ? Math.random.w() : Math.random.call(null);
  return Math.floor.g ? Math.floor.g(a) : Math.floor.call(null, a);
};
function Hk(a, b) {
  return zg(Nb.j(function(b, d) {
    var e = a.g ? a.g(d) : a.call(null, d);
    return Bg.j(b, e, te.h(P.j(b, e, se), d));
  }, bd(Gi), b));
}
function Ik(a) {
  this.Va = a;
  this.K = 0;
  this.B = 2153775104;
}
k = Ik.prototype;
k.S = function() {
  for (var a = Ug.k(G([this], 0)), b = 0, c = 0;c < a.length;++c) {
    b = 31 * b + a.charCodeAt(c), b %= 4294967296;
  }
  return b;
};
k.U = function(a, b) {
  return Wc(b, '#uuid "' + u.g(this.Va) + '"');
};
k.J = function(a, b) {
  return b instanceof Ik && this.Va === b.Va;
};
k.toString = function() {
  return this.Va;
};
k.equiv = function(a) {
  return this.J(null, a);
};
var Wk = new W(null, "inactive", "inactive", -306247616), Xk = new W(null, "y", "y", -1757859776), Yk = new W(null, "learn-segs", "learn-segs", -481861280), Zk = new W(null, "ppath", "ppath", -1758182784), $k = new W(null, "retina_name", "retina_name", -891899232), al = new W(null, "encoding", "encoding", 1728578272), bl = new W(null, "no-deref-monitor", "no-deref-monitor", 1171473184), cl = new W(null, "seg-w-px", "seg-w-px", 1192509248), dl = new W(null, "fieldset", "fieldset", -1949770816), el = 
new W(null, "fieldset#sim-controls", "fieldset#sim-controls", 443000993), fl = new W(null, "watches", "watches", -273097535), gl = new W(null, "boost-overlap-duty-ratio", "boost-overlap-duty-ratio", -1153915647), hl = new W(null, "ff-perm-connected", "ff-perm-connected", 828443105), il = new W(null, "ff-synapses", "ff-synapses", -1536453151), jl = new W(null, "gap-countdown", "gap-countdown", -2051578079), kl = new W(null, "target-density", "target-density", 391599009), ll = new W(null, "fieldset.region-spec", 
"fieldset.region-spec", 1547815873), ml = new W(null, "run-0-5", "run-0-5", -60879870), nl = new W(null, "ff-perm-init", "ff-perm-init", -588489726), ol = new W(null, "min", "min", 444991522), pl = new W(null, "down", "down", 1565245570), ql = new W(null, "boosts", "boosts", 2116854050), rl = new W(null, "n-segments", "n-segments", -370398), sl = new W("zip", "branch?", "zip/branch?", -998880862), tl = new W(null, "max-syns", "max-syns", -930774526), ul = new W(null, "distal-punish?", "distal-punish?", 
1652249154), vl = new W(null, "span#sim-rate", "span#sim-rate", -400148894), wl = new W(null, "r", "r", -471384190), xl = new W(null, "text-margin", "text-margin", 1161346978), yl = new W(null, "g.tick.major-tick", "g.tick.major-tick", 1467819139), zl = new W(null, "get", "get", 1683182755), Al = new W("zip", "children", "zip/children", -940194589), Bl = new W(null, "dh", "dh", 528137731), Cl = new W(null, "run-sim", "run-sim", 1708970627), Dl = new W(null, "burst-cols", "burst-cols", 1737318083), 
El = new W(null, "a#sim-faster", "a#sim-faster", 1179722499), Fl = new W(null, "tp-exc", "tp-exc", -2084609213), Gl = new W(null, "diag-tl-br", "diag-tl-br", 307182435), Hl = new W(null, "inh-radius", "inh-radius", 849540035), Il = new W(null, "span#sim-timestep", "span#sim-timestep", -764964893), Jl = new W(null, "max-segs", "max-segs", -976352252), Kl = new W(null, "json-params", "json-params", -1112693596), Ll = new W(null, "alternative", "alternative", 51666308), Ml = new W(null, "transform", 
"transform", 1381301764), Cb = new W(null, "meta", "meta", 1499536964), Nl = new W(null, "selected", "selected", 574897764), Ol = new W(null, "dx", "dx", -381796732), Pl = new W(null, "seg-new-synapse-count", "seg-new-synapse-count", 841824004), Ql = new W(null, "seg-h-space-px", "seg-h-space-px", 1353315204), Rl = new W(null, "scroll-top", "scroll-top", -46723100), Sl = new W(null, "scroll-counter", "scroll-counter", 628002885), Tl = new W("org.nfrac.comportex.demos.isolated-1d", "current-pattern-index", 
"org.nfrac.comportex.demos.isolated-1d/current-pattern-index", -20812731), Db = new W(null, "dup", "dup", 556298533), Ul = new W(null, "g.ticks", "g.ticks", 28507493), Vl = new W(null, "temporal-pooling", "temporal-pooling", 240992677), Wl = new W(null, "segment-idx", "segment-idx", -248867259), Xl = new W(null, "key", "key", -1516042587), Yl = new W(null, "patch", "patch", 380775109), Zl = new W(null, "index", "index", -1531685915), $l = new W(null, "pred-cells", "pred-cells", -549223386), am = 
new W(null, "bottom", "bottom", -1550509018), bm = new W(null, "max-segments", "max-segments", -157037498), cm = new W(null, "encoder", "encoder", -1113127834), dm = new W("org.nfrac.comportex.demos.isolated-2d", "current-pattern-index", "org.nfrac.comportex.demos.isolated-2d/current-pattern-index", -20812698), em = new W(null, "button#sim-start", "button#sim-start", -924760922), fm = new W(null, "exit", "exit", 351849638), gm = new W(null, "src-\x3ei", "src-\x3ei", -1634218746), hm = new W(null, 
"distal-perm-dec", "distal-perm-dec", -223583802), im = new W(null, "disconnected", "disconnected", -1908014586), jm = new W(null, "cull", "cull", -1824785850), km = new W(null, "boost-active-duty-ratio", "boost-active-duty-ratio", 891850342), sm = new W(null, "tp-scores", "tp-scores", -375463769), tm = new W(null, "lat-synapses", "lat-synapses", 1341366663), um = new W(null, "button#sim-reset", "button#sim-reset", -1103042169), vm = new W(null, "top", "top", -1856271961), wm = new W(null, "derefed", 
"derefed", 590684583), xm = new W(null, "password", "password", 417022471), ym = new W(null, "transit-params", "transit-params", 357261095), zm = new W(null, "text.label", "text.label", 210580295), Am = new W(null, "topo", "topo", -1894825145), Bm = new W(null, "yellow", "yellow", -881035449), Rg = new W(null, "validator", "validator", -1966190681), Cm = new W(null, "highlight", "highlight", -800930873), Dm = new W(null, "get_fingerprint", "get_fingerprint", 669313064), Em = new W(null, "method", 
"method", 55703592), Fm = new W(null, "line.rule", "line.rule", -722114232), Gm = new W(null, "button#anim-step", "button#anim-step", 1065036136), Hm = new W(null, "seg-h-px", "seg-h-px", -443969112), Im = new W(null, "finally-block", "finally-block", 832982472), Jm = new W(null, "h-space-px", "h-space-px", -766035480), Km = new W(null, "col-shrink", "col-shrink", -1043182072), Lm = new W(null, "i-\x3esrc", "i-\x3esrc", -299811032), Mm = new W(null, "learn-segments", "learn-segments", 1869208392), 
Nm = new W(null, "distal-perm-connected", "distal-perm-connected", -1849103512), Om = new W(null, "columns", "columns", 1998437288), Pm = new W(null, "a#anim-slower", "a#anim-slower", -2103660568), Qm = new W(null, "w", "w", 354169001), Rm = new W(null, "seg-learn-threshold", "seg-learn-threshold", 1271249129), Sm = new W(null, "sy", "sy", 227523849), Tm = new W(null, "element-h", "element-h", -1458880151), Um = new W(null, "anim-go?", "anim-go?", 1109067401), Vm = new W(null, "encoding-opts", "encoding-opts", 
-1805664631), Wm = new W(null, "dt", "dt", -368444759), Xm = new W(null, "formatter", "formatter", -483008823), Ym = new W(null, "parent-watchables", "parent-watchables", -319854903), Zm = new W(null, "value", "value", 305978217), $m = new W(null, "seg-stimulus-threshold", "seg-stimulus-threshold", -1901580343), an = new W(null, "green", "green", -945526839), bn = new W(null, "rand-10", "rand-10", -1131947990), cn = new W(null, "time", "time", 1385887882), dn = new W(null, "fieldset#anim-controls", 
"fieldset#anim-controls", 750977322), en = new W(null, "mapping", "mapping", -1242405430), fn = new W(null, "sig-overlaps", "sig-overlaps", 436652586), gn = new W(null, "page-up", "page-up", 1352555050), hn = new W(null, "username", "username", 1605666410), jn = new W(null, "regions", "regions", -1023815958), kn = new W(null, "timestep", "timestep", -1557942486), ln = new W(null, "dirty?", "dirty?", -2059845846), mn = new W(null, "y1", "y1", 589123466), nn = new W(null, "width", "width", -384071477), 
on = new W(null, "a#sim-slower", "a#sim-slower", -8187669), pn = new W(null, "background", "background", -863952629), qn = new W(null, "column-dimensions", "column-dimensions", 935248171), rn = new W(null, "button#sim-step", "button#sim-step", -991688373), sn = new W(null, "dy", "dy", 1719547243), tn = new W(null, "connected", "connected", -169833045), un = new W(null, "p.detail", "p.detail", -259333685), vn = new W(null, "submit", "submit", -49315317), wn = new W(null, "active-duty-cycles", "active-duty-cycles", 
-2100410837), xn = new W(null, "legend", "legend", -1027192245), yn = new W(null, "alternative-cells", "alternative-cells", 714708619), zn = new W(null, "shrink", "shrink", 1415287595), An = new W(null, "orientation", "orientation", 623557579), Bn = new W(null, "fieldset#viz-options", "fieldset#viz-options", -957799412), Cn = new W(null, "predictive", "predictive", 742235276), Dn = new W(null, "channel", "channel", 734187692), En = new W(null, "signal-cells", "signal-cells", -451652436), Fn = new W(null, 
"draw-steps", "draw-steps", -100988692), Z = new W(null, "recur", "recur", -437573268), Gn = new W(null, "type", "type", 1174270348), Hn = new W("comportexviz.viz-canvas", "acols", "comportexviz.viz-canvas/acols", 1747707340), In = new W(null, "update", "update", 1045576396), Jn = new W(null, "catch-block", "catch-block", 1175212748), Kn = new W(null, "delete", "delete", -1768633620), Ln = new W(null, "twos", "twos", 709888876), Ep = new W(null, "ff-init-frac", "ff-init-frac", 503945132), Fp = new W(null, 
"state", "state", -1988618099), Gp = new W(null, "votes-frac", "votes-frac", -680687347), Hp = new W(null, "g.timestep", "g.timestep", -1438660275), Ip = new W(null, "distal-perm-inc", "distal-perm-inc", -162111059), Jp = new W(null, "major-tick-width", "major-tick-width", -401901043), Kp = new W("comportexviz.viz-canvas", "abits", "comportexviz.viz-canvas/abits", -1378531795), Lp = new W(null, "update-dom", "update-dom", 1414664877), Mp = new W(null, "seg-max-synapse-count", "seg-max-synapse-count", 
-139057427), Np = new W(null, "span.detail", "span.detail", -1905752307), Op = new W(null, "handlers", "handlers", 79528781), Pp = new W(null, "span#sim-ms-text", "span#sim-ms-text", -117079187), zb = new W(null, "flush-on-newline", "flush-on-newline", -151457939), Qp = new W(null, "overlap-duty-cycles", "overlap-duty-cycles", 1224111053), Rp = new W(null, "sim-step-ms", "sim-step-ms", -1192536083), Sp = new W(null, "button#anim-start", "button#anim-start", 373847086), Tp = new W(null, "extra-distal-size", 
"extra-distal-size", -460733170), Up = new W(null, "learn-cells", "learn-cells", -1536897586), Vp = new W(null, "all", "all", 892129742), Wp = new W(null, "ff-sg", "ff-sg", 18382766), Xp = new W(null, "span#anim-every-text", "span#anim-every-text", -815816561), Yp = new W(null, "l", "l", 1395893423), Zp = new W(null, "seed", "seed", 68613327), $p = new W(null, "alternative-learning?", "alternative-learning?", -1659105041), aq = new W(null, "up", "up", -269712113), bq = new W("zip", "make-node", "zip/make-node", 
1103800591), cq = new W(null, "canvas", "canvas", -1798817489), dq = new W(null, "size", "size", 1098693007), eq = new W(null, "headers", "headers", -835030129), fq = new W(null, "learn-cols", "learn-cols", 164580271), gq = new W(null, "enter", "enter", 1792452624), hq = new W(null, "bit-h-px", "bit-h-px", -1081204688), iq = new W("comportexviz.viz-canvas", "nsegcols", "comportexviz.viz-canvas/nsegcols", 1473275952), jq = new W(null, "server-port", "server-port", 663745648), kq = new W(null, "demote", 
"demote", 2088906896), lq = new W(null, "learning", "learning", 612366512), mq = new W(null, "region", "region", 270415120), nq = new W(null, "style", "style", -496642736), oq = new W(null, "clamp?", "clamp?", 249465200), pq = new W(null, "ts", "ts", 1617209904), qq = new W(null, "term", "term", -1817390416), rq = new W(null, "div", "div", 1057191632), sq = new W(null, "option", "option", 65132272), Bb = new W(null, "readably", "readably", 1129599760), tq = new W(null, "run-start", "run-start", 1984981840), 
uq = new W(null, "activation", "activation", 2128521072), vq = new W("comportexviz.viz-canvas", "tpcols", "comportexviz.viz-canvas/tpcols", 500403377), wq = new W(null, "ff-grow-and-die?", "ff-grow-and-die?", 1154098385), xq = new W(null, "key-fn", "key-fn", -636154479), yq = new W(null, "head", "head", -771383919), zq = new W(null, "spec", "spec", 347520401), Aq = new W(null, "g", "g", 1738089905), Bq = new W(null, "bit-precision", "bit-precision", 2066921041), Cq = new W(null, "button#anim-stop", 
"button#anim-stop", -279088527), Dq = new W(null, "random-double", "random-double", -922602767), Eq = new W(null, "active-predicted", "active-predicted", -72115407), Fq = new W(null, "click", "click", 1912301393), Gq = new W(null, "cp1x", "cp1x", 465245137), Hq = new W(null, "with-credentials?", "with-credentials?", -1773202222), Iq = new W(null, "active-cols", "active-cols", -922660398), Jq = new W(null, "anim-every", "anim-every", 1633754642), Kq = new W(null, "max-boost", "max-boost", 608482834), 
Lq = new W(null, "success", "success", 1890645906), Mq = new W(null, "ff-potential-radius", "ff-potential-radius", 254943154), Nq = new W(null, "label-margin", "label-margin", -17690670), Oq = new W(null, "height-px", "height-px", -1391665005), Pq = new W(null, "cp2x", "cp2x", -1682644749), Qq = new W(null, "form-params", "form-params", 1884296467), Rq = new W(null, "inhibition-speed", "inhibition-speed", 2020956531), Sq = new W(null, "line", "line", 212345235), Tq = new W(null, "android", "android", 
-2084094573), Uq = new W(null, "ff-perm-inc", "ff-perm-inc", -742369901), Vq = new W(null, "tp-cells", "tp-cells", -1141498413), Wq = new W(null, "i-\x3etgt", "i-\x3etgt", -1469739469), Xq = new W("comportexviz.viz-canvas", "pbits", "comportexviz.viz-canvas/pbits", 1988133491), Yq = new W(null, "active-cells-by-col", "active-cells-by-col", 782265971), Zq = new W(null, "div#comportex-drawing", "div#comportex-drawing", 1638716307), $q = new W(null, "active-cells", "active-cells", -1277925485), ar = 
new W(null, "targets-by-source", "targets-by-source", -1472501869), br = new W(null, "g.plot-space", "g.plot-space", -1258275917), cr = new W(null, "status", "status", -1997798413), dr = new W(null, "h", "h", 1109658740), er = new W(null, "from", "from", 1815293044), fr = new W(null, "a#anim-faster", "a#anim-faster", -1294334764), Fb = new W(null, "print-length", "print-length", 1931866356), gr = new W(null, "max", "max", 61366548), hr = new W(null, "bit-coverage", "bit-coverage", -771349196), ir = 
new W(null, "active", "active", 1895962068), jr = new W(null, "col", "col", -1959363084), kr = new W(null, "activation-level", "activation-level", -1385123308), lr = new W(null, "overlaps", "overlaps", 1398230580), mr = new W(null, "label", "label", 1718410804), nr = new W(null, "id", "id", -1388402092), or = new W(null, "class", "class", -2030961996), pr = new W(null, "red", "red", -969428204), qr = new W(null, "blue", "blue", -622100620), rr = new W(null, "extent", "extent", -186399820), sr = new W(null, 
"decoding-opts", "decoding-opts", 1050289140), tr = new W(null, "catch-exception", "catch-exception", -1997306795), ur = new W(null, "opts", "opts", 155075701), vr = new W(null, "init-value", "init-value", -374892331), wr = new W(null, "input-w-px", "input-w-px", -99789611), xr = new W(null, "top-px", "top-px", 1982343477), yr = new W(null, "distal-sg", "distal-sg", 752001365), zr = new W("comportexviz.viz-canvas", "pcols", "comportexviz.viz-canvas/pcols", 1740826069), Ar = new W(null, "checked", 
"checked", -50955819), Br = new W("org.nfrac.comportex.demos.isolated-1d", "gap-countdown", "org.nfrac.comportex.demos.isolated-1d/gap-countdown", 1385863765), Cr = new W(null, "left-px", "left-px", -745883979), Dr = new W(null, "ts-plot", "ts-plot", -1498457323), Er = new W(null, "global-inhibition", "global-inhibition", -936260811), Fr = new W(null, "pnodes", "pnodes", 1739080565), Gr = new W(null, "prev", "prev", -1597069226), Hr = new W(null, "svg", "svg", 856789142), Ir = new W(null, "changed?", 
"changed?", -437828330), Jr = new W(null, "url", "url", 276297046), Kr = new W(null, "span.parameter-label", "span.parameter-label", -815265354), Yr = new W(null, "length", "length", 588987862), Zr = new W(null, "button#sim-stop", "button#sim-stop", 1477647862), ss = new W(null, "continue-block", "continue-block", -1852047850), ts = new W("org.nfrac.comportex.demos.isolated-2d", "gap-countdown", "org.nfrac.comportex.demos.isolated-2d/gap-countdown", 1385863862), us = new W(null, "query-params", "query-params", 
900640534), vs = new W(null, "span#sim-reset-status", "span#sim-reset-status", 1741880118), ws = new W(null, "content-type", "content-type", -508222634), xs = new W(null, "step-counter", "step-counter", 881657879), ys = new W(null, "alternative-segments", "alternative-segments", -1132719081), zs = new W(null, "cp1y", "cp1y", 628283543), As = new W(null, "div#comportex-controls", "div#comportex-controls", -1291722569), Bs = new W(null, "div#comportex-parameters", "div#comportex-parameters", 737276119), 
Cs = new W(null, "http", "http", 382524695), Ds = new W(null, "oauth-token", "oauth-token", 311415191), Es = new W(null, "ff-perm-dec", "ff-perm-dec", 1363415607), Fs = new W(null, "right", "right", -452581833), Gs = new W(null, "post", "post", 269697687), Hs = new W(null, "ticks", "ticks", -406190313), Is = new W(null, "dw", "dw", -821060841), Js = new W(null, "redraw", "redraw", -1075394793), Ks = new W(null, "input-dimensions", "input-dimensions", -1946955913), Ls = new W(null, "input-topology", 
"input-topology", -2015425577), Ms = new W(null, "display", "display", 242065432), Ns = new W(null, "syns-by-target", "syns-by-target", 1015999640), Os = new W(null, "drawing", "drawing", 1181749528), Ps = new W(null, "f", "f", -1597136552), Qs = new W(null, "sx", "sx", -403071592), Rs = new W(null, "cell-id", "cell-id", 1789875608), Ss = new W(null, "saw-10-15", "saw-10-15", 953187768), Ts = new W(null, "depth", "depth", 1768663640), Us = new W(null, "br", "br", 934104792), Vs = new W(null, "inhibition-base-distance", 
"inhibition-base-distance", 645074808), Ws = new W(null, "rev-5-1", "rev-5-1", -252300392), Xs = new W(null, "define-me!", "define-me!", -268367591), Ys = new W(null, "x", "x", 2099068185), Zs = new W(null, "subs", "subs", -186681991), $s = new W(null, "x1", "x1", -1863922247), at = new W(null, "uri", "uri", -774711847), bt = new W(null, "bit-w-px", "bit-w-px", -531552775), ct = new W(null, "form", "form", -1624062471), dt = new W(null, "prior-pred-cells", "prior-pred-cells", 2074077785), et = new W(null, 
"tag", "tag", -1290361223), ft = new W(null, "predicted", "predicted", 2110738041), gt = new W(null, "res", "res", -1395007879), ht = new W(null, "sh", "sh", -682444007), it = new W(null, "capture", "capture", -677031143), jt = new W(null, "sw", "sw", 833113913), kt = new W(null, "decoding", "decoding", -568180903), lt = new W(null, "domain", "domain", 1847214937), mt = new W(null, "input", "input", 556931961), nt = new W(null, "cp2y", "cp2y", 903335801), ot = new W(null, "server-name", "server-name", 
-1012104295), pt = new W(null, "ff-grow-up-to-count", "ff-grow-up-to-count", 738299833), qt = new W(null, "uuid", "uuid", -2145095719), rt = new W(null, "seq", "seq", -1817803783), st = new W(null, "keep-n", "keep-n", -176064454), tt = new W(null, "put", "put", 1299772570), ut = new W(null, "json", "json", 1279968570), vt = new W(null, "change", "change", -1163046502), wt = new W(null, "timeout", "timeout", -318625318), xt = new W(null, "down-1", "down-1", -85274150), yt = new W(null, "page-down", 
"page-down", -392838598), zt = new W(null, "purple", "purple", -876021126), At = new W(null, "end", "end", -268185958), Bt = new W(null, "transit-opts", "transit-opts", 1104386010), Ct = new W(null, "y2", "y2", -718691301), Dt = new W(null, "query-string", "query-string", -1018845061), Et = new W(null, "max_results", "max_results", 776458459), Ft = new W(null, "circles?", "circles?", -1676300005), Gt = new W("comportexviz", "draw-input", "comportexviz/draw-input", -516395685), Ht = new W(null, "inactive-syn", 
"inactive-syn", 1351816571), It = new W(null, "body", "body", -2049205669), Jt = new W(null, "down-right", "down-right", 1213350619), Kt = new W(null, "proximal-vs-distal-weight", "proximal-vs-distal-weight", -1312658693), Lt = new W(null, "jump-6-12", "jump-6-12", -1217478725), Mt = new W(null, "tgt-\x3ei", "tgt-\x3ei", -220968868), Nt = new W(null, "highlight-color", "highlight-color", -1394121540), Ot = new W("comportexviz.viz-canvas", "cache", "comportexviz.viz-canvas/cache", 33193148), Pt = 
new W(null, "force-update?", "force-update?", 137364796), Qt = new W(null, "distal-exc", "distal-exc", -506020516), Rt = new W(null, "duty-cycle-period", "duty-cycle-period", -962296356), St = new W(null, "layer-3", "layer-3", 891136476), Tt = new W(null, "pcon", "pcon", 219389436), Ut = new W(null, "edn-params", "edn-params", 894273052), Vt = new W(null, "permanences", "permanences", -1713734116), Wt = new W("org.nfrac.comportex.core", "no-matching-UUID!", "org.nfrac.comportex.core/no-matching-UUID!", 
1023231548), Xt = new W("comportexviz.viz-canvas", "ocols", "comportexviz.viz-canvas/ocols", -2081286436), Fk = new W(null, "keywordize-keys", "keywordize-keys", 1310784252), Yt = new W(null, "rect", "rect", -108902628), Zt = new W(null, "step", "step", 1288888124), $t = new W(null, "prox-exc", "prox-exc", -708084900), au = new W(null, "basic-auth", "basic-auth", -673163332), bu = new W(null, "p", "p", 151049309), cu = new W(null, "ff-max-synapse-count", "ff-max-synapse-count", -497183491), du = 
new W("comportexviz.viz-canvas", "vcols", "comportexviz.viz-canvas/vcols", 649010429), eu = new W(null, "column-field", "column-field", -2123020963), fu = new W(null, "x2", "x2", -1362513475), gu = new W(null, "scheme", "scheme", 90199613), hu = new W(null, "trace-redirects", "trace-redirects", -1149427907), iu = new W(null, "spontaneous-activation?", "spontaneous-activation?", 1807538270), ju = new W(null, "run-6-10", "run-6-10", 295893118), ku = new W(null, "href", "href", -793805698), lu = new W(null, 
"none", "none", 1333468478), mu = new W(null, "request-method", "request-method", 1764796830), nu = new W(null, "votes-per-bit", "votes-per-bit", -1001226722), ou = new W(null, "bucket", "bucket", 1126218366), pu = new W(null, "cull-zeros?", "cull-zeros?", -434506978), qu = new W(null, "col-d-px", "col-d-px", -985327682), ru = new W(null, "positions", "positions", -1380538434), su = new W(null, "bit-shrink", "bit-shrink", -1161684994), tu = new W(null, "range", "range", 1639692286), uu = new W(null, 
"height", "height", 1025178622), vu = new W(null, "select", "select", 1147833503), wu = new W(null, "distal-perm-init", "distal-perm-init", -48514913), xu = new W(null, "ff-stimulus-threshold", "ff-stimulus-threshold", -48644961), yu = new W(null, "promote", "promote", -1158882145), zu = new W(null, "skip", "skip", 602715391), Au = new W(null, "cell-r-px", "cell-r-px", 423637311), Bu = new W(null, "topology", "topology", -474296001), Cu = new W(null, "left", "left", -399115937), Nj = new W("cljs.core", 
"not-found", "cljs.core/not-found", -1572889185), Du = new W(null, "raw-sg", "raw-sg", 955489791), Eu = new W(null, "accept", "accept", 1874130431), Fu = new W(null, "text", "text", -1790561697), Gu = new W(null, "element-w", "element-w", 2089708127), Hu = new W(null, "span", "span", 1394872991), Iu = new W(null, "margin", "margin", -995903681), Ju = new W(null, "data", "data", -232669377);
function Ku(a, b) {
  this.Bc = {};
  this.mb = [];
  this.Aa = 0;
  var c = arguments.length;
  if (1 < c) {
    if (c % 2) {
      throw Error("Uneven number of arguments");
    }
    for (var d = 0;d < c;d += 2) {
      this.set(arguments[d], arguments[d + 1]);
    }
  } else {
    if (a) {
      a instanceof Ku ? (c = a.bc(), d = a.Wc()) : (c = Xa(a), d = Va(a));
      for (var e = 0;e < c.length;e++) {
        this.set(c[e], d[e]);
      }
    }
  }
}
k = Ku.prototype;
k.Mg = function() {
  return this.Aa;
};
k.Wc = function() {
  Lu(this);
  for (var a = [], b = 0;b < this.mb.length;b++) {
    a.push(this.Bc[this.mb[b]]);
  }
  return a;
};
k.bc = function() {
  Lu(this);
  return this.mb.concat();
};
k.ce = function(a) {
  return Mu(this.Bc, a);
};
k.Cb = function(a, b) {
  if (this === a) {
    return!0;
  }
  if (this.Aa != a.Mg()) {
    return!1;
  }
  var c = b || Nu;
  Lu(this);
  for (var d, e = 0;d = this.mb[e];e++) {
    if (!c(this.get(d), a.get(d))) {
      return!1;
    }
  }
  return!0;
};
function Nu(a, b) {
  return a === b;
}
k.Mf = function() {
  return 0 == this.Aa;
};
k.clear = function() {
  this.Bc = {};
  this.Aa = this.mb.length = 0;
};
k.remove = function(a) {
  return Mu(this.Bc, a) ? (delete this.Bc[a], this.Aa--, this.mb.length > 2 * this.Aa && Lu(this), !0) : !1;
};
function Lu(a) {
  if (a.Aa != a.mb.length) {
    for (var b = 0, c = 0;b < a.mb.length;) {
      var d = a.mb[b];
      Mu(a.Bc, d) && (a.mb[c++] = d);
      b++;
    }
    a.mb.length = c;
  }
  if (a.Aa != a.mb.length) {
    for (var e = {}, c = b = 0;b < a.mb.length;) {
      d = a.mb[b], Mu(e, d) || (a.mb[c++] = d, e[d] = 1), b++;
    }
    a.mb.length = c;
  }
}
k.get = function(a, b) {
  return Mu(this.Bc, a) ? this.Bc[a] : b;
};
k.set = function(a, b) {
  Mu(this.Bc, a) || (this.Aa++, this.mb.push(a));
  this.Bc[a] = b;
};
k.forEach = function(a, b) {
  for (var c = this.bc(), d = 0;d < c.length;d++) {
    var e = c[d], f = this.get(e);
    a.call(b, f, e, this);
  }
};
k.clone = function() {
  return new Ku(this);
};
function Mu(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b);
}
;function Ou(a) {
  var b = a.type;
  if (!ca(b)) {
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
      return ca(a.value) ? a.value : null;
  }
}
;var Pu;
a: {
  var Qu = ba.navigator;
  if (Qu) {
    var Ru = Qu.userAgent;
    if (Ru) {
      Pu = Ru;
      break a;
    }
  }
  Pu = "";
}
;var Su = -1 != Pu.indexOf("Opera") || -1 != Pu.indexOf("OPR"), Tu = -1 != Pu.indexOf("Trident") || -1 != Pu.indexOf("MSIE"), Uu = -1 != Pu.indexOf("Gecko") && -1 == Pu.toLowerCase().indexOf("webkit") && !(-1 != Pu.indexOf("Trident") || -1 != Pu.indexOf("MSIE")), Vu = -1 != Pu.toLowerCase().indexOf("webkit");
function Wu() {
  var a = ba.document;
  return a ? a.documentMode : void 0;
}
var Xu = function() {
  var a = "", b;
  if (Su && ba.opera) {
    return a = ba.opera.version, la(a) ? a() : a;
  }
  Uu ? b = /rv\:([^\);]+)(\)|;)/ : Tu ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : Vu && (b = /WebKit\/(\S+)/);
  b && (a = (a = b.exec(Pu)) ? a[1] : "");
  return Tu && (b = Wu(), b > parseFloat(a)) ? String(b) : a;
}(), Yu = {};
function Zu(a) {
  var b;
  if (!(b = Yu[a])) {
    b = 0;
    for (var c = Ha(String(Xu)).split("."), d = Ha(String(a)).split("."), e = Math.max(c.length, d.length), f = 0;0 == b && f < e;f++) {
      var g = c[f] || "", h = d[f] || "", l = RegExp("(\\d*)(\\D*)", "g"), p = RegExp("(\\d*)(\\D*)", "g");
      do {
        var s = l.exec(g) || ["", "", ""], t = p.exec(h) || ["", "", ""];
        if (0 == s[0].length && 0 == t[0].length) {
          break;
        }
        b = Sa(0 == s[1].length ? 0 : parseInt(s[1], 10), 0 == t[1].length ? 0 : parseInt(t[1], 10)) || Sa(0 == s[2].length, 0 == t[2].length) || Sa(s[2], t[2]);
      } while (0 == b);
    }
    b = Yu[a] = 0 <= b;
  }
  return b;
}
var $u = ba.document, av = $u && Tu ? Wu() || ("CSS1Compat" == $u.compatMode ? parseInt(Xu, 10) : 5) : void 0;
var bv = !Tu || Tu && 9 <= av, cv = !Uu && !Tu || Tu && Tu && 9 <= av || Uu && Zu("1.9.1"), dv = Tu && !Zu("9");
function ev(a) {
  return a ? new fv(gv(a)) : cb || (cb = new fv);
}
function hv(a, b) {
  var c = b && "*" != b ? b.toUpperCase() : "";
  return a.querySelectorAll && a.querySelector && c ? a.querySelectorAll(c + "") : a.getElementsByTagName(c || "*");
}
function iv(a, b) {
  Ua(b, function(b, d) {
    "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in jv ? a.setAttribute(jv[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b;
  });
}
var jv = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", frameborder:"frameBorder", height:"height", maxlength:"maxLength", role:"role", rowspan:"rowSpan", type:"type", usemap:"useMap", valign:"vAlign", width:"width"};
function kv(a, b, c, d) {
  function e(c) {
    c && b.appendChild(ja(c) ? a.createTextNode(c) : c);
  }
  for (;d < c.length;d++) {
    var f = c[d];
    !ia(f) || ma(f) && 0 < f.nodeType ? e(f) : kb(lv(f) ? pb(f) : f, e);
  }
}
function mv(a) {
  return void 0 != a.firstElementChild ? a.firstElementChild : nv(a.firstChild);
}
function nv(a) {
  for (;a && 1 != a.nodeType;) {
    a = a.nextSibling;
  }
  return a;
}
function gv(a) {
  return 9 == a.nodeType ? a : a.ownerDocument || a.document;
}
var ov = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, pv = {IMG:" ", BR:"\n"};
function qv(a) {
  if (dv && "innerText" in a) {
    a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
  } else {
    var b = [];
    rv(a, b, !0);
    a = b.join("");
  }
  a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
  a = a.replace(/\u200B/g, "");
  dv || (a = a.replace(/ +/g, " "));
  " " != a && (a = a.replace(/^\s*/, ""));
  return a;
}
function rv(a, b, c) {
  if (!(a.nodeName in ov)) {
    if (3 == a.nodeType) {
      c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
    } else {
      if (a.nodeName in pv) {
        b.push(pv[a.nodeName]);
      } else {
        for (a = a.firstChild;a;) {
          rv(a, b, c), a = a.nextSibling;
        }
      }
    }
  }
}
function lv(a) {
  if (a && "number" == typeof a.length) {
    if (ma(a)) {
      return "function" == typeof a.item || "string" == typeof a.item;
    }
    if (la(a)) {
      return "function" == typeof a.item;
    }
  }
  return!1;
}
function fv(a) {
  this.Id = a || ba.document || document;
}
k = fv.prototype;
k.qd = function(a, b, c) {
  var d = this.Id, e = arguments, f = e[0], g = e[1];
  if (!bv && g && (g.name || g.type)) {
    f = ["\x3c", f];
    g.name && f.push(' name\x3d"', Ia(g.name), '"');
    if (g.type) {
      f.push(' type\x3d"', Ia(g.type), '"');
      var h = {};
      Za(h, g);
      delete h.type;
      g = h;
    }
    f.push("\x3e");
    f = f.join("");
  }
  f = d.createElement(f);
  g && (ja(g) ? f.className = g : "array" == m(g) ? f.className = g.join(" ") : iv(f, g));
  2 < e.length && kv(d, f, e, 2);
  return f;
};
k.createElement = function(a) {
  return this.Id.createElement(a);
};
k.createTextNode = function(a) {
  return this.Id.createTextNode(String(a));
};
k.appendChild = function(a, b) {
  a.appendChild(b);
};
k.append = function(a, b) {
  kv(gv(a), a, arguments, 1);
};
k.Lg = function(a) {
  return cv && void 0 != a.children ? a.children : lb(a.childNodes, function(a) {
    return 1 == a.nodeType;
  });
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
var sv, tv, uv, vv, wv, xv, yv, zv, Av, Bv, Cv, Dv, Ev, Fv, Gv, Hv, Iv = {}.hasOwnProperty;
zv = function(a) {
  console.log(a);
};
Cv = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
Bv = /^(svg|g|rect|circle|clipPath|path|line|polygon|polyline|text|textPath)$/;
Dv = /^\s+$/;
Av = /:(.+)/;
Hv = {qj:"http://www.w3.org/1999/xhtml", Dj:"http://www.w3.org/1999/xlink", ej:"http://www.w3.org/2000/svg", xml:"http://www.w3.org/XML/1998/namespace", Ej:"http://www.w3.org/2000/xmlns"};
xv = function(a) {
  var b, c;
  c = a.split(":");
  b = c[0];
  c = c[1];
  return null != c ? [Hv[b] || b, c] : a.match(Bv) ? [Hv.ej, a] : [Hv.qj, a];
};
uv = function(a) {
  return ":*:" === a[0];
};
Fv = function(a) {
  return null != a && a instanceof Jv;
};
vv = function(a) {
  return null != a && !1;
};
sv = function(a) {
  return null != a && null != a.forEach;
};
wv = function(a) {
  return null != a && !sv(a) && !Fv(a) && !vv(a) && a instanceof Object;
};
tv = function(a) {
  return null != a && null != a.nodeType;
};
Ev = function(a) {
  return null != a && null != a.substring;
};
yv = function(a) {
  return null != a && null != a.toFixed;
};
Gv = function(a) {
  return 8 === a.nodeType || 3 === a.nodeType && a.textContent.match(Dv);
};
function Kv(a, b) {
  var c, d, e, f, g;
  if (null != b.style) {
    f = b.style;
    var h;
    h = [];
    for (g in f) {
      Iv.call(f, g) && (c = f[g], h.push(a.style[Ta(g)] = c));
    }
    delete b.style;
  }
  if (null != b.properties) {
    f = b.properties;
    c = [];
    for (e in f) {
      Iv.call(f, e) && (g = f[e], c.push(a[e] = g));
    }
    delete b.properties;
  }
  sv(b["class"]) && (a.setAttribute("class", b["class"].join(" ")), delete b["class"]);
  g = [];
  for (d in b) {
    Iv.call(b, d) && (f = b[d], null != f ? (c = d.split(Av), e = c[0], c = c[1], null != c ? g.push(a.setAttributeNS(Hv[e] || e, c, f)) : g.push(a.setAttribute(d, f))) : g.push(a.removeAttribute(d)));
  }
}
function Lv(a, b) {
  return null != b ? a.__singult_data__ = b : a.__singult_data__;
}
function Mv(a) {
  return yv(a) ? a.toString() : sv(a) ? Nv(a) : a;
}
function Nv(a) {
  var b, c, d, e, f;
  f = a[0];
  d = wv(a[1]) ? [a[1], a.slice(2)] : [{}, a.slice(1)];
  a = d[0];
  d = d[1];
  e = f.match(Cv);
  f = e[1];
  b = e[2];
  e = e[3];
  null != b && (a.id = b);
  null != e && (b = e.split("."), sv(a["class"]) ? a["class"] = a["class"].concat(b) : Ev(a["class"]) ? a["class"] = b.concat([a["class"]]) : null == a["class"] && (a["class"] = b));
  f = xv(f);
  b = f[0];
  f = f[1];
  c = [];
  d.forEach(function(a) {
    if (null != a) {
      return uv(a) ? a.slice(1).forEach(function(a) {
        return c.push(Mv(a));
      }) : c.push(Mv(a));
    }
  });
  return{Hi:b, tag:f, kg:a, children:c};
}
function Ov(a) {
  var b, c;
  if (Fv(a)) {
    throw Error("Unify must be the first and only child of its parent.");
  }
  if (vv(a)) {
    return null;
  }
  if (Ev(a)) {
    return document.createTextNode(a);
  }
  if (tv(a)) {
    return a;
  }
  b = document.createElementNS(a.Hi, a.tag);
  Kv(b, a.kg);
  Fv(c = a.children[0]) ? null != c.kb ? c.data.forEach(function(a) {
    var e;
    e = c.kb(a);
    Lv(e, a);
    return b.appendChild(e);
  }) : c.data.forEach(function(a) {
    var e;
    e = Ov(Mv(c.ob(a)));
    Lv(e, a);
    return b.appendChild(e);
  }) : a.children.forEach(function(a) {
    a = Ov(a);
    if (null != a) {
      return b.appendChild(a);
    }
  });
  return b;
}
function Jv(a, b, c, d, e, f, g) {
  this.data = a;
  this.ob = b;
  this.Fb = c;
  this.kb = d;
  this.update = e;
  this.Db = f;
  this.gi = g;
  return this;
}
function Pv(a, b) {
  var c, d, e, f, g, h, l, p, s, t, v, B, y;
  g = b.kb || function(c) {
    c = Ov(Mv(b.ob(c)));
    a.appendChild(c);
    return c;
  };
  y = b.update || function(a, c) {
    return Qv(a, Mv(b.ob(c)));
  };
  h = b.Db || function(b) {
    return a.removeChild(b);
  };
  s = b.Fb || function(a, b) {
    return b;
  };
  c = a.childNodes;
  f = function(a, b) {
    return "\x00" + s(a, b);
  };
  v = function(a, b) {
    return f(Lv(a), b);
  };
  t = function(a, c) {
    var d;
    if (b.gi) {
      return d = y(a, c), Lv(d, c);
    }
    d = Lv(a);
    if (null != d.J ? !d.J(d, c) : d !== c) {
      return d = y(a, c), Lv(d, c);
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
  B = {};
  for (d = 0;d < c.length;) {
    p = v(c[d], d), e[p] && (B[p] = c[d]), d += 1;
  }
  b.data.forEach(function(a, b) {
    var d, e, p;
    p = (d = b < c.length ? c[b] : void 0) ? v(d, b) : void 0;
    e = f(a, b);
    if (null == d) {
      return d = g(a), Lv(d, a);
    }
    if (p === e) {
      return t(c[b], a);
    }
    B[p] || h(d);
    if (B[e]) {
      return d = B[e], l(d, b), t(d, a);
    }
    d = g(a);
    l(d, b);
    return Lv(d, a);
  });
  for (d = b.data.length;d < c.length;) {
    h(c[d]);
  }
}
function Qv(a, b) {
  var c, d, e, f;
  if (Fv(b)) {
    Pv(a, b);
  } else {
    if (!vv(b)) {
      if (a.nodeName.toLowerCase() !== b.tag.toLowerCase()) {
        throw zv(a), zv(b), Error("Cannot merge $e into node of different type");
      }
      Kv(a, b.kg);
      if (a.hasChildNodes()) {
        for (e = d = f = a.childNodes.length - 1;0 >= f ? 0 >= d : 0 <= d;e = 0 >= f ? ++d : --d) {
          c = a.childNodes[e], Gv(c) && a.removeChild(c);
        }
      }
      if (Fv(b.children[0])) {
        Qv(a, b.children[0]);
      } else {
        if (a.childNodes.length > b.children.length) {
          for (e = c = d = a.childNodes.length - 1;0 >= d ? 0 >= c : 0 <= c;e = 0 >= d ? ++c : --c) {
            a.removeChild(a.childNodes[e]);
          }
        }
        for (e = 0;e < b.children.length;) {
          d = b.children[e] || "";
          c = a.childNodes[e];
          if (Ev(d)) {
            null != c ? c.textContent = d : a.appendChild(document.createTextNode(d));
          } else {
            if (!vv(d)) {
              if (wv(d)) {
                null != c ? Qv(c, d) : a.appendChild(Ov(d));
              } else {
                throw zv(c), zv(d), Error("Cannot merge children");
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
;function Rv(a, b, c, d, e, f, g, h, l) {
  this.data = a;
  this.ob = b;
  this.Fb = c;
  this.kb = d;
  this.update = e;
  this.Db = f;
  this.Tb = g;
  this.o = h;
  this.l = l;
  this.B = 2229667594;
  this.K = 8192;
  7 < arguments.length ? (this.o = h, this.l = l) : this.l = this.o = null;
}
k = Rv.prototype;
k.N = function(a, b) {
  return hc.j(this, b, null);
};
k.P = function(a, b, c) {
  switch(b instanceof W ? b.ja : null) {
    case "force-update?":
      return this.Tb;
    case "exit":
      return this.Db;
    case "update":
      return this.update;
    case "enter":
      return this.kb;
    case "key-fn":
      return this.Fb;
    case "mapping":
      return this.ob;
    case "data":
      return this.data;
    default:
      return P.j(this.l, b, c);
  }
};
k.U = function(a, b, c) {
  return kk(b, function() {
    return function(a) {
      return kk(b, qk, "", " ", "", c, a);
    };
  }(this), "#singult.core.Unify{", ", ", "}", c, wg.h(new U(null, 7, 5, V, [new U(null, 2, 5, V, [Ju, this.data], null), new U(null, 2, 5, V, [en, this.ob], null), new U(null, 2, 5, V, [xq, this.Fb], null), new U(null, 2, 5, V, [gq, this.kb], null), new U(null, 2, 5, V, [In, this.update], null), new U(null, 2, 5, V, [fm, this.Db], null), new U(null, 2, 5, V, [Pt, this.Tb], null)], null), this.l));
};
k.L = function() {
  return this.o;
};
k.ma = function() {
  return new Rv(this.data, this.ob, this.Fb, this.kb, this.update, this.Db, this.Tb, this.o, this.l, this.A);
};
k.Z = function() {
  return 7 + J(this.l);
};
k.S = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Jf(this);
};
k.J = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && ui(this, b) : b) ? !0 : !1;
};
k.Ra = function(a, b) {
  return Ze(new Oj(null, new n(null, 7, [fm, null, en, null, In, null, gq, null, xq, null, Pt, null, Ju, null], null), null), b) ? we.h(ge(Ah.h(Gi, this), this.o), b) : new Rv(this.data, this.ob, this.Fb, this.kb, this.update, this.Db, this.Tb, this.o, Fg(we.h(this.l, b)), null);
};
k.za = function(a, b, c) {
  return q(X.h ? X.h(Ju, b) : X.call(null, Ju, b)) ? new Rv(c, this.ob, this.Fb, this.kb, this.update, this.Db, this.Tb, this.o, this.l, null) : q(X.h ? X.h(en, b) : X.call(null, en, b)) ? new Rv(this.data, c, this.Fb, this.kb, this.update, this.Db, this.Tb, this.o, this.l, null) : q(X.h ? X.h(xq, b) : X.call(null, xq, b)) ? new Rv(this.data, this.ob, c, this.kb, this.update, this.Db, this.Tb, this.o, this.l, null) : q(X.h ? X.h(gq, b) : X.call(null, gq, b)) ? new Rv(this.data, this.ob, this.Fb, 
  c, this.update, this.Db, this.Tb, this.o, this.l, null) : q(X.h ? X.h(In, b) : X.call(null, In, b)) ? new Rv(this.data, this.ob, this.Fb, this.kb, c, this.Db, this.Tb, this.o, this.l, null) : q(X.h ? X.h(fm, b) : X.call(null, fm, b)) ? new Rv(this.data, this.ob, this.Fb, this.kb, this.update, c, this.Tb, this.o, this.l, null) : q(X.h ? X.h(Pt, b) : X.call(null, Pt, b)) ? new Rv(this.data, this.ob, this.Fb, this.kb, this.update, this.Db, c, this.o, this.l, null) : new Rv(this.data, this.ob, this.Fb, 
  this.kb, this.update, this.Db, this.Tb, this.o, Q.j(this.l, b, c), null);
};
k.W = function() {
  return A(wg.h(new U(null, 7, 5, V, [new U(null, 2, 5, V, [Ju, this.data], null), new U(null, 2, 5, V, [en, this.ob], null), new U(null, 2, 5, V, [xq, this.Fb], null), new U(null, 2, 5, V, [gq, this.kb], null), new U(null, 2, 5, V, [In, this.update], null), new U(null, 2, 5, V, [fm, this.Db], null), new U(null, 2, 5, V, [Pt, this.Tb], null)], null), this.l));
};
k.M = function(a, b) {
  return new Rv(this.data, this.ob, this.Fb, this.kb, this.update, this.Db, this.Tb, b, this.l, this.A);
};
k.Y = function(a, b) {
  return He(b) ? kc(this, w.h(b, 0), w.h(b, 1)) : Nb.j($b, this, b);
};
var Tv = function Sv(b) {
  if (b instanceof Rv) {
    var c = Xe(b) ? S.h(Qg, b) : b, d = P.h(c, Pt), e = P.h(c, fm), f = P.h(c, In), g = P.h(c, gq), h = P.h(c, xq), l = P.h(c, en), p = P.h(c, Ju), s = function() {
      for (var b = [], c = A(p), d = null, e = 0, f = 0;;) {
        if (f < e) {
          var g = d.H(null, f);
          b.push(g);
          f += 1;
        } else {
          if (c = A(c)) {
            d = c, T(d) ? (c = x(d), f = z(d), d = c, e = J(c), c = f) : (c = C(d), b.push(c), c = F(d), d = null, e = 0), f = 0;
          } else {
            break;
          }
        }
      }
      return b;
    }();
    return new Jv(s, function(b, c, d, e, f, g, h, l) {
      return function(b) {
        return Sv(l.g ? l.g(b) : l.call(null, b));
      };
    }(b, c, d, e, f, g, h, l, p, s), h, g, f, e, d);
  }
  if (b instanceof W) {
    return Rf(b);
  }
  if (Ge(b)) {
    c = {};
    b = A(b);
    d = null;
    for (f = e = 0;;) {
      if (f < e) {
        h = d.H(null, f);
        g = O.j(h, 0, null);
        h = O.j(h, 1, null);
        g = Sv(g);
        if ("string" !== typeof g) {
          throw "Cannot convert; JavaScript map keys must be strings";
        }
        c[g] = Sv(h);
        f += 1;
      } else {
        if (b = A(b)) {
          if (T(b)) {
            e = x(b), b = z(b), d = e, e = J(e);
          } else {
            e = C(b);
            d = O.j(e, 0, null);
            e = O.j(e, 1, null);
            d = Sv(d);
            if ("string" !== typeof d) {
              throw "Cannot convert; JavaScript map keys must be strings";
            }
            c[d] = Sv(e);
            b = F(b);
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
  if (Xe(b)) {
    c = [];
    c.push(":*:");
    b = A(b);
    d = null;
    for (f = e = 0;;) {
      if (f < e) {
        g = d.H(null, f), c.push(Sv(g)), f += 1;
      } else {
        if (b = A(b)) {
          d = b, T(d) ? (b = x(d), f = z(d), d = b, e = J(b), b = f) : (b = C(d), c.push(Sv(b)), b = F(d), d = null, e = 0), f = 0;
        } else {
          break;
        }
      }
    }
    return c;
  }
  if (De(b)) {
    c = [];
    b = A(b);
    d = null;
    for (f = e = 0;;) {
      if (f < e) {
        g = d.H(null, f), c.push(Sv(g)), f += 1;
      } else {
        if (b = A(b)) {
          d = b, T(d) ? (b = x(d), f = z(d), d = b, e = J(b), b = f) : (b = C(d), c.push(Sv(b)), b = F(d), d = null, e = 0), f = 0;
        } else {
          break;
        }
      }
    }
    return c;
  }
  return b;
};
function Uv(a, b) {
  if (null == b) {
    return null;
  }
  var c;
  c = Tv(b);
  c = Mv.g ? Mv.g(c) : Mv.call(null, c);
  return Qv.h ? Qv.h(a, c) : Qv.call(null, a, c);
}
var Vv = function() {
  function a(a, d, e) {
    var f = null;
    2 < arguments.length && (f = G(Array.prototype.slice.call(arguments, 2), 0));
    return b.call(this, a, d, f);
  }
  function b(a, b, e) {
    var f = Xe(e) ? S.h(Qg, e) : e;
    e = P.h(f, Pt);
    var g = P.h(f, fm), h = P.h(f, In), l = P.h(f, gq), f = P.h(f, xq);
    return new Rv(a, b, f, l, h, g, e);
  }
  a.D = 2;
  a.q = function(a) {
    var d = C(a);
    a = F(a);
    var e = C(a);
    a = E(a);
    return b(d, e, a);
  };
  a.k = b;
  return a;
}();
function Wv(a) {
  Tu && ca(a.cssText) ? a.cssText = ".goog-tabpane-clear { clear: both; height: 0px; overflow: hidden }" : a.innerHTML = ".goog-tabpane-clear { clear: both; height: 0px; overflow: hidden }";
}
;function Xv(a, b, c) {
  if ("string" === typeof b) {
    return a.replace(new RegExp(String(b).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), "g"), c);
  }
  if (q(b.hasOwnProperty("source"))) {
    return a.replace(new RegExp(b.source, "g"), c);
  }
  throw "Invalid match arg: " + u.g(b);
}
var Yv = function() {
  function a(a, b) {
    return S.h(u, th(a, b));
  }
  function b(a) {
    return S.h(u, a);
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
function Zv(a) {
  return a.toUpperCase();
}
function $v(a) {
  return a.toLowerCase();
}
function aw(a) {
  return 2 > J(a) ? Zv(a) : "" + u.g(Zv(If.j(a, 0, 1))) + u.g($v(If.h(a, 1)));
}
function bw(a, b) {
  if (0 >= b || b >= 2 + J(a)) {
    return te.h($h(ee("", kh.h(u, A(a)))), "");
  }
  if (q(Fd.h ? Fd.h(1, b) : Fd.call(null, 1, b))) {
    return new U(null, 1, 5, V, [a], null);
  }
  if (q(Fd.h ? Fd.h(2, b) : Fd.call(null, 2, b))) {
    return new U(null, 2, 5, V, ["", a], null);
  }
  var c = b - 2;
  return te.h($h(ee("", ji.j($h(kh.h(u, A(a))), 0, c))), If.h(a, c));
}
var cw = function() {
  function a(a, b, c) {
    if (Fd.h("" + u.g(b), "/(?:)/")) {
      b = bw(a, c);
    } else {
      if (1 > c) {
        b = $h(("" + u.g(a)).split(b));
      } else {
        a: {
          for (var g = c, h = se;;) {
            if (Fd.h(g, 1)) {
              b = te.h(h, a);
              break a;
            }
            var l = ik(b, a);
            if (q(l)) {
              var p = l, l = a.indexOf(p), p = a.substring(l + J(p)), g = g - 1, h = te.h(h, a.substring(0, l));
              a = p;
            } else {
              b = te.h(h, a);
              break a;
            }
          }
          b = void 0;
        }
      }
    }
    if (Fd.h(0, c)) {
      a: {
        for (c = b;;) {
          if (Fd.h("", Ae(c))) {
            c = null == c ? null : yc(c);
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
q("undefined" != typeof NodeList) && (NodeList.prototype.wg = !0, NodeList.prototype.W = function() {
  return G.h(this, 0);
});
HTMLCollection.prototype.wg = !0;
HTMLCollection.prototype.W = function() {
  return G.h(this, 0);
};
function dw(a) {
  if (a ? a.df : a) {
    return a.df(a);
  }
  var b;
  b = dw[m(null == a ? null : a)];
  if (!b && (b = dw._, !b)) {
    throw r("IDom.-\x3edom", a);
  }
  return b.call(null, a);
}
U.prototype.df = function() {
  var a;
  a = Tv(this);
  a = Mv.g ? Mv.g(a) : Mv.call(null, a);
  return Ov.g ? Ov.g(a) : Ov.call(null, a);
};
dw.string = function(a) {
  return ew.g ? ew.g(a) : ew.call(null, a);
};
q("undefined" != typeof Node) && (Node.prototype.df = function() {
  return this;
});
var ew = function() {
  function a(a, b) {
    return dw(b).querySelector(a);
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
}(), fw = function() {
  function a(a, b) {
    var c = dw(a);
    if ("textContent" in c) {
      c.textContent = b;
    } else {
      if (3 == c.nodeType) {
        c.data = b;
      } else {
        if (c.firstChild && 3 == c.firstChild.nodeType) {
          for (;c.lastChild != c.firstChild;) {
            c.removeChild(c.lastChild);
          }
          c.firstChild.data = b;
        } else {
          for (var g;g = c.firstChild;) {
            c.removeChild(g);
          }
          c.appendChild(gv(c).createTextNode(String(b)));
        }
      }
    }
    return c;
  }
  function b(a) {
    a = dw(a);
    return qv(a);
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
}(), gw = function() {
  function a(a, b) {
    var c = dw(a), g = c.type;
    if (ca(g)) {
      switch(g.toLowerCase()) {
        case "checkbox":
        ;
        case "radio":
          c.checked = b ? "checked" : null;
          break;
        case "select-one":
          c.selectedIndex = -1;
          if (ja(b)) {
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
          ja(g) && (g = [g]);
          for (var l = 0;h = c.options[l];l++) {
            if (h.selected = !1, g) {
              for (var p, s = 0;p = g[s];s++) {
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
    a = dw(a);
    return Ou(a);
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
}(), hw = function() {
  var a = window.requestAnimationFrame;
  if (q(a)) {
    return a;
  }
  var b = window.webkitRequestAnimationFrame;
  return q(b) ? b : function(a, b) {
    return function(e) {
      return setTimeout(function() {
        return function() {
          return e.w ? e.w() : e.call(null);
        };
      }(a, b), 10);
    };
  }(b, a);
}();
var iw;
function jw(a) {
  var b = iw;
  try {
    iw = function() {
      var a = Qj, b = new n(null, 1, [bl, !0], null);
      return Sg.j ? Sg.j(a, Cb, b) : Sg.call(null, a, Cb, b);
    }();
    var c = a.w ? a.w() : a.call(null);
    Xe(c) && gk.g(c);
    return new n(null, 2, [gt, c, wm, function() {
      var a = iw;
      return I.g ? I.g(a) : I.call(null, a);
    }()], null);
  } finally {
    iw = b;
  }
}
function kw(a) {
  q(function() {
    var b = iw;
    return q(b) ? Hb(bl.g(ze(a))) : b;
  }()) && Vg.h(iw, function(b) {
    return te.h(b, a);
  });
}
Pg.prototype.Dd = function() {
  kw(this);
  return this.state;
};
function lw(a, b, c, d, e, f, g, h) {
  this.state = a;
  this.xb = b;
  this.f = c;
  this.key = d;
  this.Mb = e;
  this.Da = f;
  this.o = g;
  this.l = h;
  this.B = 2229700362;
  this.K = 8194;
  6 < arguments.length ? (this.o = g, this.l = h) : this.l = this.o = null;
}
k = lw.prototype;
k.N = function(a, b) {
  return hc.j(this, b, null);
};
k.P = function(a, b, c) {
  switch(b instanceof W ? b.ja : null) {
    case "watches":
      return this.Da;
    case "parent-watchables":
      return this.Mb;
    case "key":
      return this.key;
    case "f":
      return this.f;
    case "dirty?":
      return this.xb;
    case "state":
      return this.state;
    default:
      return P.j(this.l, b, c);
  }
};
k.U = function(a, b, c) {
  return kk(b, function() {
    return function(a) {
      return kk(b, qk, "", " ", "", c, a);
    };
  }(this), "#reflex.core.ComputedObservable{", ", ", "}", c, wg.h(new U(null, 6, 5, V, [new U(null, 2, 5, V, [Fp, this.state], null), new U(null, 2, 5, V, [ln, this.xb], null), new U(null, 2, 5, V, [Ps, this.f], null), new U(null, 2, 5, V, [Xl, this.key], null), new U(null, 2, 5, V, [Ym, this.Mb], null), new U(null, 2, 5, V, [fl, this.Da], null)], null), this.l));
};
k.L = function() {
  return this.o;
};
k.ma = function() {
  return new lw(this.state, this.xb, this.f, this.key, this.Mb, this.Da, this.o, this.l, this.A);
};
k.Z = function() {
  return 6 + J(this.l);
};
k.S = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Jf(this);
};
k.J = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && ui(this, b) : b) ? !0 : !1;
};
k.Ra = function(a, b) {
  return Ze(new Oj(null, new n(null, 6, [fl, null, Xl, null, Ym, null, ln, null, Fp, null, Ps, null], null), null), b) ? we.h(ge(Ah.h(Gi, this), this.o), b) : new lw(this.state, this.xb, this.f, this.key, this.Mb, this.Da, this.o, Fg(we.h(this.l, b)), null);
};
k.za = function(a, b, c) {
  return q(X.h ? X.h(Fp, b) : X.call(null, Fp, b)) ? new lw(c, this.xb, this.f, this.key, this.Mb, this.Da, this.o, this.l, null) : q(X.h ? X.h(ln, b) : X.call(null, ln, b)) ? new lw(this.state, c, this.f, this.key, this.Mb, this.Da, this.o, this.l, null) : q(X.h ? X.h(Ps, b) : X.call(null, Ps, b)) ? new lw(this.state, this.xb, c, this.key, this.Mb, this.Da, this.o, this.l, null) : q(X.h ? X.h(Xl, b) : X.call(null, Xl, b)) ? new lw(this.state, this.xb, this.f, c, this.Mb, this.Da, this.o, this.l, 
  null) : q(X.h ? X.h(Ym, b) : X.call(null, Ym, b)) ? new lw(this.state, this.xb, this.f, this.key, c, this.Da, this.o, this.l, null) : q(X.h ? X.h(fl, b) : X.call(null, fl, b)) ? new lw(this.state, this.xb, this.f, this.key, this.Mb, c, this.o, this.l, null) : new lw(this.state, this.xb, this.f, this.key, this.Mb, this.Da, this.o, Q.j(this.l, b, c), null);
};
k.W = function() {
  return A(wg.h(new U(null, 6, 5, V, [new U(null, 2, 5, V, [Fp, this.state], null), new U(null, 2, 5, V, [ln, this.xb], null), new U(null, 2, 5, V, [Ps, this.f], null), new U(null, 2, 5, V, [Xl, this.key], null), new U(null, 2, 5, V, [Ym, this.Mb], null), new U(null, 2, 5, V, [fl, this.Da], null)], null), this.l));
};
k.mf = function() {
  for (var a = A(this.Da), b = null, c = 0, d = 0;;) {
    if (d < c) {
      var e = b.H(null, d);
      O.j(e, 0, null);
      e = O.j(e, 1, null);
      e.w ? e.w() : e.call(null);
      d += 1;
    } else {
      if (a = A(a)) {
        T(a) ? (c = x(a), a = z(a), b = c, c = J(c)) : (b = C(a), O.j(b, 0, null), e = O.j(b, 1, null), e.w ? e.w() : e.call(null), a = F(a), b = null, c = 0), d = 0;
      } else {
        return null;
      }
    }
  }
};
k.lf = function(a, b, c) {
  return this.Da = Q.j(this.Da, b, c);
};
k.nf = function(a, b) {
  return this.Da = we.h(this.Da, b);
};
k.M = function(a, b) {
  return new lw(this.state, this.xb, this.f, this.key, this.Mb, this.Da, b, this.l, this.A);
};
k.Y = function(a, b) {
  return He(b) ? kc(this, w.h(b, 0), w.h(b, 1)) : Nb.j($b, this, b);
};
k.Dd = function() {
  kw(this);
  if (Hb(this.xb)) {
    return this.state;
  }
  for (var a = jw(this.f), b = Xe(a) ? S.h(Qg, a) : a, c = P.h(b, wm), d = P.h(b, gt), e = A(this.Mb), f = null, g = 0, h = 0;;) {
    if (h < g) {
      var l = f.H(null, h);
      ad(l, this.key);
      h += 1;
    } else {
      if (e = A(e)) {
        f = e, T(f) ? (e = x(f), h = z(f), f = e, g = J(e), e = h) : (e = C(f), ad(e, this.key), e = F(f), f = null, g = 0), h = 0;
      } else {
        break;
      }
    }
  }
  this.Mb = c;
  e = A(c);
  f = null;
  for (h = g = 0;;) {
    if (h < g) {
      l = f.H(null, h), uk(l, this.key, function(a, b, c, d, e, f, g, h, l, p) {
        return function() {
          p.xb = !0;
          return Zc(p, null, null);
        };
      }(e, f, g, h, l, a, b, c, d, this)), h += 1;
    } else {
      var p = A(e);
      if (p) {
        l = p;
        if (T(l)) {
          e = x(l), h = z(l), f = e, g = J(e), e = h;
        } else {
          var s = C(l);
          uk(s, this.key, function(a, b, c, d, e, f, g, h, l, p, s, N) {
            return function() {
              N.xb = !0;
              return Zc(N, null, null);
            };
          }(e, f, g, h, s, l, p, a, b, c, d, this));
          e = F(l);
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
  this.xb = !1;
  return d;
};
k.ye = !0;
k.S = function() {
  return this.key;
};
var mw = function() {
  function a(a, d, e) {
    var f = null;
    2 < arguments.length && (f = G(Array.prototype.slice.call(arguments, 2), 0));
    return b.call(this, a, d, f);
  }
  function b(a, b, e) {
    if (A(a)) {
      var f = C(a);
      b.g ? b.g(f) : b.call(null, f);
    }
    return S.v(Vv, a, b, e);
  }
  a.D = 2;
  a.q = function(a) {
    var d = C(a);
    a = F(a);
    var e = C(a);
    a = E(a);
    return b(d, e, a);
  };
  a.k = b;
  return a;
}();
function nw(a) {
  if (a ? a.Bg : a) {
    return a.Bg();
  }
  var b;
  b = nw[m(null == a ? null : a)];
  if (!b && (b = nw._, !b)) {
    throw r("PushbackReader.read-char", a);
  }
  return b.call(null, a);
}
function $x(a, b) {
  if (a ? a.Cg : a) {
    return a.Cg(0, b);
  }
  var c;
  c = $x[m(null == a ? null : a)];
  if (!c && (c = $x._, !c)) {
    throw r("PushbackReader.unread", a);
  }
  return c.call(null, a, b);
}
function ay(a, b, c) {
  this.da = a;
  this.buffer = b;
  this.na = c;
}
ay.prototype.Bg = function() {
  return 0 === this.buffer.length ? (this.na += 1, this.da[this.na]) : this.buffer.pop();
};
ay.prototype.Cg = function(a, b) {
  return this.buffer.push(b);
};
function by(a) {
  var b = !/[^\t\n\r ]/.test(a);
  return q(b) ? b : "," === a;
}
function cy(a, b) {
  var c;
  !(c = !/[^0-9]/.test(b)) && (c = "+" === b || "-" === b) && (c = nw(a), $x(a, c), c = !/[^0-9]/.test(c));
  return c;
}
var dy = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = G(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, 0, e);
  }
  function b(a, b) {
    throw Error(S.h(u, b));
  }
  a.D = 1;
  a.q = function(a) {
    C(a);
    a = E(a);
    return b(0, a);
  };
  a.k = b;
  return a;
}();
function ey(a, b) {
  for (var c = new ab(b), d = nw(a);;) {
    var e;
    if (!(e = null == d || by(d))) {
      e = d;
      var f = "#" !== e;
      e = f ? (f = "'" !== e) ? (f = ":" !== e) ? fy.g ? fy.g(e) : fy.call(null, e) : f : f : f;
    }
    if (e) {
      return $x(a, d), c.toString();
    }
    c.append(d);
    d = nw(a);
  }
}
function gy(a) {
  for (;;) {
    var b = nw(a);
    if ("\n" === b || "\r" === b || null == b) {
      return a;
    }
  }
}
var hy = jk("^([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+))(N)?$"), iy = jk("^([-+]?[0-9]+)/([0-9]+)$"), jy = jk("^([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?$"), ky = jk("^[:]?([^0-9/].*/)?([^0-9/][^/]*)$");
function ly(a, b) {
  var c = a.exec(b);
  return null != c && c[0] === b ? 1 === c.length ? c[0] : c : null;
}
function my(a) {
  if (q(ly(hy, a))) {
    a = ly(hy, a);
    var b = a[2];
    if (null != (Fd.h(b, "") ? null : b)) {
      a = 0;
    } else {
      var b = q(a[3]) ? [a[3], 10] : q(a[4]) ? [a[4], 16] : q(a[5]) ? [a[5], 8] : q(a[6]) ? [a[7], parseInt(a[6], 10)] : [null, null], c = b[0];
      null == c ? a = null : (b = parseInt(c, b[1]), a = "-" === a[1] ? -b : b);
    }
  } else {
    q(ly(iy, a)) ? (a = ly(iy, a), a = parseInt(a[1], 10) / parseInt(a[2], 10)) : a = q(ly(jy, a)) ? parseFloat(a) : null;
  }
  return a;
}
var ny = jk("^[0-9A-Fa-f]{2}$"), oy = jk("^[0-9A-Fa-f]{4}$");
function py(a, b, c, d) {
  return q(hk(a, d)) ? d : dy.k(b, G(["Unexpected unicode escape \\", c, d], 0));
}
function qy(a) {
  return String.fromCharCode(parseInt(a, 16));
}
function ry(a) {
  var b = nw(a), c = "t" === b ? "\t" : "r" === b ? "\r" : "n" === b ? "\n" : "\\" === b ? "\\" : '"' === b ? '"' : "b" === b ? "\b" : "f" === b ? "\f" : null;
  q(c) ? a = c : "x" === b ? (c = (new ab(nw(a), nw(a))).toString(), a = qy(py(ny, a, b, c))) : "u" === b ? (c = (new ab(nw(a), nw(a), nw(a), nw(a))).toString(), a = qy(py(oy, a, b, c))) : a = /[^0-9]/.test(b) ? dy.k(a, G(["Unexpected unicode escape \\", b], 0)) : String.fromCharCode(b);
  return a;
}
function sy(a) {
  for (var b = nw(a);;) {
    var c;
    c = b;
    c = by.g ? by.g(c) : by.call(null, c);
    if (q(c)) {
      b = nw(a);
    } else {
      return b;
    }
  }
}
function ty(a, b) {
  for (var c = bd(se);;) {
    var d = sy(b);
    q(d) || dy.k(b, G(["EOF while reading"], 0));
    if (a === d) {
      return dd(c);
    }
    var e = function() {
      var a = d;
      return fy.g ? fy.g(a) : fy.call(null, a);
    }();
    if (q(e)) {
      var f = e, e = function() {
        var a = d;
        return f.h ? f.h(b, a) : f.call(null, b, a);
      }()
    } else {
      $x(b, d), e = uy.v ? uy.v(b, !0, null, !0) : uy.call(null, b, !0, null);
    }
    c = e === b ? c : Ag.h(c, e);
  }
}
function vy(a, b) {
  return dy.k(a, G(["Reader for ", b, " not implemented yet"], 0));
}
function wy(a, b) {
  var c = nw(a), d = xy.g ? xy.g(c) : xy.call(null, c);
  if (q(d)) {
    return d.h ? d.h(a, b) : d.call(null, a, b);
  }
  d = yy.h ? yy.h(a, c) : yy.call(null, a, c);
  return q(d) ? d : dy.k(a, G(["No dispatch macro for ", c], 0));
}
function zy(a, b) {
  return dy.k(a, G(["Unmached delimiter ", b], 0));
}
function Ay(a) {
  return S.h(Pf, ty(")", a));
}
function By(a) {
  return ty("]", a);
}
function Cy(a) {
  var b = ty("}", a), c = J(b);
  !Ig(c) && dy.k(a, G(["Map literal must contain an even number of forms"], 0));
  return S.h(Qg, b);
}
function Dy(a, b) {
  for (var c = new ab(b), d = nw(a);;) {
    if (q(function() {
      var a = null == d;
      if (a || (a = by(d))) {
        return a;
      }
      a = d;
      return fy.g ? fy.g(a) : fy.call(null, a);
    }())) {
      $x(a, d);
      var e = c.toString(), c = my(e);
      return q(c) ? c : dy.k(a, G(["Invalid number format [", e, "]"], 0));
    }
    c.append(d);
    d = e = nw(a);
  }
}
function Ey(a) {
  for (var b = new ab, c = nw(a);;) {
    if (null == c) {
      return dy.k(a, G(["EOF while reading"], 0));
    }
    if ("\\" === c) {
      b.append(ry(a));
    } else {
      if ('"' === c) {
        return b.toString();
      }
      b.append(c);
    }
    c = nw(a);
  }
}
function Fy(a) {
  for (var b = new ab, c = nw(a);;) {
    if (null == c) {
      return dy.k(a, G(["EOF while reading"], 0));
    }
    if ("\\" === c) {
      b.append(c);
      var d = nw(a);
      if (null == d) {
        return dy.k(a, G(["EOF while reading"], 0));
      }
      var e = function() {
        var a = b;
        a.append(d);
        return a;
      }(), f = nw(a);
    } else {
      if ('"' === c) {
        return b.toString();
      }
      e = function() {
        var a = b;
        a.append(c);
        return a;
      }();
      f = nw(a);
    }
    b = e;
    c = f;
  }
}
function Gy(a, b) {
  var c = ey(a, b);
  if (q(-1 != c.indexOf("/"))) {
    c = Id.h(If.j(c, 0, c.indexOf("/")), If.j(c, c.indexOf("/") + 1, c.length));
  } else {
    var d = Id.g(c), c = "nil" === c ? null : "true" === c ? !0 : "false" === c ? !1 : d
  }
  return c;
}
function Hy(a) {
  var b = ey(a, nw(a)), c = ly(ky, b), b = c[0], d = c[1], c = c[2];
  return void 0 !== d && ":/" === d.substring(d.length - 2, d.length) || ":" === c[c.length - 1] || -1 !== b.indexOf("::", 1) ? dy.k(a, G(["Invalid token: ", b], 0)) : null != d && 0 < d.length ? Sf.h(d.substring(0, d.indexOf("/")), c) : Sf.g(b);
}
function Iy(a) {
  return function(b) {
    return $b($b(Md, uy.v ? uy.v(b, !0, null, !0) : uy.call(null, b, !0, null)), a);
  };
}
function Jy() {
  return function(a) {
    return dy.k(a, G(["Unreadable form"], 0));
  };
}
function Ky(a) {
  var b;
  b = uy.v ? uy.v(a, !0, null, !0) : uy.call(null, a, !0, null);
  b = b instanceof Hd ? new n(null, 1, [et, b], null) : "string" === typeof b ? new n(null, 1, [et, b], null) : b instanceof W ? new Ji([b, !0], !0, !1) : b;
  Ge(b) || dy.k(a, G(["Metadata must be Symbol,Keyword,String or Map"], 0));
  var c = uy.v ? uy.v(a, !0, null, !0) : uy.call(null, a, !0, null);
  return(c ? c.B & 262144 || c.Vh || (c.B ? 0 : Ib(Hc, c)) : Ib(Hc, c)) ? ge(c, Lj.k(G([ze(c), b], 0))) : dy.k(a, G(["Metadata can only be applied to IWithMetas"], 0));
}
function Ly(a) {
  return Uj(ty("}", a));
}
function My(a) {
  return jk(Fy(a));
}
function Ny(a) {
  uy.v ? uy.v(a, !0, null, !0) : uy.call(null, a, !0, null);
  return a;
}
function fy(a) {
  return'"' === a ? Ey : ":" === a ? Hy : ";" === a ? gy : "'" === a ? Iy(new Hd(null, "quote", "quote", 1377916282, null)) : "@" === a ? Iy(new Hd(null, "deref", "deref", 1494944732, null)) : "^" === a ? Ky : "`" === a ? vy : "~" === a ? vy : "(" === a ? Ay : ")" === a ? zy : "[" === a ? By : "]" === a ? zy : "{" === a ? Cy : "}" === a ? zy : "\\" === a ? nw : "#" === a ? wy : null;
}
function xy(a) {
  return "{" === a ? Ly : "\x3c" === a ? Jy() : '"' === a ? My : "!" === a ? gy : "_" === a ? Ny : null;
}
function uy(a, b, c) {
  for (;;) {
    var d = nw(a);
    if (null == d) {
      return q(b) ? dy.k(a, G(["EOF while reading"], 0)) : c;
    }
    if (!by(d)) {
      if (";" === d) {
        var e = function() {
          var b = a, c = d;
          return gy.h ? gy.h(b, c) : gy.call(null, b);
        }();
        a = e;
      } else {
        var f = fy(d), e = q(f) ? function() {
          var b = a, c = d;
          return f.h ? f.h(b, c) : f.call(null, b, c);
        }() : cy(a, d) ? Dy(a, d) : Gy(a, d);
        if (e !== a) {
          return e;
        }
      }
    }
  }
}
function Oy(a) {
  return uy(new ay(a, [], -1), !1, null);
}
var Py = function(a, b) {
  return function(c, d) {
    return P.h(q(d) ? b : a, c);
  };
}(new U(null, 13, 5, V, [null, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], null), new U(null, 13, 5, V, [null, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], null)), Qy = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
function Ry(a) {
  a = parseInt(a, 10);
  return Hb(isNaN(a)) ? a : null;
}
function Sy(a, b, c, d) {
  a <= b && b <= c || dy.k(null, G(["" + u.g(d) + " Failed:  " + u.g(a) + "\x3c\x3d" + u.g(b) + "\x3c\x3d" + u.g(c)], 0));
  return b;
}
function Ty(a) {
  var b = hk(Qy, a);
  O.j(b, 0, null);
  var c = O.j(b, 1, null), d = O.j(b, 2, null), e = O.j(b, 3, null), f = O.j(b, 4, null), g = O.j(b, 5, null), h = O.j(b, 6, null), l = O.j(b, 7, null), p = O.j(b, 8, null), s = O.j(b, 9, null), t = O.j(b, 10, null);
  if (Hb(b)) {
    return dy.k(null, G(["Unrecognized date/time syntax: " + u.g(a)], 0));
  }
  var v = Ry(c), B = function() {
    var a = Ry(d);
    return q(a) ? a : 1;
  }();
  a = function() {
    var a = Ry(e);
    return q(a) ? a : 1;
  }();
  var b = function() {
    var a = Ry(f);
    return q(a) ? a : 0;
  }(), c = function() {
    var a = Ry(g);
    return q(a) ? a : 0;
  }(), y = function() {
    var a = Ry(h);
    return q(a) ? a : 0;
  }(), D = function() {
    var a;
    a: {
      if (Fd.h(3, J(l))) {
        a = l;
      } else {
        if (3 < J(l)) {
          a = If.j(l, 0, 3);
        } else {
          for (a = new ab(l);;) {
            if (3 > a.cd.length) {
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
    a = Ry(a);
    return q(a) ? a : 0;
  }(), p = (Fd.h(p, "-") ? -1 : 1) * (60 * function() {
    var a = Ry(s);
    return q(a) ? a : 0;
  }() + function() {
    var a = Ry(t);
    return q(a) ? a : 0;
  }());
  return new U(null, 8, 5, V, [v, Sy(1, B, 12, "timestamp month field must be in range 1..12"), Sy(1, a, function() {
    var a;
    if (a = 0 === (v % 4 + 4) % 4) {
      a = 0 !== (v % 100 + 100) % 100 || 0 === (v % 400 + 400) % 400;
    }
    return Py.h ? Py.h(B, a) : Py.call(null, B, a);
  }(), "timestamp day field must be in range 1..last day in month"), Sy(0, b, 23, "timestamp hour field must be in range 0..23"), Sy(0, c, 59, "timestamp minute field must be in range 0..59"), Sy(0, y, Fd.h(c, 59) ? 60 : 59, "timestamp second field must be in range 0..60"), Sy(0, D, 999, "timestamp millisecond field must be in range 0..999"), p], null);
}
var Uy, Vy = new n(null, 4, ["inst", function(a) {
  var b;
  if ("string" === typeof a) {
    if (b = Ty(a), q(b)) {
      a = O.j(b, 0, null);
      var c = O.j(b, 1, null), d = O.j(b, 2, null), e = O.j(b, 3, null), f = O.j(b, 4, null), g = O.j(b, 5, null), h = O.j(b, 6, null);
      b = O.j(b, 7, null);
      b = new Date(Date.UTC(a, c - 1, d, e, f, g, h) - 6E4 * b);
    } else {
      b = dy.k(null, G(["Unrecognized date/time syntax: " + u.g(a)], 0));
    }
  } else {
    b = dy.k(null, G(["Instance literal expects a string for its timestamp."], 0));
  }
  return b;
}, "uuid", function(a) {
  return "string" === typeof a ? new Ik(a) : dy.k(null, G(["UUID literal expects a string as its representation."], 0));
}, "queue", function(a) {
  return He(a) ? Ah.h(ri, a) : dy.k(null, G(["Queue literal expects a vector for its elements."], 0));
}, "js", function(a) {
  if (He(a)) {
    var b = [];
    a = A(a);
    for (var c = null, d = 0, e = 0;;) {
      if (e < d) {
        var f = c.H(null, e);
        b.push(f);
        e += 1;
      } else {
        if (a = A(a)) {
          c = a, T(c) ? (a = x(c), e = z(c), c = a, d = J(a), a = e) : (a = C(c), b.push(a), a = F(c), c = null, d = 0), e = 0;
        } else {
          break;
        }
      }
    }
    return b;
  }
  if (Ge(a)) {
    b = {};
    a = A(a);
    c = null;
    for (e = d = 0;;) {
      if (e < d) {
        var g = c.H(null, e), f = O.j(g, 0, null), g = O.j(g, 1, null);
        b[Rf(f)] = g;
        e += 1;
      } else {
        if (a = A(a)) {
          T(a) ? (d = x(a), a = z(a), c = d, d = J(d)) : (d = C(a), c = O.j(d, 0, null), d = O.j(d, 1, null), b[Rf(c)] = d, a = F(a), c = null, d = 0), e = 0;
        } else {
          break;
        }
      }
    }
    return b;
  }
  return dy.k(null, G(["JS literal expects a vector or map containing only string or unqualified keyword keys"], 0));
}], null);
Uy = Sg.g ? Sg.g(Vy) : Sg.call(null, Vy);
var Wy = Sg.g ? Sg.g(null) : Sg.call(null, null);
function yy(a, b) {
  var c = Gy(a, b), d = P.h(I.g ? I.g(Uy) : I.call(null, Uy), "" + u.g(c)), e = I.g ? I.g(Wy) : I.call(null, Wy);
  return q(d) ? (c = uy(a, !0, null), d.g ? d.g(c) : d.call(null, c)) : q(e) ? (d = uy(a, !0, null), e.h ? e.h(c, d) : e.call(null, c, d)) : dy.k(a, G(["Could not find tag parser for ", "" + u.g(c), " in ", Ug.k(G([Di(I.g ? I.g(Uy) : I.call(null, Uy))], 0))], 0));
}
;var Xy = !Tu || Tu && 9 <= av, Yy = Tu && !Zu("9");
!Vu || Zu("528");
Uu && Zu("1.9b") || Tu && Zu("8") || Su && Zu("9.5") || Vu && Zu("528");
Uu && !Zu("8") || Tu && Zu("9");
function Zy() {
  0 != $y && (this[oa] || (this[oa] = ++pa));
}
var $y = 0;
Zy.prototype.bi = !1;
function az(a, b) {
  this.type = a;
  this.currentTarget = this.target = b;
  this.defaultPrevented = this.Sd = !1;
  this.sh = !0;
}
az.prototype.preventDefault = function() {
  this.defaultPrevented = !0;
  this.sh = !1;
};
function bz(a) {
  bz[" "](a);
  return a;
}
bz[" "] = ea;
function cz(a, b) {
  az.call(this, a ? a.type : "");
  this.relatedTarget = this.currentTarget = this.target = null;
  this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
  this.Hg = this.state = null;
  a && this.Od(a, b);
}
Ca(cz, az);
cz.prototype.Od = function(a, b) {
  var c = this.type = a.type;
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if (d) {
    if (Uu) {
      var e;
      a: {
        try {
          bz(d.nodeName);
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
  this.offsetX = Vu || void 0 !== a.offsetX ? a.offsetX : a.layerX;
  this.offsetY = Vu || void 0 !== a.offsetY ? a.offsetY : a.layerY;
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
  this.Hg = a;
  a.defaultPrevented && this.preventDefault();
};
cz.prototype.preventDefault = function() {
  cz.dj.preventDefault.call(this);
  var a = this.Hg;
  if (a.preventDefault) {
    a.preventDefault();
  } else {
    if (a.returnValue = !1, Yy) {
      try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1;
        }
      } catch (b) {
      }
    }
  }
};
var dz = "closure_listenable_" + (1E6 * Math.random() | 0), ez = 0;
function fz(a, b, c, d, e) {
  this.wd = a;
  this.Re = null;
  this.src = b;
  this.type = c;
  this.te = !!d;
  this.qc = e;
  this.key = ++ez;
  this.Td = this.se = !1;
}
function gz(a) {
  a.Td = !0;
  a.wd = null;
  a.Re = null;
  a.src = null;
  a.qc = null;
}
;function hz(a) {
  this.src = a;
  this.ec = {};
  this.Ve = 0;
}
hz.prototype.add = function(a, b, c, d, e) {
  var f = a.toString();
  a = this.ec[f];
  a || (a = this.ec[f] = [], this.Ve++);
  var g = iz(a, b, d, e);
  -1 < g ? (b = a[g], c || (b.se = !1)) : (b = new fz(b, this.src, f, !!d, e), b.se = c, a.push(b));
  return b;
};
hz.prototype.remove = function(a, b, c, d) {
  a = a.toString();
  if (!(a in this.ec)) {
    return!1;
  }
  var e = this.ec[a];
  b = iz(e, b, c, d);
  return-1 < b ? (gz(e[b]), gb.splice.call(e, b, 1), 0 == e.length && (delete this.ec[a], this.Ve--), !0) : !1;
};
function jz(a, b) {
  var c = b.type;
  if (c in a.ec) {
    var d = a.ec[c], e = hb(d, b), f;
    (f = 0 <= e) && gb.splice.call(d, e, 1);
    f && (gz(b), 0 == a.ec[c].length && (delete a.ec[c], a.Ve--));
  }
}
hz.prototype.If = function(a, b, c, d) {
  a = this.ec[a.toString()];
  var e = -1;
  a && (e = iz(a, b, c, d));
  return-1 < e ? a[e] : null;
};
function iz(a, b, c, d) {
  for (var e = 0;e < a.length;++e) {
    var f = a[e];
    if (!f.Td && f.wd == b && f.te == !!c && f.qc == d) {
      return e;
    }
  }
  return-1;
}
;var kz = "closure_lm_" + (1E6 * Math.random() | 0), lz = {}, mz = 0;
function nz(a, b, c, d, e) {
  if ("array" == m(b)) {
    for (var f = 0;f < b.length;f++) {
      nz(a, b[f], c, d, e);
    }
    return null;
  }
  c = oz(c);
  if (a && a[dz]) {
    a = a.Tg(b, c, d, e);
  } else {
    if (!b) {
      throw Error("Invalid event type");
    }
    var f = !!d, g = pz(a);
    g || (a[kz] = g = new hz(a));
    c = g.add(b, c, !1, d, e);
    c.Re || (d = qz(), c.Re = d, d.src = a, d.wd = c, a.addEventListener ? a.addEventListener(b.toString(), d, f) : a.attachEvent(rz(b.toString()), d), mz++);
    a = c;
  }
  return a;
}
function qz() {
  var a = sz, b = Xy ? function(c) {
    return a.call(b.src, b.wd, c);
  } : function(c) {
    c = a.call(b.src, b.wd, c);
    if (!c) {
      return c;
    }
  };
  return b;
}
function tz(a, b, c, d, e) {
  if ("array" == m(b)) {
    for (var f = 0;f < b.length;f++) {
      tz(a, b[f], c, d, e);
    }
  } else {
    c = oz(c), a && a[dz] ? a.hj(b, c, d, e) : a && (a = pz(a)) && (b = a.If(b, c, !!d, e)) && uz(b);
  }
}
function uz(a) {
  if (!ka(a) && a && !a.Td) {
    var b = a.src;
    if (b && b[dz]) {
      jz(b.Md, a);
    } else {
      var c = a.type, d = a.Re;
      b.removeEventListener ? b.removeEventListener(c, d, a.te) : b.detachEvent && b.detachEvent(rz(c), d);
      mz--;
      (c = pz(b)) ? (jz(c, a), 0 == c.Ve && (c.src = null, b[kz] = null)) : gz(a);
    }
  }
}
function rz(a) {
  return a in lz ? lz[a] : lz[a] = "on" + a;
}
function vz(a, b, c, d) {
  var e = 1;
  if (a = pz(a)) {
    if (b = a.ec[b.toString()]) {
      for (b = b.concat(), a = 0;a < b.length;a++) {
        var f = b[a];
        f && f.te == c && !f.Td && (e &= !1 !== wz(f, d));
      }
    }
  }
  return Boolean(e);
}
function wz(a, b) {
  var c = a.wd, d = a.qc || a.src;
  a.se && uz(a);
  return c.call(d, b);
}
function sz(a, b) {
  if (a.Td) {
    return!0;
  }
  if (!Xy) {
    var c = b || da("window.event"), d = new cz(c, this), e = !0;
    if (!(0 > c.keyCode || void 0 != c.returnValue)) {
      a: {
        var f = !1;
        if (0 == c.keyCode) {
          try {
            c.keyCode = -1;
            break a;
          } catch (g) {
            f = !0;
          }
        }
        if (f || void 0 == c.returnValue) {
          c.returnValue = !0;
        }
      }
      c = [];
      for (f = d.currentTarget;f;f = f.parentNode) {
        c.push(f);
      }
      for (var f = a.type, h = c.length - 1;!d.Sd && 0 <= h;h--) {
        d.currentTarget = c[h], e &= vz(c[h], f, !0, d);
      }
      for (h = 0;!d.Sd && h < c.length;h++) {
        d.currentTarget = c[h], e &= vz(c[h], f, !1, d);
      }
    }
    return e;
  }
  return wz(a, new cz(b, this));
}
function pz(a) {
  a = a[kz];
  return a instanceof hz ? a : null;
}
var xz = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
function oz(a) {
  if (la(a)) {
    return a;
  }
  a[xz] || (a[xz] = function(b) {
    return a.handleEvent(b);
  });
  return a[xz];
}
;var yz = function() {
  function a(a, d, e, f) {
    var g = null;
    3 < arguments.length && (g = G(Array.prototype.slice.call(arguments, 3), 0));
    return b.call(this, a, d, e, g);
  }
  function b(a, b, e, f) {
    f = Xe(f) ? S.h(Qg, f) : f;
    f = P.j(f, it, !1);
    a = dw(a);
    b = Rf(b);
    return nz(a, b, e, f);
  }
  a.D = 3;
  a.q = function(a) {
    var d = C(a);
    a = F(a);
    var e = C(a);
    a = F(a);
    var f = C(a);
    a = E(a);
    return b(d, e, f, a);
  };
  a.k = b;
  return a;
}();
function zz(a, b) {
  return ge(new U(null, 2, 5, V, [b, null], null), new n(null, 3, [bq, a, Al, Zs, sl, Zs], null));
}
function Az(a) {
  return a.g ? a.g(0) : a.call(null, 0);
}
function Bz(a) {
  return sl.g(ze(a)).call(null, Az(a));
}
function Cz(a) {
  var b = O.j(a, 0, null), c = O.j(a, 1, null), d = Xe(c) ? S.h(Qg, c) : c, e = P.h(d, Yp), c = P.h(d, Zk), f = P.h(d, Fr), g = P.h(d, wl), d = P.h(d, Ir);
  return q(f) ? (f = Ae(f), q(d) ? (d = V, b = wg.h(e, ee(b, g)), b = bq.g(ze(a)).call(null, f, b), c = new U(null, 2, 5, d, [b, q(c) ? Q.j(c, Ir, !0) : c], null)) : c = new U(null, 2, 5, V, [f, c], null), ge(c, ze(a))) : null;
}
function Dz(a) {
  for (;;) {
    if (Fd.h(At, a.g ? a.g(1) : a.call(null, 1))) {
      return Az(a);
    }
    var b = Cz(a);
    if (q(b)) {
      a = b;
    } else {
      return Az(a);
    }
  }
}
function Ez(a) {
  var b = O.j(a, 0, null), c = O.j(a, 1, null), c = Xe(c) ? S.h(Qg, c) : c, d = P.h(c, Yp), e = P.h(c, wl), f = O.j(e, 0, null), g = Hf(e);
  return q(q(c) ? e : c) ? ge(new U(null, 2, 5, V, [f, Q.k(c, Yp, te.h(d, b), G([wl, g], 0))], null), ze(a)) : null;
}
var Fz = function() {
  function a(a, d, e) {
    var f = null;
    2 < arguments.length && (f = G(Array.prototype.slice.call(arguments, 2), 0));
    return b.call(this, a, d, f);
  }
  function b(a, b, e) {
    b = S.j(b, Az(a), e);
    O.j(a, 0, null);
    e = O.j(a, 1, null);
    return ge(new U(null, 2, 5, V, [b, Q.j(e, Ir, !0)], null), ze(a));
  }
  a.D = 2;
  a.q = function(a) {
    var d = C(a);
    a = F(a);
    var e = C(a);
    a = E(a);
    return b(d, e, a);
  };
  a.k = b;
  return a;
}();
function Gz(a) {
  if (Fd.h(At, a.g ? a.g(1) : a.call(null, 1))) {
    return a;
  }
  var b;
  b = Bz(a);
  if (q(b)) {
    if (q(Bz(a))) {
      b = O.j(a, 0, null);
      var c = O.j(a, 1, null), d;
      if (q(Bz(a))) {
        d = Al.g(ze(a)).call(null, Az(a));
      } else {
        throw "called children on a leaf node";
      }
      var e = O.j(d, 0, null), f = Hf(d);
      b = q(d) ? ge(new U(null, 2, 5, V, [e, new n(null, 4, [Yp, se, Fr, q(c) ? te.h(Fr.g(c), b) : new U(null, 1, 5, V, [b], null), Zk, c, wl, f], null)], null), ze(a)) : null;
    } else {
      b = null;
    }
  }
  if (q(b)) {
    return b;
  }
  b = Ez(a);
  if (q(b)) {
    return b;
  }
  for (;;) {
    if (q(Cz(a))) {
      b = Ez(Cz(a));
      if (q(b)) {
        return b;
      }
      a = Cz(a);
    } else {
      return new U(null, 2, 5, V, [Az(a), At], null);
    }
  }
}
function Hz(a) {
  return Fd.h(At, a.g ? a.g(1) : a.call(null, 1));
}
;function Iz(a) {
  if (a ? a.Lb : a) {
    return a.Lb(a);
  }
  var b;
  b = Iz[m(null == a ? null : a)];
  if (!b && (b = Iz._, !b)) {
    throw r("PTopological.topology", a);
  }
  return b.call(null, a);
}
function Jz(a) {
  if (a ? a.bg : a) {
    return a.bg(a);
  }
  var b;
  b = Jz[m(null == a ? null : a)];
  if (!b && (b = Jz._, !b)) {
    throw r("PTopology.dimensions", a);
  }
  return b.call(null, a);
}
function Kz(a, b) {
  if (a ? a.ag : a) {
    return a.ag(a, b);
  }
  var c;
  c = Kz[m(null == a ? null : a)];
  if (!c && (c = Kz._, !c)) {
    throw r("PTopology.coordinates-of-index", a);
  }
  return c.call(null, a, b);
}
function Lz(a, b) {
  if (a ? a.cg : a) {
    return a.cg(a, b);
  }
  var c;
  c = Lz[m(null == a ? null : a)];
  if (!c && (c = Lz._, !c)) {
    throw r("PTopology.index-of-coordinates", a);
  }
  return c.call(null, a, b);
}
function Mz(a, b, c, d) {
  if (a ? a.dg : a) {
    return a.dg(a, b, c, d);
  }
  var e;
  e = Mz[m(null == a ? null : a)];
  if (!e && (e = Mz._, !e)) {
    throw r("PTopology.neighbours*", a);
  }
  return e.call(null, a, b, c, d);
}
function Nz(a, b, c) {
  if (a ? a.$f : a) {
    return a.$f(a, b, c);
  }
  var d;
  d = Nz[m(null == a ? null : a)];
  if (!d && (d = Nz._, !d)) {
    throw r("PTopology.coord-distance", a);
  }
  return d.call(null, a, b, c);
}
function Oz(a) {
  return Jz(Iz(a));
}
function Pz(a) {
  return S.h(kf, Jz(a));
}
function Qz(a) {
  return Pz(Iz(a));
}
var Rz = function() {
  function a(a, b, e) {
    return Mz(a, b, e, 0);
  }
  var b = null, b = function(b, d, e, f) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, d, e);
      case 4:
        return Mz(b, d, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.j = a;
  b.v = function(a, b, e, f) {
    return Mz(a, b, e, f);
  };
  return b;
}(), Sz = function() {
  function a(a, b, c, g) {
    return kh.h(Mg.h(Lz, a), Mz(a, Kz(a, b), c, g));
  }
  function b(a, b, f) {
    return c.v(a, b, f, 0);
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
  c.v = a;
  return c;
}();
function Tz(a, b, c) {
  if (a ? a.Zc : a) {
    return a.Zc(a, b, c);
  }
  var d;
  d = Tz[m(null == a ? null : a)];
  if (!d && (d = Tz._, !d)) {
    throw r("PEncodable.encode", a);
  }
  return d.call(null, a, b, c);
}
function Uz(a, b, c) {
  if (a ? a.Qd : a) {
    return a.Qd(a, b, c);
  }
  var d;
  d = Uz[m(null == a ? null : a)];
  if (!d && (d = Uz._, !d)) {
    throw r("PEncodable.decode", a);
  }
  return d.call(null, a, b, c);
}
function Vz(a) {
  if (a ? a.Ne : a) {
    return a.Ne(a);
  }
  var b;
  b = Vz[m(null == a ? null : a)];
  if (!b && (b = Vz._, !b)) {
    throw r("PParameterised.params", a);
  }
  return b.call(null, a);
}
function Wz(a, b, c, d, e) {
  if (a ? a.lh : a) {
    return a.lh(0, b, c, d, e);
  }
  var f;
  f = Wz[m(null == a ? null : a)];
  if (!f && (f = Wz._, !f)) {
    throw r("PRegion.region-step*", a);
  }
  return f.call(null, a, b, c, d, e);
}
function Xz(a) {
  if (a ? a.jh : a) {
    return a.jh();
  }
  var b;
  b = Xz[m(null == a ? null : a)];
  if (!b && (b = Xz._, !b)) {
    throw r("PRegion.ff-cells-per-column", a);
  }
  return b.call(null, a);
}
function Yz(a) {
  if (a ? a.ih : a) {
    return a.ih();
  }
  var b;
  b = Yz[m(null == a ? null : a)];
  if (!b && (b = Yz._, !b)) {
    throw r("PRegion.ff-active-cells", a);
  }
  return b.call(null, a);
}
function Zz(a) {
  if (a ? a.kh : a) {
    return a.kh();
  }
  var b;
  b = Zz[m(null == a ? null : a)];
  if (!b && (b = Zz._, !b)) {
    throw r("PRegion.ff-signal-cells", a);
  }
  return b.call(null, a);
}
var $z = function() {
  function a(a, b, e) {
    return Wz(a, b, e, Qj, !0);
  }
  var b = null, b = function(b, d, e, f, g) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, d, e);
      case 5:
        return Wz(b, d, e, f, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.j = a;
  b.Q = function(a, b, e, f, g) {
    return Wz(a, b, e, f, g);
  };
  return b;
}();
function aA(a, b, c) {
  if (a ? a.$g : a) {
    return a.$g(0, b, c);
  }
  var d;
  d = aA[m(null == a ? null : a)];
  if (!d && (d = aA._, !d)) {
    throw r("PColumnField.columns-step", a);
  }
  return d.call(null, a, b, c);
}
function bA(a, b, c, d) {
  if (a ? a.Zg : a) {
    return a.Zg(0, b, 0, d);
  }
  var e;
  e = bA[m(null == a ? null : a)];
  if (!e && (e = bA._, !e)) {
    throw r("PColumnField.columns-learn", a);
  }
  return e.call(null, a, b, c, d);
}
function cA(a) {
  if (a ? a.Oi : a) {
    return a.$a;
  }
  var b;
  b = cA[m(null == a ? null : a)];
  if (!b && (b = cA._, !b)) {
    throw r("PColumnField.inhibition-radius", a);
  }
  return b.call(null, a);
}
function dA(a) {
  if (a ? a.Li : a) {
    return a.Ua;
  }
  var b;
  b = dA[m(null == a ? null : a)];
  if (!b && (b = dA._, !b)) {
    throw r("PColumnField.column-excitation", a);
  }
  return b.call(null, a);
}
function eA(a) {
  if (a ? a.Mi : a) {
    return a.Ta;
  }
  var b;
  b = eA[m(null == a ? null : a)];
  if (!b && (b = eA._, !b)) {
    throw r("PColumnField.column-overlaps", a);
  }
  return b.call(null, a);
}
function fA(a) {
  if (a ? a.Ni : a) {
    return a.bb;
  }
  var b;
  b = fA[m(null == a ? null : a)];
  if (!b && (b = fA._, !b)) {
    throw r("PColumnField.column-signal-overlaps", a);
  }
  return b.call(null, a);
}
function gA(a, b, c, d) {
  if (a ? a.gh : a) {
    return a.gh(0, b, 0, d);
  }
  var e;
  e = gA[m(null == a ? null : a)];
  if (!e && (e = gA._, !e)) {
    throw r("PLayerOfCells.layer-step", a);
  }
  return e.call(null, a, b, c, d);
}
function hA(a, b, c) {
  if (a ? a.fh : a) {
    return a.fh(0, b, c);
  }
  var d;
  d = hA[m(null == a ? null : a)];
  if (!d && (d = hA._, !d)) {
    throw r("PLayerOfCells.layer-learn", a);
  }
  return d.call(null, a, b, c);
}
function iA(a, b) {
  if (a ? a.dh : a) {
    return a.dh();
  }
  var c;
  c = iA[m(null == a ? null : a)];
  if (!c && (c = iA._, !c)) {
    throw r("PLayerOfCells.layer-depolarise", a);
  }
  return c.call(null, a, b);
}
function jA(a) {
  if (a ? a.eh : a) {
    return a.eh();
  }
  var b;
  b = jA[m(null == a ? null : a)];
  if (!b && (b = jA._, !b)) {
    throw r("PLayerOfCells.layer-depth", a);
  }
  return b.call(null, a);
}
function kA(a) {
  if (a ? a.Qi : a) {
    return a.Ea;
  }
  var b;
  b = kA[m(null == a ? null : a)];
  if (!b && (b = kA._, !b)) {
    throw r("PLayerOfCells.bursting-columns", a);
  }
  return b.call(null, a);
}
function lA(a) {
  if (a ? a.Pi : a) {
    return a.Na;
  }
  var b;
  b = lA[m(null == a ? null : a)];
  if (!b && (b = lA._, !b)) {
    throw r("PLayerOfCells.active-columns", a);
  }
  return b.call(null, a);
}
function mA(a) {
  if (a ? a.bh : a) {
    return a.bh();
  }
  var b;
  b = mA[m(null == a ? null : a)];
  if (!b && (b = mA._, !b)) {
    throw r("PLayerOfCells.active-cells", a);
  }
  return b.call(null, a);
}
function nA(a) {
  if (a ? a.Ri : a) {
    return a.Pa;
  }
  var b;
  b = nA[m(null == a ? null : a)];
  if (!b && (b = nA._, !b)) {
    throw r("PLayerOfCells.learnable-cells", a);
  }
  return b.call(null, a);
}
function oA(a) {
  if (a ? a.hh : a) {
    return a.hh();
  }
  var b;
  b = oA[m(null == a ? null : a)];
  if (!b && (b = oA._, !b)) {
    throw r("PLayerOfCells.signal-cells", a);
  }
  return b.call(null, a);
}
function pA(a) {
  if (a ? a.Ui : a) {
    return a.Qa;
  }
  var b;
  b = pA[m(null == a ? null : a)];
  if (!b && (b = pA._, !b)) {
    throw r("PLayerOfCells.temporal-pooling-cells", a);
  }
  return b.call(null, a);
}
function qA(a) {
  if (a ? a.Si : a) {
    return a.Ha;
  }
  var b;
  b = qA[m(null == a ? null : a)];
  if (!b && (b = qA._, !b)) {
    throw r("PLayerOfCells.predictive-cells", a);
  }
  return b.call(null, a);
}
function rA(a) {
  if (a ? a.Ti : a) {
    return a.Ia;
  }
  var b;
  b = rA[m(null == a ? null : a)];
  if (!b && (b = rA._, !b)) {
    throw r("PLayerOfCells.prior-predictive-cells", a);
  }
  return b.call(null, a);
}
function sA(a, b) {
  if (a ? a.Wf : a) {
    return a.Wf(a, b);
  }
  var c;
  c = sA[m(null == a ? null : a)];
  if (!c && (c = sA._, !c)) {
    throw r("PSynapseGraph.in-synapses", a);
  }
  return c.call(null, a, b);
}
function tA(a, b) {
  if (a ? a.Yf : a) {
    return a.Yf(a, b);
  }
  var c;
  c = tA[m(null == a ? null : a)];
  if (!c && (c = tA._, !c)) {
    throw r("PSynapseGraph.sources-connected-to", a);
  }
  return c.call(null, a, b);
}
function uA(a, b) {
  if (a ? a.Zf : a) {
    return a.Zf(a, b);
  }
  var c;
  c = uA[m(null == a ? null : a)];
  if (!c && (c = uA._, !c)) {
    throw r("PSynapseGraph.targets-connected-from", a);
  }
  return c.call(null, a, b);
}
function vA(a, b, c, d, e, f) {
  if (a ? a.Xf : a) {
    return a.Xf(a, b, c, d, e, f);
  }
  var g;
  g = vA[m(null == a ? null : a)];
  if (!g && (g = vA._, !g)) {
    throw r("PSynapseGraph.reinforce-in-synapses", a);
  }
  return g.call(null, a, b, c, d, e, f);
}
function wA(a, b, c, d) {
  if (a ? a.Uf : a) {
    return a.Uf(a, b, c, d);
  }
  var e;
  e = wA[m(null == a ? null : a)];
  if (!e && (e = wA._, !e)) {
    throw r("PSynapseGraph.conj-synapses", a);
  }
  return e.call(null, a, b, c, d);
}
function xA(a, b, c) {
  if (a ? a.Vf : a) {
    return a.Vf(a, b, c);
  }
  var d;
  d = xA[m(null == a ? null : a)];
  if (!d && (d = xA._, !d)) {
    throw r("PSynapseGraph.disj-synapses", a);
  }
  return d.call(null, a, b, c);
}
function yA(a, b) {
  if (a ? a.mh : a) {
    return a.mh(0, b);
  }
  var c;
  c = yA[m(null == a ? null : a)];
  if (!c && (c = yA._, !c)) {
    throw r("PSegments.cell-segments", a);
  }
  return c.call(null, a, b);
}
function zA(a, b) {
  if (a ? a.Pf : a) {
    return a.Pf(a, b);
  }
  var c;
  c = zA[m(null == a ? null : a)];
  if (!c && (c = zA._, !c)) {
    throw r("PFeedForward.bits-value*", a);
  }
  return c.call(null, a, b);
}
function AA(a, b) {
  if (a ? a.Sf : a) {
    return a.Sf(a, b);
  }
  var c;
  c = AA[m(null == a ? null : a)];
  if (!c && (c = AA._, !c)) {
    throw r("PFeedForward.signal-bits-value*", a);
  }
  return c.call(null, a, b);
}
function BA(a, b) {
  if (a ? a.Rf : a) {
    return a.Rf(a, b);
  }
  var c;
  c = BA[m(null == a ? null : a)];
  if (!c && (c = BA._, !c)) {
    throw r("PFeedForward.motor-bits-value*", a);
  }
  return c.call(null, a, b);
}
function CA(a, b) {
  if (a ? a.Tf : a) {
    return a.Tf(a, b);
  }
  var c;
  c = CA[m(null == a ? null : a)];
  if (!c && (c = CA._, !c)) {
    throw r("PFeedForward.source-of-bit", a);
  }
  return c.call(null, a, b);
}
function DA(a, b) {
  if (a ? a.Qf : a) {
    return a.Qf(a, b);
  }
  var c;
  c = DA[m(null == a ? null : a)];
  if (!c && (c = DA._, !c)) {
    throw r("PFeedForward.feed-forward-step*", a);
  }
  return c.call(null, a, b);
}
function EA(a) {
  if (a ? a.Vi : a) {
    return a.Vi(a);
  }
  var b;
  b = EA[m(null == a ? null : a)];
  if (!b && (b = EA._, !b)) {
    throw r("PMotorTopological.motor-topology", a);
  }
  return b.call(null, a);
}
function FA(a) {
  return Jz(EA(a));
}
function GA(a, b) {
  if (a ? a.ah : a) {
    return a.ah(0, b);
  }
  var c;
  c = GA[m(null == a ? null : a)];
  if (!c && (c = GA._, !c)) {
    throw r("PFeedForwardComposite.source-of-incoming-bit", a);
  }
  return c.call(null, a, b);
}
var HA = function() {
  function a(a) {
    return zA(a, 0);
  }
  var b = null, b = function(b, d) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      case 2:
        return zA(b, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.g = a;
  b.h = function(a, b) {
    return zA(a, b);
  };
  return b;
}(), IA = function() {
  function a(a) {
    return AA(a, 0);
  }
  var b = null, b = function(b, d) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      case 2:
        return AA(b, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.g = a;
  b.h = function(a, b) {
    return AA(a, b);
  };
  return b;
}(), JA = function() {
  function a(a) {
    return DA(a, !0);
  }
  var b = null, b = function(b, d) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      case 2:
        return DA(b, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.g = a;
  b.h = function(a, b) {
    return DA(a, b);
  };
  return b;
}();
function KA(a) {
  if (a ? a.Pe : a) {
    return a.Pe(a);
  }
  var b;
  b = KA[m(null == a ? null : a)];
  if (!b && (b = KA._, !b)) {
    throw r("PTemporal.timestep", a);
  }
  return b.call(null, a);
}
function LA(a) {
  if (a ? a.Oe : a) {
    return a.Oe(a);
  }
  var b;
  b = LA[m(null == a ? null : a)];
  if (!b && (b = LA._, !b)) {
    throw r("PResettable.reset", a);
  }
  return b.call(null, a);
}
function MA(a) {
  if (a ? a.Wi : a) {
    return a.value;
  }
  var b;
  b = MA[m(null == a ? null : a)];
  if (!b && (b = MA._, !b)) {
    throw r("PSensoryInput.domain-value", a);
  }
  return b.call(null, a);
}
;Math.seedrandom = null;
(function(a, b, c, d, e, f) {
  function g(a) {
    var b, c = a.length, e = this, f = 0, g = e.R = e.Rg = 0, h = e.fg = [];
    for (c || (a = [c++]);f < d;) {
      h[f] = f++;
    }
    for (f = 0;f < d;f++) {
      h[f] = h[g = y & g + a[f % c] + (b = h[f])], h[g] = b;
    }
    (e.Kg = function(a) {
      for (var b, c = 0, f = e.R, g = e.Rg, h = e.fg;a--;) {
        b = h[f = y & f + 1], c = c * d + h[y & (h[f] = h[g = y & g + b]) + (h[g] = b)];
      }
      e.R = f;
      e.Rg = g;
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
    return s(b);
  }
  function p() {
    var c;
    try {
      return a.crypto.getRandomValues(c = new Uint8Array(d)), s(c);
    } catch (e) {
      return[+new Date, a.document, a.history, a.navigator, a.screen, s(b)];
    }
  }
  function s(a) {
    return String.fromCharCode.apply(0, a);
  }
  var t = c.pow(d, e), v = c.pow(2, f), B = 2 * v, y = d - 1;
  c.seedrandom = function(a, f) {
    var y = [], M = l(h(f ? [a, s(b)] : 0 in arguments ? a : p(), 3), y), L = new g(y);
    l(s(L.fg), b);
    c.random = function() {
      for (var a = L.Kg(e), b = t, c = 0;a < v;) {
        a = (a + c) * d, b *= d, c = L.Kg(1);
      }
      for (;a >= B;) {
        a /= 2, b /= 2, c >>>= 1;
      }
      return(a + c) / b;
    };
    return M;
  };
  l(c.random(), b);
})(this, [], Math, 256, 6, 52);
function NA(a) {
  if (a ? a.qg : a) {
    return a.qg();
  }
  var b;
  b = NA[m(null == a ? null : a)];
  if (!b && (b = NA._, !b)) {
    throw r("IRandom.-next-double", a);
  }
  return b.call(null, a);
}
var OA = function() {
  function a(a, b) {
    if (a ? a.sg : a) {
      return a.sg(0, b);
    }
    var c;
    c = OA[m(null == a ? null : a)];
    if (!c && (c = OA._, !c)) {
      throw r("IRandom.-next-int", a);
    }
    return c.call(null, a, b);
  }
  function b(a) {
    if (a ? a.rg : a) {
      return a.rg();
    }
    var b;
    b = OA[m(null == a ? null : a)];
    if (!b && (b = OA._, !b)) {
      throw r("IRandom.-next-int", a);
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
function PA(a, b, c) {
  return b + (a.w ? a.w() : a.call(null)) * (c - b);
}
function QA(a, b, c, d) {
  this.seed = a;
  this.Vb = b;
  this.o = c;
  this.l = d;
  this.B = 2229667594;
  this.K = 8192;
  2 < arguments.length ? (this.o = c, this.l = d) : this.l = this.o = null;
}
k = QA.prototype;
k.N = function(a, b) {
  return hc.j(this, b, null);
};
k.P = function(a, b, c) {
  switch(b instanceof W ? b.ja : null) {
    case "random-double":
      return this.Vb;
    case "seed":
      return this.seed;
    default:
      return P.j(this.l, b, c);
  }
};
k.U = function(a, b, c) {
  return kk(b, function() {
    return function(a) {
      return kk(b, qk, "", " ", "", c, a);
    };
  }(this), "#cemerick.pprng.SeededRandom{", ", ", "}", c, wg.h(new U(null, 2, 5, V, [new U(null, 2, 5, V, [Zp, this.seed], null), new U(null, 2, 5, V, [Dq, this.Vb], null)], null), this.l));
};
k.L = function() {
  return this.o;
};
k.ma = function() {
  return new QA(this.seed, this.Vb, this.o, this.l, this.A);
};
k.Z = function() {
  return 2 + J(this.l);
};
k.S = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Jf(this);
};
k.J = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && ui(this, b) : b) ? !0 : !1;
};
k.Ra = function(a, b) {
  return Ze(new Oj(null, new n(null, 2, [Zp, null, Dq, null], null), null), b) ? we.h(ge(Ah.h(Gi, this), this.o), b) : new QA(this.seed, this.Vb, this.o, Fg(we.h(this.l, b)), null);
};
k.za = function(a, b, c) {
  return q(X.h ? X.h(Zp, b) : X.call(null, Zp, b)) ? new QA(c, this.Vb, this.o, this.l, null) : q(X.h ? X.h(Dq, b) : X.call(null, Dq, b)) ? new QA(this.seed, c, this.o, this.l, null) : new QA(this.seed, this.Vb, this.o, Q.j(this.l, b, c), null);
};
k.W = function() {
  return A(wg.h(new U(null, 2, 5, V, [new U(null, 2, 5, V, [Zp, this.seed], null), new U(null, 2, 5, V, [Dq, this.Vb], null)], null), this.l));
};
k.M = function(a, b) {
  return new QA(this.seed, this.Vb, b, this.l, this.A);
};
k.Y = function(a, b) {
  return He(b) ? kc(this, w.h(b, 0), w.h(b, 1)) : Nb.j($b, this, b);
};
k.qg = function() {
  return this.Vb.w ? this.Vb.w() : this.Vb.call(null);
};
k.rg = function() {
  return zf(PA(this.Vb, -2147483648, 2147483647));
};
k.sg = function(a, b) {
  return zf(PA(this.Vb, 0, b));
};
var RA = function() {
  function a(a, b) {
    return OA.h(a, b);
  }
  function b(a) {
    return OA.g(a);
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
var SA = function() {
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
}(), TA = function() {
  function a(a) {
    Math.seedrandom.g ? Math.seedrandom.g(a) : Math.seedrandom.call(null, a);
    Math.seedrandom.g ? Math.seedrandom.g(a) : Math.seedrandom.call(null, a);
    return new QA(a, Math.random);
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
  c.w = b;
  c.g = a;
  return c;
}().w(), UA = function() {
  function a(a, b) {
    if (!(a < b)) {
      throw Error("Assert failed: " + u.g(Ug.k(G([Pf(new Hd(null, "\x3c", "\x3c", 993667236, null), new Hd(null, "lower", "lower", -1534114948, null), new Hd(null, "upper", "upper", 1886775433, null))], 0))));
    }
    return a + NA(TA) * (b - a);
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
  c.w = b;
  c.h = a;
  return c;
}();
function VA(a) {
  return 0 + RA.h(TA, a - 0);
}
function WA(a) {
  return O.h(a, VA(J(a)));
}
function XA(a) {
  a = kh.j(Pf, ph.g(function() {
    return NA(TA);
  }), a);
  return kh.h(ie, ef.h(C, a));
}
function YA(a, b) {
  return Nb.j(function(b, d) {
    return q(a.g ? a.g(d) : a.call(null, d)) ? b + 1 : b;
  }, 0, b);
}
var ZA = function() {
  function a(a, b, c) {
    return zg(Nb.j(function(a, b) {
      var c = O.j(b, 0, null), d = O.j(b, 1, null);
      return Bg.j(a, c, dd(d));
    }, bd(Gi), zg(Nb.j(function(b, e) {
      var l = O.j(e, 0, null), p = O.j(e, 1, null), s = a.h ? a.h(l, p) : a.call(null, l, p), t = P.j(b, s, bd(c));
      return Bg.j(b, s, Bg.j(t, l, p));
    }, bd(Gi), b))));
  }
  function b(a, b) {
    return c.j(a, b, Gi);
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
function $A(a, b, c) {
  return Hb(A(b)) ? a : zg(Nb.j(function(a, b) {
    return Bg.j(a, b, function() {
      var f = P.h(a, b);
      return c.g ? c.g(f) : c.call(null, f);
    }());
  }, bd(a), b));
}
function aB(a, b) {
  return Ah.h(function() {
    var a = null == b ? null : Yb(b);
    return q(a) ? a : Gi;
  }(), Bh.h(function(b) {
    var d = O.j(b, 0, null);
    b = O.j(b, 1, null);
    return new U(null, 2, 5, V, [d, a.g ? a.g(b) : a.call(null, b)], null);
  }, b));
}
function bB(a, b) {
  if (0 < a) {
    for (var c = A(b), d = Aj(function() {
      return function(a, c) {
        return Gd(new U(null, 2, 5, V, [b.g ? b.g(a) : b.call(null, a), a], null), new U(null, 2, 5, V, [b.g ? b.g(c) : b.call(null, c), c], null));
      };
    }(c)), e = -1;;) {
      if (Ce(c)) {
        return Di(d);
      }
      var f = C(c), g = O.j(f, 0, null), h = O.j(f, 1, null);
      Ce(d) ? (c = F(c), d = Q.j(d, g, h), g = h) : J(d) < a ? (c = F(c), d = Q.j(d, g, h), g = function() {
        var a = e, b = h;
        return a < b ? a : b;
      }()) : h > e ? (g = Q.j(we.h(d, C(Di(d))), g, h), c = F(c), d = g, g = C(Ei(g))) : (c = F(c), g = e);
      e = g;
    }
  } else {
    return Md;
  }
}
;function cB(a, b, c, d, e, f, g) {
  this.Ob = a;
  this.Pb = b;
  this.rb = c;
  this.Ub = d;
  this.$b = e;
  this.o = f;
  this.l = g;
  this.B = 2229667594;
  this.K = 8192;
  5 < arguments.length ? (this.o = f, this.l = g) : this.l = this.o = null;
}
k = cB.prototype;
k.N = function(a, b) {
  return hc.j(this, b, null);
};
k.P = function(a, b, c) {
  switch(b instanceof W ? b.ja : null) {
    case "cull-zeros?":
      return this.$b;
    case "max-syns":
      return this.Ub;
    case "pcon":
      return this.rb;
    case "targets-by-source":
      return this.Pb;
    case "syns-by-target":
      return this.Ob;
    default:
      return P.j(this.l, b, c);
  }
};
k.U = function(a, b, c) {
  return kk(b, function() {
    return function(a) {
      return kk(b, qk, "", " ", "", c, a);
    };
  }(this), "#org.nfrac.comportex.synapses.SynapseGraph{", ", ", "}", c, wg.h(new U(null, 5, 5, V, [new U(null, 2, 5, V, [Ns, this.Ob], null), new U(null, 2, 5, V, [ar, this.Pb], null), new U(null, 2, 5, V, [Tt, this.rb], null), new U(null, 2, 5, V, [tl, this.Ub], null), new U(null, 2, 5, V, [pu, this.$b], null)], null), this.l));
};
k.L = function() {
  return this.o;
};
k.ma = function() {
  return new cB(this.Ob, this.Pb, this.rb, this.Ub, this.$b, this.o, this.l, this.A);
};
k.Z = function() {
  return 5 + J(this.l);
};
k.S = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Jf(this);
};
k.J = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && ui(this, b) : b) ? !0 : !1;
};
k.Ra = function(a, b) {
  return Ze(new Oj(null, new n(null, 5, [tl, null, ar, null, Ns, null, Tt, null, pu, null], null), null), b) ? we.h(ge(Ah.h(Gi, this), this.o), b) : new cB(this.Ob, this.Pb, this.rb, this.Ub, this.$b, this.o, Fg(we.h(this.l, b)), null);
};
k.za = function(a, b, c) {
  return q(X.h ? X.h(Ns, b) : X.call(null, Ns, b)) ? new cB(c, this.Pb, this.rb, this.Ub, this.$b, this.o, this.l, null) : q(X.h ? X.h(ar, b) : X.call(null, ar, b)) ? new cB(this.Ob, c, this.rb, this.Ub, this.$b, this.o, this.l, null) : q(X.h ? X.h(Tt, b) : X.call(null, Tt, b)) ? new cB(this.Ob, this.Pb, c, this.Ub, this.$b, this.o, this.l, null) : q(X.h ? X.h(tl, b) : X.call(null, tl, b)) ? new cB(this.Ob, this.Pb, this.rb, c, this.$b, this.o, this.l, null) : q(X.h ? X.h(pu, b) : X.call(null, pu, 
  b)) ? new cB(this.Ob, this.Pb, this.rb, this.Ub, c, this.o, this.l, null) : new cB(this.Ob, this.Pb, this.rb, this.Ub, this.$b, this.o, Q.j(this.l, b, c), null);
};
k.W = function() {
  return A(wg.h(new U(null, 5, 5, V, [new U(null, 2, 5, V, [Ns, this.Ob], null), new U(null, 2, 5, V, [ar, this.Pb], null), new U(null, 2, 5, V, [Tt, this.rb], null), new U(null, 2, 5, V, [tl, this.Ub], null), new U(null, 2, 5, V, [pu, this.$b], null)], null), this.l));
};
k.M = function(a, b) {
  return new cB(this.Ob, this.Pb, this.rb, this.Ub, this.$b, b, this.l, this.A);
};
k.Y = function(a, b) {
  return He(b) ? kc(this, w.h(b, 0), w.h(b, 1)) : Nb.j($b, this, b);
};
k.Wf = function(a, b) {
  return this.Ob.g ? this.Ob.g(b) : this.Ob.call(null, b);
};
k.Yf = function(a, b) {
  var c = this;
  return Og.h(function() {
    return function(a) {
      var b = O.j(a, 0, null);
      return O.j(a, 1, null) >= c.rb ? b : null;
    };
  }(this), sA(this, b));
};
k.Zf = function(a, b) {
  return this.Pb.g ? this.Pb.g(b) : this.Pb.call(null, b);
};
k.Xf = function(a, b, c, d, e, f) {
  var g = this;
  a = sA(this, b);
  var h = ZA.h(function() {
    return function(a, b) {
      return q(c.g ? c.g(a) : c.call(null, a)) ? zu : q(d.g ? d.g(a) : d.call(null, a)) ? 1 === b ? zu : b < g.rb && b >= g.rb - e ? yu : aq : 0 >= b ? q(g.$b) ? jm : zu : b >= g.rb && b < g.rb + f ? kq : pl;
    };
  }(a, this), a), l = Lj.k(G([zu.g(h), aB(function() {
    return function(a) {
      a += e;
      return 1 > a ? a : 1;
    };
  }(a, h, this), aq.g(h)), aB(function() {
    return function(a) {
      a += e;
      return 1 > a ? a : 1;
    };
  }(a, h, this), yu.g(h)), aB(function() {
    return function(a) {
      a -= f;
      return 0 < a ? a : 0;
    };
  }(a, h, this), pl.g(h)), aB(function() {
    return function(a) {
      return a - f;
    };
  }(a, h, this), kq.g(h))], 0));
  return Gh.Q(Gh.Q(Fh(this, new U(null, 2, 5, V, [Ns, b], null), l), new U(null, 1, 5, V, [ar], null), $A, Di(yu.g(h)), function() {
    return function(a) {
      return te.h(a, b);
    };
  }(a, h, l, this)), new U(null, 1, 5, V, [ar], null), $A, Di(kq.g(h)), function() {
    return function(a) {
      return Be.h(a, b);
    };
  }(a, h, l, this));
};
k.Uf = function(a, b, c, d) {
  var e = sA(this, b), f = Xj(c, oh.g(d));
  a = Lj.k(G([e, f], 0));
  var g = Fh(this, new U(null, 2, 5, V, [Ns, b], null), a);
  c = d >= this.rb ? Gh.Q(g, new U(null, 1, 5, V, [ar], null), $A, c, function() {
    return function(a) {
      return te.h(a, b);
    };
  }(g, e, f, a, this)) : g;
  return J(a) > this.Ub ? xA(c, b, lh.h(J(a) - this.Ub, Di(ef.h(Lf, a)))) : c;
};
k.Vf = function(a, b, c) {
  return Gh.Q(Gh.j(this, new U(null, 2, 5, V, [Ns, b], null), function() {
    return function(a) {
      return S.j(we, a, c);
    };
  }(this)), new U(null, 1, 5, V, [ar], null), $A, c, function() {
    return function(a) {
      return Be.h(a, b);
    };
  }(this));
};
function dB(a) {
  return new cB(Ns.g(a), ar.g(a), Tt.g(a), tl.g(a), pu.g(a), null, we.k(a, Ns, G([ar, Tt, tl, pu], 0)));
}
function eB(a, b, c, d, e) {
  b = ff(function(a, b, d) {
    d = Og.h(function(a) {
      var b = O.j(a, 0, null);
      return O.j(a, 1, null) >= c ? b : null;
    }, d);
    return $A(a, d, function() {
      return function(a) {
        return te.h(a, b);
      };
    }(d));
  }, $h(oh.h(b, Qj)), a);
  return dB(new n(null, 5, [Ns, a, ar, b, Tt, c, tl, d, pu, e], null));
}
function fB(a, b) {
  return zg(Nb.j(function(b, d) {
    return Nb.j(function(a, b) {
      return Bg.j(a, b, P.j(a, b, 0) + 1);
    }, b, uA(a, d));
  }, bd(Gi), b));
}
function gB(a, b) {
  var c = O.j(b, 0, null), d = O.j(b, 1, null);
  return c * a + d;
}
function hB(a, b) {
  return new U(null, 2, 5, V, [Af(b, a), Bf(b, a)], null);
}
function iB(a, b, c) {
  var d = O.j(c, 0, null), e = O.j(c, 1, null);
  c = O.j(c, 2, null);
  return d * a * b + e * b + c;
}
function jB(a, b, c) {
  var d = Af(c, a * b);
  a = Bf(c, a * b);
  return new U(null, 3, 5, V, [d, Af(a, b), Bf(a, b)], null);
}
function kB(a, b, c, d, e, f, g, h, l) {
  this.zb = a;
  this.depth = b;
  this.Kb = c;
  this.eb = d;
  this.yb = e;
  this.ua = f;
  this.Jb = g;
  this.o = h;
  this.l = l;
  this.B = 2229667594;
  this.K = 8192;
  7 < arguments.length ? (this.o = h, this.l = l) : this.l = this.o = null;
}
k = kB.prototype;
k.N = function(a, b) {
  return hc.j(this, b, null);
};
k.P = function(a, b, c) {
  switch(b instanceof W ? b.ja : null) {
    case "i-\x3etgt":
      return this.Jb;
    case "tgt-\x3ei":
      return this.ua;
    case "i-\x3esrc":
      return this.yb;
    case "src-\x3ei":
      return this.eb;
    case "max-segs":
      return this.Kb;
    case "depth":
      return this.depth;
    case "raw-sg":
      return this.zb;
    default:
      return P.j(this.l, b, c);
  }
};
k.U = function(a, b, c) {
  return kk(b, function() {
    return function(a) {
      return kk(b, qk, "", " ", "", c, a);
    };
  }(this), "#org.nfrac.comportex.synapses.SynapseGraphBySegments{", ", ", "}", c, wg.h(new U(null, 7, 5, V, [new U(null, 2, 5, V, [Du, this.zb], null), new U(null, 2, 5, V, [Ts, this.depth], null), new U(null, 2, 5, V, [Jl, this.Kb], null), new U(null, 2, 5, V, [gm, this.eb], null), new U(null, 2, 5, V, [Lm, this.yb], null), new U(null, 2, 5, V, [Mt, this.ua], null), new U(null, 2, 5, V, [Wq, this.Jb], null)], null), this.l));
};
k.L = function() {
  return this.o;
};
k.ma = function() {
  return new kB(this.zb, this.depth, this.Kb, this.eb, this.yb, this.ua, this.Jb, this.o, this.l, this.A);
};
k.Z = function() {
  return 7 + J(this.l);
};
k.mh = function(a, b) {
  var c = O.j(b, 0, null), d = O.j(b, 1, null);
  return Bh.h(function(a, b, c, d) {
    return function(a) {
      return sA(d, new U(null, 3, 5, V, [b, c, a], null));
    };
  }(b, c, d, this), bk.g(this.Kb));
};
k.S = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Jf(this);
};
k.J = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && ui(this, b) : b) ? !0 : !1;
};
k.Ra = function(a, b) {
  return Ze(new Oj(null, new n(null, 7, [Jl, null, gm, null, Lm, null, Wq, null, Ts, null, Mt, null, Du, null], null), null), b) ? we.h(ge(Ah.h(Gi, this), this.o), b) : new kB(this.zb, this.depth, this.Kb, this.eb, this.yb, this.ua, this.Jb, this.o, Fg(we.h(this.l, b)), null);
};
k.za = function(a, b, c) {
  return q(X.h ? X.h(Du, b) : X.call(null, Du, b)) ? new kB(c, this.depth, this.Kb, this.eb, this.yb, this.ua, this.Jb, this.o, this.l, null) : q(X.h ? X.h(Ts, b) : X.call(null, Ts, b)) ? new kB(this.zb, c, this.Kb, this.eb, this.yb, this.ua, this.Jb, this.o, this.l, null) : q(X.h ? X.h(Jl, b) : X.call(null, Jl, b)) ? new kB(this.zb, this.depth, c, this.eb, this.yb, this.ua, this.Jb, this.o, this.l, null) : q(X.h ? X.h(gm, b) : X.call(null, gm, b)) ? new kB(this.zb, this.depth, this.Kb, c, this.yb, 
  this.ua, this.Jb, this.o, this.l, null) : q(X.h ? X.h(Lm, b) : X.call(null, Lm, b)) ? new kB(this.zb, this.depth, this.Kb, this.eb, c, this.ua, this.Jb, this.o, this.l, null) : q(X.h ? X.h(Mt, b) : X.call(null, Mt, b)) ? new kB(this.zb, this.depth, this.Kb, this.eb, this.yb, c, this.Jb, this.o, this.l, null) : q(X.h ? X.h(Wq, b) : X.call(null, Wq, b)) ? new kB(this.zb, this.depth, this.Kb, this.eb, this.yb, this.ua, c, this.o, this.l, null) : new kB(this.zb, this.depth, this.Kb, this.eb, this.yb, 
  this.ua, this.Jb, this.o, Q.j(this.l, b, c), null);
};
k.W = function() {
  return A(wg.h(new U(null, 7, 5, V, [new U(null, 2, 5, V, [Du, this.zb], null), new U(null, 2, 5, V, [Ts, this.depth], null), new U(null, 2, 5, V, [Jl, this.Kb], null), new U(null, 2, 5, V, [gm, this.eb], null), new U(null, 2, 5, V, [Lm, this.yb], null), new U(null, 2, 5, V, [Mt, this.ua], null), new U(null, 2, 5, V, [Wq, this.Jb], null)], null), this.l));
};
k.M = function(a, b) {
  return new kB(this.zb, this.depth, this.Kb, this.eb, this.yb, this.ua, this.Jb, b, this.l, this.A);
};
k.Y = function(a, b) {
  return He(b) ? kc(this, w.h(b, 0), w.h(b, 1)) : Nb.j($b, this, b);
};
k.Wf = function(a, b) {
  var c = sA(this.zb, this.ua.g ? this.ua.g(b) : this.ua.call(null, b));
  return Xj(kh.h(this.yb, Di(c)), Ei(c));
};
k.Yf = function(a, b) {
  return kh.h(this.eb, tA(this.zb, this.ua.g ? this.ua.g(b) : this.ua.call(null, b)));
};
k.Zf = function(a, b) {
  return kh.h(this.Jb, uA(this.zb, this.eb.g ? this.eb.g(b) : this.eb.call(null, b)));
};
k.Xf = function(a, b, c, d, e, f) {
  return Gh.k(this, new U(null, 1, 5, V, [Du], null), vA, this.ua.g ? this.ua.g(b) : this.ua.call(null, b), Lg.h(c, this.yb), Lg.h(d, this.yb), G([e, f], 0));
};
k.Uf = function(a, b, c, d) {
  return Gh.Wa(this, new U(null, 1, 5, V, [Du], null), wA, this.ua.g ? this.ua.g(b) : this.ua.call(null, b), kh.h(this.eb, c), d);
};
k.Vf = function(a, b, c) {
  return Gh.Q(this, new U(null, 1, 5, V, [Du], null), xA, this.ua.g ? this.ua.g(b) : this.ua.call(null, b), kh.h(this.eb, c));
};
function lB(a) {
  return S.h(nf, a) - S.h(of, a);
}
function mB(a, b, c) {
  var d = tA(a, c), e = kh.h(Mg.h(Kz, b), d);
  if (A(e)) {
    if ("number" === typeof C(e)) {
      return lB(e);
    }
    var f = J(Jz(b));
    return S.h(nf, function() {
      return function(a, b, c) {
        return function s(d) {
          return new Tf(null, function(a, b, c) {
            return function() {
              for (;;) {
                var e = A(d);
                if (e) {
                  var f = e;
                  if (T(f)) {
                    var g = x(f), h = J(g), l = Xf(h);
                    return function() {
                      for (var d = 0;;) {
                        if (d < h) {
                          var s = w.h(g, d);
                          ag(l, lB(kh.h(function(a, b) {
                            return function(a) {
                              return O.h(a, b);
                            };
                          }(d, s, g, h, l, f, e, a, b, c), c)));
                          d += 1;
                        } else {
                          return!0;
                        }
                      }
                    }() ? $f(rg(l), s(z(f))) : $f(rg(l), null);
                  }
                  var R = C(f);
                  return ee(lB(kh.h(function(a) {
                    return function(b) {
                      return O.h(b, a);
                    };
                  }(R, f, e, a, b, c), c)), s(E(f)));
                }
                return null;
              }
            };
          }(a, b, c), null, null);
        };
      }(f, d, e)(bk.g(f));
    }());
  }
  return 0;
}
function nB(a, b, c) {
  var d = S.h(nf, Jz(b)), e = S.h(nf, Jz(c));
  a = kh.h(Mg.j(mB, a, c), bk.g(Pz(b)));
  a = S.h(jf, a) / J(a);
  d = Af(a / e * d, 2);
  d = SA.g(.7 * d);
  return 1 < d ? d : 1;
}
function oB(a, b, c) {
  b = SA.g(b * c);
  return bB(1 > b ? 1 : b, a);
}
function pB(a, b) {
  return Bh.h(b, bk.g(a));
}
function qB(a) {
  return zg(ff(function(a, c, d) {
    return q(d) ? Bg.j(a, c, d) : a;
  }, bd(Gi), a));
}
function rB(a, b, c, d, e) {
  for (var f = Di(a), g = yg(pB(Pz(b), a));;) {
    if (a = C(f), q(a)) {
      var h = a;
      a = function() {
        var a = h;
        return g.g ? g.g(a) : g.call(null, a);
      }();
      if (q(a)) {
        var l = a, f = F(f);
        a = function() {
          for (var a = Kz(b, h), f = Rz.v(b, a, c, 0), t = g;;) {
            var v = C(f);
            if (q(v)) {
              var B = v, v = Lz(b, B), y;
              y = v;
              y = t.g ? t.g(y) : t.call(null, y);
              if (q(y)) {
                if (B = Nz(b, a, B) - d, B = (0 < B ? B : 0) / e, l >= y + B) {
                  f = F(f), t = Bg.j(t, v, null);
                } else {
                  if (l <= y - B) {
                    return Bg.j(t, h, null);
                  }
                  f = F(f);
                }
              } else {
                f = F(f);
              }
            } else {
              return t;
            }
          }
        }();
      } else {
        f = F(f), a = g;
      }
      g = a;
    } else {
      return qB(dd(g));
    }
  }
}
;function sB(a) {
  return 0 > a ? -a : a;
}
function tB(a, b, c) {
  this.size = a;
  this.o = b;
  this.l = c;
  this.B = 2229667594;
  this.K = 8192;
  1 < arguments.length ? (this.o = b, this.l = c) : this.l = this.o = null;
}
k = tB.prototype;
k.N = function(a, b) {
  return hc.j(this, b, null);
};
k.P = function(a, b, c) {
  switch(b instanceof W ? b.ja : null) {
    case "size":
      return this.size;
    default:
      return P.j(this.l, b, c);
  }
};
k.U = function(a, b, c) {
  return kk(b, function() {
    return function(a) {
      return kk(b, qk, "", " ", "", c, a);
    };
  }(this), "#org.nfrac.comportex.topology.OneDTopology{", ", ", "}", c, wg.h(new U(null, 1, 5, V, [new U(null, 2, 5, V, [dq, this.size], null)], null), this.l));
};
k.L = function() {
  return this.o;
};
k.ma = function() {
  return new tB(this.size, this.o, this.l, this.A);
};
k.Z = function() {
  return 1 + J(this.l);
};
k.S = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Jf(this);
};
k.J = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && ui(this, b) : b) ? !0 : !1;
};
k.bg = function() {
  return new U(null, 1, 5, V, [this.size], null);
};
k.ag = function(a, b) {
  return b;
};
k.cg = function(a, b) {
  return b;
};
k.dg = function(a, b, c, d) {
  var e = this;
  return wg.h(bk.h(function() {
    var a = b + d + 1, c = e.size;
    return a < c ? a : c;
  }(), function() {
    var a = b + c + 1, d = e.size;
    return a < d ? a : d;
  }()), bk.h(function() {
    var a = b - c;
    return 0 < a ? a : 0;
  }(), function() {
    var a = b - d;
    return 0 < a ? a : 0;
  }()));
};
k.$f = function(a, b, c) {
  return sB(c - b);
};
k.Ra = function(a, b) {
  return Ze(new Oj(null, new n(null, 1, [dq, null], null), null), b) ? we.h(ge(Ah.h(Gi, this), this.o), b) : new tB(this.size, this.o, Fg(we.h(this.l, b)), null);
};
k.za = function(a, b, c) {
  return q(X.h ? X.h(dq, b) : X.call(null, dq, b)) ? new tB(c, this.o, this.l, null) : new tB(this.size, this.o, Q.j(this.l, b, c), null);
};
k.W = function() {
  return A(wg.h(new U(null, 1, 5, V, [new U(null, 2, 5, V, [dq, this.size], null)], null), this.l));
};
k.M = function(a, b) {
  return new tB(this.size, b, this.l, this.A);
};
k.Y = function(a, b) {
  return He(b) ? kc(this, w.h(b, 0), w.h(b, 1)) : Nb.j($b, this, b);
};
function uB(a, b, c, d) {
  this.width = a;
  this.height = b;
  this.o = c;
  this.l = d;
  this.B = 2229667594;
  this.K = 8192;
  2 < arguments.length ? (this.o = c, this.l = d) : this.l = this.o = null;
}
k = uB.prototype;
k.N = function(a, b) {
  return hc.j(this, b, null);
};
k.P = function(a, b, c) {
  switch(b instanceof W ? b.ja : null) {
    case "height":
      return this.height;
    case "width":
      return this.width;
    default:
      return P.j(this.l, b, c);
  }
};
k.U = function(a, b, c) {
  return kk(b, function() {
    return function(a) {
      return kk(b, qk, "", " ", "", c, a);
    };
  }(this), "#org.nfrac.comportex.topology.TwoDTopology{", ", ", "}", c, wg.h(new U(null, 2, 5, V, [new U(null, 2, 5, V, [nn, this.width], null), new U(null, 2, 5, V, [uu, this.height], null)], null), this.l));
};
k.L = function() {
  return this.o;
};
k.ma = function() {
  return new uB(this.width, this.height, this.o, this.l, this.A);
};
k.Z = function() {
  return 2 + J(this.l);
};
k.S = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Jf(this);
};
k.J = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && ui(this, b) : b) ? !0 : !1;
};
k.bg = function() {
  return new U(null, 2, 5, V, [this.width, this.height], null);
};
k.ag = function(a, b) {
  return new U(null, 2, 5, V, [Af(b, this.height), Bf(b, this.height)], null);
};
k.cg = function(a, b) {
  var c = O.j(b, 0, null), d = O.j(b, 1, null);
  return c * this.height + d;
};
k.dg = function(a, b, c, d) {
  var e = this, f = O.j(b, 0, null);
  a = O.j(b, 1, null);
  return function(a, b, f, p) {
    return function t(v) {
      return new Tf(null, function(a, b, f, g) {
        return function() {
          for (var h = v;;) {
            var l = A(h);
            if (l) {
              var p = l, R = C(p);
              if (l = A(function(a, b, c, e, f, g, h, l) {
                return function Da(p) {
                  return new Tf(null, function(a, b, c, e, f, g, h) {
                    return function() {
                      for (var a = p;;) {
                        if (a = A(a)) {
                          if (T(a)) {
                            var c = x(a), e = J(c), f = Xf(e);
                            a: {
                              for (var l = 0;;) {
                                if (l < e) {
                                  var t = w.h(c, l);
                                  (sB(b - g) > d || sB(t - h) > d) && f.add(new U(null, 2, 5, V, [b, t], null));
                                  l += 1;
                                } else {
                                  c = !0;
                                  break a;
                                }
                              }
                              c = void 0;
                            }
                            return c ? $f(rg(f), Da(z(a))) : $f(rg(f), null);
                          }
                          f = C(a);
                          if (sB(b - g) > d || sB(f - h) > d) {
                            return ee(new U(null, 2, 5, V, [b, f], null), Da(E(a)));
                          }
                          a = E(a);
                        } else {
                          return null;
                        }
                      }
                    };
                  }(a, b, c, e, f, g, h, l), null, null);
                };
              }(h, R, p, l, a, b, f, g)(bk.h(function() {
                var a = f - c;
                return 0 < a ? a : 0;
              }(), function() {
                var a = f + c + 1, b = e.height;
                return a < b ? a : b;
              }())))) {
                return wg.h(l, t(E(h)));
              }
              h = E(h);
            } else {
              return null;
            }
          }
        };
      }(a, b, f, p), null, null);
    };
  }(b, f, a, this)(bk.h(function() {
    var a = f - c;
    return 0 < a ? a : 0;
  }(), function() {
    var a = f + c + 1, b = e.width;
    return a < b ? a : b;
  }()));
};
k.$f = function(a, b, c) {
  a = O.j(b, 0, null);
  b = O.j(b, 1, null);
  var d = O.j(c, 0, null);
  c = O.j(c, 1, null);
  return sB(d - a) + sB(c - b);
};
k.Ra = function(a, b) {
  return Ze(new Oj(null, new n(null, 2, [nn, null, uu, null], null), null), b) ? we.h(ge(Ah.h(Gi, this), this.o), b) : new uB(this.width, this.height, this.o, Fg(we.h(this.l, b)), null);
};
k.za = function(a, b, c) {
  return q(X.h ? X.h(nn, b) : X.call(null, nn, b)) ? new uB(c, this.height, this.o, this.l, null) : q(X.h ? X.h(uu, b) : X.call(null, uu, b)) ? new uB(this.width, c, this.o, this.l, null) : new uB(this.width, this.height, this.o, Q.j(this.l, b, c), null);
};
k.W = function() {
  return A(wg.h(new U(null, 2, 5, V, [new U(null, 2, 5, V, [nn, this.width], null), new U(null, 2, 5, V, [uu, this.height], null)], null), this.l));
};
k.M = function(a, b) {
  return new uB(this.width, this.height, b, this.l, this.A);
};
k.Y = function(a, b) {
  return He(b) ? kc(this, w.h(b, 0), w.h(b, 1)) : Nb.j($b, this, b);
};
var wB = function vB(b, c, d) {
  return vB(b, c, d);
};
function xB(a) {
  var b = O.j(a, 0, null), c = O.j(a, 1, null), d = O.j(a, 2, null), e = O.j(a, 3, null);
  switch(J(a)) {
    case 0:
      return new tB(0);
    case 1:
      return new tB(b);
    case 2:
      return new uB(b, c);
    case 3:
      return wB(b, c, d);
    case 4:
      return wB(b, c, d * e);
    default:
      throw Error("No matching clause: " + u.g(J(a)));;
  }
}
var yB = function() {
  function a(a, b) {
    for (;;) {
      var c = J(a), g = J(b), h = a, l = O.j(h, 0, null), p = O.j(h, 1, null), h = O.j(h, 2, null), s = b, t = O.j(s, 0, null), v = O.j(s, 1, null), s = O.j(s, 2, null);
      if (g > c) {
        l = a, a = b, b = l;
      } else {
        var B;
        B = (B = 0 === g) ? B : Hg(Gf, b);
        if (q(B)) {
          return a;
        }
        if (1 === c && 1 === g) {
          return new U(null, 1, 5, V, [l + t], null);
        }
        if (2 === c && 2 === g && p === v) {
          return new U(null, 2, 5, V, [l + t, p], null);
        }
        if (2 === c && 2 === g) {
          b = new U(null, 1, 5, V, [t * v], null);
        } else {
          if (2 === c && 1 === g && 0 === Bf(t, p)) {
            return new U(null, 2, 5, V, [l + Af(t, p), p], null);
          }
          if (2 === c && 1 === g) {
            return new U(null, 1, 5, V, [l * p + t], null);
          }
          if (3 === c && 3 === g && h === s && p === v) {
            return new U(null, 3, 5, V, [l + t, p, h], null);
          }
          if (3 === c && 3 === g) {
            b = new U(null, 2, 5, V, [t, v * s], null);
          } else {
            if (3 === c && 2 === g && p === t && h === v) {
              return new U(null, 3, 5, V, [l + 1, p, h], null);
            }
            if (3 === c && 2 === g) {
              c = b, a = new U(null, 2, 5, V, [l, p * h], null), b = c;
            } else {
              if (3 === c && 1 === g && 0 === Bf(t, h)) {
                return new U(null, 3, 5, V, [l, p + Af(t, h), h], null);
              }
              if (3 === c && 1 === g) {
                c = a, a = new U(null, 2, 5, V, [l, p * h], null), b = c;
              } else {
                return null;
              }
            }
          }
        }
      }
    }
  }
  var b = null, c = function() {
    function a(b, d, h) {
      var l = null;
      2 < arguments.length && (l = G(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      return Nb.j(b, b.h(a, d), e);
    }
    a.D = 2;
    a.q = function(a) {
      var b = C(a);
      a = F(a);
      var d = C(a);
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
        return c.k(b, e, G(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.D = 2;
  b.q = c.q;
  b.g = function(a) {
    return a;
  };
  b.h = a;
  b.k = c.k;
  return b;
}();
var zB = ve([gl, hl, nl, km, qn, Ep, wq, Kq, Mq, Uq, Es, Ks, pt, Rt, cu, xu], [.001, .2, .16, .001, new U(null, 1, 5, V, [2048], null), .3, !1, 3, .3, .05, .005, new U(null, 1, 5, V, [Xs], null), 15, 1E3, 1E3, 3]);
function AB(a, b, c) {
  var d = hl.g(c), e = Uq.g(c), f = function() {
    var a = d + 1 * e;
    return 1 > a ? a : 1;
  }(), g = function() {
    var a = d - 2 * e;
    return 0 < a ? a : 0;
  }(), h = zf(Mq.g(c) * S.h(nf, Jz(b)));
  c = Ep.g(c);
  var l = Pz(b), p = Pz(a), s = 1 === J(Jz(a)) || 1 === J(Jz(b)), t = Jz(a), v = O.j(t, 0, null), B = O.j(t, 1, null), y = Jz(b), D = O.j(y, 0, null), H = O.j(y, 1, null);
  return Bh.h(function(c, d, e, f, g, h, l, p, s, t, v, y, B, D, H) {
    return function(ra) {
      var Ea = s ? SA.g(ra / p * l) : function() {
        var c = Kz(a, ra), d = O.j(c, 0, null), c = O.j(c, 1, null);
        return Lz(b, new U(null, 2, 5, V, [SA.g(d / v * D), SA.g(c / y * H)], null));
      }(), fb = $h(Sz.j(b, Ea, g)), xa = SA.g(h * J(fb)), ib = .5 > h ? ph.h(xa, function(a, b) {
        return function() {
          return WA(b);
        };
      }(Ea, fb, xa, c, d, e, f, g, h, l, p, s, t, v, y, B, D, H)) : lh.h(xa, XA(fb)), Ea = ph.h(xa, function(a, b, c, d, e, f, g, h) {
        return function() {
          return UA.h(h, g);
        };
      }(Ea, fb, xa, ib, c, d, e, f, g, h, l, p, s, t, v, y, B, D, H));
      return Xj(ib, Ea);
    };
  }(d, e, f, g, h, c, l, p, s, t, v, B, y, D, H), bk.g(p));
}
function BB(a, b, c) {
  c = xu.g(c);
  return zg(ff(function(a) {
    return function(c, f, g) {
      if (g < a) {
        return c;
      }
      var h = P.h(b, f);
      return Bg.j(c, f, g * h);
    };
  }(c), bd(Gi), a));
}
function CB(a, b, c, d) {
  var e = Ls.g(a), f = zq.g(a), g = Uq.g(f), h = Es.g(f), l = nl.g(f), p = wq.g(f), s = pt.g(f), t = cu.g(f), v = zf(Mq.g(f) * S.h(nf, Jz(e))), B = Qz(a);
  return Gh.j(a, new U(null, 1, 5, V, [Wp], null), function(a, e, f, g, h, l, p, s, t, v) {
    return function(B) {
      return Nb.j(function(a, b, e, f, g, h, l, p, s, t) {
        return function(b, p) {
          var v = d.g ? d.g(p) : d.call(null, p), y, v = l - v;
          y = 0 > v ? 0 : v;
          v = vA(b, p, Kg(!1), c, e, f);
          if (q(q(h) ? 0 < y : h)) {
            var N = Pz(a), N = SA.g(p / t * N), N = Kz(a, N);
            a: {
              for (var B = sA(v, p), M = Md, L = XA(c);;) {
                if (Ce(L) || J(M) >= y) {
                  y = M;
                  break a;
                }
                var D = C(c), H;
                H = D;
                H = B.g ? B.g(H) : B.call(null, H);
                q(H) || (H = Kz(a, D), Nz(a, H, N) < s && (M = te.h(M, D)));
                L = F(L);
              }
              y = void 0;
            }
            v = wA(v, p, y, g);
          }
          return v;
        };
      }(a, e, f, g, h, l, p, s, t, v), B, b);
    };
  }(e, f, g, h, l, p, s, t, v, B));
}
function DB(a, b) {
  var c = zq.g(a), d = gl.g(c), e = km.g(c), f = Kq.g(c), c = Uq.g(c), g = Qp.g(a), h = wn.g(a), l = Hl.g(a), p = Sz.j(Iz(a), b, l), l = S.j(nf, 1, Ei(Mj(g, p))), p = S.j(nf, 1, Ei(Mj(h, p))), d = d * l, l = e * p, e = P.h(g, b), h = P.h(h, b), f = f - h / l * (f - 1), f = 1 < f ? f : 1;
  return e < d ? Gh.k(a, new U(null, 1, 5, V, [Wp], null), vA, b, Kg(!1), Kg(!0), G([c, 0], 0)) : Fh(a, new U(null, 2, 5, V, [ql, b], null), f);
}
function EB(a, b, c) {
  var d = 1 / c;
  c = d * (c - 1);
  return $A(Bh.h(function(a, b) {
    return function(a) {
      return a * b;
    };
  }(d, c), a), b, function(a) {
    return function(b) {
      return b + a;
    };
  }(d, c));
}
function FB(a) {
  return Q.j(a, Hl, nB(Wp.g(a), Bu.g(a), Ls.g(a)));
}
function GB(a, b, c, d, e, f, g, h, l, p, s, t, v) {
  this.T = a;
  this.Ya = b;
  this.fa = c;
  this.lb = d;
  this.Ta = e;
  this.bb = f;
  this.Ua = g;
  this.$a = h;
  this.gb = l;
  this.jb = p;
  this.qb = s;
  this.o = t;
  this.l = v;
  this.B = 2229667594;
  this.K = 8192;
  11 < arguments.length ? (this.o = t, this.l = v) : this.l = this.o = null;
}
k = GB.prototype;
k.N = function(a, b) {
  return hc.j(this, b, null);
};
k.P = function(a, b, c) {
  switch(b instanceof W ? b.ja : null) {
    case "boosts":
      return this.gb;
    case "inh-radius":
      return this.$a;
    case "sig-overlaps":
      return this.bb;
    case "active-duty-cycles":
      return this.jb;
    case "overlap-duty-cycles":
      return this.qb;
    case "ff-sg":
      return this.Ya;
    case "spec":
      return this.T;
    case "overlaps":
      return this.Ta;
    case "input-topology":
      return this.lb;
    case "prox-exc":
      return this.Ua;
    case "topology":
      return this.fa;
    default:
      return P.j(this.l, b, c);
  }
};
k.Lb = function() {
  return Bu.g(this);
};
k.U = function(a, b, c) {
  return kk(b, function() {
    return function(a) {
      return kk(b, qk, "", " ", "", c, a);
    };
  }(this), "#org.nfrac.comportex.columns.ColumnField{", ", ", "}", c, wg.h(new U(null, 11, 5, V, [new U(null, 2, 5, V, [zq, this.T], null), new U(null, 2, 5, V, [Wp, this.Ya], null), new U(null, 2, 5, V, [Bu, this.fa], null), new U(null, 2, 5, V, [Ls, this.lb], null), new U(null, 2, 5, V, [lr, this.Ta], null), new U(null, 2, 5, V, [fn, this.bb], null), new U(null, 2, 5, V, [$t, this.Ua], null), new U(null, 2, 5, V, [Hl, this.$a], null), new U(null, 2, 5, V, [ql, this.gb], null), new U(null, 2, 5, 
  V, [wn, this.jb], null), new U(null, 2, 5, V, [Qp, this.qb], null)], null), this.l));
};
k.L = function() {
  return this.o;
};
k.ma = function() {
  return new GB(this.T, this.Ya, this.fa, this.lb, this.Ta, this.bb, this.Ua, this.$a, this.gb, this.jb, this.qb, this.o, this.l, this.A);
};
k.Z = function() {
  return 11 + J(this.l);
};
k.S = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Jf(this);
};
k.J = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && ui(this, b) : b) ? !0 : !1;
};
k.Ne = function() {
  return this.T;
};
k.$g = function(a, b, c) {
  a = fB(this.Ya, b);
  b = BB(a, this.gb, this.T);
  c = fB(this.Ya, c);
  return Q.k(this, kn, kn.h(this, 0) + 1, G([$t, b, lr, a, fn, c], 0));
};
k.Zg = function(a, b, c, d) {
  c = Rt.g(this.T);
  a = 0 === (kn.g(this) % c + c) % c;
  b = CB(this, d, b, this.Ta);
  b = Gh.Q(b, new U(null, 1, 5, V, [Qp], null), EB, Di(this.Ua), c);
  d = Gh.Q(b, new U(null, 1, 5, V, [wn], null), EB, d, c);
  d = a ? Nb.j(DB, d, bk.g(Qz(d))) : d;
  return a ? FB(d) : d;
};
k.Oi = function() {
  return this.$a;
};
k.Li = function() {
  return this.Ua;
};
k.Mi = function() {
  return this.Ta;
};
k.Ni = function() {
  return this.bb;
};
k.Pe = function() {
  return kn.h(this, 0);
};
k.Ra = function(a, b) {
  return Ze(new Oj(null, new n(null, 11, [ql, null, Hl, null, fn, null, wn, null, Qp, null, Wp, null, zq, null, lr, null, Ls, null, $t, null, Bu, null], null), null), b) ? we.h(ge(Ah.h(Gi, this), this.o), b) : new GB(this.T, this.Ya, this.fa, this.lb, this.Ta, this.bb, this.Ua, this.$a, this.gb, this.jb, this.qb, this.o, Fg(we.h(this.l, b)), null);
};
k.za = function(a, b, c) {
  return q(X.h ? X.h(zq, b) : X.call(null, zq, b)) ? new GB(c, this.Ya, this.fa, this.lb, this.Ta, this.bb, this.Ua, this.$a, this.gb, this.jb, this.qb, this.o, this.l, null) : q(X.h ? X.h(Wp, b) : X.call(null, Wp, b)) ? new GB(this.T, c, this.fa, this.lb, this.Ta, this.bb, this.Ua, this.$a, this.gb, this.jb, this.qb, this.o, this.l, null) : q(X.h ? X.h(Bu, b) : X.call(null, Bu, b)) ? new GB(this.T, this.Ya, c, this.lb, this.Ta, this.bb, this.Ua, this.$a, this.gb, this.jb, this.qb, this.o, this.l, 
  null) : q(X.h ? X.h(Ls, b) : X.call(null, Ls, b)) ? new GB(this.T, this.Ya, this.fa, c, this.Ta, this.bb, this.Ua, this.$a, this.gb, this.jb, this.qb, this.o, this.l, null) : q(X.h ? X.h(lr, b) : X.call(null, lr, b)) ? new GB(this.T, this.Ya, this.fa, this.lb, c, this.bb, this.Ua, this.$a, this.gb, this.jb, this.qb, this.o, this.l, null) : q(X.h ? X.h(fn, b) : X.call(null, fn, b)) ? new GB(this.T, this.Ya, this.fa, this.lb, this.Ta, c, this.Ua, this.$a, this.gb, this.jb, this.qb, this.o, this.l, 
  null) : q(X.h ? X.h($t, b) : X.call(null, $t, b)) ? new GB(this.T, this.Ya, this.fa, this.lb, this.Ta, this.bb, c, this.$a, this.gb, this.jb, this.qb, this.o, this.l, null) : q(X.h ? X.h(Hl, b) : X.call(null, Hl, b)) ? new GB(this.T, this.Ya, this.fa, this.lb, this.Ta, this.bb, this.Ua, c, this.gb, this.jb, this.qb, this.o, this.l, null) : q(X.h ? X.h(ql, b) : X.call(null, ql, b)) ? new GB(this.T, this.Ya, this.fa, this.lb, this.Ta, this.bb, this.Ua, this.$a, c, this.jb, this.qb, this.o, this.l, 
  null) : q(X.h ? X.h(wn, b) : X.call(null, wn, b)) ? new GB(this.T, this.Ya, this.fa, this.lb, this.Ta, this.bb, this.Ua, this.$a, this.gb, c, this.qb, this.o, this.l, null) : q(X.h ? X.h(Qp, b) : X.call(null, Qp, b)) ? new GB(this.T, this.Ya, this.fa, this.lb, this.Ta, this.bb, this.Ua, this.$a, this.gb, this.jb, c, this.o, this.l, null) : new GB(this.T, this.Ya, this.fa, this.lb, this.Ta, this.bb, this.Ua, this.$a, this.gb, this.jb, this.qb, this.o, Q.j(this.l, b, c), null);
};
k.W = function() {
  return A(wg.h(new U(null, 11, 5, V, [new U(null, 2, 5, V, [zq, this.T], null), new U(null, 2, 5, V, [Wp, this.Ya], null), new U(null, 2, 5, V, [Bu, this.fa], null), new U(null, 2, 5, V, [Ls, this.lb], null), new U(null, 2, 5, V, [lr, this.Ta], null), new U(null, 2, 5, V, [fn, this.bb], null), new U(null, 2, 5, V, [$t, this.Ua], null), new U(null, 2, 5, V, [Hl, this.$a], null), new U(null, 2, 5, V, [ql, this.gb], null), new U(null, 2, 5, V, [wn, this.jb], null), new U(null, 2, 5, V, [Qp, this.qb], 
  null)], null), this.l));
};
k.M = function(a, b) {
  return new GB(this.T, this.Ya, this.fa, this.lb, this.Ta, this.bb, this.Ua, this.$a, this.gb, this.jb, this.qb, b, this.l, this.A);
};
k.Y = function(a, b) {
  return He(b) ? kc(this, w.h(b, 0), w.h(b, 1)) : Nb.j($b, this, b);
};
function HB() {
  function a() {
    return Df(16).toString(16);
  }
  return new Ik((new ab(a(), a(), a(), a(), a(), a(), a(), a(), "-", a(), a(), a(), a(), "-4", a(), a(), a(), "-", (8 | 3 & Df(15)).toString(16), a(), a(), a(), "-", a(), a(), a(), a(), a(), a(), a(), a(), a(), a(), a(), a())).toString());
}
;function IB(a, b) {
  var c = S.j(Yj, a, b);
  return ee(c, xh.h(function(a) {
    return function(b) {
      return a === b;
    };
  }(c), b));
}
var JB = function() {
  function a(a, b) {
    return J(a) < J(b) ? Nb.j(te, b, a) : Nb.j(te, a, b);
  }
  var b = null, c = function() {
    function a(c, d, h) {
      var l = null;
      2 < arguments.length && (l = G(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      a = IB(J, te.k(d, c, G([a], 0)));
      return Nb.j(Ah, C(a), E(a));
    }
    a.D = 2;
    a.q = function(a) {
      var c = C(a);
      a = F(a);
      var d = C(a);
      a = E(a);
      return b(c, d, a);
    };
    a.k = b;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 0:
        return Qj;
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.k(b, e, G(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.D = 2;
  b.q = c.q;
  b.w = function() {
    return Qj;
  };
  b.g = function(a) {
    return a;
  };
  b.h = a;
  b.k = c.k;
  return b;
}(), KB = function() {
  function a(a, b) {
    for (;;) {
      if (J(b) < J(a)) {
        var c = a;
        a = b;
        b = c;
      } else {
        return Nb.j(function(a, b) {
          return function(a, c) {
            return Ze(b, c) ? a : Be.h(a, c);
          };
        }(a, b), a, a);
      }
    }
  }
  var b = null, c = function() {
    function a(b, d, h) {
      var l = null;
      2 < arguments.length && (l = G(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      a = IB(function(a) {
        return-J(a);
      }, te.k(e, d, G([a], 0)));
      return Nb.j(b, C(a), E(a));
    }
    a.D = 2;
    a.q = function(a) {
      var b = C(a);
      a = F(a);
      var d = C(a);
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
        return c.k(b, e, G(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.D = 2;
  b.q = c.q;
  b.g = function(a) {
    return a;
  };
  b.h = a;
  b.k = c.k;
  return b;
}(), LB = function() {
  function a(a, b) {
    return J(a) < J(b) ? Nb.j(function(a, c) {
      return Ze(b, c) ? Be.h(a, c) : a;
    }, a, a) : Nb.j(Be, a, b);
  }
  var b = null, c = function() {
    function a(b, d, h) {
      var l = null;
      2 < arguments.length && (l = G(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      return Nb.j(b, a, te.h(e, d));
    }
    a.D = 2;
    a.q = function(a) {
      var b = C(a);
      a = F(a);
      var d = C(a);
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
        return c.k(b, e, G(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.D = 2;
  b.q = c.q;
  b.g = function(a) {
    return a;
  };
  b.h = a;
  b.k = c.k;
  return b;
}();
var MB = ve([ul, Pl, bm, hm, Nm, Rm, $m, qn, Ip, Mp, $p, Rq, kr, Er, Ts, Vs, Kt, iu, wu], [!0, 15, 5, .01, .2, 8, 12, new U(null, 1, 5, V, [2048], null), .05, 22, !1, 2, .02, !1, 16, 4, 2, !1, .16]);
function NB(a, b, c) {
  return YA(function(a) {
    var e = O.j(a, 0, null);
    return(a = O.j(a, 1, null) >= c) ? b.g ? b.g(e) : b.call(null, e) : a;
  }, a);
}
function OB(a, b, c, d) {
  return Wg.h(function(a, f) {
    var g = NB(f, b, d);
    return g >= c ? new n(null, 2, [uq, g, Wl, a], null) : null;
  }, a);
}
function PB(a, b) {
  return zg(ff(function(a, d, e) {
    if (e < b) {
      return a;
    }
    var f = null == d ? null : yc(d);
    return Bg.j(a, f, function() {
      var b = P.j(a, f, 0) + 1;
      return e > b ? e : b;
    }());
  }, bd(Gi), a));
}
function QB(a, b, c, d) {
  return zg(ff(function(a, d, g) {
    g *= c;
    var h = Ei(b.g ? b.g(d) : b.call(null, d));
    return q(h) ? (h = S.h(nf, h), Bg.j(a, d, h + g)) : Bg.j(a, d, g);
  }, bd(Gi), q(d) ? Lj.k(G([Xj(Di(b), oh.g(0)), a], 0)) : a));
}
function RB(a, b, c, d, e) {
  var f = ZA.h(function(a) {
    var b = O.j(a, 0, null);
    O.j(a, 1, null);
    return b;
  }, b);
  a = QB(a, f, Kt.g(e), iu.g(e));
  b = kr.g(e);
  c = q(Er.g(e)) ? oB(a, b, Pz(c)) : Di(rB(a, c, d, Vs.g(e), Rq.g(e)));
  e = Ts.g(e);
  d = bd(Gi);
  for (a = bd(Qj);;) {
    if (b = C(c), q(b)) {
      var g = b;
      b = function() {
        var a = g;
        return f.g ? f.g(a) : f.call(null, a);
      }();
      if (q(b)) {
        var h = S.j(Yj, Lf, b);
        b = O.j(h, 0, null);
        O.j(h, 1, null);
        c = F(c);
        d = Bg.j(d, g, new U(null, 1, 5, V, [b], null));
      } else {
        c = F(c), d = Bg.j(d, g, kh.j(ai, oh.g(g), bk.g(e))), a = Ag.h(a, g);
      }
    } else {
      return new n(null, 2, [Yq, dd(d), Dl, dd(a)], null);
    }
  }
}
function SB(a, b, c) {
  a = OB(a, b, 0, c);
  return A(a) ? S.j(Yj, uq, a) : new n(null, 2, [Wl, null, uq, 0], null);
}
function TB(a, b, c, d) {
  if (Ce(c)) {
    return new n(null, 1, [Rs, C(b)], null);
  }
  var e = kh.h(function(b) {
    var d = yA(a, b);
    return Q.j(SB(d, c, 0), Rs, b);
  }, b), e = S.j(Yj, uq, e);
  return uq.g(e) >= Rm.g(d) ? e : new n(null, 1, [Rs, WA(b)], null);
}
function UB(a, b, c, d) {
  var e = bm.g(d), f = Mp.g(d), g = Rm.g(d);
  d = Nm.g(d);
  a = yA(a, new U(null, 2, 5, V, [b, c], null));
  return J(a) >= e ? S.j(Zj, function(a, b, c, d, e) {
    return function(f) {
      var g = O.h(e, f);
      return YA(function(a, b, c, d, e) {
        return function(a) {
          return a >= e;
        };
      }(g, a, b, c, d, e), Ei(g)) * b + J(g) + f / J(e);
    };
  }(e, f, g, d, a), bk.g(J(a))) : J(a);
}
function VB(a, b, c, d) {
  a = Ah.h(Rj([b]), kh.h(C, Di(a)));
  return lh.h(d, XA(xh.h(function(a) {
    return function(b) {
      var c = O.j(b, 0, null);
      O.j(b, 1, null);
      return a.g ? a.g(c) : a.call(null, c);
    };
  }(a), c)));
}
function WB(a, b, c, d, e, f) {
  return ff(function(a, b, l) {
    var p = O.j(b, 0, null);
    b = O.j(b, 1, null);
    var s = c.g ? c.g(p) : c.call(null, p), t = Ip.g(f), v = hm.g(f);
    q(l) ? (a = vA(a, new U(null, 3, 5, V, [p, b, l], null), Kg(!1), d, t, v), q(s) && (p = new U(null, 3, 5, V, [p, b, l], null), b = C(p), l = sA(a, p), s = NB(l, d, 0), s = Pl.g(f) - s, 0 < s && (b = VB(l, b, e, s), a = wA(a, p, b, wu.g(f))))) : (l = Pl.g(f), s = Rm.g(f), t = UB(a, p, b, f), l = VB(Gi, p, e, l), J(l) < s || (p = new U(null, 3, 5, V, [p, b, t], null), b = sA(a, p), a = A(b) ? xA(a, p, Di(b)) : a, a = wA(a, p, l, wu.g(f))));
    return a;
  }, a, b);
}
function XB(a, b, c, d, e, f, g) {
  var h = yA(a, new U(null, 2, 5, V, [b, c], null));
  e = OB(h, d, e, f);
  return Nb.j(function() {
    return function(a, e) {
      var f = Wl.g(e);
      return vA(a, new U(null, 3, 5, V, [b, c, f], null), d, Kg(!1), 0, g);
    };
  }(h, e), a, e);
}
function YB(a, b, c, d, e, f) {
  var g = $m.g(f), h = Nm.g(f);
  f = hm.g(f);
  b = LB.k(e, b, G([d], 0));
  return Nb.j(function(a, b, d) {
    return function(e, f) {
      var g = O.j(f, 0, null), h = O.j(f, 1, null);
      return XB(e, g, h, c, a, b, d);
    };
  }(g, h, f, b), a, b);
}
function ZB(a, b, c, d, e) {
  var f = Nm.g(e);
  a = A(a);
  for (var g = bd(Qj), h = bd(Gi);;) {
    var l = C(a);
    if (q(l)) {
      var p = O.j(l, 0, null), l = O.j(l, 1, null), p = b.g ? b.g(p) : b.call(null, p);
      if (q(p)) {
        p = TB(c, l, d, e), l = Rs.g(p);
      } else {
        var l = C(l), s = yA(c, l), p = SB(s, d, f), p = q(Wl.g(p)) ? p : SB(s, d, 0)
      }
      a = F(a);
      g = Ag.h(g, l);
      h = Bg.j(h, l, Wl.g(p));
    } else {
      return new n(null, 2, [Up, dd(g), Yk, dd(h)], null);
    }
  }
}
function $B(a, b, c, d, e, f) {
  c = wh.h(function(c) {
    return Hg(b, uA(a, c));
  }, LB.h(c, d));
  if (Ce(c)) {
    return Gi;
  }
  c = fB(a, c);
  c = PB(c, $m.g(f));
  var g = Uj(kh.h(C, Di(c))), g = Xj(g, oh.g(1));
  e = RB(g, c, e, 5, f);
  c = Xe(e) ? S.h(Qg, e) : e;
  e = P.h(c, Yq);
  c = P.h(c, Dl);
  return Q.j(ZB(e, c, a, d, f), fq, Uj(Di(e)));
}
function aC(a, b, c, d, e, f, g, h, l, p, s, t, v, B, y) {
  this.T = a;
  this.fa = b;
  this.Ga = c;
  this.Na = d;
  this.Ea = e;
  this.Ja = f;
  this.Pa = g;
  this.cb = h;
  this.Qa = l;
  this.Ha = p;
  this.Ia = s;
  this.Sa = t;
  this.fb = v;
  this.o = B;
  this.l = y;
  this.B = 2229667594;
  this.K = 8192;
  13 < arguments.length ? (this.o = B, this.l = y) : this.l = this.o = null;
}
k = aC.prototype;
k.N = function(a, b) {
  return hc.j(this, b, null);
};
k.P = function(a, b, c) {
  switch(b instanceof W ? b.ja : null) {
    case "burst-cols":
      return this.Ea;
    case "tp-exc":
      return this.fb;
    case "pred-cells":
      return this.Ha;
    case "signal-cells":
      return this.cb;
    case "learn-cells":
      return this.Pa;
    case "spec":
      return this.T;
    case "active-cols":
      return this.Na;
    case "tp-cells":
      return this.Qa;
    case "active-cells":
      return this.Ja;
    case "distal-sg":
      return this.Ga;
    case "prior-pred-cells":
      return this.Ia;
    case "distal-exc":
      return this.Sa;
    case "topology":
      return this.fa;
    default:
      return P.j(this.l, b, c);
  }
};
k.Lb = function() {
  return Bu.g(this);
};
k.U = function(a, b, c) {
  return kk(b, function() {
    return function(a) {
      return kk(b, qk, "", " ", "", c, a);
    };
  }(this), "#org.nfrac.comportex.cells.LayerOfCells{", ", ", "}", c, wg.h(new U(null, 13, 5, V, [new U(null, 2, 5, V, [zq, this.T], null), new U(null, 2, 5, V, [Bu, this.fa], null), new U(null, 2, 5, V, [yr, this.Ga], null), new U(null, 2, 5, V, [Iq, this.Na], null), new U(null, 2, 5, V, [Dl, this.Ea], null), new U(null, 2, 5, V, [$q, this.Ja], null), new U(null, 2, 5, V, [Up, this.Pa], null), new U(null, 2, 5, V, [En, this.cb], null), new U(null, 2, 5, V, [Vq, this.Qa], null), new U(null, 2, 5, 
  V, [$l, this.Ha], null), new U(null, 2, 5, V, [dt, this.Ia], null), new U(null, 2, 5, V, [Qt, this.Sa], null), new U(null, 2, 5, V, [Fl, this.fb], null)], null), this.l));
};
k.L = function() {
  return this.o;
};
k.ma = function() {
  return new aC(this.T, this.fa, this.Ga, this.Na, this.Ea, this.Ja, this.Pa, this.cb, this.Qa, this.Ha, this.Ia, this.Sa, this.fb, this.o, this.l, this.A);
};
k.Z = function() {
  return 13 + J(this.l);
};
k.dh = function() {
  var a = fB(this.Ga, this.Ja), a = PB(a, $m.g(this.T)), b = Uj(Di(a));
  return Q.k(this, $l, b, G([dt, this.Ha, Qt, a], 0));
};
k.gh = function(a, b, c, d) {
  a = RB(b, this.Sa, this.fa, d, this.T);
  b = Xe(a) ? S.h(Qg, a) : a;
  a = P.h(b, Yq);
  b = P.h(b, Dl);
  c = Uj(Di(a));
  d = Uj(S.h(wg, Ei(a)));
  var e = Uj(S.h(wg, Ei(S.j(we, a, b))));
  return Q.k(this, Yq, a, G([Iq, c, Dl, b, $q, d, En, e, Vq, Qj], 0));
};
k.Ui = function() {
  return this.Qa;
};
k.Qi = function() {
  return this.Ea;
};
k.fh = function(a, b, c) {
  a = Yq.g(this);
  a = ZB(a, this.Ea, this.Ga, b, this.T);
  var d = Xe(a) ? S.h(Qg, a) : a;
  a = P.h(d, Up);
  var d = P.h(d, Yk), e = q($p.g(this.T)) ? $B(this.Ga, this.Ja, this.Ia, b, this.fa, this.T) : null, f = Xe(e) ? S.h(Qg, e) : e, g = P.h(f, fq), e = P.h(f, Up), f = P.h(f, Yk), h = WB(this.Ga, d, this.Ea, b, c, this.T), h = q(ul.g(this.T)) ? YB(h, this.Ja, b, this.Ha, this.Ia, this.T) : h, l = $p.g(this.T);
  b = q(q(l) ? f : l) ? WB(h, f, g, b, c, this.T) : h;
  return Q.k(this, yn, e, G([ys, f, Up, a, Mm, d, yr, b], 0));
};
k.eh = function() {
  return Ts.g(this.T);
};
k.hh = function() {
  return En.g(this);
};
k.Pi = function() {
  return this.Na;
};
k.Ti = function() {
  return this.Ia;
};
k.bh = function() {
  return $q.g(this);
};
k.Ri = function() {
  return this.Pa;
};
k.Si = function() {
  return this.Ha;
};
k.S = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Jf(this);
};
k.J = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && ui(this, b) : b) ? !0 : !1;
};
k.Ne = function() {
  return this.T;
};
k.Ra = function(a, b) {
  return Ze(new Oj(null, new n(null, 13, [Dl, null, Fl, null, $l, null, En, null, Up, null, zq, null, Iq, null, Vq, null, $q, null, yr, null, dt, null, Qt, null, Bu, null], null), null), b) ? we.h(ge(Ah.h(Gi, this), this.o), b) : new aC(this.T, this.fa, this.Ga, this.Na, this.Ea, this.Ja, this.Pa, this.cb, this.Qa, this.Ha, this.Ia, this.Sa, this.fb, this.o, Fg(we.h(this.l, b)), null);
};
k.za = function(a, b, c) {
  return q(X.h ? X.h(zq, b) : X.call(null, zq, b)) ? new aC(c, this.fa, this.Ga, this.Na, this.Ea, this.Ja, this.Pa, this.cb, this.Qa, this.Ha, this.Ia, this.Sa, this.fb, this.o, this.l, null) : q(X.h ? X.h(Bu, b) : X.call(null, Bu, b)) ? new aC(this.T, c, this.Ga, this.Na, this.Ea, this.Ja, this.Pa, this.cb, this.Qa, this.Ha, this.Ia, this.Sa, this.fb, this.o, this.l, null) : q(X.h ? X.h(yr, b) : X.call(null, yr, b)) ? new aC(this.T, this.fa, c, this.Na, this.Ea, this.Ja, this.Pa, this.cb, this.Qa, 
  this.Ha, this.Ia, this.Sa, this.fb, this.o, this.l, null) : q(X.h ? X.h(Iq, b) : X.call(null, Iq, b)) ? new aC(this.T, this.fa, this.Ga, c, this.Ea, this.Ja, this.Pa, this.cb, this.Qa, this.Ha, this.Ia, this.Sa, this.fb, this.o, this.l, null) : q(X.h ? X.h(Dl, b) : X.call(null, Dl, b)) ? new aC(this.T, this.fa, this.Ga, this.Na, c, this.Ja, this.Pa, this.cb, this.Qa, this.Ha, this.Ia, this.Sa, this.fb, this.o, this.l, null) : q(X.h ? X.h($q, b) : X.call(null, $q, b)) ? new aC(this.T, this.fa, this.Ga, 
  this.Na, this.Ea, c, this.Pa, this.cb, this.Qa, this.Ha, this.Ia, this.Sa, this.fb, this.o, this.l, null) : q(X.h ? X.h(Up, b) : X.call(null, Up, b)) ? new aC(this.T, this.fa, this.Ga, this.Na, this.Ea, this.Ja, c, this.cb, this.Qa, this.Ha, this.Ia, this.Sa, this.fb, this.o, this.l, null) : q(X.h ? X.h(En, b) : X.call(null, En, b)) ? new aC(this.T, this.fa, this.Ga, this.Na, this.Ea, this.Ja, this.Pa, c, this.Qa, this.Ha, this.Ia, this.Sa, this.fb, this.o, this.l, null) : q(X.h ? X.h(Vq, b) : 
  X.call(null, Vq, b)) ? new aC(this.T, this.fa, this.Ga, this.Na, this.Ea, this.Ja, this.Pa, this.cb, c, this.Ha, this.Ia, this.Sa, this.fb, this.o, this.l, null) : q(X.h ? X.h($l, b) : X.call(null, $l, b)) ? new aC(this.T, this.fa, this.Ga, this.Na, this.Ea, this.Ja, this.Pa, this.cb, this.Qa, c, this.Ia, this.Sa, this.fb, this.o, this.l, null) : q(X.h ? X.h(dt, b) : X.call(null, dt, b)) ? new aC(this.T, this.fa, this.Ga, this.Na, this.Ea, this.Ja, this.Pa, this.cb, this.Qa, this.Ha, c, this.Sa, 
  this.fb, this.o, this.l, null) : q(X.h ? X.h(Qt, b) : X.call(null, Qt, b)) ? new aC(this.T, this.fa, this.Ga, this.Na, this.Ea, this.Ja, this.Pa, this.cb, this.Qa, this.Ha, this.Ia, c, this.fb, this.o, this.l, null) : q(X.h ? X.h(Fl, b) : X.call(null, Fl, b)) ? new aC(this.T, this.fa, this.Ga, this.Na, this.Ea, this.Ja, this.Pa, this.cb, this.Qa, this.Ha, this.Ia, this.Sa, c, this.o, this.l, null) : new aC(this.T, this.fa, this.Ga, this.Na, this.Ea, this.Ja, this.Pa, this.cb, this.Qa, this.Ha, 
  this.Ia, this.Sa, this.fb, this.o, Q.j(this.l, b, c), null);
};
k.W = function() {
  return A(wg.h(new U(null, 13, 5, V, [new U(null, 2, 5, V, [zq, this.T], null), new U(null, 2, 5, V, [Bu, this.fa], null), new U(null, 2, 5, V, [yr, this.Ga], null), new U(null, 2, 5, V, [Iq, this.Na], null), new U(null, 2, 5, V, [Dl, this.Ea], null), new U(null, 2, 5, V, [$q, this.Ja], null), new U(null, 2, 5, V, [Up, this.Pa], null), new U(null, 2, 5, V, [En, this.cb], null), new U(null, 2, 5, V, [Vq, this.Qa], null), new U(null, 2, 5, V, [$l, this.Ha], null), new U(null, 2, 5, V, [dt, this.Ia], 
  null), new U(null, 2, 5, V, [Qt, this.Sa], null), new U(null, 2, 5, V, [Fl, this.fb], null)], null), this.l));
};
k.M = function(a, b) {
  return new aC(this.T, this.fa, this.Ga, this.Na, this.Ea, this.Ja, this.Pa, this.cb, this.Qa, this.Ha, this.Ia, this.Sa, this.fb, b, this.l, this.A);
};
k.Y = function(a, b) {
  return He(b) ? kc(this, w.h(b, 0), w.h(b, 1)) : Nb.j($b, this, b);
};
EA.object = function() {
  return xB(new U(null, 1, 5, V, [0], null));
};
function bC(a, b, c, d, e, f) {
  this.Rb = a;
  this.nb = b;
  this.Va = c;
  this.jc = d;
  this.o = e;
  this.l = f;
  this.B = 2229667594;
  this.K = 8192;
  4 < arguments.length ? (this.o = e, this.l = f) : this.l = this.o = null;
}
k = bC.prototype;
k.Oe = function() {
  var a = this;
  return Q.j(function() {
    var b = Vz(a);
    return cC.g ? cC.g(b) : cC.call(null, b);
  }(), qt, this.Va);
};
k.N = function(a, b) {
  return hc.j(this, b, null);
};
k.P = function(a, b, c) {
  switch(b instanceof W ? b.ja : null) {
    case "step-counter":
      return this.jc;
    case "uuid":
      return this.Va;
    case "layer-3":
      return this.nb;
    case "column-field":
      return this.Rb;
    default:
      return P.j(this.l, b, c);
  }
};
k.Lb = function() {
  return Iz(this.Rb);
};
k.U = function(a, b, c) {
  return kk(b, function() {
    return function(a) {
      return kk(b, qk, "", " ", "", c, a);
    };
  }(this), "#org.nfrac.comportex.core.SensoryRegion{", ", ", "}", c, wg.h(new U(null, 4, 5, V, [new U(null, 2, 5, V, [eu, this.Rb], null), new U(null, 2, 5, V, [St, this.nb], null), new U(null, 2, 5, V, [qt, this.Va], null), new U(null, 2, 5, V, [xs, this.jc], null)], null), this.l));
};
k.L = function() {
  return this.o;
};
k.ma = function() {
  return new bC(this.Rb, this.nb, this.Va, this.jc, this.o, this.l, this.A);
};
k.Z = function() {
  return 4 + J(this.l);
};
k.S = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Jf(this);
};
k.J = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && ui(this, b) : b) ? !0 : !1;
};
k.Ne = function() {
  return Lj.k(G([Vz(this.Rb), Vz(this.nb)], 0));
};
k.Pe = function() {
  return this.jc;
};
k.Ra = function(a, b) {
  return Ze(new Oj(null, new n(null, 4, [xs, null, qt, null, St, null, eu, null], null), null), b) ? we.h(ge(Ah.h(Gi, this), this.o), b) : new bC(this.Rb, this.nb, this.Va, this.jc, this.o, Fg(we.h(this.l, b)), null);
};
k.za = function(a, b, c) {
  return q(X.h ? X.h(eu, b) : X.call(null, eu, b)) ? new bC(c, this.nb, this.Va, this.jc, this.o, this.l, null) : q(X.h ? X.h(St, b) : X.call(null, St, b)) ? new bC(this.Rb, c, this.Va, this.jc, this.o, this.l, null) : q(X.h ? X.h(qt, b) : X.call(null, qt, b)) ? new bC(this.Rb, this.nb, c, this.jc, this.o, this.l, null) : q(X.h ? X.h(xs, b) : X.call(null, xs, b)) ? new bC(this.Rb, this.nb, this.Va, c, this.o, this.l, null) : new bC(this.Rb, this.nb, this.Va, this.jc, this.o, Q.j(this.l, b, c), null);
};
k.W = function() {
  return A(wg.h(new U(null, 4, 5, V, [new U(null, 2, 5, V, [eu, this.Rb], null), new U(null, 2, 5, V, [St, this.nb], null), new U(null, 2, 5, V, [qt, this.Va], null), new U(null, 2, 5, V, [xs, this.jc], null)], null), this.l));
};
k.M = function(a, b) {
  return new bC(this.Rb, this.nb, this.Va, this.jc, b, this.l, this.A);
};
k.lh = function(a, b, c, d, e) {
  var f = mA(this.nb), g = nA(this.nb);
  a = aA(this.Rb, b, c);
  var h = gA(this.nb, dA(a), fA(a), cA(a)), f = q(e) ? hA(h, f, g) : h;
  d = iA(f, d);
  b = q(e) ? bA(a, b, c, lA(d)) : a;
  return Q.k(this, eu, b, G([St, d, xs, this.jc + 1], 0));
};
k.jh = function() {
  return jA(this.nb);
};
k.ih = function() {
  return mA(this.nb);
};
k.kh = function() {
  return oA(this.nb);
};
k.Y = function(a, b) {
  return He(b) ? kc(this, w.h(b, 0), w.h(b, 1)) : Nb.j($b, this, b);
};
function cC(a) {
  var b = Lj.k(G([zB, a], 0)), c = Ks.g(b), d = qn.g(b), c = xB(c), d = xB(d), e = Pz(c), f = Pz(d), g = AB(d, c, b), b = ve([ql, Hl, fn, wn, Qp, Wp, zq, lr, Ls, $t, Bu], [$h(oh.h(f, 1)), 1, Gi, $h(oh.h(f, 0)), $h(oh.h(f, 0)), eB(g, e, hl.g(b), cu.g(b), wq.g(b)), b, Gi, c, Gi, d]), b = new GB(zq.g(b), Wp.g(b), Bu.g(b), Ls.g(b), lr.g(b), fn.g(b), $t.g(b), Hl.g(b), ql.g(b), wn.g(b), Qp.g(b), null, we.k(b, zq, G([Wp, Bu, Ls, lr, fn, $t, Hl, ql, wn, Qp], 0))), b = FB(b);
  a = Lj.k(G([MB, a], 0));
  var c = qn.g(a), c = xB(c), f = Pz(c), e = Ts.g(a), d = bm.g(a), g = Mp.g(a), h = Nm.g(a), l = f * e, f = dB(new n(null, 5, [Ns, $h(oh.h(f * e * d, Gi)), ar, $h(oh.h(l, Qj)), Tt, h, tl, g, pu, !0], null)), g = Mg.j(iB, e, d), h = Mg.j(jB, e, d), l = Mg.h(gB, e), e = Mg.h(hB, e), d = new n(null, 6, [Du, f, Jl, d, Mt, g, Wq, h, gm, l, Lm, e], null), d = new kB(Du.g(d), Ts.g(d), Jl.g(d), gm.g(d), Lm.g(d), Mt.g(d), Wq.g(d), null, we.k(d, Du, G([Ts, Jl, gm, Lm, Mt, Wq], 0)));
  a = ve([Dl, $l, En, Up, zq, Iq, Vq, $q, yr, dt, Qt, Bu], [Qj, Qj, Qj, Qj, a, Qj, Qj, Qj, d, Qj, Gi, c]);
  a = new aC(zq.g(a), Bu.g(a), yr.g(a), Iq.g(a), Dl.g(a), $q.g(a), Up.g(a), En.g(a), Vq.g(a), $l.g(a), dt.g(a), Qt.g(a), Fl.g(a), null, we.k(a, zq, G([Bu, yr, Iq, Dl, $q, Up, En, Vq, $l, dt, Qt, Fl], 0)));
  b = new n(null, 4, [eu, b, St, a, qt, HB(), xs, 0], null);
  return new bC(eu.g(b), St.g(b), qt.g(b), xs.g(b), null, we.k(b, eu, G([St, qt, xs], 0)));
}
function dC(a, b, c, d, e, f) {
  this.rc = a;
  this.value = b;
  this.transform = c;
  this.ac = d;
  this.o = e;
  this.l = f;
  this.B = 2229667594;
  this.K = 8192;
  4 < arguments.length ? (this.o = e, this.l = f) : this.l = this.o = null;
}
k = dC.prototype;
k.Oe = function() {
  return Q.j(this, Zm, this.rc);
};
k.N = function(a, b) {
  return hc.j(this, b, null);
};
k.P = function(a, b, c) {
  switch(b instanceof W ? b.ja : null) {
    case "encoder":
      return this.ac;
    case "transform":
      return this.transform;
    case "value":
      return this.value;
    case "init-value":
      return this.rc;
    default:
      return P.j(this.l, b, c);
  }
};
k.Lb = function() {
  return Iz(this.ac);
};
k.Wi = function() {
  return this.value;
};
k.U = function(a, b, c) {
  return kk(b, function() {
    return function(a) {
      return kk(b, qk, "", " ", "", c, a);
    };
  }(this), "#org.nfrac.comportex.core.SensoryInput{", ", ", "}", c, wg.h(new U(null, 4, 5, V, [new U(null, 2, 5, V, [vr, this.rc], null), new U(null, 2, 5, V, [Zm, this.value], null), new U(null, 2, 5, V, [Ml, this.transform], null), new U(null, 2, 5, V, [cm, this.ac], null)], null), this.l));
};
k.L = function() {
  return this.o;
};
k.ma = function() {
  return new dC(this.rc, this.value, this.transform, this.ac, this.o, this.l, this.A);
};
k.Z = function() {
  return 4 + J(this.l);
};
k.S = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Jf(this);
};
k.J = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && ui(this, b) : b) ? !0 : !1;
};
k.Pf = function(a, b) {
  return Tz(this.ac, b, this.value);
};
k.Sf = function() {
  return Qj;
};
k.Rf = function() {
  return Qj;
};
k.Tf = function(a, b) {
  return new U(null, 1, 5, V, [b], null);
};
k.Qf = function() {
  var a = this;
  return Q.j(this, Zm, function() {
    var b = a.value;
    return a.transform.g ? a.transform.g(b) : a.transform.call(null, b);
  }());
};
k.Ra = function(a, b) {
  return Ze(new Oj(null, new n(null, 4, [Ml, null, cm, null, Zm, null, vr, null], null), null), b) ? we.h(ge(Ah.h(Gi, this), this.o), b) : new dC(this.rc, this.value, this.transform, this.ac, this.o, Fg(we.h(this.l, b)), null);
};
k.za = function(a, b, c) {
  return q(X.h ? X.h(vr, b) : X.call(null, vr, b)) ? new dC(c, this.value, this.transform, this.ac, this.o, this.l, null) : q(X.h ? X.h(Zm, b) : X.call(null, Zm, b)) ? new dC(this.rc, c, this.transform, this.ac, this.o, this.l, null) : q(X.h ? X.h(Ml, b) : X.call(null, Ml, b)) ? new dC(this.rc, this.value, c, this.ac, this.o, this.l, null) : q(X.h ? X.h(cm, b) : X.call(null, cm, b)) ? new dC(this.rc, this.value, this.transform, c, this.o, this.l, null) : new dC(this.rc, this.value, this.transform, 
  this.ac, this.o, Q.j(this.l, b, c), null);
};
k.W = function() {
  return A(wg.h(new U(null, 4, 5, V, [new U(null, 2, 5, V, [vr, this.rc], null), new U(null, 2, 5, V, [Zm, this.value], null), new U(null, 2, 5, V, [Ml, this.transform], null), new U(null, 2, 5, V, [cm, this.ac], null)], null), this.l));
};
k.M = function(a, b) {
  return new dC(this.rc, this.value, this.transform, this.ac, b, this.l, this.A);
};
k.Y = function(a, b) {
  return He(b) ? kc(this, w.h(b, 0), w.h(b, 1)) : Nb.j($b, this, b);
};
function eC(a, b, c) {
  return new dC(a, a, b, c);
}
function fC(a, b) {
  var c = kh.h(Qz, a), c = xg.h(0, dk.h(jf, c));
  return S.h(JB, kh.j(b, a, c));
}
function gC(a) {
  var b = kh.h(Lg.h(Pz, EA), a), b = xg.h(0, dk.h(jf, b));
  return S.h(JB, kh.j(BA, a, b));
}
function hC(a, b, c) {
  var d = O.j(c, 0, null);
  c = O.j(c, 1, null);
  return a + b * d + c;
}
function iC(a, b) {
  return fC(Zs.g(a), b);
}
function jC(a, b, c, d) {
  this.sb = a;
  this.zc = b;
  this.o = c;
  this.l = d;
  this.B = 2229667594;
  this.K = 8192;
  2 < arguments.length ? (this.o = c, this.l = d) : this.l = this.o = null;
}
k = jC.prototype;
k.Oe = function() {
  return Gh.j(Gh.j(this, new U(null, 1, 5, V, [Zs], null), function() {
    return function(a) {
      return kh.h(LA, a);
    };
  }(this)), new U(null, 1, 5, V, [mq], null), LA);
};
k.N = function(a, b) {
  return hc.j(this, b, null);
};
k.P = function(a, b, c) {
  switch(b instanceof W ? b.ja : null) {
    case "subs":
      return this.zc;
    case "region":
      return this.sb;
    default:
      return P.j(this.l, b, c);
  }
};
k.Lb = function() {
  return xB(te.h(Oz(this.sb), Xz(this.sb)));
};
k.U = function(a, b, c) {
  return kk(b, function() {
    return function(a) {
      return kk(b, qk, "", " ", "", c, a);
    };
  }(this), "#org.nfrac.comportex.core.RegionTree{", ", ", "}", c, wg.h(new U(null, 2, 5, V, [new U(null, 2, 5, V, [mq, this.sb], null), new U(null, 2, 5, V, [Zs, this.zc], null)], null), this.l));
};
k.L = function() {
  return this.o;
};
k.ma = function() {
  return new jC(this.sb, this.zc, this.o, this.l, this.A);
};
k.Z = function() {
  return 2 + J(this.l);
};
k.S = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Jf(this);
};
k.J = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && ui(this, b) : b) ? !0 : !1;
};
k.ah = function(a, b) {
  for (var c = 0, d = 0;;) {
    if (c < J(this.zc)) {
      var e = O.h(this.zc, c), f = Qz(e);
      if (d <= b && b <= d + f + -1) {
        return new U(null, 2, 5, V, [c, CA(e, b - d)], null);
      }
      c += 1;
      d += pf(f);
    } else {
      return null;
    }
  }
};
k.Pf = function(a, b) {
  var c = Xz(this.sb);
  return Ah.h(Qj, Bh.h(Mg.j(hC, b, c), Yz(this.sb)));
};
k.Sf = function(a, b) {
  var c = Xz(this.sb);
  return Ah.h(Qj, Bh.h(Mg.j(hC, b, c), Zz(this.sb)));
};
k.Rf = function() {
  return Qj;
};
k.Tf = function(a, b) {
  var c = Xz(this.sb);
  return new U(null, 2, 5, V, [Af(b, c), Bf(b, c)], null);
};
k.Qf = function(a, b) {
  var c = kh.h(function() {
    return function(a) {
      return JA.h(a, b);
    };
  }(this), this.zc), d = $z.Q(this.sb, fC(c, HA), fC(c, IA), gC(c), b);
  return Q.k(this, mq, d, G([Zs, c], 0));
};
k.Pe = function() {
  return KA(this.sb);
};
k.Ra = function(a, b) {
  return Ze(new Oj(null, new n(null, 2, [mq, null, Zs, null], null), null), b) ? we.h(ge(Ah.h(Gi, this), this.o), b) : new jC(this.sb, this.zc, this.o, Fg(we.h(this.l, b)), null);
};
k.za = function(a, b, c) {
  return q(X.h ? X.h(mq, b) : X.call(null, mq, b)) ? new jC(c, this.zc, this.o, this.l, null) : q(X.h ? X.h(Zs, b) : X.call(null, Zs, b)) ? new jC(this.sb, c, this.o, this.l, null) : new jC(this.sb, this.zc, this.o, Q.j(this.l, b, c), null);
};
k.W = function() {
  return A(wg.h(new U(null, 2, 5, V, [new U(null, 2, 5, V, [mq, this.sb], null), new U(null, 2, 5, V, [Zs, this.zc], null)], null), this.l));
};
k.M = function(a, b) {
  return new jC(this.sb, this.zc, b, this.l, this.A);
};
k.Y = function(a, b) {
  return He(b) ? kc(this, w.h(b, 0), w.h(b, 1)) : Nb.j($b, this, b);
};
function kC(a, b, c, d) {
  return je(lh.h(c + 1, rh(function(b) {
    b = new U(null, 1, 5, V, [b], null);
    var c = S.h(yB, kh.h(Oz, b)), g = S.h(yB, kh.h(FA, b)), c = Q.k(d, Ks, c, G([Tp, S.h(kf, g)], 0)), c = a.g ? a.g(c) : a.call(null, c);
    return new jC(c, b);
  }, b)));
}
function lC(a) {
  return $h(Of(wh.h(mq, yh(Zs, Zs, a))));
}
function mC(a) {
  return kh.h(mq, lC(a));
}
function nC(a) {
  return xh.h(mq, yh(Zs, Zs, a));
}
function oC(a) {
  return zz(function(a, c) {
    return Q.j(a, Zs, c);
  }, a);
}
function pC(a, b, c) {
  for (a = oC(a);;) {
    var d = mq.g(Az(a));
    if (q(d)) {
      var e = d;
      if (Fd.h(b, qt.g(e))) {
        return Dz(Fz(a, function() {
          return function(a) {
            return Gh.j(a, new U(null, 1, 5, V, [mq], null), c);
          };
        }(a, e, d)));
      }
      if (Hz(a)) {
        return Wt;
      }
      a = Gz(a);
    } else {
      return null;
    }
  }
}
var qC = function() {
  function a(a, b) {
    var c = b.g ? b.g(a) : b.call(null, a), g = lA(c), c = rA(c), c = Ah.h(Qj, kh.h(C, c)), h = KB.h(c, g), g = Lj.k(G([Xj(c, oh.g(ft)), Xj(g, oh.g(ir)), Xj(h, oh.g(Eq))], 0));
    return Q.k(Lj.k(G([new n(null, 3, [ir, 0, ft, 0, Eq, 0], null), ck(Ei(g))], 0)), kn, KA(a), G([dq, Pz(Iz(a))], 0));
  }
  function b(a) {
    return c.h(a, St);
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
function rC(a, b) {
  var c = eu.g(a), d = Wp.g(c);
  return zg(Nb.j(function(a, b) {
    return function(c, d) {
      var l = tA(b, d);
      return Nb.j(function() {
        return function(a, b) {
          return Bg.j(a, b, P.j(a, b, 0) + 1);
        };
      }(l, a, b), c, l);
    };
  }(c, d), bd(Gi), b));
}
;var sC, tC, uC, vC;
function wC(a, b) {
  if (a ? a.Ae : a) {
    return a.Ae(a, b);
  }
  var c;
  c = wC[m(null == a ? null : a)];
  if (!c && (c = wC._, !c)) {
    throw r("ReadPort.take!", a);
  }
  return c.call(null, a, b);
}
function xC(a, b, c) {
  if (a ? a.be : a) {
    return a.be(a, b, c);
  }
  var d;
  d = xC[m(null == a ? null : a)];
  if (!d && (d = xC._, !d)) {
    throw r("WritePort.put!", a);
  }
  return d.call(null, a, b, c);
}
function yC(a) {
  if (a ? a.Gd : a) {
    return a.Gd(a);
  }
  var b;
  b = yC[m(null == a ? null : a)];
  if (!b && (b = yC._, !b)) {
    throw r("Channel.close!", a);
  }
  return b.call(null, a);
}
function zC(a) {
  if (a ? a.Uc : a) {
    return a.Uc(a);
  }
  var b;
  b = zC[m(null == a ? null : a)];
  if (!b && (b = zC._, !b)) {
    throw r("Handler.active?", a);
  }
  return b.call(null, a);
}
function AC(a) {
  if (a ? a.Xb : a) {
    return a.Xb(a);
  }
  var b;
  b = AC[m(null == a ? null : a)];
  if (!b && (b = AC._, !b)) {
    throw r("Handler.commit", a);
  }
  return b.call(null, a);
}
function BC(a) {
  if (a ? a.of : a) {
    return a.of();
  }
  var b;
  b = BC[m(null == a ? null : a)];
  if (!b && (b = BC._, !b)) {
    throw r("Buffer.full?", a);
  }
  return b.call(null, a);
}
;function CC(a, b, c, d, e) {
  for (var f = 0;;) {
    if (f < e) {
      c[d + f] = a[b + f], f += 1;
    } else {
      break;
    }
  }
}
function DC(a, b, c, d) {
  this.head = a;
  this.la = b;
  this.length = c;
  this.p = d;
}
DC.prototype.pop = function() {
  if (0 === this.length) {
    return null;
  }
  var a = this.p[this.la];
  this.p[this.la] = null;
  this.la = (this.la + 1) % this.p.length;
  this.length -= 1;
  return a;
};
DC.prototype.unshift = function(a) {
  this.p[this.head] = a;
  this.head = (this.head + 1) % this.p.length;
  this.length += 1;
  return null;
};
function EC(a, b) {
  a.length + 1 === a.p.length && a.resize();
  a.unshift(b);
}
DC.prototype.resize = function() {
  var a = Array(2 * this.p.length);
  return this.la < this.head ? (CC(this.p, this.la, a, 0, this.length), this.la = 0, this.head = this.length, this.p = a) : this.la > this.head ? (CC(this.p, this.la, a, 0, this.p.length - this.la), CC(this.p, 0, a, this.p.length - this.la, this.head), this.la = 0, this.head = this.length, this.p = a) : this.la === this.head ? (this.head = this.la = 0, this.p = a) : null;
};
function FC(a, b) {
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
function GC(a) {
  if (!(0 < a)) {
    throw Error("Assert failed: Can't create a ring buffer of size 0\n" + u.g(Ug.k(G([Pf(new Hd(null, "\x3e", "\x3e", 1085014381, null), new Hd(null, "n", "n", -2092305744, null), 0)], 0))));
  }
  return new DC(0, 0, 0, Array(a));
}
function HC(a, b) {
  this.Ab = a;
  this.xd = b;
  this.K = 0;
  this.B = 2;
}
HC.prototype.Z = function() {
  return this.Ab.length;
};
HC.prototype.of = function() {
  return this.Ab.length === this.xd;
};
HC.prototype.Wh = function() {
  return this.Ab.pop();
};
function PF(a, b) {
  if (!Hb(BC(a))) {
    throw Error("Assert failed: Can't add to a full buffer\n" + u.g(Ug.k(G([Pf(new Hd(null, "not", "not", 1044554643, null), Pf(new Hd("impl", "full?", "impl/full?", -97582774, null), new Hd(null, "this", "this", 1028897902, null)))], 0))));
  }
  a.Ab.unshift(b);
}
;var QF = null, RF = GC(32), SF = !1, TF = !1;
function UF() {
  SF = !0;
  TF = !1;
  for (var a = 0;;) {
    var b = RF.pop();
    if (null != b && (b.w ? b.w() : b.call(null), 1024 > a)) {
      a += 1;
      continue;
    }
    break;
  }
  SF = !1;
  return 0 < RF.length ? VF.w ? VF.w() : VF.call(null) : null;
}
"undefined" !== typeof MessageChannel && (QF = new MessageChannel, QF.port1.onmessage = function() {
  return UF();
});
function VF() {
  var a = TF;
  if (q(a ? SF : a)) {
    return null;
  }
  TF = !0;
  return "undefined" !== typeof MessageChannel ? QF.port2.postMessage(0) : "undefined" !== typeof setImmediate ? setImmediate(UF) : setTimeout(UF, 0);
}
function WF(a) {
  EC(RF, a);
  VF();
}
function XF(a, b) {
  setTimeout(a, b);
}
;var YF, $F = function ZF(b) {
  "undefined" === typeof YF && (YF = function(b, d, e) {
    this.I = b;
    this.Bh = d;
    this.ui = e;
    this.K = 0;
    this.B = 425984;
  }, YF.wb = !0, YF.vb = "cljs.core.async.impl.channels/t34211", YF.Bb = function(b, d) {
    return Wc(d, "cljs.core.async.impl.channels/t34211");
  }, YF.prototype.Dd = function() {
    return this.I;
  }, YF.prototype.L = function() {
    return this.ui;
  }, YF.prototype.M = function(b, d) {
    return new YF(this.I, this.Bh, d);
  });
  return new YF(b, ZF, null);
};
function aG(a, b) {
  this.qc = a;
  this.I = b;
}
function bG(a) {
  return zC(a.qc);
}
function cG(a, b, c, d, e, f) {
  this.oe = a;
  this.Fe = b;
  this.Se = c;
  this.Ee = d;
  this.Ab = e;
  this.closed = f;
}
cG.prototype.Gd = function() {
  if (!this.closed) {
    for (this.closed = !0;;) {
      var a = this.oe.pop();
      if (null != a) {
        if (a.Uc(null)) {
          var b = a.Xb(null);
          WF(function(a) {
            return function() {
              return a.g ? a.g(null) : a.call(null, null);
            };
          }(b, a, this));
        }
      } else {
        break;
      }
    }
  }
  return null;
};
cG.prototype.Ae = function(a, b) {
  if (b.Uc(null)) {
    if (null != this.Ab && 0 < J(this.Ab)) {
      var c = b.Xb(null);
      return $F(this.Ab.Wh());
    }
    for (;;) {
      var d = this.Se.pop();
      if (null != d) {
        var e = d.qc, f = d.I;
        if (e.Uc(null)) {
          var g = e.Xb(null), c = b.Xb(null);
          WF(function(a) {
            return function() {
              return a.g ? a.g(!0) : a.call(null, !0);
            };
          }(g, c, e, f, d, this));
          return $F(f);
        }
      } else {
        if (this.closed) {
          return c = b.Xb(null), $F(null);
        }
        64 < this.Fe ? (this.Fe = 0, FC(this.oe, zC)) : this.Fe += 1;
        if (!(1024 > this.oe.length)) {
          throw Error("Assert failed: " + u.g("No more than " + u.g(1024) + " pending takes are allowed on a single channel.") + "\n" + u.g(Ug.k(G([Pf(new Hd(null, "\x3c", "\x3c", 993667236, null), Pf(new Hd(null, ".-length", ".-length", -280799999, null), new Hd(null, "takes", "takes", 298247964, null)), new Hd("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", 1508600732, null))], 0))));
        }
        EC(this.oe, b);
        return null;
      }
    }
  } else {
    return null;
  }
};
cG.prototype.be = function(a, b, c) {
  if (null == b) {
    throw Error("Assert failed: Can't put nil in on a channel\n" + u.g(Ug.k(G([Pf(new Hd(null, "not", "not", 1044554643, null), Pf(new Hd(null, "nil?", "nil?", 1612038930, null), new Hd(null, "val", "val", 1769233139, null)))], 0))));
  }
  if ((a = this.closed) || !c.Uc(null)) {
    return $F(!a);
  }
  for (;;) {
    var d = this.oe.pop();
    if (null != d) {
      if (d.Uc(null)) {
        var e = d.Xb(null);
        c = c.Xb(null);
        WF(function(a) {
          return function() {
            return a.g ? a.g(b) : a.call(null, b);
          };
        }(e, c, d, a, this));
        return $F(!0);
      }
    } else {
      if (null == this.Ab || this.Ab.of()) {
        64 < this.Ee ? (this.Ee = 0, FC(this.Se, bG)) : this.Ee += 1;
        if (!(1024 > this.Se.length)) {
          throw Error("Assert failed: " + u.g("No more than " + u.g(1024) + " pending puts are allowed on a single channel. Consider using a windowed buffer.") + "\n" + u.g(Ug.k(G([Pf(new Hd(null, "\x3c", "\x3c", 993667236, null), Pf(new Hd(null, ".-length", ".-length", -280799999, null), new Hd(null, "puts", "puts", -1883877054, null)), new Hd("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", 1508600732, null))], 0))));
        }
        EC(this.Se, new aG(c, b));
        return null;
      }
      c = c.Xb(null);
      PF(this.Ab, b);
      return $F(!0);
    }
  }
};
function dG(a) {
  return new cG(GC(32), 0, GC(32), 0, a, !1);
}
;var eG, gG = function fG(b) {
  "undefined" === typeof eG && (eG = function(b, d, e) {
    this.f = b;
    this.Hf = d;
    this.ti = e;
    this.K = 0;
    this.B = 393216;
  }, eG.wb = !0, eG.vb = "cljs.core.async.impl.ioc-helpers/t34075", eG.Bb = function(b, d) {
    return Wc(d, "cljs.core.async.impl.ioc-helpers/t34075");
  }, eG.prototype.Uc = function() {
    return!0;
  }, eG.prototype.Xb = function() {
    return this.f;
  }, eG.prototype.L = function() {
    return this.ti;
  }, eG.prototype.M = function(b, d) {
    return new eG(this.f, this.Hf, d);
  });
  return new eG(b, fG, null);
};
function hG(a) {
  try {
    return a[0].call(null, a);
  } catch (b) {
    throw b instanceof Object && a[6].Gd(null), b;
  }
}
function iG(a, b, c) {
  c = c.Ae(null, gG(function(c) {
    a[2] = c;
    a[1] = b;
    return hG(a);
  }));
  return q(c) ? (a[2] = I.g ? I.g(c) : I.call(null, c), a[1] = b, Z) : null;
}
function jG(a, b, c, d) {
  c = c.be(null, d, gG(function(c) {
    a[2] = c;
    a[1] = b;
    return hG(a);
  }));
  return q(c) ? (a[2] = I.g ? I.g(c) : I.call(null, c), a[1] = b, Z) : null;
}
function kG(a, b) {
  var c = a[6];
  null != b && c.be(null, b, gG(function() {
    return function() {
      return null;
    };
  }(c)));
  c.Gd(null);
  return c;
}
function lG(a, b, c, d, e, f, g) {
  this.kc = a;
  this.lc = b;
  this.pc = c;
  this.nc = d;
  this.wc = e;
  this.o = f;
  this.l = g;
  this.B = 2229667594;
  this.K = 8192;
  5 < arguments.length ? (this.o = f, this.l = g) : this.l = this.o = null;
}
k = lG.prototype;
k.N = function(a, b) {
  return hc.j(this, b, null);
};
k.P = function(a, b, c) {
  switch(b instanceof W ? b.ja : null) {
    case "prev":
      return this.wc;
    case "continue-block":
      return this.nc;
    case "finally-block":
      return this.pc;
    case "catch-exception":
      return this.lc;
    case "catch-block":
      return this.kc;
    default:
      return P.j(this.l, b, c);
  }
};
k.U = function(a, b, c) {
  return kk(b, function() {
    return function(a) {
      return kk(b, qk, "", " ", "", c, a);
    };
  }(this), "#cljs.core.async.impl.ioc-helpers.ExceptionFrame{", ", ", "}", c, wg.h(new U(null, 5, 5, V, [new U(null, 2, 5, V, [Jn, this.kc], null), new U(null, 2, 5, V, [tr, this.lc], null), new U(null, 2, 5, V, [Im, this.pc], null), new U(null, 2, 5, V, [ss, this.nc], null), new U(null, 2, 5, V, [Gr, this.wc], null)], null), this.l));
};
k.L = function() {
  return this.o;
};
k.ma = function() {
  return new lG(this.kc, this.lc, this.pc, this.nc, this.wc, this.o, this.l, this.A);
};
k.Z = function() {
  return 5 + J(this.l);
};
k.S = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Jf(this);
};
k.J = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && ui(this, b) : b) ? !0 : !1;
};
k.Ra = function(a, b) {
  return Ze(new Oj(null, new n(null, 5, [Im, null, Jn, null, tr, null, Gr, null, ss, null], null), null), b) ? we.h(ge(Ah.h(Gi, this), this.o), b) : new lG(this.kc, this.lc, this.pc, this.nc, this.wc, this.o, Fg(we.h(this.l, b)), null);
};
k.za = function(a, b, c) {
  return q(X.h ? X.h(Jn, b) : X.call(null, Jn, b)) ? new lG(c, this.lc, this.pc, this.nc, this.wc, this.o, this.l, null) : q(X.h ? X.h(tr, b) : X.call(null, tr, b)) ? new lG(this.kc, c, this.pc, this.nc, this.wc, this.o, this.l, null) : q(X.h ? X.h(Im, b) : X.call(null, Im, b)) ? new lG(this.kc, this.lc, c, this.nc, this.wc, this.o, this.l, null) : q(X.h ? X.h(ss, b) : X.call(null, ss, b)) ? new lG(this.kc, this.lc, this.pc, c, this.wc, this.o, this.l, null) : q(X.h ? X.h(Gr, b) : X.call(null, Gr, 
  b)) ? new lG(this.kc, this.lc, this.pc, this.nc, c, this.o, this.l, null) : new lG(this.kc, this.lc, this.pc, this.nc, this.wc, this.o, Q.j(this.l, b, c), null);
};
k.W = function() {
  return A(wg.h(new U(null, 5, 5, V, [new U(null, 2, 5, V, [Jn, this.kc], null), new U(null, 2, 5, V, [tr, this.lc], null), new U(null, 2, 5, V, [Im, this.pc], null), new U(null, 2, 5, V, [ss, this.nc], null), new U(null, 2, 5, V, [Gr, this.wc], null)], null), this.l));
};
k.M = function(a, b) {
  return new lG(this.kc, this.lc, this.pc, this.nc, this.wc, b, this.l, this.A);
};
k.Y = function(a, b) {
  return He(b) ? kc(this, w.h(b, 0), w.h(b, 1)) : Nb.j($b, this, b);
};
function mG(a) {
  for (;;) {
    var b = a[4], c = Jn.g(b), d = tr.g(b), e = a[5];
    if (q(function() {
      var a = e;
      return q(a) ? Hb(b) : a;
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
      a[4] = Q.k(b, Jn, null, G([tr, null], 0));
      break;
    }
    if (q(function() {
      var a = e;
      return q(a) ? Hb(c) && Hb(Im.g(b)) : a;
    }())) {
      a[4] = Gr.g(b);
    } else {
      if (q(function() {
        var a = e;
        return q(a) ? (a = Hb(c)) ? Im.g(b) : a : a;
      }())) {
        a[1] = Im.g(b);
        a[4] = Q.j(b, Im, null);
        break;
      }
      if (q(function() {
        var a = Hb(e);
        return a ? Im.g(b) : a;
      }())) {
        a[1] = Im.g(b);
        a[4] = Q.j(b, Im, null);
        break;
      }
      if (Hb(e) && Hb(Im.g(b))) {
        a[1] = ss.g(b);
        a[4] = Gr.g(b);
        break;
      }
      throw Error("Assert failed: No matching clause\n" + u.g(Ug.k(G([!1], 0))));
    }
  }
}
;var nG = function() {
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
  c.w = b;
  c.g = a;
  return c;
}();
function oG(a, b, c) {
  this.key = a;
  this.I = b;
  this.forward = c;
  this.K = 0;
  this.B = 2155872256;
}
oG.prototype.U = function(a, b, c) {
  return kk(b, qk, "[", " ", "]", c, this);
};
oG.prototype.W = function() {
  return $b($b(Md, this.I), this.key);
};
var pG = function() {
  function a(a, b, c) {
    c = Array(c + 1);
    for (var g = 0;;) {
      if (g < c.length) {
        c[g] = null, g += 1;
      } else {
        break;
      }
    }
    return new oG(a, b, c);
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
}(), qG = function() {
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
    return c.v(a, b, f, null);
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
  c.v = a;
  return c;
}();
function rG(a, b) {
  this.td = a;
  this.dc = b;
  this.K = 0;
  this.B = 2155872256;
}
rG.prototype.U = function(a, b, c) {
  return kk(b, function() {
    return function(a) {
      return kk(b, qk, "", " ", "", c, a);
    };
  }(this), "{", ", ", "}", c, this);
};
rG.prototype.W = function() {
  return function(a) {
    return function c(d) {
      return new Tf(null, function() {
        return function() {
          return null == d ? null : ee(new U(null, 2, 5, V, [d.key, d.I], null), c(d.forward[0]));
        };
      }(a), null, null);
    };
  }(this)(this.td.forward[0]);
};
rG.prototype.put = function(a, b) {
  var c = Array(15), d = qG.v(this.td, a, this.dc, c).forward[0];
  if (null != d && d.key === a) {
    return d.I = b;
  }
  d = nG.w();
  if (d > this.dc) {
    for (var e = this.dc + 1;;) {
      if (e <= d + 1) {
        c[e] = this.td, e += 1;
      } else {
        break;
      }
    }
    this.dc = d;
  }
  for (d = pG.j(a, b, Array(d));;) {
    return 0 <= this.dc ? (c = c[0].forward, d.forward[0] = c[0], c[0] = d) : null;
  }
};
rG.prototype.remove = function(a) {
  var b = Array(15), c = qG.v(this.td, a, this.dc, b).forward[0];
  if (null != c && c.key === a) {
    for (a = 0;;) {
      if (a <= this.dc) {
        var d = b[a].forward;
        d[a] === c && (d[a] = c.forward[a]);
        a += 1;
      } else {
        break;
      }
    }
    for (;;) {
      if (0 < this.dc && null == this.td.forward[this.dc]) {
        this.dc -= 1;
      } else {
        return null;
      }
    }
  } else {
    return null;
  }
};
function sG(a) {
  for (var b = tG, c = b.td, d = b.dc;;) {
    if (0 > d) {
      return c === b.td ? null : c;
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
var tG = new rG(pG.g(0), 0);
function uG(a) {
  var b = (new Date).valueOf() + a, c = sG(b), d = q(q(c) ? c.key < b + 10 : c) ? c.I : null;
  if (q(d)) {
    return d;
  }
  var e = dG(null);
  tG.put(b, e);
  XF(function(a, b, c) {
    return function() {
      tG.remove(c);
      return a.Gd(null);
    };
  }(e, d, b, c), a);
  return e;
}
;var wG = function vG(b) {
  "undefined" === typeof sC && (sC = function(b, d, e) {
    this.f = b;
    this.Hf = d;
    this.qi = e;
    this.K = 0;
    this.B = 393216;
  }, sC.wb = !0, sC.vb = "cljs.core.async/t31153", sC.Bb = function(b, d) {
    return Wc(d, "cljs.core.async/t31153");
  }, sC.prototype.Uc = function() {
    return!0;
  }, sC.prototype.Xb = function() {
    return this.f;
  }, sC.prototype.L = function() {
    return this.qi;
  }, sC.prototype.M = function(b, d) {
    return new sC(this.f, this.Hf, d);
  });
  return new sC(b, vG, null);
}, xG = function() {
  function a(a) {
    a = Fd.h(a, 0) ? null : a;
    a = "number" === typeof a ? new HC(GC(a), a) : a;
    return dG(a);
  }
  function b() {
    return c.g(null);
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
  c.w = b;
  c.g = a;
  return c;
}(), yG = function() {
  function a(a, b, c) {
    a = wC(a, wG(b));
    if (q(a)) {
      var g = I.g ? I.g(a) : I.call(null, a);
      q(c) ? b.g ? b.g(g) : b.call(null, g) : WF(function(a) {
        return function() {
          return b.g ? b.g(a) : b.call(null, a);
        };
      }(g, a));
    }
    return null;
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
}(), zG = wG(function() {
  return null;
}), AG = function() {
  function a(a, b, c, d) {
    a = xC(a, b, wG(c));
    return q(a) ? (b = I.g ? I.g(a) : I.call(null, a), q(d) ? c.g ? c.g(b) : c.call(null, b) : WF(function(a) {
      return function() {
        return c.g ? c.g(a) : c.call(null, a);
      };
    }(b, a, a)), b) : !0;
  }
  function b(a, b, c) {
    return d.v(a, b, c, !0);
  }
  function c(a, b) {
    var c = xC(a, b, zG);
    return q(c) ? I.g ? I.g(c) : I.call(null, c) : !0;
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
  d.v = a;
  return d;
}(), CG = function BG(b, c) {
  "undefined" === typeof tC && (tC = function(b, c, f, g) {
    this.ch = b;
    this.f = c;
    this.Le = f;
    this.Me = g;
    this.K = 0;
    this.B = 393216;
  }, tC.wb = !0, tC.vb = "cljs.core.async/t31239", tC.Bb = function(b, c) {
    return Wc(c, "cljs.core.async/t31239");
  }, tC.prototype.be = function(b, c, f) {
    return xC(this.ch, c, f);
  }, tC.prototype.Ae = function(b, c) {
    var f = this, g = this, h = wC(f.ch, function() {
      "undefined" === typeof uC && (uC = function(b, c, d, e, f, g, h) {
        this.Gf = b;
        this.zh = c;
        this.Me = d;
        this.ch = e;
        this.f = f;
        this.Le = g;
        this.ri = h;
        this.K = 0;
        this.B = 393216;
      }, uC.wb = !0, uC.vb = "cljs.core.async/t31242", uC.Bb = function() {
        return function(b, c) {
          return Wc(c, "cljs.core.async/t31242");
        };
      }(g), uC.prototype.Uc = function() {
        return function() {
          return zC(this.Gf);
        };
      }(g), uC.prototype.Xb = function(b) {
        return function() {
          var c = this;
          return function(b) {
            return function(d) {
              d = null == d ? null : c.f.g ? c.f.g(d) : c.f.call(null, d);
              return b.g ? b.g(d) : b.call(null, d);
            };
          }(AC(c.Gf), this, b);
        };
      }(g), uC.prototype.L = function() {
        return function() {
          return this.ri;
        };
      }(g), uC.prototype.M = function() {
        return function(b, c) {
          return new uC(this.Gf, this.zh, this.Me, this.ch, this.f, this.Le, c);
        };
      }(g));
      return new uC(c, g, f.Me, f.ch, f.f, f.Le, null);
    }());
    return q(q(h) ? null != (I.g ? I.g(h) : I.call(null, h)) : h) ? $F(function() {
      var b = I.g ? I.g(h) : I.call(null, h);
      return f.f.g ? f.f.g(b) : f.f.call(null, b);
    }()) : h;
  }, tC.prototype.Gd = function() {
    return yC(this.ch);
  }, tC.prototype.L = function() {
    return this.Me;
  }, tC.prototype.M = function(b, c) {
    return new tC(this.ch, this.f, this.Le, c);
  });
  return new tC(c, b, BG, null);
}, DG = function() {
  function a(a, b, c) {
    var g = xG.g(1);
    WF(function(g) {
      return function() {
        var l = function() {
          return function(a) {
            return function() {
              function b(c) {
                for (;;) {
                  var d;
                  a: {
                    try {
                      for (;;) {
                        var e = a(c);
                        if (!X(e, Z)) {
                          d = e;
                          break a;
                        }
                      }
                    } catch (f) {
                      if (f instanceof Object) {
                        c[5] = f;
                        mG(c);
                        d = Z;
                        break a;
                      }
                      throw f;
                    }
                    d = void 0;
                  }
                  if (!X(d, Z)) {
                    return d;
                  }
                }
              }
              function c() {
                var a = [null, null, null, null, null, null, null, null];
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
              d.w = c;
              d.g = b;
              return d;
            }();
          }(function() {
            return function(g) {
              var h = g[1];
              return 7 === h ? (h = g, h[2] = g[2], h[1] = 3, Z) : 1 === h ? (g[2] = null, g[1] = 2, Z) : 4 === h ? (h = g[7], h = g[2], g[7] = h, g[1] = q(null == h) ? 5 : 6, Z) : 13 === h ? (g[2] = null, g[1] = 14, Z) : 6 === h ? (h = g[7], jG(g, 11, b, h)) : 3 === h ? (h = g[2], kG(g, h)) : 12 === h ? (g[2] = null, g[1] = 2, Z) : 2 === h ? iG(g, 4, a) : 11 === h ? (h = g[2], g[1] = q(h) ? 12 : 13, Z) : 9 === h ? (g[2] = null, g[1] = 10, Z) : 5 === h ? (g[1] = q(c) ? 8 : 9, Z) : 14 === h || 10 === 
              h ? (h = g[2], g[2] = h, g[1] = 7, Z) : 8 === h ? (h = yC(b), g[2] = h, g[1] = 10, Z) : null;
            };
          }(g), g);
        }(), p = function() {
          var a = l.w ? l.w() : l.call(null);
          a[6] = g;
          return a;
        }();
        return hG(p);
      };
    }(g));
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
}();
function EG(a, b, c) {
  if (a ? a.zg : a) {
    return a.zg(a, b, c);
  }
  var d;
  d = EG[m(null == a ? null : a)];
  if (!d && (d = EG._, !d)) {
    throw r("Mult.tap*", a);
  }
  return d.call(null, a, b, c);
}
var FG = function() {
  function a(a, b, c) {
    EG(a, b, c);
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
}(), GG = function() {
  function a(a, b, c) {
    b = $h(b);
    c = xG.g(c);
    var g = J(b), h = sg.g(g), l = xG.g(1), p = Sg.g ? Sg.g(null) : Sg.call(null, null), s = Bh.h(function(a, b, c, d, e, f) {
      return function(g) {
        return function(a, b, c, d, e, f) {
          return function(a) {
            d[g] = a;
            return 0 === Vg.h(f, mf) ? AG.h(e, d.slice(0)) : null;
          };
        }(a, b, c, d, e, f);
      };
    }(b, c, g, h, l, p), bk.g(g)), t = xG.g(1);
    WF(function(b, c, e, f, g, h, l, p) {
      return function() {
        var s = function() {
          return function(a) {
            return function() {
              function b(c) {
                for (;;) {
                  var d;
                  a: {
                    try {
                      for (;;) {
                        var e = a(c);
                        if (!X(e, Z)) {
                          d = e;
                          break a;
                        }
                      }
                    } catch (f) {
                      if (f instanceof Object) {
                        c[5] = f;
                        mG(c);
                        d = Z;
                        break a;
                      }
                      throw f;
                    }
                    d = void 0;
                  }
                  if (!X(d, Z)) {
                    return d;
                  }
                }
              }
              function c() {
                var a = [null, null, null, null, null, null, null, null, null, null, null, null, null, null];
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
              d.w = c;
              d.g = b;
              return d;
            }();
          }(function(b, c, e, f, g, h, l, p) {
            return function(b) {
              var g = b[1];
              if (7 === g) {
                return b[2] = null, b[1] = 8, Z;
              }
              if (1 === g) {
                return b[2] = null, b[1] = 2, Z;
              }
              if (4 === g) {
                var s = b[7], g = s < f;
                b[1] = q(g) ? 6 : 7;
                return Z;
              }
              if (15 === g) {
                return g = b[2], b[2] = g, b[1] = 3, Z;
              }
              if (13 === g) {
                return g = yC(e), b[2] = g, b[1] = 15, Z;
              }
              if (6 === g) {
                return b[2] = null, b[1] = 11, Z;
              }
              if (3 === g) {
                return g = b[2], kG(b, g);
              }
              if (12 === g) {
                var g = b[8], g = b[2], t = Hg(Gb, g);
                b[8] = g;
                b[1] = q(t) ? 13 : 14;
                return Z;
              }
              return 2 === g ? (g = Tg.h ? Tg.h(l, f) : Tg.call(null, l, f), s = 0, b[7] = s, b[9] = g, b[2] = null, b[1] = 4, Z) : 11 === g ? (s = b[7], b[4] = new lG(10, Object, null, 9, b[4]), g = function() {
                var a = s;
                return c.g ? c.g(a) : c.call(null, a);
              }(), t = function() {
                var a = s;
                return p.g ? p.g(a) : p.call(null, a);
              }(), g = yG.h(g, t), b[2] = g, mG(b), Z) : 9 === g ? (s = b[7], g = b[2], b[7] = s + 1, b[10] = g, b[2] = null, b[1] = 4, Z) : 5 === g ? (b[11] = b[2], iG(b, 12, h)) : 14 === g ? (g = b[8], g = S.h(a, g), jG(b, 16, e, g)) : 16 === g ? (b[12] = b[2], b[2] = null, b[1] = 2, Z) : 10 === g ? (t = b[2], g = Vg.h(l, mf), b[13] = t, b[2] = g, mG(b), Z) : 8 === g ? (g = b[2], b[2] = g, b[1] = 5, Z) : null;
            };
          }(b, c, e, f, g, h, l, p), b, c, e, f, g, h, l, p);
        }(), t = function() {
          var a = s.w ? s.w() : s.call(null);
          a[6] = b;
          return a;
        }();
        return hG(t);
      };
    }(t, b, c, g, h, l, p, s));
    return c;
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
}();
function HG(a, b) {
  var c = Array.prototype.slice.call(arguments), d = c.shift();
  if ("undefined" == typeof d) {
    throw Error("[goog.string.format] Template required");
  }
  return d.replace(/%([0\-\ \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(a, b, d, h, l, p, s, t) {
    if ("%" == p) {
      return "%";
    }
    var v = c.shift();
    if ("undefined" == typeof v) {
      throw Error("[goog.string.format] Not enough arguments");
    }
    arguments[0] = v;
    return IG[p].apply(null, arguments);
  });
}
var IG = {s:function(a, b, c) {
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
  return IG.f(parseInt(a, 10), b, c, d, 0, f, g, h);
}};
IG.i = IG.d;
IG.u = IG.d;
function JG(a) {
  a.beginPath();
}
function KG(a) {
  a.save();
  return a;
}
function LG(a) {
  a.restore();
  return a;
}
function MG(a) {
  a.stroke();
}
function NG(a, b) {
  var c = Xe(b) ? S.h(Qg, b) : b, d = P.h(c, dr), e = P.h(c, Qm), f = P.h(c, Xk), c = P.h(c, Ys);
  a.clearRect(c, f, e, d);
  return a;
}
function OG(a, b) {
  var c = Xe(b) ? S.h(Qg, b) : b, d = P.h(c, dr), e = P.h(c, Qm), f = P.h(c, Xk), c = P.h(c, Ys);
  a.strokeRect(c, f, e, d);
}
function PG(a, b) {
  var c = Xe(b) ? S.h(Qg, b) : b, d = P.h(c, dr), e = P.h(c, Qm), f = P.h(c, Xk), c = P.h(c, Ys);
  a.fillRect(c, f, e, d);
}
function QG(a, b) {
  var c = Xe(b) ? S.h(Qg, b) : b, d = P.h(c, Xk), e = P.h(c, Ys), c = P.h(c, Fu);
  a.fillText(c, e, d);
  return a;
}
function RG(a, b) {
  a.fillStyle = Rf(b);
}
function SG(a, b) {
  a.strokeStyle = Rf(b);
}
function TG(a, b) {
  a.globalAlpha = b;
  return a;
}
function UG(a, b) {
  a.textAlign = Rf(b);
  return a;
}
function VG(a) {
  a.textBaseline = Rf(vm);
  return a;
}
var WG = function() {
  function a(a, b, c, g) {
    a.drawImage(b, c, g);
    return a;
  }
  function b(a, b, c) {
    var g = Xe(c) ? S.h(Qg, c) : c;
    c = P.h(g, ht);
    var h = P.h(g, jt), l = P.h(g, Ys), p = P.h(g, Xk), s = P.h(g, Bl), t = P.h(g, Ol), v = P.h(g, Qm), B = P.h(g, Sm), y = P.h(g, sn), D = P.h(g, dr), H = P.h(g, Is), K = P.h(g, Qs), g = J(g);
    if (q(Fd.h ? Fd.h(2, g) : Fd.call(null, 2, g))) {
      a.drawImage(b, l, p);
    } else {
      if (q(Fd.h ? Fd.h(4, g) : Fd.call(null, 4, g))) {
        a.drawImage(b, l, p, v, D);
      } else {
        if (q(Fd.h ? Fd.h(8, g) : Fd.call(null, 8, g))) {
          a.drawImage(b, K, B, h, c, t, y, H, s);
        } else {
          throw Error("No matching clause: " + u.g(g));
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
  c.v = a;
  return c;
}(), XG = function() {
  function a(a, b, c, g, h, l, p) {
    a.bezierCurveTo(b, c, g, h, l, p);
    return a;
  }
  function b(a, b) {
    var c = Xe(b) ? S.h(Qg, b) : b, g = P.h(c, Xk), h = P.h(c, Ys), l = P.h(c, nt), p = P.h(c, Pq), s = P.h(c, zs), c = P.h(c, Gq);
    a.bezierCurveTo(c, s, p, l, h, g);
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
  c.Ib = a;
  return c;
}();
function YG(a) {
  if (a ? a.xf : a) {
    return a.xf(a);
  }
  var b;
  b = YG[m(null == a ? null : a)];
  if (!b && (b = YG._, !b)) {
    throw r("PArrayLayout.layout-bounds", a);
  }
  return b.call(null, a);
}
function ZG(a, b) {
  if (a ? a.Af : a) {
    return a.Af(a, b);
  }
  var c;
  c = ZG[m(null == a ? null : a)];
  if (!c && (c = ZG._, !c)) {
    throw r("PArrayLayout.origin-px-topleft", a);
  }
  return c.call(null, a, b);
}
function $G(a, b) {
  if (a ? a.yf : a) {
    return a.yf(a, b);
  }
  var c;
  c = $G[m(null == a ? null : a)];
  if (!c && (c = $G._, !c)) {
    throw r("PArrayLayout.local-px-topleft", a);
  }
  return c.call(null, a, b);
}
function aH(a) {
  if (a ? a.uf : a) {
    return a.uf(a);
  }
  var b;
  b = aH[m(null == a ? null : a)];
  if (!b && (b = aH._, !b)) {
    throw r("PArrayLayout.element-size-px", a);
  }
  return b.call(null, a);
}
function bH(a) {
  if (a ? a.zf : a) {
    return a.zf(a);
  }
  var b;
  b = bH[m(null == a ? null : a)];
  if (!b && (b = bH._, !b)) {
    throw r("PArrayLayout.n-onscreen", a);
  }
  return b.call(null, a);
}
function cH(a) {
  if (a ? a.Eg : a) {
    return a.ba;
  }
  var b;
  b = cH[m(null == a ? null : a)];
  if (!b && (b = cH._, !b)) {
    throw r("PArrayLayout.top-id-onscreen", a);
  }
  return b.call(null, a);
}
function dH(a, b, c) {
  if (a ? a.sf : a) {
    return a.sf(a, b, c);
  }
  var d;
  d = dH[m(null == a ? null : a)];
  if (!d && (d = dH._, !d)) {
    throw r("PArrayLayout.clicked-id", a);
  }
  return d.call(null, a, b, c);
}
function eH(a, b, c) {
  if (a ? a.tf : a) {
    return a.tf(a, b, c);
  }
  var d;
  d = eH[m(null == a ? null : a)];
  if (!d && (d = eH._, !d)) {
    throw r("PArrayLayout.draw-element", a);
  }
  return d.call(null, a, b, c);
}
function fH(a, b, c) {
  if (a ? a.vf : a) {
    return a.vf(a, b, c);
  }
  var d;
  d = fH[m(null == a ? null : a)];
  if (!d && (d = fH._, !d)) {
    throw r("PArrayLayout.highlight-dt", a);
  }
  return d.call(null, a, b, c);
}
function gH(a, b, c, d) {
  if (a ? a.wf : a) {
    return a.wf(a, b, c, d);
  }
  var e;
  e = gH[m(null == a ? null : a)];
  if (!e && (e = gH._, !e)) {
    throw r("PArrayLayout.highlight-element", a);
  }
  return e.call(null, a, b, c, d);
}
function hH(a) {
  a = YG(a);
  return Ys.g(a) + Qm.g(a);
}
function iH(a, b, c) {
  var d = aH(a), e = O.j(d, 0, null), d = O.j(d, 1, null), f = ZG(a, c);
  c = O.j(f, 0, null);
  f = O.j(f, 1, null);
  b = $G(a, b);
  a = O.j(b, 0, null);
  b = O.j(b, 1, null);
  return new U(null, 2, 5, V, [c + a + .5 * e, f + b + .5 * d], null);
}
function jH(a, b, c) {
  var d = cH(b), e = d + bH(b) + -1, f = 1 === J(Jz(Am.g(b)));
  JG(a);
  c = A(c);
  for (var g = null, h = 0, l = 0;;) {
    if (l < h) {
      var p = g.H(null, l);
      d <= p && p <= e && (eH(b, a, p), f || (a.fill(), JG(a)));
      l += 1;
    } else {
      if (c = A(c)) {
        g = c, T(g) ? (c = x(g), l = z(g), g = c, h = J(c), c = l) : (c = C(g), d <= c && c <= e && (eH(b, a, c), f || (a.fill(), JG(a))), c = F(g), g = null, h = 0), l = 0;
      } else {
        break;
      }
    }
  }
}
function kH(a, b, c) {
  KG(a);
  c = A(Hk(c, Di(c)));
  for (var d = null, e = 0, f = 0;;) {
    if (f < e) {
      var g = d.H(null, f), h = O.j(g, 0, null), g = O.j(g, 1, null);
      jH(a, b, g);
      g = a;
      TG.h ? TG.h(g, h) : TG.call(null, g, h);
      a.fill();
      f += 1;
    } else {
      if (c = A(c)) {
        T(c) ? (e = x(c), c = z(c), d = e, e = J(e)) : (e = C(c), d = O.j(e, 0, null), e = O.j(e, 1, null), jH(a, b, e), e = a, TG.h ? TG.h(e, d) : TG.call(null, e, d), a.fill(), c = F(c), d = null, e = 0), f = 0;
      } else {
        break;
      }
    }
  }
  LG(a);
}
function lH(a, b, c, d) {
  return a.arc(b, c, d, 0, 2 * Math.PI, !0);
}
function mH(a, b, c, d) {
  return new n(null, 4, [Ys, a - c / 2, Xk, b - d / 2, Qm, c, dr, d], null);
}
function nH(a, b, c) {
  SG(a, c);
  a.lineWidth = 3;
  OG(a, b);
  SG(a, "black");
  a.lineWidth = 1;
  OG(a, b);
  return a;
}
function oH(a, b, c, d, e, f, g, h, l, p, s, t, v) {
  this.O = a;
  this.ba = b;
  this.Oa = c;
  this.V = d;
  this.X = e;
  this.ea = f;
  this.ca = g;
  this.aa = h;
  this.ga = l;
  this.ia = p;
  this.ha = s;
  this.o = t;
  this.l = v;
  this.B = 2229667594;
  this.K = 8192;
  11 < arguments.length ? (this.o = t, this.l = v) : this.l = this.o = null;
}
k = oH.prototype;
k.N = function(a, b) {
  return hc.j(this, b, null);
};
k.P = function(a, b, c) {
  switch(b instanceof W ? b.ja : null) {
    case "scroll-top":
      return this.ba;
    case "topo":
      return this.O;
    case "element-h":
      return this.X;
    case "shrink":
      return this.ea;
    case "draw-steps":
      return this.Oa;
    case "height-px":
      return this.ga;
    case "top-px":
      return this.aa;
    case "left-px":
      return this.ca;
    case "circles?":
      return this.ia;
    case "highlight-color":
      return this.ha;
    case "element-w":
      return this.V;
    default:
      return P.j(this.l, b, c);
  }
};
k.U = function(a, b, c) {
  return kk(b, function() {
    return function(a) {
      return kk(b, qk, "", " ", "", c, a);
    };
  }(this), "#comportexviz.viz-layouts.Grid1dLayout{", ", ", "}", c, wg.h(new U(null, 11, 5, V, [new U(null, 2, 5, V, [Am, this.O], null), new U(null, 2, 5, V, [Rl, this.ba], null), new U(null, 2, 5, V, [Fn, this.Oa], null), new U(null, 2, 5, V, [Gu, this.V], null), new U(null, 2, 5, V, [Tm, this.X], null), new U(null, 2, 5, V, [zn, this.ea], null), new U(null, 2, 5, V, [Cr, this.ca], null), new U(null, 2, 5, V, [xr, this.aa], null), new U(null, 2, 5, V, [Oq, this.ga], null), new U(null, 2, 5, V, 
  [Ft, this.ia], null), new U(null, 2, 5, V, [Nt, this.ha], null)], null), this.l));
};
k.L = function() {
  return this.o;
};
k.ma = function() {
  return new oH(this.O, this.ba, this.Oa, this.V, this.X, this.ea, this.ca, this.aa, this.ga, this.ia, this.ha, this.o, this.l, this.A);
};
k.Z = function() {
  return 11 + J(this.l);
};
k.zf = function() {
  var a = Pz(this.O), b = (this.ga - this.aa) / this.X;
  return a < b ? a : b;
};
k.vf = function(a, b, c) {
  c = ZG(this, c);
  a = O.j(c, 0, null);
  c = O.j(c, 1, null);
  var d = YG(this);
  return nH(b, new n(null, 4, [Ys, a, Xk, c - 5, Qm, this.V + 1, dr, 10 + dr.g(d)], null), this.ha);
};
k.uf = function() {
  return new U(null, 2, 5, V, [this.V, this.X], null);
};
k.tf = function(a, b, c) {
  c = $G(this, c);
  a = O.j(c, 0, null);
  c = O.j(c, 1, null);
  if (q(this.ia)) {
    var d = this.V * this.ea * .5;
    b = lH(b, a + d, c + d, d);
  } else {
    b = b.rect(a, c, this.V * this.ea, this.X * this.ea);
  }
  return b;
};
k.Eg = function() {
  return this.ba;
};
k.Af = function(a, b) {
  return new U(null, 2, 5, V, [this.ca + this.Oa * this.V - (b + 1) * this.V, this.aa], null);
};
k.yf = function(a, b) {
  return new U(null, 2, 5, V, [0, (b - this.ba) * this.X], null);
};
k.sf = function(a, b, c) {
  var d = this, e = d.ca + d.Oa * d.V;
  a = function() {
    var a = (e - b) / d.V;
    return Math.floor.g ? Math.floor.g(a) : Math.floor.call(null, a);
  }();
  var f = function() {
    var a = (c - d.aa) / d.X;
    return Math.floor.g ? Math.floor.g(a) : Math.floor.call(null, a);
  }(), g = f + d.ba;
  return 0 <= a && a <= d.Oa && 0 <= f && f <= bH(this) ? new U(null, 2, 5, V, [a, g], null) : null;
};
k.wf = function(a, b, c, d) {
  a = ZG(this, c);
  O.j(a, 0, null);
  a = O.j(a, 1, null);
  d = $G(this, d);
  O.j(d, 0, null);
  d = O.j(d, 1, null);
  c = YG(this);
  return nH(b, new n(null, 4, [Ys, Ys.g(c) - 5, Xk, a + d, Qm, Qm.g(c) + 10, dr, this.X + 1], null), this.ha);
};
k.xf = function() {
  var a = this.ca, b = this.aa, c = this.Oa * this.V, d = this.ga, e = Pz(this.O) * this.X;
  return new n(null, 4, [Ys, a, Xk, b, Qm, c, dr, d < e ? d : e], null);
};
k.S = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Jf(this);
};
k.J = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && ui(this, b) : b) ? !0 : !1;
};
k.Ra = function(a, b) {
  return Ze(new Oj(null, new n(null, 11, [Rl, null, Am, null, Tm, null, zn, null, Fn, null, Oq, null, xr, null, Cr, null, Ft, null, Nt, null, Gu, null], null), null), b) ? we.h(ge(Ah.h(Gi, this), this.o), b) : new oH(this.O, this.ba, this.Oa, this.V, this.X, this.ea, this.ca, this.aa, this.ga, this.ia, this.ha, this.o, Fg(we.h(this.l, b)), null);
};
k.za = function(a, b, c) {
  return q(X.h ? X.h(Am, b) : X.call(null, Am, b)) ? new oH(c, this.ba, this.Oa, this.V, this.X, this.ea, this.ca, this.aa, this.ga, this.ia, this.ha, this.o, this.l, null) : q(X.h ? X.h(Rl, b) : X.call(null, Rl, b)) ? new oH(this.O, c, this.Oa, this.V, this.X, this.ea, this.ca, this.aa, this.ga, this.ia, this.ha, this.o, this.l, null) : q(X.h ? X.h(Fn, b) : X.call(null, Fn, b)) ? new oH(this.O, this.ba, c, this.V, this.X, this.ea, this.ca, this.aa, this.ga, this.ia, this.ha, this.o, this.l, null) : 
  q(X.h ? X.h(Gu, b) : X.call(null, Gu, b)) ? new oH(this.O, this.ba, this.Oa, c, this.X, this.ea, this.ca, this.aa, this.ga, this.ia, this.ha, this.o, this.l, null) : q(X.h ? X.h(Tm, b) : X.call(null, Tm, b)) ? new oH(this.O, this.ba, this.Oa, this.V, c, this.ea, this.ca, this.aa, this.ga, this.ia, this.ha, this.o, this.l, null) : q(X.h ? X.h(zn, b) : X.call(null, zn, b)) ? new oH(this.O, this.ba, this.Oa, this.V, this.X, c, this.ca, this.aa, this.ga, this.ia, this.ha, this.o, this.l, null) : q(X.h ? 
  X.h(Cr, b) : X.call(null, Cr, b)) ? new oH(this.O, this.ba, this.Oa, this.V, this.X, this.ea, c, this.aa, this.ga, this.ia, this.ha, this.o, this.l, null) : q(X.h ? X.h(xr, b) : X.call(null, xr, b)) ? new oH(this.O, this.ba, this.Oa, this.V, this.X, this.ea, this.ca, c, this.ga, this.ia, this.ha, this.o, this.l, null) : q(X.h ? X.h(Oq, b) : X.call(null, Oq, b)) ? new oH(this.O, this.ba, this.Oa, this.V, this.X, this.ea, this.ca, this.aa, c, this.ia, this.ha, this.o, this.l, null) : q(X.h ? X.h(Ft, 
  b) : X.call(null, Ft, b)) ? new oH(this.O, this.ba, this.Oa, this.V, this.X, this.ea, this.ca, this.aa, this.ga, c, this.ha, this.o, this.l, null) : q(X.h ? X.h(Nt, b) : X.call(null, Nt, b)) ? new oH(this.O, this.ba, this.Oa, this.V, this.X, this.ea, this.ca, this.aa, this.ga, this.ia, c, this.o, this.l, null) : new oH(this.O, this.ba, this.Oa, this.V, this.X, this.ea, this.ca, this.aa, this.ga, this.ia, this.ha, this.o, Q.j(this.l, b, c), null);
};
k.W = function() {
  return A(wg.h(new U(null, 11, 5, V, [new U(null, 2, 5, V, [Am, this.O], null), new U(null, 2, 5, V, [Rl, this.ba], null), new U(null, 2, 5, V, [Fn, this.Oa], null), new U(null, 2, 5, V, [Gu, this.V], null), new U(null, 2, 5, V, [Tm, this.X], null), new U(null, 2, 5, V, [zn, this.ea], null), new U(null, 2, 5, V, [Cr, this.ca], null), new U(null, 2, 5, V, [xr, this.aa], null), new U(null, 2, 5, V, [Oq, this.ga], null), new U(null, 2, 5, V, [Ft, this.ia], null), new U(null, 2, 5, V, [Nt, this.ha], 
  null)], null), this.l));
};
k.M = function(a, b) {
  return new oH(this.O, this.ba, this.Oa, this.V, this.X, this.ea, this.ca, this.aa, this.ga, this.ia, this.ha, b, this.l, this.A);
};
k.Y = function(a, b) {
  return He(b) ? kc(this, w.h(b, 0), w.h(b, 1)) : Nb.j($b, this, b);
};
function pH(a) {
  return new oH(Am.g(a), Rl.g(a), Fn.g(a), Gu.g(a), Tm.g(a), zn.g(a), Cr.g(a), xr.g(a), Oq.g(a), Ft.g(a), Nt.g(a), null, we.k(a, Am, G([Rl, Fn, Gu, Tm, zn, Cr, xr, Oq, Ft, Nt], 0)));
}
function qH(a, b, c) {
  var d = Xe(c) ? S.h(Qg, c) : c;
  c = P.h(d, Nt);
  var e = P.h(d, su), f = P.h(d, hq), g = P.h(d, bt), d = P.h(d, Fn);
  return pH(ve([Rl, Am, Tm, zn, Fn, Oq, xr, Cr, Ft, Nt, Gu], [0, a, f, e, d, 900, 30, b, !1, c, g]));
}
function rH(a, b, c, d, e, f, g, h, l, p, s, t) {
  this.O = a;
  this.ba = b;
  this.V = c;
  this.X = d;
  this.ea = e;
  this.ca = f;
  this.aa = g;
  this.ga = h;
  this.ia = l;
  this.ha = p;
  this.o = s;
  this.l = t;
  this.B = 2229667594;
  this.K = 8192;
  10 < arguments.length ? (this.o = s, this.l = t) : this.l = this.o = null;
}
k = rH.prototype;
k.N = function(a, b) {
  return hc.j(this, b, null);
};
k.P = function(a, b, c) {
  switch(b instanceof W ? b.ja : null) {
    case "scroll-top":
      return this.ba;
    case "topo":
      return this.O;
    case "element-h":
      return this.X;
    case "shrink":
      return this.ea;
    case "height-px":
      return this.ga;
    case "top-px":
      return this.aa;
    case "left-px":
      return this.ca;
    case "circles?":
      return this.ia;
    case "highlight-color":
      return this.ha;
    case "element-w":
      return this.V;
    default:
      return P.j(this.l, b, c);
  }
};
k.U = function(a, b, c) {
  return kk(b, function() {
    return function(a) {
      return kk(b, qk, "", " ", "", c, a);
    };
  }(this), "#comportexviz.viz-layouts.Grid2dLayout{", ", ", "}", c, wg.h(new U(null, 10, 5, V, [new U(null, 2, 5, V, [Am, this.O], null), new U(null, 2, 5, V, [Rl, this.ba], null), new U(null, 2, 5, V, [Gu, this.V], null), new U(null, 2, 5, V, [Tm, this.X], null), new U(null, 2, 5, V, [zn, this.ea], null), new U(null, 2, 5, V, [Cr, this.ca], null), new U(null, 2, 5, V, [xr, this.aa], null), new U(null, 2, 5, V, [Oq, this.ga], null), new U(null, 2, 5, V, [Ft, this.ia], null), new U(null, 2, 5, V, 
  [Nt, this.ha], null)], null), this.l));
};
k.L = function() {
  return this.o;
};
k.ma = function() {
  return new rH(this.O, this.ba, this.V, this.X, this.ea, this.ca, this.aa, this.ga, this.ia, this.ha, this.o, this.l, this.A);
};
k.Z = function() {
  return 10 + J(this.l);
};
k.zf = function() {
  var a = Jz(this.O), b = O.j(a, 0, null), a = O.j(a, 1, null), c = (this.ga - this.aa) / this.X;
  return b * (a < c ? a : c);
};
k.vf = function(a, b, c) {
  c = ZG(this, c);
  a = O.j(c, 0, null);
  c = O.j(c, 1, null);
  var d = YG(this);
  return nH(b, new n(null, 4, [Ys, a - 5, Xk, c - 5, Qm, 10 + Qm.g(d), dr, 10 + dr.g(d)], null), this.ha);
};
k.uf = function() {
  return new U(null, 2, 5, V, [this.V, this.X], null);
};
k.tf = function(a, b, c) {
  c = $G(this, c);
  a = O.j(c, 0, null);
  c = O.j(c, 1, null);
  if (q(this.ia)) {
    var d = this.V * this.ea * .5;
    b = lH(b, a + d, c + d, d);
  } else {
    b = b.rect(a, c, this.V * this.ea, this.X * this.ea);
  }
  return b;
};
k.Eg = function() {
  return this.ba;
};
k.Af = function() {
  return new U(null, 2, 5, V, [this.ca, this.aa], null);
};
k.yf = function(a, b) {
  var c = Kz(this.O, b + this.ba), d = O.j(c, 0, null), c = O.j(c, 1, null);
  return new U(null, 2, 5, V, [d * this.V, c * this.X], null);
};
k.sf = function(a, b, c) {
  var d = this, e = Jz(d.O);
  a = O.j(e, 0, null);
  var e = O.j(e, 1, null), f = function() {
    var a = (b - d.ca) / d.V;
    return Math.floor.g ? Math.floor.g(a) : Math.floor.call(null, a);
  }(), g = function() {
    var a = (c - d.aa) / d.X;
    return Math.floor.g ? Math.floor.g(a) : Math.floor.call(null, a);
  }();
  return 0 <= f && f <= a - 1 && 0 <= g && g <= e - 1 ? (a = Lz(d.O, new U(null, 2, 5, V, [f, g], null)) - d.ba, new U(null, 2, 5, V, [0, a], null)) : null;
};
k.wf = function(a, b, c, d) {
  c = ZG(this, c);
  a = O.j(c, 0, null);
  c = O.j(c, 1, null);
  var e = $G(this, d);
  d = O.j(e, 0, null);
  e = O.j(e, 1, null);
  YG(this);
  return nH(b, new n(null, 4, [Ys, a + d, Xk, c + e, Qm, this.V + 1, dr, this.X + 1], null), this.ha);
};
k.xf = function() {
  var a = Jz(this.O), b = O.j(a, 0, null), c = O.j(a, 1, null), a = this.ga, c = c * this.X;
  return new n(null, 4, [Ys, this.ca, Xk, this.aa, Qm, b * this.V, dr, a < c ? a : c], null);
};
k.S = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Jf(this);
};
k.J = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && ui(this, b) : b) ? !0 : !1;
};
k.Ra = function(a, b) {
  return Ze(new Oj(null, new n(null, 10, [Rl, null, Am, null, Tm, null, zn, null, Oq, null, xr, null, Cr, null, Ft, null, Nt, null, Gu, null], null), null), b) ? we.h(ge(Ah.h(Gi, this), this.o), b) : new rH(this.O, this.ba, this.V, this.X, this.ea, this.ca, this.aa, this.ga, this.ia, this.ha, this.o, Fg(we.h(this.l, b)), null);
};
k.za = function(a, b, c) {
  return q(X.h ? X.h(Am, b) : X.call(null, Am, b)) ? new rH(c, this.ba, this.V, this.X, this.ea, this.ca, this.aa, this.ga, this.ia, this.ha, this.o, this.l, null) : q(X.h ? X.h(Rl, b) : X.call(null, Rl, b)) ? new rH(this.O, c, this.V, this.X, this.ea, this.ca, this.aa, this.ga, this.ia, this.ha, this.o, this.l, null) : q(X.h ? X.h(Gu, b) : X.call(null, Gu, b)) ? new rH(this.O, this.ba, c, this.X, this.ea, this.ca, this.aa, this.ga, this.ia, this.ha, this.o, this.l, null) : q(X.h ? X.h(Tm, b) : X.call(null, 
  Tm, b)) ? new rH(this.O, this.ba, this.V, c, this.ea, this.ca, this.aa, this.ga, this.ia, this.ha, this.o, this.l, null) : q(X.h ? X.h(zn, b) : X.call(null, zn, b)) ? new rH(this.O, this.ba, this.V, this.X, c, this.ca, this.aa, this.ga, this.ia, this.ha, this.o, this.l, null) : q(X.h ? X.h(Cr, b) : X.call(null, Cr, b)) ? new rH(this.O, this.ba, this.V, this.X, this.ea, c, this.aa, this.ga, this.ia, this.ha, this.o, this.l, null) : q(X.h ? X.h(xr, b) : X.call(null, xr, b)) ? new rH(this.O, this.ba, 
  this.V, this.X, this.ea, this.ca, c, this.ga, this.ia, this.ha, this.o, this.l, null) : q(X.h ? X.h(Oq, b) : X.call(null, Oq, b)) ? new rH(this.O, this.ba, this.V, this.X, this.ea, this.ca, this.aa, c, this.ia, this.ha, this.o, this.l, null) : q(X.h ? X.h(Ft, b) : X.call(null, Ft, b)) ? new rH(this.O, this.ba, this.V, this.X, this.ea, this.ca, this.aa, this.ga, c, this.ha, this.o, this.l, null) : q(X.h ? X.h(Nt, b) : X.call(null, Nt, b)) ? new rH(this.O, this.ba, this.V, this.X, this.ea, this.ca, 
  this.aa, this.ga, this.ia, c, this.o, this.l, null) : new rH(this.O, this.ba, this.V, this.X, this.ea, this.ca, this.aa, this.ga, this.ia, this.ha, this.o, Q.j(this.l, b, c), null);
};
k.W = function() {
  return A(wg.h(new U(null, 10, 5, V, [new U(null, 2, 5, V, [Am, this.O], null), new U(null, 2, 5, V, [Rl, this.ba], null), new U(null, 2, 5, V, [Gu, this.V], null), new U(null, 2, 5, V, [Tm, this.X], null), new U(null, 2, 5, V, [zn, this.ea], null), new U(null, 2, 5, V, [Cr, this.ca], null), new U(null, 2, 5, V, [xr, this.aa], null), new U(null, 2, 5, V, [Oq, this.ga], null), new U(null, 2, 5, V, [Ft, this.ia], null), new U(null, 2, 5, V, [Nt, this.ha], null)], null), this.l));
};
k.M = function(a, b) {
  return new rH(this.O, this.ba, this.V, this.X, this.ea, this.ca, this.aa, this.ga, this.ia, this.ha, b, this.l, this.A);
};
k.Y = function(a, b) {
  return He(b) ? kc(this, w.h(b, 0), w.h(b, 1)) : Nb.j($b, this, b);
};
function sH(a) {
  return new rH(Am.g(a), Rl.g(a), Gu.g(a), Tm.g(a), zn.g(a), Cr.g(a), xr.g(a), Oq.g(a), Ft.g(a), Nt.g(a), null, we.k(a, Am, G([Rl, Gu, Tm, zn, Cr, xr, Oq, Ft, Nt], 0)));
}
function tH(a, b, c) {
  var d = Xe(c) ? S.h(Qg, c) : c;
  c = P.h(d, Nt);
  var e = P.h(d, su), f = P.h(d, hq), d = P.h(d, bt);
  return sH(ve([Rl, Am, Tm, zn, Oq, xr, Cr, Ft, Nt, Gu], [0, a, f, e, 900, 30, b, !1, c, d]));
}
;var uH, vH = function() {
  function a(a, b, c, g) {
    var h = a instanceof W ? function() {
      switch(a instanceof W ? a.ja : null) {
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
          throw Error("No matching clause: " + u.g(a));;
      }
    }() : a;
    return "hsla(" + u.g(h) + "," + u.g(pf(100 * b)) + "%," + u.g(pf(100 * c)) + "%," + u.g(g) + ")";
  }
  function b(a, b, f) {
    return c.v(a, b, f, 1);
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
  c.v = a;
  return c;
}(), wH = ve([Wk, Ll, Vl, im, Cm, pn, Eq, ir, ft, Ht], ["white", vH.v(40, 1, .5, .75), vH.v(an, 1, .5, .4), "white", vH.v(Bm, 1, .75, .5), "white", vH.j(zt, 1, .4), vH.j(pr, 1, .5), vH.v(qr, 1, .5, .5), "black"]), xH, yH = new n(null, 5, [mt, new n(null, 2, [ir, !0, ft, !0], null), Om, new n(null, 7, [ir, !0, lr, null, rl, null, Cn, !0, Vl, !0, Ll, !1, Sl, 0], null), il, new n(null, 4, [ir, null, Wk, null, im, null, Vt, null], null), tm, new n(null, 5, [er, lq, ir, !0, Wk, null, im, null, Vt, null], 
null), Os, ve([cl, Ql, Hm, Jm, Km, Fn, hq, wr, bt, Nt, qu, su, Au], [30, 50, 10, 60, .85, 25, 3, 150, 3, Cm.g(wH), 5, .85, 10])], null);
xH = Sg.g ? Sg.g(yH) : Sg.call(null, yH);
var zH = Sg.g ? Sg.g(25) : Sg.call(null, 25), AH, BH = se;
AH = Sg.g ? Sg.g(BH) : Sg.call(null, BH);
var CH = Sg.g ? Sg.g(null) : Sg.call(null, null);
function DH(a, b, c, d) {
  c = ZG(b, c);
  b = O.j(c, 0, null);
  c = O.j(c, 1, null);
  WG.v(a, d, b, c);
}
function EH(a) {
  Vg.v(CH, Gh, new U(null, 1, 5, V, [jn], null), function(b) {
    return Bh.h(function(b) {
      var d = bH(b), e = Pz(Am.g(b));
      return Gh.j(b, new U(null, 1, 5, V, [Rl], null), function(b, c) {
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
  return Vg.v(xH, Gh, new U(null, 2, 5, V, [Om, Sl], null), function(b) {
    return q(a) ? b + 1 : b - 1;
  });
}
function FH(a, b, c, d, e, f, g, h) {
  KG(a);
  a.lineWidth = 1;
  TG(a, 1);
  for (var l = eu.g(b), p = Wp.g(l), s = q(f) ? new U(null, 1, 5, V, [f], null) : lA(St.g(b)), t = HA.g(d), v = IA.g(d), B = Dh.h(h, new U(null, 2, 5, V, [il, Wk], null)), y = Dh.h(h, new U(null, 2, 5, V, [il, im], null)), D = Dh.h(h, new U(null, 2, 5, V, [il, Vt], null)), H = A(s), K = null, M = 0, L = 0;;) {
    if (L < M) {
      for (var R = K.H(null, L), $ = A(wg.k(q(y) ? new U(null, 1, 5, V, [im], null) : null, q(B) ? new U(null, 1, 5, V, [Ht], null) : null, G([new U(null, 2, 5, V, [ir, Eq], null)], 0))), N = null, wa = 0, Y = 0;;) {
        if (Y < wa) {
          var ga = N.H(null, Y), fa = sA(p, R), na = Mj(fa, tA(p, R)), ua = function() {
            switch(ga instanceof W ? ga.ja : null) {
              case "disconnected":
                return S.j(we, fa, Di(na));
              case "inactive-syn":
                return S.j(we, na, t);
              case "active-predicted":
                return Mj(na, v);
              case "active":
                return Mj(na, t);
              default:
                throw Error("No matching clause: " + u.g(ga));;
            }
          }(), Ba = iH(c, R, g), Da = O.j(Ba, 0, null), Ja = O.j(Ba, 1, null);
          SG(a, function() {
            var a = ga;
            return wH.g ? wH.g(a) : wH.call(null, a);
          }());
          for (var ra = A(ua), Ea = null, fb = 0, xa = 0;;) {
            if (xa < fb) {
              var ib = Ea.H(null, xa), Eb = O.j(ib, 0, null), jb = O.j(ib, 1, null), yb = CA(d, Eb), Ab = O.j(yb, 0, null);
              O.j(yb, 1, null);
              var va = iH(e, Ab, g), Qd = O.j(va, 0, null), md = O.j(va, 1, null), Vc = a;
              TG(Vc, q(D) ? jb : 1);
              JG(Vc);
              Vc.moveTo(Da - 1, Ja);
              Vc.lineTo(Qd + 1, md);
              MG(Vc);
              xa += 1;
            } else {
              var Dj = A(ra);
              if (Dj) {
                var qf = Dj;
                if (T(qf)) {
                  var qa = x(qf), bi = z(qf), Xg = qa, ke = J(qa), ra = bi, Ea = Xg, fb = ke
                } else {
                  var Me = C(qf), Ne = O.j(Me, 0, null), hd = O.j(Me, 1, null), Sb = CA(d, Ne), La = O.j(Sb, 0, null);
                  O.j(Sb, 1, null);
                  var $a = iH(e, La, g), vc = O.j($a, 0, null), Oe = O.j($a, 1, null), le = a;
                  TG(le, q(D) ? hd : 1);
                  JG(le);
                  le.moveTo(Da - 1, Ja);
                  le.lineTo(vc + 1, Oe);
                  MG(le);
                  ra = F(qf);
                  Ea = null;
                  fb = 0;
                }
                xa = 0;
              } else {
                break;
              }
            }
          }
          Y += 1;
        } else {
          var Yg = A($);
          if (Yg) {
            var id = Yg;
            if (T(id)) {
              var ci = x(id), rf = z(id), mc = ci, Ec = J(ci), $ = rf, N = mc, wa = Ec
            } else {
              var ud = C(id), Kd = sA(p, R), bg = Mj(Kd, tA(p, R)), Pe = function() {
                switch(ud instanceof W ? ud.ja : null) {
                  case "disconnected":
                    return S.j(we, Kd, Di(bg));
                  case "inactive-syn":
                    return S.j(we, bg, t);
                  case "active-predicted":
                    return Mj(bg, v);
                  case "active":
                    return Mj(bg, t);
                  default:
                    throw Error("No matching clause: " + u.g(ud));;
                }
              }(), Xd = iH(c, R, g), Yd = O.j(Xd, 0, null), me = O.j(Xd, 1, null);
              SG(a, function() {
                var a = ud;
                return wH.g ? wH.g(a) : wH.call(null, a);
              }());
              for (var jd = A(Pe), qb = null, Fc = 0, Qe = 0;;) {
                if (Qe < Fc) {
                  var Re = qb.H(null, Qe), cg = O.j(Re, 0, null), Se = O.j(Re, 1, null), ha = CA(d, cg), Te = O.j(ha, 0, null);
                  O.j(ha, 1, null);
                  var ne = iH(e, Te, g), Ue = O.j(ne, 0, null), Tc = O.j(ne, 1, null), Uc = a;
                  TG(Uc, q(D) ? Se : 1);
                  JG(Uc);
                  Uc.moveTo(Yd - 1, me);
                  Uc.lineTo(Ue + 1, Tc);
                  MG(Uc);
                  Qe += 1;
                } else {
                  var nc = A(jd);
                  if (nc) {
                    var Tb = nc;
                    if (T(Tb)) {
                      var oe = x(Tb), di = z(Tb), sf = oe, vd = J(oe), jd = di, qb = sf, Fc = vd
                    } else {
                      var tf = C(Tb), Zg = O.j(tf, 0, null), ei = O.j(tf, 1, null), uf = CA(d, Zg), vf = O.j(uf, 0, null);
                      O.j(uf, 1, null);
                      var gc = iH(e, vf, g), Wa = O.j(gc, 0, null), Zd = O.j(gc, 1, null), oc = a;
                      TG(oc, q(D) ? ei : 1);
                      JG(oc);
                      oc.moveTo(Yd - 1, me);
                      oc.lineTo(Wa + 1, Zd);
                      MG(oc);
                      jd = F(Tb);
                      qb = null;
                      Fc = 0;
                    }
                    Qe = 0;
                  } else {
                    break;
                  }
                }
              }
              $ = F(id);
              N = null;
              wa = 0;
            }
            Y = 0;
          } else {
            break;
          }
        }
      }
      L += 1;
    } else {
      var Gc = A(H);
      if (Gc) {
        var $d = Gc;
        if (T($d)) {
          var dg = x($d), Ve = z($d), Jk = dg, fi = J(dg), H = Ve, K = Jk, M = fi
        } else {
          for (var wd = C($d), We = A(wg.k(q(y) ? new U(null, 1, 5, V, [im], null) : null, q(B) ? new U(null, 1, 5, V, [Ht], null) : null, G([new U(null, 2, 5, V, [ir, Eq], null)], 0))), $g = null, ah = 0, wc = 0;;) {
            if (wc < ah) {
              var eg = $g.H(null, wc), ae = sA(p, wd), wf = Mj(ae, tA(p, wd)), gi = function() {
                switch(eg instanceof W ? eg.ja : null) {
                  case "disconnected":
                    return S.j(we, ae, Di(wf));
                  case "inactive-syn":
                    return S.j(we, wf, t);
                  case "active-predicted":
                    return Mj(wf, v);
                  case "active":
                    return Mj(wf, t);
                  default:
                    throw Error("No matching clause: " + u.g(eg));;
                }
              }(), xf = iH(c, wd, g), pe = O.j(xf, 0, null), Ld = O.j(xf, 1, null);
              SG(a, function() {
                var a = eg;
                return wH.g ? wH.g(a) : wH.call(null, a);
              }());
              for (var fg = A(gi), gg = null, qe = 0, kd = 0;;) {
                if (kd < qe) {
                  var bh = gg.H(null, kd), ch = O.j(bh, 0, null), hg = O.j(bh, 1, null), ig = CA(d, ch), Nn = O.j(ig, 0, null);
                  O.j(ig, 1, null);
                  var lm = iH(e, Nn, g), dh = O.j(lm, 0, null), yf = O.j(lm, 1, null), jg = a;
                  TG(jg, q(D) ? hg : 1);
                  JG(jg);
                  jg.moveTo(pe - 1, Ld);
                  jg.lineTo(dh + 1, yf);
                  MG(jg);
                  kd += 1;
                } else {
                  var eh = A(fg);
                  if (eh) {
                    var fh = eh;
                    if (T(fh)) {
                      var Kk = x(fh), On = z(fh), Pn = Kk, mm = J(Kk), fg = On, gg = Pn, qe = mm
                    } else {
                      var nm = C(fh), re = O.j(nm, 0, null), Lk = O.j(nm, 1, null), Qn = CA(d, re), Mk = O.j(Qn, 0, null);
                      O.j(Qn, 1, null);
                      var Rn = iH(e, Mk, g), ow = O.j(Rn, 0, null), pw = O.j(Rn, 1, null), Nk = a;
                      TG(Nk, q(D) ? Lk : 1);
                      JG(Nk);
                      Nk.moveTo(pe - 1, Ld);
                      Nk.lineTo(ow + 1, pw);
                      MG(Nk);
                      fg = F(fh);
                      gg = null;
                      qe = 0;
                    }
                    kd = 0;
                  } else {
                    break;
                  }
                }
              }
              wc += 1;
            } else {
              var Sn = A(We);
              if (Sn) {
                var Ej = Sn;
                if (T(Ej)) {
                  var Lr = x(Ej), qw = z(Ej), Mr = Lr, rw = J(Lr), We = qw, $g = Mr, ah = rw
                } else {
                  var om = C(Ej), Fj = sA(p, wd), Ok = Mj(Fj, tA(p, wd)), Pk = function() {
                    switch(om instanceof W ? om.ja : null) {
                      case "disconnected":
                        return S.j(we, Fj, Di(Ok));
                      case "inactive-syn":
                        return S.j(we, Ok, t);
                      case "active-predicted":
                        return Mj(Ok, v);
                      case "active":
                        return Mj(Ok, t);
                      default:
                        throw Error("No matching clause: " + u.g(om));;
                    }
                  }(), Tn = iH(c, wd, g), Nr = O.j(Tn, 0, null), Or = O.j(Tn, 1, null);
                  SG(a, function() {
                    var a = om;
                    return wH.g ? wH.g(a) : wH.call(null, a);
                  }());
                  for (var Un = A(Pk), Vn = null, Wn = 0, hi = 0;;) {
                    if (hi < Wn) {
                      var pm = Vn.H(null, hi), Xn = O.j(pm, 0, null), Qk = O.j(pm, 1, null), Yn = CA(d, Xn), Pr = O.j(Yn, 0, null);
                      O.j(Yn, 1, null);
                      var Qr = iH(e, Pr, g), sw = O.j(Qr, 0, null), Rr = O.j(Qr, 1, null), Rk = a;
                      TG(Rk, q(D) ? Qk : 1);
                      JG(Rk);
                      Rk.moveTo(Nr - 1, Or);
                      Rk.lineTo(sw + 1, Rr);
                      MG(Rk);
                      hi += 1;
                    } else {
                      var Sr = A(Un);
                      if (Sr) {
                        var kg = Sr;
                        if (T(kg)) {
                          var Zn = x(kg), Sk = z(kg), Tr = Zn, tw = J(Zn), Un = Sk, Vn = Tr, Wn = tw
                        } else {
                          var Ur = C(kg), uw = O.j(Ur, 0, null), Vr = O.j(Ur, 1, null), $n = CA(d, uw), vw = O.j($n, 0, null);
                          O.j($n, 1, null);
                          var Wr = iH(e, vw, g), Xr = O.j(Wr, 0, null), ww = O.j(Wr, 1, null), Tk = a;
                          TG(Tk, q(D) ? Vr : 1);
                          JG(Tk);
                          Tk.moveTo(Nr - 1, Or);
                          Tk.lineTo(Xr + 1, ww);
                          MG(Tk);
                          Un = F(kg);
                          Vn = null;
                          Wn = 0;
                        }
                        hi = 0;
                      } else {
                        break;
                      }
                    }
                  }
                  We = F(Ej);
                  $g = null;
                  ah = 0;
                }
                wc = 0;
              } else {
                break;
              }
            }
          }
          H = F($d);
          K = null;
          M = 0;
        }
        L = 0;
      } else {
        break;
      }
    }
  }
  LG(a);
}
function GH(a, b, c) {
  return Hk(function(a) {
    var e = O.j(a, 0, null);
    a = O.j(a, 1, null);
    return new U(null, 2, 5, V, [a >= c ? tn : im, q(b.g ? b.g(e) : b.call(null, e)) ? ir : Ht], null);
  }, a);
}
function HH(a, b, c) {
  if (a ? a.Hd : a) {
    return a.Hd(a, b, c);
  }
  var d;
  d = HH[m(null == a ? null : a)];
  if (!d && (d = HH._, !d)) {
    throw r("PCellsSegmentsLayout.seg-xy", a);
  }
  return d.call(null, a, b, c);
}
function IH(a, b) {
  if (a ? a.Be : a) {
    return a.Be(a, b);
  }
  var c;
  c = IH[m(null == a ? null : a)];
  if (!c && (c = IH._, !c)) {
    throw r("PCellsSegmentsLayout.cell-xy", a);
  }
  return c.call(null, a, b);
}
function JH(a, b, c) {
  a = kh.j(ai, oh.g(a), bk.g(b));
  return Bh.h(function() {
    return function(a) {
      return Of(nh.h(Ce, Of(yA(c, a))));
    };
  }(a), a);
}
var LH = function KH(b, c, d, e, f, g) {
  var h = kh.h(J, c), l = kh.h(Mg.h(nf, 1), h), p = S.h(jf, l), s = f + Dh.h(g, new U(null, 2, 5, V, [Os, Ql], null)), t = Dh.h(g, new U(null, 2, 5, V, [Os, qu], null)), v = .5 * t, B = Dh.h(g, new U(null, 2, 5, V, [Os, Au], null)), y = Dh.h(g, new U(null, 2, 5, V, [Os, Hm], null)), D = Dh.h(g, new U(null, 2, 5, V, [Os, cl], null)), H = .5 * D, K = .95 * window.innerHeight, M = window.pageYOffset + 2 * B, L = iH(d, b, e), R = O.j(L, 0, null), $ = O.j(L, 1, null);
  "undefined" === typeof uH && (uH = function(b, c, d, e, f, g, h, l, p, s, t, v, y, B, M, L, D, H, K, R, $, md, Vc) {
    this.Wg = b;
    this.th = c;
    this.Yh = d;
    this.Zh = e;
    this.og = f;
    this.bj = g;
    this.oh = h;
    this.rf = l;
    this.Eh = p;
    this.oj = s;
    this.aj = t;
    this.ci = v;
    this.Gi = y;
    this.Dg = B;
    this.qf = M;
    this.Vg = L;
    this.cj = D;
    this.Xh = H;
    this.uh = K;
    this.Yc = R;
    this.ph = $;
    this.pg = md;
    this.Ci = Vc;
    this.K = 0;
    this.B = 393216;
  }, uH.wb = !0, uH.vb = "comportexviz.viz-canvas/t37939", uH.Bb = function() {
    return function(b, c) {
      return Wc(c, "comportexviz.viz-canvas/t37939");
    };
  }(h, l, p, s, t, v, B, y, D, H, K, M, L, R, $), uH.prototype.Hd = function() {
    return function(b, c, d) {
      b = S.j(jf, d, lh.h(c, this.Wg)) / this.Vg;
      return new U(null, 2, 5, V, [this.uh + this.th, this.ph + 30 + b * this.oh], null);
    };
  }(h, l, p, s, t, v, B, y, D, H, K, M, L, R, $), uH.prototype.Be = function() {
    return function(b, c) {
      var d = HH(this, c, 0);
      O.j(d, 0, null);
      d = O.j(d, 1, null);
      return new U(null, 2, 5, V, [this.pg, d], null);
    };
  }(h, l, p, s, t, v, B, y, D, H, K, M, L, R, $), uH.prototype.Ce = function() {
    return function(b, c, d) {
      d = IH(this, d);
      b = O.j(d, 0, null);
      d = O.j(d, 1, null);
      JG(c);
      c.moveTo(this.qf + this.Dg + 1, this.rf);
      var e = this.qf, f = (b - e) / 3;
      XG.Ib(c, b - f, this.rf, e + f, d, b, d);
      MG(c);
      return c;
    };
  }(h, l, p, s, t, v, B, y, D, H, K, M, L, R, $), uH.prototype.fd = function() {
    return function(b, c, d, e) {
      var f = IH(this, d);
      b = O.j(f, 0, null);
      f = O.j(f, 1, null);
      e = HH(this, d, e);
      d = O.j(e, 0, null);
      e = O.j(e, 1, null);
      JG(c);
      c.moveTo(d, e);
      c.lineTo(b + this.og, f);
      MG(c);
      return c;
    };
  }(h, l, p, s, t, v, B, y, D, H, K, M, L, R, $), uH.prototype.L = function() {
    return function() {
      return this.Ci;
    };
  }(h, l, p, s, t, v, B, y, D, H, K, M, L, R, $), uH.prototype.M = function() {
    return function(b, c) {
      return new uH(this.Wg, this.th, this.Yh, this.Zh, this.og, this.bj, this.oh, this.rf, this.Eh, this.oj, this.aj, this.ci, this.Gi, this.Dg, this.qf, this.Vg, this.cj, this.Xh, this.uh, this.Yc, this.ph, this.pg, c);
    };
  }(h, l, p, s, t, v, B, y, D, H, K, M, L, R, $));
  return new uH(l, H, t, d, B, D, K, $, KH, L, y, e, h, v, R, p, c, b, s, g, M, f, null);
};
function MH(a, b, c, d, e, f, g, h) {
  KG(a);
  var l = Vz(c), p = $m.g(l), s = Nm.g(l), t = eu.g(b), v = St.g(b), B = eu.g(c), y = St.g(c), D = mA(v), H = mA(y), K = qA(y), M = Mm.g(v), L = ys.g(v), R = P.h(lA(v), e), $ = P.h(kA(v), e), N = yr.g(v), wa = JH(e, jA(v), N), Y = LH(e, wa, d, f, g, h), ga = Dh.h(h, new U(null, 2, 5, V, [Os, qu], null)), fa = Dh.h(h, new U(null, 2, 5, V, [Os, Au], null)), na = Dh.h(h, new U(null, 2, 5, V, [Os, Hm], null)), ua = Dh.h(h, new U(null, 2, 5, V, [Os, cl], null)), Ba = .5 * ua;
  a.lineWidth = ga;
  SG(a, pn.g(wH));
  for (var Da = A(Ng(ai, wa)), Ja = null, ra = 0, Ea = 0;;) {
    if (Ea < ra) {
      var fb = Ja.H(null, Ea), xa = O.j(fb, 0, null), ib = O.j(fb, 1, null);
      Y.Ce(null, a, xa);
      for (var Eb = A(bk.g(J(ib))), jb = null, yb = 0, Ab = 0;;) {
        if (Ab < yb) {
          var va = jb.H(null, Ab);
          Y.fd(null, a, xa, va);
          Ab += 1;
        } else {
          var Qd = A(Eb);
          if (Qd) {
            var md = Qd;
            if (T(md)) {
              var Vc = x(md), Dj = z(md), qf = Vc, qa = J(Vc), Eb = Dj, jb = qf, yb = qa
            } else {
              var bi = C(md);
              Y.fd(null, a, xa, bi);
              Eb = F(md);
              jb = null;
              yb = 0;
            }
            Ab = 0;
          } else {
            break;
          }
        }
      }
      Ea += 1;
    } else {
      var Xg = A(Da);
      if (Xg) {
        var ke = Xg;
        if (T(ke)) {
          var Me = x(ke), Ne = z(ke), hd = Me, Sb = J(Me), Da = Ne, Ja = hd, ra = Sb
        } else {
          var La = C(ke), $a = O.j(La, 0, null), vc = O.j(La, 1, null);
          Y.Ce(null, a, $a);
          for (var Oe = A(bk.g(J(vc))), le = null, Yg = 0, id = 0;;) {
            if (id < Yg) {
              var ci = le.H(null, id);
              Y.fd(null, a, $a, ci);
              id += 1;
            } else {
              var rf = A(Oe);
              if (rf) {
                var mc = rf;
                if (T(mc)) {
                  var Ec = x(mc), ud = z(mc), Kd = Ec, bg = J(Ec), Oe = ud, le = Kd, Yg = bg
                } else {
                  var Pe = C(mc);
                  Y.fd(null, a, $a, Pe);
                  Oe = F(mc);
                  le = null;
                  Yg = 0;
                }
                id = 0;
              } else {
                break;
              }
            }
          }
          Da = F(ke);
          Ja = null;
          ra = 0;
        }
        Ea = 0;
      } else {
        break;
      }
    }
  }
  for (var Xd = A(Ng(ai, wa)), Yd = null, me = 0, jd = 0;;) {
    if (jd < me) {
      var qb = Yd.H(null, jd), Fc = O.j(qb, 0, null), Qe = O.j(qb, 1, null), Re = Y.Be(null, Fc), cg = O.j(Re, 0, null), Se = O.j(Re, 1, null), ha = new U(null, 2, 5, V, [e, Fc], null), Te = function() {
        var a = ha;
        return D.g ? D.g(a) : D.call(null, a);
      }(), ne = function() {
        var a = ha;
        return K.g ? K.g(a) : K.call(null, a);
      }(), Ue = $e(L, ha), Tc = function() {
        var a = $e(M, ha);
        return q(a) ? a : Ue;
      }(), Uc = q(Tc) ? sc(Tc) : null, nc = Bh.h(function(a, b, c, d, e, f, g, h, l, p, s, t, v, y, N, B, M, L, D, H, K, R, re, Y, $) {
        return function(a) {
          return GH(a, $, D);
        };
      }(Xd, Yd, me, jd, Re, cg, Se, ha, Te, ne, Ue, Tc, Uc, qb, Fc, Qe, l, p, s, t, v, B, y, D, H, K, M, L, R, $, N, wa, Y, ga, fa, na, ua, Ba), Qe), Tb = function(a, b, c, d, e, f, g, h, l, p, s, t, v, y, N, B, M, L, D) {
        return function(a) {
          var b = new U(null, 2, 5, V, [tn, ir], null);
          a = a.g ? a.g(b) : a.call(null, b);
          return J(a) >= D;
        };
      }(Xd, Yd, me, jd, Re, cg, Se, ha, Te, ne, Ue, Tc, Uc, nc, qb, Fc, Qe, l, p, s, t, v, B, y, D, H, K, M, L, R, $, N, wa, Y, ga, fa, na, ua, Ba), oe = q(function() {
        var a = Te;
        return q(a) ? ne : a;
      }()) ? Eq : q(ne) ? ft : q(Te) ? ir : Wk;
      if (q(Te)) {
        var di = a;
        SG(di, ir.g(wH));
        di.lineWidth = 2;
        Y.Ce(null, a, Fc);
      }
      if (q(Tc)) {
        var sf = a;
        RG(sf, Cm.g(wH));
        JG(sf);
        lH(sf, cg, Se, fa + 8);
        sf.fill();
      }
      var vd = a;
      RG(vd, function() {
        var a = oe;
        return wH.g ? wH.g(a) : wH.call(null, a);
      }());
      SG(vd, "black");
      vd.lineWidth = 1;
      JG(vd);
      lH(vd, cg, Se, fa);
      MG(vd);
      vd.fill();
      RG(a, "black");
      QG(a, new n(null, 3, [Fu, "cell " + u.g(Fc) + u.g(q(Tc) ? "   (learning on " + u.g(q(Uc) ? "segment " + u.g(Uc) : "new segment") + u.g(q(Ue) ? " alternatively" : null) + ")" : null), Ys, cg, Xk, Se - fa - 5], null));
      for (var tf = A(Ng(ai, nc)), Zg = null, ei = 0, uf = 0;;) {
        if (uf < ei) {
          var vf = Zg.H(null, uf), gc = O.j(vf, 0, null), Wa = O.j(vf, 1, null), Zd = Y.Hd(null, Fc, gc), oc = O.j(Zd, 0, null), Gc = O.j(Zd, 1, null), $d = J(function() {
            var a = new U(null, 2, 5, V, [tn, ir], null);
            return Wa.g ? Wa.g(a) : Wa.call(null, a);
          }()), dg = $d + J(function() {
            var a = new U(null, 2, 5, V, [tn, Wk], null);
            return Wa.g ? Wa.g(a) : Wa.call(null, a);
          }()), Ve = J(function() {
            var a = new U(null, 2, 5, V, [im, ir], null);
            return Wa.g ? Wa.g(a) : Wa.call(null, a);
          }()), Jk = Ve + J(function() {
            var a = new U(null, 2, 5, V, [im, Wk], null);
            return Wa.g ? Wa.g(a) : Wa.call(null, a);
          }()), fi = function() {
            var a = $d / p;
            return 1 > a ? a : 1;
          }(), wd = function() {
            var a = Tc;
            return q(a) ? Fd.h(gc, Uc) : a;
          }(), We = mH(oc, Gc, ua, na), $g = mH(oc, Gc, ua + 8, na + 8);
          if (q(wd)) {
            var ah = a;
            RG(ah, Cm.g(wH));
            PG(ah, $g);
          }
          var wc = a;
          TG(wc, 1);
          SG(wc, "black");
          wc.lineWidth = 1;
          OG(wc, We);
          RG(wc, "white");
          PG(wc, We);
          TG(wc, fi);
          RG(wc, ir.g(wH));
          PG(wc, We);
          TG(wc, 1);
          if (Tb(Wa)) {
            var eg = a;
            SG(eg, ir.g(wH));
            eg.lineWidth = 2;
            Y.fd(null, a, Fc, gc);
          }
          RG(a, "black");
          QG(a, new n(null, 3, [Fu, "[" + u.g(gc) + "],  active " + u.g($d) + " / " + u.g(dg) + " conn. (" + u.g(Ve) + " / " + u.g(Jk) + " disconn.)", Ys, oc + 5 + Ba, Xk, Gc], null));
          a.lineWidth = 1;
          var ae = Dh.h(h, new U(null, 2, 5, V, [tm, Vt], null)), wf = Dh.h(h, new U(null, 2, 5, V, [tm, ir], null)), gi = Dh.h(h, new U(null, 2, 5, V, [tm, Wk], null)), xf = Dh.h(h, new U(null, 2, 5, V, [tm, im], null)), pe = Dh.h(h, new U(null, 2, 5, V, [tm, er], null));
          if (q(function() {
            var a = Fd.h(pe, Vp);
            return a ? a : (a = Fd.h(pe, lq)) ? wd : a;
          }())) {
            for (var Ld = A(wg.h(q(gi) ? new U(null, 1, 5, V, [Ht], null) : null, q(wf) ? new U(null, 1, 5, V, [ir], null) : null)), fg = null, gg = 0, qe = 0;;) {
              if (qe < gg) {
                for (var kd = fg.H(null, qe), bh = A(wg.h(q(xf) ? new U(null, 1, 5, V, [im], null) : null, new U(null, 1, 5, V, [tn], null))), ch = null, hg = 0, ig = 0;;) {
                  if (ig < hg) {
                    var Nn = ch.H(null, ig), lm = function() {
                      var a = new U(null, 2, 5, V, [Nn, kd], null);
                      return Wa.g ? Wa.g(a) : Wa.call(null, a);
                    }();
                    SG(a, function() {
                      var a = kd;
                      return wH.g ? wH.g(a) : wH.call(null, a);
                    }());
                    for (var dh = A(lm), yf = null, jg = 0, eh = 0;;) {
                      if (eh < jg) {
                        var fh = yf.H(null, eh), Kk = O.j(fh, 0, null), On = O.j(Kk, 0, null);
                        O.j(Kk, 1, null);
                        var Pn = O.j(fh, 1, null), mm = iH(d, On, f + 1), nm = O.j(mm, 0, null), re = O.j(mm, 1, null), Lk = a;
                        TG(Lk, q(ae) ? Pn : 1);
                        JG(Lk);
                        Lk.moveTo(oc, Gc);
                        Lk.lineTo(nm + 1, re);
                        MG(Lk);
                        eh += 1;
                      } else {
                        var Qn = A(dh);
                        if (Qn) {
                          var Mk = Qn;
                          if (T(Mk)) {
                            var Rn = x(Mk), ow = z(Mk), pw = Rn, Nk = J(Rn), dh = ow, yf = pw, jg = Nk
                          } else {
                            var Sn = C(Mk), Ej = O.j(Sn, 0, null), Lr = O.j(Ej, 0, null);
                            O.j(Ej, 1, null);
                            var qw = O.j(Sn, 1, null), Mr = iH(d, Lr, f + 1), rw = O.j(Mr, 0, null), om = O.j(Mr, 1, null), Fj = a;
                            TG(Fj, q(ae) ? qw : 1);
                            JG(Fj);
                            Fj.moveTo(oc, Gc);
                            Fj.lineTo(rw + 1, om);
                            MG(Fj);
                            dh = F(Mk);
                            yf = null;
                            jg = 0;
                          }
                          eh = 0;
                        } else {
                          break;
                        }
                      }
                    }
                    TG(a, 1);
                    ig += 1;
                  } else {
                    var Ok = A(bh);
                    if (Ok) {
                      var Pk = Ok;
                      if (T(Pk)) {
                        var Tn = x(Pk), Nr = z(Pk), Or = Tn, Un = J(Tn), bh = Nr, ch = Or, hg = Un
                      } else {
                        var Vn = C(Pk), Wn = function() {
                          var a = new U(null, 2, 5, V, [Vn, kd], null);
                          return Wa.g ? Wa.g(a) : Wa.call(null, a);
                        }();
                        SG(a, function() {
                          var a = kd;
                          return wH.g ? wH.g(a) : wH.call(null, a);
                        }());
                        for (var hi = A(Wn), pm = null, Xn = 0, Qk = 0;;) {
                          if (Qk < Xn) {
                            var Yn = pm.H(null, Qk), Pr = O.j(Yn, 0, null), Qr = O.j(Pr, 0, null);
                            O.j(Pr, 1, null);
                            var sw = O.j(Yn, 1, null), Rr = iH(d, Qr, f + 1), Rk = O.j(Rr, 0, null), Sr = O.j(Rr, 1, null), kg = a;
                            TG(kg, q(ae) ? sw : 1);
                            JG(kg);
                            kg.moveTo(oc, Gc);
                            kg.lineTo(Rk + 1, Sr);
                            MG(kg);
                            Qk += 1;
                          } else {
                            var Zn = A(hi);
                            if (Zn) {
                              var Sk = Zn;
                              if (T(Sk)) {
                                var Tr = x(Sk), tw = z(Sk), Ur = Tr, uw = J(Tr), hi = tw, pm = Ur, Xn = uw
                              } else {
                                var Vr = C(Sk), $n = O.j(Vr, 0, null), vw = O.j($n, 0, null);
                                O.j($n, 1, null);
                                var Wr = O.j(Vr, 1, null), Xr = iH(d, vw, f + 1), ww = O.j(Xr, 0, null), Tk = O.j(Xr, 1, null), Mn = a;
                                TG(Mn, q(ae) ? Wr : 1);
                                JG(Mn);
                                Mn.moveTo(oc, Gc);
                                Mn.lineTo(ww + 1, Tk);
                                MG(Mn);
                                hi = F(Sk);
                                pm = null;
                                Xn = 0;
                              }
                              Qk = 0;
                            } else {
                              break;
                            }
                          }
                        }
                        TG(a, 1);
                        bh = F(Pk);
                        ch = null;
                        hg = 0;
                      }
                      ig = 0;
                    } else {
                      break;
                    }
                  }
                }
                qe += 1;
              } else {
                var IC = A(Ld);
                if (IC) {
                  var ao = IC;
                  if (T(ao)) {
                    var JC = x(ao), iM = z(ao), jM = JC, kM = J(JC), Ld = iM, fg = jM, gg = kM
                  } else {
                    for (var $r = C(ao), xw = A(wg.h(q(xf) ? new U(null, 1, 5, V, [im], null) : null, new U(null, 1, 5, V, [tn], null))), yw = null, zw = 0, bo = 0;;) {
                      if (bo < zw) {
                        var as = yw.H(null, bo), lM = function() {
                          var a = new U(null, 2, 5, V, [as, $r], null);
                          return Wa.g ? Wa.g(a) : Wa.call(null, a);
                        }();
                        SG(a, function() {
                          var a = $r;
                          return wH.g ? wH.g(a) : wH.call(null, a);
                        }());
                        for (var Aw = A(lM), Bw = null, Cw = 0, co = 0;;) {
                          if (co < Cw) {
                            var KC = Bw.H(null, co), LC = O.j(KC, 0, null), bs = O.j(LC, 0, null);
                            O.j(LC, 1, null);
                            var mM = O.j(KC, 1, null), MC = iH(d, bs, f + 1), nM = O.j(MC, 0, null), oM = O.j(MC, 1, null), eo = a;
                            TG(eo, q(ae) ? mM : 1);
                            JG(eo);
                            eo.moveTo(oc, Gc);
                            eo.lineTo(nM + 1, oM);
                            MG(eo);
                            co += 1;
                          } else {
                            var NC = A(Aw);
                            if (NC) {
                              var Gj = NC;
                              if (T(Gj)) {
                                var OC = x(Gj), pM = z(Gj), qM = OC, rM = J(OC), Aw = pM, Bw = qM, Cw = rM
                              } else {
                                var PC = C(Gj), QC = O.j(PC, 0, null), sM = O.j(QC, 0, null);
                                O.j(QC, 1, null);
                                var cs = O.j(PC, 1, null), RC = iH(d, sM, f + 1), tM = O.j(RC, 0, null), uM = O.j(RC, 1, null), fo = a;
                                TG(fo, q(ae) ? cs : 1);
                                JG(fo);
                                fo.moveTo(oc, Gc);
                                fo.lineTo(tM + 1, uM);
                                MG(fo);
                                Aw = F(Gj);
                                Bw = null;
                                Cw = 0;
                              }
                              co = 0;
                            } else {
                              break;
                            }
                          }
                        }
                        TG(a, 1);
                        bo += 1;
                      } else {
                        var SC = A(xw);
                        if (SC) {
                          var go = SC;
                          if (T(go)) {
                            var TC = x(go), vM = z(go), wM = TC, xM = J(TC), xw = vM, yw = wM, zw = xM
                          } else {
                            var yM = C(go), zM = function() {
                              var a = new U(null, 2, 5, V, [yM, $r], null);
                              return Wa.g ? Wa.g(a) : Wa.call(null, a);
                            }();
                            SG(a, function() {
                              var a = $r;
                              return wH.g ? wH.g(a) : wH.call(null, a);
                            }());
                            for (var Dw = A(zM), Ew = null, Fw = 0, ho = 0;;) {
                              if (ho < Fw) {
                                var UC = Ew.H(null, ho), VC = O.j(UC, 0, null), AM = O.j(VC, 0, null);
                                O.j(VC, 1, null);
                                var BM = O.j(UC, 1, null), WC = iH(d, AM, f + 1), CM = O.j(WC, 0, null), DM = O.j(WC, 1, null), io = a;
                                TG(io, q(ae) ? BM : 1);
                                JG(io);
                                io.moveTo(oc, Gc);
                                io.lineTo(CM + 1, DM);
                                MG(io);
                                ho += 1;
                              } else {
                                var XC = A(Dw);
                                if (XC) {
                                  var jo = XC;
                                  if (T(jo)) {
                                    var YC = x(jo), EM = z(jo), FM = YC, GM = J(YC), Dw = EM, Ew = FM, Fw = GM
                                  } else {
                                    var ZC = C(jo), $C = O.j(ZC, 0, null), HM = O.j($C, 0, null);
                                    O.j($C, 1, null);
                                    var IM = O.j(ZC, 1, null), aD = iH(d, HM, f + 1), JM = O.j(aD, 0, null), KM = O.j(aD, 1, null), ko = a;
                                    TG(ko, q(ae) ? IM : 1);
                                    JG(ko);
                                    ko.moveTo(oc, Gc);
                                    ko.lineTo(JM + 1, KM);
                                    MG(ko);
                                    Dw = F(jo);
                                    Ew = null;
                                    Fw = 0;
                                  }
                                  ho = 0;
                                } else {
                                  break;
                                }
                              }
                            }
                            TG(a, 1);
                            xw = F(go);
                            yw = null;
                            zw = 0;
                          }
                          bo = 0;
                        } else {
                          break;
                        }
                      }
                    }
                    Ld = F(ao);
                    fg = null;
                    gg = 0;
                  }
                  qe = 0;
                } else {
                  break;
                }
              }
            }
          }
          uf += 1;
        } else {
          var bD = A(tf);
          if (bD) {
            var lo = bD;
            if (T(lo)) {
              var cD = x(lo), LM = z(lo), MM = cD, NM = J(cD), tf = LM, Zg = MM, ei = NM
            } else {
              var dD = C(lo), ds = O.j(dD, 0, null), Ub = O.j(dD, 1, null), eD = Y.Hd(null, Fc, ds), lg = O.j(eD, 0, null), mg = O.j(eD, 1, null), Gw = J(function() {
                var a = new U(null, 2, 5, V, [tn, ir], null);
                return Ub.g ? Ub.g(a) : Ub.call(null, a);
              }()), OM = Gw + J(function() {
                var a = new U(null, 2, 5, V, [tn, Wk], null);
                return Ub.g ? Ub.g(a) : Ub.call(null, a);
              }()), fD = J(function() {
                var a = new U(null, 2, 5, V, [im, ir], null);
                return Ub.g ? Ub.g(a) : Ub.call(null, a);
              }()), PM = fD + J(function() {
                var a = new U(null, 2, 5, V, [im, Wk], null);
                return Ub.g ? Ub.g(a) : Ub.call(null, a);
              }()), QM = function() {
                var a = Gw / p;
                return 1 > a ? a : 1;
              }(), gD = function() {
                var a = Tc;
                return q(a) ? Fd.h(ds, Uc) : a;
              }(), Hw = mH(lg, mg, ua, na), RM = mH(lg, mg, ua + 8, na + 8);
              if (q(gD)) {
                var hD = a;
                RG(hD, Cm.g(wH));
                PG(hD, RM);
              }
              var gh = a;
              TG(gh, 1);
              SG(gh, "black");
              gh.lineWidth = 1;
              OG(gh, Hw);
              RG(gh, "white");
              PG(gh, Hw);
              TG(gh, QM);
              RG(gh, ir.g(wH));
              PG(gh, Hw);
              TG(gh, 1);
              if (Tb(Ub)) {
                var iD = a;
                SG(iD, ir.g(wH));
                iD.lineWidth = 2;
                Y.fd(null, a, Fc, ds);
              }
              RG(a, "black");
              QG(a, new n(null, 3, [Fu, "[" + u.g(ds) + "],  active " + u.g(Gw) + " / " + u.g(OM) + " conn. (" + u.g(fD) + " / " + u.g(PM) + " disconn.)", Ys, lg + 5 + Ba, Xk, mg], null));
              a.lineWidth = 1;
              var Hj = Dh.h(h, new U(null, 2, 5, V, [tm, Vt], null)), SM = Dh.h(h, new U(null, 2, 5, V, [tm, ir], null)), TM = Dh.h(h, new U(null, 2, 5, V, [tm, Wk], null)), jD = Dh.h(h, new U(null, 2, 5, V, [tm, im], null)), kD = Dh.h(h, new U(null, 2, 5, V, [tm, er], null));
              if (q(function() {
                var a = Fd.h(kD, Vp);
                return a ? a : (a = Fd.h(kD, lq)) ? gD : a;
              }())) {
                for (var Iw = A(wg.h(q(TM) ? new U(null, 1, 5, V, [Ht], null) : null, q(SM) ? new U(null, 1, 5, V, [ir], null) : null)), Jw = null, Kw = 0, mo = 0;;) {
                  if (mo < Kw) {
                    for (var es = Jw.H(null, mo), Lw = A(wg.h(q(jD) ? new U(null, 1, 5, V, [im], null) : null, new U(null, 1, 5, V, [tn], null))), Mw = null, Nw = 0, no = 0;;) {
                      if (no < Nw) {
                        var UM = Mw.H(null, no), VM = function() {
                          var a = new U(null, 2, 5, V, [UM, es], null);
                          return Ub.g ? Ub.g(a) : Ub.call(null, a);
                        }();
                        SG(a, function() {
                          var a = es;
                          return wH.g ? wH.g(a) : wH.call(null, a);
                        }());
                        for (var Ow = A(VM), Pw = null, Qw = 0, oo = 0;;) {
                          if (oo < Qw) {
                            var lD = Pw.H(null, oo), mD = O.j(lD, 0, null), WM = O.j(mD, 0, null);
                            O.j(mD, 1, null);
                            var XM = O.j(lD, 1, null), nD = iH(d, WM, f + 1), YM = O.j(nD, 0, null), ZM = O.j(nD, 1, null), po = a;
                            TG(po, q(Hj) ? XM : 1);
                            JG(po);
                            po.moveTo(lg, mg);
                            po.lineTo(YM + 1, ZM);
                            MG(po);
                            oo += 1;
                          } else {
                            var oD = A(Ow);
                            if (oD) {
                              var qo = oD;
                              if (T(qo)) {
                                var pD = x(qo), $M = z(qo), aN = pD, bN = J(pD), Ow = $M, Pw = aN, Qw = bN
                              } else {
                                var qD = C(qo), rD = O.j(qD, 0, null), cN = O.j(rD, 0, null);
                                O.j(rD, 1, null);
                                var dN = O.j(qD, 1, null), sD = iH(d, cN, f + 1), eN = O.j(sD, 0, null), fN = O.j(sD, 1, null), ro = a;
                                TG(ro, q(Hj) ? dN : 1);
                                JG(ro);
                                ro.moveTo(lg, mg);
                                ro.lineTo(eN + 1, fN);
                                MG(ro);
                                Ow = F(qo);
                                Pw = null;
                                Qw = 0;
                              }
                              oo = 0;
                            } else {
                              break;
                            }
                          }
                        }
                        TG(a, 1);
                        no += 1;
                      } else {
                        var tD = A(Lw);
                        if (tD) {
                          var so = tD;
                          if (T(so)) {
                            var uD = x(so), gN = z(so), hN = uD, iN = J(uD), Lw = gN, Mw = hN, Nw = iN
                          } else {
                            var jN = C(so), kN = function() {
                              var a = new U(null, 2, 5, V, [jN, es], null);
                              return Ub.g ? Ub.g(a) : Ub.call(null, a);
                            }();
                            SG(a, function() {
                              var a = es;
                              return wH.g ? wH.g(a) : wH.call(null, a);
                            }());
                            for (var Rw = A(kN), Sw = null, Tw = 0, to = 0;;) {
                              if (to < Tw) {
                                var vD = Sw.H(null, to), wD = O.j(vD, 0, null), lN = O.j(wD, 0, null);
                                O.j(wD, 1, null);
                                var mN = O.j(vD, 1, null), xD = iH(d, lN, f + 1), nN = O.j(xD, 0, null), oN = O.j(xD, 1, null), uo = a;
                                TG(uo, q(Hj) ? mN : 1);
                                JG(uo);
                                uo.moveTo(lg, mg);
                                uo.lineTo(nN + 1, oN);
                                MG(uo);
                                to += 1;
                              } else {
                                var yD = A(Rw);
                                if (yD) {
                                  var vo = yD;
                                  if (T(vo)) {
                                    var zD = x(vo), pN = z(vo), qN = zD, rN = J(zD), Rw = pN, Sw = qN, Tw = rN
                                  } else {
                                    var AD = C(vo), BD = O.j(AD, 0, null), sN = O.j(BD, 0, null);
                                    O.j(BD, 1, null);
                                    var tN = O.j(AD, 1, null), CD = iH(d, sN, f + 1), uN = O.j(CD, 0, null), vN = O.j(CD, 1, null), wo = a;
                                    TG(wo, q(Hj) ? tN : 1);
                                    JG(wo);
                                    wo.moveTo(lg, mg);
                                    wo.lineTo(uN + 1, vN);
                                    MG(wo);
                                    Rw = F(vo);
                                    Sw = null;
                                    Tw = 0;
                                  }
                                  to = 0;
                                } else {
                                  break;
                                }
                              }
                            }
                            TG(a, 1);
                            Lw = F(so);
                            Mw = null;
                            Nw = 0;
                          }
                          no = 0;
                        } else {
                          break;
                        }
                      }
                    }
                    mo += 1;
                  } else {
                    var DD = A(Iw);
                    if (DD) {
                      var xo = DD;
                      if (T(xo)) {
                        var ED = x(xo), wN = z(xo), xN = ED, yN = J(ED), Iw = wN, Jw = xN, Kw = yN
                      } else {
                        for (var fs = C(xo), Uw = A(wg.h(q(jD) ? new U(null, 1, 5, V, [im], null) : null, new U(null, 1, 5, V, [tn], null))), Vw = null, Ww = 0, yo = 0;;) {
                          if (yo < Ww) {
                            var zN = Vw.H(null, yo), AN = function() {
                              var a = new U(null, 2, 5, V, [zN, fs], null);
                              return Ub.g ? Ub.g(a) : Ub.call(null, a);
                            }();
                            SG(a, function() {
                              var a = fs;
                              return wH.g ? wH.g(a) : wH.call(null, a);
                            }());
                            for (var Xw = A(AN), Yw = null, Zw = 0, zo = 0;;) {
                              if (zo < Zw) {
                                var FD = Yw.H(null, zo), GD = O.j(FD, 0, null), BN = O.j(GD, 0, null);
                                O.j(GD, 1, null);
                                var CN = O.j(FD, 1, null), HD = iH(d, BN, f + 1), DN = O.j(HD, 0, null), EN = O.j(HD, 1, null), Ao = a;
                                TG(Ao, q(Hj) ? CN : 1);
                                JG(Ao);
                                Ao.moveTo(lg, mg);
                                Ao.lineTo(DN + 1, EN);
                                MG(Ao);
                                zo += 1;
                              } else {
                                var ID = A(Xw);
                                if (ID) {
                                  var Bo = ID;
                                  if (T(Bo)) {
                                    var JD = x(Bo), FN = z(Bo), GN = JD, HN = J(JD), Xw = FN, Yw = GN, Zw = HN
                                  } else {
                                    var KD = C(Bo), LD = O.j(KD, 0, null), IN = O.j(LD, 0, null);
                                    O.j(LD, 1, null);
                                    var JN = O.j(KD, 1, null), MD = iH(d, IN, f + 1), KN = O.j(MD, 0, null), LN = O.j(MD, 1, null), Co = a;
                                    TG(Co, q(Hj) ? JN : 1);
                                    JG(Co);
                                    Co.moveTo(lg, mg);
                                    Co.lineTo(KN + 1, LN);
                                    MG(Co);
                                    Xw = F(Bo);
                                    Yw = null;
                                    Zw = 0;
                                  }
                                  zo = 0;
                                } else {
                                  break;
                                }
                              }
                            }
                            TG(a, 1);
                            yo += 1;
                          } else {
                            var ND = A(Uw);
                            if (ND) {
                              var Do = ND;
                              if (T(Do)) {
                                var OD = x(Do), MN = z(Do), NN = OD, ON = J(OD), Uw = MN, Vw = NN, Ww = ON
                              } else {
                                var PN = C(Do), QN = function() {
                                  var a = new U(null, 2, 5, V, [PN, fs], null);
                                  return Ub.g ? Ub.g(a) : Ub.call(null, a);
                                }();
                                SG(a, function() {
                                  var a = fs;
                                  return wH.g ? wH.g(a) : wH.call(null, a);
                                }());
                                for (var $w = A(QN), ax = null, bx = 0, Eo = 0;;) {
                                  if (Eo < bx) {
                                    var PD = ax.H(null, Eo), QD = O.j(PD, 0, null), RN = O.j(QD, 0, null);
                                    O.j(QD, 1, null);
                                    var SN = O.j(PD, 1, null), RD = iH(d, RN, f + 1), TN = O.j(RD, 0, null), UN = O.j(RD, 1, null), Fo = a;
                                    TG(Fo, q(Hj) ? SN : 1);
                                    JG(Fo);
                                    Fo.moveTo(lg, mg);
                                    Fo.lineTo(TN + 1, UN);
                                    MG(Fo);
                                    Eo += 1;
                                  } else {
                                    var SD = A($w);
                                    if (SD) {
                                      var Go = SD;
                                      if (T(Go)) {
                                        var TD = x(Go), VN = z(Go), WN = TD, XN = J(TD), $w = VN, ax = WN, bx = XN
                                      } else {
                                        var UD = C(Go), VD = O.j(UD, 0, null), YN = O.j(VD, 0, null);
                                        O.j(VD, 1, null);
                                        var ZN = O.j(UD, 1, null), WD = iH(d, YN, f + 1), $N = O.j(WD, 0, null), aO = O.j(WD, 1, null), Ho = a;
                                        TG(Ho, q(Hj) ? ZN : 1);
                                        JG(Ho);
                                        Ho.moveTo(lg, mg);
                                        Ho.lineTo($N + 1, aO);
                                        MG(Ho);
                                        $w = F(Go);
                                        ax = null;
                                        bx = 0;
                                      }
                                      Eo = 0;
                                    } else {
                                      break;
                                    }
                                  }
                                }
                                TG(a, 1);
                                Uw = F(Do);
                                Vw = null;
                                Ww = 0;
                              }
                              yo = 0;
                            } else {
                              break;
                            }
                          }
                        }
                        Iw = F(xo);
                        Jw = null;
                        Kw = 0;
                      }
                      mo = 0;
                    } else {
                      break;
                    }
                  }
                }
              }
              tf = F(lo);
              Zg = null;
              ei = 0;
            }
            uf = 0;
          } else {
            break;
          }
        }
      }
      jd += 1;
    } else {
      var gs = A(Xd);
      if (gs) {
        var Uk = gs;
        if (T(Uk)) {
          var XD = x(Uk), bO = z(Uk), cO = XD, dO = J(XD), Xd = bO, Yd = cO, me = dO
        } else {
          var hs = C(Uk), hh = O.j(hs, 0, null), cx = O.j(hs, 1, null), is = Y.Be(null, hh), Io = O.j(is, 0, null), Jo = O.j(is, 1, null), qm = new U(null, 2, 5, V, [e, hh], null), Ko = function() {
            var a = qm;
            return D.g ? D.g(a) : D.call(null, a);
          }(), js = function() {
            var a = qm;
            return K.g ? K.g(a) : K.call(null, a);
          }(), ks = $e(L, qm), Ij = function() {
            var a = $e(M, qm);
            return q(a) ? a : ks;
          }(), rm = q(Ij) ? sc(Ij) : null, YD = Bh.h(function(a, b, c, d, e, f, g, h, l, p, s, t, v, y, N, B, M, L, D, H, K, R, re, Y, $, wa, La) {
            return function(a) {
              return GH(a, La, K);
            };
          }(Xd, Yd, me, jd, is, Io, Jo, qm, Ko, js, ks, Ij, rm, hs, hh, cx, Uk, gs, l, p, s, t, v, B, y, D, H, K, M, L, R, $, N, wa, Y, ga, fa, na, ua, Ba), cx), ZD = function(a, b, c, d, e, f, g, h, l, p, s, t, v, y, N, B, M, L, D, H, K) {
            return function(a) {
              var b = new U(null, 2, 5, V, [tn, ir], null);
              a = a.g ? a.g(b) : a.call(null, b);
              return J(a) >= K;
            };
          }(Xd, Yd, me, jd, is, Io, Jo, qm, Ko, js, ks, Ij, rm, YD, hs, hh, cx, Uk, gs, l, p, s, t, v, B, y, D, H, K, M, L, R, $, N, wa, Y, ga, fa, na, ua, Ba), eO = q(function() {
            var a = Ko;
            return q(a) ? js : a;
          }()) ? Eq : q(js) ? ft : q(Ko) ? ir : Wk;
          if (q(Ko)) {
            var $D = a;
            SG($D, ir.g(wH));
            $D.lineWidth = 2;
            Y.Ce(null, a, hh);
          }
          if (q(Ij)) {
            var ls = a;
            RG(ls, Cm.g(wH));
            JG(ls);
            lH(ls, Io, Jo, fa + 8);
            ls.fill();
          }
          var Vk = a;
          RG(Vk, function() {
            var a = eO;
            return wH.g ? wH.g(a) : wH.call(null, a);
          }());
          SG(Vk, "black");
          Vk.lineWidth = 1;
          JG(Vk);
          lH(Vk, Io, Jo, fa);
          MG(Vk);
          Vk.fill();
          RG(a, "black");
          QG(a, new n(null, 3, [Fu, "cell " + u.g(hh) + u.g(q(Ij) ? "   (learning on " + u.g(q(rm) ? "segment " + u.g(rm) : "new segment") + u.g(q(ks) ? " alternatively" : null) + ")" : null), Ys, Io, Xk, Jo - fa - 5], null));
          for (var dx = A(Ng(ai, YD)), ex = null, fx = 0, Lo = 0;;) {
            if (Lo < fx) {
              var aE = ex.H(null, Lo), ms = O.j(aE, 0, null), Vb = O.j(aE, 1, null), bE = Y.Hd(null, hh, ms), ng = O.j(bE, 0, null), og = O.j(bE, 1, null), gx = J(function() {
                var a = new U(null, 2, 5, V, [tn, ir], null);
                return Vb.g ? Vb.g(a) : Vb.call(null, a);
              }()), fO = gx + J(function() {
                var a = new U(null, 2, 5, V, [tn, Wk], null);
                return Vb.g ? Vb.g(a) : Vb.call(null, a);
              }()), cE = J(function() {
                var a = new U(null, 2, 5, V, [im, ir], null);
                return Vb.g ? Vb.g(a) : Vb.call(null, a);
              }()), gO = cE + J(function() {
                var a = new U(null, 2, 5, V, [im, Wk], null);
                return Vb.g ? Vb.g(a) : Vb.call(null, a);
              }()), hO = function() {
                var a = gx / p;
                return 1 > a ? a : 1;
              }(), dE = function() {
                var a = Ij;
                return q(a) ? Fd.h(ms, rm) : a;
              }(), hx = mH(ng, og, ua, na), iO = mH(ng, og, ua + 8, na + 8);
              if (q(dE)) {
                var eE = a;
                RG(eE, Cm.g(wH));
                PG(eE, iO);
              }
              var ih = a;
              TG(ih, 1);
              SG(ih, "black");
              ih.lineWidth = 1;
              OG(ih, hx);
              RG(ih, "white");
              PG(ih, hx);
              TG(ih, hO);
              RG(ih, ir.g(wH));
              PG(ih, hx);
              TG(ih, 1);
              if (ZD(Vb)) {
                var fE = a;
                SG(fE, ir.g(wH));
                fE.lineWidth = 2;
                Y.fd(null, a, hh, ms);
              }
              RG(a, "black");
              QG(a, new n(null, 3, [Fu, "[" + u.g(ms) + "],  active " + u.g(gx) + " / " + u.g(fO) + " conn. (" + u.g(cE) + " / " + u.g(gO) + " disconn.)", Ys, ng + 5 + Ba, Xk, og], null));
              a.lineWidth = 1;
              var Jj = Dh.h(h, new U(null, 2, 5, V, [tm, Vt], null)), jO = Dh.h(h, new U(null, 2, 5, V, [tm, ir], null)), kO = Dh.h(h, new U(null, 2, 5, V, [tm, Wk], null)), gE = Dh.h(h, new U(null, 2, 5, V, [tm, im], null)), hE = Dh.h(h, new U(null, 2, 5, V, [tm, er], null));
              if (q(function() {
                var a = Fd.h(hE, Vp);
                return a ? a : (a = Fd.h(hE, lq)) ? dE : a;
              }())) {
                for (var ix = A(wg.h(q(kO) ? new U(null, 1, 5, V, [Ht], null) : null, q(jO) ? new U(null, 1, 5, V, [ir], null) : null)), jx = null, kx = 0, Mo = 0;;) {
                  if (Mo < kx) {
                    for (var ns = jx.H(null, Mo), lx = A(wg.h(q(gE) ? new U(null, 1, 5, V, [im], null) : null, new U(null, 1, 5, V, [tn], null))), mx = null, nx = 0, No = 0;;) {
                      if (No < nx) {
                        var lO = mx.H(null, No), mO = function() {
                          var a = new U(null, 2, 5, V, [lO, ns], null);
                          return Vb.g ? Vb.g(a) : Vb.call(null, a);
                        }();
                        SG(a, function() {
                          var a = ns;
                          return wH.g ? wH.g(a) : wH.call(null, a);
                        }());
                        for (var ox = A(mO), px = null, qx = 0, Oo = 0;;) {
                          if (Oo < qx) {
                            var iE = px.H(null, Oo), jE = O.j(iE, 0, null), nO = O.j(jE, 0, null);
                            O.j(jE, 1, null);
                            var oO = O.j(iE, 1, null), kE = iH(d, nO, f + 1), pO = O.j(kE, 0, null), qO = O.j(kE, 1, null), Po = a;
                            TG(Po, q(Jj) ? oO : 1);
                            JG(Po);
                            Po.moveTo(ng, og);
                            Po.lineTo(pO + 1, qO);
                            MG(Po);
                            Oo += 1;
                          } else {
                            var lE = A(ox);
                            if (lE) {
                              var Qo = lE;
                              if (T(Qo)) {
                                var mE = x(Qo), rO = z(Qo), sO = mE, tO = J(mE), ox = rO, px = sO, qx = tO
                              } else {
                                var nE = C(Qo), oE = O.j(nE, 0, null), uO = O.j(oE, 0, null);
                                O.j(oE, 1, null);
                                var vO = O.j(nE, 1, null), pE = iH(d, uO, f + 1), wO = O.j(pE, 0, null), xO = O.j(pE, 1, null), Ro = a;
                                TG(Ro, q(Jj) ? vO : 1);
                                JG(Ro);
                                Ro.moveTo(ng, og);
                                Ro.lineTo(wO + 1, xO);
                                MG(Ro);
                                ox = F(Qo);
                                px = null;
                                qx = 0;
                              }
                              Oo = 0;
                            } else {
                              break;
                            }
                          }
                        }
                        TG(a, 1);
                        No += 1;
                      } else {
                        var qE = A(lx);
                        if (qE) {
                          var So = qE;
                          if (T(So)) {
                            var rE = x(So), yO = z(So), zO = rE, AO = J(rE), lx = yO, mx = zO, nx = AO
                          } else {
                            var BO = C(So), CO = function() {
                              var a = new U(null, 2, 5, V, [BO, ns], null);
                              return Vb.g ? Vb.g(a) : Vb.call(null, a);
                            }();
                            SG(a, function() {
                              var a = ns;
                              return wH.g ? wH.g(a) : wH.call(null, a);
                            }());
                            for (var rx = A(CO), sx = null, tx = 0, To = 0;;) {
                              if (To < tx) {
                                var sE = sx.H(null, To), tE = O.j(sE, 0, null), DO = O.j(tE, 0, null);
                                O.j(tE, 1, null);
                                var EO = O.j(sE, 1, null), uE = iH(d, DO, f + 1), FO = O.j(uE, 0, null), GO = O.j(uE, 1, null), Uo = a;
                                TG(Uo, q(Jj) ? EO : 1);
                                JG(Uo);
                                Uo.moveTo(ng, og);
                                Uo.lineTo(FO + 1, GO);
                                MG(Uo);
                                To += 1;
                              } else {
                                var vE = A(rx);
                                if (vE) {
                                  var Vo = vE;
                                  if (T(Vo)) {
                                    var wE = x(Vo), HO = z(Vo), IO = wE, JO = J(wE), rx = HO, sx = IO, tx = JO
                                  } else {
                                    var xE = C(Vo), yE = O.j(xE, 0, null), KO = O.j(yE, 0, null);
                                    O.j(yE, 1, null);
                                    var LO = O.j(xE, 1, null), zE = iH(d, KO, f + 1), MO = O.j(zE, 0, null), NO = O.j(zE, 1, null), Wo = a;
                                    TG(Wo, q(Jj) ? LO : 1);
                                    JG(Wo);
                                    Wo.moveTo(ng, og);
                                    Wo.lineTo(MO + 1, NO);
                                    MG(Wo);
                                    rx = F(Vo);
                                    sx = null;
                                    tx = 0;
                                  }
                                  To = 0;
                                } else {
                                  break;
                                }
                              }
                            }
                            TG(a, 1);
                            lx = F(So);
                            mx = null;
                            nx = 0;
                          }
                          No = 0;
                        } else {
                          break;
                        }
                      }
                    }
                    Mo += 1;
                  } else {
                    var AE = A(ix);
                    if (AE) {
                      var Xo = AE;
                      if (T(Xo)) {
                        var BE = x(Xo), OO = z(Xo), PO = BE, QO = J(BE), ix = OO, jx = PO, kx = QO
                      } else {
                        for (var os = C(Xo), ux = A(wg.h(q(gE) ? new U(null, 1, 5, V, [im], null) : null, new U(null, 1, 5, V, [tn], null))), vx = null, wx = 0, Yo = 0;;) {
                          if (Yo < wx) {
                            var RO = vx.H(null, Yo), SO = function() {
                              var a = new U(null, 2, 5, V, [RO, os], null);
                              return Vb.g ? Vb.g(a) : Vb.call(null, a);
                            }();
                            SG(a, function() {
                              var a = os;
                              return wH.g ? wH.g(a) : wH.call(null, a);
                            }());
                            for (var xx = A(SO), yx = null, zx = 0, Zo = 0;;) {
                              if (Zo < zx) {
                                var CE = yx.H(null, Zo), DE = O.j(CE, 0, null), TO = O.j(DE, 0, null);
                                O.j(DE, 1, null);
                                var UO = O.j(CE, 1, null), EE = iH(d, TO, f + 1), VO = O.j(EE, 0, null), WO = O.j(EE, 1, null), $o = a;
                                TG($o, q(Jj) ? UO : 1);
                                JG($o);
                                $o.moveTo(ng, og);
                                $o.lineTo(VO + 1, WO);
                                MG($o);
                                Zo += 1;
                              } else {
                                var FE = A(xx);
                                if (FE) {
                                  var ap = FE;
                                  if (T(ap)) {
                                    var GE = x(ap), XO = z(ap), YO = GE, ZO = J(GE), xx = XO, yx = YO, zx = ZO
                                  } else {
                                    var HE = C(ap), IE = O.j(HE, 0, null), $O = O.j(IE, 0, null);
                                    O.j(IE, 1, null);
                                    var aP = O.j(HE, 1, null), JE = iH(d, $O, f + 1), bP = O.j(JE, 0, null), cP = O.j(JE, 1, null), bp = a;
                                    TG(bp, q(Jj) ? aP : 1);
                                    JG(bp);
                                    bp.moveTo(ng, og);
                                    bp.lineTo(bP + 1, cP);
                                    MG(bp);
                                    xx = F(ap);
                                    yx = null;
                                    zx = 0;
                                  }
                                  Zo = 0;
                                } else {
                                  break;
                                }
                              }
                            }
                            TG(a, 1);
                            Yo += 1;
                          } else {
                            var KE = A(ux);
                            if (KE) {
                              var cp = KE;
                              if (T(cp)) {
                                var LE = x(cp), dP = z(cp), eP = LE, fP = J(LE), ux = dP, vx = eP, wx = fP
                              } else {
                                var gP = C(cp), hP = function() {
                                  var a = new U(null, 2, 5, V, [gP, os], null);
                                  return Vb.g ? Vb.g(a) : Vb.call(null, a);
                                }();
                                SG(a, function() {
                                  var a = os;
                                  return wH.g ? wH.g(a) : wH.call(null, a);
                                }());
                                for (var Ax = A(hP), Bx = null, Cx = 0, dp = 0;;) {
                                  if (dp < Cx) {
                                    var ME = Bx.H(null, dp), NE = O.j(ME, 0, null), iP = O.j(NE, 0, null);
                                    O.j(NE, 1, null);
                                    var jP = O.j(ME, 1, null), OE = iH(d, iP, f + 1), kP = O.j(OE, 0, null), lP = O.j(OE, 1, null), ep = a;
                                    TG(ep, q(Jj) ? jP : 1);
                                    JG(ep);
                                    ep.moveTo(ng, og);
                                    ep.lineTo(kP + 1, lP);
                                    MG(ep);
                                    dp += 1;
                                  } else {
                                    var PE = A(Ax);
                                    if (PE) {
                                      var fp = PE;
                                      if (T(fp)) {
                                        var QE = x(fp), mP = z(fp), nP = QE, oP = J(QE), Ax = mP, Bx = nP, Cx = oP
                                      } else {
                                        var RE = C(fp), SE = O.j(RE, 0, null), pP = O.j(SE, 0, null);
                                        O.j(SE, 1, null);
                                        var qP = O.j(RE, 1, null), TE = iH(d, pP, f + 1), rP = O.j(TE, 0, null), sP = O.j(TE, 1, null), gp = a;
                                        TG(gp, q(Jj) ? qP : 1);
                                        JG(gp);
                                        gp.moveTo(ng, og);
                                        gp.lineTo(rP + 1, sP);
                                        MG(gp);
                                        Ax = F(fp);
                                        Bx = null;
                                        Cx = 0;
                                      }
                                      dp = 0;
                                    } else {
                                      break;
                                    }
                                  }
                                }
                                TG(a, 1);
                                ux = F(cp);
                                vx = null;
                                wx = 0;
                              }
                              Yo = 0;
                            } else {
                              break;
                            }
                          }
                        }
                        ix = F(Xo);
                        jx = null;
                        kx = 0;
                      }
                      Mo = 0;
                    } else {
                      break;
                    }
                  }
                }
              }
              Lo += 1;
            } else {
              var UE = A(dx);
              if (UE) {
                var hp = UE;
                if (T(hp)) {
                  var VE = x(hp), tP = z(hp), uP = VE, vP = J(VE), dx = tP, ex = uP, fx = vP
                } else {
                  var WE = C(hp), ps = O.j(WE, 0, null), Wb = O.j(WE, 1, null), XE = Y.Hd(null, hh, ps), pg = O.j(XE, 0, null), qg = O.j(XE, 1, null), Dx = J(function() {
                    var a = new U(null, 2, 5, V, [tn, ir], null);
                    return Wb.g ? Wb.g(a) : Wb.call(null, a);
                  }()), wP = Dx + J(function() {
                    var a = new U(null, 2, 5, V, [tn, Wk], null);
                    return Wb.g ? Wb.g(a) : Wb.call(null, a);
                  }()), YE = J(function() {
                    var a = new U(null, 2, 5, V, [im, ir], null);
                    return Wb.g ? Wb.g(a) : Wb.call(null, a);
                  }()), xP = YE + J(function() {
                    var a = new U(null, 2, 5, V, [im, Wk], null);
                    return Wb.g ? Wb.g(a) : Wb.call(null, a);
                  }()), yP = function() {
                    var a = Dx / p;
                    return 1 > a ? a : 1;
                  }(), ZE = function() {
                    var a = Ij;
                    return q(a) ? Fd.h(ps, rm) : a;
                  }(), Ex = mH(pg, qg, ua, na), zP = mH(pg, qg, ua + 8, na + 8);
                  if (q(ZE)) {
                    var $E = a;
                    RG($E, Cm.g(wH));
                    PG($E, zP);
                  }
                  var jh = a;
                  TG(jh, 1);
                  SG(jh, "black");
                  jh.lineWidth = 1;
                  OG(jh, Ex);
                  RG(jh, "white");
                  PG(jh, Ex);
                  TG(jh, yP);
                  RG(jh, ir.g(wH));
                  PG(jh, Ex);
                  TG(jh, 1);
                  if (ZD(Wb)) {
                    var aF = a;
                    SG(aF, ir.g(wH));
                    aF.lineWidth = 2;
                    Y.fd(null, a, hh, ps);
                  }
                  RG(a, "black");
                  QG(a, new n(null, 3, [Fu, "[" + u.g(ps) + "],  active " + u.g(Dx) + " / " + u.g(wP) + " conn. (" + u.g(YE) + " / " + u.g(xP) + " disconn.)", Ys, pg + 5 + Ba, Xk, qg], null));
                  a.lineWidth = 1;
                  var Kj = Dh.h(h, new U(null, 2, 5, V, [tm, Vt], null)), AP = Dh.h(h, new U(null, 2, 5, V, [tm, ir], null)), BP = Dh.h(h, new U(null, 2, 5, V, [tm, Wk], null)), bF = Dh.h(h, new U(null, 2, 5, V, [tm, im], null)), cF = Dh.h(h, new U(null, 2, 5, V, [tm, er], null));
                  if (q(function() {
                    var a = Fd.h(cF, Vp);
                    return a ? a : (a = Fd.h(cF, lq)) ? ZE : a;
                  }())) {
                    for (var Fx = A(wg.h(q(BP) ? new U(null, 1, 5, V, [Ht], null) : null, q(AP) ? new U(null, 1, 5, V, [ir], null) : null)), Gx = null, Hx = 0, ip = 0;;) {
                      if (ip < Hx) {
                        for (var qs = Gx.H(null, ip), Ix = A(wg.h(q(bF) ? new U(null, 1, 5, V, [im], null) : null, new U(null, 1, 5, V, [tn], null))), Jx = null, Kx = 0, jp = 0;;) {
                          if (jp < Kx) {
                            var CP = Jx.H(null, jp), DP = function() {
                              var a = new U(null, 2, 5, V, [CP, qs], null);
                              return Wb.g ? Wb.g(a) : Wb.call(null, a);
                            }();
                            SG(a, function() {
                              var a = qs;
                              return wH.g ? wH.g(a) : wH.call(null, a);
                            }());
                            for (var Lx = A(DP), Mx = null, Nx = 0, kp = 0;;) {
                              if (kp < Nx) {
                                var dF = Mx.H(null, kp), eF = O.j(dF, 0, null), EP = O.j(eF, 0, null);
                                O.j(eF, 1, null);
                                var FP = O.j(dF, 1, null), fF = iH(d, EP, f + 1), GP = O.j(fF, 0, null), HP = O.j(fF, 1, null), lp = a;
                                TG(lp, q(Kj) ? FP : 1);
                                JG(lp);
                                lp.moveTo(pg, qg);
                                lp.lineTo(GP + 1, HP);
                                MG(lp);
                                kp += 1;
                              } else {
                                var gF = A(Lx);
                                if (gF) {
                                  var mp = gF;
                                  if (T(mp)) {
                                    var hF = x(mp), IP = z(mp), JP = hF, KP = J(hF), Lx = IP, Mx = JP, Nx = KP
                                  } else {
                                    var iF = C(mp), jF = O.j(iF, 0, null), LP = O.j(jF, 0, null);
                                    O.j(jF, 1, null);
                                    var MP = O.j(iF, 1, null), kF = iH(d, LP, f + 1), NP = O.j(kF, 0, null), OP = O.j(kF, 1, null), np = a;
                                    TG(np, q(Kj) ? MP : 1);
                                    JG(np);
                                    np.moveTo(pg, qg);
                                    np.lineTo(NP + 1, OP);
                                    MG(np);
                                    Lx = F(mp);
                                    Mx = null;
                                    Nx = 0;
                                  }
                                  kp = 0;
                                } else {
                                  break;
                                }
                              }
                            }
                            TG(a, 1);
                            jp += 1;
                          } else {
                            var lF = A(Ix);
                            if (lF) {
                              var op = lF;
                              if (T(op)) {
                                var mF = x(op), PP = z(op), QP = mF, RP = J(mF), Ix = PP, Jx = QP, Kx = RP
                              } else {
                                var SP = C(op), TP = function() {
                                  var a = new U(null, 2, 5, V, [SP, qs], null);
                                  return Wb.g ? Wb.g(a) : Wb.call(null, a);
                                }();
                                SG(a, function() {
                                  var a = qs;
                                  return wH.g ? wH.g(a) : wH.call(null, a);
                                }());
                                for (var Ox = A(TP), Px = null, Qx = 0, pp = 0;;) {
                                  if (pp < Qx) {
                                    var nF = Px.H(null, pp), oF = O.j(nF, 0, null), UP = O.j(oF, 0, null);
                                    O.j(oF, 1, null);
                                    var VP = O.j(nF, 1, null), pF = iH(d, UP, f + 1), WP = O.j(pF, 0, null), XP = O.j(pF, 1, null), qp = a;
                                    TG(qp, q(Kj) ? VP : 1);
                                    JG(qp);
                                    qp.moveTo(pg, qg);
                                    qp.lineTo(WP + 1, XP);
                                    MG(qp);
                                    pp += 1;
                                  } else {
                                    var qF = A(Ox);
                                    if (qF) {
                                      var rp = qF;
                                      if (T(rp)) {
                                        var rF = x(rp), YP = z(rp), ZP = rF, $P = J(rF), Ox = YP, Px = ZP, Qx = $P
                                      } else {
                                        var sF = C(rp), tF = O.j(sF, 0, null), aQ = O.j(tF, 0, null);
                                        O.j(tF, 1, null);
                                        var bQ = O.j(sF, 1, null), uF = iH(d, aQ, f + 1), cQ = O.j(uF, 0, null), dQ = O.j(uF, 1, null), sp = a;
                                        TG(sp, q(Kj) ? bQ : 1);
                                        JG(sp);
                                        sp.moveTo(pg, qg);
                                        sp.lineTo(cQ + 1, dQ);
                                        MG(sp);
                                        Ox = F(rp);
                                        Px = null;
                                        Qx = 0;
                                      }
                                      pp = 0;
                                    } else {
                                      break;
                                    }
                                  }
                                }
                                TG(a, 1);
                                Ix = F(op);
                                Jx = null;
                                Kx = 0;
                              }
                              jp = 0;
                            } else {
                              break;
                            }
                          }
                        }
                        ip += 1;
                      } else {
                        var vF = A(Fx);
                        if (vF) {
                          var tp = vF;
                          if (T(tp)) {
                            var wF = x(tp), eQ = z(tp), fQ = wF, gQ = J(wF), Fx = eQ, Gx = fQ, Hx = gQ
                          } else {
                            for (var rs = C(tp), Rx = A(wg.h(q(bF) ? new U(null, 1, 5, V, [im], null) : null, new U(null, 1, 5, V, [tn], null))), Sx = null, Tx = 0, up = 0;;) {
                              if (up < Tx) {
                                var hQ = Sx.H(null, up), iQ = function() {
                                  var a = new U(null, 2, 5, V, [hQ, rs], null);
                                  return Wb.g ? Wb.g(a) : Wb.call(null, a);
                                }();
                                SG(a, function() {
                                  var a = rs;
                                  return wH.g ? wH.g(a) : wH.call(null, a);
                                }());
                                for (var Ux = A(iQ), Vx = null, Wx = 0, vp = 0;;) {
                                  if (vp < Wx) {
                                    var xF = Vx.H(null, vp), yF = O.j(xF, 0, null), jQ = O.j(yF, 0, null);
                                    O.j(yF, 1, null);
                                    var kQ = O.j(xF, 1, null), zF = iH(d, jQ, f + 1), lQ = O.j(zF, 0, null), mQ = O.j(zF, 1, null), wp = a;
                                    TG(wp, q(Kj) ? kQ : 1);
                                    JG(wp);
                                    wp.moveTo(pg, qg);
                                    wp.lineTo(lQ + 1, mQ);
                                    MG(wp);
                                    vp += 1;
                                  } else {
                                    var AF = A(Ux);
                                    if (AF) {
                                      var xp = AF;
                                      if (T(xp)) {
                                        var BF = x(xp), nQ = z(xp), oQ = BF, pQ = J(BF), Ux = nQ, Vx = oQ, Wx = pQ
                                      } else {
                                        var CF = C(xp), DF = O.j(CF, 0, null), qQ = O.j(DF, 0, null);
                                        O.j(DF, 1, null);
                                        var rQ = O.j(CF, 1, null), EF = iH(d, qQ, f + 1), sQ = O.j(EF, 0, null), tQ = O.j(EF, 1, null), yp = a;
                                        TG(yp, q(Kj) ? rQ : 1);
                                        JG(yp);
                                        yp.moveTo(pg, qg);
                                        yp.lineTo(sQ + 1, tQ);
                                        MG(yp);
                                        Ux = F(xp);
                                        Vx = null;
                                        Wx = 0;
                                      }
                                      vp = 0;
                                    } else {
                                      break;
                                    }
                                  }
                                }
                                TG(a, 1);
                                up += 1;
                              } else {
                                var FF = A(Rx);
                                if (FF) {
                                  var zp = FF;
                                  if (T(zp)) {
                                    var GF = x(zp), uQ = z(zp), vQ = GF, wQ = J(GF), Rx = uQ, Sx = vQ, Tx = wQ
                                  } else {
                                    var xQ = C(zp), yQ = function() {
                                      var a = new U(null, 2, 5, V, [xQ, rs], null);
                                      return Wb.g ? Wb.g(a) : Wb.call(null, a);
                                    }();
                                    SG(a, function() {
                                      var a = rs;
                                      return wH.g ? wH.g(a) : wH.call(null, a);
                                    }());
                                    for (var Xx = A(yQ), Yx = null, Zx = 0, Ap = 0;;) {
                                      if (Ap < Zx) {
                                        var HF = Yx.H(null, Ap), IF = O.j(HF, 0, null), zQ = O.j(IF, 0, null);
                                        O.j(IF, 1, null);
                                        var AQ = O.j(HF, 1, null), JF = iH(d, zQ, f + 1), BQ = O.j(JF, 0, null), CQ = O.j(JF, 1, null), Bp = a;
                                        TG(Bp, q(Kj) ? AQ : 1);
                                        JG(Bp);
                                        Bp.moveTo(pg, qg);
                                        Bp.lineTo(BQ + 1, CQ);
                                        MG(Bp);
                                        Ap += 1;
                                      } else {
                                        var KF = A(Xx);
                                        if (KF) {
                                          var Cp = KF;
                                          if (T(Cp)) {
                                            var LF = x(Cp), DQ = z(Cp), EQ = LF, FQ = J(LF), Xx = DQ, Yx = EQ, Zx = FQ
                                          } else {
                                            var MF = C(Cp), NF = O.j(MF, 0, null), GQ = O.j(NF, 0, null);
                                            O.j(NF, 1, null);
                                            var HQ = O.j(MF, 1, null), OF = iH(d, GQ, f + 1), IQ = O.j(OF, 0, null), JQ = O.j(OF, 1, null), Dp = a;
                                            TG(Dp, q(Kj) ? HQ : 1);
                                            JG(Dp);
                                            Dp.moveTo(pg, qg);
                                            Dp.lineTo(IQ + 1, JQ);
                                            MG(Dp);
                                            Xx = F(Cp);
                                            Yx = null;
                                            Zx = 0;
                                          }
                                          Ap = 0;
                                        } else {
                                          break;
                                        }
                                      }
                                    }
                                    TG(a, 1);
                                    Rx = F(zp);
                                    Sx = null;
                                    Tx = 0;
                                  }
                                  up = 0;
                                } else {
                                  break;
                                }
                              }
                            }
                            Fx = F(tp);
                            Gx = null;
                            Hx = 0;
                          }
                          ip = 0;
                        } else {
                          break;
                        }
                      }
                    }
                  }
                  dx = F(hp);
                  ex = null;
                  fx = 0;
                }
                Lo = 0;
              } else {
                break;
              }
            }
          }
          Xd = F(Uk);
          Yd = null;
          me = 0;
        }
        jd = 0;
      } else {
        break;
      }
    }
  }
  LG(a);
}
function NH(a) {
  var b = Xe(a) ? S.h(Qg, a) : a, c = P.h(b, Wm), d = P.h(b, mq), e = P.h(b, jr), f = O.h(I.g ? I.g(AH) : I.call(null, AH), c), g = mC(f), h = O.h(g, d), l = eu.g(h), p = St.g(h), s = C(nC(f)), t = MA(s), v = HA.g(s);
  return S.h(u, th("\n", zh(Zh(["__Selection__", "* timestep " + u.g(KA(h)) + " (delay " + u.g(c) + ")", "* column " + u.g(q(e) ? e : "nil"), "", "__Input__", "" + u.g(t) + " (" + u.g(J(v)) + " bits)", "", "__Active columns__", "" + u.g(df.g(lA(p))), "", "__Active cells__", "" + u.g(df.g(mA(p))), "", "__Learnable cells__", "" + u.g(df.g(nA(p))), "", "__Learning segments__", "" + u.g(df.g(Mm.g(p))), "", "__Signal cells__", "" + u.g(df.g(oA(p))), "", "__Alternative cells / segs__", "" + u.g(df.g(ys.g(p))), 
  "", "__TP scores__", "" + u.g(df.g(sm.g(l))), "", "__Predicted cells__", "" + u.g(df.g(qA(p))), "", q(e) ? function() {
    var B = c + 1, y = O.h(I.g ? I.g(AH) : I.call(null, AH), B), D = O.h(mC(y), d), H = eu.g(D), K = St.g(D), M = Wp.g(H), L = yr.g(K), R = mA(K), $ = function() {
      var a = nA(K);
      return q(a) ? a : Qj;
    }(), N = Nm.g(Vz(D)), wa = O.h(lC(f), d), Y = iC(wa, HA), ga = iC(wa, IA);
    return new U(null, 14, 5, V, ["__Active cells prev__", "" + u.g(df.g(R)), "", "__Learn cells prev__", "" + u.g(df.g($)), "", "__Predicted cells prev__", "" + u.g(df.g(qA(K))), "", "__Selected column__", "__Connected ff-synapses__", function() {
      var fa = sA(M, e);
      return function(a, b, c, d, e, f, g, h, l, p, s, t, v, y, N, B, M, L, D, H, K, R, Y, $, wa, fa, ga, Sb) {
        return function $a(vc) {
          return new Tf(null, function(a, b, c, d, e, f, g, h, l, p, s, t, v, y) {
            return function() {
              for (;;) {
                var a = A(vc);
                if (a) {
                  if (T(a)) {
                    var b = x(a), c = J(b), d = Xf(c);
                    return function() {
                      for (var a = 0;;) {
                        if (a < c) {
                          var e = w.h(b, a), f = O.j(e, 0, null), e = O.j(e, 1, null);
                          ag(d, "  " + u.g(f) + " :\x3d\x3e " + u.g(HG("%.2f", e)) + u.g(q(function() {
                            var a = f;
                            return y.g ? y.g(a) : y.call(null, a);
                          }()) ? " S" : null) + u.g(q(function() {
                            var a = f;
                            return v.g ? v.g(a) : v.call(null, a);
                          }()) ? " A " + u.g(GA(t, f)) : null));
                          a += 1;
                        } else {
                          return!0;
                        }
                      }
                    }() ? $f(rg(d), $a(z(a))) : $f(rg(d), null);
                  }
                  var e = C(a), f = O.j(e, 0, null), e = O.j(e, 1, null);
                  return ee("  " + u.g(f) + " :\x3d\x3e " + u.g(HG("%.2f", e)) + u.g(q(function() {
                    var a = f;
                    return y.g ? y.g(a) : y.call(null, a);
                  }()) ? " S" : null) + u.g(q(function() {
                    var a = f;
                    return v.g ? v.g(a) : v.call(null, a);
                  }()) ? " A " + u.g(GA(t, f)) : null), $a(E(a)));
                }
                return null;
              }
            };
          }(a, b, c, d, e, f, g, h, l, p, s, t, v, y, N, B, M, L, D, H, K, R, Y, $, wa, fa, ga, Sb), null, null);
        };
      }(fa, B, y, D, H, K, M, L, R, $, N, wa, Y, ga, f, g, h, l, p, s, t, v, a, b, b, c, d, e)(df.g(fa));
    }(), "__Cells and their Dendrite segments__", function() {
      return function(a, b, c, d, e, f, g, h, l, p, s, t, v, y, N, B, M, L, D, H, K, R, Y, $, wa, ga, Ne) {
        return function Sb(La) {
          return new Tf(null, function(a, b, c, d, e, f, g, h, l, p, s, t, v, y, N, B, M, L, D, H, K, R, Y, $, wa, Ba, fa) {
            return function() {
              for (;;) {
                var ga = A(La);
                if (ga) {
                  var na = ga;
                  if (T(na)) {
                    var Da = x(na), ua = J(Da), Ja = Xf(ua);
                    return function() {
                      for (var La = 0;;) {
                        if (La < ua) {
                          var ra = w.h(Da, La), xa = yA(g, new U(null, 2, 5, V, [fa, ra], null));
                          ag(Ja, new U(null, 4, 5, V, ["CELL " + u.g(ra), "" + u.g(J(xa)) + " \x3d " + u.g(kh.h(J, xa)), "Lateral excitation from this cell: " + u.g(uA(g, new U(null, 2, 5, V, [fa, ra], null))), function() {
                            return function(a, b, c, d, e, f, g, h, l, p, s, t, v, y, N, B, M, L, D, H, K, R, Y, $, wa, La, $a, Ba, fa, na, ga, Da, Ja, ua, ra) {
                              return function dh(xa) {
                                return new Tf(null, function(a, b, c, d, e, f, g, h, l, p, s, t, v, y, N, B, M, L, D, H, K, R, Y, $, wa, La, $a, Ba, fa, na, ga, Da, Ja, ua, ra) {
                                  return function() {
                                    for (;;) {
                                      var va = A(xa);
                                      if (va) {
                                        var ha = va;
                                        if (T(ha)) {
                                          var qa = x(ha), fb = J(qa), ib = Xf(fb);
                                          return function() {
                                            for (var xa = 0;;) {
                                              if (xa < fb) {
                                                var Ea = w.h(qa, xa), jb = O.j(Ea, 0, null), Eb = O.j(Ea, 1, null);
                                                ag(ib, new U(null, 2, 5, V, ["  SEGMENT " + u.g(jb), function() {
                                                  return function(a, b, c, d, e, f, g, h, l, p, s, t, v, y, N, B, M, L, D, H, K, R, Y, re, $, wa, La, $a, Ba, fa, na, ga, Da, Ja, ua, xa, ra, ha, va, qa, Ea, ib, fb, jb) {
                                                    return function cs(Eb) {
                                                      return new Tf(null, function(a, b, c, d, e, f, g, h, l, p, s, t, v, y, N, B, M, L, D, H, K, R, Y, re, $, wa, La) {
                                                        return function() {
                                                          for (;;) {
                                                            var a = A(Eb);
                                                            if (a) {
                                                              if (T(a)) {
                                                                var b = x(a), c = J(b), d = Xf(c);
                                                                return function() {
                                                                  for (var a = 0;;) {
                                                                    if (a < c) {
                                                                      var e = w.h(b, a), f = O.j(e, 0, null), e = O.j(e, 1, null);
                                                                      ag(d, "  " + u.g(f) + u.g(e >= La ? " :\x3d\x3e " : " :.: ") + u.g(HG("%.2f", e)) + u.g(q(function() {
                                                                        var a = f;
                                                                        return wa.g ? wa.g(a) : wa.call(null, a);
                                                                      }()) ? " L" : q(function() {
                                                                        var a = f;
                                                                        return $.g ? $.g(a) : $.call(null, a);
                                                                      }()) ? " A" : null));
                                                                      a += 1;
                                                                    } else {
                                                                      return!0;
                                                                    }
                                                                  }
                                                                }() ? $f(rg(d), cs(z(a))) : $f(rg(d), null);
                                                              }
                                                              var e = C(a), f = O.j(e, 0, null), e = O.j(e, 1, null);
                                                              return ee("  " + u.g(f) + u.g(e >= La ? " :\x3d\x3e " : " :.: ") + u.g(HG("%.2f", e)) + u.g(q(function() {
                                                                var a = f;
                                                                return wa.g ? wa.g(a) : wa.call(null, a);
                                                              }()) ? " L" : q(function() {
                                                                var a = f;
                                                                return $.g ? $.g(a) : $.call(null, a);
                                                              }()) ? " A" : null), cs(E(a)));
                                                            }
                                                            return null;
                                                          }
                                                        };
                                                      }(a, b, c, d, e, f, g, h, l, p, s, t, v, y, N, B, M, L, D, H, K, R, Y, re, $, wa, La, $a, Ba, fa, na, ga, Da, Ja, ua, xa, ra, ha, va, qa, Ea, ib, fb, jb), null, null);
                                                    };
                                                  }(xa, a, Ea, jb, Eb, qa, fb, ib, ha, va, b, c, d, e, f, g, h, l, p, s, t, v, y, N, B, M, L, D, H, K, R, Y, $, wa, La, $a, Ba, fa, na, ga, Da, Ja, ua, ra)(df.g(Eb));
                                                }()], null));
                                                xa += 1;
                                              } else {
                                                return!0;
                                              }
                                            }
                                          }() ? $f(rg(ib), dh(z(ha))) : $f(rg(ib), null);
                                        }
                                        var Ea = C(ha), jb = O.j(Ea, 0, null), Eb = O.j(Ea, 1, null);
                                        return ee(new U(null, 2, 5, V, ["  SEGMENT " + u.g(jb), function() {
                                          return function(a, b, c, d, e, f, g, h, l, p, s, t, v, y, N, B, M, L, D, H, K, R, Y, re, $, wa, La, $a, Ba, fa, na, ga, Da, Ja, ua, xa, ra, ha, va, qa) {
                                            return function Gj(Ea) {
                                              return new Tf(null, function(a, b, c, d, e, f, g, h, l, p, s, t, v, y, N, B, M, L, D, H, K, R, Y) {
                                                return function() {
                                                  for (;;) {
                                                    var a = A(Ea);
                                                    if (a) {
                                                      if (T(a)) {
                                                        var b = x(a), c = J(b), d = Xf(c);
                                                        return function() {
                                                          for (var a = 0;;) {
                                                            if (a < c) {
                                                              var e = w.h(b, a), f = O.j(e, 0, null), e = O.j(e, 1, null);
                                                              ag(d, "  " + u.g(f) + u.g(e >= Y ? " :\x3d\x3e " : " :.: ") + u.g(HG("%.2f", e)) + u.g(q(function() {
                                                                var a = f;
                                                                return R.g ? R.g(a) : R.call(null, a);
                                                              }()) ? " L" : q(function() {
                                                                var a = f;
                                                                return K.g ? K.g(a) : K.call(null, a);
                                                              }()) ? " A" : null));
                                                              a += 1;
                                                            } else {
                                                              return!0;
                                                            }
                                                          }
                                                        }() ? $f(rg(d), Gj(z(a))) : $f(rg(d), null);
                                                      }
                                                      var e = C(a), f = O.j(e, 0, null), e = O.j(e, 1, null);
                                                      return ee("  " + u.g(f) + u.g(e >= Y ? " :\x3d\x3e " : " :.: ") + u.g(HG("%.2f", e)) + u.g(q(function() {
                                                        var a = f;
                                                        return R.g ? R.g(a) : R.call(null, a);
                                                      }()) ? " L" : q(function() {
                                                        var a = f;
                                                        return K.g ? K.g(a) : K.call(null, a);
                                                      }()) ? " A" : null), Gj(E(a)));
                                                    }
                                                    return null;
                                                  }
                                                };
                                              }(a, b, c, d, e, f, g, h, l, p, s, t, v, y, N, B, M, L, D, H, K, R, Y, re, $, wa, La, $a, Ba, fa, na, ga, Da, Ja, ua, xa, ra, ha, va, qa), null, null);
                                            };
                                          }(a, Ea, jb, Eb, ha, va, b, c, d, e, f, g, h, l, p, s, t, v, y, N, B, M, L, D, H, K, R, Y, $, wa, La, $a, Ba, fa, na, ga, Da, Ja, ua, ra)(df.g(Eb));
                                        }()], null), dh(E(ha)));
                                      }
                                      return null;
                                    }
                                  };
                                }(a, b, c, d, e, f, g, h, l, p, s, t, v, y, N, B, M, L, D, H, K, R, Y, $, wa, La, $a, Ba, fa, na, ga, Da, Ja, ua, ra), null, null);
                              };
                            }(La, xa, ra, Da, ua, Ja, na, ga, a, b, c, d, e, f, g, h, l, p, s, t, v, y, N, B, M, L, D, H, K, R, Y, $, wa, Ba, fa)(Ng(ai, xa));
                          }()], null));
                          La += 1;
                        } else {
                          return!0;
                        }
                      }
                    }() ? $f(rg(Ja), Sb(z(na))) : $f(rg(Ja), null);
                  }
                  var ra = C(na), xa = yA(g, new U(null, 2, 5, V, [fa, ra], null));
                  return ee(new U(null, 4, 5, V, ["CELL " + u.g(ra), "" + u.g(J(xa)) + " \x3d " + u.g(kh.h(J, xa)), "Lateral excitation from this cell: " + u.g(uA(g, new U(null, 2, 5, V, [fa, ra], null))), function() {
                    return function(a, b, c, d, e, f, g, h, l, p, s, t, v, y, N, B, M, L, D, H, K, R, Y, $, wa, La, $a, Ba, fa, na, ga) {
                      return function kd(Da) {
                        return new Tf(null, function(a, b, c, d, e, f, g, h, l, p, s, t, v, y, N, B, M, L, D, H, K, R, Y, $, wa, La, $a, Ba, fa, na, ga) {
                          return function() {
                            for (;;) {
                              var Ja = A(Da);
                              if (Ja) {
                                var ua = Ja;
                                if (T(ua)) {
                                  var xa = x(ua), ra = J(xa), ha = Xf(ra);
                                  return function() {
                                    for (var Da = 0;;) {
                                      if (Da < ra) {
                                        var va = w.h(xa, Da), qa = O.j(va, 0, null), Ea = O.j(va, 1, null);
                                        ag(ha, new U(null, 2, 5, V, ["  SEGMENT " + u.g(qa), function() {
                                          return function(a, b, c, d, e, f, g, h, l, p, s, t, v, y, N, B, M, L, D, H, K, R, Y, re, $, wa, La, $a, Ba, fa, na, ga, Da, ua, Ja, xa, ra, va, ha, qa) {
                                            return function bs(Ea) {
                                              return new Tf(null, function(a, b, c, d, e, f, g, h, l, p, s, t, v, y, N, B, M, L, D, H, K, R, Y) {
                                                return function() {
                                                  for (;;) {
                                                    var a = A(Ea);
                                                    if (a) {
                                                      if (T(a)) {
                                                        var b = x(a), c = J(b), d = Xf(c);
                                                        return function() {
                                                          for (var a = 0;;) {
                                                            if (a < c) {
                                                              var e = w.h(b, a), f = O.j(e, 0, null), e = O.j(e, 1, null);
                                                              ag(d, "  " + u.g(f) + u.g(e >= Y ? " :\x3d\x3e " : " :.: ") + u.g(HG("%.2f", e)) + u.g(q(function() {
                                                                var a = f;
                                                                return R.g ? R.g(a) : R.call(null, a);
                                                              }()) ? " L" : q(function() {
                                                                var a = f;
                                                                return K.g ? K.g(a) : K.call(null, a);
                                                              }()) ? " A" : null));
                                                              a += 1;
                                                            } else {
                                                              return!0;
                                                            }
                                                          }
                                                        }() ? $f(rg(d), bs(z(a))) : $f(rg(d), null);
                                                      }
                                                      var e = C(a), f = O.j(e, 0, null), e = O.j(e, 1, null);
                                                      return ee("  " + u.g(f) + u.g(e >= Y ? " :\x3d\x3e " : " :.: ") + u.g(HG("%.2f", e)) + u.g(q(function() {
                                                        var a = f;
                                                        return R.g ? R.g(a) : R.call(null, a);
                                                      }()) ? " L" : q(function() {
                                                        var a = f;
                                                        return K.g ? K.g(a) : K.call(null, a);
                                                      }()) ? " A" : null), bs(E(a)));
                                                    }
                                                    return null;
                                                  }
                                                };
                                              }(a, b, c, d, e, f, g, h, l, p, s, t, v, y, N, B, M, L, D, H, K, R, Y, re, $, wa, La, $a, Ba, fa, na, ga, Da, ua, Ja, xa, ra, va, ha, qa), null, null);
                                            };
                                          }(Da, va, qa, Ea, xa, ra, ha, ua, Ja, a, b, c, d, e, f, g, h, l, p, s, t, v, y, N, B, M, L, D, H, K, R, Y, $, wa, La, $a, Ba, fa, na, ga)(df.g(Ea));
                                        }()], null));
                                        Da += 1;
                                      } else {
                                        return!0;
                                      }
                                    }
                                  }() ? $f(rg(ha), kd(z(ua))) : $f(rg(ha), null);
                                }
                                var va = C(ua), qa = O.j(va, 0, null), Ea = O.j(va, 1, null);
                                return ee(new U(null, 2, 5, V, ["  SEGMENT " + u.g(qa), function() {
                                  return function(a, b, c, d, e, f, g, h, l, p, s, t, v, y, N, B, M, L, D, H, K, R, Y, re, $, wa, La, $a, Ba, fa, na, ga, Da, ua, Ja, xa) {
                                    return function as(ra) {
                                      return new Tf(null, function(a, b, c, d, e, f, g, h, l, p, s, t, v, y, N, B, M, L, D) {
                                        return function() {
                                          for (;;) {
                                            var a = A(ra);
                                            if (a) {
                                              if (T(a)) {
                                                var b = x(a), c = J(b), d = Xf(c);
                                                return function() {
                                                  for (var a = 0;;) {
                                                    if (a < c) {
                                                      var e = w.h(b, a), f = O.j(e, 0, null), e = O.j(e, 1, null);
                                                      ag(d, "  " + u.g(f) + u.g(e >= D ? " :\x3d\x3e " : " :.: ") + u.g(HG("%.2f", e)) + u.g(q(function() {
                                                        var a = f;
                                                        return L.g ? L.g(a) : L.call(null, a);
                                                      }()) ? " L" : q(function() {
                                                        var a = f;
                                                        return M.g ? M.g(a) : M.call(null, a);
                                                      }()) ? " A" : null));
                                                      a += 1;
                                                    } else {
                                                      return!0;
                                                    }
                                                  }
                                                }() ? $f(rg(d), as(z(a))) : $f(rg(d), null);
                                              }
                                              var e = C(a), f = O.j(e, 0, null), e = O.j(e, 1, null);
                                              return ee("  " + u.g(f) + u.g(e >= D ? " :\x3d\x3e " : " :.: ") + u.g(HG("%.2f", e)) + u.g(q(function() {
                                                var a = f;
                                                return L.g ? L.g(a) : L.call(null, a);
                                              }()) ? " L" : q(function() {
                                                var a = f;
                                                return M.g ? M.g(a) : M.call(null, a);
                                              }()) ? " A" : null), as(E(a)));
                                            }
                                            return null;
                                          }
                                        };
                                      }(a, b, c, d, e, f, g, h, l, p, s, t, v, y, N, B, M, L, D, H, K, R, Y, re, $, wa, La, $a, Ba, fa, na, ga, Da, ua, Ja, xa), null, null);
                                    };
                                  }(va, qa, Ea, ua, Ja, a, b, c, d, e, f, g, h, l, p, s, t, v, y, N, B, M, L, D, H, K, R, Y, $, wa, La, $a, Ba, fa, na, ga)(df.g(Ea));
                                }()], null), kd(E(ua)));
                              }
                              return null;
                            }
                          };
                        }(a, b, c, d, e, f, g, h, l, p, s, t, v, y, N, B, M, L, D, H, K, R, Y, $, wa, La, $a, Ba, fa, na, ga), null, null);
                      };
                    }(xa, ra, na, ga, a, b, c, d, e, f, g, h, l, p, s, t, v, y, N, B, M, L, D, H, K, R, Y, $, wa, Ba, fa)(Ng(ai, xa));
                  }()], null), Sb(E(na)));
                }
                return null;
              }
            };
          }(a, b, c, d, e, f, g, h, l, p, s, t, v, y, N, B, M, L, D, H, K, R, Y, $, wa, ga, Ne), null, null);
        };
      }(B, y, D, H, K, M, L, R, $, N, wa, Y, ga, f, g, h, l, p, s, t, v, a, b, b, c, d, e)(bk.g(jA(p)));
    }()], null);
  }() : null, "", "__spec__", df.g(Vz(h))], !0))));
}
function OH(a) {
  var b = Xe(a) ? S.h(Qg, a) : a;
  a = P.h(b, dr);
  var b = P.h(b, Qm), c = dw(new U(null, 1, 5, V, [cq], null));
  c.width = b;
  c.height = a;
  return c;
}
function PH(a) {
  var b = OH(YG(a)), c = b.getContext(Rf("2d")), d = cH(a);
  RG(c, pn.g(wH));
  jH(c, a, bk.h(d, d + bH(a)));
  c.fill();
  return b;
}
function QH(a, b) {
  var c = OH(YG(a)), d = c.getContext(Rf("2d")), e = HA.g(b);
  RG(d, ir.g(wH));
  jH(d, a, e);
  d.fill();
  return c;
}
function RH(a, b) {
  var c = OH(YG(a)), d = c.getContext(Rf("2d")), e = Wj(kh.h(C, qA(St.g(b)))), f = rC(b, e), e = aB(function() {
    return function(a) {
      a /= 8;
      return 1 < a ? 1 : a;
    };
  }(c, d, e, f), f);
  RG(d, ft.g(wH));
  kH(d, a, e);
  return c;
}
function SH(a, b) {
  var c = OH(YG(a)), d = c.getContext(Rf("2d")), e = lA(St.g(b));
  RG(d, ir.g(wH));
  jH(d, a, e);
  d.fill();
  return c;
}
function TH(a, b) {
  var c = OH(YG(a)), d = c.getContext(Rf("2d")), e = Wj(kh.h(C, rA(St.g(b))));
  RG(d, ft.g(wH));
  jH(d, a, e);
  d.fill();
  return c;
}
function UH(a, b) {
  var c = OH(YG(a)), d = c.getContext(Rf("2d")), e = kh.h(C, pA(St.g(b)));
  RG(d, Vl.g(wH));
  jH(d, a, e);
  d.fill();
  return c;
}
function VH(a, b) {
  var c = OH(YG(a)), d = c.getContext(Rf("2d")), e = kh.h(C, yn.g(St.g(b)));
  RG(d, Ll.g(wH));
  jH(d, a, e);
  d.fill();
  return c;
}
function WH(a, b) {
  var c = OH(YG(a)), d = c.getContext(Rf("2d")), e = aB(function() {
    return function(a) {
      a /= 16;
      return 1 < a ? 1 : a;
    };
  }(c, d), eA(eu.g(b)));
  RG(d, "black");
  kH(d, a, e);
  d.fill();
  return c;
}
function XH(a, b, c) {
  return Nb.h(function(b, e) {
    return b + YA(A, yA(a, new U(null, 2, 5, V, [c, e], null)));
  }, bk.g(b));
}
function YH(a, b) {
  var c = OH(YG(a)), d = c.getContext(Rf("2d")), e = St.g(b), f = yr.g(e), g = Qz(e), h = jA(e), e = aB(function() {
    return function(a) {
      a /= 16;
      return 1 < a ? 1 : a;
    };
  }(c, d, e, f, g, h), Xj(bk.g(g), kh.h(function(a, b, c, d, e, f) {
    return function(a) {
      return XH(d, f, a);
    };
  }(c, d, e, f, g, h), bk.g(g))));
  RG(d, "black");
  kH(d, a, e);
  d.fill();
  return c;
}
function ZH(a) {
  return "Showing " + u.g(cH(a)) + "--" + u.g(cH(a) + bH(a) + -1) + " of " + u.g(Pz(Am.g(a)));
}
function $H() {
  var a = I.g ? I.g(aI) : I.call(null, aI), b = Xe(a) ? S.h(Qg, a) : a, c = P.h(b, Wm), d = P.h(b, mq), e = P.h(b, jr);
  gw.h("#detail-text", q(e) ? NH(b) : "Select a column (by clicking on it) to see details.");
  var f = I.g ? I.g(xH) : I.call(null, xH), g = mt.g(I.g ? I.g(CH) : I.call(null, CH)), h = jn.g(I.g ? I.g(CH) : I.call(null, CH)), l = Dh.h(f, new U(null, 2, 5, V, [Os, Fn], null)), p = O.h(I.g ? I.g(AH) : I.call(null, AH), c), s = O.j(I.g ? I.g(AH) : I.call(null, AH), c + 1, Gi), t = dw("#comportex-viz"), v = t.getContext(Rf("2d")), B = PH(g), y = kh.h(PH, h), D = hH(je(h)) + Dh.h(f, new U(null, 2, 5, V, [Os, Jm], null));
  NG(v, new n(null, 4, [Ys, 0, Xk, 0, Qm, t.width, dr, 900], null));
  VG(v);
  QG(v, new n(null, 3, [Fu, "Input on selected timestep.", Ys, 2, Xk, 0], null));
  QG(v, new n(null, 3, [Fu, "Encoded bits.", Ys, Ys.g(YG(g)), Xk, 0], null));
  QG(v, new n(null, 3, [Fu, ZH(g), Ys, Ys.g(YG(g)), Xk, 10], null));
  for (var H = A(Ng(ai, h)), K = null, M = 0, L = 0;;) {
    if (L < M) {
      var R = K.H(null, L), $ = O.j(R, 0, null), N = O.j(R, 1, null);
      QG(v, new n(null, 3, [Fu, "Region " + u.g($) + " columns.", Ys, Ys.g(YG(N)), Xk, 0], null));
      QG(v, new n(null, 3, [Fu, ZH(N), Ys, Ys.g(YG(N)), Xk, 10], null));
      L += 1;
    } else {
      var wa = A(H);
      if (wa) {
        var Y = wa;
        if (T(Y)) {
          var ga = x(Y), fa = z(Y), na = ga, ua = J(ga), H = fa, K = na, M = ua
        } else {
          var Ba = C(Y), Da = O.j(Ba, 0, null), Ja = O.j(Ba, 1, null);
          QG(v, new n(null, 3, [Fu, "Region " + u.g(Da) + " columns.", Ys, Ys.g(YG(Ja)), Xk, 0], null));
          QG(v, new n(null, 3, [Fu, ZH(Ja), Ys, Ys.g(YG(Ja)), Xk, 10], null));
          H = F(Y);
          K = null;
          M = 0;
        }
        L = 0;
      } else {
        break;
      }
    }
  }
  var ra = D + Dh.h(f, new U(null, 2, 5, V, [Os, Ql], null));
  QG(v, new n(null, 3, [Fu, "Segments. " + u.g(q(e) ? "(arrows keys to move)" : "(click on a column)") + " Page up / page down to scroll columns.", Ys, ra, Xk, 0], null));
  var Ea = Dh.h(f, new U(null, 2, 5, V, [Os, wr], null)), fb = C(nC(p)), xa = C(mC(p)), ib = Gt.g(fb);
  q(ib) && (KG(v), v.translate(0, 30), ib.Q ? ib.Q(fb, v, Ea, 870, xa) : ib.call(null, fb, v, Ea, 870, xa), LG(v));
  for (var Eb = A(bk.g(function() {
    var a = J(I.g ? I.g(AH) : I.call(null, AH));
    return l < a ? l : a;
  }())), jb = null, yb = 0, Ab = 0;;) {
    if (Ab < yb) {
      var va = jb.H(null, Ab), Qd = O.h(I.g ? I.g(AH) : I.call(null, AH), va), md = O.j(I.g ? I.g(AH) : I.call(null, AH), va + 1, Gi), Vc = C(mC(md)), Dj = mC(Qd), qf = C(nC(Qd)), qa = Ot.g(ze(Qd));
      if (1 === J(Oz(qf)) || va === c) {
        DH(v, g, va, B), q(Dh.h(f, new U(null, 2, 5, V, [mt, ir], null))) && DH(v, g, va, P.h(Fd.h(mt.g(f), mt.g(ur.g(function() {
          var a = qa;
          return I.g ? I.g(a) : I.call(null, a);
        }()))) ? function() {
          var a = qa;
          return I.g ? I.g(a) : I.call(null, a);
        }() : Vg.v(qa, Q, Kp, QH(g, qf)), Kp)), q(function() {
          var a = Dh.h(f, new U(null, 2, 5, V, [mt, ft], null));
          return q(a) ? Vc : a;
        }()) && DH(v, g, va, P.h(Fd.h(mt.g(f), mt.g(ur.g(function() {
          var a = qa;
          return I.g ? I.g(a) : I.call(null, a);
        }()))) ? function() {
          var a = qa;
          return I.g ? I.g(a) : I.call(null, a);
        }() : Vg.v(qa, Q, Xq, RH(g, Vc)), Xq));
      }
      for (var bi = A(kh.k(ai, bk.w(), h, Dj, G([y], 0))), Xg = null, ke = 0, Me = 0;;) {
        if (Me < ke) {
          var Ne = Xg.H(null, Me), hd = O.j(Ne, 0, null), Sb = O.j(Ne, 1, null), La = O.j(Ne, 2, null), $a = O.j(Ne, 3, null);
          if (1 === J(Oz(La)) || va === c) {
            DH(v, Sb, va, $a), q(Dh.h(f, new U(null, 2, 5, V, [Om, lr], null))) && DH(v, Sb, va, P.h(Fd.h(Om.g(f), Om.g(ur.g(function() {
              var a = qa;
              return I.g ? I.g(a) : I.call(null, a);
            }()))) ? function() {
              var a = qa;
              return I.g ? I.g(a) : I.call(null, a);
            }() : Vg.v(qa, Q, new U(null, 2, 5, V, [Xt, hd], null), WH(Sb, La)), new U(null, 2, 5, V, [Xt, hd], null))), q(Dh.h(f, new U(null, 2, 5, V, [Om, rl], null))) && DH(v, Sb, va, P.h(Fd.h(Om.g(f), Om.g(ur.g(function() {
              var a = qa;
              return I.g ? I.g(a) : I.call(null, a);
            }()))) ? function() {
              var a = qa;
              return I.g ? I.g(a) : I.call(null, a);
            }() : Vg.v(qa, Q, new U(null, 2, 5, V, [iq, hd], null), YH(Sb, La)), new U(null, 2, 5, V, [iq, hd], null))), q(Dh.h(f, new U(null, 2, 5, V, [Om, ir], null))) && DH(v, Sb, va, P.h(Fd.h(Om.g(f), Om.g(ur.g(function() {
              var a = qa;
              return I.g ? I.g(a) : I.call(null, a);
            }()))) ? function() {
              var a = qa;
              return I.g ? I.g(a) : I.call(null, a);
            }() : Vg.v(qa, Q, new U(null, 2, 5, V, [Hn, hd], null), SH(Sb, La)), new U(null, 2, 5, V, [Hn, hd], null))), q(Dh.h(f, new U(null, 2, 5, V, [Om, Cn], null))) && DH(v, Sb, va, P.h(Fd.h(Om.g(f), Om.g(ur.g(function() {
              var a = qa;
              return I.g ? I.g(a) : I.call(null, a);
            }()))) ? function() {
              var a = qa;
              return I.g ? I.g(a) : I.call(null, a);
            }() : Vg.v(qa, Q, new U(null, 2, 5, V, [zr, hd], null), TH(Sb, La)), new U(null, 2, 5, V, [zr, hd], null))), q(Dh.h(f, new U(null, 2, 5, V, [Om, Vl], null))) && DH(v, Sb, va, P.h(Fd.h(Om.g(f), Om.g(ur.g(function() {
              var a = qa;
              return I.g ? I.g(a) : I.call(null, a);
            }()))) ? function() {
              var a = qa;
              return I.g ? I.g(a) : I.call(null, a);
            }() : Vg.v(qa, Q, new U(null, 2, 5, V, [vq, hd], null), UH(Sb, La)), new U(null, 2, 5, V, [vq, hd], null))), q(Dh.h(f, new U(null, 2, 5, V, [Om, Ll], null))) && DH(v, Sb, va, P.h(Fd.h(Om.g(f), Om.g(ur.g(function() {
              var a = qa;
              return I.g ? I.g(a) : I.call(null, a);
            }()))) ? function() {
              var a = qa;
              return I.g ? I.g(a) : I.call(null, a);
            }() : Vg.v(qa, Q, new U(null, 2, 5, V, [du, hd], null), VH(Sb, La)), new U(null, 2, 5, V, [du, hd], null)));
          }
          Me += 1;
        } else {
          var vc = A(bi);
          if (vc) {
            var Oe = vc;
            if (T(Oe)) {
              var le = x(Oe), Yg = z(Oe), id = le, ci = J(le), bi = Yg, Xg = id, ke = ci
            } else {
              var rf = C(Oe), mc = O.j(rf, 0, null), Ec = O.j(rf, 1, null), ud = O.j(rf, 2, null), Kd = O.j(rf, 3, null);
              if (1 === J(Oz(ud)) || va === c) {
                DH(v, Ec, va, Kd), q(Dh.h(f, new U(null, 2, 5, V, [Om, lr], null))) && DH(v, Ec, va, P.h(Fd.h(Om.g(f), Om.g(ur.g(function() {
                  var a = qa;
                  return I.g ? I.g(a) : I.call(null, a);
                }()))) ? function() {
                  var a = qa;
                  return I.g ? I.g(a) : I.call(null, a);
                }() : Vg.v(qa, Q, new U(null, 2, 5, V, [Xt, mc], null), WH(Ec, ud)), new U(null, 2, 5, V, [Xt, mc], null))), q(Dh.h(f, new U(null, 2, 5, V, [Om, rl], null))) && DH(v, Ec, va, P.h(Fd.h(Om.g(f), Om.g(ur.g(function() {
                  var a = qa;
                  return I.g ? I.g(a) : I.call(null, a);
                }()))) ? function() {
                  var a = qa;
                  return I.g ? I.g(a) : I.call(null, a);
                }() : Vg.v(qa, Q, new U(null, 2, 5, V, [iq, mc], null), YH(Ec, ud)), new U(null, 2, 5, V, [iq, mc], null))), q(Dh.h(f, new U(null, 2, 5, V, [Om, ir], null))) && DH(v, Ec, va, P.h(Fd.h(Om.g(f), Om.g(ur.g(function() {
                  var a = qa;
                  return I.g ? I.g(a) : I.call(null, a);
                }()))) ? function() {
                  var a = qa;
                  return I.g ? I.g(a) : I.call(null, a);
                }() : Vg.v(qa, Q, new U(null, 2, 5, V, [Hn, mc], null), SH(Ec, ud)), new U(null, 2, 5, V, [Hn, mc], null))), q(Dh.h(f, new U(null, 2, 5, V, [Om, Cn], null))) && DH(v, Ec, va, P.h(Fd.h(Om.g(f), Om.g(ur.g(function() {
                  var a = qa;
                  return I.g ? I.g(a) : I.call(null, a);
                }()))) ? function() {
                  var a = qa;
                  return I.g ? I.g(a) : I.call(null, a);
                }() : Vg.v(qa, Q, new U(null, 2, 5, V, [zr, mc], null), TH(Ec, ud)), new U(null, 2, 5, V, [zr, mc], null))), q(Dh.h(f, new U(null, 2, 5, V, [Om, Vl], null))) && DH(v, Ec, va, P.h(Fd.h(Om.g(f), Om.g(ur.g(function() {
                  var a = qa;
                  return I.g ? I.g(a) : I.call(null, a);
                }()))) ? function() {
                  var a = qa;
                  return I.g ? I.g(a) : I.call(null, a);
                }() : Vg.v(qa, Q, new U(null, 2, 5, V, [vq, mc], null), UH(Ec, ud)), new U(null, 2, 5, V, [vq, mc], null))), q(Dh.h(f, new U(null, 2, 5, V, [Om, Ll], null))) && DH(v, Ec, va, P.h(Fd.h(Om.g(f), Om.g(ur.g(function() {
                  var a = qa;
                  return I.g ? I.g(a) : I.call(null, a);
                }()))) ? function() {
                  var a = qa;
                  return I.g ? I.g(a) : I.call(null, a);
                }() : Vg.v(qa, Q, new U(null, 2, 5, V, [du, mc], null), VH(Ec, ud)), new U(null, 2, 5, V, [du, mc], null)));
              }
              bi = F(Oe);
              Xg = null;
              ke = 0;
            }
            Me = 0;
          } else {
            break;
          }
        }
      }
      Eg.h(f, ur.g(function() {
        var a = qa;
        return I.g ? I.g(a) : I.call(null, a);
      }())) && Vg.v(qa, Q, ur, f);
      Ab += 1;
    } else {
      var bg = A(Eb);
      if (bg) {
        var Pe = bg;
        if (T(Pe)) {
          var Xd = x(Pe), Yd = z(Pe), me = Xd, jd = J(Xd), Eb = Yd, jb = me, yb = jd
        } else {
          var qb = C(Pe), Fc = O.h(I.g ? I.g(AH) : I.call(null, AH), qb), Qe = O.j(I.g ? I.g(AH) : I.call(null, AH), qb + 1, Gi), Re = C(mC(Qe)), cg = mC(Fc), Se = C(nC(Fc)), ha = Ot.g(ze(Fc));
          if (1 === J(Oz(Se)) || qb === c) {
            DH(v, g, qb, B), q(Dh.h(f, new U(null, 2, 5, V, [mt, ir], null))) && DH(v, g, qb, P.h(Fd.h(mt.g(f), mt.g(ur.g(function() {
              var a = ha;
              return I.g ? I.g(a) : I.call(null, a);
            }()))) ? function() {
              var a = ha;
              return I.g ? I.g(a) : I.call(null, a);
            }() : Vg.v(ha, Q, Kp, QH(g, Se)), Kp)), q(function() {
              var a = Dh.h(f, new U(null, 2, 5, V, [mt, ft], null));
              return q(a) ? Re : a;
            }()) && DH(v, g, qb, P.h(Fd.h(mt.g(f), mt.g(ur.g(function() {
              var a = ha;
              return I.g ? I.g(a) : I.call(null, a);
            }()))) ? function() {
              var a = ha;
              return I.g ? I.g(a) : I.call(null, a);
            }() : Vg.v(ha, Q, Xq, RH(g, Re)), Xq));
          }
          for (var Te = A(kh.k(ai, bk.w(), h, cg, G([y], 0))), ne = null, Ue = 0, Tc = 0;;) {
            if (Tc < Ue) {
              var Uc = ne.H(null, Tc), nc = O.j(Uc, 0, null), Tb = O.j(Uc, 1, null), oe = O.j(Uc, 2, null), di = O.j(Uc, 3, null);
              if (1 === J(Oz(oe)) || qb === c) {
                DH(v, Tb, qb, di), q(Dh.h(f, new U(null, 2, 5, V, [Om, lr], null))) && DH(v, Tb, qb, P.h(Fd.h(Om.g(f), Om.g(ur.g(function() {
                  var a = ha;
                  return I.g ? I.g(a) : I.call(null, a);
                }()))) ? function() {
                  var a = ha;
                  return I.g ? I.g(a) : I.call(null, a);
                }() : Vg.v(ha, Q, new U(null, 2, 5, V, [Xt, nc], null), WH(Tb, oe)), new U(null, 2, 5, V, [Xt, nc], null))), q(Dh.h(f, new U(null, 2, 5, V, [Om, rl], null))) && DH(v, Tb, qb, P.h(Fd.h(Om.g(f), Om.g(ur.g(function() {
                  var a = ha;
                  return I.g ? I.g(a) : I.call(null, a);
                }()))) ? function() {
                  var a = ha;
                  return I.g ? I.g(a) : I.call(null, a);
                }() : Vg.v(ha, Q, new U(null, 2, 5, V, [iq, nc], null), YH(Tb, oe)), new U(null, 2, 5, V, [iq, nc], null))), q(Dh.h(f, new U(null, 2, 5, V, [Om, ir], null))) && DH(v, Tb, qb, P.h(Fd.h(Om.g(f), Om.g(ur.g(function() {
                  var a = ha;
                  return I.g ? I.g(a) : I.call(null, a);
                }()))) ? function() {
                  var a = ha;
                  return I.g ? I.g(a) : I.call(null, a);
                }() : Vg.v(ha, Q, new U(null, 2, 5, V, [Hn, nc], null), SH(Tb, oe)), new U(null, 2, 5, V, [Hn, nc], null))), q(Dh.h(f, new U(null, 2, 5, V, [Om, Cn], null))) && DH(v, Tb, qb, P.h(Fd.h(Om.g(f), Om.g(ur.g(function() {
                  var a = ha;
                  return I.g ? I.g(a) : I.call(null, a);
                }()))) ? function() {
                  var a = ha;
                  return I.g ? I.g(a) : I.call(null, a);
                }() : Vg.v(ha, Q, new U(null, 2, 5, V, [zr, nc], null), TH(Tb, oe)), new U(null, 2, 5, V, [zr, nc], null))), q(Dh.h(f, new U(null, 2, 5, V, [Om, Vl], null))) && DH(v, Tb, qb, P.h(Fd.h(Om.g(f), Om.g(ur.g(function() {
                  var a = ha;
                  return I.g ? I.g(a) : I.call(null, a);
                }()))) ? function() {
                  var a = ha;
                  return I.g ? I.g(a) : I.call(null, a);
                }() : Vg.v(ha, Q, new U(null, 2, 5, V, [vq, nc], null), UH(Tb, oe)), new U(null, 2, 5, V, [vq, nc], null))), q(Dh.h(f, new U(null, 2, 5, V, [Om, Ll], null))) && DH(v, Tb, qb, P.h(Fd.h(Om.g(f), Om.g(ur.g(function() {
                  var a = ha;
                  return I.g ? I.g(a) : I.call(null, a);
                }()))) ? function() {
                  var a = ha;
                  return I.g ? I.g(a) : I.call(null, a);
                }() : Vg.v(ha, Q, new U(null, 2, 5, V, [du, nc], null), VH(Tb, oe)), new U(null, 2, 5, V, [du, nc], null)));
              }
              Tc += 1;
            } else {
              var sf = A(Te);
              if (sf) {
                var vd = sf;
                if (T(vd)) {
                  var tf = x(vd), Zg = z(vd), ei = tf, uf = J(tf), Te = Zg, ne = ei, Ue = uf
                } else {
                  var vf = C(vd), gc = O.j(vf, 0, null), Wa = O.j(vf, 1, null), Zd = O.j(vf, 2, null), oc = O.j(vf, 3, null);
                  if (1 === J(Oz(Zd)) || qb === c) {
                    DH(v, Wa, qb, oc), q(Dh.h(f, new U(null, 2, 5, V, [Om, lr], null))) && DH(v, Wa, qb, P.h(Fd.h(Om.g(f), Om.g(ur.g(function() {
                      var a = ha;
                      return I.g ? I.g(a) : I.call(null, a);
                    }()))) ? function() {
                      var a = ha;
                      return I.g ? I.g(a) : I.call(null, a);
                    }() : Vg.v(ha, Q, new U(null, 2, 5, V, [Xt, gc], null), WH(Wa, Zd)), new U(null, 2, 5, V, [Xt, gc], null))), q(Dh.h(f, new U(null, 2, 5, V, [Om, rl], null))) && DH(v, Wa, qb, P.h(Fd.h(Om.g(f), Om.g(ur.g(function() {
                      var a = ha;
                      return I.g ? I.g(a) : I.call(null, a);
                    }()))) ? function() {
                      var a = ha;
                      return I.g ? I.g(a) : I.call(null, a);
                    }() : Vg.v(ha, Q, new U(null, 2, 5, V, [iq, gc], null), YH(Wa, Zd)), new U(null, 2, 5, V, [iq, gc], null))), q(Dh.h(f, new U(null, 2, 5, V, [Om, ir], null))) && DH(v, Wa, qb, P.h(Fd.h(Om.g(f), Om.g(ur.g(function() {
                      var a = ha;
                      return I.g ? I.g(a) : I.call(null, a);
                    }()))) ? function() {
                      var a = ha;
                      return I.g ? I.g(a) : I.call(null, a);
                    }() : Vg.v(ha, Q, new U(null, 2, 5, V, [Hn, gc], null), SH(Wa, Zd)), new U(null, 2, 5, V, [Hn, gc], null))), q(Dh.h(f, new U(null, 2, 5, V, [Om, Cn], null))) && DH(v, Wa, qb, P.h(Fd.h(Om.g(f), Om.g(ur.g(function() {
                      var a = ha;
                      return I.g ? I.g(a) : I.call(null, a);
                    }()))) ? function() {
                      var a = ha;
                      return I.g ? I.g(a) : I.call(null, a);
                    }() : Vg.v(ha, Q, new U(null, 2, 5, V, [zr, gc], null), TH(Wa, Zd)), new U(null, 2, 5, V, [zr, gc], null))), q(Dh.h(f, new U(null, 2, 5, V, [Om, Vl], null))) && DH(v, Wa, qb, P.h(Fd.h(Om.g(f), Om.g(ur.g(function() {
                      var a = ha;
                      return I.g ? I.g(a) : I.call(null, a);
                    }()))) ? function() {
                      var a = ha;
                      return I.g ? I.g(a) : I.call(null, a);
                    }() : Vg.v(ha, Q, new U(null, 2, 5, V, [vq, gc], null), UH(Wa, Zd)), new U(null, 2, 5, V, [vq, gc], null))), q(Dh.h(f, new U(null, 2, 5, V, [Om, Ll], null))) && DH(v, Wa, qb, P.h(Fd.h(Om.g(f), Om.g(ur.g(function() {
                      var a = ha;
                      return I.g ? I.g(a) : I.call(null, a);
                    }()))) ? function() {
                      var a = ha;
                      return I.g ? I.g(a) : I.call(null, a);
                    }() : Vg.v(ha, Q, new U(null, 2, 5, V, [du, gc], null), VH(Wa, Zd)), new U(null, 2, 5, V, [du, gc], null)));
                  }
                  Te = F(vd);
                  ne = null;
                  Ue = 0;
                }
                Tc = 0;
              } else {
                break;
              }
            }
          }
          Eg.h(f, ur.g(function() {
            var a = ha;
            return I.g ? I.g(a) : I.call(null, a);
          }())) && Vg.v(ha, Q, ur, f);
          Eb = F(Pe);
          jb = null;
          yb = 0;
        }
        Ab = 0;
      } else {
        break;
      }
    }
  }
  fH(g, v, c);
  for (var Gc = A(h), $d = null, dg = 0, Ve = 0;;) {
    if (Ve < dg) {
      var Jk = $d.H(null, Ve);
      fH(Jk, v, c);
      Ve += 1;
    } else {
      var fi = A(Gc);
      if (fi) {
        var wd = fi;
        if (T(wd)) {
          var We = x(wd), $g = z(wd), ah = We, wc = J(We), Gc = $g, $d = ah, dg = wc
        } else {
          var eg = C(wd);
          fH(eg, v, c);
          Gc = F(wd);
          $d = null;
          dg = 0;
        }
        Ve = 0;
      } else {
        break;
      }
    }
  }
  if (q(e)) {
    var ae = O.h(h, d);
    gH(ae, v, c, e);
  }
  if (q(Dh.h(f, new U(null, 2, 5, V, [il, ir], null)))) {
    for (var wf = A(kh.k(ai, bk.w(), mC(p), mC(s), G([xg.h(C(nC(p)), lC(p)), h, xg.h(g, h)], 0))), gi = null, xf = 0, pe = 0;;) {
      if (pe < xf) {
        var Ld = gi.H(null, pe), fg = O.j(Ld, 0, null), gg = O.j(Ld, 1, null);
        O.j(Ld, 2, null);
        var qe = O.j(Ld, 3, null), kd = O.j(Ld, 4, null), bh = O.j(Ld, 5, null);
        (Hb(e) || Fd.h(d, fg)) && FH(v, gg, kd, qe, bh, e, c, f);
        pe += 1;
      } else {
        var ch = A(wf);
        if (ch) {
          var hg = ch;
          if (T(hg)) {
            var ig = x(hg), Nn = z(hg), lm = ig, dh = J(ig), wf = Nn, gi = lm, xf = dh
          } else {
            var yf = C(hg), jg = O.j(yf, 0, null), eh = O.j(yf, 1, null);
            O.j(yf, 2, null);
            var fh = O.j(yf, 3, null), Kk = O.j(yf, 4, null), On = O.j(yf, 5, null);
            (Hb(e) || Fd.h(d, jg)) && FH(v, eh, Kk, fh, On, e, c, f);
            wf = F(hg);
            gi = null;
            xf = 0;
          }
          pe = 0;
        } else {
          break;
        }
      }
    }
  }
  if (q(q(e) ? c + 1 < J(I.g ? I.g(AH) : I.call(null, AH)) : e)) {
    var Pn = O.h(mC(p), d), mm = O.h(mC(s), d), nm = O.h(h, d);
    MH(v, Pn, mm, nm, e, c, D, f);
  }
  return null;
}
function bI(a, b, c) {
  var d = xG.w();
  nz(a, b, function(a, b, d) {
    return function(a) {
      AG.h(d, a);
      return q(c.g ? c.g(a) : c.call(null, a)) ? (a.preventDefault(), !1) : null;
    };
  }(a, b, d));
  return d;
}
function cI(a, b) {
  var c = bI(a, "click", function() {
    return!1;
  }), d = xG.g(1);
  WF(function(a, c) {
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
                      if (!X(e, Z)) {
                        d = e;
                        break a;
                      }
                    }
                  } catch (f) {
                    if (f instanceof Object) {
                      c[5] = f;
                      mG(c);
                      d = Z;
                      break a;
                    }
                    throw f;
                  }
                  d = void 0;
                }
                if (!X(d, Z)) {
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
            d.w = c;
            d.g = b;
            return d;
          }();
        }(function(a, c) {
          return function(a) {
            var d = a[1];
            if (7 === d) {
              var d = a[7], e = a[8], f = a[9], d = a[2], g = d.offsetX, f = d.offsetY, d = I.g ? I.g(CH) : I.call(null, CH), h = mt.g(d), d = I.g ? I.g(CH) : I.call(null, CH), e = jn.g(d), d = I.g ? I.g(AH) : I.call(null, AH), d = J(d) - 2, h = dH(h, g, f);
              a[10] = d;
              a[7] = f;
              a[8] = h;
              a[11] = e;
              a[9] = g;
              a[1] = q(h) ? 8 : 9;
              return Z;
            }
            return 1 === d ? (a[2] = null, a[1] = 2, Z) : 4 === d ? iG(a, 7, c) : 15 === d ? (d = a[2], a[2] = d, a[1] = 12, Z) : 13 === d ? (d = a[7], g = a[12], e = a[13], e = a[11], f = a[9], g = O.h(e, g), d = dH(g, f, d), a[13] = d, a[1] = q(d) ? 16 : 17, Z) : 6 === d ? (d = a[2], a[2] = d, a[1] = 3, Z) : 17 === d ? (g = a[12], a[12] = g + 1, a[2] = null, a[1] = 11, Z) : 3 === d ? (d = a[2], kG(a, d)) : 12 === d ? (d = a[2], a[2] = d, a[1] = 10, Z) : 2 === d ? (a[1] = 4, Z) : 11 === d ? (g = 
            a[12], e = a[11], d = J(e), a[1] = q(g < d) ? 13 : 14, Z) : 9 === d ? (a[12] = 0, a[2] = null, a[1] = 11, Z) : 5 === d ? (a[2] = null, a[1] = 6, Z) : 14 === d ? (d = Vg.v(b, Q, jr, null), a[2] = d, a[1] = 15, Z) : 16 === d ? (d = a[10], g = a[12], e = a[13], f = O.j(e, 0, null), e = O.j(e, 1, null), d = ve([mq, jr, Wm], [g, e, f < d ? f : d]), d = Tg.h ? Tg.h(b, d) : Tg.call(null, b, d), a[2] = d, a[1] = 18, Z) : 10 === d ? (a[14] = a[2], a[2] = null, a[1] = 2, Z) : 18 === d ? (d = a[2], 
            a[2] = d, a[1] = 15, Z) : 8 === d ? (d = a[10], e = a[8], g = O.j(e, 0, null), e = O.j(e, 1, null), d = Vg.v(b, Q, Wm, g < d ? g : d), a[15] = e, a[2] = d, a[1] = 10, Z) : null;
          };
        }(a, c), a, c);
      }(), h = function() {
        var b = d.w ? d.w() : d.call(null);
        b[6] = a;
        return b;
      }();
      return hG(h);
    };
  }(d, c));
}
var dI = new n(null, 6, [33, gn, 34, yt, 37, Cu, 38, aq, 39, Fs, 40, pl], null);
function eI(a, b) {
  var c = bI(document, "keydown", function(a) {
    a = a.keyCode;
    return dI.g ? dI.g(a) : dI.call(null, a);
  }), d = xG.g(1);
  WF(function(c, d) {
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
                      if (!X(e, Z)) {
                        d = e;
                        break a;
                      }
                    }
                  } catch (f) {
                    if (f instanceof Object) {
                      c[5] = f;
                      mG(c);
                      d = Z;
                      break a;
                    }
                    throw f;
                  }
                  d = void 0;
                }
                if (!X(d, Z)) {
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
            d.w = c;
            d.g = b;
            return d;
          }();
        }(function(c, d) {
          return function(e) {
            var f = e[1];
            if (7 === f) {
              var g = e[7], h = e[8], y = e[2], D = y.keyCode, D = dI.g ? dI.g(D) : dI.call(null, D), H = I.g ? I.g(AH) : I.call(null, AH), K = J(H) - 2;
              e[9] = K;
              e[7] = D;
              e[8] = y;
              e[1] = q(D) ? 8 : 9;
              return Z;
            }
            if (20 === f) {
              return y = EH(!0), e[2] = y, e[1] = 11, Z;
            }
            if (1 === f) {
              return e[2] = null, e[1] = 2, Z;
            }
            if (4 === f) {
              return iG(e, 7, d);
            }
            if (15 === f) {
              var K = e[9], g = e[7], h = e[8], M = V, L = [Wm], R = new U(null, 1, 5, M, L, null), y = Vg.v(a, Gh, R, function() {
                return function() {
                  return function(a) {
                    a -= 1;
                    return 0 < a ? a : 0;
                  };
                }(K, g, h, K, g, h, M, L, R, f, c, d);
              }());
              e[2] = y;
              e[1] = 16;
              return Z;
            }
            if (13 === f) {
              return y = I.g ? I.g(a) : I.call(null, a), y = 0 === Wm.g(y), e[1] = q(y) ? 14 : 15, Z;
            }
            if (6 === f) {
              return y = e[2], e[2] = y, e[1] = 3, Z;
            }
            if (17 === f) {
              var K = e[9], g = e[7], h = e[8], $ = V, N = [jr], wa = new U(null, 1, 5, $, N, null), y = Vg.v(a, Gh, wa, function() {
                return function() {
                  return function(a) {
                    return q(a) ? a - 1 : null;
                  };
                }(K, g, h, K, g, h, $, N, wa, f, c, d);
              }());
              e[2] = y;
              e[1] = 11;
              return Z;
            }
            if (3 === f) {
              return y = e[2], kG(e, y);
            }
            if (12 === f) {
              var K = e[9], g = e[7], h = e[8], Y = V, ga = [Wm], fa = new U(null, 1, 5, Y, ga, null), y = Vg.v(a, Gh, fa, function() {
                return function(a) {
                  return function(b) {
                    b += 1;
                    return b < a ? b : a;
                  };
                }(K, g, h, K, g, h, Y, ga, fa, f, c, d);
              }());
              e[2] = y;
              e[1] = 11;
              return Z;
            }
            if (2 === f) {
              return e[1] = 4, Z;
            }
            if (19 === f) {
              return y = EH(!1), e[2] = y, e[1] = 11, Z;
            }
            if (11 === f) {
              return y = e[2], e[2] = y, e[1] = 10, Z;
            }
            if (9 === f) {
              return e[2] = null, e[1] = 10, Z;
            }
            if (5 === f) {
              return e[2] = null, e[1] = 6, Z;
            }
            if (14 === f) {
              return D = b.w ? b.w() : b.call(null), y = Vg.h(a, gf), e[10] = D, e[2] = y, e[1] = 16, Z;
            }
            if (16 === f) {
              return y = e[2], e[2] = y, e[1] = 11, Z;
            }
            if (10 === f) {
              return e[11] = e[2], e[2] = null, e[1] = 2, Z;
            }
            if (18 === f) {
              var K = e[9], g = e[7], h = e[8], na = V, ua = [jr], Ba = new U(null, 1, 5, na, ua, null), y = Vg.v(a, Gh, Ba, function() {
                return function() {
                  return function(a) {
                    return q(a) ? a + 1 : null;
                  };
                }(K, g, h, K, g, h, na, ua, Ba, f, c, d);
              }());
              e[2] = y;
              e[1] = 11;
              return Z;
            }
            if (8 === f) {
              g = e[7];
              switch(g instanceof W ? g.ja : null) {
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
                  throw Error("No matching clause: " + u.g(g));;
              }
              return Z;
            }
            return null;
          };
        }(c, d), c, d);
      }(), h = function() {
        var a = g.w ? g.w() : g.call(null);
        a[6] = c;
        return a;
      }();
      return hG(h);
    };
  }(d, c));
}
function fI(a) {
  var b = gI(), c = aI, d = hI, e = mC(a), f = Os.g(I.g ? I.g(xH) : I.call(null, xH)), g = C(nC(a)), h = wr.g(f), l = Iz(g);
  a = 1 === J(Jz(l)) ? qH(l, h + 10, f) : tH(l, h + 10, f);
  var p = Jm.g(f), e = Nb.j(function(a, b, c, d, e, f, g) {
    return function(a, c) {
      var d = Iz(c), e = Ae(a), e = hH(q(e) ? e : f) + g;
      if (1 === J(Jz(d))) {
        var h = Xe(b) ? S.h(Qg, b) : b, l = P.h(h, Nt), p = P.h(h, Km), s = P.h(h, qu), h = P.h(h, Fn), d = pH(ve([Rl, Am, Tm, zn, Fn, Oq, xr, Cr, Ft, Nt, Gu], [0, d, s, p, h, 900, 30, e, !0, l, s]))
      } else {
        s = Xe(b) ? S.h(Qg, b) : b, l = P.h(s, Nt), p = P.h(s, Km), s = P.h(s, qu), d = sH(ve([Rl, Am, Tm, zn, Oq, xr, Cr, Ft, Nt, Gu], [0, d, s, p, 900, 30, e, !0, l, s]));
      }
      return te.h(a, d);
    };
  }(e, f, g, h, l, a, p), se, e), e = new n(null, 2, [mt, a, jn, e], null);
  Tg.h ? Tg.h(CH, e) : Tg.call(null, CH, e);
  e = xG.g(1);
  WF(function(a) {
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
                      if (!X(e, Z)) {
                        d = e;
                        break a;
                      }
                    }
                  } catch (f) {
                    if (f instanceof Object) {
                      c[5] = f;
                      mG(c);
                      d = Z;
                      break a;
                    }
                    throw f;
                  }
                  d = void 0;
                }
                if (!X(d, Z)) {
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
            d.w = c;
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
              return Z;
            }
            if (6 === d) {
              return c[2] = null, c[1] = 7, Z;
            }
            if (5 === d) {
              var f = c[7], g = Ii, h = Sg.g ? Sg.g(g) : Sg.call(null, g), l = Dg.v(f, Q, Ot, h), e = Vg.h(AH, function() {
                return function(a) {
                  return function(b) {
                    return $h(lh.h(I.g ? I.g(zH) : I.call(null, zH), ee(a, b)));
                  };
                }(l, f, f, f, g, h, l, d, a);
              }());
              c[8] = e;
              c[2] = null;
              c[1] = 2;
              return Z;
            }
            return 4 === d ? (f = c[7], e = c[2], c[7] = e, c[1] = q(e) ? 5 : 6, Z) : 3 === d ? (e = c[2], kG(c, e)) : 2 === d ? iG(c, 4, b) : 1 === d ? (c[2] = null, c[1] = 2, Z) : null;
          };
        }(a), a);
      }(), d = function() {
        var b = c.w ? c.w() : c.call(null);
        b[6] = a;
        return b;
      }();
      return hG(d);
    };
  }(e));
  e = dw("#comportex-viz");
  e.width = .7 * (window.innerWidth - 20);
  e.height = 900;
  cI(e, c);
  eI(c, d);
}
;function iI(a, b) {
  if (a.classList) {
    a.classList.add(b);
  } else {
    var c;
    a.classList ? c = !a.classList.contains(b) : (a.classList ? c = a.classList : (c = a.className, c = ja(c) && c.match(/\S+/g) || []), c = !(0 <= hb(c, b)));
    c && (a.className += 0 < a.className.length ? " " + b : b);
  }
}
;function jI() {
  Zy.call(this);
  this.Md = new hz(this);
  this.Ah = this;
  this.qh = null;
}
Ca(jI, Zy);
jI.prototype[dz] = !0;
k = jI.prototype;
k.addEventListener = function(a, b, c, d) {
  nz(this, a, b, c, d);
};
k.removeEventListener = function(a, b, c, d) {
  tz(this, a, b, c, d);
};
k.dispatchEvent = function(a) {
  var b, c = this.qh;
  if (c) {
    for (b = [];c;c = c.qh) {
      b.push(c);
    }
  }
  var c = this.Ah, d = a.type || a;
  if (ja(a)) {
    a = new az(a, c);
  } else {
    if (a instanceof az) {
      a.target = a.target || c;
    } else {
      var e = a;
      a = new az(d, c);
      Za(a, e);
    }
  }
  var e = !0, f;
  if (b) {
    for (var g = b.length - 1;!a.Sd && 0 <= g;g--) {
      f = a.currentTarget = b[g], e = kI(f, d, !0, a) && e;
    }
  }
  a.Sd || (f = a.currentTarget = c, e = kI(f, d, !0, a) && e, a.Sd || (e = kI(f, d, !1, a) && e));
  if (b) {
    for (g = 0;!a.Sd && g < b.length;g++) {
      f = a.currentTarget = b[g], e = kI(f, d, !1, a) && e;
    }
  }
  return e;
};
k.Tg = function(a, b, c, d) {
  return this.Md.add(String(a), b, !1, c, d);
};
k.hj = function(a, b, c, d) {
  this.Md.remove(String(a), b, c, d);
};
function kI(a, b, c, d) {
  b = a.Md.ec[String(b)];
  if (!b) {
    return!0;
  }
  b = b.concat();
  for (var e = !0, f = 0;f < b.length;++f) {
    var g = b[f];
    if (g && !g.Td && g.te == c) {
      var h = g.wd, l = g.qc || g.src;
      g.se && jz(a.Md, g);
      e = !1 !== h.call(l, d) && e;
    }
  }
  return e && !1 != d.sh;
}
k.If = function(a, b, c, d) {
  return this.Md.If(String(a), b, c, d);
};
function lI(a, b, c) {
  if (la(a)) {
    c && (a = ya(a, c));
  } else {
    if (a && "function" == typeof a.handleEvent) {
      a = ya(a.handleEvent, a);
    } else {
      throw Error("Invalid listener argument");
    }
  }
  return 2147483647 < b ? -1 : ba.setTimeout(a, b || 0);
}
;var mI, nI, oI, pI, qI, rI, sI;
function tI(a, b, c) {
  var d = S.h(jf, Ei(c));
  return 0 < d ? ef.j(ek.j(Gp, hr, Bq), lf, wh.h(Lg.h(Ff, Gp), kh.h(function(b) {
    return function(d) {
      var g = Tz(a, 0, d), h = Mj(c, g), l = S.h(jf, Ei(h)), h = Di(h);
      return new n(null, 5, [Zm, d, hr, J(h) / J(g), Bq, J(h) / J(c), Gp, l / b, nu, l / J(g)], null);
    };
  }(d), b))) : null;
}
var vI = function uI(b, c) {
  "undefined" === typeof mI && (mI = function(b, c, f, g) {
    this.e = b;
    this.f = c;
    this.Zi = f;
    this.vi = g;
    this.K = 0;
    this.B = 393216;
  }, mI.wb = !0, mI.vb = "org.nfrac.comportex.encoders/t36397", mI.Bb = function(b, c) {
    return Wc(c, "org.nfrac.comportex.encoders/t36397");
  }, mI.prototype.Zc = function(b, c, f) {
    return Tz(this.e, c, this.f.g ? this.f.g(f) : this.f.call(null, f));
  }, mI.prototype.Qd = function(b, c, f) {
    return Uz(this.e, c, f);
  }, mI.prototype.Lb = function() {
    return Iz(this.e);
  }, mI.prototype.L = function() {
    return this.vi;
  }, mI.prototype.M = function(b, c) {
    return new mI(this.e, this.f, this.Zi, c);
  });
  return new mI(c, b, uI, null);
}, xI = function wI(b) {
  "undefined" === typeof nI && (nI = function(b, d, e) {
    this.e = b;
    this.fi = d;
    this.wi = e;
    this.K = 0;
    this.B = 393216;
  }, nI.wb = !0, nI.vb = "org.nfrac.comportex.encoders/t36404", nI.Bb = function(b, d) {
    return Wc(d, "org.nfrac.comportex.encoders/t36404");
  }, nI.prototype.Zc = function(b, d, e) {
    var f = this;
    return S.h(JB, kh.h(function() {
      return function(b) {
        return Tz(f.e, d, b);
      };
    }(this), e));
  }, nI.prototype.Lb = function() {
    return Iz(this.e);
  }, nI.prototype.L = function() {
    return this.wi;
  }, nI.prototype.M = function(b, d) {
    return new nI(this.e, this.fi, d);
  });
  return new nI(b, wI, null);
}, yI = function() {
  function a(a, c) {
    var f = Oz(c), g = Qz(c), h = Gh.v(f, new U(null, 1, 5, V, [0], null), kf, a), l = xB(h);
    "undefined" === typeof oI && (oI = function(a, b, c, d, e, f, g, h) {
      this.O = a;
      this.Df = b;
      this.Fg = c;
      this.di = d;
      this.e = e;
      this.xd = f;
      this.Ef = g;
      this.xi = h;
      this.K = 0;
      this.B = 393216;
    }, oI.wb = !0, oI.vb = "org.nfrac.comportex.encoders/t36413", oI.Bb = function() {
      return function(a, b) {
        return Wc(b, "org.nfrac.comportex.encoders/t36413");
      };
    }(f, g, h, l), oI.prototype.Zc = function(a, b, c, d) {
      return function(e, f, g) {
        var h = this;
        return S.h(JB, Ng(function() {
          return function(a, b) {
            return Tz(h.e, f + a * h.Fg, b);
          };
        }(this, a, b, c, d), g));
      };
    }(f, g, h, l), oI.prototype.Lb = function() {
      return function() {
        return this.O;
      };
    }(f, g, h, l), oI.prototype.L = function() {
      return function() {
        return this.xi;
      };
    }(f, g, h, l), oI.prototype.M = function() {
      return function(a, b) {
        return new oI(this.O, this.Df, this.Fg, this.di, this.e, this.xd, this.Ef, b);
      };
    }(f, g, h, l));
    return new oI(l, h, g, f, c, a, b, null);
  }
  var b = null, c = function() {
    function a(b, d, h) {
      var l = null;
      2 < arguments.length && (l = G(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      var l = xg.h(d, e), p = kh.h(Qz, l), s = xg.h(0, dk.h(jf, p)), t = S.h(yB, kh.h(Oz, l)), v = xB(t);
      "undefined" === typeof pI && (pI = function(a, b, c, d, e, f, g, h, l, p) {
        this.O = a;
        this.Df = b;
        this.nh = c;
        this.pj = d;
        this.Gg = e;
        this.hc = f;
        this.e = g;
        this.xd = h;
        this.Ef = l;
        this.yi = p;
        this.K = 0;
        this.B = 393216;
      }, pI.wb = !0, pI.vb = "org.nfrac.comportex.encoders/t36416", pI.Bb = function() {
        return function(a, b) {
          return Wc(b, "org.nfrac.comportex.encoders/t36416");
        };
      }(l, p, s, t, v), pI.prototype.Zc = function(a, b, c, d, e) {
        return function(f, g, h) {
          return S.h(JB, kh.v(function() {
            return function(a, b, c) {
              return Tz(a, g + b, c);
            };
          }(this, a, b, c, d, e), this.Gg, this.nh, h));
        };
      }(l, p, s, t, v), pI.prototype.Lb = function() {
        return function() {
          return this.O;
        };
      }(l, p, s, t, v), pI.prototype.L = function() {
        return function() {
          return this.yi;
        };
      }(l, p, s, t, v), pI.prototype.M = function() {
        return function(a, b) {
          return new pI(this.O, this.Df, this.nh, this.pj, this.Gg, this.hc, this.e, this.xd, this.Ef, b);
        };
      }(l, p, s, t, v));
      return new pI(v, t, s, p, l, e, d, a, b, null);
    }
    a.D = 2;
    a.q = function(a) {
      var b = C(a);
      a = F(a);
      var d = C(a);
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
        return c.k(b, e, G(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.D = 2;
  b.q = c.q;
  b.h = a;
  b.k = c.k;
  return b;
}(), AI = function zI(b, c, d) {
  var e = O.j(d, 0, null), f = O.j(d, 1, null), g = xB(new U(null, 1, 5, V, [b], null)), h = f - e;
  "undefined" === typeof qI && (qI = function(b, c, d, e, f, g, h, D, H, K) {
    this.span = b;
    this.O = c;
    this.upper = d;
    this.lower = e;
    this.lj = f;
    this.Xi = g;
    this.kd = h;
    this.re = D;
    this.ni = H;
    this.zi = K;
    this.K = 0;
    this.B = 393216;
  }, qI.wb = !0, qI.vb = "org.nfrac.comportex.encoders/t36427", qI.Bb = function() {
    return function(b, c) {
      return Wc(c, "org.nfrac.comportex.encoders/t36427");
    };
  }(g, h, d, e, f), qI.prototype.Zc = function() {
    return function(b, c, d) {
      return q(d) ? (b = this.lower, d = d > b ? d : b, b = this.upper, d = pf(((d < b ? d : b) - this.lower) / this.span * (this.re - this.kd)), Uj(bk.h(c + d, c + d + this.kd))) : Qj;
    };
  }(g, h, d, e, f), qI.prototype.Qd = function() {
    return function(b, c, d) {
      b = bk.j(this.lower, this.upper, 5 < this.span && 250 > this.span ? 1 : this.span / 50);
      return lh.h(d, tI(this, b, c));
    };
  }(g, h, d, e, f), qI.prototype.Lb = function() {
    return function() {
      return this.O;
    };
  }(g, h, d, e, f), qI.prototype.L = function() {
    return function() {
      return this.zi;
    };
  }(g, h, d, e, f), qI.prototype.M = function() {
    return function(b, c) {
      return new qI(this.span, this.O, this.upper, this.lower, this.lj, this.Xi, this.kd, this.re, this.ni, c);
    };
  }(g, h, d, e, f));
  return new qI(h, g, f, e, d, d, c, b, zI, null);
}, CI = function BI(b, c) {
  var d = J(c), e = b / d, f = Xj(c, bk.w()), g = AI(b, e, new U(null, 2, 5, V, [0, d - 1], null));
  "undefined" === typeof rI && (rI = function(b, c, d, e, f, g, B, y) {
    this.Lf = b;
    this.Ze = c;
    this.kd = d;
    this.xd = e;
    this.values = f;
    this.re = g;
    this.Dh = B;
    this.Ai = y;
    this.K = 0;
    this.B = 393216;
  }, rI.wb = !0, rI.vb = "org.nfrac.comportex.encoders/t36434", rI.Bb = function() {
    return function(b, c) {
      return Wc(c, "org.nfrac.comportex.encoders/t36434");
    };
  }(d, e, f, g), rI.prototype.Zc = function() {
    return function(b, c, d) {
      return Tz(this.Lf, c, this.Ze.g ? this.Ze.g(d) : this.Ze.call(null, d));
    };
  }(d, e, f, g), rI.prototype.Qd = function() {
    return function(b, c, d) {
      return lh.h(d, tI(this, this.values, c));
    };
  }(d, e, f, g), rI.prototype.Lb = function() {
    return function() {
      return Iz(this.Lf);
    };
  }(d, e, f, g), rI.prototype.L = function() {
    return function() {
      return this.Ai;
    };
  }(d, e, f, g), rI.prototype.M = function() {
    return function(b, c) {
      return new rI(this.Lf, this.Ze, this.kd, this.xd, this.values, this.re, this.Dh, c);
    };
  }(d, e, f, g));
  return new rI(g, f, e, d, c, b, BI, null);
};
var DI = new U(null, 2, 5, V, [0, 15], null), EI = new n(null, 6, [ml, new U(null, 6, 5, V, [0, 1, 2, 3, 4, 5], null), Ws, new U(null, 5, 5, V, [5, 4, 3, 2, 1], null), ju, new U(null, 5, 5, V, [6, 7, 8, 9, 10], null), Lt, new U(null, 5, 5, V, [6, 7, 8, 11, 12], null), Ln, new U(null, 8, 5, V, [0, 2, 4, 6, 8, 10, 12, 14], null), Ss, new U(null, 8, 5, V, [10, 12, 11, 13, 12, 14, 13, 15], null)], null), FI = Di(EI);
function GI() {
  return Q.k(aB(function(a) {
    return new n(null, 2, [rt, a, Zl, null], null);
  }, EI), Tl, 0, G([Br, null], 0));
}
function HI(a) {
  var b = O.h(FI, Tl.g(a)), c = a.g ? a.g(b) : a.call(null, b), d = Fd.h(Zl.g(c), J(rt.g(c)) - 1), e = Br.g(a);
  return Gh.j(Gh.j(Gh.j(a, new U(null, 1, 5, V, [b], null), function(a, b, c, d) {
    return function(a) {
      return c ? Q.j(a, Zl, null) : q(d) ? a : Hb(Zl.g(a)) ? Q.j(a, Zl, 0) : Gh.j(a, new U(null, 1, 5, V, [Zl], null), Rd);
    };
  }(b, c, d, e)), new U(null, 1, 5, V, [Tl], null), function(a, b, c) {
    return function(a) {
      return c ? VA(J(EI)) : a;
    };
  }(b, c, d, e)), new U(null, 1, 5, V, [Br], null), function(a, b, c, d) {
    return function(a) {
      return c ? 4 : q(q(d) ? 0 < a - 1 : d) ? a - 1 : q(d) ? null : a;
    };
  }(b, c, d, e));
}
function II(a) {
  return q(Zl.g(a)) ? P.h(rt.g(a), Zl.g(a)) : null;
}
var JI = vI(function(a) {
  return kh.h(II, kh.h(a, FI));
}, xI(AI(400, 25, DI))), KI = ve([hl, Pl, bm, hm, Nm, Rm, $m, qn, Ep, Ip, Mp, Kq, Mq, Uq, kr, Er, Es, Ts, Rt, wu, xu], [.2, 12, 5, .01, .2, 7, 9, new U(null, 1, 5, V, [1E3], null), .3, .05, 18, 2, .1, .05, .02, !1, .01, 8, 1E5, .16, 3]);
function LI() {
  return eC(GI(), HI, JI);
}
Aa("org.nfrac.comportex.demos.isolated_1d.input_gen", LI);
var MI = function() {
  function a(a, b) {
    return kC(cC, LI(), a, b);
  }
  function b(a) {
    return c.h(a, KI);
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
Aa("org.nfrac.comportex.demos.isolated_1d.n_region_model", MI);
Aa("comportexviz.demos.isolated_1d.n_region_model", function(a) {
  return MI.g(a);
});
var NI = new U(null, 2, 5, V, [0, 15], null), OI = new n(null, 6, [ml, new U(null, 6, 5, V, [0, 1, 2, 3, 4, 5], null), Ws, new U(null, 5, 5, V, [5, 4, 3, 2, 1], null), ju, new U(null, 5, 5, V, [6, 7, 8, 9, 10], null), Lt, new U(null, 5, 5, V, [6, 7, 8, 11, 12], null), Ln, new U(null, 8, 5, V, [0, 2, 4, 6, 8, 10, 12, 14], null), Ss, new U(null, 8, 5, V, [10, 12, 11, 13, 12, 14, 13, 15], null)], null), PI = Di(OI), QI = 2 * zf(Nb.h(jf, kh.h(J, Ei(OI))));
function RI() {
  return aB(function(a) {
    return new n(null, 3, [rt, a, Zl, null, jl, VA(QI)], null);
  }, OI);
}
function SI(a) {
  return aB(function(a) {
    return Fd.h(Zl.g(a), J(rt.g(a)) - 1) ? Q.k(a, Zl, null, G([jl, VA(QI)], 0)) : Hb(Zl.g(a)) && 0 < jl.g(a) ? Gh.j(a, new U(null, 1, 5, V, [jl], null), mf) : Hb(Zl.g(a)) && 0 === jl.g(a) ? Q.j(a, Zl, 0) : Gh.j(a, new U(null, 1, 5, V, [Zl], null), Rd);
  }, a);
}
function TI(a) {
  return q(Zl.g(a)) ? P.h(rt.g(a), Zl.g(a)) : null;
}
var UI = vI(function(a) {
  return kh.h(TI, kh.h(a, PI));
}, xI(AI(400, 25, NI))), VI = ve([hl, Pl, bm, hm, Nm, Rm, $m, qn, Ip, Mp, Kq, Mq, Uq, kr, Er, Es, Ts, Rt, wu, xu], [.2, 12, 5, .01, .2, 7, 9, new U(null, 1, 5, V, [1E3], null), .05, 18, 2, .1, .05, .02, !1, .01, 8, 1E5, .16, 3]);
function WI() {
  return eC(RI(), SI, UI);
}
Aa("org.nfrac.comportex.demos.mixed_gaps_1d.input_gen", WI);
var XI = function() {
  function a(a, b) {
    return kC(cC, WI(), a, b);
  }
  function b(a) {
    return c.h(a, VI);
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
Aa("org.nfrac.comportex.demos.mixed_gaps_1d.n_region_model", XI);
var YI = new U(null, 2, 5, V, [50, 50], null), ZI = new U(null, 2, 5, V, [10, 10], null), $I = new n(null, 4, [xt, Bh.j(ai, oh.g(1), bk.g(10)), Jt, Ah.h(Bh.j(ai, oh.g(1), bk.g(5)), Bh.j(ai, bk.j(1, 10, 2), oh.g(5))), Gl, Bh.j(ai, bk.g(10), bk.g(10)), bn, $h(ph.h(10, function() {
  return new U(null, 2, 5, V, [UA.h(0, 10), UA.h(0, 10)], null);
}))], null), aJ = Di($I);
function bJ() {
  return Q.k(aB(function(a) {
    return new n(null, 2, [rt, a, Zl, null], null);
  }, $I), dm, 0, G([ts, null], 0));
}
function cJ(a) {
  var b = O.h(aJ, dm.g(a)), c = a.g ? a.g(b) : a.call(null, b), d = Fd.h(Zl.g(c), J(rt.g(c)) - 1), e = ts.g(a);
  return Gh.j(Gh.j(Gh.j(a, new U(null, 1, 5, V, [b], null), function(a, b, c, d) {
    return function(a) {
      return c ? Q.j(a, Zl, null) : q(d) ? a : Hb(Zl.g(a)) ? Q.j(a, Zl, 0) : Gh.j(a, new U(null, 1, 5, V, [Zl], null), Rd);
    };
  }(b, c, d, e)), new U(null, 1, 5, V, [dm], null), function(a, b, c) {
    return function(a) {
      return c ? VA(J($I)) : a;
    };
  }(b, c, d, e)), new U(null, 1, 5, V, [ts], null), function(a, b, c, d) {
    return function(a) {
      return c ? 0 : q(q(d) ? 0 < a - 1 : d) ? a - 1 : q(d) ? null : a;
    };
  }(b, c, d, e));
}
function dJ(a) {
  return q(Zl.g(a)) ? P.h(rt.g(a), Zl.g(a)) : null;
}
var fJ = vI(function(a) {
  return kh.h(dJ, kh.h(a, aJ));
}, xI(function eJ(b, c, d) {
  var e = O.j(d, 0, null), f = O.j(d, 1, null), g = xB(b), h = O.j(b, 0, null), l = O.j(b, 1, null);
  "undefined" === typeof sI && (sI = function(b, c, d, e, f, g, h, l, K, M, L, R) {
    this.cf = b;
    this.kd = c;
    this.O = d;
    this.xh = e;
    this.mj = f;
    this.ji = g;
    this.nj = h;
    this.Yi = l;
    this.$e = K;
    this.Og = M;
    this.mi = L;
    this.Bi = R;
    this.K = 0;
    this.B = 393216;
  }, sI.wb = !0, sI.vb = "org.nfrac.comportex.encoders/t36473", sI.Bb = function() {
    return function(b, c) {
      return Wc(c, "org.nfrac.comportex.encoders/t36473");
    };
  }(g, b, h, l, d, e, f), sI.prototype.Zc = function(b, c, d, e, f, g, h) {
    return function(l, K, M) {
      var L = this, R = O.j(M, 0, null), $ = O.j(M, 1, null);
      if (q(R)) {
        l = function() {
          var b = 0 < R ? R : 0, c = L.$e;
          return b < c ? b : c;
        }();
        K = function() {
          var b = 0 < $ ? $ : 0, c = L.cf;
          return b < c ? b : c;
        }();
        var N = l / L.$e, wa = K / L.cf, Y = pf(N * L.xh), ga = pf(wa * L.Og), fa = new U(null, 2, 5, V, [Y, ga], null), na = Lz(L.O, fa);
        return Uj(lh.h(L.kd, vh.k(function(b, c, d, e, f, g, h, l) {
          return function(b) {
            return Sz.v(L.O, l, b, b - 1);
          };
        }(l, K, N, wa, Y, ga, fa, na, this, M, R, $, b, c, d, e, f, g, h), G([bk.g(10)], 0))));
      }
      return Qj;
    };
  }(g, b, h, l, d, e, f), sI.prototype.Qd = function(b, c, d, e, f, g, h) {
    return function(l, K, M) {
      var L = this, R = this;
      l = function() {
        return function(b, c, d, e, f, g, h, l) {
          return function Da(p) {
            return new Tf(null, function(b, c, d, e, f, g, h, l) {
              return function() {
                for (var s = p;;) {
                  var t = A(s);
                  if (t) {
                    var v = t, N = C(v);
                    if (t = A(function(b, c, d, e, f, g, h, l, p, s, t, v) {
                      return function vc(N) {
                        return new Tf(null, function(b, c) {
                          return function() {
                            for (;;) {
                              var b = A(N);
                              if (b) {
                                if (T(b)) {
                                  var d = x(b), e = J(d), f = Xf(e);
                                  a: {
                                    for (var g = 0;;) {
                                      if (g < e) {
                                        var h = w.h(d, g);
                                        f.add(new U(null, 2, 5, V, [c, h], null));
                                        g += 1;
                                      } else {
                                        d = !0;
                                        break a;
                                      }
                                    }
                                    d = void 0;
                                  }
                                  return d ? $f(rg(f), vc(z(b))) : $f(rg(f), null);
                                }
                                f = C(b);
                                return ee(new U(null, 2, 5, V, [c, f], null), vc(E(b)));
                              }
                              return null;
                            }
                          };
                        }(b, c, d, e, f, g, h, l, p, s, t, v), null, null);
                      };
                    }(s, N, v, t, b, c, d, e, f, g, h, l)(bk.g(L.cf)))) {
                      return wg.h(t, Da(E(s)));
                    }
                    s = E(s);
                  } else {
                    return null;
                  }
                }
              };
            }(b, c, d, e, f, g, h, l), null, null);
          };
        }(R, b, c, d, e, f, g, h)(bk.g(L.$e));
      }();
      return lh.h(M, tI(R, l, K));
    };
  }(g, b, h, l, d, e, f), sI.prototype.Lb = function() {
    return function() {
      return this.O;
    };
  }(g, b, h, l, d, e, f), sI.prototype.L = function() {
    return function() {
      return this.Bi;
    };
  }(g, b, h, l, d, e, f), sI.prototype.M = function() {
    return function(b, c) {
      return new sI(this.cf, this.kd, this.O, this.xh, this.mj, this.ji, this.nj, this.Yi, this.$e, this.Og, this.mi, c);
    };
  }(g, b, h, l, d, e, f));
  return new sI(f, c, g, h, d, b, b, d, e, l, eJ, null);
}(YI, 64, ZI))), gJ = ve([hl, Pl, bm, hm, Nm, Rm, $m, qn, Ep, Ip, Mp, Kq, Mq, Rq, Uq, kr, Er, Es, Ts, Vs, Rt, wu, xu], [.2, 10, 5, .01, .2, 4, 5, new U(null, 2, 5, V, [20, 50], null), .3, .05, 18, 2, .2, .25, .05, .02, !1, .01, 8, 2, 1E5, .16, 3]);
function hJ() {
  return eC(bJ(), cJ, fJ);
}
Aa("org.nfrac.comportex.demos.isolated_2d.input_gen", hJ);
var iJ = function() {
  function a(a, b) {
    return kC(cC, hJ(), a, b);
  }
  function b(a) {
    return c.h(a, gJ);
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
Aa("org.nfrac.comportex.demos.isolated_2d.n_region_model", iJ);
Aa("comportexviz.demos.isolated_2d.n_region_model", function(a) {
  return iJ.g(a);
});
function jJ(a, b) {
  var c = Xe(b) ? S.h(Qg, b) : b, d = P.h(c, Fu), e = P.h(c, Xk), c = P.h(c, Ys);
  KG(a);
  a.translate(c, e);
  a.rotate(Math.PI / 2);
  QG(a, new n(null, 3, [Ys, 0, Xk, 0, Fu, d], null));
  LG(a);
}
function kJ(a) {
  return function(b, c, d, e, f) {
    var g = MA(b), h = O.j(g, 0, null), l = O.j(g, 1, null), p = O.j(g, 2, null), s = P.h(a, h), t = kh.h(C, qA(St.g(f)));
    f = rC(f, t);
    var v = d - 30, B = d - 5, y = Af(e, 3), D = 2 * Af(e, 3);
    KG(c);
    c.font = "small-caps 14px sans-serif";
    UG(c, Fs);
    jJ(c, new n(null, 3, [Fu, "votes %", Ys, v, Xk, D + 14], null));
    jJ(c, new n(null, 3, [Fu, "votes per bit", Ys, B, Xk, D + 14], null));
    c.font = "small-caps bold 14px sans-serif";
    VG(c);
    UG(c, Cu);
    QG(c, new n(null, 3, [Fu, "Sentences", Ys, 5, Xk, 5], null));
    QG(c, new n(null, 3, [Fu, "Current sentence", Ys, 5, Xk, y], null));
    QG(c, new n(null, 3, [Fu, "Predictions", Ys, 5, Xk, D], null));
    c.font = "12px sans-serif";
    for (var H = A(Ng(ai, lh.h(9, mh.h(h - 4, Ng(ai, a))))), K = null, M = 0, L = 0;;) {
      if (L < M) {
        var R = K.H(null, L), $ = O.j(R, 0, null), N = O.j(R, 1, null), R = O.j(N, 0, null), N = O.j(N, 1, null), $ = 5 + 24 * ($ + 1);
        R === h && (RG(c, "#eee"), PG(c, new n(null, 4, [Ys, 0, Xk, $ - Af(24, 4), Qm, d, dr, 24], null)), RG(c, "#000"));
        QG(c, new n(null, 3, [Fu, Yv.h(" ", N), Ys, 5, Xk, $], null));
        L += 1;
      } else {
        if (H = A(H)) {
          T(H) ? (M = x(H), H = z(H), K = M, M = J(M)) : (M = C(H), K = O.j(M, 0, null), L = O.j(M, 1, null), M = O.j(L, 0, null), L = O.j(L, 1, null), K = 5 + 24 * (K + 1), M === h && (RG(c, "#eee"), PG(c, new n(null, 4, [Ys, 0, Xk, K - Af(24, 4), Qm, d, dr, 24], null)), RG(c, "#000")), QG(c, new n(null, 3, [Fu, Yv.h(" ", L), Ys, 5, Xk, K], null)), H = F(H), K = null, M = 0), L = 0;
        } else {
          break;
        }
      }
    }
    H = A(Ng(ai, s));
    K = null;
    for (L = M = 0;;) {
      if (L < M) {
        R = K.H(null, L), $ = O.j(R, 0, null), R = O.j(R, 1, null), N = y + 24 * ($ + 1), $ === l && (RG(c, "#eee"), PG(c, new n(null, 4, [Ys, 0, Xk, N - Af(24, 4), Qm, d, dr, 24], null)), RG(c, "#000")), QG(c, new n(null, 3, [Fu, R, Ys, 5, Xk, N], null)), L += 1;
      } else {
        if (H = A(H)) {
          T(H) ? (M = x(H), H = z(H), K = M, M = J(M)) : (M = C(H), K = O.j(M, 0, null), M = O.j(M, 1, null), L = y + 24 * (K + 1), K === l && (RG(c, "#eee"), PG(c, new n(null, 4, [Ys, 0, Xk, L - Af(24, 4), Qm, d, dr, 24], null)), RG(c, "#000")), QG(c, new n(null, 3, [Fu, M, Ys, 5, Xk, L], null)), H = F(H), K = null, M = 0), L = 0;
        } else {
          break;
        }
      }
    }
    LG(c);
    H = xG.g(1);
    WF(function(a, f, g, h, l, p, s, t, v, N, y, M, L, B, D) {
      return function() {
        var H = function() {
          return function(a) {
            return function() {
              function b(c) {
                for (;;) {
                  var d;
                  a: {
                    try {
                      for (;;) {
                        var e = a(c);
                        if (!X(e, Z)) {
                          d = e;
                          break a;
                        }
                      }
                    } catch (f) {
                      if (f instanceof Object) {
                        c[5] = f;
                        mG(c);
                        d = Z;
                        break a;
                      }
                      throw f;
                    }
                    d = void 0;
                  }
                  if (!X(d, Z)) {
                    return d;
                  }
                }
              }
              function c() {
                var a = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
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
              d.w = c;
              d.g = b;
              return d;
            }();
          }(function(a, f, g, h, l, p, s, t, v, N, y, M, L, B, D) {
            return function(a) {
              var f = a[1];
              if (7 === f) {
                var f = a[2], g = LG(c);
                a[7] = f;
                return kG(a, g);
              }
              if (20 === f) {
                return f = a[8], f = S.h(Qg, f), a[2] = f, a[1] = 22, Z;
              }
              if (1 === f) {
                var f = a[9], f = a[10], f = KG(c), g = cm.g(b), g = Uz(g, t, 8), h = Dn.g(g);
                a[11] = f;
                a[9] = h;
                a[10] = g;
                a[1] = q(h) ? 2 : 3;
                return Z;
              }
              if (4 === f) {
                var f = a[2], g = ve([Ys, Xk, Qm, dr], [0, 30 + B + D, d, e]), g = NG(c, g), h = VG(c), f = A(Ng(ai, f)), l;
                a[12] = null;
                a[13] = 0;
                a[14] = h;
                a[15] = g;
                a[16] = f;
                a[17] = 0;
                a[2] = null;
                a[1] = 6;
                return Z;
              }
              if (15 === f) {
                return a[2] = null, a[1] = 16, Z;
              }
              if (21 === f) {
                return f = a[8], a[2] = f, a[1] = 22, Z;
              }
              if (13 === f) {
                var g = a[12], p = a[18];
                l = a[13];
                var f = a[16], h = a[17], s = a[2], M = P.h(s, nu), L = P.h(s, Gp), s = P.h(s, Zm), H = B + D * (p + 1), p = UG(c, Cu), s = ve([Fu, Ys, Xk], [s, v, H]), s = QG(c, s), K = UG(c, Fs), R = [Fu, Ys, Xk], L = SA.g(100 * L), L = ["" + u.g(L), N, H], L = ve(R, L), L = QG(c, L), R = [Fu, Ys, Xk], M = SA.g(M), M = ["" + u.g(M), y, H], M = ve(R, M), M = QG(c, M);
                a[12] = g;
                a[13] = l + 1;
                a[19] = s;
                a[20] = K;
                a[21] = M;
                a[16] = f;
                a[17] = h;
                a[22] = L;
                a[23] = p;
                a[2] = null;
                a[1] = 6;
                return Z;
              }
              return 22 === f ? (g = a[24], f = a[25], h = a[2], p = P.h(h, nu), s = P.h(h, Gp), h = P.h(h, Zm), M = B + D * (g + 1), g = UG(c, Cu), h = ve([Fu, Ys, Xk], [h, v, M]), h = QG(c, h), l = UG(c, Fs), K = [Fu, Ys, Xk], s = SA.g(100 * s), s = ["" + u.g(s), N, M], s = ve(K, s), s = QG(c, s), K = [Fu, Ys, Xk], p = SA.g(p), p = ["" + u.g(p), y, M], p = ve(K, p), p = QG(c, p), f = F(f), a[26] = l, a[12] = null, a[13] = 0, a[27] = p, a[16] = f, a[28] = s, a[17] = 0, a[29] = g, a[30] = h, a[2] = 
              null, a[1] = 6, Z) : 6 === f ? (l = a[13], h = a[17], a[1] = q(l < h) ? 8 : 9, Z) : 17 === f ? (f = a[25], g = x(f), f = z(f), h = J(g), a[12] = g, a[13] = 0, a[16] = f, a[17] = h, a[2] = null, a[1] = 6, Z) : 3 === f ? (f = a[10], a[2] = f, a[1] = 4, Z) : 12 === f ? (f = a[31], a[2] = f, a[1] = 13, Z) : 2 === f ? (f = a[9], iG(a, 5, f)) : 19 === f ? (f = a[2], a[2] = f, a[1] = 16, Z) : 11 === f ? (f = a[31], f = S.h(Qg, f), a[2] = f, a[1] = 13, Z) : 9 === f ? (f = a[16], f = A(f), a[25] = 
              f, a[1] = f ? 14 : 15, Z) : 5 === f ? (f = a[2], a[2] = f, a[1] = 4, Z) : 14 === f ? (f = a[25], f = T(f), a[1] = f ? 17 : 18, Z) : 16 === f ? (f = a[2], a[2] = f, a[1] = 10, Z) : 10 === f ? (f = a[2], a[2] = f, a[1] = 7, Z) : 18 === f ? (f = a[25], f = C(f), g = O.j(f, 0, null), f = O.j(f, 1, null), h = Xe(f), a[24] = g, a[8] = f, a[1] = h ? 20 : 21, Z) : 8 === f ? (g = a[12], l = a[13], f = w.h(g, l), p = O.j(f, 0, null), f = O.j(f, 1, null), g = Xe(f), a[18] = p, a[31] = f, a[1] = 
              g ? 11 : 12, Z) : null;
            };
          }(a, f, g, h, l, p, s, t, v, N, y, M, L, B, D), a, f, g, h, l, p, s, t, v, N, y, M, L, B, D);
        }(), K = function() {
          var b = H.w ? H.w() : H.call(null);
          b[6] = a;
          return b;
        }();
        return hG(K);
      };
    }(H, g, h, l, p, s, t, f, 5, v, B, 5, y, D, 24));
    return H;
  };
}
;function lJ(a) {
  if ("function" == typeof a.Wc) {
    return a.Wc();
  }
  if (ja(a)) {
    return a.split("");
  }
  if (ia(a)) {
    for (var b = [], c = a.length, d = 0;d < c;d++) {
      b.push(a[d]);
    }
    return b;
  }
  return Va(a);
}
function mJ(a, b) {
  if ("function" == typeof a.forEach) {
    a.forEach(b, void 0);
  } else {
    if (ia(a) || ja(a)) {
      kb(a, b, void 0);
    } else {
      var c;
      if ("function" == typeof a.bc) {
        c = a.bc();
      } else {
        if ("function" != typeof a.Wc) {
          if (ia(a) || ja(a)) {
            c = [];
            for (var d = a.length, e = 0;e < d;e++) {
              c.push(e);
            }
          } else {
            c = Xa(a);
          }
        } else {
          c = void 0;
        }
      }
      for (var d = lJ(a), e = d.length, f = 0;f < e;f++) {
        b.call(void 0, d[f], c && c[f], a);
      }
    }
  }
}
;function nJ(a) {
  var b;
  b || (b = oJ(a || arguments.callee.caller, []));
  return b;
}
function oJ(a, b) {
  var c = [];
  if (0 <= hb(b, a)) {
    c.push("[...circular reference...]");
  } else {
    if (a && 50 > b.length) {
      c.push(pJ(a) + "(");
      for (var d = a.arguments, e = 0;d && e < d.length;e++) {
        0 < e && c.push(", ");
        var f;
        f = d[e];
        switch(typeof f) {
          case "object":
            f = f ? "object" : "null";
            break;
          case "string":
            break;
          case "number":
            f = String(f);
            break;
          case "boolean":
            f = f ? "true" : "false";
            break;
          case "function":
            f = (f = pJ(f)) ? f : "[fn]";
            break;
          default:
            f = typeof f;
        }
        40 < f.length && (f = f.substr(0, 40) + "...");
        c.push(f);
      }
      b.push(a);
      c.push(")\n");
      try {
        c.push(oJ(a.caller, b));
      } catch (g) {
        c.push("[exception trying to get caller]\n");
      }
    } else {
      a ? c.push("[...long stack...]") : c.push("[end]");
    }
  }
  return c.join("");
}
function pJ(a) {
  if (qJ[a]) {
    return qJ[a];
  }
  a = String(a);
  if (!qJ[a]) {
    var b = /function ([^\(]+)/.exec(a);
    qJ[a] = b ? b[1] : "[Anonymous]";
  }
  return qJ[a];
}
var qJ = {};
function rJ(a, b, c, d, e) {
  this.reset(a, b, c, d, e);
}
rJ.prototype.Jg = null;
rJ.prototype.Ig = null;
var sJ = 0;
rJ.prototype.reset = function(a, b, c, d, e) {
  "number" == typeof e || sJ++;
  d || za();
  this.ke = a;
  this.Di = b;
  delete this.Jg;
  delete this.Ig;
};
rJ.prototype.vh = function(a) {
  this.ke = a;
};
function tJ(a) {
  this.Fi = a;
  this.Pg = this.ff = this.ke = this.vc = null;
}
function uJ(a, b) {
  this.name = a;
  this.value = b;
}
uJ.prototype.toString = function() {
  return this.name;
};
var vJ = new uJ("SEVERE", 1E3), wJ = new uJ("CONFIG", 700), xJ = new uJ("FINE", 500);
k = tJ.prototype;
k.getParent = function() {
  return this.vc;
};
k.Lg = function() {
  this.ff || (this.ff = {});
  return this.ff;
};
k.vh = function(a) {
  this.ke = a;
};
function yJ(a) {
  if (a.ke) {
    return a.ke;
  }
  if (a.vc) {
    return yJ(a.vc);
  }
  eb("Root logger has no level set.");
  return null;
}
k.log = function(a, b, c) {
  if (a.value >= yJ(this).value) {
    for (la(b) && (b = b()), a = this.Ng(a, b, c, tJ.prototype.log), b = "log:" + a.Di, ba.console && (ba.console.timeStamp ? ba.console.timeStamp(b) : ba.console.markTimeline && ba.console.markTimeline(b)), ba.msWriteProfilerMark && ba.msWriteProfilerMark(b), b = this;b;) {
      c = b;
      var d = a;
      if (c.Pg) {
        for (var e = 0, f = void 0;f = c.Pg[e];e++) {
          f(d);
        }
      }
      b = b.getParent();
    }
  }
};
k.Ng = function(a, b, c, d) {
  a = new rJ(a, String(b), this.Fi);
  if (c) {
    a.Jg = c;
    var e;
    d = d || tJ.prototype.Ng;
    try {
      var f;
      var g = da("window.location.href");
      if (ja(c)) {
        f = {message:c, name:"Unknown error", lineNumber:"Not available", fileName:g, stack:"Not available"};
      } else {
        var h, l;
        b = !1;
        try {
          h = c.lineNumber || c.Cj || "Not available";
        } catch (p) {
          h = "Not available", b = !0;
        }
        try {
          l = c.fileName || c.filename || c.sourceURL || ba.$googDebugFname || g;
        } catch (s) {
          l = "Not available", b = !0;
        }
        f = !b && c.lineNumber && c.fileName && c.stack && c.message && c.name ? c : {message:c.message || "Not available", name:c.name || "UnknownError", lineNumber:h, fileName:l, stack:c.stack || "Not available"};
      }
      e = "Message: " + Ia(f.message) + '\nUrl: \x3ca href\x3d"view-source:' + f.fileName + '" target\x3d"_new"\x3e' + f.fileName + "\x3c/a\x3e\nLine: " + f.lineNumber + "\n\nBrowser stack:\n" + Ia(f.stack + "-\x3e ") + "[end]\n\nJS stack traversal:\n" + Ia(nJ(d) + "-\x3e ");
    } catch (t) {
      e = "Exception trying to expose exception! You win, we lose. " + t;
    }
    a.Ig = e;
  }
  return a;
};
k.ne = function(a) {
  this.vc = a;
};
var zJ = {}, AJ = null;
function BJ(a) {
  AJ || (AJ = new tJ(""), zJ[""] = AJ, AJ.vh(wJ));
  var b;
  if (!(b = zJ[a])) {
    b = new tJ(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = BJ(a.substr(0, c));
    c.Lg()[d] = b;
    b.ne(c);
    zJ[a] = b;
  }
  return b;
}
;function CJ(a, b) {
  a && a.log(xJ, b, void 0);
}
;function DJ() {
}
DJ.prototype.ng = null;
function EJ(a) {
  var b;
  (b = a.ng) || (b = {}, FJ(a) && (b[0] = !0, b[1] = !0), b = a.ng = b);
  return b;
}
;var GJ;
function HJ() {
}
Ca(HJ, DJ);
function IJ(a) {
  return(a = FJ(a)) ? new ActiveXObject(a) : new XMLHttpRequest;
}
function FJ(a) {
  if (!a.Qg && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
    for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0;c < b.length;c++) {
      var d = b[c];
      try {
        return new ActiveXObject(d), a.Qg = d;
      } catch (e) {
      }
    }
    throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
  }
  return a.Qg;
}
GJ = new HJ;
var JJ = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;
function KJ(a) {
  if (LJ) {
    LJ = !1;
    var b = ba.location;
    if (b) {
      var c = b.href;
      if (c && (c = (c = KJ(c)[3] || null) && decodeURIComponent(c)) && c != b.hostname) {
        throw LJ = !0, Error();
      }
    }
  }
  return a.match(JJ);
}
var LJ = Vu;
function MJ(a) {
  jI.call(this);
  this.headers = new Ku;
  this.bf = a || null;
  this.Bd = !1;
  this.af = this.qa = null;
  this.ie = this.Sg = this.je = "";
  this.ee = this.Kf = this.Ke = this.Ff = !1;
  this.Ud = 0;
  this.Ue = null;
  this.rh = NJ;
  this.Xe = this.yh = !1;
}
Ca(MJ, jI);
var NJ = "", OJ = MJ.prototype, PJ = BJ("goog.net.XhrIo");
OJ.fc = PJ;
var QJ = /^https?$/i, RJ = ["POST", "PUT"];
k = MJ.prototype;
k.send = function(a, b, c, d) {
  if (this.qa) {
    throw Error("[goog.net.XhrIo] Object is active with another request\x3d" + this.je + "; newUri\x3d" + a);
  }
  b = b ? b.toUpperCase() : "GET";
  this.je = a;
  this.ie = "";
  this.Sg = b;
  this.Ff = !1;
  this.Bd = !0;
  this.qa = this.bf ? IJ(this.bf) : IJ(GJ);
  this.af = this.bf ? EJ(this.bf) : EJ(GJ);
  this.qa.onreadystatechange = ya(this.Yg, this);
  try {
    CJ(this.fc, SJ(this, "Opening Xhr")), this.Kf = !0, this.qa.open(b, String(a), !0), this.Kf = !1;
  } catch (e) {
    CJ(this.fc, SJ(this, "Error opening Xhr: " + e.message));
    TJ(this, e);
    return;
  }
  a = c || "";
  var f = this.headers.clone();
  d && mJ(d, function(a, b) {
    f.set(b, a);
  });
  d = mb(f.bc());
  c = ba.FormData && a instanceof ba.FormData;
  !(0 <= hb(RJ, b)) || d || c || f.set("Content-Type", "application/x-www-form-urlencoded;charset\x3dutf-8");
  f.forEach(function(a, b) {
    this.qa.setRequestHeader(b, a);
  }, this);
  this.rh && (this.qa.responseType = this.rh);
  "withCredentials" in this.qa && (this.qa.withCredentials = this.yh);
  try {
    UJ(this), 0 < this.Ud && (this.Xe = VJ(this.qa), CJ(this.fc, SJ(this, "Will abort after " + this.Ud + "ms if incomplete, xhr2 " + this.Xe)), this.Xe ? (this.qa.timeout = this.Ud, this.qa.ontimeout = ya(this.wh, this)) : this.Ue = lI(this.wh, this.Ud, this)), CJ(this.fc, SJ(this, "Sending request")), this.Ke = !0, this.qa.send(a), this.Ke = !1;
  } catch (g) {
    CJ(this.fc, SJ(this, "Send error: " + g.message)), TJ(this, g);
  }
};
function VJ(a) {
  return Tu && Zu(9) && ka(a.timeout) && ca(a.ontimeout);
}
function nb(a) {
  return "content-type" == a.toLowerCase();
}
k.wh = function() {
  "undefined" != typeof aa && this.qa && (this.ie = "Timed out after " + this.Ud + "ms, aborting", CJ(this.fc, SJ(this, this.ie)), this.dispatchEvent("timeout"), this.abort(8));
};
function TJ(a, b) {
  a.Bd = !1;
  a.qa && (a.ee = !0, a.qa.abort(), a.ee = !1);
  a.ie = b;
  WJ(a);
  XJ(a);
}
function WJ(a) {
  a.Ff || (a.Ff = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"));
}
k.abort = function() {
  this.qa && this.Bd && (CJ(this.fc, SJ(this, "Aborting")), this.Bd = !1, this.ee = !0, this.qa.abort(), this.ee = !1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), XJ(this));
};
k.Yg = function() {
  this.bi || (this.Kf || this.Ke || this.ee ? YJ(this) : this.Ki());
};
k.Ki = function() {
  YJ(this);
};
function YJ(a) {
  if (a.Bd && "undefined" != typeof aa) {
    if (a.af[1] && 4 == ZJ(a) && 2 == $J(a)) {
      CJ(a.fc, SJ(a, "Local request error detected and ignored"));
    } else {
      if (a.Ke && 4 == ZJ(a)) {
        lI(a.Yg, 0, a);
      } else {
        if (a.dispatchEvent("readystatechange"), 4 == ZJ(a)) {
          CJ(a.fc, SJ(a, "Request complete"));
          a.Bd = !1;
          try {
            if (aK(a)) {
              a.dispatchEvent("complete"), a.dispatchEvent("success");
            } else {
              var b;
              try {
                b = 2 < ZJ(a) ? a.qa.statusText : "";
              } catch (c) {
                CJ(a.fc, "Can not get status: " + c.message), b = "";
              }
              a.ie = b + " [" + $J(a) + "]";
              WJ(a);
            }
          } finally {
            XJ(a);
          }
        }
      }
    }
  }
}
function XJ(a) {
  if (a.qa) {
    UJ(a);
    var b = a.qa, c = a.af[0] ? ea : null;
    a.qa = null;
    a.af = null;
    a.dispatchEvent("ready");
    try {
      b.onreadystatechange = c;
    } catch (d) {
      (a = a.fc) && a.log(vJ, "Problem encountered resetting onreadystatechange: " + d.message, void 0);
    }
  }
}
function UJ(a) {
  a.qa && a.Xe && (a.qa.ontimeout = null);
  ka(a.Ue) && (ba.clearTimeout(a.Ue), a.Ue = null);
}
function aK(a) {
  var b = $J(a), c;
  a: {
    switch(b) {
      case 200:
      ;
      case 201:
      ;
      case 202:
      ;
      case 204:
      ;
      case 206:
      ;
      case 304:
      ;
      case 1223:
        c = !0;
        break a;
      default:
        c = !1;
    }
  }
  if (!c) {
    if (b = 0 === b) {
      a = KJ(String(a.je))[1] || null, !a && self.location && (a = self.location.protocol, a = a.substr(0, a.length - 1)), b = !QJ.test(a ? a.toLowerCase() : "");
    }
    c = b;
  }
  return c;
}
function ZJ(a) {
  return a.qa ? a.qa.readyState : 0;
}
function $J(a) {
  try {
    return 2 < ZJ(a) ? a.qa.status : -1;
  } catch (b) {
    return-1;
  }
}
function bK(a) {
  try {
    return a.qa ? a.qa.responseText : "";
  } catch (b) {
    return CJ(a.fc, "Can not get responseText: " + b.message), "";
  }
}
k.getAllResponseHeaders = function() {
  return this.qa && 4 == ZJ(this) ? this.qa.getAllResponseHeaders() : "";
};
function SJ(a, b) {
  return b + " [" + a.Sg + " " + a.je + " " + $J(a) + "]";
}
;var cK = null, dK = Uu || Vu || Su || "function" == typeof ba.atob;
function eK(a) {
  var b;
  if (q(a)) {
    if (dK) {
      b = ba.btoa(a);
    } else {
      b = [];
      for (var c = 0, d = 0;d < a.length;d++) {
        for (var e = a.charCodeAt(d);255 < e;) {
          b[c++] = e & 255, e >>= 8;
        }
        b[c++] = e;
      }
      if (!ia(b)) {
        throw Error("encodeByteArray takes an array as a parameter");
      }
      if (!cK) {
        for (cK = {}, a = 0;65 > a;a++) {
          cK[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d".charAt(a);
        }
      }
      a = cK;
      c = [];
      for (d = 0;d < b.length;d += 3) {
        var f = b[d], g = (e = d + 1 < b.length) ? b[d + 1] : 0, h = d + 2 < b.length, l = h ? b[d + 2] : 0, p = f >> 2, f = (f & 3) << 4 | g >> 4, g = (g & 15) << 2 | l >> 6, l = l & 63;
        h || (l = 64, e || (g = 64));
        c.push(a[p], a[f], a[g], a[l]);
      }
      b = c.join("");
    }
  } else {
    b = null;
  }
  return b;
}
var fK = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = G(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    O.j(b, 0, null);
    var e;
    q(a) ? (e = "" + u.g(a), e = Xv(encodeURIComponent(e), "*", "%2A")) : e = null;
    return e;
  }
  a.D = 1;
  a.q = function(a) {
    var d = C(a);
    a = E(a);
    return b(d, a);
  };
  a.k = b;
  return a;
}(), gK = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = G(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    O.j(b, 0, null);
    return q(a) ? decodeURIComponent(a) : null;
  }
  a.D = 1;
  a.q = function(a) {
    var d = C(a);
    a = E(a);
    return b(d, a);
  };
  a.k = b;
  return a;
}();
ve("TKGMYZEBP".split(""), [Math.pow(1024, 4), Math.pow(1024, 1), Math.pow(1024, 3), Math.pow(1024, 2), Math.pow(1024, 8), Math.pow(1024, 7), Math.pow(1024, 6), Math.pow(1024, 0), Math.pow(1024, 5)]);
function hK(a, b) {
  var c;
  if (a instanceof hK) {
    this.cc = ca(b) ? b : a.cc, iK(this, a.yd), c = a.Ye, jK(this), this.Ye = c, c = a.rd, jK(this), this.rd = c, kK(this, a.le), c = a.Rd, jK(this), this.Rd = c, lK(this, a.ld.clone()), c = a.Je, jK(this), this.Je = c;
  } else {
    if (a && (c = KJ(String(a)))) {
      this.cc = !!b;
      iK(this, c[1] || "", !0);
      var d = c[2] || "";
      jK(this);
      this.Ye = d ? decodeURIComponent(d) : "";
      d = c[3] || "";
      jK(this);
      this.rd = d ? decodeURIComponent(d) : "";
      kK(this, c[4]);
      d = c[5] || "";
      jK(this);
      this.Rd = d ? decodeURIComponent(d) : "";
      lK(this, c[6] || "", !0);
      c = c[7] || "";
      jK(this);
      this.Je = c ? decodeURIComponent(c) : "";
    } else {
      this.cc = !!b, this.ld = new mK(null, 0, this.cc);
    }
  }
}
k = hK.prototype;
k.yd = "";
k.Ye = "";
k.rd = "";
k.le = null;
k.Rd = "";
k.Je = "";
k.li = !1;
k.cc = !1;
k.toString = function() {
  var a = [], b = this.yd;
  b && a.push(nK(b, oK), ":");
  if (b = this.rd) {
    a.push("//");
    var c = this.Ye;
    c && a.push(nK(c, oK), "@");
    a.push(encodeURIComponent(String(b)));
    b = this.le;
    null != b && a.push(":", String(b));
  }
  if (b = this.Rd) {
    this.rd && "/" != b.charAt(0) && a.push("/"), a.push(nK(b, "/" == b.charAt(0) ? pK : qK));
  }
  (b = this.ld.toString()) && a.push("?", b);
  (b = this.Je) && a.push("#", nK(b, rK));
  return a.join("");
};
k.clone = function() {
  return new hK(this);
};
function iK(a, b, c) {
  jK(a);
  a.yd = c ? b ? decodeURIComponent(b) : "" : b;
  a.yd && (a.yd = a.yd.replace(/:$/, ""));
}
function kK(a, b) {
  jK(a);
  if (b) {
    b = Number(b);
    if (isNaN(b) || 0 > b) {
      throw Error("Bad port number " + b);
    }
    a.le = b;
  } else {
    a.le = null;
  }
}
function lK(a, b, c) {
  jK(a);
  b instanceof mK ? (a.ld = b, a.ld.eg(a.cc)) : (c || (b = nK(b, sK)), a.ld = new mK(b, 0, a.cc));
}
function jK(a) {
  if (a.li) {
    throw Error("Tried to modify a read-only Uri");
  }
}
k.eg = function(a) {
  this.cc = a;
  this.ld && this.ld.eg(a);
  return this;
};
function nK(a, b) {
  return ja(a) ? encodeURI(a).replace(b, tK) : null;
}
function tK(a) {
  a = a.charCodeAt(0);
  return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
}
var oK = /[#\/\?@]/g, qK = /[\#\?:]/g, pK = /[\#\?]/g, sK = /[\#\?@]/g, rK = /#/g;
function mK(a, b, c) {
  this.Sb = a || null;
  this.cc = !!c;
}
function uK(a) {
  if (!a.Ma && (a.Ma = new Ku, a.Aa = 0, a.Sb)) {
    for (var b = a.Sb.split("\x26"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("\x3d"), e = null, f = null;
      0 <= d ? (e = b[c].substring(0, d), f = b[c].substring(d + 1)) : e = b[c];
      e = decodeURIComponent(e.replace(/\+/g, " "));
      e = vK(a, e);
      a.add(e, f ? decodeURIComponent(f.replace(/\+/g, " ")) : "");
    }
  }
}
k = mK.prototype;
k.Ma = null;
k.Aa = null;
k.Mg = function() {
  uK(this);
  return this.Aa;
};
k.add = function(a, b) {
  uK(this);
  this.Sb = null;
  a = vK(this, a);
  var c = this.Ma.get(a);
  c || this.Ma.set(a, c = []);
  c.push(b);
  this.Aa++;
  return this;
};
k.remove = function(a) {
  uK(this);
  a = vK(this, a);
  return this.Ma.ce(a) ? (this.Sb = null, this.Aa -= this.Ma.get(a).length, this.Ma.remove(a)) : !1;
};
k.clear = function() {
  this.Ma = this.Sb = null;
  this.Aa = 0;
};
k.Mf = function() {
  uK(this);
  return 0 == this.Aa;
};
k.ce = function(a) {
  uK(this);
  a = vK(this, a);
  return this.Ma.ce(a);
};
k.bc = function() {
  uK(this);
  for (var a = this.Ma.Wc(), b = this.Ma.bc(), c = [], d = 0;d < b.length;d++) {
    for (var e = a[d], f = 0;f < e.length;f++) {
      c.push(b[d]);
    }
  }
  return c;
};
k.Wc = function(a) {
  uK(this);
  var b = [];
  if (ja(a)) {
    this.ce(a) && (b = ob(b, this.Ma.get(vK(this, a))));
  } else {
    a = this.Ma.Wc();
    for (var c = 0;c < a.length;c++) {
      b = ob(b, a[c]);
    }
  }
  return b;
};
k.set = function(a, b) {
  uK(this);
  this.Sb = null;
  a = vK(this, a);
  this.ce(a) && (this.Aa -= this.Ma.get(a).length);
  this.Ma.set(a, [b]);
  this.Aa++;
  return this;
};
k.get = function(a, b) {
  var c = a ? this.Wc(a) : [];
  return 0 < c.length ? String(c[0]) : b;
};
k.toString = function() {
  if (this.Sb) {
    return this.Sb;
  }
  if (!this.Ma) {
    return "";
  }
  for (var a = [], b = this.Ma.bc(), c = 0;c < b.length;c++) {
    for (var d = b[c], e = encodeURIComponent(String(d)), d = this.Wc(d), f = 0;f < d.length;f++) {
      var g = e;
      "" !== d[f] && (g += "\x3d" + encodeURIComponent(String(d[f])));
      a.push(g);
    }
  }
  return this.Sb = a.join("\x26");
};
k.clone = function() {
  var a = new mK;
  a.Sb = this.Sb;
  this.Ma && (a.Ma = this.Ma.clone(), a.Aa = this.Aa);
  return a;
};
function vK(a, b) {
  var c = String(b);
  a.cc && (c = c.toLowerCase());
  return c;
}
k.eg = function(a) {
  a && !this.cc && (uK(this), this.Sb = null, this.Ma.forEach(function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), this.remove(d), 0 < a.length && (this.Sb = null, this.Ma.set(vK(this, d), pb(a)), this.Aa += a.length));
  }, this));
  this.cc = a;
};
var wK = "undefined" != typeof Object.keys ? function(a) {
  return Object.keys(a);
} : function(a) {
  return Xa(a);
}, xK = "undefined" != typeof Array.isArray ? function(a) {
  return Array.isArray(a);
} : function(a) {
  return "array" === m(a);
};
function yK() {
  return Math.round(15 * Math.random()).toString(16);
}
;function zK(a, b) {
  if (null == a) {
    return null == b;
  }
  if (a === b) {
    return!0;
  }
  if ("object" === typeof a) {
    if (xK(a)) {
      if (xK(b) && a.length === b.length) {
        for (var c = 0;c < a.length;c++) {
          if (!zK(a[c], b[c])) {
            return!1;
          }
        }
        return!0;
      }
      return!1;
    }
    if (a.Yb) {
      return a.Yb(b);
    }
    if (null != b && "object" === typeof b) {
      if (b.Yb) {
        return b.Yb(a);
      }
      var c = 0, d = wK(b).length, e;
      for (e in a) {
        if (a.hasOwnProperty(e) && (c++, !b.hasOwnProperty(e) || !zK(a[e], b[e]))) {
          return!1;
        }
      }
      return c === d;
    }
  }
  return!1;
}
function AK(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
var BK = {}, CK = 0;
function DK(a) {
  var b = 0;
  if (null != a.forEach) {
    a.forEach(function(a, c) {
      b = (b + (EK(c) ^ EK(a))) % 4503599627370496;
    });
  } else {
    for (var c = wK(a), d = 0;d < c.length;d++) {
      var e = c[d], f = a[e], b = (b + (EK(e) ^ EK(f))) % 4503599627370496
    }
  }
  return b;
}
function FK(a) {
  var b = 0;
  if (xK(a)) {
    for (var c = 0;c < a.length;c++) {
      b = AK(b, EK(a[c]));
    }
  } else {
    a.forEach && a.forEach(function(a) {
      b = AK(b, EK(a));
    });
  }
  return b;
}
function EK(a) {
  if (null == a) {
    return 0;
  }
  switch(typeof a) {
    case "number":
      return a;
    case "boolean":
      return!0 === a ? 1 : 0;
    case "string":
      var b = BK[a];
      if (null == b) {
        for (var c = b = 0;c < a.length;++c) {
          b = 31 * b + a.charCodeAt(c), b %= 4294967296;
        }
        CK++;
        256 <= CK && (BK = {}, CK = 1);
        BK[a] = b;
      }
      a = b;
      return a;
    default:
      return a instanceof Date ? a.valueOf() : xK(a) ? FK(a) : a.mc ? a.mc() : DK(a);
  }
}
;function GK(a, b) {
  this.ya = a | 0;
  this.pa = b | 0;
}
var HK = {};
function IK(a) {
  if (-128 <= a && 128 > a) {
    var b = HK[a];
    if (b) {
      return b;
    }
  }
  b = new GK(a | 0, 0 > a ? -1 : 0);
  -128 <= a && 128 > a && (HK[a] = b);
  return b;
}
function JK(a) {
  return isNaN(a) || !isFinite(a) ? KK : a <= -LK ? MK : a + 1 >= LK ? NK : 0 > a ? OK(JK(-a)) : new GK(a % PK | 0, a / PK | 0);
}
function QK(a, b) {
  return new GK(a, b);
}
function RK(a, b) {
  if (0 == a.length) {
    throw Error("number format error: empty string");
  }
  var c = b || 10;
  if (2 > c || 36 < c) {
    throw Error("radix out of range: " + c);
  }
  if ("-" == a.charAt(0)) {
    return OK(RK(a.substring(1), c));
  }
  if (0 <= a.indexOf("-")) {
    throw Error('number format error: interior "-" character: ' + a);
  }
  for (var d = JK(Math.pow(c, 8)), e = KK, f = 0;f < a.length;f += 8) {
    var g = Math.min(8, a.length - f), h = parseInt(a.substring(f, f + g), c);
    8 > g ? (g = JK(Math.pow(c, g)), e = e.multiply(g).add(JK(h))) : (e = e.multiply(d), e = e.add(JK(h)));
  }
  return e;
}
var PK = 4294967296, LK = PK * PK / 2, KK = IK(0), SK = IK(1), TK = IK(-1), NK = QK(-1, 2147483647), MK = QK(0, -2147483648), UK = IK(16777216);
function VK(a) {
  return a.pa * PK + (0 <= a.ya ? a.ya : PK + a.ya);
}
k = GK.prototype;
k.toString = function(a) {
  a = a || 10;
  if (2 > a || 36 < a) {
    throw Error("radix out of range: " + a);
  }
  if (WK(this)) {
    return "0";
  }
  if (0 > this.pa) {
    if (this.Cb(MK)) {
      var b = JK(a), c = XK(this, b), b = YK(c.multiply(b), this);
      return c.toString(a) + b.ya.toString(a);
    }
    return "-" + OK(this).toString(a);
  }
  for (var c = JK(Math.pow(a, 6)), b = this, d = "";;) {
    var e = XK(b, c), f = YK(b, e.multiply(c)).ya.toString(a), b = e;
    if (WK(b)) {
      return f + d;
    }
    for (;6 > f.length;) {
      f = "0" + f;
    }
    d = "" + f + d;
  }
};
function WK(a) {
  return 0 == a.pa && 0 == a.ya;
}
k.Cb = function(a) {
  return this.pa == a.pa && this.ya == a.ya;
};
k.compare = function(a) {
  if (this.Cb(a)) {
    return 0;
  }
  var b = 0 > this.pa, c = 0 > a.pa;
  return b && !c ? -1 : !b && c ? 1 : 0 > YK(this, a).pa ? -1 : 1;
};
function OK(a) {
  return a.Cb(MK) ? MK : QK(~a.ya, ~a.pa).add(SK);
}
k.add = function(a) {
  var b = this.pa >>> 16, c = this.pa & 65535, d = this.ya >>> 16, e = a.pa >>> 16, f = a.pa & 65535, g = a.ya >>> 16, h;
  h = 0 + ((this.ya & 65535) + (a.ya & 65535));
  a = 0 + (h >>> 16);
  a += d + g;
  d = 0 + (a >>> 16);
  d += c + f;
  c = 0 + (d >>> 16);
  c = c + (b + e) & 65535;
  return QK((a & 65535) << 16 | h & 65535, c << 16 | d & 65535);
};
function YK(a, b) {
  return a.add(OK(b));
}
k.multiply = function(a) {
  if (WK(this) || WK(a)) {
    return KK;
  }
  if (this.Cb(MK)) {
    return 1 == (a.ya & 1) ? MK : KK;
  }
  if (a.Cb(MK)) {
    return 1 == (this.ya & 1) ? MK : KK;
  }
  if (0 > this.pa) {
    return 0 > a.pa ? OK(this).multiply(OK(a)) : OK(OK(this).multiply(a));
  }
  if (0 > a.pa) {
    return OK(this.multiply(OK(a)));
  }
  if (0 > this.compare(UK) && 0 > a.compare(UK)) {
    return JK(VK(this) * VK(a));
  }
  var b = this.pa >>> 16, c = this.pa & 65535, d = this.ya >>> 16, e = this.ya & 65535, f = a.pa >>> 16, g = a.pa & 65535, h = a.ya >>> 16;
  a = a.ya & 65535;
  var l, p, s, t;
  t = 0 + e * a;
  s = 0 + (t >>> 16);
  s += d * a;
  p = 0 + (s >>> 16);
  s = (s & 65535) + e * h;
  p += s >>> 16;
  s &= 65535;
  p += c * a;
  l = 0 + (p >>> 16);
  p = (p & 65535) + d * h;
  l += p >>> 16;
  p &= 65535;
  p += e * g;
  l += p >>> 16;
  p &= 65535;
  l = l + (b * a + c * h + d * g + e * f) & 65535;
  return QK(s << 16 | t & 65535, l << 16 | p);
};
function XK(a, b) {
  if (WK(b)) {
    throw Error("division by zero");
  }
  if (WK(a)) {
    return KK;
  }
  if (a.Cb(MK)) {
    if (b.Cb(SK) || b.Cb(TK)) {
      return MK;
    }
    if (b.Cb(MK)) {
      return SK;
    }
    var c;
    c = 1;
    if (0 == c) {
      c = a;
    } else {
      var d = a.pa;
      c = 32 > c ? QK(a.ya >>> c | d << 32 - c, d >> c) : QK(d >> c - 32, 0 <= d ? 0 : -1);
    }
    c = XK(c, b).shiftLeft(1);
    if (c.Cb(KK)) {
      return 0 > b.pa ? SK : TK;
    }
    d = YK(a, b.multiply(c));
    return c.add(XK(d, b));
  }
  if (b.Cb(MK)) {
    return KK;
  }
  if (0 > a.pa) {
    return 0 > b.pa ? XK(OK(a), OK(b)) : OK(XK(OK(a), b));
  }
  if (0 > b.pa) {
    return OK(XK(a, OK(b)));
  }
  for (var e = KK, d = a;0 <= d.compare(b);) {
    c = Math.max(1, Math.floor(VK(d) / VK(b)));
    for (var f = Math.ceil(Math.log(c) / Math.LN2), f = 48 >= f ? 1 : Math.pow(2, f - 48), g = JK(c), h = g.multiply(b);0 > h.pa || 0 < h.compare(d);) {
      c -= f, g = JK(c), h = g.multiply(b);
    }
    WK(g) && (g = SK);
    e = e.add(g);
    d = YK(d, h);
  }
  return e;
}
k.shiftLeft = function(a) {
  a &= 63;
  if (0 == a) {
    return this;
  }
  var b = this.ya;
  return 32 > a ? QK(b << a, this.pa << a | b >>> 32 - a) : QK(0, b << a - 32);
};
function ZK(a, b) {
  b &= 63;
  if (0 == b) {
    return a;
  }
  var c = a.pa;
  return 32 > b ? QK(a.ya >>> b | c << 32 - b, c >>> b) : 32 == b ? QK(c, 0) : QK(c >>> b - 32, 0);
}
;function $K(a, b) {
  this.tag = a;
  this.ka = b;
  this.sa = -1;
}
$K.prototype.toString = function() {
  return "[TaggedValue: " + this.tag + ", " + this.ka + "]";
};
$K.prototype.equiv = function(a) {
  return zK(this, a);
};
$K.prototype.equiv = $K.prototype.equiv;
$K.prototype.Yb = function(a) {
  return a instanceof $K ? this.tag === a.tag && zK(this.ka, a.ka) : !1;
};
$K.prototype.mc = function() {
  -1 === this.sa && (this.sa = AK(EK(this.tag), EK(this.ka)));
  return this.sa;
};
function aL(a, b) {
  return new $K(a, b);
}
var bL = RK("9007199254740992"), cL = RK("-9007199254740992");
GK.prototype.equiv = function(a) {
  return zK(this, a);
};
GK.prototype.equiv = GK.prototype.equiv;
GK.prototype.Yb = function(a) {
  return a instanceof GK && this.Cb(a);
};
GK.prototype.mc = function() {
  return this.ya;
};
function dL(a) {
  this.name = a;
  this.sa = -1;
}
dL.prototype.toString = function() {
  return ":" + this.name;
};
dL.prototype.equiv = function(a) {
  return zK(this, a);
};
dL.prototype.equiv = dL.prototype.equiv;
dL.prototype.Yb = function(a) {
  return a instanceof dL && this.name == a.name;
};
dL.prototype.mc = function() {
  -1 === this.sa && (this.sa = EK(this.name));
  return this.sa;
};
function eL(a) {
  this.name = a;
  this.sa = -1;
}
eL.prototype.toString = function() {
  return "[Symbol: " + this.name + "]";
};
eL.prototype.equiv = function(a) {
  return zK(this, a);
};
eL.prototype.equiv = eL.prototype.equiv;
eL.prototype.Yb = function(a) {
  return a instanceof eL && this.name == a.name;
};
eL.prototype.mc = function() {
  -1 === this.sa && (this.sa = EK(this.name));
  return this.sa;
};
function fL(a, b, c) {
  var d = "";
  c = c || b + 1;
  for (var e = 8 * (7 - b), f = IK(255).shiftLeft(e);b < c;b++, e -= 8, f = ZK(f, 8)) {
    var g = ZK(QK(a.ya & f.ya, a.pa & f.pa), e).toString(16);
    1 == g.length && (g = "0" + g);
    d += g;
  }
  return d;
}
function gL(a, b) {
  this.Jf = a;
  this.Nf = b;
  this.sa = -1;
}
gL.prototype.toString = function(a) {
  var b = this.Jf, c = this.Nf;
  a = "" + (fL(b, 0, 4) + "-");
  a += fL(b, 4, 6) + "-";
  a += fL(b, 6, 8) + "-";
  a += fL(c, 0, 2) + "-";
  return a += fL(c, 2, 8);
};
gL.prototype.equiv = function(a) {
  return zK(this, a);
};
gL.prototype.equiv = gL.prototype.equiv;
gL.prototype.Yb = function(a) {
  return a instanceof gL && this.Jf.Cb(a.Jf) && this.Nf.Cb(a.Nf);
};
gL.prototype.mc = function() {
  -1 === this.sa && (this.sa = EK(this.toString()));
  return this.sa;
};
Date.prototype.Yb = function(a) {
  return a instanceof Date ? this.valueOf() === a.valueOf() : !1;
};
Date.prototype.mc = function() {
  return this.valueOf();
};
function hL(a, b) {
  this.entries = a;
  this.type = b || 0;
  this.na = 0;
}
hL.prototype.next = function() {
  if (this.na < this.entries.length) {
    var a = null, a = 0 === this.type ? this.entries[this.na] : 1 === this.type ? this.entries[this.na + 1] : [this.entries[this.na], this.entries[this.na + 1]], a = {value:a, done:!1};
    this.na += 2;
    return a;
  }
  return{value:null, done:!0};
};
hL.prototype.next = hL.prototype.next;
function iL(a, b) {
  this.map = a;
  this.type = b || 0;
  this.keys = this.map.bc();
  this.na = 0;
  this.md = null;
  this.bd = 0;
}
iL.prototype.next = function() {
  if (this.na < this.map.size) {
    null != this.md && this.bd < this.md.length || (this.md = this.map.map[this.keys[this.na]], this.bd = 0);
    var a = null, a = 0 === this.type ? this.md[this.bd] : 1 === this.type ? this.md[this.bd + 1] : [this.md[this.bd], this.md[this.bd + 1]], a = {value:a, done:!1};
    this.na++;
    this.bd += 2;
    return a;
  }
  return{value:null, done:!0};
};
iL.prototype.next = iL.prototype.next;
function jL(a, b) {
  if ((b instanceof kL || b instanceof lL) && a.size === b.size) {
    for (var c in a.map) {
      for (var d = a.map[c], e = 0;e < d.length;e += 2) {
        if (!zK(d[e + 1], b.get(d[e]))) {
          return!1;
        }
      }
    }
    return!0;
  }
  if (null != b && "object" === typeof b && (c = wK(b), d = c.length, a.size === d)) {
    for (e = 0;e < d;e++) {
      var f = c[e];
      if (!a.has(f) || !zK(b[f], a.get(f))) {
        return!1;
      }
    }
    return!0;
  }
  return!1;
}
function lL(a) {
  this.va = a;
  this.oa = null;
  this.sa = -1;
  this.size = a.length / 2;
  this.gg = 0;
}
lL.prototype.toString = function() {
  return "[TransitArrayMap]";
};
function mL(a) {
  if (a.oa) {
    throw Error("Invalid operation, already converted");
  }
  if (8 > a.size) {
    return!1;
  }
  a.gg++;
  return 32 < a.gg ? (a.oa = nL(a.va, !0), a.va = [], !0) : !1;
}
lL.prototype.clear = function() {
  this.sa = -1;
  this.oa ? this.oa.clear() : this.va = [];
  this.size = 0;
};
lL.prototype.clear = lL.prototype.clear;
lL.prototype.keys = function() {
  return this.oa ? this.oa.keys() : new hL(this.va, 0);
};
lL.prototype.keys = lL.prototype.keys;
lL.prototype.ud = function() {
  if (this.oa) {
    return this.oa.ud();
  }
  for (var a = [], b = 0, c = 0;c < this.va.length;b++, c += 2) {
    a[b] = this.va[c];
  }
  return a;
};
lL.prototype.keySet = lL.prototype.ud;
lL.prototype.entries = function() {
  return this.oa ? this.oa.entries() : new hL(this.va, 2);
};
lL.prototype.entries = lL.prototype.entries;
lL.prototype.values = function() {
  return this.oa ? this.oa.values() : new hL(this.va, 1);
};
lL.prototype.values = lL.prototype.values;
lL.prototype.forEach = function(a) {
  if (this.oa) {
    this.oa.forEach(a);
  } else {
    for (var b = 0;b < this.va.length;b += 2) {
      a(this.va[b + 1], this.va[b]);
    }
  }
};
lL.prototype.forEach = lL.prototype.forEach;
lL.prototype.get = function(a, b) {
  if (this.oa) {
    return this.oa.get(a);
  }
  if (mL(this)) {
    return this.get(a);
  }
  for (var c = 0;c < this.va.length;c += 2) {
    if (zK(this.va[c], a)) {
      return this.va[c + 1];
    }
  }
  return b;
};
lL.prototype.get = lL.prototype.get;
lL.prototype.has = function(a) {
  if (this.oa) {
    return this.oa.has(a);
  }
  if (mL(this)) {
    return this.has(a);
  }
  for (var b = 0;b < this.va.length;b += 2) {
    if (zK(this.va[b], a)) {
      return!0;
    }
  }
  return!1;
};
lL.prototype.has = lL.prototype.has;
lL.prototype.set = function(a, b) {
  this.sa = -1;
  if (this.oa) {
    this.oa.set(a, b), this.size = this.oa.size;
  } else {
    for (var c = 0;c < this.va.length;c += 2) {
      if (zK(this.va[c], a)) {
        this.va[c + 1] = b;
        return;
      }
    }
    this.va.push(a);
    this.va.push(b);
    this.size++;
    32 < this.size && (this.oa = nL(this.va, !0), this.va = null);
  }
};
lL.prototype.set = lL.prototype.set;
lL.prototype["delete"] = function(a) {
  this.sa = -1;
  if (this.oa) {
    this.oa["delete"](a), this.size = this.oa.size;
  } else {
    for (var b = 0;b < this.va.length;b += 2) {
      if (zK(this.va[b], a)) {
        this.va.splice(b, 2);
        this.size--;
        break;
      }
    }
  }
};
lL.prototype.mc = function() {
  if (this.oa) {
    return this.oa.mc();
  }
  -1 === this.sa && (this.sa = DK(this));
  return this.sa;
};
lL.prototype.Yb = function(a) {
  return this.oa ? jL(this.oa, a) : jL(this, a);
};
function kL(a, b, c) {
  this.map = b || {};
  this.Ad = a || [];
  this.size = c || 0;
  this.sa = -1;
}
kL.prototype.toString = function() {
  return "[TransitMap]";
};
kL.prototype.clear = function() {
  this.sa = -1;
  this.map = {};
  this.Ad = [];
  this.size = 0;
};
kL.prototype.clear = kL.prototype.clear;
kL.prototype.bc = function() {
  return null != this.Ad ? this.Ad : wK(this.map);
};
kL.prototype["delete"] = function(a) {
  this.sa = -1;
  this.Ad = null;
  for (var b = EK(a), c = this.map[b], d = 0;d < c.length;d += 2) {
    if (zK(a, c[d])) {
      c.splice(d, 2);
      0 === c.length && delete this.map[b];
      this.size--;
      break;
    }
  }
};
kL.prototype.entries = function() {
  return new iL(this, 2);
};
kL.prototype.entries = kL.prototype.entries;
kL.prototype.forEach = function(a) {
  for (var b = this.bc(), c = 0;c < b.length;c++) {
    for (var d = this.map[b[c]], e = 0;e < d.length;e += 2) {
      a(d[e + 1], d[e], this);
    }
  }
};
kL.prototype.forEach = kL.prototype.forEach;
kL.prototype.get = function(a, b) {
  var c = EK(a), c = this.map[c];
  if (null != c) {
    for (var d = 0;d < c.length;d += 2) {
      if (zK(a, c[d])) {
        return c[d + 1];
      }
    }
  } else {
    return b;
  }
};
kL.prototype.get = kL.prototype.get;
kL.prototype.has = function(a) {
  var b = EK(a), b = this.map[b];
  if (null != b) {
    for (var c = 0;c < b.length;c += 2) {
      if (zK(a, b[c])) {
        return!0;
      }
    }
  }
  return!1;
};
kL.prototype.has = kL.prototype.has;
kL.prototype.keys = function() {
  return new iL(this, 0);
};
kL.prototype.keys = kL.prototype.keys;
kL.prototype.ud = function() {
  for (var a = this.bc(), b = [], c = 0;c < a.length;c++) {
    for (var d = this.map[a[c]], e = 0;e < d.length;e += 2) {
      b.push(d[e]);
    }
  }
  return b;
};
kL.prototype.keySet = kL.prototype.ud;
kL.prototype.set = function(a, b) {
  this.sa = -1;
  var c = EK(a), d = this.map[c];
  if (null == d) {
    this.Ad && this.Ad.push(c), this.map[c] = [a, b], this.size++;
  } else {
    for (var c = !0, e = 0;e < d.length;e += 2) {
      if (zK(b, d[e])) {
        c = !1;
        d[e] = b;
        break;
      }
    }
    c && (d.push(a), d.push(b), this.size++);
  }
};
kL.prototype.set = kL.prototype.set;
kL.prototype.values = function() {
  return new iL(this, 1);
};
kL.prototype.values = kL.prototype.values;
kL.prototype.mc = function() {
  -1 === this.sa && (this.sa = DK(this));
  return this.sa;
};
kL.prototype.Yb = function(a) {
  return jL(this, a);
};
function nL(a, b) {
  var c = !1;
  a = a || [];
  c = !1 === c ? c : !0;
  if ((!0 !== b || !b) && 64 >= a.length) {
    if (c) {
      var d = a;
      a = [];
      for (c = 0;c < d.length;c += 2) {
        for (var e = !1, f = 0;f < a.length;f += 2) {
          if (zK(a[f], d[c])) {
            a[f + 1] = d[c + 1];
            e = !0;
            break;
          }
        }
        e || (a.push(d[c]), a.push(d[c + 1]));
      }
    }
    return new lL(a);
  }
  for (var d = {}, e = [], g = 0, c = 0;c < a.length;c += 2) {
    var f = EK(a[c]), h = d[f];
    if (null == h) {
      e.push(f), d[f] = [a[c], a[c + 1]], g++;
    } else {
      for (var l = !0, f = 0;f < h.length;f += 2) {
        if (zK(h[f], a[c])) {
          h[f + 1] = a[c + 1];
          l = !1;
          break;
        }
      }
      l && (h.push(a[c]), h.push(a[c + 1]), g++);
    }
  }
  return new kL(e, d, g);
}
function oL(a) {
  this.map = a;
  this.size = a.size;
}
oL.prototype.toString = function() {
  return "[TransitSet]";
};
oL.prototype.add = function(a) {
  this.map.set(a, a);
  this.size = this.map.size;
};
oL.prototype.add = oL.prototype.add;
oL.prototype.clear = function() {
  this.map = new kL;
  this.size = 0;
};
oL.prototype.clear = oL.prototype.clear;
oL.prototype["delete"] = function(a) {
  this.map["delete"](a);
  this.size = this.map.size;
};
oL.prototype.entries = function() {
  return this.map.entries();
};
oL.prototype.entries = oL.prototype.entries;
oL.prototype.forEach = function(a) {
  var b = this;
  this.map.forEach(function(c, d) {
    a(d, b);
  });
};
oL.prototype.forEach = oL.prototype.forEach;
oL.prototype.has = function(a) {
  return this.map.has(a);
};
oL.prototype.has = oL.prototype.has;
oL.prototype.keys = function() {
  return this.map.keys();
};
oL.prototype.keys = oL.prototype.keys;
oL.prototype.ud = function() {
  return this.map.ud();
};
oL.prototype.keySet = oL.prototype.ud;
oL.prototype.values = function() {
  return this.map.values();
};
oL.prototype.values = oL.prototype.values;
oL.prototype.Yb = function(a) {
  if (a instanceof oL) {
    if (this.size === a.size) {
      return zK(this.map, a.map);
    }
  } else {
    return!1;
  }
};
oL.prototype.mc = function() {
  return EK(this.map);
};
function pL(a, b) {
  if (3 < a.length) {
    if (b) {
      return!0;
    }
    var c = a.charAt(1);
    return "~" === a.charAt(0) ? ":" === c || "$" === c || "#" === c : !1;
  }
  return!1;
}
function qL(a) {
  var b = Math.floor(a / 44);
  a = String.fromCharCode(a % 44 + 48);
  return 0 === b ? "^" + a : "^" + String.fromCharCode(b + 48) + a;
}
function rL() {
  this.Ch = this.de = this.na = 0;
  this.Qb = {};
}
rL.prototype.write = function(a, b) {
  if (pL(a, b)) {
    4096 === this.Ch ? (this.clear(), this.de = 0, this.Qb = {}) : 1936 === this.na && this.clear();
    var c = this.Qb[a];
    return null == c ? (this.Qb[a] = [qL(this.na), this.de], this.na++, a) : c[1] != this.de ? (c[1] = this.de, c[0] = qL(this.na), this.na++, a) : c[0];
  }
  return a;
};
rL.prototype.clear = function() {
  this.na = 0;
  this.de++;
};
function sL() {
  this.na = 0;
  this.Qb = [];
}
sL.prototype.write = function(a) {
  1936 == this.na && (this.na = 0);
  this.Qb[this.na] = a;
  this.na++;
  return a;
};
sL.prototype.Te = function(a) {
  return this.Qb[2 === a.length ? a.charCodeAt(1) - 48 : 44 * (a.charCodeAt(1) - 48) + (a.charCodeAt(2) - 48)];
};
sL.prototype.clear = function() {
  this.na = 0;
};
function tL(a) {
  this.Hb = a;
}
function uL(a) {
  this.options = a || {};
  this.Za = {};
  for (var b in this.De.Za) {
    this.Za[b] = this.De.Za[b];
  }
  for (b in this.options.handlers) {
    a: {
      switch(b) {
        case "_":
        ;
        case "s":
        ;
        case "?":
        ;
        case "i":
        ;
        case "d":
        ;
        case "b":
        ;
        case "'":
        ;
        case "array":
        ;
        case "map":
          a = !0;
          break a;
      }
      a = !1;
    }
    if (a) {
      throw Error('Cannot override handler for ground type "' + b + '"');
    }
    this.Za[b] = this.options.handlers[b];
  }
  this.Qe = null != this.options.preferStrings ? this.options.preferStrings : this.De.Qe;
  this.Cf = this.options.defaultHandler || this.De.Cf;
  this.gc = this.options.mapBuilder;
  this.Cd = this.options.arrayBuilder;
}
uL.prototype.De = {Za:{_:function() {
  return null;
}, "?":function(a) {
  return "t" === a;
}, b:function(a) {
  return aL("b", a);
}, i:function(a) {
  "number" === typeof a || a instanceof GK || (a = RK(a, 10), a = 0 < a.compare(bL) || 0 > a.compare(cL) ? a : VK(a));
  return a;
}, n:function(a) {
  return aL("n", a);
}, d:function(a) {
  return parseFloat(a);
}, f:function(a) {
  return aL("f", a);
}, c:function(a) {
  return a;
}, ":":function(a) {
  return new dL(a);
}, $:function(a) {
  return new eL(a);
}, r:function(a) {
  return aL("r", a);
}, z:function(a) {
  a: {
    switch(a) {
      case "-INF":
        a = -Infinity;
        break a;
      case "INF":
        a = Infinity;
        break a;
      case "NaN":
        a = NaN;
        break a;
      default:
        throw Error("Invalid special double value " + a);;
    }
  }
  return a;
}, "'":function(a) {
  return a;
}, m:function(a) {
  a = "number" === typeof a ? a : parseInt(a, 10);
  return new Date(a);
}, t:function(a) {
  return new Date(a);
}, u:function(a) {
  a = a.replace(/-/g, "");
  for (var b = null, c = null, d = c = 0, e = 24, f = 0, f = c = 0, e = 24;8 > f;f += 2, e -= 8) {
    c |= parseInt(a.substring(f, f + 2), 16) << e;
  }
  d = 0;
  f = 8;
  for (e = 24;16 > f;f += 2, e -= 8) {
    d |= parseInt(a.substring(f, f + 2), 16) << e;
  }
  b = QK(d, c);
  c = 0;
  f = 16;
  for (e = 24;24 > f;f += 2, e -= 8) {
    c |= parseInt(a.substring(f, f + 2), 16) << e;
  }
  d = 0;
  for (e = f = 24;32 > f;f += 2, e -= 8) {
    d |= parseInt(a.substring(f, f + 2), 16) << e;
  }
  c = QK(d, c);
  return new gL(b, c);
}, set:function(a) {
  a = a || [];
  for (var b = {}, c = [], d = 0, e = 0;e < a.length;e++) {
    var f = EK(a[e]), g = b[f];
    if (null == g) {
      c.push(f), b[f] = [a[e], a[e]], d++;
    } else {
      for (var f = !0, h = 0;h < g.length;h += 2) {
        if (zK(g[h], a[e])) {
          f = !1;
          break;
        }
      }
      f && (g.push(a[e]), g.push(a[e]), d++);
    }
  }
  return new oL(new kL(c, b, d));
}, list:function(a) {
  return aL("list", a);
}, link:function(a) {
  return aL("link", a);
}, cmap:function(a) {
  return nL(a);
}}, Cf:function(a, b) {
  return aL(a, b);
}, Qe:!0};
uL.prototype.Ba = function(a, b, c, d) {
  if (null == a) {
    return null;
  }
  switch(typeof a) {
    case "string":
      return pL(a, c) ? (a = vL(this, a), b && b.write(a, c), b = a) : b = "^" === a.charAt(0) && " " !== a.charAt(1) ? b.Te(a, c) : vL(this, a), b;
    case "object":
      if (xK(a)) {
        if ("^ " === a[0]) {
          if (this.gc) {
            if (17 > a.length && this.gc.sd) {
              d = [];
              for (c = 1;c < a.length;c += 2) {
                d.push(this.Ba(a[c], b, !0, !1)), d.push(this.Ba(a[c + 1], b, !1, !1));
              }
              b = this.gc.sd(d, a);
            } else {
              d = this.gc.Od(a);
              for (c = 1;c < a.length;c += 2) {
                d = this.gc.add(d, this.Ba(a[c], b, !0, !1), this.Ba(a[c + 1], b, !1, !1), a);
              }
              b = this.gc.Ie(d, a);
            }
          } else {
            d = [];
            for (c = 1;c < a.length;c += 2) {
              d.push(this.Ba(a[c], b, !0, !1)), d.push(this.Ba(a[c + 1], b, !1, !1));
            }
            b = nL(d);
          }
        } else {
          b = wL(this, a, b, d);
        }
      } else {
        c = wK(a);
        var e = c[0];
        if ((d = 1 == c.length ? this.Ba(e, b, !1, !1) : null) && d instanceof tL) {
          a = a[e], c = this.Za[d.Hb], b = null != c ? c(this.Ba(a, b, !1, !0)) : aL(d.Hb, this.Ba(a, b, !1, !1));
        } else {
          if (this.gc) {
            if (16 > c.length && this.gc.sd) {
              var f = [];
              for (d = 0;d < c.length;d++) {
                e = c[d], f.push(this.Ba(e, b, !0, !1)), f.push(this.Ba(a[e], b, !1, !1));
              }
              b = this.gc.sd(f, a);
            } else {
              f = this.gc.Od(a);
              for (d = 0;d < c.length;d++) {
                e = c[d], f = this.gc.add(f, this.Ba(e, b, !0, !1), this.Ba(a[e], b, !1, !1), a);
              }
              b = this.gc.Ie(f, a);
            }
          } else {
            f = [];
            for (d = 0;d < c.length;d++) {
              e = c[d], f.push(this.Ba(e, b, !0, !1)), f.push(this.Ba(a[e], b, !1, !1));
            }
            b = nL(f);
          }
        }
      }
      return b;
  }
  return a;
};
uL.prototype.decode = uL.prototype.Ba;
function wL(a, b, c, d) {
  if (d) {
    var e = [];
    for (d = 0;d < b.length;d++) {
      e.push(a.Ba(b[d], c, !1, !1));
    }
    return e;
  }
  e = c && c.na;
  if (2 === b.length && "string" === typeof b[0] && (d = a.Ba(b[0], c, !1, !1)) && d instanceof tL) {
    return b = b[1], e = a.Za[d.Hb], null != e ? e = e(a.Ba(b, c, !1, !0)) : aL(d.Hb, a.Ba(b, c, !1, !1));
  }
  c && e != c.na && (c.na = e);
  if (a.Cd) {
    if (32 >= b.length && a.Cd.sd) {
      e = [];
      for (d = 0;d < b.length;d++) {
        e.push(a.Ba(b[d], c, !1, !1));
      }
      return a.Cd.sd(e, b);
    }
    e = a.Cd.Od();
    for (d = 0;d < b.length;d++) {
      e = a.Cd.add(e, a.Ba(b[d], c, !1, !1), b);
    }
    return a.Cd.Ie(e, b);
  }
  e = [];
  for (d = 0;d < b.length;d++) {
    e.push(a.Ba(b[d], c, !1, !1));
  }
  return e;
}
function vL(a, b) {
  if ("~" === b.charAt(0)) {
    var c = b.charAt(1);
    if ("~" === c || "^" === c || "`" === c) {
      return b.substring(1);
    }
    if ("#" === c) {
      return new tL(b.substring(2));
    }
    var d = a.Za[c];
    return null == d ? a.Cf(c, b.substring(2)) : d(b.substring(2));
  }
  return b;
}
;function xL(a) {
  this.ai = new uL(a);
}
function yL(a, b) {
  this.ij = a;
  this.options = b || {};
  this.Qb = this.options.cache ? this.options.cache : new sL;
}
yL.prototype.Te = function(a) {
  var b = this.Qb;
  a = this.ij.ai.Ba(JSON.parse(a), b);
  this.Qb.clear();
  return a;
};
yL.prototype.read = yL.prototype.Te;
var zL = 0, AL = (8 | 3 & Math.round(14 * Math.random())).toString(16), BL = "transit$guid$" + (yK() + yK() + yK() + yK() + yK() + yK() + yK() + yK() + "-" + yK() + yK() + yK() + yK() + "-4" + yK() + yK() + yK() + "-" + AL + yK() + yK() + yK() + "-" + yK() + yK() + yK() + yK() + yK() + yK() + yK() + yK() + yK() + yK() + yK() + yK());
function CL(a) {
  if (null == a) {
    return "null";
  }
  if (a === String) {
    return "string";
  }
  if (a === Boolean) {
    return "boolean";
  }
  if (a === Number) {
    return "number";
  }
  if (a === Array) {
    return "array";
  }
  if (a === Object) {
    return "map";
  }
  var b = a[BL];
  null == b && ("undefined" != typeof Object.defineProperty ? (b = ++zL, Object.defineProperty(a, BL, {value:b, enumerable:!1})) : a[BL] = b = ++zL);
  return b;
}
function DL(a, b) {
  for (var c = a.toString(), d = c.length;d < b;d++) {
    c = "0" + c;
  }
  return c;
}
function EL() {
}
EL.prototype.tag = function() {
  return "_";
};
EL.prototype.ka = function() {
  return null;
};
EL.prototype.Ca = function() {
  return "null";
};
function FL() {
}
FL.prototype.tag = function() {
  return "s";
};
FL.prototype.ka = function(a) {
  return a;
};
FL.prototype.Ca = function(a) {
  return a;
};
function GL() {
}
GL.prototype.tag = function() {
  return "i";
};
GL.prototype.ka = function(a) {
  return a;
};
GL.prototype.Ca = function(a) {
  return a.toString();
};
function HL() {
}
HL.prototype.tag = function() {
  return "i";
};
HL.prototype.ka = function(a) {
  return a.toString();
};
HL.prototype.Ca = function(a) {
  return a.toString();
};
function IL() {
}
IL.prototype.tag = function() {
  return "?";
};
IL.prototype.ka = function(a) {
  return a;
};
IL.prototype.Ca = function(a) {
  return a.toString();
};
function JL() {
}
JL.prototype.tag = function() {
  return "array";
};
JL.prototype.ka = function(a) {
  return a;
};
JL.prototype.Ca = function() {
  return null;
};
function KL() {
}
KL.prototype.tag = function() {
  return "map";
};
KL.prototype.ka = function(a) {
  return a;
};
KL.prototype.Ca = function() {
  return null;
};
function LL() {
}
LL.prototype.tag = function() {
  return "t";
};
LL.prototype.ka = function(a) {
  return a.getUTCFullYear() + "-" + DL(a.getUTCMonth() + 1, 2) + "-" + DL(a.getUTCDate(), 2) + "T" + DL(a.getUTCHours(), 2) + ":" + DL(a.getUTCMinutes(), 2) + ":" + DL(a.getUTCSeconds(), 2) + "." + DL(a.getUTCMilliseconds(), 3) + "Z";
};
LL.prototype.Ca = function(a, b) {
  return b.ka(a);
};
function ML() {
}
ML.prototype.tag = function() {
  return "m";
};
ML.prototype.ka = function(a) {
  return a.valueOf();
};
ML.prototype.Ca = function(a) {
  return a.valueOf().toString();
};
function NL() {
}
NL.prototype.tag = function() {
  return "u";
};
NL.prototype.ka = function(a) {
  return a.toString();
};
NL.prototype.Ca = function(a) {
  return a.toString();
};
function OL() {
}
OL.prototype.tag = function() {
  return ":";
};
OL.prototype.ka = function(a) {
  return a.name;
};
OL.prototype.Ca = function(a, b) {
  return b.ka(a);
};
function PL() {
}
PL.prototype.tag = function() {
  return "$";
};
PL.prototype.ka = function(a) {
  return a.name;
};
PL.prototype.Ca = function(a, b) {
  return b.ka(a);
};
function QL() {
}
QL.prototype.tag = function(a) {
  return a.tag;
};
QL.prototype.ka = function(a) {
  return a.ka;
};
QL.prototype.Ca = function() {
  return null;
};
function RL() {
}
RL.prototype.tag = function() {
  return "set";
};
RL.prototype.ka = function(a) {
  var b = [];
  a.forEach(function(a) {
    b.push(a);
  });
  return aL("array", b);
};
RL.prototype.Ca = function() {
  return null;
};
function SL() {
}
SL.prototype.tag = function() {
  return "map";
};
SL.prototype.ka = function(a) {
  return a;
};
SL.prototype.Ca = function() {
  return null;
};
function TL() {
}
TL.prototype.tag = function() {
  return "map";
};
TL.prototype.ka = function(a) {
  return a;
};
TL.prototype.Ca = function() {
  return null;
};
function UL() {
  this.Za = {};
  this.set(null, new EL);
  this.set(String, new FL);
  this.set(Number, new GL);
  this.set(GK, new HL);
  this.set(Boolean, new IL);
  this.set(Array, new JL);
  this.set(Object, new KL);
  this.set(Date, new ML);
  this.set(gL, new NL);
  this.set(dL, new OL);
  this.set(eL, new PL);
  this.set($K, new QL);
  this.set(oL, new RL);
  this.set(lL, new SL);
  this.set(kL, new TL);
}
UL.prototype.get = function(a) {
  var b = null, b = "string" === typeof a ? this.Za[a] : this.Za[CL(a)];
  return null != b ? b : this.Za["default"];
};
UL.prototype.set = function(a, b) {
  var c;
  if (c = "string" === typeof a) {
    a: {
      switch(a) {
        case "null":
        ;
        case "string":
        ;
        case "boolean":
        ;
        case "number":
        ;
        case "array":
        ;
        case "map":
          c = !1;
          break a;
      }
      c = !0;
    }
  }
  c ? this.Za[a] = b : this.Za[CL(a)] = b;
};
function VL(a) {
  this.Yc = a || {};
  this.Qe = null != this.Yc.preferStrings ? this.Yc.preferStrings : !0;
  this.Xg = this.Yc.objectBuilder || null;
  this.Za = new UL;
  if (a = this.Yc.handlers) {
    if (xK(a) || !a.forEach) {
      throw Error('transit writer "handlers" option must be a map');
    }
    var b = this;
    a.forEach(function(a, d) {
      b.Za.set(d, a);
    });
  }
  this.We = this.Yc.unpack || function(a) {
    return a instanceof lL && null === a.oa ? a.va : !1;
  };
  this.pe = this.Yc && this.Yc.verbose || !1;
}
VL.prototype.qc = function(a) {
  var b = this.Za.get(null == a ? null : a.constructor);
  return null != b ? b : (a = a && a.transitTag) ? this.Za.get(a) : null;
};
function WL(a, b, c, d, e) {
  a = a + b + c;
  return e ? e.write(a, d) : a;
}
function XL(a, b, c) {
  var d = [];
  if (xK(b)) {
    for (var e = 0;e < b.length;e++) {
      d.push(YL(a, b[e], !1, c));
    }
  } else {
    b.forEach(function(b) {
      d.push(YL(a, b, !1, c));
    });
  }
  return d;
}
function ZL(a, b) {
  if ("string" !== typeof b) {
    var c = a.qc(b);
    return c && 1 === c.tag(b).length;
  }
  return!0;
}
function $L(a, b) {
  var c = a.We(b), d = !0;
  if (c) {
    for (var e = 0;e < c.length && (d = ZL(a, c[e]), d);e += 2) {
    }
    return d;
  }
  if (b.keys && (c = b.keys(), c.next)) {
    for (step = c.next();!step.done;) {
      d = ZL(a, step.value);
      if (!d) {
        break;
      }
      step = c.next();
    }
    return d;
  }
  if (b.forEach) {
    return b.forEach(function(b, c) {
      d = d && ZL(a, c);
    }), d;
  }
  throw Error("Cannot walk keys of object type " + (null == b ? null : b.constructor).name);
}
function aM(a, b, c) {
  if (b.constructor === Object || null != b.forEach) {
    if (a.pe) {
      if (null != b.forEach) {
        if ($L(a, b)) {
          var d = {};
          b.forEach(function(b, e) {
            d[YL(a, e, !0, !1)] = YL(a, b, !1, c);
          });
        } else {
          var e = a.We(b), f = [], g = WL("~#", "cmap", "", !0, c);
          if (e) {
            for (var h = 0;h < e.length;h += 2) {
              f.push(YL(a, e[h], !0, !1)), f.push(YL(a, e[h + 1], !1, c));
            }
          } else {
            b.forEach(function(b, d) {
              f.push(YL(a, d, !0, !1));
              f.push(YL(a, b, !1, c));
            });
          }
          d = {};
          d[g] = f;
        }
      } else {
        for (d = {}, e = wK(b), h = 0;h < e.length;h++) {
          d[YL(a, e[h], !0, !1)] = YL(a, b[e[h]], !1, c);
        }
      }
      return d;
    }
    if (null != b.forEach) {
      if ($L(a, b)) {
        e = a.We(b);
        d = ["^ "];
        if (e) {
          for (h = 0;h < e.length;h += 2) {
            d.push(YL(a, e[h], !0, c)), d.push(YL(a, e[h + 1], !1, c));
          }
        } else {
          b.forEach(function(b, e) {
            d.push(YL(a, e, !0, c));
            d.push(YL(a, b, !1, c));
          });
        }
        return d;
      }
      e = a.We(b);
      f = [];
      g = WL("~#", "cmap", "", !0, c);
      if (e) {
        for (h = 0;h < e.length;h += 2) {
          f.push(YL(a, e[h], !0, c)), f.push(YL(a, e[h + 1], !1, c));
        }
      } else {
        b.forEach(function(b, d) {
          f.push(YL(a, d, !0, c));
          f.push(YL(a, b, !1, c));
        });
      }
      return[g, f];
    }
    d = ["^ "];
    e = wK(b);
    for (h = 0;h < e.length;h++) {
      d.push(YL(a, e[h], !0, c)), d.push(YL(a, b[e[h]], !1, c));
    }
    return d;
  }
  if (null != a.Xg) {
    return a.Xg(b, function(b) {
      return YL(a, b, !0, c);
    }, function(b) {
      return YL(a, b, !1, c);
    });
  }
  h = (null == b ? null : b.constructor).name;
  e = Error("Cannot write " + h);
  e.data = {Of:b, type:h};
  throw e;
}
function YL(a, b, c, d) {
  var e = a.qc(b), f = e ? e.tag(b) : null, g = e ? e.ka(b) : null;
  if (null != e && null != f) {
    switch(f) {
      case "_":
        return c ? WL("~", "_", "", c, d) : null;
      case "s":
        return 0 < g.length ? (a = g.charAt(0), a = "~" === a || "^" === a || "`" === a ? "~" + g : g) : a = g, WL("", "", a, c, d);
      case "?":
        return c ? WL("~", "?", g.toString()[0], c, d) : g;
      case "i":
        return Infinity === g ? WL("~", "z", "INF", c, d) : -Infinity === g ? WL("~", "z", "-INF", c, d) : isNaN(g) ? WL("~", "z", "NaN", c, d) : c || "string" === typeof g || g instanceof GK ? WL("~", "i", g.toString(), c, d) : g;
      case "d":
        return c ? WL(g.rj, "d", g, c, d) : g;
      case "b":
        return WL("~", "b", g, c, d);
      case "'":
        return a.pe ? (b = {}, c = WL("~#", "'", "", !0, d), b[c] = YL(a, g, !1, d), d = b) : d = [WL("~#", "'", "", !0, d), YL(a, g, !1, d)], d;
      case "array":
        return XL(a, g, d);
      case "map":
        return aM(a, g, d);
      default:
        a: {
          if (1 === f.length) {
            if ("string" === typeof g) {
              d = WL("~", f, g, c, d);
              break a;
            }
            if (c || a.Qe) {
              (a = a.pe && new LL) ? (f = a.tag(b), g = a.Ca(b, a)) : g = e.Ca(b, e);
              if (null !== g) {
                d = WL("~", f, g, c, d);
                break a;
              }
              d = Error('Tag "' + f + '" cannot be encoded as string');
              d.data = {tag:f, ka:g, Of:b};
              throw d;
            }
          }
          b = f;
          c = g;
          a.pe ? (g = {}, g[WL("~#", b, "", !0, d)] = YL(a, c, !1, d), d = g) : d = [WL("~#", b, "", !0, d), YL(a, c, !1, d)];
        }
        return d;
    }
  } else {
    throw d = (null == b ? null : b.constructor).name, a = Error("Cannot write " + d), a.data = {Of:b, type:d}, a;
  }
}
function bM(a, b) {
  var c = a.qc(b);
  if (null != c) {
    return 1 === c.tag(b).length ? aL("'", b) : b;
  }
  var c = (null == b ? null : b.constructor).name, d = Error("Cannot write " + c);
  d.data = {Of:b, type:c};
  throw d;
}
function cM(a, b) {
  this.Vd = a;
  this.options = b || {};
  this.Qb = !1 === this.options.cache ? null : this.options.cache ? this.options.cache : new rL;
}
cM.prototype.oi = function() {
  return this.Vd;
};
cM.prototype.marshaller = cM.prototype.oi;
cM.prototype.write = function(a, b) {
  var c = null, d = b || {}, c = d.asMapKey || !1, e = this.Vd.pe ? !1 : this.Qb;
  !1 === d.marshalTop ? c = YL(this.Vd, a, c, e) : (d = this.Vd, c = JSON.stringify(YL(d, bM(d, a), c, e)));
  null != this.Qb && this.Qb.clear();
  return c;
};
cM.prototype.write = cM.prototype.write;
cM.prototype.register = function(a, b) {
  this.Vd.Za.set(a, b);
};
cM.prototype.register = cM.prototype.register;
function dM(a, b) {
  if ("json" === a || "json-verbose" === a || null == a) {
    var c = new xL(b);
    return new yL(c, b);
  }
  throw Error("Cannot create reader of type " + a);
}
function eM(a, b) {
  if ("json" === a || "json-verbose" === a || null == a) {
    "json-verbose" === a && (null == b && (b = {}), b.verbose = !0);
    var c = new VL(b);
    return new cM(c, b);
  }
  c = Error('Type must be "json"');
  c.data = {type:a};
  throw c;
}
;Ik.prototype.J = function(a, b) {
  return b instanceof Ik ? this.Va === b.Va : b instanceof gL ? this.Va === b.toString() : !1;
};
$K.prototype.J = function(a, b) {
  return this.equiv(b);
};
gL.prototype.J = function(a, b) {
  return b instanceof Ik ? Mc(b, this) : this.equiv(b);
};
GK.prototype.J = function(a, b) {
  return this.equiv(b);
};
$K.prototype.ye = !0;
$K.prototype.S = function() {
  return EK.g ? EK.g(this) : EK.call(null, this);
};
gL.prototype.ye = !0;
gL.prototype.S = function() {
  return EK.g ? EK.g(this) : EK.call(null, this);
};
GK.prototype.ye = !0;
GK.prototype.S = function() {
  return EK.g ? EK.g(this) : EK.call(null, this);
};
function fM(a, b) {
  for (var c = A(Ie(b)), d = null, e = 0, f = 0;;) {
    if (f < e) {
      var g = d.H(null, f);
      a[g] = b[g];
      f += 1;
    } else {
      if (c = A(c)) {
        d = c, T(d) ? (c = x(d), f = z(d), d = c, e = J(c), c = f) : (c = C(d), a[c] = b[c], c = F(d), d = null, e = 0), f = 0;
      } else {
        break;
      }
    }
  }
  return a;
}
function gM() {
}
gM.prototype.Od = function() {
  return bd(Gi);
};
gM.prototype.add = function(a, b, c) {
  return Bg.j(a, b, c);
};
gM.prototype.Ie = function(a) {
  return dd(a);
};
gM.prototype.sd = function(a) {
  return Ji.j ? Ji.j(a, !0, !0) : Ji.call(null, a, !0, !0);
};
function hM() {
}
hM.prototype.Od = function() {
  return bd(se);
};
hM.prototype.add = function(a, b) {
  return Ag.h(a, b);
};
hM.prototype.Ie = function(a) {
  return dd(a);
};
hM.prototype.sd = function(a) {
  return Zh.h ? Zh.h(a, !0) : Zh.call(null, a, !0);
};
var KQ = function() {
  function a(a, b) {
    var c = Rf(a), g = fM({prefersStrings:!1, arrayBuilder:new hM, mapBuilder:new gM, handlers:Bk(Lj.k(G([new n(null, 5, ["$", function() {
      return function(a) {
        return Id.g(a);
      };
    }(c), ":", function() {
      return function(a) {
        return Sf.g(a);
      };
    }(c), "set", function() {
      return function(a) {
        return Ah.h(Qj, a);
      };
    }(c), "list", function() {
      return function(a) {
        return Ah.h(Md, a.reverse());
      };
    }(c), "cmap", function() {
      return function(a) {
        for (var b = 0, c = bd(Gi);;) {
          if (b < a.length) {
            var d = b + 2, c = Bg.j(c, a[b], a[b + 1]), b = d
          } else {
            return dd(c);
          }
        }
      };
    }(c)], null), Op.g(b)], 0)))}, Bk(we.h(b, Op)));
    return dM.h ? dM.h(c, g) : dM.call(null, c, g);
  }
  function b(a) {
    return c.h(a, null);
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
function LQ() {
}
LQ.prototype.tag = function() {
  return ":";
};
LQ.prototype.ka = function(a) {
  return a.ja;
};
LQ.prototype.Ca = function(a) {
  return a.ja;
};
function MQ() {
}
MQ.prototype.tag = function() {
  return "$";
};
MQ.prototype.ka = function(a) {
  return a.Hb;
};
MQ.prototype.Ca = function(a) {
  return a.Hb;
};
function NQ() {
}
NQ.prototype.tag = function() {
  return "list";
};
NQ.prototype.ka = function(a) {
  var b = [];
  a = A(a);
  for (var c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.H(null, e);
      b.push(f);
      e += 1;
    } else {
      if (a = A(a)) {
        c = a, T(c) ? (a = x(c), e = z(c), c = a, d = J(a), a = e) : (a = C(c), b.push(a), a = F(c), c = null, d = 0), e = 0;
      } else {
        break;
      }
    }
  }
  return aL.h ? aL.h("array", b) : aL.call(null, "array", b);
};
NQ.prototype.Ca = function() {
  return null;
};
function OQ() {
}
OQ.prototype.tag = function() {
  return "map";
};
OQ.prototype.ka = function(a) {
  return a;
};
OQ.prototype.Ca = function() {
  return null;
};
function PQ() {
}
PQ.prototype.tag = function() {
  return "set";
};
PQ.prototype.ka = function(a) {
  var b = [];
  a = A(a);
  for (var c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.H(null, e);
      b.push(f);
      e += 1;
    } else {
      if (a = A(a)) {
        c = a, T(c) ? (a = x(c), e = z(c), c = a, d = J(a), a = e) : (a = C(c), b.push(a), a = F(c), c = null, d = 0), e = 0;
      } else {
        break;
      }
    }
  }
  return aL.h ? aL.h("array", b) : aL.call(null, "array", b);
};
PQ.prototype.Ca = function() {
  return null;
};
function QQ() {
}
QQ.prototype.tag = function() {
  return "array";
};
QQ.prototype.ka = function(a) {
  var b = [];
  a = A(a);
  for (var c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.H(null, e);
      b.push(f);
      e += 1;
    } else {
      if (a = A(a)) {
        c = a, T(c) ? (a = x(c), e = z(c), c = a, d = J(a), a = e) : (a = C(c), b.push(a), a = F(c), c = null, d = 0), e = 0;
      } else {
        break;
      }
    }
  }
  return b;
};
QQ.prototype.Ca = function() {
  return null;
};
function RQ() {
}
RQ.prototype.tag = function() {
  return "u";
};
RQ.prototype.ka = function(a) {
  return a.Va;
};
RQ.prototype.Ca = function(a) {
  return this.ka(a);
};
var SQ = function() {
  function a(a, b) {
    var c = new LQ, g = new MQ, h = new NQ, l = new OQ, p = new PQ, s = new QQ, t = new RQ, v = Lj.k(G([ve([aj, Qf, n, Zi, qi, Jd, W, Nf, Tf, ki, pi, $i, Cj, Ci, U, Mf, ce, Oj, wj, Bj, ii, Sj, Zf, Hd, Ik, ak, fj], [l, h, l, h, h, h, c, h, h, s, h, h, h, h, s, h, h, p, l, h, h, p, h, g, t, h, h]), Op.g(b)], 0)), B = Rf(a), y = fM({unpack:function() {
      return function(a) {
        return a instanceof n ? a.p : !1;
      };
    }(B, c, g, h, l, p, s, t, v), handlers:function() {
      var a = Qb(v);
      a.forEach = function() {
        return function(a) {
          for (var b = A(this), c = null, d = 0, e = 0;;) {
            if (e < d) {
              var f = c.H(null, e), g = O.j(f, 0, null), f = O.j(f, 1, null);
              a.h ? a.h(f, g) : a.call(null, f, g);
              e += 1;
            } else {
              if (b = A(b)) {
                T(b) ? (c = x(b), b = z(b), g = c, d = J(c), c = g) : (c = C(b), g = O.j(c, 0, null), c = f = O.j(c, 1, null), a.h ? a.h(c, g) : a.call(null, c, g), b = F(b), c = null, d = 0), e = 0;
              } else {
                return null;
              }
            }
          }
        };
      }(a, B, c, g, h, l, p, s, t, v);
      return a;
    }(), objectBuilder:function(a, b, c, d, e, f, g, h, l) {
      return function(p, s, t) {
        return ff(function() {
          return function(a, b, c) {
            a.push(s.g ? s.g(b) : s.call(null, b), t.g ? t.g(c) : t.call(null, c));
            return a;
          };
        }(a, b, c, d, e, f, g, h, l), ["^ "], p);
      };
    }(B, c, g, h, l, p, s, t, v)}, Bk(we.h(b, Op)));
    return eM.h ? eM.h(B, y) : eM.call(null, B, y);
  }
  function b(a) {
    return c.h(a, null);
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
function TQ(a) {
  a = Xe(a) ? S.h(Qg, a) : a;
  var b = P.h(a, Dt), c = P.h(a, at), d = P.h(a, jq), e = P.h(a, ot), f = P.h(a, gu);
  return "" + u.g(function() {
    var a = new hK;
    iK(a, Rf(q(f) ? f : Cs));
    jK(a);
    a.rd = e;
    kK(a, d);
    jK(a);
    a.Rd = c;
    lK(a, b, !0);
    return a;
  }());
}
function UQ(a) {
  return Yv.h("-", kh.h(aw, cw.h("" + u.g(a), /-/)));
}
function VQ(a) {
  return Bk(Xj(kh.h(UQ, Di(a)), Ei(a)));
}
function WQ(a, b, c) {
  return SQ.h(b, c).write(a);
}
function XQ(a) {
  a = JSON.parse(a);
  return q(a) ? Gk.k(a, G([Fk, !0], 0)) : null;
}
function YQ(a) {
  a = Bk(a);
  return JSON.stringify(a);
}
function ZQ(a) {
  return Nb.j(function(a, c) {
    var d = cw.h(c, /:\s+/), e = O.j(d, 0, null), d = O.j(d, 1, null), f = Ga(e);
    return q(q(f) ? f : Ga(d)) ? a : Q.j(a, $v(e), d);
  }, Gi, cw.h(q(a) ? a : "", /(\n)|(\r)|(\r\n)|(\n\r)/));
}
;var $Q, aR = Gi;
$Q = Sg.g ? Sg.g(aR) : Sg.call(null, aR);
function bR(a) {
  return Hb(Ga(a)) ? Nb.j(function(a, c) {
    var d = cw.h(c, /=/), e = O.j(d, 0, null), d = O.j(d, 1, null);
    return Q.j(a, Sf.g(gK(e)), gK(d));
  }, Gi, cw.h("" + u.g(a), /&/)) : null;
}
function cR(a) {
  if (Hb(Ga(a))) {
    a = a instanceof hK ? a.clone() : new hK(a, void 0);
    var b = a.ld, c = Sf.g(a.yd), d = a.le;
    return new n(null, 6, [gu, c, ot, a.rd, jq, q(q(d) ? 0 < d : d) ? d : null, at, a.Rd, Dt, Hb(b.Mf()) ? "" + u.g(b) : null, us, Hb(b.Mf()) ? bR("" + u.g(b)) : null], null);
  }
  return null;
}
function dR(a, b) {
  return "" + u.g(fK(Rf(a))) + "\x3d" + u.g(fK("" + u.g(b)));
}
function eR(a, b) {
  return Yv.h("\x26", kh.h(function(b) {
    return dR(a, b);
  }, b));
}
function fR(a) {
  var b = O.j(a, 0, null);
  a = O.j(a, 1, null);
  return De(a) ? eR(b, a) : dR(b, a);
}
var gR = Xj("()*\x26^%$#!+", kh.h(function(a) {
  return "\\" + u.g(a);
}, "()*\x26^%$#!+"));
function hR(a, b, c, d) {
  c = (d = Eg.h(yq, d)) ? ik(jk("(?i)" + u.g(Nb.h(u, Vj.h(gR, c)))), "" + u.g(P.j(eq.g(a), "content-type", ""))) : d;
  return q(c) ? Gh.j(a, new U(null, 1, 5, V, [It], null), b) : a;
}
var iR = new n(null, 4, [al, ut, Vm, Gi, kt, ut, sr, Gi], null), jR;
jR = function(a) {
  return function(b) {
    var c = Dn.g(b);
    return q(c) ? DG.h(a.g ? a.g(b) : a.call(null, b), c) : a.g ? a.g(b) : a.call(null, b);
  };
}(function(a) {
  return function(b) {
    var c = Xe(b) ? S.h(Qg, b) : b, d = P.h(c, us), e = cR(Jr.g(c));
    return q(e) ? (b = Gh.j(we.h(Lj.k(G([c, e], 0)), Jr), new U(null, 1, 5, V, [us], null), function(a, b, c, d, e, s) {
      return function(a) {
        return Lj.k(G([a, s], 0));
      };
    }(e, e, b, c, c, d)), a.g ? a.g(b) : a.call(null, b)) : a.g ? a.g(c) : a.call(null, c);
  };
}(function(a) {
  return function(b) {
    var c = Em.g(b);
    q(c) && (b = Q.j(we.h(b, Em), mu, c));
    return a.g ? a.g(b) : a.call(null, b);
  };
}(function(a) {
  return function(b) {
    b = q(hk(/.*android.*/i, Pu)) ? Fh(b, new U(null, 2, 5, V, [us, Tq], null), Math.random.w ? Math.random.w() : Math.random.call(null)) : b;
    return a.g ? a.g(b) : a.call(null, b);
  };
}(function(a) {
  return function(b) {
    var c = Ds.g(b);
    q(c) && (b = Fh(we.h(b, Ds), new U(null, 2, 5, V, [eq, "authorization"], null), "Bearer " + u.g(c)));
    return a.g ? a.g(b) : a.call(null, b);
  };
}(function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = G(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    var e = O.j(b, 0, null);
    return function(b, d) {
      return function(b) {
        var e, f = au.g(b);
        e = q(f) ? f : d;
        if (Ce(e)) {
          return a.g ? a.g(b) : a.call(null, b);
        }
        b = we.h(b, au);
        f = new U(null, 2, 5, V, [eq, "authorization"], null);
        if (q(e)) {
          var s = Ge(e) ? kh.h(e, new U(null, 2, 5, V, [hn, xm], null)) : e;
          e = O.j(s, 0, null);
          s = O.j(s, 1, null);
          e = "Basic " + u.g(eK("" + u.g(e) + ":" + u.g(s)));
        } else {
          e = null;
        }
        b = Fh(b, f, e);
        return a.g ? a.g(b) : a.call(null, b);
      };
    }(b, e);
  }
  a.D = 1;
  a.q = function(a) {
    var d = C(a);
    a = E(a);
    return b(d, a);
  };
  a.k = b;
  return a;
}()(function(a) {
  return function(b) {
    b = Xe(b) ? S.h(Qg, b) : b;
    var c = P.h(b, us);
    q(c) && (b = Q.j(we.h(b, us), Dt, Yv.h("\x26", kh.h(fR, c))));
    return a.g ? a.g(b) : a.call(null, b);
  };
}(function(a) {
  return function(b) {
    return GG.h(function(a) {
      return hR(a, XQ, "application/json", mu.g(b));
    }, new U(null, 1, 5, V, [a.g ? a.g(b) : a.call(null, b)], null));
  };
}(function(a) {
  return function(b) {
    var c = Kl.g(b);
    q(c) && (b = Fh(Q.j(we.h(b, Kl), It, YQ(c)), new U(null, 2, 5, V, [eq, "content-type"], null), "application/json"));
    return a.g ? a.g(b) : a.call(null, b);
  };
}(function(a) {
  return function(b) {
    var c = Lj.k(G([iR, Bt.g(b)], 0)), d = Xe(c) ? S.h(Qg, c) : c, e = P.h(d, sr), f = P.h(d, kt);
    return GG.h(function(a, c, d, e, f) {
      return function(a) {
        return hR(a, f, "application/transit+json", mu.g(b));
      };
    }(c, d, e, f, function(a, b, c, d) {
      return function(a) {
        return KQ.h(d, c).Te(a);
      };
    }(c, d, e, f)), new U(null, 1, 5, V, [a.g ? a.g(b) : a.call(null, b)], null));
  };
}(function(a) {
  return function(b) {
    var c = ym.g(b);
    if (q(c)) {
      var d = Lj.k(G([iR, Bt.g(b)], 0)), e = Xe(d) ? S.h(Qg, d) : d, d = P.h(e, Vm), e = P.h(e, al);
      b = Fh(Q.j(we.h(b, ym), It, WQ(c, e, d)), new U(null, 2, 5, V, [eq, "content-type"], null), "application/transit+json");
    }
    return a.g ? a.g(b) : a.call(null, b);
  };
}(function(a) {
  return function(b) {
    return GG.h(function(a) {
      return hR(a, Oy, "application/edn", mu.g(b));
    }, new U(null, 1, 5, V, [a.g ? a.g(b) : a.call(null, b)], null));
  };
}(function(a) {
  return function(b) {
    var c = Ut.g(b);
    q(c) && (b = Fh(Q.j(we.h(b, Ut), It, Ug.k(G([c], 0))), new U(null, 2, 5, V, [eq, "content-type"], null), "application/edn"));
    return a.g ? a.g(b) : a.call(null, b);
  };
}(function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = G(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    var e = O.j(b, 0, null);
    return function(b, d) {
      return function(b) {
        var e;
        e = ws.g(b);
        e = q(e) ? e : d;
        q(e) && (b = Fh(b, new U(null, 2, 5, V, [eq, "content-type"], null), e));
        return a.g ? a.g(b) : a.call(null, b);
      };
    }(b, e);
  }
  a.D = 1;
  a.q = function(a) {
    var d = C(a);
    a = E(a);
    return b(d, a);
  };
  a.k = b;
  return a;
}()(function(a) {
  return function(b) {
    b = Xe(b) ? S.h(Qg, b) : b;
    var c = P.h(b, mu), d = P.h(b, Qq);
    q(q(d) ? (new Oj(null, new n(null, 4, [Yl, null, Kn, null, Gs, null, tt, null], null), null)).call(null, c) : d) && (b = Fh(Q.j(we.h(b, Qq), It, Yv.h("\x26", kh.h(fR, d))), new U(null, 2, 5, V, [eq, "content-type"], null), "application/x-www-form-urlencoded"));
    return a.g ? a.g(b) : a.call(null, b);
  };
}(function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = G(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    var e = O.j(b, 0, null);
    return function(b, d) {
      return function(b) {
        var e;
        e = Eu.g(b);
        e = q(e) ? e : d;
        q(e) && (b = Fh(b, new U(null, 2, 5, V, [eq, "accept"], null), e));
        return a.g ? a.g(b) : a.call(null, b);
      };
    }(b, e);
  }
  a.D = 1;
  a.q = function(a) {
    var d = C(a);
    a = E(a);
    return b(d, a);
  };
  a.k = b;
  return a;
}()(function(a) {
  var b = Xe(a) ? S.h(Qg, a) : a, c = P.h(b, Hq), d = P.h(b, It), e = P.h(b, eq), f = P.h(b, mu), g = xG.w(), h = TQ(b), l = Rf(q(f) ? f : zl), p = function() {
    var a = wt.g(b);
    return q(a) ? a : 0;
  }(), s = VQ(e), t = null == c ? !0 : c, v = function() {
    var a = new MJ;
    a.Ud = Math.max(0, p);
    a.yh = t;
    return a;
  }();
  Vg.v($Q, Q, g, v);
  v.Tg("complete", function(a, b) {
    return function(c) {
      c = c.target;
      AG.h(a, new n(null, 5, [cr, $J(c), Lq, aK(c), It, bK(c), eq, ZQ(c.getAllResponseHeaders()), hu, new U(null, 2, 5, V, [b, String(c.je)], null)], null));
      Vg.j($Q, we, a);
      return yC(a);
    };
  }(g, h, l, p, s, t, v, a, b, b, c, d, e, f));
  v.send(h, l, d, s);
  return g;
}))))))))))))))));
var kR = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = G(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    var e = O.j(b, 0, null), e = Lj.k(G([e, new n(null, 2, [Em, Gs, Jr, a], null)], 0));
    return jR.g ? jR.g(e) : jR.call(null, e);
  }
  a.D = 1;
  a.q = function(a) {
    var d = C(a);
    a = E(a);
    return b(d, a);
  };
  a.k = b;
  return a;
}();
var lR, mR = new n(null, 1, [$k, "en_associative"], null);
function nR(a, b) {
  return kR.k("" + u.g("http://api.cortical.io/rest") + "/expressions", G([new n(null, 4, [us, mR, Kl, new n(null, 1, [qq, b], null), Hq, !1, eq, new n(null, 1, ["api-key", a], null)], null)], 0));
}
function oR(a, b, c) {
  return kR.k("" + u.g("http://api.cortical.io/rest") + "/expressions/similar_terms", G([new n(null, 4, [us, Q.k(mR, Dm, !0, G([Et, c], 0)), Kl, new n(null, 1, [ru, b], null), Hq, !1, eq, new n(null, 1, ["api-key", a], null)], null)], 0));
}
function pR(a, b) {
  return Ah.h(null == a ? null : Yb(a), kh.g(function(a) {
    return a + b;
  }));
}
var rR = function qR(b, c, d) {
  var e = xB(new U(null, 2, 5, V, [128, 128], null)), f = function() {
    var b = Gi;
    return Sg.g ? Sg.g(b) : Sg.call(null, b);
  }(), g = function(b, c) {
    return function() {
      return Uj(ph.h(.02 * Pz(b), function(b) {
        return function() {
          return VA(Pz(b) - 1);
        };
      }(b, c)));
    };
  }(e, f);
  Vg.v(f, Q, ".", g());
  var h = xG.g(1);
  WF(function(c, e, f, g) {
    return function() {
      var h = function() {
        return function(b) {
          return function() {
            function c(d) {
              for (;;) {
                var e;
                a: {
                  try {
                    for (;;) {
                      var f = b(d);
                      if (!X(f, Z)) {
                        e = f;
                        break a;
                      }
                    }
                  } catch (g) {
                    if (g instanceof Object) {
                      d[5] = g;
                      mG(d);
                      e = Z;
                      break a;
                    }
                    throw g;
                  }
                  e = void 0;
                }
                if (!X(e, Z)) {
                  return e;
                }
              }
            }
            function d() {
              var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
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
            e.w = d;
            e.g = c;
            return e;
          }();
        }(function(c, e, f, g) {
          return function(c) {
            var e = c[1];
            if (7 === e) {
              var e = c[7], e = c[2], h = Lq.g(e);
              c[7] = e;
              c[1] = q(h) ? 8 : 9;
              return Z;
            }
            if (20 === e) {
              return e = c[8], h = tk.k(G([e], 0)), e = g(), c[9] = h, c[2] = e, c[1] = 21, Z;
            }
            if (1 === e) {
              var e = xh.h(new Oj(null, new n(null, 1, [".", null], null), null), d), e = kh.h($v, e), l = A(e), p;
              c[10] = null;
              c[11] = l;
              c[12] = 0;
              c[13] = 0;
              c[2] = null;
              c[1] = 2;
              return Z;
            }
            if (4 === e) {
              var e = c[10], h = c[12], s = c[14], e = w.h(e, h), h = tk.k(G(["requesting fingerprint for:", e], 0)), s = nR(b, e);
              c[15] = h;
              c[14] = e;
              return iG(c, 7, s);
            }
            return 15 === e ? (h = c[16], e = x(h), h = z(h), s = J(e), c[10] = e, c[11] = h, c[12] = 0, c[13] = s, c[2] = null, c[1] = 2, Z) : 21 === e ? (e = Vg.v(f, Q, c[17], c[2]), h = uG(500), c[18] = e, iG(c, 22, h)) : 13 === e ? (c[2] = null, c[1] = 14, Z) : 22 === e ? (h = c[16], e = c[2], l = F(h), c[10] = null, c[11] = l, c[12] = 0, c[13] = 0, c[19] = e, c[2] = null, c[1] = 2, Z) : 6 === e ? (e = c[2], c[2] = e, c[1] = 3, Z) : 17 === e ? (e = c[2], c[2] = e, c[1] = 14, Z) : 3 === e ? (e = 
            c[2], kG(c, e)) : 12 === e ? (h = c[16], e = T(h), c[1] = e ? 15 : 16, Z) : 2 === e ? (h = c[12], p = c[13], e = h < p, c[1] = q(e) ? 4 : 5, Z) : 19 === e ? (e = c[8], e = Dh.h(e, new U(null, 2, 5, V, [It, ru], null)), e = Uj(e), c[2] = e, c[1] = 21, Z) : 11 === e ? (e = c[10], l = c[11], h = c[12], p = c[13], s = c[2], c[10] = e, c[11] = l, c[12] = h + 1, c[13] = p, c[20] = s, c[2] = null, c[1] = 2, Z) : 9 === e ? (e = c[7], h = tk.k(G([e], 0)), e = g(), c[21] = h, c[2] = e, c[1] = 10, 
            Z) : 5 === e ? (l = c[11], e = A(l), c[16] = e, c[1] = e ? 12 : 13, Z) : 14 === e ? (e = c[2], c[2] = e, c[1] = 6, Z) : 16 === e ? (h = c[16], e = C(h), h = tk.k(G(["requesting fingerprint for:", e], 0)), s = nR(b, e), c[22] = h, c[17] = e, iG(c, 18, s)) : 10 === e ? (s = c[14], e = Vg.v(f, Q, s, c[2]), h = uG(500), c[23] = e, iG(c, 11, h)) : 18 === e ? (e = c[2], h = Lq.g(e), c[8] = e, c[1] = q(h) ? 19 : 20, Z) : 8 === e ? (e = c[7], e = Dh.h(e, new U(null, 2, 5, V, [It, ru], null)), 
            e = Uj(e), c[2] = e, c[1] = 10, Z) : null;
          };
        }(c, e, f, g), c, e, f, g);
      }(), B = function() {
        var b = h.w ? h.w() : h.call(null);
        b[6] = c;
        return b;
      }();
      return hG(B);
    };
  }(h, e, f, g));
  "undefined" === typeof lR && (lR = function(b, c, d, e, f, g, h, D) {
    this.hi = b;
    this.ef = c;
    this.O = d;
    this.gj = e;
    this.Ug = f;
    this.jg = g;
    this.$h = h;
    this.pi = D;
    this.K = 0;
    this.B = 393216;
  }, lR.wb = !0, lR.vb = "comportexviz.cortical-io/t14747", lR.Bb = function() {
    return function(b, c) {
      return Wc(c, "comportexviz.cortical-io/t14747");
    };
  }(e, f, g), lR.prototype.Zc = function() {
    return function(b, c, d) {
      var e = this;
      return A(d) ? (b = P.h(function() {
        var b = e.ef;
        return I.g ? I.g(b) : I.call(null, b);
      }(), $v(d)), 0 !== c ? pR(b, c) : b) : Qj;
    };
  }(e, f, g), lR.prototype.Qd = function(b, c, d) {
    return function(e, f, g) {
      var h = this, D = this;
      return new n(null, 1, [Dn, function() {
        var e = xG.g(1);
        WF(function(b, c, d, e, l) {
          return function() {
            var p = function() {
              return function(b) {
                return function() {
                  function c(d) {
                    for (;;) {
                      var e;
                      a: {
                        try {
                          for (;;) {
                            var f = b(d);
                            if (!X(f, Z)) {
                              e = f;
                              break a;
                            }
                          }
                        } catch (g) {
                          if (g instanceof Object) {
                            d[5] = g;
                            mG(d);
                            e = Z;
                            break a;
                          }
                          throw g;
                        }
                        e = void 0;
                      }
                      if (!X(e, Z)) {
                        return e;
                      }
                    }
                  }
                  function d() {
                    var b = [null, null, null, null, null, null, null, null, null, null, null];
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
                  e.w = d;
                  e.g = c;
                  return e;
                }();
              }(function(b, c, d, e, l) {
                return function(p) {
                  var s = p[1];
                  if (8 === s) {
                    var t = p;
                    t[2] = p[2];
                    t[1] = 4;
                    return Z;
                  }
                  if (7 === s) {
                    var N = p[7], t = tk.k(G([N], 0));
                    p[2] = t;
                    p[1] = 8;
                    return Z;
                  }
                  if (6 === s) {
                    var D = p[8], N = p[7], H = p[9], L = g + 1, t = function() {
                      return function(b, c) {
                        return function(b) {
                          var d = Uj(ru.g(b)), e = Mj(f, d), g = S.h(jf, Ei(e)), e = Di(e);
                          return new n(null, 5, [Zm, qq.g(b), hr, J(e) / J(d), Bq, J(e) / J(f), Gp, g / c, nu, g / J(d)], null);
                        };
                      }(N, D, H, D, N, H, L, s, b, c, d, e, l);
                    }(), K = [qq, ru], M = function() {
                      var b = h.ef;
                      return I.g ? I.g(b) : I.call(null, b);
                    }(), M = [".", P.h(M, ".")], K = ve(K, M), M = It.g(N), K = ee(K, M), t = kh.h(t, K), t = lh.h(L, t);
                    p[2] = t;
                    p[1] = 8;
                    return Z;
                  }
                  return 5 === s ? (N = p[7], t = p[2], K = tk.k(G(["requested similar terms."], 0)), M = Lq.g(t), p[7] = t, p[10] = K, p[1] = q(M) ? 6 : 7, Z) : 4 === s ? (t = p[2], kG(p, t)) : 3 === s ? (H = p[9], t = Ei(f), D = S.h(jf, t), t = oR(h.jg, H, g), p[8] = D, iG(p, 5, t)) : 2 === s ? (t = se, p[2] = t, p[1] = 4, Z) : 1 === s ? (H = p[9], t = Og.h(function() {
                    return function() {
                      return function(b) {
                        var c = O.j(b, 0, null);
                        return O.j(b, 1, null) >= h.Ug ? c : null;
                      };
                    }(H, s, b, c, d, e, l);
                  }(), f), K = Ce(t), p[9] = t, p[1] = K ? 2 : 3, Z) : null;
                };
              }(b, c, d, e, l), b, c, d, e, l);
            }(), s = function() {
              var c = p.w ? p.w() : p.call(null);
              c[6] = b;
              return c;
            }();
            return hG(s);
          };
        }(e, D, b, c, d));
        return e;
      }()], null);
    };
  }(e, f, g), lR.prototype.Lb = function() {
    return function() {
      return this.O;
    };
  }(e, f, g), lR.prototype.L = function() {
    return function() {
      return this.pi;
    };
  }(e, f, g), lR.prototype.M = function() {
    return function(b, c) {
      return new lR(this.hi, this.ef, this.O, this.gj, this.Ug, this.jg, this.$h, c);
    };
  }(e, f, g));
  return new lR(g, f, e, d, c, b, qR, null);
};
function sR(a, b, c, d) {
  jI.call(this);
  this.Jd = c || ev();
  this.He = a;
  this.ic = [];
  this.fj = b ? b : tR;
  this.jj = !!d;
  this.He.className = "goog-tabpane";
  a = [];
  for (b = mv(this.He);b;) {
    a.push(b), b = void 0 != b.nextElementSibling ? b.nextElementSibling : nv(b.nextSibling);
  }
  this.oc = this.Jd.qd("ul", {className:"goog-tabpane-tabs", tabIndex:"0"});
  this.Ac = this.Jd.qd("div", "goog-tabpane-cont");
  this.He.appendChild(this.Ac);
  b = this.He;
  switch(this.fj) {
    case tR:
      b.insertBefore(this.oc, this.Ac);
      b.insertBefore(uR(this), this.Ac);
      iI(b, "goog-tabpane-top");
      break;
    case 1:
      b.appendChild(this.oc);
      b.appendChild(uR(this));
      iI(b, "goog-tabpane-bottom");
      break;
    case 2:
      b.insertBefore(this.oc, this.Ac);
      iI(b, "goog-tabpane-left");
      break;
    case 3:
      b.insertBefore(this.oc, this.Ac);
      iI(b, "goog-tabpane-right");
      break;
    default:
      throw Error("Invalid tab location");;
  }
  this.oc.tabIndex = 0;
  nz(this.oc, this.jj ? "mousedown" : "click", this.Ii, !1, this);
  nz(this.oc, "keydown", this.Ji, !1, this);
  for (b = 0;c = a[b];b++) {
    c = new vR(c);
    if (c.vc && c.vc != this && c.vc instanceof sR) {
      d = c.vc;
      var e = c;
      ka(e) && (e = d.ic[e]);
      d.ic.splice(e.fe, 1);
      e.ne(null);
      var f = e.Ge;
      f && f.parentNode && f.parentNode.removeChild(f);
      (e = e.Ac) && e.parentNode && e.parentNode.removeChild(e);
      e = void 0;
      for (f = 0;e = d.ic[f];f++) {
        e.ne(d, f);
      }
    }
    d = this.ic.length;
    ca(void 0) && void 0 != d ? (d = void 0, this.ic.splice(d, 0, c), this.oc.insertBefore(c.Ge, this.oc.childNodes[d])) : (this.ic.push(c), this.oc.appendChild(c.Ge));
    c.ne(this, d);
    this.Cc || (this.Cc = c, this.dispatchEvent(new wR("change", this, this.Cc)));
    this.Ac.appendChild(c.Ac);
    xR(c, c == this.Cc);
    c = void 0;
    for (d += 1;c = this.ic[d];d++) {
      c.fe = d;
    }
  }
}
Ca(sR, jI);
var tR = 0;
function uR(a) {
  var b = ev(void 0), c = null, d = b.Id;
  Tu && d.createStyleSheet ? (c = d.createStyleSheet(), Wv(c)) : (d = hv(b.Id, "head")[0], d || (c = hv(b.Id, "body")[0], d = b.qd("head"), c.parentNode.insertBefore(d, c)), c = b.qd("style"), Wv(c), b.appendChild(d, c));
  return a.Jd.qd("div", "goog-tabpane-clear");
}
function yR(a, b) {
  if (0 <= b && b < a.ic.length) {
    var c = a.ic[b];
    !c.isEnabled() || a.Cc && c == a.Cc || (xR(a.Cc, !1), xR(c, !0), a.Cc = c, a.dispatchEvent(new wR("change", a, a.Cc)));
  }
}
sR.prototype.Ii = function(a) {
  for (var b = a.target;b != this.oc;) {
    if ("LI" == b.tagName) {
      var c;
      for (c = 0;b = b.previousSibling;c++) {
      }
      yR(this, c);
      break;
    }
    b = b.parentNode;
  }
  a.preventDefault();
};
sR.prototype.Ji = function(a) {
  if (!(a.altKey || a.metaKey || a.ctrlKey)) {
    switch(a.keyCode) {
      case 37:
        a = this.Cc.fe - 1;
        yR(this, 0 > a ? this.ic.length - 1 : a);
        break;
      case 39:
        a = this.Cc.fe + 1;
        yR(this, a >= this.ic.length ? 0 : a);
        break;
      case 36:
        yR(this, 0);
        break;
      case 35:
        yR(this, this.ic.length - 1);
    }
  }
};
function vR(a, b, c) {
  var d, e;
  if (ja(a) && !ca(b)) {
    d = a;
  } else {
    if (b) {
      d = b, e = a;
    } else {
      if (a) {
        if (b = mv(a)) {
          d = qv(b), b.parentNode.removeChild(b);
        }
        e = a;
      }
    }
  }
  this.Jd = c || ev();
  this.Ac = e || this.Jd.qd("div");
  this.Ge = this.Jd.qd("li", null, d);
  this.fe = this.vc = null;
  this.ei = !0;
}
vR.prototype.getParent = function() {
  return this.vc;
};
vR.prototype.isEnabled = function() {
  return this.ei;
};
function xR(a, b) {
  a.isEnabled() && (a.Ac.style.display = b ? "" : "none", a.Ge.className = b ? "goog-tabpane-tab-selected" : "goog-tabpane-tab");
}
vR.prototype.ne = function(a, b) {
  this.vc = a;
  this.fe = ca(b) ? b : null;
};
function wR(a, b, c) {
  az.call(this, a, b);
  this.page = c;
}
Ca(wR, az);
var zR = function() {
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
function AR(a) {
  return Math.floor.g ? Math.floor.g(a) : Math.floor.call(null, a);
}
function BR(a) {
  return Math.ceil.g ? Math.ceil.g(a) : Math.ceil.call(null, a);
}
function CR(a) {
  return Nb.h(jf, a) / J(a);
}
var DR = function() {
  function a(a, b, c) {
    a = bk.j(a, b, c);
    return(C(a) % c + c) % c === (b % c + c) % c ? wg.h(a, new U(null, 1, 5, V, [b], null)) : a;
  }
  function b(a, b) {
    return wg.h(bk.h(a, b), new U(null, 1, 5, V, [b], null));
  }
  function c(a) {
    return bk.g(a);
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
var ER = new U(null, 6, 5, V, [1, 5, 2, 2.5, 4, 3], null);
function FR(a) {
  return C(function() {
    return function c(d) {
      return new Tf(null, function() {
        for (var e = d;;) {
          if (e = A(e)) {
            if (T(e)) {
              var f = x(e), g = J(f), h = Xf(g);
              a: {
                for (var l = 0;;) {
                  if (l < g) {
                    var p = w.h(f, l), s = O.j(p, 0, null), p = O.j(p, 1, null);
                    Fd.h(p, a) && h.add(s);
                    l += 1;
                  } else {
                    f = !0;
                    break a;
                  }
                }
                f = void 0;
              }
              return f ? $f(rg(h), c(z(e))) : $f(rg(h), null);
            }
            f = C(e);
            h = O.j(f, 0, null);
            f = O.j(f, 1, null);
            if (Fd.h(f, a)) {
              return ee(h, c(E(e)));
            }
            e = E(e);
          } else {
            return null;
          }
        }
      }, null, null);
    }(Ng(ai, ER));
  }());
}
function GR(a, b, c) {
  c = q(c) ? 1 : 0;
  return 1 >= J(ER) ? 1 - b + c : 1 - FR(a) / (J(ER) - 1) - b + c;
}
function HR(a, b, c, d) {
  return 1 - .5 * ((zR.h(b - d, 2) + zR.h(a - c, 2)) / zR.h(.1 * (b - a), 2));
}
function IR(a, b, c) {
  a = b - a;
  return c > a ? 1 - zR.h((c - a) / (.2 * a), 2) : 1;
}
function JR(a, b) {
  var c = a / b, d = b / a;
  return 2 - (c > d ? c : d);
}
function KR(a, b) {
  return a >= b ? 2 - a / b : 1;
}
function LR(a) {
  var b = O.j(a, 0, null), c = O.j(a, 1, null), d = O.j(a, 2, null);
  a = O.j(a, 3, null);
  var e = new U(null, 4, 5, V, [.2, .25, .5, .05], null);
  return b * (e.g ? e.g(0) : e.call(null, 0)) + c * (e.g ? e.g(1) : e.call(null, 1)) + d * (e.g ? e.g(2) : e.call(null, 2)) + a * (e.g ? e.g(3) : e.call(null, 3));
}
var MR = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = G(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    var e = O.j(a, 0, null), f = O.j(a, 1, null), g = Xe(b) ? S.h(Qg, b) : b, h = P.j(g, oq, !1), l = P.j(g, Yr, 500), p = P.j(g, kl, .01);
    if ("number" === typeof e && "number" === typeof f && Eg.h(e, f)) {
      for (var s = Sg.g ? Sg.g(-2) : Sg.call(null, -2), t = function() {
        var a = Gi;
        return Sg.g ? Sg.g(a) : Sg.call(null, a);
      }(), v = ER;!Ce(v);) {
        for (var B = C(v), y = 1;;) {
          var D = GR(B, y, !0);
          if (LR(new U(null, 4, 5, V, [D, 1, 1, 1], null)) < (I.g ? I.g(s) : I.call(null, s))) {
            break;
          } else {
            for (var H = 2;;) {
              var K = KR(H / l, p);
              if (LR(new U(null, 4, 5, V, [D, 1, K, 1], null)) < (I.g ? I.g(s) : I.call(null, s))) {
                break;
              } else {
                for (var M = BR(Math.log((f - e) / ((H + 1) * y * H)) / Math.LN10);;) {
                  var L = B * y * zR.h(10, M), R = IR(e, f, (H - 1) * L);
                  if (LR(new U(null, 4, 5, V, [D, R, K, 1], null)) < (I.g ? I.g(s) : I.call(null, s))) {
                    break;
                  } else {
                    for (var R = e / L, $ = AR(f / L) - (H - 1);;) {
                      if (!($ > R)) {
                        var N = $ * L, wa = N + (H - 1) * L, Y = GR(B, y, 0 < wa && 0 > N && 0 === (N % L + L) % L), ga = HR(e, f, N, wa), ga = LR(new U(null, 4, 5, V, [Y, ga, JR(H / l, p), 1], null));
                        if (!(ga < (I.g ? I.g(s) : I.call(null, s)))) {
                          Y = s;
                          Tg.h ? Tg.h(Y, ga) : Tg.call(null, Y, ga);
                          Y = t;
                          N = new n(null, 3, [ol, N, gr, wa, Zt, L], null);
                          Tg.h ? Tg.h(Y, N) : Tg.call(null, Y, N);
                          $ += 1 / y;
                          continue;
                        }
                      }
                      break;
                    }
                    M += 1;
                  }
                }
                H += 1;
              }
            }
            y += 1;
          }
        }
        v = F(v);
      }
      var fa = I.g ? I.g(t) : I.call(null, t), v = new U(null, 2, 5, V, [q(h) ? e : function() {
        var a = ol.g(fa);
        return a < e ? a : e;
      }(), q(h) ? f : function() {
        var a = gr.g(fa);
        return a > f ? a : f;
      }()], null);
      return new n(null, 4, [rr, v, ol, C(v), gr, ie(v), Hs, wh.h(function(a, b) {
        return function(a) {
          var c = O.j(b, 0, null), d = O.j(b, 1, null);
          return c <= a && a <= d;
        };
      }(fa, v, s, t, a, e, f, b, g, h, l, p), DR.j(ol.g(fa), gr.g(fa), Zt.g(fa)))], null);
    }
    return new n(null, 4, [rr, 0, ol, e, gr, f, Hs, se], null);
  }
  a.D = 1;
  a.q = function(a) {
    var d = C(a);
    a = E(a);
    return b(d, a);
  };
  a.k = b;
  return a;
}();
function NR(a, b, c, d) {
  this.domain = a;
  this.Nb = b;
  this.o = c;
  this.l = d;
  this.B = 2229667595;
  this.K = 8192;
  2 < arguments.length ? (this.o = c, this.l = d) : this.l = this.o = null;
}
k = NR.prototype;
k.N = function(a, b) {
  return hc.j(this, b, null);
};
k.P = function(a, b, c) {
  switch(b instanceof W ? b.ja : null) {
    case "range":
      return this.Nb;
    case "domain":
      return this.domain;
    default:
      return P.j(this.l, b, c);
  }
};
k.U = function(a, b, c) {
  return kk(b, function() {
    return function(a) {
      return kk(b, qk, "", " ", "", c, a);
    };
  }(this), "#c2.scale._linear{", ", ", "}", c, wg.h(new U(null, 2, 5, V, [new U(null, 2, 5, V, [lt, this.domain], null), new U(null, 2, 5, V, [tu, this.Nb], null)], null), this.l));
};
k.L = function() {
  return this.o;
};
k.ma = function() {
  return new NR(this.domain, this.Nb, this.o, this.l, this.A);
};
k.Z = function() {
  return 2 + J(this.l);
};
k.S = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Jf(this);
};
k.J = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && ui(this, b) : b) ? !0 : !1;
};
k.Ra = function(a, b) {
  return Ze(new Oj(null, new n(null, 2, [lt, null, tu, null], null), null), b) ? we.h(ge(Ah.h(Gi, this), this.o), b) : new NR(this.domain, this.Nb, this.o, Fg(we.h(this.l, b)), null);
};
k.za = function(a, b, c) {
  return q(X.h ? X.h(lt, b) : X.call(null, lt, b)) ? new NR(c, this.Nb, this.o, this.l, null) : q(X.h ? X.h(tu, b) : X.call(null, tu, b)) ? new NR(this.domain, c, this.o, this.l, null) : new NR(this.domain, this.Nb, this.o, Q.j(this.l, b, c), null);
};
k.W = function() {
  return A(wg.h(new U(null, 2, 5, V, [new U(null, 2, 5, V, [lt, this.domain], null), new U(null, 2, 5, V, [tu, this.Nb], null)], null), this.l));
};
k.M = function(a, b) {
  return new NR(this.domain, this.Nb, b, this.l, this.A);
};
k.Y = function(a, b) {
  return He(b) ? kc(this, w.h(b, 0), w.h(b, 1)) : Nb.j($b, this, b);
};
k.call = function(a, b) {
  a = this;
  var c = je(a.domain) - C(a.domain), d = je(a.Nb) - C(a.Nb);
  return C(a.Nb) + d * ((b - C(a.domain)) / c);
};
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Lb(b)));
};
k.g = function(a) {
  var b = je(this.domain) - C(this.domain), c = je(this.Nb) - C(this.Nb);
  return C(this.Nb) + c * ((a - C(this.domain)) / b);
};
var OR = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = G(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = Lj.k(G([new n(null, 2, [lt, new U(null, 2, 5, V, [0, 1], null), tu, new U(null, 2, 5, V, [0, 1], null)], null), S.h(Qg, a)], 0));
    return new NR(lt.g(a), tu.g(a), null, we.k(a, lt, G([tu], 0)));
  }
  a.D = 0;
  a.q = function(a) {
    a = A(a);
    return b(a);
  };
  a.k = b;
  return a;
}();
function PR(a) {
  return Fe(a) && Fd.h(2, J(a)) ? a : Ge(a) ? new U(null, 2, 5, V, [Ys.g(a), Xk.g(a)], null) : null;
}
function QR(a) {
  var b = PR(a);
  a = O.j(b, 0, null);
  b = O.j(b, 1, null);
  return "translate(" + u.g(a) + "," + u.g(b) + ")";
}
var RR = function() {
  function a(a, b) {
    var c = PR(b), g = O.j(c, 0, null), c = O.j(c, 1, null);
    return "rotate(" + u.g(a) + "," + u.g(g) + "," + u.g(c) + ")";
  }
  function b(a) {
    return c.h(a, new U(null, 2, 5, V, [0, 0], null));
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
}(), SR = function() {
  function a(a, d, e) {
    var f = null;
    2 < arguments.length && (f = G(Array.prototype.slice.call(arguments, 2), 0));
    return b.call(this, a, d, f);
  }
  function b(a, b, e) {
    var f = Xe(e) ? S.h(Qg, e) : e, g = P.j(f, Nq, 28), h = P.h(f, mr), l = P.j(f, xl, 9), p = P.j(f, Jp, 6), s = P.j(f, Xm, u), t = P.j(f, An, Cu), v = function() {
      switch(t instanceof W ? t.ja : null) {
        case "bottom":
          return new U(null, 6, 5, V, [Xk, Ys, mn, Ct, $s, fu], null);
        case "top":
          return new U(null, 6, 5, V, [Xk, Ys, mn, Ct, $s, fu], null);
        case "right":
          return new U(null, 6, 5, V, [Ys, Xk, $s, fu, mn, Ct], null);
        case "left":
          return new U(null, 6, 5, V, [Ys, Xk, $s, fu, mn, Ct], null);
        default:
          throw Error("No matching clause: " + u.g(t));;
      }
    }(), B = O.j(v, 0, null), y = O.j(v, 1, null), D = O.j(v, 2, null), H = O.j(v, 3, null), K = O.j(v, 4, null), M = O.j(v, 5, null), L = function() {
      switch(t instanceof W ? t.ja : null) {
        case "bottom":
          return 1;
        case "right":
          return 1;
        case "top":
          return-1;
        case "left":
          return-1;
        default:
          throw Error("No matching clause: " + u.g(t));;
      }
    }();
    return new U(null, 5, 5, V, [Aq, new n(null, 1, [or, "axis " + u.g(Rf(t))], null), new U(null, 2, 5, V, [Fm, S.h(Qg, sh.h(new U(null, 2, 5, V, [K, M], null), tu.g(a)))], null), new U(null, 2, 5, V, [Ul, mw(kh.j(ai, b, oh.g(a)), function(a, b, c, d, e, f, g, h, l, p, s, t, v, y, B) {
      return function(a) {
        var f = O.j(a, 0, null);
        a = O.j(a, 1, null);
        return new U(null, 4, 5, V, [yl, new n(null, 1, [Ml, QR(new Ji([b, 0, c, a.g ? a.g(f) : a.call(null, f)], !0, !1))], null), new U(null, 3, 5, V, [Fu, new Ji([b, h * v], !0, !1), B.g ? B.g(f) : B.call(null, f)], null), new U(null, 2, 5, V, [Sq, new Ji([d, 0, e, h * y], !0, !1)], null)], null);
      };
    }(v, B, y, D, H, K, M, L, e, f, g, h, l, p, s, t))], null), q(h) ? new U(null, 3, 5, V, [zm, new n(null, 1, [Ml, "" + u.g(QR(new Ji([B, L * g, y, CR(tu.g(a))], !0, !1))) + " " + u.g(function() {
      switch(t instanceof W ? t.ja : null) {
        case "right":
          return RR.g(90);
        case "left":
          return RR.g(-90);
        default:
          return "";
      }
    }())], null), h], null) : null], null);
  }
  a.D = 2;
  a.q = function(a) {
    var d = C(a);
    a = F(a);
    var e = C(a);
    a = E(a);
    return b(d, e, a);
  };
  a.k = b;
  return a;
}();
function TR(a) {
  return S.h(jf, a) / J(a);
}
function UR(a, b) {
  var c = Di(C(b));
  return Ah.h(Gi, function() {
    return function(c) {
      return function f(g) {
        return new Tf(null, function() {
          return function() {
            for (;;) {
              var c = A(g);
              if (c) {
                if (T(c)) {
                  var d = x(c), p = J(d), s = Xf(p);
                  return function() {
                    for (var c = 0;;) {
                      if (c < p) {
                        var f = w.h(d, c), g = s, h = V, t = f, f = kh.h(f, b), f = a.g ? a.g(f) : a.call(null, f);
                        g.add(new U(null, 2, 5, h, [t, f], null));
                        c += 1;
                      } else {
                        return!0;
                      }
                    }
                  }() ? $f(rg(s), f(z(c))) : $f(rg(s), null);
                }
                var t = C(c);
                return ee(new U(null, 2, 5, V, [t, function() {
                  var c = kh.h(t, b);
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
function VR(a, b, c) {
  a = Gh.v(a, new U(null, 1, 5, V, [pq], null), te, UR(TR, b));
  b = J(pq.g(a));
  b > c && Ig(b) ? (c = Xe(a) ? S.h(Qg, a) : a, a = P.h(c, pq), b = 2 * P.h(c, ou), c = Q.k(c, ou, b, G([pq, Bh.h(Mg.h(UR, TR), Ch.h(2, a))], 0))) : c = a;
  return c;
}
function WR(a) {
  var b = function() {
    var a = new n(null, 3, [ou, 1, pq, se, st, 200], null);
    return Sg.g ? Sg.g(a) : Sg.call(null, a);
  }(), c = xG.g(1);
  WF(function(b, c) {
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
                      if (!X(e, Z)) {
                        d = e;
                        break a;
                      }
                    }
                  } catch (f) {
                    if (f instanceof Object) {
                      c[5] = f;
                      mG(c);
                      d = Z;
                      break a;
                    }
                    throw f;
                  }
                  d = void 0;
                }
                if (!X(d, Z)) {
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
            d.w = c;
            d.g = b;
            return d;
          }();
        }(function(b, c) {
          return function(b) {
            var d = b[1];
            if (7 === d) {
              return d = b, d[2] = b[2], d[1] = 3, Z;
            }
            if (6 === d) {
              var e = b[7], d = Vg.v(c, VR, e, 200), e = null == e ? null : Yb(e);
              b[8] = e;
              b[9] = d;
              b[2] = null;
              b[1] = 2;
              return Z;
            }
            if (5 === d) {
              return e = b[7], b[8] = e, b[2] = null, b[1] = 2, Z;
            }
            if (4 === d) {
              var e = b[8], d = te.h(e, b[2]), e = J(d), f = I.g ? I.g(c) : I.call(null, c), f = ou.g(f);
              b[7] = d;
              b[1] = q(e < f) ? 5 : 6;
              return Z;
            }
            return 3 === d ? (d = b[2], kG(b, d)) : 2 === d ? iG(b, 4, a) : 1 === d ? (e = se, b[8] = e, b[2] = null, b[1] = 2, Z) : null;
          };
        }(b, c), b, c);
      }(), g = function() {
        var a = f.w ? f.w() : f.call(null);
        a[6] = b;
        return a;
      }();
      return hG(g);
    };
  }(c, b));
  return b;
}
function XR(a, b) {
  var c = new U(null, 3, 5, V, [ir, Eq, ft], null), d = new n(null, 4, [Cu, 50, Fs, 30, am, 50, vm, 20], null), e = function() {
    var a = new lw(null, !0, function(a) {
      return function() {
        var d = Xe(b) ? S.h(Qg, b) : b, e = P.h(d, ou), f = P.h(d, st), g = P.h(d, pq), v = e * f, B = dq.g(Ae(g)), y = .1 * B, D = OR.k(G([lt, new U(null, 2, 5, V, [0, v], null), tu, new U(null, 2, 5, V, [0, 399], null)], 0)), H = Hs.g(MR.k(lt.g(D), G([Yr, 400], 0))), K = OR.k(G([lt, new U(null, 2, 5, V, [0, y], null), tu, new U(null, 2, 5, V, [179, 0], null)], 0)), M = OR.k(G([lt, new U(null, 2, 5, V, [0, y], null), tu, new U(null, 2, 5, V, [0, 179], null)], 0)), L = Hs.g(MR.k(lt.g(K), G([Yr, 450], 
        0)));
        return 0 < B ? new U(null, 3, 5, V, [rq, new U(null, 3, 5, V, [nq, new n(null, 1, [Gn, "text/css"], null), S.Q(u, "g.timestep rect { stroke-width: 0px; }", ".plot-space line { stroke: black; }", ".plot-space text { font-size: 80%; }", function() {
          return function(a, b, c, d, e, f, g, h, l, p, s, t, v, y, B) {
            return function ib(D) {
              return new Tf(null, function() {
                return function() {
                  for (;;) {
                    var a = A(D);
                    if (a) {
                      if (T(a)) {
                        var b = x(a), c = J(b), d = Xf(c);
                        return function() {
                          for (var a = 0;;) {
                            if (a < c) {
                              var e = w.h(b, a);
                              ag(d, "." + u.g(Rf(e)) + " { fill: " + u.g(function() {
                                var a = e;
                                return wH.g ? wH.g(a) : wH.call(null, a);
                              }()) + "}");
                              a += 1;
                            } else {
                              return!0;
                            }
                          }
                        }() ? $f(rg(d), ib(z(a))) : $f(rg(d), null);
                      }
                      var e = C(a);
                      return ee("." + u.g(Rf(e)) + " { fill: " + u.g(function() {
                        var a = e;
                        return wH.g ? wH.g(a) : wH.call(null, a);
                      }()) + "}", ib(E(a)));
                    }
                    return null;
                  }
                };
              }(a, b, c, d, e, f, g, h, l, p, s, t, v, y, B), null, null);
            };
          }(b, d, e, f, g, v, B, y, D, D, H, K, M, L, a)(c);
        }())], null), new U(null, 3, 5, V, [Hr, new n(null, 1, [nq, new n(null, 4, [Ms, "block", Iu, "auto", nn, 400 + Cu.g(a) + Fs.g(a), uu, 180 + am.g(a) + vm.g(a)], null)], null), new U(null, 5, 5, V, [br, new n(null, 1, [Ml, QR(new U(null, 2, 5, V, [Cu.g(a), vm.g(a)], null))], null), SR.k(K, L, G([An, Cu, xl, 28, mr, "n. columns", Nq, 35], 0)), new U(null, 3, 5, V, [Aq, new n(null, 1, [Ml, QR(new U(null, 2, 5, V, [0, 180], null))], null), SR.k(D, H, G([An, am, xl, 18, mr, "timestep", Nq, 35], 
        0))], null), new U(null, 2, 5, V, [Aq, mw.k(Ng(ai, g), function(a, b, d, e, f, g, h, l, p, s, t, v, y, B, D) {
          return function(H) {
            var K = O.j(H, 0, null), M = O.j(H, 1, null), L = kh.h(M, c), yb = dk.h(jf, L);
            return Ah.h(new U(null, 1, 5, V, [Hp], null), function() {
              return function(a, b, c, d, e, f, g, h, l, p, s, t, v, N, y, B, D, H, K, L) {
                return function id(M) {
                  return new Tf(null, function(a, b, c, d, e, f, g, h, l, p, s, t, v, N, y, B, D, H) {
                    return function() {
                      for (;;) {
                        var a = A(M);
                        if (a) {
                          if (T(a)) {
                            var b = x(a), c = J(b), e = Xf(c);
                            return function() {
                              for (var a = 0;;) {
                                if (a < c) {
                                  var f = w.h(b, a), g = O.j(f, 0, null), l = O.j(f, 1, null), p = O.j(f, 2, null);
                                  ag(e, new U(null, 2, 5, V, [Yt, new n(null, 5, [or, g, Ys, function() {
                                    var a = d * h;
                                    return N.g ? N.g(a) : N.call(null, a);
                                  }(), Xk, function() {
                                    var a = p;
                                    return D.g ? D.g(a) : D.call(null, a);
                                  }(), nn, y.g ? y.g(h) : y.call(null, h), uu, function() {
                                    var a = l;
                                    return H.g ? H.g(a) : H.call(null, a);
                                  }()], null)], null));
                                  a += 1;
                                } else {
                                  return!0;
                                }
                              }
                            }() ? $f(rg(e), id(z(a))) : $f(rg(e), null);
                          }
                          var f = C(a), g = O.j(f, 0, null), l = O.j(f, 1, null), p = O.j(f, 2, null);
                          return ee(new U(null, 2, 5, V, [Yt, new n(null, 5, [or, g, Ys, function() {
                            var a = d * h;
                            return N.g ? N.g(a) : N.call(null, a);
                          }(), Xk, function() {
                            var a = p;
                            return D.g ? D.g(a) : D.call(null, a);
                          }(), nn, y.g ? y.g(h) : y.call(null, h), uu, function() {
                            var a = l;
                            return H.g ? H.g(a) : H.call(null, a);
                          }()], null)], null), id(E(a)));
                        }
                        return null;
                      }
                    };
                  }(a, b, c, d, e, f, g, h, l, p, s, t, v, N, y, B, D, H, K, L), null, null);
                };
              }(L, yb, H, K, M, a, b, d, e, f, g, h, l, p, s, t, v, y, B, D)(kh.v(ai, c, L, yb));
            }());
          };
        }(b, d, e, f, g, v, B, y, D, D, H, K, M, L, a), G([xq, Lg.h(kn, ie)], 0))], null)], null)], null)], null) : null;
      };
    }(d), wk.g("computed-observable"), Gi, Gi);
    I.g ? I.g(a) : I.call(null, a);
    return a;
  }(), f = dw(a);
  Uv(f, I.g ? I.g(e) : I.call(null, e));
  uk(e, Lp, function(a, b) {
    return function() {
      return Uv(b, I.g ? I.g(a) : I.call(null, a));
    };
  }(e, f, d));
  return e;
}
;function YR() {
}
YR.ii = function() {
  YR.ki || (YR.ki = new YR);
};
YR.ii();
Tu || Vu && Zu("525");
Tu || Uu && Zu("1.9.3");
function ZR(a) {
  return S.j(u, "comportex-", th("_", kh.h(function(a) {
    return Xv(a, "?", "_QMARK_");
  }, kh.h(function(a) {
    return "number" === typeof a ? "" + u.g(a) : Rf(a);
  }, a))));
}
function $R(a, b, c) {
  return new U(null, 3, 5, V, [mr, new U(null, 2, 5, V, [mt, new n(null, 3, [nr, ZR(b), Gn, "checkbox", Ar, q(Dh.h(a, b)) ? "checked" : null], null)], null), c], null);
}
function aS(a) {
  var b = new U(null, 2, 5, V, [tm, er], null), c = new U(null, 3, 5, V, [lq, Vp, lu], null);
  return new U(null, 3, 5, V, [mr, "Synapses from ", new U(null, 3, 5, V, [vu, new n(null, 1, [nr, ZR(b)], null), function() {
    return function e(c) {
      return new Tf(null, function() {
        for (;;) {
          var g = A(c);
          if (g) {
            if (T(g)) {
              var h = x(g), l = J(h), p = Xf(l);
              a: {
                for (var s = 0;;) {
                  if (s < l) {
                    var t = w.h(h, s), t = new U(null, 3, 5, V, [sq, new n(null, 2, [Zm, Rf(t), Nl, Fd.h(Dh.h(a, b), t) ? "selected" : null], null), Rf(t)], null);
                    p.add(t);
                    s += 1;
                  } else {
                    h = !0;
                    break a;
                  }
                }
                h = void 0;
              }
              return h ? $f(rg(p), e(z(g))) : $f(rg(p), null);
            }
            p = C(g);
            return ee(new U(null, 3, 5, V, [sq, new n(null, 2, [Zm, Rf(p), Nl, Fd.h(Dh.h(a, b), p) ? "selected" : null], null), Rf(p)], null), e(E(g)));
          }
          return null;
        }
      }, null, null);
    }(c);
  }()], null)], null);
}
function bS(a, b) {
  var c = O.j(b, 0, null), d = O.j(b, 1, null);
  return new U(null, 3, 5, V, [mr, new U(null, 2, 5, V, [Kr, Rf(c)], null), new U(null, 2, 5, V, [mt, new n(null, 2, [nr, ZR(new U(null, 2, 5, V, [a, c], null)), Zm, "" + u.g(d)], null)], null)], null);
}
function cS() {
  var a = dS, b = eS, c = fS, d = hI, e = gS, f = function() {
    var d = new lw(null, !0, function() {
      var d = V, e = V, f = new U(null, 2, 5, V, [xn, "Simulation"], null), g = new U(null, 3, 5, V, [mr, "Timestep:", new U(null, 2, 5, V, [Il, KA(I.g ? I.g(a) : I.call(null, a))], null)], null), h = V, B = new n(null, 1, [or, "detail"], null), y;
      if (q(I.g ? I.g(b) : I.call(null, b))) {
        y = I.g ? I.g(a) : I.call(null, a);
        if (q(cn.g(tq.g(y)))) {
          var D = tq.g(y), H = (new Date).getTime() - cn.g(D);
          y = (KA(y) - kn.g(D)) / H * 1E3;
        } else {
          y = null;
        }
        y = HG("%.1f steps/sec.", y);
      } else {
        y = null;
      }
      return new U(null, 3, 5, d, [As, new U(null, 11, 5, e, [el, f, g, new U(null, 3, 5, h, [vl, B, y], null), new U(null, 1, 5, V, [Us], null), new U(null, 3, 5, V, [em, new n(null, 1, [nq, new n(null, 1, [Ms, q(I.g ? I.g(b) : I.call(null, b)) ? "none" : null], null)], null), "Start"], null), new U(null, 3, 5, V, [Zr, new n(null, 1, [nq, new n(null, 1, [Ms, q(I.g ? I.g(b) : I.call(null, b)) ? null : "none"], null)], null), "Stop"], null), new U(null, 2, 5, V, [rn, "Step"], null), new U(null, 5, 
      5, V, [mr, "Step every:", new U(null, 2, 5, V, [Pp, "" + u.g(Rp.g(I.g ? I.g(c) : I.call(null, c))) + " ms"], null), new U(null, 2, 5, V, [Hu, new U(null, 3, 5, V, [on, new n(null, 1, [ku, "#"], null), "slower"], null)], null), new U(null, 2, 5, V, [Hu, new U(null, 3, 5, V, [El, new n(null, 1, [ku, "#"], null), "faster"], null)], null)], null), new U(null, 2, 5, V, [um, "Reset"], null), new U(null, 2, 5, V, [vs, new n(null, 1, [or, "detail"], null)], null)], null), new U(null, 6, 5, V, [dn, 
      new U(null, 2, 5, V, [xn, "Animation"], null), new U(null, 3, 5, V, [Sp, new n(null, 1, [nq, new n(null, 1, [Ms, q(Um.g(I.g ? I.g(c) : I.call(null, c))) ? "none" : null], null)], null), "Start"], null), new U(null, 3, 5, V, [Cq, new n(null, 1, [nq, new n(null, 1, [Ms, q(Um.g(I.g ? I.g(c) : I.call(null, c))) ? null : "none"], null)], null), "Stop"], null), new U(null, 2, 5, V, [Gm, "Draw now"], null), new U(null, 5, 5, V, [mr, "Draw every:", new U(null, 2, 5, V, [Xp, "" + u.g(Jq.g(I.g ? I.g(c) : 
      I.call(null, c))) + " steps"], null), new U(null, 2, 5, V, [Hu, new U(null, 3, 5, V, [Pm, new n(null, 1, [ku, "#"], null), "slower"], null)], null), new U(null, 2, 5, V, [Hu, new U(null, 3, 5, V, [fr, new n(null, 1, [ku, "#"], null), "faster"], null)], null)], null)], null)], null);
    }, wk.g("computed-observable"), Gi, Gi);
    I.g ? I.g(d) : I.call(null, d);
    return d;
  }(), g = dw("#comportex-controls");
  Uv(g, I.g ? I.g(f) : I.call(null, f));
  uk(f, Lp, function(a, b) {
    return function() {
      return Uv(b, I.g ? I.g(a) : I.call(null, a));
    };
  }(f, g));
  yz("#sim-start", Fq, function() {
    return Tg.h ? Tg.h(b, !0) : Tg.call(null, b, !0);
  });
  yz("#sim-stop", Fq, function() {
    return Tg.h ? Tg.h(b, !1) : Tg.call(null, b, !1);
  });
  yz("#sim-step", Fq, function() {
    return d.w ? d.w() : d.call(null);
  });
  yz("#sim-faster", Fq, function() {
    return Vg.v(c, Gh, new U(null, 1, 5, V, [Rp], null), function(a) {
      a -= 100;
      return 0 < a ? a : 0;
    });
  });
  yz("#sim-slower", Fq, function() {
    return Vg.v(c, Gh, new U(null, 1, 5, V, [Rp], null), function(a) {
      return a + 100;
    });
  });
  yz("#sim-reset", Fq, function() {
    var b = dw("#sim-reset-status");
    Vg.h(a, LA);
    return fw.h(b, "reset complete.");
  });
  yz("#anim-start", Fq, function() {
    return Vg.v(c, Q, Um, !0);
  });
  yz("#anim-stop", Fq, function() {
    return Vg.v(c, Q, Um, !1);
  });
  yz("#anim-step", Fq, function() {
    return e.w ? e.w() : e.call(null);
  });
  yz("#anim-faster", Fq, function() {
    return Vg.v(c, Gh, new U(null, 1, 5, V, [Jq], null), function(a) {
      a -= 1;
      return 1 < a ? a : 1;
    });
  });
  yz("#anim-slower", Fq, function() {
    return Vg.v(c, Gh, new U(null, 1, 5, V, [Jq], null), function(a) {
      return a + 1;
    });
  });
}
function hS() {
  var a = function() {
    var a = new lw(null, !0, function() {
      var a = V, b;
      b = I.g ? I.g(xH) : I.call(null, xH);
      b = new U(null, 6, 5, V, [Bn, new U(null, 2, 5, V, [xn, "Visualisation"], null), new U(null, 5, 5, V, [dl, new U(null, 2, 5, V, [xn, "Input"], null), $R(b, new U(null, 2, 5, V, [mt, ir], null), "Active bits"), new U(null, 1, 5, V, [Us], null), $R(b, new U(null, 2, 5, V, [mt, ft], null), "Predicted bits")], null), new U(null, 13, 5, V, [dl, new U(null, 2, 5, V, [xn, "Columns"], null), $R(b, new U(null, 2, 5, V, [Om, lr], null), "Overlap scores"), new U(null, 1, 5, V, [Us], null), $R(b, new U(null, 
      2, 5, V, [Om, rl], null), "Num segments"), new U(null, 1, 5, V, [Us], null), $R(b, new U(null, 2, 5, V, [Om, ir], null), "Active columns"), new U(null, 1, 5, V, [Us], null), $R(b, new U(null, 2, 5, V, [Om, Cn], null), "Predictive columns"), new U(null, 1, 5, V, [Us], null), $R(b, new U(null, 2, 5, V, [Om, Vl], null), "TP columns"), new U(null, 1, 5, V, [Us], null), $R(b, new U(null, 2, 5, V, [Om, Ll], null), "Alternative")], null), new U(null, 9, 5, V, [dl, new U(null, 2, 5, V, [xn, "Feed-forward synapses"], 
      null), $R(b, new U(null, 2, 5, V, [il, ir], null), "Active ff-synapses"), new U(null, 1, 5, V, [Us], null), $R(b, new U(null, 2, 5, V, [il, Wk], null), "Inactive ff-synapses"), new U(null, 1, 5, V, [Us], null), $R(b, new U(null, 2, 5, V, [il, im], null), "Disconnected ff-synapses"), new U(null, 1, 5, V, [Us], null), $R(b, new U(null, 2, 5, V, [il, Vt], null), "Permanences")], null), new U(null, 11, 5, V, [dl, new U(null, 2, 5, V, [xn, "Lateral dendrite segments"], null), aS(b), new U(null, 
      1, 5, V, [Us], null), $R(b, new U(null, 2, 5, V, [tm, ir], null), "Active synapses"), new U(null, 1, 5, V, [Us], null), $R(b, new U(null, 2, 5, V, [tm, Wk], null), "Inactive synapses"), new U(null, 1, 5, V, [Us], null), $R(b, new U(null, 2, 5, V, [tm, im], null), "Disconnected synapses"), new U(null, 1, 5, V, [Us], null), $R(b, new U(null, 2, 5, V, [tm, Vt], null), "Permanences")], null)], null);
      return new U(null, 2, 5, a, [Zq, b], null);
    }, wk.g("computed-observable"), Gi, Gi);
    I.g ? I.g(a) : I.call(null, a);
    return a;
  }(), b = dw("#comportex-drawing");
  Uv(b, I.g ? I.g(a) : I.call(null, a));
  uk(a, Lp, function(a, b) {
    return function() {
      return Uv(b, I.g ? I.g(a) : I.call(null, a));
    };
  }(a, b));
  for (var a = A(I.g ? I.g(xH) : I.call(null, xH)), b = null, c = 0, d = 0;;) {
    if (d < c) {
      for (var e = b.H(null, d), f = O.j(e, 0, null), g = O.j(e, 1, null), h = A(g), l = null, p = 0, s = 0;;) {
        if (s < p) {
          var t = l.H(null, s), v = O.j(t, 0, null), B = O.j(t, 1, null), y = ZR(new U(null, 2, 5, V, [f, v], null)), D = dw("#" + u.g(y));
          q(D) && yz(D, vt, function(a, b, c, d, e, f, g, h, l, p, s, t, v, y, B) {
            return function() {
              var a;
              a = gw.g(p);
              a = q(a) ? Sf.g(a) : null;
              return Vg.v(xH, Fh, new U(null, 2, 5, V, [B, t], null), a);
            };
          }(h, l, p, s, a, b, c, d, y, D, t, v, B, e, f, g));
          s += 1;
        } else {
          if (v = A(h)) {
            t = v;
            if (T(t)) {
              h = x(t), s = z(t), l = h, p = J(h), h = s;
            } else {
              var B = C(t), y = O.j(B, 0, null), D = O.j(B, 1, null), H = ZR(new U(null, 2, 5, V, [f, y], null)), K = dw("#" + u.g(H));
              q(K) && yz(K, vt, function(a, b, c, d, e, f, g, h, l, p, s, t, v, y, B, D, H) {
                return function() {
                  var a;
                  a = gw.g(p);
                  a = q(a) ? Sf.g(a) : null;
                  return Vg.v(xH, Fh, new U(null, 2, 5, V, [H, t], null), a);
                };
              }(h, l, p, s, a, b, c, d, H, K, B, y, D, t, v, e, f, g));
              h = F(t);
              l = null;
              p = 0;
            }
            s = 0;
          } else {
            break;
          }
        }
      }
      d += 1;
    } else {
      if (h = A(a)) {
        e = h;
        if (T(e)) {
          a = x(e), d = z(e), b = a, c = J(a), a = d;
        } else {
          l = C(e);
          f = O.j(l, 0, null);
          g = O.j(l, 1, null);
          p = A(g);
          s = null;
          for (v = t = 0;;) {
            if (v < t) {
              B = s.H(null, v), y = O.j(B, 0, null), D = O.j(B, 1, null), H = ZR(new U(null, 2, 5, V, [f, y], null)), K = dw("#" + u.g(H)), q(K) && yz(K, vt, function(a, b, c, d, e, f, g, h, l, p, s, t, v, y, B) {
                return function() {
                  var a;
                  a = gw.g(p);
                  a = q(a) ? Sf.g(a) : null;
                  return Vg.v(xH, Fh, new U(null, 2, 5, V, [B, t], null), a);
                };
              }(p, s, t, v, a, b, c, d, H, K, B, y, D, l, f, g, e, h)), v += 1;
            } else {
              if (y = A(p)) {
                B = y;
                if (T(B)) {
                  p = x(B), v = z(B), s = p, t = J(p), p = v;
                } else {
                  var D = C(B), H = O.j(D, 0, null), K = O.j(D, 1, null), M = ZR(new U(null, 2, 5, V, [f, H], null)), L = dw("#" + u.g(M));
                  q(L) && yz(L, vt, function(a, b, c, d, e, f, g, h, l, p, s, t, v, y, B, D, H) {
                    return function() {
                      var a;
                      a = gw.g(p);
                      a = q(a) ? Sf.g(a) : null;
                      return Vg.v(xH, Fh, new U(null, 2, 5, V, [H, t], null), a);
                    };
                  }(p, s, t, v, a, b, c, d, M, L, D, H, K, B, y, l, f, g, e, h));
                  p = F(B);
                  s = null;
                  t = 0;
                }
                v = 0;
              } else {
                break;
              }
            }
          }
          a = F(e);
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
function iS() {
  var a = dS, b = aI, c = function() {
    var c = new lw(null, !0, function() {
      var c = mq.g(I.g ? I.g(b) : I.call(null, b));
      return new U(null, 2, 5, V, [Bs, function() {
        var b = mC(I.g ? I.g(a) : I.call(null, a));
        return function(a, b) {
          return function H(c) {
            return new Tf(null, function(a, b) {
              return function() {
                for (;;) {
                  var d = A(c);
                  if (d) {
                    if (T(d)) {
                      var e = x(d), f = J(e), g = Xf(f);
                      a: {
                        for (var h = 0;;) {
                          if (h < f) {
                            var l = w.h(e, h), p = O.h(a, l), p = Vz(p), l = new U(null, 3, 5, V, [rq, new n(null, 1, [nq, new n(null, 1, [Ms, Eg.h(l, b) ? "none" : null], null)], null), new U(null, 4, 5, V, [ct, new n(null, 1, [nr, "region-spec-form-" + u.g(l)], null), new U(null, 4, 5, V, [bu, "Region " + u.g(l), new U(null, 1, 5, V, [Us], null), new U(null, 2, 5, V, [Np, "(click on a region to select it)"], null)], null), new U(null, 4, 5, V, [ll, new U(null, 2, 5, V, [xn, "Parameters"], null), 
                            kh.h(Mg.h(bS, l), df.g(p)), new U(null, 3, 5, V, [un, new U(null, 2, 5, V, [mt, new n(null, 2, [Gn, "submit", Zm, "Set!"], null)], null), " (will be set immediately, but then use Reset above for any parameters that apply only in initialisation)"], null)], null)], null)], null);
                            g.add(l);
                            h += 1;
                          } else {
                            e = !0;
                            break a;
                          }
                        }
                        e = void 0;
                      }
                      return e ? $f(rg(g), H(z(d))) : $f(rg(g), null);
                    }
                    g = C(d);
                    e = O.h(a, g);
                    e = Vz(e);
                    return ee(new U(null, 3, 5, V, [rq, new n(null, 1, [nq, new n(null, 1, [Ms, Eg.h(g, b) ? "none" : null], null)], null), new U(null, 4, 5, V, [ct, new n(null, 1, [nr, "region-spec-form-" + u.g(g)], null), new U(null, 4, 5, V, [bu, "Region " + u.g(g), new U(null, 1, 5, V, [Us], null), new U(null, 2, 5, V, [Np, "(click on a region to select it)"], null)], null), new U(null, 4, 5, V, [ll, new U(null, 2, 5, V, [xn, "Parameters"], null), kh.h(Mg.h(bS, g), df.g(e)), new U(null, 3, 5, 
                    V, [un, new U(null, 2, 5, V, [mt, new n(null, 2, [Gn, "submit", Zm, "Set!"], null)], null), " (will be set immediately, but then use Reset above for any parameters that apply only in initialisation)"], null)], null)], null)], null), H(E(d)));
                  }
                  return null;
                }
              };
            }(a, b), null, null);
          };
        }(b, c)(bk.g(J(b)));
      }()], null);
    }, wk.g("computed-observable"), Gi, Gi);
    I.g ? I.g(c) : I.call(null, c);
    return c;
  }(), d = dw("#comportex-parameters");
  Uv(d, I.g ? I.g(c) : I.call(null, c));
  uk(c, Lp, function(a, b) {
    return function() {
      return Uv(b, I.g ? I.g(a) : I.call(null, a));
    };
  }(c, d));
  for (var c = A(bk.g(J(mC(I.g ? I.g(a) : I.call(null, a))))), d = null, e = 0, f = 0;;) {
    if (f < e) {
      var g = d.H(null, f), h = dw("#region-spec-form-" + u.g(g));
      yz(h, vn, function(b, c, d, e, f, g) {
        return function(h) {
          var l = O.h(mC(I.g ? I.g(a) : I.call(null, a)), g), p = Vz(l), L = Nb.j(function(a, b, c, d, e, f, g, h) {
            return function(a, b) {
              var c = ZR(new U(null, 2, 5, V, [h, b], null)), c = dw("#" + u.g(c)), c = Oy(gw.g(c));
              return Q.j(a, b, c);
            };
          }(b, c, d, e, l, p, f, g), Gi, Di(p));
          Vg.v(a, pC, qt.g(l), function(a, b, c, d, e, f, g) {
            return function(a) {
              return Fh(Fh(a, new U(null, 2, 5, V, [eu, zq], null), g), new U(null, 2, 5, V, [St, zq], null), g);
            };
          }(b, c, d, e, l, p, L, f, g));
          h.preventDefault();
          return!1;
        };
      }(c, d, e, f, h, g));
      f += 1;
    } else {
      var l = A(c);
      if (l) {
        h = l;
        if (T(h)) {
          c = x(h), f = z(h), d = c, e = J(c), c = f;
        } else {
          var g = C(h), p = dw("#region-spec-form-" + u.g(g));
          yz(p, vn, function(b, c, d, e, f, g, h, l) {
            return function(p) {
              var L = O.h(mC(I.g ? I.g(a) : I.call(null, a)), g), R = Vz(L), $ = Nb.j(function(a, b, c, d, e, f, g, h) {
                return function(a, b) {
                  var c = ZR(new U(null, 2, 5, V, [h, b], null)), c = dw("#" + u.g(c)), c = Oy(gw.g(c));
                  return Q.j(a, b, c);
                };
              }(b, c, d, e, L, R, f, g, h, l), Gi, Di(R));
              Vg.v(a, pC, qt.g(L), function(a, b, c, d, e, f, g) {
                return function(a) {
                  return Fh(Fh(a, new U(null, 2, 5, V, [eu, zq], null), g), new U(null, 2, 5, V, [St, zq], null), g);
                };
              }(b, c, d, e, L, R, $, f, g, h, l));
              p.preventDefault();
              return!1;
            };
          }(c, d, e, f, p, g, h, l));
          c = F(h);
          d = null;
          e = 0;
        }
        f = 0;
      } else {
        return null;
      }
    }
  }
}
;vb = !1;
ub = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = G(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    return console.log.apply(console, Ob.g ? Ob.g(a) : Ob.call(null, a));
  }
  a.D = 0;
  a.q = function(a) {
    a = A(a);
    return b(a);
  };
  a.k = b;
  return a;
}();
function gI() {
  var a = jS, b = xG.w();
  FG.h(a, b);
  return b;
}
var dS = Sg.g ? Sg.g(null) : Sg.call(null, null), aI, kS = new n(null, 3, [mq, 0, Wm, 0, jr, null], null);
aI = Sg.g ? Sg.g(kS) : Sg.call(null, kS);
var lS = xG.w(), jS = function mS(b) {
  var c = function() {
    var b = Gi;
    return Sg.g ? Sg.g(b) : Sg.call(null, b);
  }(), d = function() {
    "undefined" === typeof vC && (vC = function(b, c, d, e) {
      this.Bf = b;
      this.ch = c;
      this.Ei = d;
      this.si = e;
      this.K = 0;
      this.B = 393216;
    }, vC.wb = !0, vC.vb = "cljs.core.async/t32292", vC.Bb = function() {
      return function(b, c) {
        return Wc(c, "cljs.core.async/t32292");
      };
    }(c), vC.prototype.zg = function() {
      return function(b, c, d) {
        Vg.v(this.Bf, Q, c, d);
        return null;
      };
    }(c), vC.prototype.Ag = function() {
      return function(b, c) {
        Vg.j(this.Bf, we, c);
        return null;
      };
    }(c), vC.prototype.L = function() {
      return function() {
        return this.si;
      };
    }(c), vC.prototype.M = function() {
      return function(b, c) {
        return new vC(this.Bf, this.ch, this.Ei, c);
      };
    }(c));
    return new vC(c, b, mS, null);
  }(), e = xG.g(1), f = Sg.g ? Sg.g(null) : Sg.call(null, null), g = function(b, c, d, e) {
    return function() {
      return 0 === Vg.h(e, mf) ? AG.h(d, !0) : null;
    };
  }(c, d, e, f), h = xG.g(1);
  WF(function(c, d, e, f, g, h) {
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
                      if (!X(f, Z)) {
                        e = f;
                        break a;
                      }
                    }
                  } catch (g) {
                    if (g instanceof Object) {
                      d[5] = g;
                      mG(d);
                      e = Z;
                      break a;
                    }
                    throw g;
                  }
                  e = void 0;
                }
                if (!X(e, Z)) {
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
            e.w = d;
            e.g = c;
            return e;
          }();
        }(function(c, d, e, f, g, h) {
          return function(c) {
            var l = c[1];
            if (7 === l) {
              var p = c, s = p;
              s[2] = c[2];
              s[1] = 3;
              return Z;
            }
            if (20 === l) {
              var t = c[7], v = C(t), y = O.j(v, 0, null), B = O.j(v, 1, null);
              c[8] = y;
              p = c;
              p[1] = q(B) ? 22 : 23;
              return Z;
            }
            if (27 === l) {
              var D = c[9], H = c[10], ra = c[11], Ea = c[12], fb = w.h(D, ra), xa = AG.j(fb, H, h);
              c[12] = fb;
              p = c;
              p[1] = q(xa) ? 30 : 31;
              return Z;
            }
            if (1 === l) {
              var ib = p = c;
              ib[2] = null;
              ib[1] = 2;
              return Z;
            }
            if (24 === l) {
              var t = c[7], Eb = c[2], jb = F(t), yb = null, Ab = 0, va = 0;
              c[13] = jb;
              c[14] = Ab;
              c[15] = yb;
              c[16] = Eb;
              c[17] = va;
              var Qd = p = c;
              Qd[2] = null;
              Qd[1] = 8;
              return Z;
            }
            if (39 === l) {
              var md = p = c;
              md[2] = null;
              md[1] = 41;
              return Z;
            }
            if (4 === l) {
              var H = c[10], Vc = c[2], Dj = null == Vc;
              c[10] = Vc;
              p = c;
              p[1] = q(Dj) ? 5 : 6;
              return Z;
            }
            if (15 === l) {
              var jb = c[13], Ab = c[14], yb = c[15], va = c[17], qf = c[2], qa = yb, bi = Ab, Xg = va + 1;
              c[13] = jb;
              c[14] = bi;
              c[15] = qa;
              c[18] = qf;
              c[17] = Xg;
              var ke = p = c;
              ke[2] = null;
              ke[1] = 8;
              return Z;
            }
            if (21 === l) {
              var Me = c[2], Ne = p = c;
              Ne[2] = Me;
              Ne[1] = 18;
              return Z;
            }
            if (31 === l) {
              var Ea = c[12], hd = Vg.h(g, mf), Sb = e.Ag(null, Ea);
              c[19] = hd;
              var La = p = c;
              La[2] = Sb;
              La[1] = 32;
              return Z;
            }
            if (32 === l) {
              var D = c[9], $a = c[20], vc = c[21], ra = c[11], Oe = c[2], le = vc, Yg = $a, id = ra + 1;
              c[9] = D;
              c[20] = Yg;
              c[21] = le;
              c[22] = Oe;
              c[11] = id;
              var ci = p = c;
              ci[2] = null;
              ci[1] = 25;
              return Z;
            }
            if (40 === l) {
              var rf = c[23], mc = Vg.h(g, mf), Ec = e.Ag(null, rf);
              c[24] = mc;
              var ud = p = c;
              ud[2] = Ec;
              ud[1] = 41;
              return Z;
            }
            if (33 === l) {
              var Kd = c[25], bg = T(Kd), p = c;
              p[1] = bg ? 36 : 37;
              return Z;
            }
            if (13 === l) {
              var Pe = c[26], Xd = yC(Pe), Yd = p = c;
              Yd[2] = Xd;
              Yd[1] = 15;
              return Z;
            }
            if (22 === l) {
              var y = c[8], me = yC(y), jd = p = c;
              jd[2] = me;
              jd[1] = 24;
              return Z;
            }
            if (36 === l) {
              var Kd = c[25], qb = x(Kd), Fc = z(Kd), Qe = J(qb), vc = Fc, D = qb, $a = Qe, ra = 0;
              c[9] = D;
              c[20] = $a;
              c[21] = vc;
              c[11] = ra;
              var Re = p = c;
              Re[2] = null;
              Re[1] = 25;
              return Z;
            }
            if (41 === l) {
              var Kd = c[25], cg = c[2], vc = F(Kd), D = null, ra = $a = 0;
              c[9] = D;
              c[20] = $a;
              c[21] = vc;
              c[11] = ra;
              c[27] = cg;
              var Se = p = c;
              Se[2] = null;
              Se[1] = 25;
              return Z;
            }
            if (43 === l) {
              var ha = p = c;
              ha[2] = null;
              ha[1] = 44;
              return Z;
            }
            if (29 === l) {
              var Te = c[2], ne = p = c;
              ne[2] = Te;
              ne[1] = 26;
              return Z;
            }
            if (44 === l) {
              c[28] = c[2];
              var Ue = p = c;
              Ue[2] = null;
              Ue[1] = 2;
              return Z;
            }
            if (6 === l) {
              var Tc = c[29], Uc = I.g ? I.g(d) : I.call(null, d), nc = Di(Uc), Tb = J(nc), oe = Tg.h ? Tg.h(g, Tb) : Tg.call(null, g, Tb), vc = A(nc), D = null, ra = $a = 0;
              c[9] = D;
              c[20] = $a;
              c[21] = vc;
              c[29] = nc;
              c[11] = ra;
              c[30] = oe;
              var di = p = c;
              di[2] = null;
              di[1] = 25;
              return Z;
            }
            if (28 === l) {
              var vc = c[21], Kd = c[25], sf = A(vc);
              c[25] = sf;
              p = c;
              p[1] = sf ? 33 : 34;
              return Z;
            }
            if (25 === l) {
              var $a = c[20], ra = c[11], vd = ra < $a, p = c;
              p[1] = q(vd) ? 27 : 28;
              return Z;
            }
            if (34 === l) {
              var tf = p = c;
              tf[2] = null;
              tf[1] = 35;
              return Z;
            }
            if (17 === l) {
              var Zg = p = c;
              Zg[2] = null;
              Zg[1] = 18;
              return Z;
            }
            if (3 === l) {
              var ei = c[2], p = c;
              return kG(p, ei);
            }
            if (12 === l) {
              var uf = c[2], vf = p = c;
              vf[2] = uf;
              vf[1] = 9;
              return Z;
            }
            if (2 === l) {
              return p = c, iG(p, 4, b);
            }
            if (23 === l) {
              var gc = p = c;
              gc[2] = null;
              gc[1] = 24;
              return Z;
            }
            if (35 === l) {
              var Wa = c[2], Zd = p = c;
              Zd[2] = Wa;
              Zd[1] = 29;
              return Z;
            }
            if (19 === l) {
              var t = c[7], oc = x(t), Gc = z(t), $d = J(oc), jb = Gc, yb = oc, Ab = $d, va = 0;
              c[13] = jb;
              c[14] = Ab;
              c[15] = yb;
              c[17] = va;
              var dg = p = c;
              dg[2] = null;
              dg[1] = 8;
              return Z;
            }
            if (11 === l) {
              var jb = c[13], t = c[7], Ve = A(jb);
              c[7] = Ve;
              p = c;
              p[1] = Ve ? 16 : 17;
              return Z;
            }
            if (9 === l) {
              var Jk = c[2], fi = p = c;
              fi[2] = Jk;
              fi[1] = 7;
              return Z;
            }
            if (5 === l) {
              var wd = I.g ? I.g(d) : I.call(null, d), jb = A(wd), yb = null, va = Ab = 0;
              c[13] = jb;
              c[14] = Ab;
              c[15] = yb;
              c[17] = va;
              var We = p = c;
              We[2] = null;
              We[1] = 8;
              return Z;
            }
            if (14 === l) {
              var $g = p = c;
              $g[2] = null;
              $g[1] = 15;
              return Z;
            }
            if (45 === l) {
              var ah = c[2], wc = p = c;
              wc[2] = ah;
              wc[1] = 44;
              return Z;
            }
            if (26 === l) {
              var Tc = c[29], eg = c[2], ae = A(Tc);
              c[31] = eg;
              p = c;
              p[1] = ae ? 42 : 43;
              return Z;
            }
            if (16 === l) {
              var t = c[7], wf = T(t), p = c;
              p[1] = wf ? 19 : 20;
              return Z;
            }
            if (38 === l) {
              var gi = c[2], xf = p = c;
              xf[2] = gi;
              xf[1] = 35;
              return Z;
            }
            if (30 === l) {
              var pe = p = c;
              pe[2] = null;
              pe[1] = 32;
              return Z;
            }
            if (10 === l) {
              var yb = c[15], va = c[17], Ld = w.h(yb, va), Pe = O.j(Ld, 0, null), fg = O.j(Ld, 1, null);
              c[26] = Pe;
              p = c;
              p[1] = q(fg) ? 13 : 14;
              return Z;
            }
            if (18 === l) {
              var gg = c[2], qe = p = c;
              qe[2] = gg;
              qe[1] = 12;
              return Z;
            }
            if (42 === l) {
              return p = c, iG(p, 45, f);
            }
            if (37 === l) {
              var H = c[10], Kd = c[25], rf = c[23], kd = C(Kd), bh = AG.j(kd, H, h);
              c[23] = kd;
              p = c;
              p[1] = q(bh) ? 39 : 40;
              return Z;
            }
            if (8 === l) {
              var Ab = c[14], va = c[17], ch = va < Ab, p = c;
              p[1] = q(ch) ? 10 : 11;
              return Z;
            }
            return null;
          };
        }(c, d, e, f, g, h), c, d, e, f, g, h);
      }(), D = function() {
        var b = y.w ? y.w() : y.call(null);
        b[6] = c;
        return b;
      }();
      return hG(D);
    };
  }(h, c, d, e, f, g));
  return d;
}(lS), eS = Sg.g ? Sg.g(!1) : Sg.call(null, !1), fS, nS = new n(null, 3, [Rp, 200, Um, !0, Jq, 1], null);
fS = Sg.g ? Sg.g(nS) : Sg.call(null, nS);
function hI() {
  return AG.h(lS, Vg.h(dS, JA));
}
function oS() {
  Vg.v(dS, Q, tq, new n(null, 2, [cn, (new Date).getTime(), kn, KA(I.g ? I.g(dS) : I.call(null, dS))], null));
  var a = xG.g(1);
  WF(function(a) {
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
                      if (!X(f, Z)) {
                        d = f;
                        break a;
                      }
                    }
                  } catch (g) {
                    if (g instanceof Object) {
                      c[5] = g;
                      mG(c);
                      d = Z;
                      break a;
                    }
                    throw g;
                  }
                  d = void 0;
                }
                if (!X(d, Z)) {
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
            d.w = c;
            d.g = b;
            return d;
          }();
        }(function() {
          return function(a) {
            var b = a[1];
            if (7 === b) {
              return a[7] = a[2], a[2] = null, a[1] = 2, Z;
            }
            if (6 === b) {
              return b = a[2], a[2] = b, a[1] = 3, Z;
            }
            if (5 === b) {
              return a[2] = null, a[1] = 6, Z;
            }
            if (4 === b) {
              var b = I.g ? I.g(fS) : I.call(null, fS), b = Rp.g(b), b = uG(b), c = hI();
              a[8] = c;
              return iG(a, 7, b);
            }
            return 3 === b ? (b = a[2], kG(a, b)) : 2 === b ? (b = I.g ? I.g(eS) : I.call(null, eS), a[1] = q(b) ? 4 : 5, Z) : 1 === b ? (a[2] = null, a[1] = 2, Z) : null;
          };
        }(a), a);
      }(), d = function() {
        var d = c.w ? c.w() : c.call(null);
        d[6] = a;
        return d;
      }();
      return hG(d);
    };
  }(a));
  return a;
}
$c(eS, Cl, function(a, b, c, d) {
  return q(d) ? oS() : null;
});
function pS(a) {
  var b = dw("#comportex-plots"), c = mC(a);
  a = function() {
    var a = new lw(null, !0, function(a) {
      return function() {
        return new U(null, 2, 5, V, [rq, function() {
          return function(a) {
            return function H(b) {
              return new Tf(null, function() {
                return function() {
                  for (;;) {
                    var a = A(b);
                    if (a) {
                      if (T(a)) {
                        var c = x(a), d = J(c), e = Xf(d);
                        a: {
                          for (var f = 0;;) {
                            if (f < d) {
                              var g = w.h(c, f), h = "comportex-plot-" + u.g(g), g = new U(null, 3, 5, V, [dl, new U(null, 2, 5, V, [xn, "Region " + u.g(g)], null), new U(null, 2, 5, V, [rq, new n(null, 1, [nr, h], null)], null)], null);
                              e.add(g);
                              f += 1;
                            } else {
                              c = !0;
                              break a;
                            }
                          }
                          c = void 0;
                        }
                        return c ? $f(rg(e), H(z(a))) : $f(rg(e), null);
                      }
                      e = C(a);
                      c = "comportex-plot-" + u.g(e);
                      return ee(new U(null, 3, 5, V, [dl, new U(null, 2, 5, V, [xn, "Region " + u.g(e)], null), new U(null, 2, 5, V, [rq, new n(null, 1, [nr, c], null)], null)], null), H(E(a)));
                    }
                    return null;
                  }
                };
              }(a), null, null);
            };
          }(a)(bk.g(J(a)));
        }()], null);
      };
    }(c), wk.g("computed-observable"), Gi, Gi);
    I.g ? I.g(a) : I.call(null, a);
    return a;
  }();
  b = dw(b);
  Uv(b, I.g ? I.g(a) : I.call(null, a));
  uk(a, Lp, function(a, b) {
    return function() {
      return Uv(b, I.g ? I.g(a) : I.call(null, a));
    };
  }(a, b, c));
  b = A(bk.g(J(c)));
  a = null;
  for (var d = 0, e = 0;;) {
    if (e < d) {
      var f = a.H(null, e), g = "comportex-plot-" + u.g(f), h = dw("#" + u.g(g)), l = CG(Lg.j(qC, function(a, b, c, d, e, f, g) {
        return function(a) {
          return O.h(a, g);
        };
      }(b, a, d, e, h, g, f, c), mC), gI()), p = WR(l);
      uk(p, Dr, function(a, b, c, d, e) {
        return function(a, b, c, d) {
          return XR(e, d);
        };
      }(b, a, d, e, h, l, p, g, f, c));
      e += 1;
    } else {
      if (h = A(b)) {
        g = h;
        if (T(g)) {
          b = x(g), e = z(g), a = b, d = J(b), b = e;
        } else {
          var f = C(g), l = "comportex-plot-" + u.g(f), p = dw("#" + u.g(l)), s = CG(Lg.j(qC, function(a, b, c, d, e, f, g) {
            return function(a) {
              return O.h(a, g);
            };
          }(b, a, d, e, p, l, f, g, h, c), mC), gI()), t = WR(s);
          uk(t, Dr, function(a, b, c, d, e) {
            return function(a, b, c, d) {
              return XR(e, d);
            };
          }(b, a, d, e, p, s, t, l, f, g, h, c));
          b = F(g);
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
function gS() {
  function a() {
    return $H();
  }
  return hw.g ? hw.g(a) : hw.call(null, a);
}
$c(xH, Js, function() {
  return gS();
});
$c(aI, Js, function() {
  return gS();
});
var qS = xG.g(1);
WF(function(a) {
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
                    if (!X(f, Z)) {
                      e = f;
                      break a;
                    }
                  }
                } catch (g) {
                  if (g instanceof Object) {
                    c[5] = g;
                    mG(c);
                    e = Z;
                    break a;
                  }
                  throw g;
                }
                e = void 0;
              }
              if (!X(e, Z)) {
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
          g.w = c;
          g.g = b;
          return g;
        }();
      }(function() {
        return function(a) {
          var b = a[1];
          if (7 === b) {
            return b = a, b[2] = a[2], b[1] = 3, Z;
          }
          if (1 === b) {
            return b = gI(), a[7] = b, a[2] = null, a[1] = 2, Z;
          }
          if (4 === b) {
            return b = a[8], b = a[2], a[8] = b, a[1] = q(b) ? 5 : 6, Z;
          }
          if (13 === b) {
            var b = a[7], c = a[2];
            a[7] = b;
            a[9] = c;
            a[2] = null;
            a[1] = 2;
            return Z;
          }
          if (6 === b) {
            return a[2] = null, a[1] = 7, Z;
          }
          if (3 === b) {
            return b = a[2], kG(a, b);
          }
          if (12 === b) {
            return a[2] = null, a[1] = 13, Z;
          }
          if (2 === b) {
            return b = a[7], iG(a, 4, b);
          }
          if (11 === b) {
            return b = gS(), a[2] = b, a[1] = 13, Z;
          }
          if (9 === b) {
            return b = a[10], a[2] = b, a[1] = 10, Z;
          }
          if (5 === b) {
            var b = a[8], b = KA(b), c = I.g ? I.g(fS) : I.call(null, fS), c = Jq.g(c), g = I.g ? I.g(fS) : I.call(null, fS), g = Um.g(g);
            a[11] = b;
            a[12] = c;
            a[10] = g;
            a[1] = q(g) ? 8 : 9;
            return Z;
          }
          return 10 === b ? (b = a[2], a[1] = q(b) ? 11 : 12, Z) : 8 === b ? (b = a[11], c = a[12], a[2] = 0 === (b % c + c) % c, a[1] = 10, Z) : null;
        };
      }(a), a);
    }(), c = function() {
      var c = b.w ? b.w() : b.call(null);
      c[6] = a;
      return c;
    }();
    return hG(c);
  };
}(qS));
function rS(a) {
  var b = null == (I.g ? I.g(dS) : I.call(null, dS));
  AG.h(lS, Tg.h ? Tg.h(dS, a) : Tg.call(null, dS, a));
  b ? (new sR(dw("#comportex-tabs")), pS(a), fI(a), cS(), hS(), a = iS()) : a = null;
  return a;
}
Aa("comportexviz.main.set_model", rS);
var sS = ve([hl, ul, Pl, bm, hm, Nm, Rm, $m, qn, Ep, Ip, Mp, Kq, Mq, Rq, Uq, kr, Er, Es, Ts, Vs, Rt, wu, xu], [.2, !1, 12, 5, .01, .2, 6, 9, new U(null, 2, 5, V, [40, 40], null), .3, .05, 18, 2, .15, .25, .05, .03, !1, .005, 8, 2, 1E5, .16, 3]);
function tS(a) {
  return Bh.h(function(a) {
    return te.h(a, ".");
  }, Bh.h(function(a) {
    return cw.h(a, /[^\w']+/);
  }, cw.h(Ha(a), /[^\w]*[\.\!\?]+[^\w]*/)));
}
function uS(a, b) {
  return function(c) {
    var d = O.j(c, 0, null), e = O.j(c, 1, null);
    c = O.j(c, 2, null);
    var f = P.h(a, d), g = J(a);
    return e === J(f) - 1 ? c === b - 1 ? new U(null, 3, 5, V, [((d + 1) % g + g) % g, 0, 0], null) : new U(null, 3, 5, V, [d, 0, c + 1], null) : new U(null, 3, 5, V, [d, e + 1, c], null);
  };
}
function vS(a, b, c) {
  b = tS(b);
  var d = Wj(S.h(wg, b));
  a = vI(function(a) {
    return function(b) {
      var c = O.j(b, 0, null), d = O.j(b, 1, null);
      O.j(b, 2, null);
      return Dh.h(a, new U(null, 2, 5, V, [c, d], null));
    };
  }(b, d), rR(a, 2, d));
  return eC(new U(null, 3, 5, V, [0, 0, 0], null), uS(b, c), a);
}
function wS(a, b, c) {
  a = vS(a, b, c);
  b = tS(b);
  return Q.j(a, Gt, kJ(b));
}
Aa("comportexviz.demos.cortical_io_demo.input_gen", wS);
function xS(a, b, c, d) {
  return kC(cC, wS(a, b, c), d, sS);
}
Aa("comportexviz.demos.cortical_io_demo.n_region_model", xS);
function yS() {
  var a = gw.g(dw("#comportex-api-key")), b = Oy(gw.g(dw("#comportex-input-repeats"))), c = gw.g(dw("#comportex-input-text")), a = xS(a, c, b, 1);
  return rS.g ? rS.g(a) : rS.call(null, a);
}
Aa("comportexviz.demos.cortical_io_demo.restart_from_ui", yS);
Aa("comportexviz.demos.cortical_io_demo.handle_user_input_form", function() {
  var a = dw("#comportex-input-text-form");
  return yz(a, vn, function() {
    return function(a) {
      yS();
      a.preventDefault();
      return!1;
    };
  }(a));
});
Aa("comportexviz.demos.mixed_gaps_1d.n_region_model", function(a) {
  return XI.g(a);
});
function zS(a, b) {
  return function(c) {
    var d = O.j(c, 0, null), e = O.j(c, 1, null);
    c = O.j(c, 2, null);
    var f = P.h(a, d), g = J(a);
    return e === J(f) ? c === b - 1 ? new U(null, 3, 5, V, [((d + 1) % g + g) % g, 0, 0], null) : new U(null, 3, 5, V, [d, 0, c + 1], null) : new U(null, 3, 5, V, [d, e + 1, c], null);
  };
}
function AS(a) {
  return Bh.h(function(a) {
    return $h(wg.k(new U(null, 1, 5, V, ["\x3e"], null), a, G([new U(null, 1, 5, V, ["."], null)], 0)));
  }, Bh.h(function(a) {
    return cw.h(a, /[^\w']+/);
  }, cw.h(Ha(a), /[^\w]*\.+[^\w]*/)));
}
function BS(a, b) {
  var c = AS(a), d = Wj(S.h(wg, c)), e = 35 * J(d), d = vI(function(a) {
    return function(b) {
      var c = O.j(b, 0, null), d = O.j(b, 1, null);
      O.j(b, 2, null);
      return Dh.h(a, new U(null, 2, 5, V, [c, d], null));
    };
  }(c, d, e), CI(e, d));
  return eC(new U(null, 3, 5, V, [0, -1, 0], null), zS(c, b), d);
}
var CS = ve([hl, ul, Pl, bm, hm, Nm, Rm, $m, qn, Ep, Ip, Mp, Kq, Mq, Uq, kr, Er, Es, Ts, Rt, wu, xu], [.2, !1, 12, 5, .01, .2, 7, 9, new U(null, 1, 5, V, [1E3], null), .3, .05, 18, 2, 1, .05, .03, !1, .005, 8, 1E5, .16, 3]);
Aa("org.nfrac.comportex.demos.simple_sentences.n_region_model", function() {
  function a(a, b, c, g) {
    a = BS(a, b);
    return kC(cC, a, c, g);
  }
  function b(a) {
    return c.v("Jane.\nChifung.\n\nJane has eyes.\nJane has a head.\nJane has a mouth.\nJane has a brain.\nJane has a book.\nJane has no friend.\n\nChifung has eyes.\nChifung has a head.\nChifung has a mouth.\nChifung has a brain.\nChifung has no book.\nChifung has a friend.\n\nJane is something.\nJane is alive.\nJane is a person.\nJane can talk.\nJane can walk.\nJane can eat.\n\nChifung is something.\nChifung is alive.\nChifung is a person.\nChifung can talk.\nChifung can walk.\nChifung can eat.\n\nfox has eyes.\nfox has a head.\nfox has a mouth.\nfox has a brain.\nfox has a tail.\nfox is something.\nfox is alive.\nfox is no person.\nfox can no talk.\nfox can walk.\nfox can eat.\n\ndoes Jane have eyes ? yes.\ndoes Jane have a head ? yes.\ndoes Jane have a mouth ? yes.\ndoes Jane have a brain ? yes.\ndoes Jane have a book ? yes.\ndoes Jane have a friend ? no.\ndoes Jane have a tail ? no.\n\ndoes Chifung have eyes ? yes.\ndoes Chifung have a head ? yes.\ndoes Chifung have a mouth ? yes.\ndoes Chifung have a brain ? yes.\ndoes Chifung have a book ? no.\ndoes Chifung have a friend ? yes.\ndoes Chifung have a tail ? no.\n\ndoes fox have eyes ? yes.\ndoes fox have a head ? yes.\ndoes fox have a mouth ? yes.\ndoes fox have a brain ? yes.\ndoes fox have a book ? no.\ndoes fox have a friend ? no.\ndoes fox have a tail ? yes.\n\nJane has no tail.\nChifung has no tail.\n", 
    3, a, CS);
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
  c.v = a;
  return c;
}());
function DS(a, b) {
  var c = BS(a, b), d = AS(a);
  return Q.j(c, Gt, kJ(d));
}
Aa("comportexviz.demos.simple_sentences.input_gen", DS);
function ES(a, b, c) {
  return kC(cC, DS(a, b), c, CS);
}
Aa("comportexviz.demos.simple_sentences.n_region_model", ES);
function FS() {
  var a = Oy(gw.g(dw("#comportex-input-repeats"))), b = gw.g(dw("#comportex-input-text")), a = ES(b, a, 1);
  return rS.g ? rS.g(a) : rS.call(null, a);
}
Aa("comportexviz.demos.simple_sentences.restart_from_ui", FS);
Aa("comportexviz.demos.simple_sentences.handle_user_input_form", function() {
  var a = dw("#comportex-input-text-form");
  return yz(a, vn, function() {
    return function(a) {
      FS();
      a.preventDefault();
      return!1;
    };
  }(a));
});
var GS = new U(null, 2, 5, V, [0, 7], null), HS = new U(null, 2, 5, V, [aq, 0], null);
function IS(a) {
  var b = O.j(a, 0, null);
  a = O.j(a, 1, null);
  a: {
    switch(b instanceof W ? b.ja : null) {
      case "down":
        b = a - 1;
        break a;
      case "up":
        b = a + 1;
        break a;
      default:
        throw Error("No matching clause: " + u.g(b));;
    }
  }
  b = 7 > b ? b : 7;
  b = 0 < b ? b : 0;
  a = WA(new U(null, 2, 5, V, [aq, pl], null));
  return new U(null, 2, 5, V, [a, b], null);
}
var JS = yI.k(2, CI(60, new U(null, 2, 5, V, [pl, aq], null)), G([AI(240, 30, GS)], 0)), KS = ve([hl, Pl, bm, hm, Nm, Rm, $m, qn, Ip, Mp, Kq, Mq, Uq, kr, Er, Es, Ts, Rt, wu, xu], [.2, 12, 5, .01, .2, 7, 9, new U(null, 1, 5, V, [500], null), .05, 18, 2, .2, .05, .04, !1, .01, 4, 1E5, .16, 3]);
function LS() {
  return eC(HS, IS, JS);
}
Aa("org.nfrac.comportex.demos.directional_steps_1d.input_gen", LS);
var MS = function() {
  function a(a, b) {
    return kC(cC, LS(), a, b);
  }
  function b(a) {
    return c.h(a, KS);
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
Aa("org.nfrac.comportex.demos.directional_steps_1d.n_region_model", MS);
Aa("comportexviz.demos.directional_steps_1d.n_region_model", function(a) {
  return MS.g(a);
});

})();

//# sourceMappingURL=comportexviz.js.map