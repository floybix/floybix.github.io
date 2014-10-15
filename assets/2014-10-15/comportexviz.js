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
function ca(a) {
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
function da(a) {
  var b = m(a);
  return "array" == b || "object" == b && "number" == typeof a.length;
}
function ga(a) {
  return "string" == typeof a;
}
function ia(a) {
  return "function" == m(a);
}
function ja(a) {
  var b = typeof a;
  return "object" == b && null != a || "function" == b;
}
var ma = "closure_uid_" + (1E9 * Math.random() >>> 0), pa = 0;
function qa(a, b) {
  var c = a.split("."), d = aa;
  c[0] in d || !d.execScript || d.execScript("var " + c[0]);
  for (var e;c.length && (e = c.shift());) {
    !c.length && ca(b) ? d[e] = b : d = d[e] ? d[e] : d[e] = {};
  }
}
function ra(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.Kg = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a;
  a.Ug = function(a, c, f) {
    return b.prototype[c].apply(a, Array.prototype.slice.call(arguments, 2));
  };
}
;function sa(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
}
function va(a) {
  if (!xa.test(a)) {
    return a;
  }
  -1 != a.indexOf("\x26") && (a = a.replace(za, "\x26amp;"));
  -1 != a.indexOf("\x3c") && (a = a.replace(Aa, "\x26lt;"));
  -1 != a.indexOf("\x3e") && (a = a.replace(Ca, "\x26gt;"));
  -1 != a.indexOf('"') && (a = a.replace(Ea, "\x26quot;"));
  -1 != a.indexOf("'") && (a = a.replace(Fa, "\x26#39;"));
  -1 != a.indexOf("\x00") && (a = a.replace(Ha, "\x26#0;"));
  return a;
}
var za = /&/g, Aa = /</g, Ca = />/g, Ea = /"/g, Fa = /'/g, Ha = /\x00/g, xa = /[\x00&<>"']/;
function Ia(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}
function Ja(a) {
  return String(a).replace(/\-([a-z])/g, function(a, c) {
    return c.toUpperCase();
  });
}
;function Ka(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
}
var La = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Na(a, b) {
  for (var c, d, e = 1;e < arguments.length;e++) {
    d = arguments[e];
    for (c in d) {
      a[c] = d[c];
    }
    for (var f = 0;f < La.length;f++) {
      c = La[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
}
;function Oa(a, b) {
  null != a && this.append.apply(this, arguments);
}
Oa.prototype.Ec = "";
Oa.prototype.append = function(a, b, c) {
  this.Ec += a;
  if (null != b) {
    for (var d = 1;d < arguments.length;d++) {
      this.Ec += arguments[d];
    }
  }
  return this;
};
Oa.prototype.toString = function() {
  return this.Ec;
};
var Ra;
var Sa = Array.prototype, Ta = Sa.indexOf ? function(a, b, c) {
  return Sa.indexOf.call(a, b, c);
} : function(a, b, c) {
  c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if (ga(a)) {
    return ga(b) && 1 == b.length ? a.indexOf(b, c) : -1;
  }
  for (;c < a.length;c++) {
    if (c in a && a[c] === b) {
      return c;
    }
  }
  return-1;
}, Va = Sa.forEach ? function(a, b, c) {
  Sa.forEach.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = ga(a) ? a.split("") : a, f = 0;f < d;f++) {
    f in e && b.call(c, e[f], f, a);
  }
};
function Wa(a) {
  var b = a.length;
  if (0 < b) {
    for (var c = Array(b), d = 0;d < b;d++) {
      c[d] = a[d];
    }
    return c;
  }
  return[];
}
function Xa(a, b) {
  a.sort(b || Ya);
}
function Za(a, b) {
  for (var c = 0;c < a.length;c++) {
    a[c] = {index:c, value:a[c]};
  }
  var d = b || Ya;
  Xa(a, function(a, b) {
    return d(a.value, b.value) || a.index - b.index;
  });
  for (c = 0;c < a.length;c++) {
    a[c] = a[c].value;
  }
}
function Ya(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
}
;var $a = null;
function ab() {
  return new n(null, 5, [bb, !0, cb, !0, db, !1, eb, !1, fb, null], null);
}
function q(a) {
  return null != a && !1 !== a;
}
function gb(a) {
  return q(a) ? !1 : !0;
}
function hb(a, b) {
  return a[m(null == b ? null : b)] ? !0 : a._ ? !0 : !1;
}
function jb(a) {
  return null == a ? null : a.constructor;
}
function r(a, b) {
  var c = jb(b), c = q(q(c) ? c.eb : c) ? c.cb : m(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function lb(a) {
  var b = a.cb;
  return q(b) ? b : "" + u.g(a);
}
function mb(a) {
  for (var b = a.length, c = Array(b), d = 0;;) {
    if (d < b) {
      c[d] = a[d], d += 1;
    } else {
      break;
    }
  }
  return c;
}
var nb = {}, ob = {};
function pb(a) {
  if (a ? a.T : a) {
    return a.T(a);
  }
  var b;
  b = pb[m(null == a ? null : a)];
  if (!b && (b = pb._, !b)) {
    throw r("ICounted.-count", a);
  }
  return b.call(null, a);
}
function sb(a) {
  if (a ? a.aa : a) {
    return a.aa(a);
  }
  var b;
  b = sb[m(null == a ? null : a)];
  if (!b && (b = sb._, !b)) {
    throw r("IEmptyableCollection.-empty", a);
  }
  return b.call(null, a);
}
var tb = {};
function ub(a, b) {
  if (a ? a.S : a) {
    return a.S(a, b);
  }
  var c;
  c = ub[m(null == a ? null : a)];
  if (!c && (c = ub._, !c)) {
    throw r("ICollection.-conj", a);
  }
  return c.call(null, a, b);
}
var wb = {}, v = function() {
  function a(a, b, c) {
    if (a ? a.Ha : a) {
      return a.Ha(a, b, c);
    }
    var g;
    g = v[m(null == a ? null : a)];
    if (!g && (g = v._, !g)) {
      throw r("IIndexed.-nth", a);
    }
    return g.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.F : a) {
      return a.F(a, b);
    }
    var c;
    c = v[m(null == a ? null : a)];
    if (!c && (c = v._, !c)) {
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
}(), xb = {};
function yb(a) {
  if (a ? a.da : a) {
    return a.da(a);
  }
  var b;
  b = yb[m(null == a ? null : a)];
  if (!b && (b = yb._, !b)) {
    throw r("ISeq.-first", a);
  }
  return b.call(null, a);
}
function zb(a) {
  if (a ? a.sa : a) {
    return a.sa(a);
  }
  var b;
  b = zb[m(null == a ? null : a)];
  if (!b && (b = zb._, !b)) {
    throw r("ISeq.-rest", a);
  }
  return b.call(null, a);
}
var Ab = {}, Bb = {}, Cb = function() {
  function a(a, b, c) {
    if (a ? a.M : a) {
      return a.M(a, b, c);
    }
    var g;
    g = Cb[m(null == a ? null : a)];
    if (!g && (g = Cb._, !g)) {
      throw r("ILookup.-lookup", a);
    }
    return g.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.L : a) {
      return a.L(a, b);
    }
    var c;
    c = Cb[m(null == a ? null : a)];
    if (!c && (c = Cb._, !c)) {
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
}(), Hb = {};
function Ib(a, b) {
  if (a ? a.hd : a) {
    return a.hd(a, b);
  }
  var c;
  c = Ib[m(null == a ? null : a)];
  if (!c && (c = Ib._, !c)) {
    throw r("IAssociative.-contains-key?", a);
  }
  return c.call(null, a, b);
}
function Kb(a, b, c) {
  if (a ? a.ga : a) {
    return a.ga(a, b, c);
  }
  var d;
  d = Kb[m(null == a ? null : a)];
  if (!d && (d = Kb._, !d)) {
    throw r("IAssociative.-assoc", a);
  }
  return d.call(null, a, b, c);
}
var Lb = {};
function Nb(a, b) {
  if (a ? a.va : a) {
    return a.va(a, b);
  }
  var c;
  c = Nb[m(null == a ? null : a)];
  if (!c && (c = Nb._, !c)) {
    throw r("IMap.-dissoc", a);
  }
  return c.call(null, a, b);
}
var Ob = {};
function Pb(a) {
  if (a ? a.Tc : a) {
    return a.Tc(a);
  }
  var b;
  b = Pb[m(null == a ? null : a)];
  if (!b && (b = Pb._, !b)) {
    throw r("IMapEntry.-key", a);
  }
  return b.call(null, a);
}
function Qb(a) {
  if (a ? a.Uc : a) {
    return a.Uc(a);
  }
  var b;
  b = Qb[m(null == a ? null : a)];
  if (!b && (b = Qb._, !b)) {
    throw r("IMapEntry.-val", a);
  }
  return b.call(null, a);
}
var Rb = {};
function Sb(a, b) {
  if (a ? a.Be : a) {
    return a.Be(0, b);
  }
  var c;
  c = Sb[m(null == a ? null : a)];
  if (!c && (c = Sb._, !c)) {
    throw r("ISet.-disjoin", a);
  }
  return c.call(null, a, b);
}
function Tb(a) {
  if (a ? a.jc : a) {
    return a.jc(a);
  }
  var b;
  b = Tb[m(null == a ? null : a)];
  if (!b && (b = Tb._, !b)) {
    throw r("IStack.-peek", a);
  }
  return b.call(null, a);
}
function Vb(a) {
  if (a ? a.kc : a) {
    return a.kc(a);
  }
  var b;
  b = Vb[m(null == a ? null : a)];
  if (!b && (b = Vb._, !b)) {
    throw r("IStack.-pop", a);
  }
  return b.call(null, a);
}
var Wb = {};
function Xb(a, b, c) {
  if (a ? a.sc : a) {
    return a.sc(a, b, c);
  }
  var d;
  d = Xb[m(null == a ? null : a)];
  if (!d && (d = Xb._, !d)) {
    throw r("IVector.-assoc-n", a);
  }
  return d.call(null, a, b, c);
}
function Zb(a) {
  if (a ? a.Fc : a) {
    return a.Fc(a);
  }
  var b;
  b = Zb[m(null == a ? null : a)];
  if (!b && (b = Zb._, !b)) {
    throw r("IDeref.-deref", a);
  }
  return b.call(null, a);
}
var $b = {};
function ec(a) {
  if (a ? a.H : a) {
    return a.H(a);
  }
  var b;
  b = ec[m(null == a ? null : a)];
  if (!b && (b = ec._, !b)) {
    throw r("IMeta.-meta", a);
  }
  return b.call(null, a);
}
var fc = {};
function gc(a, b) {
  if (a ? a.I : a) {
    return a.I(a, b);
  }
  var c;
  c = gc[m(null == a ? null : a)];
  if (!c && (c = gc._, !c)) {
    throw r("IWithMeta.-with-meta", a);
  }
  return c.call(null, a, b);
}
var kc = {}, lc = function() {
  function a(a, b, c) {
    if (a ? a.ia : a) {
      return a.ia(a, b, c);
    }
    var g;
    g = lc[m(null == a ? null : a)];
    if (!g && (g = lc._, !g)) {
      throw r("IReduce.-reduce", a);
    }
    return g.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.ha : a) {
      return a.ha(a, b);
    }
    var c;
    c = lc[m(null == a ? null : a)];
    if (!c && (c = lc._, !c)) {
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
function mc(a, b, c) {
  if (a ? a.Sc : a) {
    return a.Sc(a, b, c);
  }
  var d;
  d = mc[m(null == a ? null : a)];
  if (!d && (d = mc._, !d)) {
    throw r("IKVReduce.-kv-reduce", a);
  }
  return d.call(null, a, b, c);
}
function nc(a, b) {
  if (a ? a.N : a) {
    return a.N(a, b);
  }
  var c;
  c = nc[m(null == a ? null : a)];
  if (!c && (c = nc._, !c)) {
    throw r("IEquiv.-equiv", a);
  }
  return c.call(null, a, b);
}
function oc(a) {
  if (a ? a.Q : a) {
    return a.Q(a);
  }
  var b;
  b = oc[m(null == a ? null : a)];
  if (!b && (b = oc._, !b)) {
    throw r("IHash.-hash", a);
  }
  return b.call(null, a);
}
var pc = {};
function qc(a) {
  if (a ? a.R : a) {
    return a.R(a);
  }
  var b;
  b = qc[m(null == a ? null : a)];
  if (!b && (b = qc._, !b)) {
    throw r("ISeqable.-seq", a);
  }
  return b.call(null, a);
}
var uc = {}, vc = {};
function wc(a) {
  if (a ? a.Vc : a) {
    return a.Vc(a);
  }
  var b;
  b = wc[m(null == a ? null : a)];
  if (!b && (b = wc._, !b)) {
    throw r("IReversible.-rseq", a);
  }
  return b.call(null, a);
}
function xc(a, b) {
  if (a ? a.De : a) {
    return a.De(0, b);
  }
  var c;
  c = xc[m(null == a ? null : a)];
  if (!c && (c = xc._, !c)) {
    throw r("IWriter.-write", a);
  }
  return c.call(null, a, b);
}
var yc = {};
function zc(a, b, c) {
  if (a ? a.O : a) {
    return a.O(a, b, c);
  }
  var d;
  d = zc[m(null == a ? null : a)];
  if (!d && (d = zc._, !d)) {
    throw r("IPrintWithWriter.-pr-writer", a);
  }
  return d.call(null, a, b, c);
}
function Ac(a, b, c) {
  if (a ? a.Kd : a) {
    return a.Kd(a, b, c);
  }
  var d;
  d = Ac[m(null == a ? null : a)];
  if (!d && (d = Ac._, !d)) {
    throw r("IWatchable.-notify-watches", a);
  }
  return d.call(null, a, b, c);
}
function Ec(a, b, c) {
  if (a ? a.Jd : a) {
    return a.Jd(a, b, c);
  }
  var d;
  d = Ec[m(null == a ? null : a)];
  if (!d && (d = Ec._, !d)) {
    throw r("IWatchable.-add-watch", a);
  }
  return d.call(null, a, b, c);
}
function Fc(a, b) {
  if (a ? a.Ld : a) {
    return a.Ld(a, b);
  }
  var c;
  c = Fc[m(null == a ? null : a)];
  if (!c && (c = Fc._, !c)) {
    throw r("IWatchable.-remove-watch", a);
  }
  return c.call(null, a, b);
}
function Gc(a) {
  if (a ? a.Gc : a) {
    return a.Gc(a);
  }
  var b;
  b = Gc[m(null == a ? null : a)];
  if (!b && (b = Gc._, !b)) {
    throw r("IEditableCollection.-as-transient", a);
  }
  return b.call(null, a);
}
function Hc(a, b) {
  if (a ? a.qc : a) {
    return a.qc(a, b);
  }
  var c;
  c = Hc[m(null == a ? null : a)];
  if (!c && (c = Hc._, !c)) {
    throw r("ITransientCollection.-conj!", a);
  }
  return c.call(null, a, b);
}
function Ic(a) {
  if (a ? a.rc : a) {
    return a.rc(a);
  }
  var b;
  b = Ic[m(null == a ? null : a)];
  if (!b && (b = Ic._, !b)) {
    throw r("ITransientCollection.-persistent!", a);
  }
  return b.call(null, a);
}
function Jc(a, b, c) {
  if (a ? a.Xc : a) {
    return a.Xc(a, b, c);
  }
  var d;
  d = Jc[m(null == a ? null : a)];
  if (!d && (d = Jc._, !d)) {
    throw r("ITransientAssociative.-assoc!", a);
  }
  return d.call(null, a, b, c);
}
function Oc(a, b, c) {
  if (a ? a.Ce : a) {
    return a.Ce(0, b, c);
  }
  var d;
  d = Oc[m(null == a ? null : a)];
  if (!d && (d = Oc._, !d)) {
    throw r("ITransientVector.-assoc-n!", a);
  }
  return d.call(null, a, b, c);
}
function Pc(a) {
  if (a ? a.xe : a) {
    return a.xe();
  }
  var b;
  b = Pc[m(null == a ? null : a)];
  if (!b && (b = Pc._, !b)) {
    throw r("IChunk.-drop-first", a);
  }
  return b.call(null, a);
}
function x(a) {
  if (a ? a.Hd : a) {
    return a.Hd(a);
  }
  var b;
  b = x[m(null == a ? null : a)];
  if (!b && (b = x._, !b)) {
    throw r("IChunkedSeq.-chunked-first", a);
  }
  return b.call(null, a);
}
function z(a) {
  if (a ? a.Id : a) {
    return a.Id(a);
  }
  var b;
  b = z[m(null == a ? null : a)];
  if (!b && (b = z._, !b)) {
    throw r("IChunkedSeq.-chunked-rest", a);
  }
  return b.call(null, a);
}
function Qc(a) {
  if (a ? a.Gd : a) {
    return a.Gd(a);
  }
  var b;
  b = Qc[m(null == a ? null : a)];
  if (!b && (b = Qc._, !b)) {
    throw r("IChunkedNext.-chunked-next", a);
  }
  return b.call(null, a);
}
function Rc(a, b) {
  if (a ? a.If : a) {
    return a.If(a, b);
  }
  var c;
  c = Rc[m(null == a ? null : a)];
  if (!c && (c = Rc._, !c)) {
    throw r("IReset.-reset!", a);
  }
  return c.call(null, a, b);
}
var Uc = function() {
  function a(a, b, c, d, e) {
    if (a ? a.Mf : a) {
      return a.Mf(a, b, c, d, e);
    }
    var t;
    t = Uc[m(null == a ? null : a)];
    if (!t && (t = Uc._, !t)) {
      throw r("ISwap.-swap!", a);
    }
    return t.call(null, a, b, c, d, e);
  }
  function b(a, b, c, d) {
    if (a ? a.Lf : a) {
      return a.Lf(a, b, c, d);
    }
    var e;
    e = Uc[m(null == a ? null : a)];
    if (!e && (e = Uc._, !e)) {
      throw r("ISwap.-swap!", a);
    }
    return e.call(null, a, b, c, d);
  }
  function c(a, b, c) {
    if (a ? a.Kf : a) {
      return a.Kf(a, b, c);
    }
    var d;
    d = Uc[m(null == a ? null : a)];
    if (!d && (d = Uc._, !d)) {
      throw r("ISwap.-swap!", a);
    }
    return d.call(null, a, b, c);
  }
  function d(a, b) {
    if (a ? a.Jf : a) {
      return a.Jf(a, b);
    }
    var c;
    c = Uc[m(null == a ? null : a)];
    if (!c && (c = Uc._, !c)) {
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
  e.p = b;
  e.J = a;
  return e;
}();
function Vc(a) {
  this.Gg = a;
  this.G = 0;
  this.t = 1073741824;
}
Vc.prototype.De = function(a, b) {
  return this.Gg.append(b);
};
function Wc(a) {
  var b = new Oa;
  a.O(null, new Vc(b), ab());
  return "" + u.g(b);
}
var Xc = "undefined" !== typeof Math.imul && 0 !== (Math.imul.h ? Math.imul.h(4294967295, 5) : Math.imul.call(null, 4294967295, 5)) ? function(a, b) {
  return Math.imul.h ? Math.imul.h(a, b) : Math.imul.call(null, a, b);
} : function(a, b) {
  var c = a & 65535, d = b & 65535;
  return c * d + ((a >>> 16 & 65535) * d + c * (b >>> 16 & 65535) << 16 >>> 0) | 0;
};
function Yc(a) {
  a = Xc(a, 3432918353);
  return Xc(a << 15 | a >>> -15, 461845907);
}
function Zc(a, b) {
  var c = a ^ b;
  return Xc(c << 13 | c >>> -13, 5) + 3864292196;
}
function $c(a, b) {
  var c = a ^ b, c = Xc(c ^ c >>> 16, 2246822507), c = Xc(c ^ c >>> 13, 3266489909);
  return c ^ c >>> 16;
}
function ad(a) {
  var b;
  a: {
    b = 1;
    for (var c = 0;;) {
      if (b < a.length) {
        var d = b + 2, c = Zc(c, Yc(a.charCodeAt(b - 1) | a.charCodeAt(b) << 16));
        b = d;
      } else {
        b = c;
        break a;
      }
    }
    b = void 0;
  }
  b = 1 === (a.length & 1) ? b ^ Yc(a.charCodeAt(a.length - 1)) : b;
  return $c(b, Xc(2, a.length));
}
var bd = {}, cd = 0;
function dd(a) {
  255 < cd && (bd = {}, cd = 0);
  var b = bd[a];
  if ("number" !== typeof b) {
    a: {
      if (null != a) {
        if (b = a.length, 0 < b) {
          for (var c = 0, d = 0;;) {
            if (c < b) {
              var e = c + 1, d = Xc(31, d) + a.charCodeAt(c), c = e
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
    bd[a] = b;
    cd += 1;
  }
  return a = b;
}
function ed(a) {
  a && (a.t & 4194304 || a.Df) ? a = a.Q(null) : "number" === typeof a ? a = (Math.floor.g ? Math.floor.g(a) : Math.floor.call(null, a)) % 2147483647 : !0 === a ? a = 1 : !1 === a ? a = 0 : "string" === typeof a ? (a = dd(a), 0 !== a && (a = Yc(a), a = Zc(0, a), a = $c(a, 4))) : a = null == a ? 0 : oc(a);
  return a;
}
function fd(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
function gd(a, b) {
  if (q(md.h ? md.h(a, b) : md.call(null, a, b))) {
    return 0;
  }
  if (q(function() {
    var c = gb(a.Hb);
    return c ? b.Hb : c;
  }())) {
    return-1;
  }
  if (q(a.Hb)) {
    if (gb(b.Hb)) {
      return 1;
    }
    var c = function() {
      var c = a.Hb, d = b.Hb;
      return nd.h ? nd.h(c, d) : nd.call(null, c, d);
    }();
    if (0 === c) {
      var c = a.name, d = b.name;
      return nd.h ? nd.h(c, d) : nd.call(null, c, d);
    }
    return c;
  }
  c = a.name;
  d = b.name;
  return nd.h ? nd.h(c, d) : nd.call(null, c, d);
}
function pd(a, b, c, d, e) {
  this.Hb = a;
  this.name = b;
  this.oc = c;
  this.Dc = d;
  this.Ga = e;
  this.t = 2154168321;
  this.G = 4096;
}
k = pd.prototype;
k.O = function(a, b) {
  return xc(b, this.oc);
};
k.Q = function() {
  var a = this.Dc;
  return null != a ? a : this.Dc = a = fd(ad(this.name), dd(this.Hb));
};
k.I = function(a, b) {
  return new pd(this.Hb, this.name, this.oc, this.Dc, b);
};
k.H = function() {
  return this.Ga;
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
  return this.call.apply(this, [this].concat(mb(b)));
};
k.g = function(a) {
  return Cb.j(a, this, null);
};
k.h = function(a, b) {
  return Cb.j(a, this, b);
};
k.N = function(a, b) {
  return b instanceof pd ? this.oc === b.oc : !1;
};
k.toString = function() {
  return this.oc;
};
var qd = function() {
  function a(a, b) {
    var c = null != a ? "" + u.g(a) + "/" + u.g(b) : b;
    return new pd(a, b, c, null, null);
  }
  function b(a) {
    return a instanceof pd ? a : c.h(null, a);
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
  if (a && (a.t & 8388608 || a.Ae)) {
    return a.R(null);
  }
  if (a instanceof Array || "string" === typeof a) {
    return 0 === a.length ? null : new rd(a, 0);
  }
  if (hb(pc, a)) {
    return qc(a);
  }
  throw Error("" + u.g(a) + " is not ISeqable");
}
function C(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.t & 64 || a.Wc)) {
    return a.da(null);
  }
  a = B(a);
  return null == a ? null : yb(a);
}
function E(a) {
  return null != a ? a && (a.t & 64 || a.Wc) ? a.sa(null) : (a = B(a)) ? zb(a) : sd : sd;
}
function F(a) {
  return null == a ? null : a && (a.t & 128 || a.md) ? a.wa(null) : B(E(a));
}
var md = function() {
  function a(a, b) {
    return null == a ? null == b : a === b || nc(a, b);
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
    a.A = 2;
    a.o = function(a) {
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
        return c.k(b, e, H(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.A = 2;
  b.o = c.o;
  b.g = function() {
    return!0;
  };
  b.h = a;
  b.k = c.k;
  return b;
}();
function td(a, b) {
  var c = Yc(a), c = Zc(0, c);
  return $c(c, b);
}
function ud(a) {
  var b = 0, c = 1;
  for (a = B(a);;) {
    if (null != a) {
      b += 1, c = Xc(31, c) + ed(C(a)) | 0, a = F(a);
    } else {
      return td(c, b);
    }
  }
}
function Ad(a) {
  var b = 0, c = 0;
  for (a = B(a);;) {
    if (null != a) {
      b += 1, c = c + ed(C(a)) | 0, a = F(a);
    } else {
      return td(c, b);
    }
  }
}
ob["null"] = !0;
pb["null"] = function() {
  return 0;
};
Date.prototype.N = function(a, b) {
  return b instanceof Date && this.toString() === b.toString();
};
nc.number = function(a, b) {
  return a === b;
};
$b["function"] = !0;
ec["function"] = function() {
  return null;
};
nb["function"] = !0;
oc._ = function(a) {
  return a[ma] || (a[ma] = ++pa);
};
function Bd(a) {
  return a + 1;
}
function Dd(a) {
  this.D = a;
  this.G = 0;
  this.t = 32768;
}
Dd.prototype.Fc = function() {
  return this.D;
};
function Ed(a) {
  return a instanceof Dd;
}
function I(a) {
  return Zb(a);
}
var Fd = function() {
  function a(a, b, c, d) {
    for (var l = pb(a);;) {
      if (d < l) {
        var p = v.h(a, d);
        c = b.h ? b.h(c, p) : b.call(null, c, p);
        if (Ed(c)) {
          return Zb(c);
        }
        d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    var d = pb(a), l = c;
    for (c = 0;;) {
      if (c < d) {
        var p = v.h(a, c), l = b.h ? b.h(l, p) : b.call(null, l, p);
        if (Ed(l)) {
          return Zb(l);
        }
        c += 1;
      } else {
        return l;
      }
    }
  }
  function c(a, b) {
    var c = pb(a);
    if (0 === c) {
      return b.q ? b.q() : b.call(null);
    }
    for (var d = v.h(a, 0), l = 1;;) {
      if (l < c) {
        var p = v.h(a, l), d = b.h ? b.h(d, p) : b.call(null, d, p);
        if (Ed(d)) {
          return Zb(d);
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
}(), Gd = function() {
  function a(a, b, c, d) {
    for (var l = a.length;;) {
      if (d < l) {
        var p = a[d];
        c = b.h ? b.h(c, p) : b.call(null, c, p);
        if (Ed(c)) {
          return Zb(c);
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
        if (Ed(l)) {
          return Zb(l);
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
        if (Ed(d)) {
          return Zb(d);
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
function Hd(a) {
  return a ? a.t & 2 || a.Af ? !0 : a.t ? !1 : hb(ob, a) : hb(ob, a);
}
function Id(a) {
  return a ? a.t & 16 || a.ye ? !0 : a.t ? !1 : hb(wb, a) : hb(wb, a);
}
function rd(a, b) {
  this.m = a;
  this.K = b;
  this.t = 166199550;
  this.G = 8192;
}
k = rd.prototype;
k.toString = function() {
  return Wc(this);
};
k.F = function(a, b) {
  var c = b + this.K;
  return c < this.m.length ? this.m[c] : null;
};
k.Ha = function(a, b, c) {
  a = b + this.K;
  return a < this.m.length ? this.m[a] : c;
};
k.wa = function() {
  return this.K + 1 < this.m.length ? new rd(this.m, this.K + 1) : null;
};
k.T = function() {
  return this.m.length - this.K;
};
k.Vc = function() {
  var a = pb(this);
  return 0 < a ? new Jd(this, a - 1, null) : null;
};
k.Q = function() {
  return ud(this);
};
k.N = function(a, b) {
  return Kd.h ? Kd.h(this, b) : Kd.call(null, this, b);
};
k.aa = function() {
  return sd;
};
k.ha = function(a, b) {
  return Gd.p(this.m, b, this.m[this.K], this.K + 1);
};
k.ia = function(a, b, c) {
  return Gd.p(this.m, b, c, this.K);
};
k.da = function() {
  return this.m[this.K];
};
k.sa = function() {
  return this.K + 1 < this.m.length ? new rd(this.m, this.K + 1) : sd;
};
k.R = function() {
  return this;
};
k.S = function(a, b) {
  return Ld.h ? Ld.h(b, this) : Ld.call(null, b, this);
};
var Md = function() {
  function a(a, b) {
    return b < a.length ? new rd(a, b) : null;
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
    return Md.h(a, b);
  }
  function b(a) {
    return Md.h(a, 0);
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
function Jd(a, b, c) {
  this.gd = a;
  this.K = b;
  this.C = c;
  this.t = 32374990;
  this.G = 8192;
}
k = Jd.prototype;
k.toString = function() {
  return Wc(this);
};
k.H = function() {
  return this.C;
};
k.wa = function() {
  return 0 < this.K ? new Jd(this.gd, this.K - 1, null) : null;
};
k.T = function() {
  return this.K + 1;
};
k.Q = function() {
  return ud(this);
};
k.N = function(a, b) {
  return Kd.h ? Kd.h(this, b) : Kd.call(null, this, b);
};
k.aa = function() {
  var a = this.C;
  return Nd.h ? Nd.h(sd, a) : Nd.call(null, sd, a);
};
k.ha = function(a, b) {
  return Od.h ? Od.h(b, this) : Od.call(null, b, this);
};
k.ia = function(a, b, c) {
  return Od.j ? Od.j(b, c, this) : Od.call(null, b, c, this);
};
k.da = function() {
  return v.h(this.gd, this.K);
};
k.sa = function() {
  return 0 < this.K ? new Jd(this.gd, this.K - 1, null) : sd;
};
k.R = function() {
  return this;
};
k.I = function(a, b) {
  return new Jd(this.gd, this.K, b);
};
k.S = function(a, b) {
  return Ld.h ? Ld.h(b, this) : Ld.call(null, b, this);
};
function Pd(a) {
  return C(F(a));
}
function $d(a) {
  for (;;) {
    var b = F(a);
    if (null != b) {
      a = b;
    } else {
      return C(a);
    }
  }
}
nc._ = function(a, b) {
  return a === b;
};
var be = function() {
  function a(a, b) {
    return null != a ? ub(a, b) : ub(sd, b);
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
          a = b.h(a, d), d = C(e), e = F(e);
        } else {
          return b.h(a, d);
        }
      }
    }
    a.A = 2;
    a.o = function(a) {
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
        return ae;
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.k(b, e, H(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.A = 2;
  b.o = c.o;
  b.q = function() {
    return ae;
  };
  b.g = function(a) {
    return a;
  };
  b.h = a;
  b.k = c.k;
  return b;
}();
function K(a) {
  if (null != a) {
    if (a && (a.t & 2 || a.Af)) {
      a = a.T(null);
    } else {
      if (a instanceof Array) {
        a = a.length;
      } else {
        if ("string" === typeof a) {
          a = a.length;
        } else {
          if (hb(ob, a)) {
            a = pb(a);
          } else {
            a: {
              a = B(a);
              for (var b = 0;;) {
                if (Hd(a)) {
                  a = b + pb(a);
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
var ce = function() {
  function a(a, b, c) {
    for (;;) {
      if (null == a) {
        return c;
      }
      if (0 === b) {
        return B(a) ? C(a) : c;
      }
      if (Id(a)) {
        return v.j(a, b, c);
      }
      if (B(a)) {
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
        if (B(a)) {
          return C(a);
        }
        throw Error("Index out of bounds");
      }
      if (Id(a)) {
        return v.h(a, b);
      }
      if (B(a)) {
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
    if (a && (a.t & 16 || a.ye)) {
      return a.Ha(null, b, c);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : c;
    }
    if (hb(wb, a)) {
      return v.h(a, b);
    }
    if (a ? a.t & 64 || a.Wc || (a.t ? 0 : hb(xb, a)) : hb(xb, a)) {
      return ce.j(a, b, c);
    }
    throw Error("nth not supported on this type " + u.g(lb(jb(a))));
  }
  function b(a, b) {
    if ("number" !== typeof b) {
      throw Error("index argument to nth must be a number");
    }
    if (null == a) {
      return a;
    }
    if (a && (a.t & 16 || a.ye)) {
      return a.F(null, b);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : null;
    }
    if (hb(wb, a)) {
      return v.h(a, b);
    }
    if (a ? a.t & 64 || a.Wc || (a.t ? 0 : hb(xb, a)) : hb(xb, a)) {
      return ce.h(a, b);
    }
    throw Error("nth not supported on this type " + u.g(lb(jb(a))));
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
    return null != a ? a && (a.t & 256 || a.ze) ? a.M(null, b, c) : a instanceof Array ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : hb(Bb, a) ? Cb.j(a, b, c) : c : c;
  }
  function b(a, b) {
    return null == a ? null : a && (a.t & 256 || a.ze) ? a.L(null, b) : a instanceof Array ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : hb(Bb, a) ? Cb.h(a, b) : null;
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
    return null != a ? Kb(a, b, c) : de([b], [c]);
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
          d = C(l), e = Pd(l), l = F(F(l));
        } else {
          return a;
        }
      }
    }
    a.A = 3;
    a.o = function(a) {
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
        return c.k(b, e, f, H(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.A = 3;
  b.o = c.o;
  b.j = a;
  b.k = c.k;
  return b;
}(), ee = function() {
  function a(a, b) {
    return null == a ? null : Nb(a, b);
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
          d = C(e), e = F(e);
        } else {
          return a;
        }
      }
    }
    a.A = 2;
    a.o = function(a) {
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
        return c.k(b, e, H(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.A = 2;
  b.o = c.o;
  b.g = function(a) {
    return a;
  };
  b.h = a;
  b.k = c.k;
  return b;
}();
function fe(a) {
  var b = ia(a);
  return q(b) ? b : a ? q(q(null) ? null : a.zf) ? !0 : a.dh ? !1 : hb(nb, a) : hb(nb, a);
}
function ge(a, b) {
  this.v = a;
  this.C = b;
  this.G = 0;
  this.t = 393217;
}
k = ge.prototype;
k.call = function() {
  function a(a, b, c, d, e, f, g, h, l, p, t, s, w, y, A, D, G, M, J, L, N, $) {
    a = this.v;
    return R.ld ? R.ld(a, b, c, d, e, f, g, h, l, p, t, s, w, y, A, D, G, M, J, L, N, $) : R.call(null, a, b, c, d, e, f, g, h, l, p, t, s, w, y, A, D, G, M, J, L, N, $);
  }
  function b(a, b, c, d, e, f, g, h, l, p, t, s, w, y, A, D, G, M, J, L, N) {
    a = this;
    return a.v.$b ? a.v.$b(b, c, d, e, f, g, h, l, p, t, s, w, y, A, D, G, M, J, L, N) : a.v.call(null, b, c, d, e, f, g, h, l, p, t, s, w, y, A, D, G, M, J, L, N);
  }
  function c(a, b, c, d, e, f, g, h, l, p, t, s, w, y, A, D, G, M, J, L) {
    a = this;
    return a.v.Zb ? a.v.Zb(b, c, d, e, f, g, h, l, p, t, s, w, y, A, D, G, M, J, L) : a.v.call(null, b, c, d, e, f, g, h, l, p, t, s, w, y, A, D, G, M, J, L);
  }
  function d(a, b, c, d, e, f, g, h, l, p, t, s, w, y, A, D, G, M, J) {
    a = this;
    return a.v.Yb ? a.v.Yb(b, c, d, e, f, g, h, l, p, t, s, w, y, A, D, G, M, J) : a.v.call(null, b, c, d, e, f, g, h, l, p, t, s, w, y, A, D, G, M, J);
  }
  function e(a, b, c, d, e, f, g, h, l, p, t, s, w, y, A, D, G, M) {
    a = this;
    return a.v.Xb ? a.v.Xb(b, c, d, e, f, g, h, l, p, t, s, w, y, A, D, G, M) : a.v.call(null, b, c, d, e, f, g, h, l, p, t, s, w, y, A, D, G, M);
  }
  function f(a, b, c, d, e, f, g, h, l, p, t, s, w, y, A, D, G) {
    a = this;
    return a.v.Wb ? a.v.Wb(b, c, d, e, f, g, h, l, p, t, s, w, y, A, D, G) : a.v.call(null, b, c, d, e, f, g, h, l, p, t, s, w, y, A, D, G);
  }
  function g(a, b, c, d, e, f, g, h, l, p, t, s, w, y, A, D) {
    a = this;
    return a.v.Vb ? a.v.Vb(b, c, d, e, f, g, h, l, p, t, s, w, y, A, D) : a.v.call(null, b, c, d, e, f, g, h, l, p, t, s, w, y, A, D);
  }
  function h(a, b, c, d, e, f, g, h, l, p, t, s, w, y, A) {
    a = this;
    return a.v.Ub ? a.v.Ub(b, c, d, e, f, g, h, l, p, t, s, w, y, A) : a.v.call(null, b, c, d, e, f, g, h, l, p, t, s, w, y, A);
  }
  function l(a, b, c, d, e, f, g, h, l, p, t, s, w, y) {
    a = this;
    return a.v.Tb ? a.v.Tb(b, c, d, e, f, g, h, l, p, t, s, w, y) : a.v.call(null, b, c, d, e, f, g, h, l, p, t, s, w, y);
  }
  function p(a, b, c, d, e, f, g, h, l, p, t, s, w) {
    a = this;
    return a.v.Sb ? a.v.Sb(b, c, d, e, f, g, h, l, p, t, s, w) : a.v.call(null, b, c, d, e, f, g, h, l, p, t, s, w);
  }
  function t(a, b, c, d, e, f, g, h, l, p, t, s) {
    a = this;
    return a.v.Rb ? a.v.Rb(b, c, d, e, f, g, h, l, p, t, s) : a.v.call(null, b, c, d, e, f, g, h, l, p, t, s);
  }
  function s(a, b, c, d, e, f, g, h, l, p, t) {
    a = this;
    return a.v.Qb ? a.v.Qb(b, c, d, e, f, g, h, l, p, t) : a.v.call(null, b, c, d, e, f, g, h, l, p, t);
  }
  function w(a, b, c, d, e, f, g, h, l, p) {
    a = this;
    return a.v.bc ? a.v.bc(b, c, d, e, f, g, h, l, p) : a.v.call(null, b, c, d, e, f, g, h, l, p);
  }
  function A(a, b, c, d, e, f, g, h, l) {
    a = this;
    return a.v.ac ? a.v.ac(b, c, d, e, f, g, h, l) : a.v.call(null, b, c, d, e, f, g, h, l);
  }
  function y(a, b, c, d, e, f, g, h) {
    a = this;
    return a.v.bb ? a.v.bb(b, c, d, e, f, g, h) : a.v.call(null, b, c, d, e, f, g, h);
  }
  function D(a, b, c, d, e, f, g) {
    a = this;
    return a.v.ca ? a.v.ca(b, c, d, e, f, g) : a.v.call(null, b, c, d, e, f, g);
  }
  function G(a, b, c, d, e, f) {
    a = this;
    return a.v.J ? a.v.J(b, c, d, e, f) : a.v.call(null, b, c, d, e, f);
  }
  function J(a, b, c, d, e) {
    a = this;
    return a.v.p ? a.v.p(b, c, d, e) : a.v.call(null, b, c, d, e);
  }
  function L(a, b, c, d) {
    a = this;
    return a.v.j ? a.v.j(b, c, d) : a.v.call(null, b, c, d);
  }
  function N(a, b, c) {
    a = this;
    return a.v.h ? a.v.h(b, c) : a.v.call(null, b, c);
  }
  function $(a, b) {
    a = this;
    return a.v.g ? a.v.g(b) : a.v.call(null, b);
  }
  function ba(a) {
    a = this;
    return a.v.q ? a.v.q() : a.v.call(null);
  }
  var M = null, M = function(M, W, fa, ea, ta, na, Da, ya, Ba, Ga, oa, Qa, wa, ib, vb, Ma, Ua, ua, Jb, Cd, Ub, od) {
    switch(arguments.length) {
      case 1:
        return ba.call(this, M);
      case 2:
        return $.call(this, M, W);
      case 3:
        return N.call(this, M, W, fa);
      case 4:
        return L.call(this, M, W, fa, ea);
      case 5:
        return J.call(this, M, W, fa, ea, ta);
      case 6:
        return G.call(this, M, W, fa, ea, ta, na);
      case 7:
        return D.call(this, M, W, fa, ea, ta, na, Da);
      case 8:
        return y.call(this, M, W, fa, ea, ta, na, Da, ya);
      case 9:
        return A.call(this, M, W, fa, ea, ta, na, Da, ya, Ba);
      case 10:
        return w.call(this, M, W, fa, ea, ta, na, Da, ya, Ba, Ga);
      case 11:
        return s.call(this, M, W, fa, ea, ta, na, Da, ya, Ba, Ga, oa);
      case 12:
        return t.call(this, M, W, fa, ea, ta, na, Da, ya, Ba, Ga, oa, Qa);
      case 13:
        return p.call(this, M, W, fa, ea, ta, na, Da, ya, Ba, Ga, oa, Qa, wa);
      case 14:
        return l.call(this, M, W, fa, ea, ta, na, Da, ya, Ba, Ga, oa, Qa, wa, ib);
      case 15:
        return h.call(this, M, W, fa, ea, ta, na, Da, ya, Ba, Ga, oa, Qa, wa, ib, vb);
      case 16:
        return g.call(this, M, W, fa, ea, ta, na, Da, ya, Ba, Ga, oa, Qa, wa, ib, vb, Ma);
      case 17:
        return f.call(this, M, W, fa, ea, ta, na, Da, ya, Ba, Ga, oa, Qa, wa, ib, vb, Ma, Ua);
      case 18:
        return e.call(this, M, W, fa, ea, ta, na, Da, ya, Ba, Ga, oa, Qa, wa, ib, vb, Ma, Ua, ua);
      case 19:
        return d.call(this, M, W, fa, ea, ta, na, Da, ya, Ba, Ga, oa, Qa, wa, ib, vb, Ma, Ua, ua, Jb);
      case 20:
        return c.call(this, M, W, fa, ea, ta, na, Da, ya, Ba, Ga, oa, Qa, wa, ib, vb, Ma, Ua, ua, Jb, Cd);
      case 21:
        return b.call(this, M, W, fa, ea, ta, na, Da, ya, Ba, Ga, oa, Qa, wa, ib, vb, Ma, Ua, ua, Jb, Cd, Ub);
      case 22:
        return a.call(this, M, W, fa, ea, ta, na, Da, ya, Ba, Ga, oa, Qa, wa, ib, vb, Ma, Ua, ua, Jb, Cd, Ub, od);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  M.g = ba;
  M.h = $;
  M.j = N;
  M.p = L;
  M.J = J;
  M.ca = G;
  M.bb = D;
  M.ac = y;
  M.bc = A;
  M.Qb = w;
  M.Rb = s;
  M.Sb = t;
  M.Tb = p;
  M.Ub = l;
  M.Vb = h;
  M.Wb = g;
  M.Xb = f;
  M.Yb = e;
  M.Zb = d;
  M.$b = c;
  M.Cf = b;
  M.ld = a;
  return M;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(mb(b)));
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
k.J = function(a, b, c, d, e) {
  return this.v.J ? this.v.J(a, b, c, d, e) : this.v.call(null, a, b, c, d, e);
};
k.ca = function(a, b, c, d, e, f) {
  return this.v.ca ? this.v.ca(a, b, c, d, e, f) : this.v.call(null, a, b, c, d, e, f);
};
k.bb = function(a, b, c, d, e, f, g) {
  return this.v.bb ? this.v.bb(a, b, c, d, e, f, g) : this.v.call(null, a, b, c, d, e, f, g);
};
k.ac = function(a, b, c, d, e, f, g, h) {
  return this.v.ac ? this.v.ac(a, b, c, d, e, f, g, h) : this.v.call(null, a, b, c, d, e, f, g, h);
};
k.bc = function(a, b, c, d, e, f, g, h, l) {
  return this.v.bc ? this.v.bc(a, b, c, d, e, f, g, h, l) : this.v.call(null, a, b, c, d, e, f, g, h, l);
};
k.Qb = function(a, b, c, d, e, f, g, h, l, p) {
  return this.v.Qb ? this.v.Qb(a, b, c, d, e, f, g, h, l, p) : this.v.call(null, a, b, c, d, e, f, g, h, l, p);
};
k.Rb = function(a, b, c, d, e, f, g, h, l, p, t) {
  return this.v.Rb ? this.v.Rb(a, b, c, d, e, f, g, h, l, p, t) : this.v.call(null, a, b, c, d, e, f, g, h, l, p, t);
};
k.Sb = function(a, b, c, d, e, f, g, h, l, p, t, s) {
  return this.v.Sb ? this.v.Sb(a, b, c, d, e, f, g, h, l, p, t, s) : this.v.call(null, a, b, c, d, e, f, g, h, l, p, t, s);
};
k.Tb = function(a, b, c, d, e, f, g, h, l, p, t, s, w) {
  return this.v.Tb ? this.v.Tb(a, b, c, d, e, f, g, h, l, p, t, s, w) : this.v.call(null, a, b, c, d, e, f, g, h, l, p, t, s, w);
};
k.Ub = function(a, b, c, d, e, f, g, h, l, p, t, s, w, A) {
  return this.v.Ub ? this.v.Ub(a, b, c, d, e, f, g, h, l, p, t, s, w, A) : this.v.call(null, a, b, c, d, e, f, g, h, l, p, t, s, w, A);
};
k.Vb = function(a, b, c, d, e, f, g, h, l, p, t, s, w, A, y) {
  return this.v.Vb ? this.v.Vb(a, b, c, d, e, f, g, h, l, p, t, s, w, A, y) : this.v.call(null, a, b, c, d, e, f, g, h, l, p, t, s, w, A, y);
};
k.Wb = function(a, b, c, d, e, f, g, h, l, p, t, s, w, A, y, D) {
  return this.v.Wb ? this.v.Wb(a, b, c, d, e, f, g, h, l, p, t, s, w, A, y, D) : this.v.call(null, a, b, c, d, e, f, g, h, l, p, t, s, w, A, y, D);
};
k.Xb = function(a, b, c, d, e, f, g, h, l, p, t, s, w, A, y, D, G) {
  return this.v.Xb ? this.v.Xb(a, b, c, d, e, f, g, h, l, p, t, s, w, A, y, D, G) : this.v.call(null, a, b, c, d, e, f, g, h, l, p, t, s, w, A, y, D, G);
};
k.Yb = function(a, b, c, d, e, f, g, h, l, p, t, s, w, A, y, D, G, J) {
  return this.v.Yb ? this.v.Yb(a, b, c, d, e, f, g, h, l, p, t, s, w, A, y, D, G, J) : this.v.call(null, a, b, c, d, e, f, g, h, l, p, t, s, w, A, y, D, G, J);
};
k.Zb = function(a, b, c, d, e, f, g, h, l, p, t, s, w, A, y, D, G, J, L) {
  return this.v.Zb ? this.v.Zb(a, b, c, d, e, f, g, h, l, p, t, s, w, A, y, D, G, J, L) : this.v.call(null, a, b, c, d, e, f, g, h, l, p, t, s, w, A, y, D, G, J, L);
};
k.$b = function(a, b, c, d, e, f, g, h, l, p, t, s, w, A, y, D, G, J, L, N) {
  return this.v.$b ? this.v.$b(a, b, c, d, e, f, g, h, l, p, t, s, w, A, y, D, G, J, L, N) : this.v.call(null, a, b, c, d, e, f, g, h, l, p, t, s, w, A, y, D, G, J, L, N);
};
k.Cf = function(a, b, c, d, e, f, g, h, l, p, t, s, w, A, y, D, G, J, L, N, $) {
  var ba = this.v;
  return R.ld ? R.ld(ba, a, b, c, d, e, f, g, h, l, p, t, s, w, A, y, D, G, J, L, N, $) : R.call(null, ba, a, b, c, d, e, f, g, h, l, p, t, s, w, A, y, D, G, J, L, N, $);
};
k.zf = !0;
k.I = function(a, b) {
  return new ge(this.v, b);
};
k.H = function() {
  return this.C;
};
function Nd(a, b) {
  return fe(a) && !(a ? a.t & 262144 || a.Nf || (a.t ? 0 : hb(fc, a)) : hb(fc, a)) ? new ge(a, b) : null == a ? null : gc(a, b);
}
function he(a) {
  var b = null != a;
  return(b ? a ? a.t & 131072 || a.Ff || (a.t ? 0 : hb($b, a)) : hb($b, a) : b) ? ec(a) : null;
}
function ie(a) {
  return null == a ? null : Tb(a);
}
var je = function() {
  function a(a, b) {
    return null == a ? null : Sb(a, b);
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
          d = C(e), e = F(e);
        } else {
          return a;
        }
      }
    }
    a.A = 2;
    a.o = function(a) {
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
        return c.k(b, e, H(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.A = 2;
  b.o = c.o;
  b.g = function(a) {
    return a;
  };
  b.h = a;
  b.k = c.k;
  return b;
}();
function ke(a) {
  return null == a || gb(B(a));
}
function le(a) {
  return null == a ? !1 : a ? a.t & 8 || a.Xg ? !0 : a.t ? !1 : hb(tb, a) : hb(tb, a);
}
function me(a) {
  return null == a ? !1 : a ? a.t & 4096 || a.ah ? !0 : a.t ? !1 : hb(Rb, a) : hb(Rb, a);
}
function ne(a) {
  return a ? a.t & 16777216 || a.$g ? !0 : a.t ? !1 : hb(uc, a) : hb(uc, a);
}
function oe(a) {
  return null == a ? !1 : a ? a.t & 1024 || a.Yg ? !0 : a.t ? !1 : hb(Lb, a) : hb(Lb, a);
}
function pe(a) {
  return a ? a.t & 16384 || a.bh ? !0 : a.t ? !1 : hb(Wb, a) : hb(Wb, a);
}
function S(a) {
  return a ? a.G & 512 || a.Wg ? !0 : !1 : !1;
}
function qe(a) {
  var b = [];
  Ka(a, function(a, b) {
    return function(a, c) {
      return b.push(c);
    };
  }(a, b));
  return b;
}
function xe(a, b, c, d, e) {
  for (;0 !== e;) {
    c[d] = a[b], d += 1, e -= 1, b += 1;
  }
}
function ye(a, b, c, d, e) {
  b += e - 1;
  for (d += e - 1;0 !== e;) {
    c[d] = a[b], d -= 1, e -= 1, b -= 1;
  }
}
var ze = {};
function Ae(a) {
  return null == a ? !1 : a ? a.t & 64 || a.Wc ? !0 : a.t ? !1 : hb(xb, a) : hb(xb, a);
}
function Be(a) {
  return q(a) ? !0 : !1;
}
function Ce(a, b) {
  return P.j(a, b, ze) === ze ? !1 : !0;
}
function De(a, b) {
  var c;
  if (c = null != a) {
    c = a ? a.t & 512 || a.Vg ? !0 : a.t ? !1 : hb(Hb, a) : hb(Hb, a);
  }
  return c && Ce(a, b) ? new T(null, 2, 5, U, [b, P.h(a, b)], null) : null;
}
function nd(a, b) {
  if (a === b) {
    return 0;
  }
  if (null == a) {
    return-1;
  }
  if (null == b) {
    return 1;
  }
  if (jb(a) === jb(b)) {
    return a && (a.G & 2048 || a.jd) ? a.kd(null, b) : Ya(a, b);
  }
  throw Error("compare on non-nil objects of different types");
}
var Ee = function() {
  function a(a, b, c, g) {
    for (;;) {
      var h = nd(O.h(a, g), O.h(b, g));
      if (0 === h && g + 1 < c) {
        g += 1;
      } else {
        return h;
      }
    }
  }
  function b(a, b) {
    var f = K(a), g = K(b);
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
function Fe(a) {
  return md.h(a, nd) ? nd : function(b, c) {
    var d = a.h ? a.h(b, c) : a.call(null, b, c);
    return "number" === typeof d ? d : q(d) ? -1 : q(a.h ? a.h(c, b) : a.call(null, c, b)) ? 1 : 0;
  };
}
var He = function() {
  function a(a, b) {
    if (B(b)) {
      var c = Ge.g ? Ge.g(b) : Ge.call(null, b), g = Fe(a);
      Za(c, g);
      return B(c);
    }
    return sd;
  }
  function b(a) {
    return c.h(nd, a);
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
}(), Ie = function() {
  function a(a, b, c) {
    return He.h(function(c, f) {
      return Fe(b).call(null, a.g ? a.g(c) : a.call(null, c), a.g ? a.g(f) : a.call(null, f));
    }, c);
  }
  function b(a, b) {
    return c.j(a, nd, b);
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
}(), Od = function() {
  function a(a, b, c) {
    for (c = B(c);;) {
      if (c) {
        var g = C(c);
        b = a.h ? a.h(b, g) : a.call(null, b, g);
        if (Ed(b)) {
          return Zb(b);
        }
        c = F(c);
      } else {
        return b;
      }
    }
  }
  function b(a, b) {
    var c = B(b);
    if (c) {
      var g = C(c), c = F(c);
      return Je.j ? Je.j(a, g, c) : Je.call(null, a, g, c);
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
}(), Je = function() {
  function a(a, b, c) {
    return c && (c.t & 524288 || c.Hf) ? c.ia(null, a, b) : c instanceof Array ? Gd.j(c, a, b) : "string" === typeof c ? Gd.j(c, a, b) : hb(kc, c) ? lc.j(c, a, b) : Od.j(a, b, c);
  }
  function b(a, b) {
    return b && (b.t & 524288 || b.Hf) ? b.ha(null, a) : b instanceof Array ? Gd.h(b, a) : "string" === typeof b ? Gd.h(b, a) : hb(kc, b) ? lc.h(b, a) : Od.h(a, b);
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
function Ke(a, b, c) {
  return null != c ? mc(c, a, b) : b;
}
function Le(a) {
  return a;
}
var Me = function() {
  function a(a, b, c, g) {
    a = a.g ? a.g(b) : a.call(null, b);
    c = Je.j(a, c, g);
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
}(), Ne = function() {
  var a = null, b = function() {
    function b(a, c, g) {
      var h = null;
      2 < arguments.length && (h = H(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, a, c, h);
    }
    function d(b, c, d) {
      return Je.j(a, b + c, d);
    }
    b.A = 2;
    b.o = function(a) {
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
        return b.k(a, d, H(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.A = 2;
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
}(), Oe = function() {
  var a = null, b = function() {
    function b(a, c, g) {
      var h = null;
      2 < arguments.length && (h = H(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, a, c, h);
    }
    function d(b, c, d) {
      return Je.j(a, b * c, d);
    }
    b.A = 2;
    b.o = function(a) {
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
        return b.k(a, d, H(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.A = 2;
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
}(), Pe = function() {
  var a = null, b = function() {
    function a(c, f, g) {
      var h = null;
      2 < arguments.length && (h = H(Array.prototype.slice.call(arguments, 2), 0));
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
    a.A = 2;
    a.o = function(a) {
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
        return b.k(a, d, H(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.A = 2;
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
function Qe(a) {
  return a - 1;
}
var Re = function() {
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
      return Je.j(b, a > d ? a : d, e);
    }
    a.A = 2;
    a.o = function(a) {
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
        return c.k(b, e, H(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.A = 2;
  b.o = c.o;
  b.g = function(a) {
    return a;
  };
  b.h = a;
  b.k = c.k;
  return b;
}(), Se = function() {
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
      return Je.j(b, a < d ? a : d, e);
    }
    a.A = 2;
    a.o = function(a) {
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
        return c.k(b, e, H(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.A = 2;
  b.o = c.o;
  b.g = function(a) {
    return a;
  };
  b.h = a;
  b.k = c.k;
  return b;
}();
function Te(a) {
  return 0 <= a ? Math.floor.g ? Math.floor.g(a) : Math.floor.call(null, a) : Math.ceil.g ? Math.ceil.g(a) : Math.ceil.call(null, a);
}
function Ue(a) {
  return Te(a);
}
function Ve(a, b) {
  return Te((a - a % b) / b);
}
function We(a, b) {
  var c = Ve(a, b);
  return a - b * c;
}
var nf = function() {
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
function of(a) {
  return Te(nf.g(a));
}
function pf(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24;
}
function qf(a) {
  return 0 < a;
}
function rf(a) {
  return 0 === a;
}
function sf(a) {
  var b = 1;
  for (a = B(a);;) {
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
      1 < arguments.length && (h = H(Array.prototype.slice.call(arguments, 1), 0));
      return c.call(this, b, h);
    }
    function c(a, d) {
      for (var e = new Oa(b.g(a)), l = d;;) {
        if (q(l)) {
          e = e.append(b.g(C(l))), l = F(l);
        } else {
          return e.toString();
        }
      }
    }
    a.A = 1;
    a.o = function(a) {
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
        return c.k(b, H(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.A = 1;
  b.o = c.o;
  b.q = function() {
    return "";
  };
  b.g = a;
  b.k = c.k;
  return b;
}(), tf = function() {
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
function Kd(a, b) {
  var c;
  if (ne(b)) {
    if (Hd(a) && Hd(b) && K(a) !== K(b)) {
      c = !1;
    } else {
      a: {
        c = B(a);
        for (var d = B(b);;) {
          if (null == c) {
            c = null == d;
            break a;
          }
          if (null != d && md.h(C(c), C(d))) {
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
  return Be(c);
}
function uf(a) {
  var b = 0;
  for (a = B(a);;) {
    if (a) {
      var c = C(a), b = (b + (ed(function() {
        var a = c;
        return vf.g ? vf.g(a) : vf.call(null, a);
      }()) ^ ed(function() {
        var a = c;
        return wf.g ? wf.g(a) : wf.call(null, a);
      }()))) % 4503599627370496;
      a = F(a);
    } else {
      return b;
    }
  }
}
function xf(a, b, c, d, e) {
  this.C = a;
  this.first = b;
  this.fc = c;
  this.count = d;
  this.w = e;
  this.t = 65937646;
  this.G = 8192;
}
k = xf.prototype;
k.toString = function() {
  return Wc(this);
};
k.H = function() {
  return this.C;
};
k.wa = function() {
  return 1 === this.count ? null : this.fc;
};
k.T = function() {
  return this.count;
};
k.jc = function() {
  return this.first;
};
k.kc = function() {
  return zb(this);
};
k.Q = function() {
  var a = this.w;
  return null != a ? a : this.w = a = ud(this);
};
k.N = function(a, b) {
  return Kd(this, b);
};
k.aa = function() {
  return sd;
};
k.ha = function(a, b) {
  return Od.h(b, this);
};
k.ia = function(a, b, c) {
  return Od.j(b, c, this);
};
k.da = function() {
  return this.first;
};
k.sa = function() {
  return 1 === this.count ? sd : this.fc;
};
k.R = function() {
  return this;
};
k.I = function(a, b) {
  return new xf(b, this.first, this.fc, this.count, this.w);
};
k.S = function(a, b) {
  return new xf(this.C, b, this, this.count + 1, null);
};
function yf(a) {
  this.C = a;
  this.t = 65937614;
  this.G = 8192;
}
k = yf.prototype;
k.toString = function() {
  return Wc(this);
};
k.H = function() {
  return this.C;
};
k.wa = function() {
  return null;
};
k.T = function() {
  return 0;
};
k.jc = function() {
  return null;
};
k.kc = function() {
  throw Error("Can't pop empty list");
};
k.Q = function() {
  return 0;
};
k.N = function(a, b) {
  return Kd(this, b);
};
k.aa = function() {
  return this;
};
k.ha = function(a, b) {
  return Od.h(b, this);
};
k.ia = function(a, b, c) {
  return Od.j(b, c, this);
};
k.da = function() {
  return null;
};
k.sa = function() {
  return sd;
};
k.R = function() {
  return null;
};
k.I = function(a, b) {
  return new yf(b);
};
k.S = function(a, b) {
  return new xf(this.C, b, null, 1, null);
};
var sd = new yf(null);
function zf(a) {
  return(a ? a.t & 134217728 || a.Zg || (a.t ? 0 : hb(vc, a)) : hb(vc, a)) ? wc(a) : Je.j(be, sd, a);
}
var Af = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = H(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b;
    if (a instanceof rd && 0 === a.K) {
      b = a.m;
    } else {
      a: {
        for (b = [];;) {
          if (null != a) {
            b.push(a.da(null)), a = a.wa(null);
          } else {
            break a;
          }
        }
        b = void 0;
      }
    }
    a = b.length;
    for (var e = sd;;) {
      if (0 < a) {
        var f = a - 1, e = e.S(null, b[a - 1]);
        a = f;
      } else {
        return e;
      }
    }
  }
  a.A = 0;
  a.o = function(a) {
    a = B(a);
    return b(a);
  };
  a.k = b;
  return a;
}();
function Bf(a, b, c, d) {
  this.C = a;
  this.first = b;
  this.fc = c;
  this.w = d;
  this.t = 65929452;
  this.G = 8192;
}
k = Bf.prototype;
k.toString = function() {
  return Wc(this);
};
k.H = function() {
  return this.C;
};
k.wa = function() {
  return null == this.fc ? null : B(this.fc);
};
k.Q = function() {
  var a = this.w;
  return null != a ? a : this.w = a = ud(this);
};
k.N = function(a, b) {
  return Kd(this, b);
};
k.aa = function() {
  return Nd(sd, this.C);
};
k.ha = function(a, b) {
  return Od.h(b, this);
};
k.ia = function(a, b, c) {
  return Od.j(b, c, this);
};
k.da = function() {
  return this.first;
};
k.sa = function() {
  return null == this.fc ? sd : this.fc;
};
k.R = function() {
  return this;
};
k.I = function(a, b) {
  return new Bf(b, this.first, this.fc, this.w);
};
k.S = function(a, b) {
  return new Bf(null, b, this, this.w);
};
function Ld(a, b) {
  var c = null == b;
  return(c ? c : b && (b.t & 64 || b.Wc)) ? new Bf(null, a, b, null) : new Bf(null, a, B(b), null);
}
function V(a, b, c, d) {
  this.Hb = a;
  this.name = b;
  this.V = c;
  this.Dc = d;
  this.t = 2153775105;
  this.G = 4096;
}
k = V.prototype;
k.O = function(a, b) {
  return xc(b, ":" + u.g(this.V));
};
k.Q = function() {
  var a = this.Dc;
  return null != a ? a : this.Dc = a = fd(ad(this.name), dd(this.Hb)) + 2654435769 | 0;
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
  return this.call.apply(this, [this].concat(mb(b)));
};
k.g = function(a) {
  return P.h(a, this);
};
k.h = function(a, b) {
  return P.j(a, this, b);
};
k.N = function(a, b) {
  return b instanceof V ? this.V === b.V : !1;
};
k.toString = function() {
  return ":" + u.g(this.V);
};
function X(a, b) {
  return a === b ? !0 : a instanceof V && b instanceof V ? a.V === b.V : !1;
}
var Df = function() {
  function a(a, b) {
    return new V(a, b, "" + u.g(q(a) ? "" + u.g(a) + "/" : null) + u.g(b), null);
  }
  function b(a) {
    if (a instanceof V) {
      return a;
    }
    if (a instanceof pd) {
      var b;
      if (a && (a.G & 4096 || a.Gf)) {
        b = a.Hb;
      } else {
        throw Error("Doesn't support namespace: " + u.g(a));
      }
      return new V(b, Cf.g ? Cf.g(a) : Cf.call(null, a), a.oc, null);
    }
    return "string" === typeof a ? (b = a.split("/"), 2 === b.length ? new V(b[0], b[1], a, null) : new V(null, b[0], a, null)) : null;
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
function Ef(a, b, c, d) {
  this.C = a;
  this.Oc = b;
  this.ba = c;
  this.w = d;
  this.G = 0;
  this.t = 32374988;
}
k = Ef.prototype;
k.toString = function() {
  return Wc(this);
};
function Ff(a) {
  null != a.Oc && (a.ba = a.Oc.q ? a.Oc.q() : a.Oc.call(null), a.Oc = null);
  return a.ba;
}
k.H = function() {
  return this.C;
};
k.wa = function() {
  qc(this);
  return null == this.ba ? null : F(this.ba);
};
k.Q = function() {
  var a = this.w;
  return null != a ? a : this.w = a = ud(this);
};
k.N = function(a, b) {
  return Kd(this, b);
};
k.aa = function() {
  return Nd(sd, this.C);
};
k.ha = function(a, b) {
  return Od.h(b, this);
};
k.ia = function(a, b, c) {
  return Od.j(b, c, this);
};
k.da = function() {
  qc(this);
  return null == this.ba ? null : C(this.ba);
};
k.sa = function() {
  qc(this);
  return null != this.ba ? E(this.ba) : sd;
};
k.R = function() {
  Ff(this);
  if (null == this.ba) {
    return null;
  }
  for (var a = this.ba;;) {
    if (a instanceof Ef) {
      a = Ff(a);
    } else {
      return this.ba = a, B(this.ba);
    }
  }
};
k.I = function(a, b) {
  return new Ef(b, this.Oc, this.ba, this.w);
};
k.S = function(a, b) {
  return Ld(b, this);
};
function Gf(a, b) {
  this.Sa = a;
  this.end = b;
  this.G = 0;
  this.t = 2;
}
Gf.prototype.T = function() {
  return this.end;
};
Gf.prototype.add = function(a) {
  this.Sa[this.end] = a;
  return this.end += 1;
};
Gf.prototype.Pb = function() {
  var a = new Zf(this.Sa, 0, this.end);
  this.Sa = null;
  return a;
};
function $f(a) {
  return new Gf(Array(a), 0);
}
function Zf(a, b, c) {
  this.m = a;
  this.ua = b;
  this.end = c;
  this.G = 0;
  this.t = 524306;
}
k = Zf.prototype;
k.ha = function(a, b) {
  return Gd.p(this.m, b, this.m[this.ua], this.ua + 1);
};
k.ia = function(a, b, c) {
  return Gd.p(this.m, b, c, this.ua);
};
k.xe = function() {
  if (this.ua === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new Zf(this.m, this.ua + 1, this.end);
};
k.F = function(a, b) {
  return this.m[this.ua + b];
};
k.Ha = function(a, b, c) {
  return 0 <= b && b < this.end - this.ua ? this.m[this.ua + b] : c;
};
k.T = function() {
  return this.end - this.ua;
};
var ag = function() {
  function a(a, b, c) {
    return new Zf(a, b, c);
  }
  function b(a, b) {
    return new Zf(a, b, a.length);
  }
  function c(a) {
    return new Zf(a, 0, a.length);
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
function bg(a, b, c, d) {
  this.Pb = a;
  this.xb = b;
  this.C = c;
  this.w = d;
  this.t = 31850732;
  this.G = 1536;
}
k = bg.prototype;
k.toString = function() {
  return Wc(this);
};
k.H = function() {
  return this.C;
};
k.wa = function() {
  if (1 < pb(this.Pb)) {
    return new bg(Pc(this.Pb), this.xb, this.C, null);
  }
  var a = qc(this.xb);
  return null == a ? null : a;
};
k.Q = function() {
  var a = this.w;
  return null != a ? a : this.w = a = ud(this);
};
k.N = function(a, b) {
  return Kd(this, b);
};
k.aa = function() {
  return Nd(sd, this.C);
};
k.da = function() {
  return v.h(this.Pb, 0);
};
k.sa = function() {
  return 1 < pb(this.Pb) ? new bg(Pc(this.Pb), this.xb, this.C, null) : null == this.xb ? sd : this.xb;
};
k.R = function() {
  return this;
};
k.Hd = function() {
  return this.Pb;
};
k.Id = function() {
  return null == this.xb ? sd : this.xb;
};
k.I = function(a, b) {
  return new bg(this.Pb, this.xb, b, this.w);
};
k.S = function(a, b) {
  return Ld(b, this);
};
k.Gd = function() {
  return null == this.xb ? null : this.xb;
};
function cg(a, b) {
  return 0 === pb(a) ? b : new bg(a, b, null, null);
}
function dg(a, b) {
  a.add(b);
}
function eg(a) {
  return a.Pb();
}
function Ge(a) {
  for (var b = [];;) {
    if (B(a)) {
      b.push(C(a)), a = F(a);
    } else {
      return b;
    }
  }
}
function fg(a, b) {
  if (Hd(a)) {
    return K(a);
  }
  for (var c = a, d = b, e = 0;;) {
    if (0 < d && B(c)) {
      c = F(c), d -= 1, e += 1;
    } else {
      return e;
    }
  }
}
var hg = function gg(b) {
  return null == b ? null : null == F(b) ? B(C(b)) : Ld(C(b), gg(F(b)));
}, ig = function() {
  function a(a, b) {
    return new Ef(null, function() {
      var c = B(a);
      return c ? S(c) ? cg(x(c), d.h(z(c), b)) : Ld(C(c), d.h(E(c), b)) : b;
    }, null, null);
  }
  function b(a) {
    return new Ef(null, function() {
      return a;
    }, null, null);
  }
  function c() {
    return new Ef(null, function() {
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
      return function s(a, b) {
        return new Ef(null, function() {
          var c = B(a);
          return c ? S(c) ? cg(x(c), s(z(c), b)) : Ld(C(c), s(E(c), b)) : q(b) ? s(C(b), F(b)) : null;
        }, null, null);
      }(d.h(a, c), e);
    }
    a.A = 2;
    a.o = function(a) {
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
        return e.k(d, g, H(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.A = 2;
  d.o = e.o;
  d.q = c;
  d.g = b;
  d.h = a;
  d.k = e.k;
  return d;
}(), jg = function() {
  function a(a, b, c, d) {
    return Ld(a, Ld(b, Ld(c, d)));
  }
  function b(a, b, c) {
    return Ld(a, Ld(b, c));
  }
  var c = null, d = function() {
    function a(c, d, e, p, t) {
      var s = null;
      4 < arguments.length && (s = H(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, p, s);
    }
    function b(a, c, d, e, f) {
      return Ld(a, Ld(c, Ld(d, Ld(e, hg(f)))));
    }
    a.A = 4;
    a.o = function(a) {
      var c = C(a);
      a = F(a);
      var d = C(a);
      a = F(a);
      var e = C(a);
      a = F(a);
      var t = C(a);
      a = E(a);
      return b(c, d, e, t, a);
    };
    a.k = b;
    return a;
  }(), c = function(c, f, g, h, l) {
    switch(arguments.length) {
      case 1:
        return B(c);
      case 2:
        return Ld(c, f);
      case 3:
        return b.call(this, c, f, g);
      case 4:
        return a.call(this, c, f, g, h);
      default:
        return d.k(c, f, g, h, H(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.A = 4;
  c.o = d.o;
  c.g = function(a) {
    return B(a);
  };
  c.h = function(a, b) {
    return Ld(a, b);
  };
  c.j = b;
  c.p = a;
  c.k = d.k;
  return c;
}();
function kg(a) {
  return Gc(a);
}
function lg(a) {
  return Ic(a);
}
var mg = function() {
  function a() {
    return Gc(ae);
  }
  var b = null, c = function() {
    function a(c, d, h) {
      var l = null;
      2 < arguments.length && (l = H(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      for (;;) {
        if (a = Hc(a, c), q(d)) {
          c = C(d), d = F(d);
        } else {
          return a;
        }
      }
    }
    a.A = 2;
    a.o = function(a) {
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
        return Hc(b, e);
      default:
        return c.k(b, e, H(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.A = 2;
  b.o = c.o;
  b.q = a;
  b.g = function(a) {
    return a;
  };
  b.h = function(a, b) {
    return Hc(a, b);
  };
  b.k = c.k;
  return b;
}(), ng = function() {
  var a = null, b = function() {
    function a(c, f, g, h) {
      var l = null;
      3 < arguments.length && (l = H(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, f, g, l);
    }
    function b(a, c, d, h) {
      for (;;) {
        if (a = Jc(a, c, d), q(h)) {
          c = C(h), d = Pd(h), h = F(F(h));
        } else {
          return a;
        }
      }
    }
    a.A = 3;
    a.o = function(a) {
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
        return Jc(a, d, e);
      default:
        return b.k(a, d, e, H(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.A = 3;
  a.o = b.o;
  a.j = function(a, b, e) {
    return Jc(a, b, e);
  };
  a.k = b.k;
  return a;
}();
function og(a, b, c) {
  var d = B(c);
  if (0 === b) {
    return a.q ? a.q() : a.call(null);
  }
  c = yb(d);
  var e = zb(d);
  if (1 === b) {
    return a.g ? a.g(c) : a.g ? a.g(c) : a.call(null, c);
  }
  var d = yb(e), f = zb(e);
  if (2 === b) {
    return a.h ? a.h(c, d) : a.h ? a.h(c, d) : a.call(null, c, d);
  }
  var e = yb(f), g = zb(f);
  if (3 === b) {
    return a.j ? a.j(c, d, e) : a.j ? a.j(c, d, e) : a.call(null, c, d, e);
  }
  var f = yb(g), h = zb(g);
  if (4 === b) {
    return a.p ? a.p(c, d, e, f) : a.p ? a.p(c, d, e, f) : a.call(null, c, d, e, f);
  }
  var g = yb(h), l = zb(h);
  if (5 === b) {
    return a.J ? a.J(c, d, e, f, g) : a.J ? a.J(c, d, e, f, g) : a.call(null, c, d, e, f, g);
  }
  var h = yb(l), p = zb(l);
  if (6 === b) {
    return a.ca ? a.ca(c, d, e, f, g, h) : a.ca ? a.ca(c, d, e, f, g, h) : a.call(null, c, d, e, f, g, h);
  }
  var l = yb(p), t = zb(p);
  if (7 === b) {
    return a.bb ? a.bb(c, d, e, f, g, h, l) : a.bb ? a.bb(c, d, e, f, g, h, l) : a.call(null, c, d, e, f, g, h, l);
  }
  var p = yb(t), s = zb(t);
  if (8 === b) {
    return a.ac ? a.ac(c, d, e, f, g, h, l, p) : a.ac ? a.ac(c, d, e, f, g, h, l, p) : a.call(null, c, d, e, f, g, h, l, p);
  }
  var t = yb(s), w = zb(s);
  if (9 === b) {
    return a.bc ? a.bc(c, d, e, f, g, h, l, p, t) : a.bc ? a.bc(c, d, e, f, g, h, l, p, t) : a.call(null, c, d, e, f, g, h, l, p, t);
  }
  var s = yb(w), A = zb(w);
  if (10 === b) {
    return a.Qb ? a.Qb(c, d, e, f, g, h, l, p, t, s) : a.Qb ? a.Qb(c, d, e, f, g, h, l, p, t, s) : a.call(null, c, d, e, f, g, h, l, p, t, s);
  }
  var w = yb(A), y = zb(A);
  if (11 === b) {
    return a.Rb ? a.Rb(c, d, e, f, g, h, l, p, t, s, w) : a.Rb ? a.Rb(c, d, e, f, g, h, l, p, t, s, w) : a.call(null, c, d, e, f, g, h, l, p, t, s, w);
  }
  var A = yb(y), D = zb(y);
  if (12 === b) {
    return a.Sb ? a.Sb(c, d, e, f, g, h, l, p, t, s, w, A) : a.Sb ? a.Sb(c, d, e, f, g, h, l, p, t, s, w, A) : a.call(null, c, d, e, f, g, h, l, p, t, s, w, A);
  }
  var y = yb(D), G = zb(D);
  if (13 === b) {
    return a.Tb ? a.Tb(c, d, e, f, g, h, l, p, t, s, w, A, y) : a.Tb ? a.Tb(c, d, e, f, g, h, l, p, t, s, w, A, y) : a.call(null, c, d, e, f, g, h, l, p, t, s, w, A, y);
  }
  var D = yb(G), J = zb(G);
  if (14 === b) {
    return a.Ub ? a.Ub(c, d, e, f, g, h, l, p, t, s, w, A, y, D) : a.Ub ? a.Ub(c, d, e, f, g, h, l, p, t, s, w, A, y, D) : a.call(null, c, d, e, f, g, h, l, p, t, s, w, A, y, D);
  }
  var G = yb(J), L = zb(J);
  if (15 === b) {
    return a.Vb ? a.Vb(c, d, e, f, g, h, l, p, t, s, w, A, y, D, G) : a.Vb ? a.Vb(c, d, e, f, g, h, l, p, t, s, w, A, y, D, G) : a.call(null, c, d, e, f, g, h, l, p, t, s, w, A, y, D, G);
  }
  var J = yb(L), N = zb(L);
  if (16 === b) {
    return a.Wb ? a.Wb(c, d, e, f, g, h, l, p, t, s, w, A, y, D, G, J) : a.Wb ? a.Wb(c, d, e, f, g, h, l, p, t, s, w, A, y, D, G, J) : a.call(null, c, d, e, f, g, h, l, p, t, s, w, A, y, D, G, J);
  }
  var L = yb(N), $ = zb(N);
  if (17 === b) {
    return a.Xb ? a.Xb(c, d, e, f, g, h, l, p, t, s, w, A, y, D, G, J, L) : a.Xb ? a.Xb(c, d, e, f, g, h, l, p, t, s, w, A, y, D, G, J, L) : a.call(null, c, d, e, f, g, h, l, p, t, s, w, A, y, D, G, J, L);
  }
  var N = yb($), ba = zb($);
  if (18 === b) {
    return a.Yb ? a.Yb(c, d, e, f, g, h, l, p, t, s, w, A, y, D, G, J, L, N) : a.Yb ? a.Yb(c, d, e, f, g, h, l, p, t, s, w, A, y, D, G, J, L, N) : a.call(null, c, d, e, f, g, h, l, p, t, s, w, A, y, D, G, J, L, N);
  }
  $ = yb(ba);
  ba = zb(ba);
  if (19 === b) {
    return a.Zb ? a.Zb(c, d, e, f, g, h, l, p, t, s, w, A, y, D, G, J, L, N, $) : a.Zb ? a.Zb(c, d, e, f, g, h, l, p, t, s, w, A, y, D, G, J, L, N, $) : a.call(null, c, d, e, f, g, h, l, p, t, s, w, A, y, D, G, J, L, N, $);
  }
  var M = yb(ba);
  zb(ba);
  if (20 === b) {
    return a.$b ? a.$b(c, d, e, f, g, h, l, p, t, s, w, A, y, D, G, J, L, N, $, M) : a.$b ? a.$b(c, d, e, f, g, h, l, p, t, s, w, A, y, D, G, J, L, N, $, M) : a.call(null, c, d, e, f, g, h, l, p, t, s, w, A, y, D, G, J, L, N, $, M);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var R = function() {
  function a(a, b, c, d, e) {
    b = jg.p(b, c, d, e);
    c = a.A;
    return a.o ? (d = fg(b, c + 1), d <= c ? og(a, d, b) : a.o(b)) : a.apply(a, Ge(b));
  }
  function b(a, b, c, d) {
    b = jg.j(b, c, d);
    c = a.A;
    return a.o ? (d = fg(b, c + 1), d <= c ? og(a, d, b) : a.o(b)) : a.apply(a, Ge(b));
  }
  function c(a, b, c) {
    b = jg.h(b, c);
    c = a.A;
    if (a.o) {
      var d = fg(b, c + 1);
      return d <= c ? og(a, d, b) : a.o(b);
    }
    return a.apply(a, Ge(b));
  }
  function d(a, b) {
    var c = a.A;
    if (a.o) {
      var d = fg(b, c + 1);
      return d <= c ? og(a, d, b) : a.o(b);
    }
    return a.apply(a, Ge(b));
  }
  var e = null, f = function() {
    function a(c, d, e, f, g, A) {
      var y = null;
      5 < arguments.length && (y = H(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, e, f, g, y);
    }
    function b(a, c, d, e, f, g) {
      c = Ld(c, Ld(d, Ld(e, Ld(f, hg(g)))));
      d = a.A;
      return a.o ? (e = fg(c, d + 1), e <= d ? og(a, e, c) : a.o(c)) : a.apply(a, Ge(c));
    }
    a.A = 5;
    a.o = function(a) {
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
  }(), e = function(e, h, l, p, t, s) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, h);
      case 3:
        return c.call(this, e, h, l);
      case 4:
        return b.call(this, e, h, l, p);
      case 5:
        return a.call(this, e, h, l, p, t);
      default:
        return f.k(e, h, l, p, t, H(arguments, 5));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.A = 5;
  e.o = f.o;
  e.h = d;
  e.j = c;
  e.p = b;
  e.J = a;
  e.k = f.k;
  return e;
}(), pg = function() {
  function a(a, b, c, d, e, f) {
    var g = Nd, y = he(a);
    b = b.J ? b.J(y, c, d, e, f) : b.call(null, y, c, d, e, f);
    return g(a, b);
  }
  function b(a, b, c, d, e) {
    var f = Nd, g = he(a);
    b = b.p ? b.p(g, c, d, e) : b.call(null, g, c, d, e);
    return f(a, b);
  }
  function c(a, b, c, d) {
    var e = Nd, f = he(a);
    b = b.j ? b.j(f, c, d) : b.call(null, f, c, d);
    return e(a, b);
  }
  function d(a, b, c) {
    var d = Nd, e = he(a);
    b = b.h ? b.h(e, c) : b.call(null, e, c);
    return d(a, b);
  }
  function e(a, b) {
    var c = Nd, d;
    d = he(a);
    d = b.g ? b.g(d) : b.call(null, d);
    return c(a, d);
  }
  var f = null, g = function() {
    function a(c, d, e, f, g, h, D) {
      var G = null;
      6 < arguments.length && (G = H(Array.prototype.slice.call(arguments, 6), 0));
      return b.call(this, c, d, e, f, g, h, G);
    }
    function b(a, c, d, e, f, g, h) {
      return Nd(a, R.k(c, he(a), d, e, f, H([g, h], 0)));
    }
    a.A = 6;
    a.o = function(a) {
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
  }(), f = function(f, l, p, t, s, w, A) {
    switch(arguments.length) {
      case 2:
        return e.call(this, f, l);
      case 3:
        return d.call(this, f, l, p);
      case 4:
        return c.call(this, f, l, p, t);
      case 5:
        return b.call(this, f, l, p, t, s);
      case 6:
        return a.call(this, f, l, p, t, s, w);
      default:
        return g.k(f, l, p, t, s, w, H(arguments, 6));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  f.A = 6;
  f.o = g.o;
  f.h = e;
  f.j = d;
  f.p = c;
  f.J = b;
  f.ca = a;
  f.k = g.k;
  return f;
}(), qg = function() {
  function a(a, b) {
    return!md.h(a, b);
  }
  var b = null, c = function() {
    function a(c, d, h) {
      var l = null;
      2 < arguments.length && (l = H(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      return gb(R.p(md, a, c, d));
    }
    a.A = 2;
    a.o = function(a) {
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
        return c.k(b, e, H(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.A = 2;
  b.o = c.o;
  b.g = function() {
    return!1;
  };
  b.h = a;
  b.k = c.k;
  return b;
}();
function rg(a) {
  return B(a) ? a : null;
}
function sg(a, b) {
  for (;;) {
    if (null == B(b)) {
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
function tg(a, b) {
  for (;;) {
    if (B(b)) {
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
function ug(a) {
  if ("number" === typeof a && gb(isNaN(a)) && Infinity !== a && parseFloat(a) === parseInt(a, 10)) {
    return 0 === (a & 1);
  }
  throw Error("Argument must be an integer: " + u.g(a));
}
function vg(a) {
  return function() {
    function b(b, c) {
      return gb(a.h ? a.h(b, c) : a.call(null, b, c));
    }
    function c(b) {
      return gb(a.g ? a.g(b) : a.call(null, b));
    }
    function d() {
      return gb(a.q ? a.q() : a.call(null));
    }
    var e = null, f = function() {
      function b(a, d, e) {
        var f = null;
        2 < arguments.length && (f = H(Array.prototype.slice.call(arguments, 2), 0));
        return c.call(this, a, d, f);
      }
      function c(b, d, e) {
        return gb(R.p(a, b, d, e));
      }
      b.A = 2;
      b.o = function(a) {
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
          return f.k(a, e, H(arguments, 2));
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    e.A = 2;
    e.o = f.o;
    e.q = d;
    e.g = c;
    e.h = b;
    e.k = f.k;
    return e;
  }();
}
function wg(a) {
  return function() {
    function b(b) {
      0 < arguments.length && H(Array.prototype.slice.call(arguments, 0), 0);
      return a;
    }
    b.A = 0;
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
var xg = function() {
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
      function t() {
        var d;
        d = c.q ? c.q() : c.call(null);
        d = b.g ? b.g(d) : b.call(null, d);
        return a.g ? a.g(d) : a.call(null, d);
      }
      var s = null, w = function() {
        function d(a, b, c, e) {
          var f = null;
          3 < arguments.length && (f = H(Array.prototype.slice.call(arguments, 3), 0));
          return h.call(this, a, b, c, f);
        }
        function h(d, l, p, t) {
          d = R.J(c, d, l, p, t);
          d = b.g ? b.g(d) : b.call(null, d);
          return a.g ? a.g(d) : a.call(null, d);
        }
        d.A = 3;
        d.o = function(a) {
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
      }(), s = function(a, b, c, e) {
        switch(arguments.length) {
          case 0:
            return t.call(this);
          case 1:
            return p.call(this, a);
          case 2:
            return l.call(this, a, b);
          case 3:
            return d.call(this, a, b, c);
          default:
            return w.k(a, b, c, H(arguments, 3));
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      s.A = 3;
      s.o = w.o;
      s.q = t;
      s.g = p;
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
      function p() {
        var c = b.q ? b.q() : b.call(null);
        return a.g ? a.g(c) : a.call(null, c);
      }
      var t = null, s = function() {
        function c(a, b, e, f) {
          var g = null;
          3 < arguments.length && (g = H(Array.prototype.slice.call(arguments, 3), 0));
          return d.call(this, a, b, e, g);
        }
        function d(c, g, h, l) {
          c = R.J(b, c, g, h, l);
          return a.g ? a.g(c) : a.call(null, c);
        }
        c.A = 3;
        c.o = function(a) {
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
      }(), t = function(a, b, e, f) {
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
            return s.k(a, b, e, H(arguments, 3));
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      t.A = 3;
      t.o = s.o;
      t.q = p;
      t.g = l;
      t.h = d;
      t.j = c;
      t.k = s.k;
      return t;
    }();
  }
  var c = null, d = function() {
    function a(c, d, e, p) {
      var t = null;
      3 < arguments.length && (t = H(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, d, e, t);
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
            b = R.h(C(a), b);
            for (var d = F(a);;) {
              if (d) {
                b = C(d).call(null, b), d = F(d);
              } else {
                return b;
              }
            }
          }
          b.A = 0;
          b.o = function(a) {
            a = B(a);
            return c(a);
          };
          b.k = c;
          return b;
        }();
      }(zf(jg.p(a, c, d, e)));
    }
    a.A = 3;
    a.o = function(a) {
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
        return Le;
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
  c.A = 3;
  c.o = d.o;
  c.q = function() {
    return Le;
  };
  c.g = function(a) {
    return a;
  };
  c.h = b;
  c.j = a;
  c.k = d.k;
  return c;
}(), yg = function() {
  function a(a, b, c, d) {
    return function() {
      function e(a) {
        var b = null;
        0 < arguments.length && (b = H(Array.prototype.slice.call(arguments, 0), 0));
        return t.call(this, b);
      }
      function t(e) {
        return R.J(a, b, c, d, e);
      }
      e.A = 0;
      e.o = function(a) {
        a = B(a);
        return t(a);
      };
      e.k = t;
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
        return R.p(a, b, c, d);
      }
      d.A = 0;
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
        return R.j(a, b, c);
      }
      c.A = 0;
      c.o = function(a) {
        a = B(a);
        return d(a);
      };
      c.k = d;
      return c;
    }();
  }
  var d = null, e = function() {
    function a(c, d, e, f, s) {
      var w = null;
      4 < arguments.length && (w = H(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, w);
    }
    function b(a, c, d, e, f) {
      return function() {
        function b(a) {
          var c = null;
          0 < arguments.length && (c = H(Array.prototype.slice.call(arguments, 0), 0));
          return g.call(this, c);
        }
        function g(b) {
          return R.J(a, c, d, e, ig.h(f, b));
        }
        b.A = 0;
        b.o = function(a) {
          a = B(a);
          return g(a);
        };
        b.k = g;
        return b;
      }();
    }
    a.A = 4;
    a.o = function(a) {
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
        return e.k(d, g, h, l, H(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.A = 4;
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
function zg(a, b) {
  return function d(b, f) {
    return new Ef(null, function() {
      var g = B(f);
      if (g) {
        if (S(g)) {
          for (var h = x(g), l = K(h), p = $f(l), t = 0;;) {
            if (t < l) {
              dg(p, function() {
                var d = b + t, f = v.h(h, t);
                return a.h ? a.h(d, f) : a.call(null, d, f);
              }()), t += 1;
            } else {
              break;
            }
          }
          return cg(eg(p), d(b + l, z(g)));
        }
        return Ld(function() {
          var d = C(g);
          return a.h ? a.h(b, d) : a.call(null, b, d);
        }(), d(b + 1, E(g)));
      }
      return null;
    }, null, null);
  }(0, b);
}
var Ag = function() {
  function a(a, b) {
    return new Ef(null, function() {
      var f = B(b);
      if (f) {
        if (S(f)) {
          for (var g = x(f), h = K(g), l = $f(h), p = 0;;) {
            if (p < h) {
              var t = function() {
                var b = v.h(g, p);
                return a.g ? a.g(b) : a.call(null, b);
              }();
              null != t && l.add(t);
              p += 1;
            } else {
              break;
            }
          }
          return cg(eg(l), c.h(a, z(f)));
        }
        h = function() {
          var b = C(f);
          return a.g ? a.g(b) : a.call(null, b);
        }();
        return null == h ? c.h(a, E(f)) : Ld(h, c.h(a, E(f)));
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
function Bg(a, b, c, d) {
  this.state = a;
  this.C = b;
  this.Pg = c;
  this.ea = d;
  this.t = 6455296;
  this.G = 16386;
}
k = Bg.prototype;
k.Q = function() {
  return this[ma] || (this[ma] = ++pa);
};
k.Kd = function(a, b, c) {
  for (var d = B(this.ea), e = null, f = 0, g = 0;;) {
    if (g < f) {
      a = e.F(null, g);
      var h = O.j(a, 0, null);
      a = O.j(a, 1, null);
      var l = b, p = c;
      a.p ? a.p(h, this, l, p) : a.call(null, h, this, l, p);
      g += 1;
    } else {
      if (a = B(d)) {
        d = a, S(d) ? (e = x(d), d = z(d), a = e, f = K(e), e = a) : (a = C(d), h = O.j(a, 0, null), a = O.j(a, 1, null), e = h, f = b, g = c, a.p ? a.p(e, this, f, g) : a.call(null, e, this, f, g), d = F(d), e = null, f = 0), g = 0;
      } else {
        return null;
      }
    }
  }
};
k.Jd = function(a, b, c) {
  this.ea = Q.j(this.ea, b, c);
  return this;
};
k.Ld = function(a, b) {
  return this.ea = ee.h(this.ea, b);
};
k.H = function() {
  return this.C;
};
k.Fc = function() {
  return this.state;
};
k.N = function(a, b) {
  return this === b;
};
var Eg = function() {
  function a(a) {
    return new Bg(a, null, null, null);
  }
  var b = null, c = function() {
    function a(c, d) {
      var h = null;
      1 < arguments.length && (h = H(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, h);
    }
    function b(a, c) {
      var d = Ae(c) ? R.h(Cg, c) : c, e = P.h(d, Dg), d = P.h(d, db);
      return new Bg(a, d, e, null);
    }
    a.A = 1;
    a.o = function(a) {
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
        return c.k(b, H(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.A = 1;
  b.o = c.o;
  b.g = a;
  b.k = c.k;
  return b;
}();
function Fg(a, b) {
  if (a instanceof Bg) {
    var c = a.Pg;
    if (null != c && !q(c.g ? c.g(b) : c.call(null, b))) {
      throw Error("Assert failed: Validator rejected reference state\n" + u.g(function() {
        var a = Af(new pd(null, "validate", "validate", 1439230700, null), new pd(null, "new-value", "new-value", -1567397401, null));
        return Gg.g ? Gg.g(a) : Gg.call(null, a);
      }()));
    }
    c = a.state;
    a.state = b;
    null != a.ea && Ac(a, c, b);
    return b;
  }
  return Rc(a, b);
}
var Hg = function() {
  function a(a, b, c, d) {
    if (a instanceof Bg) {
      var e = a.state;
      b = b.j ? b.j(e, c, d) : b.call(null, e, c, d);
      a = Fg(a, b);
    } else {
      a = Uc.p(a, b, c, d);
    }
    return a;
  }
  function b(a, b, c) {
    if (a instanceof Bg) {
      var d = a.state;
      b = b.h ? b.h(d, c) : b.call(null, d, c);
      a = Fg(a, b);
    } else {
      a = Uc.j(a, b, c);
    }
    return a;
  }
  function c(a, b) {
    var c;
    a instanceof Bg ? (c = a.state, c = b.g ? b.g(c) : b.call(null, c), c = Fg(a, c)) : c = Uc.h(a, b);
    return c;
  }
  var d = null, e = function() {
    function a(c, d, e, f, s) {
      var w = null;
      4 < arguments.length && (w = H(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, w);
    }
    function b(a, c, d, e, f) {
      return a instanceof Bg ? Fg(a, R.J(c, a.state, d, e, f)) : Uc.J(a, c, d, e, f);
    }
    a.A = 4;
    a.o = function(a) {
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
        return e.k(d, g, h, l, H(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.A = 4;
  d.o = e.o;
  d.h = c;
  d.j = b;
  d.p = a;
  d.k = e.k;
  return d;
}(), Ig = function() {
  function a(a, b) {
    return function g(b, c) {
      return new Ef(null, function() {
        var e = B(c);
        if (e) {
          if (S(e)) {
            for (var t = x(e), s = K(t), w = $f(s), A = 0;;) {
              if (A < s) {
                var y = function() {
                  var c = b + A, e = v.h(t, A);
                  return a.h ? a.h(c, e) : a.call(null, c, e);
                }();
                null != y && w.add(y);
                A += 1;
              } else {
                break;
              }
            }
            return cg(eg(w), g(b + s, z(e)));
          }
          s = function() {
            var c = C(e);
            return a.h ? a.h(b, c) : a.call(null, b, c);
          }();
          return null == s ? g(b + 1, E(e)) : Ld(s, g(b + 1, E(e)));
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
            var l = Hg.h(c, Bd), l = a.h ? a.h(l, h) : a.call(null, l, h);
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
      }(Eg.g(-1));
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
}(), Jg = function() {
  function a(a, b, c, d) {
    return new Ef(null, function() {
      var f = B(b), s = B(c), w = B(d);
      if (f && s && w) {
        var A = Ld, y;
        y = C(f);
        var D = C(s), G = C(w);
        y = a.j ? a.j(y, D, G) : a.call(null, y, D, G);
        f = A(y, e.p(a, E(f), E(s), E(w)));
      } else {
        f = null;
      }
      return f;
    }, null, null);
  }
  function b(a, b, c) {
    return new Ef(null, function() {
      var d = B(b), f = B(c);
      if (d && f) {
        var s = Ld, w;
        w = C(d);
        var A = C(f);
        w = a.h ? a.h(w, A) : a.call(null, w, A);
        d = s(w, e.j(a, E(d), E(f)));
      } else {
        d = null;
      }
      return d;
    }, null, null);
  }
  function c(a, b) {
    return new Ef(null, function() {
      var c = B(b);
      if (c) {
        if (S(c)) {
          for (var d = x(c), f = K(d), s = $f(f), w = 0;;) {
            if (w < f) {
              dg(s, function() {
                var b = v.h(d, w);
                return a.g ? a.g(b) : a.call(null, b);
              }()), w += 1;
            } else {
              break;
            }
          }
          return cg(eg(s), e.h(a, z(c)));
        }
        return Ld(function() {
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
          return b.q ? b.q() : b.call(null);
        }
        var f = null, w = function() {
          function c(a, b, e) {
            var f = null;
            2 < arguments.length && (f = H(Array.prototype.slice.call(arguments, 2), 0));
            return d.call(this, a, b, f);
          }
          function d(c, e, f) {
            e = R.j(a, e, f);
            return b.h ? b.h(c, e) : b.call(null, c, e);
          }
          c.A = 2;
          c.o = function(a) {
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
              return w.k(a, b, H(arguments, 2));
          }
          throw Error("Invalid arity: " + arguments.length);
        };
        f.A = 2;
        f.o = w.o;
        f.q = e;
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
      4 < arguments.length && (A = H(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, A);
    }
    function b(a, c, d, f, g) {
      var h = function D(a) {
        return new Ef(null, function() {
          var b = e.h(B, a);
          return sg(Le, b) ? Ld(e.h(C, b), D(e.h(E, b))) : null;
        }, null, null);
      };
      return e.h(function() {
        return function(b) {
          return R.h(a, b);
        };
      }(h), h(be.k(g, f, H([d, c], 0))));
    }
    a.A = 4;
    a.o = function(a) {
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
  }(), e = function(e, h, l, p, t) {
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
  e.A = 4;
  e.o = f.o;
  e.g = d;
  e.h = c;
  e.j = b;
  e.p = a;
  e.k = f.k;
  return e;
}(), Kg = function() {
  function a(a, b) {
    return new Ef(null, function() {
      if (0 < a) {
        var f = B(b);
        return f ? Ld(C(f), c.h(a - 1, E(f))) : null;
      }
      return null;
    }, null, null);
  }
  function b(a) {
    return function(b) {
      return function(a) {
        return function() {
          function c(d, g) {
            var h = Zb(a), l = Hg.h(a, Qe), h = 0 < h ? b.h ? b.h(d, g) : b.call(null, d, g) : d;
            return 0 < l ? h : new Dd(h);
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
      }(Eg.g(a));
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
}(), Lg = function() {
  function a(a, b) {
    return new Ef(null, function(c) {
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
            var h = Zb(a);
            Hg.h(a, Qe);
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
      }(Eg.g(a));
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
}(), Mg = function() {
  function a(a, b) {
    return new Ef(null, function(c) {
      return function() {
        return c(a, b);
      };
    }(function(a, b) {
      for (;;) {
        var c = B(b), d;
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
            var l = Zb(c);
            if (q(q(l) ? a.g ? a.g(h) : a.call(null, h) : l)) {
              return g;
            }
            Fg(c, null);
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
      }(Eg.g(!0));
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
}(), Ng = function() {
  function a(a, b) {
    return Kg.h(a, c.g(b));
  }
  function b(a) {
    return new Ef(null, function() {
      return Ld(a, c.g(a));
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
}(), Vg = function() {
  function a(a, b) {
    return Kg.h(a, c.g(b));
  }
  function b(a) {
    return new Ef(null, function() {
      return Ld(a.q ? a.q() : a.call(null), c.g(a));
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
}(), Xg = function Wg(b, c) {
  return Ld(c, new Ef(null, function() {
    return Wg(b, b.g ? b.g(c) : b.call(null, c));
  }, null, null));
}, Yg = function() {
  function a(a, c) {
    return new Ef(null, function() {
      var f = B(a), g = B(c);
      return f && g ? Ld(C(f), Ld(C(g), b.h(E(f), E(g)))) : null;
    }, null, null);
  }
  var b = null, c = function() {
    function a(b, d, h) {
      var l = null;
      2 < arguments.length && (l = H(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      return new Ef(null, function() {
        var c = Jg.h(B, be.k(e, d, H([a], 0)));
        return sg(Le, c) ? ig.h(Jg.h(C, c), R.h(b, Jg.h(E, c))) : null;
      }, null, null);
    }
    a.A = 2;
    a.o = function(a) {
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
        return c.k(b, e, H(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.A = 2;
  b.o = c.o;
  b.h = a;
  b.k = c.k;
  return b;
}();
function Zg(a, b) {
  return Lg.h(1, Yg.h(Ng.g(a), b));
}
var ah = function() {
  function a(a) {
    return xg.h(Jg.g(a), $g);
  }
  var b = null, c = function() {
    function a(c, d) {
      var h = null;
      1 < arguments.length && (h = H(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, h);
    }
    function b(a, c) {
      return R.h(ig, R.j(Jg, a, c));
    }
    a.A = 1;
    a.o = function(a) {
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
        return c.k(b, H(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.A = 1;
  b.o = c.o;
  b.g = a;
  b.k = c.k;
  return b;
}(), bh = function() {
  function a(a, b) {
    return new Ef(null, function() {
      var f = B(b);
      if (f) {
        if (S(f)) {
          for (var g = x(f), h = K(g), l = $f(h), p = 0;;) {
            if (p < h) {
              var t;
              t = v.h(g, p);
              t = a.g ? a.g(t) : a.call(null, t);
              q(t) && (t = v.h(g, p), l.add(t));
              p += 1;
            } else {
              break;
            }
          }
          return cg(eg(l), c.h(a, z(f)));
        }
        g = C(f);
        f = E(f);
        return q(a.g ? a.g(g) : a.call(null, g)) ? Ld(g, c.h(a, f)) : c.h(a, f);
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
}(), ch = function() {
  function a(a, b) {
    return bh.h(vg(a), b);
  }
  function b(a) {
    return bh.g(vg(a));
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
function dh(a, b, c) {
  return function e(c) {
    return new Ef(null, function() {
      return Ld(c, q(a.g ? a.g(c) : a.call(null, c)) ? ah.k(e, H([b.g ? b.g(c) : b.call(null, c)], 0)) : null);
    }, null, null);
  }(c);
}
function eh(a) {
  return bh.h(function(a) {
    return!ne(a);
  }, E(dh(ne, B, a)));
}
var fh = function() {
  function a(a, b, c) {
    return a && (a.G & 4 || a.Bf) ? Nd(lg(Me.p(b, mg, Gc(a), c)), he(a)) : Me.p(b, be, a, c);
  }
  function b(a, b) {
    return null != a ? a && (a.G & 4 || a.Bf) ? Nd(lg(Je.j(Hc, Gc(a), b)), he(a)) : Je.j(ub, a, b) : Je.j(be, sd, b);
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
}(), gh = function() {
  function a(a, b, c, d) {
    return fh.h(ae, Jg.p(a, b, c, d));
  }
  function b(a, b, c) {
    return fh.h(ae, Jg.j(a, b, c));
  }
  function c(a, b) {
    return lg(Je.j(function(b, c) {
      return mg.h(b, a.g ? a.g(c) : a.call(null, c));
    }, Gc(ae), b));
  }
  var d = null, e = function() {
    function a(c, d, e, f, s) {
      var w = null;
      4 < arguments.length && (w = H(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, w);
    }
    function b(a, c, d, e, f) {
      return fh.h(ae, R.k(Jg, a, c, d, e, H([f], 0)));
    }
    a.A = 4;
    a.o = function(a) {
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
        return e.k(d, g, h, l, H(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.A = 4;
  d.o = e.o;
  d.h = c;
  d.j = b;
  d.p = a;
  d.k = e.k;
  return d;
}(), hh = function() {
  function a(a, b, c, h) {
    return new Ef(null, function() {
      var l = B(h);
      if (l) {
        var p = Kg.h(a, l);
        return a === K(p) ? Ld(p, d.p(a, b, c, Lg.h(b, l))) : ub(sd, Kg.h(a, ig.h(p, c)));
      }
      return null;
    }, null, null);
  }
  function b(a, b, c) {
    return new Ef(null, function() {
      var h = B(c);
      if (h) {
        var l = Kg.h(a, h);
        return a === K(l) ? Ld(l, d.j(a, b, Lg.h(b, h))) : null;
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
}(), ih = function() {
  function a(a, b, c) {
    var g = ze;
    for (b = B(b);;) {
      if (b) {
        var h = a;
        if (h ? h.t & 256 || h.ze || (h.t ? 0 : hb(Bb, h)) : hb(Bb, h)) {
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
}(), kh = function jh(b, c, d) {
  var e = O.j(c, 0, null);
  return(c = sf(c)) ? Q.j(b, e, jh(P.h(b, e), c, d)) : Q.j(b, e, d);
}, lh = function() {
  function a(a, b, c, d, f, s) {
    var w = O.j(b, 0, null);
    return(b = sf(b)) ? Q.j(a, w, e.ca(P.h(a, w), b, c, d, f, s)) : Q.j(a, w, function() {
      var b = P.h(a, w);
      return c.p ? c.p(b, d, f, s) : c.call(null, b, d, f, s);
    }());
  }
  function b(a, b, c, d, f) {
    var s = O.j(b, 0, null);
    return(b = sf(b)) ? Q.j(a, s, e.J(P.h(a, s), b, c, d, f)) : Q.j(a, s, function() {
      var b = P.h(a, s);
      return c.j ? c.j(b, d, f) : c.call(null, b, d, f);
    }());
  }
  function c(a, b, c, d) {
    var f = O.j(b, 0, null);
    return(b = sf(b)) ? Q.j(a, f, e.p(P.h(a, f), b, c, d)) : Q.j(a, f, function() {
      var b = P.h(a, f);
      return c.h ? c.h(b, d) : c.call(null, b, d);
    }());
  }
  function d(a, b, c) {
    var d = O.j(b, 0, null);
    return(b = sf(b)) ? Q.j(a, d, e.j(P.h(a, d), b, c)) : Q.j(a, d, function() {
      var b = P.h(a, d);
      return c.g ? c.g(b) : c.call(null, b);
    }());
  }
  var e = null, f = function() {
    function a(c, d, e, f, g, A, y) {
      var D = null;
      6 < arguments.length && (D = H(Array.prototype.slice.call(arguments, 6), 0));
      return b.call(this, c, d, e, f, g, A, D);
    }
    function b(a, c, d, f, g, h, y) {
      var D = O.j(c, 0, null);
      return(c = sf(c)) ? Q.j(a, D, R.k(e, P.h(a, D), c, d, f, H([g, h, y], 0))) : Q.j(a, D, R.k(d, P.h(a, D), f, g, h, H([y], 0)));
    }
    a.A = 6;
    a.o = function(a) {
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
  }(), e = function(e, h, l, p, t, s, w) {
    switch(arguments.length) {
      case 3:
        return d.call(this, e, h, l);
      case 4:
        return c.call(this, e, h, l, p);
      case 5:
        return b.call(this, e, h, l, p, t);
      case 6:
        return a.call(this, e, h, l, p, t, s);
      default:
        return f.k(e, h, l, p, t, s, H(arguments, 6));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.A = 6;
  e.o = f.o;
  e.j = d;
  e.p = c;
  e.J = b;
  e.ca = a;
  e.k = f.k;
  return e;
}();
function mh(a, b) {
  this.X = a;
  this.m = b;
}
function nh(a) {
  return new mh(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function oh(a) {
  return new mh(a.X, mb(a.m));
}
function ph(a) {
  a = a.B;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function qh(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = nh(a);
    d.m[0] = c;
    c = d;
    b -= 5;
  }
}
var sh = function rh(b, c, d, e) {
  var f = oh(d), g = b.B - 1 >>> c & 31;
  5 === c ? f.m[g] = e : (d = d.m[g], b = null != d ? rh(b, c - 5, d, e) : qh(null, c - 5, e), f.m[g] = b);
  return f;
};
function th(a, b) {
  throw Error("No item " + u.g(a) + " in vector of length " + u.g(b));
}
function uh(a, b) {
  if (b >= ph(a)) {
    return a.W;
  }
  for (var c = a.root, d = a.shift;;) {
    if (0 < d) {
      var e = d - 5, c = c.m[b >>> d & 31], d = e
    } else {
      return c.m;
    }
  }
}
function vh(a, b) {
  return 0 <= b && b < a.B ? uh(a, b) : th(b, a.B);
}
var xh = function wh(b, c, d, e, f) {
  var g = oh(d);
  if (0 === c) {
    g.m[e & 31] = f;
  } else {
    var h = e >>> c & 31;
    b = wh(b, c - 5, d.m[h], e, f);
    g.m[h] = b;
  }
  return g;
}, zh = function yh(b, c, d) {
  var e = b.B - 2 >>> c & 31;
  if (5 < c) {
    b = yh(b, c - 5, d.m[e]);
    if (null == b && 0 === e) {
      return null;
    }
    d = oh(d);
    d.m[e] = b;
    return d;
  }
  if (0 === e) {
    return null;
  }
  d = oh(d);
  d.m[e] = null;
  return d;
};
function T(a, b, c, d, e, f) {
  this.C = a;
  this.B = b;
  this.shift = c;
  this.root = d;
  this.W = e;
  this.w = f;
  this.t = 167668511;
  this.G = 8196;
}
k = T.prototype;
k.toString = function() {
  return Wc(this);
};
k.L = function(a, b) {
  return Cb.j(this, b, null);
};
k.M = function(a, b, c) {
  return "number" === typeof b ? v.j(this, b, c) : c;
};
k.Sc = function(a, b, c) {
  a = 0;
  for (var d = c;;) {
    if (a < this.B) {
      var e = uh(this, a);
      c = e.length;
      a: {
        for (var f = 0;;) {
          if (f < c) {
            var g = f + a, h = e[f], d = b.j ? b.j(d, g, h) : b.call(null, d, g, h);
            if (Ed(d)) {
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
      if (Ed(e)) {
        return b = e, I.g ? I.g(b) : I.call(null, b);
      }
      a += c;
      d = e;
    } else {
      return d;
    }
  }
};
k.F = function(a, b) {
  return vh(this, b)[b & 31];
};
k.Ha = function(a, b, c) {
  return 0 <= b && b < this.B ? uh(this, b)[b & 31] : c;
};
k.sc = function(a, b, c) {
  if (0 <= b && b < this.B) {
    return ph(this) <= b ? (a = mb(this.W), a[b & 31] = c, new T(this.C, this.B, this.shift, this.root, a, null)) : new T(this.C, this.B, this.shift, xh(this, this.shift, this.root, b, c), this.W, null);
  }
  if (b === this.B) {
    return ub(this, c);
  }
  throw Error("Index " + u.g(b) + " out of bounds  [0," + u.g(this.B) + "]");
};
k.H = function() {
  return this.C;
};
k.T = function() {
  return this.B;
};
k.Tc = function() {
  return v.h(this, 0);
};
k.Uc = function() {
  return v.h(this, 1);
};
k.jc = function() {
  return 0 < this.B ? v.h(this, this.B - 1) : null;
};
k.kc = function() {
  if (0 === this.B) {
    throw Error("Can't pop empty vector");
  }
  if (1 === this.B) {
    return gc(ae, this.C);
  }
  if (1 < this.B - ph(this)) {
    return new T(this.C, this.B - 1, this.shift, this.root, this.W.slice(0, -1), null);
  }
  var a = uh(this, this.B - 2), b = zh(this, this.shift, this.root), b = null == b ? U : b, c = this.B - 1;
  return 5 < this.shift && null == b.m[1] ? new T(this.C, c, this.shift - 5, b.m[0], a, null) : new T(this.C, c, this.shift, b, a, null);
};
k.Vc = function() {
  return 0 < this.B ? new Jd(this, this.B - 1, null) : null;
};
k.Q = function() {
  var a = this.w;
  return null != a ? a : this.w = a = ud(this);
};
k.N = function(a, b) {
  return Kd(this, b);
};
k.Gc = function() {
  var a = this;
  return new Ah(a.B, a.shift, function() {
    var b = a.root;
    return Bh.g ? Bh.g(b) : Bh.call(null, b);
  }(), function() {
    var b = a.W;
    return Ch.g ? Ch.g(b) : Ch.call(null, b);
  }());
};
k.aa = function() {
  return Nd(ae, this.C);
};
k.ha = function(a, b) {
  return Fd.h(this, b);
};
k.ia = function(a, b, c) {
  a = 0;
  for (var d = c;;) {
    if (a < this.B) {
      var e = uh(this, a);
      c = e.length;
      a: {
        for (var f = 0;;) {
          if (f < c) {
            var g = e[f], d = b.h ? b.h(d, g) : b.call(null, d, g);
            if (Ed(d)) {
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
      if (Ed(e)) {
        return b = e, I.g ? I.g(b) : I.call(null, b);
      }
      a += c;
      d = e;
    } else {
      return d;
    }
  }
};
k.ga = function(a, b, c) {
  if ("number" === typeof b) {
    return Xb(this, b, c);
  }
  throw Error("Vector's key for assoc must be a number.");
};
k.R = function() {
  if (0 === this.B) {
    return null;
  }
  if (32 >= this.B) {
    return new rd(this.W, 0);
  }
  var a;
  a: {
    a = this.root;
    for (var b = this.shift;;) {
      if (0 < b) {
        b -= 5, a = a.m[0];
      } else {
        a = a.m;
        break a;
      }
    }
    a = void 0;
  }
  return Dh.p ? Dh.p(this, a, 0, 0) : Dh.call(null, this, a, 0, 0);
};
k.I = function(a, b) {
  return new T(b, this.B, this.shift, this.root, this.W, this.w);
};
k.S = function(a, b) {
  if (32 > this.B - ph(this)) {
    for (var c = this.W.length, d = Array(c + 1), e = 0;;) {
      if (e < c) {
        d[e] = this.W[e], e += 1;
      } else {
        break;
      }
    }
    d[c] = b;
    return new T(this.C, this.B + 1, this.shift, this.root, d, null);
  }
  c = (d = this.B >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = nh(null), d.m[0] = this.root, e = qh(null, this.shift, new mh(null, this.W)), d.m[1] = e) : d = sh(this, this.shift, this.root, new mh(null, this.W));
  return new T(this.C, this.B + 1, c, d, [b], null);
};
k.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.F(null, c);
      case 3:
        return this.Ha(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.h = function(a, c) {
    return this.F(null, c);
  };
  a.j = function(a, c, d) {
    return this.Ha(null, c, d);
  };
  return a;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(mb(b)));
};
k.g = function(a) {
  return this.F(null, a);
};
k.h = function(a, b) {
  return this.Ha(null, a, b);
};
var U = new mh(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), ae = new T(null, 0, 5, U, [], 0);
function Eh(a) {
  var b = a.length;
  if (32 > b) {
    return new T(null, b, 5, U, a, null);
  }
  for (var c = 32, d = (new T(null, 32, 5, U, a.slice(0, 32), null)).Gc(null);;) {
    if (c < b) {
      var e = c + 1, d = mg.h(d, a[c]), c = e
    } else {
      return Ic(d);
    }
  }
}
function Fh(a) {
  return Ic(Je.j(Hc, Gc(ae), a));
}
var Gh = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = H(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    return a instanceof rd && 0 === a.K ? Eh(a.m) : Fh(a);
  }
  a.A = 0;
  a.o = function(a) {
    a = B(a);
    return b(a);
  };
  a.k = b;
  return a;
}();
function Hh(a, b, c, d, e, f) {
  this.qb = a;
  this.ec = b;
  this.K = c;
  this.ua = d;
  this.C = e;
  this.w = f;
  this.t = 32375020;
  this.G = 1536;
}
k = Hh.prototype;
k.toString = function() {
  return Wc(this);
};
k.H = function() {
  return this.C;
};
k.wa = function() {
  if (this.ua + 1 < this.ec.length) {
    var a;
    a = this.qb;
    var b = this.ec, c = this.K, d = this.ua + 1;
    a = Dh.p ? Dh.p(a, b, c, d) : Dh.call(null, a, b, c, d);
    return null == a ? null : a;
  }
  return Qc(this);
};
k.Q = function() {
  var a = this.w;
  return null != a ? a : this.w = a = ud(this);
};
k.N = function(a, b) {
  return Kd(this, b);
};
k.aa = function() {
  return Nd(ae, this.C);
};
k.ha = function(a, b) {
  var c = this;
  return Fd.h(function() {
    var a = c.qb, b = c.K + c.ua, f = K(c.qb);
    return Ih.j ? Ih.j(a, b, f) : Ih.call(null, a, b, f);
  }(), b);
};
k.ia = function(a, b, c) {
  var d = this;
  return Fd.j(function() {
    var a = d.qb, b = d.K + d.ua, c = K(d.qb);
    return Ih.j ? Ih.j(a, b, c) : Ih.call(null, a, b, c);
  }(), b, c);
};
k.da = function() {
  return this.ec[this.ua];
};
k.sa = function() {
  if (this.ua + 1 < this.ec.length) {
    var a;
    a = this.qb;
    var b = this.ec, c = this.K, d = this.ua + 1;
    a = Dh.p ? Dh.p(a, b, c, d) : Dh.call(null, a, b, c, d);
    return null == a ? sd : a;
  }
  return z(this);
};
k.R = function() {
  return this;
};
k.Hd = function() {
  return ag.h(this.ec, this.ua);
};
k.Id = function() {
  var a = this.K + this.ec.length;
  if (a < pb(this.qb)) {
    var b = this.qb, c = uh(this.qb, a);
    return Dh.p ? Dh.p(b, c, a, 0) : Dh.call(null, b, c, a, 0);
  }
  return sd;
};
k.I = function(a, b) {
  var c = this.qb, d = this.ec, e = this.K, f = this.ua;
  return Dh.J ? Dh.J(c, d, e, f, b) : Dh.call(null, c, d, e, f, b);
};
k.S = function(a, b) {
  return Ld(b, this);
};
k.Gd = function() {
  var a = this.K + this.ec.length;
  if (a < pb(this.qb)) {
    var b = this.qb, c = uh(this.qb, a);
    return Dh.p ? Dh.p(b, c, a, 0) : Dh.call(null, b, c, a, 0);
  }
  return null;
};
var Dh = function() {
  function a(a, b, c, d, l) {
    return new Hh(a, b, c, d, l, null);
  }
  function b(a, b, c, d) {
    return new Hh(a, b, c, d, null, null);
  }
  function c(a, b, c) {
    return new Hh(a, vh(a, b), b, c, null, null);
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
  d.J = a;
  return d;
}();
function Jh(a, b, c, d, e) {
  this.C = a;
  this.ic = b;
  this.start = c;
  this.end = d;
  this.w = e;
  this.t = 166617887;
  this.G = 8192;
}
k = Jh.prototype;
k.toString = function() {
  return Wc(this);
};
k.L = function(a, b) {
  return Cb.j(this, b, null);
};
k.M = function(a, b, c) {
  return "number" === typeof b ? v.j(this, b, c) : c;
};
k.F = function(a, b) {
  return 0 > b || this.end <= this.start + b ? th(b, this.end - this.start) : v.h(this.ic, this.start + b);
};
k.Ha = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : v.j(this.ic, this.start + b, c);
};
k.sc = function(a, b, c) {
  var d = this.start + b;
  a = this.C;
  c = Q.j(this.ic, d, c);
  b = this.start;
  var e = this.end, d = d + 1, d = e > d ? e : d;
  return Kh.J ? Kh.J(a, c, b, d, null) : Kh.call(null, a, c, b, d, null);
};
k.H = function() {
  return this.C;
};
k.T = function() {
  return this.end - this.start;
};
k.jc = function() {
  return v.h(this.ic, this.end - 1);
};
k.kc = function() {
  if (this.start === this.end) {
    throw Error("Can't pop empty vector");
  }
  var a = this.C, b = this.ic, c = this.start, d = this.end - 1;
  return Kh.J ? Kh.J(a, b, c, d, null) : Kh.call(null, a, b, c, d, null);
};
k.Vc = function() {
  return this.start !== this.end ? new Jd(this, this.end - this.start - 1, null) : null;
};
k.Q = function() {
  var a = this.w;
  return null != a ? a : this.w = a = ud(this);
};
k.N = function(a, b) {
  return Kd(this, b);
};
k.aa = function() {
  return Nd(ae, this.C);
};
k.ha = function(a, b) {
  return Fd.h(this, b);
};
k.ia = function(a, b, c) {
  return Fd.j(this, b, c);
};
k.ga = function(a, b, c) {
  if ("number" === typeof b) {
    return Xb(this, b, c);
  }
  throw Error("Subvec's key for assoc must be a number.");
};
k.R = function() {
  var a = this;
  return function(b) {
    return function d(e) {
      return e === a.end ? null : Ld(v.h(a.ic, e), new Ef(null, function() {
        return function() {
          return d(e + 1);
        };
      }(b), null, null));
    };
  }(this)(a.start);
};
k.I = function(a, b) {
  var c = this.ic, d = this.start, e = this.end, f = this.w;
  return Kh.J ? Kh.J(b, c, d, e, f) : Kh.call(null, b, c, d, e, f);
};
k.S = function(a, b) {
  var c = this.C, d = Xb(this.ic, this.end, b), e = this.start, f = this.end + 1;
  return Kh.J ? Kh.J(c, d, e, f, null) : Kh.call(null, c, d, e, f, null);
};
k.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.F(null, c);
      case 3:
        return this.Ha(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.h = function(a, c) {
    return this.F(null, c);
  };
  a.j = function(a, c, d) {
    return this.Ha(null, c, d);
  };
  return a;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(mb(b)));
};
k.g = function(a) {
  return this.F(null, a);
};
k.h = function(a, b) {
  return this.Ha(null, a, b);
};
function Kh(a, b, c, d, e) {
  for (;;) {
    if (b instanceof Jh) {
      c = b.start + c, d = b.start + d, b = b.ic;
    } else {
      var f = K(b);
      if (0 > c || 0 > d || c > f || d > f) {
        throw Error("Index out of bounds");
      }
      return new Jh(a, b, c, d, e);
    }
  }
}
var Ih = function() {
  function a(a, b, c) {
    return Kh(null, a, b, c, null);
  }
  function b(a, b) {
    return c.j(a, b, K(a));
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
function Lh(a, b) {
  return a === b.X ? b : new mh(a, mb(b.m));
}
function Bh(a) {
  return new mh({}, mb(a.m));
}
function Ch(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  xe(a, 0, b, 0, a.length);
  return b;
}
var Nh = function Mh(b, c, d, e) {
  d = Lh(b.root.X, d);
  var f = b.B - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var g = d.m[f];
    b = null != g ? Mh(b, c - 5, g, e) : qh(b.root.X, c - 5, e);
  }
  d.m[f] = b;
  return d;
};
function Ah(a, b, c, d) {
  this.B = a;
  this.shift = b;
  this.root = c;
  this.W = d;
  this.t = 275;
  this.G = 88;
}
k = Ah.prototype;
k.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.L(null, c);
      case 3:
        return this.M(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.h = function(a, c) {
    return this.L(null, c);
  };
  a.j = function(a, c, d) {
    return this.M(null, c, d);
  };
  return a;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(mb(b)));
};
k.g = function(a) {
  return this.L(null, a);
};
k.h = function(a, b) {
  return this.M(null, a, b);
};
k.L = function(a, b) {
  return Cb.j(this, b, null);
};
k.M = function(a, b, c) {
  return "number" === typeof b ? v.j(this, b, c) : c;
};
k.F = function(a, b) {
  if (this.root.X) {
    return vh(this, b)[b & 31];
  }
  throw Error("nth after persistent!");
};
k.Ha = function(a, b, c) {
  return 0 <= b && b < this.B ? v.h(this, b) : c;
};
k.T = function() {
  if (this.root.X) {
    return this.B;
  }
  throw Error("count after persistent!");
};
k.Ce = function(a, b, c) {
  var d = this;
  if (d.root.X) {
    if (0 <= b && b < d.B) {
      return ph(this) <= b ? d.W[b & 31] = c : (a = function() {
        return function f(a, h) {
          var l = Lh(d.root.X, h);
          if (0 === a) {
            l.m[b & 31] = c;
          } else {
            var p = b >>> a & 31, t = f(a - 5, l.m[p]);
            l.m[p] = t;
          }
          return l;
        };
      }(this).call(null, d.shift, d.root), d.root = a), this;
    }
    if (b === d.B) {
      return Hc(this, c);
    }
    throw Error("Index " + u.g(b) + " out of bounds for TransientVector of length" + u.g(d.B));
  }
  throw Error("assoc! after persistent!");
};
k.Xc = function(a, b, c) {
  if ("number" === typeof b) {
    return Oc(this, b, c);
  }
  throw Error("TransientVector's key for assoc! must be a number.");
};
k.qc = function(a, b) {
  if (this.root.X) {
    if (32 > this.B - ph(this)) {
      this.W[this.B & 31] = b;
    } else {
      var c = new mh(this.root.X, this.W), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.W = d;
      if (this.B >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = qh(this.root.X, this.shift, c);
        this.root = new mh(this.root.X, d);
        this.shift = e;
      } else {
        this.root = Nh(this, this.shift, this.root, c);
      }
    }
    this.B += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
k.rc = function() {
  if (this.root.X) {
    this.root.X = null;
    var a = this.B - ph(this), b = Array(a);
    xe(this.W, 0, b, 0, a);
    return new T(null, this.B, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
function Oh(a, b, c, d) {
  this.C = a;
  this.gb = b;
  this.Lb = c;
  this.w = d;
  this.G = 0;
  this.t = 31850572;
}
k = Oh.prototype;
k.toString = function() {
  return Wc(this);
};
k.H = function() {
  return this.C;
};
k.Q = function() {
  var a = this.w;
  return null != a ? a : this.w = a = ud(this);
};
k.N = function(a, b) {
  return Kd(this, b);
};
k.aa = function() {
  return Nd(sd, this.C);
};
k.da = function() {
  return C(this.gb);
};
k.sa = function() {
  var a = F(this.gb);
  return a ? new Oh(this.C, a, this.Lb, null) : null == this.Lb ? sb(this) : new Oh(this.C, this.Lb, null, null);
};
k.R = function() {
  return this;
};
k.I = function(a, b) {
  return new Oh(b, this.gb, this.Lb, this.w);
};
k.S = function(a, b) {
  return Ld(b, this);
};
function Ph(a, b, c, d, e) {
  this.C = a;
  this.count = b;
  this.gb = c;
  this.Lb = d;
  this.w = e;
  this.t = 31858766;
  this.G = 8192;
}
k = Ph.prototype;
k.toString = function() {
  return Wc(this);
};
k.H = function() {
  return this.C;
};
k.T = function() {
  return this.count;
};
k.jc = function() {
  return C(this.gb);
};
k.kc = function() {
  if (q(this.gb)) {
    var a = F(this.gb);
    return a ? new Ph(this.C, this.count - 1, a, this.Lb, null) : new Ph(this.C, this.count - 1, B(this.Lb), ae, null);
  }
  return this;
};
k.Q = function() {
  var a = this.w;
  return null != a ? a : this.w = a = ud(this);
};
k.N = function(a, b) {
  return Kd(this, b);
};
k.aa = function() {
  return fi;
};
k.da = function() {
  return C(this.gb);
};
k.sa = function() {
  return E(B(this));
};
k.R = function() {
  var a = B(this.Lb), b = this.gb;
  return q(q(b) ? b : a) ? new Oh(null, this.gb, B(a), null) : null;
};
k.I = function(a, b) {
  return new Ph(b, this.count, this.gb, this.Lb, this.w);
};
k.S = function(a, b) {
  var c;
  q(this.gb) ? (c = this.Lb, c = new Ph(this.C, this.count + 1, this.gb, be.h(q(c) ? c : ae, b), null)) : c = new Ph(this.C, this.count + 1, be.h(this.gb, b), ae, null);
  return c;
};
var fi = new Ph(null, 0, null, ae, 0);
function gi() {
  this.G = 0;
  this.t = 2097152;
}
gi.prototype.N = function() {
  return!1;
};
var hi = new gi;
function ii(a, b) {
  return Be(oe(b) ? K(a) === K(b) ? sg(Le, Jg.h(function(a) {
    return md.h(P.j(b, C(a), hi), Pd(a));
  }, a)) : null : null);
}
function ji(a) {
  this.ba = a;
}
function ki(a) {
  return new ji(B(a));
}
function li(a, b) {
  var c = a.m;
  if (b instanceof V) {
    a: {
      for (var d = c.length, e = b.V, f = 0;;) {
        if (d <= f) {
          c = -1;
          break a;
        }
        var g = c[f];
        if (g instanceof V && e === g.V) {
          c = f;
          break a;
        }
        f += 2;
      }
      c = void 0;
    }
  } else {
    if (d = ga(b), q(q(d) ? d : "number" === typeof b)) {
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
      if (b instanceof pd) {
        a: {
          d = c.length;
          e = b.oc;
          for (f = 0;;) {
            if (d <= f) {
              c = -1;
              break a;
            }
            g = c[f];
            if (g instanceof pd && e === g.oc) {
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
              if (md.h(b, c[e])) {
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
function mi(a, b, c) {
  this.m = a;
  this.K = b;
  this.Ga = c;
  this.G = 0;
  this.t = 32374990;
}
k = mi.prototype;
k.toString = function() {
  return Wc(this);
};
k.H = function() {
  return this.Ga;
};
k.wa = function() {
  return this.K < this.m.length - 2 ? new mi(this.m, this.K + 2, this.Ga) : null;
};
k.T = function() {
  return(this.m.length - this.K) / 2;
};
k.Q = function() {
  return ud(this);
};
k.N = function(a, b) {
  return Kd(this, b);
};
k.aa = function() {
  return Nd(sd, this.Ga);
};
k.ha = function(a, b) {
  return Od.h(b, this);
};
k.ia = function(a, b, c) {
  return Od.j(b, c, this);
};
k.da = function() {
  return new T(null, 2, 5, U, [this.m[this.K], this.m[this.K + 1]], null);
};
k.sa = function() {
  return this.K < this.m.length - 2 ? new mi(this.m, this.K + 2, this.Ga) : sd;
};
k.R = function() {
  return this;
};
k.I = function(a, b) {
  return new mi(this.m, this.K, b);
};
k.S = function(a, b) {
  return Ld(b, this);
};
function n(a, b, c, d) {
  this.C = a;
  this.B = b;
  this.m = c;
  this.w = d;
  this.t = 16647951;
  this.G = 8196;
}
k = n.prototype;
k.toString = function() {
  return Wc(this);
};
k.values = function() {
  return ki(ni.g ? ni.g(this) : ni.call(null, this));
};
k.forEach = function(a) {
  for (var b = B(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.F(null, e), g = O.j(f, 0, null), f = O.j(f, 1, null);
      a.h ? a.h(f, g) : a.call(null, f, g);
      e += 1;
    } else {
      if (b = B(b)) {
        S(b) ? (c = x(b), b = z(b), g = c, d = K(c), c = g) : (c = C(b), g = O.j(c, 0, null), c = f = O.j(c, 1, null), a.h ? a.h(c, g) : a.call(null, c, g), b = F(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
k.L = function(a, b) {
  return Cb.j(this, b, null);
};
k.M = function(a, b, c) {
  a = li(this, b);
  return-1 === a ? c : this.m[a + 1];
};
k.Sc = function(a, b, c) {
  a = this.m.length;
  for (var d = 0;;) {
    if (d < a) {
      var e = this.m[d], f = this.m[d + 1];
      c = b.j ? b.j(c, e, f) : b.call(null, c, e, f);
      if (Ed(c)) {
        return b = c, I.g ? I.g(b) : I.call(null, b);
      }
      d += 2;
    } else {
      return c;
    }
  }
};
k.H = function() {
  return this.C;
};
k.T = function() {
  return this.B;
};
k.Q = function() {
  var a = this.w;
  return null != a ? a : this.w = a = Ad(this);
};
k.N = function(a, b) {
  return ii(this, b);
};
k.Gc = function() {
  return new oi({}, this.m.length, mb(this.m));
};
k.aa = function() {
  return gc(pi, this.C);
};
k.ha = function(a, b) {
  return Od.h(b, this);
};
k.ia = function(a, b, c) {
  return Od.j(b, c, this);
};
k.va = function(a, b) {
  if (0 <= li(this, b)) {
    var c = this.m.length, d = c - 2;
    if (0 === d) {
      return sb(this);
    }
    for (var d = Array(d), e = 0, f = 0;;) {
      if (e >= c) {
        return new n(this.C, this.B - 1, d, null);
      }
      md.h(b, this.m[e]) || (d[f] = this.m[e], d[f + 1] = this.m[e + 1], f += 2);
      e += 2;
    }
  } else {
    return this;
  }
};
k.ga = function(a, b, c) {
  a = li(this, b);
  if (-1 === a) {
    if (this.B < qi) {
      a = this.m;
      for (var d = a.length, e = Array(d + 2), f = 0;;) {
        if (f < d) {
          e[f] = a[f], f += 1;
        } else {
          break;
        }
      }
      e[d] = b;
      e[d + 1] = c;
      return new n(this.C, this.B + 1, e, null);
    }
    return gc(Kb(fh.h(ri, this), b, c), this.C);
  }
  if (c === this.m[a + 1]) {
    return this;
  }
  b = mb(this.m);
  b[a + 1] = c;
  return new n(this.C, this.B, b, null);
};
k.hd = function(a, b) {
  return-1 !== li(this, b);
};
k.R = function() {
  var a = this.m;
  return 0 <= a.length - 2 ? new mi(a, 0, null) : null;
};
k.I = function(a, b) {
  return new n(b, this.B, this.m, this.w);
};
k.S = function(a, b) {
  if (pe(b)) {
    return Kb(this, v.h(b, 0), v.h(b, 1));
  }
  for (var c = this, d = B(b);;) {
    if (null == d) {
      return c;
    }
    var e = C(d);
    if (pe(e)) {
      c = Kb(c, v.h(e, 0), v.h(e, 1)), d = F(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
k.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.L(null, c);
      case 3:
        return this.M(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.h = function(a, c) {
    return this.L(null, c);
  };
  a.j = function(a, c, d) {
    return this.M(null, c, d);
  };
  return a;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(mb(b)));
};
k.g = function(a) {
  return this.L(null, a);
};
k.h = function(a, b) {
  return this.M(null, a, b);
};
var pi = new n(null, 0, [], null), qi = 8;
function si(a) {
  for (var b = a.length, c = 0, d = Gc(pi);;) {
    if (c < b) {
      var e = c + 2, d = Jc(d, a[c], a[c + 1]), c = e
    } else {
      return Ic(d);
    }
  }
}
function oi(a, b, c) {
  this.Lc = a;
  this.Pc = b;
  this.m = c;
  this.G = 56;
  this.t = 258;
}
k = oi.prototype;
k.Xc = function(a, b, c) {
  var d = this;
  if (q(d.Lc)) {
    a = li(this, b);
    if (-1 === a) {
      return d.Pc + 2 <= 2 * qi ? (d.Pc += 2, d.m.push(b), d.m.push(c), this) : ng.j(function() {
        var a = d.Pc, b = d.m;
        return ti.h ? ti.h(a, b) : ti.call(null, a, b);
      }(), b, c);
    }
    c !== d.m[a + 1] && (d.m[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
k.qc = function(a, b) {
  if (q(this.Lc)) {
    if (b ? b.t & 2048 || b.Ef || (b.t ? 0 : hb(Ob, b)) : hb(Ob, b)) {
      return Jc(this, vf.g ? vf.g(b) : vf.call(null, b), wf.g ? wf.g(b) : wf.call(null, b));
    }
    for (var c = B(b), d = this;;) {
      var e = C(c);
      if (q(e)) {
        var f = e, c = F(c), d = Jc(d, function() {
          var a = f;
          return vf.g ? vf.g(a) : vf.call(null, a);
        }(), function() {
          var a = f;
          return wf.g ? wf.g(a) : wf.call(null, a);
        }())
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent!");
  }
};
k.rc = function() {
  if (q(this.Lc)) {
    return this.Lc = !1, new n(null, Ve(this.Pc, 2), this.m, null);
  }
  throw Error("persistent! called twice");
};
k.L = function(a, b) {
  return Cb.j(this, b, null);
};
k.M = function(a, b, c) {
  if (q(this.Lc)) {
    return a = li(this, b), -1 === a ? c : this.m[a + 1];
  }
  throw Error("lookup after persistent!");
};
k.T = function() {
  if (q(this.Lc)) {
    return Ve(this.Pc, 2);
  }
  throw Error("count after persistent!");
};
function ti(a, b) {
  for (var c = Gc(ri), d = 0;;) {
    if (d < a) {
      c = ng.j(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function ui() {
  this.D = !1;
}
function vi(a, b) {
  return a === b ? !0 : X(a, b) ? !0 : md.h(a, b);
}
var wi = function() {
  function a(a, b, c, g, h) {
    a = mb(a);
    a[b] = c;
    a[g] = h;
    return a;
  }
  function b(a, b, c) {
    a = mb(a);
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
  c.J = a;
  return c;
}();
function xi(a, b) {
  var c = Array(a.length - 2);
  xe(a, 0, c, 0, 2 * b);
  xe(a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
  return c;
}
var yi = function() {
  function a(a, b, c, g, h, l) {
    a = a.Mc(b);
    a.m[c] = g;
    a.m[h] = l;
    return a;
  }
  function b(a, b, c, g) {
    a = a.Mc(b);
    a.m[c] = g;
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
  c.ca = a;
  return c;
}();
function zi(a, b, c) {
  for (var d = a.length, e = 0, f = c;;) {
    if (e < d) {
      c = a[e];
      if (null != c) {
        var g = a[e + 1];
        c = b.j ? b.j(f, c, g) : b.call(null, f, c, g);
      } else {
        c = a[e + 1], c = null != c ? c.yc(b, f) : f;
      }
      if (Ed(c)) {
        return a = c, I.g ? I.g(a) : I.call(null, a);
      }
      e += 2;
      f = c;
    } else {
      return f;
    }
  }
}
function Ai(a, b, c) {
  this.X = a;
  this.$ = b;
  this.m = c;
}
k = Ai.prototype;
k.Mc = function(a) {
  if (a === this.X) {
    return this;
  }
  var b = pf(this.$), c = Array(0 > b ? 4 : 2 * (b + 1));
  xe(this.m, 0, c, 0, 2 * b);
  return new Ai(a, this.$, c);
};
k.Yc = function() {
  var a = this.m;
  return Bi.g ? Bi.g(a) : Bi.call(null, a);
};
k.yc = function(a, b) {
  return zi(this.m, a, b);
};
k.mc = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.$ & e)) {
    return d;
  }
  var f = pf(this.$ & e - 1), e = this.m[2 * f], f = this.m[2 * f + 1];
  return null == e ? f.mc(a + 5, b, c, d) : vi(c, e) ? f : d;
};
k.Gb = function(a, b, c, d, e, f) {
  var g = 1 << (c >>> b & 31), h = pf(this.$ & g - 1);
  if (0 === (this.$ & g)) {
    var l = pf(this.$);
    if (2 * l < this.m.length) {
      var p = this.Mc(a), t = p.m;
      f.D = !0;
      ye(t, 2 * h, t, 2 * (h + 1), 2 * (l - h));
      t[2 * h] = d;
      t[2 * h + 1] = e;
      p.$ |= g;
      return p;
    }
    if (16 <= l) {
      g = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      g[c >>> b & 31] = Ci.Gb(a, b + 5, c, d, e, f);
      for (p = h = 0;;) {
        if (32 > h) {
          0 !== (this.$ >>> h & 1) && (g[h] = null != this.m[p] ? Ci.Gb(a, b + 5, ed(this.m[p]), this.m[p], this.m[p + 1], f) : this.m[p + 1], p += 2), h += 1;
        } else {
          break;
        }
      }
      return new Di(a, l + 1, g);
    }
    t = Array(2 * (l + 4));
    xe(this.m, 0, t, 0, 2 * h);
    t[2 * h] = d;
    t[2 * h + 1] = e;
    xe(this.m, 2 * h, t, 2 * (h + 1), 2 * (l - h));
    f.D = !0;
    p = this.Mc(a);
    p.m = t;
    p.$ |= g;
    return p;
  }
  var s = this.m[2 * h], w = this.m[2 * h + 1];
  if (null == s) {
    return l = w.Gb(a, b + 5, c, d, e, f), l === w ? this : yi.p(this, a, 2 * h + 1, l);
  }
  if (vi(d, s)) {
    return e === w ? this : yi.p(this, a, 2 * h + 1, e);
  }
  f.D = !0;
  return yi.ca(this, a, 2 * h, null, 2 * h + 1, function() {
    var f = b + 5;
    return Ei.bb ? Ei.bb(a, f, s, w, c, d, e) : Ei.call(null, a, f, s, w, c, d, e);
  }());
};
k.Fb = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), g = pf(this.$ & f - 1);
  if (0 === (this.$ & f)) {
    var h = pf(this.$);
    if (16 <= h) {
      f = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      f[b >>> a & 31] = Ci.Fb(a + 5, b, c, d, e);
      for (var l = g = 0;;) {
        if (32 > g) {
          0 !== (this.$ >>> g & 1) && (f[g] = null != this.m[l] ? Ci.Fb(a + 5, ed(this.m[l]), this.m[l], this.m[l + 1], e) : this.m[l + 1], l += 2), g += 1;
        } else {
          break;
        }
      }
      return new Di(null, h + 1, f);
    }
    l = Array(2 * (h + 1));
    xe(this.m, 0, l, 0, 2 * g);
    l[2 * g] = c;
    l[2 * g + 1] = d;
    xe(this.m, 2 * g, l, 2 * (g + 1), 2 * (h - g));
    e.D = !0;
    return new Ai(null, this.$ | f, l);
  }
  var p = this.m[2 * g], t = this.m[2 * g + 1];
  if (null == p) {
    return h = t.Fb(a + 5, b, c, d, e), h === t ? this : new Ai(null, this.$, wi.j(this.m, 2 * g + 1, h));
  }
  if (vi(c, p)) {
    return d === t ? this : new Ai(null, this.$, wi.j(this.m, 2 * g + 1, d));
  }
  e.D = !0;
  return new Ai(null, this.$, wi.J(this.m, 2 * g, null, 2 * g + 1, function() {
    var e = a + 5;
    return Ei.ca ? Ei.ca(e, p, t, b, c, d) : Ei.call(null, e, p, t, b, c, d);
  }()));
};
k.Zc = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if (0 === (this.$ & d)) {
    return this;
  }
  var e = pf(this.$ & d - 1), f = this.m[2 * e], g = this.m[2 * e + 1];
  return null == f ? (a = g.Zc(a + 5, b, c), a === g ? this : null != a ? new Ai(null, this.$, wi.j(this.m, 2 * e + 1, a)) : this.$ === d ? null : new Ai(null, this.$ ^ d, xi(this.m, e))) : vi(c, f) ? new Ai(null, this.$ ^ d, xi(this.m, e)) : this;
};
var Ci = new Ai(null, 0, []);
function Di(a, b, c) {
  this.X = a;
  this.B = b;
  this.m = c;
}
k = Di.prototype;
k.Mc = function(a) {
  return a === this.X ? this : new Di(a, this.B, mb(this.m));
};
k.Yc = function() {
  var a = this.m;
  return Fi.g ? Fi.g(a) : Fi.call(null, a);
};
k.yc = function(a, b) {
  for (var c = this.m.length, d = 0, e = b;;) {
    if (d < c) {
      var f = this.m[d];
      if (null != f && (e = f.yc(a, e), Ed(e))) {
        return c = e, I.g ? I.g(c) : I.call(null, c);
      }
      d += 1;
    } else {
      return e;
    }
  }
};
k.mc = function(a, b, c, d) {
  var e = this.m[b >>> a & 31];
  return null != e ? e.mc(a + 5, b, c, d) : d;
};
k.Gb = function(a, b, c, d, e, f) {
  var g = c >>> b & 31, h = this.m[g];
  if (null == h) {
    return a = yi.p(this, a, g, Ci.Gb(a, b + 5, c, d, e, f)), a.B += 1, a;
  }
  b = h.Gb(a, b + 5, c, d, e, f);
  return b === h ? this : yi.p(this, a, g, b);
};
k.Fb = function(a, b, c, d, e) {
  var f = b >>> a & 31, g = this.m[f];
  if (null == g) {
    return new Di(null, this.B + 1, wi.j(this.m, f, Ci.Fb(a + 5, b, c, d, e)));
  }
  a = g.Fb(a + 5, b, c, d, e);
  return a === g ? this : new Di(null, this.B, wi.j(this.m, f, a));
};
k.Zc = function(a, b, c) {
  var d = b >>> a & 31, e = this.m[d];
  if (null != e) {
    a = e.Zc(a + 5, b, c);
    if (a === e) {
      d = this;
    } else {
      if (null == a) {
        if (8 >= this.B) {
          a: {
            e = this.m;
            a = e.length;
            b = Array(2 * (this.B - 1));
            c = 0;
            for (var f = 1, g = 0;;) {
              if (c < a) {
                c !== d && null != e[c] && (b[f] = e[c], f += 2, g |= 1 << c), c += 1;
              } else {
                d = new Ai(null, g, b);
                break a;
              }
            }
            d = void 0;
          }
        } else {
          d = new Di(null, this.B - 1, wi.j(this.m, d, a));
        }
      } else {
        d = new Di(null, this.B, wi.j(this.m, d, a));
      }
    }
    return d;
  }
  return this;
};
function Gi(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (vi(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return-1;
    }
  }
}
function Hi(a, b, c, d) {
  this.X = a;
  this.dc = b;
  this.B = c;
  this.m = d;
}
k = Hi.prototype;
k.Mc = function(a) {
  if (a === this.X) {
    return this;
  }
  var b = Array(2 * (this.B + 1));
  xe(this.m, 0, b, 0, 2 * this.B);
  return new Hi(a, this.dc, this.B, b);
};
k.Yc = function() {
  var a = this.m;
  return Bi.g ? Bi.g(a) : Bi.call(null, a);
};
k.yc = function(a, b) {
  return zi(this.m, a, b);
};
k.mc = function(a, b, c, d) {
  a = Gi(this.m, this.B, c);
  return 0 > a ? d : vi(c, this.m[a]) ? this.m[a + 1] : d;
};
k.Gb = function(a, b, c, d, e, f) {
  if (c === this.dc) {
    b = Gi(this.m, this.B, d);
    if (-1 === b) {
      if (this.m.length > 2 * this.B) {
        return a = yi.ca(this, a, 2 * this.B, d, 2 * this.B + 1, e), f.D = !0, a.B += 1, a;
      }
      c = this.m.length;
      b = Array(c + 2);
      xe(this.m, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      f.D = !0;
      f = this.B + 1;
      a === this.X ? (this.m = b, this.B = f, a = this) : a = new Hi(this.X, this.dc, f, b);
      return a;
    }
    return this.m[b + 1] === e ? this : yi.p(this, a, b + 1, e);
  }
  return(new Ai(a, 1 << (this.dc >>> b & 31), [null, this, null, null])).Gb(a, b, c, d, e, f);
};
k.Fb = function(a, b, c, d, e) {
  return b === this.dc ? (a = Gi(this.m, this.B, c), -1 === a ? (a = 2 * this.B, b = Array(a + 2), xe(this.m, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.D = !0, new Hi(null, this.dc, this.B + 1, b)) : md.h(this.m[a], d) ? this : new Hi(null, this.dc, this.B, wi.j(this.m, a + 1, d))) : (new Ai(null, 1 << (this.dc >>> a & 31), [null, this])).Fb(a, b, c, d, e);
};
k.Zc = function(a, b, c) {
  a = Gi(this.m, this.B, c);
  return-1 === a ? this : 1 === this.B ? null : new Hi(null, this.dc, this.B - 1, xi(this.m, Ve(a, 2)));
};
var Ei = function() {
  function a(a, b, c, g, h, l, p) {
    var t = ed(c);
    if (t === h) {
      return new Hi(null, t, 2, [c, g, l, p]);
    }
    var s = new ui;
    return Ci.Gb(a, b, t, c, g, s).Gb(a, b, h, l, p, s);
  }
  function b(a, b, c, g, h, l) {
    var p = ed(b);
    if (p === g) {
      return new Hi(null, p, 2, [b, c, h, l]);
    }
    var t = new ui;
    return Ci.Fb(a, p, b, c, t).Fb(a, g, h, l, t);
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
  c.ca = b;
  c.bb = a;
  return c;
}();
function Ii(a, b, c, d, e) {
  this.C = a;
  this.nc = b;
  this.K = c;
  this.ba = d;
  this.w = e;
  this.G = 0;
  this.t = 32374860;
}
k = Ii.prototype;
k.toString = function() {
  return Wc(this);
};
k.H = function() {
  return this.C;
};
k.Q = function() {
  var a = this.w;
  return null != a ? a : this.w = a = ud(this);
};
k.N = function(a, b) {
  return Kd(this, b);
};
k.aa = function() {
  return Nd(sd, this.C);
};
k.ha = function(a, b) {
  return Od.h(b, this);
};
k.ia = function(a, b, c) {
  return Od.j(b, c, this);
};
k.da = function() {
  return null == this.ba ? new T(null, 2, 5, U, [this.nc[this.K], this.nc[this.K + 1]], null) : C(this.ba);
};
k.sa = function() {
  if (null == this.ba) {
    var a = this.nc, b = this.K + 2;
    return Bi.j ? Bi.j(a, b, null) : Bi.call(null, a, b, null);
  }
  var a = this.nc, b = this.K, c = F(this.ba);
  return Bi.j ? Bi.j(a, b, c) : Bi.call(null, a, b, c);
};
k.R = function() {
  return this;
};
k.I = function(a, b) {
  return new Ii(b, this.nc, this.K, this.ba, this.w);
};
k.S = function(a, b) {
  return Ld(b, this);
};
var Bi = function() {
  function a(a, b, c) {
    if (null == c) {
      for (c = a.length;;) {
        if (b < c) {
          if (null != a[b]) {
            return new Ii(null, a, b, null, null);
          }
          var g = a[b + 1];
          if (q(g) && (g = g.Yc(), q(g))) {
            return new Ii(null, a, b + 2, g, null);
          }
          b += 2;
        } else {
          return null;
        }
      }
    } else {
      return new Ii(null, a, b, c, null);
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
function Ji(a, b, c, d, e) {
  this.C = a;
  this.nc = b;
  this.K = c;
  this.ba = d;
  this.w = e;
  this.G = 0;
  this.t = 32374860;
}
k = Ji.prototype;
k.toString = function() {
  return Wc(this);
};
k.H = function() {
  return this.C;
};
k.Q = function() {
  var a = this.w;
  return null != a ? a : this.w = a = ud(this);
};
k.N = function(a, b) {
  return Kd(this, b);
};
k.aa = function() {
  return Nd(sd, this.C);
};
k.ha = function(a, b) {
  return Od.h(b, this);
};
k.ia = function(a, b, c) {
  return Od.j(b, c, this);
};
k.da = function() {
  return C(this.ba);
};
k.sa = function() {
  var a = this.nc, b = this.K, c = F(this.ba);
  return Fi.p ? Fi.p(null, a, b, c) : Fi.call(null, null, a, b, c);
};
k.R = function() {
  return this;
};
k.I = function(a, b) {
  return new Ji(b, this.nc, this.K, this.ba, this.w);
};
k.S = function(a, b) {
  return Ld(b, this);
};
var Fi = function() {
  function a(a, b, c, g) {
    if (null == g) {
      for (g = b.length;;) {
        if (c < g) {
          var h = b[c];
          if (q(h) && (h = h.Yc(), q(h))) {
            return new Ji(a, b, c + 1, h, null);
          }
          c += 1;
        } else {
          return null;
        }
      }
    } else {
      return new Ji(a, b, c, g, null);
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
function Ki(a, b, c, d, e, f) {
  this.C = a;
  this.B = b;
  this.root = c;
  this.Ba = d;
  this.ib = e;
  this.w = f;
  this.t = 16123663;
  this.G = 8196;
}
k = Ki.prototype;
k.toString = function() {
  return Wc(this);
};
k.values = function() {
  return ki(ni.g ? ni.g(this) : ni.call(null, this));
};
k.forEach = function(a) {
  for (var b = B(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.F(null, e), g = O.j(f, 0, null), f = O.j(f, 1, null);
      a.h ? a.h(f, g) : a.call(null, f, g);
      e += 1;
    } else {
      if (b = B(b)) {
        S(b) ? (c = x(b), b = z(b), g = c, d = K(c), c = g) : (c = C(b), g = O.j(c, 0, null), c = f = O.j(c, 1, null), a.h ? a.h(c, g) : a.call(null, c, g), b = F(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
k.L = function(a, b) {
  return Cb.j(this, b, null);
};
k.M = function(a, b, c) {
  return null == b ? this.Ba ? this.ib : c : null == this.root ? c : this.root.mc(0, ed(b), b, c);
};
k.Sc = function(a, b, c) {
  this.Ba && (a = this.ib, c = b.j ? b.j(c, null, a) : b.call(null, c, null, a));
  return Ed(c) ? I.g ? I.g(c) : I.call(null, c) : null != this.root ? this.root.yc(b, c) : c;
};
k.H = function() {
  return this.C;
};
k.T = function() {
  return this.B;
};
k.Q = function() {
  var a = this.w;
  return null != a ? a : this.w = a = Ad(this);
};
k.N = function(a, b) {
  return ii(this, b);
};
k.Gc = function() {
  return new Li({}, this.root, this.B, this.Ba, this.ib);
};
k.aa = function() {
  return gc(ri, this.C);
};
k.va = function(a, b) {
  if (null == b) {
    return this.Ba ? new Ki(this.C, this.B - 1, this.root, !1, null, null) : this;
  }
  if (null == this.root) {
    return this;
  }
  var c = this.root.Zc(0, ed(b), b);
  return c === this.root ? this : new Ki(this.C, this.B - 1, c, this.Ba, this.ib, null);
};
k.ga = function(a, b, c) {
  if (null == b) {
    return this.Ba && c === this.ib ? this : new Ki(this.C, this.Ba ? this.B : this.B + 1, this.root, !0, c, null);
  }
  a = new ui;
  b = (null == this.root ? Ci : this.root).Fb(0, ed(b), b, c, a);
  return b === this.root ? this : new Ki(this.C, a.D ? this.B + 1 : this.B, b, this.Ba, this.ib, null);
};
k.hd = function(a, b) {
  return null == b ? this.Ba : null == this.root ? !1 : this.root.mc(0, ed(b), b, ze) !== ze;
};
k.R = function() {
  if (0 < this.B) {
    var a = null != this.root ? this.root.Yc() : null;
    return this.Ba ? Ld(new T(null, 2, 5, U, [null, this.ib], null), a) : a;
  }
  return null;
};
k.I = function(a, b) {
  return new Ki(b, this.B, this.root, this.Ba, this.ib, this.w);
};
k.S = function(a, b) {
  if (pe(b)) {
    return Kb(this, v.h(b, 0), v.h(b, 1));
  }
  for (var c = this, d = B(b);;) {
    if (null == d) {
      return c;
    }
    var e = C(d);
    if (pe(e)) {
      c = Kb(c, v.h(e, 0), v.h(e, 1)), d = F(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
k.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.L(null, c);
      case 3:
        return this.M(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.h = function(a, c) {
    return this.L(null, c);
  };
  a.j = function(a, c, d) {
    return this.M(null, c, d);
  };
  return a;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(mb(b)));
};
k.g = function(a) {
  return this.L(null, a);
};
k.h = function(a, b) {
  return this.M(null, a, b);
};
var ri = new Ki(null, 0, null, !1, null, 0);
function de(a, b) {
  for (var c = a.length, d = 0, e = Gc(ri);;) {
    if (d < c) {
      var f = d + 1, e = e.Xc(null, a[d], b[d]), d = f
    } else {
      return Ic(e);
    }
  }
}
function Li(a, b, c, d, e) {
  this.X = a;
  this.root = b;
  this.count = c;
  this.Ba = d;
  this.ib = e;
  this.G = 56;
  this.t = 258;
}
k = Li.prototype;
k.Xc = function(a, b, c) {
  return Mi(this, b, c);
};
k.qc = function(a, b) {
  return Ni(this, b);
};
k.rc = function() {
  var a;
  if (this.X) {
    this.X = null, a = new Ki(null, this.count, this.root, this.Ba, this.ib, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
k.L = function(a, b) {
  return null == b ? this.Ba ? this.ib : null : null == this.root ? null : this.root.mc(0, ed(b), b);
};
k.M = function(a, b, c) {
  return null == b ? this.Ba ? this.ib : c : null == this.root ? c : this.root.mc(0, ed(b), b, c);
};
k.T = function() {
  if (this.X) {
    return this.count;
  }
  throw Error("count after persistent!");
};
function Ni(a, b) {
  if (a.X) {
    if (b ? b.t & 2048 || b.Ef || (b.t ? 0 : hb(Ob, b)) : hb(Ob, b)) {
      return Mi(a, vf.g ? vf.g(b) : vf.call(null, b), wf.g ? wf.g(b) : wf.call(null, b));
    }
    for (var c = B(b), d = a;;) {
      var e = C(c);
      if (q(e)) {
        var f = e, c = F(c), d = Mi(d, function() {
          var a = f;
          return vf.g ? vf.g(a) : vf.call(null, a);
        }(), function() {
          var a = f;
          return wf.g ? wf.g(a) : wf.call(null, a);
        }())
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent");
  }
}
function Mi(a, b, c) {
  if (a.X) {
    if (null == b) {
      a.ib !== c && (a.ib = c), a.Ba || (a.count += 1, a.Ba = !0);
    } else {
      var d = new ui;
      b = (null == a.root ? Ci : a.root).Gb(a.X, 0, ed(b), b, c, d);
      b !== a.root && (a.root = b);
      d.D && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
function Oi(a, b, c) {
  for (var d = b;;) {
    if (null != a) {
      b = c ? a.left : a.right, d = be.h(d, a), a = b;
    } else {
      return d;
    }
  }
}
function Pi(a, b, c, d, e) {
  this.C = a;
  this.stack = b;
  this.cd = c;
  this.B = d;
  this.w = e;
  this.G = 0;
  this.t = 32374862;
}
k = Pi.prototype;
k.toString = function() {
  return Wc(this);
};
k.H = function() {
  return this.C;
};
k.T = function() {
  return 0 > this.B ? K(F(this)) + 1 : this.B;
};
k.Q = function() {
  var a = this.w;
  return null != a ? a : this.w = a = ud(this);
};
k.N = function(a, b) {
  return Kd(this, b);
};
k.aa = function() {
  return Nd(sd, this.C);
};
k.ha = function(a, b) {
  return Od.h(b, this);
};
k.ia = function(a, b, c) {
  return Od.j(b, c, this);
};
k.da = function() {
  return ie(this.stack);
};
k.sa = function() {
  var a = C(this.stack), a = Oi(this.cd ? a.right : a.left, F(this.stack), this.cd);
  return null != a ? new Pi(null, a, this.cd, this.B - 1, null) : sd;
};
k.R = function() {
  return this;
};
k.I = function(a, b) {
  return new Pi(b, this.stack, this.cd, this.B, this.w);
};
k.S = function(a, b) {
  return Ld(b, this);
};
function Qi(a, b, c) {
  return new Pi(null, Oi(a, null, b), b, c, null);
}
function Ri(a, b, c, d) {
  return c instanceof Si ? c.left instanceof Si ? new Si(c.key, c.D, c.left.Ob(), new Ti(a, b, c.right, d, null), null) : c.right instanceof Si ? new Si(c.right.key, c.right.D, new Ti(c.key, c.D, c.left, c.right.left, null), new Ti(a, b, c.right.right, d, null), null) : new Ti(a, b, c, d, null) : new Ti(a, b, c, d, null);
}
function Ui(a, b, c, d) {
  return d instanceof Si ? d.right instanceof Si ? new Si(d.key, d.D, new Ti(a, b, c, d.left, null), d.right.Ob(), null) : d.left instanceof Si ? new Si(d.left.key, d.left.D, new Ti(a, b, c, d.left.left, null), new Ti(d.key, d.D, d.left.right, d.right, null), null) : new Ti(a, b, c, d, null) : new Ti(a, b, c, d, null);
}
function Vi(a, b, c, d) {
  if (c instanceof Si) {
    return new Si(a, b, c.Ob(), d, null);
  }
  if (d instanceof Ti) {
    return Ui(a, b, c, d.ad());
  }
  if (d instanceof Si && d.left instanceof Ti) {
    return new Si(d.left.key, d.left.D, new Ti(a, b, c, d.left.left, null), Ui(d.key, d.D, d.left.right, d.right.ad()), null);
  }
  throw Error("red-black tree invariant violation");
}
var Xi = function Wi(b, c, d) {
  d = null != b.left ? Wi(b.left, c, d) : d;
  if (Ed(d)) {
    return I.g ? I.g(d) : I.call(null, d);
  }
  var e = b.key, f = b.D;
  d = c.j ? c.j(d, e, f) : c.call(null, d, e, f);
  if (Ed(d)) {
    return I.g ? I.g(d) : I.call(null, d);
  }
  b = null != b.right ? Wi(b.right, c, d) : d;
  return Ed(b) ? I.g ? I.g(b) : I.call(null, b) : b;
};
function Ti(a, b, c, d, e) {
  this.key = a;
  this.D = b;
  this.left = c;
  this.right = d;
  this.w = e;
  this.G = 0;
  this.t = 32402207;
}
k = Ti.prototype;
k.oe = function(a) {
  return a.re(this);
};
k.ad = function() {
  return new Si(this.key, this.D, this.left, this.right, null);
};
k.Ob = function() {
  return this;
};
k.ne = function(a) {
  return a.qe(this);
};
k.replace = function(a, b, c, d) {
  return new Ti(a, b, c, d, null);
};
k.qe = function(a) {
  return new Ti(a.key, a.D, this, a.right, null);
};
k.re = function(a) {
  return new Ti(a.key, a.D, a.left, this, null);
};
k.yc = function(a, b) {
  return Xi(this, a, b);
};
k.L = function(a, b) {
  return v.j(this, b, null);
};
k.M = function(a, b, c) {
  return v.j(this, b, c);
};
k.F = function(a, b) {
  return 0 === b ? this.key : 1 === b ? this.D : null;
};
k.Ha = function(a, b, c) {
  return 0 === b ? this.key : 1 === b ? this.D : c;
};
k.sc = function(a, b, c) {
  return(new T(null, 2, 5, U, [this.key, this.D], null)).sc(null, b, c);
};
k.H = function() {
  return null;
};
k.T = function() {
  return 2;
};
k.Tc = function() {
  return this.key;
};
k.Uc = function() {
  return this.D;
};
k.jc = function() {
  return this.D;
};
k.kc = function() {
  return new T(null, 1, 5, U, [this.key], null);
};
k.Q = function() {
  var a = this.w;
  return null != a ? a : this.w = a = ud(this);
};
k.N = function(a, b) {
  return Kd(this, b);
};
k.aa = function() {
  return ae;
};
k.ha = function(a, b) {
  return Fd.h(this, b);
};
k.ia = function(a, b, c) {
  return Fd.j(this, b, c);
};
k.ga = function(a, b, c) {
  return Q.j(new T(null, 2, 5, U, [this.key, this.D], null), b, c);
};
k.R = function() {
  return ub(ub(sd, this.D), this.key);
};
k.I = function(a, b) {
  return Nd(new T(null, 2, 5, U, [this.key, this.D], null), b);
};
k.S = function(a, b) {
  return new T(null, 3, 5, U, [this.key, this.D, b], null);
};
k.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.L(null, c);
      case 3:
        return this.M(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.h = function(a, c) {
    return this.L(null, c);
  };
  a.j = function(a, c, d) {
    return this.M(null, c, d);
  };
  return a;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(mb(b)));
};
k.g = function(a) {
  return this.L(null, a);
};
k.h = function(a, b) {
  return this.M(null, a, b);
};
function Si(a, b, c, d, e) {
  this.key = a;
  this.D = b;
  this.left = c;
  this.right = d;
  this.w = e;
  this.G = 0;
  this.t = 32402207;
}
k = Si.prototype;
k.oe = function(a) {
  return new Si(this.key, this.D, this.left, a, null);
};
k.ad = function() {
  throw Error("red-black tree invariant violation");
};
k.Ob = function() {
  return new Ti(this.key, this.D, this.left, this.right, null);
};
k.ne = function(a) {
  return new Si(this.key, this.D, a, this.right, null);
};
k.replace = function(a, b, c, d) {
  return new Si(a, b, c, d, null);
};
k.qe = function(a) {
  return this.left instanceof Si ? new Si(this.key, this.D, this.left.Ob(), new Ti(a.key, a.D, this.right, a.right, null), null) : this.right instanceof Si ? new Si(this.right.key, this.right.D, new Ti(this.key, this.D, this.left, this.right.left, null), new Ti(a.key, a.D, this.right.right, a.right, null), null) : new Ti(a.key, a.D, this, a.right, null);
};
k.re = function(a) {
  return this.right instanceof Si ? new Si(this.key, this.D, new Ti(a.key, a.D, a.left, this.left, null), this.right.Ob(), null) : this.left instanceof Si ? new Si(this.left.key, this.left.D, new Ti(a.key, a.D, a.left, this.left.left, null), new Ti(this.key, this.D, this.left.right, this.right, null), null) : new Ti(a.key, a.D, a.left, this, null);
};
k.yc = function(a, b) {
  return Xi(this, a, b);
};
k.L = function(a, b) {
  return v.j(this, b, null);
};
k.M = function(a, b, c) {
  return v.j(this, b, c);
};
k.F = function(a, b) {
  return 0 === b ? this.key : 1 === b ? this.D : null;
};
k.Ha = function(a, b, c) {
  return 0 === b ? this.key : 1 === b ? this.D : c;
};
k.sc = function(a, b, c) {
  return(new T(null, 2, 5, U, [this.key, this.D], null)).sc(null, b, c);
};
k.H = function() {
  return null;
};
k.T = function() {
  return 2;
};
k.Tc = function() {
  return this.key;
};
k.Uc = function() {
  return this.D;
};
k.jc = function() {
  return this.D;
};
k.kc = function() {
  return new T(null, 1, 5, U, [this.key], null);
};
k.Q = function() {
  var a = this.w;
  return null != a ? a : this.w = a = ud(this);
};
k.N = function(a, b) {
  return Kd(this, b);
};
k.aa = function() {
  return ae;
};
k.ha = function(a, b) {
  return Fd.h(this, b);
};
k.ia = function(a, b, c) {
  return Fd.j(this, b, c);
};
k.ga = function(a, b, c) {
  return Q.j(new T(null, 2, 5, U, [this.key, this.D], null), b, c);
};
k.R = function() {
  return ub(ub(sd, this.D), this.key);
};
k.I = function(a, b) {
  return Nd(new T(null, 2, 5, U, [this.key, this.D], null), b);
};
k.S = function(a, b) {
  return new T(null, 3, 5, U, [this.key, this.D, b], null);
};
k.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.L(null, c);
      case 3:
        return this.M(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.h = function(a, c) {
    return this.L(null, c);
  };
  a.j = function(a, c, d) {
    return this.M(null, c, d);
  };
  return a;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(mb(b)));
};
k.g = function(a) {
  return this.L(null, a);
};
k.h = function(a, b) {
  return this.M(null, a, b);
};
var Zi = function Yi(b, c, d, e, f) {
  if (null == c) {
    return new Si(d, e, null, null, null);
  }
  var g;
  g = c.key;
  g = b.h ? b.h(d, g) : b.call(null, d, g);
  if (0 === g) {
    return f[0] = c, null;
  }
  if (0 > g) {
    return b = Yi(b, c.left, d, e, f), null != b ? c.ne(b) : null;
  }
  b = Yi(b, c.right, d, e, f);
  return null != b ? c.oe(b) : null;
}, aj = function $i(b, c) {
  if (null == b) {
    return c;
  }
  if (null == c) {
    return b;
  }
  if (b instanceof Si) {
    if (c instanceof Si) {
      var d = $i(b.right, c.left);
      return d instanceof Si ? new Si(d.key, d.D, new Si(b.key, b.D, b.left, d.left, null), new Si(c.key, c.D, d.right, c.right, null), null) : new Si(b.key, b.D, b.left, new Si(c.key, c.D, d, c.right, null), null);
    }
    return new Si(b.key, b.D, b.left, $i(b.right, c), null);
  }
  if (c instanceof Si) {
    return new Si(c.key, c.D, $i(b, c.left), c.right, null);
  }
  d = $i(b.right, c.left);
  return d instanceof Si ? new Si(d.key, d.D, new Ti(b.key, b.D, b.left, d.left, null), new Ti(c.key, c.D, d.right, c.right, null), null) : Vi(b.key, b.D, b.left, new Ti(c.key, c.D, d, c.right, null));
}, cj = function bj(b, c, d, e) {
  if (null != c) {
    var f;
    f = c.key;
    f = b.h ? b.h(d, f) : b.call(null, d, f);
    if (0 === f) {
      return e[0] = c, aj(c.left, c.right);
    }
    if (0 > f) {
      return b = bj(b, c.left, d, e), null != b || null != e[0] ? c.left instanceof Ti ? Vi(c.key, c.D, b, c.right) : new Si(c.key, c.D, b, c.right, null) : null;
    }
    b = bj(b, c.right, d, e);
    if (null != b || null != e[0]) {
      if (c.right instanceof Ti) {
        if (e = c.key, d = c.D, c = c.left, b instanceof Si) {
          c = new Si(e, d, c, b.Ob(), null);
        } else {
          if (c instanceof Ti) {
            c = Ri(e, d, c.ad(), b);
          } else {
            if (c instanceof Si && c.right instanceof Ti) {
              c = new Si(c.right.key, c.right.D, Ri(c.key, c.D, c.left.ad(), c.right.left), new Ti(e, d, c.right.right, b, null), null);
            } else {
              throw Error("red-black tree invariant violation");
            }
          }
        }
      } else {
        c = new Si(c.key, c.D, c.left, b, null);
      }
    } else {
      c = null;
    }
    return c;
  }
  return null;
}, ej = function dj(b, c, d, e) {
  var f = c.key, g = b.h ? b.h(d, f) : b.call(null, d, f);
  return 0 === g ? c.replace(f, e, c.left, c.right) : 0 > g ? c.replace(f, c.D, dj(b, c.left, d, e), c.right) : c.replace(f, c.D, c.left, dj(b, c.right, d, e));
};
function fj(a, b, c, d, e) {
  this.Bb = a;
  this.hc = b;
  this.B = c;
  this.C = d;
  this.w = e;
  this.t = 418776847;
  this.G = 8192;
}
k = fj.prototype;
k.forEach = function(a) {
  for (var b = B(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.F(null, e), g = O.j(f, 0, null), f = O.j(f, 1, null);
      a.h ? a.h(f, g) : a.call(null, f, g);
      e += 1;
    } else {
      if (b = B(b)) {
        S(b) ? (c = x(b), b = z(b), g = c, d = K(c), c = g) : (c = C(b), g = O.j(c, 0, null), c = f = O.j(c, 1, null), a.h ? a.h(c, g) : a.call(null, c, g), b = F(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
k.toString = function() {
  return Wc(this);
};
k.values = function() {
  return ki(ni.g ? ni.g(this) : ni.call(null, this));
};
function gj(a, b) {
  for (var c = a.hc;;) {
    if (null != c) {
      var d;
      d = c.key;
      d = a.Bb.h ? a.Bb.h(b, d) : a.Bb.call(null, b, d);
      if (0 === d) {
        return c;
      }
      c = 0 > d ? c.left : c.right;
    } else {
      return null;
    }
  }
}
k.L = function(a, b) {
  return Cb.j(this, b, null);
};
k.M = function(a, b, c) {
  a = gj(this, b);
  return null != a ? a.D : c;
};
k.Sc = function(a, b, c) {
  return null != this.hc ? Xi(this.hc, b, c) : c;
};
k.H = function() {
  return this.C;
};
k.T = function() {
  return this.B;
};
k.Vc = function() {
  return 0 < this.B ? Qi(this.hc, !1, this.B) : null;
};
k.Q = function() {
  var a = this.w;
  return null != a ? a : this.w = a = Ad(this);
};
k.N = function(a, b) {
  return ii(this, b);
};
k.aa = function() {
  return Nd(hj, this.C);
};
k.va = function(a, b) {
  var c = [null], d = cj(this.Bb, this.hc, b, c);
  return null == d ? null == O.h(c, 0) ? this : new fj(this.Bb, null, 0, this.C, null) : new fj(this.Bb, d.Ob(), this.B - 1, this.C, null);
};
k.ga = function(a, b, c) {
  a = [null];
  var d = Zi(this.Bb, this.hc, b, c, a);
  return null == d ? (a = O.h(a, 0), md.h(c, a.D) ? this : new fj(this.Bb, ej(this.Bb, this.hc, b, c), this.B, this.C, null)) : new fj(this.Bb, d.Ob(), this.B + 1, this.C, null);
};
k.hd = function(a, b) {
  return null != gj(this, b);
};
k.R = function() {
  return 0 < this.B ? Qi(this.hc, !0, this.B) : null;
};
k.I = function(a, b) {
  return new fj(this.Bb, this.hc, this.B, b, this.w);
};
k.S = function(a, b) {
  if (pe(b)) {
    return Kb(this, v.h(b, 0), v.h(b, 1));
  }
  for (var c = this, d = B(b);;) {
    if (null == d) {
      return c;
    }
    var e = C(d);
    if (pe(e)) {
      c = Kb(c, v.h(e, 0), v.h(e, 1)), d = F(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
k.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.L(null, c);
      case 3:
        return this.M(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.h = function(a, c) {
    return this.L(null, c);
  };
  a.j = function(a, c, d) {
    return this.M(null, c, d);
  };
  return a;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(mb(b)));
};
k.g = function(a) {
  return this.L(null, a);
};
k.h = function(a, b) {
  return this.M(null, a, b);
};
var hj = new fj(nd, null, 0, null, 0), Cg = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = H(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = B(a);
    for (var b = Gc(ri);;) {
      if (a) {
        var e = F(F(a)), b = ng.j(b, C(a), Pd(a));
        a = e;
      } else {
        return Ic(b);
      }
    }
  }
  a.A = 0;
  a.o = function(a) {
    a = B(a);
    return b(a);
  };
  a.k = b;
  return a;
}(), ij = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = H(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    for (var e = B(b), f = new fj(Fe(a), null, 0, null, 0);;) {
      if (e) {
        var g = F(F(e)), f = Q.j(f, C(e), Pd(e)), e = g
      } else {
        return f;
      }
    }
  }
  a.A = 1;
  a.o = function(a) {
    var d = C(a);
    a = E(a);
    return b(d, a);
  };
  a.k = b;
  return a;
}();
function rj(a, b) {
  this.Da = a;
  this.Ga = b;
  this.G = 0;
  this.t = 32374988;
}
k = rj.prototype;
k.toString = function() {
  return Wc(this);
};
k.H = function() {
  return this.Ga;
};
k.wa = function() {
  var a = this.Da, a = (a ? a.t & 128 || a.md || (a.t ? 0 : hb(Ab, a)) : hb(Ab, a)) ? this.Da.wa(null) : F(this.Da);
  return null == a ? null : new rj(a, this.Ga);
};
k.Q = function() {
  return ud(this);
};
k.N = function(a, b) {
  return Kd(this, b);
};
k.aa = function() {
  return Nd(sd, this.Ga);
};
k.ha = function(a, b) {
  return Od.h(b, this);
};
k.ia = function(a, b, c) {
  return Od.j(b, c, this);
};
k.da = function() {
  return this.Da.da(null).Tc(null);
};
k.sa = function() {
  var a = this.Da, a = (a ? a.t & 128 || a.md || (a.t ? 0 : hb(Ab, a)) : hb(Ab, a)) ? this.Da.wa(null) : F(this.Da);
  return null != a ? new rj(a, this.Ga) : sd;
};
k.R = function() {
  return this;
};
k.I = function(a, b) {
  return new rj(this.Da, b);
};
k.S = function(a, b) {
  return Ld(b, this);
};
function sj(a) {
  return(a = B(a)) ? new rj(a, null) : null;
}
function vf(a) {
  return Pb(a);
}
function tj(a, b) {
  this.Da = a;
  this.Ga = b;
  this.G = 0;
  this.t = 32374988;
}
k = tj.prototype;
k.toString = function() {
  return Wc(this);
};
k.H = function() {
  return this.Ga;
};
k.wa = function() {
  var a = this.Da, a = (a ? a.t & 128 || a.md || (a.t ? 0 : hb(Ab, a)) : hb(Ab, a)) ? this.Da.wa(null) : F(this.Da);
  return null == a ? null : new tj(a, this.Ga);
};
k.Q = function() {
  return ud(this);
};
k.N = function(a, b) {
  return Kd(this, b);
};
k.aa = function() {
  return Nd(sd, this.Ga);
};
k.ha = function(a, b) {
  return Od.h(b, this);
};
k.ia = function(a, b, c) {
  return Od.j(b, c, this);
};
k.da = function() {
  return this.Da.da(null).Uc(null);
};
k.sa = function() {
  var a = this.Da, a = (a ? a.t & 128 || a.md || (a.t ? 0 : hb(Ab, a)) : hb(Ab, a)) ? this.Da.wa(null) : F(this.Da);
  return null != a ? new tj(a, this.Ga) : sd;
};
k.R = function() {
  return this;
};
k.I = function(a, b) {
  return new tj(this.Da, b);
};
k.S = function(a, b) {
  return Ld(b, this);
};
function ni(a) {
  return(a = B(a)) ? new tj(a, null) : null;
}
function wf(a) {
  return Qb(a);
}
var uj = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = H(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    return q(tg(Le, a)) ? Je.h(function(a, b) {
      return be.h(q(a) ? a : pi, b);
    }, a) : null;
  }
  a.A = 0;
  a.o = function(a) {
    a = B(a);
    return b(a);
  };
  a.k = b;
  return a;
}();
function vj(a, b) {
  for (var c = pi, d = B(b);;) {
    if (d) {
      var e = C(d), f = P.j(a, e, wj), c = qg.h(f, wj) ? Q.j(c, e, f) : c, d = F(d)
    } else {
      return c;
    }
  }
}
function xj(a, b, c) {
  this.C = a;
  this.vc = b;
  this.w = c;
  this.t = 15077647;
  this.G = 8196;
}
k = xj.prototype;
k.toString = function() {
  return Wc(this);
};
k.values = function() {
  return ki(B(this));
};
k.forEach = function(a) {
  for (var b = B(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.F(null, e), g = O.j(f, 0, null), f = O.j(f, 1, null);
      a.h ? a.h(f, g) : a.call(null, f, g);
      e += 1;
    } else {
      if (b = B(b)) {
        S(b) ? (c = x(b), b = z(b), g = c, d = K(c), c = g) : (c = C(b), g = O.j(c, 0, null), c = f = O.j(c, 1, null), a.h ? a.h(c, g) : a.call(null, c, g), b = F(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
k.L = function(a, b) {
  return Cb.j(this, b, null);
};
k.M = function(a, b, c) {
  return Ib(this.vc, b) ? b : c;
};
k.H = function() {
  return this.C;
};
k.T = function() {
  return pb(this.vc);
};
k.Q = function() {
  var a = this.w;
  return null != a ? a : this.w = a = Ad(this);
};
k.N = function(a, b) {
  return me(b) && K(this) === K(b) && sg(function(a) {
    return function(b) {
      return Ce(a, b);
    };
  }(this), b);
};
k.Gc = function() {
  return new yj(Gc(this.vc));
};
k.aa = function() {
  return Nd(zj, this.C);
};
k.Be = function(a, b) {
  return new xj(this.C, Nb(this.vc, b), null);
};
k.R = function() {
  return sj(this.vc);
};
k.I = function(a, b) {
  return new xj(b, this.vc, this.w);
};
k.S = function(a, b) {
  return new xj(this.C, Q.j(this.vc, b, null), null);
};
k.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.L(null, c);
      case 3:
        return this.M(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.h = function(a, c) {
    return this.L(null, c);
  };
  a.j = function(a, c, d) {
    return this.M(null, c, d);
  };
  return a;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(mb(b)));
};
k.g = function(a) {
  return this.L(null, a);
};
k.h = function(a, b) {
  return this.M(null, a, b);
};
var zj = new xj(null, pi, 0);
function Aj(a) {
  var b = a.length;
  if (b <= qi) {
    for (var c = 0, d = Gc(pi);;) {
      if (c < b) {
        var e = c + 1, d = Jc(d, a[c], null), c = e
      } else {
        return new xj(null, Ic(d), null);
      }
    }
  } else {
    for (c = 0, d = Gc(zj);;) {
      if (c < b) {
        e = c + 1, d = Hc(d, a[c]), c = e;
      } else {
        return Ic(d);
      }
    }
  }
}
function yj(a) {
  this.gc = a;
  this.t = 259;
  this.G = 136;
}
k = yj.prototype;
k.call = function() {
  function a(a, b, c) {
    return Cb.j(this.gc, b, ze) === ze ? c : b;
  }
  function b(a, b) {
    return Cb.j(this.gc, b, ze) === ze ? null : b;
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
  return this.call.apply(this, [this].concat(mb(b)));
};
k.g = function(a) {
  return Cb.j(this.gc, a, ze) === ze ? null : a;
};
k.h = function(a, b) {
  return Cb.j(this.gc, a, ze) === ze ? b : a;
};
k.L = function(a, b) {
  return Cb.j(this, b, null);
};
k.M = function(a, b, c) {
  return Cb.j(this.gc, b, ze) === ze ? c : b;
};
k.T = function() {
  return K(this.gc);
};
k.qc = function(a, b) {
  this.gc = ng.j(this.gc, b, null);
  return this;
};
k.rc = function() {
  return new xj(null, Ic(this.gc), null);
};
function Bj(a) {
  a = B(a);
  if (null == a) {
    return zj;
  }
  if (a instanceof rd && 0 === a.K) {
    a = a.m;
    a: {
      for (var b = 0, c = Gc(zj);;) {
        if (b < a.length) {
          var d = b + 1, c = c.qc(null, a[b]), b = d
        } else {
          a = c;
          break a;
        }
      }
      a = void 0;
    }
    return a.rc(null);
  }
  for (d = Gc(zj);;) {
    if (null != a) {
      b = a.wa(null), d = d.qc(null, a.da(null)), a = b;
    } else {
      return d.rc(null);
    }
  }
}
function Cj(a) {
  return function c(a, e) {
    return new Ef(null, function() {
      return function(a, d) {
        for (;;) {
          var e = a, l = O.j(e, 0, null);
          if (e = B(e)) {
            if (Ce(d, l)) {
              l = E(e), e = d, a = l, d = e;
            } else {
              return Ld(l, c(E(e), be.h(d, l)));
            }
          } else {
            return null;
          }
        }
      }.call(null, a, e);
    }, null, null);
  }(a, zj);
}
function Cf(a) {
  if (a && (a.G & 4096 || a.Gf)) {
    return a.name;
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error("Doesn't support name: " + u.g(a));
}
function Dj(a, b) {
  for (var c = Gc(pi), d = B(a), e = B(b);;) {
    if (d && e) {
      c = ng.j(c, C(d), C(e)), d = F(d), e = F(e);
    } else {
      return Ic(c);
    }
  }
}
var Ej = function() {
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
      return Je.j(function(c, d) {
        return b.j(a, c, d);
      }, b.j(a, d, e), l);
    }
    a.A = 3;
    a.o = function(a) {
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
        return c.k(b, e, f, H(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.A = 3;
  b.o = c.o;
  b.h = function(a, b) {
    return b;
  };
  b.j = a;
  b.k = c.k;
  return b;
}(), Fj = function() {
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
      return Je.j(function(c, d) {
        return b.j(a, c, d);
      }, b.j(a, d, e), l);
    }
    a.A = 3;
    a.o = function(a) {
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
        return c.k(b, e, f, H(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.A = 3;
  b.o = c.o;
  b.h = function(a, b) {
    return b;
  };
  b.j = a;
  b.k = c.k;
  return b;
}();
function Gj(a, b, c, d, e) {
  this.C = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.w = e;
  this.t = 32375006;
  this.G = 8192;
}
k = Gj.prototype;
k.toString = function() {
  return Wc(this);
};
k.F = function(a, b) {
  if (b < pb(this)) {
    return this.start + b * this.step;
  }
  if (this.start > this.end && 0 === this.step) {
    return this.start;
  }
  throw Error("Index out of bounds");
};
k.Ha = function(a, b, c) {
  return b < pb(this) ? this.start + b * this.step : this.start > this.end && 0 === this.step ? this.start : c;
};
k.H = function() {
  return this.C;
};
k.wa = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new Gj(this.C, this.start + this.step, this.end, this.step, null) : null : this.start + this.step > this.end ? new Gj(this.C, this.start + this.step, this.end, this.step, null) : null;
};
k.T = function() {
  if (gb(qc(this))) {
    return 0;
  }
  var a = (this.end - this.start) / this.step;
  return Math.ceil.g ? Math.ceil.g(a) : Math.ceil.call(null, a);
};
k.Q = function() {
  var a = this.w;
  return null != a ? a : this.w = a = ud(this);
};
k.N = function(a, b) {
  return Kd(this, b);
};
k.aa = function() {
  return Nd(sd, this.C);
};
k.ha = function(a, b) {
  return Fd.h(this, b);
};
k.ia = function(a, b, c) {
  return Fd.j(this, b, c);
};
k.da = function() {
  return null == qc(this) ? null : this.start;
};
k.sa = function() {
  return null != qc(this) ? new Gj(this.C, this.start + this.step, this.end, this.step, null) : sd;
};
k.R = function() {
  return 0 < this.step ? this.start < this.end ? this : null : this.start > this.end ? this : null;
};
k.I = function(a, b) {
  return new Gj(b, this.start, this.end, this.step, this.w);
};
k.S = function(a, b) {
  return Ld(b, this);
};
var Hj = function() {
  function a(a, b, c) {
    return new Gj(null, a, b, c, null);
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
function Ij(a) {
  return lg(Je.j(function(a, c) {
    return ng.j(a, c, P.j(a, c, 0) + 1);
  }, Gc(pi), a));
}
var Jj = function() {
  function a(a, b, f) {
    return Ld(b, new Ef(null, function() {
      var g = B(f);
      return g ? c.j(a, function() {
        var c = C(g);
        return a.h ? a.h(b, c) : a.call(null, b, c);
      }(), E(g)) : null;
    }, null, null));
  }
  function b(a, b) {
    return new Ef(null, function() {
      var f = B(b);
      return f ? c.j(a, C(f), E(f)) : ub(sd, a.q ? a.q() : a.call(null));
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
}(), Kj = function() {
  function a(a, b, c) {
    return function() {
      function d(e, l, p) {
        return new T(null, 3, 5, U, [a.j ? a.j(e, l, p) : a.call(null, e, l, p), b.j ? b.j(e, l, p) : b.call(null, e, l, p), c.j ? c.j(e, l, p) : c.call(null, e, l, p)], null);
      }
      function e(d, l) {
        return new T(null, 3, 5, U, [a.h ? a.h(d, l) : a.call(null, d, l), b.h ? b.h(d, l) : b.call(null, d, l), c.h ? c.h(d, l) : c.call(null, d, l)], null);
      }
      function t(d) {
        return new T(null, 3, 5, U, [a.g ? a.g(d) : a.call(null, d), b.g ? b.g(d) : b.call(null, d), c.g ? c.g(d) : c.call(null, d)], null);
      }
      function s() {
        return new T(null, 3, 5, U, [a.q ? a.q() : a.call(null), b.q ? b.q() : b.call(null), c.q ? c.q() : c.call(null)], null);
      }
      var w = null, A = function() {
        function d(a, b, c, f) {
          var g = null;
          3 < arguments.length && (g = H(Array.prototype.slice.call(arguments, 3), 0));
          return e.call(this, a, b, c, g);
        }
        function e(d, l, p, t) {
          return new T(null, 3, 5, U, [R.J(a, d, l, p, t), R.J(b, d, l, p, t), R.J(c, d, l, p, t)], null);
        }
        d.A = 3;
        d.o = function(a) {
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
      }(), w = function(a, b, c, f) {
        switch(arguments.length) {
          case 0:
            return s.call(this);
          case 1:
            return t.call(this, a);
          case 2:
            return e.call(this, a, b);
          case 3:
            return d.call(this, a, b, c);
          default:
            return A.k(a, b, c, H(arguments, 3));
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      w.A = 3;
      w.o = A.o;
      w.q = s;
      w.g = t;
      w.h = e;
      w.j = d;
      w.k = A.k;
      return w;
    }();
  }
  function b(a, b) {
    return function() {
      function c(d, e, h) {
        return new T(null, 2, 5, U, [a.j ? a.j(d, e, h) : a.call(null, d, e, h), b.j ? b.j(d, e, h) : b.call(null, d, e, h)], null);
      }
      function d(c, e) {
        return new T(null, 2, 5, U, [a.h ? a.h(c, e) : a.call(null, c, e), b.h ? b.h(c, e) : b.call(null, c, e)], null);
      }
      function e(c) {
        return new T(null, 2, 5, U, [a.g ? a.g(c) : a.call(null, c), b.g ? b.g(c) : b.call(null, c)], null);
      }
      function t() {
        return new T(null, 2, 5, U, [a.q ? a.q() : a.call(null), b.q ? b.q() : b.call(null)], null);
      }
      var s = null, w = function() {
        function c(a, b, e, f) {
          var g = null;
          3 < arguments.length && (g = H(Array.prototype.slice.call(arguments, 3), 0));
          return d.call(this, a, b, e, g);
        }
        function d(c, e, h, l) {
          return new T(null, 2, 5, U, [R.J(a, c, e, h, l), R.J(b, c, e, h, l)], null);
        }
        c.A = 3;
        c.o = function(a) {
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
      }(), s = function(a, b, f, g) {
        switch(arguments.length) {
          case 0:
            return t.call(this);
          case 1:
            return e.call(this, a);
          case 2:
            return d.call(this, a, b);
          case 3:
            return c.call(this, a, b, f);
          default:
            return w.k(a, b, f, H(arguments, 3));
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      s.A = 3;
      s.o = w.o;
      s.q = t;
      s.g = e;
      s.h = d;
      s.j = c;
      s.k = w.k;
      return s;
    }();
  }
  function c(a) {
    return function() {
      function b(c, d, e) {
        return new T(null, 1, 5, U, [a.j ? a.j(c, d, e) : a.call(null, c, d, e)], null);
      }
      function c(b, d) {
        return new T(null, 1, 5, U, [a.h ? a.h(b, d) : a.call(null, b, d)], null);
      }
      function d(b) {
        return new T(null, 1, 5, U, [a.g ? a.g(b) : a.call(null, b)], null);
      }
      function e() {
        return new T(null, 1, 5, U, [a.q ? a.q() : a.call(null)], null);
      }
      var t = null, s = function() {
        function b(a, d, e, f) {
          var g = null;
          3 < arguments.length && (g = H(Array.prototype.slice.call(arguments, 3), 0));
          return c.call(this, a, d, e, g);
        }
        function c(b, d, e, g) {
          return new T(null, 1, 5, U, [R.J(a, b, d, e, g)], null);
        }
        b.A = 3;
        b.o = function(a) {
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
      }(), t = function(a, f, t, D) {
        switch(arguments.length) {
          case 0:
            return e.call(this);
          case 1:
            return d.call(this, a);
          case 2:
            return c.call(this, a, f);
          case 3:
            return b.call(this, a, f, t);
          default:
            return s.k(a, f, t, H(arguments, 3));
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      t.A = 3;
      t.o = s.o;
      t.q = e;
      t.g = d;
      t.h = c;
      t.j = b;
      t.k = s.k;
      return t;
    }();
  }
  var d = null, e = function() {
    function a(c, d, e, f) {
      var s = null;
      3 < arguments.length && (s = H(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, d, e, s);
    }
    function b(a, c, d, e) {
      return function(a) {
        return function() {
          function b(c, d, e) {
            return Je.j(function() {
              return function(a, b) {
                return be.h(a, b.j ? b.j(c, d, e) : b.call(null, c, d, e));
              };
            }(a), ae, a);
          }
          function c(b, d) {
            return Je.j(function() {
              return function(a, c) {
                return be.h(a, c.h ? c.h(b, d) : c.call(null, b, d));
              };
            }(a), ae, a);
          }
          function d(b) {
            return Je.j(function() {
              return function(a, c) {
                return be.h(a, c.g ? c.g(b) : c.call(null, b));
              };
            }(a), ae, a);
          }
          function e() {
            return Je.j(function() {
              return function(a, b) {
                return be.h(a, b.q ? b.q() : b.call(null));
              };
            }(a), ae, a);
          }
          var f = null, g = function() {
            function b(a, d, e, f) {
              var g = null;
              3 < arguments.length && (g = H(Array.prototype.slice.call(arguments, 3), 0));
              return c.call(this, a, d, e, g);
            }
            function c(b, d, e, f) {
              return Je.j(function() {
                return function(a, c) {
                  return be.h(a, R.J(c, b, d, e, f));
                };
              }(a), ae, a);
            }
            b.A = 3;
            b.o = function(a) {
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
                return g.k(a, f, h, H(arguments, 3));
            }
            throw Error("Invalid arity: " + arguments.length);
          };
          f.A = 3;
          f.o = g.o;
          f.q = e;
          f.g = d;
          f.h = c;
          f.j = b;
          f.k = g.k;
          return f;
        }();
      }(jg.p(a, c, d, e));
    }
    a.A = 3;
    a.o = function(a) {
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
        return e.k(d, g, h, H(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.A = 3;
  d.o = e.o;
  d.g = c;
  d.h = b;
  d.j = a;
  d.k = e.k;
  return d;
}(), Lj = function() {
  function a(a, b) {
    for (;;) {
      if (B(b) && 0 < a) {
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
      if (B(a)) {
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
}(), Mj = function() {
  function a(a, b) {
    Lj.h(a, b);
    return b;
  }
  function b(a) {
    Lj.g(a);
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
function Nj(a, b) {
  if ("string" === typeof b) {
    var c = a.exec(b);
    return md.h(C(c), b) ? 1 === K(c) ? C(c) : Fh(c) : null;
  }
  throw new TypeError("re-matches must match against a string.");
}
function Oj(a, b) {
  if ("string" === typeof b) {
    var c = a.exec(b);
    return null == c ? null : 1 === K(c) ? C(c) : Fh(c);
  }
  throw new TypeError("re-find must match against a string.");
}
function Pj(a) {
  var b = Oj(/^(?:\(\?([idmsux]*)\))?(.*)/, a);
  O.j(b, 0, null);
  a = O.j(b, 1, null);
  b = O.j(b, 2, null);
  return new RegExp(b, a);
}
function Qj(a, b, c, d, e, f, g) {
  var h = $a;
  try {
    $a = null == $a ? null : $a - 1;
    if (null != $a && 0 > $a) {
      return xc(a, "#");
    }
    xc(a, c);
    if (B(g)) {
      var l = C(g);
      b.j ? b.j(l, a, f) : b.call(null, l, a, f);
    }
    for (var p = F(g), t = fb.g(f) - 1;;) {
      if (!p || null != t && 0 === t) {
        B(p) && 0 === t && (xc(a, d), xc(a, "..."));
        break;
      } else {
        xc(a, d);
        var s = C(p);
        c = a;
        g = f;
        b.j ? b.j(s, c, g) : b.call(null, s, c, g);
        var w = F(p);
        c = t - 1;
        p = w;
        t = c;
      }
    }
    return xc(a, e);
  } finally {
    $a = h;
  }
}
var Rj = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = H(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    for (var e = B(b), f = null, g = 0, h = 0;;) {
      if (h < g) {
        var l = f.F(null, h);
        xc(a, l);
        h += 1;
      } else {
        if (e = B(e)) {
          f = e, S(f) ? (e = x(f), g = z(f), f = e, l = K(e), e = g, g = l) : (l = C(f), xc(a, l), e = F(f), f = null, g = 0), h = 0;
        } else {
          return null;
        }
      }
    }
  }
  a.A = 1;
  a.o = function(a) {
    var d = C(a);
    a = E(a);
    return b(d, a);
  };
  a.k = b;
  return a;
}(), Sj = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function Tj(a) {
  return'"' + u.g(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return Sj[a];
  })) + '"';
}
var Wj = function Uj(b, c, d) {
  if (null == b) {
    return xc(c, "nil");
  }
  if (void 0 === b) {
    return xc(c, "#\x3cundefined\x3e");
  }
  q(function() {
    var c = P.h(d, db);
    return q(c) ? (c = b ? b.t & 131072 || b.Ff ? !0 : b.t ? !1 : hb($b, b) : hb($b, b)) ? he(b) : c : c;
  }()) && (xc(c, "^"), Uj(he(b), c, d), xc(c, " "));
  if (null == b) {
    return xc(c, "nil");
  }
  if (b.eb) {
    return b.jb(b, c, d);
  }
  if (b && (b.t & 2147483648 || b.Y)) {
    return b.O(null, c, d);
  }
  if (jb(b) === Boolean || "number" === typeof b) {
    return xc(c, "" + u.g(b));
  }
  if (null != b && b.constructor === Object) {
    xc(c, "#js ");
    var e = Jg.h(function(c) {
      return new T(null, 2, 5, U, [Df.g(c), b[c]], null);
    }, qe(b));
    return Vj.p ? Vj.p(e, Uj, c, d) : Vj.call(null, e, Uj, c, d);
  }
  return b instanceof Array ? Qj(c, Uj, "#js [", " ", "]", d, b) : q(ga(b)) ? q(cb.g(d)) ? xc(c, Tj(b)) : xc(c, b) : fe(b) ? Rj.k(c, H(["#\x3c", "" + u.g(b), "\x3e"], 0)) : b instanceof Date ? (e = function(b, c) {
    for (var d = "" + u.g(b);;) {
      if (K(d) < c) {
        d = "0" + u.g(d);
      } else {
        return d;
      }
    }
  }, Rj.k(c, H(['#inst "', "" + u.g(b.getUTCFullYear()), "-", e(b.getUTCMonth() + 1, 2), "-", e(b.getUTCDate(), 2), "T", e(b.getUTCHours(), 2), ":", e(b.getUTCMinutes(), 2), ":", e(b.getUTCSeconds(), 2), ".", e(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0))) : b instanceof RegExp ? Rj.k(c, H(['#"', b.source, '"'], 0)) : (b ? b.t & 2147483648 || b.Y || (b.t ? 0 : hb(yc, b)) : hb(yc, b)) ? zc(b, c, d) : Rj.k(c, H(["#\x3c", "" + u.g(b), "\x3e"], 0));
};
function Xj(a, b) {
  var c = new Oa;
  a: {
    var d = new Vc(c);
    Wj(C(a), d, b);
    for (var e = B(F(a)), f = null, g = 0, h = 0;;) {
      if (h < g) {
        var l = f.F(null, h);
        xc(d, " ");
        Wj(l, d, b);
        h += 1;
      } else {
        if (e = B(e)) {
          f = e, S(f) ? (e = x(f), g = z(f), f = e, l = K(e), e = g, g = l) : (l = C(f), xc(d, " "), Wj(l, d, b), e = F(f), f = null, g = 0), h = 0;
        } else {
          break a;
        }
      }
    }
  }
  return c;
}
var Gg = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = H(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b = ab();
    return ke(a) ? "" : "" + u.g(Xj(a, b));
  }
  a.A = 0;
  a.o = function(a) {
    a = B(a);
    return b(a);
  };
  a.k = b;
  return a;
}();
function Vj(a, b, c, d) {
  return Qj(c, function(a, c, d) {
    var h = Pb(a);
    b.j ? b.j(h, c, d) : b.call(null, h, c, d);
    xc(c, " ");
    a = Qb(a);
    return b.j ? b.j(a, c, d) : b.call(null, a, c, d);
  }, "{", ", ", "}", d, B(a));
}
rd.prototype.Y = !0;
rd.prototype.O = function(a, b, c) {
  return Qj(b, Wj, "(", " ", ")", c, this);
};
Ef.prototype.Y = !0;
Ef.prototype.O = function(a, b, c) {
  return Qj(b, Wj, "(", " ", ")", c, this);
};
Pi.prototype.Y = !0;
Pi.prototype.O = function(a, b, c) {
  return Qj(b, Wj, "(", " ", ")", c, this);
};
Ii.prototype.Y = !0;
Ii.prototype.O = function(a, b, c) {
  return Qj(b, Wj, "(", " ", ")", c, this);
};
Ti.prototype.Y = !0;
Ti.prototype.O = function(a, b, c) {
  return Qj(b, Wj, "[", " ", "]", c, this);
};
mi.prototype.Y = !0;
mi.prototype.O = function(a, b, c) {
  return Qj(b, Wj, "(", " ", ")", c, this);
};
Hh.prototype.Y = !0;
Hh.prototype.O = function(a, b, c) {
  return Qj(b, Wj, "(", " ", ")", c, this);
};
Bf.prototype.Y = !0;
Bf.prototype.O = function(a, b, c) {
  return Qj(b, Wj, "(", " ", ")", c, this);
};
Jd.prototype.Y = !0;
Jd.prototype.O = function(a, b, c) {
  return Qj(b, Wj, "(", " ", ")", c, this);
};
Ki.prototype.Y = !0;
Ki.prototype.O = function(a, b, c) {
  return Vj(this, Wj, b, c);
};
Ji.prototype.Y = !0;
Ji.prototype.O = function(a, b, c) {
  return Qj(b, Wj, "(", " ", ")", c, this);
};
Jh.prototype.Y = !0;
Jh.prototype.O = function(a, b, c) {
  return Qj(b, Wj, "[", " ", "]", c, this);
};
fj.prototype.Y = !0;
fj.prototype.O = function(a, b, c) {
  return Vj(this, Wj, b, c);
};
xj.prototype.Y = !0;
xj.prototype.O = function(a, b, c) {
  return Qj(b, Wj, "#{", " ", "}", c, this);
};
bg.prototype.Y = !0;
bg.prototype.O = function(a, b, c) {
  return Qj(b, Wj, "(", " ", ")", c, this);
};
Bg.prototype.Y = !0;
Bg.prototype.O = function(a, b, c) {
  xc(b, "#\x3cAtom: ");
  Wj(this.state, b, c);
  return xc(b, "\x3e");
};
tj.prototype.Y = !0;
tj.prototype.O = function(a, b, c) {
  return Qj(b, Wj, "(", " ", ")", c, this);
};
Si.prototype.Y = !0;
Si.prototype.O = function(a, b, c) {
  return Qj(b, Wj, "[", " ", "]", c, this);
};
T.prototype.Y = !0;
T.prototype.O = function(a, b, c) {
  return Qj(b, Wj, "[", " ", "]", c, this);
};
Oh.prototype.Y = !0;
Oh.prototype.O = function(a, b, c) {
  return Qj(b, Wj, "(", " ", ")", c, this);
};
yf.prototype.Y = !0;
yf.prototype.O = function(a, b) {
  return xc(b, "()");
};
Ph.prototype.Y = !0;
Ph.prototype.O = function(a, b, c) {
  return Qj(b, Wj, "#queue [", " ", "]", c, B(this));
};
n.prototype.Y = !0;
n.prototype.O = function(a, b, c) {
  return Vj(this, Wj, b, c);
};
Gj.prototype.Y = !0;
Gj.prototype.O = function(a, b, c) {
  return Qj(b, Wj, "(", " ", ")", c, this);
};
rj.prototype.Y = !0;
rj.prototype.O = function(a, b, c) {
  return Qj(b, Wj, "(", " ", ")", c, this);
};
xf.prototype.Y = !0;
xf.prototype.O = function(a, b, c) {
  return Qj(b, Wj, "(", " ", ")", c, this);
};
T.prototype.jd = !0;
T.prototype.kd = function(a, b) {
  return Ee.h(this, b);
};
Jh.prototype.jd = !0;
Jh.prototype.kd = function(a, b) {
  return Ee.h(this, b);
};
V.prototype.jd = !0;
V.prototype.kd = function(a, b) {
  return gd(this, b);
};
pd.prototype.jd = !0;
pd.prototype.kd = function(a, b) {
  return gd(this, b);
};
function Yj(a, b, c) {
  Ec(a, b, c);
}
var Zj = null, ak = function() {
  function a(a) {
    null == Zj && (Zj = Eg.g ? Eg.g(0) : Eg.call(null, 0));
    return qd.g("" + u.g(a) + u.g(Hg.h(Zj, Bd)));
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
function bk(a) {
  return function(b, c) {
    var d = a.h ? a.h(b, c) : a.call(null, b, c);
    return Ed(d) ? new Dd(d) : d;
  };
}
function $g(a) {
  return function(b) {
    return function() {
      function c(a, c) {
        return Je.j(b, a, c);
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
  }(bk(a));
}
nf = function() {
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
of = function(a) {
  a *= Math.random.q ? Math.random.q() : Math.random.call(null);
  return Math.floor.g ? Math.floor.g(a) : Math.floor.call(null, a);
};
function ck(a, b) {
  return lg(Je.j(function(b, d) {
    var e = a.g ? a.g(d) : a.call(null, d);
    return ng.j(b, e, be.h(P.j(b, e, ae), d));
  }, Gc(pi), b));
}
function dk(a) {
  this.$a = a;
  this.G = 0;
  this.t = 2153775104;
}
dk.prototype.Q = function() {
  for (var a = Gg.k(H([this], 0)), b = 0, c = 0;c < a.length;++c) {
    b = 31 * b + a.charCodeAt(c), b %= 4294967296;
  }
  return b;
};
dk.prototype.O = function(a, b) {
  return xc(b, '#uuid "' + u.g(this.$a) + '"');
};
dk.prototype.N = function(a, b) {
  return b instanceof dk && this.$a === b.$a;
};
dk.prototype.toString = function() {
  return this.$a;
};
var ek = new V(null, "inactive", "inactive", -306247616), fk = new V(null, "y", "y", -1757859776), gk = new V(null, "learn-segs", "learn-segs", -481861280), hk = new V(null, "ppath", "ppath", -1758182784), ik = new V(null, "no-deref-monitor", "no-deref-monitor", 1171473184), jk = new V(null, "seg-w-px", "seg-w-px", 1192509248), kk = new V(null, "fieldset", "fieldset", -1949770816), lk = new V(null, "fieldset#sim-controls", "fieldset#sim-controls", 443000993), mk = new V(null, "watches", "watches", 
-273097535), nk = new V(null, "boost-overlap-duty-ratio", "boost-overlap-duty-ratio", -1153915647), ok = new V(null, "ff-perm-connected", "ff-perm-connected", 828443105), pk = new V(null, "ff-synapses", "ff-synapses", -1536453151), qk = new V(null, "gap-countdown", "gap-countdown", -2051578079), rk = new V(null, "target-density", "target-density", 391599009), sk = new V(null, "fieldset.region-spec", "fieldset.region-spec", 1547815873), tk = new V(null, "run-0-5", "run-0-5", -60879870), uk = new V(null, 
"min", "min", 444991522), vk = new V(null, "down", "down", 1565245570), wk = new V(null, "boosts", "boosts", 2116854050), xk = new V("zip", "branch?", "zip/branch?", -998880862), yk = new V(null, "max-syns", "max-syns", -930774526), zk = new V(null, "distal-punish?", "distal-punish?", 1652249154), Ak = new V(null, "span#sim-rate", "span#sim-rate", -400148894), Bk = new V(null, "r", "r", -471384190), Ck = new V(null, "text-margin", "text-margin", 1161346978), Dk = new V(null, "g.tick.major-tick", 
"g.tick.major-tick", 1467819139), Jk = new V("zip", "children", "zip/children", -940194589), Kk = new V(null, "dh", "dh", 528137731), Lk = new V(null, "run-sim", "run-sim", 1708970627), Mk = new V(null, "burst-cols", "burst-cols", 1737318083), Nk = new V(null, "a#sim-faster", "a#sim-faster", 1179722499), Ok = new V(null, "tp-exc", "tp-exc", -2084609213), Pk = new V(null, "inh-radius", "inh-radius", 849540035), Qk = new V(null, "span#sim-timestep", "span#sim-timestep", -764964893), Rk = new V(null, 
"max-segs", "max-segs", -976352252), Sk = new V(null, "alternative", "alternative", 51666308), Tk = new V(null, "transform", "transform", 1381301764), db = new V(null, "meta", "meta", 1499536964), Uk = new V(null, "selected", "selected", 574897764), Vk = new V(null, "dx", "dx", -381796732), Wk = new V(null, "seg-new-synapse-count", "seg-new-synapse-count", 841824004), Xk = new V(null, "seg-h-space-px", "seg-h-space-px", 1353315204), Yk = new V(null, "scroll-top", "scroll-top", -46723100), Zk = new V(null, 
"scroll-counter", "scroll-counter", 628002885), $k = new V("org.nfrac.comportex.demos.isolated-1d", "current-pattern-index", "org.nfrac.comportex.demos.isolated-1d/current-pattern-index", -20812731), eb = new V(null, "dup", "dup", 556298533), al = new V(null, "g.ticks", "g.ticks", 28507493), bl = new V(null, "temporal-pooling", "temporal-pooling", 240992677), cl = new V(null, "segment-idx", "segment-idx", -248867259), dl = new V(null, "key", "key", -1516042587), el = new V(null, "index", "index", 
-1531685915), fl = new V(null, "pred-cells", "pred-cells", -549223386), gl = new V(null, "bottom", "bottom", -1550509018), hl = new V(null, "max-segments", "max-segments", -157037498), il = new V(null, "encoder", "encoder", -1113127834), jl = new V(null, "button#sim-start", "button#sim-start", -924760922), kl = new V(null, "exit", "exit", 351849638), ll = new V(null, "src-\x3ei", "src-\x3ei", -1634218746), ml = new V(null, "distal-perm-dec", "distal-perm-dec", -223583802), nl = new V(null, "disconnected", 
"disconnected", -1908014586), ol = new V(null, "cull", "cull", -1824785850), pl = new V(null, "boost-active-duty-ratio", "boost-active-duty-ratio", 891850342), ql = new V(null, "tp-scores", "tp-scores", -375463769), rl = new V(null, "lat-synapses", "lat-synapses", 1341366663), sl = new V(null, "button#sim-reset", "button#sim-reset", -1103042169), tl = new V(null, "top", "top", -1856271961), ul = new V(null, "derefed", "derefed", 590684583), vl = new V(null, "text.label", "text.label", 210580295), 
wl = new V(null, "yellow", "yellow", -881035449), Dg = new V(null, "validator", "validator", -1966190681), xl = new V(null, "highlight", "highlight", -800930873), yl = new V(null, "line.rule", "line.rule", -722114232), zl = new V(null, "button#anim-step", "button#anim-step", 1065036136), Al = new V(null, "seg-h-px", "seg-h-px", -443969112), Bl = new V(null, "finally-block", "finally-block", 832982472), Cl = new V(null, "h-space-px", "h-space-px", -766035480), Dl = new V(null, "col-shrink", "col-shrink", 
-1043182072), El = new V(null, "i-\x3esrc", "i-\x3esrc", -299811032), Fl = new V(null, "learn-segments", "learn-segments", 1869208392), Gl = new V(null, "distal-perm-connected", "distal-perm-connected", -1849103512), Hl = new V(null, "columns", "columns", 1998437288), Il = new V(null, "a#anim-slower", "a#anim-slower", -2103660568), Jl = new V(null, "ff-potential-frac", "ff-potential-frac", -1934654295), Kl = new V(null, "w", "w", 354169001), Ll = new V(null, "seg-learn-threshold", "seg-learn-threshold", 
1271249129), Ml = new V(null, "sy", "sy", 227523849), Nl = new V(null, "element-h", "element-h", -1458880151), Ol = new V(null, "anim-go?", "anim-go?", 1109067401), Pl = new V(null, "dt", "dt", -368444759), Ql = new V(null, "formatter", "formatter", -483008823), Rl = new V(null, "parent-watchables", "parent-watchables", -319854903), Sl = new V(null, "value", "value", 305978217), Tl = new V(null, "seg-stimulus-threshold", "seg-stimulus-threshold", -1901580343), Ul = new V(null, "green", "green", -945526839), 
Vl = new V(null, "time", "time", 1385887882), Wl = new V(null, "fieldset#anim-controls", "fieldset#anim-controls", 750977322), Xl = new V(null, "mapping", "mapping", -1242405430), Yl = new V(null, "sig-overlaps", "sig-overlaps", 436652586), Zl = new V(null, "page-up", "page-up", 1352555050), Qn = new V(null, "regions", "regions", -1023815958), Rn = new V(null, "timestep", "timestep", -1557942486), Sn = new V(null, "dirty?", "dirty?", -2059845846), Tn = new V(null, "y1", "y1", 589123466), Un = new V(null, 
"width", "width", -384071477), Vn = new V(null, "a#sim-slower", "a#sim-slower", -8187669), Wn = new V(null, "background", "background", -863952629), Xn = new V(null, "column-dimensions", "column-dimensions", 935248171), Yn = new V(null, "button#sim-step", "button#sim-step", -991688373), Zn = new V(null, "dy", "dy", 1719547243), $n = new V(null, "connected", "connected", -169833045), ao = new V(null, "p.detail", "p.detail", -259333685), bo = new V(null, "submit", "submit", -49315317), co = new V(null, 
"active-duty-cycles", "active-duty-cycles", -2100410837), eo = new V(null, "legend", "legend", -1027192245), fo = new V(null, "alternative-cells", "alternative-cells", 714708619), go = new V(null, "shrink", "shrink", 1415287595), ho = new V(null, "orientation", "orientation", 623557579), io = new V(null, "fieldset#viz-options", "fieldset#viz-options", -957799412), jo = new V(null, "predictive", "predictive", 742235276), ko = new V(null, "signal-cells", "signal-cells", -451652436), lo = new V(null, 
"draw-steps", "draw-steps", -100988692), Y = new V(null, "recur", "recur", -437573268), mo = new V(null, "type", "type", 1174270348), no = new V("comportexviz.viz-canvas", "acols", "comportexviz.viz-canvas/acols", 1747707340), oo = new V(null, "update", "update", 1045576396), po = new V(null, "catch-block", "catch-block", 1175212748), qo = new V(null, "twos", "twos", 709888876), ro = new V(null, "state", "state", -1988618099), so = new V(null, "votes-frac", "votes-frac", -680687347), to = new V(null, 
"g.timestep", "g.timestep", -1438660275), uo = new V(null, "distal-perm-inc", "distal-perm-inc", -162111059), vo = new V(null, "major-tick-width", "major-tick-width", -401901043), wo = new V("comportexviz.viz-canvas", "abits", "comportexviz.viz-canvas/abits", -1378531795), xo = new V(null, "update-dom", "update-dom", 1414664877), yo = new V(null, "seg-max-synapse-count", "seg-max-synapse-count", -139057427), zo = new V(null, "span.detail", "span.detail", -1905752307), Ao = new V(null, "span#sim-ms-text", 
"span#sim-ms-text", -117079187), bb = new V(null, "flush-on-newline", "flush-on-newline", -151457939), Bo = new V(null, "overlap-duty-cycles", "overlap-duty-cycles", 1224111053), Co = new V(null, "sim-step-ms", "sim-step-ms", -1192536083), Do = new V(null, "button#anim-start", "button#anim-start", 373847086), Eo = new V(null, "extra-distal-size", "extra-distal-size", -460733170), Fo = new V(null, "learn-cells", "learn-cells", -1536897586), Go = new V(null, "all", "all", 892129742), Ho = new V(null, 
"ff-sg", "ff-sg", 18382766), Io = new V(null, "span#anim-every-text", "span#anim-every-text", -815816561), Jo = new V(null, "l", "l", 1395893423), Ko = new V(null, "seed", "seed", 68613327), Lo = new V(null, "alternative-learning?", "alternative-learning?", -1659105041), Mo = new V(null, "up", "up", -269712113), No = new V("zip", "make-node", "zip/make-node", 1103800591), Oo = new V(null, "canvas", "canvas", -1798817489), Po = new V(null, "size", "size", 1098693007), Qo = new V(null, "learn-cols", 
"learn-cols", 164580271), Ro = new V(null, "enter", "enter", 1792452624), So = new V(null, "bit-h-px", "bit-h-px", -1081204688), To = new V(null, "demote", "demote", 2088906896), Uo = new V(null, "learning", "learning", 612366512), Vo = new V(null, "region", "region", 270415120), Wo = new V(null, "style", "style", -496642736), Xo = new V(null, "clamp?", "clamp?", 249465200), Yo = new V(null, "ts", "ts", 1617209904), Zo = new V(null, "div", "div", 1057191632), $o = new V(null, "option", "option", 
65132272), cb = new V(null, "readably", "readably", 1129599760), ap = new V(null, "run-start", "run-start", 1984981840), bp = new V(null, "activation", "activation", 2128521072), cp = new V("comportexviz.viz-canvas", "tpcols", "comportexviz.viz-canvas/tpcols", 500403377), dp = new V(null, "key-fn", "key-fn", -636154479), ep = new V(null, "spec", "spec", 347520401), fp = new V(null, "g", "g", 1738089905), gp = new V(null, "bit-precision", "bit-precision", 2066921041), hp = new V(null, "button#anim-stop", 
"button#anim-stop", -279088527), ip = new V(null, "random-double", "random-double", -922602767), jp = new V(null, "active-predicted", "active-predicted", -72115407), kp = new V(null, "click", "click", 1912301393), lp = new V(null, "cp1x", "cp1x", 465245137), mp = new V(null, "active-cols", "active-cols", -922660398), np = new V(null, "anim-every", "anim-every", 1633754642), op = new V(null, "max-boost", "max-boost", 608482834), pp = new V(null, "ff-potential-radius", "ff-potential-radius", 254943154), 
qp = new V(null, "label-margin", "label-margin", -17690670), rp = new V(null, "cp2x", "cp2x", -1682644749), sp = new V(null, "inhibition-speed", "inhibition-speed", 2020956531), tp = new V(null, "line", "line", 212345235), up = new V(null, "ff-perm-inc", "ff-perm-inc", -742369901), vp = new V(null, "tp-cells", "tp-cells", -1141498413), Kp = new V(null, "i-\x3etgt", "i-\x3etgt", -1469739469), Lp = new V("comportexviz.viz-canvas", "pbits", "comportexviz.viz-canvas/pbits", 1988133491), eq = new V(null, 
"active-cells-by-col", "active-cells-by-col", 782265971), fq = new V(null, "div#comportex-drawing", "div#comportex-drawing", 1638716307), gq = new V(null, "active-cells", "active-cells", -1277925485), hq = new V(null, "targets-by-source", "targets-by-source", -1472501869), iq = new V(null, "g.plot-space", "g.plot-space", -1258275917), jq = new V(null, "h", "h", 1109658740), kq = new V(null, "from", "from", 1815293044), lq = new V(null, "a#anim-faster", "a#anim-faster", -1294334764), fb = new V(null, 
"print-length", "print-length", 1931866356), mq = new V(null, "max", "max", 61366548), nq = new V(null, "bit-coverage", "bit-coverage", -771349196), oq = new V(null, "active", "active", 1895962068), pq = new V(null, "col", "col", -1959363084), qq = new V(null, "activation-level", "activation-level", -1385123308), rq = new V(null, "overlaps", "overlaps", 1398230580), sq = new V(null, "label", "label", 1718410804), tq = new V(null, "id", "id", -1388402092), uq = new V(null, "class", "class", -2030961996), 
vq = new V(null, "red", "red", -969428204), wq = new V(null, "blue", "blue", -622100620), xq = new V(null, "extent", "extent", -186399820), yq = new V(null, "catch-exception", "catch-exception", -1997306795), zq = new V(null, "opts", "opts", 155075701), Aq = new V(null, "init-value", "init-value", -374892331), Bq = new V(null, "input-w-px", "input-w-px", -99789611), Cq = new V(null, "distal-sg", "distal-sg", 752001365), Dq = new V("comportexviz.viz-canvas", "pcols", "comportexviz.viz-canvas/pcols", 
1740826069), Eq = new V(null, "checked", "checked", -50955819), Fq = new V("org.nfrac.comportex.demos.isolated-1d", "gap-countdown", "org.nfrac.comportex.demos.isolated-1d/gap-countdown", 1385863765), Gq = new V(null, "left-px", "left-px", -745883979), Hq = new V(null, "ts-plot", "ts-plot", -1498457323), Iq = new V(null, "global-inhibition", "global-inhibition", -936260811), Jq = new V(null, "pnodes", "pnodes", 1739080565), Kq = new V(null, "prev", "prev", -1597069226), Lq = new V(null, "svg", "svg", 
856789142), Mq = new V(null, "changed?", "changed?", -437828330), Nq = new V(null, "span.parameter-label", "span.parameter-label", -815265354), Oq = new V(null, "length", "length", 588987862), Pq = new V(null, "button#sim-stop", "button#sim-stop", 1477647862), Qq = new V(null, "continue-block", "continue-block", -1852047850), Rq = new V(null, "span#sim-reset-status", "span#sim-reset-status", 1741880118), Sq = new V(null, "step-counter", "step-counter", 881657879), Tq = new V(null, "alternative-segments", 
"alternative-segments", -1132719081), Uq = new V(null, "cp1y", "cp1y", 628283543), Vq = new V(null, "div#comportex-controls", "div#comportex-controls", -1291722569), Wq = new V(null, "div#comportex-parameters", "div#comportex-parameters", 737276119), Xq = new V(null, "ff-perm-dec", "ff-perm-dec", 1363415607), Yq = new V(null, "right", "right", -452581833), Zq = new V(null, "ticks", "ticks", -406190313), $q = new V(null, "dw", "dw", -821060841), ar = new V(null, "redraw", "redraw", -1075394793), br = 
new V(null, "input-dimensions", "input-dimensions", -1946955913), cr = new V(null, "input-topology", "input-topology", -2015425577), dr = new V(null, "display", "display", 242065432), er = new V(null, "syns-by-target", "syns-by-target", 1015999640), fr = new V(null, "drawing", "drawing", 1181749528), gr = new V(null, "f", "f", -1597136552), hr = new V(null, "sx", "sx", -403071592), ir = new V(null, "cell-id", "cell-id", 1789875608), jr = new V(null, "saw-10-15", "saw-10-15", 953187768), kr = new V(null, 
"depth", "depth", 1768663640), lr = new V(null, "br", "br", 934104792), mr = new V(null, "inhibition-base-distance", "inhibition-base-distance", 645074808), nr = new V(null, "rev-5-1", "rev-5-1", -252300392), or = new V(null, "define-me!", "define-me!", -268367591), pr = new V(null, "x", "x", 2099068185), qr = new V(null, "subs", "subs", -186681991), rr = new V(null, "x1", "x1", -1863922247), sr = new V(null, "bit-w-px", "bit-w-px", -531552775), tr = new V(null, "form", "form", -1624062471), ur = 
new V(null, "prior-pred-cells", "prior-pred-cells", 2074077785), vr = new V(null, "tag", "tag", -1290361223), wr = new V(null, "predicted", "predicted", 2110738041), xr = new V(null, "res", "res", -1395007879), yr = new V(null, "sh", "sh", -682444007), zr = new V(null, "capture", "capture", -677031143), Ar = new V(null, "sw", "sw", 833113913), Br = new V(null, "domain", "domain", 1847214937), Cr = new V(null, "input", "input", 556931961), Dr = new V(null, "cp2y", "cp2y", 903335801), Er = new V(null, 
"uuid", "uuid", -2145095719), Fr = new V(null, "seq", "seq", -1817803783), Gr = new V(null, "keep-n", "keep-n", -176064454), Hr = new V(null, "change", "change", -1163046502), Ir = new V(null, "page-down", "page-down", -392838598), Jr = new V(null, "purple", "purple", -876021126), Kr = new V(null, "end", "end", -268185958), Lr = new V(null, "y2", "y2", -718691301), Mr = new V(null, "circles?", "circles?", -1676300005), Nr = new V("comportexviz", "draw-input", "comportexviz/draw-input", -516395685), 
Or = new V(null, "proximal-vs-distal-weight", "proximal-vs-distal-weight", -1312658693), Pr = new V(null, "jump-6-12", "jump-6-12", -1217478725), Qr = new V(null, "tgt-\x3ei", "tgt-\x3ei", -220968868), Rr = new V("comportexviz.viz-canvas", "cache", "comportexviz.viz-canvas/cache", 33193148), Sr = new V(null, "force-update?", "force-update?", 137364796), Tr = new V(null, "distal-exc", "distal-exc", -506020516), Ur = new V(null, "duty-cycle-period", "duty-cycle-period", -962296356), Vr = new V(null, 
"layer-3", "layer-3", 891136476), Wr = new V(null, "pcon", "pcon", 219389436), Xr = new V(null, "permanences", "permanences", -1713734116), Yr = new V("org.nfrac.comportex.core", "no-matching-UUID!", "org.nfrac.comportex.core/no-matching-UUID!", 1023231548), Zr = new V("comportexviz.viz-canvas", "ocols", "comportexviz.viz-canvas/ocols", -2081286436), $r = new V(null, "rect", "rect", -108902628), as = new V(null, "step", "step", 1288888124), bs = new V(null, "p", "p", 151049309), cs = new V("comportexviz.viz-canvas", 
"vcols", "comportexviz.viz-canvas/vcols", 649010429), ds = new V(null, "column-field", "column-field", -2123020963), es = new V(null, "x2", "x2", -1362513475), fs = new V(null, "spontaneous-activation?", "spontaneous-activation?", 1807538270), gs = new V(null, "run-6-10", "run-6-10", 295893118), hs = new V(null, "href", "href", -793805698), is = new V(null, "none", "none", 1333468478), js = new V(null, "votes-per-bit", "votes-per-bit", -1001226722), ks = new V(null, "bucket", "bucket", 1126218366), 
ls = new V(null, "elements-per-dt", "elements-per-dt", 703850270), ms = new V(null, "cull-zeros?", "cull-zeros?", -434506978), ns = new V(null, "col-d-px", "col-d-px", -985327682), os = new V(null, "bit-shrink", "bit-shrink", -1161684994), ps = new V(null, "range", "range", 1639692286), qs = new V(null, "height", "height", 1025178622), rs = new V(null, "select", "select", 1147833503), ss = new V(null, "distal-perm-init", "distal-perm-init", -48514913), ts = new V(null, "ff-stimulus-threshold", "ff-stimulus-threshold", 
-48644961), us = new V(null, "promote", "promote", -1158882145), vs = new V(null, "skip", "skip", 602715391), ws = new V(null, "cell-r-px", "cell-r-px", 423637311), xs = new V(null, "topology", "topology", -474296001), ys = new V(null, "left", "left", -399115937), wj = new V("cljs.core", "not-found", "cljs.core/not-found", -1572889185), zs = new V(null, "raw-sg", "raw-sg", 955489791), As = new V(null, "text", "text", -1790561697), Bs = new V(null, "element-w", "element-w", 2089708127), Cs = new V(null, 
"span", "span", 1394872991), Ds = new V(null, "margin", "margin", -995903681), Es = new V(null, "data", "data", -232669377);
function Fs(a) {
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
;var Gs;
a: {
  var Hs = aa.navigator;
  if (Hs) {
    var Is = Hs.userAgent;
    if (Is) {
      Gs = Is;
      break a;
    }
  }
  Gs = "";
}
;var Js = -1 != Gs.indexOf("Opera") || -1 != Gs.indexOf("OPR"), Ks = -1 != Gs.indexOf("Trident") || -1 != Gs.indexOf("MSIE"), Ls = -1 != Gs.indexOf("Gecko") && -1 == Gs.toLowerCase().indexOf("webkit") && !(-1 != Gs.indexOf("Trident") || -1 != Gs.indexOf("MSIE")), Ms = -1 != Gs.toLowerCase().indexOf("webkit");
function Ns() {
  var a = aa.document;
  return a ? a.documentMode : void 0;
}
var Os = function() {
  var a = "", b;
  if (Js && aa.opera) {
    return a = aa.opera.version, ia(a) ? a() : a;
  }
  Ls ? b = /rv\:([^\);]+)(\)|;)/ : Ks ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : Ms && (b = /WebKit\/(\S+)/);
  b && (a = (a = b.exec(Gs)) ? a[1] : "");
  return Ks && (b = Ns(), b > parseFloat(a)) ? String(b) : a;
}(), Ps = {};
function Qs(a) {
  var b;
  if (!(b = Ps[a])) {
    b = 0;
    for (var c = sa(String(Os)).split("."), d = sa(String(a)).split("."), e = Math.max(c.length, d.length), f = 0;0 == b && f < e;f++) {
      var g = c[f] || "", h = d[f] || "", l = RegExp("(\\d*)(\\D*)", "g"), p = RegExp("(\\d*)(\\D*)", "g");
      do {
        var t = l.exec(g) || ["", "", ""], s = p.exec(h) || ["", "", ""];
        if (0 == t[0].length && 0 == s[0].length) {
          break;
        }
        b = Ia(0 == t[1].length ? 0 : parseInt(t[1], 10), 0 == s[1].length ? 0 : parseInt(s[1], 10)) || Ia(0 == t[2].length, 0 == s[2].length) || Ia(t[2], s[2]);
      } while (0 == b);
    }
    b = Ps[a] = 0 <= b;
  }
  return b;
}
var Eu = aa.document, Fu = Eu && Ks ? Ns() || ("CSS1Compat" == Eu.compatMode ? parseInt(Os, 10) : 5) : void 0;
var Gu = !Ks || Ks && 9 <= Fu;
!Ls && !Ks || Ks && Ks && 9 <= Fu || Ls && Qs("1.9.1");
var Hu = Ks && !Qs("9");
function Iu(a) {
  return a ? new Ju(Ku(a)) : Ra || (Ra = new Ju);
}
function Lu(a, b) {
  var c = b && "*" != b ? b.toUpperCase() : "";
  return a.querySelectorAll && a.querySelector && c ? a.querySelectorAll(c + "") : a.getElementsByTagName(c || "*");
}
function Mu(a, b) {
  Ka(b, function(b, d) {
    "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in Nu ? a.setAttribute(Nu[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b;
  });
}
var Nu = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", frameborder:"frameBorder", height:"height", maxlength:"maxLength", role:"role", rowspan:"rowSpan", type:"type", usemap:"useMap", valign:"vAlign", width:"width"};
function Ou(a, b, c, d) {
  function e(c) {
    c && b.appendChild(ga(c) ? a.createTextNode(c) : c);
  }
  for (;d < c.length;d++) {
    var f = c[d];
    !da(f) || ja(f) && 0 < f.nodeType ? e(f) : Va(Pu(f) ? Wa(f) : f, e);
  }
}
function Qu(a) {
  return void 0 != a.firstElementChild ? a.firstElementChild : Ru(a.firstChild);
}
function Ru(a) {
  for (;a && 1 != a.nodeType;) {
    a = a.nextSibling;
  }
  return a;
}
function Ku(a) {
  return 9 == a.nodeType ? a : a.ownerDocument || a.document;
}
var Su = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, Tu = {IMG:" ", BR:"\n"};
function Uu(a) {
  if (Hu && "innerText" in a) {
    a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
  } else {
    var b = [];
    Vu(a, b, !0);
    a = b.join("");
  }
  a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
  a = a.replace(/\u200B/g, "");
  Hu || (a = a.replace(/ +/g, " "));
  " " != a && (a = a.replace(/^\s*/, ""));
  return a;
}
function Vu(a, b, c) {
  if (!(a.nodeName in Su)) {
    if (3 == a.nodeType) {
      c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
    } else {
      if (a.nodeName in Tu) {
        b.push(Tu[a.nodeName]);
      } else {
        for (a = a.firstChild;a;) {
          Vu(a, b, c), a = a.nextSibling;
        }
      }
    }
  }
}
function Pu(a) {
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
function Ju(a) {
  this.Jc = a || aa.document || document;
}
k = Ju.prototype;
k.tc = function(a, b, c) {
  var d = this.Jc, e = arguments, f = e[0], g = e[1];
  if (!Gu && g && (g.name || g.type)) {
    f = ["\x3c", f];
    g.name && f.push(' name\x3d"', va(g.name), '"');
    if (g.type) {
      f.push(' type\x3d"', va(g.type), '"');
      var h = {};
      Na(h, g);
      delete h.type;
      g = h;
    }
    f.push("\x3e");
    f = f.join("");
  }
  f = d.createElement(f);
  g && (ga(g) ? f.className = g : "array" == m(g) ? f.className = g.join(" ") : Mu(f, g));
  2 < e.length && Ou(d, f, e, 2);
  return f;
};
k.createElement = function(a) {
  return this.Jc.createElement(a);
};
k.createTextNode = function(a) {
  return this.Jc.createTextNode(String(a));
};
k.appendChild = function(a, b) {
  a.appendChild(b);
};
k.append = function(a, b) {
  Ou(Ku(a), a, arguments, 1);
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
var Wu, Xu, Yu, Zu, $u, av, bv, cv, dv, ev, fv, gv, hv, iv, jv, kv, lv = {}.hasOwnProperty;
cv = function(a) {
  console.log(a);
};
fv = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
ev = /^(svg|g|rect|circle|clipPath|path|line|polygon|polyline|text|textPath)$/;
gv = /^\s+$/;
dv = /:(.+)/;
kv = {Tg:"http://www.w3.org/1999/xhtml", eh:"http://www.w3.org/1999/xlink", Lg:"http://www.w3.org/2000/svg", xml:"http://www.w3.org/XML/1998/namespace", fh:"http://www.w3.org/2000/xmlns"};
av = function(a) {
  var b, c;
  c = a.split(":");
  b = c[0];
  c = c[1];
  return null != c ? [kv[b] || b, c] : a.match(ev) ? [kv.Lg, a] : [kv.Tg, a];
};
Yu = function(a) {
  return ":*:" === a[0];
};
iv = function(a) {
  return null != a && a instanceof mv;
};
Zu = function(a) {
  return null != a && !1;
};
Wu = function(a) {
  return null != a && null != a.forEach;
};
$u = function(a) {
  return null != a && !Wu(a) && !iv(a) && !Zu(a) && a instanceof Object;
};
Xu = function(a) {
  return null != a && null != a.nodeType;
};
hv = function(a) {
  return null != a && null != a.substring;
};
bv = function(a) {
  return null != a && null != a.toFixed;
};
jv = function(a) {
  return 8 === a.nodeType || 3 === a.nodeType && a.textContent.match(gv);
};
function nv(a, b) {
  var c, d, e, f, g;
  if (null != b.style) {
    f = b.style;
    var h;
    h = [];
    for (g in f) {
      lv.call(f, g) && (c = f[g], h.push(a.style[Ja(g)] = c));
    }
    delete b.style;
  }
  if (null != b.properties) {
    f = b.properties;
    c = [];
    for (e in f) {
      lv.call(f, e) && (g = f[e], c.push(a[e] = g));
    }
    delete b.properties;
  }
  Wu(b["class"]) && (a.setAttribute("class", b["class"].join(" ")), delete b["class"]);
  g = [];
  for (d in b) {
    lv.call(b, d) && (f = b[d], null != f ? (c = d.split(dv), e = c[0], c = c[1], null != c ? g.push(a.setAttributeNS(kv[e] || e, c, f)) : g.push(a.setAttribute(d, f))) : g.push(a.removeAttribute(d)));
  }
}
function ov(a, b) {
  return null != b ? a.__singult_data__ = b : a.__singult_data__;
}
function pv(a) {
  return bv(a) ? a.toString() : Wu(a) ? qv(a) : a;
}
function qv(a) {
  var b, c, d, e, f;
  f = a[0];
  d = $u(a[1]) ? [a[1], a.slice(2)] : [{}, a.slice(1)];
  a = d[0];
  d = d[1];
  e = f.match(fv);
  f = e[1];
  b = e[2];
  e = e[3];
  null != b && (a.id = b);
  null != e && (b = e.split("."), Wu(a["class"]) ? a["class"] = a["class"].concat(b) : hv(a["class"]) ? a["class"] = b.concat([a["class"]]) : null == a["class"] && (a["class"] = b));
  f = av(f);
  b = f[0];
  f = f[1];
  c = [];
  d.forEach(function(a) {
    if (null != a) {
      return Yu(a) ? a.slice(1).forEach(function(a) {
        return c.push(pv(a));
      }) : c.push(pv(a));
    }
  });
  return{pg:b, tag:f, pe:a, children:c};
}
function rv(a) {
  var b, c;
  if (iv(a)) {
    throw Error("Unify must be the first and only child of its parent.");
  }
  if (Zu(a)) {
    return null;
  }
  if (hv(a)) {
    return document.createTextNode(a);
  }
  if (Xu(a)) {
    return a;
  }
  b = document.createElementNS(a.pg, a.tag);
  nv(b, a.pe);
  iv(c = a.children[0]) ? null != c.Ja ? c.data.forEach(function(a) {
    var e;
    e = c.Ja(a);
    ov(e, a);
    return b.appendChild(e);
  }) : c.data.forEach(function(a) {
    var e;
    e = rv(pv(c.Ma(a)));
    ov(e, a);
    return b.appendChild(e);
  }) : a.children.forEach(function(a) {
    a = rv(a);
    if (null != a) {
      return b.appendChild(a);
    }
  });
  return b;
}
function mv(a, b, c, d, e, f, g) {
  this.data = a;
  this.Ma = b;
  this.hb = c;
  this.Ja = d;
  this.update = e;
  this.fb = f;
  this.Xf = g;
  return this;
}
function sv(a, b) {
  var c, d, e, f, g, h, l, p, t, s, w, A, y;
  g = b.Ja || function(c) {
    c = rv(pv(b.Ma(c)));
    a.appendChild(c);
    return c;
  };
  y = b.update || function(a, c) {
    return tv(a, pv(b.Ma(c)));
  };
  h = b.fb || function(b) {
    return a.removeChild(b);
  };
  t = b.hb || function(a, b) {
    return b;
  };
  c = a.childNodes;
  f = function(a, b) {
    return "\x00" + t(a, b);
  };
  w = function(a, b) {
    return f(ov(a), b);
  };
  s = function(a, c) {
    var d;
    if (b.Xf) {
      return d = y(a, c), ov(d, c);
    }
    d = ov(a);
    if (null != d.N ? !d.N(d, c) : d !== c) {
      return d = y(a, c), ov(d, c);
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
    p = w(c[d], d), e[p] && (A[p] = c[d]), d += 1;
  }
  b.data.forEach(function(a, b) {
    var d, e, p;
    p = (d = b < c.length ? c[b] : void 0) ? w(d, b) : void 0;
    e = f(a, b);
    if (null == d) {
      return d = g(a), ov(d, a);
    }
    if (p === e) {
      return s(c[b], a);
    }
    A[p] || h(d);
    if (A[e]) {
      return d = A[e], l(d, b), s(d, a);
    }
    d = g(a);
    l(d, b);
    return ov(d, a);
  });
  for (d = b.data.length;d < c.length;) {
    h(c[d]);
  }
}
function tv(a, b) {
  var c, d, e, f;
  if (iv(b)) {
    sv(a, b);
  } else {
    if (!Zu(b)) {
      if (a.nodeName.toLowerCase() !== b.tag.toLowerCase()) {
        throw cv(a), cv(b), Error("Cannot merge $e into node of different type");
      }
      nv(a, b.pe);
      if (a.hasChildNodes()) {
        for (e = d = f = a.childNodes.length - 1;0 >= f ? 0 >= d : 0 <= d;e = 0 >= f ? ++d : --d) {
          c = a.childNodes[e], jv(c) && a.removeChild(c);
        }
      }
      if (iv(b.children[0])) {
        tv(a, b.children[0]);
      } else {
        if (a.childNodes.length > b.children.length) {
          for (e = c = d = a.childNodes.length - 1;0 >= d ? 0 >= c : 0 <= c;e = 0 >= d ? ++c : --c) {
            a.removeChild(a.childNodes[e]);
          }
        }
        for (e = 0;e < b.children.length;) {
          d = b.children[e] || "";
          c = a.childNodes[e];
          if (hv(d)) {
            null != c ? c.textContent = d : a.appendChild(document.createTextNode(d));
          } else {
            if (!Zu(d)) {
              if ($u(d)) {
                null != c ? tv(c, d) : a.appendChild(rv(d));
              } else {
                throw cv(c), cv(d), Error("Cannot merge children");
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
;function uv(a, b, c, d, e, f, g, h, l) {
  this.data = a;
  this.Ma = b;
  this.hb = c;
  this.Ja = d;
  this.update = e;
  this.fb = f;
  this.tb = g;
  this.n = h;
  this.l = l;
  this.t = 2229667594;
  this.G = 8192;
  7 < arguments.length ? (this.n = h, this.l = l) : this.l = this.n = null;
}
k = uv.prototype;
k.L = function(a, b) {
  return Cb.j(this, b, null);
};
k.M = function(a, b, c) {
  switch(b instanceof V ? b.V : null) {
    case "force-update?":
      return this.tb;
    case "exit":
      return this.fb;
    case "update":
      return this.update;
    case "enter":
      return this.Ja;
    case "key-fn":
      return this.hb;
    case "mapping":
      return this.Ma;
    case "data":
      return this.data;
    default:
      return P.j(this.l, b, c);
  }
};
k.O = function(a, b, c) {
  return Qj(b, function() {
    return function(a) {
      return Qj(b, Wj, "", " ", "", c, a);
    };
  }(this), "#singult.core.Unify{", ", ", "}", c, ig.h(new T(null, 7, 5, U, [new T(null, 2, 5, U, [Es, this.data], null), new T(null, 2, 5, U, [Xl, this.Ma], null), new T(null, 2, 5, U, [dp, this.hb], null), new T(null, 2, 5, U, [Ro, this.Ja], null), new T(null, 2, 5, U, [oo, this.update], null), new T(null, 2, 5, U, [kl, this.fb], null), new T(null, 2, 5, U, [Sr, this.tb], null)], null), this.l));
};
k.H = function() {
  return this.n;
};
k.T = function() {
  return 7 + K(this.l);
};
k.Q = function() {
  var a = this.w;
  return null != a ? a : this.w = a = uf(this);
};
k.N = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && ii(this, b) : b) ? !0 : !1;
};
k.va = function(a, b) {
  return Ce(new xj(null, new n(null, 7, [kl, null, Xl, null, oo, null, Ro, null, dp, null, Sr, null, Es, null], null), null), b) ? ee.h(Nd(fh.h(pi, this), this.n), b) : new uv(this.data, this.Ma, this.hb, this.Ja, this.update, this.fb, this.tb, this.n, rg(ee.h(this.l, b)), null);
};
k.ga = function(a, b, c) {
  return q(X.h ? X.h(Es, b) : X.call(null, Es, b)) ? new uv(c, this.Ma, this.hb, this.Ja, this.update, this.fb, this.tb, this.n, this.l, null) : q(X.h ? X.h(Xl, b) : X.call(null, Xl, b)) ? new uv(this.data, c, this.hb, this.Ja, this.update, this.fb, this.tb, this.n, this.l, null) : q(X.h ? X.h(dp, b) : X.call(null, dp, b)) ? new uv(this.data, this.Ma, c, this.Ja, this.update, this.fb, this.tb, this.n, this.l, null) : q(X.h ? X.h(Ro, b) : X.call(null, Ro, b)) ? new uv(this.data, this.Ma, this.hb, 
  c, this.update, this.fb, this.tb, this.n, this.l, null) : q(X.h ? X.h(oo, b) : X.call(null, oo, b)) ? new uv(this.data, this.Ma, this.hb, this.Ja, c, this.fb, this.tb, this.n, this.l, null) : q(X.h ? X.h(kl, b) : X.call(null, kl, b)) ? new uv(this.data, this.Ma, this.hb, this.Ja, this.update, c, this.tb, this.n, this.l, null) : q(X.h ? X.h(Sr, b) : X.call(null, Sr, b)) ? new uv(this.data, this.Ma, this.hb, this.Ja, this.update, this.fb, c, this.n, this.l, null) : new uv(this.data, this.Ma, this.hb, 
  this.Ja, this.update, this.fb, this.tb, this.n, Q.j(this.l, b, c), null);
};
k.R = function() {
  return B(ig.h(new T(null, 7, 5, U, [new T(null, 2, 5, U, [Es, this.data], null), new T(null, 2, 5, U, [Xl, this.Ma], null), new T(null, 2, 5, U, [dp, this.hb], null), new T(null, 2, 5, U, [Ro, this.Ja], null), new T(null, 2, 5, U, [oo, this.update], null), new T(null, 2, 5, U, [kl, this.fb], null), new T(null, 2, 5, U, [Sr, this.tb], null)], null), this.l));
};
k.I = function(a, b) {
  return new uv(this.data, this.Ma, this.hb, this.Ja, this.update, this.fb, this.tb, b, this.l, this.w);
};
k.S = function(a, b) {
  return pe(b) ? Kb(this, v.h(b, 0), v.h(b, 1)) : Je.j(ub, this, b);
};
var wv = function vv(b) {
  if (b instanceof uv) {
    var c = Ae(b) ? R.h(Cg, b) : b, d = P.h(c, Sr), e = P.h(c, kl), f = P.h(c, oo), g = P.h(c, Ro), h = P.h(c, dp), l = P.h(c, Xl), p = P.h(c, Es), t = function() {
      for (var b = [], c = B(p), d = null, e = 0, f = 0;;) {
        if (f < e) {
          var g = d.F(null, f);
          b.push(g);
          f += 1;
        } else {
          if (c = B(c)) {
            d = c, S(d) ? (c = x(d), f = z(d), d = c, e = K(c), c = f) : (c = C(d), b.push(c), c = F(d), d = null, e = 0), f = 0;
          } else {
            break;
          }
        }
      }
      return b;
    }();
    return new mv(t, function(b, c, d, e, f, g, h, l) {
      return function(b) {
        return vv(l.g ? l.g(b) : l.call(null, b));
      };
    }(b, c, d, e, f, g, h, l, p, t), h, g, f, e, d);
  }
  if (b instanceof V) {
    return Cf(b);
  }
  if (oe(b)) {
    c = {};
    b = B(b);
    d = null;
    for (f = e = 0;;) {
      if (f < e) {
        h = d.F(null, f);
        g = O.j(h, 0, null);
        h = O.j(h, 1, null);
        g = vv(g);
        if ("string" !== typeof g) {
          throw "Cannot convert; JavaScript map keys must be strings";
        }
        c[g] = vv(h);
        f += 1;
      } else {
        if (b = B(b)) {
          if (S(b)) {
            e = x(b), b = z(b), d = e, e = K(e);
          } else {
            e = C(b);
            d = O.j(e, 0, null);
            e = O.j(e, 1, null);
            d = vv(d);
            if ("string" !== typeof d) {
              throw "Cannot convert; JavaScript map keys must be strings";
            }
            c[d] = vv(e);
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
  if (Ae(b)) {
    c = [];
    c.push(":*:");
    b = B(b);
    d = null;
    for (f = e = 0;;) {
      if (f < e) {
        g = d.F(null, f), c.push(vv(g)), f += 1;
      } else {
        if (b = B(b)) {
          d = b, S(d) ? (b = x(d), f = z(d), d = b, e = K(b), b = f) : (b = C(d), c.push(vv(b)), b = F(d), d = null, e = 0), f = 0;
        } else {
          break;
        }
      }
    }
    return c;
  }
  if (le(b)) {
    c = [];
    b = B(b);
    d = null;
    for (f = e = 0;;) {
      if (f < e) {
        g = d.F(null, f), c.push(vv(g)), f += 1;
      } else {
        if (b = B(b)) {
          d = b, S(d) ? (b = x(d), f = z(d), d = b, e = K(b), b = f) : (b = C(d), c.push(vv(b)), b = F(d), d = null, e = 0), f = 0;
        } else {
          break;
        }
      }
    }
    return c;
  }
  return b;
};
function xv(a, b) {
  if (null == b) {
    return null;
  }
  var c;
  c = wv(b);
  c = pv.g ? pv.g(c) : pv.call(null, c);
  return tv.h ? tv.h(a, c) : tv.call(null, a, c);
}
var yv = function() {
  function a(a, d, e) {
    var f = null;
    2 < arguments.length && (f = H(Array.prototype.slice.call(arguments, 2), 0));
    return b.call(this, a, d, f);
  }
  function b(a, b, e) {
    var f = Ae(e) ? R.h(Cg, e) : e;
    e = P.h(f, Sr);
    var g = P.h(f, kl), h = P.h(f, oo), l = P.h(f, Ro), f = P.h(f, dp);
    return new uv(a, b, f, l, h, g, e);
  }
  a.A = 2;
  a.o = function(a) {
    var d = C(a);
    a = F(a);
    var e = C(a);
    a = E(a);
    return b(d, e, a);
  };
  a.k = b;
  return a;
}();
function zv(a) {
  Ks && ca(a.cssText) ? a.cssText = ".goog-tabpane-clear { clear: both; height: 0px; overflow: hidden }" : a.innerHTML = ".goog-tabpane-clear { clear: both; height: 0px; overflow: hidden }";
}
;var Av = function() {
  function a(a, b) {
    return R.h(u, Zg(a, b));
  }
  function b(a) {
    return R.h(u, a);
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
function Bv(a, b) {
  if (0 >= b || b >= 2 + K(a)) {
    return be.h(Fh(Ld("", Jg.h(u, B(a)))), "");
  }
  if (q(md.h ? md.h(1, b) : md.call(null, 1, b))) {
    return new T(null, 1, 5, U, [a], null);
  }
  if (q(md.h ? md.h(2, b) : md.call(null, 2, b))) {
    return new T(null, 2, 5, U, ["", a], null);
  }
  var c = b - 2;
  return be.h(Fh(Ld("", Ih.j(Fh(Jg.h(u, B(a))), 0, c))), tf.h(a, c));
}
var Cv = function() {
  function a(a, b, c) {
    if (md.h("" + u.g(b), "/(?:)/")) {
      b = Bv(a, c);
    } else {
      if (1 > c) {
        b = Fh(("" + u.g(a)).split(b));
      } else {
        a: {
          for (var g = c, h = ae;;) {
            if (md.h(g, 1)) {
              b = be.h(h, a);
              break a;
            }
            var l = Oj(b, a);
            if (q(l)) {
              var p = l, l = a.indexOf(p), p = a.substring(l + K(p)), g = g - 1, h = be.h(h, a.substring(0, l));
              a = p;
            } else {
              b = be.h(h, a);
              break a;
            }
          }
          b = void 0;
        }
      }
    }
    if (md.h(0, c)) {
      a: {
        for (c = b;;) {
          if (md.h("", ie(c))) {
            c = null == c ? null : Vb(c);
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
q("undefined" != typeof NodeList) && (NodeList.prototype.Ae = !0, NodeList.prototype.R = function() {
  return H.h(this, 0);
});
HTMLCollection.prototype.Ae = !0;
HTMLCollection.prototype.R = function() {
  return H.h(this, 0);
};
function Dv(a) {
  if (a ? a.Fd : a) {
    return a.Fd(a);
  }
  var b;
  b = Dv[m(null == a ? null : a)];
  if (!b && (b = Dv._, !b)) {
    throw r("IDom.-\x3edom", a);
  }
  return b.call(null, a);
}
T.prototype.Fd = function() {
  var a;
  a = wv(this);
  a = pv.g ? pv.g(a) : pv.call(null, a);
  return rv.g ? rv.g(a) : rv.call(null, a);
};
Dv.string = function(a) {
  return Ev.g ? Ev.g(a) : Ev.call(null, a);
};
q("undefined" != typeof Node) && (Node.prototype.Fd = function() {
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
          c.appendChild(Ku(c).createTextNode(String(b)));
        }
      }
    }
    return c;
  }
  function b(a) {
    a = Dv(a);
    return Uu(a);
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
    if (ca(g)) {
      switch(g.toLowerCase()) {
        case "checkbox":
        ;
        case "radio":
          c.checked = b ? "checked" : null;
          break;
        case "select-one":
          c.selectedIndex = -1;
          if (ga(b)) {
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
          ga(g) && (g = [g]);
          for (var l = 0;h = c.options[l];l++) {
            if (h.selected = !1, g) {
              for (var p, t = 0;p = g[t];t++) {
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
    a = Dv(a);
    return Fs(a);
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
          return e.q ? e.q() : e.call(null);
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
      var a = new n(null, 1, [ik, !0], null);
      return Eg.j ? Eg.j(zj, db, a) : Eg.call(null, zj, db, a);
    }();
    var c = a.q ? a.q() : a.call(null);
    Ae(c) && Mj.g(c);
    return new n(null, 2, [xr, c, ul, function() {
      var a = Iv;
      return I.g ? I.g(a) : I.call(null, a);
    }()], null);
  } finally {
    Iv = b;
  }
}
function Kv(a) {
  q(function() {
    var b = Iv;
    return q(b) ? gb(ik.g(he(a))) : b;
  }()) && Hg.h(Iv, function(b) {
    return be.h(b, a);
  });
}
Bg.prototype.Fc = function() {
  Kv(this);
  return this.state;
};
function Lv(a, b, c, d, e, f, g, h) {
  this.state = a;
  this.Ta = b;
  this.f = c;
  this.key = d;
  this.mb = e;
  this.ea = f;
  this.n = g;
  this.l = h;
  this.t = 2229700362;
  this.G = 8194;
  6 < arguments.length ? (this.n = g, this.l = h) : this.l = this.n = null;
}
k = Lv.prototype;
k.L = function(a, b) {
  return Cb.j(this, b, null);
};
k.M = function(a, b, c) {
  switch(b instanceof V ? b.V : null) {
    case "watches":
      return this.ea;
    case "parent-watchables":
      return this.mb;
    case "key":
      return this.key;
    case "f":
      return this.f;
    case "dirty?":
      return this.Ta;
    case "state":
      return this.state;
    default:
      return P.j(this.l, b, c);
  }
};
k.O = function(a, b, c) {
  return Qj(b, function() {
    return function(a) {
      return Qj(b, Wj, "", " ", "", c, a);
    };
  }(this), "#reflex.core.ComputedObservable{", ", ", "}", c, ig.h(new T(null, 6, 5, U, [new T(null, 2, 5, U, [ro, this.state], null), new T(null, 2, 5, U, [Sn, this.Ta], null), new T(null, 2, 5, U, [gr, this.f], null), new T(null, 2, 5, U, [dl, this.key], null), new T(null, 2, 5, U, [Rl, this.mb], null), new T(null, 2, 5, U, [mk, this.ea], null)], null), this.l));
};
k.H = function() {
  return this.n;
};
k.T = function() {
  return 6 + K(this.l);
};
k.Q = function() {
  var a = this.w;
  return null != a ? a : this.w = a = uf(this);
};
k.N = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && ii(this, b) : b) ? !0 : !1;
};
k.va = function(a, b) {
  return Ce(new xj(null, new n(null, 6, [mk, null, dl, null, Rl, null, Sn, null, ro, null, gr, null], null), null), b) ? ee.h(Nd(fh.h(pi, this), this.n), b) : new Lv(this.state, this.Ta, this.f, this.key, this.mb, this.ea, this.n, rg(ee.h(this.l, b)), null);
};
k.ga = function(a, b, c) {
  return q(X.h ? X.h(ro, b) : X.call(null, ro, b)) ? new Lv(c, this.Ta, this.f, this.key, this.mb, this.ea, this.n, this.l, null) : q(X.h ? X.h(Sn, b) : X.call(null, Sn, b)) ? new Lv(this.state, c, this.f, this.key, this.mb, this.ea, this.n, this.l, null) : q(X.h ? X.h(gr, b) : X.call(null, gr, b)) ? new Lv(this.state, this.Ta, c, this.key, this.mb, this.ea, this.n, this.l, null) : q(X.h ? X.h(dl, b) : X.call(null, dl, b)) ? new Lv(this.state, this.Ta, this.f, c, this.mb, this.ea, this.n, this.l, 
  null) : q(X.h ? X.h(Rl, b) : X.call(null, Rl, b)) ? new Lv(this.state, this.Ta, this.f, this.key, c, this.ea, this.n, this.l, null) : q(X.h ? X.h(mk, b) : X.call(null, mk, b)) ? new Lv(this.state, this.Ta, this.f, this.key, this.mb, c, this.n, this.l, null) : new Lv(this.state, this.Ta, this.f, this.key, this.mb, this.ea, this.n, Q.j(this.l, b, c), null);
};
k.R = function() {
  return B(ig.h(new T(null, 6, 5, U, [new T(null, 2, 5, U, [ro, this.state], null), new T(null, 2, 5, U, [Sn, this.Ta], null), new T(null, 2, 5, U, [gr, this.f], null), new T(null, 2, 5, U, [dl, this.key], null), new T(null, 2, 5, U, [Rl, this.mb], null), new T(null, 2, 5, U, [mk, this.ea], null)], null), this.l));
};
k.Kd = function() {
  for (var a = B(this.ea), b = null, c = 0, d = 0;;) {
    if (d < c) {
      var e = b.F(null, d);
      O.j(e, 0, null);
      e = O.j(e, 1, null);
      e.q ? e.q() : e.call(null);
      d += 1;
    } else {
      if (a = B(a)) {
        S(a) ? (c = x(a), a = z(a), b = c, c = K(c)) : (b = C(a), O.j(b, 0, null), e = O.j(b, 1, null), e.q ? e.q() : e.call(null), a = F(a), b = null, c = 0), d = 0;
      } else {
        return null;
      }
    }
  }
};
k.Jd = function(a, b, c) {
  return this.ea = Q.j(this.ea, b, c);
};
k.Ld = function(a, b) {
  return this.ea = ee.h(this.ea, b);
};
k.I = function(a, b) {
  return new Lv(this.state, this.Ta, this.f, this.key, this.mb, this.ea, b, this.l, this.w);
};
k.S = function(a, b) {
  return pe(b) ? Kb(this, v.h(b, 0), v.h(b, 1)) : Je.j(ub, this, b);
};
k.Fc = function() {
  Kv(this);
  if (gb(this.Ta)) {
    return this.state;
  }
  for (var a = Jv(this.f), b = Ae(a) ? R.h(Cg, a) : a, c = P.h(b, ul), d = P.h(b, xr), e = B(this.mb), f = null, g = 0, h = 0;;) {
    if (h < g) {
      var l = f.F(null, h);
      Fc(l, this.key);
      h += 1;
    } else {
      if (e = B(e)) {
        f = e, S(f) ? (e = x(f), h = z(f), f = e, g = K(e), e = h) : (e = C(f), Fc(e, this.key), e = F(f), f = null, g = 0), h = 0;
      } else {
        break;
      }
    }
  }
  this.mb = c;
  e = B(c);
  f = null;
  for (h = g = 0;;) {
    if (h < g) {
      l = f.F(null, h), Yj(l, this.key, function(a, b, c, d, e, f, g, h, l, p) {
        return function() {
          p.Ta = !0;
          return Ac(p, null, null);
        };
      }(e, f, g, h, l, a, b, c, d, this)), h += 1;
    } else {
      var p = B(e);
      if (p) {
        l = p;
        if (S(l)) {
          e = x(l), h = z(l), f = e, g = K(e), e = h;
        } else {
          var t = C(l);
          Yj(t, this.key, function(a, b, c, d, e, f, g, h, l, p, t, M) {
            return function() {
              M.Ta = !0;
              return Ac(M, null, null);
            };
          }(e, f, g, h, t, l, p, a, b, c, d, this));
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
  this.Ta = !1;
  return d;
};
k.Df = !0;
k.Q = function() {
  return this.key;
};
var Mv = function() {
  function a(a, d, e) {
    var f = null;
    2 < arguments.length && (f = H(Array.prototype.slice.call(arguments, 2), 0));
    return b.call(this, a, d, f);
  }
  function b(a, b, e) {
    if (B(a)) {
      var f = C(a);
      b.g ? b.g(f) : b.call(null, f);
    }
    return R.p(yv, a, b, e);
  }
  a.A = 2;
  a.o = function(a) {
    var d = C(a);
    a = F(a);
    var e = C(a);
    a = E(a);
    return b(d, e, a);
  };
  a.k = b;
  return a;
}();
function Nv(a) {
  if (a ? a.Ge : a) {
    return a.Ge();
  }
  var b;
  b = Nv[m(null == a ? null : a)];
  if (!b && (b = Nv._, !b)) {
    throw r("PushbackReader.read-char", a);
  }
  return b.call(null, a);
}
function Ov(a, b) {
  if (a ? a.He : a) {
    return a.He(0, b);
  }
  var c;
  c = Ov[m(null == a ? null : a)];
  if (!c && (c = Ov._, !c)) {
    throw r("PushbackReader.unread", a);
  }
  return c.call(null, a, b);
}
function Pv(a, b, c) {
  this.ba = a;
  this.buffer = b;
  this.Vd = c;
}
Pv.prototype.Ge = function() {
  return 0 === this.buffer.length ? (this.Vd += 1, this.ba[this.Vd]) : this.buffer.pop();
};
Pv.prototype.He = function(a, b) {
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
    1 < arguments.length && (e = H(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, 0, e);
  }
  function b(a, b) {
    throw Error(R.h(u, b));
  }
  a.A = 1;
  a.o = function(a) {
    C(a);
    a = E(a);
    return b(0, a);
  };
  a.k = b;
  return a;
}();
function Tv(a, b) {
  for (var c = new Oa(b), d = Nv(a);;) {
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
var Wv = Pj("^([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+))(N)?$"), Xv = Pj("^([-+]?[0-9]+)/([0-9]+)$"), Yv = Pj("^([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?$"), Zv = Pj("^[:]?([^0-9/].*/)?([^0-9/][^/]*)$");
function $v(a, b) {
  var c = a.exec(b);
  return null != c && c[0] === b ? 1 === c.length ? c[0] : c : null;
}
function aw(a) {
  if (q($v(Wv, a))) {
    a = $v(Wv, a);
    var b = a[2];
    if (null != (md.h(b, "") ? null : b)) {
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
var bw = Pj("^[0-9A-Fa-f]{2}$"), cw = Pj("^[0-9A-Fa-f]{4}$");
function dw(a, b, c, d) {
  return q(Nj(a, d)) ? d : Sv.k(b, H(["Unexpected unicode escape \\", c, d], 0));
}
function ew(a) {
  return String.fromCharCode(parseInt(a, 16));
}
function fw(a) {
  var b = Nv(a), c = "t" === b ? "\t" : "r" === b ? "\r" : "n" === b ? "\n" : "\\" === b ? "\\" : '"' === b ? '"' : "b" === b ? "\b" : "f" === b ? "\f" : null;
  q(c) ? a = c : "x" === b ? (c = (new Oa(Nv(a), Nv(a))).toString(), a = ew(dw(bw, a, b, c))) : "u" === b ? (c = (new Oa(Nv(a), Nv(a), Nv(a), Nv(a))).toString(), a = ew(dw(cw, a, b, c))) : a = /[^0-9]/.test(b) ? Sv.k(a, H(["Unexpected unicode escape \\", b], 0)) : String.fromCharCode(b);
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
  for (var c = Gc(ae);;) {
    var d = gw(b);
    q(d) || Sv.k(b, H(["EOF while reading"], 0));
    if (a === d) {
      return Ic(c);
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
      Ov(b, d), e = iw.p ? iw.p(b, !0, null, !0) : iw.call(null, b, !0, null);
    }
    c = e === b ? c : mg.h(c, e);
  }
}
function jw(a, b) {
  return Sv.k(a, H(["Reader for ", b, " not implemented yet"], 0));
}
function kw(a, b) {
  var c = Nv(a), d = lw.g ? lw.g(c) : lw.call(null, c);
  if (q(d)) {
    return d.h ? d.h(a, b) : d.call(null, a, b);
  }
  d = mw.h ? mw.h(a, c) : mw.call(null, a, c);
  return q(d) ? d : Sv.k(a, H(["No dispatch macro for ", c], 0));
}
function nw(a, b) {
  return Sv.k(a, H(["Unmached delimiter ", b], 0));
}
function ow(a) {
  return R.h(Af, hw(")", a));
}
function pw(a) {
  return hw("]", a);
}
function qw(a) {
  var b = hw("}", a), c = K(b);
  !ug(c) && Sv.k(a, H(["Map literal must contain an even number of forms"], 0));
  return R.h(Cg, b);
}
function rw(a, b) {
  for (var c = new Oa(b), d = Nv(a);;) {
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
      return q(c) ? c : Sv.k(a, H(["Invalid number format [", e, "]"], 0));
    }
    c.append(d);
    d = e = Nv(a);
  }
}
function sw(a) {
  for (var b = new Oa, c = Nv(a);;) {
    if (null == c) {
      return Sv.k(a, H(["EOF while reading"], 0));
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
  for (var b = new Oa, c = Nv(a);;) {
    if (null == c) {
      return Sv.k(a, H(["EOF while reading"], 0));
    }
    if ("\\" === c) {
      b.append(c);
      var d = Nv(a);
      if (null == d) {
        return Sv.k(a, H(["EOF while reading"], 0));
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
    c = qd.h(tf.j(c, 0, c.indexOf("/")), tf.j(c, c.indexOf("/") + 1, c.length));
  } else {
    var d = qd.g(c), c = "nil" === c ? null : "true" === c ? !0 : "false" === c ? !1 : d
  }
  return c;
}
function vw(a) {
  var b = Tv(a, Nv(a)), c = $v(Zv, b), b = c[0], d = c[1], c = c[2];
  return void 0 !== d && ":/" === d.substring(d.length - 2, d.length) || ":" === c[c.length - 1] || -1 !== b.indexOf("::", 1) ? Sv.k(a, H(["Invalid token: ", b], 0)) : null != d && 0 < d.length ? Df.h(d.substring(0, d.indexOf("/")), c) : Df.g(b);
}
function ww(a) {
  return function(b) {
    return ub(ub(sd, iw.p ? iw.p(b, !0, null, !0) : iw.call(null, b, !0, null)), a);
  };
}
function xw() {
  return function(a) {
    return Sv.k(a, H(["Unreadable form"], 0));
  };
}
function yw(a) {
  var b;
  b = iw.p ? iw.p(a, !0, null, !0) : iw.call(null, a, !0, null);
  b = b instanceof pd ? new n(null, 1, [vr, b], null) : "string" === typeof b ? new n(null, 1, [vr, b], null) : b instanceof V ? new si([b, !0]) : b;
  oe(b) || Sv.k(a, H(["Metadata must be Symbol,Keyword,String or Map"], 0));
  var c = iw.p ? iw.p(a, !0, null, !0) : iw.call(null, a, !0, null);
  return(c ? c.t & 262144 || c.Nf || (c.t ? 0 : hb(fc, c)) : hb(fc, c)) ? Nd(c, uj.k(H([he(c), b], 0))) : Sv.k(a, H(["Metadata can only be applied to IWithMetas"], 0));
}
function zw(a) {
  return Bj(hw("}", a));
}
function Aw(a) {
  return Pj(tw(a));
}
function Bw(a) {
  iw.p ? iw.p(a, !0, null, !0) : iw.call(null, a, !0, null);
  return a;
}
function Uv(a) {
  return'"' === a ? sw : ":" === a ? vw : ";" === a ? Vv : "'" === a ? ww(new pd(null, "quote", "quote", 1377916282, null)) : "@" === a ? ww(new pd(null, "deref", "deref", 1494944732, null)) : "^" === a ? yw : "`" === a ? jw : "~" === a ? jw : "(" === a ? ow : ")" === a ? nw : "[" === a ? pw : "]" === a ? nw : "{" === a ? qw : "}" === a ? nw : "\\" === a ? Nv : "#" === a ? kw : null;
}
function lw(a) {
  return "{" === a ? zw : "\x3c" === a ? xw() : '"' === a ? Aw : "!" === a ? Vv : "_" === a ? Bw : null;
}
function iw(a, b, c) {
  for (;;) {
    var d = Nv(a);
    if (null == d) {
      return q(b) ? Sv.k(a, H(["EOF while reading"], 0)) : c;
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
    return P.h(q(d) ? b : a, c);
  };
}(new T(null, 13, 5, U, [null, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], null), new T(null, 13, 5, U, [null, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], null)), Ew = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
function Fw(a) {
  a = parseInt(a, 10);
  return gb(isNaN(a)) ? a : null;
}
function Gw(a, b, c, d) {
  a <= b && b <= c || Sv.k(null, H(["" + u.g(d) + " Failed:  " + u.g(a) + "\x3c\x3d" + u.g(b) + "\x3c\x3d" + u.g(c)], 0));
  return b;
}
function Hw(a) {
  var b = Nj(Ew, a);
  O.j(b, 0, null);
  var c = O.j(b, 1, null), d = O.j(b, 2, null), e = O.j(b, 3, null), f = O.j(b, 4, null), g = O.j(b, 5, null), h = O.j(b, 6, null), l = O.j(b, 7, null), p = O.j(b, 8, null), t = O.j(b, 9, null), s = O.j(b, 10, null);
  if (gb(b)) {
    return Sv.k(null, H(["Unrecognized date/time syntax: " + u.g(a)], 0));
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
  }(), D = function() {
    var a;
    a: {
      if (md.h(3, K(l))) {
        a = l;
      } else {
        if (3 < K(l)) {
          a = tf.j(l, 0, 3);
        } else {
          for (a = new Oa(l);;) {
            if (3 > a.Ec.length) {
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
  }(), p = (md.h(p, "-") ? -1 : 1) * (60 * function() {
    var a = Fw(t);
    return q(a) ? a : 0;
  }() + function() {
    var a = Fw(s);
    return q(a) ? a : 0;
  }());
  return new T(null, 8, 5, U, [w, Gw(1, A, 12, "timestamp month field must be in range 1..12"), Gw(1, a, function() {
    var a;
    if (a = 0 === (w % 4 + 4) % 4) {
      a = 0 !== (w % 100 + 100) % 100 || 0 === (w % 400 + 400) % 400;
    }
    return Dw.h ? Dw.h(A, a) : Dw.call(null, A, a);
  }(), "timestamp day field must be in range 1..last day in month"), Gw(0, b, 23, "timestamp hour field must be in range 0..23"), Gw(0, c, 59, "timestamp minute field must be in range 0..59"), Gw(0, y, md.h(c, 59) ? 60 : 59, "timestamp second field must be in range 0..60"), Gw(0, D, 999, "timestamp millisecond field must be in range 0..999"), p], null);
}
var Iw, Jw = new n(null, 4, ["inst", function(a) {
  var b;
  if ("string" === typeof a) {
    if (b = Hw(a), q(b)) {
      a = O.j(b, 0, null);
      var c = O.j(b, 1, null), d = O.j(b, 2, null), e = O.j(b, 3, null), f = O.j(b, 4, null), g = O.j(b, 5, null), h = O.j(b, 6, null);
      b = O.j(b, 7, null);
      b = new Date(Date.UTC(a, c - 1, d, e, f, g, h) - 6E4 * b);
    } else {
      b = Sv.k(null, H(["Unrecognized date/time syntax: " + u.g(a)], 0));
    }
  } else {
    b = Sv.k(null, H(["Instance literal expects a string for its timestamp."], 0));
  }
  return b;
}, "uuid", function(a) {
  return "string" === typeof a ? new dk(a) : Sv.k(null, H(["UUID literal expects a string as its representation."], 0));
}, "queue", function(a) {
  return pe(a) ? fh.h(fi, a) : Sv.k(null, H(["Queue literal expects a vector for its elements."], 0));
}, "js", function(a) {
  if (pe(a)) {
    var b = [];
    a = B(a);
    for (var c = null, d = 0, e = 0;;) {
      if (e < d) {
        var f = c.F(null, e);
        b.push(f);
        e += 1;
      } else {
        if (a = B(a)) {
          c = a, S(c) ? (a = x(c), e = z(c), c = a, d = K(a), a = e) : (a = C(c), b.push(a), a = F(c), c = null, d = 0), e = 0;
        } else {
          break;
        }
      }
    }
    return b;
  }
  if (oe(a)) {
    b = {};
    a = B(a);
    c = null;
    for (e = d = 0;;) {
      if (e < d) {
        var g = c.F(null, e), f = O.j(g, 0, null), g = O.j(g, 1, null);
        b[Cf(f)] = g;
        e += 1;
      } else {
        if (a = B(a)) {
          S(a) ? (d = x(a), a = z(a), c = d, d = K(d)) : (d = C(a), c = O.j(d, 0, null), d = O.j(d, 1, null), b[Cf(c)] = d, a = F(a), c = null, d = 0), e = 0;
        } else {
          break;
        }
      }
    }
    return b;
  }
  return Sv.k(null, H(["JS literal expects a vector or map containing only string or unqualified keyword keys"], 0));
}], null);
Iw = Eg.g ? Eg.g(Jw) : Eg.call(null, Jw);
var Kw = Eg.g ? Eg.g(null) : Eg.call(null, null);
function mw(a, b) {
  var c = uw(a, b), d = P.h(I.g ? I.g(Iw) : I.call(null, Iw), "" + u.g(c)), e = I.g ? I.g(Kw) : I.call(null, Kw);
  return q(d) ? (c = iw(a, !0, null), d.g ? d.g(c) : d.call(null, c)) : q(e) ? (d = iw(a, !0, null), e.h ? e.h(c, d) : e.call(null, c, d)) : Sv.k(a, H(["Could not find tag parser for ", "" + u.g(c), " in ", Gg.k(H([sj(I.g ? I.g(Iw) : I.call(null, Iw))], 0))], 0));
}
;var Lw = !Ks || Ks && 9 <= Fu, Mw = Ks && !Qs("9");
!Ms || Qs("528");
Ls && Qs("1.9b") || Ks && Qs("8") || Js && Qs("9.5") || Ms && Qs("528");
Ls && !Qs("8") || Ks && Qs("9");
function Nw() {
  0 != Ow && (this[ma] || (this[ma] = ++pa));
}
var Ow = 0;
function Pw(a, b) {
  this.type = a;
  this.currentTarget = this.target = b;
  this.defaultPrevented = this.Qc = !1;
  this.rf = !0;
}
Pw.prototype.preventDefault = function() {
  this.defaultPrevented = !0;
  this.rf = !1;
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
  this.Ue = this.state = null;
  if (a) {
    var c = this.type = a.type;
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    var d = a.relatedTarget;
    if (d) {
      if (Ls) {
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
    this.offsetX = Ms || void 0 !== a.offsetX ? a.offsetX : a.layerX;
    this.offsetY = Ms || void 0 !== a.offsetY ? a.offsetY : a.layerY;
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
    this.Ue = a;
    a.defaultPrevented && this.preventDefault();
  }
}
ra(Rw, Pw);
Rw.prototype.preventDefault = function() {
  Rw.Kg.preventDefault.call(this);
  var a = this.Ue;
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
  this.zc = a;
  this.Bd = null;
  this.src = b;
  this.type = c;
  this.fd = !!d;
  this.uc = e;
  this.key = ++Tw;
  this.Rc = this.ed = !1;
}
function Vw(a) {
  a.Rc = !0;
  a.zc = null;
  a.Bd = null;
  a.src = null;
  a.uc = null;
}
;function Ww(a) {
  this.src = a;
  this.vb = {};
  this.Dd = 0;
}
Ww.prototype.add = function(a, b, c, d, e) {
  var f = a.toString();
  a = this.vb[f];
  a || (a = this.vb[f] = [], this.Dd++);
  var g = Xw(a, b, d, e);
  -1 < g ? (b = a[g], c || (b.ed = !1)) : (b = new Uw(b, this.src, f, !!d, e), b.ed = c, a.push(b));
  return b;
};
Ww.prototype.remove = function(a, b, c, d) {
  a = a.toString();
  if (!(a in this.vb)) {
    return!1;
  }
  var e = this.vb[a];
  b = Xw(e, b, c, d);
  return-1 < b ? (Vw(e[b]), Sa.splice.call(e, b, 1), 0 == e.length && (delete this.vb[a], this.Dd--), !0) : !1;
};
function Yw(a, b) {
  var c = b.type;
  if (c in a.vb) {
    var d = a.vb[c], e = Ta(d, b), f;
    (f = 0 <= e) && Sa.splice.call(d, e, 1);
    f && (Vw(b), 0 == a.vb[c].length && (delete a.vb[c], a.Dd--));
  }
}
Ww.prototype.Ud = function(a, b, c, d) {
  a = this.vb[a.toString()];
  var e = -1;
  a && (e = Xw(a, b, c, d));
  return-1 < e ? a[e] : null;
};
function Xw(a, b, c, d) {
  for (var e = 0;e < a.length;++e) {
    var f = a[e];
    if (!f.Rc && f.zc == b && f.fd == !!c && f.uc == d) {
      return e;
    }
  }
  return-1;
}
;var Zw = "closure_lm_" + (1E6 * Math.random() | 0), $w = {}, ax = 0;
function bx(a, b, c, d, e) {
  if ("array" == m(b)) {
    for (var f = 0;f < b.length;f++) {
      bx(a, b[f], c, d, e);
    }
    return null;
  }
  c = cx(c);
  if (a && a[Sw]) {
    a = a.ag(b, c, d, e);
  } else {
    if (!b) {
      throw Error("Invalid event type");
    }
    var f = !!d, g = dx(a);
    g || (a[Zw] = g = new Ww(a));
    c = g.add(b, c, !1, d, e);
    c.Bd || (d = ex(), c.Bd = d, d.src = a, d.zc = c, a.addEventListener ? a.addEventListener(b.toString(), d, f) : a.attachEvent(fx(b.toString()), d), ax++);
    a = c;
  }
  return a;
}
function ex() {
  var a = gx, b = Lw ? function(c) {
    return a.call(b.src, b.zc, c);
  } : function(c) {
    c = a.call(b.src, b.zc, c);
    if (!c) {
      return c;
    }
  };
  return b;
}
function hx(a, b, c, d, e) {
  if ("array" == m(b)) {
    for (var f = 0;f < b.length;f++) {
      hx(a, b[f], c, d, e);
    }
  } else {
    c = cx(c), a && a[Sw] ? a.Ng(b, c, d, e) : a && (a = dx(a)) && (b = a.Ud(b, c, !!d, e)) && ix(b);
  }
}
function ix(a) {
  if ("number" != typeof a && a && !a.Rc) {
    var b = a.src;
    if (b && b[Sw]) {
      Yw(b.Nc, a);
    } else {
      var c = a.type, d = a.Bd;
      b.removeEventListener ? b.removeEventListener(c, d, a.fd) : b.detachEvent && b.detachEvent(fx(c), d);
      ax--;
      (c = dx(b)) ? (Yw(c, a), 0 == c.Dd && (c.src = null, b[Zw] = null)) : Vw(a);
    }
  }
}
function fx(a) {
  return a in $w ? $w[a] : $w[a] = "on" + a;
}
function jx(a, b, c, d) {
  var e = 1;
  if (a = dx(a)) {
    if (b = a.vb[b.toString()]) {
      for (b = b.concat(), a = 0;a < b.length;a++) {
        var f = b[a];
        f && f.fd == c && !f.Rc && (e &= !1 !== kx(f, d));
      }
    }
  }
  return Boolean(e);
}
function kx(a, b) {
  var c = a.zc, d = a.uc || a.src;
  a.ed && ix(a);
  return c.call(d, b);
}
function gx(a, b) {
  if (a.Rc) {
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
      for (var f = a.type, h = e.length - 1;!c.Qc && 0 <= h;h--) {
        c.currentTarget = e[h], d &= jx(e[h], f, !0, c);
      }
      for (h = 0;!c.Qc && h < e.length;h++) {
        c.currentTarget = e[h], d &= jx(e[h], f, !1, c);
      }
    }
    return d;
  }
  return kx(a, new Rw(b, this));
}
function dx(a) {
  a = a[Zw];
  return a instanceof Ww ? a : null;
}
var lx = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
function cx(a) {
  if (ia(a)) {
    return a;
  }
  a[lx] || (a[lx] = function(b) {
    return a.handleEvent(b);
  });
  return a[lx];
}
;var mx = function() {
  function a(a, d, e, f) {
    var g = null;
    3 < arguments.length && (g = H(Array.prototype.slice.call(arguments, 3), 0));
    return b.call(this, a, d, e, g);
  }
  function b(a, b, e, f) {
    f = Ae(f) ? R.h(Cg, f) : f;
    f = P.j(f, zr, !1);
    a = Dv(a);
    b = Cf(b);
    return bx(a, b, e, f);
  }
  a.A = 3;
  a.o = function(a) {
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
function nx(a, b) {
  return Nd(new T(null, 2, 5, U, [b, null], null), new n(null, 3, [No, a, Jk, qr, xk, qr], null));
}
function ox(a) {
  return a.g ? a.g(0) : a.call(null, 0);
}
function px(a) {
  return xk.g(he(a)).call(null, ox(a));
}
function qx(a) {
  var b = O.j(a, 0, null), c = O.j(a, 1, null), d = Ae(c) ? R.h(Cg, c) : c, e = P.h(d, Jo), c = P.h(d, hk), f = P.h(d, Jq), g = P.h(d, Bk), d = P.h(d, Mq);
  return q(f) ? (f = ie(f), q(d) ? (d = U, b = ig.h(e, Ld(b, g)), b = No.g(he(a)).call(null, f, b), c = new T(null, 2, 5, d, [b, q(c) ? Q.j(c, Mq, !0) : c], null)) : c = new T(null, 2, 5, U, [f, c], null), Nd(c, he(a))) : null;
}
function rx(a) {
  for (;;) {
    if (md.h(Kr, a.g ? a.g(1) : a.call(null, 1))) {
      return ox(a);
    }
    var b = qx(a);
    if (q(b)) {
      a = b;
    } else {
      return ox(a);
    }
  }
}
function sx(a) {
  var b = O.j(a, 0, null), c = O.j(a, 1, null), c = Ae(c) ? R.h(Cg, c) : c, d = P.h(c, Jo), e = P.h(c, Bk), f = O.j(e, 0, null), g = sf(e);
  return q(q(c) ? e : c) ? Nd(new T(null, 2, 5, U, [f, Q.k(c, Jo, be.h(d, b), H([Bk, g], 0))], null), he(a)) : null;
}
var tx = function() {
  function a(a, d, e) {
    var f = null;
    2 < arguments.length && (f = H(Array.prototype.slice.call(arguments, 2), 0));
    return b.call(this, a, d, f);
  }
  function b(a, b, e) {
    b = R.j(b, ox(a), e);
    O.j(a, 0, null);
    e = O.j(a, 1, null);
    return Nd(new T(null, 2, 5, U, [b, Q.j(e, Mq, !0)], null), he(a));
  }
  a.A = 2;
  a.o = function(a) {
    var d = C(a);
    a = F(a);
    var e = C(a);
    a = E(a);
    return b(d, e, a);
  };
  a.k = b;
  return a;
}();
function ux(a) {
  if (md.h(Kr, a.g ? a.g(1) : a.call(null, 1))) {
    return a;
  }
  var b;
  b = px(a);
  if (q(b)) {
    if (q(px(a))) {
      b = O.j(a, 0, null);
      var c = O.j(a, 1, null), d;
      if (q(px(a))) {
        d = Jk.g(he(a)).call(null, ox(a));
      } else {
        throw "called children on a leaf node";
      }
      var e = O.j(d, 0, null), f = sf(d);
      b = q(d) ? Nd(new T(null, 2, 5, U, [e, new n(null, 4, [Jo, ae, Jq, q(c) ? be.h(Jq.g(c), b) : new T(null, 1, 5, U, [b], null), hk, c, Bk, f], null)], null), he(a)) : null;
    } else {
      b = null;
    }
  }
  if (q(b)) {
    return b;
  }
  b = sx(a);
  if (q(b)) {
    return b;
  }
  for (;;) {
    if (q(qx(a))) {
      b = sx(qx(a));
      if (q(b)) {
        return b;
      }
      a = qx(a);
    } else {
      return new T(null, 2, 5, U, [ox(a), Kr], null);
    }
  }
}
function vx(a) {
  return md.h(Kr, a.g ? a.g(1) : a.call(null, 1));
}
;function wx(a) {
  if (a ? a.yb : a) {
    return a.yb(a);
  }
  var b;
  b = wx[m(null == a ? null : a)];
  if (!b && (b = wx._, !b)) {
    throw r("PTopological.topology", a);
  }
  return b.call(null, a);
}
function xx(a) {
  if (a ? a.je : a) {
    return a.je(a);
  }
  var b;
  b = xx[m(null == a ? null : a)];
  if (!b && (b = xx._, !b)) {
    throw r("PTopology.dimensions", a);
  }
  return b.call(null, a);
}
function yx(a, b) {
  if (a ? a.ie : a) {
    return a.ie(a, b);
  }
  var c;
  c = yx[m(null == a ? null : a)];
  if (!c && (c = yx._, !c)) {
    throw r("PTopology.coordinates-of-index", a);
  }
  return c.call(null, a, b);
}
function zx(a, b) {
  if (a ? a.ke : a) {
    return a.ke(a, b);
  }
  var c;
  c = zx[m(null == a ? null : a)];
  if (!c && (c = zx._, !c)) {
    throw r("PTopology.index-of-coordinates", a);
  }
  return c.call(null, a, b);
}
function Ax(a, b, c, d) {
  if (a ? a.le : a) {
    return a.le(a, b, c, d);
  }
  var e;
  e = Ax[m(null == a ? null : a)];
  if (!e && (e = Ax._, !e)) {
    throw r("PTopology.neighbours*", a);
  }
  return e.call(null, a, b, c, d);
}
function Bx(a, b, c) {
  if (a ? a.he : a) {
    return a.he(a, b, c);
  }
  var d;
  d = Bx[m(null == a ? null : a)];
  if (!d && (d = Bx._, !d)) {
    throw r("PTopology.coord-distance", a);
  }
  return d.call(null, a, b, c);
}
function Cx(a) {
  return xx(wx(a));
}
function Dx(a) {
  return R.h(Oe, xx(a));
}
function Ex(a) {
  return Dx(wx(a));
}
var Fx = function() {
  function a(a, b, e) {
    return Ax(a, b, e, 0);
  }
  var b = null, b = function(b, d, e, f) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, d, e);
      case 4:
        return Ax(b, d, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.j = a;
  b.p = function(a, b, e, f) {
    return Ax(a, b, e, f);
  };
  return b;
}(), Gx = function() {
  function a(a, b, c, g) {
    return Jg.h(yg.h(zx, a), Ax(a, yx(a, b), c, g));
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
function Hx(a, b, c) {
  if (a ? a.Bc : a) {
    return a.Bc(a, b, c);
  }
  var d;
  d = Hx[m(null == a ? null : a)];
  if (!d && (d = Hx._, !d)) {
    throw r("PEncodable.encode", a);
  }
  return d.call(null, a, b, c);
}
function Ix(a, b, c) {
  if (a ? a.xd : a) {
    return a.xd(a, b, c);
  }
  var d;
  d = Ix[m(null == a ? null : a)];
  if (!d && (d = Ix._, !d)) {
    throw r("PEncodable.decode", a);
  }
  return d.call(null, a, b, c);
}
function Jx(a) {
  if (a ? a.yd : a) {
    return a.yd(a);
  }
  var b;
  b = Jx[m(null == a ? null : a)];
  if (!b && (b = Jx._, !b)) {
    throw r("PParameterised.params", a);
  }
  return b.call(null, a);
}
function Kx(a, b, c, d, e) {
  if (a ? a.lf : a) {
    return a.lf(0, b, c, d, e);
  }
  var f;
  f = Kx[m(null == a ? null : a)];
  if (!f && (f = Kx._, !f)) {
    throw r("PRegion.region-step*", a);
  }
  return f.call(null, a, b, c, d, e);
}
function Lx(a) {
  if (a ? a.jf : a) {
    return a.jf();
  }
  var b;
  b = Lx[m(null == a ? null : a)];
  if (!b && (b = Lx._, !b)) {
    throw r("PRegion.ff-cells-per-column", a);
  }
  return b.call(null, a);
}
function Mx(a) {
  if (a ? a.hf : a) {
    return a.hf();
  }
  var b;
  b = Mx[m(null == a ? null : a)];
  if (!b && (b = Mx._, !b)) {
    throw r("PRegion.ff-active-cells", a);
  }
  return b.call(null, a);
}
function Nx(a) {
  if (a ? a.kf : a) {
    return a.kf();
  }
  var b;
  b = Nx[m(null == a ? null : a)];
  if (!b && (b = Nx._, !b)) {
    throw r("PRegion.ff-signal-cells", a);
  }
  return b.call(null, a);
}
var Ox = function() {
  function a(a, b, e) {
    return Kx(a, b, e, zj, !0);
  }
  var b = null, b = function(b, d, e, f, g) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, d, e);
      case 5:
        return Kx(b, d, e, f, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.j = a;
  b.J = function(a, b, e, f, g) {
    return Kx(a, b, e, f, g);
  };
  return b;
}();
function Px(a, b, c) {
  if (a ? a.$e : a) {
    return a.$e(0, b, c);
  }
  var d;
  d = Px[m(null == a ? null : a)];
  if (!d && (d = Px._, !d)) {
    throw r("PColumnField.columns-step", a);
  }
  return d.call(null, a, b, c);
}
function Qx(a, b, c, d) {
  if (a ? a.Ze : a) {
    return a.Ze(0, b, 0, d);
  }
  var e;
  e = Qx[m(null == a ? null : a)];
  if (!e && (e = Qx._, !e)) {
    throw r("PColumnField.columns-learn", a);
  }
  return e.call(null, a, b, c, d);
}
function Rx(a) {
  if (a ? a.vg : a) {
    return a.Ca;
  }
  var b;
  b = Rx[m(null == a ? null : a)];
  if (!b && (b = Rx._, !b)) {
    throw r("PColumnField.inhibition-radius", a);
  }
  return b.call(null, a);
}
function Sx(a) {
  if (a ? a.tg : a) {
    return a.xa;
  }
  var b;
  b = Sx[m(null == a ? null : a)];
  if (!b && (b = Sx._, !b)) {
    throw r("PColumnField.column-overlaps", a);
  }
  return b.call(null, a);
}
function Tx(a) {
  if (a ? a.ug : a) {
    return a.Fa;
  }
  var b;
  b = Tx[m(null == a ? null : a)];
  if (!b && (b = Tx._, !b)) {
    throw r("PColumnField.column-signal-overlaps", a);
  }
  return b.call(null, a);
}
function Ux(a, b, c, d) {
  if (a ? a.ff : a) {
    return a.ff(0, b, 0, d);
  }
  var e;
  e = Ux[m(null == a ? null : a)];
  if (!e && (e = Ux._, !e)) {
    throw r("PLayerOfCells.layer-step", a);
  }
  return e.call(null, a, b, c, d);
}
function Vx(a, b, c) {
  if (a ? a.ef : a) {
    return a.ef(0, b, c);
  }
  var d;
  d = Vx[m(null == a ? null : a)];
  if (!d && (d = Vx._, !d)) {
    throw r("PLayerOfCells.layer-learn", a);
  }
  return d.call(null, a, b, c);
}
function Wx(a, b) {
  if (a ? a.cf : a) {
    return a.cf();
  }
  var c;
  c = Wx[m(null == a ? null : a)];
  if (!c && (c = Wx._, !c)) {
    throw r("PLayerOfCells.layer-depolarise", a);
  }
  return c.call(null, a, b);
}
function Xx(a) {
  if (a ? a.df : a) {
    return a.df();
  }
  var b;
  b = Xx[m(null == a ? null : a)];
  if (!b && (b = Xx._, !b)) {
    throw r("PLayerOfCells.layer-depth", a);
  }
  return b.call(null, a);
}
function Yx(a) {
  if (a ? a.xg : a) {
    return a.fa;
  }
  var b;
  b = Yx[m(null == a ? null : a)];
  if (!b && (b = Yx._, !b)) {
    throw r("PLayerOfCells.bursting-columns", a);
  }
  return b.call(null, a);
}
function Zx(a) {
  if (a ? a.wg : a) {
    return a.oa;
  }
  var b;
  b = Zx[m(null == a ? null : a)];
  if (!b && (b = Zx._, !b)) {
    throw r("PLayerOfCells.active-columns", a);
  }
  return b.call(null, a);
}
function $x(a) {
  if (a ? a.bf : a) {
    return a.bf();
  }
  var b;
  b = $x[m(null == a ? null : a)];
  if (!b && (b = $x._, !b)) {
    throw r("PLayerOfCells.active-cells", a);
  }
  return b.call(null, a);
}
function ay(a) {
  if (a ? a.yg : a) {
    return a.qa;
  }
  var b;
  b = ay[m(null == a ? null : a)];
  if (!b && (b = ay._, !b)) {
    throw r("PLayerOfCells.learnable-cells", a);
  }
  return b.call(null, a);
}
function by(a) {
  if (a ? a.gf : a) {
    return a.gf();
  }
  var b;
  b = by[m(null == a ? null : a)];
  if (!b && (b = by._, !b)) {
    throw r("PLayerOfCells.signal-cells", a);
  }
  return b.call(null, a);
}
function cy(a) {
  if (a ? a.Bg : a) {
    return a.ra;
  }
  var b;
  b = cy[m(null == a ? null : a)];
  if (!b && (b = cy._, !b)) {
    throw r("PLayerOfCells.temporal-pooling-cells", a);
  }
  return b.call(null, a);
}
function dy(a) {
  if (a ? a.zg : a) {
    return a.la;
  }
  var b;
  b = dy[m(null == a ? null : a)];
  if (!b && (b = dy._, !b)) {
    throw r("PLayerOfCells.predictive-cells", a);
  }
  return b.call(null, a);
}
function ey(a) {
  if (a ? a.Ag : a) {
    return a.ma;
  }
  var b;
  b = ey[m(null == a ? null : a)];
  if (!b && (b = ey._, !b)) {
    throw r("PLayerOfCells.prior-predictive-cells", a);
  }
  return b.call(null, a);
}
function fy(a, b) {
  if (a ? a.de : a) {
    return a.de(a, b);
  }
  var c;
  c = fy[m(null == a ? null : a)];
  if (!c && (c = fy._, !c)) {
    throw r("PSynapseGraph.in-synapses", a);
  }
  return c.call(null, a, b);
}
function gy(a, b) {
  if (a ? a.fe : a) {
    return a.fe(a, b);
  }
  var c;
  c = gy[m(null == a ? null : a)];
  if (!c && (c = gy._, !c)) {
    throw r("PSynapseGraph.sources-connected-to", a);
  }
  return c.call(null, a, b);
}
function hy(a, b) {
  if (a ? a.ge : a) {
    return a.ge(a, b);
  }
  var c;
  c = hy[m(null == a ? null : a)];
  if (!c && (c = hy._, !c)) {
    throw r("PSynapseGraph.targets-connected-from", a);
  }
  return c.call(null, a, b);
}
function iy(a, b, c, d, e, f) {
  if (a ? a.ee : a) {
    return a.ee(a, b, c, d, e, f);
  }
  var g;
  g = iy[m(null == a ? null : a)];
  if (!g && (g = iy._, !g)) {
    throw r("PSynapseGraph.reinforce-in-synapses", a);
  }
  return g.call(null, a, b, c, d, e, f);
}
function jy(a, b, c, d) {
  if (a ? a.be : a) {
    return a.be(a, b, c, d);
  }
  var e;
  e = jy[m(null == a ? null : a)];
  if (!e && (e = jy._, !e)) {
    throw r("PSynapseGraph.conj-synapses", a);
  }
  return e.call(null, a, b, c, d);
}
function ky(a, b, c) {
  if (a ? a.ce : a) {
    return a.ce(a, b, c);
  }
  var d;
  d = ky[m(null == a ? null : a)];
  if (!d && (d = ky._, !d)) {
    throw r("PSynapseGraph.disj-synapses", a);
  }
  return d.call(null, a, b, c);
}
function ly(a, b) {
  if (a ? a.mf : a) {
    return a.mf(0, b);
  }
  var c;
  c = ly[m(null == a ? null : a)];
  if (!c && (c = ly._, !c)) {
    throw r("PSegments.cell-segments", a);
  }
  return c.call(null, a, b);
}
function my(a, b) {
  if (a ? a.Xd : a) {
    return a.Xd(a, b);
  }
  var c;
  c = my[m(null == a ? null : a)];
  if (!c && (c = my._, !c)) {
    throw r("PFeedForward.bits-value*", a);
  }
  return c.call(null, a, b);
}
function ny(a, b) {
  if (a ? a.$d : a) {
    return a.$d(a, b);
  }
  var c;
  c = ny[m(null == a ? null : a)];
  if (!c && (c = ny._, !c)) {
    throw r("PFeedForward.signal-bits-value*", a);
  }
  return c.call(null, a, b);
}
function oy(a, b) {
  if (a ? a.Zd : a) {
    return a.Zd(a, b);
  }
  var c;
  c = oy[m(null == a ? null : a)];
  if (!c && (c = oy._, !c)) {
    throw r("PFeedForward.motor-bits-value*", a);
  }
  return c.call(null, a, b);
}
function py(a, b) {
  if (a ? a.ae : a) {
    return a.ae(a, b);
  }
  var c;
  c = py[m(null == a ? null : a)];
  if (!c && (c = py._, !c)) {
    throw r("PFeedForward.source-of-bit", a);
  }
  return c.call(null, a, b);
}
function qy(a, b) {
  if (a ? a.Yd : a) {
    return a.Yd(a, b);
  }
  var c;
  c = qy[m(null == a ? null : a)];
  if (!c && (c = qy._, !c)) {
    throw r("PFeedForward.feed-forward-step*", a);
  }
  return c.call(null, a, b);
}
function ry(a) {
  if (a ? a.Cg : a) {
    return a.Cg(a);
  }
  var b;
  b = ry[m(null == a ? null : a)];
  if (!b && (b = ry._, !b)) {
    throw r("PMotorTopological.motor-topology", a);
  }
  return b.call(null, a);
}
function sy(a) {
  return xx(ry(a));
}
function ty(a, b) {
  if (a ? a.af : a) {
    return a.af(0, b);
  }
  var c;
  c = ty[m(null == a ? null : a)];
  if (!c && (c = ty._, !c)) {
    throw r("PFeedForwardComposite.source-of-incoming-bit", a);
  }
  return c.call(null, a, b);
}
var uy = function() {
  function a(a) {
    return my(a, 0);
  }
  var b = null, b = function(b, d) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      case 2:
        return my(b, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.g = a;
  b.h = function(a, b) {
    return my(a, b);
  };
  return b;
}(), vy = function() {
  function a(a) {
    return ny(a, 0);
  }
  var b = null, b = function(b, d) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      case 2:
        return ny(b, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.g = a;
  b.h = function(a, b) {
    return ny(a, b);
  };
  return b;
}(), wy = function() {
  function a(a) {
    return qy(a, !0);
  }
  var b = null, b = function(b, d) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      case 2:
        return qy(b, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.g = a;
  b.h = function(a, b) {
    return qy(a, b);
  };
  return b;
}();
function xy(a) {
  if (a ? a.Ad : a) {
    return a.Ad(a);
  }
  var b;
  b = xy[m(null == a ? null : a)];
  if (!b && (b = xy._, !b)) {
    throw r("PTemporal.timestep", a);
  }
  return b.call(null, a);
}
function yy(a) {
  if (a ? a.zd : a) {
    return a.zd(a);
  }
  var b;
  b = yy[m(null == a ? null : a)];
  if (!b && (b = yy._, !b)) {
    throw r("PResettable.reset", a);
  }
  return b.call(null, a);
}
function zy(a) {
  if (a ? a.Dg : a) {
    return a.value;
  }
  var b;
  b = zy[m(null == a ? null : a)];
  if (!b && (b = zy._, !b)) {
    throw r("PSensoryInput.domain-value", a);
  }
  return b.call(null, a);
}
;Math.seedrandom = null;
(function(a, b, c, d, e, f) {
  function g(a) {
    var b, c = a.length, e = this, f = 0, g = e.K = e.We = 0, h = e.me = [];
    for (c || (a = [c++]);f < d;) {
      h[f] = f++;
    }
    for (f = 0;f < d;f++) {
      h[f] = h[g = y & g + a[f % c] + (b = h[f])], h[g] = b;
    }
    (e.Ve = function(a) {
      for (var b, c = 0, f = e.K, g = e.We, h = e.me;a--;) {
        b = h[f = y & f + 1], c = c * d + h[y & (h[f] = h[g = y & g + b]) + (h[g] = b)];
      }
      e.K = f;
      e.We = g;
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
    return t(b);
  }
  function p() {
    var c;
    try {
      return a.crypto.getRandomValues(c = new Uint8Array(d)), t(c);
    } catch (e) {
      return[+new Date, a.document, a.history, a.navigator, a.screen, t(b)];
    }
  }
  function t(a) {
    return String.fromCharCode.apply(0, a);
  }
  var s = c.pow(d, e), w = c.pow(2, f), A = 2 * w, y = d - 1;
  c.seedrandom = function(a, f) {
    var y = [], L = l(h(f ? [a, t(b)] : 0 in arguments ? a : p(), 3), y), N = new g(y);
    l(t(N.me), b);
    c.random = function() {
      for (var a = N.Ve(e), b = s, c = 0;a < w;) {
        a = (a + c) * d, b *= d, c = N.Ve(1);
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
function Ay(a) {
  if (a ? a.ue : a) {
    return a.ue();
  }
  var b;
  b = Ay[m(null == a ? null : a)];
  if (!b && (b = Ay._, !b)) {
    throw r("IRandom.-next-double", a);
  }
  return b.call(null, a);
}
var By = function() {
  function a(a, b) {
    if (a ? a.we : a) {
      return a.we(0, b);
    }
    var c;
    c = By[m(null == a ? null : a)];
    if (!c && (c = By._, !c)) {
      throw r("IRandom.-next-int", a);
    }
    return c.call(null, a, b);
  }
  function b(a) {
    if (a ? a.ve : a) {
      return a.ve();
    }
    var b;
    b = By[m(null == a ? null : a)];
    if (!b && (b = By._, !b)) {
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
function Cy(a, b, c) {
  return b + (a.q ? a.q() : a.call(null)) * (c - b);
}
function Dy(a, b, c, d) {
  this.seed = a;
  this.Ab = b;
  this.n = c;
  this.l = d;
  this.t = 2229667594;
  this.G = 8192;
  2 < arguments.length ? (this.n = c, this.l = d) : this.l = this.n = null;
}
k = Dy.prototype;
k.L = function(a, b) {
  return Cb.j(this, b, null);
};
k.M = function(a, b, c) {
  switch(b instanceof V ? b.V : null) {
    case "random-double":
      return this.Ab;
    case "seed":
      return this.seed;
    default:
      return P.j(this.l, b, c);
  }
};
k.O = function(a, b, c) {
  return Qj(b, function() {
    return function(a) {
      return Qj(b, Wj, "", " ", "", c, a);
    };
  }(this), "#cemerick.pprng.SeededRandom{", ", ", "}", c, ig.h(new T(null, 2, 5, U, [new T(null, 2, 5, U, [Ko, this.seed], null), new T(null, 2, 5, U, [ip, this.Ab], null)], null), this.l));
};
k.H = function() {
  return this.n;
};
k.T = function() {
  return 2 + K(this.l);
};
k.Q = function() {
  var a = this.w;
  return null != a ? a : this.w = a = uf(this);
};
k.N = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && ii(this, b) : b) ? !0 : !1;
};
k.va = function(a, b) {
  return Ce(new xj(null, new n(null, 2, [Ko, null, ip, null], null), null), b) ? ee.h(Nd(fh.h(pi, this), this.n), b) : new Dy(this.seed, this.Ab, this.n, rg(ee.h(this.l, b)), null);
};
k.ga = function(a, b, c) {
  return q(X.h ? X.h(Ko, b) : X.call(null, Ko, b)) ? new Dy(c, this.Ab, this.n, this.l, null) : q(X.h ? X.h(ip, b) : X.call(null, ip, b)) ? new Dy(this.seed, c, this.n, this.l, null) : new Dy(this.seed, this.Ab, this.n, Q.j(this.l, b, c), null);
};
k.R = function() {
  return B(ig.h(new T(null, 2, 5, U, [new T(null, 2, 5, U, [Ko, this.seed], null), new T(null, 2, 5, U, [ip, this.Ab], null)], null), this.l));
};
k.I = function(a, b) {
  return new Dy(this.seed, this.Ab, b, this.l, this.w);
};
k.S = function(a, b) {
  return pe(b) ? Kb(this, v.h(b, 0), v.h(b, 1)) : Je.j(ub, this, b);
};
k.ue = function() {
  return this.Ab.q ? this.Ab.q() : this.Ab.call(null);
};
k.ve = function() {
  return Ue(Cy(this.Ab, -2147483648, 2147483647));
};
k.we = function(a, b) {
  return Ue(Cy(this.Ab, 0, b));
};
var Ey = function() {
  function a(a, b) {
    return By.h(a, b);
  }
  function b(a) {
    return By.g(a);
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
var MB = function() {
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
}(), NB = function() {
  function a(a) {
    Math.seedrandom.g ? Math.seedrandom.g(a) : Math.seedrandom.call(null, a);
    Math.seedrandom.g ? Math.seedrandom.g(a) : Math.seedrandom.call(null, a);
    return new Dy(a, Math.random);
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
}().q(), OB = function() {
  function a(a, b) {
    if (!(a < b)) {
      throw Error("Assert failed: " + u.g(Gg.k(H([Af(new pd(null, "\x3c", "\x3c", 993667236, null), new pd(null, "lower", "lower", -1534114948, null), new pd(null, "upper", "upper", 1886775433, null))], 0))));
    }
    return a + Ay(NB) * (b - a);
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
}();
function PB(a) {
  return 0 + Ey.h(NB, a - 0);
}
function QB(a) {
  return O.h(a, PB(K(a)));
}
function RB(a) {
  a = Jg.j(Af, Vg.g(function() {
    return Ay(NB);
  }), a);
  return Jg.h(Pd, Ie.h(C, a));
}
function SB(a, b) {
  return Je.j(function(b, d) {
    return q(a.g ? a.g(d) : a.call(null, d)) ? b + 1 : b;
  }, 0, b);
}
function TB(a, b) {
  return lg(Je.j(function(a, b) {
    var e = O.j(b, 0, null), f = O.j(b, 1, null);
    return ng.j(a, e, Ic(f));
  }, Gc(pi), lg(Je.j(function(b, d) {
    var e = O.j(d, 0, null), f = O.j(d, 1, null), g = a.h ? a.h(e, f) : a.call(null, e, f), h = P.j(b, g, Gc(pi));
    return ng.j(b, g, ng.j(h, e, f));
  }, Gc(pi), b))));
}
function UB(a, b, c) {
  return gb(B(b)) ? a : lg(Je.j(function(a, b) {
    return ng.j(a, b, function() {
      var f = P.h(a, b);
      return c.g ? c.g(f) : c.call(null, f);
    }());
  }, Gc(a), b));
}
function VB(a, b) {
  return fh.h(function() {
    var a = null == b ? null : sb(b);
    return q(a) ? a : pi;
  }(), gh.h(function(b) {
    var d = O.j(b, 0, null);
    b = O.j(b, 1, null);
    return new T(null, 2, 5, U, [d, a.g ? a.g(b) : a.call(null, b)], null);
  }, b));
}
function WB(a, b) {
  if (0 < a) {
    for (var c = B(b), d = ij(function() {
      return function(a, c) {
        return nd(new T(null, 2, 5, U, [b.g ? b.g(a) : b.call(null, a), a], null), new T(null, 2, 5, U, [b.g ? b.g(c) : b.call(null, c), c], null));
      };
    }(c)), e = -1;;) {
      if (ke(c)) {
        return sj(d);
      }
      var f = C(c), g = O.j(f, 0, null), h = O.j(f, 1, null);
      ke(d) ? (c = F(c), d = Q.j(d, g, h), g = h) : K(d) < a ? (c = F(c), d = Q.j(d, g, h), g = function() {
        var a = e, b = h;
        return a < b ? a : b;
      }()) : h > e ? (g = Q.j(ee.h(d, C(sj(d))), g, h), c = F(c), d = g, g = C(ni(g))) : (c = F(c), g = e);
      e = g;
    }
  } else {
    return sd;
  }
}
;var XB = function() {
  function a(a, d, e, f) {
    var g = null;
    3 < arguments.length && (g = H(Array.prototype.slice.call(arguments, 3), 0));
    return b.call(this, a, d, e, g);
  }
  function b(a, b, e, f) {
    return Je.j(function(a, b) {
      return R.J(lh, a, new T(null, 1, 5, U, [b], null), e, f);
    }, a, b);
  }
  a.A = 3;
  a.o = function(a) {
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
function YB(a, b, c, d, e, f, g) {
  this.ob = a;
  this.pb = b;
  this.Na = c;
  this.wb = d;
  this.Cb = e;
  this.n = f;
  this.l = g;
  this.t = 2229667594;
  this.G = 8192;
  5 < arguments.length ? (this.n = f, this.l = g) : this.l = this.n = null;
}
k = YB.prototype;
k.L = function(a, b) {
  return Cb.j(this, b, null);
};
k.M = function(a, b, c) {
  switch(b instanceof V ? b.V : null) {
    case "cull-zeros?":
      return this.Cb;
    case "max-syns":
      return this.wb;
    case "pcon":
      return this.Na;
    case "targets-by-source":
      return this.pb;
    case "syns-by-target":
      return this.ob;
    default:
      return P.j(this.l, b, c);
  }
};
k.O = function(a, b, c) {
  return Qj(b, function() {
    return function(a) {
      return Qj(b, Wj, "", " ", "", c, a);
    };
  }(this), "#org.nfrac.comportex.synapses.SynapseGraph{", ", ", "}", c, ig.h(new T(null, 5, 5, U, [new T(null, 2, 5, U, [er, this.ob], null), new T(null, 2, 5, U, [hq, this.pb], null), new T(null, 2, 5, U, [Wr, this.Na], null), new T(null, 2, 5, U, [yk, this.wb], null), new T(null, 2, 5, U, [ms, this.Cb], null)], null), this.l));
};
k.H = function() {
  return this.n;
};
k.T = function() {
  return 5 + K(this.l);
};
k.Q = function() {
  var a = this.w;
  return null != a ? a : this.w = a = uf(this);
};
k.N = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && ii(this, b) : b) ? !0 : !1;
};
k.va = function(a, b) {
  return Ce(new xj(null, new n(null, 5, [yk, null, hq, null, er, null, Wr, null, ms, null], null), null), b) ? ee.h(Nd(fh.h(pi, this), this.n), b) : new YB(this.ob, this.pb, this.Na, this.wb, this.Cb, this.n, rg(ee.h(this.l, b)), null);
};
k.ga = function(a, b, c) {
  return q(X.h ? X.h(er, b) : X.call(null, er, b)) ? new YB(c, this.pb, this.Na, this.wb, this.Cb, this.n, this.l, null) : q(X.h ? X.h(hq, b) : X.call(null, hq, b)) ? new YB(this.ob, c, this.Na, this.wb, this.Cb, this.n, this.l, null) : q(X.h ? X.h(Wr, b) : X.call(null, Wr, b)) ? new YB(this.ob, this.pb, c, this.wb, this.Cb, this.n, this.l, null) : q(X.h ? X.h(yk, b) : X.call(null, yk, b)) ? new YB(this.ob, this.pb, this.Na, c, this.Cb, this.n, this.l, null) : q(X.h ? X.h(ms, b) : X.call(null, ms, 
  b)) ? new YB(this.ob, this.pb, this.Na, this.wb, c, this.n, this.l, null) : new YB(this.ob, this.pb, this.Na, this.wb, this.Cb, this.n, Q.j(this.l, b, c), null);
};
k.R = function() {
  return B(ig.h(new T(null, 5, 5, U, [new T(null, 2, 5, U, [er, this.ob], null), new T(null, 2, 5, U, [hq, this.pb], null), new T(null, 2, 5, U, [Wr, this.Na], null), new T(null, 2, 5, U, [yk, this.wb], null), new T(null, 2, 5, U, [ms, this.Cb], null)], null), this.l));
};
k.I = function(a, b) {
  return new YB(this.ob, this.pb, this.Na, this.wb, this.Cb, b, this.l, this.w);
};
k.S = function(a, b) {
  return pe(b) ? Kb(this, v.h(b, 0), v.h(b, 1)) : Je.j(ub, this, b);
};
k.de = function(a, b) {
  return this.ob.g ? this.ob.g(b) : this.ob.call(null, b);
};
k.fe = function(a, b) {
  var c = this;
  return Ag.h(function() {
    return function(a) {
      var b = O.j(a, 0, null);
      return O.j(a, 1, null) >= c.Na ? b : null;
    };
  }(this), fy(this, b));
};
k.ge = function(a, b) {
  return this.pb.g ? this.pb.g(b) : this.pb.call(null, b);
};
k.ee = function(a, b, c, d, e, f) {
  var g = this, h = fy(this, b);
  a = TB(function() {
    return function(a, b) {
      return q(c.g ? c.g(a) : c.call(null, a)) ? vs : q(d.g ? d.g(a) : d.call(null, a)) ? 1 === b ? vs : b < g.Na && b >= g.Na - e ? us : Mo : 0 >= b ? q(g.Cb) ? ol : vs : b >= g.Na && b < g.Na + f ? To : vk;
    };
  }(h, this), h);
  h = uj.k(H([vs.g(a), VB(function() {
    return function(a) {
      a += e;
      return 1 > a ? a : 1;
    };
  }(h, a, this), Mo.g(a)), VB(function() {
    return function(a) {
      a += e;
      return 1 > a ? a : 1;
    };
  }(h, a, this), us.g(a)), VB(function() {
    return function(a) {
      a -= f;
      return 0 < a ? a : 0;
    };
  }(h, a, this), vk.g(a)), VB(function() {
    return function(a) {
      return a - f;
    };
  }(h, a, this), To.g(a))], 0));
  return lh.ca(lh.ca(kh(this, new T(null, 2, 5, U, [er, b], null), h), new T(null, 1, 5, U, [hq], null), XB, sj(us.g(a)), be, b), new T(null, 1, 5, U, [hq], null), XB, sj(To.g(a)), je, b);
};
k.be = function(a, b, c, d) {
  a = fy(this, b);
  a = uj.k(H([a, Dj(c, Ng.g(d))], 0));
  var e = kh(this, new T(null, 2, 5, U, [er, b], null), a);
  c = d >= this.Na ? lh.ca(e, new T(null, 1, 5, U, [hq], null), XB, c, be, b) : e;
  return K(a) > this.wb ? ky(c, b, Kg.h(K(a) - this.wb, sj(Ie.h(wf, a)))) : c;
};
k.ce = function(a, b, c) {
  return lh.ca(lh.j(this, new T(null, 2, 5, U, [er, b], null), function() {
    return function(a) {
      return R.j(ee, a, c);
    };
  }(this)), new T(null, 1, 5, U, [hq], null), XB, c, je, b);
};
function ZB(a) {
  return new YB(er.g(a), hq.g(a), Wr.g(a), yk.g(a), ms.g(a), null, ee.k(a, er, H([hq, Wr, yk, ms], 0)));
}
function $B(a, b, c) {
  b = Ke(function(a, b, f) {
    f = Ag.h(function(a) {
      var b = O.j(a, 0, null);
      return O.j(a, 1, null) >= c ? b : null;
    }, f);
    return XB.k(a, f, be, H([b], 0));
  }, Fh(Ng.h(b, zj)), a);
  return ZB(new n(null, 5, [er, a, hq, b, Wr, c, yk, 1E6, ms, !1], null));
}
function aC(a, b) {
  return lg(Je.j(function(b, d) {
    return Je.j(function(a, b) {
      return ng.j(a, b, P.j(a, b, 0) + 1);
    }, b, hy(a, d));
  }, Gc(pi), b));
}
function bC(a, b) {
  var c = O.j(b, 0, null), d = O.j(b, 1, null);
  return c * a + d;
}
function cC(a, b) {
  return new T(null, 2, 5, U, [Ve(b, a), We(b, a)], null);
}
function dC(a, b, c) {
  var d = O.j(c, 0, null), e = O.j(c, 1, null);
  c = O.j(c, 2, null);
  return d * a * b + e * b + c;
}
function eC(a, b, c) {
  var d = Ve(c, a * b);
  a = We(c, a * b);
  return new T(null, 3, 5, U, [d, Ve(a, b), We(a, b)], null);
}
function fC(a, b, c, d, e, f, g, h, l) {
  this.Za = a;
  this.depth = b;
  this.lb = c;
  this.za = d;
  this.Wa = e;
  this.Z = f;
  this.kb = g;
  this.n = h;
  this.l = l;
  this.t = 2229667594;
  this.G = 8192;
  7 < arguments.length ? (this.n = h, this.l = l) : this.l = this.n = null;
}
k = fC.prototype;
k.L = function(a, b) {
  return Cb.j(this, b, null);
};
k.M = function(a, b, c) {
  switch(b instanceof V ? b.V : null) {
    case "i-\x3etgt":
      return this.kb;
    case "tgt-\x3ei":
      return this.Z;
    case "i-\x3esrc":
      return this.Wa;
    case "src-\x3ei":
      return this.za;
    case "max-segs":
      return this.lb;
    case "depth":
      return this.depth;
    case "raw-sg":
      return this.Za;
    default:
      return P.j(this.l, b, c);
  }
};
k.O = function(a, b, c) {
  return Qj(b, function() {
    return function(a) {
      return Qj(b, Wj, "", " ", "", c, a);
    };
  }(this), "#org.nfrac.comportex.synapses.SynapseGraphBySegments{", ", ", "}", c, ig.h(new T(null, 7, 5, U, [new T(null, 2, 5, U, [zs, this.Za], null), new T(null, 2, 5, U, [kr, this.depth], null), new T(null, 2, 5, U, [Rk, this.lb], null), new T(null, 2, 5, U, [ll, this.za], null), new T(null, 2, 5, U, [El, this.Wa], null), new T(null, 2, 5, U, [Qr, this.Z], null), new T(null, 2, 5, U, [Kp, this.kb], null)], null), this.l));
};
k.H = function() {
  return this.n;
};
k.T = function() {
  return 7 + K(this.l);
};
k.mf = function(a, b) {
  var c = O.j(b, 0, null), d = O.j(b, 1, null);
  return gh.h(function(a, b, c, d) {
    return function(a) {
      return fy(d, new T(null, 3, 5, U, [b, c, a], null));
    };
  }(b, c, d, this), Hj.g(this.lb));
};
k.Q = function() {
  var a = this.w;
  return null != a ? a : this.w = a = uf(this);
};
k.N = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && ii(this, b) : b) ? !0 : !1;
};
k.va = function(a, b) {
  return Ce(new xj(null, new n(null, 7, [Rk, null, ll, null, El, null, Kp, null, kr, null, Qr, null, zs, null], null), null), b) ? ee.h(Nd(fh.h(pi, this), this.n), b) : new fC(this.Za, this.depth, this.lb, this.za, this.Wa, this.Z, this.kb, this.n, rg(ee.h(this.l, b)), null);
};
k.ga = function(a, b, c) {
  return q(X.h ? X.h(zs, b) : X.call(null, zs, b)) ? new fC(c, this.depth, this.lb, this.za, this.Wa, this.Z, this.kb, this.n, this.l, null) : q(X.h ? X.h(kr, b) : X.call(null, kr, b)) ? new fC(this.Za, c, this.lb, this.za, this.Wa, this.Z, this.kb, this.n, this.l, null) : q(X.h ? X.h(Rk, b) : X.call(null, Rk, b)) ? new fC(this.Za, this.depth, c, this.za, this.Wa, this.Z, this.kb, this.n, this.l, null) : q(X.h ? X.h(ll, b) : X.call(null, ll, b)) ? new fC(this.Za, this.depth, this.lb, c, this.Wa, 
  this.Z, this.kb, this.n, this.l, null) : q(X.h ? X.h(El, b) : X.call(null, El, b)) ? new fC(this.Za, this.depth, this.lb, this.za, c, this.Z, this.kb, this.n, this.l, null) : q(X.h ? X.h(Qr, b) : X.call(null, Qr, b)) ? new fC(this.Za, this.depth, this.lb, this.za, this.Wa, c, this.kb, this.n, this.l, null) : q(X.h ? X.h(Kp, b) : X.call(null, Kp, b)) ? new fC(this.Za, this.depth, this.lb, this.za, this.Wa, this.Z, c, this.n, this.l, null) : new fC(this.Za, this.depth, this.lb, this.za, this.Wa, 
  this.Z, this.kb, this.n, Q.j(this.l, b, c), null);
};
k.R = function() {
  return B(ig.h(new T(null, 7, 5, U, [new T(null, 2, 5, U, [zs, this.Za], null), new T(null, 2, 5, U, [kr, this.depth], null), new T(null, 2, 5, U, [Rk, this.lb], null), new T(null, 2, 5, U, [ll, this.za], null), new T(null, 2, 5, U, [El, this.Wa], null), new T(null, 2, 5, U, [Qr, this.Z], null), new T(null, 2, 5, U, [Kp, this.kb], null)], null), this.l));
};
k.I = function(a, b) {
  return new fC(this.Za, this.depth, this.lb, this.za, this.Wa, this.Z, this.kb, b, this.l, this.w);
};
k.S = function(a, b) {
  return pe(b) ? Kb(this, v.h(b, 0), v.h(b, 1)) : Je.j(ub, this, b);
};
k.de = function(a, b) {
  var c = fy(this.Za, this.Z.g ? this.Z.g(b) : this.Z.call(null, b));
  return Dj(Jg.h(this.Wa, sj(c)), ni(c));
};
k.fe = function(a, b) {
  return Jg.h(this.za, gy(this.Za, this.Z.g ? this.Z.g(b) : this.Z.call(null, b)));
};
k.ge = function(a, b) {
  return Jg.h(this.kb, hy(this.Za, this.za.g ? this.za.g(b) : this.za.call(null, b)));
};
k.ee = function(a, b, c, d, e, f) {
  return lh.k(this, new T(null, 1, 5, U, [zs], null), iy, this.Z.g ? this.Z.g(b) : this.Z.call(null, b), xg.h(c, this.Wa), xg.h(d, this.Wa), H([e, f], 0));
};
k.be = function(a, b, c, d) {
  return lh.ca(this, new T(null, 1, 5, U, [zs], null), jy, this.Z.g ? this.Z.g(b) : this.Z.call(null, b), Jg.h(this.za, c), d);
};
k.ce = function(a, b, c) {
  return lh.J(this, new T(null, 1, 5, U, [zs], null), ky, this.Z.g ? this.Z.g(b) : this.Z.call(null, b), Jg.h(this.za, c));
};
function gC(a) {
  return R.h(Re, a) - R.h(Se, a);
}
function hC(a, b, c) {
  var d = gy(a, c), e = Jg.h(yg.h(yx, b), d);
  if (B(e)) {
    if ("number" === typeof C(e)) {
      return gC(e);
    }
    var f = K(xx(b));
    return R.h(Re, function() {
      return function(a, b, c) {
        return function t(d) {
          return new Ef(null, function(a, b, c) {
            return function() {
              for (;;) {
                var e = B(d);
                if (e) {
                  var f = e;
                  if (S(f)) {
                    var g = x(f), h = K(g), l = $f(h);
                    return function() {
                      for (var d = 0;;) {
                        if (d < h) {
                          var t = v.h(g, d);
                          dg(l, gC(Jg.h(function(a, b) {
                            return function(a) {
                              return O.h(a, b);
                            };
                          }(d, t, g, h, l, f, e, a, b, c), c)));
                          d += 1;
                        } else {
                          return!0;
                        }
                      }
                    }() ? cg(eg(l), t(z(f))) : cg(eg(l), null);
                  }
                  var $ = C(f);
                  return Ld(gC(Jg.h(function(a) {
                    return function(b) {
                      return O.h(b, a);
                    };
                  }($, f, e, a, b, c), c)), t(E(f)));
                }
                return null;
              }
            };
          }(a, b, c), null, null);
        };
      }(f, d, e)(Hj.g(f));
    }());
  }
  return 0;
}
function iC(a, b, c) {
  var d = R.h(Re, xx(b)), e = R.h(Re, xx(c));
  a = Jg.h(yg.j(hC, a, c), Hj.g(Dx(b)));
  a = R.h(Ne, a) / K(a);
  d = Ve(a / e * d, 2);
  d = MB.g(.7 * d);
  return 1 < d ? d : 1;
}
function jC(a, b, c) {
  b = MB.g(b * c);
  return WB(1 > b ? 1 : b, a);
}
function kC(a, b) {
  return gh.h(b, Hj.g(a));
}
function lC(a) {
  return lg(Ke(function(a, c, d) {
    return q(d) ? ng.j(a, c, d) : a;
  }, Gc(pi), a));
}
function mC(a, b, c, d, e) {
  for (var f = sj(a), g = kg(kC(Dx(b), a));;) {
    if (a = C(f), q(a)) {
      var h = a;
      a = function() {
        var a = h;
        return g.g ? g.g(a) : g.call(null, a);
      }();
      if (q(a)) {
        var l = a, f = F(f);
        a = function() {
          for (var a = yx(b, h), f = Fx.p(b, a, c, 0), s = g;;) {
            var w = C(f);
            if (q(w)) {
              var A = w, w = zx(b, A), y;
              y = w;
              y = s.g ? s.g(y) : s.call(null, y);
              if (q(y)) {
                if (A = Bx(b, a, A) - d, A = (0 < A ? A : 0) / e, l >= y + A) {
                  f = F(f), s = ng.j(s, w, null);
                } else {
                  if (l <= y - A) {
                    return ng.j(s, h, null);
                  }
                  f = F(f);
                }
              } else {
                f = F(f);
              }
            } else {
              return s;
            }
          }
        }();
      } else {
        f = F(f), a = g;
      }
      g = a;
    } else {
      return lC(Ic(g));
    }
  }
}
;function nC(a) {
  return 0 > a ? -a : a;
}
function oC(a, b, c, d) {
  return ig.h(Hj.h(function() {
    var c = b + d + 1;
    return c < a ? c : a;
  }(), function() {
    var d = b + c + 1;
    return d < a ? d : a;
  }()), Hj.h(function() {
    var a = b - c;
    return 0 < a ? a : 0;
  }(), function() {
    var a = b - d;
    return 0 < a ? a : 0;
  }()));
}
function pC(a, b, c) {
  this.size = a;
  this.n = b;
  this.l = c;
  this.t = 2229667594;
  this.G = 8192;
  1 < arguments.length ? (this.n = b, this.l = c) : this.l = this.n = null;
}
k = pC.prototype;
k.L = function(a, b) {
  return Cb.j(this, b, null);
};
k.M = function(a, b, c) {
  switch(b instanceof V ? b.V : null) {
    case "size":
      return this.size;
    default:
      return P.j(this.l, b, c);
  }
};
k.O = function(a, b, c) {
  return Qj(b, function() {
    return function(a) {
      return Qj(b, Wj, "", " ", "", c, a);
    };
  }(this), "#org.nfrac.comportex.topology.OneDTopology{", ", ", "}", c, ig.h(new T(null, 1, 5, U, [new T(null, 2, 5, U, [Po, this.size], null)], null), this.l));
};
k.H = function() {
  return this.n;
};
k.T = function() {
  return 1 + K(this.l);
};
k.Q = function() {
  var a = this.w;
  return null != a ? a : this.w = a = uf(this);
};
k.N = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && ii(this, b) : b) ? !0 : !1;
};
k.je = function() {
  return new T(null, 1, 5, U, [this.size], null);
};
k.ie = function(a, b) {
  return b;
};
k.ke = function(a, b) {
  return b;
};
k.le = function(a, b, c, d) {
  return oC(this.size, b, c, d);
};
k.he = function(a, b, c) {
  return nC(c - b);
};
k.va = function(a, b) {
  return Ce(new xj(null, new n(null, 1, [Po, null], null), null), b) ? ee.h(Nd(fh.h(pi, this), this.n), b) : new pC(this.size, this.n, rg(ee.h(this.l, b)), null);
};
k.ga = function(a, b, c) {
  return q(X.h ? X.h(Po, b) : X.call(null, Po, b)) ? new pC(c, this.n, this.l, null) : new pC(this.size, this.n, Q.j(this.l, b, c), null);
};
k.R = function() {
  return B(ig.h(new T(null, 1, 5, U, [new T(null, 2, 5, U, [Po, this.size], null)], null), this.l));
};
k.I = function(a, b) {
  return new pC(this.size, b, this.l, this.w);
};
k.S = function(a, b) {
  return pe(b) ? Kb(this, v.h(b, 0), v.h(b, 1)) : Je.j(ub, this, b);
};
function qC(a, b, c, d) {
  this.width = a;
  this.height = b;
  this.n = c;
  this.l = d;
  this.t = 2229667594;
  this.G = 8192;
  2 < arguments.length ? (this.n = c, this.l = d) : this.l = this.n = null;
}
k = qC.prototype;
k.L = function(a, b) {
  return Cb.j(this, b, null);
};
k.M = function(a, b, c) {
  switch(b instanceof V ? b.V : null) {
    case "height":
      return this.height;
    case "width":
      return this.width;
    default:
      return P.j(this.l, b, c);
  }
};
k.O = function(a, b, c) {
  return Qj(b, function() {
    return function(a) {
      return Qj(b, Wj, "", " ", "", c, a);
    };
  }(this), "#org.nfrac.comportex.topology.TwoDTopology{", ", ", "}", c, ig.h(new T(null, 2, 5, U, [new T(null, 2, 5, U, [Un, this.width], null), new T(null, 2, 5, U, [qs, this.height], null)], null), this.l));
};
k.H = function() {
  return this.n;
};
k.T = function() {
  return 2 + K(this.l);
};
k.Q = function() {
  var a = this.w;
  return null != a ? a : this.w = a = uf(this);
};
k.N = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && ii(this, b) : b) ? !0 : !1;
};
k.je = function() {
  return new T(null, 2, 5, U, [this.width, this.height], null);
};
k.ie = function(a, b) {
  return new T(null, 2, 5, U, [Ve(b, this.height), We(b, this.height)], null);
};
k.ke = function(a, b) {
  var c = O.j(b, 0, null), d = O.j(b, 1, null);
  return c * this.height + d;
};
k.le = function(a, b, c, d) {
  var e = this;
  a = O.j(b, 0, null);
  var f = O.j(b, 1, null);
  return function(a, b, f, p) {
    return function s(w) {
      return new Ef(null, function(a, b, f, g) {
        return function() {
          for (var h = w;;) {
            var l = B(h);
            if (l) {
              var p = l, $ = C(p);
              if (l = B(function(a, b, c, d, e, f, g, h) {
                return function ya(l) {
                  return new Ef(null, function(a, b) {
                    return function() {
                      for (;;) {
                        var a = B(l);
                        if (a) {
                          if (S(a)) {
                            var c = x(a), d = K(c), e = $f(d);
                            a: {
                              for (var f = 0;;) {
                                if (f < d) {
                                  var g = v.h(c, f);
                                  e.add(new T(null, 2, 5, U, [b, g], null));
                                  f += 1;
                                } else {
                                  c = !0;
                                  break a;
                                }
                              }
                              c = void 0;
                            }
                            return c ? cg(eg(e), ya(z(a))) : cg(eg(e), null);
                          }
                          e = C(a);
                          return Ld(new T(null, 2, 5, U, [b, e], null), ya(E(a)));
                        }
                        return null;
                      }
                    };
                  }(a, b, c, d, e, f, g, h), null, null);
                };
              }(h, $, p, l, a, b, f, g)(oC(e.height, f, c, d)))) {
                return ig.h(l, s(E(h)));
              }
              h = E(h);
            } else {
              return null;
            }
          }
        };
      }(a, b, f, p), null, null);
    };
  }(b, a, f, this)(oC(e.width, a, c, d));
};
k.he = function(a, b, c) {
  a = O.j(b, 0, null);
  b = O.j(b, 1, null);
  var d = O.j(c, 0, null);
  c = O.j(c, 1, null);
  return nC(d - a) + nC(c - b);
};
k.va = function(a, b) {
  return Ce(new xj(null, new n(null, 2, [Un, null, qs, null], null), null), b) ? ee.h(Nd(fh.h(pi, this), this.n), b) : new qC(this.width, this.height, this.n, rg(ee.h(this.l, b)), null);
};
k.ga = function(a, b, c) {
  return q(X.h ? X.h(Un, b) : X.call(null, Un, b)) ? new qC(c, this.height, this.n, this.l, null) : q(X.h ? X.h(qs, b) : X.call(null, qs, b)) ? new qC(this.width, c, this.n, this.l, null) : new qC(this.width, this.height, this.n, Q.j(this.l, b, c), null);
};
k.R = function() {
  return B(ig.h(new T(null, 2, 5, U, [new T(null, 2, 5, U, [Un, this.width], null), new T(null, 2, 5, U, [qs, this.height], null)], null), this.l));
};
k.I = function(a, b) {
  return new qC(this.width, this.height, b, this.l, this.w);
};
k.S = function(a, b) {
  return pe(b) ? Kb(this, v.h(b, 0), v.h(b, 1)) : Je.j(ub, this, b);
};
var sC = function rC(b, c, d) {
  return rC(b, c, d);
};
function tC(a) {
  var b = O.j(a, 0, null), c = O.j(a, 1, null), d = O.j(a, 2, null), e = O.j(a, 3, null);
  switch(K(a)) {
    case 0:
      return new pC(0);
    case 1:
      return new pC(b);
    case 2:
      return new qC(b, c);
    case 3:
      return sC(b, c, d);
    case 4:
      return sC(b, c, d * e);
    default:
      throw Error("No matching clause: " + u.g(K(a)));;
  }
}
var uC = function() {
  function a(a, b) {
    for (;;) {
      var c = K(a), g = K(b), h = a, l = O.j(h, 0, null), p = O.j(h, 1, null), h = O.j(h, 2, null), t = b, s = O.j(t, 0, null), w = O.j(t, 1, null), t = O.j(t, 2, null);
      if (g > c) {
        l = a, a = b, b = l;
      } else {
        var A;
        A = (A = 0 === g) ? A : tg(rf, b);
        if (q(A)) {
          return a;
        }
        if (1 === c && 1 === g) {
          return new T(null, 1, 5, U, [l + s], null);
        }
        if (2 === c && 2 === g && p === w) {
          return new T(null, 2, 5, U, [l + s, p], null);
        }
        if (2 === c && 2 === g) {
          b = new T(null, 1, 5, U, [s * w], null);
        } else {
          if (2 === c && 1 === g && 0 === We(s, p)) {
            return new T(null, 2, 5, U, [l + Ve(s, p), p], null);
          }
          if (2 === c && 1 === g) {
            return new T(null, 1, 5, U, [l * p + s], null);
          }
          if (3 === c && 3 === g && h === t && p === w) {
            return new T(null, 3, 5, U, [l + s, p, h], null);
          }
          if (3 === c && 3 === g) {
            b = new T(null, 2, 5, U, [s, w * t], null);
          } else {
            if (3 === c && 2 === g && p === s && h === w) {
              return new T(null, 3, 5, U, [l + 1, p, h], null);
            }
            if (3 === c && 2 === g) {
              c = b, a = new T(null, 2, 5, U, [l, p * h], null), b = c;
            } else {
              if (3 === c && 1 === g && 0 === We(s, h)) {
                return new T(null, 3, 5, U, [l, p + Ve(s, h), h], null);
              }
              if (3 === c && 1 === g) {
                c = a, a = new T(null, 2, 5, U, [l, p * h], null), b = c;
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
      2 < arguments.length && (l = H(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      return Je.j(b, b.h(a, d), e);
    }
    a.A = 2;
    a.o = function(a) {
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
        return c.k(b, e, H(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.A = 2;
  b.o = c.o;
  b.g = function(a) {
    return a;
  };
  b.h = a;
  b.k = c.k;
  return b;
}();
var vC = de([nk, ok, pl, Jl, Xn, op, pp, up, Xq, br, Ur, ts], [.001, .1, .001, .5, new T(null, 1, 5, U, [2048], null), 3, .3, .05, .01, new T(null, 1, 5, U, [or], null), 1E3, 3]);
function wC(a, b, c) {
  var d = ok.g(c), e = up.g(c), f = function() {
    var a = d + 1 * e;
    return 1 > a ? a : 1;
  }(), g = function() {
    var a = d - 2 * e;
    return 0 < a ? a : 0;
  }(), h = Ue(pp.g(c) * R.h(Re, xx(b)));
  c = Jl.g(c);
  var l = Dx(b);
  return lg(Je.j(function(c, d, e, f, g, h, l) {
    return function(G, J) {
      var L = MB.g(J / a * l), N = Fh(Gx.j(b, L, g)), $ = MB.g(h * K(N)), ba = .5 > h ? Vg.h($, function(a, b) {
        return function() {
          return QB(b);
        };
      }(L, N, $, c, d, e, f, g, h, l)) : Kg.h($, RB(N)), L = Vg.h($, function(a, b, c, d, e, f, g, h) {
        return function() {
          return OB.h(h, g);
        };
      }(L, N, $, ba, c, d, e, f, g, h, l));
      return mg.h(G, Dj(ba, L));
    };
  }(d, e, f, g, h, c, l), Gc(ae), Hj.g(a)));
}
function xC(a, b) {
  var c = aC(Ho.g(a), b), d = ts.g(ep.g(a));
  return lg(Ke(function(b, c) {
    return function(b, d, e) {
      if (e < c) {
        return b;
      }
      var p = ih.h(a, new T(null, 2, 5, U, [wk, d], null));
      return ng.j(b, d, e * p);
    };
  }(c, d), Gc(pi), c));
}
function yC(a, b, c) {
  var d = up.g(ep.g(a)), e = Xq.g(ep.g(a));
  return lh.j(a, new T(null, 1, 5, U, [Ho], null), function(a, d) {
    return function(e) {
      return Je.j(function(a, b) {
        return function(d, e) {
          return iy(d, e, wg(!1), c, a, b);
        };
      }(a, d), e, b);
    };
  }(d, e));
}
function zC(a, b) {
  var c = ep.g(a), d = nk.g(c), e = pl.g(c), f = op.g(c), c = up.g(c), g = Bo.g(a), h = co.g(a), l = Pk.g(a), p = Gx.j(wx(a), b, l), l = R.j(Re, 1, ni(vj(g, p))), p = R.j(Re, 1, ni(vj(h, p))), d = d * l, l = e * p, e = P.h(g, b), h = P.h(h, b), f = f - h / l * (f - 1), f = 1 < f ? f : 1;
  return e < d ? lh.k(a, new T(null, 1, 5, U, [Ho], null), iy, b, wg(!1), wg(!0), H([c, 0], 0)) : kh(a, new T(null, 2, 5, U, [wk, b], null), f);
}
function AC(a, b, c) {
  var d = 1 / c;
  c = d * (c - 1);
  return UB(gh.h(function(a, b) {
    return function(a) {
      return a * b;
    };
  }(d, c), a), b, function(a) {
    return function(b) {
      return b + a;
    };
  }(d, c));
}
function BC(a) {
  return Q.j(a, Pk, iC(Ho.g(a), xs.g(a), cr.g(a)));
}
function CC(a, b, c, d, e, f, g, h, l, p, t, s) {
  this.P = a;
  this.Va = b;
  this.U = c;
  this.Xa = d;
  this.xa = e;
  this.Fa = f;
  this.Ca = g;
  this.Ra = h;
  this.Qa = l;
  this.Ya = p;
  this.n = t;
  this.l = s;
  this.t = 2229667594;
  this.G = 8192;
  10 < arguments.length ? (this.n = t, this.l = s) : this.l = this.n = null;
}
k = CC.prototype;
k.L = function(a, b) {
  return Cb.j(this, b, null);
};
k.M = function(a, b, c) {
  switch(b instanceof V ? b.V : null) {
    case "boosts":
      return this.Ra;
    case "inh-radius":
      return this.Ca;
    case "sig-overlaps":
      return this.Fa;
    case "active-duty-cycles":
      return this.Qa;
    case "overlap-duty-cycles":
      return this.Ya;
    case "ff-sg":
      return this.Va;
    case "spec":
      return this.P;
    case "overlaps":
      return this.xa;
    case "input-topology":
      return this.Xa;
    case "topology":
      return this.U;
    default:
      return P.j(this.l, b, c);
  }
};
k.yb = function() {
  return xs.g(this);
};
k.O = function(a, b, c) {
  return Qj(b, function() {
    return function(a) {
      return Qj(b, Wj, "", " ", "", c, a);
    };
  }(this), "#org.nfrac.comportex.columns.ColumnField{", ", ", "}", c, ig.h(new T(null, 10, 5, U, [new T(null, 2, 5, U, [ep, this.P], null), new T(null, 2, 5, U, [Ho, this.Va], null), new T(null, 2, 5, U, [xs, this.U], null), new T(null, 2, 5, U, [cr, this.Xa], null), new T(null, 2, 5, U, [rq, this.xa], null), new T(null, 2, 5, U, [Yl, this.Fa], null), new T(null, 2, 5, U, [Pk, this.Ca], null), new T(null, 2, 5, U, [wk, this.Ra], null), new T(null, 2, 5, U, [co, this.Qa], null), new T(null, 2, 5, 
  U, [Bo, this.Ya], null)], null), this.l));
};
k.H = function() {
  return this.n;
};
k.T = function() {
  return 10 + K(this.l);
};
k.Q = function() {
  var a = this.w;
  return null != a ? a : this.w = a = uf(this);
};
k.N = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && ii(this, b) : b) ? !0 : !1;
};
k.yd = function() {
  return this.P;
};
k.$e = function(a, b, c) {
  a = xC(this, b);
  c = xC(this, c);
  return Q.k(this, Rn, Rn.h(this, 0) + 1, H([rq, a, Yl, c], 0));
};
k.Ze = function(a, b, c, d) {
  c = Ur.g(this.P);
  a = 0 === (Rn.g(this) % c + c) % c;
  b = yC(this, d, b);
  b = lh.J(b, new T(null, 1, 5, U, [Bo], null), AC, sj(this.xa), c);
  d = lh.J(b, new T(null, 1, 5, U, [co], null), AC, d, c);
  d = a ? Je.j(zC, d, Hj.g(Ex(d))) : d;
  return a ? BC(d) : d;
};
k.vg = function() {
  return this.Ca;
};
k.tg = function() {
  return this.xa;
};
k.ug = function() {
  return this.Fa;
};
k.Ad = function() {
  return Rn.h(this, 0);
};
k.va = function(a, b) {
  return Ce(new xj(null, new n(null, 10, [wk, null, Pk, null, Yl, null, co, null, Bo, null, Ho, null, ep, null, rq, null, cr, null, xs, null], null), null), b) ? ee.h(Nd(fh.h(pi, this), this.n), b) : new CC(this.P, this.Va, this.U, this.Xa, this.xa, this.Fa, this.Ca, this.Ra, this.Qa, this.Ya, this.n, rg(ee.h(this.l, b)), null);
};
k.ga = function(a, b, c) {
  return q(X.h ? X.h(ep, b) : X.call(null, ep, b)) ? new CC(c, this.Va, this.U, this.Xa, this.xa, this.Fa, this.Ca, this.Ra, this.Qa, this.Ya, this.n, this.l, null) : q(X.h ? X.h(Ho, b) : X.call(null, Ho, b)) ? new CC(this.P, c, this.U, this.Xa, this.xa, this.Fa, this.Ca, this.Ra, this.Qa, this.Ya, this.n, this.l, null) : q(X.h ? X.h(xs, b) : X.call(null, xs, b)) ? new CC(this.P, this.Va, c, this.Xa, this.xa, this.Fa, this.Ca, this.Ra, this.Qa, this.Ya, this.n, this.l, null) : q(X.h ? X.h(cr, b) : 
  X.call(null, cr, b)) ? new CC(this.P, this.Va, this.U, c, this.xa, this.Fa, this.Ca, this.Ra, this.Qa, this.Ya, this.n, this.l, null) : q(X.h ? X.h(rq, b) : X.call(null, rq, b)) ? new CC(this.P, this.Va, this.U, this.Xa, c, this.Fa, this.Ca, this.Ra, this.Qa, this.Ya, this.n, this.l, null) : q(X.h ? X.h(Yl, b) : X.call(null, Yl, b)) ? new CC(this.P, this.Va, this.U, this.Xa, this.xa, c, this.Ca, this.Ra, this.Qa, this.Ya, this.n, this.l, null) : q(X.h ? X.h(Pk, b) : X.call(null, Pk, b)) ? new CC(this.P, 
  this.Va, this.U, this.Xa, this.xa, this.Fa, c, this.Ra, this.Qa, this.Ya, this.n, this.l, null) : q(X.h ? X.h(wk, b) : X.call(null, wk, b)) ? new CC(this.P, this.Va, this.U, this.Xa, this.xa, this.Fa, this.Ca, c, this.Qa, this.Ya, this.n, this.l, null) : q(X.h ? X.h(co, b) : X.call(null, co, b)) ? new CC(this.P, this.Va, this.U, this.Xa, this.xa, this.Fa, this.Ca, this.Ra, c, this.Ya, this.n, this.l, null) : q(X.h ? X.h(Bo, b) : X.call(null, Bo, b)) ? new CC(this.P, this.Va, this.U, this.Xa, this.xa, 
  this.Fa, this.Ca, this.Ra, this.Qa, c, this.n, this.l, null) : new CC(this.P, this.Va, this.U, this.Xa, this.xa, this.Fa, this.Ca, this.Ra, this.Qa, this.Ya, this.n, Q.j(this.l, b, c), null);
};
k.R = function() {
  return B(ig.h(new T(null, 10, 5, U, [new T(null, 2, 5, U, [ep, this.P], null), new T(null, 2, 5, U, [Ho, this.Va], null), new T(null, 2, 5, U, [xs, this.U], null), new T(null, 2, 5, U, [cr, this.Xa], null), new T(null, 2, 5, U, [rq, this.xa], null), new T(null, 2, 5, U, [Yl, this.Fa], null), new T(null, 2, 5, U, [Pk, this.Ca], null), new T(null, 2, 5, U, [wk, this.Ra], null), new T(null, 2, 5, U, [co, this.Qa], null), new T(null, 2, 5, U, [Bo, this.Ya], null)], null), this.l));
};
k.I = function(a, b) {
  return new CC(this.P, this.Va, this.U, this.Xa, this.xa, this.Fa, this.Ca, this.Ra, this.Qa, this.Ya, b, this.l, this.w);
};
k.S = function(a, b) {
  return pe(b) ? Kb(this, v.h(b, 0), v.h(b, 1)) : Je.j(ub, this, b);
};
function DC() {
  function a() {
    return of(16).toString(16);
  }
  return new dk((new Oa(a(), a(), a(), a(), a(), a(), a(), a(), "-", a(), a(), a(), a(), "-4", a(), a(), a(), "-", (8 | 3 & of(15)).toString(16), a(), a(), a(), "-", a(), a(), a(), a(), a(), a(), a(), a(), a(), a(), a(), a())).toString());
}
;function EC(a, b) {
  var c = R.j(Ej, a, b);
  return Ld(c, ch.h(function(a) {
    return function(b) {
      return a === b;
    };
  }(c), b));
}
var FC = function() {
  function a(a, b) {
    return K(a) < K(b) ? Je.j(be, b, a) : Je.j(be, a, b);
  }
  var b = null, c = function() {
    function a(c, d, h) {
      var l = null;
      2 < arguments.length && (l = H(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      a = EC(K, be.k(d, c, H([a], 0)));
      return Je.j(fh, C(a), E(a));
    }
    a.A = 2;
    a.o = function(a) {
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
        return zj;
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.k(b, e, H(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.A = 2;
  b.o = c.o;
  b.q = function() {
    return zj;
  };
  b.g = function(a) {
    return a;
  };
  b.h = a;
  b.k = c.k;
  return b;
}(), GC = function() {
  function a(a, b) {
    for (;;) {
      if (K(b) < K(a)) {
        var c = a;
        a = b;
        b = c;
      } else {
        return Je.j(function(a, b) {
          return function(a, c) {
            return Ce(b, c) ? a : je.h(a, c);
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
      a = EC(function(a) {
        return-K(a);
      }, be.k(e, d, H([a], 0)));
      return Je.j(b, C(a), E(a));
    }
    a.A = 2;
    a.o = function(a) {
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
        return c.k(b, e, H(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.A = 2;
  b.o = c.o;
  b.g = function(a) {
    return a;
  };
  b.h = a;
  b.k = c.k;
  return b;
}(), HC = function() {
  function a(a, b) {
    return K(a) < K(b) ? Je.j(function(a, c) {
      return Ce(b, c) ? je.h(a, c) : a;
    }, a, a) : Je.j(je, a, b);
  }
  var b = null, c = function() {
    function a(b, d, h) {
      var l = null;
      2 < arguments.length && (l = H(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      return Je.j(b, a, be.h(e, d));
    }
    a.A = 2;
    a.o = function(a) {
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
        return c.k(b, e, H(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.A = 2;
  b.o = c.o;
  b.g = function(a) {
    return a;
  };
  b.h = a;
  b.k = c.k;
  return b;
}();
var IC = de([zk, Wk, hl, ml, Gl, Ll, Tl, Xn, uo, yo, Lo, sp, qq, Iq, kr, mr, Or, fs, ss], [!0, 15, 5, .1, .5, 8, 12, new T(null, 1, 5, U, [2048], null), .1, 22, !1, 2, .02, !1, 16, 4, 2, !1, .11]);
function JC(a, b, c) {
  return SB(function(a) {
    var e = O.j(a, 0, null);
    return(a = O.j(a, 1, null) >= c) ? b.g ? b.g(e) : b.call(null, e) : a;
  }, a);
}
function KC(a, b, c, d) {
  return Ig.h(function(a, f) {
    var g = JC(f, b, d);
    return g >= c ? new n(null, 2, [bp, g, cl, a], null) : null;
  }, a);
}
function LC(a, b) {
  return lg(Ke(function(a, d, e) {
    if (e < b) {
      return a;
    }
    var f = null == d ? null : Vb(d);
    return ng.j(a, f, function() {
      var b = P.j(a, f, 0) + 1;
      return e > b ? e : b;
    }());
  }, Gc(pi), a));
}
function MC(a, b, c, d) {
  return lg(Ke(function(a, d, g) {
    g *= c;
    var h = ni(b.g ? b.g(d) : b.call(null, d));
    return q(h) ? (h = R.h(Re, h), ng.j(a, d, h + g)) : ng.j(a, d, g);
  }, Gc(pi), q(d) ? uj.k(H([Dj(sj(b), Ng.g(0)), a], 0)) : a));
}
function NC(a, b, c, d, e) {
  var f = TB(function(a) {
    var b = O.j(a, 0, null);
    O.j(a, 1, null);
    return b;
  }, b);
  a = MC(a, f, Or.g(e), fs.g(e));
  b = qq.g(e);
  c = q(Iq.g(e)) ? jC(a, b, Dx(c)) : sj(mC(a, c, d, mr.g(e), sp.g(e)));
  e = kr.g(e);
  d = Gc(pi);
  for (a = Gc(zj);;) {
    if (b = C(c), q(b)) {
      var g = b;
      b = function() {
        var a = g;
        return f.g ? f.g(a) : f.call(null, a);
      }();
      if (q(b)) {
        var h = R.j(Ej, wf, b);
        b = O.j(h, 0, null);
        O.j(h, 1, null);
        c = F(c);
        d = ng.j(d, g, new T(null, 1, 5, U, [b], null));
      } else {
        c = F(c), d = ng.j(d, g, Jg.j(Gh, Ng.g(g), Hj.g(e))), a = mg.h(a, g);
      }
    } else {
      return new n(null, 2, [eq, Ic(d), Mk, Ic(a)], null);
    }
  }
}
function OC(a, b, c) {
  a = KC(a, b, 0, c);
  return B(a) ? R.j(Ej, bp, a) : new n(null, 2, [cl, null, bp, 0], null);
}
function PC(a, b, c, d) {
  if (ke(c)) {
    return new n(null, 1, [ir, C(b)], null);
  }
  var e = Jg.h(function(b) {
    var d = ly(a, b);
    return Q.j(OC(d, c, 0), ir, b);
  }, b), e = R.j(Ej, bp, e);
  return bp.g(e) >= Ll.g(d) ? e : new n(null, 1, [ir, QB(b)], null);
}
function QC(a, b, c, d) {
  var e = hl.g(d), f = yo.g(d), g = Ll.g(d);
  d = Gl.g(d);
  a = ly(a, new T(null, 2, 5, U, [b, c], null));
  return K(a) >= e ? R.j(Fj, function(a, b, c, d, e) {
    return function(f) {
      var g = O.h(e, f);
      return SB(function(a, b, c, d, e) {
        return function(a) {
          return a >= e;
        };
      }(g, a, b, c, d, e), ni(g)) * b + K(g) + f / K(e);
    };
  }(e, f, g, d, a), Hj.g(K(a))) : K(a);
}
function RC(a, b, c, d) {
  a = fh.h(Aj([b]), Jg.h(C, sj(a)));
  return Kg.h(d, RB(ch.h(function(a) {
    return function(b) {
      var c = O.j(b, 0, null);
      O.j(b, 1, null);
      return a.g ? a.g(c) : a.call(null, c);
    };
  }(a), c)));
}
function SC(a, b, c, d, e, f) {
  return Ke(function(a, b, l) {
    var p = O.j(b, 0, null);
    b = O.j(b, 1, null);
    var t = c.g ? c.g(p) : c.call(null, p), s = uo.g(f), w = ml.g(f);
    q(l) ? (a = iy(a, new T(null, 3, 5, U, [p, b, l], null), wg(!1), d, s, w), q(t) && (p = new T(null, 3, 5, U, [p, b, l], null), b = C(p), l = fy(a, p), t = JC(l, d, 0), t = Wk.g(f) - t, 0 < t && (b = RC(l, b, e, t), a = jy(a, p, b, ss.g(f))))) : (l = Wk.g(f), t = Ll.g(f), s = QC(a, p, b, f), l = RC(pi, p, e, l), K(l) < t || (p = new T(null, 3, 5, U, [p, b, s], null), b = fy(a, p), a = B(b) ? ky(a, p, sj(b)) : a, a = jy(a, p, l, ss.g(f))));
    return a;
  }, a, b);
}
function TC(a, b, c, d, e, f, g) {
  var h = ly(a, new T(null, 2, 5, U, [b, c], null));
  e = KC(h, d, e, f);
  return Je.j(function() {
    return function(a, e) {
      var f = cl.g(e);
      return iy(a, new T(null, 3, 5, U, [b, c, f], null), d, wg(!1), 0, g);
    };
  }(h, e), a, e);
}
function UC(a, b, c, d, e, f) {
  var g = Tl.g(f), h = Gl.g(f);
  f = ml.g(f);
  b = HC.k(e, b, H([d], 0));
  return Je.j(function(a, b, d) {
    return function(e, f) {
      var g = O.j(f, 0, null), h = O.j(f, 1, null);
      return TC(e, g, h, c, a, b, d);
    };
  }(g, h, f, b), a, b);
}
function VC(a, b, c, d, e) {
  var f = Gl.g(e);
  a = B(a);
  for (var g = Gc(zj), h = Gc(pi);;) {
    var l = C(a);
    if (q(l)) {
      var p = O.j(l, 0, null), l = O.j(l, 1, null), p = b.g ? b.g(p) : b.call(null, p);
      if (q(p)) {
        p = PC(c, l, d, e), l = ir.g(p);
      } else {
        var l = C(l), t = ly(c, l), p = OC(t, d, f), p = q(cl.g(p)) ? p : OC(t, d, 0)
      }
      a = F(a);
      g = mg.h(g, l);
      h = ng.j(h, l, cl.g(p));
    } else {
      return new n(null, 2, [Fo, Ic(g), gk, Ic(h)], null);
    }
  }
}
function WC(a, b, c, d, e, f) {
  c = bh.h(function(c) {
    return tg(b, hy(a, c));
  }, HC.h(c, d));
  if (ke(c)) {
    return pi;
  }
  c = aC(a, c);
  c = LC(c, Tl.g(f));
  var g = Bj(Jg.h(C, sj(c))), g = Dj(g, Ng.g(1));
  e = NC(g, c, e, 5, f);
  c = Ae(e) ? R.h(Cg, e) : e;
  e = P.h(c, eq);
  c = P.h(c, Mk);
  return Q.j(VC(e, c, a, d, f), Qo, Bj(sj(e)));
}
function XC(a, b, c, d, e, f, g, h, l, p, t, s, w, A, y) {
  this.P = a;
  this.U = b;
  this.ja = c;
  this.oa = d;
  this.fa = e;
  this.na = f;
  this.qa = g;
  this.ya = h;
  this.ra = l;
  this.la = p;
  this.ma = t;
  this.ta = s;
  this.Aa = w;
  this.n = A;
  this.l = y;
  this.t = 2229667594;
  this.G = 8192;
  13 < arguments.length ? (this.n = A, this.l = y) : this.l = this.n = null;
}
k = XC.prototype;
k.L = function(a, b) {
  return Cb.j(this, b, null);
};
k.M = function(a, b, c) {
  switch(b instanceof V ? b.V : null) {
    case "burst-cols":
      return this.fa;
    case "tp-exc":
      return this.Aa;
    case "pred-cells":
      return this.la;
    case "signal-cells":
      return this.ya;
    case "learn-cells":
      return this.qa;
    case "spec":
      return this.P;
    case "active-cols":
      return this.oa;
    case "tp-cells":
      return this.ra;
    case "active-cells":
      return this.na;
    case "distal-sg":
      return this.ja;
    case "prior-pred-cells":
      return this.ma;
    case "distal-exc":
      return this.ta;
    case "topology":
      return this.U;
    default:
      return P.j(this.l, b, c);
  }
};
k.yb = function() {
  return xs.g(this);
};
k.O = function(a, b, c) {
  return Qj(b, function() {
    return function(a) {
      return Qj(b, Wj, "", " ", "", c, a);
    };
  }(this), "#org.nfrac.comportex.cells.LayerOfCells{", ", ", "}", c, ig.h(new T(null, 13, 5, U, [new T(null, 2, 5, U, [ep, this.P], null), new T(null, 2, 5, U, [xs, this.U], null), new T(null, 2, 5, U, [Cq, this.ja], null), new T(null, 2, 5, U, [mp, this.oa], null), new T(null, 2, 5, U, [Mk, this.fa], null), new T(null, 2, 5, U, [gq, this.na], null), new T(null, 2, 5, U, [Fo, this.qa], null), new T(null, 2, 5, U, [ko, this.ya], null), new T(null, 2, 5, U, [vp, this.ra], null), new T(null, 2, 5, U, 
  [fl, this.la], null), new T(null, 2, 5, U, [ur, this.ma], null), new T(null, 2, 5, U, [Tr, this.ta], null), new T(null, 2, 5, U, [Ok, this.Aa], null)], null), this.l));
};
k.H = function() {
  return this.n;
};
k.T = function() {
  return 13 + K(this.l);
};
k.cf = function() {
  var a = aC(this.ja, this.na), a = LC(a, Tl.g(this.P)), b = Bj(sj(a));
  return Q.k(this, fl, b, H([ur, this.la, Tr, a], 0));
};
k.ff = function(a, b, c, d) {
  a = NC(b, this.ta, this.U, d, this.P);
  b = Ae(a) ? R.h(Cg, a) : a;
  a = P.h(b, eq);
  b = P.h(b, Mk);
  c = Bj(sj(a));
  d = Bj(R.h(ig, ni(a)));
  var e = Bj(R.h(ig, ni(R.j(ee, a, b))));
  return Q.k(this, eq, a, H([mp, c, Mk, b, gq, d, ko, e, vp, zj], 0));
};
k.Bg = function() {
  return this.ra;
};
k.xg = function() {
  return this.fa;
};
k.ef = function(a, b, c) {
  a = eq.g(this);
  a = VC(a, this.fa, this.ja, b, this.P);
  var d = Ae(a) ? R.h(Cg, a) : a;
  a = P.h(d, Fo);
  var d = P.h(d, gk), e = q(Lo.g(this.P)) ? WC(this.ja, this.na, this.ma, b, this.U, this.P) : null, f = Ae(e) ? R.h(Cg, e) : e, g = P.h(f, Qo), e = P.h(f, Fo), f = P.h(f, gk), h = SC(this.ja, d, this.fa, b, c, this.P), h = q(zk.g(this.P)) ? UC(h, this.na, b, this.la, this.ma, this.P) : h, l = Lo.g(this.P);
  b = q(q(l) ? f : l) ? SC(h, f, g, b, c, this.P) : h;
  return Q.k(this, fo, e, H([Tq, f, Fo, a, Fl, d, Cq, b], 0));
};
k.df = function() {
  return kr.g(this.P);
};
k.gf = function() {
  return ko.g(this);
};
k.wg = function() {
  return this.oa;
};
k.Ag = function() {
  return this.ma;
};
k.bf = function() {
  return gq.g(this);
};
k.yg = function() {
  return this.qa;
};
k.zg = function() {
  return this.la;
};
k.Q = function() {
  var a = this.w;
  return null != a ? a : this.w = a = uf(this);
};
k.N = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && ii(this, b) : b) ? !0 : !1;
};
k.yd = function() {
  return this.P;
};
k.va = function(a, b) {
  return Ce(new xj(null, new n(null, 13, [Mk, null, Ok, null, fl, null, ko, null, Fo, null, ep, null, mp, null, vp, null, gq, null, Cq, null, ur, null, Tr, null, xs, null], null), null), b) ? ee.h(Nd(fh.h(pi, this), this.n), b) : new XC(this.P, this.U, this.ja, this.oa, this.fa, this.na, this.qa, this.ya, this.ra, this.la, this.ma, this.ta, this.Aa, this.n, rg(ee.h(this.l, b)), null);
};
k.ga = function(a, b, c) {
  return q(X.h ? X.h(ep, b) : X.call(null, ep, b)) ? new XC(c, this.U, this.ja, this.oa, this.fa, this.na, this.qa, this.ya, this.ra, this.la, this.ma, this.ta, this.Aa, this.n, this.l, null) : q(X.h ? X.h(xs, b) : X.call(null, xs, b)) ? new XC(this.P, c, this.ja, this.oa, this.fa, this.na, this.qa, this.ya, this.ra, this.la, this.ma, this.ta, this.Aa, this.n, this.l, null) : q(X.h ? X.h(Cq, b) : X.call(null, Cq, b)) ? new XC(this.P, this.U, c, this.oa, this.fa, this.na, this.qa, this.ya, this.ra, 
  this.la, this.ma, this.ta, this.Aa, this.n, this.l, null) : q(X.h ? X.h(mp, b) : X.call(null, mp, b)) ? new XC(this.P, this.U, this.ja, c, this.fa, this.na, this.qa, this.ya, this.ra, this.la, this.ma, this.ta, this.Aa, this.n, this.l, null) : q(X.h ? X.h(Mk, b) : X.call(null, Mk, b)) ? new XC(this.P, this.U, this.ja, this.oa, c, this.na, this.qa, this.ya, this.ra, this.la, this.ma, this.ta, this.Aa, this.n, this.l, null) : q(X.h ? X.h(gq, b) : X.call(null, gq, b)) ? new XC(this.P, this.U, this.ja, 
  this.oa, this.fa, c, this.qa, this.ya, this.ra, this.la, this.ma, this.ta, this.Aa, this.n, this.l, null) : q(X.h ? X.h(Fo, b) : X.call(null, Fo, b)) ? new XC(this.P, this.U, this.ja, this.oa, this.fa, this.na, c, this.ya, this.ra, this.la, this.ma, this.ta, this.Aa, this.n, this.l, null) : q(X.h ? X.h(ko, b) : X.call(null, ko, b)) ? new XC(this.P, this.U, this.ja, this.oa, this.fa, this.na, this.qa, c, this.ra, this.la, this.ma, this.ta, this.Aa, this.n, this.l, null) : q(X.h ? X.h(vp, b) : X.call(null, 
  vp, b)) ? new XC(this.P, this.U, this.ja, this.oa, this.fa, this.na, this.qa, this.ya, c, this.la, this.ma, this.ta, this.Aa, this.n, this.l, null) : q(X.h ? X.h(fl, b) : X.call(null, fl, b)) ? new XC(this.P, this.U, this.ja, this.oa, this.fa, this.na, this.qa, this.ya, this.ra, c, this.ma, this.ta, this.Aa, this.n, this.l, null) : q(X.h ? X.h(ur, b) : X.call(null, ur, b)) ? new XC(this.P, this.U, this.ja, this.oa, this.fa, this.na, this.qa, this.ya, this.ra, this.la, c, this.ta, this.Aa, this.n, 
  this.l, null) : q(X.h ? X.h(Tr, b) : X.call(null, Tr, b)) ? new XC(this.P, this.U, this.ja, this.oa, this.fa, this.na, this.qa, this.ya, this.ra, this.la, this.ma, c, this.Aa, this.n, this.l, null) : q(X.h ? X.h(Ok, b) : X.call(null, Ok, b)) ? new XC(this.P, this.U, this.ja, this.oa, this.fa, this.na, this.qa, this.ya, this.ra, this.la, this.ma, this.ta, c, this.n, this.l, null) : new XC(this.P, this.U, this.ja, this.oa, this.fa, this.na, this.qa, this.ya, this.ra, this.la, this.ma, this.ta, this.Aa, 
  this.n, Q.j(this.l, b, c), null);
};
k.R = function() {
  return B(ig.h(new T(null, 13, 5, U, [new T(null, 2, 5, U, [ep, this.P], null), new T(null, 2, 5, U, [xs, this.U], null), new T(null, 2, 5, U, [Cq, this.ja], null), new T(null, 2, 5, U, [mp, this.oa], null), new T(null, 2, 5, U, [Mk, this.fa], null), new T(null, 2, 5, U, [gq, this.na], null), new T(null, 2, 5, U, [Fo, this.qa], null), new T(null, 2, 5, U, [ko, this.ya], null), new T(null, 2, 5, U, [vp, this.ra], null), new T(null, 2, 5, U, [fl, this.la], null), new T(null, 2, 5, U, [ur, this.ma], 
  null), new T(null, 2, 5, U, [Tr, this.ta], null), new T(null, 2, 5, U, [Ok, this.Aa], null)], null), this.l));
};
k.I = function(a, b) {
  return new XC(this.P, this.U, this.ja, this.oa, this.fa, this.na, this.qa, this.ya, this.ra, this.la, this.ma, this.ta, this.Aa, b, this.l, this.w);
};
k.S = function(a, b) {
  return pe(b) ? Kb(this, v.h(b, 0), v.h(b, 1)) : Je.j(ub, this, b);
};
ry.object = function() {
  return tC(new T(null, 1, 5, U, [0], null));
};
function YC(a, b, c, d, e, f) {
  this.sb = a;
  this.Ka = b;
  this.$a = c;
  this.Ib = d;
  this.n = e;
  this.l = f;
  this.t = 2229667594;
  this.G = 8192;
  4 < arguments.length ? (this.n = e, this.l = f) : this.l = this.n = null;
}
k = YC.prototype;
k.zd = function() {
  var a = this;
  return Q.j(function() {
    var b = Jx(a);
    return ZC.g ? ZC.g(b) : ZC.call(null, b);
  }(), Er, this.$a);
};
k.L = function(a, b) {
  return Cb.j(this, b, null);
};
k.M = function(a, b, c) {
  switch(b instanceof V ? b.V : null) {
    case "step-counter":
      return this.Ib;
    case "uuid":
      return this.$a;
    case "layer-3":
      return this.Ka;
    case "column-field":
      return this.sb;
    default:
      return P.j(this.l, b, c);
  }
};
k.yb = function() {
  return wx(this.sb);
};
k.O = function(a, b, c) {
  return Qj(b, function() {
    return function(a) {
      return Qj(b, Wj, "", " ", "", c, a);
    };
  }(this), "#org.nfrac.comportex.core.SensoryRegion{", ", ", "}", c, ig.h(new T(null, 4, 5, U, [new T(null, 2, 5, U, [ds, this.sb], null), new T(null, 2, 5, U, [Vr, this.Ka], null), new T(null, 2, 5, U, [Er, this.$a], null), new T(null, 2, 5, U, [Sq, this.Ib], null)], null), this.l));
};
k.H = function() {
  return this.n;
};
k.T = function() {
  return 4 + K(this.l);
};
k.Q = function() {
  var a = this.w;
  return null != a ? a : this.w = a = uf(this);
};
k.N = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && ii(this, b) : b) ? !0 : !1;
};
k.yd = function() {
  return uj.k(H([Jx(this.sb), Jx(this.Ka)], 0));
};
k.Ad = function() {
  return this.Ib;
};
k.va = function(a, b) {
  return Ce(new xj(null, new n(null, 4, [Sq, null, Er, null, Vr, null, ds, null], null), null), b) ? ee.h(Nd(fh.h(pi, this), this.n), b) : new YC(this.sb, this.Ka, this.$a, this.Ib, this.n, rg(ee.h(this.l, b)), null);
};
k.ga = function(a, b, c) {
  return q(X.h ? X.h(ds, b) : X.call(null, ds, b)) ? new YC(c, this.Ka, this.$a, this.Ib, this.n, this.l, null) : q(X.h ? X.h(Vr, b) : X.call(null, Vr, b)) ? new YC(this.sb, c, this.$a, this.Ib, this.n, this.l, null) : q(X.h ? X.h(Er, b) : X.call(null, Er, b)) ? new YC(this.sb, this.Ka, c, this.Ib, this.n, this.l, null) : q(X.h ? X.h(Sq, b) : X.call(null, Sq, b)) ? new YC(this.sb, this.Ka, this.$a, c, this.n, this.l, null) : new YC(this.sb, this.Ka, this.$a, this.Ib, this.n, Q.j(this.l, b, c), null);
};
k.R = function() {
  return B(ig.h(new T(null, 4, 5, U, [new T(null, 2, 5, U, [ds, this.sb], null), new T(null, 2, 5, U, [Vr, this.Ka], null), new T(null, 2, 5, U, [Er, this.$a], null), new T(null, 2, 5, U, [Sq, this.Ib], null)], null), this.l));
};
k.I = function(a, b) {
  return new YC(this.sb, this.Ka, this.$a, this.Ib, b, this.l, this.w);
};
k.lf = function(a, b, c, d, e) {
  var f = $x(this.Ka), g = ay(this.Ka);
  a = Px(this.sb, b, c);
  var h = Ux(this.Ka, Sx(a), Tx(a), Rx(a)), f = q(e) ? Vx(h, f, g) : h;
  d = Wx(f, d);
  b = q(e) ? Qx(a, b, c, Zx(d)) : a;
  return Q.k(this, ds, b, H([Vr, d, Sq, this.Ib + 1], 0));
};
k.jf = function() {
  return Xx(this.Ka);
};
k.hf = function() {
  return $x(this.Ka);
};
k.kf = function() {
  return by(this.Ka);
};
k.S = function(a, b) {
  return pe(b) ? Kb(this, v.h(b, 0), v.h(b, 1)) : Je.j(ub, this, b);
};
function ZC(a) {
  var b = uj.k(H([vC, a], 0)), c = br.g(b), d = Xn.g(b), c = tC(c), d = tC(d), e = Dx(c), f = Dx(d), g = wC(f, c, b), b = de([wk, Pk, Yl, co, Bo, Ho, ep, rq, cr, xs], [Fh(Ng.h(f, 1)), 1, pi, Fh(Ng.h(f, 0)), Fh(Ng.h(f, 0)), $B(g, e, ok.g(b)), b, pi, c, d]), b = new CC(ep.g(b), Ho.g(b), xs.g(b), cr.g(b), rq.g(b), Yl.g(b), Pk.g(b), wk.g(b), co.g(b), Bo.g(b), null, ee.k(b, ep, H([Ho, xs, cr, rq, Yl, Pk, wk, co, Bo], 0))), b = BC(b);
  a = uj.k(H([IC, a], 0));
  var c = Xn.g(a), c = tC(c), f = Dx(c), e = kr.g(a), d = hl.g(a), g = yo.g(a), h = Gl.g(a), l = f * e, f = ZB(new n(null, 5, [er, Fh(Ng.h(f * e * d, pi)), hq, Fh(Ng.h(l, zj)), Wr, h, yk, g, ms, !0], null)), g = yg.j(dC, e, d), h = yg.j(eC, e, d), l = yg.h(bC, e), e = yg.h(cC, e), d = new n(null, 6, [zs, f, Rk, d, Qr, g, Kp, h, ll, l, El, e], null), d = new fC(zs.g(d), kr.g(d), Rk.g(d), ll.g(d), El.g(d), Qr.g(d), Kp.g(d), null, ee.k(d, zs, H([kr, Rk, ll, El, Qr, Kp], 0)));
  a = de([Mk, fl, ko, Fo, ep, mp, vp, gq, Cq, ur, Tr, xs], [zj, zj, zj, zj, a, zj, zj, zj, d, zj, pi, c]);
  a = new XC(ep.g(a), xs.g(a), Cq.g(a), mp.g(a), Mk.g(a), gq.g(a), Fo.g(a), ko.g(a), vp.g(a), fl.g(a), ur.g(a), Tr.g(a), Ok.g(a), null, ee.k(a, ep, H([xs, Cq, mp, Mk, gq, Fo, ko, vp, fl, ur, Tr, Ok], 0)));
  b = new n(null, 4, [ds, b, Vr, a, Er, DC(), Sq, 0], null);
  return new YC(ds.g(b), Vr.g(b), Er.g(b), Sq.g(b), null, ee.k(b, ds, H([Vr, Er, Sq], 0)));
}
function $C(a, b, c, d, e, f) {
  this.Kb = a;
  this.value = b;
  this.transform = c;
  this.Eb = d;
  this.n = e;
  this.l = f;
  this.t = 2229667594;
  this.G = 8192;
  4 < arguments.length ? (this.n = e, this.l = f) : this.l = this.n = null;
}
k = $C.prototype;
k.zd = function() {
  return Q.j(this, Sl, this.Kb);
};
k.L = function(a, b) {
  return Cb.j(this, b, null);
};
k.M = function(a, b, c) {
  switch(b instanceof V ? b.V : null) {
    case "encoder":
      return this.Eb;
    case "transform":
      return this.transform;
    case "value":
      return this.value;
    case "init-value":
      return this.Kb;
    default:
      return P.j(this.l, b, c);
  }
};
k.yb = function() {
  return wx(this.Eb);
};
k.Dg = function() {
  return this.value;
};
k.O = function(a, b, c) {
  return Qj(b, function() {
    return function(a) {
      return Qj(b, Wj, "", " ", "", c, a);
    };
  }(this), "#org.nfrac.comportex.core.SensoryInput{", ", ", "}", c, ig.h(new T(null, 4, 5, U, [new T(null, 2, 5, U, [Aq, this.Kb], null), new T(null, 2, 5, U, [Sl, this.value], null), new T(null, 2, 5, U, [Tk, this.transform], null), new T(null, 2, 5, U, [il, this.Eb], null)], null), this.l));
};
k.H = function() {
  return this.n;
};
k.T = function() {
  return 4 + K(this.l);
};
k.Q = function() {
  var a = this.w;
  return null != a ? a : this.w = a = uf(this);
};
k.N = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && ii(this, b) : b) ? !0 : !1;
};
k.Xd = function(a, b) {
  return Hx(this.Eb, b, this.value);
};
k.$d = function() {
  return zj;
};
k.Zd = function() {
  return zj;
};
k.ae = function(a, b) {
  return new T(null, 1, 5, U, [b], null);
};
k.Yd = function() {
  var a = this;
  return Q.j(this, Sl, function() {
    var b = a.value;
    return a.transform.g ? a.transform.g(b) : a.transform.call(null, b);
  }());
};
k.va = function(a, b) {
  return Ce(new xj(null, new n(null, 4, [Tk, null, il, null, Sl, null, Aq, null], null), null), b) ? ee.h(Nd(fh.h(pi, this), this.n), b) : new $C(this.Kb, this.value, this.transform, this.Eb, this.n, rg(ee.h(this.l, b)), null);
};
k.ga = function(a, b, c) {
  return q(X.h ? X.h(Aq, b) : X.call(null, Aq, b)) ? new $C(c, this.value, this.transform, this.Eb, this.n, this.l, null) : q(X.h ? X.h(Sl, b) : X.call(null, Sl, b)) ? new $C(this.Kb, c, this.transform, this.Eb, this.n, this.l, null) : q(X.h ? X.h(Tk, b) : X.call(null, Tk, b)) ? new $C(this.Kb, this.value, c, this.Eb, this.n, this.l, null) : q(X.h ? X.h(il, b) : X.call(null, il, b)) ? new $C(this.Kb, this.value, this.transform, c, this.n, this.l, null) : new $C(this.Kb, this.value, this.transform, 
  this.Eb, this.n, Q.j(this.l, b, c), null);
};
k.R = function() {
  return B(ig.h(new T(null, 4, 5, U, [new T(null, 2, 5, U, [Aq, this.Kb], null), new T(null, 2, 5, U, [Sl, this.value], null), new T(null, 2, 5, U, [Tk, this.transform], null), new T(null, 2, 5, U, [il, this.Eb], null)], null), this.l));
};
k.I = function(a, b) {
  return new $C(this.Kb, this.value, this.transform, this.Eb, b, this.l, this.w);
};
k.S = function(a, b) {
  return pe(b) ? Kb(this, v.h(b, 0), v.h(b, 1)) : Je.j(ub, this, b);
};
function aD(a, b, c) {
  return new $C(a, a, b, c);
}
function bD(a, b) {
  var c = Jg.h(Ex, a), c = jg.h(0, Jj.h(Ne, c));
  return R.h(FC, Jg.j(b, a, c));
}
function cD(a) {
  var b = Jg.h(xg.h(Dx, ry), a), b = jg.h(0, Jj.h(Ne, b));
  return R.h(FC, Jg.j(oy, a, b));
}
function dD(a, b, c) {
  var d = O.j(c, 0, null);
  c = O.j(c, 1, null);
  return a + b * d + c;
}
function eD(a, b) {
  return bD(qr.g(a), b);
}
function fD(a, b, c, d) {
  this.Oa = a;
  this.Nb = b;
  this.n = c;
  this.l = d;
  this.t = 2229667594;
  this.G = 8192;
  2 < arguments.length ? (this.n = c, this.l = d) : this.l = this.n = null;
}
k = fD.prototype;
k.zd = function() {
  return lh.j(lh.j(this, new T(null, 1, 5, U, [qr], null), function() {
    return function(a) {
      return Jg.h(yy, a);
    };
  }(this)), new T(null, 1, 5, U, [Vo], null), yy);
};
k.L = function(a, b) {
  return Cb.j(this, b, null);
};
k.M = function(a, b, c) {
  switch(b instanceof V ? b.V : null) {
    case "subs":
      return this.Nb;
    case "region":
      return this.Oa;
    default:
      return P.j(this.l, b, c);
  }
};
k.yb = function() {
  return tC(be.h(Cx(this.Oa), Lx(this.Oa)));
};
k.O = function(a, b, c) {
  return Qj(b, function() {
    return function(a) {
      return Qj(b, Wj, "", " ", "", c, a);
    };
  }(this), "#org.nfrac.comportex.core.RegionTree{", ", ", "}", c, ig.h(new T(null, 2, 5, U, [new T(null, 2, 5, U, [Vo, this.Oa], null), new T(null, 2, 5, U, [qr, this.Nb], null)], null), this.l));
};
k.H = function() {
  return this.n;
};
k.T = function() {
  return 2 + K(this.l);
};
k.Q = function() {
  var a = this.w;
  return null != a ? a : this.w = a = uf(this);
};
k.N = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && ii(this, b) : b) ? !0 : !1;
};
k.af = function(a, b) {
  for (var c = 0, d = 0;;) {
    if (c < K(this.Nb)) {
      var e = O.h(this.Nb, c), f = Ex(e);
      if (d <= b && b <= d + f + -1) {
        return new T(null, 2, 5, U, [c, py(e, b - d)], null);
      }
      c += 1;
      d += Te(f);
    } else {
      return null;
    }
  }
};
k.Xd = function(a, b) {
  var c = Lx(this.Oa);
  return fh.h(zj, gh.h(yg.j(dD, b, c), Mx(this.Oa)));
};
k.$d = function(a, b) {
  var c = Lx(this.Oa);
  return fh.h(zj, gh.h(yg.j(dD, b, c), Nx(this.Oa)));
};
k.Zd = function() {
  return zj;
};
k.ae = function(a, b) {
  var c = Lx(this.Oa);
  return new T(null, 2, 5, U, [Ve(b, c), We(b, c)], null);
};
k.Yd = function(a, b) {
  var c = Jg.h(function() {
    return function(a) {
      return wy.h(a, b);
    };
  }(this), this.Nb), d = Ox.J(this.Oa, bD(c, uy), bD(c, vy), cD(c), b);
  return Q.k(this, Vo, d, H([qr, c], 0));
};
k.Ad = function() {
  return xy(this.Oa);
};
k.va = function(a, b) {
  return Ce(new xj(null, new n(null, 2, [Vo, null, qr, null], null), null), b) ? ee.h(Nd(fh.h(pi, this), this.n), b) : new fD(this.Oa, this.Nb, this.n, rg(ee.h(this.l, b)), null);
};
k.ga = function(a, b, c) {
  return q(X.h ? X.h(Vo, b) : X.call(null, Vo, b)) ? new fD(c, this.Nb, this.n, this.l, null) : q(X.h ? X.h(qr, b) : X.call(null, qr, b)) ? new fD(this.Oa, c, this.n, this.l, null) : new fD(this.Oa, this.Nb, this.n, Q.j(this.l, b, c), null);
};
k.R = function() {
  return B(ig.h(new T(null, 2, 5, U, [new T(null, 2, 5, U, [Vo, this.Oa], null), new T(null, 2, 5, U, [qr, this.Nb], null)], null), this.l));
};
k.I = function(a, b) {
  return new fD(this.Oa, this.Nb, b, this.l, this.w);
};
k.S = function(a, b) {
  return pe(b) ? Kb(this, v.h(b, 0), v.h(b, 1)) : Je.j(ub, this, b);
};
function gD(a, b, c, d) {
  return $d(Kg.h(c + 1, Xg(function(b) {
    b = new T(null, 1, 5, U, [b], null);
    var c = R.h(uC, Jg.h(Cx, b)), g = R.h(uC, Jg.h(sy, b)), c = Q.k(d, br, c, H([Eo, R.h(Oe, g)], 0)), c = a.g ? a.g(c) : a.call(null, c);
    return new fD(c, b);
  }, b)));
}
function hD(a) {
  return Fh(zf(bh.h(Vo, dh(qr, qr, a))));
}
function iD(a) {
  return Jg.h(Vo, hD(a));
}
function jD(a) {
  return ch.h(Vo, dh(qr, qr, a));
}
function kD(a) {
  return nx(function(a, c) {
    return Q.j(a, qr, c);
  }, a);
}
function lD(a, b, c) {
  for (a = kD(a);;) {
    var d = Vo.g(ox(a));
    if (q(d)) {
      var e = d;
      if (md.h(b, Er.g(e))) {
        return rx(tx(a, function() {
          return function(a) {
            return lh.j(a, new T(null, 1, 5, U, [Vo], null), c);
          };
        }(a, e, d)));
      }
      if (vx(a)) {
        return Yr;
      }
      a = ux(a);
    } else {
      return null;
    }
  }
}
var mD = function() {
  function a(a, b) {
    var c = b.g ? b.g(a) : b.call(null, a), g = Zx(c), c = ey(c), c = fh.h(zj, Jg.h(C, c)), h = GC.h(c, g), g = uj.k(H([Dj(c, Ng.g(wr)), Dj(g, Ng.g(oq)), Dj(h, Ng.g(jp))], 0));
    return Q.k(uj.k(H([new n(null, 3, [oq, 0, wr, 0, jp, 0], null), Ij(ni(g))], 0)), Rn, xy(a), H([Po, Dx(wx(a))], 0));
  }
  function b(a) {
    return c.h(a, Vr);
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
function nD(a, b) {
  var c = ds.g(a), d = Ho.g(c);
  return lg(Je.j(function(a, b) {
    return function(c, d) {
      var l = gy(b, d);
      return Je.j(function() {
        return function(a, b) {
          return ng.j(a, b, P.j(a, b, 0) + 1);
        };
      }(l, a, b), c, l);
    };
  }(c, d), Gc(pi), b));
}
;var oD, pD, qD, rD;
function sD(a, b) {
  if (a ? a.nd : a) {
    return a.nd(a, b);
  }
  var c;
  c = sD[m(null == a ? null : a)];
  if (!c && (c = sD._, !c)) {
    throw r("ReadPort.take!", a);
  }
  return c.call(null, a, b);
}
function tD(a, b, c) {
  if (a ? a.od : a) {
    return a.od(a, b, c);
  }
  var d;
  d = tD[m(null == a ? null : a)];
  if (!d && (d = tD._, !d)) {
    throw r("WritePort.put!", a);
  }
  return d.call(null, a, b, c);
}
function uD(a) {
  if (a ? a.Hc : a) {
    return a.Hc(a);
  }
  var b;
  b = uD[m(null == a ? null : a)];
  if (!b && (b = uD._, !b)) {
    throw r("Channel.close!", a);
  }
  return b.call(null, a);
}
function vD(a) {
  if (a ? a.cc : a) {
    return a.cc(a);
  }
  var b;
  b = vD[m(null == a ? null : a)];
  if (!b && (b = vD._, !b)) {
    throw r("Handler.active?", a);
  }
  return b.call(null, a);
}
function wD(a) {
  if (a ? a.rb : a) {
    return a.rb(a);
  }
  var b;
  b = wD[m(null == a ? null : a)];
  if (!b && (b = wD._, !b)) {
    throw r("Handler.commit", a);
  }
  return b.call(null, a);
}
function xD(a) {
  if (a ? a.Md : a) {
    return a.Md();
  }
  var b;
  b = xD[m(null == a ? null : a)];
  if (!b && (b = xD._, !b)) {
    throw r("Buffer.full?", a);
  }
  return b.call(null, a);
}
;function yD(a, b, c, d, e) {
  for (var f = 0;;) {
    if (f < e) {
      c[d + f] = a[b + f], f += 1;
    } else {
      break;
    }
  }
}
function zD(a, b, c, d) {
  this.head = a;
  this.W = b;
  this.length = c;
  this.m = d;
}
zD.prototype.pop = function() {
  if (0 === this.length) {
    return null;
  }
  var a = this.m[this.W];
  this.m[this.W] = null;
  this.W = (this.W + 1) % this.m.length;
  this.length -= 1;
  return a;
};
zD.prototype.unshift = function(a) {
  this.m[this.head] = a;
  this.head = (this.head + 1) % this.m.length;
  this.length += 1;
  return null;
};
function AD(a, b) {
  a.length + 1 === a.m.length && a.resize();
  a.unshift(b);
}
zD.prototype.resize = function() {
  var a = Array(2 * this.m.length);
  return this.W < this.head ? (yD(this.m, this.W, a, 0, this.length), this.W = 0, this.head = this.length, this.m = a) : this.W > this.head ? (yD(this.m, this.W, a, 0, this.m.length - this.W), yD(this.m, 0, a, this.m.length - this.W, this.head), this.W = 0, this.head = this.length, this.m = a) : this.W === this.head ? (this.head = this.W = 0, this.m = a) : null;
};
function BD(a, b) {
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
function CD(a) {
  if (!(0 < a)) {
    throw Error("Assert failed: Can't create a ring buffer of size 0\n" + u.g(Gg.k(H([Af(new pd(null, "\x3e", "\x3e", 1085014381, null), new pd(null, "n", "n", -2092305744, null), 0)], 0))));
  }
  return new zD(0, 0, 0, Array(a));
}
function DD(a, b) {
  this.Sa = a;
  this.Ac = b;
  this.G = 0;
  this.t = 2;
}
DD.prototype.T = function() {
  return this.Sa.length;
};
DD.prototype.Md = function() {
  return this.Sa.length === this.Ac;
};
DD.prototype.Of = function() {
  return this.Sa.pop();
};
function ED(a, b) {
  if (!gb(xD(a))) {
    throw Error("Assert failed: Can't add to a full buffer\n" + u.g(Gg.k(H([Af(new pd(null, "not", "not", 1044554643, null), Af(new pd("impl", "full?", "impl/full?", -97582774, null), new pd(null, "this", "this", 1028897902, null)))], 0))));
  }
  a.Sa.unshift(b);
}
;var FD = null, GD = CD(32), HD = !1, ID = !1;
function JD() {
  HD = !0;
  ID = !1;
  for (var a = 0;;) {
    var b = GD.pop();
    if (null != b && (b.q ? b.q() : b.call(null), 1024 > a)) {
      a += 1;
      continue;
    }
    break;
  }
  HD = !1;
  return 0 < GD.length ? KD.q ? KD.q() : KD.call(null) : null;
}
"undefined" !== typeof MessageChannel && (FD = new MessageChannel, FD.port1.onmessage = function() {
  return JD();
});
function KD() {
  var a = ID;
  if (q(a ? HD : a)) {
    return null;
  }
  ID = !0;
  return "undefined" !== typeof MessageChannel ? FD.port2.postMessage(0) : "undefined" !== typeof setImmediate ? setImmediate(JD) : setTimeout(JD, 0);
}
function LD(a) {
  AD(GD, a);
  KD();
}
function MD(a, b) {
  setTimeout(a, b);
}
;var ND, PD = function OD(b) {
  "undefined" === typeof ND && (ND = function(b, d, e) {
    this.D = b;
    this.wf = d;
    this.gg = e;
    this.G = 0;
    this.t = 425984;
  }, ND.eb = !0, ND.cb = "cljs.core.async.impl.channels/t33792", ND.jb = function(b, d) {
    return xc(d, "cljs.core.async.impl.channels/t33792");
  }, ND.prototype.Fc = function() {
    return this.D;
  }, ND.prototype.H = function() {
    return this.gg;
  }, ND.prototype.I = function(b, d) {
    return new ND(this.D, this.wf, d);
  });
  return new ND(b, OD, null);
};
function QD(a, b) {
  this.uc = a;
  this.D = b;
}
function RD(a) {
  return vD(a.uc);
}
function SD(a, b, c, d, e, f) {
  this.bd = a;
  this.sd = b;
  this.Cd = c;
  this.rd = d;
  this.Sa = e;
  this.closed = f;
}
SD.prototype.Hc = function() {
  if (!this.closed) {
    for (this.closed = !0;;) {
      var a = this.bd.pop();
      if (null != a) {
        if (a.cc(null)) {
          var b = a.rb(null);
          LD(function(a) {
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
SD.prototype.nd = function(a, b) {
  if (b.cc(null)) {
    if (null != this.Sa && 0 < K(this.Sa)) {
      var c = b.rb(null);
      return PD(this.Sa.Of());
    }
    for (;;) {
      var d = this.Cd.pop();
      if (null != d) {
        var e = d.uc, f = d.D;
        if (e.cc(null)) {
          var g = e.rb(null), c = b.rb(null);
          LD(function(a) {
            return function() {
              return a.g ? a.g(!0) : a.call(null, !0);
            };
          }(g, c, e, f, d, this));
          return PD(f);
        }
      } else {
        if (this.closed) {
          return c = b.rb(null), PD(null);
        }
        64 < this.sd ? (this.sd = 0, BD(this.bd, vD)) : this.sd += 1;
        if (!(1024 > this.bd.length)) {
          throw Error("Assert failed: " + u.g("No more than " + u.g(1024) + " pending takes are allowed on a single channel.") + "\n" + u.g(Gg.k(H([Af(new pd(null, "\x3c", "\x3c", 993667236, null), Af(new pd(null, ".-length", ".-length", -280799999, null), new pd(null, "takes", "takes", 298247964, null)), new pd("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", 1508600732, null))], 0))));
        }
        AD(this.bd, b);
        return null;
      }
    }
  } else {
    return null;
  }
};
SD.prototype.od = function(a, b, c) {
  if (null == b) {
    throw Error("Assert failed: Can't put nil in on a channel\n" + u.g(Gg.k(H([Af(new pd(null, "not", "not", 1044554643, null), Af(new pd(null, "nil?", "nil?", 1612038930, null), new pd(null, "val", "val", 1769233139, null)))], 0))));
  }
  if ((a = this.closed) || !c.cc(null)) {
    return PD(!a);
  }
  for (;;) {
    var d = this.bd.pop();
    if (null != d) {
      if (d.cc(null)) {
        var e = d.rb(null);
        c = c.rb(null);
        LD(function(a) {
          return function() {
            return a.g ? a.g(b) : a.call(null, b);
          };
        }(e, c, d, a, this));
        return PD(!0);
      }
    } else {
      if (null == this.Sa || this.Sa.Md()) {
        64 < this.rd ? (this.rd = 0, BD(this.Cd, RD)) : this.rd += 1;
        if (!(1024 > this.Cd.length)) {
          throw Error("Assert failed: " + u.g("No more than " + u.g(1024) + " pending puts are allowed on a single channel. Consider using a windowed buffer.") + "\n" + u.g(Gg.k(H([Af(new pd(null, "\x3c", "\x3c", 993667236, null), Af(new pd(null, ".-length", ".-length", -280799999, null), new pd(null, "puts", "puts", -1883877054, null)), new pd("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", 1508600732, null))], 0))));
        }
        AD(this.Cd, new QD(c, b));
        return null;
      }
      c = c.rb(null);
      ED(this.Sa, b);
      return PD(!0);
    }
  }
};
function TD(a) {
  return new SD(CD(32), 0, CD(32), 0, a, !1);
}
;var UD, WD = function VD(b) {
  "undefined" === typeof UD && (UD = function(b, d, e) {
    this.f = b;
    this.Td = d;
    this.fg = e;
    this.G = 0;
    this.t = 393216;
  }, UD.eb = !0, UD.cb = "cljs.core.async.impl.ioc-helpers/t33656", UD.jb = function(b, d) {
    return xc(d, "cljs.core.async.impl.ioc-helpers/t33656");
  }, UD.prototype.cc = function() {
    return!0;
  }, UD.prototype.rb = function() {
    return this.f;
  }, UD.prototype.H = function() {
    return this.fg;
  }, UD.prototype.I = function(b, d) {
    return new UD(this.f, this.Td, d);
  });
  return new UD(b, VD, null);
};
function XD(a) {
  try {
    return a[0].call(null, a);
  } catch (b) {
    throw b instanceof Object && a[6].Hc(null), b;
  }
}
function YD(a, b, c) {
  c = c.nd(null, WD(function(c) {
    a[2] = c;
    a[1] = b;
    return XD(a);
  }));
  return q(c) ? (a[2] = I.g ? I.g(c) : I.call(null, c), a[1] = b, Y) : null;
}
function ZD(a, b) {
  var c = a[6];
  null != b && c.od(null, b, WD(function() {
    return function() {
      return null;
    };
  }(c)));
  c.Hc(null);
  return c;
}
function $D(a) {
  for (;;) {
    var b = a[4], c = po.g(b), d = yq.g(b), e = a[5];
    if (q(function() {
      var a = e;
      return q(a) ? gb(b) : a;
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
      a[4] = Q.k(b, po, null, H([yq, null], 0));
      break;
    }
    if (q(function() {
      var a = e;
      return q(a) ? gb(c) && gb(Bl.g(b)) : a;
    }())) {
      a[4] = Kq.g(b);
    } else {
      if (q(function() {
        var a = e;
        return q(a) ? (a = gb(c)) ? Bl.g(b) : a : a;
      }())) {
        a[1] = Bl.g(b);
        a[4] = Q.j(b, Bl, null);
        break;
      }
      if (q(function() {
        var a = gb(e);
        return a ? Bl.g(b) : a;
      }())) {
        a[1] = Bl.g(b);
        a[4] = Q.j(b, Bl, null);
        break;
      }
      if (gb(e) && gb(Bl.g(b))) {
        a[1] = Qq.g(b);
        a[4] = Kq.g(b);
        break;
      }
      throw Error("Assert failed: No matching clause\n" + u.g(Gg.k(H([!1], 0))));
    }
  }
}
;var aE = function() {
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
function bE(a, b, c) {
  this.key = a;
  this.D = b;
  this.forward = c;
  this.G = 0;
  this.t = 2155872256;
}
bE.prototype.O = function(a, b, c) {
  return Qj(b, Wj, "[", " ", "]", c, this);
};
bE.prototype.R = function() {
  return ub(ub(sd, this.D), this.key);
};
var cE = function() {
  function a(a, b, c) {
    c = Array(c + 1);
    for (var g = 0;;) {
      if (g < c.length) {
        c[g] = null, g += 1;
      } else {
        break;
      }
    }
    return new bE(a, b, c);
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
}(), dE = function() {
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
function eE(a, b) {
  this.wc = a;
  this.ub = b;
  this.G = 0;
  this.t = 2155872256;
}
eE.prototype.O = function(a, b, c) {
  return Qj(b, function() {
    return function(a) {
      return Qj(b, Wj, "", " ", "", c, a);
    };
  }(this), "{", ", ", "}", c, this);
};
eE.prototype.R = function() {
  return function(a) {
    return function c(d) {
      return new Ef(null, function() {
        return function() {
          return null == d ? null : Ld(new T(null, 2, 5, U, [d.key, d.D], null), c(d.forward[0]));
        };
      }(a), null, null);
    };
  }(this)(this.wc.forward[0]);
};
eE.prototype.put = function(a, b) {
  var c = Array(15), d = dE.p(this.wc, a, this.ub, c).forward[0];
  if (null != d && d.key === a) {
    return d.D = b;
  }
  d = aE.q();
  if (d > this.ub) {
    for (var e = this.ub + 1;;) {
      if (e <= d + 1) {
        c[e] = this.wc, e += 1;
      } else {
        break;
      }
    }
    this.ub = d;
  }
  for (d = cE.j(a, b, Array(d));;) {
    return 0 <= this.ub ? (c = c[0].forward, d.forward[0] = c[0], c[0] = d) : null;
  }
};
eE.prototype.remove = function(a) {
  var b = Array(15), c = dE.p(this.wc, a, this.ub, b).forward[0];
  if (null != c && c.key === a) {
    for (a = 0;;) {
      if (a <= this.ub) {
        var d = b[a].forward;
        d[a] === c && (d[a] = c.forward[a]);
        a += 1;
      } else {
        break;
      }
    }
    for (;;) {
      if (0 < this.ub && null == this.wc.forward[this.ub]) {
        this.ub -= 1;
      } else {
        return null;
      }
    }
  } else {
    return null;
  }
};
function fE(a) {
  for (var b = gE, c = b.wc, d = b.ub;;) {
    if (0 > d) {
      return c === b.wc ? null : c;
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
var gE = new eE(cE.g(0), 0);
function hE(a) {
  var b = (new Date).valueOf() + a, c = fE(b), d = q(q(c) ? c.key < b + 10 : c) ? c.D : null;
  if (q(d)) {
    return d;
  }
  var e = TD(null);
  gE.put(b, e);
  MD(function(a, b, c) {
    return function() {
      gE.remove(c);
      return a.Hc(null);
    };
  }(e, d, b, c), a);
  return e;
}
;var jE = function iE(b) {
  "undefined" === typeof oD && (oD = function(b, d, e) {
    this.f = b;
    this.Td = d;
    this.cg = e;
    this.G = 0;
    this.t = 393216;
  }, oD.eb = !0, oD.cb = "cljs.core.async/t30734", oD.jb = function(b, d) {
    return xc(d, "cljs.core.async/t30734");
  }, oD.prototype.cc = function() {
    return!0;
  }, oD.prototype.rb = function() {
    return this.f;
  }, oD.prototype.H = function() {
    return this.cg;
  }, oD.prototype.I = function(b, d) {
    return new oD(this.f, this.Td, d);
  });
  return new oD(b, iE, null);
}, kE = function() {
  function a(a) {
    a = md.h(a, 0) ? null : a;
    a = "number" === typeof a ? new DD(CD(a), a) : a;
    return TD(a);
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
  c.q = b;
  c.g = a;
  return c;
}(), lE = jE(function() {
  return null;
}), mE = function() {
  function a(a, b, c, d) {
    a = tD(a, b, jE(c));
    return q(a) ? (b = I.g ? I.g(a) : I.call(null, a), q(d) ? c.g ? c.g(b) : c.call(null, b) : LD(function(a) {
      return function() {
        return c.g ? c.g(a) : c.call(null, a);
      };
    }(b, a, a)), b) : !0;
  }
  function b(a, b, c) {
    return d.p(a, b, c, !0);
  }
  function c(a, b) {
    var c = tD(a, b, lE);
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
  d.p = a;
  return d;
}(), oE = function nE(b, c) {
  "undefined" === typeof pD && (pD = function(b, c, f, g) {
    this.ch = b;
    this.f = c;
    this.vd = f;
    this.wd = g;
    this.G = 0;
    this.t = 393216;
  }, pD.eb = !0, pD.cb = "cljs.core.async/t30820", pD.jb = function(b, c) {
    return xc(c, "cljs.core.async/t30820");
  }, pD.prototype.od = function(b, c, f) {
    return tD(this.ch, c, f);
  }, pD.prototype.nd = function(b, c) {
    var f = this, g = this, h = sD(f.ch, function() {
      "undefined" === typeof qD && (qD = function(b, c, d, e, f, g, h) {
        this.Sd = b;
        this.uf = c;
        this.wd = d;
        this.ch = e;
        this.f = f;
        this.vd = g;
        this.dg = h;
        this.G = 0;
        this.t = 393216;
      }, qD.eb = !0, qD.cb = "cljs.core.async/t30823", qD.jb = function() {
        return function(b, c) {
          return xc(c, "cljs.core.async/t30823");
        };
      }(g), qD.prototype.cc = function() {
        return function() {
          return vD(this.Sd);
        };
      }(g), qD.prototype.rb = function(b) {
        return function() {
          var c = this;
          return function(b) {
            return function(d) {
              d = null == d ? null : c.f.g ? c.f.g(d) : c.f.call(null, d);
              return b.g ? b.g(d) : b.call(null, d);
            };
          }(wD(c.Sd), this, b);
        };
      }(g), qD.prototype.H = function() {
        return function() {
          return this.dg;
        };
      }(g), qD.prototype.I = function() {
        return function(b, c) {
          return new qD(this.Sd, this.uf, this.wd, this.ch, this.f, this.vd, c);
        };
      }(g));
      return new qD(c, g, f.wd, f.ch, f.f, f.vd, null);
    }());
    return q(q(h) ? null != (I.g ? I.g(h) : I.call(null, h)) : h) ? PD(function() {
      var b = I.g ? I.g(h) : I.call(null, h);
      return f.f.g ? f.f.g(b) : f.f.call(null, b);
    }()) : h;
  }, pD.prototype.Hc = function() {
    return uD(this.ch);
  }, pD.prototype.H = function() {
    return this.wd;
  }, pD.prototype.I = function(b, c) {
    return new pD(this.ch, this.f, this.vd, c);
  });
  return new pD(c, b, nE, null);
};
function pE(a, b, c) {
  if (a ? a.Ee : a) {
    return a.Ee(a, b, c);
  }
  var d;
  d = pE[m(null == a ? null : a)];
  if (!d && (d = pE._, !d)) {
    throw r("Mult.tap*", a);
  }
  return d.call(null, a, b, c);
}
var qE = function() {
  function a(a, b, c) {
    pE(a, b, c);
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
function rE(a, b) {
  var c = Array.prototype.slice.call(arguments), d = c.shift();
  if ("undefined" == typeof d) {
    throw Error("[goog.string.format] Template required");
  }
  return d.replace(/%([0\-\ \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(a, b, d, h, l, p, t, s) {
    if ("%" == p) {
      return "%";
    }
    var w = c.shift();
    if ("undefined" == typeof w) {
      throw Error("[goog.string.format] Not enough arguments");
    }
    arguments[0] = w;
    return sE[p].apply(null, arguments);
  });
}
var sE = {s:function(a, b, c) {
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
  return sE.f(parseInt(a, 10), b, c, d, 0, f, g, h);
}};
sE.i = sE.d;
sE.u = sE.d;
function tE(a) {
  a.beginPath();
}
function uE(a) {
  a.restore();
  return a;
}
function vE(a) {
  a.stroke();
}
function wE(a, b) {
  var c = Ae(b) ? R.h(Cg, b) : b, d = P.h(c, jq), e = P.h(c, Kl), f = P.h(c, fk), c = P.h(c, pr);
  a.clearRect(c, f, e, d);
}
function xE(a, b) {
  var c = Ae(b) ? R.h(Cg, b) : b, d = P.h(c, jq), e = P.h(c, Kl), f = P.h(c, fk), c = P.h(c, pr);
  a.strokeRect(c, f, e, d);
}
function yE(a, b) {
  var c = Ae(b) ? R.h(Cg, b) : b, d = P.h(c, jq), e = P.h(c, Kl), f = P.h(c, fk), c = P.h(c, pr);
  a.fillRect(c, f, e, d);
}
function zE(a, b) {
  var c = Ae(b) ? R.h(Cg, b) : b, d = P.h(c, fk), e = P.h(c, pr), c = P.h(c, As);
  a.fillText(c, e, d);
}
function AE(a, b) {
  a.fillStyle = Cf(b);
}
function BE(a, b) {
  a.strokeStyle = Cf(b);
}
function CE(a, b) {
  a.globalAlpha = b;
  return a;
}
var DE = function() {
  function a(a, b, c, g) {
    a.drawImage(b, c, g);
    return a;
  }
  function b(a, b, c) {
    var g = Ae(c) ? R.h(Cg, c) : c;
    c = P.h(g, yr);
    var h = P.h(g, Ar), l = P.h(g, pr), p = P.h(g, fk), t = P.h(g, Kk), s = P.h(g, Vk), w = P.h(g, Kl), A = P.h(g, Ml), y = P.h(g, Zn), D = P.h(g, jq), G = P.h(g, $q), J = P.h(g, hr), g = K(g);
    if (q(md.h ? md.h(2, g) : md.call(null, 2, g))) {
      a.drawImage(b, l, p);
    } else {
      if (q(md.h ? md.h(4, g) : md.call(null, 4, g))) {
        a.drawImage(b, l, p, w, D);
      } else {
        if (q(md.h ? md.h(8, g) : md.call(null, 8, g))) {
          a.drawImage(b, J, A, h, c, s, y, G, t);
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
  c.p = a;
  return c;
}(), EE = function() {
  function a(a, b, c, g, h, l, p) {
    a.bezierCurveTo(b, c, g, h, l, p);
    return a;
  }
  function b(a, b) {
    var c = Ae(b) ? R.h(Cg, b) : b, g = P.h(c, fk), h = P.h(c, pr), l = P.h(c, Dr), p = P.h(c, rp), t = P.h(c, Uq), c = P.h(c, lp);
    a.bezierCurveTo(c, t, p, l, h, g);
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
  c.bb = a;
  return c;
}();
var FE, GE, HE = new n(null, 5, [Cr, new n(null, 2, [oq, !0, wr, !0], null), Hl, new n(null, 6, [oq, !0, rq, null, jo, !0, bl, !0, Sk, !1, Zk, 0], null), pk, new n(null, 3, [oq, null, ek, null, Xr, null], null), rl, new n(null, 5, [kq, Uo, oq, !0, ek, null, nl, null, Xr, null], null), fr, de([jk, Xk, Al, Cl, Dl, lo, So, Bq, sr, ns, os, ws], [30, 50, 10, 60, .85, 25, 2, 150, 5, 5, .85, 10])], null);
GE = Eg.g ? Eg.g(HE) : Eg.call(null, HE);
var IE = Eg.g ? Eg.g(25) : Eg.call(null, 25), JE = Eg.g ? Eg.g(ae) : Eg.call(null, ae), KE = Eg.g ? Eg.g(null) : Eg.call(null, null), LE = function() {
  function a(a, b, c, g) {
    var h = a instanceof V ? function() {
      switch(a instanceof V ? a.V : null) {
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
    return "hsla(" + u.g(h) + "," + u.g(Te(100 * b)) + "%," + u.g(Te(100 * c)) + "%," + u.g(g) + ")";
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
}(), Z = new n(null, 8, [Wn, "white", ek, "white", oq, LE.j(vq, 1, .5), wr, LE.p(wq, 1, .5, .5), jp, LE.j(Jr, 1, .4), xl, LE.p(wl, 1, .75, .5), bl, LE.p(Ul, 1, .5, .4), Sk, LE.p(40, 1, .5, .75)], null);
function ME(a) {
  if (a ? a.Oe : a) {
    return a.Oe();
  }
  var b;
  b = ME[m(null == a ? null : a)];
  if (!b && (b = ME._, !b)) {
    throw r("PArrayLayout.layout-bounds", a);
  }
  return b.call(null, a);
}
function NE(a, b) {
  if (a ? a.Re : a) {
    return a.Re(0, b);
  }
  var c;
  c = NE[m(null == a ? null : a)];
  if (!c && (c = NE._, !c)) {
    throw r("PArrayLayout.origin-px-topleft", a);
  }
  return c.call(null, a, b);
}
function OE(a, b) {
  if (a ? a.Pe : a) {
    return a.Pe(0, b);
  }
  var c;
  c = OE[m(null == a ? null : a)];
  if (!c && (c = OE._, !c)) {
    throw r("PArrayLayout.local-px-topleft", a);
  }
  return c.call(null, a, b);
}
function PE(a) {
  if (a ? a.Le : a) {
    return a.Le();
  }
  var b;
  b = PE[m(null == a ? null : a)];
  if (!b && (b = PE._, !b)) {
    throw r("PArrayLayout.element-size-px", a);
  }
  return b.call(null, a);
}
function QE(a) {
  if (a ? a.Qe : a) {
    return a.Qe();
  }
  var b;
  b = QE[m(null == a ? null : a)];
  if (!b && (b = QE._, !b)) {
    throw r("PArrayLayout.n-onscreen", a);
  }
  return b.call(null, a);
}
function RE(a) {
  if (a ? a.Sf : a) {
    return a.Ea;
  }
  var b;
  b = RE[m(null == a ? null : a)];
  if (!b && (b = RE._, !b)) {
    throw r("PArrayLayout.top-id-onscreen", a);
  }
  return b.call(null, a);
}
function SE(a, b, c) {
  if (a ? a.Je : a) {
    return a.Je(0, b, c);
  }
  var d;
  d = SE[m(null == a ? null : a)];
  if (!d && (d = SE._, !d)) {
    throw r("PArrayLayout.clicked-id", a);
  }
  return d.call(null, a, b, c);
}
function TE(a, b, c) {
  if (a ? a.Ke : a) {
    return a.Ke(0, b, c);
  }
  var d;
  d = TE[m(null == a ? null : a)];
  if (!d && (d = TE._, !d)) {
    throw r("PArrayLayout.draw-element", a);
  }
  return d.call(null, a, b, c);
}
function UE(a, b, c) {
  if (a ? a.Me : a) {
    return a.Me(0, b, c);
  }
  var d;
  d = UE[m(null == a ? null : a)];
  if (!d && (d = UE._, !d)) {
    throw r("PArrayLayout.highlight-dt", a);
  }
  return d.call(null, a, b, c);
}
function VE(a, b, c, d) {
  if (a ? a.Ne : a) {
    return a.Ne(0, b, c, d);
  }
  var e;
  e = VE[m(null == a ? null : a)];
  if (!e && (e = VE._, !e)) {
    throw r("PArrayLayout.highlight-element", a);
  }
  return e.call(null, a, b, c, d);
}
function WE(a) {
  a = ME(a);
  return pr.g(a) + Kl.g(a);
}
function XE(a, b, c) {
  var d = PE(a), e = O.j(d, 0, null), d = O.j(d, 1, null), f = NE(a, c);
  c = O.j(f, 0, null);
  f = O.j(f, 1, null);
  b = OE(a, b);
  a = O.j(b, 0, null);
  b = O.j(b, 1, null);
  return new T(null, 2, 5, U, [c + a + .5 * e, f + b + .5 * d], null);
}
function YE(a, b, c) {
  var d = RE(b), e = d + QE(b) + -1;
  tE(a);
  c = B(c);
  for (var f = null, g = 0, h = 0;;) {
    if (h < g) {
      var l = f.F(null, h);
      d <= l && l <= e && TE(b, a, l);
      h += 1;
    } else {
      if (c = B(c)) {
        f = c, S(f) ? (c = x(f), h = z(f), f = c, g = K(c), c = h) : (c = C(f), d <= c && c <= e && TE(b, a, c), c = F(f), f = null, g = 0), h = 0;
      } else {
        break;
      }
    }
  }
}
function ZE(a, b, c) {
  a.save();
  c = B(ck(c, sj(c)));
  for (var d = null, e = 0, f = 0;;) {
    if (f < e) {
      var g = d.F(null, f), h = O.j(g, 0, null), g = O.j(g, 1, null);
      YE(a, b, g);
      g = a;
      CE.h ? CE.h(g, h) : CE.call(null, g, h);
      a.fill();
      f += 1;
    } else {
      if (c = B(c)) {
        S(c) ? (e = x(c), c = z(c), d = e, e = K(e)) : (e = C(c), d = O.j(e, 0, null), e = O.j(e, 1, null), YE(a, b, e), e = a, CE.h ? CE.h(e, d) : CE.call(null, e, d), a.fill(), c = F(c), d = null, e = 0), f = 0;
      } else {
        break;
      }
    }
  }
  uE(a);
}
function $E(a, b, c, d) {
  c = NE(b, c);
  b = O.j(c, 0, null);
  c = O.j(c, 1, null);
  DE.p(a, d, b, c);
}
function aF(a, b, c, d) {
  return new n(null, 4, [pr, a - c / 2, fk, b - d / 2, Kl, c, jq, d], null);
}
function bF(a, b) {
  BE(a, xl.g(Z));
  a.lineWidth = 3;
  xE(a, b);
  BE(a, "black");
  a.lineWidth = 1;
  xE(a, b);
  return a;
}
function cF(a, b, c, d, e, f, g, h, l, p) {
  this.Ua = a;
  this.Ea = b;
  this.Ia = c;
  this.ka = d;
  this.pa = e;
  this.Pa = f;
  this.La = g;
  this.ab = h;
  this.n = l;
  this.l = p;
  this.t = 2229667594;
  this.G = 8192;
  8 < arguments.length ? (this.n = l, this.l = p) : this.l = this.n = null;
}
k = cF.prototype;
k.L = function(a, b) {
  return Cb.j(this, b, null);
};
k.M = function(a, b, c) {
  switch(b instanceof V ? b.V : null) {
    case "circles?":
      return this.ab;
    case "left-px":
      return this.La;
    case "shrink":
      return this.Pa;
    case "element-h":
      return this.pa;
    case "element-w":
      return this.ka;
    case "draw-steps":
      return this.Ia;
    case "scroll-top":
      return this.Ea;
    case "elements-per-dt":
      return this.Ua;
    default:
      return P.j(this.l, b, c);
  }
};
k.O = function(a, b, c) {
  return Qj(b, function() {
    return function(a) {
      return Qj(b, Wj, "", " ", "", c, a);
    };
  }(this), "#comportexviz.viz-canvas.Grid1dLayout{", ", ", "}", c, ig.h(new T(null, 8, 5, U, [new T(null, 2, 5, U, [ls, this.Ua], null), new T(null, 2, 5, U, [Yk, this.Ea], null), new T(null, 2, 5, U, [lo, this.Ia], null), new T(null, 2, 5, U, [Bs, this.ka], null), new T(null, 2, 5, U, [Nl, this.pa], null), new T(null, 2, 5, U, [go, this.Pa], null), new T(null, 2, 5, U, [Gq, this.La], null), new T(null, 2, 5, U, [Mr, this.ab], null)], null), this.l));
};
k.H = function() {
  return this.n;
};
k.T = function() {
  return 8 + K(this.l);
};
k.Qe = function() {
  var a = this.Ua, b = 880 / this.pa;
  return a < b ? a : b;
};
k.Me = function(a, b, c) {
  c = NE(this, c);
  a = O.j(c, 0, null);
  c = O.j(c, 1, null);
  var d = ME(this);
  return bF(b, new n(null, 4, [pr, a, fk, c - 5, Kl, this.ka + 1, jq, 10 + jq.g(d)], null));
};
k.Le = function() {
  return new T(null, 2, 5, U, [this.ka, this.pa], null);
};
k.Ke = function(a, b, c) {
  c = OE(this, c);
  a = O.j(c, 0, null);
  c = O.j(c, 1, null);
  if (q(this.ab)) {
    var d = this.ka * this.Pa * .5;
    b = b.arc(a + d, c + d, d, 0, 2 * Math.PI, !0);
  } else {
    b = b.rect(a, c, this.ka * this.Pa, this.pa * this.Pa);
  }
  return b;
};
k.Sf = function() {
  return this.Ea;
};
k.Re = function(a, b) {
  return new T(null, 2, 5, U, [this.La + this.Ia * this.ka - (b + 1) * this.ka, 20], null);
};
k.Pe = function(a, b) {
  return new T(null, 2, 5, U, [0, (b - this.Ea) * this.pa], null);
};
k.Je = function(a, b, c) {
  var d = this, e = d.La + d.Ia * d.ka;
  a = function() {
    var a = (e - b) / d.ka;
    return Math.floor.g ? Math.floor.g(a) : Math.floor.call(null, a);
  }();
  var f = function() {
    var a = (c - 20) / d.pa;
    return Math.floor.g ? Math.floor.g(a) : Math.floor.call(null, a);
  }(), g = f + d.Ea;
  return 0 <= a && a <= K(I.g ? I.g(JE) : I.call(null, JE)) && 0 <= f && f <= QE(this) ? new T(null, 2, 5, U, [a, g], null) : null;
};
k.Ne = function(a, b, c, d) {
  a = NE(this, c);
  O.j(a, 0, null);
  a = O.j(a, 1, null);
  d = OE(this, d);
  O.j(d, 0, null);
  d = O.j(d, 1, null);
  c = ME(this);
  return bF(b, new n(null, 4, [pr, pr.g(c) - 5, fk, a + d, Kl, Kl.g(c) + 10, jq, this.pa + 1], null));
};
k.Oe = function() {
  return new n(null, 4, [pr, this.La, fk, 20, Kl, this.Ia * this.ka, jq, this.Ua * this.pa], null);
};
k.Q = function() {
  var a = this.w;
  return null != a ? a : this.w = a = uf(this);
};
k.N = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && ii(this, b) : b) ? !0 : !1;
};
k.va = function(a, b) {
  return Ce(new xj(null, new n(null, 8, [Yk, null, Nl, null, go, null, lo, null, Gq, null, Mr, null, ls, null, Bs, null], null), null), b) ? ee.h(Nd(fh.h(pi, this), this.n), b) : new cF(this.Ua, this.Ea, this.Ia, this.ka, this.pa, this.Pa, this.La, this.ab, this.n, rg(ee.h(this.l, b)), null);
};
k.ga = function(a, b, c) {
  return q(X.h ? X.h(ls, b) : X.call(null, ls, b)) ? new cF(c, this.Ea, this.Ia, this.ka, this.pa, this.Pa, this.La, this.ab, this.n, this.l, null) : q(X.h ? X.h(Yk, b) : X.call(null, Yk, b)) ? new cF(this.Ua, c, this.Ia, this.ka, this.pa, this.Pa, this.La, this.ab, this.n, this.l, null) : q(X.h ? X.h(lo, b) : X.call(null, lo, b)) ? new cF(this.Ua, this.Ea, c, this.ka, this.pa, this.Pa, this.La, this.ab, this.n, this.l, null) : q(X.h ? X.h(Bs, b) : X.call(null, Bs, b)) ? new cF(this.Ua, this.Ea, 
  this.Ia, c, this.pa, this.Pa, this.La, this.ab, this.n, this.l, null) : q(X.h ? X.h(Nl, b) : X.call(null, Nl, b)) ? new cF(this.Ua, this.Ea, this.Ia, this.ka, c, this.Pa, this.La, this.ab, this.n, this.l, null) : q(X.h ? X.h(go, b) : X.call(null, go, b)) ? new cF(this.Ua, this.Ea, this.Ia, this.ka, this.pa, c, this.La, this.ab, this.n, this.l, null) : q(X.h ? X.h(Gq, b) : X.call(null, Gq, b)) ? new cF(this.Ua, this.Ea, this.Ia, this.ka, this.pa, this.Pa, c, this.ab, this.n, this.l, null) : q(X.h ? 
  X.h(Mr, b) : X.call(null, Mr, b)) ? new cF(this.Ua, this.Ea, this.Ia, this.ka, this.pa, this.Pa, this.La, c, this.n, this.l, null) : new cF(this.Ua, this.Ea, this.Ia, this.ka, this.pa, this.Pa, this.La, this.ab, this.n, Q.j(this.l, b, c), null);
};
k.R = function() {
  return B(ig.h(new T(null, 8, 5, U, [new T(null, 2, 5, U, [ls, this.Ua], null), new T(null, 2, 5, U, [Yk, this.Ea], null), new T(null, 2, 5, U, [lo, this.Ia], null), new T(null, 2, 5, U, [Bs, this.ka], null), new T(null, 2, 5, U, [Nl, this.pa], null), new T(null, 2, 5, U, [go, this.Pa], null), new T(null, 2, 5, U, [Gq, this.La], null), new T(null, 2, 5, U, [Mr, this.ab], null)], null), this.l));
};
k.I = function(a, b) {
  return new cF(this.Ua, this.Ea, this.Ia, this.ka, this.pa, this.Pa, this.La, this.ab, b, this.l, this.w);
};
k.S = function(a, b) {
  return pe(b) ? Kb(this, v.h(b, 0), v.h(b, 1)) : Je.j(ub, this, b);
};
function dF(a) {
  return new cF(ls.g(a), Yk.g(a), lo.g(a), Bs.g(a), Nl.g(a), go.g(a), Gq.g(a), Mr.g(a), null, ee.k(a, ls, H([Yk, lo, Bs, Nl, go, Gq, Mr], 0)));
}
function eF(a, b, c) {
  var d = Ae(c) ? R.h(Cg, c) : c;
  c = P.h(d, os);
  var e = P.h(d, So), f = P.h(d, sr), d = P.h(d, lo);
  return dF(new n(null, 8, [ls, a, Yk, 0, lo, d, Bs, f, Nl, e, go, c, Gq, b, Mr, !1], null));
}
function fF(a, b, c) {
  var d = Ae(c) ? R.h(Cg, c) : c;
  c = P.h(d, Dl);
  var e = P.h(d, ns), d = P.h(d, lo);
  return dF(new n(null, 8, [ls, a, Yk, 0, lo, d, Bs, e, Nl, e, go, c, Gq, b, Mr, !0], null));
}
function gF(a) {
  Hg.p(KE, lh, new T(null, 1, 5, U, [Qn], null), function(b) {
    return gh.h(function(b) {
      var d = QE(b), e = ls.g(b);
      return lh.j(b, new T(null, 1, 5, U, [Yk], null), function(b, c) {
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
  return Hg.p(GE, lh, new T(null, 2, 5, U, [Hl, Zk], null), function(b) {
    return q(a) ? b + 1 : b - 1;
  });
}
function hF(a, b, c, d, e, f, g, h) {
  a.save();
  a.lineWidth = 1;
  CE(a, 1);
  for (var l = ds.g(b), p = Ho.g(l), t = q(f) ? new T(null, 1, 5, U, [f], null) : Zx(Vr.g(b)), s = uy.g(d), w = vy.g(d), A = ih.h(h, new T(null, 2, 5, U, [pk, ek], null)), y = ih.h(h, new T(null, 2, 5, U, [pk, Xr], null)), D = B(t), G = null, J = 0, L = 0;;) {
    if (L < J) {
      for (var N = G.F(null, L), $ = B(ig.h(q(A) ? new T(null, 1, 5, U, [ek], null) : null, new T(null, 2, 5, U, [oq, jp], null))), ba = null, M = 0, ka = 0;;) {
        if (ka < M) {
          var W = ba.F(null, ka), fa = fy(p, N), ea = vj(fa, gy(p, N)), ta = function() {
            switch(W instanceof V ? W.V : null) {
              case "inactive":
                return R.j(ee, ea, s);
              case "active-predicted":
                return vj(ea, w);
              case "active":
                return vj(ea, s);
              default:
                throw Error("No matching clause: " + u.g(W));;
            }
          }(), na = XE(c, N, g), Da = O.j(na, 0, null), ya = O.j(na, 1, null);
          BE(a, function() {
            var a = W;
            return Z.g ? Z.g(a) : Z.call(null, a);
          }());
          for (var Ba = B(ta), Ga = null, oa = 0, Qa = 0;;) {
            if (Qa < oa) {
              var wa = Ga.F(null, Qa), ib = O.j(wa, 0, null), vb = O.j(wa, 1, null), Ma = py(d, ib), Ua = O.j(Ma, 0, null);
              O.j(Ma, 1, null);
              var ua = XE(e, Ua, g), Jb = O.j(ua, 0, null), Cd = O.j(ua, 1, null), Ub = a;
              CE(Ub, q(y) ? vb : 1);
              tE(Ub);
              Ub.moveTo(Da - 1, ya);
              Ub.lineTo(Jb + 1, Cd);
              vE(Ub);
              Qa += 1;
            } else {
              var od = B(Ba);
              if (od) {
                var ha = od;
                if (S(ha)) {
                  var Hf = x(ha), Og = z(ha), Pg = Hf, re = K(Hf), Ba = Og, Ga = Pg, oa = re
                } else {
                  var Sc = C(ha), Kc = O.j(Sc, 0, null), hc = O.j(Sc, 1, null), se = py(d, Kc), te = O.j(se, 0, null);
                  O.j(se, 1, null);
                  var Qd = XE(e, te, g), Mb = O.j(Qd, 0, null), Bc = O.j(Qd, 1, null), Rd = a;
                  CE(Rd, q(y) ? hc : 1);
                  tE(Rd);
                  Rd.moveTo(Da - 1, ya);
                  Rd.lineTo(Mb + 1, Bc);
                  vE(Rd);
                  Ba = F(ha);
                  Ga = null;
                  oa = 0;
                }
                Qa = 0;
              } else {
                break;
              }
            }
          }
          ka += 1;
        } else {
          var If = B($);
          if (If) {
            var Sd = If;
            if (S(Sd)) {
              var Cc = x(Sd), Lc = z(Sd), rc = Cc, hd = K(Cc), $ = Lc, ba = rc, M = hd
            } else {
              var Xe = C(Sd), Qg = fy(p, N), ac = vj(Qg, gy(p, N)), Qh = function() {
                switch(Xe instanceof V ? Xe.V : null) {
                  case "inactive":
                    return R.j(ee, ac, s);
                  case "active-predicted":
                    return vj(ac, w);
                  case "active":
                    return vj(ac, s);
                  default:
                    throw Error("No matching clause: " + u.g(Xe));;
                }
              }(), Jf = XE(c, N, g), vd = O.j(Jf, 0, null), id = O.j(Jf, 1, null);
              BE(a, function() {
                var a = Xe;
                return Z.g ? Z.g(a) : Z.call(null, a);
              }());
              for (var kb = B(Qh), ic = null, Td = 0, bc = 0;;) {
                if (bc < Td) {
                  var Kf = ic.F(null, bc), la = O.j(Kf, 0, null), Ud = O.j(Kf, 1, null), jd = py(d, la), kd = O.j(jd, 0, null);
                  O.j(jd, 1, null);
                  var Tc = XE(e, kd, g), wd = O.j(Tc, 0, null), jc = O.j(Tc, 1, null), qb = a;
                  CE(qb, q(y) ? Ud : 1);
                  tE(qb);
                  qb.moveTo(vd - 1, id);
                  qb.lineTo(wd + 1, jc);
                  vE(qb);
                  bc += 1;
                } else {
                  var Mc = B(kb);
                  if (Mc) {
                    var xd = Mc;
                    if (S(xd)) {
                      var Ye = x(xd), Ze = z(xd), Lf = Ye, $e = K(Ye), kb = Ze, ic = Lf, Td = $e
                    } else {
                      var yd = C(xd), Mf = O.j(yd, 0, null), Vd = O.j(yd, 1, null), sc = py(d, Mf), cc = O.j(sc, 0, null);
                      O.j(sc, 1, null);
                      var zd = XE(e, cc, g), af = O.j(zd, 0, null), Pa = O.j(zd, 1, null), ld = a;
                      CE(ld, q(y) ? Vd : 1);
                      tE(ld);
                      ld.moveTo(vd - 1, id);
                      ld.lineTo(af + 1, Pa);
                      vE(ld);
                      kb = F(xd);
                      ic = null;
                      Td = 0;
                    }
                    bc = 0;
                  } else {
                    break;
                  }
                }
              }
              $ = F(Sd);
              ba = null;
              M = 0;
            }
            ka = 0;
          } else {
            break;
          }
        }
      }
      L += 1;
    } else {
      var dc = B(D);
      if (dc) {
        var Db = dc;
        if (S(Db)) {
          var Nf = x(Db), Rg = z(Db), Wd = Nf, Rh = K(Nf), D = Rg, G = Wd, J = Rh
        } else {
          for (var Xd = C(Db), Of = B(ig.h(q(A) ? new T(null, 1, 5, U, [ek], null) : null, new T(null, 2, 5, U, [oq, jp], null))), ue = null, Pf = 0, ve = 0;;) {
            if (ve < Pf) {
              var Yb = ue.F(null, ve), Qf = fy(p, Xd), Dc = vj(Qf, gy(p, Xd)), bf = function() {
                switch(Yb instanceof V ? Yb.V : null) {
                  case "inactive":
                    return R.j(ee, Dc, s);
                  case "active-predicted":
                    return vj(Dc, w);
                  case "active":
                    return vj(Dc, s);
                  default:
                    throw Error("No matching clause: " + u.g(Yb));;
                }
              }(), Yd = XE(c, Xd, g), Rf = O.j(Yd, 0, null), Sf = O.j(Yd, 1, null);
              BE(a, function() {
                var a = Yb;
                return Z.g ? Z.g(a) : Z.call(null, a);
              }());
              for (var we = B(bf), cf = null, df = 0, Nc = 0;;) {
                if (Nc < df) {
                  var tc = cf.F(null, Nc), Tf = O.j(tc, 0, null), Sg = O.j(tc, 1, null), Sh = py(d, Tf), Tg = O.j(Sh, 0, null);
                  O.j(Sh, 1, null);
                  var ef = XE(e, Tg, g), $l = O.j(ef, 0, null), Uf = O.j(ef, 1, null), ff = a;
                  CE(ff, q(y) ? Sg : 1);
                  tE(ff);
                  ff.moveTo(Rf - 1, Sf);
                  ff.lineTo($l + 1, Uf);
                  vE(ff);
                  Nc += 1;
                } else {
                  var Th = B(we);
                  if (Th) {
                    var Zd = Th;
                    if (S(Zd)) {
                      var jj = x(Zd), Ek = z(Zd), am = jj, rb = K(jj), we = Ek, cf = am, df = rb
                    } else {
                      var bm = C(Zd), Rs = O.j(bm, 0, null), Ss = O.j(bm, 1, null), Uh = py(d, Rs), wp = O.j(Uh, 0, null);
                      O.j(Uh, 1, null);
                      var Vh = XE(e, wp, g), xp = O.j(Vh, 0, null), Ts = O.j(Vh, 1, null), kj = a;
                      CE(kj, q(y) ? Ss : 1);
                      tE(kj);
                      kj.moveTo(Rf - 1, Sf);
                      kj.lineTo(xp + 1, Ts);
                      vE(kj);
                      we = F(Zd);
                      cf = null;
                      df = 0;
                    }
                    Nc = 0;
                  } else {
                    break;
                  }
                }
              }
              ve += 1;
            } else {
              var yp = B(Of);
              if (yp) {
                var Wh = yp;
                if (S(Wh)) {
                  var cm = x(Wh), Us = z(Wh), Vs = cm, zp = K(cm), Of = Us, ue = Vs, Pf = zp
                } else {
                  var Fk = C(Wh), Ws = fy(p, Xd), Ug = vj(Ws, gy(p, Xd)), Ap = function() {
                    switch(Fk instanceof V ? Fk.V : null) {
                      case "inactive":
                        return R.j(ee, Ug, s);
                      case "active-predicted":
                        return vj(Ug, w);
                      case "active":
                        return vj(Ug, s);
                      default:
                        throw Error("No matching clause: " + u.g(Fk));;
                    }
                  }(), Xh = XE(c, Xd, g), dm = O.j(Xh, 0, null), Bp = O.j(Xh, 1, null);
                  BE(a, function() {
                    var a = Fk;
                    return Z.g ? Z.g(a) : Z.call(null, a);
                  }());
                  for (var em = B(Ap), fm = null, gm = 0, lj = 0;;) {
                    if (lj < gm) {
                      var Gk = fm.F(null, lj), hm = O.j(Gk, 0, null), im = O.j(Gk, 1, null), Yh = py(d, hm), Cp = O.j(Yh, 0, null);
                      O.j(Yh, 1, null);
                      var jm = XE(e, Cp, g), Xs = O.j(jm, 0, null), Ys = O.j(jm, 1, null), Zh = a;
                      CE(Zh, q(y) ? im : 1);
                      tE(Zh);
                      Zh.moveTo(dm - 1, Bp);
                      Zh.lineTo(Xs + 1, Ys);
                      vE(Zh);
                      lj += 1;
                    } else {
                      var Dp = B(em);
                      if (Dp) {
                        var mj = Dp;
                        if (S(mj)) {
                          var $h = x(mj), Ep = z(mj), nj = $h, Fp = K($h), em = Ep, fm = nj, gm = Fp
                        } else {
                          var Gp = C(mj), Zs = O.j(Gp, 0, null), $s = O.j(Gp, 1, null), km = py(d, Zs), Hp = O.j(km, 0, null);
                          O.j(km, 1, null);
                          var Ip = XE(e, Hp, g), at = O.j(Ip, 0, null), Jp = O.j(Ip, 1, null), oj = a;
                          CE(oj, q(y) ? $s : 1);
                          tE(oj);
                          oj.moveTo(dm - 1, Bp);
                          oj.lineTo(at + 1, Jp);
                          vE(oj);
                          em = F(mj);
                          fm = null;
                          gm = 0;
                        }
                        lj = 0;
                      } else {
                        break;
                      }
                    }
                  }
                  Of = F(Wh);
                  ue = null;
                  Pf = 0;
                }
                ve = 0;
              } else {
                break;
              }
            }
          }
          D = F(Db);
          G = null;
          J = 0;
        }
        L = 0;
      } else {
        break;
      }
    }
  }
  uE(a);
}
function iF(a, b, c) {
  return ck(function(a) {
    var e = O.j(a, 0, null);
    a = O.j(a, 1, null);
    return new T(null, 2, 5, U, [a >= c ? $n : nl, q(b.g ? b.g(e) : b.call(null, e)) ? oq : ek], null);
  }, a);
}
function jF(a, b, c) {
  if (a ? a.Ic : a) {
    return a.Ic(a, b, c);
  }
  var d;
  d = jF[m(null == a ? null : a)];
  if (!d && (d = jF._, !d)) {
    throw r("PCellsSegmentsLayout.seg-xy", a);
  }
  return d.call(null, a, b, c);
}
function kF(a, b) {
  if (a ? a.pd : a) {
    return a.pd(a, b);
  }
  var c;
  c = kF[m(null == a ? null : a)];
  if (!c && (c = kF._, !c)) {
    throw r("PCellsSegmentsLayout.cell-xy", a);
  }
  return c.call(null, a, b);
}
function lF(a, b, c) {
  a = Jg.j(Gh, Ng.g(a), Hj.g(b));
  return gh.h(function() {
    return function(a) {
      return zf(Mg.h(ke, zf(ly(c, a))));
    };
  }(a), a);
}
var nF = function mF(b, c, d, e, f, g) {
  var h = Jg.h(K, c), l = Jg.h(yg.h(Re, 1), h), p = R.h(Ne, l), t = f + ih.h(g, new T(null, 2, 5, U, [fr, Xk], null)), s = ih.h(g, new T(null, 2, 5, U, [fr, ns], null)), w = .5 * s, A = ih.h(g, new T(null, 2, 5, U, [fr, ws], null)), y = ih.h(g, new T(null, 2, 5, U, [fr, Al], null)), D = ih.h(g, new T(null, 2, 5, U, [fr, jk], null)), G = .5 * D, J = .95 * window.innerHeight, L = window.pageYOffset + 2 * A, N = XE(d, b, e), $ = O.j(N, 0, null), ba = O.j(N, 1, null);
  "undefined" === typeof FE && (FE = function(b, c, d, e, f, g, h, l, p, t, s, w, y, A, D, G, J, L, N, $, ba, Ub, od) {
    this.Ye = b;
    this.sf = c;
    this.Qf = d;
    this.Rf = e;
    this.se = f;
    this.Ig = g;
    this.of = h;
    this.Od = l;
    this.yf = p;
    this.Hg = t;
    this.Tf = s;
    this.og = w;
    this.Qg = y;
    this.Ie = A;
    this.Nd = D;
    this.Xe = G;
    this.Jg = J;
    this.Pf = L;
    this.tf = N;
    this.sg = $;
    this.pf = ba;
    this.te = Ub;
    this.bg = od;
    this.G = 0;
    this.t = 393216;
  }, FE.eb = !0, FE.cb = "comportexviz.viz-canvas/t20010", FE.jb = function() {
    return function(b, c) {
      return xc(c, "comportexviz.viz-canvas/t20010");
    };
  }(h, l, p, t, s, w, A, y, D, G, J, L, N, $, ba), FE.prototype.Ic = function() {
    return function(b, c, d) {
      b = R.j(Ne, d, Kg.h(c, this.Ye)) / this.Xe;
      return new T(null, 2, 5, U, [this.tf + this.sf, this.pf + 20 + b * this.of], null);
    };
  }(h, l, p, t, s, w, A, y, D, G, J, L, N, $, ba), FE.prototype.pd = function() {
    return function(b, c) {
      var d = jF(this, c, 0);
      O.j(d, 0, null);
      d = O.j(d, 1, null);
      return new T(null, 2, 5, U, [this.te, d], null);
    };
  }(h, l, p, t, s, w, A, y, D, G, J, L, N, $, ba), FE.prototype.qd = function() {
    return function(b, c, d) {
      d = kF(this, d);
      b = O.j(d, 0, null);
      d = O.j(d, 1, null);
      tE(c);
      c.moveTo(this.Nd + this.Ie + 1, this.Od);
      var e = this.Nd, f = (b - e) / 3;
      EE.bb(c, b - f, this.Od, e + f, d, b, d);
      vE(c);
      return c;
    };
  }(h, l, p, t, s, w, A, y, D, G, J, L, N, $, ba), FE.prototype.lc = function() {
    return function(b, c, d, e) {
      var f = kF(this, d);
      b = O.j(f, 0, null);
      f = O.j(f, 1, null);
      e = jF(this, d, e);
      d = O.j(e, 0, null);
      e = O.j(e, 1, null);
      tE(c);
      c.moveTo(d, e);
      c.lineTo(b + this.se, f);
      vE(c);
      return c;
    };
  }(h, l, p, t, s, w, A, y, D, G, J, L, N, $, ba), FE.prototype.H = function() {
    return function() {
      return this.bg;
    };
  }(h, l, p, t, s, w, A, y, D, G, J, L, N, $, ba), FE.prototype.I = function() {
    return function(b, c) {
      return new FE(this.Ye, this.sf, this.Qf, this.Rf, this.se, this.Ig, this.of, this.Od, this.yf, this.Hg, this.Tf, this.og, this.Qg, this.Ie, this.Nd, this.Xe, this.Jg, this.Pf, this.tf, this.sg, this.pf, this.te, c);
    };
  }(h, l, p, t, s, w, A, y, D, G, J, L, N, $, ba));
  return new FE(l, G, s, d, A, D, J, ba, mF, y, e, h, N, w, $, p, c, b, t, g, L, f, null);
};
function oF(a, b, c, d, e, f, g, h) {
  a.save();
  var l = Jx(c), p = Tl.g(l), t = Gl.g(l), s = ds.g(b), w = Vr.g(b), A = ds.g(c), y = Vr.g(c), D = $x(w), G = $x(y), J = dy(y), L = Fl.g(w), N = Tq.g(w), $ = P.h(Zx(w), e), ba = P.h(Yx(w), e), M = Cq.g(w), ka = lF(e, Xx(w), M), W = nF(e, ka, d, f, g, h), fa = ih.h(h, new T(null, 2, 5, U, [fr, ns], null)), ea = ih.h(h, new T(null, 2, 5, U, [fr, ws], null)), ta = ih.h(h, new T(null, 2, 5, U, [fr, Al], null)), na = ih.h(h, new T(null, 2, 5, U, [fr, jk], null)), Da = .5 * na;
  a.lineWidth = fa;
  BE(a, Wn.g(Z));
  for (var ya = B(zg(Gh, ka)), Ba = null, Ga = 0, oa = 0;;) {
    if (oa < Ga) {
      var Qa = Ba.F(null, oa), wa = O.j(Qa, 0, null), ib = O.j(Qa, 1, null);
      W.qd(null, a, wa);
      for (var vb = B(Hj.g(K(ib))), Ma = null, Ua = 0, ua = 0;;) {
        if (ua < Ua) {
          var Jb = Ma.F(null, ua);
          W.lc(null, a, wa, Jb);
          ua += 1;
        } else {
          var Cd = B(vb);
          if (Cd) {
            var Ub = Cd;
            if (S(Ub)) {
              var od = x(Ub), ha = z(Ub), Hf = od, Og = K(od), vb = ha, Ma = Hf, Ua = Og
            } else {
              var Pg = C(Ub);
              W.lc(null, a, wa, Pg);
              vb = F(Ub);
              Ma = null;
              Ua = 0;
            }
            ua = 0;
          } else {
            break;
          }
        }
      }
      oa += 1;
    } else {
      var re = B(ya);
      if (re) {
        var Sc = re;
        if (S(Sc)) {
          var Kc = x(Sc), hc = z(Sc), se = Kc, te = K(Kc), ya = hc, Ba = se, Ga = te
        } else {
          var Qd = C(Sc), Mb = O.j(Qd, 0, null), Bc = O.j(Qd, 1, null);
          W.qd(null, a, Mb);
          for (var Rd = B(Hj.g(K(Bc))), If = null, Sd = 0, Cc = 0;;) {
            if (Cc < Sd) {
              var Lc = If.F(null, Cc);
              W.lc(null, a, Mb, Lc);
              Cc += 1;
            } else {
              var rc = B(Rd);
              if (rc) {
                var hd = rc;
                if (S(hd)) {
                  var Xe = x(hd), Qg = z(hd), ac = Xe, Qh = K(Xe), Rd = Qg, If = ac, Sd = Qh
                } else {
                  var Jf = C(hd);
                  W.lc(null, a, Mb, Jf);
                  Rd = F(hd);
                  If = null;
                  Sd = 0;
                }
                Cc = 0;
              } else {
                break;
              }
            }
          }
          ya = F(Sc);
          Ba = null;
          Ga = 0;
        }
        oa = 0;
      } else {
        break;
      }
    }
  }
  for (var vd = B(zg(Gh, ka)), id = null, kb = 0, ic = 0;;) {
    if (ic < kb) {
      var Td = id.F(null, ic), bc = O.j(Td, 0, null), Kf = O.j(Td, 1, null), la = W.pd(null, bc), Ud = O.j(la, 0, null), jd = O.j(la, 1, null), kd = new T(null, 2, 5, U, [e, bc], null), Tc = function() {
        var a = kd;
        return D.g ? D.g(a) : D.call(null, a);
      }(), wd = function() {
        var a = kd;
        return J.g ? J.g(a) : J.call(null, a);
      }(), jc = De(N, kd), qb = function() {
        var a = De(L, kd);
        return q(a) ? a : jc;
      }(), Mc = q(qb) ? Qb(qb) : null, xd = gh.h(function(a, b, c, d, e, f, g, h, l, p, t, s, w, y, A, M, D, G, J, rb, W, L, N, $, ka) {
        return function(a) {
          return iF(a, ka, J);
        };
      }(vd, id, kb, ic, la, Ud, jd, kd, Tc, wd, jc, qb, Mc, Td, bc, Kf, l, p, t, s, w, A, y, D, G, J, L, N, $, ba, M, ka, W, fa, ea, ta, na, Da), Kf), Ye = function(a, b, c, d, e, f, g, h, l, p, t, s, w, y, A, M, D, G, J) {
        return function(a) {
          var b = new T(null, 2, 5, U, [$n, oq], null);
          a = a.g ? a.g(b) : a.call(null, b);
          return K(a) >= J;
        };
      }(vd, id, kb, ic, la, Ud, jd, kd, Tc, wd, jc, qb, Mc, xd, Td, bc, Kf, l, p, t, s, w, A, y, D, G, J, L, N, $, ba, M, ka, W, fa, ea, ta, na, Da), Ze = q(function() {
        var a = Tc;
        return q(a) ? wd : a;
      }()) ? jp : q(wd) ? wr : q(Tc) ? oq : ek;
      if (q(Tc)) {
        var Lf = a;
        BE(Lf, oq.g(Z));
        Lf.lineWidth = 2;
        W.qd(null, a, bc);
      }
      if (q(qb)) {
        var $e = a;
        AE($e, xl.g(Z));
        tE($e);
        $e.arc(Ud, jd, ea + 8, 0, 2 * Math.PI, !0);
        $e.fill();
      }
      var yd = a;
      AE(yd, function() {
        var a = Ze;
        return Z.g ? Z.g(a) : Z.call(null, a);
      }());
      BE(yd, "black");
      yd.lineWidth = 1;
      tE(yd);
      yd.arc(Ud, jd, ea, 0, 2 * Math.PI, !0);
      vE(yd);
      yd.fill();
      AE(a, "black");
      zE(a, new n(null, 3, [As, "cell " + u.g(bc) + u.g(q(qb) ? "   (learning on " + u.g(q(Mc) ? "segment " + u.g(Mc) : "new segment") + u.g(q(jc) ? " alternatively" : null) + ")" : null), pr, Ud, fk, jd - ea - 5], null));
      for (var Mf = B(zg(Gh, xd)), Vd = null, sc = 0, cc = 0;;) {
        if (cc < sc) {
          var zd = Vd.F(null, cc), af = O.j(zd, 0, null), Pa = O.j(zd, 1, null), ld = W.Ic(null, bc, af), dc = O.j(ld, 0, null), Db = O.j(ld, 1, null), Nf = K(function() {
            var a = new T(null, 2, 5, U, [$n, oq], null);
            return Pa.g ? Pa.g(a) : Pa.call(null, a);
          }()), Rg = Nf + K(function() {
            var a = new T(null, 2, 5, U, [$n, ek], null);
            return Pa.g ? Pa.g(a) : Pa.call(null, a);
          }()), Wd = K(function() {
            var a = new T(null, 2, 5, U, [nl, oq], null);
            return Pa.g ? Pa.g(a) : Pa.call(null, a);
          }()), Rh = Wd + K(function() {
            var a = new T(null, 2, 5, U, [nl, ek], null);
            return Pa.g ? Pa.g(a) : Pa.call(null, a);
          }()), Xd = function() {
            var a = Nf / p;
            return 1 > a ? a : 1;
          }(), Of = function() {
            var a = qb;
            return q(a) ? md.h(af, Mc) : a;
          }(), ue = aF(dc, Db, na, ta), Pf = aF(dc, Db, na + 8, ta + 8);
          if (q(Of)) {
            var ve = a;
            AE(ve, xl.g(Z));
            yE(ve, Pf);
          }
          var Yb = a;
          CE(Yb, 1);
          BE(Yb, "black");
          Yb.lineWidth = 1;
          xE(Yb, ue);
          AE(Yb, "white");
          yE(Yb, ue);
          CE(Yb, Xd);
          AE(Yb, oq.g(Z));
          yE(Yb, ue);
          CE(Yb, 1);
          if (Ye(Pa)) {
            var Qf = a;
            BE(Qf, oq.g(Z));
            Qf.lineWidth = 2;
            W.lc(null, a, bc, af);
          }
          AE(a, "black");
          zE(a, new n(null, 3, [As, "[" + u.g(af) + "],  active " + u.g(Nf) + " / " + u.g(Rg) + " conn. (" + u.g(Wd) + " / " + u.g(Rh) + " disconn.)", pr, dc + 5 + Da, fk, Db], null));
          a.lineWidth = 1;
          var Dc = ih.h(h, new T(null, 2, 5, U, [rl, Xr], null)), bf = ih.h(h, new T(null, 2, 5, U, [rl, oq], null)), Yd = ih.h(h, new T(null, 2, 5, U, [rl, ek], null)), Rf = ih.h(h, new T(null, 2, 5, U, [rl, nl], null)), Sf = ih.h(h, new T(null, 2, 5, U, [rl, kq], null));
          if (q(function() {
            var a = md.h(Sf, Go);
            return a ? a : (a = md.h(Sf, Uo)) ? Of : a;
          }())) {
            for (var we = B(ig.h(q(Yd) ? new T(null, 1, 5, U, [ek], null) : null, q(bf) ? new T(null, 1, 5, U, [oq], null) : null)), cf = null, df = 0, Nc = 0;;) {
              if (Nc < df) {
                for (var tc = cf.F(null, Nc), Tf = B(ig.h(q(Rf) ? new T(null, 1, 5, U, [nl], null) : null, new T(null, 1, 5, U, [$n], null))), Sg = null, Sh = 0, Tg = 0;;) {
                  if (Tg < Sh) {
                    var ef = Sg.F(null, Tg), $l = function() {
                      var a = new T(null, 2, 5, U, [ef, tc], null);
                      return Pa.g ? Pa.g(a) : Pa.call(null, a);
                    }();
                    BE(a, function() {
                      var a = tc;
                      return Z.g ? Z.g(a) : Z.call(null, a);
                    }());
                    for (var Uf = B($l), ff = null, Th = 0, Zd = 0;;) {
                      if (Zd < Th) {
                        var jj = ff.F(null, Zd), Ek = O.j(jj, 0, null), am = O.j(Ek, 0, null);
                        O.j(Ek, 1, null);
                        var rb = O.j(jj, 1, null), bm = XE(d, am, f + 1), Rs = O.j(bm, 0, null), Ss = O.j(bm, 1, null), Uh = a;
                        CE(Uh, q(Dc) ? rb : 1);
                        tE(Uh);
                        Uh.moveTo(dc, Db);
                        Uh.lineTo(Rs + 1, Ss);
                        vE(Uh);
                        Zd += 1;
                      } else {
                        var wp = B(Uf);
                        if (wp) {
                          var Vh = wp;
                          if (S(Vh)) {
                            var xp = x(Vh), Ts = z(Vh), kj = xp, yp = K(xp), Uf = Ts, ff = kj, Th = yp
                          } else {
                            var Wh = C(Vh), cm = O.j(Wh, 0, null), Us = O.j(cm, 0, null);
                            O.j(cm, 1, null);
                            var Vs = O.j(Wh, 1, null), zp = XE(d, Us, f + 1), Fk = O.j(zp, 0, null), Ws = O.j(zp, 1, null), Ug = a;
                            CE(Ug, q(Dc) ? Vs : 1);
                            tE(Ug);
                            Ug.moveTo(dc, Db);
                            Ug.lineTo(Fk + 1, Ws);
                            vE(Ug);
                            Uf = F(Vh);
                            ff = null;
                            Th = 0;
                          }
                          Zd = 0;
                        } else {
                          break;
                        }
                      }
                    }
                    CE(a, 1);
                    Tg += 1;
                  } else {
                    var Ap = B(Tf);
                    if (Ap) {
                      var Xh = Ap;
                      if (S(Xh)) {
                        var dm = x(Xh), Bp = z(Xh), em = dm, fm = K(dm), Tf = Bp, Sg = em, Sh = fm
                      } else {
                        var gm = C(Xh), lj = function() {
                          var a = new T(null, 2, 5, U, [gm, tc], null);
                          return Pa.g ? Pa.g(a) : Pa.call(null, a);
                        }();
                        BE(a, function() {
                          var a = tc;
                          return Z.g ? Z.g(a) : Z.call(null, a);
                        }());
                        for (var Gk = B(lj), hm = null, im = 0, Yh = 0;;) {
                          if (Yh < im) {
                            var Cp = hm.F(null, Yh), jm = O.j(Cp, 0, null), Xs = O.j(jm, 0, null);
                            O.j(jm, 1, null);
                            var Ys = O.j(Cp, 1, null), Zh = XE(d, Xs, f + 1), Dp = O.j(Zh, 0, null), mj = O.j(Zh, 1, null), $h = a;
                            CE($h, q(Dc) ? Ys : 1);
                            tE($h);
                            $h.moveTo(dc, Db);
                            $h.lineTo(Dp + 1, mj);
                            vE($h);
                            Yh += 1;
                          } else {
                            var Ep = B(Gk);
                            if (Ep) {
                              var nj = Ep;
                              if (S(nj)) {
                                var Fp = x(nj), Gp = z(nj), Zs = Fp, $s = K(Fp), Gk = Gp, hm = Zs, im = $s
                              } else {
                                var km = C(nj), Hp = O.j(km, 0, null), Ip = O.j(Hp, 0, null);
                                O.j(Hp, 1, null);
                                var at = O.j(km, 1, null), Jp = XE(d, Ip, f + 1), oj = O.j(Jp, 0, null), MG = O.j(Jp, 1, null), lm = a;
                                CE(lm, q(Dc) ? at : 1);
                                tE(lm);
                                lm.moveTo(dc, Db);
                                lm.lineTo(oj + 1, MG);
                                vE(lm);
                                Gk = F(nj);
                                hm = null;
                                im = 0;
                              }
                              Yh = 0;
                            } else {
                              break;
                            }
                          }
                        }
                        CE(a, 1);
                        Tf = F(Xh);
                        Sg = null;
                        Sh = 0;
                      }
                      Tg = 0;
                    } else {
                      break;
                    }
                  }
                }
                Nc += 1;
              } else {
                var Fy = B(we);
                if (Fy) {
                  var mm = Fy;
                  if (S(mm)) {
                    var Gy = x(mm), RG = z(mm), SG = Gy, TG = K(Gy), we = RG, cf = SG, df = TG
                  } else {
                    for (var Mp = C(mm), bt = B(ig.h(q(Rf) ? new T(null, 1, 5, U, [nl], null) : null, new T(null, 1, 5, U, [$n], null))), ct = null, dt = 0, nm = 0;;) {
                      if (nm < dt) {
                        var Np = ct.F(null, nm), UG = function() {
                          var a = new T(null, 2, 5, U, [Np, Mp], null);
                          return Pa.g ? Pa.g(a) : Pa.call(null, a);
                        }();
                        BE(a, function() {
                          var a = Mp;
                          return Z.g ? Z.g(a) : Z.call(null, a);
                        }());
                        for (var et = B(UG), ft = null, gt = 0, om = 0;;) {
                          if (om < gt) {
                            var Hy = ft.F(null, om), Iy = O.j(Hy, 0, null), Op = O.j(Iy, 0, null);
                            O.j(Iy, 1, null);
                            var VG = O.j(Hy, 1, null), Jy = XE(d, Op, f + 1), WG = O.j(Jy, 0, null), XG = O.j(Jy, 1, null), pm = a;
                            CE(pm, q(Dc) ? VG : 1);
                            tE(pm);
                            pm.moveTo(dc, Db);
                            pm.lineTo(WG + 1, XG);
                            vE(pm);
                            om += 1;
                          } else {
                            var Ky = B(et);
                            if (Ky) {
                              var ai = Ky;
                              if (S(ai)) {
                                var Ly = x(ai), YG = z(ai), ZG = Ly, $G = K(Ly), et = YG, ft = ZG, gt = $G
                              } else {
                                var My = C(ai), Ny = O.j(My, 0, null), aH = O.j(Ny, 0, null);
                                O.j(Ny, 1, null);
                                var Pp = O.j(My, 1, null), Oy = XE(d, aH, f + 1), bH = O.j(Oy, 0, null), cH = O.j(Oy, 1, null), qm = a;
                                CE(qm, q(Dc) ? Pp : 1);
                                tE(qm);
                                qm.moveTo(dc, Db);
                                qm.lineTo(bH + 1, cH);
                                vE(qm);
                                et = F(ai);
                                ft = null;
                                gt = 0;
                              }
                              om = 0;
                            } else {
                              break;
                            }
                          }
                        }
                        CE(a, 1);
                        nm += 1;
                      } else {
                        var Py = B(bt);
                        if (Py) {
                          var rm = Py;
                          if (S(rm)) {
                            var Qy = x(rm), dH = z(rm), eH = Qy, fH = K(Qy), bt = dH, ct = eH, dt = fH
                          } else {
                            var gH = C(rm), hH = function() {
                              var a = new T(null, 2, 5, U, [gH, Mp], null);
                              return Pa.g ? Pa.g(a) : Pa.call(null, a);
                            }();
                            BE(a, function() {
                              var a = Mp;
                              return Z.g ? Z.g(a) : Z.call(null, a);
                            }());
                            for (var ht = B(hH), it = null, jt = 0, sm = 0;;) {
                              if (sm < jt) {
                                var Ry = it.F(null, sm), Sy = O.j(Ry, 0, null), iH = O.j(Sy, 0, null);
                                O.j(Sy, 1, null);
                                var jH = O.j(Ry, 1, null), Ty = XE(d, iH, f + 1), kH = O.j(Ty, 0, null), lH = O.j(Ty, 1, null), tm = a;
                                CE(tm, q(Dc) ? jH : 1);
                                tE(tm);
                                tm.moveTo(dc, Db);
                                tm.lineTo(kH + 1, lH);
                                vE(tm);
                                sm += 1;
                              } else {
                                var Uy = B(ht);
                                if (Uy) {
                                  var um = Uy;
                                  if (S(um)) {
                                    var Vy = x(um), mH = z(um), nH = Vy, oH = K(Vy), ht = mH, it = nH, jt = oH
                                  } else {
                                    var Wy = C(um), Xy = O.j(Wy, 0, null), pH = O.j(Xy, 0, null);
                                    O.j(Xy, 1, null);
                                    var qH = O.j(Wy, 1, null), Yy = XE(d, pH, f + 1), rH = O.j(Yy, 0, null), sH = O.j(Yy, 1, null), vm = a;
                                    CE(vm, q(Dc) ? qH : 1);
                                    tE(vm);
                                    vm.moveTo(dc, Db);
                                    vm.lineTo(rH + 1, sH);
                                    vE(vm);
                                    ht = F(um);
                                    it = null;
                                    jt = 0;
                                  }
                                  sm = 0;
                                } else {
                                  break;
                                }
                              }
                            }
                            CE(a, 1);
                            bt = F(rm);
                            ct = null;
                            dt = 0;
                          }
                          nm = 0;
                        } else {
                          break;
                        }
                      }
                    }
                    we = F(mm);
                    cf = null;
                    df = 0;
                  }
                  Nc = 0;
                } else {
                  break;
                }
              }
            }
          }
          cc += 1;
        } else {
          var Zy = B(Mf);
          if (Zy) {
            var wm = Zy;
            if (S(wm)) {
              var $y = x(wm), tH = z(wm), uH = $y, vH = K($y), Mf = tH, Vd = uH, sc = vH
            } else {
              var az = C(wm), Qp = O.j(az, 0, null), Eb = O.j(az, 1, null), bz = W.Ic(null, bc, Qp), gf = O.j(bz, 0, null), hf = O.j(bz, 1, null), kt = K(function() {
                var a = new T(null, 2, 5, U, [$n, oq], null);
                return Eb.g ? Eb.g(a) : Eb.call(null, a);
              }()), wH = kt + K(function() {
                var a = new T(null, 2, 5, U, [$n, ek], null);
                return Eb.g ? Eb.g(a) : Eb.call(null, a);
              }()), cz = K(function() {
                var a = new T(null, 2, 5, U, [nl, oq], null);
                return Eb.g ? Eb.g(a) : Eb.call(null, a);
              }()), xH = cz + K(function() {
                var a = new T(null, 2, 5, U, [nl, ek], null);
                return Eb.g ? Eb.g(a) : Eb.call(null, a);
              }()), yH = function() {
                var a = kt / p;
                return 1 > a ? a : 1;
              }(), dz = function() {
                var a = qb;
                return q(a) ? md.h(Qp, Mc) : a;
              }(), lt = aF(gf, hf, na, ta), zH = aF(gf, hf, na + 8, ta + 8);
              if (q(dz)) {
                var ez = a;
                AE(ez, xl.g(Z));
                yE(ez, zH);
              }
              var Vf = a;
              CE(Vf, 1);
              BE(Vf, "black");
              Vf.lineWidth = 1;
              xE(Vf, lt);
              AE(Vf, "white");
              yE(Vf, lt);
              CE(Vf, yH);
              AE(Vf, oq.g(Z));
              yE(Vf, lt);
              CE(Vf, 1);
              if (Ye(Eb)) {
                var fz = a;
                BE(fz, oq.g(Z));
                fz.lineWidth = 2;
                W.lc(null, a, bc, Qp);
              }
              AE(a, "black");
              zE(a, new n(null, 3, [As, "[" + u.g(Qp) + "],  active " + u.g(kt) + " / " + u.g(wH) + " conn. (" + u.g(cz) + " / " + u.g(xH) + " disconn.)", pr, gf + 5 + Da, fk, hf], null));
              a.lineWidth = 1;
              var bi = ih.h(h, new T(null, 2, 5, U, [rl, Xr], null)), AH = ih.h(h, new T(null, 2, 5, U, [rl, oq], null)), BH = ih.h(h, new T(null, 2, 5, U, [rl, ek], null)), gz = ih.h(h, new T(null, 2, 5, U, [rl, nl], null)), hz = ih.h(h, new T(null, 2, 5, U, [rl, kq], null));
              if (q(function() {
                var a = md.h(hz, Go);
                return a ? a : (a = md.h(hz, Uo)) ? dz : a;
              }())) {
                for (var mt = B(ig.h(q(BH) ? new T(null, 1, 5, U, [ek], null) : null, q(AH) ? new T(null, 1, 5, U, [oq], null) : null)), nt = null, ot = 0, xm = 0;;) {
                  if (xm < ot) {
                    for (var Rp = nt.F(null, xm), pt = B(ig.h(q(gz) ? new T(null, 1, 5, U, [nl], null) : null, new T(null, 1, 5, U, [$n], null))), qt = null, rt = 0, ym = 0;;) {
                      if (ym < rt) {
                        var CH = qt.F(null, ym), DH = function() {
                          var a = new T(null, 2, 5, U, [CH, Rp], null);
                          return Eb.g ? Eb.g(a) : Eb.call(null, a);
                        }();
                        BE(a, function() {
                          var a = Rp;
                          return Z.g ? Z.g(a) : Z.call(null, a);
                        }());
                        for (var st = B(DH), tt = null, ut = 0, zm = 0;;) {
                          if (zm < ut) {
                            var iz = tt.F(null, zm), jz = O.j(iz, 0, null), EH = O.j(jz, 0, null);
                            O.j(jz, 1, null);
                            var FH = O.j(iz, 1, null), kz = XE(d, EH, f + 1), GH = O.j(kz, 0, null), HH = O.j(kz, 1, null), Am = a;
                            CE(Am, q(bi) ? FH : 1);
                            tE(Am);
                            Am.moveTo(gf, hf);
                            Am.lineTo(GH + 1, HH);
                            vE(Am);
                            zm += 1;
                          } else {
                            var lz = B(st);
                            if (lz) {
                              var Bm = lz;
                              if (S(Bm)) {
                                var mz = x(Bm), IH = z(Bm), JH = mz, KH = K(mz), st = IH, tt = JH, ut = KH
                              } else {
                                var nz = C(Bm), oz = O.j(nz, 0, null), LH = O.j(oz, 0, null);
                                O.j(oz, 1, null);
                                var MH = O.j(nz, 1, null), pz = XE(d, LH, f + 1), NH = O.j(pz, 0, null), OH = O.j(pz, 1, null), Cm = a;
                                CE(Cm, q(bi) ? MH : 1);
                                tE(Cm);
                                Cm.moveTo(gf, hf);
                                Cm.lineTo(NH + 1, OH);
                                vE(Cm);
                                st = F(Bm);
                                tt = null;
                                ut = 0;
                              }
                              zm = 0;
                            } else {
                              break;
                            }
                          }
                        }
                        CE(a, 1);
                        ym += 1;
                      } else {
                        var qz = B(pt);
                        if (qz) {
                          var Dm = qz;
                          if (S(Dm)) {
                            var rz = x(Dm), PH = z(Dm), QH = rz, RH = K(rz), pt = PH, qt = QH, rt = RH
                          } else {
                            var SH = C(Dm), TH = function() {
                              var a = new T(null, 2, 5, U, [SH, Rp], null);
                              return Eb.g ? Eb.g(a) : Eb.call(null, a);
                            }();
                            BE(a, function() {
                              var a = Rp;
                              return Z.g ? Z.g(a) : Z.call(null, a);
                            }());
                            for (var vt = B(TH), wt = null, xt = 0, Em = 0;;) {
                              if (Em < xt) {
                                var sz = wt.F(null, Em), tz = O.j(sz, 0, null), UH = O.j(tz, 0, null);
                                O.j(tz, 1, null);
                                var VH = O.j(sz, 1, null), uz = XE(d, UH, f + 1), WH = O.j(uz, 0, null), XH = O.j(uz, 1, null), Fm = a;
                                CE(Fm, q(bi) ? VH : 1);
                                tE(Fm);
                                Fm.moveTo(gf, hf);
                                Fm.lineTo(WH + 1, XH);
                                vE(Fm);
                                Em += 1;
                              } else {
                                var vz = B(vt);
                                if (vz) {
                                  var Gm = vz;
                                  if (S(Gm)) {
                                    var wz = x(Gm), YH = z(Gm), ZH = wz, $H = K(wz), vt = YH, wt = ZH, xt = $H
                                  } else {
                                    var xz = C(Gm), yz = O.j(xz, 0, null), aI = O.j(yz, 0, null);
                                    O.j(yz, 1, null);
                                    var bI = O.j(xz, 1, null), zz = XE(d, aI, f + 1), cI = O.j(zz, 0, null), dI = O.j(zz, 1, null), Hm = a;
                                    CE(Hm, q(bi) ? bI : 1);
                                    tE(Hm);
                                    Hm.moveTo(gf, hf);
                                    Hm.lineTo(cI + 1, dI);
                                    vE(Hm);
                                    vt = F(Gm);
                                    wt = null;
                                    xt = 0;
                                  }
                                  Em = 0;
                                } else {
                                  break;
                                }
                              }
                            }
                            CE(a, 1);
                            pt = F(Dm);
                            qt = null;
                            rt = 0;
                          }
                          ym = 0;
                        } else {
                          break;
                        }
                      }
                    }
                    xm += 1;
                  } else {
                    var Az = B(mt);
                    if (Az) {
                      var Im = Az;
                      if (S(Im)) {
                        var Bz = x(Im), eI = z(Im), fI = Bz, gI = K(Bz), mt = eI, nt = fI, ot = gI
                      } else {
                        for (var Sp = C(Im), yt = B(ig.h(q(gz) ? new T(null, 1, 5, U, [nl], null) : null, new T(null, 1, 5, U, [$n], null))), zt = null, At = 0, Jm = 0;;) {
                          if (Jm < At) {
                            var hI = zt.F(null, Jm), iI = function() {
                              var a = new T(null, 2, 5, U, [hI, Sp], null);
                              return Eb.g ? Eb.g(a) : Eb.call(null, a);
                            }();
                            BE(a, function() {
                              var a = Sp;
                              return Z.g ? Z.g(a) : Z.call(null, a);
                            }());
                            for (var Bt = B(iI), Ct = null, Dt = 0, Km = 0;;) {
                              if (Km < Dt) {
                                var Cz = Ct.F(null, Km), Dz = O.j(Cz, 0, null), jI = O.j(Dz, 0, null);
                                O.j(Dz, 1, null);
                                var kI = O.j(Cz, 1, null), Ez = XE(d, jI, f + 1), lI = O.j(Ez, 0, null), mI = O.j(Ez, 1, null), Lm = a;
                                CE(Lm, q(bi) ? kI : 1);
                                tE(Lm);
                                Lm.moveTo(gf, hf);
                                Lm.lineTo(lI + 1, mI);
                                vE(Lm);
                                Km += 1;
                              } else {
                                var Fz = B(Bt);
                                if (Fz) {
                                  var Mm = Fz;
                                  if (S(Mm)) {
                                    var Gz = x(Mm), nI = z(Mm), oI = Gz, pI = K(Gz), Bt = nI, Ct = oI, Dt = pI
                                  } else {
                                    var Hz = C(Mm), Iz = O.j(Hz, 0, null), qI = O.j(Iz, 0, null);
                                    O.j(Iz, 1, null);
                                    var rI = O.j(Hz, 1, null), Jz = XE(d, qI, f + 1), sI = O.j(Jz, 0, null), tI = O.j(Jz, 1, null), Nm = a;
                                    CE(Nm, q(bi) ? rI : 1);
                                    tE(Nm);
                                    Nm.moveTo(gf, hf);
                                    Nm.lineTo(sI + 1, tI);
                                    vE(Nm);
                                    Bt = F(Mm);
                                    Ct = null;
                                    Dt = 0;
                                  }
                                  Km = 0;
                                } else {
                                  break;
                                }
                              }
                            }
                            CE(a, 1);
                            Jm += 1;
                          } else {
                            var Kz = B(yt);
                            if (Kz) {
                              var Om = Kz;
                              if (S(Om)) {
                                var Lz = x(Om), uI = z(Om), vI = Lz, wI = K(Lz), yt = uI, zt = vI, At = wI
                              } else {
                                var xI = C(Om), yI = function() {
                                  var a = new T(null, 2, 5, U, [xI, Sp], null);
                                  return Eb.g ? Eb.g(a) : Eb.call(null, a);
                                }();
                                BE(a, function() {
                                  var a = Sp;
                                  return Z.g ? Z.g(a) : Z.call(null, a);
                                }());
                                for (var Et = B(yI), Ft = null, Gt = 0, Pm = 0;;) {
                                  if (Pm < Gt) {
                                    var Mz = Ft.F(null, Pm), Nz = O.j(Mz, 0, null), zI = O.j(Nz, 0, null);
                                    O.j(Nz, 1, null);
                                    var AI = O.j(Mz, 1, null), Oz = XE(d, zI, f + 1), BI = O.j(Oz, 0, null), CI = O.j(Oz, 1, null), Qm = a;
                                    CE(Qm, q(bi) ? AI : 1);
                                    tE(Qm);
                                    Qm.moveTo(gf, hf);
                                    Qm.lineTo(BI + 1, CI);
                                    vE(Qm);
                                    Pm += 1;
                                  } else {
                                    var Pz = B(Et);
                                    if (Pz) {
                                      var Rm = Pz;
                                      if (S(Rm)) {
                                        var Qz = x(Rm), DI = z(Rm), EI = Qz, FI = K(Qz), Et = DI, Ft = EI, Gt = FI
                                      } else {
                                        var Rz = C(Rm), Sz = O.j(Rz, 0, null), GI = O.j(Sz, 0, null);
                                        O.j(Sz, 1, null);
                                        var HI = O.j(Rz, 1, null), Tz = XE(d, GI, f + 1), II = O.j(Tz, 0, null), JI = O.j(Tz, 1, null), Sm = a;
                                        CE(Sm, q(bi) ? HI : 1);
                                        tE(Sm);
                                        Sm.moveTo(gf, hf);
                                        Sm.lineTo(II + 1, JI);
                                        vE(Sm);
                                        Et = F(Rm);
                                        Ft = null;
                                        Gt = 0;
                                      }
                                      Pm = 0;
                                    } else {
                                      break;
                                    }
                                  }
                                }
                                CE(a, 1);
                                yt = F(Om);
                                zt = null;
                                At = 0;
                              }
                              Jm = 0;
                            } else {
                              break;
                            }
                          }
                        }
                        mt = F(Im);
                        nt = null;
                        ot = 0;
                      }
                      xm = 0;
                    } else {
                      break;
                    }
                  }
                }
              }
              Mf = F(wm);
              Vd = null;
              sc = 0;
            }
            cc = 0;
          } else {
            break;
          }
        }
      }
      ic += 1;
    } else {
      var Tp = B(vd);
      if (Tp) {
        var pj = Tp;
        if (S(pj)) {
          var Uz = x(pj), KI = z(pj), LI = Uz, MI = K(Uz), vd = KI, id = LI, kb = MI
        } else {
          var Up = C(pj), Wf = O.j(Up, 0, null), Ht = O.j(Up, 1, null), Vp = W.pd(null, Wf), Tm = O.j(Vp, 0, null), Um = O.j(Vp, 1, null), Hk = new T(null, 2, 5, U, [e, Wf], null), Vm = function() {
            var a = Hk;
            return D.g ? D.g(a) : D.call(null, a);
          }(), Wp = function() {
            var a = Hk;
            return J.g ? J.g(a) : J.call(null, a);
          }(), Xp = De(N, Hk), ci = function() {
            var a = De(L, Hk);
            return q(a) ? a : Xp;
          }(), Ik = q(ci) ? Qb(ci) : null, Vz = gh.h(function(a, b, c, d, e, f, g, h, l, p, t, s, w, y, A, M, D, G, J, rb, W, L, N, $, ka, ba, ea) {
            return function(a) {
              return iF(a, ea, W);
            };
          }(vd, id, kb, ic, Vp, Tm, Um, Hk, Vm, Wp, Xp, ci, Ik, Up, Wf, Ht, pj, Tp, l, p, t, s, w, A, y, D, G, J, L, N, $, ba, M, ka, W, fa, ea, ta, na, Da), Ht), Wz = function(a, b, c, d, e, f, g, h, l, p, t, s, w, y, A, M, D, G, J, rb, W) {
            return function(a) {
              var b = new T(null, 2, 5, U, [$n, oq], null);
              a = a.g ? a.g(b) : a.call(null, b);
              return K(a) >= W;
            };
          }(vd, id, kb, ic, Vp, Tm, Um, Hk, Vm, Wp, Xp, ci, Ik, Vz, Up, Wf, Ht, pj, Tp, l, p, t, s, w, A, y, D, G, J, L, N, $, ba, M, ka, W, fa, ea, ta, na, Da), NI = q(function() {
            var a = Vm;
            return q(a) ? Wp : a;
          }()) ? jp : q(Wp) ? wr : q(Vm) ? oq : ek;
          if (q(Vm)) {
            var Xz = a;
            BE(Xz, oq.g(Z));
            Xz.lineWidth = 2;
            W.qd(null, a, Wf);
          }
          if (q(ci)) {
            var Yp = a;
            AE(Yp, xl.g(Z));
            tE(Yp);
            Yp.arc(Tm, Um, ea + 8, 0, 2 * Math.PI, !0);
            Yp.fill();
          }
          var qj = a;
          AE(qj, function() {
            var a = NI;
            return Z.g ? Z.g(a) : Z.call(null, a);
          }());
          BE(qj, "black");
          qj.lineWidth = 1;
          tE(qj);
          qj.arc(Tm, Um, ea, 0, 2 * Math.PI, !0);
          vE(qj);
          qj.fill();
          AE(a, "black");
          zE(a, new n(null, 3, [As, "cell " + u.g(Wf) + u.g(q(ci) ? "   (learning on " + u.g(q(Ik) ? "segment " + u.g(Ik) : "new segment") + u.g(q(Xp) ? " alternatively" : null) + ")" : null), pr, Tm, fk, Um - ea - 5], null));
          for (var It = B(zg(Gh, Vz)), Jt = null, Kt = 0, Wm = 0;;) {
            if (Wm < Kt) {
              var Yz = Jt.F(null, Wm), Zp = O.j(Yz, 0, null), Fb = O.j(Yz, 1, null), Zz = W.Ic(null, Wf, Zp), jf = O.j(Zz, 0, null), kf = O.j(Zz, 1, null), Lt = K(function() {
                var a = new T(null, 2, 5, U, [$n, oq], null);
                return Fb.g ? Fb.g(a) : Fb.call(null, a);
              }()), OI = Lt + K(function() {
                var a = new T(null, 2, 5, U, [$n, ek], null);
                return Fb.g ? Fb.g(a) : Fb.call(null, a);
              }()), $z = K(function() {
                var a = new T(null, 2, 5, U, [nl, oq], null);
                return Fb.g ? Fb.g(a) : Fb.call(null, a);
              }()), PI = $z + K(function() {
                var a = new T(null, 2, 5, U, [nl, ek], null);
                return Fb.g ? Fb.g(a) : Fb.call(null, a);
              }()), QI = function() {
                var a = Lt / p;
                return 1 > a ? a : 1;
              }(), aA = function() {
                var a = ci;
                return q(a) ? md.h(Zp, Ik) : a;
              }(), Mt = aF(jf, kf, na, ta), RI = aF(jf, kf, na + 8, ta + 8);
              if (q(aA)) {
                var bA = a;
                AE(bA, xl.g(Z));
                yE(bA, RI);
              }
              var Xf = a;
              CE(Xf, 1);
              BE(Xf, "black");
              Xf.lineWidth = 1;
              xE(Xf, Mt);
              AE(Xf, "white");
              yE(Xf, Mt);
              CE(Xf, QI);
              AE(Xf, oq.g(Z));
              yE(Xf, Mt);
              CE(Xf, 1);
              if (Wz(Fb)) {
                var cA = a;
                BE(cA, oq.g(Z));
                cA.lineWidth = 2;
                W.lc(null, a, Wf, Zp);
              }
              AE(a, "black");
              zE(a, new n(null, 3, [As, "[" + u.g(Zp) + "],  active " + u.g(Lt) + " / " + u.g(OI) + " conn. (" + u.g($z) + " / " + u.g(PI) + " disconn.)", pr, jf + 5 + Da, fk, kf], null));
              a.lineWidth = 1;
              var di = ih.h(h, new T(null, 2, 5, U, [rl, Xr], null)), SI = ih.h(h, new T(null, 2, 5, U, [rl, oq], null)), TI = ih.h(h, new T(null, 2, 5, U, [rl, ek], null)), dA = ih.h(h, new T(null, 2, 5, U, [rl, nl], null)), eA = ih.h(h, new T(null, 2, 5, U, [rl, kq], null));
              if (q(function() {
                var a = md.h(eA, Go);
                return a ? a : (a = md.h(eA, Uo)) ? aA : a;
              }())) {
                for (var Nt = B(ig.h(q(TI) ? new T(null, 1, 5, U, [ek], null) : null, q(SI) ? new T(null, 1, 5, U, [oq], null) : null)), Ot = null, Pt = 0, Xm = 0;;) {
                  if (Xm < Pt) {
                    for (var $p = Ot.F(null, Xm), Qt = B(ig.h(q(dA) ? new T(null, 1, 5, U, [nl], null) : null, new T(null, 1, 5, U, [$n], null))), Rt = null, St = 0, Ym = 0;;) {
                      if (Ym < St) {
                        var UI = Rt.F(null, Ym), VI = function() {
                          var a = new T(null, 2, 5, U, [UI, $p], null);
                          return Fb.g ? Fb.g(a) : Fb.call(null, a);
                        }();
                        BE(a, function() {
                          var a = $p;
                          return Z.g ? Z.g(a) : Z.call(null, a);
                        }());
                        for (var Tt = B(VI), Ut = null, Vt = 0, Zm = 0;;) {
                          if (Zm < Vt) {
                            var fA = Ut.F(null, Zm), gA = O.j(fA, 0, null), WI = O.j(gA, 0, null);
                            O.j(gA, 1, null);
                            var XI = O.j(fA, 1, null), hA = XE(d, WI, f + 1), YI = O.j(hA, 0, null), ZI = O.j(hA, 1, null), $m = a;
                            CE($m, q(di) ? XI : 1);
                            tE($m);
                            $m.moveTo(jf, kf);
                            $m.lineTo(YI + 1, ZI);
                            vE($m);
                            Zm += 1;
                          } else {
                            var iA = B(Tt);
                            if (iA) {
                              var an = iA;
                              if (S(an)) {
                                var jA = x(an), $I = z(an), aJ = jA, bJ = K(jA), Tt = $I, Ut = aJ, Vt = bJ
                              } else {
                                var kA = C(an), lA = O.j(kA, 0, null), cJ = O.j(lA, 0, null);
                                O.j(lA, 1, null);
                                var dJ = O.j(kA, 1, null), mA = XE(d, cJ, f + 1), eJ = O.j(mA, 0, null), fJ = O.j(mA, 1, null), bn = a;
                                CE(bn, q(di) ? dJ : 1);
                                tE(bn);
                                bn.moveTo(jf, kf);
                                bn.lineTo(eJ + 1, fJ);
                                vE(bn);
                                Tt = F(an);
                                Ut = null;
                                Vt = 0;
                              }
                              Zm = 0;
                            } else {
                              break;
                            }
                          }
                        }
                        CE(a, 1);
                        Ym += 1;
                      } else {
                        var nA = B(Qt);
                        if (nA) {
                          var cn = nA;
                          if (S(cn)) {
                            var oA = x(cn), gJ = z(cn), hJ = oA, iJ = K(oA), Qt = gJ, Rt = hJ, St = iJ
                          } else {
                            var jJ = C(cn), kJ = function() {
                              var a = new T(null, 2, 5, U, [jJ, $p], null);
                              return Fb.g ? Fb.g(a) : Fb.call(null, a);
                            }();
                            BE(a, function() {
                              var a = $p;
                              return Z.g ? Z.g(a) : Z.call(null, a);
                            }());
                            for (var Wt = B(kJ), Xt = null, Yt = 0, dn = 0;;) {
                              if (dn < Yt) {
                                var pA = Xt.F(null, dn), qA = O.j(pA, 0, null), lJ = O.j(qA, 0, null);
                                O.j(qA, 1, null);
                                var mJ = O.j(pA, 1, null), rA = XE(d, lJ, f + 1), nJ = O.j(rA, 0, null), oJ = O.j(rA, 1, null), en = a;
                                CE(en, q(di) ? mJ : 1);
                                tE(en);
                                en.moveTo(jf, kf);
                                en.lineTo(nJ + 1, oJ);
                                vE(en);
                                dn += 1;
                              } else {
                                var sA = B(Wt);
                                if (sA) {
                                  var fn = sA;
                                  if (S(fn)) {
                                    var tA = x(fn), pJ = z(fn), qJ = tA, rJ = K(tA), Wt = pJ, Xt = qJ, Yt = rJ
                                  } else {
                                    var uA = C(fn), vA = O.j(uA, 0, null), sJ = O.j(vA, 0, null);
                                    O.j(vA, 1, null);
                                    var tJ = O.j(uA, 1, null), wA = XE(d, sJ, f + 1), uJ = O.j(wA, 0, null), vJ = O.j(wA, 1, null), gn = a;
                                    CE(gn, q(di) ? tJ : 1);
                                    tE(gn);
                                    gn.moveTo(jf, kf);
                                    gn.lineTo(uJ + 1, vJ);
                                    vE(gn);
                                    Wt = F(fn);
                                    Xt = null;
                                    Yt = 0;
                                  }
                                  dn = 0;
                                } else {
                                  break;
                                }
                              }
                            }
                            CE(a, 1);
                            Qt = F(cn);
                            Rt = null;
                            St = 0;
                          }
                          Ym = 0;
                        } else {
                          break;
                        }
                      }
                    }
                    Xm += 1;
                  } else {
                    var xA = B(Nt);
                    if (xA) {
                      var hn = xA;
                      if (S(hn)) {
                        var yA = x(hn), wJ = z(hn), xJ = yA, yJ = K(yA), Nt = wJ, Ot = xJ, Pt = yJ
                      } else {
                        for (var aq = C(hn), Zt = B(ig.h(q(dA) ? new T(null, 1, 5, U, [nl], null) : null, new T(null, 1, 5, U, [$n], null))), $t = null, au = 0, jn = 0;;) {
                          if (jn < au) {
                            var zJ = $t.F(null, jn), AJ = function() {
                              var a = new T(null, 2, 5, U, [zJ, aq], null);
                              return Fb.g ? Fb.g(a) : Fb.call(null, a);
                            }();
                            BE(a, function() {
                              var a = aq;
                              return Z.g ? Z.g(a) : Z.call(null, a);
                            }());
                            for (var bu = B(AJ), cu = null, du = 0, kn = 0;;) {
                              if (kn < du) {
                                var zA = cu.F(null, kn), AA = O.j(zA, 0, null), BJ = O.j(AA, 0, null);
                                O.j(AA, 1, null);
                                var CJ = O.j(zA, 1, null), BA = XE(d, BJ, f + 1), DJ = O.j(BA, 0, null), EJ = O.j(BA, 1, null), ln = a;
                                CE(ln, q(di) ? CJ : 1);
                                tE(ln);
                                ln.moveTo(jf, kf);
                                ln.lineTo(DJ + 1, EJ);
                                vE(ln);
                                kn += 1;
                              } else {
                                var CA = B(bu);
                                if (CA) {
                                  var mn = CA;
                                  if (S(mn)) {
                                    var DA = x(mn), FJ = z(mn), GJ = DA, HJ = K(DA), bu = FJ, cu = GJ, du = HJ
                                  } else {
                                    var EA = C(mn), FA = O.j(EA, 0, null), IJ = O.j(FA, 0, null);
                                    O.j(FA, 1, null);
                                    var JJ = O.j(EA, 1, null), GA = XE(d, IJ, f + 1), KJ = O.j(GA, 0, null), LJ = O.j(GA, 1, null), nn = a;
                                    CE(nn, q(di) ? JJ : 1);
                                    tE(nn);
                                    nn.moveTo(jf, kf);
                                    nn.lineTo(KJ + 1, LJ);
                                    vE(nn);
                                    bu = F(mn);
                                    cu = null;
                                    du = 0;
                                  }
                                  kn = 0;
                                } else {
                                  break;
                                }
                              }
                            }
                            CE(a, 1);
                            jn += 1;
                          } else {
                            var HA = B(Zt);
                            if (HA) {
                              var on = HA;
                              if (S(on)) {
                                var IA = x(on), MJ = z(on), NJ = IA, OJ = K(IA), Zt = MJ, $t = NJ, au = OJ
                              } else {
                                var PJ = C(on), QJ = function() {
                                  var a = new T(null, 2, 5, U, [PJ, aq], null);
                                  return Fb.g ? Fb.g(a) : Fb.call(null, a);
                                }();
                                BE(a, function() {
                                  var a = aq;
                                  return Z.g ? Z.g(a) : Z.call(null, a);
                                }());
                                for (var eu = B(QJ), fu = null, gu = 0, pn = 0;;) {
                                  if (pn < gu) {
                                    var JA = fu.F(null, pn), KA = O.j(JA, 0, null), RJ = O.j(KA, 0, null);
                                    O.j(KA, 1, null);
                                    var SJ = O.j(JA, 1, null), LA = XE(d, RJ, f + 1), TJ = O.j(LA, 0, null), UJ = O.j(LA, 1, null), qn = a;
                                    CE(qn, q(di) ? SJ : 1);
                                    tE(qn);
                                    qn.moveTo(jf, kf);
                                    qn.lineTo(TJ + 1, UJ);
                                    vE(qn);
                                    pn += 1;
                                  } else {
                                    var MA = B(eu);
                                    if (MA) {
                                      var rn = MA;
                                      if (S(rn)) {
                                        var NA = x(rn), VJ = z(rn), WJ = NA, XJ = K(NA), eu = VJ, fu = WJ, gu = XJ
                                      } else {
                                        var OA = C(rn), PA = O.j(OA, 0, null), YJ = O.j(PA, 0, null);
                                        O.j(PA, 1, null);
                                        var ZJ = O.j(OA, 1, null), QA = XE(d, YJ, f + 1), $J = O.j(QA, 0, null), aK = O.j(QA, 1, null), sn = a;
                                        CE(sn, q(di) ? ZJ : 1);
                                        tE(sn);
                                        sn.moveTo(jf, kf);
                                        sn.lineTo($J + 1, aK);
                                        vE(sn);
                                        eu = F(rn);
                                        fu = null;
                                        gu = 0;
                                      }
                                      pn = 0;
                                    } else {
                                      break;
                                    }
                                  }
                                }
                                CE(a, 1);
                                Zt = F(on);
                                $t = null;
                                au = 0;
                              }
                              jn = 0;
                            } else {
                              break;
                            }
                          }
                        }
                        Nt = F(hn);
                        Ot = null;
                        Pt = 0;
                      }
                      Xm = 0;
                    } else {
                      break;
                    }
                  }
                }
              }
              Wm += 1;
            } else {
              var RA = B(It);
              if (RA) {
                var tn = RA;
                if (S(tn)) {
                  var SA = x(tn), bK = z(tn), cK = SA, dK = K(SA), It = bK, Jt = cK, Kt = dK
                } else {
                  var TA = C(tn), bq = O.j(TA, 0, null), Gb = O.j(TA, 1, null), UA = W.Ic(null, Wf, bq), lf = O.j(UA, 0, null), mf = O.j(UA, 1, null), hu = K(function() {
                    var a = new T(null, 2, 5, U, [$n, oq], null);
                    return Gb.g ? Gb.g(a) : Gb.call(null, a);
                  }()), eK = hu + K(function() {
                    var a = new T(null, 2, 5, U, [$n, ek], null);
                    return Gb.g ? Gb.g(a) : Gb.call(null, a);
                  }()), VA = K(function() {
                    var a = new T(null, 2, 5, U, [nl, oq], null);
                    return Gb.g ? Gb.g(a) : Gb.call(null, a);
                  }()), fK = VA + K(function() {
                    var a = new T(null, 2, 5, U, [nl, ek], null);
                    return Gb.g ? Gb.g(a) : Gb.call(null, a);
                  }()), gK = function() {
                    var a = hu / p;
                    return 1 > a ? a : 1;
                  }(), WA = function() {
                    var a = ci;
                    return q(a) ? md.h(bq, Ik) : a;
                  }(), iu = aF(lf, mf, na, ta), hK = aF(lf, mf, na + 8, ta + 8);
                  if (q(WA)) {
                    var XA = a;
                    AE(XA, xl.g(Z));
                    yE(XA, hK);
                  }
                  var Yf = a;
                  CE(Yf, 1);
                  BE(Yf, "black");
                  Yf.lineWidth = 1;
                  xE(Yf, iu);
                  AE(Yf, "white");
                  yE(Yf, iu);
                  CE(Yf, gK);
                  AE(Yf, oq.g(Z));
                  yE(Yf, iu);
                  CE(Yf, 1);
                  if (Wz(Gb)) {
                    var YA = a;
                    BE(YA, oq.g(Z));
                    YA.lineWidth = 2;
                    W.lc(null, a, Wf, bq);
                  }
                  AE(a, "black");
                  zE(a, new n(null, 3, [As, "[" + u.g(bq) + "],  active " + u.g(hu) + " / " + u.g(eK) + " conn. (" + u.g(VA) + " / " + u.g(fK) + " disconn.)", pr, lf + 5 + Da, fk, mf], null));
                  a.lineWidth = 1;
                  var ei = ih.h(h, new T(null, 2, 5, U, [rl, Xr], null)), iK = ih.h(h, new T(null, 2, 5, U, [rl, oq], null)), jK = ih.h(h, new T(null, 2, 5, U, [rl, ek], null)), ZA = ih.h(h, new T(null, 2, 5, U, [rl, nl], null)), $A = ih.h(h, new T(null, 2, 5, U, [rl, kq], null));
                  if (q(function() {
                    var a = md.h($A, Go);
                    return a ? a : (a = md.h($A, Uo)) ? WA : a;
                  }())) {
                    for (var ju = B(ig.h(q(jK) ? new T(null, 1, 5, U, [ek], null) : null, q(iK) ? new T(null, 1, 5, U, [oq], null) : null)), ku = null, lu = 0, un = 0;;) {
                      if (un < lu) {
                        for (var cq = ku.F(null, un), mu = B(ig.h(q(ZA) ? new T(null, 1, 5, U, [nl], null) : null, new T(null, 1, 5, U, [$n], null))), nu = null, ou = 0, vn = 0;;) {
                          if (vn < ou) {
                            var kK = nu.F(null, vn), lK = function() {
                              var a = new T(null, 2, 5, U, [kK, cq], null);
                              return Gb.g ? Gb.g(a) : Gb.call(null, a);
                            }();
                            BE(a, function() {
                              var a = cq;
                              return Z.g ? Z.g(a) : Z.call(null, a);
                            }());
                            for (var pu = B(lK), qu = null, ru = 0, wn = 0;;) {
                              if (wn < ru) {
                                var aB = qu.F(null, wn), bB = O.j(aB, 0, null), mK = O.j(bB, 0, null);
                                O.j(bB, 1, null);
                                var nK = O.j(aB, 1, null), cB = XE(d, mK, f + 1), oK = O.j(cB, 0, null), pK = O.j(cB, 1, null), xn = a;
                                CE(xn, q(ei) ? nK : 1);
                                tE(xn);
                                xn.moveTo(lf, mf);
                                xn.lineTo(oK + 1, pK);
                                vE(xn);
                                wn += 1;
                              } else {
                                var dB = B(pu);
                                if (dB) {
                                  var yn = dB;
                                  if (S(yn)) {
                                    var eB = x(yn), qK = z(yn), rK = eB, sK = K(eB), pu = qK, qu = rK, ru = sK
                                  } else {
                                    var fB = C(yn), gB = O.j(fB, 0, null), tK = O.j(gB, 0, null);
                                    O.j(gB, 1, null);
                                    var uK = O.j(fB, 1, null), hB = XE(d, tK, f + 1), vK = O.j(hB, 0, null), wK = O.j(hB, 1, null), zn = a;
                                    CE(zn, q(ei) ? uK : 1);
                                    tE(zn);
                                    zn.moveTo(lf, mf);
                                    zn.lineTo(vK + 1, wK);
                                    vE(zn);
                                    pu = F(yn);
                                    qu = null;
                                    ru = 0;
                                  }
                                  wn = 0;
                                } else {
                                  break;
                                }
                              }
                            }
                            CE(a, 1);
                            vn += 1;
                          } else {
                            var iB = B(mu);
                            if (iB) {
                              var An = iB;
                              if (S(An)) {
                                var jB = x(An), xK = z(An), yK = jB, zK = K(jB), mu = xK, nu = yK, ou = zK
                              } else {
                                var AK = C(An), BK = function() {
                                  var a = new T(null, 2, 5, U, [AK, cq], null);
                                  return Gb.g ? Gb.g(a) : Gb.call(null, a);
                                }();
                                BE(a, function() {
                                  var a = cq;
                                  return Z.g ? Z.g(a) : Z.call(null, a);
                                }());
                                for (var su = B(BK), tu = null, uu = 0, Bn = 0;;) {
                                  if (Bn < uu) {
                                    var kB = tu.F(null, Bn), lB = O.j(kB, 0, null), CK = O.j(lB, 0, null);
                                    O.j(lB, 1, null);
                                    var DK = O.j(kB, 1, null), mB = XE(d, CK, f + 1), EK = O.j(mB, 0, null), FK = O.j(mB, 1, null), Cn = a;
                                    CE(Cn, q(ei) ? DK : 1);
                                    tE(Cn);
                                    Cn.moveTo(lf, mf);
                                    Cn.lineTo(EK + 1, FK);
                                    vE(Cn);
                                    Bn += 1;
                                  } else {
                                    var nB = B(su);
                                    if (nB) {
                                      var Dn = nB;
                                      if (S(Dn)) {
                                        var oB = x(Dn), GK = z(Dn), HK = oB, IK = K(oB), su = GK, tu = HK, uu = IK
                                      } else {
                                        var pB = C(Dn), qB = O.j(pB, 0, null), JK = O.j(qB, 0, null);
                                        O.j(qB, 1, null);
                                        var KK = O.j(pB, 1, null), rB = XE(d, JK, f + 1), LK = O.j(rB, 0, null), MK = O.j(rB, 1, null), En = a;
                                        CE(En, q(ei) ? KK : 1);
                                        tE(En);
                                        En.moveTo(lf, mf);
                                        En.lineTo(LK + 1, MK);
                                        vE(En);
                                        su = F(Dn);
                                        tu = null;
                                        uu = 0;
                                      }
                                      Bn = 0;
                                    } else {
                                      break;
                                    }
                                  }
                                }
                                CE(a, 1);
                                mu = F(An);
                                nu = null;
                                ou = 0;
                              }
                              vn = 0;
                            } else {
                              break;
                            }
                          }
                        }
                        un += 1;
                      } else {
                        var sB = B(ju);
                        if (sB) {
                          var Fn = sB;
                          if (S(Fn)) {
                            var tB = x(Fn), NK = z(Fn), OK = tB, PK = K(tB), ju = NK, ku = OK, lu = PK
                          } else {
                            for (var dq = C(Fn), vu = B(ig.h(q(ZA) ? new T(null, 1, 5, U, [nl], null) : null, new T(null, 1, 5, U, [$n], null))), wu = null, xu = 0, Gn = 0;;) {
                              if (Gn < xu) {
                                var QK = wu.F(null, Gn), RK = function() {
                                  var a = new T(null, 2, 5, U, [QK, dq], null);
                                  return Gb.g ? Gb.g(a) : Gb.call(null, a);
                                }();
                                BE(a, function() {
                                  var a = dq;
                                  return Z.g ? Z.g(a) : Z.call(null, a);
                                }());
                                for (var yu = B(RK), zu = null, Au = 0, Hn = 0;;) {
                                  if (Hn < Au) {
                                    var uB = zu.F(null, Hn), vB = O.j(uB, 0, null), SK = O.j(vB, 0, null);
                                    O.j(vB, 1, null);
                                    var TK = O.j(uB, 1, null), wB = XE(d, SK, f + 1), UK = O.j(wB, 0, null), VK = O.j(wB, 1, null), In = a;
                                    CE(In, q(ei) ? TK : 1);
                                    tE(In);
                                    In.moveTo(lf, mf);
                                    In.lineTo(UK + 1, VK);
                                    vE(In);
                                    Hn += 1;
                                  } else {
                                    var xB = B(yu);
                                    if (xB) {
                                      var Jn = xB;
                                      if (S(Jn)) {
                                        var yB = x(Jn), WK = z(Jn), XK = yB, YK = K(yB), yu = WK, zu = XK, Au = YK
                                      } else {
                                        var zB = C(Jn), AB = O.j(zB, 0, null), ZK = O.j(AB, 0, null);
                                        O.j(AB, 1, null);
                                        var $K = O.j(zB, 1, null), BB = XE(d, ZK, f + 1), aL = O.j(BB, 0, null), bL = O.j(BB, 1, null), Kn = a;
                                        CE(Kn, q(ei) ? $K : 1);
                                        tE(Kn);
                                        Kn.moveTo(lf, mf);
                                        Kn.lineTo(aL + 1, bL);
                                        vE(Kn);
                                        yu = F(Jn);
                                        zu = null;
                                        Au = 0;
                                      }
                                      Hn = 0;
                                    } else {
                                      break;
                                    }
                                  }
                                }
                                CE(a, 1);
                                Gn += 1;
                              } else {
                                var CB = B(vu);
                                if (CB) {
                                  var Ln = CB;
                                  if (S(Ln)) {
                                    var DB = x(Ln), cL = z(Ln), dL = DB, eL = K(DB), vu = cL, wu = dL, xu = eL
                                  } else {
                                    var fL = C(Ln), gL = function() {
                                      var a = new T(null, 2, 5, U, [fL, dq], null);
                                      return Gb.g ? Gb.g(a) : Gb.call(null, a);
                                    }();
                                    BE(a, function() {
                                      var a = dq;
                                      return Z.g ? Z.g(a) : Z.call(null, a);
                                    }());
                                    for (var Bu = B(gL), Cu = null, Du = 0, Mn = 0;;) {
                                      if (Mn < Du) {
                                        var EB = Cu.F(null, Mn), FB = O.j(EB, 0, null), hL = O.j(FB, 0, null);
                                        O.j(FB, 1, null);
                                        var iL = O.j(EB, 1, null), GB = XE(d, hL, f + 1), jL = O.j(GB, 0, null), kL = O.j(GB, 1, null), Nn = a;
                                        CE(Nn, q(ei) ? iL : 1);
                                        tE(Nn);
                                        Nn.moveTo(lf, mf);
                                        Nn.lineTo(jL + 1, kL);
                                        vE(Nn);
                                        Mn += 1;
                                      } else {
                                        var HB = B(Bu);
                                        if (HB) {
                                          var On = HB;
                                          if (S(On)) {
                                            var IB = x(On), lL = z(On), mL = IB, nL = K(IB), Bu = lL, Cu = mL, Du = nL
                                          } else {
                                            var JB = C(On), KB = O.j(JB, 0, null), oL = O.j(KB, 0, null);
                                            O.j(KB, 1, null);
                                            var pL = O.j(JB, 1, null), LB = XE(d, oL, f + 1), qL = O.j(LB, 0, null), rL = O.j(LB, 1, null), Pn = a;
                                            CE(Pn, q(ei) ? pL : 1);
                                            tE(Pn);
                                            Pn.moveTo(lf, mf);
                                            Pn.lineTo(qL + 1, rL);
                                            vE(Pn);
                                            Bu = F(On);
                                            Cu = null;
                                            Du = 0;
                                          }
                                          Mn = 0;
                                        } else {
                                          break;
                                        }
                                      }
                                    }
                                    CE(a, 1);
                                    vu = F(Ln);
                                    wu = null;
                                    xu = 0;
                                  }
                                  Gn = 0;
                                } else {
                                  break;
                                }
                              }
                            }
                            ju = F(Fn);
                            ku = null;
                            lu = 0;
                          }
                          un = 0;
                        } else {
                          break;
                        }
                      }
                    }
                  }
                  It = F(tn);
                  Jt = null;
                  Kt = 0;
                }
                Wm = 0;
              } else {
                break;
              }
            }
          }
          vd = F(pj);
          id = null;
          kb = 0;
        }
        ic = 0;
      } else {
        break;
      }
    }
  }
  uE(a);
}
function pF(a) {
  var b = Ae(a) ? R.h(Cg, a) : a, c = P.h(b, Pl), d = P.h(b, Vo), e = P.h(b, pq), f = O.h(I.g ? I.g(JE) : I.call(null, JE), c), g = iD(f), h = O.h(g, d), l = ds.g(h), p = Vr.g(h), t = C(jD(f)), s = zy(t), w = uy.g(t);
  return R.h(u, Zg("\n", eh(Eh(["__Selection__", "* timestep " + u.g(xy(h)) + " (delay " + u.g(c) + ")", "* column " + u.g(q(e) ? e : "nil"), "", "__Input__", "" + u.g(s) + " (" + u.g(K(w)) + " bits)", "", "__Active columns__", "" + u.g(He.g(Zx(p))), "", "__Active cells__", "" + u.g(He.g($x(p))), "", "__Learnable cells__", "" + u.g(He.g(ay(p))), "", "__Learning segments__", "" + u.g(He.g(Fl.g(p))), "", "__Signal cells__", "" + u.g(He.g(by(p))), "", "__Alternative cells / segs__", "" + u.g(He.g(Tq.g(p))), 
  "", "__TP scores__", "" + u.g(He.g(ql.g(l))), "", "__Predicted cells__", "" + u.g(He.g(dy(p))), "", q(e) ? function() {
    var A = c + 1, y = O.h(I.g ? I.g(JE) : I.call(null, JE), A), D = O.h(iD(y), d), G = ds.g(D), J = Vr.g(D), L = Ho.g(G), N = Cq.g(J), $ = $x(J), ba = function() {
      var a = ay(J);
      return q(a) ? a : zj;
    }(), M = Gl.g(Jx(D)), ka = O.h(hD(f), d), W = eD(ka, uy), fa = eD(ka, vy);
    return new T(null, 14, 5, U, ["__Active cells prev__", "" + u.g(He.g($)), "", "__Learn cells prev__", "" + u.g(He.g(ba)), "", "__Predicted cells prev__", "" + u.g(He.g(dy(J))), "", "__Selected column__", "__Connected ff-synapses__", function() {
      var ea = fy(L, e);
      return function(a, b, c, d, e, f, g, h, l, p, t, s, w, y, A, M, D, G, J, W, L, N, $, ka, ba, ea, fa, te) {
        return function Mb(Bc) {
          return new Ef(null, function(a, b, c, d, e, f, g, h, l, p, t, s, w, y) {
            return function() {
              for (;;) {
                var a = B(Bc);
                if (a) {
                  if (S(a)) {
                    var b = x(a), c = K(b), d = $f(c);
                    return function() {
                      for (var a = 0;;) {
                        if (a < c) {
                          var e = v.h(b, a), f = O.j(e, 0, null), e = O.j(e, 1, null);
                          dg(d, "  " + u.g(f) + " :\x3d\x3e " + u.g(rE("%.2f", e)) + u.g(q(function() {
                            var a = f;
                            return y.g ? y.g(a) : y.call(null, a);
                          }()) ? " S" : null) + u.g(q(function() {
                            var a = f;
                            return w.g ? w.g(a) : w.call(null, a);
                          }()) ? " A " + u.g(ty(s, f)) : null));
                          a += 1;
                        } else {
                          return!0;
                        }
                      }
                    }() ? cg(eg(d), Mb(z(a))) : cg(eg(d), null);
                  }
                  var e = C(a), f = O.j(e, 0, null), e = O.j(e, 1, null);
                  return Ld("  " + u.g(f) + " :\x3d\x3e " + u.g(rE("%.2f", e)) + u.g(q(function() {
                    var a = f;
                    return y.g ? y.g(a) : y.call(null, a);
                  }()) ? " S" : null) + u.g(q(function() {
                    var a = f;
                    return w.g ? w.g(a) : w.call(null, a);
                  }()) ? " A " + u.g(ty(s, f)) : null), Mb(E(a)));
                }
                return null;
              }
            };
          }(a, b, c, d, e, f, g, h, l, p, t, s, w, y, A, M, D, G, J, W, L, N, $, ka, ba, ea, fa, te), null, null);
        };
      }(ea, A, y, D, G, J, L, N, $, ba, M, ka, W, fa, f, g, h, l, p, t, s, w, a, b, b, c, d, e)(He.g(ea));
    }(), "__Cells and their Dendrite segments__", function() {
      return function(a, b, c, d, e, f, g, h, l, p, t, s, w, y, A, M, D, G, J, W, L, N, $, ka, ba, fa, hc) {
        return function te(Qd) {
          return new Ef(null, function(a, b, c, d, e, f, g, h, l, p, t, s, w, y, A, M, D, G, J, W, L, N, $, ka, ba, ea, fa) {
            return function() {
              for (;;) {
                var ta = B(Qd);
                if (ta) {
                  var na = ta;
                  if (S(na)) {
                    var Da = x(na), ya = K(Da), ha = $f(ya);
                    return function() {
                      for (var Ba = 0;;) {
                        if (Ba < ya) {
                          var wa = v.h(Da, Ba), oa = ly(g, new T(null, 2, 5, U, [fa, wa], null));
                          dg(ha, new T(null, 4, 5, U, ["CELL " + u.g(wa), "" + u.g(K(oa)) + " \x3d " + u.g(Jg.h(K, oa)), "Lateral excitation from this cell: " + u.g(hy(g, new T(null, 2, 5, U, [fa, wa], null))), function() {
                            return function(a, b, c, d, e, f, g, h, l, p, t, s, w, y, A, M, D, G, J, W, L, N, $, ka, ba, ea, fa, ta, na, Ba, Da, wa, ha, ya, la) {
                              return function Uf(oa) {
                                return new Ef(null, function(a, b, c, d, e, f, g, h, l, p, t, s, w, y, A, M, D, G, J, W, L, N, $, ka, ba, ea, fa, ta, na, Ba, Da, wa, ha, ya, la) {
                                  return function() {
                                    for (;;) {
                                      var ua = B(oa);
                                      if (ua) {
                                        var Ga = ua;
                                        if (S(Ga)) {
                                          var Qa = x(Ga), Ma = K(Qa), vb = $f(Ma);
                                          return function() {
                                            for (var oa = 0;;) {
                                              if (oa < Ma) {
                                                var Pa = v.h(Qa, oa), ib = O.j(Pa, 0, null), Ua = O.j(Pa, 1, null);
                                                dg(vb, new T(null, 2, 5, U, ["  SEGMENT " + u.g(ib), function() {
                                                  return function(a, b, c, d, e, f, g, h, l, p, t, s, w, y, A, M, D, G, J, W, rb, L, N, $, ka, ba, ea, fa, ta, na, Ba, Da, wa, ha, ya, oa, la, ua, Ga, Qa, Ma, Pa, vb, ib) {
                                                    return function Pp(Ua) {
                                                      return new Ef(null, function(a, b, c, d, e, f, g, h, l, p, t, s, w, y, A, M, D, G, J, W, rb, L, N, $, ka, ba, ea) {
                                                        return function() {
                                                          for (;;) {
                                                            var a = B(Ua);
                                                            if (a) {
                                                              if (S(a)) {
                                                                var b = x(a), c = K(b), d = $f(c);
                                                                return function() {
                                                                  for (var a = 0;;) {
                                                                    if (a < c) {
                                                                      var e = v.h(b, a), f = O.j(e, 0, null), e = O.j(e, 1, null);
                                                                      dg(d, "  " + u.g(f) + u.g(e >= ea ? " :\x3d\x3e " : " :.: ") + u.g(rE("%.2f", e)) + u.g(q(function() {
                                                                        var a = f;
                                                                        return ba.g ? ba.g(a) : ba.call(null, a);
                                                                      }()) ? " L" : q(function() {
                                                                        var a = f;
                                                                        return ka.g ? ka.g(a) : ka.call(null, a);
                                                                      }()) ? " A" : null));
                                                                      a += 1;
                                                                    } else {
                                                                      return!0;
                                                                    }
                                                                  }
                                                                }() ? cg(eg(d), Pp(z(a))) : cg(eg(d), null);
                                                              }
                                                              var e = C(a), f = O.j(e, 0, null), e = O.j(e, 1, null);
                                                              return Ld("  " + u.g(f) + u.g(e >= ea ? " :\x3d\x3e " : " :.: ") + u.g(rE("%.2f", e)) + u.g(q(function() {
                                                                var a = f;
                                                                return ba.g ? ba.g(a) : ba.call(null, a);
                                                              }()) ? " L" : q(function() {
                                                                var a = f;
                                                                return ka.g ? ka.g(a) : ka.call(null, a);
                                                              }()) ? " A" : null), Pp(E(a)));
                                                            }
                                                            return null;
                                                          }
                                                        };
                                                      }(a, b, c, d, e, f, g, h, l, p, t, s, w, y, A, M, D, G, J, W, rb, L, N, $, ka, ba, ea, fa, ta, na, Ba, Da, wa, ha, ya, oa, la, ua, Ga, Qa, Ma, Pa, vb, ib), null, null);
                                                    };
                                                  }(oa, a, Pa, ib, Ua, Qa, Ma, vb, Ga, ua, b, c, d, e, f, g, h, l, p, t, s, w, y, A, M, D, G, J, W, L, N, $, ka, ba, ea, fa, ta, na, Ba, Da, wa, ha, ya, la)(He.g(Ua));
                                                }()], null));
                                                oa += 1;
                                              } else {
                                                return!0;
                                              }
                                            }
                                          }() ? cg(eg(vb), Uf(z(Ga))) : cg(eg(vb), null);
                                        }
                                        var Pa = C(Ga), ib = O.j(Pa, 0, null), Ua = O.j(Pa, 1, null);
                                        return Ld(new T(null, 2, 5, U, ["  SEGMENT " + u.g(ib), function() {
                                          return function(a, b, c, d, e, f, g, h, l, p, t, s, w, y, A, M, D, G, J, W, rb, L, N, $, ka, ba, ea, fa, ta, na, Ba, Da, wa, ha, ya, oa, la, ua, Ga, Qa) {
                                            return function ai(Ma) {
                                              return new Ef(null, function(a, b, c, d, e, f, g, h, l, p, t, s, w, y, A, M, D, G, J, W, rb, L, N) {
                                                return function() {
                                                  for (;;) {
                                                    var a = B(Ma);
                                                    if (a) {
                                                      if (S(a)) {
                                                        var b = x(a), c = K(b), d = $f(c);
                                                        return function() {
                                                          for (var a = 0;;) {
                                                            if (a < c) {
                                                              var e = v.h(b, a), f = O.j(e, 0, null), e = O.j(e, 1, null);
                                                              dg(d, "  " + u.g(f) + u.g(e >= N ? " :\x3d\x3e " : " :.: ") + u.g(rE("%.2f", e)) + u.g(q(function() {
                                                                var a = f;
                                                                return L.g ? L.g(a) : L.call(null, a);
                                                              }()) ? " L" : q(function() {
                                                                var a = f;
                                                                return rb.g ? rb.g(a) : rb.call(null, a);
                                                              }()) ? " A" : null));
                                                              a += 1;
                                                            } else {
                                                              return!0;
                                                            }
                                                          }
                                                        }() ? cg(eg(d), ai(z(a))) : cg(eg(d), null);
                                                      }
                                                      var e = C(a), f = O.j(e, 0, null), e = O.j(e, 1, null);
                                                      return Ld("  " + u.g(f) + u.g(e >= N ? " :\x3d\x3e " : " :.: ") + u.g(rE("%.2f", e)) + u.g(q(function() {
                                                        var a = f;
                                                        return L.g ? L.g(a) : L.call(null, a);
                                                      }()) ? " L" : q(function() {
                                                        var a = f;
                                                        return rb.g ? rb.g(a) : rb.call(null, a);
                                                      }()) ? " A" : null), ai(E(a)));
                                                    }
                                                    return null;
                                                  }
                                                };
                                              }(a, b, c, d, e, f, g, h, l, p, t, s, w, y, A, M, D, G, J, W, rb, L, N, $, ka, ba, ea, fa, ta, na, Ba, Da, wa, ha, ya, oa, la, ua, Ga, Qa), null, null);
                                            };
                                          }(a, Pa, ib, Ua, Ga, ua, b, c, d, e, f, g, h, l, p, t, s, w, y, A, M, D, G, J, W, L, N, $, ka, ba, ea, fa, ta, na, Ba, Da, wa, ha, ya, la)(He.g(Ua));
                                        }()], null), Uf(E(Ga)));
                                      }
                                      return null;
                                    }
                                  };
                                }(a, b, c, d, e, f, g, h, l, p, t, s, w, y, A, M, D, G, J, W, L, N, $, ka, ba, ea, fa, ta, na, Ba, Da, wa, ha, ya, la), null, null);
                              };
                            }(Ba, oa, wa, Da, ya, ha, na, ta, a, b, c, d, e, f, g, h, l, p, t, s, w, y, A, M, D, G, J, W, L, N, $, ka, ba, ea, fa)(zg(Gh, oa));
                          }()], null));
                          Ba += 1;
                        } else {
                          return!0;
                        }
                      }
                    }() ? cg(eg(ha), te(z(na))) : cg(eg(ha), null);
                  }
                  var Ba = C(na), wa = ly(g, new T(null, 2, 5, U, [fa, Ba], null));
                  return Ld(new T(null, 4, 5, U, ["CELL " + u.g(Ba), "" + u.g(K(wa)) + " \x3d " + u.g(Jg.h(K, wa)), "Lateral excitation from this cell: " + u.g(hy(g, new T(null, 2, 5, U, [fa, Ba], null))), function() {
                    return function(a, b, c, d, e, f, g, h, l, p, t, s, w, y, A, M, D, G, J, W, L, N, $, ka, ba, ea, fa, ta, na, Ba, Da) {
                      return function tc(wa) {
                        return new Ef(null, function(a, b, c, d, e, f, g, h, l, p, t, s, w, y, A, M, D, G, J, W, L, N, $, ka, ba, ea, fa, ta, na, Ba, Da) {
                          return function() {
                            for (;;) {
                              var ha = B(wa);
                              if (ha) {
                                var ya = ha;
                                if (S(ya)) {
                                  var oa = x(ya), la = K(oa), ua = $f(la);
                                  return function() {
                                    for (var wa = 0;;) {
                                      if (wa < la) {
                                        var Ga = v.h(oa, wa), Qa = O.j(Ga, 0, null), Ma = O.j(Ga, 1, null);
                                        dg(ua, new T(null, 2, 5, U, ["  SEGMENT " + u.g(Qa), function() {
                                          return function(a, b, c, d, e, f, g, h, l, p, t, s, w, y, A, M, D, G, J, W, rb, L, N, $, ka, ba, ea, fa, ta, na, Ba, wa, ya, Da, ha, oa, la, Ga, ua, Qa) {
                                            return function Op(Ma) {
                                              return new Ef(null, function(a, b, c, d, e, f, g, h, l, p, t, s, w, y, A, M, D, G, J, W, rb, L, N) {
                                                return function() {
                                                  for (;;) {
                                                    var a = B(Ma);
                                                    if (a) {
                                                      if (S(a)) {
                                                        var b = x(a), c = K(b), d = $f(c);
                                                        return function() {
                                                          for (var a = 0;;) {
                                                            if (a < c) {
                                                              var e = v.h(b, a), f = O.j(e, 0, null), e = O.j(e, 1, null);
                                                              dg(d, "  " + u.g(f) + u.g(e >= N ? " :\x3d\x3e " : " :.: ") + u.g(rE("%.2f", e)) + u.g(q(function() {
                                                                var a = f;
                                                                return L.g ? L.g(a) : L.call(null, a);
                                                              }()) ? " L" : q(function() {
                                                                var a = f;
                                                                return rb.g ? rb.g(a) : rb.call(null, a);
                                                              }()) ? " A" : null));
                                                              a += 1;
                                                            } else {
                                                              return!0;
                                                            }
                                                          }
                                                        }() ? cg(eg(d), Op(z(a))) : cg(eg(d), null);
                                                      }
                                                      var e = C(a), f = O.j(e, 0, null), e = O.j(e, 1, null);
                                                      return Ld("  " + u.g(f) + u.g(e >= N ? " :\x3d\x3e " : " :.: ") + u.g(rE("%.2f", e)) + u.g(q(function() {
                                                        var a = f;
                                                        return L.g ? L.g(a) : L.call(null, a);
                                                      }()) ? " L" : q(function() {
                                                        var a = f;
                                                        return rb.g ? rb.g(a) : rb.call(null, a);
                                                      }()) ? " A" : null), Op(E(a)));
                                                    }
                                                    return null;
                                                  }
                                                };
                                              }(a, b, c, d, e, f, g, h, l, p, t, s, w, y, A, M, D, G, J, W, rb, L, N, $, ka, ba, ea, fa, ta, na, Ba, wa, ya, Da, ha, oa, la, Ga, ua, Qa), null, null);
                                            };
                                          }(wa, Ga, Qa, Ma, oa, la, ua, ya, ha, a, b, c, d, e, f, g, h, l, p, t, s, w, y, A, M, D, G, J, W, L, N, $, ka, ba, ea, fa, ta, na, Ba, Da)(He.g(Ma));
                                        }()], null));
                                        wa += 1;
                                      } else {
                                        return!0;
                                      }
                                    }
                                  }() ? cg(eg(ua), tc(z(ya))) : cg(eg(ua), null);
                                }
                                var Ga = C(ya), Qa = O.j(Ga, 0, null), Ma = O.j(Ga, 1, null);
                                return Ld(new T(null, 2, 5, U, ["  SEGMENT " + u.g(Qa), function() {
                                  return function(a, b, c, d, e, f, g, h, l, p, t, s, w, y, A, M, D, G, J, rb, W, L, N, $, ka, ba, ea, fa, ta, na, Ba, wa, ya, Da, ha, oa) {
                                    return function Np(la) {
                                      return new Ef(null, function(a, b, c, d, e, f, g, h, l, p, t, s, w, y, A, M, D, G, J) {
                                        return function() {
                                          for (;;) {
                                            var a = B(la);
                                            if (a) {
                                              if (S(a)) {
                                                var b = x(a), c = K(b), d = $f(c);
                                                return function() {
                                                  for (var a = 0;;) {
                                                    if (a < c) {
                                                      var e = v.h(b, a), f = O.j(e, 0, null), e = O.j(e, 1, null);
                                                      dg(d, "  " + u.g(f) + u.g(e >= J ? " :\x3d\x3e " : " :.: ") + u.g(rE("%.2f", e)) + u.g(q(function() {
                                                        var a = f;
                                                        return G.g ? G.g(a) : G.call(null, a);
                                                      }()) ? " L" : q(function() {
                                                        var a = f;
                                                        return D.g ? D.g(a) : D.call(null, a);
                                                      }()) ? " A" : null));
                                                      a += 1;
                                                    } else {
                                                      return!0;
                                                    }
                                                  }
                                                }() ? cg(eg(d), Np(z(a))) : cg(eg(d), null);
                                              }
                                              var e = C(a), f = O.j(e, 0, null), e = O.j(e, 1, null);
                                              return Ld("  " + u.g(f) + u.g(e >= J ? " :\x3d\x3e " : " :.: ") + u.g(rE("%.2f", e)) + u.g(q(function() {
                                                var a = f;
                                                return G.g ? G.g(a) : G.call(null, a);
                                              }()) ? " L" : q(function() {
                                                var a = f;
                                                return D.g ? D.g(a) : D.call(null, a);
                                              }()) ? " A" : null), Np(E(a)));
                                            }
                                            return null;
                                          }
                                        };
                                      }(a, b, c, d, e, f, g, h, l, p, t, s, w, y, A, M, D, G, J, rb, W, L, N, $, ka, ba, ea, fa, ta, na, Ba, wa, ya, Da, ha, oa), null, null);
                                    };
                                  }(Ga, Qa, Ma, ya, ha, a, b, c, d, e, f, g, h, l, p, t, s, w, y, A, M, D, G, J, W, L, N, $, ka, ba, ea, fa, ta, na, Ba, Da)(He.g(Ma));
                                }()], null), tc(E(ya)));
                              }
                              return null;
                            }
                          };
                        }(a, b, c, d, e, f, g, h, l, p, t, s, w, y, A, M, D, G, J, W, L, N, $, ka, ba, ea, fa, ta, na, Ba, Da), null, null);
                      };
                    }(wa, Ba, na, ta, a, b, c, d, e, f, g, h, l, p, t, s, w, y, A, M, D, G, J, W, L, N, $, ka, ba, ea, fa)(zg(Gh, wa));
                  }()], null), te(E(na)));
                }
                return null;
              }
            };
          }(a, b, c, d, e, f, g, h, l, p, t, s, w, y, A, M, D, G, J, W, L, N, $, ka, ba, fa, hc), null, null);
        };
      }(A, y, D, G, J, L, N, $, ba, M, ka, W, fa, f, g, h, l, p, t, s, w, a, b, b, c, d, e)(Hj.g(Xx(p)));
    }()], null);
  }() : null, "", "__spec__", He.g(Jx(h))]))));
}
function qF(a) {
  var b = Ae(a) ? R.h(Cg, a) : a;
  a = P.h(b, jq);
  var b = P.h(b, Kl), c = Dv(new T(null, 1, 5, U, [Oo], null));
  c.width = b;
  c.height = a;
  return c;
}
function rF(a) {
  var b = qF(ME(a)), c = b.getContext(Cf("2d")), d = RE(a);
  AE(c, Wn.g(Z));
  YE(c, a, Hj.h(d, d + QE(a)));
  c.fill();
  return b;
}
function sF(a, b) {
  var c = qF(ME(a)), d = c.getContext(Cf("2d")), e = uy.g(b);
  AE(d, oq.g(Z));
  YE(d, a, e);
  d.fill();
  return c;
}
function tF(a, b) {
  var c = qF(ME(a)), d = c.getContext(Cf("2d")), e = Cj(Jg.h(C, dy(Vr.g(b)))), f = nD(b, e), e = VB(function() {
    return function(a) {
      a /= 8;
      return 1 < a ? 1 : a;
    };
  }(c, d, e, f), f);
  AE(d, wr.g(Z));
  ZE(d, a, e);
  return c;
}
function uF(a, b) {
  var c = qF(ME(a)), d = c.getContext(Cf("2d")), e = Zx(Vr.g(b));
  AE(d, oq.g(Z));
  YE(d, a, e);
  d.fill();
  return c;
}
function vF(a, b) {
  var c = qF(ME(a)), d = c.getContext(Cf("2d")), e = Cj(Jg.h(C, ey(Vr.g(b))));
  AE(d, wr.g(Z));
  YE(d, a, e);
  d.fill();
  return c;
}
function wF(a, b) {
  var c = qF(ME(a)), d = c.getContext(Cf("2d")), e = Jg.h(C, cy(Vr.g(b)));
  AE(d, bl.g(Z));
  YE(d, a, e);
  d.fill();
  return c;
}
function xF(a, b) {
  var c = qF(ME(a)), d = c.getContext(Cf("2d")), e = Jg.h(C, fo.g(Vr.g(b)));
  AE(d, Sk.g(Z));
  YE(d, a, e);
  d.fill();
  return c;
}
function yF(a, b) {
  var c = qF(ME(a)), d = c.getContext(Cf("2d")), e = VB(function() {
    return function(a) {
      a /= 16;
      return 1 < a ? 1 : a;
    };
  }(c, d), Sx(ds.g(b)));
  AE(d, "black");
  ZE(d, a, e);
  d.fill();
  return c;
}
function zF(a) {
  return "Showing " + u.g(RE(a)) + "--" + u.g(RE(a) + QE(a) + -1) + " of " + u.g(ls.g(a));
}
function AF() {
  var a = I.g ? I.g(BF) : I.call(null, BF), b = Ae(a) ? R.h(Cg, a) : a, c = P.h(b, Pl), d = P.h(b, Vo), e = P.h(b, pq);
  Gv.h("#detail-text", q(e) ? pF(b) : "Select a column (by clicking on it) to see details.");
  var f = I.g ? I.g(GE) : I.call(null, GE), g = Cr.g(I.g ? I.g(KE) : I.call(null, KE)), h = Qn.g(I.g ? I.g(KE) : I.call(null, KE)), l = O.h(I.g ? I.g(JE) : I.call(null, JE), c), p = O.j(I.g ? I.g(JE) : I.call(null, JE), c + 1, pi), t = Dv("#comportex-viz"), s = t.getContext(Cf("2d")), w = rF(g), A = Jg.h(rF, h), y = WE($d(h)) + ih.h(f, new T(null, 2, 5, U, [fr, Cl], null));
  wE(s, new n(null, 4, [pr, 0, fk, 0, Kl, t.width, jq, 900], null));
  s.textBaseline = Cf(tl);
  zE(s, new n(null, 3, [As, "Input on selected timestep.", pr, 2, fk, 0], null));
  zE(s, new n(null, 3, [As, "Encoded bits.    \x3d\x3e time \x3d\x3e", pr, pr.g(ME(g)), fk, 0], null));
  zE(s, new n(null, 3, [As, zF(g), pr, pr.g(ME(g)), fk, 10], null));
  for (var D = B(zg(Gh, h)), G = null, J = 0, L = 0;;) {
    if (L < J) {
      var N = G.F(null, L), $ = O.j(N, 0, null), ba = O.j(N, 1, null);
      zE(s, new n(null, 3, [As, "Region " + u.g($) + " columns.   \x3d\x3e time \x3d\x3e", pr, pr.g(ME(ba)), fk, 0], null));
      zE(s, new n(null, 3, [As, zF(ba), pr, pr.g(ME(ba)), fk, 10], null));
      L += 1;
    } else {
      var M = B(D);
      if (M) {
        var ka = M;
        if (S(ka)) {
          var W = x(ka), fa = z(ka), ea = W, ta = K(W), D = fa, G = ea, J = ta
        } else {
          var na = C(ka), Da = O.j(na, 0, null), ya = O.j(na, 1, null);
          zE(s, new n(null, 3, [As, "Region " + u.g(Da) + " columns.   \x3d\x3e time \x3d\x3e", pr, pr.g(ME(ya)), fk, 0], null));
          zE(s, new n(null, 3, [As, zF(ya), pr, pr.g(ME(ya)), fk, 10], null));
          D = F(ka);
          G = null;
          J = 0;
        }
        L = 0;
      } else {
        break;
      }
    }
  }
  var Ba = y + ih.h(f, new T(null, 2, 5, U, [fr, Xk], null));
  zE(s, new n(null, 3, [As, "Segments. " + u.g(q(e) ? "(arrows keys to move)" : "(click on a column)") + " Page up / page down to scroll columns.", pr, Ba, fk, 0], null));
  var Ga = ih.h(f, new T(null, 2, 5, U, [fr, Bq], null)), oa = C(jD(l)), Qa = C(iD(l)), wa = Nr.g(oa);
  q(wa) && (s.save(), s.translate(0, 20), wa.J ? wa.J(oa, s, Ga, 880, Qa) : wa.call(null, oa, s, Ga, 880, Qa), uE(s));
  for (var ib = B(Hj.g(K(I.g ? I.g(JE) : I.call(null, JE)))), vb = null, Ma = 0, Ua = 0;;) {
    if (Ua < Ma) {
      var ua = vb.F(null, Ua), Jb = O.h(I.g ? I.g(JE) : I.call(null, JE), ua), Cd = O.j(I.g ? I.g(JE) : I.call(null, JE), ua + 1, pi), Ub = C(iD(Cd)), od = iD(Jb), ha = Rr.g(he(Jb));
      $E(s, g, ua, w);
      q(ih.h(f, new T(null, 2, 5, U, [Cr, oq], null))) && $E(s, g, ua, P.h(md.h(Cr.g(f), Cr.g(zq.g(function() {
        var a = ha;
        return I.g ? I.g(a) : I.call(null, a);
      }()))) ? function() {
        var a = ha;
        return I.g ? I.g(a) : I.call(null, a);
      }() : Hg.p(ha, Q, wo, sF(g, C(jD(Jb)))), wo));
      q(function() {
        var a = ih.h(f, new T(null, 2, 5, U, [Cr, wr], null));
        return q(a) ? Ub : a;
      }()) && $E(s, g, ua, P.h(md.h(Cr.g(f), Cr.g(zq.g(function() {
        var a = ha;
        return I.g ? I.g(a) : I.call(null, a);
      }()))) ? function() {
        var a = ha;
        return I.g ? I.g(a) : I.call(null, a);
      }() : Hg.p(ha, Q, Lp, tF(g, Ub)), Lp));
      for (var Hf = B(Jg.k(Gh, Hj.q(), h, od, H([A], 0))), Og = null, Pg = 0, re = 0;;) {
        if (re < Pg) {
          var Sc = Og.F(null, re), Kc = O.j(Sc, 0, null), hc = O.j(Sc, 1, null), se = O.j(Sc, 2, null), te = O.j(Sc, 3, null);
          $E(s, hc, ua, te);
          q(ih.h(f, new T(null, 2, 5, U, [Hl, rq], null))) && $E(s, hc, ua, P.h(md.h(Hl.g(f), Hl.g(zq.g(function() {
            var a = ha;
            return I.g ? I.g(a) : I.call(null, a);
          }()))) ? function() {
            var a = ha;
            return I.g ? I.g(a) : I.call(null, a);
          }() : Hg.p(ha, Q, new T(null, 2, 5, U, [Zr, Kc], null), yF(hc, se)), new T(null, 2, 5, U, [Zr, Kc], null)));
          q(ih.h(f, new T(null, 2, 5, U, [Hl, oq], null))) && $E(s, hc, ua, P.h(md.h(Hl.g(f), Hl.g(zq.g(function() {
            var a = ha;
            return I.g ? I.g(a) : I.call(null, a);
          }()))) ? function() {
            var a = ha;
            return I.g ? I.g(a) : I.call(null, a);
          }() : Hg.p(ha, Q, new T(null, 2, 5, U, [no, Kc], null), uF(hc, se)), new T(null, 2, 5, U, [no, Kc], null)));
          q(ih.h(f, new T(null, 2, 5, U, [Hl, jo], null))) && $E(s, hc, ua, P.h(md.h(Hl.g(f), Hl.g(zq.g(function() {
            var a = ha;
            return I.g ? I.g(a) : I.call(null, a);
          }()))) ? function() {
            var a = ha;
            return I.g ? I.g(a) : I.call(null, a);
          }() : Hg.p(ha, Q, new T(null, 2, 5, U, [Dq, Kc], null), vF(hc, se)), new T(null, 2, 5, U, [Dq, Kc], null)));
          q(ih.h(f, new T(null, 2, 5, U, [Hl, bl], null))) && $E(s, hc, ua, P.h(md.h(Hl.g(f), Hl.g(zq.g(function() {
            var a = ha;
            return I.g ? I.g(a) : I.call(null, a);
          }()))) ? function() {
            var a = ha;
            return I.g ? I.g(a) : I.call(null, a);
          }() : Hg.p(ha, Q, new T(null, 2, 5, U, [cp, Kc], null), wF(hc, se)), new T(null, 2, 5, U, [cp, Kc], null)));
          q(ih.h(f, new T(null, 2, 5, U, [Hl, Sk], null))) && $E(s, hc, ua, P.h(md.h(Hl.g(f), Hl.g(zq.g(function() {
            var a = ha;
            return I.g ? I.g(a) : I.call(null, a);
          }()))) ? function() {
            var a = ha;
            return I.g ? I.g(a) : I.call(null, a);
          }() : Hg.p(ha, Q, new T(null, 2, 5, U, [cs, Kc], null), xF(hc, se)), new T(null, 2, 5, U, [cs, Kc], null)));
          re += 1;
        } else {
          var Qd = B(Hf);
          if (Qd) {
            var Mb = Qd;
            if (S(Mb)) {
              var Bc = x(Mb), Rd = z(Mb), If = Bc, Sd = K(Bc), Hf = Rd, Og = If, Pg = Sd
            } else {
              var Cc = C(Mb), Lc = O.j(Cc, 0, null), rc = O.j(Cc, 1, null), hd = O.j(Cc, 2, null), Xe = O.j(Cc, 3, null);
              $E(s, rc, ua, Xe);
              q(ih.h(f, new T(null, 2, 5, U, [Hl, rq], null))) && $E(s, rc, ua, P.h(md.h(Hl.g(f), Hl.g(zq.g(function() {
                var a = ha;
                return I.g ? I.g(a) : I.call(null, a);
              }()))) ? function() {
                var a = ha;
                return I.g ? I.g(a) : I.call(null, a);
              }() : Hg.p(ha, Q, new T(null, 2, 5, U, [Zr, Lc], null), yF(rc, hd)), new T(null, 2, 5, U, [Zr, Lc], null)));
              q(ih.h(f, new T(null, 2, 5, U, [Hl, oq], null))) && $E(s, rc, ua, P.h(md.h(Hl.g(f), Hl.g(zq.g(function() {
                var a = ha;
                return I.g ? I.g(a) : I.call(null, a);
              }()))) ? function() {
                var a = ha;
                return I.g ? I.g(a) : I.call(null, a);
              }() : Hg.p(ha, Q, new T(null, 2, 5, U, [no, Lc], null), uF(rc, hd)), new T(null, 2, 5, U, [no, Lc], null)));
              q(ih.h(f, new T(null, 2, 5, U, [Hl, jo], null))) && $E(s, rc, ua, P.h(md.h(Hl.g(f), Hl.g(zq.g(function() {
                var a = ha;
                return I.g ? I.g(a) : I.call(null, a);
              }()))) ? function() {
                var a = ha;
                return I.g ? I.g(a) : I.call(null, a);
              }() : Hg.p(ha, Q, new T(null, 2, 5, U, [Dq, Lc], null), vF(rc, hd)), new T(null, 2, 5, U, [Dq, Lc], null)));
              q(ih.h(f, new T(null, 2, 5, U, [Hl, bl], null))) && $E(s, rc, ua, P.h(md.h(Hl.g(f), Hl.g(zq.g(function() {
                var a = ha;
                return I.g ? I.g(a) : I.call(null, a);
              }()))) ? function() {
                var a = ha;
                return I.g ? I.g(a) : I.call(null, a);
              }() : Hg.p(ha, Q, new T(null, 2, 5, U, [cp, Lc], null), wF(rc, hd)), new T(null, 2, 5, U, [cp, Lc], null)));
              q(ih.h(f, new T(null, 2, 5, U, [Hl, Sk], null))) && $E(s, rc, ua, P.h(md.h(Hl.g(f), Hl.g(zq.g(function() {
                var a = ha;
                return I.g ? I.g(a) : I.call(null, a);
              }()))) ? function() {
                var a = ha;
                return I.g ? I.g(a) : I.call(null, a);
              }() : Hg.p(ha, Q, new T(null, 2, 5, U, [cs, Lc], null), xF(rc, hd)), new T(null, 2, 5, U, [cs, Lc], null)));
              Hf = F(Mb);
              Og = null;
              Pg = 0;
            }
            re = 0;
          } else {
            break;
          }
        }
      }
      qg.h(f, zq.g(function() {
        var a = ha;
        return I.g ? I.g(a) : I.call(null, a);
      }())) && Hg.p(ha, Q, zq, f);
      Ua += 1;
    } else {
      var Qg = B(ib);
      if (Qg) {
        var ac = Qg;
        if (S(ac)) {
          var Qh = x(ac), Jf = z(ac), vd = Qh, id = K(Qh), ib = Jf, vb = vd, Ma = id
        } else {
          var kb = C(ac), ic = O.h(I.g ? I.g(JE) : I.call(null, JE), kb), Td = O.j(I.g ? I.g(JE) : I.call(null, JE), kb + 1, pi), bc = C(iD(Td)), Kf = iD(ic), la = Rr.g(he(ic));
          $E(s, g, kb, w);
          q(ih.h(f, new T(null, 2, 5, U, [Cr, oq], null))) && $E(s, g, kb, P.h(md.h(Cr.g(f), Cr.g(zq.g(function() {
            var a = la;
            return I.g ? I.g(a) : I.call(null, a);
          }()))) ? function() {
            var a = la;
            return I.g ? I.g(a) : I.call(null, a);
          }() : Hg.p(la, Q, wo, sF(g, C(jD(ic)))), wo));
          q(function() {
            var a = ih.h(f, new T(null, 2, 5, U, [Cr, wr], null));
            return q(a) ? bc : a;
          }()) && $E(s, g, kb, P.h(md.h(Cr.g(f), Cr.g(zq.g(function() {
            var a = la;
            return I.g ? I.g(a) : I.call(null, a);
          }()))) ? function() {
            var a = la;
            return I.g ? I.g(a) : I.call(null, a);
          }() : Hg.p(la, Q, Lp, tF(g, bc)), Lp));
          for (var Ud = B(Jg.k(Gh, Hj.q(), h, Kf, H([A], 0))), jd = null, kd = 0, Tc = 0;;) {
            if (Tc < kd) {
              var wd = jd.F(null, Tc), jc = O.j(wd, 0, null), qb = O.j(wd, 1, null), Mc = O.j(wd, 2, null), xd = O.j(wd, 3, null);
              $E(s, qb, kb, xd);
              q(ih.h(f, new T(null, 2, 5, U, [Hl, rq], null))) && $E(s, qb, kb, P.h(md.h(Hl.g(f), Hl.g(zq.g(function() {
                var a = la;
                return I.g ? I.g(a) : I.call(null, a);
              }()))) ? function() {
                var a = la;
                return I.g ? I.g(a) : I.call(null, a);
              }() : Hg.p(la, Q, new T(null, 2, 5, U, [Zr, jc], null), yF(qb, Mc)), new T(null, 2, 5, U, [Zr, jc], null)));
              q(ih.h(f, new T(null, 2, 5, U, [Hl, oq], null))) && $E(s, qb, kb, P.h(md.h(Hl.g(f), Hl.g(zq.g(function() {
                var a = la;
                return I.g ? I.g(a) : I.call(null, a);
              }()))) ? function() {
                var a = la;
                return I.g ? I.g(a) : I.call(null, a);
              }() : Hg.p(la, Q, new T(null, 2, 5, U, [no, jc], null), uF(qb, Mc)), new T(null, 2, 5, U, [no, jc], null)));
              q(ih.h(f, new T(null, 2, 5, U, [Hl, jo], null))) && $E(s, qb, kb, P.h(md.h(Hl.g(f), Hl.g(zq.g(function() {
                var a = la;
                return I.g ? I.g(a) : I.call(null, a);
              }()))) ? function() {
                var a = la;
                return I.g ? I.g(a) : I.call(null, a);
              }() : Hg.p(la, Q, new T(null, 2, 5, U, [Dq, jc], null), vF(qb, Mc)), new T(null, 2, 5, U, [Dq, jc], null)));
              q(ih.h(f, new T(null, 2, 5, U, [Hl, bl], null))) && $E(s, qb, kb, P.h(md.h(Hl.g(f), Hl.g(zq.g(function() {
                var a = la;
                return I.g ? I.g(a) : I.call(null, a);
              }()))) ? function() {
                var a = la;
                return I.g ? I.g(a) : I.call(null, a);
              }() : Hg.p(la, Q, new T(null, 2, 5, U, [cp, jc], null), wF(qb, Mc)), new T(null, 2, 5, U, [cp, jc], null)));
              q(ih.h(f, new T(null, 2, 5, U, [Hl, Sk], null))) && $E(s, qb, kb, P.h(md.h(Hl.g(f), Hl.g(zq.g(function() {
                var a = la;
                return I.g ? I.g(a) : I.call(null, a);
              }()))) ? function() {
                var a = la;
                return I.g ? I.g(a) : I.call(null, a);
              }() : Hg.p(la, Q, new T(null, 2, 5, U, [cs, jc], null), xF(qb, Mc)), new T(null, 2, 5, U, [cs, jc], null)));
              Tc += 1;
            } else {
              var Ye = B(Ud);
              if (Ye) {
                var Ze = Ye;
                if (S(Ze)) {
                  var Lf = x(Ze), $e = z(Ze), yd = Lf, Mf = K(Lf), Ud = $e, jd = yd, kd = Mf
                } else {
                  var Vd = C(Ze), sc = O.j(Vd, 0, null), cc = O.j(Vd, 1, null), zd = O.j(Vd, 2, null), af = O.j(Vd, 3, null);
                  $E(s, cc, kb, af);
                  q(ih.h(f, new T(null, 2, 5, U, [Hl, rq], null))) && $E(s, cc, kb, P.h(md.h(Hl.g(f), Hl.g(zq.g(function() {
                    var a = la;
                    return I.g ? I.g(a) : I.call(null, a);
                  }()))) ? function() {
                    var a = la;
                    return I.g ? I.g(a) : I.call(null, a);
                  }() : Hg.p(la, Q, new T(null, 2, 5, U, [Zr, sc], null), yF(cc, zd)), new T(null, 2, 5, U, [Zr, sc], null)));
                  q(ih.h(f, new T(null, 2, 5, U, [Hl, oq], null))) && $E(s, cc, kb, P.h(md.h(Hl.g(f), Hl.g(zq.g(function() {
                    var a = la;
                    return I.g ? I.g(a) : I.call(null, a);
                  }()))) ? function() {
                    var a = la;
                    return I.g ? I.g(a) : I.call(null, a);
                  }() : Hg.p(la, Q, new T(null, 2, 5, U, [no, sc], null), uF(cc, zd)), new T(null, 2, 5, U, [no, sc], null)));
                  q(ih.h(f, new T(null, 2, 5, U, [Hl, jo], null))) && $E(s, cc, kb, P.h(md.h(Hl.g(f), Hl.g(zq.g(function() {
                    var a = la;
                    return I.g ? I.g(a) : I.call(null, a);
                  }()))) ? function() {
                    var a = la;
                    return I.g ? I.g(a) : I.call(null, a);
                  }() : Hg.p(la, Q, new T(null, 2, 5, U, [Dq, sc], null), vF(cc, zd)), new T(null, 2, 5, U, [Dq, sc], null)));
                  q(ih.h(f, new T(null, 2, 5, U, [Hl, bl], null))) && $E(s, cc, kb, P.h(md.h(Hl.g(f), Hl.g(zq.g(function() {
                    var a = la;
                    return I.g ? I.g(a) : I.call(null, a);
                  }()))) ? function() {
                    var a = la;
                    return I.g ? I.g(a) : I.call(null, a);
                  }() : Hg.p(la, Q, new T(null, 2, 5, U, [cp, sc], null), wF(cc, zd)), new T(null, 2, 5, U, [cp, sc], null)));
                  q(ih.h(f, new T(null, 2, 5, U, [Hl, Sk], null))) && $E(s, cc, kb, P.h(md.h(Hl.g(f), Hl.g(zq.g(function() {
                    var a = la;
                    return I.g ? I.g(a) : I.call(null, a);
                  }()))) ? function() {
                    var a = la;
                    return I.g ? I.g(a) : I.call(null, a);
                  }() : Hg.p(la, Q, new T(null, 2, 5, U, [cs, sc], null), xF(cc, zd)), new T(null, 2, 5, U, [cs, sc], null)));
                  Ud = F(Ze);
                  jd = null;
                  kd = 0;
                }
                Tc = 0;
              } else {
                break;
              }
            }
          }
          qg.h(f, zq.g(function() {
            var a = la;
            return I.g ? I.g(a) : I.call(null, a);
          }())) && Hg.p(la, Q, zq, f);
          ib = F(ac);
          vb = null;
          Ma = 0;
        }
        Ua = 0;
      } else {
        break;
      }
    }
  }
  UE(g, s, c);
  for (var Pa = B(h), ld = null, dc = 0, Db = 0;;) {
    if (Db < dc) {
      var Nf = ld.F(null, Db);
      UE(Nf, s, c);
      Db += 1;
    } else {
      var Rg = B(Pa);
      if (Rg) {
        var Wd = Rg;
        if (S(Wd)) {
          var Rh = x(Wd), Xd = z(Wd), Of = Rh, ue = K(Rh), Pa = Xd, ld = Of, dc = ue
        } else {
          var Pf = C(Wd);
          UE(Pf, s, c);
          Pa = F(Wd);
          ld = null;
          dc = 0;
        }
        Db = 0;
      } else {
        break;
      }
    }
  }
  if (q(e)) {
    var ve = O.h(h, d);
    VE(ve, s, c, e);
  }
  if (q(ih.h(f, new T(null, 2, 5, U, [pk, oq], null)))) {
    for (var Yb = B(Jg.k(Gh, Hj.q(), iD(l), iD(p), H([jg.h(C(jD(l)), hD(l)), h, jg.h(g, h)], 0))), Qf = null, Dc = 0, bf = 0;;) {
      if (bf < Dc) {
        var Yd = Qf.F(null, bf), Rf = O.j(Yd, 0, null), Sf = O.j(Yd, 1, null);
        O.j(Yd, 2, null);
        var we = O.j(Yd, 3, null), cf = O.j(Yd, 4, null), df = O.j(Yd, 5, null);
        (gb(e) || md.h(d, Rf)) && hF(s, Sf, cf, we, df, e, c, f);
        bf += 1;
      } else {
        var Nc = B(Yb);
        if (Nc) {
          var tc = Nc;
          if (S(tc)) {
            var Tf = x(tc), Sg = z(tc), Sh = Tf, Tg = K(Tf), Yb = Sg, Qf = Sh, Dc = Tg
          } else {
            var ef = C(tc), $l = O.j(ef, 0, null), Uf = O.j(ef, 1, null);
            O.j(ef, 2, null);
            var ff = O.j(ef, 3, null), Th = O.j(ef, 4, null), Zd = O.j(ef, 5, null);
            (gb(e) || md.h(d, $l)) && hF(s, Uf, Th, ff, Zd, e, c, f);
            Yb = F(tc);
            Qf = null;
            Dc = 0;
          }
          bf = 0;
        } else {
          break;
        }
      }
    }
  }
  if (q(q(e) ? c + 1 < K(I.g ? I.g(JE) : I.call(null, JE)) : e)) {
    var jj = O.h(iD(l), d), Ek = O.h(iD(p), d), am = O.h(h, d);
    oF(s, jj, Ek, am, e, c, y, f);
  }
  return null;
}
function CF(a, b, c) {
  var d = kE.q();
  bx(a, b, function(a, b, d) {
    return function(a) {
      mE.h(d, a);
      return q(c.g ? c.g(a) : c.call(null, a)) ? (a.preventDefault(), !1) : null;
    };
  }(a, b, d));
  return d;
}
function DF(a, b) {
  var c = CF(a, "click", function() {
    return!1;
  }), d = kE.g(1);
  LD(function(a, c) {
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
                      if (!X(e, Y)) {
                        d = e;
                        break a;
                      }
                    }
                  } catch (f) {
                    if (f instanceof Object) {
                      c[5] = f;
                      $D(c);
                      d = Y;
                      break a;
                    }
                    throw f;
                  }
                  d = void 0;
                }
                if (!X(d, Y)) {
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
              var d = a[7], e = a[8], f = a[9], d = a[2], g = d.offsetX, f = d.offsetY, d = I.g ? I.g(KE) : I.call(null, KE), h = Cr.g(d), d = I.g ? I.g(KE) : I.call(null, KE), e = Qn.g(d), d = I.g ? I.g(JE) : I.call(null, JE), d = K(d) - 2, h = SE(h, g, f);
              a[10] = e;
              a[11] = d;
              a[7] = g;
              a[8] = h;
              a[9] = f;
              a[1] = q(h) ? 8 : 9;
              return Y;
            }
            return 1 === d ? (a[2] = null, a[1] = 2, Y) : 4 === d ? YD(a, 7, c) : 15 === d ? (d = a[2], a[2] = d, a[1] = 12, Y) : 13 === d ? (f = a[12], e = a[10], d = a[7], f = a[9], g = a[13], g = O.h(e, g), d = SE(g, d, f), a[12] = d, a[1] = q(d) ? 16 : 17, Y) : 6 === d ? (d = a[2], a[2] = d, a[1] = 3, Y) : 17 === d ? (g = a[13], a[13] = g + 1, a[2] = null, a[1] = 11, Y) : 3 === d ? (d = a[2], ZD(a, d)) : 12 === d ? (d = a[2], a[2] = d, a[1] = 10, Y) : 2 === d ? (a[1] = 4, Y) : 11 === d ? (e = 
            a[10], g = a[13], d = K(e), a[1] = q(g < d) ? 13 : 14, Y) : 9 === d ? (a[13] = 0, a[2] = null, a[1] = 11, Y) : 5 === d ? (a[2] = null, a[1] = 6, Y) : 14 === d ? (d = Hg.p(b, Q, pq, null), a[2] = d, a[1] = 15, Y) : 16 === d ? (f = a[12], d = a[11], g = a[13], e = O.j(f, 0, null), f = O.j(f, 1, null), d = de([Vo, pq, Pl], [g, f, e < d ? e : d]), d = Fg.h ? Fg.h(b, d) : Fg.call(null, b, d), a[2] = d, a[1] = 18, Y) : 10 === d ? (a[14] = a[2], a[2] = null, a[1] = 2, Y) : 18 === d ? (d = a[2], 
            a[2] = d, a[1] = 15, Y) : 8 === d ? (d = a[11], e = a[8], g = O.j(e, 0, null), e = O.j(e, 1, null), d = Hg.p(b, Q, Pl, g < d ? g : d), a[15] = e, a[2] = d, a[1] = 10, Y) : null;
          };
        }(a, c), a, c);
      }(), h = function() {
        var b = d.q ? d.q() : d.call(null);
        b[6] = a;
        return b;
      }();
      return XD(h);
    };
  }(d, c));
}
var EF = new n(null, 6, [33, Zl, 34, Ir, 37, ys, 38, Mo, 39, Yq, 40, vk], null);
function FF(a, b) {
  var c = CF(document, "keydown", function(a) {
    a = a.keyCode;
    return EF.g ? EF.g(a) : EF.call(null, a);
  }), d = kE.g(1);
  LD(function(c, d) {
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
                      if (!X(e, Y)) {
                        d = e;
                        break a;
                      }
                    }
                  } catch (f) {
                    if (f instanceof Object) {
                      c[5] = f;
                      $D(c);
                      d = Y;
                      break a;
                    }
                    throw f;
                  }
                  d = void 0;
                }
                if (!X(d, Y)) {
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
              var g = e[7], h = e[8], y = e[2], D = y.keyCode, D = EF.g ? EF.g(D) : EF.call(null, D), G = I.g ? I.g(JE) : I.call(null, JE), J = K(G) - 2;
              e[7] = y;
              e[9] = J;
              e[8] = D;
              e[1] = q(D) ? 8 : 9;
              return Y;
            }
            if (20 === f) {
              return y = gF(!0), e[2] = y, e[1] = 11, Y;
            }
            if (1 === f) {
              return e[2] = null, e[1] = 2, Y;
            }
            if (4 === f) {
              return YD(e, 7, d);
            }
            if (15 === f) {
              var g = e[7], J = e[9], h = e[8], L = [Pl], N = new T(null, 1, 5, U, L, null), y = Hg.p(a, lh, N, function() {
                return function() {
                  return function(a) {
                    a -= 1;
                    return 0 < a ? a : 0;
                  };
                }(J, h, g, g, J, h, U, L, N, f, c, d);
              }());
              e[2] = y;
              e[1] = 16;
              return Y;
            }
            if (13 === f) {
              return y = I.g ? I.g(a) : I.call(null, a), y = 0 === Pl.g(y), e[1] = q(y) ? 14 : 15, Y;
            }
            if (6 === f) {
              return y = e[2], e[2] = y, e[1] = 3, Y;
            }
            if (17 === f) {
              var g = e[7], J = e[9], h = e[8], $ = [pq], ba = new T(null, 1, 5, U, $, null), y = Hg.p(a, lh, ba, function() {
                return function() {
                  return function(a) {
                    return q(a) ? a - 1 : null;
                  };
                }(J, h, g, g, J, h, U, $, ba, f, c, d);
              }());
              e[2] = y;
              e[1] = 11;
              return Y;
            }
            if (3 === f) {
              return y = e[2], ZD(e, y);
            }
            if (12 === f) {
              var g = e[7], J = e[9], h = e[8], M = [Pl], ka = new T(null, 1, 5, U, M, null), y = Hg.p(a, lh, ka, function() {
                return function(a) {
                  return function(b) {
                    b += 1;
                    return b < a ? b : a;
                  };
                }(J, h, g, g, J, h, U, M, ka, f, c, d);
              }());
              e[2] = y;
              e[1] = 11;
              return Y;
            }
            if (2 === f) {
              return e[1] = 4, Y;
            }
            if (19 === f) {
              return y = gF(!1), e[2] = y, e[1] = 11, Y;
            }
            if (11 === f) {
              return y = e[2], e[2] = y, e[1] = 10, Y;
            }
            if (9 === f) {
              return e[2] = null, e[1] = 10, Y;
            }
            if (5 === f) {
              return e[2] = null, e[1] = 6, Y;
            }
            if (14 === f) {
              return D = b.q ? b.q() : b.call(null), y = Hg.h(a, Le), e[10] = D, e[2] = y, e[1] = 16, Y;
            }
            if (16 === f) {
              return y = e[2], e[2] = y, e[1] = 11, Y;
            }
            if (10 === f) {
              return e[11] = e[2], e[2] = null, e[1] = 2, Y;
            }
            if (18 === f) {
              var g = e[7], J = e[9], h = e[8], W = [pq], fa = new T(null, 1, 5, U, W, null), y = Hg.p(a, lh, fa, function() {
                return function() {
                  return function(a) {
                    return q(a) ? a + 1 : null;
                  };
                }(J, h, g, g, J, h, U, W, fa, f, c, d);
              }());
              e[2] = y;
              e[1] = 11;
              return Y;
            }
            if (8 === f) {
              h = e[8];
              switch(h instanceof V ? h.V : null) {
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
              return Y;
            }
            return null;
          };
        }(c, d), c, d);
      }(), h = function() {
        var a = g.q ? g.q() : g.call(null);
        a[6] = c;
        return a;
      }();
      return XD(h);
    };
  }(d, c));
}
function GF(a) {
  var b = HF(), c = BF, d = IF, e = iD(a), f = fr.g(I.g ? I.g(GE) : I.call(null, GE)), g = C(jD(a)), h = Bq.g(f), l = C(Cx(g));
  a = eF(l, h + 10, f);
  var p = Cl.g(f), e = Je.j(function(a, b, c, d, e, f, g) {
    return function(a, c) {
      var d = Dx(wx(c)), e = ie(a), e = WE(q(e) ? e : f) + g;
      return be.h(a, fF(d, e, b));
    };
  }(e, f, g, h, l, a, p), ae, e), e = new n(null, 2, [Cr, a, Qn, e], null);
  Fg.h ? Fg.h(KE, e) : Fg.call(null, KE, e);
  e = kE.g(1);
  LD(function(a) {
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
                      if (!X(e, Y)) {
                        d = e;
                        break a;
                      }
                    }
                  } catch (f) {
                    if (f instanceof Object) {
                      c[5] = f;
                      $D(c);
                      d = Y;
                      break a;
                    }
                    throw f;
                  }
                  d = void 0;
                }
                if (!X(d, Y)) {
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
              return Y;
            }
            if (6 === d) {
              return c[2] = null, c[1] = 7, Y;
            }
            if (5 === d) {
              var f = c[7], g = function() {
                var a = ri;
                return Eg.g ? Eg.g(a) : Eg.call(null, a);
              }(), h = pg.p(f, Q, Rr, g), e = Hg.h(JE, function() {
                return function(a) {
                  return function(b) {
                    return Fh(Kg.h(I.g ? I.g(IE) : I.call(null, IE), Ld(a, b)));
                  };
                }(h, f, f, f, ri, g, h, d, a);
              }());
              c[8] = e;
              c[2] = null;
              c[1] = 2;
              return Y;
            }
            return 4 === d ? (f = c[7], e = c[2], c[7] = e, c[1] = q(e) ? 5 : 6, Y) : 3 === d ? (e = c[2], ZD(c, e)) : 2 === d ? YD(c, 4, b) : 1 === d ? (c[2] = null, c[1] = 2, Y) : null;
          };
        }(a), a);
      }(), d = function() {
        var b = c.q ? c.q() : c.call(null);
        b[6] = a;
        return b;
      }();
      return XD(d);
    };
  }(e));
  e = Dv("#comportex-viz");
  e.width = .7 * (window.innerWidth - 20);
  e.height = 900;
  DF(e, c);
  FF(c, d);
}
;function JF(a, b) {
  if (a.classList) {
    a.classList.add(b);
  } else {
    var c;
    a.classList ? c = !a.classList.contains(b) : (a.classList ? c = a.classList : (c = a.className, c = ga(c) && c.match(/\S+/g) || []), c = !(0 <= Ta(c, b)));
    c && (a.className += 0 < a.className.length ? " " + b : b);
  }
}
;function KF() {
  Nw.call(this);
  this.Nc = new Ww(this);
  this.vf = this;
  this.qf = null;
}
ra(KF, Nw);
KF.prototype[Sw] = !0;
k = KF.prototype;
k.addEventListener = function(a, b, c, d) {
  bx(this, a, b, c, d);
};
k.removeEventListener = function(a, b, c, d) {
  hx(this, a, b, c, d);
};
k.dispatchEvent = function(a) {
  var b, c = this.qf;
  if (c) {
    for (b = [];c;c = c.qf) {
      b.push(c);
    }
  }
  var c = this.vf, d = a.type || a;
  if (ga(a)) {
    a = new Pw(a, c);
  } else {
    if (a instanceof Pw) {
      a.target = a.target || c;
    } else {
      var e = a;
      a = new Pw(d, c);
      Na(a, e);
    }
  }
  var e = !0, f;
  if (b) {
    for (var g = b.length - 1;!a.Qc && 0 <= g;g--) {
      f = a.currentTarget = b[g], e = LF(f, d, !0, a) && e;
    }
  }
  a.Qc || (f = a.currentTarget = c, e = LF(f, d, !0, a) && e, a.Qc || (e = LF(f, d, !1, a) && e));
  if (b) {
    for (g = 0;!a.Qc && g < b.length;g++) {
      f = a.currentTarget = b[g], e = LF(f, d, !1, a) && e;
    }
  }
  return e;
};
k.ag = function(a, b, c, d) {
  return this.Nc.add(String(a), b, !1, c, d);
};
k.Ng = function(a, b, c, d) {
  this.Nc.remove(String(a), b, c, d);
};
function LF(a, b, c, d) {
  b = a.Nc.vb[String(b)];
  if (!b) {
    return!0;
  }
  b = b.concat();
  for (var e = !0, f = 0;f < b.length;++f) {
    var g = b[f];
    if (g && !g.Rc && g.fd == c) {
      var h = g.zc, l = g.uc || g.src;
      g.ed && Yw(a.Nc, g);
      e = !1 !== h.call(l, d) && e;
    }
  }
  return e && !1 != d.rf;
}
k.Ud = function(a, b, c, d) {
  return this.Nc.Ud(String(a), b, c, d);
};
var MF, NF, OF, PF, QF, RF;
function SF(a, b, c) {
  var d = R.h(Ne, ni(c));
  return 0 < d ? Ie.j(Kj.j(so, nq, gp), Pe, bh.h(xg.h(qf, so), Jg.h(function(b) {
    return function(d) {
      var g = Hx(a, 0, d), h = vj(c, g), l = R.h(Ne, ni(h)), h = sj(h);
      return new n(null, 5, [Sl, d, nq, K(h) / K(g), gp, K(h) / K(c), so, l / b, js, l / K(g)], null);
    };
  }(d), b))) : null;
}
var UF = function TF(b, c) {
  "undefined" === typeof MF && (MF = function(b, c, f, g) {
    this.e = b;
    this.f = c;
    this.Fg = f;
    this.hg = g;
    this.G = 0;
    this.t = 393216;
  }, MF.eb = !0, MF.cb = "org.nfrac.comportex.encoders/t34249", MF.jb = function(b, c) {
    return xc(c, "org.nfrac.comportex.encoders/t34249");
  }, MF.prototype.Bc = function(b, c, f) {
    return Hx(this.e, c, this.f.g ? this.f.g(f) : this.f.call(null, f));
  }, MF.prototype.xd = function(b, c, f) {
    return Ix(this.e, c, f);
  }, MF.prototype.yb = function() {
    return wx(this.e);
  }, MF.prototype.H = function() {
    return this.hg;
  }, MF.prototype.I = function(b, c) {
    return new MF(this.e, this.f, this.Fg, c);
  });
  return new MF(c, b, TF, null);
}, WF = function VF(b) {
  "undefined" === typeof NF && (NF = function(b, d, e) {
    this.e = b;
    this.Wf = d;
    this.ig = e;
    this.G = 0;
    this.t = 393216;
  }, NF.eb = !0, NF.cb = "org.nfrac.comportex.encoders/t34256", NF.jb = function(b, d) {
    return xc(d, "org.nfrac.comportex.encoders/t34256");
  }, NF.prototype.Bc = function(b, d, e) {
    var f = this;
    return R.h(FC, Jg.h(function() {
      return function(b) {
        return Hx(f.e, d, b);
      };
    }(this), e));
  }, NF.prototype.yb = function() {
    return wx(this.e);
  }, NF.prototype.H = function() {
    return this.ig;
  }, NF.prototype.I = function(b, d) {
    return new NF(this.e, this.Wf, d);
  });
  return new NF(b, VF, null);
}, XF = function() {
  function a(a, c) {
    var f = Cx(c), g = Ex(c), h = lh.p(f, new T(null, 1, 5, U, [0], null), Oe, a), l = tC(h);
    "undefined" === typeof OF && (OF = function(a, b, c, d, e, f, g, h) {
      this.pc = a;
      this.Qd = b;
      this.Se = c;
      this.Uf = d;
      this.e = e;
      this.Ac = f;
      this.Rd = g;
      this.jg = h;
      this.G = 0;
      this.t = 393216;
    }, OF.eb = !0, OF.cb = "org.nfrac.comportex.encoders/t34265", OF.jb = function() {
      return function(a, b) {
        return xc(b, "org.nfrac.comportex.encoders/t34265");
      };
    }(f, g, h, l), OF.prototype.Bc = function(a, b, c, d) {
      return function(e, f, g) {
        var h = this;
        return R.h(FC, zg(function() {
          return function(a, b) {
            return Hx(h.e, f + a * h.Se, b);
          };
        }(this, a, b, c, d), g));
      };
    }(f, g, h, l), OF.prototype.yb = function() {
      return function() {
        return this.pc;
      };
    }(f, g, h, l), OF.prototype.H = function() {
      return function() {
        return this.jg;
      };
    }(f, g, h, l), OF.prototype.I = function() {
      return function(a, b) {
        return new OF(this.pc, this.Qd, this.Se, this.Uf, this.e, this.Ac, this.Rd, b);
      };
    }(f, g, h, l));
    return new OF(l, h, g, f, c, a, b, null);
  }
  var b = null, c = function() {
    function a(b, d, h) {
      var l = null;
      2 < arguments.length && (l = H(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      var l = jg.h(d, e), p = Jg.h(Ex, l), t = jg.h(0, Jj.h(Ne, p)), s = R.h(uC, Jg.h(Cx, l)), w = tC(s);
      "undefined" === typeof PF && (PF = function(a, b, c, d, e, f, g, h, l, p) {
        this.pc = a;
        this.Qd = b;
        this.nf = c;
        this.Sg = d;
        this.Te = e;
        this.xb = f;
        this.e = g;
        this.Ac = h;
        this.Rd = l;
        this.kg = p;
        this.G = 0;
        this.t = 393216;
      }, PF.eb = !0, PF.cb = "org.nfrac.comportex.encoders/t34268", PF.jb = function() {
        return function(a, b) {
          return xc(b, "org.nfrac.comportex.encoders/t34268");
        };
      }(l, p, t, s, w), PF.prototype.Bc = function(a, b, c, d, e) {
        return function(f, g, h) {
          return R.h(FC, Jg.p(function() {
            return function(a, b, c) {
              return Hx(a, g + b, c);
            };
          }(this, a, b, c, d, e), this.Te, this.nf, h));
        };
      }(l, p, t, s, w), PF.prototype.yb = function() {
        return function() {
          return this.pc;
        };
      }(l, p, t, s, w), PF.prototype.H = function() {
        return function() {
          return this.kg;
        };
      }(l, p, t, s, w), PF.prototype.I = function() {
        return function(a, b) {
          return new PF(this.pc, this.Qd, this.nf, this.Sg, this.Te, this.xb, this.e, this.Ac, this.Rd, b);
        };
      }(l, p, t, s, w));
      return new PF(w, s, t, p, l, e, d, a, b, null);
    }
    a.A = 2;
    a.o = function(a) {
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
        return c.k(b, e, H(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.A = 2;
  b.o = c.o;
  b.h = a;
  b.k = c.k;
  return b;
}(), ZF = function YF(b, c, d) {
  var e = O.j(d, 0, null), f = O.j(d, 1, null), g = tC(new T(null, 1, 5, U, [b], null)), h = f - e;
  "undefined" === typeof QF && (QF = function(b, c, d, e, f, g, h, D, G, J) {
    this.span = b;
    this.pc = c;
    this.upper = d;
    this.lower = e;
    this.Rg = f;
    this.Eg = g;
    this.$c = h;
    this.dd = D;
    this.$f = G;
    this.lg = J;
    this.G = 0;
    this.t = 393216;
  }, QF.eb = !0, QF.cb = "org.nfrac.comportex.encoders/t34279", QF.jb = function() {
    return function(b, c) {
      return xc(c, "org.nfrac.comportex.encoders/t34279");
    };
  }(g, h, d, e, f), QF.prototype.Bc = function() {
    return function(b, c, d) {
      return q(d) ? (b = this.lower, d = d > b ? d : b, b = this.upper, d = Te(((d < b ? d : b) - this.lower) / this.span * (this.dd - this.$c)), Bj(Hj.h(c + d, c + d + this.$c))) : zj;
    };
  }(g, h, d, e, f), QF.prototype.xd = function() {
    return function(b, c, d) {
      b = Hj.j(this.lower, this.upper, 5 < this.span && 250 > this.span ? 1 : this.span / 50);
      return Kg.h(d, SF(this, b, c));
    };
  }(g, h, d, e, f), QF.prototype.yb = function() {
    return function() {
      return this.pc;
    };
  }(g, h, d, e, f), QF.prototype.H = function() {
    return function() {
      return this.lg;
    };
  }(g, h, d, e, f), QF.prototype.I = function() {
    return function(b, c) {
      return new QF(this.span, this.pc, this.upper, this.lower, this.Rg, this.Eg, this.$c, this.dd, this.$f, c);
    };
  }(g, h, d, e, f));
  return new QF(h, g, f, e, d, d, c, b, YF, null);
}, aG = function $F(b, c) {
  var d = K(c), e = b / d, f = Dj(c, Hj.q()), g = ZF(b, e, new T(null, 2, 5, U, [0, d - 1], null));
  "undefined" === typeof RF && (RF = function(b, c, d, e, f, g, A, y) {
    this.Wd = b;
    this.Ed = c;
    this.$c = d;
    this.Ac = e;
    this.values = f;
    this.dd = g;
    this.xf = A;
    this.mg = y;
    this.G = 0;
    this.t = 393216;
  }, RF.eb = !0, RF.cb = "org.nfrac.comportex.encoders/t34286", RF.jb = function() {
    return function(b, c) {
      return xc(c, "org.nfrac.comportex.encoders/t34286");
    };
  }(d, e, f, g), RF.prototype.Bc = function() {
    return function(b, c, d) {
      return Hx(this.Wd, c, this.Ed.g ? this.Ed.g(d) : this.Ed.call(null, d));
    };
  }(d, e, f, g), RF.prototype.xd = function() {
    return function(b, c, d) {
      return Kg.h(d, SF(this, this.values, c));
    };
  }(d, e, f, g), RF.prototype.yb = function() {
    return function() {
      return wx(this.Wd);
    };
  }(d, e, f, g), RF.prototype.H = function() {
    return function() {
      return this.mg;
    };
  }(d, e, f, g), RF.prototype.I = function() {
    return function(b, c) {
      return new RF(this.Wd, this.Ed, this.$c, this.Ac, this.values, this.dd, this.xf, c);
    };
  }(d, e, f, g));
  return new RF(g, f, e, d, c, b, $F, null);
};
var bG = new T(null, 2, 5, U, [0, 15], null), cG = new n(null, 6, [tk, new T(null, 6, 5, U, [0, 1, 2, 3, 4, 5], null), nr, new T(null, 5, 5, U, [5, 4, 3, 2, 1], null), gs, new T(null, 5, 5, U, [6, 7, 8, 9, 10], null), Pr, new T(null, 5, 5, U, [6, 7, 8, 11, 12], null), qo, new T(null, 8, 5, U, [0, 2, 4, 6, 8, 10, 12, 14], null), jr, new T(null, 8, 5, U, [10, 12, 11, 13, 12, 14, 13, 15], null)], null), dG = sj(cG);
function eG() {
  return Q.k(VB(function(a) {
    return new n(null, 2, [Fr, a, el, null], null);
  }, cG), $k, 0, H([Fq, null], 0));
}
function fG(a) {
  var b = O.h(dG, $k.g(a)), c = a.g ? a.g(b) : a.call(null, b), d = md.h(el.g(c), K(Fr.g(c)) - 1), e = Fq.g(a);
  return lh.j(lh.j(lh.j(a, new T(null, 1, 5, U, [b], null), function(a, b, c, d) {
    return function(a) {
      return c ? Q.j(a, el, null) : q(d) ? a : gb(el.g(a)) ? Q.j(a, el, 0) : lh.j(a, new T(null, 1, 5, U, [el], null), Bd);
    };
  }(b, c, d, e)), new T(null, 1, 5, U, [$k], null), function(a, b, c) {
    return function(a) {
      return c ? PB(K(cG)) : a;
    };
  }(b, c, d, e)), new T(null, 1, 5, U, [Fq], null), function(a, b, c, d) {
    return function(a) {
      return c ? 4 : q(q(d) ? 0 < a - 1 : d) ? a - 1 : q(d) ? null : a;
    };
  }(b, c, d, e));
}
function gG(a) {
  return q(el.g(a)) ? P.h(Fr.g(a), el.g(a)) : null;
}
var hG = UF(function(a) {
  return Jg.h(gG, Jg.h(a, dG));
}, WF(ZF(400, 25, bG))), iG = de([ok, Wk, hl, ml, Gl, Ll, Tl, Xn, uo, yo, op, pp, up, qq, Iq, Xq, kr, Ur, ss, ts], [.2, 12, 5, .01, .2, 7, 9, new T(null, 1, 5, U, [1E3], null), .05, 18, 2, .1, .05, .02, !1, .01, 8, 1E5, .16, 3]);
function jG() {
  return aD(eG(), fG, hG);
}
qa("org.nfrac.comportex.demos.isolated_1d.input_gen", jG);
var kG = function() {
  function a(a, b) {
    return gD(ZC, jG(), a, b);
  }
  function b(a) {
    return c.h(a, iG);
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
qa("org.nfrac.comportex.demos.isolated_1d.n_region_model", kG);
qa("comportexviz.demos.isolated_1d.n_region_model", function(a) {
  return kG.g(a);
});
var lG = new T(null, 2, 5, U, [0, 15], null), mG = new n(null, 6, [tk, new T(null, 6, 5, U, [0, 1, 2, 3, 4, 5], null), nr, new T(null, 5, 5, U, [5, 4, 3, 2, 1], null), gs, new T(null, 5, 5, U, [6, 7, 8, 9, 10], null), Pr, new T(null, 5, 5, U, [6, 7, 8, 11, 12], null), qo, new T(null, 8, 5, U, [0, 2, 4, 6, 8, 10, 12, 14], null), jr, new T(null, 8, 5, U, [10, 12, 11, 13, 12, 14, 13, 15], null)], null), nG = sj(mG), oG = 2 * Ue(Je.h(Ne, Jg.h(K, ni(mG))));
function pG() {
  return VB(function(a) {
    return new n(null, 3, [Fr, a, el, null, qk, PB(oG)], null);
  }, mG);
}
function qG(a) {
  return VB(function(a) {
    return md.h(el.g(a), K(Fr.g(a)) - 1) ? Q.k(a, el, null, H([qk, PB(oG)], 0)) : gb(el.g(a)) && 0 < qk.g(a) ? lh.j(a, new T(null, 1, 5, U, [qk], null), Qe) : gb(el.g(a)) && 0 === qk.g(a) ? Q.j(a, el, 0) : lh.j(a, new T(null, 1, 5, U, [el], null), Bd);
  }, a);
}
function rG(a) {
  return q(el.g(a)) ? P.h(Fr.g(a), el.g(a)) : null;
}
var sG = UF(function(a) {
  return Jg.h(rG, Jg.h(a, nG));
}, WF(ZF(400, 25, lG))), tG = de([ok, Wk, hl, ml, Gl, Ll, Tl, Xn, uo, yo, op, pp, up, qq, Iq, Xq, kr, Ur, ss, ts], [.2, 12, 5, .01, .2, 7, 9, new T(null, 1, 5, U, [1E3], null), .05, 18, 2, .1, .05, .02, !1, .01, 8, 1E5, .16, 3]);
function uG() {
  return aD(pG(), qG, sG);
}
qa("org.nfrac.comportex.demos.mixed_gaps_1d.input_gen", uG);
var vG = function() {
  function a(a, b) {
    return gD(ZC, uG(), a, b);
  }
  function b(a) {
    return c.h(a, tG);
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
qa("org.nfrac.comportex.demos.mixed_gaps_1d.n_region_model", vG);
qa("comportexviz.demos.mixed_gaps_1d.n_region_model", function(a) {
  return vG.g(a);
});
Ks || Ms && Qs("525");
Ks || Ls && Qs("1.9.3");
function wG() {
}
wG.Yf = function() {
  wG.Zf || (wG.Zf = new wG);
};
wG.Yf();
function xG(a, b) {
  var c = Ae(b) ? R.h(Cg, b) : b, d = P.h(c, As), e = P.h(c, fk), c = P.h(c, pr);
  a.save();
  a.translate(c, e);
  a.rotate(Math.PI / 2);
  zE(a, new n(null, 3, [pr, 0, fk, 0, As, d], null));
  uE(a);
}
function yG(a) {
  return function(b, c, d, e, f) {
    var g = zy(b), h = O.j(g, 0, null), l = O.j(g, 1, null);
    O.j(g, 2, null);
    var p = P.h(a, h), g = Jg.h(C, dy(Vr.g(f)));
    f = nD(f, g);
    g = Ix(il.g(b), f, 8);
    b = d - 30;
    f = d - 5;
    var t = Ve(e, 3);
    e = 2 * Ve(e, 3);
    c.save();
    c.font = "small-caps 14px sans-serif";
    c.textAlign = Cf(Yq);
    xG(c, new n(null, 3, [As, "votes %", pr, b, fk, e + 14], null));
    xG(c, new n(null, 3, [As, "votes per bit", pr, f, fk, e + 14], null));
    c.font = "small-caps bold 14px sans-serif";
    c.textBaseline = Cf(tl);
    c.textAlign = Cf(ys);
    zE(c, new n(null, 3, [As, "Sentences", pr, 5, fk, 5], null));
    zE(c, new n(null, 3, [As, "Current sentence", pr, 5, fk, t], null));
    zE(c, new n(null, 3, [As, "Predictions", pr, 5, fk, e], null));
    c.font = "12px sans-serif";
    for (var s = B(zg(Gh, Kg.h(9, Lg.h(h - 4, zg(Gh, a))))), w = null, A = 0, y = 0;;) {
      if (y < A) {
        var D = w.F(null, y), G = O.j(D, 0, null), J = O.j(D, 1, null), D = O.j(J, 0, null), J = O.j(J, 1, null), G = 5 + 24 * (G + 1);
        D === h && (AE(c, "#eee"), yE(c, new n(null, 4, [pr, 0, fk, G - Ve(24, 4), Kl, d, jq, 24], null)), AE(c, "#000"));
        zE(c, new n(null, 3, [As, Av.h(" ", J), pr, 5, fk, G], null));
        y += 1;
      } else {
        if (s = B(s)) {
          S(s) ? (A = x(s), s = z(s), w = A, A = K(A)) : (A = C(s), w = O.j(A, 0, null), y = O.j(A, 1, null), A = O.j(y, 0, null), y = O.j(y, 1, null), w = 5 + 24 * (w + 1), A === h && (AE(c, "#eee"), yE(c, new n(null, 4, [pr, 0, fk, w - Ve(24, 4), Kl, d, jq, 24], null)), AE(c, "#000")), zE(c, new n(null, 3, [As, Av.h(" ", y), pr, 5, fk, w], null)), s = F(s), w = null, A = 0), y = 0;
        } else {
          break;
        }
      }
    }
    h = B(zg(Gh, p));
    p = null;
    for (w = s = 0;;) {
      if (w < s) {
        y = p.F(null, w), A = O.j(y, 0, null), y = O.j(y, 1, null), G = t + 24 * (A + 1), A === l && (AE(c, "#eee"), yE(c, new n(null, 4, [pr, 0, fk, G - Ve(24, 4), Kl, d, jq, 24], null)), AE(c, "#000")), zE(c, new n(null, 3, [As, y, pr, 5, fk, G], null)), w += 1;
      } else {
        if (h = B(h)) {
          S(h) ? (s = x(h), h = z(h), p = s, s = K(s)) : (s = C(h), p = O.j(s, 0, null), s = O.j(s, 1, null), w = t + 24 * (p + 1), p === l && (AE(c, "#eee"), yE(c, new n(null, 4, [pr, 0, fk, w - Ve(24, 4), Kl, d, jq, 24], null)), AE(c, "#000")), zE(c, new n(null, 3, [As, s, pr, 5, fk, w], null)), h = F(h), p = null, s = 0), w = 0;
        } else {
          break;
        }
      }
    }
    d = B(zg(Gh, g));
    l = null;
    for (t = g = 0;;) {
      if (t < g) {
        p = l.F(null, t), h = O.j(p, 0, null), p = O.j(p, 1, null), w = Ae(p) ? R.h(Cg, p) : p, p = P.h(w, js), s = P.h(w, so), w = P.h(w, Sl), h = e + 24 * (h + 1), c.textAlign = Cf(ys), zE(c, new n(null, 3, [As, w, pr, 5, fk, h], null)), c.textAlign = Cf(Yq), zE(c, new n(null, 3, [As, "" + u.g(MB.g(100 * s)), pr, b, fk, h], null)), zE(c, new n(null, 3, [As, "" + u.g(MB.g(p)), pr, f, fk, h], null)), t += 1;
      } else {
        if (d = B(d)) {
          S(d) ? (g = x(d), d = z(d), l = g, g = K(g)) : (g = C(d), l = O.j(g, 0, null), g = O.j(g, 1, null), h = Ae(g) ? R.h(Cg, g) : g, g = P.h(h, js), t = P.h(h, so), h = P.h(h, Sl), l = e + 24 * (l + 1), c.textAlign = Cf(ys), zE(c, new n(null, 3, [As, h, pr, 5, fk, l], null)), c.textAlign = Cf(Yq), zE(c, new n(null, 3, [As, "" + u.g(MB.g(100 * t)), pr, b, fk, l], null)), zE(c, new n(null, 3, [As, "" + u.g(MB.g(g)), pr, f, fk, l], null)), d = F(d), l = null, g = 0), t = 0;
        } else {
          break;
        }
      }
    }
    return uE(c);
  };
}
;function zG(a, b) {
  return function(c) {
    var d = O.j(c, 0, null), e = O.j(c, 1, null);
    c = O.j(c, 2, null);
    var f = P.h(a, d), g = K(a);
    return e === K(f) ? c === b - 1 ? new T(null, 3, 5, U, [((d + 1) % g + g) % g, 0, 0], null) : new T(null, 3, 5, U, [d, 0, c + 1], null) : new T(null, 3, 5, U, [d, e + 1, c], null);
  };
}
function AG(a) {
  return gh.h(function(a) {
    return Fh(ig.k(new T(null, 1, 5, U, ["\x3e"], null), a, H([new T(null, 1, 5, U, ["."], null)], 0)));
  }, gh.h(function(a) {
    return Cv.h(a, /\s+/);
  }, Cv.h(sa(a), /\s*\.\s*/)));
}
function BG(a, b) {
  var c = AG(a), d = Cj(R.h(ig, c)), e = 35 * K(d), d = UF(function(a) {
    return function(b) {
      var c = O.j(b, 0, null), d = O.j(b, 1, null);
      O.j(b, 2, null);
      return ih.h(a, new T(null, 2, 5, U, [c, d], null));
    };
  }(c, d, e), aG(e, d));
  return aD(new T(null, 3, 5, U, [0, 0, 0], null), zG(c, b), d);
}
var CG = de([ok, zk, Wk, hl, ml, Gl, Jl, Ll, Tl, Xn, uo, yo, op, pp, up, qq, Iq, Xq, kr, Ur, ss, ts], [.2, !1, 12, 5, .01, .2, .3, 7, 9, new T(null, 1, 5, U, [1E3], null), .05, 18, 2, 1, .05, .03, !1, .01, 8, 1E5, .16, 3]);
qa("org.nfrac.comportex.demos.simple_sentences.n_region_model", function() {
  function a(a, b, c, g) {
    a = BG(a, b);
    return gD(ZC, a, c, g);
  }
  function b(a, b) {
    return c(a, b, CG);
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
}());
function DG(a, b, c, d) {
  KF.call(this);
  this.Kc = c || Iu();
  this.ud = a;
  this.zb = [];
  this.Mg = b ? b : EG;
  this.Og = !!d;
  this.ud.className = "goog-tabpane";
  a = [];
  for (b = Qu(this.ud);b;) {
    a.push(b), b = void 0 != b.nextElementSibling ? b.nextElementSibling : Ru(b.nextSibling);
  }
  this.Db = this.Kc.tc("ul", {className:"goog-tabpane-tabs", tabIndex:"0"});
  this.Jb = this.Kc.tc("div", "goog-tabpane-cont");
  this.ud.appendChild(this.Jb);
  b = this.ud;
  switch(this.Mg) {
    case EG:
      b.insertBefore(this.Db, this.Jb);
      b.insertBefore(FG(this), this.Jb);
      JF(b, "goog-tabpane-top");
      break;
    case 1:
      b.appendChild(this.Db);
      b.appendChild(FG(this));
      JF(b, "goog-tabpane-bottom");
      break;
    case 2:
      b.insertBefore(this.Db, this.Jb);
      JF(b, "goog-tabpane-left");
      break;
    case 3:
      b.insertBefore(this.Db, this.Jb);
      JF(b, "goog-tabpane-right");
      break;
    default:
      throw Error("Invalid tab location");;
  }
  this.Db.tabIndex = 0;
  bx(this.Db, this.Og ? "mousedown" : "click", this.qg, !1, this);
  bx(this.Db, "keydown", this.rg, !1, this);
  for (b = 0;c = a[b];b++) {
    c = new GG(c);
    if (c.Cc && c.Cc != this && c.Cc instanceof DG) {
      d = c.Cc;
      var e = c;
      "number" == typeof e && (e = d.zb[e]);
      d.zb.splice(e.xc, 1);
      var f = e;
      f.Cc = null;
      f.xc = ca(void 0) ? void 0 : null;
      (f = e.td) && f.parentNode && f.parentNode.removeChild(f);
      (e = e.Jb) && e.parentNode && e.parentNode.removeChild(e);
      f = void 0;
      for (e = 0;f = d.zb[e];e++) {
        var g = e;
        f.Cc = d;
        f.xc = ca(g) ? g : null;
      }
    }
    d = this.zb.length;
    ca(void 0) && void 0 != d ? (d = void 0, this.zb.splice(d, 0, c), this.Db.insertBefore(c.td, this.Db.childNodes[d])) : (this.zb.push(c), this.Db.appendChild(c.td));
    e = c;
    f = d;
    e.Cc = this;
    e.xc = ca(f) ? f : null;
    this.Mb || (this.Mb = c, this.dispatchEvent(new HG("change", this, this.Mb)));
    this.Jb.appendChild(c.Jb);
    IG(c, c == this.Mb);
    c = void 0;
    for (d += 1;c = this.zb[d];d++) {
      c.xc = d;
    }
  }
}
ra(DG, KF);
var EG = 0;
function FG(a) {
  var b = Iu(void 0), c = null, d = b.Jc;
  Ks && d.createStyleSheet ? (c = d.createStyleSheet(), zv(c)) : (d = Lu(b.Jc, "head")[0], d || (c = Lu(b.Jc, "body")[0], d = b.tc("head"), c.parentNode.insertBefore(d, c)), c = b.tc("style"), zv(c), b.appendChild(d, c));
  return a.Kc.tc("div", "goog-tabpane-clear");
}
function JG(a, b) {
  if (0 <= b && b < a.zb.length) {
    var c = a.zb[b];
    !c.isEnabled() || a.Mb && c == a.Mb || (IG(a.Mb, !1), IG(c, !0), a.Mb = c, a.dispatchEvent(new HG("change", a, a.Mb)));
  }
}
DG.prototype.qg = function(a) {
  for (var b = a.target;b != this.Db;) {
    if ("LI" == b.tagName) {
      var c;
      for (c = 0;b = b.previousSibling;c++) {
      }
      JG(this, c);
      break;
    }
    b = b.parentNode;
  }
  a.preventDefault();
};
DG.prototype.rg = function(a) {
  if (!(a.altKey || a.metaKey || a.ctrlKey)) {
    switch(a.keyCode) {
      case 37:
        a = this.Mb.xc - 1;
        JG(this, 0 > a ? this.zb.length - 1 : a);
        break;
      case 39:
        a = this.Mb.xc + 1;
        JG(this, a >= this.zb.length ? 0 : a);
        break;
      case 36:
        JG(this, 0);
        break;
      case 35:
        JG(this, this.zb.length - 1);
    }
  }
};
function GG(a, b, c) {
  var d, e;
  if (ga(a) && !ca(b)) {
    d = a;
  } else {
    if (b) {
      d = b, e = a;
    } else {
      if (a) {
        if (b = Qu(a)) {
          d = Uu(b), b.parentNode.removeChild(b);
        }
        e = a;
      }
    }
  }
  this.Kc = c || Iu();
  this.Jb = e || this.Kc.tc("div");
  this.td = this.Kc.tc("li", null, d);
  this.xc = this.Cc = null;
  this.Vf = !0;
}
GG.prototype.isEnabled = function() {
  return this.Vf;
};
function IG(a, b) {
  a.isEnabled() && (a.Jb.style.display = b ? "" : "none", a.td.className = b ? "goog-tabpane-tab-selected" : "goog-tabpane-tab");
}
function HG(a, b, c) {
  Pw.call(this, a, b);
  this.page = c;
}
ra(HG, Pw);
var KG = function() {
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
function LG(a) {
  return Math.floor.g ? Math.floor.g(a) : Math.floor.call(null, a);
}
function NG(a) {
  return Math.ceil.g ? Math.ceil.g(a) : Math.ceil.call(null, a);
}
function OG(a) {
  return Je.h(Ne, a) / K(a);
}
var PG = function() {
  function a(a, b, c) {
    a = Hj.j(a, b, c);
    return(C(a) % c + c) % c === (b % c + c) % c ? ig.h(a, new T(null, 1, 5, U, [b], null)) : a;
  }
  function b(a, b) {
    return ig.h(Hj.h(a, b), new T(null, 1, 5, U, [b], null));
  }
  function c(a) {
    return Hj.g(a);
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
var QG = new T(null, 6, 5, U, [1, 5, 2, 2.5, 4, 3], null);
function sL(a) {
  return C(function() {
    return function c(d) {
      return new Ef(null, function() {
        for (var e = d;;) {
          if (e = B(e)) {
            if (S(e)) {
              var f = x(e), g = K(f), h = $f(g);
              a: {
                for (var l = 0;;) {
                  if (l < g) {
                    var p = v.h(f, l), t = O.j(p, 0, null), p = O.j(p, 1, null);
                    md.h(p, a) && h.add(t);
                    l += 1;
                  } else {
                    f = !0;
                    break a;
                  }
                }
                f = void 0;
              }
              return f ? cg(eg(h), c(z(e))) : cg(eg(h), null);
            }
            f = C(e);
            h = O.j(f, 0, null);
            f = O.j(f, 1, null);
            if (md.h(f, a)) {
              return Ld(h, c(E(e)));
            }
            e = E(e);
          } else {
            return null;
          }
        }
      }, null, null);
    }(zg(Gh, QG));
  }());
}
function tL(a, b, c) {
  c = q(c) ? 1 : 0;
  return 1 >= K(QG) ? 1 - b + c : 1 - sL(a) / (K(QG) - 1) - b + c;
}
function uL(a, b, c, d) {
  return 1 - .5 * ((KG.h(b - d, 2) + KG.h(a - c, 2)) / KG.h(.1 * (b - a), 2));
}
function vL(a, b, c) {
  a = b - a;
  return c > a ? 1 - KG.h((c - a) / (.2 * a), 2) : 1;
}
function wL(a, b) {
  var c = a / b, d = b / a;
  return 2 - (c > d ? c : d);
}
function xL(a, b) {
  return a >= b ? 2 - a / b : 1;
}
function yL(a) {
  var b = O.j(a, 0, null), c = O.j(a, 1, null), d = O.j(a, 2, null);
  a = O.j(a, 3, null);
  var e = new T(null, 4, 5, U, [.2, .25, .5, .05], null);
  return b * (e.g ? e.g(0) : e.call(null, 0)) + c * (e.g ? e.g(1) : e.call(null, 1)) + d * (e.g ? e.g(2) : e.call(null, 2)) + a * (e.g ? e.g(3) : e.call(null, 3));
}
var zL = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = H(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    var e = O.j(a, 0, null), f = O.j(a, 1, null), g = Ae(b) ? R.h(Cg, b) : b, h = P.j(g, Xo, !1), l = P.j(g, Oq, 500), p = P.j(g, rk, .01);
    if ("number" === typeof e && "number" === typeof f && qg.h(e, f)) {
      for (var t = Eg.g ? Eg.g(-2) : Eg.call(null, -2), s = Eg.g ? Eg.g(pi) : Eg.call(null, pi), w = QG;!ke(w);) {
        for (var A = C(w), y = 1;;) {
          var D = tL(A, y, !0);
          if (yL(new T(null, 4, 5, U, [D, 1, 1, 1], null)) < (I.g ? I.g(t) : I.call(null, t))) {
            break;
          } else {
            for (var G = 2;;) {
              var J = xL(G / l, p);
              if (yL(new T(null, 4, 5, U, [D, 1, J, 1], null)) < (I.g ? I.g(t) : I.call(null, t))) {
                break;
              } else {
                for (var L = NG(Math.log((f - e) / ((G + 1) * y * G)) / Math.LN10);;) {
                  var N = A * y * KG.h(10, L), $ = vL(e, f, (G - 1) * N);
                  if (yL(new T(null, 4, 5, U, [D, $, J, 1], null)) < (I.g ? I.g(t) : I.call(null, t))) {
                    break;
                  } else {
                    for (var $ = e / N, ba = LG(f / N) - (G - 1);;) {
                      if (!(ba > $)) {
                        var M = ba * N, ka = M + (G - 1) * N, W = tL(A, y, 0 < ka && 0 > M && 0 === (M % N + N) % N), fa = uL(e, f, M, ka), fa = yL(new T(null, 4, 5, U, [W, fa, wL(G / l, p), 1], null));
                        if (!(fa < (I.g ? I.g(t) : I.call(null, t)))) {
                          W = t;
                          Fg.h ? Fg.h(W, fa) : Fg.call(null, W, fa);
                          W = s;
                          M = new n(null, 3, [uk, M, mq, ka, as, N], null);
                          Fg.h ? Fg.h(W, M) : Fg.call(null, W, M);
                          ba += 1 / y;
                          continue;
                        }
                      }
                      break;
                    }
                    L += 1;
                  }
                }
                G += 1;
              }
            }
            y += 1;
          }
        }
        w = F(w);
      }
      var ea = I.g ? I.g(s) : I.call(null, s), w = new T(null, 2, 5, U, [q(h) ? e : function() {
        var a = uk.g(ea);
        return a < e ? a : e;
      }(), q(h) ? f : function() {
        var a = mq.g(ea);
        return a > f ? a : f;
      }()], null);
      return new n(null, 4, [xq, w, uk, C(w), mq, Pd(w), Zq, bh.h(function(a, b) {
        return function(a) {
          var c = O.j(b, 0, null), d = O.j(b, 1, null);
          return c <= a && a <= d;
        };
      }(ea, w, t, s, a, e, f, b, g, h, l, p), PG.j(uk.g(ea), mq.g(ea), as.g(ea)))], null);
    }
    return new n(null, 4, [xq, 0, uk, e, mq, f, Zq, ae], null);
  }
  a.A = 1;
  a.o = function(a) {
    var d = C(a);
    a = E(a);
    return b(d, a);
  };
  a.k = b;
  return a;
}();
function AL(a, b, c, d) {
  this.domain = a;
  this.nb = b;
  this.n = c;
  this.l = d;
  this.t = 2229667595;
  this.G = 8192;
  2 < arguments.length ? (this.n = c, this.l = d) : this.l = this.n = null;
}
k = AL.prototype;
k.L = function(a, b) {
  return Cb.j(this, b, null);
};
k.M = function(a, b, c) {
  switch(b instanceof V ? b.V : null) {
    case "range":
      return this.nb;
    case "domain":
      return this.domain;
    default:
      return P.j(this.l, b, c);
  }
};
k.O = function(a, b, c) {
  return Qj(b, function() {
    return function(a) {
      return Qj(b, Wj, "", " ", "", c, a);
    };
  }(this), "#c2.scale._linear{", ", ", "}", c, ig.h(new T(null, 2, 5, U, [new T(null, 2, 5, U, [Br, this.domain], null), new T(null, 2, 5, U, [ps, this.nb], null)], null), this.l));
};
k.H = function() {
  return this.n;
};
k.T = function() {
  return 2 + K(this.l);
};
k.Q = function() {
  var a = this.w;
  return null != a ? a : this.w = a = uf(this);
};
k.N = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && ii(this, b) : b) ? !0 : !1;
};
k.va = function(a, b) {
  return Ce(new xj(null, new n(null, 2, [Br, null, ps, null], null), null), b) ? ee.h(Nd(fh.h(pi, this), this.n), b) : new AL(this.domain, this.nb, this.n, rg(ee.h(this.l, b)), null);
};
k.ga = function(a, b, c) {
  return q(X.h ? X.h(Br, b) : X.call(null, Br, b)) ? new AL(c, this.nb, this.n, this.l, null) : q(X.h ? X.h(ps, b) : X.call(null, ps, b)) ? new AL(this.domain, c, this.n, this.l, null) : new AL(this.domain, this.nb, this.n, Q.j(this.l, b, c), null);
};
k.R = function() {
  return B(ig.h(new T(null, 2, 5, U, [new T(null, 2, 5, U, [Br, this.domain], null), new T(null, 2, 5, U, [ps, this.nb], null)], null), this.l));
};
k.I = function(a, b) {
  return new AL(this.domain, this.nb, b, this.l, this.w);
};
k.S = function(a, b) {
  return pe(b) ? Kb(this, v.h(b, 0), v.h(b, 1)) : Je.j(ub, this, b);
};
k.call = function(a, b) {
  a = this;
  var c = $d(a.domain) - C(a.domain), d = $d(a.nb) - C(a.nb);
  return C(a.nb) + d * ((b - C(a.domain)) / c);
};
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(mb(b)));
};
k.g = function(a) {
  var b = $d(this.domain) - C(this.domain), c = $d(this.nb) - C(this.nb);
  return C(this.nb) + c * ((a - C(this.domain)) / b);
};
var BL = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = H(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = uj.k(H([new n(null, 2, [Br, new T(null, 2, 5, U, [0, 1], null), ps, new T(null, 2, 5, U, [0, 1], null)], null), R.h(Cg, a)], 0));
    return new AL(Br.g(a), ps.g(a), null, ee.k(a, Br, H([ps], 0)));
  }
  a.A = 0;
  a.o = function(a) {
    a = B(a);
    return b(a);
  };
  a.k = b;
  return a;
}();
function CL(a) {
  return ne(a) && md.h(2, K(a)) ? a : oe(a) ? new T(null, 2, 5, U, [pr.g(a), fk.g(a)], null) : null;
}
function DL(a) {
  var b = CL(a);
  a = O.j(b, 0, null);
  b = O.j(b, 1, null);
  return "translate(" + u.g(a) + "," + u.g(b) + ")";
}
var EL = function() {
  function a(a, b) {
    var c = CL(b), g = O.j(c, 0, null), c = O.j(c, 1, null);
    return "rotate(" + u.g(a) + "," + u.g(g) + "," + u.g(c) + ")";
  }
  function b(a) {
    return c.h(a, new T(null, 2, 5, U, [0, 0], null));
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
}(), FL = function() {
  function a(a, d, e) {
    var f = null;
    2 < arguments.length && (f = H(Array.prototype.slice.call(arguments, 2), 0));
    return b.call(this, a, d, f);
  }
  function b(a, b, e) {
    var f = Ae(e) ? R.h(Cg, e) : e, g = P.j(f, qp, 28), h = P.h(f, sq), l = P.j(f, Ck, 9), p = P.j(f, vo, 6), t = P.j(f, Ql, u), s = P.j(f, ho, ys), w = function() {
      switch(s instanceof V ? s.V : null) {
        case "bottom":
          return new T(null, 6, 5, U, [fk, pr, Tn, Lr, rr, es], null);
        case "top":
          return new T(null, 6, 5, U, [fk, pr, Tn, Lr, rr, es], null);
        case "right":
          return new T(null, 6, 5, U, [pr, fk, rr, es, Tn, Lr], null);
        case "left":
          return new T(null, 6, 5, U, [pr, fk, rr, es, Tn, Lr], null);
        default:
          throw Error("No matching clause: " + u.g(s));;
      }
    }(), A = O.j(w, 0, null), y = O.j(w, 1, null), D = O.j(w, 2, null), G = O.j(w, 3, null), J = O.j(w, 4, null), L = O.j(w, 5, null), N = function() {
      switch(s instanceof V ? s.V : null) {
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
    return new T(null, 5, 5, U, [fp, new n(null, 1, [uq, "axis " + u.g(Cf(s))], null), new T(null, 2, 5, U, [yl, R.h(Cg, Yg.h(new T(null, 2, 5, U, [J, L], null), ps.g(a)))], null), new T(null, 2, 5, U, [al, Mv(Jg.j(Gh, b, Ng.g(a)), function(a, b, c, d, e, f, g, h, l, p, s, t, w, y, A) {
      return function(a) {
        var f = O.j(a, 0, null);
        a = O.j(a, 1, null);
        return new T(null, 4, 5, U, [Dk, new n(null, 1, [Tk, DL(new si([b, 0, c, a.g ? a.g(f) : a.call(null, f)]))], null), new T(null, 3, 5, U, [As, new si([b, h * w]), A.g ? A.g(f) : A.call(null, f)], null), new T(null, 2, 5, U, [tp, new si([d, 0, e, h * y])], null)], null);
      };
    }(w, A, y, D, G, J, L, N, e, f, g, h, l, p, t, s))], null), q(h) ? new T(null, 3, 5, U, [vl, new n(null, 1, [Tk, "" + u.g(DL(new si([A, N * g, y, OG(ps.g(a))]))) + " " + u.g(function() {
      switch(s instanceof V ? s.V : null) {
        case "right":
          return EL.g(90);
        case "left":
          return EL.g(-90);
        default:
          return "";
      }
    }())], null), h], null) : null], null);
  }
  a.A = 2;
  a.o = function(a) {
    var d = C(a);
    a = F(a);
    var e = C(a);
    a = E(a);
    return b(d, e, a);
  };
  a.k = b;
  return a;
}();
function GL(a) {
  return R.h(Ne, a) / K(a);
}
function HL(a, b) {
  var c = sj(C(b));
  return fh.h(pi, function() {
    return function(c) {
      return function f(g) {
        return new Ef(null, function() {
          return function() {
            for (;;) {
              var c = B(g);
              if (c) {
                if (S(c)) {
                  var d = x(c), p = K(d), t = $f(p);
                  return function() {
                    for (var c = 0;;) {
                      if (c < p) {
                        var f = v.h(d, c), g = t, h = U, s = f, f = Jg.h(f, b), f = a.g ? a.g(f) : a.call(null, f);
                        g.add(new T(null, 2, 5, h, [s, f], null));
                        c += 1;
                      } else {
                        return!0;
                      }
                    }
                  }() ? cg(eg(t), f(z(c))) : cg(eg(t), null);
                }
                var s = C(c);
                return Ld(new T(null, 2, 5, U, [s, function() {
                  var c = Jg.h(s, b);
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
function IL(a, b, c) {
  a = lh.p(a, new T(null, 1, 5, U, [Yo], null), be, HL(GL, b));
  b = K(Yo.g(a));
  b > c && ug(b) ? (c = Ae(a) ? R.h(Cg, a) : a, a = P.h(c, Yo), b = 2 * P.h(c, ks), c = Q.k(c, ks, b, H([Yo, gh.h(yg.h(HL, GL), hh.h(2, a))], 0))) : c = a;
  return c;
}
function JL(a) {
  var b = function() {
    var a = new n(null, 3, [ks, 1, Yo, ae, Gr, 200], null);
    return Eg.g ? Eg.g(a) : Eg.call(null, a);
  }(), c = kE.g(1);
  LD(function(b, c) {
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
                      if (!X(e, Y)) {
                        d = e;
                        break a;
                      }
                    }
                  } catch (f) {
                    if (f instanceof Object) {
                      c[5] = f;
                      $D(c);
                      d = Y;
                      break a;
                    }
                    throw f;
                  }
                  d = void 0;
                }
                if (!X(d, Y)) {
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
              return d = b, d[2] = b[2], d[1] = 3, Y;
            }
            if (6 === d) {
              var e = b[7], d = Hg.p(c, IL, e, 200), e = null == e ? null : sb(e);
              b[8] = d;
              b[9] = e;
              b[2] = null;
              b[1] = 2;
              return Y;
            }
            if (5 === d) {
              return e = b[7], b[9] = e, b[2] = null, b[1] = 2, Y;
            }
            if (4 === d) {
              var e = b[9], d = be.h(e, b[2]), e = K(d), f = I.g ? I.g(c) : I.call(null, c), f = ks.g(f);
              b[7] = d;
              b[1] = q(e < f) ? 5 : 6;
              return Y;
            }
            return 3 === d ? (d = b[2], ZD(b, d)) : 2 === d ? YD(b, 4, a) : 1 === d ? (e = ae, b[9] = e, b[2] = null, b[1] = 2, Y) : null;
          };
        }(b, c), b, c);
      }(), g = function() {
        var a = f.q ? f.q() : f.call(null);
        a[6] = b;
        return a;
      }();
      return XD(g);
    };
  }(c, b));
  return b;
}
function KL(a, b) {
  var c = new T(null, 3, 5, U, [oq, jp, wr], null), d = new n(null, 4, [ys, 50, Yq, 30, gl, 50, tl, 20], null), e = function() {
    var a = new Lv(null, !0, function(a) {
      return function() {
        var d = Ae(b) ? R.h(Cg, b) : b, e = P.h(d, ks), f = P.h(d, Gr), g = P.h(d, Yo), w = e * f, A = Po.g(ie(g)), y = .1 * A, D = BL.k(H([Br, new T(null, 2, 5, U, [0, w], null), ps, new T(null, 2, 5, U, [0, 399], null)], 0)), G = Zq.g(zL.k(Br.g(D), H([Oq, 400], 0))), J = BL.k(H([Br, new T(null, 2, 5, U, [0, y], null), ps, new T(null, 2, 5, U, [179, 0], null)], 0)), L = BL.k(H([Br, new T(null, 2, 5, U, [0, y], null), ps, new T(null, 2, 5, U, [0, 179], null)], 0)), N = Zq.g(zL.k(Br.g(J), H([Oq, 450], 
        0)));
        return 0 < A ? new T(null, 3, 5, U, [Zo, new T(null, 3, 5, U, [Wo, new n(null, 1, [mo, "text/css"], null), R.J(u, "g.timestep rect { stroke-width: 0px; }", ".plot-space line { stroke: black; }", ".plot-space text { font-size: 80%; }", function() {
          return function(a, b, c, d, e, f, g, h, l, p, s, t, w, y, A) {
            return function ib(D) {
              return new Ef(null, function() {
                return function() {
                  for (;;) {
                    var a = B(D);
                    if (a) {
                      if (S(a)) {
                        var b = x(a), c = K(b), d = $f(c);
                        return function() {
                          for (var a = 0;;) {
                            if (a < c) {
                              var e = v.h(b, a);
                              dg(d, "." + u.g(Cf(e)) + " { fill: " + u.g(function() {
                                var a = e;
                                return Z.g ? Z.g(a) : Z.call(null, a);
                              }()) + "}");
                              a += 1;
                            } else {
                              return!0;
                            }
                          }
                        }() ? cg(eg(d), ib(z(a))) : cg(eg(d), null);
                      }
                      var e = C(a);
                      return Ld("." + u.g(Cf(e)) + " { fill: " + u.g(function() {
                        var a = e;
                        return Z.g ? Z.g(a) : Z.call(null, a);
                      }()) + "}", ib(E(a)));
                    }
                    return null;
                  }
                };
              }(a, b, c, d, e, f, g, h, l, p, s, t, w, y, A), null, null);
            };
          }(b, d, e, f, g, w, A, y, D, D, G, J, L, N, a)(c);
        }())], null), new T(null, 3, 5, U, [Lq, new n(null, 1, [Wo, new n(null, 4, [dr, "block", Ds, "auto", Un, 400 + ys.g(a) + Yq.g(a), qs, 180 + gl.g(a) + tl.g(a)], null)], null), new T(null, 5, 5, U, [iq, new n(null, 1, [Tk, DL(new T(null, 2, 5, U, [ys.g(a), tl.g(a)], null))], null), FL.k(J, N, H([ho, ys, Ck, 28, sq, "n. columns", qp, 35], 0)), new T(null, 3, 5, U, [fp, new n(null, 1, [Tk, DL(new T(null, 2, 5, U, [0, 180], null))], null), FL.k(D, G, H([ho, gl, Ck, 18, sq, "timestep", qp, 35], 
        0))], null), new T(null, 2, 5, U, [fp, Mv.k(zg(Gh, g), function(a, b, d, e, f, g, h, l, p, s, t, w, y, A, D) {
          return function(G) {
            var J = O.j(G, 0, null), L = O.j(G, 1, null), N = Jg.h(L, c), Ua = Jj.h(Ne, N);
            return fh.h(new T(null, 1, 5, U, [to], null), function() {
              return function(a, b, c, d, e, f, g, h, l, p, s, t, w, M, y, A, D, G, J, W) {
                return function Cc(L) {
                  return new Ef(null, function(a, b, c, d, e, f, g, h, l, p, s, t, w, M, y, A, D, G) {
                    return function() {
                      for (;;) {
                        var a = B(L);
                        if (a) {
                          if (S(a)) {
                            var b = x(a), c = K(b), e = $f(c);
                            return function() {
                              for (var a = 0;;) {
                                if (a < c) {
                                  var f = v.h(b, a), g = O.j(f, 0, null), l = O.j(f, 1, null), p = O.j(f, 2, null);
                                  dg(e, new T(null, 2, 5, U, [$r, new n(null, 5, [uq, g, pr, function() {
                                    var a = d * h;
                                    return M.g ? M.g(a) : M.call(null, a);
                                  }(), fk, function() {
                                    var a = p;
                                    return D.g ? D.g(a) : D.call(null, a);
                                  }(), Un, y.g ? y.g(h) : y.call(null, h), qs, function() {
                                    var a = l;
                                    return G.g ? G.g(a) : G.call(null, a);
                                  }()], null)], null));
                                  a += 1;
                                } else {
                                  return!0;
                                }
                              }
                            }() ? cg(eg(e), Cc(z(a))) : cg(eg(e), null);
                          }
                          var f = C(a), g = O.j(f, 0, null), l = O.j(f, 1, null), p = O.j(f, 2, null);
                          return Ld(new T(null, 2, 5, U, [$r, new n(null, 5, [uq, g, pr, function() {
                            var a = d * h;
                            return M.g ? M.g(a) : M.call(null, a);
                          }(), fk, function() {
                            var a = p;
                            return D.g ? D.g(a) : D.call(null, a);
                          }(), Un, y.g ? y.g(h) : y.call(null, h), qs, function() {
                            var a = l;
                            return G.g ? G.g(a) : G.call(null, a);
                          }()], null)], null), Cc(E(a)));
                        }
                        return null;
                      }
                    };
                  }(a, b, c, d, e, f, g, h, l, p, s, t, w, M, y, A, D, G, J, W), null, null);
                };
              }(N, Ua, G, J, L, a, b, d, e, f, g, h, l, p, s, t, w, y, A, D)(Jg.p(Gh, c, N, Ua));
            }());
          };
        }(b, d, e, f, g, w, A, y, D, D, G, J, L, N, a), H([dp, xg.h(Rn, Pd)], 0))], null)], null)], null)], null) : null;
      };
    }(d), ak.g("computed-observable"), pi, pi);
    I.g ? I.g(a) : I.call(null, a);
    return a;
  }(), f = Dv(a);
  xv(f, I.g ? I.g(e) : I.call(null, e));
  Yj(e, xo, function(a, b) {
    return function() {
      return xv(b, I.g ? I.g(a) : I.call(null, a));
    };
  }(e, f, d));
  return e;
}
;function LL(a) {
  return R.j(u, "comportex-", Zg("_", Jg.h(function(a) {
    a = a.replace(new RegExp("?".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), "g"), "_QMARK_");
    return a;
  }, Jg.h(function(a) {
    return "number" === typeof a ? "" + u.g(a) : Cf(a);
  }, a))));
}
function ML(a, b, c) {
  return new T(null, 3, 5, U, [sq, new T(null, 2, 5, U, [Cr, new n(null, 3, [tq, LL(b), mo, "checkbox", Eq, q(ih.h(a, b)) ? "checked" : null], null)], null), c], null);
}
function NL(a) {
  var b = new T(null, 2, 5, U, [rl, kq], null), c = new T(null, 3, 5, U, [Uo, Go, is], null);
  return new T(null, 3, 5, U, [sq, "Synapses from ", new T(null, 3, 5, U, [rs, new n(null, 1, [tq, LL(b)], null), function() {
    return function e(c) {
      return new Ef(null, function() {
        for (;;) {
          var g = B(c);
          if (g) {
            if (S(g)) {
              var h = x(g), l = K(h), p = $f(l);
              a: {
                for (var t = 0;;) {
                  if (t < l) {
                    var s = v.h(h, t), s = new T(null, 3, 5, U, [$o, new n(null, 2, [Sl, Cf(s), Uk, md.h(ih.h(a, b), s) ? "selected" : null], null), Cf(s)], null);
                    p.add(s);
                    t += 1;
                  } else {
                    h = !0;
                    break a;
                  }
                }
                h = void 0;
              }
              return h ? cg(eg(p), e(z(g))) : cg(eg(p), null);
            }
            p = C(g);
            return Ld(new T(null, 3, 5, U, [$o, new n(null, 2, [Sl, Cf(p), Uk, md.h(ih.h(a, b), p) ? "selected" : null], null), Cf(p)], null), e(E(g)));
          }
          return null;
        }
      }, null, null);
    }(c);
  }()], null)], null);
}
function OL(a, b) {
  var c = O.j(b, 0, null), d = O.j(b, 1, null);
  return new T(null, 3, 5, U, [sq, new T(null, 2, 5, U, [Nq, Cf(c)], null), new T(null, 2, 5, U, [Cr, new n(null, 2, [tq, LL(new T(null, 2, 5, U, [a, c], null)), Sl, "" + u.g(d)], null)], null)], null);
}
function PL() {
  var a = QL, b = RL, c = SL, d = IF, e = TL, f = function() {
    var d = new Lv(null, !0, function() {
      var d = U, e = U, f = new T(null, 2, 5, U, [eo, "Simulation"], null), g = new T(null, 3, 5, U, [sq, "Timestep:", new T(null, 2, 5, U, [Qk, xy(I.g ? I.g(a) : I.call(null, a))], null)], null), h = U, A = new n(null, 1, [uq, "detail"], null), y;
      if (q(I.g ? I.g(b) : I.call(null, b))) {
        y = I.g ? I.g(a) : I.call(null, a);
        if (q(Vl.g(ap.g(y)))) {
          var D = ap.g(y), G = (new Date).getTime() - Vl.g(D);
          y = (xy(y) - Rn.g(D)) / G * 1E3;
        } else {
          y = null;
        }
        y = rE("%.1f steps/sec.", y);
      } else {
        y = null;
      }
      return new T(null, 3, 5, d, [Vq, new T(null, 11, 5, e, [lk, f, g, new T(null, 3, 5, h, [Ak, A, y], null), new T(null, 1, 5, U, [lr], null), new T(null, 3, 5, U, [jl, new n(null, 1, [Wo, new n(null, 1, [dr, q(I.g ? I.g(b) : I.call(null, b)) ? "none" : null], null)], null), "Start"], null), new T(null, 3, 5, U, [Pq, new n(null, 1, [Wo, new n(null, 1, [dr, q(I.g ? I.g(b) : I.call(null, b)) ? null : "none"], null)], null), "Stop"], null), new T(null, 2, 5, U, [Yn, "Step"], null), new T(null, 5, 
      5, U, [sq, "Step every:", new T(null, 2, 5, U, [Ao, "" + u.g(Co.g(I.g ? I.g(c) : I.call(null, c))) + " ms"], null), new T(null, 2, 5, U, [Cs, new T(null, 3, 5, U, [Vn, new n(null, 1, [hs, "#"], null), "slower"], null)], null), new T(null, 2, 5, U, [Cs, new T(null, 3, 5, U, [Nk, new n(null, 1, [hs, "#"], null), "faster"], null)], null)], null), new T(null, 2, 5, U, [sl, "Reset"], null), new T(null, 2, 5, U, [Rq, new n(null, 1, [uq, "detail"], null)], null)], null), new T(null, 6, 5, U, [Wl, 
      new T(null, 2, 5, U, [eo, "Animation"], null), new T(null, 3, 5, U, [Do, new n(null, 1, [Wo, new n(null, 1, [dr, q(Ol.g(I.g ? I.g(c) : I.call(null, c))) ? "none" : null], null)], null), "Start"], null), new T(null, 3, 5, U, [hp, new n(null, 1, [Wo, new n(null, 1, [dr, q(Ol.g(I.g ? I.g(c) : I.call(null, c))) ? null : "none"], null)], null), "Stop"], null), new T(null, 2, 5, U, [zl, "Draw now"], null), new T(null, 5, 5, U, [sq, "Draw every:", new T(null, 2, 5, U, [Io, "" + u.g(np.g(I.g ? I.g(c) : 
      I.call(null, c))) + " steps"], null), new T(null, 2, 5, U, [Cs, new T(null, 3, 5, U, [Il, new n(null, 1, [hs, "#"], null), "slower"], null)], null), new T(null, 2, 5, U, [Cs, new T(null, 3, 5, U, [lq, new n(null, 1, [hs, "#"], null), "faster"], null)], null)], null)], null)], null);
    }, ak.g("computed-observable"), pi, pi);
    I.g ? I.g(d) : I.call(null, d);
    return d;
  }(), g = Dv("#comportex-controls");
  xv(g, I.g ? I.g(f) : I.call(null, f));
  Yj(f, xo, function(a, b) {
    return function() {
      return xv(b, I.g ? I.g(a) : I.call(null, a));
    };
  }(f, g));
  mx("#sim-start", kp, function() {
    return Fg.h ? Fg.h(b, !0) : Fg.call(null, b, !0);
  });
  mx("#sim-stop", kp, function() {
    return Fg.h ? Fg.h(b, !1) : Fg.call(null, b, !1);
  });
  mx("#sim-step", kp, function() {
    return d.q ? d.q() : d.call(null);
  });
  mx("#sim-faster", kp, function() {
    return Hg.p(c, lh, new T(null, 1, 5, U, [Co], null), function(a) {
      a -= 100;
      return 0 < a ? a : 0;
    });
  });
  mx("#sim-slower", kp, function() {
    return Hg.p(c, lh, new T(null, 1, 5, U, [Co], null), function(a) {
      return a + 100;
    });
  });
  mx("#sim-reset", kp, function() {
    var b = Dv("#sim-reset-status");
    Hg.h(a, yy);
    return Fv.h(b, "reset complete.");
  });
  mx("#anim-start", kp, function() {
    return Hg.p(c, Q, Ol, !0);
  });
  mx("#anim-stop", kp, function() {
    return Hg.p(c, Q, Ol, !1);
  });
  mx("#anim-step", kp, function() {
    return e.q ? e.q() : e.call(null);
  });
  mx("#anim-faster", kp, function() {
    return Hg.p(c, lh, new T(null, 1, 5, U, [np], null), function(a) {
      a -= 1;
      return 1 < a ? a : 1;
    });
  });
  mx("#anim-slower", kp, function() {
    return Hg.p(c, lh, new T(null, 1, 5, U, [np], null), function(a) {
      return a + 1;
    });
  });
}
function UL() {
  var a = function() {
    var a = new Lv(null, !0, function() {
      var a = U, b;
      b = I.g ? I.g(GE) : I.call(null, GE);
      b = new T(null, 6, 5, U, [io, new T(null, 2, 5, U, [eo, "Visualisation"], null), new T(null, 5, 5, U, [kk, new T(null, 2, 5, U, [eo, "Input"], null), ML(b, new T(null, 2, 5, U, [Cr, oq], null), "Active bits"), new T(null, 1, 5, U, [lr], null), ML(b, new T(null, 2, 5, U, [Cr, wr], null), "Predicted bits")], null), new T(null, 10, 5, U, [kk, new T(null, 2, 5, U, [eo, "Columns"], null), ML(b, new T(null, 2, 5, U, [Hl, rq], null), "Overlap scores"), new T(null, 1, 5, U, [lr], null), ML(b, new T(null, 
      2, 5, U, [Hl, oq], null), "Active columns"), new T(null, 1, 5, U, [lr], null), ML(b, new T(null, 2, 5, U, [Hl, jo], null), "Predictive columns"), new T(null, 1, 5, U, [lr], null), ML(b, new T(null, 2, 5, U, [Hl, bl], null), "TP columns"), ML(b, new T(null, 2, 5, U, [Hl, Sk], null), "Alternative")], null), new T(null, 7, 5, U, [kk, new T(null, 2, 5, U, [eo, "Feed-forward synapses"], null), ML(b, new T(null, 2, 5, U, [pk, oq], null), "Active ff-synapses"), new T(null, 1, 5, U, [lr], null), ML(b, 
      new T(null, 2, 5, U, [pk, ek], null), "Inactive ff-synapses"), new T(null, 1, 5, U, [lr], null), ML(b, new T(null, 2, 5, U, [pk, Xr], null), "Permanences")], null), new T(null, 11, 5, U, [kk, new T(null, 2, 5, U, [eo, "Lateral dendrite segments"], null), NL(b), new T(null, 1, 5, U, [lr], null), ML(b, new T(null, 2, 5, U, [rl, oq], null), "Active synapses"), new T(null, 1, 5, U, [lr], null), ML(b, new T(null, 2, 5, U, [rl, ek], null), "Inactive synapses"), new T(null, 1, 5, U, [lr], null), ML(b, 
      new T(null, 2, 5, U, [rl, nl], null), "Disconnected synapses"), new T(null, 1, 5, U, [lr], null), ML(b, new T(null, 2, 5, U, [rl, Xr], null), "Permanences")], null)], null);
      return new T(null, 2, 5, a, [fq, b], null);
    }, ak.g("computed-observable"), pi, pi);
    I.g ? I.g(a) : I.call(null, a);
    return a;
  }(), b = Dv("#comportex-drawing");
  xv(b, I.g ? I.g(a) : I.call(null, a));
  Yj(a, xo, function(a, b) {
    return function() {
      return xv(b, I.g ? I.g(a) : I.call(null, a));
    };
  }(a, b));
  for (var a = B(I.g ? I.g(GE) : I.call(null, GE)), b = null, c = 0, d = 0;;) {
    if (d < c) {
      for (var e = b.F(null, d), f = O.j(e, 0, null), g = O.j(e, 1, null), h = B(g), l = null, p = 0, t = 0;;) {
        if (t < p) {
          var s = l.F(null, t), w = O.j(s, 0, null), A = O.j(s, 1, null), y = LL(new T(null, 2, 5, U, [f, w], null)), D = Dv("#" + u.g(y));
          q(D) && mx(D, Hr, function(a, b, c, d, e, f, g, h, l, p, s, t, w, y, A) {
            return function() {
              var a;
              a = Gv.g(p);
              a = q(a) ? Df.g(a) : null;
              return Hg.p(GE, kh, new T(null, 2, 5, U, [A, t], null), a);
            };
          }(h, l, p, t, a, b, c, d, y, D, s, w, A, e, f, g));
          t += 1;
        } else {
          if (w = B(h)) {
            s = w;
            if (S(s)) {
              h = x(s), t = z(s), l = h, p = K(h), h = t;
            } else {
              var A = C(s), y = O.j(A, 0, null), D = O.j(A, 1, null), G = LL(new T(null, 2, 5, U, [f, y], null)), J = Dv("#" + u.g(G));
              q(J) && mx(J, Hr, function(a, b, c, d, e, f, g, h, l, p, s, t, w, y, A, D, G) {
                return function() {
                  var a;
                  a = Gv.g(p);
                  a = q(a) ? Df.g(a) : null;
                  return Hg.p(GE, kh, new T(null, 2, 5, U, [G, t], null), a);
                };
              }(h, l, p, t, a, b, c, d, G, J, A, y, D, s, w, e, f, g));
              h = F(s);
              l = null;
              p = 0;
            }
            t = 0;
          } else {
            break;
          }
        }
      }
      d += 1;
    } else {
      if (h = B(a)) {
        e = h;
        if (S(e)) {
          a = x(e), d = z(e), b = a, c = K(a), a = d;
        } else {
          l = C(e);
          f = O.j(l, 0, null);
          g = O.j(l, 1, null);
          p = B(g);
          t = null;
          for (w = s = 0;;) {
            if (w < s) {
              A = t.F(null, w), y = O.j(A, 0, null), D = O.j(A, 1, null), G = LL(new T(null, 2, 5, U, [f, y], null)), J = Dv("#" + u.g(G)), q(J) && mx(J, Hr, function(a, b, c, d, e, f, g, h, l, p, s, t, w, y, A) {
                return function() {
                  var a;
                  a = Gv.g(p);
                  a = q(a) ? Df.g(a) : null;
                  return Hg.p(GE, kh, new T(null, 2, 5, U, [A, t], null), a);
                };
              }(p, t, s, w, a, b, c, d, G, J, A, y, D, l, f, g, e, h)), w += 1;
            } else {
              if (y = B(p)) {
                A = y;
                if (S(A)) {
                  p = x(A), w = z(A), t = p, s = K(p), p = w;
                } else {
                  var D = C(A), G = O.j(D, 0, null), J = O.j(D, 1, null), L = LL(new T(null, 2, 5, U, [f, G], null)), N = Dv("#" + u.g(L));
                  q(N) && mx(N, Hr, function(a, b, c, d, e, f, g, h, l, p, s, t, w, y, A, D, G) {
                    return function() {
                      var a;
                      a = Gv.g(p);
                      a = q(a) ? Df.g(a) : null;
                      return Hg.p(GE, kh, new T(null, 2, 5, U, [G, t], null), a);
                    };
                  }(p, t, s, w, a, b, c, d, L, N, D, G, J, A, y, l, f, g, e, h));
                  p = F(A);
                  t = null;
                  s = 0;
                }
                w = 0;
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
function VL() {
  var a = QL, b = BF, c = function() {
    var c = new Lv(null, !0, function() {
      var c = Vo.g(I.g ? I.g(b) : I.call(null, b));
      return new T(null, 2, 5, U, [Wq, function() {
        var b = iD(I.g ? I.g(a) : I.call(null, a));
        return function(a, b) {
          return function G(c) {
            return new Ef(null, function(a, b) {
              return function() {
                for (;;) {
                  var d = B(c);
                  if (d) {
                    if (S(d)) {
                      var e = x(d), f = K(e), g = $f(f);
                      a: {
                        for (var h = 0;;) {
                          if (h < f) {
                            var l = v.h(e, h), p = O.h(a, l), p = Jx(p), l = new T(null, 3, 5, U, [Zo, new n(null, 1, [Wo, new n(null, 1, [dr, qg.h(l, b) ? "none" : null], null)], null), new T(null, 4, 5, U, [tr, new n(null, 1, [tq, "region-spec-form-" + u.g(l)], null), new T(null, 4, 5, U, [bs, "Region " + u.g(l), new T(null, 1, 5, U, [lr], null), new T(null, 2, 5, U, [zo, "(click on a region to select it)"], null)], null), new T(null, 4, 5, U, [sk, new T(null, 2, 5, U, [eo, "Parameters"], null), 
                            Jg.h(yg.h(OL, l), He.g(p)), new T(null, 3, 5, U, [ao, new T(null, 2, 5, U, [Cr, new n(null, 2, [mo, "submit", Sl, "Set!"], null)], null), " (will be set immediately, but then use Reset above for any parameters that apply only in initialisation)"], null)], null)], null)], null);
                            g.add(l);
                            h += 1;
                          } else {
                            e = !0;
                            break a;
                          }
                        }
                        e = void 0;
                      }
                      return e ? cg(eg(g), G(z(d))) : cg(eg(g), null);
                    }
                    g = C(d);
                    e = O.h(a, g);
                    e = Jx(e);
                    return Ld(new T(null, 3, 5, U, [Zo, new n(null, 1, [Wo, new n(null, 1, [dr, qg.h(g, b) ? "none" : null], null)], null), new T(null, 4, 5, U, [tr, new n(null, 1, [tq, "region-spec-form-" + u.g(g)], null), new T(null, 4, 5, U, [bs, "Region " + u.g(g), new T(null, 1, 5, U, [lr], null), new T(null, 2, 5, U, [zo, "(click on a region to select it)"], null)], null), new T(null, 4, 5, U, [sk, new T(null, 2, 5, U, [eo, "Parameters"], null), Jg.h(yg.h(OL, g), He.g(e)), new T(null, 3, 5, 
                    U, [ao, new T(null, 2, 5, U, [Cr, new n(null, 2, [mo, "submit", Sl, "Set!"], null)], null), " (will be set immediately, but then use Reset above for any parameters that apply only in initialisation)"], null)], null)], null)], null), G(E(d)));
                  }
                  return null;
                }
              };
            }(a, b), null, null);
          };
        }(b, c)(Hj.g(K(b)));
      }()], null);
    }, ak.g("computed-observable"), pi, pi);
    I.g ? I.g(c) : I.call(null, c);
    return c;
  }(), d = Dv("#comportex-parameters");
  xv(d, I.g ? I.g(c) : I.call(null, c));
  Yj(c, xo, function(a, b) {
    return function() {
      return xv(b, I.g ? I.g(a) : I.call(null, a));
    };
  }(c, d));
  for (var c = B(Hj.g(K(iD(I.g ? I.g(a) : I.call(null, a))))), d = null, e = 0, f = 0;;) {
    if (f < e) {
      var g = d.F(null, f), h = Dv("#region-spec-form-" + u.g(g));
      mx(h, bo, function(b, c, d, e, f, g) {
        return function(h) {
          var l = O.h(iD(I.g ? I.g(a) : I.call(null, a)), g), p = Jx(l), N = Je.j(function(a, b, c, d, e, f, g, h) {
            return function(a, b) {
              var c = LL(new T(null, 2, 5, U, [h, b], null)), c = Dv("#" + u.g(c)), c = Cw(Gv.g(c));
              return Q.j(a, b, c);
            };
          }(b, c, d, e, l, p, f, g), pi, sj(p));
          Hg.p(a, lD, Er.g(l), function(a, b, c, d, e, f, g) {
            return function(a) {
              return kh(kh(a, new T(null, 2, 5, U, [ds, ep], null), g), new T(null, 2, 5, U, [Vr, ep], null), g);
            };
          }(b, c, d, e, l, p, N, f, g));
          h.preventDefault();
          return!1;
        };
      }(c, d, e, f, h, g));
      f += 1;
    } else {
      var l = B(c);
      if (l) {
        h = l;
        if (S(h)) {
          c = x(h), f = z(h), d = c, e = K(c), c = f;
        } else {
          var g = C(h), p = Dv("#region-spec-form-" + u.g(g));
          mx(p, bo, function(b, c, d, e, f, g, h, l) {
            return function(p) {
              var N = O.h(iD(I.g ? I.g(a) : I.call(null, a)), g), $ = Jx(N), ba = Je.j(function(a, b, c, d, e, f, g, h) {
                return function(a, b) {
                  var c = LL(new T(null, 2, 5, U, [h, b], null)), c = Dv("#" + u.g(c)), c = Cw(Gv.g(c));
                  return Q.j(a, b, c);
                };
              }(b, c, d, e, N, $, f, g, h, l), pi, sj($));
              Hg.p(a, lD, Er.g(N), function(a, b, c, d, e, f, g) {
                return function(a) {
                  return kh(kh(a, new T(null, 2, 5, U, [ds, ep], null), g), new T(null, 2, 5, U, [Vr, ep], null), g);
                };
              }(b, c, d, e, N, $, ba, f, g, h, l));
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
;function HF() {
  var a = WL, b = kE.q();
  qE.h(a, b);
  return b;
}
var QL = Eg.g ? Eg.g(null) : Eg.call(null, null), BF, XL = new n(null, 3, [Vo, 0, Pl, 0, pq, null], null);
BF = Eg.g ? Eg.g(XL) : Eg.call(null, XL);
var YL = kE.q(), WL = function ZL(b) {
  var c = Eg.g ? Eg.g(pi) : Eg.call(null, pi), d = function() {
    "undefined" === typeof rD && (rD = function(b, c, d, e) {
      this.Pd = b;
      this.ch = c;
      this.ng = d;
      this.eg = e;
      this.G = 0;
      this.t = 393216;
    }, rD.eb = !0, rD.cb = "cljs.core.async/t31873", rD.jb = function() {
      return function(b, c) {
        return xc(c, "cljs.core.async/t31873");
      };
    }(c), rD.prototype.Ee = function() {
      return function(b, c, d) {
        Hg.p(this.Pd, Q, c, d);
        return null;
      };
    }(c), rD.prototype.Fe = function() {
      return function(b, c) {
        Hg.j(this.Pd, ee, c);
        return null;
      };
    }(c), rD.prototype.H = function() {
      return function() {
        return this.eg;
      };
    }(c), rD.prototype.I = function() {
      return function(b, c) {
        return new rD(this.Pd, this.ch, this.ng, c);
      };
    }(c));
    return new rD(c, b, ZL, null);
  }(), e = kE.g(1), f = Eg.g ? Eg.g(null) : Eg.call(null, null), g = function(b, c, d, e) {
    return function() {
      return 0 === Hg.h(e, Qe) ? mE.h(d, !0) : null;
    };
  }(c, d, e, f), h = kE.g(1);
  LD(function(c, d, e, f, g, h) {
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
                      if (!X(f, Y)) {
                        e = f;
                        break a;
                      }
                    }
                  } catch (g) {
                    if (g instanceof Object) {
                      d[5] = g;
                      $D(d);
                      e = Y;
                      break a;
                    }
                    throw g;
                  }
                  e = void 0;
                }
                if (!X(e, Y)) {
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
              var p = c, s = p;
              s[2] = c[2];
              s[1] = 3;
              return Y;
            }
            if (20 === l) {
              var t = c[7], w = C(t), y = O.j(w, 0, null), A = O.j(w, 1, null);
              c[8] = y;
              p = c;
              p[1] = q(A) ? 22 : 23;
              return Y;
            }
            if (27 === l) {
              var D = c[9], G = c[10], Ga = c[11], oa = c[12], Qa = v.h(G, oa), wa = mE.j(Qa, D, h);
              c[11] = Qa;
              p = c;
              p[1] = q(wa) ? 30 : 31;
              return Y;
            }
            if (1 === l) {
              var ib = p = c;
              ib[2] = null;
              ib[1] = 2;
              return Y;
            }
            if (24 === l) {
              var t = c[7], vb = c[2], Ma = F(t), Ua = null, ua = 0, Jb = 0;
              c[13] = vb;
              c[14] = Jb;
              c[15] = Ua;
              c[16] = ua;
              c[17] = Ma;
              var Cd = p = c;
              Cd[2] = null;
              Cd[1] = 8;
              return Y;
            }
            if (39 === l) {
              var Ub = p = c;
              Ub[2] = null;
              Ub[1] = 41;
              return Y;
            }
            if (4 === l) {
              var D = c[9], od = c[2], ha = null == od;
              c[9] = od;
              p = c;
              p[1] = q(ha) ? 5 : 6;
              return Y;
            }
            if (15 === l) {
              var Jb = c[14], Ua = c[15], ua = c[16], Ma = c[17], Hf = c[2], Og = Ma, Pg = Ua, re = ua;
              c[14] = Jb + 1;
              c[18] = Hf;
              c[15] = Pg;
              c[16] = re;
              c[17] = Og;
              var Sc = p = c;
              Sc[2] = null;
              Sc[1] = 8;
              return Y;
            }
            if (21 === l) {
              var Kc = c[2], hc = p = c;
              hc[2] = Kc;
              hc[1] = 18;
              return Y;
            }
            if (31 === l) {
              var Ga = c[11], se = Hg.h(g, Qe), te = e.Fe(null, Ga);
              c[19] = se;
              var Qd = p = c;
              Qd[2] = te;
              Qd[1] = 32;
              return Y;
            }
            if (32 === l) {
              var G = c[10], oa = c[12], Mb = c[20], Bc = c[21], Rd = Mb, If = G, Sd = Bc, Cc = oa + 1;
              c[22] = c[2];
              c[10] = If;
              c[12] = Cc;
              c[20] = Rd;
              c[21] = Sd;
              var Lc = p = c;
              Lc[2] = null;
              Lc[1] = 25;
              return Y;
            }
            if (40 === l) {
              var rc = c[23], hd = Hg.h(g, Qe), Xe = e.Fe(null, rc);
              c[24] = hd;
              var Qg = p = c;
              Qg[2] = Xe;
              Qg[1] = 41;
              return Y;
            }
            if (33 === l) {
              var ac = c[25], Qh = S(ac), p = c;
              p[1] = Qh ? 36 : 37;
              return Y;
            }
            if (13 === l) {
              var Jf = c[26], vd = uD(Jf), id = p = c;
              id[2] = vd;
              id[1] = 15;
              return Y;
            }
            if (22 === l) {
              var y = c[8], kb = uD(y), ic = p = c;
              ic[2] = kb;
              ic[1] = 24;
              return Y;
            }
            if (36 === l) {
              var ac = c[25], Td = x(ac), bc = z(ac), Kf = K(Td), Mb = bc, G = Td, Bc = Kf, oa = 0;
              c[10] = G;
              c[12] = oa;
              c[20] = Mb;
              c[21] = Bc;
              var la = p = c;
              la[2] = null;
              la[1] = 25;
              return Y;
            }
            if (41 === l) {
              var ac = c[25], Ud = c[2], Mb = F(ac), G = null, oa = Bc = 0;
              c[10] = G;
              c[27] = Ud;
              c[12] = oa;
              c[20] = Mb;
              c[21] = Bc;
              var jd = p = c;
              jd[2] = null;
              jd[1] = 25;
              return Y;
            }
            if (43 === l) {
              var kd = p = c;
              kd[2] = null;
              kd[1] = 44;
              return Y;
            }
            if (29 === l) {
              var Tc = c[2], wd = p = c;
              wd[2] = Tc;
              wd[1] = 26;
              return Y;
            }
            if (44 === l) {
              c[28] = c[2];
              var jc = p = c;
              jc[2] = null;
              jc[1] = 2;
              return Y;
            }
            if (6 === l) {
              var qb = c[29], Mc = I.g ? I.g(d) : I.call(null, d), xd = sj(Mc), Ye = K(xd), Ze = Fg.h ? Fg.h(g, Ye) : Fg.call(null, g, Ye), Mb = B(xd), G = null, oa = Bc = 0;
              c[30] = Ze;
              c[10] = G;
              c[12] = oa;
              c[20] = Mb;
              c[21] = Bc;
              c[29] = xd;
              var Lf = p = c;
              Lf[2] = null;
              Lf[1] = 25;
              return Y;
            }
            if (28 === l) {
              var ac = c[25], Mb = c[20], $e = B(Mb);
              c[25] = $e;
              p = c;
              p[1] = $e ? 33 : 34;
              return Y;
            }
            if (25 === l) {
              var oa = c[12], Bc = c[21], yd = oa < Bc, p = c;
              p[1] = q(yd) ? 27 : 28;
              return Y;
            }
            if (34 === l) {
              var Mf = p = c;
              Mf[2] = null;
              Mf[1] = 35;
              return Y;
            }
            if (17 === l) {
              var Vd = p = c;
              Vd[2] = null;
              Vd[1] = 18;
              return Y;
            }
            if (3 === l) {
              var sc = c[2], p = c;
              return ZD(p, sc);
            }
            if (12 === l) {
              var cc = c[2], zd = p = c;
              zd[2] = cc;
              zd[1] = 9;
              return Y;
            }
            if (2 === l) {
              return p = c, YD(p, 4, b);
            }
            if (23 === l) {
              var af = p = c;
              af[2] = null;
              af[1] = 24;
              return Y;
            }
            if (35 === l) {
              var Pa = c[2], ld = p = c;
              ld[2] = Pa;
              ld[1] = 29;
              return Y;
            }
            if (19 === l) {
              var t = c[7], dc = x(t), Db = z(t), Nf = K(dc), Ma = Db, Ua = dc, ua = Nf, Jb = 0;
              c[14] = Jb;
              c[15] = Ua;
              c[16] = ua;
              c[17] = Ma;
              var Rg = p = c;
              Rg[2] = null;
              Rg[1] = 8;
              return Y;
            }
            if (11 === l) {
              var t = c[7], Ma = c[17], Wd = B(Ma);
              c[7] = Wd;
              p = c;
              p[1] = Wd ? 16 : 17;
              return Y;
            }
            if (9 === l) {
              var Rh = c[2], Xd = p = c;
              Xd[2] = Rh;
              Xd[1] = 7;
              return Y;
            }
            if (5 === l) {
              var Of = I.g ? I.g(d) : I.call(null, d), Ma = B(Of), Ua = null, Jb = ua = 0;
              c[14] = Jb;
              c[15] = Ua;
              c[16] = ua;
              c[17] = Ma;
              var ue = p = c;
              ue[2] = null;
              ue[1] = 8;
              return Y;
            }
            if (14 === l) {
              var Pf = p = c;
              Pf[2] = null;
              Pf[1] = 15;
              return Y;
            }
            if (45 === l) {
              var ve = c[2], Yb = p = c;
              Yb[2] = ve;
              Yb[1] = 44;
              return Y;
            }
            if (26 === l) {
              var qb = c[29], Qf = c[2], Dc = B(qb);
              c[31] = Qf;
              p = c;
              p[1] = Dc ? 42 : 43;
              return Y;
            }
            if (16 === l) {
              var t = c[7], bf = S(t), p = c;
              p[1] = bf ? 19 : 20;
              return Y;
            }
            if (38 === l) {
              var Yd = c[2], Rf = p = c;
              Rf[2] = Yd;
              Rf[1] = 35;
              return Y;
            }
            if (30 === l) {
              var Sf = p = c;
              Sf[2] = null;
              Sf[1] = 32;
              return Y;
            }
            if (10 === l) {
              var Jb = c[14], Ua = c[15], we = v.h(Ua, Jb), Jf = O.j(we, 0, null), cf = O.j(we, 1, null);
              c[26] = Jf;
              p = c;
              p[1] = q(cf) ? 13 : 14;
              return Y;
            }
            if (18 === l) {
              var df = c[2], Nc = p = c;
              Nc[2] = df;
              Nc[1] = 12;
              return Y;
            }
            if (42 === l) {
              return p = c, YD(p, 45, f);
            }
            if (37 === l) {
              var rc = c[23], D = c[9], ac = c[25], tc = C(ac), Tf = mE.j(tc, D, h);
              c[23] = tc;
              p = c;
              p[1] = q(Tf) ? 39 : 40;
              return Y;
            }
            if (8 === l) {
              var Jb = c[14], ua = c[16], Sg = Jb < ua, p = c;
              p[1] = q(Sg) ? 10 : 11;
              return Y;
            }
            return null;
          };
        }(c, d, e, f, g, h), c, d, e, f, g, h);
      }(), D = function() {
        var b = y.q ? y.q() : y.call(null);
        b[6] = c;
        return b;
      }();
      return XD(D);
    };
  }(h, c, d, e, f, g));
  return d;
}(YL), RL = Eg.g ? Eg.g(!1) : Eg.call(null, !1), SL, $L = new n(null, 3, [Co, 200, Ol, !0, np, 1], null);
SL = Eg.g ? Eg.g($L) : Eg.call(null, $L);
function IF() {
  return mE.h(YL, Hg.h(QL, wy));
}
function aM() {
  Hg.p(QL, Q, ap, new n(null, 2, [Vl, (new Date).getTime(), Rn, xy(I.g ? I.g(QL) : I.call(null, QL))], null));
  var a = kE.g(1);
  LD(function(a) {
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
                      if (!X(f, Y)) {
                        d = f;
                        break a;
                      }
                    }
                  } catch (g) {
                    if (g instanceof Object) {
                      c[5] = g;
                      $D(c);
                      d = Y;
                      break a;
                    }
                    throw g;
                  }
                  d = void 0;
                }
                if (!X(d, Y)) {
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
              return a[7] = a[2], a[2] = null, a[1] = 2, Y;
            }
            if (6 === b) {
              return b = a[2], a[2] = b, a[1] = 3, Y;
            }
            if (5 === b) {
              return a[2] = null, a[1] = 6, Y;
            }
            if (4 === b) {
              var b = I.g ? I.g(SL) : I.call(null, SL), b = Co.g(b), b = hE(b), c = IF();
              a[8] = c;
              return YD(a, 7, b);
            }
            return 3 === b ? (b = a[2], ZD(a, b)) : 2 === b ? (b = I.g ? I.g(RL) : I.call(null, RL), a[1] = q(b) ? 4 : 5, Y) : 1 === b ? (a[2] = null, a[1] = 2, Y) : null;
          };
        }(a), a);
      }(), d = function() {
        var d = c.q ? c.q() : c.call(null);
        d[6] = a;
        return d;
      }();
      return XD(d);
    };
  }(a));
  return a;
}
Ec(RL, Lk, function(a, b, c, d) {
  return q(d) ? aM() : null;
});
function bM(a) {
  var b = Dv("#comportex-plots"), c = iD(a);
  a = function() {
    var a = new Lv(null, !0, function(a) {
      return function() {
        return new T(null, 2, 5, U, [Zo, function() {
          return function(a) {
            return function G(b) {
              return new Ef(null, function() {
                return function() {
                  for (;;) {
                    var a = B(b);
                    if (a) {
                      if (S(a)) {
                        var c = x(a), d = K(c), e = $f(d);
                        a: {
                          for (var f = 0;;) {
                            if (f < d) {
                              var g = v.h(c, f), h = "comportex-plot-" + u.g(g), g = new T(null, 3, 5, U, [kk, new T(null, 2, 5, U, [eo, "Region " + u.g(g)], null), new T(null, 2, 5, U, [Zo, new n(null, 1, [tq, h], null)], null)], null);
                              e.add(g);
                              f += 1;
                            } else {
                              c = !0;
                              break a;
                            }
                          }
                          c = void 0;
                        }
                        return c ? cg(eg(e), G(z(a))) : cg(eg(e), null);
                      }
                      e = C(a);
                      c = "comportex-plot-" + u.g(e);
                      return Ld(new T(null, 3, 5, U, [kk, new T(null, 2, 5, U, [eo, "Region " + u.g(e)], null), new T(null, 2, 5, U, [Zo, new n(null, 1, [tq, c], null)], null)], null), G(E(a)));
                    }
                    return null;
                  }
                };
              }(a), null, null);
            };
          }(a)(Hj.g(K(a)));
        }()], null);
      };
    }(c), ak.g("computed-observable"), pi, pi);
    I.g ? I.g(a) : I.call(null, a);
    return a;
  }();
  b = Dv(b);
  xv(b, I.g ? I.g(a) : I.call(null, a));
  Yj(a, xo, function(a, b) {
    return function() {
      return xv(b, I.g ? I.g(a) : I.call(null, a));
    };
  }(a, b, c));
  b = B(Hj.g(K(c)));
  a = null;
  for (var d = 0, e = 0;;) {
    if (e < d) {
      var f = a.F(null, e), g = "comportex-plot-" + u.g(f), h = Dv("#" + u.g(g)), l = oE(xg.j(mD, function(a, b, c, d, e, f, g) {
        return function(a) {
          return O.h(a, g);
        };
      }(b, a, d, e, h, g, f, c), iD), HF()), p = JL(l);
      Yj(p, Hq, function(a, b, c, d, e) {
        return function(a, b, c, d) {
          return KL(e, d);
        };
      }(b, a, d, e, h, l, p, g, f, c));
      e += 1;
    } else {
      if (h = B(b)) {
        g = h;
        if (S(g)) {
          b = x(g), e = z(g), a = b, d = K(b), b = e;
        } else {
          var f = C(g), l = "comportex-plot-" + u.g(f), p = Dv("#" + u.g(l)), t = oE(xg.j(mD, function(a, b, c, d, e, f, g) {
            return function(a) {
              return O.h(a, g);
            };
          }(b, a, d, e, p, l, f, g, h, c), iD), HF()), s = JL(t);
          Yj(s, Hq, function(a, b, c, d, e) {
            return function(a, b, c, d) {
              return KL(e, d);
            };
          }(b, a, d, e, p, t, s, l, f, g, h, c));
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
function TL() {
  function a() {
    return AF();
  }
  return Hv.g ? Hv.g(a) : Hv.call(null, a);
}
Ec(GE, ar, function() {
  return TL();
});
Ec(BF, ar, function() {
  return TL();
});
var cM = kE.g(1);
LD(function(a) {
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
                    if (!X(f, Y)) {
                      e = f;
                      break a;
                    }
                  }
                } catch (g) {
                  if (g instanceof Object) {
                    c[5] = g;
                    $D(c);
                    e = Y;
                    break a;
                  }
                  throw g;
                }
                e = void 0;
              }
              if (!X(e, Y)) {
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
            return b = a, b[2] = a[2], b[1] = 3, Y;
          }
          if (1 === b) {
            return b = HF(), a[7] = b, a[2] = null, a[1] = 2, Y;
          }
          if (4 === b) {
            return b = a[8], b = a[2], a[8] = b, a[1] = q(b) ? 5 : 6, Y;
          }
          if (13 === b) {
            return b = a[7], a[9] = a[2], a[7] = b, a[2] = null, a[1] = 2, Y;
          }
          if (6 === b) {
            return a[2] = null, a[1] = 7, Y;
          }
          if (3 === b) {
            return b = a[2], ZD(a, b);
          }
          if (12 === b) {
            return a[2] = null, a[1] = 13, Y;
          }
          if (2 === b) {
            return b = a[7], YD(a, 4, b);
          }
          if (11 === b) {
            return b = TL(), a[2] = b, a[1] = 13, Y;
          }
          if (9 === b) {
            return b = a[10], a[2] = b, a[1] = 10, Y;
          }
          if (5 === b) {
            var b = a[8], b = xy(b), c = I.g ? I.g(SL) : I.call(null, SL), c = np.g(c), g = I.g ? I.g(SL) : I.call(null, SL), g = Ol.g(g);
            a[10] = g;
            a[11] = b;
            a[12] = c;
            a[1] = q(g) ? 8 : 9;
            return Y;
          }
          return 10 === b ? (b = a[2], a[1] = q(b) ? 11 : 12, Y) : 8 === b ? (b = a[11], c = a[12], a[2] = 0 === (b % c + c) % c, a[1] = 10, Y) : null;
        };
      }(a), a);
    }(), c = function() {
      var c = b.q ? b.q() : b.call(null);
      c[6] = a;
      return c;
    }();
    return XD(c);
  };
}(cM));
function dM(a) {
  var b = null == (I.g ? I.g(QL) : I.call(null, QL));
  mE.h(YL, Fg.h ? Fg.h(QL, a) : Fg.call(null, QL, a));
  b ? (new DG(Dv("#comportex-tabs")), bM(a), GF(a), PL(), UL(), a = VL()) : a = null;
  return a;
}
qa("comportexviz.main.set_model", dM);
var eM = Q.k(CG, zk, !1, H([Jl, .3], 0));
function fM(a, b) {
  var c = BG(a, b), d = AG(a);
  return Q.j(c, Nr, yG(d));
}
qa("comportexviz.demos.simple_sentences.input_gen", fM);
function gM(a, b, c) {
  return gD(ZC, fM(a, b), c, eM);
}
qa("comportexviz.demos.simple_sentences.n_region_model", gM);
function hM() {
  var a = Cw(Gv.g(Dv("#comportex-input-repeats"))), b = Gv.g(Dv("#comportex-input-text")), a = gM(b, a, 1);
  return dM.g ? dM.g(a) : dM.call(null, a);
}
qa("comportexviz.demos.simple_sentences.restart_from_ui", hM);
var iM = Dv("#comportex-input-text-form");
mx(iM, bo, function(a) {
  hM();
  a.preventDefault();
  return!1;
});
var jM = new T(null, 2, 5, U, [0, 7], null), kM = new T(null, 2, 5, U, [Mo, 0], null);
function lM(a) {
  var b = O.j(a, 0, null);
  a = O.j(a, 1, null);
  a: {
    switch(b instanceof V ? b.V : null) {
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
  a = QB(new T(null, 2, 5, U, [Mo, vk], null));
  return new T(null, 2, 5, U, [a, b], null);
}
var mM = XF.k(2, aG(60, new T(null, 2, 5, U, [vk, Mo], null)), H([ZF(240, 30, jM)], 0)), nM = de([ok, Wk, hl, ml, Gl, Ll, Tl, Xn, uo, yo, op, pp, up, qq, Iq, Xq, kr, Ur, ss, ts], [.2, 12, 5, .01, .2, 7, 9, new T(null, 1, 5, U, [500], null), .05, 18, 2, .2, .05, .04, !1, .01, 4, 1E5, .16, 3]);
function oM() {
  return aD(kM, lM, mM);
}
qa("org.nfrac.comportex.demos.directional_steps_1d.input_gen", oM);
var pM = function() {
  function a(a, b) {
    return gD(ZC, oM(), a, b);
  }
  function b(a) {
    return c.h(a, nM);
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
qa("org.nfrac.comportex.demos.directional_steps_1d.n_region_model", pM);
qa("comportexviz.demos.directional_steps_1d.n_region_model", function(a) {
  return pM.g(a);
});

})();

//# sourceMappingURL=comportexviz.js.map