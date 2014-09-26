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
function ha(a) {
  return "string" == typeof a;
}
function ia(a) {
  return "function" == m(a);
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
function oa(a, b) {
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
  if (!qa.test(a)) {
    return a;
  }
  -1 != a.indexOf("\x26") && (a = a.replace(ra, "\x26amp;"));
  -1 != a.indexOf("\x3c") && (a = a.replace(ta, "\x26lt;"));
  -1 != a.indexOf("\x3e") && (a = a.replace(ua, "\x26gt;"));
  -1 != a.indexOf('"') && (a = a.replace(xa, "\x26quot;"));
  -1 != a.indexOf("'") && (a = a.replace(ya, "\x26#39;"));
  -1 != a.indexOf("\x00") && (a = a.replace(Aa, "\x26#0;"));
  return a;
}
var ra = /&/g, ta = /</g, ua = />/g, xa = /"/g, ya = /'/g, Aa = /\x00/g, qa = /[\x00&<>"']/;
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
var Ja;
var La = Array.prototype, Pa = La.indexOf ? function(a, b, c) {
  return La.indexOf.call(a, b, c);
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
}, Qa = La.forEach ? function(a, b, c) {
  La.forEach.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = ha(a) ? a.split("") : a, f = 0;f < d;f++) {
    f in e && b.call(c, e[f], f, a);
  }
};
function Ra(a) {
  var b = a.length;
  if (0 < b) {
    for (var c = Array(b), d = 0;d < b;d++) {
      c[d] = a[d];
    }
    return c;
  }
  return[];
}
function Sa(a, b) {
  a.sort(b || Ta);
}
function Ua(a, b) {
  for (var c = 0;c < a.length;c++) {
    a[c] = {index:c, value:a[c]};
  }
  var d = b || Ta;
  Sa(a, function(a, b) {
    return d(a.value, b.value) || a.index - b.index;
  });
  for (c = 0;c < a.length;c++) {
    a[c] = a[c].value;
  }
}
function Ta(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
}
;var Va = null;
function Wa() {
  return new p(null, 5, [Ya, !0, Za, !0, $a, !1, ab, !1, bb, null], null);
}
function q(a) {
  return null != a && !1 !== a;
}
function db(a) {
  return q(a) ? !1 : !0;
}
function eb(a, b) {
  return a[m(null == b ? null : b)] ? !0 : a._ ? !0 : !1;
}
function fb(a) {
  return null == a ? null : a.constructor;
}
function t(a, b) {
  var c = fb(b), c = q(q(c) ? c.Ca : c) ? c.Ba : m(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function gb(a) {
  var b = a.Ba;
  return q(b) ? b : "" + u.g(a);
}
function hb(a) {
  for (var b = a.length, c = Array(b), d = 0;;) {
    if (d < b) {
      c[d] = a[d], d += 1;
    } else {
      break;
    }
  }
  return c;
}
var ib = {}, jb = {};
function mb(a) {
  if (a ? a.T : a) {
    return a.T(a);
  }
  var b;
  b = mb[m(null == a ? null : a)];
  if (!b && (b = mb._, !b)) {
    throw t("ICounted.-count", a);
  }
  return b.call(null, a);
}
function nb(a) {
  if (a ? a.Y : a) {
    return a.Y(a);
  }
  var b;
  b = nb[m(null == a ? null : a)];
  if (!b && (b = nb._, !b)) {
    throw t("IEmptyableCollection.-empty", a);
  }
  return b.call(null, a);
}
var ob = {};
function pb(a, b) {
  if (a ? a.S : a) {
    return a.S(a, b);
  }
  var c;
  c = pb[m(null == a ? null : a)];
  if (!c && (c = pb._, !c)) {
    throw t("ICollection.-conj", a);
  }
  return c.call(null, a, b);
}
var rb = {}, v = function() {
  function a(a, b, c) {
    if (a ? a.oa : a) {
      return a.oa(a, b, c);
    }
    var g;
    g = v[m(null == a ? null : a)];
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
    c = v[m(null == a ? null : a)];
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
}(), sb = {};
function vb(a) {
  if (a ? a.aa : a) {
    return a.aa(a);
  }
  var b;
  b = vb[m(null == a ? null : a)];
  if (!b && (b = vb._, !b)) {
    throw t("ISeq.-first", a);
  }
  return b.call(null, a);
}
function zb(a) {
  if (a ? a.ga : a) {
    return a.ga(a);
  }
  var b;
  b = zb[m(null == a ? null : a)];
  if (!b && (b = zb._, !b)) {
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
    g = Cb[m(null == a ? null : a)];
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
    c = Cb[m(null == a ? null : a)];
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
  c = Fb[m(null == a ? null : a)];
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
  d = Gb[m(null == a ? null : a)];
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
  c = Mb[m(null == a ? null : a)];
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
  b = Qb[m(null == a ? null : a)];
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
  b = Rb[m(null == a ? null : a)];
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
  c = Yb[m(null == a ? null : a)];
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
  b = dc[m(null == a ? null : a)];
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
  d = fc[m(null == a ? null : a)];
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
  b = gc[m(null == a ? null : a)];
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
  b = ic[m(null == a ? null : a)];
  if (!b && (b = ic._, !b)) {
    throw t("IMeta.-meta", a);
  }
  return b.call(null, a);
}
var lc = {};
function mc(a, b) {
  if (a ? a.J : a) {
    return a.J(a, b);
  }
  var c;
  c = mc[m(null == a ? null : a)];
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
    g = oc[m(null == a ? null : a)];
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
    c = oc[m(null == a ? null : a)];
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
  d = pc[m(null == a ? null : a)];
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
  c = qc[m(null == a ? null : a)];
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
  b = rc[m(null == a ? null : a)];
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
  b = tc[m(null == a ? null : a)];
  if (!b && (b = tc._, !b)) {
    throw t("ISeqable.-seq", a);
  }
  return b.call(null, a);
}
var uc = {}, zc = {};
function Ac(a) {
  if (a ? a.kc : a) {
    return a.kc(a);
  }
  var b;
  b = Ac[m(null == a ? null : a)];
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
  c = Bc[m(null == a ? null : a)];
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
  d = Dc[m(null == a ? null : a)];
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
  d = Ec[m(null == a ? null : a)];
  if (!d && (d = Ec._, !d)) {
    throw t("IWatchable.-notify-watches", a);
  }
  return d.call(null, a, b, c);
}
function Jc(a, b, c) {
  if (a ? a.Uc : a) {
    return a.Uc(a, b, c);
  }
  var d;
  d = Jc[m(null == a ? null : a)];
  if (!d && (d = Jc._, !d)) {
    throw t("IWatchable.-add-watch", a);
  }
  return d.call(null, a, b, c);
}
function Kc(a, b) {
  if (a ? a.Wc : a) {
    return a.Wc(a, b);
  }
  var c;
  c = Kc[m(null == a ? null : a)];
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
  b = Lc[m(null == a ? null : a)];
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
  c = Mc[m(null == a ? null : a)];
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
  b = Nc[m(null == a ? null : a)];
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
  d = Oc[m(null == a ? null : a)];
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
  d = Pc[m(null == a ? null : a)];
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
  b = Qc[m(null == a ? null : a)];
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
  b = x[m(null == a ? null : a)];
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
  b = z[m(null == a ? null : a)];
  if (!b && (b = z._, !b)) {
    throw t("IChunkedSeq.-chunked-rest", a);
  }
  return b.call(null, a);
}
function Zc(a) {
  if (a ? a.Rc : a) {
    return a.Rc(a);
  }
  var b;
  b = Zc[m(null == a ? null : a)];
  if (!b && (b = Zc._, !b)) {
    throw t("IChunkedNext.-chunked-next", a);
  }
  return b.call(null, a);
}
function ad(a, b) {
  if (a ? a.ye : a) {
    return a.ye(a, b);
  }
  var c;
  c = ad[m(null == a ? null : a)];
  if (!c && (c = ad._, !c)) {
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
    r = bd[m(null == a ? null : a)];
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
    e = bd[m(null == a ? null : a)];
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
    d = bd[m(null == a ? null : a)];
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
    c = bd[m(null == a ? null : a)];
    if (!c && (c = bd._, !c)) {
      throw t("ISwap.-swap!", a);
    }
    return c.call(null, a, b);
  }
  var e = null, e = function(e, g, h, l, n) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, g);
      case 3:
        return c.call(this, e, g, h);
      case 4:
        return b.call(this, e, g, h, l);
      case 5:
        return a.call(this, e, g, h, l, n);
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
  a.N(null, new cd(b), Wa());
  return "" + u.g(b);
}
var ed = "undefined" !== typeof Math.imul && 0 !== (Math.imul.h ? Math.imul.h(4294967295, 5) : Math.imul.call(null, 4294967295, 5)) ? function(a, b) {
  return Math.imul.h ? Math.imul.h(a, b) : Math.imul.call(null, a, b);
} : function(a, b) {
  var c = a & 65535, d = b & 65535;
  return c * d + ((a >>> 16 & 65535) * d + c * (b >>> 16 & 65535) << 16 >>> 0) | 0;
};
function pd(a) {
  a = ed(a, 3432918353);
  return ed(a << 15 | a >>> -15, 461845907);
}
function qd(a, b) {
  var c = a ^ b;
  return ed(c << 13 | c >>> -13, 5) + 3864292196;
}
function rd(a, b) {
  var c = a ^ b, c = ed(c ^ c >>> 16, 2246822507), c = ed(c ^ c >>> 13, 3266489909);
  return c ^ c >>> 16;
}
function sd(a) {
  var b;
  a: {
    b = 1;
    for (var c = 0;;) {
      if (b < a.length) {
        var d = b + 2, c = qd(c, pd(a.charCodeAt(b - 1) | a.charCodeAt(b) << 16));
        b = d;
      } else {
        b = c;
        break a;
      }
    }
    b = void 0;
  }
  b = 1 === (a.length & 1) ? b ^ pd(a.charCodeAt(a.length - 1)) : b;
  return rd(b, ed(2, a.length));
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
  a && (a.q & 4194304 || a.te) ? a = a.P(null) : "number" === typeof a ? a = (Math.floor.g ? Math.floor.g(a) : Math.floor.call(null, a)) % 2147483647 : !0 === a ? a = 1 : !1 === a ? a = 0 : "string" === typeof a ? (a = vd(a), 0 !== a && (a = pd(a), a = qd(0, a), a = rd(a, 4))) : a = null == a ? 0 : rc(a);
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
  return this.call.apply(this, [this].concat(hb(b)));
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
  if (eb(sc, a)) {
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
  return null == a ? null : vb(a);
}
function G(a) {
  return null != a ? a && (a.q & 64 || a.lc) ? a.ga(null) : (a = D(a)) ? zb(a) : Gd : Gd;
}
function H(a) {
  return null == a ? null : a && (a.q & 128 || a.Ac) ? a.ja(null) : D(G(a));
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
      a = G(a);
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
  var c = pd(a), c = qd(0, c);
  return rd(c, b);
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
jb["null"] = !0;
mb["null"] = function() {
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
ib["function"] = !0;
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
    for (var l = mb(a);;) {
      if (d < l) {
        var n = v.h(a, d);
        c = b.h ? b.h(c, n) : b.call(null, c, n);
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
    var d = mb(a), l = c;
    for (c = 0;;) {
      if (c < d) {
        var n = v.h(a, c), l = b.h ? b.h(l, n) : b.call(null, l, n);
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
    var c = mb(a);
    if (0 === c) {
      return b.p ? b.p() : b.call(null);
    }
    for (var d = v.h(a, 0), l = 1;;) {
      if (l < c) {
        var n = v.h(a, l), d = b.h ? b.h(d, n) : b.call(null, d, n);
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
        var n = a[d];
        c = b.h ? b.h(c, n) : b.call(null, c, n);
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
        var n = a[c], l = b.h ? b.h(l, n) : b.call(null, l, n);
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
        var n = a[l], d = b.h ? b.h(d, n) : b.call(null, d, n);
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
  return a ? a.q & 2 || a.qe ? !0 : a.q ? !1 : eb(jb, a) : eb(jb, a);
}
function Qd(a) {
  return a ? a.q & 16 || a.Bd ? !0 : a.q ? !1 : eb(rb, a) : eb(rb, a);
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
  var a = mb(this);
  return 0 < a ? new Rd(this, a - 1, null) : null;
};
k.P = function() {
  return Id(this);
};
k.M = function(a, b) {
  return Sd.h ? Sd.h(this, b) : Sd.call(null, this, b);
};
k.Y = function() {
  return Gd;
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
  return this.H + 1 < this.l.length ? new Cd(this.l, this.H + 1) : Gd;
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
  return Vd.h ? Vd.h(Gd, a) : Vd.call(null, Gd, a);
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
  return 0 < this.H ? new Rd(this.vc, this.H - 1, null) : Gd;
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
var de = function() {
  function a(a, b) {
    return null != a ? pb(a, b) : pb(Gd, b);
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
      a = G(a);
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
          if (eb(jb, a)) {
            a = mb(a);
          } else {
            a: {
              a = D(a);
              for (var b = 0;;) {
                if (Pd(a)) {
                  a = b + mb(a);
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
var ee = function() {
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
    if (eb(rb, a)) {
      return v.h(a, b);
    }
    if (a ? a.q & 64 || a.lc || (a.q ? 0 : eb(sb, a)) : eb(sb, a)) {
      return ee.j(a, b, c);
    }
    throw Error("nth not supported on this type " + u.g(gb(fb(a))));
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
    if (eb(rb, a)) {
      return v.h(a, b);
    }
    if (a ? a.q & 64 || a.lc || (a.q ? 0 : eb(sb, a)) : eb(sb, a)) {
      return ee.h(a, b);
    }
    throw Error("nth not supported on this type " + u.g(gb(fb(a))));
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
    return null != a ? a && (a.q & 256 || a.Cd) ? a.L(null, b, c) : a instanceof Array ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : eb(Bb, a) ? Cb.j(a, b, c) : c : c;
  }
  function b(a, b) {
    return null == a ? null : a && (a.q & 256 || a.Cd) ? a.K(null, b) : a instanceof Array ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : eb(Bb, a) ? Cb.h(a, b) : null;
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
      var n = null;
      3 < arguments.length && (n = L(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, h, n);
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
      a = G(a);
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
      a = G(a);
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
  return q(b) ? b : a ? q(q(null) ? null : a.pe) ? !0 : a.Mf ? !1 : eb(ib, a) : eb(ib, a);
}
function ie(a, b) {
  this.o = a;
  this.C = b;
  this.G = 0;
  this.q = 393217;
}
k = ie.prototype;
k.call = function() {
  function a(a, b, c, d, e, f, g, h, l, r, n, s, w, A, y, C, F, J, I, K, N, da) {
    a = this.o;
    return S.zc ? S.zc(a, b, c, d, e, f, g, h, l, r, n, s, w, A, y, C, F, J, I, K, N, da) : S.call(null, a, b, c, d, e, f, g, h, l, r, n, s, w, A, y, C, F, J, I, K, N, da);
  }
  function b(a, b, c, d, e, f, g, h, l, r, n, s, w, A, y, C, F, J, I, K, N) {
    a = this;
    return a.o.ob ? a.o.ob(b, c, d, e, f, g, h, l, r, n, s, w, A, y, C, F, J, I, K, N) : a.o.call(null, b, c, d, e, f, g, h, l, r, n, s, w, A, y, C, F, J, I, K, N);
  }
  function c(a, b, c, d, e, f, g, h, l, r, n, s, w, A, y, C, F, J, I, K) {
    a = this;
    return a.o.nb ? a.o.nb(b, c, d, e, f, g, h, l, r, n, s, w, A, y, C, F, J, I, K) : a.o.call(null, b, c, d, e, f, g, h, l, r, n, s, w, A, y, C, F, J, I, K);
  }
  function d(a, b, c, d, e, f, g, h, l, r, n, s, w, A, y, C, F, J, I) {
    a = this;
    return a.o.mb ? a.o.mb(b, c, d, e, f, g, h, l, r, n, s, w, A, y, C, F, J, I) : a.o.call(null, b, c, d, e, f, g, h, l, r, n, s, w, A, y, C, F, J, I);
  }
  function e(a, b, c, d, e, f, g, h, l, r, n, s, w, A, y, C, F, J) {
    a = this;
    return a.o.lb ? a.o.lb(b, c, d, e, f, g, h, l, r, n, s, w, A, y, C, F, J) : a.o.call(null, b, c, d, e, f, g, h, l, r, n, s, w, A, y, C, F, J);
  }
  function f(a, b, c, d, e, f, g, h, l, r, n, s, w, A, y, C, F) {
    a = this;
    return a.o.kb ? a.o.kb(b, c, d, e, f, g, h, l, r, n, s, w, A, y, C, F) : a.o.call(null, b, c, d, e, f, g, h, l, r, n, s, w, A, y, C, F);
  }
  function g(a, b, c, d, e, f, g, h, l, r, n, s, w, A, y, C) {
    a = this;
    return a.o.jb ? a.o.jb(b, c, d, e, f, g, h, l, r, n, s, w, A, y, C) : a.o.call(null, b, c, d, e, f, g, h, l, r, n, s, w, A, y, C);
  }
  function h(a, b, c, d, e, f, g, h, l, r, n, s, w, A, y) {
    a = this;
    return a.o.ib ? a.o.ib(b, c, d, e, f, g, h, l, r, n, s, w, A, y) : a.o.call(null, b, c, d, e, f, g, h, l, r, n, s, w, A, y);
  }
  function l(a, b, c, d, e, f, g, h, l, r, n, s, w, A) {
    a = this;
    return a.o.hb ? a.o.hb(b, c, d, e, f, g, h, l, r, n, s, w, A) : a.o.call(null, b, c, d, e, f, g, h, l, r, n, s, w, A);
  }
  function n(a, b, c, d, e, f, g, h, l, r, n, s, w) {
    a = this;
    return a.o.gb ? a.o.gb(b, c, d, e, f, g, h, l, r, n, s, w) : a.o.call(null, b, c, d, e, f, g, h, l, r, n, s, w);
  }
  function r(a, b, c, d, e, f, g, h, l, r, n, s) {
    a = this;
    return a.o.fb ? a.o.fb(b, c, d, e, f, g, h, l, r, n, s) : a.o.call(null, b, c, d, e, f, g, h, l, r, n, s);
  }
  function s(a, b, c, d, e, f, g, h, l, r, n) {
    a = this;
    return a.o.eb ? a.o.eb(b, c, d, e, f, g, h, l, r, n) : a.o.call(null, b, c, d, e, f, g, h, l, r, n);
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
  function F(a, b, c, d, e, f) {
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
  function fa(a) {
    a = this;
    return a.o.p ? a.o.p() : a.o.call(null);
  }
  var J = null, J = function(J, ga, na, wa, Ha, Ea, kb, Ma, Xa, lb, Na, tb, Oa, sa, Ib, Jb, cb, ub, ea, bc, $c, cc) {
    switch(arguments.length) {
      case 1:
        return fa.call(this, J);
      case 2:
        return da.call(this, J, ga);
      case 3:
        return K.call(this, J, ga, na);
      case 4:
        return N.call(this, J, ga, na, wa);
      case 5:
        return I.call(this, J, ga, na, wa, Ha);
      case 6:
        return F.call(this, J, ga, na, wa, Ha, Ea);
      case 7:
        return C.call(this, J, ga, na, wa, Ha, Ea, kb);
      case 8:
        return y.call(this, J, ga, na, wa, Ha, Ea, kb, Ma);
      case 9:
        return A.call(this, J, ga, na, wa, Ha, Ea, kb, Ma, Xa);
      case 10:
        return w.call(this, J, ga, na, wa, Ha, Ea, kb, Ma, Xa, lb);
      case 11:
        return s.call(this, J, ga, na, wa, Ha, Ea, kb, Ma, Xa, lb, Na);
      case 12:
        return r.call(this, J, ga, na, wa, Ha, Ea, kb, Ma, Xa, lb, Na, tb);
      case 13:
        return n.call(this, J, ga, na, wa, Ha, Ea, kb, Ma, Xa, lb, Na, tb, Oa);
      case 14:
        return l.call(this, J, ga, na, wa, Ha, Ea, kb, Ma, Xa, lb, Na, tb, Oa, sa);
      case 15:
        return h.call(this, J, ga, na, wa, Ha, Ea, kb, Ma, Xa, lb, Na, tb, Oa, sa, Ib);
      case 16:
        return g.call(this, J, ga, na, wa, Ha, Ea, kb, Ma, Xa, lb, Na, tb, Oa, sa, Ib, Jb);
      case 17:
        return f.call(this, J, ga, na, wa, Ha, Ea, kb, Ma, Xa, lb, Na, tb, Oa, sa, Ib, Jb, cb);
      case 18:
        return e.call(this, J, ga, na, wa, Ha, Ea, kb, Ma, Xa, lb, Na, tb, Oa, sa, Ib, Jb, cb, ub);
      case 19:
        return d.call(this, J, ga, na, wa, Ha, Ea, kb, Ma, Xa, lb, Na, tb, Oa, sa, Ib, Jb, cb, ub, ea);
      case 20:
        return c.call(this, J, ga, na, wa, Ha, Ea, kb, Ma, Xa, lb, Na, tb, Oa, sa, Ib, Jb, cb, ub, ea, bc);
      case 21:
        return b.call(this, J, ga, na, wa, Ha, Ea, kb, Ma, Xa, lb, Na, tb, Oa, sa, Ib, Jb, cb, ub, ea, bc, $c);
      case 22:
        return a.call(this, J, ga, na, wa, Ha, Ea, kb, Ma, Xa, lb, Na, tb, Oa, sa, Ib, Jb, cb, ub, ea, bc, $c, cc);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  J.g = fa;
  J.h = da;
  J.j = K;
  J.m = N;
  J.O = I;
  J.ia = F;
  J.Aa = C;
  J.pb = y;
  J.qb = A;
  J.eb = w;
  J.fb = s;
  J.gb = r;
  J.hb = n;
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
  return this.call.apply(this, [this].concat(hb(b)));
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
k.eb = function(a, b, c, d, e, f, g, h, l, n) {
  return this.o.eb ? this.o.eb(a, b, c, d, e, f, g, h, l, n) : this.o.call(null, a, b, c, d, e, f, g, h, l, n);
};
k.fb = function(a, b, c, d, e, f, g, h, l, n, r) {
  return this.o.fb ? this.o.fb(a, b, c, d, e, f, g, h, l, n, r) : this.o.call(null, a, b, c, d, e, f, g, h, l, n, r);
};
k.gb = function(a, b, c, d, e, f, g, h, l, n, r, s) {
  return this.o.gb ? this.o.gb(a, b, c, d, e, f, g, h, l, n, r, s) : this.o.call(null, a, b, c, d, e, f, g, h, l, n, r, s);
};
k.hb = function(a, b, c, d, e, f, g, h, l, n, r, s, w) {
  return this.o.hb ? this.o.hb(a, b, c, d, e, f, g, h, l, n, r, s, w) : this.o.call(null, a, b, c, d, e, f, g, h, l, n, r, s, w);
};
k.ib = function(a, b, c, d, e, f, g, h, l, n, r, s, w, A) {
  return this.o.ib ? this.o.ib(a, b, c, d, e, f, g, h, l, n, r, s, w, A) : this.o.call(null, a, b, c, d, e, f, g, h, l, n, r, s, w, A);
};
k.jb = function(a, b, c, d, e, f, g, h, l, n, r, s, w, A, y) {
  return this.o.jb ? this.o.jb(a, b, c, d, e, f, g, h, l, n, r, s, w, A, y) : this.o.call(null, a, b, c, d, e, f, g, h, l, n, r, s, w, A, y);
};
k.kb = function(a, b, c, d, e, f, g, h, l, n, r, s, w, A, y, C) {
  return this.o.kb ? this.o.kb(a, b, c, d, e, f, g, h, l, n, r, s, w, A, y, C) : this.o.call(null, a, b, c, d, e, f, g, h, l, n, r, s, w, A, y, C);
};
k.lb = function(a, b, c, d, e, f, g, h, l, n, r, s, w, A, y, C, F) {
  return this.o.lb ? this.o.lb(a, b, c, d, e, f, g, h, l, n, r, s, w, A, y, C, F) : this.o.call(null, a, b, c, d, e, f, g, h, l, n, r, s, w, A, y, C, F);
};
k.mb = function(a, b, c, d, e, f, g, h, l, n, r, s, w, A, y, C, F, I) {
  return this.o.mb ? this.o.mb(a, b, c, d, e, f, g, h, l, n, r, s, w, A, y, C, F, I) : this.o.call(null, a, b, c, d, e, f, g, h, l, n, r, s, w, A, y, C, F, I);
};
k.nb = function(a, b, c, d, e, f, g, h, l, n, r, s, w, A, y, C, F, I, N) {
  return this.o.nb ? this.o.nb(a, b, c, d, e, f, g, h, l, n, r, s, w, A, y, C, F, I, N) : this.o.call(null, a, b, c, d, e, f, g, h, l, n, r, s, w, A, y, C, F, I, N);
};
k.ob = function(a, b, c, d, e, f, g, h, l, n, r, s, w, A, y, C, F, I, N, K) {
  return this.o.ob ? this.o.ob(a, b, c, d, e, f, g, h, l, n, r, s, w, A, y, C, F, I, N, K) : this.o.call(null, a, b, c, d, e, f, g, h, l, n, r, s, w, A, y, C, F, I, N, K);
};
k.se = function(a, b, c, d, e, f, g, h, l, n, r, s, w, A, y, C, F, I, N, K, da) {
  var fa = this.o;
  return S.zc ? S.zc(fa, a, b, c, d, e, f, g, h, l, n, r, s, w, A, y, C, F, I, N, K, da) : S.call(null, fa, a, b, c, d, e, f, g, h, l, n, r, s, w, A, y, C, F, I, N, K, da);
};
k.pe = !0;
k.J = function(a, b) {
  return new ie(this.o, b);
};
k.I = function() {
  return this.C;
};
function Vd(a, b) {
  return he(a) && !(a ? a.q & 262144 || a.De || (a.q ? 0 : eb(lc, a)) : eb(lc, a)) ? new ie(a, b) : null == a ? null : mc(a, b);
}
function je(a) {
  var b = null != a;
  return(b ? a ? a.q & 131072 || a.ve || (a.q ? 0 : eb(hc, a)) : eb(hc, a) : b) ? ic(a) : null;
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
      a = G(a);
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
  return null == a ? !1 : a ? a.q & 8 || a.Gf ? !0 : a.q ? !1 : eb(ob, a) : eb(ob, a);
}
function oe(a) {
  return null == a ? !1 : a ? a.q & 4096 || a.Kf ? !0 : a.q ? !1 : eb(Wb, a) : eb(Wb, a);
}
function pe(a) {
  return a ? a.q & 16777216 || a.Jf ? !0 : a.q ? !1 : eb(uc, a) : eb(uc, a);
}
function qe(a) {
  return null == a ? !1 : a ? a.q & 1024 || a.Hf ? !0 : a.q ? !1 : eb(Hb, a) : eb(Hb, a);
}
function re(a) {
  return a ? a.q & 16384 || a.Lf ? !0 : a.q ? !1 : eb(ec, a) : eb(ec, a);
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
  return null == a ? !1 : a ? a.q & 64 || a.lc ? !0 : a.q ? !1 : eb(sb, a) : eb(sb, a);
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
    c = a ? a.q & 512 || a.Ef ? !0 : a.q ? !1 : eb(Db, a) : eb(Db, a);
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
  if (fb(a) === fb(b)) {
    return a && (a.G & 2048 || a.xc) ? a.yc(null, b) : Ta(a, b);
  }
  throw Error("compare on non-nil objects of different types");
}
var Qe = function() {
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
function Re(a) {
  return B.h(a, zd) ? zd : function(b, c) {
    var d = a.h ? a.h(b, c) : a.call(null, b, c);
    return "number" === typeof d ? d : q(d) ? -1 : q(a.h ? a.h(c, b) : a.call(null, c, b)) ? 1 : 0;
  };
}
var Te = function() {
  function a(a, b) {
    if (D(b)) {
      var c = Se.g ? Se.g(b) : Se.call(null, b), g = Re(a);
      Ua(c, g);
      return D(c);
    }
    return Gd;
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
      return Re(b).call(null, a.g ? a.g(c) : a.call(null, c), a.g ? a.g(f) : a.call(null, f));
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
    return c && (c.q & 524288 || c.xe) ? c.da(null, a, b) : c instanceof Array ? Od.j(c, a, b) : "string" === typeof c ? Od.j(c, a, b) : eb(nc, c) ? oc.j(c, a, b) : Wd.j(a, b, c);
  }
  function b(a, b) {
    return b && (b.q & 524288 || b.xe) ? b.ca(null, a) : b instanceof Array ? Od.h(b, a) : "string" === typeof b ? Od.h(b, a) : eb(nc, b) ? oc.h(b, a) : Wd.h(a, b);
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
      a = G(a);
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
      a = G(a);
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
      a = G(a);
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
      a = G(a);
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
function vf(a) {
  return df(a);
}
function wf(a, b) {
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
      a = G(a);
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
  return Gd;
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
  return 1 === this.count ? Gd : this.ub;
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
  return Gd;
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
var Gd = new Gf(null);
function Hf(a) {
  return(a ? a.q & 134217728 || a.If || (a.q ? 0 : eb(zc, a)) : eb(zc, a)) ? Ac(a) : Ve.j(de, Gd, a);
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
    for (var e = Gd;;) {
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
  return Vd(Gd, this.C);
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
  return null == this.ub ? Gd : this.ub;
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
  return this.call.apply(this, [this].concat(hb(b)));
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
  return Vd(Gd, this.C);
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
  return null != this.Z ? G(this.Z) : Gd;
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
  var a = new Tf(this.ua, 0, this.end);
  this.ua = null;
  return a;
};
function Uf(a) {
  return new Of(Array(a), 0);
}
function Tf(a, b, c) {
  this.l = a;
  this.ha = b;
  this.end = c;
  this.G = 0;
  this.q = 524306;
}
k = Tf.prototype;
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
  return new Tf(this.l, this.ha + 1, this.end);
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
    return new Tf(a, b, c);
  }
  function b(a, b) {
    return new Tf(a, b, a.length);
  }
  function c(a) {
    return new Tf(a, 0, a.length);
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
  if (1 < mb(this.R)) {
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
  return Vd(Gd, this.C);
};
k.aa = function() {
  return v.h(this.R, 0);
};
k.ga = function() {
  return 1 < mb(this.R) ? new Wf(Qc(this.R), this.Pa, this.C, null) : null == this.Pa ? Gd : this.Pa;
};
k.Q = function() {
  return this;
};
k.Sc = function() {
  return this.R;
};
k.Tc = function() {
  return null == this.Pa ? Gd : this.Pa;
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
  return 0 === mb(a) ? b : new Wf(a, b, null, null);
}
function Yf(a, b) {
  a.add(b);
}
function Se(a) {
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
      return c ? T(c) ? Xf(x(c), d.h(z(c), b)) : Td(E(c), d.h(G(c), b)) : b;
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
          return c ? T(c) ? Xf(x(c), s(z(c), b)) : Td(E(c), s(G(c), b)) : q(b) ? s(E(b), H(b)) : null;
        }, null, null);
      }(d.h(a, c), e);
    }
    a.w = 2;
    a.n = function(a) {
      var c = E(a);
      a = H(a);
      var d = E(a);
      a = G(a);
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
    function a(c, d, e, n, r) {
      var s = null;
      4 < arguments.length && (s = L(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, n, s);
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
      a = G(a);
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
      a = G(a);
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
      a = G(a);
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
  c = vb(d);
  var e = zb(d);
  if (1 === b) {
    return a.g ? a.g(c) : a.g ? a.g(c) : a.call(null, c);
  }
  var d = vb(e), f = zb(e);
  if (2 === b) {
    return a.h ? a.h(c, d) : a.h ? a.h(c, d) : a.call(null, c, d);
  }
  var e = vb(f), g = zb(f);
  if (3 === b) {
    return a.j ? a.j(c, d, e) : a.j ? a.j(c, d, e) : a.call(null, c, d, e);
  }
  var f = vb(g), h = zb(g);
  if (4 === b) {
    return a.m ? a.m(c, d, e, f) : a.m ? a.m(c, d, e, f) : a.call(null, c, d, e, f);
  }
  var g = vb(h), l = zb(h);
  if (5 === b) {
    return a.O ? a.O(c, d, e, f, g) : a.O ? a.O(c, d, e, f, g) : a.call(null, c, d, e, f, g);
  }
  var h = vb(l), n = zb(l);
  if (6 === b) {
    return a.ia ? a.ia(c, d, e, f, g, h) : a.ia ? a.ia(c, d, e, f, g, h) : a.call(null, c, d, e, f, g, h);
  }
  var l = vb(n), r = zb(n);
  if (7 === b) {
    return a.Aa ? a.Aa(c, d, e, f, g, h, l) : a.Aa ? a.Aa(c, d, e, f, g, h, l) : a.call(null, c, d, e, f, g, h, l);
  }
  var n = vb(r), s = zb(r);
  if (8 === b) {
    return a.pb ? a.pb(c, d, e, f, g, h, l, n) : a.pb ? a.pb(c, d, e, f, g, h, l, n) : a.call(null, c, d, e, f, g, h, l, n);
  }
  var r = vb(s), w = zb(s);
  if (9 === b) {
    return a.qb ? a.qb(c, d, e, f, g, h, l, n, r) : a.qb ? a.qb(c, d, e, f, g, h, l, n, r) : a.call(null, c, d, e, f, g, h, l, n, r);
  }
  var s = vb(w), A = zb(w);
  if (10 === b) {
    return a.eb ? a.eb(c, d, e, f, g, h, l, n, r, s) : a.eb ? a.eb(c, d, e, f, g, h, l, n, r, s) : a.call(null, c, d, e, f, g, h, l, n, r, s);
  }
  var w = vb(A), y = zb(A);
  if (11 === b) {
    return a.fb ? a.fb(c, d, e, f, g, h, l, n, r, s, w) : a.fb ? a.fb(c, d, e, f, g, h, l, n, r, s, w) : a.call(null, c, d, e, f, g, h, l, n, r, s, w);
  }
  var A = vb(y), C = zb(y);
  if (12 === b) {
    return a.gb ? a.gb(c, d, e, f, g, h, l, n, r, s, w, A) : a.gb ? a.gb(c, d, e, f, g, h, l, n, r, s, w, A) : a.call(null, c, d, e, f, g, h, l, n, r, s, w, A);
  }
  var y = vb(C), F = zb(C);
  if (13 === b) {
    return a.hb ? a.hb(c, d, e, f, g, h, l, n, r, s, w, A, y) : a.hb ? a.hb(c, d, e, f, g, h, l, n, r, s, w, A, y) : a.call(null, c, d, e, f, g, h, l, n, r, s, w, A, y);
  }
  var C = vb(F), I = zb(F);
  if (14 === b) {
    return a.ib ? a.ib(c, d, e, f, g, h, l, n, r, s, w, A, y, C) : a.ib ? a.ib(c, d, e, f, g, h, l, n, r, s, w, A, y, C) : a.call(null, c, d, e, f, g, h, l, n, r, s, w, A, y, C);
  }
  var F = vb(I), N = zb(I);
  if (15 === b) {
    return a.jb ? a.jb(c, d, e, f, g, h, l, n, r, s, w, A, y, C, F) : a.jb ? a.jb(c, d, e, f, g, h, l, n, r, s, w, A, y, C, F) : a.call(null, c, d, e, f, g, h, l, n, r, s, w, A, y, C, F);
  }
  var I = vb(N), K = zb(N);
  if (16 === b) {
    return a.kb ? a.kb(c, d, e, f, g, h, l, n, r, s, w, A, y, C, F, I) : a.kb ? a.kb(c, d, e, f, g, h, l, n, r, s, w, A, y, C, F, I) : a.call(null, c, d, e, f, g, h, l, n, r, s, w, A, y, C, F, I);
  }
  var N = vb(K), da = zb(K);
  if (17 === b) {
    return a.lb ? a.lb(c, d, e, f, g, h, l, n, r, s, w, A, y, C, F, I, N) : a.lb ? a.lb(c, d, e, f, g, h, l, n, r, s, w, A, y, C, F, I, N) : a.call(null, c, d, e, f, g, h, l, n, r, s, w, A, y, C, F, I, N);
  }
  var K = vb(da), fa = zb(da);
  if (18 === b) {
    return a.mb ? a.mb(c, d, e, f, g, h, l, n, r, s, w, A, y, C, F, I, N, K) : a.mb ? a.mb(c, d, e, f, g, h, l, n, r, s, w, A, y, C, F, I, N, K) : a.call(null, c, d, e, f, g, h, l, n, r, s, w, A, y, C, F, I, N, K);
  }
  da = vb(fa);
  fa = zb(fa);
  if (19 === b) {
    return a.nb ? a.nb(c, d, e, f, g, h, l, n, r, s, w, A, y, C, F, I, N, K, da) : a.nb ? a.nb(c, d, e, f, g, h, l, n, r, s, w, A, y, C, F, I, N, K, da) : a.call(null, c, d, e, f, g, h, l, n, r, s, w, A, y, C, F, I, N, K, da);
  }
  var J = vb(fa);
  zb(fa);
  if (20 === b) {
    return a.ob ? a.ob(c, d, e, f, g, h, l, n, r, s, w, A, y, C, F, I, N, K, da, J) : a.ob ? a.ob(c, d, e, f, g, h, l, n, r, s, w, A, y, C, F, I, N, K, da, J) : a.call(null, c, d, e, f, g, h, l, n, r, s, w, A, y, C, F, I, N, K, da, J);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var S = function() {
  function a(a, b, c, d, e) {
    b = cg.m(b, c, d, e);
    c = a.w;
    return a.n ? (d = Zf(b, c + 1), d <= c ? hg(a, d, b) : a.n(b)) : a.apply(a, Se(b));
  }
  function b(a, b, c, d) {
    b = cg.j(b, c, d);
    c = a.w;
    return a.n ? (d = Zf(b, c + 1), d <= c ? hg(a, d, b) : a.n(b)) : a.apply(a, Se(b));
  }
  function c(a, b, c) {
    b = cg.h(b, c);
    c = a.w;
    if (a.n) {
      var d = Zf(b, c + 1);
      return d <= c ? hg(a, d, b) : a.n(b);
    }
    return a.apply(a, Se(b));
  }
  function d(a, b) {
    var c = a.w;
    if (a.n) {
      var d = Zf(b, c + 1);
      return d <= c ? hg(a, d, b) : a.n(b);
    }
    return a.apply(a, Se(b));
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
      return a.n ? (e = Zf(c, d + 1), e <= d ? hg(a, e, c) : a.n(c)) : a.apply(a, Se(c));
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
      a = G(a);
      return b(c, d, e, f, g, a);
    };
    a.k = b;
    return a;
  }(), e = function(e, h, l, n, r, s) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, h);
      case 3:
        return c.call(this, e, h, l);
      case 4:
        return b.call(this, e, h, l, n);
      case 5:
        return a.call(this, e, h, l, n, r);
      default:
        return f.k(e, h, l, n, r, L(arguments, 5));
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
      var F = null;
      6 < arguments.length && (F = L(Array.prototype.slice.call(arguments, 6), 0));
      return b.call(this, c, d, e, f, g, h, F);
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
      a = G(a);
      return b(c, d, e, f, g, h, a);
    };
    a.k = b;
    return a;
  }(), f = function(f, l, n, r, s, w, A) {
    switch(arguments.length) {
      case 2:
        return e.call(this, f, l);
      case 3:
        return d.call(this, f, l, n);
      case 4:
        return c.call(this, f, l, n, r);
      case 5:
        return b.call(this, f, l, n, r, s);
      case 6:
        return a.call(this, f, l, n, r, s, w);
      default:
        return g.k(f, l, n, r, s, w, L(arguments, 6));
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
      a = G(a);
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
        a = G(a);
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
      function n(d) {
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
        function h(d, l, r, n) {
          d = S.O(c, d, l, r, n);
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
          a = G(a);
          return h(b, c, d, a);
        };
        d.k = h;
        return d;
      }(), s = function(a, b, c, e) {
        switch(arguments.length) {
          case 0:
            return r.call(this);
          case 1:
            return n.call(this, a);
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
      s.g = n;
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
      function n() {
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
          a = G(a);
          return d(b, c, e, a);
        };
        c.k = d;
        return c;
      }(), r = function(a, b, e, f) {
        switch(arguments.length) {
          case 0:
            return n.call(this);
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
      r.p = n;
      r.g = l;
      r.h = d;
      r.j = c;
      r.k = s.k;
      return r;
    }();
  }
  var c = null, d = function() {
    function a(c, d, e, n) {
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
      a = G(a);
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
      a = G(a);
      return b(c, d, e, f, a);
    };
    a.k = b;
    return a;
  }(), d = function(d, g, h, l, n) {
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
          for (var h = x(g), l = O(h), n = Uf(l), r = 0;;) {
            if (r < l) {
              Yf(n, function() {
                var d = b + r, f = v.h(h, r);
                return a.h ? a.h(d, f) : a.call(null, d, f);
              }()), r += 1;
            } else {
              break;
            }
          }
          return Xf(n.R(), d(b + l, z(g)));
        }
        return Td(function() {
          var d = E(g);
          return a.h ? a.h(b, d) : a.call(null, b, d);
        }(), d(b + 1, G(g)));
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
          for (var g = x(f), h = O(g), l = Uf(h), n = 0;;) {
            if (n < h) {
              var r = function() {
                var b = v.h(g, n);
                return a.g ? a.g(b) : a.call(null, b);
              }();
              null != r && l.add(r);
              n += 1;
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
        return null == h ? c.h(a, G(f)) : Td(h, c.h(a, G(f)));
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
      var l = b, n = c;
      a.m ? a.m(h, this, l, n) : a.call(null, h, this, l, n);
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
      a = G(a);
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
  return ad(a, b);
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
      a = G(a);
      return b(c, d, e, f, a);
    };
    a.k = b;
    return a;
  }(), d = function(d, g, h, l, n) {
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
          return null == s ? g(b + 1, G(e)) : Td(s, g(b + 1, G(e)));
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
          var n = null, n = function(a, b) {
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
          n.p = l;
          n.g = h;
          n.h = g;
          return n;
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
        var C = E(s), F = E(w);
        y = a.j ? a.j(y, C, F) : a.call(null, y, C, F);
        f = A(y, e.m(a, G(f), G(s), G(w)));
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
        d = s(w, e.j(a, G(d), G(f)));
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
        }(), e.h(a, G(c)));
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
            a = G(a);
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
          return lg(Xe, b) ? Td(e.h(E, b), C(e.h(G, b))) : null;
        }, null, null);
      };
      return e.h(function() {
        return function(b) {
          return S.h(a, b);
        };
      }(h), h(de.k(g, f, L([d, c], 0))));
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
      a = G(a);
      return b(c, d, e, f, a);
    };
    a.k = b;
    return a;
  }(), e = function(e, h, l, n, r) {
    switch(arguments.length) {
      case 1:
        return d.call(this, e);
      case 2:
        return c.call(this, e, h);
      case 3:
        return b.call(this, e, h, l);
      case 4:
        return a.call(this, e, h, l, n);
      default:
        return f.k(e, h, l, n, L(arguments, 4));
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
        return f ? Td(E(f), c.h(a - 1, G(f))) : null;
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
          var n = null, n = function(a, b) {
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
          n.p = l;
          n.g = d;
          n.h = c;
          return n;
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
          var d = a - 1, c = G(c);
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
          var n = null, n = function(a, b) {
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
          n.p = l;
          n.g = d;
          n.h = c;
          return n;
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
}(), Tg = function() {
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
      return f && g ? Td(E(f), Td(E(g), b.h(G(f), G(g)))) : null;
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
        var c = Cg.h(D, de.k(e, d, L([a], 0)));
        return lg(Xe, c) ? bg.h(Cg.h(E, c), S.h(b, Cg.h(G, c))) : null;
      }, null, null);
    }
    a.w = 2;
    a.n = function(a) {
      var b = E(a);
      a = H(a);
      var d = E(a);
      a = G(a);
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
      a = G(a);
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
          for (var g = x(f), h = O(g), l = Uf(h), n = 0;;) {
            if (n < h) {
              var r;
              r = v.h(g, n);
              r = a.g ? a.g(r) : a.call(null, r);
              q(r) && (r = v.h(g, n), l.add(r));
              n += 1;
            } else {
              break;
            }
          }
          return Xf(l.R(), c.h(a, z(f)));
        }
        g = E(f);
        f = G(f);
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
  }, G(bh(pe, D, a)));
}
var dh = function() {
  function a(a, b, c) {
    return a && (a.G & 4 || a.re) ? Vd(eg(Ye.m(b, fg, Lc(a), c)), je(a)) : Ye.m(b, de, a, c);
  }
  function b(a, b) {
    return null != a ? a && (a.G & 4 || a.re) ? Vd(eg(Ve.j(Mc, Lc(a), b)), je(a)) : Ve.j(pb, a, b) : Ve.j(de, Gd, b);
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
      a = G(a);
      return b(c, d, e, f, a);
    };
    a.k = b;
    return a;
  }(), d = function(d, g, h, l, n) {
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
        var n = Dg.h(a, l);
        return a === O(n) ? Td(n, d.m(a, b, c, Eg.h(b, l))) : pb(Gd, Dg.h(a, bg.h(n, c)));
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
        if (h ? h.q & 256 || h.Cd || (h.q ? 0 : eb(Bb, h)) : eb(Bb, h)) {
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
      a = G(a);
      return b(c, d, e, f, g, y, a);
    };
    a.k = b;
    return a;
  }(), e = function(e, h, l, n, r, s, w) {
    switch(arguments.length) {
      case 3:
        return d.call(this, e, h, l);
      case 4:
        return c.call(this, e, h, l, n);
      case 5:
        return b.call(this, e, h, l, n, r);
      case 6:
        return a.call(this, e, h, l, n, r, s);
      default:
        return f.k(e, h, l, n, r, s, L(arguments, 6));
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
  var f = new kh(d.V, hb(d.l)), g = b.t - 1 >>> c & 31;
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
  var g = new kh(d.V, hb(d.l));
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
    return mh(this) <= b ? (a = hb(this.U), a[b & 31] = c, new U(this.C, this.t, this.shift, this.root, a, null)) : new U(this.C, this.t, this.shift, uh(this, this.shift, this.root, b, c), this.U, null);
  }
  if (b === this.t) {
    return pb(this, c);
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
  return this.call.apply(this, [this].concat(hb(b)));
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
  return Zc(this);
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
    return null == a ? Gd : a;
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
  if (a < mb(this.Ja)) {
    var b = this.Ja, c = rh(this.Ja, a);
    return yh.m ? yh.m(b, c, a, 0) : yh.call(null, b, c, a, 0);
  }
  return Gd;
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
  if (a < mb(this.Ja)) {
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
  return this.call.apply(this, [this].concat(hb(b)));
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
  return a === b.V ? b : new kh(a, hb(b.l));
}
function wh(a) {
  return new kh({}, hb(a.l));
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
  return this.call.apply(this, [this].concat(hb(b)));
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
            var n = b >>> a & 31, r = f(a - 5, l.l[n]);
            l.l[n] = r;
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
function $h(a, b, c, d) {
  this.C = a;
  this.Ma = b;
  this.Cb = c;
  this.A = d;
  this.G = 0;
  this.q = 31850572;
}
k = $h.prototype;
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
  return Vd(Gd, this.C);
};
k.aa = function() {
  return E(this.Ma);
};
k.ga = function() {
  var a = H(this.Ma);
  return a ? new $h(this.C, a, this.Cb, null) : null == this.Cb ? nb(this) : new $h(this.C, this.Cb, null, null);
};
k.Q = function() {
  return this;
};
k.J = function(a, b) {
  return new $h(b, this.Ma, this.Cb, this.A);
};
k.S = function(a, b) {
  return Td(b, this);
};
function ai(a, b, c, d, e) {
  this.C = a;
  this.count = b;
  this.Ma = c;
  this.Cb = d;
  this.A = e;
  this.q = 31858766;
  this.G = 8192;
}
k = ai.prototype;
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
  return bi;
};
k.aa = function() {
  return E(this.Ma);
};
k.ga = function() {
  return G(D(this));
};
k.Q = function() {
  var a = D(this.Cb), b = this.Ma;
  return q(q(b) ? b : a) ? new $h(null, this.Ma, D(a), null) : null;
};
k.J = function(a, b) {
  return new ai(b, this.count, this.Ma, this.Cb, this.A);
};
k.S = function(a, b) {
  var c;
  q(this.Ma) ? (c = this.Cb, c = new ai(this.C, this.count + 1, this.Ma, de.h(q(c) ? c : Zd, b), null)) : c = new ai(this.C, this.count + 1, de.h(this.Ma, b), Zd, null);
  return c;
};
var bi = new ai(null, 0, null, Zd, 0);
function ci() {
  this.G = 0;
  this.q = 2097152;
}
ci.prototype.M = function() {
  return!1;
};
var di = new ci;
function ei(a, b) {
  return xe(qe(b) ? O(a) === O(b) ? lg(Xe, Cg.h(function(a) {
    return B.h(Q.j(b, E(a), di), Xd(a));
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
  return Vd(Gd, this.na);
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
  return this.H < this.l.length - 2 ? new ii(this.l, this.H + 2, this.na) : Gd;
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
  return new ki({}, this.l.length, hb(this.l));
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
      return nb(this);
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
  b = hb(this.l);
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
  return this.call.apply(this, [this].concat(hb(b)));
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
    if (b ? b.q & 2048 || b.ue || (b.q ? 0 : eb(Pb, b)) : eb(Pb, b)) {
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
    return this.ac = !1, new p(null, wf(this.ec, 2), this.l, null);
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
    return wf(this.ec, 2);
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
    a = hb(a);
    a[b] = c;
    a[g] = h;
    return a;
  }
  function b(a, b, c) {
    a = hb(a);
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
      var n = this.bc(a), r = n.l;
      f.B = !0;
      ue(r, 2 * h, r, 2 * (h + 1), 2 * (l - h));
      r[2 * h] = d;
      r[2 * h + 1] = e;
      n.X |= g;
      return n;
    }
    if (16 <= l) {
      g = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      g[c >>> b & 31] = yi.Xa(a, b + 5, c, d, e, f);
      for (n = h = 0;;) {
        if (32 > h) {
          0 !== (this.X >>> h & 1) && (g[h] = null != this.l[n] ? yi.Xa(a, b + 5, wd(this.l[n]), this.l[n], this.l[n + 1], f) : this.l[n + 1], n += 2), h += 1;
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
    n = this.bc(a);
    n.l = r;
    n.X |= g;
    return n;
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
  var n = this.l[2 * g], r = this.l[2 * g + 1];
  if (null == n) {
    return h = r.Wa(a + 5, b, c, d, e), h === r ? this : new wi(null, this.X, si.j(this.l, 2 * g + 1, h));
  }
  if (ri(c, n)) {
    return d === r ? this : new wi(null, this.X, si.j(this.l, 2 * g + 1, d));
  }
  e.B = !0;
  return new wi(null, this.X, si.O(this.l, 2 * g, null, 2 * g + 1, function() {
    var e = a + 5;
    return Ai.ia ? Ai.ia(e, n, r, b, c, d) : Ai.call(null, e, n, r, b, c, d);
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
  return a === this.V ? this : new zi(a, this.t, hb(this.l));
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
  return-1 === a ? this : 1 === this.t ? null : new Di(null, this.sb, this.t - 1, ti(this.l, wf(a, 2)));
};
var Ai = function() {
  function a(a, b, c, g, h, l, n) {
    var r = wd(c);
    if (r === h) {
      return new Di(null, r, 2, [c, g, l, n]);
    }
    var s = new qi;
    return yi.Xa(a, b, r, c, g, s).Xa(a, b, h, l, n, s);
  }
  function b(a, b, c, g, h, l) {
    var n = wd(b);
    if (n === g) {
      return new Di(null, n, 2, [b, c, h, l]);
    }
    var r = new qi;
    return yi.Wa(a, n, b, c, r).Wa(a, g, h, l, r);
  }
  var c = null, c = function(c, e, f, g, h, l, n) {
    switch(arguments.length) {
      case 6:
        return b.call(this, c, e, f, g, h, l);
      case 7:
        return a.call(this, c, e, f, g, h, l, n);
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
  return Vd(Gd, this.C);
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
  return Vd(Gd, this.C);
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
  return this.call.apply(this, [this].concat(hb(b)));
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
    if (b ? b.q & 2048 || b.ue || (b.q ? 0 : eb(Pb, b)) : eb(Pb, b)) {
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
      b = c ? a.left : a.right, d = de.h(d, a), a = b;
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
  return Vd(Gd, this.C);
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
  return null != a ? new Li(null, a, this.sc, this.t - 1, null) : Gd;
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
  return pb(pb(Gd, this.B), this.key);
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
  return this.call.apply(this, [this].concat(hb(b)));
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
  return pb(pb(Gd, this.B), this.key);
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
  return this.call.apply(this, [this].concat(hb(b)));
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
  return this.call.apply(this, [this].concat(hb(b)));
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
    for (var e = D(b), f = new bj(Re(a), null, 0, null, 0);;) {
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
    a = G(a);
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
  var a = this.la, a = (a ? a.q & 128 || a.Ac || (a.q ? 0 : eb(Ab, a)) : eb(Ab, a)) ? this.la.ja(null) : H(this.la);
  return null == a ? null : new fj(a, this.na);
};
k.P = function() {
  return Id(this);
};
k.M = function(a, b) {
  return Sd(this, b);
};
k.Y = function() {
  return Vd(Gd, this.na);
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
  var a = this.la, a = (a ? a.q & 128 || a.Ac || (a.q ? 0 : eb(Ab, a)) : eb(Ab, a)) ? this.la.ja(null) : H(this.la);
  return null != a ? new fj(a, this.na) : Gd;
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
  var a = this.la, a = (a ? a.q & 128 || a.Ac || (a.q ? 0 : eb(Ab, a)) : eb(Ab, a)) ? this.la.ja(null) : H(this.la);
  return null == a ? null : new hj(a, this.na);
};
k.P = function() {
  return Id(this);
};
k.M = function(a, b) {
  return Sd(this, b);
};
k.Y = function() {
  return Vd(Gd, this.na);
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
  var a = this.la, a = (a ? a.q & 128 || a.Ac || (a.q ? 0 : eb(Ab, a)) : eb(Ab, a)) ? this.la.ja(null) : H(this.la);
  return null != a ? new hj(a, this.na) : Gd;
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
      return de.h(q(a) ? a : li, b);
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
    a = G(a);
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
  return mb(this.Kb);
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
  return new rj(Lc(this.Kb));
};
k.Y = function() {
  return Vd(sj, this.C);
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
  return this.call.apply(this, [this].concat(hb(b)));
};
k.g = function(a) {
  return this.K(null, a);
};
k.h = function(a, b) {
  return this.L(null, a, b);
};
var sj = new mj(null, li, 0);
function tj(a) {
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
    for (c = 0, d = Lc(sj);;) {
      if (c < b) {
        e = c + 1, d = Mc(d, a[c]), c = e;
      } else {
        return Nc(d);
      }
    }
  }
}
function rj(a) {
  this.vb = a;
  this.q = 259;
  this.G = 136;
}
k = rj.prototype;
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
  return this.call.apply(this, [this].concat(hb(b)));
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
function uj(a) {
  a = D(a);
  if (null == a) {
    return sj;
  }
  if (a instanceof Cd && 0 === a.H) {
    a = a.l;
    a: {
      for (var b = 0, c = Lc(sj);;) {
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
  for (d = Lc(sj);;) {
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
function vj(a, b) {
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
      var n = null;
      3 < arguments.length && (n = L(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, h, n);
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
      a = G(a);
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
      var n = null;
      3 < arguments.length && (n = L(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, h, n);
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
      a = G(a);
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
  if (b < mb(this)) {
    return this.start + b * this.step;
  }
  if (this.start > this.end && 0 === this.step) {
    return this.start;
  }
  throw Error("Index out of bounds");
};
k.oa = function(a, b, c) {
  return b < mb(this) ? this.start + b * this.step : this.start > this.end && 0 === this.step ? this.start : c;
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
  return Vd(Gd, this.C);
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
  return null != tc(this) ? new yj(this.C, this.start + this.step, this.end, this.step, null) : Gd;
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
      }(), G(g)) : null;
    }, null, null));
  }
  function b(a, b) {
    return new Mf(null, function() {
      var f = D(b);
      return f ? c.j(a, E(f), G(f)) : pb(Gd, a.p ? a.p() : a.call(null));
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
  var h = Va;
  try {
    Va = null == Va ? null : Va - 1;
    if (null != Va && 0 > Va) {
      return Bc(a, "#");
    }
    Bc(a, c);
    if (D(g)) {
      var l = E(g);
      b.j ? b.j(l, a, f) : b.call(null, l, a, f);
    }
    for (var n = H(g), r = bb.g(f) - 1;;) {
      if (!n || null != r && 0 === r) {
        D(n) && 0 === r && (Bc(a, d), Bc(a, "..."));
        break;
      } else {
        Bc(a, d);
        var s = E(n);
        c = a;
        g = f;
        b.j ? b.j(s, c, g) : b.call(null, s, c, g);
        var w = H(n);
        c = r - 1;
        n = w;
        r = c;
      }
    }
    return Bc(a, e);
  } finally {
    Va = h;
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
    a = G(a);
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
    return q(c) ? (c = b ? b.q & 131072 || b.ve ? !0 : b.q ? !1 : eb(hc, b) : eb(hc, b)) ? je(b) : c : c;
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
  if (fb(b) === Boolean || "number" === typeof b) {
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
  }, Hj.k(c, L(['#inst "', "" + u.g(b.getUTCFullYear()), "-", e(b.getUTCMonth() + 1, 2), "-", e(b.getUTCDate(), 2), "T", e(b.getUTCHours(), 2), ":", e(b.getUTCMinutes(), 2), ":", e(b.getUTCSeconds(), 2), ".", e(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0))) : b instanceof RegExp ? Hj.k(c, L(['#"', b.source, '"'], 0)) : (b ? b.q & 2147483648 || b.W || (b.q ? 0 : eb(Cc, b)) : eb(Cc, b)) ? Dc(b, c, d) : Hj.k(c, L(["#\x3c", "" + u.g(b), "\x3e"], 0));
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
    var b = Wa();
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
$h.prototype.W = !0;
$h.prototype.N = function(a, b, c) {
  return Gj(b, Mj, "(", " ", ")", c, this);
};
Gf.prototype.W = !0;
Gf.prototype.N = function(a, b) {
  return Bc(b, "()");
};
ai.prototype.W = !0;
ai.prototype.N = function(a, b, c) {
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
  return Qe.h(this, b);
};
Dh.prototype.xc = !0;
Dh.prototype.yc = function(a, b) {
  return Qe.h(this, b);
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
  Jc(a, b, c);
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
    return gg.j(b, e, de.h(Q.j(b, e, Zd), d));
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
uk = new W(null, "a#sim-faster", "a#sim-faster", 1179722499), vk = new W(null, "span#sim-timestep", "span#sim-timestep", -764964893), wk = new W(null, "transform", "transform", 1381301764), $a = new W(null, "meta", "meta", 1499536964), xk = new W(null, "selected", "selected", 574897764), yk = new W(null, "dx", "dx", -381796732), zk = new W(null, "seg-h-space-px", "seg-h-space-px", 1353315204), wm = new W(null, "max-synapse-count", "max-synapse-count", -2061271132), xm = new W(null, "scroll-top", 
"scroll-top", -46723100), ym = new W(null, "scroll-counter", "scroll-counter", 628002885), ab = new W(null, "dup", "dup", 556298533), zm = new W(null, "dir", "dir", 1734754661), Am = new W(null, "g.ticks", "g.ticks", 28507493), Bm = new W(null, "temporal-pooling", "temporal-pooling", 240992677), Cm = new W(null, "segment-idx", "segment-idx", -248867259), Dm = new W(null, "key", "key", -1516042587), Em = new W(null, "sp-perm-dec", "sp-perm-dec", 855246789), Fm = new W(null, "index", "index", -1531685915), 
Gm = new W(null, "bottom", "bottom", -1550509018), Hm = new W(null, "max-segments", "max-segments", -157037498), Im = new W(null, "encoder", "encoder", -1113127834), Jm = new W(null, "button#sim-start", "button#sim-start", -924760922), Km = new W(null, "exit", "exit", 351849638), Lm = new W(null, "disconnected", "disconnected", -1908014586), Mm = new W(null, "cull", "cull", -1824785850), Nm = new W(null, "boost-active-duty-ratio", "boost-active-duty-ratio", 891850342), Om = new W(null, "temporal-pooling-scores", 
"temporal-pooling-scores", 415441191), Pm = new W(null, "lat-synapses", "lat-synapses", 1341366663), Qm = new W(null, "button#sim-reset", "button#sim-reset", -1103042169), Rm = new W(null, "top", "top", -1856271961), Sm = new W(null, "derefed", "derefed", 590684583), Tm = new W(null, "prev-predictive-cells-by-column", "prev-predictive-cells-by-column", -2129217881), Um = new W(null, "text.label", "text.label", 210580295), Vm = new W(null, "yellow", "yellow", -881035449), wg = new W(null, "validator", 
"validator", -1966190681), Wm = new W(null, "highlight", "highlight", -800930873), Xm = new W(null, "cid", "cid", -1940591320), Ym = new W(null, "line.rule", "line.rule", -722114232), Zm = new W(null, "button#anim-step", "button#anim-step", 1065036136), $m = new W(null, "seg-h-px", "seg-h-px", -443969112), an = new W(null, "finally-block", "finally-block", 832982472), bn = new W(null, "h-space-px", "h-space-px", -766035480), cn = new W(null, "col-shrink", "col-shrink", -1043182072), dn = new W(null, 
"learn-segments", "learn-segments", 1869208392), Y = new W(null, "columns", "columns", 1998437288), en = new W(null, "a#anim-slower", "a#anim-slower", -2103660568), fn = new W(null, "w", "w", 354169001), gn = new W("org.nfrac.comportex.sequence-memory", "lat-index", "org.nfrac.comportex.sequence-memory/lat-index", 1157726441), hn = new W(null, "sy", "sy", 227523849), jn = new W(null, "element-h", "element-h", -1458880151), kn = new W(null, "anim-go?", "anim-go?", 1109067401), ln = new W(null, "dt", 
"dt", -368444759), mn = new W(null, "formatter", "formatter", -483008823), nn = new W(null, "parent-watchables", "parent-watchables", -319854903), on = new W(null, "value", "value", 305978217), pn = new W(null, "green", "green", -945526839), qn = new W(null, "time", "time", 1385887882), rn = new W(null, "fieldset#anim-controls", "fieldset#anim-controls", 750977322), sn = new W(null, "mapping", "mapping", -1242405430), tn = new W(null, "page-up", "page-up", 1352555050), un = new W(null, "regions", 
"regions", -1023815958), vn = new W(null, "timestep", "timestep", -1557942486), wn = new W(null, "dirty?", "dirty?", -2059845846), xn = new W(null, "potential-frac", "potential-frac", -148706518), yn = new W(null, "y1", "y1", 589123466), zn = new W(null, "width", "width", -384071477), An = new W(null, "new-synapse-count", "new-synapse-count", -1667854133), Bn = new W(null, "a#sim-slower", "a#sim-slower", -8187669), Cn = new W(null, "background", "background", -863952629), Dn = new W(null, "button#sim-step", 
"button#sim-step", -991688373), En = new W(null, "dy", "dy", 1719547243), Fn = new W(null, "connected", "connected", -169833045), Gn = new W(null, "p.detail", "p.detail", -259333685), Hn = new W(null, "submit", "submit", -49315317), In = new W(null, "active-duty-cycles", "active-duty-cycles", -2100410837), Jn = new W(null, "legend", "legend", -1027192245), Kn = new W(null, "permanence-inc", "permanence-inc", 562267755), Ln = new W(null, "shrink", "shrink", 1415287595), Mn = new W(null, "orientation", 
"orientation", 623557579), Nn = new W(null, "fieldset#viz-options", "fieldset#viz-options", -957799412), On = new W(null, "predictive", "predictive", 742235276), Pn = new W(null, "potential-radius", "potential-radius", -1950363476), Qn = new W(null, "signal-cells", "signal-cells", -451652436), Rn = new W(null, "draw-steps", "draw-steps", -100988692), Z = new W(null, "recur", "recur", -437573268), Sn = new W(null, "type", "type", 1174270348), Tn = new W("comportexviz.viz-canvas", "acols", "comportexviz.viz-canvas/acols", 
1747707340), Un = new W(null, "update", "update", 1045576396), Vn = new W(null, "catch-block", "catch-block", 1175212748), Wn = new W(null, "twos", "twos", 709888876), Xn = new W(null, "state", "state", -1988618099), Yn = new W(null, "g.timestep", "g.timestep", -1438660275), Zn = new W(null, "input-size", "input-size", -731983507), $n = new W(null, "major-tick-width", "major-tick-width", -401901043), ao = new W("comportexviz.viz-canvas", "abits", "comportexviz.viz-canvas/abits", -1378531795), bo = 
new W(null, "update-dom", "update-dom", 1414664877), co = new W(null, "bursting?", "bursting?", -1793074515), eo = new W(null, "span.detail", "span.detail", -1905752307), fo = new W(null, "span#sim-ms-text", "span#sim-ms-text", -117079187), Ya = new W(null, "flush-on-newline", "flush-on-newline", -151457939), go = new W(null, "overlap-duty-cycles", "overlap-duty-cycles", 1224111053), ho = new W(null, "segments", "segments", 1937535949), io = new W(null, "sim-step-ms", "sim-step-ms", -1192536083), 
jo = new W(null, "button#anim-start", "button#anim-start", 373847086), ko = new W(null, "synapses", "synapses", -614206130), lo = new W(null, "learn-cells", "learn-cells", -1536897586), mo = new W(null, "all", "all", 892129742), yo = new W(null, "active-columns", "active-columns", 1479134862), zo = new W(null, "activation-threshold", "activation-threshold", -1175546194), Po = new W(null, "span#anim-every-text", "span#anim-every-text", -815816561), Qo = new W(null, "l", "l", 1395893423), Ro = new W(null, 
"seed", "seed", 68613327), So = new W(null, "up", "up", -269712113), To = new W("zip", "make-node", "zip/make-node", 1103800591), Uo = new W(null, "canvas", "canvas", -1798817489), Vo = new W(null, "ncol", "ncol", 1778338447), Wo = new W(null, "enter", "enter", 1792452624), Xo = new W(null, "bit-h-px", "bit-h-px", -1081204688), Yo = new W(null, "demote", "demote", 2088906896), Zo = new W(null, "learning", "learning", 612366512), $o = new W(null, "region", "region", 270415120), ap = new W(null, "style", 
"style", -496642736), bp = new W(null, "clamp?", "clamp?", 249465200), cp = new W(null, "ts", "ts", 1617209904), dp = new W(null, "div", "div", 1057191632), ep = new W(null, "signal-up", "signal-up", 737301232), fp = new W(null, "option", "option", 65132272), Za = new W(null, "readably", "readably", 1129599760), gp = new W(null, "run-start", "run-start", 1984981840), hp = new W(null, "activation", "activation", 2128521072), ip = new W("comportexviz.viz-canvas", "tpcols", "comportexviz.viz-canvas/tpcols", 
500403377), jp = new W(null, "counter", "counter", 804008177), kp = new W(null, "key-fn", "key-fn", -636154479), lp = new W(null, "spec", "spec", 347520401), mp = new W(null, "g", "g", 1738089905), np = new W(null, "button#anim-stop", "button#anim-stop", -279088527), op = new W(null, "random-double", "random-double", -922602767), pp = new W(null, "active-predicted", "active-predicted", -72115407), qp = new W(null, "click", "click", 1912301393), rp = new W(null, "cp1x", "cp1x", 465245137), sp = new W(null, 
"anim-every", "anim-every", 1633754642), tp = new W(null, "max-boost", "max-boost", 608482834), up = new W(null, "signal-promote", "signal-promote", 1378242482), vp = new W(null, "label-margin", "label-margin", -17690670), wp = new W(null, "cp2x", "cp2x", -1682644749), xp = new W(null, "line", "line", 212345235), yp = new W(null, "stimulus-threshold", "stimulus-threshold", -1548749389), zp = new W("comportexviz.viz-canvas", "pbits", "comportexviz.viz-canvas/pbits", 1988133491), Ap = new W(null, "div#comportex-drawing", 
"div#comportex-drawing", 1638716307), Bp = new W(null, "active-cells", "active-cells", -1277925485), Cp = new W(null, "g.plot-space", "g.plot-space", -1258275917), Dp = new W(null, "sp-perm-inc", "sp-perm-inc", -2023460909), Ep = new W(null, "punish?", "punish?", -1890284492), Fp = new W(null, "h", "h", 1109658740), Gp = new W(null, "from", "from", 1815293044), Hp = new W(null, "temporal-pooling-amp", "temporal-pooling-amp", 1075315892), Ip = new W(null, "a#anim-faster", "a#anim-faster", -1294334764), 
bb = new W(null, "print-length", "print-length", 1931866356), Jp = new W(null, "max", "max", 61366548), Kp = new W(null, "initial-perm", "initial-perm", -411437740), Lp = new W(null, "active", "active", 1895962068), Mp = new W(null, "activation-level", "activation-level", -1385123308), Np = new W(null, "overlaps", "overlaps", 1398230580), Op = new W(null, "label", "label", 1718410804), Pp = new W(null, "id", "id", -1388402092), Qp = new W(null, "class", "class", -2030961996), Rp = new W(null, "predictive-cells", 
"predictive-cells", 1817662164), Sp = new W(null, "red", "red", -969428204), Tp = new W(null, "connected-perm", "connected-perm", 807367508), Up = new W(null, "blue", "blue", -622100620), Vp = new W(null, "extent", "extent", -186399820), Wp = new W(null, "catch-exception", "catch-exception", -1997306795), Xp = new W(null, "opts", "opts", 155075701), Yp = new W(null, "neighbour-radius", "neighbour-radius", -1736587083), Zp = new W(null, "init-value", "init-value", -374892331), $p = new W("comportexviz.viz-canvas", 
"pcols", "comportexviz.viz-canvas/pcols", 1740826069), aq = new W(null, "checked", "checked", -50955819), bq = new W(null, "left-px", "left-px", -745883979), cq = new W(null, "predictive-cells-by-column", "predictive-cells-by-column", 1557480149), dq = new W(null, "ts-plot", "ts-plot", -1498457323), eq = new W(null, "global-inhibition", "global-inhibition", -936260811), fq = new W(null, "temporal-pooling-decay", "temporal-pooling-decay", -968469707), gq = new W(null, "pnodes", "pnodes", 1739080565), 
hq = new W(null, "prev", "prev", -1597069226), iq = new W(null, "svg", "svg", 856789142), jq = new W(null, "gap", "gap", 80255254), kq = new W(null, "changed?", "changed?", -437828330), lq = new W(null, "span.parameter-label", "span.parameter-label", -815265354), mq = new W(null, "length", "length", 588987862), nq = new W(null, "button#sim-stop", "button#sim-stop", 1477647862), oq = new W(null, "continue-block", "continue-block", -1852047850), pq = new W(null, "span#sim-reset-status", "span#sim-reset-status", 
1741880118), qq = new W(null, "potential-radius-frac", "potential-radius-frac", 584722487), rq = new W(null, "cp1y", "cp1y", 628283543), sq = new W(null, "div#comportex-controls", "div#comportex-controls", -1291722569), tq = new W(null, "div#comportex-parameters", "div#comportex-parameters", 737276119), uq = new W(null, "right", "right", -452581833), vq = new W(null, "ticks", "ticks", -406190313), wq = new W(null, "dw", "dw", -821060841), xq = new W(null, "redraw", "redraw", -1075394793), yq = new W(null, 
"display", "display", 242065432), zq = new W(null, "cell-ids", "cell-ids", -236000104), Aq = new W(null, "drawing", "drawing", 1181749528), Bq = new W(null, "f", "f", -1597136552), Cq = new W(null, "sx", "sx", -403071592), Dq = new W(null, "cell-id", "cell-id", 1789875608), Eq = new W(null, "saw-10-15", "saw-10-15", 953187768), Fq = new W(null, "depth", "depth", 1768663640), Gq = new W(null, "br", "br", 934104792), Hq = new W(null, "rev-5-1", "rev-5-1", -252300392), Iq = new W(null, "define-me!", 
"define-me!", -268367591), Jq = new W(null, "x", "x", 2099068185), Kq = new W(null, "subs", "subs", -186681991), Lq = new W(null, "x1", "x1", -1863922247), Mq = new W(null, "bit-w-px", "bit-w-px", -531552775), Nq = new W(null, "form", "form", -1624062471), Oq = new W(null, "tag", "tag", -1290361223), Pq = new W(null, "predicted", "predicted", 2110738041), Qq = new W(null, "res", "res", -1395007879), Rq = new W(null, "sh", "sh", -682444007), Sq = new W(null, "capture", "capture", -677031143), Tq = 
new W(null, "sw", "sw", 833113913), Uq = new W(null, "domain", "domain", 1847214937), Vq = new W(null, "input", "input", 556931961), Wq = new W(null, "cp2y", "cp2y", 903335801), Xq = new W(null, "uuid", "uuid", -2145095719), Yq = new W(null, "seq", "seq", -1817803783), Zq = new W(null, "cells", "cells", -985166822), $q = new W(null, "keep-n", "keep-n", -176064454), ar = new W(null, "first", "first", -644103046), br = new W(null, "sp-perm-signal-inc", "sp-perm-signal-inc", 452393306), cr = new W(null, 
"change", "change", -1163046502), dr = new W(null, "page-down", "page-down", -392838598), er = new W(null, "purple", "purple", -876021126), fr = new W(null, "end", "end", -268185958), gr = new W(null, "sp-perm-connected", "sp-perm-connected", -1835817957), hr = new W(null, "y2", "y2", -718691301), ir = new W(null, "circles?", "circles?", -1676300005), jr = new W(null, "temporal-pooling-cells", "temporal-pooling-cells", 85401979), kr = new W(null, "jump-6-12", "jump-6-12", -1217478725), lr = new W(null, 
"bursting-columns", "bursting-columns", -896519076), mr = new W("comportexviz.viz-canvas", "cache", "comportexviz.viz-canvas/cache", 33193148), nr = new W(null, "force-update?", "force-update?", 137364796), or = new W(null, "duty-cycle-period", "duty-cycle-period", -962296356), bt = new W(null, "min-threshold", "min-threshold", -1451318820), ct = new W(null, "last", "last", 1105735132), dt = new W("org.nfrac.comportex.pooling", "ff-index", "org.nfrac.comportex.pooling/ff-index", -1375909380), et = 
new W(null, "permanences", "permanences", -1713734116), ft = new W("org.nfrac.comportex.core", "no-matching-UUID!", "org.nfrac.comportex.core/no-matching-UUID!", 1023231548), gt = new W("comportexviz.viz-canvas", "ocols", "comportexviz.viz-canvas/ocols", -2081286436), ht = new W(null, "rect", "rect", -108902628), it = new W(null, "step", "step", 1288888124), jt = new W(null, "p", "p", 151049309), kt = new W(null, "x2", "x2", -1362513475), lt = new W(null, "run-6-10", "run-6-10", 295893118), mt = 
new W(null, "href", "href", -793805698), nt = new W(null, "none", "none", 1333468478), ot = new W(null, "bucket", "bucket", 1126218366), pt = new W(null, "elements-per-dt", "elements-per-dt", 703850270), qt = new W(null, "col-d-px", "col-d-px", -985327682), rt = new W(null, "bit-shrink", "bit-shrink", -1161684994), st = new W(null, "range", "range", 1639692286), tt = new W(null, "height", "height", 1025178622), ut = new W(null, "select", "select", 1147833503), vt = new W(null, "promote", "promote", 
-1158882145), wt = new W(null, "skip", "skip", 602715391), xt = new W(null, "cell-r-px", "cell-r-px", 423637311), yt = new W(null, "left", "left", -399115937), lj = new W("cljs.core", "not-found", "cljs.core/not-found", -1572889185), zt = new W(null, "text", "text", -1790561697), At = new W(null, "element-w", "element-w", 2089708127), Bt = new W(null, "span", "span", 1394872991), Ct = new W(null, "margin", "margin", -995903681), Dt = new W(null, "data", "data", -232669377);
function Et(a, b) {
  var c = S.j(wj, a, b);
  return Td(c, ah.h(function(a) {
    return function(b) {
      return a === b;
    };
  }(c), b));
}
var Ft = function() {
  function a(a, b) {
    return O(a) < O(b) ? Ve.j(de, b, a) : Ve.j(de, a, b);
  }
  var b = null, c = function() {
    function a(c, d, h) {
      var l = null;
      2 < arguments.length && (l = L(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      a = Et(O, de.k(d, c, L([a], 0)));
      return Ve.j(dh, E(a), G(a));
    }
    a.w = 2;
    a.n = function(a) {
      var c = E(a);
      a = H(a);
      var d = E(a);
      a = G(a);
      return b(c, d, a);
    };
    a.k = b;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 0:
        return sj;
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
    return sj;
  };
  b.g = function(a) {
    return a;
  };
  b.h = a;
  b.k = c.k;
  return b;
}(), Gt = function() {
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
      a = Et(function(a) {
        return-O(a);
      }, de.k(e, d, L([a], 0)));
      return Ve.j(b, E(a), G(a));
    }
    a.w = 2;
    a.n = function(a) {
      var b = E(a);
      a = H(a);
      var d = E(a);
      a = G(a);
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
}(), Ht = function() {
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
      return Ve.j(b, a, de.h(e, d));
    }
    a.w = 2;
    a.n = function(a) {
      var b = E(a);
      a = H(a);
      var d = E(a);
      a = G(a);
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
  function n() {
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
    var y = [], N = l(h(f ? [a, r(b)] : 0 in arguments ? a : n(), 3), y), K = new g(y);
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
function It(a) {
  if (a ? a.xd : a) {
    return a.xd();
  }
  var b;
  b = It[m(null == a ? null : a)];
  if (!b && (b = It._, !b)) {
    throw t("IRandom.-next-double", a);
  }
  return b.call(null, a);
}
var Jt = function() {
  function a(a, b) {
    if (a ? a.zd : a) {
      return a.zd(0, b);
    }
    var c;
    c = Jt[m(null == a ? null : a)];
    if (!c && (c = Jt._, !c)) {
      throw t("IRandom.-next-int", a);
    }
    return c.call(null, a, b);
  }
  function b(a) {
    if (a ? a.yd : a) {
      return a.yd();
    }
    var b;
    b = Jt[m(null == a ? null : a)];
    if (!b && (b = Jt._, !b)) {
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
function Kt(a, b, c) {
  return b + (a.p ? a.p() : a.call(null)) * (c - b);
}
function Lt(a, b, c, d) {
  this.seed = a;
  this.Ra = b;
  this.F = c;
  this.v = d;
  this.q = 2229667594;
  this.G = 8192;
  2 < arguments.length ? (this.F = c, this.v = d) : this.v = this.F = null;
}
k = Lt.prototype;
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
  }(this), "#cemerick.pprng.SeededRandom{", ", ", "}", c, bg.h(new U(null, 2, 5, V, [new U(null, 2, 5, V, [Ro, this.seed], null), new U(null, 2, 5, V, [op, this.Ra], null)], null), this.v));
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
  return ye(new mj(null, new p(null, 2, [Ro, null, op, null], null), null), b) ? ge.h(Vd(dh.h(li, this), this.F), b) : new Lt(this.seed, this.Ra, this.F, kg(ge.h(this.v, b)), null);
};
k.va = function(a, b, c) {
  return q(X.h ? X.h(Ro, b) : X.call(null, Ro, b)) ? new Lt(c, this.Ra, this.F, this.v, null) : q(X.h ? X.h(op, b) : X.call(null, op, b)) ? new Lt(this.seed, c, this.F, this.v, null) : new Lt(this.seed, this.Ra, this.F, R.j(this.v, b, c), null);
};
k.Q = function() {
  return D(bg.h(new U(null, 2, 5, V, [new U(null, 2, 5, V, [Ro, this.seed], null), new U(null, 2, 5, V, [op, this.Ra], null)], null), this.v));
};
k.J = function(a, b) {
  return new Lt(this.seed, this.Ra, b, this.v, this.A);
};
k.S = function(a, b) {
  return re(b) ? Gb(this, v.h(b, 0), v.h(b, 1)) : Ve.j(pb, this, b);
};
k.xd = function() {
  return this.Ra.p ? this.Ra.p() : this.Ra.call(null);
};
k.yd = function() {
  return vf(Kt(this.Ra, -2147483648, 2147483647));
};
k.zd = function(a, b) {
  return vf(Kt(this.Ra, 0, b));
};
var Mt = function() {
  function a(a, b) {
    return Jt.h(a, b);
  }
  function b(a) {
    return Jt.g(a);
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
var Nt = function() {
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
}(), Ot = function() {
  function a(a) {
    Math.seedrandom.g ? Math.seedrandom.g(a) : Math.seedrandom.call(null, a);
    Math.seedrandom.g ? Math.seedrandom.g(a) : Math.seedrandom.call(null, a);
    return new Lt(a, Math.random);
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
}().p(), Pt = function() {
  function a(a, b) {
    if (!(a < b)) {
      throw Error("Assert failed: " + u.g(zg.k(L([If(new Ad(null, "\x3c", "\x3c", 993667236, null), new Ad(null, "lower", "lower", -1534114948, null), new Ad(null, "upper", "upper", 1886775433, null))], 0))));
    }
    return a + It(Ot) * (b - a);
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
function Qt(a) {
  return 0 + Mt.h(Ot, a - 0);
}
function Rt(a) {
  a = Cg.j(If, Tg.g(function() {
    return It(Ot);
  }), a);
  return Cg.h(Xd, Ue.h(E, a));
}
function St(a, b) {
  return Ve.j(function(b, d) {
    return q(a.g ? a.g(d) : a.call(null, d)) ? b + 1 : b;
  }, 0, b);
}
function Tt(a, b) {
  return eg(Ve.j(function(a, b) {
    var e = P.j(b, 0, null), f = P.j(b, 1, null);
    return gg.j(a, e, Nc(f));
  }, Lc(li), eg(Ve.j(function(b, d) {
    var e = P.j(d, 0, null), f = P.j(d, 1, null), g = a.h ? a.h(e, f) : a.call(null, e, f), h = Q.j(b, g, Lc(li));
    return gg.j(b, g, gg.j(h, e, f));
  }, Lc(li), b))));
}
function Ut(a) {
  return eg(Ve.j(function(a, c) {
    var d = P.j(c, 0, null), e = P.j(c, 1, null);
    return gg.j(a, d, Nc(e));
  }, Lc(li), eg(Ve.j(function(a, c) {
    var d = E.g ? E.g(c) : E.call(null, c), e = Q.j(a, d, Lc(sj));
    return gg.j(a, d, fg.h(e, c));
  }, Lc(li), a))));
}
function Vt(a, b, c) {
  return db(D(b)) ? a : eg(Ve.j(function(a, b) {
    return gg.j(a, b, function() {
      var f = Q.h(a, b);
      return c.g ? c.g(f) : c.call(null, f);
    }());
  }, Lc(a), b));
}
function Wt(a, b) {
  return dh.h(function() {
    var a = null == b ? null : nb(b);
    return q(a) ? a : li;
  }(), eh.h(function(b) {
    var d = P.j(b, 0, null);
    b = P.j(b, 1, null);
    return new U(null, 2, 5, V, [d, a.g ? a.g(b) : a.call(null, b)], null);
  }, b));
}
;var Xt = fe([kk, wm, Hm, An, Kn, zo, Ep, Kp, Tp, Fq, bt], [.1, 22, 5, 15, .1, 12, !0, .11, .5, 8, 8]);
function Yt(a, b) {
  var c = P.j(b, 0, null);
  return P.j(b, 1, null) + c * a;
}
function Zt(a, b, c) {
  b = Yt(b, c);
  return gh.h(a, new U(null, 2, 5, V, [gn, b], null));
}
function $t(a, b, c, d, e, f) {
  var g = lp.g(a), h = Kn.g(g), l = kk.g(g), n = Tp.g(g), r = gh.h(a, new U(null, 7, 5, V, [Y, b, Zq, c, ho, d, ko], null)), s = Tt(function(a, b, c, d) {
    return function(a, g) {
      return q(e.g ? e.g(a) : e.call(null, a)) ? wt : q(f.g ? f.g(a) : f.call(null, a)) ? 1 === g ? wt : g < d && g >= d - b ? vt : So : g <= c ? Mm : g >= d && g < d + c ? Yo : jk;
    };
  }(g, h, l, n, r), r), w = ij.k(L([wt.g(s), Wt(function(a, b) {
    return function(a) {
      a += b;
      return 1 > a ? a : 1;
    };
  }(g, h, l, n, r, s), So.g(s)), Wt(function(a, b) {
    return function(a) {
      a += b;
      return 1 > a ? a : 1;
    };
  }(g, h, l, n, r, s), vt.g(s)), Wt(function(a, b, c) {
    return function(a) {
      return a - c;
    };
  }(g, h, l, n, r, s), jk.g(s)), Wt(function(a, b, c) {
    return function(a) {
      return a - c;
    };
  }(g, h, l, n, r, s), Yo.g(s))], 0)), A = new U(null, 3, 5, V, [b, c, d], null), y = rg.h(Yt, Fq.g(g)), C = Cg.h(y, gj(vt.g(s))), F = Cg.h(y, gj(Yo.g(s))), g = Vt(Vt(gn.g(a), C, function(a, b, c, d, e, f, g, h) {
    return function(a) {
      return de.h(a, h);
    };
  }(g, h, l, n, r, s, w, A, y, C, F)), F, function(a, b, c, d, e, f, g, h) {
    return function(a) {
      return le.h(a, h);
    };
  }(g, h, l, n, r, s, w, A, y, C, F));
  return R.j(ih(a, new U(null, 7, 5, V, [Y, b, Zq, c, ho, d, ko], null), w), gn, g);
}
function au(a, b, c, d, e) {
  var f = lp.g(a), g = rg.h(Yt, Fq.g(f)), h = Cg.h(g, e), l = new U(null, 3, 5, V, [b, c, d], null);
  return jh.O(jh.j(a, new U(null, 7, 5, V, [Y, b, Zq, c, ho, d, ko], null), function() {
    return function(a) {
      return S.j(ge, a, e);
    };
  }(f, g, h, l)), new U(null, 1, 5, V, [gn], null), Vt, h, function(a, b, c, d) {
    return function(a) {
      return le.h(a, d);
    };
  }(f, g, h, l));
}
function bu(a, b, c, d, e) {
  var f = lp.g(a), g = Kp.g(f), h = Tp.g(f), l = wm.g(f), n = rg.h(Yt, Fq.g(f)), r = Cg.h(n, e), s = new U(null, 3, 5, V, [b, c, d], null), w = gh.h(a, new U(null, 7, 5, V, [Y, b, Zq, c, ho, d, ko], null));
  e = ij.k(L([w, vj(e, Fg.g(g))], 0));
  a = ih(a, new U(null, 7, 5, V, [Y, b, Zq, c, ho, d, ko], null), e);
  f = g >= h ? jh.O(a, new U(null, 1, 5, V, [gn], null), Vt, r, function(a, b, c, d, e, f, g, h) {
    return function(a) {
      return de.h(a, h);
    };
  }(a, f, g, h, l, n, r, s, w, e)) : a;
  return O(e) > l ? au(f, b, c, d, Dg.h(O(e) - l, gj(Ue.h(Ef, e)))) : f;
}
function cu(a, b) {
  return new p(null, 2, [Pp, new U(null, 2, 5, V, [b, a], null), ho, Zd], null);
}
function du(a, b) {
  var c = we(b) ? S.h(vg, b) : b, c = Q.h(c, Fq);
  return R.j(a, Zq, eh.j(cu, zj.g(c), Fg.g(Pp.g(a))));
}
function eu(a, b, c) {
  return St(function(a) {
    var e = P.j(a, 0, null);
    return(a = P.j(a, 1, null) >= c) ? b.g ? b.g(e) : b.call(null, e) : a;
  }, ko.g(a));
}
function fu(a, b, c, d) {
  return Bg.h(function(a, f) {
    var g = eu(f, b, d);
    return g >= c ? R.k(f, hp, g, L([Cm, a], 0)) : null;
  }, ho.g(a));
}
function gu(a, b) {
  var c = lp.g(a), d = zo.g(c), e = Fq.g(c);
  return dh.h(sj, tg.h(function(a, b) {
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
  }(c, d, e), Aj(Zg.k(rg.j(Zt, a, e), L([b], 0)))));
}
function hu(a, b) {
  var c = gj(b), d = Y.g(a);
  return eg(Ve.j(function(a, b) {
    return function(c, d) {
      var l = b.g ? b.g(d) : b.call(null, d), n = Fn.g(dk.g(l));
      return Ve.j(function() {
        return function(a, b) {
          return gg.j(a, b, Q.j(a, b, 0) + 1);
        };
      }(l, n, a, b), c, gj(n));
    };
  }(c, d), Lc(li), c));
}
function iu(a, b, c, d) {
  c = ij.k(L([c, d], 0));
  return dh.h(li, Cg.h(function(b) {
    return function(c) {
      var d = P.h(Y.g(a), c), h = b.g ? b.g(c) : b.call(null, c), l = me(h), d = l ? Cg.h(Pp, Zq.g(d)) : h;
      return new U(null, 2, 5, V, [c, new p(null, 2, [zq, d, co, l], null)], null);
    };
  }(c), b));
}
function ju(a, b, c) {
  a = fu(a, b, 0, c);
  return D(a) ? S.j(wj, hp, a) : new p(null, 2, [Cm, null, hp, 0], null);
}
function ku(a, b, c) {
  c = bt.g(c);
  var d = Cg.h(function() {
    return function(a) {
      return R.j(ju(a, b, 0), Dq, Pp.g(a));
    };
  }(c), a), d = S.j(wj, hp, d);
  return hp.g(d) >= c ? d : new p(null, 1, [Dq, Pp.g(S.j(xj, qg.h(O, ho), a))], null);
}
function lu(a, b, c) {
  var d = lp.g(a), e = Hm.g(d), f = wm.g(d), g = bt.g(d), h = Tp.g(d);
  a = gh.h(a, new U(null, 5, 5, V, [Y, b, Zq, c, ho], null));
  if (O(a) >= e) {
    return S.j(xj, function(a, b, c, d, e, f) {
      return function(g) {
        g = ko.g(Q.h(f, g));
        return St(function(a, b, c, d, e, f) {
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
      return O(ko.g(a)) < d ? b : null;
    };
  }(d, e, f, g, h, a), sg(Ah, a));
  return q(d) ? d : O(a);
}
function mu(a, b, c, d) {
  a = ko.g(a);
  b = dh.h(tj([b]), Cg.h(E, gj(a)));
  return Dg.h(d, Rt(ah.h(function(a, b) {
    return function(a) {
      var c = P.j(a, 0, null);
      P.j(a, 1, null);
      return b.g ? b.g(c) : b.call(null, c);
    };
  }(a, b), c)));
}
function nu(a, b, c, d) {
  var e = lp.g(a), f = zo.g(e), g = Tp.g(e), h = gh.h(a, new U(null, 4, 5, V, [Y, b, Zq, c], null)), l = fu(h, d, f, g);
  return Ve.j(function() {
    return function(a, e) {
      var f = Cm.g(e);
      return $t(a, b, c, f, d, pg(!1));
    };
  }(e, f, g, h, l), a, l);
}
function ou(a, b, c, d) {
  b = Ht.h(d, b);
  return Ve.j(function() {
    return function(a, b) {
      var d = P.j(b, 0, null), h = P.j(b, 1, null);
      return nu(a, d, h, c);
    };
  }(b), a, b);
}
function pu(a, b, c, d, e, f) {
  return q(c) ? (P.j(c, 0, null), b = P.j(c, 1, null), b = Q.h(Zq.g(a), b), pb(Gd, ku(new U(null, 1, 5, V, [b], null), e, f))) : q(b) ? pb(Gd, ku(Zq.g(a), e, f)) : function(b) {
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
                      var F = v.h(f, C), I = F;
                      P.j(I, 0, null);
                      I = P.j(I, 1, null);
                      I = P.h(Zq.g(a), I);
                      F = R.j(ju(I, e, b), Dq, F);
                      y.add(F);
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
              f = P.h(Zq.g(a), f);
              return Td(R.j(ju(f, e, b), Dq, y), l(G(d)));
            }
            return null;
          }
        };
      }(b), null, null);
    };
  }(Tp.g(f))(d);
}
function qu(a, b, c, d, e, f, g) {
  if (q(d)) {
    return a = $t(a, b, c, d, pg(!1), g), q(e) ? (e = new U(null, 6, 5, V, [Y, b, Zq, c, ho, d], null), g = eu(e, g, 0), g = An.g(lp.g(a)) - g, b = 0 < g ? bu(a, b, c, d, mu(e, b, f, g)) : a) : b = a, b;
  }
  d = lp.g(a);
  g = An.g(d);
  e = bt.g(d);
  d = lu(a, b, c);
  f = mu(new p(null, 1, [ko, li], null), b, f, g);
  O(f) < e ? b = a : (g = gh.h(a, new U(null, 7, 5, V, [Y, b, Zq, c, ho, d, ko], null)), a = D(g) ? au(a, b, c, d, gj(g)) : a, b = bu(a, b, c, d, f));
  return b;
}
function ru(a, b, c, d, e, f, g) {
  var h = lo.h(a, sj), l = lp.g(a);
  a = R.k(a, lo, sj, L([dn, li], 0));
  b = We(function(a, b, c) {
    return function(f, h, l) {
      var C = we(l) ? S.h(vg, l) : l, F = Q.h(C, zq), I = gh.h(f, new U(null, 2, 5, V, [Y, h], null)), N = d.g ? d.g(h) : d.call(null, h), K = E(g.g ? g.g(h) : g.call(null, h)), da = pu(I, N, K, F, e, b);
      return Ve.j(function(a, b, c, d, f, g, l, r) {
        return function(a, c) {
          var d = we(c) ? S.h(vg, c) : c, f = Q.h(d, Cm), d = Q.h(d, Dq);
          P.j(d, 0, null);
          d = P.j(d, 1, null);
          return jh.O(jh.m(qu(a, h, d, f, b, r, e), new U(null, 1, 5, V, [lo], null), de, new U(null, 2, 5, V, [h, d], null)), new U(null, 1, 5, V, [dn], null), R, new U(null, 2, 5, V, [h, d], null), f);
        };
      }(I, N, K, da, l, C, F, a, b, c), f, da);
    };
  }(h, l, a), a, b);
  return q(Ep.g(l)) ? ou(b, c, e, f) : b;
}
function su(a, b, c) {
  var d = Bp.h(a, sj), e = Rp.h(a, sj), f = cq.h(a, li), g = jr.h(a, sj), h = gj(Om.h(a, li)), l = kj(Sj(E, g), h);
  b = iu(a, b, f, l);
  var g = uj(tg.h(function() {
    return function(a) {
      var b = P.j(a, 0, null);
      a = P.j(a, 1, null);
      return q(co.g(a)) ? b : null;
    };
  }(d, e, f, g, h, l, b), b)), n = uj(Zg.k(zq, L([ji(b)], 0))), h = uj(Zg.k(qg.h(zq, b), L([h], 0))), r = uj(Zg.k(zq, L([ji(S.j(ge, b, g))], 0))), s = gu(a, n), w = Ut(s);
  a = R.k(a, Bp, n, L([lr, g, Qn, r, jr, h, Rp, s, cq, w, Tm, f], 0));
  return q(c) ? ru(a, b, n, g, d, e, l) : a;
}
;function tu(a) {
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
;var uu;
a: {
  var vu = aa.navigator;
  if (vu) {
    var wu = vu.userAgent;
    if (wu) {
      uu = wu;
      break a;
    }
  }
  uu = "";
}
;var xu = -1 != uu.indexOf("Opera") || -1 != uu.indexOf("OPR"), yu = -1 != uu.indexOf("Trident") || -1 != uu.indexOf("MSIE"), zu = -1 != uu.indexOf("Gecko") && -1 == uu.toLowerCase().indexOf("webkit") && !(-1 != uu.indexOf("Trident") || -1 != uu.indexOf("MSIE")), Au = -1 != uu.toLowerCase().indexOf("webkit");
function Bu() {
  var a = aa.document;
  return a ? a.documentMode : void 0;
}
var Cu = function() {
  var a = "", b;
  if (xu && aa.opera) {
    return a = aa.opera.version, ia(a) ? a() : a;
  }
  zu ? b = /rv\:([^\);]+)(\)|;)/ : yu ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : Au && (b = /WebKit\/(\S+)/);
  b && (a = (a = b.exec(uu)) ? a[1] : "");
  return yu && (b = Bu(), b > parseFloat(a)) ? String(b) : a;
}(), Du = {};
function Eu(a) {
  var b;
  if (!(b = Du[a])) {
    b = 0;
    for (var c = String(Cu).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), f = 0;0 == b && f < e;f++) {
      var g = c[f] || "", h = d[f] || "", l = RegExp("(\\d*)(\\D*)", "g"), n = RegExp("(\\d*)(\\D*)", "g");
      do {
        var r = l.exec(g) || ["", "", ""], s = n.exec(h) || ["", "", ""];
        if (0 == r[0].length && 0 == s[0].length) {
          break;
        }
        b = Ba(0 == r[1].length ? 0 : parseInt(r[1], 10), 0 == s[1].length ? 0 : parseInt(s[1], 10)) || Ba(0 == r[2].length, 0 == s[2].length) || Ba(r[2], s[2]);
      } while (0 == b);
    }
    b = Du[a] = 0 <= b;
  }
  return b;
}
var Fu = aa.document, Gu = Fu && yu ? Bu() || ("CSS1Compat" == Fu.compatMode ? parseInt(Cu, 10) : 5) : void 0;
var Hu = !yu || yu && 9 <= Gu;
!zu && !yu || yu && yu && 9 <= Gu || zu && Eu("1.9.1");
var Iu = yu && !Eu("9");
function Ju(a) {
  return a ? new Ku(Lu(a)) : Ja || (Ja = new Ku);
}
function Mu(a, b) {
  var c = b && "*" != b ? b.toUpperCase() : "";
  return a.querySelectorAll && a.querySelector && c ? a.querySelectorAll(c + "") : a.getElementsByTagName(c || "*");
}
function Nu(a, b) {
  Da(b, function(b, d) {
    "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in Ou ? a.setAttribute(Ou[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b;
  });
}
var Ou = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", frameborder:"frameBorder", height:"height", maxlength:"maxLength", role:"role", rowspan:"rowSpan", type:"type", usemap:"useMap", valign:"vAlign", width:"width"};
function Pu(a, b, c, d) {
  function e(c) {
    c && b.appendChild(ha(c) ? a.createTextNode(c) : c);
  }
  for (;d < c.length;d++) {
    var f = c[d];
    !ca(f) || ja(f) && 0 < f.nodeType ? e(f) : Qa(Qu(f) ? Ra(f) : f, e);
  }
}
function Ru(a) {
  return void 0 != a.firstElementChild ? a.firstElementChild : Su(a.firstChild);
}
function Su(a) {
  for (;a && 1 != a.nodeType;) {
    a = a.nextSibling;
  }
  return a;
}
function Lu(a) {
  return 9 == a.nodeType ? a : a.ownerDocument || a.document;
}
var Tu = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, Uu = {IMG:" ", BR:"\n"};
function Vu(a) {
  if (Iu && "innerText" in a) {
    a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
  } else {
    var b = [];
    Wu(a, b, !0);
    a = b.join("");
  }
  a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
  a = a.replace(/\u200B/g, "");
  Iu || (a = a.replace(/ +/g, " "));
  " " != a && (a = a.replace(/^\s*/, ""));
  return a;
}
function Wu(a, b, c) {
  if (!(a.nodeName in Tu)) {
    if (3 == a.nodeType) {
      c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
    } else {
      if (a.nodeName in Uu) {
        b.push(Uu[a.nodeName]);
      } else {
        for (a = a.firstChild;a;) {
          Wu(a, b, c), a = a.nextSibling;
        }
      }
    }
  }
}
function Qu(a) {
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
function Ku(a) {
  this.Zb = a || aa.document || document;
}
k = Ku.prototype;
k.Ib = function(a, b, c) {
  var d = this.Zb, e = arguments, f = e[0], g = e[1];
  if (!Hu && g && (g.name || g.type)) {
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
  g && (ha(g) ? f.className = g : "array" == m(g) ? f.className = g.join(" ") : Nu(f, g));
  2 < e.length && Pu(d, f, e, 2);
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
  Pu(Lu(a), a, arguments, 1);
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
var Xu, Yu, Zu, $u, av, bv, cv, dv, ev, fv, gv, hv, iv, jv, kv, lv, mv = {}.hasOwnProperty;
dv = function(a) {
  console.log(a);
};
gv = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
fv = /^(svg|g|rect|circle|clipPath|path|line|polygon|polyline|text|textPath)$/;
hv = /^\s+$/;
ev = /:(.+)/;
lv = {Cf:"http://www.w3.org/1999/xhtml", Nf:"http://www.w3.org/1999/xlink", vf:"http://www.w3.org/2000/svg", xml:"http://www.w3.org/XML/1998/namespace", Of:"http://www.w3.org/2000/xmlns"};
bv = function(a) {
  var b, c;
  c = a.split(":");
  b = c[0];
  c = c[1];
  return null != c ? [lv[b] || b, c] : a.match(fv) ? [lv.vf, a] : [lv.Cf, a];
};
Zu = function(a) {
  return ":*:" === a[0];
};
jv = function(a) {
  return null != a && a instanceof nv;
};
$u = function(a) {
  return null != a && !1;
};
Xu = function(a) {
  return null != a && null != a.forEach;
};
av = function(a) {
  return null != a && !Xu(a) && !jv(a) && !$u(a) && a instanceof Object;
};
Yu = function(a) {
  return null != a && null != a.nodeType;
};
iv = function(a) {
  return null != a && null != a.substring;
};
cv = function(a) {
  return null != a && null != a.toFixed;
};
kv = function(a) {
  return 8 === a.nodeType || 3 === a.nodeType && a.textContent.match(hv);
};
function ov(a, b) {
  var c, d, e, f, g;
  if (null != b.style) {
    f = b.style;
    var h;
    h = [];
    for (g in f) {
      mv.call(f, g) && (c = f[g], h.push(a.style[Ca(g)] = c));
    }
    delete b.style;
  }
  if (null != b.properties) {
    f = b.properties;
    c = [];
    for (e in f) {
      mv.call(f, e) && (g = f[e], c.push(a[e] = g));
    }
    delete b.properties;
  }
  Xu(b["class"]) && (a.setAttribute("class", b["class"].join(" ")), delete b["class"]);
  g = [];
  for (d in b) {
    mv.call(b, d) && (f = b[d], null != f ? (c = d.split(ev), e = c[0], c = c[1], null != c ? g.push(a.setAttributeNS(lv[e] || e, c, f)) : g.push(a.setAttribute(d, f))) : g.push(a.removeAttribute(d)));
  }
}
function pv(a, b) {
  return null != b ? a.__singult_data__ = b : a.__singult_data__;
}
function qv(a) {
  return cv(a) ? a.toString() : Xu(a) ? rv(a) : a;
}
function rv(a) {
  var b, c, d, e, f;
  f = a[0];
  d = av(a[1]) ? [a[1], a.slice(2)] : [{}, a.slice(1)];
  a = d[0];
  d = d[1];
  e = f.match(gv);
  f = e[1];
  b = e[2];
  e = e[3];
  null != b && (a.id = b);
  null != e && (b = e.split("."), Xu(a["class"]) ? a["class"] = a["class"].concat(b) : iv(a["class"]) ? a["class"] = b.concat([a["class"]]) : null == a["class"] && (a["class"] = b));
  f = bv(f);
  b = f[0];
  f = f[1];
  c = [];
  d.forEach(function(a) {
    if (null != a) {
      return Zu(a) ? a.slice(1).forEach(function(a) {
        return c.push(qv(a));
      }) : c.push(qv(a));
    }
  });
  return{ef:b, tag:f, sd:a, children:c};
}
function sv(a) {
  var b, c;
  if (jv(a)) {
    throw Error("Unify must be the first and only child of its parent.");
  }
  if ($u(a)) {
    return null;
  }
  if (iv(a)) {
    return document.createTextNode(a);
  }
  if (Yu(a)) {
    return a;
  }
  b = document.createElementNS(a.ef, a.tag);
  ov(b, a.sd);
  jv(c = a.children[0]) ? null != c.qa ? c.data.forEach(function(a) {
    var e;
    e = c.qa(a);
    pv(e, a);
    return b.appendChild(e);
  }) : c.data.forEach(function(a) {
    var e;
    e = sv(qv(c.sa(a)));
    pv(e, a);
    return b.appendChild(e);
  }) : a.children.forEach(function(a) {
    a = sv(a);
    if (null != a) {
      return b.appendChild(a);
    }
  });
  return b;
}
function nv(a, b, c, d, e, f, g) {
  this.data = a;
  this.sa = b;
  this.Ea = c;
  this.qa = d;
  this.update = e;
  this.Da = f;
  this.Le = g;
  return this;
}
function tv(a, b) {
  var c, d, e, f, g, h, l, n, r, s, w, A, y;
  g = b.qa || function(c) {
    c = sv(qv(b.sa(c)));
    a.appendChild(c);
    return c;
  };
  y = b.update || function(a, c) {
    return uv(a, qv(b.sa(c)));
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
    return f(pv(a), b);
  };
  s = function(a, c) {
    var d;
    if (b.Le) {
      return d = y(a, c), pv(d, c);
    }
    d = pv(a);
    if (null != d.M ? !d.M(d, c) : d !== c) {
      return d = y(a, c), pv(d, c);
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
    n = w(c[d], d), e[n] && (A[n] = c[d]), d += 1;
  }
  b.data.forEach(function(a, b) {
    var d, e, r;
    r = (d = b < c.length ? c[b] : void 0) ? w(d, b) : void 0;
    e = f(a, b);
    if (null == d) {
      return d = g(a), pv(d, a);
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
    return pv(d, a);
  });
  for (d = b.data.length;d < c.length;) {
    h(c[d]);
  }
}
function uv(a, b) {
  var c, d, e, f;
  if (jv(b)) {
    tv(a, b);
  } else {
    if (!$u(b)) {
      if (a.nodeName.toLowerCase() !== b.tag.toLowerCase()) {
        throw dv(a), dv(b), Error("Cannot merge $e into node of different type");
      }
      ov(a, b.sd);
      if (a.hasChildNodes()) {
        for (e = d = f = a.childNodes.length - 1;0 >= f ? 0 >= d : 0 <= d;e = 0 >= f ? ++d : --d) {
          c = a.childNodes[e], kv(c) && a.removeChild(c);
        }
      }
      if (jv(b.children[0])) {
        uv(a, b.children[0]);
      } else {
        if (a.childNodes.length > b.children.length) {
          for (e = c = d = a.childNodes.length - 1;0 >= d ? 0 >= c : 0 <= c;e = 0 >= d ? ++c : --c) {
            a.removeChild(a.childNodes[e]);
          }
        }
        for (e = 0;e < b.children.length;) {
          d = b.children[e] || "";
          c = a.childNodes[e];
          if (iv(d)) {
            null != c ? c.textContent = d : a.appendChild(document.createTextNode(d));
          } else {
            if (!$u(d)) {
              if (av(d)) {
                null != c ? uv(c, d) : a.appendChild(sv(d));
              } else {
                throw dv(c), dv(d), Error("Cannot merge children");
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
;function vv(a, b, c, d, e, f, g, h, l) {
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
k = vv.prototype;
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
  }(this), "#singult.core.Unify{", ", ", "}", c, bg.h(new U(null, 7, 5, V, [new U(null, 2, 5, V, [Dt, this.data], null), new U(null, 2, 5, V, [sn, this.sa], null), new U(null, 2, 5, V, [kp, this.Ea], null), new U(null, 2, 5, V, [Wo, this.qa], null), new U(null, 2, 5, V, [Un, this.update], null), new U(null, 2, 5, V, [Km, this.Da], null), new U(null, 2, 5, V, [nr, this.La], null)], null), this.v));
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
  return ye(new mj(null, new p(null, 7, [Km, null, sn, null, Un, null, Wo, null, kp, null, nr, null, Dt, null], null), null), b) ? ge.h(Vd(dh.h(li, this), this.F), b) : new vv(this.data, this.sa, this.Ea, this.qa, this.update, this.Da, this.La, this.F, kg(ge.h(this.v, b)), null);
};
k.va = function(a, b, c) {
  return q(X.h ? X.h(Dt, b) : X.call(null, Dt, b)) ? new vv(c, this.sa, this.Ea, this.qa, this.update, this.Da, this.La, this.F, this.v, null) : q(X.h ? X.h(sn, b) : X.call(null, sn, b)) ? new vv(this.data, c, this.Ea, this.qa, this.update, this.Da, this.La, this.F, this.v, null) : q(X.h ? X.h(kp, b) : X.call(null, kp, b)) ? new vv(this.data, this.sa, c, this.qa, this.update, this.Da, this.La, this.F, this.v, null) : q(X.h ? X.h(Wo, b) : X.call(null, Wo, b)) ? new vv(this.data, this.sa, this.Ea, 
  c, this.update, this.Da, this.La, this.F, this.v, null) : q(X.h ? X.h(Un, b) : X.call(null, Un, b)) ? new vv(this.data, this.sa, this.Ea, this.qa, c, this.Da, this.La, this.F, this.v, null) : q(X.h ? X.h(Km, b) : X.call(null, Km, b)) ? new vv(this.data, this.sa, this.Ea, this.qa, this.update, c, this.La, this.F, this.v, null) : q(X.h ? X.h(nr, b) : X.call(null, nr, b)) ? new vv(this.data, this.sa, this.Ea, this.qa, this.update, this.Da, c, this.F, this.v, null) : new vv(this.data, this.sa, this.Ea, 
  this.qa, this.update, this.Da, this.La, this.F, R.j(this.v, b, c), null);
};
k.Q = function() {
  return D(bg.h(new U(null, 7, 5, V, [new U(null, 2, 5, V, [Dt, this.data], null), new U(null, 2, 5, V, [sn, this.sa], null), new U(null, 2, 5, V, [kp, this.Ea], null), new U(null, 2, 5, V, [Wo, this.qa], null), new U(null, 2, 5, V, [Un, this.update], null), new U(null, 2, 5, V, [Km, this.Da], null), new U(null, 2, 5, V, [nr, this.La], null)], null), this.v));
};
k.J = function(a, b) {
  return new vv(this.data, this.sa, this.Ea, this.qa, this.update, this.Da, this.La, b, this.v, this.A);
};
k.S = function(a, b) {
  return re(b) ? Gb(this, v.h(b, 0), v.h(b, 1)) : Ve.j(pb, this, b);
};
var xv = function wv(b) {
  if (b instanceof vv) {
    var c = we(b) ? S.h(vg, b) : b, d = Q.h(c, nr), e = Q.h(c, Km), f = Q.h(c, Un), g = Q.h(c, Wo), h = Q.h(c, kp), l = Q.h(c, sn), n = Q.h(c, Dt), r = function() {
      for (var b = [], c = D(n), d = null, e = 0, f = 0;;) {
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
    return new nv(r, function(b, c, d, e, f, g, h, l) {
      return function(b) {
        return wv(l.g ? l.g(b) : l.call(null, b));
      };
    }(b, c, d, e, f, g, h, l, n, r), h, g, f, e, d);
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
        g = wv(g);
        if ("string" !== typeof g) {
          throw "Cannot convert; JavaScript map keys must be strings";
        }
        c[g] = wv(h);
        f += 1;
      } else {
        if (b = D(b)) {
          if (T(b)) {
            e = x(b), b = z(b), d = e, e = O(e);
          } else {
            e = E(b);
            d = P.j(e, 0, null);
            e = P.j(e, 1, null);
            d = wv(d);
            if ("string" !== typeof d) {
              throw "Cannot convert; JavaScript map keys must be strings";
            }
            c[d] = wv(e);
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
        g = d.D(null, f), c.push(wv(g)), f += 1;
      } else {
        if (b = D(b)) {
          d = b, T(d) ? (b = x(d), f = z(d), d = b, e = O(b), b = f) : (b = E(d), c.push(wv(b)), b = H(d), d = null, e = 0), f = 0;
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
        g = d.D(null, f), c.push(wv(g)), f += 1;
      } else {
        if (b = D(b)) {
          d = b, T(d) ? (b = x(d), f = z(d), d = b, e = O(b), b = f) : (b = E(d), c.push(wv(b)), b = H(d), d = null, e = 0), f = 0;
        } else {
          break;
        }
      }
    }
    return c;
  }
  return b;
};
function yv(a, b) {
  if (null == b) {
    return null;
  }
  var c;
  c = xv(b);
  c = qv.g ? qv.g(c) : qv.call(null, c);
  return uv.h ? uv.h(a, c) : uv.call(null, a, c);
}
var zv = function() {
  function a(a, d, e) {
    var f = null;
    2 < arguments.length && (f = L(Array.prototype.slice.call(arguments, 2), 0));
    return b.call(this, a, d, f);
  }
  function b(a, b, e) {
    var f = we(e) ? S.h(vg, e) : e;
    e = Q.h(f, nr);
    var g = Q.h(f, Km), h = Q.h(f, Un), l = Q.h(f, Wo), f = Q.h(f, kp);
    return new vv(a, b, f, l, h, g, e);
  }
  a.w = 2;
  a.n = function(a) {
    var d = E(a);
    a = H(a);
    var e = E(a);
    a = G(a);
    return b(d, e, a);
  };
  a.k = b;
  return a;
}();
function Av(a) {
  yu && ba(a.cssText) ? a.cssText = ".goog-tabpane-clear { clear: both; height: 0px; overflow: hidden }" : a.innerHTML = ".goog-tabpane-clear { clear: both; height: 0px; overflow: hidden }";
}
;q("undefined" != typeof NodeList) && (NodeList.prototype.Dd = !0, NodeList.prototype.Q = function() {
  return L.h(this, 0);
});
HTMLCollection.prototype.Dd = !0;
HTMLCollection.prototype.Q = function() {
  return L.h(this, 0);
};
function Bv(a) {
  if (a ? a.Qc : a) {
    return a.Qc(a);
  }
  var b;
  b = Bv[m(null == a ? null : a)];
  if (!b && (b = Bv._, !b)) {
    throw t("IDom.-\x3edom", a);
  }
  return b.call(null, a);
}
U.prototype.Qc = function() {
  var a;
  a = xv(this);
  a = qv.g ? qv.g(a) : qv.call(null, a);
  return sv.g ? sv.g(a) : sv.call(null, a);
};
Bv.string = function(a) {
  return Cv.g ? Cv.g(a) : Cv.call(null, a);
};
q("undefined" != typeof Node) && (Node.prototype.Qc = function() {
  return this;
});
var Cv = function() {
  function a(a, b) {
    return Bv(b).querySelector(a);
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
}(), Dv = function() {
  function a(a, b) {
    var c = Bv(a);
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
          c.appendChild(Lu(c).createTextNode(String(b)));
        }
      }
    }
    return c;
  }
  function b(a) {
    a = Bv(a);
    return Vu(a);
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
}(), Ev = function() {
  function a(a, b) {
    var c = Bv(a), g = c.type;
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
              for (var n, r = 0;n = g[r];r++) {
                h.value == n && (h.selected = !0);
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
    a = Bv(a);
    return tu(a);
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
var Gv;
function Hv(a) {
  var b = Gv;
  try {
    Gv = function() {
      var a = new p(null, 1, [Xj, !0], null);
      return xg.j ? xg.j(sj, $a, a) : xg.call(null, sj, $a, a);
    }();
    var c = a.p ? a.p() : a.call(null);
    we(c) && Dj.g(c);
    return new p(null, 2, [Qq, c, Sm, function() {
      var a = Gv;
      return M.g ? M.g(a) : M.call(null, a);
    }()], null);
  } finally {
    Gv = b;
  }
}
function Iv(a) {
  q(function() {
    var b = Gv;
    return q(b) ? db(Xj.g(je(a))) : b;
  }()) && Ag.h(Gv, function(b) {
    return de.h(b, a);
  });
}
ug.prototype.Vb = function() {
  Iv(this);
  return this.state;
};
function Jv(a, b, c, d, e, f, g, h) {
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
k = Jv.prototype;
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
  }(this), "#reflex.core.ComputedObservable{", ", ", "}", c, bg.h(new U(null, 6, 5, V, [new U(null, 2, 5, V, [Xn, this.state], null), new U(null, 2, 5, V, [wn, this.wa], null), new U(null, 2, 5, V, [Bq, this.f], null), new U(null, 2, 5, V, [Dm, this.key], null), new U(null, 2, 5, V, [nn, this.Ha], null), new U(null, 2, 5, V, [bk, this.ba], null)], null), this.v));
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
  return ye(new mj(null, new p(null, 6, [bk, null, Dm, null, nn, null, wn, null, Xn, null, Bq, null], null), null), b) ? ge.h(Vd(dh.h(li, this), this.F), b) : new Jv(this.state, this.wa, this.f, this.key, this.Ha, this.ba, this.F, kg(ge.h(this.v, b)), null);
};
k.va = function(a, b, c) {
  return q(X.h ? X.h(Xn, b) : X.call(null, Xn, b)) ? new Jv(c, this.wa, this.f, this.key, this.Ha, this.ba, this.F, this.v, null) : q(X.h ? X.h(wn, b) : X.call(null, wn, b)) ? new Jv(this.state, c, this.f, this.key, this.Ha, this.ba, this.F, this.v, null) : q(X.h ? X.h(Bq, b) : X.call(null, Bq, b)) ? new Jv(this.state, this.wa, c, this.key, this.Ha, this.ba, this.F, this.v, null) : q(X.h ? X.h(Dm, b) : X.call(null, Dm, b)) ? new Jv(this.state, this.wa, this.f, c, this.Ha, this.ba, this.F, this.v, 
  null) : q(X.h ? X.h(nn, b) : X.call(null, nn, b)) ? new Jv(this.state, this.wa, this.f, this.key, c, this.ba, this.F, this.v, null) : q(X.h ? X.h(bk, b) : X.call(null, bk, b)) ? new Jv(this.state, this.wa, this.f, this.key, this.Ha, c, this.F, this.v, null) : new Jv(this.state, this.wa, this.f, this.key, this.Ha, this.ba, this.F, R.j(this.v, b, c), null);
};
k.Q = function() {
  return D(bg.h(new U(null, 6, 5, V, [new U(null, 2, 5, V, [Xn, this.state], null), new U(null, 2, 5, V, [wn, this.wa], null), new U(null, 2, 5, V, [Bq, this.f], null), new U(null, 2, 5, V, [Dm, this.key], null), new U(null, 2, 5, V, [nn, this.Ha], null), new U(null, 2, 5, V, [bk, this.ba], null)], null), this.v));
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
  return new Jv(this.state, this.wa, this.f, this.key, this.Ha, this.ba, b, this.v, this.A);
};
k.S = function(a, b) {
  return re(b) ? Gb(this, v.h(b, 0), v.h(b, 1)) : Ve.j(pb, this, b);
};
k.Vb = function() {
  Iv(this);
  if (db(this.wa)) {
    return this.state;
  }
  for (var a = Hv(this.f), b = we(a) ? S.h(vg, a) : a, c = Q.h(b, Sm), d = Q.h(b, Qq), e = D(this.Ha), f = null, g = 0, h = 0;;) {
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
      var n = D(e);
      if (n) {
        l = n;
        if (T(l)) {
          e = x(l), h = z(l), f = e, g = O(e), e = h;
        } else {
          var r = E(l);
          Oj(r, this.key, function(a, b, c, d, e, f, g, h, l, r, n, J) {
            return function() {
              J.wa = !0;
              return Ec(J, null, null);
            };
          }(e, f, g, h, r, l, n, a, b, c, d, this));
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
var Kv = function() {
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
    return S.m(zv, a, b, e);
  }
  a.w = 2;
  a.n = function(a) {
    var d = E(a);
    a = H(a);
    var e = E(a);
    a = G(a);
    return b(d, e, a);
  };
  a.k = b;
  return a;
}();
function Lv(a) {
  if (a ? a.Jd : a) {
    return a.Jd();
  }
  var b;
  b = Lv[m(null == a ? null : a)];
  if (!b && (b = Lv._, !b)) {
    throw t("PushbackReader.read-char", a);
  }
  return b.call(null, a);
}
function Mv(a, b) {
  if (a ? a.Kd : a) {
    return a.Kd(0, b);
  }
  var c;
  c = Mv[m(null == a ? null : a)];
  if (!c && (c = Mv._, !c)) {
    throw t("PushbackReader.unread", a);
  }
  return c.call(null, a, b);
}
function Nv(a, b, c) {
  this.Z = a;
  this.buffer = b;
  this.ed = c;
}
Nv.prototype.Jd = function() {
  return 0 === this.buffer.length ? (this.ed += 1, this.Z[this.ed]) : this.buffer.pop();
};
Nv.prototype.Kd = function(a, b) {
  return this.buffer.push(b);
};
function Ov(a) {
  var b = !/[^\t\n\r ]/.test(a);
  return q(b) ? b : "," === a;
}
function Pv(a, b) {
  var c;
  !(c = !/[^0-9]/.test(b)) && (c = "+" === b || "-" === b) && (c = Lv(a), Mv(a, c), c = !/[^0-9]/.test(c));
  return c;
}
var Qv = function() {
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
    a = G(a);
    return b(0, a);
  };
  a.k = b;
  return a;
}();
function Rv(a, b) {
  for (var c = new Ia(b), d = Lv(a);;) {
    var e;
    if (!(e = null == d || Ov(d))) {
      e = d;
      var f = "#" !== e;
      e = f ? (f = "'" !== e) ? (f = ":" !== e) ? Sv.g ? Sv.g(e) : Sv.call(null, e) : f : f : f;
    }
    if (e) {
      return Mv(a, d), c.toString();
    }
    c.append(d);
    d = Lv(a);
  }
}
function Tv(a) {
  for (;;) {
    var b = Lv(a);
    if ("\n" === b || "\r" === b || null == b) {
      return a;
    }
  }
}
var Uv = Fj("^([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+))(N)?$"), Vv = Fj("^([-+]?[0-9]+)/([0-9]+)$"), Wv = Fj("^([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?$"), Xv = Fj("^[:]?([^0-9/].*/)?([^0-9/][^/]*)$");
function Yv(a, b) {
  var c = a.exec(b);
  return null != c && c[0] === b ? 1 === c.length ? c[0] : c : null;
}
function Zv(a) {
  if (q(Yv(Uv, a))) {
    if (a = Yv(Uv, a), null != a[2]) {
      a = 0;
    } else {
      var b = q(a[3]) ? [a[3], 10] : q(a[4]) ? [a[4], 16] : q(a[5]) ? [a[5], 8] : q(a[6]) ? [a[7], parseInt(a[6], 10)] : [null, null], c = b[0];
      null == c ? a = null : (b = parseInt(c, b[1]), a = "-" === a[1] ? -b : b);
    }
  } else {
    q(Yv(Vv, a)) ? (a = Yv(Vv, a), a = parseInt(a[1], 10) / parseInt(a[2], 10)) : a = q(Yv(Wv, a)) ? parseFloat(a) : null;
  }
  return a;
}
var $v = Fj("^[0-9A-Fa-f]{2}$"), aw = Fj("^[0-9A-Fa-f]{4}$");
function bw(a, b, c, d) {
  return q(Ej(a, d)) ? d : Qv.k(b, L(["Unexpected unicode escape \\", c, d], 0));
}
function cw(a) {
  return String.fromCharCode(parseInt(a, 16));
}
function dw(a) {
  var b = Lv(a), c = "t" === b ? "\t" : "r" === b ? "\r" : "n" === b ? "\n" : "\\" === b ? "\\" : '"' === b ? '"' : "b" === b ? "\b" : "f" === b ? "\f" : null;
  q(c) ? a = c : "x" === b ? (c = (new Ia(Lv(a), Lv(a))).toString(), a = cw(bw($v, a, b, c))) : "u" === b ? (c = (new Ia(Lv(a), Lv(a), Lv(a), Lv(a))).toString(), a = cw(bw(aw, a, b, c))) : a = /[^0-9]/.test(b) ? Qv.k(a, L(["Unexpected unicode escape \\", b], 0)) : String.fromCharCode(b);
  return a;
}
function ew(a) {
  for (var b = Lv(a);;) {
    var c;
    c = b;
    c = Ov.g ? Ov.g(c) : Ov.call(null, c);
    if (q(c)) {
      b = Lv(a);
    } else {
      return b;
    }
  }
}
function fw(a, b) {
  for (var c = Lc(Zd);;) {
    var d = ew(b);
    q(d) || Qv.k(b, L(["EOF while reading"], 0));
    if (a === d) {
      return Nc(c);
    }
    var e = function() {
      var a = d;
      return Sv.g ? Sv.g(a) : Sv.call(null, a);
    }();
    if (q(e)) {
      var f = e, e = function() {
        var a = d;
        return f.h ? f.h(b, a) : f.call(null, b, a);
      }()
    } else {
      Mv(b, d), e = gw.m ? gw.m(b, !0, null, !0) : gw.call(null, b, !0, null);
    }
    c = e === b ? c : fg.h(c, e);
  }
}
function hw(a, b) {
  return Qv.k(a, L(["Reader for ", b, " not implemented yet"], 0));
}
function iw(a, b) {
  var c = Lv(a), d = jw.g ? jw.g(c) : jw.call(null, c);
  if (q(d)) {
    return d.h ? d.h(a, b) : d.call(null, a, b);
  }
  d = kw.h ? kw.h(a, c) : kw.call(null, a, c);
  return q(d) ? d : Qv.k(a, L(["No dispatch macro for ", c], 0));
}
function lw(a, b) {
  return Qv.k(a, L(["Unmached delimiter ", b], 0));
}
function mw(a) {
  return S.h(If, fw(")", a));
}
function nw(a) {
  return fw("]", a);
}
function ow(a) {
  var b = fw("}", a), c = O(b);
  !ng(c) && Qv.k(a, L(["Map literal must contain an even number of forms"], 0));
  return S.h(vg, b);
}
function pw(a, b) {
  for (var c = new Ia(b), d = Lv(a);;) {
    if (q(function() {
      var a = null == d;
      if (a || (a = Ov(d))) {
        return a;
      }
      a = d;
      return Sv.g ? Sv.g(a) : Sv.call(null, a);
    }())) {
      Mv(a, d);
      var e = c.toString(), c = Zv(e);
      return q(c) ? c : Qv.k(a, L(["Invalid number format [", e, "]"], 0));
    }
    c.append(d);
    d = e = Lv(a);
  }
}
function qw(a) {
  for (var b = new Ia, c = Lv(a);;) {
    if (null == c) {
      return Qv.k(a, L(["EOF while reading"], 0));
    }
    if ("\\" === c) {
      b.append(dw(a));
    } else {
      if ('"' === c) {
        return b.toString();
      }
      b.append(c);
    }
    c = Lv(a);
  }
}
function rw(a) {
  for (var b = new Ia, c = Lv(a);;) {
    if (null == c) {
      return Qv.k(a, L(["EOF while reading"], 0));
    }
    if ("\\" === c) {
      b.append(c);
      var d = Lv(a);
      if (null == d) {
        return Qv.k(a, L(["EOF while reading"], 0));
      }
      var e = function() {
        var a = b;
        a.append(d);
        return a;
      }(), f = Lv(a);
    } else {
      if ('"' === c) {
        return b.toString();
      }
      e = function() {
        var a = b;
        a.append(c);
        return a;
      }();
      f = Lv(a);
    }
    b = e;
    c = f;
  }
}
function sw(a, b) {
  var c = Rv(a, b);
  if (q(-1 != c.indexOf("/"))) {
    c = Bd.h(Bf.j(c, 0, c.indexOf("/")), Bf.j(c, c.indexOf("/") + 1, c.length));
  } else {
    var d = Bd.g(c), c = "nil" === c ? null : "true" === c ? !0 : "false" === c ? !1 : d
  }
  return c;
}
function tw(a) {
  var b = Rv(a, Lv(a)), c = Yv(Xv, b), b = c[0], d = c[1], c = c[2];
  return void 0 !== d && ":/" === d.substring(d.length - 2, d.length) || ":" === c[c.length - 1] || -1 !== b.indexOf("::", 1) ? Qv.k(a, L(["Invalid token: ", b], 0)) : null != d && 0 < d.length ? Lf.h(d.substring(0, d.indexOf("/")), c) : Lf.g(b);
}
function uw(a) {
  return function(b) {
    return pb(pb(Gd, gw.m ? gw.m(b, !0, null, !0) : gw.call(null, b, !0, null)), a);
  };
}
function vw() {
  return function(a) {
    return Qv.k(a, L(["Unreadable form"], 0));
  };
}
function ww(a) {
  var b;
  b = gw.m ? gw.m(a, !0, null, !0) : gw.call(null, a, !0, null);
  b = b instanceof Ad ? new p(null, 1, [Oq, b], null) : "string" === typeof b ? new p(null, 1, [Oq, b], null) : b instanceof W ? new oi([b, !0]) : b;
  qe(b) || Qv.k(a, L(["Metadata must be Symbol,Keyword,String or Map"], 0));
  var c = gw.m ? gw.m(a, !0, null, !0) : gw.call(null, a, !0, null);
  return(c ? c.q & 262144 || c.De || (c.q ? 0 : eb(lc, c)) : eb(lc, c)) ? Vd(c, ij.k(L([je(c), b], 0))) : Qv.k(a, L(["Metadata can only be applied to IWithMetas"], 0));
}
function xw(a) {
  return uj(fw("}", a));
}
function yw(a) {
  return Fj(rw(a));
}
function zw(a) {
  gw.m ? gw.m(a, !0, null, !0) : gw.call(null, a, !0, null);
  return a;
}
function Sv(a) {
  return'"' === a ? qw : ":" === a ? tw : ";" === a ? Tv : "'" === a ? uw(new Ad(null, "quote", "quote", 1377916282, null)) : "@" === a ? uw(new Ad(null, "deref", "deref", 1494944732, null)) : "^" === a ? ww : "`" === a ? hw : "~" === a ? hw : "(" === a ? mw : ")" === a ? lw : "[" === a ? nw : "]" === a ? lw : "{" === a ? ow : "}" === a ? lw : "\\" === a ? Lv : "#" === a ? iw : null;
}
function jw(a) {
  return "{" === a ? xw : "\x3c" === a ? vw() : '"' === a ? yw : "!" === a ? Tv : "_" === a ? zw : null;
}
function gw(a, b, c) {
  for (;;) {
    var d = Lv(a);
    if (null == d) {
      return q(b) ? Qv.k(a, L(["EOF while reading"], 0)) : c;
    }
    if (!Ov(d)) {
      if (";" === d) {
        var e = function() {
          var b = a, c = d;
          return Tv.h ? Tv.h(b, c) : Tv.call(null, b);
        }();
        a = e;
      } else {
        var f = Sv(d), e = q(f) ? function() {
          var b = a, c = d;
          return f.h ? f.h(b, c) : f.call(null, b, c);
        }() : Pv(a, d) ? pw(a, d) : sw(a, d);
        if (e !== a) {
          return e;
        }
      }
    }
  }
}
function Aw(a) {
  return gw(new Nv(a, [], -1), !1, null);
}
var Bw = function(a, b) {
  return function(c, d) {
    return Q.h(q(d) ? b : a, c);
  };
}(new U(null, 13, 5, V, [null, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], null), new U(null, 13, 5, V, [null, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], null)), Cw = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
function Dw(a) {
  a = parseInt(a, 10);
  return db(isNaN(a)) ? a : null;
}
function Ew(a, b, c, d) {
  a <= b && b <= c || Qv.k(null, L(["" + u.g(d) + " Failed:  " + u.g(a) + "\x3c\x3d" + u.g(b) + "\x3c\x3d" + u.g(c)], 0));
  return b;
}
function Fw(a) {
  var b = Ej(Cw, a);
  P.j(b, 0, null);
  var c = P.j(b, 1, null), d = P.j(b, 2, null), e = P.j(b, 3, null), f = P.j(b, 4, null), g = P.j(b, 5, null), h = P.j(b, 6, null), l = P.j(b, 7, null), n = P.j(b, 8, null), r = P.j(b, 9, null), s = P.j(b, 10, null);
  if (db(b)) {
    return Qv.k(null, L(["Unrecognized date/time syntax: " + u.g(a)], 0));
  }
  var w = Dw(c), A = function() {
    var a = Dw(d);
    return q(a) ? a : 1;
  }();
  a = function() {
    var a = Dw(e);
    return q(a) ? a : 1;
  }();
  var b = function() {
    var a = Dw(f);
    return q(a) ? a : 0;
  }(), c = function() {
    var a = Dw(g);
    return q(a) ? a : 0;
  }(), y = function() {
    var a = Dw(h);
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
    a = Dw(a);
    return q(a) ? a : 0;
  }(), n = (B.h(n, "-") ? -1 : 1) * (60 * function() {
    var a = Dw(r);
    return q(a) ? a : 0;
  }() + function() {
    var a = Dw(s);
    return q(a) ? a : 0;
  }());
  return new U(null, 8, 5, V, [w, Ew(1, A, 12, "timestamp month field must be in range 1..12"), Ew(1, a, function() {
    var a;
    if (a = 0 === (w % 4 + 4) % 4) {
      a = 0 !== (w % 100 + 100) % 100 || 0 === (w % 400 + 400) % 400;
    }
    return Bw.h ? Bw.h(A, a) : Bw.call(null, A, a);
  }(), "timestamp day field must be in range 1..last day in month"), Ew(0, b, 23, "timestamp hour field must be in range 0..23"), Ew(0, c, 59, "timestamp minute field must be in range 0..59"), Ew(0, y, B.h(c, 59) ? 60 : 59, "timestamp second field must be in range 0..60"), Ew(0, C, 999, "timestamp millisecond field must be in range 0..999"), n], null);
}
var Gw, Hw = new p(null, 4, ["inst", function(a) {
  var b;
  if ("string" === typeof a) {
    if (b = Fw(a), q(b)) {
      a = P.j(b, 0, null);
      var c = P.j(b, 1, null), d = P.j(b, 2, null), e = P.j(b, 3, null), f = P.j(b, 4, null), g = P.j(b, 5, null), h = P.j(b, 6, null);
      b = P.j(b, 7, null);
      b = new Date(Date.UTC(a, c - 1, d, e, f, g, h) - 6E4 * b);
    } else {
      b = Qv.k(null, L(["Unrecognized date/time syntax: " + u.g(a)], 0));
    }
  } else {
    b = Qv.k(null, L(["Instance literal expects a string for its timestamp."], 0));
  }
  return b;
}, "uuid", function(a) {
  return "string" === typeof a ? new Tj(a) : Qv.k(null, L(["UUID literal expects a string as its representation."], 0));
}, "queue", function(a) {
  return re(a) ? dh.h(bi, a) : Qv.k(null, L(["Queue literal expects a vector for its elements."], 0));
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
  return Qv.k(null, L(["JS literal expects a vector or map containing only string or unqualified keyword keys"], 0));
}], null);
Gw = xg.g ? xg.g(Hw) : xg.call(null, Hw);
var Iw = xg.g ? xg.g(null) : xg.call(null, null);
function kw(a, b) {
  var c = sw(a, b), d = Q.h(M.g ? M.g(Gw) : M.call(null, Gw), "" + u.g(c)), e = M.g ? M.g(Iw) : M.call(null, Iw);
  return q(d) ? (c = gw(a, !0, null), d.g ? d.g(c) : d.call(null, c)) : q(e) ? (d = gw(a, !0, null), e.h ? e.h(c, d) : e.call(null, c, d)) : Qv.k(a, L(["Could not find tag parser for ", "" + u.g(c), " in ", zg.k(L([gj(M.g ? M.g(Gw) : M.call(null, Gw))], 0))], 0));
}
;var Jw = !yu || yu && 9 <= Gu, Kw = yu && !Eu("9");
!Au || Eu("528");
zu && Eu("1.9b") || yu && Eu("8") || xu && Eu("9.5") || Au && Eu("528");
zu && !Eu("8") || yu && Eu("9");
function Lw() {
  0 != Mw && (this[ka] || (this[ka] = ++la));
}
var Mw = 0;
function Nw(a, b) {
  this.type = a;
  this.currentTarget = this.target = b;
  this.defaultPrevented = this.fc = !1;
  this.fe = !0;
}
Nw.prototype.preventDefault = function() {
  this.defaultPrevented = !0;
  this.fe = !1;
};
function Ow(a) {
  Ow[" "](a);
  return a;
}
Ow[" "] = function() {
};
function Pw(a, b) {
  Nw.call(this, a ? a.type : "");
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
      if (zu) {
        var e;
        a: {
          try {
            Ow(d.nodeName);
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
    this.offsetX = Au || void 0 !== a.offsetX ? a.offsetX : a.layerX;
    this.offsetY = Au || void 0 !== a.offsetY ? a.offsetY : a.layerY;
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
oa(Pw, Nw);
Pw.prototype.preventDefault = function() {
  Pw.uf.preventDefault.call(this);
  var a = this.Wd;
  if (a.preventDefault) {
    a.preventDefault();
  } else {
    if (a.returnValue = !1, Kw) {
      try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1;
        }
      } catch (b) {
      }
    }
  }
};
var Qw = "closure_listenable_" + (1E6 * Math.random() | 0), Rw = 0;
function Sw(a, b, c, d, e) {
  this.Ob = a;
  this.Lc = null;
  this.src = b;
  this.type = c;
  this.uc = !!d;
  this.Jb = e;
  this.key = ++Rw;
  this.gc = this.tc = !1;
}
function Tw(a) {
  a.gc = !0;
  a.Ob = null;
  a.Lc = null;
  a.src = null;
  a.Jb = null;
}
;function Uw(a) {
  this.src = a;
  this.Oa = {};
  this.Nc = 0;
}
Uw.prototype.add = function(a, b, c, d, e) {
  var f = a.toString();
  a = this.Oa[f];
  a || (a = this.Oa[f] = [], this.Nc++);
  var g = Vw(a, b, d, e);
  -1 < g ? (b = a[g], c || (b.tc = !1)) : (b = new Sw(b, this.src, f, !!d, e), b.tc = c, a.push(b));
  return b;
};
Uw.prototype.remove = function(a, b, c, d) {
  a = a.toString();
  if (!(a in this.Oa)) {
    return!1;
  }
  var e = this.Oa[a];
  b = Vw(e, b, c, d);
  return-1 < b ? (Tw(e[b]), La.splice.call(e, b, 1), 0 == e.length && (delete this.Oa[a], this.Nc--), !0) : !1;
};
function cA(a, b) {
  var c = b.type;
  if (c in a.Oa) {
    var d = a.Oa[c], e = Pa(d, b), f;
    (f = 0 <= e) && La.splice.call(d, e, 1);
    f && (Tw(b), 0 == a.Oa[c].length && (delete a.Oa[c], a.Nc--));
  }
}
Uw.prototype.dd = function(a, b, c, d) {
  a = this.Oa[a.toString()];
  var e = -1;
  a && (e = Vw(a, b, c, d));
  return-1 < e ? a[e] : null;
};
function Vw(a, b, c, d) {
  for (var e = 0;e < a.length;++e) {
    var f = a[e];
    if (!f.gc && f.Ob == b && f.uc == !!c && f.Jb == d) {
      return e;
    }
  }
  return-1;
}
;var dA = "closure_lm_" + (1E6 * Math.random() | 0), eA = {}, fA = 0;
function gA(a, b, c, d, e) {
  if ("array" == m(b)) {
    for (var f = 0;f < b.length;f++) {
      gA(a, b[f], c, d, e);
    }
    return null;
  }
  c = hA(c);
  if (a && a[Qw]) {
    a = a.Pe(b, c, d, e);
  } else {
    if (!b) {
      throw Error("Invalid event type");
    }
    var f = !!d, g = iA(a);
    g || (a[dA] = g = new Uw(a));
    c = g.add(b, c, !1, d, e);
    c.Lc || (d = jA(), c.Lc = d, d.src = a, d.Ob = c, a.addEventListener ? a.addEventListener(b.toString(), d, f) : a.attachEvent(kA(b.toString()), d), fA++);
    a = c;
  }
  return a;
}
function jA() {
  var a = lA, b = Jw ? function(c) {
    return a.call(b.src, b.Ob, c);
  } : function(c) {
    c = a.call(b.src, b.Ob, c);
    if (!c) {
      return c;
    }
  };
  return b;
}
function mA(a, b, c, d, e) {
  if ("array" == m(b)) {
    for (var f = 0;f < b.length;f++) {
      mA(a, b[f], c, d, e);
    }
  } else {
    c = hA(c), a && a[Qw] ? a.xf(b, c, d, e) : a && (a = iA(a)) && (b = a.dd(b, c, !!d, e)) && nA(b);
  }
}
function nA(a) {
  if ("number" != typeof a && a && !a.gc) {
    var b = a.src;
    if (b && b[Qw]) {
      cA(b.cc, a);
    } else {
      var c = a.type, d = a.Lc;
      b.removeEventListener ? b.removeEventListener(c, d, a.uc) : b.detachEvent && b.detachEvent(kA(c), d);
      fA--;
      (c = iA(b)) ? (cA(c, a), 0 == c.Nc && (c.src = null, b[dA] = null)) : Tw(a);
    }
  }
}
function kA(a) {
  return a in eA ? eA[a] : eA[a] = "on" + a;
}
function oA(a, b, c, d) {
  var e = 1;
  if (a = iA(a)) {
    if (b = a.Oa[b.toString()]) {
      for (b = b.concat(), a = 0;a < b.length;a++) {
        var f = b[a];
        f && f.uc == c && !f.gc && (e &= !1 !== pA(f, d));
      }
    }
  }
  return Boolean(e);
}
function pA(a, b) {
  var c = a.Ob, d = a.Jb || a.src;
  a.tc && nA(a);
  return c.call(d, b);
}
function lA(a, b) {
  if (a.gc) {
    return!0;
  }
  if (!Jw) {
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
    c = new Pw(e, this);
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
        c.currentTarget = e[h], d &= oA(e[h], f, !0, c);
      }
      for (h = 0;!c.fc && h < e.length;h++) {
        c.currentTarget = e[h], d &= oA(e[h], f, !1, c);
      }
    }
    return d;
  }
  return pA(a, new Pw(b, this));
}
function iA(a) {
  a = a[dA];
  return a instanceof Uw ? a : null;
}
var qA = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
function hA(a) {
  if (ia(a)) {
    return a;
  }
  a[qA] || (a[qA] = function(b) {
    return a.handleEvent(b);
  });
  return a[qA];
}
;var rA = function() {
  function a(a, d, e, f) {
    var g = null;
    3 < arguments.length && (g = L(Array.prototype.slice.call(arguments, 3), 0));
    return b.call(this, a, d, e, g);
  }
  function b(a, b, e, f) {
    f = we(f) ? S.h(vg, f) : f;
    f = Q.j(f, Sq, !1);
    a = Bv(a);
    b = Kf(b);
    return gA(a, b, e, f);
  }
  a.w = 3;
  a.n = function(a) {
    var d = E(a);
    a = H(a);
    var e = E(a);
    a = H(a);
    var f = E(a);
    a = G(a);
    return b(d, e, f, a);
  };
  a.k = b;
  return a;
}();
function sA(a, b) {
  return Vd(new U(null, 2, 5, V, [b, null], null), new p(null, 3, [To, a, qk, Kq, lk, Kq], null));
}
function tA(a) {
  return a.g ? a.g(0) : a.call(null, 0);
}
function uA(a) {
  return lk.g(je(a)).call(null, tA(a));
}
function vA(a) {
  var b = P.j(a, 0, null), c = P.j(a, 1, null), d = we(c) ? S.h(vg, c) : c, e = Q.h(d, Qo), c = Q.h(d, Wj), f = Q.h(d, gq), g = Q.h(d, nk), d = Q.h(d, kq);
  return q(f) ? (f = ke(f), q(d) ? (d = V, b = bg.h(e, Td(b, g)), b = To.g(je(a)).call(null, f, b), c = new U(null, 2, 5, d, [b, q(c) ? R.j(c, kq, !0) : c], null)) : c = new U(null, 2, 5, V, [f, c], null), Vd(c, je(a))) : null;
}
function wA(a) {
  for (;;) {
    if (B.h(fr, a.g ? a.g(1) : a.call(null, 1))) {
      return tA(a);
    }
    var b = vA(a);
    if (q(b)) {
      a = b;
    } else {
      return tA(a);
    }
  }
}
function xA(a) {
  var b = P.j(a, 0, null), c = P.j(a, 1, null), c = we(c) ? S.h(vg, c) : c, d = Q.h(c, Qo), e = Q.h(c, nk), f = P.j(e, 0, null), g = Af(e);
  return q(q(c) ? e : c) ? Vd(new U(null, 2, 5, V, [f, R.k(c, Qo, de.h(d, b), L([nk, g], 0))], null), je(a)) : null;
}
var yA = function() {
  function a(a, d, e) {
    var f = null;
    2 < arguments.length && (f = L(Array.prototype.slice.call(arguments, 2), 0));
    return b.call(this, a, d, f);
  }
  function b(a, b, e) {
    b = S.j(b, tA(a), e);
    P.j(a, 0, null);
    e = P.j(a, 1, null);
    return Vd(new U(null, 2, 5, V, [b, R.j(e, kq, !0)], null), je(a));
  }
  a.w = 2;
  a.n = function(a) {
    var d = E(a);
    a = H(a);
    var e = E(a);
    a = G(a);
    return b(d, e, a);
  };
  a.k = b;
  return a;
}();
function zA(a) {
  if (B.h(fr, a.g ? a.g(1) : a.call(null, 1))) {
    return a;
  }
  var b;
  b = uA(a);
  if (q(b)) {
    if (q(uA(a))) {
      b = P.j(a, 0, null);
      var c = P.j(a, 1, null), d;
      if (q(uA(a))) {
        d = qk.g(je(a)).call(null, tA(a));
      } else {
        throw "called children on a leaf node";
      }
      var e = P.j(d, 0, null), f = Af(d);
      b = q(d) ? Vd(new U(null, 2, 5, V, [e, new p(null, 4, [Qo, Zd, gq, q(c) ? de.h(gq.g(c), b) : new U(null, 1, 5, V, [b], null), Wj, c, nk, f], null)], null), je(a)) : null;
    } else {
      b = null;
    }
  }
  if (q(b)) {
    return b;
  }
  b = xA(a);
  if (q(b)) {
    return b;
  }
  for (;;) {
    if (q(vA(a))) {
      b = xA(vA(a));
      if (q(b)) {
        return b;
      }
      a = vA(a);
    } else {
      return new U(null, 2, 5, V, [tA(a), fr], null);
    }
  }
}
function AA(a) {
  return B.h(fr, a.g ? a.g(1) : a.call(null, 1));
}
;function BA() {
  function a() {
    return yf(16).toString(16);
  }
  return new Tj((new Ia(a(), a(), a(), a(), a(), a(), a(), a(), "-", a(), a(), a(), a(), "-4", a(), a(), a(), "-", (8 | 3 & yf(15)).toString(16), a(), a(), a(), "-", a(), a(), a(), a(), a(), a(), a(), a(), a(), a(), a(), a())).toString());
}
;var CA = fe([ck, Em, Nm, xn, Pn, Zn, Vo, tp, yp, Dp, Hp, Mp, eq, fq, br, gr, or], [.001, .01, .001, .5, 256, Iq, 2048, 3, 3, .05, 1.1, .02, !1, .9, .5, .1, 1E3]);
function DA(a) {
  var b = Zn.g(lp.g(a));
  return R.j(a, dt, Ve.j(function(a) {
    return function(b, e) {
      var f = Pp.g(e), g = gj(Fn.g(dk.g(e)));
      return Vt(b, g, function(a) {
        return function(b) {
          return de.h(b, a);
        };
      }(f, g, a));
    };
  }(b), zh(Fg.h(b, sj)), Y.g(a)));
}
function EA(a, b, c, d) {
  var e = gr.g(lp.g(a)), f = Dp.g(lp.g(a)), g = Em.g(lp.g(a)), h = br.g(lp.g(a)), l = gh.h(a, new U(null, 3, 5, V, [Y, b, dk], null)), n = Tt(function(a, b, e) {
    return function(b, f) {
      return q(c.g ? c.g(b) : c.call(null, b)) ? q(d.g ? d.g(b) : d.call(null, b)) ? ep : So : f < a + e ? Yo : jk;
    };
  }(e, f, g, h, l), Fn.g(l)), r = Tt(function(a, b, e, f) {
    return function(e, g) {
      return q(c.g ? c.g(e) : c.call(null, e)) ? q(d.g ? d.g(e) : d.call(null, e)) ? g >= a - f ? up : ep : g >= a - b ? vt : So : jk;
    };
  }(e, f, g, h, l, n), Lm.g(l)), s = new p(null, 2, [Fn, ij.k(L([Wt(function(a, b) {
    return function(a) {
      a += b;
      return 1 > a ? a : 1;
    };
  }(e, f, g, h, l, n, r), ij.k(L([So.g(n), vt.g(r)], 0))), Wt(function(a, b, c, d) {
    return function(a) {
      a += d;
      return 1 > a ? a : 1;
    };
  }(e, f, g, h, l, n, r), ij.k(L([ep.g(n), up.g(r)], 0))), Wt(function(a, b, c) {
    return function(a) {
      return a - c;
    };
  }(e, f, g, h, l, n, r), jk.g(n))], 0)), Lm, ij.k(L([Wt(function(a, b, c) {
    return function(a) {
      a -= c;
      return 0 < a ? a : 0;
    };
  }(e, f, g, h, l, n, r), ij.k(L([jk.g(r), Yo.g(n)], 0))), Wt(function(a, b) {
    return function(a) {
      return a + b;
    };
  }(e, f, g, h, l, n, r), So.g(r)), Wt(function(a, b, c, d) {
    return function(a) {
      return a + d;
    };
  }(e, f, g, h, l, n, r), ep.g(r))], 0))], null), w = bg.h(gj(vt.g(r)), gj(up.g(r))), A = gj(Yo.g(n)), e = Vt(Vt(dt.g(a), w, function() {
    return function(a) {
      return de.h(a, b);
    };
  }(e, f, g, h, l, n, r, s, w, A)), A, function() {
    return function(a) {
      return le.h(a, b);
    };
  }(e, f, g, h, l, n, r, s, w, A));
  return R.j(ih(a, new U(null, 3, 5, V, [Y, b, dk], null), s), dt, e);
}
function FA(a, b) {
  return Tt(function(b, d) {
    return d >= a ? Fn : Lm;
  }, b);
}
function GA(a, b) {
  var c = we(b) ? S.h(vg, b) : b, d = Q.h(c, Dp), e = Q.h(c, gr), f = Q.h(c, xn), g = Q.h(c, Pn), h = Q.h(c, Zn), l = Q.h(c, Vo), n = Nt.g(a / l * h), r = zj.h(function() {
    var a = n - g;
    return 0 > a ? 0 : a;
  }(), function() {
    var a = n + g;
    return h < a ? h : a;
  }()), s = f * O(r), w = Dg.h(s, Rt(r)), c = Tg.h(s, function(a, b, c, d, e, f) {
    return function() {
      return Pt.h(f, e);
    };
  }(n, r, s, w, function() {
    var a = e + 1 * d;
    return 1 > a ? a : 1;
  }(), function() {
    var a = e - 2 * d;
    return 0 < a ? a : 0;
  }(), b, c, c, d, e, f, g, h, l));
  return FA(e, Cg.j(Ah, w, c));
}
function HA(a, b) {
  return new p(null, 3, [Pp, a, dk, GA(a, b), sk, 1], null);
}
function IA(a, b, c, d) {
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
function JA(a) {
  a = gj(Fn.g(dk.g(a)));
  return D(a) ? S.h(bf, a) - S.h(cf, a) : 0;
}
function KA(a) {
  var b = lp.g(a), c = Zn.g(b), b = Vo.g(b);
  a = Cg.h(JA, Y.g(a));
  a = S.h(Ze, a) / O(a);
  c = wf(a / c * b, 2);
  c = Nt.g(.7 * c);
  return 1 < c ? c : 1;
}
function LA(a) {
  return R.j(a, Yp, KA(a));
}
function MA(a, b) {
  var c = dt.g(a);
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
function NA(a, b) {
  var c = MA(a, b), d = yp.g(lp.g(a));
  return eg(We(function(b, c) {
    return function(b, d, e) {
      if (e < c) {
        return b;
      }
      var n = gh.h(a, new U(null, 3, 5, V, [Y, d, sk], null));
      return gg.j(b, d, e * n);
    };
  }(c, d), Lc(li), c));
}
function OA(a, b, c) {
  for (var d = function() {
    var b = Nt.g(c * O(Y.g(a)));
    return 1 < b ? b : 1;
  }(), e = D(b), f = ej(function() {
    return function(a, c) {
      return zd(b.g ? b.g(a) : b.call(null, a), b.g ? b.g(c) : b.call(null, c));
    };
  }(e, d)), g = 1E6;;) {
    if (me(e)) {
      return uj(gj(f));
    }
    var h = E(e), l = P.j(h, 0, null), n = P.j(h, 1, null);
    O(f) < d ? (e = H(e), f = R.j(f, l, n), l = function() {
      var a = g, b = n;
      return a < b ? a : b;
    }()) : n > g ? (l = R.j(ge.h(f, E(gj(f))), l, n), e = H(e), f = l, l = E(ji(l))) : (e = H(e), l = g);
    g = l;
  }
}
function PA(a) {
  return eg(We(function(a, c, d) {
    return q(d) ? gg.j(a, c, d) : a;
  }, Lc(li), a));
}
function QA(a, b, c, d) {
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
          for (var a = IA(g, c, d, e), b = f;;) {
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
      return PA(Nc(f));
    }
  }
}
function RA(a) {
  return Wt(function(a) {
    return a + Pt.h(0, .5);
  }, a);
}
function SA(a, b, c, d) {
  return Ve.j(function(a, b) {
    return EA(a, b, c, d);
  }, a, b);
}
function TA(a, b) {
  var c = ck.g(lp.g(a)), d = Nm.g(lp.g(a)), e = tp.g(lp.g(a)), f = go.g(a), g = In.g(a), h = O(Y.g(a)), l = IA(b, Yp.g(a), 0, h), h = S.j(bf, 1, ji(kj(f, l))), l = S.j(bf, 1, ji(kj(g, l))), c = c * h, d = d * l, f = Q.h(f, b), g = Q.h(g, b), e = e - g / d * (e - 1), e = 1 < e ? e : 1;
  return f < c ? EA(a, b, pg(!0), pg(!1)) : ih(a, new U(null, 3, 5, V, [Y, b, sk], null), e);
}
function UA(a, b, c) {
  var d = 1 / c;
  c = d * (c - 1);
  return Vt(eh.h(function(a, b) {
    return function(a) {
      return a * b;
    };
  }(d, c), a), b, function(a) {
    return function(b) {
      return b + a;
    };
  }(d, c));
}
function VA(a, b, c, d, e) {
  var f = Hp.g(lp.g(a)), g = NA(a, c);
  c = Wt(rg.h($e, f), kj(g, b));
  f = tg.h(function() {
    return function(a) {
      var b = P.j(a, 0, null);
      a = P.j(a, 1, null);
      return(e.h ? e.h(b, 0) : e.call(null, b, 0)) > a ? b : null;
    };
  }(f, g, c), d);
  a = fq.g(lp.g(a));
  b = Wt(rg.h($e, a), kj(d, S.j(le, b, f)));
  return jj.k(bf, L([c, b], 0));
}
var WA = function() {
  function a(a, b, c, g) {
    var h = vn.h(a, 0) + 1, l = NA(a, b), n = Om.h(a, li), r = jj.k(bf, L([l, n], 0)), s, w = lp.g(a);
    s = Mp.g(w);
    var w = db(eq.g(w)), A = Yp.g(a), y = RA(r), y = w ? QA(y, a, wf(A, 3), 0) : y, w = w ? QA(y, a, A, wf(A, 3)) : y;
    s = OA(a, w, s);
    A = D(c) ? VA(a, s, c, n, l) : li;
    w = or.g(lp.g(a));
    n = q(g) ? 0 === (h % w + w) % w : g;
    a = R.k(a, vn, h, L([Np, r, yo, s, Om, A], 0));
    r = q(g) ? jh.O(a, new U(null, 1, 5, V, [go], null), UA, gj(r), w) : a;
    r = q(g) ? jh.O(r, new U(null, 1, 5, V, [In], null), UA, s, w) : r;
    b = q(g) ? SA(r, $g.h(l, s), b, c) : r;
    b = q(n) ? Ve.j(TA, b, zj.g(O(Y.g(b)))) : b;
    return q(n) ? LA(b) : b;
  }
  function b(a, b, f) {
    return c.m(a, b, sj, f);
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
var XA, YA, ZA, $A, aB, bB;
function cB(a) {
  if (a ? a.Qb : a) {
    return a.Qb(a);
  }
  var b;
  b = cB[m(null == a ? null : a)];
  if (!b && (b = cB._, !b)) {
    throw t("PEncoder.encoder-bit-width", a);
  }
  return b.call(null, a);
}
function dB(a, b, c) {
  if (a ? a.Pb : a) {
    return a.Pb(a, b, c);
  }
  var d;
  d = dB[m(null == a ? null : a)];
  if (!d && (d = dB._, !d)) {
    throw t("PEncoder.encode", a);
  }
  return d.call(null, a, b, c);
}
var fB = function eB(b, c, d) {
  var e = P.j(d, 0, null), f = P.j(d, 1, null), g = f - e;
  "undefined" === typeof XA && (XA = function(b, c, d, e, f, g, A, y, C) {
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
  }, XA.Ca = !0, XA.Ba = "org.nfrac.comportex.encoders/t31087", XA.Ga = function() {
    return function(b, c) {
      return Bc(c, "org.nfrac.comportex.encoders/t31087");
    };
  }(g, d, e, f), XA.prototype.Qb = function() {
    return function() {
      return this.Tb;
    };
  }(g, d, e, f), XA.prototype.Pb = function() {
    return function(b, c, d) {
      return q(d) ? (b = this.lower, d = d > b ? d : b, b = this.upper, d = df(((d < b ? d : b) - this.lower) / this.span * (this.Tb - this.pc)), uj(zj.h(c + d, c + d + this.pc))) : sj;
    };
  }(g, d, e, f), XA.prototype.I = function() {
    return function() {
      return this.We;
    };
  }(g, d, e, f), XA.prototype.J = function() {
    return function(b, c) {
      return new XA(this.span, this.upper, this.lower, this.Bf, this.pf, this.pc, this.Tb, this.Oe, c);
    };
  }(g, d, e, f));
  return new XA(g, f, e, d, d, c, b, eB, null);
}, hB = function gB(b) {
  "undefined" === typeof ZA && (ZA = function(b, d, e) {
    this.e = b;
    this.Ke = d;
    this.Ye = e;
    this.G = 0;
    this.q = 393216;
  }, ZA.Ca = !0, ZA.Ba = "org.nfrac.comportex.encoders/t31101", ZA.Ga = function(b, d) {
    return Bc(d, "org.nfrac.comportex.encoders/t31101");
  }, ZA.prototype.Qb = function() {
    return cB(this.e);
  }, ZA.prototype.Pb = function(b, d, e) {
    var f = this;
    return S.h(Ft, Cg.h(function() {
      return function(b) {
        return dB(f.e, d, b);
      };
    }(this), e));
  }, ZA.prototype.I = function() {
    return this.Ye;
  }, ZA.prototype.J = function(b, d) {
    return new ZA(this.e, this.Ke, d);
  });
  return new ZA(b, gB, null);
}, iB = function() {
  function a(a, c) {
    var f = cB(c);
    "undefined" === typeof $A && ($A = function(a, b, c, d, e) {
      this.od = a;
      this.e = b;
      this.Ab = c;
      this.ad = d;
      this.Ze = e;
      this.G = 0;
      this.q = 393216;
    }, $A.Ca = !0, $A.Ba = "org.nfrac.comportex.encoders/t31110", $A.Ga = function() {
      return function(a, b) {
        return Bc(b, "org.nfrac.comportex.encoders/t31110");
      };
    }(f), $A.prototype.Qb = function() {
      return function() {
        return this.Ab * this.od;
      };
    }(f), $A.prototype.Pb = function(a) {
      return function(b, c, d) {
        var e = this;
        return S.h(Ft, sg(function() {
          return function(a, b) {
            return dB(e.e, c + a * e.od, b);
          };
        }(this, a), d));
      };
    }(f), $A.prototype.I = function() {
      return function() {
        return this.Ze;
      };
    }(f), $A.prototype.J = function() {
      return function(a, b) {
        return new $A(this.od, this.e, this.Ab, this.ad, b);
      };
    }(f));
    return new $A(f, c, a, b, null);
  }
  var b = null, c = function() {
    function a(b, d, h) {
      var l = null;
      2 < arguments.length && (l = L(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      var l = cg.h(d, e), n = Cg.h(cB, l), r = cg.h(0, Bj.h(Ze, n));
      "undefined" === typeof aB && (aB = function(a, b, c, d, e, f, g, h) {
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
      }, aB.Ca = !0, aB.Ba = "org.nfrac.comportex.encoders/t31113", aB.Ga = function() {
        return function(a, b) {
          return Bc(b, "org.nfrac.comportex.encoders/t31113");
        };
      }(l, n, r), aB.prototype.Qb = function() {
        return function() {
          return S.h(Ze, this.ie);
        };
      }(l, n, r), aB.prototype.Pb = function(a, b, c) {
        return function(d, e, f) {
          return S.h(Ft, Cg.m(function() {
            return function(a, b, c) {
              return dB(a, e + b, c);
            };
          }(this, a, b, c), this.Vd, this.be, f));
        };
      }(l, n, r), aB.prototype.I = function() {
        return function() {
          return this.$e;
        };
      }(l, n, r), aB.prototype.J = function() {
        return function(a, b) {
          return new aB(this.be, this.ie, this.Vd, this.Pa, this.e, this.Ab, this.ad, b);
        };
      }(l, n, r));
      return new aB(r, n, l, e, d, a, b, null);
    }
    a.w = 2;
    a.n = function(a) {
      var b = E(a);
      a = H(a);
      var d = E(a);
      a = G(a);
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
}(), kB = function jB(b, c) {
  "undefined" === typeof bB && (bB = function(b, c, f, g) {
    this.e = b;
    this.f = c;
    this.qf = f;
    this.af = g;
    this.G = 0;
    this.q = 393216;
  }, bB.Ca = !0, bB.Ba = "org.nfrac.comportex.encoders/t31122", bB.Ga = function(b, c) {
    return Bc(c, "org.nfrac.comportex.encoders/t31122");
  }, bB.prototype.Qb = function() {
    return cB(this.e);
  }, bB.prototype.Pb = function(b, c, f) {
    return dB(this.e, c, this.f.g ? this.f.g(f) : this.f.call(null, f));
  }, bB.prototype.I = function() {
    return this.af;
  }, bB.prototype.J = function(b, c) {
    return new bB(this.e, this.f, this.qf, c);
  });
  return new bB(c, b, jB, null);
};
function lB(a) {
  if (a ? a.fd : a) {
    return a.fd(a);
  }
  var b;
  b = lB[m(null == a ? null : a)];
  if (!b && (b = lB._, !b)) {
    throw t("PFeedForward.bit-width", a);
  }
  return b.call(null, a);
}
function mB(a, b) {
  if (a ? a.gd : a) {
    return a.gd(a, b);
  }
  var c;
  c = mB[m(null == a ? null : a)];
  if (!c && (c = mB._, !c)) {
    throw t("PFeedForward.bits-value*", a);
  }
  return c.call(null, a, b);
}
function nB(a, b) {
  if (a ? a.kd : a) {
    return a.kd(a, b);
  }
  var c;
  c = nB[m(null == a ? null : a)];
  if (!c && (c = nB._, !c)) {
    throw t("PFeedForward.signal-bits-value*", a);
  }
  return c.call(null, a, b);
}
function oB(a, b) {
  if (a ? a.ld : a) {
    return a.ld(a, b);
  }
  var c;
  c = oB[m(null == a ? null : a)];
  if (!c && (c = oB._, !c)) {
    throw t("PFeedForward.source-of-bit", a);
  }
  return c.call(null, a, b);
}
function pB(a) {
  if (a ? a.jd : a) {
    return a.jd(a);
  }
  var b;
  b = pB[m(null == a ? null : a)];
  if (!b && (b = pB._, !b)) {
    throw t("PFeedForward.incoming-bits-value", a);
  }
  return b.call(null, a);
}
function qB(a, b) {
  if (a ? a.md : a) {
    return a.md(a, b);
  }
  var c;
  c = qB[m(null == a ? null : a)];
  if (!c && (c = qB._, !c)) {
    throw t("PFeedForward.source-of-incoming-bit", a);
  }
  return c.call(null, a, b);
}
function rB(a, b) {
  if (a ? a.hd : a) {
    return a.hd(a, b);
  }
  var c;
  c = rB[m(null == a ? null : a)];
  if (!c && (c = rB._, !c)) {
    throw t("PFeedForward.feed-forward-step*", a);
  }
  return c.call(null, a, b);
}
var sB = function() {
  function a(a) {
    return mB(a, 0);
  }
  var b = null, b = function(b, d) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      case 2:
        return mB(b, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.g = a;
  b.h = function(a, b) {
    return mB(a, b);
  };
  return b;
}(), tB = function() {
  function a(a) {
    return nB(a, 0);
  }
  var b = null, b = function(b, d) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      case 2:
        return nB(b, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.g = a;
  b.h = function(a, b) {
    return nB(a, b);
  };
  return b;
}(), uB = function() {
  function a(a) {
    return rB(a, !0);
  }
  var b = null, b = function(b, d) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      case 2:
        return rB(b, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.g = a;
  b.h = function(a, b) {
    return rB(a, b);
  };
  return b;
}();
function vB(a) {
  if (a ? a.nd : a) {
    return a.nd(a);
  }
  var b;
  b = vB[m(null == a ? null : a)];
  if (!b && (b = vB._, !b)) {
    throw t("PResettable.reset", a);
  }
  return b.call(null, a);
}
function wB(a) {
  if (a ? a.jf : a) {
    return a.value;
  }
  var b;
  b = wB[m(null == a ? null : a)];
  if (!b && (b = wB._, !b)) {
    throw t("PInputGenerator.domain-value", a);
  }
  return b.call(null, a);
}
function xB(a) {
  if (a ? a.mf : a) {
    return a.mf(a);
  }
  var b;
  b = xB[m(null == a ? null : a)];
  if (!b && (b = xB._, !b)) {
    throw t("PRegion.n-columns", a);
  }
  return b.call(null, a);
}
function yB(a) {
  if (a ? a.lf : a) {
    return a.lf(a);
  }
  var b;
  b = yB[m(null == a ? null : a)];
  if (!b && (b = yB._, !b)) {
    throw t("PRegion.n-cells-per-column", a);
  }
  return b.call(null, a);
}
function zB(a, b, c, d) {
  if (a ? a.nf : a) {
    return a.nf(a, b, c, d);
  }
  var e;
  e = zB[m(null == a ? null : a)];
  if (!e && (e = zB._, !e)) {
    throw t("PRegion.region-step", a);
  }
  return e.call(null, a, b, c, d);
}
function AB(a) {
  if (a ? a.kf : a) {
    return a.kf(a);
  }
  var b;
  b = AB[m(null == a ? null : a)];
  if (!b && (b = AB._, !b)) {
    throw t("PRegion.active-cells", a);
  }
  return b.call(null, a);
}
function BB(a) {
  if (a ? a.of : a) {
    return a.of(a);
  }
  var b;
  b = BB[m(null == a ? null : a)];
  if (!b && (b = BB._, !b)) {
    throw t("PRegion.signal-cells", a);
  }
  return b.call(null, a);
}
function CB(a) {
  var b = ij.k(L([CA, a], 0)), c = Vo.g(b);
  a = DA(new p(null, 6, [Xq, BA(), Y, eh.j(HA, zj.g(c), Fg.g(b)), lp, b, yo, sj, In, zh(Fg.h(Vo.g(a), 0)), go, zh(Fg.h(Vo.g(a), 0))], null));
  a = LA.g ? LA.g(a) : LA.call(null, a);
  b = ij.k(L([Xt, lp.g(a)], 0));
  a = R.k(a, lp, b, L([Y, eh.j(du, Y.g(a), Fg.g(b))], 0));
  b = lp.g(a);
  b = Fq.g(b) * Vo.g(b);
  return R.j(a, gn, zh(Fg.h(b, sj)));
}
vB.object = function(a) {
  return CB(lp.g(a));
};
xB.object = function(a) {
  return Vo.g(lp.g(a));
};
yB.object = function(a) {
  return Fq.g(lp.g(a));
};
zB.object = function(a, b, c, d) {
  a = WA.m(a, b, c, d);
  return su(a, yo.g(a), d);
};
AB.object = function(a) {
  return Bp.g(a);
};
BB.object = function(a) {
  return Qn.g(a);
};
function DB(a, b, c, d, e, f) {
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
k = DB.prototype;
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
  return cB(this.Va);
};
k.gd = function(a, b) {
  return dB(this.Va, b, this.value);
};
k.kd = function() {
  return sj;
};
k.ld = function(a, b) {
  return new U(null, 1, 5, V, [b], null);
};
k.jd = function() {
  return mB(this, 0);
};
k.md = function(a, b) {
  return new U(null, 2, 5, V, [0, oB(this, b)], null);
};
k.hd = function() {
  var a = this;
  return R.j(this, on, function() {
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
  }(this), "#org.nfrac.comportex.core.InputGenerator{", ", ", "}", c, bg.h(new U(null, 4, 5, V, [new U(null, 2, 5, V, [Zp, this.ab], null), new U(null, 2, 5, V, [on, this.value], null), new U(null, 2, 5, V, [wk, this.transform], null), new U(null, 2, 5, V, [Im, this.Va], null)], null), this.v));
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
  return R.j(this, on, this.ab);
};
k.Sa = function(a, b) {
  return ye(new mj(null, new p(null, 4, [wk, null, Im, null, on, null, Zp, null], null), null), b) ? ge.h(Vd(dh.h(li, this), this.F), b) : new DB(this.ab, this.value, this.transform, this.Va, this.F, kg(ge.h(this.v, b)), null);
};
k.va = function(a, b, c) {
  return q(X.h ? X.h(Zp, b) : X.call(null, Zp, b)) ? new DB(c, this.value, this.transform, this.Va, this.F, this.v, null) : q(X.h ? X.h(on, b) : X.call(null, on, b)) ? new DB(this.ab, c, this.transform, this.Va, this.F, this.v, null) : q(X.h ? X.h(wk, b) : X.call(null, wk, b)) ? new DB(this.ab, this.value, c, this.Va, this.F, this.v, null) : q(X.h ? X.h(Im, b) : X.call(null, Im, b)) ? new DB(this.ab, this.value, this.transform, c, this.F, this.v, null) : new DB(this.ab, this.value, this.transform, 
  this.Va, this.F, R.j(this.v, b, c), null);
};
k.Q = function() {
  return D(bg.h(new U(null, 4, 5, V, [new U(null, 2, 5, V, [Zp, this.ab], null), new U(null, 2, 5, V, [on, this.value], null), new U(null, 2, 5, V, [wk, this.transform], null), new U(null, 2, 5, V, [Im, this.Va], null)], null), this.v));
};
k.J = function(a, b) {
  return new DB(this.ab, this.value, this.transform, this.Va, b, this.v, this.A);
};
k.S = function(a, b) {
  return re(b) ? Gb(this, v.h(b, 0), v.h(b, 1)) : Ve.j(pb, this, b);
};
function EB(a, b) {
  var c = Cg.h(lB, a), c = cg.h(0, Bj.h(Ze, c));
  return S.h(Ft, Cg.j(b, a, c));
}
function FB(a, b, c) {
  var d = P.j(c, 0, null);
  c = P.j(c, 1, null);
  return a + b * d + c;
}
function GB(a, b, c, d) {
  this.ya = a;
  this.Za = b;
  this.F = c;
  this.v = d;
  this.q = 2229667594;
  this.G = 8192;
  2 < arguments.length ? (this.F = c, this.v = d) : this.v = this.F = null;
}
k = GB.prototype;
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
  return yB(this.ya) * xB(this.ya);
};
k.gd = function(a, b) {
  var c = yB(this.ya);
  return dh.h(sj, eh.h(rg.j(FB, b, c), AB(this.ya)));
};
k.kd = function(a, b) {
  var c = yB(this.ya);
  return dh.h(sj, eh.h(rg.j(FB, b, c), BB(this.ya)));
};
k.ld = function(a, b) {
  var c = yB(this.ya), d = V, e = wf(b, c), f = wf(b, c);
  return new U(null, 2, 5, d, [e, b - c * f], null);
};
k.jd = function() {
  return EB(this.Za, mB);
};
k.md = function(a, b) {
  for (var c = 0, d = 0;;) {
    if (c < O(this.Za)) {
      var e = P.h(this.Za, c), f = lB(e);
      if (d <= b && b <= d + f + -1) {
        return new U(null, 2, 5, V, [c, oB(e, b - d)], null);
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
      return rB(a, b);
    };
  }(this), this.Za), d = zB(this.ya, EB(c, mB), EB(c, nB), b);
  return R.k(this, $o, d, L([Kq, c], 0));
};
k.N = function(a, b, c) {
  return Gj(b, function() {
    return function(a) {
      return Gj(b, Mj, "", " ", "", c, a);
    };
  }(this), "#org.nfrac.comportex.core.RegionTree{", ", ", "}", c, bg.h(new U(null, 2, 5, V, [new U(null, 2, 5, V, [$o, this.ya], null), new U(null, 2, 5, V, [Kq, this.Za], null)], null), this.v));
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
  return jh.j(jh.j(this, new U(null, 1, 5, V, [Kq], null), function() {
    return function(a) {
      return Cg.h(vB, a);
    };
  }(this)), new U(null, 1, 5, V, [$o], null), vB);
};
k.Sa = function(a, b) {
  return ye(new mj(null, new p(null, 2, [$o, null, Kq, null], null), null), b) ? ge.h(Vd(dh.h(li, this), this.F), b) : new GB(this.ya, this.Za, this.F, kg(ge.h(this.v, b)), null);
};
k.va = function(a, b, c) {
  return q(X.h ? X.h($o, b) : X.call(null, $o, b)) ? new GB(c, this.Za, this.F, this.v, null) : q(X.h ? X.h(Kq, b) : X.call(null, Kq, b)) ? new GB(this.ya, c, this.F, this.v, null) : new GB(this.ya, this.Za, this.F, R.j(this.v, b, c), null);
};
k.Q = function() {
  return D(bg.h(new U(null, 2, 5, V, [new U(null, 2, 5, V, [$o, this.ya], null), new U(null, 2, 5, V, [Kq, this.Za], null)], null), this.v));
};
k.J = function(a, b) {
  return new GB(this.ya, this.Za, b, this.v, this.A);
};
k.S = function(a, b) {
  return re(b) ? Gb(this, v.h(b, 0), v.h(b, 1)) : Ve.j(pb, this, b);
};
function HB(a, b) {
  return new GB(a, b);
}
function IB(a, b) {
  var c = Ve.h(Ze, Cg.h(lB, b)), d = function() {
    var b = qq.g(a);
    return q(b) ? df(b * c) : Pn.g(a);
  }();
  return HB(function() {
    var b = R.k(a, Zn, c, L([Pn, d], 0));
    return CB.g ? CB.g(b) : CB.call(null, b);
  }(), b);
}
function JB(a) {
  return zh(Hf($g.h($o, bh(Kq, Kq, a))));
}
function KB(a) {
  return Cg.h($o, JB(a));
}
function LB(a) {
  return ah.h($o, bh(Kq, Kq, a));
}
function MB(a) {
  return sA(function(a, c) {
    return R.j(a, Kq, c);
  }, a);
}
function NB(a, b, c) {
  for (a = MB(a);;) {
    var d = $o.g(tA(a));
    if (q(d)) {
      var e = d;
      if (B.h(b, Xq.g(e))) {
        return wA(yA(a, function() {
          return function(a) {
            return jh.j(a, new U(null, 1, 5, V, [$o], null), c);
          };
        }(a, e, d)));
      }
      if (AA(a)) {
        return ft;
      }
      a = zA(a);
    } else {
      return null;
    }
  }
}
function OB(a) {
  var b = uj(gj(Tm.g(a))), c = yo.g(a), d = Gt.h(b, c), b = ij.k(L([vj(b, Fg.g(Pq)), vj(c, Fg.g(Lp)), vj(d, Fg.g(pp))], 0));
  return R.k(ij.k(L([new p(null, 3, [Lp, 0, Pq, 0, pp, 0], null), Aj(ji(b))], 0)), vn, vn.g(a), L([Vo, O(Y.g(a))], 0));
}
;var PB, QB, RB, SB;
function TB(a, b) {
  if (a ? a.Bc : a) {
    return a.Bc(a, b);
  }
  var c;
  c = TB[m(null == a ? null : a)];
  if (!c && (c = TB._, !c)) {
    throw t("ReadPort.take!", a);
  }
  return c.call(null, a, b);
}
function UB(a, b, c) {
  if (a ? a.Cc : a) {
    return a.Cc(a, b, c);
  }
  var d;
  d = UB[m(null == a ? null : a)];
  if (!d && (d = UB._, !d)) {
    throw t("WritePort.put!", a);
  }
  return d.call(null, a, b, c);
}
function VB(a) {
  if (a ? a.Xb : a) {
    return a.Xb(a);
  }
  var b;
  b = VB[m(null == a ? null : a)];
  if (!b && (b = VB._, !b)) {
    throw t("Channel.close!", a);
  }
  return b.call(null, a);
}
function WB(a) {
  if (a ? a.rb : a) {
    return a.rb(a);
  }
  var b;
  b = WB[m(null == a ? null : a)];
  if (!b && (b = WB._, !b)) {
    throw t("Handler.active?", a);
  }
  return b.call(null, a);
}
function XB(a) {
  if (a ? a.Ka : a) {
    return a.Ka(a);
  }
  var b;
  b = XB[m(null == a ? null : a)];
  if (!b && (b = XB._, !b)) {
    throw t("Handler.commit", a);
  }
  return b.call(null, a);
}
function YB(a) {
  if (a ? a.Xc : a) {
    return a.Xc();
  }
  var b;
  b = YB[m(null == a ? null : a)];
  if (!b && (b = YB._, !b)) {
    throw t("Buffer.full?", a);
  }
  return b.call(null, a);
}
;function ZB(a, b, c, d, e) {
  for (var f = 0;;) {
    if (f < e) {
      c[d + f] = a[b + f], f += 1;
    } else {
      break;
    }
  }
}
function $B(a, b, c, d) {
  this.head = a;
  this.U = b;
  this.length = c;
  this.l = d;
}
$B.prototype.pop = function() {
  if (0 === this.length) {
    return null;
  }
  var a = this.l[this.U];
  this.l[this.U] = null;
  this.U = (this.U + 1) % this.l.length;
  this.length -= 1;
  return a;
};
$B.prototype.unshift = function(a) {
  this.l[this.head] = a;
  this.head = (this.head + 1) % this.l.length;
  this.length += 1;
  return null;
};
function aC(a, b) {
  a.length + 1 === a.l.length && a.resize();
  a.unshift(b);
}
$B.prototype.resize = function() {
  var a = Array(2 * this.l.length);
  return this.U < this.head ? (ZB(this.l, this.U, a, 0, this.length), this.U = 0, this.head = this.length, this.l = a) : this.U > this.head ? (ZB(this.l, this.U, a, 0, this.l.length - this.U), ZB(this.l, 0, a, this.l.length - this.U, this.head), this.U = 0, this.head = this.length, this.l = a) : this.U === this.head ? (this.head = this.U = 0, this.l = a) : null;
};
function bC(a, b) {
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
function cC(a) {
  if (!(0 < a)) {
    throw Error("Assert failed: Can't create a ring buffer of size 0\n" + u.g(zg.k(L([If(new Ad(null, "\x3e", "\x3e", 1085014381, null), new Ad(null, "n", "n", -2092305744, null), 0)], 0))));
  }
  return new $B(0, 0, 0, Array(a));
}
function dC(a, b) {
  this.ua = a;
  this.Ab = b;
  this.G = 0;
  this.q = 2;
}
dC.prototype.T = function() {
  return this.ua.length;
};
dC.prototype.Xc = function() {
  return this.ua.length === this.Ab;
};
dC.prototype.Ee = function() {
  return this.ua.pop();
};
function eC(a, b) {
  if (!db(YB(a))) {
    throw Error("Assert failed: Can't add to a full buffer\n" + u.g(zg.k(L([If(new Ad(null, "not", "not", 1044554643, null), If(new Ad("impl", "full?", "impl/full?", -97582774, null), new Ad(null, "this", "this", 1028897902, null)))], 0))));
  }
  a.ua.unshift(b);
}
;var fC = null, gC = cC(32), hC = !1, iC = !1;
function jC() {
  hC = !0;
  iC = !1;
  for (var a = 0;;) {
    var b = gC.pop();
    if (null != b && (b.p ? b.p() : b.call(null), 1024 > a)) {
      a += 1;
      continue;
    }
    break;
  }
  hC = !1;
  return 0 < gC.length ? kC.p ? kC.p() : kC.call(null) : null;
}
"undefined" !== typeof MessageChannel && (fC = new MessageChannel, fC.port1.onmessage = function() {
  return jC();
});
function kC() {
  var a = iC;
  if (q(a ? hC : a)) {
    return null;
  }
  iC = !0;
  return "undefined" !== typeof MessageChannel ? fC.port2.postMessage(0) : "undefined" !== typeof setImmediate ? setImmediate(jC) : setTimeout(jC, 0);
}
function lC(a) {
  aC(gC, a);
  kC();
}
function mC(a, b) {
  setTimeout(a, b);
}
;var nC, pC = function oC(b) {
  "undefined" === typeof nC && (nC = function(b, d, e) {
    this.B = b;
    this.le = d;
    this.Ve = e;
    this.G = 0;
    this.q = 425984;
  }, nC.Ca = !0, nC.Ba = "cljs.core.async.impl.channels/t30385", nC.Ga = function(b, d) {
    return Bc(d, "cljs.core.async.impl.channels/t30385");
  }, nC.prototype.Vb = function() {
    return this.B;
  }, nC.prototype.I = function() {
    return this.Ve;
  }, nC.prototype.J = function(b, d) {
    return new nC(this.B, this.le, d);
  });
  return new nC(b, oC, null);
};
function qC(a, b) {
  this.Jb = a;
  this.B = b;
}
function rC(a) {
  return WB(a.Jb);
}
function sC(a, b, c, d, e, f) {
  this.rc = a;
  this.Gc = b;
  this.Mc = c;
  this.Fc = d;
  this.ua = e;
  this.closed = f;
}
sC.prototype.Xb = function() {
  if (!this.closed) {
    for (this.closed = !0;;) {
      var a = this.rc.pop();
      if (null != a) {
        if (a.rb(null)) {
          var b = a.Ka(null);
          lC(function(a) {
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
sC.prototype.Bc = function(a, b) {
  if (b.rb(null)) {
    if (null != this.ua && 0 < O(this.ua)) {
      var c = b.Ka(null);
      return pC(this.ua.Ee());
    }
    for (;;) {
      var d = this.Mc.pop();
      if (null != d) {
        var e = d.Jb, f = d.B;
        if (e.rb(null)) {
          var g = e.Ka(null), c = b.Ka(null);
          lC(function(a) {
            return function() {
              return a.g ? a.g(!0) : a.call(null, !0);
            };
          }(g, c, e, f, d, this));
          return pC(f);
        }
      } else {
        if (this.closed) {
          return c = b.Ka(null), pC(null);
        }
        64 < this.Gc ? (this.Gc = 0, bC(this.rc, WB)) : this.Gc += 1;
        if (!(1024 > this.rc.length)) {
          throw Error("Assert failed: " + u.g("No more than " + u.g(1024) + " pending takes are allowed on a single channel.") + "\n" + u.g(zg.k(L([If(new Ad(null, "\x3c", "\x3c", 993667236, null), If(new Ad(null, ".-length", ".-length", -280799999, null), new Ad(null, "takes", "takes", 298247964, null)), new Ad("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", 1508600732, null))], 0))));
        }
        aC(this.rc, b);
        return null;
      }
    }
  } else {
    return null;
  }
};
sC.prototype.Cc = function(a, b, c) {
  if (null == b) {
    throw Error("Assert failed: Can't put nil in on a channel\n" + u.g(zg.k(L([If(new Ad(null, "not", "not", 1044554643, null), If(new Ad(null, "nil?", "nil?", 1612038930, null), new Ad(null, "val", "val", 1769233139, null)))], 0))));
  }
  if ((a = this.closed) || !c.rb(null)) {
    return pC(!a);
  }
  for (;;) {
    var d = this.rc.pop();
    if (null != d) {
      if (d.rb(null)) {
        var e = d.Ka(null);
        c = c.Ka(null);
        lC(function(a) {
          return function() {
            return a.g ? a.g(b) : a.call(null, b);
          };
        }(e, c, d, a, this));
        return pC(!0);
      }
    } else {
      if (null == this.ua || this.ua.Xc()) {
        64 < this.Fc ? (this.Fc = 0, bC(this.Mc, rC)) : this.Fc += 1;
        if (!(1024 > this.Mc.length)) {
          throw Error("Assert failed: " + u.g("No more than " + u.g(1024) + " pending puts are allowed on a single channel. Consider using a windowed buffer.") + "\n" + u.g(zg.k(L([If(new Ad(null, "\x3c", "\x3c", 993667236, null), If(new Ad(null, ".-length", ".-length", -280799999, null), new Ad(null, "puts", "puts", -1883877054, null)), new Ad("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", 1508600732, null))], 0))));
        }
        aC(this.Mc, new qC(c, b));
        return null;
      }
      c = c.Ka(null);
      eC(this.ua, b);
      return pC(!0);
    }
  }
};
function tC(a) {
  return new sC(cC(32), 0, cC(32), 0, a, !1);
}
;var uC, wC = function vC(b) {
  "undefined" === typeof uC && (uC = function(b, d, e) {
    this.f = b;
    this.cd = d;
    this.Ue = e;
    this.G = 0;
    this.q = 393216;
  }, uC.Ca = !0, uC.Ba = "cljs.core.async.impl.ioc-helpers/t30249", uC.Ga = function(b, d) {
    return Bc(d, "cljs.core.async.impl.ioc-helpers/t30249");
  }, uC.prototype.rb = function() {
    return!0;
  }, uC.prototype.Ka = function() {
    return this.f;
  }, uC.prototype.I = function() {
    return this.Ue;
  }, uC.prototype.J = function(b, d) {
    return new uC(this.f, this.cd, d);
  });
  return new uC(b, vC, null);
};
function xC(a) {
  try {
    return a[0].call(null, a);
  } catch (b) {
    throw b instanceof Object && a[6].Xb(null), b;
  }
}
function yC(a, b, c) {
  c = c.Bc(null, wC(function(c) {
    a[2] = c;
    a[1] = b;
    return xC(a);
  }));
  return q(c) ? (a[2] = M.g ? M.g(c) : M.call(null, c), a[1] = b, Z) : null;
}
function zC(a, b) {
  var c = a[6];
  null != b && c.Cc(null, b, wC(function() {
    return function() {
      return null;
    };
  }(c)));
  c.Xb(null);
  return c;
}
function AC(a) {
  for (;;) {
    var b = a[4], c = Vn.g(b), d = Wp.g(b), e = a[5];
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
      a[4] = R.k(b, Vn, null, L([Wp, null], 0));
      break;
    }
    if (q(function() {
      var a = e;
      return q(a) ? db(c) && db(an.g(b)) : a;
    }())) {
      a[4] = hq.g(b);
    } else {
      if (q(function() {
        var a = e;
        return q(a) ? (a = db(c)) ? an.g(b) : a : a;
      }())) {
        a[1] = an.g(b);
        a[4] = R.j(b, an, null);
        break;
      }
      if (q(function() {
        var a = db(e);
        return a ? an.g(b) : a;
      }())) {
        a[1] = an.g(b);
        a[4] = R.j(b, an, null);
        break;
      }
      if (db(e) && db(an.g(b))) {
        a[1] = oq.g(b);
        a[4] = hq.g(b);
        break;
      }
      throw Error("Assert failed: No matching clause\n" + u.g(zg.k(L([!1], 0))));
    }
  }
}
;var BC = function() {
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
function CC(a, b, c) {
  this.key = a;
  this.B = b;
  this.forward = c;
  this.G = 0;
  this.q = 2155872256;
}
CC.prototype.N = function(a, b, c) {
  return Gj(b, Mj, "[", " ", "]", c, this);
};
CC.prototype.Q = function() {
  return pb(pb(Gd, this.B), this.key);
};
var DC = function() {
  function a(a, b, c) {
    c = Array(c + 1);
    for (var g = 0;;) {
      if (g < c.length) {
        c[g] = null, g += 1;
      } else {
        break;
      }
    }
    return new CC(a, b, c);
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
}(), EC = function() {
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
function FC(a, b) {
  this.Lb = a;
  this.Na = b;
  this.G = 0;
  this.q = 2155872256;
}
FC.prototype.N = function(a, b, c) {
  return Gj(b, function() {
    return function(a) {
      return Gj(b, Mj, "", " ", "", c, a);
    };
  }(this), "{", ", ", "}", c, this);
};
FC.prototype.Q = function() {
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
FC.prototype.put = function(a, b) {
  var c = Array(15), d = EC.m(this.Lb, a, this.Na, c).forward[0];
  if (null != d && d.key === a) {
    return d.B = b;
  }
  d = BC.p();
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
  for (d = DC.j(a, b, Array(d));;) {
    return 0 <= this.Na ? (c = c[0].forward, d.forward[0] = c[0], c[0] = d) : null;
  }
};
FC.prototype.remove = function(a) {
  var b = Array(15), c = EC.m(this.Lb, a, this.Na, b).forward[0];
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
function GC(a) {
  for (var b = HC, c = b.Lb, d = b.Na;;) {
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
var HC = new FC(DC.g(0), 0);
function IC(a) {
  var b = (new Date).valueOf() + a, c = GC(b), d = q(q(c) ? c.key < b + 10 : c) ? c.B : null;
  if (q(d)) {
    return d;
  }
  var e = tC(null);
  HC.put(b, e);
  mC(function(a, b, c) {
    return function() {
      HC.remove(c);
      return a.Xb(null);
    };
  }(e, d, b, c), a);
  return e;
}
;var KC = function JC(b) {
  "undefined" === typeof PB && (PB = function(b, d, e) {
    this.f = b;
    this.cd = d;
    this.Re = e;
    this.G = 0;
    this.q = 393216;
  }, PB.Ca = !0, PB.Ba = "cljs.core.async/t27327", PB.Ga = function(b, d) {
    return Bc(d, "cljs.core.async/t27327");
  }, PB.prototype.rb = function() {
    return!0;
  }, PB.prototype.Ka = function() {
    return this.f;
  }, PB.prototype.I = function() {
    return this.Re;
  }, PB.prototype.J = function(b, d) {
    return new PB(this.f, this.cd, d);
  });
  return new PB(b, JC, null);
}, LC = function() {
  function a(a) {
    a = B.h(a, 0) ? null : a;
    a = "number" === typeof a ? new dC(cC(a), a) : a;
    return tC(a);
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
}(), MC = KC(function() {
  return null;
}), NC = function() {
  function a(a, b, c, d) {
    a = UB(a, b, KC(c));
    return q(a) ? (b = M.g ? M.g(a) : M.call(null, a), q(d) ? c.g ? c.g(b) : c.call(null, b) : lC(function(a) {
      return function() {
        return c.g ? c.g(a) : c.call(null, a);
      };
    }(b, a, a)), b) : !0;
  }
  function b(a, b, c) {
    return d.m(a, b, c, !0);
  }
  function c(a, b) {
    var c = UB(a, b, MC);
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
}(), PC = function OC(b, c) {
  "undefined" === typeof QB && (QB = function(b, c, f, g) {
    this.ch = b;
    this.f = c;
    this.Jc = f;
    this.Kc = g;
    this.G = 0;
    this.q = 393216;
  }, QB.Ca = !0, QB.Ba = "cljs.core.async/t27413", QB.Ga = function(b, c) {
    return Bc(c, "cljs.core.async/t27413");
  }, QB.prototype.Cc = function(b, c, f) {
    return UB(this.ch, c, f);
  }, QB.prototype.Bc = function(b, c) {
    var f = this, g = this, h = TB(f.ch, function() {
      "undefined" === typeof RB && (RB = function(b, c, d, e, f, g, h) {
        this.bd = b;
        this.je = c;
        this.Kc = d;
        this.ch = e;
        this.f = f;
        this.Jc = g;
        this.Se = h;
        this.G = 0;
        this.q = 393216;
      }, RB.Ca = !0, RB.Ba = "cljs.core.async/t27416", RB.Ga = function() {
        return function(b, c) {
          return Bc(c, "cljs.core.async/t27416");
        };
      }(g), RB.prototype.rb = function() {
        return function() {
          return WB(this.bd);
        };
      }(g), RB.prototype.Ka = function(b) {
        return function() {
          var c = this;
          return function(b) {
            return function(d) {
              d = null == d ? null : c.f.g ? c.f.g(d) : c.f.call(null, d);
              return b.g ? b.g(d) : b.call(null, d);
            };
          }(XB(c.bd), this, b);
        };
      }(g), RB.prototype.I = function() {
        return function() {
          return this.Se;
        };
      }(g), RB.prototype.J = function() {
        return function(b, c) {
          return new RB(this.bd, this.je, this.Kc, this.ch, this.f, this.Jc, c);
        };
      }(g));
      return new RB(c, g, f.Kc, f.ch, f.f, f.Jc, null);
    }());
    return q(q(h) ? null != (M.g ? M.g(h) : M.call(null, h)) : h) ? pC(function() {
      var b = M.g ? M.g(h) : M.call(null, h);
      return f.f.g ? f.f.g(b) : f.f.call(null, b);
    }()) : h;
  }, QB.prototype.Xb = function() {
    return VB(this.ch);
  }, QB.prototype.I = function() {
    return this.Kc;
  }, QB.prototype.J = function(b, c) {
    return new QB(this.ch, this.f, this.Jc, c);
  });
  return new QB(c, b, OC, null);
};
function QC(a, b, c) {
  if (a ? a.Hd : a) {
    return a.Hd(a, b, c);
  }
  var d;
  d = QC[m(null == a ? null : a)];
  if (!d && (d = QC._, !d)) {
    throw t("Mult.tap*", a);
  }
  return d.call(null, a, b, c);
}
var RC = function() {
  function a(a, b, c) {
    QC(a, b, c);
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
function SC(a, b) {
  var c = Array.prototype.slice.call(arguments), d = c.shift();
  if ("undefined" == typeof d) {
    throw Error("[goog.string.format] Template required");
  }
  return d.replace(/%([0\-\ \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(a, b, d, h, l, n, r, s) {
    if ("%" == n) {
      return "%";
    }
    var w = c.shift();
    if ("undefined" == typeof w) {
      throw Error("[goog.string.format] Not enough arguments");
    }
    arguments[0] = w;
    return TC[n].apply(null, arguments);
  });
}
var TC = {s:function(a, b, c) {
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
  return TC.f(parseInt(a, 10), b, c, d, 0, f, g, h);
}};
TC.i = TC.d;
TC.u = TC.d;
function UC(a) {
  a.beginPath();
}
function VC(a) {
  a.stroke();
}
function WC(a, b) {
  var c = we(b) ? S.h(vg, b) : b, d = Q.h(c, Fp), e = Q.h(c, fn), f = Q.h(c, Vj), c = Q.h(c, Jq);
  a.clearRect(c, f, e, d);
}
function XC(a, b) {
  var c = we(b) ? S.h(vg, b) : b, d = Q.h(c, Fp), e = Q.h(c, fn), f = Q.h(c, Vj), c = Q.h(c, Jq);
  a.strokeRect(c, f, e, d);
}
function YC(a, b) {
  var c = we(b) ? S.h(vg, b) : b, d = Q.h(c, Fp), e = Q.h(c, fn), f = Q.h(c, Vj), c = Q.h(c, Jq);
  a.fillRect(c, f, e, d);
}
function ZC(a, b) {
  var c = we(b) ? S.h(vg, b) : b, d = Q.h(c, Vj), e = Q.h(c, Jq), c = Q.h(c, zt);
  a.fillText(c, e, d);
}
function $C(a, b) {
  a.fillStyle = Kf(b);
}
function aD(a, b) {
  a.strokeStyle = Kf(b);
}
function bD(a, b) {
  a.globalAlpha = b;
  return a;
}
var cD = function() {
  function a(a, b, c, g) {
    a.drawImage(b, c, g);
    return a;
  }
  function b(a, b, c) {
    var g = we(c) ? S.h(vg, c) : c;
    c = Q.h(g, Rq);
    var h = Q.h(g, Tq), l = Q.h(g, Jq), n = Q.h(g, Vj), r = Q.h(g, rk), s = Q.h(g, yk), w = Q.h(g, fn), A = Q.h(g, hn), y = Q.h(g, En), C = Q.h(g, Fp), F = Q.h(g, wq), I = Q.h(g, Cq), g = O(g);
    if (q(B.h ? B.h(2, g) : B.call(null, 2, g))) {
      a.drawImage(b, l, n);
    } else {
      if (q(B.h ? B.h(4, g) : B.call(null, 4, g))) {
        a.drawImage(b, l, n, w, C);
      } else {
        if (q(B.h ? B.h(8, g) : B.call(null, 8, g))) {
          a.drawImage(b, I, A, h, c, s, y, F, r);
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
}(), dD = function() {
  function a(a, b, c, g, h, l, n) {
    a.bezierCurveTo(b, c, g, h, l, n);
    return a;
  }
  function b(a, b) {
    var c = we(b) ? S.h(vg, b) : b, g = Q.h(c, Vj), h = Q.h(c, Jq), l = Q.h(c, Wq), n = Q.h(c, wp), r = Q.h(c, rq), c = Q.h(c, rp);
    a.bezierCurveTo(c, r, n, l, h, g);
    return a;
  }
  var c = null, c = function(c, e, f, g, h, l, n) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 7:
        return a.call(this, c, e, f, g, h, l, n);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.h = b;
  c.Aa = a;
  return c;
}();
var eD, fD, gD = new p(null, 5, [Vq, new p(null, 2, [Lp, !0, Pq, !0], null), Y, new p(null, 5, [Lp, !0, Np, null, On, !0, Bm, !0, ym, 0], null), dk, new p(null, 3, [Lp, null, Uj, null, et, null], null), Pm, new p(null, 5, [Gp, Zo, Lp, !0, Uj, null, Lm, null, et, null], null), Aq, fe([Yj, zk, $m, bn, cn, Rn, Xo, Mq, qt, rt, xt], [30, 50, 10, 80, .85, 25, 2, 5, 5, .85, 10])], null);
fD = xg.g ? xg.g(gD) : xg.call(null, gD);
var hD = xg.g ? xg.g(25) : xg.call(null, 25), iD = xg.g ? xg.g(Zd) : xg.call(null, Zd), jD = xg.g ? xg.g(null) : xg.call(null, null), kD = function() {
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
}(), $ = new p(null, 7, [Cn, "white", Uj, "white", Lp, kD.j(Sp, 1, .5), Pq, kD.m(Up, 1, .5, .5), pp, kD.j(er, 1, .4), Wm, kD.m(Vm, 1, .75, .5), Bm, kD.m(pn, 1, .5, .4)], null);
function lD(a) {
  if (a ? a.Rd : a) {
    return a.Rd();
  }
  var b;
  b = lD[m(null == a ? null : a)];
  if (!b && (b = lD._, !b)) {
    throw t("PArrayLayout.layout-bounds", a);
  }
  return b.call(null, a);
}
function mD(a, b) {
  if (a ? a.Ud : a) {
    return a.Ud(0, b);
  }
  var c;
  c = mD[m(null == a ? null : a)];
  if (!c && (c = mD._, !c)) {
    throw t("PArrayLayout.origin-px-topleft", a);
  }
  return c.call(null, a, b);
}
function nD(a, b) {
  if (a ? a.Sd : a) {
    return a.Sd(0, b);
  }
  var c;
  c = nD[m(null == a ? null : a)];
  if (!c && (c = nD._, !c)) {
    throw t("PArrayLayout.local-px-topleft", a);
  }
  return c.call(null, a, b);
}
function oD(a) {
  if (a ? a.Od : a) {
    return a.Od();
  }
  var b;
  b = oD[m(null == a ? null : a)];
  if (!b && (b = oD._, !b)) {
    throw t("PArrayLayout.element-size-px", a);
  }
  return b.call(null, a);
}
function pD(a) {
  if (a ? a.Td : a) {
    return a.Td();
  }
  var b;
  b = pD[m(null == a ? null : a)];
  if (!b && (b = pD._, !b)) {
    throw t("PArrayLayout.n-onscreen", a);
  }
  return b.call(null, a);
}
function qD(a) {
  if (a ? a.He : a) {
    return a.ma;
  }
  var b;
  b = qD[m(null == a ? null : a)];
  if (!b && (b = qD._, !b)) {
    throw t("PArrayLayout.top-id-onscreen", a);
  }
  return b.call(null, a);
}
function rD(a, b, c) {
  if (a ? a.Md : a) {
    return a.Md(0, b, c);
  }
  var d;
  d = rD[m(null == a ? null : a)];
  if (!d && (d = rD._, !d)) {
    throw t("PArrayLayout.clicked-id", a);
  }
  return d.call(null, a, b, c);
}
function sD(a, b, c) {
  if (a ? a.Nd : a) {
    return a.Nd(0, b, c);
  }
  var d;
  d = sD[m(null == a ? null : a)];
  if (!d && (d = sD._, !d)) {
    throw t("PArrayLayout.draw-element", a);
  }
  return d.call(null, a, b, c);
}
function tD(a, b, c) {
  if (a ? a.Pd : a) {
    return a.Pd(0, b, c);
  }
  var d;
  d = tD[m(null == a ? null : a)];
  if (!d && (d = tD._, !d)) {
    throw t("PArrayLayout.highlight-dt", a);
  }
  return d.call(null, a, b, c);
}
function uD(a, b, c, d) {
  if (a ? a.Qd : a) {
    return a.Qd(0, b, c, d);
  }
  var e;
  e = uD[m(null == a ? null : a)];
  if (!e && (e = uD._, !e)) {
    throw t("PArrayLayout.highlight-element", a);
  }
  return e.call(null, a, b, c, d);
}
function vD(a) {
  a = lD(a);
  return Jq.g(a) + fn.g(a);
}
function wD(a, b, c) {
  var d = oD(a), e = P.j(d, 0, null), d = P.j(d, 1, null), f = mD(a, c);
  c = P.j(f, 0, null);
  f = P.j(f, 1, null);
  b = nD(a, b);
  a = P.j(b, 0, null);
  b = P.j(b, 1, null);
  return new U(null, 2, 5, V, [c + a + .5 * e, f + b + .5 * d], null);
}
function xD(a, b, c) {
  var d = qD(b), e = d + pD(b) + -1;
  UC(a);
  c = D(c);
  for (var f = null, g = 0, h = 0;;) {
    if (h < g) {
      var l = f.D(null, h);
      d <= l && l <= e && sD(b, a, l);
      h += 1;
    } else {
      if (c = D(c)) {
        f = c, T(f) ? (c = x(f), h = z(f), f = c, g = O(c), c = h) : (c = E(f), d <= c && c <= e && sD(b, a, c), c = H(f), f = null, g = 0), h = 0;
      } else {
        break;
      }
    }
  }
}
function yD(a, b, c) {
  a.save();
  c = D(Sj(c, gj(c)));
  for (var d = null, e = 0, f = 0;;) {
    if (f < e) {
      var g = d.D(null, f), h = P.j(g, 0, null), g = P.j(g, 1, null);
      xD(a, b, g);
      g = a;
      bD.h ? bD.h(g, h) : bD.call(null, g, h);
      a.fill();
      f += 1;
    } else {
      if (c = D(c)) {
        T(c) ? (e = x(c), c = z(c), d = e, e = O(e)) : (e = E(c), d = P.j(e, 0, null), e = P.j(e, 1, null), xD(a, b, e), e = a, bD.h ? bD.h(e, d) : bD.call(null, e, d), a.fill(), c = H(c), d = null, e = 0), f = 0;
      } else {
        break;
      }
    }
  }
  a.restore();
}
function zD(a, b, c, d) {
  c = mD(b, c);
  b = P.j(c, 0, null);
  c = P.j(c, 1, null);
  cD.m(a, d, b, c);
}
function AD(a, b, c, d) {
  return new p(null, 4, [Jq, a - c / 2, Vj, b - d / 2, fn, c, Fp, d], null);
}
function BD(a, b) {
  aD(a, Wm.g($));
  a.lineWidth = 3;
  XC(a, b);
  aD(a, "black");
  a.lineWidth = 1;
  XC(a, b);
  return a;
}
function CD(a, b, c, d, e, f, g, h, l, n) {
  this.xa = a;
  this.ma = b;
  this.pa = c;
  this.ea = d;
  this.fa = e;
  this.ta = f;
  this.ra = g;
  this.za = h;
  this.F = l;
  this.v = n;
  this.q = 2229667594;
  this.G = 8192;
  8 < arguments.length ? (this.F = l, this.v = n) : this.v = this.F = null;
}
k = CD.prototype;
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
  }(this), "#comportexviz.viz-canvas.Grid1dLayout{", ", ", "}", c, bg.h(new U(null, 8, 5, V, [new U(null, 2, 5, V, [pt, this.xa], null), new U(null, 2, 5, V, [xm, this.ma], null), new U(null, 2, 5, V, [Rn, this.pa], null), new U(null, 2, 5, V, [At, this.ea], null), new U(null, 2, 5, V, [jn, this.fa], null), new U(null, 2, 5, V, [Ln, this.ta], null), new U(null, 2, 5, V, [bq, this.ra], null), new U(null, 2, 5, V, [ir, this.za], null)], null), this.v));
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
  c = mD(this, c);
  a = P.j(c, 0, null);
  c = P.j(c, 1, null);
  var d = lD(this);
  return BD(b, new p(null, 4, [Jq, a, Vj, c - 5, fn, this.ea + 1, Fp, 10 + Fp.g(d)], null));
};
k.Od = function() {
  return new U(null, 2, 5, V, [this.ea, this.fa], null);
};
k.Nd = function(a, b, c) {
  c = nD(this, c);
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
  return 0 <= a && a <= O(M.g ? M.g(iD) : M.call(null, iD)) && 0 <= f && f <= pD(this) ? new U(null, 2, 5, V, [a, g], null) : null;
};
k.Qd = function(a, b, c, d) {
  a = mD(this, c);
  P.j(a, 0, null);
  a = P.j(a, 1, null);
  d = nD(this, d);
  P.j(d, 0, null);
  d = P.j(d, 1, null);
  c = lD(this);
  return BD(b, new p(null, 4, [Jq, Jq.g(c) - 5, Vj, a + d, fn, fn.g(c) + 10, Fp, this.fa + 1], null));
};
k.Rd = function() {
  return new p(null, 4, [Jq, this.ra, Vj, 20, fn, this.pa * this.ea, Fp, this.xa * this.fa], null);
};
k.P = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Cf(this);
};
k.M = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && ei(this, b) : b) ? !0 : !1;
};
k.Sa = function(a, b) {
  return ye(new mj(null, new p(null, 8, [xm, null, jn, null, Ln, null, Rn, null, bq, null, ir, null, pt, null, At, null], null), null), b) ? ge.h(Vd(dh.h(li, this), this.F), b) : new CD(this.xa, this.ma, this.pa, this.ea, this.fa, this.ta, this.ra, this.za, this.F, kg(ge.h(this.v, b)), null);
};
k.va = function(a, b, c) {
  return q(X.h ? X.h(pt, b) : X.call(null, pt, b)) ? new CD(c, this.ma, this.pa, this.ea, this.fa, this.ta, this.ra, this.za, this.F, this.v, null) : q(X.h ? X.h(xm, b) : X.call(null, xm, b)) ? new CD(this.xa, c, this.pa, this.ea, this.fa, this.ta, this.ra, this.za, this.F, this.v, null) : q(X.h ? X.h(Rn, b) : X.call(null, Rn, b)) ? new CD(this.xa, this.ma, c, this.ea, this.fa, this.ta, this.ra, this.za, this.F, this.v, null) : q(X.h ? X.h(At, b) : X.call(null, At, b)) ? new CD(this.xa, this.ma, 
  this.pa, c, this.fa, this.ta, this.ra, this.za, this.F, this.v, null) : q(X.h ? X.h(jn, b) : X.call(null, jn, b)) ? new CD(this.xa, this.ma, this.pa, this.ea, c, this.ta, this.ra, this.za, this.F, this.v, null) : q(X.h ? X.h(Ln, b) : X.call(null, Ln, b)) ? new CD(this.xa, this.ma, this.pa, this.ea, this.fa, c, this.ra, this.za, this.F, this.v, null) : q(X.h ? X.h(bq, b) : X.call(null, bq, b)) ? new CD(this.xa, this.ma, this.pa, this.ea, this.fa, this.ta, c, this.za, this.F, this.v, null) : q(X.h ? 
  X.h(ir, b) : X.call(null, ir, b)) ? new CD(this.xa, this.ma, this.pa, this.ea, this.fa, this.ta, this.ra, c, this.F, this.v, null) : new CD(this.xa, this.ma, this.pa, this.ea, this.fa, this.ta, this.ra, this.za, this.F, R.j(this.v, b, c), null);
};
k.Q = function() {
  return D(bg.h(new U(null, 8, 5, V, [new U(null, 2, 5, V, [pt, this.xa], null), new U(null, 2, 5, V, [xm, this.ma], null), new U(null, 2, 5, V, [Rn, this.pa], null), new U(null, 2, 5, V, [At, this.ea], null), new U(null, 2, 5, V, [jn, this.fa], null), new U(null, 2, 5, V, [Ln, this.ta], null), new U(null, 2, 5, V, [bq, this.ra], null), new U(null, 2, 5, V, [ir, this.za], null)], null), this.v));
};
k.J = function(a, b) {
  return new CD(this.xa, this.ma, this.pa, this.ea, this.fa, this.ta, this.ra, this.za, b, this.v, this.A);
};
k.S = function(a, b) {
  return re(b) ? Gb(this, v.h(b, 0), v.h(b, 1)) : Ve.j(pb, this, b);
};
function DD(a) {
  return new CD(pt.g(a), xm.g(a), Rn.g(a), At.g(a), jn.g(a), Ln.g(a), bq.g(a), ir.g(a), null, ge.k(a, pt, L([xm, Rn, At, jn, Ln, bq, ir], 0)));
}
function ED(a, b) {
  var c = we(b) ? S.h(vg, b) : b, d = Q.h(c, rt), e = Q.h(c, Xo), f = Q.h(c, Mq), c = Q.h(c, Rn);
  return DD(new p(null, 8, [pt, a, xm, 0, Rn, c, At, f, jn, e, Ln, d, bq, 0, ir, !1], null));
}
function FD(a, b, c) {
  var d = we(c) ? S.h(vg, c) : c;
  c = Q.h(d, cn);
  var e = Q.h(d, qt), d = Q.h(d, Rn);
  return DD(new p(null, 8, [pt, a, xm, 0, Rn, d, At, e, jn, e, Ln, c, bq, b, ir, !0], null));
}
function GD(a) {
  Ag.m(jD, jh, new U(null, 1, 5, V, [un], null), function(b) {
    return eh.h(function(b) {
      var d = pD(b), e = pt.g(b);
      return jh.j(b, new U(null, 1, 5, V, [xm], null), function(b, c) {
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
  return Ag.m(fD, jh, new U(null, 2, 5, V, [Y, ym], null), function(b) {
    return q(a) ? b + 1 : b - 1;
  });
}
function HD(a, b, c, d, e, f, g, h, l) {
  a.save();
  a.lineWidth = 1;
  bD(a, 1);
  for (var n = q(g) ? new U(null, 1, 5, V, [g], null) : yo.g(b), r = sB.g(e), s = tB.g(e), w = gh.h(l, new U(null, 2, 5, V, [dk, Uj], null)), A = gh.h(l, new U(null, 2, 5, V, [dk, et], null)), y = D(n), C = null, F = 0, I = 0;;) {
    if (I < F) {
      for (var N = C.D(null, I), K = D(bg.h(q(w) ? new U(null, 1, 5, V, [Uj], null) : null, new U(null, 2, 5, V, [Lp, pp], null))), da = null, fa = 0, J = 0;;) {
        if (J < fa) {
          var za = da.D(null, J), ga = gh.h(c, new U(null, 2, 5, V, [Y, N], null)), na = Fn.g(dk.g(ga)), wa = function() {
            switch(za instanceof W ? za.$ : null) {
              case "inactive":
                return S.j(ge, na, r);
              case "active-predicted":
                return kj(na, s);
              case "active":
                return kj(na, r);
              default:
                throw Error("No matching clause: " + u.g(za));;
            }
          }(), Ha = wD(d, N, h), Ea = P.j(Ha, 0, null), kb = P.j(Ha, 1, null);
          aD(a, function() {
            var a = za;
            return $.g ? $.g(a) : $.call(null, a);
          }());
          for (var Ma = D(wa), Xa = null, lb = 0, Na = 0;;) {
            if (Na < lb) {
              var tb = Xa.D(null, Na), Oa = P.j(tb, 0, null), sa = P.j(tb, 1, null), Ib = oB(e, Oa), Jb = P.j(Ib, 0, null);
              P.j(Ib, 1, null);
              var cb = wD(f, Jb, h), ub = P.j(cb, 0, null), ea = P.j(cb, 1, null), bc = a;
              bD(bc, q(A) ? sa : 1);
              UC(bc);
              bc.moveTo(Ea - 1, kb);
              bc.lineTo(ub + 1, ea);
              VC(bc);
              Na += 1;
            } else {
              var $c = D(Ma);
              if ($c) {
                var cc = $c;
                if (T(cc)) {
                  var Fc = x(cc), jc = z(cc), Kb = Fc, Sb = O(Fc), Ma = jc, Xa = Kb, lb = Sb
                } else {
                  var Rc = E(cc), Gg = P.j(Rc, 0, null), Hg = P.j(Rc, 1, null), fd = oB(e, Gg), ef = P.j(fd, 0, null);
                  P.j(fd, 1, null);
                  var ff = wD(f, ef, h), Ig = P.j(ff, 0, null), Sc = P.j(ff, 1, null), Eb = a;
                  bD(Eb, q(A) ? Hg : 1);
                  UC(Eb);
                  Eb.moveTo(Ea - 1, kb);
                  Eb.lineTo(Ig + 1, Sc);
                  VC(Eb);
                  Ma = H(cc);
                  Xa = null;
                  lb = 0;
                }
                Na = 0;
              } else {
                break;
              }
            }
          }
          J += 1;
        } else {
          var vc = D(K);
          if (vc) {
            var Tb = vc;
            if (T(Tb)) {
              var Tc = x(Tb), gf = z(Tb), hf = Tc, Gc = O(Tc), K = gf, da = hf, fa = Gc
            } else {
              var $d = E(Tb), Ih = gh.h(c, new U(null, 2, 5, V, [Y, N], null)), jf = Fn.g(dk.g(Ih)), Uc = function() {
                switch($d instanceof W ? $d.$ : null) {
                  case "inactive":
                    return S.j(ge, jf, r);
                  case "active-predicted":
                    return kj(jf, s);
                  case "active":
                    return kj(jf, r);
                  default:
                    throw Error("No matching clause: " + u.g($d));;
                }
              }(), Nb = wD(d, N, h), kc = P.j(Nb, 0, null), gd = P.j(Nb, 1, null);
              aD(a, function() {
                var a = $d;
                return $.g ? $.g(a) : $.call(null, a);
              }());
              for (var Hc = D(Uc), wc = null, va = 0, Lb = 0;;) {
                if (Lb < va) {
                  var hd = wc.D(null, Lb), Ae = P.j(hd, 0, null), xc = P.j(hd, 1, null), id = oB(e, Ae), Zb = P.j(id, 0, null);
                  P.j(id, 1, null);
                  var Ub = wD(f, Zb, h), jd = P.j(Ub, 0, null), ae = P.j(Ub, 1, null), Ic = a;
                  bD(Ic, q(A) ? xc : 1);
                  UC(Ic);
                  Ic.moveTo(kc - 1, gd);
                  Ic.lineTo(jd + 1, ae);
                  VC(Ic);
                  Lb += 1;
                } else {
                  var Xb = D(Hc);
                  if (Xb) {
                    var yc = Xb;
                    if (T(yc)) {
                      var Be = x(yc), Pf = z(yc), Jh = Be, be = O(Be), Hc = Pf, wc = Jh, va = be
                    } else {
                      var $b = E(yc), Vb = P.j($b, 0, null), Dd = P.j($b, 1, null), Ce = oB(e, Vb), De = P.j(Ce, 0, null);
                      P.j(Ce, 1, null);
                      var kd = wD(f, De, h), Ee = P.j(kd, 0, null), Vc = P.j(kd, 1, null), Ka = a;
                      bD(Ka, q(A) ? Dd : 1);
                      UC(Ka);
                      Ka.moveTo(kc - 1, gd);
                      Ka.lineTo(Ee + 1, Vc);
                      VC(Ka);
                      Hc = H(yc);
                      wc = null;
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
              fa = 0;
            }
            J = 0;
          } else {
            break;
          }
        }
      }
      I += 1;
    } else {
      var Fe = D(y);
      if (Fe) {
        var qb = Fe;
        if (T(qb)) {
          var ac = x(qb), Qf = z(qb), Jg = ac, Rf = O(ac), y = Qf, C = Jg, F = Rf
        } else {
          for (var kf = E(qb), lf = D(bg.h(q(w) ? new U(null, 1, 5, V, [Uj], null) : null, new U(null, 2, 5, V, [Lp, pp], null))), ce = null, ld = 0, md = 0;;) {
            if (md < ld) {
              var Wc = ce.D(null, md), Ob = gh.h(c, new U(null, 2, 5, V, [Y, kf], null)), mf = Fn.g(dk.g(Ob)), nd = function() {
                switch(Wc instanceof W ? Wc.$ : null) {
                  case "inactive":
                    return S.j(ge, mf, r);
                  case "active-predicted":
                    return kj(mf, s);
                  case "active":
                    return kj(mf, r);
                  default:
                    throw Error("No matching clause: " + u.g(Wc));;
                }
              }(), Kg = wD(d, kf, h), Lg = P.j(Kg, 0, null), nf = P.j(Kg, 1, null);
              aD(a, function() {
                var a = Wc;
                return $.g ? $.g(a) : $.call(null, a);
              }());
              for (var Ge = D(nd), Ed = null, Xc = 0, od = 0;;) {
                if (od < Xc) {
                  var Fd = Ed.D(null, od), He = P.j(Fd, 0, null), Sf = P.j(Fd, 1, null), Yc = oB(e, He), Kh = P.j(Yc, 0, null);
                  P.j(Yc, 1, null);
                  var of = wD(f, Kh, h), Ak = P.j(of, 0, null), Bk = P.j(of, 1, null), Ie = a;
                  bD(Ie, q(A) ? Sf : 1);
                  UC(Ie);
                  Ie.moveTo(Lg - 1, nf);
                  Ie.lineTo(Ak + 1, Bk);
                  VC(Ie);
                  od += 1;
                } else {
                  var Mg = D(Ge);
                  if (Mg) {
                    var Je = Mg;
                    if (T(Je)) {
                      var pf = x(Je), nj = z(Je), qf = pf, pr = O(pf), Ge = nj, Ed = qf, Xc = pr
                    } else {
                      var no = E(Je), oo = P.j(no, 0, null), qr = P.j(no, 1, null), po = oB(e, oo), Lh = P.j(po, 0, null);
                      P.j(po, 1, null);
                      var Ck = wD(f, Lh, h), Mh = P.j(Ck, 0, null), Nh = P.j(Ck, 1, null), Oh = a;
                      bD(Oh, q(A) ? qr : 1);
                      UC(Oh);
                      Oh.moveTo(Lg - 1, nf);
                      Oh.lineTo(Mh + 1, Nh);
                      VC(Oh);
                      Ge = H(Je);
                      Ed = null;
                      Xc = 0;
                    }
                    od = 0;
                  } else {
                    break;
                  }
                }
              }
              md += 1;
            } else {
              var qo = D(lf);
              if (qo) {
                var Ph = qo;
                if (T(Ph)) {
                  var Dk = x(Ph), ro = z(Ph), rr = Dk, oj = O(Dk), lf = ro, ce = rr, ld = oj
                } else {
                  var Qh = E(Ph), sr = gh.h(c, new U(null, 2, 5, V, [Y, kf], null)), Ek = Fn.g(dk.g(sr)), Rh = function() {
                    switch(Qh instanceof W ? Qh.$ : null) {
                      case "inactive":
                        return S.j(ge, Ek, r);
                      case "active-predicted":
                        return kj(Ek, s);
                      case "active":
                        return kj(Ek, r);
                      default:
                        throw Error("No matching clause: " + u.g(Qh));;
                    }
                  }(), Fk = wD(d, kf, h), Ng = P.j(Fk, 0, null), Gk = P.j(Fk, 1, null);
                  aD(a, function() {
                    var a = Qh;
                    return $.g ? $.g(a) : $.call(null, a);
                  }());
                  for (var Hk = D(Rh), Ik = null, Jk = 0, Sh = 0;;) {
                    if (Sh < Jk) {
                      var so = Ik.D(null, Sh), Kk = P.j(so, 0, null), Lk = P.j(so, 1, null), pj = oB(e, Kk), Th = P.j(pj, 0, null);
                      P.j(pj, 1, null);
                      var Mk = wD(f, Th, h), to = P.j(Mk, 0, null), tr = P.j(Mk, 1, null), Uh = a;
                      bD(Uh, q(A) ? Lk : 1);
                      UC(Uh);
                      Uh.moveTo(Ng - 1, Gk);
                      Uh.lineTo(to + 1, tr);
                      VC(Uh);
                      Sh += 1;
                    } else {
                      var Nk = D(Hk);
                      if (Nk) {
                        var Vh = Nk;
                        if (T(Vh)) {
                          var uo = x(Vh), Wh = z(Vh), vo = uo, Xh = O(uo), Hk = Wh, Ik = vo, Jk = Xh
                        } else {
                          var Ok = E(Vh), ur = P.j(Ok, 0, null), vr = P.j(Ok, 1, null), wo = oB(e, ur), xo = P.j(wo, 0, null);
                          P.j(wo, 1, null);
                          var Pk = wD(f, xo, h), wr = P.j(Pk, 0, null), xr = P.j(Pk, 1, null), Og = a;
                          bD(Og, q(A) ? vr : 1);
                          UC(Og);
                          Og.moveTo(Ng - 1, Gk);
                          Og.lineTo(wr + 1, xr);
                          VC(Og);
                          Hk = H(Vh);
                          Ik = null;
                          Jk = 0;
                        }
                        Sh = 0;
                      } else {
                        break;
                      }
                    }
                  }
                  lf = H(Ph);
                  ce = null;
                  ld = 0;
                }
                md = 0;
              } else {
                break;
              }
            }
          }
          y = H(qb);
          C = null;
          F = 0;
        }
        I = 0;
      } else {
        break;
      }
    }
  }
  a.restore();
}
function ID(a, b, c) {
  return Sj(function(a) {
    var e = P.j(a, 0, null);
    a = P.j(a, 1, null);
    return new U(null, 2, 5, V, [a >= c ? Fn : Lm, q(b.g ? b.g(e) : b.call(null, e)) ? Lp : Uj], null);
  }, a);
}
function JD(a, b, c) {
  if (a ? a.Yb : a) {
    return a.Yb(a, b, c);
  }
  var d;
  d = JD[m(null == a ? null : a)];
  if (!d && (d = JD._, !d)) {
    throw t("PCellsSegmentsLayout.seg-xy", a);
  }
  return d.call(null, a, b, c);
}
function KD(a, b) {
  if (a ? a.Dc : a) {
    return a.Dc(a, b);
  }
  var c;
  c = KD[m(null == a ? null : a)];
  if (!c && (c = KD._, !c)) {
    throw t("PCellsSegmentsLayout.cell-xy", a);
  }
  return c.call(null, a, b);
}
var MD = function LD(b, c, d, e, f, g) {
  var h = O(b), l = Cg.h(qg.h(O, ho), b), n = Cg.h(rg.h(bf, 1), l), r = S.h(Ze, n), s = f + gh.h(g, new U(null, 2, 5, V, [Aq, zk], null)), w = gh.h(g, new U(null, 2, 5, V, [Aq, qt], null)), A = .5 * w, y = gh.h(g, new U(null, 2, 5, V, [Aq, xt], null)), C = gh.h(g, new U(null, 2, 5, V, [Aq, $m], null)), F = gh.h(g, new U(null, 2, 5, V, [Aq, Yj], null)), I = .5 * F, N = .95 * window.innerHeight, K = window.pageYOffset + 2 * y, da = wD(c, d, e), fa = P.j(da, 0, null), J = P.j(da, 1, null);
  "undefined" === typeof eD && (eD = function(b, c, d, e, f, g, h, l, r, n, s, w, J, A, y, C, F, I, K, N, da, fa, Fc, jc) {
    this.cells = b;
    this.Af = c;
    this.ae = d;
    this.ge = e;
    this.Fe = f;
    this.Ge = g;
    this.vd = h;
    this.tf = l;
    this.ce = r;
    this.cf = n;
    this.Zc = s;
    this.ne = w;
    this.oe = J;
    this.sf = A;
    this.Ie = y;
    this.df = C;
    this.Ld = F;
    this.Yc = I;
    this.$d = K;
    this.he = N;
    this.hf = da;
    this.de = fa;
    this.wd = Fc;
    this.Qe = jc;
    this.G = 0;
    this.q = 393216;
  }, eD.Ca = !0, eD.Ba = "comportexviz.viz-canvas/t18380", eD.Ga = function() {
    return function(b, c) {
      return Bc(c, "comportexviz.viz-canvas/t18380");
    };
  }(h, l, n, r, s, w, A, y, C, F, I, N, K, da, fa, J), eD.prototype.Yb = function() {
    return function(b, c, d) {
      b = S.j(Ze, d, Dg.h(c, this.ae)) / this.$d;
      return new U(null, 2, 5, V, [this.he + this.ge, this.de + 20 + b * this.ce], null);
    };
  }(h, l, n, r, s, w, A, y, C, F, I, N, K, da, fa, J), eD.prototype.Dc = function() {
    return function(b, c) {
      var d = JD(this, c, 0);
      P.j(d, 0, null);
      d = P.j(d, 1, null);
      return new U(null, 2, 5, V, [this.wd, d], null);
    };
  }(h, l, n, r, s, w, A, y, C, F, I, N, K, da, fa, J), eD.prototype.Ec = function() {
    return function(b, c, d) {
      d = KD(this, d);
      b = P.j(d, 0, null);
      d = P.j(d, 1, null);
      UC(c);
      c.moveTo(this.Yc + this.Ld + 1, this.Zc);
      var e = this.Yc, f = (b - e) / 3;
      dD.Aa(c, b - f, this.Zc, e + f, d, b, d);
      VC(c);
      return c;
    };
  }(h, l, n, r, s, w, A, y, C, F, I, N, K, da, fa, J), eD.prototype.yb = function() {
    return function(b, c, d, e) {
      var f = KD(this, d);
      b = P.j(f, 0, null);
      f = P.j(f, 1, null);
      e = JD(this, d, e);
      d = P.j(e, 0, null);
      e = P.j(e, 1, null);
      UC(c);
      c.moveTo(d, e);
      c.lineTo(b + this.vd, f);
      VC(c);
      return c;
    };
  }(h, l, n, r, s, w, A, y, C, F, I, N, K, da, fa, J), eD.prototype.I = function() {
    return function() {
      return this.Qe;
    };
  }(h, l, n, r, s, w, A, y, C, F, I, N, K, da, fa, J), eD.prototype.J = function() {
    return function(b, c) {
      return new eD(this.cells, this.Af, this.ae, this.ge, this.Fe, this.Ge, this.vd, this.tf, this.ce, this.cf, this.Zc, this.ne, this.oe, this.sf, this.Ie, this.df, this.Ld, this.Yc, this.$d, this.he, this.hf, this.de, this.wd, c);
    };
  }(h, l, n, r, s, w, A, y, C, F, I, N, K, da, fa, J));
  return new eD(b, da, n, I, w, c, y, F, N, h, J, LD, d, C, e, l, A, fa, r, s, g, K, f, null);
};
function ND(a, b, c, d, e, f, g, h) {
  a.save();
  var l = gh.h(c, new U(null, 2, 5, V, [Y, e], null)), n = lp.g(c), r = zo.g(lp.g(b)), s = Tp.g(n), w = Bp.g(c), A = Rp.g(c), y = dn.g(b), C = gh.h(b, new U(null, 2, 5, V, [yo, e], null)), F = gh.h(b, new U(null, 2, 5, V, [lr, e], null)), I = Bp.g(b), N = Zq.g(l), K = MD(N, d, e, f, g, h), da = gh.h(h, new U(null, 2, 5, V, [Aq, qt], null)), fa = gh.h(h, new U(null, 2, 5, V, [Aq, xt], null)), J = gh.h(h, new U(null, 2, 5, V, [Aq, $m], null)), za = gh.h(h, new U(null, 2, 5, V, [Aq, Yj], null)), ga = 
  .5 * za;
  a.lineWidth = da;
  aD(a, Cn.g($));
  for (var na = D(sg(Ah, N)), wa = null, Ha = 0, Ea = 0;;) {
    if (Ea < Ha) {
      var kb = wa.D(null, Ea), Ma = P.j(kb, 0, null), Xa = P.j(kb, 1, null), lb = we(Xa) ? S.h(vg, Xa) : Xa, Na = Q.h(lb, ho);
      K.Ec(null, a, Ma);
      for (var tb = D(zj.g(O(Na))), Oa = null, sa = 0, Ib = 0;;) {
        if (Ib < sa) {
          var Jb = Oa.D(null, Ib);
          K.yb(null, a, Ma, Jb);
          Ib += 1;
        } else {
          var cb = D(tb);
          if (cb) {
            var ub = cb;
            if (T(ub)) {
              var ea = x(ub), bc = z(ub), $c = ea, cc = O(ea), tb = bc, Oa = $c, sa = cc
            } else {
              var Fc = E(ub);
              K.yb(null, a, Ma, Fc);
              tb = H(ub);
              Oa = null;
              sa = 0;
            }
            Ib = 0;
          } else {
            break;
          }
        }
      }
      Ea += 1;
    } else {
      var jc = D(na);
      if (jc) {
        var Kb = jc;
        if (T(Kb)) {
          var Sb = x(Kb), Rc = z(Kb), Gg = Sb, Hg = O(Sb), na = Rc, wa = Gg, Ha = Hg
        } else {
          var fd = E(Kb), ef = P.j(fd, 0, null), ff = P.j(fd, 1, null), Ig = we(ff) ? S.h(vg, ff) : ff, Sc = Q.h(Ig, ho);
          K.Ec(null, a, ef);
          for (var Eb = D(zj.g(O(Sc))), vc = null, Tb = 0, Tc = 0;;) {
            if (Tc < Tb) {
              var gf = vc.D(null, Tc);
              K.yb(null, a, ef, gf);
              Tc += 1;
            } else {
              var hf = D(Eb);
              if (hf) {
                var Gc = hf;
                if (T(Gc)) {
                  var $d = x(Gc), Ih = z(Gc), jf = $d, Uc = O($d), Eb = Ih, vc = jf, Tb = Uc
                } else {
                  var Nb = E(Gc);
                  K.yb(null, a, ef, Nb);
                  Eb = H(Gc);
                  vc = null;
                  Tb = 0;
                }
                Tc = 0;
              } else {
                break;
              }
            }
          }
          na = H(Kb);
          wa = null;
          Ha = 0;
        }
        Ea = 0;
      } else {
        break;
      }
    }
  }
  for (var kc = D(sg(Ah, N)), gd = null, Hc = 0, wc = 0;;) {
    if (wc < Hc) {
      var va = gd.D(null, wc), Lb = P.j(va, 0, null), hd = P.j(va, 1, null), Ae = we(hd) ? S.h(vg, hd) : hd, xc = Q.h(Ae, ho), id = K.Dc(null, Lb), Zb = P.j(id, 0, null), Ub = P.j(id, 1, null), jd = new U(null, 2, 5, V, [e, Lb], null), ae = function() {
        var a = jd;
        return I.g ? I.g(a) : I.call(null, a);
      }(), Ic = function() {
        var a = jd;
        return A.g ? A.g(a) : A.call(null, a);
      }(), Xb = ze(y, jd), yc = q(Xb) ? Rb(Xb) : null, Be = eh.h(function(a, b, c, d, e, f, g, h, l, r, n, s, w, J, A, y, C, F, I, K, ga, qf) {
        return function(a) {
          return ID(ko.g(a), qf, ga);
        };
      }(kc, gd, Hc, wc, id, Zb, Ub, jd, ae, Ic, Xb, yc, va, Lb, hd, Ae, xc, l, n, r, s, w, A, y, C, F, I, N, K, da, fa, J, za, ga), xc), Pf = function(a, b, c, d, e, f, g, h, l, r, n, s, w, J, A, y, C, F, I, K, ga) {
        return function(a) {
          var b = new U(null, 2, 5, V, [Fn, Lp], null);
          a = a.g ? a.g(b) : a.call(null, b);
          return O(a) >= ga;
        };
      }(kc, gd, Hc, wc, id, Zb, Ub, jd, ae, Ic, Xb, yc, Be, va, Lb, hd, Ae, xc, l, n, r, s, w, A, y, C, F, I, N, K, da, fa, J, za, ga), Jh = q(function() {
        var a = ae;
        return q(a) ? Ic : a;
      }()) ? pp : q(Ic) ? Pq : q(ae) ? Lp : Uj;
      if (q(ae)) {
        var be = a;
        aD(be, Lp.g($));
        be.lineWidth = 2;
        K.Ec(null, a, Lb);
      }
      if (q(Xb)) {
        var $b = a;
        $C($b, Wm.g($));
        UC($b);
        $b.arc(Zb, Ub, fa + 8, 0, 2 * Math.PI, !0);
        $b.fill();
      }
      var Vb = a;
      $C(Vb, function() {
        var a = Jh;
        return $.g ? $.g(a) : $.call(null, a);
      }());
      aD(Vb, "black");
      Vb.lineWidth = 1;
      UC(Vb);
      Vb.arc(Zb, Ub, fa, 0, 2 * Math.PI, !0);
      VC(Vb);
      Vb.fill();
      $C(a, "black");
      ZC(a, new p(null, 3, [zt, "cell " + u.g(Lb) + u.g(q(Xb) ? "   (learning on " + u.g(q(yc) ? "segment " + u.g(yc) : "new segment") + ")" : null), Jq, Zb, Vj, Ub - fa - 5], null));
      for (var Dd = D(sg(Ah, Be)), Ce = null, De = 0, kd = 0;;) {
        if (kd < De) {
          var Ee = Ce.D(null, kd), Vc = P.j(Ee, 0, null), Ka = P.j(Ee, 1, null), Fe = K.Yb(null, Lb, Vc), qb = P.j(Fe, 0, null), ac = P.j(Fe, 1, null), Qf = O(function() {
            var a = new U(null, 2, 5, V, [Fn, Lp], null);
            return Ka.g ? Ka.g(a) : Ka.call(null, a);
          }()), Jg = Qf + O(function() {
            var a = new U(null, 2, 5, V, [Fn, Uj], null);
            return Ka.g ? Ka.g(a) : Ka.call(null, a);
          }()), Rf = O(function() {
            var a = new U(null, 2, 5, V, [Lm, Lp], null);
            return Ka.g ? Ka.g(a) : Ka.call(null, a);
          }()), kf = Rf + O(function() {
            var a = new U(null, 2, 5, V, [Lm, Uj], null);
            return Ka.g ? Ka.g(a) : Ka.call(null, a);
          }()), lf = function() {
            var a = Qf / r;
            return 1 > a ? a : 1;
          }(), ce = function() {
            var a = Xb;
            return q(a) ? B.h(Vc, yc) : a;
          }(), ld = AD(qb, ac, za, J), md = AD(qb, ac, za + 8, J + 8);
          if (q(ce)) {
            var Wc = a;
            $C(Wc, Wm.g($));
            YC(Wc, md);
          }
          var Ob = a;
          bD(Ob, 1);
          aD(Ob, "black");
          Ob.lineWidth = 1;
          XC(Ob, ld);
          $C(Ob, "white");
          YC(Ob, ld);
          bD(Ob, lf);
          $C(Ob, Lp.g($));
          YC(Ob, ld);
          bD(Ob, 1);
          if (Pf(Ka)) {
            var mf = a;
            aD(mf, Lp.g($));
            mf.lineWidth = 2;
            K.yb(null, a, Lb, Vc);
          }
          $C(a, "black");
          ZC(a, new p(null, 3, [zt, "[" + u.g(Vc) + "],  active " + u.g(Qf) + " / " + u.g(Jg) + " conn. (" + u.g(Rf) + " / " + u.g(kf) + " disconn.)", Jq, qb + 5 + ga, Vj, ac], null));
          a.lineWidth = 1;
          var nd = gh.h(h, new U(null, 2, 5, V, [Pm, et], null)), Kg = gh.h(h, new U(null, 2, 5, V, [Pm, Lp], null)), Lg = gh.h(h, new U(null, 2, 5, V, [Pm, Uj], null)), nf = gh.h(h, new U(null, 2, 5, V, [Pm, Lm], null)), Ge = gh.h(h, new U(null, 2, 5, V, [Pm, Gp], null));
          if (q(function() {
            var a = B.h(Ge, mo);
            return a ? a : (a = B.h(Ge, Zo)) ? ce : a;
          }())) {
            for (var Ed = D(bg.h(q(Lg) ? new U(null, 1, 5, V, [Uj], null) : null, q(Kg) ? new U(null, 1, 5, V, [Lp], null) : null)), Xc = null, od = 0, Fd = 0;;) {
              if (Fd < od) {
                for (var He = Xc.D(null, Fd), Sf = D(bg.h(q(nf) ? new U(null, 1, 5, V, [Lm], null) : null, new U(null, 1, 5, V, [Fn], null))), Yc = null, Kh = 0, of = 0;;) {
                  if (of < Kh) {
                    var Ak = Yc.D(null, of), Bk = function() {
                      var a = new U(null, 2, 5, V, [Ak, He], null);
                      return Ka.g ? Ka.g(a) : Ka.call(null, a);
                    }();
                    aD(a, function() {
                      var a = He;
                      return $.g ? $.g(a) : $.call(null, a);
                    }());
                    for (var Ie = D(Bk), Mg = null, Je = 0, pf = 0;;) {
                      if (pf < Je) {
                        var nj = Mg.D(null, pf), qf = P.j(nj, 0, null), pr = P.j(qf, 0, null);
                        P.j(qf, 1, null);
                        var no = P.j(nj, 1, null), oo = wD(d, pr, f + 1), qr = P.j(oo, 0, null), po = P.j(oo, 1, null), Lh = a;
                        bD(Lh, q(nd) ? no : 1);
                        UC(Lh);
                        Lh.moveTo(qb, ac);
                        Lh.lineTo(qr + 1, po);
                        VC(Lh);
                        pf += 1;
                      } else {
                        var Ck = D(Ie);
                        if (Ck) {
                          var Mh = Ck;
                          if (T(Mh)) {
                            var Nh = x(Mh), Oh = z(Mh), qo = Nh, Ph = O(Nh), Ie = Oh, Mg = qo, Je = Ph
                          } else {
                            var Dk = E(Mh), ro = P.j(Dk, 0, null), rr = P.j(ro, 0, null);
                            P.j(ro, 1, null);
                            var oj = P.j(Dk, 1, null), Qh = wD(d, rr, f + 1), sr = P.j(Qh, 0, null), Ek = P.j(Qh, 1, null), Rh = a;
                            bD(Rh, q(nd) ? oj : 1);
                            UC(Rh);
                            Rh.moveTo(qb, ac);
                            Rh.lineTo(sr + 1, Ek);
                            VC(Rh);
                            Ie = H(Mh);
                            Mg = null;
                            Je = 0;
                          }
                          pf = 0;
                        } else {
                          break;
                        }
                      }
                    }
                    bD(a, 1);
                    of += 1;
                  } else {
                    var Fk = D(Sf);
                    if (Fk) {
                      var Ng = Fk;
                      if (T(Ng)) {
                        var Gk = x(Ng), Hk = z(Ng), Ik = Gk, Jk = O(Gk), Sf = Hk, Yc = Ik, Kh = Jk
                      } else {
                        var Sh = E(Ng), so = function() {
                          var a = new U(null, 2, 5, V, [Sh, He], null);
                          return Ka.g ? Ka.g(a) : Ka.call(null, a);
                        }();
                        aD(a, function() {
                          var a = He;
                          return $.g ? $.g(a) : $.call(null, a);
                        }());
                        for (var Kk = D(so), Lk = null, pj = 0, Th = 0;;) {
                          if (Th < pj) {
                            var Mk = Lk.D(null, Th), to = P.j(Mk, 0, null), tr = P.j(to, 0, null);
                            P.j(to, 1, null);
                            var Uh = P.j(Mk, 1, null), Nk = wD(d, tr, f + 1), Vh = P.j(Nk, 0, null), uo = P.j(Nk, 1, null), Wh = a;
                            bD(Wh, q(nd) ? Uh : 1);
                            UC(Wh);
                            Wh.moveTo(qb, ac);
                            Wh.lineTo(Vh + 1, uo);
                            VC(Wh);
                            Th += 1;
                          } else {
                            var vo = D(Kk);
                            if (vo) {
                              var Xh = vo;
                              if (T(Xh)) {
                                var Ok = x(Xh), ur = z(Xh), vr = Ok, wo = O(Ok), Kk = ur, Lk = vr, pj = wo
                              } else {
                                var xo = E(Xh), Pk = P.j(xo, 0, null), wr = P.j(Pk, 0, null);
                                P.j(Pk, 1, null);
                                var xr = P.j(xo, 1, null), Og = wD(d, wr, f + 1), RE = P.j(Og, 0, null), VE = P.j(Og, 1, null), Qk = a;
                                bD(Qk, q(nd) ? xr : 1);
                                UC(Qk);
                                Qk.moveTo(qb, ac);
                                Qk.lineTo(RE + 1, VE);
                                VC(Qk);
                                Kk = H(Xh);
                                Lk = null;
                                pj = 0;
                              }
                              Th = 0;
                            } else {
                              break;
                            }
                          }
                        }
                        bD(a, 1);
                        Sf = H(Ng);
                        Yc = null;
                        Kh = 0;
                      }
                      of = 0;
                    } else {
                      break;
                    }
                  }
                }
                Fd += 1;
              } else {
                var Ww = D(Ed);
                if (Ww) {
                  var Rk = Ww;
                  if (T(Rk)) {
                    var Xw = x(Rk), WE = z(Rk), XE = Xw, YE = O(Xw), Ed = WE, Xc = XE, od = YE
                  } else {
                    for (var Ao = E(Rk), yr = D(bg.h(q(nf) ? new U(null, 1, 5, V, [Lm], null) : null, new U(null, 1, 5, V, [Fn], null))), zr = null, Ar = 0, Sk = 0;;) {
                      if (Sk < Ar) {
                        var ZE = zr.D(null, Sk), $E = function() {
                          var a = new U(null, 2, 5, V, [ZE, Ao], null);
                          return Ka.g ? Ka.g(a) : Ka.call(null, a);
                        }();
                        aD(a, function() {
                          var a = Ao;
                          return $.g ? $.g(a) : $.call(null, a);
                        }());
                        for (var Br = D($E), Cr = null, Dr = 0, Tk = 0;;) {
                          if (Tk < Dr) {
                            var Yw = Cr.D(null, Tk), Zw = P.j(Yw, 0, null), aF = P.j(Zw, 0, null);
                            P.j(Zw, 1, null);
                            var bF = P.j(Yw, 1, null), $w = wD(d, aF, f + 1), cF = P.j($w, 0, null), dF = P.j($w, 1, null), Uk = a;
                            bD(Uk, q(nd) ? bF : 1);
                            UC(Uk);
                            Uk.moveTo(qb, ac);
                            Uk.lineTo(cF + 1, dF);
                            VC(Uk);
                            Tk += 1;
                          } else {
                            var ax = D(Br);
                            if (ax) {
                              var Vk = ax;
                              if (T(Vk)) {
                                var bx = x(Vk), eF = z(Vk), fF = bx, gF = O(bx), Br = eF, Cr = fF, Dr = gF
                              } else {
                                var cx = E(Vk), dx = P.j(cx, 0, null), hF = P.j(dx, 0, null);
                                P.j(dx, 1, null);
                                var iF = P.j(cx, 1, null), ex = wD(d, hF, f + 1), jF = P.j(ex, 0, null), kF = P.j(ex, 1, null), Wk = a;
                                bD(Wk, q(nd) ? iF : 1);
                                UC(Wk);
                                Wk.moveTo(qb, ac);
                                Wk.lineTo(jF + 1, kF);
                                VC(Wk);
                                Br = H(Vk);
                                Cr = null;
                                Dr = 0;
                              }
                              Tk = 0;
                            } else {
                              break;
                            }
                          }
                        }
                        bD(a, 1);
                        Sk += 1;
                      } else {
                        var fx = D(yr);
                        if (fx) {
                          var Xk = fx;
                          if (T(Xk)) {
                            var gx = x(Xk), lF = z(Xk), mF = gx, nF = O(gx), yr = lF, zr = mF, Ar = nF
                          } else {
                            var oF = E(Xk), pF = function() {
                              var a = new U(null, 2, 5, V, [oF, Ao], null);
                              return Ka.g ? Ka.g(a) : Ka.call(null, a);
                            }();
                            aD(a, function() {
                              var a = Ao;
                              return $.g ? $.g(a) : $.call(null, a);
                            }());
                            for (var Er = D(pF), Fr = null, Gr = 0, Yk = 0;;) {
                              if (Yk < Gr) {
                                var hx = Fr.D(null, Yk), ix = P.j(hx, 0, null), qF = P.j(ix, 0, null);
                                P.j(ix, 1, null);
                                var rF = P.j(hx, 1, null), jx = wD(d, qF, f + 1), sF = P.j(jx, 0, null), tF = P.j(jx, 1, null), Zk = a;
                                bD(Zk, q(nd) ? rF : 1);
                                UC(Zk);
                                Zk.moveTo(qb, ac);
                                Zk.lineTo(sF + 1, tF);
                                VC(Zk);
                                Yk += 1;
                              } else {
                                var kx = D(Er);
                                if (kx) {
                                  var $k = kx;
                                  if (T($k)) {
                                    var lx = x($k), uF = z($k), vF = lx, wF = O(lx), Er = uF, Fr = vF, Gr = wF
                                  } else {
                                    var mx = E($k), nx = P.j(mx, 0, null), xF = P.j(nx, 0, null);
                                    P.j(nx, 1, null);
                                    var yF = P.j(mx, 1, null), ox = wD(d, xF, f + 1), zF = P.j(ox, 0, null), AF = P.j(ox, 1, null), al = a;
                                    bD(al, q(nd) ? yF : 1);
                                    UC(al);
                                    al.moveTo(qb, ac);
                                    al.lineTo(zF + 1, AF);
                                    VC(al);
                                    Er = H($k);
                                    Fr = null;
                                    Gr = 0;
                                  }
                                  Yk = 0;
                                } else {
                                  break;
                                }
                              }
                            }
                            bD(a, 1);
                            yr = H(Xk);
                            zr = null;
                            Ar = 0;
                          }
                          Sk = 0;
                        } else {
                          break;
                        }
                      }
                    }
                    Ed = H(Rk);
                    Xc = null;
                    od = 0;
                  }
                  Fd = 0;
                } else {
                  break;
                }
              }
            }
          }
          kd += 1;
        } else {
          var px = D(Dd);
          if (px) {
            var bl = px;
            if (T(bl)) {
              var qx = x(bl), BF = z(bl), CF = qx, DF = O(qx), Dd = BF, Ce = CF, De = DF
            } else {
              var rx = E(bl), Bo = P.j(rx, 0, null), wb = P.j(rx, 1, null), sx = K.Yb(null, Lb, Bo), Ke = P.j(sx, 0, null), Le = P.j(sx, 1, null), Hr = O(function() {
                var a = new U(null, 2, 5, V, [Fn, Lp], null);
                return wb.g ? wb.g(a) : wb.call(null, a);
              }()), EF = Hr + O(function() {
                var a = new U(null, 2, 5, V, [Fn, Uj], null);
                return wb.g ? wb.g(a) : wb.call(null, a);
              }()), tx = O(function() {
                var a = new U(null, 2, 5, V, [Lm, Lp], null);
                return wb.g ? wb.g(a) : wb.call(null, a);
              }()), FF = tx + O(function() {
                var a = new U(null, 2, 5, V, [Lm, Uj], null);
                return wb.g ? wb.g(a) : wb.call(null, a);
              }()), GF = function() {
                var a = Hr / r;
                return 1 > a ? a : 1;
              }(), ux = function() {
                var a = Xb;
                return q(a) ? B.h(Bo, yc) : a;
              }(), Ir = AD(Ke, Le, za, J), HF = AD(Ke, Le, za + 8, J + 8);
              if (q(ux)) {
                var vx = a;
                $C(vx, Wm.g($));
                YC(vx, HF);
              }
              var rf = a;
              bD(rf, 1);
              aD(rf, "black");
              rf.lineWidth = 1;
              XC(rf, Ir);
              $C(rf, "white");
              YC(rf, Ir);
              bD(rf, GF);
              $C(rf, Lp.g($));
              YC(rf, Ir);
              bD(rf, 1);
              if (Pf(wb)) {
                var wx = a;
                aD(wx, Lp.g($));
                wx.lineWidth = 2;
                K.yb(null, a, Lb, Bo);
              }
              $C(a, "black");
              ZC(a, new p(null, 3, [zt, "[" + u.g(Bo) + "],  active " + u.g(Hr) + " / " + u.g(EF) + " conn. (" + u.g(tx) + " / " + u.g(FF) + " disconn.)", Jq, Ke + 5 + ga, Vj, Le], null));
              a.lineWidth = 1;
              var Pg = gh.h(h, new U(null, 2, 5, V, [Pm, et], null)), IF = gh.h(h, new U(null, 2, 5, V, [Pm, Lp], null)), JF = gh.h(h, new U(null, 2, 5, V, [Pm, Uj], null)), xx = gh.h(h, new U(null, 2, 5, V, [Pm, Lm], null)), yx = gh.h(h, new U(null, 2, 5, V, [Pm, Gp], null));
              if (q(function() {
                var a = B.h(yx, mo);
                return a ? a : (a = B.h(yx, Zo)) ? ux : a;
              }())) {
                for (var Jr = D(bg.h(q(JF) ? new U(null, 1, 5, V, [Uj], null) : null, q(IF) ? new U(null, 1, 5, V, [Lp], null) : null)), Kr = null, Lr = 0, cl = 0;;) {
                  if (cl < Lr) {
                    for (var Co = Kr.D(null, cl), Mr = D(bg.h(q(xx) ? new U(null, 1, 5, V, [Lm], null) : null, new U(null, 1, 5, V, [Fn], null))), Nr = null, Or = 0, dl = 0;;) {
                      if (dl < Or) {
                        var KF = Nr.D(null, dl), LF = function() {
                          var a = new U(null, 2, 5, V, [KF, Co], null);
                          return wb.g ? wb.g(a) : wb.call(null, a);
                        }();
                        aD(a, function() {
                          var a = Co;
                          return $.g ? $.g(a) : $.call(null, a);
                        }());
                        for (var Pr = D(LF), Qr = null, Rr = 0, el = 0;;) {
                          if (el < Rr) {
                            var zx = Qr.D(null, el), Ax = P.j(zx, 0, null), MF = P.j(Ax, 0, null);
                            P.j(Ax, 1, null);
                            var NF = P.j(zx, 1, null), Bx = wD(d, MF, f + 1), OF = P.j(Bx, 0, null), PF = P.j(Bx, 1, null), fl = a;
                            bD(fl, q(Pg) ? NF : 1);
                            UC(fl);
                            fl.moveTo(Ke, Le);
                            fl.lineTo(OF + 1, PF);
                            VC(fl);
                            el += 1;
                          } else {
                            var Cx = D(Pr);
                            if (Cx) {
                              var gl = Cx;
                              if (T(gl)) {
                                var Dx = x(gl), QF = z(gl), RF = Dx, SF = O(Dx), Pr = QF, Qr = RF, Rr = SF
                              } else {
                                var Ex = E(gl), Fx = P.j(Ex, 0, null), TF = P.j(Fx, 0, null);
                                P.j(Fx, 1, null);
                                var UF = P.j(Ex, 1, null), Gx = wD(d, TF, f + 1), VF = P.j(Gx, 0, null), WF = P.j(Gx, 1, null), hl = a;
                                bD(hl, q(Pg) ? UF : 1);
                                UC(hl);
                                hl.moveTo(Ke, Le);
                                hl.lineTo(VF + 1, WF);
                                VC(hl);
                                Pr = H(gl);
                                Qr = null;
                                Rr = 0;
                              }
                              el = 0;
                            } else {
                              break;
                            }
                          }
                        }
                        bD(a, 1);
                        dl += 1;
                      } else {
                        var Hx = D(Mr);
                        if (Hx) {
                          var il = Hx;
                          if (T(il)) {
                            var Ix = x(il), XF = z(il), YF = Ix, ZF = O(Ix), Mr = XF, Nr = YF, Or = ZF
                          } else {
                            var $F = E(il), aG = function() {
                              var a = new U(null, 2, 5, V, [$F, Co], null);
                              return wb.g ? wb.g(a) : wb.call(null, a);
                            }();
                            aD(a, function() {
                              var a = Co;
                              return $.g ? $.g(a) : $.call(null, a);
                            }());
                            for (var Sr = D(aG), Tr = null, Ur = 0, jl = 0;;) {
                              if (jl < Ur) {
                                var Jx = Tr.D(null, jl), Kx = P.j(Jx, 0, null), bG = P.j(Kx, 0, null);
                                P.j(Kx, 1, null);
                                var cG = P.j(Jx, 1, null), Lx = wD(d, bG, f + 1), dG = P.j(Lx, 0, null), eG = P.j(Lx, 1, null), kl = a;
                                bD(kl, q(Pg) ? cG : 1);
                                UC(kl);
                                kl.moveTo(Ke, Le);
                                kl.lineTo(dG + 1, eG);
                                VC(kl);
                                jl += 1;
                              } else {
                                var Mx = D(Sr);
                                if (Mx) {
                                  var ll = Mx;
                                  if (T(ll)) {
                                    var Nx = x(ll), fG = z(ll), gG = Nx, hG = O(Nx), Sr = fG, Tr = gG, Ur = hG
                                  } else {
                                    var Ox = E(ll), Px = P.j(Ox, 0, null), iG = P.j(Px, 0, null);
                                    P.j(Px, 1, null);
                                    var jG = P.j(Ox, 1, null), Qx = wD(d, iG, f + 1), kG = P.j(Qx, 0, null), lG = P.j(Qx, 1, null), ml = a;
                                    bD(ml, q(Pg) ? jG : 1);
                                    UC(ml);
                                    ml.moveTo(Ke, Le);
                                    ml.lineTo(kG + 1, lG);
                                    VC(ml);
                                    Sr = H(ll);
                                    Tr = null;
                                    Ur = 0;
                                  }
                                  jl = 0;
                                } else {
                                  break;
                                }
                              }
                            }
                            bD(a, 1);
                            Mr = H(il);
                            Nr = null;
                            Or = 0;
                          }
                          dl = 0;
                        } else {
                          break;
                        }
                      }
                    }
                    cl += 1;
                  } else {
                    var Rx = D(Jr);
                    if (Rx) {
                      var nl = Rx;
                      if (T(nl)) {
                        var Sx = x(nl), mG = z(nl), nG = Sx, oG = O(Sx), Jr = mG, Kr = nG, Lr = oG
                      } else {
                        for (var Do = E(nl), Vr = D(bg.h(q(xx) ? new U(null, 1, 5, V, [Lm], null) : null, new U(null, 1, 5, V, [Fn], null))), Wr = null, Xr = 0, ol = 0;;) {
                          if (ol < Xr) {
                            var pG = Wr.D(null, ol), qG = function() {
                              var a = new U(null, 2, 5, V, [pG, Do], null);
                              return wb.g ? wb.g(a) : wb.call(null, a);
                            }();
                            aD(a, function() {
                              var a = Do;
                              return $.g ? $.g(a) : $.call(null, a);
                            }());
                            for (var Yr = D(qG), Zr = null, $r = 0, pl = 0;;) {
                              if (pl < $r) {
                                var Tx = Zr.D(null, pl), Ux = P.j(Tx, 0, null), rG = P.j(Ux, 0, null);
                                P.j(Ux, 1, null);
                                var sG = P.j(Tx, 1, null), Vx = wD(d, rG, f + 1), tG = P.j(Vx, 0, null), uG = P.j(Vx, 1, null), ql = a;
                                bD(ql, q(Pg) ? sG : 1);
                                UC(ql);
                                ql.moveTo(Ke, Le);
                                ql.lineTo(tG + 1, uG);
                                VC(ql);
                                pl += 1;
                              } else {
                                var Wx = D(Yr);
                                if (Wx) {
                                  var rl = Wx;
                                  if (T(rl)) {
                                    var Xx = x(rl), vG = z(rl), wG = Xx, xG = O(Xx), Yr = vG, Zr = wG, $r = xG
                                  } else {
                                    var Yx = E(rl), Zx = P.j(Yx, 0, null), yG = P.j(Zx, 0, null);
                                    P.j(Zx, 1, null);
                                    var zG = P.j(Yx, 1, null), $x = wD(d, yG, f + 1), AG = P.j($x, 0, null), BG = P.j($x, 1, null), sl = a;
                                    bD(sl, q(Pg) ? zG : 1);
                                    UC(sl);
                                    sl.moveTo(Ke, Le);
                                    sl.lineTo(AG + 1, BG);
                                    VC(sl);
                                    Yr = H(rl);
                                    Zr = null;
                                    $r = 0;
                                  }
                                  pl = 0;
                                } else {
                                  break;
                                }
                              }
                            }
                            bD(a, 1);
                            ol += 1;
                          } else {
                            var ay = D(Vr);
                            if (ay) {
                              var tl = ay;
                              if (T(tl)) {
                                var by = x(tl), CG = z(tl), DG = by, EG = O(by), Vr = CG, Wr = DG, Xr = EG
                              } else {
                                var FG = E(tl), GG = function() {
                                  var a = new U(null, 2, 5, V, [FG, Do], null);
                                  return wb.g ? wb.g(a) : wb.call(null, a);
                                }();
                                aD(a, function() {
                                  var a = Do;
                                  return $.g ? $.g(a) : $.call(null, a);
                                }());
                                for (var as = D(GG), bs = null, cs = 0, ul = 0;;) {
                                  if (ul < cs) {
                                    var cy = bs.D(null, ul), dy = P.j(cy, 0, null), HG = P.j(dy, 0, null);
                                    P.j(dy, 1, null);
                                    var IG = P.j(cy, 1, null), ey = wD(d, HG, f + 1), JG = P.j(ey, 0, null), KG = P.j(ey, 1, null), vl = a;
                                    bD(vl, q(Pg) ? IG : 1);
                                    UC(vl);
                                    vl.moveTo(Ke, Le);
                                    vl.lineTo(JG + 1, KG);
                                    VC(vl);
                                    ul += 1;
                                  } else {
                                    var fy = D(as);
                                    if (fy) {
                                      var wl = fy;
                                      if (T(wl)) {
                                        var gy = x(wl), LG = z(wl), MG = gy, NG = O(gy), as = LG, bs = MG, cs = NG
                                      } else {
                                        var hy = E(wl), iy = P.j(hy, 0, null), OG = P.j(iy, 0, null);
                                        P.j(iy, 1, null);
                                        var PG = P.j(hy, 1, null), jy = wD(d, OG, f + 1), QG = P.j(jy, 0, null), RG = P.j(jy, 1, null), xl = a;
                                        bD(xl, q(Pg) ? PG : 1);
                                        UC(xl);
                                        xl.moveTo(Ke, Le);
                                        xl.lineTo(QG + 1, RG);
                                        VC(xl);
                                        as = H(wl);
                                        bs = null;
                                        cs = 0;
                                      }
                                      ul = 0;
                                    } else {
                                      break;
                                    }
                                  }
                                }
                                bD(a, 1);
                                Vr = H(tl);
                                Wr = null;
                                Xr = 0;
                              }
                              ol = 0;
                            } else {
                              break;
                            }
                          }
                        }
                        Jr = H(nl);
                        Kr = null;
                        Lr = 0;
                      }
                      cl = 0;
                    } else {
                      break;
                    }
                  }
                }
              }
              Dd = H(bl);
              Ce = null;
              De = 0;
            }
            kd = 0;
          } else {
            break;
          }
        }
      }
      wc += 1;
    } else {
      var Eo = D(kc);
      if (Eo) {
        var Yh = Eo;
        if (T(Yh)) {
          var ky = x(Yh), SG = z(Yh), TG = ky, UG = O(ky), kc = SG, gd = TG, Hc = UG
        } else {
          var Fo = E(Yh), sf = P.j(Fo, 0, null), yl = P.j(Fo, 1, null), ds = we(yl) ? S.h(vg, yl) : yl, es = Q.h(ds, ho), Go = K.Dc(null, sf), zl = P.j(Go, 0, null), Al = P.j(Go, 1, null), Bl = new U(null, 2, 5, V, [e, sf], null), Cl = function() {
            var a = Bl;
            return I.g ? I.g(a) : I.call(null, a);
          }(), Ho = function() {
            var a = Bl;
            return A.g ? A.g(a) : A.call(null, a);
          }(), Qg = ze(y, Bl), qj = q(Qg) ? Rb(Qg) : null, ly = eh.h(function(a, b, c, d, e, f, g, h, l, r, n, s, w, J, A, y, C, F, I, K, ga, qf, N, za) {
            return function(a) {
              return ID(ko.g(a), za, N);
            };
          }(kc, gd, Hc, wc, Go, zl, Al, Bl, Cl, Ho, Qg, qj, Fo, sf, yl, ds, es, Yh, Eo, l, n, r, s, w, A, y, C, F, I, N, K, da, fa, J, za, ga), es), my = function(a, b, c, d, e, f, g, h, l, r, n, s, w, J, A, y, C, F, I, K, ga, qf, N) {
            return function(a) {
              var b = new U(null, 2, 5, V, [Fn, Lp], null);
              a = a.g ? a.g(b) : a.call(null, b);
              return O(a) >= N;
            };
          }(kc, gd, Hc, wc, Go, zl, Al, Bl, Cl, Ho, Qg, qj, ly, Fo, sf, yl, ds, es, Yh, Eo, l, n, r, s, w, A, y, C, F, I, N, K, da, fa, J, za, ga), VG = q(function() {
            var a = Cl;
            return q(a) ? Ho : a;
          }()) ? pp : q(Ho) ? Pq : q(Cl) ? Lp : Uj;
          if (q(Cl)) {
            var ny = a;
            aD(ny, Lp.g($));
            ny.lineWidth = 2;
            K.Ec(null, a, sf);
          }
          if (q(Qg)) {
            var Io = a;
            $C(Io, Wm.g($));
            UC(Io);
            Io.arc(zl, Al, fa + 8, 0, 2 * Math.PI, !0);
            Io.fill();
          }
          var Zh = a;
          $C(Zh, function() {
            var a = VG;
            return $.g ? $.g(a) : $.call(null, a);
          }());
          aD(Zh, "black");
          Zh.lineWidth = 1;
          UC(Zh);
          Zh.arc(zl, Al, fa, 0, 2 * Math.PI, !0);
          VC(Zh);
          Zh.fill();
          $C(a, "black");
          ZC(a, new p(null, 3, [zt, "cell " + u.g(sf) + u.g(q(Qg) ? "   (learning on " + u.g(q(qj) ? "segment " + u.g(qj) : "new segment") + ")" : null), Jq, zl, Vj, Al - fa - 5], null));
          for (var fs = D(sg(Ah, ly)), gs = null, hs = 0, Dl = 0;;) {
            if (Dl < hs) {
              var oy = gs.D(null, Dl), Jo = P.j(oy, 0, null), xb = P.j(oy, 1, null), py = K.Yb(null, sf, Jo), Me = P.j(py, 0, null), Ne = P.j(py, 1, null), is = O(function() {
                var a = new U(null, 2, 5, V, [Fn, Lp], null);
                return xb.g ? xb.g(a) : xb.call(null, a);
              }()), WG = is + O(function() {
                var a = new U(null, 2, 5, V, [Fn, Uj], null);
                return xb.g ? xb.g(a) : xb.call(null, a);
              }()), qy = O(function() {
                var a = new U(null, 2, 5, V, [Lm, Lp], null);
                return xb.g ? xb.g(a) : xb.call(null, a);
              }()), XG = qy + O(function() {
                var a = new U(null, 2, 5, V, [Lm, Uj], null);
                return xb.g ? xb.g(a) : xb.call(null, a);
              }()), YG = function() {
                var a = is / r;
                return 1 > a ? a : 1;
              }(), ry = function() {
                var a = Qg;
                return q(a) ? B.h(Jo, qj) : a;
              }(), js = AD(Me, Ne, za, J), ZG = AD(Me, Ne, za + 8, J + 8);
              if (q(ry)) {
                var sy = a;
                $C(sy, Wm.g($));
                YC(sy, ZG);
              }
              var tf = a;
              bD(tf, 1);
              aD(tf, "black");
              tf.lineWidth = 1;
              XC(tf, js);
              $C(tf, "white");
              YC(tf, js);
              bD(tf, YG);
              $C(tf, Lp.g($));
              YC(tf, js);
              bD(tf, 1);
              if (my(xb)) {
                var ty = a;
                aD(ty, Lp.g($));
                ty.lineWidth = 2;
                K.yb(null, a, sf, Jo);
              }
              $C(a, "black");
              ZC(a, new p(null, 3, [zt, "[" + u.g(Jo) + "],  active " + u.g(is) + " / " + u.g(WG) + " conn. (" + u.g(qy) + " / " + u.g(XG) + " disconn.)", Jq, Me + 5 + ga, Vj, Ne], null));
              a.lineWidth = 1;
              var Rg = gh.h(h, new U(null, 2, 5, V, [Pm, et], null)), $G = gh.h(h, new U(null, 2, 5, V, [Pm, Lp], null)), aH = gh.h(h, new U(null, 2, 5, V, [Pm, Uj], null)), uy = gh.h(h, new U(null, 2, 5, V, [Pm, Lm], null)), vy = gh.h(h, new U(null, 2, 5, V, [Pm, Gp], null));
              if (q(function() {
                var a = B.h(vy, mo);
                return a ? a : (a = B.h(vy, Zo)) ? ry : a;
              }())) {
                for (var ks = D(bg.h(q(aH) ? new U(null, 1, 5, V, [Uj], null) : null, q($G) ? new U(null, 1, 5, V, [Lp], null) : null)), ls = null, ms = 0, El = 0;;) {
                  if (El < ms) {
                    for (var Ko = ls.D(null, El), ns = D(bg.h(q(uy) ? new U(null, 1, 5, V, [Lm], null) : null, new U(null, 1, 5, V, [Fn], null))), os = null, ps = 0, Fl = 0;;) {
                      if (Fl < ps) {
                        var bH = os.D(null, Fl), cH = function() {
                          var a = new U(null, 2, 5, V, [bH, Ko], null);
                          return xb.g ? xb.g(a) : xb.call(null, a);
                        }();
                        aD(a, function() {
                          var a = Ko;
                          return $.g ? $.g(a) : $.call(null, a);
                        }());
                        for (var qs = D(cH), rs = null, ss = 0, Gl = 0;;) {
                          if (Gl < ss) {
                            var wy = rs.D(null, Gl), xy = P.j(wy, 0, null), dH = P.j(xy, 0, null);
                            P.j(xy, 1, null);
                            var eH = P.j(wy, 1, null), yy = wD(d, dH, f + 1), fH = P.j(yy, 0, null), gH = P.j(yy, 1, null), Hl = a;
                            bD(Hl, q(Rg) ? eH : 1);
                            UC(Hl);
                            Hl.moveTo(Me, Ne);
                            Hl.lineTo(fH + 1, gH);
                            VC(Hl);
                            Gl += 1;
                          } else {
                            var zy = D(qs);
                            if (zy) {
                              var Il = zy;
                              if (T(Il)) {
                                var Ay = x(Il), hH = z(Il), iH = Ay, jH = O(Ay), qs = hH, rs = iH, ss = jH
                              } else {
                                var By = E(Il), Cy = P.j(By, 0, null), kH = P.j(Cy, 0, null);
                                P.j(Cy, 1, null);
                                var lH = P.j(By, 1, null), Dy = wD(d, kH, f + 1), mH = P.j(Dy, 0, null), nH = P.j(Dy, 1, null), Jl = a;
                                bD(Jl, q(Rg) ? lH : 1);
                                UC(Jl);
                                Jl.moveTo(Me, Ne);
                                Jl.lineTo(mH + 1, nH);
                                VC(Jl);
                                qs = H(Il);
                                rs = null;
                                ss = 0;
                              }
                              Gl = 0;
                            } else {
                              break;
                            }
                          }
                        }
                        bD(a, 1);
                        Fl += 1;
                      } else {
                        var Ey = D(ns);
                        if (Ey) {
                          var Kl = Ey;
                          if (T(Kl)) {
                            var Fy = x(Kl), oH = z(Kl), pH = Fy, qH = O(Fy), ns = oH, os = pH, ps = qH
                          } else {
                            var rH = E(Kl), sH = function() {
                              var a = new U(null, 2, 5, V, [rH, Ko], null);
                              return xb.g ? xb.g(a) : xb.call(null, a);
                            }();
                            aD(a, function() {
                              var a = Ko;
                              return $.g ? $.g(a) : $.call(null, a);
                            }());
                            for (var ts = D(sH), us = null, vs = 0, Ll = 0;;) {
                              if (Ll < vs) {
                                var Gy = us.D(null, Ll), Hy = P.j(Gy, 0, null), tH = P.j(Hy, 0, null);
                                P.j(Hy, 1, null);
                                var uH = P.j(Gy, 1, null), Iy = wD(d, tH, f + 1), vH = P.j(Iy, 0, null), wH = P.j(Iy, 1, null), Ml = a;
                                bD(Ml, q(Rg) ? uH : 1);
                                UC(Ml);
                                Ml.moveTo(Me, Ne);
                                Ml.lineTo(vH + 1, wH);
                                VC(Ml);
                                Ll += 1;
                              } else {
                                var Jy = D(ts);
                                if (Jy) {
                                  var Nl = Jy;
                                  if (T(Nl)) {
                                    var Ky = x(Nl), xH = z(Nl), yH = Ky, zH = O(Ky), ts = xH, us = yH, vs = zH
                                  } else {
                                    var Ly = E(Nl), My = P.j(Ly, 0, null), AH = P.j(My, 0, null);
                                    P.j(My, 1, null);
                                    var BH = P.j(Ly, 1, null), Ny = wD(d, AH, f + 1), CH = P.j(Ny, 0, null), DH = P.j(Ny, 1, null), Ol = a;
                                    bD(Ol, q(Rg) ? BH : 1);
                                    UC(Ol);
                                    Ol.moveTo(Me, Ne);
                                    Ol.lineTo(CH + 1, DH);
                                    VC(Ol);
                                    ts = H(Nl);
                                    us = null;
                                    vs = 0;
                                  }
                                  Ll = 0;
                                } else {
                                  break;
                                }
                              }
                            }
                            bD(a, 1);
                            ns = H(Kl);
                            os = null;
                            ps = 0;
                          }
                          Fl = 0;
                        } else {
                          break;
                        }
                      }
                    }
                    El += 1;
                  } else {
                    var Oy = D(ks);
                    if (Oy) {
                      var Pl = Oy;
                      if (T(Pl)) {
                        var Py = x(Pl), EH = z(Pl), FH = Py, GH = O(Py), ks = EH, ls = FH, ms = GH
                      } else {
                        for (var Lo = E(Pl), ws = D(bg.h(q(uy) ? new U(null, 1, 5, V, [Lm], null) : null, new U(null, 1, 5, V, [Fn], null))), xs = null, ys = 0, Ql = 0;;) {
                          if (Ql < ys) {
                            var HH = xs.D(null, Ql), IH = function() {
                              var a = new U(null, 2, 5, V, [HH, Lo], null);
                              return xb.g ? xb.g(a) : xb.call(null, a);
                            }();
                            aD(a, function() {
                              var a = Lo;
                              return $.g ? $.g(a) : $.call(null, a);
                            }());
                            for (var zs = D(IH), As = null, Bs = 0, Rl = 0;;) {
                              if (Rl < Bs) {
                                var Qy = As.D(null, Rl), Ry = P.j(Qy, 0, null), JH = P.j(Ry, 0, null);
                                P.j(Ry, 1, null);
                                var KH = P.j(Qy, 1, null), Sy = wD(d, JH, f + 1), LH = P.j(Sy, 0, null), MH = P.j(Sy, 1, null), Sl = a;
                                bD(Sl, q(Rg) ? KH : 1);
                                UC(Sl);
                                Sl.moveTo(Me, Ne);
                                Sl.lineTo(LH + 1, MH);
                                VC(Sl);
                                Rl += 1;
                              } else {
                                var Ty = D(zs);
                                if (Ty) {
                                  var Tl = Ty;
                                  if (T(Tl)) {
                                    var Uy = x(Tl), NH = z(Tl), OH = Uy, PH = O(Uy), zs = NH, As = OH, Bs = PH
                                  } else {
                                    var Vy = E(Tl), Wy = P.j(Vy, 0, null), QH = P.j(Wy, 0, null);
                                    P.j(Wy, 1, null);
                                    var RH = P.j(Vy, 1, null), Xy = wD(d, QH, f + 1), SH = P.j(Xy, 0, null), TH = P.j(Xy, 1, null), Ul = a;
                                    bD(Ul, q(Rg) ? RH : 1);
                                    UC(Ul);
                                    Ul.moveTo(Me, Ne);
                                    Ul.lineTo(SH + 1, TH);
                                    VC(Ul);
                                    zs = H(Tl);
                                    As = null;
                                    Bs = 0;
                                  }
                                  Rl = 0;
                                } else {
                                  break;
                                }
                              }
                            }
                            bD(a, 1);
                            Ql += 1;
                          } else {
                            var Yy = D(ws);
                            if (Yy) {
                              var Vl = Yy;
                              if (T(Vl)) {
                                var Zy = x(Vl), UH = z(Vl), VH = Zy, WH = O(Zy), ws = UH, xs = VH, ys = WH
                              } else {
                                var XH = E(Vl), YH = function() {
                                  var a = new U(null, 2, 5, V, [XH, Lo], null);
                                  return xb.g ? xb.g(a) : xb.call(null, a);
                                }();
                                aD(a, function() {
                                  var a = Lo;
                                  return $.g ? $.g(a) : $.call(null, a);
                                }());
                                for (var Cs = D(YH), Ds = null, Es = 0, Wl = 0;;) {
                                  if (Wl < Es) {
                                    var $y = Ds.D(null, Wl), az = P.j($y, 0, null), ZH = P.j(az, 0, null);
                                    P.j(az, 1, null);
                                    var $H = P.j($y, 1, null), bz = wD(d, ZH, f + 1), aI = P.j(bz, 0, null), bI = P.j(bz, 1, null), Xl = a;
                                    bD(Xl, q(Rg) ? $H : 1);
                                    UC(Xl);
                                    Xl.moveTo(Me, Ne);
                                    Xl.lineTo(aI + 1, bI);
                                    VC(Xl);
                                    Wl += 1;
                                  } else {
                                    var cz = D(Cs);
                                    if (cz) {
                                      var Yl = cz;
                                      if (T(Yl)) {
                                        var dz = x(Yl), cI = z(Yl), dI = dz, eI = O(dz), Cs = cI, Ds = dI, Es = eI
                                      } else {
                                        var ez = E(Yl), fz = P.j(ez, 0, null), fI = P.j(fz, 0, null);
                                        P.j(fz, 1, null);
                                        var gI = P.j(ez, 1, null), gz = wD(d, fI, f + 1), hI = P.j(gz, 0, null), iI = P.j(gz, 1, null), Zl = a;
                                        bD(Zl, q(Rg) ? gI : 1);
                                        UC(Zl);
                                        Zl.moveTo(Me, Ne);
                                        Zl.lineTo(hI + 1, iI);
                                        VC(Zl);
                                        Cs = H(Yl);
                                        Ds = null;
                                        Es = 0;
                                      }
                                      Wl = 0;
                                    } else {
                                      break;
                                    }
                                  }
                                }
                                bD(a, 1);
                                ws = H(Vl);
                                xs = null;
                                ys = 0;
                              }
                              Ql = 0;
                            } else {
                              break;
                            }
                          }
                        }
                        ks = H(Pl);
                        ls = null;
                        ms = 0;
                      }
                      El = 0;
                    } else {
                      break;
                    }
                  }
                }
              }
              Dl += 1;
            } else {
              var hz = D(fs);
              if (hz) {
                var $l = hz;
                if (T($l)) {
                  var iz = x($l), jI = z($l), kI = iz, lI = O(iz), fs = jI, gs = kI, hs = lI
                } else {
                  var jz = E($l), Mo = P.j(jz, 0, null), yb = P.j(jz, 1, null), kz = K.Yb(null, sf, Mo), Oe = P.j(kz, 0, null), Pe = P.j(kz, 1, null), Fs = O(function() {
                    var a = new U(null, 2, 5, V, [Fn, Lp], null);
                    return yb.g ? yb.g(a) : yb.call(null, a);
                  }()), mI = Fs + O(function() {
                    var a = new U(null, 2, 5, V, [Fn, Uj], null);
                    return yb.g ? yb.g(a) : yb.call(null, a);
                  }()), lz = O(function() {
                    var a = new U(null, 2, 5, V, [Lm, Lp], null);
                    return yb.g ? yb.g(a) : yb.call(null, a);
                  }()), nI = lz + O(function() {
                    var a = new U(null, 2, 5, V, [Lm, Uj], null);
                    return yb.g ? yb.g(a) : yb.call(null, a);
                  }()), oI = function() {
                    var a = Fs / r;
                    return 1 > a ? a : 1;
                  }(), mz = function() {
                    var a = Qg;
                    return q(a) ? B.h(Mo, qj) : a;
                  }(), Gs = AD(Oe, Pe, za, J), pI = AD(Oe, Pe, za + 8, J + 8);
                  if (q(mz)) {
                    var nz = a;
                    $C(nz, Wm.g($));
                    YC(nz, pI);
                  }
                  var uf = a;
                  bD(uf, 1);
                  aD(uf, "black");
                  uf.lineWidth = 1;
                  XC(uf, Gs);
                  $C(uf, "white");
                  YC(uf, Gs);
                  bD(uf, oI);
                  $C(uf, Lp.g($));
                  YC(uf, Gs);
                  bD(uf, 1);
                  if (my(yb)) {
                    var oz = a;
                    aD(oz, Lp.g($));
                    oz.lineWidth = 2;
                    K.yb(null, a, sf, Mo);
                  }
                  $C(a, "black");
                  ZC(a, new p(null, 3, [zt, "[" + u.g(Mo) + "],  active " + u.g(Fs) + " / " + u.g(mI) + " conn. (" + u.g(lz) + " / " + u.g(nI) + " disconn.)", Jq, Oe + 5 + ga, Vj, Pe], null));
                  a.lineWidth = 1;
                  var Sg = gh.h(h, new U(null, 2, 5, V, [Pm, et], null)), qI = gh.h(h, new U(null, 2, 5, V, [Pm, Lp], null)), rI = gh.h(h, new U(null, 2, 5, V, [Pm, Uj], null)), pz = gh.h(h, new U(null, 2, 5, V, [Pm, Lm], null)), qz = gh.h(h, new U(null, 2, 5, V, [Pm, Gp], null));
                  if (q(function() {
                    var a = B.h(qz, mo);
                    return a ? a : (a = B.h(qz, Zo)) ? mz : a;
                  }())) {
                    for (var Hs = D(bg.h(q(rI) ? new U(null, 1, 5, V, [Uj], null) : null, q(qI) ? new U(null, 1, 5, V, [Lp], null) : null)), Is = null, Js = 0, am = 0;;) {
                      if (am < Js) {
                        for (var No = Is.D(null, am), Ks = D(bg.h(q(pz) ? new U(null, 1, 5, V, [Lm], null) : null, new U(null, 1, 5, V, [Fn], null))), Ls = null, Ms = 0, bm = 0;;) {
                          if (bm < Ms) {
                            var sI = Ls.D(null, bm), tI = function() {
                              var a = new U(null, 2, 5, V, [sI, No], null);
                              return yb.g ? yb.g(a) : yb.call(null, a);
                            }();
                            aD(a, function() {
                              var a = No;
                              return $.g ? $.g(a) : $.call(null, a);
                            }());
                            for (var Ns = D(tI), Os = null, Ps = 0, cm = 0;;) {
                              if (cm < Ps) {
                                var rz = Os.D(null, cm), sz = P.j(rz, 0, null), uI = P.j(sz, 0, null);
                                P.j(sz, 1, null);
                                var vI = P.j(rz, 1, null), tz = wD(d, uI, f + 1), wI = P.j(tz, 0, null), xI = P.j(tz, 1, null), dm = a;
                                bD(dm, q(Sg) ? vI : 1);
                                UC(dm);
                                dm.moveTo(Oe, Pe);
                                dm.lineTo(wI + 1, xI);
                                VC(dm);
                                cm += 1;
                              } else {
                                var uz = D(Ns);
                                if (uz) {
                                  var em = uz;
                                  if (T(em)) {
                                    var vz = x(em), yI = z(em), zI = vz, AI = O(vz), Ns = yI, Os = zI, Ps = AI
                                  } else {
                                    var wz = E(em), xz = P.j(wz, 0, null), BI = P.j(xz, 0, null);
                                    P.j(xz, 1, null);
                                    var CI = P.j(wz, 1, null), yz = wD(d, BI, f + 1), DI = P.j(yz, 0, null), EI = P.j(yz, 1, null), fm = a;
                                    bD(fm, q(Sg) ? CI : 1);
                                    UC(fm);
                                    fm.moveTo(Oe, Pe);
                                    fm.lineTo(DI + 1, EI);
                                    VC(fm);
                                    Ns = H(em);
                                    Os = null;
                                    Ps = 0;
                                  }
                                  cm = 0;
                                } else {
                                  break;
                                }
                              }
                            }
                            bD(a, 1);
                            bm += 1;
                          } else {
                            var zz = D(Ks);
                            if (zz) {
                              var gm = zz;
                              if (T(gm)) {
                                var Az = x(gm), FI = z(gm), GI = Az, HI = O(Az), Ks = FI, Ls = GI, Ms = HI
                              } else {
                                var II = E(gm), JI = function() {
                                  var a = new U(null, 2, 5, V, [II, No], null);
                                  return yb.g ? yb.g(a) : yb.call(null, a);
                                }();
                                aD(a, function() {
                                  var a = No;
                                  return $.g ? $.g(a) : $.call(null, a);
                                }());
                                for (var Qs = D(JI), Rs = null, Ss = 0, hm = 0;;) {
                                  if (hm < Ss) {
                                    var Bz = Rs.D(null, hm), Cz = P.j(Bz, 0, null), KI = P.j(Cz, 0, null);
                                    P.j(Cz, 1, null);
                                    var LI = P.j(Bz, 1, null), Dz = wD(d, KI, f + 1), MI = P.j(Dz, 0, null), NI = P.j(Dz, 1, null), im = a;
                                    bD(im, q(Sg) ? LI : 1);
                                    UC(im);
                                    im.moveTo(Oe, Pe);
                                    im.lineTo(MI + 1, NI);
                                    VC(im);
                                    hm += 1;
                                  } else {
                                    var Ez = D(Qs);
                                    if (Ez) {
                                      var jm = Ez;
                                      if (T(jm)) {
                                        var Fz = x(jm), OI = z(jm), PI = Fz, QI = O(Fz), Qs = OI, Rs = PI, Ss = QI
                                      } else {
                                        var Gz = E(jm), Hz = P.j(Gz, 0, null), RI = P.j(Hz, 0, null);
                                        P.j(Hz, 1, null);
                                        var SI = P.j(Gz, 1, null), Iz = wD(d, RI, f + 1), TI = P.j(Iz, 0, null), UI = P.j(Iz, 1, null), km = a;
                                        bD(km, q(Sg) ? SI : 1);
                                        UC(km);
                                        km.moveTo(Oe, Pe);
                                        km.lineTo(TI + 1, UI);
                                        VC(km);
                                        Qs = H(jm);
                                        Rs = null;
                                        Ss = 0;
                                      }
                                      hm = 0;
                                    } else {
                                      break;
                                    }
                                  }
                                }
                                bD(a, 1);
                                Ks = H(gm);
                                Ls = null;
                                Ms = 0;
                              }
                              bm = 0;
                            } else {
                              break;
                            }
                          }
                        }
                        am += 1;
                      } else {
                        var Jz = D(Hs);
                        if (Jz) {
                          var lm = Jz;
                          if (T(lm)) {
                            var Kz = x(lm), VI = z(lm), WI = Kz, XI = O(Kz), Hs = VI, Is = WI, Js = XI
                          } else {
                            for (var Oo = E(lm), Ts = D(bg.h(q(pz) ? new U(null, 1, 5, V, [Lm], null) : null, new U(null, 1, 5, V, [Fn], null))), Us = null, Vs = 0, mm = 0;;) {
                              if (mm < Vs) {
                                var YI = Us.D(null, mm), ZI = function() {
                                  var a = new U(null, 2, 5, V, [YI, Oo], null);
                                  return yb.g ? yb.g(a) : yb.call(null, a);
                                }();
                                aD(a, function() {
                                  var a = Oo;
                                  return $.g ? $.g(a) : $.call(null, a);
                                }());
                                for (var Ws = D(ZI), Xs = null, Ys = 0, nm = 0;;) {
                                  if (nm < Ys) {
                                    var Lz = Xs.D(null, nm), Mz = P.j(Lz, 0, null), $I = P.j(Mz, 0, null);
                                    P.j(Mz, 1, null);
                                    var aJ = P.j(Lz, 1, null), Nz = wD(d, $I, f + 1), bJ = P.j(Nz, 0, null), cJ = P.j(Nz, 1, null), om = a;
                                    bD(om, q(Sg) ? aJ : 1);
                                    UC(om);
                                    om.moveTo(Oe, Pe);
                                    om.lineTo(bJ + 1, cJ);
                                    VC(om);
                                    nm += 1;
                                  } else {
                                    var Oz = D(Ws);
                                    if (Oz) {
                                      var pm = Oz;
                                      if (T(pm)) {
                                        var Pz = x(pm), dJ = z(pm), eJ = Pz, fJ = O(Pz), Ws = dJ, Xs = eJ, Ys = fJ
                                      } else {
                                        var Qz = E(pm), Rz = P.j(Qz, 0, null), gJ = P.j(Rz, 0, null);
                                        P.j(Rz, 1, null);
                                        var hJ = P.j(Qz, 1, null), Sz = wD(d, gJ, f + 1), iJ = P.j(Sz, 0, null), jJ = P.j(Sz, 1, null), qm = a;
                                        bD(qm, q(Sg) ? hJ : 1);
                                        UC(qm);
                                        qm.moveTo(Oe, Pe);
                                        qm.lineTo(iJ + 1, jJ);
                                        VC(qm);
                                        Ws = H(pm);
                                        Xs = null;
                                        Ys = 0;
                                      }
                                      nm = 0;
                                    } else {
                                      break;
                                    }
                                  }
                                }
                                bD(a, 1);
                                mm += 1;
                              } else {
                                var Tz = D(Ts);
                                if (Tz) {
                                  var rm = Tz;
                                  if (T(rm)) {
                                    var Uz = x(rm), kJ = z(rm), lJ = Uz, mJ = O(Uz), Ts = kJ, Us = lJ, Vs = mJ
                                  } else {
                                    var nJ = E(rm), oJ = function() {
                                      var a = new U(null, 2, 5, V, [nJ, Oo], null);
                                      return yb.g ? yb.g(a) : yb.call(null, a);
                                    }();
                                    aD(a, function() {
                                      var a = Oo;
                                      return $.g ? $.g(a) : $.call(null, a);
                                    }());
                                    for (var Zs = D(oJ), $s = null, at = 0, sm = 0;;) {
                                      if (sm < at) {
                                        var Vz = $s.D(null, sm), Wz = P.j(Vz, 0, null), pJ = P.j(Wz, 0, null);
                                        P.j(Wz, 1, null);
                                        var qJ = P.j(Vz, 1, null), Xz = wD(d, pJ, f + 1), rJ = P.j(Xz, 0, null), sJ = P.j(Xz, 1, null), tm = a;
                                        bD(tm, q(Sg) ? qJ : 1);
                                        UC(tm);
                                        tm.moveTo(Oe, Pe);
                                        tm.lineTo(rJ + 1, sJ);
                                        VC(tm);
                                        sm += 1;
                                      } else {
                                        var Yz = D(Zs);
                                        if (Yz) {
                                          var um = Yz;
                                          if (T(um)) {
                                            var Zz = x(um), tJ = z(um), uJ = Zz, vJ = O(Zz), Zs = tJ, $s = uJ, at = vJ
                                          } else {
                                            var $z = E(um), aA = P.j($z, 0, null), wJ = P.j(aA, 0, null);
                                            P.j(aA, 1, null);
                                            var xJ = P.j($z, 1, null), bA = wD(d, wJ, f + 1), yJ = P.j(bA, 0, null), zJ = P.j(bA, 1, null), vm = a;
                                            bD(vm, q(Sg) ? xJ : 1);
                                            UC(vm);
                                            vm.moveTo(Oe, Pe);
                                            vm.lineTo(yJ + 1, zJ);
                                            VC(vm);
                                            Zs = H(um);
                                            $s = null;
                                            at = 0;
                                          }
                                          sm = 0;
                                        } else {
                                          break;
                                        }
                                      }
                                    }
                                    bD(a, 1);
                                    Ts = H(rm);
                                    Us = null;
                                    Vs = 0;
                                  }
                                  mm = 0;
                                } else {
                                  break;
                                }
                              }
                            }
                            Hs = H(lm);
                            Is = null;
                            Js = 0;
                          }
                          am = 0;
                        } else {
                          break;
                        }
                      }
                    }
                  }
                  fs = H($l);
                  gs = null;
                  hs = 0;
                }
                Dl = 0;
              } else {
                break;
              }
            }
          }
          kc = H(Yh);
          gd = null;
          Hc = 0;
        }
        wc = 0;
      } else {
        break;
      }
    }
  }
  a.restore();
}
function OD(a) {
  var b = we(a) ? S.h(vg, a) : a, c = Q.h(b, ln), d = Q.h(b, $o), e = Q.h(b, Xm), f = P.h(M.g ? M.g(iD) : M.call(null, iD), c), g = KB(f), h = P.h(g, d), l = E(LB(f)), n = wB(l), r = sB.g(l);
  return S.h(u, Xg("\n", ch(new U(null, 26, 5, V, ["__Selection__", "* timestep " + u.g(vn.g(h)) + " (delay " + u.g(c) + ")", "* column " + u.g(q(e) ? e : "nil"), "", "__Input__", "" + u.g(n) + " (" + u.g(O(r)) + " bits)", "", "__Active columns__", "" + u.g(Te.g(yo.g(h))), "", "__Active cells__", "" + u.g(Te.g(Bp.g(h))), "", "__Learn cells__", "" + u.g(Te.g(lo.g(h))), "", "__Signal cells__", "" + u.g(Te.g(Qn.g(h))), "", "__TP scores__", "" + u.g(Te.g(Om.g(h))), "", "__Predicted cells__", "" + u.g(Te.g(Rp.g(h))), 
  "", q(e) ? function() {
    var s = c + 1, w = P.h(M.g ? M.g(iD) : M.call(null, iD), s), A = P.h(KB(w), d), y = cq.g(A), C = Bp.g(A), F = gh.h(A, new U(null, 2, 5, V, [Y, e], null)), I = gh.h(h, new U(null, 2, 5, V, [Y, e], null)), N = Tp.g(lp.g(A)), K = P.h(JB(f), d), da = pB(K), fa = 0 < d ? tB.g(P.h(JB(f), d - 1)) : li;
    return new U(null, 14, 5, V, ["__Active cells prev__", "" + u.g(Te.g(Bp.g(A))), "", "__Learn cells prev__", "" + u.g(Te.g(lo.g(A))), "", "__Predicted cells prev__", "" + u.g(Te.g(Rp.g(A))), "", "__Selected column__", "__Connected ff-synapses__", function() {
      var J = Fn.g(dk.g(F));
      return function(a, b, c, d, e, f, g, h, l, r, n, s, w, J, A, y, C, F, I, K, N, da, fa, jc) {
        return function Sb(Rc) {
          return new Mf(null, function(a, b, c, d, e, f, g, h, l, r, n, s) {
            return function() {
              for (;;) {
                var a = D(Rc);
                if (a) {
                  if (T(a)) {
                    var b = x(a), c = O(b), d = Uf(c);
                    return function() {
                      for (var a = 0;;) {
                        if (a < c) {
                          var e = v.h(b, a), f = P.j(e, 0, null), e = P.j(e, 1, null);
                          Yf(d, "  " + u.g(f) + " :\x3d\x3e " + u.g(SC("%.2f", e)) + u.g(q(function() {
                            var a = f;
                            return s.g ? s.g(a) : s.call(null, a);
                          }()) ? " S" : null) + u.g(q(function() {
                            var a = f;
                            return n.g ? n.g(a) : n.call(null, a);
                          }()) ? " A " + u.g(qB(r, f)) : null));
                          a += 1;
                        } else {
                          return!0;
                        }
                      }
                    }() ? Xf(d.R(), Sb(z(a))) : Xf(d.R(), null);
                  }
                  var e = E(a), f = P.j(e, 0, null), e = P.j(e, 1, null);
                  return Td("  " + u.g(f) + " :\x3d\x3e " + u.g(SC("%.2f", e)) + u.g(q(function() {
                    var a = f;
                    return s.g ? s.g(a) : s.call(null, a);
                  }()) ? " S" : null) + u.g(q(function() {
                    var a = f;
                    return n.g ? n.g(a) : n.call(null, a);
                  }()) ? " A " + u.g(qB(r, f)) : null), Sb(G(a)));
                }
                return null;
              }
            };
          }(a, b, c, d, e, f, g, h, l, r, n, s, w, J, A, y, C, F, I, K, N, da, fa, jc), null, null);
        };
      }(J, s, w, A, y, C, F, I, N, K, da, fa, f, g, h, l, n, r, a, b, b, c, d, e)(Te.g(J));
    }(), "__Cells and their Dendrite segments__", sg(function(a, b, c, d, e, f, g, h, l, r, n, s, w, A, y, C, F, I, K, N, da, fa, cc) {
      return function(Fc, jc) {
        var Kb = ho.g(jc), Sb = Bp.g(c), Rc = lo.g(c);
        return new U(null, 4, 5, V, ["CELL " + u.g(Fc), "" + u.g(O(Kb)) + " \x3d " + u.g(Te.g(Cg.h(qg.h(O, ko), Kb))), "Lateral excitation from this cell: " + u.g(Zt(c, Fq.g(lp.g(c)), Pp.g(jc))), function() {
          return function(a, b, c, d, e, f, g, h, l, r, n, s, w, J, A, y, C, F, I, K, ga, N, za, da, fa, wa) {
            return function xc(na) {
              return new Mf(null, function(a, b, c, d, e, f, g, h, l, r, n, s, w, J, A, y, C, F, I, K, ga, N, za, da, fa, wa) {
                return function() {
                  for (;;) {
                    var Ha = D(na);
                    if (Ha) {
                      var ea = Ha;
                      if (T(ea)) {
                        var Ea = x(ea), Xa = O(Ea), Ma = Uf(Xa);
                        return function() {
                          for (var na = 0;;) {
                            if (na < Xa) {
                              var Oa = v.h(Ea, na), sa = ko.g(function() {
                                var b = Oa;
                                return a.g ? a.g(b) : a.call(null, b);
                              }());
                              Yf(Ma, new U(null, 2, 5, V, ["  SEGMENT " + u.g(Oa), function() {
                                return function(a, b, c, d, e, f, g, h, l, r, n, s, w, J, A, y, C, F, I, K, ga, N, za, da, fa, wa, na, ea, Ha, Ea, Oa, Xa, Ma, sa) {
                                  return function oj(kb) {
                                    return new Mf(null, function(a, b, c, d, e, f, g, h, l, r, n, s, w, J, A, y, C, F, I) {
                                      return function() {
                                        for (;;) {
                                          var a = D(kb);
                                          if (a) {
                                            if (T(a)) {
                                              var b = x(a), c = O(b), d = Uf(c);
                                              return function() {
                                                for (var a = 0;;) {
                                                  if (a < c) {
                                                    var e = v.h(b, a), f = P.j(e, 0, null), e = P.j(e, 1, null);
                                                    Yf(d, "  " + u.g(f) + u.g(e >= I ? " :\x3d\x3e " : " :.: ") + u.g(SC("%.2f", e)) + u.g(q(function() {
                                                      var a = f;
                                                      return n.g ? n.g(a) : n.call(null, a);
                                                    }()) ? " L" : q(function() {
                                                      var a = f;
                                                      return r.g ? r.g(a) : r.call(null, a);
                                                    }()) ? " A" : null));
                                                    a += 1;
                                                  } else {
                                                    return!0;
                                                  }
                                                }
                                              }() ? Xf(d.R(), oj(z(a))) : Xf(d.R(), null);
                                            }
                                            var e = E(a), f = P.j(e, 0, null), e = P.j(e, 1, null);
                                            return Td("  " + u.g(f) + u.g(e >= I ? " :\x3d\x3e " : " :.: ") + u.g(SC("%.2f", e)) + u.g(q(function() {
                                              var a = f;
                                              return n.g ? n.g(a) : n.call(null, a);
                                            }()) ? " L" : q(function() {
                                              var a = f;
                                              return r.g ? r.g(a) : r.call(null, a);
                                            }()) ? " A" : null), oj(G(a)));
                                          }
                                          return null;
                                        }
                                      };
                                    }(a, b, c, d, e, f, g, h, l, r, n, s, w, J, A, y, C, F, I, K, ga, N, za, da, fa, wa, na, ea, Ha, Ea, Oa, Xa, Ma, sa), null, null);
                                  };
                                }(na, sa, Oa, Ea, Xa, Ma, ea, Ha, a, b, c, d, e, f, g, h, l, r, n, s, w, J, A, y, C, F, I, K, ga, N, za, da, fa, wa)(Te.g(sa));
                              }()], null));
                              na += 1;
                            } else {
                              return!0;
                            }
                          }
                        }() ? Xf(Ma.R(), xc(z(ea))) : Xf(Ma.R(), null);
                      }
                      var Oa = E(ea), sa = ko.g(function() {
                        var b = Oa;
                        return a.g ? a.g(b) : a.call(null, b);
                      }());
                      return Td(new U(null, 2, 5, V, ["  SEGMENT " + u.g(Oa), function() {
                        return function(a, b, c, d, e, f, g, h, l, r, n, s, w, J, A, y, C, F, I, K, ga, N, qf, za, da, fa, wa, na, ea, Ha) {
                          return function Nh(Ea) {
                            return new Mf(null, function(a, b, c, d, e, f, g, h, l, r, n, s, w, J, A) {
                              return function() {
                                for (;;) {
                                  var a = D(Ea);
                                  if (a) {
                                    if (T(a)) {
                                      var b = x(a), c = O(b), d = Uf(c);
                                      return function() {
                                        for (var a = 0;;) {
                                          if (a < c) {
                                            var e = v.h(b, a), h = P.j(e, 0, null), e = P.j(e, 1, null);
                                            Yf(d, "  " + u.g(h) + u.g(e >= A ? " :\x3d\x3e " : " :.: ") + u.g(SC("%.2f", e)) + u.g(q(function() {
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
                                      }() ? Xf(d.R(), Nh(z(a))) : Xf(d.R(), null);
                                    }
                                    var e = E(a), h = P.j(e, 0, null), e = P.j(e, 1, null);
                                    return Td("  " + u.g(h) + u.g(e >= A ? " :\x3d\x3e " : " :.: ") + u.g(SC("%.2f", e)) + u.g(q(function() {
                                      var a = h;
                                      return g.g ? g.g(a) : g.call(null, a);
                                    }()) ? " L" : q(function() {
                                      var a = h;
                                      return f.g ? f.g(a) : f.call(null, a);
                                    }()) ? " A" : null), Nh(G(a)));
                                  }
                                  return null;
                                }
                              };
                            }(a, b, c, d, e, f, g, h, l, r, n, s, w, J, A, y, C, F, I, K, ga, N, qf, za, da, fa, wa, na, ea, Ha), null, null);
                          };
                        }(sa, Oa, ea, Ha, a, b, c, d, e, f, g, h, l, r, n, s, w, J, A, y, C, F, I, K, ga, N, za, da, fa, wa)(Te.g(sa));
                      }()], null), xc(G(ea)));
                    }
                    return null;
                  }
                };
              }(a, b, c, d, e, f, g, h, l, r, n, s, w, J, A, y, C, F, I, K, ga, N, za, da, fa, wa), null, null);
            };
          }(Kb, Sb, Rc, a, b, c, d, e, f, g, h, l, r, n, s, w, A, y, C, F, I, K, N, da, fa, cc)(zj.g(O(Kb)));
        }()], null);
      };
    }(s, w, A, y, C, F, I, N, K, da, fa, f, g, h, l, n, r, a, b, b, c, d, e), Zq.g(F))], null);
  }() : null], null))));
}
function PD(a) {
  var b = we(a) ? S.h(vg, a) : a;
  a = Q.h(b, Fp);
  var b = Q.h(b, fn), c = Bv(new U(null, 1, 5, V, [Uo], null));
  c.width = b;
  c.height = a;
  return c;
}
function QD(a) {
  var b = PD(lD(a)), c = b.getContext(Kf("2d")), d = qD(a);
  $C(c, Cn.g($));
  xD(c, a, zj.h(d, d + pD(a)));
  c.fill();
  return b;
}
function RD(a, b) {
  var c = PD(lD(a)), d = c.getContext(Kf("2d")), e = sB.g(b);
  $C(d, Lp.g($));
  xD(d, a, e);
  d.fill();
  return c;
}
function SD(a, b) {
  var c = PD(lD(a)), d = c.getContext(Kf("2d")), e = cq.g(b), f = hu(b, e), e = Wt(function() {
    return function(a) {
      a /= 8;
      return 1 < a ? 1 : a;
    };
  }(c, d, e, f), f);
  $C(d, Pq.g($));
  yD(d, a, e);
  return c;
}
function TD(a, b) {
  var c = PD(lD(a)), d = c.getContext(Kf("2d")), e = yo.g(b);
  $C(d, Lp.g($));
  xD(d, a, e);
  d.fill();
  return c;
}
function UD(a, b) {
  var c = PD(lD(a)), d = c.getContext(Kf("2d")), e = gj(Tm.g(b));
  $C(d, Pq.g($));
  xD(d, a, e);
  d.fill();
  return c;
}
function VD(a, b) {
  var c = PD(lD(a)), d = c.getContext(Kf("2d")), e = gj(Om.g(b));
  $C(d, Bm.g($));
  xD(d, a, e);
  d.fill();
  return c;
}
function WD(a, b) {
  var c = PD(lD(a)), d = c.getContext(Kf("2d")), e = Wt(function() {
    return function(a) {
      a /= 16;
      return 1 < a ? 1 : a;
    };
  }(c, d), Np.g(b));
  $C(d, "black");
  yD(d, a, e);
  d.fill();
  return c;
}
function XD(a) {
  return "Showing " + u.g(qD(a)) + "--" + u.g(qD(a) + pD(a) + -1) + " of " + u.g(pt.g(a));
}
function YD() {
  var a = M.g ? M.g(ZD) : M.call(null, ZD), b = we(a) ? S.h(vg, a) : a, c = Q.h(b, ln), d = Q.h(b, $o), e = Q.h(b, Xm);
  Ev.h("#detail-text", q(e) ? OD(b) : "Select a column (by clicking on it) to see details.");
  var f = M.g ? M.g(fD) : M.call(null, fD), g = Vq.g(M.g ? M.g(jD) : M.call(null, jD)), h = un.g(M.g ? M.g(jD) : M.call(null, jD)), l = P.h(M.g ? M.g(iD) : M.call(null, iD), c), n = P.j(M.g ? M.g(iD) : M.call(null, iD), c + 1, li), r = Bv("#comportex-viz"), s = r.getContext(Kf("2d")), w = QD(g), A = Cg.h(QD, h), y = vD(Yd(h)) + gh.h(f, new U(null, 2, 5, V, [Aq, bn], null));
  WC(s, new p(null, 4, [Jq, 0, Vj, 0, fn, r.width, Fp, 900], null));
  ZC(s, new p(null, 3, [zt, "Input bits.    Time --\x3e", Jq, Jq.g(lD(g)), Vj, 7], null));
  ZC(s, new p(null, 3, [zt, XD(g), Jq, Jq.g(lD(g)), Vj, 17], null));
  for (var C = D(sg(Ah, h)), F = null, I = 0, N = 0;;) {
    if (N < I) {
      var K = F.D(null, N), da = P.j(K, 0, null), fa = P.j(K, 1, null);
      ZC(s, new p(null, 3, [zt, "Region " + u.g(da) + " columns.", Jq, Jq.g(lD(fa)), Vj, 7], null));
      ZC(s, new p(null, 3, [zt, XD(fa), Jq, Jq.g(lD(fa)), Vj, 17], null));
      N += 1;
    } else {
      var J = D(C);
      if (J) {
        var za = J;
        if (T(za)) {
          var ga = x(za), na = z(za), wa = ga, Ha = O(ga), C = na, F = wa, I = Ha
        } else {
          var Ea = E(za), kb = P.j(Ea, 0, null), Ma = P.j(Ea, 1, null);
          ZC(s, new p(null, 3, [zt, "Region " + u.g(kb) + " columns.", Jq, Jq.g(lD(Ma)), Vj, 7], null));
          ZC(s, new p(null, 3, [zt, XD(Ma), Jq, Jq.g(lD(Ma)), Vj, 17], null));
          C = H(za);
          F = null;
          I = 0;
        }
        N = 0;
      } else {
        break;
      }
    }
  }
  var Xa = y + gh.h(f, new U(null, 2, 5, V, [Aq, zk], null));
  ZC(s, new p(null, 3, [zt, "Segments. " + u.g(q(e) ? "(arrows keys to move)" : "(click on a column)") + " Page up / page down to scroll columns.", Jq, Xa, Vj, 7], null));
  for (var lb = D(zj.g(O(M.g ? M.g(iD) : M.call(null, iD)))), Na = null, tb = 0, Oa = 0;;) {
    if (Oa < tb) {
      var sa = Na.D(null, Oa), Ib = P.h(M.g ? M.g(iD) : M.call(null, iD), sa), Jb = P.j(M.g ? M.g(iD) : M.call(null, iD), sa + 1, li), cb = E(KB(Jb)), ub = KB(Ib), ea = mr.g(je(Ib));
      zD(s, g, sa, w);
      q(gh.h(f, new U(null, 2, 5, V, [Vq, Lp], null))) && zD(s, g, sa, Q.h(B.h(Vq.g(f), Vq.g(Xp.g(function() {
        var a = ea;
        return M.g ? M.g(a) : M.call(null, a);
      }()))) ? function() {
        var a = ea;
        return M.g ? M.g(a) : M.call(null, a);
      }() : Ag.m(ea, R, ao, RD(g, E(LB(Ib)))), ao));
      q(gh.h(f, new U(null, 2, 5, V, [Vq, Pq], null))) && zD(s, g, sa, Q.h(B.h(Vq.g(f), Vq.g(Xp.g(function() {
        var a = ea;
        return M.g ? M.g(a) : M.call(null, a);
      }()))) ? function() {
        var a = ea;
        return M.g ? M.g(a) : M.call(null, a);
      }() : Ag.m(ea, R, zp, SD(g, cb)), zp));
      for (var bc = D(Cg.k(Ah, zj.p(), h, ub, L([A], 0))), $c = null, cc = 0, Fc = 0;;) {
        if (Fc < cc) {
          var jc = $c.D(null, Fc), Kb = P.j(jc, 0, null), Sb = P.j(jc, 1, null), Rc = P.j(jc, 2, null), Gg = P.j(jc, 3, null);
          zD(s, Sb, sa, Gg);
          q(gh.h(f, new U(null, 2, 5, V, [Y, Np], null))) && zD(s, Sb, sa, Q.h(B.h(Y.g(f), Y.g(Xp.g(function() {
            var a = ea;
            return M.g ? M.g(a) : M.call(null, a);
          }()))) ? function() {
            var a = ea;
            return M.g ? M.g(a) : M.call(null, a);
          }() : Ag.m(ea, R, new U(null, 2, 5, V, [gt, Kb], null), WD(Sb, Rc)), new U(null, 2, 5, V, [gt, Kb], null)));
          q(gh.h(f, new U(null, 2, 5, V, [Y, Lp], null))) && zD(s, Sb, sa, Q.h(B.h(Y.g(f), Y.g(Xp.g(function() {
            var a = ea;
            return M.g ? M.g(a) : M.call(null, a);
          }()))) ? function() {
            var a = ea;
            return M.g ? M.g(a) : M.call(null, a);
          }() : Ag.m(ea, R, new U(null, 2, 5, V, [Tn, Kb], null), TD(Sb, Rc)), new U(null, 2, 5, V, [Tn, Kb], null)));
          q(gh.h(f, new U(null, 2, 5, V, [Y, On], null))) && zD(s, Sb, sa, Q.h(B.h(Y.g(f), Y.g(Xp.g(function() {
            var a = ea;
            return M.g ? M.g(a) : M.call(null, a);
          }()))) ? function() {
            var a = ea;
            return M.g ? M.g(a) : M.call(null, a);
          }() : Ag.m(ea, R, new U(null, 2, 5, V, [$p, Kb], null), UD(Sb, Rc)), new U(null, 2, 5, V, [$p, Kb], null)));
          q(gh.h(f, new U(null, 2, 5, V, [Y, Bm], null))) && zD(s, Sb, sa, Q.h(B.h(Y.g(f), Y.g(Xp.g(function() {
            var a = ea;
            return M.g ? M.g(a) : M.call(null, a);
          }()))) ? function() {
            var a = ea;
            return M.g ? M.g(a) : M.call(null, a);
          }() : Ag.m(ea, R, new U(null, 2, 5, V, [ip, Kb], null), VD(Sb, Rc)), new U(null, 2, 5, V, [ip, Kb], null)));
          Fc += 1;
        } else {
          var Hg = D(bc);
          if (Hg) {
            var fd = Hg;
            if (T(fd)) {
              var ef = x(fd), ff = z(fd), Ig = ef, Sc = O(ef), bc = ff, $c = Ig, cc = Sc
            } else {
              var Eb = E(fd), vc = P.j(Eb, 0, null), Tb = P.j(Eb, 1, null), Tc = P.j(Eb, 2, null), gf = P.j(Eb, 3, null);
              zD(s, Tb, sa, gf);
              q(gh.h(f, new U(null, 2, 5, V, [Y, Np], null))) && zD(s, Tb, sa, Q.h(B.h(Y.g(f), Y.g(Xp.g(function() {
                var a = ea;
                return M.g ? M.g(a) : M.call(null, a);
              }()))) ? function() {
                var a = ea;
                return M.g ? M.g(a) : M.call(null, a);
              }() : Ag.m(ea, R, new U(null, 2, 5, V, [gt, vc], null), WD(Tb, Tc)), new U(null, 2, 5, V, [gt, vc], null)));
              q(gh.h(f, new U(null, 2, 5, V, [Y, Lp], null))) && zD(s, Tb, sa, Q.h(B.h(Y.g(f), Y.g(Xp.g(function() {
                var a = ea;
                return M.g ? M.g(a) : M.call(null, a);
              }()))) ? function() {
                var a = ea;
                return M.g ? M.g(a) : M.call(null, a);
              }() : Ag.m(ea, R, new U(null, 2, 5, V, [Tn, vc], null), TD(Tb, Tc)), new U(null, 2, 5, V, [Tn, vc], null)));
              q(gh.h(f, new U(null, 2, 5, V, [Y, On], null))) && zD(s, Tb, sa, Q.h(B.h(Y.g(f), Y.g(Xp.g(function() {
                var a = ea;
                return M.g ? M.g(a) : M.call(null, a);
              }()))) ? function() {
                var a = ea;
                return M.g ? M.g(a) : M.call(null, a);
              }() : Ag.m(ea, R, new U(null, 2, 5, V, [$p, vc], null), UD(Tb, Tc)), new U(null, 2, 5, V, [$p, vc], null)));
              q(gh.h(f, new U(null, 2, 5, V, [Y, Bm], null))) && zD(s, Tb, sa, Q.h(B.h(Y.g(f), Y.g(Xp.g(function() {
                var a = ea;
                return M.g ? M.g(a) : M.call(null, a);
              }()))) ? function() {
                var a = ea;
                return M.g ? M.g(a) : M.call(null, a);
              }() : Ag.m(ea, R, new U(null, 2, 5, V, [ip, vc], null), VD(Tb, Tc)), new U(null, 2, 5, V, [ip, vc], null)));
              bc = H(fd);
              $c = null;
              cc = 0;
            }
            Fc = 0;
          } else {
            break;
          }
        }
      }
      jg.h(f, Xp.g(function() {
        var a = ea;
        return M.g ? M.g(a) : M.call(null, a);
      }())) && Ag.m(ea, R, Xp, f);
      Oa += 1;
    } else {
      var hf = D(lb);
      if (hf) {
        var Gc = hf;
        if (T(Gc)) {
          var $d = x(Gc), Ih = z(Gc), jf = $d, Uc = O($d), lb = Ih, Na = jf, tb = Uc
        } else {
          var Nb = E(Gc), kc = P.h(M.g ? M.g(iD) : M.call(null, iD), Nb), gd = P.j(M.g ? M.g(iD) : M.call(null, iD), Nb + 1, li), Hc = E(KB(gd)), wc = KB(kc), va = mr.g(je(kc));
          zD(s, g, Nb, w);
          q(gh.h(f, new U(null, 2, 5, V, [Vq, Lp], null))) && zD(s, g, Nb, Q.h(B.h(Vq.g(f), Vq.g(Xp.g(function() {
            var a = va;
            return M.g ? M.g(a) : M.call(null, a);
          }()))) ? function() {
            var a = va;
            return M.g ? M.g(a) : M.call(null, a);
          }() : Ag.m(va, R, ao, RD(g, E(LB(kc)))), ao));
          q(gh.h(f, new U(null, 2, 5, V, [Vq, Pq], null))) && zD(s, g, Nb, Q.h(B.h(Vq.g(f), Vq.g(Xp.g(function() {
            var a = va;
            return M.g ? M.g(a) : M.call(null, a);
          }()))) ? function() {
            var a = va;
            return M.g ? M.g(a) : M.call(null, a);
          }() : Ag.m(va, R, zp, SD(g, Hc)), zp));
          for (var Lb = D(Cg.k(Ah, zj.p(), h, wc, L([A], 0))), hd = null, Ae = 0, xc = 0;;) {
            if (xc < Ae) {
              var id = hd.D(null, xc), Zb = P.j(id, 0, null), Ub = P.j(id, 1, null), jd = P.j(id, 2, null), ae = P.j(id, 3, null);
              zD(s, Ub, Nb, ae);
              q(gh.h(f, new U(null, 2, 5, V, [Y, Np], null))) && zD(s, Ub, Nb, Q.h(B.h(Y.g(f), Y.g(Xp.g(function() {
                var a = va;
                return M.g ? M.g(a) : M.call(null, a);
              }()))) ? function() {
                var a = va;
                return M.g ? M.g(a) : M.call(null, a);
              }() : Ag.m(va, R, new U(null, 2, 5, V, [gt, Zb], null), WD(Ub, jd)), new U(null, 2, 5, V, [gt, Zb], null)));
              q(gh.h(f, new U(null, 2, 5, V, [Y, Lp], null))) && zD(s, Ub, Nb, Q.h(B.h(Y.g(f), Y.g(Xp.g(function() {
                var a = va;
                return M.g ? M.g(a) : M.call(null, a);
              }()))) ? function() {
                var a = va;
                return M.g ? M.g(a) : M.call(null, a);
              }() : Ag.m(va, R, new U(null, 2, 5, V, [Tn, Zb], null), TD(Ub, jd)), new U(null, 2, 5, V, [Tn, Zb], null)));
              q(gh.h(f, new U(null, 2, 5, V, [Y, On], null))) && zD(s, Ub, Nb, Q.h(B.h(Y.g(f), Y.g(Xp.g(function() {
                var a = va;
                return M.g ? M.g(a) : M.call(null, a);
              }()))) ? function() {
                var a = va;
                return M.g ? M.g(a) : M.call(null, a);
              }() : Ag.m(va, R, new U(null, 2, 5, V, [$p, Zb], null), UD(Ub, jd)), new U(null, 2, 5, V, [$p, Zb], null)));
              q(gh.h(f, new U(null, 2, 5, V, [Y, Bm], null))) && zD(s, Ub, Nb, Q.h(B.h(Y.g(f), Y.g(Xp.g(function() {
                var a = va;
                return M.g ? M.g(a) : M.call(null, a);
              }()))) ? function() {
                var a = va;
                return M.g ? M.g(a) : M.call(null, a);
              }() : Ag.m(va, R, new U(null, 2, 5, V, [ip, Zb], null), VD(Ub, jd)), new U(null, 2, 5, V, [ip, Zb], null)));
              xc += 1;
            } else {
              var Ic = D(Lb);
              if (Ic) {
                var Xb = Ic;
                if (T(Xb)) {
                  var yc = x(Xb), Be = z(Xb), Pf = yc, Jh = O(yc), Lb = Be, hd = Pf, Ae = Jh
                } else {
                  var be = E(Xb), $b = P.j(be, 0, null), Vb = P.j(be, 1, null), Dd = P.j(be, 2, null), Ce = P.j(be, 3, null);
                  zD(s, Vb, Nb, Ce);
                  q(gh.h(f, new U(null, 2, 5, V, [Y, Np], null))) && zD(s, Vb, Nb, Q.h(B.h(Y.g(f), Y.g(Xp.g(function() {
                    var a = va;
                    return M.g ? M.g(a) : M.call(null, a);
                  }()))) ? function() {
                    var a = va;
                    return M.g ? M.g(a) : M.call(null, a);
                  }() : Ag.m(va, R, new U(null, 2, 5, V, [gt, $b], null), WD(Vb, Dd)), new U(null, 2, 5, V, [gt, $b], null)));
                  q(gh.h(f, new U(null, 2, 5, V, [Y, Lp], null))) && zD(s, Vb, Nb, Q.h(B.h(Y.g(f), Y.g(Xp.g(function() {
                    var a = va;
                    return M.g ? M.g(a) : M.call(null, a);
                  }()))) ? function() {
                    var a = va;
                    return M.g ? M.g(a) : M.call(null, a);
                  }() : Ag.m(va, R, new U(null, 2, 5, V, [Tn, $b], null), TD(Vb, Dd)), new U(null, 2, 5, V, [Tn, $b], null)));
                  q(gh.h(f, new U(null, 2, 5, V, [Y, On], null))) && zD(s, Vb, Nb, Q.h(B.h(Y.g(f), Y.g(Xp.g(function() {
                    var a = va;
                    return M.g ? M.g(a) : M.call(null, a);
                  }()))) ? function() {
                    var a = va;
                    return M.g ? M.g(a) : M.call(null, a);
                  }() : Ag.m(va, R, new U(null, 2, 5, V, [$p, $b], null), UD(Vb, Dd)), new U(null, 2, 5, V, [$p, $b], null)));
                  q(gh.h(f, new U(null, 2, 5, V, [Y, Bm], null))) && zD(s, Vb, Nb, Q.h(B.h(Y.g(f), Y.g(Xp.g(function() {
                    var a = va;
                    return M.g ? M.g(a) : M.call(null, a);
                  }()))) ? function() {
                    var a = va;
                    return M.g ? M.g(a) : M.call(null, a);
                  }() : Ag.m(va, R, new U(null, 2, 5, V, [ip, $b], null), VD(Vb, Dd)), new U(null, 2, 5, V, [ip, $b], null)));
                  Lb = H(Xb);
                  hd = null;
                  Ae = 0;
                }
                xc = 0;
              } else {
                break;
              }
            }
          }
          jg.h(f, Xp.g(function() {
            var a = va;
            return M.g ? M.g(a) : M.call(null, a);
          }())) && Ag.m(va, R, Xp, f);
          lb = H(Gc);
          Na = null;
          tb = 0;
        }
        Oa = 0;
      } else {
        break;
      }
    }
  }
  tD(g, s, c);
  for (var De = D(h), kd = null, Ee = 0, Vc = 0;;) {
    if (Vc < Ee) {
      var Ka = kd.D(null, Vc);
      tD(Ka, s, c);
      Vc += 1;
    } else {
      var Fe = D(De);
      if (Fe) {
        var qb = Fe;
        if (T(qb)) {
          var ac = x(qb), Qf = z(qb), Jg = ac, Rf = O(ac), De = Qf, kd = Jg, Ee = Rf
        } else {
          var kf = E(qb);
          tD(kf, s, c);
          De = H(qb);
          kd = null;
          Ee = 0;
        }
        Vc = 0;
      } else {
        break;
      }
    }
  }
  if (q(e)) {
    var lf = P.h(h, d);
    uD(lf, s, c, e);
  }
  if (q(gh.h(f, new U(null, 2, 5, V, [dk, Lp], null)))) {
    for (var ce = D(Cg.k(Ah, zj.p(), KB(l), KB(n), L([cg.h(E(LB(l)), JB(l)), h, cg.h(g, h)], 0))), ld = null, md = 0, Wc = 0;;) {
      if (Wc < md) {
        var Ob = ld.D(null, Wc), mf = P.j(Ob, 0, null), nd = P.j(Ob, 1, null), Kg = P.j(Ob, 2, null), Lg = P.j(Ob, 3, null), nf = P.j(Ob, 4, null), Ge = P.j(Ob, 5, null);
        (db(e) || B.h(d, mf)) && HD(s, nd, Kg, nf, Lg, Ge, e, c, f);
        Wc += 1;
      } else {
        var Ed = D(ce);
        if (Ed) {
          var Xc = Ed;
          if (T(Xc)) {
            var od = x(Xc), Fd = z(Xc), He = od, Sf = O(od), ce = Fd, ld = He, md = Sf
          } else {
            var Yc = E(Xc), Kh = P.j(Yc, 0, null), of = P.j(Yc, 1, null), Ak = P.j(Yc, 2, null), Bk = P.j(Yc, 3, null), Ie = P.j(Yc, 4, null), Mg = P.j(Yc, 5, null);
            (db(e) || B.h(d, Kh)) && HD(s, of, Ak, Ie, Bk, Mg, e, c, f);
            ce = H(Xc);
            ld = null;
            md = 0;
          }
          Wc = 0;
        } else {
          break;
        }
      }
    }
  }
  if (q(q(e) ? c + 1 < O(M.g ? M.g(iD) : M.call(null, iD)) : e)) {
    var Je = P.h(KB(l), d), pf = P.h(KB(n), d), nj = P.h(h, d);
    ND(s, Je, pf, nj, e, c, y, f);
  }
  return null;
}
function $D(a, b, c) {
  var d = LC.p();
  gA(a, b, function(a, b, d) {
    return function(a) {
      NC.h(d, a);
      return q(c.g ? c.g(a) : c.call(null, a)) ? (a.preventDefault(), !1) : null;
    };
  }(a, b, d));
  return d;
}
function aE(a, b) {
  var c = $D(a, "click", function() {
    return!1;
  }), d = LC.g(1);
  lC(function(a, c) {
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
                      AC(c);
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
              var d = a[7], e = a[8], f = a[9], d = a[2], f = d.offsetX, g = d.offsetY, d = M.g ? M.g(jD) : M.call(null, jD), e = Vq.g(d), d = M.g ? M.g(jD) : M.call(null, jD), h = un.g(d), d = M.g ? M.g(iD) : M.call(null, iD), d = O(d) - 2, e = rD(e, f, g);
              a[7] = g;
              a[10] = d;
              a[11] = h;
              a[8] = f;
              a[9] = e;
              a[1] = q(e) ? 8 : 9;
              return Z;
            }
            return 1 === d ? (a[2] = null, a[1] = 2, Z) : 4 === d ? yC(a, 7, c) : 15 === d ? (d = a[2], a[2] = d, a[1] = 12, Z) : 13 === d ? (f = a[12], d = a[7], h = a[11], e = a[8], g = a[13], h = P.h(h, f), d = rD(h, e, d), a[13] = d, a[1] = q(d) ? 16 : 17, Z) : 6 === d ? (d = a[2], a[2] = d, a[1] = 3, Z) : 17 === d ? (f = a[12], a[12] = f + 1, a[2] = null, a[1] = 11, Z) : 3 === d ? (d = a[2], zC(a, d)) : 12 === d ? (d = a[2], a[2] = d, a[1] = 10, Z) : 2 === d ? (a[1] = 4, Z) : 11 === d ? (f = 
            a[12], h = a[11], d = O(h), a[1] = q(f < d) ? 13 : 14, Z) : 9 === d ? (a[12] = 0, a[2] = null, a[1] = 11, Z) : 5 === d ? (a[2] = null, a[1] = 6, Z) : 14 === d ? (d = Ag.m(b, R, Xm, null), a[2] = d, a[1] = 15, Z) : 16 === d ? (f = a[12], d = a[10], g = a[13], h = P.j(g, 0, null), g = P.j(g, 1, null), d = fe([$o, Xm, ln], [f, g, h < d ? h : d]), d = yg.h ? yg.h(b, d) : yg.call(null, b, d), a[2] = d, a[1] = 18, Z) : 10 === d ? (a[14] = a[2], a[2] = null, a[1] = 2, Z) : 18 === d ? (d = a[2], 
            a[2] = d, a[1] = 15, Z) : 8 === d ? (d = a[10], f = a[9], h = P.j(f, 0, null), f = P.j(f, 1, null), d = Ag.m(b, R, ln, h < d ? h : d), a[15] = f, a[2] = d, a[1] = 10, Z) : null;
          };
        }(a, c), a, c);
      }(), h = function() {
        var b = d.p ? d.p() : d.call(null);
        b[6] = a;
        return b;
      }();
      return xC(h);
    };
  }(d, c));
}
var bE = new p(null, 6, [33, tn, 34, dr, 37, yt, 38, So, 39, uq, 40, jk], null);
function cE(a, b) {
  var c = $D(document, "keydown", function(a) {
    a = a.keyCode;
    return bE.g ? bE.g(a) : bE.call(null, a);
  }), d = LC.g(1);
  lC(function(c, d) {
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
                      AC(c);
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
              var g = e[7], h = e[8], y = e[2], C = y.keyCode, C = bE.g ? bE.g(C) : bE.call(null, C), F = M.g ? M.g(iD) : M.call(null, iD), I = O(F) - 2;
              e[9] = I;
              e[7] = y;
              e[8] = C;
              e[1] = q(C) ? 8 : 9;
              return Z;
            }
            if (20 === f) {
              return y = GD(!0), e[2] = y, e[1] = 11, Z;
            }
            if (1 === f) {
              return e[2] = null, e[1] = 2, Z;
            }
            if (4 === f) {
              return yC(e, 7, d);
            }
            if (15 === f) {
              var I = e[9], g = e[7], h = e[8], N = [ln], K = new U(null, 1, 5, V, N, null), y = Ag.m(a, jh, K, function() {
                return function() {
                  return function(a) {
                    a -= 1;
                    return 0 < a ? a : 0;
                  };
                }(I, h, g, I, g, h, V, N, K, f, c, d);
              }());
              e[2] = y;
              e[1] = 16;
              return Z;
            }
            if (13 === f) {
              return y = M.g ? M.g(a) : M.call(null, a), y = 0 === ln.g(y), e[1] = q(y) ? 14 : 15, Z;
            }
            if (6 === f) {
              return y = e[2], e[2] = y, e[1] = 3, Z;
            }
            if (17 === f) {
              var I = e[9], g = e[7], h = e[8], da = [Xm], fa = new U(null, 1, 5, V, da, null), y = Ag.m(a, jh, fa, function() {
                return function() {
                  return function(a) {
                    return q(a) ? a - 1 : null;
                  };
                }(I, h, g, I, g, h, V, da, fa, f, c, d);
              }());
              e[2] = y;
              e[1] = 11;
              return Z;
            }
            if (3 === f) {
              return y = e[2], zC(e, y);
            }
            if (12 === f) {
              var I = e[9], g = e[7], h = e[8], J = [ln], za = new U(null, 1, 5, V, J, null), y = Ag.m(a, jh, za, function() {
                return function(a) {
                  return function(b) {
                    b += 1;
                    return b < a ? b : a;
                  };
                }(I, h, g, I, g, h, V, J, za, f, c, d);
              }());
              e[2] = y;
              e[1] = 11;
              return Z;
            }
            if (2 === f) {
              return e[1] = 4, Z;
            }
            if (19 === f) {
              return y = GD(!1), e[2] = y, e[1] = 11, Z;
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
              var I = e[9], g = e[7], h = e[8], ga = [Xm], na = new U(null, 1, 5, V, ga, null), y = Ag.m(a, jh, na, function() {
                return function() {
                  return function(a) {
                    return q(a) ? a + 1 : null;
                  };
                }(I, h, g, I, g, h, V, ga, na, f, c, d);
              }());
              e[2] = y;
              e[1] = 11;
              return Z;
            }
            if (8 === f) {
              h = e[8];
              switch(h instanceof W ? h.$ : null) {
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
                  throw Error("No matching clause: " + u.g(h));;
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
      return xC(h);
    };
  }(d, c));
}
function dE(a) {
  var b = eE(), c = ZD, d = fE, e = KB(a), f = E(LB(a)), g = Aq.g(M.g ? M.g(fD) : M.call(null, fD)), h = lB(f);
  a = ED(h, g);
  var l = bn.g(g), e = Ve.j(function(a, b, c, d, e, f) {
    return function(a, b) {
      var d = Vo.g(lp.g(b)), g = ke(a), g = vD(q(g) ? g : e) + f;
      return de.h(a, FD(d, g, c));
    };
  }(e, f, g, h, a, l), Zd, e), e = new p(null, 2, [Vq, a, un, e], null);
  yg.h ? yg.h(jD, e) : yg.call(null, jD, e);
  e = LC.g(1);
  lC(function(a) {
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
                      AC(c);
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
              }(), h = ig.m(f, R, mr, g), e = Ag.h(iD, function() {
                return function(a) {
                  return function(b) {
                    return zh(Dg.h(M.g ? M.g(hD) : M.call(null, hD), Td(a, b)));
                  };
                }(h, f, f, f, ni, g, h, d, a);
              }());
              c[8] = e;
              c[2] = null;
              c[1] = 2;
              return Z;
            }
            return 4 === d ? (f = c[7], e = c[2], c[7] = e, c[1] = q(e) ? 5 : 6, Z) : 3 === d ? (e = c[2], zC(c, e)) : 2 === d ? yC(c, 4, b) : 1 === d ? (c[2] = null, c[1] = 2, Z) : null;
          };
        }(a), a);
      }(), d = function() {
        var b = c.p ? c.p() : c.call(null);
        b[6] = a;
        return b;
      }();
      return xC(d);
    };
  }(e));
  e = Bv("#comportex-viz");
  e.width = .7 * (window.innerWidth - 20);
  e.height = 900;
  aE(e, c);
  cE(c, d);
}
;function gE(a, b) {
  if (a.classList) {
    a.classList.add(b);
  } else {
    var c;
    a.classList ? c = !a.classList.contains(b) : (a.classList ? c = a.classList : (c = a.className, c = ha(c) && c.match(/\S+/g) || []), c = !(0 <= Pa(c, b)));
    c && (a.className += 0 < a.className.length ? " " + b : b);
  }
}
;function hE() {
  Lw.call(this);
  this.cc = new Uw(this);
  this.ke = this;
  this.ee = null;
}
oa(hE, Lw);
hE.prototype[Qw] = !0;
k = hE.prototype;
k.addEventListener = function(a, b, c, d) {
  gA(this, a, b, c, d);
};
k.removeEventListener = function(a, b, c, d) {
  mA(this, a, b, c, d);
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
    a = new Nw(a, c);
  } else {
    if (a instanceof Nw) {
      a.target = a.target || c;
    } else {
      var e = a;
      a = new Nw(d, c);
      Ga(a, e);
    }
  }
  var e = !0, f;
  if (b) {
    for (var g = b.length - 1;!a.fc && 0 <= g;g--) {
      f = a.currentTarget = b[g], e = iE(f, d, !0, a) && e;
    }
  }
  a.fc || (f = a.currentTarget = c, e = iE(f, d, !0, a) && e, a.fc || (e = iE(f, d, !1, a) && e));
  if (b) {
    for (g = 0;!a.fc && g < b.length;g++) {
      f = a.currentTarget = b[g], e = iE(f, d, !1, a) && e;
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
function iE(a, b, c, d) {
  b = a.cc.Oa[String(b)];
  if (!b) {
    return!0;
  }
  b = b.concat();
  for (var e = !0, f = 0;f < b.length;++f) {
    var g = b[f];
    if (g && !g.gc && g.uc == c) {
      var h = g.Ob, l = g.Jb || g.src;
      g.tc && cA(a.cc, g);
      e = !1 !== h.call(l, d) && e;
    }
  }
  return e && !1 != d.fe;
}
k.dd = function(a, b, c, d) {
  return this.cc.dd(String(a), b, c, d);
};
var jE = new U(null, 2, 5, V, [0, 15], null), kE = new p(null, 6, [hk, new U(null, 6, 5, V, [0, 1, 2, 3, 4, 5], null), Hq, new U(null, 5, 5, V, [5, 4, 3, 2, 1], null), lt, new U(null, 5, 5, V, [6, 7, 8, 9, 10], null), kr, new U(null, 5, 5, V, [6, 7, 8, 11, 12], null), Wn, new U(null, 8, 5, V, [0, 2, 4, 6, 8, 10, 12, 14], null), Eq, new U(null, 8, 5, V, [10, 12, 11, 13, 12, 14, 13, 15], null)], null), lE = gj(kE), mE = 2 * vf(Ve.h(Ze, Cg.h(O, ji(kE))));
function nE() {
  return Wt(function(a) {
    return new p(null, 3, [Yq, a, Fm, null, ek, Qt(mE)], null);
  }, kE);
}
function oE(a) {
  return Wt(function(a) {
    return B.h(Fm.g(a), O(Yq.g(a)) - 1) ? R.k(a, Fm, null, L([ek, Qt(mE)], 0)) : db(Fm.g(a)) && 0 < ek.g(a) ? jh.j(a, new U(null, 1, 5, V, [ek], null), af) : db(Fm.g(a)) && 0 === ek.g(a) ? R.j(a, Fm, 0) : jh.j(a, new U(null, 1, 5, V, [Fm], null), Kd);
  }, a);
}
function pE(a) {
  return q(Fm.g(a)) ? Q.h(Yq.g(a), Fm.g(a)) : null;
}
var qE = kB(function(a) {
  return Cg.h(pE, Cg.h(a, lE));
}, hB(fB(400, 25, jE))), rE = fe([kk, wm, Em, Hm, An, Kn, zo, Vo, tp, yp, Dp, Kp, Mp, Tp, eq, qq, Fq, br, gr, or, bt], [.01, 18, .01, 5, 12, .05, 9, 1E3, 2, 3, .05, .16, .02, .2, !1, .1, 8, .05, .2, 1E5, 7]);
function sE() {
  var a = nE();
  return new DB(a, a, oE, qE);
}
ma("org.nfrac.comportex.demos.mixed_gaps_1d.input_gen", sE);
var tE = function() {
  function a(a, b) {
    return Yd(Dg.h(a + 1, Vg(function(a) {
      return IB(b, new U(null, 1, 5, V, [a], null));
    }, sE())));
  }
  function b(a) {
    return c.h(a, rE);
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
ma("org.nfrac.comportex.demos.mixed_gaps_1d.n_region_model", tE);
ma("comportexviz.demos.mixed_gaps_1d.n_region_model", function(a) {
  return tE.g(a);
});
var uE = fe([kk, Em, An, Kn, Pn, Zn, zo, Vo, tp, yp, Dp, Kp, Mp, Tp, eq, Fq, gr, or, bt], [.01, .01, 10, .04, 100, 200, 7, 300, 2, 2, .04, .16, .06, .2, !0, 5, .1, 1E3, 5]);
var vE = new U(null, 2, 5, V, [0, 7], null), wE = new U(null, 2, 5, V, [So, 0], null);
function xE(a) {
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
  a = new U(null, 2, 5, V, [So, jk], null);
  a = P.h(a, Qt(O(a)));
  return new U(null, 2, 5, V, [a, b], null);
}
var zE = iB.k(2, function yE(b, c) {
  var d = O(c), e = b / d, f = vj(c, zj.p()), g = fB(b, e, new U(null, 2, 5, V, [0, d - 1], null));
  "undefined" === typeof YA && (YA = function(b, c, d, e, f, g, A, y) {
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
  }, YA.Ca = !0, YA.Ba = "org.nfrac.comportex.encoders/t31094", YA.Ga = function() {
    return function(b, c) {
      return Bc(c, "org.nfrac.comportex.encoders/t31094");
    };
  }(d, e, f, g), YA.prototype.Qb = function() {
    return function() {
      return this.Tb;
    };
  }(d, e, f, g), YA.prototype.Pb = function() {
    return function(b, c, d) {
      return dB(this.Yd, c, this.Pc.g ? this.Pc.g(d) : this.Pc.call(null, d));
    };
  }(d, e, f, g), YA.prototype.I = function() {
    return function() {
      return this.Xe;
    };
  }(d, e, f, g), YA.prototype.J = function() {
    return function(b, c) {
      return new YA(this.Yd, this.Pc, this.pc, this.Ab, this.values, this.Tb, this.me, c);
    };
  }(d, e, f, g));
  return new YA(g, f, e, d, c, b, yE, null);
}(60, new U(null, 2, 5, V, [jk, So], null)), L([fB(240, 30, vE)], 0));
ma("comportexviz.demos.signal_steps.model", function() {
  return IB(uE, new U(null, 1, 5, V, [new DB(wE, wE, xE, zE)], null));
});
yu || Au && Eu("525");
yu || zu && Eu("1.9.3");
function AE() {
}
AE.Me = function() {
  AE.Ne || (AE.Ne = new AE);
};
AE.Me();
var BE = function() {
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
function CE(a) {
  return Math.floor.g ? Math.floor.g(a) : Math.floor.call(null, a);
}
function DE(a) {
  return Math.ceil.g ? Math.ceil.g(a) : Math.ceil.call(null, a);
}
function EE(a) {
  return Ve.h(Ze, a) / O(a);
}
var FE = function() {
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
var GE = new U(null, 6, 5, V, [1, 5, 2, 2.5, 4, 3], null);
function HE(a) {
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
                    var n = v.h(f, l), r = P.j(n, 0, null), n = P.j(n, 1, null);
                    B.h(n, a) && h.add(r);
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
              return Td(h, c(G(e)));
            }
            e = G(e);
          } else {
            return null;
          }
        }
      }, null, null);
    }(sg(Ah, GE));
  }());
}
function IE(a, b, c) {
  c = q(c) ? 1 : 0;
  return 1 >= O(GE) ? 1 - b + c : 1 - HE(a) / (O(GE) - 1) - b + c;
}
function JE(a, b, c, d) {
  return 1 - .5 * ((BE.h(b - d, 2) + BE.h(a - c, 2)) / BE.h(.1 * (b - a), 2));
}
function KE(a, b, c) {
  a = b - a;
  return c > a ? 1 - BE.h((c - a) / (.2 * a), 2) : 1;
}
function LE(a, b) {
  var c = a / b, d = b / a;
  return 2 - (c > d ? c : d);
}
function ME(a, b) {
  return a >= b ? 2 - a / b : 1;
}
function NE(a) {
  var b = P.j(a, 0, null), c = P.j(a, 1, null), d = P.j(a, 2, null);
  a = P.j(a, 3, null);
  var e = new U(null, 4, 5, V, [.2, .25, .5, .05], null);
  return b * (e.g ? e.g(0) : e.call(null, 0)) + c * (e.g ? e.g(1) : e.call(null, 1)) + d * (e.g ? e.g(2) : e.call(null, 2)) + a * (e.g ? e.g(3) : e.call(null, 3));
}
var OE = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = L(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    var e = P.j(a, 0, null), f = P.j(a, 1, null), g = we(b) ? S.h(vg, b) : b, h = Q.j(g, bp, !1), l = Q.j(g, mq, 500), n = Q.j(g, fk, .01);
    if ("number" === typeof e && "number" === typeof f && jg.h(e, f)) {
      for (var r = xg.g ? xg.g(-2) : xg.call(null, -2), s = xg.g ? xg.g(li) : xg.call(null, li), w = GE;!me(w);) {
        for (var A = E(w), y = 1;;) {
          var C = IE(A, y, !0);
          if (NE(new U(null, 4, 5, V, [C, 1, 1, 1], null)) < (M.g ? M.g(r) : M.call(null, r))) {
            break;
          } else {
            for (var F = 2;;) {
              var I = ME(F / l, n);
              if (NE(new U(null, 4, 5, V, [C, 1, I, 1], null)) < (M.g ? M.g(r) : M.call(null, r))) {
                break;
              } else {
                for (var N = DE(Math.log((f - e) / ((F + 1) * y * F)) / Math.LN10);;) {
                  var K = A * y * BE.h(10, N), da = KE(e, f, (F - 1) * K);
                  if (NE(new U(null, 4, 5, V, [C, da, I, 1], null)) < (M.g ? M.g(r) : M.call(null, r))) {
                    break;
                  } else {
                    for (var da = e / K, fa = CE(f / K) - (F - 1);;) {
                      if (!(fa > da)) {
                        var J = fa * K, za = J + (F - 1) * K, ga = IE(A, y, 0 < za && 0 > J && 0 === (J % K + K) % K), na = JE(e, f, J, za), na = NE(new U(null, 4, 5, V, [ga, na, LE(F / l, n), 1], null));
                        if (!(na < (M.g ? M.g(r) : M.call(null, r)))) {
                          ga = r;
                          yg.h ? yg.h(ga, na) : yg.call(null, ga, na);
                          ga = s;
                          J = new p(null, 3, [ik, J, Jp, za, it, K], null);
                          yg.h ? yg.h(ga, J) : yg.call(null, ga, J);
                          fa += 1 / y;
                          continue;
                        }
                      }
                      break;
                    }
                    N += 1;
                  }
                }
                F += 1;
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
        var a = Jp.g(wa);
        return a > f ? a : f;
      }()], null);
      return new p(null, 4, [Vp, w, ik, E(w), Jp, Xd(w), vq, $g.h(function(a, b) {
        return function(a) {
          var c = P.j(b, 0, null), d = P.j(b, 1, null);
          return c <= a && a <= d;
        };
      }(wa, w, r, s, a, e, f, b, g, h, l, n), FE.j(ik.g(wa), Jp.g(wa), it.g(wa)))], null);
    }
    return new p(null, 4, [Vp, 0, ik, e, Jp, f, vq, Zd], null);
  }
  a.w = 1;
  a.n = function(a) {
    var d = E(a);
    a = G(a);
    return b(d, a);
  };
  a.k = b;
  return a;
}();
function PE(a, b, c, d) {
  hE.call(this);
  this.$b = c || Ju();
  this.Ic = a;
  this.Qa = [];
  this.wf = b ? b : QE;
  this.yf = !!d;
  this.Ic.className = "goog-tabpane";
  a = [];
  for (b = Ru(this.Ic);b;) {
    a.push(b), b = void 0 != b.nextElementSibling ? b.nextElementSibling : Su(b.nextSibling);
  }
  this.Ua = this.$b.Ib("ul", {className:"goog-tabpane-tabs", tabIndex:"0"});
  this.$a = this.$b.Ib("div", "goog-tabpane-cont");
  this.Ic.appendChild(this.$a);
  b = this.Ic;
  switch(this.wf) {
    case QE:
      b.insertBefore(this.Ua, this.$a);
      b.insertBefore(SE(this), this.$a);
      gE(b, "goog-tabpane-top");
      break;
    case 1:
      b.appendChild(this.Ua);
      b.appendChild(SE(this));
      gE(b, "goog-tabpane-bottom");
      break;
    case 2:
      b.insertBefore(this.Ua, this.$a);
      gE(b, "goog-tabpane-left");
      break;
    case 3:
      b.insertBefore(this.Ua, this.$a);
      gE(b, "goog-tabpane-right");
      break;
    default:
      throw Error("Invalid tab location");;
  }
  this.Ua.tabIndex = 0;
  gA(this.Ua, this.yf ? "mousedown" : "click", this.ff, !1, this);
  gA(this.Ua, "keydown", this.gf, !1, this);
  for (b = 0;c = a[b];b++) {
    c = new TE(c);
    if (c.Rb && c.Rb != this && c.Rb instanceof PE) {
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
    this.bb || (this.bb = c, this.dispatchEvent(new UE("change", this, this.bb)));
    this.$a.appendChild(c.$a);
    AJ(c, c == this.bb);
    c = void 0;
    for (d += 1;c = this.Qa[d];d++) {
      c.Mb = d;
    }
  }
}
oa(PE, hE);
var QE = 0;
function SE(a) {
  var b = Ju(void 0), c = null, d = b.Zb;
  yu && d.createStyleSheet ? (c = d.createStyleSheet(), Av(c)) : (d = Mu(b.Zb, "head")[0], d || (c = Mu(b.Zb, "body")[0], d = b.Ib("head"), c.parentNode.insertBefore(d, c)), c = b.Ib("style"), Av(c), b.appendChild(d, c));
  return a.$b.Ib("div", "goog-tabpane-clear");
}
function BJ(a, b) {
  if (0 <= b && b < a.Qa.length) {
    var c = a.Qa[b];
    !c.isEnabled() || a.bb && c == a.bb || (AJ(a.bb, !1), AJ(c, !0), a.bb = c, a.dispatchEvent(new UE("change", a, a.bb)));
  }
}
PE.prototype.ff = function(a) {
  for (var b = a.target;b != this.Ua;) {
    if ("LI" == b.tagName) {
      var c;
      for (c = 0;b = b.previousSibling;c++) {
      }
      BJ(this, c);
      break;
    }
    b = b.parentNode;
  }
  a.preventDefault();
};
PE.prototype.gf = function(a) {
  if (!(a.altKey || a.metaKey || a.ctrlKey)) {
    switch(a.keyCode) {
      case 37:
        a = this.bb.Mb - 1;
        BJ(this, 0 > a ? this.Qa.length - 1 : a);
        break;
      case 39:
        a = this.bb.Mb + 1;
        BJ(this, a >= this.Qa.length ? 0 : a);
        break;
      case 36:
        BJ(this, 0);
        break;
      case 35:
        BJ(this, this.Qa.length - 1);
    }
  }
};
function TE(a, b, c) {
  var d, e;
  if (ha(a) && !ba(b)) {
    d = a;
  } else {
    if (b) {
      d = b, e = a;
    } else {
      if (a) {
        if (b = Ru(a)) {
          d = Vu(b), b.parentNode.removeChild(b);
        }
        e = a;
      }
    }
  }
  this.$b = c || Ju();
  this.$a = e || this.$b.Ib("div");
  this.Hc = this.$b.Ib("li", null, d);
  this.Mb = this.Rb = null;
  this.Je = !0;
}
TE.prototype.isEnabled = function() {
  return this.Je;
};
function AJ(a, b) {
  a.isEnabled() && (a.$a.style.display = b ? "" : "none", a.Hc.className = b ? "goog-tabpane-tab-selected" : "goog-tabpane-tab");
}
function UE(a, b, c) {
  Nw.call(this, a, b);
  this.page = c;
}
oa(UE, Nw);
function CJ(a, b, c, d) {
  this.domain = a;
  this.Ia = b;
  this.F = c;
  this.v = d;
  this.q = 2229667595;
  this.G = 8192;
  2 < arguments.length ? (this.F = c, this.v = d) : this.v = this.F = null;
}
k = CJ.prototype;
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
  }(this), "#c2.scale._linear{", ", ", "}", c, bg.h(new U(null, 2, 5, V, [new U(null, 2, 5, V, [Uq, this.domain], null), new U(null, 2, 5, V, [st, this.Ia], null)], null), this.v));
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
  return ye(new mj(null, new p(null, 2, [Uq, null, st, null], null), null), b) ? ge.h(Vd(dh.h(li, this), this.F), b) : new CJ(this.domain, this.Ia, this.F, kg(ge.h(this.v, b)), null);
};
k.va = function(a, b, c) {
  return q(X.h ? X.h(Uq, b) : X.call(null, Uq, b)) ? new CJ(c, this.Ia, this.F, this.v, null) : q(X.h ? X.h(st, b) : X.call(null, st, b)) ? new CJ(this.domain, c, this.F, this.v, null) : new CJ(this.domain, this.Ia, this.F, R.j(this.v, b, c), null);
};
k.Q = function() {
  return D(bg.h(new U(null, 2, 5, V, [new U(null, 2, 5, V, [Uq, this.domain], null), new U(null, 2, 5, V, [st, this.Ia], null)], null), this.v));
};
k.J = function(a, b) {
  return new CJ(this.domain, this.Ia, b, this.v, this.A);
};
k.S = function(a, b) {
  return re(b) ? Gb(this, v.h(b, 0), v.h(b, 1)) : Ve.j(pb, this, b);
};
k.call = function(a, b) {
  a = this;
  var c = Yd(a.domain) - E(a.domain), d = Yd(a.Ia) - E(a.Ia);
  return E(a.Ia) + d * ((b - E(a.domain)) / c);
};
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(hb(b)));
};
k.g = function(a) {
  var b = Yd(this.domain) - E(this.domain), c = Yd(this.Ia) - E(this.Ia);
  return E(this.Ia) + c * ((a - E(this.domain)) / b);
};
var DJ = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = L(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = ij.k(L([new p(null, 2, [Uq, new U(null, 2, 5, V, [0, 1], null), st, new U(null, 2, 5, V, [0, 1], null)], null), S.h(vg, a)], 0));
    return new CJ(Uq.g(a), st.g(a), null, ge.k(a, Uq, L([st], 0)));
  }
  a.w = 0;
  a.n = function(a) {
    a = D(a);
    return b(a);
  };
  a.k = b;
  return a;
}();
function EJ(a) {
  return pe(a) && B.h(2, O(a)) ? a : qe(a) ? new U(null, 2, 5, V, [Jq.g(a), Vj.g(a)], null) : null;
}
function FJ(a) {
  var b = EJ(a);
  a = P.j(b, 0, null);
  b = P.j(b, 1, null);
  return "translate(" + u.g(a) + "," + u.g(b) + ")";
}
var GJ = function() {
  function a(a, b) {
    var c = EJ(b), g = P.j(c, 0, null), c = P.j(c, 1, null);
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
}(), HJ = function() {
  function a(a, d, e) {
    var f = null;
    2 < arguments.length && (f = L(Array.prototype.slice.call(arguments, 2), 0));
    return b.call(this, a, d, f);
  }
  function b(a, b, e) {
    var f = we(e) ? S.h(vg, e) : e, g = Q.j(f, vp, 28), h = Q.h(f, Op), l = Q.j(f, ok, 9), n = Q.j(f, $n, 6), r = Q.j(f, mn, u), s = Q.j(f, Mn, yt), w = function() {
      switch(s instanceof W ? s.$ : null) {
        case "bottom":
          return new U(null, 6, 5, V, [Vj, Jq, yn, hr, Lq, kt], null);
        case "top":
          return new U(null, 6, 5, V, [Vj, Jq, yn, hr, Lq, kt], null);
        case "right":
          return new U(null, 6, 5, V, [Jq, Vj, Lq, kt, yn, hr], null);
        case "left":
          return new U(null, 6, 5, V, [Jq, Vj, Lq, kt, yn, hr], null);
        default:
          throw Error("No matching clause: " + u.g(s));;
      }
    }(), A = P.j(w, 0, null), y = P.j(w, 1, null), C = P.j(w, 2, null), F = P.j(w, 3, null), I = P.j(w, 4, null), N = P.j(w, 5, null), K = function() {
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
    return new U(null, 5, 5, V, [mp, new p(null, 1, [Qp, "axis " + u.g(Kf(s))], null), new U(null, 2, 5, V, [Ym, S.h(vg, Wg.h(new U(null, 2, 5, V, [I, N], null), st.g(a)))], null), new U(null, 2, 5, V, [Am, Kv(Cg.j(Ah, b, Fg.g(a)), function(a, b, c, d, e, f, g, h, l, n, r, s, w, y, A) {
      return function(a) {
        var f = P.j(a, 0, null);
        a = P.j(a, 1, null);
        return new U(null, 4, 5, V, [pk, new p(null, 1, [wk, FJ(new oi([b, 0, c, a.g ? a.g(f) : a.call(null, f)]))], null), new U(null, 3, 5, V, [zt, new oi([b, h * w]), A.g ? A.g(f) : A.call(null, f)], null), new U(null, 2, 5, V, [xp, new oi([d, 0, e, h * y])], null)], null);
      };
    }(w, A, y, C, F, I, N, K, e, f, g, h, l, n, r, s))], null), q(h) ? new U(null, 3, 5, V, [Um, new p(null, 1, [wk, "" + u.g(FJ(new oi([A, K * g, y, EE(st.g(a))]))) + " " + u.g(function() {
      switch(s instanceof W ? s.$ : null) {
        case "right":
          return GJ.g(90);
        case "left":
          return GJ.g(-90);
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
    a = G(a);
    return b(d, e, a);
  };
  a.k = b;
  return a;
}();
function IJ(a) {
  return S.h(Ze, a) / O(a);
}
function JJ(a, b) {
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
                  var d = x(c), n = O(d), r = Uf(n);
                  return function() {
                    for (var c = 0;;) {
                      if (c < n) {
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
                }()], null), f(G(c)));
              }
              return null;
            }
          };
        }(c), null, null);
      };
    }(c)(c);
  }());
}
function KJ(a, b, c) {
  a = jh.m(a, new U(null, 1, 5, V, [cp], null), de, JJ(IJ, b));
  b = O(cp.g(a));
  b > c && ng(b) ? (c = we(a) ? S.h(vg, a) : a, a = Q.h(c, cp), b = 2 * Q.h(c, ot), c = R.k(c, ot, b, L([cp, eh.h(rg.h(JJ, IJ), fh.h(2, a))], 0))) : c = a;
  return c;
}
function LJ(a) {
  var b = function() {
    var a = new p(null, 3, [ot, 1, cp, Zd, $q, 200], null);
    return xg.g ? xg.g(a) : xg.call(null, a);
  }(), c = LC.g(1);
  lC(function(b, c) {
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
                      AC(c);
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
              var e = b[7], d = Ag.m(c, KJ, e, 200), e = null == e ? null : nb(e);
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
              var e = b[8], d = de.h(e, b[2]), e = O(d), f = M.g ? M.g(c) : M.call(null, c), f = ot.g(f);
              b[7] = d;
              b[1] = q(e < f) ? 5 : 6;
              return Z;
            }
            return 3 === d ? (d = b[2], zC(b, d)) : 2 === d ? yC(b, 4, a) : 1 === d ? (e = Zd, b[8] = e, b[2] = null, b[1] = 2, Z) : null;
          };
        }(b, c), b, c);
      }(), g = function() {
        var a = f.p ? f.p() : f.call(null);
        a[6] = b;
        return a;
      }();
      return xC(g);
    };
  }(c, b));
  return b;
}
function MJ(a, b) {
  var c = new U(null, 3, 5, V, [Lp, pp, Pq], null), d = new p(null, 4, [yt, 50, uq, 30, Gm, 50, Rm, 20], null), e = function() {
    var a = new Jv(null, !0, function(a) {
      return function() {
        var d = we(b) ? S.h(vg, b) : b, e = Q.h(d, ot), f = Q.h(d, $q), g = Q.h(d, cp), w = e * f, A = Vo.g(ke(g)), y = .1 * A, C = DJ.k(L([Uq, new U(null, 2, 5, V, [0, w], null), st, new U(null, 2, 5, V, [0, 399], null)], 0)), F = vq.g(OE.k(Uq.g(C), L([mq, 400], 0))), I = DJ.k(L([Uq, new U(null, 2, 5, V, [0, y], null), st, new U(null, 2, 5, V, [179, 0], null)], 0)), N = DJ.k(L([Uq, new U(null, 2, 5, V, [0, y], null), st, new U(null, 2, 5, V, [0, 179], null)], 0)), K = vq.g(OE.k(Uq.g(I), L([mq, 450], 
        0)));
        return 0 < A ? new U(null, 3, 5, V, [dp, new U(null, 3, 5, V, [ap, new p(null, 1, [Sn, "text/css"], null), S.O(u, "g.timestep rect { stroke-width: 0px; }", ".plot-space line { stroke: black; }", ".plot-space text { font-size: 80%; }", function() {
          return function(a, b, c, d, e, f, g, h, l, n, r, s, w, y, A) {
            return function sa(C) {
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
                        }() ? Xf(d.R(), sa(z(a))) : Xf(d.R(), null);
                      }
                      var e = E(a);
                      return Td("." + u.g(Kf(e)) + " { fill: " + u.g(function() {
                        var a = e;
                        return $.g ? $.g(a) : $.call(null, a);
                      }()) + "}", sa(G(a)));
                    }
                    return null;
                  }
                };
              }(a, b, c, d, e, f, g, h, l, n, r, s, w, y, A), null, null);
            };
          }(b, d, e, f, g, w, A, y, C, C, F, I, N, K, a)(c);
        }())], null), new U(null, 3, 5, V, [iq, new p(null, 1, [ap, new p(null, 4, [yq, "block", Ct, "auto", zn, 400 + yt.g(a) + uq.g(a), tt, 180 + Gm.g(a) + Rm.g(a)], null)], null), new U(null, 5, 5, V, [Cp, new p(null, 1, [wk, FJ(new U(null, 2, 5, V, [yt.g(a), Rm.g(a)], null))], null), HJ.k(I, K, L([Mn, yt, ok, 28, Op, "n. columns", vp, 35], 0)), new U(null, 3, 5, V, [mp, new p(null, 1, [wk, FJ(new U(null, 2, 5, V, [0, 180], null))], null), HJ.k(C, F, L([Mn, Gm, ok, 18, Op, "timestep", vp, 35], 
        0))], null), new U(null, 2, 5, V, [mp, Kv.k(sg(Ah, g), function(a, b, d, e, f, g, h, l, n, r, s, w, y, A, C) {
          return function(F) {
            var I = P.j(F, 0, null), K = P.j(F, 1, null), N = Cg.h(K, c), cb = Bj.h(Ze, N);
            return dh.h(new U(null, 1, 5, V, [Yn], null), function() {
              return function(a, b, c, d, e, f, g, h, l, n, r, s, J, w, y, A, C, F, I, K) {
                return function gf(ga) {
                  return new Mf(null, function(a, b, c, d, e, f, g, h, l, n, r, s, J, w, y, A, C, F) {
                    return function() {
                      for (;;) {
                        var a = D(ga);
                        if (a) {
                          if (T(a)) {
                            var b = x(a), c = O(b), e = Uf(c);
                            return function() {
                              for (var a = 0;;) {
                                if (a < c) {
                                  var f = v.h(b, a), g = P.j(f, 0, null), l = P.j(f, 1, null), n = P.j(f, 2, null);
                                  Yf(e, new U(null, 2, 5, V, [ht, new p(null, 5, [Qp, g, Jq, function() {
                                    var a = d * h;
                                    return w.g ? w.g(a) : w.call(null, a);
                                  }(), Vj, function() {
                                    var a = n;
                                    return C.g ? C.g(a) : C.call(null, a);
                                  }(), zn, y.g ? y.g(h) : y.call(null, h), tt, function() {
                                    var a = l;
                                    return F.g ? F.g(a) : F.call(null, a);
                                  }()], null)], null));
                                  a += 1;
                                } else {
                                  return!0;
                                }
                              }
                            }() ? Xf(e.R(), gf(z(a))) : Xf(e.R(), null);
                          }
                          var f = E(a), g = P.j(f, 0, null), l = P.j(f, 1, null), n = P.j(f, 2, null);
                          return Td(new U(null, 2, 5, V, [ht, new p(null, 5, [Qp, g, Jq, function() {
                            var a = d * h;
                            return w.g ? w.g(a) : w.call(null, a);
                          }(), Vj, function() {
                            var a = n;
                            return C.g ? C.g(a) : C.call(null, a);
                          }(), zn, y.g ? y.g(h) : y.call(null, h), tt, function() {
                            var a = l;
                            return F.g ? F.g(a) : F.call(null, a);
                          }()], null)], null), gf(G(a)));
                        }
                        return null;
                      }
                    };
                  }(a, b, c, d, e, f, g, h, l, n, r, s, J, w, y, A, C, F, I, K), null, null);
                };
              }(N, cb, F, I, K, a, b, d, e, f, g, h, l, n, r, s, w, y, A, C)(Cg.m(Ah, c, N, cb));
            }());
          };
        }(b, d, e, f, g, w, A, y, C, C, F, I, N, K, a), L([kp, qg.h(vn, Xd)], 0))], null)], null)], null)], null) : null;
      };
    }(d), Qj.g("computed-observable"), li, li);
    M.g ? M.g(a) : M.call(null, a);
    return a;
  }(), f = Bv(a);
  yv(f, M.g ? M.g(e) : M.call(null, e));
  Oj(e, bo, function(a, b) {
    return function() {
      return yv(b, M.g ? M.g(a) : M.call(null, a));
    };
  }(e, f, d));
  return e;
}
;function NJ(a) {
  return S.j(u, "comportex-", Xg("_", Cg.h(function(a) {
    a = a.replace(new RegExp("?".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), "g"), "_QMARK_");
    return a;
  }, Cg.h(function(a) {
    return "number" === typeof a ? "" + u.g(a) : Kf(a);
  }, a))));
}
function OJ(a, b, c) {
  return new U(null, 3, 5, V, [Op, new U(null, 2, 5, V, [Vq, new p(null, 3, [Pp, NJ(b), Sn, "checkbox", aq, q(gh.h(a, b)) ? "checked" : null], null)], null), c], null);
}
function PJ(a) {
  var b = new U(null, 2, 5, V, [Pm, Gp], null), c = new U(null, 3, 5, V, [Zo, mo, nt], null);
  return new U(null, 3, 5, V, [Op, "Synapses from ", new U(null, 3, 5, V, [ut, new p(null, 1, [Pp, NJ(b)], null), function() {
    return function e(c) {
      return new Mf(null, function() {
        for (;;) {
          var g = D(c);
          if (g) {
            if (T(g)) {
              var h = x(g), l = O(h), n = Uf(l);
              a: {
                for (var r = 0;;) {
                  if (r < l) {
                    var s = v.h(h, r), s = new U(null, 3, 5, V, [fp, new p(null, 2, [on, Kf(s), xk, B.h(gh.h(a, b), s) ? "selected" : null], null), Kf(s)], null);
                    n.add(s);
                    r += 1;
                  } else {
                    h = !0;
                    break a;
                  }
                }
                h = void 0;
              }
              return h ? Xf(n.R(), e(z(g))) : Xf(n.R(), null);
            }
            n = E(g);
            return Td(new U(null, 3, 5, V, [fp, new p(null, 2, [on, Kf(n), xk, B.h(gh.h(a, b), n) ? "selected" : null], null), Kf(n)], null), e(G(g)));
          }
          return null;
        }
      }, null, null);
    }(c);
  }()], null)], null);
}
function QJ(a, b) {
  var c = P.j(b, 0, null), d = P.j(b, 1, null);
  return new U(null, 3, 5, V, [Op, new U(null, 2, 5, V, [lq, Kf(c)], null), new U(null, 2, 5, V, [Vq, new p(null, 2, [Pp, NJ(new U(null, 2, 5, V, [a, c], null)), on, "" + u.g(d)], null)], null)], null);
}
function RJ() {
  var a = SJ, b = TJ, c = UJ, d = fE, e = VJ, f = function() {
    var d = new Jv(null, !0, function() {
      var d = V, e = V, f = new U(null, 2, 5, V, [Jn, "Simulation"], null), g = new U(null, 3, 5, V, [Op, "Timestep:", new U(null, 2, 5, V, [vk, vn.g($o.g(M.g ? M.g(a) : M.call(null, a)))], null)], null), h = V, A = new p(null, 1, [Qp, "detail"], null), y;
      if (q(M.g ? M.g(b) : M.call(null, b))) {
        y = M.g ? M.g(a) : M.call(null, a);
        if (q(qn.g(gp.g(y)))) {
          var C = gp.g(y), F = (new Date).getTime() - qn.g(C);
          y = (vn.g($o.g(y)) - vn.g(C)) / F * 1E3;
        } else {
          y = null;
        }
        y = SC("%.1f steps/sec.", y);
      } else {
        y = null;
      }
      return new U(null, 3, 5, d, [sq, new U(null, 11, 5, e, [ak, f, g, new U(null, 3, 5, h, [mk, A, y], null), new U(null, 1, 5, V, [Gq], null), new U(null, 3, 5, V, [Jm, new p(null, 1, [ap, new p(null, 1, [yq, q(M.g ? M.g(b) : M.call(null, b)) ? "none" : null], null)], null), "Start"], null), new U(null, 3, 5, V, [nq, new p(null, 1, [ap, new p(null, 1, [yq, q(M.g ? M.g(b) : M.call(null, b)) ? null : "none"], null)], null), "Stop"], null), new U(null, 2, 5, V, [Dn, "Step"], null), new U(null, 5, 
      5, V, [Op, "Step every:", new U(null, 2, 5, V, [fo, "" + u.g(io.g(M.g ? M.g(c) : M.call(null, c))) + " ms"], null), new U(null, 2, 5, V, [Bt, new U(null, 3, 5, V, [Bn, new p(null, 1, [mt, "#"], null), "slower"], null)], null), new U(null, 2, 5, V, [Bt, new U(null, 3, 5, V, [uk, new p(null, 1, [mt, "#"], null), "faster"], null)], null)], null), new U(null, 2, 5, V, [Qm, "Reset"], null), new U(null, 2, 5, V, [pq, new p(null, 1, [Qp, "detail"], null)], null)], null), new U(null, 6, 5, V, [rn, 
      new U(null, 2, 5, V, [Jn, "Animation"], null), new U(null, 3, 5, V, [jo, new p(null, 1, [ap, new p(null, 1, [yq, q(kn.g(M.g ? M.g(c) : M.call(null, c))) ? "none" : null], null)], null), "Start"], null), new U(null, 3, 5, V, [np, new p(null, 1, [ap, new p(null, 1, [yq, q(kn.g(M.g ? M.g(c) : M.call(null, c))) ? null : "none"], null)], null), "Stop"], null), new U(null, 2, 5, V, [Zm, "Draw now"], null), new U(null, 5, 5, V, [Op, "Draw every:", new U(null, 2, 5, V, [Po, "" + u.g(sp.g(M.g ? M.g(c) : 
      M.call(null, c))) + " steps"], null), new U(null, 2, 5, V, [Bt, new U(null, 3, 5, V, [en, new p(null, 1, [mt, "#"], null), "slower"], null)], null), new U(null, 2, 5, V, [Bt, new U(null, 3, 5, V, [Ip, new p(null, 1, [mt, "#"], null), "faster"], null)], null)], null)], null)], null);
    }, Qj.g("computed-observable"), li, li);
    M.g ? M.g(d) : M.call(null, d);
    return d;
  }(), g = Bv("#comportex-controls");
  yv(g, M.g ? M.g(f) : M.call(null, f));
  Oj(f, bo, function(a, b) {
    return function() {
      return yv(b, M.g ? M.g(a) : M.call(null, a));
    };
  }(f, g));
  rA("#sim-start", qp, function() {
    return yg.h ? yg.h(b, !0) : yg.call(null, b, !0);
  });
  rA("#sim-stop", qp, function() {
    return yg.h ? yg.h(b, !1) : yg.call(null, b, !1);
  });
  rA("#sim-step", qp, function() {
    return d.p ? d.p() : d.call(null);
  });
  rA("#sim-faster", qp, function() {
    return Ag.m(c, jh, new U(null, 1, 5, V, [io], null), function(a) {
      a -= 100;
      return 0 < a ? a : 0;
    });
  });
  rA("#sim-slower", qp, function() {
    return Ag.m(c, jh, new U(null, 1, 5, V, [io], null), function(a) {
      return a + 100;
    });
  });
  rA("#sim-reset", qp, function() {
    var b = Bv("#sim-reset-status");
    Ag.h(a, vB);
    return Dv.h(b, "reset complete.");
  });
  rA("#anim-start", qp, function() {
    return Ag.m(c, R, kn, !0);
  });
  rA("#anim-stop", qp, function() {
    return Ag.m(c, R, kn, !1);
  });
  rA("#anim-step", qp, function() {
    return e.p ? e.p() : e.call(null);
  });
  rA("#anim-faster", qp, function() {
    return Ag.m(c, jh, new U(null, 1, 5, V, [sp], null), function(a) {
      a -= 1;
      return 1 < a ? a : 1;
    });
  });
  rA("#anim-slower", qp, function() {
    return Ag.m(c, jh, new U(null, 1, 5, V, [sp], null), function(a) {
      return a + 1;
    });
  });
}
function WJ() {
  var a = function() {
    var a = new Jv(null, !0, function() {
      var a = V, b;
      b = M.g ? M.g(fD) : M.call(null, fD);
      b = new U(null, 6, 5, V, [Nn, new U(null, 2, 5, V, [Jn, "Visualisation"], null), new U(null, 5, 5, V, [Zj, new U(null, 2, 5, V, [Jn, "Input"], null), OJ(b, new U(null, 2, 5, V, [Vq, Lp], null), "Active bits"), new U(null, 1, 5, V, [Gq], null), OJ(b, new U(null, 2, 5, V, [Vq, Pq], null), "Predicted bits")], null), new U(null, 9, 5, V, [Zj, new U(null, 2, 5, V, [Jn, "Columns"], null), OJ(b, new U(null, 2, 5, V, [Y, Np], null), "Overlap scores"), new U(null, 1, 5, V, [Gq], null), OJ(b, new U(null, 
      2, 5, V, [Y, Lp], null), "Active columns"), new U(null, 1, 5, V, [Gq], null), OJ(b, new U(null, 2, 5, V, [Y, On], null), "Predictive columns"), new U(null, 1, 5, V, [Gq], null), OJ(b, new U(null, 2, 5, V, [Y, Bm], null), "TP columns")], null), new U(null, 7, 5, V, [Zj, new U(null, 2, 5, V, [Jn, "Feed-forward synapses"], null), OJ(b, new U(null, 2, 5, V, [dk, Lp], null), "Active ff-synapses"), new U(null, 1, 5, V, [Gq], null), OJ(b, new U(null, 2, 5, V, [dk, Uj], null), "Inactive ff-synapses"), 
      new U(null, 1, 5, V, [Gq], null), OJ(b, new U(null, 2, 5, V, [dk, et], null), "Permanences")], null), new U(null, 11, 5, V, [Zj, new U(null, 2, 5, V, [Jn, "Lateral dendrite segments"], null), PJ(b), new U(null, 1, 5, V, [Gq], null), OJ(b, new U(null, 2, 5, V, [Pm, Lp], null), "Active synapses"), new U(null, 1, 5, V, [Gq], null), OJ(b, new U(null, 2, 5, V, [Pm, Uj], null), "Inactive synapses"), new U(null, 1, 5, V, [Gq], null), OJ(b, new U(null, 2, 5, V, [Pm, Lm], null), "Disconnected synapses"), 
      new U(null, 1, 5, V, [Gq], null), OJ(b, new U(null, 2, 5, V, [Pm, et], null), "Permanences")], null)], null);
      return new U(null, 2, 5, a, [Ap, b], null);
    }, Qj.g("computed-observable"), li, li);
    M.g ? M.g(a) : M.call(null, a);
    return a;
  }(), b = Bv("#comportex-drawing");
  yv(b, M.g ? M.g(a) : M.call(null, a));
  Oj(a, bo, function(a, b) {
    return function() {
      return yv(b, M.g ? M.g(a) : M.call(null, a));
    };
  }(a, b));
  for (var a = D(M.g ? M.g(fD) : M.call(null, fD)), b = null, c = 0, d = 0;;) {
    if (d < c) {
      for (var e = b.D(null, d), f = P.j(e, 0, null), g = P.j(e, 1, null), h = D(g), l = null, n = 0, r = 0;;) {
        if (r < n) {
          var s = l.D(null, r), w = P.j(s, 0, null), A = P.j(s, 1, null), y = NJ(new U(null, 2, 5, V, [f, w], null)), C = Bv("#" + u.g(y));
          q(C) && rA(C, cr, function(a, b, c, d, e, f, g, h, l, n, r, s, w, y, A) {
            return function() {
              var a;
              a = Ev.g(n);
              a = q(a) ? Lf.g(a) : null;
              return Ag.m(fD, ih, new U(null, 2, 5, V, [A, s], null), a);
            };
          }(h, l, n, r, a, b, c, d, y, C, s, w, A, e, f, g));
          r += 1;
        } else {
          if (w = D(h)) {
            s = w;
            if (T(s)) {
              h = x(s), r = z(s), l = h, n = O(h), h = r;
            } else {
              var A = E(s), y = P.j(A, 0, null), C = P.j(A, 1, null), F = NJ(new U(null, 2, 5, V, [f, y], null)), I = Bv("#" + u.g(F));
              q(I) && rA(I, cr, function(a, b, c, d, e, f, g, h, l, n, r, s, w, y, A, C, F) {
                return function() {
                  var a;
                  a = Ev.g(n);
                  a = q(a) ? Lf.g(a) : null;
                  return Ag.m(fD, ih, new U(null, 2, 5, V, [F, s], null), a);
                };
              }(h, l, n, r, a, b, c, d, F, I, A, y, C, s, w, e, f, g));
              h = H(s);
              l = null;
              n = 0;
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
          n = D(g);
          r = null;
          for (w = s = 0;;) {
            if (w < s) {
              A = r.D(null, w), y = P.j(A, 0, null), C = P.j(A, 1, null), F = NJ(new U(null, 2, 5, V, [f, y], null)), I = Bv("#" + u.g(F)), q(I) && rA(I, cr, function(a, b, c, d, e, f, g, h, l, n, r, s, w, y, A) {
                return function() {
                  var a;
                  a = Ev.g(n);
                  a = q(a) ? Lf.g(a) : null;
                  return Ag.m(fD, ih, new U(null, 2, 5, V, [A, s], null), a);
                };
              }(n, r, s, w, a, b, c, d, F, I, A, y, C, l, f, g, e, h)), w += 1;
            } else {
              if (y = D(n)) {
                A = y;
                if (T(A)) {
                  n = x(A), w = z(A), r = n, s = O(n), n = w;
                } else {
                  var C = E(A), F = P.j(C, 0, null), I = P.j(C, 1, null), N = NJ(new U(null, 2, 5, V, [f, F], null)), K = Bv("#" + u.g(N));
                  q(K) && rA(K, cr, function(a, b, c, d, e, f, g, h, l, n, r, s, w, y, A, C, F) {
                    return function() {
                      var a;
                      a = Ev.g(n);
                      a = q(a) ? Lf.g(a) : null;
                      return Ag.m(fD, ih, new U(null, 2, 5, V, [F, s], null), a);
                    };
                  }(n, r, s, w, a, b, c, d, N, K, C, F, I, A, y, l, f, g, e, h));
                  n = H(A);
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
function XJ() {
  var a = SJ, b = ZD, c = function() {
    var c = new Jv(null, !0, function() {
      var c = $o.g(M.g ? M.g(b) : M.call(null, b));
      return new U(null, 2, 5, V, [tq, function() {
        var b = KB(M.g ? M.g(a) : M.call(null, a));
        return function(a, b) {
          return function F(c) {
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
                            var l = v.h(e, h), n = P.h(a, l), n = lp.g(n), l = new U(null, 3, 5, V, [dp, new p(null, 1, [ap, new p(null, 1, [yq, jg.h(l, b) ? "none" : null], null)], null), new U(null, 4, 5, V, [Nq, new p(null, 1, [Pp, "region-spec-form-" + u.g(l)], null), new U(null, 4, 5, V, [jt, "Region " + u.g(l), new U(null, 1, 5, V, [Gq], null), new U(null, 2, 5, V, [eo, "(click on a region to select it)"], null)], null), new U(null, 4, 5, V, [gk, new U(null, 2, 5, V, [Jn, "Parameters"], null), 
                            Cg.h(rg.h(QJ, l), Te.g(n)), new U(null, 3, 5, V, [Gn, new U(null, 2, 5, V, [Vq, new p(null, 2, [Sn, "submit", on, "Set!"], null)], null), " (will be set immediately, but then use Reset above for any parameters that apply only in initialisation)"], null)], null)], null)], null);
                            g.add(l);
                            h += 1;
                          } else {
                            e = !0;
                            break a;
                          }
                        }
                        e = void 0;
                      }
                      return e ? Xf(g.R(), F(z(d))) : Xf(g.R(), null);
                    }
                    g = E(d);
                    e = P.h(a, g);
                    e = lp.g(e);
                    return Td(new U(null, 3, 5, V, [dp, new p(null, 1, [ap, new p(null, 1, [yq, jg.h(g, b) ? "none" : null], null)], null), new U(null, 4, 5, V, [Nq, new p(null, 1, [Pp, "region-spec-form-" + u.g(g)], null), new U(null, 4, 5, V, [jt, "Region " + u.g(g), new U(null, 1, 5, V, [Gq], null), new U(null, 2, 5, V, [eo, "(click on a region to select it)"], null)], null), new U(null, 4, 5, V, [gk, new U(null, 2, 5, V, [Jn, "Parameters"], null), Cg.h(rg.h(QJ, g), Te.g(e)), new U(null, 3, 5, 
                    V, [Gn, new U(null, 2, 5, V, [Vq, new p(null, 2, [Sn, "submit", on, "Set!"], null)], null), " (will be set immediately, but then use Reset above for any parameters that apply only in initialisation)"], null)], null)], null)], null), F(G(d)));
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
  }(), d = Bv("#comportex-parameters");
  yv(d, M.g ? M.g(c) : M.call(null, c));
  Oj(c, bo, function(a, b) {
    return function() {
      return yv(b, M.g ? M.g(a) : M.call(null, a));
    };
  }(c, d));
  for (var c = D(zj.g(O(KB(M.g ? M.g(a) : M.call(null, a))))), d = null, e = 0, f = 0;;) {
    if (f < e) {
      var g = d.D(null, f), h = Bv("#region-spec-form-" + u.g(g));
      rA(h, Hn, function(b, c, d, e, f, g) {
        return function(h) {
          var l = P.h(KB(M.g ? M.g(a) : M.call(null, a)), g), n = Ve.j(function(a, b, c, d, e, f, g) {
            return function(a, b) {
              var c = NJ(new U(null, 2, 5, V, [g, b], null)), c = Bv("#" + u.g(c)), c = Aw(Ev.g(c));
              return R.j(a, b, c);
            };
          }(b, c, d, e, l, f, g), li, gj(lp.g(l)));
          Ag.m(a, NB, Xq.g(l), function(a, b, c, d, e, f) {
            return function(a) {
              return R.j(a, lp, f);
            };
          }(b, c, d, e, l, n, f, g));
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
          var g = E(h), n = Bv("#region-spec-form-" + u.g(g));
          rA(n, Hn, function(b, c, d, e, f, g, h, l) {
            return function(n) {
              var K = P.h(KB(M.g ? M.g(a) : M.call(null, a)), g), da = Ve.j(function(a, b, c, d, e, f, g) {
                return function(a, b) {
                  var c = NJ(new U(null, 2, 5, V, [g, b], null)), c = Bv("#" + u.g(c)), c = Aw(Ev.g(c));
                  return R.j(a, b, c);
                };
              }(b, c, d, e, K, f, g, h, l), li, gj(lp.g(K)));
              Ag.m(a, NB, Xq.g(K), function(a, b, c, d, e, f) {
                return function(a) {
                  return R.j(a, lp, f);
                };
              }(b, c, d, e, K, da, f, g, h, l));
              n.preventDefault();
              return!1;
            };
          }(c, d, e, f, n, g, h, l));
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
;function eE() {
  var a = YJ, b = LC.p();
  RC.h(a, b);
  return b;
}
var SJ = xg.g ? xg.g(null) : xg.call(null, null), ZD, ZJ = new p(null, 3, [$o, 0, ln, 0, Xm, null], null);
ZD = xg.g ? xg.g(ZJ) : xg.call(null, ZJ);
var $J = LC.p(), YJ = function aK(b) {
  var c = xg.g ? xg.g(li) : xg.call(null, li), d = function() {
    "undefined" === typeof SB && (SB = function(b, c, d, e) {
      this.$c = b;
      this.ch = c;
      this.bf = d;
      this.Te = e;
      this.G = 0;
      this.q = 393216;
    }, SB.Ca = !0, SB.Ba = "cljs.core.async/t28466", SB.Ga = function() {
      return function(b, c) {
        return Bc(c, "cljs.core.async/t28466");
      };
    }(c), SB.prototype.Hd = function() {
      return function(b, c, d) {
        Ag.m(this.$c, R, c, d);
        return null;
      };
    }(c), SB.prototype.Id = function() {
      return function(b, c) {
        Ag.j(this.$c, ge, c);
        return null;
      };
    }(c), SB.prototype.I = function() {
      return function() {
        return this.Te;
      };
    }(c), SB.prototype.J = function() {
      return function(b, c) {
        return new SB(this.$c, this.ch, this.bf, c);
      };
    }(c));
    return new SB(c, b, aK, null);
  }(), e = LC.g(1), f = xg.g ? xg.g(null) : xg.call(null, null), g = function(b, c, d, e) {
    return function() {
      return 0 === Ag.h(e, af) ? NC.h(d, !0) : null;
    };
  }(c, d, e, f), h = LC.g(1);
  lC(function(c, d, e, f, g, h) {
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
                      AC(d);
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
              var n = c, r = n;
              r[2] = c[2];
              r[1] = 3;
              return Z;
            }
            if (20 === l) {
              var s = c[7], w = E(s), y = P.j(w, 0, null), A = P.j(w, 1, null);
              c[8] = y;
              n = c;
              n[1] = q(A) ? 22 : 23;
              return Z;
            }
            if (27 === l) {
              var C = c[9], F = c[10], lb = c[11], Na = c[12], tb = v.h(Na, F), Oa = NC.j(tb, C, h);
              c[11] = tb;
              n = c;
              n[1] = q(Oa) ? 30 : 31;
              return Z;
            }
            if (1 === l) {
              var sa = n = c;
              sa[2] = null;
              sa[1] = 2;
              return Z;
            }
            if (24 === l) {
              var s = c[7], Ib = c[2], Jb = H(s), cb = null, ub = 0, ea = 0;
              c[13] = cb;
              c[14] = ub;
              c[15] = Ib;
              c[16] = Jb;
              c[17] = ea;
              var bc = n = c;
              bc[2] = null;
              bc[1] = 8;
              return Z;
            }
            if (39 === l) {
              var $c = n = c;
              $c[2] = null;
              $c[1] = 41;
              return Z;
            }
            if (4 === l) {
              var C = c[9], cc = c[2], Fc = null == cc;
              c[9] = cc;
              n = c;
              n[1] = q(Fc) ? 5 : 6;
              return Z;
            }
            if (15 === l) {
              var cb = c[13], ub = c[14], Jb = c[16], ea = c[17], jc = Jb, Kb = cb, Sb = ub, Rc = ea + 1;
              c[18] = c[2];
              c[13] = Kb;
              c[14] = Sb;
              c[16] = jc;
              c[17] = Rc;
              var Gg = n = c;
              Gg[2] = null;
              Gg[1] = 8;
              return Z;
            }
            if (21 === l) {
              var Hg = c[2], fd = n = c;
              fd[2] = Hg;
              fd[1] = 18;
              return Z;
            }
            if (31 === l) {
              var lb = c[11], ef = Ag.h(g, af), ff = e.Id(null, lb);
              c[19] = ef;
              var Ig = n = c;
              Ig[2] = ff;
              Ig[1] = 32;
              return Z;
            }
            if (32 === l) {
              var Sc = c[20], Eb = c[21], F = c[10], Na = c[12], vc = c[2], Tb = Na, Tc = Eb, gf = F + 1;
              c[20] = Sc;
              c[21] = Tc;
              c[10] = gf;
              c[22] = vc;
              c[12] = Tb;
              var hf = n = c;
              hf[2] = null;
              hf[1] = 25;
              return Z;
            }
            if (40 === l) {
              var Gc = c[23], $d = Ag.h(g, af), Ih = e.Id(null, Gc);
              c[24] = $d;
              var jf = n = c;
              jf[2] = Ih;
              jf[1] = 41;
              return Z;
            }
            if (33 === l) {
              var Uc = c[25], Nb = T(Uc), n = c;
              n[1] = Nb ? 36 : 37;
              return Z;
            }
            if (13 === l) {
              var kc = c[26], gd = VB(kc), Hc = n = c;
              Hc[2] = gd;
              Hc[1] = 15;
              return Z;
            }
            if (22 === l) {
              var y = c[8], wc = VB(y), va = n = c;
              va[2] = wc;
              va[1] = 24;
              return Z;
            }
            if (36 === l) {
              var Uc = c[25], Lb = x(Uc), hd = z(Uc), Ae = O(Lb), Sc = hd, Na = Lb, Eb = Ae, F = 0;
              c[20] = Sc;
              c[21] = Eb;
              c[10] = F;
              c[12] = Na;
              var xc = n = c;
              xc[2] = null;
              xc[1] = 25;
              return Z;
            }
            if (41 === l) {
              var Uc = c[25], id = c[2], Sc = H(Uc), Na = null, F = Eb = 0;
              c[20] = Sc;
              c[21] = Eb;
              c[10] = F;
              c[27] = id;
              c[12] = Na;
              var Zb = n = c;
              Zb[2] = null;
              Zb[1] = 25;
              return Z;
            }
            if (43 === l) {
              var Ub = n = c;
              Ub[2] = null;
              Ub[1] = 44;
              return Z;
            }
            if (29 === l) {
              var jd = c[2], ae = n = c;
              ae[2] = jd;
              ae[1] = 26;
              return Z;
            }
            if (44 === l) {
              c[28] = c[2];
              var Ic = n = c;
              Ic[2] = null;
              Ic[1] = 2;
              return Z;
            }
            if (6 === l) {
              var Xb = c[29], yc = M.g ? M.g(d) : M.call(null, d), Be = gj(yc), Pf = O(Be), Jh = yg.h ? yg.h(g, Pf) : yg.call(null, g, Pf), Sc = D(Be), Na = null, F = Eb = 0;
              c[20] = Sc;
              c[21] = Eb;
              c[10] = F;
              c[29] = Be;
              c[12] = Na;
              c[30] = Jh;
              var be = n = c;
              be[2] = null;
              be[1] = 25;
              return Z;
            }
            if (28 === l) {
              var Sc = c[20], Uc = c[25], $b = D(Sc);
              c[25] = $b;
              n = c;
              n[1] = $b ? 33 : 34;
              return Z;
            }
            if (25 === l) {
              var Eb = c[21], F = c[10], Vb = F < Eb, n = c;
              n[1] = q(Vb) ? 27 : 28;
              return Z;
            }
            if (34 === l) {
              var Dd = n = c;
              Dd[2] = null;
              Dd[1] = 35;
              return Z;
            }
            if (17 === l) {
              var Ce = n = c;
              Ce[2] = null;
              Ce[1] = 18;
              return Z;
            }
            if (3 === l) {
              var De = c[2], n = c;
              return zC(n, De);
            }
            if (12 === l) {
              var kd = c[2], Ee = n = c;
              Ee[2] = kd;
              Ee[1] = 9;
              return Z;
            }
            if (2 === l) {
              return n = c, yC(n, 4, b);
            }
            if (23 === l) {
              var Vc = n = c;
              Vc[2] = null;
              Vc[1] = 24;
              return Z;
            }
            if (35 === l) {
              var Ka = c[2], Fe = n = c;
              Fe[2] = Ka;
              Fe[1] = 29;
              return Z;
            }
            if (19 === l) {
              var s = c[7], qb = x(s), ac = z(s), Qf = O(qb), Jb = ac, cb = qb, ub = Qf, ea = 0;
              c[13] = cb;
              c[14] = ub;
              c[16] = Jb;
              c[17] = ea;
              var Jg = n = c;
              Jg[2] = null;
              Jg[1] = 8;
              return Z;
            }
            if (11 === l) {
              var Jb = c[16], s = c[7], Rf = D(Jb);
              c[7] = Rf;
              n = c;
              n[1] = Rf ? 16 : 17;
              return Z;
            }
            if (9 === l) {
              var kf = c[2], lf = n = c;
              lf[2] = kf;
              lf[1] = 7;
              return Z;
            }
            if (5 === l) {
              var ce = M.g ? M.g(d) : M.call(null, d), Jb = D(ce), cb = null, ea = ub = 0;
              c[13] = cb;
              c[14] = ub;
              c[16] = Jb;
              c[17] = ea;
              var ld = n = c;
              ld[2] = null;
              ld[1] = 8;
              return Z;
            }
            if (14 === l) {
              var md = n = c;
              md[2] = null;
              md[1] = 15;
              return Z;
            }
            if (45 === l) {
              var Wc = c[2], Ob = n = c;
              Ob[2] = Wc;
              Ob[1] = 44;
              return Z;
            }
            if (26 === l) {
              var Xb = c[29], mf = c[2], nd = D(Xb);
              c[31] = mf;
              n = c;
              n[1] = nd ? 42 : 43;
              return Z;
            }
            if (16 === l) {
              var s = c[7], Kg = T(s), n = c;
              n[1] = Kg ? 19 : 20;
              return Z;
            }
            if (38 === l) {
              var Lg = c[2], nf = n = c;
              nf[2] = Lg;
              nf[1] = 35;
              return Z;
            }
            if (30 === l) {
              var Ge = n = c;
              Ge[2] = null;
              Ge[1] = 32;
              return Z;
            }
            if (10 === l) {
              var cb = c[13], ea = c[17], Ed = v.h(cb, ea), kc = P.j(Ed, 0, null), Xc = P.j(Ed, 1, null);
              c[26] = kc;
              n = c;
              n[1] = q(Xc) ? 13 : 14;
              return Z;
            }
            if (18 === l) {
              var od = c[2], Fd = n = c;
              Fd[2] = od;
              Fd[1] = 12;
              return Z;
            }
            if (42 === l) {
              return n = c, yC(n, 45, f);
            }
            if (37 === l) {
              var C = c[9], Gc = c[23], Uc = c[25], He = E(Uc), Sf = NC.j(He, C, h);
              c[23] = He;
              n = c;
              n[1] = q(Sf) ? 39 : 40;
              return Z;
            }
            if (8 === l) {
              var ub = c[14], ea = c[17], Yc = ea < ub, n = c;
              n[1] = q(Yc) ? 10 : 11;
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
      return xC(C);
    };
  }(h, c, d, e, f, g));
  return d;
}($J), TJ = xg.g ? xg.g(!1) : xg.call(null, !1), UJ, bK = new p(null, 3, [io, 200, kn, !0, sp, 1], null);
UJ = xg.g ? xg.g(bK) : xg.call(null, bK);
function fE() {
  return NC.h($J, Ag.h(SJ, uB));
}
function cK() {
  Ag.m(SJ, R, gp, new p(null, 2, [qn, (new Date).getTime(), vn, vn.g($o.g(M.g ? M.g(SJ) : M.call(null, SJ)))], null));
  var a = LC.g(1);
  lC(function(a) {
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
                      AC(c);
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
              var b = M.g ? M.g(UJ) : M.call(null, UJ), b = io.g(b), b = IC(b), c = fE();
              a[8] = c;
              return yC(a, 7, b);
            }
            return 3 === b ? (b = a[2], zC(a, b)) : 2 === b ? (b = M.g ? M.g(TJ) : M.call(null, TJ), a[1] = q(b) ? 4 : 5, Z) : 1 === b ? (a[2] = null, a[1] = 2, Z) : null;
          };
        }(a), a);
      }(), d = function() {
        var d = c.p ? c.p() : c.call(null);
        d[6] = a;
        return d;
      }();
      return xC(d);
    };
  }(a));
  return a;
}
Jc(TJ, tk, function(a, b, c, d) {
  return q(d) ? cK() : null;
});
function dK(a) {
  var b = Bv("#comportex-plots"), c = KB(a);
  a = function() {
    var a = new Jv(null, !0, function(a) {
      return function() {
        return new U(null, 2, 5, V, [dp, function() {
          return function(a) {
            return function F(b) {
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
                              var g = v.h(c, f), h = "comportex-plot-" + u.g(g), g = new U(null, 3, 5, V, [Zj, new U(null, 2, 5, V, [Jn, "Region " + u.g(g)], null), new U(null, 2, 5, V, [dp, new p(null, 1, [Pp, h], null)], null)], null);
                              e.add(g);
                              f += 1;
                            } else {
                              c = !0;
                              break a;
                            }
                          }
                          c = void 0;
                        }
                        return c ? Xf(e.R(), F(z(a))) : Xf(e.R(), null);
                      }
                      e = E(a);
                      c = "comportex-plot-" + u.g(e);
                      return Td(new U(null, 3, 5, V, [Zj, new U(null, 2, 5, V, [Jn, "Region " + u.g(e)], null), new U(null, 2, 5, V, [dp, new p(null, 1, [Pp, c], null)], null)], null), F(G(a)));
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
  b = Bv(b);
  yv(b, M.g ? M.g(a) : M.call(null, a));
  Oj(a, bo, function(a, b) {
    return function() {
      return yv(b, M.g ? M.g(a) : M.call(null, a));
    };
  }(a, b, c));
  b = D(zj.g(O(c)));
  a = null;
  for (var d = 0, e = 0;;) {
    if (e < d) {
      var f = a.D(null, e), g = "comportex-plot-" + u.g(f), h = Bv("#" + u.g(g)), l = PC(qg.j(OB, function(a, b, c, d, e, f, g) {
        return function(a) {
          return P.h(a, g);
        };
      }(b, a, d, e, h, g, f, c), KB), eE()), n = LJ(l);
      Oj(n, dq, function(a, b, c, d, e) {
        return function(a, b, c, d) {
          return MJ(e, d);
        };
      }(b, a, d, e, h, l, n, g, f, c));
      e += 1;
    } else {
      if (h = D(b)) {
        g = h;
        if (T(g)) {
          b = x(g), e = z(g), a = b, d = O(b), b = e;
        } else {
          var f = E(g), l = "comportex-plot-" + u.g(f), n = Bv("#" + u.g(l)), r = PC(qg.j(OB, function(a, b, c, d, e, f, g) {
            return function(a) {
              return P.h(a, g);
            };
          }(b, a, d, e, n, l, f, g, h, c), KB), eE()), s = LJ(r);
          Oj(s, dq, function(a, b, c, d, e) {
            return function(a, b, c, d) {
              return MJ(e, d);
            };
          }(b, a, d, e, n, r, s, l, f, g, h, c));
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
function VJ() {
  function a() {
    return YD();
  }
  return Fv.g ? Fv.g(a) : Fv.call(null, a);
}
Jc(fD, xq, function() {
  return VJ();
});
Jc(ZD, xq, function() {
  return VJ();
});
var eK = LC.g(1);
lC(function(a) {
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
                    AC(c);
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
            return b = eE(), a[7] = b, a[2] = null, a[1] = 2, Z;
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
            return b = a[2], zC(a, b);
          }
          if (12 === b) {
            return a[2] = null, a[1] = 13, Z;
          }
          if (2 === b) {
            return b = a[7], yC(a, 4, b);
          }
          if (11 === b) {
            return b = VJ(), a[2] = b, a[1] = 13, Z;
          }
          if (9 === b) {
            return b = a[10], a[2] = b, a[1] = 10, Z;
          }
          if (5 === b) {
            var b = a[8], b = $o.g(b), b = vn.g(b), c = M.g ? M.g(UJ) : M.call(null, UJ), c = sp.g(c), g = M.g ? M.g(UJ) : M.call(null, UJ), g = kn.g(g);
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
      var c = b.p ? b.p() : b.call(null);
      c[6] = a;
      return c;
    }();
    return xC(c);
  };
}(eK));
ma("comportexviz.main.set_model", function(a) {
  NC.h($J, yg.h ? yg.h(SJ, a) : yg.call(null, SJ, a));
  new PE(Bv("#comportex-tabs"));
  dK(a);
  dE(a);
  RJ();
  WJ();
  return XJ();
});
var fK = new p(null, 3, [on, 0, zm, So, jp, 0], null);
function gK(a) {
  var b = we(a) ? S.h(vg, a) : a, c = Q.h(b, jp);
  a = Q.h(b, zm);
  var d = Q.h(b, on);
  if (3 > c) {
    return jh.j(b, new U(null, 1, 5, V, [jp], null), Kd);
  }
  b = B.h(a, So) ? d + 1 : d - 1;
  a = 0 === b ? So : B.h(9, b) ? jk : a;
  return new p(null, 3, [on, b, zm, a, jp, 1], null);
}
var hK = kB(on, fB(300, 30, new U(null, 2, 5, V, [0, 9], null)));
ma("comportexviz.demos.block_steps.model", function() {
  return IB(uE, new U(null, 1, 5, V, [new DB(fK, fK, gK, hK)], null));
});
var iK = new U(null, 2, 5, V, [0, So], null);
function jK(a) {
  var b = P.j(a, 0, null);
  a = P.j(a, 1, null);
  return B.h(a, So) ? 9 > b ? new U(null, 2, 5, V, [b + 1, So], null) : new U(null, 2, 5, V, [b - 1, jk], null) : 0 < b ? new U(null, 2, 5, V, [b - 1, jk], null) : new U(null, 2, 5, V, [b + 1, So], null);
}
var kK = kB(E, fB(300, 30, new U(null, 2, 5, V, [0, 9], null)));
ma("comportexviz.demos.simple_steps.model", function() {
  return IB(uE, new U(null, 1, 5, V, [new DB(iK, iK, jK, kK)], null));
});
var lK = new U(null, 2, 5, V, [0, 10], null), mK = eh.h(function(a) {
  return R.k(a, on, ar.g(a), L([ek, 0], 0));
}, new U(null, 3, 5, V, [new p(null, 4, [ar, 0, ct, 3, it, Kd, jq, 3], null), new p(null, 4, [ar, 3, ct, 8, it, Kd, jq, 4], null), new p(null, 4, [ar, 10, ct, 0, it, af, jq, 1], null)], null));
function nK(a) {
  return eh.h(function(a) {
    return B.h(on.g(a), ct.g(a)) ? R.k(a, on, null, L([ek, jq.g(a) - 1], 0)) : db(on.g(a)) && 0 < ek.g(a) ? jh.j(a, new U(null, 1, 5, V, [ek], null), af) : db(on.g(a)) && 0 === ek.g(a) ? R.j(a, on, ar.g(a)) : jh.j(a, new U(null, 1, 5, V, [on], null), it.g(a));
  }, a);
}
var oK = hB(kB(on, fB(300, 30, lK)));
ma("comportexviz.demos.mixed_fixed_1d.model", function() {
  return IB(uE, new U(null, 1, 5, V, [new DB(mK, mK, nK, oK)], null));
});

})();

//# sourceMappingURL=comportexviz.js.map