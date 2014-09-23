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
function pa(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.Ue = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a;
  a.bf = function(a, c, f) {
    return b.prototype[c].apply(a, Array.prototype.slice.call(arguments, 2));
  };
}
;function ra(a) {
  if (!sa.test(a)) {
    return a;
  }
  -1 != a.indexOf("\x26") && (a = a.replace(ua, "\x26amp;"));
  -1 != a.indexOf("\x3c") && (a = a.replace(wa, "\x26lt;"));
  -1 != a.indexOf("\x3e") && (a = a.replace(xa, "\x26gt;"));
  -1 != a.indexOf('"') && (a = a.replace(za, "\x26quot;"));
  -1 != a.indexOf("'") && (a = a.replace(Ba, "\x26#39;"));
  -1 != a.indexOf("\x00") && (a = a.replace(Ca, "\x26#0;"));
  return a;
}
var ua = /&/g, wa = /</g, xa = />/g, za = /"/g, Ba = /'/g, Ca = /\x00/g, sa = /[\x00&<>"']/;
function Ea(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}
function Ga(a) {
  return String(a).replace(/\-([a-z])/g, function(a, c) {
    return c.toUpperCase();
  });
}
;function Ha(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
}
var Ja = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Ka(a, b) {
  for (var c, d, e = 1;e < arguments.length;e++) {
    d = arguments[e];
    for (c in d) {
      a[c] = d[c];
    }
    for (var f = 0;f < Ja.length;f++) {
      c = Ja[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
}
;function La(a, b) {
  null != a && this.append.apply(this, arguments);
}
La.prototype.Tb = "";
La.prototype.append = function(a, b, c) {
  this.Tb += a;
  if (null != b) {
    for (var d = 1;d < arguments.length;d++) {
      this.Tb += arguments[d];
    }
  }
  return this;
};
La.prototype.toString = function() {
  return this.Tb;
};
var Na;
var Oa = Array.prototype, Pa = Oa.indexOf ? function(a, b, c) {
  return Oa.indexOf.call(a, b, c);
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
}, Qa = Oa.forEach ? function(a, b, c) {
  Oa.forEach.call(a, b, c);
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
  return new p(null, 5, [Xa, !0, Za, !0, $a, !1, db, !1, eb, null], null);
}
function q(a) {
  return null != a && !1 !== a;
}
function fb(a) {
  return q(a) ? !1 : !0;
}
function gb(a, b) {
  return a[n(null == b ? null : b)] ? !0 : a._ ? !0 : !1;
}
function hb(a) {
  return null == a ? null : a.constructor;
}
function t(a, b) {
  var c = hb(b), c = q(q(c) ? c.Fa : c) ? c.Ea : n(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function ib(a) {
  var b = a.Ea;
  return q(b) ? b : "" + u.g(a);
}
function jb(a) {
  for (var b = a.length, c = Array(b), d = 0;;) {
    if (d < b) {
      c[d] = a[d], d += 1;
    } else {
      break;
    }
  }
  return c;
}
var kb = {}, mb = {};
function nb(a) {
  if (a ? a.T : a) {
    return a.T(a);
  }
  var b;
  b = nb[n(null == a ? null : a)];
  if (!b && (b = nb._, !b)) {
    throw t("ICounted.-count", a);
  }
  return b.call(null, a);
}
function ob(a) {
  if (a ? a.Y : a) {
    return a.Y(a);
  }
  var b;
  b = ob[n(null == a ? null : a)];
  if (!b && (b = ob._, !b)) {
    throw t("IEmptyableCollection.-empty", a);
  }
  return b.call(null, a);
}
var pb = {};
function qb(a, b) {
  if (a ? a.S : a) {
    return a.S(a, b);
  }
  var c;
  c = qb[n(null == a ? null : a)];
  if (!c && (c = qb._, !c)) {
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
    g = v[n(null == a ? null : a)];
    if (!g && (g = v._, !g)) {
      throw t("IIndexed.-nth", a);
    }
    return g.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.F : a) {
      return a.F(a, b);
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
}(), tb = {};
function ub(a) {
  if (a ? a.$ : a) {
    return a.$(a);
  }
  var b;
  b = ub[n(null == a ? null : a)];
  if (!b && (b = ub._, !b)) {
    throw t("ISeq.-first", a);
  }
  return b.call(null, a);
}
function vb(a) {
  if (a ? a.ga : a) {
    return a.ga(a);
  }
  var b;
  b = vb[n(null == a ? null : a)];
  if (!b && (b = vb._, !b)) {
    throw t("ISeq.-rest", a);
  }
  return b.call(null, a);
}
var wb = {}, xb = {}, yb = function() {
  function a(a, b, c) {
    if (a ? a.L : a) {
      return a.L(a, b, c);
    }
    var g;
    g = yb[n(null == a ? null : a)];
    if (!g && (g = yb._, !g)) {
      throw t("ILookup.-lookup", a);
    }
    return g.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.K : a) {
      return a.K(a, b);
    }
    var c;
    c = yb[n(null == a ? null : a)];
    if (!c && (c = yb._, !c)) {
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
}(), zb = {};
function Ab(a, b) {
  if (a ? a.uc : a) {
    return a.uc(a, b);
  }
  var c;
  c = Ab[n(null == a ? null : a)];
  if (!c && (c = Ab._, !c)) {
    throw t("IAssociative.-contains-key?", a);
  }
  return c.call(null, a, b);
}
function Bb(a, b, c) {
  if (a ? a.va : a) {
    return a.va(a, b, c);
  }
  var d;
  d = Bb[n(null == a ? null : a)];
  if (!d && (d = Bb._, !d)) {
    throw t("IAssociative.-assoc", a);
  }
  return d.call(null, a, b, c);
}
var Eb = {};
function Hb(a, b) {
  if (a ? a.Sa : a) {
    return a.Sa(a, b);
  }
  var c;
  c = Hb[n(null == a ? null : a)];
  if (!c && (c = Hb._, !c)) {
    throw t("IMap.-dissoc", a);
  }
  return c.call(null, a, b);
}
var Ib = {};
function Jb(a) {
  if (a ? a.gc : a) {
    return a.gc(a);
  }
  var b;
  b = Jb[n(null == a ? null : a)];
  if (!b && (b = Jb._, !b)) {
    throw t("IMapEntry.-key", a);
  }
  return b.call(null, a);
}
function Kb(a) {
  if (a ? a.hc : a) {
    return a.hc(a);
  }
  var b;
  b = Kb[n(null == a ? null : a)];
  if (!b && (b = Kb._, !b)) {
    throw t("IMapEntry.-val", a);
  }
  return b.call(null, a);
}
var Nb = {};
function Pb(a, b) {
  if (a ? a.wd : a) {
    return a.wd(0, b);
  }
  var c;
  c = Pb[n(null == a ? null : a)];
  if (!c && (c = Pb._, !c)) {
    throw t("ISet.-disjoin", a);
  }
  return c.call(null, a, b);
}
function Vb(a) {
  if (a ? a.xb : a) {
    return a.xb(a);
  }
  var b;
  b = Vb[n(null == a ? null : a)];
  if (!b && (b = Vb._, !b)) {
    throw t("IStack.-peek", a);
  }
  return b.call(null, a);
}
var Wb = {};
function Xb(a, b, c) {
  if (a ? a.Gb : a) {
    return a.Gb(a, b, c);
  }
  var d;
  d = Xb[n(null == a ? null : a)];
  if (!d && (d = Xb._, !d)) {
    throw t("IVector.-assoc-n", a);
  }
  return d.call(null, a, b, c);
}
function Yb(a) {
  if (a ? a.Ub : a) {
    return a.Ub(a);
  }
  var b;
  b = Yb[n(null == a ? null : a)];
  if (!b && (b = Yb._, !b)) {
    throw t("IDeref.-deref", a);
  }
  return b.call(null, a);
}
var Zb = {};
function $b(a) {
  if (a ? a.I : a) {
    return a.I(a);
  }
  var b;
  b = $b[n(null == a ? null : a)];
  if (!b && (b = $b._, !b)) {
    throw t("IMeta.-meta", a);
  }
  return b.call(null, a);
}
var ec = {};
function fc(a, b) {
  if (a ? a.J : a) {
    return a.J(a, b);
  }
  var c;
  c = fc[n(null == a ? null : a)];
  if (!c && (c = fc._, !c)) {
    throw t("IWithMeta.-with-meta", a);
  }
  return c.call(null, a, b);
}
var gc = {}, ic = function() {
  function a(a, b, c) {
    if (a ? a.ca : a) {
      return a.ca(a, b, c);
    }
    var g;
    g = ic[n(null == a ? null : a)];
    if (!g && (g = ic._, !g)) {
      throw t("IReduce.-reduce", a);
    }
    return g.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.ba : a) {
      return a.ba(a, b);
    }
    var c;
    c = ic[n(null == a ? null : a)];
    if (!c && (c = ic._, !c)) {
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
function jc(a, b, c) {
  if (a ? a.fc : a) {
    return a.fc(a, b, c);
  }
  var d;
  d = jc[n(null == a ? null : a)];
  if (!d && (d = jc._, !d)) {
    throw t("IKVReduce.-kv-reduce", a);
  }
  return d.call(null, a, b, c);
}
function kc(a, b) {
  if (a ? a.M : a) {
    return a.M(a, b);
  }
  var c;
  c = kc[n(null == a ? null : a)];
  if (!c && (c = kc._, !c)) {
    throw t("IEquiv.-equiv", a);
  }
  return c.call(null, a, b);
}
function lc(a) {
  if (a ? a.P : a) {
    return a.P(a);
  }
  var b;
  b = lc[n(null == a ? null : a)];
  if (!b && (b = lc._, !b)) {
    throw t("IHash.-hash", a);
  }
  return b.call(null, a);
}
var mc = {};
function nc(a) {
  if (a ? a.Q : a) {
    return a.Q(a);
  }
  var b;
  b = nc[n(null == a ? null : a)];
  if (!b && (b = nc._, !b)) {
    throw t("ISeqable.-seq", a);
  }
  return b.call(null, a);
}
var vc = {}, wc = {};
function yc(a) {
  if (a ? a.ic : a) {
    return a.ic(a);
  }
  var b;
  b = yc[n(null == a ? null : a)];
  if (!b && (b = yc._, !b)) {
    throw t("IReversible.-rseq", a);
  }
  return b.call(null, a);
}
function zc(a, b) {
  if (a ? a.yd : a) {
    return a.yd(0, b);
  }
  var c;
  c = zc[n(null == a ? null : a)];
  if (!c && (c = zc._, !c)) {
    throw t("IWriter.-write", a);
  }
  return c.call(null, a, b);
}
var Ac = {};
function Bc(a, b, c) {
  if (a ? a.N : a) {
    return a.N(a, b, c);
  }
  var d;
  d = Bc[n(null == a ? null : a)];
  if (!d && (d = Bc._, !d)) {
    throw t("IPrintWithWriter.-pr-writer", a);
  }
  return d.call(null, a, b, c);
}
function Cc(a, b, c) {
  if (a ? a.Rc : a) {
    return a.Rc(a, b, c);
  }
  var d;
  d = Cc[n(null == a ? null : a)];
  if (!d && (d = Cc._, !d)) {
    throw t("IWatchable.-notify-watches", a);
  }
  return d.call(null, a, b, c);
}
function Kc(a, b, c) {
  if (a ? a.Qc : a) {
    return a.Qc(a, b, c);
  }
  var d;
  d = Kc[n(null == a ? null : a)];
  if (!d && (d = Kc._, !d)) {
    throw t("IWatchable.-add-watch", a);
  }
  return d.call(null, a, b, c);
}
function Lc(a, b) {
  if (a ? a.Sc : a) {
    return a.Sc(a, b);
  }
  var c;
  c = Lc[n(null == a ? null : a)];
  if (!c && (c = Lc._, !c)) {
    throw t("IWatchable.-remove-watch", a);
  }
  return c.call(null, a, b);
}
function Mc(a) {
  if (a ? a.Vb : a) {
    return a.Vb(a);
  }
  var b;
  b = Mc[n(null == a ? null : a)];
  if (!b && (b = Mc._, !b)) {
    throw t("IEditableCollection.-as-transient", a);
  }
  return b.call(null, a);
}
function Nc(a, b) {
  if (a ? a.Eb : a) {
    return a.Eb(a, b);
  }
  var c;
  c = Nc[n(null == a ? null : a)];
  if (!c && (c = Nc._, !c)) {
    throw t("ITransientCollection.-conj!", a);
  }
  return c.call(null, a, b);
}
function Oc(a) {
  if (a ? a.Fb : a) {
    return a.Fb(a);
  }
  var b;
  b = Oc[n(null == a ? null : a)];
  if (!b && (b = Oc._, !b)) {
    throw t("ITransientCollection.-persistent!", a);
  }
  return b.call(null, a);
}
function Pc(a, b, c) {
  if (a ? a.kc : a) {
    return a.kc(a, b, c);
  }
  var d;
  d = Pc[n(null == a ? null : a)];
  if (!d && (d = Pc._, !d)) {
    throw t("ITransientAssociative.-assoc!", a);
  }
  return d.call(null, a, b, c);
}
function Qc(a, b, c) {
  if (a ? a.xd : a) {
    return a.xd(0, b, c);
  }
  var d;
  d = Qc[n(null == a ? null : a)];
  if (!d && (d = Qc._, !d)) {
    throw t("ITransientVector.-assoc-n!", a);
  }
  return d.call(null, a, b, c);
}
function Rc(a) {
  if (a ? a.sd : a) {
    return a.sd();
  }
  var b;
  b = Rc[n(null == a ? null : a)];
  if (!b && (b = Rc._, !b)) {
    throw t("IChunk.-drop-first", a);
  }
  return b.call(null, a);
}
function x(a) {
  if (a ? a.Oc : a) {
    return a.Oc(a);
  }
  var b;
  b = x[n(null == a ? null : a)];
  if (!b && (b = x._, !b)) {
    throw t("IChunkedSeq.-chunked-first", a);
  }
  return b.call(null, a);
}
function z(a) {
  if (a ? a.Pc : a) {
    return a.Pc(a);
  }
  var b;
  b = z[n(null == a ? null : a)];
  if (!b && (b = z._, !b)) {
    throw t("IChunkedSeq.-chunked-rest", a);
  }
  return b.call(null, a);
}
function Sc(a) {
  if (a ? a.Nc : a) {
    return a.Nc(a);
  }
  var b;
  b = Sc[n(null == a ? null : a)];
  if (!b && (b = Sc._, !b)) {
    throw t("IChunkedNext.-chunked-next", a);
  }
  return b.call(null, a);
}
function Yc(a, b) {
  if (a ? a.he : a) {
    return a.he(a, b);
  }
  var c;
  c = Yc[n(null == a ? null : a)];
  if (!c && (c = Yc._, !c)) {
    throw t("IReset.-reset!", a);
  }
  return c.call(null, a, b);
}
var Zc = function() {
  function a(a, b, c, d, e) {
    if (a ? a.le : a) {
      return a.le(a, b, c, d, e);
    }
    var r;
    r = Zc[n(null == a ? null : a)];
    if (!r && (r = Zc._, !r)) {
      throw t("ISwap.-swap!", a);
    }
    return r.call(null, a, b, c, d, e);
  }
  function b(a, b, c, d) {
    if (a ? a.ke : a) {
      return a.ke(a, b, c, d);
    }
    var e;
    e = Zc[n(null == a ? null : a)];
    if (!e && (e = Zc._, !e)) {
      throw t("ISwap.-swap!", a);
    }
    return e.call(null, a, b, c, d);
  }
  function c(a, b, c) {
    if (a ? a.je : a) {
      return a.je(a, b, c);
    }
    var d;
    d = Zc[n(null == a ? null : a)];
    if (!d && (d = Zc._, !d)) {
      throw t("ISwap.-swap!", a);
    }
    return d.call(null, a, b, c);
  }
  function d(a, b) {
    if (a ? a.ie : a) {
      return a.ie(a, b);
    }
    var c;
    c = Zc[n(null == a ? null : a)];
    if (!c && (c = Zc._, !c)) {
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
function $c(a) {
  this.Te = a;
  this.G = 0;
  this.q = 1073741824;
}
$c.prototype.yd = function(a, b) {
  return this.Te.append(b);
};
function ad(a) {
  var b = new La;
  a.N(null, new $c(b), Wa());
  return "" + u.g(b);
}
var bd = "undefined" !== typeof Math.imul && 0 !== (Math.imul.h ? Math.imul.h(4294967295, 5) : Math.imul.call(null, 4294967295, 5)) ? function(a, b) {
  return Math.imul.h ? Math.imul.h(a, b) : Math.imul.call(null, a, b);
} : function(a, b) {
  var c = a & 65535, d = b & 65535;
  return c * d + ((a >>> 16 & 65535) * d + c * (b >>> 16 & 65535) << 16 >>> 0) | 0;
};
function id(a) {
  a = bd(a, 3432918353);
  return bd(a << 15 | a >>> -15, 461845907);
}
function jd(a, b) {
  var c = a ^ b;
  return bd(c << 13 | c >>> -13, 5) + 3864292196;
}
function kd(a, b) {
  var c = a ^ b, c = bd(c ^ c >>> 16, 2246822507), c = bd(c ^ c >>> 13, 3266489909);
  return c ^ c >>> 16;
}
function ld(a) {
  var b;
  a: {
    b = 1;
    for (var c = 0;;) {
      if (b < a.length) {
        var d = b + 2, c = jd(c, id(a.charCodeAt(b - 1) | a.charCodeAt(b) << 16));
        b = d;
      } else {
        b = c;
        break a;
      }
    }
    b = void 0;
  }
  b = 1 === (a.length & 1) ? b ^ id(a.charCodeAt(a.length - 1)) : b;
  return kd(b, bd(2, a.length));
}
var md = {}, nd = 0;
function od(a) {
  255 < nd && (md = {}, nd = 0);
  var b = md[a];
  if ("number" !== typeof b) {
    a: {
      if (null != a) {
        if (b = a.length, 0 < b) {
          for (var c = 0, d = 0;;) {
            if (c < b) {
              var e = c + 1, d = bd(31, d) + a.charCodeAt(c), c = e
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
    md[a] = b;
    nd += 1;
  }
  return a = b;
}
function pd(a) {
  a && (a.q & 4194304 || a.ce) ? a = a.P(null) : "number" === typeof a ? a = (Math.floor.g ? Math.floor.g(a) : Math.floor.call(null, a)) % 2147483647 : !0 === a ? a = 1 : !1 === a ? a = 0 : "string" === typeof a ? (a = od(a), 0 !== a && (a = id(a), a = jd(0, a), a = kd(a, 4))) : a = null == a ? 0 : lc(a);
  return a;
}
function qd(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
function Ad(a, b) {
  if (q(C.h ? C.h(a, b) : C.call(null, a, b))) {
    return 0;
  }
  if (q(function() {
    var c = fb(a.Ya);
    return c ? b.Ya : c;
  }())) {
    return-1;
  }
  if (q(a.Ya)) {
    if (fb(b.Ya)) {
      return 1;
    }
    var c = function() {
      var c = a.Ya, d = b.Ya;
      return Bd.h ? Bd.h(c, d) : Bd.call(null, c, d);
    }();
    if (0 === c) {
      var c = a.name, d = b.name;
      return Bd.h ? Bd.h(c, d) : Bd.call(null, c, d);
    }
    return c;
  }
  c = a.name;
  d = b.name;
  return Bd.h ? Bd.h(c, d) : Bd.call(null, c, d);
}
function Cd(a, b, c, d, e) {
  this.Ya = a;
  this.name = b;
  this.Cb = c;
  this.Rb = d;
  this.na = e;
  this.q = 2154168321;
  this.G = 4096;
}
k = Cd.prototype;
k.N = function(a, b) {
  return zc(b, this.Cb);
};
k.P = function() {
  var a = this.Rb;
  return null != a ? a : this.Rb = a = qd(ld(this.name), od(this.Ya));
};
k.J = function(a, b) {
  return new Cd(this.Ya, this.name, this.Cb, this.Rb, b);
};
k.I = function() {
  return this.na;
};
k.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return yb.j(c, this, null);
      case 3:
        return yb.j(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.h = function(a, c) {
    return yb.j(c, this, null);
  };
  a.j = function(a, c, d) {
    return yb.j(c, this, d);
  };
  return a;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(jb(b)));
};
k.g = function(a) {
  return yb.j(a, this, null);
};
k.h = function(a, b) {
  return yb.j(a, this, b);
};
k.M = function(a, b) {
  return b instanceof Cd ? this.Cb === b.Cb : !1;
};
k.toString = function() {
  return this.Cb;
};
var Dd = function() {
  function a(a, b) {
    var c = null != a ? "" + u.g(a) + "/" + u.g(b) : b;
    return new Cd(a, b, c, null, null);
  }
  function b(a) {
    return a instanceof Cd ? a : c.h(null, a);
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
function E(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.q & 8388608 || a.vd)) {
    return a.Q(null);
  }
  if (a instanceof Array || "string" === typeof a) {
    return 0 === a.length ? null : new Ed(a, 0);
  }
  if (gb(mc, a)) {
    return nc(a);
  }
  throw Error("" + u.g(a) + " is not ISeqable");
}
function F(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.q & 64 || a.jc)) {
    return a.$(null);
  }
  a = E(a);
  return null == a ? null : ub(a);
}
function G(a) {
  return null != a ? a && (a.q & 64 || a.jc) ? a.ga(null) : (a = E(a)) ? vb(a) : Fd : Fd;
}
function H(a) {
  return null == a ? null : a && (a.q & 128 || a.yc) ? a.ja(null) : E(G(a));
}
var C = function() {
  function a(a, b) {
    return null == a ? null == b : a === b || kc(a, b);
  }
  var b = null, c = function() {
    function a(b, d, h) {
      var l = null;
      2 < arguments.length && (l = K(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (b.h(a, d)) {
          if (H(e)) {
            a = d, d = F(e), e = H(e);
          } else {
            return b.h(d, F(e));
          }
        } else {
          return!1;
        }
      }
    }
    a.w = 2;
    a.n = function(a) {
      var b = F(a);
      a = H(a);
      var d = F(a);
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
        return c.k(b, e, K(arguments, 2));
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
function Gd(a, b) {
  var c = id(a), c = jd(0, c);
  return kd(c, b);
}
function Hd(a) {
  var b = 0, c = 1;
  for (a = E(a);;) {
    if (null != a) {
      b += 1, c = bd(31, c) + pd(F(a)) | 0, a = H(a);
    } else {
      return Gd(c, b);
    }
  }
}
function Id(a) {
  var b = 0, c = 0;
  for (a = E(a);;) {
    if (null != a) {
      b += 1, c = c + pd(F(a)) | 0, a = H(a);
    } else {
      return Gd(c, b);
    }
  }
}
mb["null"] = !0;
nb["null"] = function() {
  return 0;
};
Date.prototype.M = function(a, b) {
  return b instanceof Date && this.toString() === b.toString();
};
kc.number = function(a, b) {
  return a === b;
};
Zb["function"] = !0;
$b["function"] = function() {
  return null;
};
kb["function"] = !0;
lc._ = function(a) {
  return a[ka] || (a[ka] = ++la);
};
function Jd(a) {
  return a + 1;
}
function Kd(a) {
  this.B = a;
  this.G = 0;
  this.q = 32768;
}
Kd.prototype.Ub = function() {
  return this.B;
};
function Ld(a) {
  return a instanceof Kd;
}
function L(a) {
  return Yb(a);
}
var Md = function() {
  function a(a, b, c, d) {
    for (var l = nb(a);;) {
      if (d < l) {
        var m = v.h(a, d);
        c = b.h ? b.h(c, m) : b.call(null, c, m);
        if (Ld(c)) {
          return Yb(c);
        }
        d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    var d = nb(a), l = c;
    for (c = 0;;) {
      if (c < d) {
        var m = v.h(a, c), l = b.h ? b.h(l, m) : b.call(null, l, m);
        if (Ld(l)) {
          return Yb(l);
        }
        c += 1;
      } else {
        return l;
      }
    }
  }
  function c(a, b) {
    var c = nb(a);
    if (0 === c) {
      return b.p ? b.p() : b.call(null);
    }
    for (var d = v.h(a, 0), l = 1;;) {
      if (l < c) {
        var m = v.h(a, l), d = b.h ? b.h(d, m) : b.call(null, d, m);
        if (Ld(d)) {
          return Yb(d);
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
}(), Nd = function() {
  function a(a, b, c, d) {
    for (var l = a.length;;) {
      if (d < l) {
        var m = a[d];
        c = b.h ? b.h(c, m) : b.call(null, c, m);
        if (Ld(c)) {
          return Yb(c);
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
        if (Ld(l)) {
          return Yb(l);
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
        if (Ld(d)) {
          return Yb(d);
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
function Od(a) {
  return a ? a.q & 2 || a.$d ? !0 : a.q ? !1 : gb(mb, a) : gb(mb, a);
}
function Pd(a) {
  return a ? a.q & 16 || a.td ? !0 : a.q ? !1 : gb(rb, a) : gb(rb, a);
}
function Ed(a, b) {
  this.l = a;
  this.H = b;
  this.q = 166199550;
  this.G = 8192;
}
k = Ed.prototype;
k.toString = function() {
  return ad(this);
};
k.F = function(a, b) {
  var c = b + this.H;
  return c < this.l.length ? this.l[c] : null;
};
k.oa = function(a, b, c) {
  a = b + this.H;
  return a < this.l.length ? this.l[a] : c;
};
k.ja = function() {
  return this.H + 1 < this.l.length ? new Ed(this.l, this.H + 1) : null;
};
k.T = function() {
  return this.l.length - this.H;
};
k.ic = function() {
  var a = nb(this);
  return 0 < a ? new Qd(this, a - 1, null) : null;
};
k.P = function() {
  return Hd(this);
};
k.M = function(a, b) {
  return Rd.h ? Rd.h(this, b) : Rd.call(null, this, b);
};
k.Y = function() {
  return Fd;
};
k.ba = function(a, b) {
  return Nd.m(this.l, b, this.l[this.H], this.H + 1);
};
k.ca = function(a, b, c) {
  return Nd.m(this.l, b, c, this.H);
};
k.$ = function() {
  return this.l[this.H];
};
k.ga = function() {
  return this.H + 1 < this.l.length ? new Ed(this.l, this.H + 1) : Fd;
};
k.Q = function() {
  return this;
};
k.S = function(a, b) {
  return Sd.h ? Sd.h(b, this) : Sd.call(null, b, this);
};
var Td = function() {
  function a(a, b) {
    return b < a.length ? new Ed(a, b) : null;
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
}(), K = function() {
  function a(a, b) {
    return Td.h(a, b);
  }
  function b(a) {
    return Td.h(a, 0);
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
function Qd(a, b, c) {
  this.tc = a;
  this.H = b;
  this.C = c;
  this.q = 32374990;
  this.G = 8192;
}
k = Qd.prototype;
k.toString = function() {
  return ad(this);
};
k.I = function() {
  return this.C;
};
k.ja = function() {
  return 0 < this.H ? new Qd(this.tc, this.H - 1, null) : null;
};
k.T = function() {
  return this.H + 1;
};
k.P = function() {
  return Hd(this);
};
k.M = function(a, b) {
  return Rd.h ? Rd.h(this, b) : Rd.call(null, this, b);
};
k.Y = function() {
  var a = this.C;
  return Ud.h ? Ud.h(Fd, a) : Ud.call(null, Fd, a);
};
k.ba = function(a, b) {
  return be.h ? be.h(b, this) : be.call(null, b, this);
};
k.ca = function(a, b, c) {
  return be.j ? be.j(b, c, this) : be.call(null, b, c, this);
};
k.$ = function() {
  return v.h(this.tc, this.H);
};
k.ga = function() {
  return 0 < this.H ? new Qd(this.tc, this.H - 1, null) : Fd;
};
k.Q = function() {
  return this;
};
k.J = function(a, b) {
  return new Qd(this.tc, this.H, b);
};
k.S = function(a, b) {
  return Sd.h ? Sd.h(b, this) : Sd.call(null, b, this);
};
function ce(a) {
  return F(H(a));
}
function de(a) {
  for (;;) {
    var b = H(a);
    if (null != b) {
      a = b;
    } else {
      return F(a);
    }
  }
}
kc._ = function(a, b) {
  return a === b;
};
var fe = function() {
  function a(a, b) {
    return null != a ? qb(a, b) : qb(Fd, b);
  }
  var b = null, c = function() {
    function a(b, d, h) {
      var l = null;
      2 < arguments.length && (l = K(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (q(e)) {
          a = b.h(a, d), d = F(e), e = H(e);
        } else {
          return b.h(a, d);
        }
      }
    }
    a.w = 2;
    a.n = function(a) {
      var b = F(a);
      a = H(a);
      var d = F(a);
      a = G(a);
      return c(b, d, a);
    };
    a.k = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 0:
        return ee;
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.k(b, e, K(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.w = 2;
  b.n = c.n;
  b.p = function() {
    return ee;
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
    if (a && (a.q & 2 || a.$d)) {
      a = a.T(null);
    } else {
      if (a instanceof Array) {
        a = a.length;
      } else {
        if ("string" === typeof a) {
          a = a.length;
        } else {
          if (gb(mb, a)) {
            a = nb(a);
          } else {
            a: {
              a = E(a);
              for (var b = 0;;) {
                if (Od(a)) {
                  a = b + nb(a);
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
var ge = function() {
  function a(a, b, c) {
    for (;;) {
      if (null == a) {
        return c;
      }
      if (0 === b) {
        return E(a) ? F(a) : c;
      }
      if (Pd(a)) {
        return v.j(a, b, c);
      }
      if (E(a)) {
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
        if (E(a)) {
          return F(a);
        }
        throw Error("Index out of bounds");
      }
      if (Pd(a)) {
        return v.h(a, b);
      }
      if (E(a)) {
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
}(), O = function() {
  function a(a, b, c) {
    if ("number" !== typeof b) {
      throw Error("index argument to nth must be a number.");
    }
    if (null == a) {
      return c;
    }
    if (a && (a.q & 16 || a.td)) {
      return a.oa(null, b, c);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : c;
    }
    if (gb(rb, a)) {
      return v.h(a, b);
    }
    if (a ? a.q & 64 || a.jc || (a.q ? 0 : gb(tb, a)) : gb(tb, a)) {
      return ge.j(a, b, c);
    }
    throw Error("nth not supported on this type " + u.g(ib(hb(a))));
  }
  function b(a, b) {
    if ("number" !== typeof b) {
      throw Error("index argument to nth must be a number");
    }
    if (null == a) {
      return a;
    }
    if (a && (a.q & 16 || a.td)) {
      return a.F(null, b);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : null;
    }
    if (gb(rb, a)) {
      return v.h(a, b);
    }
    if (a ? a.q & 64 || a.jc || (a.q ? 0 : gb(tb, a)) : gb(tb, a)) {
      return ge.h(a, b);
    }
    throw Error("nth not supported on this type " + u.g(ib(hb(a))));
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
    return null != a ? a && (a.q & 256 || a.ud) ? a.L(null, b, c) : a instanceof Array ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : gb(xb, a) ? yb.j(a, b, c) : c : c;
  }
  function b(a, b) {
    return null == a ? null : a && (a.q & 256 || a.ud) ? a.K(null, b) : a instanceof Array ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : gb(xb, a) ? yb.h(a, b) : null;
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
    return null != a ? Bb(a, b, c) : he([b], [c]);
  }
  var b = null, c = function() {
    function a(b, d, h, l) {
      var m = null;
      3 < arguments.length && (m = K(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, h, m);
    }
    function c(a, d, e, l) {
      for (;;) {
        if (a = b.j(a, d, e), q(l)) {
          d = F(l), e = ce(l), l = H(H(l));
        } else {
          return a;
        }
      }
    }
    a.w = 3;
    a.n = function(a) {
      var b = F(a);
      a = H(a);
      var d = F(a);
      a = H(a);
      var l = F(a);
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
        return c.k(b, e, f, K(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.w = 3;
  b.n = c.n;
  b.j = a;
  b.k = c.k;
  return b;
}(), ie = function() {
  function a(a, b) {
    return null == a ? null : Hb(a, b);
  }
  var b = null, c = function() {
    function a(b, d, h) {
      var l = null;
      2 < arguments.length && (l = K(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (null == a) {
          return null;
        }
        a = b.h(a, d);
        if (q(e)) {
          d = F(e), e = H(e);
        } else {
          return a;
        }
      }
    }
    a.w = 2;
    a.n = function(a) {
      var b = F(a);
      a = H(a);
      var d = F(a);
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
        return c.k(b, e, K(arguments, 2));
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
function je(a) {
  var b = ia(a);
  return q(b) ? b : a ? q(q(null) ? null : a.Zd) ? !0 : a.lf ? !1 : gb(kb, a) : gb(kb, a);
}
function ke(a, b) {
  this.o = a;
  this.C = b;
  this.G = 0;
  this.q = 393217;
}
k = ke.prototype;
k.call = function() {
  function a(a, b, c, d, e, f, g, h, l, r, m, s, w, A, y, B, D, J, I, M, P, ea) {
    a = this.o;
    return S.xc ? S.xc(a, b, c, d, e, f, g, h, l, r, m, s, w, A, y, B, D, J, I, M, P, ea) : S.call(null, a, b, c, d, e, f, g, h, l, r, m, s, w, A, y, B, D, J, I, M, P, ea);
  }
  function b(a, b, c, d, e, f, g, h, l, r, m, s, w, A, y, B, D, J, I, M, P) {
    a = this;
    return a.o.ob ? a.o.ob(b, c, d, e, f, g, h, l, r, m, s, w, A, y, B, D, J, I, M, P) : a.o.call(null, b, c, d, e, f, g, h, l, r, m, s, w, A, y, B, D, J, I, M, P);
  }
  function c(a, b, c, d, e, f, g, h, l, r, m, s, w, A, y, B, D, J, I, M) {
    a = this;
    return a.o.nb ? a.o.nb(b, c, d, e, f, g, h, l, r, m, s, w, A, y, B, D, J, I, M) : a.o.call(null, b, c, d, e, f, g, h, l, r, m, s, w, A, y, B, D, J, I, M);
  }
  function d(a, b, c, d, e, f, g, h, l, r, m, s, w, A, y, B, D, J, I) {
    a = this;
    return a.o.mb ? a.o.mb(b, c, d, e, f, g, h, l, r, m, s, w, A, y, B, D, J, I) : a.o.call(null, b, c, d, e, f, g, h, l, r, m, s, w, A, y, B, D, J, I);
  }
  function e(a, b, c, d, e, f, g, h, l, r, m, s, w, A, y, B, D, J) {
    a = this;
    return a.o.lb ? a.o.lb(b, c, d, e, f, g, h, l, r, m, s, w, A, y, B, D, J) : a.o.call(null, b, c, d, e, f, g, h, l, r, m, s, w, A, y, B, D, J);
  }
  function f(a, b, c, d, e, f, g, h, l, r, m, s, w, A, y, B, D) {
    a = this;
    return a.o.kb ? a.o.kb(b, c, d, e, f, g, h, l, r, m, s, w, A, y, B, D) : a.o.call(null, b, c, d, e, f, g, h, l, r, m, s, w, A, y, B, D);
  }
  function g(a, b, c, d, e, f, g, h, l, r, m, s, w, A, y, B) {
    a = this;
    return a.o.jb ? a.o.jb(b, c, d, e, f, g, h, l, r, m, s, w, A, y, B) : a.o.call(null, b, c, d, e, f, g, h, l, r, m, s, w, A, y, B);
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
  function B(a, b, c, d, e, f, g) {
    a = this;
    return a.o.ia ? a.o.ia(b, c, d, e, f, g) : a.o.call(null, b, c, d, e, f, g);
  }
  function D(a, b, c, d, e, f) {
    a = this;
    return a.o.O ? a.o.O(b, c, d, e, f) : a.o.call(null, b, c, d, e, f);
  }
  function I(a, b, c, d, e) {
    a = this;
    return a.o.m ? a.o.m(b, c, d, e) : a.o.call(null, b, c, d, e);
  }
  function P(a, b, c, d) {
    a = this;
    return a.o.j ? a.o.j(b, c, d) : a.o.call(null, b, c, d);
  }
  function M(a, b, c) {
    a = this;
    return a.o.h ? a.o.h(b, c) : a.o.call(null, b, c);
  }
  function ea(a, b) {
    a = this;
    return a.o.g ? a.o.g(b) : a.o.call(null, b);
  }
  function na(a) {
    a = this;
    return a.o.p ? a.o.p() : a.o.call(null);
  }
  var J = null, J = function(J, da, fa, ga, qa, va, ya, Aa, Fa, oa, Ma, ab, bb, Da, sb, lb, cb, Cb, $, xc, Ob, hc) {
    switch(arguments.length) {
      case 1:
        return na.call(this, J);
      case 2:
        return ea.call(this, J, da);
      case 3:
        return M.call(this, J, da, fa);
      case 4:
        return P.call(this, J, da, fa, ga);
      case 5:
        return I.call(this, J, da, fa, ga, qa);
      case 6:
        return D.call(this, J, da, fa, ga, qa, va);
      case 7:
        return B.call(this, J, da, fa, ga, qa, va, ya);
      case 8:
        return y.call(this, J, da, fa, ga, qa, va, ya, Aa);
      case 9:
        return A.call(this, J, da, fa, ga, qa, va, ya, Aa, Fa);
      case 10:
        return w.call(this, J, da, fa, ga, qa, va, ya, Aa, Fa, oa);
      case 11:
        return s.call(this, J, da, fa, ga, qa, va, ya, Aa, Fa, oa, Ma);
      case 12:
        return r.call(this, J, da, fa, ga, qa, va, ya, Aa, Fa, oa, Ma, ab);
      case 13:
        return m.call(this, J, da, fa, ga, qa, va, ya, Aa, Fa, oa, Ma, ab, bb);
      case 14:
        return l.call(this, J, da, fa, ga, qa, va, ya, Aa, Fa, oa, Ma, ab, bb, Da);
      case 15:
        return h.call(this, J, da, fa, ga, qa, va, ya, Aa, Fa, oa, Ma, ab, bb, Da, sb);
      case 16:
        return g.call(this, J, da, fa, ga, qa, va, ya, Aa, Fa, oa, Ma, ab, bb, Da, sb, lb);
      case 17:
        return f.call(this, J, da, fa, ga, qa, va, ya, Aa, Fa, oa, Ma, ab, bb, Da, sb, lb, cb);
      case 18:
        return e.call(this, J, da, fa, ga, qa, va, ya, Aa, Fa, oa, Ma, ab, bb, Da, sb, lb, cb, Cb);
      case 19:
        return d.call(this, J, da, fa, ga, qa, va, ya, Aa, Fa, oa, Ma, ab, bb, Da, sb, lb, cb, Cb, $);
      case 20:
        return c.call(this, J, da, fa, ga, qa, va, ya, Aa, Fa, oa, Ma, ab, bb, Da, sb, lb, cb, Cb, $, xc);
      case 21:
        return b.call(this, J, da, fa, ga, qa, va, ya, Aa, Fa, oa, Ma, ab, bb, Da, sb, lb, cb, Cb, $, xc, Ob);
      case 22:
        return a.call(this, J, da, fa, ga, qa, va, ya, Aa, Fa, oa, Ma, ab, bb, Da, sb, lb, cb, Cb, $, xc, Ob, hc);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  J.g = na;
  J.h = ea;
  J.j = M;
  J.m = P;
  J.O = I;
  J.ia = D;
  J.Aa = B;
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
  J.be = b;
  J.xc = a;
  return J;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(jb(b)));
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
k.kb = function(a, b, c, d, e, f, g, h, l, m, r, s, w, A, y, B) {
  return this.o.kb ? this.o.kb(a, b, c, d, e, f, g, h, l, m, r, s, w, A, y, B) : this.o.call(null, a, b, c, d, e, f, g, h, l, m, r, s, w, A, y, B);
};
k.lb = function(a, b, c, d, e, f, g, h, l, m, r, s, w, A, y, B, D) {
  return this.o.lb ? this.o.lb(a, b, c, d, e, f, g, h, l, m, r, s, w, A, y, B, D) : this.o.call(null, a, b, c, d, e, f, g, h, l, m, r, s, w, A, y, B, D);
};
k.mb = function(a, b, c, d, e, f, g, h, l, m, r, s, w, A, y, B, D, I) {
  return this.o.mb ? this.o.mb(a, b, c, d, e, f, g, h, l, m, r, s, w, A, y, B, D, I) : this.o.call(null, a, b, c, d, e, f, g, h, l, m, r, s, w, A, y, B, D, I);
};
k.nb = function(a, b, c, d, e, f, g, h, l, m, r, s, w, A, y, B, D, I, P) {
  return this.o.nb ? this.o.nb(a, b, c, d, e, f, g, h, l, m, r, s, w, A, y, B, D, I, P) : this.o.call(null, a, b, c, d, e, f, g, h, l, m, r, s, w, A, y, B, D, I, P);
};
k.ob = function(a, b, c, d, e, f, g, h, l, m, r, s, w, A, y, B, D, I, P, M) {
  return this.o.ob ? this.o.ob(a, b, c, d, e, f, g, h, l, m, r, s, w, A, y, B, D, I, P, M) : this.o.call(null, a, b, c, d, e, f, g, h, l, m, r, s, w, A, y, B, D, I, P, M);
};
k.be = function(a, b, c, d, e, f, g, h, l, m, r, s, w, A, y, B, D, I, P, M, ea) {
  var na = this.o;
  return S.xc ? S.xc(na, a, b, c, d, e, f, g, h, l, m, r, s, w, A, y, B, D, I, P, M, ea) : S.call(null, na, a, b, c, d, e, f, g, h, l, m, r, s, w, A, y, B, D, I, P, M, ea);
};
k.Zd = !0;
k.J = function(a, b) {
  return new ke(this.o, b);
};
k.I = function() {
  return this.C;
};
function Ud(a, b) {
  return je(a) && !(a ? a.q & 262144 || a.me || (a.q ? 0 : gb(ec, a)) : gb(ec, a)) ? new ke(a, b) : null == a ? null : fc(a, b);
}
function le(a) {
  var b = null != a;
  return(b ? a ? a.q & 131072 || a.ee || (a.q ? 0 : gb(Zb, a)) : gb(Zb, a) : b) ? $b(a) : null;
}
function me(a) {
  return null == a ? null : Vb(a);
}
var ne = function() {
  function a(a, b) {
    return null == a ? null : Pb(a, b);
  }
  var b = null, c = function() {
    function a(b, d, h) {
      var l = null;
      2 < arguments.length && (l = K(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (null == a) {
          return null;
        }
        a = b.h(a, d);
        if (q(e)) {
          d = F(e), e = H(e);
        } else {
          return a;
        }
      }
    }
    a.w = 2;
    a.n = function(a) {
      var b = F(a);
      a = H(a);
      var d = F(a);
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
        return c.k(b, e, K(arguments, 2));
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
function oe(a) {
  return null == a || fb(E(a));
}
function pe(a) {
  return null == a ? !1 : a ? a.q & 8 || a.ef ? !0 : a.q ? !1 : gb(pb, a) : gb(pb, a);
}
function qe(a) {
  return null == a ? !1 : a ? a.q & 4096 || a.jf ? !0 : a.q ? !1 : gb(Nb, a) : gb(Nb, a);
}
function re(a) {
  return a ? a.q & 16777216 || a.hf ? !0 : a.q ? !1 : gb(vc, a) : gb(vc, a);
}
function se(a) {
  return null == a ? !1 : a ? a.q & 1024 || a.ff ? !0 : a.q ? !1 : gb(Eb, a) : gb(Eb, a);
}
function te(a) {
  return a ? a.q & 16384 || a.kf ? !0 : a.q ? !1 : gb(Wb, a) : gb(Wb, a);
}
function T(a) {
  return a ? a.G & 512 || a.df ? !0 : !1 : !1;
}
function ue(a) {
  var b = [];
  Ha(a, function(a, b) {
    return function(a, c) {
      return b.push(c);
    };
  }(a, b));
  return b;
}
function ve(a, b, c, d, e) {
  for (;0 !== e;) {
    c[d] = a[b], d += 1, e -= 1, b += 1;
  }
}
function we(a, b, c, d, e) {
  b += e - 1;
  for (d += e - 1;0 !== e;) {
    c[d] = a[b], d -= 1, e -= 1, b -= 1;
  }
}
var xe = {};
function ye(a) {
  return null == a ? !1 : a ? a.q & 64 || a.jc ? !0 : a.q ? !1 : gb(tb, a) : gb(tb, a);
}
function Me(a) {
  return q(a) ? !0 : !1;
}
function Ne(a, b) {
  return Q.j(a, b, xe) === xe ? !1 : !0;
}
function Oe(a, b) {
  var c;
  if (c = null != a) {
    c = a ? a.q & 512 || a.cf ? !0 : a.q ? !1 : gb(zb, a) : gb(zb, a);
  }
  return c && Ne(a, b) ? new U(null, 2, 5, V, [b, Q.h(a, b)], null) : null;
}
function Bd(a, b) {
  if (a === b) {
    return 0;
  }
  if (null == a) {
    return-1;
  }
  if (null == b) {
    return 1;
  }
  if (hb(a) === hb(b)) {
    return a && (a.G & 2048 || a.vc) ? a.wc(null, b) : Ta(a, b);
  }
  throw Error("compare on non-nil objects of different types");
}
var Pe = function() {
  function a(a, b, c, g) {
    for (;;) {
      var h = Bd(O.h(a, g), O.h(b, g));
      if (0 === h && g + 1 < c) {
        g += 1;
      } else {
        return h;
      }
    }
  }
  function b(a, b) {
    var f = N(a), g = N(b);
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
function Qe(a) {
  return C.h(a, Bd) ? Bd : function(b, c) {
    var d = a.h ? a.h(b, c) : a.call(null, b, c);
    return "number" === typeof d ? d : q(d) ? -1 : q(a.h ? a.h(c, b) : a.call(null, c, b)) ? 1 : 0;
  };
}
var Se = function() {
  function a(a, b) {
    if (E(b)) {
      var c = Re.g ? Re.g(b) : Re.call(null, b), g = Qe(a);
      Ua(c, g);
      return E(c);
    }
    return Fd;
  }
  function b(a) {
    return c.h(Bd, a);
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
}(), Te = function() {
  function a(a, b, c) {
    return Se.h(function(c, f) {
      return Qe(b).call(null, a.g ? a.g(c) : a.call(null, c), a.g ? a.g(f) : a.call(null, f));
    }, c);
  }
  function b(a, b) {
    return c.j(a, Bd, b);
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
}(), be = function() {
  function a(a, b, c) {
    for (c = E(c);;) {
      if (c) {
        var g = F(c);
        b = a.h ? a.h(b, g) : a.call(null, b, g);
        if (Ld(b)) {
          return Yb(b);
        }
        c = H(c);
      } else {
        return b;
      }
    }
  }
  function b(a, b) {
    var c = E(b);
    if (c) {
      var g = F(c), c = H(c);
      return Ue.j ? Ue.j(a, g, c) : Ue.call(null, a, g, c);
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
}(), Ue = function() {
  function a(a, b, c) {
    return c && (c.q & 524288 || c.ge) ? c.ca(null, a, b) : c instanceof Array ? Nd.j(c, a, b) : "string" === typeof c ? Nd.j(c, a, b) : gb(gc, c) ? ic.j(c, a, b) : be.j(a, b, c);
  }
  function b(a, b) {
    return b && (b.q & 524288 || b.ge) ? b.ba(null, a) : b instanceof Array ? Nd.h(b, a) : "string" === typeof b ? Nd.h(b, a) : gb(gc, b) ? ic.h(b, a) : be.h(a, b);
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
function Ve(a, b, c) {
  return null != c ? jc(c, a, b) : b;
}
function We(a) {
  return a;
}
var Xe = function() {
  function a(a, b, c, g) {
    a = a.g ? a.g(b) : a.call(null, b);
    c = Ue.j(a, c, g);
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
}(), Ye = function() {
  var a = null, b = function() {
    function b(a, c, g) {
      var h = null;
      2 < arguments.length && (h = K(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, a, c, h);
    }
    function d(b, c, d) {
      return Ue.j(a, b + c, d);
    }
    b.w = 2;
    b.n = function(a) {
      var b = F(a);
      a = H(a);
      var c = F(a);
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
        return b.k(a, d, K(arguments, 2));
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
}(), Ze = function() {
  var a = null, b = function() {
    function b(a, c, g) {
      var h = null;
      2 < arguments.length && (h = K(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, a, c, h);
    }
    function d(b, c, d) {
      return Ue.j(a, b * c, d);
    }
    b.w = 2;
    b.n = function(a) {
      var b = F(a);
      a = H(a);
      var c = F(a);
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
        return b.k(a, d, K(arguments, 2));
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
function $e(a) {
  return a - 1;
}
var af = function() {
  function a(a, b) {
    return a > b ? a : b;
  }
  var b = null, c = function() {
    function a(b, d, h) {
      var l = null;
      2 < arguments.length && (l = K(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      return Ue.j(b, a > d ? a : d, e);
    }
    a.w = 2;
    a.n = function(a) {
      var b = F(a);
      a = H(a);
      var d = F(a);
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
        return c.k(b, e, K(arguments, 2));
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
}(), pf = function() {
  function a(a, b) {
    return a < b ? a : b;
  }
  var b = null, c = function() {
    function a(b, d, h) {
      var l = null;
      2 < arguments.length && (l = K(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      return Ue.j(b, a < d ? a : d, e);
    }
    a.w = 2;
    a.n = function(a) {
      var b = F(a);
      a = H(a);
      var d = F(a);
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
        return c.k(b, e, K(arguments, 2));
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
function qf(a) {
  return 0 <= a ? Math.floor.g ? Math.floor.g(a) : Math.floor.call(null, a) : Math.ceil.g ? Math.ceil.g(a) : Math.ceil.call(null, a);
}
function rf(a) {
  return qf(a);
}
function sf(a, b) {
  return qf((a - a % b) / b);
}
var tf = function() {
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
function uf(a) {
  return qf(tf.g(a));
}
function vf(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24;
}
function wf(a) {
  var b = 1;
  for (a = E(a);;) {
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
      1 < arguments.length && (h = K(Array.prototype.slice.call(arguments, 1), 0));
      return c.call(this, b, h);
    }
    function c(a, d) {
      for (var e = new La(b.g(a)), l = d;;) {
        if (q(l)) {
          e = e.append(b.g(F(l))), l = H(l);
        } else {
          return e.toString();
        }
      }
    }
    a.w = 1;
    a.n = function(a) {
      var b = F(a);
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
        return c.k(b, K(arguments, 1));
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
}(), xf = function() {
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
function Rd(a, b) {
  var c;
  if (re(b)) {
    if (Od(a) && Od(b) && N(a) !== N(b)) {
      c = !1;
    } else {
      a: {
        c = E(a);
        for (var d = E(b);;) {
          if (null == c) {
            c = null == d;
            break a;
          }
          if (null != d && C.h(F(c), F(d))) {
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
  return Me(c);
}
function yf(a) {
  var b = 0;
  for (a = E(a);;) {
    if (a) {
      var c = F(a), b = (b + (pd(function() {
        var a = c;
        return zf.g ? zf.g(a) : zf.call(null, a);
      }()) ^ pd(function() {
        var a = c;
        return Af.g ? Af.g(a) : Af.call(null, a);
      }()))) % 4503599627370496;
      a = H(a);
    } else {
      return b;
    }
  }
}
function Bf(a, b, c, d, e) {
  this.C = a;
  this.first = b;
  this.ub = c;
  this.count = d;
  this.A = e;
  this.q = 65937646;
  this.G = 8192;
}
k = Bf.prototype;
k.toString = function() {
  return ad(this);
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
  return null != a ? a : this.A = a = Hd(this);
};
k.M = function(a, b) {
  return Rd(this, b);
};
k.Y = function() {
  return Fd;
};
k.ba = function(a, b) {
  return be.h(b, this);
};
k.ca = function(a, b, c) {
  return be.j(b, c, this);
};
k.$ = function() {
  return this.first;
};
k.ga = function() {
  return 1 === this.count ? Fd : this.ub;
};
k.Q = function() {
  return this;
};
k.J = function(a, b) {
  return new Bf(b, this.first, this.ub, this.count, this.A);
};
k.S = function(a, b) {
  return new Bf(this.C, b, this, this.count + 1, null);
};
function Cf(a) {
  this.C = a;
  this.q = 65937614;
  this.G = 8192;
}
k = Cf.prototype;
k.toString = function() {
  return ad(this);
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
  return Rd(this, b);
};
k.Y = function() {
  return this;
};
k.ba = function(a, b) {
  return be.h(b, this);
};
k.ca = function(a, b, c) {
  return be.j(b, c, this);
};
k.$ = function() {
  return null;
};
k.ga = function() {
  return Fd;
};
k.Q = function() {
  return null;
};
k.J = function(a, b) {
  return new Cf(b);
};
k.S = function(a, b) {
  return new Bf(this.C, b, null, 1, null);
};
var Fd = new Cf(null);
function Df(a) {
  return(a ? a.q & 134217728 || a.gf || (a.q ? 0 : gb(wc, a)) : gb(wc, a)) ? yc(a) : Ue.j(fe, Fd, a);
}
var Ef = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = K(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b;
    if (a instanceof Ed && 0 === a.H) {
      b = a.l;
    } else {
      a: {
        for (b = [];;) {
          if (null != a) {
            b.push(a.$(null)), a = a.ja(null);
          } else {
            break a;
          }
        }
        b = void 0;
      }
    }
    a = b.length;
    for (var e = Fd;;) {
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
    a = E(a);
    return b(a);
  };
  a.k = b;
  return a;
}();
function Ff(a, b, c, d) {
  this.C = a;
  this.first = b;
  this.ub = c;
  this.A = d;
  this.q = 65929452;
  this.G = 8192;
}
k = Ff.prototype;
k.toString = function() {
  return ad(this);
};
k.I = function() {
  return this.C;
};
k.ja = function() {
  return null == this.ub ? null : E(this.ub);
};
k.P = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Hd(this);
};
k.M = function(a, b) {
  return Rd(this, b);
};
k.Y = function() {
  return Ud(Fd, this.C);
};
k.ba = function(a, b) {
  return be.h(b, this);
};
k.ca = function(a, b, c) {
  return be.j(b, c, this);
};
k.$ = function() {
  return this.first;
};
k.ga = function() {
  return null == this.ub ? Fd : this.ub;
};
k.Q = function() {
  return this;
};
k.J = function(a, b) {
  return new Ff(b, this.first, this.ub, this.A);
};
k.S = function(a, b) {
  return new Ff(null, b, this, this.A);
};
function Sd(a, b) {
  var c = null == b;
  return(c ? c : b && (b.q & 64 || b.jc)) ? new Ff(null, a, b, null) : new Ff(null, a, E(b), null);
}
function W(a, b, c, d) {
  this.Ya = a;
  this.name = b;
  this.ea = c;
  this.Rb = d;
  this.q = 2153775105;
  this.G = 4096;
}
k = W.prototype;
k.N = function(a, b) {
  return zc(b, ":" + u.g(this.ea));
};
k.P = function() {
  var a = this.Rb;
  return null != a ? a : this.Rb = a = qd(ld(this.name), od(this.Ya)) + 2654435769 | 0;
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
  return this.call.apply(this, [this].concat(jb(b)));
};
k.g = function(a) {
  return Q.h(a, this);
};
k.h = function(a, b) {
  return Q.j(a, this, b);
};
k.M = function(a, b) {
  return b instanceof W ? this.ea === b.ea : !1;
};
k.toString = function() {
  return ":" + u.g(this.ea);
};
function X(a, b) {
  return a === b ? !0 : a instanceof W && b instanceof W ? a.ea === b.ea : !1;
}
var Hf = function() {
  function a(a, b) {
    return new W(a, b, "" + u.g(q(a) ? "" + u.g(a) + "/" : null) + u.g(b), null);
  }
  function b(a) {
    if (a instanceof W) {
      return a;
    }
    if (a instanceof Cd) {
      var b;
      if (a && (a.G & 4096 || a.fe)) {
        b = a.Ya;
      } else {
        throw Error("Doesn't support namespace: " + u.g(a));
      }
      return new W(b, Gf.g ? Gf.g(a) : Gf.call(null, a), a.Cb, null);
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
function If(a, b, c, d) {
  this.C = a;
  this.bc = b;
  this.Z = c;
  this.A = d;
  this.G = 0;
  this.q = 32374988;
}
k = If.prototype;
k.toString = function() {
  return ad(this);
};
function Jf(a) {
  null != a.bc && (a.Z = a.bc.p ? a.bc.p() : a.bc.call(null), a.bc = null);
  return a.Z;
}
k.I = function() {
  return this.C;
};
k.ja = function() {
  nc(this);
  return null == this.Z ? null : H(this.Z);
};
k.P = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Hd(this);
};
k.M = function(a, b) {
  return Rd(this, b);
};
k.Y = function() {
  return Ud(Fd, this.C);
};
k.ba = function(a, b) {
  return be.h(b, this);
};
k.ca = function(a, b, c) {
  return be.j(b, c, this);
};
k.$ = function() {
  nc(this);
  return null == this.Z ? null : F(this.Z);
};
k.ga = function() {
  nc(this);
  return null != this.Z ? G(this.Z) : Fd;
};
k.Q = function() {
  Jf(this);
  if (null == this.Z) {
    return null;
  }
  for (var a = this.Z;;) {
    if (a instanceof If) {
      a = Jf(a);
    } else {
      return this.Z = a, E(this.Z);
    }
  }
};
k.J = function(a, b) {
  return new If(b, this.bc, this.Z, this.A);
};
k.S = function(a, b) {
  return Sd(b, this);
};
function Kf(a, b) {
  this.ua = a;
  this.end = b;
  this.G = 0;
  this.q = 2;
}
Kf.prototype.T = function() {
  return this.end;
};
Kf.prototype.add = function(a) {
  this.ua[this.end] = a;
  return this.end += 1;
};
Kf.prototype.R = function() {
  var a = new Tf(this.ua, 0, this.end);
  this.ua = null;
  return a;
};
function Uf(a) {
  return new Kf(Array(a), 0);
}
function Tf(a, b, c) {
  this.l = a;
  this.ha = b;
  this.end = c;
  this.G = 0;
  this.q = 524306;
}
k = Tf.prototype;
k.ba = function(a, b) {
  return Nd.m(this.l, b, this.l[this.ha], this.ha + 1);
};
k.ca = function(a, b, c) {
  return Nd.m(this.l, b, c, this.ha);
};
k.sd = function() {
  if (this.ha === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new Tf(this.l, this.ha + 1, this.end);
};
k.F = function(a, b) {
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
  return ad(this);
};
k.I = function() {
  return this.C;
};
k.ja = function() {
  if (1 < nb(this.R)) {
    return new Wf(Rc(this.R), this.Pa, this.C, null);
  }
  var a = nc(this.Pa);
  return null == a ? null : a;
};
k.P = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Hd(this);
};
k.M = function(a, b) {
  return Rd(this, b);
};
k.Y = function() {
  return Ud(Fd, this.C);
};
k.$ = function() {
  return v.h(this.R, 0);
};
k.ga = function() {
  return 1 < nb(this.R) ? new Wf(Rc(this.R), this.Pa, this.C, null) : null == this.Pa ? Fd : this.Pa;
};
k.Q = function() {
  return this;
};
k.Oc = function() {
  return this.R;
};
k.Pc = function() {
  return null == this.Pa ? Fd : this.Pa;
};
k.J = function(a, b) {
  return new Wf(this.R, this.Pa, b, this.A);
};
k.S = function(a, b) {
  return Sd(b, this);
};
k.Nc = function() {
  return null == this.Pa ? null : this.Pa;
};
function Xf(a, b) {
  return 0 === nb(a) ? b : new Wf(a, b, null, null);
}
function Yf(a, b) {
  a.add(b);
}
function Re(a) {
  for (var b = [];;) {
    if (E(a)) {
      b.push(F(a)), a = H(a);
    } else {
      return b;
    }
  }
}
function Zf(a, b) {
  if (Od(a)) {
    return N(a);
  }
  for (var c = a, d = b, e = 0;;) {
    if (0 < d && E(c)) {
      c = H(c), d -= 1, e += 1;
    } else {
      return e;
    }
  }
}
var ag = function $f(b) {
  return null == b ? null : null == H(b) ? E(F(b)) : Sd(F(b), $f(H(b)));
}, bg = function() {
  function a(a, b) {
    return new If(null, function() {
      var c = E(a);
      return c ? T(c) ? Xf(x(c), d.h(z(c), b)) : Sd(F(c), d.h(G(c), b)) : b;
    }, null, null);
  }
  function b(a) {
    return new If(null, function() {
      return a;
    }, null, null);
  }
  function c() {
    return new If(null, function() {
      return null;
    }, null, null);
  }
  var d = null, e = function() {
    function a(c, d, e) {
      var f = null;
      2 < arguments.length && (f = K(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, f);
    }
    function b(a, c, e) {
      return function s(a, b) {
        return new If(null, function() {
          var c = E(a);
          return c ? T(c) ? Xf(x(c), s(z(c), b)) : Sd(F(c), s(G(c), b)) : q(b) ? s(F(b), H(b)) : null;
        }, null, null);
      }(d.h(a, c), e);
    }
    a.w = 2;
    a.n = function(a) {
      var c = F(a);
      a = H(a);
      var d = F(a);
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
        return e.k(d, g, K(arguments, 2));
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
    return Sd(a, Sd(b, Sd(c, d)));
  }
  function b(a, b, c) {
    return Sd(a, Sd(b, c));
  }
  var c = null, d = function() {
    function a(c, d, e, m, r) {
      var s = null;
      4 < arguments.length && (s = K(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, m, s);
    }
    function b(a, c, d, e, f) {
      return Sd(a, Sd(c, Sd(d, Sd(e, ag(f)))));
    }
    a.w = 4;
    a.n = function(a) {
      var c = F(a);
      a = H(a);
      var d = F(a);
      a = H(a);
      var e = F(a);
      a = H(a);
      var r = F(a);
      a = G(a);
      return b(c, d, e, r, a);
    };
    a.k = b;
    return a;
  }(), c = function(c, f, g, h, l) {
    switch(arguments.length) {
      case 1:
        return E(c);
      case 2:
        return Sd(c, f);
      case 3:
        return b.call(this, c, f, g);
      case 4:
        return a.call(this, c, f, g, h);
      default:
        return d.k(c, f, g, h, K(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.w = 4;
  c.n = d.n;
  c.g = function(a) {
    return E(a);
  };
  c.h = function(a, b) {
    return Sd(a, b);
  };
  c.j = b;
  c.m = a;
  c.k = d.k;
  return c;
}();
function dg(a) {
  return Mc(a);
}
function eg(a) {
  return Oc(a);
}
var fg = function() {
  function a() {
    return Mc(ee);
  }
  var b = null, c = function() {
    function a(c, d, h) {
      var l = null;
      2 < arguments.length && (l = K(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      for (;;) {
        if (a = Nc(a, c), q(d)) {
          c = F(d), d = H(d);
        } else {
          return a;
        }
      }
    }
    a.w = 2;
    a.n = function(a) {
      var c = F(a);
      a = H(a);
      var d = F(a);
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
        return Nc(b, e);
      default:
        return c.k(b, e, K(arguments, 2));
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
    return Nc(a, b);
  };
  b.k = c.k;
  return b;
}(), gg = function() {
  var a = null, b = function() {
    function a(c, f, g, h) {
      var l = null;
      3 < arguments.length && (l = K(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, f, g, l);
    }
    function b(a, c, d, h) {
      for (;;) {
        if (a = Pc(a, c, d), q(h)) {
          c = F(h), d = ce(h), h = H(H(h));
        } else {
          return a;
        }
      }
    }
    a.w = 3;
    a.n = function(a) {
      var c = F(a);
      a = H(a);
      var g = F(a);
      a = H(a);
      var h = F(a);
      a = G(a);
      return b(c, g, h, a);
    };
    a.k = b;
    return a;
  }(), a = function(a, d, e, f) {
    switch(arguments.length) {
      case 3:
        return Pc(a, d, e);
      default:
        return b.k(a, d, e, K(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.w = 3;
  a.n = b.n;
  a.j = function(a, b, e) {
    return Pc(a, b, e);
  };
  a.k = b.k;
  return a;
}();
function hg(a, b, c) {
  var d = E(c);
  if (0 === b) {
    return a.p ? a.p() : a.call(null);
  }
  c = ub(d);
  var e = vb(d);
  if (1 === b) {
    return a.g ? a.g(c) : a.g ? a.g(c) : a.call(null, c);
  }
  var d = ub(e), f = vb(e);
  if (2 === b) {
    return a.h ? a.h(c, d) : a.h ? a.h(c, d) : a.call(null, c, d);
  }
  var e = ub(f), g = vb(f);
  if (3 === b) {
    return a.j ? a.j(c, d, e) : a.j ? a.j(c, d, e) : a.call(null, c, d, e);
  }
  var f = ub(g), h = vb(g);
  if (4 === b) {
    return a.m ? a.m(c, d, e, f) : a.m ? a.m(c, d, e, f) : a.call(null, c, d, e, f);
  }
  var g = ub(h), l = vb(h);
  if (5 === b) {
    return a.O ? a.O(c, d, e, f, g) : a.O ? a.O(c, d, e, f, g) : a.call(null, c, d, e, f, g);
  }
  var h = ub(l), m = vb(l);
  if (6 === b) {
    return a.ia ? a.ia(c, d, e, f, g, h) : a.ia ? a.ia(c, d, e, f, g, h) : a.call(null, c, d, e, f, g, h);
  }
  var l = ub(m), r = vb(m);
  if (7 === b) {
    return a.Aa ? a.Aa(c, d, e, f, g, h, l) : a.Aa ? a.Aa(c, d, e, f, g, h, l) : a.call(null, c, d, e, f, g, h, l);
  }
  var m = ub(r), s = vb(r);
  if (8 === b) {
    return a.pb ? a.pb(c, d, e, f, g, h, l, m) : a.pb ? a.pb(c, d, e, f, g, h, l, m) : a.call(null, c, d, e, f, g, h, l, m);
  }
  var r = ub(s), w = vb(s);
  if (9 === b) {
    return a.qb ? a.qb(c, d, e, f, g, h, l, m, r) : a.qb ? a.qb(c, d, e, f, g, h, l, m, r) : a.call(null, c, d, e, f, g, h, l, m, r);
  }
  var s = ub(w), A = vb(w);
  if (10 === b) {
    return a.eb ? a.eb(c, d, e, f, g, h, l, m, r, s) : a.eb ? a.eb(c, d, e, f, g, h, l, m, r, s) : a.call(null, c, d, e, f, g, h, l, m, r, s);
  }
  var w = ub(A), y = vb(A);
  if (11 === b) {
    return a.fb ? a.fb(c, d, e, f, g, h, l, m, r, s, w) : a.fb ? a.fb(c, d, e, f, g, h, l, m, r, s, w) : a.call(null, c, d, e, f, g, h, l, m, r, s, w);
  }
  var A = ub(y), B = vb(y);
  if (12 === b) {
    return a.gb ? a.gb(c, d, e, f, g, h, l, m, r, s, w, A) : a.gb ? a.gb(c, d, e, f, g, h, l, m, r, s, w, A) : a.call(null, c, d, e, f, g, h, l, m, r, s, w, A);
  }
  var y = ub(B), D = vb(B);
  if (13 === b) {
    return a.hb ? a.hb(c, d, e, f, g, h, l, m, r, s, w, A, y) : a.hb ? a.hb(c, d, e, f, g, h, l, m, r, s, w, A, y) : a.call(null, c, d, e, f, g, h, l, m, r, s, w, A, y);
  }
  var B = ub(D), I = vb(D);
  if (14 === b) {
    return a.ib ? a.ib(c, d, e, f, g, h, l, m, r, s, w, A, y, B) : a.ib ? a.ib(c, d, e, f, g, h, l, m, r, s, w, A, y, B) : a.call(null, c, d, e, f, g, h, l, m, r, s, w, A, y, B);
  }
  var D = ub(I), P = vb(I);
  if (15 === b) {
    return a.jb ? a.jb(c, d, e, f, g, h, l, m, r, s, w, A, y, B, D) : a.jb ? a.jb(c, d, e, f, g, h, l, m, r, s, w, A, y, B, D) : a.call(null, c, d, e, f, g, h, l, m, r, s, w, A, y, B, D);
  }
  var I = ub(P), M = vb(P);
  if (16 === b) {
    return a.kb ? a.kb(c, d, e, f, g, h, l, m, r, s, w, A, y, B, D, I) : a.kb ? a.kb(c, d, e, f, g, h, l, m, r, s, w, A, y, B, D, I) : a.call(null, c, d, e, f, g, h, l, m, r, s, w, A, y, B, D, I);
  }
  var P = ub(M), ea = vb(M);
  if (17 === b) {
    return a.lb ? a.lb(c, d, e, f, g, h, l, m, r, s, w, A, y, B, D, I, P) : a.lb ? a.lb(c, d, e, f, g, h, l, m, r, s, w, A, y, B, D, I, P) : a.call(null, c, d, e, f, g, h, l, m, r, s, w, A, y, B, D, I, P);
  }
  var M = ub(ea), na = vb(ea);
  if (18 === b) {
    return a.mb ? a.mb(c, d, e, f, g, h, l, m, r, s, w, A, y, B, D, I, P, M) : a.mb ? a.mb(c, d, e, f, g, h, l, m, r, s, w, A, y, B, D, I, P, M) : a.call(null, c, d, e, f, g, h, l, m, r, s, w, A, y, B, D, I, P, M);
  }
  ea = ub(na);
  na = vb(na);
  if (19 === b) {
    return a.nb ? a.nb(c, d, e, f, g, h, l, m, r, s, w, A, y, B, D, I, P, M, ea) : a.nb ? a.nb(c, d, e, f, g, h, l, m, r, s, w, A, y, B, D, I, P, M, ea) : a.call(null, c, d, e, f, g, h, l, m, r, s, w, A, y, B, D, I, P, M, ea);
  }
  var J = ub(na);
  vb(na);
  if (20 === b) {
    return a.ob ? a.ob(c, d, e, f, g, h, l, m, r, s, w, A, y, B, D, I, P, M, ea, J) : a.ob ? a.ob(c, d, e, f, g, h, l, m, r, s, w, A, y, B, D, I, P, M, ea, J) : a.call(null, c, d, e, f, g, h, l, m, r, s, w, A, y, B, D, I, P, M, ea, J);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var S = function() {
  function a(a, b, c, d, e) {
    b = cg.m(b, c, d, e);
    c = a.w;
    return a.n ? (d = Zf(b, c + 1), d <= c ? hg(a, d, b) : a.n(b)) : a.apply(a, Re(b));
  }
  function b(a, b, c, d) {
    b = cg.j(b, c, d);
    c = a.w;
    return a.n ? (d = Zf(b, c + 1), d <= c ? hg(a, d, b) : a.n(b)) : a.apply(a, Re(b));
  }
  function c(a, b, c) {
    b = cg.h(b, c);
    c = a.w;
    if (a.n) {
      var d = Zf(b, c + 1);
      return d <= c ? hg(a, d, b) : a.n(b);
    }
    return a.apply(a, Re(b));
  }
  function d(a, b) {
    var c = a.w;
    if (a.n) {
      var d = Zf(b, c + 1);
      return d <= c ? hg(a, d, b) : a.n(b);
    }
    return a.apply(a, Re(b));
  }
  var e = null, f = function() {
    function a(c, d, e, f, g, A) {
      var y = null;
      5 < arguments.length && (y = K(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, e, f, g, y);
    }
    function b(a, c, d, e, f, g) {
      c = Sd(c, Sd(d, Sd(e, Sd(f, ag(g)))));
      d = a.w;
      return a.n ? (e = Zf(c, d + 1), e <= d ? hg(a, e, c) : a.n(c)) : a.apply(a, Re(c));
    }
    a.w = 5;
    a.n = function(a) {
      var c = F(a);
      a = H(a);
      var d = F(a);
      a = H(a);
      var e = F(a);
      a = H(a);
      var f = F(a);
      a = H(a);
      var g = F(a);
      a = G(a);
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
        return f.k(e, h, l, m, r, K(arguments, 5));
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
    var g = Ud, y = le(a);
    b = b.O ? b.O(y, c, d, e, f) : b.call(null, y, c, d, e, f);
    return g(a, b);
  }
  function b(a, b, c, d, e) {
    var f = Ud, g = le(a);
    b = b.m ? b.m(g, c, d, e) : b.call(null, g, c, d, e);
    return f(a, b);
  }
  function c(a, b, c, d) {
    var e = Ud, f = le(a);
    b = b.j ? b.j(f, c, d) : b.call(null, f, c, d);
    return e(a, b);
  }
  function d(a, b, c) {
    var d = Ud, e = le(a);
    b = b.h ? b.h(e, c) : b.call(null, e, c);
    return d(a, b);
  }
  function e(a, b) {
    var c = Ud, d;
    d = le(a);
    d = b.g ? b.g(d) : b.call(null, d);
    return c(a, d);
  }
  var f = null, g = function() {
    function a(c, d, e, f, g, h, B) {
      var D = null;
      6 < arguments.length && (D = K(Array.prototype.slice.call(arguments, 6), 0));
      return b.call(this, c, d, e, f, g, h, D);
    }
    function b(a, c, d, e, f, g, h) {
      return Ud(a, S.k(c, le(a), d, e, f, K([g, h], 0)));
    }
    a.w = 6;
    a.n = function(a) {
      var c = F(a);
      a = H(a);
      var d = F(a);
      a = H(a);
      var e = F(a);
      a = H(a);
      var f = F(a);
      a = H(a);
      var g = F(a);
      a = H(a);
      var h = F(a);
      a = G(a);
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
        return g.k(f, l, m, r, s, w, K(arguments, 6));
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
    return!C.h(a, b);
  }
  var b = null, c = function() {
    function a(c, d, h) {
      var l = null;
      2 < arguments.length && (l = K(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      return fb(S.m(C, a, c, d));
    }
    a.w = 2;
    a.n = function(a) {
      var c = F(a);
      a = H(a);
      var d = F(a);
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
        return c.k(b, e, K(arguments, 2));
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
  return E(a) ? a : null;
}
function lg(a, b) {
  for (;;) {
    if (null == E(b)) {
      return!0;
    }
    var c;
    c = F(b);
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
    if (E(b)) {
      var c;
      c = F(b);
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
  if ("number" === typeof a && fb(isNaN(a)) && Infinity !== a && parseFloat(a) === parseInt(a, 10)) {
    return 0 === (a & 1);
  }
  throw Error("Argument must be an integer: " + u.g(a));
}
function og(a) {
  return function() {
    function b(b, c) {
      return fb(a.h ? a.h(b, c) : a.call(null, b, c));
    }
    function c(b) {
      return fb(a.g ? a.g(b) : a.call(null, b));
    }
    function d() {
      return fb(a.p ? a.p() : a.call(null));
    }
    var e = null, f = function() {
      function b(a, d, e) {
        var f = null;
        2 < arguments.length && (f = K(Array.prototype.slice.call(arguments, 2), 0));
        return c.call(this, a, d, f);
      }
      function c(b, d, e) {
        return fb(S.m(a, b, d, e));
      }
      b.w = 2;
      b.n = function(a) {
        var b = F(a);
        a = H(a);
        var d = F(a);
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
          return f.k(a, e, K(arguments, 2));
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
      0 < arguments.length && K(Array.prototype.slice.call(arguments, 0), 0);
      return a;
    }
    b.w = 0;
    b.n = function(b) {
      E(b);
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
          3 < arguments.length && (f = K(Array.prototype.slice.call(arguments, 3), 0));
          return h.call(this, a, b, c, f);
        }
        function h(d, l, r, m) {
          d = S.O(c, d, l, r, m);
          d = b.g ? b.g(d) : b.call(null, d);
          return a.g ? a.g(d) : a.call(null, d);
        }
        d.w = 3;
        d.n = function(a) {
          var b = F(a);
          a = H(a);
          var c = F(a);
          a = H(a);
          var d = F(a);
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
            return m.call(this, a);
          case 2:
            return l.call(this, a, b);
          case 3:
            return d.call(this, a, b, c);
          default:
            return w.k(a, b, c, K(arguments, 3));
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
          3 < arguments.length && (g = K(Array.prototype.slice.call(arguments, 3), 0));
          return d.call(this, a, b, e, g);
        }
        function d(c, g, h, l) {
          c = S.O(b, c, g, h, l);
          return a.g ? a.g(c) : a.call(null, c);
        }
        c.w = 3;
        c.n = function(a) {
          var b = F(a);
          a = H(a);
          var c = F(a);
          a = H(a);
          var e = F(a);
          a = G(a);
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
            return s.k(a, b, e, K(arguments, 3));
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
      3 < arguments.length && (r = K(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, d, e, r);
    }
    function b(a, c, d, e) {
      return function(a) {
        return function() {
          function b(a) {
            var d = null;
            0 < arguments.length && (d = K(Array.prototype.slice.call(arguments, 0), 0));
            return c.call(this, d);
          }
          function c(b) {
            b = S.h(F(a), b);
            for (var d = H(a);;) {
              if (d) {
                b = F(d).call(null, b), d = H(d);
              } else {
                return b;
              }
            }
          }
          b.w = 0;
          b.n = function(a) {
            a = E(a);
            return c(a);
          };
          b.k = c;
          return b;
        }();
      }(Df(cg.m(a, c, d, e)));
    }
    a.w = 3;
    a.n = function(a) {
      var c = F(a);
      a = H(a);
      var d = F(a);
      a = H(a);
      var e = F(a);
      a = G(a);
      return b(c, d, e, a);
    };
    a.k = b;
    return a;
  }(), c = function(c, f, g, h) {
    switch(arguments.length) {
      case 0:
        return We;
      case 1:
        return c;
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, g);
      default:
        return d.k(c, f, g, K(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.w = 3;
  c.n = d.n;
  c.p = function() {
    return We;
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
        0 < arguments.length && (b = K(Array.prototype.slice.call(arguments, 0), 0));
        return r.call(this, b);
      }
      function r(e) {
        return S.O(a, b, c, d, e);
      }
      e.w = 0;
      e.n = function(a) {
        a = E(a);
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
        0 < arguments.length && (b = K(Array.prototype.slice.call(arguments, 0), 0));
        return e.call(this, b);
      }
      function e(d) {
        return S.m(a, b, c, d);
      }
      d.w = 0;
      d.n = function(a) {
        a = E(a);
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
        0 < arguments.length && (b = K(Array.prototype.slice.call(arguments, 0), 0));
        return d.call(this, b);
      }
      function d(c) {
        return S.j(a, b, c);
      }
      c.w = 0;
      c.n = function(a) {
        a = E(a);
        return d(a);
      };
      c.k = d;
      return c;
    }();
  }
  var d = null, e = function() {
    function a(c, d, e, f, s) {
      var w = null;
      4 < arguments.length && (w = K(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, w);
    }
    function b(a, c, d, e, f) {
      return function() {
        function b(a) {
          var c = null;
          0 < arguments.length && (c = K(Array.prototype.slice.call(arguments, 0), 0));
          return g.call(this, c);
        }
        function g(b) {
          return S.O(a, c, d, e, bg.h(f, b));
        }
        b.w = 0;
        b.n = function(a) {
          a = E(a);
          return g(a);
        };
        b.k = g;
        return b;
      }();
    }
    a.w = 4;
    a.n = function(a) {
      var c = F(a);
      a = H(a);
      var d = F(a);
      a = H(a);
      var e = F(a);
      a = H(a);
      var f = F(a);
      a = G(a);
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
        return e.k(d, g, h, l, K(arguments, 4));
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
    return new If(null, function() {
      var g = E(f);
      if (g) {
        if (T(g)) {
          for (var h = x(g), l = N(h), m = Uf(l), r = 0;;) {
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
        return Sd(function() {
          var d = F(g);
          return a.h ? a.h(b, d) : a.call(null, b, d);
        }(), d(b + 1, G(g)));
      }
      return null;
    }, null, null);
  }(0, b);
}
var tg = function() {
  function a(a, b) {
    return new If(null, function() {
      var f = E(b);
      if (f) {
        if (T(f)) {
          for (var g = x(f), h = N(g), l = Uf(h), m = 0;;) {
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
          var b = F(f);
          return a.g ? a.g(b) : a.call(null, b);
        }();
        return null == h ? c.h(a, G(f)) : Sd(h, c.h(a, G(f)));
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
  this.Ze = c;
  this.aa = d;
  this.q = 6455296;
  this.G = 16386;
}
k = ug.prototype;
k.P = function() {
  return this[ka] || (this[ka] = ++la);
};
k.Rc = function(a, b, c) {
  for (var d = E(this.aa), e = null, f = 0, g = 0;;) {
    if (g < f) {
      a = e.F(null, g);
      var h = O.j(a, 0, null);
      a = O.j(a, 1, null);
      var l = b, m = c;
      a.m ? a.m(h, this, l, m) : a.call(null, h, this, l, m);
      g += 1;
    } else {
      if (a = E(d)) {
        d = a, T(d) ? (e = x(d), d = z(d), a = e, f = N(e), e = a) : (a = F(d), h = O.j(a, 0, null), a = O.j(a, 1, null), e = h, f = b, g = c, a.m ? a.m(e, this, f, g) : a.call(null, e, this, f, g), d = H(d), e = null, f = 0), g = 0;
      } else {
        return null;
      }
    }
  }
};
k.Qc = function(a, b, c) {
  this.aa = R.j(this.aa, b, c);
  return this;
};
k.Sc = function(a, b) {
  return this.aa = ie.h(this.aa, b);
};
k.I = function() {
  return this.C;
};
k.Ub = function() {
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
      1 < arguments.length && (h = K(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, h);
    }
    function b(a, c) {
      var d = ye(c) ? S.h(vg, c) : c, e = Q.h(d, wg), d = Q.h(d, $a);
      return new ug(a, d, e, null);
    }
    a.w = 1;
    a.n = function(a) {
      var c = F(a);
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
        return c.k(b, K(arguments, 1));
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
    var c = a.Ze;
    if (null != c && !q(c.g ? c.g(b) : c.call(null, b))) {
      throw Error("Assert failed: Validator rejected reference state\n" + u.g(function() {
        var a = Ef(new Cd(null, "validate", "validate", 1439230700, null), new Cd(null, "new-value", "new-value", -1567397401, null));
        return zg.g ? zg.g(a) : zg.call(null, a);
      }()));
    }
    c = a.state;
    a.state = b;
    null != a.aa && Cc(a, c, b);
    return b;
  }
  return Yc(a, b);
}
var Ag = function() {
  function a(a, b, c, d) {
    if (a instanceof ug) {
      var e = a.state;
      b = b.j ? b.j(e, c, d) : b.call(null, e, c, d);
      a = yg(a, b);
    } else {
      a = Zc.m(a, b, c, d);
    }
    return a;
  }
  function b(a, b, c) {
    if (a instanceof ug) {
      var d = a.state;
      b = b.h ? b.h(d, c) : b.call(null, d, c);
      a = yg(a, b);
    } else {
      a = Zc.j(a, b, c);
    }
    return a;
  }
  function c(a, b) {
    var c;
    a instanceof ug ? (c = a.state, c = b.g ? b.g(c) : b.call(null, c), c = yg(a, c)) : c = Zc.h(a, b);
    return c;
  }
  var d = null, e = function() {
    function a(c, d, e, f, s) {
      var w = null;
      4 < arguments.length && (w = K(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, w);
    }
    function b(a, c, d, e, f) {
      return a instanceof ug ? yg(a, S.O(c, a.state, d, e, f)) : Zc.O(a, c, d, e, f);
    }
    a.w = 4;
    a.n = function(a) {
      var c = F(a);
      a = H(a);
      var d = F(a);
      a = H(a);
      var e = F(a);
      a = H(a);
      var f = F(a);
      a = G(a);
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
        return e.k(d, g, h, l, K(arguments, 4));
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
      return new If(null, function() {
        var e = E(c);
        if (e) {
          if (T(e)) {
            for (var r = x(e), s = N(r), w = Uf(s), A = 0;;) {
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
            var c = F(e);
            return a.h ? a.h(b, c) : a.call(null, b, c);
          }();
          return null == s ? g(b + 1, G(e)) : Sd(s, g(b + 1, G(e)));
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
            var l = Ag.h(c, Jd), l = a.h ? a.h(l, h) : a.call(null, l, h);
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
    return new If(null, function() {
      var f = E(b), s = E(c), w = E(d);
      if (f && s && w) {
        var A = Sd, y;
        y = F(f);
        var B = F(s), D = F(w);
        y = a.j ? a.j(y, B, D) : a.call(null, y, B, D);
        f = A(y, e.m(a, G(f), G(s), G(w)));
      } else {
        f = null;
      }
      return f;
    }, null, null);
  }
  function b(a, b, c) {
    return new If(null, function() {
      var d = E(b), f = E(c);
      if (d && f) {
        var s = Sd, w;
        w = F(d);
        var A = F(f);
        w = a.h ? a.h(w, A) : a.call(null, w, A);
        d = s(w, e.j(a, G(d), G(f)));
      } else {
        d = null;
      }
      return d;
    }, null, null);
  }
  function c(a, b) {
    return new If(null, function() {
      var c = E(b);
      if (c) {
        if (T(c)) {
          for (var d = x(c), f = N(d), s = Uf(f), w = 0;;) {
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
        return Sd(function() {
          var b = F(c);
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
            2 < arguments.length && (f = K(Array.prototype.slice.call(arguments, 2), 0));
            return d.call(this, a, b, f);
          }
          function d(c, e, f) {
            e = S.j(a, e, f);
            return b.h ? b.h(c, e) : b.call(null, c, e);
          }
          c.w = 2;
          c.n = function(a) {
            var b = F(a);
            a = H(a);
            var c = F(a);
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
              return w.k(a, b, K(arguments, 2));
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
      4 < arguments.length && (A = K(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, A);
    }
    function b(a, c, d, f, g) {
      var h = function B(a) {
        return new If(null, function() {
          var b = e.h(E, a);
          return lg(We, b) ? Sd(e.h(F, b), B(e.h(G, b))) : null;
        }, null, null);
      };
      return e.h(function() {
        return function(b) {
          return S.h(a, b);
        };
      }(h), h(fe.k(g, f, K([d, c], 0))));
    }
    a.w = 4;
    a.n = function(a) {
      var c = F(a);
      a = H(a);
      var d = F(a);
      a = H(a);
      var e = F(a);
      a = H(a);
      var f = F(a);
      a = G(a);
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
        return f.k(e, h, l, m, K(arguments, 4));
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
}(), Pg = function() {
  function a(a, b) {
    return new If(null, function() {
      if (0 < a) {
        var f = E(b);
        return f ? Sd(F(f), c.h(a - 1, G(f))) : null;
      }
      return null;
    }, null, null);
  }
  function b(a) {
    return function(b) {
      return function(a) {
        return function() {
          function c(d, g) {
            var h = Yb(a), l = Ag.h(a, $e), h = 0 < h ? b.h ? b.h(d, g) : b.call(null, d, g) : d;
            return 0 < l ? h : new Kd(h);
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
}(), Qg = function() {
  function a(a, b) {
    return new If(null, function(c) {
      return function() {
        return c(a, b);
      };
    }(function(a, b) {
      for (;;) {
        var c = E(b);
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
            var h = Yb(a);
            Ag.h(a, $e);
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
}(), Rg = function() {
  function a(a, b) {
    return Pg.h(a, c.g(b));
  }
  function b(a) {
    return new If(null, function() {
      return Sd(a, c.g(a));
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
}(), Sg = function() {
  function a(a, b) {
    return Pg.h(a, c.g(b));
  }
  function b(a) {
    return new If(null, function() {
      return Sd(a.p ? a.p() : a.call(null), c.g(a));
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
  function a(a, c) {
    return new If(null, function() {
      var f = E(a), g = E(c);
      return f && g ? Sd(F(f), Sd(F(g), b.h(G(f), G(g)))) : null;
    }, null, null);
  }
  var b = null, c = function() {
    function a(b, d, h) {
      var l = null;
      2 < arguments.length && (l = K(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      return new If(null, function() {
        var c = Cg.h(E, fe.k(e, d, K([a], 0)));
        return lg(We, c) ? bg.h(Cg.h(F, c), S.h(b, Cg.h(G, c))) : null;
      }, null, null);
    }
    a.w = 2;
    a.n = function(a) {
      var b = F(a);
      a = H(a);
      var d = F(a);
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
        return c.k(b, e, K(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.w = 2;
  b.n = c.n;
  b.h = a;
  b.k = c.k;
  return b;
}();
function Ug(a, b) {
  return Qg.h(1, Tg.h(Rg.g(a), b));
}
var Wg = function() {
  function a(a) {
    return qg.h(Cg.g(a), Vg);
  }
  var b = null, c = function() {
    function a(c, d) {
      var h = null;
      1 < arguments.length && (h = K(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, h);
    }
    function b(a, c) {
      return S.h(bg, S.j(Cg, a, c));
    }
    a.w = 1;
    a.n = function(a) {
      var c = F(a);
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
        return c.k(b, K(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.w = 1;
  b.n = c.n;
  b.g = a;
  b.k = c.k;
  return b;
}(), Xg = function() {
  function a(a, b) {
    return new If(null, function() {
      var f = E(b);
      if (f) {
        if (T(f)) {
          for (var g = x(f), h = N(g), l = Uf(h), m = 0;;) {
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
        g = F(f);
        f = G(f);
        return q(a.g ? a.g(g) : a.call(null, g)) ? Sd(g, c.h(a, f)) : c.h(a, f);
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
}(), Yg = function() {
  function a(a, b) {
    return Xg.h(og(a), b);
  }
  function b(a) {
    return Xg.g(og(a));
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
function Zg(a, b, c) {
  return function e(c) {
    return new If(null, function() {
      return Sd(c, q(a.g ? a.g(c) : a.call(null, c)) ? Wg.k(e, K([b.g ? b.g(c) : b.call(null, c)], 0)) : null);
    }, null, null);
  }(c);
}
function $g(a) {
  return Xg.h(function(a) {
    return!re(a);
  }, G(Zg(re, E, a)));
}
var ah = function() {
  function a(a, b, c) {
    return a && (a.G & 4 || a.ae) ? Ud(eg(Xe.m(b, fg, Mc(a), c)), le(a)) : Xe.m(b, fe, a, c);
  }
  function b(a, b) {
    return null != a ? a && (a.G & 4 || a.ae) ? Ud(eg(Ue.j(Nc, Mc(a), b)), le(a)) : Ue.j(qb, a, b) : Ue.j(fe, Fd, b);
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
}(), bh = function() {
  function a(a, b, c, d) {
    return ah.h(ee, Cg.m(a, b, c, d));
  }
  function b(a, b, c) {
    return ah.h(ee, Cg.j(a, b, c));
  }
  function c(a, b) {
    return eg(Ue.j(function(b, c) {
      return fg.h(b, a.g ? a.g(c) : a.call(null, c));
    }, Mc(ee), b));
  }
  var d = null, e = function() {
    function a(c, d, e, f, s) {
      var w = null;
      4 < arguments.length && (w = K(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, w);
    }
    function b(a, c, d, e, f) {
      return ah.h(ee, S.k(Cg, a, c, d, e, K([f], 0)));
    }
    a.w = 4;
    a.n = function(a) {
      var c = F(a);
      a = H(a);
      var d = F(a);
      a = H(a);
      var e = F(a);
      a = H(a);
      var f = F(a);
      a = G(a);
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
        return e.k(d, g, h, l, K(arguments, 4));
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
}(), ch = function() {
  function a(a, b, c, h) {
    return new If(null, function() {
      var l = E(h);
      if (l) {
        var m = Pg.h(a, l);
        return a === N(m) ? Sd(m, d.m(a, b, c, Qg.h(b, l))) : qb(Fd, Pg.h(a, bg.h(m, c)));
      }
      return null;
    }, null, null);
  }
  function b(a, b, c) {
    return new If(null, function() {
      var h = E(c);
      if (h) {
        var l = Pg.h(a, h);
        return a === N(l) ? Sd(l, d.j(a, b, Qg.h(b, h))) : null;
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
}(), dh = function() {
  function a(a, b, c) {
    var g = xe;
    for (b = E(b);;) {
      if (b) {
        var h = a;
        if (h ? h.q & 256 || h.ud || (h.q ? 0 : gb(xb, h)) : gb(xb, h)) {
          a = Q.j(a, F(b), g);
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
}(), fh = function eh(b, c, d) {
  var e = O.j(c, 0, null);
  return(c = wf(c)) ? R.j(b, e, eh(Q.h(b, e), c, d)) : R.j(b, e, d);
}, gh = function() {
  function a(a, b, c, d, f, s) {
    var w = O.j(b, 0, null);
    return(b = wf(b)) ? R.j(a, w, e.ia(Q.h(a, w), b, c, d, f, s)) : R.j(a, w, function() {
      var b = Q.h(a, w);
      return c.m ? c.m(b, d, f, s) : c.call(null, b, d, f, s);
    }());
  }
  function b(a, b, c, d, f) {
    var s = O.j(b, 0, null);
    return(b = wf(b)) ? R.j(a, s, e.O(Q.h(a, s), b, c, d, f)) : R.j(a, s, function() {
      var b = Q.h(a, s);
      return c.j ? c.j(b, d, f) : c.call(null, b, d, f);
    }());
  }
  function c(a, b, c, d) {
    var f = O.j(b, 0, null);
    return(b = wf(b)) ? R.j(a, f, e.m(Q.h(a, f), b, c, d)) : R.j(a, f, function() {
      var b = Q.h(a, f);
      return c.h ? c.h(b, d) : c.call(null, b, d);
    }());
  }
  function d(a, b, c) {
    var d = O.j(b, 0, null);
    return(b = wf(b)) ? R.j(a, d, e.j(Q.h(a, d), b, c)) : R.j(a, d, function() {
      var b = Q.h(a, d);
      return c.g ? c.g(b) : c.call(null, b);
    }());
  }
  var e = null, f = function() {
    function a(c, d, e, f, g, A, y) {
      var B = null;
      6 < arguments.length && (B = K(Array.prototype.slice.call(arguments, 6), 0));
      return b.call(this, c, d, e, f, g, A, B);
    }
    function b(a, c, d, f, g, h, y) {
      var B = O.j(c, 0, null);
      return(c = wf(c)) ? R.j(a, B, S.k(e, Q.h(a, B), c, d, f, K([g, h, y], 0))) : R.j(a, B, S.k(d, Q.h(a, B), f, g, h, K([y], 0)));
    }
    a.w = 6;
    a.n = function(a) {
      var c = F(a);
      a = H(a);
      var d = F(a);
      a = H(a);
      var e = F(a);
      a = H(a);
      var f = F(a);
      a = H(a);
      var g = F(a);
      a = H(a);
      var y = F(a);
      a = G(a);
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
        return f.k(e, h, l, m, r, s, K(arguments, 6));
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
function hh(a, b) {
  this.V = a;
  this.l = b;
}
function ih(a) {
  return new hh(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function jh(a) {
  a = a.t;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function kh(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = ih(a);
    d.l[0] = c;
    c = d;
    b -= 5;
  }
}
var mh = function lh(b, c, d, e) {
  var f = new hh(d.V, jb(d.l)), g = b.t - 1 >>> c & 31;
  5 === c ? f.l[g] = e : (d = d.l[g], b = null != d ? lh(b, c - 5, d, e) : kh(null, c - 5, e), f.l[g] = b);
  return f;
};
function nh(a, b) {
  throw Error("No item " + u.g(a) + " in vector of length " + u.g(b));
}
function oh(a, b) {
  if (b >= jh(a)) {
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
function ph(a, b) {
  return 0 <= b && b < a.t ? oh(a, b) : nh(b, a.t);
}
var rh = function qh(b, c, d, e, f) {
  var g = new hh(d.V, jb(d.l));
  if (0 === c) {
    g.l[e & 31] = f;
  } else {
    var h = e >>> c & 31;
    b = qh(b, c - 5, d.l[h], e, f);
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
  return ad(this);
};
k.K = function(a, b) {
  return yb.j(this, b, null);
};
k.L = function(a, b, c) {
  return "number" === typeof b ? v.j(this, b, c) : c;
};
k.fc = function(a, b, c) {
  a = [0, c];
  for (c = 0;;) {
    if (c < this.t) {
      var d = oh(this, c), e = d.length;
      a: {
        for (var f = 0, g = a[1];;) {
          if (f < e) {
            var h = f + c, l = d[f], g = b.j ? b.j(g, h, l) : b.call(null, g, h, l);
            if (Ld(g)) {
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
      if (Ld(d)) {
        return b = d, L.g ? L.g(b) : L.call(null, b);
      }
      c += a[0];
    } else {
      return a[1];
    }
  }
};
k.F = function(a, b) {
  return ph(this, b)[b & 31];
};
k.oa = function(a, b, c) {
  return 0 <= b && b < this.t ? oh(this, b)[b & 31] : c;
};
k.Gb = function(a, b, c) {
  if (0 <= b && b < this.t) {
    return jh(this) <= b ? (a = jb(this.U), a[b & 31] = c, new U(this.C, this.t, this.shift, this.root, a, null)) : new U(this.C, this.t, this.shift, rh(this, this.shift, this.root, b, c), this.U, null);
  }
  if (b === this.t) {
    return qb(this, c);
  }
  throw Error("Index " + u.g(b) + " out of bounds  [0," + u.g(this.t) + "]");
};
k.I = function() {
  return this.C;
};
k.T = function() {
  return this.t;
};
k.gc = function() {
  return v.h(this, 0);
};
k.hc = function() {
  return v.h(this, 1);
};
k.xb = function() {
  return 0 < this.t ? v.h(this, this.t - 1) : null;
};
k.ic = function() {
  return 0 < this.t ? new Qd(this, this.t - 1, null) : null;
};
k.P = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Hd(this);
};
k.M = function(a, b) {
  return Rd(this, b);
};
k.Vb = function() {
  var a = this;
  return new sh(a.t, a.shift, function() {
    var b = a.root;
    return th.g ? th.g(b) : th.call(null, b);
  }(), function() {
    var b = a.U;
    return uh.g ? uh.g(b) : uh.call(null, b);
  }());
};
k.Y = function() {
  return Ud(ee, this.C);
};
k.ba = function(a, b) {
  return Md.h(this, b);
};
k.ca = function(a, b, c) {
  return Md.j(this, b, c);
};
k.va = function(a, b, c) {
  if ("number" === typeof b) {
    return Xb(this, b, c);
  }
  throw Error("Vector's key for assoc must be a number.");
};
k.Q = function() {
  if (0 === this.t) {
    return null;
  }
  if (32 >= this.t) {
    return new Ed(this.U, 0);
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
  return vh.m ? vh.m(this, a, 0, 0) : vh.call(null, this, a, 0, 0);
};
k.J = function(a, b) {
  return new U(b, this.t, this.shift, this.root, this.U, this.A);
};
k.S = function(a, b) {
  if (32 > this.t - jh(this)) {
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
  d ? (d = ih(null), d.l[0] = this.root, e = kh(null, this.shift, new hh(null, this.U)), d.l[1] = e) : d = mh(this, this.shift, this.root, new hh(null, this.U));
  return new U(this.C, this.t + 1, c, d, [b], null);
};
k.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.F(null, c);
      case 3:
        return this.oa(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.h = function(a, c) {
    return this.F(null, c);
  };
  a.j = function(a, c, d) {
    return this.oa(null, c, d);
  };
  return a;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(jb(b)));
};
k.g = function(a) {
  return this.F(null, a);
};
k.h = function(a, b) {
  return this.oa(null, a, b);
};
var V = new hh(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), ee = new U(null, 0, 5, V, [], 0);
function wh(a) {
  return Oc(Ue.j(Nc, Mc(ee), a));
}
var xh = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = K(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    if (a instanceof Ed && 0 === a.H) {
      a: {
        a = a.l;
        var b = a.length;
        if (32 > b) {
          a = new U(null, b, 5, V, a, null);
        } else {
          for (var e = 32, f = (new U(null, 32, 5, V, a.slice(0, 32), null)).Vb(null);;) {
            if (e < b) {
              var g = e + 1, f = fg.h(f, a[e]), e = g
            } else {
              a = Oc(f);
              break a;
            }
          }
          a = void 0;
        }
      }
    } else {
      a = wh(a);
    }
    return a;
  }
  a.w = 0;
  a.n = function(a) {
    a = E(a);
    return b(a);
  };
  a.k = b;
  return a;
}();
function yh(a, b, c, d, e, f) {
  this.Ia = a;
  this.tb = b;
  this.H = c;
  this.ha = d;
  this.C = e;
  this.A = f;
  this.q = 32375020;
  this.G = 1536;
}
k = yh.prototype;
k.toString = function() {
  return ad(this);
};
k.I = function() {
  return this.C;
};
k.ja = function() {
  if (this.ha + 1 < this.tb.length) {
    var a;
    a = this.Ia;
    var b = this.tb, c = this.H, d = this.ha + 1;
    a = vh.m ? vh.m(a, b, c, d) : vh.call(null, a, b, c, d);
    return null == a ? null : a;
  }
  return Sc(this);
};
k.P = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Hd(this);
};
k.M = function(a, b) {
  return Rd(this, b);
};
k.Y = function() {
  return Ud(ee, this.C);
};
k.ba = function(a, b) {
  var c = this;
  return Md.h(function() {
    var a = c.Ia, b = c.H + c.ha, f = N(c.Ia);
    return zh.j ? zh.j(a, b, f) : zh.call(null, a, b, f);
  }(), b);
};
k.ca = function(a, b, c) {
  var d = this;
  return Md.j(function() {
    var a = d.Ia, b = d.H + d.ha, c = N(d.Ia);
    return zh.j ? zh.j(a, b, c) : zh.call(null, a, b, c);
  }(), b, c);
};
k.$ = function() {
  return this.tb[this.ha];
};
k.ga = function() {
  if (this.ha + 1 < this.tb.length) {
    var a;
    a = this.Ia;
    var b = this.tb, c = this.H, d = this.ha + 1;
    a = vh.m ? vh.m(a, b, c, d) : vh.call(null, a, b, c, d);
    return null == a ? Fd : a;
  }
  return z(this);
};
k.Q = function() {
  return this;
};
k.Oc = function() {
  return Vf.h(this.tb, this.ha);
};
k.Pc = function() {
  var a = this.H + this.tb.length;
  if (a < nb(this.Ia)) {
    var b = this.Ia, c = oh(this.Ia, a);
    return vh.m ? vh.m(b, c, a, 0) : vh.call(null, b, c, a, 0);
  }
  return Fd;
};
k.J = function(a, b) {
  var c = this.Ia, d = this.tb, e = this.H, f = this.ha;
  return vh.O ? vh.O(c, d, e, f, b) : vh.call(null, c, d, e, f, b);
};
k.S = function(a, b) {
  return Sd(b, this);
};
k.Nc = function() {
  var a = this.H + this.tb.length;
  if (a < nb(this.Ia)) {
    var b = this.Ia, c = oh(this.Ia, a);
    return vh.m ? vh.m(b, c, a, 0) : vh.call(null, b, c, a, 0);
  }
  return null;
};
var vh = function() {
  function a(a, b, c, d, l) {
    return new yh(a, b, c, d, l, null);
  }
  function b(a, b, c, d) {
    return new yh(a, b, c, d, null, null);
  }
  function c(a, b, c) {
    return new yh(a, ph(a, b), b, c, null, null);
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
function Ah(a, b, c, d, e) {
  this.C = a;
  this.Db = b;
  this.start = c;
  this.end = d;
  this.A = e;
  this.q = 166617887;
  this.G = 8192;
}
k = Ah.prototype;
k.toString = function() {
  return ad(this);
};
k.K = function(a, b) {
  return yb.j(this, b, null);
};
k.L = function(a, b, c) {
  return "number" === typeof b ? v.j(this, b, c) : c;
};
k.F = function(a, b) {
  return 0 > b || this.end <= this.start + b ? nh(b, this.end - this.start) : v.h(this.Db, this.start + b);
};
k.oa = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : v.j(this.Db, this.start + b, c);
};
k.Gb = function(a, b, c) {
  var d = this.start + b;
  a = this.C;
  c = R.j(this.Db, d, c);
  b = this.start;
  var e = this.end, d = d + 1, d = e > d ? e : d;
  return Bh.O ? Bh.O(a, c, b, d, null) : Bh.call(null, a, c, b, d, null);
};
k.I = function() {
  return this.C;
};
k.T = function() {
  return this.end - this.start;
};
k.xb = function() {
  return v.h(this.Db, this.end - 1);
};
k.ic = function() {
  return this.start !== this.end ? new Qd(this, this.end - this.start - 1, null) : null;
};
k.P = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Hd(this);
};
k.M = function(a, b) {
  return Rd(this, b);
};
k.Y = function() {
  return Ud(ee, this.C);
};
k.ba = function(a, b) {
  return Md.h(this, b);
};
k.ca = function(a, b, c) {
  return Md.j(this, b, c);
};
k.va = function(a, b, c) {
  if ("number" === typeof b) {
    return Xb(this, b, c);
  }
  throw Error("Subvec's key for assoc must be a number.");
};
k.Q = function() {
  var a = this;
  return function(b) {
    return function d(e) {
      return e === a.end ? null : Sd(v.h(a.Db, e), new If(null, function() {
        return function() {
          return d(e + 1);
        };
      }(b), null, null));
    };
  }(this)(a.start);
};
k.J = function(a, b) {
  var c = this.Db, d = this.start, e = this.end, f = this.A;
  return Bh.O ? Bh.O(b, c, d, e, f) : Bh.call(null, b, c, d, e, f);
};
k.S = function(a, b) {
  var c = this.C, d = Xb(this.Db, this.end, b), e = this.start, f = this.end + 1;
  return Bh.O ? Bh.O(c, d, e, f, null) : Bh.call(null, c, d, e, f, null);
};
k.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.F(null, c);
      case 3:
        return this.oa(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.h = function(a, c) {
    return this.F(null, c);
  };
  a.j = function(a, c, d) {
    return this.oa(null, c, d);
  };
  return a;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(jb(b)));
};
k.g = function(a) {
  return this.F(null, a);
};
k.h = function(a, b) {
  return this.oa(null, a, b);
};
function Bh(a, b, c, d, e) {
  for (;;) {
    if (b instanceof Ah) {
      c = b.start + c, d = b.start + d, b = b.Db;
    } else {
      var f = N(b);
      if (0 > c || 0 > d || c > f || d > f) {
        throw Error("Index out of bounds");
      }
      return new Ah(a, b, c, d, e);
    }
  }
}
var zh = function() {
  function a(a, b, c) {
    return Bh(null, a, b, c, null);
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
function Ch(a, b) {
  return a === b.V ? b : new hh(a, jb(b.l));
}
function th(a) {
  return new hh({}, jb(a.l));
}
function uh(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  ve(a, 0, b, 0, a.length);
  return b;
}
var Eh = function Dh(b, c, d, e) {
  d = Ch(b.root.V, d);
  var f = b.t - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var g = d.l[f];
    b = null != g ? Dh(b, c - 5, g, e) : kh(b.root.V, c - 5, e);
  }
  d.l[f] = b;
  return d;
};
function sh(a, b, c, d) {
  this.t = a;
  this.shift = b;
  this.root = c;
  this.U = d;
  this.q = 275;
  this.G = 88;
}
k = sh.prototype;
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
  return this.call.apply(this, [this].concat(jb(b)));
};
k.g = function(a) {
  return this.K(null, a);
};
k.h = function(a, b) {
  return this.L(null, a, b);
};
k.K = function(a, b) {
  return yb.j(this, b, null);
};
k.L = function(a, b, c) {
  return "number" === typeof b ? v.j(this, b, c) : c;
};
k.F = function(a, b) {
  if (this.root.V) {
    return ph(this, b)[b & 31];
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
k.xd = function(a, b, c) {
  var d = this;
  if (d.root.V) {
    if (0 <= b && b < d.t) {
      return jh(this) <= b ? d.U[b & 31] = c : (a = function() {
        return function f(a, h) {
          var l = Ch(d.root.V, h);
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
      return Nc(this, c);
    }
    throw Error("Index " + u.g(b) + " out of bounds for TransientVector of length" + u.g(d.t));
  }
  throw Error("assoc! after persistent!");
};
k.kc = function(a, b, c) {
  if ("number" === typeof b) {
    return Qc(this, b, c);
  }
  throw Error("TransientVector's key for assoc! must be a number.");
};
k.Eb = function(a, b) {
  if (this.root.V) {
    if (32 > this.t - jh(this)) {
      this.U[this.t & 31] = b;
    } else {
      var c = new hh(this.root.V, this.U), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.U = d;
      if (this.t >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = kh(this.root.V, this.shift, c);
        this.root = new hh(this.root.V, d);
        this.shift = e;
      } else {
        this.root = Eh(this, this.shift, this.root, c);
      }
    }
    this.t += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
k.Fb = function() {
  if (this.root.V) {
    this.root.V = null;
    var a = this.t - jh(this), b = Array(a);
    ve(this.U, 0, b, 0, a);
    return new U(null, this.t, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
function Fh(a, b, c, d) {
  this.C = a;
  this.Ma = b;
  this.Bb = c;
  this.A = d;
  this.G = 0;
  this.q = 31850572;
}
k = Fh.prototype;
k.toString = function() {
  return ad(this);
};
k.I = function() {
  return this.C;
};
k.P = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Hd(this);
};
k.M = function(a, b) {
  return Rd(this, b);
};
k.Y = function() {
  return Ud(Fd, this.C);
};
k.$ = function() {
  return F(this.Ma);
};
k.ga = function() {
  var a = H(this.Ma);
  return a ? new Fh(this.C, a, this.Bb, null) : null == this.Bb ? ob(this) : new Fh(this.C, this.Bb, null, null);
};
k.Q = function() {
  return this;
};
k.J = function(a, b) {
  return new Fh(b, this.Ma, this.Bb, this.A);
};
k.S = function(a, b) {
  return Sd(b, this);
};
function Gh(a, b, c, d, e) {
  this.C = a;
  this.count = b;
  this.Ma = c;
  this.Bb = d;
  this.A = e;
  this.q = 31858766;
  this.G = 8192;
}
k = Gh.prototype;
k.toString = function() {
  return ad(this);
};
k.I = function() {
  return this.C;
};
k.T = function() {
  return this.count;
};
k.xb = function() {
  return F(this.Ma);
};
k.P = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Hd(this);
};
k.M = function(a, b) {
  return Rd(this, b);
};
k.Y = function() {
  return Vh;
};
k.$ = function() {
  return F(this.Ma);
};
k.ga = function() {
  return G(E(this));
};
k.Q = function() {
  var a = E(this.Bb), b = this.Ma;
  return q(q(b) ? b : a) ? new Fh(null, this.Ma, E(a), null) : null;
};
k.J = function(a, b) {
  return new Gh(b, this.count, this.Ma, this.Bb, this.A);
};
k.S = function(a, b) {
  var c;
  q(this.Ma) ? (c = this.Bb, c = new Gh(this.C, this.count + 1, this.Ma, fe.h(q(c) ? c : ee, b), null)) : c = new Gh(this.C, this.count + 1, fe.h(this.Ma, b), ee, null);
  return c;
};
var Vh = new Gh(null, 0, null, ee, 0);
function Wh() {
  this.G = 0;
  this.q = 2097152;
}
Wh.prototype.M = function() {
  return!1;
};
var Xh = new Wh;
function Yh(a, b) {
  return Me(se(b) ? N(a) === N(b) ? lg(We, Cg.h(function(a) {
    return C.h(Q.j(b, F(a), Xh), ce(a));
  }, a)) : null : null);
}
function Zh(a) {
  this.Z = a;
}
function $h(a) {
  return new Zh(E(a));
}
function ai(a, b) {
  var c = a.l;
  if (b instanceof W) {
    a: {
      for (var d = c.length, e = b.ea, f = 0;;) {
        if (d <= f) {
          c = -1;
          break a;
        }
        var g = c[f];
        if (g instanceof W && e === g.ea) {
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
      if (b instanceof Cd) {
        a: {
          d = c.length;
          e = b.Cb;
          for (f = 0;;) {
            if (d <= f) {
              c = -1;
              break a;
            }
            g = c[f];
            if (g instanceof Cd && e === g.Cb) {
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
              if (C.h(b, c[e])) {
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
function bi(a, b, c) {
  this.l = a;
  this.H = b;
  this.na = c;
  this.G = 0;
  this.q = 32374990;
}
k = bi.prototype;
k.toString = function() {
  return ad(this);
};
k.I = function() {
  return this.na;
};
k.ja = function() {
  return this.H < this.l.length - 2 ? new bi(this.l, this.H + 2, this.na) : null;
};
k.T = function() {
  return(this.l.length - this.H) / 2;
};
k.P = function() {
  return Hd(this);
};
k.M = function(a, b) {
  return Rd(this, b);
};
k.Y = function() {
  return Ud(Fd, this.na);
};
k.ba = function(a, b) {
  return be.h(b, this);
};
k.ca = function(a, b, c) {
  return be.j(b, c, this);
};
k.$ = function() {
  return new U(null, 2, 5, V, [this.l[this.H], this.l[this.H + 1]], null);
};
k.ga = function() {
  return this.H < this.l.length - 2 ? new bi(this.l, this.H + 2, this.na) : Fd;
};
k.Q = function() {
  return this;
};
k.J = function(a, b) {
  return new bi(this.l, this.H, b);
};
k.S = function(a, b) {
  return Sd(b, this);
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
  return ad(this);
};
k.values = function() {
  return $h(ci.g ? ci.g(this) : ci.call(null, this));
};
k.forEach = function(a) {
  for (var b = E(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.F(null, e), g = O.j(f, 0, null), f = O.j(f, 1, null);
      a.h ? a.h(f, g) : a.call(null, f, g);
      e += 1;
    } else {
      if (b = E(b)) {
        T(b) ? (c = x(b), b = z(b), g = c, d = N(c), c = g) : (c = F(b), g = O.j(c, 0, null), c = f = O.j(c, 1, null), a.h ? a.h(c, g) : a.call(null, c, g), b = H(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
k.K = function(a, b) {
  return yb.j(this, b, null);
};
k.L = function(a, b, c) {
  a = ai(this, b);
  return-1 === a ? c : this.l[a + 1];
};
k.fc = function(a, b, c) {
  a = this.l.length;
  for (var d = 0;;) {
    if (d < a) {
      var e = this.l[d], f = this.l[d + 1];
      c = b.j ? b.j(c, e, f) : b.call(null, c, e, f);
      if (Ld(c)) {
        return b = c, L.g ? L.g(b) : L.call(null, b);
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
  return null != a ? a : this.A = a = Id(this);
};
k.M = function(a, b) {
  return Yh(this, b);
};
k.Vb = function() {
  return new di({}, this.l.length, jb(this.l));
};
k.Y = function() {
  return fc(ei, this.C);
};
k.ba = function(a, b) {
  return be.h(b, this);
};
k.ca = function(a, b, c) {
  return be.j(b, c, this);
};
k.Sa = function(a, b) {
  if (0 <= ai(this, b)) {
    var c = this.l.length, d = c - 2;
    if (0 === d) {
      return ob(this);
    }
    for (var d = Array(d), e = 0, f = 0;;) {
      if (e >= c) {
        return new p(this.C, this.t - 1, d, null);
      }
      C.h(b, this.l[e]) || (d[f] = this.l[e], d[f + 1] = this.l[e + 1], f += 2);
      e += 2;
    }
  } else {
    return this;
  }
};
k.va = function(a, b, c) {
  a = ai(this, b);
  if (-1 === a) {
    if (this.t < fi) {
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
    return fc(Bb(ah.h(gi, this), b, c), this.C);
  }
  if (c === this.l[a + 1]) {
    return this;
  }
  b = jb(this.l);
  b[a + 1] = c;
  return new p(this.C, this.t, b, null);
};
k.uc = function(a, b) {
  return-1 !== ai(this, b);
};
k.Q = function() {
  var a = this.l;
  return 0 <= a.length - 2 ? new bi(a, 0, null) : null;
};
k.J = function(a, b) {
  return new p(b, this.t, this.l, this.A);
};
k.S = function(a, b) {
  if (te(b)) {
    return Bb(this, v.h(b, 0), v.h(b, 1));
  }
  for (var c = this, d = E(b);;) {
    if (null == d) {
      return c;
    }
    var e = F(d);
    if (te(e)) {
      c = Bb(c, v.h(e, 0), v.h(e, 1)), d = H(d);
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
  return this.call.apply(this, [this].concat(jb(b)));
};
k.g = function(a) {
  return this.K(null, a);
};
k.h = function(a, b) {
  return this.L(null, a, b);
};
var ei = new p(null, 0, [], null), fi = 8;
function hi(a) {
  for (var b = a.length, c = 0, d = Mc(ei);;) {
    if (c < b) {
      var e = c + 2, d = Pc(d, a[c], a[c + 1]), c = e
    } else {
      return Oc(d);
    }
  }
}
function di(a, b, c) {
  this.Zb = a;
  this.cc = b;
  this.l = c;
  this.G = 56;
  this.q = 258;
}
k = di.prototype;
k.kc = function(a, b, c) {
  var d = this;
  if (q(d.Zb)) {
    a = ai(this, b);
    if (-1 === a) {
      return d.cc + 2 <= 2 * fi ? (d.cc += 2, d.l.push(b), d.l.push(c), this) : gg.j(function() {
        var a = d.cc, b = d.l;
        return ii.h ? ii.h(a, b) : ii.call(null, a, b);
      }(), b, c);
    }
    c !== d.l[a + 1] && (d.l[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
k.Eb = function(a, b) {
  if (q(this.Zb)) {
    if (b ? b.q & 2048 || b.de || (b.q ? 0 : gb(Ib, b)) : gb(Ib, b)) {
      return Pc(this, zf.g ? zf.g(b) : zf.call(null, b), Af.g ? Af.g(b) : Af.call(null, b));
    }
    for (var c = E(b), d = this;;) {
      var e = F(c);
      if (q(e)) {
        var f = e, c = H(c), d = Pc(d, function() {
          var a = f;
          return zf.g ? zf.g(a) : zf.call(null, a);
        }(), function() {
          var a = f;
          return Af.g ? Af.g(a) : Af.call(null, a);
        }())
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent!");
  }
};
k.Fb = function() {
  if (q(this.Zb)) {
    return this.Zb = !1, new p(null, sf(this.cc, 2), this.l, null);
  }
  throw Error("persistent! called twice");
};
k.K = function(a, b) {
  return yb.j(this, b, null);
};
k.L = function(a, b, c) {
  if (q(this.Zb)) {
    return a = ai(this, b), -1 === a ? c : this.l[a + 1];
  }
  throw Error("lookup after persistent!");
};
k.T = function() {
  if (q(this.Zb)) {
    return sf(this.cc, 2);
  }
  throw Error("count after persistent!");
};
function ii(a, b) {
  for (var c = Mc(gi), d = 0;;) {
    if (d < a) {
      c = gg.j(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function ji() {
  this.B = !1;
}
function ki(a, b) {
  return a === b ? !0 : X(a, b) ? !0 : C.h(a, b);
}
var li = function() {
  function a(a, b, c, g, h) {
    a = jb(a);
    a[b] = c;
    a[g] = h;
    return a;
  }
  function b(a, b, c) {
    a = jb(a);
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
function mi(a, b) {
  var c = Array(a.length - 2);
  ve(a, 0, c, 0, 2 * b);
  ve(a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
  return c;
}
var ni = function() {
  function a(a, b, c, g, h, l) {
    a = a.$b(b);
    a.l[c] = g;
    a.l[h] = l;
    return a;
  }
  function b(a, b, c, g) {
    a = a.$b(b);
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
function oi(a, b, c) {
  for (var d = a.length, e = 0, f = c;;) {
    if (e < d) {
      c = a[e];
      if (null != c) {
        var g = a[e + 1];
        c = b.j ? b.j(f, c, g) : b.call(null, f, c, g);
      } else {
        c = a[e + 1], c = null != c ? c.Mb(b, f) : f;
      }
      if (Ld(c)) {
        return a = c, L.g ? L.g(a) : L.call(null, a);
      }
      e += 2;
      f = c;
    } else {
      return f;
    }
  }
}
function pi(a, b, c) {
  this.V = a;
  this.X = b;
  this.l = c;
}
k = pi.prototype;
k.$b = function(a) {
  if (a === this.V) {
    return this;
  }
  var b = vf(this.X), c = Array(0 > b ? 4 : 2 * (b + 1));
  ve(this.l, 0, c, 0, 2 * b);
  return new pi(a, this.X, c);
};
k.lc = function() {
  var a = this.l;
  return qi.g ? qi.g(a) : qi.call(null, a);
};
k.Mb = function(a, b) {
  return oi(this.l, a, b);
};
k.yb = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.X & e)) {
    return d;
  }
  var f = vf(this.X & e - 1), e = this.l[2 * f], f = this.l[2 * f + 1];
  return null == e ? f.yb(a + 5, b, c, d) : ki(c, e) ? f : d;
};
k.Xa = function(a, b, c, d, e, f) {
  var g = 1 << (c >>> b & 31), h = vf(this.X & g - 1);
  if (0 === (this.X & g)) {
    var l = vf(this.X);
    if (2 * l < this.l.length) {
      var m = this.$b(a), r = m.l;
      f.B = !0;
      we(r, 2 * h, r, 2 * (h + 1), 2 * (l - h));
      r[2 * h] = d;
      r[2 * h + 1] = e;
      m.X |= g;
      return m;
    }
    if (16 <= l) {
      g = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      g[c >>> b & 31] = ri.Xa(a, b + 5, c, d, e, f);
      for (m = h = 0;;) {
        if (32 > h) {
          0 !== (this.X >>> h & 1) && (g[h] = null != this.l[m] ? ri.Xa(a, b + 5, pd(this.l[m]), this.l[m], this.l[m + 1], f) : this.l[m + 1], m += 2), h += 1;
        } else {
          break;
        }
      }
      return new si(a, l + 1, g);
    }
    r = Array(2 * (l + 4));
    ve(this.l, 0, r, 0, 2 * h);
    r[2 * h] = d;
    r[2 * h + 1] = e;
    ve(this.l, 2 * h, r, 2 * (h + 1), 2 * (l - h));
    f.B = !0;
    m = this.$b(a);
    m.l = r;
    m.X |= g;
    return m;
  }
  var s = this.l[2 * h], w = this.l[2 * h + 1];
  if (null == s) {
    return l = w.Xa(a, b + 5, c, d, e, f), l === w ? this : ni.m(this, a, 2 * h + 1, l);
  }
  if (ki(d, s)) {
    return e === w ? this : ni.m(this, a, 2 * h + 1, e);
  }
  f.B = !0;
  return ni.ia(this, a, 2 * h, null, 2 * h + 1, function() {
    var f = b + 5;
    return ti.Aa ? ti.Aa(a, f, s, w, c, d, e) : ti.call(null, a, f, s, w, c, d, e);
  }());
};
k.Wa = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), g = vf(this.X & f - 1);
  if (0 === (this.X & f)) {
    var h = vf(this.X);
    if (16 <= h) {
      f = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      f[b >>> a & 31] = ri.Wa(a + 5, b, c, d, e);
      for (var l = g = 0;;) {
        if (32 > g) {
          0 !== (this.X >>> g & 1) && (f[g] = null != this.l[l] ? ri.Wa(a + 5, pd(this.l[l]), this.l[l], this.l[l + 1], e) : this.l[l + 1], l += 2), g += 1;
        } else {
          break;
        }
      }
      return new si(null, h + 1, f);
    }
    l = Array(2 * (h + 1));
    ve(this.l, 0, l, 0, 2 * g);
    l[2 * g] = c;
    l[2 * g + 1] = d;
    ve(this.l, 2 * g, l, 2 * (g + 1), 2 * (h - g));
    e.B = !0;
    return new pi(null, this.X | f, l);
  }
  var m = this.l[2 * g], r = this.l[2 * g + 1];
  if (null == m) {
    return h = r.Wa(a + 5, b, c, d, e), h === r ? this : new pi(null, this.X, li.j(this.l, 2 * g + 1, h));
  }
  if (ki(c, m)) {
    return d === r ? this : new pi(null, this.X, li.j(this.l, 2 * g + 1, d));
  }
  e.B = !0;
  return new pi(null, this.X, li.O(this.l, 2 * g, null, 2 * g + 1, function() {
    var e = a + 5;
    return ti.ia ? ti.ia(e, m, r, b, c, d) : ti.call(null, e, m, r, b, c, d);
  }()));
};
k.mc = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if (0 === (this.X & d)) {
    return this;
  }
  var e = vf(this.X & d - 1), f = this.l[2 * e], g = this.l[2 * e + 1];
  return null == f ? (a = g.mc(a + 5, b, c), a === g ? this : null != a ? new pi(null, this.X, li.j(this.l, 2 * e + 1, a)) : this.X === d ? null : new pi(null, this.X ^ d, mi(this.l, e))) : ki(c, f) ? new pi(null, this.X ^ d, mi(this.l, e)) : this;
};
var ri = new pi(null, 0, []);
function si(a, b, c) {
  this.V = a;
  this.t = b;
  this.l = c;
}
k = si.prototype;
k.$b = function(a) {
  return a === this.V ? this : new si(a, this.t, jb(this.l));
};
k.lc = function() {
  var a = this.l;
  return ui.g ? ui.g(a) : ui.call(null, a);
};
k.Mb = function(a, b) {
  for (var c = this.l.length, d = 0, e = b;;) {
    if (d < c) {
      var f = this.l[d];
      if (null != f && (e = f.Mb(a, e), Ld(e))) {
        return c = e, L.g ? L.g(c) : L.call(null, c);
      }
      d += 1;
    } else {
      return e;
    }
  }
};
k.yb = function(a, b, c, d) {
  var e = this.l[b >>> a & 31];
  return null != e ? e.yb(a + 5, b, c, d) : d;
};
k.Xa = function(a, b, c, d, e, f) {
  var g = c >>> b & 31, h = this.l[g];
  if (null == h) {
    return a = ni.m(this, a, g, ri.Xa(a, b + 5, c, d, e, f)), a.t += 1, a;
  }
  b = h.Xa(a, b + 5, c, d, e, f);
  return b === h ? this : ni.m(this, a, g, b);
};
k.Wa = function(a, b, c, d, e) {
  var f = b >>> a & 31, g = this.l[f];
  if (null == g) {
    return new si(null, this.t + 1, li.j(this.l, f, ri.Wa(a + 5, b, c, d, e)));
  }
  a = g.Wa(a + 5, b, c, d, e);
  return a === g ? this : new si(null, this.t, li.j(this.l, f, a));
};
k.mc = function(a, b, c) {
  var d = b >>> a & 31, e = this.l[d];
  if (null != e) {
    a = e.mc(a + 5, b, c);
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
                d = new pi(null, g, b);
                break a;
              }
            }
            d = void 0;
          }
        } else {
          d = new si(null, this.t - 1, li.j(this.l, d, a));
        }
      } else {
        d = new si(null, this.t, li.j(this.l, d, a));
      }
    }
    return d;
  }
  return this;
};
function vi(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (ki(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return-1;
    }
  }
}
function wi(a, b, c, d) {
  this.V = a;
  this.sb = b;
  this.t = c;
  this.l = d;
}
k = wi.prototype;
k.$b = function(a) {
  if (a === this.V) {
    return this;
  }
  var b = Array(2 * (this.t + 1));
  ve(this.l, 0, b, 0, 2 * this.t);
  return new wi(a, this.sb, this.t, b);
};
k.lc = function() {
  var a = this.l;
  return qi.g ? qi.g(a) : qi.call(null, a);
};
k.Mb = function(a, b) {
  return oi(this.l, a, b);
};
k.yb = function(a, b, c, d) {
  a = vi(this.l, this.t, c);
  return 0 > a ? d : ki(c, this.l[a]) ? this.l[a + 1] : d;
};
k.Xa = function(a, b, c, d, e, f) {
  if (c === this.sb) {
    b = vi(this.l, this.t, d);
    if (-1 === b) {
      if (this.l.length > 2 * this.t) {
        return a = ni.ia(this, a, 2 * this.t, d, 2 * this.t + 1, e), f.B = !0, a.t += 1, a;
      }
      c = this.l.length;
      b = Array(c + 2);
      ve(this.l, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      f.B = !0;
      f = this.t + 1;
      a === this.V ? (this.l = b, this.t = f, a = this) : a = new wi(this.V, this.sb, f, b);
      return a;
    }
    return this.l[b + 1] === e ? this : ni.m(this, a, b + 1, e);
  }
  return(new pi(a, 1 << (this.sb >>> b & 31), [null, this, null, null])).Xa(a, b, c, d, e, f);
};
k.Wa = function(a, b, c, d, e) {
  return b === this.sb ? (a = vi(this.l, this.t, c), -1 === a ? (a = 2 * this.t, b = Array(a + 2), ve(this.l, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.B = !0, new wi(null, this.sb, this.t + 1, b)) : C.h(this.l[a], d) ? this : new wi(null, this.sb, this.t, li.j(this.l, a + 1, d))) : (new pi(null, 1 << (this.sb >>> a & 31), [null, this])).Wa(a, b, c, d, e);
};
k.mc = function(a, b, c) {
  a = vi(this.l, this.t, c);
  return-1 === a ? this : 1 === this.t ? null : new wi(null, this.sb, this.t - 1, mi(this.l, sf(a, 2)));
};
var ti = function() {
  function a(a, b, c, g, h, l, m) {
    var r = pd(c);
    if (r === h) {
      return new wi(null, r, 2, [c, g, l, m]);
    }
    var s = new ji;
    return ri.Xa(a, b, r, c, g, s).Xa(a, b, h, l, m, s);
  }
  function b(a, b, c, g, h, l) {
    var m = pd(b);
    if (m === g) {
      return new wi(null, m, 2, [b, c, h, l]);
    }
    var r = new ji;
    return ri.Wa(a, m, b, c, r).Wa(a, g, h, l, r);
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
function xi(a, b, c, d, e) {
  this.C = a;
  this.Ab = b;
  this.H = c;
  this.Z = d;
  this.A = e;
  this.G = 0;
  this.q = 32374860;
}
k = xi.prototype;
k.toString = function() {
  return ad(this);
};
k.I = function() {
  return this.C;
};
k.P = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Hd(this);
};
k.M = function(a, b) {
  return Rd(this, b);
};
k.Y = function() {
  return Ud(Fd, this.C);
};
k.ba = function(a, b) {
  return be.h(b, this);
};
k.ca = function(a, b, c) {
  return be.j(b, c, this);
};
k.$ = function() {
  return null == this.Z ? new U(null, 2, 5, V, [this.Ab[this.H], this.Ab[this.H + 1]], null) : F(this.Z);
};
k.ga = function() {
  if (null == this.Z) {
    var a = this.Ab, b = this.H + 2;
    return qi.j ? qi.j(a, b, null) : qi.call(null, a, b, null);
  }
  var a = this.Ab, b = this.H, c = H(this.Z);
  return qi.j ? qi.j(a, b, c) : qi.call(null, a, b, c);
};
k.Q = function() {
  return this;
};
k.J = function(a, b) {
  return new xi(b, this.Ab, this.H, this.Z, this.A);
};
k.S = function(a, b) {
  return Sd(b, this);
};
var qi = function() {
  function a(a, b, c) {
    if (null == c) {
      for (c = a.length;;) {
        if (b < c) {
          if (null != a[b]) {
            return new xi(null, a, b, null, null);
          }
          var g = a[b + 1];
          if (q(g) && (g = g.lc(), q(g))) {
            return new xi(null, a, b + 2, g, null);
          }
          b += 2;
        } else {
          return null;
        }
      }
    } else {
      return new xi(null, a, b, c, null);
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
function yi(a, b, c, d, e) {
  this.C = a;
  this.Ab = b;
  this.H = c;
  this.Z = d;
  this.A = e;
  this.G = 0;
  this.q = 32374860;
}
k = yi.prototype;
k.toString = function() {
  return ad(this);
};
k.I = function() {
  return this.C;
};
k.P = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Hd(this);
};
k.M = function(a, b) {
  return Rd(this, b);
};
k.Y = function() {
  return Ud(Fd, this.C);
};
k.ba = function(a, b) {
  return be.h(b, this);
};
k.ca = function(a, b, c) {
  return be.j(b, c, this);
};
k.$ = function() {
  return F(this.Z);
};
k.ga = function() {
  var a = this.Ab, b = this.H, c = H(this.Z);
  return ui.m ? ui.m(null, a, b, c) : ui.call(null, null, a, b, c);
};
k.Q = function() {
  return this;
};
k.J = function(a, b) {
  return new yi(b, this.Ab, this.H, this.Z, this.A);
};
k.S = function(a, b) {
  return Sd(b, this);
};
var ui = function() {
  function a(a, b, c, g) {
    if (null == g) {
      for (g = b.length;;) {
        if (c < g) {
          var h = b[c];
          if (q(h) && (h = h.lc(), q(h))) {
            return new yi(a, b, c + 1, h, null);
          }
          c += 1;
        } else {
          return null;
        }
      }
    } else {
      return new yi(a, b, c, g, null);
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
function zi(a, b, c, d, e, f) {
  this.C = a;
  this.t = b;
  this.root = c;
  this.ka = d;
  this.Da = e;
  this.A = f;
  this.q = 16123663;
  this.G = 8196;
}
k = zi.prototype;
k.toString = function() {
  return ad(this);
};
k.values = function() {
  return $h(ci.g ? ci.g(this) : ci.call(null, this));
};
k.forEach = function(a) {
  for (var b = E(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.F(null, e), g = O.j(f, 0, null), f = O.j(f, 1, null);
      a.h ? a.h(f, g) : a.call(null, f, g);
      e += 1;
    } else {
      if (b = E(b)) {
        T(b) ? (c = x(b), b = z(b), g = c, d = N(c), c = g) : (c = F(b), g = O.j(c, 0, null), c = f = O.j(c, 1, null), a.h ? a.h(c, g) : a.call(null, c, g), b = H(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
k.K = function(a, b) {
  return yb.j(this, b, null);
};
k.L = function(a, b, c) {
  return null == b ? this.ka ? this.Da : c : null == this.root ? c : this.root.yb(0, pd(b), b, c);
};
k.fc = function(a, b, c) {
  this.ka && (a = this.Da, c = b.j ? b.j(c, null, a) : b.call(null, c, null, a));
  return Ld(c) ? L.g ? L.g(c) : L.call(null, c) : null != this.root ? this.root.Mb(b, c) : c;
};
k.I = function() {
  return this.C;
};
k.T = function() {
  return this.t;
};
k.P = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Id(this);
};
k.M = function(a, b) {
  return Yh(this, b);
};
k.Vb = function() {
  return new Ai({}, this.root, this.t, this.ka, this.Da);
};
k.Y = function() {
  return fc(gi, this.C);
};
k.Sa = function(a, b) {
  if (null == b) {
    return this.ka ? new zi(this.C, this.t - 1, this.root, !1, null, null) : this;
  }
  if (null == this.root) {
    return this;
  }
  var c = this.root.mc(0, pd(b), b);
  return c === this.root ? this : new zi(this.C, this.t - 1, c, this.ka, this.Da, null);
};
k.va = function(a, b, c) {
  if (null == b) {
    return this.ka && c === this.Da ? this : new zi(this.C, this.ka ? this.t : this.t + 1, this.root, !0, c, null);
  }
  a = new ji;
  b = (null == this.root ? ri : this.root).Wa(0, pd(b), b, c, a);
  return b === this.root ? this : new zi(this.C, a.B ? this.t + 1 : this.t, b, this.ka, this.Da, null);
};
k.uc = function(a, b) {
  return null == b ? this.ka : null == this.root ? !1 : this.root.yb(0, pd(b), b, xe) !== xe;
};
k.Q = function() {
  if (0 < this.t) {
    var a = null != this.root ? this.root.lc() : null;
    return this.ka ? Sd(new U(null, 2, 5, V, [null, this.Da], null), a) : a;
  }
  return null;
};
k.J = function(a, b) {
  return new zi(b, this.t, this.root, this.ka, this.Da, this.A);
};
k.S = function(a, b) {
  if (te(b)) {
    return Bb(this, v.h(b, 0), v.h(b, 1));
  }
  for (var c = this, d = E(b);;) {
    if (null == d) {
      return c;
    }
    var e = F(d);
    if (te(e)) {
      c = Bb(c, v.h(e, 0), v.h(e, 1)), d = H(d);
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
  return this.call.apply(this, [this].concat(jb(b)));
};
k.g = function(a) {
  return this.K(null, a);
};
k.h = function(a, b) {
  return this.L(null, a, b);
};
var gi = new zi(null, 0, null, !1, null, 0);
function he(a, b) {
  for (var c = a.length, d = 0, e = Mc(gi);;) {
    if (d < c) {
      var f = d + 1, e = e.kc(null, a[d], b[d]), d = f
    } else {
      return Oc(e);
    }
  }
}
function Ai(a, b, c, d, e) {
  this.V = a;
  this.root = b;
  this.count = c;
  this.ka = d;
  this.Da = e;
  this.G = 56;
  this.q = 258;
}
k = Ai.prototype;
k.kc = function(a, b, c) {
  return Bi(this, b, c);
};
k.Eb = function(a, b) {
  return Ci(this, b);
};
k.Fb = function() {
  var a;
  if (this.V) {
    this.V = null, a = new zi(null, this.count, this.root, this.ka, this.Da, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
k.K = function(a, b) {
  return null == b ? this.ka ? this.Da : null : null == this.root ? null : this.root.yb(0, pd(b), b);
};
k.L = function(a, b, c) {
  return null == b ? this.ka ? this.Da : c : null == this.root ? c : this.root.yb(0, pd(b), b, c);
};
k.T = function() {
  if (this.V) {
    return this.count;
  }
  throw Error("count after persistent!");
};
function Ci(a, b) {
  if (a.V) {
    if (b ? b.q & 2048 || b.de || (b.q ? 0 : gb(Ib, b)) : gb(Ib, b)) {
      return Bi(a, zf.g ? zf.g(b) : zf.call(null, b), Af.g ? Af.g(b) : Af.call(null, b));
    }
    for (var c = E(b), d = a;;) {
      var e = F(c);
      if (q(e)) {
        var f = e, c = H(c), d = Bi(d, function() {
          var a = f;
          return zf.g ? zf.g(a) : zf.call(null, a);
        }(), function() {
          var a = f;
          return Af.g ? Af.g(a) : Af.call(null, a);
        }())
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent");
  }
}
function Bi(a, b, c) {
  if (a.V) {
    if (null == b) {
      a.Da !== c && (a.Da = c), a.ka || (a.count += 1, a.ka = !0);
    } else {
      var d = new ji;
      b = (null == a.root ? ri : a.root).Xa(a.V, 0, pd(b), b, c, d);
      b !== a.root && (a.root = b);
      d.B && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
function Di(a, b, c) {
  for (var d = b;;) {
    if (null != a) {
      b = c ? a.left : a.right, d = fe.h(d, a), a = b;
    } else {
      return d;
    }
  }
}
function Ei(a, b, c, d, e) {
  this.C = a;
  this.stack = b;
  this.qc = c;
  this.t = d;
  this.A = e;
  this.G = 0;
  this.q = 32374862;
}
k = Ei.prototype;
k.toString = function() {
  return ad(this);
};
k.I = function() {
  return this.C;
};
k.T = function() {
  return 0 > this.t ? N(H(this)) + 1 : this.t;
};
k.P = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Hd(this);
};
k.M = function(a, b) {
  return Rd(this, b);
};
k.Y = function() {
  return Ud(Fd, this.C);
};
k.ba = function(a, b) {
  return be.h(b, this);
};
k.ca = function(a, b, c) {
  return be.j(b, c, this);
};
k.$ = function() {
  return me(this.stack);
};
k.ga = function() {
  var a = F(this.stack), a = Di(this.qc ? a.right : a.left, H(this.stack), this.qc);
  return null != a ? new Ei(null, a, this.qc, this.t - 1, null) : Fd;
};
k.Q = function() {
  return this;
};
k.J = function(a, b) {
  return new Ei(b, this.stack, this.qc, this.t, this.A);
};
k.S = function(a, b) {
  return Sd(b, this);
};
function Fi(a, b, c) {
  return new Ei(null, Di(a, null, b), b, c, null);
}
function Gi(a, b, c, d) {
  return c instanceof Hi ? c.left instanceof Hi ? new Hi(c.key, c.B, c.left.cb(), new Ii(a, b, c.right, d, null), null) : c.right instanceof Hi ? new Hi(c.right.key, c.right.B, new Ii(c.key, c.B, c.left, c.right.left, null), new Ii(a, b, c.right.right, d, null), null) : new Ii(a, b, c, d, null) : new Ii(a, b, c, d, null);
}
function Ji(a, b, c, d) {
  return d instanceof Hi ? d.right instanceof Hi ? new Hi(d.key, d.B, new Ii(a, b, c, d.left, null), d.right.cb(), null) : d.left instanceof Hi ? new Hi(d.left.key, d.left.B, new Ii(a, b, c, d.left.left, null), new Ii(d.key, d.B, d.left.right, d.right, null), null) : new Ii(a, b, c, d, null) : new Ii(a, b, c, d, null);
}
function Ki(a, b, c, d) {
  if (c instanceof Hi) {
    return new Hi(a, b, c.cb(), d, null);
  }
  if (d instanceof Ii) {
    return Ji(a, b, c, d.oc());
  }
  if (d instanceof Hi && d.left instanceof Ii) {
    return new Hi(d.left.key, d.left.B, new Ii(a, b, c, d.left.left, null), Ji(d.key, d.B, d.left.right, d.right.oc()), null);
  }
  throw Error("red-black tree invariant violation");
}
var Mi = function Li(b, c, d) {
  d = null != b.left ? Li(b.left, c, d) : d;
  if (Ld(d)) {
    return L.g ? L.g(d) : L.call(null, d);
  }
  var e = b.key, f = b.B;
  d = c.j ? c.j(d, e, f) : c.call(null, d, e, f);
  if (Ld(d)) {
    return L.g ? L.g(d) : L.call(null, d);
  }
  b = null != b.right ? Li(b.right, c, d) : d;
  return Ld(b) ? L.g ? L.g(b) : L.call(null, b) : b;
};
function Ii(a, b, c, d, e) {
  this.key = a;
  this.B = b;
  this.left = c;
  this.right = d;
  this.A = e;
  this.G = 0;
  this.q = 32402207;
}
k = Ii.prototype;
k.ld = function(a) {
  return a.od(this);
};
k.oc = function() {
  return new Hi(this.key, this.B, this.left, this.right, null);
};
k.cb = function() {
  return this;
};
k.kd = function(a) {
  return a.nd(this);
};
k.replace = function(a, b, c, d) {
  return new Ii(a, b, c, d, null);
};
k.nd = function(a) {
  return new Ii(a.key, a.B, this, a.right, null);
};
k.od = function(a) {
  return new Ii(a.key, a.B, a.left, this, null);
};
k.Mb = function(a, b) {
  return Mi(this, a, b);
};
k.K = function(a, b) {
  return v.j(this, b, null);
};
k.L = function(a, b, c) {
  return v.j(this, b, c);
};
k.F = function(a, b) {
  return 0 === b ? this.key : 1 === b ? this.B : null;
};
k.oa = function(a, b, c) {
  return 0 === b ? this.key : 1 === b ? this.B : c;
};
k.Gb = function(a, b, c) {
  return(new U(null, 2, 5, V, [this.key, this.B], null)).Gb(null, b, c);
};
k.I = function() {
  return null;
};
k.T = function() {
  return 2;
};
k.gc = function() {
  return this.key;
};
k.hc = function() {
  return this.B;
};
k.xb = function() {
  return this.B;
};
k.P = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Hd(this);
};
k.M = function(a, b) {
  return Rd(this, b);
};
k.Y = function() {
  return ee;
};
k.ba = function(a, b) {
  return Md.h(this, b);
};
k.ca = function(a, b, c) {
  return Md.j(this, b, c);
};
k.va = function(a, b, c) {
  return R.j(new U(null, 2, 5, V, [this.key, this.B], null), b, c);
};
k.Q = function() {
  return qb(qb(Fd, this.B), this.key);
};
k.J = function(a, b) {
  return Ud(new U(null, 2, 5, V, [this.key, this.B], null), b);
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
  return this.call.apply(this, [this].concat(jb(b)));
};
k.g = function(a) {
  return this.K(null, a);
};
k.h = function(a, b) {
  return this.L(null, a, b);
};
function Hi(a, b, c, d, e) {
  this.key = a;
  this.B = b;
  this.left = c;
  this.right = d;
  this.A = e;
  this.G = 0;
  this.q = 32402207;
}
k = Hi.prototype;
k.ld = function(a) {
  return new Hi(this.key, this.B, this.left, a, null);
};
k.oc = function() {
  throw Error("red-black tree invariant violation");
};
k.cb = function() {
  return new Ii(this.key, this.B, this.left, this.right, null);
};
k.kd = function(a) {
  return new Hi(this.key, this.B, a, this.right, null);
};
k.replace = function(a, b, c, d) {
  return new Hi(a, b, c, d, null);
};
k.nd = function(a) {
  return this.left instanceof Hi ? new Hi(this.key, this.B, this.left.cb(), new Ii(a.key, a.B, this.right, a.right, null), null) : this.right instanceof Hi ? new Hi(this.right.key, this.right.B, new Ii(this.key, this.B, this.left, this.right.left, null), new Ii(a.key, a.B, this.right.right, a.right, null), null) : new Ii(a.key, a.B, this, a.right, null);
};
k.od = function(a) {
  return this.right instanceof Hi ? new Hi(this.key, this.B, new Ii(a.key, a.B, a.left, this.left, null), this.right.cb(), null) : this.left instanceof Hi ? new Hi(this.left.key, this.left.B, new Ii(a.key, a.B, a.left, this.left.left, null), new Ii(this.key, this.B, this.left.right, this.right, null), null) : new Ii(a.key, a.B, a.left, this, null);
};
k.Mb = function(a, b) {
  return Mi(this, a, b);
};
k.K = function(a, b) {
  return v.j(this, b, null);
};
k.L = function(a, b, c) {
  return v.j(this, b, c);
};
k.F = function(a, b) {
  return 0 === b ? this.key : 1 === b ? this.B : null;
};
k.oa = function(a, b, c) {
  return 0 === b ? this.key : 1 === b ? this.B : c;
};
k.Gb = function(a, b, c) {
  return(new U(null, 2, 5, V, [this.key, this.B], null)).Gb(null, b, c);
};
k.I = function() {
  return null;
};
k.T = function() {
  return 2;
};
k.gc = function() {
  return this.key;
};
k.hc = function() {
  return this.B;
};
k.xb = function() {
  return this.B;
};
k.P = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Hd(this);
};
k.M = function(a, b) {
  return Rd(this, b);
};
k.Y = function() {
  return ee;
};
k.ba = function(a, b) {
  return Md.h(this, b);
};
k.ca = function(a, b, c) {
  return Md.j(this, b, c);
};
k.va = function(a, b, c) {
  return R.j(new U(null, 2, 5, V, [this.key, this.B], null), b, c);
};
k.Q = function() {
  return qb(qb(Fd, this.B), this.key);
};
k.J = function(a, b) {
  return Ud(new U(null, 2, 5, V, [this.key, this.B], null), b);
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
  return this.call.apply(this, [this].concat(jb(b)));
};
k.g = function(a) {
  return this.K(null, a);
};
k.h = function(a, b) {
  return this.L(null, a, b);
};
var Oi = function Ni(b, c, d, e, f) {
  if (null == c) {
    return new Hi(d, e, null, null, null);
  }
  var g;
  g = c.key;
  g = b.h ? b.h(d, g) : b.call(null, d, g);
  if (0 === g) {
    return f[0] = c, null;
  }
  if (0 > g) {
    return b = Ni(b, c.left, d, e, f), null != b ? c.kd(b) : null;
  }
  b = Ni(b, c.right, d, e, f);
  return null != b ? c.ld(b) : null;
}, Qi = function Pi(b, c) {
  if (null == b) {
    return c;
  }
  if (null == c) {
    return b;
  }
  if (b instanceof Hi) {
    if (c instanceof Hi) {
      var d = Pi(b.right, c.left);
      return d instanceof Hi ? new Hi(d.key, d.B, new Hi(b.key, b.B, b.left, d.left, null), new Hi(c.key, c.B, d.right, c.right, null), null) : new Hi(b.key, b.B, b.left, new Hi(c.key, c.B, d, c.right, null), null);
    }
    return new Hi(b.key, b.B, b.left, Pi(b.right, c), null);
  }
  if (c instanceof Hi) {
    return new Hi(c.key, c.B, Pi(b, c.left), c.right, null);
  }
  d = Pi(b.right, c.left);
  return d instanceof Hi ? new Hi(d.key, d.B, new Ii(b.key, b.B, b.left, d.left, null), new Ii(c.key, c.B, d.right, c.right, null), null) : Ki(b.key, b.B, b.left, new Ii(c.key, c.B, d, c.right, null));
}, Si = function Ri(b, c, d, e) {
  if (null != c) {
    var f;
    f = c.key;
    f = b.h ? b.h(d, f) : b.call(null, d, f);
    if (0 === f) {
      return e[0] = c, Qi(c.left, c.right);
    }
    if (0 > f) {
      return b = Ri(b, c.left, d, e), null != b || null != e[0] ? c.left instanceof Ii ? Ki(c.key, c.B, b, c.right) : new Hi(c.key, c.B, b, c.right, null) : null;
    }
    b = Ri(b, c.right, d, e);
    if (null != b || null != e[0]) {
      if (c.right instanceof Ii) {
        if (e = c.key, d = c.B, c = c.left, b instanceof Hi) {
          c = new Hi(e, d, c, b.cb(), null);
        } else {
          if (c instanceof Ii) {
            c = Gi(e, d, c.oc(), b);
          } else {
            if (c instanceof Hi && c.right instanceof Ii) {
              c = new Hi(c.right.key, c.right.B, Gi(c.key, c.B, c.left.oc(), c.right.left), new Ii(e, d, c.right.right, b, null), null);
            } else {
              throw Error("red-black tree invariant violation");
            }
          }
        }
      } else {
        c = new Hi(c.key, c.B, c.left, b, null);
      }
    } else {
      c = null;
    }
    return c;
  }
  return null;
}, Ui = function Ti(b, c, d, e) {
  var f = c.key, g = b.h ? b.h(d, f) : b.call(null, d, f);
  return 0 === g ? c.replace(f, e, c.left, c.right) : 0 > g ? c.replace(f, c.B, Ti(b, c.left, d, e), c.right) : c.replace(f, c.B, c.left, Ti(b, c.right, d, e));
};
function Vi(a, b, c, d, e) {
  this.Ta = a;
  this.wb = b;
  this.t = c;
  this.C = d;
  this.A = e;
  this.q = 418776847;
  this.G = 8192;
}
k = Vi.prototype;
k.forEach = function(a) {
  for (var b = E(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.F(null, e), g = O.j(f, 0, null), f = O.j(f, 1, null);
      a.h ? a.h(f, g) : a.call(null, f, g);
      e += 1;
    } else {
      if (b = E(b)) {
        T(b) ? (c = x(b), b = z(b), g = c, d = N(c), c = g) : (c = F(b), g = O.j(c, 0, null), c = f = O.j(c, 1, null), a.h ? a.h(c, g) : a.call(null, c, g), b = H(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
k.toString = function() {
  return ad(this);
};
k.values = function() {
  return $h(ci.g ? ci.g(this) : ci.call(null, this));
};
function Wi(a, b) {
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
  return yb.j(this, b, null);
};
k.L = function(a, b, c) {
  a = Wi(this, b);
  return null != a ? a.B : c;
};
k.fc = function(a, b, c) {
  return null != this.wb ? Mi(this.wb, b, c) : c;
};
k.I = function() {
  return this.C;
};
k.T = function() {
  return this.t;
};
k.ic = function() {
  return 0 < this.t ? Fi(this.wb, !1, this.t) : null;
};
k.P = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Id(this);
};
k.M = function(a, b) {
  return Yh(this, b);
};
k.Y = function() {
  return Ud(Xi, this.C);
};
k.Sa = function(a, b) {
  var c = [null], d = Si(this.Ta, this.wb, b, c);
  return null == d ? null == O.h(c, 0) ? this : new Vi(this.Ta, null, 0, this.C, null) : new Vi(this.Ta, d.cb(), this.t - 1, this.C, null);
};
k.va = function(a, b, c) {
  a = [null];
  var d = Oi(this.Ta, this.wb, b, c, a);
  return null == d ? (a = O.h(a, 0), C.h(c, a.B) ? this : new Vi(this.Ta, Ui(this.Ta, this.wb, b, c), this.t, this.C, null)) : new Vi(this.Ta, d.cb(), this.t + 1, this.C, null);
};
k.uc = function(a, b) {
  return null != Wi(this, b);
};
k.Q = function() {
  return 0 < this.t ? Fi(this.wb, !0, this.t) : null;
};
k.J = function(a, b) {
  return new Vi(this.Ta, this.wb, this.t, b, this.A);
};
k.S = function(a, b) {
  if (te(b)) {
    return Bb(this, v.h(b, 0), v.h(b, 1));
  }
  for (var c = this, d = E(b);;) {
    if (null == d) {
      return c;
    }
    var e = F(d);
    if (te(e)) {
      c = Bb(c, v.h(e, 0), v.h(e, 1)), d = H(d);
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
  return this.call.apply(this, [this].concat(jb(b)));
};
k.g = function(a) {
  return this.K(null, a);
};
k.h = function(a, b) {
  return this.L(null, a, b);
};
var Xi = new Vi(Bd, null, 0, null, 0), vg = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = K(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = E(a);
    for (var b = Mc(gi);;) {
      if (a) {
        var e = H(H(a)), b = gg.j(b, F(a), ce(a));
        a = e;
      } else {
        return Oc(b);
      }
    }
  }
  a.w = 0;
  a.n = function(a) {
    a = E(a);
    return b(a);
  };
  a.k = b;
  return a;
}(), Yi = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = K(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    for (var e = E(b), f = new Vi(Qe(a), null, 0, null, 0);;) {
      if (e) {
        var g = H(H(e)), f = R.j(f, F(e), ce(e)), e = g
      } else {
        return f;
      }
    }
  }
  a.w = 1;
  a.n = function(a) {
    var d = F(a);
    a = G(a);
    return b(d, a);
  };
  a.k = b;
  return a;
}();
function Zi(a, b) {
  this.la = a;
  this.na = b;
  this.G = 0;
  this.q = 32374988;
}
k = Zi.prototype;
k.toString = function() {
  return ad(this);
};
k.I = function() {
  return this.na;
};
k.ja = function() {
  var a = this.la, a = (a ? a.q & 128 || a.yc || (a.q ? 0 : gb(wb, a)) : gb(wb, a)) ? this.la.ja(null) : H(this.la);
  return null == a ? null : new Zi(a, this.na);
};
k.P = function() {
  return Hd(this);
};
k.M = function(a, b) {
  return Rd(this, b);
};
k.Y = function() {
  return Ud(Fd, this.na);
};
k.ba = function(a, b) {
  return be.h(b, this);
};
k.ca = function(a, b, c) {
  return be.j(b, c, this);
};
k.$ = function() {
  return this.la.$(null).gc(null);
};
k.ga = function() {
  var a = this.la, a = (a ? a.q & 128 || a.yc || (a.q ? 0 : gb(wb, a)) : gb(wb, a)) ? this.la.ja(null) : H(this.la);
  return null != a ? new Zi(a, this.na) : Fd;
};
k.Q = function() {
  return this;
};
k.J = function(a, b) {
  return new Zi(this.la, b);
};
k.S = function(a, b) {
  return Sd(b, this);
};
function $i(a) {
  return(a = E(a)) ? new Zi(a, null) : null;
}
function zf(a) {
  return Jb(a);
}
function aj(a, b) {
  this.la = a;
  this.na = b;
  this.G = 0;
  this.q = 32374988;
}
k = aj.prototype;
k.toString = function() {
  return ad(this);
};
k.I = function() {
  return this.na;
};
k.ja = function() {
  var a = this.la, a = (a ? a.q & 128 || a.yc || (a.q ? 0 : gb(wb, a)) : gb(wb, a)) ? this.la.ja(null) : H(this.la);
  return null == a ? null : new aj(a, this.na);
};
k.P = function() {
  return Hd(this);
};
k.M = function(a, b) {
  return Rd(this, b);
};
k.Y = function() {
  return Ud(Fd, this.na);
};
k.ba = function(a, b) {
  return be.h(b, this);
};
k.ca = function(a, b, c) {
  return be.j(b, c, this);
};
k.$ = function() {
  return this.la.$(null).hc(null);
};
k.ga = function() {
  var a = this.la, a = (a ? a.q & 128 || a.yc || (a.q ? 0 : gb(wb, a)) : gb(wb, a)) ? this.la.ja(null) : H(this.la);
  return null != a ? new aj(a, this.na) : Fd;
};
k.Q = function() {
  return this;
};
k.J = function(a, b) {
  return new aj(this.la, b);
};
k.S = function(a, b) {
  return Sd(b, this);
};
function ci(a) {
  return(a = E(a)) ? new aj(a, null) : null;
}
function Af(a) {
  return Kb(a);
}
var bj = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = K(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    return q(mg(We, a)) ? Ue.h(function(a, b) {
      return fe.h(q(a) ? a : ei, b);
    }, a) : null;
  }
  a.w = 0;
  a.n = function(a) {
    a = E(a);
    return b(a);
  };
  a.k = b;
  return a;
}(), cj = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = K(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    return q(mg(We, b)) ? Ue.h(function(a) {
      return function(b, c) {
        return Ue.j(a, q(b) ? b : ei, E(c));
      };
    }(function(b, d) {
      var g = F(d), h = ce(d);
      return Ne(b, g) ? R.j(b, g, function() {
        var d = Q.h(b, g);
        return a.h ? a.h(d, h) : a.call(null, d, h);
      }()) : R.j(b, g, h);
    }), b) : null;
  }
  a.w = 1;
  a.n = function(a) {
    var d = F(a);
    a = G(a);
    return b(d, a);
  };
  a.k = b;
  return a;
}();
function dj(a, b) {
  for (var c = ei, d = E(b);;) {
    if (d) {
      var e = F(d), f = Q.j(a, e, ej), c = jg.h(f, ej) ? R.j(c, e, f) : c, d = H(d)
    } else {
      return c;
    }
  }
}
function fj(a, b, c) {
  this.C = a;
  this.Jb = b;
  this.A = c;
  this.q = 15077647;
  this.G = 8196;
}
k = fj.prototype;
k.toString = function() {
  return ad(this);
};
k.values = function() {
  return $h(E(this));
};
k.forEach = function(a) {
  for (var b = E(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.F(null, e), g = O.j(f, 0, null), f = O.j(f, 1, null);
      a.h ? a.h(f, g) : a.call(null, f, g);
      e += 1;
    } else {
      if (b = E(b)) {
        T(b) ? (c = x(b), b = z(b), g = c, d = N(c), c = g) : (c = F(b), g = O.j(c, 0, null), c = f = O.j(c, 1, null), a.h ? a.h(c, g) : a.call(null, c, g), b = H(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
k.K = function(a, b) {
  return yb.j(this, b, null);
};
k.L = function(a, b, c) {
  return Ab(this.Jb, b) ? b : c;
};
k.I = function() {
  return this.C;
};
k.T = function() {
  return nb(this.Jb);
};
k.P = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Id(this);
};
k.M = function(a, b) {
  return qe(b) && N(this) === N(b) && lg(function(a) {
    return function(b) {
      return Ne(a, b);
    };
  }(this), b);
};
k.Vb = function() {
  return new gj(Mc(this.Jb));
};
k.Y = function() {
  return Ud(hj, this.C);
};
k.wd = function(a, b) {
  return new fj(this.C, Hb(this.Jb, b), null);
};
k.Q = function() {
  return $i(this.Jb);
};
k.J = function(a, b) {
  return new fj(b, this.Jb, this.A);
};
k.S = function(a, b) {
  return new fj(this.C, R.j(this.Jb, b, null), null);
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
  return this.call.apply(this, [this].concat(jb(b)));
};
k.g = function(a) {
  return this.K(null, a);
};
k.h = function(a, b) {
  return this.L(null, a, b);
};
var hj = new fj(null, ei, 0);
function ij(a) {
  var b = a.length;
  if (b <= fi) {
    for (var c = 0, d = Mc(ei);;) {
      if (c < b) {
        var e = c + 1, d = Pc(d, a[c], null), c = e
      } else {
        return new fj(null, Oc(d), null);
      }
    }
  } else {
    for (c = 0, d = Mc(hj);;) {
      if (c < b) {
        e = c + 1, d = Nc(d, a[c]), c = e;
      } else {
        return Oc(d);
      }
    }
  }
}
function gj(a) {
  this.vb = a;
  this.q = 259;
  this.G = 136;
}
k = gj.prototype;
k.call = function() {
  function a(a, b, c) {
    return yb.j(this.vb, b, xe) === xe ? c : b;
  }
  function b(a, b) {
    return yb.j(this.vb, b, xe) === xe ? null : b;
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
  return this.call.apply(this, [this].concat(jb(b)));
};
k.g = function(a) {
  return yb.j(this.vb, a, xe) === xe ? null : a;
};
k.h = function(a, b) {
  return yb.j(this.vb, a, xe) === xe ? b : a;
};
k.K = function(a, b) {
  return yb.j(this, b, null);
};
k.L = function(a, b, c) {
  return yb.j(this.vb, b, xe) === xe ? c : b;
};
k.T = function() {
  return N(this.vb);
};
k.Eb = function(a, b) {
  this.vb = gg.j(this.vb, b, null);
  return this;
};
k.Fb = function() {
  return new fj(null, Oc(this.vb), null);
};
function jj(a) {
  a = E(a);
  if (null == a) {
    return hj;
  }
  if (a instanceof Ed && 0 === a.H) {
    a = a.l;
    a: {
      for (var b = 0, c = Mc(hj);;) {
        if (b < a.length) {
          var d = b + 1, c = c.Eb(null, a[b]), b = d
        } else {
          a = c;
          break a;
        }
      }
      a = void 0;
    }
    return a.Fb(null);
  }
  for (d = Mc(hj);;) {
    if (null != a) {
      b = a.ja(null), d = d.Eb(null, a.$(null)), a = b;
    } else {
      return d.Fb(null);
    }
  }
}
function Gf(a) {
  if (a && (a.G & 4096 || a.fe)) {
    return a.name;
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error("Doesn't support name: " + u.g(a));
}
function pj(a, b) {
  for (var c = Mc(ei), d = E(a), e = E(b);;) {
    if (d && e) {
      c = gg.j(c, F(d), F(e)), d = H(d), e = H(e);
    } else {
      return Oc(c);
    }
  }
}
var qj = function() {
  function a(a, b, c) {
    return(a.g ? a.g(b) : a.call(null, b)) > (a.g ? a.g(c) : a.call(null, c)) ? b : c;
  }
  var b = null, c = function() {
    function a(b, d, h, l) {
      var m = null;
      3 < arguments.length && (m = K(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, h, m);
    }
    function c(a, d, e, l) {
      return Ue.j(function(c, d) {
        return b.j(a, c, d);
      }, b.j(a, d, e), l);
    }
    a.w = 3;
    a.n = function(a) {
      var b = F(a);
      a = H(a);
      var d = F(a);
      a = H(a);
      var l = F(a);
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
        return c.k(b, e, f, K(arguments, 3));
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
}(), rj = function() {
  function a(a, b, c) {
    return(a.g ? a.g(b) : a.call(null, b)) < (a.g ? a.g(c) : a.call(null, c)) ? b : c;
  }
  var b = null, c = function() {
    function a(b, d, h, l) {
      var m = null;
      3 < arguments.length && (m = K(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, h, m);
    }
    function c(a, d, e, l) {
      return Ue.j(function(c, d) {
        return b.j(a, c, d);
      }, b.j(a, d, e), l);
    }
    a.w = 3;
    a.n = function(a) {
      var b = F(a);
      a = H(a);
      var d = F(a);
      a = H(a);
      var l = F(a);
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
        return c.k(b, e, f, K(arguments, 3));
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
function sj(a, b, c, d, e) {
  this.C = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.A = e;
  this.q = 32375006;
  this.G = 8192;
}
k = sj.prototype;
k.toString = function() {
  return ad(this);
};
k.F = function(a, b) {
  if (b < nb(this)) {
    return this.start + b * this.step;
  }
  if (this.start > this.end && 0 === this.step) {
    return this.start;
  }
  throw Error("Index out of bounds");
};
k.oa = function(a, b, c) {
  return b < nb(this) ? this.start + b * this.step : this.start > this.end && 0 === this.step ? this.start : c;
};
k.I = function() {
  return this.C;
};
k.ja = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new sj(this.C, this.start + this.step, this.end, this.step, null) : null : this.start + this.step > this.end ? new sj(this.C, this.start + this.step, this.end, this.step, null) : null;
};
k.T = function() {
  if (fb(nc(this))) {
    return 0;
  }
  var a = (this.end - this.start) / this.step;
  return Math.ceil.g ? Math.ceil.g(a) : Math.ceil.call(null, a);
};
k.P = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Hd(this);
};
k.M = function(a, b) {
  return Rd(this, b);
};
k.Y = function() {
  return Ud(Fd, this.C);
};
k.ba = function(a, b) {
  return Md.h(this, b);
};
k.ca = function(a, b, c) {
  return Md.j(this, b, c);
};
k.$ = function() {
  return null == nc(this) ? null : this.start;
};
k.ga = function() {
  return null != nc(this) ? new sj(this.C, this.start + this.step, this.end, this.step, null) : Fd;
};
k.Q = function() {
  return 0 < this.step ? this.start < this.end ? this : null : this.start > this.end ? this : null;
};
k.J = function(a, b) {
  return new sj(b, this.start, this.end, this.step, this.A);
};
k.S = function(a, b) {
  return Sd(b, this);
};
var tj = function() {
  function a(a, b, c) {
    return new sj(null, a, b, c, null);
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
function uj(a) {
  return eg(Ue.j(function(a, c) {
    return gg.j(a, c, Q.j(a, c, 0) + 1);
  }, Mc(ei), a));
}
var vj = function() {
  function a(a, b, f) {
    return Sd(b, new If(null, function() {
      var g = E(f);
      return g ? c.j(a, function() {
        var c = F(g);
        return a.h ? a.h(b, c) : a.call(null, b, c);
      }(), G(g)) : null;
    }, null, null));
  }
  function b(a, b) {
    return new If(null, function() {
      var f = E(b);
      return f ? c.j(a, F(f), G(f)) : qb(Fd, a.p ? a.p() : a.call(null));
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
}(), wj = function() {
  function a(a, b) {
    for (;;) {
      if (E(b) && 0 < a) {
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
      if (E(a)) {
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
}(), xj = function() {
  function a(a, b) {
    wj.h(a, b);
    return b;
  }
  function b(a) {
    wj.g(a);
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
function yj(a, b) {
  if ("string" === typeof b) {
    var c = a.exec(b);
    return C.h(F(c), b) ? 1 === N(c) ? F(c) : wh(c) : null;
  }
  throw new TypeError("re-matches must match against a string.");
}
function zj(a) {
  var b;
  b = /^(?:\(\?([idmsux]*)\))?(.*)/;
  if ("string" === typeof a) {
    a = b.exec(a), b = null == a ? null : 1 === N(a) ? F(a) : wh(a);
  } else {
    throw new TypeError("re-find must match against a string.");
  }
  O.j(b, 0, null);
  a = O.j(b, 1, null);
  b = O.j(b, 2, null);
  return new RegExp(b, a);
}
function Aj(a, b, c, d, e, f, g) {
  var h = Va;
  try {
    Va = null == Va ? null : Va - 1;
    if (null != Va && 0 > Va) {
      return zc(a, "#");
    }
    zc(a, c);
    if (E(g)) {
      var l = F(g);
      b.j ? b.j(l, a, f) : b.call(null, l, a, f);
    }
    for (var m = H(g), r = eb.g(f) - 1;;) {
      if (!m || null != r && 0 === r) {
        E(m) && 0 === r && (zc(a, d), zc(a, "..."));
        break;
      } else {
        zc(a, d);
        var s = F(m);
        c = a;
        g = f;
        b.j ? b.j(s, c, g) : b.call(null, s, c, g);
        var w = H(m);
        c = r - 1;
        m = w;
        r = c;
      }
    }
    return zc(a, e);
  } finally {
    Va = h;
  }
}
var Bj = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = K(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    for (var e = E(b), f = null, g = 0, h = 0;;) {
      if (h < g) {
        var l = f.F(null, h);
        zc(a, l);
        h += 1;
      } else {
        if (e = E(e)) {
          f = e, T(f) ? (e = x(f), g = z(f), f = e, l = N(e), e = g, g = l) : (l = F(f), zc(a, l), e = H(f), f = null, g = 0), h = 0;
        } else {
          return null;
        }
      }
    }
  }
  a.w = 1;
  a.n = function(a) {
    var d = F(a);
    a = G(a);
    return b(d, a);
  };
  a.k = b;
  return a;
}(), Cj = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function Dj(a) {
  return'"' + u.g(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return Cj[a];
  })) + '"';
}
var Gj = function Ej(b, c, d) {
  if (null == b) {
    return zc(c, "nil");
  }
  if (void 0 === b) {
    return zc(c, "#\x3cundefined\x3e");
  }
  q(function() {
    var c = Q.h(d, $a);
    return q(c) ? (c = b ? b.q & 131072 || b.ee ? !0 : b.q ? !1 : gb(Zb, b) : gb(Zb, b)) ? le(b) : c : c;
  }()) && (zc(c, "^"), Ej(le(b), c, d), zc(c, " "));
  if (null == b) {
    return zc(c, "nil");
  }
  if (b.Fa) {
    return b.Ka(b, c, d);
  }
  if (b && (b.q & 2147483648 || b.W)) {
    return b.N(null, c, d);
  }
  if (hb(b) === Boolean || "number" === typeof b) {
    return zc(c, "" + u.g(b));
  }
  if (null != b && b.constructor === Object) {
    zc(c, "#js ");
    var e = Cg.h(function(c) {
      return new U(null, 2, 5, V, [Hf.g(c), b[c]], null);
    }, ue(b));
    return Fj.m ? Fj.m(e, Ej, c, d) : Fj.call(null, e, Ej, c, d);
  }
  return b instanceof Array ? Aj(c, Ej, "#js [", " ", "]", d, b) : q(ha(b)) ? q(Za.g(d)) ? zc(c, Dj(b)) : zc(c, b) : je(b) ? Bj.k(c, K(["#\x3c", "" + u.g(b), "\x3e"], 0)) : b instanceof Date ? (e = function(b, c) {
    for (var d = "" + u.g(b);;) {
      if (N(d) < c) {
        d = "0" + u.g(d);
      } else {
        return d;
      }
    }
  }, Bj.k(c, K(['#inst "', "" + u.g(b.getUTCFullYear()), "-", e(b.getUTCMonth() + 1, 2), "-", e(b.getUTCDate(), 2), "T", e(b.getUTCHours(), 2), ":", e(b.getUTCMinutes(), 2), ":", e(b.getUTCSeconds(), 2), ".", e(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0))) : b instanceof RegExp ? Bj.k(c, K(['#"', b.source, '"'], 0)) : (b ? b.q & 2147483648 || b.W || (b.q ? 0 : gb(Ac, b)) : gb(Ac, b)) ? Bc(b, c, d) : Bj.k(c, K(["#\x3c", "" + u.g(b), "\x3e"], 0));
};
function Hj(a, b) {
  var c = new La;
  a: {
    var d = new $c(c);
    Gj(F(a), d, b);
    for (var e = E(H(a)), f = null, g = 0, h = 0;;) {
      if (h < g) {
        var l = f.F(null, h);
        zc(d, " ");
        Gj(l, d, b);
        h += 1;
      } else {
        if (e = E(e)) {
          f = e, T(f) ? (e = x(f), g = z(f), f = e, l = N(e), e = g, g = l) : (l = F(f), zc(d, " "), Gj(l, d, b), e = H(f), f = null, g = 0), h = 0;
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
    0 < arguments.length && (d = K(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b = Wa();
    return oe(a) ? "" : "" + u.g(Hj(a, b));
  }
  a.w = 0;
  a.n = function(a) {
    a = E(a);
    return b(a);
  };
  a.k = b;
  return a;
}();
function Fj(a, b, c, d) {
  return Aj(c, function(a, c, d) {
    var h = Jb(a);
    b.j ? b.j(h, c, d) : b.call(null, h, c, d);
    zc(c, " ");
    a = Kb(a);
    return b.j ? b.j(a, c, d) : b.call(null, a, c, d);
  }, "{", ", ", "}", d, E(a));
}
Ed.prototype.W = !0;
Ed.prototype.N = function(a, b, c) {
  return Aj(b, Gj, "(", " ", ")", c, this);
};
If.prototype.W = !0;
If.prototype.N = function(a, b, c) {
  return Aj(b, Gj, "(", " ", ")", c, this);
};
Ei.prototype.W = !0;
Ei.prototype.N = function(a, b, c) {
  return Aj(b, Gj, "(", " ", ")", c, this);
};
xi.prototype.W = !0;
xi.prototype.N = function(a, b, c) {
  return Aj(b, Gj, "(", " ", ")", c, this);
};
Ii.prototype.W = !0;
Ii.prototype.N = function(a, b, c) {
  return Aj(b, Gj, "[", " ", "]", c, this);
};
bi.prototype.W = !0;
bi.prototype.N = function(a, b, c) {
  return Aj(b, Gj, "(", " ", ")", c, this);
};
yh.prototype.W = !0;
yh.prototype.N = function(a, b, c) {
  return Aj(b, Gj, "(", " ", ")", c, this);
};
Ff.prototype.W = !0;
Ff.prototype.N = function(a, b, c) {
  return Aj(b, Gj, "(", " ", ")", c, this);
};
Qd.prototype.W = !0;
Qd.prototype.N = function(a, b, c) {
  return Aj(b, Gj, "(", " ", ")", c, this);
};
zi.prototype.W = !0;
zi.prototype.N = function(a, b, c) {
  return Fj(this, Gj, b, c);
};
yi.prototype.W = !0;
yi.prototype.N = function(a, b, c) {
  return Aj(b, Gj, "(", " ", ")", c, this);
};
Ah.prototype.W = !0;
Ah.prototype.N = function(a, b, c) {
  return Aj(b, Gj, "[", " ", "]", c, this);
};
Vi.prototype.W = !0;
Vi.prototype.N = function(a, b, c) {
  return Fj(this, Gj, b, c);
};
fj.prototype.W = !0;
fj.prototype.N = function(a, b, c) {
  return Aj(b, Gj, "#{", " ", "}", c, this);
};
Wf.prototype.W = !0;
Wf.prototype.N = function(a, b, c) {
  return Aj(b, Gj, "(", " ", ")", c, this);
};
ug.prototype.W = !0;
ug.prototype.N = function(a, b, c) {
  zc(b, "#\x3cAtom: ");
  Gj(this.state, b, c);
  return zc(b, "\x3e");
};
aj.prototype.W = !0;
aj.prototype.N = function(a, b, c) {
  return Aj(b, Gj, "(", " ", ")", c, this);
};
Hi.prototype.W = !0;
Hi.prototype.N = function(a, b, c) {
  return Aj(b, Gj, "[", " ", "]", c, this);
};
U.prototype.W = !0;
U.prototype.N = function(a, b, c) {
  return Aj(b, Gj, "[", " ", "]", c, this);
};
Fh.prototype.W = !0;
Fh.prototype.N = function(a, b, c) {
  return Aj(b, Gj, "(", " ", ")", c, this);
};
Cf.prototype.W = !0;
Cf.prototype.N = function(a, b) {
  return zc(b, "()");
};
Gh.prototype.W = !0;
Gh.prototype.N = function(a, b, c) {
  return Aj(b, Gj, "#queue [", " ", "]", c, E(this));
};
p.prototype.W = !0;
p.prototype.N = function(a, b, c) {
  return Fj(this, Gj, b, c);
};
sj.prototype.W = !0;
sj.prototype.N = function(a, b, c) {
  return Aj(b, Gj, "(", " ", ")", c, this);
};
Zi.prototype.W = !0;
Zi.prototype.N = function(a, b, c) {
  return Aj(b, Gj, "(", " ", ")", c, this);
};
Bf.prototype.W = !0;
Bf.prototype.N = function(a, b, c) {
  return Aj(b, Gj, "(", " ", ")", c, this);
};
U.prototype.vc = !0;
U.prototype.wc = function(a, b) {
  return Pe.h(this, b);
};
Ah.prototype.vc = !0;
Ah.prototype.wc = function(a, b) {
  return Pe.h(this, b);
};
W.prototype.vc = !0;
W.prototype.wc = function(a, b) {
  return Ad(this, b);
};
Cd.prototype.vc = !0;
Cd.prototype.wc = function(a, b) {
  return Ad(this, b);
};
function Ij(a, b, c) {
  Kc(a, b, c);
}
var Jj = null, Kj = function() {
  function a(a) {
    null == Jj && (Jj = xg.g ? xg.g(0) : xg.call(null, 0));
    return Dd.g("" + u.g(a) + u.g(Ag.h(Jj, Jd)));
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
function Lj(a) {
  return function(b, c) {
    var d = a.h ? a.h(b, c) : a.call(null, b, c);
    return Ld(d) ? new Kd(d) : d;
  };
}
function Vg(a) {
  return function(b) {
    return function() {
      function c(a, c) {
        return Ue.j(b, a, c);
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
  }(Lj(a));
}
tf = function() {
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
uf = function(a) {
  a *= Math.random.p ? Math.random.p() : Math.random.call(null);
  return Math.floor.g ? Math.floor.g(a) : Math.floor.call(null, a);
};
function Mj(a, b) {
  return eg(Ue.j(function(b, d) {
    var e = a.g ? a.g(d) : a.call(null, d);
    return gg.j(b, e, fe.h(Q.j(b, e, ee), d));
  }, Mc(ei), b));
}
function Nj(a) {
  this.Kc = a;
  this.G = 0;
  this.q = 2153775104;
}
Nj.prototype.P = function() {
  for (var a = zg.k(K([this], 0)), b = 0, c = 0;c < a.length;++c) {
    b = 31 * b + a.charCodeAt(c), b %= 4294967296;
  }
  return b;
};
Nj.prototype.N = function(a, b) {
  return zc(b, '#uuid "' + u.g(this.Kc) + '"');
};
Nj.prototype.M = function(a, b) {
  return b instanceof Nj && this.Kc === b.Kc;
};
Nj.prototype.toString = function() {
  return this.Kc;
};
var Oj = new W(null, "inactive", "inactive", -306247616), Pj = new W(null, "y", "y", -1757859776), Qj = new W(null, "zero", "zero", -858964576), Rj = new W(null, "ppath", "ppath", -1758182784), Sj = new W(null, "no-deref-monitor", "no-deref-monitor", 1171473184), Tj = new W(null, "seg-w-px", "seg-w-px", 1192509248), Uj = new W(null, "fieldset", "fieldset", -1949770816), Vj = new W(null, "fieldset#sim-controls", "fieldset#sim-controls", 443000993), Wj = new W(null, "watches", "watches", -273097535), 
Xj = new W(null, "boost-overlap-duty-ratio", "boost-overlap-duty-ratio", -1153915647), Yj = new W(null, "ff-synapses", "ff-synapses", -1536453151), Zj = new W(null, "gap-countdown", "gap-countdown", -2051578079), ak = new W(null, "target-density", "target-density", 391599009), bk = new W(null, "fieldset.region-spec", "fieldset.region-spec", 1547815873), ck = new W(null, "run-0-5", "run-0-5", -60879870), dk = new W(null, "min", "min", 444991522), ek = new W(null, "down", "down", 1565245570), fk = 
new W(null, "permanence-dec", "permanence-dec", 873173410), gk = new W("zip", "branch?", "zip/branch?", -998880862), hk = new W(null, "span#sim-rate", "span#sim-rate", -400148894), ik = new W(null, "r", "r", -471384190), jk = new W(null, "text-margin", "text-margin", 1161346978), kk = new W(null, "g.tick.major-tick", "g.tick.major-tick", 1467819139), lk = new W("zip", "children", "zip/children", -940194589), mk = new W(null, "dh", "dh", 528137731), nk = new W(null, "boost", "boost", -673419773), 
ok = new W(null, "run-sim", "run-sim", 1708970627), pk = new W(null, "a#sim-faster", "a#sim-faster", 1179722499), qk = new W(null, "span#sim-timestep", "span#sim-timestep", -764964893), rk = new W(null, "transform", "transform", 1381301764), $a = new W(null, "meta", "meta", 1499536964), sk = new W(null, "selected", "selected", 574897764), tk = new W(null, "dx", "dx", -381796732), uk = new W(null, "seg-h-space-px", "seg-h-space-px", 1353315204), vk = new W(null, "max-synapse-count", "max-synapse-count", 
-2061271132), wk = new W(null, "scroll-top", "scroll-top", -46723100), sl = new W(null, "scroll-counter", "scroll-counter", 628002885), db = new W(null, "dup", "dup", 556298533), tl = new W(null, "dir", "dir", 1734754661), ul = new W(null, "g.ticks", "g.ticks", 28507493), vl = new W(null, "temporal-pooling", "temporal-pooling", 240992677), wl = new W(null, "segment-idx", "segment-idx", -248867259), xl = new W(null, "key", "key", -1516042587), yl = new W(null, "sp-perm-dec", "sp-perm-dec", 855246789), 
zl = new W(null, "index", "index", -1531685915), Al = new W(null, "bottom", "bottom", -1550509018), Bl = new W(null, "max-segments", "max-segments", -157037498), Cl = new W(null, "encoder", "encoder", -1113127834), Dl = new W(null, "button#sim-start", "button#sim-start", -924760922), El = new W(null, "exit", "exit", 351849638), Fl = new W(null, "disconnected", "disconnected", -1908014586), Gl = new W(null, "boost-active-duty-ratio", "boost-active-duty-ratio", 891850342), Hl = new W(null, "temporal-pooling-scores", 
"temporal-pooling-scores", 415441191), Il = new W(null, "lat-synapses", "lat-synapses", 1341366663), Jl = new W(null, "button#sim-reset", "button#sim-reset", -1103042169), Kl = new W(null, "top", "top", -1856271961), Ll = new W(null, "derefed", "derefed", 590684583), Ml = new W(null, "prev-predictive-cells-by-column", "prev-predictive-cells-by-column", -2129217881), Nl = new W(null, "text.label", "text.label", 210580295), Ol = new W(null, "yellow", "yellow", -881035449), wg = new W(null, "validator", 
"validator", -1966190681), Pl = new W(null, "highlight", "highlight", -800930873), Ql = new W(null, "cid", "cid", -1940591320), Rl = new W(null, "line.rule", "line.rule", -722114232), Sl = new W(null, "button#anim-step", "button#anim-step", 1065036136), Tl = new W(null, "seg-h-px", "seg-h-px", -443969112), Ul = new W(null, "finally-block", "finally-block", 832982472), Vl = new W(null, "h-space-px", "h-space-px", -766035480), Wl = new W(null, "col-shrink", "col-shrink", -1043182072), Xl = new W(null, 
"learn-segments", "learn-segments", 1869208392), Y = new W(null, "columns", "columns", 1998437288), Yl = new W(null, "a#anim-slower", "a#anim-slower", -2103660568), Zl = new W(null, "name", "name", 1843675177), $l = new W(null, "w", "w", 354169001), am = new W("org.nfrac.comportex.sequence-memory", "lat-index", "org.nfrac.comportex.sequence-memory/lat-index", 1157726441), bm = new W(null, "sy", "sy", 227523849), cm = new W(null, "element-h", "element-h", -1458880151), dm = new W(null, "anim-go?", 
"anim-go?", 1109067401), em = new W(null, "dt", "dt", -368444759), fm = new W(null, "formatter", "formatter", -483008823), gm = new W(null, "parent-watchables", "parent-watchables", -319854903), hm = new W(null, "value", "value", 305978217), im = new W(null, "green", "green", -945526839), jm = new W(null, "time", "time", 1385887882), km = new W(null, "fieldset#anim-controls", "fieldset#anim-controls", 750977322), lm = new W(null, "mapping", "mapping", -1242405430), mm = new W(null, "page-up", "page-up", 
1352555050), nm = new W(null, "regions", "regions", -1023815958), om = new W(null, "timestep", "timestep", -1557942486), pm = new W(null, "dirty?", "dirty?", -2059845846), qm = new W(null, "potential-frac", "potential-frac", -148706518), rm = new W(null, "y1", "y1", 589123466), sm = new W(null, "width", "width", -384071477), tm = new W(null, "new-synapse-count", "new-synapse-count", -1667854133), um = new W(null, "a#sim-slower", "a#sim-slower", -8187669), vm = new W(null, "button#sim-step", "button#sim-step", 
-991688373), wm = new W(null, "dy", "dy", 1719547243), xm = new W(null, "connected", "connected", -169833045), ym = new W(null, "p.detail", "p.detail", -259333685), zm = new W(null, "submit", "submit", -49315317), Am = new W(null, "active-duty-cycles", "active-duty-cycles", -2100410837), Bm = new W(null, "legend", "legend", -1027192245), Cm = new W(null, "permanence-inc", "permanence-inc", 562267755), Dm = new W(null, "shrink", "shrink", 1415287595), Em = new W(null, "orientation", "orientation", 
623557579), Fm = new W(null, "fieldset#viz-options", "fieldset#viz-options", -957799412), Gm = new W(null, "predictive", "predictive", 742235276), Hm = new W(null, "potential-radius", "potential-radius", -1950363476), Im = new W(null, "signal-cells", "signal-cells", -451652436), Jm = new W(null, "draw-steps", "draw-steps", -100988692), Z = new W(null, "recur", "recur", -437573268), Km = new W(null, "type", "type", 1174270348), Lm = new W("comportexviz.viz-canvas", "acols", "comportexviz.viz-canvas/acols", 
1747707340), Mm = new W(null, "update", "update", 1045576396), Nm = new W(null, "catch-block", "catch-block", 1175212748), Om = new W(null, "twos", "twos", 709888876), Pm = new W(null, "state", "state", -1988618099), Qm = new W(null, "g.timestep", "g.timestep", -1438660275), Rm = new W(null, "input-size", "input-size", -731983507), Sm = new W(null, "major-tick-width", "major-tick-width", -401901043), Tm = new W("comportexviz.viz-canvas", "abits", "comportexviz.viz-canvas/abits", -1378531795), Um = 
new W(null, "update-dom", "update-dom", 1414664877), Vm = new W(null, "bursting?", "bursting?", -1793074515), Wm = new W(null, "span.detail", "span.detail", -1905752307), Xm = new W(null, "span#sim-ms-text", "span#sim-ms-text", -117079187), Xa = new W(null, "flush-on-newline", "flush-on-newline", -151457939), Ym = new W(null, "overlap-duty-cycles", "overlap-duty-cycles", 1224111053), Zm = new W(null, "segments", "segments", 1937535949), $m = new W(null, "sim-step-ms", "sim-step-ms", -1192536083), 
an = new W(null, "button#anim-start", "button#anim-start", 373847086), bn = new W(null, "synapses", "synapses", -614206130), cn = new W(null, "learn-cells", "learn-cells", -1536897586), dn = new W(null, "all", "all", 892129742), Kn = new W(null, "active-columns", "active-columns", 1479134862), Ln = new W(null, "activation-threshold", "activation-threshold", -1175546194), Mn = new W(null, "span#anim-every-text", "span#anim-every-text", -815816561), Nn = new W(null, "l", "l", 1395893423), On = new W(null, 
"seed", "seed", 68613327), Pn = new W(null, "up", "up", -269712113), Qn = new W("zip", "make-node", "zip/make-node", 1103800591), Rn = new W(null, "canvas", "canvas", -1798817489), Sn = new W(null, "ncol", "ncol", 1778338447), Tn = new W(null, "enter", "enter", 1792452624), Un = new W(null, "bit-h-px", "bit-h-px", -1081204688), Vn = new W(null, "demote", "demote", 2088906896), Wn = new W(null, "learning", "learning", 612366512), Xn = new W(null, "region", "region", 270415120), Yn = new W(null, "style", 
"style", -496642736), Zn = new W(null, "clamp?", "clamp?", 249465200), $n = new W(null, "ts", "ts", 1617209904), ao = new W(null, "div", "div", 1057191632), bo = new W(null, "option", "option", 65132272), Za = new W(null, "readably", "readably", 1129599760), co = new W(null, "run-start", "run-start", 1984981840), eo = new W(null, "activation", "activation", 2128521072), fo = new W("comportexviz.viz-canvas", "tpcols", "comportexviz.viz-canvas/tpcols", 500403377), go = new W(null, "counter", "counter", 
804008177), ho = new W(null, "key-fn", "key-fn", -636154479), io = new W(null, "spec", "spec", 347520401), jo = new W(null, "g", "g", 1738089905), ko = new W(null, "button#anim-stop", "button#anim-stop", -279088527), lo = new W(null, "random-double", "random-double", -922602767), mo = new W(null, "active-predicted", "active-predicted", -72115407), no = new W(null, "click", "click", 1912301393), oo = new W(null, "cp1x", "cp1x", 465245137), po = new W(null, "anim-every", "anim-every", 1633754642), 
qo = new W(null, "max-boost", "max-boost", 608482834), ro = new W(null, "label-margin", "label-margin", -17690670), so = new W(null, "cp2x", "cp2x", -1682644749), to = new W(null, "line", "line", 212345235), uo = new W(null, "stimulus-threshold", "stimulus-threshold", -1548749389), vo = new W("comportexviz.viz-canvas", "pbits", "comportexviz.viz-canvas/pbits", 1988133491), wo = new W(null, "active-cells", "active-cells", -1277925485), xo = new W(null, "g.plot-space", "g.plot-space", -1258275917), 
yo = new W(null, "sp-perm-inc", "sp-perm-inc", -2023460909), zo = new W(null, "punish?", "punish?", -1890284492), Ao = new W(null, "h", "h", 1109658740), Bo = new W(null, "from", "from", 1815293044), Co = new W(null, "temporal-pooling-amp", "temporal-pooling-amp", 1075315892), Do = new W(null, "a#anim-faster", "a#anim-faster", -1294334764), eb = new W(null, "print-length", "print-length", 1931866356), Eo = new W(null, "max", "max", 61366548), Fo = new W(null, "initial-perm", "initial-perm", -411437740), 
Go = new W(null, "active", "active", 1895962068), Ho = new W(null, "activation-level", "activation-level", -1385123308), Io = new W(null, "overlaps", "overlaps", 1398230580), Jo = new W(null, "label", "label", 1718410804), Ko = new W(null, "id", "id", -1388402092), Lo = new W(null, "class", "class", -2030961996), Mo = new W(null, "predictive-cells", "predictive-cells", 1817662164), No = new W(null, "red", "red", -969428204), Oo = new W(null, "connected-perm", "connected-perm", 807367508), Po = new W(null, 
"blue", "blue", -622100620), Qo = new W(null, "extent", "extent", -186399820), Ro = new W(null, "catch-exception", "catch-exception", -1997306795), So = new W(null, "opts", "opts", 155075701), To = new W(null, "neighbour-radius", "neighbour-radius", -1736587083), Uo = new W(null, "init-value", "init-value", -374892331), Vo = new W("comportexviz.viz-canvas", "pcols", "comportexviz.viz-canvas/pcols", 1740826069), Wo = new W(null, "checked", "checked", -50955819), Xo = new W(null, "left-px", "left-px", 
-745883979), Yo = new W(null, "predictive-cells-by-column", "predictive-cells-by-column", 1557480149), Zo = new W(null, "ts-plot", "ts-plot", -1498457323), $o = new W(null, "global-inhibition", "global-inhibition", -936260811), ap = new W(null, "temporal-pooling-decay", "temporal-pooling-decay", -968469707), bp = new W(null, "pnodes", "pnodes", 1739080565), cp = new W(null, "prev", "prev", -1597069226), dp = new W(null, "svg", "svg", 856789142), ep = new W(null, "gap", "gap", 80255254), fp = new W(null, 
"changed?", "changed?", -437828330), gp = new W(null, "span.parameter-label", "span.parameter-label", -815265354), hp = new W(null, "length", "length", 588987862), ip = new W(null, "button#sim-stop", "button#sim-stop", 1477647862), jp = new W(null, "continue-block", "continue-block", -1852047850), kp = new W(null, "span#sim-reset-status", "span#sim-reset-status", 1741880118), lp = new W(null, "cp1y", "cp1y", 628283543), mp = new W(null, "div#comportex-controls", "div#comportex-controls", -1291722569), 
np = new W(null, "div#comportex-parameters", "div#comportex-parameters", 737276119), op = new W(null, "right", "right", -452581833), pp = new W(null, "ticks", "ticks", -406190313), qp = new W(null, "dw", "dw", -821060841), rp = new W(null, "redraw", "redraw", -1075394793), sp = new W(null, "display", "display", 242065432), tp = new W(null, "cell-ids", "cell-ids", -236000104), up = new W(null, "drawing", "drawing", 1181749528), vp = new W(null, "f", "f", -1597136552), wp = new W(null, "sx", "sx", 
-403071592), xp = new W(null, "cell-id", "cell-id", 1789875608), yp = new W(null, "saw-10-15", "saw-10-15", 953187768), zp = new W(null, "div#comportex-options", "div#comportex-options", -577804840), Ap = new W(null, "depth", "depth", 1768663640), Bp = new W(null, "br", "br", 934104792), Cp = new W(null, "rev-5-1", "rev-5-1", -252300392), Dp = new W(null, "define-me!", "define-me!", -268367591), Ep = new W(null, "x", "x", 2099068185), Fp = new W(null, "subs", "subs", -186681991), Gp = new W(null, 
"x1", "x1", -1863922247), Hp = new W(null, "bit-w-px", "bit-w-px", -531552775), Ip = new W(null, "form", "form", -1624062471), Jp = new W(null, "tag", "tag", -1290361223), Kp = new W(null, "predicted", "predicted", 2110738041), Lp = new W(null, "res", "res", -1395007879), Mp = new W(null, "sh", "sh", -682444007), Np = new W(null, "capture", "capture", -677031143), Op = new W(null, "sw", "sw", 833113913), Pp = new W(null, "domain", "domain", 1847214937), Qp = new W(null, "input", "input", 556931961), 
Rp = new W(null, "cp2y", "cp2y", 903335801), Sp = new W(null, "uuid", "uuid", -2145095719), Tp = new W(null, "seq", "seq", -1817803783), Up = new W(null, "cells", "cells", -985166822), Vp = new W(null, "keep-n", "keep-n", -176064454), Wp = new W(null, "first", "first", -644103046), Xp = new W(null, "change", "change", -1163046502), Yp = new W(null, "page-down", "page-down", -392838598), Zp = new W(null, "purple", "purple", -876021126), $p = new W(null, "end", "end", -268185958), aq = new W(null, 
"sp-perm-connected", "sp-perm-connected", -1835817957), bq = new W(null, "y2", "y2", -718691301), cq = new W(null, "circles?", "circles?", -1676300005), dq = new W(null, "temporal-pooling-cells", "temporal-pooling-cells", 85401979), eq = new W(null, "jump-6-12", "jump-6-12", -1217478725), fq = new W(null, "bursting-columns", "bursting-columns", -896519076), cr = new W("comportexviz.viz-canvas", "cache", "comportexviz.viz-canvas/cache", 33193148), dr = new W(null, "force-update?", "force-update?", 
137364796), er = new W(null, "duty-cycle-period", "duty-cycle-period", -962296356), fr = new W(null, "min-threshold", "min-threshold", -1451318820), gr = new W(null, "last", "last", 1105735132), hr = new W("org.nfrac.comportex.pooling", "ff-index", "org.nfrac.comportex.pooling/ff-index", -1375909380), ir = new W(null, "permanences", "permanences", -1713734116), jr = new W("comportexviz.viz-canvas", "ocols", "comportexviz.viz-canvas/ocols", -2081286436), kr = new W(null, "rect", "rect", -108902628), 
lr = new W(null, "step", "step", 1288888124), mr = new W(null, "p", "p", 151049309), nr = new W(null, "x2", "x2", -1362513475), or = new W(null, "run-6-10", "run-6-10", 295893118), pr = new W(null, "href", "href", -793805698), qr = new W(null, "none", "none", 1333468478), rr = new W(null, "bucket", "bucket", 1126218366), sr = new W(null, "elements-per-dt", "elements-per-dt", 703850270), tr = new W(null, "col-d-px", "col-d-px", -985327682), ur = new W(null, "bit-shrink", "bit-shrink", -1161684994), 
vr = new W(null, "range", "range", 1639692286), wr = new W(null, "height", "height", 1025178622), xr = new W(null, "select", "select", 1147833503), yr = new W(null, "promote", "promote", -1158882145), zr = new W(null, "skip", "skip", 602715391), Ar = new W(null, "cell-r-px", "cell-r-px", 423637311), Br = new W(null, "left", "left", -399115937), ej = new W("cljs.core", "not-found", "cljs.core/not-found", -1572889185), Cr = new W(null, "text", "text", -1790561697), Dr = new W(null, "element-w", "element-w", 
2089708127), Er = new W(null, "span", "span", 1394872991), Fr = new W(null, "margin", "margin", -995903681), Gr = new W(null, "data", "data", -232669377);
function Hr(a, b) {
  var c = S.j(qj, a, b);
  return Sd(c, Yg.h(function(a) {
    return function(b) {
      return a === b;
    };
  }(c), b));
}
var Ir = function() {
  function a(a, b) {
    return N(a) < N(b) ? Ue.j(fe, b, a) : Ue.j(fe, a, b);
  }
  var b = null, c = function() {
    function a(c, d, h) {
      var l = null;
      2 < arguments.length && (l = K(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      a = Hr(N, fe.k(d, c, K([a], 0)));
      return Ue.j(ah, F(a), G(a));
    }
    a.w = 2;
    a.n = function(a) {
      var c = F(a);
      a = H(a);
      var d = F(a);
      a = G(a);
      return b(c, d, a);
    };
    a.k = b;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 0:
        return hj;
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.k(b, e, K(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.w = 2;
  b.n = c.n;
  b.p = function() {
    return hj;
  };
  b.g = function(a) {
    return a;
  };
  b.h = a;
  b.k = c.k;
  return b;
}(), Jr = function() {
  function a(a, b) {
    for (;;) {
      if (N(b) < N(a)) {
        var c = a;
        a = b;
        b = c;
      } else {
        return Ue.j(function(a, b) {
          return function(a, c) {
            return Ne(b, c) ? a : ne.h(a, c);
          };
        }(a, b), a, a);
      }
    }
  }
  var b = null, c = function() {
    function a(b, d, h) {
      var l = null;
      2 < arguments.length && (l = K(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      a = Hr(function(a) {
        return-N(a);
      }, fe.k(e, d, K([a], 0)));
      return Ue.j(b, F(a), G(a));
    }
    a.w = 2;
    a.n = function(a) {
      var b = F(a);
      a = H(a);
      var d = F(a);
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
        return c.k(b, e, K(arguments, 2));
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
}(), Kr = function() {
  function a(a, b) {
    return N(a) < N(b) ? Ue.j(function(a, c) {
      return Ne(b, c) ? ne.h(a, c) : a;
    }, a, a) : Ue.j(ne, a, b);
  }
  var b = null, c = function() {
    function a(b, d, h) {
      var l = null;
      2 < arguments.length && (l = K(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      return Ue.j(b, a, fe.h(e, d));
    }
    a.w = 2;
    a.n = function(a) {
      var b = F(a);
      a = H(a);
      var d = F(a);
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
        return c.k(b, e, K(arguments, 2));
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
    var b, c = a.length, e = this, f = 0, g = e.H = e.Qd = 0, h = e.jd = [];
    for (c || (a = [c++]);f < d;) {
      h[f] = f++;
    }
    for (f = 0;f < d;f++) {
      h[f] = h[g = y & g + a[f % c] + (b = h[f])], h[g] = b;
    }
    (e.Od = function(a) {
      for (var b, c = 0, f = e.H, g = e.Qd, h = e.jd;a--;) {
        b = h[f = y & f + 1], c = c * d + h[y & (h[f] = h[g = y & g + b]) + (h[g] = b)];
      }
      e.H = f;
      e.Qd = g;
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
    var y = [], P = l(h(f ? [a, r(b)] : 0 in arguments ? a : m(), 3), y), M = new g(y);
    l(r(M.jd), b);
    c.random = function() {
      for (var a = M.Od(e), b = s, c = 0;a < w;) {
        a = (a + c) * d, b *= d, c = M.Od(1);
      }
      for (;a >= A;) {
        a /= 2, b /= 2, c >>>= 1;
      }
      return(a + c) / b;
    };
    return P;
  };
  l(c.random(), b);
})(this, [], Math, 256, 6, 52);
function Lr(a) {
  if (a ? a.pd : a) {
    return a.pd();
  }
  var b;
  b = Lr[n(null == a ? null : a)];
  if (!b && (b = Lr._, !b)) {
    throw t("IRandom.-next-double", a);
  }
  return b.call(null, a);
}
var Mr = function() {
  function a(a, b) {
    if (a ? a.rd : a) {
      return a.rd(0, b);
    }
    var c;
    c = Mr[n(null == a ? null : a)];
    if (!c && (c = Mr._, !c)) {
      throw t("IRandom.-next-int", a);
    }
    return c.call(null, a, b);
  }
  function b(a) {
    if (a ? a.qd : a) {
      return a.qd();
    }
    var b;
    b = Mr[n(null == a ? null : a)];
    if (!b && (b = Mr._, !b)) {
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
function Nr(a, b, c) {
  return b + (a.p ? a.p() : a.call(null)) * (c - b);
}
function Or(a, b, c, d) {
  this.seed = a;
  this.Ra = b;
  this.D = c;
  this.v = d;
  this.q = 2229667594;
  this.G = 8192;
  2 < arguments.length ? (this.D = c, this.v = d) : this.v = this.D = null;
}
k = Or.prototype;
k.K = function(a, b) {
  return yb.j(this, b, null);
};
k.L = function(a, b, c) {
  switch(b instanceof W ? b.ea : null) {
    case "random-double":
      return this.Ra;
    case "seed":
      return this.seed;
    default:
      return Q.j(this.v, b, c);
  }
};
k.N = function(a, b, c) {
  return Aj(b, function() {
    return function(a) {
      return Aj(b, Gj, "", " ", "", c, a);
    };
  }(this), "#cemerick.pprng.SeededRandom{", ", ", "}", c, bg.h(new U(null, 2, 5, V, [new U(null, 2, 5, V, [On, this.seed], null), new U(null, 2, 5, V, [lo, this.Ra], null)], null), this.v));
};
k.I = function() {
  return this.D;
};
k.T = function() {
  return 2 + N(this.v);
};
k.P = function() {
  var a = this.A;
  return null != a ? a : this.A = a = yf(this);
};
k.M = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && Yh(this, b) : b) ? !0 : !1;
};
k.Sa = function(a, b) {
  return Ne(new fj(null, new p(null, 2, [On, null, lo, null], null), null), b) ? ie.h(Ud(ah.h(ei, this), this.D), b) : new Or(this.seed, this.Ra, this.D, kg(ie.h(this.v, b)), null);
};
k.va = function(a, b, c) {
  return q(X.h ? X.h(On, b) : X.call(null, On, b)) ? new Or(c, this.Ra, this.D, this.v, null) : q(X.h ? X.h(lo, b) : X.call(null, lo, b)) ? new Or(this.seed, c, this.D, this.v, null) : new Or(this.seed, this.Ra, this.D, R.j(this.v, b, c), null);
};
k.Q = function() {
  return E(bg.h(new U(null, 2, 5, V, [new U(null, 2, 5, V, [On, this.seed], null), new U(null, 2, 5, V, [lo, this.Ra], null)], null), this.v));
};
k.J = function(a, b) {
  return new Or(this.seed, this.Ra, b, this.v, this.A);
};
k.S = function(a, b) {
  return te(b) ? Bb(this, v.h(b, 0), v.h(b, 1)) : Ue.j(qb, this, b);
};
k.pd = function() {
  return this.Ra.p ? this.Ra.p() : this.Ra.call(null);
};
k.qd = function() {
  return rf(Nr(this.Ra, -2147483648, 2147483647));
};
k.rd = function(a, b) {
  return rf(Nr(this.Ra, 0, b));
};
var Pr = function() {
  function a(a, b) {
    return Mr.h(a, b);
  }
  function b(a) {
    return Mr.g(a);
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
function Qr(a) {
  return Math.round.g ? Math.round.g(a) : Math.round.call(null, a);
}
var Rr = function() {
  function a(a) {
    Math.seedrandom.g ? Math.seedrandom.g(a) : Math.seedrandom.call(null, a);
    Math.seedrandom.g ? Math.seedrandom.g(a) : Math.seedrandom.call(null, a);
    return new Or(a, Math.random);
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
}().p(), Sr = function() {
  function a(a, b) {
    if (!(a < b)) {
      throw Error("Assert failed: " + u.g(zg.k(K([Ef(new Cd(null, "\x3c", "\x3c", 993667236, null), new Cd(null, "lower", "lower", -1534114948, null), new Cd(null, "upper", "upper", 1886775433, null))], 0))));
    }
    return a + Lr(Rr) * (b - a);
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
function Tr(a) {
  return 0 + Pr.h(Rr, a - 0);
}
function Ur(a) {
  a = Cg.j(Ef, Sg.g(function() {
    return Lr(Rr);
  }), a);
  return Cg.h(ce, Te.h(F, a));
}
function Vr(a, b) {
  return Ue.j(function(b, d) {
    return q(a.g ? a.g(d) : a.call(null, d)) ? b + 1 : b;
  }, 0, b);
}
function Wr(a, b) {
  return eg(Ue.j(function(a, b) {
    var e = O.j(b, 0, null), f = O.j(b, 1, null);
    return gg.j(a, e, Oc(f));
  }, Mc(ei), eg(Ue.j(function(b, d) {
    var e = O.j(d, 0, null), f = O.j(d, 1, null), g = a.h ? a.h(e, f) : a.call(null, e, f), h = Q.j(b, g, Mc(ei));
    return gg.j(b, g, gg.j(h, e, f));
  }, Mc(ei), b))));
}
function Xr(a) {
  return eg(Ue.j(function(a, c) {
    var d = O.j(c, 0, null), e = O.j(c, 1, null);
    return gg.j(a, d, Oc(e));
  }, Mc(ei), eg(Ue.j(function(a, c) {
    var d = F.g ? F.g(c) : F.call(null, c), e = Q.j(a, d, Mc(hj));
    return gg.j(a, d, fg.h(e, c));
  }, Mc(ei), a))));
}
function Yr(a, b, c) {
  return fb(E(b)) ? a : eg(Ue.j(function(a, b) {
    return gg.j(a, b, function() {
      var f = Q.h(a, b);
      return c.g ? c.g(f) : c.call(null, f);
    }());
  }, Mc(a), b));
}
function Zr(a, b) {
  return ah.h(null == b ? null : ob(b), bh.h(function(b) {
    var d = O.j(b, 0, null);
    b = O.j(b, 1, null);
    return new U(null, 2, 5, V, [d, a.g ? a.g(b) : a.call(null, b)], null);
  }, b));
}
;var $r = he([fk, vk, Bl, tm, Cm, Ln, zo, Fo, Oo, Ap, fr], [.1, 22, 5, 15, .1, 12, !0, .11, .5, 8, 8]);
function as(a, b) {
  var c = O.j(b, 0, null);
  return O.j(b, 1, null) + c * a;
}
function bs(a, b, c) {
  b = as(b, c);
  return dh.h(a, new U(null, 2, 5, V, [am, b], null));
}
function cs(a, b, c, d, e, f) {
  var g = io.g(a), h = Cm.g(g), l = fk.g(g), m = Oo.g(g), r = dh.h(a, new U(null, 7, 5, V, [Y, b, Up, c, Zm, d, bn], null)), s = Wr(function(a, b, c, d) {
    return function(a, g) {
      return q(e.g ? e.g(a) : e.call(null, a)) ? zr : q(f.g ? f.g(a) : f.call(null, a)) ? 1 === g ? zr : g >= d - b ? yr : Pn : g <= c ? Qj : g < d + c ? Vn : ek;
    };
  }(g, h, l, m, r), r), w = bj.k(K([zr.g(s), Zr(function(a, b) {
    return function(a) {
      a += b;
      return 1 > a ? a : 1;
    };
  }(g, h, l, m, r, s), Pn.g(s)), Zr(function(a, b) {
    return function(a) {
      a += b;
      return 1 > a ? a : 1;
    };
  }(g, h, l, m, r, s), yr.g(s)), Zr(function(a, b, c) {
    return function(a) {
      return a - c;
    };
  }(g, h, l, m, r, s), ek.g(s)), Zr(function(a, b, c) {
    return function(a) {
      return a - c;
    };
  }(g, h, l, m, r, s), Vn.g(s))], 0)), A = new U(null, 3, 5, V, [b, c, d], null), y = rg.h(as, Ap.g(g)), B = Cg.h(y, $i(yr.g(s))), D = Cg.h(y, $i(Vn.g(s))), g = Yr(Yr(am.g(a), B, function(a, b, c, d, e, f, g, h) {
    return function(a) {
      return fe.h(a, h);
    };
  }(g, h, l, m, r, s, w, A, y, B, D)), D, function(a, b, c, d, e, f, g, h) {
    return function(a) {
      return ne.h(a, h);
    };
  }(g, h, l, m, r, s, w, A, y, B, D));
  return R.j(fh(a, new U(null, 7, 5, V, [Y, b, Up, c, Zm, d, bn], null), w), am, g);
}
function ds(a, b, c, d, e) {
  var f = io.g(a), g = rg.h(as, Ap.g(f)), h = Cg.h(g, e), l = new U(null, 3, 5, V, [b, c, d], null);
  return gh.O(gh.j(a, new U(null, 7, 5, V, [Y, b, Up, c, Zm, d, bn], null), function() {
    return function(a) {
      return S.j(ie, a, e);
    };
  }(f, g, h, l)), new U(null, 1, 5, V, [am], null), Yr, h, function(a, b, c, d) {
    return function(a) {
      return ne.h(a, d);
    };
  }(f, g, h, l));
}
function es(a, b, c, d, e) {
  var f = io.g(a), g = Fo.g(f), h = Oo.g(f), l = vk.g(f), m = rg.h(as, Ap.g(f)), r = Cg.h(m, e), s = new U(null, 3, 5, V, [b, c, d], null), w = dh.h(a, new U(null, 7, 5, V, [Y, b, Up, c, Zm, d, bn], null));
  e = bj.k(K([w, pj(e, Rg.g(g))], 0));
  a = fh(a, new U(null, 7, 5, V, [Y, b, Up, c, Zm, d, bn], null), e);
  f = g >= h ? gh.O(a, new U(null, 1, 5, V, [am], null), Yr, r, function(a, b, c, d, e, f, g, h) {
    return function(a) {
      return fe.h(a, h);
    };
  }(a, f, g, h, l, m, r, s, w, e)) : a;
  return N(e) > l ? ds(f, b, c, d, Pg.h(N(e) - l, $i(Te.h(Af, e)))) : f;
}
function fs(a, b) {
  return new p(null, 2, [Ko, new U(null, 2, 5, V, [b, a], null), Zm, ee], null);
}
function gs(a, b) {
  var c = ye(b) ? S.h(vg, b) : b, c = Q.h(c, Ap);
  return R.j(a, Up, bh.j(fs, tj.g(c), Rg.g(Ko.g(a))));
}
function hs(a, b, c) {
  return Vr(function(a) {
    var e = O.j(a, 0, null);
    return(a = O.j(a, 1, null) >= c) ? b.g ? b.g(e) : b.call(null, e) : a;
  }, bn.g(a));
}
function is(a, b, c, d) {
  return Bg.h(function(a, f) {
    var g = hs(f, b, d);
    return g >= c ? R.k(f, eo, g, K([wl, a], 0)) : null;
  }, Zm.g(a));
}
function js(a, b) {
  var c = io.g(a), d = Ln.g(c), e = Ap.g(c);
  return ah.h(hj, tg.h(function(a, b) {
    return function(a) {
      var c = O.j(a, 0, null);
      if (O.j(a, 1, null) >= b) {
        a = O.j(c, 0, null);
        var d = O.j(c, 1, null);
        O.j(c, 2, null);
        return new U(null, 2, 5, V, [a, d], null);
      }
      return null;
    };
  }(c, d, e), uj(Wg.k(rg.j(bs, a, e), K([b], 0)))));
}
function ks(a, b) {
  var c = $i(b), d = Y.g(a);
  return eg(Ue.j(function(a, b) {
    return function(c, d) {
      var l = b.g ? b.g(d) : b.call(null, d), m = xm.g(Yj.g(l));
      return Ue.j(function() {
        return function(a, b) {
          return gg.j(a, b, Q.j(a, b, 0) + 1);
        };
      }(l, m, a, b), c, $i(m));
    };
  }(c, d), Mc(ei), c));
}
function ls(a, b, c, d) {
  c = bj.k(K([c, d], 0));
  return ah.h(ei, Cg.h(function(b) {
    return function(c) {
      var d = O.h(Y.g(a), c), h = b.g ? b.g(c) : b.call(null, c), l = oe(h), d = l ? Cg.h(Ko, Up.g(d)) : h;
      return new U(null, 2, 5, V, [c, new p(null, 2, [tp, d, Vm, l], null)], null);
    };
  }(c), b));
}
function ms(a, b, c) {
  a = is(a, b, 0, c);
  return E(a) ? S.j(qj, eo, a) : new p(null, 2, [wl, null, eo, 0], null);
}
function ns(a, b, c) {
  c = fr.g(c);
  var d = Cg.h(function() {
    return function(a) {
      return R.j(ms(a, b, 0), xp, Ko.g(a));
    };
  }(c), a), d = S.j(qj, eo, d);
  return eo.g(d) >= c ? d : new p(null, 1, [xp, Ko.g(S.j(rj, qg.h(N, Zm), a))], null);
}
function os(a, b, c) {
  var d = io.g(a), e = Bl.g(d), f = vk.g(d), g = fr.g(d), h = Oo.g(d);
  a = dh.h(a, new U(null, 5, 5, V, [Y, b, Up, c, Zm], null));
  if (N(a) >= e) {
    return S.j(rj, function(a, b, c, d, e, f) {
      return function(g) {
        g = bn.g(Q.h(f, g));
        return Vr(function(a, b, c, d, e, f) {
          return function(a) {
            return a >= f;
          };
        }(g, a, b, c, d, e, f), ci(g)) + N(g) / c;
      };
    }(d, e, f, g, h, a), tj.g(N(a)));
  }
  d = mg(function(a, b, c, d) {
    return function(a) {
      var b = O.j(a, 0, null);
      a = O.j(a, 1, null);
      return N(bn.g(a)) < d ? b : null;
    };
  }(d, e, f, g, h, a), sg(xh, a));
  return q(d) ? d : N(a);
}
function ps(a, b, c, d) {
  a = bn.g(a);
  b = ah.h(ij([b]), Cg.h(F, $i(a)));
  return Pg.h(d, Ur(Yg.h(function(a, b) {
    return function(a) {
      var c = O.j(a, 0, null);
      O.j(a, 1, null);
      return b.g ? b.g(c) : b.call(null, c);
    };
  }(a, b), c)));
}
function qs(a, b, c, d) {
  var e = io.g(a), f = Ln.g(e), g = Oo.g(e), h = dh.h(a, new U(null, 4, 5, V, [Y, b, Up, c], null)), l = is(h, d, f, g);
  return Ue.j(function() {
    return function(a, e) {
      var f = wl.g(e);
      return cs(a, b, c, f, d, pg(!1));
    };
  }(e, f, g, h, l), a, l);
}
function rs(a, b, c, d) {
  b = Kr.h(d, b);
  return Ue.j(function() {
    return function(a, b) {
      var d = O.j(b, 0, null), h = O.j(b, 1, null);
      return qs(a, d, h, c);
    };
  }(b), a, b);
}
function ss(a, b, c, d, e, f) {
  return q(c) ? (O.j(c, 0, null), b = O.j(c, 1, null), b = Q.h(Up.g(a), b), qb(Fd, ns(new U(null, 1, 5, V, [b], null), e, f))) : q(b) ? qb(Fd, ns(Up.g(a), e, f)) : function(b) {
    return function l(c) {
      return new If(null, function(b) {
        return function() {
          for (;;) {
            var d = E(c);
            if (d) {
              if (T(d)) {
                var f = x(d), g = N(f), y = Uf(g);
                a: {
                  for (var B = 0;;) {
                    if (B < g) {
                      var D = v.h(f, B), I = D;
                      O.j(I, 0, null);
                      I = O.j(I, 1, null);
                      I = O.h(Up.g(a), I);
                      D = R.j(ms(I, e, b), xp, D);
                      y.add(D);
                      B += 1;
                    } else {
                      f = !0;
                      break a;
                    }
                  }
                  f = void 0;
                }
                return f ? Xf(y.R(), l(z(d))) : Xf(y.R(), null);
              }
              f = y = F(d);
              O.j(f, 0, null);
              f = O.j(f, 1, null);
              f = O.h(Up.g(a), f);
              return Sd(R.j(ms(f, e, b), xp, y), l(G(d)));
            }
            return null;
          }
        };
      }(b), null, null);
    };
  }(Oo.g(f))(d);
}
function ts(a, b, c, d, e, f, g) {
  if (q(d)) {
    return a = cs(a, b, c, d, pg(!1), g), q(e) ? (e = new U(null, 6, 5, V, [Y, b, Up, c, Zm, d], null), g = hs(e, g, 0), g = tm.g(io.g(a)) - g, b = 0 < g ? es(a, b, c, d, ps(e, b, f, g)) : a) : b = a, b;
  }
  d = io.g(a);
  g = tm.g(d);
  e = fr.g(d);
  d = os(a, b, c);
  f = ps(new p(null, 1, [bn, ei], null), b, f, g);
  N(f) < e ? b = a : (g = dh.h(a, new U(null, 7, 5, V, [Y, b, Up, c, Zm, d, bn], null)), a = E(g) ? ds(a, b, c, d, $i(g)) : a, b = es(a, b, c, d, f));
  return b;
}
function us(a, b, c, d, e, f, g) {
  var h = cn.h(a, hj), l = io.g(a);
  a = R.k(a, cn, hj, K([Xl, ei], 0));
  b = Ve(function(a, b, c) {
    return function(f, h, l) {
      var B = ye(l) ? S.h(vg, l) : l, D = Q.h(B, tp), I = dh.h(f, new U(null, 2, 5, V, [Y, h], null)), P = d.g ? d.g(h) : d.call(null, h), M = F(g.g ? g.g(h) : g.call(null, h)), ea = ss(I, P, M, D, e, b);
      return Ue.j(function(a, b, c, d, f, g, l, r) {
        return function(a, c) {
          var d = ye(c) ? S.h(vg, c) : c, f = Q.h(d, wl), d = Q.h(d, xp);
          O.j(d, 0, null);
          d = O.j(d, 1, null);
          return gh.O(gh.m(ts(a, h, d, f, b, r, e), new U(null, 1, 5, V, [cn], null), fe, new U(null, 2, 5, V, [h, d], null)), new U(null, 1, 5, V, [Xl], null), R, new U(null, 2, 5, V, [h, d], null), f);
        };
      }(I, P, M, ea, l, B, D, a, b, c), f, ea);
    };
  }(h, l, a), a, b);
  return q(zo.g(l)) ? rs(b, c, e, f) : b;
}
function vs(a, b, c) {
  var d = wo.h(a, hj), e = Mo.h(a, hj), f = Yo.h(a, ei), g = dq.h(a, hj), h = $i(Hl.h(a, ei)), l = dj(Mj(F, g), h);
  b = ls(a, b, f, l);
  var g = jj(tg.h(function() {
    return function(a) {
      var b = O.j(a, 0, null);
      a = O.j(a, 1, null);
      return q(Vm.g(a)) ? b : null;
    };
  }(d, e, f, g, h, l, b), b)), m = jj(Wg.k(tp, K([ci(b)], 0))), h = jj(Wg.k(qg.h(tp, b), K([h], 0))), r = jj(Wg.k(tp, K([ci(S.j(ie, b, g))], 0))), s = js(a, m), w = Xr(s);
  a = R.k(a, wo, m, K([fq, g, Im, r, dq, h, Mo, s, Yo, w, Ml, f], 0));
  return q(c) ? us(a, b, m, g, d, e, l) : a;
}
;function ws(a) {
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
;var xs;
a: {
  var ys = aa.navigator;
  if (ys) {
    var zs = ys.userAgent;
    if (zs) {
      xs = zs;
      break a;
    }
  }
  xs = "";
}
;var As = -1 != xs.indexOf("Opera") || -1 != xs.indexOf("OPR"), Bs = -1 != xs.indexOf("Trident") || -1 != xs.indexOf("MSIE"), Cs = -1 != xs.indexOf("Gecko") && -1 == xs.toLowerCase().indexOf("webkit") && !(-1 != xs.indexOf("Trident") || -1 != xs.indexOf("MSIE")), Ds = -1 != xs.toLowerCase().indexOf("webkit");
function Es() {
  var a = aa.document;
  return a ? a.documentMode : void 0;
}
var Fs = function() {
  var a = "", b;
  if (As && aa.opera) {
    return a = aa.opera.version, ia(a) ? a() : a;
  }
  Cs ? b = /rv\:([^\);]+)(\)|;)/ : Bs ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : Ds && (b = /WebKit\/(\S+)/);
  b && (a = (a = b.exec(xs)) ? a[1] : "");
  return Bs && (b = Es(), b > parseFloat(a)) ? String(b) : a;
}(), Gs = {};
function Hs(a) {
  var b;
  if (!(b = Gs[a])) {
    b = 0;
    for (var c = String(Fs).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), f = 0;0 == b && f < e;f++) {
      var g = c[f] || "", h = d[f] || "", l = RegExp("(\\d*)(\\D*)", "g"), m = RegExp("(\\d*)(\\D*)", "g");
      do {
        var r = l.exec(g) || ["", "", ""], s = m.exec(h) || ["", "", ""];
        if (0 == r[0].length && 0 == s[0].length) {
          break;
        }
        b = Ea(0 == r[1].length ? 0 : parseInt(r[1], 10), 0 == s[1].length ? 0 : parseInt(s[1], 10)) || Ea(0 == r[2].length, 0 == s[2].length) || Ea(r[2], s[2]);
      } while (0 == b);
    }
    b = Gs[a] = 0 <= b;
  }
  return b;
}
var Is = aa.document, Js = Is && Bs ? Es() || ("CSS1Compat" == Is.compatMode ? parseInt(Fs, 10) : 5) : void 0;
var Ks = !Bs || Bs && 9 <= Js;
!Cs && !Bs || Bs && Bs && 9 <= Js || Cs && Hs("1.9.1");
var Ls = Bs && !Hs("9");
function Ms(a) {
  return a ? new Ns(Os(a)) : Na || (Na = new Ns);
}
function Ps(a, b) {
  var c = b && "*" != b ? b.toUpperCase() : "";
  return a.querySelectorAll && a.querySelector && c ? a.querySelectorAll(c + "") : a.getElementsByTagName(c || "*");
}
function Qs(a, b) {
  Ha(b, function(b, d) {
    "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in Rs ? a.setAttribute(Rs[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b;
  });
}
var Rs = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", frameborder:"frameBorder", height:"height", maxlength:"maxLength", role:"role", rowspan:"rowSpan", type:"type", usemap:"useMap", valign:"vAlign", width:"width"};
function Ss(a, b, c, d) {
  function e(c) {
    c && b.appendChild(ha(c) ? a.createTextNode(c) : c);
  }
  for (;d < c.length;d++) {
    var f = c[d];
    !ca(f) || ja(f) && 0 < f.nodeType ? e(f) : Qa(Ts(f) ? Ra(f) : f, e);
  }
}
function Us(a) {
  return void 0 != a.firstElementChild ? a.firstElementChild : Vs(a.firstChild);
}
function Vs(a) {
  for (;a && 1 != a.nodeType;) {
    a = a.nextSibling;
  }
  return a;
}
function Os(a) {
  return 9 == a.nodeType ? a : a.ownerDocument || a.document;
}
var Ws = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, Xs = {IMG:" ", BR:"\n"};
function Ys(a) {
  if (Ls && "innerText" in a) {
    a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
  } else {
    var b = [];
    Zs(a, b, !0);
    a = b.join("");
  }
  a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
  a = a.replace(/\u200B/g, "");
  Ls || (a = a.replace(/ +/g, " "));
  " " != a && (a = a.replace(/^\s*/, ""));
  return a;
}
function Zs(a, b, c) {
  if (!(a.nodeName in Ws)) {
    if (3 == a.nodeType) {
      c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
    } else {
      if (a.nodeName in Xs) {
        b.push(Xs[a.nodeName]);
      } else {
        for (a = a.firstChild;a;) {
          Zs(a, b, c), a = a.nextSibling;
        }
      }
    }
  }
}
function Ts(a) {
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
function Ns(a) {
  this.Xb = a || aa.document || document;
}
k = Ns.prototype;
k.Hb = function(a, b, c) {
  var d = this.Xb, e = arguments, f = e[0], g = e[1];
  if (!Ks && g && (g.name || g.type)) {
    f = ["\x3c", f];
    g.name && f.push(' name\x3d"', ra(g.name), '"');
    if (g.type) {
      f.push(' type\x3d"', ra(g.type), '"');
      var h = {};
      Ka(h, g);
      delete h.type;
      g = h;
    }
    f.push("\x3e");
    f = f.join("");
  }
  f = d.createElement(f);
  g && (ha(g) ? f.className = g : "array" == n(g) ? f.className = g.join(" ") : Qs(f, g));
  2 < e.length && Ss(d, f, e, 2);
  return f;
};
k.createElement = function(a) {
  return this.Xb.createElement(a);
};
k.createTextNode = function(a) {
  return this.Xb.createTextNode(String(a));
};
k.appendChild = function(a, b) {
  a.appendChild(b);
};
k.append = function(a, b) {
  Ss(Os(a), a, arguments, 1);
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
var $s, at, bt, ct, dt, et, ft, gt, ht, it, jt, kt, lt, mt, nt, ot, pt = {}.hasOwnProperty;
gt = function(a) {
  console.log(a);
};
jt = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
it = /^(svg|g|rect|circle|clipPath|path|line|polygon|polyline|text|textPath)$/;
kt = /^\s+$/;
ht = /:(.+)/;
ot = {af:"http://www.w3.org/1999/xhtml", mf:"http://www.w3.org/1999/xlink", Ve:"http://www.w3.org/2000/svg", xml:"http://www.w3.org/XML/1998/namespace", nf:"http://www.w3.org/2000/xmlns"};
et = function(a) {
  var b, c;
  c = a.split(":");
  b = c[0];
  c = c[1];
  return null != c ? [ot[b] || b, c] : a.match(it) ? [ot.Ve, a] : [ot.af, a];
};
bt = function(a) {
  return ":*:" === a[0];
};
mt = function(a) {
  return null != a && a instanceof qt;
};
ct = function(a) {
  return null != a && !1;
};
$s = function(a) {
  return null != a && null != a.forEach;
};
dt = function(a) {
  return null != a && !$s(a) && !mt(a) && !ct(a) && a instanceof Object;
};
at = function(a) {
  return null != a && null != a.nodeType;
};
lt = function(a) {
  return null != a && null != a.substring;
};
ft = function(a) {
  return null != a && null != a.toFixed;
};
nt = function(a) {
  return 8 === a.nodeType || 3 === a.nodeType && a.textContent.match(kt);
};
function rt(a, b) {
  var c, d, e, f, g;
  if (null != b.style) {
    f = b.style;
    var h;
    h = [];
    for (g in f) {
      pt.call(f, g) && (c = f[g], h.push(a.style[Ga(g)] = c));
    }
    delete b.style;
  }
  if (null != b.properties) {
    f = b.properties;
    c = [];
    for (e in f) {
      pt.call(f, e) && (g = f[e], c.push(a[e] = g));
    }
    delete b.properties;
  }
  $s(b["class"]) && (a.setAttribute("class", b["class"].join(" ")), delete b["class"]);
  g = [];
  for (d in b) {
    pt.call(b, d) && (f = b[d], null != f ? (c = d.split(ht), e = c[0], c = c[1], null != c ? g.push(a.setAttributeNS(ot[e] || e, c, f)) : g.push(a.setAttribute(d, f))) : g.push(a.removeAttribute(d)));
  }
}
function st(a, b) {
  return null != b ? a.__singult_data__ = b : a.__singult_data__;
}
function tt(a) {
  return ft(a) ? a.toString() : $s(a) ? ut(a) : a;
}
function ut(a) {
  var b, c, d, e, f;
  f = a[0];
  d = dt(a[1]) ? [a[1], a.slice(2)] : [{}, a.slice(1)];
  a = d[0];
  d = d[1];
  e = f.match(jt);
  f = e[1];
  b = e[2];
  e = e[3];
  null != b && (a.id = b);
  null != e && (b = e.split("."), $s(a["class"]) ? a["class"] = a["class"].concat(b) : lt(a["class"]) ? a["class"] = b.concat([a["class"]]) : null == a["class"] && (a["class"] = b));
  f = et(f);
  b = f[0];
  f = f[1];
  c = [];
  d.forEach(function(a) {
    if (null != a) {
      return bt(a) ? a.slice(1).forEach(function(a) {
        return c.push(tt(a));
      }) : c.push(tt(a));
    }
  });
  return{Ie:b, tag:f, md:a, children:c};
}
function vt(a) {
  var b, c;
  if (mt(a)) {
    throw Error("Unify must be the first and only child of its parent.");
  }
  if (ct(a)) {
    return null;
  }
  if (lt(a)) {
    return document.createTextNode(a);
  }
  if (at(a)) {
    return a;
  }
  b = document.createElementNS(a.Ie, a.tag);
  rt(b, a.md);
  mt(c = a.children[0]) ? null != c.qa ? c.data.forEach(function(a) {
    var e;
    e = c.qa(a);
    st(e, a);
    return b.appendChild(e);
  }) : c.data.forEach(function(a) {
    var e;
    e = vt(tt(c.sa(a)));
    st(e, a);
    return b.appendChild(e);
  }) : a.children.forEach(function(a) {
    a = vt(a);
    if (null != a) {
      return b.appendChild(a);
    }
  });
  return b;
}
function qt(a, b, c, d, e, f, g) {
  this.data = a;
  this.sa = b;
  this.Ca = c;
  this.qa = d;
  this.update = e;
  this.Ba = f;
  this.re = g;
  return this;
}
function wt(a, b) {
  var c, d, e, f, g, h, l, m, r, s, w, A, y;
  g = b.qa || function(c) {
    c = vt(tt(b.sa(c)));
    a.appendChild(c);
    return c;
  };
  y = b.update || function(a, c) {
    return xt(a, tt(b.sa(c)));
  };
  h = b.Ba || function(b) {
    return a.removeChild(b);
  };
  r = b.Ca || function(a, b) {
    return b;
  };
  c = a.childNodes;
  f = function(a, b) {
    return "\x00" + r(a, b);
  };
  w = function(a, b) {
    return f(st(a), b);
  };
  s = function(a, c) {
    var d;
    if (b.re) {
      return d = y(a, c), st(d, c);
    }
    d = st(a);
    if (null != d.M ? !d.M(d, c) : d !== c) {
      return d = y(a, c), st(d, c);
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
      return d = g(a), st(d, a);
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
    return st(d, a);
  });
  for (d = b.data.length;d < c.length;) {
    h(c[d]);
  }
}
function xt(a, b) {
  var c, d, e, f;
  if (mt(b)) {
    wt(a, b);
  } else {
    if (!ct(b)) {
      if (a.nodeName.toLowerCase() !== b.tag.toLowerCase()) {
        throw gt(a), gt(b), Error("Cannot merge $e into node of different type");
      }
      rt(a, b.md);
      if (a.hasChildNodes()) {
        for (e = d = f = a.childNodes.length - 1;0 >= f ? 0 >= d : 0 <= d;e = 0 >= f ? ++d : --d) {
          c = a.childNodes[e], nt(c) && a.removeChild(c);
        }
      }
      if (mt(b.children[0])) {
        xt(a, b.children[0]);
      } else {
        if (a.childNodes.length > b.children.length) {
          for (e = c = d = a.childNodes.length - 1;0 >= d ? 0 >= c : 0 <= c;e = 0 >= d ? ++c : --c) {
            a.removeChild(a.childNodes[e]);
          }
        }
        for (e = 0;e < b.children.length;) {
          d = b.children[e] || "";
          c = a.childNodes[e];
          if (lt(d)) {
            null != c ? c.textContent = d : a.appendChild(document.createTextNode(d));
          } else {
            if (!ct(d)) {
              if (dt(d)) {
                null != c ? xt(c, d) : a.appendChild(vt(d));
              } else {
                throw gt(c), gt(d), Error("Cannot merge children");
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
;function yt(a, b, c, d, e, f, g, h, l) {
  this.data = a;
  this.sa = b;
  this.Ca = c;
  this.qa = d;
  this.update = e;
  this.Ba = f;
  this.La = g;
  this.D = h;
  this.v = l;
  this.q = 2229667594;
  this.G = 8192;
  7 < arguments.length ? (this.D = h, this.v = l) : this.v = this.D = null;
}
k = yt.prototype;
k.K = function(a, b) {
  return yb.j(this, b, null);
};
k.L = function(a, b, c) {
  switch(b instanceof W ? b.ea : null) {
    case "force-update?":
      return this.La;
    case "exit":
      return this.Ba;
    case "update":
      return this.update;
    case "enter":
      return this.qa;
    case "key-fn":
      return this.Ca;
    case "mapping":
      return this.sa;
    case "data":
      return this.data;
    default:
      return Q.j(this.v, b, c);
  }
};
k.N = function(a, b, c) {
  return Aj(b, function() {
    return function(a) {
      return Aj(b, Gj, "", " ", "", c, a);
    };
  }(this), "#singult.core.Unify{", ", ", "}", c, bg.h(new U(null, 7, 5, V, [new U(null, 2, 5, V, [Gr, this.data], null), new U(null, 2, 5, V, [lm, this.sa], null), new U(null, 2, 5, V, [ho, this.Ca], null), new U(null, 2, 5, V, [Tn, this.qa], null), new U(null, 2, 5, V, [Mm, this.update], null), new U(null, 2, 5, V, [El, this.Ba], null), new U(null, 2, 5, V, [dr, this.La], null)], null), this.v));
};
k.I = function() {
  return this.D;
};
k.T = function() {
  return 7 + N(this.v);
};
k.P = function() {
  var a = this.A;
  return null != a ? a : this.A = a = yf(this);
};
k.M = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && Yh(this, b) : b) ? !0 : !1;
};
k.Sa = function(a, b) {
  return Ne(new fj(null, new p(null, 7, [El, null, lm, null, Mm, null, Tn, null, ho, null, dr, null, Gr, null], null), null), b) ? ie.h(Ud(ah.h(ei, this), this.D), b) : new yt(this.data, this.sa, this.Ca, this.qa, this.update, this.Ba, this.La, this.D, kg(ie.h(this.v, b)), null);
};
k.va = function(a, b, c) {
  return q(X.h ? X.h(Gr, b) : X.call(null, Gr, b)) ? new yt(c, this.sa, this.Ca, this.qa, this.update, this.Ba, this.La, this.D, this.v, null) : q(X.h ? X.h(lm, b) : X.call(null, lm, b)) ? new yt(this.data, c, this.Ca, this.qa, this.update, this.Ba, this.La, this.D, this.v, null) : q(X.h ? X.h(ho, b) : X.call(null, ho, b)) ? new yt(this.data, this.sa, c, this.qa, this.update, this.Ba, this.La, this.D, this.v, null) : q(X.h ? X.h(Tn, b) : X.call(null, Tn, b)) ? new yt(this.data, this.sa, this.Ca, 
  c, this.update, this.Ba, this.La, this.D, this.v, null) : q(X.h ? X.h(Mm, b) : X.call(null, Mm, b)) ? new yt(this.data, this.sa, this.Ca, this.qa, c, this.Ba, this.La, this.D, this.v, null) : q(X.h ? X.h(El, b) : X.call(null, El, b)) ? new yt(this.data, this.sa, this.Ca, this.qa, this.update, c, this.La, this.D, this.v, null) : q(X.h ? X.h(dr, b) : X.call(null, dr, b)) ? new yt(this.data, this.sa, this.Ca, this.qa, this.update, this.Ba, c, this.D, this.v, null) : new yt(this.data, this.sa, this.Ca, 
  this.qa, this.update, this.Ba, this.La, this.D, R.j(this.v, b, c), null);
};
k.Q = function() {
  return E(bg.h(new U(null, 7, 5, V, [new U(null, 2, 5, V, [Gr, this.data], null), new U(null, 2, 5, V, [lm, this.sa], null), new U(null, 2, 5, V, [ho, this.Ca], null), new U(null, 2, 5, V, [Tn, this.qa], null), new U(null, 2, 5, V, [Mm, this.update], null), new U(null, 2, 5, V, [El, this.Ba], null), new U(null, 2, 5, V, [dr, this.La], null)], null), this.v));
};
k.J = function(a, b) {
  return new yt(this.data, this.sa, this.Ca, this.qa, this.update, this.Ba, this.La, b, this.v, this.A);
};
k.S = function(a, b) {
  return te(b) ? Bb(this, v.h(b, 0), v.h(b, 1)) : Ue.j(qb, this, b);
};
var At = function zt(b) {
  if (b instanceof yt) {
    var c = ye(b) ? S.h(vg, b) : b, d = Q.h(c, dr), e = Q.h(c, El), f = Q.h(c, Mm), g = Q.h(c, Tn), h = Q.h(c, ho), l = Q.h(c, lm), m = Q.h(c, Gr), r = function() {
      for (var b = [], c = E(m), d = null, e = 0, f = 0;;) {
        if (f < e) {
          var g = d.F(null, f);
          b.push(g);
          f += 1;
        } else {
          if (c = E(c)) {
            d = c, T(d) ? (c = x(d), f = z(d), d = c, e = N(c), c = f) : (c = F(d), b.push(c), c = H(d), d = null, e = 0), f = 0;
          } else {
            break;
          }
        }
      }
      return b;
    }();
    return new qt(r, function(b, c, d, e, f, g, h, l) {
      return function(b) {
        return zt(l.g ? l.g(b) : l.call(null, b));
      };
    }(b, c, d, e, f, g, h, l, m, r), h, g, f, e, d);
  }
  if (b instanceof W) {
    return Gf(b);
  }
  if (se(b)) {
    c = {};
    b = E(b);
    d = null;
    for (f = e = 0;;) {
      if (f < e) {
        h = d.F(null, f);
        g = O.j(h, 0, null);
        h = O.j(h, 1, null);
        g = zt(g);
        if ("string" !== typeof g) {
          throw "Cannot convert; JavaScript map keys must be strings";
        }
        c[g] = zt(h);
        f += 1;
      } else {
        if (b = E(b)) {
          if (T(b)) {
            e = x(b), b = z(b), d = e, e = N(e);
          } else {
            e = F(b);
            d = O.j(e, 0, null);
            e = O.j(e, 1, null);
            d = zt(d);
            if ("string" !== typeof d) {
              throw "Cannot convert; JavaScript map keys must be strings";
            }
            c[d] = zt(e);
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
  if (ye(b)) {
    c = [];
    c.push(":*:");
    b = E(b);
    d = null;
    for (f = e = 0;;) {
      if (f < e) {
        g = d.F(null, f), c.push(zt(g)), f += 1;
      } else {
        if (b = E(b)) {
          d = b, T(d) ? (b = x(d), f = z(d), d = b, e = N(b), b = f) : (b = F(d), c.push(zt(b)), b = H(d), d = null, e = 0), f = 0;
        } else {
          break;
        }
      }
    }
    return c;
  }
  if (pe(b)) {
    c = [];
    b = E(b);
    d = null;
    for (f = e = 0;;) {
      if (f < e) {
        g = d.F(null, f), c.push(zt(g)), f += 1;
      } else {
        if (b = E(b)) {
          d = b, T(d) ? (b = x(d), f = z(d), d = b, e = N(b), b = f) : (b = F(d), c.push(zt(b)), b = H(d), d = null, e = 0), f = 0;
        } else {
          break;
        }
      }
    }
    return c;
  }
  return b;
};
function Bt(a, b) {
  if (null == b) {
    return null;
  }
  var c;
  c = At(b);
  c = tt.g ? tt.g(c) : tt.call(null, c);
  return xt.h ? xt.h(a, c) : xt.call(null, a, c);
}
var Ct = function() {
  function a(a, d, e) {
    var f = null;
    2 < arguments.length && (f = K(Array.prototype.slice.call(arguments, 2), 0));
    return b.call(this, a, d, f);
  }
  function b(a, b, e) {
    var f = ye(e) ? S.h(vg, e) : e;
    e = Q.h(f, dr);
    var g = Q.h(f, El), h = Q.h(f, Mm), l = Q.h(f, Tn), f = Q.h(f, ho);
    return new yt(a, b, f, l, h, g, e);
  }
  a.w = 2;
  a.n = function(a) {
    var d = F(a);
    a = H(a);
    var e = F(a);
    a = G(a);
    return b(d, e, a);
  };
  a.k = b;
  return a;
}();
function Dt(a) {
  Bs && ba(a.cssText) ? a.cssText = ".goog-tabpane-clear { clear: both; height: 0px; overflow: hidden }" : a.innerHTML = ".goog-tabpane-clear { clear: both; height: 0px; overflow: hidden }";
}
;q("undefined" != typeof NodeList) && (NodeList.prototype.vd = !0, NodeList.prototype.Q = function() {
  return K.h(this, 0);
});
HTMLCollection.prototype.vd = !0;
HTMLCollection.prototype.Q = function() {
  return K.h(this, 0);
};
function Et(a) {
  if (a ? a.Mc : a) {
    return a.Mc(a);
  }
  var b;
  b = Et[n(null == a ? null : a)];
  if (!b && (b = Et._, !b)) {
    throw t("IDom.-\x3edom", a);
  }
  return b.call(null, a);
}
U.prototype.Mc = function() {
  var a;
  a = At(this);
  a = tt.g ? tt.g(a) : tt.call(null, a);
  return vt.g ? vt.g(a) : vt.call(null, a);
};
Et.string = function(a) {
  return Ft.g ? Ft.g(a) : Ft.call(null, a);
};
q("undefined" != typeof Node) && (Node.prototype.Mc = function() {
  return this;
});
var Ft = function() {
  function a(a, b) {
    return Et(b).querySelector(a);
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
}(), Gt = function() {
  function a(a, b) {
    var c = Et(a);
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
          c.appendChild(Os(c).createTextNode(String(b)));
        }
      }
    }
    return c;
  }
  function b(a) {
    a = Et(a);
    return Ys(a);
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
}(), Ht = function() {
  function a(a, b) {
    var c = Et(a), g = c.type;
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
    a = Et(a);
    return ws(a);
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
}(), It = function() {
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
var Jt;
function Kt(a) {
  var b = Jt;
  try {
    Jt = function() {
      var a = new p(null, 1, [Sj, !0], null);
      return xg.j ? xg.j(hj, $a, a) : xg.call(null, hj, $a, a);
    }();
    var c = a.p ? a.p() : a.call(null);
    ye(c) && xj.g(c);
    return new p(null, 2, [Lp, c, Ll, function() {
      var a = Jt;
      return L.g ? L.g(a) : L.call(null, a);
    }()], null);
  } finally {
    Jt = b;
  }
}
function Lt(a) {
  q(function() {
    var b = Jt;
    return q(b) ? fb(Sj.g(le(a))) : b;
  }()) && Ag.h(Jt, function(b) {
    return fe.h(b, a);
  });
}
ug.prototype.Ub = function() {
  Lt(this);
  return this.state;
};
function Mt(a, b, c, d, e, f, g, h) {
  this.state = a;
  this.wa = b;
  this.f = c;
  this.key = d;
  this.Ga = e;
  this.aa = f;
  this.D = g;
  this.v = h;
  this.q = 2229700362;
  this.G = 8194;
  6 < arguments.length ? (this.D = g, this.v = h) : this.v = this.D = null;
}
k = Mt.prototype;
k.K = function(a, b) {
  return yb.j(this, b, null);
};
k.L = function(a, b, c) {
  switch(b instanceof W ? b.ea : null) {
    case "watches":
      return this.aa;
    case "parent-watchables":
      return this.Ga;
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
  return Aj(b, function() {
    return function(a) {
      return Aj(b, Gj, "", " ", "", c, a);
    };
  }(this), "#reflex.core.ComputedObservable{", ", ", "}", c, bg.h(new U(null, 6, 5, V, [new U(null, 2, 5, V, [Pm, this.state], null), new U(null, 2, 5, V, [pm, this.wa], null), new U(null, 2, 5, V, [vp, this.f], null), new U(null, 2, 5, V, [xl, this.key], null), new U(null, 2, 5, V, [gm, this.Ga], null), new U(null, 2, 5, V, [Wj, this.aa], null)], null), this.v));
};
k.I = function() {
  return this.D;
};
k.T = function() {
  return 6 + N(this.v);
};
k.P = function() {
  var a = this.A;
  return null != a ? a : this.A = a = yf(this);
};
k.M = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && Yh(this, b) : b) ? !0 : !1;
};
k.Sa = function(a, b) {
  return Ne(new fj(null, new p(null, 6, [Wj, null, xl, null, gm, null, pm, null, Pm, null, vp, null], null), null), b) ? ie.h(Ud(ah.h(ei, this), this.D), b) : new Mt(this.state, this.wa, this.f, this.key, this.Ga, this.aa, this.D, kg(ie.h(this.v, b)), null);
};
k.va = function(a, b, c) {
  return q(X.h ? X.h(Pm, b) : X.call(null, Pm, b)) ? new Mt(c, this.wa, this.f, this.key, this.Ga, this.aa, this.D, this.v, null) : q(X.h ? X.h(pm, b) : X.call(null, pm, b)) ? new Mt(this.state, c, this.f, this.key, this.Ga, this.aa, this.D, this.v, null) : q(X.h ? X.h(vp, b) : X.call(null, vp, b)) ? new Mt(this.state, this.wa, c, this.key, this.Ga, this.aa, this.D, this.v, null) : q(X.h ? X.h(xl, b) : X.call(null, xl, b)) ? new Mt(this.state, this.wa, this.f, c, this.Ga, this.aa, this.D, this.v, 
  null) : q(X.h ? X.h(gm, b) : X.call(null, gm, b)) ? new Mt(this.state, this.wa, this.f, this.key, c, this.aa, this.D, this.v, null) : q(X.h ? X.h(Wj, b) : X.call(null, Wj, b)) ? new Mt(this.state, this.wa, this.f, this.key, this.Ga, c, this.D, this.v, null) : new Mt(this.state, this.wa, this.f, this.key, this.Ga, this.aa, this.D, R.j(this.v, b, c), null);
};
k.Q = function() {
  return E(bg.h(new U(null, 6, 5, V, [new U(null, 2, 5, V, [Pm, this.state], null), new U(null, 2, 5, V, [pm, this.wa], null), new U(null, 2, 5, V, [vp, this.f], null), new U(null, 2, 5, V, [xl, this.key], null), new U(null, 2, 5, V, [gm, this.Ga], null), new U(null, 2, 5, V, [Wj, this.aa], null)], null), this.v));
};
k.Rc = function() {
  for (var a = E(this.aa), b = null, c = 0, d = 0;;) {
    if (d < c) {
      var e = b.F(null, d);
      O.j(e, 0, null);
      e = O.j(e, 1, null);
      e.p ? e.p() : e.call(null);
      d += 1;
    } else {
      if (a = E(a)) {
        T(a) ? (c = x(a), a = z(a), b = c, c = N(c)) : (b = F(a), O.j(b, 0, null), e = O.j(b, 1, null), e.p ? e.p() : e.call(null), a = H(a), b = null, c = 0), d = 0;
      } else {
        return null;
      }
    }
  }
};
k.Qc = function(a, b, c) {
  return this.aa = R.j(this.aa, b, c);
};
k.Sc = function(a, b) {
  return this.aa = ie.h(this.aa, b);
};
k.J = function(a, b) {
  return new Mt(this.state, this.wa, this.f, this.key, this.Ga, this.aa, b, this.v, this.A);
};
k.S = function(a, b) {
  return te(b) ? Bb(this, v.h(b, 0), v.h(b, 1)) : Ue.j(qb, this, b);
};
k.Ub = function() {
  Lt(this);
  if (fb(this.wa)) {
    return this.state;
  }
  for (var a = Kt(this.f), b = ye(a) ? S.h(vg, a) : a, c = Q.h(b, Ll), d = Q.h(b, Lp), e = E(this.Ga), f = null, g = 0, h = 0;;) {
    if (h < g) {
      var l = f.F(null, h);
      Lc(l, this.key);
      h += 1;
    } else {
      if (e = E(e)) {
        f = e, T(f) ? (e = x(f), h = z(f), f = e, g = N(e), e = h) : (e = F(f), Lc(e, this.key), e = H(f), f = null, g = 0), h = 0;
      } else {
        break;
      }
    }
  }
  this.Ga = c;
  e = E(c);
  f = null;
  for (h = g = 0;;) {
    if (h < g) {
      l = f.F(null, h), Ij(l, this.key, function(a, b, c, d, e, f, g, h, l, r) {
        return function() {
          r.wa = !0;
          return Cc(r, null, null);
        };
      }(e, f, g, h, l, a, b, c, d, this)), h += 1;
    } else {
      var m = E(e);
      if (m) {
        l = m;
        if (T(l)) {
          e = x(l), h = z(l), f = e, g = N(e), e = h;
        } else {
          var r = F(l);
          Ij(r, this.key, function(a, b, c, d, e, f, g, h, l, r, m, J) {
            return function() {
              J.wa = !0;
              return Cc(J, null, null);
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
k.ce = !0;
k.P = function() {
  return this.key;
};
var Nt = function() {
  function a(a, d, e) {
    var f = null;
    2 < arguments.length && (f = K(Array.prototype.slice.call(arguments, 2), 0));
    return b.call(this, a, d, f);
  }
  function b(a, b, e) {
    if (E(a)) {
      var f = F(a);
      b.g ? b.g(f) : b.call(null, f);
    }
    return S.m(Ct, a, b, e);
  }
  a.w = 2;
  a.n = function(a) {
    var d = F(a);
    a = H(a);
    var e = F(a);
    a = G(a);
    return b(d, e, a);
  };
  a.k = b;
  return a;
}();
function Ot(a) {
  if (a ? a.Bd : a) {
    return a.Bd();
  }
  var b;
  b = Ot[n(null == a ? null : a)];
  if (!b && (b = Ot._, !b)) {
    throw t("PushbackReader.read-char", a);
  }
  return b.call(null, a);
}
function Pt(a, b) {
  if (a ? a.Cd : a) {
    return a.Cd(0, b);
  }
  var c;
  c = Pt[n(null == a ? null : a)];
  if (!c && (c = Pt._, !c)) {
    throw t("PushbackReader.unread", a);
  }
  return c.call(null, a, b);
}
function Qt(a, b, c) {
  this.Z = a;
  this.buffer = b;
  this.Zc = c;
}
Qt.prototype.Bd = function() {
  return 0 === this.buffer.length ? (this.Zc += 1, this.Z[this.Zc]) : this.buffer.pop();
};
Qt.prototype.Cd = function(a, b) {
  return this.buffer.push(b);
};
function Rt(a) {
  var b = !/[^\t\n\r ]/.test(a);
  return q(b) ? b : "," === a;
}
function St(a, b) {
  var c;
  !(c = !/[^0-9]/.test(b)) && (c = "+" === b || "-" === b) && (c = Ot(a), Pt(a, c), c = !/[^0-9]/.test(c));
  return c;
}
var Tt = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = K(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, 0, e);
  }
  function b(a, b) {
    throw Error(S.h(u, b));
  }
  a.w = 1;
  a.n = function(a) {
    F(a);
    a = G(a);
    return b(0, a);
  };
  a.k = b;
  return a;
}();
function Ut(a, b) {
  for (var c = new La(b), d = Ot(a);;) {
    var e;
    if (!(e = null == d || Rt(d))) {
      e = d;
      var f = "#" !== e;
      e = f ? (f = "'" !== e) ? (f = ":" !== e) ? Vt.g ? Vt.g(e) : Vt.call(null, e) : f : f : f;
    }
    if (e) {
      return Pt(a, d), c.toString();
    }
    c.append(d);
    d = Ot(a);
  }
}
function Wt(a) {
  for (;;) {
    var b = Ot(a);
    if ("\n" === b || "\r" === b || null == b) {
      return a;
    }
  }
}
var Xt = zj("^([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+))(N)?$"), Yt = zj("^([-+]?[0-9]+)/([0-9]+)$"), Zt = zj("^([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?$"), $t = zj("^[:]?([^0-9/].*/)?([^0-9/][^/]*)$");
function au(a, b) {
  var c = a.exec(b);
  return null != c && c[0] === b ? 1 === c.length ? c[0] : c : null;
}
function bu(a) {
  if (q(au(Xt, a))) {
    if (a = au(Xt, a), null != a[2]) {
      a = 0;
    } else {
      var b = q(a[3]) ? [a[3], 10] : q(a[4]) ? [a[4], 16] : q(a[5]) ? [a[5], 8] : q(a[6]) ? [a[7], parseInt(a[6], 10)] : [null, null], c = b[0];
      null == c ? a = null : (b = parseInt(c, b[1]), a = "-" === a[1] ? -b : b);
    }
  } else {
    q(au(Yt, a)) ? (a = au(Yt, a), a = parseInt(a[1], 10) / parseInt(a[2], 10)) : a = q(au(Zt, a)) ? parseFloat(a) : null;
  }
  return a;
}
var cu = zj("^[0-9A-Fa-f]{2}$"), du = zj("^[0-9A-Fa-f]{4}$");
function eu(a, b, c, d) {
  return q(yj(a, d)) ? d : Tt.k(b, K(["Unexpected unicode escape \\", c, d], 0));
}
function fu(a) {
  return String.fromCharCode(parseInt(a, 16));
}
function gu(a) {
  var b = Ot(a), c = "t" === b ? "\t" : "r" === b ? "\r" : "n" === b ? "\n" : "\\" === b ? "\\" : '"' === b ? '"' : "b" === b ? "\b" : "f" === b ? "\f" : null;
  q(c) ? a = c : "x" === b ? (c = (new La(Ot(a), Ot(a))).toString(), a = fu(eu(cu, a, b, c))) : "u" === b ? (c = (new La(Ot(a), Ot(a), Ot(a), Ot(a))).toString(), a = fu(eu(du, a, b, c))) : a = /[^0-9]/.test(b) ? Tt.k(a, K(["Unexpected unicode escape \\", b], 0)) : String.fromCharCode(b);
  return a;
}
function hu(a) {
  for (var b = Ot(a);;) {
    var c;
    c = b;
    c = Rt.g ? Rt.g(c) : Rt.call(null, c);
    if (q(c)) {
      b = Ot(a);
    } else {
      return b;
    }
  }
}
function iu(a, b) {
  for (var c = Mc(ee);;) {
    var d = hu(b);
    q(d) || Tt.k(b, K(["EOF while reading"], 0));
    if (a === d) {
      return Oc(c);
    }
    var e = function() {
      var a = d;
      return Vt.g ? Vt.g(a) : Vt.call(null, a);
    }();
    if (q(e)) {
      var f = e, e = function() {
        var a = d;
        return f.h ? f.h(b, a) : f.call(null, b, a);
      }()
    } else {
      Pt(b, d), e = ju.m ? ju.m(b, !0, null, !0) : ju.call(null, b, !0, null);
    }
    c = e === b ? c : fg.h(c, e);
  }
}
function ku(a, b) {
  return Tt.k(a, K(["Reader for ", b, " not implemented yet"], 0));
}
function lu(a, b) {
  var c = Ot(a), d = mu.g ? mu.g(c) : mu.call(null, c);
  if (q(d)) {
    return d.h ? d.h(a, b) : d.call(null, a, b);
  }
  d = nu.h ? nu.h(a, c) : nu.call(null, a, c);
  return q(d) ? d : Tt.k(a, K(["No dispatch macro for ", c], 0));
}
function ou(a, b) {
  return Tt.k(a, K(["Unmached delimiter ", b], 0));
}
function pu(a) {
  return S.h(Ef, iu(")", a));
}
function qu(a) {
  return iu("]", a);
}
function ru(a) {
  var b = iu("}", a), c = N(b);
  !ng(c) && Tt.k(a, K(["Map literal must contain an even number of forms"], 0));
  return S.h(vg, b);
}
function su(a, b) {
  for (var c = new La(b), d = Ot(a);;) {
    if (q(function() {
      var a = null == d;
      if (a || (a = Rt(d))) {
        return a;
      }
      a = d;
      return Vt.g ? Vt.g(a) : Vt.call(null, a);
    }())) {
      Pt(a, d);
      var e = c.toString(), c = bu(e);
      return q(c) ? c : Tt.k(a, K(["Invalid number format [", e, "]"], 0));
    }
    c.append(d);
    d = e = Ot(a);
  }
}
function tu(a) {
  for (var b = new La, c = Ot(a);;) {
    if (null == c) {
      return Tt.k(a, K(["EOF while reading"], 0));
    }
    if ("\\" === c) {
      b.append(gu(a));
    } else {
      if ('"' === c) {
        return b.toString();
      }
      b.append(c);
    }
    c = Ot(a);
  }
}
function uu(a) {
  for (var b = new La, c = Ot(a);;) {
    if (null == c) {
      return Tt.k(a, K(["EOF while reading"], 0));
    }
    if ("\\" === c) {
      b.append(c);
      var d = Ot(a);
      if (null == d) {
        return Tt.k(a, K(["EOF while reading"], 0));
      }
      var e = function() {
        var a = b;
        a.append(d);
        return a;
      }(), f = Ot(a);
    } else {
      if ('"' === c) {
        return b.toString();
      }
      e = function() {
        var a = b;
        a.append(c);
        return a;
      }();
      f = Ot(a);
    }
    b = e;
    c = f;
  }
}
function vu(a, b) {
  var c = Ut(a, b);
  if (q(-1 != c.indexOf("/"))) {
    c = Dd.h(xf.j(c, 0, c.indexOf("/")), xf.j(c, c.indexOf("/") + 1, c.length));
  } else {
    var d = Dd.g(c), c = "nil" === c ? null : "true" === c ? !0 : "false" === c ? !1 : d
  }
  return c;
}
function wu(a) {
  var b = Ut(a, Ot(a)), c = au($t, b), b = c[0], d = c[1], c = c[2];
  return void 0 !== d && ":/" === d.substring(d.length - 2, d.length) || ":" === c[c.length - 1] || -1 !== b.indexOf("::", 1) ? Tt.k(a, K(["Invalid token: ", b], 0)) : null != d && 0 < d.length ? Hf.h(d.substring(0, d.indexOf("/")), c) : Hf.g(b);
}
function xu(a) {
  return function(b) {
    return qb(qb(Fd, ju.m ? ju.m(b, !0, null, !0) : ju.call(null, b, !0, null)), a);
  };
}
function yu() {
  return function(a) {
    return Tt.k(a, K(["Unreadable form"], 0));
  };
}
function zu(a) {
  var b;
  b = ju.m ? ju.m(a, !0, null, !0) : ju.call(null, a, !0, null);
  b = b instanceof Cd ? new p(null, 1, [Jp, b], null) : "string" === typeof b ? new p(null, 1, [Jp, b], null) : b instanceof W ? new hi([b, !0]) : b;
  se(b) || Tt.k(a, K(["Metadata must be Symbol,Keyword,String or Map"], 0));
  var c = ju.m ? ju.m(a, !0, null, !0) : ju.call(null, a, !0, null);
  return(c ? c.q & 262144 || c.me || (c.q ? 0 : gb(ec, c)) : gb(ec, c)) ? Ud(c, bj.k(K([le(c), b], 0))) : Tt.k(a, K(["Metadata can only be applied to IWithMetas"], 0));
}
function Au(a) {
  return jj(iu("}", a));
}
function Bu(a) {
  return zj(uu(a));
}
function Cu(a) {
  ju.m ? ju.m(a, !0, null, !0) : ju.call(null, a, !0, null);
  return a;
}
function Vt(a) {
  return'"' === a ? tu : ":" === a ? wu : ";" === a ? Wt : "'" === a ? xu(new Cd(null, "quote", "quote", 1377916282, null)) : "@" === a ? xu(new Cd(null, "deref", "deref", 1494944732, null)) : "^" === a ? zu : "`" === a ? ku : "~" === a ? ku : "(" === a ? pu : ")" === a ? ou : "[" === a ? qu : "]" === a ? ou : "{" === a ? ru : "}" === a ? ou : "\\" === a ? Ot : "#" === a ? lu : null;
}
function mu(a) {
  return "{" === a ? Au : "\x3c" === a ? yu() : '"' === a ? Bu : "!" === a ? Wt : "_" === a ? Cu : null;
}
function ju(a, b, c) {
  for (;;) {
    var d = Ot(a);
    if (null == d) {
      return q(b) ? Tt.k(a, K(["EOF while reading"], 0)) : c;
    }
    if (!Rt(d)) {
      if (";" === d) {
        var e = function() {
          var b = a, c = d;
          return Wt.h ? Wt.h(b, c) : Wt.call(null, b);
        }();
        a = e;
      } else {
        var f = Vt(d), e = q(f) ? function() {
          var b = a, c = d;
          return f.h ? f.h(b, c) : f.call(null, b, c);
        }() : St(a, d) ? su(a, d) : vu(a, d);
        if (e !== a) {
          return e;
        }
      }
    }
  }
}
function Du(a) {
  return ju(new Qt(a, [], -1), !1, null);
}
var Eu = function(a, b) {
  return function(c, d) {
    return Q.h(q(d) ? b : a, c);
  };
}(new U(null, 13, 5, V, [null, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], null), new U(null, 13, 5, V, [null, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], null)), Fu = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
function Gu(a) {
  a = parseInt(a, 10);
  return fb(isNaN(a)) ? a : null;
}
function Hu(a, b, c, d) {
  a <= b && b <= c || Tt.k(null, K(["" + u.g(d) + " Failed:  " + u.g(a) + "\x3c\x3d" + u.g(b) + "\x3c\x3d" + u.g(c)], 0));
  return b;
}
function Iu(a) {
  var b = yj(Fu, a);
  O.j(b, 0, null);
  var c = O.j(b, 1, null), d = O.j(b, 2, null), e = O.j(b, 3, null), f = O.j(b, 4, null), g = O.j(b, 5, null), h = O.j(b, 6, null), l = O.j(b, 7, null), m = O.j(b, 8, null), r = O.j(b, 9, null), s = O.j(b, 10, null);
  if (fb(b)) {
    return Tt.k(null, K(["Unrecognized date/time syntax: " + u.g(a)], 0));
  }
  var w = Gu(c), A = function() {
    var a = Gu(d);
    return q(a) ? a : 1;
  }();
  a = function() {
    var a = Gu(e);
    return q(a) ? a : 1;
  }();
  var b = function() {
    var a = Gu(f);
    return q(a) ? a : 0;
  }(), c = function() {
    var a = Gu(g);
    return q(a) ? a : 0;
  }(), y = function() {
    var a = Gu(h);
    return q(a) ? a : 0;
  }(), B = function() {
    var a;
    a: {
      if (C.h(3, N(l))) {
        a = l;
      } else {
        if (3 < N(l)) {
          a = xf.j(l, 0, 3);
        } else {
          for (a = new La(l);;) {
            if (3 > a.Tb.length) {
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
    a = Gu(a);
    return q(a) ? a : 0;
  }(), m = (C.h(m, "-") ? -1 : 1) * (60 * function() {
    var a = Gu(r);
    return q(a) ? a : 0;
  }() + function() {
    var a = Gu(s);
    return q(a) ? a : 0;
  }());
  return new U(null, 8, 5, V, [w, Hu(1, A, 12, "timestamp month field must be in range 1..12"), Hu(1, a, function() {
    var a;
    if (a = 0 === (w % 4 + 4) % 4) {
      a = 0 !== (w % 100 + 100) % 100 || 0 === (w % 400 + 400) % 400;
    }
    return Eu.h ? Eu.h(A, a) : Eu.call(null, A, a);
  }(), "timestamp day field must be in range 1..last day in month"), Hu(0, b, 23, "timestamp hour field must be in range 0..23"), Hu(0, c, 59, "timestamp minute field must be in range 0..59"), Hu(0, y, C.h(c, 59) ? 60 : 59, "timestamp second field must be in range 0..60"), Hu(0, B, 999, "timestamp millisecond field must be in range 0..999"), m], null);
}
var Ju, Ku = new p(null, 4, ["inst", function(a) {
  var b;
  if ("string" === typeof a) {
    if (b = Iu(a), q(b)) {
      a = O.j(b, 0, null);
      var c = O.j(b, 1, null), d = O.j(b, 2, null), e = O.j(b, 3, null), f = O.j(b, 4, null), g = O.j(b, 5, null), h = O.j(b, 6, null);
      b = O.j(b, 7, null);
      b = new Date(Date.UTC(a, c - 1, d, e, f, g, h) - 6E4 * b);
    } else {
      b = Tt.k(null, K(["Unrecognized date/time syntax: " + u.g(a)], 0));
    }
  } else {
    b = Tt.k(null, K(["Instance literal expects a string for its timestamp."], 0));
  }
  return b;
}, "uuid", function(a) {
  return "string" === typeof a ? new Nj(a) : Tt.k(null, K(["UUID literal expects a string as its representation."], 0));
}, "queue", function(a) {
  return te(a) ? ah.h(Vh, a) : Tt.k(null, K(["Queue literal expects a vector for its elements."], 0));
}, "js", function(a) {
  if (te(a)) {
    var b = [];
    a = E(a);
    for (var c = null, d = 0, e = 0;;) {
      if (e < d) {
        var f = c.F(null, e);
        b.push(f);
        e += 1;
      } else {
        if (a = E(a)) {
          c = a, T(c) ? (a = x(c), e = z(c), c = a, d = N(a), a = e) : (a = F(c), b.push(a), a = H(c), c = null, d = 0), e = 0;
        } else {
          break;
        }
      }
    }
    return b;
  }
  if (se(a)) {
    b = {};
    a = E(a);
    c = null;
    for (e = d = 0;;) {
      if (e < d) {
        var g = c.F(null, e), f = O.j(g, 0, null), g = O.j(g, 1, null);
        b[Gf(f)] = g;
        e += 1;
      } else {
        if (a = E(a)) {
          T(a) ? (d = x(a), a = z(a), c = d, d = N(d)) : (d = F(a), c = O.j(d, 0, null), d = O.j(d, 1, null), b[Gf(c)] = d, a = H(a), c = null, d = 0), e = 0;
        } else {
          break;
        }
      }
    }
    return b;
  }
  return Tt.k(null, K(["JS literal expects a vector or map containing only string or unqualified keyword keys"], 0));
}], null);
Ju = xg.g ? xg.g(Ku) : xg.call(null, Ku);
var Lu = xg.g ? xg.g(null) : xg.call(null, null);
function nu(a, b) {
  var c = vu(a, b), d = Q.h(L.g ? L.g(Ju) : L.call(null, Ju), "" + u.g(c)), e = L.g ? L.g(Lu) : L.call(null, Lu);
  return q(d) ? (c = ju(a, !0, null), d.g ? d.g(c) : d.call(null, c)) : q(e) ? (d = ju(a, !0, null), e.h ? e.h(c, d) : e.call(null, c, d)) : Tt.k(a, K(["Could not find tag parser for ", "" + u.g(c), " in ", zg.k(K([$i(L.g ? L.g(Ju) : L.call(null, Ju))], 0))], 0));
}
;var Mu = !Bs || Bs && 9 <= Js, Nu = Bs && !Hs("9");
!Ds || Hs("528");
Cs && Hs("1.9b") || Bs && Hs("8") || As && Hs("9.5") || Ds && Hs("528");
Cs && !Hs("8") || Bs && Hs("9");
function Ou() {
  0 != Pu && (this[ka] || (this[ka] = ++la));
}
var Pu = 0;
function Qu(a, b) {
  this.type = a;
  this.currentTarget = this.target = b;
  this.defaultPrevented = this.dc = !1;
  this.Td = !0;
}
Qu.prototype.preventDefault = function() {
  this.defaultPrevented = !0;
  this.Td = !1;
};
function Ru(a) {
  Ru[" "](a);
  return a;
}
Ru[" "] = function() {
};
function Su(a, b) {
  Qu.call(this, a ? a.type : "");
  this.relatedTarget = this.currentTarget = this.target = null;
  this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
  this.Nd = this.state = null;
  if (a) {
    var c = this.type = a.type;
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    var d = a.relatedTarget;
    if (d) {
      if (Cs) {
        var e;
        a: {
          try {
            Ru(d.nodeName);
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
    this.offsetX = Ds || void 0 !== a.offsetX ? a.offsetX : a.layerX;
    this.offsetY = Ds || void 0 !== a.offsetY ? a.offsetY : a.layerY;
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
    this.Nd = a;
    a.defaultPrevented && this.preventDefault();
  }
}
pa(Su, Qu);
Su.prototype.preventDefault = function() {
  Su.Ue.preventDefault.call(this);
  var a = this.Nd;
  if (a.preventDefault) {
    a.preventDefault();
  } else {
    if (a.returnValue = !1, Nu) {
      try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1;
        }
      } catch (b) {
      }
    }
  }
};
var Tu = "closure_listenable_" + (1E6 * Math.random() | 0), Uu = 0;
function Vu(a, b, c, d, e) {
  this.Nb = a;
  this.Hc = null;
  this.src = b;
  this.type = c;
  this.sc = !!d;
  this.Ib = e;
  this.key = ++Uu;
  this.ec = this.rc = !1;
}
function Wu(a) {
  a.ec = !0;
  a.Nb = null;
  a.Hc = null;
  a.src = null;
  a.Ib = null;
}
;function Dw(a) {
  this.src = a;
  this.Oa = {};
  this.Jc = 0;
}
Dw.prototype.add = function(a, b, c, d, e) {
  var f = a.toString();
  a = this.Oa[f];
  a || (a = this.Oa[f] = [], this.Jc++);
  var g = Ew(a, b, d, e);
  -1 < g ? (b = a[g], c || (b.rc = !1)) : (b = new Vu(b, this.src, f, !!d, e), b.rc = c, a.push(b));
  return b;
};
Dw.prototype.remove = function(a, b, c, d) {
  a = a.toString();
  if (!(a in this.Oa)) {
    return!1;
  }
  var e = this.Oa[a];
  b = Ew(e, b, c, d);
  return-1 < b ? (Wu(e[b]), Oa.splice.call(e, b, 1), 0 == e.length && (delete this.Oa[a], this.Jc--), !0) : !1;
};
function Fw(a, b) {
  var c = b.type;
  if (c in a.Oa) {
    var d = a.Oa[c], e = Pa(d, b), f;
    (f = 0 <= e) && Oa.splice.call(d, e, 1);
    f && (Wu(b), 0 == a.Oa[c].length && (delete a.Oa[c], a.Jc--));
  }
}
Dw.prototype.Yc = function(a, b, c, d) {
  a = this.Oa[a.toString()];
  var e = -1;
  a && (e = Ew(a, b, c, d));
  return-1 < e ? a[e] : null;
};
function Ew(a, b, c, d) {
  for (var e = 0;e < a.length;++e) {
    var f = a[e];
    if (!f.ec && f.Nb == b && f.sc == !!c && f.Ib == d) {
      return e;
    }
  }
  return-1;
}
;var Gw = "closure_lm_" + (1E6 * Math.random() | 0), Hw = {}, Iw = 0;
function Jw(a, b, c, d, e) {
  if ("array" == n(b)) {
    for (var f = 0;f < b.length;f++) {
      Jw(a, b[f], c, d, e);
    }
    return null;
  }
  c = Kw(c);
  if (a && a[Tu]) {
    a = a.ve(b, c, d, e);
  } else {
    if (!b) {
      throw Error("Invalid event type");
    }
    var f = !!d, g = Lw(a);
    g || (a[Gw] = g = new Dw(a));
    c = g.add(b, c, !1, d, e);
    c.Hc || (d = Mw(), c.Hc = d, d.src = a, d.Nb = c, a.addEventListener ? a.addEventListener(b.toString(), d, f) : a.attachEvent(Nw(b.toString()), d), Iw++);
    a = c;
  }
  return a;
}
function Mw() {
  var a = Ow, b = Mu ? function(c) {
    return a.call(b.src, b.Nb, c);
  } : function(c) {
    c = a.call(b.src, b.Nb, c);
    if (!c) {
      return c;
    }
  };
  return b;
}
function Pw(a, b, c, d, e) {
  if ("array" == n(b)) {
    for (var f = 0;f < b.length;f++) {
      Pw(a, b[f], c, d, e);
    }
  } else {
    c = Kw(c), a && a[Tu] ? a.Xe(b, c, d, e) : a && (a = Lw(a)) && (b = a.Yc(b, c, !!d, e)) && Qw(b);
  }
}
function Qw(a) {
  if ("number" != typeof a && a && !a.ec) {
    var b = a.src;
    if (b && b[Tu]) {
      Fw(b.ac, a);
    } else {
      var c = a.type, d = a.Hc;
      b.removeEventListener ? b.removeEventListener(c, d, a.sc) : b.detachEvent && b.detachEvent(Nw(c), d);
      Iw--;
      (c = Lw(b)) ? (Fw(c, a), 0 == c.Jc && (c.src = null, b[Gw] = null)) : Wu(a);
    }
  }
}
function Nw(a) {
  return a in Hw ? Hw[a] : Hw[a] = "on" + a;
}
function Rw(a, b, c, d) {
  var e = 1;
  if (a = Lw(a)) {
    if (b = a.Oa[b.toString()]) {
      for (b = b.concat(), a = 0;a < b.length;a++) {
        var f = b[a];
        f && f.sc == c && !f.ec && (e &= !1 !== Sw(f, d));
      }
    }
  }
  return Boolean(e);
}
function Sw(a, b) {
  var c = a.Nb, d = a.Ib || a.src;
  a.rc && Qw(a);
  return c.call(d, b);
}
function Ow(a, b) {
  if (a.ec) {
    return!0;
  }
  if (!Mu) {
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
    c = new Su(e, this);
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
      for (var f = a.type, h = e.length - 1;!c.dc && 0 <= h;h--) {
        c.currentTarget = e[h], d &= Rw(e[h], f, !0, c);
      }
      for (h = 0;!c.dc && h < e.length;h++) {
        c.currentTarget = e[h], d &= Rw(e[h], f, !1, c);
      }
    }
    return d;
  }
  return Sw(a, new Su(b, this));
}
function Lw(a) {
  a = a[Gw];
  return a instanceof Dw ? a : null;
}
var Tw = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
function Kw(a) {
  if (ia(a)) {
    return a;
  }
  a[Tw] || (a[Tw] = function(b) {
    return a.handleEvent(b);
  });
  return a[Tw];
}
;var Uw = function() {
  function a(a, d, e, f) {
    var g = null;
    3 < arguments.length && (g = K(Array.prototype.slice.call(arguments, 3), 0));
    return b.call(this, a, d, e, g);
  }
  function b(a, b, e, f) {
    f = ye(f) ? S.h(vg, f) : f;
    f = Q.j(f, Np, !1);
    a = Et(a);
    b = Gf(b);
    return Jw(a, b, e, f);
  }
  a.w = 3;
  a.n = function(a) {
    var d = F(a);
    a = H(a);
    var e = F(a);
    a = H(a);
    var f = F(a);
    a = G(a);
    return b(d, e, f, a);
  };
  a.k = b;
  return a;
}();
function Vw(a, b) {
  return Ud(new U(null, 2, 5, V, [b, null], null), new p(null, 3, [Qn, a, lk, Fp, gk, Fp], null));
}
function Ww(a) {
  return a.g ? a.g(0) : a.call(null, 0);
}
function Xw(a) {
  return gk.g(le(a)).call(null, Ww(a));
}
function Yw(a) {
  var b = O.j(a, 0, null), c = O.j(a, 1, null), d = ye(c) ? S.h(vg, c) : c, e = Q.h(d, Nn), c = Q.h(d, Rj), f = Q.h(d, bp), g = Q.h(d, ik), d = Q.h(d, fp);
  return q(f) ? (f = me(f), q(d) ? (d = V, b = bg.h(e, Sd(b, g)), b = Qn.g(le(a)).call(null, f, b), c = new U(null, 2, 5, d, [b, q(c) ? R.j(c, fp, !0) : c], null)) : c = new U(null, 2, 5, V, [f, c], null), Ud(c, le(a))) : null;
}
function Zw(a) {
  for (;;) {
    if (C.h($p, a.g ? a.g(1) : a.call(null, 1))) {
      return Ww(a);
    }
    var b = Yw(a);
    if (q(b)) {
      a = b;
    } else {
      return Ww(a);
    }
  }
}
function $w(a) {
  var b = O.j(a, 0, null), c = O.j(a, 1, null), c = ye(c) ? S.h(vg, c) : c, d = Q.h(c, Nn), e = Q.h(c, ik), f = O.j(e, 0, null), g = wf(e);
  return q(q(c) ? e : c) ? Ud(new U(null, 2, 5, V, [f, R.k(c, Nn, fe.h(d, b), K([ik, g], 0))], null), le(a)) : null;
}
var ax = function() {
  function a(a, d, e) {
    var f = null;
    2 < arguments.length && (f = K(Array.prototype.slice.call(arguments, 2), 0));
    return b.call(this, a, d, f);
  }
  function b(a, b, e) {
    b = S.j(b, Ww(a), e);
    O.j(a, 0, null);
    e = O.j(a, 1, null);
    return Ud(new U(null, 2, 5, V, [b, R.j(e, fp, !0)], null), le(a));
  }
  a.w = 2;
  a.n = function(a) {
    var d = F(a);
    a = H(a);
    var e = F(a);
    a = G(a);
    return b(d, e, a);
  };
  a.k = b;
  return a;
}();
function bx(a) {
  if (C.h($p, a.g ? a.g(1) : a.call(null, 1))) {
    return a;
  }
  var b;
  b = Xw(a);
  if (q(b)) {
    if (q(Xw(a))) {
      b = O.j(a, 0, null);
      var c = O.j(a, 1, null), d;
      if (q(Xw(a))) {
        d = lk.g(le(a)).call(null, Ww(a));
      } else {
        throw "called children on a leaf node";
      }
      var e = O.j(d, 0, null), f = wf(d);
      b = q(d) ? Ud(new U(null, 2, 5, V, [e, new p(null, 4, [Nn, ee, bp, q(c) ? fe.h(bp.g(c), b) : new U(null, 1, 5, V, [b], null), Rj, c, ik, f], null)], null), le(a)) : null;
    } else {
      b = null;
    }
  }
  if (q(b)) {
    return b;
  }
  b = $w(a);
  if (q(b)) {
    return b;
  }
  for (;;) {
    if (q(Yw(a))) {
      b = $w(Yw(a));
      if (q(b)) {
        return b;
      }
      a = Yw(a);
    } else {
      return new U(null, 2, 5, V, [Ww(a), $p], null);
    }
  }
}
function cx(a) {
  return C.h($p, a.g ? a.g(1) : a.call(null, 1));
}
;function dx() {
  function a() {
    return uf(16).toString(16);
  }
  return new Nj((new La(a(), a(), a(), a(), a(), a(), a(), a(), "-", a(), a(), a(), a(), "-4", a(), a(), a(), "-", (8 | 3 & uf(15)).toString(16), a(), a(), a(), "-", a(), a(), a(), a(), a(), a(), a(), a(), a(), a(), a(), a())).toString());
}
;var ex = he([Xj, yl, Gl, qm, Hm, Rm, Sn, qo, uo, yo, Co, Ho, $o, ap, aq, er], [.001, .01, .001, .5, 256, Dp, 2048, 3, 3, .05, 1.1, .02, !1, .9, .1, 1E3]);
function fx(a) {
  var b = Rm.g(io.g(a));
  return R.j(a, hr, Ue.j(function(a) {
    return function(b, e) {
      var f = Ko.g(e), g = $i(xm.g(Yj.g(e)));
      return Yr(b, g, function(a) {
        return function(b) {
          return fe.h(b, a);
        };
      }(f, g, a));
    };
  }(b), wh(Rg.h(b, hj)), Y.g(a)));
}
function gx(a, b, c) {
  var d = yo.g(io.g(a)), e = yl.g(io.g(a)), f = aq.g(io.g(a)), g = dh.h(a, new U(null, 3, 5, V, [Y, b, Yj], null)), h = Wr(function(a, b, d) {
    return function(a, e) {
      return q(c.g ? c.g(a) : c.call(null, a)) ? Pn : e < d + b ? Vn : ek;
    };
  }(d, e, f, g), xm.g(g)), l = Wr(function(a, b, d) {
    return function(b, e) {
      return q(c.g ? c.g(b) : c.call(null, b)) ? e >= d - a ? yr : Pn : ek;
    };
  }(d, e, f, g, h), Fl.g(g)), m = new p(null, 2, [xm, bj.k(K([Zr(function(a) {
    return function(b) {
      b += a;
      return 1 > b ? b : 1;
    };
  }(d, e, f, g, h, l), Pn.h(h, ei)), Zr(function(a, b) {
    return function(a) {
      return a - b;
    };
  }(d, e, f, g, h, l), ek.g(h)), Zr(function(a) {
    return function(b) {
      return b + a;
    };
  }(d, e, f, g, h, l), yr.g(l))], 0)), Fl, bj.k(K([Zr(function(a, b) {
    return function(a) {
      a -= b;
      return 0 < a ? a : 0;
    };
  }(d, e, f, g, h, l), ek.h(l, ei)), Zr(function(a) {
    return function(b) {
      return b + a;
    };
  }(d, e, f, g, h, l), Pn.g(l)), Zr(function(a, b) {
    return function(a) {
      return a - b;
    };
  }(d, e, f, g, h, l), Vn.g(l))], 0))], null), d = Yr(Yr(hr.g(a), $i(yr.g(l)), function() {
    return function(a) {
      return fe.h(a, b);
    };
  }(d, e, f, g, h, l, m)), $i(Vn.g(h)), function() {
    return function(a) {
      return ne.h(a, b);
    };
  }(d, e, f, g, h, l, m));
  return R.j(fh(a, new U(null, 3, 5, V, [Y, b, Yj], null), m), hr, d);
}
function hx(a, b) {
  return Wr(function(b, d) {
    return d >= a ? xm : Fl;
  }, b);
}
function ix(a, b) {
  var c = ye(b) ? S.h(vg, b) : b, d = Q.h(c, yo), e = Q.h(c, aq), f = Q.h(c, qm), g = Q.h(c, Hm), h = Q.h(c, Rm), l = Q.h(c, Sn), m = Qr(a / l * h), r = tj.h(function() {
    var a = m - g;
    return 0 > a ? 0 : a;
  }(), function() {
    var a = m + g;
    return h < a ? h : a;
  }()), s = f * N(r), w = Pg.h(s, Ur(r)), c = Sg.h(s, function(a, b, c, d, e, f) {
    return function() {
      return Sr.h(f, e);
    };
  }(m, r, s, w, function() {
    var a = e + 1 * d;
    return 1 > a ? a : 1;
  }(), function() {
    var a = e - 2 * d;
    return 0 < a ? a : 0;
  }(), b, c, c, d, e, f, g, h, l));
  return hx(e, Cg.j(xh, w, c));
}
function jx(a, b) {
  return new p(null, 3, [Ko, a, Yj, ix(a, b), nk, 1], null);
}
function kx(a, b, c, d) {
  return bg.h(tj.h(function() {
    var b = a + c + 1;
    return b < d ? b : d;
  }(), function() {
    var c = a + b + 1;
    return c < d ? c : d;
  }()), tj.h(function() {
    var c = a - b;
    return 0 < c ? c : 0;
  }(), function() {
    var b = a - c;
    return 0 < b ? b : 0;
  }()));
}
function lx(a) {
  a = $i(xm.g(Yj.g(a)));
  return E(a) ? S.h(af, a) - S.h(pf, a) : 0;
}
function mx(a) {
  var b = io.g(a), c = Rm.g(b), b = Sn.g(b);
  a = Cg.h(lx, Y.g(a));
  a = S.h(Ye, a) / N(a);
  c = sf(a / c * b, 2);
  c = Qr(.7 * c);
  return 1 < c ? c : 1;
}
function nx(a) {
  return R.j(a, To, mx(a));
}
function ox(a, b) {
  var c = hr.g(a);
  return eg(Ue.j(function(a) {
    return function(b, c) {
      return Ue.j(function() {
        return function(a, b) {
          return gg.j(a, b, Q.j(a, b, 0) + 1);
        };
      }(a), b, a.g ? a.g(c) : a.call(null, c));
    };
  }(c), Mc(ei), b));
}
function px(a, b) {
  var c = ox(a, b), d = uo.g(io.g(a));
  return eg(Ve(function(b, c) {
    return function(b, d, e) {
      if (e < c) {
        return b;
      }
      var m = dh.h(a, new U(null, 3, 5, V, [Y, d, nk], null));
      return gg.j(b, d, e * m);
    };
  }(c, d), Mc(ei), c));
}
function qx(a, b, c) {
  for (var d = function() {
    var b = Qr(c * N(Y.g(a)));
    return 1 < b ? b : 1;
  }(), e = E(b), f = Yi(function() {
    return function(a, c) {
      return Bd(b.g ? b.g(a) : b.call(null, a), b.g ? b.g(c) : b.call(null, c));
    };
  }(e, d)), g = 1E6;;) {
    if (oe(e)) {
      return jj($i(f));
    }
    var h = F(e), l = O.j(h, 0, null), m = O.j(h, 1, null);
    N(f) < d ? (e = H(e), f = R.j(f, l, m), l = function() {
      var a = g, b = m;
      return a < b ? a : b;
    }()) : m > g ? (l = R.j(ie.h(f, F($i(f))), l, m), e = H(e), f = l, l = F(ci(l))) : (e = H(e), l = g);
    g = l;
  }
}
function rx(a) {
  return eg(Ve(function(a, c, d) {
    return q(d) ? gg.j(a, c, d) : a;
  }, Mc(ei), a));
}
function sx(a, b, c, d) {
  b = Y.g(b);
  var e = N(b);
  b = $i(a);
  for (var f = dg(bh.h(a, tj.g(e)));;) {
    if (a = F(b), q(a)) {
      var g = a;
      a = function() {
        var a = g;
        return f.g ? f.g(a) : f.call(null, a);
      }();
      if (q(a)) {
        var h = a;
        b = H(b);
        a = function() {
          for (var a = kx(g, c, d, e), b = f;;) {
            var r = F(a);
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
      return rx(Oc(f));
    }
  }
}
function tx(a) {
  return Zr(function(a) {
    return a + Sr.h(0, .5);
  }, a);
}
function ux(a, b, c) {
  return Ue.j(function(a, b) {
    return gx(a, b, c);
  }, a, b);
}
function vx(a, b) {
  var c = Xj.g(io.g(a)), d = Gl.g(io.g(a)), e = qo.g(io.g(a)), f = Ym.g(a), g = Am.g(a), h = N(Y.g(a)), l = kx(b, To.g(a), 0, h), h = S.j(af, 1, ci(dj(f, l))), l = S.j(af, 1, ci(dj(g, l))), c = c * h, d = d * l, f = Q.h(f, b), g = Q.h(g, b), e = e - g / d * (e - 1), e = 1 < e ? e : 1;
  return f < c ? gx(a, b, pg(!0)) : fh(a, new U(null, 3, 5, V, [Y, b, nk], null), e);
}
function wx(a, b, c) {
  var d = 1 / c;
  c = d * (c - 1);
  return Yr(bh.h(function(a, b) {
    return function(a) {
      return a * b;
    };
  }(d, c), a), b, function(a) {
    return function(b) {
      return b + a;
    };
  }(d, c));
}
function xx(a, b, c, d, e) {
  var f = Co.g(io.g(a)), g = px(a, c);
  c = Zr(rg.h(Ze, f), dj(g, b));
  f = tg.h(function() {
    return function(a) {
      var b = O.j(a, 0, null);
      a = O.j(a, 1, null);
      return(e.h ? e.h(b, 0) : e.call(null, b, 0)) > a ? b : null;
    };
  }(f, g, c), d);
  a = ap.g(io.g(a));
  b = Zr(rg.h(Ze, a), dj(d, S.j(ne, b, f)));
  return cj.k(af, K([c, b], 0));
}
var yx = function() {
  function a(a, b, c, g) {
    var h = om.h(a, 0) + 1, l = px(a, b), m = Hl.h(a, ei), r = cj.k(af, K([l, m], 0)), s, w = io.g(a);
    s = Ho.g(w);
    var w = fb($o.g(w)), A = To.g(a), y = tx(r), y = w ? sx(y, a, sf(A, 3), 0) : y, w = w ? sx(y, a, A, sf(A, 3)) : y;
    s = qx(a, w, s);
    w = E(c) ? xx(a, s, c, m, l) : ei;
    m = er.g(io.g(a));
    c = q(g) ? 0 === (h % m + m) % m : g;
    a = R.k(a, om, h, K([Io, r, Kn, s, Hl, w], 0));
    r = q(g) ? gh.O(a, new U(null, 1, 5, V, [Ym], null), wx, $i(r), m) : a;
    r = q(g) ? gh.O(r, new U(null, 1, 5, V, [Am], null), wx, s, m) : r;
    b = q(g) ? ux(r, Xg.h(l, s), b) : r;
    b = q(c) ? Ue.j(vx, b, tj.g(N(Y.g(b)))) : b;
    return q(c) ? nx(b) : b;
  }
  function b(a, b, f) {
    return c.m(a, b, hj, f);
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
var zx, Ax, Bx, Cx, Dx, Ex;
function Fx(a) {
  if (a ? a.Pb : a) {
    return a.Pb(a);
  }
  var b;
  b = Fx[n(null == a ? null : a)];
  if (!b && (b = Fx._, !b)) {
    throw t("PEncoder.encoder-bit-width", a);
  }
  return b.call(null, a);
}
function Gx(a, b, c) {
  if (a ? a.Ob : a) {
    return a.Ob(a, b, c);
  }
  var d;
  d = Gx[n(null == a ? null : a)];
  if (!d && (d = Gx._, !d)) {
    throw t("PEncoder.encode", a);
  }
  return d.call(null, a, b, c);
}
var Ix = function Hx(b, c, d) {
  var e = O.j(d, 0, null), f = O.j(d, 1, null), g = f - e;
  "undefined" === typeof zx && (zx = function(b, c, d, e, f, g, A, y, B) {
    this.span = b;
    this.upper = c;
    this.lower = d;
    this.$e = e;
    this.Re = f;
    this.nc = g;
    this.Sb = A;
    this.ue = y;
    this.Be = B;
    this.G = 0;
    this.q = 393216;
  }, zx.Fa = !0, zx.Ea = "org.nfrac.comportex.encoders/t29970", zx.Ka = function() {
    return function(b, c) {
      return zc(c, "org.nfrac.comportex.encoders/t29970");
    };
  }(g, d, e, f), zx.prototype.Pb = function() {
    return function() {
      return this.Sb;
    };
  }(g, d, e, f), zx.prototype.Ob = function() {
    return function(b, c, d) {
      return q(d) ? (b = this.lower, d = d > b ? d : b, b = this.upper, d = qf(((d < b ? d : b) - this.lower) / this.span * (this.Sb - this.nc)), jj(tj.h(c + d, c + d + this.nc))) : hj;
    };
  }(g, d, e, f), zx.prototype.I = function() {
    return function() {
      return this.Be;
    };
  }(g, d, e, f), zx.prototype.J = function() {
    return function(b, c) {
      return new zx(this.span, this.upper, this.lower, this.$e, this.Re, this.nc, this.Sb, this.ue, c);
    };
  }(g, d, e, f));
  return new zx(g, f, e, d, d, c, b, Hx, null);
}, Kx = function Jx(b) {
  "undefined" === typeof Bx && (Bx = function(b, d, e) {
    this.e = b;
    this.qe = d;
    this.De = e;
    this.G = 0;
    this.q = 393216;
  }, Bx.Fa = !0, Bx.Ea = "org.nfrac.comportex.encoders/t29984", Bx.Ka = function(b, d) {
    return zc(d, "org.nfrac.comportex.encoders/t29984");
  }, Bx.prototype.Pb = function() {
    return Fx(this.e);
  }, Bx.prototype.Ob = function(b, d, e) {
    var f = this;
    return S.h(Ir, Cg.h(function() {
      return function(b) {
        return Gx(f.e, d, b);
      };
    }(this), e));
  }, Bx.prototype.I = function() {
    return this.De;
  }, Bx.prototype.J = function(b, d) {
    return new Bx(this.e, this.qe, d);
  });
  return new Bx(b, Jx, null);
}, Lx = function() {
  function a(a, c) {
    var f = Fx(c);
    "undefined" === typeof Cx && (Cx = function(a, b, c, d, e) {
      this.hd = a;
      this.e = b;
      this.zb = c;
      this.Vc = d;
      this.Ee = e;
      this.G = 0;
      this.q = 393216;
    }, Cx.Fa = !0, Cx.Ea = "org.nfrac.comportex.encoders/t29993", Cx.Ka = function() {
      return function(a, b) {
        return zc(b, "org.nfrac.comportex.encoders/t29993");
      };
    }(f), Cx.prototype.Pb = function() {
      return function() {
        return this.zb * this.hd;
      };
    }(f), Cx.prototype.Ob = function(a) {
      return function(b, c, d) {
        var e = this;
        return S.h(Ir, sg(function() {
          return function(a, b) {
            return Gx(e.e, c + a * e.hd, b);
          };
        }(this, a), d));
      };
    }(f), Cx.prototype.I = function() {
      return function() {
        return this.Ee;
      };
    }(f), Cx.prototype.J = function() {
      return function(a, b) {
        return new Cx(this.hd, this.e, this.zb, this.Vc, b);
      };
    }(f));
    return new Cx(f, c, a, b, null);
  }
  var b = null, c = function() {
    function a(b, d, h) {
      var l = null;
      2 < arguments.length && (l = K(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      var l = cg.h(d, e), m = Cg.h(Fx, l), r = cg.h(0, vj.h(Ye, m));
      "undefined" === typeof Dx && (Dx = function(a, b, c, d, e, f, g, h) {
        this.Rd = a;
        this.Ud = b;
        this.Md = c;
        this.Pa = d;
        this.e = e;
        this.zb = f;
        this.Vc = g;
        this.Fe = h;
        this.G = 0;
        this.q = 393216;
      }, Dx.Fa = !0, Dx.Ea = "org.nfrac.comportex.encoders/t29996", Dx.Ka = function() {
        return function(a, b) {
          return zc(b, "org.nfrac.comportex.encoders/t29996");
        };
      }(l, m, r), Dx.prototype.Pb = function() {
        return function() {
          return S.h(Ye, this.Ud);
        };
      }(l, m, r), Dx.prototype.Ob = function(a, b, c) {
        return function(d, e, f) {
          return S.h(Ir, Cg.m(function() {
            return function(a, b, c) {
              return Gx(a, e + b, c);
            };
          }(this, a, b, c), this.Md, this.Rd, f));
        };
      }(l, m, r), Dx.prototype.I = function() {
        return function() {
          return this.Fe;
        };
      }(l, m, r), Dx.prototype.J = function() {
        return function(a, b) {
          return new Dx(this.Rd, this.Ud, this.Md, this.Pa, this.e, this.zb, this.Vc, b);
        };
      }(l, m, r));
      return new Dx(r, m, l, e, d, a, b, null);
    }
    a.w = 2;
    a.n = function(a) {
      var b = F(a);
      a = H(a);
      var d = F(a);
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
        return c.k(b, e, K(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.w = 2;
  b.n = c.n;
  b.h = a;
  b.k = c.k;
  return b;
}(), Nx = function Mx(b, c) {
  "undefined" === typeof Ex && (Ex = function(b, c, f, g) {
    this.e = b;
    this.f = c;
    this.Se = f;
    this.Ge = g;
    this.G = 0;
    this.q = 393216;
  }, Ex.Fa = !0, Ex.Ea = "org.nfrac.comportex.encoders/t30005", Ex.Ka = function(b, c) {
    return zc(c, "org.nfrac.comportex.encoders/t30005");
  }, Ex.prototype.Pb = function() {
    return Fx(this.e);
  }, Ex.prototype.Ob = function(b, c, f) {
    return Gx(this.e, c, this.f.g ? this.f.g(f) : this.f.call(null, f));
  }, Ex.prototype.I = function() {
    return this.Ge;
  }, Ex.prototype.J = function(b, c) {
    return new Ex(this.e, this.f, this.Se, c);
  });
  return new Ex(c, b, Mx, null);
};
function Ox(a) {
  if (a ? a.$c : a) {
    return a.$c(a);
  }
  var b;
  b = Ox[n(null == a ? null : a)];
  if (!b && (b = Ox._, !b)) {
    throw t("PFeedForward.bit-width", a);
  }
  return b.call(null, a);
}
function Px(a, b) {
  if (a ? a.ad : a) {
    return a.ad(a, b);
  }
  var c;
  c = Px[n(null == a ? null : a)];
  if (!c && (c = Px._, !c)) {
    throw t("PFeedForward.bits-value*", a);
  }
  return c.call(null, a, b);
}
function Qx(a, b) {
  if (a ? a.dd : a) {
    return a.dd(a, b);
  }
  var c;
  c = Qx[n(null == a ? null : a)];
  if (!c && (c = Qx._, !c)) {
    throw t("PFeedForward.signal-bits-value*", a);
  }
  return c.call(null, a, b);
}
function Rx(a, b) {
  if (a ? a.ed : a) {
    return a.ed(a, b);
  }
  var c;
  c = Rx[n(null == a ? null : a)];
  if (!c && (c = Rx._, !c)) {
    throw t("PFeedForward.source-of-bit", a);
  }
  return c.call(null, a, b);
}
function Sx(a) {
  if (a ? a.cd : a) {
    return a.cd(a);
  }
  var b;
  b = Sx[n(null == a ? null : a)];
  if (!b && (b = Sx._, !b)) {
    throw t("PFeedForward.incoming-bits-value", a);
  }
  return b.call(null, a);
}
function Tx(a, b) {
  if (a ? a.fd : a) {
    return a.fd(a, b);
  }
  var c;
  c = Tx[n(null == a ? null : a)];
  if (!c && (c = Tx._, !c)) {
    throw t("PFeedForward.source-of-incoming-bit", a);
  }
  return c.call(null, a, b);
}
function Ux(a, b) {
  if (a ? a.bd : a) {
    return a.bd(a, b);
  }
  var c;
  c = Ux[n(null == a ? null : a)];
  if (!c && (c = Ux._, !c)) {
    throw t("PFeedForward.feed-forward-step*", a);
  }
  return c.call(null, a, b);
}
var Vx = function() {
  function a(a) {
    return Px(a, 0);
  }
  var b = null, b = function(b, d) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      case 2:
        return Px(b, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.g = a;
  b.h = function(a, b) {
    return Px(a, b);
  };
  return b;
}(), Wx = function() {
  function a(a) {
    return Qx(a, 0);
  }
  var b = null, b = function(b, d) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      case 2:
        return Qx(b, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.g = a;
  b.h = function(a, b) {
    return Qx(a, b);
  };
  return b;
}(), Xx = function() {
  function a(a) {
    return Ux(a, !0);
  }
  var b = null, b = function(b, d) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      case 2:
        return Ux(b, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.g = a;
  b.h = function(a, b) {
    return Ux(a, b);
  };
  return b;
}();
function Yx(a) {
  if (a ? a.gd : a) {
    return a.gd(a);
  }
  var b;
  b = Yx[n(null == a ? null : a)];
  if (!b && (b = Yx._, !b)) {
    throw t("PResettable.reset", a);
  }
  return b.call(null, a);
}
function Zx(a) {
  if (a ? a.Le : a) {
    return a.value;
  }
  var b;
  b = Zx[n(null == a ? null : a)];
  if (!b && (b = Zx._, !b)) {
    throw t("PInputGenerator.domain-value", a);
  }
  return b.call(null, a);
}
function $x(a) {
  if (a ? a.Oe : a) {
    return a.Oe(a);
  }
  var b;
  b = $x[n(null == a ? null : a)];
  if (!b && (b = $x._, !b)) {
    throw t("PRegion.n-columns", a);
  }
  return b.call(null, a);
}
function ay(a) {
  if (a ? a.Ne : a) {
    return a.Ne(a);
  }
  var b;
  b = ay[n(null == a ? null : a)];
  if (!b && (b = ay._, !b)) {
    throw t("PRegion.n-cells-per-column", a);
  }
  return b.call(null, a);
}
function by(a, b, c, d) {
  if (a ? a.Pe : a) {
    return a.Pe(a, b, c, d);
  }
  var e;
  e = by[n(null == a ? null : a)];
  if (!e && (e = by._, !e)) {
    throw t("PRegion.region-step", a);
  }
  return e.call(null, a, b, c, d);
}
function cy(a) {
  if (a ? a.Me : a) {
    return a.Me(a);
  }
  var b;
  b = cy[n(null == a ? null : a)];
  if (!b && (b = cy._, !b)) {
    throw t("PRegion.active-cells", a);
  }
  return b.call(null, a);
}
function dy(a) {
  if (a ? a.Qe : a) {
    return a.Qe(a);
  }
  var b;
  b = dy[n(null == a ? null : a)];
  if (!b && (b = dy._, !b)) {
    throw t("PRegion.signal-cells", a);
  }
  return b.call(null, a);
}
function ey(a) {
  var b = bj.k(K([ex, a], 0)), c = Sn.g(b);
  a = fx(new p(null, 6, [Sp, dx(), Y, bh.j(jx, tj.g(c), Rg.g(b)), io, b, Kn, hj, Am, wh(Rg.h(Sn.g(a), 0)), Ym, wh(Rg.h(Sn.g(a), 0))], null));
  a = nx.g ? nx.g(a) : nx.call(null, a);
  b = bj.k(K([$r, io.g(a)], 0));
  a = R.k(a, io, b, K([Y, bh.j(gs, Y.g(a), Rg.g(b))], 0));
  b = io.g(a);
  b = Ap.g(b) * Sn.g(b);
  return R.j(a, am, wh(Rg.h(b, hj)));
}
Yx.object = function(a) {
  return ey(io.g(a));
};
$x.object = function(a) {
  return Sn.g(io.g(a));
};
ay.object = function(a) {
  return Ap.g(io.g(a));
};
by.object = function(a, b, c, d) {
  a = yx.m(a, b, c, d);
  return vs(a, Kn.g(a), d);
};
cy.object = function(a) {
  return wo.g(a);
};
dy.object = function(a) {
  return Im.g(a);
};
function fy(a, b, c, d, e, f) {
  this.ab = a;
  this.value = b;
  this.transform = c;
  this.Va = d;
  this.D = e;
  this.v = f;
  this.q = 2229667594;
  this.G = 8192;
  4 < arguments.length ? (this.D = e, this.v = f) : this.v = this.D = null;
}
k = fy.prototype;
k.K = function(a, b) {
  return yb.j(this, b, null);
};
k.L = function(a, b, c) {
  switch(b instanceof W ? b.ea : null) {
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
k.$c = function() {
  return Fx(this.Va);
};
k.ad = function(a, b) {
  return Gx(this.Va, b, this.value);
};
k.dd = function() {
  return hj;
};
k.ed = function(a, b) {
  return new U(null, 1, 5, V, [b], null);
};
k.cd = function() {
  return Px(this, 0);
};
k.fd = function(a, b) {
  return new U(null, 2, 5, V, [0, Rx(this, b)], null);
};
k.bd = function() {
  var a = this;
  return R.j(this, hm, function() {
    var b = a.value;
    return a.transform.g ? a.transform.g(b) : a.transform.call(null, b);
  }());
};
k.Le = function() {
  return this.value;
};
k.N = function(a, b, c) {
  return Aj(b, function() {
    return function(a) {
      return Aj(b, Gj, "", " ", "", c, a);
    };
  }(this), "#org.nfrac.comportex.core.InputGenerator{", ", ", "}", c, bg.h(new U(null, 4, 5, V, [new U(null, 2, 5, V, [Uo, this.ab], null), new U(null, 2, 5, V, [hm, this.value], null), new U(null, 2, 5, V, [rk, this.transform], null), new U(null, 2, 5, V, [Cl, this.Va], null)], null), this.v));
};
k.I = function() {
  return this.D;
};
k.T = function() {
  return 4 + N(this.v);
};
k.P = function() {
  var a = this.A;
  return null != a ? a : this.A = a = yf(this);
};
k.M = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && Yh(this, b) : b) ? !0 : !1;
};
k.gd = function() {
  return R.j(this, hm, this.ab);
};
k.Sa = function(a, b) {
  return Ne(new fj(null, new p(null, 4, [rk, null, Cl, null, hm, null, Uo, null], null), null), b) ? ie.h(Ud(ah.h(ei, this), this.D), b) : new fy(this.ab, this.value, this.transform, this.Va, this.D, kg(ie.h(this.v, b)), null);
};
k.va = function(a, b, c) {
  return q(X.h ? X.h(Uo, b) : X.call(null, Uo, b)) ? new fy(c, this.value, this.transform, this.Va, this.D, this.v, null) : q(X.h ? X.h(hm, b) : X.call(null, hm, b)) ? new fy(this.ab, c, this.transform, this.Va, this.D, this.v, null) : q(X.h ? X.h(rk, b) : X.call(null, rk, b)) ? new fy(this.ab, this.value, c, this.Va, this.D, this.v, null) : q(X.h ? X.h(Cl, b) : X.call(null, Cl, b)) ? new fy(this.ab, this.value, this.transform, c, this.D, this.v, null) : new fy(this.ab, this.value, this.transform, 
  this.Va, this.D, R.j(this.v, b, c), null);
};
k.Q = function() {
  return E(bg.h(new U(null, 4, 5, V, [new U(null, 2, 5, V, [Uo, this.ab], null), new U(null, 2, 5, V, [hm, this.value], null), new U(null, 2, 5, V, [rk, this.transform], null), new U(null, 2, 5, V, [Cl, this.Va], null)], null), this.v));
};
k.J = function(a, b) {
  return new fy(this.ab, this.value, this.transform, this.Va, b, this.v, this.A);
};
k.S = function(a, b) {
  return te(b) ? Bb(this, v.h(b, 0), v.h(b, 1)) : Ue.j(qb, this, b);
};
function gy(a, b) {
  var c = Cg.h(Ox, a), c = cg.h(0, vj.h(Ye, c));
  return S.h(Ir, Cg.j(b, a, c));
}
function hy(a, b, c) {
  var d = O.j(c, 0, null);
  c = O.j(c, 1, null);
  return a + b * d + c;
}
function iy(a, b, c, d) {
  this.ya = a;
  this.Za = b;
  this.D = c;
  this.v = d;
  this.q = 2229667594;
  this.G = 8192;
  2 < arguments.length ? (this.D = c, this.v = d) : this.v = this.D = null;
}
k = iy.prototype;
k.K = function(a, b) {
  return yb.j(this, b, null);
};
k.L = function(a, b, c) {
  switch(b instanceof W ? b.ea : null) {
    case "subs":
      return this.Za;
    case "region":
      return this.ya;
    default:
      return Q.j(this.v, b, c);
  }
};
k.$c = function() {
  return ay(this.ya) * $x(this.ya);
};
k.ad = function(a, b) {
  var c = ay(this.ya);
  return ah.h(hj, bh.h(rg.j(hy, b, c), cy(this.ya)));
};
k.dd = function(a, b) {
  var c = ay(this.ya);
  return ah.h(hj, bh.h(rg.j(hy, b, c), dy(this.ya)));
};
k.ed = function(a, b) {
  var c = ay(this.ya), d = V, e = sf(b, c), f = sf(b, c);
  return new U(null, 2, 5, d, [e, b - c * f], null);
};
k.cd = function() {
  return gy(this.Za, Px);
};
k.fd = function(a, b) {
  for (var c = 0, d = 0;;) {
    if (c < N(this.Za)) {
      var e = O.h(this.Za, c), f = Ox(e);
      if (d <= b && b <= d + f + -1) {
        return new U(null, 2, 5, V, [c, Rx(e, b - d)], null);
      }
      c += 1;
      d += qf(f);
    } else {
      return null;
    }
  }
};
k.bd = function(a, b) {
  var c = Cg.h(function() {
    return function(a) {
      return Ux(a, b);
    };
  }(this), this.Za), d = by(this.ya, gy(c, Px), gy(c, Qx), b);
  return R.k(this, Xn, d, K([Fp, c], 0));
};
k.N = function(a, b, c) {
  return Aj(b, function() {
    return function(a) {
      return Aj(b, Gj, "", " ", "", c, a);
    };
  }(this), "#org.nfrac.comportex.core.RegionTree{", ", ", "}", c, bg.h(new U(null, 2, 5, V, [new U(null, 2, 5, V, [Xn, this.ya], null), new U(null, 2, 5, V, [Fp, this.Za], null)], null), this.v));
};
k.I = function() {
  return this.D;
};
k.T = function() {
  return 2 + N(this.v);
};
k.P = function() {
  var a = this.A;
  return null != a ? a : this.A = a = yf(this);
};
k.M = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && Yh(this, b) : b) ? !0 : !1;
};
k.gd = function() {
  return gh.j(gh.j(this, new U(null, 1, 5, V, [Fp], null), function() {
    return function(a) {
      return Cg.h(Yx, a);
    };
  }(this)), new U(null, 1, 5, V, [Xn], null), Yx);
};
k.Sa = function(a, b) {
  return Ne(new fj(null, new p(null, 2, [Xn, null, Fp, null], null), null), b) ? ie.h(Ud(ah.h(ei, this), this.D), b) : new iy(this.ya, this.Za, this.D, kg(ie.h(this.v, b)), null);
};
k.va = function(a, b, c) {
  return q(X.h ? X.h(Xn, b) : X.call(null, Xn, b)) ? new iy(c, this.Za, this.D, this.v, null) : q(X.h ? X.h(Fp, b) : X.call(null, Fp, b)) ? new iy(this.ya, c, this.D, this.v, null) : new iy(this.ya, this.Za, this.D, R.j(this.v, b, c), null);
};
k.Q = function() {
  return E(bg.h(new U(null, 2, 5, V, [new U(null, 2, 5, V, [Xn, this.ya], null), new U(null, 2, 5, V, [Fp, this.Za], null)], null), this.v));
};
k.J = function(a, b) {
  return new iy(this.ya, this.Za, b, this.v, this.A);
};
k.S = function(a, b) {
  return te(b) ? Bb(this, v.h(b, 0), v.h(b, 1)) : Ue.j(qb, this, b);
};
function jy(a, b, c) {
  b = R.j(b, Rm, Ue.h(Ye, Cg.h(Ox, c)));
  a = a.g ? a.g(b) : a.call(null, b);
  return new iy(a, c);
}
function ky(a) {
  return wh(Df(Xg.h(Xn, Zg(Fp, Fp, a))));
}
function ly(a) {
  return Cg.h(Xn, ky(a));
}
function my(a) {
  return Yg.h(Xn, Zg(Fp, Fp, a));
}
function ny(a) {
  return Vw(function(a, c) {
    return R.j(a, Fp, c);
  }, a);
}
function oy(a, b, c) {
  for (a = ny(a);;) {
    var d = Xn.g(Ww(a));
    if (q(d)) {
      var e = d;
      if (C.h(b, Sp.g(e))) {
        return Zw(ax(a, function() {
          return function(a) {
            return gh.j(a, new U(null, 1, 5, V, [Xn], null), c);
          };
        }(a, e, d)));
      }
      if (cx(a)) {
        return null;
      }
      a = bx(a);
    } else {
      return null;
    }
  }
}
function py(a) {
  var b = jj($i(Ml.g(a))), c = Kn.g(a), d = Jr.h(b, c), b = bj.k(K([pj(b, Rg.g(Kp)), pj(c, Rg.g(Go)), pj(d, Rg.g(mo))], 0));
  return R.k(bj.k(K([new p(null, 3, [Go, 0, Kp, 0, mo, 0], null), uj(ci(b))], 0)), om, om.g(a), K([Sn, N(Y.g(a))], 0));
}
;var qy, ry, sy, ty;
function uy(a, b) {
  if (a ? a.zc : a) {
    return a.zc(a, b);
  }
  var c;
  c = uy[n(null == a ? null : a)];
  if (!c && (c = uy._, !c)) {
    throw t("ReadPort.take!", a);
  }
  return c.call(null, a, b);
}
function vy(a, b, c) {
  if (a ? a.Ac : a) {
    return a.Ac(a, b, c);
  }
  var d;
  d = vy[n(null == a ? null : a)];
  if (!d && (d = vy._, !d)) {
    throw t("WritePort.put!", a);
  }
  return d.call(null, a, b, c);
}
function wy(a) {
  if (a ? a.Wb : a) {
    return a.Wb(a);
  }
  var b;
  b = wy[n(null == a ? null : a)];
  if (!b && (b = wy._, !b)) {
    throw t("Channel.close!", a);
  }
  return b.call(null, a);
}
function xy(a) {
  if (a ? a.rb : a) {
    return a.rb(a);
  }
  var b;
  b = xy[n(null == a ? null : a)];
  if (!b && (b = xy._, !b)) {
    throw t("Handler.active?", a);
  }
  return b.call(null, a);
}
function yy(a) {
  if (a ? a.Ja : a) {
    return a.Ja(a);
  }
  var b;
  b = yy[n(null == a ? null : a)];
  if (!b && (b = yy._, !b)) {
    throw t("Handler.commit", a);
  }
  return b.call(null, a);
}
function zy(a) {
  if (a ? a.Tc : a) {
    return a.Tc();
  }
  var b;
  b = zy[n(null == a ? null : a)];
  if (!b && (b = zy._, !b)) {
    throw t("Buffer.full?", a);
  }
  return b.call(null, a);
}
;function Ay(a, b, c, d, e) {
  for (var f = 0;;) {
    if (f < e) {
      c[d + f] = a[b + f], f += 1;
    } else {
      break;
    }
  }
}
function By(a, b, c, d) {
  this.head = a;
  this.U = b;
  this.length = c;
  this.l = d;
}
By.prototype.pop = function() {
  if (0 === this.length) {
    return null;
  }
  var a = this.l[this.U];
  this.l[this.U] = null;
  this.U = (this.U + 1) % this.l.length;
  this.length -= 1;
  return a;
};
By.prototype.unshift = function(a) {
  this.l[this.head] = a;
  this.head = (this.head + 1) % this.l.length;
  this.length += 1;
  return null;
};
function Cy(a, b) {
  a.length + 1 === a.l.length && a.resize();
  a.unshift(b);
}
By.prototype.resize = function() {
  var a = Array(2 * this.l.length);
  return this.U < this.head ? (Ay(this.l, this.U, a, 0, this.length), this.U = 0, this.head = this.length, this.l = a) : this.U > this.head ? (Ay(this.l, this.U, a, 0, this.l.length - this.U), Ay(this.l, 0, a, this.l.length - this.U, this.head), this.U = 0, this.head = this.length, this.l = a) : this.U === this.head ? (this.head = this.U = 0, this.l = a) : null;
};
function Dy(a, b) {
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
function Ey(a) {
  if (!(0 < a)) {
    throw Error("Assert failed: Can't create a ring buffer of size 0\n" + u.g(zg.k(K([Ef(new Cd(null, "\x3e", "\x3e", 1085014381, null), new Cd(null, "n", "n", -2092305744, null), 0)], 0))));
  }
  return new By(0, 0, 0, Array(a));
}
function Fy(a, b) {
  this.ua = a;
  this.zb = b;
  this.G = 0;
  this.q = 2;
}
Fy.prototype.T = function() {
  return this.ua.length;
};
Fy.prototype.Tc = function() {
  return this.ua.length === this.zb;
};
Fy.prototype.ne = function() {
  return this.ua.pop();
};
function Gy(a, b) {
  if (!fb(zy(a))) {
    throw Error("Assert failed: Can't add to a full buffer\n" + u.g(zg.k(K([Ef(new Cd(null, "not", "not", 1044554643, null), Ef(new Cd("impl", "full?", "impl/full?", -97582774, null), new Cd(null, "this", "this", 1028897902, null)))], 0))));
  }
  a.ua.unshift(b);
}
;var Hy = null, Iy = Ey(32), Jy = !1, Ky = !1;
function Ly() {
  Jy = !0;
  Ky = !1;
  for (var a = 0;;) {
    var b = Iy.pop();
    if (null != b && (b.p ? b.p() : b.call(null), 1024 > a)) {
      a += 1;
      continue;
    }
    break;
  }
  Jy = !1;
  return 0 < Iy.length ? My.p ? My.p() : My.call(null) : null;
}
"undefined" !== typeof MessageChannel && (Hy = new MessageChannel, Hy.port1.onmessage = function() {
  return Ly();
});
function My() {
  var a = Ky;
  if (q(a ? Jy : a)) {
    return null;
  }
  Ky = !0;
  return "undefined" !== typeof MessageChannel ? Hy.port2.postMessage(0) : "undefined" !== typeof setImmediate ? setImmediate(Ly) : setTimeout(Ly, 0);
}
function Ny(a) {
  Cy(Iy, a);
  My();
}
function Oy(a, b) {
  setTimeout(a, b);
}
;var Py, Ry = function Qy(b) {
  "undefined" === typeof Py && (Py = function(b, d, e) {
    this.B = b;
    this.Xd = d;
    this.Ae = e;
    this.G = 0;
    this.q = 425984;
  }, Py.Fa = !0, Py.Ea = "cljs.core.async.impl.channels/t29272", Py.Ka = function(b, d) {
    return zc(d, "cljs.core.async.impl.channels/t29272");
  }, Py.prototype.Ub = function() {
    return this.B;
  }, Py.prototype.I = function() {
    return this.Ae;
  }, Py.prototype.J = function(b, d) {
    return new Py(this.B, this.Xd, d);
  });
  return new Py(b, Qy, null);
};
function Sy(a, b) {
  this.Ib = a;
  this.B = b;
}
function Ty(a) {
  return xy(a.Ib);
}
function Uy(a, b, c, d, e, f) {
  this.pc = a;
  this.Cc = b;
  this.Ic = c;
  this.Bc = d;
  this.ua = e;
  this.closed = f;
}
Uy.prototype.Wb = function() {
  if (!this.closed) {
    for (this.closed = !0;;) {
      var a = this.pc.pop();
      if (null != a) {
        if (a.rb(null)) {
          var b = a.Ja(null);
          Ny(function(a) {
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
Uy.prototype.zc = function(a, b) {
  if (b.rb(null)) {
    if (null != this.ua && 0 < N(this.ua)) {
      var c = b.Ja(null);
      return Ry(this.ua.ne());
    }
    for (;;) {
      var d = this.Ic.pop();
      if (null != d) {
        var e = d.Ib, f = d.B;
        if (e.rb(null)) {
          var g = e.Ja(null), c = b.Ja(null);
          Ny(function(a) {
            return function() {
              return a.g ? a.g(!0) : a.call(null, !0);
            };
          }(g, c, e, f, d, this));
          return Ry(f);
        }
      } else {
        if (this.closed) {
          return c = b.Ja(null), Ry(null);
        }
        64 < this.Cc ? (this.Cc = 0, Dy(this.pc, xy)) : this.Cc += 1;
        if (!(1024 > this.pc.length)) {
          throw Error("Assert failed: " + u.g("No more than " + u.g(1024) + " pending takes are allowed on a single channel.") + "\n" + u.g(zg.k(K([Ef(new Cd(null, "\x3c", "\x3c", 993667236, null), Ef(new Cd(null, ".-length", ".-length", -280799999, null), new Cd(null, "takes", "takes", 298247964, null)), new Cd("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", 1508600732, null))], 0))));
        }
        Cy(this.pc, b);
        return null;
      }
    }
  } else {
    return null;
  }
};
Uy.prototype.Ac = function(a, b, c) {
  if (null == b) {
    throw Error("Assert failed: Can't put nil in on a channel\n" + u.g(zg.k(K([Ef(new Cd(null, "not", "not", 1044554643, null), Ef(new Cd(null, "nil?", "nil?", 1612038930, null), new Cd(null, "val", "val", 1769233139, null)))], 0))));
  }
  if ((a = this.closed) || !c.rb(null)) {
    return Ry(!a);
  }
  for (;;) {
    var d = this.pc.pop();
    if (null != d) {
      if (d.rb(null)) {
        var e = d.Ja(null);
        c = c.Ja(null);
        Ny(function(a) {
          return function() {
            return a.g ? a.g(b) : a.call(null, b);
          };
        }(e, c, d, a, this));
        return Ry(!0);
      }
    } else {
      if (null == this.ua || this.ua.Tc()) {
        64 < this.Bc ? (this.Bc = 0, Dy(this.Ic, Ty)) : this.Bc += 1;
        if (!(1024 > this.Ic.length)) {
          throw Error("Assert failed: " + u.g("No more than " + u.g(1024) + " pending puts are allowed on a single channel. Consider using a windowed buffer.") + "\n" + u.g(zg.k(K([Ef(new Cd(null, "\x3c", "\x3c", 993667236, null), Ef(new Cd(null, ".-length", ".-length", -280799999, null), new Cd(null, "puts", "puts", -1883877054, null)), new Cd("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", 1508600732, null))], 0))));
        }
        Cy(this.Ic, new Sy(c, b));
        return null;
      }
      c = c.Ja(null);
      Gy(this.ua, b);
      return Ry(!0);
    }
  }
};
function Vy(a) {
  return new Uy(Ey(32), 0, Ey(32), 0, a, !1);
}
;var Wy, Yy = function Xy(b) {
  "undefined" === typeof Wy && (Wy = function(b, d, e) {
    this.f = b;
    this.Xc = d;
    this.ze = e;
    this.G = 0;
    this.q = 393216;
  }, Wy.Fa = !0, Wy.Ea = "cljs.core.async.impl.ioc-helpers/t29136", Wy.Ka = function(b, d) {
    return zc(d, "cljs.core.async.impl.ioc-helpers/t29136");
  }, Wy.prototype.rb = function() {
    return!0;
  }, Wy.prototype.Ja = function() {
    return this.f;
  }, Wy.prototype.I = function() {
    return this.ze;
  }, Wy.prototype.J = function(b, d) {
    return new Wy(this.f, this.Xc, d);
  });
  return new Wy(b, Xy, null);
};
function Zy(a) {
  try {
    return a[0].call(null, a);
  } catch (b) {
    throw b instanceof Object && a[6].Wb(null), b;
  }
}
function $y(a, b, c) {
  c = c.zc(null, Yy(function(c) {
    a[2] = c;
    a[1] = b;
    return Zy(a);
  }));
  return q(c) ? (a[2] = L.g ? L.g(c) : L.call(null, c), a[1] = b, Z) : null;
}
function az(a, b) {
  var c = a[6];
  null != b && c.Ac(null, b, Yy(function() {
    return function() {
      return null;
    };
  }(c)));
  c.Wb(null);
  return c;
}
function bz(a) {
  for (;;) {
    var b = a[4], c = Nm.g(b), d = Ro.g(b), e = a[5];
    if (q(function() {
      var a = e;
      return q(a) ? fb(b) : a;
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
      a[4] = R.k(b, Nm, null, K([Ro, null], 0));
      break;
    }
    if (q(function() {
      var a = e;
      return q(a) ? fb(c) && fb(Ul.g(b)) : a;
    }())) {
      a[4] = cp.g(b);
    } else {
      if (q(function() {
        var a = e;
        return q(a) ? (a = fb(c)) ? Ul.g(b) : a : a;
      }())) {
        a[1] = Ul.g(b);
        a[4] = R.j(b, Ul, null);
        break;
      }
      if (q(function() {
        var a = fb(e);
        return a ? Ul.g(b) : a;
      }())) {
        a[1] = Ul.g(b);
        a[4] = R.j(b, Ul, null);
        break;
      }
      if (fb(e) && fb(Ul.g(b))) {
        a[1] = jp.g(b);
        a[4] = cp.g(b);
        break;
      }
      throw Error("Assert failed: No matching clause\n" + u.g(zg.k(K([!1], 0))));
    }
  }
}
;var cz = function() {
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
function dz(a, b, c) {
  this.key = a;
  this.B = b;
  this.forward = c;
  this.G = 0;
  this.q = 2155872256;
}
dz.prototype.N = function(a, b, c) {
  return Aj(b, Gj, "[", " ", "]", c, this);
};
dz.prototype.Q = function() {
  return qb(qb(Fd, this.B), this.key);
};
var ez = function() {
  function a(a, b, c) {
    c = Array(c + 1);
    for (var g = 0;;) {
      if (g < c.length) {
        c[g] = null, g += 1;
      } else {
        break;
      }
    }
    return new dz(a, b, c);
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
}(), fz = function() {
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
function gz(a, b) {
  this.Kb = a;
  this.Na = b;
  this.G = 0;
  this.q = 2155872256;
}
gz.prototype.N = function(a, b, c) {
  return Aj(b, function() {
    return function(a) {
      return Aj(b, Gj, "", " ", "", c, a);
    };
  }(this), "{", ", ", "}", c, this);
};
gz.prototype.Q = function() {
  return function(a) {
    return function c(d) {
      return new If(null, function() {
        return function() {
          return null == d ? null : Sd(new U(null, 2, 5, V, [d.key, d.B], null), c(d.forward[0]));
        };
      }(a), null, null);
    };
  }(this)(this.Kb.forward[0]);
};
gz.prototype.put = function(a, b) {
  var c = Array(15), d = fz.m(this.Kb, a, this.Na, c).forward[0];
  if (null != d && d.key === a) {
    return d.B = b;
  }
  d = cz.p();
  if (d > this.Na) {
    for (var e = this.Na + 1;;) {
      if (e <= d + 1) {
        c[e] = this.Kb, e += 1;
      } else {
        break;
      }
    }
    this.Na = d;
  }
  for (d = ez.j(a, b, Array(d));;) {
    return 0 <= this.Na ? (c = c[0].forward, d.forward[0] = c[0], c[0] = d) : null;
  }
};
gz.prototype.remove = function(a) {
  var b = Array(15), c = fz.m(this.Kb, a, this.Na, b).forward[0];
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
      if (0 < this.Na && null == this.Kb.forward[this.Na]) {
        this.Na -= 1;
      } else {
        return null;
      }
    }
  } else {
    return null;
  }
};
function hz(a) {
  for (var b = iz, c = b.Kb, d = b.Na;;) {
    if (0 > d) {
      return c === b.Kb ? null : c;
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
var iz = new gz(ez.g(0), 0);
function jz(a) {
  var b = (new Date).valueOf() + a, c = hz(b), d = q(q(c) ? c.key < b + 10 : c) ? c.B : null;
  if (q(d)) {
    return d;
  }
  var e = Vy(null);
  iz.put(b, e);
  Oy(function(a, b, c) {
    return function() {
      iz.remove(c);
      return a.Wb(null);
    };
  }(e, d, b, c), a);
  return e;
}
;var lz = function kz(b) {
  "undefined" === typeof qy && (qy = function(b, d, e) {
    this.f = b;
    this.Xc = d;
    this.we = e;
    this.G = 0;
    this.q = 393216;
  }, qy.Fa = !0, qy.Ea = "cljs.core.async/t26214", qy.Ka = function(b, d) {
    return zc(d, "cljs.core.async/t26214");
  }, qy.prototype.rb = function() {
    return!0;
  }, qy.prototype.Ja = function() {
    return this.f;
  }, qy.prototype.I = function() {
    return this.we;
  }, qy.prototype.J = function(b, d) {
    return new qy(this.f, this.Xc, d);
  });
  return new qy(b, kz, null);
}, mz = function() {
  function a(a) {
    a = C.h(a, 0) ? null : a;
    a = "number" === typeof a ? new Fy(Ey(a), a) : a;
    return Vy(a);
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
}(), nz = lz(function() {
  return null;
}), oz = function() {
  function a(a, b, c, d) {
    a = vy(a, b, lz(c));
    return q(a) ? (b = L.g ? L.g(a) : L.call(null, a), q(d) ? c.g ? c.g(b) : c.call(null, b) : Ny(function(a) {
      return function() {
        return c.g ? c.g(a) : c.call(null, a);
      };
    }(b, a, a)), b) : !0;
  }
  function b(a, b, c) {
    return d.m(a, b, c, !0);
  }
  function c(a, b) {
    var c = vy(a, b, nz);
    return q(c) ? L.g ? L.g(c) : L.call(null, c) : !0;
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
}(), qz = function pz(b, c) {
  "undefined" === typeof ry && (ry = function(b, c, f, g) {
    this.ch = b;
    this.f = c;
    this.Fc = f;
    this.Gc = g;
    this.G = 0;
    this.q = 393216;
  }, ry.Fa = !0, ry.Ea = "cljs.core.async/t26300", ry.Ka = function(b, c) {
    return zc(c, "cljs.core.async/t26300");
  }, ry.prototype.Ac = function(b, c, f) {
    return vy(this.ch, c, f);
  }, ry.prototype.zc = function(b, c) {
    var f = this, g = this, h = uy(f.ch, function() {
      "undefined" === typeof sy && (sy = function(b, c, d, e, f, g, h) {
        this.Wc = b;
        this.Vd = c;
        this.Gc = d;
        this.ch = e;
        this.f = f;
        this.Fc = g;
        this.xe = h;
        this.G = 0;
        this.q = 393216;
      }, sy.Fa = !0, sy.Ea = "cljs.core.async/t26303", sy.Ka = function() {
        return function(b, c) {
          return zc(c, "cljs.core.async/t26303");
        };
      }(g), sy.prototype.rb = function() {
        return function() {
          return xy(this.Wc);
        };
      }(g), sy.prototype.Ja = function(b) {
        return function() {
          var c = this;
          return function(b) {
            return function(d) {
              d = null == d ? null : c.f.g ? c.f.g(d) : c.f.call(null, d);
              return b.g ? b.g(d) : b.call(null, d);
            };
          }(yy(c.Wc), this, b);
        };
      }(g), sy.prototype.I = function() {
        return function() {
          return this.xe;
        };
      }(g), sy.prototype.J = function() {
        return function(b, c) {
          return new sy(this.Wc, this.Vd, this.Gc, this.ch, this.f, this.Fc, c);
        };
      }(g));
      return new sy(c, g, f.Gc, f.ch, f.f, f.Fc, null);
    }());
    return q(q(h) ? null != (L.g ? L.g(h) : L.call(null, h)) : h) ? Ry(function() {
      var b = L.g ? L.g(h) : L.call(null, h);
      return f.f.g ? f.f.g(b) : f.f.call(null, b);
    }()) : h;
  }, ry.prototype.Wb = function() {
    return wy(this.ch);
  }, ry.prototype.I = function() {
    return this.Gc;
  }, ry.prototype.J = function(b, c) {
    return new ry(this.ch, this.f, this.Fc, c);
  });
  return new ry(c, b, pz, null);
};
function rz(a, b, c) {
  if (a ? a.zd : a) {
    return a.zd(a, b, c);
  }
  var d;
  d = rz[n(null == a ? null : a)];
  if (!d && (d = rz._, !d)) {
    throw t("Mult.tap*", a);
  }
  return d.call(null, a, b, c);
}
var sz = function() {
  function a(a, b, c) {
    rz(a, b, c);
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
function tz(a, b) {
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
    return uz[m].apply(null, arguments);
  });
}
var uz = {s:function(a, b, c) {
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
  return uz.f(parseInt(a, 10), b, c, d, 0, f, g, h);
}};
uz.i = uz.d;
uz.u = uz.d;
function vz(a) {
  a.beginPath();
}
function wz(a) {
  a.stroke();
}
function xz(a, b) {
  var c = ye(b) ? S.h(vg, b) : b, d = Q.h(c, Ao), e = Q.h(c, $l), f = Q.h(c, Pj), c = Q.h(c, Ep);
  a.clearRect(c, f, e, d);
}
function yz(a, b) {
  var c = ye(b) ? S.h(vg, b) : b, d = Q.h(c, Ao), e = Q.h(c, $l), f = Q.h(c, Pj), c = Q.h(c, Ep);
  a.strokeRect(c, f, e, d);
}
function zz(a, b) {
  var c = ye(b) ? S.h(vg, b) : b, d = Q.h(c, Ao), e = Q.h(c, $l), f = Q.h(c, Pj), c = Q.h(c, Ep);
  a.fillRect(c, f, e, d);
}
function Az(a, b) {
  var c = ye(b) ? S.h(vg, b) : b, d = Q.h(c, Pj), e = Q.h(c, Ep), c = Q.h(c, Cr);
  a.fillText(c, e, d);
}
function Bz(a, b) {
  a.fillStyle = Gf(b);
}
function Cz(a, b) {
  a.strokeStyle = Gf(b);
}
function Dz(a, b) {
  a.globalAlpha = b;
  return a;
}
var Ez = function() {
  function a(a, b, c, g) {
    a.drawImage(b, c, g);
    return a;
  }
  function b(a, b, c) {
    var g = ye(c) ? S.h(vg, c) : c;
    c = Q.h(g, Mp);
    var h = Q.h(g, Op), l = Q.h(g, Ep), m = Q.h(g, Pj), r = Q.h(g, mk), s = Q.h(g, tk), w = Q.h(g, $l), A = Q.h(g, bm), y = Q.h(g, wm), B = Q.h(g, Ao), D = Q.h(g, qp), I = Q.h(g, wp), g = N(g);
    if (q(C.h ? C.h(2, g) : C.call(null, 2, g))) {
      a.drawImage(b, l, m);
    } else {
      if (q(C.h ? C.h(4, g) : C.call(null, 4, g))) {
        a.drawImage(b, l, m, w, B);
      } else {
        if (q(C.h ? C.h(8, g) : C.call(null, 8, g))) {
          a.drawImage(b, I, A, h, c, s, y, D, r);
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
}(), Fz = function() {
  function a(a, b, c, g, h, l, m) {
    a.bezierCurveTo(b, c, g, h, l, m);
    return a;
  }
  function b(a, b) {
    var c = ye(b) ? S.h(vg, b) : b, g = Q.h(c, Pj), h = Q.h(c, Ep), l = Q.h(c, Rp), m = Q.h(c, so), r = Q.h(c, lp), c = Q.h(c, oo);
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
var Gz, Hz = new p(null, 5, [Qp, new p(null, 2, [Go, !0, Kp, !0], null), Y, new p(null, 5, [Go, !0, Io, null, Gm, !0, vl, !0, sl, 0], null), Yj, new p(null, 3, [Go, null, Oj, null, ir, null], null), Il, new p(null, 4, [Bo, Wn, Go, !0, Oj, null, ir, null], null), up, he([Tj, uk, Tl, Vl, Wl, Jm, Un, Hp, tr, ur, Ar], [30, 50, 10, 80, .85, 25, 2, 5, 5, .85, 10])], null);
Gz = xg.g ? xg.g(Hz) : xg.call(null, Hz);
var Iz = xg.g ? xg.g(25) : xg.call(null, 25), Jz = xg.g ? xg.g(ee) : xg.call(null, ee), Kz = xg.g ? xg.g(null) : xg.call(null, null), Lz = function() {
  function a(a, b, c, g) {
    var h = a instanceof W ? function() {
      switch(a instanceof W ? a.ea : null) {
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
    return "hsla(" + u.g(h) + "," + u.g(qf(100 * b)) + "%," + u.g(qf(100 * c)) + "%," + u.g(g) + ")";
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
}(), Mz = new p(null, 6, [Oj, "white", Go, Lz.j(No, 1, .5), Kp, Lz.m(Po, 1, .5, .5), mo, Lz.j(Zp, 1, .4), Pl, Lz.m(Ol, 1, .75, .5), vl, Lz.m(im, 1, .5, .4)], null);
function Nz(a) {
  if (a ? a.Id : a) {
    return a.Id();
  }
  var b;
  b = Nz[n(null == a ? null : a)];
  if (!b && (b = Nz._, !b)) {
    throw t("PArrayLayout.layout-bounds", a);
  }
  return b.call(null, a);
}
function Oz(a, b) {
  if (a ? a.Ld : a) {
    return a.Ld(0, b);
  }
  var c;
  c = Oz[n(null == a ? null : a)];
  if (!c && (c = Oz._, !c)) {
    throw t("PArrayLayout.origin-px-topleft", a);
  }
  return c.call(null, a, b);
}
function Pz(a, b) {
  if (a ? a.Jd : a) {
    return a.Jd(0, b);
  }
  var c;
  c = Pz[n(null == a ? null : a)];
  if (!c && (c = Pz._, !c)) {
    throw t("PArrayLayout.local-px-topleft", a);
  }
  return c.call(null, a, b);
}
function Qz(a) {
  if (a ? a.Fd : a) {
    return a.Fd();
  }
  var b;
  b = Qz[n(null == a ? null : a)];
  if (!b && (b = Qz._, !b)) {
    throw t("PArrayLayout.element-size-px", a);
  }
  return b.call(null, a);
}
function Rz(a) {
  if (a ? a.Kd : a) {
    return a.Kd();
  }
  var b;
  b = Rz[n(null == a ? null : a)];
  if (!b && (b = Rz._, !b)) {
    throw t("PArrayLayout.n-onscreen", a);
  }
  return b.call(null, a);
}
function Sz(a) {
  if (a ? a.oe : a) {
    return a.ma;
  }
  var b;
  b = Sz[n(null == a ? null : a)];
  if (!b && (b = Sz._, !b)) {
    throw t("PArrayLayout.top-id-onscreen", a);
  }
  return b.call(null, a);
}
function Tz(a, b, c) {
  if (a ? a.Dd : a) {
    return a.Dd(0, b, c);
  }
  var d;
  d = Tz[n(null == a ? null : a)];
  if (!d && (d = Tz._, !d)) {
    throw t("PArrayLayout.clicked-id", a);
  }
  return d.call(null, a, b, c);
}
function Uz(a, b, c) {
  if (a ? a.Ed : a) {
    return a.Ed(0, b, c);
  }
  var d;
  d = Uz[n(null == a ? null : a)];
  if (!d && (d = Uz._, !d)) {
    throw t("PArrayLayout.draw-element", a);
  }
  return d.call(null, a, b, c);
}
function Vz(a, b, c) {
  if (a ? a.Gd : a) {
    return a.Gd(0, b, c);
  }
  var d;
  d = Vz[n(null == a ? null : a)];
  if (!d && (d = Vz._, !d)) {
    throw t("PArrayLayout.highlight-dt", a);
  }
  return d.call(null, a, b, c);
}
function Wz(a, b, c, d) {
  if (a ? a.Hd : a) {
    return a.Hd(0, b, c, d);
  }
  var e;
  e = Wz[n(null == a ? null : a)];
  if (!e && (e = Wz._, !e)) {
    throw t("PArrayLayout.highlight-element", a);
  }
  return e.call(null, a, b, c, d);
}
function Xz(a) {
  a = Nz(a);
  return Ep.g(a) + $l.g(a);
}
function Yz(a, b, c) {
  var d = Qz(a), e = O.j(d, 0, null), d = O.j(d, 1, null), f = Oz(a, c);
  c = O.j(f, 0, null);
  f = O.j(f, 1, null);
  b = Pz(a, b);
  a = O.j(b, 0, null);
  b = O.j(b, 1, null);
  return new U(null, 2, 5, V, [c + a + .5 * e, f + b + .5 * d], null);
}
function Zz(a, b, c) {
  var d = Sz(b), e = d + Rz(b) + -1;
  vz(a);
  c = E(c);
  for (var f = null, g = 0, h = 0;;) {
    if (h < g) {
      var l = f.F(null, h);
      d <= l && l <= e && Uz(b, a, l);
      h += 1;
    } else {
      if (c = E(c)) {
        f = c, T(f) ? (c = x(f), h = z(f), f = c, g = N(c), c = h) : (c = F(f), d <= c && c <= e && Uz(b, a, c), c = H(f), f = null, g = 0), h = 0;
      } else {
        break;
      }
    }
  }
}
function $z(a, b, c) {
  a.save();
  c = E(Mj(c, $i(c)));
  for (var d = null, e = 0, f = 0;;) {
    if (f < e) {
      var g = d.F(null, f), h = O.j(g, 0, null), g = O.j(g, 1, null);
      Zz(a, b, g);
      g = a;
      Dz.h ? Dz.h(g, h) : Dz.call(null, g, h);
      a.fill();
      f += 1;
    } else {
      if (c = E(c)) {
        T(c) ? (e = x(c), c = z(c), d = e, e = N(e)) : (e = F(c), d = O.j(e, 0, null), e = O.j(e, 1, null), Zz(a, b, e), e = a, Dz.h ? Dz.h(e, d) : Dz.call(null, e, d), a.fill(), c = H(c), d = null, e = 0), f = 0;
      } else {
        break;
      }
    }
  }
  a.restore();
}
function aA(a, b, c, d) {
  c = Oz(b, c);
  b = O.j(c, 0, null);
  c = O.j(c, 1, null);
  Ez.m(a, d, b, c);
}
function bA(a, b, c, d) {
  return new p(null, 4, [Ep, a - c / 2, Pj, b - d / 2, $l, c, Ao, d], null);
}
function cA(a, b) {
  Cz(a, Pl.g(Mz));
  a.lineWidth = 3;
  yz(a, b);
  Cz(a, "black");
  a.lineWidth = 1;
  yz(a, b);
  return a;
}
function dA(a, b, c, d, e, f, g, h, l, m) {
  this.xa = a;
  this.ma = b;
  this.pa = c;
  this.da = d;
  this.fa = e;
  this.ta = f;
  this.ra = g;
  this.za = h;
  this.D = l;
  this.v = m;
  this.q = 2229667594;
  this.G = 8192;
  8 < arguments.length ? (this.D = l, this.v = m) : this.v = this.D = null;
}
k = dA.prototype;
k.K = function(a, b) {
  return yb.j(this, b, null);
};
k.L = function(a, b, c) {
  switch(b instanceof W ? b.ea : null) {
    case "circles?":
      return this.za;
    case "left-px":
      return this.ra;
    case "shrink":
      return this.ta;
    case "element-h":
      return this.fa;
    case "element-w":
      return this.da;
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
  return Aj(b, function() {
    return function(a) {
      return Aj(b, Gj, "", " ", "", c, a);
    };
  }(this), "#comportexviz.viz-canvas.Grid1dLayout{", ", ", "}", c, bg.h(new U(null, 8, 5, V, [new U(null, 2, 5, V, [sr, this.xa], null), new U(null, 2, 5, V, [wk, this.ma], null), new U(null, 2, 5, V, [Jm, this.pa], null), new U(null, 2, 5, V, [Dr, this.da], null), new U(null, 2, 5, V, [cm, this.fa], null), new U(null, 2, 5, V, [Dm, this.ta], null), new U(null, 2, 5, V, [Xo, this.ra], null), new U(null, 2, 5, V, [cq, this.za], null)], null), this.v));
};
k.I = function() {
  return this.D;
};
k.T = function() {
  return 8 + N(this.v);
};
k.Kd = function() {
  var a = this.xa, b = 880 / this.fa;
  return a < b ? a : b;
};
k.Gd = function(a, b, c) {
  c = Oz(this, c);
  a = O.j(c, 0, null);
  c = O.j(c, 1, null);
  var d = Nz(this);
  return cA(b, new p(null, 4, [Ep, a, Pj, c - 5, $l, this.da + 1, Ao, 10 + Ao.g(d)], null));
};
k.Fd = function() {
  return new U(null, 2, 5, V, [this.da, this.fa], null);
};
k.Ed = function(a, b, c) {
  c = Pz(this, c);
  a = O.j(c, 0, null);
  c = O.j(c, 1, null);
  if (q(this.za)) {
    var d = this.da * this.ta * .5;
    b = b.arc(a + d, c + d, d, 0, 2 * Math.PI, !0);
  } else {
    b = b.rect(a, c, this.da * this.ta, this.fa * this.ta);
  }
  return b;
};
k.oe = function() {
  return this.ma;
};
k.Ld = function(a, b) {
  return new U(null, 2, 5, V, [this.ra + this.pa * this.da - (b + 1) * this.da, 20], null);
};
k.Jd = function(a, b) {
  return new U(null, 2, 5, V, [0, (b - this.ma) * this.fa], null);
};
k.Dd = function(a, b, c) {
  var d = this, e = d.ra + d.pa * d.da;
  a = function() {
    var a = (e - b) / d.da;
    return Math.floor.g ? Math.floor.g(a) : Math.floor.call(null, a);
  }();
  var f = function() {
    var a = (c - 20) / d.fa;
    return Math.floor.g ? Math.floor.g(a) : Math.floor.call(null, a);
  }(), g = f + d.ma;
  return 0 <= a && a <= N(L.g ? L.g(Jz) : L.call(null, Jz)) && 0 <= f && f <= Rz(this) ? new U(null, 2, 5, V, [a, g], null) : null;
};
k.Hd = function(a, b, c, d) {
  a = Oz(this, c);
  O.j(a, 0, null);
  a = O.j(a, 1, null);
  d = Pz(this, d);
  O.j(d, 0, null);
  d = O.j(d, 1, null);
  c = Nz(this);
  return cA(b, new p(null, 4, [Ep, Ep.g(c) - 5, Pj, a + d, $l, $l.g(c) + 10, Ao, this.fa + 1], null));
};
k.Id = function() {
  return new p(null, 4, [Ep, this.ra, Pj, 20, $l, this.pa * this.da, Ao, this.xa * this.fa], null);
};
k.P = function() {
  var a = this.A;
  return null != a ? a : this.A = a = yf(this);
};
k.M = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && Yh(this, b) : b) ? !0 : !1;
};
k.Sa = function(a, b) {
  return Ne(new fj(null, new p(null, 8, [wk, null, cm, null, Dm, null, Jm, null, Xo, null, cq, null, sr, null, Dr, null], null), null), b) ? ie.h(Ud(ah.h(ei, this), this.D), b) : new dA(this.xa, this.ma, this.pa, this.da, this.fa, this.ta, this.ra, this.za, this.D, kg(ie.h(this.v, b)), null);
};
k.va = function(a, b, c) {
  return q(X.h ? X.h(sr, b) : X.call(null, sr, b)) ? new dA(c, this.ma, this.pa, this.da, this.fa, this.ta, this.ra, this.za, this.D, this.v, null) : q(X.h ? X.h(wk, b) : X.call(null, wk, b)) ? new dA(this.xa, c, this.pa, this.da, this.fa, this.ta, this.ra, this.za, this.D, this.v, null) : q(X.h ? X.h(Jm, b) : X.call(null, Jm, b)) ? new dA(this.xa, this.ma, c, this.da, this.fa, this.ta, this.ra, this.za, this.D, this.v, null) : q(X.h ? X.h(Dr, b) : X.call(null, Dr, b)) ? new dA(this.xa, this.ma, 
  this.pa, c, this.fa, this.ta, this.ra, this.za, this.D, this.v, null) : q(X.h ? X.h(cm, b) : X.call(null, cm, b)) ? new dA(this.xa, this.ma, this.pa, this.da, c, this.ta, this.ra, this.za, this.D, this.v, null) : q(X.h ? X.h(Dm, b) : X.call(null, Dm, b)) ? new dA(this.xa, this.ma, this.pa, this.da, this.fa, c, this.ra, this.za, this.D, this.v, null) : q(X.h ? X.h(Xo, b) : X.call(null, Xo, b)) ? new dA(this.xa, this.ma, this.pa, this.da, this.fa, this.ta, c, this.za, this.D, this.v, null) : q(X.h ? 
  X.h(cq, b) : X.call(null, cq, b)) ? new dA(this.xa, this.ma, this.pa, this.da, this.fa, this.ta, this.ra, c, this.D, this.v, null) : new dA(this.xa, this.ma, this.pa, this.da, this.fa, this.ta, this.ra, this.za, this.D, R.j(this.v, b, c), null);
};
k.Q = function() {
  return E(bg.h(new U(null, 8, 5, V, [new U(null, 2, 5, V, [sr, this.xa], null), new U(null, 2, 5, V, [wk, this.ma], null), new U(null, 2, 5, V, [Jm, this.pa], null), new U(null, 2, 5, V, [Dr, this.da], null), new U(null, 2, 5, V, [cm, this.fa], null), new U(null, 2, 5, V, [Dm, this.ta], null), new U(null, 2, 5, V, [Xo, this.ra], null), new U(null, 2, 5, V, [cq, this.za], null)], null), this.v));
};
k.J = function(a, b) {
  return new dA(this.xa, this.ma, this.pa, this.da, this.fa, this.ta, this.ra, this.za, b, this.v, this.A);
};
k.S = function(a, b) {
  return te(b) ? Bb(this, v.h(b, 0), v.h(b, 1)) : Ue.j(qb, this, b);
};
function eA(a) {
  return new dA(sr.g(a), wk.g(a), Jm.g(a), Dr.g(a), cm.g(a), Dm.g(a), Xo.g(a), cq.g(a), null, ie.k(a, sr, K([wk, Jm, Dr, cm, Dm, Xo, cq], 0)));
}
function fA(a, b) {
  var c = ye(b) ? S.h(vg, b) : b, d = Q.h(c, ur), e = Q.h(c, Un), f = Q.h(c, Hp), c = Q.h(c, Jm);
  return eA(new p(null, 8, [sr, a, wk, 0, Jm, c, Dr, f, cm, e, Dm, d, Xo, 0, cq, !1], null));
}
function gA(a, b, c) {
  var d = ye(c) ? S.h(vg, c) : c;
  c = Q.h(d, Wl);
  var e = Q.h(d, tr), d = Q.h(d, Jm);
  return eA(new p(null, 8, [sr, a, wk, 0, Jm, d, Dr, e, cm, e, Dm, c, Xo, b, cq, !0], null));
}
function hA(a) {
  Ag.m(Kz, gh, new U(null, 1, 5, V, [nm], null), function(b) {
    return bh.h(function(b) {
      var d = Rz(b), e = sr.g(b);
      return gh.j(b, new U(null, 1, 5, V, [wk], null), function(b, c) {
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
  return Ag.m(Gz, gh, new U(null, 2, 5, V, [Y, sl], null), function(b) {
    return q(a) ? b + 1 : b - 1;
  });
}
function iA(a, b, c, d, e, f, g, h, l) {
  a.save();
  a.lineWidth = 1;
  Dz(a, 1);
  for (var m = q(g) ? new U(null, 1, 5, V, [g], null) : Kn.g(b), r = Vx.g(e), s = dh.h(l, new U(null, 2, 5, V, [Yj, Oj], null)), w = dh.h(l, new U(null, 2, 5, V, [Yj, ir], null)), A = E(m), y = null, B = 0, D = 0;;) {
    if (D < B) {
      for (var I = y.F(null, D), P = E(new U(null, 2, 5, V, [!1, !0], null)), M = null, ea = 0, na = 0;;) {
        if (na < ea) {
          var J = M.F(null, na);
          if (q(function() {
            var a = J;
            return q(a) ? a : s;
          }())) {
            var Ia = dh.h(c, new U(null, 2, 5, V, [Y, I], null)), da = xm.g(Yj.g(Ia)), fa = q(J) ? dj(da, r) : S.j(ie, da, r), ga = Yz(d, I, h), qa = O.j(ga, 0, null), va = O.j(ga, 1, null);
            Cz(a, q(J) ? Mz.g ? Mz.g(Go) : Mz.call(null, Go) : "black");
            for (var ya = E(fa), Aa = null, Fa = 0, oa = 0;;) {
              if (oa < Fa) {
                var Ma = Aa.F(null, oa), ab = O.j(Ma, 0, null), bb = O.j(Ma, 1, null), Da = Rx(e, ab), sb = O.j(Da, 0, null);
                O.j(Da, 1, null);
                var lb = Yz(f, sb, h), cb = O.j(lb, 0, null), Cb = O.j(lb, 1, null), $ = a;
                Dz($, q(w) ? bb : 1);
                vz($);
                $.moveTo(qa - 1, va);
                $.lineTo(cb + 1, Cb);
                wz($);
                oa += 1;
              } else {
                var xc = E(ya);
                if (xc) {
                  var Ob = xc;
                  if (T(Ob)) {
                    var hc = x(Ob), rd = z(Ob), Tc = hc, Lb = N(hc), ya = rd, Aa = Tc, Fa = Lb
                  } else {
                    var Db = F(Ob), Dc = O.j(Db, 0, null), Vd = O.j(Db, 1, null), Lf = Rx(e, Dc), sd = O.j(Lf, 0, null);
                    O.j(Lf, 1, null);
                    var td = Yz(f, sd, h), Dg = O.j(td, 0, null), Eg = O.j(td, 1, null), Qb = a;
                    Dz(Qb, q(w) ? Vd : 1);
                    vz(Qb);
                    Qb.moveTo(qa - 1, va);
                    Qb.lineTo(Dg + 1, Eg);
                    wz(Qb);
                    ya = H(Ob);
                    Aa = null;
                    Fa = 0;
                  }
                  oa = 0;
                } else {
                  break;
                }
              }
            }
          }
          na += 1;
        } else {
          var Rb = E(P);
          if (Rb) {
            var ac = Rb;
            if (T(ac)) {
              var oc = x(ac), cd = z(ac), ze = oc, Mf = N(oc), P = cd, M = ze, ea = Mf
            } else {
              var dd = F(ac);
              if (q(function() {
                var a = dd;
                return q(a) ? a : s;
              }())) {
                var Fg = dh.h(c, new U(null, 2, 5, V, [Y, I], null)), Nf = xm.g(Yj.g(Fg)), bf = q(dd) ? dj(Nf, r) : S.j(ie, Nf, r), bc = Yz(d, I, h), Fb = O.j(bc, 0, null), Wd = O.j(bc, 1, null);
                Cz(a, q(dd) ? Mz.g ? Mz.g(Go) : Mz.call(null, Go) : "black");
                for (var Ae = E(bf), Xd = null, Be = 0, ta = 0;;) {
                  if (ta < Be) {
                    var Ce = Xd.F(null, ta), cf = O.j(Ce, 0, null), ud = O.j(Ce, 1, null), pc = Rx(e, cf), df = O.j(pc, 0, null);
                    O.j(pc, 1, null);
                    var Ec = Yz(f, df, h), Fc = O.j(Ec, 0, null), ef = O.j(Ec, 1, null), cc = a;
                    Dz(cc, q(w) ? ud : 1);
                    vz(cc);
                    cc.moveTo(Fb - 1, Wd);
                    cc.lineTo(Fc + 1, ef);
                    wz(cc);
                    ta += 1;
                  } else {
                    var Gc = E(Ae);
                    if (Gc) {
                      var Gb = Gc;
                      if (T(Gb)) {
                        var qc = x(Gb), Yd = z(Gb), rc = qc, De = N(qc), Ae = Yd, Xd = rc, Be = De
                      } else {
                        var ed = F(Gb), sc = O.j(ed, 0, null), dc = O.j(ed, 1, null), Hc = Rx(e, sc), Zd = O.j(Hc, 0, null);
                        O.j(Hc, 1, null);
                        var vd = Yz(f, Zd, h), wd = O.j(vd, 0, null), tc = O.j(vd, 1, null), Mb = a;
                        Dz(Mb, q(w) ? dc : 1);
                        vz(Mb);
                        Mb.moveTo(Fb - 1, Wd);
                        Mb.lineTo(wd + 1, tc);
                        wz(Mb);
                        Ae = H(Gb);
                        Xd = null;
                        Be = 0;
                      }
                      ta = 0;
                    } else {
                      break;
                    }
                  }
                }
              }
              P = H(ac);
              M = null;
              ea = 0;
            }
            na = 0;
          } else {
            break;
          }
        }
      }
      D += 1;
    } else {
      var Ee = E(A);
      if (Ee) {
        var Ic = Ee;
        if (T(Ic)) {
          var xd = x(Ic), ff = z(Ic), gf = xd, fd = N(xd), A = ff, y = gf, B = fd
        } else {
          for (var yd = F(Ic), Fe = E(new U(null, 2, 5, V, [!1, !0], null)), $d = null, Uc = 0, Vc = 0;;) {
            if (Vc < Uc) {
              var Wc = $d.F(null, Vc);
              if (q(function() {
                var a = Wc;
                return q(a) ? a : s;
              }())) {
                var Ya = dh.h(c, new U(null, 2, 5, V, [Y, yd], null)), Xc = xm.g(Yj.g(Ya)), zd = q(Wc) ? dj(Xc, r) : S.j(ie, Xc, r), gd = Yz(d, yd, h), hf = O.j(gd, 0, null), Gg = O.j(gd, 1, null);
                Cz(a, q(Wc) ? Mz.g ? Mz.g(Go) : Mz.call(null, Go) : "black");
                for (var Ge = E(zd), jf = null, He = 0, Jc = 0;;) {
                  if (Jc < He) {
                    var Ie = jf.F(null, Jc), Hg = O.j(Ie, 0, null), Of = O.j(Ie, 1, null), uc = Rx(e, Hg), hd = O.j(uc, 0, null);
                    O.j(uc, 1, null);
                    var Pf = Yz(f, hd, h), xk = O.j(Pf, 0, null), yk = O.j(Pf, 1, null), kf = a;
                    Dz(kf, q(w) ? Of : 1);
                    vz(kf);
                    kf.moveTo(hf - 1, Gg);
                    kf.lineTo(xk + 1, yk);
                    wz(kf);
                    Jc += 1;
                  } else {
                    var Ig = E(Ge);
                    if (Ig) {
                      var Je = Ig;
                      if (T(Je)) {
                        var Jg = x(Je), Qf = z(Je), kj = Jg, ae = N(Jg), Ge = Qf, jf = kj, He = ae
                      } else {
                        var lj = F(Je), zk = O.j(lj, 0, null), Ak = O.j(lj, 1, null), Kg = Rx(e, zk), en = O.j(Kg, 0, null);
                        O.j(Kg, 1, null);
                        var Bk = Yz(f, en, h), gq = O.j(Bk, 0, null), hq = O.j(Bk, 1, null), Ke = a;
                        Dz(Ke, q(w) ? Ak : 1);
                        vz(Ke);
                        Ke.moveTo(hf - 1, Gg);
                        Ke.lineTo(gq + 1, hq);
                        wz(Ke);
                        Ge = H(Je);
                        jf = null;
                        He = 0;
                      }
                      Jc = 0;
                    } else {
                      break;
                    }
                  }
                }
              }
              Vc += 1;
            } else {
              var fn = E(Fe);
              if (fn) {
                var Hh = fn;
                if (T(Hh)) {
                  var Lg = x(Hh), gn = z(Hh), Ih = Lg, hn = N(Lg), Fe = gn, $d = Ih, Uc = hn
                } else {
                  var Mg = F(Hh);
                  if (q(function() {
                    var a = Mg;
                    return q(a) ? a : s;
                  }())) {
                    var iq = dh.h(c, new U(null, 2, 5, V, [Y, yd], null)), jn = xm.g(Yj.g(iq)), kn = q(Mg) ? dj(jn, r) : S.j(ie, jn, r), Ck = Yz(d, yd, h), ln = O.j(Ck, 0, null), mn = O.j(Ck, 1, null);
                    Cz(a, q(Mg) ? Mz.g ? Mz.g(Go) : Mz.call(null, Go) : "black");
                    for (var mj = E(kn), Dk = null, Ek = 0, Le = 0;;) {
                      if (Le < Ek) {
                        var Fk = Dk.F(null, Le), Jh = O.j(Fk, 0, null), nn = O.j(Fk, 1, null), on = Rx(e, Jh), jq = O.j(on, 0, null);
                        O.j(on, 1, null);
                        var pn = Yz(f, jq, h), qn = O.j(pn, 0, null), kq = O.j(pn, 1, null), Rf = a;
                        Dz(Rf, q(w) ? nn : 1);
                        vz(Rf);
                        Rf.moveTo(ln - 1, mn);
                        Rf.lineTo(qn + 1, kq);
                        wz(Rf);
                        Le += 1;
                      } else {
                        var nj = E(mj);
                        if (nj) {
                          var Sf = nj;
                          if (T(Sf)) {
                            var Ng = x(Sf), rn = z(Sf), sn = Ng, lq = N(Ng), mj = rn, Dk = sn, Ek = lq
                          } else {
                            var tn = F(Sf), un = O.j(tn, 0, null), mq = O.j(tn, 1, null), vn = Rx(e, un), Kh = O.j(vn, 0, null);
                            O.j(vn, 1, null);
                            var Gk = Yz(f, Kh, h), Lh = O.j(Gk, 0, null), wn = O.j(Gk, 1, null), Mh = a;
                            Dz(Mh, q(w) ? mq : 1);
                            vz(Mh);
                            Mh.moveTo(ln - 1, mn);
                            Mh.lineTo(Lh + 1, wn);
                            wz(Mh);
                            mj = H(Sf);
                            Dk = null;
                            Ek = 0;
                          }
                          Le = 0;
                        } else {
                          break;
                        }
                      }
                    }
                  }
                  Fe = H(Hh);
                  $d = null;
                  Uc = 0;
                }
                Vc = 0;
              } else {
                break;
              }
            }
          }
          A = H(Ic);
          y = null;
          B = 0;
        }
        D = 0;
      } else {
        break;
      }
    }
  }
  a.restore();
}
function jA(a, b, c) {
  return Mj(function(a) {
    var e = O.j(a, 0, null);
    a = O.j(a, 1, null);
    return new U(null, 2, 5, V, [a >= c ? xm : Fl, q(b.g ? b.g(e) : b.call(null, e)) ? Go : Oj], null);
  }, a);
}
function kA(a, b, c, d, e, f, g, h) {
  a.save();
  var l = dh.h(c, new U(null, 2, 5, V, [Y, e], null)), m = io.g(c), r = Ln.g(io.g(b)), s = Oo.g(m), w = wo.g(c), A = Xl.g(b), y = dh.h(b, new U(null, 2, 5, V, [Kn, e], null)), B = dh.h(b, new U(null, 2, 5, V, [fq, e], null)), D = wo.g(b), I = Up.g(l), P = N(I), M = Cg.h(qg.h(N, Zm), I), ea = Cg.h(rg.h(af, 1), M), na = S.h(Ye, ea), J = g + dh.h(h, new U(null, 2, 5, V, [up, uk], null)), Ia = dh.h(h, new U(null, 2, 5, V, [up, tr], null)), da = .5 * Ia, fa = dh.h(h, new U(null, 2, 5, V, [up, Ar], null)), 
  ga = dh.h(h, new U(null, 2, 5, V, [up, Tl], null)), qa = dh.h(h, new U(null, 2, 5, V, [up, Tj], null)), va = .5 * qa, ya = .95 * window.innerHeight, Aa = window.pageYOffset + 2 * fa, Fa = Yz(d, e, f), oa = O.j(Fa, 0, null), Ma = O.j(Fa, 1, null), ab = function(a, b, c, d, e, f, g, h, l, r, m, s, w, J, y, A, B, D, I, da, ae, M, P) {
    return function(a, b) {
      var c = S.j(Ye, b, Pg.h(a, w)) / J;
      return new U(null, 2, 5, V, [y + ae, P + 20 + c * M], null);
    };
  }(l, m, r, s, w, A, y, B, D, I, P, M, ea, na, J, Ia, da, fa, ga, qa, va, ya, Aa, Fa, oa, Ma), bb = function() {
    return function(a) {
      a = ab(a, 0);
      O.j(a, 0, null);
      a = O.j(a, 1, null);
      return new U(null, 2, 5, V, [g, a], null);
    };
  }(l, m, r, s, w, A, y, B, D, I, P, M, ea, na, J, Ia, da, fa, ga, qa, va, ya, Aa, Fa, oa, Ma), Da = function(a, b, c, d, e, f, g, h, l, r, m, s, w, J, y, A, B, D, I, da, ae, M, P, Ia, ea, ga) {
    return function(a, b) {
      var c = bb(b), d = O.j(c, 0, null), c = O.j(c, 1, null);
      vz(a);
      a.moveTo(ea + B + 1, ga);
      var e = (d - ea) / 3;
      Fz.Aa(a, d - e, ga, ea + e, c, d, c);
      wz(a);
      return a;
    };
  }(l, m, r, s, w, A, y, B, D, I, P, M, ea, na, J, Ia, da, fa, ga, qa, va, ya, Aa, Fa, oa, Ma), sb = function(a, b, c, d, e, f, g, h, l, r, m, s, w, J, y, A, B, D) {
    return function(a, b, c) {
      var d = bb(b), e = O.j(d, 0, null), d = O.j(d, 1, null);
      c = ab(b, c);
      b = O.j(c, 0, null);
      c = O.j(c, 1, null);
      vz(a);
      a.moveTo(b, c);
      a.lineTo(e + D, d);
      wz(a);
      return a;
    };
  }(l, m, r, s, w, A, y, B, D, I, P, M, ea, na, J, Ia, da, fa, ga, qa, va, ya, Aa, Fa, oa, Ma);
  a.lineWidth = Ia;
  Cz(a, Oj.g(Mz));
  for (var lb = E(sg(xh, I)), cb = null, Cb = 0, $ = 0;;) {
    if ($ < Cb) {
      var xc = cb.F(null, $), Ob = O.j(xc, 0, null), hc = O.j(xc, 1, null), rd = ye(hc) ? S.h(vg, hc) : hc, Tc = Q.h(rd, Zm);
      Da(a, Ob);
      for (var Lb = E(tj.g(N(Tc))), Db = null, Dc = 0, Vd = 0;;) {
        if (Vd < Dc) {
          var Lf = Db.F(null, Vd);
          sb(a, Ob, Lf);
          Vd += 1;
        } else {
          var sd = E(Lb);
          if (sd) {
            var td = sd;
            if (T(td)) {
              var Dg = x(td), Eg = z(td), Qb = Dg, Rb = N(Dg), Lb = Eg, Db = Qb, Dc = Rb
            } else {
              var ac = F(td);
              sb(a, Ob, ac);
              Lb = H(td);
              Db = null;
              Dc = 0;
            }
            Vd = 0;
          } else {
            break;
          }
        }
      }
      $ += 1;
    } else {
      var oc = E(lb);
      if (oc) {
        var cd = oc;
        if (T(cd)) {
          var ze = x(cd), Mf = z(cd), dd = ze, Fg = N(ze), lb = Mf, cb = dd, Cb = Fg
        } else {
          var Nf = F(cd), bf = O.j(Nf, 0, null), bc = O.j(Nf, 1, null), Fb = ye(bc) ? S.h(vg, bc) : bc, Wd = Q.h(Fb, Zm);
          Da(a, bf);
          for (var Ae = E(tj.g(N(Wd))), Xd = null, Be = 0, ta = 0;;) {
            if (ta < Be) {
              var Ce = Xd.F(null, ta);
              sb(a, bf, Ce);
              ta += 1;
            } else {
              var cf = E(Ae);
              if (cf) {
                var ud = cf;
                if (T(ud)) {
                  var pc = x(ud), df = z(ud), Ec = pc, Fc = N(pc), Ae = df, Xd = Ec, Be = Fc
                } else {
                  var ef = F(ud);
                  sb(a, bf, ef);
                  Ae = H(ud);
                  Xd = null;
                  Be = 0;
                }
                ta = 0;
              } else {
                break;
              }
            }
          }
          lb = H(cd);
          cb = null;
          Cb = 0;
        }
        $ = 0;
      } else {
        break;
      }
    }
  }
  for (var cc = E(sg(xh, I)), Gc = null, Gb = 0, qc = 0;;) {
    if (qc < Gb) {
      var Yd = Gc.F(null, qc), rc = O.j(Yd, 0, null), De = O.j(Yd, 1, null), ed = ye(De) ? S.h(vg, De) : De, sc = Q.h(ed, Zm), dc = bb(rc), Hc = O.j(dc, 0, null), Zd = O.j(dc, 1, null), vd = new U(null, 2, 5, V, [e, rc], null), wd = function() {
        var a = vd;
        return D.g ? D.g(a) : D.call(null, a);
      }(), tc = Oe(A, vd), Mb = q(tc) ? Kb(tc) : null, Ee = bh.h(function(a, b, c, d, e, f, g, h, l, r, m, s, w, J, y, A, B, D, I, da, ae) {
        return function(a) {
          return jA(bn.g(a), ae, da);
        };
      }(cc, Gc, Gb, qc, dc, Hc, Zd, vd, wd, tc, Mb, Yd, rc, De, ed, sc, l, m, r, s, w, A, y, B, D, I, P, M, ea, na, J, Ia, da, fa, ga, qa, va, ya, Aa, Fa, oa, Ma), sc), Ic = function(a, b, c, d, e, f, g, h, l, r, m, s, w, J, y, A, B, D, I, da) {
        return function(a) {
          var b = new U(null, 2, 5, V, [xm, Go], null);
          a = a.g ? a.g(b) : a.call(null, b);
          return N(a) >= da;
        };
      }(cc, Gc, Gb, qc, dc, Hc, Zd, vd, wd, tc, Mb, Ee, Yd, rc, De, ed, sc, l, m, r, s, w, A, y, B, D, I, P, M, ea, na, J, Ia, da, fa, ga, qa, va, ya, Aa, Fa, oa, Ma), xd = q(function() {
        var a = wd;
        return q(a) ? mg(Ic, Ee) : a;
      }()) ? mo : q(mg(Ic, Ee)) ? Kp : q(wd) ? Go : Oj;
      if (q(wd)) {
        var ff = a;
        Cz(ff, Go.g(Mz));
        ff.lineWidth = 2;
        Da(ff, rc);
      }
      if (q(tc)) {
        var gf = a;
        Bz(gf, Pl.g(Mz));
        vz(gf);
        gf.arc(Hc, Zd, fa + 8, 0, 2 * Math.PI, !0);
        gf.fill();
      }
      var fd = a;
      Bz(fd, function() {
        var a = xd;
        return Mz.g ? Mz.g(a) : Mz.call(null, a);
      }());
      Cz(fd, "black");
      fd.lineWidth = 1;
      vz(fd);
      fd.arc(Hc, Zd, fa, 0, 2 * Math.PI, !0);
      wz(fd);
      fd.fill();
      Bz(a, "black");
      Az(a, new p(null, 3, [Cr, "cell " + u.g(rc) + u.g(q(tc) ? "   (learning on " + u.g(q(Mb) ? "segment " + u.g(Mb) : "new segment") + ")" : null), Ep, Hc, Pj, Zd - fa - 5], null));
      for (var yd = E(sg(xh, Ee)), Fe = null, $d = 0, Uc = 0;;) {
        if (Uc < $d) {
          var Vc = Fe.F(null, Uc), Wc = O.j(Vc, 0, null), Ya = O.j(Vc, 1, null), Xc = ab(rc, Wc), zd = O.j(Xc, 0, null), gd = O.j(Xc, 1, null), hf = N(function() {
            var a = new U(null, 2, 5, V, [xm, Go], null);
            return Ya.g ? Ya.g(a) : Ya.call(null, a);
          }()), Gg = hf + N(function() {
            var a = new U(null, 2, 5, V, [xm, Oj], null);
            return Ya.g ? Ya.g(a) : Ya.call(null, a);
          }()), Ge = N(function() {
            var a = new U(null, 2, 5, V, [Fl, Go], null);
            return Ya.g ? Ya.g(a) : Ya.call(null, a);
          }()), jf = Ge + N(function() {
            var a = new U(null, 2, 5, V, [Fl, Oj], null);
            return Ya.g ? Ya.g(a) : Ya.call(null, a);
          }()), He = function() {
            var a = hf / r;
            return 1 > a ? a : 1;
          }(), Jc = function() {
            var a = tc;
            return q(a) ? C.h(Wc, Mb) : a;
          }(), Ie = bA(zd, gd, qa, ga), Hg = bA(zd, gd, qa + 8, ga + 8);
          if (q(Jc)) {
            var Of = a;
            Bz(Of, Pl.g(Mz));
            zz(Of, Hg);
          }
          var uc = a;
          Dz(uc, 1);
          Cz(uc, "black");
          uc.lineWidth = 1;
          yz(uc, Ie);
          Bz(uc, "white");
          zz(uc, Ie);
          Dz(uc, He);
          Bz(uc, Go.g(Mz));
          zz(uc, Ie);
          Dz(uc, 1);
          if (Ic(Ya)) {
            var hd = a;
            Cz(hd, Go.g(Mz));
            hd.lineWidth = 2;
            sb(hd, rc, Wc);
          }
          Bz(a, "black");
          Az(a, new p(null, 3, [Cr, "[" + u.g(Wc) + "],  active " + u.g(hf) + " / " + u.g(Gg) + " conn. (" + u.g(Ge) + " / " + u.g(jf) + " disconn.)", Ep, zd + 5 + va, Pj, gd], null));
          a.lineWidth = 1;
          var Pf = dh.h(h, new U(null, 2, 5, V, [Il, ir], null)), xk = dh.h(h, new U(null, 2, 5, V, [Il, Go], null)), yk = dh.h(h, new U(null, 2, 5, V, [Il, Oj], null)), kf = dh.h(h, new U(null, 2, 5, V, [Il, Bo], null));
          if (q(function() {
            var a = C.h(kf, dn);
            return a ? a : (a = C.h(kf, Wn)) ? Jc : a;
          }())) {
            for (var Ig = E(bg.h(q(yk) ? new U(null, 1, 5, V, [Oj], null) : null, q(xk) ? new U(null, 1, 5, V, [Go], null) : null)), Je = null, Jg = 0, Qf = 0;;) {
              if (Qf < Jg) {
                var kj = Je.F(null, Qf), ae = function() {
                  var a = new U(null, 2, 5, V, [xm, kj], null);
                  return Ya.g ? Ya.g(a) : Ya.call(null, a);
                }();
                Cz(a, function() {
                  var a = kj;
                  return Mz.g ? Mz.g(a) : Mz.call(null, a);
                }());
                for (var lj = E(ae), zk = null, Ak = 0, Kg = 0;;) {
                  if (Kg < Ak) {
                    var en = zk.F(null, Kg), Bk = O.j(en, 0, null), gq = O.j(Bk, 0, null);
                    O.j(Bk, 1, null);
                    var hq = O.j(en, 1, null), Ke = Yz(d, gq, f + 1), fn = O.j(Ke, 0, null), Hh = O.j(Ke, 1, null), Lg = a;
                    Dz(Lg, q(Pf) ? hq : 1);
                    vz(Lg);
                    Lg.moveTo(zd, gd);
                    Lg.lineTo(fn + 1, Hh);
                    wz(Lg);
                    Kg += 1;
                  } else {
                    var gn = E(lj);
                    if (gn) {
                      var Ih = gn;
                      if (T(Ih)) {
                        var hn = x(Ih), Mg = z(Ih), iq = hn, jn = N(hn), lj = Mg, zk = iq, Ak = jn
                      } else {
                        var kn = F(Ih), Ck = O.j(kn, 0, null), ln = O.j(Ck, 0, null);
                        O.j(Ck, 1, null);
                        var mn = O.j(kn, 1, null), mj = Yz(d, ln, f + 1), Dk = O.j(mj, 0, null), Ek = O.j(mj, 1, null), Le = a;
                        Dz(Le, q(Pf) ? mn : 1);
                        vz(Le);
                        Le.moveTo(zd, gd);
                        Le.lineTo(Dk + 1, Ek);
                        wz(Le);
                        lj = H(Ih);
                        zk = null;
                        Ak = 0;
                      }
                      Kg = 0;
                    } else {
                      break;
                    }
                  }
                }
                Dz(a, 1);
                Qf += 1;
              } else {
                var Fk = E(Ig);
                if (Fk) {
                  var Jh = Fk;
                  if (T(Jh)) {
                    var nn = x(Jh), on = z(Jh), jq = nn, pn = N(nn), Ig = on, Je = jq, Jg = pn
                  } else {
                    var qn = F(Jh), kq = function() {
                      var a = new U(null, 2, 5, V, [xm, qn], null);
                      return Ya.g ? Ya.g(a) : Ya.call(null, a);
                    }();
                    Cz(a, function() {
                      var a = qn;
                      return Mz.g ? Mz.g(a) : Mz.call(null, a);
                    }());
                    for (var Rf = E(kq), nj = null, Sf = 0, Ng = 0;;) {
                      if (Ng < Sf) {
                        var rn = nj.F(null, Ng), sn = O.j(rn, 0, null), lq = O.j(sn, 0, null);
                        O.j(sn, 1, null);
                        var tn = O.j(rn, 1, null), un = Yz(d, lq, f + 1), mq = O.j(un, 0, null), vn = O.j(un, 1, null), Kh = a;
                        Dz(Kh, q(Pf) ? tn : 1);
                        vz(Kh);
                        Kh.moveTo(zd, gd);
                        Kh.lineTo(mq + 1, vn);
                        wz(Kh);
                        Ng += 1;
                      } else {
                        var Gk = E(Rf);
                        if (Gk) {
                          var Lh = Gk;
                          if (T(Lh)) {
                            var wn = x(Lh), Mh = z(Lh), pB = wn, rB = N(wn), Rf = Mh, nj = pB, Sf = rB
                          } else {
                            var Xu = F(Lh), Yu = O.j(Xu, 0, null), sB = O.j(Yu, 0, null);
                            O.j(Yu, 1, null);
                            var tB = O.j(Xu, 1, null), Zu = Yz(d, sB, f + 1), uB = O.j(Zu, 0, null), vB = O.j(Zu, 1, null), Hk = a;
                            Dz(Hk, q(Pf) ? tB : 1);
                            vz(Hk);
                            Hk.moveTo(zd, gd);
                            Hk.lineTo(uB + 1, vB);
                            wz(Hk);
                            Rf = H(Lh);
                            nj = null;
                            Sf = 0;
                          }
                          Ng = 0;
                        } else {
                          break;
                        }
                      }
                    }
                    Dz(a, 1);
                    Ig = H(Jh);
                    Je = null;
                    Jg = 0;
                  }
                  Qf = 0;
                } else {
                  break;
                }
              }
            }
          }
          Uc += 1;
        } else {
          var $u = E(yd);
          if ($u) {
            var Ik = $u;
            if (T(Ik)) {
              var av = x(Ik), wB = z(Ik), xB = av, yB = N(av), yd = wB, Fe = xB, $d = yB
            } else {
              var bv = F(Ik), xn = O.j(bv, 0, null), Sb = O.j(bv, 1, null), cv = ab(rc, xn), Nh = O.j(cv, 0, null), Oh = O.j(cv, 1, null), nq = N(function() {
                var a = new U(null, 2, 5, V, [xm, Go], null);
                return Sb.g ? Sb.g(a) : Sb.call(null, a);
              }()), zB = nq + N(function() {
                var a = new U(null, 2, 5, V, [xm, Oj], null);
                return Sb.g ? Sb.g(a) : Sb.call(null, a);
              }()), dv = N(function() {
                var a = new U(null, 2, 5, V, [Fl, Go], null);
                return Sb.g ? Sb.g(a) : Sb.call(null, a);
              }()), AB = dv + N(function() {
                var a = new U(null, 2, 5, V, [Fl, Oj], null);
                return Sb.g ? Sb.g(a) : Sb.call(null, a);
              }()), BB = function() {
                var a = nq / r;
                return 1 > a ? a : 1;
              }(), ev = function() {
                var a = tc;
                return q(a) ? C.h(xn, Mb) : a;
              }(), oq = bA(Nh, Oh, qa, ga), CB = bA(Nh, Oh, qa + 8, ga + 8);
              if (q(ev)) {
                var fv = a;
                Bz(fv, Pl.g(Mz));
                zz(fv, CB);
              }
              var lf = a;
              Dz(lf, 1);
              Cz(lf, "black");
              lf.lineWidth = 1;
              yz(lf, oq);
              Bz(lf, "white");
              zz(lf, oq);
              Dz(lf, BB);
              Bz(lf, Go.g(Mz));
              zz(lf, oq);
              Dz(lf, 1);
              if (Ic(Sb)) {
                var pq = a;
                Cz(pq, Go.g(Mz));
                pq.lineWidth = 2;
                sb(pq, rc, xn);
              }
              Bz(a, "black");
              Az(a, new p(null, 3, [Cr, "[" + u.g(xn) + "],  active " + u.g(nq) + " / " + u.g(zB) + " conn. (" + u.g(dv) + " / " + u.g(AB) + " disconn.)", Ep, Nh + 5 + va, Pj, Oh], null));
              a.lineWidth = 1;
              var yn = dh.h(h, new U(null, 2, 5, V, [Il, ir], null)), DB = dh.h(h, new U(null, 2, 5, V, [Il, Go], null)), EB = dh.h(h, new U(null, 2, 5, V, [Il, Oj], null)), gv = dh.h(h, new U(null, 2, 5, V, [Il, Bo], null));
              if (q(function() {
                var a = C.h(gv, dn);
                return a ? a : (a = C.h(gv, Wn)) ? ev : a;
              }())) {
                for (var qq = E(bg.h(q(EB) ? new U(null, 1, 5, V, [Oj], null) : null, q(DB) ? new U(null, 1, 5, V, [Go], null) : null)), rq = null, sq = 0, Jk = 0;;) {
                  if (Jk < sq) {
                    var hv = rq.F(null, Jk), FB = function() {
                      var a = new U(null, 2, 5, V, [xm, hv], null);
                      return Sb.g ? Sb.g(a) : Sb.call(null, a);
                    }();
                    Cz(a, function() {
                      var a = hv;
                      return Mz.g ? Mz.g(a) : Mz.call(null, a);
                    }());
                    for (var tq = E(FB), uq = null, vq = 0, Kk = 0;;) {
                      if (Kk < vq) {
                        var iv = uq.F(null, Kk), jv = O.j(iv, 0, null), GB = O.j(jv, 0, null);
                        O.j(jv, 1, null);
                        var HB = O.j(iv, 1, null), kv = Yz(d, GB, f + 1), IB = O.j(kv, 0, null), JB = O.j(kv, 1, null), Lk = a;
                        Dz(Lk, q(yn) ? HB : 1);
                        vz(Lk);
                        Lk.moveTo(Nh, Oh);
                        Lk.lineTo(IB + 1, JB);
                        wz(Lk);
                        Kk += 1;
                      } else {
                        var lv = E(tq);
                        if (lv) {
                          var Mk = lv;
                          if (T(Mk)) {
                            var mv = x(Mk), KB = z(Mk), LB = mv, MB = N(mv), tq = KB, uq = LB, vq = MB
                          } else {
                            var nv = F(Mk), ov = O.j(nv, 0, null), NB = O.j(ov, 0, null);
                            O.j(ov, 1, null);
                            var OB = O.j(nv, 1, null), pv = Yz(d, NB, f + 1), PB = O.j(pv, 0, null), QB = O.j(pv, 1, null), Nk = a;
                            Dz(Nk, q(yn) ? OB : 1);
                            vz(Nk);
                            Nk.moveTo(Nh, Oh);
                            Nk.lineTo(PB + 1, QB);
                            wz(Nk);
                            tq = H(Mk);
                            uq = null;
                            vq = 0;
                          }
                          Kk = 0;
                        } else {
                          break;
                        }
                      }
                    }
                    Dz(a, 1);
                    Jk += 1;
                  } else {
                    var qv = E(qq);
                    if (qv) {
                      var Ok = qv;
                      if (T(Ok)) {
                        var rv = x(Ok), RB = z(Ok), SB = rv, TB = N(rv), qq = RB, rq = SB, sq = TB
                      } else {
                        var sv = F(Ok), UB = function() {
                          var a = new U(null, 2, 5, V, [xm, sv], null);
                          return Sb.g ? Sb.g(a) : Sb.call(null, a);
                        }();
                        Cz(a, function() {
                          var a = sv;
                          return Mz.g ? Mz.g(a) : Mz.call(null, a);
                        }());
                        for (var wq = E(UB), xq = null, yq = 0, Pk = 0;;) {
                          if (Pk < yq) {
                            var tv = xq.F(null, Pk), uv = O.j(tv, 0, null), VB = O.j(uv, 0, null);
                            O.j(uv, 1, null);
                            var WB = O.j(tv, 1, null), vv = Yz(d, VB, f + 1), XB = O.j(vv, 0, null), YB = O.j(vv, 1, null), Qk = a;
                            Dz(Qk, q(yn) ? WB : 1);
                            vz(Qk);
                            Qk.moveTo(Nh, Oh);
                            Qk.lineTo(XB + 1, YB);
                            wz(Qk);
                            Pk += 1;
                          } else {
                            var wv = E(wq);
                            if (wv) {
                              var Rk = wv;
                              if (T(Rk)) {
                                var xv = x(Rk), ZB = z(Rk), $B = xv, aC = N(xv), wq = ZB, xq = $B, yq = aC
                              } else {
                                var yv = F(Rk), zv = O.j(yv, 0, null), bC = O.j(zv, 0, null);
                                O.j(zv, 1, null);
                                var cC = O.j(yv, 1, null), Av = Yz(d, bC, f + 1), dC = O.j(Av, 0, null), eC = O.j(Av, 1, null), Sk = a;
                                Dz(Sk, q(yn) ? cC : 1);
                                vz(Sk);
                                Sk.moveTo(Nh, Oh);
                                Sk.lineTo(dC + 1, eC);
                                wz(Sk);
                                wq = H(Rk);
                                xq = null;
                                yq = 0;
                              }
                              Pk = 0;
                            } else {
                              break;
                            }
                          }
                        }
                        Dz(a, 1);
                        qq = H(Ok);
                        rq = null;
                        sq = 0;
                      }
                      Jk = 0;
                    } else {
                      break;
                    }
                  }
                }
              }
              yd = H(Ik);
              Fe = null;
              $d = 0;
            }
            Uc = 0;
          } else {
            break;
          }
        }
      }
      qc += 1;
    } else {
      var zn = E(cc);
      if (zn) {
        var Ph = zn;
        if (T(Ph)) {
          var Bv = x(Ph), fC = z(Ph), gC = Bv, hC = N(Bv), cc = fC, Gc = gC, Gb = hC
        } else {
          var An = F(Ph), mf = O.j(An, 0, null), Tk = O.j(An, 1, null), zq = ye(Tk) ? S.h(vg, Tk) : Tk, Aq = Q.h(zq, Zm), Bn = bb(mf), Uk = O.j(Bn, 0, null), Vk = O.j(Bn, 1, null), Cn = new U(null, 2, 5, V, [e, mf], null), Wk = function() {
            var a = Cn;
            return D.g ? D.g(a) : D.call(null, a);
          }(), Og = Oe(A, Cn), oj = q(Og) ? Kb(Og) : null, Dn = bh.h(function(a, b, c, d, e, f, g, h, l, r, m, s, w, J, y, A, B, D, I, da, ae, M, P) {
            return function(a) {
              return jA(bn.g(a), P, M);
            };
          }(cc, Gc, Gb, qc, Bn, Uk, Vk, Cn, Wk, Og, oj, An, mf, Tk, zq, Aq, Ph, zn, l, m, r, s, w, A, y, B, D, I, P, M, ea, na, J, Ia, da, fa, ga, qa, va, ya, Aa, Fa, oa, Ma), Aq), En = function(a, b, c, d, e, f, g, h, l, r, m, s, w, J, y, A, B, D, I, da, ae, M) {
            return function(a) {
              var b = new U(null, 2, 5, V, [xm, Go], null);
              a = a.g ? a.g(b) : a.call(null, b);
              return N(a) >= M;
            };
          }(cc, Gc, Gb, qc, Bn, Uk, Vk, Cn, Wk, Og, oj, Dn, An, mf, Tk, zq, Aq, Ph, zn, l, m, r, s, w, A, y, B, D, I, P, M, ea, na, J, Ia, da, fa, ga, qa, va, ya, Aa, Fa, oa, Ma), iC = q(function() {
            var a = Wk;
            return q(a) ? mg(En, Dn) : a;
          }()) ? mo : q(mg(En, Dn)) ? Kp : q(Wk) ? Go : Oj;
          if (q(Wk)) {
            var Bq = a;
            Cz(Bq, Go.g(Mz));
            Bq.lineWidth = 2;
            Da(Bq, mf);
          }
          if (q(Og)) {
            var Fn = a;
            Bz(Fn, Pl.g(Mz));
            vz(Fn);
            Fn.arc(Uk, Vk, fa + 8, 0, 2 * Math.PI, !0);
            Fn.fill();
          }
          var Qh = a;
          Bz(Qh, function() {
            var a = iC;
            return Mz.g ? Mz.g(a) : Mz.call(null, a);
          }());
          Cz(Qh, "black");
          Qh.lineWidth = 1;
          vz(Qh);
          Qh.arc(Uk, Vk, fa, 0, 2 * Math.PI, !0);
          wz(Qh);
          Qh.fill();
          Bz(a, "black");
          Az(a, new p(null, 3, [Cr, "cell " + u.g(mf) + u.g(q(Og) ? "   (learning on " + u.g(q(oj) ? "segment " + u.g(oj) : "new segment") + ")" : null), Ep, Uk, Pj, Vk - fa - 5], null));
          for (var Cq = E(sg(xh, Dn)), Dq = null, Eq = 0, Xk = 0;;) {
            if (Xk < Eq) {
              var Cv = Dq.F(null, Xk), Gn = O.j(Cv, 0, null), Tb = O.j(Cv, 1, null), Dv = ab(mf, Gn), Rh = O.j(Dv, 0, null), Sh = O.j(Dv, 1, null), Fq = N(function() {
                var a = new U(null, 2, 5, V, [xm, Go], null);
                return Tb.g ? Tb.g(a) : Tb.call(null, a);
              }()), jC = Fq + N(function() {
                var a = new U(null, 2, 5, V, [xm, Oj], null);
                return Tb.g ? Tb.g(a) : Tb.call(null, a);
              }()), Ev = N(function() {
                var a = new U(null, 2, 5, V, [Fl, Go], null);
                return Tb.g ? Tb.g(a) : Tb.call(null, a);
              }()), kC = Ev + N(function() {
                var a = new U(null, 2, 5, V, [Fl, Oj], null);
                return Tb.g ? Tb.g(a) : Tb.call(null, a);
              }()), lC = function() {
                var a = Fq / r;
                return 1 > a ? a : 1;
              }(), Fv = function() {
                var a = Og;
                return q(a) ? C.h(Gn, oj) : a;
              }(), Gq = bA(Rh, Sh, qa, ga), mC = bA(Rh, Sh, qa + 8, ga + 8);
              if (q(Fv)) {
                var Gv = a;
                Bz(Gv, Pl.g(Mz));
                zz(Gv, mC);
              }
              var nf = a;
              Dz(nf, 1);
              Cz(nf, "black");
              nf.lineWidth = 1;
              yz(nf, Gq);
              Bz(nf, "white");
              zz(nf, Gq);
              Dz(nf, lC);
              Bz(nf, Go.g(Mz));
              zz(nf, Gq);
              Dz(nf, 1);
              if (En(Tb)) {
                var Hq = a;
                Cz(Hq, Go.g(Mz));
                Hq.lineWidth = 2;
                sb(Hq, mf, Gn);
              }
              Bz(a, "black");
              Az(a, new p(null, 3, [Cr, "[" + u.g(Gn) + "],  active " + u.g(Fq) + " / " + u.g(jC) + " conn. (" + u.g(Ev) + " / " + u.g(kC) + " disconn.)", Ep, Rh + 5 + va, Pj, Sh], null));
              a.lineWidth = 1;
              var Hn = dh.h(h, new U(null, 2, 5, V, [Il, ir], null)), nC = dh.h(h, new U(null, 2, 5, V, [Il, Go], null)), oC = dh.h(h, new U(null, 2, 5, V, [Il, Oj], null)), Hv = dh.h(h, new U(null, 2, 5, V, [Il, Bo], null));
              if (q(function() {
                var a = C.h(Hv, dn);
                return a ? a : (a = C.h(Hv, Wn)) ? Fv : a;
              }())) {
                for (var Iq = E(bg.h(q(oC) ? new U(null, 1, 5, V, [Oj], null) : null, q(nC) ? new U(null, 1, 5, V, [Go], null) : null)), Jq = null, Kq = 0, Yk = 0;;) {
                  if (Yk < Kq) {
                    var Iv = Jq.F(null, Yk), pC = function() {
                      var a = new U(null, 2, 5, V, [xm, Iv], null);
                      return Tb.g ? Tb.g(a) : Tb.call(null, a);
                    }();
                    Cz(a, function() {
                      var a = Iv;
                      return Mz.g ? Mz.g(a) : Mz.call(null, a);
                    }());
                    for (var Lq = E(pC), Mq = null, Nq = 0, Zk = 0;;) {
                      if (Zk < Nq) {
                        var Jv = Mq.F(null, Zk), Kv = O.j(Jv, 0, null), qC = O.j(Kv, 0, null);
                        O.j(Kv, 1, null);
                        var rC = O.j(Jv, 1, null), Lv = Yz(d, qC, f + 1), sC = O.j(Lv, 0, null), tC = O.j(Lv, 1, null), $k = a;
                        Dz($k, q(Hn) ? rC : 1);
                        vz($k);
                        $k.moveTo(Rh, Sh);
                        $k.lineTo(sC + 1, tC);
                        wz($k);
                        Zk += 1;
                      } else {
                        var Mv = E(Lq);
                        if (Mv) {
                          var al = Mv;
                          if (T(al)) {
                            var Nv = x(al), uC = z(al), vC = Nv, wC = N(Nv), Lq = uC, Mq = vC, Nq = wC
                          } else {
                            var Ov = F(al), Pv = O.j(Ov, 0, null), xC = O.j(Pv, 0, null);
                            O.j(Pv, 1, null);
                            var yC = O.j(Ov, 1, null), Qv = Yz(d, xC, f + 1), zC = O.j(Qv, 0, null), AC = O.j(Qv, 1, null), bl = a;
                            Dz(bl, q(Hn) ? yC : 1);
                            vz(bl);
                            bl.moveTo(Rh, Sh);
                            bl.lineTo(zC + 1, AC);
                            wz(bl);
                            Lq = H(al);
                            Mq = null;
                            Nq = 0;
                          }
                          Zk = 0;
                        } else {
                          break;
                        }
                      }
                    }
                    Dz(a, 1);
                    Yk += 1;
                  } else {
                    var Rv = E(Iq);
                    if (Rv) {
                      var cl = Rv;
                      if (T(cl)) {
                        var Sv = x(cl), BC = z(cl), CC = Sv, DC = N(Sv), Iq = BC, Jq = CC, Kq = DC
                      } else {
                        var Tv = F(cl), EC = function() {
                          var a = new U(null, 2, 5, V, [xm, Tv], null);
                          return Tb.g ? Tb.g(a) : Tb.call(null, a);
                        }();
                        Cz(a, function() {
                          var a = Tv;
                          return Mz.g ? Mz.g(a) : Mz.call(null, a);
                        }());
                        for (var Oq = E(EC), Pq = null, Qq = 0, dl = 0;;) {
                          if (dl < Qq) {
                            var Uv = Pq.F(null, dl), Vv = O.j(Uv, 0, null), FC = O.j(Vv, 0, null);
                            O.j(Vv, 1, null);
                            var GC = O.j(Uv, 1, null), Wv = Yz(d, FC, f + 1), HC = O.j(Wv, 0, null), IC = O.j(Wv, 1, null), el = a;
                            Dz(el, q(Hn) ? GC : 1);
                            vz(el);
                            el.moveTo(Rh, Sh);
                            el.lineTo(HC + 1, IC);
                            wz(el);
                            dl += 1;
                          } else {
                            var Xv = E(Oq);
                            if (Xv) {
                              var fl = Xv;
                              if (T(fl)) {
                                var Yv = x(fl), JC = z(fl), KC = Yv, LC = N(Yv), Oq = JC, Pq = KC, Qq = LC
                              } else {
                                var Zv = F(fl), $v = O.j(Zv, 0, null), MC = O.j($v, 0, null);
                                O.j($v, 1, null);
                                var NC = O.j(Zv, 1, null), aw = Yz(d, MC, f + 1), OC = O.j(aw, 0, null), PC = O.j(aw, 1, null), gl = a;
                                Dz(gl, q(Hn) ? NC : 1);
                                vz(gl);
                                gl.moveTo(Rh, Sh);
                                gl.lineTo(OC + 1, PC);
                                wz(gl);
                                Oq = H(fl);
                                Pq = null;
                                Qq = 0;
                              }
                              dl = 0;
                            } else {
                              break;
                            }
                          }
                        }
                        Dz(a, 1);
                        Iq = H(cl);
                        Jq = null;
                        Kq = 0;
                      }
                      Yk = 0;
                    } else {
                      break;
                    }
                  }
                }
              }
              Xk += 1;
            } else {
              var bw = E(Cq);
              if (bw) {
                var hl = bw;
                if (T(hl)) {
                  var cw = x(hl), QC = z(hl), RC = cw, SC = N(cw), Cq = QC, Dq = RC, Eq = SC
                } else {
                  var dw = F(hl), In = O.j(dw, 0, null), Ub = O.j(dw, 1, null), ew = ab(mf, In), Th = O.j(ew, 0, null), Uh = O.j(ew, 1, null), Rq = N(function() {
                    var a = new U(null, 2, 5, V, [xm, Go], null);
                    return Ub.g ? Ub.g(a) : Ub.call(null, a);
                  }()), TC = Rq + N(function() {
                    var a = new U(null, 2, 5, V, [xm, Oj], null);
                    return Ub.g ? Ub.g(a) : Ub.call(null, a);
                  }()), fw = N(function() {
                    var a = new U(null, 2, 5, V, [Fl, Go], null);
                    return Ub.g ? Ub.g(a) : Ub.call(null, a);
                  }()), UC = fw + N(function() {
                    var a = new U(null, 2, 5, V, [Fl, Oj], null);
                    return Ub.g ? Ub.g(a) : Ub.call(null, a);
                  }()), VC = function() {
                    var a = Rq / r;
                    return 1 > a ? a : 1;
                  }(), gw = function() {
                    var a = Og;
                    return q(a) ? C.h(In, oj) : a;
                  }(), Sq = bA(Th, Uh, qa, ga), WC = bA(Th, Uh, qa + 8, ga + 8);
                  if (q(gw)) {
                    var hw = a;
                    Bz(hw, Pl.g(Mz));
                    zz(hw, WC);
                  }
                  var of = a;
                  Dz(of, 1);
                  Cz(of, "black");
                  of.lineWidth = 1;
                  yz(of, Sq);
                  Bz(of, "white");
                  zz(of, Sq);
                  Dz(of, VC);
                  Bz(of, Go.g(Mz));
                  zz(of, Sq);
                  Dz(of, 1);
                  if (En(Ub)) {
                    var Tq = a;
                    Cz(Tq, Go.g(Mz));
                    Tq.lineWidth = 2;
                    sb(Tq, mf, In);
                  }
                  Bz(a, "black");
                  Az(a, new p(null, 3, [Cr, "[" + u.g(In) + "],  active " + u.g(Rq) + " / " + u.g(TC) + " conn. (" + u.g(fw) + " / " + u.g(UC) + " disconn.)", Ep, Th + 5 + va, Pj, Uh], null));
                  a.lineWidth = 1;
                  var Jn = dh.h(h, new U(null, 2, 5, V, [Il, ir], null)), XC = dh.h(h, new U(null, 2, 5, V, [Il, Go], null)), YC = dh.h(h, new U(null, 2, 5, V, [Il, Oj], null)), iw = dh.h(h, new U(null, 2, 5, V, [Il, Bo], null));
                  if (q(function() {
                    var a = C.h(iw, dn);
                    return a ? a : (a = C.h(iw, Wn)) ? gw : a;
                  }())) {
                    for (var Uq = E(bg.h(q(YC) ? new U(null, 1, 5, V, [Oj], null) : null, q(XC) ? new U(null, 1, 5, V, [Go], null) : null)), Vq = null, Wq = 0, il = 0;;) {
                      if (il < Wq) {
                        var jw = Vq.F(null, il), ZC = function() {
                          var a = new U(null, 2, 5, V, [xm, jw], null);
                          return Ub.g ? Ub.g(a) : Ub.call(null, a);
                        }();
                        Cz(a, function() {
                          var a = jw;
                          return Mz.g ? Mz.g(a) : Mz.call(null, a);
                        }());
                        for (var Xq = E(ZC), Yq = null, Zq = 0, jl = 0;;) {
                          if (jl < Zq) {
                            var kw = Yq.F(null, jl), lw = O.j(kw, 0, null), $C = O.j(lw, 0, null);
                            O.j(lw, 1, null);
                            var aD = O.j(kw, 1, null), mw = Yz(d, $C, f + 1), bD = O.j(mw, 0, null), cD = O.j(mw, 1, null), kl = a;
                            Dz(kl, q(Jn) ? aD : 1);
                            vz(kl);
                            kl.moveTo(Th, Uh);
                            kl.lineTo(bD + 1, cD);
                            wz(kl);
                            jl += 1;
                          } else {
                            var nw = E(Xq);
                            if (nw) {
                              var ll = nw;
                              if (T(ll)) {
                                var ow = x(ll), dD = z(ll), eD = ow, fD = N(ow), Xq = dD, Yq = eD, Zq = fD
                              } else {
                                var pw = F(ll), qw = O.j(pw, 0, null), gD = O.j(qw, 0, null);
                                O.j(qw, 1, null);
                                var hD = O.j(pw, 1, null), rw = Yz(d, gD, f + 1), iD = O.j(rw, 0, null), jD = O.j(rw, 1, null), ml = a;
                                Dz(ml, q(Jn) ? hD : 1);
                                vz(ml);
                                ml.moveTo(Th, Uh);
                                ml.lineTo(iD + 1, jD);
                                wz(ml);
                                Xq = H(ll);
                                Yq = null;
                                Zq = 0;
                              }
                              jl = 0;
                            } else {
                              break;
                            }
                          }
                        }
                        Dz(a, 1);
                        il += 1;
                      } else {
                        var sw = E(Uq);
                        if (sw) {
                          var nl = sw;
                          if (T(nl)) {
                            var tw = x(nl), kD = z(nl), lD = tw, mD = N(tw), Uq = kD, Vq = lD, Wq = mD
                          } else {
                            var uw = F(nl), nD = function() {
                              var a = new U(null, 2, 5, V, [xm, uw], null);
                              return Ub.g ? Ub.g(a) : Ub.call(null, a);
                            }();
                            Cz(a, function() {
                              var a = uw;
                              return Mz.g ? Mz.g(a) : Mz.call(null, a);
                            }());
                            for (var $q = E(nD), ar = null, br = 0, ol = 0;;) {
                              if (ol < br) {
                                var vw = ar.F(null, ol), ww = O.j(vw, 0, null), oD = O.j(ww, 0, null);
                                O.j(ww, 1, null);
                                var pD = O.j(vw, 1, null), xw = Yz(d, oD, f + 1), qD = O.j(xw, 0, null), rD = O.j(xw, 1, null), pl = a;
                                Dz(pl, q(Jn) ? pD : 1);
                                vz(pl);
                                pl.moveTo(Th, Uh);
                                pl.lineTo(qD + 1, rD);
                                wz(pl);
                                ol += 1;
                              } else {
                                var yw = E($q);
                                if (yw) {
                                  var ql = yw;
                                  if (T(ql)) {
                                    var zw = x(ql), sD = z(ql), tD = zw, uD = N(zw), $q = sD, ar = tD, br = uD
                                  } else {
                                    var Aw = F(ql), Bw = O.j(Aw, 0, null), vD = O.j(Bw, 0, null);
                                    O.j(Bw, 1, null);
                                    var wD = O.j(Aw, 1, null), Cw = Yz(d, vD, f + 1), xD = O.j(Cw, 0, null), yD = O.j(Cw, 1, null), rl = a;
                                    Dz(rl, q(Jn) ? wD : 1);
                                    vz(rl);
                                    rl.moveTo(Th, Uh);
                                    rl.lineTo(xD + 1, yD);
                                    wz(rl);
                                    $q = H(ql);
                                    ar = null;
                                    br = 0;
                                  }
                                  ol = 0;
                                } else {
                                  break;
                                }
                              }
                            }
                            Dz(a, 1);
                            Uq = H(nl);
                            Vq = null;
                            Wq = 0;
                          }
                          il = 0;
                        } else {
                          break;
                        }
                      }
                    }
                  }
                  Cq = H(hl);
                  Dq = null;
                  Eq = 0;
                }
                Xk = 0;
              } else {
                break;
              }
            }
          }
          cc = H(Ph);
          Gc = null;
          Gb = 0;
        }
        qc = 0;
      } else {
        break;
      }
    }
  }
  a.restore();
}
function lA(a) {
  var b = ye(a) ? S.h(vg, a) : a, c = Q.h(b, em), d = Q.h(b, Xn), e = Q.h(b, Ql), f = O.h(L.g ? L.g(Jz) : L.call(null, Jz), c), g = ly(f), h = O.h(g, d), l = F(my(f)), m = Zx(l), r = Vx.g(l);
  return S.h(u, Ug("\n", $g(new U(null, 26, 5, V, ["__Selection__", "* timestep " + u.g(om.g(h)) + " (delay " + u.g(c) + ")", "* column " + u.g(q(e) ? e : "nil"), "", "__Input__", "" + u.g(m) + " (" + u.g(N(r)) + " bits)", "", "__Active columns__", "" + u.g(Se.g(Kn.g(h))), "", "__Active cells__", "" + u.g(Se.g(wo.g(h))), "", "__Learn cells__", "" + u.g(Se.g(cn.g(h))), "", "__Signal cells__", "" + u.g(Se.g(Im.g(h))), "", "__TP scores__", "" + u.g(Se.g(Hl.g(h))), "", "__Predicted cells__", "" + u.g(Se.g(Mo.g(h))), 
  "", q(e) ? function() {
    var s = c + 1, w = O.h(L.g ? L.g(Jz) : L.call(null, Jz), s), A = O.h(ly(w), d), y = Yo.g(A), B = wo.g(A), D = dh.h(A, new U(null, 2, 5, V, [Y, e], null)), I = dh.h(h, new U(null, 2, 5, V, [Y, e], null)), P = Oo.g(io.g(A)), M = O.h(ky(f), d), ea = Sx(M), na = 0 < d ? Wx.g(O.h(ky(f), d - 1)) : ei;
    return new U(null, 14, 5, V, ["__Active cells prev__", "" + u.g(Se.g(wo.g(A))), "", "__Learn cells prev__", "" + u.g(Se.g(cn.g(A))), "", "__Predicted cells prev__", "" + u.g(Se.g(Mo.g(A))), "", "__Selected column__", "__Connected ff-synapses__", function() {
      var J = xm.g(Yj.g(D));
      return function(a, b, c, d, e, f, g, h, l, r, m, s, w, J, y, A, B, D, I, M, P, ea, na, Tc) {
        return function Db(Dc) {
          return new If(null, function(a, b, c, d, e, f, g, h, l, r, m, s) {
            return function() {
              for (;;) {
                var a = E(Dc);
                if (a) {
                  if (T(a)) {
                    var b = x(a), c = N(b), d = Uf(c);
                    return function() {
                      for (var a = 0;;) {
                        if (a < c) {
                          var e = v.h(b, a), f = O.j(e, 0, null), e = O.j(e, 1, null);
                          Yf(d, "  " + u.g(f) + " :\x3d\x3e " + u.g(tz("%.2f", e)) + u.g(q(function() {
                            var a = f;
                            return s.g ? s.g(a) : s.call(null, a);
                          }()) ? " S" : null) + u.g(q(function() {
                            var a = f;
                            return m.g ? m.g(a) : m.call(null, a);
                          }()) ? " A " + u.g(Tx(r, f)) : null));
                          a += 1;
                        } else {
                          return!0;
                        }
                      }
                    }() ? Xf(d.R(), Db(z(a))) : Xf(d.R(), null);
                  }
                  var e = F(a), f = O.j(e, 0, null), e = O.j(e, 1, null);
                  return Sd("  " + u.g(f) + " :\x3d\x3e " + u.g(tz("%.2f", e)) + u.g(q(function() {
                    var a = f;
                    return s.g ? s.g(a) : s.call(null, a);
                  }()) ? " S" : null) + u.g(q(function() {
                    var a = f;
                    return m.g ? m.g(a) : m.call(null, a);
                  }()) ? " A " + u.g(Tx(r, f)) : null), Db(G(a)));
                }
                return null;
              }
            };
          }(a, b, c, d, e, f, g, h, l, r, m, s, w, J, y, A, B, D, I, M, P, ea, na, Tc), null, null);
        };
      }(J, s, w, A, y, B, D, I, P, M, ea, na, f, g, h, l, m, r, a, b, b, c, d, e)(Se.g(J));
    }(), "__Cells and their Dendrite segments__", sg(function(a, b, c, d, e, f, g, h, l, r, m, s, w, y, A, B, D, I, M, P, ea, na, hc) {
      return function(rd, Tc) {
        var Lb = Zm.g(Tc), Db = wo.g(c), Dc = cn.g(c);
        return new U(null, 4, 5, V, ["CELL " + u.g(rd), "" + u.g(N(Lb)) + " \x3d " + u.g(Se.g(Cg.h(qg.h(N, bn), Lb))), "Lateral excitation from this cell: " + u.g(bs(c, Ap.g(io.g(c)), Ko.g(Tc))), function() {
          return function(a, b, c, d, e, f, g, h, l, r, m, s, w, J, y, A, B, D, I, da, M, P, ea, Ia, ga, na) {
            return function pc(fa) {
              return new If(null, function(a, b, c, d, e, f, g, h, l, r, m, s, w, J, y, A, B, D, I, da, M, P, ea, Ia, ga, na) {
                return function() {
                  for (;;) {
                    var qa = E(fa);
                    if (qa) {
                      var $ = qa;
                      if (T($)) {
                        var va = x($), Fa = N(va), oa = Uf(Fa);
                        return function() {
                          for (var fa = 0;;) {
                            if (fa < Fa) {
                              var ya = v.h(va, fa), Aa = bn.g(function() {
                                var b = ya;
                                return a.g ? a.g(b) : a.call(null, b);
                              }());
                              Yf(oa, new U(null, 2, 5, V, ["  SEGMENT " + u.g(ya), function() {
                                return function(a, b, c, d, e, f, g, h, l, r, m, s, w, J, y, A, B, D, I, da, M, P, ea, Ia, ga, na, fa, qa, $, va, ya, Fa, oa, Aa) {
                                  return function Mg(bb) {
                                    return new If(null, function(a, b, c, d, e, f, g, h, l, r, m, s, w, J, y, A, B, D, I) {
                                      return function() {
                                        for (;;) {
                                          var a = E(bb);
                                          if (a) {
                                            if (T(a)) {
                                              var b = x(a), c = N(b), d = Uf(c);
                                              return function() {
                                                for (var a = 0;;) {
                                                  if (a < c) {
                                                    var e = v.h(b, a), f = O.j(e, 0, null), e = O.j(e, 1, null);
                                                    Yf(d, "  " + u.g(f) + u.g(e >= I ? " :\x3d\x3e " : " :.: ") + u.g(tz("%.2f", e)) + u.g(q(function() {
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
                                              }() ? Xf(d.R(), Mg(z(a))) : Xf(d.R(), null);
                                            }
                                            var e = F(a), f = O.j(e, 0, null), e = O.j(e, 1, null);
                                            return Sd("  " + u.g(f) + u.g(e >= I ? " :\x3d\x3e " : " :.: ") + u.g(tz("%.2f", e)) + u.g(q(function() {
                                              var a = f;
                                              return m.g ? m.g(a) : m.call(null, a);
                                            }()) ? " L" : q(function() {
                                              var a = f;
                                              return r.g ? r.g(a) : r.call(null, a);
                                            }()) ? " A" : null), Mg(G(a)));
                                          }
                                          return null;
                                        }
                                      };
                                    }(a, b, c, d, e, f, g, h, l, r, m, s, w, J, y, A, B, D, I, da, M, P, ea, Ia, ga, na, fa, qa, $, va, ya, Fa, oa, Aa), null, null);
                                  };
                                }(fa, Aa, ya, va, Fa, oa, $, qa, a, b, c, d, e, f, g, h, l, r, m, s, w, J, y, A, B, D, I, da, M, P, ea, Ia, ga, na)(Se.g(Aa));
                              }()], null));
                              fa += 1;
                            } else {
                              return!0;
                            }
                          }
                        }() ? Xf(oa.R(), pc(z($))) : Xf(oa.R(), null);
                      }
                      var ya = F($), Aa = bn.g(function() {
                        var b = ya;
                        return a.g ? a.g(b) : a.call(null, b);
                      }());
                      return Sd(new U(null, 2, 5, V, ["  SEGMENT " + u.g(ya), function() {
                        return function(a, b, c, d, e, f, g, h, l, r, m, s, w, J, y, A, B, D, I, da, M, P, ae, ea, Ia, ga, na, fa, qa, $) {
                          return function Ke(va) {
                            return new If(null, function(a, b, c, d, e, f, g, h, l, r, m, s, w, J, y) {
                              return function() {
                                for (;;) {
                                  var a = E(va);
                                  if (a) {
                                    if (T(a)) {
                                      var b = x(a), c = N(b), d = Uf(c);
                                      return function() {
                                        for (var a = 0;;) {
                                          if (a < c) {
                                            var e = v.h(b, a), h = O.j(e, 0, null), e = O.j(e, 1, null);
                                            Yf(d, "  " + u.g(h) + u.g(e >= y ? " :\x3d\x3e " : " :.: ") + u.g(tz("%.2f", e)) + u.g(q(function() {
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
                                      }() ? Xf(d.R(), Ke(z(a))) : Xf(d.R(), null);
                                    }
                                    var e = F(a), h = O.j(e, 0, null), e = O.j(e, 1, null);
                                    return Sd("  " + u.g(h) + u.g(e >= y ? " :\x3d\x3e " : " :.: ") + u.g(tz("%.2f", e)) + u.g(q(function() {
                                      var a = h;
                                      return g.g ? g.g(a) : g.call(null, a);
                                    }()) ? " L" : q(function() {
                                      var a = h;
                                      return f.g ? f.g(a) : f.call(null, a);
                                    }()) ? " A" : null), Ke(G(a)));
                                  }
                                  return null;
                                }
                              };
                            }(a, b, c, d, e, f, g, h, l, r, m, s, w, J, y, A, B, D, I, da, M, P, ae, ea, Ia, ga, na, fa, qa, $), null, null);
                          };
                        }(Aa, ya, $, qa, a, b, c, d, e, f, g, h, l, r, m, s, w, J, y, A, B, D, I, da, M, P, ea, Ia, ga, na)(Se.g(Aa));
                      }()], null), pc(G($)));
                    }
                    return null;
                  }
                };
              }(a, b, c, d, e, f, g, h, l, r, m, s, w, J, y, A, B, D, I, da, M, P, ea, Ia, ga, na), null, null);
            };
          }(Lb, Db, Dc, a, b, c, d, e, f, g, h, l, r, m, s, w, y, A, B, D, I, M, P, ea, na, hc)(tj.g(N(Lb)));
        }()], null);
      };
    }(s, w, A, y, B, D, I, P, M, ea, na, f, g, h, l, m, r, a, b, b, c, d, e), Up.g(D))], null);
  }() : null], null))));
}
function mA(a) {
  var b = ye(a) ? S.h(vg, a) : a;
  a = Q.h(b, Ao);
  var b = Q.h(b, $l), c = Et(new U(null, 1, 5, V, [Rn], null));
  c.width = b;
  c.height = a;
  return c;
}
function nA(a) {
  var b = mA(Nz(a)), c = b.getContext(Gf("2d")), d = Sz(a);
  Bz(c, Oj.g(Mz));
  Zz(c, a, tj.h(d, d + Rz(a)));
  c.fill();
  return b;
}
function oA(a, b) {
  var c = mA(Nz(a)), d = c.getContext(Gf("2d")), e = Vx.g(b);
  Bz(d, Go.g(Mz));
  Zz(d, a, e);
  d.fill();
  return c;
}
function pA(a, b) {
  var c = mA(Nz(a)), d = c.getContext(Gf("2d")), e = Yo.g(b), f = ks(b, e), e = Zr(function() {
    return function(a) {
      a /= 8;
      return 1 < a ? 1 : a;
    };
  }(c, d, e, f), f);
  Bz(d, Kp.g(Mz));
  $z(d, a, e);
  return c;
}
function qA(a, b) {
  var c = mA(Nz(a)), d = c.getContext(Gf("2d")), e = Kn.g(b);
  Bz(d, Go.g(Mz));
  Zz(d, a, e);
  d.fill();
  return c;
}
function rA(a, b) {
  var c = mA(Nz(a)), d = c.getContext(Gf("2d")), e = $i(Ml.g(b));
  Bz(d, Kp.g(Mz));
  Zz(d, a, e);
  d.fill();
  return c;
}
function sA(a, b) {
  var c = mA(Nz(a)), d = c.getContext(Gf("2d")), e = $i(Hl.g(b));
  Bz(d, vl.g(Mz));
  Zz(d, a, e);
  d.fill();
  return c;
}
function tA(a, b) {
  var c = mA(Nz(a)), d = c.getContext(Gf("2d")), e = Zr(function() {
    return function(a) {
      a /= 16;
      return 1 < a ? 1 : a;
    };
  }(c, d), Io.g(b));
  Bz(d, "black");
  $z(d, a, e);
  d.fill();
  return c;
}
function uA(a) {
  return "Showing " + u.g(Sz(a)) + "--" + u.g(Sz(a) + Rz(a) + -1) + " of " + u.g(sr.g(a));
}
function vA() {
  var a = L.g ? L.g(wA) : L.call(null, wA), b = ye(a) ? S.h(vg, a) : a, c = Q.h(b, em), d = Q.h(b, Xn), e = Q.h(b, Ql);
  Ht.h("#detail-text", q(e) ? lA(b) : "Select a column (by clicking on it) to see details.");
  var f = L.g ? L.g(Gz) : L.call(null, Gz), g = Qp.g(L.g ? L.g(Kz) : L.call(null, Kz)), h = nm.g(L.g ? L.g(Kz) : L.call(null, Kz)), l = O.h(L.g ? L.g(Jz) : L.call(null, Jz), c), m = O.j(L.g ? L.g(Jz) : L.call(null, Jz), c + 1, ei), r = Et("#comportex-viz"), s = r.getContext(Gf("2d")), w = nA(g), A = Cg.h(nA, h), y = Xz(de(h)) + dh.h(f, new U(null, 2, 5, V, [up, Vl], null));
  xz(s, new p(null, 4, [Ep, 0, Pj, 0, $l, r.width, Ao, 900], null));
  Az(s, new p(null, 3, [Cr, "Input bits.    Time --\x3e", Ep, Ep.g(Nz(g)), Pj, 7], null));
  Az(s, new p(null, 3, [Cr, uA(g), Ep, Ep.g(Nz(g)), Pj, 17], null));
  for (var B = E(sg(xh, h)), D = null, I = 0, P = 0;;) {
    if (P < I) {
      var M = D.F(null, P), ea = O.j(M, 0, null), na = O.j(M, 1, null);
      Az(s, new p(null, 3, [Cr, "Region " + u.g(ea) + " columns.", Ep, Ep.g(Nz(na)), Pj, 7], null));
      Az(s, new p(null, 3, [Cr, uA(na), Ep, Ep.g(Nz(na)), Pj, 17], null));
      P += 1;
    } else {
      var J = E(B);
      if (J) {
        var Ia = J;
        if (T(Ia)) {
          var da = x(Ia), fa = z(Ia), ga = da, qa = N(da), B = fa, D = ga, I = qa
        } else {
          var va = F(Ia), ya = O.j(va, 0, null), Aa = O.j(va, 1, null);
          Az(s, new p(null, 3, [Cr, "Region " + u.g(ya) + " columns.", Ep, Ep.g(Nz(Aa)), Pj, 7], null));
          Az(s, new p(null, 3, [Cr, uA(Aa), Ep, Ep.g(Nz(Aa)), Pj, 17], null));
          B = H(Ia);
          D = null;
          I = 0;
        }
        P = 0;
      } else {
        break;
      }
    }
  }
  var Fa = y + dh.h(f, new U(null, 2, 5, V, [up, uk], null));
  Az(s, new p(null, 3, [Cr, "Segments. " + u.g(q(e) ? "(arrows keys to move)" : "(click on a column)"), Ep, Fa, Pj, 7], null));
  for (var oa = E(tj.g(N(L.g ? L.g(Jz) : L.call(null, Jz)))), Ma = null, ab = 0, bb = 0;;) {
    if (bb < ab) {
      var Da = Ma.F(null, bb), sb = O.h(L.g ? L.g(Jz) : L.call(null, Jz), Da), lb = O.j(L.g ? L.g(Jz) : L.call(null, Jz), Da + 1, ei), cb = F(ly(lb)), Cb = ly(sb), $ = cr.g(le(sb));
      aA(s, g, Da, w);
      q(dh.h(f, new U(null, 2, 5, V, [Qp, Go], null))) && aA(s, g, Da, Q.h(C.h(Qp.g(f), Qp.g(So.g(function() {
        var a = $;
        return L.g ? L.g(a) : L.call(null, a);
      }()))) ? function() {
        var a = $;
        return L.g ? L.g(a) : L.call(null, a);
      }() : Ag.m($, R, Tm, oA(g, F(my(sb)))), Tm));
      q(dh.h(f, new U(null, 2, 5, V, [Qp, Kp], null))) && aA(s, g, Da, Q.h(C.h(Qp.g(f), Qp.g(So.g(function() {
        var a = $;
        return L.g ? L.g(a) : L.call(null, a);
      }()))) ? function() {
        var a = $;
        return L.g ? L.g(a) : L.call(null, a);
      }() : Ag.m($, R, vo, pA(g, cb)), vo));
      for (var xc = E(Cg.k(xh, tj.p(), h, Cb, K([A], 0))), Ob = null, hc = 0, rd = 0;;) {
        if (rd < hc) {
          var Tc = Ob.F(null, rd), Lb = O.j(Tc, 0, null), Db = O.j(Tc, 1, null), Dc = O.j(Tc, 2, null), Vd = O.j(Tc, 3, null);
          aA(s, Db, Da, Vd);
          q(dh.h(f, new U(null, 2, 5, V, [Y, Io], null))) && aA(s, Db, Da, Q.h(C.h(Y.g(f), Y.g(So.g(function() {
            var a = $;
            return L.g ? L.g(a) : L.call(null, a);
          }()))) ? function() {
            var a = $;
            return L.g ? L.g(a) : L.call(null, a);
          }() : Ag.m($, R, new U(null, 2, 5, V, [jr, Lb], null), tA(Db, Dc)), new U(null, 2, 5, V, [jr, Lb], null)));
          q(dh.h(f, new U(null, 2, 5, V, [Y, Go], null))) && aA(s, Db, Da, Q.h(C.h(Y.g(f), Y.g(So.g(function() {
            var a = $;
            return L.g ? L.g(a) : L.call(null, a);
          }()))) ? function() {
            var a = $;
            return L.g ? L.g(a) : L.call(null, a);
          }() : Ag.m($, R, new U(null, 2, 5, V, [Lm, Lb], null), qA(Db, Dc)), new U(null, 2, 5, V, [Lm, Lb], null)));
          q(dh.h(f, new U(null, 2, 5, V, [Y, Gm], null))) && aA(s, Db, Da, Q.h(C.h(Y.g(f), Y.g(So.g(function() {
            var a = $;
            return L.g ? L.g(a) : L.call(null, a);
          }()))) ? function() {
            var a = $;
            return L.g ? L.g(a) : L.call(null, a);
          }() : Ag.m($, R, new U(null, 2, 5, V, [Vo, Lb], null), rA(Db, Dc)), new U(null, 2, 5, V, [Vo, Lb], null)));
          q(dh.h(f, new U(null, 2, 5, V, [Y, vl], null))) && aA(s, Db, Da, Q.h(C.h(Y.g(f), Y.g(So.g(function() {
            var a = $;
            return L.g ? L.g(a) : L.call(null, a);
          }()))) ? function() {
            var a = $;
            return L.g ? L.g(a) : L.call(null, a);
          }() : Ag.m($, R, new U(null, 2, 5, V, [fo, Lb], null), sA(Db, Dc)), new U(null, 2, 5, V, [fo, Lb], null)));
          rd += 1;
        } else {
          var Lf = E(xc);
          if (Lf) {
            var sd = Lf;
            if (T(sd)) {
              var td = x(sd), Dg = z(sd), Eg = td, Qb = N(td), xc = Dg, Ob = Eg, hc = Qb
            } else {
              var Rb = F(sd), ac = O.j(Rb, 0, null), oc = O.j(Rb, 1, null), cd = O.j(Rb, 2, null), ze = O.j(Rb, 3, null);
              aA(s, oc, Da, ze);
              q(dh.h(f, new U(null, 2, 5, V, [Y, Io], null))) && aA(s, oc, Da, Q.h(C.h(Y.g(f), Y.g(So.g(function() {
                var a = $;
                return L.g ? L.g(a) : L.call(null, a);
              }()))) ? function() {
                var a = $;
                return L.g ? L.g(a) : L.call(null, a);
              }() : Ag.m($, R, new U(null, 2, 5, V, [jr, ac], null), tA(oc, cd)), new U(null, 2, 5, V, [jr, ac], null)));
              q(dh.h(f, new U(null, 2, 5, V, [Y, Go], null))) && aA(s, oc, Da, Q.h(C.h(Y.g(f), Y.g(So.g(function() {
                var a = $;
                return L.g ? L.g(a) : L.call(null, a);
              }()))) ? function() {
                var a = $;
                return L.g ? L.g(a) : L.call(null, a);
              }() : Ag.m($, R, new U(null, 2, 5, V, [Lm, ac], null), qA(oc, cd)), new U(null, 2, 5, V, [Lm, ac], null)));
              q(dh.h(f, new U(null, 2, 5, V, [Y, Gm], null))) && aA(s, oc, Da, Q.h(C.h(Y.g(f), Y.g(So.g(function() {
                var a = $;
                return L.g ? L.g(a) : L.call(null, a);
              }()))) ? function() {
                var a = $;
                return L.g ? L.g(a) : L.call(null, a);
              }() : Ag.m($, R, new U(null, 2, 5, V, [Vo, ac], null), rA(oc, cd)), new U(null, 2, 5, V, [Vo, ac], null)));
              q(dh.h(f, new U(null, 2, 5, V, [Y, vl], null))) && aA(s, oc, Da, Q.h(C.h(Y.g(f), Y.g(So.g(function() {
                var a = $;
                return L.g ? L.g(a) : L.call(null, a);
              }()))) ? function() {
                var a = $;
                return L.g ? L.g(a) : L.call(null, a);
              }() : Ag.m($, R, new U(null, 2, 5, V, [fo, ac], null), sA(oc, cd)), new U(null, 2, 5, V, [fo, ac], null)));
              xc = H(sd);
              Ob = null;
              hc = 0;
            }
            rd = 0;
          } else {
            break;
          }
        }
      }
      jg.h(f, So.g(function() {
        var a = $;
        return L.g ? L.g(a) : L.call(null, a);
      }())) && Ag.m($, R, So, f);
      bb += 1;
    } else {
      var Mf = E(oa);
      if (Mf) {
        var dd = Mf;
        if (T(dd)) {
          var Fg = x(dd), Nf = z(dd), bf = Fg, bc = N(Fg), oa = Nf, Ma = bf, ab = bc
        } else {
          var Fb = F(dd), Wd = O.h(L.g ? L.g(Jz) : L.call(null, Jz), Fb), Ae = O.j(L.g ? L.g(Jz) : L.call(null, Jz), Fb + 1, ei), Xd = F(ly(Ae)), Be = ly(Wd), ta = cr.g(le(Wd));
          aA(s, g, Fb, w);
          q(dh.h(f, new U(null, 2, 5, V, [Qp, Go], null))) && aA(s, g, Fb, Q.h(C.h(Qp.g(f), Qp.g(So.g(function() {
            var a = ta;
            return L.g ? L.g(a) : L.call(null, a);
          }()))) ? function() {
            var a = ta;
            return L.g ? L.g(a) : L.call(null, a);
          }() : Ag.m(ta, R, Tm, oA(g, F(my(Wd)))), Tm));
          q(dh.h(f, new U(null, 2, 5, V, [Qp, Kp], null))) && aA(s, g, Fb, Q.h(C.h(Qp.g(f), Qp.g(So.g(function() {
            var a = ta;
            return L.g ? L.g(a) : L.call(null, a);
          }()))) ? function() {
            var a = ta;
            return L.g ? L.g(a) : L.call(null, a);
          }() : Ag.m(ta, R, vo, pA(g, Xd)), vo));
          for (var Ce = E(Cg.k(xh, tj.p(), h, Be, K([A], 0))), cf = null, ud = 0, pc = 0;;) {
            if (pc < ud) {
              var df = cf.F(null, pc), Ec = O.j(df, 0, null), Fc = O.j(df, 1, null), ef = O.j(df, 2, null), cc = O.j(df, 3, null);
              aA(s, Fc, Fb, cc);
              q(dh.h(f, new U(null, 2, 5, V, [Y, Io], null))) && aA(s, Fc, Fb, Q.h(C.h(Y.g(f), Y.g(So.g(function() {
                var a = ta;
                return L.g ? L.g(a) : L.call(null, a);
              }()))) ? function() {
                var a = ta;
                return L.g ? L.g(a) : L.call(null, a);
              }() : Ag.m(ta, R, new U(null, 2, 5, V, [jr, Ec], null), tA(Fc, ef)), new U(null, 2, 5, V, [jr, Ec], null)));
              q(dh.h(f, new U(null, 2, 5, V, [Y, Go], null))) && aA(s, Fc, Fb, Q.h(C.h(Y.g(f), Y.g(So.g(function() {
                var a = ta;
                return L.g ? L.g(a) : L.call(null, a);
              }()))) ? function() {
                var a = ta;
                return L.g ? L.g(a) : L.call(null, a);
              }() : Ag.m(ta, R, new U(null, 2, 5, V, [Lm, Ec], null), qA(Fc, ef)), new U(null, 2, 5, V, [Lm, Ec], null)));
              q(dh.h(f, new U(null, 2, 5, V, [Y, Gm], null))) && aA(s, Fc, Fb, Q.h(C.h(Y.g(f), Y.g(So.g(function() {
                var a = ta;
                return L.g ? L.g(a) : L.call(null, a);
              }()))) ? function() {
                var a = ta;
                return L.g ? L.g(a) : L.call(null, a);
              }() : Ag.m(ta, R, new U(null, 2, 5, V, [Vo, Ec], null), rA(Fc, ef)), new U(null, 2, 5, V, [Vo, Ec], null)));
              q(dh.h(f, new U(null, 2, 5, V, [Y, vl], null))) && aA(s, Fc, Fb, Q.h(C.h(Y.g(f), Y.g(So.g(function() {
                var a = ta;
                return L.g ? L.g(a) : L.call(null, a);
              }()))) ? function() {
                var a = ta;
                return L.g ? L.g(a) : L.call(null, a);
              }() : Ag.m(ta, R, new U(null, 2, 5, V, [fo, Ec], null), sA(Fc, ef)), new U(null, 2, 5, V, [fo, Ec], null)));
              pc += 1;
            } else {
              var Gc = E(Ce);
              if (Gc) {
                var Gb = Gc;
                if (T(Gb)) {
                  var qc = x(Gb), Yd = z(Gb), rc = qc, De = N(qc), Ce = Yd, cf = rc, ud = De
                } else {
                  var ed = F(Gb), sc = O.j(ed, 0, null), dc = O.j(ed, 1, null), Hc = O.j(ed, 2, null), Zd = O.j(ed, 3, null);
                  aA(s, dc, Fb, Zd);
                  q(dh.h(f, new U(null, 2, 5, V, [Y, Io], null))) && aA(s, dc, Fb, Q.h(C.h(Y.g(f), Y.g(So.g(function() {
                    var a = ta;
                    return L.g ? L.g(a) : L.call(null, a);
                  }()))) ? function() {
                    var a = ta;
                    return L.g ? L.g(a) : L.call(null, a);
                  }() : Ag.m(ta, R, new U(null, 2, 5, V, [jr, sc], null), tA(dc, Hc)), new U(null, 2, 5, V, [jr, sc], null)));
                  q(dh.h(f, new U(null, 2, 5, V, [Y, Go], null))) && aA(s, dc, Fb, Q.h(C.h(Y.g(f), Y.g(So.g(function() {
                    var a = ta;
                    return L.g ? L.g(a) : L.call(null, a);
                  }()))) ? function() {
                    var a = ta;
                    return L.g ? L.g(a) : L.call(null, a);
                  }() : Ag.m(ta, R, new U(null, 2, 5, V, [Lm, sc], null), qA(dc, Hc)), new U(null, 2, 5, V, [Lm, sc], null)));
                  q(dh.h(f, new U(null, 2, 5, V, [Y, Gm], null))) && aA(s, dc, Fb, Q.h(C.h(Y.g(f), Y.g(So.g(function() {
                    var a = ta;
                    return L.g ? L.g(a) : L.call(null, a);
                  }()))) ? function() {
                    var a = ta;
                    return L.g ? L.g(a) : L.call(null, a);
                  }() : Ag.m(ta, R, new U(null, 2, 5, V, [Vo, sc], null), rA(dc, Hc)), new U(null, 2, 5, V, [Vo, sc], null)));
                  q(dh.h(f, new U(null, 2, 5, V, [Y, vl], null))) && aA(s, dc, Fb, Q.h(C.h(Y.g(f), Y.g(So.g(function() {
                    var a = ta;
                    return L.g ? L.g(a) : L.call(null, a);
                  }()))) ? function() {
                    var a = ta;
                    return L.g ? L.g(a) : L.call(null, a);
                  }() : Ag.m(ta, R, new U(null, 2, 5, V, [fo, sc], null), sA(dc, Hc)), new U(null, 2, 5, V, [fo, sc], null)));
                  Ce = H(Gb);
                  cf = null;
                  ud = 0;
                }
                pc = 0;
              } else {
                break;
              }
            }
          }
          jg.h(f, So.g(function() {
            var a = ta;
            return L.g ? L.g(a) : L.call(null, a);
          }())) && Ag.m(ta, R, So, f);
          oa = H(dd);
          Ma = null;
          ab = 0;
        }
        bb = 0;
      } else {
        break;
      }
    }
  }
  Vz(g, s, c);
  for (var vd = E(h), wd = null, tc = 0, Mb = 0;;) {
    if (Mb < tc) {
      var Ee = wd.F(null, Mb);
      Vz(Ee, s, c);
      Mb += 1;
    } else {
      var Ic = E(vd);
      if (Ic) {
        var xd = Ic;
        if (T(xd)) {
          var ff = x(xd), gf = z(xd), fd = ff, yd = N(ff), vd = gf, wd = fd, tc = yd
        } else {
          var Fe = F(xd);
          Vz(Fe, s, c);
          vd = H(xd);
          wd = null;
          tc = 0;
        }
        Mb = 0;
      } else {
        break;
      }
    }
  }
  if (q(e)) {
    var $d = O.h(h, d);
    Wz($d, s, c, e);
  }
  if (q(dh.h(f, new U(null, 2, 5, V, [Yj, Go], null)))) {
    for (var Uc = E(Cg.k(xh, tj.p(), ly(l), ly(m), K([cg.h(F(my(l)), ky(l)), h, cg.h(g, h)], 0))), Vc = null, Wc = 0, Ya = 0;;) {
      if (Ya < Wc) {
        var Xc = Vc.F(null, Ya), zd = O.j(Xc, 0, null), gd = O.j(Xc, 1, null), hf = O.j(Xc, 2, null), Gg = O.j(Xc, 3, null), Ge = O.j(Xc, 4, null), jf = O.j(Xc, 5, null);
        (fb(e) || C.h(d, zd)) && iA(s, gd, hf, Ge, Gg, jf, e, c, f);
        Ya += 1;
      } else {
        var He = E(Uc);
        if (He) {
          var Jc = He;
          if (T(Jc)) {
            var Ie = x(Jc), Hg = z(Jc), Of = Ie, uc = N(Ie), Uc = Hg, Vc = Of, Wc = uc
          } else {
            var hd = F(Jc), Pf = O.j(hd, 0, null), xk = O.j(hd, 1, null), yk = O.j(hd, 2, null), kf = O.j(hd, 3, null), Ig = O.j(hd, 4, null), Je = O.j(hd, 5, null);
            (fb(e) || C.h(d, Pf)) && iA(s, xk, yk, Ig, kf, Je, e, c, f);
            Uc = H(Jc);
            Vc = null;
            Wc = 0;
          }
          Ya = 0;
        } else {
          break;
        }
      }
    }
  }
  if (q(q(e) ? c + 1 < N(L.g ? L.g(Jz) : L.call(null, Jz)) : e)) {
    var Jg = O.h(ly(l), d), Qf = O.h(ly(m), d), kj = O.h(h, d);
    kA(s, Jg, Qf, kj, e, c, y, f);
  }
  return null;
}
function xA(a, b, c) {
  var d = mz.p();
  Jw(a, b, function(a, b, d) {
    return function(a) {
      oz.h(d, a);
      return q(c.g ? c.g(a) : c.call(null, a)) ? (a.preventDefault(), !1) : null;
    };
  }(a, b, d));
  return d;
}
function yA(a, b) {
  var c = xA(a, "click", function() {
    return!1;
  }), d = mz.g(1);
  Ny(function(a, c) {
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
                      bz(c);
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
              var d = a[7], e = a[8], f = a[9], d = a[2], e = d.offsetX, g = d.offsetY, d = L.g ? L.g(Kz) : L.call(null, Kz), f = Qp.g(d), d = L.g ? L.g(Kz) : L.call(null, Kz), h = nm.g(d), d = L.g ? L.g(Jz) : L.call(null, Jz), d = N(d) - 2, f = Tz(f, e, g);
              a[7] = g;
              a[8] = f;
              a[10] = h;
              a[9] = e;
              a[11] = d;
              a[1] = q(f) ? 8 : 9;
              return Z;
            }
            return 1 === d ? (a[2] = null, a[1] = 2, Z) : 4 === d ? $y(a, 7, c) : 15 === d ? (d = a[2], a[2] = d, a[1] = 12, Z) : 13 === d ? (d = a[7], h = a[10], f = a[9], e = a[12], g = a[13], h = O.h(h, e), d = Tz(h, f, d), a[13] = d, a[1] = q(d) ? 16 : 17, Z) : 6 === d ? (d = a[2], a[2] = d, a[1] = 3, Z) : 17 === d ? (e = a[12], a[12] = e + 1, a[2] = null, a[1] = 11, Z) : 3 === d ? (d = a[2], az(a, d)) : 12 === d ? (d = a[2], a[2] = d, a[1] = 10, Z) : 2 === d ? (a[1] = 4, Z) : 11 === d ? (h = 
            a[10], e = a[12], d = N(h), a[1] = q(e < d) ? 13 : 14, Z) : 9 === d ? (a[12] = 0, a[2] = null, a[1] = 11, Z) : 5 === d ? (a[2] = null, a[1] = 6, Z) : 14 === d ? (d = Ag.m(b, R, Ql, null), a[2] = d, a[1] = 15, Z) : 16 === d ? (e = a[12], g = a[13], d = a[11], h = O.j(g, 0, null), g = O.j(g, 1, null), d = he([Xn, Ql, em], [e, g, h < d ? h : d]), d = yg.h ? yg.h(b, d) : yg.call(null, b, d), a[2] = d, a[1] = 18, Z) : 10 === d ? (a[14] = a[2], a[2] = null, a[1] = 2, Z) : 18 === d ? (d = a[2], 
            a[2] = d, a[1] = 15, Z) : 8 === d ? (e = a[8], d = a[11], h = O.j(e, 0, null), e = O.j(e, 1, null), d = Ag.m(b, R, em, h < d ? h : d), a[15] = e, a[2] = d, a[1] = 10, Z) : null;
          };
        }(a, c), a, c);
      }(), h = function() {
        var b = d.p ? d.p() : d.call(null);
        b[6] = a;
        return b;
      }();
      return Zy(h);
    };
  }(d, c));
}
var zA = new p(null, 6, [33, mm, 34, Yp, 37, Br, 38, Pn, 39, op, 40, ek], null);
function AA(a, b) {
  var c = xA(document, "keydown", function(a) {
    a = a.keyCode;
    return zA.g ? zA.g(a) : zA.call(null, a);
  }), d = mz.g(1);
  Ny(function(c, d) {
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
                      bz(c);
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
              var g = e[7], h = e[8], y = e[2], B = y.keyCode, B = zA.g ? zA.g(B) : zA.call(null, B), D = L.g ? L.g(Jz) : L.call(null, Jz), I = N(D) - 2;
              e[9] = I;
              e[7] = B;
              e[8] = y;
              e[1] = q(B) ? 8 : 9;
              return Z;
            }
            if (20 === f) {
              return y = hA(!0), e[2] = y, e[1] = 11, Z;
            }
            if (1 === f) {
              return e[2] = null, e[1] = 2, Z;
            }
            if (4 === f) {
              return $y(e, 7, d);
            }
            if (15 === f) {
              var I = e[9], g = e[7], h = e[8], P = [em], M = new U(null, 1, 5, V, P, null), y = Ag.m(a, gh, M, function() {
                return function() {
                  return function(a) {
                    a -= 1;
                    return 0 < a ? a : 0;
                  };
                }(I, g, h, I, g, h, V, P, M, f, c, d);
              }());
              e[2] = y;
              e[1] = 16;
              return Z;
            }
            if (13 === f) {
              return y = L.g ? L.g(a) : L.call(null, a), y = 0 === em.g(y), e[1] = q(y) ? 14 : 15, Z;
            }
            if (6 === f) {
              return y = e[2], e[2] = y, e[1] = 3, Z;
            }
            if (17 === f) {
              var I = e[9], g = e[7], h = e[8], ea = [Ql], na = new U(null, 1, 5, V, ea, null), y = Ag.m(a, gh, na, function() {
                return function() {
                  return function(a) {
                    return q(a) ? a - 1 : null;
                  };
                }(I, g, h, I, g, h, V, ea, na, f, c, d);
              }());
              e[2] = y;
              e[1] = 11;
              return Z;
            }
            if (3 === f) {
              return y = e[2], az(e, y);
            }
            if (12 === f) {
              var I = e[9], g = e[7], h = e[8], J = [em], Ia = new U(null, 1, 5, V, J, null), y = Ag.m(a, gh, Ia, function() {
                return function(a) {
                  return function(b) {
                    b += 1;
                    return b < a ? b : a;
                  };
                }(I, g, h, I, g, h, V, J, Ia, f, c, d);
              }());
              e[2] = y;
              e[1] = 11;
              return Z;
            }
            if (2 === f) {
              return e[1] = 4, Z;
            }
            if (19 === f) {
              return y = hA(!1), e[2] = y, e[1] = 11, Z;
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
              return B = b.p ? b.p() : b.call(null), y = Ag.h(a, We), e[10] = B, e[2] = y, e[1] = 16, Z;
            }
            if (16 === f) {
              return y = e[2], e[2] = y, e[1] = 11, Z;
            }
            if (10 === f) {
              return e[11] = e[2], e[2] = null, e[1] = 2, Z;
            }
            if (18 === f) {
              var I = e[9], g = e[7], h = e[8], da = [Ql], fa = new U(null, 1, 5, V, da, null), y = Ag.m(a, gh, fa, function() {
                return function() {
                  return function(a) {
                    return q(a) ? a + 1 : null;
                  };
                }(I, g, h, I, g, h, V, da, fa, f, c, d);
              }());
              e[2] = y;
              e[1] = 11;
              return Z;
            }
            if (8 === f) {
              g = e[7];
              switch(g instanceof W ? g.ea : null) {
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
      return Zy(h);
    };
  }(d, c));
}
function BA(a) {
  var b = CA(), c = wA, d = DA, e = ly(a), f = F(my(a)), g = up.g(L.g ? L.g(Gz) : L.call(null, Gz)), h = Ox(f);
  a = fA(h, g);
  var l = Vl.g(g), e = Ue.j(function(a, b, c, d, e, f) {
    return function(a, b) {
      var d = Sn.g(io.g(b)), g = me(a), g = Xz(q(g) ? g : e) + f;
      return fe.h(a, gA(d, g, c));
    };
  }(e, f, g, h, a, l), ee, e), e = new p(null, 2, [Qp, a, nm, e], null);
  yg.h ? yg.h(Kz, e) : yg.call(null, Kz, e);
  e = mz.g(1);
  Ny(function(a) {
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
                      bz(c);
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
                var a = gi;
                return xg.g ? xg.g(a) : xg.call(null, a);
              }(), h = ig.m(f, R, cr, g), e = Ag.h(Jz, function() {
                return function(a) {
                  return function(b) {
                    return wh(Pg.h(L.g ? L.g(Iz) : L.call(null, Iz), Sd(a, b)));
                  };
                }(h, f, f, f, gi, g, h, d, a);
              }());
              c[8] = e;
              c[2] = null;
              c[1] = 2;
              return Z;
            }
            return 4 === d ? (f = c[7], e = c[2], c[7] = e, c[1] = q(e) ? 5 : 6, Z) : 3 === d ? (e = c[2], az(c, e)) : 2 === d ? $y(c, 4, b) : 1 === d ? (c[2] = null, c[1] = 2, Z) : null;
          };
        }(a), a);
      }(), d = function() {
        var b = c.p ? c.p() : c.call(null);
        b[6] = a;
        return b;
      }();
      return Zy(d);
    };
  }(e));
  e = Et("#comportex-viz");
  e.width = .7 * (window.innerWidth - 20);
  e.height = 900;
  yA(e, c);
  AA(c, d);
}
;function EA(a, b) {
  if (a.classList) {
    a.classList.add(b);
  } else {
    var c;
    a.classList ? c = !a.classList.contains(b) : (a.classList ? c = a.classList : (c = a.className, c = ha(c) && c.match(/\S+/g) || []), c = !(0 <= Pa(c, b)));
    c && (a.className += 0 < a.className.length ? " " + b : b);
  }
}
;function FA() {
  Ou.call(this);
  this.ac = new Dw(this);
  this.Wd = this;
  this.Sd = null;
}
pa(FA, Ou);
FA.prototype[Tu] = !0;
k = FA.prototype;
k.addEventListener = function(a, b, c, d) {
  Jw(this, a, b, c, d);
};
k.removeEventListener = function(a, b, c, d) {
  Pw(this, a, b, c, d);
};
k.dispatchEvent = function(a) {
  var b, c = this.Sd;
  if (c) {
    for (b = [];c;c = c.Sd) {
      b.push(c);
    }
  }
  var c = this.Wd, d = a.type || a;
  if (ha(a)) {
    a = new Qu(a, c);
  } else {
    if (a instanceof Qu) {
      a.target = a.target || c;
    } else {
      var e = a;
      a = new Qu(d, c);
      Ka(a, e);
    }
  }
  var e = !0, f;
  if (b) {
    for (var g = b.length - 1;!a.dc && 0 <= g;g--) {
      f = a.currentTarget = b[g], e = GA(f, d, !0, a) && e;
    }
  }
  a.dc || (f = a.currentTarget = c, e = GA(f, d, !0, a) && e, a.dc || (e = GA(f, d, !1, a) && e));
  if (b) {
    for (g = 0;!a.dc && g < b.length;g++) {
      f = a.currentTarget = b[g], e = GA(f, d, !1, a) && e;
    }
  }
  return e;
};
k.ve = function(a, b, c, d) {
  return this.ac.add(String(a), b, !1, c, d);
};
k.Xe = function(a, b, c, d) {
  this.ac.remove(String(a), b, c, d);
};
function GA(a, b, c, d) {
  b = a.ac.Oa[String(b)];
  if (!b) {
    return!0;
  }
  b = b.concat();
  for (var e = !0, f = 0;f < b.length;++f) {
    var g = b[f];
    if (g && !g.ec && g.sc == c) {
      var h = g.Nb, l = g.Ib || g.src;
      g.rc && Fw(a.ac, g);
      e = !1 !== h.call(l, d) && e;
    }
  }
  return e && !1 != d.Td;
}
k.Yc = function(a, b, c, d) {
  return this.ac.Yc(String(a), b, c, d);
};
var HA = he([fk, yl, tm, Cm, Hm, Rm, Ln, Sn, qo, uo, yo, Fo, Ho, Oo, $o, Ap, aq, er, fr], [.01, .01, 10, .04, 100, 200, 7, 300, 2, 2, .04, .16, .06, .2, !0, 5, .1, 1E3, 5]);
var IA = new U(null, 2, 5, V, [0, 15], null), JA = new p(null, 6, [ck, new U(null, 6, 5, V, [0, 1, 2, 3, 4, 5], null), Cp, new U(null, 5, 5, V, [5, 4, 3, 2, 1], null), or, new U(null, 5, 5, V, [6, 7, 8, 9, 10], null), eq, new U(null, 5, 5, V, [6, 7, 8, 11, 12], null), Om, new U(null, 8, 5, V, [0, 2, 4, 6, 8, 10, 12, 14], null), yp, new U(null, 8, 5, V, [10, 12, 11, 13, 12, 14, 13, 15], null)], null), KA = 2 * rf(Ue.h(Ye, Cg.h(N, ci(JA))));
function LA() {
  return bh.h(function(a) {
    var b = O.j(a, 0, null);
    a = O.j(a, 1, null);
    return new p(null, 4, [Zl, b, Tp, a, zl, null, Zj, Tr(KA)], null);
  }, JA);
}
function MA(a) {
  return bh.h(function(a) {
    return C.h(zl.g(a), N(Tp.g(a)) - 1) ? R.k(a, zl, null, K([Zj, Tr(KA)], 0)) : fb(zl.g(a)) && 0 < Zj.g(a) ? gh.j(a, new U(null, 1, 5, V, [Zj], null), $e) : fb(zl.g(a)) && 0 === Zj.g(a) ? R.j(a, zl, 0) : gh.j(a, new U(null, 1, 5, V, [zl], null), Jd);
  }, a);
}
var NA = he([fk, vk, yl, Bl, tm, Cm, Ln, qo, uo, yo, Fo, Ho, Oo, $o, Ap, aq, er, fr], [.01, 18, .01, 5, 12, .05, 9, 2, 3, .05, .16, .02, .2, !1, 8, .2, 1E5, 7]), OA = Kx(Nx(function(a) {
  return q(zl.g(a)) ? Q.h(Tp.g(a), zl.g(a)) : null;
}, Ix(400, 25, IA)));
ma("comportexviz.demos.mixed_gaps_1d.model", function() {
  var a;
  a = LA();
  a = new fy(a, a, MA, OA);
  return jy(ey, R.k(NA, Sn, 1E3, K([Hm, 800], 0)), new U(null, 1, 5, V, [jy(ey, R.k(NA, Sn, 1E3, K([Hm, 50], 0)), new U(null, 1, 5, V, [a], null))], null));
});
var PA = new U(null, 2, 5, V, [0, 7], null), QA = new U(null, 2, 5, V, [Pn, 0], null);
function RA(a) {
  var b = O.j(a, 0, null);
  a = O.j(a, 1, null);
  a: {
    switch(b instanceof W ? b.ea : null) {
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
  a = new U(null, 2, 5, V, [Pn, ek], null);
  a = O.h(a, Tr(N(a)));
  return new U(null, 2, 5, V, [a, b], null);
}
var TA = Lx.k(2, function SA(b, c) {
  var d = N(c), e = b / d, f = pj(c, tj.p()), g = Ix(b, e, new U(null, 2, 5, V, [0, d - 1], null));
  "undefined" === typeof Ax && (Ax = function(b, c, d, e, f, g, A, y) {
    this.Pd = b;
    this.Lc = c;
    this.nc = d;
    this.zb = e;
    this.values = f;
    this.Sb = g;
    this.Yd = A;
    this.Ce = y;
    this.G = 0;
    this.q = 393216;
  }, Ax.Fa = !0, Ax.Ea = "org.nfrac.comportex.encoders/t29977", Ax.Ka = function() {
    return function(b, c) {
      return zc(c, "org.nfrac.comportex.encoders/t29977");
    };
  }(d, e, f, g), Ax.prototype.Pb = function() {
    return function() {
      return this.Sb;
    };
  }(d, e, f, g), Ax.prototype.Ob = function() {
    return function(b, c, d) {
      return Gx(this.Pd, c, this.Lc.g ? this.Lc.g(d) : this.Lc.call(null, d));
    };
  }(d, e, f, g), Ax.prototype.I = function() {
    return function() {
      return this.Ce;
    };
  }(d, e, f, g), Ax.prototype.J = function() {
    return function(b, c) {
      return new Ax(this.Pd, this.Lc, this.nc, this.zb, this.values, this.Sb, this.Yd, c);
    };
  }(d, e, f, g));
  return new Ax(g, f, e, d, c, b, SA, null);
}(60, new U(null, 2, 5, V, [ek, Pn], null)), K([Ix(240, 30, PA)], 0));
ma("comportexviz.demos.signal_steps.model", function() {
  return jy(ey, HA, new U(null, 1, 5, V, [new fy(QA, QA, RA, TA)], null));
});
Bs || Ds && Hs("525");
Bs || Cs && Hs("1.9.3");
function UA() {
}
UA.se = function() {
  UA.te || (UA.te = new UA);
};
UA.se();
var VA = function() {
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
function WA(a) {
  return Math.floor.g ? Math.floor.g(a) : Math.floor.call(null, a);
}
function XA(a) {
  return Math.ceil.g ? Math.ceil.g(a) : Math.ceil.call(null, a);
}
function YA(a) {
  return Ue.h(Ye, a) / N(a);
}
var ZA = function() {
  function a(a, b, c) {
    a = tj.j(a, b, c);
    return(F(a) % c + c) % c === (b % c + c) % c ? bg.h(a, new U(null, 1, 5, V, [b], null)) : a;
  }
  function b(a, b) {
    return bg.h(tj.h(a, b), new U(null, 1, 5, V, [b], null));
  }
  function c(a) {
    return tj.g(a);
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
var $A = new U(null, 6, 5, V, [1, 5, 2, 2.5, 4, 3], null);
function aB(a) {
  return F(function() {
    return function c(d) {
      return new If(null, function() {
        for (var e = d;;) {
          if (e = E(e)) {
            if (T(e)) {
              var f = x(e), g = N(f), h = Uf(g);
              a: {
                for (var l = 0;;) {
                  if (l < g) {
                    var m = v.h(f, l), r = O.j(m, 0, null), m = O.j(m, 1, null);
                    C.h(m, a) && h.add(r);
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
            f = F(e);
            h = O.j(f, 0, null);
            f = O.j(f, 1, null);
            if (C.h(f, a)) {
              return Sd(h, c(G(e)));
            }
            e = G(e);
          } else {
            return null;
          }
        }
      }, null, null);
    }(sg(xh, $A));
  }());
}
function bB(a, b, c) {
  c = q(c) ? 1 : 0;
  return 1 >= N($A) ? 1 - b + c : 1 - aB(a) / (N($A) - 1) - b + c;
}
function cB(a, b, c, d) {
  return 1 - .5 * ((VA.h(b - d, 2) + VA.h(a - c, 2)) / VA.h(.1 * (b - a), 2));
}
function dB(a, b, c) {
  a = b - a;
  return c > a ? 1 - VA.h((c - a) / (.2 * a), 2) : 1;
}
function eB(a, b) {
  var c = a / b, d = b / a;
  return 2 - (c > d ? c : d);
}
function fB(a, b) {
  return a >= b ? 2 - a / b : 1;
}
function gB(a) {
  var b = O.j(a, 0, null), c = O.j(a, 1, null), d = O.j(a, 2, null);
  a = O.j(a, 3, null);
  var e = new U(null, 4, 5, V, [.2, .25, .5, .05], null);
  return b * (e.g ? e.g(0) : e.call(null, 0)) + c * (e.g ? e.g(1) : e.call(null, 1)) + d * (e.g ? e.g(2) : e.call(null, 2)) + a * (e.g ? e.g(3) : e.call(null, 3));
}
var hB = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = K(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    var e = O.j(a, 0, null), f = O.j(a, 1, null), g = ye(b) ? S.h(vg, b) : b, h = Q.j(g, Zn, !1), l = Q.j(g, hp, 500), m = Q.j(g, ak, .01);
    if ("number" === typeof e && "number" === typeof f && jg.h(e, f)) {
      for (var r = xg.g ? xg.g(-2) : xg.call(null, -2), s = xg.g ? xg.g(ei) : xg.call(null, ei), w = $A;!oe(w);) {
        for (var A = F(w), y = 1;;) {
          var B = bB(A, y, !0);
          if (gB(new U(null, 4, 5, V, [B, 1, 1, 1], null)) < (L.g ? L.g(r) : L.call(null, r))) {
            break;
          } else {
            for (var D = 2;;) {
              var I = fB(D / l, m);
              if (gB(new U(null, 4, 5, V, [B, 1, I, 1], null)) < (L.g ? L.g(r) : L.call(null, r))) {
                break;
              } else {
                for (var P = XA(Math.log((f - e) / ((D + 1) * y * D)) / Math.LN10);;) {
                  var M = A * y * VA.h(10, P), ea = dB(e, f, (D - 1) * M);
                  if (gB(new U(null, 4, 5, V, [B, ea, I, 1], null)) < (L.g ? L.g(r) : L.call(null, r))) {
                    break;
                  } else {
                    for (var ea = e / M, na = WA(f / M) - (D - 1);;) {
                      if (!(na > ea)) {
                        var J = na * M, Ia = J + (D - 1) * M, da = bB(A, y, 0 < Ia && 0 > J && 0 === (J % M + M) % M), fa = cB(e, f, J, Ia), fa = gB(new U(null, 4, 5, V, [da, fa, eB(D / l, m), 1], null));
                        if (!(fa < (L.g ? L.g(r) : L.call(null, r)))) {
                          da = r;
                          yg.h ? yg.h(da, fa) : yg.call(null, da, fa);
                          da = s;
                          J = new p(null, 3, [dk, J, Eo, Ia, lr, M], null);
                          yg.h ? yg.h(da, J) : yg.call(null, da, J);
                          na += 1 / y;
                          continue;
                        }
                      }
                      break;
                    }
                    P += 1;
                  }
                }
                D += 1;
              }
            }
            y += 1;
          }
        }
        w = H(w);
      }
      var ga = L.g ? L.g(s) : L.call(null, s), w = new U(null, 2, 5, V, [q(h) ? e : function() {
        var a = dk.g(ga);
        return a < e ? a : e;
      }(), q(h) ? f : function() {
        var a = Eo.g(ga);
        return a > f ? a : f;
      }()], null);
      return new p(null, 4, [Qo, w, dk, F(w), Eo, ce(w), pp, Xg.h(function(a, b) {
        return function(a) {
          var c = O.j(b, 0, null), d = O.j(b, 1, null);
          return c <= a && a <= d;
        };
      }(ga, w, r, s, a, e, f, b, g, h, l, m), ZA.j(dk.g(ga), Eo.g(ga), lr.g(ga)))], null);
    }
    return new p(null, 4, [Qo, 0, dk, e, Eo, f, pp, ee], null);
  }
  a.w = 1;
  a.n = function(a) {
    var d = F(a);
    a = G(a);
    return b(d, a);
  };
  a.k = b;
  return a;
}();
function iB(a, b, c, d) {
  FA.call(this);
  this.Yb = c || Ms();
  this.Ec = a;
  this.Qa = [];
  this.We = b ? b : jB;
  this.Ye = !!d;
  this.Ec.className = "goog-tabpane";
  a = [];
  for (b = Us(this.Ec);b;) {
    a.push(b), b = void 0 != b.nextElementSibling ? b.nextElementSibling : Vs(b.nextSibling);
  }
  this.Ua = this.Yb.Hb("ul", {className:"goog-tabpane-tabs", tabIndex:"0"});
  this.$a = this.Yb.Hb("div", "goog-tabpane-cont");
  this.Ec.appendChild(this.$a);
  b = this.Ec;
  switch(this.We) {
    case jB:
      b.insertBefore(this.Ua, this.$a);
      b.insertBefore(kB(this), this.$a);
      EA(b, "goog-tabpane-top");
      break;
    case 1:
      b.appendChild(this.Ua);
      b.appendChild(kB(this));
      EA(b, "goog-tabpane-bottom");
      break;
    case 2:
      b.insertBefore(this.Ua, this.$a);
      EA(b, "goog-tabpane-left");
      break;
    case 3:
      b.insertBefore(this.Ua, this.$a);
      EA(b, "goog-tabpane-right");
      break;
    default:
      throw Error("Invalid tab location");;
  }
  this.Ua.tabIndex = 0;
  Jw(this.Ua, this.Ye ? "mousedown" : "click", this.Je, !1, this);
  Jw(this.Ua, "keydown", this.Ke, !1, this);
  for (b = 0;c = a[b];b++) {
    c = new lB(c);
    if (c.Qb && c.Qb != this && c.Qb instanceof iB) {
      d = c.Qb;
      var e = c;
      "number" == typeof e && (e = d.Qa[e]);
      d.Qa.splice(e.Lb, 1);
      var f = e;
      f.Qb = null;
      f.Lb = ba(void 0) ? void 0 : null;
      (f = e.Dc) && f.parentNode && f.parentNode.removeChild(f);
      (e = e.$a) && e.parentNode && e.parentNode.removeChild(e);
      f = void 0;
      for (e = 0;f = d.Qa[e];e++) {
        var g = e;
        f.Qb = d;
        f.Lb = ba(g) ? g : null;
      }
    }
    d = this.Qa.length;
    ba(void 0) && void 0 != d ? (d = void 0, this.Qa.splice(d, 0, c), this.Ua.insertBefore(c.Dc, this.Ua.childNodes[d])) : (this.Qa.push(c), this.Ua.appendChild(c.Dc));
    e = c;
    f = d;
    e.Qb = this;
    e.Lb = ba(f) ? f : null;
    this.bb || (this.bb = c, this.dispatchEvent(new mB("change", this, this.bb)));
    this.$a.appendChild(c.$a);
    nB(c, c == this.bb);
    c = void 0;
    for (d += 1;c = this.Qa[d];d++) {
      c.Lb = d;
    }
  }
}
pa(iB, FA);
var jB = 0;
function kB(a) {
  var b = Ms(void 0), c = null, d = b.Xb;
  Bs && d.createStyleSheet ? (c = d.createStyleSheet(), Dt(c)) : (d = Ps(b.Xb, "head")[0], d || (c = Ps(b.Xb, "body")[0], d = b.Hb("head"), c.parentNode.insertBefore(d, c)), c = b.Hb("style"), Dt(c), b.appendChild(d, c));
  return a.Yb.Hb("div", "goog-tabpane-clear");
}
function oB(a, b) {
  if (0 <= b && b < a.Qa.length) {
    var c = a.Qa[b];
    !c.isEnabled() || a.bb && c == a.bb || (nB(a.bb, !1), nB(c, !0), a.bb = c, a.dispatchEvent(new mB("change", a, a.bb)));
  }
}
iB.prototype.Je = function(a) {
  for (var b = a.target;b != this.Ua;) {
    if ("LI" == b.tagName) {
      var c;
      for (c = 0;b = b.previousSibling;c++) {
      }
      oB(this, c);
      break;
    }
    b = b.parentNode;
  }
  a.preventDefault();
};
iB.prototype.Ke = function(a) {
  if (!(a.altKey || a.metaKey || a.ctrlKey)) {
    switch(a.keyCode) {
      case 37:
        a = this.bb.Lb - 1;
        oB(this, 0 > a ? this.Qa.length - 1 : a);
        break;
      case 39:
        a = this.bb.Lb + 1;
        oB(this, a >= this.Qa.length ? 0 : a);
        break;
      case 36:
        oB(this, 0);
        break;
      case 35:
        oB(this, this.Qa.length - 1);
    }
  }
};
function lB(a, b, c) {
  var d, e;
  if (ha(a) && !ba(b)) {
    d = a;
  } else {
    if (b) {
      d = b, e = a;
    } else {
      if (a) {
        if (b = Us(a)) {
          d = Ys(b), b.parentNode.removeChild(b);
        }
        e = a;
      }
    }
  }
  this.Yb = c || Ms();
  this.$a = e || this.Yb.Hb("div");
  this.Dc = this.Yb.Hb("li", null, d);
  this.Lb = this.Qb = null;
  this.pe = !0;
}
lB.prototype.isEnabled = function() {
  return this.pe;
};
function nB(a, b) {
  a.isEnabled() && (a.$a.style.display = b ? "" : "none", a.Dc.className = b ? "goog-tabpane-tab-selected" : "goog-tabpane-tab");
}
function mB(a, b, c) {
  Qu.call(this, a, b);
  this.page = c;
}
pa(mB, Qu);
function qB(a, b, c, d) {
  this.domain = a;
  this.Ha = b;
  this.D = c;
  this.v = d;
  this.q = 2229667595;
  this.G = 8192;
  2 < arguments.length ? (this.D = c, this.v = d) : this.v = this.D = null;
}
k = qB.prototype;
k.K = function(a, b) {
  return yb.j(this, b, null);
};
k.L = function(a, b, c) {
  switch(b instanceof W ? b.ea : null) {
    case "range":
      return this.Ha;
    case "domain":
      return this.domain;
    default:
      return Q.j(this.v, b, c);
  }
};
k.N = function(a, b, c) {
  return Aj(b, function() {
    return function(a) {
      return Aj(b, Gj, "", " ", "", c, a);
    };
  }(this), "#c2.scale._linear{", ", ", "}", c, bg.h(new U(null, 2, 5, V, [new U(null, 2, 5, V, [Pp, this.domain], null), new U(null, 2, 5, V, [vr, this.Ha], null)], null), this.v));
};
k.I = function() {
  return this.D;
};
k.T = function() {
  return 2 + N(this.v);
};
k.P = function() {
  var a = this.A;
  return null != a ? a : this.A = a = yf(this);
};
k.M = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && Yh(this, b) : b) ? !0 : !1;
};
k.Sa = function(a, b) {
  return Ne(new fj(null, new p(null, 2, [Pp, null, vr, null], null), null), b) ? ie.h(Ud(ah.h(ei, this), this.D), b) : new qB(this.domain, this.Ha, this.D, kg(ie.h(this.v, b)), null);
};
k.va = function(a, b, c) {
  return q(X.h ? X.h(Pp, b) : X.call(null, Pp, b)) ? new qB(c, this.Ha, this.D, this.v, null) : q(X.h ? X.h(vr, b) : X.call(null, vr, b)) ? new qB(this.domain, c, this.D, this.v, null) : new qB(this.domain, this.Ha, this.D, R.j(this.v, b, c), null);
};
k.Q = function() {
  return E(bg.h(new U(null, 2, 5, V, [new U(null, 2, 5, V, [Pp, this.domain], null), new U(null, 2, 5, V, [vr, this.Ha], null)], null), this.v));
};
k.J = function(a, b) {
  return new qB(this.domain, this.Ha, b, this.v, this.A);
};
k.S = function(a, b) {
  return te(b) ? Bb(this, v.h(b, 0), v.h(b, 1)) : Ue.j(qb, this, b);
};
k.call = function(a, b) {
  a = this;
  var c = de(a.domain) - F(a.domain), d = de(a.Ha) - F(a.Ha);
  return F(a.Ha) + d * ((b - F(a.domain)) / c);
};
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(jb(b)));
};
k.g = function(a) {
  var b = de(this.domain) - F(this.domain), c = de(this.Ha) - F(this.Ha);
  return F(this.Ha) + c * ((a - F(this.domain)) / b);
};
var zD = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = K(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = bj.k(K([new p(null, 2, [Pp, new U(null, 2, 5, V, [0, 1], null), vr, new U(null, 2, 5, V, [0, 1], null)], null), S.h(vg, a)], 0));
    return new qB(Pp.g(a), vr.g(a), null, ie.k(a, Pp, K([vr], 0)));
  }
  a.w = 0;
  a.n = function(a) {
    a = E(a);
    return b(a);
  };
  a.k = b;
  return a;
}();
function AD(a) {
  return re(a) && C.h(2, N(a)) ? a : se(a) ? new U(null, 2, 5, V, [Ep.g(a), Pj.g(a)], null) : null;
}
function BD(a) {
  var b = AD(a);
  a = O.j(b, 0, null);
  b = O.j(b, 1, null);
  return "translate(" + u.g(a) + "," + u.g(b) + ")";
}
var CD = function() {
  function a(a, b) {
    var c = AD(b), g = O.j(c, 0, null), c = O.j(c, 1, null);
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
}(), DD = function() {
  function a(a, d, e) {
    var f = null;
    2 < arguments.length && (f = K(Array.prototype.slice.call(arguments, 2), 0));
    return b.call(this, a, d, f);
  }
  function b(a, b, e) {
    var f = ye(e) ? S.h(vg, e) : e, g = Q.j(f, ro, 28), h = Q.h(f, Jo), l = Q.j(f, jk, 9), m = Q.j(f, Sm, 6), r = Q.j(f, fm, u), s = Q.j(f, Em, Br), w = function() {
      switch(s instanceof W ? s.ea : null) {
        case "bottom":
          return new U(null, 6, 5, V, [Pj, Ep, rm, bq, Gp, nr], null);
        case "top":
          return new U(null, 6, 5, V, [Pj, Ep, rm, bq, Gp, nr], null);
        case "right":
          return new U(null, 6, 5, V, [Ep, Pj, Gp, nr, rm, bq], null);
        case "left":
          return new U(null, 6, 5, V, [Ep, Pj, Gp, nr, rm, bq], null);
        default:
          throw Error("No matching clause: " + u.g(s));;
      }
    }(), A = O.j(w, 0, null), y = O.j(w, 1, null), B = O.j(w, 2, null), D = O.j(w, 3, null), I = O.j(w, 4, null), P = O.j(w, 5, null), M = function() {
      switch(s instanceof W ? s.ea : null) {
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
    return new U(null, 5, 5, V, [jo, new p(null, 1, [Lo, "axis " + u.g(Gf(s))], null), new U(null, 2, 5, V, [Rl, S.h(vg, Tg.h(new U(null, 2, 5, V, [I, P], null), vr.g(a)))], null), new U(null, 2, 5, V, [ul, Nt(Cg.j(xh, b, Rg.g(a)), function(a, b, c, d, e, f, g, h, l, m, r, s, w, y, A) {
      return function(a) {
        var f = O.j(a, 0, null);
        a = O.j(a, 1, null);
        return new U(null, 4, 5, V, [kk, new p(null, 1, [rk, BD(new hi([b, 0, c, a.g ? a.g(f) : a.call(null, f)]))], null), new U(null, 3, 5, V, [Cr, new hi([b, h * w]), A.g ? A.g(f) : A.call(null, f)], null), new U(null, 2, 5, V, [to, new hi([d, 0, e, h * y])], null)], null);
      };
    }(w, A, y, B, D, I, P, M, e, f, g, h, l, m, r, s))], null), q(h) ? new U(null, 3, 5, V, [Nl, new p(null, 1, [rk, "" + u.g(BD(new hi([A, M * g, y, YA(vr.g(a))]))) + " " + u.g(function() {
      switch(s instanceof W ? s.ea : null) {
        case "right":
          return CD.g(90);
        case "left":
          return CD.g(-90);
        default:
          return "";
      }
    }())], null), h], null) : null], null);
  }
  a.w = 2;
  a.n = function(a) {
    var d = F(a);
    a = H(a);
    var e = F(a);
    a = G(a);
    return b(d, e, a);
  };
  a.k = b;
  return a;
}();
function ED(a) {
  return S.h(Ye, a) / N(a);
}
function FD(a, b) {
  var c = $i(F(b));
  return ah.h(ei, function() {
    return function(c) {
      return function f(g) {
        return new If(null, function() {
          return function() {
            for (;;) {
              var c = E(g);
              if (c) {
                if (T(c)) {
                  var d = x(c), m = N(d), r = Uf(m);
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
                var s = F(c);
                return Sd(new U(null, 2, 5, V, [s, function() {
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
function GD(a, b, c) {
  a = gh.m(a, new U(null, 1, 5, V, [$n], null), fe, FD(ED, b));
  b = N($n.g(a));
  b > c && ng(b) ? (c = ye(a) ? S.h(vg, a) : a, a = Q.h(c, $n), b = 2 * Q.h(c, rr), c = R.k(c, rr, b, K([$n, bh.h(rg.h(FD, ED), ch.h(2, a))], 0))) : c = a;
  return c;
}
function HD(a) {
  var b = function() {
    var a = new p(null, 3, [rr, 1, $n, ee, Vp, 200], null);
    return xg.g ? xg.g(a) : xg.call(null, a);
  }(), c = mz.g(1);
  Ny(function(b, c) {
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
                      bz(c);
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
              var e = b[7], d = Ag.m(c, GD, e, 200), e = null == e ? null : ob(e);
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
              var e = b[8], d = fe.h(e, b[2]), e = N(d), f = L.g ? L.g(c) : L.call(null, c), f = rr.g(f);
              b[7] = d;
              b[1] = q(e < f) ? 5 : 6;
              return Z;
            }
            return 3 === d ? (d = b[2], az(b, d)) : 2 === d ? $y(b, 4, a) : 1 === d ? (e = ee, b[8] = e, b[2] = null, b[1] = 2, Z) : null;
          };
        }(b, c), b, c);
      }(), g = function() {
        var a = f.p ? f.p() : f.call(null);
        a[6] = b;
        return a;
      }();
      return Zy(g);
    };
  }(c, b));
  return b;
}
function ID(a, b) {
  var c = new U(null, 3, 5, V, [Go, mo, Kp], null), d = new p(null, 4, [Br, 50, op, 30, Al, 50, Kl, 20], null), e = function() {
    var a = new Mt(null, !0, function(a) {
      return function() {
        var d = ye(b) ? S.h(vg, b) : b, e = Q.h(d, rr), f = Q.h(d, Vp), g = Q.h(d, $n), w = e * f, A = Sn.g(me(g)), y = .1 * A, B = zD.k(K([Pp, new U(null, 2, 5, V, [0, w], null), vr, new U(null, 2, 5, V, [0, 399], null)], 0)), D = pp.g(hB.k(Pp.g(B), K([hp, 400], 0))), I = zD.k(K([Pp, new U(null, 2, 5, V, [0, y], null), vr, new U(null, 2, 5, V, [179, 0], null)], 0)), P = zD.k(K([Pp, new U(null, 2, 5, V, [0, y], null), vr, new U(null, 2, 5, V, [0, 179], null)], 0)), M = pp.g(hB.k(Pp.g(I), K([hp, 450], 
        0)));
        return 0 < A ? new U(null, 3, 5, V, [ao, new U(null, 3, 5, V, [Yn, new p(null, 1, [Km, "text/css"], null), S.O(u, "g.timestep rect { stroke-width: 0px; }", ".plot-space line { stroke: black; }", ".plot-space text { font-size: 80%; }", function() {
          return function(a, b, c, d, e, f, g, h, l, m, r, s, w, y, A) {
            return function Da(B) {
              return new If(null, function() {
                return function() {
                  for (;;) {
                    var a = E(B);
                    if (a) {
                      if (T(a)) {
                        var b = x(a), c = N(b), d = Uf(c);
                        return function() {
                          for (var a = 0;;) {
                            if (a < c) {
                              var e = v.h(b, a);
                              Yf(d, "." + u.g(Gf(e)) + " { fill: " + u.g(function() {
                                var a = e;
                                return Mz.g ? Mz.g(a) : Mz.call(null, a);
                              }()) + "}");
                              a += 1;
                            } else {
                              return!0;
                            }
                          }
                        }() ? Xf(d.R(), Da(z(a))) : Xf(d.R(), null);
                      }
                      var e = F(a);
                      return Sd("." + u.g(Gf(e)) + " { fill: " + u.g(function() {
                        var a = e;
                        return Mz.g ? Mz.g(a) : Mz.call(null, a);
                      }()) + "}", Da(G(a)));
                    }
                    return null;
                  }
                };
              }(a, b, c, d, e, f, g, h, l, m, r, s, w, y, A), null, null);
            };
          }(b, d, e, f, g, w, A, y, B, B, D, I, P, M, a)(c);
        }())], null), new U(null, 3, 5, V, [dp, new p(null, 1, [Yn, new p(null, 4, [sp, "block", Fr, "auto", sm, 400 + Br.g(a) + op.g(a), wr, 180 + Al.g(a) + Kl.g(a)], null)], null), new U(null, 5, 5, V, [xo, new p(null, 1, [rk, BD(new U(null, 2, 5, V, [Br.g(a), Kl.g(a)], null))], null), DD.k(I, M, K([Em, Br, jk, 28, Jo, "n. columns", ro, 35], 0)), new U(null, 3, 5, V, [jo, new p(null, 1, [rk, BD(new U(null, 2, 5, V, [0, 180], null))], null), DD.k(B, D, K([Em, Al, jk, 18, Jo, "timestep", ro, 35], 
        0))], null), new U(null, 2, 5, V, [jo, Nt.k(sg(xh, g), function(a, b, d, e, f, g, h, l, m, r, s, w, y, A, B) {
          return function(D) {
            var I = O.j(D, 0, null), M = O.j(D, 1, null), P = Cg.h(M, c), cb = vj.h(Ye, P);
            return ah.h(new U(null, 1, 5, V, [Qm], null), function() {
              return function(a, b, c, d, e, f, g, h, l, m, r, s, w, J, y, A, B, D, I, da) {
                return function ze(M) {
                  return new If(null, function(a, b, c, d, e, f, g, h, l, m, r, s, w, J, y, A, B, D) {
                    return function() {
                      for (;;) {
                        var a = E(M);
                        if (a) {
                          if (T(a)) {
                            var b = x(a), c = N(b), e = Uf(c);
                            return function() {
                              for (var a = 0;;) {
                                if (a < c) {
                                  var f = v.h(b, a), g = O.j(f, 0, null), l = O.j(f, 1, null), m = O.j(f, 2, null);
                                  Yf(e, new U(null, 2, 5, V, [kr, new p(null, 5, [Lo, g, Ep, function() {
                                    var a = d * h;
                                    return J.g ? J.g(a) : J.call(null, a);
                                  }(), Pj, function() {
                                    var a = m;
                                    return B.g ? B.g(a) : B.call(null, a);
                                  }(), sm, y.g ? y.g(h) : y.call(null, h), wr, function() {
                                    var a = l;
                                    return D.g ? D.g(a) : D.call(null, a);
                                  }()], null)], null));
                                  a += 1;
                                } else {
                                  return!0;
                                }
                              }
                            }() ? Xf(e.R(), ze(z(a))) : Xf(e.R(), null);
                          }
                          var f = F(a), g = O.j(f, 0, null), l = O.j(f, 1, null), m = O.j(f, 2, null);
                          return Sd(new U(null, 2, 5, V, [kr, new p(null, 5, [Lo, g, Ep, function() {
                            var a = d * h;
                            return J.g ? J.g(a) : J.call(null, a);
                          }(), Pj, function() {
                            var a = m;
                            return B.g ? B.g(a) : B.call(null, a);
                          }(), sm, y.g ? y.g(h) : y.call(null, h), wr, function() {
                            var a = l;
                            return D.g ? D.g(a) : D.call(null, a);
                          }()], null)], null), ze(G(a)));
                        }
                        return null;
                      }
                    };
                  }(a, b, c, d, e, f, g, h, l, m, r, s, w, J, y, A, B, D, I, da), null, null);
                };
              }(P, cb, D, I, M, a, b, d, e, f, g, h, l, m, r, s, w, y, A, B)(Cg.m(xh, c, P, cb));
            }());
          };
        }(b, d, e, f, g, w, A, y, B, B, D, I, P, M, a), K([ho, qg.h(om, ce)], 0))], null)], null)], null)], null) : null;
      };
    }(d), Kj.g("computed-observable"), ei, ei);
    L.g ? L.g(a) : L.call(null, a);
    return a;
  }(), f = Et(a);
  Bt(f, L.g ? L.g(e) : L.call(null, e));
  Ij(e, Um, function(a, b) {
    return function() {
      return Bt(b, L.g ? L.g(a) : L.call(null, a));
    };
  }(e, f, d));
  return e;
}
;function JD(a) {
  return S.j(u, "comportex-", Ug("_", Cg.h(function(a) {
    a = a.replace(new RegExp("?".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), "g"), "_QMARK_");
    return a;
  }, Cg.h(function(a) {
    return "number" === typeof a ? "" + u.g(a) : Gf(a);
  }, a))));
}
function KD(a, b, c) {
  return new U(null, 3, 5, V, [Jo, new U(null, 2, 5, V, [Qp, new p(null, 3, [Ko, JD(b), Km, "checkbox", Wo, q(dh.h(a, b)) ? "checked" : null], null)], null), c], null);
}
function LD(a) {
  var b = new U(null, 2, 5, V, [Il, Bo], null), c = new U(null, 3, 5, V, [Wn, dn, qr], null);
  return new U(null, 3, 5, V, [Jo, "Synapses from ", new U(null, 3, 5, V, [xr, new p(null, 1, [Ko, JD(b)], null), function() {
    return function e(c) {
      return new If(null, function() {
        for (;;) {
          var g = E(c);
          if (g) {
            if (T(g)) {
              var h = x(g), l = N(h), m = Uf(l);
              a: {
                for (var r = 0;;) {
                  if (r < l) {
                    var s = v.h(h, r), s = new U(null, 3, 5, V, [bo, new p(null, 2, [hm, Gf(s), sk, C.h(dh.h(a, b), s) ? "selected" : null], null), Gf(s)], null);
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
            m = F(g);
            return Sd(new U(null, 3, 5, V, [bo, new p(null, 2, [hm, Gf(m), sk, C.h(dh.h(a, b), m) ? "selected" : null], null), Gf(m)], null), e(G(g)));
          }
          return null;
        }
      }, null, null);
    }(c);
  }()], null)], null);
}
function MD(a, b) {
  var c = O.j(b, 0, null), d = O.j(b, 1, null);
  return new U(null, 3, 5, V, [Jo, new U(null, 2, 5, V, [gp, Gf(c)], null), new U(null, 2, 5, V, [Qp, new p(null, 2, [Ko, JD(new U(null, 2, 5, V, [a, c], null)), hm, "" + u.g(d)], null)], null)], null);
}
function ND() {
  var a = OD, b = PD, c = QD, d = DA, e = RD, f = function() {
    var d = new Mt(null, !0, function() {
      var d = V, e = V, f = new U(null, 2, 5, V, [Bm, "Simulation"], null), g = new U(null, 3, 5, V, [Jo, "Timestep:", new U(null, 2, 5, V, [qk, om.g(Xn.g(L.g ? L.g(a) : L.call(null, a)))], null)], null), h = V, A = new p(null, 1, [Lo, "detail"], null), y;
      if (q(L.g ? L.g(b) : L.call(null, b))) {
        y = L.g ? L.g(a) : L.call(null, a);
        if (q(jm.g(co.g(y)))) {
          var B = co.g(y), D = (new Date).getTime() - jm.g(B);
          y = (om.g(Xn.g(y)) - om.g(B)) / D * 1E3;
        } else {
          y = null;
        }
        y = tz("%.1f steps/sec.", y);
      } else {
        y = null;
      }
      return new U(null, 3, 5, d, [mp, new U(null, 11, 5, e, [Vj, f, g, new U(null, 3, 5, h, [hk, A, y], null), new U(null, 1, 5, V, [Bp], null), new U(null, 3, 5, V, [Dl, new p(null, 1, [Yn, new p(null, 1, [sp, q(L.g ? L.g(b) : L.call(null, b)) ? "none" : null], null)], null), "Start"], null), new U(null, 3, 5, V, [ip, new p(null, 1, [Yn, new p(null, 1, [sp, q(L.g ? L.g(b) : L.call(null, b)) ? null : "none"], null)], null), "Stop"], null), new U(null, 2, 5, V, [vm, "Step"], null), new U(null, 5, 
      5, V, [Jo, "Step every:", new U(null, 2, 5, V, [Xm, "" + u.g($m.g(L.g ? L.g(c) : L.call(null, c))) + " ms"], null), new U(null, 2, 5, V, [Er, new U(null, 3, 5, V, [um, new p(null, 1, [pr, "#"], null), "slower"], null)], null), new U(null, 2, 5, V, [Er, new U(null, 3, 5, V, [pk, new p(null, 1, [pr, "#"], null), "faster"], null)], null)], null), new U(null, 2, 5, V, [Jl, "Reset"], null), new U(null, 2, 5, V, [kp, new p(null, 1, [Lo, "detail"], null)], null)], null), new U(null, 6, 5, V, [km, 
      new U(null, 2, 5, V, [Bm, "Animation"], null), new U(null, 3, 5, V, [an, new p(null, 1, [Yn, new p(null, 1, [sp, q(dm.g(L.g ? L.g(c) : L.call(null, c))) ? "none" : null], null)], null), "Start"], null), new U(null, 3, 5, V, [ko, new p(null, 1, [Yn, new p(null, 1, [sp, q(dm.g(L.g ? L.g(c) : L.call(null, c))) ? null : "none"], null)], null), "Stop"], null), new U(null, 2, 5, V, [Sl, "Draw now"], null), new U(null, 5, 5, V, [Jo, "Draw every:", new U(null, 2, 5, V, [Mn, "" + u.g(po.g(L.g ? L.g(c) : 
      L.call(null, c))) + " steps"], null), new U(null, 2, 5, V, [Er, new U(null, 3, 5, V, [Yl, new p(null, 1, [pr, "#"], null), "slower"], null)], null), new U(null, 2, 5, V, [Er, new U(null, 3, 5, V, [Do, new p(null, 1, [pr, "#"], null), "faster"], null)], null)], null)], null)], null);
    }, Kj.g("computed-observable"), ei, ei);
    L.g ? L.g(d) : L.call(null, d);
    return d;
  }(), g = Et("#comportex-controls");
  Bt(g, L.g ? L.g(f) : L.call(null, f));
  Ij(f, Um, function(a, b) {
    return function() {
      return Bt(b, L.g ? L.g(a) : L.call(null, a));
    };
  }(f, g));
  Uw("#sim-start", no, function() {
    return yg.h ? yg.h(b, !0) : yg.call(null, b, !0);
  });
  Uw("#sim-stop", no, function() {
    return yg.h ? yg.h(b, !1) : yg.call(null, b, !1);
  });
  Uw("#sim-step", no, function() {
    return d.p ? d.p() : d.call(null);
  });
  Uw("#sim-faster", no, function() {
    return Ag.m(c, gh, new U(null, 1, 5, V, [$m], null), function(a) {
      a -= 100;
      return 0 < a ? a : 0;
    });
  });
  Uw("#sim-slower", no, function() {
    return Ag.m(c, gh, new U(null, 1, 5, V, [$m], null), function(a) {
      return a + 100;
    });
  });
  Uw("#sim-reset", no, function() {
    var b = Et("#sim-reset-status");
    Ag.h(a, Yx);
    return Gt.h(b, "reset complete.");
  });
  Uw("#anim-start", no, function() {
    return Ag.m(c, R, dm, !0);
  });
  Uw("#anim-stop", no, function() {
    return Ag.m(c, R, dm, !1);
  });
  Uw("#anim-step", no, function() {
    return e.p ? e.p() : e.call(null);
  });
  Uw("#anim-faster", no, function() {
    return Ag.m(c, gh, new U(null, 1, 5, V, [po], null), function(a) {
      a -= 1;
      return 1 < a ? a : 1;
    });
  });
  Uw("#anim-slower", no, function() {
    return Ag.m(c, gh, new U(null, 1, 5, V, [po], null), function(a) {
      return a + 1;
    });
  });
}
function SD() {
  var a = function() {
    var a = new Mt(null, !0, function() {
      var a = V, b;
      b = L.g ? L.g(Gz) : L.call(null, Gz);
      b = new U(null, 6, 5, V, [Fm, new U(null, 2, 5, V, [Bm, "Visualisation"], null), new U(null, 5, 5, V, [Uj, new U(null, 2, 5, V, [Bm, "Input"], null), KD(b, new U(null, 2, 5, V, [Qp, Go], null), "Active bits"), new U(null, 1, 5, V, [Bp], null), KD(b, new U(null, 2, 5, V, [Qp, Kp], null), "Predicted bits")], null), new U(null, 9, 5, V, [Uj, new U(null, 2, 5, V, [Bm, "Columns"], null), KD(b, new U(null, 2, 5, V, [Y, Io], null), "Overlap scores"), new U(null, 1, 5, V, [Bp], null), KD(b, new U(null, 
      2, 5, V, [Y, Go], null), "Active columns"), new U(null, 1, 5, V, [Bp], null), KD(b, new U(null, 2, 5, V, [Y, Gm], null), "Predictive columns"), new U(null, 1, 5, V, [Bp], null), KD(b, new U(null, 2, 5, V, [Y, vl], null), "TP columns")], null), new U(null, 7, 5, V, [Uj, new U(null, 2, 5, V, [Bm, "Feed-forward synapses"], null), KD(b, new U(null, 2, 5, V, [Yj, Go], null), "Active ff-synapses"), new U(null, 1, 5, V, [Bp], null), KD(b, new U(null, 2, 5, V, [Yj, Oj], null), "Inactive ff-synapses"), 
      new U(null, 1, 5, V, [Bp], null), KD(b, new U(null, 2, 5, V, [Yj, ir], null), "Permanences")], null), new U(null, 9, 5, V, [Uj, new U(null, 2, 5, V, [Bm, "Lateral dendrite segments"], null), LD(b), new U(null, 1, 5, V, [Bp], null), KD(b, new U(null, 2, 5, V, [Il, Go], null), "Active synapses"), new U(null, 1, 5, V, [Bp], null), KD(b, new U(null, 2, 5, V, [Il, Oj], null), "Inactive synapses"), new U(null, 1, 5, V, [Bp], null), KD(b, new U(null, 2, 5, V, [Il, ir], null), "Permanences")], null)], 
      null);
      return new U(null, 2, 5, a, [zp, b], null);
    }, Kj.g("computed-observable"), ei, ei);
    L.g ? L.g(a) : L.call(null, a);
    return a;
  }(), b = Et("#comportex-options");
  Bt(b, L.g ? L.g(a) : L.call(null, a));
  Ij(a, Um, function(a, b) {
    return function() {
      return Bt(b, L.g ? L.g(a) : L.call(null, a));
    };
  }(a, b));
  for (var a = E(L.g ? L.g(Gz) : L.call(null, Gz)), b = null, c = 0, d = 0;;) {
    if (d < c) {
      for (var e = b.F(null, d), f = O.j(e, 0, null), g = O.j(e, 1, null), h = E(g), l = null, m = 0, r = 0;;) {
        if (r < m) {
          var s = l.F(null, r), w = O.j(s, 0, null), A = O.j(s, 1, null), y = JD(new U(null, 2, 5, V, [f, w], null)), B = Et("#" + u.g(y));
          q(B) && Uw(B, Xp, function(a, b, c, d, e, f, g, h, l, m, r, s, w, y, A) {
            return function() {
              var a;
              a = Ht.g(m);
              a = q(a) ? Hf.g(a) : null;
              return Ag.m(Gz, fh, new U(null, 2, 5, V, [A, s], null), a);
            };
          }(h, l, m, r, a, b, c, d, y, B, s, w, A, e, f, g));
          r += 1;
        } else {
          if (w = E(h)) {
            s = w;
            if (T(s)) {
              h = x(s), r = z(s), l = h, m = N(h), h = r;
            } else {
              var A = F(s), y = O.j(A, 0, null), B = O.j(A, 1, null), D = JD(new U(null, 2, 5, V, [f, y], null)), I = Et("#" + u.g(D));
              q(I) && Uw(I, Xp, function(a, b, c, d, e, f, g, h, l, m, r, s, w, y, A, B, D) {
                return function() {
                  var a;
                  a = Ht.g(m);
                  a = q(a) ? Hf.g(a) : null;
                  return Ag.m(Gz, fh, new U(null, 2, 5, V, [D, s], null), a);
                };
              }(h, l, m, r, a, b, c, d, D, I, A, y, B, s, w, e, f, g));
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
      if (h = E(a)) {
        e = h;
        if (T(e)) {
          a = x(e), d = z(e), b = a, c = N(a), a = d;
        } else {
          l = F(e);
          f = O.j(l, 0, null);
          g = O.j(l, 1, null);
          m = E(g);
          r = null;
          for (w = s = 0;;) {
            if (w < s) {
              A = r.F(null, w), y = O.j(A, 0, null), B = O.j(A, 1, null), D = JD(new U(null, 2, 5, V, [f, y], null)), I = Et("#" + u.g(D)), q(I) && Uw(I, Xp, function(a, b, c, d, e, f, g, h, l, m, r, s, w, y, A) {
                return function() {
                  var a;
                  a = Ht.g(m);
                  a = q(a) ? Hf.g(a) : null;
                  return Ag.m(Gz, fh, new U(null, 2, 5, V, [A, s], null), a);
                };
              }(m, r, s, w, a, b, c, d, D, I, A, y, B, l, f, g, e, h)), w += 1;
            } else {
              if (y = E(m)) {
                A = y;
                if (T(A)) {
                  m = x(A), w = z(A), r = m, s = N(m), m = w;
                } else {
                  var B = F(A), D = O.j(B, 0, null), I = O.j(B, 1, null), P = JD(new U(null, 2, 5, V, [f, D], null)), M = Et("#" + u.g(P));
                  q(M) && Uw(M, Xp, function(a, b, c, d, e, f, g, h, l, m, r, s, w, y, A, B, D) {
                    return function() {
                      var a;
                      a = Ht.g(m);
                      a = q(a) ? Hf.g(a) : null;
                      return Ag.m(Gz, fh, new U(null, 2, 5, V, [D, s], null), a);
                    };
                  }(m, r, s, w, a, b, c, d, P, M, B, D, I, A, y, l, f, g, e, h));
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
function TD() {
  var a = OD, b = wA, c = function() {
    var c = new Mt(null, !0, function() {
      var c = Xn.g(L.g ? L.g(b) : L.call(null, b));
      return new U(null, 2, 5, V, [np, function() {
        var b = ly(L.g ? L.g(a) : L.call(null, a));
        return function(a, b) {
          return function D(c) {
            return new If(null, function(a, b) {
              return function() {
                for (;;) {
                  var d = E(c);
                  if (d) {
                    if (T(d)) {
                      var e = x(d), f = N(e), g = Uf(f);
                      a: {
                        for (var h = 0;;) {
                          if (h < f) {
                            var l = v.h(e, h), m = O.h(a, l), m = io.g(m), l = new U(null, 3, 5, V, [ao, new p(null, 1, [Yn, new p(null, 1, [sp, jg.h(l, b) ? "none" : null], null)], null), new U(null, 4, 5, V, [Ip, new p(null, 1, [Ko, "region-spec-form-" + u.g(l)], null), new U(null, 4, 5, V, [mr, "Region " + u.g(l), new U(null, 1, 5, V, [Bp], null), new U(null, 2, 5, V, [Wm, "(click on a region to select it)"], null)], null), new U(null, 4, 5, V, [bk, new U(null, 2, 5, V, [Bm, "Parameters"], null), 
                            Cg.h(rg.h(MD, l), Se.g(m)), new U(null, 3, 5, V, [ym, new U(null, 2, 5, V, [Qp, new p(null, 2, [Km, "submit", hm, "Set!"], null)], null), " (will be set immediately, but then use Reset above for any parameters that apply only in initialisation)"], null)], null)], null)], null);
                            g.add(l);
                            h += 1;
                          } else {
                            e = !0;
                            break a;
                          }
                        }
                        e = void 0;
                      }
                      return e ? Xf(g.R(), D(z(d))) : Xf(g.R(), null);
                    }
                    g = F(d);
                    e = O.h(a, g);
                    e = io.g(e);
                    return Sd(new U(null, 3, 5, V, [ao, new p(null, 1, [Yn, new p(null, 1, [sp, jg.h(g, b) ? "none" : null], null)], null), new U(null, 4, 5, V, [Ip, new p(null, 1, [Ko, "region-spec-form-" + u.g(g)], null), new U(null, 4, 5, V, [mr, "Region " + u.g(g), new U(null, 1, 5, V, [Bp], null), new U(null, 2, 5, V, [Wm, "(click on a region to select it)"], null)], null), new U(null, 4, 5, V, [bk, new U(null, 2, 5, V, [Bm, "Parameters"], null), Cg.h(rg.h(MD, g), Se.g(e)), new U(null, 3, 5, 
                    V, [ym, new U(null, 2, 5, V, [Qp, new p(null, 2, [Km, "submit", hm, "Set!"], null)], null), " (will be set immediately, but then use Reset above for any parameters that apply only in initialisation)"], null)], null)], null)], null), D(G(d)));
                  }
                  return null;
                }
              };
            }(a, b), null, null);
          };
        }(b, c)(tj.g(N(b)));
      }()], null);
    }, Kj.g("computed-observable"), ei, ei);
    L.g ? L.g(c) : L.call(null, c);
    return c;
  }(), d = Et("#comportex-parameters");
  Bt(d, L.g ? L.g(c) : L.call(null, c));
  Ij(c, Um, function(a, b) {
    return function() {
      return Bt(b, L.g ? L.g(a) : L.call(null, a));
    };
  }(c, d));
  for (var c = E(tj.g(N(ly(L.g ? L.g(a) : L.call(null, a))))), d = null, e = 0, f = 0;;) {
    if (f < e) {
      var g = d.F(null, f), h = Et("#region-spec-form-" + u.g(g));
      Uw(h, zm, function(b, c, d, e, f, g) {
        return function(h) {
          var l = O.h(ly(L.g ? L.g(a) : L.call(null, a)), g), m = Ue.j(function(a, b, c, d, e, f, g) {
            return function(a, b) {
              var c = JD(new U(null, 2, 5, V, [g, b], null)), c = Et("#" + u.g(c)), c = Du(Ht.g(c));
              return R.j(a, b, c);
            };
          }(b, c, d, e, l, f, g), ei, $i(io.g(l)));
          Ag.m(a, oy, Sp.g(l), function(a, b, c, d, e, f) {
            return function(a) {
              return R.j(a, io, f);
            };
          }(b, c, d, e, l, m, f, g));
          h.preventDefault();
          return!1;
        };
      }(c, d, e, f, h, g));
      f += 1;
    } else {
      var l = E(c);
      if (l) {
        h = l;
        if (T(h)) {
          c = x(h), f = z(h), d = c, e = N(c), c = f;
        } else {
          var g = F(h), m = Et("#region-spec-form-" + u.g(g));
          Uw(m, zm, function(b, c, d, e, f, g, h, l) {
            return function(m) {
              var M = O.h(ly(L.g ? L.g(a) : L.call(null, a)), g), ea = Ue.j(function(a, b, c, d, e, f, g) {
                return function(a, b) {
                  var c = JD(new U(null, 2, 5, V, [g, b], null)), c = Et("#" + u.g(c)), c = Du(Ht.g(c));
                  return R.j(a, b, c);
                };
              }(b, c, d, e, M, f, g, h, l), ei, $i(io.g(M)));
              Ag.m(a, oy, Sp.g(M), function(a, b, c, d, e, f) {
                return function(a) {
                  return R.j(a, io, f);
                };
              }(b, c, d, e, M, ea, f, g, h, l));
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
;function CA() {
  var a = UD, b = mz.p();
  sz.h(a, b);
  return b;
}
var OD = xg.g ? xg.g(null) : xg.call(null, null), wA, VD = new p(null, 3, [Xn, 0, em, 0, Ql, null], null);
wA = xg.g ? xg.g(VD) : xg.call(null, VD);
var WD = mz.p(), UD = function XD(b) {
  var c = xg.g ? xg.g(ei) : xg.call(null, ei), d = function() {
    "undefined" === typeof ty && (ty = function(b, c, d, e) {
      this.Uc = b;
      this.ch = c;
      this.He = d;
      this.ye = e;
      this.G = 0;
      this.q = 393216;
    }, ty.Fa = !0, ty.Ea = "cljs.core.async/t27353", ty.Ka = function() {
      return function(b, c) {
        return zc(c, "cljs.core.async/t27353");
      };
    }(c), ty.prototype.zd = function() {
      return function(b, c, d) {
        Ag.m(this.Uc, R, c, d);
        return null;
      };
    }(c), ty.prototype.Ad = function() {
      return function(b, c) {
        Ag.j(this.Uc, ie, c);
        return null;
      };
    }(c), ty.prototype.I = function() {
      return function() {
        return this.ye;
      };
    }(c), ty.prototype.J = function() {
      return function(b, c) {
        return new ty(this.Uc, this.ch, this.He, c);
      };
    }(c));
    return new ty(c, b, XD, null);
  }(), e = mz.g(1), f = xg.g ? xg.g(null) : xg.call(null, null), g = function(b, c, d, e) {
    return function() {
      return 0 === Ag.h(e, $e) ? oz.h(d, !0) : null;
    };
  }(c, d, e, f), h = mz.g(1);
  Ny(function(c, d, e, f, g, h) {
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
                      bz(d);
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
              var s = c[7], w = F(s), y = O.j(w, 0, null), A = O.j(w, 1, null);
              c[8] = y;
              m = c;
              m[1] = q(A) ? 22 : 23;
              return Z;
            }
            if (27 === l) {
              var B = c[9], D = c[10], oa = c[11], Ma = c[12], ab = v.h(D, oa), bb = oz.j(ab, Ma, h);
              c[9] = ab;
              m = c;
              m[1] = q(bb) ? 30 : 31;
              return Z;
            }
            if (1 === l) {
              var Da = m = c;
              Da[2] = null;
              Da[1] = 2;
              return Z;
            }
            if (24 === l) {
              var s = c[7], sb = c[2], lb = H(s), cb = null, Cb = 0, $ = 0;
              c[13] = $;
              c[14] = sb;
              c[15] = cb;
              c[16] = lb;
              c[17] = Cb;
              var xc = m = c;
              xc[2] = null;
              xc[1] = 8;
              return Z;
            }
            if (39 === l) {
              var Ob = m = c;
              Ob[2] = null;
              Ob[1] = 41;
              return Z;
            }
            if (4 === l) {
              var Ma = c[12], hc = c[2], rd = null == hc;
              c[12] = hc;
              m = c;
              m[1] = q(rd) ? 5 : 6;
              return Z;
            }
            if (15 === l) {
              var $ = c[13], cb = c[15], lb = c[16], Cb = c[17], Tc = lb, Lb = cb, Db = Cb, Dc = $ + 1;
              c[18] = c[2];
              c[13] = Dc;
              c[15] = Lb;
              c[16] = Tc;
              c[17] = Db;
              var Vd = m = c;
              Vd[2] = null;
              Vd[1] = 8;
              return Z;
            }
            if (21 === l) {
              var Lf = c[2], sd = m = c;
              sd[2] = Lf;
              sd[1] = 18;
              return Z;
            }
            if (31 === l) {
              var B = c[9], td = Ag.h(g, $e), Dg = e.Ad(null, B);
              c[19] = td;
              var Eg = m = c;
              Eg[2] = Dg;
              Eg[1] = 32;
              return Z;
            }
            if (32 === l) {
              var D = c[10], oa = c[11], Qb = c[20], Rb = c[21], ac = c[2], oc = Qb, cd = Rb, ze = oa + 1;
              c[10] = D;
              c[11] = ze;
              c[20] = oc;
              c[21] = cd;
              c[22] = ac;
              var Mf = m = c;
              Mf[2] = null;
              Mf[1] = 25;
              return Z;
            }
            if (40 === l) {
              var dd = c[23], Fg = Ag.h(g, $e), Nf = e.Ad(null, dd);
              c[24] = Fg;
              var bf = m = c;
              bf[2] = Nf;
              bf[1] = 41;
              return Z;
            }
            if (33 === l) {
              var bc = c[25], Fb = T(bc), m = c;
              m[1] = Fb ? 36 : 37;
              return Z;
            }
            if (13 === l) {
              var Wd = c[26], Ae = wy(Wd), Xd = m = c;
              Xd[2] = Ae;
              Xd[1] = 15;
              return Z;
            }
            if (22 === l) {
              var y = c[8], Be = wy(y), ta = m = c;
              ta[2] = Be;
              ta[1] = 24;
              return Z;
            }
            if (36 === l) {
              var bc = c[25], Ce = x(bc), cf = z(bc), ud = N(Ce), Qb = cf, D = Ce, Rb = ud, oa = 0;
              c[10] = D;
              c[11] = oa;
              c[20] = Qb;
              c[21] = Rb;
              var pc = m = c;
              pc[2] = null;
              pc[1] = 25;
              return Z;
            }
            if (41 === l) {
              var bc = c[25], df = c[2], Qb = H(bc), D = null, oa = Rb = 0;
              c[10] = D;
              c[11] = oa;
              c[20] = Qb;
              c[27] = df;
              c[21] = Rb;
              var Ec = m = c;
              Ec[2] = null;
              Ec[1] = 25;
              return Z;
            }
            if (43 === l) {
              var Fc = m = c;
              Fc[2] = null;
              Fc[1] = 44;
              return Z;
            }
            if (29 === l) {
              var ef = c[2], cc = m = c;
              cc[2] = ef;
              cc[1] = 26;
              return Z;
            }
            if (44 === l) {
              c[28] = c[2];
              var Gc = m = c;
              Gc[2] = null;
              Gc[1] = 2;
              return Z;
            }
            if (6 === l) {
              var Gb = c[29], qc = L.g ? L.g(d) : L.call(null, d), Yd = $i(qc), rc = N(Yd), De = yg.h ? yg.h(g, rc) : yg.call(null, g, rc), Qb = E(Yd), D = null, oa = Rb = 0;
              c[30] = De;
              c[10] = D;
              c[11] = oa;
              c[20] = Qb;
              c[21] = Rb;
              c[29] = Yd;
              var ed = m = c;
              ed[2] = null;
              ed[1] = 25;
              return Z;
            }
            if (28 === l) {
              var Qb = c[20], bc = c[25], sc = E(Qb);
              c[25] = sc;
              m = c;
              m[1] = sc ? 33 : 34;
              return Z;
            }
            if (25 === l) {
              var oa = c[11], Rb = c[21], dc = oa < Rb, m = c;
              m[1] = q(dc) ? 27 : 28;
              return Z;
            }
            if (34 === l) {
              var Hc = m = c;
              Hc[2] = null;
              Hc[1] = 35;
              return Z;
            }
            if (17 === l) {
              var Zd = m = c;
              Zd[2] = null;
              Zd[1] = 18;
              return Z;
            }
            if (3 === l) {
              var vd = c[2], m = c;
              return az(m, vd);
            }
            if (12 === l) {
              var wd = c[2], tc = m = c;
              tc[2] = wd;
              tc[1] = 9;
              return Z;
            }
            if (2 === l) {
              return m = c, $y(m, 4, b);
            }
            if (23 === l) {
              var Mb = m = c;
              Mb[2] = null;
              Mb[1] = 24;
              return Z;
            }
            if (35 === l) {
              var Ee = c[2], Ic = m = c;
              Ic[2] = Ee;
              Ic[1] = 29;
              return Z;
            }
            if (19 === l) {
              var s = c[7], xd = x(s), ff = z(s), gf = N(xd), lb = ff, cb = xd, Cb = gf, $ = 0;
              c[13] = $;
              c[15] = cb;
              c[16] = lb;
              c[17] = Cb;
              var fd = m = c;
              fd[2] = null;
              fd[1] = 8;
              return Z;
            }
            if (11 === l) {
              var s = c[7], lb = c[16], yd = E(lb);
              c[7] = yd;
              m = c;
              m[1] = yd ? 16 : 17;
              return Z;
            }
            if (9 === l) {
              var Fe = c[2], $d = m = c;
              $d[2] = Fe;
              $d[1] = 7;
              return Z;
            }
            if (5 === l) {
              var Uc = L.g ? L.g(d) : L.call(null, d), lb = E(Uc), cb = null, $ = Cb = 0;
              c[13] = $;
              c[15] = cb;
              c[16] = lb;
              c[17] = Cb;
              var Vc = m = c;
              Vc[2] = null;
              Vc[1] = 8;
              return Z;
            }
            if (14 === l) {
              var Wc = m = c;
              Wc[2] = null;
              Wc[1] = 15;
              return Z;
            }
            if (45 === l) {
              var Ya = c[2], Xc = m = c;
              Xc[2] = Ya;
              Xc[1] = 44;
              return Z;
            }
            if (26 === l) {
              var Gb = c[29], zd = c[2], gd = E(Gb);
              c[31] = zd;
              m = c;
              m[1] = gd ? 42 : 43;
              return Z;
            }
            if (16 === l) {
              var s = c[7], hf = T(s), m = c;
              m[1] = hf ? 19 : 20;
              return Z;
            }
            if (38 === l) {
              var Gg = c[2], Ge = m = c;
              Ge[2] = Gg;
              Ge[1] = 35;
              return Z;
            }
            if (30 === l) {
              var jf = m = c;
              jf[2] = null;
              jf[1] = 32;
              return Z;
            }
            if (10 === l) {
              var $ = c[13], cb = c[15], He = v.h(cb, $), Wd = O.j(He, 0, null), Jc = O.j(He, 1, null);
              c[26] = Wd;
              m = c;
              m[1] = q(Jc) ? 13 : 14;
              return Z;
            }
            if (18 === l) {
              var Ie = c[2], Hg = m = c;
              Hg[2] = Ie;
              Hg[1] = 12;
              return Z;
            }
            if (42 === l) {
              return m = c, $y(m, 45, f);
            }
            if (37 === l) {
              var dd = c[23], bc = c[25], Ma = c[12], Of = F(bc), uc = oz.j(Of, Ma, h);
              c[23] = Of;
              m = c;
              m[1] = q(uc) ? 39 : 40;
              return Z;
            }
            if (8 === l) {
              var $ = c[13], Cb = c[17], hd = $ < Cb, m = c;
              m[1] = q(hd) ? 10 : 11;
              return Z;
            }
            return null;
          };
        }(c, d, e, f, g, h), c, d, e, f, g, h);
      }(), B = function() {
        var b = y.p ? y.p() : y.call(null);
        b[6] = c;
        return b;
      }();
      return Zy(B);
    };
  }(h, c, d, e, f, g));
  return d;
}(WD), PD = xg.g ? xg.g(!1) : xg.call(null, !1), QD, YD = new p(null, 3, [$m, 200, dm, !0, po, 1], null);
QD = xg.g ? xg.g(YD) : xg.call(null, YD);
function DA() {
  return oz.h(WD, Ag.h(OD, Xx));
}
function ZD() {
  Ag.m(OD, R, co, new p(null, 2, [jm, (new Date).getTime(), om, om.g(Xn.g(L.g ? L.g(OD) : L.call(null, OD)))], null));
  var a = mz.g(1);
  Ny(function(a) {
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
                      bz(c);
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
              var b = L.g ? L.g(QD) : L.call(null, QD), b = $m.g(b), b = jz(b), c = DA();
              a[8] = c;
              return $y(a, 7, b);
            }
            return 3 === b ? (b = a[2], az(a, b)) : 2 === b ? (b = L.g ? L.g(PD) : L.call(null, PD), a[1] = q(b) ? 4 : 5, Z) : 1 === b ? (a[2] = null, a[1] = 2, Z) : null;
          };
        }(a), a);
      }(), d = function() {
        var d = c.p ? c.p() : c.call(null);
        d[6] = a;
        return d;
      }();
      return Zy(d);
    };
  }(a));
  return a;
}
Kc(PD, ok, function(a, b, c, d) {
  return q(d) ? ZD() : null;
});
function $D(a) {
  var b = Et("#comportex-plots"), c = ly(a);
  a = function() {
    var a = new Mt(null, !0, function(a) {
      return function() {
        return new U(null, 2, 5, V, [ao, function() {
          return function(a) {
            return function D(b) {
              return new If(null, function() {
                return function() {
                  for (;;) {
                    var a = E(b);
                    if (a) {
                      if (T(a)) {
                        var c = x(a), d = N(c), e = Uf(d);
                        a: {
                          for (var f = 0;;) {
                            if (f < d) {
                              var g = v.h(c, f), h = "comportex-plot-" + u.g(g), g = new U(null, 3, 5, V, [Uj, new U(null, 2, 5, V, [Bm, "Region " + u.g(g)], null), new U(null, 2, 5, V, [ao, new p(null, 1, [Ko, h], null)], null)], null);
                              e.add(g);
                              f += 1;
                            } else {
                              c = !0;
                              break a;
                            }
                          }
                          c = void 0;
                        }
                        return c ? Xf(e.R(), D(z(a))) : Xf(e.R(), null);
                      }
                      e = F(a);
                      c = "comportex-plot-" + u.g(e);
                      return Sd(new U(null, 3, 5, V, [Uj, new U(null, 2, 5, V, [Bm, "Region " + u.g(e)], null), new U(null, 2, 5, V, [ao, new p(null, 1, [Ko, c], null)], null)], null), D(G(a)));
                    }
                    return null;
                  }
                };
              }(a), null, null);
            };
          }(a)(tj.g(N(a)));
        }()], null);
      };
    }(c), Kj.g("computed-observable"), ei, ei);
    L.g ? L.g(a) : L.call(null, a);
    return a;
  }();
  b = Et(b);
  Bt(b, L.g ? L.g(a) : L.call(null, a));
  Ij(a, Um, function(a, b) {
    return function() {
      return Bt(b, L.g ? L.g(a) : L.call(null, a));
    };
  }(a, b, c));
  b = E(tj.g(N(c)));
  a = null;
  for (var d = 0, e = 0;;) {
    if (e < d) {
      var f = a.F(null, e), g = "comportex-plot-" + u.g(f), h = Et("#" + u.g(g)), l = qz(qg.j(py, function(a, b, c, d, e, f, g) {
        return function(a) {
          return O.h(a, g);
        };
      }(b, a, d, e, h, g, f, c), ly), CA()), m = HD(l);
      Ij(m, Zo, function(a, b, c, d, e) {
        return function(a, b, c, d) {
          return ID(e, d);
        };
      }(b, a, d, e, h, l, m, g, f, c));
      e += 1;
    } else {
      if (h = E(b)) {
        g = h;
        if (T(g)) {
          b = x(g), e = z(g), a = b, d = N(b), b = e;
        } else {
          var f = F(g), l = "comportex-plot-" + u.g(f), m = Et("#" + u.g(l)), r = qz(qg.j(py, function(a, b, c, d, e, f, g) {
            return function(a) {
              return O.h(a, g);
            };
          }(b, a, d, e, m, l, f, g, h, c), ly), CA()), s = HD(r);
          Ij(s, Zo, function(a, b, c, d, e) {
            return function(a, b, c, d) {
              return ID(e, d);
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
function RD() {
  function a() {
    return vA();
  }
  return It.g ? It.g(a) : It.call(null, a);
}
Kc(Gz, rp, function() {
  return RD();
});
Kc(wA, rp, function() {
  return RD();
});
var aE = mz.g(1);
Ny(function(a) {
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
                    bz(c);
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
            return b = CA(), a[7] = b, a[2] = null, a[1] = 2, Z;
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
            return b = a[2], az(a, b);
          }
          if (12 === b) {
            return a[2] = null, a[1] = 13, Z;
          }
          if (2 === b) {
            return b = a[7], $y(a, 4, b);
          }
          if (11 === b) {
            return b = RD(), a[2] = b, a[1] = 13, Z;
          }
          if (9 === b) {
            return b = a[10], a[2] = b, a[1] = 10, Z;
          }
          if (5 === b) {
            var b = a[8], b = Xn.g(b), b = om.g(b), c = L.g ? L.g(QD) : L.call(null, QD), c = po.g(c), g = L.g ? L.g(QD) : L.call(null, QD), g = dm.g(g);
            a[11] = b;
            a[10] = g;
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
    return Zy(c);
  };
}(aE));
ma("comportexviz.main.set_model", function(a) {
  oz.h(WD, yg.h ? yg.h(OD, a) : yg.call(null, OD, a));
  new iB(Et("#comportex-tabs"));
  $D(a);
  BA(a);
  ND();
  SD();
  return TD();
});
var bE = new p(null, 3, [hm, 0, tl, Pn, go, 0], null);
function cE(a) {
  var b = ye(a) ? S.h(vg, a) : a, c = Q.h(b, go);
  a = Q.h(b, tl);
  var d = Q.h(b, hm);
  if (3 > c) {
    return gh.j(b, new U(null, 1, 5, V, [go], null), Jd);
  }
  b = C.h(a, Pn) ? d + 1 : d - 1;
  a = 0 === b ? Pn : C.h(9, b) ? ek : a;
  return new p(null, 3, [hm, b, tl, a, go, 1], null);
}
var dE = Nx(hm, Ix(300, 30, new U(null, 2, 5, V, [0, 9], null)));
ma("comportexviz.demos.block_steps.model", function() {
  return jy(ey, HA, new U(null, 1, 5, V, [new fy(bE, bE, cE, dE)], null));
});
var eE = new U(null, 2, 5, V, [0, Pn], null);
function fE(a) {
  var b = O.j(a, 0, null);
  a = O.j(a, 1, null);
  return C.h(a, Pn) ? 9 > b ? new U(null, 2, 5, V, [b + 1, Pn], null) : new U(null, 2, 5, V, [b - 1, ek], null) : 0 < b ? new U(null, 2, 5, V, [b - 1, ek], null) : new U(null, 2, 5, V, [b + 1, Pn], null);
}
var gE = Nx(F, Ix(300, 30, new U(null, 2, 5, V, [0, 9], null)));
ma("comportexviz.demos.simple_steps.model", function() {
  return jy(ey, HA, new U(null, 1, 5, V, [new fy(eE, eE, fE, gE)], null));
});
var hE = new U(null, 2, 5, V, [0, 10], null), iE = bh.h(function(a) {
  return R.k(a, hm, Wp.g(a), K([Zj, 0], 0));
}, new U(null, 3, 5, V, [new p(null, 4, [Wp, 0, gr, 3, lr, Jd, ep, 3], null), new p(null, 4, [Wp, 3, gr, 8, lr, Jd, ep, 4], null), new p(null, 4, [Wp, 10, gr, 0, lr, $e, ep, 1], null)], null));
function jE(a) {
  return bh.h(function(a) {
    return C.h(hm.g(a), gr.g(a)) ? R.k(a, hm, null, K([Zj, ep.g(a) - 1], 0)) : fb(hm.g(a)) && 0 < Zj.g(a) ? gh.j(a, new U(null, 1, 5, V, [Zj], null), $e) : fb(hm.g(a)) && 0 === Zj.g(a) ? R.j(a, hm, Wp.g(a)) : gh.j(a, new U(null, 1, 5, V, [hm], null), lr.g(a));
  }, a);
}
var kE = Kx(Nx(hm, Ix(300, 30, hE)));
ma("comportexviz.demos.mixed_fixed_1d.model", function() {
  return jy(ey, HA, new U(null, 1, 5, V, [new fy(iE, iE, jE, kE)], null));
});

})();

//# sourceMappingURL=comportexviz.js.map