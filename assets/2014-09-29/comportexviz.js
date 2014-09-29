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
function n(a) {
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
  var b = n(a);
  return "array" == b || "object" == b && "number" == typeof a.length;
}
function ha(a) {
  return "string" == typeof a;
}
function ia(a) {
  return "function" == n(a);
}
function ja(a) {
  var b = typeof a;
  return "object" == b && null != a || "function" == b;
}
var ka = "closure_uid_" + (1E9 * Math.random() >>> 0), la = 0;
function ma(a, b) {
  var c = a.split("."), d = aa;
  c[0] in d || !d.execScript || d.execScript("var " + c[0]);
  for (var e;c.length && (e = c.shift());) {
    !c.length && ba(b) ? d[e] = b : d = d[e] ? d[e] : d[e] = {};
  }
}
function na(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.uf = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a;
  a.Df = function(a, c, f) {
    return b.prototype[c].apply(a, Array.prototype.slice.call(arguments, 2));
  };
}
;function pa(a) {
  if (!ra.test(a)) {
    return a;
  }
  -1 != a.indexOf("\x26") && (a = a.replace(sa, "\x26amp;"));
  -1 != a.indexOf("\x3c") && (a = a.replace(ta, "\x26lt;"));
  -1 != a.indexOf("\x3e") && (a = a.replace(ua, "\x26gt;"));
  -1 != a.indexOf('"') && (a = a.replace(xa, "\x26quot;"));
  -1 != a.indexOf("'") && (a = a.replace(ya, "\x26#39;"));
  -1 != a.indexOf("\x00") && (a = a.replace(Aa, "\x26#0;"));
  return a;
}
var sa = /&/g, ta = /</g, ua = />/g, xa = /"/g, ya = /'/g, Aa = /\x00/g, ra = /[\x00&<>"']/;
function Ba(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}
function Ca(a) {
  return String(a).replace(/\-([a-z])/g, function(a, c) {
    return c.toUpperCase();
  });
}
;function Da(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
}
var Fa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Ga(a, b) {
  for (var c, d, e = 1;e < arguments.length;e++) {
    d = arguments[e];
    for (c in d) {
      a[c] = d[c];
    }
    for (var f = 0;f < Fa.length;f++) {
      c = Fa[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
}
;function Ia(a, b) {
  null != a && this.append.apply(this, arguments);
}
Ia.prototype.Ub = "";
Ia.prototype.append = function(a, b, c) {
  this.Ub += a;
  if (null != b) {
    for (var d = 1;d < arguments.length;d++) {
      this.Ub += arguments[d];
    }
  }
  return this;
};
Ia.prototype.toString = function() {
  return this.Ub;
};
var La;
var Na = Array.prototype, Oa = Na.indexOf ? function(a, b, c) {
  return Na.indexOf.call(a, b, c);
} : function(a, b, c) {
  c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if (ha(a)) {
    return ha(b) && 1 == b.length ? a.indexOf(b, c) : -1;
  }
  for (;c < a.length;c++) {
    if (c in a && a[c] === b) {
      return c;
    }
  }
  return-1;
}, Pa = Na.forEach ? function(a, b, c) {
  Na.forEach.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = ha(a) ? a.split("") : a, f = 0;f < d;f++) {
    f in e && b.call(c, e[f], f, a);
  }
};
function Qa(a) {
  var b = a.length;
  if (0 < b) {
    for (var c = Array(b), d = 0;d < b;d++) {
      c[d] = a[d];
    }
    return c;
  }
  return[];
}
function Ra(a, b) {
  a.sort(b || Ta);
}
function Va(a, b) {
  for (var c = 0;c < a.length;c++) {
    a[c] = {index:c, value:a[c]};
  }
  var d = b || Ta;
  Ra(a, function(a, b) {
    return d(a.value, b.value) || a.index - b.index;
  });
  for (c = 0;c < a.length;c++) {
    a[c] = a[c].value;
  }
}
function Ta(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
}
;var Wa = null;
function Xa() {
  return new p(null, 5, [Ya, !0, Za, !0, $a, !1, bb, !1, cb, null], null);
}
function q(a) {
  return null != a && !1 !== a;
}
function db(a) {
  return q(a) ? !1 : !0;
}
function fb(a, b) {
  return a[n(null == b ? null : b)] ? !0 : a._ ? !0 : !1;
}
function gb(a) {
  return null == a ? null : a.constructor;
}
function t(a, b) {
  var c = gb(b), c = q(q(c) ? c.Ca : c) ? c.Ba : n(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function hb(a) {
  var b = a.Ba;
  return q(b) ? b : "" + u.g(a);
}
function ib(a) {
  for (var b = a.length, c = Array(b), d = 0;;) {
    if (d < b) {
      c[d] = a[d], d += 1;
    } else {
      break;
    }
  }
  return c;
}
var jb = {}, kb = {};
function lb(a) {
  if (a ? a.T : a) {
    return a.T(a);
  }
  var b;
  b = lb[n(null == a ? null : a)];
  if (!b && (b = lb._, !b)) {
    throw t("ICounted.-count", a);
  }
  return b.call(null, a);
}
function mb(a) {
  if (a ? a.Y : a) {
    return a.Y(a);
  }
  var b;
  b = mb[n(null == a ? null : a)];
  if (!b && (b = mb._, !b)) {
    throw t("IEmptyableCollection.-empty", a);
  }
  return b.call(null, a);
}
var nb = {};
function ob(a, b) {
  if (a ? a.S : a) {
    return a.S(a, b);
  }
  var c;
  c = ob[n(null == a ? null : a)];
  if (!c && (c = ob._, !c)) {
    throw t("ICollection.-conj", a);
  }
  return c.call(null, a, b);
}
var qb = {}, v = function() {
  function a(a, b, c) {
    if (a ? a.oa : a) {
      return a.oa(a, b, c);
    }
    var g;
    g = v[n(null == a ? null : a)];
    if (!g && (g = v._, !g)) {
      throw t("IIndexed.-nth", a);
    }
    return g.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.D : a) {
      return a.D(a, b);
    }
    var c;
    c = v[n(null == a ? null : a)];
    if (!c && (c = v._, !c)) {
      throw t("IIndexed.-nth", a);
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
}(), rb = {};
function ub(a) {
  if (a ? a.aa : a) {
    return a.aa(a);
  }
  var b;
  b = ub[n(null == a ? null : a)];
  if (!b && (b = ub._, !b)) {
    throw t("ISeq.-first", a);
  }
  return b.call(null, a);
}
function yb(a) {
  if (a ? a.ga : a) {
    return a.ga(a);
  }
  var b;
  b = yb[n(null == a ? null : a)];
  if (!b && (b = yb._, !b)) {
    throw t("ISeq.-rest", a);
  }
  return b.call(null, a);
}
var Ab = {}, Bb = {}, Cb = function() {
  function a(a, b, c) {
    if (a ? a.L : a) {
      return a.L(a, b, c);
    }
    var g;
    g = Cb[n(null == a ? null : a)];
    if (!g && (g = Cb._, !g)) {
      throw t("ILookup.-lookup", a);
    }
    return g.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.K : a) {
      return a.K(a, b);
    }
    var c;
    c = Cb[n(null == a ? null : a)];
    if (!c && (c = Cb._, !c)) {
      throw t("ILookup.-lookup", a);
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
}(), Db = {};
function Fb(a, b) {
  if (a ? a.wc : a) {
    return a.wc(a, b);
  }
  var c;
  c = Fb[n(null == a ? null : a)];
  if (!c && (c = Fb._, !c)) {
    throw t("IAssociative.-contains-key?", a);
  }
  return c.call(null, a, b);
}
function Gb(a, b, c) {
  if (a ? a.va : a) {
    return a.va(a, b, c);
  }
  var d;
  d = Gb[n(null == a ? null : a)];
  if (!d && (d = Gb._, !d)) {
    throw t("IAssociative.-assoc", a);
  }
  return d.call(null, a, b, c);
}
var Hb = {};
function Mb(a, b) {
  if (a ? a.Sa : a) {
    return a.Sa(a, b);
  }
  var c;
  c = Mb[n(null == a ? null : a)];
  if (!c && (c = Mb._, !c)) {
    throw t("IMap.-dissoc", a);
  }
  return c.call(null, a, b);
}
var Pb = {};
function Qb(a) {
  if (a ? a.ic : a) {
    return a.ic(a);
  }
  var b;
  b = Qb[n(null == a ? null : a)];
  if (!b && (b = Qb._, !b)) {
    throw t("IMapEntry.-key", a);
  }
  return b.call(null, a);
}
function Rb(a) {
  if (a ? a.jc : a) {
    return a.jc(a);
  }
  var b;
  b = Rb[n(null == a ? null : a)];
  if (!b && (b = Rb._, !b)) {
    throw t("IMapEntry.-val", a);
  }
  return b.call(null, a);
}
var Wb = {};
function Yb(a, b) {
  if (a ? a.Ed : a) {
    return a.Ed(0, b);
  }
  var c;
  c = Yb[n(null == a ? null : a)];
  if (!c && (c = Yb._, !c)) {
    throw t("ISet.-disjoin", a);
  }
  return c.call(null, a, b);
}
function dc(a) {
  if (a ? a.xb : a) {
    return a.xb(a);
  }
  var b;
  b = dc[n(null == a ? null : a)];
  if (!b && (b = dc._, !b)) {
    throw t("IStack.-peek", a);
  }
  return b.call(null, a);
}
var ec = {};
function fc(a, b, c) {
  if (a ? a.Hb : a) {
    return a.Hb(a, b, c);
  }
  var d;
  d = fc[n(null == a ? null : a)];
  if (!d && (d = fc._, !d)) {
    throw t("IVector.-assoc-n", a);
  }
  return d.call(null, a, b, c);
}
function gc(a) {
  if (a ? a.Vb : a) {
    return a.Vb(a);
  }
  var b;
  b = gc[n(null == a ? null : a)];
  if (!b && (b = gc._, !b)) {
    throw t("IDeref.-deref", a);
  }
  return b.call(null, a);
}
var hc = {};
function ic(a) {
  if (a ? a.I : a) {
    return a.I(a);
  }
  var b;
  b = ic[n(null == a ? null : a)];
  if (!b && (b = ic._, !b)) {
    throw t("IMeta.-meta", a);
  }
  return b.call(null, a);
}
var jc = {};
function mc(a, b) {
  if (a ? a.J : a) {
    return a.J(a, b);
  }
  var c;
  c = mc[n(null == a ? null : a)];
  if (!c && (c = mc._, !c)) {
    throw t("IWithMeta.-with-meta", a);
  }
  return c.call(null, a, b);
}
var nc = {}, oc = function() {
  function a(a, b, c) {
    if (a ? a.da : a) {
      return a.da(a, b, c);
    }
    var g;
    g = oc[n(null == a ? null : a)];
    if (!g && (g = oc._, !g)) {
      throw t("IReduce.-reduce", a);
    }
    return g.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.ca : a) {
      return a.ca(a, b);
    }
    var c;
    c = oc[n(null == a ? null : a)];
    if (!c && (c = oc._, !c)) {
      throw t("IReduce.-reduce", a);
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
function pc(a, b, c) {
  if (a ? a.hc : a) {
    return a.hc(a, b, c);
  }
  var d;
  d = pc[n(null == a ? null : a)];
  if (!d && (d = pc._, !d)) {
    throw t("IKVReduce.-kv-reduce", a);
  }
  return d.call(null, a, b, c);
}
function qc(a, b) {
  if (a ? a.M : a) {
    return a.M(a, b);
  }
  var c;
  c = qc[n(null == a ? null : a)];
  if (!c && (c = qc._, !c)) {
    throw t("IEquiv.-equiv", a);
  }
  return c.call(null, a, b);
}
function rc(a) {
  if (a ? a.P : a) {
    return a.P(a);
  }
  var b;
  b = rc[n(null == a ? null : a)];
  if (!b && (b = rc._, !b)) {
    throw t("IHash.-hash", a);
  }
  return b.call(null, a);
}
var sc = {};
function tc(a) {
  if (a ? a.Q : a) {
    return a.Q(a);
  }
  var b;
  b = tc[n(null == a ? null : a)];
  if (!b && (b = tc._, !b)) {
    throw t("ISeqable.-seq", a);
  }
  return b.call(null, a);
}
var uc = {}, vc = {};
function Ac(a) {
  if (a ? a.kc : a) {
    return a.kc(a);
  }
  var b;
  b = Ac[n(null == a ? null : a)];
  if (!b && (b = Ac._, !b)) {
    throw t("IReversible.-rseq", a);
  }
  return b.call(null, a);
}
function Bc(a, b) {
  if (a ? a.Gd : a) {
    return a.Gd(0, b);
  }
  var c;
  c = Bc[n(null == a ? null : a)];
  if (!c && (c = Bc._, !c)) {
    throw t("IWriter.-write", a);
  }
  return c.call(null, a, b);
}
var Cc = {};
function Dc(a, b, c) {
  if (a ? a.N : a) {
    return a.N(a, b, c);
  }
  var d;
  d = Dc[n(null == a ? null : a)];
  if (!d && (d = Dc._, !d)) {
    throw t("IPrintWithWriter.-pr-writer", a);
  }
  return d.call(null, a, b, c);
}
function Ec(a, b, c) {
  if (a ? a.Vc : a) {
    return a.Vc(a, b, c);
  }
  var d;
  d = Ec[n(null == a ? null : a)];
  if (!d && (d = Ec._, !d)) {
    throw t("IWatchable.-notify-watches", a);
  }
  return d.call(null, a, b, c);
}
function Fc(a, b, c) {
  if (a ? a.Uc : a) {
    return a.Uc(a, b, c);
  }
  var d;
  d = Fc[n(null == a ? null : a)];
  if (!d && (d = Fc._, !d)) {
    throw t("IWatchable.-add-watch", a);
  }
  return d.call(null, a, b, c);
}
function Kc(a, b) {
  if (a ? a.Wc : a) {
    return a.Wc(a, b);
  }
  var c;
  c = Kc[n(null == a ? null : a)];
  if (!c && (c = Kc._, !c)) {
    throw t("IWatchable.-remove-watch", a);
  }
  return c.call(null, a, b);
}
function Lc(a) {
  if (a ? a.Wb : a) {
    return a.Wb(a);
  }
  var b;
  b = Lc[n(null == a ? null : a)];
  if (!b && (b = Lc._, !b)) {
    throw t("IEditableCollection.-as-transient", a);
  }
  return b.call(null, a);
}
function Mc(a, b) {
  if (a ? a.Fb : a) {
    return a.Fb(a, b);
  }
  var c;
  c = Mc[n(null == a ? null : a)];
  if (!c && (c = Mc._, !c)) {
    throw t("ITransientCollection.-conj!", a);
  }
  return c.call(null, a, b);
}
function Nc(a) {
  if (a ? a.Gb : a) {
    return a.Gb(a);
  }
  var b;
  b = Nc[n(null == a ? null : a)];
  if (!b && (b = Nc._, !b)) {
    throw t("ITransientCollection.-persistent!", a);
  }
  return b.call(null, a);
}
function Oc(a, b, c) {
  if (a ? a.mc : a) {
    return a.mc(a, b, c);
  }
  var d;
  d = Oc[n(null == a ? null : a)];
  if (!d && (d = Oc._, !d)) {
    throw t("ITransientAssociative.-assoc!", a);
  }
  return d.call(null, a, b, c);
}
function Pc(a, b, c) {
  if (a ? a.Fd : a) {
    return a.Fd(0, b, c);
  }
  var d;
  d = Pc[n(null == a ? null : a)];
  if (!d && (d = Pc._, !d)) {
    throw t("ITransientVector.-assoc-n!", a);
  }
  return d.call(null, a, b, c);
}
function Qc(a) {
  if (a ? a.Ad : a) {
    return a.Ad();
  }
  var b;
  b = Qc[n(null == a ? null : a)];
  if (!b && (b = Qc._, !b)) {
    throw t("IChunk.-drop-first", a);
  }
  return b.call(null, a);
}
function x(a) {
  if (a ? a.Sc : a) {
    return a.Sc(a);
  }
  var b;
  b = x[n(null == a ? null : a)];
  if (!b && (b = x._, !b)) {
    throw t("IChunkedSeq.-chunked-first", a);
  }
  return b.call(null, a);
}
function z(a) {
  if (a ? a.Tc : a) {
    return a.Tc(a);
  }
  var b;
  b = z[n(null == a ? null : a)];
  if (!b && (b = z._, !b)) {
    throw t("IChunkedSeq.-chunked-rest", a);
  }
  return b.call(null, a);
}
function Rc(a) {
  if (a ? a.Rc : a) {
    return a.Rc(a);
  }
  var b;
  b = Rc[n(null == a ? null : a)];
  if (!b && (b = Rc._, !b)) {
    throw t("IChunkedNext.-chunked-next", a);
  }
  return b.call(null, a);
}
function $c(a, b) {
  if (a ? a.ye : a) {
    return a.ye(a, b);
  }
  var c;
  c = $c[n(null == a ? null : a)];
  if (!c && (c = $c._, !c)) {
    throw t("IReset.-reset!", a);
  }
  return c.call(null, a, b);
}
var bd = function() {
  function a(a, b, c, d, e) {
    if (a ? a.Ce : a) {
      return a.Ce(a, b, c, d, e);
    }
    var r;
    r = bd[n(null == a ? null : a)];
    if (!r && (r = bd._, !r)) {
      throw t("ISwap.-swap!", a);
    }
    return r.call(null, a, b, c, d, e);
  }
  function b(a, b, c, d) {
    if (a ? a.Be : a) {
      return a.Be(a, b, c, d);
    }
    var e;
    e = bd[n(null == a ? null : a)];
    if (!e && (e = bd._, !e)) {
      throw t("ISwap.-swap!", a);
    }
    return e.call(null, a, b, c, d);
  }
  function c(a, b, c) {
    if (a ? a.Ae : a) {
      return a.Ae(a, b, c);
    }
    var d;
    d = bd[n(null == a ? null : a)];
    if (!d && (d = bd._, !d)) {
      throw t("ISwap.-swap!", a);
    }
    return d.call(null, a, b, c);
  }
  function d(a, b) {
    if (a ? a.ze : a) {
      return a.ze(a, b);
    }
    var c;
    c = bd[n(null == a ? null : a)];
    if (!c && (c = bd._, !c)) {
      throw t("ISwap.-swap!", a);
    }
    return c.call(null, a, b);
  }
  var e = null, e = function(e, g, h, l, m) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, g);
      case 3:
        return c.call(this, e, g, h);
      case 4:
        return b.call(this, e, g, h, l);
      case 5:
        return a.call(this, e, g, h, l, m);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.h = d;
  e.j = c;
  e.m = b;
  e.O = a;
  return e;
}();
function cd(a) {
  this.rf = a;
  this.G = 0;
  this.q = 1073741824;
}
cd.prototype.Gd = function(a, b) {
  return this.rf.append(b);
};
function dd(a) {
  var b = new Ia;
  a.N(null, new cd(b), Xa());
  return "" + u.g(b);
}
var ed = "undefined" !== typeof Math.imul && 0 !== (Math.imul.h ? Math.imul.h(4294967295, 5) : Math.imul.call(null, 4294967295, 5)) ? function(a, b) {
  return Math.imul.h ? Math.imul.h(a, b) : Math.imul.call(null, a, b);
} : function(a, b) {
  var c = a & 65535, d = b & 65535;
  return c * d + ((a >>> 16 & 65535) * d + c * (b >>> 16 & 65535) << 16 >>> 0) | 0;
};
function fd(a) {
  a = ed(a, 3432918353);
  return ed(a << 15 | a >>> -15, 461845907);
}
function gd(a, b) {
  var c = a ^ b;
  return ed(c << 13 | c >>> -13, 5) + 3864292196;
}
function hd(a, b) {
  var c = a ^ b, c = ed(c ^ c >>> 16, 2246822507), c = ed(c ^ c >>> 13, 3266489909);
  return c ^ c >>> 16;
}
function sd(a) {
  var b;
  a: {
    b = 1;
    for (var c = 0;;) {
      if (b < a.length) {
        var d = b + 2, c = gd(c, fd(a.charCodeAt(b - 1) | a.charCodeAt(b) << 16));
        b = d;
      } else {
        b = c;
        break a;
      }
    }
    b = void 0;
  }
  b = 1 === (a.length & 1) ? b ^ fd(a.charCodeAt(a.length - 1)) : b;
  return hd(b, ed(2, a.length));
}
var td = {}, ud = 0;
function vd(a) {
  255 < ud && (td = {}, ud = 0);
  var b = td[a];
  if ("number" !== typeof b) {
    a: {
      if (null != a) {
        if (b = a.length, 0 < b) {
          for (var c = 0, d = 0;;) {
            if (c < b) {
              var e = c + 1, d = ed(31, d) + a.charCodeAt(c), c = e
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
    td[a] = b;
    ud += 1;
  }
  return a = b;
}
function wd(a) {
  a && (a.q & 4194304 || a.te) ? a = a.P(null) : "number" === typeof a ? a = (Math.floor.g ? Math.floor.g(a) : Math.floor.call(null, a)) % 2147483647 : !0 === a ? a = 1 : !1 === a ? a = 0 : "string" === typeof a ? (a = vd(a), 0 !== a && (a = fd(a), a = gd(0, a), a = hd(a, 4))) : a = null == a ? 0 : rc(a);
  return a;
}
function xd(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
function yd(a, b) {
  if (q(B.h ? B.h(a, b) : B.call(null, a, b))) {
    return 0;
  }
  if (q(function() {
    var c = db(a.Ya);
    return c ? b.Ya : c;
  }())) {
    return-1;
  }
  if (q(a.Ya)) {
    if (db(b.Ya)) {
      return 1;
    }
    var c = function() {
      var c = a.Ya, d = b.Ya;
      return zd.h ? zd.h(c, d) : zd.call(null, c, d);
    }();
    if (0 === c) {
      var c = a.name, d = b.name;
      return zd.h ? zd.h(c, d) : zd.call(null, c, d);
    }
    return c;
  }
  c = a.name;
  d = b.name;
  return zd.h ? zd.h(c, d) : zd.call(null, c, d);
}
function Ad(a, b, c, d, e) {
  this.Ya = a;
  this.name = b;
  this.Db = c;
  this.Sb = d;
  this.na = e;
  this.q = 2154168321;
  this.G = 4096;
}
k = Ad.prototype;
k.N = function(a, b) {
  return Bc(b, this.Db);
};
k.P = function() {
  var a = this.Sb;
  return null != a ? a : this.Sb = a = xd(sd(this.name), vd(this.Ya));
};
k.J = function(a, b) {
  return new Ad(this.Ya, this.name, this.Db, this.Sb, b);
};
k.I = function() {
  return this.na;
};
k.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Cb.j(c, this, null);
      case 3:
        return Cb.j(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.h = function(a, c) {
    return Cb.j(c, this, null);
  };
  a.j = function(a, c, d) {
    return Cb.j(c, this, d);
  };
  return a;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ib(b)));
};
k.g = function(a) {
  return Cb.j(a, this, null);
};
k.h = function(a, b) {
  return Cb.j(a, this, b);
};
k.M = function(a, b) {
  return b instanceof Ad ? this.Db === b.Db : !1;
};
k.toString = function() {
  return this.Db;
};
var Bd = function() {
  function a(a, b) {
    var c = null != a ? "" + u.g(a) + "/" + u.g(b) : b;
    return new Ad(a, b, c, null, null);
  }
  function b(a) {
    return a instanceof Ad ? a : c.h(null, a);
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
function D(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.q & 8388608 || a.Dd)) {
    return a.Q(null);
  }
  if (a instanceof Array || "string" === typeof a) {
    return 0 === a.length ? null : new Cd(a, 0);
  }
  if (fb(sc, a)) {
    return tc(a);
  }
  throw Error("" + u.g(a) + " is not ISeqable");
}
function E(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.q & 64 || a.lc)) {
    return a.aa(null);
  }
  a = D(a);
  return null == a ? null : ub(a);
}
function F(a) {
  return null != a ? a && (a.q & 64 || a.lc) ? a.ga(null) : (a = D(a)) ? yb(a) : Dd : Dd;
}
function H(a) {
  return null == a ? null : a && (a.q & 128 || a.Ac) ? a.ja(null) : D(F(a));
}
var B = function() {
  function a(a, b) {
    return null == a ? null == b : a === b || qc(a, b);
  }
  var b = null, c = function() {
    function a(b, d, h) {
      var l = null;
      2 < arguments.length && (l = L(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (b.h(a, d)) {
          if (H(e)) {
            a = d, d = E(e), e = H(e);
          } else {
            return b.h(d, E(e));
          }
        } else {
          return!1;
        }
      }
    }
    a.w = 2;
    a.n = function(a) {
      var b = E(a);
      a = H(a);
      var d = E(a);
      a = F(a);
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
        return c.k(b, e, L(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.w = 2;
  b.n = c.n;
  b.g = function() {
    return!0;
  };
  b.h = a;
  b.k = c.k;
  return b;
}();
function Hd(a, b) {
  var c = fd(a), c = gd(0, c);
  return hd(c, b);
}
function Id(a) {
  var b = 0, c = 1;
  for (a = D(a);;) {
    if (null != a) {
      b += 1, c = ed(31, c) + wd(E(a)) | 0, a = H(a);
    } else {
      return Hd(c, b);
    }
  }
}
function Jd(a) {
  var b = 0, c = 0;
  for (a = D(a);;) {
    if (null != a) {
      b += 1, c = c + wd(E(a)) | 0, a = H(a);
    } else {
      return Hd(c, b);
    }
  }
}
kb["null"] = !0;
lb["null"] = function() {
  return 0;
};
Date.prototype.M = function(a, b) {
  return b instanceof Date && this.toString() === b.toString();
};
qc.number = function(a, b) {
  return a === b;
};
hc["function"] = !0;
ic["function"] = function() {
  return null;
};
jb["function"] = !0;
rc._ = function(a) {
  return a[ka] || (a[ka] = ++la);
};
function Kd(a) {
  return a + 1;
}
function Ld(a) {
  this.B = a;
  this.G = 0;
  this.q = 32768;
}
Ld.prototype.Vb = function() {
  return this.B;
};
function Md(a) {
  return a instanceof Ld;
}
function M(a) {
  return gc(a);
}
var Nd = function() {
  function a(a, b, c, d) {
    for (var l = lb(a);;) {
      if (d < l) {
        var m = v.h(a, d);
        c = b.h ? b.h(c, m) : b.call(null, c, m);
        if (Md(c)) {
          return gc(c);
        }
        d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    var d = lb(a), l = c;
    for (c = 0;;) {
      if (c < d) {
        var m = v.h(a, c), l = b.h ? b.h(l, m) : b.call(null, l, m);
        if (Md(l)) {
          return gc(l);
        }
        c += 1;
      } else {
        return l;
      }
    }
  }
  function c(a, b) {
    var c = lb(a);
    if (0 === c) {
      return b.p ? b.p() : b.call(null);
    }
    for (var d = v.h(a, 0), l = 1;;) {
      if (l < c) {
        var m = v.h(a, l), d = b.h ? b.h(d, m) : b.call(null, d, m);
        if (Md(d)) {
          return gc(d);
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
  d.m = a;
  return d;
}(), Od = function() {
  function a(a, b, c, d) {
    for (var l = a.length;;) {
      if (d < l) {
        var m = a[d];
        c = b.h ? b.h(c, m) : b.call(null, c, m);
        if (Md(c)) {
          return gc(c);
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
        var m = a[c], l = b.h ? b.h(l, m) : b.call(null, l, m);
        if (Md(l)) {
          return gc(l);
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
      return b.p ? b.p() : b.call(null);
    }
    for (var d = a[0], l = 1;;) {
      if (l < c) {
        var m = a[l], d = b.h ? b.h(d, m) : b.call(null, d, m);
        if (Md(d)) {
          return gc(d);
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
  d.m = a;
  return d;
}();
function Pd(a) {
  return a ? a.q & 2 || a.qe ? !0 : a.q ? !1 : fb(kb, a) : fb(kb, a);
}
function Qd(a) {
  return a ? a.q & 16 || a.Bd ? !0 : a.q ? !1 : fb(qb, a) : fb(qb, a);
}
function Cd(a, b) {
  this.l = a;
  this.H = b;
  this.q = 166199550;
  this.G = 8192;
}
k = Cd.prototype;
k.toString = function() {
  return dd(this);
};
k.D = function(a, b) {
  var c = b + this.H;
  return c < this.l.length ? this.l[c] : null;
};
k.oa = function(a, b, c) {
  a = b + this.H;
  return a < this.l.length ? this.l[a] : c;
};
k.ja = function() {
  return this.H + 1 < this.l.length ? new Cd(this.l, this.H + 1) : null;
};
k.T = function() {
  return this.l.length - this.H;
};
k.kc = function() {
  var a = lb(this);
  return 0 < a ? new Rd(this, a - 1, null) : null;
};
k.P = function() {
  return Id(this);
};
k.M = function(a, b) {
  return Sd.h ? Sd.h(this, b) : Sd.call(null, this, b);
};
k.Y = function() {
  return Dd;
};
k.ca = function(a, b) {
  return Od.m(this.l, b, this.l[this.H], this.H + 1);
};
k.da = function(a, b, c) {
  return Od.m(this.l, b, c, this.H);
};
k.aa = function() {
  return this.l[this.H];
};
k.ga = function() {
  return this.H + 1 < this.l.length ? new Cd(this.l, this.H + 1) : Dd;
};
k.Q = function() {
  return this;
};
k.S = function(a, b) {
  return Td.h ? Td.h(b, this) : Td.call(null, b, this);
};
var Ud = function() {
  function a(a, b) {
    return b < a.length ? new Cd(a, b) : null;
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
}(), L = function() {
  function a(a, b) {
    return Ud.h(a, b);
  }
  function b(a) {
    return Ud.h(a, 0);
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
function Rd(a, b, c) {
  this.vc = a;
  this.H = b;
  this.C = c;
  this.q = 32374990;
  this.G = 8192;
}
k = Rd.prototype;
k.toString = function() {
  return dd(this);
};
k.I = function() {
  return this.C;
};
k.ja = function() {
  return 0 < this.H ? new Rd(this.vc, this.H - 1, null) : null;
};
k.T = function() {
  return this.H + 1;
};
k.P = function() {
  return Id(this);
};
k.M = function(a, b) {
  return Sd.h ? Sd.h(this, b) : Sd.call(null, this, b);
};
k.Y = function() {
  var a = this.C;
  return Vd.h ? Vd.h(Dd, a) : Vd.call(null, Dd, a);
};
k.ca = function(a, b) {
  return Wd.h ? Wd.h(b, this) : Wd.call(null, b, this);
};
k.da = function(a, b, c) {
  return Wd.j ? Wd.j(b, c, this) : Wd.call(null, b, c, this);
};
k.aa = function() {
  return v.h(this.vc, this.H);
};
k.ga = function() {
  return 0 < this.H ? new Rd(this.vc, this.H - 1, null) : Dd;
};
k.Q = function() {
  return this;
};
k.J = function(a, b) {
  return new Rd(this.vc, this.H, b);
};
k.S = function(a, b) {
  return Td.h ? Td.h(b, this) : Td.call(null, b, this);
};
function Xd(a) {
  return E(H(a));
}
function Yd(a) {
  for (;;) {
    var b = H(a);
    if (null != b) {
      a = b;
    } else {
      return E(a);
    }
  }
}
qc._ = function(a, b) {
  return a === b;
};
var $d = function() {
  function a(a, b) {
    return null != a ? ob(a, b) : ob(Dd, b);
  }
  var b = null, c = function() {
    function a(b, d, h) {
      var l = null;
      2 < arguments.length && (l = L(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (q(e)) {
          a = b.h(a, d), d = E(e), e = H(e);
        } else {
          return b.h(a, d);
        }
      }
    }
    a.w = 2;
    a.n = function(a) {
      var b = E(a);
      a = H(a);
      var d = E(a);
      a = F(a);
      return c(b, d, a);
    };
    a.k = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 0:
        return Zd;
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.k(b, e, L(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.w = 2;
  b.n = c.n;
  b.p = function() {
    return Zd;
  };
  b.g = function(a) {
    return a;
  };
  b.h = a;
  b.k = c.k;
  return b;
}();
function O(a) {
  if (null != a) {
    if (a && (a.q & 2 || a.qe)) {
      a = a.T(null);
    } else {
      if (a instanceof Array) {
        a = a.length;
      } else {
        if ("string" === typeof a) {
          a = a.length;
        } else {
          if (fb(kb, a)) {
            a = lb(a);
          } else {
            a: {
              a = D(a);
              for (var b = 0;;) {
                if (Pd(a)) {
                  a = b + lb(a);
                  break a;
                }
                a = H(a);
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
var ae = function() {
  function a(a, b, c) {
    for (;;) {
      if (null == a) {
        return c;
      }
      if (0 === b) {
        return D(a) ? E(a) : c;
      }
      if (Qd(a)) {
        return v.j(a, b, c);
      }
      if (D(a)) {
        a = H(a), b -= 1;
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
        if (D(a)) {
          return E(a);
        }
        throw Error("Index out of bounds");
      }
      if (Qd(a)) {
        return v.h(a, b);
      }
      if (D(a)) {
        var c = H(a), g = b - 1;
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
}(), P = function() {
  function a(a, b, c) {
    if ("number" !== typeof b) {
      throw Error("index argument to nth must be a number.");
    }
    if (null == a) {
      return c;
    }
    if (a && (a.q & 16 || a.Bd)) {
      return a.oa(null, b, c);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : c;
    }
    if (fb(qb, a)) {
      return v.h(a, b);
    }
    if (a ? a.q & 64 || a.lc || (a.q ? 0 : fb(rb, a)) : fb(rb, a)) {
      return ae.j(a, b, c);
    }
    throw Error("nth not supported on this type " + u.g(hb(gb(a))));
  }
  function b(a, b) {
    if ("number" !== typeof b) {
      throw Error("index argument to nth must be a number");
    }
    if (null == a) {
      return a;
    }
    if (a && (a.q & 16 || a.Bd)) {
      return a.D(null, b);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : null;
    }
    if (fb(qb, a)) {
      return v.h(a, b);
    }
    if (a ? a.q & 64 || a.lc || (a.q ? 0 : fb(rb, a)) : fb(rb, a)) {
      return ae.h(a, b);
    }
    throw Error("nth not supported on this type " + u.g(hb(gb(a))));
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
    return null != a ? a && (a.q & 256 || a.Cd) ? a.L(null, b, c) : a instanceof Array ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : fb(Bb, a) ? Cb.j(a, b, c) : c : c;
  }
  function b(a, b) {
    return null == a ? null : a && (a.q & 256 || a.Cd) ? a.K(null, b) : a instanceof Array ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : fb(Bb, a) ? Cb.h(a, b) : null;
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
    return null != a ? Gb(a, b, c) : fe([b], [c]);
  }
  var b = null, c = function() {
    function a(b, d, h, l) {
      var m = null;
      3 < arguments.length && (m = L(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, h, m);
    }
    function c(a, d, e, l) {
      for (;;) {
        if (a = b.j(a, d, e), q(l)) {
          d = E(l), e = Xd(l), l = H(H(l));
        } else {
          return a;
        }
      }
    }
    a.w = 3;
    a.n = function(a) {
      var b = E(a);
      a = H(a);
      var d = E(a);
      a = H(a);
      var l = E(a);
      a = F(a);
      return c(b, d, l, a);
    };
    a.k = c;
    return a;
  }(), b = function(b, e, f, g) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, e, f);
      default:
        return c.k(b, e, f, L(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.w = 3;
  b.n = c.n;
  b.j = a;
  b.k = c.k;
  return b;
}(), ge = function() {
  function a(a, b) {
    return null == a ? null : Mb(a, b);
  }
  var b = null, c = function() {
    function a(b, d, h) {
      var l = null;
      2 < arguments.length && (l = L(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (null == a) {
          return null;
        }
        a = b.h(a, d);
        if (q(e)) {
          d = E(e), e = H(e);
        } else {
          return a;
        }
      }
    }
    a.w = 2;
    a.n = function(a) {
      var b = E(a);
      a = H(a);
      var d = E(a);
      a = F(a);
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
        return c.k(b, e, L(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.w = 2;
  b.n = c.n;
  b.g = function(a) {
    return a;
  };
  b.h = a;
  b.k = c.k;
  return b;
}();
function he(a) {
  var b = ia(a);
  return q(b) ? b : a ? q(q(null) ? null : a.pe) ? !0 : a.Mf ? !1 : fb(jb, a) : fb(jb, a);
}
function ie(a, b) {
  this.o = a;
  this.C = b;
  this.G = 0;
  this.q = 393217;
}
k = ie.prototype;
k.call = function() {
  function a(a, b, c, d, e, f, g, h, l, r, m, s, w, A, y, C, G, J, I, K, N, da) {
    a = this.o;
    return S.zc ? S.zc(a, b, c, d, e, f, g, h, l, r, m, s, w, A, y, C, G, J, I, K, N, da) : S.call(null, a, b, c, d, e, f, g, h, l, r, m, s, w, A, y, C, G, J, I, K, N, da);
  }
  function b(a, b, c, d, e, f, g, h, l, r, m, s, w, A, y, C, G, J, I, K, N) {
    a = this;
    return a.o.ob ? a.o.ob(b, c, d, e, f, g, h, l, r, m, s, w, A, y, C, G, J, I, K, N) : a.o.call(null, b, c, d, e, f, g, h, l, r, m, s, w, A, y, C, G, J, I, K, N);
  }
  function c(a, b, c, d, e, f, g, h, l, r, m, s, w, A, y, C, G, J, I, K) {
    a = this;
    return a.o.nb ? a.o.nb(b, c, d, e, f, g, h, l, r, m, s, w, A, y, C, G, J, I, K) : a.o.call(null, b, c, d, e, f, g, h, l, r, m, s, w, A, y, C, G, J, I, K);
  }
  function d(a, b, c, d, e, f, g, h, l, r, m, s, w, A, y, C, G, J, I) {
    a = this;
    return a.o.mb ? a.o.mb(b, c, d, e, f, g, h, l, r, m, s, w, A, y, C, G, J, I) : a.o.call(null, b, c, d, e, f, g, h, l, r, m, s, w, A, y, C, G, J, I);
  }
  function e(a, b, c, d, e, f, g, h, l, r, m, s, w, A, y, C, G, J) {
    a = this;
    return a.o.lb ? a.o.lb(b, c, d, e, f, g, h, l, r, m, s, w, A, y, C, G, J) : a.o.call(null, b, c, d, e, f, g, h, l, r, m, s, w, A, y, C, G, J);
  }
  function f(a, b, c, d, e, f, g, h, l, r, m, s, w, A, y, C, G) {
    a = this;
    return a.o.kb ? a.o.kb(b, c, d, e, f, g, h, l, r, m, s, w, A, y, C, G) : a.o.call(null, b, c, d, e, f, g, h, l, r, m, s, w, A, y, C, G);
  }
  function g(a, b, c, d, e, f, g, h, l, r, m, s, w, A, y, C) {
    a = this;
    return a.o.jb ? a.o.jb(b, c, d, e, f, g, h, l, r, m, s, w, A, y, C) : a.o.call(null, b, c, d, e, f, g, h, l, r, m, s, w, A, y, C);
  }
  function h(a, b, c, d, e, f, g, h, l, r, m, s, w, A, y) {
    a = this;
    return a.o.ib ? a.o.ib(b, c, d, e, f, g, h, l, r, m, s, w, A, y) : a.o.call(null, b, c, d, e, f, g, h, l, r, m, s, w, A, y);
  }
  function l(a, b, c, d, e, f, g, h, l, r, m, s, w, A) {
    a = this;
    return a.o.hb ? a.o.hb(b, c, d, e, f, g, h, l, r, m, s, w, A) : a.o.call(null, b, c, d, e, f, g, h, l, r, m, s, w, A);
  }
  function m(a, b, c, d, e, f, g, h, l, r, m, s, w) {
    a = this;
    return a.o.gb ? a.o.gb(b, c, d, e, f, g, h, l, r, m, s, w) : a.o.call(null, b, c, d, e, f, g, h, l, r, m, s, w);
  }
  function r(a, b, c, d, e, f, g, h, l, r, m, s) {
    a = this;
    return a.o.fb ? a.o.fb(b, c, d, e, f, g, h, l, r, m, s) : a.o.call(null, b, c, d, e, f, g, h, l, r, m, s);
  }
  function s(a, b, c, d, e, f, g, h, l, r, m) {
    a = this;
    return a.o.eb ? a.o.eb(b, c, d, e, f, g, h, l, r, m) : a.o.call(null, b, c, d, e, f, g, h, l, r, m);
  }
  function w(a, b, c, d, e, f, g, h, l, r) {
    a = this;
    return a.o.qb ? a.o.qb(b, c, d, e, f, g, h, l, r) : a.o.call(null, b, c, d, e, f, g, h, l, r);
  }
  function A(a, b, c, d, e, f, g, h, l) {
    a = this;
    return a.o.pb ? a.o.pb(b, c, d, e, f, g, h, l) : a.o.call(null, b, c, d, e, f, g, h, l);
  }
  function y(a, b, c, d, e, f, g, h) {
    a = this;
    return a.o.Aa ? a.o.Aa(b, c, d, e, f, g, h) : a.o.call(null, b, c, d, e, f, g, h);
  }
  function C(a, b, c, d, e, f, g) {
    a = this;
    return a.o.ia ? a.o.ia(b, c, d, e, f, g) : a.o.call(null, b, c, d, e, f, g);
  }
  function G(a, b, c, d, e, f) {
    a = this;
    return a.o.O ? a.o.O(b, c, d, e, f) : a.o.call(null, b, c, d, e, f);
  }
  function I(a, b, c, d, e) {
    a = this;
    return a.o.m ? a.o.m(b, c, d, e) : a.o.call(null, b, c, d, e);
  }
  function N(a, b, c, d) {
    a = this;
    return a.o.j ? a.o.j(b, c, d) : a.o.call(null, b, c, d);
  }
  function K(a, b, c) {
    a = this;
    return a.o.h ? a.o.h(b, c) : a.o.call(null, b, c);
  }
  function da(a, b) {
    a = this;
    return a.o.g ? a.o.g(b) : a.o.call(null, b);
  }
  function ea(a) {
    a = this;
    return a.o.p ? a.o.p() : a.o.call(null);
  }
  var J = null, J = function(J, ga, oa, wa, Ha, Ja, Sa, Ka, zb, Ea, ab, sb, Ua, qa, Ib, Jb, eb, tb, fa, bc, ad, cc) {
    switch(arguments.length) {
      case 1:
        return ea.call(this, J);
      case 2:
        return da.call(this, J, ga);
      case 3:
        return K.call(this, J, ga, oa);
      case 4:
        return N.call(this, J, ga, oa, wa);
      case 5:
        return I.call(this, J, ga, oa, wa, Ha);
      case 6:
        return G.call(this, J, ga, oa, wa, Ha, Ja);
      case 7:
        return C.call(this, J, ga, oa, wa, Ha, Ja, Sa);
      case 8:
        return y.call(this, J, ga, oa, wa, Ha, Ja, Sa, Ka);
      case 9:
        return A.call(this, J, ga, oa, wa, Ha, Ja, Sa, Ka, zb);
      case 10:
        return w.call(this, J, ga, oa, wa, Ha, Ja, Sa, Ka, zb, Ea);
      case 11:
        return s.call(this, J, ga, oa, wa, Ha, Ja, Sa, Ka, zb, Ea, ab);
      case 12:
        return r.call(this, J, ga, oa, wa, Ha, Ja, Sa, Ka, zb, Ea, ab, sb);
      case 13:
        return m.call(this, J, ga, oa, wa, Ha, Ja, Sa, Ka, zb, Ea, ab, sb, Ua);
      case 14:
        return l.call(this, J, ga, oa, wa, Ha, Ja, Sa, Ka, zb, Ea, ab, sb, Ua, qa);
      case 15:
        return h.call(this, J, ga, oa, wa, Ha, Ja, Sa, Ka, zb, Ea, ab, sb, Ua, qa, Ib);
      case 16:
        return g.call(this, J, ga, oa, wa, Ha, Ja, Sa, Ka, zb, Ea, ab, sb, Ua, qa, Ib, Jb);
      case 17:
        return f.call(this, J, ga, oa, wa, Ha, Ja, Sa, Ka, zb, Ea, ab, sb, Ua, qa, Ib, Jb, eb);
      case 18:
        return e.call(this, J, ga, oa, wa, Ha, Ja, Sa, Ka, zb, Ea, ab, sb, Ua, qa, Ib, Jb, eb, tb);
      case 19:
        return d.call(this, J, ga, oa, wa, Ha, Ja, Sa, Ka, zb, Ea, ab, sb, Ua, qa, Ib, Jb, eb, tb, fa);
      case 20:
        return c.call(this, J, ga, oa, wa, Ha, Ja, Sa, Ka, zb, Ea, ab, sb, Ua, qa, Ib, Jb, eb, tb, fa, bc);
      case 21:
        return b.call(this, J, ga, oa, wa, Ha, Ja, Sa, Ka, zb, Ea, ab, sb, Ua, qa, Ib, Jb, eb, tb, fa, bc, ad);
      case 22:
        return a.call(this, J, ga, oa, wa, Ha, Ja, Sa, Ka, zb, Ea, ab, sb, Ua, qa, Ib, Jb, eb, tb, fa, bc, ad, cc);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  J.g = ea;
  J.h = da;
  J.j = K;
  J.m = N;
  J.O = I;
  J.ia = G;
  J.Aa = C;
  J.pb = y;
  J.qb = A;
  J.eb = w;
  J.fb = s;
  J.gb = r;
  J.hb = m;
  J.ib = l;
  J.jb = h;
  J.kb = g;
  J.lb = f;
  J.mb = e;
  J.nb = d;
  J.ob = c;
  J.se = b;
  J.zc = a;
  return J;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ib(b)));
};
k.p = function() {
  return this.o.p ? this.o.p() : this.o.call(null);
};
k.g = function(a) {
  return this.o.g ? this.o.g(a) : this.o.call(null, a);
};
k.h = function(a, b) {
  return this.o.h ? this.o.h(a, b) : this.o.call(null, a, b);
};
k.j = function(a, b, c) {
  return this.o.j ? this.o.j(a, b, c) : this.o.call(null, a, b, c);
};
k.m = function(a, b, c, d) {
  return this.o.m ? this.o.m(a, b, c, d) : this.o.call(null, a, b, c, d);
};
k.O = function(a, b, c, d, e) {
  return this.o.O ? this.o.O(a, b, c, d, e) : this.o.call(null, a, b, c, d, e);
};
k.ia = function(a, b, c, d, e, f) {
  return this.o.ia ? this.o.ia(a, b, c, d, e, f) : this.o.call(null, a, b, c, d, e, f);
};
k.Aa = function(a, b, c, d, e, f, g) {
  return this.o.Aa ? this.o.Aa(a, b, c, d, e, f, g) : this.o.call(null, a, b, c, d, e, f, g);
};
k.pb = function(a, b, c, d, e, f, g, h) {
  return this.o.pb ? this.o.pb(a, b, c, d, e, f, g, h) : this.o.call(null, a, b, c, d, e, f, g, h);
};
k.qb = function(a, b, c, d, e, f, g, h, l) {
  return this.o.qb ? this.o.qb(a, b, c, d, e, f, g, h, l) : this.o.call(null, a, b, c, d, e, f, g, h, l);
};
k.eb = function(a, b, c, d, e, f, g, h, l, m) {
  return this.o.eb ? this.o.eb(a, b, c, d, e, f, g, h, l, m) : this.o.call(null, a, b, c, d, e, f, g, h, l, m);
};
k.fb = function(a, b, c, d, e, f, g, h, l, m, r) {
  return this.o.fb ? this.o.fb(a, b, c, d, e, f, g, h, l, m, r) : this.o.call(null, a, b, c, d, e, f, g, h, l, m, r);
};
k.gb = function(a, b, c, d, e, f, g, h, l, m, r, s) {
  return this.o.gb ? this.o.gb(a, b, c, d, e, f, g, h, l, m, r, s) : this.o.call(null, a, b, c, d, e, f, g, h, l, m, r, s);
};
k.hb = function(a, b, c, d, e, f, g, h, l, m, r, s, w) {
  return this.o.hb ? this.o.hb(a, b, c, d, e, f, g, h, l, m, r, s, w) : this.o.call(null, a, b, c, d, e, f, g, h, l, m, r, s, w);
};
k.ib = function(a, b, c, d, e, f, g, h, l, m, r, s, w, A) {
  return this.o.ib ? this.o.ib(a, b, c, d, e, f, g, h, l, m, r, s, w, A) : this.o.call(null, a, b, c, d, e, f, g, h, l, m, r, s, w, A);
};
k.jb = function(a, b, c, d, e, f, g, h, l, m, r, s, w, A, y) {
  return this.o.jb ? this.o.jb(a, b, c, d, e, f, g, h, l, m, r, s, w, A, y) : this.o.call(null, a, b, c, d, e, f, g, h, l, m, r, s, w, A, y);
};
k.kb = function(a, b, c, d, e, f, g, h, l, m, r, s, w, A, y, C) {
  return this.o.kb ? this.o.kb(a, b, c, d, e, f, g, h, l, m, r, s, w, A, y, C) : this.o.call(null, a, b, c, d, e, f, g, h, l, m, r, s, w, A, y, C);
};
k.lb = function(a, b, c, d, e, f, g, h, l, m, r, s, w, A, y, C, G) {
  return this.o.lb ? this.o.lb(a, b, c, d, e, f, g, h, l, m, r, s, w, A, y, C, G) : this.o.call(null, a, b, c, d, e, f, g, h, l, m, r, s, w, A, y, C, G);
};
k.mb = function(a, b, c, d, e, f, g, h, l, m, r, s, w, A, y, C, G, I) {
  return this.o.mb ? this.o.mb(a, b, c, d, e, f, g, h, l, m, r, s, w, A, y, C, G, I) : this.o.call(null, a, b, c, d, e, f, g, h, l, m, r, s, w, A, y, C, G, I);
};
k.nb = function(a, b, c, d, e, f, g, h, l, m, r, s, w, A, y, C, G, I, N) {
  return this.o.nb ? this.o.nb(a, b, c, d, e, f, g, h, l, m, r, s, w, A, y, C, G, I, N) : this.o.call(null, a, b, c, d, e, f, g, h, l, m, r, s, w, A, y, C, G, I, N);
};
k.ob = function(a, b, c, d, e, f, g, h, l, m, r, s, w, A, y, C, G, I, N, K) {
  return this.o.ob ? this.o.ob(a, b, c, d, e, f, g, h, l, m, r, s, w, A, y, C, G, I, N, K) : this.o.call(null, a, b, c, d, e, f, g, h, l, m, r, s, w, A, y, C, G, I, N, K);
};
k.se = function(a, b, c, d, e, f, g, h, l, m, r, s, w, A, y, C, G, I, N, K, da) {
  var ea = this.o;
  return S.zc ? S.zc(ea, a, b, c, d, e, f, g, h, l, m, r, s, w, A, y, C, G, I, N, K, da) : S.call(null, ea, a, b, c, d, e, f, g, h, l, m, r, s, w, A, y, C, G, I, N, K, da);
};
k.pe = !0;
k.J = function(a, b) {
  return new ie(this.o, b);
};
k.I = function() {
  return this.C;
};
function Vd(a, b) {
  return he(a) && !(a ? a.q & 262144 || a.De || (a.q ? 0 : fb(jc, a)) : fb(jc, a)) ? new ie(a, b) : null == a ? null : mc(a, b);
}
function je(a) {
  var b = null != a;
  return(b ? a ? a.q & 131072 || a.ve || (a.q ? 0 : fb(hc, a)) : fb(hc, a) : b) ? ic(a) : null;
}
function ke(a) {
  return null == a ? null : dc(a);
}
var le = function() {
  function a(a, b) {
    return null == a ? null : Yb(a, b);
  }
  var b = null, c = function() {
    function a(b, d, h) {
      var l = null;
      2 < arguments.length && (l = L(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (null == a) {
          return null;
        }
        a = b.h(a, d);
        if (q(e)) {
          d = E(e), e = H(e);
        } else {
          return a;
        }
      }
    }
    a.w = 2;
    a.n = function(a) {
      var b = E(a);
      a = H(a);
      var d = E(a);
      a = F(a);
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
        return c.k(b, e, L(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.w = 2;
  b.n = c.n;
  b.g = function(a) {
    return a;
  };
  b.h = a;
  b.k = c.k;
  return b;
}();
function me(a) {
  return null == a || db(D(a));
}
function ne(a) {
  return null == a ? !1 : a ? a.q & 8 || a.Gf ? !0 : a.q ? !1 : fb(nb, a) : fb(nb, a);
}
function oe(a) {
  return null == a ? !1 : a ? a.q & 4096 || a.Kf ? !0 : a.q ? !1 : fb(Wb, a) : fb(Wb, a);
}
function pe(a) {
  return a ? a.q & 16777216 || a.Jf ? !0 : a.q ? !1 : fb(uc, a) : fb(uc, a);
}
function qe(a) {
  return null == a ? !1 : a ? a.q & 1024 || a.Hf ? !0 : a.q ? !1 : fb(Hb, a) : fb(Hb, a);
}
function re(a) {
  return a ? a.q & 16384 || a.Lf ? !0 : a.q ? !1 : fb(ec, a) : fb(ec, a);
}
function T(a) {
  return a ? a.G & 512 || a.Ff ? !0 : !1 : !1;
}
function se(a) {
  var b = [];
  Da(a, function(a, b) {
    return function(a, c) {
      return b.push(c);
    };
  }(a, b));
  return b;
}
function te(a, b, c, d, e) {
  for (;0 !== e;) {
    c[d] = a[b], d += 1, e -= 1, b += 1;
  }
}
function ue(a, b, c, d, e) {
  b += e - 1;
  for (d += e - 1;0 !== e;) {
    c[d] = a[b], d -= 1, e -= 1, b -= 1;
  }
}
var ve = {};
function we(a) {
  return null == a ? !1 : a ? a.q & 64 || a.lc ? !0 : a.q ? !1 : fb(rb, a) : fb(rb, a);
}
function xe(a) {
  return q(a) ? !0 : !1;
}
function ye(a, b) {
  return Q.j(a, b, ve) === ve ? !1 : !0;
}
function ze(a, b) {
  var c;
  if (c = null != a) {
    c = a ? a.q & 512 || a.Ef ? !0 : a.q ? !1 : fb(Db, a) : fb(Db, a);
  }
  return c && ye(a, b) ? new U(null, 2, 5, V, [b, Q.h(a, b)], null) : null;
}
function zd(a, b) {
  if (a === b) {
    return 0;
  }
  if (null == a) {
    return-1;
  }
  if (null == b) {
    return 1;
  }
  if (gb(a) === gb(b)) {
    return a && (a.G & 2048 || a.xc) ? a.yc(null, b) : Ta(a, b);
  }
  throw Error("compare on non-nil objects of different types");
}
var Ae = function() {
  function a(a, b, c, g) {
    for (;;) {
      var h = zd(P.h(a, g), P.h(b, g));
      if (0 === h && g + 1 < c) {
        g += 1;
      } else {
        return h;
      }
    }
  }
  function b(a, b) {
    var f = O(a), g = O(b);
    return f < g ? -1 : f > g ? 1 : c.m(a, b, f, 0);
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
  c.m = a;
  return c;
}();
function Be(a) {
  return B.h(a, zd) ? zd : function(b, c) {
    var d = a.h ? a.h(b, c) : a.call(null, b, c);
    return "number" === typeof d ? d : q(d) ? -1 : q(a.h ? a.h(c, b) : a.call(null, c, b)) ? 1 : 0;
  };
}
var Te = function() {
  function a(a, b) {
    if (D(b)) {
      var c = Ce.g ? Ce.g(b) : Ce.call(null, b), g = Be(a);
      Va(c, g);
      return D(c);
    }
    return Dd;
  }
  function b(a) {
    return c.h(zd, a);
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
}(), Ue = function() {
  function a(a, b, c) {
    return Te.h(function(c, f) {
      return Be(b).call(null, a.g ? a.g(c) : a.call(null, c), a.g ? a.g(f) : a.call(null, f));
    }, c);
  }
  function b(a, b) {
    return c.j(a, zd, b);
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
}(), Wd = function() {
  function a(a, b, c) {
    for (c = D(c);;) {
      if (c) {
        var g = E(c);
        b = a.h ? a.h(b, g) : a.call(null, b, g);
        if (Md(b)) {
          return gc(b);
        }
        c = H(c);
      } else {
        return b;
      }
    }
  }
  function b(a, b) {
    var c = D(b);
    if (c) {
      var g = E(c), c = H(c);
      return Ve.j ? Ve.j(a, g, c) : Ve.call(null, a, g, c);
    }
    return a.p ? a.p() : a.call(null);
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
}(), Ve = function() {
  function a(a, b, c) {
    return c && (c.q & 524288 || c.xe) ? c.da(null, a, b) : c instanceof Array ? Od.j(c, a, b) : "string" === typeof c ? Od.j(c, a, b) : fb(nc, c) ? oc.j(c, a, b) : Wd.j(a, b, c);
  }
  function b(a, b) {
    return b && (b.q & 524288 || b.xe) ? b.ca(null, a) : b instanceof Array ? Od.h(b, a) : "string" === typeof b ? Od.h(b, a) : fb(nc, b) ? oc.h(b, a) : Wd.h(a, b);
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
function We(a, b, c) {
  return null != c ? pc(c, a, b) : b;
}
function Xe(a) {
  return a;
}
var Ye = function() {
  function a(a, b, c, g) {
    a = a.g ? a.g(b) : a.call(null, b);
    c = Ve.j(a, c, g);
    return a.g ? a.g(c) : a.call(null, c);
  }
  function b(a, b, f) {
    return c.m(a, b, b.p ? b.p() : b.call(null), f);
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
  c.m = a;
  return c;
}(), Ze = function() {
  var a = null, b = function() {
    function b(a, c, g) {
      var h = null;
      2 < arguments.length && (h = L(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, a, c, h);
    }
    function d(b, c, d) {
      return Ve.j(a, b + c, d);
    }
    b.w = 2;
    b.n = function(a) {
      var b = E(a);
      a = H(a);
      var c = E(a);
      a = F(a);
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
        return b.k(a, d, L(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.w = 2;
  a.n = b.n;
  a.p = function() {
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
}(), $e = function() {
  var a = null, b = function() {
    function b(a, c, g) {
      var h = null;
      2 < arguments.length && (h = L(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, a, c, h);
    }
    function d(b, c, d) {
      return Ve.j(a, b * c, d);
    }
    b.w = 2;
    b.n = function(a) {
      var b = E(a);
      a = H(a);
      var c = E(a);
      a = F(a);
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
        return b.k(a, d, L(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.w = 2;
  a.n = b.n;
  a.p = function() {
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
}();
function af(a) {
  return a - 1;
}
var bf = function() {
  function a(a, b) {
    return a > b ? a : b;
  }
  var b = null, c = function() {
    function a(b, d, h) {
      var l = null;
      2 < arguments.length && (l = L(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      return Ve.j(b, a > d ? a : d, e);
    }
    a.w = 2;
    a.n = function(a) {
      var b = E(a);
      a = H(a);
      var d = E(a);
      a = F(a);
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
        return c.k(b, e, L(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.w = 2;
  b.n = c.n;
  b.g = function(a) {
    return a;
  };
  b.h = a;
  b.k = c.k;
  return b;
}(), cf = function() {
  function a(a, b) {
    return a < b ? a : b;
  }
  var b = null, c = function() {
    function a(b, d, h) {
      var l = null;
      2 < arguments.length && (l = L(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      return Ve.j(b, a < d ? a : d, e);
    }
    a.w = 2;
    a.n = function(a) {
      var b = E(a);
      a = H(a);
      var d = E(a);
      a = F(a);
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
        return c.k(b, e, L(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.w = 2;
  b.n = c.n;
  b.g = function(a) {
    return a;
  };
  b.h = a;
  b.k = c.k;
  return b;
}();
function df(a) {
  return 0 <= a ? Math.floor.g ? Math.floor.g(a) : Math.floor.call(null, a) : Math.ceil.g ? Math.ceil.g(a) : Math.ceil.call(null, a);
}
function ef(a) {
  return df(a);
}
function ff(a, b) {
  return df((a - a % b) / b);
}
var xf = function() {
  function a(a) {
    return a * c.p();
  }
  function b() {
    return Math.random.p ? Math.random.p() : Math.random.call(null);
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
  c.p = b;
  c.g = a;
  return c;
}();
function yf(a) {
  return df(xf.g(a));
}
function zf(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24;
}
function Af(a) {
  var b = 1;
  for (a = D(a);;) {
    if (a && 0 < b) {
      b -= 1, a = H(a);
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
      1 < arguments.length && (h = L(Array.prototype.slice.call(arguments, 1), 0));
      return c.call(this, b, h);
    }
    function c(a, d) {
      for (var e = new Ia(b.g(a)), l = d;;) {
        if (q(l)) {
          e = e.append(b.g(E(l))), l = H(l);
        } else {
          return e.toString();
        }
      }
    }
    a.w = 1;
    a.n = function(a) {
      var b = E(a);
      a = F(a);
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
        return c.k(b, L(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.w = 1;
  b.n = c.n;
  b.p = function() {
    return "";
  };
  b.g = a;
  b.k = c.k;
  return b;
}(), Bf = function() {
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
function Sd(a, b) {
  var c;
  if (pe(b)) {
    if (Pd(a) && Pd(b) && O(a) !== O(b)) {
      c = !1;
    } else {
      a: {
        c = D(a);
        for (var d = D(b);;) {
          if (null == c) {
            c = null == d;
            break a;
          }
          if (null != d && B.h(E(c), E(d))) {
            c = H(c), d = H(d);
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
  return xe(c);
}
function Cf(a) {
  var b = 0;
  for (a = D(a);;) {
    if (a) {
      var c = E(a), b = (b + (wd(function() {
        var a = c;
        return Df.g ? Df.g(a) : Df.call(null, a);
      }()) ^ wd(function() {
        var a = c;
        return Ef.g ? Ef.g(a) : Ef.call(null, a);
      }()))) % 4503599627370496;
      a = H(a);
    } else {
      return b;
    }
  }
}
function Ff(a, b, c, d, e) {
  this.C = a;
  this.first = b;
  this.ub = c;
  this.count = d;
  this.A = e;
  this.q = 65937646;
  this.G = 8192;
}
k = Ff.prototype;
k.toString = function() {
  return dd(this);
};
k.I = function() {
  return this.C;
};
k.ja = function() {
  return 1 === this.count ? null : this.ub;
};
k.T = function() {
  return this.count;
};
k.xb = function() {
  return this.first;
};
k.P = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Id(this);
};
k.M = function(a, b) {
  return Sd(this, b);
};
k.Y = function() {
  return Dd;
};
k.ca = function(a, b) {
  return Wd.h(b, this);
};
k.da = function(a, b, c) {
  return Wd.j(b, c, this);
};
k.aa = function() {
  return this.first;
};
k.ga = function() {
  return 1 === this.count ? Dd : this.ub;
};
k.Q = function() {
  return this;
};
k.J = function(a, b) {
  return new Ff(b, this.first, this.ub, this.count, this.A);
};
k.S = function(a, b) {
  return new Ff(this.C, b, this, this.count + 1, null);
};
function Gf(a) {
  this.C = a;
  this.q = 65937614;
  this.G = 8192;
}
k = Gf.prototype;
k.toString = function() {
  return dd(this);
};
k.I = function() {
  return this.C;
};
k.ja = function() {
  return null;
};
k.T = function() {
  return 0;
};
k.xb = function() {
  return null;
};
k.P = function() {
  return 0;
};
k.M = function(a, b) {
  return Sd(this, b);
};
k.Y = function() {
  return this;
};
k.ca = function(a, b) {
  return Wd.h(b, this);
};
k.da = function(a, b, c) {
  return Wd.j(b, c, this);
};
k.aa = function() {
  return null;
};
k.ga = function() {
  return Dd;
};
k.Q = function() {
  return null;
};
k.J = function(a, b) {
  return new Gf(b);
};
k.S = function(a, b) {
  return new Ff(this.C, b, null, 1, null);
};
var Dd = new Gf(null);
function Hf(a) {
  return(a ? a.q & 134217728 || a.If || (a.q ? 0 : fb(vc, a)) : fb(vc, a)) ? Ac(a) : Ve.j($d, Dd, a);
}
var If = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = L(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b;
    if (a instanceof Cd && 0 === a.H) {
      b = a.l;
    } else {
      a: {
        for (b = [];;) {
          if (null != a) {
            b.push(a.aa(null)), a = a.ja(null);
          } else {
            break a;
          }
        }
        b = void 0;
      }
    }
    a = b.length;
    for (var e = Dd;;) {
      if (0 < a) {
        var f = a - 1, e = e.S(null, b[a - 1]);
        a = f;
      } else {
        return e;
      }
    }
  }
  a.w = 0;
  a.n = function(a) {
    a = D(a);
    return b(a);
  };
  a.k = b;
  return a;
}();
function Jf(a, b, c, d) {
  this.C = a;
  this.first = b;
  this.ub = c;
  this.A = d;
  this.q = 65929452;
  this.G = 8192;
}
k = Jf.prototype;
k.toString = function() {
  return dd(this);
};
k.I = function() {
  return this.C;
};
k.ja = function() {
  return null == this.ub ? null : D(this.ub);
};
k.P = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Id(this);
};
k.M = function(a, b) {
  return Sd(this, b);
};
k.Y = function() {
  return Vd(Dd, this.C);
};
k.ca = function(a, b) {
  return Wd.h(b, this);
};
k.da = function(a, b, c) {
  return Wd.j(b, c, this);
};
k.aa = function() {
  return this.first;
};
k.ga = function() {
  return null == this.ub ? Dd : this.ub;
};
k.Q = function() {
  return this;
};
k.J = function(a, b) {
  return new Jf(b, this.first, this.ub, this.A);
};
k.S = function(a, b) {
  return new Jf(null, b, this, this.A);
};
function Td(a, b) {
  var c = null == b;
  return(c ? c : b && (b.q & 64 || b.lc)) ? new Jf(null, a, b, null) : new Jf(null, a, D(b), null);
}
function W(a, b, c, d) {
  this.Ya = a;
  this.name = b;
  this.$ = c;
  this.Sb = d;
  this.q = 2153775105;
  this.G = 4096;
}
k = W.prototype;
k.N = function(a, b) {
  return Bc(b, ":" + u.g(this.$));
};
k.P = function() {
  var a = this.Sb;
  return null != a ? a : this.Sb = a = xd(sd(this.name), vd(this.Ya)) + 2654435769 | 0;
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
  return this.call.apply(this, [this].concat(ib(b)));
};
k.g = function(a) {
  return Q.h(a, this);
};
k.h = function(a, b) {
  return Q.j(a, this, b);
};
k.M = function(a, b) {
  return b instanceof W ? this.$ === b.$ : !1;
};
k.toString = function() {
  return ":" + u.g(this.$);
};
function X(a, b) {
  return a === b ? !0 : a instanceof W && b instanceof W ? a.$ === b.$ : !1;
}
var Lf = function() {
  function a(a, b) {
    return new W(a, b, "" + u.g(q(a) ? "" + u.g(a) + "/" : null) + u.g(b), null);
  }
  function b(a) {
    if (a instanceof W) {
      return a;
    }
    if (a instanceof Ad) {
      var b;
      if (a && (a.G & 4096 || a.we)) {
        b = a.Ya;
      } else {
        throw Error("Doesn't support namespace: " + u.g(a));
      }
      return new W(b, Kf.g ? Kf.g(a) : Kf.call(null, a), a.Db, null);
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
function Mf(a, b, c, d) {
  this.C = a;
  this.dc = b;
  this.Z = c;
  this.A = d;
  this.G = 0;
  this.q = 32374988;
}
k = Mf.prototype;
k.toString = function() {
  return dd(this);
};
function Nf(a) {
  null != a.dc && (a.Z = a.dc.p ? a.dc.p() : a.dc.call(null), a.dc = null);
  return a.Z;
}
k.I = function() {
  return this.C;
};
k.ja = function() {
  tc(this);
  return null == this.Z ? null : H(this.Z);
};
k.P = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Id(this);
};
k.M = function(a, b) {
  return Sd(this, b);
};
k.Y = function() {
  return Vd(Dd, this.C);
};
k.ca = function(a, b) {
  return Wd.h(b, this);
};
k.da = function(a, b, c) {
  return Wd.j(b, c, this);
};
k.aa = function() {
  tc(this);
  return null == this.Z ? null : E(this.Z);
};
k.ga = function() {
  tc(this);
  return null != this.Z ? F(this.Z) : Dd;
};
k.Q = function() {
  Nf(this);
  if (null == this.Z) {
    return null;
  }
  for (var a = this.Z;;) {
    if (a instanceof Mf) {
      a = Nf(a);
    } else {
      return this.Z = a, D(this.Z);
    }
  }
};
k.J = function(a, b) {
  return new Mf(b, this.dc, this.Z, this.A);
};
k.S = function(a, b) {
  return Td(b, this);
};
function Of(a, b) {
  this.ua = a;
  this.end = b;
  this.G = 0;
  this.q = 2;
}
Of.prototype.T = function() {
  return this.end;
};
Of.prototype.add = function(a) {
  this.ua[this.end] = a;
  return this.end += 1;
};
Of.prototype.R = function() {
  var a = new Pf(this.ua, 0, this.end);
  this.ua = null;
  return a;
};
function Uf(a) {
  return new Of(Array(a), 0);
}
function Pf(a, b, c) {
  this.l = a;
  this.ha = b;
  this.end = c;
  this.G = 0;
  this.q = 524306;
}
k = Pf.prototype;
k.ca = function(a, b) {
  return Od.m(this.l, b, this.l[this.ha], this.ha + 1);
};
k.da = function(a, b, c) {
  return Od.m(this.l, b, c, this.ha);
};
k.Ad = function() {
  if (this.ha === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new Pf(this.l, this.ha + 1, this.end);
};
k.D = function(a, b) {
  return this.l[this.ha + b];
};
k.oa = function(a, b, c) {
  return 0 <= b && b < this.end - this.ha ? this.l[this.ha + b] : c;
};
k.T = function() {
  return this.end - this.ha;
};
var Vf = function() {
  function a(a, b, c) {
    return new Pf(a, b, c);
  }
  function b(a, b) {
    return new Pf(a, b, a.length);
  }
  function c(a) {
    return new Pf(a, 0, a.length);
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
function Wf(a, b, c, d) {
  this.R = a;
  this.Pa = b;
  this.C = c;
  this.A = d;
  this.q = 31850732;
  this.G = 1536;
}
k = Wf.prototype;
k.toString = function() {
  return dd(this);
};
k.I = function() {
  return this.C;
};
k.ja = function() {
  if (1 < lb(this.R)) {
    return new Wf(Qc(this.R), this.Pa, this.C, null);
  }
  var a = tc(this.Pa);
  return null == a ? null : a;
};
k.P = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Id(this);
};
k.M = function(a, b) {
  return Sd(this, b);
};
k.Y = function() {
  return Vd(Dd, this.C);
};
k.aa = function() {
  return v.h(this.R, 0);
};
k.ga = function() {
  return 1 < lb(this.R) ? new Wf(Qc(this.R), this.Pa, this.C, null) : null == this.Pa ? Dd : this.Pa;
};
k.Q = function() {
  return this;
};
k.Sc = function() {
  return this.R;
};
k.Tc = function() {
  return null == this.Pa ? Dd : this.Pa;
};
k.J = function(a, b) {
  return new Wf(this.R, this.Pa, b, this.A);
};
k.S = function(a, b) {
  return Td(b, this);
};
k.Rc = function() {
  return null == this.Pa ? null : this.Pa;
};
function Xf(a, b) {
  return 0 === lb(a) ? b : new Wf(a, b, null, null);
}
function Yf(a, b) {
  a.add(b);
}
function Ce(a) {
  for (var b = [];;) {
    if (D(a)) {
      b.push(E(a)), a = H(a);
    } else {
      return b;
    }
  }
}
function Zf(a, b) {
  if (Pd(a)) {
    return O(a);
  }
  for (var c = a, d = b, e = 0;;) {
    if (0 < d && D(c)) {
      c = H(c), d -= 1, e += 1;
    } else {
      return e;
    }
  }
}
var ag = function $f(b) {
  return null == b ? null : null == H(b) ? D(E(b)) : Td(E(b), $f(H(b)));
}, bg = function() {
  function a(a, b) {
    return new Mf(null, function() {
      var c = D(a);
      return c ? T(c) ? Xf(x(c), d.h(z(c), b)) : Td(E(c), d.h(F(c), b)) : b;
    }, null, null);
  }
  function b(a) {
    return new Mf(null, function() {
      return a;
    }, null, null);
  }
  function c() {
    return new Mf(null, function() {
      return null;
    }, null, null);
  }
  var d = null, e = function() {
    function a(c, d, e) {
      var f = null;
      2 < arguments.length && (f = L(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, f);
    }
    function b(a, c, e) {
      return function s(a, b) {
        return new Mf(null, function() {
          var c = D(a);
          return c ? T(c) ? Xf(x(c), s(z(c), b)) : Td(E(c), s(F(c), b)) : q(b) ? s(E(b), H(b)) : null;
        }, null, null);
      }(d.h(a, c), e);
    }
    a.w = 2;
    a.n = function(a) {
      var c = E(a);
      a = H(a);
      var d = E(a);
      a = F(a);
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
        return e.k(d, g, L(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.w = 2;
  d.n = e.n;
  d.p = c;
  d.g = b;
  d.h = a;
  d.k = e.k;
  return d;
}(), cg = function() {
  function a(a, b, c, d) {
    return Td(a, Td(b, Td(c, d)));
  }
  function b(a, b, c) {
    return Td(a, Td(b, c));
  }
  var c = null, d = function() {
    function a(c, d, e, m, r) {
      var s = null;
      4 < arguments.length && (s = L(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, m, s);
    }
    function b(a, c, d, e, f) {
      return Td(a, Td(c, Td(d, Td(e, ag(f)))));
    }
    a.w = 4;
    a.n = function(a) {
      var c = E(a);
      a = H(a);
      var d = E(a);
      a = H(a);
      var e = E(a);
      a = H(a);
      var r = E(a);
      a = F(a);
      return b(c, d, e, r, a);
    };
    a.k = b;
    return a;
  }(), c = function(c, f, g, h, l) {
    switch(arguments.length) {
      case 1:
        return D(c);
      case 2:
        return Td(c, f);
      case 3:
        return b.call(this, c, f, g);
      case 4:
        return a.call(this, c, f, g, h);
      default:
        return d.k(c, f, g, h, L(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.w = 4;
  c.n = d.n;
  c.g = function(a) {
    return D(a);
  };
  c.h = function(a, b) {
    return Td(a, b);
  };
  c.j = b;
  c.m = a;
  c.k = d.k;
  return c;
}();
function dg(a) {
  return Lc(a);
}
function eg(a) {
  return Nc(a);
}
var fg = function() {
  function a() {
    return Lc(Zd);
  }
  var b = null, c = function() {
    function a(c, d, h) {
      var l = null;
      2 < arguments.length && (l = L(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      for (;;) {
        if (a = Mc(a, c), q(d)) {
          c = E(d), d = H(d);
        } else {
          return a;
        }
      }
    }
    a.w = 2;
    a.n = function(a) {
      var c = E(a);
      a = H(a);
      var d = E(a);
      a = F(a);
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
        return Mc(b, e);
      default:
        return c.k(b, e, L(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.w = 2;
  b.n = c.n;
  b.p = a;
  b.g = function(a) {
    return a;
  };
  b.h = function(a, b) {
    return Mc(a, b);
  };
  b.k = c.k;
  return b;
}(), gg = function() {
  var a = null, b = function() {
    function a(c, f, g, h) {
      var l = null;
      3 < arguments.length && (l = L(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, f, g, l);
    }
    function b(a, c, d, h) {
      for (;;) {
        if (a = Oc(a, c, d), q(h)) {
          c = E(h), d = Xd(h), h = H(H(h));
        } else {
          return a;
        }
      }
    }
    a.w = 3;
    a.n = function(a) {
      var c = E(a);
      a = H(a);
      var g = E(a);
      a = H(a);
      var h = E(a);
      a = F(a);
      return b(c, g, h, a);
    };
    a.k = b;
    return a;
  }(), a = function(a, d, e, f) {
    switch(arguments.length) {
      case 3:
        return Oc(a, d, e);
      default:
        return b.k(a, d, e, L(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.w = 3;
  a.n = b.n;
  a.j = function(a, b, e) {
    return Oc(a, b, e);
  };
  a.k = b.k;
  return a;
}();
function hg(a, b, c) {
  var d = D(c);
  if (0 === b) {
    return a.p ? a.p() : a.call(null);
  }
  c = ub(d);
  var e = yb(d);
  if (1 === b) {
    return a.g ? a.g(c) : a.g ? a.g(c) : a.call(null, c);
  }
  var d = ub(e), f = yb(e);
  if (2 === b) {
    return a.h ? a.h(c, d) : a.h ? a.h(c, d) : a.call(null, c, d);
  }
  var e = ub(f), g = yb(f);
  if (3 === b) {
    return a.j ? a.j(c, d, e) : a.j ? a.j(c, d, e) : a.call(null, c, d, e);
  }
  var f = ub(g), h = yb(g);
  if (4 === b) {
    return a.m ? a.m(c, d, e, f) : a.m ? a.m(c, d, e, f) : a.call(null, c, d, e, f);
  }
  var g = ub(h), l = yb(h);
  if (5 === b) {
    return a.O ? a.O(c, d, e, f, g) : a.O ? a.O(c, d, e, f, g) : a.call(null, c, d, e, f, g);
  }
  var h = ub(l), m = yb(l);
  if (6 === b) {
    return a.ia ? a.ia(c, d, e, f, g, h) : a.ia ? a.ia(c, d, e, f, g, h) : a.call(null, c, d, e, f, g, h);
  }
  var l = ub(m), r = yb(m);
  if (7 === b) {
    return a.Aa ? a.Aa(c, d, e, f, g, h, l) : a.Aa ? a.Aa(c, d, e, f, g, h, l) : a.call(null, c, d, e, f, g, h, l);
  }
  var m = ub(r), s = yb(r);
  if (8 === b) {
    return a.pb ? a.pb(c, d, e, f, g, h, l, m) : a.pb ? a.pb(c, d, e, f, g, h, l, m) : a.call(null, c, d, e, f, g, h, l, m);
  }
  var r = ub(s), w = yb(s);
  if (9 === b) {
    return a.qb ? a.qb(c, d, e, f, g, h, l, m, r) : a.qb ? a.qb(c, d, e, f, g, h, l, m, r) : a.call(null, c, d, e, f, g, h, l, m, r);
  }
  var s = ub(w), A = yb(w);
  if (10 === b) {
    return a.eb ? a.eb(c, d, e, f, g, h, l, m, r, s) : a.eb ? a.eb(c, d, e, f, g, h, l, m, r, s) : a.call(null, c, d, e, f, g, h, l, m, r, s);
  }
  var w = ub(A), y = yb(A);
  if (11 === b) {
    return a.fb ? a.fb(c, d, e, f, g, h, l, m, r, s, w) : a.fb ? a.fb(c, d, e, f, g, h, l, m, r, s, w) : a.call(null, c, d, e, f, g, h, l, m, r, s, w);
  }
  var A = ub(y), C = yb(y);
  if (12 === b) {
    return a.gb ? a.gb(c, d, e, f, g, h, l, m, r, s, w, A) : a.gb ? a.gb(c, d, e, f, g, h, l, m, r, s, w, A) : a.call(null, c, d, e, f, g, h, l, m, r, s, w, A);
  }
  var y = ub(C), G = yb(C);
  if (13 === b) {
    return a.hb ? a.hb(c, d, e, f, g, h, l, m, r, s, w, A, y) : a.hb ? a.hb(c, d, e, f, g, h, l, m, r, s, w, A, y) : a.call(null, c, d, e, f, g, h, l, m, r, s, w, A, y);
  }
  var C = ub(G), I = yb(G);
  if (14 === b) {
    return a.ib ? a.ib(c, d, e, f, g, h, l, m, r, s, w, A, y, C) : a.ib ? a.ib(c, d, e, f, g, h, l, m, r, s, w, A, y, C) : a.call(null, c, d, e, f, g, h, l, m, r, s, w, A, y, C);
  }
  var G = ub(I), N = yb(I);
  if (15 === b) {
    return a.jb ? a.jb(c, d, e, f, g, h, l, m, r, s, w, A, y, C, G) : a.jb ? a.jb(c, d, e, f, g, h, l, m, r, s, w, A, y, C, G) : a.call(null, c, d, e, f, g, h, l, m, r, s, w, A, y, C, G);
  }
  var I = ub(N), K = yb(N);
  if (16 === b) {
    return a.kb ? a.kb(c, d, e, f, g, h, l, m, r, s, w, A, y, C, G, I) : a.kb ? a.kb(c, d, e, f, g, h, l, m, r, s, w, A, y, C, G, I) : a.call(null, c, d, e, f, g, h, l, m, r, s, w, A, y, C, G, I);
  }
  var N = ub(K), da = yb(K);
  if (17 === b) {
    return a.lb ? a.lb(c, d, e, f, g, h, l, m, r, s, w, A, y, C, G, I, N) : a.lb ? a.lb(c, d, e, f, g, h, l, m, r, s, w, A, y, C, G, I, N) : a.call(null, c, d, e, f, g, h, l, m, r, s, w, A, y, C, G, I, N);
  }
  var K = ub(da), ea = yb(da);
  if (18 === b) {
    return a.mb ? a.mb(c, d, e, f, g, h, l, m, r, s, w, A, y, C, G, I, N, K) : a.mb ? a.mb(c, d, e, f, g, h, l, m, r, s, w, A, y, C, G, I, N, K) : a.call(null, c, d, e, f, g, h, l, m, r, s, w, A, y, C, G, I, N, K);
  }
  da = ub(ea);
  ea = yb(ea);
  if (19 === b) {
    return a.nb ? a.nb(c, d, e, f, g, h, l, m, r, s, w, A, y, C, G, I, N, K, da) : a.nb ? a.nb(c, d, e, f, g, h, l, m, r, s, w, A, y, C, G, I, N, K, da) : a.call(null, c, d, e, f, g, h, l, m, r, s, w, A, y, C, G, I, N, K, da);
  }
  var J = ub(ea);
  yb(ea);
  if (20 === b) {
    return a.ob ? a.ob(c, d, e, f, g, h, l, m, r, s, w, A, y, C, G, I, N, K, da, J) : a.ob ? a.ob(c, d, e, f, g, h, l, m, r, s, w, A, y, C, G, I, N, K, da, J) : a.call(null, c, d, e, f, g, h, l, m, r, s, w, A, y, C, G, I, N, K, da, J);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var S = function() {
  function a(a, b, c, d, e) {
    b = cg.m(b, c, d, e);
    c = a.w;
    return a.n ? (d = Zf(b, c + 1), d <= c ? hg(a, d, b) : a.n(b)) : a.apply(a, Ce(b));
  }
  function b(a, b, c, d) {
    b = cg.j(b, c, d);
    c = a.w;
    return a.n ? (d = Zf(b, c + 1), d <= c ? hg(a, d, b) : a.n(b)) : a.apply(a, Ce(b));
  }
  function c(a, b, c) {
    b = cg.h(b, c);
    c = a.w;
    if (a.n) {
      var d = Zf(b, c + 1);
      return d <= c ? hg(a, d, b) : a.n(b);
    }
    return a.apply(a, Ce(b));
  }
  function d(a, b) {
    var c = a.w;
    if (a.n) {
      var d = Zf(b, c + 1);
      return d <= c ? hg(a, d, b) : a.n(b);
    }
    return a.apply(a, Ce(b));
  }
  var e = null, f = function() {
    function a(c, d, e, f, g, A) {
      var y = null;
      5 < arguments.length && (y = L(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, e, f, g, y);
    }
    function b(a, c, d, e, f, g) {
      c = Td(c, Td(d, Td(e, Td(f, ag(g)))));
      d = a.w;
      return a.n ? (e = Zf(c, d + 1), e <= d ? hg(a, e, c) : a.n(c)) : a.apply(a, Ce(c));
    }
    a.w = 5;
    a.n = function(a) {
      var c = E(a);
      a = H(a);
      var d = E(a);
      a = H(a);
      var e = E(a);
      a = H(a);
      var f = E(a);
      a = H(a);
      var g = E(a);
      a = F(a);
      return b(c, d, e, f, g, a);
    };
    a.k = b;
    return a;
  }(), e = function(e, h, l, m, r, s) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, h);
      case 3:
        return c.call(this, e, h, l);
      case 4:
        return b.call(this, e, h, l, m);
      case 5:
        return a.call(this, e, h, l, m, r);
      default:
        return f.k(e, h, l, m, r, L(arguments, 5));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.w = 5;
  e.n = f.n;
  e.h = d;
  e.j = c;
  e.m = b;
  e.O = a;
  e.k = f.k;
  return e;
}(), ig = function() {
  function a(a, b, c, d, e, f) {
    var g = Vd, y = je(a);
    b = b.O ? b.O(y, c, d, e, f) : b.call(null, y, c, d, e, f);
    return g(a, b);
  }
  function b(a, b, c, d, e) {
    var f = Vd, g = je(a);
    b = b.m ? b.m(g, c, d, e) : b.call(null, g, c, d, e);
    return f(a, b);
  }
  function c(a, b, c, d) {
    var e = Vd, f = je(a);
    b = b.j ? b.j(f, c, d) : b.call(null, f, c, d);
    return e(a, b);
  }
  function d(a, b, c) {
    var d = Vd, e = je(a);
    b = b.h ? b.h(e, c) : b.call(null, e, c);
    return d(a, b);
  }
  function e(a, b) {
    var c = Vd, d;
    d = je(a);
    d = b.g ? b.g(d) : b.call(null, d);
    return c(a, d);
  }
  var f = null, g = function() {
    function a(c, d, e, f, g, h, C) {
      var G = null;
      6 < arguments.length && (G = L(Array.prototype.slice.call(arguments, 6), 0));
      return b.call(this, c, d, e, f, g, h, G);
    }
    function b(a, c, d, e, f, g, h) {
      return Vd(a, S.k(c, je(a), d, e, f, L([g, h], 0)));
    }
    a.w = 6;
    a.n = function(a) {
      var c = E(a);
      a = H(a);
      var d = E(a);
      a = H(a);
      var e = E(a);
      a = H(a);
      var f = E(a);
      a = H(a);
      var g = E(a);
      a = H(a);
      var h = E(a);
      a = F(a);
      return b(c, d, e, f, g, h, a);
    };
    a.k = b;
    return a;
  }(), f = function(f, l, m, r, s, w, A) {
    switch(arguments.length) {
      case 2:
        return e.call(this, f, l);
      case 3:
        return d.call(this, f, l, m);
      case 4:
        return c.call(this, f, l, m, r);
      case 5:
        return b.call(this, f, l, m, r, s);
      case 6:
        return a.call(this, f, l, m, r, s, w);
      default:
        return g.k(f, l, m, r, s, w, L(arguments, 6));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  f.w = 6;
  f.n = g.n;
  f.h = e;
  f.j = d;
  f.m = c;
  f.O = b;
  f.ia = a;
  f.k = g.k;
  return f;
}(), jg = function() {
  function a(a, b) {
    return!B.h(a, b);
  }
  var b = null, c = function() {
    function a(c, d, h) {
      var l = null;
      2 < arguments.length && (l = L(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      return db(S.m(B, a, c, d));
    }
    a.w = 2;
    a.n = function(a) {
      var c = E(a);
      a = H(a);
      var d = E(a);
      a = F(a);
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
        return c.k(b, e, L(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.w = 2;
  b.n = c.n;
  b.g = function() {
    return!1;
  };
  b.h = a;
  b.k = c.k;
  return b;
}();
function kg(a) {
  return D(a) ? a : null;
}
function lg(a, b) {
  for (;;) {
    if (null == D(b)) {
      return!0;
    }
    var c;
    c = E(b);
    c = a.g ? a.g(c) : a.call(null, c);
    if (q(c)) {
      c = a;
      var d = H(b);
      a = c;
      b = d;
    } else {
      return!1;
    }
  }
}
function mg(a, b) {
  for (;;) {
    if (D(b)) {
      var c;
      c = E(b);
      c = a.g ? a.g(c) : a.call(null, c);
      if (q(c)) {
        return c;
      }
      c = a;
      var d = H(b);
      a = c;
      b = d;
    } else {
      return null;
    }
  }
}
function ng(a) {
  if ("number" === typeof a && db(isNaN(a)) && Infinity !== a && parseFloat(a) === parseInt(a, 10)) {
    return 0 === (a & 1);
  }
  throw Error("Argument must be an integer: " + u.g(a));
}
function og(a) {
  return function() {
    function b(b, c) {
      return db(a.h ? a.h(b, c) : a.call(null, b, c));
    }
    function c(b) {
      return db(a.g ? a.g(b) : a.call(null, b));
    }
    function d() {
      return db(a.p ? a.p() : a.call(null));
    }
    var e = null, f = function() {
      function b(a, d, e) {
        var f = null;
        2 < arguments.length && (f = L(Array.prototype.slice.call(arguments, 2), 0));
        return c.call(this, a, d, f);
      }
      function c(b, d, e) {
        return db(S.m(a, b, d, e));
      }
      b.w = 2;
      b.n = function(a) {
        var b = E(a);
        a = H(a);
        var d = E(a);
        a = F(a);
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
          return f.k(a, e, L(arguments, 2));
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    e.w = 2;
    e.n = f.n;
    e.p = d;
    e.g = c;
    e.h = b;
    e.k = f.k;
    return e;
  }();
}
function pg(a) {
  return function() {
    function b(b) {
      0 < arguments.length && L(Array.prototype.slice.call(arguments, 0), 0);
      return a;
    }
    b.w = 0;
    b.n = function(b) {
      D(b);
      return a;
    };
    b.k = function() {
      return a;
    };
    return b;
  }();
}
var qg = function() {
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
      function m(d) {
        d = c.g ? c.g(d) : c.call(null, d);
        d = b.g ? b.g(d) : b.call(null, d);
        return a.g ? a.g(d) : a.call(null, d);
      }
      function r() {
        var d;
        d = c.p ? c.p() : c.call(null);
        d = b.g ? b.g(d) : b.call(null, d);
        return a.g ? a.g(d) : a.call(null, d);
      }
      var s = null, w = function() {
        function d(a, b, c, e) {
          var f = null;
          3 < arguments.length && (f = L(Array.prototype.slice.call(arguments, 3), 0));
          return h.call(this, a, b, c, f);
        }
        function h(d, l, r, m) {
          d = S.O(c, d, l, r, m);
          d = b.g ? b.g(d) : b.call(null, d);
          return a.g ? a.g(d) : a.call(null, d);
        }
        d.w = 3;
        d.n = function(a) {
          var b = E(a);
          a = H(a);
          var c = E(a);
          a = H(a);
          var d = E(a);
          a = F(a);
          return h(b, c, d, a);
        };
        d.k = h;
        return d;
      }(), s = function(a, b, c, e) {
        switch(arguments.length) {
          case 0:
            return r.call(this);
          case 1:
            return m.call(this, a);
          case 2:
            return l.call(this, a, b);
          case 3:
            return d.call(this, a, b, c);
          default:
            return w.k(a, b, c, L(arguments, 3));
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      s.w = 3;
      s.n = w.n;
      s.p = r;
      s.g = m;
      s.h = l;
      s.j = d;
      s.k = w.k;
      return s;
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
      function m() {
        var c = b.p ? b.p() : b.call(null);
        return a.g ? a.g(c) : a.call(null, c);
      }
      var r = null, s = function() {
        function c(a, b, e, f) {
          var g = null;
          3 < arguments.length && (g = L(Array.prototype.slice.call(arguments, 3), 0));
          return d.call(this, a, b, e, g);
        }
        function d(c, g, h, l) {
          c = S.O(b, c, g, h, l);
          return a.g ? a.g(c) : a.call(null, c);
        }
        c.w = 3;
        c.n = function(a) {
          var b = E(a);
          a = H(a);
          var c = E(a);
          a = H(a);
          var e = E(a);
          a = F(a);
          return d(b, c, e, a);
        };
        c.k = d;
        return c;
      }(), r = function(a, b, e, f) {
        switch(arguments.length) {
          case 0:
            return m.call(this);
          case 1:
            return l.call(this, a);
          case 2:
            return d.call(this, a, b);
          case 3:
            return c.call(this, a, b, e);
          default:
            return s.k(a, b, e, L(arguments, 3));
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      r.w = 3;
      r.n = s.n;
      r.p = m;
      r.g = l;
      r.h = d;
      r.j = c;
      r.k = s.k;
      return r;
    }();
  }
  var c = null, d = function() {
    function a(c, d, e, m) {
      var r = null;
      3 < arguments.length && (r = L(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, d, e, r);
    }
    function b(a, c, d, e) {
      return function(a) {
        return function() {
          function b(a) {
            var d = null;
            0 < arguments.length && (d = L(Array.prototype.slice.call(arguments, 0), 0));
            return c.call(this, d);
          }
          function c(b) {
            b = S.h(E(a), b);
            for (var d = H(a);;) {
              if (d) {
                b = E(d).call(null, b), d = H(d);
              } else {
                return b;
              }
            }
          }
          b.w = 0;
          b.n = function(a) {
            a = D(a);
            return c(a);
          };
          b.k = c;
          return b;
        }();
      }(Hf(cg.m(a, c, d, e)));
    }
    a.w = 3;
    a.n = function(a) {
      var c = E(a);
      a = H(a);
      var d = E(a);
      a = H(a);
      var e = E(a);
      a = F(a);
      return b(c, d, e, a);
    };
    a.k = b;
    return a;
  }(), c = function(c, f, g, h) {
    switch(arguments.length) {
      case 0:
        return Xe;
      case 1:
        return c;
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, g);
      default:
        return d.k(c, f, g, L(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.w = 3;
  c.n = d.n;
  c.p = function() {
    return Xe;
  };
  c.g = function(a) {
    return a;
  };
  c.h = b;
  c.j = a;
  c.k = d.k;
  return c;
}(), rg = function() {
  function a(a, b, c, d) {
    return function() {
      function e(a) {
        var b = null;
        0 < arguments.length && (b = L(Array.prototype.slice.call(arguments, 0), 0));
        return r.call(this, b);
      }
      function r(e) {
        return S.O(a, b, c, d, e);
      }
      e.w = 0;
      e.n = function(a) {
        a = D(a);
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
        0 < arguments.length && (b = L(Array.prototype.slice.call(arguments, 0), 0));
        return e.call(this, b);
      }
      function e(d) {
        return S.m(a, b, c, d);
      }
      d.w = 0;
      d.n = function(a) {
        a = D(a);
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
        0 < arguments.length && (b = L(Array.prototype.slice.call(arguments, 0), 0));
        return d.call(this, b);
      }
      function d(c) {
        return S.j(a, b, c);
      }
      c.w = 0;
      c.n = function(a) {
        a = D(a);
        return d(a);
      };
      c.k = d;
      return c;
    }();
  }
  var d = null, e = function() {
    function a(c, d, e, f, s) {
      var w = null;
      4 < arguments.length && (w = L(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, w);
    }
    function b(a, c, d, e, f) {
      return function() {
        function b(a) {
          var c = null;
          0 < arguments.length && (c = L(Array.prototype.slice.call(arguments, 0), 0));
          return g.call(this, c);
        }
        function g(b) {
          return S.O(a, c, d, e, bg.h(f, b));
        }
        b.w = 0;
        b.n = function(a) {
          a = D(a);
          return g(a);
        };
        b.k = g;
        return b;
      }();
    }
    a.w = 4;
    a.n = function(a) {
      var c = E(a);
      a = H(a);
      var d = E(a);
      a = H(a);
      var e = E(a);
      a = H(a);
      var f = E(a);
      a = F(a);
      return b(c, d, e, f, a);
    };
    a.k = b;
    return a;
  }(), d = function(d, g, h, l, m) {
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
        return e.k(d, g, h, l, L(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.w = 4;
  d.n = e.n;
  d.g = function(a) {
    return a;
  };
  d.h = c;
  d.j = b;
  d.m = a;
  d.k = e.k;
  return d;
}();
function sg(a, b) {
  return function d(b, f) {
    return new Mf(null, function() {
      var g = D(f);
      if (g) {
        if (T(g)) {
          for (var h = x(g), l = O(h), m = Uf(l), r = 0;;) {
            if (r < l) {
              Yf(m, function() {
                var d = b + r, f = v.h(h, r);
                return a.h ? a.h(d, f) : a.call(null, d, f);
              }()), r += 1;
            } else {
              break;
            }
          }
          return Xf(m.R(), d(b + l, z(g)));
        }
        return Td(function() {
          var d = E(g);
          return a.h ? a.h(b, d) : a.call(null, b, d);
        }(), d(b + 1, F(g)));
      }
      return null;
    }, null, null);
  }(0, b);
}
var tg = function() {
  function a(a, b) {
    return new Mf(null, function() {
      var f = D(b);
      if (f) {
        if (T(f)) {
          for (var g = x(f), h = O(g), l = Uf(h), m = 0;;) {
            if (m < h) {
              var r = function() {
                var b = v.h(g, m);
                return a.g ? a.g(b) : a.call(null, b);
              }();
              null != r && l.add(r);
              m += 1;
            } else {
              break;
            }
          }
          return Xf(l.R(), c.h(a, z(f)));
        }
        h = function() {
          var b = E(f);
          return a.g ? a.g(b) : a.call(null, b);
        }();
        return null == h ? c.h(a, F(f)) : Td(h, c.h(a, F(f)));
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
          return b.p ? b.p() : b.call(null);
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
        l.p = h;
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
function ug(a, b, c, d) {
  this.state = a;
  this.C = b;
  this.zf = c;
  this.ba = d;
  this.q = 6455296;
  this.G = 16386;
}
k = ug.prototype;
k.P = function() {
  return this[ka] || (this[ka] = ++la);
};
k.Vc = function(a, b, c) {
  for (var d = D(this.ba), e = null, f = 0, g = 0;;) {
    if (g < f) {
      a = e.D(null, g);
      var h = P.j(a, 0, null);
      a = P.j(a, 1, null);
      var l = b, m = c;
      a.m ? a.m(h, this, l, m) : a.call(null, h, this, l, m);
      g += 1;
    } else {
      if (a = D(d)) {
        d = a, T(d) ? (e = x(d), d = z(d), a = e, f = O(e), e = a) : (a = E(d), h = P.j(a, 0, null), a = P.j(a, 1, null), e = h, f = b, g = c, a.m ? a.m(e, this, f, g) : a.call(null, e, this, f, g), d = H(d), e = null, f = 0), g = 0;
      } else {
        return null;
      }
    }
  }
};
k.Uc = function(a, b, c) {
  this.ba = R.j(this.ba, b, c);
  return this;
};
k.Wc = function(a, b) {
  return this.ba = ge.h(this.ba, b);
};
k.I = function() {
  return this.C;
};
k.Vb = function() {
  return this.state;
};
k.M = function(a, b) {
  return this === b;
};
var xg = function() {
  function a(a) {
    return new ug(a, null, null, null);
  }
  var b = null, c = function() {
    function a(c, d) {
      var h = null;
      1 < arguments.length && (h = L(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, h);
    }
    function b(a, c) {
      var d = we(c) ? S.h(vg, c) : c, e = Q.h(d, wg), d = Q.h(d, $a);
      return new ug(a, d, e, null);
    }
    a.w = 1;
    a.n = function(a) {
      var c = E(a);
      a = F(a);
      return b(c, a);
    };
    a.k = b;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.k(b, L(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.w = 1;
  b.n = c.n;
  b.g = a;
  b.k = c.k;
  return b;
}();
function yg(a, b) {
  if (a instanceof ug) {
    var c = a.zf;
    if (null != c && !q(c.g ? c.g(b) : c.call(null, b))) {
      throw Error("Assert failed: Validator rejected reference state\n" + u.g(function() {
        var a = If(new Ad(null, "validate", "validate", 1439230700, null), new Ad(null, "new-value", "new-value", -1567397401, null));
        return zg.g ? zg.g(a) : zg.call(null, a);
      }()));
    }
    c = a.state;
    a.state = b;
    null != a.ba && Ec(a, c, b);
    return b;
  }
  return $c(a, b);
}
var Ag = function() {
  function a(a, b, c, d) {
    if (a instanceof ug) {
      var e = a.state;
      b = b.j ? b.j(e, c, d) : b.call(null, e, c, d);
      a = yg(a, b);
    } else {
      a = bd.m(a, b, c, d);
    }
    return a;
  }
  function b(a, b, c) {
    if (a instanceof ug) {
      var d = a.state;
      b = b.h ? b.h(d, c) : b.call(null, d, c);
      a = yg(a, b);
    } else {
      a = bd.j(a, b, c);
    }
    return a;
  }
  function c(a, b) {
    var c;
    a instanceof ug ? (c = a.state, c = b.g ? b.g(c) : b.call(null, c), c = yg(a, c)) : c = bd.h(a, b);
    return c;
  }
  var d = null, e = function() {
    function a(c, d, e, f, s) {
      var w = null;
      4 < arguments.length && (w = L(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, w);
    }
    function b(a, c, d, e, f) {
      return a instanceof ug ? yg(a, S.O(c, a.state, d, e, f)) : bd.O(a, c, d, e, f);
    }
    a.w = 4;
    a.n = function(a) {
      var c = E(a);
      a = H(a);
      var d = E(a);
      a = H(a);
      var e = E(a);
      a = H(a);
      var f = E(a);
      a = F(a);
      return b(c, d, e, f, a);
    };
    a.k = b;
    return a;
  }(), d = function(d, g, h, l, m) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, g);
      case 3:
        return b.call(this, d, g, h);
      case 4:
        return a.call(this, d, g, h, l);
      default:
        return e.k(d, g, h, l, L(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.w = 4;
  d.n = e.n;
  d.h = c;
  d.j = b;
  d.m = a;
  d.k = e.k;
  return d;
}(), Bg = function() {
  function a(a, b) {
    return function g(b, c) {
      return new Mf(null, function() {
        var e = D(c);
        if (e) {
          if (T(e)) {
            for (var r = x(e), s = O(r), w = Uf(s), A = 0;;) {
              if (A < s) {
                var y = function() {
                  var c = b + A, e = v.h(r, A);
                  return a.h ? a.h(c, e) : a.call(null, c, e);
                }();
                null != y && w.add(y);
                A += 1;
              } else {
                break;
              }
            }
            return Xf(w.R(), g(b + s, z(e)));
          }
          s = function() {
            var c = E(e);
            return a.h ? a.h(b, c) : a.call(null, b, c);
          }();
          return null == s ? g(b + 1, F(e)) : Td(s, g(b + 1, F(e)));
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
            var l = Ag.h(c, Kd), l = a.h ? a.h(l, h) : a.call(null, l, h);
            return null == l ? g : b.h ? b.h(g, l) : b.call(null, g, l);
          }
          function h(a) {
            return b.g ? b.g(a) : b.call(null, a);
          }
          function l() {
            return b.p ? b.p() : b.call(null);
          }
          var m = null, m = function(a, b) {
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
          m.p = l;
          m.g = h;
          m.h = g;
          return m;
        }();
      }(xg.g(-1));
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
}(), Cg = function() {
  function a(a, b, c, d) {
    return new Mf(null, function() {
      var f = D(b), s = D(c), w = D(d);
      if (f && s && w) {
        var A = Td, y;
        y = E(f);
        var C = E(s), G = E(w);
        y = a.j ? a.j(y, C, G) : a.call(null, y, C, G);
        f = A(y, e.m(a, F(f), F(s), F(w)));
      } else {
        f = null;
      }
      return f;
    }, null, null);
  }
  function b(a, b, c) {
    return new Mf(null, function() {
      var d = D(b), f = D(c);
      if (d && f) {
        var s = Td, w;
        w = E(d);
        var A = E(f);
        w = a.h ? a.h(w, A) : a.call(null, w, A);
        d = s(w, e.j(a, F(d), F(f)));
      } else {
        d = null;
      }
      return d;
    }, null, null);
  }
  function c(a, b) {
    return new Mf(null, function() {
      var c = D(b);
      if (c) {
        if (T(c)) {
          for (var d = x(c), f = O(d), s = Uf(f), w = 0;;) {
            if (w < f) {
              Yf(s, function() {
                var b = v.h(d, w);
                return a.g ? a.g(b) : a.call(null, b);
              }()), w += 1;
            } else {
              break;
            }
          }
          return Xf(s.R(), e.h(a, z(c)));
        }
        return Td(function() {
          var b = E(c);
          return a.g ? a.g(b) : a.call(null, b);
        }(), e.h(a, F(c)));
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
          return b.p ? b.p() : b.call(null);
        }
        var f = null, w = function() {
          function c(a, b, e) {
            var f = null;
            2 < arguments.length && (f = L(Array.prototype.slice.call(arguments, 2), 0));
            return d.call(this, a, b, f);
          }
          function d(c, e, f) {
            e = S.j(a, e, f);
            return b.h ? b.h(c, e) : b.call(null, c, e);
          }
          c.w = 2;
          c.n = function(a) {
            var b = E(a);
            a = H(a);
            var c = E(a);
            a = F(a);
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
              return w.k(a, b, L(arguments, 2));
          }
          throw Error("Invalid arity: " + arguments.length);
        };
        f.w = 2;
        f.n = w.n;
        f.p = e;
        f.g = d;
        f.h = c;
        f.k = w.k;
        return f;
      }();
    };
  }
  var e = null, f = function() {
    function a(c, d, e, f, g) {
      var A = null;
      4 < arguments.length && (A = L(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, A);
    }
    function b(a, c, d, f, g) {
      var h = function C(a) {
        return new Mf(null, function() {
          var b = e.h(D, a);
          return lg(Xe, b) ? Td(e.h(E, b), C(e.h(F, b))) : null;
        }, null, null);
      };
      return e.h(function() {
        return function(b) {
          return S.h(a, b);
        };
      }(h), h($d.k(g, f, L([d, c], 0))));
    }
    a.w = 4;
    a.n = function(a) {
      var c = E(a);
      a = H(a);
      var d = E(a);
      a = H(a);
      var e = E(a);
      a = H(a);
      var f = E(a);
      a = F(a);
      return b(c, d, e, f, a);
    };
    a.k = b;
    return a;
  }(), e = function(e, h, l, m, r) {
    switch(arguments.length) {
      case 1:
        return d.call(this, e);
      case 2:
        return c.call(this, e, h);
      case 3:
        return b.call(this, e, h, l);
      case 4:
        return a.call(this, e, h, l, m);
      default:
        return f.k(e, h, l, m, L(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.w = 4;
  e.n = f.n;
  e.g = d;
  e.h = c;
  e.j = b;
  e.m = a;
  e.k = f.k;
  return e;
}(), Dg = function() {
  function a(a, b) {
    return new Mf(null, function() {
      if (0 < a) {
        var f = D(b);
        return f ? Td(E(f), c.h(a - 1, F(f))) : null;
      }
      return null;
    }, null, null);
  }
  function b(a) {
    return function(b) {
      return function(a) {
        return function() {
          function c(d, g) {
            var h = gc(a), l = Ag.h(a, af), h = 0 < h ? b.h ? b.h(d, g) : b.call(null, d, g) : d;
            return 0 < l ? h : new Ld(h);
          }
          function d(a) {
            return b.g ? b.g(a) : b.call(null, a);
          }
          function l() {
            return b.p ? b.p() : b.call(null);
          }
          var m = null, m = function(a, b) {
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
          m.p = l;
          m.g = d;
          m.h = c;
          return m;
        }();
      }(xg.g(a));
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
}(), Eg = function() {
  function a(a, b) {
    return new Mf(null, function(c) {
      return function() {
        return c(a, b);
      };
    }(function(a, b) {
      for (;;) {
        var c = D(b);
        if (0 < a && c) {
          var d = a - 1, c = F(c);
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
            var h = gc(a);
            Ag.h(a, af);
            return 0 < h ? d : b.h ? b.h(d, g) : b.call(null, d, g);
          }
          function d(a) {
            return b.g ? b.g(a) : b.call(null, a);
          }
          function l() {
            return b.p ? b.p() : b.call(null);
          }
          var m = null, m = function(a, b) {
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
          m.p = l;
          m.g = d;
          m.h = c;
          return m;
        }();
      }(xg.g(a));
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
}(), Fg = function() {
  function a(a, b) {
    return Dg.h(a, c.g(b));
  }
  function b(a) {
    return new Mf(null, function() {
      return Td(a, c.g(a));
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
}(), Gg = function() {
  function a(a, b) {
    return Dg.h(a, c.g(b));
  }
  function b(a) {
    return new Mf(null, function() {
      return Td(a.p ? a.p() : a.call(null), c.g(a));
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
}(), Vg = function Ug(b, c) {
  return Td(c, new Mf(null, function() {
    return Ug(b, b.g ? b.g(c) : b.call(null, c));
  }, null, null));
}, Wg = function() {
  function a(a, c) {
    return new Mf(null, function() {
      var f = D(a), g = D(c);
      return f && g ? Td(E(f), Td(E(g), b.h(F(f), F(g)))) : null;
    }, null, null);
  }
  var b = null, c = function() {
    function a(b, d, h) {
      var l = null;
      2 < arguments.length && (l = L(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      return new Mf(null, function() {
        var c = Cg.h(D, $d.k(e, d, L([a], 0)));
        return lg(Xe, c) ? bg.h(Cg.h(E, c), S.h(b, Cg.h(F, c))) : null;
      }, null, null);
    }
    a.w = 2;
    a.n = function(a) {
      var b = E(a);
      a = H(a);
      var d = E(a);
      a = F(a);
      return c(b, d, a);
    };
    a.k = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.k(b, e, L(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.w = 2;
  b.n = c.n;
  b.h = a;
  b.k = c.k;
  return b;
}();
function Xg(a, b) {
  return Eg.h(1, Wg.h(Fg.g(a), b));
}
var Zg = function() {
  function a(a) {
    return qg.h(Cg.g(a), Yg);
  }
  var b = null, c = function() {
    function a(c, d) {
      var h = null;
      1 < arguments.length && (h = L(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, h);
    }
    function b(a, c) {
      return S.h(bg, S.j(Cg, a, c));
    }
    a.w = 1;
    a.n = function(a) {
      var c = E(a);
      a = F(a);
      return b(c, a);
    };
    a.k = b;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.k(b, L(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.w = 1;
  b.n = c.n;
  b.g = a;
  b.k = c.k;
  return b;
}(), $g = function() {
  function a(a, b) {
    return new Mf(null, function() {
      var f = D(b);
      if (f) {
        if (T(f)) {
          for (var g = x(f), h = O(g), l = Uf(h), m = 0;;) {
            if (m < h) {
              var r;
              r = v.h(g, m);
              r = a.g ? a.g(r) : a.call(null, r);
              q(r) && (r = v.h(g, m), l.add(r));
              m += 1;
            } else {
              break;
            }
          }
          return Xf(l.R(), c.h(a, z(f)));
        }
        g = E(f);
        f = F(f);
        return q(a.g ? a.g(g) : a.call(null, g)) ? Td(g, c.h(a, f)) : c.h(a, f);
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
          return b.p ? b.p() : b.call(null);
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
        l.p = h;
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
}(), ah = function() {
  function a(a, b) {
    return $g.h(og(a), b);
  }
  function b(a) {
    return $g.g(og(a));
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
function bh(a, b, c) {
  return function e(c) {
    return new Mf(null, function() {
      return Td(c, q(a.g ? a.g(c) : a.call(null, c)) ? Zg.k(e, L([b.g ? b.g(c) : b.call(null, c)], 0)) : null);
    }, null, null);
  }(c);
}
function ch(a) {
  return $g.h(function(a) {
    return!pe(a);
  }, F(bh(pe, D, a)));
}
var dh = function() {
  function a(a, b, c) {
    return a && (a.G & 4 || a.re) ? Vd(eg(Ye.m(b, fg, Lc(a), c)), je(a)) : Ye.m(b, $d, a, c);
  }
  function b(a, b) {
    return null != a ? a && (a.G & 4 || a.re) ? Vd(eg(Ve.j(Mc, Lc(a), b)), je(a)) : Ve.j(ob, a, b) : Ve.j($d, Dd, b);
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
}(), eh = function() {
  function a(a, b, c, d) {
    return dh.h(Zd, Cg.m(a, b, c, d));
  }
  function b(a, b, c) {
    return dh.h(Zd, Cg.j(a, b, c));
  }
  function c(a, b) {
    return eg(Ve.j(function(b, c) {
      return fg.h(b, a.g ? a.g(c) : a.call(null, c));
    }, Lc(Zd), b));
  }
  var d = null, e = function() {
    function a(c, d, e, f, s) {
      var w = null;
      4 < arguments.length && (w = L(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, w);
    }
    function b(a, c, d, e, f) {
      return dh.h(Zd, S.k(Cg, a, c, d, e, L([f], 0)));
    }
    a.w = 4;
    a.n = function(a) {
      var c = E(a);
      a = H(a);
      var d = E(a);
      a = H(a);
      var e = E(a);
      a = H(a);
      var f = E(a);
      a = F(a);
      return b(c, d, e, f, a);
    };
    a.k = b;
    return a;
  }(), d = function(d, g, h, l, m) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, g);
      case 3:
        return b.call(this, d, g, h);
      case 4:
        return a.call(this, d, g, h, l);
      default:
        return e.k(d, g, h, l, L(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.w = 4;
  d.n = e.n;
  d.h = c;
  d.j = b;
  d.m = a;
  d.k = e.k;
  return d;
}(), fh = function() {
  function a(a, b, c, h) {
    return new Mf(null, function() {
      var l = D(h);
      if (l) {
        var m = Dg.h(a, l);
        return a === O(m) ? Td(m, d.m(a, b, c, Eg.h(b, l))) : ob(Dd, Dg.h(a, bg.h(m, c)));
      }
      return null;
    }, null, null);
  }
  function b(a, b, c) {
    return new Mf(null, function() {
      var h = D(c);
      if (h) {
        var l = Dg.h(a, h);
        return a === O(l) ? Td(l, d.j(a, b, Eg.h(b, h))) : null;
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
  d.m = a;
  return d;
}(), gh = function() {
  function a(a, b, c) {
    var g = ve;
    for (b = D(b);;) {
      if (b) {
        var h = a;
        if (h ? h.q & 256 || h.Cd || (h.q ? 0 : fb(Bb, h)) : fb(Bb, h)) {
          a = Q.j(a, E(b), g);
          if (g === a) {
            return c;
          }
          b = H(b);
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
}(), ih = function hh(b, c, d) {
  var e = P.j(c, 0, null);
  return(c = Af(c)) ? R.j(b, e, hh(Q.h(b, e), c, d)) : R.j(b, e, d);
}, jh = function() {
  function a(a, b, c, d, f, s) {
    var w = P.j(b, 0, null);
    return(b = Af(b)) ? R.j(a, w, e.ia(Q.h(a, w), b, c, d, f, s)) : R.j(a, w, function() {
      var b = Q.h(a, w);
      return c.m ? c.m(b, d, f, s) : c.call(null, b, d, f, s);
    }());
  }
  function b(a, b, c, d, f) {
    var s = P.j(b, 0, null);
    return(b = Af(b)) ? R.j(a, s, e.O(Q.h(a, s), b, c, d, f)) : R.j(a, s, function() {
      var b = Q.h(a, s);
      return c.j ? c.j(b, d, f) : c.call(null, b, d, f);
    }());
  }
  function c(a, b, c, d) {
    var f = P.j(b, 0, null);
    return(b = Af(b)) ? R.j(a, f, e.m(Q.h(a, f), b, c, d)) : R.j(a, f, function() {
      var b = Q.h(a, f);
      return c.h ? c.h(b, d) : c.call(null, b, d);
    }());
  }
  function d(a, b, c) {
    var d = P.j(b, 0, null);
    return(b = Af(b)) ? R.j(a, d, e.j(Q.h(a, d), b, c)) : R.j(a, d, function() {
      var b = Q.h(a, d);
      return c.g ? c.g(b) : c.call(null, b);
    }());
  }
  var e = null, f = function() {
    function a(c, d, e, f, g, A, y) {
      var C = null;
      6 < arguments.length && (C = L(Array.prototype.slice.call(arguments, 6), 0));
      return b.call(this, c, d, e, f, g, A, C);
    }
    function b(a, c, d, f, g, h, y) {
      var C = P.j(c, 0, null);
      return(c = Af(c)) ? R.j(a, C, S.k(e, Q.h(a, C), c, d, f, L([g, h, y], 0))) : R.j(a, C, S.k(d, Q.h(a, C), f, g, h, L([y], 0)));
    }
    a.w = 6;
    a.n = function(a) {
      var c = E(a);
      a = H(a);
      var d = E(a);
      a = H(a);
      var e = E(a);
      a = H(a);
      var f = E(a);
      a = H(a);
      var g = E(a);
      a = H(a);
      var y = E(a);
      a = F(a);
      return b(c, d, e, f, g, y, a);
    };
    a.k = b;
    return a;
  }(), e = function(e, h, l, m, r, s, w) {
    switch(arguments.length) {
      case 3:
        return d.call(this, e, h, l);
      case 4:
        return c.call(this, e, h, l, m);
      case 5:
        return b.call(this, e, h, l, m, r);
      case 6:
        return a.call(this, e, h, l, m, r, s);
      default:
        return f.k(e, h, l, m, r, s, L(arguments, 6));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.w = 6;
  e.n = f.n;
  e.j = d;
  e.m = c;
  e.O = b;
  e.ia = a;
  e.k = f.k;
  return e;
}();
function kh(a, b) {
  this.V = a;
  this.l = b;
}
function lh(a) {
  return new kh(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function mh(a) {
  a = a.t;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function nh(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = lh(a);
    d.l[0] = c;
    c = d;
    b -= 5;
  }
}
var ph = function oh(b, c, d, e) {
  var f = new kh(d.V, ib(d.l)), g = b.t - 1 >>> c & 31;
  5 === c ? f.l[g] = e : (d = d.l[g], b = null != d ? oh(b, c - 5, d, e) : nh(null, c - 5, e), f.l[g] = b);
  return f;
};
function qh(a, b) {
  throw Error("No item " + u.g(a) + " in vector of length " + u.g(b));
}
function rh(a, b) {
  if (b >= mh(a)) {
    return a.U;
  }
  for (var c = a.root, d = a.shift;;) {
    if (0 < d) {
      var e = d - 5, c = c.l[b >>> d & 31], d = e
    } else {
      return c.l;
    }
  }
}
function sh(a, b) {
  return 0 <= b && b < a.t ? rh(a, b) : qh(b, a.t);
}
var uh = function th(b, c, d, e, f) {
  var g = new kh(d.V, ib(d.l));
  if (0 === c) {
    g.l[e & 31] = f;
  } else {
    var h = e >>> c & 31;
    b = th(b, c - 5, d.l[h], e, f);
    g.l[h] = b;
  }
  return g;
};
function U(a, b, c, d, e, f) {
  this.C = a;
  this.t = b;
  this.shift = c;
  this.root = d;
  this.U = e;
  this.A = f;
  this.q = 167668511;
  this.G = 8196;
}
k = U.prototype;
k.toString = function() {
  return dd(this);
};
k.K = function(a, b) {
  return Cb.j(this, b, null);
};
k.L = function(a, b, c) {
  return "number" === typeof b ? v.j(this, b, c) : c;
};
k.hc = function(a, b, c) {
  a = [0, c];
  for (c = 0;;) {
    if (c < this.t) {
      var d = rh(this, c), e = d.length;
      a: {
        for (var f = 0, g = a[1];;) {
          if (f < e) {
            var h = f + c, l = d[f], g = b.j ? b.j(g, h, l) : b.call(null, g, h, l);
            if (Md(g)) {
              d = g;
              break a;
            }
            f += 1;
          } else {
            a[0] = e;
            d = a[1] = g;
            break a;
          }
        }
        d = void 0;
      }
      if (Md(d)) {
        return b = d, M.g ? M.g(b) : M.call(null, b);
      }
      c += a[0];
    } else {
      return a[1];
    }
  }
};
k.D = function(a, b) {
  return sh(this, b)[b & 31];
};
k.oa = function(a, b, c) {
  return 0 <= b && b < this.t ? rh(this, b)[b & 31] : c;
};
k.Hb = function(a, b, c) {
  if (0 <= b && b < this.t) {
    return mh(this) <= b ? (a = ib(this.U), a[b & 31] = c, new U(this.C, this.t, this.shift, this.root, a, null)) : new U(this.C, this.t, this.shift, uh(this, this.shift, this.root, b, c), this.U, null);
  }
  if (b === this.t) {
    return ob(this, c);
  }
  throw Error("Index " + u.g(b) + " out of bounds  [0," + u.g(this.t) + "]");
};
k.I = function() {
  return this.C;
};
k.T = function() {
  return this.t;
};
k.ic = function() {
  return v.h(this, 0);
};
k.jc = function() {
  return v.h(this, 1);
};
k.xb = function() {
  return 0 < this.t ? v.h(this, this.t - 1) : null;
};
k.kc = function() {
  return 0 < this.t ? new Rd(this, this.t - 1, null) : null;
};
k.P = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Id(this);
};
k.M = function(a, b) {
  return Sd(this, b);
};
k.Wb = function() {
  var a = this;
  return new vh(a.t, a.shift, function() {
    var b = a.root;
    return wh.g ? wh.g(b) : wh.call(null, b);
  }(), function() {
    var b = a.U;
    return xh.g ? xh.g(b) : xh.call(null, b);
  }());
};
k.Y = function() {
  return Vd(Zd, this.C);
};
k.ca = function(a, b) {
  return Nd.h(this, b);
};
k.da = function(a, b, c) {
  return Nd.j(this, b, c);
};
k.va = function(a, b, c) {
  if ("number" === typeof b) {
    return fc(this, b, c);
  }
  throw Error("Vector's key for assoc must be a number.");
};
k.Q = function() {
  if (0 === this.t) {
    return null;
  }
  if (32 >= this.t) {
    return new Cd(this.U, 0);
  }
  var a;
  a: {
    a = this.root;
    for (var b = this.shift;;) {
      if (0 < b) {
        b -= 5, a = a.l[0];
      } else {
        a = a.l;
        break a;
      }
    }
    a = void 0;
  }
  return yh.m ? yh.m(this, a, 0, 0) : yh.call(null, this, a, 0, 0);
};
k.J = function(a, b) {
  return new U(b, this.t, this.shift, this.root, this.U, this.A);
};
k.S = function(a, b) {
  if (32 > this.t - mh(this)) {
    for (var c = this.U.length, d = Array(c + 1), e = 0;;) {
      if (e < c) {
        d[e] = this.U[e], e += 1;
      } else {
        break;
      }
    }
    d[c] = b;
    return new U(this.C, this.t + 1, this.shift, this.root, d, null);
  }
  c = (d = this.t >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = lh(null), d.l[0] = this.root, e = nh(null, this.shift, new kh(null, this.U)), d.l[1] = e) : d = ph(this, this.shift, this.root, new kh(null, this.U));
  return new U(this.C, this.t + 1, c, d, [b], null);
};
k.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.D(null, c);
      case 3:
        return this.oa(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.h = function(a, c) {
    return this.D(null, c);
  };
  a.j = function(a, c, d) {
    return this.oa(null, c, d);
  };
  return a;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ib(b)));
};
k.g = function(a) {
  return this.D(null, a);
};
k.h = function(a, b) {
  return this.oa(null, a, b);
};
var V = new kh(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), Zd = new U(null, 0, 5, V, [], 0);
function zh(a) {
  return Nc(Ve.j(Mc, Lc(Zd), a));
}
var Ah = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = L(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    if (a instanceof Cd && 0 === a.H) {
      a: {
        a = a.l;
        var b = a.length;
        if (32 > b) {
          a = new U(null, b, 5, V, a, null);
        } else {
          for (var e = 32, f = (new U(null, 32, 5, V, a.slice(0, 32), null)).Wb(null);;) {
            if (e < b) {
              var g = e + 1, f = fg.h(f, a[e]), e = g
            } else {
              a = Nc(f);
              break a;
            }
          }
          a = void 0;
        }
      }
    } else {
      a = zh(a);
    }
    return a;
  }
  a.w = 0;
  a.n = function(a) {
    a = D(a);
    return b(a);
  };
  a.k = b;
  return a;
}();
function Bh(a, b, c, d, e, f) {
  this.Ja = a;
  this.tb = b;
  this.H = c;
  this.ha = d;
  this.C = e;
  this.A = f;
  this.q = 32375020;
  this.G = 1536;
}
k = Bh.prototype;
k.toString = function() {
  return dd(this);
};
k.I = function() {
  return this.C;
};
k.ja = function() {
  if (this.ha + 1 < this.tb.length) {
    var a;
    a = this.Ja;
    var b = this.tb, c = this.H, d = this.ha + 1;
    a = yh.m ? yh.m(a, b, c, d) : yh.call(null, a, b, c, d);
    return null == a ? null : a;
  }
  return Rc(this);
};
k.P = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Id(this);
};
k.M = function(a, b) {
  return Sd(this, b);
};
k.Y = function() {
  return Vd(Zd, this.C);
};
k.ca = function(a, b) {
  var c = this;
  return Nd.h(function() {
    var a = c.Ja, b = c.H + c.ha, f = O(c.Ja);
    return Ch.j ? Ch.j(a, b, f) : Ch.call(null, a, b, f);
  }(), b);
};
k.da = function(a, b, c) {
  var d = this;
  return Nd.j(function() {
    var a = d.Ja, b = d.H + d.ha, c = O(d.Ja);
    return Ch.j ? Ch.j(a, b, c) : Ch.call(null, a, b, c);
  }(), b, c);
};
k.aa = function() {
  return this.tb[this.ha];
};
k.ga = function() {
  if (this.ha + 1 < this.tb.length) {
    var a;
    a = this.Ja;
    var b = this.tb, c = this.H, d = this.ha + 1;
    a = yh.m ? yh.m(a, b, c, d) : yh.call(null, a, b, c, d);
    return null == a ? Dd : a;
  }
  return z(this);
};
k.Q = function() {
  return this;
};
k.Sc = function() {
  return Vf.h(this.tb, this.ha);
};
k.Tc = function() {
  var a = this.H + this.tb.length;
  if (a < lb(this.Ja)) {
    var b = this.Ja, c = rh(this.Ja, a);
    return yh.m ? yh.m(b, c, a, 0) : yh.call(null, b, c, a, 0);
  }
  return Dd;
};
k.J = function(a, b) {
  var c = this.Ja, d = this.tb, e = this.H, f = this.ha;
  return yh.O ? yh.O(c, d, e, f, b) : yh.call(null, c, d, e, f, b);
};
k.S = function(a, b) {
  return Td(b, this);
};
k.Rc = function() {
  var a = this.H + this.tb.length;
  if (a < lb(this.Ja)) {
    var b = this.Ja, c = rh(this.Ja, a);
    return yh.m ? yh.m(b, c, a, 0) : yh.call(null, b, c, a, 0);
  }
  return null;
};
var yh = function() {
  function a(a, b, c, d, l) {
    return new Bh(a, b, c, d, l, null);
  }
  function b(a, b, c, d) {
    return new Bh(a, b, c, d, null, null);
  }
  function c(a, b, c) {
    return new Bh(a, sh(a, b), b, c, null, null);
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
  d.m = b;
  d.O = a;
  return d;
}();
function Dh(a, b, c, d, e) {
  this.C = a;
  this.Eb = b;
  this.start = c;
  this.end = d;
  this.A = e;
  this.q = 166617887;
  this.G = 8192;
}
k = Dh.prototype;
k.toString = function() {
  return dd(this);
};
k.K = function(a, b) {
  return Cb.j(this, b, null);
};
k.L = function(a, b, c) {
  return "number" === typeof b ? v.j(this, b, c) : c;
};
k.D = function(a, b) {
  return 0 > b || this.end <= this.start + b ? qh(b, this.end - this.start) : v.h(this.Eb, this.start + b);
};
k.oa = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : v.j(this.Eb, this.start + b, c);
};
k.Hb = function(a, b, c) {
  var d = this.start + b;
  a = this.C;
  c = R.j(this.Eb, d, c);
  b = this.start;
  var e = this.end, d = d + 1, d = e > d ? e : d;
  return Eh.O ? Eh.O(a, c, b, d, null) : Eh.call(null, a, c, b, d, null);
};
k.I = function() {
  return this.C;
};
k.T = function() {
  return this.end - this.start;
};
k.xb = function() {
  return v.h(this.Eb, this.end - 1);
};
k.kc = function() {
  return this.start !== this.end ? new Rd(this, this.end - this.start - 1, null) : null;
};
k.P = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Id(this);
};
k.M = function(a, b) {
  return Sd(this, b);
};
k.Y = function() {
  return Vd(Zd, this.C);
};
k.ca = function(a, b) {
  return Nd.h(this, b);
};
k.da = function(a, b, c) {
  return Nd.j(this, b, c);
};
k.va = function(a, b, c) {
  if ("number" === typeof b) {
    return fc(this, b, c);
  }
  throw Error("Subvec's key for assoc must be a number.");
};
k.Q = function() {
  var a = this;
  return function(b) {
    return function d(e) {
      return e === a.end ? null : Td(v.h(a.Eb, e), new Mf(null, function() {
        return function() {
          return d(e + 1);
        };
      }(b), null, null));
    };
  }(this)(a.start);
};
k.J = function(a, b) {
  var c = this.Eb, d = this.start, e = this.end, f = this.A;
  return Eh.O ? Eh.O(b, c, d, e, f) : Eh.call(null, b, c, d, e, f);
};
k.S = function(a, b) {
  var c = this.C, d = fc(this.Eb, this.end, b), e = this.start, f = this.end + 1;
  return Eh.O ? Eh.O(c, d, e, f, null) : Eh.call(null, c, d, e, f, null);
};
k.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.D(null, c);
      case 3:
        return this.oa(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.h = function(a, c) {
    return this.D(null, c);
  };
  a.j = function(a, c, d) {
    return this.oa(null, c, d);
  };
  return a;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ib(b)));
};
k.g = function(a) {
  return this.D(null, a);
};
k.h = function(a, b) {
  return this.oa(null, a, b);
};
function Eh(a, b, c, d, e) {
  for (;;) {
    if (b instanceof Dh) {
      c = b.start + c, d = b.start + d, b = b.Eb;
    } else {
      var f = O(b);
      if (0 > c || 0 > d || c > f || d > f) {
        throw Error("Index out of bounds");
      }
      return new Dh(a, b, c, d, e);
    }
  }
}
var Ch = function() {
  function a(a, b, c) {
    return Eh(null, a, b, c, null);
  }
  function b(a, b) {
    return c.j(a, b, O(a));
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
function Fh(a, b) {
  return a === b.V ? b : new kh(a, ib(b.l));
}
function wh(a) {
  return new kh({}, ib(a.l));
}
function xh(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  te(a, 0, b, 0, a.length);
  return b;
}
var Hh = function Gh(b, c, d, e) {
  d = Fh(b.root.V, d);
  var f = b.t - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var g = d.l[f];
    b = null != g ? Gh(b, c - 5, g, e) : nh(b.root.V, c - 5, e);
  }
  d.l[f] = b;
  return d;
};
function vh(a, b, c, d) {
  this.t = a;
  this.shift = b;
  this.root = c;
  this.U = d;
  this.q = 275;
  this.G = 88;
}
k = vh.prototype;
k.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.K(null, c);
      case 3:
        return this.L(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.h = function(a, c) {
    return this.K(null, c);
  };
  a.j = function(a, c, d) {
    return this.L(null, c, d);
  };
  return a;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ib(b)));
};
k.g = function(a) {
  return this.K(null, a);
};
k.h = function(a, b) {
  return this.L(null, a, b);
};
k.K = function(a, b) {
  return Cb.j(this, b, null);
};
k.L = function(a, b, c) {
  return "number" === typeof b ? v.j(this, b, c) : c;
};
k.D = function(a, b) {
  if (this.root.V) {
    return sh(this, b)[b & 31];
  }
  throw Error("nth after persistent!");
};
k.oa = function(a, b, c) {
  return 0 <= b && b < this.t ? v.h(this, b) : c;
};
k.T = function() {
  if (this.root.V) {
    return this.t;
  }
  throw Error("count after persistent!");
};
k.Fd = function(a, b, c) {
  var d = this;
  if (d.root.V) {
    if (0 <= b && b < d.t) {
      return mh(this) <= b ? d.U[b & 31] = c : (a = function() {
        return function f(a, h) {
          var l = Fh(d.root.V, h);
          if (0 === a) {
            l.l[b & 31] = c;
          } else {
            var m = b >>> a & 31, r = f(a - 5, l.l[m]);
            l.l[m] = r;
          }
          return l;
        };
      }(this).call(null, d.shift, d.root), d.root = a), this;
    }
    if (b === d.t) {
      return Mc(this, c);
    }
    throw Error("Index " + u.g(b) + " out of bounds for TransientVector of length" + u.g(d.t));
  }
  throw Error("assoc! after persistent!");
};
k.mc = function(a, b, c) {
  if ("number" === typeof b) {
    return Pc(this, b, c);
  }
  throw Error("TransientVector's key for assoc! must be a number.");
};
k.Fb = function(a, b) {
  if (this.root.V) {
    if (32 > this.t - mh(this)) {
      this.U[this.t & 31] = b;
    } else {
      var c = new kh(this.root.V, this.U), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.U = d;
      if (this.t >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = nh(this.root.V, this.shift, c);
        this.root = new kh(this.root.V, d);
        this.shift = e;
      } else {
        this.root = Hh(this, this.shift, this.root, c);
      }
    }
    this.t += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
k.Gb = function() {
  if (this.root.V) {
    this.root.V = null;
    var a = this.t - mh(this), b = Array(a);
    te(this.U, 0, b, 0, a);
    return new U(null, this.t, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
function Ih(a, b, c, d) {
  this.C = a;
  this.Ma = b;
  this.Cb = c;
  this.A = d;
  this.G = 0;
  this.q = 31850572;
}
k = Ih.prototype;
k.toString = function() {
  return dd(this);
};
k.I = function() {
  return this.C;
};
k.P = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Id(this);
};
k.M = function(a, b) {
  return Sd(this, b);
};
k.Y = function() {
  return Vd(Dd, this.C);
};
k.aa = function() {
  return E(this.Ma);
};
k.ga = function() {
  var a = H(this.Ma);
  return a ? new Ih(this.C, a, this.Cb, null) : null == this.Cb ? mb(this) : new Ih(this.C, this.Cb, null, null);
};
k.Q = function() {
  return this;
};
k.J = function(a, b) {
  return new Ih(b, this.Ma, this.Cb, this.A);
};
k.S = function(a, b) {
  return Td(b, this);
};
function Jh(a, b, c, d, e) {
  this.C = a;
  this.count = b;
  this.Ma = c;
  this.Cb = d;
  this.A = e;
  this.q = 31858766;
  this.G = 8192;
}
k = Jh.prototype;
k.toString = function() {
  return dd(this);
};
k.I = function() {
  return this.C;
};
k.T = function() {
  return this.count;
};
k.xb = function() {
  return E(this.Ma);
};
k.P = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Id(this);
};
k.M = function(a, b) {
  return Sd(this, b);
};
k.Y = function() {
  return Kh;
};
k.aa = function() {
  return E(this.Ma);
};
k.ga = function() {
  return F(D(this));
};
k.Q = function() {
  var a = D(this.Cb), b = this.Ma;
  return q(q(b) ? b : a) ? new Ih(null, this.Ma, D(a), null) : null;
};
k.J = function(a, b) {
  return new Jh(b, this.count, this.Ma, this.Cb, this.A);
};
k.S = function(a, b) {
  var c;
  q(this.Ma) ? (c = this.Cb, c = new Jh(this.C, this.count + 1, this.Ma, $d.h(q(c) ? c : Zd, b), null)) : c = new Jh(this.C, this.count + 1, $d.h(this.Ma, b), Zd, null);
  return c;
};
var Kh = new Jh(null, 0, null, Zd, 0);
function Lh() {
  this.G = 0;
  this.q = 2097152;
}
Lh.prototype.M = function() {
  return!1;
};
var Mh = new Lh;
function ei(a, b) {
  return xe(qe(b) ? O(a) === O(b) ? lg(Xe, Cg.h(function(a) {
    return B.h(Q.j(b, E(a), Mh), Xd(a));
  }, a)) : null : null);
}
function fi(a) {
  this.Z = a;
}
function gi(a) {
  return new fi(D(a));
}
function hi(a, b) {
  var c = a.l;
  if (b instanceof W) {
    a: {
      for (var d = c.length, e = b.$, f = 0;;) {
        if (d <= f) {
          c = -1;
          break a;
        }
        var g = c[f];
        if (g instanceof W && e === g.$) {
          c = f;
          break a;
        }
        f += 2;
      }
      c = void 0;
    }
  } else {
    if (d = ha(b), q(q(d) ? d : "number" === typeof b)) {
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
      if (b instanceof Ad) {
        a: {
          d = c.length;
          e = b.Db;
          for (f = 0;;) {
            if (d <= f) {
              c = -1;
              break a;
            }
            g = c[f];
            if (g instanceof Ad && e === g.Db) {
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
              if (B.h(b, c[e])) {
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
function ii(a, b, c) {
  this.l = a;
  this.H = b;
  this.na = c;
  this.G = 0;
  this.q = 32374990;
}
k = ii.prototype;
k.toString = function() {
  return dd(this);
};
k.I = function() {
  return this.na;
};
k.ja = function() {
  return this.H < this.l.length - 2 ? new ii(this.l, this.H + 2, this.na) : null;
};
k.T = function() {
  return(this.l.length - this.H) / 2;
};
k.P = function() {
  return Id(this);
};
k.M = function(a, b) {
  return Sd(this, b);
};
k.Y = function() {
  return Vd(Dd, this.na);
};
k.ca = function(a, b) {
  return Wd.h(b, this);
};
k.da = function(a, b, c) {
  return Wd.j(b, c, this);
};
k.aa = function() {
  return new U(null, 2, 5, V, [this.l[this.H], this.l[this.H + 1]], null);
};
k.ga = function() {
  return this.H < this.l.length - 2 ? new ii(this.l, this.H + 2, this.na) : Dd;
};
k.Q = function() {
  return this;
};
k.J = function(a, b) {
  return new ii(this.l, this.H, b);
};
k.S = function(a, b) {
  return Td(b, this);
};
function p(a, b, c, d) {
  this.C = a;
  this.t = b;
  this.l = c;
  this.A = d;
  this.q = 16647951;
  this.G = 8196;
}
k = p.prototype;
k.toString = function() {
  return dd(this);
};
k.values = function() {
  return gi(ji.g ? ji.g(this) : ji.call(null, this));
};
k.forEach = function(a) {
  for (var b = D(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.D(null, e), g = P.j(f, 0, null), f = P.j(f, 1, null);
      a.h ? a.h(f, g) : a.call(null, f, g);
      e += 1;
    } else {
      if (b = D(b)) {
        T(b) ? (c = x(b), b = z(b), g = c, d = O(c), c = g) : (c = E(b), g = P.j(c, 0, null), c = f = P.j(c, 1, null), a.h ? a.h(c, g) : a.call(null, c, g), b = H(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
k.K = function(a, b) {
  return Cb.j(this, b, null);
};
k.L = function(a, b, c) {
  a = hi(this, b);
  return-1 === a ? c : this.l[a + 1];
};
k.hc = function(a, b, c) {
  a = this.l.length;
  for (var d = 0;;) {
    if (d < a) {
      var e = this.l[d], f = this.l[d + 1];
      c = b.j ? b.j(c, e, f) : b.call(null, c, e, f);
      if (Md(c)) {
        return b = c, M.g ? M.g(b) : M.call(null, b);
      }
      d += 2;
    } else {
      return c;
    }
  }
};
k.I = function() {
  return this.C;
};
k.T = function() {
  return this.t;
};
k.P = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Jd(this);
};
k.M = function(a, b) {
  return ei(this, b);
};
k.Wb = function() {
  return new ki({}, this.l.length, ib(this.l));
};
k.Y = function() {
  return mc(li, this.C);
};
k.ca = function(a, b) {
  return Wd.h(b, this);
};
k.da = function(a, b, c) {
  return Wd.j(b, c, this);
};
k.Sa = function(a, b) {
  if (0 <= hi(this, b)) {
    var c = this.l.length, d = c - 2;
    if (0 === d) {
      return mb(this);
    }
    for (var d = Array(d), e = 0, f = 0;;) {
      if (e >= c) {
        return new p(this.C, this.t - 1, d, null);
      }
      B.h(b, this.l[e]) || (d[f] = this.l[e], d[f + 1] = this.l[e + 1], f += 2);
      e += 2;
    }
  } else {
    return this;
  }
};
k.va = function(a, b, c) {
  a = hi(this, b);
  if (-1 === a) {
    if (this.t < mi) {
      a = this.l;
      for (var d = a.length, e = Array(d + 2), f = 0;;) {
        if (f < d) {
          e[f] = a[f], f += 1;
        } else {
          break;
        }
      }
      e[d] = b;
      e[d + 1] = c;
      return new p(this.C, this.t + 1, e, null);
    }
    return mc(Gb(dh.h(ni, this), b, c), this.C);
  }
  if (c === this.l[a + 1]) {
    return this;
  }
  b = ib(this.l);
  b[a + 1] = c;
  return new p(this.C, this.t, b, null);
};
k.wc = function(a, b) {
  return-1 !== hi(this, b);
};
k.Q = function() {
  var a = this.l;
  return 0 <= a.length - 2 ? new ii(a, 0, null) : null;
};
k.J = function(a, b) {
  return new p(b, this.t, this.l, this.A);
};
k.S = function(a, b) {
  if (re(b)) {
    return Gb(this, v.h(b, 0), v.h(b, 1));
  }
  for (var c = this, d = D(b);;) {
    if (null == d) {
      return c;
    }
    var e = E(d);
    if (re(e)) {
      c = Gb(c, v.h(e, 0), v.h(e, 1)), d = H(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
k.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.K(null, c);
      case 3:
        return this.L(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.h = function(a, c) {
    return this.K(null, c);
  };
  a.j = function(a, c, d) {
    return this.L(null, c, d);
  };
  return a;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ib(b)));
};
k.g = function(a) {
  return this.K(null, a);
};
k.h = function(a, b) {
  return this.L(null, a, b);
};
var li = new p(null, 0, [], null), mi = 8;
function oi(a) {
  for (var b = a.length, c = 0, d = Lc(li);;) {
    if (c < b) {
      var e = c + 2, d = Oc(d, a[c], a[c + 1]), c = e
    } else {
      return Nc(d);
    }
  }
}
function ki(a, b, c) {
  this.ac = a;
  this.ec = b;
  this.l = c;
  this.G = 56;
  this.q = 258;
}
k = ki.prototype;
k.mc = function(a, b, c) {
  var d = this;
  if (q(d.ac)) {
    a = hi(this, b);
    if (-1 === a) {
      return d.ec + 2 <= 2 * mi ? (d.ec += 2, d.l.push(b), d.l.push(c), this) : gg.j(function() {
        var a = d.ec, b = d.l;
        return pi.h ? pi.h(a, b) : pi.call(null, a, b);
      }(), b, c);
    }
    c !== d.l[a + 1] && (d.l[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
k.Fb = function(a, b) {
  if (q(this.ac)) {
    if (b ? b.q & 2048 || b.ue || (b.q ? 0 : fb(Pb, b)) : fb(Pb, b)) {
      return Oc(this, Df.g ? Df.g(b) : Df.call(null, b), Ef.g ? Ef.g(b) : Ef.call(null, b));
    }
    for (var c = D(b), d = this;;) {
      var e = E(c);
      if (q(e)) {
        var f = e, c = H(c), d = Oc(d, function() {
          var a = f;
          return Df.g ? Df.g(a) : Df.call(null, a);
        }(), function() {
          var a = f;
          return Ef.g ? Ef.g(a) : Ef.call(null, a);
        }())
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent!");
  }
};
k.Gb = function() {
  if (q(this.ac)) {
    return this.ac = !1, new p(null, ff(this.ec, 2), this.l, null);
  }
  throw Error("persistent! called twice");
};
k.K = function(a, b) {
  return Cb.j(this, b, null);
};
k.L = function(a, b, c) {
  if (q(this.ac)) {
    return a = hi(this, b), -1 === a ? c : this.l[a + 1];
  }
  throw Error("lookup after persistent!");
};
k.T = function() {
  if (q(this.ac)) {
    return ff(this.ec, 2);
  }
  throw Error("count after persistent!");
};
function pi(a, b) {
  for (var c = Lc(ni), d = 0;;) {
    if (d < a) {
      c = gg.j(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function qi() {
  this.B = !1;
}
function ri(a, b) {
  return a === b ? !0 : X(a, b) ? !0 : B.h(a, b);
}
var si = function() {
  function a(a, b, c, g, h) {
    a = ib(a);
    a[b] = c;
    a[g] = h;
    return a;
  }
  function b(a, b, c) {
    a = ib(a);
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
  c.O = a;
  return c;
}();
function ti(a, b) {
  var c = Array(a.length - 2);
  te(a, 0, c, 0, 2 * b);
  te(a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
  return c;
}
var ui = function() {
  function a(a, b, c, g, h, l) {
    a = a.bc(b);
    a.l[c] = g;
    a.l[h] = l;
    return a;
  }
  function b(a, b, c, g) {
    a = a.bc(b);
    a.l[c] = g;
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
  c.m = b;
  c.ia = a;
  return c;
}();
function vi(a, b, c) {
  for (var d = a.length, e = 0, f = c;;) {
    if (e < d) {
      c = a[e];
      if (null != c) {
        var g = a[e + 1];
        c = b.j ? b.j(f, c, g) : b.call(null, f, c, g);
      } else {
        c = a[e + 1], c = null != c ? c.Nb(b, f) : f;
      }
      if (Md(c)) {
        return a = c, M.g ? M.g(a) : M.call(null, a);
      }
      e += 2;
      f = c;
    } else {
      return f;
    }
  }
}
function wi(a, b, c) {
  this.V = a;
  this.X = b;
  this.l = c;
}
k = wi.prototype;
k.bc = function(a) {
  if (a === this.V) {
    return this;
  }
  var b = zf(this.X), c = Array(0 > b ? 4 : 2 * (b + 1));
  te(this.l, 0, c, 0, 2 * b);
  return new wi(a, this.X, c);
};
k.nc = function() {
  var a = this.l;
  return xi.g ? xi.g(a) : xi.call(null, a);
};
k.Nb = function(a, b) {
  return vi(this.l, a, b);
};
k.zb = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.X & e)) {
    return d;
  }
  var f = zf(this.X & e - 1), e = this.l[2 * f], f = this.l[2 * f + 1];
  return null == e ? f.zb(a + 5, b, c, d) : ri(c, e) ? f : d;
};
k.Xa = function(a, b, c, d, e, f) {
  var g = 1 << (c >>> b & 31), h = zf(this.X & g - 1);
  if (0 === (this.X & g)) {
    var l = zf(this.X);
    if (2 * l < this.l.length) {
      var m = this.bc(a), r = m.l;
      f.B = !0;
      ue(r, 2 * h, r, 2 * (h + 1), 2 * (l - h));
      r[2 * h] = d;
      r[2 * h + 1] = e;
      m.X |= g;
      return m;
    }
    if (16 <= l) {
      g = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      g[c >>> b & 31] = yi.Xa(a, b + 5, c, d, e, f);
      for (m = h = 0;;) {
        if (32 > h) {
          0 !== (this.X >>> h & 1) && (g[h] = null != this.l[m] ? yi.Xa(a, b + 5, wd(this.l[m]), this.l[m], this.l[m + 1], f) : this.l[m + 1], m += 2), h += 1;
        } else {
          break;
        }
      }
      return new zi(a, l + 1, g);
    }
    r = Array(2 * (l + 4));
    te(this.l, 0, r, 0, 2 * h);
    r[2 * h] = d;
    r[2 * h + 1] = e;
    te(this.l, 2 * h, r, 2 * (h + 1), 2 * (l - h));
    f.B = !0;
    m = this.bc(a);
    m.l = r;
    m.X |= g;
    return m;
  }
  var s = this.l[2 * h], w = this.l[2 * h + 1];
  if (null == s) {
    return l = w.Xa(a, b + 5, c, d, e, f), l === w ? this : ui.m(this, a, 2 * h + 1, l);
  }
  if (ri(d, s)) {
    return e === w ? this : ui.m(this, a, 2 * h + 1, e);
  }
  f.B = !0;
  return ui.ia(this, a, 2 * h, null, 2 * h + 1, function() {
    var f = b + 5;
    return Ai.Aa ? Ai.Aa(a, f, s, w, c, d, e) : Ai.call(null, a, f, s, w, c, d, e);
  }());
};
k.Wa = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), g = zf(this.X & f - 1);
  if (0 === (this.X & f)) {
    var h = zf(this.X);
    if (16 <= h) {
      f = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      f[b >>> a & 31] = yi.Wa(a + 5, b, c, d, e);
      for (var l = g = 0;;) {
        if (32 > g) {
          0 !== (this.X >>> g & 1) && (f[g] = null != this.l[l] ? yi.Wa(a + 5, wd(this.l[l]), this.l[l], this.l[l + 1], e) : this.l[l + 1], l += 2), g += 1;
        } else {
          break;
        }
      }
      return new zi(null, h + 1, f);
    }
    l = Array(2 * (h + 1));
    te(this.l, 0, l, 0, 2 * g);
    l[2 * g] = c;
    l[2 * g + 1] = d;
    te(this.l, 2 * g, l, 2 * (g + 1), 2 * (h - g));
    e.B = !0;
    return new wi(null, this.X | f, l);
  }
  var m = this.l[2 * g], r = this.l[2 * g + 1];
  if (null == m) {
    return h = r.Wa(a + 5, b, c, d, e), h === r ? this : new wi(null, this.X, si.j(this.l, 2 * g + 1, h));
  }
  if (ri(c, m)) {
    return d === r ? this : new wi(null, this.X, si.j(this.l, 2 * g + 1, d));
  }
  e.B = !0;
  return new wi(null, this.X, si.O(this.l, 2 * g, null, 2 * g + 1, function() {
    var e = a + 5;
    return Ai.ia ? Ai.ia(e, m, r, b, c, d) : Ai.call(null, e, m, r, b, c, d);
  }()));
};
k.oc = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if (0 === (this.X & d)) {
    return this;
  }
  var e = zf(this.X & d - 1), f = this.l[2 * e], g = this.l[2 * e + 1];
  return null == f ? (a = g.oc(a + 5, b, c), a === g ? this : null != a ? new wi(null, this.X, si.j(this.l, 2 * e + 1, a)) : this.X === d ? null : new wi(null, this.X ^ d, ti(this.l, e))) : ri(c, f) ? new wi(null, this.X ^ d, ti(this.l, e)) : this;
};
var yi = new wi(null, 0, []);
function zi(a, b, c) {
  this.V = a;
  this.t = b;
  this.l = c;
}
k = zi.prototype;
k.bc = function(a) {
  return a === this.V ? this : new zi(a, this.t, ib(this.l));
};
k.nc = function() {
  var a = this.l;
  return Bi.g ? Bi.g(a) : Bi.call(null, a);
};
k.Nb = function(a, b) {
  for (var c = this.l.length, d = 0, e = b;;) {
    if (d < c) {
      var f = this.l[d];
      if (null != f && (e = f.Nb(a, e), Md(e))) {
        return c = e, M.g ? M.g(c) : M.call(null, c);
      }
      d += 1;
    } else {
      return e;
    }
  }
};
k.zb = function(a, b, c, d) {
  var e = this.l[b >>> a & 31];
  return null != e ? e.zb(a + 5, b, c, d) : d;
};
k.Xa = function(a, b, c, d, e, f) {
  var g = c >>> b & 31, h = this.l[g];
  if (null == h) {
    return a = ui.m(this, a, g, yi.Xa(a, b + 5, c, d, e, f)), a.t += 1, a;
  }
  b = h.Xa(a, b + 5, c, d, e, f);
  return b === h ? this : ui.m(this, a, g, b);
};
k.Wa = function(a, b, c, d, e) {
  var f = b >>> a & 31, g = this.l[f];
  if (null == g) {
    return new zi(null, this.t + 1, si.j(this.l, f, yi.Wa(a + 5, b, c, d, e)));
  }
  a = g.Wa(a + 5, b, c, d, e);
  return a === g ? this : new zi(null, this.t, si.j(this.l, f, a));
};
k.oc = function(a, b, c) {
  var d = b >>> a & 31, e = this.l[d];
  if (null != e) {
    a = e.oc(a + 5, b, c);
    if (a === e) {
      d = this;
    } else {
      if (null == a) {
        if (8 >= this.t) {
          a: {
            e = this.l;
            a = e.length;
            b = Array(2 * (this.t - 1));
            c = 0;
            for (var f = 1, g = 0;;) {
              if (c < a) {
                c !== d && null != e[c] && (b[f] = e[c], f += 2, g |= 1 << c), c += 1;
              } else {
                d = new wi(null, g, b);
                break a;
              }
            }
            d = void 0;
          }
        } else {
          d = new zi(null, this.t - 1, si.j(this.l, d, a));
        }
      } else {
        d = new zi(null, this.t, si.j(this.l, d, a));
      }
    }
    return d;
  }
  return this;
};
function Ci(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (ri(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return-1;
    }
  }
}
function Di(a, b, c, d) {
  this.V = a;
  this.sb = b;
  this.t = c;
  this.l = d;
}
k = Di.prototype;
k.bc = function(a) {
  if (a === this.V) {
    return this;
  }
  var b = Array(2 * (this.t + 1));
  te(this.l, 0, b, 0, 2 * this.t);
  return new Di(a, this.sb, this.t, b);
};
k.nc = function() {
  var a = this.l;
  return xi.g ? xi.g(a) : xi.call(null, a);
};
k.Nb = function(a, b) {
  return vi(this.l, a, b);
};
k.zb = function(a, b, c, d) {
  a = Ci(this.l, this.t, c);
  return 0 > a ? d : ri(c, this.l[a]) ? this.l[a + 1] : d;
};
k.Xa = function(a, b, c, d, e, f) {
  if (c === this.sb) {
    b = Ci(this.l, this.t, d);
    if (-1 === b) {
      if (this.l.length > 2 * this.t) {
        return a = ui.ia(this, a, 2 * this.t, d, 2 * this.t + 1, e), f.B = !0, a.t += 1, a;
      }
      c = this.l.length;
      b = Array(c + 2);
      te(this.l, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      f.B = !0;
      f = this.t + 1;
      a === this.V ? (this.l = b, this.t = f, a = this) : a = new Di(this.V, this.sb, f, b);
      return a;
    }
    return this.l[b + 1] === e ? this : ui.m(this, a, b + 1, e);
  }
  return(new wi(a, 1 << (this.sb >>> b & 31), [null, this, null, null])).Xa(a, b, c, d, e, f);
};
k.Wa = function(a, b, c, d, e) {
  return b === this.sb ? (a = Ci(this.l, this.t, c), -1 === a ? (a = 2 * this.t, b = Array(a + 2), te(this.l, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.B = !0, new Di(null, this.sb, this.t + 1, b)) : B.h(this.l[a], d) ? this : new Di(null, this.sb, this.t, si.j(this.l, a + 1, d))) : (new wi(null, 1 << (this.sb >>> a & 31), [null, this])).Wa(a, b, c, d, e);
};
k.oc = function(a, b, c) {
  a = Ci(this.l, this.t, c);
  return-1 === a ? this : 1 === this.t ? null : new Di(null, this.sb, this.t - 1, ti(this.l, ff(a, 2)));
};
var Ai = function() {
  function a(a, b, c, g, h, l, m) {
    var r = wd(c);
    if (r === h) {
      return new Di(null, r, 2, [c, g, l, m]);
    }
    var s = new qi;
    return yi.Xa(a, b, r, c, g, s).Xa(a, b, h, l, m, s);
  }
  function b(a, b, c, g, h, l) {
    var m = wd(b);
    if (m === g) {
      return new Di(null, m, 2, [b, c, h, l]);
    }
    var r = new qi;
    return yi.Wa(a, m, b, c, r).Wa(a, g, h, l, r);
  }
  var c = null, c = function(c, e, f, g, h, l, m) {
    switch(arguments.length) {
      case 6:
        return b.call(this, c, e, f, g, h, l);
      case 7:
        return a.call(this, c, e, f, g, h, l, m);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.ia = b;
  c.Aa = a;
  return c;
}();
function Ei(a, b, c, d, e) {
  this.C = a;
  this.Bb = b;
  this.H = c;
  this.Z = d;
  this.A = e;
  this.G = 0;
  this.q = 32374860;
}
k = Ei.prototype;
k.toString = function() {
  return dd(this);
};
k.I = function() {
  return this.C;
};
k.P = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Id(this);
};
k.M = function(a, b) {
  return Sd(this, b);
};
k.Y = function() {
  return Vd(Dd, this.C);
};
k.ca = function(a, b) {
  return Wd.h(b, this);
};
k.da = function(a, b, c) {
  return Wd.j(b, c, this);
};
k.aa = function() {
  return null == this.Z ? new U(null, 2, 5, V, [this.Bb[this.H], this.Bb[this.H + 1]], null) : E(this.Z);
};
k.ga = function() {
  if (null == this.Z) {
    var a = this.Bb, b = this.H + 2;
    return xi.j ? xi.j(a, b, null) : xi.call(null, a, b, null);
  }
  var a = this.Bb, b = this.H, c = H(this.Z);
  return xi.j ? xi.j(a, b, c) : xi.call(null, a, b, c);
};
k.Q = function() {
  return this;
};
k.J = function(a, b) {
  return new Ei(b, this.Bb, this.H, this.Z, this.A);
};
k.S = function(a, b) {
  return Td(b, this);
};
var xi = function() {
  function a(a, b, c) {
    if (null == c) {
      for (c = a.length;;) {
        if (b < c) {
          if (null != a[b]) {
            return new Ei(null, a, b, null, null);
          }
          var g = a[b + 1];
          if (q(g) && (g = g.nc(), q(g))) {
            return new Ei(null, a, b + 2, g, null);
          }
          b += 2;
        } else {
          return null;
        }
      }
    } else {
      return new Ei(null, a, b, c, null);
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
function Fi(a, b, c, d, e) {
  this.C = a;
  this.Bb = b;
  this.H = c;
  this.Z = d;
  this.A = e;
  this.G = 0;
  this.q = 32374860;
}
k = Fi.prototype;
k.toString = function() {
  return dd(this);
};
k.I = function() {
  return this.C;
};
k.P = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Id(this);
};
k.M = function(a, b) {
  return Sd(this, b);
};
k.Y = function() {
  return Vd(Dd, this.C);
};
k.ca = function(a, b) {
  return Wd.h(b, this);
};
k.da = function(a, b, c) {
  return Wd.j(b, c, this);
};
k.aa = function() {
  return E(this.Z);
};
k.ga = function() {
  var a = this.Bb, b = this.H, c = H(this.Z);
  return Bi.m ? Bi.m(null, a, b, c) : Bi.call(null, null, a, b, c);
};
k.Q = function() {
  return this;
};
k.J = function(a, b) {
  return new Fi(b, this.Bb, this.H, this.Z, this.A);
};
k.S = function(a, b) {
  return Td(b, this);
};
var Bi = function() {
  function a(a, b, c, g) {
    if (null == g) {
      for (g = b.length;;) {
        if (c < g) {
          var h = b[c];
          if (q(h) && (h = h.nc(), q(h))) {
            return new Fi(a, b, c + 1, h, null);
          }
          c += 1;
        } else {
          return null;
        }
      }
    } else {
      return new Fi(a, b, c, g, null);
    }
  }
  function b(a) {
    return c.m(null, a, 0, null);
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
  c.m = a;
  return c;
}();
function Gi(a, b, c, d, e, f) {
  this.C = a;
  this.t = b;
  this.root = c;
  this.ka = d;
  this.Fa = e;
  this.A = f;
  this.q = 16123663;
  this.G = 8196;
}
k = Gi.prototype;
k.toString = function() {
  return dd(this);
};
k.values = function() {
  return gi(ji.g ? ji.g(this) : ji.call(null, this));
};
k.forEach = function(a) {
  for (var b = D(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.D(null, e), g = P.j(f, 0, null), f = P.j(f, 1, null);
      a.h ? a.h(f, g) : a.call(null, f, g);
      e += 1;
    } else {
      if (b = D(b)) {
        T(b) ? (c = x(b), b = z(b), g = c, d = O(c), c = g) : (c = E(b), g = P.j(c, 0, null), c = f = P.j(c, 1, null), a.h ? a.h(c, g) : a.call(null, c, g), b = H(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
k.K = function(a, b) {
  return Cb.j(this, b, null);
};
k.L = function(a, b, c) {
  return null == b ? this.ka ? this.Fa : c : null == this.root ? c : this.root.zb(0, wd(b), b, c);
};
k.hc = function(a, b, c) {
  this.ka && (a = this.Fa, c = b.j ? b.j(c, null, a) : b.call(null, c, null, a));
  return Md(c) ? M.g ? M.g(c) : M.call(null, c) : null != this.root ? this.root.Nb(b, c) : c;
};
k.I = function() {
  return this.C;
};
k.T = function() {
  return this.t;
};
k.P = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Jd(this);
};
k.M = function(a, b) {
  return ei(this, b);
};
k.Wb = function() {
  return new Hi({}, this.root, this.t, this.ka, this.Fa);
};
k.Y = function() {
  return mc(ni, this.C);
};
k.Sa = function(a, b) {
  if (null == b) {
    return this.ka ? new Gi(this.C, this.t - 1, this.root, !1, null, null) : this;
  }
  if (null == this.root) {
    return this;
  }
  var c = this.root.oc(0, wd(b), b);
  return c === this.root ? this : new Gi(this.C, this.t - 1, c, this.ka, this.Fa, null);
};
k.va = function(a, b, c) {
  if (null == b) {
    return this.ka && c === this.Fa ? this : new Gi(this.C, this.ka ? this.t : this.t + 1, this.root, !0, c, null);
  }
  a = new qi;
  b = (null == this.root ? yi : this.root).Wa(0, wd(b), b, c, a);
  return b === this.root ? this : new Gi(this.C, a.B ? this.t + 1 : this.t, b, this.ka, this.Fa, null);
};
k.wc = function(a, b) {
  return null == b ? this.ka : null == this.root ? !1 : this.root.zb(0, wd(b), b, ve) !== ve;
};
k.Q = function() {
  if (0 < this.t) {
    var a = null != this.root ? this.root.nc() : null;
    return this.ka ? Td(new U(null, 2, 5, V, [null, this.Fa], null), a) : a;
  }
  return null;
};
k.J = function(a, b) {
  return new Gi(b, this.t, this.root, this.ka, this.Fa, this.A);
};
k.S = function(a, b) {
  if (re(b)) {
    return Gb(this, v.h(b, 0), v.h(b, 1));
  }
  for (var c = this, d = D(b);;) {
    if (null == d) {
      return c;
    }
    var e = E(d);
    if (re(e)) {
      c = Gb(c, v.h(e, 0), v.h(e, 1)), d = H(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
k.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.K(null, c);
      case 3:
        return this.L(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.h = function(a, c) {
    return this.K(null, c);
  };
  a.j = function(a, c, d) {
    return this.L(null, c, d);
  };
  return a;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ib(b)));
};
k.g = function(a) {
  return this.K(null, a);
};
k.h = function(a, b) {
  return this.L(null, a, b);
};
var ni = new Gi(null, 0, null, !1, null, 0);
function fe(a, b) {
  for (var c = a.length, d = 0, e = Lc(ni);;) {
    if (d < c) {
      var f = d + 1, e = e.mc(null, a[d], b[d]), d = f
    } else {
      return Nc(e);
    }
  }
}
function Hi(a, b, c, d, e) {
  this.V = a;
  this.root = b;
  this.count = c;
  this.ka = d;
  this.Fa = e;
  this.G = 56;
  this.q = 258;
}
k = Hi.prototype;
k.mc = function(a, b, c) {
  return Ii(this, b, c);
};
k.Fb = function(a, b) {
  return Ji(this, b);
};
k.Gb = function() {
  var a;
  if (this.V) {
    this.V = null, a = new Gi(null, this.count, this.root, this.ka, this.Fa, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
k.K = function(a, b) {
  return null == b ? this.ka ? this.Fa : null : null == this.root ? null : this.root.zb(0, wd(b), b);
};
k.L = function(a, b, c) {
  return null == b ? this.ka ? this.Fa : c : null == this.root ? c : this.root.zb(0, wd(b), b, c);
};
k.T = function() {
  if (this.V) {
    return this.count;
  }
  throw Error("count after persistent!");
};
function Ji(a, b) {
  if (a.V) {
    if (b ? b.q & 2048 || b.ue || (b.q ? 0 : fb(Pb, b)) : fb(Pb, b)) {
      return Ii(a, Df.g ? Df.g(b) : Df.call(null, b), Ef.g ? Ef.g(b) : Ef.call(null, b));
    }
    for (var c = D(b), d = a;;) {
      var e = E(c);
      if (q(e)) {
        var f = e, c = H(c), d = Ii(d, function() {
          var a = f;
          return Df.g ? Df.g(a) : Df.call(null, a);
        }(), function() {
          var a = f;
          return Ef.g ? Ef.g(a) : Ef.call(null, a);
        }())
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent");
  }
}
function Ii(a, b, c) {
  if (a.V) {
    if (null == b) {
      a.Fa !== c && (a.Fa = c), a.ka || (a.count += 1, a.ka = !0);
    } else {
      var d = new qi;
      b = (null == a.root ? yi : a.root).Xa(a.V, 0, wd(b), b, c, d);
      b !== a.root && (a.root = b);
      d.B && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
function Ki(a, b, c) {
  for (var d = b;;) {
    if (null != a) {
      b = c ? a.left : a.right, d = $d.h(d, a), a = b;
    } else {
      return d;
    }
  }
}
function Li(a, b, c, d, e) {
  this.C = a;
  this.stack = b;
  this.sc = c;
  this.t = d;
  this.A = e;
  this.G = 0;
  this.q = 32374862;
}
k = Li.prototype;
k.toString = function() {
  return dd(this);
};
k.I = function() {
  return this.C;
};
k.T = function() {
  return 0 > this.t ? O(H(this)) + 1 : this.t;
};
k.P = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Id(this);
};
k.M = function(a, b) {
  return Sd(this, b);
};
k.Y = function() {
  return Vd(Dd, this.C);
};
k.ca = function(a, b) {
  return Wd.h(b, this);
};
k.da = function(a, b, c) {
  return Wd.j(b, c, this);
};
k.aa = function() {
  return ke(this.stack);
};
k.ga = function() {
  var a = E(this.stack), a = Ki(this.sc ? a.right : a.left, H(this.stack), this.sc);
  return null != a ? new Li(null, a, this.sc, this.t - 1, null) : Dd;
};
k.Q = function() {
  return this;
};
k.J = function(a, b) {
  return new Li(b, this.stack, this.sc, this.t, this.A);
};
k.S = function(a, b) {
  return Td(b, this);
};
function Mi(a, b, c) {
  return new Li(null, Ki(a, null, b), b, c, null);
}
function Ni(a, b, c, d) {
  return c instanceof Oi ? c.left instanceof Oi ? new Oi(c.key, c.B, c.left.cb(), new Pi(a, b, c.right, d, null), null) : c.right instanceof Oi ? new Oi(c.right.key, c.right.B, new Pi(c.key, c.B, c.left, c.right.left, null), new Pi(a, b, c.right.right, d, null), null) : new Pi(a, b, c, d, null) : new Pi(a, b, c, d, null);
}
function Qi(a, b, c, d) {
  return d instanceof Oi ? d.right instanceof Oi ? new Oi(d.key, d.B, new Pi(a, b, c, d.left, null), d.right.cb(), null) : d.left instanceof Oi ? new Oi(d.left.key, d.left.B, new Pi(a, b, c, d.left.left, null), new Pi(d.key, d.B, d.left.right, d.right, null), null) : new Pi(a, b, c, d, null) : new Pi(a, b, c, d, null);
}
function Ri(a, b, c, d) {
  if (c instanceof Oi) {
    return new Oi(a, b, c.cb(), d, null);
  }
  if (d instanceof Pi) {
    return Qi(a, b, c, d.qc());
  }
  if (d instanceof Oi && d.left instanceof Pi) {
    return new Oi(d.left.key, d.left.B, new Pi(a, b, c, d.left.left, null), Qi(d.key, d.B, d.left.right, d.right.qc()), null);
  }
  throw Error("red-black tree invariant violation");
}
var Ti = function Si(b, c, d) {
  d = null != b.left ? Si(b.left, c, d) : d;
  if (Md(d)) {
    return M.g ? M.g(d) : M.call(null, d);
  }
  var e = b.key, f = b.B;
  d = c.j ? c.j(d, e, f) : c.call(null, d, e, f);
  if (Md(d)) {
    return M.g ? M.g(d) : M.call(null, d);
  }
  b = null != b.right ? Si(b.right, c, d) : d;
  return Md(b) ? M.g ? M.g(b) : M.call(null, b) : b;
};
function Pi(a, b, c, d, e) {
  this.key = a;
  this.B = b;
  this.left = c;
  this.right = d;
  this.A = e;
  this.G = 0;
  this.q = 32402207;
}
k = Pi.prototype;
k.rd = function(a) {
  return a.ud(this);
};
k.qc = function() {
  return new Oi(this.key, this.B, this.left, this.right, null);
};
k.cb = function() {
  return this;
};
k.qd = function(a) {
  return a.td(this);
};
k.replace = function(a, b, c, d) {
  return new Pi(a, b, c, d, null);
};
k.td = function(a) {
  return new Pi(a.key, a.B, this, a.right, null);
};
k.ud = function(a) {
  return new Pi(a.key, a.B, a.left, this, null);
};
k.Nb = function(a, b) {
  return Ti(this, a, b);
};
k.K = function(a, b) {
  return v.j(this, b, null);
};
k.L = function(a, b, c) {
  return v.j(this, b, c);
};
k.D = function(a, b) {
  return 0 === b ? this.key : 1 === b ? this.B : null;
};
k.oa = function(a, b, c) {
  return 0 === b ? this.key : 1 === b ? this.B : c;
};
k.Hb = function(a, b, c) {
  return(new U(null, 2, 5, V, [this.key, this.B], null)).Hb(null, b, c);
};
k.I = function() {
  return null;
};
k.T = function() {
  return 2;
};
k.ic = function() {
  return this.key;
};
k.jc = function() {
  return this.B;
};
k.xb = function() {
  return this.B;
};
k.P = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Id(this);
};
k.M = function(a, b) {
  return Sd(this, b);
};
k.Y = function() {
  return Zd;
};
k.ca = function(a, b) {
  return Nd.h(this, b);
};
k.da = function(a, b, c) {
  return Nd.j(this, b, c);
};
k.va = function(a, b, c) {
  return R.j(new U(null, 2, 5, V, [this.key, this.B], null), b, c);
};
k.Q = function() {
  return ob(ob(Dd, this.B), this.key);
};
k.J = function(a, b) {
  return Vd(new U(null, 2, 5, V, [this.key, this.B], null), b);
};
k.S = function(a, b) {
  return new U(null, 3, 5, V, [this.key, this.B, b], null);
};
k.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.K(null, c);
      case 3:
        return this.L(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.h = function(a, c) {
    return this.K(null, c);
  };
  a.j = function(a, c, d) {
    return this.L(null, c, d);
  };
  return a;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ib(b)));
};
k.g = function(a) {
  return this.K(null, a);
};
k.h = function(a, b) {
  return this.L(null, a, b);
};
function Oi(a, b, c, d, e) {
  this.key = a;
  this.B = b;
  this.left = c;
  this.right = d;
  this.A = e;
  this.G = 0;
  this.q = 32402207;
}
k = Oi.prototype;
k.rd = function(a) {
  return new Oi(this.key, this.B, this.left, a, null);
};
k.qc = function() {
  throw Error("red-black tree invariant violation");
};
k.cb = function() {
  return new Pi(this.key, this.B, this.left, this.right, null);
};
k.qd = function(a) {
  return new Oi(this.key, this.B, a, this.right, null);
};
k.replace = function(a, b, c, d) {
  return new Oi(a, b, c, d, null);
};
k.td = function(a) {
  return this.left instanceof Oi ? new Oi(this.key, this.B, this.left.cb(), new Pi(a.key, a.B, this.right, a.right, null), null) : this.right instanceof Oi ? new Oi(this.right.key, this.right.B, new Pi(this.key, this.B, this.left, this.right.left, null), new Pi(a.key, a.B, this.right.right, a.right, null), null) : new Pi(a.key, a.B, this, a.right, null);
};
k.ud = function(a) {
  return this.right instanceof Oi ? new Oi(this.key, this.B, new Pi(a.key, a.B, a.left, this.left, null), this.right.cb(), null) : this.left instanceof Oi ? new Oi(this.left.key, this.left.B, new Pi(a.key, a.B, a.left, this.left.left, null), new Pi(this.key, this.B, this.left.right, this.right, null), null) : new Pi(a.key, a.B, a.left, this, null);
};
k.Nb = function(a, b) {
  return Ti(this, a, b);
};
k.K = function(a, b) {
  return v.j(this, b, null);
};
k.L = function(a, b, c) {
  return v.j(this, b, c);
};
k.D = function(a, b) {
  return 0 === b ? this.key : 1 === b ? this.B : null;
};
k.oa = function(a, b, c) {
  return 0 === b ? this.key : 1 === b ? this.B : c;
};
k.Hb = function(a, b, c) {
  return(new U(null, 2, 5, V, [this.key, this.B], null)).Hb(null, b, c);
};
k.I = function() {
  return null;
};
k.T = function() {
  return 2;
};
k.ic = function() {
  return this.key;
};
k.jc = function() {
  return this.B;
};
k.xb = function() {
  return this.B;
};
k.P = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Id(this);
};
k.M = function(a, b) {
  return Sd(this, b);
};
k.Y = function() {
  return Zd;
};
k.ca = function(a, b) {
  return Nd.h(this, b);
};
k.da = function(a, b, c) {
  return Nd.j(this, b, c);
};
k.va = function(a, b, c) {
  return R.j(new U(null, 2, 5, V, [this.key, this.B], null), b, c);
};
k.Q = function() {
  return ob(ob(Dd, this.B), this.key);
};
k.J = function(a, b) {
  return Vd(new U(null, 2, 5, V, [this.key, this.B], null), b);
};
k.S = function(a, b) {
  return new U(null, 3, 5, V, [this.key, this.B, b], null);
};
k.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.K(null, c);
      case 3:
        return this.L(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.h = function(a, c) {
    return this.K(null, c);
  };
  a.j = function(a, c, d) {
    return this.L(null, c, d);
  };
  return a;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ib(b)));
};
k.g = function(a) {
  return this.K(null, a);
};
k.h = function(a, b) {
  return this.L(null, a, b);
};
var Vi = function Ui(b, c, d, e, f) {
  if (null == c) {
    return new Oi(d, e, null, null, null);
  }
  var g;
  g = c.key;
  g = b.h ? b.h(d, g) : b.call(null, d, g);
  if (0 === g) {
    return f[0] = c, null;
  }
  if (0 > g) {
    return b = Ui(b, c.left, d, e, f), null != b ? c.qd(b) : null;
  }
  b = Ui(b, c.right, d, e, f);
  return null != b ? c.rd(b) : null;
}, Xi = function Wi(b, c) {
  if (null == b) {
    return c;
  }
  if (null == c) {
    return b;
  }
  if (b instanceof Oi) {
    if (c instanceof Oi) {
      var d = Wi(b.right, c.left);
      return d instanceof Oi ? new Oi(d.key, d.B, new Oi(b.key, b.B, b.left, d.left, null), new Oi(c.key, c.B, d.right, c.right, null), null) : new Oi(b.key, b.B, b.left, new Oi(c.key, c.B, d, c.right, null), null);
    }
    return new Oi(b.key, b.B, b.left, Wi(b.right, c), null);
  }
  if (c instanceof Oi) {
    return new Oi(c.key, c.B, Wi(b, c.left), c.right, null);
  }
  d = Wi(b.right, c.left);
  return d instanceof Oi ? new Oi(d.key, d.B, new Pi(b.key, b.B, b.left, d.left, null), new Pi(c.key, c.B, d.right, c.right, null), null) : Ri(b.key, b.B, b.left, new Pi(c.key, c.B, d, c.right, null));
}, Zi = function Yi(b, c, d, e) {
  if (null != c) {
    var f;
    f = c.key;
    f = b.h ? b.h(d, f) : b.call(null, d, f);
    if (0 === f) {
      return e[0] = c, Xi(c.left, c.right);
    }
    if (0 > f) {
      return b = Yi(b, c.left, d, e), null != b || null != e[0] ? c.left instanceof Pi ? Ri(c.key, c.B, b, c.right) : new Oi(c.key, c.B, b, c.right, null) : null;
    }
    b = Yi(b, c.right, d, e);
    if (null != b || null != e[0]) {
      if (c.right instanceof Pi) {
        if (e = c.key, d = c.B, c = c.left, b instanceof Oi) {
          c = new Oi(e, d, c, b.cb(), null);
        } else {
          if (c instanceof Pi) {
            c = Ni(e, d, c.qc(), b);
          } else {
            if (c instanceof Oi && c.right instanceof Pi) {
              c = new Oi(c.right.key, c.right.B, Ni(c.key, c.B, c.left.qc(), c.right.left), new Pi(e, d, c.right.right, b, null), null);
            } else {
              throw Error("red-black tree invariant violation");
            }
          }
        }
      } else {
        c = new Oi(c.key, c.B, c.left, b, null);
      }
    } else {
      c = null;
    }
    return c;
  }
  return null;
}, aj = function $i(b, c, d, e) {
  var f = c.key, g = b.h ? b.h(d, f) : b.call(null, d, f);
  return 0 === g ? c.replace(f, e, c.left, c.right) : 0 > g ? c.replace(f, c.B, $i(b, c.left, d, e), c.right) : c.replace(f, c.B, c.left, $i(b, c.right, d, e));
};
function bj(a, b, c, d, e) {
  this.Ta = a;
  this.wb = b;
  this.t = c;
  this.C = d;
  this.A = e;
  this.q = 418776847;
  this.G = 8192;
}
k = bj.prototype;
k.forEach = function(a) {
  for (var b = D(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.D(null, e), g = P.j(f, 0, null), f = P.j(f, 1, null);
      a.h ? a.h(f, g) : a.call(null, f, g);
      e += 1;
    } else {
      if (b = D(b)) {
        T(b) ? (c = x(b), b = z(b), g = c, d = O(c), c = g) : (c = E(b), g = P.j(c, 0, null), c = f = P.j(c, 1, null), a.h ? a.h(c, g) : a.call(null, c, g), b = H(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
k.toString = function() {
  return dd(this);
};
k.values = function() {
  return gi(ji.g ? ji.g(this) : ji.call(null, this));
};
function cj(a, b) {
  for (var c = a.wb;;) {
    if (null != c) {
      var d;
      d = c.key;
      d = a.Ta.h ? a.Ta.h(b, d) : a.Ta.call(null, b, d);
      if (0 === d) {
        return c;
      }
      c = 0 > d ? c.left : c.right;
    } else {
      return null;
    }
  }
}
k.K = function(a, b) {
  return Cb.j(this, b, null);
};
k.L = function(a, b, c) {
  a = cj(this, b);
  return null != a ? a.B : c;
};
k.hc = function(a, b, c) {
  return null != this.wb ? Ti(this.wb, b, c) : c;
};
k.I = function() {
  return this.C;
};
k.T = function() {
  return this.t;
};
k.kc = function() {
  return 0 < this.t ? Mi(this.wb, !1, this.t) : null;
};
k.P = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Jd(this);
};
k.M = function(a, b) {
  return ei(this, b);
};
k.Y = function() {
  return Vd(dj, this.C);
};
k.Sa = function(a, b) {
  var c = [null], d = Zi(this.Ta, this.wb, b, c);
  return null == d ? null == P.h(c, 0) ? this : new bj(this.Ta, null, 0, this.C, null) : new bj(this.Ta, d.cb(), this.t - 1, this.C, null);
};
k.va = function(a, b, c) {
  a = [null];
  var d = Vi(this.Ta, this.wb, b, c, a);
  return null == d ? (a = P.h(a, 0), B.h(c, a.B) ? this : new bj(this.Ta, aj(this.Ta, this.wb, b, c), this.t, this.C, null)) : new bj(this.Ta, d.cb(), this.t + 1, this.C, null);
};
k.wc = function(a, b) {
  return null != cj(this, b);
};
k.Q = function() {
  return 0 < this.t ? Mi(this.wb, !0, this.t) : null;
};
k.J = function(a, b) {
  return new bj(this.Ta, this.wb, this.t, b, this.A);
};
k.S = function(a, b) {
  if (re(b)) {
    return Gb(this, v.h(b, 0), v.h(b, 1));
  }
  for (var c = this, d = D(b);;) {
    if (null == d) {
      return c;
    }
    var e = E(d);
    if (re(e)) {
      c = Gb(c, v.h(e, 0), v.h(e, 1)), d = H(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
k.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.K(null, c);
      case 3:
        return this.L(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.h = function(a, c) {
    return this.K(null, c);
  };
  a.j = function(a, c, d) {
    return this.L(null, c, d);
  };
  return a;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ib(b)));
};
k.g = function(a) {
  return this.K(null, a);
};
k.h = function(a, b) {
  return this.L(null, a, b);
};
var dj = new bj(zd, null, 0, null, 0), vg = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = L(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = D(a);
    for (var b = Lc(ni);;) {
      if (a) {
        var e = H(H(a)), b = gg.j(b, E(a), Xd(a));
        a = e;
      } else {
        return Nc(b);
      }
    }
  }
  a.w = 0;
  a.n = function(a) {
    a = D(a);
    return b(a);
  };
  a.k = b;
  return a;
}(), ej = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = L(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    for (var e = D(b), f = new bj(Be(a), null, 0, null, 0);;) {
      if (e) {
        var g = H(H(e)), f = R.j(f, E(e), Xd(e)), e = g
      } else {
        return f;
      }
    }
  }
  a.w = 1;
  a.n = function(a) {
    var d = E(a);
    a = F(a);
    return b(d, a);
  };
  a.k = b;
  return a;
}();
function fj(a, b) {
  this.la = a;
  this.na = b;
  this.G = 0;
  this.q = 32374988;
}
k = fj.prototype;
k.toString = function() {
  return dd(this);
};
k.I = function() {
  return this.na;
};
k.ja = function() {
  var a = this.la, a = (a ? a.q & 128 || a.Ac || (a.q ? 0 : fb(Ab, a)) : fb(Ab, a)) ? this.la.ja(null) : H(this.la);
  return null == a ? null : new fj(a, this.na);
};
k.P = function() {
  return Id(this);
};
k.M = function(a, b) {
  return Sd(this, b);
};
k.Y = function() {
  return Vd(Dd, this.na);
};
k.ca = function(a, b) {
  return Wd.h(b, this);
};
k.da = function(a, b, c) {
  return Wd.j(b, c, this);
};
k.aa = function() {
  return this.la.aa(null).ic(null);
};
k.ga = function() {
  var a = this.la, a = (a ? a.q & 128 || a.Ac || (a.q ? 0 : fb(Ab, a)) : fb(Ab, a)) ? this.la.ja(null) : H(this.la);
  return null != a ? new fj(a, this.na) : Dd;
};
k.Q = function() {
  return this;
};
k.J = function(a, b) {
  return new fj(this.la, b);
};
k.S = function(a, b) {
  return Td(b, this);
};
function gj(a) {
  return(a = D(a)) ? new fj(a, null) : null;
}
function Df(a) {
  return Qb(a);
}
function hj(a, b) {
  this.la = a;
  this.na = b;
  this.G = 0;
  this.q = 32374988;
}
k = hj.prototype;
k.toString = function() {
  return dd(this);
};
k.I = function() {
  return this.na;
};
k.ja = function() {
  var a = this.la, a = (a ? a.q & 128 || a.Ac || (a.q ? 0 : fb(Ab, a)) : fb(Ab, a)) ? this.la.ja(null) : H(this.la);
  return null == a ? null : new hj(a, this.na);
};
k.P = function() {
  return Id(this);
};
k.M = function(a, b) {
  return Sd(this, b);
};
k.Y = function() {
  return Vd(Dd, this.na);
};
k.ca = function(a, b) {
  return Wd.h(b, this);
};
k.da = function(a, b, c) {
  return Wd.j(b, c, this);
};
k.aa = function() {
  return this.la.aa(null).jc(null);
};
k.ga = function() {
  var a = this.la, a = (a ? a.q & 128 || a.Ac || (a.q ? 0 : fb(Ab, a)) : fb(Ab, a)) ? this.la.ja(null) : H(this.la);
  return null != a ? new hj(a, this.na) : Dd;
};
k.Q = function() {
  return this;
};
k.J = function(a, b) {
  return new hj(this.la, b);
};
k.S = function(a, b) {
  return Td(b, this);
};
function ji(a) {
  return(a = D(a)) ? new hj(a, null) : null;
}
function Ef(a) {
  return Rb(a);
}
var ij = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = L(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    return q(mg(Xe, a)) ? Ve.h(function(a, b) {
      return $d.h(q(a) ? a : li, b);
    }, a) : null;
  }
  a.w = 0;
  a.n = function(a) {
    a = D(a);
    return b(a);
  };
  a.k = b;
  return a;
}(), jj = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = L(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    return q(mg(Xe, b)) ? Ve.h(function(a) {
      return function(b, c) {
        return Ve.j(a, q(b) ? b : li, D(c));
      };
    }(function(b, d) {
      var g = E(d), h = Xd(d);
      return ye(b, g) ? R.j(b, g, function() {
        var d = Q.h(b, g);
        return a.h ? a.h(d, h) : a.call(null, d, h);
      }()) : R.j(b, g, h);
    }), b) : null;
  }
  a.w = 1;
  a.n = function(a) {
    var d = E(a);
    a = F(a);
    return b(d, a);
  };
  a.k = b;
  return a;
}();
function kj(a, b) {
  for (var c = li, d = D(b);;) {
    if (d) {
      var e = E(d), f = Q.j(a, e, lj), c = jg.h(f, lj) ? R.j(c, e, f) : c, d = H(d)
    } else {
      return c;
    }
  }
}
function mj(a, b, c) {
  this.C = a;
  this.Kb = b;
  this.A = c;
  this.q = 15077647;
  this.G = 8196;
}
k = mj.prototype;
k.toString = function() {
  return dd(this);
};
k.values = function() {
  return gi(D(this));
};
k.forEach = function(a) {
  for (var b = D(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.D(null, e), g = P.j(f, 0, null), f = P.j(f, 1, null);
      a.h ? a.h(f, g) : a.call(null, f, g);
      e += 1;
    } else {
      if (b = D(b)) {
        T(b) ? (c = x(b), b = z(b), g = c, d = O(c), c = g) : (c = E(b), g = P.j(c, 0, null), c = f = P.j(c, 1, null), a.h ? a.h(c, g) : a.call(null, c, g), b = H(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
k.K = function(a, b) {
  return Cb.j(this, b, null);
};
k.L = function(a, b, c) {
  return Fb(this.Kb, b) ? b : c;
};
k.I = function() {
  return this.C;
};
k.T = function() {
  return lb(this.Kb);
};
k.P = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Jd(this);
};
k.M = function(a, b) {
  return oe(b) && O(this) === O(b) && lg(function(a) {
    return function(b) {
      return ye(a, b);
    };
  }(this), b);
};
k.Wb = function() {
  return new nj(Lc(this.Kb));
};
k.Y = function() {
  return Vd(oj, this.C);
};
k.Ed = function(a, b) {
  return new mj(this.C, Mb(this.Kb, b), null);
};
k.Q = function() {
  return gj(this.Kb);
};
k.J = function(a, b) {
  return new mj(b, this.Kb, this.A);
};
k.S = function(a, b) {
  return new mj(this.C, R.j(this.Kb, b, null), null);
};
k.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.K(null, c);
      case 3:
        return this.L(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.h = function(a, c) {
    return this.K(null, c);
  };
  a.j = function(a, c, d) {
    return this.L(null, c, d);
  };
  return a;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ib(b)));
};
k.g = function(a) {
  return this.K(null, a);
};
k.h = function(a, b) {
  return this.L(null, a, b);
};
var oj = new mj(null, li, 0);
function pj(a) {
  var b = a.length;
  if (b <= mi) {
    for (var c = 0, d = Lc(li);;) {
      if (c < b) {
        var e = c + 1, d = Oc(d, a[c], null), c = e
      } else {
        return new mj(null, Nc(d), null);
      }
    }
  } else {
    for (c = 0, d = Lc(oj);;) {
      if (c < b) {
        e = c + 1, d = Mc(d, a[c]), c = e;
      } else {
        return Nc(d);
      }
    }
  }
}
function nj(a) {
  this.vb = a;
  this.q = 259;
  this.G = 136;
}
k = nj.prototype;
k.call = function() {
  function a(a, b, c) {
    return Cb.j(this.vb, b, ve) === ve ? c : b;
  }
  function b(a, b) {
    return Cb.j(this.vb, b, ve) === ve ? null : b;
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
  return this.call.apply(this, [this].concat(ib(b)));
};
k.g = function(a) {
  return Cb.j(this.vb, a, ve) === ve ? null : a;
};
k.h = function(a, b) {
  return Cb.j(this.vb, a, ve) === ve ? b : a;
};
k.K = function(a, b) {
  return Cb.j(this, b, null);
};
k.L = function(a, b, c) {
  return Cb.j(this.vb, b, ve) === ve ? c : b;
};
k.T = function() {
  return O(this.vb);
};
k.Fb = function(a, b) {
  this.vb = gg.j(this.vb, b, null);
  return this;
};
k.Gb = function() {
  return new mj(null, Nc(this.vb), null);
};
function qj(a) {
  a = D(a);
  if (null == a) {
    return oj;
  }
  if (a instanceof Cd && 0 === a.H) {
    a = a.l;
    a: {
      for (var b = 0, c = Lc(oj);;) {
        if (b < a.length) {
          var d = b + 1, c = c.Fb(null, a[b]), b = d
        } else {
          a = c;
          break a;
        }
      }
      a = void 0;
    }
    return a.Gb(null);
  }
  for (d = Lc(oj);;) {
    if (null != a) {
      b = a.ja(null), d = d.Fb(null, a.aa(null)), a = b;
    } else {
      return d.Gb(null);
    }
  }
}
function Kf(a) {
  if (a && (a.G & 4096 || a.we)) {
    return a.name;
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error("Doesn't support name: " + u.g(a));
}
function rj(a, b) {
  for (var c = Lc(li), d = D(a), e = D(b);;) {
    if (d && e) {
      c = gg.j(c, E(d), E(e)), d = H(d), e = H(e);
    } else {
      return Nc(c);
    }
  }
}
var wj = function() {
  function a(a, b, c) {
    return(a.g ? a.g(b) : a.call(null, b)) > (a.g ? a.g(c) : a.call(null, c)) ? b : c;
  }
  var b = null, c = function() {
    function a(b, d, h, l) {
      var m = null;
      3 < arguments.length && (m = L(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, h, m);
    }
    function c(a, d, e, l) {
      return Ve.j(function(c, d) {
        return b.j(a, c, d);
      }, b.j(a, d, e), l);
    }
    a.w = 3;
    a.n = function(a) {
      var b = E(a);
      a = H(a);
      var d = E(a);
      a = H(a);
      var l = E(a);
      a = F(a);
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
        return c.k(b, e, f, L(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.w = 3;
  b.n = c.n;
  b.h = function(a, b) {
    return b;
  };
  b.j = a;
  b.k = c.k;
  return b;
}(), xj = function() {
  function a(a, b, c) {
    return(a.g ? a.g(b) : a.call(null, b)) < (a.g ? a.g(c) : a.call(null, c)) ? b : c;
  }
  var b = null, c = function() {
    function a(b, d, h, l) {
      var m = null;
      3 < arguments.length && (m = L(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, h, m);
    }
    function c(a, d, e, l) {
      return Ve.j(function(c, d) {
        return b.j(a, c, d);
      }, b.j(a, d, e), l);
    }
    a.w = 3;
    a.n = function(a) {
      var b = E(a);
      a = H(a);
      var d = E(a);
      a = H(a);
      var l = E(a);
      a = F(a);
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
        return c.k(b, e, f, L(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.w = 3;
  b.n = c.n;
  b.h = function(a, b) {
    return b;
  };
  b.j = a;
  b.k = c.k;
  return b;
}();
function yj(a, b, c, d, e) {
  this.C = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.A = e;
  this.q = 32375006;
  this.G = 8192;
}
k = yj.prototype;
k.toString = function() {
  return dd(this);
};
k.D = function(a, b) {
  if (b < lb(this)) {
    return this.start + b * this.step;
  }
  if (this.start > this.end && 0 === this.step) {
    return this.start;
  }
  throw Error("Index out of bounds");
};
k.oa = function(a, b, c) {
  return b < lb(this) ? this.start + b * this.step : this.start > this.end && 0 === this.step ? this.start : c;
};
k.I = function() {
  return this.C;
};
k.ja = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new yj(this.C, this.start + this.step, this.end, this.step, null) : null : this.start + this.step > this.end ? new yj(this.C, this.start + this.step, this.end, this.step, null) : null;
};
k.T = function() {
  if (db(tc(this))) {
    return 0;
  }
  var a = (this.end - this.start) / this.step;
  return Math.ceil.g ? Math.ceil.g(a) : Math.ceil.call(null, a);
};
k.P = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Id(this);
};
k.M = function(a, b) {
  return Sd(this, b);
};
k.Y = function() {
  return Vd(Dd, this.C);
};
k.ca = function(a, b) {
  return Nd.h(this, b);
};
k.da = function(a, b, c) {
  return Nd.j(this, b, c);
};
k.aa = function() {
  return null == tc(this) ? null : this.start;
};
k.ga = function() {
  return null != tc(this) ? new yj(this.C, this.start + this.step, this.end, this.step, null) : Dd;
};
k.Q = function() {
  return 0 < this.step ? this.start < this.end ? this : null : this.start > this.end ? this : null;
};
k.J = function(a, b) {
  return new yj(b, this.start, this.end, this.step, this.A);
};
k.S = function(a, b) {
  return Td(b, this);
};
var zj = function() {
  function a(a, b, c) {
    return new yj(null, a, b, c, null);
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
  e.p = d;
  e.g = c;
  e.h = b;
  e.j = a;
  return e;
}();
function Aj(a) {
  return eg(Ve.j(function(a, c) {
    return gg.j(a, c, Q.j(a, c, 0) + 1);
  }, Lc(li), a));
}
var Bj = function() {
  function a(a, b, f) {
    return Td(b, new Mf(null, function() {
      var g = D(f);
      return g ? c.j(a, function() {
        var c = E(g);
        return a.h ? a.h(b, c) : a.call(null, b, c);
      }(), F(g)) : null;
    }, null, null));
  }
  function b(a, b) {
    return new Mf(null, function() {
      var f = D(b);
      return f ? c.j(a, E(f), F(f)) : ob(Dd, a.p ? a.p() : a.call(null));
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
}(), Cj = function() {
  function a(a, b) {
    for (;;) {
      if (D(b) && 0 < a) {
        var c = a - 1, g = H(b);
        a = c;
        b = g;
      } else {
        return null;
      }
    }
  }
  function b(a) {
    for (;;) {
      if (D(a)) {
        a = H(a);
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
}(), Dj = function() {
  function a(a, b) {
    Cj.h(a, b);
    return b;
  }
  function b(a) {
    Cj.g(a);
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
function Ej(a, b) {
  if ("string" === typeof b) {
    var c = a.exec(b);
    return B.h(E(c), b) ? 1 === O(c) ? E(c) : zh(c) : null;
  }
  throw new TypeError("re-matches must match against a string.");
}
function Fj(a) {
  var b;
  b = /^(?:\(\?([idmsux]*)\))?(.*)/;
  if ("string" === typeof a) {
    a = b.exec(a), b = null == a ? null : 1 === O(a) ? E(a) : zh(a);
  } else {
    throw new TypeError("re-find must match against a string.");
  }
  P.j(b, 0, null);
  a = P.j(b, 1, null);
  b = P.j(b, 2, null);
  return new RegExp(b, a);
}
function Gj(a, b, c, d, e, f, g) {
  var h = Wa;
  try {
    Wa = null == Wa ? null : Wa - 1;
    if (null != Wa && 0 > Wa) {
      return Bc(a, "#");
    }
    Bc(a, c);
    if (D(g)) {
      var l = E(g);
      b.j ? b.j(l, a, f) : b.call(null, l, a, f);
    }
    for (var m = H(g), r = cb.g(f) - 1;;) {
      if (!m || null != r && 0 === r) {
        D(m) && 0 === r && (Bc(a, d), Bc(a, "..."));
        break;
      } else {
        Bc(a, d);
        var s = E(m);
        c = a;
        g = f;
        b.j ? b.j(s, c, g) : b.call(null, s, c, g);
        var w = H(m);
        c = r - 1;
        m = w;
        r = c;
      }
    }
    return Bc(a, e);
  } finally {
    Wa = h;
  }
}
var Hj = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = L(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    for (var e = D(b), f = null, g = 0, h = 0;;) {
      if (h < g) {
        var l = f.D(null, h);
        Bc(a, l);
        h += 1;
      } else {
        if (e = D(e)) {
          f = e, T(f) ? (e = x(f), g = z(f), f = e, l = O(e), e = g, g = l) : (l = E(f), Bc(a, l), e = H(f), f = null, g = 0), h = 0;
        } else {
          return null;
        }
      }
    }
  }
  a.w = 1;
  a.n = function(a) {
    var d = E(a);
    a = F(a);
    return b(d, a);
  };
  a.k = b;
  return a;
}(), Ij = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function Jj(a) {
  return'"' + u.g(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return Ij[a];
  })) + '"';
}
var Mj = function Kj(b, c, d) {
  if (null == b) {
    return Bc(c, "nil");
  }
  if (void 0 === b) {
    return Bc(c, "#\x3cundefined\x3e");
  }
  q(function() {
    var c = Q.h(d, $a);
    return q(c) ? (c = b ? b.q & 131072 || b.ve ? !0 : b.q ? !1 : fb(hc, b) : fb(hc, b)) ? je(b) : c : c;
  }()) && (Bc(c, "^"), Kj(je(b), c, d), Bc(c, " "));
  if (null == b) {
    return Bc(c, "nil");
  }
  if (b.Ca) {
    return b.Ga(b, c, d);
  }
  if (b && (b.q & 2147483648 || b.W)) {
    return b.N(null, c, d);
  }
  if (gb(b) === Boolean || "number" === typeof b) {
    return Bc(c, "" + u.g(b));
  }
  if (null != b && b.constructor === Object) {
    Bc(c, "#js ");
    var e = Cg.h(function(c) {
      return new U(null, 2, 5, V, [Lf.g(c), b[c]], null);
    }, se(b));
    return Lj.m ? Lj.m(e, Kj, c, d) : Lj.call(null, e, Kj, c, d);
  }
  return b instanceof Array ? Gj(c, Kj, "#js [", " ", "]", d, b) : q(ha(b)) ? q(Za.g(d)) ? Bc(c, Jj(b)) : Bc(c, b) : he(b) ? Hj.k(c, L(["#\x3c", "" + u.g(b), "\x3e"], 0)) : b instanceof Date ? (e = function(b, c) {
    for (var d = "" + u.g(b);;) {
      if (O(d) < c) {
        d = "0" + u.g(d);
      } else {
        return d;
      }
    }
  }, Hj.k(c, L(['#inst "', "" + u.g(b.getUTCFullYear()), "-", e(b.getUTCMonth() + 1, 2), "-", e(b.getUTCDate(), 2), "T", e(b.getUTCHours(), 2), ":", e(b.getUTCMinutes(), 2), ":", e(b.getUTCSeconds(), 2), ".", e(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0))) : b instanceof RegExp ? Hj.k(c, L(['#"', b.source, '"'], 0)) : (b ? b.q & 2147483648 || b.W || (b.q ? 0 : fb(Cc, b)) : fb(Cc, b)) ? Dc(b, c, d) : Hj.k(c, L(["#\x3c", "" + u.g(b), "\x3e"], 0));
};
function Nj(a, b) {
  var c = new Ia;
  a: {
    var d = new cd(c);
    Mj(E(a), d, b);
    for (var e = D(H(a)), f = null, g = 0, h = 0;;) {
      if (h < g) {
        var l = f.D(null, h);
        Bc(d, " ");
        Mj(l, d, b);
        h += 1;
      } else {
        if (e = D(e)) {
          f = e, T(f) ? (e = x(f), g = z(f), f = e, l = O(e), e = g, g = l) : (l = E(f), Bc(d, " "), Mj(l, d, b), e = H(f), f = null, g = 0), h = 0;
        } else {
          break a;
        }
      }
    }
  }
  return c;
}
var zg = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = L(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b = Xa();
    return me(a) ? "" : "" + u.g(Nj(a, b));
  }
  a.w = 0;
  a.n = function(a) {
    a = D(a);
    return b(a);
  };
  a.k = b;
  return a;
}();
function Lj(a, b, c, d) {
  return Gj(c, function(a, c, d) {
    var h = Qb(a);
    b.j ? b.j(h, c, d) : b.call(null, h, c, d);
    Bc(c, " ");
    a = Rb(a);
    return b.j ? b.j(a, c, d) : b.call(null, a, c, d);
  }, "{", ", ", "}", d, D(a));
}
Cd.prototype.W = !0;
Cd.prototype.N = function(a, b, c) {
  return Gj(b, Mj, "(", " ", ")", c, this);
};
Mf.prototype.W = !0;
Mf.prototype.N = function(a, b, c) {
  return Gj(b, Mj, "(", " ", ")", c, this);
};
Li.prototype.W = !0;
Li.prototype.N = function(a, b, c) {
  return Gj(b, Mj, "(", " ", ")", c, this);
};
Ei.prototype.W = !0;
Ei.prototype.N = function(a, b, c) {
  return Gj(b, Mj, "(", " ", ")", c, this);
};
Pi.prototype.W = !0;
Pi.prototype.N = function(a, b, c) {
  return Gj(b, Mj, "[", " ", "]", c, this);
};
ii.prototype.W = !0;
ii.prototype.N = function(a, b, c) {
  return Gj(b, Mj, "(", " ", ")", c, this);
};
Bh.prototype.W = !0;
Bh.prototype.N = function(a, b, c) {
  return Gj(b, Mj, "(", " ", ")", c, this);
};
Jf.prototype.W = !0;
Jf.prototype.N = function(a, b, c) {
  return Gj(b, Mj, "(", " ", ")", c, this);
};
Rd.prototype.W = !0;
Rd.prototype.N = function(a, b, c) {
  return Gj(b, Mj, "(", " ", ")", c, this);
};
Gi.prototype.W = !0;
Gi.prototype.N = function(a, b, c) {
  return Lj(this, Mj, b, c);
};
Fi.prototype.W = !0;
Fi.prototype.N = function(a, b, c) {
  return Gj(b, Mj, "(", " ", ")", c, this);
};
Dh.prototype.W = !0;
Dh.prototype.N = function(a, b, c) {
  return Gj(b, Mj, "[", " ", "]", c, this);
};
bj.prototype.W = !0;
bj.prototype.N = function(a, b, c) {
  return Lj(this, Mj, b, c);
};
mj.prototype.W = !0;
mj.prototype.N = function(a, b, c) {
  return Gj(b, Mj, "#{", " ", "}", c, this);
};
Wf.prototype.W = !0;
Wf.prototype.N = function(a, b, c) {
  return Gj(b, Mj, "(", " ", ")", c, this);
};
ug.prototype.W = !0;
ug.prototype.N = function(a, b, c) {
  Bc(b, "#\x3cAtom: ");
  Mj(this.state, b, c);
  return Bc(b, "\x3e");
};
hj.prototype.W = !0;
hj.prototype.N = function(a, b, c) {
  return Gj(b, Mj, "(", " ", ")", c, this);
};
Oi.prototype.W = !0;
Oi.prototype.N = function(a, b, c) {
  return Gj(b, Mj, "[", " ", "]", c, this);
};
U.prototype.W = !0;
U.prototype.N = function(a, b, c) {
  return Gj(b, Mj, "[", " ", "]", c, this);
};
Ih.prototype.W = !0;
Ih.prototype.N = function(a, b, c) {
  return Gj(b, Mj, "(", " ", ")", c, this);
};
Gf.prototype.W = !0;
Gf.prototype.N = function(a, b) {
  return Bc(b, "()");
};
Jh.prototype.W = !0;
Jh.prototype.N = function(a, b, c) {
  return Gj(b, Mj, "#queue [", " ", "]", c, D(this));
};
p.prototype.W = !0;
p.prototype.N = function(a, b, c) {
  return Lj(this, Mj, b, c);
};
yj.prototype.W = !0;
yj.prototype.N = function(a, b, c) {
  return Gj(b, Mj, "(", " ", ")", c, this);
};
fj.prototype.W = !0;
fj.prototype.N = function(a, b, c) {
  return Gj(b, Mj, "(", " ", ")", c, this);
};
Ff.prototype.W = !0;
Ff.prototype.N = function(a, b, c) {
  return Gj(b, Mj, "(", " ", ")", c, this);
};
U.prototype.xc = !0;
U.prototype.yc = function(a, b) {
  return Ae.h(this, b);
};
Dh.prototype.xc = !0;
Dh.prototype.yc = function(a, b) {
  return Ae.h(this, b);
};
W.prototype.xc = !0;
W.prototype.yc = function(a, b) {
  return yd(this, b);
};
Ad.prototype.xc = !0;
Ad.prototype.yc = function(a, b) {
  return yd(this, b);
};
function Oj(a, b, c) {
  Fc(a, b, c);
}
var Pj = null, Qj = function() {
  function a(a) {
    null == Pj && (Pj = xg.g ? xg.g(0) : xg.call(null, 0));
    return Bd.g("" + u.g(a) + u.g(Ag.h(Pj, Kd)));
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
  c.p = b;
  c.g = a;
  return c;
}();
function Rj(a) {
  return function(b, c) {
    var d = a.h ? a.h(b, c) : a.call(null, b, c);
    return Md(d) ? new Ld(d) : d;
  };
}
function Yg(a) {
  return function(b) {
    return function() {
      function c(a, c) {
        return Ve.j(b, a, c);
      }
      function d(b) {
        return a.g ? a.g(b) : a.call(null, b);
      }
      function e() {
        return a.p ? a.p() : a.call(null);
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
      f.p = e;
      f.g = d;
      f.h = c;
      return f;
    }();
  }(Rj(a));
}
xf = function() {
  function a(a) {
    return(Math.random.p ? Math.random.p() : Math.random.call(null)) * a;
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
  c.p = b;
  c.g = a;
  return c;
}();
yf = function(a) {
  a *= Math.random.p ? Math.random.p() : Math.random.call(null);
  return Math.floor.g ? Math.floor.g(a) : Math.floor.call(null, a);
};
function Sj(a, b) {
  return eg(Ve.j(function(b, d) {
    var e = a.g ? a.g(d) : a.call(null, d);
    return gg.j(b, e, $d.h(Q.j(b, e, Zd), d));
  }, Lc(li), b));
}
function Tj(a) {
  this.Oc = a;
  this.G = 0;
  this.q = 2153775104;
}
Tj.prototype.P = function() {
  for (var a = zg.k(L([this], 0)), b = 0, c = 0;c < a.length;++c) {
    b = 31 * b + a.charCodeAt(c), b %= 4294967296;
  }
  return b;
};
Tj.prototype.N = function(a, b) {
  return Bc(b, '#uuid "' + u.g(this.Oc) + '"');
};
Tj.prototype.M = function(a, b) {
  return b instanceof Tj && this.Oc === b.Oc;
};
Tj.prototype.toString = function() {
  return this.Oc;
};
var Uj = new W(null, "inactive", "inactive", -306247616), Vj = new W(null, "y", "y", -1757859776), Wj = new W(null, "ppath", "ppath", -1758182784), Xj = new W(null, "no-deref-monitor", "no-deref-monitor", 1171473184), Yj = new W(null, "seg-w-px", "seg-w-px", 1192509248), Zj = new W(null, "fieldset", "fieldset", -1949770816), ak = new W(null, "fieldset#sim-controls", "fieldset#sim-controls", 443000993), bk = new W(null, "watches", "watches", -273097535), ck = new W(null, "boost-overlap-duty-ratio", 
"boost-overlap-duty-ratio", -1153915647), dk = new W(null, "ff-synapses", "ff-synapses", -1536453151), ek = new W(null, "gap-countdown", "gap-countdown", -2051578079), fk = new W(null, "target-density", "target-density", 391599009), gk = new W(null, "fieldset.region-spec", "fieldset.region-spec", 1547815873), hk = new W(null, "run-0-5", "run-0-5", -60879870), ik = new W(null, "min", "min", 444991522), jk = new W(null, "down", "down", 1565245570), kk = new W(null, "permanence-dec", "permanence-dec", 
873173410), lk = new W("zip", "branch?", "zip/branch?", -998880862), mk = new W(null, "span#sim-rate", "span#sim-rate", -400148894), nk = new W(null, "r", "r", -471384190), ok = new W(null, "text-margin", "text-margin", 1161346978), pk = new W(null, "g.tick.major-tick", "g.tick.major-tick", 1467819139), qk = new W("zip", "children", "zip/children", -940194589), rk = new W(null, "dh", "dh", 528137731), sk = new W(null, "boost", "boost", -673419773), tk = new W(null, "run-sim", "run-sim", 1708970627), 
uk = new W(null, "a#sim-faster", "a#sim-faster", 1179722499), vk = new W(null, "span#sim-timestep", "span#sim-timestep", -764964893), wk = new W(null, "transform", "transform", 1381301764), $a = new W(null, "meta", "meta", 1499536964), xk = new W(null, "selected", "selected", 574897764), yk = new W(null, "dx", "dx", -381796732), zk = new W(null, "seg-h-space-px", "seg-h-space-px", 1353315204), Ak = new W(null, "max-synapse-count", "max-synapse-count", -2061271132), Bk = new W(null, "scroll-top", 
"scroll-top", -46723100), Ck = new W(null, "scroll-counter", "scroll-counter", 628002885), Dk = new W("org.nfrac.comportex.demos.isolated-1d", "current-pattern-index", "org.nfrac.comportex.demos.isolated-1d/current-pattern-index", -20812731), bb = new W(null, "dup", "dup", 556298533), Ek = new W(null, "dir", "dir", 1734754661), Fk = new W(null, "g.ticks", "g.ticks", 28507493), Gk = new W(null, "temporal-pooling", "temporal-pooling", 240992677), Hk = new W(null, "segment-idx", "segment-idx", -248867259), 
Ik = new W(null, "key", "key", -1516042587), Jk = new W(null, "sp-perm-dec", "sp-perm-dec", 855246789), Kk = new W(null, "index", "index", -1531685915), Lk = new W(null, "bottom", "bottom", -1550509018), Mk = new W(null, "max-segments", "max-segments", -157037498), Jm = new W(null, "encoder", "encoder", -1113127834), Km = new W(null, "button#sim-start", "button#sim-start", -924760922), Lm = new W(null, "exit", "exit", 351849638), Mm = new W(null, "disconnected", "disconnected", -1908014586), Nm = 
new W(null, "cull", "cull", -1824785850), Om = new W(null, "boost-active-duty-ratio", "boost-active-duty-ratio", 891850342), Pm = new W(null, "temporal-pooling-scores", "temporal-pooling-scores", 415441191), Qm = new W(null, "lat-synapses", "lat-synapses", 1341366663), Rm = new W(null, "button#sim-reset", "button#sim-reset", -1103042169), Sm = new W(null, "top", "top", -1856271961), Tm = new W(null, "derefed", "derefed", 590684583), Um = new W(null, "prev-predictive-cells-by-column", "prev-predictive-cells-by-column", 
-2129217881), Vm = new W(null, "text.label", "text.label", 210580295), Wm = new W(null, "yellow", "yellow", -881035449), wg = new W(null, "validator", "validator", -1966190681), Xm = new W(null, "highlight", "highlight", -800930873), Ym = new W(null, "cid", "cid", -1940591320), Zm = new W(null, "line.rule", "line.rule", -722114232), $m = new W(null, "button#anim-step", "button#anim-step", 1065036136), an = new W(null, "seg-h-px", "seg-h-px", -443969112), bn = new W(null, "finally-block", "finally-block", 
832982472), cn = new W(null, "h-space-px", "h-space-px", -766035480), dn = new W(null, "col-shrink", "col-shrink", -1043182072), en = new W(null, "learn-segments", "learn-segments", 1869208392), Y = new W(null, "columns", "columns", 1998437288), fn = new W(null, "a#anim-slower", "a#anim-slower", -2103660568), gn = new W(null, "w", "w", 354169001), hn = new W("org.nfrac.comportex.sequence-memory", "lat-index", "org.nfrac.comportex.sequence-memory/lat-index", 1157726441), jn = new W(null, "sy", "sy", 
227523849), kn = new W(null, "element-h", "element-h", -1458880151), ln = new W(null, "anim-go?", "anim-go?", 1109067401), mn = new W(null, "dt", "dt", -368444759), nn = new W(null, "formatter", "formatter", -483008823), on = new W(null, "parent-watchables", "parent-watchables", -319854903), pn = new W(null, "value", "value", 305978217), qn = new W(null, "green", "green", -945526839), rn = new W(null, "time", "time", 1385887882), sn = new W(null, "fieldset#anim-controls", "fieldset#anim-controls", 
750977322), tn = new W(null, "mapping", "mapping", -1242405430), un = new W(null, "page-up", "page-up", 1352555050), vn = new W(null, "regions", "regions", -1023815958), wn = new W(null, "timestep", "timestep", -1557942486), xn = new W(null, "dirty?", "dirty?", -2059845846), yn = new W(null, "potential-frac", "potential-frac", -148706518), zn = new W(null, "y1", "y1", 589123466), An = new W(null, "width", "width", -384071477), Bn = new W(null, "new-synapse-count", "new-synapse-count", -1667854133), 
Cn = new W(null, "a#sim-slower", "a#sim-slower", -8187669), Dn = new W(null, "background", "background", -863952629), En = new W(null, "button#sim-step", "button#sim-step", -991688373), Fn = new W(null, "dy", "dy", 1719547243), Gn = new W(null, "connected", "connected", -169833045), Hn = new W(null, "p.detail", "p.detail", -259333685), In = new W(null, "submit", "submit", -49315317), Jn = new W(null, "active-duty-cycles", "active-duty-cycles", -2100410837), Kn = new W(null, "legend", "legend", -1027192245), 
Ln = new W(null, "permanence-inc", "permanence-inc", 562267755), Mn = new W(null, "shrink", "shrink", 1415287595), Nn = new W(null, "orientation", "orientation", 623557579), On = new W(null, "fieldset#viz-options", "fieldset#viz-options", -957799412), Pn = new W(null, "predictive", "predictive", 742235276), Qn = new W(null, "potential-radius", "potential-radius", -1950363476), Rn = new W(null, "signal-cells", "signal-cells", -451652436), Sn = new W(null, "draw-steps", "draw-steps", -100988692), Z = 
new W(null, "recur", "recur", -437573268), Tn = new W(null, "type", "type", 1174270348), Un = new W("comportexviz.viz-canvas", "acols", "comportexviz.viz-canvas/acols", 1747707340), Vn = new W(null, "update", "update", 1045576396), Wn = new W(null, "catch-block", "catch-block", 1175212748), Xn = new W(null, "twos", "twos", 709888876), Yn = new W(null, "state", "state", -1988618099), Zn = new W(null, "g.timestep", "g.timestep", -1438660275), $n = new W(null, "input-size", "input-size", -731983507), 
ao = new W(null, "major-tick-width", "major-tick-width", -401901043), bo = new W("comportexviz.viz-canvas", "abits", "comportexviz.viz-canvas/abits", -1378531795), co = new W(null, "update-dom", "update-dom", 1414664877), eo = new W(null, "bursting?", "bursting?", -1793074515), fo = new W(null, "span.detail", "span.detail", -1905752307), go = new W(null, "span#sim-ms-text", "span#sim-ms-text", -117079187), Ya = new W(null, "flush-on-newline", "flush-on-newline", -151457939), ho = new W(null, "overlap-duty-cycles", 
"overlap-duty-cycles", 1224111053), io = new W(null, "segments", "segments", 1937535949), jo = new W(null, "sim-step-ms", "sim-step-ms", -1192536083), ko = new W(null, "button#anim-start", "button#anim-start", 373847086), lo = new W(null, "synapses", "synapses", -614206130), mo = new W(null, "learn-cells", "learn-cells", -1536897586), no = new W(null, "all", "all", 892129742), oo = new W(null, "active-columns", "active-columns", 1479134862), po = new W(null, "activation-threshold", "activation-threshold", 
-1175546194), qo = new W(null, "span#anim-every-text", "span#anim-every-text", -815816561), Co = new W(null, "l", "l", 1395893423), Do = new W(null, "seed", "seed", 68613327), To = new W(null, "up", "up", -269712113), Uo = new W("zip", "make-node", "zip/make-node", 1103800591), Vo = new W(null, "canvas", "canvas", -1798817489), Wo = new W(null, "ncol", "ncol", 1778338447), Xo = new W(null, "enter", "enter", 1792452624), Yo = new W(null, "bit-h-px", "bit-h-px", -1081204688), Zo = new W(null, "demote", 
"demote", 2088906896), $o = new W(null, "learning", "learning", 612366512), ap = new W(null, "region", "region", 270415120), bp = new W(null, "style", "style", -496642736), cp = new W(null, "clamp?", "clamp?", 249465200), dp = new W(null, "ts", "ts", 1617209904), ep = new W(null, "div", "div", 1057191632), fp = new W(null, "signal-up", "signal-up", 737301232), gp = new W(null, "option", "option", 65132272), Za = new W(null, "readably", "readably", 1129599760), hp = new W(null, "run-start", "run-start", 
1984981840), ip = new W(null, "activation", "activation", 2128521072), jp = new W("comportexviz.viz-canvas", "tpcols", "comportexviz.viz-canvas/tpcols", 500403377), kp = new W(null, "counter", "counter", 804008177), lp = new W(null, "key-fn", "key-fn", -636154479), mp = new W(null, "spec", "spec", 347520401), np = new W(null, "g", "g", 1738089905), op = new W(null, "button#anim-stop", "button#anim-stop", -279088527), pp = new W(null, "random-double", "random-double", -922602767), qp = new W(null, 
"active-predicted", "active-predicted", -72115407), rp = new W(null, "click", "click", 1912301393), sp = new W(null, "cp1x", "cp1x", 465245137), tp = new W(null, "anim-every", "anim-every", 1633754642), up = new W(null, "max-boost", "max-boost", 608482834), vp = new W(null, "signal-promote", "signal-promote", 1378242482), wp = new W(null, "label-margin", "label-margin", -17690670), xp = new W(null, "cp2x", "cp2x", -1682644749), yp = new W(null, "line", "line", 212345235), zp = new W(null, "stimulus-threshold", 
"stimulus-threshold", -1548749389), Ap = new W("comportexviz.viz-canvas", "pbits", "comportexviz.viz-canvas/pbits", 1988133491), Bp = new W(null, "div#comportex-drawing", "div#comportex-drawing", 1638716307), Cp = new W(null, "active-cells", "active-cells", -1277925485), Dp = new W(null, "g.plot-space", "g.plot-space", -1258275917), Ep = new W(null, "sp-perm-inc", "sp-perm-inc", -2023460909), Fp = new W(null, "punish?", "punish?", -1890284492), Gp = new W(null, "h", "h", 1109658740), Hp = new W(null, 
"from", "from", 1815293044), Ip = new W(null, "temporal-pooling-amp", "temporal-pooling-amp", 1075315892), Jp = new W(null, "a#anim-faster", "a#anim-faster", -1294334764), cb = new W(null, "print-length", "print-length", 1931866356), Kp = new W(null, "max", "max", 61366548), Lp = new W(null, "initial-perm", "initial-perm", -411437740), Mp = new W(null, "active", "active", 1895962068), Np = new W(null, "activation-level", "activation-level", -1385123308), Op = new W(null, "overlaps", "overlaps", 1398230580), 
Pp = new W(null, "label", "label", 1718410804), Qp = new W(null, "id", "id", -1388402092), Rp = new W(null, "class", "class", -2030961996), Sp = new W(null, "predictive-cells", "predictive-cells", 1817662164), Tp = new W(null, "red", "red", -969428204), Up = new W(null, "connected-perm", "connected-perm", 807367508), Vp = new W(null, "blue", "blue", -622100620), Wp = new W(null, "extent", "extent", -186399820), Xp = new W(null, "catch-exception", "catch-exception", -1997306795), Yp = new W(null, 
"opts", "opts", 155075701), Zp = new W(null, "neighbour-radius", "neighbour-radius", -1736587083), $p = new W(null, "init-value", "init-value", -374892331), aq = new W("comportexviz.viz-canvas", "pcols", "comportexviz.viz-canvas/pcols", 1740826069), bq = new W(null, "checked", "checked", -50955819), cq = new W("org.nfrac.comportex.demos.isolated-1d", "gap-countdown", "org.nfrac.comportex.demos.isolated-1d/gap-countdown", 1385863765), dq = new W(null, "left-px", "left-px", -745883979), eq = new W(null, 
"predictive-cells-by-column", "predictive-cells-by-column", 1557480149), fq = new W(null, "ts-plot", "ts-plot", -1498457323), gq = new W(null, "global-inhibition", "global-inhibition", -936260811), hq = new W(null, "temporal-pooling-decay", "temporal-pooling-decay", -968469707), iq = new W(null, "pnodes", "pnodes", 1739080565), jq = new W(null, "prev", "prev", -1597069226), kq = new W(null, "svg", "svg", 856789142), lq = new W(null, "gap", "gap", 80255254), mq = new W(null, "changed?", "changed?", 
-437828330), nq = new W(null, "span.parameter-label", "span.parameter-label", -815265354), oq = new W(null, "length", "length", 588987862), pq = new W(null, "button#sim-stop", "button#sim-stop", 1477647862), qq = new W(null, "continue-block", "continue-block", -1852047850), rq = new W(null, "span#sim-reset-status", "span#sim-reset-status", 1741880118), sq = new W(null, "potential-radius-frac", "potential-radius-frac", 584722487), tq = new W(null, "cp1y", "cp1y", 628283543), uq = new W(null, "div#comportex-controls", 
"div#comportex-controls", -1291722569), vq = new W(null, "div#comportex-parameters", "div#comportex-parameters", 737276119), wq = new W(null, "right", "right", -452581833), xq = new W(null, "ticks", "ticks", -406190313), yq = new W(null, "dw", "dw", -821060841), zq = new W(null, "redraw", "redraw", -1075394793), Aq = new W(null, "display", "display", 242065432), Bq = new W(null, "cell-ids", "cell-ids", -236000104), Cq = new W(null, "drawing", "drawing", 1181749528), Dq = new W(null, "f", "f", -1597136552), 
Eq = new W(null, "sx", "sx", -403071592), Fq = new W(null, "cell-id", "cell-id", 1789875608), Gq = new W(null, "saw-10-15", "saw-10-15", 953187768), Hq = new W(null, "depth", "depth", 1768663640), Iq = new W(null, "br", "br", 934104792), Jq = new W(null, "rev-5-1", "rev-5-1", -252300392), Kq = new W(null, "define-me!", "define-me!", -268367591), Lq = new W(null, "x", "x", 2099068185), Mq = new W(null, "subs", "subs", -186681991), Nq = new W(null, "x1", "x1", -1863922247), Oq = new W(null, "bit-w-px", 
"bit-w-px", -531552775), Pq = new W(null, "form", "form", -1624062471), Qq = new W(null, "tag", "tag", -1290361223), Rq = new W(null, "predicted", "predicted", 2110738041), Sq = new W(null, "res", "res", -1395007879), Tq = new W(null, "sh", "sh", -682444007), Uq = new W(null, "capture", "capture", -677031143), Vq = new W(null, "sw", "sw", 833113913), Wq = new W(null, "domain", "domain", 1847214937), Xq = new W(null, "input", "input", 556931961), Yq = new W(null, "cp2y", "cp2y", 903335801), Zq = new W(null, 
"uuid", "uuid", -2145095719), $q = new W(null, "seq", "seq", -1817803783), ar = new W(null, "cells", "cells", -985166822), br = new W(null, "keep-n", "keep-n", -176064454), cr = new W(null, "first", "first", -644103046), dr = new W(null, "sp-perm-signal-inc", "sp-perm-signal-inc", 452393306), er = new W(null, "change", "change", -1163046502), fr = new W(null, "page-down", "page-down", -392838598), gr = new W(null, "purple", "purple", -876021126), hr = new W(null, "end", "end", -268185958), ir = new W(null, 
"sp-perm-connected", "sp-perm-connected", -1835817957), jr = new W(null, "y2", "y2", -718691301), kr = new W(null, "circles?", "circles?", -1676300005), lr = new W(null, "temporal-pooling-cells", "temporal-pooling-cells", 85401979), mr = new W(null, "jump-6-12", "jump-6-12", -1217478725), nr = new W(null, "bursting-columns", "bursting-columns", -896519076), or = new W("comportexviz.viz-canvas", "cache", "comportexviz.viz-canvas/cache", 33193148), pr = new W(null, "force-update?", "force-update?", 
137364796), qr = new W(null, "duty-cycle-period", "duty-cycle-period", -962296356), rr = new W(null, "min-threshold", "min-threshold", -1451318820), sr = new W(null, "last", "last", 1105735132), ft = new W("org.nfrac.comportex.pooling", "ff-index", "org.nfrac.comportex.pooling/ff-index", -1375909380), gt = new W(null, "permanences", "permanences", -1713734116), ht = new W("org.nfrac.comportex.core", "no-matching-UUID!", "org.nfrac.comportex.core/no-matching-UUID!", 1023231548), it = new W("comportexviz.viz-canvas", 
"ocols", "comportexviz.viz-canvas/ocols", -2081286436), jt = new W(null, "rect", "rect", -108902628), kt = new W(null, "step", "step", 1288888124), lt = new W(null, "p", "p", 151049309), mt = new W(null, "x2", "x2", -1362513475), nt = new W(null, "run-6-10", "run-6-10", 295893118), ot = new W(null, "href", "href", -793805698), pt = new W(null, "none", "none", 1333468478), qt = new W(null, "bucket", "bucket", 1126218366), rt = new W(null, "elements-per-dt", "elements-per-dt", 703850270), st = new W(null, 
"col-d-px", "col-d-px", -985327682), tt = new W(null, "bit-shrink", "bit-shrink", -1161684994), ut = new W(null, "range", "range", 1639692286), vt = new W(null, "height", "height", 1025178622), wt = new W(null, "select", "select", 1147833503), xt = new W(null, "promote", "promote", -1158882145), yt = new W(null, "skip", "skip", 602715391), zt = new W(null, "cell-r-px", "cell-r-px", 423637311), At = new W(null, "left", "left", -399115937), lj = new W("cljs.core", "not-found", "cljs.core/not-found", 
-1572889185), Bt = new W(null, "text", "text", -1790561697), Ct = new W(null, "element-w", "element-w", 2089708127), Dt = new W(null, "span", "span", 1394872991), Et = new W(null, "margin", "margin", -995903681), Ft = new W(null, "data", "data", -232669377);
function Gt(a, b) {
  var c = S.j(wj, a, b);
  return Td(c, ah.h(function(a) {
    return function(b) {
      return a === b;
    };
  }(c), b));
}
var Ht = function() {
  function a(a, b) {
    return O(a) < O(b) ? Ve.j($d, b, a) : Ve.j($d, a, b);
  }
  var b = null, c = function() {
    function a(c, d, h) {
      var l = null;
      2 < arguments.length && (l = L(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      a = Gt(O, $d.k(d, c, L([a], 0)));
      return Ve.j(dh, E(a), F(a));
    }
    a.w = 2;
    a.n = function(a) {
      var c = E(a);
      a = H(a);
      var d = E(a);
      a = F(a);
      return b(c, d, a);
    };
    a.k = b;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 0:
        return oj;
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.k(b, e, L(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.w = 2;
  b.n = c.n;
  b.p = function() {
    return oj;
  };
  b.g = function(a) {
    return a;
  };
  b.h = a;
  b.k = c.k;
  return b;
}(), It = function() {
  function a(a, b) {
    for (;;) {
      if (O(b) < O(a)) {
        var c = a;
        a = b;
        b = c;
      } else {
        return Ve.j(function(a, b) {
          return function(a, c) {
            return ye(b, c) ? a : le.h(a, c);
          };
        }(a, b), a, a);
      }
    }
  }
  var b = null, c = function() {
    function a(b, d, h) {
      var l = null;
      2 < arguments.length && (l = L(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      a = Gt(function(a) {
        return-O(a);
      }, $d.k(e, d, L([a], 0)));
      return Ve.j(b, E(a), F(a));
    }
    a.w = 2;
    a.n = function(a) {
      var b = E(a);
      a = H(a);
      var d = E(a);
      a = F(a);
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
        return c.k(b, e, L(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.w = 2;
  b.n = c.n;
  b.g = function(a) {
    return a;
  };
  b.h = a;
  b.k = c.k;
  return b;
}(), Jt = function() {
  function a(a, b) {
    return O(a) < O(b) ? Ve.j(function(a, c) {
      return ye(b, c) ? le.h(a, c) : a;
    }, a, a) : Ve.j(le, a, b);
  }
  var b = null, c = function() {
    function a(b, d, h) {
      var l = null;
      2 < arguments.length && (l = L(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      return Ve.j(b, a, $d.h(e, d));
    }
    a.w = 2;
    a.n = function(a) {
      var b = E(a);
      a = H(a);
      var d = E(a);
      a = F(a);
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
        return c.k(b, e, L(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.w = 2;
  b.n = c.n;
  b.g = function(a) {
    return a;
  };
  b.h = a;
  b.k = c.k;
  return b;
}();
Math.seedrandom = null;
(function(a, b, c, d, e, f) {
  function g(a) {
    var b, c = a.length, e = this, f = 0, g = e.H = e.Zd = 0, h = e.pd = [];
    for (c || (a = [c++]);f < d;) {
      h[f] = f++;
    }
    for (f = 0;f < d;f++) {
      h[f] = h[g = y & g + a[f % c] + (b = h[f])], h[g] = b;
    }
    (e.Xd = function(a) {
      for (var b, c = 0, f = e.H, g = e.Zd, h = e.pd;a--;) {
        b = h[f = y & f + 1], c = c * d + h[y & (h[f] = h[g = y & g + b]) + (h[g] = b)];
      }
      e.H = f;
      e.Zd = g;
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
  function m() {
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
  var s = c.pow(d, e), w = c.pow(2, f), A = 2 * w, y = d - 1;
  c.seedrandom = function(a, f) {
    var y = [], N = l(h(f ? [a, r(b)] : 0 in arguments ? a : m(), 3), y), K = new g(y);
    l(r(K.pd), b);
    c.random = function() {
      for (var a = K.Xd(e), b = s, c = 0;a < w;) {
        a = (a + c) * d, b *= d, c = K.Xd(1);
      }
      for (;a >= A;) {
        a /= 2, b /= 2, c >>>= 1;
      }
      return(a + c) / b;
    };
    return N;
  };
  l(c.random(), b);
})(this, [], Math, 256, 6, 52);
function Kt(a) {
  if (a ? a.xd : a) {
    return a.xd();
  }
  var b;
  b = Kt[n(null == a ? null : a)];
  if (!b && (b = Kt._, !b)) {
    throw t("IRandom.-next-double", a);
  }
  return b.call(null, a);
}
var Lt = function() {
  function a(a, b) {
    if (a ? a.zd : a) {
      return a.zd(0, b);
    }
    var c;
    c = Lt[n(null == a ? null : a)];
    if (!c && (c = Lt._, !c)) {
      throw t("IRandom.-next-int", a);
    }
    return c.call(null, a, b);
  }
  function b(a) {
    if (a ? a.yd : a) {
      return a.yd();
    }
    var b;
    b = Lt[n(null == a ? null : a)];
    if (!b && (b = Lt._, !b)) {
      throw t("IRandom.-next-int", a);
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
function Mt(a, b, c) {
  return b + (a.p ? a.p() : a.call(null)) * (c - b);
}
function Nt(a, b, c, d) {
  this.seed = a;
  this.Ra = b;
  this.F = c;
  this.v = d;
  this.q = 2229667594;
  this.G = 8192;
  2 < arguments.length ? (this.F = c, this.v = d) : this.v = this.F = null;
}
k = Nt.prototype;
k.K = function(a, b) {
  return Cb.j(this, b, null);
};
k.L = function(a, b, c) {
  switch(b instanceof W ? b.$ : null) {
    case "random-double":
      return this.Ra;
    case "seed":
      return this.seed;
    default:
      return Q.j(this.v, b, c);
  }
};
k.N = function(a, b, c) {
  return Gj(b, function() {
    return function(a) {
      return Gj(b, Mj, "", " ", "", c, a);
    };
  }(this), "#cemerick.pprng.SeededRandom{", ", ", "}", c, bg.h(new U(null, 2, 5, V, [new U(null, 2, 5, V, [Do, this.seed], null), new U(null, 2, 5, V, [pp, this.Ra], null)], null), this.v));
};
k.I = function() {
  return this.F;
};
k.T = function() {
  return 2 + O(this.v);
};
k.P = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Cf(this);
};
k.M = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && ei(this, b) : b) ? !0 : !1;
};
k.Sa = function(a, b) {
  return ye(new mj(null, new p(null, 2, [Do, null, pp, null], null), null), b) ? ge.h(Vd(dh.h(li, this), this.F), b) : new Nt(this.seed, this.Ra, this.F, kg(ge.h(this.v, b)), null);
};
k.va = function(a, b, c) {
  return q(X.h ? X.h(Do, b) : X.call(null, Do, b)) ? new Nt(c, this.Ra, this.F, this.v, null) : q(X.h ? X.h(pp, b) : X.call(null, pp, b)) ? new Nt(this.seed, c, this.F, this.v, null) : new Nt(this.seed, this.Ra, this.F, R.j(this.v, b, c), null);
};
k.Q = function() {
  return D(bg.h(new U(null, 2, 5, V, [new U(null, 2, 5, V, [Do, this.seed], null), new U(null, 2, 5, V, [pp, this.Ra], null)], null), this.v));
};
k.J = function(a, b) {
  return new Nt(this.seed, this.Ra, b, this.v, this.A);
};
k.S = function(a, b) {
  return re(b) ? Gb(this, v.h(b, 0), v.h(b, 1)) : Ve.j(ob, this, b);
};
k.xd = function() {
  return this.Ra.p ? this.Ra.p() : this.Ra.call(null);
};
k.yd = function() {
  return ef(Mt(this.Ra, -2147483648, 2147483647));
};
k.zd = function(a, b) {
  return ef(Mt(this.Ra, 0, b));
};
var Ot = function() {
  function a(a, b) {
    return Lt.h(a, b);
  }
  function b(a) {
    return Lt.g(a);
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
var Pt = function() {
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
}(), Qt = function() {
  function a(a) {
    Math.seedrandom.g ? Math.seedrandom.g(a) : Math.seedrandom.call(null, a);
    Math.seedrandom.g ? Math.seedrandom.g(a) : Math.seedrandom.call(null, a);
    return new Nt(a, Math.random);
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
  c.p = b;
  c.g = a;
  return c;
}().p(), Rt = function() {
  function a(a, b) {
    if (!(a < b)) {
      throw Error("Assert failed: " + u.g(zg.k(L([If(new Ad(null, "\x3c", "\x3c", 993667236, null), new Ad(null, "lower", "lower", -1534114948, null), new Ad(null, "upper", "upper", 1886775433, null))], 0))));
    }
    return a + Kt(Qt) * (b - a);
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
  c.p = b;
  c.h = a;
  return c;
}();
function St(a) {
  return 0 + Ot.h(Qt, a - 0);
}
function Tt(a) {
  a = Cg.j(If, Gg.g(function() {
    return Kt(Qt);
  }), a);
  return Cg.h(Xd, Ue.h(E, a));
}
function Ut(a, b) {
  return Ve.j(function(b, d) {
    return q(a.g ? a.g(d) : a.call(null, d)) ? b + 1 : b;
  }, 0, b);
}
function Vt(a, b) {
  return eg(Ve.j(function(a, b) {
    var e = P.j(b, 0, null), f = P.j(b, 1, null);
    return gg.j(a, e, Nc(f));
  }, Lc(li), eg(Ve.j(function(b, d) {
    var e = P.j(d, 0, null), f = P.j(d, 1, null), g = a.h ? a.h(e, f) : a.call(null, e, f), h = Q.j(b, g, Lc(li));
    return gg.j(b, g, gg.j(h, e, f));
  }, Lc(li), b))));
}
function Wt(a) {
  return eg(Ve.j(function(a, c) {
    var d = P.j(c, 0, null), e = P.j(c, 1, null);
    return gg.j(a, d, Nc(e));
  }, Lc(li), eg(Ve.j(function(a, c) {
    var d = E.g ? E.g(c) : E.call(null, c), e = Q.j(a, d, Lc(oj));
    return gg.j(a, d, fg.h(e, c));
  }, Lc(li), a))));
}
function Xt(a, b, c) {
  return db(D(b)) ? a : eg(Ve.j(function(a, b) {
    return gg.j(a, b, function() {
      var f = Q.h(a, b);
      return c.g ? c.g(f) : c.call(null, f);
    }());
  }, Lc(a), b));
}
function Yt(a, b) {
  return dh.h(function() {
    var a = null == b ? null : mb(b);
    return q(a) ? a : li;
  }(), eh.h(function(b) {
    var d = P.j(b, 0, null);
    b = P.j(b, 1, null);
    return new U(null, 2, 5, V, [d, a.g ? a.g(b) : a.call(null, b)], null);
  }, b));
}
;var Zt = fe([kk, Ak, Mk, Bn, Ln, po, Fp, Lp, Up, Hq, rr], [.1, 22, 5, 15, .1, 12, !0, .11, .5, 8, 8]);
function $t(a, b) {
  var c = P.j(b, 0, null);
  return P.j(b, 1, null) + c * a;
}
function au(a, b, c) {
  b = $t(b, c);
  return gh.h(a, new U(null, 2, 5, V, [hn, b], null));
}
function bu(a, b, c, d, e, f) {
  var g = mp.g(a), h = Ln.g(g), l = kk.g(g), m = Up.g(g), r = gh.h(a, new U(null, 7, 5, V, [Y, b, ar, c, io, d, lo], null)), s = Vt(function(a, b, c, d) {
    return function(a, g) {
      return q(e.g ? e.g(a) : e.call(null, a)) ? yt : q(f.g ? f.g(a) : f.call(null, a)) ? 1 === g ? yt : g < d && g >= d - b ? xt : To : g <= c ? Nm : g >= d && g < d + c ? Zo : jk;
    };
  }(g, h, l, m, r), r), w = ij.k(L([yt.g(s), Yt(function(a, b) {
    return function(a) {
      a += b;
      return 1 > a ? a : 1;
    };
  }(g, h, l, m, r, s), To.g(s)), Yt(function(a, b) {
    return function(a) {
      a += b;
      return 1 > a ? a : 1;
    };
  }(g, h, l, m, r, s), xt.g(s)), Yt(function(a, b, c) {
    return function(a) {
      return a - c;
    };
  }(g, h, l, m, r, s), jk.g(s)), Yt(function(a, b, c) {
    return function(a) {
      return a - c;
    };
  }(g, h, l, m, r, s), Zo.g(s))], 0)), A = new U(null, 3, 5, V, [b, c, d], null), y = rg.h($t, Hq.g(g)), C = Cg.h(y, gj(xt.g(s))), G = Cg.h(y, gj(Zo.g(s))), g = Xt(Xt(hn.g(a), C, function(a, b, c, d, e, f, g, h) {
    return function(a) {
      return $d.h(a, h);
    };
  }(g, h, l, m, r, s, w, A, y, C, G)), G, function(a, b, c, d, e, f, g, h) {
    return function(a) {
      return le.h(a, h);
    };
  }(g, h, l, m, r, s, w, A, y, C, G));
  return R.j(ih(a, new U(null, 7, 5, V, [Y, b, ar, c, io, d, lo], null), w), hn, g);
}
function cu(a, b, c, d, e) {
  var f = mp.g(a), g = rg.h($t, Hq.g(f)), h = Cg.h(g, e), l = new U(null, 3, 5, V, [b, c, d], null);
  return jh.O(jh.j(a, new U(null, 7, 5, V, [Y, b, ar, c, io, d, lo], null), function() {
    return function(a) {
      return S.j(ge, a, e);
    };
  }(f, g, h, l)), new U(null, 1, 5, V, [hn], null), Xt, h, function(a, b, c, d) {
    return function(a) {
      return le.h(a, d);
    };
  }(f, g, h, l));
}
function du(a, b, c, d, e) {
  var f = mp.g(a), g = Lp.g(f), h = Up.g(f), l = Ak.g(f), m = rg.h($t, Hq.g(f)), r = Cg.h(m, e), s = new U(null, 3, 5, V, [b, c, d], null), w = gh.h(a, new U(null, 7, 5, V, [Y, b, ar, c, io, d, lo], null));
  e = ij.k(L([w, rj(e, Fg.g(g))], 0));
  a = ih(a, new U(null, 7, 5, V, [Y, b, ar, c, io, d, lo], null), e);
  f = g >= h ? jh.O(a, new U(null, 1, 5, V, [hn], null), Xt, r, function(a, b, c, d, e, f, g, h) {
    return function(a) {
      return $d.h(a, h);
    };
  }(a, f, g, h, l, m, r, s, w, e)) : a;
  return O(e) > l ? cu(f, b, c, d, Dg.h(O(e) - l, gj(Ue.h(Ef, e)))) : f;
}
function eu(a, b) {
  return new p(null, 2, [Qp, new U(null, 2, 5, V, [b, a], null), io, Zd], null);
}
function fu(a, b) {
  var c = we(b) ? S.h(vg, b) : b, c = Q.h(c, Hq);
  return R.j(a, ar, eh.j(eu, zj.g(c), Fg.g(Qp.g(a))));
}
function gu(a, b, c) {
  return Ut(function(a) {
    var e = P.j(a, 0, null);
    return(a = P.j(a, 1, null) >= c) ? b.g ? b.g(e) : b.call(null, e) : a;
  }, lo.g(a));
}
function hu(a, b, c, d) {
  return Bg.h(function(a, f) {
    var g = gu(f, b, d);
    return g >= c ? R.k(f, ip, g, L([Hk, a], 0)) : null;
  }, io.g(a));
}
function iu(a, b) {
  var c = mp.g(a), d = po.g(c), e = Hq.g(c);
  return dh.h(oj, tg.h(function(a, b) {
    return function(a) {
      var c = P.j(a, 0, null);
      if (P.j(a, 1, null) >= b) {
        a = P.j(c, 0, null);
        var d = P.j(c, 1, null);
        P.j(c, 2, null);
        return new U(null, 2, 5, V, [a, d], null);
      }
      return null;
    };
  }(c, d, e), Aj(Zg.k(rg.j(au, a, e), L([b], 0)))));
}
function ju(a, b) {
  var c = gj(b), d = Y.g(a);
  return eg(Ve.j(function(a, b) {
    return function(c, d) {
      var l = b.g ? b.g(d) : b.call(null, d), m = Gn.g(dk.g(l));
      return Ve.j(function() {
        return function(a, b) {
          return gg.j(a, b, Q.j(a, b, 0) + 1);
        };
      }(l, m, a, b), c, gj(m));
    };
  }(c, d), Lc(li), c));
}
function ku(a, b, c, d) {
  c = ij.k(L([c, d], 0));
  return dh.h(li, Cg.h(function(b) {
    return function(c) {
      var d = P.h(Y.g(a), c), h = b.g ? b.g(c) : b.call(null, c), l = me(h), d = l ? Cg.h(Qp, ar.g(d)) : h;
      return new U(null, 2, 5, V, [c, new p(null, 2, [Bq, d, eo, l], null)], null);
    };
  }(c), b));
}
function lu(a, b, c) {
  a = hu(a, b, 0, c);
  return D(a) ? S.j(wj, ip, a) : new p(null, 2, [Hk, null, ip, 0], null);
}
function mu(a, b, c) {
  c = rr.g(c);
  var d = Cg.h(function() {
    return function(a) {
      return R.j(lu(a, b, 0), Fq, Qp.g(a));
    };
  }(c), a), d = S.j(wj, ip, d);
  return ip.g(d) >= c ? d : new p(null, 1, [Fq, Qp.g(S.j(xj, qg.h(O, io), a))], null);
}
function nu(a, b, c) {
  var d = mp.g(a), e = Mk.g(d), f = Ak.g(d), g = rr.g(d), h = Up.g(d);
  a = gh.h(a, new U(null, 5, 5, V, [Y, b, ar, c, io], null));
  if (O(a) >= e) {
    return S.j(xj, function(a, b, c, d, e, f) {
      return function(g) {
        g = lo.g(Q.h(f, g));
        return Ut(function(a, b, c, d, e, f) {
          return function(a) {
            return a >= f;
          };
        }(g, a, b, c, d, e, f), ji(g)) + O(g) / c;
      };
    }(d, e, f, g, h, a), zj.g(O(a)));
  }
  d = mg(function(a, b, c, d) {
    return function(a) {
      var b = P.j(a, 0, null);
      a = P.j(a, 1, null);
      return O(lo.g(a)) < d ? b : null;
    };
  }(d, e, f, g, h, a), sg(Ah, a));
  return q(d) ? d : O(a);
}
function ou(a, b, c, d) {
  a = lo.g(a);
  b = dh.h(pj([b]), Cg.h(E, gj(a)));
  return Dg.h(d, Tt(ah.h(function(a, b) {
    return function(a) {
      var c = P.j(a, 0, null);
      P.j(a, 1, null);
      return b.g ? b.g(c) : b.call(null, c);
    };
  }(a, b), c)));
}
function pu(a, b, c, d) {
  var e = mp.g(a), f = po.g(e), g = Up.g(e), h = gh.h(a, new U(null, 4, 5, V, [Y, b, ar, c], null)), l = hu(h, d, f, g);
  return Ve.j(function() {
    return function(a, e) {
      var f = Hk.g(e);
      return bu(a, b, c, f, d, pg(!1));
    };
  }(e, f, g, h, l), a, l);
}
function qu(a, b, c, d, e) {
  b = Jt.k(e, b, L([d], 0));
  return Ve.j(function() {
    return function(a, b) {
      var d = P.j(b, 0, null), e = P.j(b, 1, null);
      return pu(a, d, e, c);
    };
  }(b), a, b);
}
function ru(a, b, c, d, e, f) {
  return q(c) ? (P.j(c, 0, null), b = P.j(c, 1, null), b = Q.h(ar.g(a), b), ob(Dd, mu(new U(null, 1, 5, V, [b], null), e, f))) : q(b) ? ob(Dd, mu(ar.g(a), e, f)) : function(b) {
    return function l(c) {
      return new Mf(null, function(b) {
        return function() {
          for (;;) {
            var d = D(c);
            if (d) {
              if (T(d)) {
                var f = x(d), g = O(f), y = Uf(g);
                a: {
                  for (var C = 0;;) {
                    if (C < g) {
                      var G = v.h(f, C), I = G;
                      P.j(I, 0, null);
                      I = P.j(I, 1, null);
                      I = P.h(ar.g(a), I);
                      G = R.j(lu(I, e, b), Fq, G);
                      y.add(G);
                      C += 1;
                    } else {
                      f = !0;
                      break a;
                    }
                  }
                  f = void 0;
                }
                return f ? Xf(y.R(), l(z(d))) : Xf(y.R(), null);
              }
              f = y = E(d);
              P.j(f, 0, null);
              f = P.j(f, 1, null);
              f = P.h(ar.g(a), f);
              return Td(R.j(lu(f, e, b), Fq, y), l(F(d)));
            }
            return null;
          }
        };
      }(b), null, null);
    };
  }(Up.g(f))(d);
}
function su(a, b, c, d, e, f, g) {
  if (q(d)) {
    return a = bu(a, b, c, d, pg(!1), g), q(e) ? (e = new U(null, 6, 5, V, [Y, b, ar, c, io, d], null), g = gu(e, g, 0), g = Bn.g(mp.g(a)) - g, b = 0 < g ? du(a, b, c, d, ou(e, b, f, g)) : a) : b = a, b;
  }
  d = mp.g(a);
  g = Bn.g(d);
  e = rr.g(d);
  d = nu(a, b, c);
  f = ou(new p(null, 1, [lo, li], null), b, f, g);
  O(f) < e ? b = a : (g = gh.h(a, new U(null, 7, 5, V, [Y, b, ar, c, io, d, lo], null)), a = D(g) ? cu(a, b, c, d, gj(g)) : a, b = du(a, b, c, d, f));
  return b;
}
function tu(a, b, c, d, e, f, g, h) {
  var l = mo.h(a, oj), m = mp.g(a);
  a = R.k(a, mo, oj, L([en, li], 0));
  b = We(function(a, b, c) {
    return function(f, g, l) {
      var m = we(l) ? S.h(vg, l) : l, I = Q.h(m, Bq), N = gh.h(f, new U(null, 2, 5, V, [Y, g], null)), K = d.g ? d.g(g) : d.call(null, g), da = E(h.g ? h.g(g) : h.call(null, g)), ea = ru(N, K, da, I, e, b);
      return Ve.j(function(a, b, c, d, f, h, l, r) {
        return function(a, c) {
          var d = we(c) ? S.h(vg, c) : c, f = Q.h(d, Hk), d = Q.h(d, Fq);
          P.j(d, 0, null);
          d = P.j(d, 1, null);
          return jh.O(jh.m(su(a, g, d, f, b, r, e), new U(null, 1, 5, V, [mo], null), $d, new U(null, 2, 5, V, [g, d], null)), new U(null, 1, 5, V, [en], null), R, new U(null, 2, 5, V, [g, d], null), f);
        };
      }(N, K, da, ea, l, m, I, a, b, c), f, ea);
    };
  }(l, m, a), a, b);
  return q(Fp.g(m)) ? qu(b, c, e, f, g) : b;
}
function uu(a, b, c) {
  var d = Cp.h(a, oj), e = Sp.h(a, oj), f = eq.h(a, li), g = lr.h(a, oj), h = gj(Pm.h(a, li)), l = kj(Sj(E, g), h);
  b = ku(a, b, f, l);
  var g = qj(tg.h(function() {
    return function(a) {
      var b = P.j(a, 0, null);
      a = P.j(a, 1, null);
      return q(eo.g(a)) ? b : null;
    };
  }(d, e, f, g, h, l, b), b)), m = qj(Zg.k(Bq, L([ji(b)], 0))), r = qj(Zg.k(qg.h(Bq, b), L([h], 0))), s = qj(Zg.k(Bq, L([ji(S.j(ge, b, g))], 0))), h = iu(a, m), w = Wt(h);
  a = R.k(a, Cp, m, L([nr, g, Rn, s, lr, r, Sp, h, eq, w, Um, f], 0));
  return q(c) ? tu(a, b, m, g, d, h, e, l) : a;
}
;function vu(a) {
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
;var wu;
a: {
  var xu = aa.navigator;
  if (xu) {
    var yu = xu.userAgent;
    if (yu) {
      wu = yu;
      break a;
    }
  }
  wu = "";
}
;var zu = -1 != wu.indexOf("Opera") || -1 != wu.indexOf("OPR"), Au = -1 != wu.indexOf("Trident") || -1 != wu.indexOf("MSIE"), Bu = -1 != wu.indexOf("Gecko") && -1 == wu.toLowerCase().indexOf("webkit") && !(-1 != wu.indexOf("Trident") || -1 != wu.indexOf("MSIE")), Cu = -1 != wu.toLowerCase().indexOf("webkit");
function Du() {
  var a = aa.document;
  return a ? a.documentMode : void 0;
}
var Eu = function() {
  var a = "", b;
  if (zu && aa.opera) {
    return a = aa.opera.version, ia(a) ? a() : a;
  }
  Bu ? b = /rv\:([^\);]+)(\)|;)/ : Au ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : Cu && (b = /WebKit\/(\S+)/);
  b && (a = (a = b.exec(wu)) ? a[1] : "");
  return Au && (b = Du(), b > parseFloat(a)) ? String(b) : a;
}(), Fu = {};
function Gu(a) {
  var b;
  if (!(b = Fu[a])) {
    b = 0;
    for (var c = String(Eu).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), f = 0;0 == b && f < e;f++) {
      var g = c[f] || "", h = d[f] || "", l = RegExp("(\\d*)(\\D*)", "g"), m = RegExp("(\\d*)(\\D*)", "g");
      do {
        var r = l.exec(g) || ["", "", ""], s = m.exec(h) || ["", "", ""];
        if (0 == r[0].length && 0 == s[0].length) {
          break;
        }
        b = Ba(0 == r[1].length ? 0 : parseInt(r[1], 10), 0 == s[1].length ? 0 : parseInt(s[1], 10)) || Ba(0 == r[2].length, 0 == s[2].length) || Ba(r[2], s[2]);
      } while (0 == b);
    }
    b = Fu[a] = 0 <= b;
  }
  return b;
}
var Hu = aa.document, Iu = Hu && Au ? Du() || ("CSS1Compat" == Hu.compatMode ? parseInt(Eu, 10) : 5) : void 0;
var Ju = !Au || Au && 9 <= Iu;
!Bu && !Au || Au && Au && 9 <= Iu || Bu && Gu("1.9.1");
var Ku = Au && !Gu("9");
function Lu(a) {
  return a ? new Mu(Nu(a)) : La || (La = new Mu);
}
function Ou(a, b) {
  var c = b && "*" != b ? b.toUpperCase() : "";
  return a.querySelectorAll && a.querySelector && c ? a.querySelectorAll(c + "") : a.getElementsByTagName(c || "*");
}
function Pu(a, b) {
  Da(b, function(b, d) {
    "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in Qu ? a.setAttribute(Qu[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b;
  });
}
var Qu = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", frameborder:"frameBorder", height:"height", maxlength:"maxLength", role:"role", rowspan:"rowSpan", type:"type", usemap:"useMap", valign:"vAlign", width:"width"};
function Ru(a, b, c, d) {
  function e(c) {
    c && b.appendChild(ha(c) ? a.createTextNode(c) : c);
  }
  for (;d < c.length;d++) {
    var f = c[d];
    !ca(f) || ja(f) && 0 < f.nodeType ? e(f) : Pa(Su(f) ? Qa(f) : f, e);
  }
}
function Tu(a) {
  return void 0 != a.firstElementChild ? a.firstElementChild : Uu(a.firstChild);
}
function Uu(a) {
  for (;a && 1 != a.nodeType;) {
    a = a.nextSibling;
  }
  return a;
}
function Nu(a) {
  return 9 == a.nodeType ? a : a.ownerDocument || a.document;
}
var Vu = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, Wu = {IMG:" ", BR:"\n"};
function Xu(a) {
  if (Ku && "innerText" in a) {
    a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
  } else {
    var b = [];
    Yu(a, b, !0);
    a = b.join("");
  }
  a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
  a = a.replace(/\u200B/g, "");
  Ku || (a = a.replace(/ +/g, " "));
  " " != a && (a = a.replace(/^\s*/, ""));
  return a;
}
function Yu(a, b, c) {
  if (!(a.nodeName in Vu)) {
    if (3 == a.nodeType) {
      c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
    } else {
      if (a.nodeName in Wu) {
        b.push(Wu[a.nodeName]);
      } else {
        for (a = a.firstChild;a;) {
          Yu(a, b, c), a = a.nextSibling;
        }
      }
    }
  }
}
function Su(a) {
  if (a && "number" == typeof a.length) {
    if (ja(a)) {
      return "function" == typeof a.item || "string" == typeof a.item;
    }
    if (ia(a)) {
      return "function" == typeof a.item;
    }
  }
  return!1;
}
function Mu(a) {
  this.Zb = a || aa.document || document;
}
k = Mu.prototype;
k.Ib = function(a, b, c) {
  var d = this.Zb, e = arguments, f = e[0], g = e[1];
  if (!Ju && g && (g.name || g.type)) {
    f = ["\x3c", f];
    g.name && f.push(' name\x3d"', pa(g.name), '"');
    if (g.type) {
      f.push(' type\x3d"', pa(g.type), '"');
      var h = {};
      Ga(h, g);
      delete h.type;
      g = h;
    }
    f.push("\x3e");
    f = f.join("");
  }
  f = d.createElement(f);
  g && (ha(g) ? f.className = g : "array" == n(g) ? f.className = g.join(" ") : Pu(f, g));
  2 < e.length && Ru(d, f, e, 2);
  return f;
};
k.createElement = function(a) {
  return this.Zb.createElement(a);
};
k.createTextNode = function(a) {
  return this.Zb.createTextNode(String(a));
};
k.appendChild = function(a, b) {
  a.appendChild(b);
};
k.append = function(a, b) {
  Ru(Nu(a), a, arguments, 1);
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
var Zu, $u, av, bv, cv, dv, ev, fv, gv, hv, iv, jv, kv, lv, mv, nv, ov = {}.hasOwnProperty;
fv = function(a) {
  console.log(a);
};
iv = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
hv = /^(svg|g|rect|circle|clipPath|path|line|polygon|polyline|text|textPath)$/;
jv = /^\s+$/;
gv = /:(.+)/;
nv = {Cf:"http://www.w3.org/1999/xhtml", Nf:"http://www.w3.org/1999/xlink", vf:"http://www.w3.org/2000/svg", xml:"http://www.w3.org/XML/1998/namespace", Of:"http://www.w3.org/2000/xmlns"};
dv = function(a) {
  var b, c;
  c = a.split(":");
  b = c[0];
  c = c[1];
  return null != c ? [nv[b] || b, c] : a.match(hv) ? [nv.vf, a] : [nv.Cf, a];
};
av = function(a) {
  return ":*:" === a[0];
};
lv = function(a) {
  return null != a && a instanceof pv;
};
bv = function(a) {
  return null != a && !1;
};
Zu = function(a) {
  return null != a && null != a.forEach;
};
cv = function(a) {
  return null != a && !Zu(a) && !lv(a) && !bv(a) && a instanceof Object;
};
$u = function(a) {
  return null != a && null != a.nodeType;
};
kv = function(a) {
  return null != a && null != a.substring;
};
ev = function(a) {
  return null != a && null != a.toFixed;
};
mv = function(a) {
  return 8 === a.nodeType || 3 === a.nodeType && a.textContent.match(jv);
};
function qv(a, b) {
  var c, d, e, f, g;
  if (null != b.style) {
    f = b.style;
    var h;
    h = [];
    for (g in f) {
      ov.call(f, g) && (c = f[g], h.push(a.style[Ca(g)] = c));
    }
    delete b.style;
  }
  if (null != b.properties) {
    f = b.properties;
    c = [];
    for (e in f) {
      ov.call(f, e) && (g = f[e], c.push(a[e] = g));
    }
    delete b.properties;
  }
  Zu(b["class"]) && (a.setAttribute("class", b["class"].join(" ")), delete b["class"]);
  g = [];
  for (d in b) {
    ov.call(b, d) && (f = b[d], null != f ? (c = d.split(gv), e = c[0], c = c[1], null != c ? g.push(a.setAttributeNS(nv[e] || e, c, f)) : g.push(a.setAttribute(d, f))) : g.push(a.removeAttribute(d)));
  }
}
function rv(a, b) {
  return null != b ? a.__singult_data__ = b : a.__singult_data__;
}
function sv(a) {
  return ev(a) ? a.toString() : Zu(a) ? tv(a) : a;
}
function tv(a) {
  var b, c, d, e, f;
  f = a[0];
  d = cv(a[1]) ? [a[1], a.slice(2)] : [{}, a.slice(1)];
  a = d[0];
  d = d[1];
  e = f.match(iv);
  f = e[1];
  b = e[2];
  e = e[3];
  null != b && (a.id = b);
  null != e && (b = e.split("."), Zu(a["class"]) ? a["class"] = a["class"].concat(b) : kv(a["class"]) ? a["class"] = b.concat([a["class"]]) : null == a["class"] && (a["class"] = b));
  f = dv(f);
  b = f[0];
  f = f[1];
  c = [];
  d.forEach(function(a) {
    if (null != a) {
      return av(a) ? a.slice(1).forEach(function(a) {
        return c.push(sv(a));
      }) : c.push(sv(a));
    }
  });
  return{ef:b, tag:f, sd:a, children:c};
}
function uv(a) {
  var b, c;
  if (lv(a)) {
    throw Error("Unify must be the first and only child of its parent.");
  }
  if (bv(a)) {
    return null;
  }
  if (kv(a)) {
    return document.createTextNode(a);
  }
  if ($u(a)) {
    return a;
  }
  b = document.createElementNS(a.ef, a.tag);
  qv(b, a.sd);
  lv(c = a.children[0]) ? null != c.qa ? c.data.forEach(function(a) {
    var e;
    e = c.qa(a);
    rv(e, a);
    return b.appendChild(e);
  }) : c.data.forEach(function(a) {
    var e;
    e = uv(sv(c.sa(a)));
    rv(e, a);
    return b.appendChild(e);
  }) : a.children.forEach(function(a) {
    a = uv(a);
    if (null != a) {
      return b.appendChild(a);
    }
  });
  return b;
}
function pv(a, b, c, d, e, f, g) {
  this.data = a;
  this.sa = b;
  this.Ea = c;
  this.qa = d;
  this.update = e;
  this.Da = f;
  this.Le = g;
  return this;
}
function vv(a, b) {
  var c, d, e, f, g, h, l, m, r, s, w, A, y;
  g = b.qa || function(c) {
    c = uv(sv(b.sa(c)));
    a.appendChild(c);
    return c;
  };
  y = b.update || function(a, c) {
    return wv(a, sv(b.sa(c)));
  };
  h = b.Da || function(b) {
    return a.removeChild(b);
  };
  r = b.Ea || function(a, b) {
    return b;
  };
  c = a.childNodes;
  f = function(a, b) {
    return "\x00" + r(a, b);
  };
  w = function(a, b) {
    return f(rv(a), b);
  };
  s = function(a, c) {
    var d;
    if (b.Le) {
      return d = y(a, c), rv(d, c);
    }
    d = rv(a);
    if (null != d.M ? !d.M(d, c) : d !== c) {
      return d = y(a, c), rv(d, c);
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
    m = w(c[d], d), e[m] && (A[m] = c[d]), d += 1;
  }
  b.data.forEach(function(a, b) {
    var d, e, r;
    r = (d = b < c.length ? c[b] : void 0) ? w(d, b) : void 0;
    e = f(a, b);
    if (null == d) {
      return d = g(a), rv(d, a);
    }
    if (r === e) {
      return s(c[b], a);
    }
    A[r] || h(d);
    if (A[e]) {
      return d = A[e], l(d, b), s(d, a);
    }
    d = g(a);
    l(d, b);
    return rv(d, a);
  });
  for (d = b.data.length;d < c.length;) {
    h(c[d]);
  }
}
function wv(a, b) {
  var c, d, e, f;
  if (lv(b)) {
    vv(a, b);
  } else {
    if (!bv(b)) {
      if (a.nodeName.toLowerCase() !== b.tag.toLowerCase()) {
        throw fv(a), fv(b), Error("Cannot merge $e into node of different type");
      }
      qv(a, b.sd);
      if (a.hasChildNodes()) {
        for (e = d = f = a.childNodes.length - 1;0 >= f ? 0 >= d : 0 <= d;e = 0 >= f ? ++d : --d) {
          c = a.childNodes[e], mv(c) && a.removeChild(c);
        }
      }
      if (lv(b.children[0])) {
        wv(a, b.children[0]);
      } else {
        if (a.childNodes.length > b.children.length) {
          for (e = c = d = a.childNodes.length - 1;0 >= d ? 0 >= c : 0 <= c;e = 0 >= d ? ++c : --c) {
            a.removeChild(a.childNodes[e]);
          }
        }
        for (e = 0;e < b.children.length;) {
          d = b.children[e] || "";
          c = a.childNodes[e];
          if (kv(d)) {
            null != c ? c.textContent = d : a.appendChild(document.createTextNode(d));
          } else {
            if (!bv(d)) {
              if (cv(d)) {
                null != c ? wv(c, d) : a.appendChild(uv(d));
              } else {
                throw fv(c), fv(d), Error("Cannot merge children");
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
;function xv(a, b, c, d, e, f, g, h, l) {
  this.data = a;
  this.sa = b;
  this.Ea = c;
  this.qa = d;
  this.update = e;
  this.Da = f;
  this.La = g;
  this.F = h;
  this.v = l;
  this.q = 2229667594;
  this.G = 8192;
  7 < arguments.length ? (this.F = h, this.v = l) : this.v = this.F = null;
}
k = xv.prototype;
k.K = function(a, b) {
  return Cb.j(this, b, null);
};
k.L = function(a, b, c) {
  switch(b instanceof W ? b.$ : null) {
    case "force-update?":
      return this.La;
    case "exit":
      return this.Da;
    case "update":
      return this.update;
    case "enter":
      return this.qa;
    case "key-fn":
      return this.Ea;
    case "mapping":
      return this.sa;
    case "data":
      return this.data;
    default:
      return Q.j(this.v, b, c);
  }
};
k.N = function(a, b, c) {
  return Gj(b, function() {
    return function(a) {
      return Gj(b, Mj, "", " ", "", c, a);
    };
  }(this), "#singult.core.Unify{", ", ", "}", c, bg.h(new U(null, 7, 5, V, [new U(null, 2, 5, V, [Ft, this.data], null), new U(null, 2, 5, V, [tn, this.sa], null), new U(null, 2, 5, V, [lp, this.Ea], null), new U(null, 2, 5, V, [Xo, this.qa], null), new U(null, 2, 5, V, [Vn, this.update], null), new U(null, 2, 5, V, [Lm, this.Da], null), new U(null, 2, 5, V, [pr, this.La], null)], null), this.v));
};
k.I = function() {
  return this.F;
};
k.T = function() {
  return 7 + O(this.v);
};
k.P = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Cf(this);
};
k.M = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && ei(this, b) : b) ? !0 : !1;
};
k.Sa = function(a, b) {
  return ye(new mj(null, new p(null, 7, [Lm, null, tn, null, Vn, null, Xo, null, lp, null, pr, null, Ft, null], null), null), b) ? ge.h(Vd(dh.h(li, this), this.F), b) : new xv(this.data, this.sa, this.Ea, this.qa, this.update, this.Da, this.La, this.F, kg(ge.h(this.v, b)), null);
};
k.va = function(a, b, c) {
  return q(X.h ? X.h(Ft, b) : X.call(null, Ft, b)) ? new xv(c, this.sa, this.Ea, this.qa, this.update, this.Da, this.La, this.F, this.v, null) : q(X.h ? X.h(tn, b) : X.call(null, tn, b)) ? new xv(this.data, c, this.Ea, this.qa, this.update, this.Da, this.La, this.F, this.v, null) : q(X.h ? X.h(lp, b) : X.call(null, lp, b)) ? new xv(this.data, this.sa, c, this.qa, this.update, this.Da, this.La, this.F, this.v, null) : q(X.h ? X.h(Xo, b) : X.call(null, Xo, b)) ? new xv(this.data, this.sa, this.Ea, 
  c, this.update, this.Da, this.La, this.F, this.v, null) : q(X.h ? X.h(Vn, b) : X.call(null, Vn, b)) ? new xv(this.data, this.sa, this.Ea, this.qa, c, this.Da, this.La, this.F, this.v, null) : q(X.h ? X.h(Lm, b) : X.call(null, Lm, b)) ? new xv(this.data, this.sa, this.Ea, this.qa, this.update, c, this.La, this.F, this.v, null) : q(X.h ? X.h(pr, b) : X.call(null, pr, b)) ? new xv(this.data, this.sa, this.Ea, this.qa, this.update, this.Da, c, this.F, this.v, null) : new xv(this.data, this.sa, this.Ea, 
  this.qa, this.update, this.Da, this.La, this.F, R.j(this.v, b, c), null);
};
k.Q = function() {
  return D(bg.h(new U(null, 7, 5, V, [new U(null, 2, 5, V, [Ft, this.data], null), new U(null, 2, 5, V, [tn, this.sa], null), new U(null, 2, 5, V, [lp, this.Ea], null), new U(null, 2, 5, V, [Xo, this.qa], null), new U(null, 2, 5, V, [Vn, this.update], null), new U(null, 2, 5, V, [Lm, this.Da], null), new U(null, 2, 5, V, [pr, this.La], null)], null), this.v));
};
k.J = function(a, b) {
  return new xv(this.data, this.sa, this.Ea, this.qa, this.update, this.Da, this.La, b, this.v, this.A);
};
k.S = function(a, b) {
  return re(b) ? Gb(this, v.h(b, 0), v.h(b, 1)) : Ve.j(ob, this, b);
};
var zv = function yv(b) {
  if (b instanceof xv) {
    var c = we(b) ? S.h(vg, b) : b, d = Q.h(c, pr), e = Q.h(c, Lm), f = Q.h(c, Vn), g = Q.h(c, Xo), h = Q.h(c, lp), l = Q.h(c, tn), m = Q.h(c, Ft), r = function() {
      for (var b = [], c = D(m), d = null, e = 0, f = 0;;) {
        if (f < e) {
          var g = d.D(null, f);
          b.push(g);
          f += 1;
        } else {
          if (c = D(c)) {
            d = c, T(d) ? (c = x(d), f = z(d), d = c, e = O(c), c = f) : (c = E(d), b.push(c), c = H(d), d = null, e = 0), f = 0;
          } else {
            break;
          }
        }
      }
      return b;
    }();
    return new pv(r, function(b, c, d, e, f, g, h, l) {
      return function(b) {
        return yv(l.g ? l.g(b) : l.call(null, b));
      };
    }(b, c, d, e, f, g, h, l, m, r), h, g, f, e, d);
  }
  if (b instanceof W) {
    return Kf(b);
  }
  if (qe(b)) {
    c = {};
    b = D(b);
    d = null;
    for (f = e = 0;;) {
      if (f < e) {
        h = d.D(null, f);
        g = P.j(h, 0, null);
        h = P.j(h, 1, null);
        g = yv(g);
        if ("string" !== typeof g) {
          throw "Cannot convert; JavaScript map keys must be strings";
        }
        c[g] = yv(h);
        f += 1;
      } else {
        if (b = D(b)) {
          if (T(b)) {
            e = x(b), b = z(b), d = e, e = O(e);
          } else {
            e = E(b);
            d = P.j(e, 0, null);
            e = P.j(e, 1, null);
            d = yv(d);
            if ("string" !== typeof d) {
              throw "Cannot convert; JavaScript map keys must be strings";
            }
            c[d] = yv(e);
            b = H(b);
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
  if (we(b)) {
    c = [];
    c.push(":*:");
    b = D(b);
    d = null;
    for (f = e = 0;;) {
      if (f < e) {
        g = d.D(null, f), c.push(yv(g)), f += 1;
      } else {
        if (b = D(b)) {
          d = b, T(d) ? (b = x(d), f = z(d), d = b, e = O(b), b = f) : (b = E(d), c.push(yv(b)), b = H(d), d = null, e = 0), f = 0;
        } else {
          break;
        }
      }
    }
    return c;
  }
  if (ne(b)) {
    c = [];
    b = D(b);
    d = null;
    for (f = e = 0;;) {
      if (f < e) {
        g = d.D(null, f), c.push(yv(g)), f += 1;
      } else {
        if (b = D(b)) {
          d = b, T(d) ? (b = x(d), f = z(d), d = b, e = O(b), b = f) : (b = E(d), c.push(yv(b)), b = H(d), d = null, e = 0), f = 0;
        } else {
          break;
        }
      }
    }
    return c;
  }
  return b;
};
function Av(a, b) {
  if (null == b) {
    return null;
  }
  var c;
  c = zv(b);
  c = sv.g ? sv.g(c) : sv.call(null, c);
  return wv.h ? wv.h(a, c) : wv.call(null, a, c);
}
var Bv = function() {
  function a(a, d, e) {
    var f = null;
    2 < arguments.length && (f = L(Array.prototype.slice.call(arguments, 2), 0));
    return b.call(this, a, d, f);
  }
  function b(a, b, e) {
    var f = we(e) ? S.h(vg, e) : e;
    e = Q.h(f, pr);
    var g = Q.h(f, Lm), h = Q.h(f, Vn), l = Q.h(f, Xo), f = Q.h(f, lp);
    return new xv(a, b, f, l, h, g, e);
  }
  a.w = 2;
  a.n = function(a) {
    var d = E(a);
    a = H(a);
    var e = E(a);
    a = F(a);
    return b(d, e, a);
  };
  a.k = b;
  return a;
}();
function Cv(a) {
  Au && ba(a.cssText) ? a.cssText = ".goog-tabpane-clear { clear: both; height: 0px; overflow: hidden }" : a.innerHTML = ".goog-tabpane-clear { clear: both; height: 0px; overflow: hidden }";
}
;q("undefined" != typeof NodeList) && (NodeList.prototype.Dd = !0, NodeList.prototype.Q = function() {
  return L.h(this, 0);
});
HTMLCollection.prototype.Dd = !0;
HTMLCollection.prototype.Q = function() {
  return L.h(this, 0);
};
function Dv(a) {
  if (a ? a.Qc : a) {
    return a.Qc(a);
  }
  var b;
  b = Dv[n(null == a ? null : a)];
  if (!b && (b = Dv._, !b)) {
    throw t("IDom.-\x3edom", a);
  }
  return b.call(null, a);
}
U.prototype.Qc = function() {
  var a;
  a = zv(this);
  a = sv.g ? sv.g(a) : sv.call(null, a);
  return uv.g ? uv.g(a) : uv.call(null, a);
};
Dv.string = function(a) {
  return Ev.g ? Ev.g(a) : Ev.call(null, a);
};
q("undefined" != typeof Node) && (Node.prototype.Qc = function() {
  return this;
});
var Ev = function() {
  function a(a, b) {
    return Dv(b).querySelector(a);
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
}(), Fv = function() {
  function a(a, b) {
    var c = Dv(a);
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
          c.appendChild(Nu(c).createTextNode(String(b)));
        }
      }
    }
    return c;
  }
  function b(a) {
    a = Dv(a);
    return Xu(a);
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
}(), Gv = function() {
  function a(a, b) {
    var c = Dv(a), g = c.type;
    if (ba(g)) {
      switch(g.toLowerCase()) {
        case "checkbox":
        ;
        case "radio":
          c.checked = b ? "checked" : null;
          break;
        case "select-one":
          c.selectedIndex = -1;
          if (ha(b)) {
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
          ha(g) && (g = [g]);
          for (var l = 0;h = c.options[l];l++) {
            if (h.selected = !1, g) {
              for (var m, r = 0;m = g[r];r++) {
                h.value == m && (h.selected = !0);
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
    a = Dv(a);
    return vu(a);
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
}(), Hv = function() {
  var a = window.requestAnimationFrame;
  if (q(a)) {
    return a;
  }
  var b = window.webkitRequestAnimationFrame;
  return q(b) ? b : function(a, b) {
    return function(e) {
      return setTimeout(function() {
        return function() {
          return e.p ? e.p() : e.call(null);
        };
      }(a, b), 10);
    };
  }(b, a);
}();
var Iv;
function Jv(a) {
  var b = Iv;
  try {
    Iv = function() {
      var a = new p(null, 1, [Xj, !0], null);
      return xg.j ? xg.j(oj, $a, a) : xg.call(null, oj, $a, a);
    }();
    var c = a.p ? a.p() : a.call(null);
    we(c) && Dj.g(c);
    return new p(null, 2, [Sq, c, Tm, function() {
      var a = Iv;
      return M.g ? M.g(a) : M.call(null, a);
    }()], null);
  } finally {
    Iv = b;
  }
}
function Kv(a) {
  q(function() {
    var b = Iv;
    return q(b) ? db(Xj.g(je(a))) : b;
  }()) && Ag.h(Iv, function(b) {
    return $d.h(b, a);
  });
}
ug.prototype.Vb = function() {
  Kv(this);
  return this.state;
};
function Lv(a, b, c, d, e, f, g, h) {
  this.state = a;
  this.wa = b;
  this.f = c;
  this.key = d;
  this.Ha = e;
  this.ba = f;
  this.F = g;
  this.v = h;
  this.q = 2229700362;
  this.G = 8194;
  6 < arguments.length ? (this.F = g, this.v = h) : this.v = this.F = null;
}
k = Lv.prototype;
k.K = function(a, b) {
  return Cb.j(this, b, null);
};
k.L = function(a, b, c) {
  switch(b instanceof W ? b.$ : null) {
    case "watches":
      return this.ba;
    case "parent-watchables":
      return this.Ha;
    case "key":
      return this.key;
    case "f":
      return this.f;
    case "dirty?":
      return this.wa;
    case "state":
      return this.state;
    default:
      return Q.j(this.v, b, c);
  }
};
k.N = function(a, b, c) {
  return Gj(b, function() {
    return function(a) {
      return Gj(b, Mj, "", " ", "", c, a);
    };
  }(this), "#reflex.core.ComputedObservable{", ", ", "}", c, bg.h(new U(null, 6, 5, V, [new U(null, 2, 5, V, [Yn, this.state], null), new U(null, 2, 5, V, [xn, this.wa], null), new U(null, 2, 5, V, [Dq, this.f], null), new U(null, 2, 5, V, [Ik, this.key], null), new U(null, 2, 5, V, [on, this.Ha], null), new U(null, 2, 5, V, [bk, this.ba], null)], null), this.v));
};
k.I = function() {
  return this.F;
};
k.T = function() {
  return 6 + O(this.v);
};
k.P = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Cf(this);
};
k.M = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && ei(this, b) : b) ? !0 : !1;
};
k.Sa = function(a, b) {
  return ye(new mj(null, new p(null, 6, [bk, null, Ik, null, on, null, xn, null, Yn, null, Dq, null], null), null), b) ? ge.h(Vd(dh.h(li, this), this.F), b) : new Lv(this.state, this.wa, this.f, this.key, this.Ha, this.ba, this.F, kg(ge.h(this.v, b)), null);
};
k.va = function(a, b, c) {
  return q(X.h ? X.h(Yn, b) : X.call(null, Yn, b)) ? new Lv(c, this.wa, this.f, this.key, this.Ha, this.ba, this.F, this.v, null) : q(X.h ? X.h(xn, b) : X.call(null, xn, b)) ? new Lv(this.state, c, this.f, this.key, this.Ha, this.ba, this.F, this.v, null) : q(X.h ? X.h(Dq, b) : X.call(null, Dq, b)) ? new Lv(this.state, this.wa, c, this.key, this.Ha, this.ba, this.F, this.v, null) : q(X.h ? X.h(Ik, b) : X.call(null, Ik, b)) ? new Lv(this.state, this.wa, this.f, c, this.Ha, this.ba, this.F, this.v, 
  null) : q(X.h ? X.h(on, b) : X.call(null, on, b)) ? new Lv(this.state, this.wa, this.f, this.key, c, this.ba, this.F, this.v, null) : q(X.h ? X.h(bk, b) : X.call(null, bk, b)) ? new Lv(this.state, this.wa, this.f, this.key, this.Ha, c, this.F, this.v, null) : new Lv(this.state, this.wa, this.f, this.key, this.Ha, this.ba, this.F, R.j(this.v, b, c), null);
};
k.Q = function() {
  return D(bg.h(new U(null, 6, 5, V, [new U(null, 2, 5, V, [Yn, this.state], null), new U(null, 2, 5, V, [xn, this.wa], null), new U(null, 2, 5, V, [Dq, this.f], null), new U(null, 2, 5, V, [Ik, this.key], null), new U(null, 2, 5, V, [on, this.Ha], null), new U(null, 2, 5, V, [bk, this.ba], null)], null), this.v));
};
k.Vc = function() {
  for (var a = D(this.ba), b = null, c = 0, d = 0;;) {
    if (d < c) {
      var e = b.D(null, d);
      P.j(e, 0, null);
      e = P.j(e, 1, null);
      e.p ? e.p() : e.call(null);
      d += 1;
    } else {
      if (a = D(a)) {
        T(a) ? (c = x(a), a = z(a), b = c, c = O(c)) : (b = E(a), P.j(b, 0, null), e = P.j(b, 1, null), e.p ? e.p() : e.call(null), a = H(a), b = null, c = 0), d = 0;
      } else {
        return null;
      }
    }
  }
};
k.Uc = function(a, b, c) {
  return this.ba = R.j(this.ba, b, c);
};
k.Wc = function(a, b) {
  return this.ba = ge.h(this.ba, b);
};
k.J = function(a, b) {
  return new Lv(this.state, this.wa, this.f, this.key, this.Ha, this.ba, b, this.v, this.A);
};
k.S = function(a, b) {
  return re(b) ? Gb(this, v.h(b, 0), v.h(b, 1)) : Ve.j(ob, this, b);
};
k.Vb = function() {
  Kv(this);
  if (db(this.wa)) {
    return this.state;
  }
  for (var a = Jv(this.f), b = we(a) ? S.h(vg, a) : a, c = Q.h(b, Tm), d = Q.h(b, Sq), e = D(this.Ha), f = null, g = 0, h = 0;;) {
    if (h < g) {
      var l = f.D(null, h);
      Kc(l, this.key);
      h += 1;
    } else {
      if (e = D(e)) {
        f = e, T(f) ? (e = x(f), h = z(f), f = e, g = O(e), e = h) : (e = E(f), Kc(e, this.key), e = H(f), f = null, g = 0), h = 0;
      } else {
        break;
      }
    }
  }
  this.Ha = c;
  e = D(c);
  f = null;
  for (h = g = 0;;) {
    if (h < g) {
      l = f.D(null, h), Oj(l, this.key, function(a, b, c, d, e, f, g, h, l, r) {
        return function() {
          r.wa = !0;
          return Ec(r, null, null);
        };
      }(e, f, g, h, l, a, b, c, d, this)), h += 1;
    } else {
      var m = D(e);
      if (m) {
        l = m;
        if (T(l)) {
          e = x(l), h = z(l), f = e, g = O(e), e = h;
        } else {
          var r = E(l);
          Oj(r, this.key, function(a, b, c, d, e, f, g, h, l, r, m, J) {
            return function() {
              J.wa = !0;
              return Ec(J, null, null);
            };
          }(e, f, g, h, r, l, m, a, b, c, d, this));
          e = H(l);
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
  this.wa = !1;
  return d;
};
k.te = !0;
k.P = function() {
  return this.key;
};
var Mv = function() {
  function a(a, d, e) {
    var f = null;
    2 < arguments.length && (f = L(Array.prototype.slice.call(arguments, 2), 0));
    return b.call(this, a, d, f);
  }
  function b(a, b, e) {
    if (D(a)) {
      var f = E(a);
      b.g ? b.g(f) : b.call(null, f);
    }
    return S.m(Bv, a, b, e);
  }
  a.w = 2;
  a.n = function(a) {
    var d = E(a);
    a = H(a);
    var e = E(a);
    a = F(a);
    return b(d, e, a);
  };
  a.k = b;
  return a;
}();
function Nv(a) {
  if (a ? a.Jd : a) {
    return a.Jd();
  }
  var b;
  b = Nv[n(null == a ? null : a)];
  if (!b && (b = Nv._, !b)) {
    throw t("PushbackReader.read-char", a);
  }
  return b.call(null, a);
}
function Ov(a, b) {
  if (a ? a.Kd : a) {
    return a.Kd(0, b);
  }
  var c;
  c = Ov[n(null == a ? null : a)];
  if (!c && (c = Ov._, !c)) {
    throw t("PushbackReader.unread", a);
  }
  return c.call(null, a, b);
}
function Pv(a, b, c) {
  this.Z = a;
  this.buffer = b;
  this.ed = c;
}
Pv.prototype.Jd = function() {
  return 0 === this.buffer.length ? (this.ed += 1, this.Z[this.ed]) : this.buffer.pop();
};
Pv.prototype.Kd = function(a, b) {
  return this.buffer.push(b);
};
function Qv(a) {
  var b = !/[^\t\n\r ]/.test(a);
  return q(b) ? b : "," === a;
}
function Rv(a, b) {
  var c;
  !(c = !/[^0-9]/.test(b)) && (c = "+" === b || "-" === b) && (c = Nv(a), Ov(a, c), c = !/[^0-9]/.test(c));
  return c;
}
var Sv = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = L(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, 0, e);
  }
  function b(a, b) {
    throw Error(S.h(u, b));
  }
  a.w = 1;
  a.n = function(a) {
    E(a);
    a = F(a);
    return b(0, a);
  };
  a.k = b;
  return a;
}();
function Tv(a, b) {
  for (var c = new Ia(b), d = Nv(a);;) {
    var e;
    if (!(e = null == d || Qv(d))) {
      e = d;
      var f = "#" !== e;
      e = f ? (f = "'" !== e) ? (f = ":" !== e) ? Uv.g ? Uv.g(e) : Uv.call(null, e) : f : f : f;
    }
    if (e) {
      return Ov(a, d), c.toString();
    }
    c.append(d);
    d = Nv(a);
  }
}
function Vv(a) {
  for (;;) {
    var b = Nv(a);
    if ("\n" === b || "\r" === b || null == b) {
      return a;
    }
  }
}
var Wv = Fj("^([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+))(N)?$"), Xv = Fj("^([-+]?[0-9]+)/([0-9]+)$"), Yv = Fj("^([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?$"), Zv = Fj("^[:]?([^0-9/].*/)?([^0-9/][^/]*)$");
function $v(a, b) {
  var c = a.exec(b);
  return null != c && c[0] === b ? 1 === c.length ? c[0] : c : null;
}
function aw(a) {
  if (q($v(Wv, a))) {
    if (a = $v(Wv, a), null != a[2]) {
      a = 0;
    } else {
      var b = q(a[3]) ? [a[3], 10] : q(a[4]) ? [a[4], 16] : q(a[5]) ? [a[5], 8] : q(a[6]) ? [a[7], parseInt(a[6], 10)] : [null, null], c = b[0];
      null == c ? a = null : (b = parseInt(c, b[1]), a = "-" === a[1] ? -b : b);
    }
  } else {
    q($v(Xv, a)) ? (a = $v(Xv, a), a = parseInt(a[1], 10) / parseInt(a[2], 10)) : a = q($v(Yv, a)) ? parseFloat(a) : null;
  }
  return a;
}
var bw = Fj("^[0-9A-Fa-f]{2}$"), cw = Fj("^[0-9A-Fa-f]{4}$");
function dw(a, b, c, d) {
  return q(Ej(a, d)) ? d : Sv.k(b, L(["Unexpected unicode escape \\", c, d], 0));
}
function ew(a) {
  return String.fromCharCode(parseInt(a, 16));
}
function fw(a) {
  var b = Nv(a), c = "t" === b ? "\t" : "r" === b ? "\r" : "n" === b ? "\n" : "\\" === b ? "\\" : '"' === b ? '"' : "b" === b ? "\b" : "f" === b ? "\f" : null;
  q(c) ? a = c : "x" === b ? (c = (new Ia(Nv(a), Nv(a))).toString(), a = ew(dw(bw, a, b, c))) : "u" === b ? (c = (new Ia(Nv(a), Nv(a), Nv(a), Nv(a))).toString(), a = ew(dw(cw, a, b, c))) : a = /[^0-9]/.test(b) ? Sv.k(a, L(["Unexpected unicode escape \\", b], 0)) : String.fromCharCode(b);
  return a;
}
function gw(a) {
  for (var b = Nv(a);;) {
    var c;
    c = b;
    c = Qv.g ? Qv.g(c) : Qv.call(null, c);
    if (q(c)) {
      b = Nv(a);
    } else {
      return b;
    }
  }
}
function hw(a, b) {
  for (var c = Lc(Zd);;) {
    var d = gw(b);
    q(d) || Sv.k(b, L(["EOF while reading"], 0));
    if (a === d) {
      return Nc(c);
    }
    var e = function() {
      var a = d;
      return Uv.g ? Uv.g(a) : Uv.call(null, a);
    }();
    if (q(e)) {
      var f = e, e = function() {
        var a = d;
        return f.h ? f.h(b, a) : f.call(null, b, a);
      }()
    } else {
      Ov(b, d), e = iw.m ? iw.m(b, !0, null, !0) : iw.call(null, b, !0, null);
    }
    c = e === b ? c : fg.h(c, e);
  }
}
function jw(a, b) {
  return Sv.k(a, L(["Reader for ", b, " not implemented yet"], 0));
}
function kw(a, b) {
  var c = Nv(a), d = lw.g ? lw.g(c) : lw.call(null, c);
  if (q(d)) {
    return d.h ? d.h(a, b) : d.call(null, a, b);
  }
  d = mw.h ? mw.h(a, c) : mw.call(null, a, c);
  return q(d) ? d : Sv.k(a, L(["No dispatch macro for ", c], 0));
}
function nw(a, b) {
  return Sv.k(a, L(["Unmached delimiter ", b], 0));
}
function ow(a) {
  return S.h(If, hw(")", a));
}
function pw(a) {
  return hw("]", a);
}
function qw(a) {
  var b = hw("}", a), c = O(b);
  !ng(c) && Sv.k(a, L(["Map literal must contain an even number of forms"], 0));
  return S.h(vg, b);
}
function rw(a, b) {
  for (var c = new Ia(b), d = Nv(a);;) {
    if (q(function() {
      var a = null == d;
      if (a || (a = Qv(d))) {
        return a;
      }
      a = d;
      return Uv.g ? Uv.g(a) : Uv.call(null, a);
    }())) {
      Ov(a, d);
      var e = c.toString(), c = aw(e);
      return q(c) ? c : Sv.k(a, L(["Invalid number format [", e, "]"], 0));
    }
    c.append(d);
    d = e = Nv(a);
  }
}
function sw(a) {
  for (var b = new Ia, c = Nv(a);;) {
    if (null == c) {
      return Sv.k(a, L(["EOF while reading"], 0));
    }
    if ("\\" === c) {
      b.append(fw(a));
    } else {
      if ('"' === c) {
        return b.toString();
      }
      b.append(c);
    }
    c = Nv(a);
  }
}
function tw(a) {
  for (var b = new Ia, c = Nv(a);;) {
    if (null == c) {
      return Sv.k(a, L(["EOF while reading"], 0));
    }
    if ("\\" === c) {
      b.append(c);
      var d = Nv(a);
      if (null == d) {
        return Sv.k(a, L(["EOF while reading"], 0));
      }
      var e = function() {
        var a = b;
        a.append(d);
        return a;
      }(), f = Nv(a);
    } else {
      if ('"' === c) {
        return b.toString();
      }
      e = function() {
        var a = b;
        a.append(c);
        return a;
      }();
      f = Nv(a);
    }
    b = e;
    c = f;
  }
}
function uw(a, b) {
  var c = Tv(a, b);
  if (q(-1 != c.indexOf("/"))) {
    c = Bd.h(Bf.j(c, 0, c.indexOf("/")), Bf.j(c, c.indexOf("/") + 1, c.length));
  } else {
    var d = Bd.g(c), c = "nil" === c ? null : "true" === c ? !0 : "false" === c ? !1 : d
  }
  return c;
}
function vw(a) {
  var b = Tv(a, Nv(a)), c = $v(Zv, b), b = c[0], d = c[1], c = c[2];
  return void 0 !== d && ":/" === d.substring(d.length - 2, d.length) || ":" === c[c.length - 1] || -1 !== b.indexOf("::", 1) ? Sv.k(a, L(["Invalid token: ", b], 0)) : null != d && 0 < d.length ? Lf.h(d.substring(0, d.indexOf("/")), c) : Lf.g(b);
}
function ww(a) {
  return function(b) {
    return ob(ob(Dd, iw.m ? iw.m(b, !0, null, !0) : iw.call(null, b, !0, null)), a);
  };
}
function xw() {
  return function(a) {
    return Sv.k(a, L(["Unreadable form"], 0));
  };
}
function yw(a) {
  var b;
  b = iw.m ? iw.m(a, !0, null, !0) : iw.call(null, a, !0, null);
  b = b instanceof Ad ? new p(null, 1, [Qq, b], null) : "string" === typeof b ? new p(null, 1, [Qq, b], null) : b instanceof W ? new oi([b, !0]) : b;
  qe(b) || Sv.k(a, L(["Metadata must be Symbol,Keyword,String or Map"], 0));
  var c = iw.m ? iw.m(a, !0, null, !0) : iw.call(null, a, !0, null);
  return(c ? c.q & 262144 || c.De || (c.q ? 0 : fb(jc, c)) : fb(jc, c)) ? Vd(c, ij.k(L([je(c), b], 0))) : Sv.k(a, L(["Metadata can only be applied to IWithMetas"], 0));
}
function zw(a) {
  return qj(hw("}", a));
}
function Aw(a) {
  return Fj(tw(a));
}
function Bw(a) {
  iw.m ? iw.m(a, !0, null, !0) : iw.call(null, a, !0, null);
  return a;
}
function Uv(a) {
  return'"' === a ? sw : ":" === a ? vw : ";" === a ? Vv : "'" === a ? ww(new Ad(null, "quote", "quote", 1377916282, null)) : "@" === a ? ww(new Ad(null, "deref", "deref", 1494944732, null)) : "^" === a ? yw : "`" === a ? jw : "~" === a ? jw : "(" === a ? ow : ")" === a ? nw : "[" === a ? pw : "]" === a ? nw : "{" === a ? qw : "}" === a ? nw : "\\" === a ? Nv : "#" === a ? kw : null;
}
function lw(a) {
  return "{" === a ? zw : "\x3c" === a ? xw() : '"' === a ? Aw : "!" === a ? Vv : "_" === a ? Bw : null;
}
function iw(a, b, c) {
  for (;;) {
    var d = Nv(a);
    if (null == d) {
      return q(b) ? Sv.k(a, L(["EOF while reading"], 0)) : c;
    }
    if (!Qv(d)) {
      if (";" === d) {
        var e = function() {
          var b = a, c = d;
          return Vv.h ? Vv.h(b, c) : Vv.call(null, b);
        }();
        a = e;
      } else {
        var f = Uv(d), e = q(f) ? function() {
          var b = a, c = d;
          return f.h ? f.h(b, c) : f.call(null, b, c);
        }() : Rv(a, d) ? rw(a, d) : uw(a, d);
        if (e !== a) {
          return e;
        }
      }
    }
  }
}
function Cw(a) {
  return iw(new Pv(a, [], -1), !1, null);
}
var Dw = function(a, b) {
  return function(c, d) {
    return Q.h(q(d) ? b : a, c);
  };
}(new U(null, 13, 5, V, [null, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], null), new U(null, 13, 5, V, [null, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], null)), Ew = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
function Fw(a) {
  a = parseInt(a, 10);
  return db(isNaN(a)) ? a : null;
}
function Gw(a, b, c, d) {
  a <= b && b <= c || Sv.k(null, L(["" + u.g(d) + " Failed:  " + u.g(a) + "\x3c\x3d" + u.g(b) + "\x3c\x3d" + u.g(c)], 0));
  return b;
}
function Hw(a) {
  var b = Ej(Ew, a);
  P.j(b, 0, null);
  var c = P.j(b, 1, null), d = P.j(b, 2, null), e = P.j(b, 3, null), f = P.j(b, 4, null), g = P.j(b, 5, null), h = P.j(b, 6, null), l = P.j(b, 7, null), m = P.j(b, 8, null), r = P.j(b, 9, null), s = P.j(b, 10, null);
  if (db(b)) {
    return Sv.k(null, L(["Unrecognized date/time syntax: " + u.g(a)], 0));
  }
  var w = Fw(c), A = function() {
    var a = Fw(d);
    return q(a) ? a : 1;
  }();
  a = function() {
    var a = Fw(e);
    return q(a) ? a : 1;
  }();
  var b = function() {
    var a = Fw(f);
    return q(a) ? a : 0;
  }(), c = function() {
    var a = Fw(g);
    return q(a) ? a : 0;
  }(), y = function() {
    var a = Fw(h);
    return q(a) ? a : 0;
  }(), C = function() {
    var a;
    a: {
      if (B.h(3, O(l))) {
        a = l;
      } else {
        if (3 < O(l)) {
          a = Bf.j(l, 0, 3);
        } else {
          for (a = new Ia(l);;) {
            if (3 > a.Ub.length) {
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
    a = Fw(a);
    return q(a) ? a : 0;
  }(), m = (B.h(m, "-") ? -1 : 1) * (60 * function() {
    var a = Fw(r);
    return q(a) ? a : 0;
  }() + function() {
    var a = Fw(s);
    return q(a) ? a : 0;
  }());
  return new U(null, 8, 5, V, [w, Gw(1, A, 12, "timestamp month field must be in range 1..12"), Gw(1, a, function() {
    var a;
    if (a = 0 === (w % 4 + 4) % 4) {
      a = 0 !== (w % 100 + 100) % 100 || 0 === (w % 400 + 400) % 400;
    }
    return Dw.h ? Dw.h(A, a) : Dw.call(null, A, a);
  }(), "timestamp day field must be in range 1..last day in month"), Gw(0, b, 23, "timestamp hour field must be in range 0..23"), Gw(0, c, 59, "timestamp minute field must be in range 0..59"), Gw(0, y, B.h(c, 59) ? 60 : 59, "timestamp second field must be in range 0..60"), Gw(0, C, 999, "timestamp millisecond field must be in range 0..999"), m], null);
}
var Iw, Jw = new p(null, 4, ["inst", function(a) {
  var b;
  if ("string" === typeof a) {
    if (b = Hw(a), q(b)) {
      a = P.j(b, 0, null);
      var c = P.j(b, 1, null), d = P.j(b, 2, null), e = P.j(b, 3, null), f = P.j(b, 4, null), g = P.j(b, 5, null), h = P.j(b, 6, null);
      b = P.j(b, 7, null);
      b = new Date(Date.UTC(a, c - 1, d, e, f, g, h) - 6E4 * b);
    } else {
      b = Sv.k(null, L(["Unrecognized date/time syntax: " + u.g(a)], 0));
    }
  } else {
    b = Sv.k(null, L(["Instance literal expects a string for its timestamp."], 0));
  }
  return b;
}, "uuid", function(a) {
  return "string" === typeof a ? new Tj(a) : Sv.k(null, L(["UUID literal expects a string as its representation."], 0));
}, "queue", function(a) {
  return re(a) ? dh.h(Kh, a) : Sv.k(null, L(["Queue literal expects a vector for its elements."], 0));
}, "js", function(a) {
  if (re(a)) {
    var b = [];
    a = D(a);
    for (var c = null, d = 0, e = 0;;) {
      if (e < d) {
        var f = c.D(null, e);
        b.push(f);
        e += 1;
      } else {
        if (a = D(a)) {
          c = a, T(c) ? (a = x(c), e = z(c), c = a, d = O(a), a = e) : (a = E(c), b.push(a), a = H(c), c = null, d = 0), e = 0;
        } else {
          break;
        }
      }
    }
    return b;
  }
  if (qe(a)) {
    b = {};
    a = D(a);
    c = null;
    for (e = d = 0;;) {
      if (e < d) {
        var g = c.D(null, e), f = P.j(g, 0, null), g = P.j(g, 1, null);
        b[Kf(f)] = g;
        e += 1;
      } else {
        if (a = D(a)) {
          T(a) ? (d = x(a), a = z(a), c = d, d = O(d)) : (d = E(a), c = P.j(d, 0, null), d = P.j(d, 1, null), b[Kf(c)] = d, a = H(a), c = null, d = 0), e = 0;
        } else {
          break;
        }
      }
    }
    return b;
  }
  return Sv.k(null, L(["JS literal expects a vector or map containing only string or unqualified keyword keys"], 0));
}], null);
Iw = xg.g ? xg.g(Jw) : xg.call(null, Jw);
var Kw = xg.g ? xg.g(null) : xg.call(null, null);
function mw(a, b) {
  var c = uw(a, b), d = Q.h(M.g ? M.g(Iw) : M.call(null, Iw), "" + u.g(c)), e = M.g ? M.g(Kw) : M.call(null, Kw);
  return q(d) ? (c = iw(a, !0, null), d.g ? d.g(c) : d.call(null, c)) : q(e) ? (d = iw(a, !0, null), e.h ? e.h(c, d) : e.call(null, c, d)) : Sv.k(a, L(["Could not find tag parser for ", "" + u.g(c), " in ", zg.k(L([gj(M.g ? M.g(Iw) : M.call(null, Iw))], 0))], 0));
}
;var Lw = !Au || Au && 9 <= Iu, Mw = Au && !Gu("9");
!Cu || Gu("528");
Bu && Gu("1.9b") || Au && Gu("8") || zu && Gu("9.5") || Cu && Gu("528");
Bu && !Gu("8") || Au && Gu("9");
function Nw() {
  0 != Ow && (this[ka] || (this[ka] = ++la));
}
var Ow = 0;
function Pw(a, b) {
  this.type = a;
  this.currentTarget = this.target = b;
  this.defaultPrevented = this.fc = !1;
  this.fe = !0;
}
Pw.prototype.preventDefault = function() {
  this.defaultPrevented = !0;
  this.fe = !1;
};
function Qw(a) {
  Qw[" "](a);
  return a;
}
Qw[" "] = function() {
};
function Rw(a, b) {
  Pw.call(this, a ? a.type : "");
  this.relatedTarget = this.currentTarget = this.target = null;
  this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
  this.Wd = this.state = null;
  if (a) {
    var c = this.type = a.type;
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    var d = a.relatedTarget;
    if (d) {
      if (Bu) {
        var e;
        a: {
          try {
            Qw(d.nodeName);
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
    this.offsetX = Cu || void 0 !== a.offsetX ? a.offsetX : a.layerX;
    this.offsetY = Cu || void 0 !== a.offsetY ? a.offsetY : a.layerY;
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
    this.Wd = a;
    a.defaultPrevented && this.preventDefault();
  }
}
na(Rw, Pw);
Rw.prototype.preventDefault = function() {
  Rw.uf.preventDefault.call(this);
  var a = this.Wd;
  if (a.preventDefault) {
    a.preventDefault();
  } else {
    if (a.returnValue = !1, Mw) {
      try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1;
        }
      } catch (b) {
      }
    }
  }
};
var Sw = "closure_listenable_" + (1E6 * Math.random() | 0), Tw = 0;
function Uw(a, b, c, d, e) {
  this.Ob = a;
  this.Lc = null;
  this.src = b;
  this.type = c;
  this.uc = !!d;
  this.Jb = e;
  this.key = ++Tw;
  this.gc = this.tc = !1;
}
function Vw(a) {
  a.gc = !0;
  a.Ob = null;
  a.Lc = null;
  a.src = null;
  a.Jb = null;
}
;function Ww(a) {
  this.src = a;
  this.Oa = {};
  this.Nc = 0;
}
Ww.prototype.add = function(a, b, c, d, e) {
  var f = a.toString();
  a = this.Oa[f];
  a || (a = this.Oa[f] = [], this.Nc++);
  var g = Xw(a, b, d, e);
  -1 < g ? (b = a[g], c || (b.tc = !1)) : (b = new Uw(b, this.src, f, !!d, e), b.tc = c, a.push(b));
  return b;
};
Ww.prototype.remove = function(a, b, c, d) {
  a = a.toString();
  if (!(a in this.Oa)) {
    return!1;
  }
  var e = this.Oa[a];
  b = Xw(e, b, c, d);
  return-1 < b ? (Vw(e[b]), Na.splice.call(e, b, 1), 0 == e.length && (delete this.Oa[a], this.Nc--), !0) : !1;
};
function Yw(a, b) {
  var c = b.type;
  if (c in a.Oa) {
    var d = a.Oa[c], e = Oa(d, b), f;
    (f = 0 <= e) && Na.splice.call(d, e, 1);
    f && (Vw(b), 0 == a.Oa[c].length && (delete a.Oa[c], a.Nc--));
  }
}
Ww.prototype.dd = function(a, b, c, d) {
  a = this.Oa[a.toString()];
  var e = -1;
  a && (e = Xw(a, b, c, d));
  return-1 < e ? a[e] : null;
};
function Xw(a, b, c, d) {
  for (var e = 0;e < a.length;++e) {
    var f = a[e];
    if (!f.gc && f.Ob == b && f.uc == !!c && f.Jb == d) {
      return e;
    }
  }
  return-1;
}
;var Zw = "closure_lm_" + (1E6 * Math.random() | 0), $w = {}, ax = 0;
function bx(a, b, c, d, e) {
  if ("array" == n(b)) {
    for (var f = 0;f < b.length;f++) {
      bx(a, b[f], c, d, e);
    }
    return null;
  }
  c = cx(c);
  if (a && a[Sw]) {
    a = a.Pe(b, c, d, e);
  } else {
    if (!b) {
      throw Error("Invalid event type");
    }
    var f = !!d, g = dx(a);
    g || (a[Zw] = g = new Ww(a));
    c = g.add(b, c, !1, d, e);
    c.Lc || (d = ex(), c.Lc = d, d.src = a, d.Ob = c, a.addEventListener ? a.addEventListener(b.toString(), d, f) : a.attachEvent(mA(b.toString()), d), ax++);
    a = c;
  }
  return a;
}
function ex() {
  var a = nA, b = Lw ? function(c) {
    return a.call(b.src, b.Ob, c);
  } : function(c) {
    c = a.call(b.src, b.Ob, c);
    if (!c) {
      return c;
    }
  };
  return b;
}
function oA(a, b, c, d, e) {
  if ("array" == n(b)) {
    for (var f = 0;f < b.length;f++) {
      oA(a, b[f], c, d, e);
    }
  } else {
    c = cx(c), a && a[Sw] ? a.xf(b, c, d, e) : a && (a = dx(a)) && (b = a.dd(b, c, !!d, e)) && pA(b);
  }
}
function pA(a) {
  if ("number" != typeof a && a && !a.gc) {
    var b = a.src;
    if (b && b[Sw]) {
      Yw(b.cc, a);
    } else {
      var c = a.type, d = a.Lc;
      b.removeEventListener ? b.removeEventListener(c, d, a.uc) : b.detachEvent && b.detachEvent(mA(c), d);
      ax--;
      (c = dx(b)) ? (Yw(c, a), 0 == c.Nc && (c.src = null, b[Zw] = null)) : Vw(a);
    }
  }
}
function mA(a) {
  return a in $w ? $w[a] : $w[a] = "on" + a;
}
function qA(a, b, c, d) {
  var e = 1;
  if (a = dx(a)) {
    if (b = a.Oa[b.toString()]) {
      for (b = b.concat(), a = 0;a < b.length;a++) {
        var f = b[a];
        f && f.uc == c && !f.gc && (e &= !1 !== rA(f, d));
      }
    }
  }
  return Boolean(e);
}
function rA(a, b) {
  var c = a.Ob, d = a.Jb || a.src;
  a.tc && pA(a);
  return c.call(d, b);
}
function nA(a, b) {
  if (a.gc) {
    return!0;
  }
  if (!Lw) {
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
    c = new Rw(e, this);
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
      for (var f = a.type, h = e.length - 1;!c.fc && 0 <= h;h--) {
        c.currentTarget = e[h], d &= qA(e[h], f, !0, c);
      }
      for (h = 0;!c.fc && h < e.length;h++) {
        c.currentTarget = e[h], d &= qA(e[h], f, !1, c);
      }
    }
    return d;
  }
  return rA(a, new Rw(b, this));
}
function dx(a) {
  a = a[Zw];
  return a instanceof Ww ? a : null;
}
var sA = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
function cx(a) {
  if (ia(a)) {
    return a;
  }
  a[sA] || (a[sA] = function(b) {
    return a.handleEvent(b);
  });
  return a[sA];
}
;var tA = function() {
  function a(a, d, e, f) {
    var g = null;
    3 < arguments.length && (g = L(Array.prototype.slice.call(arguments, 3), 0));
    return b.call(this, a, d, e, g);
  }
  function b(a, b, e, f) {
    f = we(f) ? S.h(vg, f) : f;
    f = Q.j(f, Uq, !1);
    a = Dv(a);
    b = Kf(b);
    return bx(a, b, e, f);
  }
  a.w = 3;
  a.n = function(a) {
    var d = E(a);
    a = H(a);
    var e = E(a);
    a = H(a);
    var f = E(a);
    a = F(a);
    return b(d, e, f, a);
  };
  a.k = b;
  return a;
}();
function uA(a, b) {
  return Vd(new U(null, 2, 5, V, [b, null], null), new p(null, 3, [Uo, a, qk, Mq, lk, Mq], null));
}
function vA(a) {
  return a.g ? a.g(0) : a.call(null, 0);
}
function wA(a) {
  return lk.g(je(a)).call(null, vA(a));
}
function xA(a) {
  var b = P.j(a, 0, null), c = P.j(a, 1, null), d = we(c) ? S.h(vg, c) : c, e = Q.h(d, Co), c = Q.h(d, Wj), f = Q.h(d, iq), g = Q.h(d, nk), d = Q.h(d, mq);
  return q(f) ? (f = ke(f), q(d) ? (d = V, b = bg.h(e, Td(b, g)), b = Uo.g(je(a)).call(null, f, b), c = new U(null, 2, 5, d, [b, q(c) ? R.j(c, mq, !0) : c], null)) : c = new U(null, 2, 5, V, [f, c], null), Vd(c, je(a))) : null;
}
function yA(a) {
  for (;;) {
    if (B.h(hr, a.g ? a.g(1) : a.call(null, 1))) {
      return vA(a);
    }
    var b = xA(a);
    if (q(b)) {
      a = b;
    } else {
      return vA(a);
    }
  }
}
function zA(a) {
  var b = P.j(a, 0, null), c = P.j(a, 1, null), c = we(c) ? S.h(vg, c) : c, d = Q.h(c, Co), e = Q.h(c, nk), f = P.j(e, 0, null), g = Af(e);
  return q(q(c) ? e : c) ? Vd(new U(null, 2, 5, V, [f, R.k(c, Co, $d.h(d, b), L([nk, g], 0))], null), je(a)) : null;
}
var AA = function() {
  function a(a, d, e) {
    var f = null;
    2 < arguments.length && (f = L(Array.prototype.slice.call(arguments, 2), 0));
    return b.call(this, a, d, f);
  }
  function b(a, b, e) {
    b = S.j(b, vA(a), e);
    P.j(a, 0, null);
    e = P.j(a, 1, null);
    return Vd(new U(null, 2, 5, V, [b, R.j(e, mq, !0)], null), je(a));
  }
  a.w = 2;
  a.n = function(a) {
    var d = E(a);
    a = H(a);
    var e = E(a);
    a = F(a);
    return b(d, e, a);
  };
  a.k = b;
  return a;
}();
function BA(a) {
  if (B.h(hr, a.g ? a.g(1) : a.call(null, 1))) {
    return a;
  }
  var b;
  b = wA(a);
  if (q(b)) {
    if (q(wA(a))) {
      b = P.j(a, 0, null);
      var c = P.j(a, 1, null), d;
      if (q(wA(a))) {
        d = qk.g(je(a)).call(null, vA(a));
      } else {
        throw "called children on a leaf node";
      }
      var e = P.j(d, 0, null), f = Af(d);
      b = q(d) ? Vd(new U(null, 2, 5, V, [e, new p(null, 4, [Co, Zd, iq, q(c) ? $d.h(iq.g(c), b) : new U(null, 1, 5, V, [b], null), Wj, c, nk, f], null)], null), je(a)) : null;
    } else {
      b = null;
    }
  }
  if (q(b)) {
    return b;
  }
  b = zA(a);
  if (q(b)) {
    return b;
  }
  for (;;) {
    if (q(xA(a))) {
      b = zA(xA(a));
      if (q(b)) {
        return b;
      }
      a = xA(a);
    } else {
      return new U(null, 2, 5, V, [vA(a), hr], null);
    }
  }
}
function CA(a) {
  return B.h(hr, a.g ? a.g(1) : a.call(null, 1));
}
;function DA() {
  function a() {
    return yf(16).toString(16);
  }
  return new Tj((new Ia(a(), a(), a(), a(), a(), a(), a(), a(), "-", a(), a(), a(), a(), "-4", a(), a(), a(), "-", (8 | 3 & yf(15)).toString(16), a(), a(), a(), "-", a(), a(), a(), a(), a(), a(), a(), a(), a(), a(), a(), a())).toString());
}
;var EA = fe([ck, Jk, Om, yn, Qn, $n, Wo, up, zp, Ep, Ip, Np, gq, hq, dr, ir, qr], [.001, .01, .001, .5, 256, Kq, 2048, 3, 3, .05, 1.1, .02, !1, .9, .5, .1, 1E3]);
function FA(a) {
  var b = $n.g(mp.g(a));
  return R.j(a, ft, Ve.j(function(a) {
    return function(b, e) {
      var f = Qp.g(e), g = gj(Gn.g(dk.g(e)));
      return Xt(b, g, function(a) {
        return function(b) {
          return $d.h(b, a);
        };
      }(f, g, a));
    };
  }(b), zh(Fg.h(b, oj)), Y.g(a)));
}
function GA(a, b, c, d) {
  var e = ir.g(mp.g(a)), f = Ep.g(mp.g(a)), g = Jk.g(mp.g(a)), h = dr.g(mp.g(a)), l = gh.h(a, new U(null, 3, 5, V, [Y, b, dk], null)), m = Vt(function(a, b, e) {
    return function(b, f) {
      return q(c.g ? c.g(b) : c.call(null, b)) ? q(d.g ? d.g(b) : d.call(null, b)) ? fp : To : f < a + e ? Zo : jk;
    };
  }(e, f, g, h, l), Gn.g(l)), r = Vt(function(a, b, e, f) {
    return function(e, g) {
      return q(c.g ? c.g(e) : c.call(null, e)) ? q(d.g ? d.g(e) : d.call(null, e)) ? g >= a - f ? vp : fp : g >= a - b ? xt : To : jk;
    };
  }(e, f, g, h, l, m), Mm.g(l)), s = new p(null, 2, [Gn, ij.k(L([Yt(function(a, b) {
    return function(a) {
      a += b;
      return 1 > a ? a : 1;
    };
  }(e, f, g, h, l, m, r), ij.k(L([To.g(m), xt.g(r)], 0))), Yt(function(a, b, c, d) {
    return function(a) {
      a += d;
      return 1 > a ? a : 1;
    };
  }(e, f, g, h, l, m, r), ij.k(L([fp.g(m), vp.g(r)], 0))), Yt(function(a, b, c) {
    return function(a) {
      return a - c;
    };
  }(e, f, g, h, l, m, r), jk.g(m))], 0)), Mm, ij.k(L([Yt(function(a, b, c) {
    return function(a) {
      a -= c;
      return 0 < a ? a : 0;
    };
  }(e, f, g, h, l, m, r), ij.k(L([jk.g(r), Zo.g(m)], 0))), Yt(function(a, b) {
    return function(a) {
      return a + b;
    };
  }(e, f, g, h, l, m, r), To.g(r)), Yt(function(a, b, c, d) {
    return function(a) {
      return a + d;
    };
  }(e, f, g, h, l, m, r), fp.g(r))], 0))], null), w = bg.h(gj(xt.g(r)), gj(vp.g(r))), A = gj(Zo.g(m)), e = Xt(Xt(ft.g(a), w, function() {
    return function(a) {
      return $d.h(a, b);
    };
  }(e, f, g, h, l, m, r, s, w, A)), A, function() {
    return function(a) {
      return le.h(a, b);
    };
  }(e, f, g, h, l, m, r, s, w, A));
  return R.j(ih(a, new U(null, 3, 5, V, [Y, b, dk], null), s), ft, e);
}
function HA(a, b) {
  return Vt(function(b, d) {
    return d >= a ? Gn : Mm;
  }, b);
}
function IA(a, b) {
  var c = we(b) ? S.h(vg, b) : b, d = Q.h(c, Ep), e = Q.h(c, ir), f = Q.h(c, yn), g = Q.h(c, Qn), h = Q.h(c, $n), l = Q.h(c, Wo), m = Pt.g(a / l * h), r = zj.h(function() {
    var a = m - g;
    return 0 > a ? 0 : a;
  }(), function() {
    var a = m + g;
    return h < a ? h : a;
  }()), s = f * O(r), w = Dg.h(s, Tt(r)), c = Gg.h(s, function(a, b, c, d, e, f) {
    return function() {
      return Rt.h(f, e);
    };
  }(m, r, s, w, function() {
    var a = e + 1 * d;
    return 1 > a ? a : 1;
  }(), function() {
    var a = e - 2 * d;
    return 0 < a ? a : 0;
  }(), b, c, c, d, e, f, g, h, l));
  return HA(e, Cg.j(Ah, w, c));
}
function JA(a, b) {
  return new p(null, 3, [Qp, a, dk, IA(a, b), sk, 1], null);
}
function KA(a, b, c, d) {
  return bg.h(zj.h(function() {
    var b = a + c + 1;
    return b < d ? b : d;
  }(), function() {
    var c = a + b + 1;
    return c < d ? c : d;
  }()), zj.h(function() {
    var c = a - b;
    return 0 < c ? c : 0;
  }(), function() {
    var b = a - c;
    return 0 < b ? b : 0;
  }()));
}
function LA(a) {
  a = gj(Gn.g(dk.g(a)));
  return D(a) ? S.h(bf, a) - S.h(cf, a) : 0;
}
function MA(a) {
  var b = mp.g(a), c = $n.g(b), b = Wo.g(b);
  a = Cg.h(LA, Y.g(a));
  a = S.h(Ze, a) / O(a);
  c = ff(a / c * b, 2);
  c = Pt.g(.7 * c);
  return 1 < c ? c : 1;
}
function NA(a) {
  return R.j(a, Zp, MA(a));
}
function OA(a, b) {
  var c = ft.g(a);
  return eg(Ve.j(function(a) {
    return function(b, c) {
      return Ve.j(function() {
        return function(a, b) {
          return gg.j(a, b, Q.j(a, b, 0) + 1);
        };
      }(a), b, a.g ? a.g(c) : a.call(null, c));
    };
  }(c), Lc(li), b));
}
function PA(a, b) {
  var c = OA(a, b), d = zp.g(mp.g(a));
  return eg(We(function(b, c) {
    return function(b, d, e) {
      if (e < c) {
        return b;
      }
      var m = gh.h(a, new U(null, 3, 5, V, [Y, d, sk], null));
      return gg.j(b, d, e * m);
    };
  }(c, d), Lc(li), c));
}
function QA(a, b, c) {
  for (var d = function() {
    var b = Pt.g(c * O(Y.g(a)));
    return 1 < b ? b : 1;
  }(), e = D(b), f = ej(function() {
    return function(a, c) {
      return zd(b.g ? b.g(a) : b.call(null, a), b.g ? b.g(c) : b.call(null, c));
    };
  }(e, d)), g = 1E6;;) {
    if (me(e)) {
      return qj(gj(f));
    }
    var h = E(e), l = P.j(h, 0, null), m = P.j(h, 1, null);
    O(f) < d ? (e = H(e), f = R.j(f, l, m), l = function() {
      var a = g, b = m;
      return a < b ? a : b;
    }()) : m > g ? (l = R.j(ge.h(f, E(gj(f))), l, m), e = H(e), f = l, l = E(ji(l))) : (e = H(e), l = g);
    g = l;
  }
}
function RA(a) {
  return eg(We(function(a, c, d) {
    return q(d) ? gg.j(a, c, d) : a;
  }, Lc(li), a));
}
function SA(a, b, c, d) {
  b = Y.g(b);
  var e = O(b);
  b = gj(a);
  for (var f = dg(eh.h(a, zj.g(e)));;) {
    if (a = E(b), q(a)) {
      var g = a;
      a = function() {
        var a = g;
        return f.g ? f.g(a) : f.call(null, a);
      }();
      if (q(a)) {
        var h = a;
        b = H(b);
        a = function() {
          for (var a = KA(g, c, d, e), b = f;;) {
            var r = E(a);
            if (q(r)) {
              var s;
              s = r;
              s = b.g ? b.g(s) : b.call(null, s);
              if (q(s)) {
                var w;
                w = g - r;
                w = (0 > w ? -w : w) - 4;
                w = (0 < w ? w : 0) / 2;
                if (h >= s + w) {
                  a = H(a), b = gg.j(b, r, null);
                } else {
                  if (h <= s - w) {
                    return gg.j(b, g, null);
                  }
                  a = H(a);
                }
              } else {
                a = H(a);
              }
            } else {
              return b;
            }
          }
        }();
      } else {
        b = H(b), a = f;
      }
      f = a;
    } else {
      return RA(Nc(f));
    }
  }
}
function TA(a) {
  return Yt(function(a) {
    return a + Rt.h(0, .5);
  }, a);
}
function UA(a, b, c, d) {
  return Ve.j(function(a, b) {
    return GA(a, b, c, d);
  }, a, b);
}
function VA(a, b) {
  var c = ck.g(mp.g(a)), d = Om.g(mp.g(a)), e = up.g(mp.g(a)), f = ho.g(a), g = Jn.g(a), h = O(Y.g(a)), l = KA(b, Zp.g(a), 0, h), h = S.j(bf, 1, ji(kj(f, l))), l = S.j(bf, 1, ji(kj(g, l))), c = c * h, d = d * l, f = Q.h(f, b), g = Q.h(g, b), e = e - g / d * (e - 1), e = 1 < e ? e : 1;
  return f < c ? GA(a, b, pg(!0), pg(!1)) : ih(a, new U(null, 3, 5, V, [Y, b, sk], null), e);
}
function WA(a, b, c) {
  var d = 1 / c;
  c = d * (c - 1);
  return Xt(eh.h(function(a, b) {
    return function(a) {
      return a * b;
    };
  }(d, c), a), b, function(a) {
    return function(b) {
      return b + a;
    };
  }(d, c));
}
function XA(a, b, c, d, e) {
  var f = Ip.g(mp.g(a)), g = PA(a, c);
  c = Yt(rg.h($e, f), kj(g, b));
  f = tg.h(function() {
    return function(a) {
      var b = P.j(a, 0, null);
      a = P.j(a, 1, null);
      return(e.h ? e.h(b, 0) : e.call(null, b, 0)) > a ? b : null;
    };
  }(f, g, c), d);
  a = hq.g(mp.g(a));
  b = Yt(rg.h($e, a), kj(d, S.j(le, b, f)));
  return jj.k(bf, L([c, b], 0));
}
var YA = function() {
  function a(a, b, c, g) {
    var h = wn.h(a, 0) + 1, l = PA(a, b), m = Pm.h(a, li), r = jj.k(bf, L([l, m], 0)), s, w = mp.g(a);
    s = Np.g(w);
    var w = db(gq.g(w)), A = Zp.g(a), y = TA(r), y = w ? SA(y, a, ff(A, 3), 0) : y, w = w ? SA(y, a, A, ff(A, 3)) : y;
    s = QA(a, w, s);
    A = D(c) ? XA(a, s, c, m, l) : li;
    w = qr.g(mp.g(a));
    m = q(g) ? 0 === (h % w + w) % w : g;
    a = R.k(a, wn, h, L([Op, r, oo, s, Pm, A], 0));
    r = q(g) ? jh.O(a, new U(null, 1, 5, V, [ho], null), WA, gj(r), w) : a;
    r = q(g) ? jh.O(r, new U(null, 1, 5, V, [Jn], null), WA, s, w) : r;
    b = q(g) ? UA(r, $g.h(l, s), b, c) : r;
    b = q(m) ? Ve.j(VA, b, zj.g(O(Y.g(b)))) : b;
    return q(m) ? NA(b) : b;
  }
  function b(a, b, f) {
    return c.m(a, b, oj, f);
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
  c.m = a;
  return c;
}();
var ZA, $A, aB, bB, cB, dB;
function eB(a) {
  if (a ? a.Qb : a) {
    return a.Qb(a);
  }
  var b;
  b = eB[n(null == a ? null : a)];
  if (!b && (b = eB._, !b)) {
    throw t("PEncoder.encoder-bit-width", a);
  }
  return b.call(null, a);
}
function fB(a, b, c) {
  if (a ? a.Pb : a) {
    return a.Pb(a, b, c);
  }
  var d;
  d = fB[n(null == a ? null : a)];
  if (!d && (d = fB._, !d)) {
    throw t("PEncoder.encode", a);
  }
  return d.call(null, a, b, c);
}
var hB = function gB(b, c, d) {
  var e = P.j(d, 0, null), f = P.j(d, 1, null), g = f - e;
  "undefined" === typeof ZA && (ZA = function(b, c, d, e, f, g, A, y, C) {
    this.span = b;
    this.upper = c;
    this.lower = d;
    this.Bf = e;
    this.pf = f;
    this.pc = g;
    this.Tb = A;
    this.Oe = y;
    this.We = C;
    this.G = 0;
    this.q = 393216;
  }, ZA.Ca = !0, ZA.Ba = "org.nfrac.comportex.encoders/t31091", ZA.Ga = function() {
    return function(b, c) {
      return Bc(c, "org.nfrac.comportex.encoders/t31091");
    };
  }(g, d, e, f), ZA.prototype.Qb = function() {
    return function() {
      return this.Tb;
    };
  }(g, d, e, f), ZA.prototype.Pb = function() {
    return function(b, c, d) {
      return q(d) ? (b = this.lower, d = d > b ? d : b, b = this.upper, d = df(((d < b ? d : b) - this.lower) / this.span * (this.Tb - this.pc)), qj(zj.h(c + d, c + d + this.pc))) : oj;
    };
  }(g, d, e, f), ZA.prototype.I = function() {
    return function() {
      return this.We;
    };
  }(g, d, e, f), ZA.prototype.J = function() {
    return function(b, c) {
      return new ZA(this.span, this.upper, this.lower, this.Bf, this.pf, this.pc, this.Tb, this.Oe, c);
    };
  }(g, d, e, f));
  return new ZA(g, f, e, d, d, c, b, gB, null);
}, jB = function iB(b) {
  "undefined" === typeof aB && (aB = function(b, d, e) {
    this.e = b;
    this.Ke = d;
    this.Ye = e;
    this.G = 0;
    this.q = 393216;
  }, aB.Ca = !0, aB.Ba = "org.nfrac.comportex.encoders/t31105", aB.Ga = function(b, d) {
    return Bc(d, "org.nfrac.comportex.encoders/t31105");
  }, aB.prototype.Qb = function() {
    return eB(this.e);
  }, aB.prototype.Pb = function(b, d, e) {
    var f = this;
    return S.h(Ht, Cg.h(function() {
      return function(b) {
        return fB(f.e, d, b);
      };
    }(this), e));
  }, aB.prototype.I = function() {
    return this.Ye;
  }, aB.prototype.J = function(b, d) {
    return new aB(this.e, this.Ke, d);
  });
  return new aB(b, iB, null);
}, kB = function() {
  function a(a, c) {
    var f = eB(c);
    "undefined" === typeof bB && (bB = function(a, b, c, d, e) {
      this.od = a;
      this.e = b;
      this.Ab = c;
      this.ad = d;
      this.Ze = e;
      this.G = 0;
      this.q = 393216;
    }, bB.Ca = !0, bB.Ba = "org.nfrac.comportex.encoders/t31114", bB.Ga = function() {
      return function(a, b) {
        return Bc(b, "org.nfrac.comportex.encoders/t31114");
      };
    }(f), bB.prototype.Qb = function() {
      return function() {
        return this.Ab * this.od;
      };
    }(f), bB.prototype.Pb = function(a) {
      return function(b, c, d) {
        var e = this;
        return S.h(Ht, sg(function() {
          return function(a, b) {
            return fB(e.e, c + a * e.od, b);
          };
        }(this, a), d));
      };
    }(f), bB.prototype.I = function() {
      return function() {
        return this.Ze;
      };
    }(f), bB.prototype.J = function() {
      return function(a, b) {
        return new bB(this.od, this.e, this.Ab, this.ad, b);
      };
    }(f));
    return new bB(f, c, a, b, null);
  }
  var b = null, c = function() {
    function a(b, d, h) {
      var l = null;
      2 < arguments.length && (l = L(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      var l = cg.h(d, e), m = Cg.h(eB, l), r = cg.h(0, Bj.h(Ze, m));
      "undefined" === typeof cB && (cB = function(a, b, c, d, e, f, g, h) {
        this.be = a;
        this.ie = b;
        this.Vd = c;
        this.Pa = d;
        this.e = e;
        this.Ab = f;
        this.ad = g;
        this.$e = h;
        this.G = 0;
        this.q = 393216;
      }, cB.Ca = !0, cB.Ba = "org.nfrac.comportex.encoders/t31117", cB.Ga = function() {
        return function(a, b) {
          return Bc(b, "org.nfrac.comportex.encoders/t31117");
        };
      }(l, m, r), cB.prototype.Qb = function() {
        return function() {
          return S.h(Ze, this.ie);
        };
      }(l, m, r), cB.prototype.Pb = function(a, b, c) {
        return function(d, e, f) {
          return S.h(Ht, Cg.m(function() {
            return function(a, b, c) {
              return fB(a, e + b, c);
            };
          }(this, a, b, c), this.Vd, this.be, f));
        };
      }(l, m, r), cB.prototype.I = function() {
        return function() {
          return this.$e;
        };
      }(l, m, r), cB.prototype.J = function() {
        return function(a, b) {
          return new cB(this.be, this.ie, this.Vd, this.Pa, this.e, this.Ab, this.ad, b);
        };
      }(l, m, r));
      return new cB(r, m, l, e, d, a, b, null);
    }
    a.w = 2;
    a.n = function(a) {
      var b = E(a);
      a = H(a);
      var d = E(a);
      a = F(a);
      return c(b, d, a);
    };
    a.k = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.k(b, e, L(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.w = 2;
  b.n = c.n;
  b.h = a;
  b.k = c.k;
  return b;
}(), mB = function lB(b, c) {
  "undefined" === typeof dB && (dB = function(b, c, f, g) {
    this.e = b;
    this.f = c;
    this.qf = f;
    this.af = g;
    this.G = 0;
    this.q = 393216;
  }, dB.Ca = !0, dB.Ba = "org.nfrac.comportex.encoders/t31126", dB.Ga = function(b, c) {
    return Bc(c, "org.nfrac.comportex.encoders/t31126");
  }, dB.prototype.Qb = function() {
    return eB(this.e);
  }, dB.prototype.Pb = function(b, c, f) {
    return fB(this.e, c, this.f.g ? this.f.g(f) : this.f.call(null, f));
  }, dB.prototype.I = function() {
    return this.af;
  }, dB.prototype.J = function(b, c) {
    return new dB(this.e, this.f, this.qf, c);
  });
  return new dB(c, b, lB, null);
};
function nB(a) {
  if (a ? a.fd : a) {
    return a.fd(a);
  }
  var b;
  b = nB[n(null == a ? null : a)];
  if (!b && (b = nB._, !b)) {
    throw t("PFeedForward.bit-width", a);
  }
  return b.call(null, a);
}
function oB(a, b) {
  if (a ? a.gd : a) {
    return a.gd(a, b);
  }
  var c;
  c = oB[n(null == a ? null : a)];
  if (!c && (c = oB._, !c)) {
    throw t("PFeedForward.bits-value*", a);
  }
  return c.call(null, a, b);
}
function pB(a, b) {
  if (a ? a.kd : a) {
    return a.kd(a, b);
  }
  var c;
  c = pB[n(null == a ? null : a)];
  if (!c && (c = pB._, !c)) {
    throw t("PFeedForward.signal-bits-value*", a);
  }
  return c.call(null, a, b);
}
function qB(a, b) {
  if (a ? a.ld : a) {
    return a.ld(a, b);
  }
  var c;
  c = qB[n(null == a ? null : a)];
  if (!c && (c = qB._, !c)) {
    throw t("PFeedForward.source-of-bit", a);
  }
  return c.call(null, a, b);
}
function rB(a) {
  if (a ? a.jd : a) {
    return a.jd(a);
  }
  var b;
  b = rB[n(null == a ? null : a)];
  if (!b && (b = rB._, !b)) {
    throw t("PFeedForward.incoming-bits-value", a);
  }
  return b.call(null, a);
}
function sB(a, b) {
  if (a ? a.md : a) {
    return a.md(a, b);
  }
  var c;
  c = sB[n(null == a ? null : a)];
  if (!c && (c = sB._, !c)) {
    throw t("PFeedForward.source-of-incoming-bit", a);
  }
  return c.call(null, a, b);
}
function tB(a, b) {
  if (a ? a.hd : a) {
    return a.hd(a, b);
  }
  var c;
  c = tB[n(null == a ? null : a)];
  if (!c && (c = tB._, !c)) {
    throw t("PFeedForward.feed-forward-step*", a);
  }
  return c.call(null, a, b);
}
var uB = function() {
  function a(a) {
    return oB(a, 0);
  }
  var b = null, b = function(b, d) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      case 2:
        return oB(b, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.g = a;
  b.h = function(a, b) {
    return oB(a, b);
  };
  return b;
}(), vB = function() {
  function a(a) {
    return pB(a, 0);
  }
  var b = null, b = function(b, d) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      case 2:
        return pB(b, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.g = a;
  b.h = function(a, b) {
    return pB(a, b);
  };
  return b;
}(), wB = function() {
  function a(a) {
    return tB(a, !0);
  }
  var b = null, b = function(b, d) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      case 2:
        return tB(b, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.g = a;
  b.h = function(a, b) {
    return tB(a, b);
  };
  return b;
}();
function xB(a) {
  if (a ? a.nd : a) {
    return a.nd(a);
  }
  var b;
  b = xB[n(null == a ? null : a)];
  if (!b && (b = xB._, !b)) {
    throw t("PResettable.reset", a);
  }
  return b.call(null, a);
}
function yB(a) {
  if (a ? a.jf : a) {
    return a.value;
  }
  var b;
  b = yB[n(null == a ? null : a)];
  if (!b && (b = yB._, !b)) {
    throw t("PInputGenerator.domain-value", a);
  }
  return b.call(null, a);
}
function zB(a) {
  if (a ? a.mf : a) {
    return a.mf(a);
  }
  var b;
  b = zB[n(null == a ? null : a)];
  if (!b && (b = zB._, !b)) {
    throw t("PRegion.n-columns", a);
  }
  return b.call(null, a);
}
function AB(a) {
  if (a ? a.lf : a) {
    return a.lf(a);
  }
  var b;
  b = AB[n(null == a ? null : a)];
  if (!b && (b = AB._, !b)) {
    throw t("PRegion.n-cells-per-column", a);
  }
  return b.call(null, a);
}
function BB(a, b, c, d) {
  if (a ? a.nf : a) {
    return a.nf(a, b, c, d);
  }
  var e;
  e = BB[n(null == a ? null : a)];
  if (!e && (e = BB._, !e)) {
    throw t("PRegion.region-step", a);
  }
  return e.call(null, a, b, c, d);
}
function CB(a) {
  if (a ? a.kf : a) {
    return a.kf(a);
  }
  var b;
  b = CB[n(null == a ? null : a)];
  if (!b && (b = CB._, !b)) {
    throw t("PRegion.active-cells", a);
  }
  return b.call(null, a);
}
function DB(a) {
  if (a ? a.of : a) {
    return a.of(a);
  }
  var b;
  b = DB[n(null == a ? null : a)];
  if (!b && (b = DB._, !b)) {
    throw t("PRegion.signal-cells", a);
  }
  return b.call(null, a);
}
function EB(a) {
  var b = ij.k(L([EA, a], 0)), c = Wo.g(b);
  a = FA(new p(null, 6, [Zq, DA(), Y, eh.j(JA, zj.g(c), Fg.g(b)), mp, b, oo, oj, Jn, zh(Fg.h(Wo.g(a), 0)), ho, zh(Fg.h(Wo.g(a), 0))], null));
  a = NA.g ? NA.g(a) : NA.call(null, a);
  b = ij.k(L([Zt, mp.g(a)], 0));
  a = R.k(a, mp, b, L([Y, eh.j(fu, Y.g(a), Fg.g(b))], 0));
  b = mp.g(a);
  b = Hq.g(b) * Wo.g(b);
  return R.j(a, hn, zh(Fg.h(b, oj)));
}
xB.object = function(a) {
  return EB(mp.g(a));
};
zB.object = function(a) {
  return Wo.g(mp.g(a));
};
AB.object = function(a) {
  return Hq.g(mp.g(a));
};
BB.object = function(a, b, c, d) {
  a = YA.m(a, b, c, d);
  return uu(a, oo.g(a), d);
};
CB.object = function(a) {
  return Cp.g(a);
};
DB.object = function(a) {
  return Rn.g(a);
};
function FB(a, b, c, d, e, f) {
  this.ab = a;
  this.value = b;
  this.transform = c;
  this.Va = d;
  this.F = e;
  this.v = f;
  this.q = 2229667594;
  this.G = 8192;
  4 < arguments.length ? (this.F = e, this.v = f) : this.v = this.F = null;
}
k = FB.prototype;
k.K = function(a, b) {
  return Cb.j(this, b, null);
};
k.L = function(a, b, c) {
  switch(b instanceof W ? b.$ : null) {
    case "encoder":
      return this.Va;
    case "transform":
      return this.transform;
    case "value":
      return this.value;
    case "init-value":
      return this.ab;
    default:
      return Q.j(this.v, b, c);
  }
};
k.fd = function() {
  return eB(this.Va);
};
k.gd = function(a, b) {
  return fB(this.Va, b, this.value);
};
k.kd = function() {
  return oj;
};
k.ld = function(a, b) {
  return new U(null, 1, 5, V, [b], null);
};
k.jd = function() {
  return oB(this, 0);
};
k.md = function(a, b) {
  return new U(null, 2, 5, V, [0, qB(this, b)], null);
};
k.hd = function() {
  var a = this;
  return R.j(this, pn, function() {
    var b = a.value;
    return a.transform.g ? a.transform.g(b) : a.transform.call(null, b);
  }());
};
k.jf = function() {
  return this.value;
};
k.N = function(a, b, c) {
  return Gj(b, function() {
    return function(a) {
      return Gj(b, Mj, "", " ", "", c, a);
    };
  }(this), "#org.nfrac.comportex.core.InputGenerator{", ", ", "}", c, bg.h(new U(null, 4, 5, V, [new U(null, 2, 5, V, [$p, this.ab], null), new U(null, 2, 5, V, [pn, this.value], null), new U(null, 2, 5, V, [wk, this.transform], null), new U(null, 2, 5, V, [Jm, this.Va], null)], null), this.v));
};
k.I = function() {
  return this.F;
};
k.T = function() {
  return 4 + O(this.v);
};
k.P = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Cf(this);
};
k.M = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && ei(this, b) : b) ? !0 : !1;
};
k.nd = function() {
  return R.j(this, pn, this.ab);
};
k.Sa = function(a, b) {
  return ye(new mj(null, new p(null, 4, [wk, null, Jm, null, pn, null, $p, null], null), null), b) ? ge.h(Vd(dh.h(li, this), this.F), b) : new FB(this.ab, this.value, this.transform, this.Va, this.F, kg(ge.h(this.v, b)), null);
};
k.va = function(a, b, c) {
  return q(X.h ? X.h($p, b) : X.call(null, $p, b)) ? new FB(c, this.value, this.transform, this.Va, this.F, this.v, null) : q(X.h ? X.h(pn, b) : X.call(null, pn, b)) ? new FB(this.ab, c, this.transform, this.Va, this.F, this.v, null) : q(X.h ? X.h(wk, b) : X.call(null, wk, b)) ? new FB(this.ab, this.value, c, this.Va, this.F, this.v, null) : q(X.h ? X.h(Jm, b) : X.call(null, Jm, b)) ? new FB(this.ab, this.value, this.transform, c, this.F, this.v, null) : new FB(this.ab, this.value, this.transform, 
  this.Va, this.F, R.j(this.v, b, c), null);
};
k.Q = function() {
  return D(bg.h(new U(null, 4, 5, V, [new U(null, 2, 5, V, [$p, this.ab], null), new U(null, 2, 5, V, [pn, this.value], null), new U(null, 2, 5, V, [wk, this.transform], null), new U(null, 2, 5, V, [Jm, this.Va], null)], null), this.v));
};
k.J = function(a, b) {
  return new FB(this.ab, this.value, this.transform, this.Va, b, this.v, this.A);
};
k.S = function(a, b) {
  return re(b) ? Gb(this, v.h(b, 0), v.h(b, 1)) : Ve.j(ob, this, b);
};
function GB(a, b) {
  var c = Cg.h(nB, a), c = cg.h(0, Bj.h(Ze, c));
  return S.h(Ht, Cg.j(b, a, c));
}
function HB(a, b, c) {
  var d = P.j(c, 0, null);
  c = P.j(c, 1, null);
  return a + b * d + c;
}
function IB(a, b, c, d) {
  this.ya = a;
  this.Za = b;
  this.F = c;
  this.v = d;
  this.q = 2229667594;
  this.G = 8192;
  2 < arguments.length ? (this.F = c, this.v = d) : this.v = this.F = null;
}
k = IB.prototype;
k.K = function(a, b) {
  return Cb.j(this, b, null);
};
k.L = function(a, b, c) {
  switch(b instanceof W ? b.$ : null) {
    case "subs":
      return this.Za;
    case "region":
      return this.ya;
    default:
      return Q.j(this.v, b, c);
  }
};
k.fd = function() {
  return AB(this.ya) * zB(this.ya);
};
k.gd = function(a, b) {
  var c = AB(this.ya);
  return dh.h(oj, eh.h(rg.j(HB, b, c), CB(this.ya)));
};
k.kd = function(a, b) {
  var c = AB(this.ya);
  return dh.h(oj, eh.h(rg.j(HB, b, c), DB(this.ya)));
};
k.ld = function(a, b) {
  var c = AB(this.ya), d = V, e = ff(b, c), f = ff(b, c);
  return new U(null, 2, 5, d, [e, b - c * f], null);
};
k.jd = function() {
  return GB(this.Za, oB);
};
k.md = function(a, b) {
  for (var c = 0, d = 0;;) {
    if (c < O(this.Za)) {
      var e = P.h(this.Za, c), f = nB(e);
      if (d <= b && b <= d + f + -1) {
        return new U(null, 2, 5, V, [c, qB(e, b - d)], null);
      }
      c += 1;
      d += df(f);
    } else {
      return null;
    }
  }
};
k.hd = function(a, b) {
  var c = Cg.h(function() {
    return function(a) {
      return tB(a, b);
    };
  }(this), this.Za), d = BB(this.ya, GB(c, oB), GB(c, pB), b);
  return R.k(this, ap, d, L([Mq, c], 0));
};
k.N = function(a, b, c) {
  return Gj(b, function() {
    return function(a) {
      return Gj(b, Mj, "", " ", "", c, a);
    };
  }(this), "#org.nfrac.comportex.core.RegionTree{", ", ", "}", c, bg.h(new U(null, 2, 5, V, [new U(null, 2, 5, V, [ap, this.ya], null), new U(null, 2, 5, V, [Mq, this.Za], null)], null), this.v));
};
k.I = function() {
  return this.F;
};
k.T = function() {
  return 2 + O(this.v);
};
k.P = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Cf(this);
};
k.M = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && ei(this, b) : b) ? !0 : !1;
};
k.nd = function() {
  return jh.j(jh.j(this, new U(null, 1, 5, V, [Mq], null), function() {
    return function(a) {
      return Cg.h(xB, a);
    };
  }(this)), new U(null, 1, 5, V, [ap], null), xB);
};
k.Sa = function(a, b) {
  return ye(new mj(null, new p(null, 2, [ap, null, Mq, null], null), null), b) ? ge.h(Vd(dh.h(li, this), this.F), b) : new IB(this.ya, this.Za, this.F, kg(ge.h(this.v, b)), null);
};
k.va = function(a, b, c) {
  return q(X.h ? X.h(ap, b) : X.call(null, ap, b)) ? new IB(c, this.Za, this.F, this.v, null) : q(X.h ? X.h(Mq, b) : X.call(null, Mq, b)) ? new IB(this.ya, c, this.F, this.v, null) : new IB(this.ya, this.Za, this.F, R.j(this.v, b, c), null);
};
k.Q = function() {
  return D(bg.h(new U(null, 2, 5, V, [new U(null, 2, 5, V, [ap, this.ya], null), new U(null, 2, 5, V, [Mq, this.Za], null)], null), this.v));
};
k.J = function(a, b) {
  return new IB(this.ya, this.Za, b, this.v, this.A);
};
k.S = function(a, b) {
  return re(b) ? Gb(this, v.h(b, 0), v.h(b, 1)) : Ve.j(ob, this, b);
};
function JB(a, b) {
  return new IB(a, b);
}
function KB(a, b, c) {
  var d = Ve.h(Ze, Cg.h(nB, c)), e = function() {
    var a = sq.g(b);
    return q(a) ? df(a * d) : Qn.g(b);
  }();
  return JB(function() {
    var c = R.k(b, $n, d, L([Qn, e], 0));
    return a.g ? a.g(c) : a.call(null, c);
  }(), c);
}
function LB(a, b, c, d) {
  return Yd(Dg.h(c + 1, Vg(function(b) {
    return KB(a, d, new U(null, 1, 5, V, [b], null));
  }, b)));
}
function MB(a) {
  return zh(Hf($g.h(ap, bh(Mq, Mq, a))));
}
function NB(a) {
  return Cg.h(ap, MB(a));
}
function OB(a) {
  return ah.h(ap, bh(Mq, Mq, a));
}
function PB(a) {
  return uA(function(a, c) {
    return R.j(a, Mq, c);
  }, a);
}
function QB(a, b, c) {
  for (a = PB(a);;) {
    var d = ap.g(vA(a));
    if (q(d)) {
      var e = d;
      if (B.h(b, Zq.g(e))) {
        return yA(AA(a, function() {
          return function(a) {
            return jh.j(a, new U(null, 1, 5, V, [ap], null), c);
          };
        }(a, e, d)));
      }
      if (CA(a)) {
        return ht;
      }
      a = BA(a);
    } else {
      return null;
    }
  }
}
function RB(a) {
  var b = qj(gj(Um.g(a))), c = oo.g(a), d = It.h(b, c), b = ij.k(L([rj(b, Fg.g(Rq)), rj(c, Fg.g(Mp)), rj(d, Fg.g(qp))], 0));
  return R.k(ij.k(L([new p(null, 3, [Mp, 0, Rq, 0, qp, 0], null), Aj(ji(b))], 0)), wn, wn.h(a, 0), L([Wo, O(Y.g(a))], 0));
}
;var SB, TB, UB, VB;
function WB(a, b) {
  if (a ? a.Bc : a) {
    return a.Bc(a, b);
  }
  var c;
  c = WB[n(null == a ? null : a)];
  if (!c && (c = WB._, !c)) {
    throw t("ReadPort.take!", a);
  }
  return c.call(null, a, b);
}
function XB(a, b, c) {
  if (a ? a.Cc : a) {
    return a.Cc(a, b, c);
  }
  var d;
  d = XB[n(null == a ? null : a)];
  if (!d && (d = XB._, !d)) {
    throw t("WritePort.put!", a);
  }
  return d.call(null, a, b, c);
}
function YB(a) {
  if (a ? a.Xb : a) {
    return a.Xb(a);
  }
  var b;
  b = YB[n(null == a ? null : a)];
  if (!b && (b = YB._, !b)) {
    throw t("Channel.close!", a);
  }
  return b.call(null, a);
}
function ZB(a) {
  if (a ? a.rb : a) {
    return a.rb(a);
  }
  var b;
  b = ZB[n(null == a ? null : a)];
  if (!b && (b = ZB._, !b)) {
    throw t("Handler.active?", a);
  }
  return b.call(null, a);
}
function $B(a) {
  if (a ? a.Ka : a) {
    return a.Ka(a);
  }
  var b;
  b = $B[n(null == a ? null : a)];
  if (!b && (b = $B._, !b)) {
    throw t("Handler.commit", a);
  }
  return b.call(null, a);
}
function aC(a) {
  if (a ? a.Xc : a) {
    return a.Xc();
  }
  var b;
  b = aC[n(null == a ? null : a)];
  if (!b && (b = aC._, !b)) {
    throw t("Buffer.full?", a);
  }
  return b.call(null, a);
}
;function bC(a, b, c, d, e) {
  for (var f = 0;;) {
    if (f < e) {
      c[d + f] = a[b + f], f += 1;
    } else {
      break;
    }
  }
}
function cC(a, b, c, d) {
  this.head = a;
  this.U = b;
  this.length = c;
  this.l = d;
}
cC.prototype.pop = function() {
  if (0 === this.length) {
    return null;
  }
  var a = this.l[this.U];
  this.l[this.U] = null;
  this.U = (this.U + 1) % this.l.length;
  this.length -= 1;
  return a;
};
cC.prototype.unshift = function(a) {
  this.l[this.head] = a;
  this.head = (this.head + 1) % this.l.length;
  this.length += 1;
  return null;
};
function dC(a, b) {
  a.length + 1 === a.l.length && a.resize();
  a.unshift(b);
}
cC.prototype.resize = function() {
  var a = Array(2 * this.l.length);
  return this.U < this.head ? (bC(this.l, this.U, a, 0, this.length), this.U = 0, this.head = this.length, this.l = a) : this.U > this.head ? (bC(this.l, this.U, a, 0, this.l.length - this.U), bC(this.l, 0, a, this.l.length - this.U, this.head), this.U = 0, this.head = this.length, this.l = a) : this.U === this.head ? (this.head = this.U = 0, this.l = a) : null;
};
function eC(a, b) {
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
function fC(a) {
  if (!(0 < a)) {
    throw Error("Assert failed: Can't create a ring buffer of size 0\n" + u.g(zg.k(L([If(new Ad(null, "\x3e", "\x3e", 1085014381, null), new Ad(null, "n", "n", -2092305744, null), 0)], 0))));
  }
  return new cC(0, 0, 0, Array(a));
}
function gC(a, b) {
  this.ua = a;
  this.Ab = b;
  this.G = 0;
  this.q = 2;
}
gC.prototype.T = function() {
  return this.ua.length;
};
gC.prototype.Xc = function() {
  return this.ua.length === this.Ab;
};
gC.prototype.Ee = function() {
  return this.ua.pop();
};
function hC(a, b) {
  if (!db(aC(a))) {
    throw Error("Assert failed: Can't add to a full buffer\n" + u.g(zg.k(L([If(new Ad(null, "not", "not", 1044554643, null), If(new Ad("impl", "full?", "impl/full?", -97582774, null), new Ad(null, "this", "this", 1028897902, null)))], 0))));
  }
  a.ua.unshift(b);
}
;var iC = null, jC = fC(32), kC = !1, lC = !1;
function mC() {
  kC = !0;
  lC = !1;
  for (var a = 0;;) {
    var b = jC.pop();
    if (null != b && (b.p ? b.p() : b.call(null), 1024 > a)) {
      a += 1;
      continue;
    }
    break;
  }
  kC = !1;
  return 0 < jC.length ? nC.p ? nC.p() : nC.call(null) : null;
}
"undefined" !== typeof MessageChannel && (iC = new MessageChannel, iC.port1.onmessage = function() {
  return mC();
});
function nC() {
  var a = lC;
  if (q(a ? kC : a)) {
    return null;
  }
  lC = !0;
  return "undefined" !== typeof MessageChannel ? iC.port2.postMessage(0) : "undefined" !== typeof setImmediate ? setImmediate(mC) : setTimeout(mC, 0);
}
function oC(a) {
  dC(jC, a);
  nC();
}
function pC(a, b) {
  setTimeout(a, b);
}
;var qC, sC = function rC(b) {
  "undefined" === typeof qC && (qC = function(b, d, e) {
    this.B = b;
    this.le = d;
    this.Ve = e;
    this.G = 0;
    this.q = 425984;
  }, qC.Ca = !0, qC.Ba = "cljs.core.async.impl.channels/t30389", qC.Ga = function(b, d) {
    return Bc(d, "cljs.core.async.impl.channels/t30389");
  }, qC.prototype.Vb = function() {
    return this.B;
  }, qC.prototype.I = function() {
    return this.Ve;
  }, qC.prototype.J = function(b, d) {
    return new qC(this.B, this.le, d);
  });
  return new qC(b, rC, null);
};
function tC(a, b) {
  this.Jb = a;
  this.B = b;
}
function uC(a) {
  return ZB(a.Jb);
}
function vC(a, b, c, d, e, f) {
  this.rc = a;
  this.Gc = b;
  this.Mc = c;
  this.Fc = d;
  this.ua = e;
  this.closed = f;
}
vC.prototype.Xb = function() {
  if (!this.closed) {
    for (this.closed = !0;;) {
      var a = this.rc.pop();
      if (null != a) {
        if (a.rb(null)) {
          var b = a.Ka(null);
          oC(function(a) {
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
vC.prototype.Bc = function(a, b) {
  if (b.rb(null)) {
    if (null != this.ua && 0 < O(this.ua)) {
      var c = b.Ka(null);
      return sC(this.ua.Ee());
    }
    for (;;) {
      var d = this.Mc.pop();
      if (null != d) {
        var e = d.Jb, f = d.B;
        if (e.rb(null)) {
          var g = e.Ka(null), c = b.Ka(null);
          oC(function(a) {
            return function() {
              return a.g ? a.g(!0) : a.call(null, !0);
            };
          }(g, c, e, f, d, this));
          return sC(f);
        }
      } else {
        if (this.closed) {
          return c = b.Ka(null), sC(null);
        }
        64 < this.Gc ? (this.Gc = 0, eC(this.rc, ZB)) : this.Gc += 1;
        if (!(1024 > this.rc.length)) {
          throw Error("Assert failed: " + u.g("No more than " + u.g(1024) + " pending takes are allowed on a single channel.") + "\n" + u.g(zg.k(L([If(new Ad(null, "\x3c", "\x3c", 993667236, null), If(new Ad(null, ".-length", ".-length", -280799999, null), new Ad(null, "takes", "takes", 298247964, null)), new Ad("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", 1508600732, null))], 0))));
        }
        dC(this.rc, b);
        return null;
      }
    }
  } else {
    return null;
  }
};
vC.prototype.Cc = function(a, b, c) {
  if (null == b) {
    throw Error("Assert failed: Can't put nil in on a channel\n" + u.g(zg.k(L([If(new Ad(null, "not", "not", 1044554643, null), If(new Ad(null, "nil?", "nil?", 1612038930, null), new Ad(null, "val", "val", 1769233139, null)))], 0))));
  }
  if ((a = this.closed) || !c.rb(null)) {
    return sC(!a);
  }
  for (;;) {
    var d = this.rc.pop();
    if (null != d) {
      if (d.rb(null)) {
        var e = d.Ka(null);
        c = c.Ka(null);
        oC(function(a) {
          return function() {
            return a.g ? a.g(b) : a.call(null, b);
          };
        }(e, c, d, a, this));
        return sC(!0);
      }
    } else {
      if (null == this.ua || this.ua.Xc()) {
        64 < this.Fc ? (this.Fc = 0, eC(this.Mc, uC)) : this.Fc += 1;
        if (!(1024 > this.Mc.length)) {
          throw Error("Assert failed: " + u.g("No more than " + u.g(1024) + " pending puts are allowed on a single channel. Consider using a windowed buffer.") + "\n" + u.g(zg.k(L([If(new Ad(null, "\x3c", "\x3c", 993667236, null), If(new Ad(null, ".-length", ".-length", -280799999, null), new Ad(null, "puts", "puts", -1883877054, null)), new Ad("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", 1508600732, null))], 0))));
        }
        dC(this.Mc, new tC(c, b));
        return null;
      }
      c = c.Ka(null);
      hC(this.ua, b);
      return sC(!0);
    }
  }
};
function wC(a) {
  return new vC(fC(32), 0, fC(32), 0, a, !1);
}
;var xC, zC = function yC(b) {
  "undefined" === typeof xC && (xC = function(b, d, e) {
    this.f = b;
    this.cd = d;
    this.Ue = e;
    this.G = 0;
    this.q = 393216;
  }, xC.Ca = !0, xC.Ba = "cljs.core.async.impl.ioc-helpers/t30253", xC.Ga = function(b, d) {
    return Bc(d, "cljs.core.async.impl.ioc-helpers/t30253");
  }, xC.prototype.rb = function() {
    return!0;
  }, xC.prototype.Ka = function() {
    return this.f;
  }, xC.prototype.I = function() {
    return this.Ue;
  }, xC.prototype.J = function(b, d) {
    return new xC(this.f, this.cd, d);
  });
  return new xC(b, yC, null);
};
function AC(a) {
  try {
    return a[0].call(null, a);
  } catch (b) {
    throw b instanceof Object && a[6].Xb(null), b;
  }
}
function BC(a, b, c) {
  c = c.Bc(null, zC(function(c) {
    a[2] = c;
    a[1] = b;
    return AC(a);
  }));
  return q(c) ? (a[2] = M.g ? M.g(c) : M.call(null, c), a[1] = b, Z) : null;
}
function CC(a, b) {
  var c = a[6];
  null != b && c.Cc(null, b, zC(function() {
    return function() {
      return null;
    };
  }(c)));
  c.Xb(null);
  return c;
}
function DC(a) {
  for (;;) {
    var b = a[4], c = Wn.g(b), d = Xp.g(b), e = a[5];
    if (q(function() {
      var a = e;
      return q(a) ? db(b) : a;
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
      a[4] = R.k(b, Wn, null, L([Xp, null], 0));
      break;
    }
    if (q(function() {
      var a = e;
      return q(a) ? db(c) && db(bn.g(b)) : a;
    }())) {
      a[4] = jq.g(b);
    } else {
      if (q(function() {
        var a = e;
        return q(a) ? (a = db(c)) ? bn.g(b) : a : a;
      }())) {
        a[1] = bn.g(b);
        a[4] = R.j(b, bn, null);
        break;
      }
      if (q(function() {
        var a = db(e);
        return a ? bn.g(b) : a;
      }())) {
        a[1] = bn.g(b);
        a[4] = R.j(b, bn, null);
        break;
      }
      if (db(e) && db(bn.g(b))) {
        a[1] = qq.g(b);
        a[4] = jq.g(b);
        break;
      }
      throw Error("Assert failed: No matching clause\n" + u.g(zg.k(L([!1], 0))));
    }
  }
}
;var EC = function() {
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
  c.p = b;
  c.g = a;
  return c;
}();
function FC(a, b, c) {
  this.key = a;
  this.B = b;
  this.forward = c;
  this.G = 0;
  this.q = 2155872256;
}
FC.prototype.N = function(a, b, c) {
  return Gj(b, Mj, "[", " ", "]", c, this);
};
FC.prototype.Q = function() {
  return ob(ob(Dd, this.B), this.key);
};
var GC = function() {
  function a(a, b, c) {
    c = Array(c + 1);
    for (var g = 0;;) {
      if (g < c.length) {
        c[g] = null, g += 1;
      } else {
        break;
      }
    }
    return new FC(a, b, c);
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
}(), HC = function() {
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
    return c.m(a, b, f, null);
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
  c.m = a;
  return c;
}();
function IC(a, b) {
  this.Lb = a;
  this.Na = b;
  this.G = 0;
  this.q = 2155872256;
}
IC.prototype.N = function(a, b, c) {
  return Gj(b, function() {
    return function(a) {
      return Gj(b, Mj, "", " ", "", c, a);
    };
  }(this), "{", ", ", "}", c, this);
};
IC.prototype.Q = function() {
  return function(a) {
    return function c(d) {
      return new Mf(null, function() {
        return function() {
          return null == d ? null : Td(new U(null, 2, 5, V, [d.key, d.B], null), c(d.forward[0]));
        };
      }(a), null, null);
    };
  }(this)(this.Lb.forward[0]);
};
IC.prototype.put = function(a, b) {
  var c = Array(15), d = HC.m(this.Lb, a, this.Na, c).forward[0];
  if (null != d && d.key === a) {
    return d.B = b;
  }
  d = EC.p();
  if (d > this.Na) {
    for (var e = this.Na + 1;;) {
      if (e <= d + 1) {
        c[e] = this.Lb, e += 1;
      } else {
        break;
      }
    }
    this.Na = d;
  }
  for (d = GC.j(a, b, Array(d));;) {
    return 0 <= this.Na ? (c = c[0].forward, d.forward[0] = c[0], c[0] = d) : null;
  }
};
IC.prototype.remove = function(a) {
  var b = Array(15), c = HC.m(this.Lb, a, this.Na, b).forward[0];
  if (null != c && c.key === a) {
    for (a = 0;;) {
      if (a <= this.Na) {
        var d = b[a].forward;
        d[a] === c && (d[a] = c.forward[a]);
        a += 1;
      } else {
        break;
      }
    }
    for (;;) {
      if (0 < this.Na && null == this.Lb.forward[this.Na]) {
        this.Na -= 1;
      } else {
        return null;
      }
    }
  } else {
    return null;
  }
};
function JC(a) {
  for (var b = KC, c = b.Lb, d = b.Na;;) {
    if (0 > d) {
      return c === b.Lb ? null : c;
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
var KC = new IC(GC.g(0), 0);
function LC(a) {
  var b = (new Date).valueOf() + a, c = JC(b), d = q(q(c) ? c.key < b + 10 : c) ? c.B : null;
  if (q(d)) {
    return d;
  }
  var e = wC(null);
  KC.put(b, e);
  pC(function(a, b, c) {
    return function() {
      KC.remove(c);
      return a.Xb(null);
    };
  }(e, d, b, c), a);
  return e;
}
;var NC = function MC(b) {
  "undefined" === typeof SB && (SB = function(b, d, e) {
    this.f = b;
    this.cd = d;
    this.Re = e;
    this.G = 0;
    this.q = 393216;
  }, SB.Ca = !0, SB.Ba = "cljs.core.async/t27331", SB.Ga = function(b, d) {
    return Bc(d, "cljs.core.async/t27331");
  }, SB.prototype.rb = function() {
    return!0;
  }, SB.prototype.Ka = function() {
    return this.f;
  }, SB.prototype.I = function() {
    return this.Re;
  }, SB.prototype.J = function(b, d) {
    return new SB(this.f, this.cd, d);
  });
  return new SB(b, MC, null);
}, OC = function() {
  function a(a) {
    a = B.h(a, 0) ? null : a;
    a = "number" === typeof a ? new gC(fC(a), a) : a;
    return wC(a);
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
  c.p = b;
  c.g = a;
  return c;
}(), PC = NC(function() {
  return null;
}), QC = function() {
  function a(a, b, c, d) {
    a = XB(a, b, NC(c));
    return q(a) ? (b = M.g ? M.g(a) : M.call(null, a), q(d) ? c.g ? c.g(b) : c.call(null, b) : oC(function(a) {
      return function() {
        return c.g ? c.g(a) : c.call(null, a);
      };
    }(b, a, a)), b) : !0;
  }
  function b(a, b, c) {
    return d.m(a, b, c, !0);
  }
  function c(a, b) {
    var c = XB(a, b, PC);
    return q(c) ? M.g ? M.g(c) : M.call(null, c) : !0;
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
  d.m = a;
  return d;
}(), SC = function RC(b, c) {
  "undefined" === typeof TB && (TB = function(b, c, f, g) {
    this.ch = b;
    this.f = c;
    this.Jc = f;
    this.Kc = g;
    this.G = 0;
    this.q = 393216;
  }, TB.Ca = !0, TB.Ba = "cljs.core.async/t27417", TB.Ga = function(b, c) {
    return Bc(c, "cljs.core.async/t27417");
  }, TB.prototype.Cc = function(b, c, f) {
    return XB(this.ch, c, f);
  }, TB.prototype.Bc = function(b, c) {
    var f = this, g = this, h = WB(f.ch, function() {
      "undefined" === typeof UB && (UB = function(b, c, d, e, f, g, h) {
        this.bd = b;
        this.je = c;
        this.Kc = d;
        this.ch = e;
        this.f = f;
        this.Jc = g;
        this.Se = h;
        this.G = 0;
        this.q = 393216;
      }, UB.Ca = !0, UB.Ba = "cljs.core.async/t27420", UB.Ga = function() {
        return function(b, c) {
          return Bc(c, "cljs.core.async/t27420");
        };
      }(g), UB.prototype.rb = function() {
        return function() {
          return ZB(this.bd);
        };
      }(g), UB.prototype.Ka = function(b) {
        return function() {
          var c = this;
          return function(b) {
            return function(d) {
              d = null == d ? null : c.f.g ? c.f.g(d) : c.f.call(null, d);
              return b.g ? b.g(d) : b.call(null, d);
            };
          }($B(c.bd), this, b);
        };
      }(g), UB.prototype.I = function() {
        return function() {
          return this.Se;
        };
      }(g), UB.prototype.J = function() {
        return function(b, c) {
          return new UB(this.bd, this.je, this.Kc, this.ch, this.f, this.Jc, c);
        };
      }(g));
      return new UB(c, g, f.Kc, f.ch, f.f, f.Jc, null);
    }());
    return q(q(h) ? null != (M.g ? M.g(h) : M.call(null, h)) : h) ? sC(function() {
      var b = M.g ? M.g(h) : M.call(null, h);
      return f.f.g ? f.f.g(b) : f.f.call(null, b);
    }()) : h;
  }, TB.prototype.Xb = function() {
    return YB(this.ch);
  }, TB.prototype.I = function() {
    return this.Kc;
  }, TB.prototype.J = function(b, c) {
    return new TB(this.ch, this.f, this.Jc, c);
  });
  return new TB(c, b, RC, null);
};
function TC(a, b, c) {
  if (a ? a.Hd : a) {
    return a.Hd(a, b, c);
  }
  var d;
  d = TC[n(null == a ? null : a)];
  if (!d && (d = TC._, !d)) {
    throw t("Mult.tap*", a);
  }
  return d.call(null, a, b, c);
}
var UC = function() {
  function a(a, b, c) {
    TC(a, b, c);
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
function VC(a, b) {
  var c = Array.prototype.slice.call(arguments), d = c.shift();
  if ("undefined" == typeof d) {
    throw Error("[goog.string.format] Template required");
  }
  return d.replace(/%([0\-\ \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(a, b, d, h, l, m, r, s) {
    if ("%" == m) {
      return "%";
    }
    var w = c.shift();
    if ("undefined" == typeof w) {
      throw Error("[goog.string.format] Not enough arguments");
    }
    arguments[0] = w;
    return WC[m].apply(null, arguments);
  });
}
var WC = {s:function(a, b, c) {
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
  return WC.f(parseInt(a, 10), b, c, d, 0, f, g, h);
}};
WC.i = WC.d;
WC.u = WC.d;
function XC(a) {
  a.beginPath();
}
function YC(a) {
  a.stroke();
}
function ZC(a, b) {
  var c = we(b) ? S.h(vg, b) : b, d = Q.h(c, Gp), e = Q.h(c, gn), f = Q.h(c, Vj), c = Q.h(c, Lq);
  a.clearRect(c, f, e, d);
}
function $C(a, b) {
  var c = we(b) ? S.h(vg, b) : b, d = Q.h(c, Gp), e = Q.h(c, gn), f = Q.h(c, Vj), c = Q.h(c, Lq);
  a.strokeRect(c, f, e, d);
}
function aD(a, b) {
  var c = we(b) ? S.h(vg, b) : b, d = Q.h(c, Gp), e = Q.h(c, gn), f = Q.h(c, Vj), c = Q.h(c, Lq);
  a.fillRect(c, f, e, d);
}
function bD(a, b) {
  var c = we(b) ? S.h(vg, b) : b, d = Q.h(c, Vj), e = Q.h(c, Lq), c = Q.h(c, Bt);
  a.fillText(c, e, d);
}
function cD(a, b) {
  a.fillStyle = Kf(b);
}
function dD(a, b) {
  a.strokeStyle = Kf(b);
}
function eD(a, b) {
  a.globalAlpha = b;
  return a;
}
var fD = function() {
  function a(a, b, c, g) {
    a.drawImage(b, c, g);
    return a;
  }
  function b(a, b, c) {
    var g = we(c) ? S.h(vg, c) : c;
    c = Q.h(g, Tq);
    var h = Q.h(g, Vq), l = Q.h(g, Lq), m = Q.h(g, Vj), r = Q.h(g, rk), s = Q.h(g, yk), w = Q.h(g, gn), A = Q.h(g, jn), y = Q.h(g, Fn), C = Q.h(g, Gp), G = Q.h(g, yq), I = Q.h(g, Eq), g = O(g);
    if (q(B.h ? B.h(2, g) : B.call(null, 2, g))) {
      a.drawImage(b, l, m);
    } else {
      if (q(B.h ? B.h(4, g) : B.call(null, 4, g))) {
        a.drawImage(b, l, m, w, C);
      } else {
        if (q(B.h ? B.h(8, g) : B.call(null, 8, g))) {
          a.drawImage(b, I, A, h, c, s, y, G, r);
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
  c.m = a;
  return c;
}(), gD = function() {
  function a(a, b, c, g, h, l, m) {
    a.bezierCurveTo(b, c, g, h, l, m);
    return a;
  }
  function b(a, b) {
    var c = we(b) ? S.h(vg, b) : b, g = Q.h(c, Vj), h = Q.h(c, Lq), l = Q.h(c, Yq), m = Q.h(c, xp), r = Q.h(c, tq), c = Q.h(c, sp);
    a.bezierCurveTo(c, r, m, l, h, g);
    return a;
  }
  var c = null, c = function(c, e, f, g, h, l, m) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 7:
        return a.call(this, c, e, f, g, h, l, m);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.h = b;
  c.Aa = a;
  return c;
}();
var hD, iD, jD = new p(null, 5, [Xq, new p(null, 2, [Mp, !0, Rq, !0], null), Y, new p(null, 5, [Mp, !0, Op, null, Pn, !0, Gk, !0, Ck, 0], null), dk, new p(null, 3, [Mp, null, Uj, null, gt, null], null), Qm, new p(null, 5, [Hp, $o, Mp, !0, Uj, null, Mm, null, gt, null], null), Cq, fe([Yj, zk, an, cn, dn, Sn, Yo, Oq, st, tt, zt], [30, 50, 10, 80, .85, 25, 2, 5, 5, .85, 10])], null);
iD = xg.g ? xg.g(jD) : xg.call(null, jD);
var kD = xg.g ? xg.g(25) : xg.call(null, 25), lD = xg.g ? xg.g(Zd) : xg.call(null, Zd), mD = xg.g ? xg.g(null) : xg.call(null, null), nD = function() {
  function a(a, b, c, g) {
    var h = a instanceof W ? function() {
      switch(a instanceof W ? a.$ : null) {
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
    return "hsla(" + u.g(h) + "," + u.g(df(100 * b)) + "%," + u.g(df(100 * c)) + "%," + u.g(g) + ")";
  }
  function b(a, b, f) {
    return c.m(a, b, f, 1);
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
  c.m = a;
  return c;
}(), $ = new p(null, 7, [Dn, "white", Uj, "white", Mp, nD.j(Tp, 1, .5), Rq, nD.m(Vp, 1, .5, .5), qp, nD.j(gr, 1, .4), Xm, nD.m(Wm, 1, .75, .5), Gk, nD.m(qn, 1, .5, .4)], null);
function oD(a) {
  if (a ? a.Rd : a) {
    return a.Rd();
  }
  var b;
  b = oD[n(null == a ? null : a)];
  if (!b && (b = oD._, !b)) {
    throw t("PArrayLayout.layout-bounds", a);
  }
  return b.call(null, a);
}
function pD(a, b) {
  if (a ? a.Ud : a) {
    return a.Ud(0, b);
  }
  var c;
  c = pD[n(null == a ? null : a)];
  if (!c && (c = pD._, !c)) {
    throw t("PArrayLayout.origin-px-topleft", a);
  }
  return c.call(null, a, b);
}
function qD(a, b) {
  if (a ? a.Sd : a) {
    return a.Sd(0, b);
  }
  var c;
  c = qD[n(null == a ? null : a)];
  if (!c && (c = qD._, !c)) {
    throw t("PArrayLayout.local-px-topleft", a);
  }
  return c.call(null, a, b);
}
function rD(a) {
  if (a ? a.Od : a) {
    return a.Od();
  }
  var b;
  b = rD[n(null == a ? null : a)];
  if (!b && (b = rD._, !b)) {
    throw t("PArrayLayout.element-size-px", a);
  }
  return b.call(null, a);
}
function sD(a) {
  if (a ? a.Td : a) {
    return a.Td();
  }
  var b;
  b = sD[n(null == a ? null : a)];
  if (!b && (b = sD._, !b)) {
    throw t("PArrayLayout.n-onscreen", a);
  }
  return b.call(null, a);
}
function tD(a) {
  if (a ? a.He : a) {
    return a.ma;
  }
  var b;
  b = tD[n(null == a ? null : a)];
  if (!b && (b = tD._, !b)) {
    throw t("PArrayLayout.top-id-onscreen", a);
  }
  return b.call(null, a);
}
function uD(a, b, c) {
  if (a ? a.Md : a) {
    return a.Md(0, b, c);
  }
  var d;
  d = uD[n(null == a ? null : a)];
  if (!d && (d = uD._, !d)) {
    throw t("PArrayLayout.clicked-id", a);
  }
  return d.call(null, a, b, c);
}
function vD(a, b, c) {
  if (a ? a.Nd : a) {
    return a.Nd(0, b, c);
  }
  var d;
  d = vD[n(null == a ? null : a)];
  if (!d && (d = vD._, !d)) {
    throw t("PArrayLayout.draw-element", a);
  }
  return d.call(null, a, b, c);
}
function wD(a, b, c) {
  if (a ? a.Pd : a) {
    return a.Pd(0, b, c);
  }
  var d;
  d = wD[n(null == a ? null : a)];
  if (!d && (d = wD._, !d)) {
    throw t("PArrayLayout.highlight-dt", a);
  }
  return d.call(null, a, b, c);
}
function xD(a, b, c, d) {
  if (a ? a.Qd : a) {
    return a.Qd(0, b, c, d);
  }
  var e;
  e = xD[n(null == a ? null : a)];
  if (!e && (e = xD._, !e)) {
    throw t("PArrayLayout.highlight-element", a);
  }
  return e.call(null, a, b, c, d);
}
function yD(a) {
  a = oD(a);
  return Lq.g(a) + gn.g(a);
}
function zD(a, b, c) {
  var d = rD(a), e = P.j(d, 0, null), d = P.j(d, 1, null), f = pD(a, c);
  c = P.j(f, 0, null);
  f = P.j(f, 1, null);
  b = qD(a, b);
  a = P.j(b, 0, null);
  b = P.j(b, 1, null);
  return new U(null, 2, 5, V, [c + a + .5 * e, f + b + .5 * d], null);
}
function AD(a, b, c) {
  var d = tD(b), e = d + sD(b) + -1;
  XC(a);
  c = D(c);
  for (var f = null, g = 0, h = 0;;) {
    if (h < g) {
      var l = f.D(null, h);
      d <= l && l <= e && vD(b, a, l);
      h += 1;
    } else {
      if (c = D(c)) {
        f = c, T(f) ? (c = x(f), h = z(f), f = c, g = O(c), c = h) : (c = E(f), d <= c && c <= e && vD(b, a, c), c = H(f), f = null, g = 0), h = 0;
      } else {
        break;
      }
    }
  }
}
function BD(a, b, c) {
  a.save();
  c = D(Sj(c, gj(c)));
  for (var d = null, e = 0, f = 0;;) {
    if (f < e) {
      var g = d.D(null, f), h = P.j(g, 0, null), g = P.j(g, 1, null);
      AD(a, b, g);
      g = a;
      eD.h ? eD.h(g, h) : eD.call(null, g, h);
      a.fill();
      f += 1;
    } else {
      if (c = D(c)) {
        T(c) ? (e = x(c), c = z(c), d = e, e = O(e)) : (e = E(c), d = P.j(e, 0, null), e = P.j(e, 1, null), AD(a, b, e), e = a, eD.h ? eD.h(e, d) : eD.call(null, e, d), a.fill(), c = H(c), d = null, e = 0), f = 0;
      } else {
        break;
      }
    }
  }
  a.restore();
}
function CD(a, b, c, d) {
  c = pD(b, c);
  b = P.j(c, 0, null);
  c = P.j(c, 1, null);
  fD.m(a, d, b, c);
}
function DD(a, b, c, d) {
  return new p(null, 4, [Lq, a - c / 2, Vj, b - d / 2, gn, c, Gp, d], null);
}
function ED(a, b) {
  dD(a, Xm.g($));
  a.lineWidth = 3;
  $C(a, b);
  dD(a, "black");
  a.lineWidth = 1;
  $C(a, b);
  return a;
}
function FD(a, b, c, d, e, f, g, h, l, m) {
  this.xa = a;
  this.ma = b;
  this.pa = c;
  this.ea = d;
  this.fa = e;
  this.ta = f;
  this.ra = g;
  this.za = h;
  this.F = l;
  this.v = m;
  this.q = 2229667594;
  this.G = 8192;
  8 < arguments.length ? (this.F = l, this.v = m) : this.v = this.F = null;
}
k = FD.prototype;
k.K = function(a, b) {
  return Cb.j(this, b, null);
};
k.L = function(a, b, c) {
  switch(b instanceof W ? b.$ : null) {
    case "circles?":
      return this.za;
    case "left-px":
      return this.ra;
    case "shrink":
      return this.ta;
    case "element-h":
      return this.fa;
    case "element-w":
      return this.ea;
    case "draw-steps":
      return this.pa;
    case "scroll-top":
      return this.ma;
    case "elements-per-dt":
      return this.xa;
    default:
      return Q.j(this.v, b, c);
  }
};
k.N = function(a, b, c) {
  return Gj(b, function() {
    return function(a) {
      return Gj(b, Mj, "", " ", "", c, a);
    };
  }(this), "#comportexviz.viz-canvas.Grid1dLayout{", ", ", "}", c, bg.h(new U(null, 8, 5, V, [new U(null, 2, 5, V, [rt, this.xa], null), new U(null, 2, 5, V, [Bk, this.ma], null), new U(null, 2, 5, V, [Sn, this.pa], null), new U(null, 2, 5, V, [Ct, this.ea], null), new U(null, 2, 5, V, [kn, this.fa], null), new U(null, 2, 5, V, [Mn, this.ta], null), new U(null, 2, 5, V, [dq, this.ra], null), new U(null, 2, 5, V, [kr, this.za], null)], null), this.v));
};
k.I = function() {
  return this.F;
};
k.T = function() {
  return 8 + O(this.v);
};
k.Td = function() {
  var a = this.xa, b = 880 / this.fa;
  return a < b ? a : b;
};
k.Pd = function(a, b, c) {
  c = pD(this, c);
  a = P.j(c, 0, null);
  c = P.j(c, 1, null);
  var d = oD(this);
  return ED(b, new p(null, 4, [Lq, a, Vj, c - 5, gn, this.ea + 1, Gp, 10 + Gp.g(d)], null));
};
k.Od = function() {
  return new U(null, 2, 5, V, [this.ea, this.fa], null);
};
k.Nd = function(a, b, c) {
  c = qD(this, c);
  a = P.j(c, 0, null);
  c = P.j(c, 1, null);
  if (q(this.za)) {
    var d = this.ea * this.ta * .5;
    b = b.arc(a + d, c + d, d, 0, 2 * Math.PI, !0);
  } else {
    b = b.rect(a, c, this.ea * this.ta, this.fa * this.ta);
  }
  return b;
};
k.He = function() {
  return this.ma;
};
k.Ud = function(a, b) {
  return new U(null, 2, 5, V, [this.ra + this.pa * this.ea - (b + 1) * this.ea, 20], null);
};
k.Sd = function(a, b) {
  return new U(null, 2, 5, V, [0, (b - this.ma) * this.fa], null);
};
k.Md = function(a, b, c) {
  var d = this, e = d.ra + d.pa * d.ea;
  a = function() {
    var a = (e - b) / d.ea;
    return Math.floor.g ? Math.floor.g(a) : Math.floor.call(null, a);
  }();
  var f = function() {
    var a = (c - 20) / d.fa;
    return Math.floor.g ? Math.floor.g(a) : Math.floor.call(null, a);
  }(), g = f + d.ma;
  return 0 <= a && a <= O(M.g ? M.g(lD) : M.call(null, lD)) && 0 <= f && f <= sD(this) ? new U(null, 2, 5, V, [a, g], null) : null;
};
k.Qd = function(a, b, c, d) {
  a = pD(this, c);
  P.j(a, 0, null);
  a = P.j(a, 1, null);
  d = qD(this, d);
  P.j(d, 0, null);
  d = P.j(d, 1, null);
  c = oD(this);
  return ED(b, new p(null, 4, [Lq, Lq.g(c) - 5, Vj, a + d, gn, gn.g(c) + 10, Gp, this.fa + 1], null));
};
k.Rd = function() {
  return new p(null, 4, [Lq, this.ra, Vj, 20, gn, this.pa * this.ea, Gp, this.xa * this.fa], null);
};
k.P = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Cf(this);
};
k.M = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && ei(this, b) : b) ? !0 : !1;
};
k.Sa = function(a, b) {
  return ye(new mj(null, new p(null, 8, [Bk, null, kn, null, Mn, null, Sn, null, dq, null, kr, null, rt, null, Ct, null], null), null), b) ? ge.h(Vd(dh.h(li, this), this.F), b) : new FD(this.xa, this.ma, this.pa, this.ea, this.fa, this.ta, this.ra, this.za, this.F, kg(ge.h(this.v, b)), null);
};
k.va = function(a, b, c) {
  return q(X.h ? X.h(rt, b) : X.call(null, rt, b)) ? new FD(c, this.ma, this.pa, this.ea, this.fa, this.ta, this.ra, this.za, this.F, this.v, null) : q(X.h ? X.h(Bk, b) : X.call(null, Bk, b)) ? new FD(this.xa, c, this.pa, this.ea, this.fa, this.ta, this.ra, this.za, this.F, this.v, null) : q(X.h ? X.h(Sn, b) : X.call(null, Sn, b)) ? new FD(this.xa, this.ma, c, this.ea, this.fa, this.ta, this.ra, this.za, this.F, this.v, null) : q(X.h ? X.h(Ct, b) : X.call(null, Ct, b)) ? new FD(this.xa, this.ma, 
  this.pa, c, this.fa, this.ta, this.ra, this.za, this.F, this.v, null) : q(X.h ? X.h(kn, b) : X.call(null, kn, b)) ? new FD(this.xa, this.ma, this.pa, this.ea, c, this.ta, this.ra, this.za, this.F, this.v, null) : q(X.h ? X.h(Mn, b) : X.call(null, Mn, b)) ? new FD(this.xa, this.ma, this.pa, this.ea, this.fa, c, this.ra, this.za, this.F, this.v, null) : q(X.h ? X.h(dq, b) : X.call(null, dq, b)) ? new FD(this.xa, this.ma, this.pa, this.ea, this.fa, this.ta, c, this.za, this.F, this.v, null) : q(X.h ? 
  X.h(kr, b) : X.call(null, kr, b)) ? new FD(this.xa, this.ma, this.pa, this.ea, this.fa, this.ta, this.ra, c, this.F, this.v, null) : new FD(this.xa, this.ma, this.pa, this.ea, this.fa, this.ta, this.ra, this.za, this.F, R.j(this.v, b, c), null);
};
k.Q = function() {
  return D(bg.h(new U(null, 8, 5, V, [new U(null, 2, 5, V, [rt, this.xa], null), new U(null, 2, 5, V, [Bk, this.ma], null), new U(null, 2, 5, V, [Sn, this.pa], null), new U(null, 2, 5, V, [Ct, this.ea], null), new U(null, 2, 5, V, [kn, this.fa], null), new U(null, 2, 5, V, [Mn, this.ta], null), new U(null, 2, 5, V, [dq, this.ra], null), new U(null, 2, 5, V, [kr, this.za], null)], null), this.v));
};
k.J = function(a, b) {
  return new FD(this.xa, this.ma, this.pa, this.ea, this.fa, this.ta, this.ra, this.za, b, this.v, this.A);
};
k.S = function(a, b) {
  return re(b) ? Gb(this, v.h(b, 0), v.h(b, 1)) : Ve.j(ob, this, b);
};
function GD(a) {
  return new FD(rt.g(a), Bk.g(a), Sn.g(a), Ct.g(a), kn.g(a), Mn.g(a), dq.g(a), kr.g(a), null, ge.k(a, rt, L([Bk, Sn, Ct, kn, Mn, dq, kr], 0)));
}
function HD(a, b) {
  var c = we(b) ? S.h(vg, b) : b, d = Q.h(c, tt), e = Q.h(c, Yo), f = Q.h(c, Oq), c = Q.h(c, Sn);
  return GD(new p(null, 8, [rt, a, Bk, 0, Sn, c, Ct, f, kn, e, Mn, d, dq, 0, kr, !1], null));
}
function ID(a, b, c) {
  var d = we(c) ? S.h(vg, c) : c;
  c = Q.h(d, dn);
  var e = Q.h(d, st), d = Q.h(d, Sn);
  return GD(new p(null, 8, [rt, a, Bk, 0, Sn, d, Ct, e, kn, e, Mn, c, dq, b, kr, !0], null));
}
function JD(a) {
  Ag.m(mD, jh, new U(null, 1, 5, V, [vn], null), function(b) {
    return eh.h(function(b) {
      var d = sD(b), e = rt.g(b);
      return jh.j(b, new U(null, 1, 5, V, [Bk], null), function(b, c) {
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
  return Ag.m(iD, jh, new U(null, 2, 5, V, [Y, Ck], null), function(b) {
    return q(a) ? b + 1 : b - 1;
  });
}
function KD(a, b, c, d, e, f, g, h, l) {
  a.save();
  a.lineWidth = 1;
  eD(a, 1);
  for (var m = q(g) ? new U(null, 1, 5, V, [g], null) : oo.g(b), r = uB.g(e), s = vB.g(e), w = gh.h(l, new U(null, 2, 5, V, [dk, Uj], null)), A = gh.h(l, new U(null, 2, 5, V, [dk, gt], null)), y = D(m), C = null, G = 0, I = 0;;) {
    if (I < G) {
      for (var N = C.D(null, I), K = D(bg.h(q(w) ? new U(null, 1, 5, V, [Uj], null) : null, new U(null, 2, 5, V, [Mp, qp], null))), da = null, ea = 0, J = 0;;) {
        if (J < ea) {
          var za = da.D(null, J), ga = gh.h(c, new U(null, 2, 5, V, [Y, N], null)), oa = Gn.g(dk.g(ga)), wa = function() {
            switch(za instanceof W ? za.$ : null) {
              case "inactive":
                return S.j(ge, oa, r);
              case "active-predicted":
                return kj(oa, s);
              case "active":
                return kj(oa, r);
              default:
                throw Error("No matching clause: " + u.g(za));;
            }
          }(), Ha = zD(d, N, h), Ja = P.j(Ha, 0, null), Sa = P.j(Ha, 1, null);
          dD(a, function() {
            var a = za;
            return $.g ? $.g(a) : $.call(null, a);
          }());
          for (var Ka = D(wa), zb = null, Ea = 0, ab = 0;;) {
            if (ab < Ea) {
              var sb = zb.D(null, ab), Ua = P.j(sb, 0, null), qa = P.j(sb, 1, null), Ib = qB(e, Ua), Jb = P.j(Ib, 0, null);
              P.j(Ib, 1, null);
              var eb = zD(f, Jb, h), tb = P.j(eb, 0, null), fa = P.j(eb, 1, null), bc = a;
              eD(bc, q(A) ? qa : 1);
              XC(bc);
              bc.moveTo(Ja - 1, Sa);
              bc.lineTo(tb + 1, fa);
              YC(bc);
              ab += 1;
            } else {
              var ad = D(Ka);
              if (ad) {
                var cc = ad;
                if (T(cc)) {
                  var Gc = x(cc), kc = z(cc), Kb = Gc, Sb = O(Gc), Ka = kc, zb = Kb, Ea = Sb
                } else {
                  var Sc = E(cc), Hg = P.j(Sc, 0, null), Ig = P.j(Sc, 1, null), id = qB(e, Hg), gf = P.j(id, 0, null);
                  P.j(id, 1, null);
                  var hf = zD(f, gf, h), Jg = P.j(hf, 0, null), Tc = P.j(hf, 1, null), Eb = a;
                  eD(Eb, q(A) ? Ig : 1);
                  XC(Eb);
                  Eb.moveTo(Ja - 1, Sa);
                  Eb.lineTo(Jg + 1, Tc);
                  YC(Eb);
                  Ka = H(cc);
                  zb = null;
                  Ea = 0;
                }
                ab = 0;
              } else {
                break;
              }
            }
          }
          J += 1;
        } else {
          var wc = D(K);
          if (wc) {
            var Tb = wc;
            if (T(Tb)) {
              var Uc = x(Tb), jf = z(Tb), kf = Uc, Hc = O(Uc), K = jf, da = kf, ea = Hc
            } else {
              var be = E(Tb), Nh = gh.h(c, new U(null, 2, 5, V, [Y, N], null)), lf = Gn.g(dk.g(Nh)), Vc = function() {
                switch(be instanceof W ? be.$ : null) {
                  case "inactive":
                    return S.j(ge, lf, r);
                  case "active-predicted":
                    return kj(lf, s);
                  case "active":
                    return kj(lf, r);
                  default:
                    throw Error("No matching clause: " + u.g(be));;
                }
              }(), Nb = zD(d, N, h), lc = P.j(Nb, 0, null), jd = P.j(Nb, 1, null);
              dD(a, function() {
                var a = be;
                return $.g ? $.g(a) : $.call(null, a);
              }());
              for (var Ic = D(Vc), xc = null, va = 0, Lb = 0;;) {
                if (Lb < va) {
                  var kd = xc.D(null, Lb), De = P.j(kd, 0, null), yc = P.j(kd, 1, null), ld = qB(e, De), Zb = P.j(ld, 0, null);
                  P.j(ld, 1, null);
                  var Ub = zD(f, Zb, h), md = P.j(Ub, 0, null), ce = P.j(Ub, 1, null), Jc = a;
                  eD(Jc, q(A) ? yc : 1);
                  XC(Jc);
                  Jc.moveTo(lc - 1, jd);
                  Jc.lineTo(md + 1, ce);
                  YC(Jc);
                  Lb += 1;
                } else {
                  var Xb = D(Ic);
                  if (Xb) {
                    var zc = Xb;
                    if (T(zc)) {
                      var Ee = x(zc), Qf = z(zc), Oh = Ee, de = O(Ee), Ic = Qf, xc = Oh, va = de
                    } else {
                      var $b = E(zc), Vb = P.j($b, 0, null), Ed = P.j($b, 1, null), Fe = qB(e, Vb), Ge = P.j(Fe, 0, null);
                      P.j(Fe, 1, null);
                      var nd = zD(f, Ge, h), He = P.j(nd, 0, null), Wc = P.j(nd, 1, null), Ma = a;
                      eD(Ma, q(A) ? Ed : 1);
                      XC(Ma);
                      Ma.moveTo(lc - 1, jd);
                      Ma.lineTo(He + 1, Wc);
                      YC(Ma);
                      Ic = H(zc);
                      xc = null;
                      va = 0;
                    }
                    Lb = 0;
                  } else {
                    break;
                  }
                }
              }
              K = H(Tb);
              da = null;
              ea = 0;
            }
            J = 0;
          } else {
            break;
          }
        }
      }
      I += 1;
    } else {
      var Ie = D(y);
      if (Ie) {
        var pb = Ie;
        if (T(pb)) {
          var ac = x(pb), Rf = z(pb), Kg = ac, Sf = O(ac), y = Rf, C = Kg, G = Sf
        } else {
          for (var mf = E(pb), nf = D(bg.h(q(w) ? new U(null, 1, 5, V, [Uj], null) : null, new U(null, 2, 5, V, [Mp, qp], null))), ee = null, od = 0, pd = 0;;) {
            if (pd < od) {
              var Xc = ee.D(null, pd), Ob = gh.h(c, new U(null, 2, 5, V, [Y, mf], null)), of = Gn.g(dk.g(Ob)), qd = function() {
                switch(Xc instanceof W ? Xc.$ : null) {
                  case "inactive":
                    return S.j(ge, of, r);
                  case "active-predicted":
                    return kj(of, s);
                  case "active":
                    return kj(of, r);
                  default:
                    throw Error("No matching clause: " + u.g(Xc));;
                }
              }(), Lg = zD(d, mf, h), Mg = P.j(Lg, 0, null), pf = P.j(Lg, 1, null);
              dD(a, function() {
                var a = Xc;
                return $.g ? $.g(a) : $.call(null, a);
              }());
              for (var Je = D(qd), Fd = null, Yc = 0, rd = 0;;) {
                if (rd < Yc) {
                  var Gd = Fd.D(null, rd), Ke = P.j(Gd, 0, null), Tf = P.j(Gd, 1, null), Zc = qB(e, Ke), Ph = P.j(Zc, 0, null);
                  P.j(Zc, 1, null);
                  var qf = zD(f, Ph, h), Nk = P.j(qf, 0, null), Ok = P.j(qf, 1, null), Le = a;
                  eD(Le, q(A) ? Tf : 1);
                  XC(Le);
                  Le.moveTo(Mg - 1, pf);
                  Le.lineTo(Nk + 1, Ok);
                  YC(Le);
                  rd += 1;
                } else {
                  var Ng = D(Je);
                  if (Ng) {
                    var Me = Ng;
                    if (T(Me)) {
                      var rf = x(Me), sj = z(Me), sf = rf, tr = O(rf), Je = sj, Fd = sf, Yc = tr
                    } else {
                      var ro = E(Me), so = P.j(ro, 0, null), ur = P.j(ro, 1, null), to = qB(e, so), Qh = P.j(to, 0, null);
                      P.j(to, 1, null);
                      var Pk = zD(f, Qh, h), Rh = P.j(Pk, 0, null), Sh = P.j(Pk, 1, null), Th = a;
                      eD(Th, q(A) ? ur : 1);
                      XC(Th);
                      Th.moveTo(Mg - 1, pf);
                      Th.lineTo(Rh + 1, Sh);
                      YC(Th);
                      Je = H(Me);
                      Fd = null;
                      Yc = 0;
                    }
                    rd = 0;
                  } else {
                    break;
                  }
                }
              }
              pd += 1;
            } else {
              var uo = D(nf);
              if (uo) {
                var Uh = uo;
                if (T(Uh)) {
                  var Qk = x(Uh), vo = z(Uh), vr = Qk, tj = O(Qk), nf = vo, ee = vr, od = tj
                } else {
                  var Vh = E(Uh), wr = gh.h(c, new U(null, 2, 5, V, [Y, mf], null)), Rk = Gn.g(dk.g(wr)), Wh = function() {
                    switch(Vh instanceof W ? Vh.$ : null) {
                      case "inactive":
                        return S.j(ge, Rk, r);
                      case "active-predicted":
                        return kj(Rk, s);
                      case "active":
                        return kj(Rk, r);
                      default:
                        throw Error("No matching clause: " + u.g(Vh));;
                    }
                  }(), Sk = zD(d, mf, h), Og = P.j(Sk, 0, null), Tk = P.j(Sk, 1, null);
                  dD(a, function() {
                    var a = Vh;
                    return $.g ? $.g(a) : $.call(null, a);
                  }());
                  for (var Uk = D(Wh), Vk = null, Wk = 0, Xh = 0;;) {
                    if (Xh < Wk) {
                      var wo = Vk.D(null, Xh), Xk = P.j(wo, 0, null), Yk = P.j(wo, 1, null), uj = qB(e, Xk), Yh = P.j(uj, 0, null);
                      P.j(uj, 1, null);
                      var Zk = zD(f, Yh, h), xo = P.j(Zk, 0, null), xr = P.j(Zk, 1, null), Zh = a;
                      eD(Zh, q(A) ? Yk : 1);
                      XC(Zh);
                      Zh.moveTo(Og - 1, Tk);
                      Zh.lineTo(xo + 1, xr);
                      YC(Zh);
                      Xh += 1;
                    } else {
                      var $k = D(Uk);
                      if ($k) {
                        var $h = $k;
                        if (T($h)) {
                          var yo = x($h), ai = z($h), zo = yo, bi = O(yo), Uk = ai, Vk = zo, Wk = bi
                        } else {
                          var al = E($h), yr = P.j(al, 0, null), zr = P.j(al, 1, null), Ao = qB(e, yr), Bo = P.j(Ao, 0, null);
                          P.j(Ao, 1, null);
                          var bl = zD(f, Bo, h), Ar = P.j(bl, 0, null), Br = P.j(bl, 1, null), Pg = a;
                          eD(Pg, q(A) ? zr : 1);
                          XC(Pg);
                          Pg.moveTo(Og - 1, Tk);
                          Pg.lineTo(Ar + 1, Br);
                          YC(Pg);
                          Uk = H($h);
                          Vk = null;
                          Wk = 0;
                        }
                        Xh = 0;
                      } else {
                        break;
                      }
                    }
                  }
                  nf = H(Uh);
                  ee = null;
                  od = 0;
                }
                pd = 0;
              } else {
                break;
              }
            }
          }
          y = H(pb);
          C = null;
          G = 0;
        }
        I = 0;
      } else {
        break;
      }
    }
  }
  a.restore();
}
function LD(a, b, c) {
  return Sj(function(a) {
    var e = P.j(a, 0, null);
    a = P.j(a, 1, null);
    return new U(null, 2, 5, V, [a >= c ? Gn : Mm, q(b.g ? b.g(e) : b.call(null, e)) ? Mp : Uj], null);
  }, a);
}
function MD(a, b, c) {
  if (a ? a.Yb : a) {
    return a.Yb(a, b, c);
  }
  var d;
  d = MD[n(null == a ? null : a)];
  if (!d && (d = MD._, !d)) {
    throw t("PCellsSegmentsLayout.seg-xy", a);
  }
  return d.call(null, a, b, c);
}
function ND(a, b) {
  if (a ? a.Dc : a) {
    return a.Dc(a, b);
  }
  var c;
  c = ND[n(null == a ? null : a)];
  if (!c && (c = ND._, !c)) {
    throw t("PCellsSegmentsLayout.cell-xy", a);
  }
  return c.call(null, a, b);
}
var PD = function OD(b, c, d, e, f, g) {
  var h = O(b), l = Cg.h(qg.h(O, io), b), m = Cg.h(rg.h(bf, 1), l), r = S.h(Ze, m), s = f + gh.h(g, new U(null, 2, 5, V, [Cq, zk], null)), w = gh.h(g, new U(null, 2, 5, V, [Cq, st], null)), A = .5 * w, y = gh.h(g, new U(null, 2, 5, V, [Cq, zt], null)), C = gh.h(g, new U(null, 2, 5, V, [Cq, an], null)), G = gh.h(g, new U(null, 2, 5, V, [Cq, Yj], null)), I = .5 * G, N = .95 * window.innerHeight, K = window.pageYOffset + 2 * y, da = zD(c, d, e), ea = P.j(da, 0, null), J = P.j(da, 1, null);
  "undefined" === typeof hD && (hD = function(b, c, d, e, f, g, h, l, r, m, s, w, J, A, y, C, G, I, K, N, da, ea, Gc, kc) {
    this.cells = b;
    this.ae = c;
    this.ge = d;
    this.Fe = e;
    this.Ge = f;
    this.vd = g;
    this.tf = h;
    this.ce = l;
    this.cf = r;
    this.Zc = m;
    this.ne = s;
    this.oe = w;
    this.sf = J;
    this.Ie = A;
    this.Af = y;
    this.df = C;
    this.Ld = G;
    this.Yc = I;
    this.$d = K;
    this.he = N;
    this.hf = da;
    this.de = ea;
    this.wd = Gc;
    this.Qe = kc;
    this.G = 0;
    this.q = 393216;
  }, hD.Ca = !0, hD.Ba = "comportexviz.viz-canvas/t18384", hD.Ga = function() {
    return function(b, c) {
      return Bc(c, "comportexviz.viz-canvas/t18384");
    };
  }(h, l, m, r, s, w, A, y, C, G, I, N, K, da, ea, J), hD.prototype.Yb = function() {
    return function(b, c, d) {
      b = S.j(Ze, d, Dg.h(c, this.ae)) / this.$d;
      return new U(null, 2, 5, V, [this.he + this.ge, this.de + 20 + b * this.ce], null);
    };
  }(h, l, m, r, s, w, A, y, C, G, I, N, K, da, ea, J), hD.prototype.Dc = function() {
    return function(b, c) {
      var d = MD(this, c, 0);
      P.j(d, 0, null);
      d = P.j(d, 1, null);
      return new U(null, 2, 5, V, [this.wd, d], null);
    };
  }(h, l, m, r, s, w, A, y, C, G, I, N, K, da, ea, J), hD.prototype.Ec = function() {
    return function(b, c, d) {
      d = ND(this, d);
      b = P.j(d, 0, null);
      d = P.j(d, 1, null);
      XC(c);
      c.moveTo(this.Yc + this.Ld + 1, this.Zc);
      var e = this.Yc, f = (b - e) / 3;
      gD.Aa(c, b - f, this.Zc, e + f, d, b, d);
      YC(c);
      return c;
    };
  }(h, l, m, r, s, w, A, y, C, G, I, N, K, da, ea, J), hD.prototype.yb = function() {
    return function(b, c, d, e) {
      var f = ND(this, d);
      b = P.j(f, 0, null);
      f = P.j(f, 1, null);
      e = MD(this, d, e);
      d = P.j(e, 0, null);
      e = P.j(e, 1, null);
      XC(c);
      c.moveTo(d, e);
      c.lineTo(b + this.vd, f);
      YC(c);
      return c;
    };
  }(h, l, m, r, s, w, A, y, C, G, I, N, K, da, ea, J), hD.prototype.I = function() {
    return function() {
      return this.Qe;
    };
  }(h, l, m, r, s, w, A, y, C, G, I, N, K, da, ea, J), hD.prototype.J = function() {
    return function(b, c) {
      return new hD(this.cells, this.ae, this.ge, this.Fe, this.Ge, this.vd, this.tf, this.ce, this.cf, this.Zc, this.ne, this.oe, this.sf, this.Ie, this.Af, this.df, this.Ld, this.Yc, this.$d, this.he, this.hf, this.de, this.wd, c);
    };
  }(h, l, m, r, s, w, A, y, C, G, I, N, K, da, ea, J));
  return new hD(b, m, I, w, c, y, G, N, h, J, OD, d, C, e, da, l, A, ea, r, s, g, K, f, null);
};
function QD(a, b, c, d, e, f, g, h) {
  a.save();
  var l = gh.h(c, new U(null, 2, 5, V, [Y, e], null)), m = mp.g(c), r = po.g(mp.g(b)), s = Up.g(m), w = Cp.g(c), A = Sp.g(c), y = en.g(b), C = gh.h(b, new U(null, 2, 5, V, [oo, e], null)), G = gh.h(b, new U(null, 2, 5, V, [nr, e], null)), I = Cp.g(b), N = ar.g(l), K = PD(N, d, e, f, g, h), da = gh.h(h, new U(null, 2, 5, V, [Cq, st], null)), ea = gh.h(h, new U(null, 2, 5, V, [Cq, zt], null)), J = gh.h(h, new U(null, 2, 5, V, [Cq, an], null)), za = gh.h(h, new U(null, 2, 5, V, [Cq, Yj], null)), ga = 
  .5 * za;
  a.lineWidth = da;
  dD(a, Dn.g($));
  for (var oa = D(sg(Ah, N)), wa = null, Ha = 0, Ja = 0;;) {
    if (Ja < Ha) {
      var Sa = wa.D(null, Ja), Ka = P.j(Sa, 0, null), zb = P.j(Sa, 1, null), Ea = we(zb) ? S.h(vg, zb) : zb, ab = Q.h(Ea, io);
      K.Ec(null, a, Ka);
      for (var sb = D(zj.g(O(ab))), Ua = null, qa = 0, Ib = 0;;) {
        if (Ib < qa) {
          var Jb = Ua.D(null, Ib);
          K.yb(null, a, Ka, Jb);
          Ib += 1;
        } else {
          var eb = D(sb);
          if (eb) {
            var tb = eb;
            if (T(tb)) {
              var fa = x(tb), bc = z(tb), ad = fa, cc = O(fa), sb = bc, Ua = ad, qa = cc
            } else {
              var Gc = E(tb);
              K.yb(null, a, Ka, Gc);
              sb = H(tb);
              Ua = null;
              qa = 0;
            }
            Ib = 0;
          } else {
            break;
          }
        }
      }
      Ja += 1;
    } else {
      var kc = D(oa);
      if (kc) {
        var Kb = kc;
        if (T(Kb)) {
          var Sb = x(Kb), Sc = z(Kb), Hg = Sb, Ig = O(Sb), oa = Sc, wa = Hg, Ha = Ig
        } else {
          var id = E(Kb), gf = P.j(id, 0, null), hf = P.j(id, 1, null), Jg = we(hf) ? S.h(vg, hf) : hf, Tc = Q.h(Jg, io);
          K.Ec(null, a, gf);
          for (var Eb = D(zj.g(O(Tc))), wc = null, Tb = 0, Uc = 0;;) {
            if (Uc < Tb) {
              var jf = wc.D(null, Uc);
              K.yb(null, a, gf, jf);
              Uc += 1;
            } else {
              var kf = D(Eb);
              if (kf) {
                var Hc = kf;
                if (T(Hc)) {
                  var be = x(Hc), Nh = z(Hc), lf = be, Vc = O(be), Eb = Nh, wc = lf, Tb = Vc
                } else {
                  var Nb = E(Hc);
                  K.yb(null, a, gf, Nb);
                  Eb = H(Hc);
                  wc = null;
                  Tb = 0;
                }
                Uc = 0;
              } else {
                break;
              }
            }
          }
          oa = H(Kb);
          wa = null;
          Ha = 0;
        }
        Ja = 0;
      } else {
        break;
      }
    }
  }
  for (var lc = D(sg(Ah, N)), jd = null, Ic = 0, xc = 0;;) {
    if (xc < Ic) {
      var va = jd.D(null, xc), Lb = P.j(va, 0, null), kd = P.j(va, 1, null), De = we(kd) ? S.h(vg, kd) : kd, yc = Q.h(De, io), ld = K.Dc(null, Lb), Zb = P.j(ld, 0, null), Ub = P.j(ld, 1, null), md = new U(null, 2, 5, V, [e, Lb], null), ce = function() {
        var a = md;
        return I.g ? I.g(a) : I.call(null, a);
      }(), Jc = function() {
        var a = md;
        return A.g ? A.g(a) : A.call(null, a);
      }(), Xb = ze(y, md), zc = q(Xb) ? Rb(Xb) : null, Ee = eh.h(function(a, b, c, d, e, f, g, h, l, r, m, s, w, J, A, y, C, G, I, K, ga, sf) {
        return function(a) {
          return LD(lo.g(a), sf, ga);
        };
      }(lc, jd, Ic, xc, ld, Zb, Ub, md, ce, Jc, Xb, zc, va, Lb, kd, De, yc, l, m, r, s, w, A, y, C, G, I, N, K, da, ea, J, za, ga), yc), Qf = function(a, b, c, d, e, f, g, h, l, r, m, s, w, J, A, y, C, G, I, K, ga) {
        return function(a) {
          var b = new U(null, 2, 5, V, [Gn, Mp], null);
          a = a.g ? a.g(b) : a.call(null, b);
          return O(a) >= ga;
        };
      }(lc, jd, Ic, xc, ld, Zb, Ub, md, ce, Jc, Xb, zc, Ee, va, Lb, kd, De, yc, l, m, r, s, w, A, y, C, G, I, N, K, da, ea, J, za, ga), Oh = q(function() {
        var a = ce;
        return q(a) ? Jc : a;
      }()) ? qp : q(Jc) ? Rq : q(ce) ? Mp : Uj;
      if (q(ce)) {
        var de = a;
        dD(de, Mp.g($));
        de.lineWidth = 2;
        K.Ec(null, a, Lb);
      }
      if (q(Xb)) {
        var $b = a;
        cD($b, Xm.g($));
        XC($b);
        $b.arc(Zb, Ub, ea + 8, 0, 2 * Math.PI, !0);
        $b.fill();
      }
      var Vb = a;
      cD(Vb, function() {
        var a = Oh;
        return $.g ? $.g(a) : $.call(null, a);
      }());
      dD(Vb, "black");
      Vb.lineWidth = 1;
      XC(Vb);
      Vb.arc(Zb, Ub, ea, 0, 2 * Math.PI, !0);
      YC(Vb);
      Vb.fill();
      cD(a, "black");
      bD(a, new p(null, 3, [Bt, "cell " + u.g(Lb) + u.g(q(Xb) ? "   (learning on " + u.g(q(zc) ? "segment " + u.g(zc) : "new segment") + ")" : null), Lq, Zb, Vj, Ub - ea - 5], null));
      for (var Ed = D(sg(Ah, Ee)), Fe = null, Ge = 0, nd = 0;;) {
        if (nd < Ge) {
          var He = Fe.D(null, nd), Wc = P.j(He, 0, null), Ma = P.j(He, 1, null), Ie = K.Yb(null, Lb, Wc), pb = P.j(Ie, 0, null), ac = P.j(Ie, 1, null), Rf = O(function() {
            var a = new U(null, 2, 5, V, [Gn, Mp], null);
            return Ma.g ? Ma.g(a) : Ma.call(null, a);
          }()), Kg = Rf + O(function() {
            var a = new U(null, 2, 5, V, [Gn, Uj], null);
            return Ma.g ? Ma.g(a) : Ma.call(null, a);
          }()), Sf = O(function() {
            var a = new U(null, 2, 5, V, [Mm, Mp], null);
            return Ma.g ? Ma.g(a) : Ma.call(null, a);
          }()), mf = Sf + O(function() {
            var a = new U(null, 2, 5, V, [Mm, Uj], null);
            return Ma.g ? Ma.g(a) : Ma.call(null, a);
          }()), nf = function() {
            var a = Rf / r;
            return 1 > a ? a : 1;
          }(), ee = function() {
            var a = Xb;
            return q(a) ? B.h(Wc, zc) : a;
          }(), od = DD(pb, ac, za, J), pd = DD(pb, ac, za + 8, J + 8);
          if (q(ee)) {
            var Xc = a;
            cD(Xc, Xm.g($));
            aD(Xc, pd);
          }
          var Ob = a;
          eD(Ob, 1);
          dD(Ob, "black");
          Ob.lineWidth = 1;
          $C(Ob, od);
          cD(Ob, "white");
          aD(Ob, od);
          eD(Ob, nf);
          cD(Ob, Mp.g($));
          aD(Ob, od);
          eD(Ob, 1);
          if (Qf(Ma)) {
            var of = a;
            dD(of, Mp.g($));
            of.lineWidth = 2;
            K.yb(null, a, Lb, Wc);
          }
          cD(a, "black");
          bD(a, new p(null, 3, [Bt, "[" + u.g(Wc) + "],  active " + u.g(Rf) + " / " + u.g(Kg) + " conn. (" + u.g(Sf) + " / " + u.g(mf) + " disconn.)", Lq, pb + 5 + ga, Vj, ac], null));
          a.lineWidth = 1;
          var qd = gh.h(h, new U(null, 2, 5, V, [Qm, gt], null)), Lg = gh.h(h, new U(null, 2, 5, V, [Qm, Mp], null)), Mg = gh.h(h, new U(null, 2, 5, V, [Qm, Uj], null)), pf = gh.h(h, new U(null, 2, 5, V, [Qm, Mm], null)), Je = gh.h(h, new U(null, 2, 5, V, [Qm, Hp], null));
          if (q(function() {
            var a = B.h(Je, no);
            return a ? a : (a = B.h(Je, $o)) ? ee : a;
          }())) {
            for (var Fd = D(bg.h(q(Mg) ? new U(null, 1, 5, V, [Uj], null) : null, q(Lg) ? new U(null, 1, 5, V, [Mp], null) : null)), Yc = null, rd = 0, Gd = 0;;) {
              if (Gd < rd) {
                for (var Ke = Yc.D(null, Gd), Tf = D(bg.h(q(pf) ? new U(null, 1, 5, V, [Mm], null) : null, new U(null, 1, 5, V, [Gn], null))), Zc = null, Ph = 0, qf = 0;;) {
                  if (qf < Ph) {
                    var Nk = Zc.D(null, qf), Ok = function() {
                      var a = new U(null, 2, 5, V, [Nk, Ke], null);
                      return Ma.g ? Ma.g(a) : Ma.call(null, a);
                    }();
                    dD(a, function() {
                      var a = Ke;
                      return $.g ? $.g(a) : $.call(null, a);
                    }());
                    for (var Le = D(Ok), Ng = null, Me = 0, rf = 0;;) {
                      if (rf < Me) {
                        var sj = Ng.D(null, rf), sf = P.j(sj, 0, null), tr = P.j(sf, 0, null);
                        P.j(sf, 1, null);
                        var ro = P.j(sj, 1, null), so = zD(d, tr, f + 1), ur = P.j(so, 0, null), to = P.j(so, 1, null), Qh = a;
                        eD(Qh, q(qd) ? ro : 1);
                        XC(Qh);
                        Qh.moveTo(pb, ac);
                        Qh.lineTo(ur + 1, to);
                        YC(Qh);
                        rf += 1;
                      } else {
                        var Pk = D(Le);
                        if (Pk) {
                          var Rh = Pk;
                          if (T(Rh)) {
                            var Sh = x(Rh), Th = z(Rh), uo = Sh, Uh = O(Sh), Le = Th, Ng = uo, Me = Uh
                          } else {
                            var Qk = E(Rh), vo = P.j(Qk, 0, null), vr = P.j(vo, 0, null);
                            P.j(vo, 1, null);
                            var tj = P.j(Qk, 1, null), Vh = zD(d, vr, f + 1), wr = P.j(Vh, 0, null), Rk = P.j(Vh, 1, null), Wh = a;
                            eD(Wh, q(qd) ? tj : 1);
                            XC(Wh);
                            Wh.moveTo(pb, ac);
                            Wh.lineTo(wr + 1, Rk);
                            YC(Wh);
                            Le = H(Rh);
                            Ng = null;
                            Me = 0;
                          }
                          rf = 0;
                        } else {
                          break;
                        }
                      }
                    }
                    eD(a, 1);
                    qf += 1;
                  } else {
                    var Sk = D(Tf);
                    if (Sk) {
                      var Og = Sk;
                      if (T(Og)) {
                        var Tk = x(Og), Uk = z(Og), Vk = Tk, Wk = O(Tk), Tf = Uk, Zc = Vk, Ph = Wk
                      } else {
                        var Xh = E(Og), wo = function() {
                          var a = new U(null, 2, 5, V, [Xh, Ke], null);
                          return Ma.g ? Ma.g(a) : Ma.call(null, a);
                        }();
                        dD(a, function() {
                          var a = Ke;
                          return $.g ? $.g(a) : $.call(null, a);
                        }());
                        for (var Xk = D(wo), Yk = null, uj = 0, Yh = 0;;) {
                          if (Yh < uj) {
                            var Zk = Yk.D(null, Yh), xo = P.j(Zk, 0, null), xr = P.j(xo, 0, null);
                            P.j(xo, 1, null);
                            var Zh = P.j(Zk, 1, null), $k = zD(d, xr, f + 1), $h = P.j($k, 0, null), yo = P.j($k, 1, null), ai = a;
                            eD(ai, q(qd) ? Zh : 1);
                            XC(ai);
                            ai.moveTo(pb, ac);
                            ai.lineTo($h + 1, yo);
                            YC(ai);
                            Yh += 1;
                          } else {
                            var zo = D(Xk);
                            if (zo) {
                              var bi = zo;
                              if (T(bi)) {
                                var al = x(bi), yr = z(bi), zr = al, Ao = O(al), Xk = yr, Yk = zr, uj = Ao
                              } else {
                                var Bo = E(bi), bl = P.j(Bo, 0, null), Ar = P.j(bl, 0, null);
                                P.j(bl, 1, null);
                                var Br = P.j(Bo, 1, null), Pg = zD(d, Ar, f + 1), YE = P.j(Pg, 0, null), bF = P.j(Pg, 1, null), cl = a;
                                eD(cl, q(qd) ? Br : 1);
                                XC(cl);
                                cl.moveTo(pb, ac);
                                cl.lineTo(YE + 1, bF);
                                YC(cl);
                                Xk = H(bi);
                                Yk = null;
                                uj = 0;
                              }
                              Yh = 0;
                            } else {
                              break;
                            }
                          }
                        }
                        eD(a, 1);
                        Tf = H(Og);
                        Zc = null;
                        Ph = 0;
                      }
                      qf = 0;
                    } else {
                      break;
                    }
                  }
                }
                Gd += 1;
              } else {
                var fx = D(Fd);
                if (fx) {
                  var dl = fx;
                  if (T(dl)) {
                    var gx = x(dl), cF = z(dl), dF = gx, eF = O(gx), Fd = cF, Yc = dF, rd = eF
                  } else {
                    for (var Eo = E(dl), Cr = D(bg.h(q(pf) ? new U(null, 1, 5, V, [Mm], null) : null, new U(null, 1, 5, V, [Gn], null))), Dr = null, Er = 0, el = 0;;) {
                      if (el < Er) {
                        var fF = Dr.D(null, el), gF = function() {
                          var a = new U(null, 2, 5, V, [fF, Eo], null);
                          return Ma.g ? Ma.g(a) : Ma.call(null, a);
                        }();
                        dD(a, function() {
                          var a = Eo;
                          return $.g ? $.g(a) : $.call(null, a);
                        }());
                        for (var Fr = D(gF), Gr = null, Hr = 0, fl = 0;;) {
                          if (fl < Hr) {
                            var hx = Gr.D(null, fl), ix = P.j(hx, 0, null), hF = P.j(ix, 0, null);
                            P.j(ix, 1, null);
                            var iF = P.j(hx, 1, null), jx = zD(d, hF, f + 1), jF = P.j(jx, 0, null), kF = P.j(jx, 1, null), gl = a;
                            eD(gl, q(qd) ? iF : 1);
                            XC(gl);
                            gl.moveTo(pb, ac);
                            gl.lineTo(jF + 1, kF);
                            YC(gl);
                            fl += 1;
                          } else {
                            var kx = D(Fr);
                            if (kx) {
                              var hl = kx;
                              if (T(hl)) {
                                var lx = x(hl), lF = z(hl), mF = lx, nF = O(lx), Fr = lF, Gr = mF, Hr = nF
                              } else {
                                var mx = E(hl), nx = P.j(mx, 0, null), oF = P.j(nx, 0, null);
                                P.j(nx, 1, null);
                                var pF = P.j(mx, 1, null), ox = zD(d, oF, f + 1), qF = P.j(ox, 0, null), rF = P.j(ox, 1, null), il = a;
                                eD(il, q(qd) ? pF : 1);
                                XC(il);
                                il.moveTo(pb, ac);
                                il.lineTo(qF + 1, rF);
                                YC(il);
                                Fr = H(hl);
                                Gr = null;
                                Hr = 0;
                              }
                              fl = 0;
                            } else {
                              break;
                            }
                          }
                        }
                        eD(a, 1);
                        el += 1;
                      } else {
                        var px = D(Cr);
                        if (px) {
                          var jl = px;
                          if (T(jl)) {
                            var qx = x(jl), sF = z(jl), tF = qx, uF = O(qx), Cr = sF, Dr = tF, Er = uF
                          } else {
                            var vF = E(jl), wF = function() {
                              var a = new U(null, 2, 5, V, [vF, Eo], null);
                              return Ma.g ? Ma.g(a) : Ma.call(null, a);
                            }();
                            dD(a, function() {
                              var a = Eo;
                              return $.g ? $.g(a) : $.call(null, a);
                            }());
                            for (var Ir = D(wF), Jr = null, Kr = 0, kl = 0;;) {
                              if (kl < Kr) {
                                var rx = Jr.D(null, kl), sx = P.j(rx, 0, null), xF = P.j(sx, 0, null);
                                P.j(sx, 1, null);
                                var yF = P.j(rx, 1, null), tx = zD(d, xF, f + 1), zF = P.j(tx, 0, null), AF = P.j(tx, 1, null), ll = a;
                                eD(ll, q(qd) ? yF : 1);
                                XC(ll);
                                ll.moveTo(pb, ac);
                                ll.lineTo(zF + 1, AF);
                                YC(ll);
                                kl += 1;
                              } else {
                                var ux = D(Ir);
                                if (ux) {
                                  var ml = ux;
                                  if (T(ml)) {
                                    var vx = x(ml), BF = z(ml), CF = vx, DF = O(vx), Ir = BF, Jr = CF, Kr = DF
                                  } else {
                                    var wx = E(ml), xx = P.j(wx, 0, null), EF = P.j(xx, 0, null);
                                    P.j(xx, 1, null);
                                    var FF = P.j(wx, 1, null), yx = zD(d, EF, f + 1), GF = P.j(yx, 0, null), HF = P.j(yx, 1, null), nl = a;
                                    eD(nl, q(qd) ? FF : 1);
                                    XC(nl);
                                    nl.moveTo(pb, ac);
                                    nl.lineTo(GF + 1, HF);
                                    YC(nl);
                                    Ir = H(ml);
                                    Jr = null;
                                    Kr = 0;
                                  }
                                  kl = 0;
                                } else {
                                  break;
                                }
                              }
                            }
                            eD(a, 1);
                            Cr = H(jl);
                            Dr = null;
                            Er = 0;
                          }
                          el = 0;
                        } else {
                          break;
                        }
                      }
                    }
                    Fd = H(dl);
                    Yc = null;
                    rd = 0;
                  }
                  Gd = 0;
                } else {
                  break;
                }
              }
            }
          }
          nd += 1;
        } else {
          var zx = D(Ed);
          if (zx) {
            var ol = zx;
            if (T(ol)) {
              var Ax = x(ol), IF = z(ol), JF = Ax, KF = O(Ax), Ed = IF, Fe = JF, Ge = KF
            } else {
              var Bx = E(ol), Fo = P.j(Bx, 0, null), vb = P.j(Bx, 1, null), Cx = K.Yb(null, Lb, Fo), Ne = P.j(Cx, 0, null), Oe = P.j(Cx, 1, null), Lr = O(function() {
                var a = new U(null, 2, 5, V, [Gn, Mp], null);
                return vb.g ? vb.g(a) : vb.call(null, a);
              }()), LF = Lr + O(function() {
                var a = new U(null, 2, 5, V, [Gn, Uj], null);
                return vb.g ? vb.g(a) : vb.call(null, a);
              }()), Dx = O(function() {
                var a = new U(null, 2, 5, V, [Mm, Mp], null);
                return vb.g ? vb.g(a) : vb.call(null, a);
              }()), MF = Dx + O(function() {
                var a = new U(null, 2, 5, V, [Mm, Uj], null);
                return vb.g ? vb.g(a) : vb.call(null, a);
              }()), NF = function() {
                var a = Lr / r;
                return 1 > a ? a : 1;
              }(), Ex = function() {
                var a = Xb;
                return q(a) ? B.h(Fo, zc) : a;
              }(), Mr = DD(Ne, Oe, za, J), OF = DD(Ne, Oe, za + 8, J + 8);
              if (q(Ex)) {
                var Fx = a;
                cD(Fx, Xm.g($));
                aD(Fx, OF);
              }
              var tf = a;
              eD(tf, 1);
              dD(tf, "black");
              tf.lineWidth = 1;
              $C(tf, Mr);
              cD(tf, "white");
              aD(tf, Mr);
              eD(tf, NF);
              cD(tf, Mp.g($));
              aD(tf, Mr);
              eD(tf, 1);
              if (Qf(vb)) {
                var Gx = a;
                dD(Gx, Mp.g($));
                Gx.lineWidth = 2;
                K.yb(null, a, Lb, Fo);
              }
              cD(a, "black");
              bD(a, new p(null, 3, [Bt, "[" + u.g(Fo) + "],  active " + u.g(Lr) + " / " + u.g(LF) + " conn. (" + u.g(Dx) + " / " + u.g(MF) + " disconn.)", Lq, Ne + 5 + ga, Vj, Oe], null));
              a.lineWidth = 1;
              var Qg = gh.h(h, new U(null, 2, 5, V, [Qm, gt], null)), PF = gh.h(h, new U(null, 2, 5, V, [Qm, Mp], null)), QF = gh.h(h, new U(null, 2, 5, V, [Qm, Uj], null)), Hx = gh.h(h, new U(null, 2, 5, V, [Qm, Mm], null)), Ix = gh.h(h, new U(null, 2, 5, V, [Qm, Hp], null));
              if (q(function() {
                var a = B.h(Ix, no);
                return a ? a : (a = B.h(Ix, $o)) ? Ex : a;
              }())) {
                for (var Nr = D(bg.h(q(QF) ? new U(null, 1, 5, V, [Uj], null) : null, q(PF) ? new U(null, 1, 5, V, [Mp], null) : null)), Or = null, Pr = 0, pl = 0;;) {
                  if (pl < Pr) {
                    for (var Go = Or.D(null, pl), Qr = D(bg.h(q(Hx) ? new U(null, 1, 5, V, [Mm], null) : null, new U(null, 1, 5, V, [Gn], null))), Rr = null, Sr = 0, ql = 0;;) {
                      if (ql < Sr) {
                        var RF = Rr.D(null, ql), SF = function() {
                          var a = new U(null, 2, 5, V, [RF, Go], null);
                          return vb.g ? vb.g(a) : vb.call(null, a);
                        }();
                        dD(a, function() {
                          var a = Go;
                          return $.g ? $.g(a) : $.call(null, a);
                        }());
                        for (var Tr = D(SF), Ur = null, Vr = 0, rl = 0;;) {
                          if (rl < Vr) {
                            var Jx = Ur.D(null, rl), Kx = P.j(Jx, 0, null), TF = P.j(Kx, 0, null);
                            P.j(Kx, 1, null);
                            var UF = P.j(Jx, 1, null), Lx = zD(d, TF, f + 1), VF = P.j(Lx, 0, null), WF = P.j(Lx, 1, null), sl = a;
                            eD(sl, q(Qg) ? UF : 1);
                            XC(sl);
                            sl.moveTo(Ne, Oe);
                            sl.lineTo(VF + 1, WF);
                            YC(sl);
                            rl += 1;
                          } else {
                            var Mx = D(Tr);
                            if (Mx) {
                              var tl = Mx;
                              if (T(tl)) {
                                var Nx = x(tl), XF = z(tl), YF = Nx, ZF = O(Nx), Tr = XF, Ur = YF, Vr = ZF
                              } else {
                                var Ox = E(tl), Px = P.j(Ox, 0, null), $F = P.j(Px, 0, null);
                                P.j(Px, 1, null);
                                var aG = P.j(Ox, 1, null), Qx = zD(d, $F, f + 1), bG = P.j(Qx, 0, null), cG = P.j(Qx, 1, null), ul = a;
                                eD(ul, q(Qg) ? aG : 1);
                                XC(ul);
                                ul.moveTo(Ne, Oe);
                                ul.lineTo(bG + 1, cG);
                                YC(ul);
                                Tr = H(tl);
                                Ur = null;
                                Vr = 0;
                              }
                              rl = 0;
                            } else {
                              break;
                            }
                          }
                        }
                        eD(a, 1);
                        ql += 1;
                      } else {
                        var Rx = D(Qr);
                        if (Rx) {
                          var vl = Rx;
                          if (T(vl)) {
                            var Sx = x(vl), dG = z(vl), eG = Sx, fG = O(Sx), Qr = dG, Rr = eG, Sr = fG
                          } else {
                            var gG = E(vl), hG = function() {
                              var a = new U(null, 2, 5, V, [gG, Go], null);
                              return vb.g ? vb.g(a) : vb.call(null, a);
                            }();
                            dD(a, function() {
                              var a = Go;
                              return $.g ? $.g(a) : $.call(null, a);
                            }());
                            for (var Wr = D(hG), Xr = null, Yr = 0, wl = 0;;) {
                              if (wl < Yr) {
                                var Tx = Xr.D(null, wl), Ux = P.j(Tx, 0, null), iG = P.j(Ux, 0, null);
                                P.j(Ux, 1, null);
                                var jG = P.j(Tx, 1, null), Vx = zD(d, iG, f + 1), kG = P.j(Vx, 0, null), lG = P.j(Vx, 1, null), xl = a;
                                eD(xl, q(Qg) ? jG : 1);
                                XC(xl);
                                xl.moveTo(Ne, Oe);
                                xl.lineTo(kG + 1, lG);
                                YC(xl);
                                wl += 1;
                              } else {
                                var Wx = D(Wr);
                                if (Wx) {
                                  var yl = Wx;
                                  if (T(yl)) {
                                    var Xx = x(yl), mG = z(yl), nG = Xx, oG = O(Xx), Wr = mG, Xr = nG, Yr = oG
                                  } else {
                                    var Yx = E(yl), Zx = P.j(Yx, 0, null), pG = P.j(Zx, 0, null);
                                    P.j(Zx, 1, null);
                                    var qG = P.j(Yx, 1, null), $x = zD(d, pG, f + 1), rG = P.j($x, 0, null), sG = P.j($x, 1, null), zl = a;
                                    eD(zl, q(Qg) ? qG : 1);
                                    XC(zl);
                                    zl.moveTo(Ne, Oe);
                                    zl.lineTo(rG + 1, sG);
                                    YC(zl);
                                    Wr = H(yl);
                                    Xr = null;
                                    Yr = 0;
                                  }
                                  wl = 0;
                                } else {
                                  break;
                                }
                              }
                            }
                            eD(a, 1);
                            Qr = H(vl);
                            Rr = null;
                            Sr = 0;
                          }
                          ql = 0;
                        } else {
                          break;
                        }
                      }
                    }
                    pl += 1;
                  } else {
                    var ay = D(Nr);
                    if (ay) {
                      var Al = ay;
                      if (T(Al)) {
                        var by = x(Al), tG = z(Al), uG = by, vG = O(by), Nr = tG, Or = uG, Pr = vG
                      } else {
                        for (var Ho = E(Al), Zr = D(bg.h(q(Hx) ? new U(null, 1, 5, V, [Mm], null) : null, new U(null, 1, 5, V, [Gn], null))), $r = null, as = 0, Bl = 0;;) {
                          if (Bl < as) {
                            var wG = $r.D(null, Bl), xG = function() {
                              var a = new U(null, 2, 5, V, [wG, Ho], null);
                              return vb.g ? vb.g(a) : vb.call(null, a);
                            }();
                            dD(a, function() {
                              var a = Ho;
                              return $.g ? $.g(a) : $.call(null, a);
                            }());
                            for (var bs = D(xG), cs = null, ds = 0, Cl = 0;;) {
                              if (Cl < ds) {
                                var cy = cs.D(null, Cl), dy = P.j(cy, 0, null), yG = P.j(dy, 0, null);
                                P.j(dy, 1, null);
                                var zG = P.j(cy, 1, null), ey = zD(d, yG, f + 1), AG = P.j(ey, 0, null), BG = P.j(ey, 1, null), Dl = a;
                                eD(Dl, q(Qg) ? zG : 1);
                                XC(Dl);
                                Dl.moveTo(Ne, Oe);
                                Dl.lineTo(AG + 1, BG);
                                YC(Dl);
                                Cl += 1;
                              } else {
                                var fy = D(bs);
                                if (fy) {
                                  var El = fy;
                                  if (T(El)) {
                                    var gy = x(El), CG = z(El), DG = gy, EG = O(gy), bs = CG, cs = DG, ds = EG
                                  } else {
                                    var hy = E(El), iy = P.j(hy, 0, null), FG = P.j(iy, 0, null);
                                    P.j(iy, 1, null);
                                    var GG = P.j(hy, 1, null), jy = zD(d, FG, f + 1), HG = P.j(jy, 0, null), IG = P.j(jy, 1, null), Fl = a;
                                    eD(Fl, q(Qg) ? GG : 1);
                                    XC(Fl);
                                    Fl.moveTo(Ne, Oe);
                                    Fl.lineTo(HG + 1, IG);
                                    YC(Fl);
                                    bs = H(El);
                                    cs = null;
                                    ds = 0;
                                  }
                                  Cl = 0;
                                } else {
                                  break;
                                }
                              }
                            }
                            eD(a, 1);
                            Bl += 1;
                          } else {
                            var ky = D(Zr);
                            if (ky) {
                              var Gl = ky;
                              if (T(Gl)) {
                                var ly = x(Gl), JG = z(Gl), KG = ly, LG = O(ly), Zr = JG, $r = KG, as = LG
                              } else {
                                var MG = E(Gl), NG = function() {
                                  var a = new U(null, 2, 5, V, [MG, Ho], null);
                                  return vb.g ? vb.g(a) : vb.call(null, a);
                                }();
                                dD(a, function() {
                                  var a = Ho;
                                  return $.g ? $.g(a) : $.call(null, a);
                                }());
                                for (var es = D(NG), fs = null, gs = 0, Hl = 0;;) {
                                  if (Hl < gs) {
                                    var my = fs.D(null, Hl), ny = P.j(my, 0, null), OG = P.j(ny, 0, null);
                                    P.j(ny, 1, null);
                                    var PG = P.j(my, 1, null), oy = zD(d, OG, f + 1), QG = P.j(oy, 0, null), RG = P.j(oy, 1, null), Il = a;
                                    eD(Il, q(Qg) ? PG : 1);
                                    XC(Il);
                                    Il.moveTo(Ne, Oe);
                                    Il.lineTo(QG + 1, RG);
                                    YC(Il);
                                    Hl += 1;
                                  } else {
                                    var py = D(es);
                                    if (py) {
                                      var Jl = py;
                                      if (T(Jl)) {
                                        var qy = x(Jl), SG = z(Jl), TG = qy, UG = O(qy), es = SG, fs = TG, gs = UG
                                      } else {
                                        var ry = E(Jl), sy = P.j(ry, 0, null), VG = P.j(sy, 0, null);
                                        P.j(sy, 1, null);
                                        var WG = P.j(ry, 1, null), ty = zD(d, VG, f + 1), XG = P.j(ty, 0, null), YG = P.j(ty, 1, null), Kl = a;
                                        eD(Kl, q(Qg) ? WG : 1);
                                        XC(Kl);
                                        Kl.moveTo(Ne, Oe);
                                        Kl.lineTo(XG + 1, YG);
                                        YC(Kl);
                                        es = H(Jl);
                                        fs = null;
                                        gs = 0;
                                      }
                                      Hl = 0;
                                    } else {
                                      break;
                                    }
                                  }
                                }
                                eD(a, 1);
                                Zr = H(Gl);
                                $r = null;
                                as = 0;
                              }
                              Bl = 0;
                            } else {
                              break;
                            }
                          }
                        }
                        Nr = H(Al);
                        Or = null;
                        Pr = 0;
                      }
                      pl = 0;
                    } else {
                      break;
                    }
                  }
                }
              }
              Ed = H(ol);
              Fe = null;
              Ge = 0;
            }
            nd = 0;
          } else {
            break;
          }
        }
      }
      xc += 1;
    } else {
      var Io = D(lc);
      if (Io) {
        var ci = Io;
        if (T(ci)) {
          var uy = x(ci), ZG = z(ci), $G = uy, aH = O(uy), lc = ZG, jd = $G, Ic = aH
        } else {
          var Jo = E(ci), uf = P.j(Jo, 0, null), Ll = P.j(Jo, 1, null), hs = we(Ll) ? S.h(vg, Ll) : Ll, is = Q.h(hs, io), Ko = K.Dc(null, uf), Ml = P.j(Ko, 0, null), Nl = P.j(Ko, 1, null), Ol = new U(null, 2, 5, V, [e, uf], null), Pl = function() {
            var a = Ol;
            return I.g ? I.g(a) : I.call(null, a);
          }(), Lo = function() {
            var a = Ol;
            return A.g ? A.g(a) : A.call(null, a);
          }(), Rg = ze(y, Ol), vj = q(Rg) ? Rb(Rg) : null, vy = eh.h(function(a, b, c, d, e, f, g, h, l, r, m, s, w, J, A, y, C, G, I, K, ga, sf, N, za) {
            return function(a) {
              return LD(lo.g(a), za, N);
            };
          }(lc, jd, Ic, xc, Ko, Ml, Nl, Ol, Pl, Lo, Rg, vj, Jo, uf, Ll, hs, is, ci, Io, l, m, r, s, w, A, y, C, G, I, N, K, da, ea, J, za, ga), is), wy = function(a, b, c, d, e, f, g, h, l, r, m, s, w, J, A, y, C, G, I, K, ga, sf, N) {
            return function(a) {
              var b = new U(null, 2, 5, V, [Gn, Mp], null);
              a = a.g ? a.g(b) : a.call(null, b);
              return O(a) >= N;
            };
          }(lc, jd, Ic, xc, Ko, Ml, Nl, Ol, Pl, Lo, Rg, vj, vy, Jo, uf, Ll, hs, is, ci, Io, l, m, r, s, w, A, y, C, G, I, N, K, da, ea, J, za, ga), bH = q(function() {
            var a = Pl;
            return q(a) ? Lo : a;
          }()) ? qp : q(Lo) ? Rq : q(Pl) ? Mp : Uj;
          if (q(Pl)) {
            var xy = a;
            dD(xy, Mp.g($));
            xy.lineWidth = 2;
            K.Ec(null, a, uf);
          }
          if (q(Rg)) {
            var Mo = a;
            cD(Mo, Xm.g($));
            XC(Mo);
            Mo.arc(Ml, Nl, ea + 8, 0, 2 * Math.PI, !0);
            Mo.fill();
          }
          var di = a;
          cD(di, function() {
            var a = bH;
            return $.g ? $.g(a) : $.call(null, a);
          }());
          dD(di, "black");
          di.lineWidth = 1;
          XC(di);
          di.arc(Ml, Nl, ea, 0, 2 * Math.PI, !0);
          YC(di);
          di.fill();
          cD(a, "black");
          bD(a, new p(null, 3, [Bt, "cell " + u.g(uf) + u.g(q(Rg) ? "   (learning on " + u.g(q(vj) ? "segment " + u.g(vj) : "new segment") + ")" : null), Lq, Ml, Vj, Nl - ea - 5], null));
          for (var js = D(sg(Ah, vy)), ks = null, ls = 0, Ql = 0;;) {
            if (Ql < ls) {
              var yy = ks.D(null, Ql), No = P.j(yy, 0, null), wb = P.j(yy, 1, null), zy = K.Yb(null, uf, No), Pe = P.j(zy, 0, null), Qe = P.j(zy, 1, null), ms = O(function() {
                var a = new U(null, 2, 5, V, [Gn, Mp], null);
                return wb.g ? wb.g(a) : wb.call(null, a);
              }()), cH = ms + O(function() {
                var a = new U(null, 2, 5, V, [Gn, Uj], null);
                return wb.g ? wb.g(a) : wb.call(null, a);
              }()), Ay = O(function() {
                var a = new U(null, 2, 5, V, [Mm, Mp], null);
                return wb.g ? wb.g(a) : wb.call(null, a);
              }()), dH = Ay + O(function() {
                var a = new U(null, 2, 5, V, [Mm, Uj], null);
                return wb.g ? wb.g(a) : wb.call(null, a);
              }()), eH = function() {
                var a = ms / r;
                return 1 > a ? a : 1;
              }(), By = function() {
                var a = Rg;
                return q(a) ? B.h(No, vj) : a;
              }(), ns = DD(Pe, Qe, za, J), fH = DD(Pe, Qe, za + 8, J + 8);
              if (q(By)) {
                var Cy = a;
                cD(Cy, Xm.g($));
                aD(Cy, fH);
              }
              var vf = a;
              eD(vf, 1);
              dD(vf, "black");
              vf.lineWidth = 1;
              $C(vf, ns);
              cD(vf, "white");
              aD(vf, ns);
              eD(vf, eH);
              cD(vf, Mp.g($));
              aD(vf, ns);
              eD(vf, 1);
              if (wy(wb)) {
                var Dy = a;
                dD(Dy, Mp.g($));
                Dy.lineWidth = 2;
                K.yb(null, a, uf, No);
              }
              cD(a, "black");
              bD(a, new p(null, 3, [Bt, "[" + u.g(No) + "],  active " + u.g(ms) + " / " + u.g(cH) + " conn. (" + u.g(Ay) + " / " + u.g(dH) + " disconn.)", Lq, Pe + 5 + ga, Vj, Qe], null));
              a.lineWidth = 1;
              var Sg = gh.h(h, new U(null, 2, 5, V, [Qm, gt], null)), gH = gh.h(h, new U(null, 2, 5, V, [Qm, Mp], null)), hH = gh.h(h, new U(null, 2, 5, V, [Qm, Uj], null)), Ey = gh.h(h, new U(null, 2, 5, V, [Qm, Mm], null)), Fy = gh.h(h, new U(null, 2, 5, V, [Qm, Hp], null));
              if (q(function() {
                var a = B.h(Fy, no);
                return a ? a : (a = B.h(Fy, $o)) ? By : a;
              }())) {
                for (var os = D(bg.h(q(hH) ? new U(null, 1, 5, V, [Uj], null) : null, q(gH) ? new U(null, 1, 5, V, [Mp], null) : null)), ps = null, qs = 0, Rl = 0;;) {
                  if (Rl < qs) {
                    for (var Oo = ps.D(null, Rl), rs = D(bg.h(q(Ey) ? new U(null, 1, 5, V, [Mm], null) : null, new U(null, 1, 5, V, [Gn], null))), ss = null, ts = 0, Sl = 0;;) {
                      if (Sl < ts) {
                        var iH = ss.D(null, Sl), jH = function() {
                          var a = new U(null, 2, 5, V, [iH, Oo], null);
                          return wb.g ? wb.g(a) : wb.call(null, a);
                        }();
                        dD(a, function() {
                          var a = Oo;
                          return $.g ? $.g(a) : $.call(null, a);
                        }());
                        for (var us = D(jH), vs = null, ws = 0, Tl = 0;;) {
                          if (Tl < ws) {
                            var Gy = vs.D(null, Tl), Hy = P.j(Gy, 0, null), kH = P.j(Hy, 0, null);
                            P.j(Hy, 1, null);
                            var lH = P.j(Gy, 1, null), Iy = zD(d, kH, f + 1), mH = P.j(Iy, 0, null), nH = P.j(Iy, 1, null), Ul = a;
                            eD(Ul, q(Sg) ? lH : 1);
                            XC(Ul);
                            Ul.moveTo(Pe, Qe);
                            Ul.lineTo(mH + 1, nH);
                            YC(Ul);
                            Tl += 1;
                          } else {
                            var Jy = D(us);
                            if (Jy) {
                              var Vl = Jy;
                              if (T(Vl)) {
                                var Ky = x(Vl), oH = z(Vl), pH = Ky, qH = O(Ky), us = oH, vs = pH, ws = qH
                              } else {
                                var Ly = E(Vl), My = P.j(Ly, 0, null), rH = P.j(My, 0, null);
                                P.j(My, 1, null);
                                var sH = P.j(Ly, 1, null), Ny = zD(d, rH, f + 1), tH = P.j(Ny, 0, null), uH = P.j(Ny, 1, null), Wl = a;
                                eD(Wl, q(Sg) ? sH : 1);
                                XC(Wl);
                                Wl.moveTo(Pe, Qe);
                                Wl.lineTo(tH + 1, uH);
                                YC(Wl);
                                us = H(Vl);
                                vs = null;
                                ws = 0;
                              }
                              Tl = 0;
                            } else {
                              break;
                            }
                          }
                        }
                        eD(a, 1);
                        Sl += 1;
                      } else {
                        var Oy = D(rs);
                        if (Oy) {
                          var Xl = Oy;
                          if (T(Xl)) {
                            var Py = x(Xl), vH = z(Xl), wH = Py, xH = O(Py), rs = vH, ss = wH, ts = xH
                          } else {
                            var yH = E(Xl), zH = function() {
                              var a = new U(null, 2, 5, V, [yH, Oo], null);
                              return wb.g ? wb.g(a) : wb.call(null, a);
                            }();
                            dD(a, function() {
                              var a = Oo;
                              return $.g ? $.g(a) : $.call(null, a);
                            }());
                            for (var xs = D(zH), ys = null, zs = 0, Yl = 0;;) {
                              if (Yl < zs) {
                                var Qy = ys.D(null, Yl), Ry = P.j(Qy, 0, null), AH = P.j(Ry, 0, null);
                                P.j(Ry, 1, null);
                                var BH = P.j(Qy, 1, null), Sy = zD(d, AH, f + 1), CH = P.j(Sy, 0, null), DH = P.j(Sy, 1, null), Zl = a;
                                eD(Zl, q(Sg) ? BH : 1);
                                XC(Zl);
                                Zl.moveTo(Pe, Qe);
                                Zl.lineTo(CH + 1, DH);
                                YC(Zl);
                                Yl += 1;
                              } else {
                                var Ty = D(xs);
                                if (Ty) {
                                  var $l = Ty;
                                  if (T($l)) {
                                    var Uy = x($l), EH = z($l), FH = Uy, GH = O(Uy), xs = EH, ys = FH, zs = GH
                                  } else {
                                    var Vy = E($l), Wy = P.j(Vy, 0, null), HH = P.j(Wy, 0, null);
                                    P.j(Wy, 1, null);
                                    var IH = P.j(Vy, 1, null), Xy = zD(d, HH, f + 1), JH = P.j(Xy, 0, null), KH = P.j(Xy, 1, null), am = a;
                                    eD(am, q(Sg) ? IH : 1);
                                    XC(am);
                                    am.moveTo(Pe, Qe);
                                    am.lineTo(JH + 1, KH);
                                    YC(am);
                                    xs = H($l);
                                    ys = null;
                                    zs = 0;
                                  }
                                  Yl = 0;
                                } else {
                                  break;
                                }
                              }
                            }
                            eD(a, 1);
                            rs = H(Xl);
                            ss = null;
                            ts = 0;
                          }
                          Sl = 0;
                        } else {
                          break;
                        }
                      }
                    }
                    Rl += 1;
                  } else {
                    var Yy = D(os);
                    if (Yy) {
                      var bm = Yy;
                      if (T(bm)) {
                        var Zy = x(bm), LH = z(bm), MH = Zy, NH = O(Zy), os = LH, ps = MH, qs = NH
                      } else {
                        for (var Po = E(bm), As = D(bg.h(q(Ey) ? new U(null, 1, 5, V, [Mm], null) : null, new U(null, 1, 5, V, [Gn], null))), Bs = null, Cs = 0, cm = 0;;) {
                          if (cm < Cs) {
                            var OH = Bs.D(null, cm), PH = function() {
                              var a = new U(null, 2, 5, V, [OH, Po], null);
                              return wb.g ? wb.g(a) : wb.call(null, a);
                            }();
                            dD(a, function() {
                              var a = Po;
                              return $.g ? $.g(a) : $.call(null, a);
                            }());
                            for (var Ds = D(PH), Es = null, Fs = 0, dm = 0;;) {
                              if (dm < Fs) {
                                var $y = Es.D(null, dm), az = P.j($y, 0, null), QH = P.j(az, 0, null);
                                P.j(az, 1, null);
                                var RH = P.j($y, 1, null), bz = zD(d, QH, f + 1), SH = P.j(bz, 0, null), TH = P.j(bz, 1, null), em = a;
                                eD(em, q(Sg) ? RH : 1);
                                XC(em);
                                em.moveTo(Pe, Qe);
                                em.lineTo(SH + 1, TH);
                                YC(em);
                                dm += 1;
                              } else {
                                var cz = D(Ds);
                                if (cz) {
                                  var fm = cz;
                                  if (T(fm)) {
                                    var dz = x(fm), UH = z(fm), VH = dz, WH = O(dz), Ds = UH, Es = VH, Fs = WH
                                  } else {
                                    var ez = E(fm), fz = P.j(ez, 0, null), XH = P.j(fz, 0, null);
                                    P.j(fz, 1, null);
                                    var YH = P.j(ez, 1, null), gz = zD(d, XH, f + 1), ZH = P.j(gz, 0, null), $H = P.j(gz, 1, null), gm = a;
                                    eD(gm, q(Sg) ? YH : 1);
                                    XC(gm);
                                    gm.moveTo(Pe, Qe);
                                    gm.lineTo(ZH + 1, $H);
                                    YC(gm);
                                    Ds = H(fm);
                                    Es = null;
                                    Fs = 0;
                                  }
                                  dm = 0;
                                } else {
                                  break;
                                }
                              }
                            }
                            eD(a, 1);
                            cm += 1;
                          } else {
                            var hz = D(As);
                            if (hz) {
                              var hm = hz;
                              if (T(hm)) {
                                var iz = x(hm), aI = z(hm), bI = iz, cI = O(iz), As = aI, Bs = bI, Cs = cI
                              } else {
                                var dI = E(hm), eI = function() {
                                  var a = new U(null, 2, 5, V, [dI, Po], null);
                                  return wb.g ? wb.g(a) : wb.call(null, a);
                                }();
                                dD(a, function() {
                                  var a = Po;
                                  return $.g ? $.g(a) : $.call(null, a);
                                }());
                                for (var Gs = D(eI), Hs = null, Is = 0, im = 0;;) {
                                  if (im < Is) {
                                    var jz = Hs.D(null, im), kz = P.j(jz, 0, null), fI = P.j(kz, 0, null);
                                    P.j(kz, 1, null);
                                    var gI = P.j(jz, 1, null), lz = zD(d, fI, f + 1), hI = P.j(lz, 0, null), iI = P.j(lz, 1, null), jm = a;
                                    eD(jm, q(Sg) ? gI : 1);
                                    XC(jm);
                                    jm.moveTo(Pe, Qe);
                                    jm.lineTo(hI + 1, iI);
                                    YC(jm);
                                    im += 1;
                                  } else {
                                    var mz = D(Gs);
                                    if (mz) {
                                      var km = mz;
                                      if (T(km)) {
                                        var nz = x(km), jI = z(km), kI = nz, lI = O(nz), Gs = jI, Hs = kI, Is = lI
                                      } else {
                                        var oz = E(km), pz = P.j(oz, 0, null), mI = P.j(pz, 0, null);
                                        P.j(pz, 1, null);
                                        var nI = P.j(oz, 1, null), qz = zD(d, mI, f + 1), oI = P.j(qz, 0, null), pI = P.j(qz, 1, null), lm = a;
                                        eD(lm, q(Sg) ? nI : 1);
                                        XC(lm);
                                        lm.moveTo(Pe, Qe);
                                        lm.lineTo(oI + 1, pI);
                                        YC(lm);
                                        Gs = H(km);
                                        Hs = null;
                                        Is = 0;
                                      }
                                      im = 0;
                                    } else {
                                      break;
                                    }
                                  }
                                }
                                eD(a, 1);
                                As = H(hm);
                                Bs = null;
                                Cs = 0;
                              }
                              cm = 0;
                            } else {
                              break;
                            }
                          }
                        }
                        os = H(bm);
                        ps = null;
                        qs = 0;
                      }
                      Rl = 0;
                    } else {
                      break;
                    }
                  }
                }
              }
              Ql += 1;
            } else {
              var rz = D(js);
              if (rz) {
                var mm = rz;
                if (T(mm)) {
                  var sz = x(mm), qI = z(mm), rI = sz, sI = O(sz), js = qI, ks = rI, ls = sI
                } else {
                  var tz = E(mm), Qo = P.j(tz, 0, null), xb = P.j(tz, 1, null), uz = K.Yb(null, uf, Qo), Re = P.j(uz, 0, null), Se = P.j(uz, 1, null), Js = O(function() {
                    var a = new U(null, 2, 5, V, [Gn, Mp], null);
                    return xb.g ? xb.g(a) : xb.call(null, a);
                  }()), tI = Js + O(function() {
                    var a = new U(null, 2, 5, V, [Gn, Uj], null);
                    return xb.g ? xb.g(a) : xb.call(null, a);
                  }()), vz = O(function() {
                    var a = new U(null, 2, 5, V, [Mm, Mp], null);
                    return xb.g ? xb.g(a) : xb.call(null, a);
                  }()), uI = vz + O(function() {
                    var a = new U(null, 2, 5, V, [Mm, Uj], null);
                    return xb.g ? xb.g(a) : xb.call(null, a);
                  }()), vI = function() {
                    var a = Js / r;
                    return 1 > a ? a : 1;
                  }(), wz = function() {
                    var a = Rg;
                    return q(a) ? B.h(Qo, vj) : a;
                  }(), Ks = DD(Re, Se, za, J), wI = DD(Re, Se, za + 8, J + 8);
                  if (q(wz)) {
                    var xz = a;
                    cD(xz, Xm.g($));
                    aD(xz, wI);
                  }
                  var wf = a;
                  eD(wf, 1);
                  dD(wf, "black");
                  wf.lineWidth = 1;
                  $C(wf, Ks);
                  cD(wf, "white");
                  aD(wf, Ks);
                  eD(wf, vI);
                  cD(wf, Mp.g($));
                  aD(wf, Ks);
                  eD(wf, 1);
                  if (wy(xb)) {
                    var yz = a;
                    dD(yz, Mp.g($));
                    yz.lineWidth = 2;
                    K.yb(null, a, uf, Qo);
                  }
                  cD(a, "black");
                  bD(a, new p(null, 3, [Bt, "[" + u.g(Qo) + "],  active " + u.g(Js) + " / " + u.g(tI) + " conn. (" + u.g(vz) + " / " + u.g(uI) + " disconn.)", Lq, Re + 5 + ga, Vj, Se], null));
                  a.lineWidth = 1;
                  var Tg = gh.h(h, new U(null, 2, 5, V, [Qm, gt], null)), xI = gh.h(h, new U(null, 2, 5, V, [Qm, Mp], null)), yI = gh.h(h, new U(null, 2, 5, V, [Qm, Uj], null)), zz = gh.h(h, new U(null, 2, 5, V, [Qm, Mm], null)), Az = gh.h(h, new U(null, 2, 5, V, [Qm, Hp], null));
                  if (q(function() {
                    var a = B.h(Az, no);
                    return a ? a : (a = B.h(Az, $o)) ? wz : a;
                  }())) {
                    for (var Ls = D(bg.h(q(yI) ? new U(null, 1, 5, V, [Uj], null) : null, q(xI) ? new U(null, 1, 5, V, [Mp], null) : null)), Ms = null, Ns = 0, nm = 0;;) {
                      if (nm < Ns) {
                        for (var Ro = Ms.D(null, nm), Os = D(bg.h(q(zz) ? new U(null, 1, 5, V, [Mm], null) : null, new U(null, 1, 5, V, [Gn], null))), Ps = null, Qs = 0, om = 0;;) {
                          if (om < Qs) {
                            var zI = Ps.D(null, om), AI = function() {
                              var a = new U(null, 2, 5, V, [zI, Ro], null);
                              return xb.g ? xb.g(a) : xb.call(null, a);
                            }();
                            dD(a, function() {
                              var a = Ro;
                              return $.g ? $.g(a) : $.call(null, a);
                            }());
                            for (var Rs = D(AI), Ss = null, Ts = 0, pm = 0;;) {
                              if (pm < Ts) {
                                var Bz = Ss.D(null, pm), Cz = P.j(Bz, 0, null), BI = P.j(Cz, 0, null);
                                P.j(Cz, 1, null);
                                var CI = P.j(Bz, 1, null), Dz = zD(d, BI, f + 1), DI = P.j(Dz, 0, null), EI = P.j(Dz, 1, null), qm = a;
                                eD(qm, q(Tg) ? CI : 1);
                                XC(qm);
                                qm.moveTo(Re, Se);
                                qm.lineTo(DI + 1, EI);
                                YC(qm);
                                pm += 1;
                              } else {
                                var Ez = D(Rs);
                                if (Ez) {
                                  var rm = Ez;
                                  if (T(rm)) {
                                    var Fz = x(rm), FI = z(rm), GI = Fz, HI = O(Fz), Rs = FI, Ss = GI, Ts = HI
                                  } else {
                                    var Gz = E(rm), Hz = P.j(Gz, 0, null), II = P.j(Hz, 0, null);
                                    P.j(Hz, 1, null);
                                    var JI = P.j(Gz, 1, null), Iz = zD(d, II, f + 1), KI = P.j(Iz, 0, null), LI = P.j(Iz, 1, null), sm = a;
                                    eD(sm, q(Tg) ? JI : 1);
                                    XC(sm);
                                    sm.moveTo(Re, Se);
                                    sm.lineTo(KI + 1, LI);
                                    YC(sm);
                                    Rs = H(rm);
                                    Ss = null;
                                    Ts = 0;
                                  }
                                  pm = 0;
                                } else {
                                  break;
                                }
                              }
                            }
                            eD(a, 1);
                            om += 1;
                          } else {
                            var Jz = D(Os);
                            if (Jz) {
                              var tm = Jz;
                              if (T(tm)) {
                                var Kz = x(tm), MI = z(tm), NI = Kz, OI = O(Kz), Os = MI, Ps = NI, Qs = OI
                              } else {
                                var PI = E(tm), QI = function() {
                                  var a = new U(null, 2, 5, V, [PI, Ro], null);
                                  return xb.g ? xb.g(a) : xb.call(null, a);
                                }();
                                dD(a, function() {
                                  var a = Ro;
                                  return $.g ? $.g(a) : $.call(null, a);
                                }());
                                for (var Us = D(QI), Vs = null, Ws = 0, um = 0;;) {
                                  if (um < Ws) {
                                    var Lz = Vs.D(null, um), Mz = P.j(Lz, 0, null), RI = P.j(Mz, 0, null);
                                    P.j(Mz, 1, null);
                                    var SI = P.j(Lz, 1, null), Nz = zD(d, RI, f + 1), TI = P.j(Nz, 0, null), UI = P.j(Nz, 1, null), vm = a;
                                    eD(vm, q(Tg) ? SI : 1);
                                    XC(vm);
                                    vm.moveTo(Re, Se);
                                    vm.lineTo(TI + 1, UI);
                                    YC(vm);
                                    um += 1;
                                  } else {
                                    var Oz = D(Us);
                                    if (Oz) {
                                      var wm = Oz;
                                      if (T(wm)) {
                                        var Pz = x(wm), VI = z(wm), WI = Pz, XI = O(Pz), Us = VI, Vs = WI, Ws = XI
                                      } else {
                                        var Qz = E(wm), Rz = P.j(Qz, 0, null), YI = P.j(Rz, 0, null);
                                        P.j(Rz, 1, null);
                                        var ZI = P.j(Qz, 1, null), Sz = zD(d, YI, f + 1), $I = P.j(Sz, 0, null), aJ = P.j(Sz, 1, null), xm = a;
                                        eD(xm, q(Tg) ? ZI : 1);
                                        XC(xm);
                                        xm.moveTo(Re, Se);
                                        xm.lineTo($I + 1, aJ);
                                        YC(xm);
                                        Us = H(wm);
                                        Vs = null;
                                        Ws = 0;
                                      }
                                      um = 0;
                                    } else {
                                      break;
                                    }
                                  }
                                }
                                eD(a, 1);
                                Os = H(tm);
                                Ps = null;
                                Qs = 0;
                              }
                              om = 0;
                            } else {
                              break;
                            }
                          }
                        }
                        nm += 1;
                      } else {
                        var Tz = D(Ls);
                        if (Tz) {
                          var ym = Tz;
                          if (T(ym)) {
                            var Uz = x(ym), bJ = z(ym), cJ = Uz, dJ = O(Uz), Ls = bJ, Ms = cJ, Ns = dJ
                          } else {
                            for (var So = E(ym), Xs = D(bg.h(q(zz) ? new U(null, 1, 5, V, [Mm], null) : null, new U(null, 1, 5, V, [Gn], null))), Ys = null, Zs = 0, zm = 0;;) {
                              if (zm < Zs) {
                                var eJ = Ys.D(null, zm), fJ = function() {
                                  var a = new U(null, 2, 5, V, [eJ, So], null);
                                  return xb.g ? xb.g(a) : xb.call(null, a);
                                }();
                                dD(a, function() {
                                  var a = So;
                                  return $.g ? $.g(a) : $.call(null, a);
                                }());
                                for (var $s = D(fJ), at = null, bt = 0, Am = 0;;) {
                                  if (Am < bt) {
                                    var Vz = at.D(null, Am), Wz = P.j(Vz, 0, null), gJ = P.j(Wz, 0, null);
                                    P.j(Wz, 1, null);
                                    var hJ = P.j(Vz, 1, null), Xz = zD(d, gJ, f + 1), iJ = P.j(Xz, 0, null), jJ = P.j(Xz, 1, null), Bm = a;
                                    eD(Bm, q(Tg) ? hJ : 1);
                                    XC(Bm);
                                    Bm.moveTo(Re, Se);
                                    Bm.lineTo(iJ + 1, jJ);
                                    YC(Bm);
                                    Am += 1;
                                  } else {
                                    var Yz = D($s);
                                    if (Yz) {
                                      var Cm = Yz;
                                      if (T(Cm)) {
                                        var Zz = x(Cm), kJ = z(Cm), lJ = Zz, mJ = O(Zz), $s = kJ, at = lJ, bt = mJ
                                      } else {
                                        var $z = E(Cm), aA = P.j($z, 0, null), nJ = P.j(aA, 0, null);
                                        P.j(aA, 1, null);
                                        var oJ = P.j($z, 1, null), bA = zD(d, nJ, f + 1), pJ = P.j(bA, 0, null), qJ = P.j(bA, 1, null), Dm = a;
                                        eD(Dm, q(Tg) ? oJ : 1);
                                        XC(Dm);
                                        Dm.moveTo(Re, Se);
                                        Dm.lineTo(pJ + 1, qJ);
                                        YC(Dm);
                                        $s = H(Cm);
                                        at = null;
                                        bt = 0;
                                      }
                                      Am = 0;
                                    } else {
                                      break;
                                    }
                                  }
                                }
                                eD(a, 1);
                                zm += 1;
                              } else {
                                var cA = D(Xs);
                                if (cA) {
                                  var Em = cA;
                                  if (T(Em)) {
                                    var dA = x(Em), rJ = z(Em), sJ = dA, tJ = O(dA), Xs = rJ, Ys = sJ, Zs = tJ
                                  } else {
                                    var uJ = E(Em), vJ = function() {
                                      var a = new U(null, 2, 5, V, [uJ, So], null);
                                      return xb.g ? xb.g(a) : xb.call(null, a);
                                    }();
                                    dD(a, function() {
                                      var a = So;
                                      return $.g ? $.g(a) : $.call(null, a);
                                    }());
                                    for (var ct = D(vJ), dt = null, et = 0, Fm = 0;;) {
                                      if (Fm < et) {
                                        var eA = dt.D(null, Fm), fA = P.j(eA, 0, null), wJ = P.j(fA, 0, null);
                                        P.j(fA, 1, null);
                                        var xJ = P.j(eA, 1, null), gA = zD(d, wJ, f + 1), yJ = P.j(gA, 0, null), zJ = P.j(gA, 1, null), Gm = a;
                                        eD(Gm, q(Tg) ? xJ : 1);
                                        XC(Gm);
                                        Gm.moveTo(Re, Se);
                                        Gm.lineTo(yJ + 1, zJ);
                                        YC(Gm);
                                        Fm += 1;
                                      } else {
                                        var hA = D(ct);
                                        if (hA) {
                                          var Hm = hA;
                                          if (T(Hm)) {
                                            var iA = x(Hm), AJ = z(Hm), BJ = iA, CJ = O(iA), ct = AJ, dt = BJ, et = CJ
                                          } else {
                                            var jA = E(Hm), kA = P.j(jA, 0, null), DJ = P.j(kA, 0, null);
                                            P.j(kA, 1, null);
                                            var EJ = P.j(jA, 1, null), lA = zD(d, DJ, f + 1), FJ = P.j(lA, 0, null), GJ = P.j(lA, 1, null), Im = a;
                                            eD(Im, q(Tg) ? EJ : 1);
                                            XC(Im);
                                            Im.moveTo(Re, Se);
                                            Im.lineTo(FJ + 1, GJ);
                                            YC(Im);
                                            ct = H(Hm);
                                            dt = null;
                                            et = 0;
                                          }
                                          Fm = 0;
                                        } else {
                                          break;
                                        }
                                      }
                                    }
                                    eD(a, 1);
                                    Xs = H(Em);
                                    Ys = null;
                                    Zs = 0;
                                  }
                                  zm = 0;
                                } else {
                                  break;
                                }
                              }
                            }
                            Ls = H(ym);
                            Ms = null;
                            Ns = 0;
                          }
                          nm = 0;
                        } else {
                          break;
                        }
                      }
                    }
                  }
                  js = H(mm);
                  ks = null;
                  ls = 0;
                }
                Ql = 0;
              } else {
                break;
              }
            }
          }
          lc = H(ci);
          jd = null;
          Ic = 0;
        }
        xc = 0;
      } else {
        break;
      }
    }
  }
  a.restore();
}
function RD(a) {
  var b = we(a) ? S.h(vg, a) : a, c = Q.h(b, mn), d = Q.h(b, ap), e = Q.h(b, Ym), f = P.h(M.g ? M.g(lD) : M.call(null, lD), c), g = NB(f), h = P.h(g, d), l = E(OB(f)), m = yB(l), r = uB.g(l);
  return S.h(u, Xg("\n", ch(new U(null, 26, 5, V, ["__Selection__", "* timestep " + u.g(wn.g(h)) + " (delay " + u.g(c) + ")", "* column " + u.g(q(e) ? e : "nil"), "", "__Input__", "" + u.g(m) + " (" + u.g(O(r)) + " bits)", "", "__Active columns__", "" + u.g(Te.g(oo.g(h))), "", "__Active cells__", "" + u.g(Te.g(Cp.g(h))), "", "__Learn cells__", "" + u.g(Te.g(mo.g(h))), "", "__Signal cells__", "" + u.g(Te.g(Rn.g(h))), "", "__TP scores__", "" + u.g(Te.g(Pm.g(h))), "", "__Predicted cells__", "" + u.g(Te.g(Sp.g(h))), 
  "", q(e) ? function() {
    var s = c + 1, w = P.h(M.g ? M.g(lD) : M.call(null, lD), s), A = P.h(NB(w), d), y = eq.g(A), C = Cp.g(A), G = gh.h(A, new U(null, 2, 5, V, [Y, e], null)), I = gh.h(h, new U(null, 2, 5, V, [Y, e], null)), N = Up.g(mp.g(A)), K = P.h(MB(f), d), da = rB(K), ea = 0 < d ? vB.g(P.h(MB(f), d - 1)) : li;
    return new U(null, 14, 5, V, ["__Active cells prev__", "" + u.g(Te.g(Cp.g(A))), "", "__Learn cells prev__", "" + u.g(Te.g(mo.g(A))), "", "__Predicted cells prev__", "" + u.g(Te.g(Sp.g(A))), "", "__Selected column__", "__Connected ff-synapses__", function() {
      var J = Gn.g(dk.g(G));
      return function(a, b, c, d, e, f, g, h, l, r, m, s, w, J, A, y, C, G, I, K, N, da, ea, kc) {
        return function Sb(Sc) {
          return new Mf(null, function(a, b, c, d, e, f, g, h, l, r, m, s) {
            return function() {
              for (;;) {
                var a = D(Sc);
                if (a) {
                  if (T(a)) {
                    var b = x(a), c = O(b), d = Uf(c);
                    return function() {
                      for (var a = 0;;) {
                        if (a < c) {
                          var e = v.h(b, a), f = P.j(e, 0, null), e = P.j(e, 1, null);
                          Yf(d, "  " + u.g(f) + " :\x3d\x3e " + u.g(VC("%.2f", e)) + u.g(q(function() {
                            var a = f;
                            return s.g ? s.g(a) : s.call(null, a);
                          }()) ? " S" : null) + u.g(q(function() {
                            var a = f;
                            return m.g ? m.g(a) : m.call(null, a);
                          }()) ? " A " + u.g(sB(r, f)) : null));
                          a += 1;
                        } else {
                          return!0;
                        }
                      }
                    }() ? Xf(d.R(), Sb(z(a))) : Xf(d.R(), null);
                  }
                  var e = E(a), f = P.j(e, 0, null), e = P.j(e, 1, null);
                  return Td("  " + u.g(f) + " :\x3d\x3e " + u.g(VC("%.2f", e)) + u.g(q(function() {
                    var a = f;
                    return s.g ? s.g(a) : s.call(null, a);
                  }()) ? " S" : null) + u.g(q(function() {
                    var a = f;
                    return m.g ? m.g(a) : m.call(null, a);
                  }()) ? " A " + u.g(sB(r, f)) : null), Sb(F(a)));
                }
                return null;
              }
            };
          }(a, b, c, d, e, f, g, h, l, r, m, s, w, J, A, y, C, G, I, K, N, da, ea, kc), null, null);
        };
      }(J, s, w, A, y, C, G, I, N, K, da, ea, f, g, h, l, m, r, a, b, b, c, d, e)(Te.g(J));
    }(), "__Cells and their Dendrite segments__", sg(function(a, b, c, d, e, f, g, h, l, r, m, s, w, A, y, C, G, I, K, N, da, ea, cc) {
      return function(Gc, kc) {
        var Kb = io.g(kc), Sb = Cp.g(c), Sc = mo.g(c);
        return new U(null, 4, 5, V, ["CELL " + u.g(Gc), "" + u.g(O(Kb)) + " \x3d " + u.g(Te.g(Cg.h(qg.h(O, lo), Kb))), "Lateral excitation from this cell: " + u.g(au(c, Hq.g(mp.g(c)), Qp.g(kc))), function() {
          return function(a, b, c, d, e, f, g, h, l, r, m, s, w, J, A, y, C, G, I, K, ga, N, za, da, ea, wa) {
            return function yc(oa) {
              return new Mf(null, function(a, b, c, d, e, f, g, h, l, r, m, s, w, J, A, y, C, G, I, K, ga, N, za, da, ea, wa) {
                return function() {
                  for (;;) {
                    var Ha = D(oa);
                    if (Ha) {
                      var fa = Ha;
                      if (T(fa)) {
                        var Ka = x(fa), Ja = O(Ka), Ua = Uf(Ja);
                        return function() {
                          for (var oa = 0;;) {
                            if (oa < Ja) {
                              var qa = v.h(Ka, oa), Sa = lo.g(function() {
                                var b = qa;
                                return a.g ? a.g(b) : a.call(null, b);
                              }());
                              Yf(Ua, new U(null, 2, 5, V, ["  SEGMENT " + u.g(qa), function() {
                                return function(a, b, c, d, e, f, g, h, l, r, m, s, w, J, A, y, C, G, I, K, ga, N, za, da, ea, wa, oa, fa, Ha, Ka, Ja, qa, Ua, Sa) {
                                  return function tj(Ea) {
                                    return new Mf(null, function(a, b, c, d, e, f, g, h, l, r, m, s, w, J, A, y, C, G, I) {
                                      return function() {
                                        for (;;) {
                                          var a = D(Ea);
                                          if (a) {
                                            if (T(a)) {
                                              var b = x(a), c = O(b), d = Uf(c);
                                              return function() {
                                                for (var a = 0;;) {
                                                  if (a < c) {
                                                    var e = v.h(b, a), f = P.j(e, 0, null), e = P.j(e, 1, null);
                                                    Yf(d, "  " + u.g(f) + u.g(e >= I ? " :\x3d\x3e " : " :.: ") + u.g(VC("%.2f", e)) + u.g(q(function() {
                                                      var a = f;
                                                      return m.g ? m.g(a) : m.call(null, a);
                                                    }()) ? " L" : q(function() {
                                                      var a = f;
                                                      return r.g ? r.g(a) : r.call(null, a);
                                                    }()) ? " A" : null));
                                                    a += 1;
                                                  } else {
                                                    return!0;
                                                  }
                                                }
                                              }() ? Xf(d.R(), tj(z(a))) : Xf(d.R(), null);
                                            }
                                            var e = E(a), f = P.j(e, 0, null), e = P.j(e, 1, null);
                                            return Td("  " + u.g(f) + u.g(e >= I ? " :\x3d\x3e " : " :.: ") + u.g(VC("%.2f", e)) + u.g(q(function() {
                                              var a = f;
                                              return m.g ? m.g(a) : m.call(null, a);
                                            }()) ? " L" : q(function() {
                                              var a = f;
                                              return r.g ? r.g(a) : r.call(null, a);
                                            }()) ? " A" : null), tj(F(a)));
                                          }
                                          return null;
                                        }
                                      };
                                    }(a, b, c, d, e, f, g, h, l, r, m, s, w, J, A, y, C, G, I, K, ga, N, za, da, ea, wa, oa, fa, Ha, Ka, Ja, qa, Ua, Sa), null, null);
                                  };
                                }(oa, Sa, qa, Ka, Ja, Ua, fa, Ha, a, b, c, d, e, f, g, h, l, r, m, s, w, J, A, y, C, G, I, K, ga, N, za, da, ea, wa)(Te.g(Sa));
                              }()], null));
                              oa += 1;
                            } else {
                              return!0;
                            }
                          }
                        }() ? Xf(Ua.R(), yc(z(fa))) : Xf(Ua.R(), null);
                      }
                      var qa = E(fa), Sa = lo.g(function() {
                        var b = qa;
                        return a.g ? a.g(b) : a.call(null, b);
                      }());
                      return Td(new U(null, 2, 5, V, ["  SEGMENT " + u.g(qa), function() {
                        return function(a, b, c, d, e, f, g, h, l, r, m, s, w, J, A, y, C, G, I, K, ga, N, sf, za, da, ea, wa, oa, fa, Ha) {
                          return function Sh(Ka) {
                            return new Mf(null, function(a, b, c, d, e, f, g, h, l, r, m, s, w, J, A) {
                              return function() {
                                for (;;) {
                                  var a = D(Ka);
                                  if (a) {
                                    if (T(a)) {
                                      var b = x(a), c = O(b), d = Uf(c);
                                      return function() {
                                        for (var a = 0;;) {
                                          if (a < c) {
                                            var e = v.h(b, a), h = P.j(e, 0, null), e = P.j(e, 1, null);
                                            Yf(d, "  " + u.g(h) + u.g(e >= A ? " :\x3d\x3e " : " :.: ") + u.g(VC("%.2f", e)) + u.g(q(function() {
                                              var a = h;
                                              return g.g ? g.g(a) : g.call(null, a);
                                            }()) ? " L" : q(function() {
                                              var a = h;
                                              return f.g ? f.g(a) : f.call(null, a);
                                            }()) ? " A" : null));
                                            a += 1;
                                          } else {
                                            return!0;
                                          }
                                        }
                                      }() ? Xf(d.R(), Sh(z(a))) : Xf(d.R(), null);
                                    }
                                    var e = E(a), h = P.j(e, 0, null), e = P.j(e, 1, null);
                                    return Td("  " + u.g(h) + u.g(e >= A ? " :\x3d\x3e " : " :.: ") + u.g(VC("%.2f", e)) + u.g(q(function() {
                                      var a = h;
                                      return g.g ? g.g(a) : g.call(null, a);
                                    }()) ? " L" : q(function() {
                                      var a = h;
                                      return f.g ? f.g(a) : f.call(null, a);
                                    }()) ? " A" : null), Sh(F(a)));
                                  }
                                  return null;
                                }
                              };
                            }(a, b, c, d, e, f, g, h, l, r, m, s, w, J, A, y, C, G, I, K, ga, N, sf, za, da, ea, wa, oa, fa, Ha), null, null);
                          };
                        }(Sa, qa, fa, Ha, a, b, c, d, e, f, g, h, l, r, m, s, w, J, A, y, C, G, I, K, ga, N, za, da, ea, wa)(Te.g(Sa));
                      }()], null), yc(F(fa)));
                    }
                    return null;
                  }
                };
              }(a, b, c, d, e, f, g, h, l, r, m, s, w, J, A, y, C, G, I, K, ga, N, za, da, ea, wa), null, null);
            };
          }(Kb, Sb, Sc, a, b, c, d, e, f, g, h, l, r, m, s, w, A, y, C, G, I, K, N, da, ea, cc)(zj.g(O(Kb)));
        }()], null);
      };
    }(s, w, A, y, C, G, I, N, K, da, ea, f, g, h, l, m, r, a, b, b, c, d, e), ar.g(G))], null);
  }() : null], null))));
}
function SD(a) {
  var b = we(a) ? S.h(vg, a) : a;
  a = Q.h(b, Gp);
  var b = Q.h(b, gn), c = Dv(new U(null, 1, 5, V, [Vo], null));
  c.width = b;
  c.height = a;
  return c;
}
function TD(a) {
  var b = SD(oD(a)), c = b.getContext(Kf("2d")), d = tD(a);
  cD(c, Dn.g($));
  AD(c, a, zj.h(d, d + sD(a)));
  c.fill();
  return b;
}
function UD(a, b) {
  var c = SD(oD(a)), d = c.getContext(Kf("2d")), e = uB.g(b);
  cD(d, Mp.g($));
  AD(d, a, e);
  d.fill();
  return c;
}
function VD(a, b) {
  var c = SD(oD(a)), d = c.getContext(Kf("2d")), e = eq.g(b), f = ju(b, e), e = Yt(function() {
    return function(a) {
      a /= 8;
      return 1 < a ? 1 : a;
    };
  }(c, d, e, f), f);
  cD(d, Rq.g($));
  BD(d, a, e);
  return c;
}
function WD(a, b) {
  var c = SD(oD(a)), d = c.getContext(Kf("2d")), e = oo.g(b);
  cD(d, Mp.g($));
  AD(d, a, e);
  d.fill();
  return c;
}
function XD(a, b) {
  var c = SD(oD(a)), d = c.getContext(Kf("2d")), e = gj(Um.g(b));
  cD(d, Rq.g($));
  AD(d, a, e);
  d.fill();
  return c;
}
function YD(a, b) {
  var c = SD(oD(a)), d = c.getContext(Kf("2d")), e = gj(Pm.g(b));
  cD(d, Gk.g($));
  AD(d, a, e);
  d.fill();
  return c;
}
function ZD(a, b) {
  var c = SD(oD(a)), d = c.getContext(Kf("2d")), e = Yt(function() {
    return function(a) {
      a /= 16;
      return 1 < a ? 1 : a;
    };
  }(c, d), Op.g(b));
  cD(d, "black");
  BD(d, a, e);
  d.fill();
  return c;
}
function $D(a) {
  return "Showing " + u.g(tD(a)) + "--" + u.g(tD(a) + sD(a) + -1) + " of " + u.g(rt.g(a));
}
function aE() {
  var a = M.g ? M.g(bE) : M.call(null, bE), b = we(a) ? S.h(vg, a) : a, c = Q.h(b, mn), d = Q.h(b, ap), e = Q.h(b, Ym);
  Gv.h("#detail-text", q(e) ? RD(b) : "Select a column (by clicking on it) to see details.");
  var f = M.g ? M.g(iD) : M.call(null, iD), g = Xq.g(M.g ? M.g(mD) : M.call(null, mD)), h = vn.g(M.g ? M.g(mD) : M.call(null, mD)), l = P.h(M.g ? M.g(lD) : M.call(null, lD), c), m = P.j(M.g ? M.g(lD) : M.call(null, lD), c + 1, li), r = Dv("#comportex-viz"), s = r.getContext(Kf("2d")), w = TD(g), A = Cg.h(TD, h), y = yD(Yd(h)) + gh.h(f, new U(null, 2, 5, V, [Cq, cn], null));
  ZC(s, new p(null, 4, [Lq, 0, Vj, 0, gn, r.width, Gp, 900], null));
  bD(s, new p(null, 3, [Bt, "Input bits.    Time --\x3e", Lq, Lq.g(oD(g)), Vj, 7], null));
  bD(s, new p(null, 3, [Bt, $D(g), Lq, Lq.g(oD(g)), Vj, 17], null));
  for (var C = D(sg(Ah, h)), G = null, I = 0, N = 0;;) {
    if (N < I) {
      var K = G.D(null, N), da = P.j(K, 0, null), ea = P.j(K, 1, null);
      bD(s, new p(null, 3, [Bt, "Region " + u.g(da) + " columns.", Lq, Lq.g(oD(ea)), Vj, 7], null));
      bD(s, new p(null, 3, [Bt, $D(ea), Lq, Lq.g(oD(ea)), Vj, 17], null));
      N += 1;
    } else {
      var J = D(C);
      if (J) {
        var za = J;
        if (T(za)) {
          var ga = x(za), oa = z(za), wa = ga, Ha = O(ga), C = oa, G = wa, I = Ha
        } else {
          var Ja = E(za), Sa = P.j(Ja, 0, null), Ka = P.j(Ja, 1, null);
          bD(s, new p(null, 3, [Bt, "Region " + u.g(Sa) + " columns.", Lq, Lq.g(oD(Ka)), Vj, 7], null));
          bD(s, new p(null, 3, [Bt, $D(Ka), Lq, Lq.g(oD(Ka)), Vj, 17], null));
          C = H(za);
          G = null;
          I = 0;
        }
        N = 0;
      } else {
        break;
      }
    }
  }
  var zb = y + gh.h(f, new U(null, 2, 5, V, [Cq, zk], null));
  bD(s, new p(null, 3, [Bt, "Segments. " + u.g(q(e) ? "(arrows keys to move)" : "(click on a column)") + " Page up / page down to scroll columns.", Lq, zb, Vj, 7], null));
  for (var Ea = D(zj.g(O(M.g ? M.g(lD) : M.call(null, lD)))), ab = null, sb = 0, Ua = 0;;) {
    if (Ua < sb) {
      var qa = ab.D(null, Ua), Ib = P.h(M.g ? M.g(lD) : M.call(null, lD), qa), Jb = P.j(M.g ? M.g(lD) : M.call(null, lD), qa + 1, li), eb = E(NB(Jb)), tb = NB(Ib), fa = or.g(je(Ib));
      CD(s, g, qa, w);
      q(gh.h(f, new U(null, 2, 5, V, [Xq, Mp], null))) && CD(s, g, qa, Q.h(B.h(Xq.g(f), Xq.g(Yp.g(function() {
        var a = fa;
        return M.g ? M.g(a) : M.call(null, a);
      }()))) ? function() {
        var a = fa;
        return M.g ? M.g(a) : M.call(null, a);
      }() : Ag.m(fa, R, bo, UD(g, E(OB(Ib)))), bo));
      q(gh.h(f, new U(null, 2, 5, V, [Xq, Rq], null))) && CD(s, g, qa, Q.h(B.h(Xq.g(f), Xq.g(Yp.g(function() {
        var a = fa;
        return M.g ? M.g(a) : M.call(null, a);
      }()))) ? function() {
        var a = fa;
        return M.g ? M.g(a) : M.call(null, a);
      }() : Ag.m(fa, R, Ap, VD(g, eb)), Ap));
      for (var bc = D(Cg.k(Ah, zj.p(), h, tb, L([A], 0))), ad = null, cc = 0, Gc = 0;;) {
        if (Gc < cc) {
          var kc = ad.D(null, Gc), Kb = P.j(kc, 0, null), Sb = P.j(kc, 1, null), Sc = P.j(kc, 2, null), Hg = P.j(kc, 3, null);
          CD(s, Sb, qa, Hg);
          q(gh.h(f, new U(null, 2, 5, V, [Y, Op], null))) && CD(s, Sb, qa, Q.h(B.h(Y.g(f), Y.g(Yp.g(function() {
            var a = fa;
            return M.g ? M.g(a) : M.call(null, a);
          }()))) ? function() {
            var a = fa;
            return M.g ? M.g(a) : M.call(null, a);
          }() : Ag.m(fa, R, new U(null, 2, 5, V, [it, Kb], null), ZD(Sb, Sc)), new U(null, 2, 5, V, [it, Kb], null)));
          q(gh.h(f, new U(null, 2, 5, V, [Y, Mp], null))) && CD(s, Sb, qa, Q.h(B.h(Y.g(f), Y.g(Yp.g(function() {
            var a = fa;
            return M.g ? M.g(a) : M.call(null, a);
          }()))) ? function() {
            var a = fa;
            return M.g ? M.g(a) : M.call(null, a);
          }() : Ag.m(fa, R, new U(null, 2, 5, V, [Un, Kb], null), WD(Sb, Sc)), new U(null, 2, 5, V, [Un, Kb], null)));
          q(gh.h(f, new U(null, 2, 5, V, [Y, Pn], null))) && CD(s, Sb, qa, Q.h(B.h(Y.g(f), Y.g(Yp.g(function() {
            var a = fa;
            return M.g ? M.g(a) : M.call(null, a);
          }()))) ? function() {
            var a = fa;
            return M.g ? M.g(a) : M.call(null, a);
          }() : Ag.m(fa, R, new U(null, 2, 5, V, [aq, Kb], null), XD(Sb, Sc)), new U(null, 2, 5, V, [aq, Kb], null)));
          q(gh.h(f, new U(null, 2, 5, V, [Y, Gk], null))) && CD(s, Sb, qa, Q.h(B.h(Y.g(f), Y.g(Yp.g(function() {
            var a = fa;
            return M.g ? M.g(a) : M.call(null, a);
          }()))) ? function() {
            var a = fa;
            return M.g ? M.g(a) : M.call(null, a);
          }() : Ag.m(fa, R, new U(null, 2, 5, V, [jp, Kb], null), YD(Sb, Sc)), new U(null, 2, 5, V, [jp, Kb], null)));
          Gc += 1;
        } else {
          var Ig = D(bc);
          if (Ig) {
            var id = Ig;
            if (T(id)) {
              var gf = x(id), hf = z(id), Jg = gf, Tc = O(gf), bc = hf, ad = Jg, cc = Tc
            } else {
              var Eb = E(id), wc = P.j(Eb, 0, null), Tb = P.j(Eb, 1, null), Uc = P.j(Eb, 2, null), jf = P.j(Eb, 3, null);
              CD(s, Tb, qa, jf);
              q(gh.h(f, new U(null, 2, 5, V, [Y, Op], null))) && CD(s, Tb, qa, Q.h(B.h(Y.g(f), Y.g(Yp.g(function() {
                var a = fa;
                return M.g ? M.g(a) : M.call(null, a);
              }()))) ? function() {
                var a = fa;
                return M.g ? M.g(a) : M.call(null, a);
              }() : Ag.m(fa, R, new U(null, 2, 5, V, [it, wc], null), ZD(Tb, Uc)), new U(null, 2, 5, V, [it, wc], null)));
              q(gh.h(f, new U(null, 2, 5, V, [Y, Mp], null))) && CD(s, Tb, qa, Q.h(B.h(Y.g(f), Y.g(Yp.g(function() {
                var a = fa;
                return M.g ? M.g(a) : M.call(null, a);
              }()))) ? function() {
                var a = fa;
                return M.g ? M.g(a) : M.call(null, a);
              }() : Ag.m(fa, R, new U(null, 2, 5, V, [Un, wc], null), WD(Tb, Uc)), new U(null, 2, 5, V, [Un, wc], null)));
              q(gh.h(f, new U(null, 2, 5, V, [Y, Pn], null))) && CD(s, Tb, qa, Q.h(B.h(Y.g(f), Y.g(Yp.g(function() {
                var a = fa;
                return M.g ? M.g(a) : M.call(null, a);
              }()))) ? function() {
                var a = fa;
                return M.g ? M.g(a) : M.call(null, a);
              }() : Ag.m(fa, R, new U(null, 2, 5, V, [aq, wc], null), XD(Tb, Uc)), new U(null, 2, 5, V, [aq, wc], null)));
              q(gh.h(f, new U(null, 2, 5, V, [Y, Gk], null))) && CD(s, Tb, qa, Q.h(B.h(Y.g(f), Y.g(Yp.g(function() {
                var a = fa;
                return M.g ? M.g(a) : M.call(null, a);
              }()))) ? function() {
                var a = fa;
                return M.g ? M.g(a) : M.call(null, a);
              }() : Ag.m(fa, R, new U(null, 2, 5, V, [jp, wc], null), YD(Tb, Uc)), new U(null, 2, 5, V, [jp, wc], null)));
              bc = H(id);
              ad = null;
              cc = 0;
            }
            Gc = 0;
          } else {
            break;
          }
        }
      }
      jg.h(f, Yp.g(function() {
        var a = fa;
        return M.g ? M.g(a) : M.call(null, a);
      }())) && Ag.m(fa, R, Yp, f);
      Ua += 1;
    } else {
      var kf = D(Ea);
      if (kf) {
        var Hc = kf;
        if (T(Hc)) {
          var be = x(Hc), Nh = z(Hc), lf = be, Vc = O(be), Ea = Nh, ab = lf, sb = Vc
        } else {
          var Nb = E(Hc), lc = P.h(M.g ? M.g(lD) : M.call(null, lD), Nb), jd = P.j(M.g ? M.g(lD) : M.call(null, lD), Nb + 1, li), Ic = E(NB(jd)), xc = NB(lc), va = or.g(je(lc));
          CD(s, g, Nb, w);
          q(gh.h(f, new U(null, 2, 5, V, [Xq, Mp], null))) && CD(s, g, Nb, Q.h(B.h(Xq.g(f), Xq.g(Yp.g(function() {
            var a = va;
            return M.g ? M.g(a) : M.call(null, a);
          }()))) ? function() {
            var a = va;
            return M.g ? M.g(a) : M.call(null, a);
          }() : Ag.m(va, R, bo, UD(g, E(OB(lc)))), bo));
          q(gh.h(f, new U(null, 2, 5, V, [Xq, Rq], null))) && CD(s, g, Nb, Q.h(B.h(Xq.g(f), Xq.g(Yp.g(function() {
            var a = va;
            return M.g ? M.g(a) : M.call(null, a);
          }()))) ? function() {
            var a = va;
            return M.g ? M.g(a) : M.call(null, a);
          }() : Ag.m(va, R, Ap, VD(g, Ic)), Ap));
          for (var Lb = D(Cg.k(Ah, zj.p(), h, xc, L([A], 0))), kd = null, De = 0, yc = 0;;) {
            if (yc < De) {
              var ld = kd.D(null, yc), Zb = P.j(ld, 0, null), Ub = P.j(ld, 1, null), md = P.j(ld, 2, null), ce = P.j(ld, 3, null);
              CD(s, Ub, Nb, ce);
              q(gh.h(f, new U(null, 2, 5, V, [Y, Op], null))) && CD(s, Ub, Nb, Q.h(B.h(Y.g(f), Y.g(Yp.g(function() {
                var a = va;
                return M.g ? M.g(a) : M.call(null, a);
              }()))) ? function() {
                var a = va;
                return M.g ? M.g(a) : M.call(null, a);
              }() : Ag.m(va, R, new U(null, 2, 5, V, [it, Zb], null), ZD(Ub, md)), new U(null, 2, 5, V, [it, Zb], null)));
              q(gh.h(f, new U(null, 2, 5, V, [Y, Mp], null))) && CD(s, Ub, Nb, Q.h(B.h(Y.g(f), Y.g(Yp.g(function() {
                var a = va;
                return M.g ? M.g(a) : M.call(null, a);
              }()))) ? function() {
                var a = va;
                return M.g ? M.g(a) : M.call(null, a);
              }() : Ag.m(va, R, new U(null, 2, 5, V, [Un, Zb], null), WD(Ub, md)), new U(null, 2, 5, V, [Un, Zb], null)));
              q(gh.h(f, new U(null, 2, 5, V, [Y, Pn], null))) && CD(s, Ub, Nb, Q.h(B.h(Y.g(f), Y.g(Yp.g(function() {
                var a = va;
                return M.g ? M.g(a) : M.call(null, a);
              }()))) ? function() {
                var a = va;
                return M.g ? M.g(a) : M.call(null, a);
              }() : Ag.m(va, R, new U(null, 2, 5, V, [aq, Zb], null), XD(Ub, md)), new U(null, 2, 5, V, [aq, Zb], null)));
              q(gh.h(f, new U(null, 2, 5, V, [Y, Gk], null))) && CD(s, Ub, Nb, Q.h(B.h(Y.g(f), Y.g(Yp.g(function() {
                var a = va;
                return M.g ? M.g(a) : M.call(null, a);
              }()))) ? function() {
                var a = va;
                return M.g ? M.g(a) : M.call(null, a);
              }() : Ag.m(va, R, new U(null, 2, 5, V, [jp, Zb], null), YD(Ub, md)), new U(null, 2, 5, V, [jp, Zb], null)));
              yc += 1;
            } else {
              var Jc = D(Lb);
              if (Jc) {
                var Xb = Jc;
                if (T(Xb)) {
                  var zc = x(Xb), Ee = z(Xb), Qf = zc, Oh = O(zc), Lb = Ee, kd = Qf, De = Oh
                } else {
                  var de = E(Xb), $b = P.j(de, 0, null), Vb = P.j(de, 1, null), Ed = P.j(de, 2, null), Fe = P.j(de, 3, null);
                  CD(s, Vb, Nb, Fe);
                  q(gh.h(f, new U(null, 2, 5, V, [Y, Op], null))) && CD(s, Vb, Nb, Q.h(B.h(Y.g(f), Y.g(Yp.g(function() {
                    var a = va;
                    return M.g ? M.g(a) : M.call(null, a);
                  }()))) ? function() {
                    var a = va;
                    return M.g ? M.g(a) : M.call(null, a);
                  }() : Ag.m(va, R, new U(null, 2, 5, V, [it, $b], null), ZD(Vb, Ed)), new U(null, 2, 5, V, [it, $b], null)));
                  q(gh.h(f, new U(null, 2, 5, V, [Y, Mp], null))) && CD(s, Vb, Nb, Q.h(B.h(Y.g(f), Y.g(Yp.g(function() {
                    var a = va;
                    return M.g ? M.g(a) : M.call(null, a);
                  }()))) ? function() {
                    var a = va;
                    return M.g ? M.g(a) : M.call(null, a);
                  }() : Ag.m(va, R, new U(null, 2, 5, V, [Un, $b], null), WD(Vb, Ed)), new U(null, 2, 5, V, [Un, $b], null)));
                  q(gh.h(f, new U(null, 2, 5, V, [Y, Pn], null))) && CD(s, Vb, Nb, Q.h(B.h(Y.g(f), Y.g(Yp.g(function() {
                    var a = va;
                    return M.g ? M.g(a) : M.call(null, a);
                  }()))) ? function() {
                    var a = va;
                    return M.g ? M.g(a) : M.call(null, a);
                  }() : Ag.m(va, R, new U(null, 2, 5, V, [aq, $b], null), XD(Vb, Ed)), new U(null, 2, 5, V, [aq, $b], null)));
                  q(gh.h(f, new U(null, 2, 5, V, [Y, Gk], null))) && CD(s, Vb, Nb, Q.h(B.h(Y.g(f), Y.g(Yp.g(function() {
                    var a = va;
                    return M.g ? M.g(a) : M.call(null, a);
                  }()))) ? function() {
                    var a = va;
                    return M.g ? M.g(a) : M.call(null, a);
                  }() : Ag.m(va, R, new U(null, 2, 5, V, [jp, $b], null), YD(Vb, Ed)), new U(null, 2, 5, V, [jp, $b], null)));
                  Lb = H(Xb);
                  kd = null;
                  De = 0;
                }
                yc = 0;
              } else {
                break;
              }
            }
          }
          jg.h(f, Yp.g(function() {
            var a = va;
            return M.g ? M.g(a) : M.call(null, a);
          }())) && Ag.m(va, R, Yp, f);
          Ea = H(Hc);
          ab = null;
          sb = 0;
        }
        Ua = 0;
      } else {
        break;
      }
    }
  }
  wD(g, s, c);
  for (var Ge = D(h), nd = null, He = 0, Wc = 0;;) {
    if (Wc < He) {
      var Ma = nd.D(null, Wc);
      wD(Ma, s, c);
      Wc += 1;
    } else {
      var Ie = D(Ge);
      if (Ie) {
        var pb = Ie;
        if (T(pb)) {
          var ac = x(pb), Rf = z(pb), Kg = ac, Sf = O(ac), Ge = Rf, nd = Kg, He = Sf
        } else {
          var mf = E(pb);
          wD(mf, s, c);
          Ge = H(pb);
          nd = null;
          He = 0;
        }
        Wc = 0;
      } else {
        break;
      }
    }
  }
  if (q(e)) {
    var nf = P.h(h, d);
    xD(nf, s, c, e);
  }
  if (q(gh.h(f, new U(null, 2, 5, V, [dk, Mp], null)))) {
    for (var ee = D(Cg.k(Ah, zj.p(), NB(l), NB(m), L([cg.h(E(OB(l)), MB(l)), h, cg.h(g, h)], 0))), od = null, pd = 0, Xc = 0;;) {
      if (Xc < pd) {
        var Ob = od.D(null, Xc), of = P.j(Ob, 0, null), qd = P.j(Ob, 1, null), Lg = P.j(Ob, 2, null), Mg = P.j(Ob, 3, null), pf = P.j(Ob, 4, null), Je = P.j(Ob, 5, null);
        (db(e) || B.h(d, of)) && KD(s, qd, Lg, pf, Mg, Je, e, c, f);
        Xc += 1;
      } else {
        var Fd = D(ee);
        if (Fd) {
          var Yc = Fd;
          if (T(Yc)) {
            var rd = x(Yc), Gd = z(Yc), Ke = rd, Tf = O(rd), ee = Gd, od = Ke, pd = Tf
          } else {
            var Zc = E(Yc), Ph = P.j(Zc, 0, null), qf = P.j(Zc, 1, null), Nk = P.j(Zc, 2, null), Ok = P.j(Zc, 3, null), Le = P.j(Zc, 4, null), Ng = P.j(Zc, 5, null);
            (db(e) || B.h(d, Ph)) && KD(s, qf, Nk, Le, Ok, Ng, e, c, f);
            ee = H(Yc);
            od = null;
            pd = 0;
          }
          Xc = 0;
        } else {
          break;
        }
      }
    }
  }
  if (q(q(e) ? c + 1 < O(M.g ? M.g(lD) : M.call(null, lD)) : e)) {
    var Me = P.h(NB(l), d), rf = P.h(NB(m), d), sj = P.h(h, d);
    QD(s, Me, rf, sj, e, c, y, f);
  }
  return null;
}
function cE(a, b, c) {
  var d = OC.p();
  bx(a, b, function(a, b, d) {
    return function(a) {
      QC.h(d, a);
      return q(c.g ? c.g(a) : c.call(null, a)) ? (a.preventDefault(), !1) : null;
    };
  }(a, b, d));
  return d;
}
function dE(a, b) {
  var c = cE(a, "click", function() {
    return!1;
  }), d = OC.g(1);
  oC(function(a, c) {
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
                      DC(c);
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
            d.p = c;
            d.g = b;
            return d;
          }();
        }(function(a, c) {
          return function(a) {
            var d = a[1];
            if (7 === d) {
              var d = a[7], e = a[8], f = a[9], d = a[2], g = d.offsetX, f = d.offsetY, d = M.g ? M.g(mD) : M.call(null, mD), h = Xq.g(d), d = M.g ? M.g(mD) : M.call(null, mD), e = vn.g(d), d = M.g ? M.g(lD) : M.call(null, lD), d = O(d) - 2, h = uD(h, g, f);
              a[7] = f;
              a[8] = h;
              a[10] = e;
              a[11] = d;
              a[9] = g;
              a[1] = q(h) ? 8 : 9;
              return Z;
            }
            return 1 === d ? (a[2] = null, a[1] = 2, Z) : 4 === d ? BC(a, 7, c) : 15 === d ? (d = a[2], a[2] = d, a[1] = 12, Z) : 13 === d ? (g = a[12], f = a[13], d = a[7], e = a[10], f = a[9], g = P.h(e, g), d = uD(g, f, d), a[13] = d, a[1] = q(d) ? 16 : 17, Z) : 6 === d ? (d = a[2], a[2] = d, a[1] = 3, Z) : 17 === d ? (g = a[12], a[12] = g + 1, a[2] = null, a[1] = 11, Z) : 3 === d ? (d = a[2], CC(a, d)) : 12 === d ? (d = a[2], a[2] = d, a[1] = 10, Z) : 2 === d ? (a[1] = 4, Z) : 11 === d ? (g = 
            a[12], e = a[10], d = O(e), a[1] = q(g < d) ? 13 : 14, Z) : 9 === d ? (a[12] = 0, a[2] = null, a[1] = 11, Z) : 5 === d ? (a[2] = null, a[1] = 6, Z) : 14 === d ? (d = Ag.m(b, R, Ym, null), a[2] = d, a[1] = 15, Z) : 16 === d ? (g = a[12], f = a[13], d = a[11], e = P.j(f, 0, null), f = P.j(f, 1, null), d = fe([ap, Ym, mn], [g, f, e < d ? e : d]), d = yg.h ? yg.h(b, d) : yg.call(null, b, d), a[2] = d, a[1] = 18, Z) : 10 === d ? (a[14] = a[2], a[2] = null, a[1] = 2, Z) : 18 === d ? (d = a[2], 
            a[2] = d, a[1] = 15, Z) : 8 === d ? (e = a[8], d = a[11], g = P.j(e, 0, null), e = P.j(e, 1, null), d = Ag.m(b, R, mn, g < d ? g : d), a[15] = e, a[2] = d, a[1] = 10, Z) : null;
          };
        }(a, c), a, c);
      }(), h = function() {
        var b = d.p ? d.p() : d.call(null);
        b[6] = a;
        return b;
      }();
      return AC(h);
    };
  }(d, c));
}
var eE = new p(null, 6, [33, un, 34, fr, 37, At, 38, To, 39, wq, 40, jk], null);
function fE(a, b) {
  var c = cE(document, "keydown", function(a) {
    a = a.keyCode;
    return eE.g ? eE.g(a) : eE.call(null, a);
  }), d = OC.g(1);
  oC(function(c, d) {
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
                      DC(c);
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
            d.p = c;
            d.g = b;
            return d;
          }();
        }(function(c, d) {
          return function(e) {
            var f = e[1];
            if (7 === f) {
              var g = e[7], h = e[8], y = e[2], C = y.keyCode, C = eE.g ? eE.g(C) : eE.call(null, C), G = M.g ? M.g(lD) : M.call(null, lD), I = O(G) - 2;
              e[9] = I;
              e[7] = C;
              e[8] = y;
              e[1] = q(C) ? 8 : 9;
              return Z;
            }
            if (20 === f) {
              return y = JD(!0), e[2] = y, e[1] = 11, Z;
            }
            if (1 === f) {
              return e[2] = null, e[1] = 2, Z;
            }
            if (4 === f) {
              return BC(e, 7, d);
            }
            if (15 === f) {
              var I = e[9], g = e[7], h = e[8], N = [mn], K = new U(null, 1, 5, V, N, null), y = Ag.m(a, jh, K, function() {
                return function() {
                  return function(a) {
                    a -= 1;
                    return 0 < a ? a : 0;
                  };
                }(I, g, h, I, g, h, V, N, K, f, c, d);
              }());
              e[2] = y;
              e[1] = 16;
              return Z;
            }
            if (13 === f) {
              return y = M.g ? M.g(a) : M.call(null, a), y = 0 === mn.g(y), e[1] = q(y) ? 14 : 15, Z;
            }
            if (6 === f) {
              return y = e[2], e[2] = y, e[1] = 3, Z;
            }
            if (17 === f) {
              var I = e[9], g = e[7], h = e[8], da = [Ym], ea = new U(null, 1, 5, V, da, null), y = Ag.m(a, jh, ea, function() {
                return function() {
                  return function(a) {
                    return q(a) ? a - 1 : null;
                  };
                }(I, g, h, I, g, h, V, da, ea, f, c, d);
              }());
              e[2] = y;
              e[1] = 11;
              return Z;
            }
            if (3 === f) {
              return y = e[2], CC(e, y);
            }
            if (12 === f) {
              var I = e[9], g = e[7], h = e[8], J = [mn], za = new U(null, 1, 5, V, J, null), y = Ag.m(a, jh, za, function() {
                return function(a) {
                  return function(b) {
                    b += 1;
                    return b < a ? b : a;
                  };
                }(I, g, h, I, g, h, V, J, za, f, c, d);
              }());
              e[2] = y;
              e[1] = 11;
              return Z;
            }
            if (2 === f) {
              return e[1] = 4, Z;
            }
            if (19 === f) {
              return y = JD(!1), e[2] = y, e[1] = 11, Z;
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
              return C = b.p ? b.p() : b.call(null), y = Ag.h(a, Xe), e[10] = C, e[2] = y, e[1] = 16, Z;
            }
            if (16 === f) {
              return y = e[2], e[2] = y, e[1] = 11, Z;
            }
            if (10 === f) {
              return e[11] = e[2], e[2] = null, e[1] = 2, Z;
            }
            if (18 === f) {
              var I = e[9], g = e[7], h = e[8], ga = [Ym], oa = new U(null, 1, 5, V, ga, null), y = Ag.m(a, jh, oa, function() {
                return function() {
                  return function(a) {
                    return q(a) ? a + 1 : null;
                  };
                }(I, g, h, I, g, h, V, ga, oa, f, c, d);
              }());
              e[2] = y;
              e[1] = 11;
              return Z;
            }
            if (8 === f) {
              g = e[7];
              switch(g instanceof W ? g.$ : null) {
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
        var a = g.p ? g.p() : g.call(null);
        a[6] = c;
        return a;
      }();
      return AC(h);
    };
  }(d, c));
}
function gE(a) {
  var b = hE(), c = bE, d = iE, e = NB(a), f = E(OB(a)), g = Cq.g(M.g ? M.g(iD) : M.call(null, iD)), h = nB(f);
  a = HD(h, g);
  var l = cn.g(g), e = Ve.j(function(a, b, c, d, e, f) {
    return function(a, b) {
      var d = Wo.g(mp.g(b)), g = ke(a), g = yD(q(g) ? g : e) + f;
      return $d.h(a, ID(d, g, c));
    };
  }(e, f, g, h, a, l), Zd, e), e = new p(null, 2, [Xq, a, vn, e], null);
  yg.h ? yg.h(mD, e) : yg.call(null, mD, e);
  e = OC.g(1);
  oC(function(a) {
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
                      DC(c);
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
            d.p = c;
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
              var f = c[7], g = function() {
                var a = ni;
                return xg.g ? xg.g(a) : xg.call(null, a);
              }(), h = ig.m(f, R, or, g), e = Ag.h(lD, function() {
                return function(a) {
                  return function(b) {
                    return zh(Dg.h(M.g ? M.g(kD) : M.call(null, kD), Td(a, b)));
                  };
                }(h, f, f, f, ni, g, h, d, a);
              }());
              c[8] = e;
              c[2] = null;
              c[1] = 2;
              return Z;
            }
            return 4 === d ? (f = c[7], e = c[2], c[7] = e, c[1] = q(e) ? 5 : 6, Z) : 3 === d ? (e = c[2], CC(c, e)) : 2 === d ? BC(c, 4, b) : 1 === d ? (c[2] = null, c[1] = 2, Z) : null;
          };
        }(a), a);
      }(), d = function() {
        var b = c.p ? c.p() : c.call(null);
        b[6] = a;
        return b;
      }();
      return AC(d);
    };
  }(e));
  e = Dv("#comportex-viz");
  e.width = .7 * (window.innerWidth - 20);
  e.height = 900;
  dE(e, c);
  fE(c, d);
}
;function jE(a, b) {
  if (a.classList) {
    a.classList.add(b);
  } else {
    var c;
    a.classList ? c = !a.classList.contains(b) : (a.classList ? c = a.classList : (c = a.className, c = ha(c) && c.match(/\S+/g) || []), c = !(0 <= Oa(c, b)));
    c && (a.className += 0 < a.className.length ? " " + b : b);
  }
}
;function kE() {
  Nw.call(this);
  this.cc = new Ww(this);
  this.ke = this;
  this.ee = null;
}
na(kE, Nw);
kE.prototype[Sw] = !0;
k = kE.prototype;
k.addEventListener = function(a, b, c, d) {
  bx(this, a, b, c, d);
};
k.removeEventListener = function(a, b, c, d) {
  oA(this, a, b, c, d);
};
k.dispatchEvent = function(a) {
  var b, c = this.ee;
  if (c) {
    for (b = [];c;c = c.ee) {
      b.push(c);
    }
  }
  var c = this.ke, d = a.type || a;
  if (ha(a)) {
    a = new Pw(a, c);
  } else {
    if (a instanceof Pw) {
      a.target = a.target || c;
    } else {
      var e = a;
      a = new Pw(d, c);
      Ga(a, e);
    }
  }
  var e = !0, f;
  if (b) {
    for (var g = b.length - 1;!a.fc && 0 <= g;g--) {
      f = a.currentTarget = b[g], e = lE(f, d, !0, a) && e;
    }
  }
  a.fc || (f = a.currentTarget = c, e = lE(f, d, !0, a) && e, a.fc || (e = lE(f, d, !1, a) && e));
  if (b) {
    for (g = 0;!a.fc && g < b.length;g++) {
      f = a.currentTarget = b[g], e = lE(f, d, !1, a) && e;
    }
  }
  return e;
};
k.Pe = function(a, b, c, d) {
  return this.cc.add(String(a), b, !1, c, d);
};
k.xf = function(a, b, c, d) {
  this.cc.remove(String(a), b, c, d);
};
function lE(a, b, c, d) {
  b = a.cc.Oa[String(b)];
  if (!b) {
    return!0;
  }
  b = b.concat();
  for (var e = !0, f = 0;f < b.length;++f) {
    var g = b[f];
    if (g && !g.gc && g.uc == c) {
      var h = g.Ob, l = g.Jb || g.src;
      g.tc && Yw(a.cc, g);
      e = !1 !== h.call(l, d) && e;
    }
  }
  return e && !1 != d.fe;
}
k.dd = function(a, b, c, d) {
  return this.cc.dd(String(a), b, c, d);
};
var mE = new U(null, 2, 5, V, [0, 15], null), nE = new p(null, 6, [hk, new U(null, 6, 5, V, [0, 1, 2, 3, 4, 5], null), Jq, new U(null, 5, 5, V, [5, 4, 3, 2, 1], null), nt, new U(null, 5, 5, V, [6, 7, 8, 9, 10], null), mr, new U(null, 5, 5, V, [6, 7, 8, 11, 12], null), Xn, new U(null, 8, 5, V, [0, 2, 4, 6, 8, 10, 12, 14], null), Gq, new U(null, 8, 5, V, [10, 12, 11, 13, 12, 14, 13, 15], null)], null), oE = gj(nE);
function pE() {
  return R.k(Yt(function(a) {
    return new p(null, 2, [$q, a, Kk, null], null);
  }, nE), Dk, 0, L([cq, null], 0));
}
function qE(a) {
  var b = Dk.g(a), c = P.h(oE, b), d = a.g ? a.g(c) : a.call(null, c), e = B.h(Kk.g(d), O($q.g(d)) - 1), f = cq.g(a);
  return jh.j(jh.j(jh.j(a, new U(null, 1, 5, V, [c], null), function(a, b, c, d, e) {
    return function(a) {
      return d ? R.j(a, Kk, null) : q(e) ? a : db(Kk.g(a)) ? R.j(a, Kk, 0) : jh.j(a, new U(null, 1, 5, V, [Kk], null), Kd);
    };
  }(b, c, d, e, f)), new U(null, 1, 5, V, [Dk], null), function(a, b, c, d) {
    return function(a) {
      return d ? St(O(nE)) : a;
    };
  }(b, c, d, e, f)), new U(null, 1, 5, V, [cq], null), function(a, b, c, d, e) {
    return function(a) {
      return d ? 4 : q(q(e) ? 0 < a - 1 : e) ? a - 1 : q(e) ? null : a;
    };
  }(b, c, d, e, f));
}
function rE(a) {
  return q(Kk.g(a)) ? Q.h($q.g(a), Kk.g(a)) : null;
}
var sE = mB(function(a) {
  return Cg.h(rE, Cg.h(a, oE));
}, jB(hB(400, 25, mE))), tE = fe([kk, Ak, Jk, Mk, Bn, Ln, po, Wo, up, zp, Ep, Lp, Np, Up, gq, sq, Hq, dr, ir, qr, rr], [.01, 18, .01, 5, 12, .05, 9, 1E3, 2, 3, .05, .16, .02, .2, !1, .1, 8, .05, .2, 1E5, 7]);
function uE() {
  var a = pE();
  return new FB(a, a, qE, sE);
}
ma("org.nfrac.comportex.demos.isolated_1d.input_gen", uE);
var vE = function() {
  function a(a, b) {
    return LB(EB, uE(), a, b);
  }
  function b(a) {
    return c.h(a, tE);
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
ma("org.nfrac.comportex.demos.isolated_1d.n_region_model", vE);
ma("comportexviz.demos.isolated_1d.n_region_model", function(a) {
  return vE.g(a);
});
var wE = new U(null, 2, 5, V, [0, 15], null), xE = new p(null, 6, [hk, new U(null, 6, 5, V, [0, 1, 2, 3, 4, 5], null), Jq, new U(null, 5, 5, V, [5, 4, 3, 2, 1], null), nt, new U(null, 5, 5, V, [6, 7, 8, 9, 10], null), mr, new U(null, 5, 5, V, [6, 7, 8, 11, 12], null), Xn, new U(null, 8, 5, V, [0, 2, 4, 6, 8, 10, 12, 14], null), Gq, new U(null, 8, 5, V, [10, 12, 11, 13, 12, 14, 13, 15], null)], null), yE = gj(xE), zE = 2 * ef(Ve.h(Ze, Cg.h(O, ji(xE))));
function AE() {
  return Yt(function(a) {
    return new p(null, 3, [$q, a, Kk, null, ek, St(zE)], null);
  }, xE);
}
function BE(a) {
  return Yt(function(a) {
    return B.h(Kk.g(a), O($q.g(a)) - 1) ? R.k(a, Kk, null, L([ek, St(zE)], 0)) : db(Kk.g(a)) && 0 < ek.g(a) ? jh.j(a, new U(null, 1, 5, V, [ek], null), af) : db(Kk.g(a)) && 0 === ek.g(a) ? R.j(a, Kk, 0) : jh.j(a, new U(null, 1, 5, V, [Kk], null), Kd);
  }, a);
}
function CE(a) {
  return q(Kk.g(a)) ? Q.h($q.g(a), Kk.g(a)) : null;
}
var DE = mB(function(a) {
  return Cg.h(CE, Cg.h(a, yE));
}, jB(hB(400, 25, wE))), EE = fe([kk, Ak, Jk, Mk, Bn, Ln, po, Wo, up, zp, Ep, Lp, Np, Up, gq, sq, Hq, dr, ir, qr, rr], [.01, 18, .01, 5, 12, .05, 9, 1E3, 2, 3, .05, .16, .02, .2, !1, .1, 8, .05, .2, 1E5, 7]);
function FE() {
  var a = AE();
  return new FB(a, a, BE, DE);
}
ma("org.nfrac.comportex.demos.mixed_gaps_1d.input_gen", FE);
var GE = function() {
  function a(a, b) {
    return LB(EB, FE(), a, b);
  }
  function b(a) {
    return c.h(a, EE);
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
ma("org.nfrac.comportex.demos.mixed_gaps_1d.n_region_model", GE);
ma("comportexviz.demos.mixed_gaps_1d.n_region_model", function(a) {
  return GE.g(a);
});
var HE = fe([kk, Jk, Bn, Ln, Qn, $n, po, Wo, up, zp, Ep, Lp, Np, Up, gq, Hq, ir, qr, rr], [.01, .01, 10, .04, 100, 200, 7, 300, 2, 2, .04, .16, .06, .2, !0, 5, .1, 1E3, 5]);
var IE = new U(null, 2, 5, V, [0, 7], null), JE = new U(null, 2, 5, V, [To, 0], null);
function KE(a) {
  var b = P.j(a, 0, null);
  a = P.j(a, 1, null);
  a: {
    switch(b instanceof W ? b.$ : null) {
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
  a = new U(null, 2, 5, V, [To, jk], null);
  a = P.h(a, St(O(a)));
  return new U(null, 2, 5, V, [a, b], null);
}
var ME = kB.k(2, function LE(b, c) {
  var d = O(c), e = b / d, f = rj(c, zj.p()), g = hB(b, e, new U(null, 2, 5, V, [0, d - 1], null));
  "undefined" === typeof $A && ($A = function(b, c, d, e, f, g, A, y) {
    this.Yd = b;
    this.Pc = c;
    this.pc = d;
    this.Ab = e;
    this.values = f;
    this.Tb = g;
    this.me = A;
    this.Xe = y;
    this.G = 0;
    this.q = 393216;
  }, $A.Ca = !0, $A.Ba = "org.nfrac.comportex.encoders/t31098", $A.Ga = function() {
    return function(b, c) {
      return Bc(c, "org.nfrac.comportex.encoders/t31098");
    };
  }(d, e, f, g), $A.prototype.Qb = function() {
    return function() {
      return this.Tb;
    };
  }(d, e, f, g), $A.prototype.Pb = function() {
    return function(b, c, d) {
      return fB(this.Yd, c, this.Pc.g ? this.Pc.g(d) : this.Pc.call(null, d));
    };
  }(d, e, f, g), $A.prototype.I = function() {
    return function() {
      return this.Xe;
    };
  }(d, e, f, g), $A.prototype.J = function() {
    return function(b, c) {
      return new $A(this.Yd, this.Pc, this.pc, this.Ab, this.values, this.Tb, this.me, c);
    };
  }(d, e, f, g));
  return new $A(g, f, e, d, c, b, LE, null);
}(60, new U(null, 2, 5, V, [jk, To], null)), L([hB(240, 30, IE)], 0));
ma("comportexviz.demos.signal_steps.model", function() {
  return KB(EB, HE, new U(null, 1, 5, V, [new FB(JE, JE, KE, ME)], null));
});
Au || Cu && Gu("525");
Au || Bu && Gu("1.9.3");
function NE() {
}
NE.Me = function() {
  NE.Ne || (NE.Ne = new NE);
};
NE.Me();
var OE = function() {
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
function PE(a) {
  return Math.floor.g ? Math.floor.g(a) : Math.floor.call(null, a);
}
function QE(a) {
  return Math.ceil.g ? Math.ceil.g(a) : Math.ceil.call(null, a);
}
function RE(a) {
  return Ve.h(Ze, a) / O(a);
}
var SE = function() {
  function a(a, b, c) {
    a = zj.j(a, b, c);
    return(E(a) % c + c) % c === (b % c + c) % c ? bg.h(a, new U(null, 1, 5, V, [b], null)) : a;
  }
  function b(a, b) {
    return bg.h(zj.h(a, b), new U(null, 1, 5, V, [b], null));
  }
  function c(a) {
    return zj.g(a);
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
var TE = new U(null, 6, 5, V, [1, 5, 2, 2.5, 4, 3], null);
function UE(a) {
  return E(function() {
    return function c(d) {
      return new Mf(null, function() {
        for (var e = d;;) {
          if (e = D(e)) {
            if (T(e)) {
              var f = x(e), g = O(f), h = Uf(g);
              a: {
                for (var l = 0;;) {
                  if (l < g) {
                    var m = v.h(f, l), r = P.j(m, 0, null), m = P.j(m, 1, null);
                    B.h(m, a) && h.add(r);
                    l += 1;
                  } else {
                    f = !0;
                    break a;
                  }
                }
                f = void 0;
              }
              return f ? Xf(h.R(), c(z(e))) : Xf(h.R(), null);
            }
            f = E(e);
            h = P.j(f, 0, null);
            f = P.j(f, 1, null);
            if (B.h(f, a)) {
              return Td(h, c(F(e)));
            }
            e = F(e);
          } else {
            return null;
          }
        }
      }, null, null);
    }(sg(Ah, TE));
  }());
}
function VE(a, b, c) {
  c = q(c) ? 1 : 0;
  return 1 >= O(TE) ? 1 - b + c : 1 - UE(a) / (O(TE) - 1) - b + c;
}
function WE(a, b, c, d) {
  return 1 - .5 * ((OE.h(b - d, 2) + OE.h(a - c, 2)) / OE.h(.1 * (b - a), 2));
}
function XE(a, b, c) {
  a = b - a;
  return c > a ? 1 - OE.h((c - a) / (.2 * a), 2) : 1;
}
function ZE(a, b) {
  var c = a / b, d = b / a;
  return 2 - (c > d ? c : d);
}
function $E(a, b) {
  return a >= b ? 2 - a / b : 1;
}
function aF(a) {
  var b = P.j(a, 0, null), c = P.j(a, 1, null), d = P.j(a, 2, null);
  a = P.j(a, 3, null);
  var e = new U(null, 4, 5, V, [.2, .25, .5, .05], null);
  return b * (e.g ? e.g(0) : e.call(null, 0)) + c * (e.g ? e.g(1) : e.call(null, 1)) + d * (e.g ? e.g(2) : e.call(null, 2)) + a * (e.g ? e.g(3) : e.call(null, 3));
}
var HJ = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = L(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    var e = P.j(a, 0, null), f = P.j(a, 1, null), g = we(b) ? S.h(vg, b) : b, h = Q.j(g, cp, !1), l = Q.j(g, oq, 500), m = Q.j(g, fk, .01);
    if ("number" === typeof e && "number" === typeof f && jg.h(e, f)) {
      for (var r = xg.g ? xg.g(-2) : xg.call(null, -2), s = xg.g ? xg.g(li) : xg.call(null, li), w = TE;!me(w);) {
        for (var A = E(w), y = 1;;) {
          var C = VE(A, y, !0);
          if (aF(new U(null, 4, 5, V, [C, 1, 1, 1], null)) < (M.g ? M.g(r) : M.call(null, r))) {
            break;
          } else {
            for (var G = 2;;) {
              var I = $E(G / l, m);
              if (aF(new U(null, 4, 5, V, [C, 1, I, 1], null)) < (M.g ? M.g(r) : M.call(null, r))) {
                break;
              } else {
                for (var N = QE(Math.log((f - e) / ((G + 1) * y * G)) / Math.LN10);;) {
                  var K = A * y * OE.h(10, N), da = XE(e, f, (G - 1) * K);
                  if (aF(new U(null, 4, 5, V, [C, da, I, 1], null)) < (M.g ? M.g(r) : M.call(null, r))) {
                    break;
                  } else {
                    for (var da = e / K, ea = PE(f / K) - (G - 1);;) {
                      if (!(ea > da)) {
                        var J = ea * K, za = J + (G - 1) * K, ga = VE(A, y, 0 < za && 0 > J && 0 === (J % K + K) % K), oa = WE(e, f, J, za), oa = aF(new U(null, 4, 5, V, [ga, oa, ZE(G / l, m), 1], null));
                        if (!(oa < (M.g ? M.g(r) : M.call(null, r)))) {
                          ga = r;
                          yg.h ? yg.h(ga, oa) : yg.call(null, ga, oa);
                          ga = s;
                          J = new p(null, 3, [ik, J, Kp, za, kt, K], null);
                          yg.h ? yg.h(ga, J) : yg.call(null, ga, J);
                          ea += 1 / y;
                          continue;
                        }
                      }
                      break;
                    }
                    N += 1;
                  }
                }
                G += 1;
              }
            }
            y += 1;
          }
        }
        w = H(w);
      }
      var wa = M.g ? M.g(s) : M.call(null, s), w = new U(null, 2, 5, V, [q(h) ? e : function() {
        var a = ik.g(wa);
        return a < e ? a : e;
      }(), q(h) ? f : function() {
        var a = Kp.g(wa);
        return a > f ? a : f;
      }()], null);
      return new p(null, 4, [Wp, w, ik, E(w), Kp, Xd(w), xq, $g.h(function(a, b) {
        return function(a) {
          var c = P.j(b, 0, null), d = P.j(b, 1, null);
          return c <= a && a <= d;
        };
      }(wa, w, r, s, a, e, f, b, g, h, l, m), SE.j(ik.g(wa), Kp.g(wa), kt.g(wa)))], null);
    }
    return new p(null, 4, [Wp, 0, ik, e, Kp, f, xq, Zd], null);
  }
  a.w = 1;
  a.n = function(a) {
    var d = E(a);
    a = F(a);
    return b(d, a);
  };
  a.k = b;
  return a;
}();
function IJ(a, b, c, d) {
  kE.call(this);
  this.$b = c || Lu();
  this.Ic = a;
  this.Qa = [];
  this.wf = b ? b : JJ;
  this.yf = !!d;
  this.Ic.className = "goog-tabpane";
  a = [];
  for (b = Tu(this.Ic);b;) {
    a.push(b), b = void 0 != b.nextElementSibling ? b.nextElementSibling : Uu(b.nextSibling);
  }
  this.Ua = this.$b.Ib("ul", {className:"goog-tabpane-tabs", tabIndex:"0"});
  this.$a = this.$b.Ib("div", "goog-tabpane-cont");
  this.Ic.appendChild(this.$a);
  b = this.Ic;
  switch(this.wf) {
    case JJ:
      b.insertBefore(this.Ua, this.$a);
      b.insertBefore(KJ(this), this.$a);
      jE(b, "goog-tabpane-top");
      break;
    case 1:
      b.appendChild(this.Ua);
      b.appendChild(KJ(this));
      jE(b, "goog-tabpane-bottom");
      break;
    case 2:
      b.insertBefore(this.Ua, this.$a);
      jE(b, "goog-tabpane-left");
      break;
    case 3:
      b.insertBefore(this.Ua, this.$a);
      jE(b, "goog-tabpane-right");
      break;
    default:
      throw Error("Invalid tab location");;
  }
  this.Ua.tabIndex = 0;
  bx(this.Ua, this.yf ? "mousedown" : "click", this.ff, !1, this);
  bx(this.Ua, "keydown", this.gf, !1, this);
  for (b = 0;c = a[b];b++) {
    c = new LJ(c);
    if (c.Rb && c.Rb != this && c.Rb instanceof IJ) {
      d = c.Rb;
      var e = c;
      "number" == typeof e && (e = d.Qa[e]);
      d.Qa.splice(e.Mb, 1);
      var f = e;
      f.Rb = null;
      f.Mb = ba(void 0) ? void 0 : null;
      (f = e.Hc) && f.parentNode && f.parentNode.removeChild(f);
      (e = e.$a) && e.parentNode && e.parentNode.removeChild(e);
      f = void 0;
      for (e = 0;f = d.Qa[e];e++) {
        var g = e;
        f.Rb = d;
        f.Mb = ba(g) ? g : null;
      }
    }
    d = this.Qa.length;
    ba(void 0) && void 0 != d ? (d = void 0, this.Qa.splice(d, 0, c), this.Ua.insertBefore(c.Hc, this.Ua.childNodes[d])) : (this.Qa.push(c), this.Ua.appendChild(c.Hc));
    e = c;
    f = d;
    e.Rb = this;
    e.Mb = ba(f) ? f : null;
    this.bb || (this.bb = c, this.dispatchEvent(new MJ("change", this, this.bb)));
    this.$a.appendChild(c.$a);
    NJ(c, c == this.bb);
    c = void 0;
    for (d += 1;c = this.Qa[d];d++) {
      c.Mb = d;
    }
  }
}
na(IJ, kE);
var JJ = 0;
function KJ(a) {
  var b = Lu(void 0), c = null, d = b.Zb;
  Au && d.createStyleSheet ? (c = d.createStyleSheet(), Cv(c)) : (d = Ou(b.Zb, "head")[0], d || (c = Ou(b.Zb, "body")[0], d = b.Ib("head"), c.parentNode.insertBefore(d, c)), c = b.Ib("style"), Cv(c), b.appendChild(d, c));
  return a.$b.Ib("div", "goog-tabpane-clear");
}
function OJ(a, b) {
  if (0 <= b && b < a.Qa.length) {
    var c = a.Qa[b];
    !c.isEnabled() || a.bb && c == a.bb || (NJ(a.bb, !1), NJ(c, !0), a.bb = c, a.dispatchEvent(new MJ("change", a, a.bb)));
  }
}
IJ.prototype.ff = function(a) {
  for (var b = a.target;b != this.Ua;) {
    if ("LI" == b.tagName) {
      var c;
      for (c = 0;b = b.previousSibling;c++) {
      }
      OJ(this, c);
      break;
    }
    b = b.parentNode;
  }
  a.preventDefault();
};
IJ.prototype.gf = function(a) {
  if (!(a.altKey || a.metaKey || a.ctrlKey)) {
    switch(a.keyCode) {
      case 37:
        a = this.bb.Mb - 1;
        OJ(this, 0 > a ? this.Qa.length - 1 : a);
        break;
      case 39:
        a = this.bb.Mb + 1;
        OJ(this, a >= this.Qa.length ? 0 : a);
        break;
      case 36:
        OJ(this, 0);
        break;
      case 35:
        OJ(this, this.Qa.length - 1);
    }
  }
};
function LJ(a, b, c) {
  var d, e;
  if (ha(a) && !ba(b)) {
    d = a;
  } else {
    if (b) {
      d = b, e = a;
    } else {
      if (a) {
        if (b = Tu(a)) {
          d = Xu(b), b.parentNode.removeChild(b);
        }
        e = a;
      }
    }
  }
  this.$b = c || Lu();
  this.$a = e || this.$b.Ib("div");
  this.Hc = this.$b.Ib("li", null, d);
  this.Mb = this.Rb = null;
  this.Je = !0;
}
LJ.prototype.isEnabled = function() {
  return this.Je;
};
function NJ(a, b) {
  a.isEnabled() && (a.$a.style.display = b ? "" : "none", a.Hc.className = b ? "goog-tabpane-tab-selected" : "goog-tabpane-tab");
}
function MJ(a, b, c) {
  Pw.call(this, a, b);
  this.page = c;
}
na(MJ, Pw);
function PJ(a, b, c, d) {
  this.domain = a;
  this.Ia = b;
  this.F = c;
  this.v = d;
  this.q = 2229667595;
  this.G = 8192;
  2 < arguments.length ? (this.F = c, this.v = d) : this.v = this.F = null;
}
k = PJ.prototype;
k.K = function(a, b) {
  return Cb.j(this, b, null);
};
k.L = function(a, b, c) {
  switch(b instanceof W ? b.$ : null) {
    case "range":
      return this.Ia;
    case "domain":
      return this.domain;
    default:
      return Q.j(this.v, b, c);
  }
};
k.N = function(a, b, c) {
  return Gj(b, function() {
    return function(a) {
      return Gj(b, Mj, "", " ", "", c, a);
    };
  }(this), "#c2.scale._linear{", ", ", "}", c, bg.h(new U(null, 2, 5, V, [new U(null, 2, 5, V, [Wq, this.domain], null), new U(null, 2, 5, V, [ut, this.Ia], null)], null), this.v));
};
k.I = function() {
  return this.F;
};
k.T = function() {
  return 2 + O(this.v);
};
k.P = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Cf(this);
};
k.M = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && ei(this, b) : b) ? !0 : !1;
};
k.Sa = function(a, b) {
  return ye(new mj(null, new p(null, 2, [Wq, null, ut, null], null), null), b) ? ge.h(Vd(dh.h(li, this), this.F), b) : new PJ(this.domain, this.Ia, this.F, kg(ge.h(this.v, b)), null);
};
k.va = function(a, b, c) {
  return q(X.h ? X.h(Wq, b) : X.call(null, Wq, b)) ? new PJ(c, this.Ia, this.F, this.v, null) : q(X.h ? X.h(ut, b) : X.call(null, ut, b)) ? new PJ(this.domain, c, this.F, this.v, null) : new PJ(this.domain, this.Ia, this.F, R.j(this.v, b, c), null);
};
k.Q = function() {
  return D(bg.h(new U(null, 2, 5, V, [new U(null, 2, 5, V, [Wq, this.domain], null), new U(null, 2, 5, V, [ut, this.Ia], null)], null), this.v));
};
k.J = function(a, b) {
  return new PJ(this.domain, this.Ia, b, this.v, this.A);
};
k.S = function(a, b) {
  return re(b) ? Gb(this, v.h(b, 0), v.h(b, 1)) : Ve.j(ob, this, b);
};
k.call = function(a, b) {
  a = this;
  var c = Yd(a.domain) - E(a.domain), d = Yd(a.Ia) - E(a.Ia);
  return E(a.Ia) + d * ((b - E(a.domain)) / c);
};
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ib(b)));
};
k.g = function(a) {
  var b = Yd(this.domain) - E(this.domain), c = Yd(this.Ia) - E(this.Ia);
  return E(this.Ia) + c * ((a - E(this.domain)) / b);
};
var QJ = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = L(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = ij.k(L([new p(null, 2, [Wq, new U(null, 2, 5, V, [0, 1], null), ut, new U(null, 2, 5, V, [0, 1], null)], null), S.h(vg, a)], 0));
    return new PJ(Wq.g(a), ut.g(a), null, ge.k(a, Wq, L([ut], 0)));
  }
  a.w = 0;
  a.n = function(a) {
    a = D(a);
    return b(a);
  };
  a.k = b;
  return a;
}();
function RJ(a) {
  return pe(a) && B.h(2, O(a)) ? a : qe(a) ? new U(null, 2, 5, V, [Lq.g(a), Vj.g(a)], null) : null;
}
function SJ(a) {
  var b = RJ(a);
  a = P.j(b, 0, null);
  b = P.j(b, 1, null);
  return "translate(" + u.g(a) + "," + u.g(b) + ")";
}
var TJ = function() {
  function a(a, b) {
    var c = RJ(b), g = P.j(c, 0, null), c = P.j(c, 1, null);
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
}(), UJ = function() {
  function a(a, d, e) {
    var f = null;
    2 < arguments.length && (f = L(Array.prototype.slice.call(arguments, 2), 0));
    return b.call(this, a, d, f);
  }
  function b(a, b, e) {
    var f = we(e) ? S.h(vg, e) : e, g = Q.j(f, wp, 28), h = Q.h(f, Pp), l = Q.j(f, ok, 9), m = Q.j(f, ao, 6), r = Q.j(f, nn, u), s = Q.j(f, Nn, At), w = function() {
      switch(s instanceof W ? s.$ : null) {
        case "bottom":
          return new U(null, 6, 5, V, [Vj, Lq, zn, jr, Nq, mt], null);
        case "top":
          return new U(null, 6, 5, V, [Vj, Lq, zn, jr, Nq, mt], null);
        case "right":
          return new U(null, 6, 5, V, [Lq, Vj, Nq, mt, zn, jr], null);
        case "left":
          return new U(null, 6, 5, V, [Lq, Vj, Nq, mt, zn, jr], null);
        default:
          throw Error("No matching clause: " + u.g(s));;
      }
    }(), A = P.j(w, 0, null), y = P.j(w, 1, null), C = P.j(w, 2, null), G = P.j(w, 3, null), I = P.j(w, 4, null), N = P.j(w, 5, null), K = function() {
      switch(s instanceof W ? s.$ : null) {
        case "bottom":
          return 1;
        case "right":
          return 1;
        case "top":
          return-1;
        case "left":
          return-1;
        default:
          throw Error("No matching clause: " + u.g(s));;
      }
    }();
    return new U(null, 5, 5, V, [np, new p(null, 1, [Rp, "axis " + u.g(Kf(s))], null), new U(null, 2, 5, V, [Zm, S.h(vg, Wg.h(new U(null, 2, 5, V, [I, N], null), ut.g(a)))], null), new U(null, 2, 5, V, [Fk, Mv(Cg.j(Ah, b, Fg.g(a)), function(a, b, c, d, e, f, g, h, l, m, r, s, w, y, A) {
      return function(a) {
        var f = P.j(a, 0, null);
        a = P.j(a, 1, null);
        return new U(null, 4, 5, V, [pk, new p(null, 1, [wk, SJ(new oi([b, 0, c, a.g ? a.g(f) : a.call(null, f)]))], null), new U(null, 3, 5, V, [Bt, new oi([b, h * w]), A.g ? A.g(f) : A.call(null, f)], null), new U(null, 2, 5, V, [yp, new oi([d, 0, e, h * y])], null)], null);
      };
    }(w, A, y, C, G, I, N, K, e, f, g, h, l, m, r, s))], null), q(h) ? new U(null, 3, 5, V, [Vm, new p(null, 1, [wk, "" + u.g(SJ(new oi([A, K * g, y, RE(ut.g(a))]))) + " " + u.g(function() {
      switch(s instanceof W ? s.$ : null) {
        case "right":
          return TJ.g(90);
        case "left":
          return TJ.g(-90);
        default:
          return "";
      }
    }())], null), h], null) : null], null);
  }
  a.w = 2;
  a.n = function(a) {
    var d = E(a);
    a = H(a);
    var e = E(a);
    a = F(a);
    return b(d, e, a);
  };
  a.k = b;
  return a;
}();
function VJ(a) {
  return S.h(Ze, a) / O(a);
}
function WJ(a, b) {
  var c = gj(E(b));
  return dh.h(li, function() {
    return function(c) {
      return function f(g) {
        return new Mf(null, function() {
          return function() {
            for (;;) {
              var c = D(g);
              if (c) {
                if (T(c)) {
                  var d = x(c), m = O(d), r = Uf(m);
                  return function() {
                    for (var c = 0;;) {
                      if (c < m) {
                        var f = v.h(d, c), g = r, h = V, s = f, f = Cg.h(f, b), f = a.g ? a.g(f) : a.call(null, f);
                        g.add(new U(null, 2, 5, h, [s, f], null));
                        c += 1;
                      } else {
                        return!0;
                      }
                    }
                  }() ? Xf(r.R(), f(z(c))) : Xf(r.R(), null);
                }
                var s = E(c);
                return Td(new U(null, 2, 5, V, [s, function() {
                  var c = Cg.h(s, b);
                  return a.g ? a.g(c) : a.call(null, c);
                }()], null), f(F(c)));
              }
              return null;
            }
          };
        }(c), null, null);
      };
    }(c)(c);
  }());
}
function XJ(a, b, c) {
  a = jh.m(a, new U(null, 1, 5, V, [dp], null), $d, WJ(VJ, b));
  b = O(dp.g(a));
  b > c && ng(b) ? (c = we(a) ? S.h(vg, a) : a, a = Q.h(c, dp), b = 2 * Q.h(c, qt), c = R.k(c, qt, b, L([dp, eh.h(rg.h(WJ, VJ), fh.h(2, a))], 0))) : c = a;
  return c;
}
function YJ(a) {
  var b = function() {
    var a = new p(null, 3, [qt, 1, dp, Zd, br, 200], null);
    return xg.g ? xg.g(a) : xg.call(null, a);
  }(), c = OC.g(1);
  oC(function(b, c) {
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
                      DC(c);
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
            d.p = c;
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
              var e = b[7], d = Ag.m(c, XJ, e, 200), e = null == e ? null : mb(e);
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
              var e = b[8], d = $d.h(e, b[2]), e = O(d), f = M.g ? M.g(c) : M.call(null, c), f = qt.g(f);
              b[7] = d;
              b[1] = q(e < f) ? 5 : 6;
              return Z;
            }
            return 3 === d ? (d = b[2], CC(b, d)) : 2 === d ? BC(b, 4, a) : 1 === d ? (e = Zd, b[8] = e, b[2] = null, b[1] = 2, Z) : null;
          };
        }(b, c), b, c);
      }(), g = function() {
        var a = f.p ? f.p() : f.call(null);
        a[6] = b;
        return a;
      }();
      return AC(g);
    };
  }(c, b));
  return b;
}
function ZJ(a, b) {
  var c = new U(null, 3, 5, V, [Mp, qp, Rq], null), d = new p(null, 4, [At, 50, wq, 30, Lk, 50, Sm, 20], null), e = function() {
    var a = new Lv(null, !0, function(a) {
      return function() {
        var d = we(b) ? S.h(vg, b) : b, e = Q.h(d, qt), f = Q.h(d, br), g = Q.h(d, dp), w = e * f, A = Wo.g(ke(g)), y = .1 * A, C = QJ.k(L([Wq, new U(null, 2, 5, V, [0, w], null), ut, new U(null, 2, 5, V, [0, 399], null)], 0)), G = xq.g(HJ.k(Wq.g(C), L([oq, 400], 0))), I = QJ.k(L([Wq, new U(null, 2, 5, V, [0, y], null), ut, new U(null, 2, 5, V, [179, 0], null)], 0)), N = QJ.k(L([Wq, new U(null, 2, 5, V, [0, y], null), ut, new U(null, 2, 5, V, [0, 179], null)], 0)), K = xq.g(HJ.k(Wq.g(I), L([oq, 450], 
        0)));
        return 0 < A ? new U(null, 3, 5, V, [ep, new U(null, 3, 5, V, [bp, new p(null, 1, [Tn, "text/css"], null), S.O(u, "g.timestep rect { stroke-width: 0px; }", ".plot-space line { stroke: black; }", ".plot-space text { font-size: 80%; }", function() {
          return function(a, b, c, d, e, f, g, h, l, m, r, s, w, y, A) {
            return function qa(C) {
              return new Mf(null, function() {
                return function() {
                  for (;;) {
                    var a = D(C);
                    if (a) {
                      if (T(a)) {
                        var b = x(a), c = O(b), d = Uf(c);
                        return function() {
                          for (var a = 0;;) {
                            if (a < c) {
                              var e = v.h(b, a);
                              Yf(d, "." + u.g(Kf(e)) + " { fill: " + u.g(function() {
                                var a = e;
                                return $.g ? $.g(a) : $.call(null, a);
                              }()) + "}");
                              a += 1;
                            } else {
                              return!0;
                            }
                          }
                        }() ? Xf(d.R(), qa(z(a))) : Xf(d.R(), null);
                      }
                      var e = E(a);
                      return Td("." + u.g(Kf(e)) + " { fill: " + u.g(function() {
                        var a = e;
                        return $.g ? $.g(a) : $.call(null, a);
                      }()) + "}", qa(F(a)));
                    }
                    return null;
                  }
                };
              }(a, b, c, d, e, f, g, h, l, m, r, s, w, y, A), null, null);
            };
          }(b, d, e, f, g, w, A, y, C, C, G, I, N, K, a)(c);
        }())], null), new U(null, 3, 5, V, [kq, new p(null, 1, [bp, new p(null, 4, [Aq, "block", Et, "auto", An, 400 + At.g(a) + wq.g(a), vt, 180 + Lk.g(a) + Sm.g(a)], null)], null), new U(null, 5, 5, V, [Dp, new p(null, 1, [wk, SJ(new U(null, 2, 5, V, [At.g(a), Sm.g(a)], null))], null), UJ.k(I, K, L([Nn, At, ok, 28, Pp, "n. columns", wp, 35], 0)), new U(null, 3, 5, V, [np, new p(null, 1, [wk, SJ(new U(null, 2, 5, V, [0, 180], null))], null), UJ.k(C, G, L([Nn, Lk, ok, 18, Pp, "timestep", wp, 35], 
        0))], null), new U(null, 2, 5, V, [np, Mv.k(sg(Ah, g), function(a, b, d, e, f, g, h, l, m, r, s, w, y, A, C) {
          return function(G) {
            var I = P.j(G, 0, null), K = P.j(G, 1, null), N = Cg.h(K, c), eb = Bj.h(Ze, N);
            return dh.h(new U(null, 1, 5, V, [Zn], null), function() {
              return function(a, b, c, d, e, f, g, h, l, m, r, s, J, w, y, A, C, G, I, K) {
                return function jf(ga) {
                  return new Mf(null, function(a, b, c, d, e, f, g, h, l, m, r, s, J, w, y, A, C, G) {
                    return function() {
                      for (;;) {
                        var a = D(ga);
                        if (a) {
                          if (T(a)) {
                            var b = x(a), c = O(b), e = Uf(c);
                            return function() {
                              for (var a = 0;;) {
                                if (a < c) {
                                  var f = v.h(b, a), g = P.j(f, 0, null), l = P.j(f, 1, null), m = P.j(f, 2, null);
                                  Yf(e, new U(null, 2, 5, V, [jt, new p(null, 5, [Rp, g, Lq, function() {
                                    var a = d * h;
                                    return w.g ? w.g(a) : w.call(null, a);
                                  }(), Vj, function() {
                                    var a = m;
                                    return C.g ? C.g(a) : C.call(null, a);
                                  }(), An, y.g ? y.g(h) : y.call(null, h), vt, function() {
                                    var a = l;
                                    return G.g ? G.g(a) : G.call(null, a);
                                  }()], null)], null));
                                  a += 1;
                                } else {
                                  return!0;
                                }
                              }
                            }() ? Xf(e.R(), jf(z(a))) : Xf(e.R(), null);
                          }
                          var f = E(a), g = P.j(f, 0, null), l = P.j(f, 1, null), m = P.j(f, 2, null);
                          return Td(new U(null, 2, 5, V, [jt, new p(null, 5, [Rp, g, Lq, function() {
                            var a = d * h;
                            return w.g ? w.g(a) : w.call(null, a);
                          }(), Vj, function() {
                            var a = m;
                            return C.g ? C.g(a) : C.call(null, a);
                          }(), An, y.g ? y.g(h) : y.call(null, h), vt, function() {
                            var a = l;
                            return G.g ? G.g(a) : G.call(null, a);
                          }()], null)], null), jf(F(a)));
                        }
                        return null;
                      }
                    };
                  }(a, b, c, d, e, f, g, h, l, m, r, s, J, w, y, A, C, G, I, K), null, null);
                };
              }(N, eb, G, I, K, a, b, d, e, f, g, h, l, m, r, s, w, y, A, C)(Cg.m(Ah, c, N, eb));
            }());
          };
        }(b, d, e, f, g, w, A, y, C, C, G, I, N, K, a), L([lp, qg.h(wn, Xd)], 0))], null)], null)], null)], null) : null;
      };
    }(d), Qj.g("computed-observable"), li, li);
    M.g ? M.g(a) : M.call(null, a);
    return a;
  }(), f = Dv(a);
  Av(f, M.g ? M.g(e) : M.call(null, e));
  Oj(e, co, function(a, b) {
    return function() {
      return Av(b, M.g ? M.g(a) : M.call(null, a));
    };
  }(e, f, d));
  return e;
}
;function $J(a) {
  return S.j(u, "comportex-", Xg("_", Cg.h(function(a) {
    a = a.replace(new RegExp("?".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), "g"), "_QMARK_");
    return a;
  }, Cg.h(function(a) {
    return "number" === typeof a ? "" + u.g(a) : Kf(a);
  }, a))));
}
function aK(a, b, c) {
  return new U(null, 3, 5, V, [Pp, new U(null, 2, 5, V, [Xq, new p(null, 3, [Qp, $J(b), Tn, "checkbox", bq, q(gh.h(a, b)) ? "checked" : null], null)], null), c], null);
}
function bK(a) {
  var b = new U(null, 2, 5, V, [Qm, Hp], null), c = new U(null, 3, 5, V, [$o, no, pt], null);
  return new U(null, 3, 5, V, [Pp, "Synapses from ", new U(null, 3, 5, V, [wt, new p(null, 1, [Qp, $J(b)], null), function() {
    return function e(c) {
      return new Mf(null, function() {
        for (;;) {
          var g = D(c);
          if (g) {
            if (T(g)) {
              var h = x(g), l = O(h), m = Uf(l);
              a: {
                for (var r = 0;;) {
                  if (r < l) {
                    var s = v.h(h, r), s = new U(null, 3, 5, V, [gp, new p(null, 2, [pn, Kf(s), xk, B.h(gh.h(a, b), s) ? "selected" : null], null), Kf(s)], null);
                    m.add(s);
                    r += 1;
                  } else {
                    h = !0;
                    break a;
                  }
                }
                h = void 0;
              }
              return h ? Xf(m.R(), e(z(g))) : Xf(m.R(), null);
            }
            m = E(g);
            return Td(new U(null, 3, 5, V, [gp, new p(null, 2, [pn, Kf(m), xk, B.h(gh.h(a, b), m) ? "selected" : null], null), Kf(m)], null), e(F(g)));
          }
          return null;
        }
      }, null, null);
    }(c);
  }()], null)], null);
}
function cK(a, b) {
  var c = P.j(b, 0, null), d = P.j(b, 1, null);
  return new U(null, 3, 5, V, [Pp, new U(null, 2, 5, V, [nq, Kf(c)], null), new U(null, 2, 5, V, [Xq, new p(null, 2, [Qp, $J(new U(null, 2, 5, V, [a, c], null)), pn, "" + u.g(d)], null)], null)], null);
}
function dK() {
  var a = eK, b = fK, c = gK, d = iE, e = hK, f = function() {
    var d = new Lv(null, !0, function() {
      var d = V, e = V, f = new U(null, 2, 5, V, [Kn, "Simulation"], null), g = new U(null, 3, 5, V, [Pp, "Timestep:", new U(null, 2, 5, V, [vk, wn.g(ap.g(M.g ? M.g(a) : M.call(null, a)))], null)], null), h = V, A = new p(null, 1, [Rp, "detail"], null), y;
      if (q(M.g ? M.g(b) : M.call(null, b))) {
        y = M.g ? M.g(a) : M.call(null, a);
        if (q(rn.g(hp.g(y)))) {
          var C = hp.g(y), G = (new Date).getTime() - rn.g(C);
          y = (wn.g(ap.g(y)) - wn.g(C)) / G * 1E3;
        } else {
          y = null;
        }
        y = VC("%.1f steps/sec.", y);
      } else {
        y = null;
      }
      return new U(null, 3, 5, d, [uq, new U(null, 11, 5, e, [ak, f, g, new U(null, 3, 5, h, [mk, A, y], null), new U(null, 1, 5, V, [Iq], null), new U(null, 3, 5, V, [Km, new p(null, 1, [bp, new p(null, 1, [Aq, q(M.g ? M.g(b) : M.call(null, b)) ? "none" : null], null)], null), "Start"], null), new U(null, 3, 5, V, [pq, new p(null, 1, [bp, new p(null, 1, [Aq, q(M.g ? M.g(b) : M.call(null, b)) ? null : "none"], null)], null), "Stop"], null), new U(null, 2, 5, V, [En, "Step"], null), new U(null, 5, 
      5, V, [Pp, "Step every:", new U(null, 2, 5, V, [go, "" + u.g(jo.g(M.g ? M.g(c) : M.call(null, c))) + " ms"], null), new U(null, 2, 5, V, [Dt, new U(null, 3, 5, V, [Cn, new p(null, 1, [ot, "#"], null), "slower"], null)], null), new U(null, 2, 5, V, [Dt, new U(null, 3, 5, V, [uk, new p(null, 1, [ot, "#"], null), "faster"], null)], null)], null), new U(null, 2, 5, V, [Rm, "Reset"], null), new U(null, 2, 5, V, [rq, new p(null, 1, [Rp, "detail"], null)], null)], null), new U(null, 6, 5, V, [sn, 
      new U(null, 2, 5, V, [Kn, "Animation"], null), new U(null, 3, 5, V, [ko, new p(null, 1, [bp, new p(null, 1, [Aq, q(ln.g(M.g ? M.g(c) : M.call(null, c))) ? "none" : null], null)], null), "Start"], null), new U(null, 3, 5, V, [op, new p(null, 1, [bp, new p(null, 1, [Aq, q(ln.g(M.g ? M.g(c) : M.call(null, c))) ? null : "none"], null)], null), "Stop"], null), new U(null, 2, 5, V, [$m, "Draw now"], null), new U(null, 5, 5, V, [Pp, "Draw every:", new U(null, 2, 5, V, [qo, "" + u.g(tp.g(M.g ? M.g(c) : 
      M.call(null, c))) + " steps"], null), new U(null, 2, 5, V, [Dt, new U(null, 3, 5, V, [fn, new p(null, 1, [ot, "#"], null), "slower"], null)], null), new U(null, 2, 5, V, [Dt, new U(null, 3, 5, V, [Jp, new p(null, 1, [ot, "#"], null), "faster"], null)], null)], null)], null)], null);
    }, Qj.g("computed-observable"), li, li);
    M.g ? M.g(d) : M.call(null, d);
    return d;
  }(), g = Dv("#comportex-controls");
  Av(g, M.g ? M.g(f) : M.call(null, f));
  Oj(f, co, function(a, b) {
    return function() {
      return Av(b, M.g ? M.g(a) : M.call(null, a));
    };
  }(f, g));
  tA("#sim-start", rp, function() {
    return yg.h ? yg.h(b, !0) : yg.call(null, b, !0);
  });
  tA("#sim-stop", rp, function() {
    return yg.h ? yg.h(b, !1) : yg.call(null, b, !1);
  });
  tA("#sim-step", rp, function() {
    return d.p ? d.p() : d.call(null);
  });
  tA("#sim-faster", rp, function() {
    return Ag.m(c, jh, new U(null, 1, 5, V, [jo], null), function(a) {
      a -= 100;
      return 0 < a ? a : 0;
    });
  });
  tA("#sim-slower", rp, function() {
    return Ag.m(c, jh, new U(null, 1, 5, V, [jo], null), function(a) {
      return a + 100;
    });
  });
  tA("#sim-reset", rp, function() {
    var b = Dv("#sim-reset-status");
    Ag.h(a, xB);
    return Fv.h(b, "reset complete.");
  });
  tA("#anim-start", rp, function() {
    return Ag.m(c, R, ln, !0);
  });
  tA("#anim-stop", rp, function() {
    return Ag.m(c, R, ln, !1);
  });
  tA("#anim-step", rp, function() {
    return e.p ? e.p() : e.call(null);
  });
  tA("#anim-faster", rp, function() {
    return Ag.m(c, jh, new U(null, 1, 5, V, [tp], null), function(a) {
      a -= 1;
      return 1 < a ? a : 1;
    });
  });
  tA("#anim-slower", rp, function() {
    return Ag.m(c, jh, new U(null, 1, 5, V, [tp], null), function(a) {
      return a + 1;
    });
  });
}
function iK() {
  var a = function() {
    var a = new Lv(null, !0, function() {
      var a = V, b;
      b = M.g ? M.g(iD) : M.call(null, iD);
      b = new U(null, 6, 5, V, [On, new U(null, 2, 5, V, [Kn, "Visualisation"], null), new U(null, 5, 5, V, [Zj, new U(null, 2, 5, V, [Kn, "Input"], null), aK(b, new U(null, 2, 5, V, [Xq, Mp], null), "Active bits"), new U(null, 1, 5, V, [Iq], null), aK(b, new U(null, 2, 5, V, [Xq, Rq], null), "Predicted bits")], null), new U(null, 9, 5, V, [Zj, new U(null, 2, 5, V, [Kn, "Columns"], null), aK(b, new U(null, 2, 5, V, [Y, Op], null), "Overlap scores"), new U(null, 1, 5, V, [Iq], null), aK(b, new U(null, 
      2, 5, V, [Y, Mp], null), "Active columns"), new U(null, 1, 5, V, [Iq], null), aK(b, new U(null, 2, 5, V, [Y, Pn], null), "Predictive columns"), new U(null, 1, 5, V, [Iq], null), aK(b, new U(null, 2, 5, V, [Y, Gk], null), "TP columns")], null), new U(null, 7, 5, V, [Zj, new U(null, 2, 5, V, [Kn, "Feed-forward synapses"], null), aK(b, new U(null, 2, 5, V, [dk, Mp], null), "Active ff-synapses"), new U(null, 1, 5, V, [Iq], null), aK(b, new U(null, 2, 5, V, [dk, Uj], null), "Inactive ff-synapses"), 
      new U(null, 1, 5, V, [Iq], null), aK(b, new U(null, 2, 5, V, [dk, gt], null), "Permanences")], null), new U(null, 11, 5, V, [Zj, new U(null, 2, 5, V, [Kn, "Lateral dendrite segments"], null), bK(b), new U(null, 1, 5, V, [Iq], null), aK(b, new U(null, 2, 5, V, [Qm, Mp], null), "Active synapses"), new U(null, 1, 5, V, [Iq], null), aK(b, new U(null, 2, 5, V, [Qm, Uj], null), "Inactive synapses"), new U(null, 1, 5, V, [Iq], null), aK(b, new U(null, 2, 5, V, [Qm, Mm], null), "Disconnected synapses"), 
      new U(null, 1, 5, V, [Iq], null), aK(b, new U(null, 2, 5, V, [Qm, gt], null), "Permanences")], null)], null);
      return new U(null, 2, 5, a, [Bp, b], null);
    }, Qj.g("computed-observable"), li, li);
    M.g ? M.g(a) : M.call(null, a);
    return a;
  }(), b = Dv("#comportex-drawing");
  Av(b, M.g ? M.g(a) : M.call(null, a));
  Oj(a, co, function(a, b) {
    return function() {
      return Av(b, M.g ? M.g(a) : M.call(null, a));
    };
  }(a, b));
  for (var a = D(M.g ? M.g(iD) : M.call(null, iD)), b = null, c = 0, d = 0;;) {
    if (d < c) {
      for (var e = b.D(null, d), f = P.j(e, 0, null), g = P.j(e, 1, null), h = D(g), l = null, m = 0, r = 0;;) {
        if (r < m) {
          var s = l.D(null, r), w = P.j(s, 0, null), A = P.j(s, 1, null), y = $J(new U(null, 2, 5, V, [f, w], null)), C = Dv("#" + u.g(y));
          q(C) && tA(C, er, function(a, b, c, d, e, f, g, h, l, m, r, s, w, y, A) {
            return function() {
              var a;
              a = Gv.g(m);
              a = q(a) ? Lf.g(a) : null;
              return Ag.m(iD, ih, new U(null, 2, 5, V, [A, s], null), a);
            };
          }(h, l, m, r, a, b, c, d, y, C, s, w, A, e, f, g));
          r += 1;
        } else {
          if (w = D(h)) {
            s = w;
            if (T(s)) {
              h = x(s), r = z(s), l = h, m = O(h), h = r;
            } else {
              var A = E(s), y = P.j(A, 0, null), C = P.j(A, 1, null), G = $J(new U(null, 2, 5, V, [f, y], null)), I = Dv("#" + u.g(G));
              q(I) && tA(I, er, function(a, b, c, d, e, f, g, h, l, m, r, s, w, y, A, C, G) {
                return function() {
                  var a;
                  a = Gv.g(m);
                  a = q(a) ? Lf.g(a) : null;
                  return Ag.m(iD, ih, new U(null, 2, 5, V, [G, s], null), a);
                };
              }(h, l, m, r, a, b, c, d, G, I, A, y, C, s, w, e, f, g));
              h = H(s);
              l = null;
              m = 0;
            }
            r = 0;
          } else {
            break;
          }
        }
      }
      d += 1;
    } else {
      if (h = D(a)) {
        e = h;
        if (T(e)) {
          a = x(e), d = z(e), b = a, c = O(a), a = d;
        } else {
          l = E(e);
          f = P.j(l, 0, null);
          g = P.j(l, 1, null);
          m = D(g);
          r = null;
          for (w = s = 0;;) {
            if (w < s) {
              A = r.D(null, w), y = P.j(A, 0, null), C = P.j(A, 1, null), G = $J(new U(null, 2, 5, V, [f, y], null)), I = Dv("#" + u.g(G)), q(I) && tA(I, er, function(a, b, c, d, e, f, g, h, l, m, r, s, w, y, A) {
                return function() {
                  var a;
                  a = Gv.g(m);
                  a = q(a) ? Lf.g(a) : null;
                  return Ag.m(iD, ih, new U(null, 2, 5, V, [A, s], null), a);
                };
              }(m, r, s, w, a, b, c, d, G, I, A, y, C, l, f, g, e, h)), w += 1;
            } else {
              if (y = D(m)) {
                A = y;
                if (T(A)) {
                  m = x(A), w = z(A), r = m, s = O(m), m = w;
                } else {
                  var C = E(A), G = P.j(C, 0, null), I = P.j(C, 1, null), N = $J(new U(null, 2, 5, V, [f, G], null)), K = Dv("#" + u.g(N));
                  q(K) && tA(K, er, function(a, b, c, d, e, f, g, h, l, m, r, s, w, y, A, C, G) {
                    return function() {
                      var a;
                      a = Gv.g(m);
                      a = q(a) ? Lf.g(a) : null;
                      return Ag.m(iD, ih, new U(null, 2, 5, V, [G, s], null), a);
                    };
                  }(m, r, s, w, a, b, c, d, N, K, C, G, I, A, y, l, f, g, e, h));
                  m = H(A);
                  r = null;
                  s = 0;
                }
                w = 0;
              } else {
                break;
              }
            }
          }
          a = H(e);
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
function jK() {
  var a = eK, b = bE, c = function() {
    var c = new Lv(null, !0, function() {
      var c = ap.g(M.g ? M.g(b) : M.call(null, b));
      return new U(null, 2, 5, V, [vq, function() {
        var b = NB(M.g ? M.g(a) : M.call(null, a));
        return function(a, b) {
          return function G(c) {
            return new Mf(null, function(a, b) {
              return function() {
                for (;;) {
                  var d = D(c);
                  if (d) {
                    if (T(d)) {
                      var e = x(d), f = O(e), g = Uf(f);
                      a: {
                        for (var h = 0;;) {
                          if (h < f) {
                            var l = v.h(e, h), m = P.h(a, l), m = mp.g(m), l = new U(null, 3, 5, V, [ep, new p(null, 1, [bp, new p(null, 1, [Aq, jg.h(l, b) ? "none" : null], null)], null), new U(null, 4, 5, V, [Pq, new p(null, 1, [Qp, "region-spec-form-" + u.g(l)], null), new U(null, 4, 5, V, [lt, "Region " + u.g(l), new U(null, 1, 5, V, [Iq], null), new U(null, 2, 5, V, [fo, "(click on a region to select it)"], null)], null), new U(null, 4, 5, V, [gk, new U(null, 2, 5, V, [Kn, "Parameters"], null), 
                            Cg.h(rg.h(cK, l), Te.g(m)), new U(null, 3, 5, V, [Hn, new U(null, 2, 5, V, [Xq, new p(null, 2, [Tn, "submit", pn, "Set!"], null)], null), " (will be set immediately, but then use Reset above for any parameters that apply only in initialisation)"], null)], null)], null)], null);
                            g.add(l);
                            h += 1;
                          } else {
                            e = !0;
                            break a;
                          }
                        }
                        e = void 0;
                      }
                      return e ? Xf(g.R(), G(z(d))) : Xf(g.R(), null);
                    }
                    g = E(d);
                    e = P.h(a, g);
                    e = mp.g(e);
                    return Td(new U(null, 3, 5, V, [ep, new p(null, 1, [bp, new p(null, 1, [Aq, jg.h(g, b) ? "none" : null], null)], null), new U(null, 4, 5, V, [Pq, new p(null, 1, [Qp, "region-spec-form-" + u.g(g)], null), new U(null, 4, 5, V, [lt, "Region " + u.g(g), new U(null, 1, 5, V, [Iq], null), new U(null, 2, 5, V, [fo, "(click on a region to select it)"], null)], null), new U(null, 4, 5, V, [gk, new U(null, 2, 5, V, [Kn, "Parameters"], null), Cg.h(rg.h(cK, g), Te.g(e)), new U(null, 3, 5, 
                    V, [Hn, new U(null, 2, 5, V, [Xq, new p(null, 2, [Tn, "submit", pn, "Set!"], null)], null), " (will be set immediately, but then use Reset above for any parameters that apply only in initialisation)"], null)], null)], null)], null), G(F(d)));
                  }
                  return null;
                }
              };
            }(a, b), null, null);
          };
        }(b, c)(zj.g(O(b)));
      }()], null);
    }, Qj.g("computed-observable"), li, li);
    M.g ? M.g(c) : M.call(null, c);
    return c;
  }(), d = Dv("#comportex-parameters");
  Av(d, M.g ? M.g(c) : M.call(null, c));
  Oj(c, co, function(a, b) {
    return function() {
      return Av(b, M.g ? M.g(a) : M.call(null, a));
    };
  }(c, d));
  for (var c = D(zj.g(O(NB(M.g ? M.g(a) : M.call(null, a))))), d = null, e = 0, f = 0;;) {
    if (f < e) {
      var g = d.D(null, f), h = Dv("#region-spec-form-" + u.g(g));
      tA(h, In, function(b, c, d, e, f, g) {
        return function(h) {
          var l = P.h(NB(M.g ? M.g(a) : M.call(null, a)), g), m = Ve.j(function(a, b, c, d, e, f, g) {
            return function(a, b) {
              var c = $J(new U(null, 2, 5, V, [g, b], null)), c = Dv("#" + u.g(c)), c = Cw(Gv.g(c));
              return R.j(a, b, c);
            };
          }(b, c, d, e, l, f, g), li, gj(mp.g(l)));
          Ag.m(a, QB, Zq.g(l), function(a, b, c, d, e, f) {
            return function(a) {
              return R.j(a, mp, f);
            };
          }(b, c, d, e, l, m, f, g));
          h.preventDefault();
          return!1;
        };
      }(c, d, e, f, h, g));
      f += 1;
    } else {
      var l = D(c);
      if (l) {
        h = l;
        if (T(h)) {
          c = x(h), f = z(h), d = c, e = O(c), c = f;
        } else {
          var g = E(h), m = Dv("#region-spec-form-" + u.g(g));
          tA(m, In, function(b, c, d, e, f, g, h, l) {
            return function(m) {
              var K = P.h(NB(M.g ? M.g(a) : M.call(null, a)), g), da = Ve.j(function(a, b, c, d, e, f, g) {
                return function(a, b) {
                  var c = $J(new U(null, 2, 5, V, [g, b], null)), c = Dv("#" + u.g(c)), c = Cw(Gv.g(c));
                  return R.j(a, b, c);
                };
              }(b, c, d, e, K, f, g, h, l), li, gj(mp.g(K)));
              Ag.m(a, QB, Zq.g(K), function(a, b, c, d, e, f) {
                return function(a) {
                  return R.j(a, mp, f);
                };
              }(b, c, d, e, K, da, f, g, h, l));
              m.preventDefault();
              return!1;
            };
          }(c, d, e, f, m, g, h, l));
          c = H(h);
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
;function hE() {
  var a = kK, b = OC.p();
  UC.h(a, b);
  return b;
}
var eK = xg.g ? xg.g(null) : xg.call(null, null), bE, lK = new p(null, 3, [ap, 0, mn, 0, Ym, null], null);
bE = xg.g ? xg.g(lK) : xg.call(null, lK);
var mK = OC.p(), kK = function nK(b) {
  var c = xg.g ? xg.g(li) : xg.call(null, li), d = function() {
    "undefined" === typeof VB && (VB = function(b, c, d, e) {
      this.$c = b;
      this.ch = c;
      this.bf = d;
      this.Te = e;
      this.G = 0;
      this.q = 393216;
    }, VB.Ca = !0, VB.Ba = "cljs.core.async/t28470", VB.Ga = function() {
      return function(b, c) {
        return Bc(c, "cljs.core.async/t28470");
      };
    }(c), VB.prototype.Hd = function() {
      return function(b, c, d) {
        Ag.m(this.$c, R, c, d);
        return null;
      };
    }(c), VB.prototype.Id = function() {
      return function(b, c) {
        Ag.j(this.$c, ge, c);
        return null;
      };
    }(c), VB.prototype.I = function() {
      return function() {
        return this.Te;
      };
    }(c), VB.prototype.J = function() {
      return function(b, c) {
        return new VB(this.$c, this.ch, this.bf, c);
      };
    }(c));
    return new VB(c, b, nK, null);
  }(), e = OC.g(1), f = xg.g ? xg.g(null) : xg.call(null, null), g = function(b, c, d, e) {
    return function() {
      return 0 === Ag.h(e, af) ? QC.h(d, !0) : null;
    };
  }(c, d, e, f), h = OC.g(1);
  oC(function(c, d, e, f, g, h) {
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
                      DC(d);
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
            e.p = d;
            e.g = c;
            return e;
          }();
        }(function(c, d, e, f, g, h) {
          return function(c) {
            var l = c[1];
            if (7 === l) {
              var m = c, r = m;
              r[2] = c[2];
              r[1] = 3;
              return Z;
            }
            if (20 === l) {
              var s = c[7], w = E(s), y = P.j(w, 0, null), A = P.j(w, 1, null);
              c[8] = y;
              m = c;
              m[1] = q(A) ? 22 : 23;
              return Z;
            }
            if (27 === l) {
              var C = c[9], G = c[10], Ea = c[11], ab = c[12], sb = v.h(C, Ea), Ua = QC.j(sb, ab, h);
              c[10] = sb;
              m = c;
              m[1] = q(Ua) ? 30 : 31;
              return Z;
            }
            if (1 === l) {
              var qa = m = c;
              qa[2] = null;
              qa[1] = 2;
              return Z;
            }
            if (24 === l) {
              var s = c[7], Ib = c[2], Jb = H(s), eb = null, tb = 0, fa = 0;
              c[13] = eb;
              c[14] = fa;
              c[15] = Jb;
              c[16] = Ib;
              c[17] = tb;
              var bc = m = c;
              bc[2] = null;
              bc[1] = 8;
              return Z;
            }
            if (39 === l) {
              var ad = m = c;
              ad[2] = null;
              ad[1] = 41;
              return Z;
            }
            if (4 === l) {
              var ab = c[12], cc = c[2], Gc = null == cc;
              c[12] = cc;
              m = c;
              m[1] = q(Gc) ? 5 : 6;
              return Z;
            }
            if (15 === l) {
              var eb = c[13], fa = c[14], Jb = c[15], tb = c[17], kc = c[2], Kb = Jb, Sb = tb, Sc = fa + 1;
              c[13] = eb;
              c[14] = Sc;
              c[15] = Kb;
              c[18] = kc;
              c[17] = Sb;
              var Hg = m = c;
              Hg[2] = null;
              Hg[1] = 8;
              return Z;
            }
            if (21 === l) {
              var Ig = c[2], id = m = c;
              id[2] = Ig;
              id[1] = 18;
              return Z;
            }
            if (31 === l) {
              var G = c[10], gf = Ag.h(g, af), hf = e.Id(null, G);
              c[19] = gf;
              var Jg = m = c;
              Jg[2] = hf;
              Jg[1] = 32;
              return Z;
            }
            if (32 === l) {
              var C = c[9], Tc = c[20], Eb = c[21], Ea = c[11], wc = c[2], Tb = Eb, Uc = Tc, jf = Ea + 1;
              c[9] = C;
              c[20] = Uc;
              c[21] = Tb;
              c[11] = jf;
              c[22] = wc;
              var kf = m = c;
              kf[2] = null;
              kf[1] = 25;
              return Z;
            }
            if (40 === l) {
              var Hc = c[23], be = Ag.h(g, af), Nh = e.Id(null, Hc);
              c[24] = be;
              var lf = m = c;
              lf[2] = Nh;
              lf[1] = 41;
              return Z;
            }
            if (33 === l) {
              var Vc = c[25], Nb = T(Vc), m = c;
              m[1] = Nb ? 36 : 37;
              return Z;
            }
            if (13 === l) {
              var lc = c[26], jd = YB(lc), Ic = m = c;
              Ic[2] = jd;
              Ic[1] = 15;
              return Z;
            }
            if (22 === l) {
              var y = c[8], xc = YB(y), va = m = c;
              va[2] = xc;
              va[1] = 24;
              return Z;
            }
            if (36 === l) {
              var Vc = c[25], Lb = x(Vc), kd = z(Vc), De = O(Lb), Eb = kd, C = Lb, Tc = De, Ea = 0;
              c[9] = C;
              c[20] = Tc;
              c[21] = Eb;
              c[11] = Ea;
              var yc = m = c;
              yc[2] = null;
              yc[1] = 25;
              return Z;
            }
            if (41 === l) {
              var Vc = c[25], ld = c[2], Eb = H(Vc), C = null, Ea = Tc = 0;
              c[9] = C;
              c[20] = Tc;
              c[21] = Eb;
              c[11] = Ea;
              c[27] = ld;
              var Zb = m = c;
              Zb[2] = null;
              Zb[1] = 25;
              return Z;
            }
            if (43 === l) {
              var Ub = m = c;
              Ub[2] = null;
              Ub[1] = 44;
              return Z;
            }
            if (29 === l) {
              var md = c[2], ce = m = c;
              ce[2] = md;
              ce[1] = 26;
              return Z;
            }
            if (44 === l) {
              c[28] = c[2];
              var Jc = m = c;
              Jc[2] = null;
              Jc[1] = 2;
              return Z;
            }
            if (6 === l) {
              var Xb = c[29], zc = M.g ? M.g(d) : M.call(null, d), Ee = gj(zc), Qf = O(Ee), Oh = yg.h ? yg.h(g, Qf) : yg.call(null, g, Qf), Eb = D(Ee), C = null, Ea = Tc = 0;
              c[9] = C;
              c[29] = Ee;
              c[20] = Tc;
              c[21] = Eb;
              c[30] = Oh;
              c[11] = Ea;
              var de = m = c;
              de[2] = null;
              de[1] = 25;
              return Z;
            }
            if (28 === l) {
              var Vc = c[25], Eb = c[21], $b = D(Eb);
              c[25] = $b;
              m = c;
              m[1] = $b ? 33 : 34;
              return Z;
            }
            if (25 === l) {
              var Tc = c[20], Ea = c[11], Vb = Ea < Tc, m = c;
              m[1] = q(Vb) ? 27 : 28;
              return Z;
            }
            if (34 === l) {
              var Ed = m = c;
              Ed[2] = null;
              Ed[1] = 35;
              return Z;
            }
            if (17 === l) {
              var Fe = m = c;
              Fe[2] = null;
              Fe[1] = 18;
              return Z;
            }
            if (3 === l) {
              var Ge = c[2], m = c;
              return CC(m, Ge);
            }
            if (12 === l) {
              var nd = c[2], He = m = c;
              He[2] = nd;
              He[1] = 9;
              return Z;
            }
            if (2 === l) {
              return m = c, BC(m, 4, b);
            }
            if (23 === l) {
              var Wc = m = c;
              Wc[2] = null;
              Wc[1] = 24;
              return Z;
            }
            if (35 === l) {
              var Ma = c[2], Ie = m = c;
              Ie[2] = Ma;
              Ie[1] = 29;
              return Z;
            }
            if (19 === l) {
              var s = c[7], pb = x(s), ac = z(s), Rf = O(pb), Jb = ac, eb = pb, tb = Rf, fa = 0;
              c[13] = eb;
              c[14] = fa;
              c[15] = Jb;
              c[17] = tb;
              var Kg = m = c;
              Kg[2] = null;
              Kg[1] = 8;
              return Z;
            }
            if (11 === l) {
              var s = c[7], Jb = c[15], Sf = D(Jb);
              c[7] = Sf;
              m = c;
              m[1] = Sf ? 16 : 17;
              return Z;
            }
            if (9 === l) {
              var mf = c[2], nf = m = c;
              nf[2] = mf;
              nf[1] = 7;
              return Z;
            }
            if (5 === l) {
              var ee = M.g ? M.g(d) : M.call(null, d), Jb = D(ee), eb = null, fa = tb = 0;
              c[13] = eb;
              c[14] = fa;
              c[15] = Jb;
              c[17] = tb;
              var od = m = c;
              od[2] = null;
              od[1] = 8;
              return Z;
            }
            if (14 === l) {
              var pd = m = c;
              pd[2] = null;
              pd[1] = 15;
              return Z;
            }
            if (45 === l) {
              var Xc = c[2], Ob = m = c;
              Ob[2] = Xc;
              Ob[1] = 44;
              return Z;
            }
            if (26 === l) {
              var Xb = c[29], of = c[2], qd = D(Xb);
              c[31] = of;
              m = c;
              m[1] = qd ? 42 : 43;
              return Z;
            }
            if (16 === l) {
              var s = c[7], Lg = T(s), m = c;
              m[1] = Lg ? 19 : 20;
              return Z;
            }
            if (38 === l) {
              var Mg = c[2], pf = m = c;
              pf[2] = Mg;
              pf[1] = 35;
              return Z;
            }
            if (30 === l) {
              var Je = m = c;
              Je[2] = null;
              Je[1] = 32;
              return Z;
            }
            if (10 === l) {
              var eb = c[13], fa = c[14], Fd = v.h(eb, fa), lc = P.j(Fd, 0, null), Yc = P.j(Fd, 1, null);
              c[26] = lc;
              m = c;
              m[1] = q(Yc) ? 13 : 14;
              return Z;
            }
            if (18 === l) {
              var rd = c[2], Gd = m = c;
              Gd[2] = rd;
              Gd[1] = 12;
              return Z;
            }
            if (42 === l) {
              return m = c, BC(m, 45, f);
            }
            if (37 === l) {
              var Hc = c[23], Vc = c[25], ab = c[12], Ke = E(Vc), Tf = QC.j(Ke, ab, h);
              c[23] = Ke;
              m = c;
              m[1] = q(Tf) ? 39 : 40;
              return Z;
            }
            if (8 === l) {
              var fa = c[14], tb = c[17], Zc = fa < tb, m = c;
              m[1] = q(Zc) ? 10 : 11;
              return Z;
            }
            return null;
          };
        }(c, d, e, f, g, h), c, d, e, f, g, h);
      }(), C = function() {
        var b = y.p ? y.p() : y.call(null);
        b[6] = c;
        return b;
      }();
      return AC(C);
    };
  }(h, c, d, e, f, g));
  return d;
}(mK), fK = xg.g ? xg.g(!1) : xg.call(null, !1), gK, oK = new p(null, 3, [jo, 200, ln, !0, tp, 1], null);
gK = xg.g ? xg.g(oK) : xg.call(null, oK);
function iE() {
  return QC.h(mK, Ag.h(eK, wB));
}
function pK() {
  Ag.m(eK, R, hp, new p(null, 2, [rn, (new Date).getTime(), wn, wn.g(ap.g(M.g ? M.g(eK) : M.call(null, eK)))], null));
  var a = OC.g(1);
  oC(function(a) {
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
                      DC(c);
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
            d.p = c;
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
              var b = M.g ? M.g(gK) : M.call(null, gK), b = jo.g(b), b = LC(b), c = iE();
              a[8] = c;
              return BC(a, 7, b);
            }
            return 3 === b ? (b = a[2], CC(a, b)) : 2 === b ? (b = M.g ? M.g(fK) : M.call(null, fK), a[1] = q(b) ? 4 : 5, Z) : 1 === b ? (a[2] = null, a[1] = 2, Z) : null;
          };
        }(a), a);
      }(), d = function() {
        var d = c.p ? c.p() : c.call(null);
        d[6] = a;
        return d;
      }();
      return AC(d);
    };
  }(a));
  return a;
}
Fc(fK, tk, function(a, b, c, d) {
  return q(d) ? pK() : null;
});
function qK(a) {
  var b = Dv("#comportex-plots"), c = NB(a);
  a = function() {
    var a = new Lv(null, !0, function(a) {
      return function() {
        return new U(null, 2, 5, V, [ep, function() {
          return function(a) {
            return function G(b) {
              return new Mf(null, function() {
                return function() {
                  for (;;) {
                    var a = D(b);
                    if (a) {
                      if (T(a)) {
                        var c = x(a), d = O(c), e = Uf(d);
                        a: {
                          for (var f = 0;;) {
                            if (f < d) {
                              var g = v.h(c, f), h = "comportex-plot-" + u.g(g), g = new U(null, 3, 5, V, [Zj, new U(null, 2, 5, V, [Kn, "Region " + u.g(g)], null), new U(null, 2, 5, V, [ep, new p(null, 1, [Qp, h], null)], null)], null);
                              e.add(g);
                              f += 1;
                            } else {
                              c = !0;
                              break a;
                            }
                          }
                          c = void 0;
                        }
                        return c ? Xf(e.R(), G(z(a))) : Xf(e.R(), null);
                      }
                      e = E(a);
                      c = "comportex-plot-" + u.g(e);
                      return Td(new U(null, 3, 5, V, [Zj, new U(null, 2, 5, V, [Kn, "Region " + u.g(e)], null), new U(null, 2, 5, V, [ep, new p(null, 1, [Qp, c], null)], null)], null), G(F(a)));
                    }
                    return null;
                  }
                };
              }(a), null, null);
            };
          }(a)(zj.g(O(a)));
        }()], null);
      };
    }(c), Qj.g("computed-observable"), li, li);
    M.g ? M.g(a) : M.call(null, a);
    return a;
  }();
  b = Dv(b);
  Av(b, M.g ? M.g(a) : M.call(null, a));
  Oj(a, co, function(a, b) {
    return function() {
      return Av(b, M.g ? M.g(a) : M.call(null, a));
    };
  }(a, b, c));
  b = D(zj.g(O(c)));
  a = null;
  for (var d = 0, e = 0;;) {
    if (e < d) {
      var f = a.D(null, e), g = "comportex-plot-" + u.g(f), h = Dv("#" + u.g(g)), l = SC(qg.j(RB, function(a, b, c, d, e, f, g) {
        return function(a) {
          return P.h(a, g);
        };
      }(b, a, d, e, h, g, f, c), NB), hE()), m = YJ(l);
      Oj(m, fq, function(a, b, c, d, e) {
        return function(a, b, c, d) {
          return ZJ(e, d);
        };
      }(b, a, d, e, h, l, m, g, f, c));
      e += 1;
    } else {
      if (h = D(b)) {
        g = h;
        if (T(g)) {
          b = x(g), e = z(g), a = b, d = O(b), b = e;
        } else {
          var f = E(g), l = "comportex-plot-" + u.g(f), m = Dv("#" + u.g(l)), r = SC(qg.j(RB, function(a, b, c, d, e, f, g) {
            return function(a) {
              return P.h(a, g);
            };
          }(b, a, d, e, m, l, f, g, h, c), NB), hE()), s = YJ(r);
          Oj(s, fq, function(a, b, c, d, e) {
            return function(a, b, c, d) {
              return ZJ(e, d);
            };
          }(b, a, d, e, m, r, s, l, f, g, h, c));
          b = H(g);
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
function hK() {
  function a() {
    return aE();
  }
  return Hv.g ? Hv.g(a) : Hv.call(null, a);
}
Fc(iD, zq, function() {
  return hK();
});
Fc(bE, zq, function() {
  return hK();
});
var rK = OC.g(1);
oC(function(a) {
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
                    DC(c);
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
          g.p = c;
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
            return b = hE(), a[7] = b, a[2] = null, a[1] = 2, Z;
          }
          if (4 === b) {
            return b = a[8], b = a[2], a[8] = b, a[1] = q(b) ? 5 : 6, Z;
          }
          if (13 === b) {
            return b = a[7], a[9] = a[2], a[7] = b, a[2] = null, a[1] = 2, Z;
          }
          if (6 === b) {
            return a[2] = null, a[1] = 7, Z;
          }
          if (3 === b) {
            return b = a[2], CC(a, b);
          }
          if (12 === b) {
            return a[2] = null, a[1] = 13, Z;
          }
          if (2 === b) {
            return b = a[7], BC(a, 4, b);
          }
          if (11 === b) {
            return b = hK(), a[2] = b, a[1] = 13, Z;
          }
          if (9 === b) {
            return b = a[10], a[2] = b, a[1] = 10, Z;
          }
          if (5 === b) {
            var b = a[8], b = ap.g(b), b = wn.g(b), c = M.g ? M.g(gK) : M.call(null, gK), c = tp.g(c), g = M.g ? M.g(gK) : M.call(null, gK), g = ln.g(g);
            a[10] = g;
            a[11] = b;
            a[12] = c;
            a[1] = q(g) ? 8 : 9;
            return Z;
          }
          return 10 === b ? (b = a[2], a[1] = q(b) ? 11 : 12, Z) : 8 === b ? (b = a[11], c = a[12], a[2] = 0 === (b % c + c) % c, a[1] = 10, Z) : null;
        };
      }(a), a);
    }(), c = function() {
      var c = b.p ? b.p() : b.call(null);
      c[6] = a;
      return c;
    }();
    return AC(c);
  };
}(rK));
ma("comportexviz.main.set_model", function(a) {
  QC.h(mK, yg.h ? yg.h(eK, a) : yg.call(null, eK, a));
  new IJ(Dv("#comportex-tabs"));
  qK(a);
  gE(a);
  dK();
  iK();
  return jK();
});
var sK = new p(null, 3, [pn, 0, Ek, To, kp, 0], null);
function tK(a) {
  var b = we(a) ? S.h(vg, a) : a, c = Q.h(b, kp);
  a = Q.h(b, Ek);
  var d = Q.h(b, pn);
  if (3 > c) {
    return jh.j(b, new U(null, 1, 5, V, [kp], null), Kd);
  }
  b = B.h(a, To) ? d + 1 : d - 1;
  a = 0 === b ? To : B.h(9, b) ? jk : a;
  return new p(null, 3, [pn, b, Ek, a, kp, 1], null);
}
var uK = mB(pn, hB(300, 30, new U(null, 2, 5, V, [0, 9], null)));
ma("comportexviz.demos.block_steps.model", function() {
  return KB(EB, HE, new U(null, 1, 5, V, [new FB(sK, sK, tK, uK)], null));
});
var vK = new U(null, 2, 5, V, [0, To], null);
function wK(a) {
  var b = P.j(a, 0, null);
  a = P.j(a, 1, null);
  return B.h(a, To) ? 9 > b ? new U(null, 2, 5, V, [b + 1, To], null) : new U(null, 2, 5, V, [b - 1, jk], null) : 0 < b ? new U(null, 2, 5, V, [b - 1, jk], null) : new U(null, 2, 5, V, [b + 1, To], null);
}
var xK = mB(E, hB(300, 30, new U(null, 2, 5, V, [0, 9], null)));
ma("comportexviz.demos.simple_steps.model", function() {
  return KB(EB, HE, new U(null, 1, 5, V, [new FB(vK, vK, wK, xK)], null));
});
var yK = new U(null, 2, 5, V, [0, 10], null), zK = eh.h(function(a) {
  return R.k(a, pn, cr.g(a), L([ek, 0], 0));
}, new U(null, 3, 5, V, [new p(null, 4, [cr, 0, sr, 3, kt, Kd, lq, 3], null), new p(null, 4, [cr, 3, sr, 8, kt, Kd, lq, 4], null), new p(null, 4, [cr, 10, sr, 0, kt, af, lq, 1], null)], null));
function AK(a) {
  return eh.h(function(a) {
    return B.h(pn.g(a), sr.g(a)) ? R.k(a, pn, null, L([ek, lq.g(a) - 1], 0)) : db(pn.g(a)) && 0 < ek.g(a) ? jh.j(a, new U(null, 1, 5, V, [ek], null), af) : db(pn.g(a)) && 0 === ek.g(a) ? R.j(a, pn, cr.g(a)) : jh.j(a, new U(null, 1, 5, V, [pn], null), kt.g(a));
  }, a);
}
var BK = jB(mB(pn, hB(300, 30, yK)));
ma("comportexviz.demos.mixed_fixed_1d.model", function() {
  return KB(EB, HE, new U(null, 1, 5, V, [new FB(zK, zK, AK, BK)], null));
});

})();

//# sourceMappingURL=comportexviz.js.map