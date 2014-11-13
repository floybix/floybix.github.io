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
var h, ba = this;
function ca(a, b) {
  var c = a.split("."), d = ba;
  c[0] in d || !d.execScript || d.execScript("var " + c[0]);
  for (var e;c.length && (e = c.shift());) {
    c.length || void 0 === b ? d = d[e] ? d[e] : d[e] = {} : d[e] = b;
  }
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
function da(a) {
  return "string" == typeof a;
}
function fa(a) {
  return "function" == n(a);
}
var ga = "closure_uid_" + (1E9 * Math.random() >>> 0), ha = 0;
function ia(a, b, c) {
  return a.call.apply(a.bind, arguments);
}
function ma(a, b, c) {
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
function na(a, b, c) {
  na = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ia : ma;
  return na.apply(null, arguments);
}
;function oa(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}
function pa(a) {
  return String(a).replace(/\-([a-z])/g, function(a, c) {
    return c.toUpperCase();
  });
}
;function ra(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
}
;function wa(a, b) {
  null != a && this.append.apply(this, arguments);
}
wa.prototype.ub = "";
wa.prototype.append = function(a, b, c) {
  this.ub += a;
  if (null != b) {
    for (var d = 1;d < arguments.length;d++) {
      this.ub += arguments[d];
    }
  }
  return this;
};
wa.prototype.toString = function() {
  return this.ub;
};
var xa = Array.prototype, ya = xa.indexOf ? function(a, b, c) {
  return xa.indexOf.call(a, b, c);
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
};
function za(a, b) {
  a.sort(b || Aa);
}
function Ba(a, b) {
  for (var c = 0;c < a.length;c++) {
    a[c] = {index:c, value:a[c]};
  }
  var d = b || Aa;
  za(a, function(a, b) {
    return d(a.value, b.value) || a.index - b.index;
  });
  for (c = 0;c < a.length;c++) {
    a[c] = a[c].value;
  }
}
function Aa(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
}
;function Ca() {
  throw Error("No *print-fn* fn set for evaluation environment");
}
var Ea = !0, Fa = null;
function Ia() {
  return new Ka(null, 5, [La, !0, Ma, !0, Na, !1, Pa, !1, Qa, null], null);
}
function q(a) {
  return null != a && !1 !== a;
}
function Ra(a) {
  return q(a) ? !1 : !0;
}
function Sa(a, b) {
  return a[n(null == b ? null : b)] ? !0 : a._ ? !0 : !1;
}
function Ua(a) {
  return null == a ? null : a.constructor;
}
function s(a, b) {
  var c = Ua(b), c = q(q(c) ? c.xb : c) ? c.wb : n(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function Va(a) {
  var b = a.wb;
  return q(b) ? b : "" + u.g(a);
}
function Wa(a) {
  for (var b = a.length, c = Array(b), d = 0;;) {
    if (d < b) {
      c[d] = a[d], d += 1;
    } else {
      break;
    }
  }
  return c;
}
var Ya = function() {
  function a(a, b) {
    function c(a, b) {
      a.push(b);
      return a;
    }
    var g = [];
    return Xa.j ? Xa.j(c, g, b) : Xa.call(null, c, g, b);
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
}(), Za = {}, $a = {};
function bb(a) {
  if (a ? a.T : a) {
    return a.T(a);
  }
  var b;
  b = bb[n(null == a ? null : a)];
  if (!b && (b = bb._, !b)) {
    throw s("ICounted.-count", a);
  }
  return b.call(null, a);
}
function db(a) {
  if (a ? a.Z : a) {
    return a.Z(a);
  }
  var b;
  b = db[n(null == a ? null : a)];
  if (!b && (b = db._, !b)) {
    throw s("IEmptyableCollection.-empty", a);
  }
  return b.call(null, a);
}
var jb = {};
function mb(a, b) {
  if (a ? a.R : a) {
    return a.R(a, b);
  }
  var c;
  c = mb[n(null == a ? null : a)];
  if (!c && (c = mb._, !c)) {
    throw s("ICollection.-conj", a);
  }
  return c.call(null, a, b);
}
var nb = {}, ob = function() {
  function a(a, b, c) {
    if (a ? a.wa : a) {
      return a.wa(a, b, c);
    }
    var g;
    g = ob[n(null == a ? null : a)];
    if (!g && (g = ob._, !g)) {
      throw s("IIndexed.-nth", a);
    }
    return g.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.B : a) {
      return a.B(a, b);
    }
    var c;
    c = ob[n(null == a ? null : a)];
    if (!c && (c = ob._, !c)) {
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
}(), pb = {};
function qb(a) {
  if (a ? a.$ : a) {
    return a.$(a);
  }
  var b;
  b = qb[n(null == a ? null : a)];
  if (!b && (b = qb._, !b)) {
    throw s("ISeq.-first", a);
  }
  return b.call(null, a);
}
function sb(a) {
  if (a ? a.fa : a) {
    return a.fa(a);
  }
  var b;
  b = sb[n(null == a ? null : a)];
  if (!b && (b = sb._, !b)) {
    throw s("ISeq.-rest", a);
  }
  return b.call(null, a);
}
var tb = {}, ub = {}, wb = function() {
  function a(a, b, c) {
    if (a ? a.I : a) {
      return a.I(a, b, c);
    }
    var g;
    g = wb[n(null == a ? null : a)];
    if (!g && (g = wb._, !g)) {
      throw s("ILookup.-lookup", a);
    }
    return g.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.J : a) {
      return a.J(a, b);
    }
    var c;
    c = wb[n(null == a ? null : a)];
    if (!c && (c = wb._, !c)) {
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
}(), xb = {};
function zb(a, b) {
  if (a ? a.Vb : a) {
    return a.Vb(a, b);
  }
  var c;
  c = zb[n(null == a ? null : a)];
  if (!c && (c = zb._, !c)) {
    throw s("IAssociative.-contains-key?", a);
  }
  return c.call(null, a, b);
}
function Ab(a, b, c) {
  if (a ? a.Aa : a) {
    return a.Aa(a, b, c);
  }
  var d;
  d = Ab[n(null == a ? null : a)];
  if (!d && (d = Ab._, !d)) {
    throw s("IAssociative.-assoc", a);
  }
  return d.call(null, a, b, c);
}
var Db = {};
function Gb(a, b) {
  if (a ? a.eb : a) {
    return a.eb(a, b);
  }
  var c;
  c = Gb[n(null == a ? null : a)];
  if (!c && (c = Gb._, !c)) {
    throw s("IMap.-dissoc", a);
  }
  return c.call(null, a, b);
}
var Hb = {};
function Mb(a) {
  if (a ? a.Ib : a) {
    return a.Ib(a);
  }
  var b;
  b = Mb[n(null == a ? null : a)];
  if (!b && (b = Mb._, !b)) {
    throw s("IMapEntry.-key", a);
  }
  return b.call(null, a);
}
function Nb(a) {
  if (a ? a.Jb : a) {
    return a.Jb(a);
  }
  var b;
  b = Nb[n(null == a ? null : a)];
  if (!b && (b = Nb._, !b)) {
    throw s("IMapEntry.-val", a);
  }
  return b.call(null, a);
}
var Ob = {};
function Pb(a) {
  if (a ? a.fb : a) {
    return a.fb(a);
  }
  var b;
  b = Pb[n(null == a ? null : a)];
  if (!b && (b = Pb._, !b)) {
    throw s("IStack.-peek", a);
  }
  return b.call(null, a);
}
var Qb = {};
function Ub(a, b, c) {
  if (a ? a.ob : a) {
    return a.ob(a, b, c);
  }
  var d;
  d = Ub[n(null == a ? null : a)];
  if (!d && (d = Ub._, !d)) {
    throw s("IVector.-assoc-n", a);
  }
  return d.call(null, a, b, c);
}
function Vb(a) {
  if (a ? a.Fb : a) {
    return a.Fb(a);
  }
  var b;
  b = Vb[n(null == a ? null : a)];
  if (!b && (b = Vb._, !b)) {
    throw s("IDeref.-deref", a);
  }
  return b.call(null, a);
}
var Wb = {};
function fc(a) {
  if (a ? a.L : a) {
    return a.L(a);
  }
  var b;
  b = fc[n(null == a ? null : a)];
  if (!b && (b = fc._, !b)) {
    throw s("IMeta.-meta", a);
  }
  return b.call(null, a);
}
var gc = {};
function ic(a, b) {
  if (a ? a.N : a) {
    return a.N(a, b);
  }
  var c;
  c = ic[n(null == a ? null : a)];
  if (!c && (c = ic._, !c)) {
    throw s("IWithMeta.-with-meta", a);
  }
  return c.call(null, a, b);
}
var jc = {}, kc = function() {
  function a(a, b, c) {
    if (a ? a.ca : a) {
      return a.ca(a, b, c);
    }
    var g;
    g = kc[n(null == a ? null : a)];
    if (!g && (g = kc._, !g)) {
      throw s("IReduce.-reduce", a);
    }
    return g.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.ba : a) {
      return a.ba(a, b);
    }
    var c;
    c = kc[n(null == a ? null : a)];
    if (!c && (c = kc._, !c)) {
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
function lc(a, b, c) {
  if (a ? a.Hb : a) {
    return a.Hb(a, b, c);
  }
  var d;
  d = lc[n(null == a ? null : a)];
  if (!d && (d = lc._, !d)) {
    throw s("IKVReduce.-kv-reduce", a);
  }
  return d.call(null, a, b, c);
}
function mc(a, b) {
  if (a ? a.M : a) {
    return a.M(a, b);
  }
  var c;
  c = mc[n(null == a ? null : a)];
  if (!c && (c = mc._, !c)) {
    throw s("IEquiv.-equiv", a);
  }
  return c.call(null, a, b);
}
function tc(a) {
  if (a ? a.O : a) {
    return a.O(a);
  }
  var b;
  b = tc[n(null == a ? null : a)];
  if (!b && (b = tc._, !b)) {
    throw s("IHash.-hash", a);
  }
  return b.call(null, a);
}
var uc = {};
function vc(a) {
  if (a ? a.P : a) {
    return a.P(a);
  }
  var b;
  b = vc[n(null == a ? null : a)];
  if (!b && (b = vc._, !b)) {
    throw s("ISeqable.-seq", a);
  }
  return b.call(null, a);
}
var wc = {}, Cc = {};
function Dc(a) {
  if (a ? a.Kb : a) {
    return a.Kb(a);
  }
  var b;
  b = Dc[n(null == a ? null : a)];
  if (!b && (b = Dc._, !b)) {
    throw s("IReversible.-rseq", a);
  }
  return b.call(null, a);
}
function Ec(a, b) {
  if (a ? a.Pc : a) {
    return a.Pc(0, b);
  }
  var c;
  c = Ec[n(null == a ? null : a)];
  if (!c && (c = Ec._, !c)) {
    throw s("IWriter.-write", a);
  }
  return c.call(null, a, b);
}
var Fc = {};
function Gc(a, b, c) {
  if (a ? a.K : a) {
    return a.K(a, b, c);
  }
  var d;
  d = Gc[n(null == a ? null : a)];
  if (!d && (d = Gc._, !d)) {
    throw s("IPrintWithWriter.-pr-writer", a);
  }
  return d.call(null, a, b, c);
}
function Hc(a, b, c) {
  if (a ? a.Oc : a) {
    return a.Oc(0, b, c);
  }
  var d;
  d = Hc[n(null == a ? null : a)];
  if (!d && (d = Hc._, !d)) {
    throw s("IWatchable.-notify-watches", a);
  }
  return d.call(null, a, b, c);
}
function Qc(a, b, c) {
  if (a ? a.Nc : a) {
    return a.Nc(0, b, c);
  }
  var d;
  d = Qc[n(null == a ? null : a)];
  if (!d && (d = Qc._, !d)) {
    throw s("IWatchable.-add-watch", a);
  }
  return d.call(null, a, b, c);
}
function Rc(a) {
  if (a ? a.vb : a) {
    return a.vb(a);
  }
  var b;
  b = Rc[n(null == a ? null : a)];
  if (!b && (b = Rc._, !b)) {
    throw s("IEditableCollection.-as-transient", a);
  }
  return b.call(null, a);
}
function Sc(a, b) {
  if (a ? a.mb : a) {
    return a.mb(a, b);
  }
  var c;
  c = Sc[n(null == a ? null : a)];
  if (!c && (c = Sc._, !c)) {
    throw s("ITransientCollection.-conj!", a);
  }
  return c.call(null, a, b);
}
function Tc(a) {
  if (a ? a.nb : a) {
    return a.nb(a);
  }
  var b;
  b = Tc[n(null == a ? null : a)];
  if (!b && (b = Tc._, !b)) {
    throw s("ITransientCollection.-persistent!", a);
  }
  return b.call(null, a);
}
function Uc(a, b, c) {
  if (a ? a.Mb : a) {
    return a.Mb(a, b, c);
  }
  var d;
  d = Uc[n(null == a ? null : a)];
  if (!d && (d = Uc._, !d)) {
    throw s("ITransientAssociative.-assoc!", a);
  }
  return d.call(null, a, b, c);
}
function Vc(a, b, c) {
  if (a ? a.Mc : a) {
    return a.Mc(0, b, c);
  }
  var d;
  d = Vc[n(null == a ? null : a)];
  if (!d && (d = Vc._, !d)) {
    throw s("ITransientVector.-assoc-n!", a);
  }
  return d.call(null, a, b, c);
}
function ad(a) {
  if (a ? a.Ic : a) {
    return a.Ic();
  }
  var b;
  b = ad[n(null == a ? null : a)];
  if (!b && (b = ad._, !b)) {
    throw s("IChunk.-drop-first", a);
  }
  return b.call(null, a);
}
function v(a) {
  if (a ? a.oc : a) {
    return a.oc(a);
  }
  var b;
  b = v[n(null == a ? null : a)];
  if (!b && (b = v._, !b)) {
    throw s("IChunkedSeq.-chunked-first", a);
  }
  return b.call(null, a);
}
function w(a) {
  if (a ? a.pc : a) {
    return a.pc(a);
  }
  var b;
  b = w[n(null == a ? null : a)];
  if (!b && (b = w._, !b)) {
    throw s("IChunkedSeq.-chunked-rest", a);
  }
  return b.call(null, a);
}
function bd(a) {
  if (a ? a.nc : a) {
    return a.nc(a);
  }
  var b;
  b = bd[n(null == a ? null : a)];
  if (!b && (b = bd._, !b)) {
    throw s("IChunkedNext.-chunked-next", a);
  }
  return b.call(null, a);
}
function cd(a, b) {
  if (a ? a.Cd : a) {
    return a.Cd(a, b);
  }
  var c;
  c = cd[n(null == a ? null : a)];
  if (!c && (c = cd._, !c)) {
    throw s("IReset.-reset!", a);
  }
  return c.call(null, a, b);
}
var dd = function() {
  function a(a, b, c, d, e) {
    if (a ? a.Gd : a) {
      return a.Gd(a, b, c, d, e);
    }
    var p;
    p = dd[n(null == a ? null : a)];
    if (!p && (p = dd._, !p)) {
      throw s("ISwap.-swap!", a);
    }
    return p.call(null, a, b, c, d, e);
  }
  function b(a, b, c, d) {
    if (a ? a.Fd : a) {
      return a.Fd(a, b, c, d);
    }
    var e;
    e = dd[n(null == a ? null : a)];
    if (!e && (e = dd._, !e)) {
      throw s("ISwap.-swap!", a);
    }
    return e.call(null, a, b, c, d);
  }
  function c(a, b, c) {
    if (a ? a.Ed : a) {
      return a.Ed(a, b, c);
    }
    var d;
    d = dd[n(null == a ? null : a)];
    if (!d && (d = dd._, !d)) {
      throw s("ISwap.-swap!", a);
    }
    return d.call(null, a, b, c);
  }
  function d(a, b) {
    if (a ? a.Dd : a) {
      return a.Dd(a, b);
    }
    var c;
    c = dd[n(null == a ? null : a)];
    if (!c && (c = dd._, !c)) {
      throw s("ISwap.-swap!", a);
    }
    return c.call(null, a, b);
  }
  var e = null, e = function(e, g, k, l, m) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, g);
      case 3:
        return c.call(this, e, g, k);
      case 4:
        return b.call(this, e, g, k, l);
      case 5:
        return a.call(this, e, g, k, l, m);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.h = d;
  e.j = c;
  e.n = b;
  e.U = a;
  return e;
}();
function ed(a) {
  if (a ? a.Gb : a) {
    return a.Gb(a);
  }
  var b;
  b = ed[n(null == a ? null : a)];
  if (!b && (b = ed._, !b)) {
    throw s("IIterable.-iterator", a);
  }
  return b.call(null, a);
}
function fd(a) {
  this.ze = a;
  this.F = 0;
  this.o = 1073741824;
}
fd.prototype.Pc = function(a, b) {
  return this.ze.append(b);
};
function gd(a) {
  var b = new wa;
  a.K(null, new fd(b), Ia());
  return "" + u.g(b);
}
var hd = "undefined" !== typeof Math.imul && 0 !== (Math.imul.h ? Math.imul.h(4294967295, 5) : Math.imul.call(null, 4294967295, 5)) ? function(a, b) {
  return Math.imul.h ? Math.imul.h(a, b) : Math.imul.call(null, a, b);
} : function(a, b) {
  var c = a & 65535, d = b & 65535;
  return c * d + ((a >>> 16 & 65535) * d + c * (b >>> 16 & 65535) << 16 >>> 0) | 0;
};
function id(a) {
  a = hd(a, 3432918353);
  return hd(a << 15 | a >>> -15, 461845907);
}
function jd(a, b) {
  var c = a ^ b;
  return hd(c << 13 | c >>> -13, 5) + 3864292196;
}
function kd(a, b) {
  var c = a ^ b, c = hd(c ^ c >>> 16, 2246822507), c = hd(c ^ c >>> 13, 3266489909);
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
  return kd(b, hd(2, a.length));
}
var md = {}, zd = 0;
function Ad(a) {
  255 < zd && (md = {}, zd = 0);
  var b = md[a];
  if ("number" !== typeof b) {
    a: {
      if (null != a) {
        if (b = a.length, 0 < b) {
          for (var c = 0, d = 0;;) {
            if (c < b) {
              var e = c + 1, d = hd(31, d) + a.charCodeAt(c), c = e
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
    zd += 1;
  }
  return a = b;
}
function Bd(a) {
  a && (a.o & 4194304 || a.Le) ? a = a.O(null) : "number" === typeof a ? a = (Math.floor.g ? Math.floor.g(a) : Math.floor.call(null, a)) % 2147483647 : !0 === a ? a = 1 : !1 === a ? a = 0 : "string" === typeof a ? (a = Ad(a), 0 !== a && (a = id(a), a = jd(0, a), a = kd(a, 4))) : a = null == a ? 0 : tc(a);
  return a;
}
function Cd(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
function Dd(a, b) {
  if (q(x.h ? x.h(a, b) : x.call(null, a, b))) {
    return 0;
  }
  if (q(function() {
    var c = Ra(a.Ga);
    return c ? b.Ga : c;
  }())) {
    return-1;
  }
  if (q(a.Ga)) {
    if (Ra(b.Ga)) {
      return 1;
    }
    var c = function() {
      var c = a.Ga, d = b.Ga;
      return Ed.h ? Ed.h(c, d) : Ed.call(null, c, d);
    }();
    if (0 === c) {
      var c = a.name, d = b.name;
      return Ed.h ? Ed.h(c, d) : Ed.call(null, c, d);
    }
    return c;
  }
  c = a.name;
  d = b.name;
  return Ed.h ? Ed.h(c, d) : Ed.call(null, c, d);
}
function Fd(a, b, c, d, e) {
  this.Ga = a;
  this.name = b;
  this.lb = c;
  this.tb = d;
  this.ta = e;
  this.o = 2154168321;
  this.F = 4096;
}
h = Fd.prototype;
h.K = function(a, b) {
  return Ec(b, this.lb);
};
h.O = function() {
  var a = this.tb;
  return null != a ? a : this.tb = a = Cd(ld(this.name), Ad(this.Ga));
};
h.N = function(a, b) {
  return new Fd(this.Ga, this.name, this.lb, this.tb, b);
};
h.L = function() {
  return this.ta;
};
h.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return wb.j(c, this, null);
      case 3:
        return wb.j(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.h = function(a, c) {
    return wb.j(c, this, null);
  };
  a.j = function(a, c, d) {
    return wb.j(c, this, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Wa(b)));
};
h.g = function(a) {
  return wb.j(a, this, null);
};
h.h = function(a, b) {
  return wb.j(a, this, b);
};
h.M = function(a, b) {
  return b instanceof Fd ? this.lb === b.lb : !1;
};
h.toString = function() {
  return this.lb;
};
function z(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.o & 8388608 || a.Lc)) {
    return a.P(null);
  }
  if (a instanceof Array || "string" === typeof a) {
    return 0 === a.length ? null : new Gd(a, 0);
  }
  if (Sa(uc, a)) {
    return vc(a);
  }
  throw Error("" + u.g(a) + " is not ISeqable");
}
function A(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.o & 64 || a.Lb)) {
    return a.$(null);
  }
  a = z(a);
  return null == a ? null : qb(a);
}
function D(a) {
  return null != a ? a && (a.o & 64 || a.Lb) ? a.fa(null) : (a = z(a)) ? sb(a) : Hd : Hd;
}
function E(a) {
  return null == a ? null : a && (a.o & 128 || a.Zb) ? a.ha(null) : z(D(a));
}
var x = function() {
  function a(a, b) {
    return null == a ? null == b : a === b || mc(a, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = J(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (b.h(a, d)) {
          if (E(e)) {
            a = d, d = A(e), e = E(e);
          } else {
            return b.h(d, A(e));
          }
        } else {
          return!1;
        }
      }
    }
    a.C = 2;
    a.p = function(a) {
      var b = A(a);
      a = E(a);
      var d = A(a);
      a = D(a);
      return c(b, d, a);
    };
    a.l = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a.call(this, b, e);
      default:
        return c.l(b, e, J(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.C = 2;
  b.p = c.p;
  b.g = function() {
    return!0;
  };
  b.h = a;
  b.l = c.l;
  return b;
}();
function Id(a, b) {
  var c = id(a), c = jd(0, c);
  return kd(c, b);
}
function Jd(a) {
  var b = 0, c = 1;
  for (a = z(a);;) {
    if (null != a) {
      b += 1, c = hd(31, c) + Bd(A(a)) | 0, a = E(a);
    } else {
      return Id(c, b);
    }
  }
}
function Kd(a) {
  var b = 0, c = 0;
  for (a = z(a);;) {
    if (null != a) {
      b += 1, c = c + Bd(A(a)) | 0, a = E(a);
    } else {
      return Id(c, b);
    }
  }
}
$a["null"] = !0;
bb["null"] = function() {
  return 0;
};
Date.prototype.M = function(a, b) {
  return b instanceof Date && this.toString() === b.toString();
};
mc.number = function(a, b) {
  return a === b;
};
Wb["function"] = !0;
fc["function"] = function() {
  return null;
};
Za["function"] = !0;
tc._ = function(a) {
  return a[ga] || (a[ga] = ++ha);
};
function Zd(a) {
  this.t = a;
  this.F = 0;
  this.o = 32768;
}
Zd.prototype.Fb = function() {
  return this.t;
};
function $d(a) {
  return a instanceof Zd;
}
function K(a) {
  return Vb(a);
}
var ae = function() {
  function a(a, b, c, d) {
    for (var l = bb(a);;) {
      if (d < l) {
        var m = ob.h(a, d);
        c = b.h ? b.h(c, m) : b.call(null, c, m);
        if ($d(c)) {
          return Vb(c);
        }
        d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    var d = bb(a), l = c;
    for (c = 0;;) {
      if (c < d) {
        var m = ob.h(a, c), l = b.h ? b.h(l, m) : b.call(null, l, m);
        if ($d(l)) {
          return Vb(l);
        }
        c += 1;
      } else {
        return l;
      }
    }
  }
  function c(a, b) {
    var c = bb(a);
    if (0 === c) {
      return b.v ? b.v() : b.call(null);
    }
    for (var d = ob.h(a, 0), l = 1;;) {
      if (l < c) {
        var m = ob.h(a, l), d = b.h ? b.h(d, m) : b.call(null, d, m);
        if ($d(d)) {
          return Vb(d);
        }
        l += 1;
      } else {
        return d;
      }
    }
  }
  var d = null, d = function(d, f, g, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, g);
      case 4:
        return a.call(this, d, f, g, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.h = c;
  d.j = b;
  d.n = a;
  return d;
}(), be = function() {
  function a(a, b, c, d) {
    for (var l = a.length;;) {
      if (d < l) {
        var m = a[d];
        c = b.h ? b.h(c, m) : b.call(null, c, m);
        if ($d(c)) {
          return Vb(c);
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
        if ($d(l)) {
          return Vb(l);
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
      return b.v ? b.v() : b.call(null);
    }
    for (var d = a[0], l = 1;;) {
      if (l < c) {
        var m = a[l], d = b.h ? b.h(d, m) : b.call(null, d, m);
        if ($d(d)) {
          return Vb(d);
        }
        l += 1;
      } else {
        return d;
      }
    }
  }
  var d = null, d = function(d, f, g, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, g);
      case 4:
        return a.call(this, d, f, g, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.h = c;
  d.j = b;
  d.n = a;
  return d;
}();
function ce(a) {
  return a ? a.o & 2 || a.ud ? !0 : a.o ? !1 : Sa($a, a) : Sa($a, a);
}
function de(a) {
  return a ? a.o & 16 || a.Jc ? !0 : a.o ? !1 : Sa(nb, a) : Sa(nb, a);
}
function ee(a, b) {
  this.k = a;
  this.D = b;
}
ee.prototype.fc = function() {
  return this.D < this.k.length;
};
ee.prototype.next = function() {
  var a = this.k[this.D];
  this.D += 1;
  return a;
};
function Gd(a, b) {
  this.k = a;
  this.D = b;
  this.o = 166199550;
  this.F = 8192;
}
h = Gd.prototype;
h.toString = function() {
  return gd(this);
};
h.B = function(a, b) {
  var c = b + this.D;
  return c < this.k.length ? this.k[c] : null;
};
h.wa = function(a, b, c) {
  a = b + this.D;
  return a < this.k.length ? this.k[a] : c;
};
h.Gb = function() {
  return new ee(this.k, this.D);
};
h.ha = function() {
  return this.D + 1 < this.k.length ? new Gd(this.k, this.D + 1) : null;
};
h.T = function() {
  return this.k.length - this.D;
};
h.Kb = function() {
  var a = bb(this);
  return 0 < a ? new fe(this, a - 1, null) : null;
};
h.O = function() {
  return Jd(this);
};
h.M = function(a, b) {
  return ge.h ? ge.h(this, b) : ge.call(null, this, b);
};
h.Z = function() {
  return Hd;
};
h.ba = function(a, b) {
  return be.n(this.k, b, this.k[this.D], this.D + 1);
};
h.ca = function(a, b, c) {
  return be.n(this.k, b, c, this.D);
};
h.$ = function() {
  return this.k[this.D];
};
h.fa = function() {
  return this.D + 1 < this.k.length ? new Gd(this.k, this.D + 1) : Hd;
};
h.P = function() {
  return this;
};
h.R = function(a, b) {
  return he.h ? he.h(b, this) : he.call(null, b, this);
};
var ie = function() {
  function a(a, b) {
    return b < a.length ? new Gd(a, b) : null;
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
}(), J = function() {
  function a(a, b) {
    return ie.h(a, b);
  }
  function b(a) {
    return ie.h(a, 0);
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
function fe(a, b, c) {
  this.Ub = a;
  this.D = b;
  this.w = c;
  this.o = 32374990;
  this.F = 8192;
}
h = fe.prototype;
h.toString = function() {
  return gd(this);
};
h.L = function() {
  return this.w;
};
h.ha = function() {
  return 0 < this.D ? new fe(this.Ub, this.D - 1, null) : null;
};
h.T = function() {
  return this.D + 1;
};
h.O = function() {
  return Jd(this);
};
h.M = function(a, b) {
  return ge.h ? ge.h(this, b) : ge.call(null, this, b);
};
h.Z = function() {
  var a = this.w;
  return je.h ? je.h(Hd, a) : je.call(null, Hd, a);
};
h.ba = function(a, b) {
  return ke.h ? ke.h(b, this) : ke.call(null, b, this);
};
h.ca = function(a, b, c) {
  return ke.j ? ke.j(b, c, this) : ke.call(null, b, c, this);
};
h.$ = function() {
  return ob.h(this.Ub, this.D);
};
h.fa = function() {
  return 0 < this.D ? new fe(this.Ub, this.D - 1, null) : Hd;
};
h.P = function() {
  return this;
};
h.N = function(a, b) {
  return new fe(this.Ub, this.D, b);
};
h.R = function(a, b) {
  return he.h ? he.h(b, this) : he.call(null, b, this);
};
function le(a) {
  for (;;) {
    var b = E(a);
    if (null != b) {
      a = b;
    } else {
      return A(a);
    }
  }
}
mc._ = function(a, b) {
  return a === b;
};
var ne = function() {
  function a(a, b) {
    return null != a ? mb(a, b) : mb(Hd, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = J(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (q(e)) {
          a = b.h(a, d), d = A(e), e = E(e);
        } else {
          return b.h(a, d);
        }
      }
    }
    a.C = 2;
    a.p = function(a) {
      var b = A(a);
      a = E(a);
      var d = A(a);
      a = D(a);
      return c(b, d, a);
    };
    a.l = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 0:
        return me;
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.l(b, e, J(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.C = 2;
  b.p = c.p;
  b.v = function() {
    return me;
  };
  b.g = function(a) {
    return a;
  };
  b.h = a;
  b.l = c.l;
  return b;
}();
function L(a) {
  if (null != a) {
    if (a && (a.o & 2 || a.ud)) {
      a = a.T(null);
    } else {
      if (a instanceof Array) {
        a = a.length;
      } else {
        if ("string" === typeof a) {
          a = a.length;
        } else {
          if (Sa($a, a)) {
            a = bb(a);
          } else {
            a: {
              a = z(a);
              for (var b = 0;;) {
                if (ce(a)) {
                  a = b + bb(a);
                  break a;
                }
                a = E(a);
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
var oe = function() {
  function a(a, b, c) {
    for (;;) {
      if (null == a) {
        return c;
      }
      if (0 === b) {
        return z(a) ? A(a) : c;
      }
      if (de(a)) {
        return ob.j(a, b, c);
      }
      if (z(a)) {
        a = E(a), b -= 1;
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
        if (z(a)) {
          return A(a);
        }
        throw Error("Index out of bounds");
      }
      if (de(a)) {
        return ob.h(a, b);
      }
      if (z(a)) {
        var c = E(a), g = b - 1;
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
}(), M = function() {
  function a(a, b, c) {
    if ("number" !== typeof b) {
      throw Error("index argument to nth must be a number.");
    }
    if (null == a) {
      return c;
    }
    if (a && (a.o & 16 || a.Jc)) {
      return a.wa(null, b, c);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : c;
    }
    if (Sa(nb, a)) {
      return ob.h(a, b);
    }
    if (a ? a.o & 64 || a.Lb || (a.o ? 0 : Sa(pb, a)) : Sa(pb, a)) {
      return oe.j(a, b, c);
    }
    throw Error("nth not supported on this type " + u.g(Va(Ua(a))));
  }
  function b(a, b) {
    if ("number" !== typeof b) {
      throw Error("index argument to nth must be a number");
    }
    if (null == a) {
      return a;
    }
    if (a && (a.o & 16 || a.Jc)) {
      return a.B(null, b);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : null;
    }
    if (Sa(nb, a)) {
      return ob.h(a, b);
    }
    if (a ? a.o & 64 || a.Lb || (a.o ? 0 : Sa(pb, a)) : Sa(pb, a)) {
      return oe.h(a, b);
    }
    throw Error("nth not supported on this type " + u.g(Va(Ua(a))));
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
    return null != a ? a && (a.o & 256 || a.Kc) ? a.I(null, b, c) : a instanceof Array ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : Sa(ub, a) ? wb.j(a, b, c) : c : c;
  }
  function b(a, b) {
    return null == a ? null : a && (a.o & 256 || a.Kc) ? a.J(null, b) : a instanceof Array ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : Sa(ub, a) ? wb.h(a, b) : null;
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
}(), Be = function() {
  function a(a, b, c) {
    return null != a ? Ab(a, b, c) : pe([b], [c]);
  }
  var b = null, c = function() {
    function a(b, d, k, l) {
      var m = null;
      3 < arguments.length && (m = J(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, k, m);
    }
    function c(a, d, e, l) {
      for (;;) {
        if (a = b.j(a, d, e), q(l)) {
          d = A(l), e = A(E(l)), l = E(E(l));
        } else {
          return a;
        }
      }
    }
    a.C = 3;
    a.p = function(a) {
      var b = A(a);
      a = E(a);
      var d = A(a);
      a = E(a);
      var l = A(a);
      a = D(a);
      return c(b, d, l, a);
    };
    a.l = c;
    return a;
  }(), b = function(b, e, f, g) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, e, f);
      default:
        return c.l(b, e, f, J(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.C = 3;
  b.p = c.p;
  b.j = a;
  b.l = c.l;
  return b;
}(), Ce = function() {
  function a(a, b) {
    return null == a ? null : Gb(a, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = J(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (null == a) {
          return null;
        }
        a = b.h(a, d);
        if (q(e)) {
          d = A(e), e = E(e);
        } else {
          return a;
        }
      }
    }
    a.C = 2;
    a.p = function(a) {
      var b = A(a);
      a = E(a);
      var d = A(a);
      a = D(a);
      return c(b, d, a);
    };
    a.l = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.l(b, e, J(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.C = 2;
  b.p = c.p;
  b.g = function(a) {
    return a;
  };
  b.h = a;
  b.l = c.l;
  return b;
}();
function De(a) {
  var b = fa(a);
  return q(b) ? b : a ? q(q(null) ? null : a.td) ? !0 : a.Re ? !1 : Sa(Za, a) : Sa(Za, a);
}
function Ee(a, b) {
  this.m = a;
  this.w = b;
  this.F = 0;
  this.o = 393217;
}
h = Ee.prototype;
h.call = function() {
  function a(a, b, c, d, e, f, g, k, l, m, p, t, r, y, G, C, B, F, I, H, N, T) {
    a = this.m;
    return Fe.Yb ? Fe.Yb(a, b, c, d, e, f, g, k, l, m, p, t, r, y, G, C, B, F, I, H, N, T) : Fe.call(null, a, b, c, d, e, f, g, k, l, m, p, t, r, y, G, C, B, F, I, H, N, T);
  }
  function b(a, b, c, d, e, f, g, k, l, m, p, t, r, y, G, C, B, F, I, H, N) {
    a = this;
    return a.m.Va ? a.m.Va(b, c, d, e, f, g, k, l, m, p, t, r, y, G, C, B, F, I, H, N) : a.m.call(null, b, c, d, e, f, g, k, l, m, p, t, r, y, G, C, B, F, I, H, N);
  }
  function c(a, b, c, d, e, f, g, k, l, m, p, t, r, y, G, C, B, F, I, H) {
    a = this;
    return a.m.Ua ? a.m.Ua(b, c, d, e, f, g, k, l, m, p, t, r, y, G, C, B, F, I, H) : a.m.call(null, b, c, d, e, f, g, k, l, m, p, t, r, y, G, C, B, F, I, H);
  }
  function d(a, b, c, d, e, f, g, k, l, m, p, t, r, y, G, C, B, F, I) {
    a = this;
    return a.m.Ta ? a.m.Ta(b, c, d, e, f, g, k, l, m, p, t, r, y, G, C, B, F, I) : a.m.call(null, b, c, d, e, f, g, k, l, m, p, t, r, y, G, C, B, F, I);
  }
  function e(a, b, c, d, e, f, g, k, l, m, p, t, r, y, G, C, B, F) {
    a = this;
    return a.m.Sa ? a.m.Sa(b, c, d, e, f, g, k, l, m, p, t, r, y, G, C, B, F) : a.m.call(null, b, c, d, e, f, g, k, l, m, p, t, r, y, G, C, B, F);
  }
  function f(a, b, c, d, e, f, g, k, l, m, p, t, r, y, G, C, B) {
    a = this;
    return a.m.Ra ? a.m.Ra(b, c, d, e, f, g, k, l, m, p, t, r, y, G, C, B) : a.m.call(null, b, c, d, e, f, g, k, l, m, p, t, r, y, G, C, B);
  }
  function g(a, b, c, d, e, f, g, k, l, m, p, t, r, y, G, C) {
    a = this;
    return a.m.Qa ? a.m.Qa(b, c, d, e, f, g, k, l, m, p, t, r, y, G, C) : a.m.call(null, b, c, d, e, f, g, k, l, m, p, t, r, y, G, C);
  }
  function k(a, b, c, d, e, f, g, k, l, m, p, t, r, y, G) {
    a = this;
    return a.m.Pa ? a.m.Pa(b, c, d, e, f, g, k, l, m, p, t, r, y, G) : a.m.call(null, b, c, d, e, f, g, k, l, m, p, t, r, y, G);
  }
  function l(a, b, c, d, e, f, g, k, l, m, p, t, r, y) {
    a = this;
    return a.m.Oa ? a.m.Oa(b, c, d, e, f, g, k, l, m, p, t, r, y) : a.m.call(null, b, c, d, e, f, g, k, l, m, p, t, r, y);
  }
  function m(a, b, c, d, e, f, g, k, l, m, p, t, r) {
    a = this;
    return a.m.Na ? a.m.Na(b, c, d, e, f, g, k, l, m, p, t, r) : a.m.call(null, b, c, d, e, f, g, k, l, m, p, t, r);
  }
  function p(a, b, c, d, e, f, g, k, l, m, p, t) {
    a = this;
    return a.m.Ma ? a.m.Ma(b, c, d, e, f, g, k, l, m, p, t) : a.m.call(null, b, c, d, e, f, g, k, l, m, p, t);
  }
  function t(a, b, c, d, e, f, g, k, l, m, p) {
    a = this;
    return a.m.La ? a.m.La(b, c, d, e, f, g, k, l, m, p) : a.m.call(null, b, c, d, e, f, g, k, l, m, p);
  }
  function r(a, b, c, d, e, f, g, k, l, m) {
    a = this;
    return a.m.Xa ? a.m.Xa(b, c, d, e, f, g, k, l, m) : a.m.call(null, b, c, d, e, f, g, k, l, m);
  }
  function y(a, b, c, d, e, f, g, k, l) {
    a = this;
    return a.m.Wa ? a.m.Wa(b, c, d, e, f, g, k, l) : a.m.call(null, b, c, d, e, f, g, k, l);
  }
  function B(a, b, c, d, e, f, g, k) {
    a = this;
    return a.m.va ? a.m.va(b, c, d, e, f, g, k) : a.m.call(null, b, c, d, e, f, g, k);
  }
  function C(a, b, c, d, e, f, g) {
    a = this;
    return a.m.ma ? a.m.ma(b, c, d, e, f, g) : a.m.call(null, b, c, d, e, f, g);
  }
  function F(a, b, c, d, e, f) {
    a = this;
    return a.m.U ? a.m.U(b, c, d, e, f) : a.m.call(null, b, c, d, e, f);
  }
  function I(a, b, c, d, e) {
    a = this;
    return a.m.n ? a.m.n(b, c, d, e) : a.m.call(null, b, c, d, e);
  }
  function N(a, b, c, d) {
    a = this;
    return a.m.j ? a.m.j(b, c, d) : a.m.call(null, b, c, d);
  }
  function H(a, b, c) {
    a = this;
    return a.m.h ? a.m.h(b, c) : a.m.call(null, b, c);
  }
  function V(a, b) {
    a = this;
    return a.m.g ? a.m.g(b) : a.m.call(null, b);
  }
  function T(a) {
    a = this;
    return a.m.v ? a.m.v() : a.m.call(null);
  }
  var G = null, G = function(G, S, ea, ka, Da, la, Oa, ta, ua, Ta, va, Ga, ib, rb, Eb, Ha, eb, ab, $, hc, yb, Fb) {
    switch(arguments.length) {
      case 1:
        return T.call(this, G);
      case 2:
        return V.call(this, G, S);
      case 3:
        return H.call(this, G, S, ea);
      case 4:
        return N.call(this, G, S, ea, ka);
      case 5:
        return I.call(this, G, S, ea, ka, Da);
      case 6:
        return F.call(this, G, S, ea, ka, Da, la);
      case 7:
        return C.call(this, G, S, ea, ka, Da, la, Oa);
      case 8:
        return B.call(this, G, S, ea, ka, Da, la, Oa, ta);
      case 9:
        return y.call(this, G, S, ea, ka, Da, la, Oa, ta, ua);
      case 10:
        return r.call(this, G, S, ea, ka, Da, la, Oa, ta, ua, Ta);
      case 11:
        return t.call(this, G, S, ea, ka, Da, la, Oa, ta, ua, Ta, va);
      case 12:
        return p.call(this, G, S, ea, ka, Da, la, Oa, ta, ua, Ta, va, Ga);
      case 13:
        return m.call(this, G, S, ea, ka, Da, la, Oa, ta, ua, Ta, va, Ga, ib);
      case 14:
        return l.call(this, G, S, ea, ka, Da, la, Oa, ta, ua, Ta, va, Ga, ib, rb);
      case 15:
        return k.call(this, G, S, ea, ka, Da, la, Oa, ta, ua, Ta, va, Ga, ib, rb, Eb);
      case 16:
        return g.call(this, G, S, ea, ka, Da, la, Oa, ta, ua, Ta, va, Ga, ib, rb, Eb, Ha);
      case 17:
        return f.call(this, G, S, ea, ka, Da, la, Oa, ta, ua, Ta, va, Ga, ib, rb, Eb, Ha, eb);
      case 18:
        return e.call(this, G, S, ea, ka, Da, la, Oa, ta, ua, Ta, va, Ga, ib, rb, Eb, Ha, eb, ab);
      case 19:
        return d.call(this, G, S, ea, ka, Da, la, Oa, ta, ua, Ta, va, Ga, ib, rb, Eb, Ha, eb, ab, $);
      case 20:
        return c.call(this, G, S, ea, ka, Da, la, Oa, ta, ua, Ta, va, Ga, ib, rb, Eb, Ha, eb, ab, $, hc);
      case 21:
        return b.call(this, G, S, ea, ka, Da, la, Oa, ta, ua, Ta, va, Ga, ib, rb, Eb, Ha, eb, ab, $, hc, yb);
      case 22:
        return a.call(this, G, S, ea, ka, Da, la, Oa, ta, ua, Ta, va, Ga, ib, rb, Eb, Ha, eb, ab, $, hc, yb, Fb);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  G.g = T;
  G.h = V;
  G.j = H;
  G.n = N;
  G.U = I;
  G.ma = F;
  G.va = C;
  G.Wa = B;
  G.Xa = y;
  G.La = r;
  G.Ma = t;
  G.Na = p;
  G.Oa = m;
  G.Pa = l;
  G.Qa = k;
  G.Ra = g;
  G.Sa = f;
  G.Ta = e;
  G.Ua = d;
  G.Va = c;
  G.wd = b;
  G.Yb = a;
  return G;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Wa(b)));
};
h.v = function() {
  return this.m.v ? this.m.v() : this.m.call(null);
};
h.g = function(a) {
  return this.m.g ? this.m.g(a) : this.m.call(null, a);
};
h.h = function(a, b) {
  return this.m.h ? this.m.h(a, b) : this.m.call(null, a, b);
};
h.j = function(a, b, c) {
  return this.m.j ? this.m.j(a, b, c) : this.m.call(null, a, b, c);
};
h.n = function(a, b, c, d) {
  return this.m.n ? this.m.n(a, b, c, d) : this.m.call(null, a, b, c, d);
};
h.U = function(a, b, c, d, e) {
  return this.m.U ? this.m.U(a, b, c, d, e) : this.m.call(null, a, b, c, d, e);
};
h.ma = function(a, b, c, d, e, f) {
  return this.m.ma ? this.m.ma(a, b, c, d, e, f) : this.m.call(null, a, b, c, d, e, f);
};
h.va = function(a, b, c, d, e, f, g) {
  return this.m.va ? this.m.va(a, b, c, d, e, f, g) : this.m.call(null, a, b, c, d, e, f, g);
};
h.Wa = function(a, b, c, d, e, f, g, k) {
  return this.m.Wa ? this.m.Wa(a, b, c, d, e, f, g, k) : this.m.call(null, a, b, c, d, e, f, g, k);
};
h.Xa = function(a, b, c, d, e, f, g, k, l) {
  return this.m.Xa ? this.m.Xa(a, b, c, d, e, f, g, k, l) : this.m.call(null, a, b, c, d, e, f, g, k, l);
};
h.La = function(a, b, c, d, e, f, g, k, l, m) {
  return this.m.La ? this.m.La(a, b, c, d, e, f, g, k, l, m) : this.m.call(null, a, b, c, d, e, f, g, k, l, m);
};
h.Ma = function(a, b, c, d, e, f, g, k, l, m, p) {
  return this.m.Ma ? this.m.Ma(a, b, c, d, e, f, g, k, l, m, p) : this.m.call(null, a, b, c, d, e, f, g, k, l, m, p);
};
h.Na = function(a, b, c, d, e, f, g, k, l, m, p, t) {
  return this.m.Na ? this.m.Na(a, b, c, d, e, f, g, k, l, m, p, t) : this.m.call(null, a, b, c, d, e, f, g, k, l, m, p, t);
};
h.Oa = function(a, b, c, d, e, f, g, k, l, m, p, t, r) {
  return this.m.Oa ? this.m.Oa(a, b, c, d, e, f, g, k, l, m, p, t, r) : this.m.call(null, a, b, c, d, e, f, g, k, l, m, p, t, r);
};
h.Pa = function(a, b, c, d, e, f, g, k, l, m, p, t, r, y) {
  return this.m.Pa ? this.m.Pa(a, b, c, d, e, f, g, k, l, m, p, t, r, y) : this.m.call(null, a, b, c, d, e, f, g, k, l, m, p, t, r, y);
};
h.Qa = function(a, b, c, d, e, f, g, k, l, m, p, t, r, y, B) {
  return this.m.Qa ? this.m.Qa(a, b, c, d, e, f, g, k, l, m, p, t, r, y, B) : this.m.call(null, a, b, c, d, e, f, g, k, l, m, p, t, r, y, B);
};
h.Ra = function(a, b, c, d, e, f, g, k, l, m, p, t, r, y, B, C) {
  return this.m.Ra ? this.m.Ra(a, b, c, d, e, f, g, k, l, m, p, t, r, y, B, C) : this.m.call(null, a, b, c, d, e, f, g, k, l, m, p, t, r, y, B, C);
};
h.Sa = function(a, b, c, d, e, f, g, k, l, m, p, t, r, y, B, C, F) {
  return this.m.Sa ? this.m.Sa(a, b, c, d, e, f, g, k, l, m, p, t, r, y, B, C, F) : this.m.call(null, a, b, c, d, e, f, g, k, l, m, p, t, r, y, B, C, F);
};
h.Ta = function(a, b, c, d, e, f, g, k, l, m, p, t, r, y, B, C, F, I) {
  return this.m.Ta ? this.m.Ta(a, b, c, d, e, f, g, k, l, m, p, t, r, y, B, C, F, I) : this.m.call(null, a, b, c, d, e, f, g, k, l, m, p, t, r, y, B, C, F, I);
};
h.Ua = function(a, b, c, d, e, f, g, k, l, m, p, t, r, y, B, C, F, I, N) {
  return this.m.Ua ? this.m.Ua(a, b, c, d, e, f, g, k, l, m, p, t, r, y, B, C, F, I, N) : this.m.call(null, a, b, c, d, e, f, g, k, l, m, p, t, r, y, B, C, F, I, N);
};
h.Va = function(a, b, c, d, e, f, g, k, l, m, p, t, r, y, B, C, F, I, N, H) {
  return this.m.Va ? this.m.Va(a, b, c, d, e, f, g, k, l, m, p, t, r, y, B, C, F, I, N, H) : this.m.call(null, a, b, c, d, e, f, g, k, l, m, p, t, r, y, B, C, F, I, N, H);
};
h.wd = function(a, b, c, d, e, f, g, k, l, m, p, t, r, y, B, C, F, I, N, H, V) {
  var T = this.m;
  return Fe.Yb ? Fe.Yb(T, a, b, c, d, e, f, g, k, l, m, p, t, r, y, B, C, F, I, N, H, V) : Fe.call(null, T, a, b, c, d, e, f, g, k, l, m, p, t, r, y, B, C, F, I, N, H, V);
};
h.td = !0;
h.N = function(a, b) {
  return new Ee(this.m, b);
};
h.L = function() {
  return this.w;
};
function je(a, b) {
  return De(a) && !(a ? a.o & 262144 || a.Qe || (a.o ? 0 : Sa(gc, a)) : Sa(gc, a)) ? new Ee(a, b) : null == a ? null : ic(a, b);
}
function Ge(a) {
  var b = null != a;
  return(b ? a ? a.o & 131072 || a.zd || (a.o ? 0 : Sa(Wb, a)) : Sa(Wb, a) : b) ? fc(a) : null;
}
function He(a) {
  return null == a || Ra(z(a));
}
function Qe(a) {
  return null == a ? !1 : a ? a.o & 8 || a.Ke ? !0 : a.o ? !1 : Sa(jb, a) : Sa(jb, a);
}
function Re(a) {
  return null == a ? !1 : a ? a.o & 4096 || a.Oe ? !0 : a.o ? !1 : Sa(Ob, a) : Sa(Ob, a);
}
function Se(a) {
  return a ? a.o & 16777216 || a.Ne ? !0 : a.o ? !1 : Sa(wc, a) : Sa(wc, a);
}
function Te(a) {
  return null == a ? !1 : a ? a.o & 1024 || a.xd ? !0 : a.o ? !1 : Sa(Db, a) : Sa(Db, a);
}
function Ue(a) {
  return a ? a.o & 16384 || a.Pe ? !0 : a.o ? !1 : Sa(Qb, a) : Sa(Qb, a);
}
function P(a) {
  return a ? a.F & 512 || a.Je ? !0 : !1 : !1;
}
function Ve(a) {
  var b = [];
  ra(a, function(a, b) {
    return function(a, c) {
      return b.push(c);
    };
  }(a, b));
  return b;
}
function We(a, b, c, d, e) {
  for (;0 !== e;) {
    c[d] = a[b], d += 1, e -= 1, b += 1;
  }
}
function Xe(a, b, c, d, e) {
  b += e - 1;
  for (d += e - 1;0 !== e;) {
    c[d] = a[b], d -= 1, e -= 1, b -= 1;
  }
}
var Ye = {};
function Ze(a) {
  return null == a ? !1 : a ? a.o & 64 || a.Lb ? !0 : a.o ? !1 : Sa(pb, a) : Sa(pb, a);
}
function $e(a) {
  return q(a) ? !0 : !1;
}
function af(a, b) {
  return O.j(a, b, Ye) === Ye ? !1 : !0;
}
function bf(a, b) {
  var c;
  if (c = null != a) {
    c = a ? a.o & 512 || a.Ie ? !0 : a.o ? !1 : Sa(xb, a) : Sa(xb, a);
  }
  return c && af(a, b) ? new Q(null, 2, 5, R, [b, O.h(a, b)], null) : null;
}
function Ed(a, b) {
  if (a === b) {
    return 0;
  }
  if (null == a) {
    return-1;
  }
  if (null == b) {
    return 1;
  }
  if (Ua(a) === Ua(b)) {
    return a && (a.F & 2048 || a.Wb) ? a.Xb(null, b) : Aa(a, b);
  }
  throw Error("compare on non-nil objects of different types");
}
var cf = function() {
  function a(a, b, c, g) {
    for (;;) {
      var k = Ed(M.h(a, g), M.h(b, g));
      if (0 === k && g + 1 < c) {
        g += 1;
      } else {
        return k;
      }
    }
  }
  function b(a, b) {
    var f = L(a), g = L(b);
    return f < g ? -1 : f > g ? 1 : c.n(a, b, f, 0);
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
  c.n = a;
  return c;
}();
function df(a) {
  return x.h(a, Ed) ? Ed : function(b, c) {
    var d = a.h ? a.h(b, c) : a.call(null, b, c);
    return "number" === typeof d ? d : q(d) ? -1 : q(a.h ? a.h(c, b) : a.call(null, c, b)) ? 1 : 0;
  };
}
var ff = function() {
  function a(a, b) {
    if (z(b)) {
      var c = ef.g ? ef.g(b) : ef.call(null, b), g = df(a);
      Ba(c, g);
      return z(c);
    }
    return Hd;
  }
  function b(a) {
    return c.h(Ed, a);
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
}(), gf = function() {
  function a(a, b, c) {
    return ff.h(function(c, f) {
      return df(b).call(null, a.g ? a.g(c) : a.call(null, c), a.g ? a.g(f) : a.call(null, f));
    }, c);
  }
  function b(a, b) {
    return c.j(a, Ed, b);
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
}(), ke = function() {
  function a(a, b, c) {
    for (c = z(c);;) {
      if (c) {
        var g = A(c);
        b = a.h ? a.h(b, g) : a.call(null, b, g);
        if ($d(b)) {
          return Vb(b);
        }
        c = E(c);
      } else {
        return b;
      }
    }
  }
  function b(a, b) {
    var c = z(b);
    if (c) {
      var g = A(c), c = E(c);
      return Xa.j ? Xa.j(a, g, c) : Xa.call(null, a, g, c);
    }
    return a.v ? a.v() : a.call(null);
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
}(), Xa = function() {
  function a(a, b, c) {
    return c && (c.o & 524288 || c.Bd) ? c.ca(null, a, b) : c instanceof Array ? be.j(c, a, b) : "string" === typeof c ? be.j(c, a, b) : Sa(jc, c) ? kc.j(c, a, b) : ke.j(a, b, c);
  }
  function b(a, b) {
    return b && (b.o & 524288 || b.Bd) ? b.ba(null, a) : b instanceof Array ? be.h(b, a) : "string" === typeof b ? be.h(b, a) : Sa(jc, b) ? kc.h(b, a) : ke.h(a, b);
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
function hf(a, b, c) {
  return null != c ? lc(c, a, b) : b;
}
function jf(a) {
  return a;
}
var kf = function() {
  function a(a, b, c, g) {
    a = a.g ? a.g(b) : a.call(null, b);
    c = Xa.j(a, c, g);
    return a.g ? a.g(c) : a.call(null, c);
  }
  function b(a, b, f) {
    return c.n(a, b, b.v ? b.v() : b.call(null), f);
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
  c.n = a;
  return c;
}(), lf = function() {
  var a = null, b = function() {
    function b(a, c, g) {
      var k = null;
      2 < arguments.length && (k = J(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, a, c, k);
    }
    function d(b, c, d) {
      return Xa.j(a, b + c, d);
    }
    b.C = 2;
    b.p = function(a) {
      var b = A(a);
      a = E(a);
      var c = A(a);
      a = D(a);
      return d(b, c, a);
    };
    b.l = d;
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
        return b.l(a, d, J(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.C = 2;
  a.p = b.p;
  a.v = function() {
    return 0;
  };
  a.g = function(a) {
    return a;
  };
  a.h = function(a, b) {
    return a + b;
  };
  a.l = b.l;
  return a;
}(), mf = function() {
  var a = null, b = function() {
    function b(a, c, g) {
      var k = null;
      2 < arguments.length && (k = J(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, a, c, k);
    }
    function d(b, c, d) {
      return Xa.j(a, b * c, d);
    }
    b.C = 2;
    b.p = function(a) {
      var b = A(a);
      a = E(a);
      var c = A(a);
      a = D(a);
      return d(b, c, a);
    };
    b.l = d;
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
        return b.l(a, d, J(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.C = 2;
  a.p = b.p;
  a.v = function() {
    return 1;
  };
  a.g = function(a) {
    return a;
  };
  a.h = function(a, b) {
    return a * b;
  };
  a.l = b.l;
  return a;
}(), nf = function() {
  var a = null, b = function() {
    function a(c, f, g) {
      var k = null;
      2 < arguments.length && (k = J(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, f, k);
    }
    function b(a, c, d) {
      for (;;) {
        if (a > c) {
          if (E(d)) {
            a = c, c = A(d), d = E(d);
          } else {
            return c > A(d);
          }
        } else {
          return!1;
        }
      }
    }
    a.C = 2;
    a.p = function(a) {
      var c = A(a);
      a = E(a);
      var g = A(a);
      a = D(a);
      return b(c, g, a);
    };
    a.l = b;
    return a;
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a > d;
      default:
        return b.l(a, d, J(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.C = 2;
  a.p = b.p;
  a.g = function() {
    return!0;
  };
  a.h = function(a, b) {
    return a > b;
  };
  a.l = b.l;
  return a;
}();
function of(a) {
  return a - 1;
}
var pf = function() {
  function a(a, b) {
    return a > b ? a : b;
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = J(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      return Xa.j(b, a > d ? a : d, e);
    }
    a.C = 2;
    a.p = function(a) {
      var b = A(a);
      a = E(a);
      var d = A(a);
      a = D(a);
      return c(b, d, a);
    };
    a.l = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.l(b, e, J(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.C = 2;
  b.p = c.p;
  b.g = function(a) {
    return a;
  };
  b.h = a;
  b.l = c.l;
  return b;
}();
function qf(a) {
  return 0 <= a ? Math.floor.g ? Math.floor.g(a) : Math.floor.call(null, a) : Math.ceil.g ? Math.ceil.g(a) : Math.ceil.call(null, a);
}
function rf(a, b) {
  return qf((a - a % b) / b);
}
var sf = function() {
  function a(a) {
    return a * c.v();
  }
  function b() {
    return Math.random.v ? Math.random.v() : Math.random.call(null);
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
  c.v = b;
  c.g = a;
  return c;
}();
function tf(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24;
}
function uf(a) {
  var b = 1;
  for (a = z(a);;) {
    if (a && 0 < b) {
      b -= 1, a = E(a);
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
      var k = null;
      1 < arguments.length && (k = J(Array.prototype.slice.call(arguments, 1), 0));
      return c.call(this, b, k);
    }
    function c(a, d) {
      for (var e = new wa(b.g(a)), l = d;;) {
        if (q(l)) {
          e = e.append(b.g(A(l))), l = E(l);
        } else {
          return e.toString();
        }
      }
    }
    a.C = 1;
    a.p = function(a) {
      var b = A(a);
      a = D(a);
      return c(b, a);
    };
    a.l = c;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 0:
        return "";
      case 1:
        return a.call(this, b);
      default:
        return c.l(b, J(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.C = 1;
  b.p = c.p;
  b.v = function() {
    return "";
  };
  b.g = a;
  b.l = c.l;
  return b;
}(), vf = function() {
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
function ge(a, b) {
  var c;
  if (Se(b)) {
    if (ce(a) && ce(b) && L(a) !== L(b)) {
      c = !1;
    } else {
      a: {
        c = z(a);
        for (var d = z(b);;) {
          if (null == c) {
            c = null == d;
            break a;
          }
          if (null != d && x.h(A(c), A(d))) {
            c = E(c), d = E(d);
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
  return $e(c);
}
function wf(a) {
  var b = 0;
  for (a = z(a);;) {
    if (a) {
      var c = A(a), b = (b + (Bd(function() {
        var a = c;
        return xf.g ? xf.g(a) : xf.call(null, a);
      }()) ^ Bd(function() {
        var a = c;
        return Jf.g ? Jf.g(a) : Jf.call(null, a);
      }()))) % 4503599627370496;
      a = E(a);
    } else {
      return b;
    }
  }
}
function Kf(a, b, c, d, e) {
  this.w = a;
  this.first = b;
  this.ab = c;
  this.count = d;
  this.A = e;
  this.o = 65937646;
  this.F = 8192;
}
h = Kf.prototype;
h.toString = function() {
  return gd(this);
};
h.L = function() {
  return this.w;
};
h.ha = function() {
  return 1 === this.count ? null : this.ab;
};
h.T = function() {
  return this.count;
};
h.fb = function() {
  return this.first;
};
h.O = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Jd(this);
};
h.M = function(a, b) {
  return ge(this, b);
};
h.Z = function() {
  return Hd;
};
h.ba = function(a, b) {
  return ke.h(b, this);
};
h.ca = function(a, b, c) {
  return ke.j(b, c, this);
};
h.$ = function() {
  return this.first;
};
h.fa = function() {
  return 1 === this.count ? Hd : this.ab;
};
h.P = function() {
  return this;
};
h.N = function(a, b) {
  return new Kf(b, this.first, this.ab, this.count, this.A);
};
h.R = function(a, b) {
  return new Kf(this.w, b, this, this.count + 1, null);
};
function Lf(a) {
  this.w = a;
  this.o = 65937614;
  this.F = 8192;
}
h = Lf.prototype;
h.toString = function() {
  return gd(this);
};
h.L = function() {
  return this.w;
};
h.ha = function() {
  return null;
};
h.T = function() {
  return 0;
};
h.fb = function() {
  return null;
};
h.O = function() {
  return 0;
};
h.M = function(a, b) {
  return ge(this, b);
};
h.Z = function() {
  return this;
};
h.ba = function(a, b) {
  return ke.h(b, this);
};
h.ca = function(a, b, c) {
  return ke.j(b, c, this);
};
h.$ = function() {
  return null;
};
h.fa = function() {
  return Hd;
};
h.P = function() {
  return null;
};
h.N = function(a, b) {
  return new Lf(b);
};
h.R = function(a, b) {
  return new Kf(this.w, b, null, 1, null);
};
var Hd = new Lf(null);
function Mf(a) {
  return(a ? a.o & 134217728 || a.Me || (a.o ? 0 : Sa(Cc, a)) : Sa(Cc, a)) ? Dc(a) : Xa.j(ne, Hd, a);
}
var Nf = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = J(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b;
    if (a instanceof Gd && 0 === a.D) {
      b = a.k;
    } else {
      a: {
        for (b = [];;) {
          if (null != a) {
            b.push(a.$(null)), a = a.ha(null);
          } else {
            break a;
          }
        }
        b = void 0;
      }
    }
    a = b.length;
    for (var e = Hd;;) {
      if (0 < a) {
        var f = a - 1, e = e.R(null, b[a - 1]);
        a = f;
      } else {
        return e;
      }
    }
  }
  a.C = 0;
  a.p = function(a) {
    a = z(a);
    return b(a);
  };
  a.l = b;
  return a;
}();
function Of(a, b, c, d) {
  this.w = a;
  this.first = b;
  this.ab = c;
  this.A = d;
  this.o = 65929452;
  this.F = 8192;
}
h = Of.prototype;
h.toString = function() {
  return gd(this);
};
h.L = function() {
  return this.w;
};
h.ha = function() {
  return null == this.ab ? null : z(this.ab);
};
h.O = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Jd(this);
};
h.M = function(a, b) {
  return ge(this, b);
};
h.Z = function() {
  return je(Hd, this.w);
};
h.ba = function(a, b) {
  return ke.h(b, this);
};
h.ca = function(a, b, c) {
  return ke.j(b, c, this);
};
h.$ = function() {
  return this.first;
};
h.fa = function() {
  return null == this.ab ? Hd : this.ab;
};
h.P = function() {
  return this;
};
h.N = function(a, b) {
  return new Of(b, this.first, this.ab, this.A);
};
h.R = function(a, b) {
  return new Of(null, b, this, this.A);
};
function he(a, b) {
  var c = null == b;
  return(c ? c : b && (b.o & 64 || b.Lb)) ? new Of(null, a, b, null) : new Of(null, a, z(b), null);
}
function U(a, b, c, d) {
  this.Ga = a;
  this.name = b;
  this.na = c;
  this.tb = d;
  this.o = 2153775105;
  this.F = 4096;
}
h = U.prototype;
h.K = function(a, b) {
  return Ec(b, ":" + u.g(this.na));
};
h.O = function() {
  var a = this.tb;
  return null != a ? a : this.tb = a = Cd(ld(this.name), Ad(this.Ga)) + 2654435769 | 0;
};
h.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return O.h(c, this);
      case 3:
        return O.j(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.h = function(a, c) {
    return O.h(c, this);
  };
  a.j = function(a, c, d) {
    return O.j(c, this, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Wa(b)));
};
h.g = function(a) {
  return O.h(a, this);
};
h.h = function(a, b) {
  return O.j(a, this, b);
};
h.M = function(a, b) {
  return b instanceof U ? this.na === b.na : !1;
};
h.toString = function() {
  return ":" + u.g(this.na);
};
function Pf(a, b) {
  return a === b ? !0 : a instanceof U && b instanceof U ? a.na === b.na : !1;
}
var Rf = function() {
  function a(a, b) {
    return new U(a, b, "" + u.g(q(a) ? "" + u.g(a) + "/" : null) + u.g(b), null);
  }
  function b(a) {
    if (a instanceof U) {
      return a;
    }
    if (a instanceof Fd) {
      var b;
      if (a && (a.F & 4096 || a.Ad)) {
        b = a.Ga;
      } else {
        throw Error("Doesn't support namespace: " + u.g(a));
      }
      return new U(b, Qf.g ? Qf.g(a) : Qf.call(null, a), a.lb, null);
    }
    return "string" === typeof a ? (b = a.split("/"), 2 === b.length ? new U(b[0], b[1], a, null) : new U(null, b[0], a, null)) : null;
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
function Sf(a, b, c, d) {
  this.w = a;
  this.Bb = b;
  this.aa = c;
  this.A = d;
  this.F = 0;
  this.o = 32374988;
}
h = Sf.prototype;
h.toString = function() {
  return gd(this);
};
function Tf(a) {
  null != a.Bb && (a.aa = a.Bb.v ? a.Bb.v() : a.Bb.call(null), a.Bb = null);
  return a.aa;
}
h.L = function() {
  return this.w;
};
h.ha = function() {
  vc(this);
  return null == this.aa ? null : E(this.aa);
};
h.O = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Jd(this);
};
h.M = function(a, b) {
  return ge(this, b);
};
h.Z = function() {
  return je(Hd, this.w);
};
h.ba = function(a, b) {
  return ke.h(b, this);
};
h.ca = function(a, b, c) {
  return ke.j(b, c, this);
};
h.$ = function() {
  vc(this);
  return null == this.aa ? null : A(this.aa);
};
h.fa = function() {
  vc(this);
  return null != this.aa ? D(this.aa) : Hd;
};
h.P = function() {
  Tf(this);
  if (null == this.aa) {
    return null;
  }
  for (var a = this.aa;;) {
    if (a instanceof Sf) {
      a = Tf(a);
    } else {
      return this.aa = a, z(this.aa);
    }
  }
};
h.N = function(a, b) {
  return new Sf(b, this.Bb, this.aa, this.A);
};
h.R = function(a, b) {
  return he(b, this);
};
function Uf(a, b) {
  this.W = a;
  this.end = b;
  this.F = 0;
  this.o = 2;
}
Uf.prototype.T = function() {
  return this.end;
};
Uf.prototype.add = function(a) {
  this.W[this.end] = a;
  return this.end += 1;
};
Uf.prototype.Q = function() {
  var a = new Vf(this.W, 0, this.end);
  this.W = null;
  return a;
};
function Wf(a) {
  return new Uf(Array(a), 0);
}
function Vf(a, b, c) {
  this.k = a;
  this.ga = b;
  this.end = c;
  this.F = 0;
  this.o = 524306;
}
h = Vf.prototype;
h.ba = function(a, b) {
  return be.n(this.k, b, this.k[this.ga], this.ga + 1);
};
h.ca = function(a, b, c) {
  return be.n(this.k, b, c, this.ga);
};
h.Ic = function() {
  if (this.ga === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new Vf(this.k, this.ga + 1, this.end);
};
h.B = function(a, b) {
  return this.k[this.ga + b];
};
h.wa = function(a, b, c) {
  return 0 <= b && b < this.end - this.ga ? this.k[this.ga + b] : c;
};
h.T = function() {
  return this.end - this.ga;
};
var Xf = function() {
  function a(a, b, c) {
    return new Vf(a, b, c);
  }
  function b(a, b) {
    return new Vf(a, b, a.length);
  }
  function c(a) {
    return new Vf(a, 0, a.length);
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
function Yf(a, b, c, d) {
  this.Q = a;
  this.Ia = b;
  this.w = c;
  this.A = d;
  this.o = 31850732;
  this.F = 1536;
}
h = Yf.prototype;
h.toString = function() {
  return gd(this);
};
h.L = function() {
  return this.w;
};
h.ha = function() {
  if (1 < bb(this.Q)) {
    return new Yf(ad(this.Q), this.Ia, this.w, null);
  }
  var a = vc(this.Ia);
  return null == a ? null : a;
};
h.O = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Jd(this);
};
h.M = function(a, b) {
  return ge(this, b);
};
h.Z = function() {
  return je(Hd, this.w);
};
h.$ = function() {
  return ob.h(this.Q, 0);
};
h.fa = function() {
  return 1 < bb(this.Q) ? new Yf(ad(this.Q), this.Ia, this.w, null) : null == this.Ia ? Hd : this.Ia;
};
h.P = function() {
  return this;
};
h.oc = function() {
  return this.Q;
};
h.pc = function() {
  return null == this.Ia ? Hd : this.Ia;
};
h.N = function(a, b) {
  return new Yf(this.Q, this.Ia, b, this.A);
};
h.R = function(a, b) {
  return he(b, this);
};
h.nc = function() {
  return null == this.Ia ? null : this.Ia;
};
function Zf(a, b) {
  return 0 === bb(a) ? b : new Yf(a, b, null, null);
}
function $f(a, b) {
  a.add(b);
}
function ef(a) {
  for (var b = [];;) {
    if (z(a)) {
      b.push(A(a)), a = E(a);
    } else {
      return b;
    }
  }
}
function ag(a, b) {
  if (ce(a)) {
    return L(a);
  }
  for (var c = a, d = b, e = 0;;) {
    if (0 < d && z(c)) {
      c = E(c), d -= 1, e += 1;
    } else {
      return e;
    }
  }
}
var cg = function bg(b) {
  return null == b ? null : null == E(b) ? z(A(b)) : he(A(b), bg(E(b)));
}, dg = function() {
  function a(a, b) {
    return new Sf(null, function() {
      var c = z(a);
      return c ? P(c) ? Zf(v(c), d.h(w(c), b)) : he(A(c), d.h(D(c), b)) : b;
    }, null, null);
  }
  function b(a) {
    return new Sf(null, function() {
      return a;
    }, null, null);
  }
  function c() {
    return new Sf(null, function() {
      return null;
    }, null, null);
  }
  var d = null, e = function() {
    function a(c, d, e) {
      var f = null;
      2 < arguments.length && (f = J(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, f);
    }
    function b(a, c, e) {
      return function t(a, b) {
        return new Sf(null, function() {
          var c = z(a);
          return c ? P(c) ? Zf(v(c), t(w(c), b)) : he(A(c), t(D(c), b)) : q(b) ? t(A(b), E(b)) : null;
        }, null, null);
      }(d.h(a, c), e);
    }
    a.C = 2;
    a.p = function(a) {
      var c = A(a);
      a = E(a);
      var d = A(a);
      a = D(a);
      return b(c, d, a);
    };
    a.l = b;
    return a;
  }(), d = function(d, g, k) {
    switch(arguments.length) {
      case 0:
        return c.call(this);
      case 1:
        return b.call(this, d);
      case 2:
        return a.call(this, d, g);
      default:
        return e.l(d, g, J(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.C = 2;
  d.p = e.p;
  d.v = c;
  d.g = b;
  d.h = a;
  d.l = e.l;
  return d;
}(), eg = function() {
  function a(a, b, c, d) {
    return he(a, he(b, he(c, d)));
  }
  function b(a, b, c) {
    return he(a, he(b, c));
  }
  var c = null, d = function() {
    function a(c, d, e, m, p) {
      var t = null;
      4 < arguments.length && (t = J(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, m, t);
    }
    function b(a, c, d, e, f) {
      return he(a, he(c, he(d, he(e, cg(f)))));
    }
    a.C = 4;
    a.p = function(a) {
      var c = A(a);
      a = E(a);
      var d = A(a);
      a = E(a);
      var e = A(a);
      a = E(a);
      var p = A(a);
      a = D(a);
      return b(c, d, e, p, a);
    };
    a.l = b;
    return a;
  }(), c = function(c, f, g, k, l) {
    switch(arguments.length) {
      case 1:
        return z(c);
      case 2:
        return he(c, f);
      case 3:
        return b.call(this, c, f, g);
      case 4:
        return a.call(this, c, f, g, k);
      default:
        return d.l(c, f, g, k, J(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.C = 4;
  c.p = d.p;
  c.g = function(a) {
    return z(a);
  };
  c.h = function(a, b) {
    return he(a, b);
  };
  c.j = b;
  c.n = a;
  c.l = d.l;
  return c;
}();
function fg(a) {
  return Tc(a);
}
var gg = function() {
  function a() {
    return Rc(me);
  }
  var b = null, c = function() {
    function a(c, d, k) {
      var l = null;
      2 < arguments.length && (l = J(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      for (;;) {
        if (a = Sc(a, c), q(d)) {
          c = A(d), d = E(d);
        } else {
          return a;
        }
      }
    }
    a.C = 2;
    a.p = function(a) {
      var c = A(a);
      a = E(a);
      var d = A(a);
      a = D(a);
      return b(c, d, a);
    };
    a.l = b;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 0:
        return a.call(this);
      case 1:
        return b;
      case 2:
        return Sc(b, e);
      default:
        return c.l(b, e, J(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.C = 2;
  b.p = c.p;
  b.v = a;
  b.g = function(a) {
    return a;
  };
  b.h = function(a, b) {
    return Sc(a, b);
  };
  b.l = c.l;
  return b;
}(), hg = function() {
  var a = null, b = function() {
    function a(c, f, g, k) {
      var l = null;
      3 < arguments.length && (l = J(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, f, g, l);
    }
    function b(a, c, d, k) {
      for (;;) {
        if (a = Uc(a, c, d), q(k)) {
          c = A(k), d = A(E(k)), k = E(E(k));
        } else {
          return a;
        }
      }
    }
    a.C = 3;
    a.p = function(a) {
      var c = A(a);
      a = E(a);
      var g = A(a);
      a = E(a);
      var k = A(a);
      a = D(a);
      return b(c, g, k, a);
    };
    a.l = b;
    return a;
  }(), a = function(a, d, e, f) {
    switch(arguments.length) {
      case 3:
        return Uc(a, d, e);
      default:
        return b.l(a, d, e, J(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.C = 3;
  a.p = b.p;
  a.j = function(a, b, e) {
    return Uc(a, b, e);
  };
  a.l = b.l;
  return a;
}();
function ig(a, b, c) {
  var d = z(c);
  if (0 === b) {
    return a.v ? a.v() : a.call(null);
  }
  c = qb(d);
  var e = sb(d);
  if (1 === b) {
    return a.g ? a.g(c) : a.g ? a.g(c) : a.call(null, c);
  }
  var d = qb(e), f = sb(e);
  if (2 === b) {
    return a.h ? a.h(c, d) : a.h ? a.h(c, d) : a.call(null, c, d);
  }
  var e = qb(f), g = sb(f);
  if (3 === b) {
    return a.j ? a.j(c, d, e) : a.j ? a.j(c, d, e) : a.call(null, c, d, e);
  }
  var f = qb(g), k = sb(g);
  if (4 === b) {
    return a.n ? a.n(c, d, e, f) : a.n ? a.n(c, d, e, f) : a.call(null, c, d, e, f);
  }
  var g = qb(k), l = sb(k);
  if (5 === b) {
    return a.U ? a.U(c, d, e, f, g) : a.U ? a.U(c, d, e, f, g) : a.call(null, c, d, e, f, g);
  }
  var k = qb(l), m = sb(l);
  if (6 === b) {
    return a.ma ? a.ma(c, d, e, f, g, k) : a.ma ? a.ma(c, d, e, f, g, k) : a.call(null, c, d, e, f, g, k);
  }
  var l = qb(m), p = sb(m);
  if (7 === b) {
    return a.va ? a.va(c, d, e, f, g, k, l) : a.va ? a.va(c, d, e, f, g, k, l) : a.call(null, c, d, e, f, g, k, l);
  }
  var m = qb(p), t = sb(p);
  if (8 === b) {
    return a.Wa ? a.Wa(c, d, e, f, g, k, l, m) : a.Wa ? a.Wa(c, d, e, f, g, k, l, m) : a.call(null, c, d, e, f, g, k, l, m);
  }
  var p = qb(t), r = sb(t);
  if (9 === b) {
    return a.Xa ? a.Xa(c, d, e, f, g, k, l, m, p) : a.Xa ? a.Xa(c, d, e, f, g, k, l, m, p) : a.call(null, c, d, e, f, g, k, l, m, p);
  }
  var t = qb(r), y = sb(r);
  if (10 === b) {
    return a.La ? a.La(c, d, e, f, g, k, l, m, p, t) : a.La ? a.La(c, d, e, f, g, k, l, m, p, t) : a.call(null, c, d, e, f, g, k, l, m, p, t);
  }
  var r = qb(y), B = sb(y);
  if (11 === b) {
    return a.Ma ? a.Ma(c, d, e, f, g, k, l, m, p, t, r) : a.Ma ? a.Ma(c, d, e, f, g, k, l, m, p, t, r) : a.call(null, c, d, e, f, g, k, l, m, p, t, r);
  }
  var y = qb(B), C = sb(B);
  if (12 === b) {
    return a.Na ? a.Na(c, d, e, f, g, k, l, m, p, t, r, y) : a.Na ? a.Na(c, d, e, f, g, k, l, m, p, t, r, y) : a.call(null, c, d, e, f, g, k, l, m, p, t, r, y);
  }
  var B = qb(C), F = sb(C);
  if (13 === b) {
    return a.Oa ? a.Oa(c, d, e, f, g, k, l, m, p, t, r, y, B) : a.Oa ? a.Oa(c, d, e, f, g, k, l, m, p, t, r, y, B) : a.call(null, c, d, e, f, g, k, l, m, p, t, r, y, B);
  }
  var C = qb(F), I = sb(F);
  if (14 === b) {
    return a.Pa ? a.Pa(c, d, e, f, g, k, l, m, p, t, r, y, B, C) : a.Pa ? a.Pa(c, d, e, f, g, k, l, m, p, t, r, y, B, C) : a.call(null, c, d, e, f, g, k, l, m, p, t, r, y, B, C);
  }
  var F = qb(I), N = sb(I);
  if (15 === b) {
    return a.Qa ? a.Qa(c, d, e, f, g, k, l, m, p, t, r, y, B, C, F) : a.Qa ? a.Qa(c, d, e, f, g, k, l, m, p, t, r, y, B, C, F) : a.call(null, c, d, e, f, g, k, l, m, p, t, r, y, B, C, F);
  }
  var I = qb(N), H = sb(N);
  if (16 === b) {
    return a.Ra ? a.Ra(c, d, e, f, g, k, l, m, p, t, r, y, B, C, F, I) : a.Ra ? a.Ra(c, d, e, f, g, k, l, m, p, t, r, y, B, C, F, I) : a.call(null, c, d, e, f, g, k, l, m, p, t, r, y, B, C, F, I);
  }
  var N = qb(H), V = sb(H);
  if (17 === b) {
    return a.Sa ? a.Sa(c, d, e, f, g, k, l, m, p, t, r, y, B, C, F, I, N) : a.Sa ? a.Sa(c, d, e, f, g, k, l, m, p, t, r, y, B, C, F, I, N) : a.call(null, c, d, e, f, g, k, l, m, p, t, r, y, B, C, F, I, N);
  }
  var H = qb(V), T = sb(V);
  if (18 === b) {
    return a.Ta ? a.Ta(c, d, e, f, g, k, l, m, p, t, r, y, B, C, F, I, N, H) : a.Ta ? a.Ta(c, d, e, f, g, k, l, m, p, t, r, y, B, C, F, I, N, H) : a.call(null, c, d, e, f, g, k, l, m, p, t, r, y, B, C, F, I, N, H);
  }
  V = qb(T);
  T = sb(T);
  if (19 === b) {
    return a.Ua ? a.Ua(c, d, e, f, g, k, l, m, p, t, r, y, B, C, F, I, N, H, V) : a.Ua ? a.Ua(c, d, e, f, g, k, l, m, p, t, r, y, B, C, F, I, N, H, V) : a.call(null, c, d, e, f, g, k, l, m, p, t, r, y, B, C, F, I, N, H, V);
  }
  var G = qb(T);
  sb(T);
  if (20 === b) {
    return a.Va ? a.Va(c, d, e, f, g, k, l, m, p, t, r, y, B, C, F, I, N, H, V, G) : a.Va ? a.Va(c, d, e, f, g, k, l, m, p, t, r, y, B, C, F, I, N, H, V, G) : a.call(null, c, d, e, f, g, k, l, m, p, t, r, y, B, C, F, I, N, H, V, G);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var Fe = function() {
  function a(a, b, c, d, e) {
    b = eg.n(b, c, d, e);
    c = a.C;
    return a.p ? (d = ag(b, c + 1), d <= c ? ig(a, d, b) : a.p(b)) : a.apply(a, ef(b));
  }
  function b(a, b, c, d) {
    b = eg.j(b, c, d);
    c = a.C;
    return a.p ? (d = ag(b, c + 1), d <= c ? ig(a, d, b) : a.p(b)) : a.apply(a, ef(b));
  }
  function c(a, b, c) {
    b = eg.h(b, c);
    c = a.C;
    if (a.p) {
      var d = ag(b, c + 1);
      return d <= c ? ig(a, d, b) : a.p(b);
    }
    return a.apply(a, ef(b));
  }
  function d(a, b) {
    var c = a.C;
    if (a.p) {
      var d = ag(b, c + 1);
      return d <= c ? ig(a, d, b) : a.p(b);
    }
    return a.apply(a, ef(b));
  }
  var e = null, f = function() {
    function a(c, d, e, f, g, y) {
      var B = null;
      5 < arguments.length && (B = J(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, e, f, g, B);
    }
    function b(a, c, d, e, f, g) {
      c = he(c, he(d, he(e, he(f, cg(g)))));
      d = a.C;
      return a.p ? (e = ag(c, d + 1), e <= d ? ig(a, e, c) : a.p(c)) : a.apply(a, ef(c));
    }
    a.C = 5;
    a.p = function(a) {
      var c = A(a);
      a = E(a);
      var d = A(a);
      a = E(a);
      var e = A(a);
      a = E(a);
      var f = A(a);
      a = E(a);
      var g = A(a);
      a = D(a);
      return b(c, d, e, f, g, a);
    };
    a.l = b;
    return a;
  }(), e = function(e, k, l, m, p, t) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, k);
      case 3:
        return c.call(this, e, k, l);
      case 4:
        return b.call(this, e, k, l, m);
      case 5:
        return a.call(this, e, k, l, m, p);
      default:
        return f.l(e, k, l, m, p, J(arguments, 5));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.C = 5;
  e.p = f.p;
  e.h = d;
  e.j = c;
  e.n = b;
  e.U = a;
  e.l = f.l;
  return e;
}(), jg = function() {
  function a(a, b) {
    return!x.h(a, b);
  }
  var b = null, c = function() {
    function a(c, d, k) {
      var l = null;
      2 < arguments.length && (l = J(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      return Ra(Fe.n(x, a, c, d));
    }
    a.C = 2;
    a.p = function(a) {
      var c = A(a);
      a = E(a);
      var d = A(a);
      a = D(a);
      return b(c, d, a);
    };
    a.l = b;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return!1;
      case 2:
        return a.call(this, b, e);
      default:
        return c.l(b, e, J(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.C = 2;
  b.p = c.p;
  b.g = function() {
    return!1;
  };
  b.h = a;
  b.l = c.l;
  return b;
}();
function kg(a) {
  return z(a) ? a : null;
}
function lg(a, b) {
  for (;;) {
    if (null == z(b)) {
      return!0;
    }
    var c;
    c = A(b);
    c = a.g ? a.g(c) : a.call(null, c);
    if (q(c)) {
      c = a;
      var d = E(b);
      a = c;
      b = d;
    } else {
      return!1;
    }
  }
}
function zg() {
  return function() {
    function a(a) {
      0 < arguments.length && J(Array.prototype.slice.call(arguments, 0), 0);
      return!1;
    }
    a.C = 0;
    a.p = function(a) {
      z(a);
      return!1;
    };
    a.l = function() {
      return!1;
    };
    return a;
  }();
}
var Ag = function() {
  function a(a, b, c) {
    return function() {
      function d(k, l, m) {
        k = c.j ? c.j(k, l, m) : c.call(null, k, l, m);
        k = b.g ? b.g(k) : b.call(null, k);
        return a.g ? a.g(k) : a.call(null, k);
      }
      function l(d, k) {
        var l;
        l = c.h ? c.h(d, k) : c.call(null, d, k);
        l = b.g ? b.g(l) : b.call(null, l);
        return a.g ? a.g(l) : a.call(null, l);
      }
      function m(d) {
        d = c.g ? c.g(d) : c.call(null, d);
        d = b.g ? b.g(d) : b.call(null, d);
        return a.g ? a.g(d) : a.call(null, d);
      }
      function p() {
        var d;
        d = c.v ? c.v() : c.call(null);
        d = b.g ? b.g(d) : b.call(null, d);
        return a.g ? a.g(d) : a.call(null, d);
      }
      var t = null, r = function() {
        function d(a, b, c, e) {
          var f = null;
          3 < arguments.length && (f = J(Array.prototype.slice.call(arguments, 3), 0));
          return k.call(this, a, b, c, f);
        }
        function k(d, l, m, p) {
          d = Fe.U(c, d, l, m, p);
          d = b.g ? b.g(d) : b.call(null, d);
          return a.g ? a.g(d) : a.call(null, d);
        }
        d.C = 3;
        d.p = function(a) {
          var b = A(a);
          a = E(a);
          var c = A(a);
          a = E(a);
          var d = A(a);
          a = D(a);
          return k(b, c, d, a);
        };
        d.l = k;
        return d;
      }(), t = function(a, b, c, e) {
        switch(arguments.length) {
          case 0:
            return p.call(this);
          case 1:
            return m.call(this, a);
          case 2:
            return l.call(this, a, b);
          case 3:
            return d.call(this, a, b, c);
          default:
            return r.l(a, b, c, J(arguments, 3));
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      t.C = 3;
      t.p = r.p;
      t.v = p;
      t.g = m;
      t.h = l;
      t.j = d;
      t.l = r.l;
      return t;
    }();
  }
  function b(a, b) {
    return function() {
      function c(d, g, k) {
        d = b.j ? b.j(d, g, k) : b.call(null, d, g, k);
        return a.g ? a.g(d) : a.call(null, d);
      }
      function d(c, g) {
        var k = b.h ? b.h(c, g) : b.call(null, c, g);
        return a.g ? a.g(k) : a.call(null, k);
      }
      function l(c) {
        c = b.g ? b.g(c) : b.call(null, c);
        return a.g ? a.g(c) : a.call(null, c);
      }
      function m() {
        var c = b.v ? b.v() : b.call(null);
        return a.g ? a.g(c) : a.call(null, c);
      }
      var p = null, t = function() {
        function c(a, b, e, f) {
          var g = null;
          3 < arguments.length && (g = J(Array.prototype.slice.call(arguments, 3), 0));
          return d.call(this, a, b, e, g);
        }
        function d(c, g, k, l) {
          c = Fe.U(b, c, g, k, l);
          return a.g ? a.g(c) : a.call(null, c);
        }
        c.C = 3;
        c.p = function(a) {
          var b = A(a);
          a = E(a);
          var c = A(a);
          a = E(a);
          var e = A(a);
          a = D(a);
          return d(b, c, e, a);
        };
        c.l = d;
        return c;
      }(), p = function(a, b, e, f) {
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
            return t.l(a, b, e, J(arguments, 3));
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      p.C = 3;
      p.p = t.p;
      p.v = m;
      p.g = l;
      p.h = d;
      p.j = c;
      p.l = t.l;
      return p;
    }();
  }
  var c = null, d = function() {
    function a(c, d, e, m) {
      var p = null;
      3 < arguments.length && (p = J(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, d, e, p);
    }
    function b(a, c, d, e) {
      return function(a) {
        return function() {
          function b(a) {
            var d = null;
            0 < arguments.length && (d = J(Array.prototype.slice.call(arguments, 0), 0));
            return c.call(this, d);
          }
          function c(b) {
            b = Fe.h(A(a), b);
            for (var d = E(a);;) {
              if (d) {
                b = A(d).call(null, b), d = E(d);
              } else {
                return b;
              }
            }
          }
          b.C = 0;
          b.p = function(a) {
            a = z(a);
            return c(a);
          };
          b.l = c;
          return b;
        }();
      }(Mf(eg.n(a, c, d, e)));
    }
    a.C = 3;
    a.p = function(a) {
      var c = A(a);
      a = E(a);
      var d = A(a);
      a = E(a);
      var e = A(a);
      a = D(a);
      return b(c, d, e, a);
    };
    a.l = b;
    return a;
  }(), c = function(c, f, g, k) {
    switch(arguments.length) {
      case 0:
        return jf;
      case 1:
        return c;
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, g);
      default:
        return d.l(c, f, g, J(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.C = 3;
  c.p = d.p;
  c.v = function() {
    return jf;
  };
  c.g = function(a) {
    return a;
  };
  c.h = b;
  c.j = a;
  c.l = d.l;
  return c;
}(), Bg = function() {
  function a(a, b, c, d) {
    return function() {
      function e(a) {
        var b = null;
        0 < arguments.length && (b = J(Array.prototype.slice.call(arguments, 0), 0));
        return p.call(this, b);
      }
      function p(e) {
        return Fe.U(a, b, c, d, e);
      }
      e.C = 0;
      e.p = function(a) {
        a = z(a);
        return p(a);
      };
      e.l = p;
      return e;
    }();
  }
  function b(a, b, c) {
    return function() {
      function d(a) {
        var b = null;
        0 < arguments.length && (b = J(Array.prototype.slice.call(arguments, 0), 0));
        return e.call(this, b);
      }
      function e(d) {
        return Fe.n(a, b, c, d);
      }
      d.C = 0;
      d.p = function(a) {
        a = z(a);
        return e(a);
      };
      d.l = e;
      return d;
    }();
  }
  function c(a, b) {
    return function() {
      function c(a) {
        var b = null;
        0 < arguments.length && (b = J(Array.prototype.slice.call(arguments, 0), 0));
        return d.call(this, b);
      }
      function d(c) {
        return Fe.j(a, b, c);
      }
      c.C = 0;
      c.p = function(a) {
        a = z(a);
        return d(a);
      };
      c.l = d;
      return c;
    }();
  }
  var d = null, e = function() {
    function a(c, d, e, f, t) {
      var r = null;
      4 < arguments.length && (r = J(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, r);
    }
    function b(a, c, d, e, f) {
      return function() {
        function b(a) {
          var c = null;
          0 < arguments.length && (c = J(Array.prototype.slice.call(arguments, 0), 0));
          return g.call(this, c);
        }
        function g(b) {
          return Fe.U(a, c, d, e, dg.h(f, b));
        }
        b.C = 0;
        b.p = function(a) {
          a = z(a);
          return g(a);
        };
        b.l = g;
        return b;
      }();
    }
    a.C = 4;
    a.p = function(a) {
      var c = A(a);
      a = E(a);
      var d = A(a);
      a = E(a);
      var e = A(a);
      a = E(a);
      var f = A(a);
      a = D(a);
      return b(c, d, e, f, a);
    };
    a.l = b;
    return a;
  }(), d = function(d, g, k, l, m) {
    switch(arguments.length) {
      case 1:
        return d;
      case 2:
        return c.call(this, d, g);
      case 3:
        return b.call(this, d, g, k);
      case 4:
        return a.call(this, d, g, k, l);
      default:
        return e.l(d, g, k, l, J(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.C = 4;
  d.p = e.p;
  d.g = function(a) {
    return a;
  };
  d.h = c;
  d.j = b;
  d.n = a;
  d.l = e.l;
  return d;
}();
function Cg(a) {
  var b = Dg;
  return function d(a, f) {
    return new Sf(null, function() {
      var g = z(f);
      if (g) {
        if (P(g)) {
          for (var k = v(g), l = L(k), m = Wf(l), p = 0;;) {
            if (p < l) {
              $f(m, function() {
                var d = a + p, f = ob.h(k, p);
                return b.h ? b.h(d, f) : b.call(null, d, f);
              }()), p += 1;
            } else {
              break;
            }
          }
          return Zf(m.Q(), d(a + l, w(g)));
        }
        return he(function() {
          var d = A(g);
          return b.h ? b.h(a, d) : b.call(null, a, d);
        }(), d(a + 1, D(g)));
      }
      return null;
    }, null, null);
  }(0, a);
}
function Eg(a, b, c, d) {
  this.state = a;
  this.w = b;
  this.Fe = c;
  this.jc = d;
  this.o = 6455296;
  this.F = 16386;
}
h = Eg.prototype;
h.O = function() {
  return this[ga] || (this[ga] = ++ha);
};
h.Oc = function(a, b, c) {
  for (var d = z(this.jc), e = null, f = 0, g = 0;;) {
    if (g < f) {
      a = e.B(null, g);
      var k = M.j(a, 0, null);
      a = M.j(a, 1, null);
      var l = b, m = c;
      a.n ? a.n(k, this, l, m) : a.call(null, k, this, l, m);
      g += 1;
    } else {
      if (a = z(d)) {
        d = a, P(d) ? (e = v(d), d = w(d), a = e, f = L(e), e = a) : (a = A(d), k = M.j(a, 0, null), a = M.j(a, 1, null), e = k, f = b, g = c, a.n ? a.n(e, this, f, g) : a.call(null, e, this, f, g), d = E(d), e = null, f = 0), g = 0;
      } else {
        return null;
      }
    }
  }
};
h.Nc = function(a, b, c) {
  this.jc = Be.j(this.jc, b, c);
  return this;
};
h.L = function() {
  return this.w;
};
h.Fb = function() {
  return this.state;
};
h.M = function(a, b) {
  return this === b;
};
var Hg = function() {
  function a(a) {
    return new Eg(a, null, null, null);
  }
  var b = null, c = function() {
    function a(c, d) {
      var k = null;
      1 < arguments.length && (k = J(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, k);
    }
    function b(a, c) {
      var d = Ze(c) ? Fe.h(Fg, c) : c, e = O.h(d, Gg), d = O.h(d, Na);
      return new Eg(a, d, e, null);
    }
    a.C = 1;
    a.p = function(a) {
      var c = A(a);
      a = D(a);
      return b(c, a);
    };
    a.l = b;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.l(b, J(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.C = 1;
  b.p = c.p;
  b.g = a;
  b.l = c.l;
  return b;
}();
function Ig(a, b) {
  if (a instanceof Eg) {
    var c = a.Fe;
    if (null != c && !q(c.g ? c.g(b) : c.call(null, b))) {
      throw Error("Assert failed: Validator rejected reference state\n" + u.g(function() {
        var a = Nf(new Fd(null, "validate", "validate", 1439230700, null), new Fd(null, "new-value", "new-value", -1567397401, null));
        return Jg.g ? Jg.g(a) : Jg.call(null, a);
      }()));
    }
    c = a.state;
    a.state = b;
    null != a.jc && Hc(a, c, b);
    return b;
  }
  return cd(a, b);
}
var Kg = function() {
  function a(a, b, c, d) {
    if (a instanceof Eg) {
      var e = a.state;
      b = b.j ? b.j(e, c, d) : b.call(null, e, c, d);
      a = Ig(a, b);
    } else {
      a = dd.n(a, b, c, d);
    }
    return a;
  }
  function b(a, b, c) {
    if (a instanceof Eg) {
      var d = a.state;
      b = b.h ? b.h(d, c) : b.call(null, d, c);
      a = Ig(a, b);
    } else {
      a = dd.j(a, b, c);
    }
    return a;
  }
  function c(a, b) {
    var c;
    a instanceof Eg ? (c = a.state, c = b.g ? b.g(c) : b.call(null, c), c = Ig(a, c)) : c = dd.h(a, b);
    return c;
  }
  var d = null, e = function() {
    function a(c, d, e, f, t) {
      var r = null;
      4 < arguments.length && (r = J(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, r);
    }
    function b(a, c, d, e, f) {
      return a instanceof Eg ? Ig(a, Fe.U(c, a.state, d, e, f)) : dd.U(a, c, d, e, f);
    }
    a.C = 4;
    a.p = function(a) {
      var c = A(a);
      a = E(a);
      var d = A(a);
      a = E(a);
      var e = A(a);
      a = E(a);
      var f = A(a);
      a = D(a);
      return b(c, d, e, f, a);
    };
    a.l = b;
    return a;
  }(), d = function(d, g, k, l, m) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, g);
      case 3:
        return b.call(this, d, g, k);
      case 4:
        return a.call(this, d, g, k, l);
      default:
        return e.l(d, g, k, l, J(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.C = 4;
  d.p = e.p;
  d.h = c;
  d.j = b;
  d.n = a;
  d.l = e.l;
  return d;
}(), Lg = function() {
  function a(a, b, c, d) {
    return new Sf(null, function() {
      var f = z(b), t = z(c), r = z(d);
      if (f && t && r) {
        var y = he, B;
        B = A(f);
        var C = A(t), F = A(r);
        B = a.j ? a.j(B, C, F) : a.call(null, B, C, F);
        f = y(B, e.n(a, D(f), D(t), D(r)));
      } else {
        f = null;
      }
      return f;
    }, null, null);
  }
  function b(a, b, c) {
    return new Sf(null, function() {
      var d = z(b), f = z(c);
      if (d && f) {
        var t = he, r;
        r = A(d);
        var y = A(f);
        r = a.h ? a.h(r, y) : a.call(null, r, y);
        d = t(r, e.j(a, D(d), D(f)));
      } else {
        d = null;
      }
      return d;
    }, null, null);
  }
  function c(a, b) {
    return new Sf(null, function() {
      var c = z(b);
      if (c) {
        if (P(c)) {
          for (var d = v(c), f = L(d), t = Wf(f), r = 0;;) {
            if (r < f) {
              $f(t, function() {
                var b = ob.h(d, r);
                return a.g ? a.g(b) : a.call(null, b);
              }()), r += 1;
            } else {
              break;
            }
          }
          return Zf(t.Q(), e.h(a, w(c)));
        }
        return he(function() {
          var b = A(c);
          return a.g ? a.g(b) : a.call(null, b);
        }(), e.h(a, D(c)));
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
          return b.v ? b.v() : b.call(null);
        }
        var f = null, r = function() {
          function c(a, b, e) {
            var f = null;
            2 < arguments.length && (f = J(Array.prototype.slice.call(arguments, 2), 0));
            return d.call(this, a, b, f);
          }
          function d(c, e, f) {
            e = Fe.j(a, e, f);
            return b.h ? b.h(c, e) : b.call(null, c, e);
          }
          c.C = 2;
          c.p = function(a) {
            var b = A(a);
            a = E(a);
            var c = A(a);
            a = D(a);
            return d(b, c, a);
          };
          c.l = d;
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
              return r.l(a, b, J(arguments, 2));
          }
          throw Error("Invalid arity: " + arguments.length);
        };
        f.C = 2;
        f.p = r.p;
        f.v = e;
        f.g = d;
        f.h = c;
        f.l = r.l;
        return f;
      }();
    };
  }
  var e = null, f = function() {
    function a(c, d, e, f, g) {
      var y = null;
      4 < arguments.length && (y = J(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, y);
    }
    function b(a, c, d, f, g) {
      var k = function C(a) {
        return new Sf(null, function() {
          var b = e.h(z, a);
          return lg(jf, b) ? he(e.h(A, b), C(e.h(D, b))) : null;
        }, null, null);
      };
      return e.h(function() {
        return function(b) {
          return Fe.h(a, b);
        };
      }(k), k(ne.l(g, f, J([d, c], 0))));
    }
    a.C = 4;
    a.p = function(a) {
      var c = A(a);
      a = E(a);
      var d = A(a);
      a = E(a);
      var e = A(a);
      a = E(a);
      var f = A(a);
      a = D(a);
      return b(c, d, e, f, a);
    };
    a.l = b;
    return a;
  }(), e = function(e, k, l, m, p) {
    switch(arguments.length) {
      case 1:
        return d.call(this, e);
      case 2:
        return c.call(this, e, k);
      case 3:
        return b.call(this, e, k, l);
      case 4:
        return a.call(this, e, k, l, m);
      default:
        return f.l(e, k, l, m, J(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.C = 4;
  e.p = f.p;
  e.g = d;
  e.h = c;
  e.j = b;
  e.n = a;
  e.l = f.l;
  return e;
}(), Mg = function() {
  function a(a, b) {
    return new Sf(null, function() {
      if (0 < a) {
        var f = z(b);
        return f ? he(A(f), c.h(a - 1, D(f))) : null;
      }
      return null;
    }, null, null);
  }
  function b(a) {
    return function(b) {
      return function(a) {
        return function() {
          function c(d, g) {
            var k = Vb(a), l = Kg.h(a, of), k = 0 < k ? b.h ? b.h(d, g) : b.call(null, d, g) : d;
            return 0 < l ? k : new Zd(k);
          }
          function d(a) {
            return b.g ? b.g(a) : b.call(null, a);
          }
          function l() {
            return b.v ? b.v() : b.call(null);
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
          m.v = l;
          m.g = d;
          m.h = c;
          return m;
        }();
      }(Hg.g(a));
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
    return new Sf(null, function(c) {
      return function() {
        return c(a, b);
      };
    }(function(a, b) {
      for (;;) {
        var c = z(b);
        if (0 < a && c) {
          var d = a - 1, c = D(c);
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
            var k = Vb(a);
            Kg.h(a, of);
            return 0 < k ? d : b.h ? b.h(d, g) : b.call(null, d, g);
          }
          function d(a) {
            return b.g ? b.g(a) : b.call(null, a);
          }
          function l() {
            return b.v ? b.v() : b.call(null);
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
          m.v = l;
          m.g = d;
          m.h = c;
          return m;
        }();
      }(Hg.g(a));
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
}(), Og = function() {
  function a(a, b) {
    return new Sf(null, function(c) {
      return function() {
        return c(a, b);
      };
    }(function(a, b) {
      for (;;) {
        var c = z(b), d;
        if (d = c) {
          d = A(c), d = a.g ? a.g(d) : a.call(null, d);
        }
        if (q(d)) {
          d = a, c = D(c), a = d, b = c;
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
          function g(g, k) {
            var l = Vb(c);
            if (q(q(l) ? a.g ? a.g(k) : a.call(null, k) : l)) {
              return g;
            }
            Ig(c, null);
            return b.h ? b.h(g, k) : b.call(null, g, k);
          }
          function k(a) {
            return b.g ? b.g(a) : b.call(null, a);
          }
          function l() {
            return b.v ? b.v() : b.call(null);
          }
          var m = null, m = function(a, b) {
            switch(arguments.length) {
              case 0:
                return l.call(this);
              case 1:
                return k.call(this, a);
              case 2:
                return g.call(this, a, b);
            }
            throw Error("Invalid arity: " + arguments.length);
          };
          m.v = l;
          m.g = k;
          m.h = g;
          return m;
        }();
      }(Hg.g(!0));
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
}(), Pg = function() {
  function a(a, b) {
    return Mg.h(a, c.g(b));
  }
  function b(a) {
    return new Sf(null, function() {
      return he(a, c.g(a));
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
}(), Qg = function() {
  function a(a, c) {
    return new Sf(null, function() {
      var f = z(a), g = z(c);
      return f && g ? he(A(f), he(A(g), b.h(D(f), D(g)))) : null;
    }, null, null);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = J(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      return new Sf(null, function() {
        var c = Lg.h(z, ne.l(e, d, J([a], 0)));
        return lg(jf, c) ? dg.h(Lg.h(A, c), Fe.h(b, Lg.h(D, c))) : null;
      }, null, null);
    }
    a.C = 2;
    a.p = function(a) {
      var b = A(a);
      a = E(a);
      var d = A(a);
      a = D(a);
      return c(b, d, a);
    };
    a.l = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.l(b, e, J(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.C = 2;
  b.p = c.p;
  b.h = a;
  b.l = c.l;
  return b;
}();
function Rg(a) {
  return Ng.h(1, Qg.h(Pg.g("\n"), a));
}
var Tg = function() {
  function a(a) {
    return Ag.h(Lg.g(a), Sg);
  }
  var b = null, c = function() {
    function a(c, d) {
      var k = null;
      1 < arguments.length && (k = J(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, k);
    }
    function b(a, c) {
      return Fe.h(dg, Fe.j(Lg, a, c));
    }
    a.C = 1;
    a.p = function(a) {
      var c = A(a);
      a = D(a);
      return b(c, a);
    };
    a.l = b;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.l(b, J(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.C = 1;
  b.p = c.p;
  b.g = a;
  b.l = c.l;
  return b;
}(), Ug = function() {
  function a(a, b) {
    return new Sf(null, function() {
      var f = z(b);
      if (f) {
        if (P(f)) {
          for (var g = v(f), k = L(g), l = Wf(k), m = 0;;) {
            if (m < k) {
              var p;
              p = ob.h(g, m);
              p = a.g ? a.g(p) : a.call(null, p);
              q(p) && (p = ob.h(g, m), l.add(p));
              m += 1;
            } else {
              break;
            }
          }
          return Zf(l.Q(), c.h(a, w(f)));
        }
        g = A(f);
        f = D(f);
        return q(a.g ? a.g(g) : a.call(null, g)) ? he(g, c.h(a, f)) : c.h(a, f);
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
        function k() {
          return b.v ? b.v() : b.call(null);
        }
        var l = null, l = function(a, b) {
          switch(arguments.length) {
            case 0:
              return k.call(this);
            case 1:
              return g.call(this, a);
            case 2:
              return c.call(this, a, b);
          }
          throw Error("Invalid arity: " + arguments.length);
        };
        l.v = k;
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
function Vg(a) {
  return function c(a) {
    return new Sf(null, function() {
      return he(a, q(Se.g ? Se.g(a) : Se.call(null, a)) ? Tg.l(c, J([z.g ? z.g(a) : z.call(null, a)], 0)) : null);
    }, null, null);
  }(a);
}
function Wg(a) {
  return Ug.h(function(a) {
    return!Se(a);
  }, D(Vg(a)));
}
var Xg = function() {
  function a(a, b, c) {
    return a && (a.F & 4 || a.vd) ? je(fg(kf.n(b, gg, Rc(a), c)), Ge(a)) : kf.n(b, ne, a, c);
  }
  function b(a, b) {
    return null != a ? a && (a.F & 4 || a.vd) ? je(fg(Xa.j(Sc, Rc(a), b)), Ge(a)) : Xa.j(mb, a, b) : Xa.j(ne, Hd, b);
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
}(), Yg = function() {
  function a(a, b, c, d) {
    return Xg.h(me, Lg.n(a, b, c, d));
  }
  function b(a, b, c) {
    return Xg.h(me, Lg.j(a, b, c));
  }
  function c(a, b) {
    return fg(Xa.j(function(b, c) {
      return gg.h(b, a.g ? a.g(c) : a.call(null, c));
    }, Rc(me), b));
  }
  var d = null, e = function() {
    function a(c, d, e, f, t) {
      var r = null;
      4 < arguments.length && (r = J(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, r);
    }
    function b(a, c, d, e, f) {
      return Xg.h(me, Fe.l(Lg, a, c, d, e, J([f], 0)));
    }
    a.C = 4;
    a.p = function(a) {
      var c = A(a);
      a = E(a);
      var d = A(a);
      a = E(a);
      var e = A(a);
      a = E(a);
      var f = A(a);
      a = D(a);
      return b(c, d, e, f, a);
    };
    a.l = b;
    return a;
  }(), d = function(d, g, k, l, m) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, g);
      case 3:
        return b.call(this, d, g, k);
      case 4:
        return a.call(this, d, g, k, l);
      default:
        return e.l(d, g, k, l, J(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.C = 4;
  d.p = e.p;
  d.h = c;
  d.j = b;
  d.n = a;
  d.l = e.l;
  return d;
}(), Zg = function() {
  function a(a, b, c) {
    var g = Ye;
    for (b = z(b);;) {
      if (b) {
        var k = a;
        if (k ? k.o & 256 || k.Kc || (k.o ? 0 : Sa(ub, k)) : Sa(ub, k)) {
          a = O.j(a, A(b), g);
          if (g === a) {
            return c;
          }
          b = E(b);
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
}(), $g = function() {
  function a(a, b, c, d, f, t) {
    var r = M.j(b, 0, null);
    return(b = uf(b)) ? Be.j(a, r, e.ma(O.h(a, r), b, c, d, f, t)) : Be.j(a, r, function() {
      var b = O.h(a, r);
      return c.n ? c.n(b, d, f, t) : c.call(null, b, d, f, t);
    }());
  }
  function b(a, b, c, d, f) {
    var t = M.j(b, 0, null);
    return(b = uf(b)) ? Be.j(a, t, e.U(O.h(a, t), b, c, d, f)) : Be.j(a, t, function() {
      var b = O.h(a, t);
      return c.j ? c.j(b, d, f) : c.call(null, b, d, f);
    }());
  }
  function c(a, b, c, d) {
    var f = M.j(b, 0, null);
    return(b = uf(b)) ? Be.j(a, f, e.n(O.h(a, f), b, c, d)) : Be.j(a, f, function() {
      var b = O.h(a, f);
      return c.h ? c.h(b, d) : c.call(null, b, d);
    }());
  }
  function d(a, b, c) {
    var d = M.j(b, 0, null);
    return(b = uf(b)) ? Be.j(a, d, e.j(O.h(a, d), b, c)) : Be.j(a, d, function() {
      var b = O.h(a, d);
      return c.g ? c.g(b) : c.call(null, b);
    }());
  }
  var e = null, f = function() {
    function a(c, d, e, f, g, y, B) {
      var C = null;
      6 < arguments.length && (C = J(Array.prototype.slice.call(arguments, 6), 0));
      return b.call(this, c, d, e, f, g, y, C);
    }
    function b(a, c, d, f, g, k, B) {
      var C = M.j(c, 0, null);
      return(c = uf(c)) ? Be.j(a, C, Fe.l(e, O.h(a, C), c, d, f, J([g, k, B], 0))) : Be.j(a, C, Fe.l(d, O.h(a, C), f, g, k, J([B], 0)));
    }
    a.C = 6;
    a.p = function(a) {
      var c = A(a);
      a = E(a);
      var d = A(a);
      a = E(a);
      var e = A(a);
      a = E(a);
      var f = A(a);
      a = E(a);
      var g = A(a);
      a = E(a);
      var B = A(a);
      a = D(a);
      return b(c, d, e, f, g, B, a);
    };
    a.l = b;
    return a;
  }(), e = function(e, k, l, m, p, t, r) {
    switch(arguments.length) {
      case 3:
        return d.call(this, e, k, l);
      case 4:
        return c.call(this, e, k, l, m);
      case 5:
        return b.call(this, e, k, l, m, p);
      case 6:
        return a.call(this, e, k, l, m, p, t);
      default:
        return f.l(e, k, l, m, p, t, J(arguments, 6));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.C = 6;
  e.p = f.p;
  e.j = d;
  e.n = c;
  e.U = b;
  e.ma = a;
  e.l = f.l;
  return e;
}();
function ah(a, b) {
  this.V = a;
  this.k = b;
}
function bh(a) {
  return new ah(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function ch(a) {
  a = a.q;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function dh(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = bh(a);
    d.k[0] = c;
    c = d;
    b -= 5;
  }
}
var fh = function eh(b, c, d, e) {
  var f = new ah(d.V, Wa(d.k)), g = b.q - 1 >>> c & 31;
  5 === c ? f.k[g] = e : (d = d.k[g], b = null != d ? eh(b, c - 5, d, e) : dh(null, c - 5, e), f.k[g] = b);
  return f;
};
function gh(a, b) {
  throw Error("No item " + u.g(a) + " in vector of length " + u.g(b));
}
function hh(a, b) {
  if (b >= ch(a)) {
    return a.S;
  }
  for (var c = a.root, d = a.shift;;) {
    if (0 < d) {
      var e = d - 5, c = c.k[b >>> d & 31], d = e
    } else {
      return c.k;
    }
  }
}
function ih(a, b) {
  return 0 <= b && b < a.q ? hh(a, b) : gh(b, a.q);
}
var uh = function th(b, c, d, e, f) {
  var g = new ah(d.V, Wa(d.k));
  if (0 === c) {
    g.k[e & 31] = f;
  } else {
    var k = e >>> c & 31;
    b = th(b, c - 5, d.k[k], e, f);
    g.k[k] = b;
  }
  return g;
};
function vh(a, b, c, d, e, f) {
  this.D = a;
  this.Tb = b;
  this.k = c;
  this.Ja = d;
  this.start = e;
  this.end = f;
}
vh.prototype.fc = function() {
  return this.D < this.end;
};
vh.prototype.next = function() {
  32 === this.D - this.Tb && (this.k = hh(this.Ja, this.D), this.Tb += 32);
  var a = this.k[this.D & 31];
  this.D += 1;
  return a;
};
function Q(a, b, c, d, e, f) {
  this.w = a;
  this.q = b;
  this.shift = c;
  this.root = d;
  this.S = e;
  this.A = f;
  this.o = 167668511;
  this.F = 8196;
}
h = Q.prototype;
h.toString = function() {
  return gd(this);
};
h.J = function(a, b) {
  return wb.j(this, b, null);
};
h.I = function(a, b, c) {
  return "number" === typeof b ? ob.j(this, b, c) : c;
};
h.Hb = function(a, b, c) {
  a = 0;
  for (var d = c;;) {
    if (a < this.q) {
      var e = hh(this, a);
      c = e.length;
      a: {
        for (var f = 0;;) {
          if (f < c) {
            var g = f + a, k = e[f], d = b.j ? b.j(d, g, k) : b.call(null, d, g, k);
            if ($d(d)) {
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
      if ($d(e)) {
        return b = e, K.g ? K.g(b) : K.call(null, b);
      }
      a += c;
      d = e;
    } else {
      return d;
    }
  }
};
h.B = function(a, b) {
  return ih(this, b)[b & 31];
};
h.wa = function(a, b, c) {
  return 0 <= b && b < this.q ? hh(this, b)[b & 31] : c;
};
h.ob = function(a, b, c) {
  if (0 <= b && b < this.q) {
    return ch(this) <= b ? (a = Wa(this.S), a[b & 31] = c, new Q(this.w, this.q, this.shift, this.root, a, null)) : new Q(this.w, this.q, this.shift, uh(this, this.shift, this.root, b, c), this.S, null);
  }
  if (b === this.q) {
    return mb(this, c);
  }
  throw Error("Index " + u.g(b) + " out of bounds  [0," + u.g(this.q) + "]");
};
h.Gb = function() {
  var a = this.q;
  return new vh(0, 0, 0 < L(this) ? hh(this, 0) : null, this, 0, a);
};
h.L = function() {
  return this.w;
};
h.T = function() {
  return this.q;
};
h.Ib = function() {
  return ob.h(this, 0);
};
h.Jb = function() {
  return ob.h(this, 1);
};
h.fb = function() {
  return 0 < this.q ? ob.h(this, this.q - 1) : null;
};
h.Kb = function() {
  return 0 < this.q ? new fe(this, this.q - 1, null) : null;
};
h.O = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Jd(this);
};
h.M = function(a, b) {
  if (b instanceof Q) {
    if (this.q === L(b)) {
      for (var c = ed(this), d = ed(b);;) {
        if (q(c.fc())) {
          var e = c.next(), f = d.next();
          if (!x.h(e, f)) {
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
    return ge(this, b);
  }
};
h.vb = function() {
  var a = this;
  return new wh(a.q, a.shift, function() {
    var b = a.root;
    return xh.g ? xh.g(b) : xh.call(null, b);
  }(), function() {
    var b = a.S;
    return yh.g ? yh.g(b) : yh.call(null, b);
  }());
};
h.Z = function() {
  return je(me, this.w);
};
h.ba = function(a, b) {
  return ae.h(this, b);
};
h.ca = function(a, b, c) {
  a = 0;
  for (var d = c;;) {
    if (a < this.q) {
      var e = hh(this, a);
      c = e.length;
      a: {
        for (var f = 0;;) {
          if (f < c) {
            var g = e[f], d = b.h ? b.h(d, g) : b.call(null, d, g);
            if ($d(d)) {
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
      if ($d(e)) {
        return b = e, K.g ? K.g(b) : K.call(null, b);
      }
      a += c;
      d = e;
    } else {
      return d;
    }
  }
};
h.Aa = function(a, b, c) {
  if ("number" === typeof b) {
    return Ub(this, b, c);
  }
  throw Error("Vector's key for assoc must be a number.");
};
h.P = function() {
  if (0 === this.q) {
    return null;
  }
  if (32 >= this.q) {
    return new Gd(this.S, 0);
  }
  var a;
  a: {
    a = this.root;
    for (var b = this.shift;;) {
      if (0 < b) {
        b -= 5, a = a.k[0];
      } else {
        a = a.k;
        break a;
      }
    }
    a = void 0;
  }
  return zh.n ? zh.n(this, a, 0, 0) : zh.call(null, this, a, 0, 0);
};
h.N = function(a, b) {
  return new Q(b, this.q, this.shift, this.root, this.S, this.A);
};
h.R = function(a, b) {
  if (32 > this.q - ch(this)) {
    for (var c = this.S.length, d = Array(c + 1), e = 0;;) {
      if (e < c) {
        d[e] = this.S[e], e += 1;
      } else {
        break;
      }
    }
    d[c] = b;
    return new Q(this.w, this.q + 1, this.shift, this.root, d, null);
  }
  c = (d = this.q >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = bh(null), d.k[0] = this.root, e = dh(null, this.shift, new ah(null, this.S)), d.k[1] = e) : d = fh(this, this.shift, this.root, new ah(null, this.S));
  return new Q(this.w, this.q + 1, c, d, [b], null);
};
h.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.B(null, c);
      case 3:
        return this.wa(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.h = function(a, c) {
    return this.B(null, c);
  };
  a.j = function(a, c, d) {
    return this.wa(null, c, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Wa(b)));
};
h.g = function(a) {
  return this.B(null, a);
};
h.h = function(a, b) {
  return this.wa(null, a, b);
};
var R = new ah(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), me = new Q(null, 0, 5, R, [], 0);
function Ah(a) {
  return Tc(Xa.j(Sc, Rc(me), a));
}
var Dg = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = J(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    if (a instanceof Gd && 0 === a.D) {
      a: {
        a = a.k;
        var b = a.length;
        if (32 > b) {
          a = new Q(null, b, 5, R, a, null);
        } else {
          for (var e = 32, f = (new Q(null, 32, 5, R, a.slice(0, 32), null)).vb(null);;) {
            if (e < b) {
              var g = e + 1, f = gg.h(f, a[e]), e = g
            } else {
              a = Tc(f);
              break a;
            }
          }
          a = void 0;
        }
      }
    } else {
      a = Ah(a);
    }
    return a;
  }
  a.C = 0;
  a.p = function(a) {
    a = z(a);
    return b(a);
  };
  a.l = b;
  return a;
}();
function Bh(a, b, c, d, e, f) {
  this.ya = a;
  this.$a = b;
  this.D = c;
  this.ga = d;
  this.w = e;
  this.A = f;
  this.o = 32375020;
  this.F = 1536;
}
h = Bh.prototype;
h.toString = function() {
  return gd(this);
};
h.L = function() {
  return this.w;
};
h.ha = function() {
  if (this.ga + 1 < this.$a.length) {
    var a;
    a = this.ya;
    var b = this.$a, c = this.D, d = this.ga + 1;
    a = zh.n ? zh.n(a, b, c, d) : zh.call(null, a, b, c, d);
    return null == a ? null : a;
  }
  return bd(this);
};
h.O = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Jd(this);
};
h.M = function(a, b) {
  return ge(this, b);
};
h.Z = function() {
  return je(me, this.w);
};
h.ba = function(a, b) {
  var c = this;
  return ae.h(function() {
    var a = c.ya, b = c.D + c.ga, f = L(c.ya);
    return Ch.j ? Ch.j(a, b, f) : Ch.call(null, a, b, f);
  }(), b);
};
h.ca = function(a, b, c) {
  var d = this;
  return ae.j(function() {
    var a = d.ya, b = d.D + d.ga, c = L(d.ya);
    return Ch.j ? Ch.j(a, b, c) : Ch.call(null, a, b, c);
  }(), b, c);
};
h.$ = function() {
  return this.$a[this.ga];
};
h.fa = function() {
  if (this.ga + 1 < this.$a.length) {
    var a;
    a = this.ya;
    var b = this.$a, c = this.D, d = this.ga + 1;
    a = zh.n ? zh.n(a, b, c, d) : zh.call(null, a, b, c, d);
    return null == a ? Hd : a;
  }
  return w(this);
};
h.P = function() {
  return this;
};
h.oc = function() {
  return Xf.h(this.$a, this.ga);
};
h.pc = function() {
  var a = this.D + this.$a.length;
  if (a < bb(this.ya)) {
    var b = this.ya, c = hh(this.ya, a);
    return zh.n ? zh.n(b, c, a, 0) : zh.call(null, b, c, a, 0);
  }
  return Hd;
};
h.N = function(a, b) {
  var c = this.ya, d = this.$a, e = this.D, f = this.ga;
  return zh.U ? zh.U(c, d, e, f, b) : zh.call(null, c, d, e, f, b);
};
h.R = function(a, b) {
  return he(b, this);
};
h.nc = function() {
  var a = this.D + this.$a.length;
  if (a < bb(this.ya)) {
    var b = this.ya, c = hh(this.ya, a);
    return zh.n ? zh.n(b, c, a, 0) : zh.call(null, b, c, a, 0);
  }
  return null;
};
var zh = function() {
  function a(a, b, c, d, l) {
    return new Bh(a, b, c, d, l, null);
  }
  function b(a, b, c, d) {
    return new Bh(a, b, c, d, null, null);
  }
  function c(a, b, c) {
    return new Bh(a, ih(a, b), b, c, null, null);
  }
  var d = null, d = function(d, f, g, k, l) {
    switch(arguments.length) {
      case 3:
        return c.call(this, d, f, g);
      case 4:
        return b.call(this, d, f, g, k);
      case 5:
        return a.call(this, d, f, g, k, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.j = c;
  d.n = b;
  d.U = a;
  return d;
}();
function Dh(a, b, c, d, e) {
  this.w = a;
  this.Ja = b;
  this.start = c;
  this.end = d;
  this.A = e;
  this.o = 166617887;
  this.F = 8192;
}
h = Dh.prototype;
h.toString = function() {
  return gd(this);
};
h.J = function(a, b) {
  return wb.j(this, b, null);
};
h.I = function(a, b, c) {
  return "number" === typeof b ? ob.j(this, b, c) : c;
};
h.B = function(a, b) {
  return 0 > b || this.end <= this.start + b ? gh(b, this.end - this.start) : ob.h(this.Ja, this.start + b);
};
h.wa = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : ob.j(this.Ja, this.start + b, c);
};
h.ob = function(a, b, c) {
  var d = this.start + b;
  a = this.w;
  c = Be.j(this.Ja, d, c);
  b = this.start;
  var e = this.end, d = d + 1, d = e > d ? e : d;
  return Eh.U ? Eh.U(a, c, b, d, null) : Eh.call(null, a, c, b, d, null);
};
h.L = function() {
  return this.w;
};
h.T = function() {
  return this.end - this.start;
};
h.fb = function() {
  return ob.h(this.Ja, this.end - 1);
};
h.Kb = function() {
  return this.start !== this.end ? new fe(this, this.end - this.start - 1, null) : null;
};
h.O = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Jd(this);
};
h.M = function(a, b) {
  return ge(this, b);
};
h.Z = function() {
  return je(me, this.w);
};
h.ba = function(a, b) {
  return ae.h(this, b);
};
h.ca = function(a, b, c) {
  return ae.j(this, b, c);
};
h.Aa = function(a, b, c) {
  if ("number" === typeof b) {
    return Ub(this, b, c);
  }
  throw Error("Subvec's key for assoc must be a number.");
};
h.P = function() {
  var a = this;
  return function(b) {
    return function d(e) {
      return e === a.end ? null : he(ob.h(a.Ja, e), new Sf(null, function() {
        return function() {
          return d(e + 1);
        };
      }(b), null, null));
    };
  }(this)(a.start);
};
h.N = function(a, b) {
  var c = this.Ja, d = this.start, e = this.end, f = this.A;
  return Eh.U ? Eh.U(b, c, d, e, f) : Eh.call(null, b, c, d, e, f);
};
h.R = function(a, b) {
  var c = this.w, d = Ub(this.Ja, this.end, b), e = this.start, f = this.end + 1;
  return Eh.U ? Eh.U(c, d, e, f, null) : Eh.call(null, c, d, e, f, null);
};
h.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.B(null, c);
      case 3:
        return this.wa(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.h = function(a, c) {
    return this.B(null, c);
  };
  a.j = function(a, c, d) {
    return this.wa(null, c, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Wa(b)));
};
h.g = function(a) {
  return this.B(null, a);
};
h.h = function(a, b) {
  return this.wa(null, a, b);
};
function Eh(a, b, c, d, e) {
  for (;;) {
    if (b instanceof Dh) {
      c = b.start + c, d = b.start + d, b = b.Ja;
    } else {
      var f = L(b);
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
    return c.j(a, b, L(a));
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
  return a === b.V ? b : new ah(a, Wa(b.k));
}
function xh(a) {
  return new ah({}, Wa(a.k));
}
function yh(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  We(a, 0, b, 0, a.length);
  return b;
}
var Hh = function Gh(b, c, d, e) {
  d = Fh(b.root.V, d);
  var f = b.q - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var g = d.k[f];
    b = null != g ? Gh(b, c - 5, g, e) : dh(b.root.V, c - 5, e);
  }
  d.k[f] = b;
  return d;
};
function wh(a, b, c, d) {
  this.q = a;
  this.shift = b;
  this.root = c;
  this.S = d;
  this.o = 275;
  this.F = 88;
}
h = wh.prototype;
h.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.J(null, c);
      case 3:
        return this.I(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.h = function(a, c) {
    return this.J(null, c);
  };
  a.j = function(a, c, d) {
    return this.I(null, c, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Wa(b)));
};
h.g = function(a) {
  return this.J(null, a);
};
h.h = function(a, b) {
  return this.I(null, a, b);
};
h.J = function(a, b) {
  return wb.j(this, b, null);
};
h.I = function(a, b, c) {
  return "number" === typeof b ? ob.j(this, b, c) : c;
};
h.B = function(a, b) {
  if (this.root.V) {
    return ih(this, b)[b & 31];
  }
  throw Error("nth after persistent!");
};
h.wa = function(a, b, c) {
  return 0 <= b && b < this.q ? ob.h(this, b) : c;
};
h.T = function() {
  if (this.root.V) {
    return this.q;
  }
  throw Error("count after persistent!");
};
h.Mc = function(a, b, c) {
  var d = this;
  if (d.root.V) {
    if (0 <= b && b < d.q) {
      return ch(this) <= b ? d.S[b & 31] = c : (a = function() {
        return function f(a, k) {
          var l = Fh(d.root.V, k);
          if (0 === a) {
            l.k[b & 31] = c;
          } else {
            var m = b >>> a & 31, p = f(a - 5, l.k[m]);
            l.k[m] = p;
          }
          return l;
        };
      }(this).call(null, d.shift, d.root), d.root = a), this;
    }
    if (b === d.q) {
      return Sc(this, c);
    }
    throw Error("Index " + u.g(b) + " out of bounds for TransientVector of length" + u.g(d.q));
  }
  throw Error("assoc! after persistent!");
};
h.Mb = function(a, b, c) {
  if ("number" === typeof b) {
    return Vc(this, b, c);
  }
  throw Error("TransientVector's key for assoc! must be a number.");
};
h.mb = function(a, b) {
  if (this.root.V) {
    if (32 > this.q - ch(this)) {
      this.S[this.q & 31] = b;
    } else {
      var c = new ah(this.root.V, this.S), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.S = d;
      if (this.q >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = dh(this.root.V, this.shift, c);
        this.root = new ah(this.root.V, d);
        this.shift = e;
      } else {
        this.root = Hh(this, this.shift, this.root, c);
      }
    }
    this.q += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
h.nb = function() {
  if (this.root.V) {
    this.root.V = null;
    var a = this.q - ch(this), b = Array(a);
    We(this.S, 0, b, 0, a);
    return new Q(null, this.q, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
function Ih(a, b, c, d) {
  this.w = a;
  this.Ba = b;
  this.kb = c;
  this.A = d;
  this.F = 0;
  this.o = 31850572;
}
h = Ih.prototype;
h.toString = function() {
  return gd(this);
};
h.L = function() {
  return this.w;
};
h.O = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Jd(this);
};
h.M = function(a, b) {
  return ge(this, b);
};
h.Z = function() {
  return je(Hd, this.w);
};
h.$ = function() {
  return A(this.Ba);
};
h.fa = function() {
  var a = E(this.Ba);
  return a ? new Ih(this.w, a, this.kb, null) : null == this.kb ? db(this) : new Ih(this.w, this.kb, null, null);
};
h.P = function() {
  return this;
};
h.N = function(a, b) {
  return new Ih(b, this.Ba, this.kb, this.A);
};
h.R = function(a, b) {
  return he(b, this);
};
function Jh(a, b, c, d, e) {
  this.w = a;
  this.count = b;
  this.Ba = c;
  this.kb = d;
  this.A = e;
  this.o = 31858766;
  this.F = 8192;
}
h = Jh.prototype;
h.toString = function() {
  return gd(this);
};
h.L = function() {
  return this.w;
};
h.T = function() {
  return this.count;
};
h.fb = function() {
  return A(this.Ba);
};
h.O = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Jd(this);
};
h.M = function(a, b) {
  return ge(this, b);
};
h.Z = function() {
  return Kh;
};
h.$ = function() {
  return A(this.Ba);
};
h.fa = function() {
  return D(z(this));
};
h.P = function() {
  var a = z(this.kb), b = this.Ba;
  return q(q(b) ? b : a) ? new Ih(null, this.Ba, z(a), null) : null;
};
h.N = function(a, b) {
  return new Jh(b, this.count, this.Ba, this.kb, this.A);
};
h.R = function(a, b) {
  var c;
  q(this.Ba) ? (c = this.kb, c = new Jh(this.w, this.count + 1, this.Ba, ne.h(q(c) ? c : me, b), null)) : c = new Jh(this.w, this.count + 1, ne.h(this.Ba, b), me, null);
  return c;
};
var Kh = new Jh(null, 0, null, me, 0);
function Lh() {
  this.F = 0;
  this.o = 2097152;
}
Lh.prototype.M = function() {
  return!1;
};
var Mh = new Lh;
function Nh(a, b) {
  return $e(Te(b) ? L(a) === L(b) ? lg(jf, Lg.h(function(a) {
    return x.h(O.j(b, A(a), Mh), A(E(a)));
  }, a)) : null : null);
}
function Oh(a, b) {
  var c = a.k;
  if (b instanceof U) {
    a: {
      for (var d = c.length, e = b.na, f = 0;;) {
        if (d <= f) {
          c = -1;
          break a;
        }
        var g = c[f];
        if (g instanceof U && e === g.na) {
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
      if (b instanceof Fd) {
        a: {
          d = c.length;
          e = b.lb;
          for (f = 0;;) {
            if (d <= f) {
              c = -1;
              break a;
            }
            g = c[f];
            if (g instanceof Fd && e === g.lb) {
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
              if (x.h(b, c[e])) {
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
function Ph(a, b, c) {
  this.k = a;
  this.D = b;
  this.ta = c;
  this.F = 0;
  this.o = 32374990;
}
h = Ph.prototype;
h.toString = function() {
  return gd(this);
};
h.L = function() {
  return this.ta;
};
h.ha = function() {
  return this.D < this.k.length - 2 ? new Ph(this.k, this.D + 2, this.ta) : null;
};
h.T = function() {
  return(this.k.length - this.D) / 2;
};
h.O = function() {
  return Jd(this);
};
h.M = function(a, b) {
  return ge(this, b);
};
h.Z = function() {
  return je(Hd, this.ta);
};
h.ba = function(a, b) {
  return ke.h(b, this);
};
h.ca = function(a, b, c) {
  return ke.j(b, c, this);
};
h.$ = function() {
  return new Q(null, 2, 5, R, [this.k[this.D], this.k[this.D + 1]], null);
};
h.fa = function() {
  return this.D < this.k.length - 2 ? new Ph(this.k, this.D + 2, this.ta) : Hd;
};
h.P = function() {
  return this;
};
h.N = function(a, b) {
  return new Ph(this.k, this.D, b);
};
h.R = function(a, b) {
  return he(b, this);
};
function Qh(a, b, c) {
  this.k = a;
  this.D = b;
  this.q = c;
}
Qh.prototype.fc = function() {
  return this.D < this.q;
};
Qh.prototype.next = function() {
  var a = new Q(null, 2, 5, R, [this.k[this.D], this.k[this.D + 1]], null);
  this.D += 2;
  return a;
};
function Ka(a, b, c, d) {
  this.w = a;
  this.q = b;
  this.k = c;
  this.A = d;
  this.o = 16647951;
  this.F = 8196;
}
h = Ka.prototype;
h.toString = function() {
  return gd(this);
};
h.forEach = function(a) {
  for (var b = z(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.B(null, e), g = M.j(f, 0, null), f = M.j(f, 1, null);
      a.h ? a.h(f, g) : a.call(null, f, g);
      e += 1;
    } else {
      if (b = z(b)) {
        P(b) ? (c = v(b), b = w(b), g = c, d = L(c), c = g) : (c = A(b), g = M.j(c, 0, null), c = f = M.j(c, 1, null), a.h ? a.h(c, g) : a.call(null, c, g), b = E(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
h.J = function(a, b) {
  return wb.j(this, b, null);
};
h.I = function(a, b, c) {
  a = Oh(this, b);
  return-1 === a ? c : this.k[a + 1];
};
h.Hb = function(a, b, c) {
  a = this.k.length;
  for (var d = 0;;) {
    if (d < a) {
      var e = this.k[d], f = this.k[d + 1];
      c = b.j ? b.j(c, e, f) : b.call(null, c, e, f);
      if ($d(c)) {
        return b = c, K.g ? K.g(b) : K.call(null, b);
      }
      d += 2;
    } else {
      return c;
    }
  }
};
h.Gb = function() {
  return new Qh(this.k, 0, 2 * this.q);
};
h.L = function() {
  return this.w;
};
h.T = function() {
  return this.q;
};
h.O = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Kd(this);
};
h.M = function(a, b) {
  if (b && (b.o & 1024 || b.xd)) {
    var c = this.k.length;
    if (this.q === b.T(null)) {
      for (var d = 0;;) {
        if (d < c) {
          var e = b.I(null, this.k[d], Ye);
          if (e !== Ye) {
            if (x.h(this.k[d + 1], e)) {
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
    return Nh(this, b);
  }
};
h.vb = function() {
  return new Rh({}, this.k.length, Wa(this.k));
};
h.Z = function() {
  return ic(Sh, this.w);
};
h.ba = function(a, b) {
  return ke.h(b, this);
};
h.ca = function(a, b, c) {
  return ke.j(b, c, this);
};
h.eb = function(a, b) {
  if (0 <= Oh(this, b)) {
    var c = this.k.length, d = c - 2;
    if (0 === d) {
      return db(this);
    }
    for (var d = Array(d), e = 0, f = 0;;) {
      if (e >= c) {
        return new Ka(this.w, this.q - 1, d, null);
      }
      x.h(b, this.k[e]) || (d[f] = this.k[e], d[f + 1] = this.k[e + 1], f += 2);
      e += 2;
    }
  } else {
    return this;
  }
};
h.Aa = function(a, b, c) {
  a = Oh(this, b);
  if (-1 === a) {
    if (this.q < Th) {
      a = this.k;
      for (var d = a.length, e = Array(d + 2), f = 0;;) {
        if (f < d) {
          e[f] = a[f], f += 1;
        } else {
          break;
        }
      }
      e[d] = b;
      e[d + 1] = c;
      return new Ka(this.w, this.q + 1, e, null);
    }
    return ic(Ab(Xg.h(Uh, this), b, c), this.w);
  }
  if (c === this.k[a + 1]) {
    return this;
  }
  b = Wa(this.k);
  b[a + 1] = c;
  return new Ka(this.w, this.q, b, null);
};
h.Vb = function(a, b) {
  return-1 !== Oh(this, b);
};
h.P = function() {
  var a = this.k;
  return 0 <= a.length - 2 ? new Ph(a, 0, null) : null;
};
h.N = function(a, b) {
  return new Ka(b, this.q, this.k, this.A);
};
h.R = function(a, b) {
  if (Ue(b)) {
    return Ab(this, ob.h(b, 0), ob.h(b, 1));
  }
  for (var c = this, d = z(b);;) {
    if (null == d) {
      return c;
    }
    var e = A(d);
    if (Ue(e)) {
      c = Ab(c, ob.h(e, 0), ob.h(e, 1)), d = E(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
h.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.J(null, c);
      case 3:
        return this.I(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.h = function(a, c) {
    return this.J(null, c);
  };
  a.j = function(a, c, d) {
    return this.I(null, c, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Wa(b)));
};
h.g = function(a) {
  return this.J(null, a);
};
h.h = function(a, b) {
  return this.I(null, a, b);
};
var Sh = new Ka(null, 0, [], null), Th = 8;
function Rh(a, b, c) {
  this.zb = a;
  this.Db = b;
  this.k = c;
  this.F = 56;
  this.o = 258;
}
h = Rh.prototype;
h.Mb = function(a, b, c) {
  var d = this;
  if (q(d.zb)) {
    a = Oh(this, b);
    if (-1 === a) {
      return d.Db + 2 <= 2 * Th ? (d.Db += 2, d.k.push(b), d.k.push(c), this) : hg.j(function() {
        var a = d.Db, b = d.k;
        return Vh.h ? Vh.h(a, b) : Vh.call(null, a, b);
      }(), b, c);
    }
    c !== d.k[a + 1] && (d.k[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
h.mb = function(a, b) {
  if (q(this.zb)) {
    if (b ? b.o & 2048 || b.yd || (b.o ? 0 : Sa(Hb, b)) : Sa(Hb, b)) {
      return Uc(this, xf.g ? xf.g(b) : xf.call(null, b), Jf.g ? Jf.g(b) : Jf.call(null, b));
    }
    for (var c = z(b), d = this;;) {
      var e = A(c);
      if (q(e)) {
        var f = e, c = E(c), d = Uc(d, function() {
          var a = f;
          return xf.g ? xf.g(a) : xf.call(null, a);
        }(), function() {
          var a = f;
          return Jf.g ? Jf.g(a) : Jf.call(null, a);
        }())
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent!");
  }
};
h.nb = function() {
  if (q(this.zb)) {
    return this.zb = !1, new Ka(null, rf(this.Db, 2), this.k, null);
  }
  throw Error("persistent! called twice");
};
h.J = function(a, b) {
  return wb.j(this, b, null);
};
h.I = function(a, b, c) {
  if (q(this.zb)) {
    return a = Oh(this, b), -1 === a ? c : this.k[a + 1];
  }
  throw Error("lookup after persistent!");
};
h.T = function() {
  if (q(this.zb)) {
    return rf(this.Db, 2);
  }
  throw Error("count after persistent!");
};
function Vh(a, b) {
  for (var c = Rc(Uh), d = 0;;) {
    if (d < a) {
      c = hg.j(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function Wh() {
  this.t = !1;
}
function Xh(a, b) {
  return a === b ? !0 : Pf(a, b) ? !0 : x.h(a, b);
}
var Yh = function() {
  function a(a, b, c, g, k) {
    a = Wa(a);
    a[b] = c;
    a[g] = k;
    return a;
  }
  function b(a, b, c) {
    a = Wa(a);
    a[b] = c;
    return a;
  }
  var c = null, c = function(c, e, f, g, k) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, f);
      case 5:
        return a.call(this, c, e, f, g, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.j = b;
  c.U = a;
  return c;
}();
function Zh(a, b) {
  var c = Array(a.length - 2);
  We(a, 0, c, 0, 2 * b);
  We(a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
  return c;
}
var $h = function() {
  function a(a, b, c, g, k, l) {
    a = a.Ab(b);
    a.k[c] = g;
    a.k[k] = l;
    return a;
  }
  function b(a, b, c, g) {
    a = a.Ab(b);
    a.k[c] = g;
    return a;
  }
  var c = null, c = function(c, e, f, g, k, l) {
    switch(arguments.length) {
      case 4:
        return b.call(this, c, e, f, g);
      case 6:
        return a.call(this, c, e, f, g, k, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.n = b;
  c.ma = a;
  return c;
}();
function ai(a, b, c) {
  for (var d = a.length, e = 0, f = c;;) {
    if (e < d) {
      c = a[e];
      if (null != c) {
        var g = a[e + 1];
        c = b.j ? b.j(f, c, g) : b.call(null, f, c, g);
      } else {
        c = a[e + 1], c = null != c ? c.qb(b, f) : f;
      }
      if ($d(c)) {
        return a = c, K.g ? K.g(a) : K.call(null, a);
      }
      e += 2;
      f = c;
    } else {
      return f;
    }
  }
}
function bi(a, b, c) {
  this.V = a;
  this.Y = b;
  this.k = c;
}
h = bi.prototype;
h.Ab = function(a) {
  if (a === this.V) {
    return this;
  }
  var b = tf(this.Y), c = Array(0 > b ? 4 : 2 * (b + 1));
  We(this.k, 0, c, 0, 2 * b);
  return new bi(a, this.Y, c);
};
h.Ob = function() {
  var a = this.k;
  return ci.g ? ci.g(a) : ci.call(null, a);
};
h.qb = function(a, b) {
  return ai(this.k, a, b);
};
h.hb = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.Y & e)) {
    return d;
  }
  var f = tf(this.Y & e - 1), e = this.k[2 * f], f = this.k[2 * f + 1];
  return null == e ? f.hb(a + 5, b, c, d) : Xh(c, e) ? f : d;
};
h.Fa = function(a, b, c, d, e, f) {
  var g = 1 << (c >>> b & 31), k = tf(this.Y & g - 1);
  if (0 === (this.Y & g)) {
    var l = tf(this.Y);
    if (2 * l < this.k.length) {
      var m = this.Ab(a), p = m.k;
      f.t = !0;
      Xe(p, 2 * k, p, 2 * (k + 1), 2 * (l - k));
      p[2 * k] = d;
      p[2 * k + 1] = e;
      m.Y |= g;
      return m;
    }
    if (16 <= l) {
      g = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      g[c >>> b & 31] = di.Fa(a, b + 5, c, d, e, f);
      for (m = k = 0;;) {
        if (32 > k) {
          0 !== (this.Y >>> k & 1) && (g[k] = null != this.k[m] ? di.Fa(a, b + 5, Bd(this.k[m]), this.k[m], this.k[m + 1], f) : this.k[m + 1], m += 2), k += 1;
        } else {
          break;
        }
      }
      return new ei(a, l + 1, g);
    }
    p = Array(2 * (l + 4));
    We(this.k, 0, p, 0, 2 * k);
    p[2 * k] = d;
    p[2 * k + 1] = e;
    We(this.k, 2 * k, p, 2 * (k + 1), 2 * (l - k));
    f.t = !0;
    m = this.Ab(a);
    m.k = p;
    m.Y |= g;
    return m;
  }
  var t = this.k[2 * k], r = this.k[2 * k + 1];
  if (null == t) {
    return l = r.Fa(a, b + 5, c, d, e, f), l === r ? this : $h.n(this, a, 2 * k + 1, l);
  }
  if (Xh(d, t)) {
    return e === r ? this : $h.n(this, a, 2 * k + 1, e);
  }
  f.t = !0;
  return $h.ma(this, a, 2 * k, null, 2 * k + 1, function() {
    var f = b + 5;
    return fi.va ? fi.va(a, f, t, r, c, d, e) : fi.call(null, a, f, t, r, c, d, e);
  }());
};
h.Ea = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), g = tf(this.Y & f - 1);
  if (0 === (this.Y & f)) {
    var k = tf(this.Y);
    if (16 <= k) {
      f = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      f[b >>> a & 31] = di.Ea(a + 5, b, c, d, e);
      for (var l = g = 0;;) {
        if (32 > g) {
          0 !== (this.Y >>> g & 1) && (f[g] = null != this.k[l] ? di.Ea(a + 5, Bd(this.k[l]), this.k[l], this.k[l + 1], e) : this.k[l + 1], l += 2), g += 1;
        } else {
          break;
        }
      }
      return new ei(null, k + 1, f);
    }
    l = Array(2 * (k + 1));
    We(this.k, 0, l, 0, 2 * g);
    l[2 * g] = c;
    l[2 * g + 1] = d;
    We(this.k, 2 * g, l, 2 * (g + 1), 2 * (k - g));
    e.t = !0;
    return new bi(null, this.Y | f, l);
  }
  var m = this.k[2 * g], p = this.k[2 * g + 1];
  if (null == m) {
    return k = p.Ea(a + 5, b, c, d, e), k === p ? this : new bi(null, this.Y, Yh.j(this.k, 2 * g + 1, k));
  }
  if (Xh(c, m)) {
    return d === p ? this : new bi(null, this.Y, Yh.j(this.k, 2 * g + 1, d));
  }
  e.t = !0;
  return new bi(null, this.Y, Yh.U(this.k, 2 * g, null, 2 * g + 1, function() {
    var e = a + 5;
    return fi.ma ? fi.ma(e, m, p, b, c, d) : fi.call(null, e, m, p, b, c, d);
  }()));
};
h.Pb = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if (0 === (this.Y & d)) {
    return this;
  }
  var e = tf(this.Y & d - 1), f = this.k[2 * e], g = this.k[2 * e + 1];
  return null == f ? (a = g.Pb(a + 5, b, c), a === g ? this : null != a ? new bi(null, this.Y, Yh.j(this.k, 2 * e + 1, a)) : this.Y === d ? null : new bi(null, this.Y ^ d, Zh(this.k, e))) : Xh(c, f) ? new bi(null, this.Y ^ d, Zh(this.k, e)) : this;
};
var di = new bi(null, 0, []);
function ei(a, b, c) {
  this.V = a;
  this.q = b;
  this.k = c;
}
h = ei.prototype;
h.Ab = function(a) {
  return a === this.V ? this : new ei(a, this.q, Wa(this.k));
};
h.Ob = function() {
  var a = this.k;
  return gi.g ? gi.g(a) : gi.call(null, a);
};
h.qb = function(a, b) {
  for (var c = this.k.length, d = 0, e = b;;) {
    if (d < c) {
      var f = this.k[d];
      if (null != f && (e = f.qb(a, e), $d(e))) {
        return c = e, K.g ? K.g(c) : K.call(null, c);
      }
      d += 1;
    } else {
      return e;
    }
  }
};
h.hb = function(a, b, c, d) {
  var e = this.k[b >>> a & 31];
  return null != e ? e.hb(a + 5, b, c, d) : d;
};
h.Fa = function(a, b, c, d, e, f) {
  var g = c >>> b & 31, k = this.k[g];
  if (null == k) {
    return a = $h.n(this, a, g, di.Fa(a, b + 5, c, d, e, f)), a.q += 1, a;
  }
  b = k.Fa(a, b + 5, c, d, e, f);
  return b === k ? this : $h.n(this, a, g, b);
};
h.Ea = function(a, b, c, d, e) {
  var f = b >>> a & 31, g = this.k[f];
  if (null == g) {
    return new ei(null, this.q + 1, Yh.j(this.k, f, di.Ea(a + 5, b, c, d, e)));
  }
  a = g.Ea(a + 5, b, c, d, e);
  return a === g ? this : new ei(null, this.q, Yh.j(this.k, f, a));
};
h.Pb = function(a, b, c) {
  var d = b >>> a & 31, e = this.k[d];
  if (null != e) {
    a = e.Pb(a + 5, b, c);
    if (a === e) {
      d = this;
    } else {
      if (null == a) {
        if (8 >= this.q) {
          a: {
            e = this.k;
            a = e.length;
            b = Array(2 * (this.q - 1));
            c = 0;
            for (var f = 1, g = 0;;) {
              if (c < a) {
                c !== d && null != e[c] && (b[f] = e[c], f += 2, g |= 1 << c), c += 1;
              } else {
                d = new bi(null, g, b);
                break a;
              }
            }
            d = void 0;
          }
        } else {
          d = new ei(null, this.q - 1, Yh.j(this.k, d, a));
        }
      } else {
        d = new ei(null, this.q, Yh.j(this.k, d, a));
      }
    }
    return d;
  }
  return this;
};
function hi(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (Xh(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return-1;
    }
  }
}
function ii(a, b, c, d) {
  this.V = a;
  this.Ya = b;
  this.q = c;
  this.k = d;
}
h = ii.prototype;
h.Ab = function(a) {
  if (a === this.V) {
    return this;
  }
  var b = Array(2 * (this.q + 1));
  We(this.k, 0, b, 0, 2 * this.q);
  return new ii(a, this.Ya, this.q, b);
};
h.Ob = function() {
  var a = this.k;
  return ci.g ? ci.g(a) : ci.call(null, a);
};
h.qb = function(a, b) {
  return ai(this.k, a, b);
};
h.hb = function(a, b, c, d) {
  a = hi(this.k, this.q, c);
  return 0 > a ? d : Xh(c, this.k[a]) ? this.k[a + 1] : d;
};
h.Fa = function(a, b, c, d, e, f) {
  if (c === this.Ya) {
    b = hi(this.k, this.q, d);
    if (-1 === b) {
      if (this.k.length > 2 * this.q) {
        return a = $h.ma(this, a, 2 * this.q, d, 2 * this.q + 1, e), f.t = !0, a.q += 1, a;
      }
      c = this.k.length;
      b = Array(c + 2);
      We(this.k, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      f.t = !0;
      f = this.q + 1;
      a === this.V ? (this.k = b, this.q = f, a = this) : a = new ii(this.V, this.Ya, f, b);
      return a;
    }
    return this.k[b + 1] === e ? this : $h.n(this, a, b + 1, e);
  }
  return(new bi(a, 1 << (this.Ya >>> b & 31), [null, this, null, null])).Fa(a, b, c, d, e, f);
};
h.Ea = function(a, b, c, d, e) {
  return b === this.Ya ? (a = hi(this.k, this.q, c), -1 === a ? (a = 2 * this.q, b = Array(a + 2), We(this.k, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.t = !0, new ii(null, this.Ya, this.q + 1, b)) : x.h(this.k[a], d) ? this : new ii(null, this.Ya, this.q, Yh.j(this.k, a + 1, d))) : (new bi(null, 1 << (this.Ya >>> a & 31), [null, this])).Ea(a, b, c, d, e);
};
h.Pb = function(a, b, c) {
  a = hi(this.k, this.q, c);
  return-1 === a ? this : 1 === this.q ? null : new ii(null, this.Ya, this.q - 1, Zh(this.k, rf(a, 2)));
};
var fi = function() {
  function a(a, b, c, g, k, l, m) {
    var p = Bd(c);
    if (p === k) {
      return new ii(null, p, 2, [c, g, l, m]);
    }
    var t = new Wh;
    return di.Fa(a, b, p, c, g, t).Fa(a, b, k, l, m, t);
  }
  function b(a, b, c, g, k, l) {
    var m = Bd(b);
    if (m === g) {
      return new ii(null, m, 2, [b, c, k, l]);
    }
    var p = new Wh;
    return di.Ea(a, m, b, c, p).Ea(a, g, k, l, p);
  }
  var c = null, c = function(c, e, f, g, k, l, m) {
    switch(arguments.length) {
      case 6:
        return b.call(this, c, e, f, g, k, l);
      case 7:
        return a.call(this, c, e, f, g, k, l, m);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.ma = b;
  c.va = a;
  return c;
}();
function ji(a, b, c, d, e) {
  this.w = a;
  this.ib = b;
  this.D = c;
  this.aa = d;
  this.A = e;
  this.F = 0;
  this.o = 32374860;
}
h = ji.prototype;
h.toString = function() {
  return gd(this);
};
h.L = function() {
  return this.w;
};
h.O = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Jd(this);
};
h.M = function(a, b) {
  return ge(this, b);
};
h.Z = function() {
  return je(Hd, this.w);
};
h.ba = function(a, b) {
  return ke.h(b, this);
};
h.ca = function(a, b, c) {
  return ke.j(b, c, this);
};
h.$ = function() {
  return null == this.aa ? new Q(null, 2, 5, R, [this.ib[this.D], this.ib[this.D + 1]], null) : A(this.aa);
};
h.fa = function() {
  if (null == this.aa) {
    var a = this.ib, b = this.D + 2;
    return ci.j ? ci.j(a, b, null) : ci.call(null, a, b, null);
  }
  var a = this.ib, b = this.D, c = E(this.aa);
  return ci.j ? ci.j(a, b, c) : ci.call(null, a, b, c);
};
h.P = function() {
  return this;
};
h.N = function(a, b) {
  return new ji(b, this.ib, this.D, this.aa, this.A);
};
h.R = function(a, b) {
  return he(b, this);
};
var ci = function() {
  function a(a, b, c) {
    if (null == c) {
      for (c = a.length;;) {
        if (b < c) {
          if (null != a[b]) {
            return new ji(null, a, b, null, null);
          }
          var g = a[b + 1];
          if (q(g) && (g = g.Ob(), q(g))) {
            return new ji(null, a, b + 2, g, null);
          }
          b += 2;
        } else {
          return null;
        }
      }
    } else {
      return new ji(null, a, b, c, null);
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
function Sj(a, b, c, d, e) {
  this.w = a;
  this.ib = b;
  this.D = c;
  this.aa = d;
  this.A = e;
  this.F = 0;
  this.o = 32374860;
}
h = Sj.prototype;
h.toString = function() {
  return gd(this);
};
h.L = function() {
  return this.w;
};
h.O = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Jd(this);
};
h.M = function(a, b) {
  return ge(this, b);
};
h.Z = function() {
  return je(Hd, this.w);
};
h.ba = function(a, b) {
  return ke.h(b, this);
};
h.ca = function(a, b, c) {
  return ke.j(b, c, this);
};
h.$ = function() {
  return A(this.aa);
};
h.fa = function() {
  var a = this.ib, b = this.D, c = E(this.aa);
  return gi.n ? gi.n(null, a, b, c) : gi.call(null, null, a, b, c);
};
h.P = function() {
  return this;
};
h.N = function(a, b) {
  return new Sj(b, this.ib, this.D, this.aa, this.A);
};
h.R = function(a, b) {
  return he(b, this);
};
var gi = function() {
  function a(a, b, c, g) {
    if (null == g) {
      for (g = b.length;;) {
        if (c < g) {
          var k = b[c];
          if (q(k) && (k = k.Ob(), q(k))) {
            return new Sj(a, b, c + 1, k, null);
          }
          c += 1;
        } else {
          return null;
        }
      }
    } else {
      return new Sj(a, b, c, g, null);
    }
  }
  function b(a) {
    return c.n(null, a, 0, null);
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
  c.n = a;
  return c;
}();
function Tj(a, b, c, d, e, f) {
  this.w = a;
  this.q = b;
  this.root = c;
  this.oa = d;
  this.xa = e;
  this.A = f;
  this.o = 16123663;
  this.F = 8196;
}
h = Tj.prototype;
h.toString = function() {
  return gd(this);
};
h.forEach = function(a) {
  for (var b = z(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.B(null, e), g = M.j(f, 0, null), f = M.j(f, 1, null);
      a.h ? a.h(f, g) : a.call(null, f, g);
      e += 1;
    } else {
      if (b = z(b)) {
        P(b) ? (c = v(b), b = w(b), g = c, d = L(c), c = g) : (c = A(b), g = M.j(c, 0, null), c = f = M.j(c, 1, null), a.h ? a.h(c, g) : a.call(null, c, g), b = E(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
h.J = function(a, b) {
  return wb.j(this, b, null);
};
h.I = function(a, b, c) {
  return null == b ? this.oa ? this.xa : c : null == this.root ? c : this.root.hb(0, Bd(b), b, c);
};
h.Hb = function(a, b, c) {
  this.oa && (a = this.xa, c = b.j ? b.j(c, null, a) : b.call(null, c, null, a));
  return $d(c) ? K.g ? K.g(c) : K.call(null, c) : null != this.root ? this.root.qb(b, c) : c;
};
h.L = function() {
  return this.w;
};
h.T = function() {
  return this.q;
};
h.O = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Kd(this);
};
h.M = function(a, b) {
  return Nh(this, b);
};
h.vb = function() {
  return new Uj({}, this.root, this.q, this.oa, this.xa);
};
h.Z = function() {
  return ic(Uh, this.w);
};
h.eb = function(a, b) {
  if (null == b) {
    return this.oa ? new Tj(this.w, this.q - 1, this.root, !1, null, null) : this;
  }
  if (null == this.root) {
    return this;
  }
  var c = this.root.Pb(0, Bd(b), b);
  return c === this.root ? this : new Tj(this.w, this.q - 1, c, this.oa, this.xa, null);
};
h.Aa = function(a, b, c) {
  if (null == b) {
    return this.oa && c === this.xa ? this : new Tj(this.w, this.oa ? this.q : this.q + 1, this.root, !0, c, null);
  }
  a = new Wh;
  b = (null == this.root ? di : this.root).Ea(0, Bd(b), b, c, a);
  return b === this.root ? this : new Tj(this.w, a.t ? this.q + 1 : this.q, b, this.oa, this.xa, null);
};
h.Vb = function(a, b) {
  return null == b ? this.oa : null == this.root ? !1 : this.root.hb(0, Bd(b), b, Ye) !== Ye;
};
h.P = function() {
  if (0 < this.q) {
    var a = null != this.root ? this.root.Ob() : null;
    return this.oa ? he(new Q(null, 2, 5, R, [null, this.xa], null), a) : a;
  }
  return null;
};
h.N = function(a, b) {
  return new Tj(b, this.q, this.root, this.oa, this.xa, this.A);
};
h.R = function(a, b) {
  if (Ue(b)) {
    return Ab(this, ob.h(b, 0), ob.h(b, 1));
  }
  for (var c = this, d = z(b);;) {
    if (null == d) {
      return c;
    }
    var e = A(d);
    if (Ue(e)) {
      c = Ab(c, ob.h(e, 0), ob.h(e, 1)), d = E(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
h.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.J(null, c);
      case 3:
        return this.I(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.h = function(a, c) {
    return this.J(null, c);
  };
  a.j = function(a, c, d) {
    return this.I(null, c, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Wa(b)));
};
h.g = function(a) {
  return this.J(null, a);
};
h.h = function(a, b) {
  return this.I(null, a, b);
};
var Uh = new Tj(null, 0, null, !1, null, 0);
function pe(a, b) {
  for (var c = a.length, d = 0, e = Rc(Uh);;) {
    if (d < c) {
      var f = d + 1, e = e.Mb(null, a[d], b[d]), d = f
    } else {
      return Tc(e);
    }
  }
}
function Uj(a, b, c, d, e) {
  this.V = a;
  this.root = b;
  this.count = c;
  this.oa = d;
  this.xa = e;
  this.F = 56;
  this.o = 258;
}
h = Uj.prototype;
h.Mb = function(a, b, c) {
  return Vj(this, b, c);
};
h.mb = function(a, b) {
  return Wj(this, b);
};
h.nb = function() {
  var a;
  if (this.V) {
    this.V = null, a = new Tj(null, this.count, this.root, this.oa, this.xa, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
h.J = function(a, b) {
  return null == b ? this.oa ? this.xa : null : null == this.root ? null : this.root.hb(0, Bd(b), b);
};
h.I = function(a, b, c) {
  return null == b ? this.oa ? this.xa : c : null == this.root ? c : this.root.hb(0, Bd(b), b, c);
};
h.T = function() {
  if (this.V) {
    return this.count;
  }
  throw Error("count after persistent!");
};
function Wj(a, b) {
  if (a.V) {
    if (b ? b.o & 2048 || b.yd || (b.o ? 0 : Sa(Hb, b)) : Sa(Hb, b)) {
      return Vj(a, xf.g ? xf.g(b) : xf.call(null, b), Jf.g ? Jf.g(b) : Jf.call(null, b));
    }
    for (var c = z(b), d = a;;) {
      var e = A(c);
      if (q(e)) {
        var f = e, c = E(c), d = Vj(d, function() {
          var a = f;
          return xf.g ? xf.g(a) : xf.call(null, a);
        }(), function() {
          var a = f;
          return Jf.g ? Jf.g(a) : Jf.call(null, a);
        }())
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent");
  }
}
function Vj(a, b, c) {
  if (a.V) {
    if (null == b) {
      a.xa !== c && (a.xa = c), a.oa || (a.count += 1, a.oa = !0);
    } else {
      var d = new Wh;
      b = (null == a.root ? di : a.root).Fa(a.V, 0, Bd(b), b, c, d);
      b !== a.root && (a.root = b);
      d.t && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
function Xj(a, b, c) {
  for (var d = b;;) {
    if (null != a) {
      b = c ? a.left : a.right, d = ne.h(d, a), a = b;
    } else {
      return d;
    }
  }
}
function Yj(a, b, c, d, e) {
  this.w = a;
  this.stack = b;
  this.Sb = c;
  this.q = d;
  this.A = e;
  this.F = 0;
  this.o = 32374862;
}
h = Yj.prototype;
h.toString = function() {
  return gd(this);
};
h.L = function() {
  return this.w;
};
h.T = function() {
  return 0 > this.q ? L(E(this)) + 1 : this.q;
};
h.O = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Jd(this);
};
h.M = function(a, b) {
  return ge(this, b);
};
h.Z = function() {
  return je(Hd, this.w);
};
h.ba = function(a, b) {
  return ke.h(b, this);
};
h.ca = function(a, b, c) {
  return ke.j(b, c, this);
};
h.$ = function() {
  var a = this.stack;
  return null == a ? null : Pb(a);
};
h.fa = function() {
  var a = A(this.stack), a = Xj(this.Sb ? a.right : a.left, E(this.stack), this.Sb);
  return null != a ? new Yj(null, a, this.Sb, this.q - 1, null) : Hd;
};
h.P = function() {
  return this;
};
h.N = function(a, b) {
  return new Yj(b, this.stack, this.Sb, this.q, this.A);
};
h.R = function(a, b) {
  return he(b, this);
};
function Zj(a, b, c) {
  return new Yj(null, Xj(a, null, b), b, c, null);
}
function ak(a, b, c, d) {
  return c instanceof bk ? c.left instanceof bk ? new bk(c.key, c.t, c.left.Ka(), new ck(a, b, c.right, d, null), null) : c.right instanceof bk ? new bk(c.right.key, c.right.t, new ck(c.key, c.t, c.left, c.right.left, null), new ck(a, b, c.right.right, d, null), null) : new ck(a, b, c, d, null) : new ck(a, b, c, d, null);
}
function dk(a, b, c, d) {
  return d instanceof bk ? d.right instanceof bk ? new bk(d.key, d.t, new ck(a, b, c, d.left, null), d.right.Ka(), null) : d.left instanceof bk ? new bk(d.left.key, d.left.t, new ck(a, b, c, d.left.left, null), new ck(d.key, d.t, d.left.right, d.right, null), null) : new ck(a, b, c, d, null) : new ck(a, b, c, d, null);
}
function ek(a, b, c, d) {
  if (c instanceof bk) {
    return new bk(a, b, c.Ka(), d, null);
  }
  if (d instanceof ck) {
    return dk(a, b, c, d.Qb());
  }
  if (d instanceof bk && d.left instanceof ck) {
    return new bk(d.left.key, d.left.t, new ck(a, b, c, d.left.left, null), dk(d.key, d.t, d.left.right, d.right.Qb()), null);
  }
  throw Error("red-black tree invariant violation");
}
var gk = function fk(b, c, d) {
  d = null != b.left ? fk(b.left, c, d) : d;
  if ($d(d)) {
    return K.g ? K.g(d) : K.call(null, d);
  }
  var e = b.key, f = b.t;
  d = c.j ? c.j(d, e, f) : c.call(null, d, e, f);
  if ($d(d)) {
    return K.g ? K.g(d) : K.call(null, d);
  }
  b = null != b.right ? fk(b.right, c, d) : d;
  return $d(b) ? K.g ? K.g(b) : K.call(null, b) : b;
};
function ck(a, b, c, d, e) {
  this.key = a;
  this.t = b;
  this.left = c;
  this.right = d;
  this.A = e;
  this.F = 0;
  this.o = 32402207;
}
h = ck.prototype;
h.Cc = function(a) {
  return a.Ec(this);
};
h.Qb = function() {
  return new bk(this.key, this.t, this.left, this.right, null);
};
h.Ka = function() {
  return this;
};
h.Bc = function(a) {
  return a.Dc(this);
};
h.replace = function(a, b, c, d) {
  return new ck(a, b, c, d, null);
};
h.Dc = function(a) {
  return new ck(a.key, a.t, this, a.right, null);
};
h.Ec = function(a) {
  return new ck(a.key, a.t, a.left, this, null);
};
h.qb = function(a, b) {
  return gk(this, a, b);
};
h.J = function(a, b) {
  return ob.j(this, b, null);
};
h.I = function(a, b, c) {
  return ob.j(this, b, c);
};
h.B = function(a, b) {
  return 0 === b ? this.key : 1 === b ? this.t : null;
};
h.wa = function(a, b, c) {
  return 0 === b ? this.key : 1 === b ? this.t : c;
};
h.ob = function(a, b, c) {
  return(new Q(null, 2, 5, R, [this.key, this.t], null)).ob(null, b, c);
};
h.L = function() {
  return null;
};
h.T = function() {
  return 2;
};
h.Ib = function() {
  return this.key;
};
h.Jb = function() {
  return this.t;
};
h.fb = function() {
  return this.t;
};
h.O = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Jd(this);
};
h.M = function(a, b) {
  return ge(this, b);
};
h.Z = function() {
  return me;
};
h.ba = function(a, b) {
  return ae.h(this, b);
};
h.ca = function(a, b, c) {
  return ae.j(this, b, c);
};
h.Aa = function(a, b, c) {
  return Be.j(new Q(null, 2, 5, R, [this.key, this.t], null), b, c);
};
h.P = function() {
  return mb(mb(Hd, this.t), this.key);
};
h.N = function(a, b) {
  return je(new Q(null, 2, 5, R, [this.key, this.t], null), b);
};
h.R = function(a, b) {
  return new Q(null, 3, 5, R, [this.key, this.t, b], null);
};
h.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.J(null, c);
      case 3:
        return this.I(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.h = function(a, c) {
    return this.J(null, c);
  };
  a.j = function(a, c, d) {
    return this.I(null, c, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Wa(b)));
};
h.g = function(a) {
  return this.J(null, a);
};
h.h = function(a, b) {
  return this.I(null, a, b);
};
function bk(a, b, c, d, e) {
  this.key = a;
  this.t = b;
  this.left = c;
  this.right = d;
  this.A = e;
  this.F = 0;
  this.o = 32402207;
}
h = bk.prototype;
h.Cc = function(a) {
  return new bk(this.key, this.t, this.left, a, null);
};
h.Qb = function() {
  throw Error("red-black tree invariant violation");
};
h.Ka = function() {
  return new ck(this.key, this.t, this.left, this.right, null);
};
h.Bc = function(a) {
  return new bk(this.key, this.t, a, this.right, null);
};
h.replace = function(a, b, c, d) {
  return new bk(a, b, c, d, null);
};
h.Dc = function(a) {
  return this.left instanceof bk ? new bk(this.key, this.t, this.left.Ka(), new ck(a.key, a.t, this.right, a.right, null), null) : this.right instanceof bk ? new bk(this.right.key, this.right.t, new ck(this.key, this.t, this.left, this.right.left, null), new ck(a.key, a.t, this.right.right, a.right, null), null) : new ck(a.key, a.t, this, a.right, null);
};
h.Ec = function(a) {
  return this.right instanceof bk ? new bk(this.key, this.t, new ck(a.key, a.t, a.left, this.left, null), this.right.Ka(), null) : this.left instanceof bk ? new bk(this.left.key, this.left.t, new ck(a.key, a.t, a.left, this.left.left, null), new ck(this.key, this.t, this.left.right, this.right, null), null) : new ck(a.key, a.t, a.left, this, null);
};
h.qb = function(a, b) {
  return gk(this, a, b);
};
h.J = function(a, b) {
  return ob.j(this, b, null);
};
h.I = function(a, b, c) {
  return ob.j(this, b, c);
};
h.B = function(a, b) {
  return 0 === b ? this.key : 1 === b ? this.t : null;
};
h.wa = function(a, b, c) {
  return 0 === b ? this.key : 1 === b ? this.t : c;
};
h.ob = function(a, b, c) {
  return(new Q(null, 2, 5, R, [this.key, this.t], null)).ob(null, b, c);
};
h.L = function() {
  return null;
};
h.T = function() {
  return 2;
};
h.Ib = function() {
  return this.key;
};
h.Jb = function() {
  return this.t;
};
h.fb = function() {
  return this.t;
};
h.O = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Jd(this);
};
h.M = function(a, b) {
  return ge(this, b);
};
h.Z = function() {
  return me;
};
h.ba = function(a, b) {
  return ae.h(this, b);
};
h.ca = function(a, b, c) {
  return ae.j(this, b, c);
};
h.Aa = function(a, b, c) {
  return Be.j(new Q(null, 2, 5, R, [this.key, this.t], null), b, c);
};
h.P = function() {
  return mb(mb(Hd, this.t), this.key);
};
h.N = function(a, b) {
  return je(new Q(null, 2, 5, R, [this.key, this.t], null), b);
};
h.R = function(a, b) {
  return new Q(null, 3, 5, R, [this.key, this.t, b], null);
};
h.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.J(null, c);
      case 3:
        return this.I(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.h = function(a, c) {
    return this.J(null, c);
  };
  a.j = function(a, c, d) {
    return this.I(null, c, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Wa(b)));
};
h.g = function(a) {
  return this.J(null, a);
};
h.h = function(a, b) {
  return this.I(null, a, b);
};
var ik = function hk(b, c, d, e, f) {
  if (null == c) {
    return new bk(d, e, null, null, null);
  }
  var g;
  g = c.key;
  g = b.h ? b.h(d, g) : b.call(null, d, g);
  if (0 === g) {
    return f[0] = c, null;
  }
  if (0 > g) {
    return b = hk(b, c.left, d, e, f), null != b ? c.Bc(b) : null;
  }
  b = hk(b, c.right, d, e, f);
  return null != b ? c.Cc(b) : null;
}, kk = function jk(b, c) {
  if (null == b) {
    return c;
  }
  if (null == c) {
    return b;
  }
  if (b instanceof bk) {
    if (c instanceof bk) {
      var d = jk(b.right, c.left);
      return d instanceof bk ? new bk(d.key, d.t, new bk(b.key, b.t, b.left, d.left, null), new bk(c.key, c.t, d.right, c.right, null), null) : new bk(b.key, b.t, b.left, new bk(c.key, c.t, d, c.right, null), null);
    }
    return new bk(b.key, b.t, b.left, jk(b.right, c), null);
  }
  if (c instanceof bk) {
    return new bk(c.key, c.t, jk(b, c.left), c.right, null);
  }
  d = jk(b.right, c.left);
  return d instanceof bk ? new bk(d.key, d.t, new ck(b.key, b.t, b.left, d.left, null), new ck(c.key, c.t, d.right, c.right, null), null) : ek(b.key, b.t, b.left, new ck(c.key, c.t, d, c.right, null));
}, mk = function lk(b, c, d, e) {
  if (null != c) {
    var f;
    f = c.key;
    f = b.h ? b.h(d, f) : b.call(null, d, f);
    if (0 === f) {
      return e[0] = c, kk(c.left, c.right);
    }
    if (0 > f) {
      return b = lk(b, c.left, d, e), null != b || null != e[0] ? c.left instanceof ck ? ek(c.key, c.t, b, c.right) : new bk(c.key, c.t, b, c.right, null) : null;
    }
    b = lk(b, c.right, d, e);
    if (null != b || null != e[0]) {
      if (c.right instanceof ck) {
        if (e = c.key, d = c.t, c = c.left, b instanceof bk) {
          c = new bk(e, d, c, b.Ka(), null);
        } else {
          if (c instanceof ck) {
            c = ak(e, d, c.Qb(), b);
          } else {
            if (c instanceof bk && c.right instanceof ck) {
              c = new bk(c.right.key, c.right.t, ak(c.key, c.t, c.left.Qb(), c.right.left), new ck(e, d, c.right.right, b, null), null);
            } else {
              throw Error("red-black tree invariant violation");
            }
          }
        }
      } else {
        c = new bk(c.key, c.t, c.left, b, null);
      }
    } else {
      c = null;
    }
    return c;
  }
  return null;
}, ok = function nk(b, c, d, e) {
  var f = c.key, g = b.h ? b.h(d, f) : b.call(null, d, f);
  return 0 === g ? c.replace(f, e, c.left, c.right) : 0 > g ? c.replace(f, c.t, nk(b, c.left, d, e), c.right) : c.replace(f, c.t, c.left, nk(b, c.right, d, e));
};
function pk(a, b, c, d, e) {
  this.Da = a;
  this.cb = b;
  this.q = c;
  this.w = d;
  this.A = e;
  this.o = 418776847;
  this.F = 8192;
}
h = pk.prototype;
h.forEach = function(a) {
  for (var b = z(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.B(null, e), g = M.j(f, 0, null), f = M.j(f, 1, null);
      a.h ? a.h(f, g) : a.call(null, f, g);
      e += 1;
    } else {
      if (b = z(b)) {
        P(b) ? (c = v(b), b = w(b), g = c, d = L(c), c = g) : (c = A(b), g = M.j(c, 0, null), c = f = M.j(c, 1, null), a.h ? a.h(c, g) : a.call(null, c, g), b = E(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
h.toString = function() {
  return gd(this);
};
function qk(a, b) {
  for (var c = a.cb;;) {
    if (null != c) {
      var d;
      d = c.key;
      d = a.Da.h ? a.Da.h(b, d) : a.Da.call(null, b, d);
      if (0 === d) {
        return c;
      }
      c = 0 > d ? c.left : c.right;
    } else {
      return null;
    }
  }
}
h.J = function(a, b) {
  return wb.j(this, b, null);
};
h.I = function(a, b, c) {
  a = qk(this, b);
  return null != a ? a.t : c;
};
h.Hb = function(a, b, c) {
  return null != this.cb ? gk(this.cb, b, c) : c;
};
h.L = function() {
  return this.w;
};
h.T = function() {
  return this.q;
};
h.Kb = function() {
  return 0 < this.q ? Zj(this.cb, !1, this.q) : null;
};
h.O = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Kd(this);
};
h.M = function(a, b) {
  return Nh(this, b);
};
h.Z = function() {
  return je(rk, this.w);
};
h.eb = function(a, b) {
  var c = [null], d = mk(this.Da, this.cb, b, c);
  return null == d ? null == M.h(c, 0) ? this : new pk(this.Da, null, 0, this.w, null) : new pk(this.Da, d.Ka(), this.q - 1, this.w, null);
};
h.Aa = function(a, b, c) {
  a = [null];
  var d = ik(this.Da, this.cb, b, c, a);
  return null == d ? (a = M.h(a, 0), x.h(c, a.t) ? this : new pk(this.Da, ok(this.Da, this.cb, b, c), this.q, this.w, null)) : new pk(this.Da, d.Ka(), this.q + 1, this.w, null);
};
h.Vb = function(a, b) {
  return null != qk(this, b);
};
h.P = function() {
  return 0 < this.q ? Zj(this.cb, !0, this.q) : null;
};
h.N = function(a, b) {
  return new pk(this.Da, this.cb, this.q, b, this.A);
};
h.R = function(a, b) {
  if (Ue(b)) {
    return Ab(this, ob.h(b, 0), ob.h(b, 1));
  }
  for (var c = this, d = z(b);;) {
    if (null == d) {
      return c;
    }
    var e = A(d);
    if (Ue(e)) {
      c = Ab(c, ob.h(e, 0), ob.h(e, 1)), d = E(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
h.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.J(null, c);
      case 3:
        return this.I(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.h = function(a, c) {
    return this.J(null, c);
  };
  a.j = function(a, c, d) {
    return this.I(null, c, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Wa(b)));
};
h.g = function(a) {
  return this.J(null, a);
};
h.h = function(a, b) {
  return this.I(null, a, b);
};
var rk = new pk(Ed, null, 0, null, 0), Fg = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = J(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = z(a);
    for (var b = Rc(Uh);;) {
      if (a) {
        var e = E(E(a)), b = hg.j(b, A(a), A(E(a)));
        a = e;
      } else {
        return Tc(b);
      }
    }
  }
  a.C = 0;
  a.p = function(a) {
    a = z(a);
    return b(a);
  };
  a.l = b;
  return a;
}(), sk = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = J(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    for (var e = z(b), f = new pk(df(a), null, 0, null, 0);;) {
      if (e) {
        var g = E(E(e)), f = Be.j(f, A(e), A(E(e))), e = g
      } else {
        return f;
      }
    }
  }
  a.C = 1;
  a.p = function(a) {
    var d = A(a);
    a = D(a);
    return b(d, a);
  };
  a.l = b;
  return a;
}();
function tk(a, b) {
  this.sa = a;
  this.ta = b;
  this.F = 0;
  this.o = 32374988;
}
h = tk.prototype;
h.toString = function() {
  return gd(this);
};
h.L = function() {
  return this.ta;
};
h.ha = function() {
  var a = this.sa, a = (a ? a.o & 128 || a.Zb || (a.o ? 0 : Sa(tb, a)) : Sa(tb, a)) ? this.sa.ha(null) : E(this.sa);
  return null == a ? null : new tk(a, this.ta);
};
h.O = function() {
  return Jd(this);
};
h.M = function(a, b) {
  return ge(this, b);
};
h.Z = function() {
  return je(Hd, this.ta);
};
h.ba = function(a, b) {
  return ke.h(b, this);
};
h.ca = function(a, b, c) {
  return ke.j(b, c, this);
};
h.$ = function() {
  return this.sa.$(null).Ib(null);
};
h.fa = function() {
  var a = this.sa, a = (a ? a.o & 128 || a.Zb || (a.o ? 0 : Sa(tb, a)) : Sa(tb, a)) ? this.sa.ha(null) : E(this.sa);
  return null != a ? new tk(a, this.ta) : Hd;
};
h.P = function() {
  return this;
};
h.N = function(a, b) {
  return new tk(this.sa, b);
};
h.R = function(a, b) {
  return he(b, this);
};
function uk(a) {
  return(a = z(a)) ? new tk(a, null) : null;
}
function xf(a) {
  return Mb(a);
}
function vk(a, b) {
  this.sa = a;
  this.ta = b;
  this.F = 0;
  this.o = 32374988;
}
h = vk.prototype;
h.toString = function() {
  return gd(this);
};
h.L = function() {
  return this.ta;
};
h.ha = function() {
  var a = this.sa, a = (a ? a.o & 128 || a.Zb || (a.o ? 0 : Sa(tb, a)) : Sa(tb, a)) ? this.sa.ha(null) : E(this.sa);
  return null == a ? null : new vk(a, this.ta);
};
h.O = function() {
  return Jd(this);
};
h.M = function(a, b) {
  return ge(this, b);
};
h.Z = function() {
  return je(Hd, this.ta);
};
h.ba = function(a, b) {
  return ke.h(b, this);
};
h.ca = function(a, b, c) {
  return ke.j(b, c, this);
};
h.$ = function() {
  return this.sa.$(null).Jb(null);
};
h.fa = function() {
  var a = this.sa, a = (a ? a.o & 128 || a.Zb || (a.o ? 0 : Sa(tb, a)) : Sa(tb, a)) ? this.sa.ha(null) : E(this.sa);
  return null != a ? new vk(a, this.ta) : Hd;
};
h.P = function() {
  return this;
};
h.N = function(a, b) {
  return new vk(this.sa, b);
};
h.R = function(a, b) {
  return he(b, this);
};
function wk(a) {
  return(a = z(a)) ? new vk(a, null) : null;
}
function Jf(a) {
  return Nb(a);
}
function xk(a, b) {
  for (var c = Sh, d = z(b);;) {
    if (d) {
      var e = A(d), f = O.j(a, e, yk), c = jg.h(f, yk) ? Be.j(c, e, f) : c, d = E(d)
    } else {
      return c;
    }
  }
}
function zk(a, b, c) {
  this.w = a;
  this.Cb = b;
  this.A = c;
  this.o = 15077647;
  this.F = 8196;
}
h = zk.prototype;
h.toString = function() {
  return gd(this);
};
h.forEach = function(a) {
  for (var b = z(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.B(null, e), g = M.j(f, 0, null), f = M.j(f, 1, null);
      a.h ? a.h(f, g) : a.call(null, f, g);
      e += 1;
    } else {
      if (b = z(b)) {
        P(b) ? (c = v(b), b = w(b), g = c, d = L(c), c = g) : (c = A(b), g = M.j(c, 0, null), c = f = M.j(c, 1, null), a.h ? a.h(c, g) : a.call(null, c, g), b = E(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
h.J = function(a, b) {
  return wb.j(this, b, null);
};
h.I = function(a, b, c) {
  return zb(this.Cb, b) ? b : c;
};
h.L = function() {
  return this.w;
};
h.T = function() {
  return bb(this.Cb);
};
h.O = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Kd(this);
};
h.M = function(a, b) {
  return Re(b) && L(this) === L(b) && lg(function(a) {
    return function(b) {
      return af(a, b);
    };
  }(this), b);
};
h.vb = function() {
  return new Ak(Rc(this.Cb));
};
h.Z = function() {
  return je(Bk, this.w);
};
h.P = function() {
  return uk(this.Cb);
};
h.N = function(a, b) {
  return new zk(b, this.Cb, this.A);
};
h.R = function(a, b) {
  return new zk(this.w, Be.j(this.Cb, b, null), null);
};
h.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.J(null, c);
      case 3:
        return this.I(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.h = function(a, c) {
    return this.J(null, c);
  };
  a.j = function(a, c, d) {
    return this.I(null, c, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Wa(b)));
};
h.g = function(a) {
  return this.J(null, a);
};
h.h = function(a, b) {
  return this.I(null, a, b);
};
var Bk = new zk(null, Sh, 0);
function Ak(a) {
  this.bb = a;
  this.o = 259;
  this.F = 136;
}
h = Ak.prototype;
h.call = function() {
  function a(a, b, c) {
    return wb.j(this.bb, b, Ye) === Ye ? c : b;
  }
  function b(a, b) {
    return wb.j(this.bb, b, Ye) === Ye ? null : b;
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
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Wa(b)));
};
h.g = function(a) {
  return wb.j(this.bb, a, Ye) === Ye ? null : a;
};
h.h = function(a, b) {
  return wb.j(this.bb, a, Ye) === Ye ? b : a;
};
h.J = function(a, b) {
  return wb.j(this, b, null);
};
h.I = function(a, b, c) {
  return wb.j(this.bb, b, Ye) === Ye ? c : b;
};
h.T = function() {
  return L(this.bb);
};
h.mb = function(a, b) {
  this.bb = hg.j(this.bb, b, null);
  return this;
};
h.nb = function() {
  return new zk(null, Tc(this.bb), null);
};
function Ck(a) {
  a = z(a);
  if (null == a) {
    return Bk;
  }
  if (a instanceof Gd && 0 === a.D) {
    a = a.k;
    a: {
      for (var b = 0, c = Rc(Bk);;) {
        if (b < a.length) {
          var d = b + 1, c = c.mb(null, a[b]), b = d
        } else {
          a = c;
          break a;
        }
      }
      a = void 0;
    }
    return a.nb(null);
  }
  for (d = Rc(Bk);;) {
    if (null != a) {
      b = a.ha(null), d = d.mb(null, a.$(null)), a = b;
    } else {
      return d.nb(null);
    }
  }
}
function Dk(a) {
  return function c(a, e) {
    return new Sf(null, function() {
      return function(a, d) {
        for (;;) {
          var e = a, l = M.j(e, 0, null);
          if (e = z(e)) {
            if (af(d, l)) {
              l = D(e), e = d, a = l, d = e;
            } else {
              return he(l, c(D(e), ne.h(d, l)));
            }
          } else {
            return null;
          }
        }
      }.call(null, a, e);
    }, null, null);
  }(a, Bk);
}
function Qf(a) {
  if (a && (a.F & 4096 || a.Ad)) {
    return a.name;
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error("Doesn't support name: " + u.g(a));
}
function Ek(a, b) {
  for (var c = Rc(Sh), d = z(a), e = z(b);;) {
    if (d && e) {
      c = hg.j(c, A(d), A(e)), d = E(d), e = E(e);
    } else {
      return Tc(c);
    }
  }
}
var Fk = function() {
  function a(a, b, c) {
    return(a.g ? a.g(b) : a.call(null, b)) > (a.g ? a.g(c) : a.call(null, c)) ? b : c;
  }
  var b = null, c = function() {
    function a(b, d, k, l) {
      var m = null;
      3 < arguments.length && (m = J(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, k, m);
    }
    function c(a, d, e, l) {
      return Xa.j(function(c, d) {
        return b.j(a, c, d);
      }, b.j(a, d, e), l);
    }
    a.C = 3;
    a.p = function(a) {
      var b = A(a);
      a = E(a);
      var d = A(a);
      a = E(a);
      var l = A(a);
      a = D(a);
      return c(b, d, l, a);
    };
    a.l = c;
    return a;
  }(), b = function(b, e, f, g) {
    switch(arguments.length) {
      case 2:
        return e;
      case 3:
        return a.call(this, b, e, f);
      default:
        return c.l(b, e, f, J(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.C = 3;
  b.p = c.p;
  b.h = function(a, b) {
    return b;
  };
  b.j = a;
  b.l = c.l;
  return b;
}();
function Gk(a, b, c) {
  this.D = a;
  this.end = b;
  this.step = c;
}
Gk.prototype.fc = function() {
  return 0 < this.step ? this.D < this.end : this.D > this.end;
};
Gk.prototype.next = function() {
  var a = this.D;
  this.D += this.step;
  return a;
};
function Hk(a, b, c, d, e) {
  this.w = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.A = e;
  this.o = 32375006;
  this.F = 8192;
}
h = Hk.prototype;
h.toString = function() {
  return gd(this);
};
h.B = function(a, b) {
  if (b < bb(this)) {
    return this.start + b * this.step;
  }
  if (this.start > this.end && 0 === this.step) {
    return this.start;
  }
  throw Error("Index out of bounds");
};
h.wa = function(a, b, c) {
  return b < bb(this) ? this.start + b * this.step : this.start > this.end && 0 === this.step ? this.start : c;
};
h.Gb = function() {
  return new Gk(this.start, this.end, this.step);
};
h.L = function() {
  return this.w;
};
h.ha = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new Hk(this.w, this.start + this.step, this.end, this.step, null) : null : this.start + this.step > this.end ? new Hk(this.w, this.start + this.step, this.end, this.step, null) : null;
};
h.T = function() {
  if (Ra(vc(this))) {
    return 0;
  }
  var a = (this.end - this.start) / this.step;
  return Math.ceil.g ? Math.ceil.g(a) : Math.ceil.call(null, a);
};
h.O = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Jd(this);
};
h.M = function(a, b) {
  return ge(this, b);
};
h.Z = function() {
  return je(Hd, this.w);
};
h.ba = function(a, b) {
  return ae.h(this, b);
};
h.ca = function(a, b, c) {
  for (a = this.start;;) {
    if (0 < this.step ? a < this.end : a > this.end) {
      var d = a;
      c = b.h ? b.h(c, d) : b.call(null, c, d);
      if ($d(c)) {
        return b = c, K.g ? K.g(b) : K.call(null, b);
      }
      a += this.step;
    } else {
      return c;
    }
  }
};
h.$ = function() {
  return null == vc(this) ? null : this.start;
};
h.fa = function() {
  return null != vc(this) ? new Hk(this.w, this.start + this.step, this.end, this.step, null) : Hd;
};
h.P = function() {
  return 0 < this.step ? this.start < this.end ? this : null : this.start > this.end ? this : null;
};
h.N = function(a, b) {
  return new Hk(b, this.start, this.end, this.step, this.A);
};
h.R = function(a, b) {
  return he(b, this);
};
var Ik = function() {
  function a(a, b, c) {
    return new Hk(null, a, b, c, null);
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
  var e = null, e = function(e, g, k) {
    switch(arguments.length) {
      case 0:
        return d.call(this);
      case 1:
        return c.call(this, e);
      case 2:
        return b.call(this, e, g);
      case 3:
        return a.call(this, e, g, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.v = d;
  e.g = c;
  e.h = b;
  e.j = a;
  return e;
}();
function Jk(a) {
  var b = Kk;
  if ("string" === typeof a) {
    return b = b.exec(a), x.h(A(b), a) ? 1 === L(b) ? A(b) : Ah(b) : null;
  }
  throw new TypeError("re-matches must match against a string.");
}
function Lk(a) {
  if (!(a instanceof RegExp)) {
    var b = /^(?:\(\?([idmsux]*)\))?(.*)/;
    if ("string" === typeof a) {
      a = b.exec(a), a = null == a ? null : 1 === L(a) ? A(a) : Ah(a);
    } else {
      throw new TypeError("re-find must match against a string.");
    }
    M.j(a, 0, null);
    M.j(a, 1, null);
    M.j(a, 2, null);
  }
}
function Mk(a, b, c, d, e, f, g) {
  var k = Fa;
  try {
    Fa = null == Fa ? null : Fa - 1;
    if (null != Fa && 0 > Fa) {
      return Ec(a, "#");
    }
    Ec(a, c);
    if (z(g)) {
      var l = A(g);
      b.j ? b.j(l, a, f) : b.call(null, l, a, f);
    }
    for (var m = E(g), p = Qa.g(f) - 1;;) {
      if (!m || null != p && 0 === p) {
        z(m) && 0 === p && (Ec(a, d), Ec(a, "..."));
        break;
      } else {
        Ec(a, d);
        var t = A(m);
        c = a;
        g = f;
        b.j ? b.j(t, c, g) : b.call(null, t, c, g);
        var r = E(m);
        c = p - 1;
        m = r;
        p = c;
      }
    }
    return Ec(a, e);
  } finally {
    Fa = k;
  }
}
var Nk = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = J(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    for (var e = z(b), f = null, g = 0, k = 0;;) {
      if (k < g) {
        var l = f.B(null, k);
        Ec(a, l);
        k += 1;
      } else {
        if (e = z(e)) {
          f = e, P(f) ? (e = v(f), g = w(f), f = e, l = L(e), e = g, g = l) : (l = A(f), Ec(a, l), e = E(f), f = null, g = 0), k = 0;
        } else {
          return null;
        }
      }
    }
  }
  a.C = 1;
  a.p = function(a) {
    var d = A(a);
    a = D(a);
    return b(d, a);
  };
  a.l = b;
  return a;
}(), Ok = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function Pk(a) {
  return'"' + u.g(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return Ok[a];
  })) + '"';
}
var Sk = function Qk(b, c, d) {
  if (null == b) {
    return Ec(c, "nil");
  }
  if (void 0 === b) {
    return Ec(c, "#\x3cundefined\x3e");
  }
  q(function() {
    var c = O.h(d, Na);
    return q(c) ? (c = b ? b.o & 131072 || b.zd ? !0 : b.o ? !1 : Sa(Wb, b) : Sa(Wb, b)) ? Ge(b) : c : c;
  }()) && (Ec(c, "^"), Qk(Ge(b), c, d), Ec(c, " "));
  if (null == b) {
    return Ec(c, "nil");
  }
  if (b.xb) {
    return b.Nb(b, c, d);
  }
  if (b && (b.o & 2147483648 || b.X)) {
    return b.K(null, c, d);
  }
  if (Ua(b) === Boolean || "number" === typeof b) {
    return Ec(c, "" + u.g(b));
  }
  if (null != b && b.constructor === Object) {
    Ec(c, "#js ");
    var e = Lg.h(function(c) {
      return new Q(null, 2, 5, R, [Rf.g(c), b[c]], null);
    }, Ve(b));
    return Rk.n ? Rk.n(e, Qk, c, d) : Rk.call(null, e, Qk, c, d);
  }
  return b instanceof Array ? Mk(c, Qk, "#js [", " ", "]", d, b) : q(da(b)) ? q(Ma.g(d)) ? Ec(c, Pk(b)) : Ec(c, b) : De(b) ? Nk.l(c, J(["#\x3c", "" + u.g(b), "\x3e"], 0)) : b instanceof Date ? (e = function(b, c) {
    for (var d = "" + u.g(b);;) {
      if (L(d) < c) {
        d = "0" + u.g(d);
      } else {
        return d;
      }
    }
  }, Nk.l(c, J(['#inst "', "" + u.g(b.getUTCFullYear()), "-", e(b.getUTCMonth() + 1, 2), "-", e(b.getUTCDate(), 2), "T", e(b.getUTCHours(), 2), ":", e(b.getUTCMinutes(), 2), ":", e(b.getUTCSeconds(), 2), ".", e(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0))) : b instanceof RegExp ? Nk.l(c, J(['#"', b.source, '"'], 0)) : (b ? b.o & 2147483648 || b.X || (b.o ? 0 : Sa(Fc, b)) : Sa(Fc, b)) ? Gc(b, c, d) : Nk.l(c, J(["#\x3c", "" + u.g(b), "\x3e"], 0));
};
function Tk(a, b) {
  var c = new wa;
  a: {
    var d = new fd(c);
    Sk(A(a), d, b);
    for (var e = z(E(a)), f = null, g = 0, k = 0;;) {
      if (k < g) {
        var l = f.B(null, k);
        Ec(d, " ");
        Sk(l, d, b);
        k += 1;
      } else {
        if (e = z(e)) {
          f = e, P(f) ? (e = v(f), g = w(f), f = e, l = L(e), e = g, g = l) : (l = A(f), Ec(d, " "), Sk(l, d, b), e = E(f), f = null, g = 0), k = 0;
        } else {
          break a;
        }
      }
    }
  }
  return c;
}
function Uk(a, b) {
  return He(a) ? "" : "" + u.g(Tk(a, b));
}
var Jg = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = J(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    return Uk(a, Ia());
  }
  a.C = 0;
  a.p = function(a) {
    a = z(a);
    return b(a);
  };
  a.l = b;
  return a;
}(), Vk = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = J(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b = Be.j(Ia(), Ma, !1);
    a = Uk(a, b);
    Ca.g ? Ca.g(a) : Ca.call(null, a);
    q(Ea) ? (a = Ia(), Ca.g ? Ca.g("\n") : Ca.call(null, "\n"), a = (O.h(a, La), null)) : a = null;
    return a;
  }
  a.C = 0;
  a.p = function(a) {
    a = z(a);
    return b(a);
  };
  a.l = b;
  return a;
}();
function Rk(a, b, c, d) {
  return Mk(c, function(a, c, d) {
    var k = Mb(a);
    b.j ? b.j(k, c, d) : b.call(null, k, c, d);
    Ec(c, " ");
    a = Nb(a);
    return b.j ? b.j(a, c, d) : b.call(null, a, c, d);
  }, "{", ", ", "}", d, z(a));
}
Gd.prototype.X = !0;
Gd.prototype.K = function(a, b, c) {
  return Mk(b, Sk, "(", " ", ")", c, this);
};
Sf.prototype.X = !0;
Sf.prototype.K = function(a, b, c) {
  return Mk(b, Sk, "(", " ", ")", c, this);
};
Yj.prototype.X = !0;
Yj.prototype.K = function(a, b, c) {
  return Mk(b, Sk, "(", " ", ")", c, this);
};
ji.prototype.X = !0;
ji.prototype.K = function(a, b, c) {
  return Mk(b, Sk, "(", " ", ")", c, this);
};
ck.prototype.X = !0;
ck.prototype.K = function(a, b, c) {
  return Mk(b, Sk, "[", " ", "]", c, this);
};
Ph.prototype.X = !0;
Ph.prototype.K = function(a, b, c) {
  return Mk(b, Sk, "(", " ", ")", c, this);
};
Bh.prototype.X = !0;
Bh.prototype.K = function(a, b, c) {
  return Mk(b, Sk, "(", " ", ")", c, this);
};
Of.prototype.X = !0;
Of.prototype.K = function(a, b, c) {
  return Mk(b, Sk, "(", " ", ")", c, this);
};
fe.prototype.X = !0;
fe.prototype.K = function(a, b, c) {
  return Mk(b, Sk, "(", " ", ")", c, this);
};
Tj.prototype.X = !0;
Tj.prototype.K = function(a, b, c) {
  return Rk(this, Sk, b, c);
};
Sj.prototype.X = !0;
Sj.prototype.K = function(a, b, c) {
  return Mk(b, Sk, "(", " ", ")", c, this);
};
Dh.prototype.X = !0;
Dh.prototype.K = function(a, b, c) {
  return Mk(b, Sk, "[", " ", "]", c, this);
};
pk.prototype.X = !0;
pk.prototype.K = function(a, b, c) {
  return Rk(this, Sk, b, c);
};
zk.prototype.X = !0;
zk.prototype.K = function(a, b, c) {
  return Mk(b, Sk, "#{", " ", "}", c, this);
};
Yf.prototype.X = !0;
Yf.prototype.K = function(a, b, c) {
  return Mk(b, Sk, "(", " ", ")", c, this);
};
Eg.prototype.X = !0;
Eg.prototype.K = function(a, b, c) {
  Ec(b, "#\x3cAtom: ");
  Sk(this.state, b, c);
  return Ec(b, "\x3e");
};
vk.prototype.X = !0;
vk.prototype.K = function(a, b, c) {
  return Mk(b, Sk, "(", " ", ")", c, this);
};
bk.prototype.X = !0;
bk.prototype.K = function(a, b, c) {
  return Mk(b, Sk, "[", " ", "]", c, this);
};
Q.prototype.X = !0;
Q.prototype.K = function(a, b, c) {
  return Mk(b, Sk, "[", " ", "]", c, this);
};
Ih.prototype.X = !0;
Ih.prototype.K = function(a, b, c) {
  return Mk(b, Sk, "(", " ", ")", c, this);
};
Lf.prototype.X = !0;
Lf.prototype.K = function(a, b) {
  return Ec(b, "()");
};
Jh.prototype.X = !0;
Jh.prototype.K = function(a, b, c) {
  return Mk(b, Sk, "#queue [", " ", "]", c, z(this));
};
Ka.prototype.X = !0;
Ka.prototype.K = function(a, b, c) {
  return Rk(this, Sk, b, c);
};
Hk.prototype.X = !0;
Hk.prototype.K = function(a, b, c) {
  return Mk(b, Sk, "(", " ", ")", c, this);
};
tk.prototype.X = !0;
tk.prototype.K = function(a, b, c) {
  return Mk(b, Sk, "(", " ", ")", c, this);
};
Kf.prototype.X = !0;
Kf.prototype.K = function(a, b, c) {
  return Mk(b, Sk, "(", " ", ")", c, this);
};
Q.prototype.Wb = !0;
Q.prototype.Xb = function(a, b) {
  return cf.h(this, b);
};
Dh.prototype.Wb = !0;
Dh.prototype.Xb = function(a, b) {
  return cf.h(this, b);
};
U.prototype.Wb = !0;
U.prototype.Xb = function(a, b) {
  return Dd(this, b);
};
Fd.prototype.Wb = !0;
Fd.prototype.Xb = function(a, b) {
  return Dd(this, b);
};
function Wk(a) {
  return function(b, c) {
    var d = a.h ? a.h(b, c) : a.call(null, b, c);
    return $d(d) ? new Zd(d) : d;
  };
}
function Sg(a) {
  return function(b) {
    return function() {
      function c(a, c) {
        return Xa.j(b, a, c);
      }
      function d(b) {
        return a.g ? a.g(b) : a.call(null, b);
      }
      function e() {
        return a.v ? a.v() : a.call(null);
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
      f.v = e;
      f.g = d;
      f.h = c;
      return f;
    }();
  }(Wk(a));
}
sf = function() {
  function a(a) {
    return(Math.random.v ? Math.random.v() : Math.random.call(null)) * a;
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
  c.v = b;
  c.g = a;
  return c;
}();
function Xk(a, b) {
  return fg(Xa.j(function(b, d) {
    var e = a.g ? a.g(d) : a.call(null, d);
    return hg.j(b, e, ne.h(O.j(b, e, me), d));
  }, Rc(Sh), b));
}
function Yk(a) {
  this.ic = a;
  this.F = 0;
  this.o = 2153775104;
}
Yk.prototype.O = function() {
  for (var a = Jg.l(J([this], 0)), b = 0, c = 0;c < a.length;++c) {
    b = 31 * b + a.charCodeAt(c), b %= 4294967296;
  }
  return b;
};
Yk.prototype.K = function(a, b) {
  return Ec(b, '#uuid "' + u.g(this.ic) + '"');
};
Yk.prototype.M = function(a, b) {
  return b instanceof Yk && this.ic === b.ic;
};
Yk.prototype.toString = function() {
  return this.ic;
};
function rl(a) {
  var b = a.type;
  if (void 0 === b) {
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
      return void 0 !== a.value ? a.value : null;
  }
}
;var sl;
a: {
  var Ll = ba.navigator;
  if (Ll) {
    var Ml = Ll.userAgent;
    if (Ml) {
      sl = Ml;
      break a;
    }
  }
  sl = "";
}
;var Nl = -1 != sl.indexOf("Opera") || -1 != sl.indexOf("OPR"), Ol = -1 != sl.indexOf("Trident") || -1 != sl.indexOf("MSIE"), Pl = -1 != sl.indexOf("Gecko") && -1 == sl.toLowerCase().indexOf("webkit") && !(-1 != sl.indexOf("Trident") || -1 != sl.indexOf("MSIE")), Ql = -1 != sl.toLowerCase().indexOf("webkit");
function Rl() {
  var a = ba.document;
  return a ? a.documentMode : void 0;
}
var Sl = function() {
  var a = "", b;
  if (Nl && ba.opera) {
    return a = ba.opera.version, fa(a) ? a() : a;
  }
  Pl ? b = /rv\:([^\);]+)(\)|;)/ : Ol ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : Ql && (b = /WebKit\/(\S+)/);
  b && (a = (a = b.exec(sl)) ? a[1] : "");
  return Ol && (b = Rl(), b > parseFloat(a)) ? String(b) : a;
}(), Tl = {};
function Ul(a) {
  var b;
  if (!(b = Tl[a])) {
    b = 0;
    for (var c = String(Sl).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), f = 0;0 == b && f < e;f++) {
      var g = c[f] || "", k = d[f] || "", l = RegExp("(\\d*)(\\D*)", "g"), m = RegExp("(\\d*)(\\D*)", "g");
      do {
        var p = l.exec(g) || ["", "", ""], t = m.exec(k) || ["", "", ""];
        if (0 == p[0].length && 0 == t[0].length) {
          break;
        }
        b = oa(0 == p[1].length ? 0 : parseInt(p[1], 10), 0 == t[1].length ? 0 : parseInt(t[1], 10)) || oa(0 == p[2].length, 0 == t[2].length) || oa(p[2], t[2]);
      } while (0 == b);
    }
    b = Tl[a] = 0 <= b;
  }
  return b;
}
var Vl = ba.document, Wl = Vl && Ol ? Rl() || ("CSS1Compat" == Vl.compatMode ? parseInt(Sl, 10) : 5) : void 0;
!Pl && !Ol || Ol && Ol && 9 <= Wl || Pl && Ul("1.9.1");
var Xl = Ol && !Ul("9");
var Yl = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, Zl = {IMG:" ", BR:"\n"};
function $l(a, b, c) {
  if (!(a.nodeName in Yl)) {
    if (3 == a.nodeType) {
      c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
    } else {
      if (a.nodeName in Zl) {
        b.push(Zl[a.nodeName]);
      } else {
        for (a = a.firstChild;a;) {
          $l(a, b, c), a = a.nextSibling;
        }
      }
    }
  }
}
;var am, bm, cm, dm, em, fm, gm, hm, im, jm, km, lm, mm, nm = {}.hasOwnProperty;
jm = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
im = /^(svg|g|rect|circle|clipPath|path|line|polygon|polyline|text|textPath)$/;
hm = /:(.+)/;
mm = {He:"http://www.w3.org/1999/xhtml", We:"http://www.w3.org/1999/xlink", Ee:"http://www.w3.org/2000/svg", xml:"http://www.w3.org/XML/1998/namespace", Xe:"http://www.w3.org/2000/xmlns"};
fm = function(a) {
  var b, c;
  c = a.split(":");
  b = c[0];
  c = c[1];
  return null != c ? [mm[b] || b, c] : a.match(im) ? [mm.Ee, a] : [mm.He, a];
};
cm = function(a) {
  return ":*:" === a[0];
};
lm = function(a) {
  return null != a && a instanceof om;
};
dm = function(a) {
  return null != a && !1;
};
am = function(a) {
  return null != a && null != a.forEach;
};
em = function(a) {
  return null != a && !am(a) && !lm(a) && !dm(a) && a instanceof Object;
};
bm = function(a) {
  return null != a && null != a.nodeType;
};
km = function(a) {
  return null != a && null != a.substring;
};
gm = function(a) {
  return null != a && null != a.toFixed;
};
function pm(a, b) {
  var c, d, e, f, g;
  if (null != b.style) {
    f = b.style;
    var k;
    k = [];
    for (g in f) {
      nm.call(f, g) && (c = f[g], k.push(a.style[pa(g)] = c));
    }
    delete b.style;
  }
  if (null != b.properties) {
    f = b.properties;
    c = [];
    for (e in f) {
      nm.call(f, e) && (g = f[e], c.push(a[e] = g));
    }
    delete b.properties;
  }
  am(b["class"]) && (a.setAttribute("class", b["class"].join(" ")), delete b["class"]);
  g = [];
  for (d in b) {
    nm.call(b, d) && (f = b[d], null != f ? (c = d.split(hm), e = c[0], c = c[1], null != c ? g.push(a.setAttributeNS(mm[e] || e, c, f)) : g.push(a.setAttribute(d, f))) : g.push(a.removeAttribute(d)));
  }
}
function qm(a) {
  return gm(a) ? a.toString() : am(a) ? rm(a) : a;
}
function rm(a) {
  var b, c, d, e, f;
  f = a[0];
  d = em(a[1]) ? [a[1], a.slice(2)] : [{}, a.slice(1)];
  a = d[0];
  d = d[1];
  e = f.match(jm);
  f = e[1];
  b = e[2];
  e = e[3];
  null != b && (a.id = b);
  null != e && (b = e.split("."), am(a["class"]) ? a["class"] = a["class"].concat(b) : km(a["class"]) ? a["class"] = b.concat([a["class"]]) : null == a["class"] && (a["class"] = b));
  f = fm(f);
  b = f[0];
  f = f[1];
  c = [];
  d.forEach(function(a) {
    if (null != a) {
      return cm(a) ? a.slice(1).forEach(function(a) {
        return c.push(qm(a));
      }) : c.push(qm(a));
    }
  });
  return{Yd:b, tag:f, qd:a, children:c};
}
function sm(a) {
  var b, c;
  if (lm(a)) {
    throw Error("Unify must be the first and only child of its parent.");
  }
  if (dm(a)) {
    return null;
  }
  if (km(a)) {
    return document.createTextNode(a);
  }
  if (bm(a)) {
    return a;
  }
  b = document.createElementNS(a.Yd, a.tag);
  pm(b, a.qd);
  lm(c = a.children[0]) ? null != c.ed ? c.data.forEach(function(a) {
    var e;
    e = c.ed(a);
    null != a && (e.__singult_data__ = a);
    return b.appendChild(e);
  }) : c.data.forEach(function(a) {
    var e;
    e = sm(qm(c.Pd(a)));
    null != a && (e.__singult_data__ = a);
    return b.appendChild(e);
  }) : a.children.forEach(function(a) {
    a = sm(a);
    if (null != a) {
      return b.appendChild(a);
    }
  });
  return b;
}
function om(a, b, c, d, e, f) {
  this.data = a;
  this.Pd = b;
  this.Ue = c;
  this.ed = d;
  this.update = e;
  this.Te = f;
  return this;
}
;var tm = new U(null, "inactive", "inactive", -306247616), um = new U(null, "y", "y", -1757859776), vm = new U(null, "no-deref-monitor", "no-deref-monitor", 1171473184), wm = new U(null, "seg-w-px", "seg-w-px", 1192509248), xm = new U(null, "boost-overlap-duty-ratio", "boost-overlap-duty-ratio", -1153915647), ym = new U(null, "ff-perm-connected", "ff-perm-connected", 828443105), zm = new U(null, "ff-synapses", "ff-synapses", -1536453151), Am = new U(null, "ff-perm-init", "ff-perm-init", -588489726), 
Bm = new U(null, "n-segments", "n-segments", -370398), Cm = new U(null, "distal-punish?", "distal-punish?", 1652249154), Dm = new U(null, "global-inhibition?", "global-inhibition?", 500661922), Em = new U(null, "dh", "dh", 528137731), Fm = new U(null, "run-sim", "run-sim", 1708970627), Gm = new U(null, "max-segs", "max-segs", -976352252), Na = new U(null, "meta", "meta", 1499536964), Hm = new U(null, "dx", "dx", -381796732), Im = new U(null, "seg-new-synapse-count", "seg-new-synapse-count", 841824004), 
Jm = new U(null, "seg-h-space-px", "seg-h-space-px", 1353315204), Km = new U(null, "scroll-top", "scroll-top", -46723100), Lm = new U(null, "scroll-counter", "scroll-counter", 628002885), Pa = new U(null, "dup", "dup", 556298533), Mm = new U(null, "temporal-pooling", "temporal-pooling", 240992677), Nm = new U(null, "max-segments", "max-segments", -157037498), Om = new U(null, "exit", "exit", 351849638), Pm = new U(null, "distal-perm-dec", "distal-perm-dec", -223583802), Qm = new U(null, "disconnected", 
"disconnected", -1908014586), Rm = new U(null, "boost-active-duty-ratio", "boost-active-duty-ratio", 891850342), Sm = new U(null, "lateral-synapses?", "lateral-synapses?", -963308249), Tm = new U(null, "lat-synapses", "lat-synapses", 1341366663), Um = new U(null, "top", "top", -1856271961), Vm = new U(null, "topo", "topo", -1894825145), Wm = new U(null, "yellow", "yellow", -881035449), Gg = new U(null, "validator", "validator", -1966190681), Xm = new U(null, "highlight", "highlight", -800930873), 
Ym = new U(null, "seg-h-px", "seg-h-px", -443969112), Zm = new U(null, "finally-block", "finally-block", 832982472), $m = new U(null, "h-space-px", "h-space-px", -766035480), an = new U(null, "col-shrink", "col-shrink", -1043182072), bn = new U(null, "learn-segments", "learn-segments", 1869208392), cn = new U(null, "distal-perm-connected", "distal-perm-connected", -1849103512), dn = new U(null, "columns", "columns", 1998437288), en = new U(null, "w", "w", 354169001), fn = new U(null, "seg-learn-threshold", 
"seg-learn-threshold", 1271249129), gn = new U(null, "sy", "sy", 227523849), hn = new U(null, "element-h", "element-h", -1458880151), jn = new U(null, "anim-go?", "anim-go?", 1109067401), kn = new U(null, "dt", "dt", -368444759), ln = new U(null, "seg-stimulus-threshold", "seg-stimulus-threshold", -1901580343), mn = new U(null, "green", "green", -945526839), nn = new U(null, "time", "time", 1385887882), on = new U(null, "mapping", "mapping", -1242405430), pn = new U(null, "regions", "regions", -1023815958), 
qn = new U(null, "timestep", "timestep", -1557942486), rn = new U(null, "width", "width", -384071477), sn = new U(null, "background", "background", -863952629), tn = new U(null, "column-dimensions", "column-dimensions", 935248171), un = new U(null, "dy", "dy", 1719547243), vn = new U(null, "connected", "connected", -169833045), wn = new U(null, "shrink", "shrink", 1415287595), xn = new U(null, "predictive", "predictive", 742235276), yn = new U(null, "draw-steps", "draw-steps", -100988692), X = new U(null, 
"recur", "recur", -437573268), zn = new U("comportexviz.viz-canvas", "acols", "comportexviz.viz-canvas/acols", 1747707340), An = new U(null, "distal-vs-proximal-weight", "distal-vs-proximal-weight", 1616745132), Bn = new U(null, "update", "update", 1045576396), Cn = new U(null, "catch-block", "catch-block", 1175212748), Dn = new U(null, "ff-init-frac", "ff-init-frac", 503945132), En = new U(null, "proximal-sg", "proximal-sg", -717554323), Fn = new U(null, "distal-perm-inc", "distal-perm-inc", -162111059), 
Gn = new U("comportexviz.viz-canvas", "abits", "comportexviz.viz-canvas/abits", -1378531795), Hn = new U(null, "seg-max-synapse-count", "seg-max-synapse-count", -139057427), La = new U(null, "flush-on-newline", "flush-on-newline", -151457939), In = new U(null, "sim-step-ms", "sim-step-ms", -1192536083), Jn = new U(null, "distal-topdown-dimensions", "distal-topdown-dimensions", 914721102), Kn = new U(null, "all", "all", 892129742), Ln = new U(null, "seed", "seed", 68613327), Mn = new U(null, "canvas", 
"canvas", -1798817489), Nn = new U(null, "size", "size", 1098693007), On = new U(null, "enter", "enter", 1792452624), Pn = new U(null, "bit-h-px", "bit-h-px", -1081204688), zp = new U("comportexviz.viz-canvas", "nsegcols", "comportexviz.viz-canvas/nsegcols", 1473275952), Ap = new U(null, "learning", "learning", 612366512), Bp = new U(null, "region", "region", 270415120), Ma = new U(null, "readably", "readably", 1129599760), Cp = new U(null, "run-start", "run-start", 1984981840), Dp = new U(null, 
"use-feedback?", "use-feedback?", -485653423), Ep = new U("comportexviz.viz-canvas", "tpcols", "comportexviz.viz-canvas/tpcols", 500403377), Fp = new U(null, "ff-grow-and-die?", "ff-grow-and-die?", 1154098385), Gp = new U(null, "key-fn", "key-fn", -636154479), Hp = new U(null, "distal-motor-dimensions", "distal-motor-dimensions", -1463346767), Ip = new U(null, "random-double", "random-double", -922602767), Jp = new U(null, "active-predicted", "active-predicted", -72115407), Kp = new U(null, "click", 
"click", 1912301393), Lp = new U(null, "cp1x", "cp1x", 465245137), Mp = new U(null, "anim-every", "anim-every", 1633754642), Np = new U(null, "max-boost", "max-boost", 608482834), Op = new U(null, "ff-potential-radius", "ff-potential-radius", 254943154), Pp = new U(null, "height-px", "height-px", -1391665005), Qp = new U(null, "cp2x", "cp2x", -1682644749), Rp = new U(null, "ff-perm-inc", "ff-perm-inc", -742369901), Sp = new U("comportexviz.viz-canvas", "pbits", "comportexviz.viz-canvas/pbits", 1988133491), 
Tp = new U(null, "h", "h", 1109658740), Up = new U(null, "from", "from", 1815293044), Qa = new U(null, "print-length", "print-length", 1931866356), Vp = new U(null, "active", "active", 1895962068), Wp = new U(null, "col", "col", -1959363084), Xp = new U(null, "activation-level", "activation-level", -1385123308), Yp = new U(null, "overlaps", "overlaps", 1398230580), Zp = new U(null, "red", "red", -969428204), $p = new U(null, "blue", "blue", -622100620), aq = new U(null, "catch-exception", "catch-exception", 
-1997306795), bq = new U(null, "opts", "opts", 155075701), cq = new U(null, "input-w-px", "input-w-px", -99789611), dq = new U(null, "top-px", "top-px", 1982343477), eq = new U(null, "distal-sg", "distal-sg", 752001365), fq = new U("comportexviz.viz-canvas", "pcols", "comportexviz.viz-canvas/pcols", 1740826069), gq = new U(null, "left-px", "left-px", -745883979), hq = new U(null, "prev", "prev", -1597069226), iq = new U(null, "continue-block", "continue-block", -1852047850), jq = new U(null, "cp1y", 
"cp1y", 628283543), kq = new U(null, "ff-perm-dec", "ff-perm-dec", 1363415607), lq = new U(null, "dw", "dw", -821060841), mq = new U(null, "redraw", "redraw", -1075394793), nq = new U(null, "input-dimensions", "input-dimensions", -1946955913), oq = new U(null, "drawing", "drawing", 1181749528), pq = new U(null, "sx", "sx", -403071592), qq = new U(null, "depth", "depth", 1768663640), rq = new U(null, "inhibition-base-distance", "inhibition-base-distance", 645074808), sq = new U(null, "define-me!", 
"define-me!", -268367591), tq = new U(null, "x", "x", 2099068185), uq = new U(null, "bit-w-px", "bit-w-px", -531552775), vq = new U(null, "predicted", "predicted", 2110738041), wq = new U(null, "inhibition-max-distance", "inhibition-max-distance", 686405273), xq = new U(null, "sh", "sh", -682444007), yq = new U(null, "capture", "capture", -677031143), zq = new U(null, "sw", "sw", 833113913), Aq = new U(null, "input", "input", 556931961), Bq = new U(null, "cp2y", "cp2y", 903335801), Cq = new U(null, 
"ff-grow-up-to-count", "ff-grow-up-to-count", 738299833), Dq = new U(null, "purple", "purple", -876021126), Eq = new U(null, "circles?", "circles?", -1676300005), Fq = new U("comportexviz", "draw-input", "comportexviz/draw-input", -516395685), Gq = new U(null, "inactive-syn", "inactive-syn", 1351816571), Hq = new U(null, "tgt-\x3ei", "tgt-\x3ei", -220968868), Iq = new U(null, "highlight-color", "highlight-color", -1394121540), Jq = new U("comportexviz.viz-canvas", "cache", "comportexviz.viz-canvas/cache", 
33193148), Kq = new U(null, "force-update?", "force-update?", 137364796), Lq = new U(null, "duty-cycle-period", "duty-cycle-period", -962296356), Mq = new U(null, "layer-3", "layer-3", 891136476), Nq = new U(null, "permanences", "permanences", -1713734116), Oq = new U("comportexviz.viz-canvas", "ocols", "comportexviz.viz-canvas/ocols", -2081286436), Pq = new U(null, "ff-max-synapse-count", "ff-max-synapse-count", -497183491), Qq = new U(null, "spontaneous-activation?", "spontaneous-activation?", 
1807538270), Rq = new U(null, "col-d-px", "col-d-px", -985327682), Sq = new U(null, "bit-shrink", "bit-shrink", -1161684994), Tq = new U(null, "height", "height", 1025178622), Uq = new U(null, "distal-perm-init", "distal-perm-init", -48514913), Vq = new U(null, "ff-stimulus-threshold", "ff-stimulus-threshold", -48644961), Wq = new U(null, "cell-r-px", "cell-r-px", 423637311), yk = new U("cljs.core", "not-found", "cljs.core/not-found", -1572889185), Xq = new U(null, "raw-sg", "raw-sg", 955489791), 
Yq = new U(null, "text", "text", -1790561697), Zq = new U(null, "element-w", "element-w", 2089708127), $q = new U(null, "data", "data", -232669377);
var br = function ar(b) {
  var c, d, e, f, g, k, l, m, p;
  if (b instanceof U) {
    return Qf(b);
  }
  if (Te(b)) {
    p = {};
    b = z(b);
    m = null;
    for (k = l = 0;;) {
      if (k < l) {
        f = m.B(null, k);
        g = M.j(f, 0, null);
        f = M.j(f, 1, null);
        g = ar(g);
        if ("string" !== typeof g) {
          throw "Cannot convert; JavaScript map keys must be strings";
        }
        p[g] = ar(f);
        k += 1;
      } else {
        if (b = z(b)) {
          if (P(b)) {
            l = v(b), b = w(b), m = l, l = L(l);
          } else {
            l = A(b);
            m = M.j(l, 0, null);
            l = M.j(l, 1, null);
            m = ar(m);
            if ("string" !== typeof m) {
              throw "Cannot convert; JavaScript map keys must be strings";
            }
            p[m] = ar(l);
            b = E(b);
            m = null;
            l = 0;
          }
          k = 0;
        } else {
          break;
        }
      }
    }
    return p;
  }
  if (Ze(b)) {
    p = [];
    p.push(":*:");
    b = z(b);
    m = null;
    for (k = l = 0;;) {
      if (k < l) {
        g = m.B(null, k), p.push(ar(g)), k += 1;
      } else {
        if (b = z(b)) {
          m = b, P(m) ? (b = v(m), k = w(m), m = b, l = L(b), b = k) : (b = A(m), p.push(ar(b)), b = E(m), m = null, l = 0), k = 0;
        } else {
          break;
        }
      }
    }
    return p;
  }
  if (Qe(b)) {
    p = [];
    b = z(b);
    m = null;
    for (k = l = 0;;) {
      if (k < l) {
        g = m.B(null, k), p.push(ar(g)), k += 1;
      } else {
        if (b = z(b)) {
          m = b, P(m) ? (b = v(m), k = w(m), m = b, l = L(b), b = k) : (b = A(m), p.push(ar(b)), b = E(m), m = null, l = 0), k = 0;
        } else {
          break;
        }
      }
    }
    return p;
  }
  return b;
};
q("undefined" != typeof NodeList) && (NodeList.prototype.Lc = !0, NodeList.prototype.P = function() {
  return J.h(this, 0);
});
HTMLCollection.prototype.Lc = !0;
HTMLCollection.prototype.P = function() {
  return J.h(this, 0);
};
function cr(a) {
  if (a ? a.kc : a) {
    return a.kc(a);
  }
  var b;
  b = cr[n(null == a ? null : a)];
  if (!b && (b = cr._, !b)) {
    throw s("IDom.-\x3edom", a);
  }
  return b.call(null, a);
}
Q.prototype.kc = function() {
  var a;
  a = br(this);
  a = qm.g ? qm.g(a) : qm.call(null, a);
  return sm.g ? sm.g(a) : sm.call(null, a);
};
cr.string = function(a) {
  return dr.g ? dr.g(a) : dr.call(null, a);
};
q("undefined" != typeof Node) && (Node.prototype.kc = function() {
  return this;
});
var dr = function() {
  function a(a, b) {
    return cr(b).querySelector(a);
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
}(), er = function() {
  function a(a, b) {
    var c = cr(a);
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
          c.appendChild((9 == c.nodeType ? c : c.ownerDocument || c.document).createTextNode(String(b)));
        }
      }
    }
    return c;
  }
  function b(a) {
    a = cr(a);
    if (Xl && "innerText" in a) {
      a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
    } else {
      var b = [];
      $l(a, b, !0);
      a = b.join("");
    }
    a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
    a = a.replace(/\u200B/g, "");
    Xl || (a = a.replace(/ +/g, " "));
    " " != a && (a = a.replace(/^\s*/, ""));
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
}(), fr = function() {
  function a(a, b) {
    var c = cr(a), g = c.type;
    if (void 0 !== g) {
      switch(g.toLowerCase()) {
        case "checkbox":
        ;
        case "radio":
          c.checked = b ? "checked" : null;
          break;
        case "select-one":
          c.selectedIndex = -1;
          if (da(b)) {
            for (var k = 0;g = c.options[k];k++) {
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
          for (var l = 0;k = c.options[l];l++) {
            if (k.selected = !1, g) {
              for (var m, p = 0;m = g[p];p++) {
                k.value == m && (k.selected = !0);
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
    a = cr(a);
    return rl(a);
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
}(), gr = function() {
  var a = window.requestAnimationFrame;
  if (q(a)) {
    return a;
  }
  var b = window.webkitRequestAnimationFrame;
  return q(b) ? b : function(a, b) {
    return function(e) {
      return setTimeout(function() {
        return function() {
          return e.v ? e.v() : e.call(null);
        };
      }(a, b), 10);
    };
  }(b, a);
}();
function hr(a) {
  q(q(void 0) ? Ra(vm.g(Ge(a))) : void 0) && Kg.h(void 0, function(b) {
    return ne.h(b, a);
  });
}
Eg.prototype.Fb = function() {
  hr(this);
  return this.state;
};
var ir = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = J(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, 0, e);
  }
  function b(a, b) {
    throw Error(Fe.h(u, b));
  }
  a.C = 1;
  a.p = function(a) {
    A(a);
    a = D(a);
    return b(0, a);
  };
  a.l = b;
  return a;
}();
Lk("^([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+))(N)?$");
Lk("^([-+]?[0-9]+)/([0-9]+)$");
Lk("^([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?$");
Lk("^[:]?([^0-9/].*/)?([^0-9/][^/]*)$");
Lk("^[0-9A-Fa-f]{2}$");
Lk("^[0-9A-Fa-f]{4}$");
var jr = function(a, b) {
  return function(c, d) {
    return O.h(q(d) ? b : a, c);
  };
}(new Q(null, 13, 5, R, [null, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], null), new Q(null, 13, 5, R, [null, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], null)), Kk = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
function kr(a) {
  a = parseInt(a, 10);
  return Ra(isNaN(a)) ? a : null;
}
function lr(a, b, c, d) {
  a <= b && b <= c || ir.l(null, J(["" + u.g(d) + " Failed:  " + u.g(a) + "\x3c\x3d" + u.g(b) + "\x3c\x3d" + u.g(c)], 0));
  return b;
}
function mr(a) {
  var b = Jk(a);
  M.j(b, 0, null);
  var c = M.j(b, 1, null), d = M.j(b, 2, null), e = M.j(b, 3, null), f = M.j(b, 4, null), g = M.j(b, 5, null), k = M.j(b, 6, null), l = M.j(b, 7, null), m = M.j(b, 8, null), p = M.j(b, 9, null), t = M.j(b, 10, null);
  if (Ra(b)) {
    return ir.l(null, J(["Unrecognized date/time syntax: " + u.g(a)], 0));
  }
  var r = kr(c), y = function() {
    var a = kr(d);
    return q(a) ? a : 1;
  }();
  a = function() {
    var a = kr(e);
    return q(a) ? a : 1;
  }();
  var b = function() {
    var a = kr(f);
    return q(a) ? a : 0;
  }(), c = function() {
    var a = kr(g);
    return q(a) ? a : 0;
  }(), B = function() {
    var a = kr(k);
    return q(a) ? a : 0;
  }(), C = function() {
    var a;
    a: {
      if (x.h(3, L(l))) {
        a = l;
      } else {
        if (3 < L(l)) {
          a = vf.j(l, 0, 3);
        } else {
          for (a = new wa(l);;) {
            if (3 > a.ub.length) {
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
    a = kr(a);
    return q(a) ? a : 0;
  }(), m = (x.h(m, "-") ? -1 : 1) * (60 * function() {
    var a = kr(p);
    return q(a) ? a : 0;
  }() + function() {
    var a = kr(t);
    return q(a) ? a : 0;
  }());
  return new Q(null, 8, 5, R, [r, lr(1, y, 12, "timestamp month field must be in range 1..12"), lr(1, a, function() {
    var a;
    if (a = 0 === (r % 4 + 4) % 4) {
      a = 0 !== (r % 100 + 100) % 100 || 0 === (r % 400 + 400) % 400;
    }
    return jr.h ? jr.h(y, a) : jr.call(null, y, a);
  }(), "timestamp day field must be in range 1..last day in month"), lr(0, b, 23, "timestamp hour field must be in range 0..23"), lr(0, c, 59, "timestamp minute field must be in range 0..59"), lr(0, B, x.h(c, 59) ? 60 : 59, "timestamp second field must be in range 0..60"), lr(0, C, 999, "timestamp millisecond field must be in range 0..999"), m], null);
}
var nr = new Ka(null, 4, ["inst", function(a) {
  var b;
  if ("string" === typeof a) {
    if (b = mr(a), q(b)) {
      a = M.j(b, 0, null);
      var c = M.j(b, 1, null), d = M.j(b, 2, null), e = M.j(b, 3, null), f = M.j(b, 4, null), g = M.j(b, 5, null), k = M.j(b, 6, null);
      b = M.j(b, 7, null);
      b = new Date(Date.UTC(a, c - 1, d, e, f, g, k) - 6E4 * b);
    } else {
      b = ir.l(null, J(["Unrecognized date/time syntax: " + u.g(a)], 0));
    }
  } else {
    b = ir.l(null, J(["Instance literal expects a string for its timestamp."], 0));
  }
  return b;
}, "uuid", function(a) {
  return "string" === typeof a ? new Yk(a) : ir.l(null, J(["UUID literal expects a string as its representation."], 0));
}, "queue", function(a) {
  return Ue(a) ? Xg.h(Kh, a) : ir.l(null, J(["Queue literal expects a vector for its elements."], 0));
}, "js", function(a) {
  if (Ue(a)) {
    var b = [];
    a = z(a);
    for (var c = null, d = 0, e = 0;;) {
      if (e < d) {
        var f = c.B(null, e);
        b.push(f);
        e += 1;
      } else {
        if (a = z(a)) {
          c = a, P(c) ? (a = v(c), e = w(c), c = a, d = L(a), a = e) : (a = A(c), b.push(a), a = E(c), c = null, d = 0), e = 0;
        } else {
          break;
        }
      }
    }
    return b;
  }
  if (Te(a)) {
    b = {};
    a = z(a);
    c = null;
    for (e = d = 0;;) {
      if (e < d) {
        var g = c.B(null, e), f = M.j(g, 0, null), g = M.j(g, 1, null);
        b[Qf(f)] = g;
        e += 1;
      } else {
        if (a = z(a)) {
          P(a) ? (d = v(a), a = w(a), c = d, d = L(d)) : (d = A(a), c = M.j(d, 0, null), d = M.j(d, 1, null), b[Qf(c)] = d, a = E(a), c = null, d = 0), e = 0;
        } else {
          break;
        }
      }
    }
    return b;
  }
  return ir.l(null, J(["JS literal expects a vector or map containing only string or unqualified keyword keys"], 0));
}], null);
Hg.g ? Hg.g(nr) : Hg.call(null, nr);
Hg.g ? Hg.g(null) : Hg.call(null, null);
var or = !Ol || Ol && 9 <= Wl, pr = Ol && !Ul("9");
!Ql || Ul("528");
Pl && Ul("1.9b") || Ol && Ul("8") || Nl && Ul("9.5") || Ql && Ul("528");
Pl && !Ul("8") || Ol && Ul("9");
function qr(a, b) {
  this.type = a;
  this.currentTarget = this.target = b;
  this.defaultPrevented = this.nd = !1;
}
qr.prototype.preventDefault = function() {
  this.defaultPrevented = !0;
};
function rr(a) {
  rr[" "](a);
  return a;
}
rr[" "] = function() {
};
function sr(a, b) {
  qr.call(this, a ? a.type : "");
  this.relatedTarget = this.currentTarget = this.target = null;
  this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
  this.fd = this.state = null;
  if (a) {
    var c = this.type = a.type;
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    var d = a.relatedTarget;
    if (d) {
      if (Pl) {
        var e;
        a: {
          try {
            rr(d.nodeName);
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
    this.offsetX = Ql || void 0 !== a.offsetX ? a.offsetX : a.layerX;
    this.offsetY = Ql || void 0 !== a.offsetY ? a.offsetY : a.layerY;
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
    this.fd = a;
    a.defaultPrevented && this.preventDefault();
  }
}
(function() {
  function a() {
  }
  a.prototype = qr.prototype;
  sr.De = qr.prototype;
  sr.prototype = new a;
  sr.prototype.constructor = sr;
  sr.Tb = function(a, c, d) {
    return qr.prototype[c].apply(a, Array.prototype.slice.call(arguments, 2));
  };
})();
sr.prototype.preventDefault = function() {
  sr.De.preventDefault.call(this);
  var a = this.fd;
  if (a.preventDefault) {
    a.preventDefault();
  } else {
    if (a.returnValue = !1, pr) {
      try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1;
        }
      } catch (b) {
      }
    }
  }
};
var tr = "closure_listenable_" + (1E6 * Math.random() | 0), ur = 0;
function vr(a, b, c, d, e) {
  this.Eb = a;
  this.gc = null;
  this.src = b;
  this.type = c;
  this.mc = !!d;
  this.Za = e;
  this.key = ++ur;
  this.Rb = this.lc = !1;
}
function wr(a) {
  a.Rb = !0;
  a.Eb = null;
  a.gc = null;
  a.src = null;
  a.Za = null;
}
;function xr(a) {
  this.src = a;
  this.Ha = {};
  this.hc = 0;
}
xr.prototype.add = function(a, b, c, d, e) {
  var f = a.toString();
  a = this.Ha[f];
  a || (a = this.Ha[f] = [], this.hc++);
  var g = yr(a, b, d, e);
  -1 < g ? (b = a[g], c || (b.lc = !1)) : (b = new vr(b, this.src, f, !!d, e), b.lc = c, a.push(b));
  return b;
};
xr.prototype.remove = function(a, b, c, d) {
  a = a.toString();
  if (!(a in this.Ha)) {
    return!1;
  }
  var e = this.Ha[a];
  b = yr(e, b, c, d);
  return-1 < b ? (wr(e[b]), xa.splice.call(e, b, 1), 0 == e.length && (delete this.Ha[a], this.hc--), !0) : !1;
};
function zr(a, b) {
  var c = b.type;
  if (c in a.Ha) {
    var d = a.Ha[c], e = ya(d, b), f;
    (f = 0 <= e) && xa.splice.call(d, e, 1);
    f && (wr(b), 0 == a.Ha[c].length && (delete a.Ha[c], a.hc--));
  }
}
function yr(a, b, c, d) {
  for (var e = 0;e < a.length;++e) {
    var f = a[e];
    if (!f.Rb && f.Eb == b && f.mc == !!c && f.Za == d) {
      return e;
    }
  }
  return-1;
}
;var Ar = "closure_lm_" + (1E6 * Math.random() | 0), Br = {}, Cr = 0;
function Dr(a, b, c, d, e) {
  if ("array" == n(b)) {
    for (var f = 0;f < b.length;f++) {
      Dr(a, b[f], c, d, e);
    }
    return null;
  }
  c = Er(c);
  if (a && a[tr]) {
    a = a.Ve(b, c, d, e);
  } else {
    if (!b) {
      throw Error("Invalid event type");
    }
    var f = !!d, g = Fr(a);
    g || (a[Ar] = g = new xr(a));
    c = g.add(b, c, !1, d, e);
    c.gc || (d = Gr(), c.gc = d, d.src = a, d.Eb = c, a.addEventListener ? a.addEventListener(b.toString(), d, f) : a.attachEvent(Hr(b.toString()), d), Cr++);
    a = c;
  }
  return a;
}
function Gr() {
  var a = Ir, b = or ? function(c) {
    return a.call(b.src, b.Eb, c);
  } : function(c) {
    c = a.call(b.src, b.Eb, c);
    if (!c) {
      return c;
    }
  };
  return b;
}
function Hr(a) {
  return a in Br ? Br[a] : Br[a] = "on" + a;
}
function Jr(a, b, c, d) {
  var e = 1;
  if (a = Fr(a)) {
    if (b = a.Ha[b.toString()]) {
      for (b = b.concat(), a = 0;a < b.length;a++) {
        var f = b[a];
        f && f.mc == c && !f.Rb && (e &= !1 !== Kr(f, d));
      }
    }
  }
  return Boolean(e);
}
function Kr(a, b) {
  var c = a.Eb, d = a.Za || a.src;
  if (a.lc && "number" != typeof a && a && !a.Rb) {
    var e = a.src;
    if (e && e[tr]) {
      zr(e.Se, a);
    } else {
      var f = a.type, g = a.gc;
      e.removeEventListener ? e.removeEventListener(f, g, a.mc) : e.detachEvent && e.detachEvent(Hr(f), g);
      Cr--;
      (f = Fr(e)) ? (zr(f, a), 0 == f.hc && (f.src = null, e[Ar] = null)) : wr(a);
    }
  }
  return c.call(d, b);
}
function Ir(a, b) {
  if (a.Rb) {
    return!0;
  }
  if (!or) {
    var c;
    if (!(c = b)) {
      a: {
        c = ["window", "event"];
        for (var d = ba, e;e = c.shift();) {
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
    c = new sr(e, this);
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
      for (var f = a.type, k = e.length - 1;!c.nd && 0 <= k;k--) {
        c.currentTarget = e[k], d &= Jr(e[k], f, !0, c);
      }
      for (k = 0;!c.nd && k < e.length;k++) {
        c.currentTarget = e[k], d &= Jr(e[k], f, !1, c);
      }
    }
    return d;
  }
  return Kr(a, new sr(b, this));
}
function Fr(a) {
  a = a[Ar];
  return a instanceof xr ? a : null;
}
var Lr = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
function Er(a) {
  if (fa(a)) {
    return a;
  }
  a[Lr] || (a[Lr] = function(b) {
    return a.handleEvent(b);
  });
  return a[Lr];
}
;var Mr = function() {
  function a(a, d, e, f) {
    var g = null;
    3 < arguments.length && (g = J(Array.prototype.slice.call(arguments, 3), 0));
    return b.call(this, a, d, e, g);
  }
  function b(a, b, e, f) {
    f = Ze(f) ? Fe.h(Fg, f) : f;
    f = O.j(f, yq, !1);
    a = cr(a);
    b = Qf(b);
    return Dr(a, b, e, f);
  }
  a.C = 3;
  a.p = function(a) {
    var d = A(a);
    a = E(a);
    var e = A(a);
    a = E(a);
    var f = A(a);
    a = D(a);
    return b(d, e, f, a);
  };
  a.l = b;
  return a;
}();
function Nr(a) {
  if (a ? a.ce : a) {
    return a.ce(a);
  }
  var b;
  b = Nr[n(null == a ? null : a)];
  if (!b && (b = Nr._, !b)) {
    throw s("PHTM.htm-activate", a);
  }
  return b.call(null, a);
}
function Or(a) {
  if (a ? a.ee : a) {
    return a.ee(a);
  }
  var b;
  b = Or[n(null == a ? null : a)];
  if (!b && (b = Or._, !b)) {
    throw s("PHTM.htm-learn", a);
  }
  return b.call(null, a);
}
function Uu(a) {
  if (a ? a.de : a) {
    return a.de(a);
  }
  var b;
  b = Uu[n(null == a ? null : a)];
  if (!b && (b = Uu._, !b)) {
    throw s("PHTM.htm-depolarise", a);
  }
  return b.call(null, a);
}
function Vu(a) {
  if (a ? a.ge : a) {
    return a.ge(a);
  }
  var b;
  b = Vu[n(null == a ? null : a)];
  if (!b && (b = Vu._, !b)) {
    throw s("PHTM.region-seq", a);
  }
  return b.call(null, a);
}
function Wu(a) {
  if (a ? a.fe : a) {
    return a.fe(a);
  }
  var b;
  b = Wu[n(null == a ? null : a)];
  if (!b && (b = Wu._, !b)) {
    throw s("PHTM.input-seq", a);
  }
  return b.call(null, a);
}
function Xu(a) {
  return Uu(Or(Nr(a)));
}
function Yu(a, b) {
  if (a ? a.$d : a) {
    return a.$d(a, b);
  }
  var c;
  c = Yu[n(null == a ? null : a)];
  if (!c && (c = Yu._, !c)) {
    throw s("PFeedForward.bits-value", a);
  }
  return c.call(null, a, b);
}
function Zu(a, b) {
  if (a ? a.ae : a) {
    return a.ae(a, b);
  }
  var c;
  c = Zu[n(null == a ? null : a)];
  if (!c && (c = Zu._, !c)) {
    throw s("PFeedForward.signal-bits-value", a);
  }
  return c.call(null, a, b);
}
function $u(a, b) {
  if (a ? a.be : a) {
    return a.be(a, b);
  }
  var c;
  c = $u[n(null == a ? null : a)];
  if (!c && (c = $u._, !c)) {
    throw s("PFeedForward.source-of-bit", a);
  }
  return c.call(null, a, b);
}
function av(a) {
  if (a ? a.le : a) {
    return a.le(a);
  }
  var b;
  b = av[n(null == a ? null : a)];
  if (!b && (b = av._, !b)) {
    throw s("PLayerOfCells.layer-depth", a);
  }
  return b.call(null, a);
}
function bv(a) {
  if (a ? a.ke : a) {
    return a.ke(a);
  }
  var b;
  b = bv[n(null == a ? null : a)];
  if (!b && (b = bv._, !b)) {
    throw s("PLayerOfCells.column-excitation", a);
  }
  return b.call(null, a);
}
function cv(a) {
  if (a ? a.je : a) {
    return a.je(a);
  }
  var b;
  b = cv[n(null == a ? null : a)];
  if (!b && (b = cv._, !b)) {
    throw s("PLayerOfCells.bursting-columns", a);
  }
  return b.call(null, a);
}
function dv(a) {
  if (a ? a.ie : a) {
    return a.ie(a);
  }
  var b;
  b = dv[n(null == a ? null : a)];
  if (!b && (b = dv._, !b)) {
    throw s("PLayerOfCells.active-columns", a);
  }
  return b.call(null, a);
}
function ev(a) {
  if (a ? a.he : a) {
    return a.he(a);
  }
  var b;
  b = ev[n(null == a ? null : a)];
  if (!b && (b = ev._, !b)) {
    throw s("PLayerOfCells.active-cells", a);
  }
  return b.call(null, a);
}
function fv(a) {
  if (a ? a.me : a) {
    return a.me(a);
  }
  var b;
  b = fv[n(null == a ? null : a)];
  if (!b && (b = fv._, !b)) {
    throw s("PLayerOfCells.learnable-cells", a);
  }
  return b.call(null, a);
}
function gv(a) {
  if (a ? a.pe : a) {
    return a.pe(a);
  }
  var b;
  b = gv[n(null == a ? null : a)];
  if (!b && (b = gv._, !b)) {
    throw s("PLayerOfCells.signal-cells", a);
  }
  return b.call(null, a);
}
function hv(a) {
  if (a ? a.qe : a) {
    return a.qe(a);
  }
  var b;
  b = hv[n(null == a ? null : a)];
  if (!b && (b = hv._, !b)) {
    throw s("PLayerOfCells.temporal-pooling-cells", a);
  }
  return b.call(null, a);
}
function iv(a) {
  if (a ? a.ne : a) {
    return a.ne(a);
  }
  var b;
  b = iv[n(null == a ? null : a)];
  if (!b && (b = iv._, !b)) {
    throw s("PLayerOfCells.predictive-cells", a);
  }
  return b.call(null, a);
}
function jv(a) {
  if (a ? a.oe : a) {
    return a.oe(a);
  }
  var b;
  b = jv[n(null == a ? null : a)];
  if (!b && (b = jv._, !b)) {
    throw s("PLayerOfCells.prior-predictive-cells", a);
  }
  return b.call(null, a);
}
function kv(a, b) {
  if (a ? a.ue : a) {
    return a.ue(a, b);
  }
  var c;
  c = kv[n(null == a ? null : a)];
  if (!c && (c = kv._, !c)) {
    throw s("PSynapseGraph.in-synapses", a);
  }
  return c.call(null, a, b);
}
function lv(a, b) {
  if (a ? a.ve : a) {
    return a.ve(a, b);
  }
  var c;
  c = lv[n(null == a ? null : a)];
  if (!c && (c = lv._, !c)) {
    throw s("PSynapseGraph.sources-connected-to", a);
  }
  return c.call(null, a, b);
}
function mv(a, b) {
  if (a ? a.we : a) {
    return a.we(a, b);
  }
  var c;
  c = mv[n(null == a ? null : a)];
  if (!c && (c = mv._, !c)) {
    throw s("PSynapseGraph.targets-connected-from", a);
  }
  return c.call(null, a, b);
}
function nv(a, b) {
  if (a ? a.se : a) {
    return a.se(a, b);
  }
  var c;
  c = nv[n(null == a ? null : a)];
  if (!c && (c = nv._, !c)) {
    throw s("PSegments.cell-segments", a);
  }
  return c.call(null, a, b);
}
function ov(a) {
  if (a ? a.te : a) {
    return a.te(a);
  }
  var b;
  b = ov[n(null == a ? null : a)];
  if (!b && (b = ov._, !b)) {
    throw s("PSensoryInput.domain-value", a);
  }
  return b.call(null, a);
}
function pv(a) {
  if (a ? a.xe : a) {
    return a.xe(a);
  }
  var b;
  b = pv[n(null == a ? null : a)];
  if (!b && (b = pv._, !b)) {
    throw s("PTemporal.timestep", a);
  }
  return b.call(null, a);
}
function qv(a) {
  if (a ? a.re : a) {
    return a.re(a);
  }
  var b;
  b = qv[n(null == a ? null : a)];
  if (!b && (b = qv._, !b)) {
    throw s("PParameterised.params", a);
  }
  return b.call(null, a);
}
function rv(a) {
  if (a ? a.ye : a) {
    return a.ye(a);
  }
  var b;
  b = rv[n(null == a ? null : a)];
  if (!b && (b = rv._, !b)) {
    throw s("PTopological.topology", a);
  }
  return b.call(null, a);
}
function sv(a) {
  if (a ? a.xc : a) {
    return a.xc(a);
  }
  var b;
  b = sv[n(null == a ? null : a)];
  if (!b && (b = sv._, !b)) {
    throw s("PTopology.dimensions", a);
  }
  return b.call(null, a);
}
function tv(a, b) {
  if (a ? a.wc : a) {
    return a.wc(a, b);
  }
  var c;
  c = tv[n(null == a ? null : a)];
  if (!c && (c = tv._, !c)) {
    throw s("PTopology.coordinates-of-index", a);
  }
  return c.call(null, a, b);
}
function uv(a, b) {
  if (a ? a.yc : a) {
    return a.yc(a, b);
  }
  var c;
  c = uv[n(null == a ? null : a)];
  if (!c && (c = uv._, !c)) {
    throw s("PTopology.index-of-coordinates", a);
  }
  return c.call(null, a, b);
}
function vv(a, b, c, d) {
  if (a ? a.zc : a) {
    return a.zc(a, b, c, d);
  }
  var e;
  e = vv[n(null == a ? null : a)];
  if (!e && (e = vv._, !e)) {
    throw s("PTopology.neighbours*", a);
  }
  return e.call(null, a, b, c, d);
}
function wv(a, b, c) {
  if (a ? a.vc : a) {
    return a.vc(a, b, c);
  }
  var d;
  d = wv[n(null == a ? null : a)];
  if (!d && (d = wv._, !d)) {
    throw s("PTopology.coord-distance", a);
  }
  return d.call(null, a, b, c);
}
function xv(a) {
  return Fe.h(mf, sv(a));
}
var yv = function() {
  function a(a, b, e) {
    return vv(a, b, e, 0);
  }
  var b = null, b = function(b, d, e, f) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, d, e);
      case 4:
        return vv(b, d, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.j = a;
  b.n = function(a, b, e, f) {
    return vv(a, b, e, f);
  };
  return b;
}();
Math.seedrandom = null;
(function(a, b, c, d, e, f) {
  function g(a) {
    var b, c = a.length, e = this, f = 0, g = e.D = e.hd = 0, k = e.Ac = [];
    for (c || (a = [c++]);f < d;) {
      k[f] = f++;
    }
    for (f = 0;f < d;f++) {
      k[f] = k[g = B & g + a[f % c] + (b = k[f])], k[g] = b;
    }
    (e.gd = function(a) {
      for (var b, c = 0, f = e.D, g = e.hd, k = e.Ac;a--;) {
        b = k[f = B & f + 1], c = c * d + k[B & (k[f] = k[g = B & g + b]) + (k[g] = b)];
      }
      e.D = f;
      e.hd = g;
      return c;
    })(d);
  }
  function k(a, b) {
    var c = [], d = (typeof a)[0], e;
    if (b && "o" == d) {
      for (e in a) {
        if (a.hasOwnProperty(e)) {
          try {
            c.push(k(a[e], b - 1));
          } catch (f) {
          }
        }
      }
    }
    return c.length ? c : "s" == d ? a : a + "\x00";
  }
  function l(a, b) {
    for (var c = a + "", d, e = 0;e < c.length;) {
      b[B & e] = B & (d ^= 19 * b[B & e]) + c.charCodeAt(e++);
    }
    return p(b);
  }
  function m() {
    var c;
    try {
      return a.crypto.getRandomValues(c = new Uint8Array(d)), p(c);
    } catch (e) {
      return[+new Date, a.document, a.history, a.navigator, a.screen, p(b)];
    }
  }
  function p(a) {
    return String.fromCharCode.apply(0, a);
  }
  var t = c.pow(d, e), r = c.pow(2, f), y = 2 * r, B = d - 1;
  c.seedrandom = function(a, f) {
    var B = [], N = l(k(f ? [a, p(b)] : 0 in arguments ? a : m(), 3), B), H = new g(B);
    l(p(H.Ac), b);
    c.random = function() {
      for (var a = H.gd(e), b = t, c = 0;a < r;) {
        a = (a + c) * d, b *= d, c = H.gd(1);
      }
      for (;a >= y;) {
        a /= 2, b /= 2, c >>>= 1;
      }
      return(a + c) / b;
    };
    return N;
  };
  l(c.random(), b);
})(this, [], Math, 256, 6, 52);
function zv(a, b, c, d) {
  this.seed = a;
  this.rb = b;
  this.H = c;
  this.G = d;
  this.o = 2229667594;
  this.F = 8192;
  2 < arguments.length ? (this.H = c, this.G = d) : this.G = this.H = null;
}
h = zv.prototype;
h.J = function(a, b) {
  return wb.j(this, b, null);
};
h.I = function(a, b, c) {
  switch(b instanceof U ? b.na : null) {
    case "random-double":
      return this.rb;
    case "seed":
      return this.seed;
    default:
      return O.j(this.G, b, c);
  }
};
h.K = function(a, b, c) {
  return Mk(b, function() {
    return function(a) {
      return Mk(b, Sk, "", " ", "", c, a);
    };
  }(this), "#cemerick.pprng.SeededRandom{", ", ", "}", c, dg.h(new Q(null, 2, 5, R, [new Q(null, 2, 5, R, [Ln, this.seed], null), new Q(null, 2, 5, R, [Ip, this.rb], null)], null), this.G));
};
h.L = function() {
  return this.H;
};
h.T = function() {
  return 2 + L(this.G);
};
h.O = function() {
  var a = this.A;
  return null != a ? a : this.A = a = wf(this);
};
h.M = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && Nh(this, b) : b) ? !0 : !1;
};
h.eb = function(a, b) {
  return af(new zk(null, new Ka(null, 2, [Ln, null, Ip, null], null), null), b) ? Ce.h(je(Xg.h(Sh, this), this.H), b) : new zv(this.seed, this.rb, this.H, kg(Ce.h(this.G, b)), null);
};
h.Aa = function(a, b, c) {
  return q(Pf.h ? Pf.h(Ln, b) : Pf.call(null, Ln, b)) ? new zv(c, this.rb, this.H, this.G, null) : q(Pf.h ? Pf.h(Ip, b) : Pf.call(null, Ip, b)) ? new zv(this.seed, c, this.H, this.G, null) : new zv(this.seed, this.rb, this.H, Be.j(this.G, b, c), null);
};
h.P = function() {
  return z(dg.h(new Q(null, 2, 5, R, [new Q(null, 2, 5, R, [Ln, this.seed], null), new Q(null, 2, 5, R, [Ip, this.rb], null)], null), this.G));
};
h.N = function(a, b) {
  return new zv(this.seed, this.rb, b, this.G, this.A);
};
h.R = function(a, b) {
  return Ue(b) ? Ab(this, ob.h(b, 0), ob.h(b, 1)) : Xa.j(mb, this, b);
};
function Av(a) {
  return 0 > a ? -a : a;
}
var Bv = function() {
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
}();
(function() {
  function a(a) {
    Math.seedrandom.g ? Math.seedrandom.g(a) : Math.seedrandom.call(null, a);
    Math.seedrandom.g ? Math.seedrandom.g(a) : Math.seedrandom.call(null, a);
    return new zv(a, Math.random);
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
  c.v = b;
  c.g = a;
  return c;
})().v();
function Cv(a, b) {
  return Xa.j(function(b, d) {
    return q(a.g ? a.g(d) : a.call(null, d)) ? b + 1 : b;
  }, 0, b);
}
function Dv(a, b) {
  return Xg.h(function() {
    var a = null == b ? null : db(b);
    return q(a) ? a : Sh;
  }(), Yg.h(function(b) {
    var d = M.j(b, 0, null);
    b = M.j(b, 1, null);
    return new Q(null, 2, 5, R, [d, a.g ? a.g(b) : a.call(null, b)], null);
  }, b));
}
function Ev(a, b) {
  if (0 >= a) {
    return me;
  }
  if (1 === a) {
    return new Q(null, 1, 5, R, [xf(Fe.j(Fk, Jf, z(b)))], null);
  }
  for (var c = z(b), d = sk(function() {
    return function(a, c) {
      return Ed(new Q(null, 2, 5, R, [b.g ? b.g(a) : b.call(null, a), a], null), new Q(null, 2, 5, R, [b.g ? b.g(c) : b.call(null, c), c], null));
    };
  }(c)), e = -1;;) {
    if (He(c)) {
      return uk(d);
    }
    var f = A(c), g = M.j(f, 0, null), k = M.j(f, 1, null);
    He(d) ? (c = E(c), d = Be.j(d, g, k), g = k) : L(d) < a ? (c = E(c), d = Be.j(d, g, k), g = function() {
      var a = e, b = k;
      return a < b ? a : b;
    }()) : k > e ? (g = Be.j(Ce.h(d, A(uk(d))), g, k), c = E(c), d = g, g = A(wk(g))) : (c = E(c), g = e);
    e = g;
  }
}
;function Fv(a, b) {
  var c = Xq.g(a), d = Hq.g(a), e = M.j(b, 0, null), f = M.j(b, 1, null);
  return Yg.h(function(a, b, c, d, e) {
    return function(c) {
      var f = kv;
      c = new Q(null, 3, 5, R, [d, e, c], null);
      c = b.g ? b.g(c) : b.call(null, c);
      return f(a, c);
    };
  }(c, d, b, e, f), Ik.g(Gm.g(a)));
}
;function Gv(a, b, c) {
  b = Bv.g(b * c);
  return Ev(1 > b ? 1 : b, a);
}
function Hv(a) {
  return fg(hf(function(a, c, d) {
    return q(d) ? hg.j(a, c, d) : a;
  }, Rc(Sh), a));
}
function Iv(a, b, c) {
  var d = uk(gf.j(Jf, nf, a)), e = xv(b);
  a = Yg.h(a, Ik.g(e));
  for (a = Rc(a);;) {
    if (e = A(d), q(e)) {
      var f = e, e = f, e = a.g ? a.g(e) : a.call(null, e);
      if (q(e)) {
        d = E(d);
        a: {
          var g = a;
          a = e;
          for (var e = b, k = c, f = tv(e, f), l = yv.n(e, f, 15, 0);;) {
            var m = A(l);
            if (q(m)) {
              var p = m, m = uv(e, p), t;
              t = m;
              t = g.g ? g.g(t) : g.call(null, t);
              q(t) ? (p = wv(e, f, p) - k, t <= a * (1 - (0 > p ? 0 : p) / (15 - k)) ? (l = E(l), g = hg.j(g, m, null)) : l = E(l)) : l = E(l);
            } else {
              a = g;
              break a;
            }
          }
          a = void 0;
        }
      } else {
        d = E(d);
      }
    } else {
      return uk(Hv(Tc(a)));
    }
  }
}
;function Jv(a) {
  return 0 > a ? -a : a;
}
function Kv(a, b, c) {
  this.size = a;
  this.H = b;
  this.G = c;
  this.o = 2229667594;
  this.F = 8192;
  1 < arguments.length ? (this.H = b, this.G = c) : this.G = this.H = null;
}
h = Kv.prototype;
h.J = function(a, b) {
  return wb.j(this, b, null);
};
h.I = function(a, b, c) {
  switch(b instanceof U ? b.na : null) {
    case "size":
      return this.size;
    default:
      return O.j(this.G, b, c);
  }
};
h.K = function(a, b, c) {
  return Mk(b, function() {
    return function(a) {
      return Mk(b, Sk, "", " ", "", c, a);
    };
  }(this), "#org.nfrac.comportex.topology.OneDTopology{", ", ", "}", c, dg.h(new Q(null, 1, 5, R, [new Q(null, 2, 5, R, [Nn, this.size], null)], null), this.G));
};
h.L = function() {
  return this.H;
};
h.T = function() {
  return 1 + L(this.G);
};
h.O = function() {
  var a = this.A;
  return null != a ? a : this.A = a = wf(this);
};
h.M = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && Nh(this, b) : b) ? !0 : !1;
};
h.xc = function() {
  return new Q(null, 1, 5, R, [this.size], null);
};
h.wc = function(a, b) {
  return b;
};
h.yc = function(a, b) {
  return b;
};
h.zc = function(a, b, c, d) {
  var e = this;
  return dg.h(Ik.h(function() {
    var a = b + d + 1, c = e.size;
    return a < c ? a : c;
  }(), function() {
    var a = b + c + 1, d = e.size;
    return a < d ? a : d;
  }()), Ik.h(function() {
    var a = b - c;
    return 0 < a ? a : 0;
  }(), function() {
    var a = b - d;
    return 0 < a ? a : 0;
  }()));
};
h.vc = function(a, b, c) {
  return Jv(c - b);
};
h.eb = function(a, b) {
  return af(new zk(null, new Ka(null, 1, [Nn, null], null), null), b) ? Ce.h(je(Xg.h(Sh, this), this.H), b) : new Kv(this.size, this.H, kg(Ce.h(this.G, b)), null);
};
h.Aa = function(a, b, c) {
  return q(Pf.h ? Pf.h(Nn, b) : Pf.call(null, Nn, b)) ? new Kv(c, this.H, this.G, null) : new Kv(this.size, this.H, Be.j(this.G, b, c), null);
};
h.P = function() {
  return z(dg.h(new Q(null, 1, 5, R, [new Q(null, 2, 5, R, [Nn, this.size], null)], null), this.G));
};
h.N = function(a, b) {
  return new Kv(this.size, b, this.G, this.A);
};
h.R = function(a, b) {
  return Ue(b) ? Ab(this, ob.h(b, 0), ob.h(b, 1)) : Xa.j(mb, this, b);
};
function Lv(a, b, c, d) {
  this.width = a;
  this.height = b;
  this.H = c;
  this.G = d;
  this.o = 2229667594;
  this.F = 8192;
  2 < arguments.length ? (this.H = c, this.G = d) : this.G = this.H = null;
}
h = Lv.prototype;
h.J = function(a, b) {
  return wb.j(this, b, null);
};
h.I = function(a, b, c) {
  switch(b instanceof U ? b.na : null) {
    case "height":
      return this.height;
    case "width":
      return this.width;
    default:
      return O.j(this.G, b, c);
  }
};
h.K = function(a, b, c) {
  return Mk(b, function() {
    return function(a) {
      return Mk(b, Sk, "", " ", "", c, a);
    };
  }(this), "#org.nfrac.comportex.topology.TwoDTopology{", ", ", "}", c, dg.h(new Q(null, 2, 5, R, [new Q(null, 2, 5, R, [rn, this.width], null), new Q(null, 2, 5, R, [Tq, this.height], null)], null), this.G));
};
h.L = function() {
  return this.H;
};
h.T = function() {
  return 2 + L(this.G);
};
h.O = function() {
  var a = this.A;
  return null != a ? a : this.A = a = wf(this);
};
h.M = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && Nh(this, b) : b) ? !0 : !1;
};
h.xc = function() {
  return new Q(null, 2, 5, R, [this.width, this.height], null);
};
h.wc = function(a, b) {
  var c = R, d = rf(b, this.height), e = this.height, f = rf(b, e);
  return new Q(null, 2, 5, c, [d, b - e * f], null);
};
h.yc = function(a, b) {
  var c = M.j(b, 0, null), d = M.j(b, 1, null);
  return c * this.height + d;
};
h.zc = function(a, b, c, d) {
  var e = this, f = M.j(b, 0, null);
  a = M.j(b, 1, null);
  return function(a, b, f, m) {
    return function t(r) {
      return new Sf(null, function(a, b, f, g) {
        return function() {
          for (var k = r;;) {
            var l = z(k);
            if (l) {
              var m = l, V = A(m);
              if (l = z(function(a, b, c, e, f, g, k, l) {
                return function ta(m) {
                  return new Sf(null, function(a, b, c, e, f, g, k) {
                    return function() {
                      for (var a = m;;) {
                        if (a = z(a)) {
                          if (P(a)) {
                            var c = v(a), e = L(c), f = Wf(e);
                            a: {
                              for (var l = 0;;) {
                                if (l < e) {
                                  var G = ob.h(c, l);
                                  (Jv(b - g) > d || Jv(G - k) > d) && f.add(new Q(null, 2, 5, R, [b, G], null));
                                  l += 1;
                                } else {
                                  c = !0;
                                  break a;
                                }
                              }
                              c = void 0;
                            }
                            return c ? Zf(f.Q(), ta(w(a))) : Zf(f.Q(), null);
                          }
                          f = A(a);
                          if (Jv(b - g) > d || Jv(f - k) > d) {
                            return he(new Q(null, 2, 5, R, [b, f], null), ta(D(a)));
                          }
                          a = D(a);
                        } else {
                          return null;
                        }
                      }
                    };
                  }(a, b, c, e, f, g, k, l), null, null);
                };
              }(k, V, m, l, a, b, f, g)(Ik.h(function() {
                var a = f - c;
                return 0 < a ? a : 0;
              }(), function() {
                var a = f + c + 1, b = e.height;
                return a < b ? a : b;
              }())))) {
                return dg.h(l, t(D(k)));
              }
              k = D(k);
            } else {
              return null;
            }
          }
        };
      }(a, b, f, m), null, null);
    };
  }(b, f, a, this)(Ik.h(function() {
    var a = f - c;
    return 0 < a ? a : 0;
  }(), function() {
    var a = f + c + 1, b = e.width;
    return a < b ? a : b;
  }()));
};
h.vc = function(a, b, c) {
  a = M.j(b, 0, null);
  b = M.j(b, 1, null);
  var d = M.j(c, 0, null);
  c = M.j(c, 1, null);
  return Jv(d - a) + Jv(c - b);
};
h.eb = function(a, b) {
  return af(new zk(null, new Ka(null, 2, [rn, null, Tq, null], null), null), b) ? Ce.h(je(Xg.h(Sh, this), this.H), b) : new Lv(this.width, this.height, this.H, kg(Ce.h(this.G, b)), null);
};
h.Aa = function(a, b, c) {
  return q(Pf.h ? Pf.h(rn, b) : Pf.call(null, rn, b)) ? new Lv(c, this.height, this.H, this.G, null) : q(Pf.h ? Pf.h(Tq, b) : Pf.call(null, Tq, b)) ? new Lv(this.width, c, this.H, this.G, null) : new Lv(this.width, this.height, this.H, Be.j(this.G, b, c), null);
};
h.P = function() {
  return z(dg.h(new Q(null, 2, 5, R, [new Q(null, 2, 5, R, [rn, this.width], null), new Q(null, 2, 5, R, [Tq, this.height], null)], null), this.G));
};
h.N = function(a, b) {
  return new Lv(this.width, this.height, b, this.G, this.A);
};
h.R = function(a, b) {
  return Ue(b) ? Ab(this, ob.h(b, 0), ob.h(b, 1)) : Xa.j(mb, this, b);
};
var Nv = function Mv(b, c, d) {
  return Mv(b, c, d);
};
function Ov(a) {
  var b = M.j(a, 0, null), c = M.j(a, 1, null), d = M.j(a, 2, null), e = M.j(a, 3, null);
  switch(L(a)) {
    case 0:
      return new Kv(0);
    case 1:
      return new Kv(b);
    case 2:
      return new Lv(b, c);
    case 3:
      return Nv(b, c, d);
    case 4:
      return Nv(b, c, d * e);
    default:
      throw Error("No matching clause: " + u.g(L(a)));;
  }
}
Ov(new Q(null, 1, 5, R, [0], null));
pe([xm, ym, Am, Cm, Dm, Im, Nm, Pm, Rm, Sm, cn, fn, ln, tn, An, Dn, Fn, Hn, Jn, Dp, Fp, Hp, Np, Op, Rp, Xp, kq, nq, qq, rq, Cq, Lq, Pq, Qq, Uq, Vq], [.001, .2, .16, !0, !1, 15, 5, .01, .001, !0, .2, 8, 12, new Q(null, 1, 5, R, [2048], null), 0, .3, .05, 22, new Q(null, 1, 5, R, [0], null), !1, !1, new Q(null, 1, 5, R, [0], null), 3, .3, .05, .02, .005, new Q(null, 1, 5, R, [sq], null), 16, 1, 15, 1E3, 1E3, !1, .16, 3]);
function Pv(a, b, c) {
  if (q(function() {
    var b = Dm.h(a, !1);
    return q(b) ? b : 0 === c;
  }())) {
    return a;
  }
  var d = Xp.h(a, .02);
  return $g.j(a, new Q(null, 1, 5, R, [Vq], null), function(a) {
    return function(c) {
      c += c * (b / a - 1) * .1;
      c = 1 < c ? c : 1;
      return 1E3 > c ? c : 1E3;
    };
  }(d));
}
;var Qv = function() {
  function a(a, b, c) {
    a = c.g ? c.g(a) : c.call(null, a);
    c = En.g(a);
    return fg(Xa.j(function(a, b) {
      return function(c, d) {
        var e = lv(b, d);
        return Xa.j(function() {
          return function(a, b) {
            return hg.j(a, b, O.j(a, b, 0) + 1);
          };
        }(e, a, b), c, e);
      };
    }(a, c), Rc(Sh), b));
  }
  function b(a, b) {
    return c.j(a, b, Mq);
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
var Rv, Sv;
function Tv(a, b, c) {
  if (a ? a.qc : a) {
    return a.qc(0, b, c);
  }
  var d;
  d = Tv[n(null == a ? null : a)];
  if (!d && (d = Tv._, !d)) {
    throw s("WritePort.put!", a);
  }
  return d.call(null, a, b, c);
}
function Uv(a) {
  if (a ? a.ac : a) {
    return a.ac();
  }
  var b;
  b = Uv[n(null == a ? null : a)];
  if (!b && (b = Uv._, !b)) {
    throw s("Channel.close!", a);
  }
  return b.call(null, a);
}
function Vv(a) {
  if (a ? a.Uc : a) {
    return!0;
  }
  var b;
  b = Vv[n(null == a ? null : a)];
  if (!b && (b = Vv._, !b)) {
    throw s("Handler.active?", a);
  }
  return b.call(null, a);
}
function Wv(a) {
  if (a ? a.Vc : a) {
    return a.f;
  }
  var b;
  b = Wv[n(null == a ? null : a)];
  if (!b && (b = Wv._, !b)) {
    throw s("Handler.commit", a);
  }
  return b.call(null, a);
}
function Xv(a, b) {
  if (a ? a.Tc : a) {
    return a.Tc(0, b);
  }
  var c;
  c = Xv[n(null == a ? null : a)];
  if (!c && (c = Xv._, !c)) {
    throw s("Buffer.add!*", a);
  }
  return c.call(null, a, b);
}
var Yv = function() {
  function a(a, b) {
    if (null == b) {
      throw Error("Assert failed: " + u.g(Jg.l(J([Nf(new Fd(null, "not", "not", 1044554643, null), Nf(new Fd(null, "nil?", "nil?", 1612038930, null), new Fd(null, "itm", "itm", -713282527, null)))], 0))));
    }
    return Xv(a, b);
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
function Zv(a, b, c, d, e) {
  for (var f = 0;;) {
    if (f < e) {
      c[d + f] = a[b + f], f += 1;
    } else {
      break;
    }
  }
}
function $v(a, b, c, d) {
  this.head = a;
  this.S = b;
  this.length = c;
  this.k = d;
}
$v.prototype.pop = function() {
  if (0 === this.length) {
    return null;
  }
  var a = this.k[this.S];
  this.k[this.S] = null;
  this.S = (this.S + 1) % this.k.length;
  this.length -= 1;
  return a;
};
$v.prototype.unshift = function(a) {
  this.k[this.head] = a;
  this.head = (this.head + 1) % this.k.length;
  this.length += 1;
  return null;
};
function aw(a, b) {
  a.length + 1 === a.k.length && a.resize();
  a.unshift(b);
}
$v.prototype.resize = function() {
  var a = Array(2 * this.k.length);
  return this.S < this.head ? (Zv(this.k, this.S, a, 0, this.length), this.S = 0, this.head = this.length, this.k = a) : this.S > this.head ? (Zv(this.k, this.S, a, 0, this.k.length - this.S), Zv(this.k, 0, a, this.k.length - this.S, this.head), this.S = 0, this.head = this.length, this.k = a) : this.S === this.head ? (this.head = this.S = 0, this.k = a) : null;
};
function bw(a, b) {
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
function cw(a) {
  if (!(0 < a)) {
    throw Error("Assert failed: Can't create a ring buffer of size 0\n" + u.g(Jg.l(J([Nf(new Fd(null, "\x3e", "\x3e", 1085014381, null), new Fd(null, "n", "n", -2092305744, null), 0)], 0))));
  }
  return new $v(0, 0, 0, Array(a));
}
function dw(a, b) {
  this.W = a;
  this.Wd = b;
  this.F = 0;
  this.o = 2;
}
dw.prototype.T = function() {
  return this.W.length;
};
function ew(a) {
  return a.W.length === a.Wd;
}
dw.prototype.$b = function() {
  return this.W.pop();
};
dw.prototype.Tc = function(a, b) {
  aw(this.W, b);
  return this;
};
function fw(a) {
  return new dw(cw(a), a);
}
;var gw;
function hw() {
  var a = ba.MessageChannel;
  "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && (a = function() {
    var a = document.createElement("iframe");
    a.style.display = "none";
    a.src = "";
    document.documentElement.appendChild(a);
    var b = a.contentWindow, a = b.document;
    a.open();
    a.write("");
    a.close();
    var c = "callImmediate" + Math.random(), d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host, a = na(function(a) {
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
      var a = c.Fc;
      c.Fc = null;
      a();
    };
    return function(a) {
      d.next = {Fc:a};
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
    ba.setTimeout(a, 0);
  };
}
;var iw = cw(32), jw = !1, kw = !1;
function lw() {
  jw = !0;
  kw = !1;
  for (var a = 0;;) {
    var b = iw.pop();
    if (null != b && (b.v ? b.v() : b.call(null), 1024 > a)) {
      a += 1;
      continue;
    }
    break;
  }
  jw = !1;
  return 0 < iw.length ? mw.v ? mw.v() : mw.call(null) : null;
}
function mw() {
  var a = kw;
  if (q(q(a) ? jw : a)) {
    return null;
  }
  kw = !0;
  fa(ba.setImmediate) ? ba.setImmediate(lw) : (gw || (gw = hw()), gw(lw));
}
function nw(a) {
  aw(iw, a);
  mw();
}
function ow(a, b) {
  setTimeout(a, b);
}
;var pw, rw = function qw(b) {
  "undefined" === typeof pw && (pw = function(b, d, e) {
    this.t = b;
    this.rd = d;
    this.Ud = e;
    this.F = 0;
    this.o = 425984;
  }, pw.xb = !0, pw.wb = "cljs.core.async.impl.channels/t94966", pw.Nb = function(b, d) {
    return Ec(d, "cljs.core.async.impl.channels/t94966");
  }, pw.prototype.Fb = function() {
    return this.t;
  }, pw.prototype.L = function() {
    return this.Ud;
  }, pw.prototype.N = function(b, d) {
    return new pw(this.t, this.rd, d);
  });
  return new pw(b, qw, null);
};
function sw(a, b) {
  this.Za = a;
  this.t = b;
}
function tw(a) {
  return Vv(a.Za);
}
function uw(a) {
  if (a ? a.Sc : a) {
    return a.Sc();
  }
  var b;
  b = uw[n(null == a ? null : a)];
  if (!b && (b = uw._, !b)) {
    throw s("MMC.abort", a);
  }
  return b.call(null, a);
}
function vw(a, b, c, d, e, f, g) {
  this.sb = a;
  this.ec = b;
  this.jb = c;
  this.dc = d;
  this.W = e;
  this.closed = f;
  this.za = g;
}
vw.prototype.ac = function() {
  var a = this;
  if (!a.closed) {
    a.closed = !0;
    if (q(function() {
      var b = a.W;
      return q(b) ? 0 === a.jb.length : b;
    }())) {
      var b = a.W;
      a.za.g ? a.za.g(b) : a.za.call(null, b);
    }
    for (;;) {
      if (b = a.sb.pop(), null != b) {
        var c = b.f, d = q(function() {
          var b = a.W;
          return q(b) ? 0 < L(a.W) : b;
        }()) ? a.W.$b() : null;
        nw(function(a, b) {
          return function() {
            return a.g ? a.g(b) : a.call(null, b);
          };
        }(c, d, b, this));
      } else {
        break;
      }
    }
  }
  return null;
};
vw.prototype.Hd = function(a) {
  var b = this;
  if (null != b.W && 0 < L(b.W)) {
    a = a.f;
    for (var c = rw(b.W.$b());;) {
      if (!q(ew(b.W))) {
        var d = b.jb.pop();
        if (null != d) {
          var e = d.Za, f = d.t;
          nw(function(a) {
            return function() {
              return a.g ? a.g(!0) : a.call(null, !0);
            };
          }(e.f, e, f, d, a, c, this));
          $d(function() {
            var a = b.W, c = f;
            return b.za.h ? b.za.h(a, c) : b.za.call(null, a, c);
          }()) && uw(this);
          continue;
        }
      }
      break;
    }
    return c;
  }
  c = function() {
    for (;;) {
      var a = b.jb.pop();
      if (q(a)) {
        if (Vv(a.Za)) {
          return a;
        }
      } else {
        return null;
      }
    }
  }();
  if (q(c)) {
    return a = Wv(c.Za), nw(function(a) {
      return function() {
        return a.g ? a.g(!0) : a.call(null, !0);
      };
    }(a, c, this)), rw(c.t);
  }
  if (q(b.closed)) {
    return q(b.W) && (c = b.W, b.za.g ? b.za.g(c) : b.za.call(null, c)), q(q(!0) ? a.f : !0) ? (a = function() {
      var a = b.W;
      return q(a) ? 0 < L(b.W) : a;
    }(), a = q(a) ? b.W.$b() : null, rw(a)) : null;
  }
  64 < b.ec ? (b.ec = 0, bw(b.sb, Vv)) : b.ec += 1;
  if (!(1024 > b.sb.length)) {
    throw Error("Assert failed: " + u.g("No more than " + u.g(1024) + " pending takes are allowed on a single channel.") + "\n" + u.g(Jg.l(J([Nf(new Fd(null, "\x3c", "\x3c", 993667236, null), Nf(new Fd(null, ".-length", ".-length", -280799999, null), new Fd(null, "takes", "takes", 298247964, null)), new Fd("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", 1508600732, null))], 0))));
  }
  aw(b.sb, a);
  return null;
};
vw.prototype.qc = function(a, b, c) {
  var d = this;
  if (null == b) {
    throw Error("Assert failed: Can't put nil in on a channel\n" + u.g(Jg.l(J([Nf(new Fd(null, "not", "not", 1044554643, null), Nf(new Fd(null, "nil?", "nil?", 1612038930, null), new Fd(null, "val", "val", 1769233139, null)))], 0))));
  }
  if (a = d.closed) {
    return rw(!a);
  }
  if (q(function() {
    var a = d.W;
    return q(a) ? Ra(ew(d.W)) : a;
  }())) {
    for (c = $d(function() {
      var a = d.W;
      return d.za.h ? d.za.h(a, b) : d.za.call(null, a, b);
    }());;) {
      if (0 < d.sb.length && 0 < L(d.W)) {
        var e = d.sb.pop(), f = e.f, g = d.W.$b();
        nw(function(a, b) {
          return function() {
            return a.g ? a.g(b) : a.call(null, b);
          };
        }(f, g, e, c, a, this));
      }
      break;
    }
    c && uw(this);
    return rw(!0);
  }
  e = function() {
    for (;;) {
      var a = d.sb.pop();
      if (q(a)) {
        if (q(!0)) {
          return a;
        }
      } else {
        return null;
      }
    }
  }();
  if (q(e)) {
    return c = Wv(e), nw(function(a) {
      return function() {
        return a.g ? a.g(b) : a.call(null, b);
      };
    }(c, e, a, this)), rw(!0);
  }
  64 < d.dc ? (d.dc = 0, bw(d.jb, tw)) : d.dc += 1;
  if (!(1024 > d.jb.length)) {
    throw Error("Assert failed: " + u.g("No more than " + u.g(1024) + " pending puts are allowed on a single channel. Consider using a windowed buffer.") + "\n" + u.g(Jg.l(J([Nf(new Fd(null, "\x3c", "\x3c", 993667236, null), Nf(new Fd(null, ".-length", ".-length", -280799999, null), new Fd(null, "puts", "puts", -1883877054, null)), new Fd("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", 1508600732, null))], 0))));
  }
  aw(d.jb, new sw(c, b));
  return null;
};
vw.prototype.Sc = function() {
  for (;;) {
    var a = this.jb.pop();
    if (null != a) {
      var b = a.Za;
      nw(function(a) {
        return function() {
          return a.g ? a.g(!0) : a.call(null, !0);
        };
      }(b.f, b, a.t, a, this));
    }
    break;
  }
  bw(this.jb, zg());
  return Uv(this);
};
function ww(a) {
  console.log(a);
  return null;
}
function xw(a, b, c) {
  b = (q(b) ? b : ww).call(null, c);
  return null == b ? a : Yv.h(a, b);
}
var yw = function() {
  function a(a, b, c) {
    return new vw(cw(32), 0, cw(32), 0, a, !1, function() {
      return function(a) {
        return function() {
          function b(d, e) {
            try {
              return a.h ? a.h(d, e) : a.call(null, d, e);
            } catch (f) {
              return xw(d, c, f);
            }
          }
          function d(b) {
            try {
              return a.g ? a.g(b) : a.call(null, b);
            } catch (e) {
              return xw(b, c, e);
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
      }(q(b) ? b.g ? b.g(Yv) : b.call(null, Yv) : Yv);
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
var zw, Bw = function Aw(b) {
  "undefined" === typeof zw && (zw = function(b, d, e) {
    this.f = b;
    this.uc = d;
    this.Td = e;
    this.F = 0;
    this.o = 393216;
  }, zw.xb = !0, zw.wb = "cljs.core.async.impl.ioc-helpers/t94849", zw.Nb = function(b, d) {
    return Ec(d, "cljs.core.async.impl.ioc-helpers/t94849");
  }, zw.prototype.Uc = function() {
    return!0;
  }, zw.prototype.Vc = function() {
    return this.f;
  }, zw.prototype.L = function() {
    return this.Td;
  }, zw.prototype.N = function(b, d) {
    return new zw(this.f, this.uc, d);
  });
  return new zw(b, Aw, null);
};
function Cw(a) {
  try {
    return a[0].call(null, a);
  } catch (b) {
    throw b instanceof Object && a[6].ac(), b;
  }
}
function Dw(a, b, c) {
  c = c.Hd(Bw(function(c) {
    a[2] = c;
    a[1] = b;
    return Cw(a);
  }));
  return q(c) ? (a[2] = K.g ? K.g(c) : K.call(null, c), a[1] = b, X) : null;
}
function Ew(a, b) {
  var c = a[6];
  null != b && c.qc(0, b, Bw(function() {
    return function() {
      return null;
    };
  }(c)));
  c.ac();
  return c;
}
function Fw(a) {
  for (;;) {
    var b = a[4], c = Cn.g(b), d = aq.g(b), e = a[5];
    if (q(function() {
      var a = e;
      return q(a) ? Ra(b) : a;
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
      a[4] = Be.l(b, Cn, null, J([aq, null], 0));
      break;
    }
    if (q(function() {
      var a = e;
      return q(a) ? Ra(c) && Ra(Zm.g(b)) : a;
    }())) {
      a[4] = hq.g(b);
    } else {
      if (q(function() {
        var a = e;
        return q(a) ? (a = Ra(c)) ? Zm.g(b) : a : a;
      }())) {
        a[1] = Zm.g(b);
        a[4] = Be.j(b, Zm, null);
        break;
      }
      if (q(function() {
        var a = Ra(e);
        return a ? Zm.g(b) : a;
      }())) {
        a[1] = Zm.g(b);
        a[4] = Be.j(b, Zm, null);
        break;
      }
      if (Ra(e) && Ra(Zm.g(b))) {
        a[1] = iq.g(b);
        a[4] = hq.g(b);
        break;
      }
      throw Error("No matching clause");
    }
  }
}
;var Gw = function() {
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
  c.v = b;
  c.g = a;
  return c;
}();
function Hw(a, b, c) {
  this.key = a;
  this.t = b;
  this.forward = c;
  this.F = 0;
  this.o = 2155872256;
}
Hw.prototype.K = function(a, b, c) {
  return Mk(b, Sk, "[", " ", "]", c, this);
};
Hw.prototype.P = function() {
  return mb(mb(Hd, this.t), this.key);
};
var Iw = function() {
  function a(a, b, c) {
    c = Array(c + 1);
    for (var g = 0;;) {
      if (g < c.length) {
        c[g] = null, g += 1;
      } else {
        break;
      }
    }
    return new Hw(a, b, c);
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
}(), Jw = function() {
  function a(a, b, c, g) {
    for (;;) {
      if (0 > c) {
        return a;
      }
      a: {
        for (;;) {
          var k = a.forward[c];
          if (q(k)) {
            if (k.key < b) {
              a = k;
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
    return c.n(a, b, f, null);
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
  c.n = a;
  return c;
}();
function Kw(a, b) {
  this.pb = a;
  this.Ca = b;
  this.F = 0;
  this.o = 2155872256;
}
Kw.prototype.K = function(a, b, c) {
  return Mk(b, function() {
    return function(a) {
      return Mk(b, Sk, "", " ", "", c, a);
    };
  }(this), "{", ", ", "}", c, this);
};
Kw.prototype.P = function() {
  return function(a) {
    return function c(d) {
      return new Sf(null, function() {
        return function() {
          return null == d ? null : he(new Q(null, 2, 5, R, [d.key, d.t], null), c(d.forward[0]));
        };
      }(a), null, null);
    };
  }(this)(this.pb.forward[0]);
};
Kw.prototype.put = function(a, b) {
  var c = Array(15), d = Jw.n(this.pb, a, this.Ca, c).forward[0];
  if (null != d && d.key === a) {
    return d.t = b;
  }
  d = Gw.v();
  if (d > this.Ca) {
    for (var e = this.Ca + 1;;) {
      if (e <= d + 1) {
        c[e] = this.pb, e += 1;
      } else {
        break;
      }
    }
    this.Ca = d;
  }
  for (d = Iw.j(a, b, Array(d));;) {
    return 0 <= this.Ca ? (c = c[0].forward, d.forward[0] = c[0], c[0] = d) : null;
  }
};
Kw.prototype.remove = function(a) {
  var b = Array(15), c = Jw.n(this.pb, a, this.Ca, b).forward[0];
  if (null != c && c.key === a) {
    for (a = 0;;) {
      if (a <= this.Ca) {
        var d = b[a].forward;
        d[a] === c && (d[a] = c.forward[a]);
        a += 1;
      } else {
        break;
      }
    }
    for (;;) {
      if (0 < this.Ca && null == this.pb.forward[this.Ca]) {
        this.Ca -= 1;
      } else {
        return null;
      }
    }
  } else {
    return null;
  }
};
function Lw(a) {
  for (var b = Mw, c = b.pb, d = b.Ca;;) {
    if (0 > d) {
      return c === b.pb ? null : c;
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
var Mw = new Kw(Iw.g(0), 0);
function Nw(a) {
  var b = (new Date).valueOf() + a, c = Lw(b), d = q(q(c) ? c.key < b + 10 : c) ? c.t : null;
  if (q(d)) {
    return d;
  }
  var e = yw.g(null);
  Mw.put(b, e);
  ow(function(a, b, c) {
    return function() {
      Mw.remove(c);
      return Uv(a);
    };
  }(e, d, b, c), a);
  return e;
}
;var Pw = function Ow(b) {
  "undefined" === typeof Rv && (Rv = function(b, d, e) {
    this.f = b;
    this.uc = d;
    this.Rd = e;
    this.F = 0;
    this.o = 393216;
  }, Rv.xb = !0, Rv.wb = "cljs.core.async/t91443", Rv.Nb = function(b, d) {
    return Ec(d, "cljs.core.async/t91443");
  }, Rv.prototype.Uc = function() {
    return!0;
  }, Rv.prototype.Vc = function() {
    return this.f;
  }, Rv.prototype.L = function() {
    return this.Rd;
  }, Rv.prototype.N = function(b, d) {
    return new Rv(this.f, this.uc, d);
  });
  return new Rv(b, Ow, null);
}, Qw = function() {
  function a(a, b, c) {
    a = x.h(a, 0) ? null : a;
    if (q(b) && !q(a)) {
      throw Error("Assert failed: buffer must be supplied when transducer is\n" + u.g(Jg.l(J([new Fd(null, "buf-or-n", "buf-or-n", -1646815050, null)], 0))));
    }
    return yw.j("number" === typeof a ? fw(a) : a, b, c);
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
  var e = null, e = function(e, g, k) {
    switch(arguments.length) {
      case 0:
        return d.call(this);
      case 1:
        return c.call(this, e);
      case 2:
        return b.call(this, e, g);
      case 3:
        return a.call(this, e, g, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.v = d;
  e.g = c;
  e.h = b;
  e.j = a;
  return e;
}(), Rw = Pw(function() {
  return null;
}), Sw = function() {
  function a(a, b, c, d) {
    a = Tv(a, b, Pw(c));
    return q(a) ? (b = K.g ? K.g(a) : K.call(null, a), q(d) ? c.g ? c.g(b) : c.call(null, b) : nw(function(a) {
      return function() {
        return c.g ? c.g(a) : c.call(null, a);
      };
    }(b, a, a)), b) : !0;
  }
  function b(a, b, c) {
    return d.n(a, b, c, !0);
  }
  function c(a, b) {
    var c = Tv(a, b, Rw);
    return q(c) ? K.g ? K.g(c) : K.call(null, c) : !0;
  }
  var d = null, d = function(d, f, g, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, g);
      case 4:
        return a.call(this, d, f, g, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.h = c;
  d.j = b;
  d.n = a;
  return d;
}();
function Tw(a, b, c) {
  if (a ? a.Qc : a) {
    return a.Qc(a, b, c);
  }
  var d;
  d = Tw[n(null == a ? null : a)];
  if (!d && (d = Tw._, !d)) {
    throw s("Mult.tap*", a);
  }
  return d.call(null, a, b, c);
}
var Uw = function() {
  function a(a, b, c) {
    Tw(a, b, c);
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
function Vw(a, b) {
  var c = Array.prototype.slice.call(arguments), d = c.shift();
  if ("undefined" == typeof d) {
    throw Error("[goog.string.format] Template required");
  }
  return d.replace(/%([0\-\ \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(a, b, d, k, l, m, p, t) {
    if ("%" == m) {
      return "%";
    }
    var r = c.shift();
    if ("undefined" == typeof r) {
      throw Error("[goog.string.format] Not enough arguments");
    }
    arguments[0] = r;
    return Ww[m].apply(null, arguments);
  });
}
var Ww = {s:function(a, b, c) {
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
}, d:function(a, b, c, d, e, f, g, k) {
  return Ww.f(parseInt(a, 10), b, c, d, 0, f, g, k);
}};
Ww.i = Ww.d;
Ww.u = Ww.d;
function Xw(a) {
  return a.getContext(Qf("2d"));
}
function Yw(a) {
  a.beginPath();
}
function Zw(a) {
  a.stroke();
}
function $w(a, b) {
  var c = Ze(b) ? Fe.h(Fg, b) : b, d = O.h(c, Tp), e = O.h(c, en), f = O.h(c, um), c = O.h(c, tq);
  a.clearRect(c, f, e, d);
}
function ax(a, b) {
  var c = Ze(b) ? Fe.h(Fg, b) : b, d = O.h(c, Tp), e = O.h(c, en), f = O.h(c, um), c = O.h(c, tq);
  a.strokeRect(c, f, e, d);
}
function bx(a, b) {
  var c = Ze(b) ? Fe.h(Fg, b) : b, d = O.h(c, Tp), e = O.h(c, en), f = O.h(c, um), c = O.h(c, tq);
  a.fillRect(c, f, e, d);
}
function cx(a, b) {
  var c = Ze(b) ? Fe.h(Fg, b) : b, d = O.h(c, um), e = O.h(c, tq), c = O.h(c, Yq);
  a.fillText(c, e, d);
}
function dx(a, b) {
  a.fillStyle = Qf(b);
}
function ex(a, b) {
  a.strokeStyle = Qf(b);
}
function fx(a, b, c) {
  a.moveTo(b, c);
}
function gx(a, b, c) {
  a.lineTo(b, c);
}
function Y(a, b) {
  a.globalAlpha = b;
  return a;
}
var hx = function() {
  function a(a, b, c, g) {
    a.drawImage(b, c, g);
    return a;
  }
  function b(a, b, c) {
    var g = Ze(c) ? Fe.h(Fg, c) : c;
    c = O.h(g, xq);
    var k = O.h(g, zq), l = O.h(g, tq), m = O.h(g, um), p = O.h(g, Em), t = O.h(g, Hm), r = O.h(g, en), y = O.h(g, gn), B = O.h(g, un), C = O.h(g, Tp), F = O.h(g, lq), I = O.h(g, pq), g = L(g);
    if (q(x.h ? x.h(2, g) : x.call(null, 2, g))) {
      a.drawImage(b, l, m);
    } else {
      if (q(x.h ? x.h(4, g) : x.call(null, 4, g))) {
        a.drawImage(b, l, m, r, C);
      } else {
        if (q(x.h ? x.h(8, g) : x.call(null, 8, g))) {
          a.drawImage(b, I, y, k, c, t, B, F, p);
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
  c.n = a;
  return c;
}(), ix = function() {
  function a(a, b, c, g, k, l, m) {
    a.bezierCurveTo(b, c, g, k, l, m);
    return a;
  }
  function b(a, b) {
    var c = Ze(b) ? Fe.h(Fg, b) : b, g = O.h(c, um), k = O.h(c, tq), l = O.h(c, Bq), m = O.h(c, Qp), p = O.h(c, jq), c = O.h(c, Lp);
    a.bezierCurveTo(c, p, m, l, k, g);
    return a;
  }
  var c = null, c = function(c, e, f, g, k, l, m) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 7:
        return a.call(this, c, e, f, g, k, l, m);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.h = b;
  c.va = a;
  return c;
}();
function jx(a) {
  if (a ? a.ad : a) {
    return a.ad();
  }
  var b;
  b = jx[n(null == a ? null : a)];
  if (!b && (b = jx._, !b)) {
    throw s("PArrayLayout.layout-bounds", a);
  }
  return b.call(null, a);
}
function kx(a, b) {
  if (a ? a.dd : a) {
    return a.dd();
  }
  var c;
  c = kx[n(null == a ? null : a)];
  if (!c && (c = kx._, !c)) {
    throw s("PArrayLayout.origin-px-topleft", a);
  }
  return c.call(null, a, b);
}
function lx(a, b) {
  if (a ? a.bd : a) {
    return a.bd(0, b);
  }
  var c;
  c = lx[n(null == a ? null : a)];
  if (!c && (c = lx._, !c)) {
    throw s("PArrayLayout.local-px-topleft", a);
  }
  return c.call(null, a, b);
}
function mx(a) {
  if (a ? a.Yc : a) {
    return a.Yc();
  }
  var b;
  b = mx[n(null == a ? null : a)];
  if (!b && (b = mx._, !b)) {
    throw s("PArrayLayout.element-size-px", a);
  }
  return b.call(null, a);
}
function nx(a) {
  if (a ? a.cd : a) {
    return a.cd();
  }
  var b;
  b = nx[n(null == a ? null : a)];
  if (!b && (b = nx._, !b)) {
    throw s("PArrayLayout.n-onscreen", a);
  }
  return b.call(null, a);
}
function ox(a) {
  if (a ? a.Ld : a) {
    return a.ia;
  }
  var b;
  b = ox[n(null == a ? null : a)];
  if (!b && (b = ox._, !b)) {
    throw s("PArrayLayout.top-id-onscreen", a);
  }
  return b.call(null, a);
}
function px(a, b, c) {
  if (a ? a.Xc : a) {
    return a.Xc(0, b, c);
  }
  var d;
  d = px[n(null == a ? null : a)];
  if (!d && (d = px._, !d)) {
    throw s("PArrayLayout.draw-element", a);
  }
  return d.call(null, a, b, c);
}
function qx(a, b, c) {
  if (a ? a.Zc : a) {
    return a.Zc(0, b, c);
  }
  var d;
  d = qx[n(null == a ? null : a)];
  if (!d && (d = qx._, !d)) {
    throw s("PArrayLayout.highlight-dt", a);
  }
  return d.call(null, a, b, c);
}
function rx(a, b, c, d) {
  if (a ? a.$c : a) {
    return a.$c(0, b, c, d);
  }
  var e;
  e = rx[n(null == a ? null : a)];
  if (!e && (e = rx._, !e)) {
    throw s("PArrayLayout.highlight-element", a);
  }
  return e.call(null, a, b, c, d);
}
function sx(a) {
  a = jx(a);
  return tq.g(a) + en.g(a);
}
function tx(a, b, c) {
  var d = mx(a), e = M.j(d, 0, null), d = M.j(d, 1, null), f = kx(a, c);
  c = M.j(f, 0, null);
  f = M.j(f, 1, null);
  b = lx(a, b);
  a = M.j(b, 0, null);
  b = M.j(b, 1, null);
  return new Q(null, 2, 5, R, [c + a + .5 * e, f + b + .5 * d], null);
}
function ux(a, b, c) {
  var d = ox(b), e = d + nx(b) + -1, f = 1 === L(sv(Vm.g(b)));
  Yw(a);
  c = z(c);
  for (var g = null, k = 0, l = 0;;) {
    if (l < k) {
      var m = g.B(null, l);
      d <= m && m <= e && (px(b, a, m), f || (a.fill(), Yw(a)));
      l += 1;
    } else {
      if (c = z(c)) {
        g = c, P(g) ? (c = v(g), l = w(g), g = c, k = L(c), c = l) : (c = A(g), d <= c && c <= e && (px(b, a, c), f || (a.fill(), Yw(a))), c = E(g), g = null, k = 0), l = 0;
      } else {
        break;
      }
    }
  }
  f && a.fill();
}
function vx(a, b, c) {
  a.save();
  c = z(Xk(c, uk(c)));
  for (var d = null, e = 0, f = 0;;) {
    if (f < e) {
      var g = d.B(null, f), k = M.j(g, 0, null), g = M.j(g, 1, null), l = a;
      Y.h ? Y.h(l, k) : Y.call(null, l, k);
      ux(a, b, g);
      a.fill();
      f += 1;
    } else {
      if (c = z(c)) {
        P(c) ? (e = v(c), c = w(c), d = e, e = L(e)) : (e = A(c), d = M.j(e, 0, null), e = M.j(e, 1, null), f = a, Y.h ? Y.h(f, d) : Y.call(null, f, d), ux(a, b, e), a.fill(), c = E(c), d = null, e = 0), f = 0;
      } else {
        break;
      }
    }
  }
  a.restore();
}
function wx(a, b, c, d) {
  return new Ka(null, 4, [tq, a - c / 2, um, b - d / 2, en, c, Tp, d], null);
}
function xx(a, b, c) {
  ex(a, c);
  a.lineWidth = 3;
  ax(a, b);
  ex(a, "black");
  a.lineWidth = 1;
  ax(a, b);
  return a;
}
function yx(a, b, c, d, e, f, g, k, l, m, p, t) {
  this.la = a;
  this.ia = b;
  this.ea = c;
  this.da = d;
  this.ja = e;
  this.ra = f;
  this.ka = g;
  this.pa = k;
  this.ua = l;
  this.qa = m;
  this.H = p;
  this.G = t;
  this.o = 2229667594;
  this.F = 8192;
  10 < arguments.length ? (this.H = p, this.G = t) : this.G = this.H = null;
}
h = yx.prototype;
h.J = function(a, b) {
  return wb.j(this, b, null);
};
h.I = function(a, b, c) {
  switch(b instanceof U ? b.na : null) {
    case "scroll-top":
      return this.ia;
    case "topo":
      return this.la;
    case "element-h":
      return this.da;
    case "shrink":
      return this.ja;
    case "height-px":
      return this.pa;
    case "top-px":
      return this.ka;
    case "left-px":
      return this.ra;
    case "circles?":
      return this.ua;
    case "highlight-color":
      return this.qa;
    case "element-w":
      return this.ea;
    default:
      return O.j(this.G, b, c);
  }
};
h.K = function(a, b, c) {
  return Mk(b, function() {
    return function(a) {
      return Mk(b, Sk, "", " ", "", c, a);
    };
  }(this), "#comportexviz.viz-layouts.Grid2dLayout{", ", ", "}", c, dg.h(new Q(null, 10, 5, R, [new Q(null, 2, 5, R, [Vm, this.la], null), new Q(null, 2, 5, R, [Km, this.ia], null), new Q(null, 2, 5, R, [Zq, this.ea], null), new Q(null, 2, 5, R, [hn, this.da], null), new Q(null, 2, 5, R, [wn, this.ja], null), new Q(null, 2, 5, R, [gq, this.ra], null), new Q(null, 2, 5, R, [dq, this.ka], null), new Q(null, 2, 5, R, [Pp, this.pa], null), new Q(null, 2, 5, R, [Eq, this.ua], null), new Q(null, 2, 5, 
  R, [Iq, this.qa], null)], null), this.G));
};
h.L = function() {
  return this.H;
};
h.T = function() {
  return 10 + L(this.G);
};
h.cd = function() {
  var a = sv(this.la), b = M.j(a, 0, null), a = M.j(a, 1, null), c = (this.pa - this.ka) / this.da;
  return b * (a < c ? a : c);
};
h.Zc = function(a, b, c) {
  c = kx(this, c);
  a = M.j(c, 0, null);
  c = M.j(c, 1, null);
  var d = jx(this);
  return xx(b, new Ka(null, 4, [tq, a - 5, um, c - 5, en, 10 + en.g(d), Tp, 10 + Tp.g(d)], null), this.qa);
};
h.Yc = function() {
  return new Q(null, 2, 5, R, [this.ea, this.da], null);
};
h.Xc = function(a, b, c) {
  c = lx(this, c);
  a = M.j(c, 0, null);
  c = M.j(c, 1, null);
  if (q(this.ua)) {
    var d = this.ea * this.ja * .5;
    b = b.arc(a + d, c + d, d, 0, 2 * Math.PI, !0);
  } else {
    b = b.rect(a, c, this.ea * this.ja, this.da * this.ja);
  }
  return b;
};
h.Ld = function() {
  return this.ia;
};
h.dd = function() {
  return new Q(null, 2, 5, R, [this.ra, this.ka], null);
};
h.bd = function(a, b) {
  var c = tv(this.la, b + this.ia), d = M.j(c, 0, null), c = M.j(c, 1, null);
  return new Q(null, 2, 5, R, [d * this.ea, c * this.da], null);
};
h.$c = function(a, b, c, d) {
  c = kx(this, c);
  a = M.j(c, 0, null);
  c = M.j(c, 1, null);
  var e = lx(this, d);
  d = M.j(e, 0, null);
  e = M.j(e, 1, null);
  jx(this);
  return xx(b, new Ka(null, 4, [tq, a + d, um, c + e, en, this.ea + 1, Tp, this.da + 1], null), this.qa);
};
h.ad = function() {
  var a = sv(this.la), b = M.j(a, 0, null), c = M.j(a, 1, null), a = this.pa, c = c * this.da;
  return new Ka(null, 4, [tq, this.ra, um, this.ka, en, b * this.ea, Tp, a < c ? a : c], null);
};
h.O = function() {
  var a = this.A;
  return null != a ? a : this.A = a = wf(this);
};
h.M = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && Nh(this, b) : b) ? !0 : !1;
};
h.eb = function(a, b) {
  return af(new zk(null, new Ka(null, 10, [Km, null, Vm, null, hn, null, wn, null, Pp, null, dq, null, gq, null, Eq, null, Iq, null, Zq, null], null), null), b) ? Ce.h(je(Xg.h(Sh, this), this.H), b) : new yx(this.la, this.ia, this.ea, this.da, this.ja, this.ra, this.ka, this.pa, this.ua, this.qa, this.H, kg(Ce.h(this.G, b)), null);
};
h.Aa = function(a, b, c) {
  return q(Pf.h ? Pf.h(Vm, b) : Pf.call(null, Vm, b)) ? new yx(c, this.ia, this.ea, this.da, this.ja, this.ra, this.ka, this.pa, this.ua, this.qa, this.H, this.G, null) : q(Pf.h ? Pf.h(Km, b) : Pf.call(null, Km, b)) ? new yx(this.la, c, this.ea, this.da, this.ja, this.ra, this.ka, this.pa, this.ua, this.qa, this.H, this.G, null) : q(Pf.h ? Pf.h(Zq, b) : Pf.call(null, Zq, b)) ? new yx(this.la, this.ia, c, this.da, this.ja, this.ra, this.ka, this.pa, this.ua, this.qa, this.H, this.G, null) : q(Pf.h ? 
  Pf.h(hn, b) : Pf.call(null, hn, b)) ? new yx(this.la, this.ia, this.ea, c, this.ja, this.ra, this.ka, this.pa, this.ua, this.qa, this.H, this.G, null) : q(Pf.h ? Pf.h(wn, b) : Pf.call(null, wn, b)) ? new yx(this.la, this.ia, this.ea, this.da, c, this.ra, this.ka, this.pa, this.ua, this.qa, this.H, this.G, null) : q(Pf.h ? Pf.h(gq, b) : Pf.call(null, gq, b)) ? new yx(this.la, this.ia, this.ea, this.da, this.ja, c, this.ka, this.pa, this.ua, this.qa, this.H, this.G, null) : q(Pf.h ? Pf.h(dq, b) : 
  Pf.call(null, dq, b)) ? new yx(this.la, this.ia, this.ea, this.da, this.ja, this.ra, c, this.pa, this.ua, this.qa, this.H, this.G, null) : q(Pf.h ? Pf.h(Pp, b) : Pf.call(null, Pp, b)) ? new yx(this.la, this.ia, this.ea, this.da, this.ja, this.ra, this.ka, c, this.ua, this.qa, this.H, this.G, null) : q(Pf.h ? Pf.h(Eq, b) : Pf.call(null, Eq, b)) ? new yx(this.la, this.ia, this.ea, this.da, this.ja, this.ra, this.ka, this.pa, c, this.qa, this.H, this.G, null) : q(Pf.h ? Pf.h(Iq, b) : Pf.call(null, 
  Iq, b)) ? new yx(this.la, this.ia, this.ea, this.da, this.ja, this.ra, this.ka, this.pa, this.ua, c, this.H, this.G, null) : new yx(this.la, this.ia, this.ea, this.da, this.ja, this.ra, this.ka, this.pa, this.ua, this.qa, this.H, Be.j(this.G, b, c), null);
};
h.P = function() {
  return z(dg.h(new Q(null, 10, 5, R, [new Q(null, 2, 5, R, [Vm, this.la], null), new Q(null, 2, 5, R, [Km, this.ia], null), new Q(null, 2, 5, R, [Zq, this.ea], null), new Q(null, 2, 5, R, [hn, this.da], null), new Q(null, 2, 5, R, [wn, this.ja], null), new Q(null, 2, 5, R, [gq, this.ra], null), new Q(null, 2, 5, R, [dq, this.ka], null), new Q(null, 2, 5, R, [Pp, this.pa], null), new Q(null, 2, 5, R, [Eq, this.ua], null), new Q(null, 2, 5, R, [Iq, this.qa], null)], null), this.G));
};
h.N = function(a, b) {
  return new yx(this.la, this.ia, this.ea, this.da, this.ja, this.ra, this.ka, this.pa, this.ua, this.qa, b, this.G, this.A);
};
h.R = function(a, b) {
  return Ue(b) ? Ab(this, ob.h(b, 0), ob.h(b, 1)) : Xa.j(mb, this, b);
};
var zx, Ax = function() {
  function a(a, b, c, g) {
    var k = a instanceof U ? function() {
      switch(a instanceof U ? a.na : null) {
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
    return "hsla(" + u.g(k) + "," + u.g(qf(100 * b)) + "%," + u.g(qf(100 * c)) + "%," + u.g(g) + ")";
  }
  function b(a, b, f) {
    return c.n(a, b, f, 1);
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
  c.n = a;
  return c;
}(), Z = pe([tm, Mm, Qm, Xm, sn, Jp, Vp, vq, Gq], ["white", Ax.n(mn, 1, .5, .4), "white", Ax.n(Wm, 1, .75, .5), "white", Ax.j(Dq, 1, .4), Ax.j(Zp, 1, .5), Ax.n($p, 1, .5, .5), "black"]), Bx, Cx = new Ka(null, 5, [Aq, new Ka(null, 2, [Vp, !0, vq, !0], null), dn, new Ka(null, 6, [Vp, !0, Yp, null, Bm, null, xn, !0, Mm, !0, Lm, 0], null), zm, new Ka(null, 4, [Vp, null, tm, null, Qm, null, Nq, null], null), Tm, new Ka(null, 5, [Up, Ap, Vp, !0, tm, null, Qm, null, Nq, null], null), oq, pe([wm, Jm, Ym, 
$m, an, yn, Pn, cq, uq, Iq, Rq, Sq, Wq], [30, 50, 10, 60, .85, 25, 3, 150, 3, Xm.g(Z), 5, .85, 10])], null);
Bx = Hg.g ? Hg.g(Cx) : Hg.call(null, Cx);
Hg.g ? Hg.g(25) : Hg.call(null, 25);
var Dx = Hg.g ? Hg.g(me) : Hg.call(null, me), Ex = Hg.g ? Hg.g(null) : Hg.call(null, null);
function Fx(a, b, c, d) {
  c = kx(b, c);
  b = M.j(c, 0, null);
  c = M.j(c, 1, null);
  hx.n(a, d, b, c);
}
function Gx(a, b, c, d, e, f, g, k) {
  a.save();
  a.lineWidth = 1;
  Y(a, 1);
  for (var l = En.g(b), m = q(f) ? new Q(null, 1, 5, R, [f], null) : dv(b), p = Yu(d, 0), t = Zu(d, 0), r = Zg.h(k, new Q(null, 2, 5, R, [zm, tm], null)), y = Zg.h(k, new Q(null, 2, 5, R, [zm, Qm], null)), B = Zg.h(k, new Q(null, 2, 5, R, [zm, Nq], null)), C = z(m), F = null, I = 0, N = 0;;) {
    if (N < I) {
      for (var H = F.B(null, N), V = z(dg.l(q(y) ? new Q(null, 1, 5, R, [Qm], null) : null, q(r) ? new Q(null, 1, 5, R, [Gq], null) : null, J([new Q(null, 2, 5, R, [Vp, Jp], null)], 0))), T = null, G = 0, qa = 0;;) {
        if (qa < G) {
          var S = T.B(null, qa), ea = kv(l, H), ka = xk(ea, lv(l, H)), Da = function() {
            switch(S instanceof U ? S.na : null) {
              case "disconnected":
                return Fe.j(Ce, ea, uk(ka));
              case "inactive-syn":
                return Fe.j(Ce, ka, p);
              case "active-predicted":
                return xk(ka, t);
              case "active":
                return xk(ka, p);
              default:
                throw Error("No matching clause: " + u.g(S));;
            }
          }(), la = tx(c, H, g), Oa = M.j(la, 0, null), ta = M.j(la, 1, null);
          ex(a, function() {
            var a = S;
            return Z.g ? Z.g(a) : Z.call(null, a);
          }());
          for (var ua = z(Da), Ta = null, va = 0, Ga = 0;;) {
            if (Ga < va) {
              var ib = Ta.B(null, Ga), rb = M.j(ib, 0, null), Eb = M.j(ib, 1, null), Ha = $u(d, rb), eb = M.j(Ha, 0, null);
              M.j(Ha, 1, null);
              var ab = tx(e, eb, g), $ = M.j(ab, 0, null), hc = M.j(ab, 1, null), yb = a;
              Y(yb, q(B) ? Eb : 1);
              Yw(yb);
              yb.moveTo(Oa - 1, ta);
              yb.lineTo($ + 1, hc);
              Zw(yb);
              Ga += 1;
            } else {
              var Fb = z(ua);
              if (Fb) {
                var Xb = Fb;
                if (P(Xb)) {
                  var xc = v(Xb), W = w(Xb), nd = xc, Ld = L(xc), ua = W, Ta = nd, va = Ld
                } else {
                  var od = A(Xb), Wc = M.j(od, 0, null), Md = M.j(od, 1, null), Ib = $u(d, Wc), Jb = M.j(Ib, 0, null);
                  M.j(Ib, 1, null);
                  var nc = tx(e, Jb, g), Kb = M.j(nc, 0, null), oc = M.j(nc, 1, null), pc = a;
                  Y(pc, q(B) ? Md : 1);
                  Yw(pc);
                  pc.moveTo(Oa - 1, ta);
                  pc.lineTo(Kb + 1, oc);
                  Zw(pc);
                  ua = E(Xb);
                  Ta = null;
                  va = 0;
                }
                Ga = 0;
              } else {
                break;
              }
            }
          }
          qa += 1;
        } else {
          var Xc = z(V);
          if (Xc) {
            var pd = Xc;
            if (P(pd)) {
              var yf = v(pd), zf = w(pd), Nd = yf, qc = L(yf), V = zf, T = Nd, G = qc
            } else {
              var cb = A(pd), Bb = kv(l, H), kb = xk(Bb, lv(l, H)), rc = function() {
                switch(cb instanceof U ? cb.na : null) {
                  case "disconnected":
                    return Fe.j(Ce, Bb, uk(kb));
                  case "inactive-syn":
                    return Fe.j(Ce, kb, p);
                  case "active-predicted":
                    return xk(kb, t);
                  case "active":
                    return xk(kb, p);
                  default:
                    throw Error("No matching clause: " + u.g(cb));;
                }
              }(), Yb = tx(c, H, g), Rb = M.j(Yb, 0, null), Od = M.j(Yb, 1, null);
              ex(a, function() {
                var a = cb;
                return Z.g ? Z.g(a) : Z.call(null, a);
              }());
              for (var qd = z(rc), Ic = null, sa = 0, Zb = 0;;) {
                if (Zb < sa) {
                  var Yc = Ic.B(null, Zb), rd = M.j(Yc, 0, null), Jc = M.j(Yc, 1, null), yc = $u(d, rd), aa = M.j(yc, 0, null);
                  M.j(yc, 1, null);
                  var Pd = tx(e, aa, g), qe = M.j(Pd, 0, null), Qd = M.j(Pd, 1, null), Lb = a;
                  Y(Lb, q(B) ? Jc : 1);
                  Yw(Lb);
                  Lb.moveTo(Rb - 1, Od);
                  Lb.lineTo(qe + 1, Qd);
                  Zw(Lb);
                  Zb += 1;
                } else {
                  var $b = z(qd);
                  if ($b) {
                    var lb = $b;
                    if (P(lb)) {
                      var vb = v(lb), Kc = w(lb), sd = vb, re = L(vb), qd = Kc, Ic = sd, sa = re
                    } else {
                      var zc = A(lb), ja = M.j(zc, 0, null), Ie = M.j(zc, 1, null), Sb = $u(d, ja), ac = M.j(Sb, 0, null);
                      M.j(Sb, 1, null);
                      var Lc = tx(e, ac, g), bc = M.j(Lc, 0, null), Tb = M.j(Lc, 1, null), cc = a;
                      Y(cc, q(B) ? Ie : 1);
                      Yw(cc);
                      cc.moveTo(Rb - 1, Od);
                      cc.lineTo(bc + 1, Tb);
                      Zw(cc);
                      qd = E(lb);
                      Ic = null;
                      sa = 0;
                    }
                    Zb = 0;
                  } else {
                    break;
                  }
                }
              }
              V = E(pd);
              T = null;
              G = 0;
            }
            qa = 0;
          } else {
            break;
          }
        }
      }
      N += 1;
    } else {
      var Je = z(C);
      if (Je) {
        var Mc = Je;
        if (P(Mc)) {
          var td = v(Mc), se = w(Mc), Zc = td, sc = L(td), C = se, F = Zc, I = sc
        } else {
          for (var Ac = A(Mc), Cb = z(dg.l(q(y) ? new Q(null, 1, 5, R, [Qm], null) : null, q(r) ? new Q(null, 1, 5, R, [Gq], null) : null, J([new Q(null, 2, 5, R, [Vp, Jp], null)], 0))), Nc = null, te = 0, ud = 0;;) {
            if (ud < te) {
              var vd = Nc.B(null, ud), ue = kv(l, Ac), wd = xk(ue, lv(l, Ac)), Rd = function() {
                switch(vd instanceof U ? vd.na : null) {
                  case "disconnected":
                    return Fe.j(Ce, ue, uk(wd));
                  case "inactive-syn":
                    return Fe.j(Ce, wd, p);
                  case "active-predicted":
                    return xk(wd, t);
                  case "active":
                    return xk(wd, p);
                  default:
                    throw Error("No matching clause: " + u.g(vd));;
                }
              }(), dc = tx(c, Ac, g), Oc = M.j(dc, 0, null), Bc = M.j(dc, 1, null);
              ex(a, function() {
                var a = vd;
                return Z.g ? Z.g(a) : Z.call(null, a);
              }());
              for (var ec = z(Rd), Sd = null, $c = 0, xd = 0;;) {
                if (xd < $c) {
                  var Ke = Sd.B(null, xd), Le = M.j(Ke, 0, null), ve = M.j(Ke, 1, null), yd = $u(d, Le), we = M.j(yd, 0, null);
                  M.j(yd, 1, null);
                  var mg = tx(e, we, g), jh = M.j(mg, 0, null), ki = M.j(mg, 1, null), Pc = a;
                  Y(Pc, q(B) ? ve : 1);
                  Yw(Pc);
                  Pc.moveTo(Oc - 1, Bc);
                  Pc.lineTo(jh + 1, ki);
                  Zw(Pc);
                  xd += 1;
                } else {
                  var ng = z(ec);
                  if (ng) {
                    var Me = ng;
                    if (P(Me)) {
                      var kh = v(Me), Ne = w(Me), lh = kh, Oe = L(kh), ec = Ne, Sd = lh, $c = Oe
                    } else {
                      var og = A(Me), li = M.j(og, 0, null), Ja = M.j(og, 1, null), Zk = $u(d, li), $k = M.j(Zk, 0, null);
                      M.j(Zk, 1, null);
                      var mi = tx(e, $k, g), Qn = M.j(mi, 0, null), Rn = M.j(mi, 1, null), Af = a;
                      Y(Af, q(B) ? Ja : 1);
                      Yw(Af);
                      Af.moveTo(Oc - 1, Bc);
                      Af.lineTo(Qn + 1, Rn);
                      Zw(Af);
                      ec = E(Me);
                      Sd = null;
                      $c = 0;
                    }
                    xd = 0;
                  } else {
                    break;
                  }
                }
              }
              ud += 1;
            } else {
              var al = z(Cb);
              if (al) {
                var pg = al;
                if (P(pg)) {
                  var Bf = v(pg), bl = w(pg), qg = Bf, cl = L(Bf), Cb = bl, Nc = qg, te = cl
                } else {
                  var mh = A(pg), dl = kv(l, Ac), nh = xk(dl, lv(l, Ac)), Sn = function() {
                    switch(mh instanceof U ? mh.na : null) {
                      case "disconnected":
                        return Fe.j(Ce, dl, uk(nh));
                      case "inactive-syn":
                        return Fe.j(Ce, nh, p);
                      case "active-predicted":
                        return xk(nh, t);
                      case "active":
                        return xk(nh, p);
                      default:
                        throw Error("No matching clause: " + u.g(mh));;
                    }
                  }(), el = tx(c, Ac, g), oh = M.j(el, 0, null), ph = M.j(el, 1, null);
                  ex(a, function() {
                    var a = mh;
                    return Z.g ? Z.g(a) : Z.call(null, a);
                  }());
                  for (var rg = z(Sn), Pe = null, qh = 0, Cf = 0;;) {
                    if (Cf < qh) {
                      var fl = Pe.B(null, Cf), Tn = M.j(fl, 0, null), gl = M.j(fl, 1, null), hl = $u(d, Tn), Un = M.j(hl, 0, null);
                      M.j(hl, 1, null);
                      var Df = tx(e, Un, g), il = M.j(Df, 0, null), sg = M.j(Df, 1, null), Ef = a;
                      Y(Ef, q(B) ? gl : 1);
                      Yw(Ef);
                      Ef.moveTo(oh - 1, ph);
                      Ef.lineTo(il + 1, sg);
                      Zw(Ef);
                      Cf += 1;
                    } else {
                      var jl = z(rg);
                      if (jl) {
                        var tg = jl;
                        if (P(tg)) {
                          var kl = v(tg), ll = w(tg), ml = kl, Vn = L(kl), rg = ll, Pe = ml, qh = Vn
                        } else {
                          var nl = A(tg), ol = M.j(nl, 0, null), rh = M.j(nl, 1, null), pl = $u(d, ol), ug = M.j(pl, 0, null);
                          M.j(pl, 1, null);
                          var ni = tx(e, ug, g), vg = M.j(ni, 0, null), ql = M.j(ni, 1, null), wg = a;
                          Y(wg, q(B) ? rh : 1);
                          Yw(wg);
                          wg.moveTo(oh - 1, ph);
                          wg.lineTo(vg + 1, ql);
                          Zw(wg);
                          rg = E(tg);
                          Pe = null;
                          qh = 0;
                        }
                        Cf = 0;
                      } else {
                        break;
                      }
                    }
                  }
                  Cb = E(pg);
                  Nc = null;
                  te = 0;
                }
                ud = 0;
              } else {
                break;
              }
            }
          }
          C = E(Mc);
          F = null;
          I = 0;
        }
        N = 0;
      } else {
        break;
      }
    }
  }
  a.restore();
}
function Hx(a, b, c) {
  return Xk(function(a) {
    var e = M.j(a, 0, null);
    a = M.j(a, 1, null);
    return new Q(null, 2, 5, R, [a >= c ? vn : Qm, q(b.g ? b.g(e) : b.call(null, e)) ? Vp : Gq], null);
  }, a);
}
function Ix(a, b, c) {
  if (a ? a.yb : a) {
    return a.yb(a, b, c);
  }
  var d;
  d = Ix[n(null == a ? null : a)];
  if (!d && (d = Ix._, !d)) {
    throw s("PCellsSegmentsLayout.seg-xy", a);
  }
  return d.call(null, a, b, c);
}
function Jx(a, b) {
  if (a ? a.bc : a) {
    return a.bc(a, b);
  }
  var c;
  c = Jx[n(null == a ? null : a)];
  if (!c && (c = Jx._, !c)) {
    throw s("PCellsSegmentsLayout.cell-xy", a);
  }
  return c.call(null, a, b);
}
function Kx(a, b, c) {
  a = Lg.j(Dg, Pg.g(a), Ik.g(b));
  return Yg.h(function() {
    return function(a) {
      return Mf(Og.h(He, Mf(nv(c, a))));
    };
  }(a), a);
}
var Mx = function Lx(b, c, d, e, f, g) {
  var k = Lg.h(L, c), l = Lg.h(Bg.h(pf, 1), k), m = Fe.h(lf, l), p = f + Zg.h(g, new Q(null, 2, 5, R, [oq, Jm], null)), t = Zg.h(g, new Q(null, 2, 5, R, [oq, Rq], null)), r = .5 * t, y = Zg.h(g, new Q(null, 2, 5, R, [oq, Wq], null)), B = Zg.h(g, new Q(null, 2, 5, R, [oq, Ym], null)), C = Zg.h(g, new Q(null, 2, 5, R, [oq, wm], null)), F = .5 * C, I = .95 * window.innerHeight, N = window.pageYOffset + 2 * y, H = tx(d, b, e), V = M.j(H, 0, null), T = M.j(H, 1, null);
  "undefined" === typeof zx && (zx = function(b, c, d, e, f, g, k, l, m, p, r, t, y, B, C, F, I, H, N, T, V, yb, Fb) {
    this.kd = b;
    this.od = c;
    this.Jd = d;
    this.Kd = e;
    this.Gc = f;
    this.Be = g;
    this.ld = k;
    this.sc = l;
    this.sd = m;
    this.Ae = p;
    this.Md = r;
    this.Xd = t;
    this.Wc = y;
    this.rc = B;
    this.jd = C;
    this.Ge = F;
    this.Ce = I;
    this.Id = H;
    this.pd = N;
    this.Zd = T;
    this.md = V;
    this.Hc = yb;
    this.Qd = Fb;
    this.F = 0;
    this.o = 393216;
  }, zx.xb = !0, zx.wb = "comportexviz.viz-canvas/t81419", zx.Nb = function() {
    return function(b, c) {
      return Ec(c, "comportexviz.viz-canvas/t81419");
    };
  }(k, l, m, p, t, r, y, B, C, F, I, N, H, V, T), zx.prototype.yb = function() {
    return function(b, c, d) {
      b = Fe.j(lf, d, Mg.h(c, this.kd)) / this.jd;
      return new Q(null, 2, 5, R, [this.pd + this.od, this.md + 30 + b * this.ld], null);
    };
  }(k, l, m, p, t, r, y, B, C, F, I, N, H, V, T), zx.prototype.bc = function() {
    return function(b, c) {
      var d = Ix(this, c, 0);
      M.j(d, 0, null);
      d = M.j(d, 1, null);
      return new Q(null, 2, 5, R, [this.Hc, d], null);
    };
  }(k, l, m, p, t, r, y, B, C, F, I, N, H, V, T), zx.prototype.cc = function() {
    return function(b, c, d) {
      d = Jx(this, d);
      b = M.j(d, 0, null);
      d = M.j(d, 1, null);
      Yw(c);
      c.moveTo(this.rc + this.Wc + 1, this.sc);
      var e = this.rc, f = (b - e) / 3;
      ix.va(c, b - f, this.sc, e + f, d, b, d);
      Zw(c);
      return c;
    };
  }(k, l, m, p, t, r, y, B, C, F, I, N, H, V, T), zx.prototype.gb = function() {
    return function(b, c, d, e) {
      var f = Jx(this, d);
      b = M.j(f, 0, null);
      f = M.j(f, 1, null);
      e = Ix(this, d, e);
      d = M.j(e, 0, null);
      e = M.j(e, 1, null);
      Yw(c);
      c.moveTo(d, e);
      c.lineTo(b + this.Gc, f);
      Zw(c);
      return c;
    };
  }(k, l, m, p, t, r, y, B, C, F, I, N, H, V, T), zx.prototype.L = function() {
    return function() {
      return this.Qd;
    };
  }(k, l, m, p, t, r, y, B, C, F, I, N, H, V, T), zx.prototype.N = function() {
    return function(b, c) {
      return new zx(this.kd, this.od, this.Jd, this.Kd, this.Gc, this.Be, this.ld, this.sc, this.sd, this.Ae, this.Md, this.Xd, this.Wc, this.rc, this.jd, this.Ge, this.Ce, this.Id, this.pd, this.Zd, this.md, this.Hc, c);
    };
  }(k, l, m, p, t, r, y, B, C, F, I, N, H, V, T));
  return new zx(l, F, t, d, y, C, I, T, Lx, B, e, k, r, V, m, H, c, b, p, g, N, f, null);
};
function Nx(a, b, c, d, e, f, g, k) {
  a.save();
  var l = qv(c), m = ln.g(l), p = cn.g(l), t = ev(b), r = ev(c), y = iv(c), B = bn.g(b), C = O.h(dv(b), e), F = O.h(cv(b), e), I = eq.g(b), N = Kx(e, av(b), I), H = Mx(e, N, d, f, g, k), V = Zg.h(k, new Q(null, 2, 5, R, [oq, Rq], null)), T = Zg.h(k, new Q(null, 2, 5, R, [oq, Wq], null)), G = Zg.h(k, new Q(null, 2, 5, R, [oq, Ym], null)), qa = Zg.h(k, new Q(null, 2, 5, R, [oq, wm], null)), S = .5 * qa;
  a.lineWidth = V;
  ex(a, sn.g(Z));
  for (var ea = z(Cg(N)), ka = null, Da = 0, la = 0;;) {
    if (la < Da) {
      var Oa = ka.B(null, la), ta = M.j(Oa, 0, null), ua = M.j(Oa, 1, null);
      H.cc(null, a, ta);
      for (var Ta = z(Ik.g(L(ua))), va = null, Ga = 0, ib = 0;;) {
        if (ib < Ga) {
          var rb = va.B(null, ib);
          H.gb(null, a, ta, rb);
          ib += 1;
        } else {
          var Eb = z(Ta);
          if (Eb) {
            var Ha = Eb;
            if (P(Ha)) {
              var eb = v(Ha), ab = w(Ha), $ = eb, hc = L(eb), Ta = ab, va = $, Ga = hc
            } else {
              var yb = A(Ha);
              H.gb(null, a, ta, yb);
              Ta = E(Ha);
              va = null;
              Ga = 0;
            }
            ib = 0;
          } else {
            break;
          }
        }
      }
      la += 1;
    } else {
      var Fb = z(ea);
      if (Fb) {
        var Xb = Fb;
        if (P(Xb)) {
          var xc = v(Xb), W = w(Xb), nd = xc, Ld = L(xc), ea = W, ka = nd, Da = Ld
        } else {
          var od = A(Xb), Wc = M.j(od, 0, null), Md = M.j(od, 1, null);
          H.cc(null, a, Wc);
          for (var Ib = z(Ik.g(L(Md))), Jb = null, nc = 0, Kb = 0;;) {
            if (Kb < nc) {
              var oc = Jb.B(null, Kb);
              H.gb(null, a, Wc, oc);
              Kb += 1;
            } else {
              var pc = z(Ib);
              if (pc) {
                var Xc = pc;
                if (P(Xc)) {
                  var pd = v(Xc), yf = w(Xc), zf = pd, Nd = L(pd), Ib = yf, Jb = zf, nc = Nd
                } else {
                  var qc = A(Xc);
                  H.gb(null, a, Wc, qc);
                  Ib = E(Xc);
                  Jb = null;
                  nc = 0;
                }
                Kb = 0;
              } else {
                break;
              }
            }
          }
          ea = E(Xb);
          ka = null;
          Da = 0;
        }
        la = 0;
      } else {
        break;
      }
    }
  }
  for (var cb = z(Cg(N)), Bb = null, kb = 0, rc = 0;;) {
    if (rc < kb) {
      var Yb = Bb.B(null, rc), Rb = M.j(Yb, 0, null), Od = M.j(Yb, 1, null), qd = H.bc(null, Rb), Ic = M.j(qd, 0, null), sa = M.j(qd, 1, null), Zb = new Q(null, 2, 5, R, [e, Rb], null), Yc = function() {
        var a = Zb;
        return t.g ? t.g(a) : t.call(null, a);
      }(), rd = function() {
        var a = Zb;
        return y.g ? y.g(a) : y.call(null, a);
      }(), Jc = bf(B, Zb), yc = q(Jc) ? Nb(Jc) : null, aa = Yg.h(function(a, b, c, d, e, f, g, k, l, m, p, r, G, t, y, Ja, B, C, S, F) {
        return function(a) {
          return Hx(a, F, C);
        };
      }(cb, Bb, kb, rc, qd, Ic, sa, Zb, Yc, rd, Jc, yc, Yb, Rb, Od, l, m, p, t, r, y, B, C, F, I, N, H, V, T, G, qa, S), Od), Pd = function(a, b, c, d, e, f, g, k, l, m, p, r, G, t, y, Ja, B, C) {
        return function(a) {
          var b = new Q(null, 2, 5, R, [vn, Vp], null);
          a = a.g ? a.g(b) : a.call(null, b);
          return L(a) >= C;
        };
      }(cb, Bb, kb, rc, qd, Ic, sa, Zb, Yc, rd, Jc, yc, aa, Yb, Rb, Od, l, m, p, t, r, y, B, C, F, I, N, H, V, T, G, qa, S), qe = q(function() {
        var a = Yc;
        return q(a) ? rd : a;
      }()) ? Jp : q(rd) ? vq : q(Yc) ? Vp : tm;
      if (q(Yc)) {
        var Qd = a;
        ex(Qd, Vp.g(Z));
        Qd.lineWidth = 2;
        H.cc(null, a, Rb);
      }
      if (q(Jc)) {
        var Lb = a;
        dx(Lb, Xm.g(Z));
        Yw(Lb);
        Lb.arc(Ic, sa, T + 8, 0, 2 * Math.PI, !0);
        Lb.fill();
      }
      var $b = a;
      dx($b, function() {
        var a = qe;
        return Z.g ? Z.g(a) : Z.call(null, a);
      }());
      ex($b, "black");
      $b.lineWidth = 1;
      Yw($b);
      $b.arc(Ic, sa, T, 0, 2 * Math.PI, !0);
      Zw($b);
      $b.fill();
      dx(a, "black");
      cx(a, new Ka(null, 3, [Yq, "cell " + u.g(Rb) + u.g(q(Jc) ? "   (learning on " + u.g(q(yc) ? "segment " + u.g(yc) : "new segment") + ")" : null), tq, Ic, um, sa - T - 5], null));
      for (var lb = z(Cg(aa)), vb = null, Kc = 0, sd = 0;;) {
        if (sd < Kc) {
          var re = vb.B(null, sd), zc = M.j(re, 0, null), ja = M.j(re, 1, null), Ie = H.yb(null, Rb, zc), Sb = M.j(Ie, 0, null), ac = M.j(Ie, 1, null), Lc = L(function() {
            var a = new Q(null, 2, 5, R, [vn, Vp], null);
            return ja.g ? ja.g(a) : ja.call(null, a);
          }()), bc = Lc + L(function() {
            var a = new Q(null, 2, 5, R, [vn, tm], null);
            return ja.g ? ja.g(a) : ja.call(null, a);
          }()), Tb = L(function() {
            var a = new Q(null, 2, 5, R, [Qm, Vp], null);
            return ja.g ? ja.g(a) : ja.call(null, a);
          }()), cc = Tb + L(function() {
            var a = new Q(null, 2, 5, R, [Qm, tm], null);
            return ja.g ? ja.g(a) : ja.call(null, a);
          }()), Je = function() {
            var a = Lc / m;
            return 1 > a ? a : 1;
          }(), Mc = function() {
            var a = Jc;
            return q(a) ? x.h(zc, yc) : a;
          }(), td = wx(Sb, ac, qa, G), se = wx(Sb, ac, qa + 8, G + 8);
          if (q(Mc)) {
            var Zc = a;
            dx(Zc, Xm.g(Z));
            bx(Zc, se);
          }
          var sc = a;
          Y(sc, 1);
          ex(sc, "black");
          sc.lineWidth = 1;
          ax(sc, td);
          dx(sc, "white");
          bx(sc, td);
          Y(sc, Je);
          dx(sc, Vp.g(Z));
          bx(sc, td);
          Y(sc, 1);
          if (Pd(ja)) {
            var Ac = a;
            ex(Ac, Vp.g(Z));
            Ac.lineWidth = 2;
            H.gb(null, a, Rb, zc);
          }
          dx(a, "black");
          cx(a, new Ka(null, 3, [Yq, "[" + u.g(zc) + "],  active " + u.g(Lc) + " / " + u.g(bc) + " conn. (" + u.g(Tb) + " / " + u.g(cc) + " disconn.)", tq, Sb + 5 + S, um, ac], null));
          a.lineWidth = 1;
          var Cb = Zg.h(k, new Q(null, 2, 5, R, [Tm, Nq], null)), Nc = Zg.h(k, new Q(null, 2, 5, R, [Tm, Vp], null)), te = Zg.h(k, new Q(null, 2, 5, R, [Tm, tm], null)), ud = Zg.h(k, new Q(null, 2, 5, R, [Tm, Qm], null)), vd = Zg.h(k, new Q(null, 2, 5, R, [Tm, Up], null));
          if (q(function() {
            var a = x.h(vd, Kn);
            return a ? a : (a = x.h(vd, Ap)) ? Mc : a;
          }())) {
            for (var ue = z(dg.h(q(te) ? new Q(null, 1, 5, R, [Gq], null) : null, q(Nc) ? new Q(null, 1, 5, R, [Vp], null) : null)), wd = null, Rd = 0, dc = 0;;) {
              if (dc < Rd) {
                for (var Oc = wd.B(null, dc), Bc = z(dg.h(q(ud) ? new Q(null, 1, 5, R, [Qm], null) : null, new Q(null, 1, 5, R, [vn], null))), ec = null, Sd = 0, $c = 0;;) {
                  if ($c < Sd) {
                    var xd = ec.B(null, $c), Ke = function() {
                      var a = new Q(null, 2, 5, R, [xd, Oc], null);
                      return ja.g ? ja.g(a) : ja.call(null, a);
                    }();
                    ex(a, function() {
                      var a = Oc;
                      return Z.g ? Z.g(a) : Z.call(null, a);
                    }());
                    for (var Le = z(Ke), ve = null, yd = 0, we = 0;;) {
                      if (we < yd) {
                        var mg = ve.B(null, we), jh = M.j(mg, 0, null), ki = M.j(jh, 0, null);
                        M.j(jh, 1, null);
                        var Pc = M.j(mg, 1, null), ng = tx(d, ki, f + 1), Me = M.j(ng, 0, null), kh = M.j(ng, 1, null), Ne = a;
                        Y(Ne, q(Cb) ? Pc : 1);
                        Yw(Ne);
                        Ne.moveTo(Sb, ac);
                        Ne.lineTo(Me + 1, kh);
                        Zw(Ne);
                        we += 1;
                      } else {
                        var lh = z(Le);
                        if (lh) {
                          var Oe = lh;
                          if (P(Oe)) {
                            var og = v(Oe), li = w(Oe), Ja = og, Zk = L(og), Le = li, ve = Ja, yd = Zk
                          } else {
                            var $k = A(Oe), mi = M.j($k, 0, null), Qn = M.j(mi, 0, null);
                            M.j(mi, 1, null);
                            var Rn = M.j($k, 1, null), Af = tx(d, Qn, f + 1), al = M.j(Af, 0, null), pg = M.j(Af, 1, null), Bf = a;
                            Y(Bf, q(Cb) ? Rn : 1);
                            Yw(Bf);
                            Bf.moveTo(Sb, ac);
                            Bf.lineTo(al + 1, pg);
                            Zw(Bf);
                            Le = E(Oe);
                            ve = null;
                            yd = 0;
                          }
                          we = 0;
                        } else {
                          break;
                        }
                      }
                    }
                    Y(a, 1);
                    $c += 1;
                  } else {
                    var bl = z(Bc);
                    if (bl) {
                      var qg = bl;
                      if (P(qg)) {
                        var cl = v(qg), mh = w(qg), dl = cl, nh = L(cl), Bc = mh, ec = dl, Sd = nh
                      } else {
                        var Sn = A(qg), el = function() {
                          var a = new Q(null, 2, 5, R, [Sn, Oc], null);
                          return ja.g ? ja.g(a) : ja.call(null, a);
                        }();
                        ex(a, function() {
                          var a = Oc;
                          return Z.g ? Z.g(a) : Z.call(null, a);
                        }());
                        for (var oh = z(el), ph = null, rg = 0, Pe = 0;;) {
                          if (Pe < rg) {
                            var qh = ph.B(null, Pe), Cf = M.j(qh, 0, null), fl = M.j(Cf, 0, null);
                            M.j(Cf, 1, null);
                            var Tn = M.j(qh, 1, null), gl = tx(d, fl, f + 1), hl = M.j(gl, 0, null), Un = M.j(gl, 1, null), Df = a;
                            Y(Df, q(Cb) ? Tn : 1);
                            Yw(Df);
                            Df.moveTo(Sb, ac);
                            Df.lineTo(hl + 1, Un);
                            Zw(Df);
                            Pe += 1;
                          } else {
                            var il = z(oh);
                            if (il) {
                              var sg = il;
                              if (P(sg)) {
                                var Ef = v(sg), jl = w(sg), tg = Ef, kl = L(Ef), oh = jl, ph = tg, rg = kl
                              } else {
                                var ll = A(sg), ml = M.j(ll, 0, null), Vn = M.j(ml, 0, null);
                                M.j(ml, 1, null);
                                var nl = M.j(ll, 1, null), ol = tx(d, Vn, f + 1), rh = M.j(ol, 0, null), pl = M.j(ol, 1, null), ug = a;
                                Y(ug, q(Cb) ? nl : 1);
                                Yw(ug);
                                ug.moveTo(Sb, ac);
                                ug.lineTo(rh + 1, pl);
                                Zw(ug);
                                oh = E(sg);
                                ph = null;
                                rg = 0;
                              }
                              Pe = 0;
                            } else {
                              break;
                            }
                          }
                        }
                        Y(a, 1);
                        Bc = E(qg);
                        ec = null;
                        Sd = 0;
                      }
                      $c = 0;
                    } else {
                      break;
                    }
                  }
                }
                dc += 1;
              } else {
                var ni = z(ue);
                if (ni) {
                  var vg = ni;
                  if (P(vg)) {
                    var ql = v(vg), wg = w(vg), my = ql, tl = L(ql), ue = wg, wd = my, Rd = tl
                  } else {
                    for (var ul = A(vg), Wn = z(dg.h(q(ud) ? new Q(null, 1, 5, R, [Qm], null) : null, new Q(null, 1, 5, R, [vn], null))), Xn = null, Yn = 0, oi = 0;;) {
                      if (oi < Yn) {
                        var ry = Xn.B(null, oi), vl = function() {
                          var a = new Q(null, 2, 5, R, [ry, ul], null);
                          return ja.g ? ja.g(a) : ja.call(null, a);
                        }();
                        ex(a, function() {
                          var a = ul;
                          return Z.g ? Z.g(a) : Z.call(null, a);
                        }());
                        for (var Zn = z(vl), $n = null, ao = 0, pi = 0;;) {
                          if (pi < ao) {
                            var Pr = $n.B(null, pi), Qr = M.j(Pr, 0, null), sy = M.j(Qr, 0, null);
                            M.j(Qr, 1, null);
                            var wl = M.j(Pr, 1, null), Rr = tx(d, sy, f + 1), ty = M.j(Rr, 0, null), uy = M.j(Rr, 1, null), qi = a;
                            Y(qi, q(Cb) ? wl : 1);
                            Yw(qi);
                            qi.moveTo(Sb, ac);
                            qi.lineTo(ty + 1, uy);
                            Zw(qi);
                            pi += 1;
                          } else {
                            var Sr = z(Zn);
                            if (Sr) {
                              var ri = Sr;
                              if (P(ri)) {
                                var Tr = v(ri), vy = w(ri), wy = Tr, xy = L(Tr), Zn = vy, $n = wy, ao = xy
                              } else {
                                var Ur = A(ri), Vr = M.j(Ur, 0, null), yy = M.j(Vr, 0, null);
                                M.j(Vr, 1, null);
                                var zy = M.j(Ur, 1, null), Wr = tx(d, yy, f + 1), Ay = M.j(Wr, 0, null), By = M.j(Wr, 1, null), si = a;
                                Y(si, q(Cb) ? zy : 1);
                                Yw(si);
                                si.moveTo(Sb, ac);
                                si.lineTo(Ay + 1, By);
                                Zw(si);
                                Zn = E(ri);
                                $n = null;
                                ao = 0;
                              }
                              pi = 0;
                            } else {
                              break;
                            }
                          }
                        }
                        Y(a, 1);
                        oi += 1;
                      } else {
                        var Xr = z(Wn);
                        if (Xr) {
                          var ti = Xr;
                          if (P(ti)) {
                            var Yr = v(ti), Cy = w(ti), Dy = Yr, Ey = L(Yr), Wn = Cy, Xn = Dy, Yn = Ey
                          } else {
                            var Fy = A(ti), Gy = function() {
                              var a = new Q(null, 2, 5, R, [Fy, ul], null);
                              return ja.g ? ja.g(a) : ja.call(null, a);
                            }();
                            ex(a, function() {
                              var a = ul;
                              return Z.g ? Z.g(a) : Z.call(null, a);
                            }());
                            for (var bo = z(Gy), co = null, eo = 0, ui = 0;;) {
                              if (ui < eo) {
                                var Zr = co.B(null, ui), $r = M.j(Zr, 0, null), Hy = M.j($r, 0, null);
                                M.j($r, 1, null);
                                var Iy = M.j(Zr, 1, null), as = tx(d, Hy, f + 1), Jy = M.j(as, 0, null), Ky = M.j(as, 1, null), vi = a;
                                Y(vi, q(Cb) ? Iy : 1);
                                Yw(vi);
                                vi.moveTo(Sb, ac);
                                vi.lineTo(Jy + 1, Ky);
                                Zw(vi);
                                ui += 1;
                              } else {
                                var bs = z(bo);
                                if (bs) {
                                  var wi = bs;
                                  if (P(wi)) {
                                    var cs = v(wi), Ly = w(wi), My = cs, Ny = L(cs), bo = Ly, co = My, eo = Ny
                                  } else {
                                    var ds = A(wi), es = M.j(ds, 0, null), Oy = M.j(es, 0, null);
                                    M.j(es, 1, null);
                                    var Py = M.j(ds, 1, null), fs = tx(d, Oy, f + 1), Qy = M.j(fs, 0, null), Ry = M.j(fs, 1, null), xi = a;
                                    Y(xi, q(Cb) ? Py : 1);
                                    Yw(xi);
                                    xi.moveTo(Sb, ac);
                                    xi.lineTo(Qy + 1, Ry);
                                    Zw(xi);
                                    bo = E(wi);
                                    co = null;
                                    eo = 0;
                                  }
                                  ui = 0;
                                } else {
                                  break;
                                }
                              }
                            }
                            Y(a, 1);
                            Wn = E(ti);
                            Xn = null;
                            Yn = 0;
                          }
                          oi = 0;
                        } else {
                          break;
                        }
                      }
                    }
                    ue = E(vg);
                    wd = null;
                    Rd = 0;
                  }
                  dc = 0;
                } else {
                  break;
                }
              }
            }
          }
          sd += 1;
        } else {
          var gs = z(lb);
          if (gs) {
            var yi = gs;
            if (P(yi)) {
              var hs = v(yi), Sy = w(yi), Ty = hs, Uy = L(hs), lb = Sy, vb = Ty, Kc = Uy
            } else {
              var is = A(yi), xl = M.j(is, 0, null), fb = M.j(is, 1, null), js = H.yb(null, Rb, xl), Td = M.j(js, 0, null), Ud = M.j(js, 1, null), fo = L(function() {
                var a = new Q(null, 2, 5, R, [vn, Vp], null);
                return fb.g ? fb.g(a) : fb.call(null, a);
              }()), Vy = fo + L(function() {
                var a = new Q(null, 2, 5, R, [vn, tm], null);
                return fb.g ? fb.g(a) : fb.call(null, a);
              }()), ks = L(function() {
                var a = new Q(null, 2, 5, R, [Qm, Vp], null);
                return fb.g ? fb.g(a) : fb.call(null, a);
              }()), Wy = ks + L(function() {
                var a = new Q(null, 2, 5, R, [Qm, tm], null);
                return fb.g ? fb.g(a) : fb.call(null, a);
              }()), Xy = function() {
                var a = fo / m;
                return 1 > a ? a : 1;
              }(), ls = function() {
                var a = Jc;
                return q(a) ? x.h(xl, yc) : a;
              }(), go = wx(Td, Ud, qa, G), Yy = wx(Td, Ud, qa + 8, G + 8);
              if (q(ls)) {
                var ms = a;
                dx(ms, Xm.g(Z));
                bx(ms, Yy);
              }
              var xe = a;
              Y(xe, 1);
              ex(xe, "black");
              xe.lineWidth = 1;
              ax(xe, go);
              dx(xe, "white");
              bx(xe, go);
              Y(xe, Xy);
              dx(xe, Vp.g(Z));
              bx(xe, go);
              Y(xe, 1);
              if (Pd(fb)) {
                var ns = a;
                ex(ns, Vp.g(Z));
                ns.lineWidth = 2;
                H.gb(null, a, Rb, xl);
              }
              dx(a, "black");
              cx(a, new Ka(null, 3, [Yq, "[" + u.g(xl) + "],  active " + u.g(fo) + " / " + u.g(Vy) + " conn. (" + u.g(ks) + " / " + u.g(Wy) + " disconn.)", tq, Td + 5 + S, um, Ud], null));
              a.lineWidth = 1;
              var Ff = Zg.h(k, new Q(null, 2, 5, R, [Tm, Nq], null)), Zy = Zg.h(k, new Q(null, 2, 5, R, [Tm, Vp], null)), $y = Zg.h(k, new Q(null, 2, 5, R, [Tm, tm], null)), os = Zg.h(k, new Q(null, 2, 5, R, [Tm, Qm], null)), ps = Zg.h(k, new Q(null, 2, 5, R, [Tm, Up], null));
              if (q(function() {
                var a = x.h(ps, Kn);
                return a ? a : (a = x.h(ps, Ap)) ? ls : a;
              }())) {
                for (var ho = z(dg.h(q($y) ? new Q(null, 1, 5, R, [Gq], null) : null, q(Zy) ? new Q(null, 1, 5, R, [Vp], null) : null)), io = null, jo = 0, zi = 0;;) {
                  if (zi < jo) {
                    for (var yl = io.B(null, zi), ko = z(dg.h(q(os) ? new Q(null, 1, 5, R, [Qm], null) : null, new Q(null, 1, 5, R, [vn], null))), lo = null, mo = 0, Ai = 0;;) {
                      if (Ai < mo) {
                        var az = lo.B(null, Ai), bz = function() {
                          var a = new Q(null, 2, 5, R, [az, yl], null);
                          return fb.g ? fb.g(a) : fb.call(null, a);
                        }();
                        ex(a, function() {
                          var a = yl;
                          return Z.g ? Z.g(a) : Z.call(null, a);
                        }());
                        for (var no = z(bz), oo = null, po = 0, Bi = 0;;) {
                          if (Bi < po) {
                            var qs = oo.B(null, Bi), rs = M.j(qs, 0, null), cz = M.j(rs, 0, null);
                            M.j(rs, 1, null);
                            var dz = M.j(qs, 1, null), ss = tx(d, cz, f + 1), ez = M.j(ss, 0, null), fz = M.j(ss, 1, null), Ci = a;
                            Y(Ci, q(Ff) ? dz : 1);
                            Yw(Ci);
                            Ci.moveTo(Td, Ud);
                            Ci.lineTo(ez + 1, fz);
                            Zw(Ci);
                            Bi += 1;
                          } else {
                            var ts = z(no);
                            if (ts) {
                              var Di = ts;
                              if (P(Di)) {
                                var us = v(Di), gz = w(Di), hz = us, iz = L(us), no = gz, oo = hz, po = iz
                              } else {
                                var vs = A(Di), ws = M.j(vs, 0, null), jz = M.j(ws, 0, null);
                                M.j(ws, 1, null);
                                var kz = M.j(vs, 1, null), xs = tx(d, jz, f + 1), lz = M.j(xs, 0, null), mz = M.j(xs, 1, null), Ei = a;
                                Y(Ei, q(Ff) ? kz : 1);
                                Yw(Ei);
                                Ei.moveTo(Td, Ud);
                                Ei.lineTo(lz + 1, mz);
                                Zw(Ei);
                                no = E(Di);
                                oo = null;
                                po = 0;
                              }
                              Bi = 0;
                            } else {
                              break;
                            }
                          }
                        }
                        Y(a, 1);
                        Ai += 1;
                      } else {
                        var ys = z(ko);
                        if (ys) {
                          var Fi = ys;
                          if (P(Fi)) {
                            var zs = v(Fi), nz = w(Fi), oz = zs, pz = L(zs), ko = nz, lo = oz, mo = pz
                          } else {
                            var qz = A(Fi), rz = function() {
                              var a = new Q(null, 2, 5, R, [qz, yl], null);
                              return fb.g ? fb.g(a) : fb.call(null, a);
                            }();
                            ex(a, function() {
                              var a = yl;
                              return Z.g ? Z.g(a) : Z.call(null, a);
                            }());
                            for (var qo = z(rz), ro = null, so = 0, Gi = 0;;) {
                              if (Gi < so) {
                                var As = ro.B(null, Gi), Bs = M.j(As, 0, null), sz = M.j(Bs, 0, null);
                                M.j(Bs, 1, null);
                                var tz = M.j(As, 1, null), Cs = tx(d, sz, f + 1), uz = M.j(Cs, 0, null), vz = M.j(Cs, 1, null), Hi = a;
                                Y(Hi, q(Ff) ? tz : 1);
                                Yw(Hi);
                                Hi.moveTo(Td, Ud);
                                Hi.lineTo(uz + 1, vz);
                                Zw(Hi);
                                Gi += 1;
                              } else {
                                var Ds = z(qo);
                                if (Ds) {
                                  var Ii = Ds;
                                  if (P(Ii)) {
                                    var Es = v(Ii), wz = w(Ii), xz = Es, yz = L(Es), qo = wz, ro = xz, so = yz
                                  } else {
                                    var Fs = A(Ii), Gs = M.j(Fs, 0, null), zz = M.j(Gs, 0, null);
                                    M.j(Gs, 1, null);
                                    var Az = M.j(Fs, 1, null), Hs = tx(d, zz, f + 1), Bz = M.j(Hs, 0, null), Cz = M.j(Hs, 1, null), Ji = a;
                                    Y(Ji, q(Ff) ? Az : 1);
                                    Yw(Ji);
                                    Ji.moveTo(Td, Ud);
                                    Ji.lineTo(Bz + 1, Cz);
                                    Zw(Ji);
                                    qo = E(Ii);
                                    ro = null;
                                    so = 0;
                                  }
                                  Gi = 0;
                                } else {
                                  break;
                                }
                              }
                            }
                            Y(a, 1);
                            ko = E(Fi);
                            lo = null;
                            mo = 0;
                          }
                          Ai = 0;
                        } else {
                          break;
                        }
                      }
                    }
                    zi += 1;
                  } else {
                    var Is = z(ho);
                    if (Is) {
                      var Ki = Is;
                      if (P(Ki)) {
                        var Js = v(Ki), Dz = w(Ki), Ez = Js, Fz = L(Js), ho = Dz, io = Ez, jo = Fz
                      } else {
                        for (var zl = A(Ki), to = z(dg.h(q(os) ? new Q(null, 1, 5, R, [Qm], null) : null, new Q(null, 1, 5, R, [vn], null))), uo = null, vo = 0, Li = 0;;) {
                          if (Li < vo) {
                            var Gz = uo.B(null, Li), Hz = function() {
                              var a = new Q(null, 2, 5, R, [Gz, zl], null);
                              return fb.g ? fb.g(a) : fb.call(null, a);
                            }();
                            ex(a, function() {
                              var a = zl;
                              return Z.g ? Z.g(a) : Z.call(null, a);
                            }());
                            for (var wo = z(Hz), xo = null, yo = 0, Mi = 0;;) {
                              if (Mi < yo) {
                                var Ks = xo.B(null, Mi), Ls = M.j(Ks, 0, null), Iz = M.j(Ls, 0, null);
                                M.j(Ls, 1, null);
                                var Jz = M.j(Ks, 1, null), Ms = tx(d, Iz, f + 1), Kz = M.j(Ms, 0, null), Lz = M.j(Ms, 1, null), Ni = a;
                                Y(Ni, q(Ff) ? Jz : 1);
                                Yw(Ni);
                                Ni.moveTo(Td, Ud);
                                Ni.lineTo(Kz + 1, Lz);
                                Zw(Ni);
                                Mi += 1;
                              } else {
                                var Ns = z(wo);
                                if (Ns) {
                                  var Oi = Ns;
                                  if (P(Oi)) {
                                    var Os = v(Oi), Mz = w(Oi), Nz = Os, Oz = L(Os), wo = Mz, xo = Nz, yo = Oz
                                  } else {
                                    var Ps = A(Oi), Qs = M.j(Ps, 0, null), Pz = M.j(Qs, 0, null);
                                    M.j(Qs, 1, null);
                                    var Qz = M.j(Ps, 1, null), Rs = tx(d, Pz, f + 1), Rz = M.j(Rs, 0, null), Sz = M.j(Rs, 1, null), Pi = a;
                                    Y(Pi, q(Ff) ? Qz : 1);
                                    Yw(Pi);
                                    Pi.moveTo(Td, Ud);
                                    Pi.lineTo(Rz + 1, Sz);
                                    Zw(Pi);
                                    wo = E(Oi);
                                    xo = null;
                                    yo = 0;
                                  }
                                  Mi = 0;
                                } else {
                                  break;
                                }
                              }
                            }
                            Y(a, 1);
                            Li += 1;
                          } else {
                            var Ss = z(to);
                            if (Ss) {
                              var Qi = Ss;
                              if (P(Qi)) {
                                var Ts = v(Qi), Tz = w(Qi), Uz = Ts, Vz = L(Ts), to = Tz, uo = Uz, vo = Vz
                              } else {
                                var Wz = A(Qi), Xz = function() {
                                  var a = new Q(null, 2, 5, R, [Wz, zl], null);
                                  return fb.g ? fb.g(a) : fb.call(null, a);
                                }();
                                ex(a, function() {
                                  var a = zl;
                                  return Z.g ? Z.g(a) : Z.call(null, a);
                                }());
                                for (var zo = z(Xz), Ao = null, Bo = 0, Ri = 0;;) {
                                  if (Ri < Bo) {
                                    var Us = Ao.B(null, Ri), Vs = M.j(Us, 0, null), Yz = M.j(Vs, 0, null);
                                    M.j(Vs, 1, null);
                                    var Zz = M.j(Us, 1, null), Ws = tx(d, Yz, f + 1), $z = M.j(Ws, 0, null), aA = M.j(Ws, 1, null), Si = a;
                                    Y(Si, q(Ff) ? Zz : 1);
                                    Yw(Si);
                                    Si.moveTo(Td, Ud);
                                    Si.lineTo($z + 1, aA);
                                    Zw(Si);
                                    Ri += 1;
                                  } else {
                                    var Xs = z(zo);
                                    if (Xs) {
                                      var Ti = Xs;
                                      if (P(Ti)) {
                                        var Ys = v(Ti), bA = w(Ti), cA = Ys, dA = L(Ys), zo = bA, Ao = cA, Bo = dA
                                      } else {
                                        var Zs = A(Ti), $s = M.j(Zs, 0, null), eA = M.j($s, 0, null);
                                        M.j($s, 1, null);
                                        var fA = M.j(Zs, 1, null), at = tx(d, eA, f + 1), gA = M.j(at, 0, null), hA = M.j(at, 1, null), Ui = a;
                                        Y(Ui, q(Ff) ? fA : 1);
                                        Yw(Ui);
                                        Ui.moveTo(Td, Ud);
                                        Ui.lineTo(gA + 1, hA);
                                        Zw(Ui);
                                        zo = E(Ti);
                                        Ao = null;
                                        Bo = 0;
                                      }
                                      Ri = 0;
                                    } else {
                                      break;
                                    }
                                  }
                                }
                                Y(a, 1);
                                to = E(Qi);
                                uo = null;
                                vo = 0;
                              }
                              Li = 0;
                            } else {
                              break;
                            }
                          }
                        }
                        ho = E(Ki);
                        io = null;
                        jo = 0;
                      }
                      zi = 0;
                    } else {
                      break;
                    }
                  }
                }
              }
              lb = E(yi);
              vb = null;
              Kc = 0;
            }
            sd = 0;
          } else {
            break;
          }
        }
      }
      rc += 1;
    } else {
      var Al = z(cb);
      if (Al) {
        var xg = Al;
        if (P(xg)) {
          var bt = v(xg), iA = w(xg), jA = bt, kA = L(bt), cb = iA, Bb = jA, kb = kA
        } else {
          var Bl = A(xg), ye = M.j(Bl, 0, null), Co = M.j(Bl, 1, null), Cl = H.bc(null, ye), Vi = M.j(Cl, 0, null), Wi = M.j(Cl, 1, null), Xi = new Q(null, 2, 5, R, [e, ye], null), Yi = function() {
            var a = Xi;
            return t.g ? t.g(a) : t.call(null, a);
          }(), Dl = function() {
            var a = Xi;
            return y.g ? y.g(a) : y.call(null, a);
          }(), Gf = bf(B, Xi), sh = q(Gf) ? Nb(Gf) : null, ct = Yg.h(function(a, b, c, d, e, f, g, k, l, m, p, r, G, t, y, Ja, B, C, S, F, I, H) {
            return function(a) {
              return Hx(a, H, F);
            };
          }(cb, Bb, kb, rc, Cl, Vi, Wi, Xi, Yi, Dl, Gf, sh, Bl, ye, Co, xg, Al, l, m, p, t, r, y, B, C, F, I, N, H, V, T, G, qa, S), Co), dt = function(a, b, c, d, e, f, g, k, l, m, p, r, G, t, y, Ja, B, C, S, F) {
            return function(a) {
              var b = new Q(null, 2, 5, R, [vn, Vp], null);
              a = a.g ? a.g(b) : a.call(null, b);
              return L(a) >= F;
            };
          }(cb, Bb, kb, rc, Cl, Vi, Wi, Xi, Yi, Dl, Gf, sh, ct, Bl, ye, Co, xg, Al, l, m, p, t, r, y, B, C, F, I, N, H, V, T, G, qa, S), lA = q(function() {
            var a = Yi;
            return q(a) ? Dl : a;
          }()) ? Jp : q(Dl) ? vq : q(Yi) ? Vp : tm;
          if (q(Yi)) {
            var et = a;
            ex(et, Vp.g(Z));
            et.lineWidth = 2;
            H.cc(null, a, ye);
          }
          if (q(Gf)) {
            var El = a;
            dx(El, Xm.g(Z));
            Yw(El);
            El.arc(Vi, Wi, T + 8, 0, 2 * Math.PI, !0);
            El.fill();
          }
          var yg = a;
          dx(yg, function() {
            var a = lA;
            return Z.g ? Z.g(a) : Z.call(null, a);
          }());
          ex(yg, "black");
          yg.lineWidth = 1;
          Yw(yg);
          yg.arc(Vi, Wi, T, 0, 2 * Math.PI, !0);
          Zw(yg);
          yg.fill();
          dx(a, "black");
          cx(a, new Ka(null, 3, [Yq, "cell " + u.g(ye) + u.g(q(Gf) ? "   (learning on " + u.g(q(sh) ? "segment " + u.g(sh) : "new segment") + ")" : null), tq, Vi, um, Wi - T - 5], null));
          for (var Do = z(Cg(ct)), Eo = null, Fo = 0, Zi = 0;;) {
            if (Zi < Fo) {
              var ft = Eo.B(null, Zi), Fl = M.j(ft, 0, null), gb = M.j(ft, 1, null), gt = H.yb(null, ye, Fl), Vd = M.j(gt, 0, null), Wd = M.j(gt, 1, null), Go = L(function() {
                var a = new Q(null, 2, 5, R, [vn, Vp], null);
                return gb.g ? gb.g(a) : gb.call(null, a);
              }()), mA = Go + L(function() {
                var a = new Q(null, 2, 5, R, [vn, tm], null);
                return gb.g ? gb.g(a) : gb.call(null, a);
              }()), ht = L(function() {
                var a = new Q(null, 2, 5, R, [Qm, Vp], null);
                return gb.g ? gb.g(a) : gb.call(null, a);
              }()), nA = ht + L(function() {
                var a = new Q(null, 2, 5, R, [Qm, tm], null);
                return gb.g ? gb.g(a) : gb.call(null, a);
              }()), oA = function() {
                var a = Go / m;
                return 1 > a ? a : 1;
              }(), it = function() {
                var a = Gf;
                return q(a) ? x.h(Fl, sh) : a;
              }(), Ho = wx(Vd, Wd, qa, G), pA = wx(Vd, Wd, qa + 8, G + 8);
              if (q(it)) {
                var jt = a;
                dx(jt, Xm.g(Z));
                bx(jt, pA);
              }
              var ze = a;
              Y(ze, 1);
              ex(ze, "black");
              ze.lineWidth = 1;
              ax(ze, Ho);
              dx(ze, "white");
              bx(ze, Ho);
              Y(ze, oA);
              dx(ze, Vp.g(Z));
              bx(ze, Ho);
              Y(ze, 1);
              if (dt(gb)) {
                var kt = a;
                ex(kt, Vp.g(Z));
                kt.lineWidth = 2;
                H.gb(null, a, ye, Fl);
              }
              dx(a, "black");
              cx(a, new Ka(null, 3, [Yq, "[" + u.g(Fl) + "],  active " + u.g(Go) + " / " + u.g(mA) + " conn. (" + u.g(ht) + " / " + u.g(nA) + " disconn.)", tq, Vd + 5 + S, um, Wd], null));
              a.lineWidth = 1;
              var Hf = Zg.h(k, new Q(null, 2, 5, R, [Tm, Nq], null)), qA = Zg.h(k, new Q(null, 2, 5, R, [Tm, Vp], null)), rA = Zg.h(k, new Q(null, 2, 5, R, [Tm, tm], null)), lt = Zg.h(k, new Q(null, 2, 5, R, [Tm, Qm], null)), mt = Zg.h(k, new Q(null, 2, 5, R, [Tm, Up], null));
              if (q(function() {
                var a = x.h(mt, Kn);
                return a ? a : (a = x.h(mt, Ap)) ? it : a;
              }())) {
                for (var Io = z(dg.h(q(rA) ? new Q(null, 1, 5, R, [Gq], null) : null, q(qA) ? new Q(null, 1, 5, R, [Vp], null) : null)), Jo = null, Ko = 0, $i = 0;;) {
                  if ($i < Ko) {
                    for (var Gl = Jo.B(null, $i), Lo = z(dg.h(q(lt) ? new Q(null, 1, 5, R, [Qm], null) : null, new Q(null, 1, 5, R, [vn], null))), Mo = null, No = 0, aj = 0;;) {
                      if (aj < No) {
                        var sA = Mo.B(null, aj), tA = function() {
                          var a = new Q(null, 2, 5, R, [sA, Gl], null);
                          return gb.g ? gb.g(a) : gb.call(null, a);
                        }();
                        ex(a, function() {
                          var a = Gl;
                          return Z.g ? Z.g(a) : Z.call(null, a);
                        }());
                        for (var Oo = z(tA), Po = null, Qo = 0, bj = 0;;) {
                          if (bj < Qo) {
                            var nt = Po.B(null, bj), ot = M.j(nt, 0, null), uA = M.j(ot, 0, null);
                            M.j(ot, 1, null);
                            var vA = M.j(nt, 1, null), pt = tx(d, uA, f + 1), wA = M.j(pt, 0, null), xA = M.j(pt, 1, null), cj = a;
                            Y(cj, q(Hf) ? vA : 1);
                            Yw(cj);
                            cj.moveTo(Vd, Wd);
                            cj.lineTo(wA + 1, xA);
                            Zw(cj);
                            bj += 1;
                          } else {
                            var qt = z(Oo);
                            if (qt) {
                              var dj = qt;
                              if (P(dj)) {
                                var rt = v(dj), yA = w(dj), zA = rt, AA = L(rt), Oo = yA, Po = zA, Qo = AA
                              } else {
                                var st = A(dj), tt = M.j(st, 0, null), BA = M.j(tt, 0, null);
                                M.j(tt, 1, null);
                                var CA = M.j(st, 1, null), ut = tx(d, BA, f + 1), DA = M.j(ut, 0, null), EA = M.j(ut, 1, null), ej = a;
                                Y(ej, q(Hf) ? CA : 1);
                                Yw(ej);
                                ej.moveTo(Vd, Wd);
                                ej.lineTo(DA + 1, EA);
                                Zw(ej);
                                Oo = E(dj);
                                Po = null;
                                Qo = 0;
                              }
                              bj = 0;
                            } else {
                              break;
                            }
                          }
                        }
                        Y(a, 1);
                        aj += 1;
                      } else {
                        var vt = z(Lo);
                        if (vt) {
                          var fj = vt;
                          if (P(fj)) {
                            var wt = v(fj), FA = w(fj), GA = wt, HA = L(wt), Lo = FA, Mo = GA, No = HA
                          } else {
                            var IA = A(fj), JA = function() {
                              var a = new Q(null, 2, 5, R, [IA, Gl], null);
                              return gb.g ? gb.g(a) : gb.call(null, a);
                            }();
                            ex(a, function() {
                              var a = Gl;
                              return Z.g ? Z.g(a) : Z.call(null, a);
                            }());
                            for (var Ro = z(JA), So = null, To = 0, gj = 0;;) {
                              if (gj < To) {
                                var xt = So.B(null, gj), yt = M.j(xt, 0, null), KA = M.j(yt, 0, null);
                                M.j(yt, 1, null);
                                var LA = M.j(xt, 1, null), zt = tx(d, KA, f + 1), MA = M.j(zt, 0, null), NA = M.j(zt, 1, null), hj = a;
                                Y(hj, q(Hf) ? LA : 1);
                                Yw(hj);
                                hj.moveTo(Vd, Wd);
                                hj.lineTo(MA + 1, NA);
                                Zw(hj);
                                gj += 1;
                              } else {
                                var At = z(Ro);
                                if (At) {
                                  var ij = At;
                                  if (P(ij)) {
                                    var Bt = v(ij), OA = w(ij), PA = Bt, QA = L(Bt), Ro = OA, So = PA, To = QA
                                  } else {
                                    var Ct = A(ij), Dt = M.j(Ct, 0, null), RA = M.j(Dt, 0, null);
                                    M.j(Dt, 1, null);
                                    var SA = M.j(Ct, 1, null), Et = tx(d, RA, f + 1), TA = M.j(Et, 0, null), UA = M.j(Et, 1, null), jj = a;
                                    Y(jj, q(Hf) ? SA : 1);
                                    Yw(jj);
                                    jj.moveTo(Vd, Wd);
                                    jj.lineTo(TA + 1, UA);
                                    Zw(jj);
                                    Ro = E(ij);
                                    So = null;
                                    To = 0;
                                  }
                                  gj = 0;
                                } else {
                                  break;
                                }
                              }
                            }
                            Y(a, 1);
                            Lo = E(fj);
                            Mo = null;
                            No = 0;
                          }
                          aj = 0;
                        } else {
                          break;
                        }
                      }
                    }
                    $i += 1;
                  } else {
                    var Ft = z(Io);
                    if (Ft) {
                      var kj = Ft;
                      if (P(kj)) {
                        var Gt = v(kj), VA = w(kj), WA = Gt, XA = L(Gt), Io = VA, Jo = WA, Ko = XA
                      } else {
                        for (var Hl = A(kj), Uo = z(dg.h(q(lt) ? new Q(null, 1, 5, R, [Qm], null) : null, new Q(null, 1, 5, R, [vn], null))), Vo = null, Wo = 0, lj = 0;;) {
                          if (lj < Wo) {
                            var YA = Vo.B(null, lj), ZA = function() {
                              var a = new Q(null, 2, 5, R, [YA, Hl], null);
                              return gb.g ? gb.g(a) : gb.call(null, a);
                            }();
                            ex(a, function() {
                              var a = Hl;
                              return Z.g ? Z.g(a) : Z.call(null, a);
                            }());
                            for (var Xo = z(ZA), Yo = null, Zo = 0, mj = 0;;) {
                              if (mj < Zo) {
                                var Ht = Yo.B(null, mj), It = M.j(Ht, 0, null), $A = M.j(It, 0, null);
                                M.j(It, 1, null);
                                var aB = M.j(Ht, 1, null), Jt = tx(d, $A, f + 1), bB = M.j(Jt, 0, null), cB = M.j(Jt, 1, null), nj = a;
                                Y(nj, q(Hf) ? aB : 1);
                                Yw(nj);
                                nj.moveTo(Vd, Wd);
                                nj.lineTo(bB + 1, cB);
                                Zw(nj);
                                mj += 1;
                              } else {
                                var Kt = z(Xo);
                                if (Kt) {
                                  var oj = Kt;
                                  if (P(oj)) {
                                    var Lt = v(oj), dB = w(oj), eB = Lt, fB = L(Lt), Xo = dB, Yo = eB, Zo = fB
                                  } else {
                                    var Mt = A(oj), Nt = M.j(Mt, 0, null), gB = M.j(Nt, 0, null);
                                    M.j(Nt, 1, null);
                                    var hB = M.j(Mt, 1, null), Ot = tx(d, gB, f + 1), iB = M.j(Ot, 0, null), jB = M.j(Ot, 1, null), pj = a;
                                    Y(pj, q(Hf) ? hB : 1);
                                    Yw(pj);
                                    pj.moveTo(Vd, Wd);
                                    pj.lineTo(iB + 1, jB);
                                    Zw(pj);
                                    Xo = E(oj);
                                    Yo = null;
                                    Zo = 0;
                                  }
                                  mj = 0;
                                } else {
                                  break;
                                }
                              }
                            }
                            Y(a, 1);
                            lj += 1;
                          } else {
                            var Pt = z(Uo);
                            if (Pt) {
                              var qj = Pt;
                              if (P(qj)) {
                                var Qt = v(qj), kB = w(qj), lB = Qt, mB = L(Qt), Uo = kB, Vo = lB, Wo = mB
                              } else {
                                var nB = A(qj), oB = function() {
                                  var a = new Q(null, 2, 5, R, [nB, Hl], null);
                                  return gb.g ? gb.g(a) : gb.call(null, a);
                                }();
                                ex(a, function() {
                                  var a = Hl;
                                  return Z.g ? Z.g(a) : Z.call(null, a);
                                }());
                                for (var $o = z(oB), ap = null, bp = 0, rj = 0;;) {
                                  if (rj < bp) {
                                    var Rt = ap.B(null, rj), St = M.j(Rt, 0, null), pB = M.j(St, 0, null);
                                    M.j(St, 1, null);
                                    var qB = M.j(Rt, 1, null), Tt = tx(d, pB, f + 1), rB = M.j(Tt, 0, null), sB = M.j(Tt, 1, null), sj = a;
                                    Y(sj, q(Hf) ? qB : 1);
                                    Yw(sj);
                                    sj.moveTo(Vd, Wd);
                                    sj.lineTo(rB + 1, sB);
                                    Zw(sj);
                                    rj += 1;
                                  } else {
                                    var Ut = z($o);
                                    if (Ut) {
                                      var tj = Ut;
                                      if (P(tj)) {
                                        var Vt = v(tj), tB = w(tj), uB = Vt, vB = L(Vt), $o = tB, ap = uB, bp = vB
                                      } else {
                                        var Wt = A(tj), Xt = M.j(Wt, 0, null), wB = M.j(Xt, 0, null);
                                        M.j(Xt, 1, null);
                                        var xB = M.j(Wt, 1, null), Yt = tx(d, wB, f + 1), yB = M.j(Yt, 0, null), zB = M.j(Yt, 1, null), uj = a;
                                        Y(uj, q(Hf) ? xB : 1);
                                        Yw(uj);
                                        uj.moveTo(Vd, Wd);
                                        uj.lineTo(yB + 1, zB);
                                        Zw(uj);
                                        $o = E(tj);
                                        ap = null;
                                        bp = 0;
                                      }
                                      rj = 0;
                                    } else {
                                      break;
                                    }
                                  }
                                }
                                Y(a, 1);
                                Uo = E(qj);
                                Vo = null;
                                Wo = 0;
                              }
                              lj = 0;
                            } else {
                              break;
                            }
                          }
                        }
                        Io = E(kj);
                        Jo = null;
                        Ko = 0;
                      }
                      $i = 0;
                    } else {
                      break;
                    }
                  }
                }
              }
              Zi += 1;
            } else {
              var Zt = z(Do);
              if (Zt) {
                var vj = Zt;
                if (P(vj)) {
                  var $t = v(vj), AB = w(vj), BB = $t, CB = L($t), Do = AB, Eo = BB, Fo = CB
                } else {
                  var au = A(vj), Il = M.j(au, 0, null), hb = M.j(au, 1, null), bu = H.yb(null, ye, Il), Xd = M.j(bu, 0, null), Yd = M.j(bu, 1, null), cp = L(function() {
                    var a = new Q(null, 2, 5, R, [vn, Vp], null);
                    return hb.g ? hb.g(a) : hb.call(null, a);
                  }()), DB = cp + L(function() {
                    var a = new Q(null, 2, 5, R, [vn, tm], null);
                    return hb.g ? hb.g(a) : hb.call(null, a);
                  }()), cu = L(function() {
                    var a = new Q(null, 2, 5, R, [Qm, Vp], null);
                    return hb.g ? hb.g(a) : hb.call(null, a);
                  }()), EB = cu + L(function() {
                    var a = new Q(null, 2, 5, R, [Qm, tm], null);
                    return hb.g ? hb.g(a) : hb.call(null, a);
                  }()), FB = function() {
                    var a = cp / m;
                    return 1 > a ? a : 1;
                  }(), du = function() {
                    var a = Gf;
                    return q(a) ? x.h(Il, sh) : a;
                  }(), dp = wx(Xd, Yd, qa, G), GB = wx(Xd, Yd, qa + 8, G + 8);
                  if (q(du)) {
                    var eu = a;
                    dx(eu, Xm.g(Z));
                    bx(eu, GB);
                  }
                  var Ae = a;
                  Y(Ae, 1);
                  ex(Ae, "black");
                  Ae.lineWidth = 1;
                  ax(Ae, dp);
                  dx(Ae, "white");
                  bx(Ae, dp);
                  Y(Ae, FB);
                  dx(Ae, Vp.g(Z));
                  bx(Ae, dp);
                  Y(Ae, 1);
                  if (dt(hb)) {
                    var fu = a;
                    ex(fu, Vp.g(Z));
                    fu.lineWidth = 2;
                    H.gb(null, a, ye, Il);
                  }
                  dx(a, "black");
                  cx(a, new Ka(null, 3, [Yq, "[" + u.g(Il) + "],  active " + u.g(cp) + " / " + u.g(DB) + " conn. (" + u.g(cu) + " / " + u.g(EB) + " disconn.)", tq, Xd + 5 + S, um, Yd], null));
                  a.lineWidth = 1;
                  var If = Zg.h(k, new Q(null, 2, 5, R, [Tm, Nq], null)), HB = Zg.h(k, new Q(null, 2, 5, R, [Tm, Vp], null)), IB = Zg.h(k, new Q(null, 2, 5, R, [Tm, tm], null)), gu = Zg.h(k, new Q(null, 2, 5, R, [Tm, Qm], null)), hu = Zg.h(k, new Q(null, 2, 5, R, [Tm, Up], null));
                  if (q(function() {
                    var a = x.h(hu, Kn);
                    return a ? a : (a = x.h(hu, Ap)) ? du : a;
                  }())) {
                    for (var ep = z(dg.h(q(IB) ? new Q(null, 1, 5, R, [Gq], null) : null, q(HB) ? new Q(null, 1, 5, R, [Vp], null) : null)), fp = null, gp = 0, wj = 0;;) {
                      if (wj < gp) {
                        for (var Jl = fp.B(null, wj), hp = z(dg.h(q(gu) ? new Q(null, 1, 5, R, [Qm], null) : null, new Q(null, 1, 5, R, [vn], null))), ip = null, jp = 0, xj = 0;;) {
                          if (xj < jp) {
                            var JB = ip.B(null, xj), KB = function() {
                              var a = new Q(null, 2, 5, R, [JB, Jl], null);
                              return hb.g ? hb.g(a) : hb.call(null, a);
                            }();
                            ex(a, function() {
                              var a = Jl;
                              return Z.g ? Z.g(a) : Z.call(null, a);
                            }());
                            for (var kp = z(KB), lp = null, mp = 0, yj = 0;;) {
                              if (yj < mp) {
                                var iu = lp.B(null, yj), ju = M.j(iu, 0, null), LB = M.j(ju, 0, null);
                                M.j(ju, 1, null);
                                var MB = M.j(iu, 1, null), ku = tx(d, LB, f + 1), NB = M.j(ku, 0, null), OB = M.j(ku, 1, null), zj = a;
                                Y(zj, q(If) ? MB : 1);
                                Yw(zj);
                                zj.moveTo(Xd, Yd);
                                zj.lineTo(NB + 1, OB);
                                Zw(zj);
                                yj += 1;
                              } else {
                                var lu = z(kp);
                                if (lu) {
                                  var Aj = lu;
                                  if (P(Aj)) {
                                    var mu = v(Aj), PB = w(Aj), QB = mu, RB = L(mu), kp = PB, lp = QB, mp = RB
                                  } else {
                                    var nu = A(Aj), ou = M.j(nu, 0, null), SB = M.j(ou, 0, null);
                                    M.j(ou, 1, null);
                                    var TB = M.j(nu, 1, null), pu = tx(d, SB, f + 1), UB = M.j(pu, 0, null), VB = M.j(pu, 1, null), Bj = a;
                                    Y(Bj, q(If) ? TB : 1);
                                    Yw(Bj);
                                    Bj.moveTo(Xd, Yd);
                                    Bj.lineTo(UB + 1, VB);
                                    Zw(Bj);
                                    kp = E(Aj);
                                    lp = null;
                                    mp = 0;
                                  }
                                  yj = 0;
                                } else {
                                  break;
                                }
                              }
                            }
                            Y(a, 1);
                            xj += 1;
                          } else {
                            var qu = z(hp);
                            if (qu) {
                              var Cj = qu;
                              if (P(Cj)) {
                                var ru = v(Cj), WB = w(Cj), XB = ru, YB = L(ru), hp = WB, ip = XB, jp = YB
                              } else {
                                var ZB = A(Cj), $B = function() {
                                  var a = new Q(null, 2, 5, R, [ZB, Jl], null);
                                  return hb.g ? hb.g(a) : hb.call(null, a);
                                }();
                                ex(a, function() {
                                  var a = Jl;
                                  return Z.g ? Z.g(a) : Z.call(null, a);
                                }());
                                for (var np = z($B), op = null, pp = 0, Dj = 0;;) {
                                  if (Dj < pp) {
                                    var su = op.B(null, Dj), tu = M.j(su, 0, null), aC = M.j(tu, 0, null);
                                    M.j(tu, 1, null);
                                    var bC = M.j(su, 1, null), uu = tx(d, aC, f + 1), cC = M.j(uu, 0, null), dC = M.j(uu, 1, null), Ej = a;
                                    Y(Ej, q(If) ? bC : 1);
                                    Yw(Ej);
                                    Ej.moveTo(Xd, Yd);
                                    Ej.lineTo(cC + 1, dC);
                                    Zw(Ej);
                                    Dj += 1;
                                  } else {
                                    var vu = z(np);
                                    if (vu) {
                                      var Fj = vu;
                                      if (P(Fj)) {
                                        var wu = v(Fj), eC = w(Fj), fC = wu, gC = L(wu), np = eC, op = fC, pp = gC
                                      } else {
                                        var xu = A(Fj), yu = M.j(xu, 0, null), hC = M.j(yu, 0, null);
                                        M.j(yu, 1, null);
                                        var iC = M.j(xu, 1, null), zu = tx(d, hC, f + 1), jC = M.j(zu, 0, null), kC = M.j(zu, 1, null), Gj = a;
                                        Y(Gj, q(If) ? iC : 1);
                                        Yw(Gj);
                                        Gj.moveTo(Xd, Yd);
                                        Gj.lineTo(jC + 1, kC);
                                        Zw(Gj);
                                        np = E(Fj);
                                        op = null;
                                        pp = 0;
                                      }
                                      Dj = 0;
                                    } else {
                                      break;
                                    }
                                  }
                                }
                                Y(a, 1);
                                hp = E(Cj);
                                ip = null;
                                jp = 0;
                              }
                              xj = 0;
                            } else {
                              break;
                            }
                          }
                        }
                        wj += 1;
                      } else {
                        var Au = z(ep);
                        if (Au) {
                          var Hj = Au;
                          if (P(Hj)) {
                            var Bu = v(Hj), lC = w(Hj), mC = Bu, nC = L(Bu), ep = lC, fp = mC, gp = nC
                          } else {
                            for (var Kl = A(Hj), qp = z(dg.h(q(gu) ? new Q(null, 1, 5, R, [Qm], null) : null, new Q(null, 1, 5, R, [vn], null))), rp = null, sp = 0, Ij = 0;;) {
                              if (Ij < sp) {
                                var oC = rp.B(null, Ij), pC = function() {
                                  var a = new Q(null, 2, 5, R, [oC, Kl], null);
                                  return hb.g ? hb.g(a) : hb.call(null, a);
                                }();
                                ex(a, function() {
                                  var a = Kl;
                                  return Z.g ? Z.g(a) : Z.call(null, a);
                                }());
                                for (var tp = z(pC), up = null, vp = 0, Jj = 0;;) {
                                  if (Jj < vp) {
                                    var Cu = up.B(null, Jj), Du = M.j(Cu, 0, null), qC = M.j(Du, 0, null);
                                    M.j(Du, 1, null);
                                    var rC = M.j(Cu, 1, null), Eu = tx(d, qC, f + 1), sC = M.j(Eu, 0, null), tC = M.j(Eu, 1, null), Kj = a;
                                    Y(Kj, q(If) ? rC : 1);
                                    Yw(Kj);
                                    Kj.moveTo(Xd, Yd);
                                    Kj.lineTo(sC + 1, tC);
                                    Zw(Kj);
                                    Jj += 1;
                                  } else {
                                    var Fu = z(tp);
                                    if (Fu) {
                                      var Lj = Fu;
                                      if (P(Lj)) {
                                        var Gu = v(Lj), uC = w(Lj), vC = Gu, wC = L(Gu), tp = uC, up = vC, vp = wC
                                      } else {
                                        var Hu = A(Lj), Iu = M.j(Hu, 0, null), xC = M.j(Iu, 0, null);
                                        M.j(Iu, 1, null);
                                        var yC = M.j(Hu, 1, null), Ju = tx(d, xC, f + 1), zC = M.j(Ju, 0, null), AC = M.j(Ju, 1, null), Mj = a;
                                        Y(Mj, q(If) ? yC : 1);
                                        Yw(Mj);
                                        Mj.moveTo(Xd, Yd);
                                        Mj.lineTo(zC + 1, AC);
                                        Zw(Mj);
                                        tp = E(Lj);
                                        up = null;
                                        vp = 0;
                                      }
                                      Jj = 0;
                                    } else {
                                      break;
                                    }
                                  }
                                }
                                Y(a, 1);
                                Ij += 1;
                              } else {
                                var Ku = z(qp);
                                if (Ku) {
                                  var Nj = Ku;
                                  if (P(Nj)) {
                                    var Lu = v(Nj), BC = w(Nj), CC = Lu, DC = L(Lu), qp = BC, rp = CC, sp = DC
                                  } else {
                                    var EC = A(Nj), FC = function() {
                                      var a = new Q(null, 2, 5, R, [EC, Kl], null);
                                      return hb.g ? hb.g(a) : hb.call(null, a);
                                    }();
                                    ex(a, function() {
                                      var a = Kl;
                                      return Z.g ? Z.g(a) : Z.call(null, a);
                                    }());
                                    for (var wp = z(FC), xp = null, yp = 0, Oj = 0;;) {
                                      if (Oj < yp) {
                                        var Mu = xp.B(null, Oj), Nu = M.j(Mu, 0, null), GC = M.j(Nu, 0, null);
                                        M.j(Nu, 1, null);
                                        var HC = M.j(Mu, 1, null), Ou = tx(d, GC, f + 1), IC = M.j(Ou, 0, null), JC = M.j(Ou, 1, null), Pj = a;
                                        Y(Pj, q(If) ? HC : 1);
                                        Yw(Pj);
                                        Pj.moveTo(Xd, Yd);
                                        Pj.lineTo(IC + 1, JC);
                                        Zw(Pj);
                                        Oj += 1;
                                      } else {
                                        var Pu = z(wp);
                                        if (Pu) {
                                          var Qj = Pu;
                                          if (P(Qj)) {
                                            var Qu = v(Qj), KC = w(Qj), LC = Qu, MC = L(Qu), wp = KC, xp = LC, yp = MC
                                          } else {
                                            var Ru = A(Qj), Su = M.j(Ru, 0, null), NC = M.j(Su, 0, null);
                                            M.j(Su, 1, null);
                                            var OC = M.j(Ru, 1, null), Tu = tx(d, NC, f + 1), PC = M.j(Tu, 0, null), QC = M.j(Tu, 1, null), Rj = a;
                                            Y(Rj, q(If) ? OC : 1);
                                            Yw(Rj);
                                            Rj.moveTo(Xd, Yd);
                                            Rj.lineTo(PC + 1, QC);
                                            Zw(Rj);
                                            wp = E(Qj);
                                            xp = null;
                                            yp = 0;
                                          }
                                          Oj = 0;
                                        } else {
                                          break;
                                        }
                                      }
                                    }
                                    Y(a, 1);
                                    qp = E(Nj);
                                    rp = null;
                                    sp = 0;
                                  }
                                  Ij = 0;
                                } else {
                                  break;
                                }
                              }
                            }
                            ep = E(Hj);
                            fp = null;
                            gp = 0;
                          }
                          wj = 0;
                        } else {
                          break;
                        }
                      }
                    }
                  }
                  Do = E(vj);
                  Eo = null;
                  Fo = 0;
                }
                Zi = 0;
              } else {
                break;
              }
            }
          }
          cb = E(xg);
          Bb = null;
          kb = 0;
        }
        rc = 0;
      } else {
        break;
      }
    }
  }
  a.restore();
}
function Ox(a) {
  var b = Ze(a) ? Fe.h(Fg, a) : a, c = O.h(b, kn), d = O.h(b, Bp), e = O.h(b, Wp), f = M.h(K.g ? K.g(Dx) : K.call(null, Dx), c), g = Vu(f), k = M.h(g, d), l = Mq.g(k), m = A(Wu(f)), p = ov(m), t = Yu(m, 0);
  return Fe.h(u, Rg(Wg(new Q(null, 29, 5, R, ["__Selection__", "* timestep " + u.g(pv(k)) + " (delay " + u.g(c) + ")", "* column " + u.g(q(e) ? e : "nil"), "", "__Input__", "" + u.g(p) + " (" + u.g(L(t)) + " bits)", "", "__Active columns__", "" + u.g(ff.g(dv(l))), "", "__Active cells__", "" + u.g(ff.g(ev(l))), "", "__Learnable cells__", "" + u.g(ff.g(fv(l))), "", "__Learning segments__", "" + u.g(ff.g(bn.g(l))), "", "__Signal cells__", "" + u.g(ff.g(gv(l))), "", "__Predicted cells__", "" + u.g(ff.g(iv(l))), 
  "", q(e) ? function() {
    var r = c + 1, y = M.h(K.g ? K.g(Dx) : K.call(null, Dx), r), B = M.h(Vu(y), d), C = Mq.g(B), F = En.g(C), I = eq.g(C), N = ev(C), H = function() {
      var a = fv(C);
      return q(a) ? a : Bk;
    }(), V = cn.g(qv(B));
    return new Q(null, 14, 5, R, ["__Active cells prev__", "" + u.g(ff.g(N)), "", "__Learn cells prev__", "" + u.g(ff.g(H)), "", "__Predicted cells prev__", "" + u.g(ff.g(iv(C))), "", "__Selected column__", "__Connected ff-synapses__", function() {
      var T = kv(F, e);
      return function(a, b, c, d, e, f, g, k, l, m, p, r, t, y, B, C, F, I, H, N, T, V, Fb, Xb, xc) {
        return function nd(Ld) {
          return new Sf(null, function(a, b, c, d, e, f, g, k, l, m, p, r) {
            return function() {
              for (;;) {
                var a = z(Ld);
                if (a) {
                  if (P(a)) {
                    var b = v(a), c = L(b), d = Wf(c);
                    return function() {
                      for (var a = 0;;) {
                        if (a < c) {
                          var e = ob.h(b, a), f = M.j(e, 0, null), e = M.j(e, 1, null);
                          $f(d, "  " + u.g(f) + " :\x3d\x3e " + u.g(Vw("%.2f", e)) + u.g(q(function() {
                            var a = f;
                            return r.g ? r.g(a) : r.call(null, a);
                          }()) ? " S" : null) + u.g(q(function() {
                            var a = f;
                            return p.g ? p.g(a) : p.call(null, a);
                          }()) ? " A " : null));
                          a += 1;
                        } else {
                          return!0;
                        }
                      }
                    }() ? Zf(d.Q(), nd(w(a))) : Zf(d.Q(), null);
                  }
                  var e = A(a), f = M.j(e, 0, null), e = M.j(e, 1, null);
                  return he("  " + u.g(f) + " :\x3d\x3e " + u.g(Vw("%.2f", e)) + u.g(q(function() {
                    var a = f;
                    return r.g ? r.g(a) : r.call(null, a);
                  }()) ? " S" : null) + u.g(q(function() {
                    var a = f;
                    return p.g ? p.g(a) : p.call(null, a);
                  }()) ? " A " : null), nd(D(a)));
                }
                return null;
              }
            };
          }(a, b, c, d, e, f, g, k, l, m, p, r, t, y, B, C, F, I, H, N, T, V, Fb, Xb, xc), null, null);
        };
      }(T, r, y, B, C, F, I, N, H, V, Bk, Bk, f, g, k, l, m, p, t, a, b, b, c, d, e)(ff.g(T));
    }(), "__Cells and their Dendrite segments__", function() {
      return function(a, b, c, d, e, f, g, k, l, m, p, r, t, y, B, C, F, I, H, N, V, hc, yb, Fb) {
        return function xc(W) {
          return new Sf(null, function(a, b, c, d, e, f, g, k, l, m, p, r, G, t, y, B, C, F, S, I, H, N, qa, T) {
            return function() {
              for (;;) {
                var V = z(W);
                if (V) {
                  var $ = V;
                  if (P($)) {
                    var ka = v($), ta = L(ka), ua = Wf(ta);
                    return function() {
                      for (var W = 0;;) {
                        if (W < ta) {
                          var aa = ob.h(ka, W), ea = nv(f, new Q(null, 2, 5, R, [T, aa], null));
                          $f(ua, new Q(null, 4, 5, R, ["CELL " + u.g(aa), "" + u.g(L(ea)) + " \x3d " + u.g(Lg.h(L, ea)), "Lateral excitation from this cell: " + u.g(mv(f, new Q(null, 2, 5, R, [T, aa], null))), function() {
                            return function(a, b, c, d, e, f, g, k, l, m, p, r, G, t, y, B, C, F, S, I, H, N, qa, T, V, aa, W, $, ka, ea, ta, ua) {
                              return function dc(la) {
                                return new Sf(null, function(a, b, c, d, e, f, g, k, l, m, p, r, G, t, y, B, C, F, S, I, H, N, Ja, qa, T, V, aa, W, $, ka, ea, ta) {
                                  return function() {
                                    for (;;) {
                                      var ua = z(la);
                                      if (ua) {
                                        var ja = ua;
                                        if (P(ja)) {
                                          var sa = v(ja), Ha = L(sa), Da = Wf(Ha);
                                          return function() {
                                            for (var la = 0;;) {
                                              if (la < Ha) {
                                                var va = ob.h(sa, la), Ga = M.j(va, 0, null), Oa = M.j(va, 1, null);
                                                $f(Da, new Q(null, 2, 5, R, ["  SEGMENT " + u.g(Ga), function() {
                                                  return function(a, b, c, d, e, f, g, k, l, m, p, r, G, t, y, Ja, B, C, F, S, I, H, N, qa, T, V, aa, W, $, ka, ea, ua, ta, la, ja, sa, va, Da, Ga, Ha, Oa) {
                                                    return function wl(Ta) {
                                                      return new Sf(null, function(a, b, c, d, e, f, g, k, l, m, p, r, G, t, y, Ja, B, C, F, S, I, H, N, qa, T, V) {
                                                        return function() {
                                                          for (;;) {
                                                            var a = z(Ta);
                                                            if (a) {
                                                              if (P(a)) {
                                                                var b = v(a), c = L(b), d = Wf(c);
                                                                return function() {
                                                                  for (var a = 0;;) {
                                                                    if (a < c) {
                                                                      var e = ob.h(b, a), f = M.j(e, 0, null), e = M.j(e, 1, null);
                                                                      $f(d, "  " + u.g(f) + u.g(e >= V ? " :\x3d\x3e " : " :.: ") + u.g(Vw("%.2f", e)) + u.g(q(function() {
                                                                        var a = f;
                                                                        return T.g ? T.g(a) : T.call(null, a);
                                                                      }()) ? " L" : q(function() {
                                                                        var a = f;
                                                                        return qa.g ? qa.g(a) : qa.call(null, a);
                                                                      }()) ? " A" : null));
                                                                      a += 1;
                                                                    } else {
                                                                      return!0;
                                                                    }
                                                                  }
                                                                }() ? Zf(d.Q(), wl(w(a))) : Zf(d.Q(), null);
                                                              }
                                                              var e = A(a), f = M.j(e, 0, null), e = M.j(e, 1, null);
                                                              return he("  " + u.g(f) + u.g(e >= V ? " :\x3d\x3e " : " :.: ") + u.g(Vw("%.2f", e)) + u.g(q(function() {
                                                                var a = f;
                                                                return T.g ? T.g(a) : T.call(null, a);
                                                              }()) ? " L" : q(function() {
                                                                var a = f;
                                                                return qa.g ? qa.g(a) : qa.call(null, a);
                                                              }()) ? " A" : null), wl(D(a)));
                                                            }
                                                            return null;
                                                          }
                                                        };
                                                      }(a, b, c, d, e, f, g, k, l, m, p, r, G, t, y, Ja, B, C, F, S, I, H, N, qa, T, V, aa, W, $, ka, ea, ua, ta, la, ja, sa, va, Da, Ga, Ha, Oa), null, null);
                                                    };
                                                  }(la, a, va, Ga, Oa, sa, Ha, Da, ja, ua, b, c, d, e, f, g, k, l, m, p, r, G, t, y, B, C, F, S, I, H, N, Ja, qa, T, V, aa, W, $, ka, ea, ta)(ff.g(Oa));
                                                }()], null));
                                                la += 1;
                                              } else {
                                                return!0;
                                              }
                                            }
                                          }() ? Zf(Da.Q(), dc(w(ja))) : Zf(Da.Q(), null);
                                        }
                                        var va = A(ja), Ga = M.j(va, 0, null), Oa = M.j(va, 1, null);
                                        return he(new Q(null, 2, 5, R, ["  SEGMENT " + u.g(Ga), function() {
                                          return function(a, b, c, d, e, f, g, k, l, m, p, r, G, t, y, Ja, B, C, F, S, I, H, qa, N, T, V, aa, W, $, ka, ea, ua, ta, la, ja, sa, va) {
                                            return function vl(Da) {
                                              return new Sf(null, function(a, b, c, d, e, f, g, k, l, m, p, r, G, t, y, Ja, B, C, F, S, I, H) {
                                                return function() {
                                                  for (;;) {
                                                    var a = z(Da);
                                                    if (a) {
                                                      if (P(a)) {
                                                        var b = v(a), c = L(b), d = Wf(c);
                                                        return function() {
                                                          for (var a = 0;;) {
                                                            if (a < c) {
                                                              var e = ob.h(b, a), f = M.j(e, 0, null), e = M.j(e, 1, null);
                                                              $f(d, "  " + u.g(f) + u.g(e >= H ? " :\x3d\x3e " : " :.: ") + u.g(Vw("%.2f", e)) + u.g(q(function() {
                                                                var a = f;
                                                                return I.g ? I.g(a) : I.call(null, a);
                                                              }()) ? " L" : q(function() {
                                                                var a = f;
                                                                return S.g ? S.g(a) : S.call(null, a);
                                                              }()) ? " A" : null));
                                                              a += 1;
                                                            } else {
                                                              return!0;
                                                            }
                                                          }
                                                        }() ? Zf(d.Q(), vl(w(a))) : Zf(d.Q(), null);
                                                      }
                                                      var e = A(a), f = M.j(e, 0, null), e = M.j(e, 1, null);
                                                      return he("  " + u.g(f) + u.g(e >= H ? " :\x3d\x3e " : " :.: ") + u.g(Vw("%.2f", e)) + u.g(q(function() {
                                                        var a = f;
                                                        return I.g ? I.g(a) : I.call(null, a);
                                                      }()) ? " L" : q(function() {
                                                        var a = f;
                                                        return S.g ? S.g(a) : S.call(null, a);
                                                      }()) ? " A" : null), vl(D(a)));
                                                    }
                                                    return null;
                                                  }
                                                };
                                              }(a, b, c, d, e, f, g, k, l, m, p, r, G, t, y, Ja, B, C, F, S, I, H, qa, N, T, V, aa, W, $, ka, ea, ua, ta, la, ja, sa, va), null, null);
                                            };
                                          }(a, va, Ga, Oa, ja, ua, b, c, d, e, f, g, k, l, m, p, r, G, t, y, B, C, F, S, I, H, N, Ja, qa, T, V, aa, W, $, ka, ea, ta)(ff.g(Oa));
                                        }()], null), dc(D(ja)));
                                      }
                                      return null;
                                    }
                                  };
                                }(a, b, c, d, e, f, g, k, l, m, p, r, G, t, y, B, C, F, S, I, H, N, qa, T, V, aa, W, $, ka, ea, ta, ua), null, null);
                              };
                            }(W, ea, aa, ka, ta, ua, $, V, a, b, c, d, e, f, g, k, l, m, p, r, G, t, y, B, C, F, S, I, H, N, qa, T)(Cg(ea));
                          }()], null));
                          W += 1;
                        } else {
                          return!0;
                        }
                      }
                    }() ? Zf(ua.Q(), xc(w($))) : Zf(ua.Q(), null);
                  }
                  var ea = A($), la = nv(f, new Q(null, 2, 5, R, [T, ea], null));
                  return he(new Q(null, 4, 5, R, ["CELL " + u.g(ea), "" + u.g(L(la)) + " \x3d " + u.g(Lg.h(L, la)), "Lateral excitation from this cell: " + u.g(mv(f, new Q(null, 2, 5, R, [T, ea], null))), function() {
                    return function(a, b, c, d, e, f, g, k, l, m, p, r, G, t, y, B, C, F, S, I, H, qa, N, T, V, W, $, ka) {
                      return function Nc(ea) {
                        return new Sf(null, function(a, b, c, d, e, f, g, k, l, m, p, r, G, t, y, B, C, F, S, I, H, qa, N, T, V, W, $, aa) {
                          return function() {
                            for (;;) {
                              var ka = z(ea);
                              if (ka) {
                                var Ja = ka;
                                if (P(Ja)) {
                                  var ua = v(Ja), ta = L(ua), la = Wf(ta);
                                  return function() {
                                    for (var ea = 0;;) {
                                      if (ea < ta) {
                                        var ja = ob.h(ua, ea), sa = M.j(ja, 0, null), va = M.j(ja, 1, null);
                                        $f(la, new Q(null, 2, 5, R, ["  SEGMENT " + u.g(sa), function() {
                                          return function(a, b, c, d, e, f, g, k, l, m, p, r, G, t, y, Ja, B, C, F, S, I, H, qa, N, T, V, W, $, aa, ea, ka, ua, la, ta, ja, sa, va) {
                                            return function tl(Da) {
                                              return new Sf(null, function(a, b, c, d, e, f, g, k, l, m, p, r, G, t, y, Ja, B, C, F, S, I, H) {
                                                return function() {
                                                  for (;;) {
                                                    var a = z(Da);
                                                    if (a) {
                                                      if (P(a)) {
                                                        var b = v(a), c = L(b), d = Wf(c);
                                                        return function() {
                                                          for (var a = 0;;) {
                                                            if (a < c) {
                                                              var e = ob.h(b, a), f = M.j(e, 0, null), e = M.j(e, 1, null);
                                                              $f(d, "  " + u.g(f) + u.g(e >= H ? " :\x3d\x3e " : " :.: ") + u.g(Vw("%.2f", e)) + u.g(q(function() {
                                                                var a = f;
                                                                return I.g ? I.g(a) : I.call(null, a);
                                                              }()) ? " L" : q(function() {
                                                                var a = f;
                                                                return S.g ? S.g(a) : S.call(null, a);
                                                              }()) ? " A" : null));
                                                              a += 1;
                                                            } else {
                                                              return!0;
                                                            }
                                                          }
                                                        }() ? Zf(d.Q(), tl(w(a))) : Zf(d.Q(), null);
                                                      }
                                                      var e = A(a), f = M.j(e, 0, null), e = M.j(e, 1, null);
                                                      return he("  " + u.g(f) + u.g(e >= H ? " :\x3d\x3e " : " :.: ") + u.g(Vw("%.2f", e)) + u.g(q(function() {
                                                        var a = f;
                                                        return I.g ? I.g(a) : I.call(null, a);
                                                      }()) ? " L" : q(function() {
                                                        var a = f;
                                                        return S.g ? S.g(a) : S.call(null, a);
                                                      }()) ? " A" : null), tl(D(a)));
                                                    }
                                                    return null;
                                                  }
                                                };
                                              }(a, b, c, d, e, f, g, k, l, m, p, r, G, t, y, Ja, B, C, F, S, I, H, qa, N, T, V, W, $, aa, ea, ka, ua, la, ta, ja, sa, va), null, null);
                                            };
                                          }(ea, ja, sa, va, ua, ta, la, Ja, ka, a, b, c, d, e, f, g, k, l, m, p, r, G, t, y, B, C, F, S, I, H, qa, N, T, V, W, $, aa)(ff.g(va));
                                        }()], null));
                                        ea += 1;
                                      } else {
                                        return!0;
                                      }
                                    }
                                  }() ? Zf(la.Q(), Nc(w(Ja))) : Zf(la.Q(), null);
                                }
                                var ja = A(Ja), sa = M.j(ja, 0, null), va = M.j(ja, 1, null);
                                return he(new Q(null, 2, 5, R, ["  SEGMENT " + u.g(sa), function() {
                                  return function(a, b, c, d, e, f, g, k, l, m, p, r, G, t, y, Ja, B, C, S, I, F, H, qa, N, T, V, W, $, aa, ea, ka, ua, la) {
                                    return function rh(ta) {
                                      return new Sf(null, function(a, b, c, d, e, f, g, k, l, m, p, r, G, t, y, Ja, B, C) {
                                        return function() {
                                          for (;;) {
                                            var a = z(ta);
                                            if (a) {
                                              if (P(a)) {
                                                var b = v(a), c = L(b), d = Wf(c);
                                                return function() {
                                                  for (var a = 0;;) {
                                                    if (a < c) {
                                                      var e = ob.h(b, a), f = M.j(e, 0, null), e = M.j(e, 1, null);
                                                      $f(d, "  " + u.g(f) + u.g(e >= C ? " :\x3d\x3e " : " :.: ") + u.g(Vw("%.2f", e)) + u.g(q(function() {
                                                        var a = f;
                                                        return B.g ? B.g(a) : B.call(null, a);
                                                      }()) ? " L" : q(function() {
                                                        var a = f;
                                                        return Ja.g ? Ja.g(a) : Ja.call(null, a);
                                                      }()) ? " A" : null));
                                                      a += 1;
                                                    } else {
                                                      return!0;
                                                    }
                                                  }
                                                }() ? Zf(d.Q(), rh(w(a))) : Zf(d.Q(), null);
                                              }
                                              var e = A(a), f = M.j(e, 0, null), e = M.j(e, 1, null);
                                              return he("  " + u.g(f) + u.g(e >= C ? " :\x3d\x3e " : " :.: ") + u.g(Vw("%.2f", e)) + u.g(q(function() {
                                                var a = f;
                                                return B.g ? B.g(a) : B.call(null, a);
                                              }()) ? " L" : q(function() {
                                                var a = f;
                                                return Ja.g ? Ja.g(a) : Ja.call(null, a);
                                              }()) ? " A" : null), rh(D(a)));
                                            }
                                            return null;
                                          }
                                        };
                                      }(a, b, c, d, e, f, g, k, l, m, p, r, G, t, y, Ja, B, C, S, I, F, H, qa, N, T, V, W, $, aa, ea, ka, ua, la), null, null);
                                    };
                                  }(ja, sa, va, Ja, ka, a, b, c, d, e, f, g, k, l, m, p, r, G, t, y, B, C, F, S, I, H, qa, N, T, V, W, $, aa)(ff.g(va));
                                }()], null), Nc(D(Ja)));
                              }
                              return null;
                            }
                          };
                        }(a, b, c, d, e, f, g, k, l, m, p, r, G, t, y, B, C, F, S, I, H, qa, N, T, V, W, $, ka), null, null);
                      };
                    }(la, ea, $, V, a, b, c, d, e, f, g, k, l, m, p, r, G, t, y, B, C, F, S, I, H, N, qa, T)(Cg(la));
                  }()], null), xc(D($)));
                }
                return null;
              }
            };
          }(a, b, c, d, e, f, g, k, l, m, p, r, t, y, B, C, F, I, H, N, V, hc, yb, Fb), null, null);
        };
      }(r, y, B, C, F, I, N, H, V, Bk, Bk, f, g, k, l, m, p, t, a, b, b, c, d, e)(Ik.g(av(l)));
    }()], null);
  }() : null, "", "__spec__", ff.g(qv(k))], null))));
}
function Px(a) {
  var b = Ze(a) ? Fe.h(Fg, a) : a;
  a = O.h(b, Tp);
  var b = O.h(b, en), c = cr(new Q(null, 1, 5, R, [Mn], null));
  c.width = b;
  c.height = a;
  return c;
}
function Qx(a) {
  var b = Px(jx(a)), c = Xw(b), d = ox(a);
  dx(c, sn.g(Z));
  ux(c, a, Ik.h(d, d + nx(a)));
  return b;
}
function Rx(a, b) {
  var c = Px(jx(a)), d = Xw(c), e = Yu(b, 0);
  dx(d, Vp.g(Z));
  ux(d, a, e);
  return c;
}
function Sx(a, b) {
  var c = Px(jx(a)), d = Xw(c), e = Dk(Lg.h(A, iv(Mq.g(b)))), f = Qv.h(b, e), e = Dv(function() {
    return function(a) {
      a /= 8;
      return 1 < a ? 1 : a;
    };
  }(c, d, e, f), f);
  dx(d, vq.g(Z));
  vx(d, a, e);
  return c;
}
function Tx(a, b) {
  var c = Px(jx(a)), d = Xw(c), e = dv(Mq.g(b));
  dx(d, Vp.g(Z));
  ux(d, a, e);
  return c;
}
function Ux(a, b) {
  var c = Px(jx(a)), d = Xw(c), e = Dk(Lg.h(A, jv(Mq.g(b))));
  dx(d, vq.g(Z));
  ux(d, a, e);
  return c;
}
function Vx(a, b) {
  var c = Px(jx(a)), d = Xw(c), e = Lg.h(A, hv(Mq.g(b)));
  dx(d, Mm.g(Z));
  ux(d, a, e);
  return c;
}
function Wx(a, b) {
  var c = Px(jx(a)), d = Xw(c), e = Dv(function() {
    return function(a) {
      a /= 16;
      return 1 < a ? 1 : a;
    };
  }(c, d), bv(Mq.g(b)));
  dx(d, "black");
  vx(d, a, e);
  return c;
}
function Xx(a, b, c) {
  return Xa.j(function(b, e) {
    return b + Cv(z, Fv(a, new Q(null, 2, 5, R, [c, e], null)));
  }, 0, Ik.g(b));
}
function Yx(a, b) {
  var c = Px(jx(a)), d = Xw(c), e = Mq.g(b), f = eq.g(e), g = xv(rv(e)), k = av(e), l = ox(a), m = Ik.h(l, l + nx(a)), e = Ek(m, Lg.h(function() {
    return function(a) {
      a /= 16;
      return 1 < a ? 1 : a;
    };
  }(c, d, e, f, g, k, l, m), Lg.h(function(a, b, c, d, e, f) {
    return function(a) {
      return Xx(d, f, a);
    };
  }(c, d, e, f, g, k, l, m), m)));
  dx(d, "black");
  vx(d, a, e);
  return c;
}
function Zx(a) {
  return "Showing " + u.g(ox(a)) + "--" + u.g(ox(a) + nx(a) + -1) + " of " + u.g(xv(Vm.g(a)));
}
function $x() {
  var a = K.g ? K.g(ay) : K.call(null, ay), b = Ze(a) ? Fe.h(Fg, a) : a, c = O.h(b, kn), d = O.h(b, Bp), e = O.h(b, Wp);
  fr.h("#detail-text", q(e) ? Ox(b) : "Select a column (by clicking on it) to see details.");
  var f = K.g ? K.g(Bx) : K.call(null, Bx), g = Aq.g(K.g ? K.g(Ex) : K.call(null, Ex)), k = pn.g(K.g ? K.g(Ex) : K.call(null, Ex)), l = Zg.h(f, new Q(null, 2, 5, R, [oq, yn], null)), m = M.h(K.g ? K.g(Dx) : K.call(null, Dx), c), p = M.j(K.g ? K.g(Dx) : K.call(null, Dx), c + 1, null), t = cr("#comportex-viz"), r = Xw(t), y = Qx(g), B = Lg.h(Qx, k), C = sx(le(k)) + Zg.h(f, new Q(null, 2, 5, R, [oq, $m], null));
  $w(r, new Ka(null, 4, [tq, 0, um, 0, en, t.width, Tp, 900], null));
  r.textBaseline = Qf(Um);
  cx(r, new Ka(null, 3, [Yq, "Input on selected timestep.", tq, 2, um, 0], null));
  cx(r, new Ka(null, 3, [Yq, "Encoded bits.", tq, tq.g(jx(g)), um, 0], null));
  cx(r, new Ka(null, 3, [Yq, Zx(g), tq, tq.g(jx(g)), um, 10], null));
  for (var F = z(Cg(k)), I = null, N = 0, H = 0;;) {
    if (H < N) {
      var V = I.B(null, H), T = M.j(V, 0, null), G = M.j(V, 1, null);
      cx(r, new Ka(null, 3, [Yq, "Region " + u.g(T) + " columns.", tq, tq.g(jx(G)), um, 0], null));
      cx(r, new Ka(null, 3, [Yq, Zx(G), tq, tq.g(jx(G)), um, 10], null));
      H += 1;
    } else {
      var qa = z(F);
      if (qa) {
        var S = qa;
        if (P(S)) {
          var ea = v(S), ka = w(S), Da = ea, la = L(ea), F = ka, I = Da, N = la
        } else {
          var Oa = A(S), ta = M.j(Oa, 0, null), ua = M.j(Oa, 1, null);
          cx(r, new Ka(null, 3, [Yq, "Region " + u.g(ta) + " columns.", tq, tq.g(jx(ua)), um, 0], null));
          cx(r, new Ka(null, 3, [Yq, Zx(ua), tq, tq.g(jx(ua)), um, 10], null));
          F = E(S);
          I = null;
          N = 0;
        }
        H = 0;
      } else {
        break;
      }
    }
  }
  var Ta = C + Zg.h(f, new Q(null, 2, 5, R, [oq, Jm], null));
  cx(r, new Ka(null, 3, [Yq, "Segments. " + u.g(q(e) ? "(arrows keys to move)" : "(click on a column)") + " Page up / page down to scroll columns.", tq, Ta, um, 0], null));
  var va = Zg.h(f, new Q(null, 2, 5, R, [oq, cq], null)), Ga = A(Wu(m)), ib = A(Vu(m)), rb = Fq.g(Ga);
  q(rb) && (rb.va ? rb.va(Ga, r, 0, 30, va, 870, ib) : rb.call(null, Ga, r, 0, 30, va, 870, ib));
  for (var Eb = z(Ik.g(function() {
    var a = L(K.g ? K.g(Dx) : K.call(null, Dx));
    return l < a ? l : a;
  }())), Ha = null, eb = 0, ab = 0;;) {
    if (ab < eb) {
      var $ = Ha.B(null, ab), hc = M.h(K.g ? K.g(Dx) : K.call(null, Dx), $), yb = M.j(K.g ? K.g(Dx) : K.call(null, Dx), $ + 1, null), Fb = q(yb) ? A(Vu(yb)) : null, Xb = Vu(hc), xc = A(Wu(hc)), W = Jq.g(Ge(hc));
      if (1 === L(sv(rv(xc))) || $ === c) {
        Fx(r, g, $, y), q(Zg.h(f, new Q(null, 2, 5, R, [Aq, Vp], null))) && Fx(r, g, $, O.h(x.h(Aq.g(f), Aq.g(bq.g(function() {
          var a = W;
          return K.g ? K.g(a) : K.call(null, a);
        }()))) ? function() {
          var a = W;
          return K.g ? K.g(a) : K.call(null, a);
        }() : Kg.n(W, Be, Gn, Rx(g, xc)), Gn)), q(function() {
          var a = Zg.h(f, new Q(null, 2, 5, R, [Aq, vq], null));
          return q(a) ? Fb : a;
        }()) && Fx(r, g, $, O.h(x.h(Aq.g(f), Aq.g(bq.g(function() {
          var a = W;
          return K.g ? K.g(a) : K.call(null, a);
        }()))) ? function() {
          var a = W;
          return K.g ? K.g(a) : K.call(null, a);
        }() : Kg.n(W, Be, Sp, Sx(g, Fb)), Sp));
      }
      for (var nd = z(Lg.l(Dg, Ik.v(), k, Xb, J([B], 0))), Ld = null, od = 0, Wc = 0;;) {
        if (Wc < od) {
          var Md = Ld.B(null, Wc), Ib = M.j(Md, 0, null), Jb = M.j(Md, 1, null), nc = M.j(Md, 2, null), Kb = M.j(Md, 3, null);
          if (1 === L(sv(rv(nc))) || $ === c) {
            Fx(r, Jb, $, Kb), q(Zg.h(f, new Q(null, 2, 5, R, [dn, Yp], null))) && Fx(r, Jb, $, O.h(x.h(dn.g(f), dn.g(bq.g(function() {
              var a = W;
              return K.g ? K.g(a) : K.call(null, a);
            }()))) ? function() {
              var a = W;
              return K.g ? K.g(a) : K.call(null, a);
            }() : Kg.n(W, Be, new Q(null, 2, 5, R, [Oq, Ib], null), Wx(Jb, nc)), new Q(null, 2, 5, R, [Oq, Ib], null))), q(Zg.h(f, new Q(null, 2, 5, R, [dn, Bm], null))) && Fx(r, Jb, $, O.h(x.h(dn.g(f), dn.g(bq.g(function() {
              var a = W;
              return K.g ? K.g(a) : K.call(null, a);
            }()))) ? function() {
              var a = W;
              return K.g ? K.g(a) : K.call(null, a);
            }() : Kg.n(W, Be, new Q(null, 2, 5, R, [zp, Ib], null), Yx(Jb, nc)), new Q(null, 2, 5, R, [zp, Ib], null))), q(Zg.h(f, new Q(null, 2, 5, R, [dn, Vp], null))) && Fx(r, Jb, $, O.h(x.h(dn.g(f), dn.g(bq.g(function() {
              var a = W;
              return K.g ? K.g(a) : K.call(null, a);
            }()))) ? function() {
              var a = W;
              return K.g ? K.g(a) : K.call(null, a);
            }() : Kg.n(W, Be, new Q(null, 2, 5, R, [zn, Ib], null), Tx(Jb, nc)), new Q(null, 2, 5, R, [zn, Ib], null))), q(Zg.h(f, new Q(null, 2, 5, R, [dn, xn], null))) && Fx(r, Jb, $, O.h(x.h(dn.g(f), dn.g(bq.g(function() {
              var a = W;
              return K.g ? K.g(a) : K.call(null, a);
            }()))) ? function() {
              var a = W;
              return K.g ? K.g(a) : K.call(null, a);
            }() : Kg.n(W, Be, new Q(null, 2, 5, R, [fq, Ib], null), Ux(Jb, nc)), new Q(null, 2, 5, R, [fq, Ib], null))), q(Zg.h(f, new Q(null, 2, 5, R, [dn, Mm], null))) && Fx(r, Jb, $, O.h(x.h(dn.g(f), dn.g(bq.g(function() {
              var a = W;
              return K.g ? K.g(a) : K.call(null, a);
            }()))) ? function() {
              var a = W;
              return K.g ? K.g(a) : K.call(null, a);
            }() : Kg.n(W, Be, new Q(null, 2, 5, R, [Ep, Ib], null), Vx(Jb, nc)), new Q(null, 2, 5, R, [Ep, Ib], null)));
          }
          Wc += 1;
        } else {
          var oc = z(nd);
          if (oc) {
            var pc = oc;
            if (P(pc)) {
              var Xc = v(pc), pd = w(pc), yf = Xc, zf = L(Xc), nd = pd, Ld = yf, od = zf
            } else {
              var Nd = A(pc), qc = M.j(Nd, 0, null), cb = M.j(Nd, 1, null), Bb = M.j(Nd, 2, null), kb = M.j(Nd, 3, null);
              if (1 === L(sv(rv(Bb))) || $ === c) {
                Fx(r, cb, $, kb), q(Zg.h(f, new Q(null, 2, 5, R, [dn, Yp], null))) && Fx(r, cb, $, O.h(x.h(dn.g(f), dn.g(bq.g(function() {
                  var a = W;
                  return K.g ? K.g(a) : K.call(null, a);
                }()))) ? function() {
                  var a = W;
                  return K.g ? K.g(a) : K.call(null, a);
                }() : Kg.n(W, Be, new Q(null, 2, 5, R, [Oq, qc], null), Wx(cb, Bb)), new Q(null, 2, 5, R, [Oq, qc], null))), q(Zg.h(f, new Q(null, 2, 5, R, [dn, Bm], null))) && Fx(r, cb, $, O.h(x.h(dn.g(f), dn.g(bq.g(function() {
                  var a = W;
                  return K.g ? K.g(a) : K.call(null, a);
                }()))) ? function() {
                  var a = W;
                  return K.g ? K.g(a) : K.call(null, a);
                }() : Kg.n(W, Be, new Q(null, 2, 5, R, [zp, qc], null), Yx(cb, Bb)), new Q(null, 2, 5, R, [zp, qc], null))), q(Zg.h(f, new Q(null, 2, 5, R, [dn, Vp], null))) && Fx(r, cb, $, O.h(x.h(dn.g(f), dn.g(bq.g(function() {
                  var a = W;
                  return K.g ? K.g(a) : K.call(null, a);
                }()))) ? function() {
                  var a = W;
                  return K.g ? K.g(a) : K.call(null, a);
                }() : Kg.n(W, Be, new Q(null, 2, 5, R, [zn, qc], null), Tx(cb, Bb)), new Q(null, 2, 5, R, [zn, qc], null))), q(Zg.h(f, new Q(null, 2, 5, R, [dn, xn], null))) && Fx(r, cb, $, O.h(x.h(dn.g(f), dn.g(bq.g(function() {
                  var a = W;
                  return K.g ? K.g(a) : K.call(null, a);
                }()))) ? function() {
                  var a = W;
                  return K.g ? K.g(a) : K.call(null, a);
                }() : Kg.n(W, Be, new Q(null, 2, 5, R, [fq, qc], null), Ux(cb, Bb)), new Q(null, 2, 5, R, [fq, qc], null))), q(Zg.h(f, new Q(null, 2, 5, R, [dn, Mm], null))) && Fx(r, cb, $, O.h(x.h(dn.g(f), dn.g(bq.g(function() {
                  var a = W;
                  return K.g ? K.g(a) : K.call(null, a);
                }()))) ? function() {
                  var a = W;
                  return K.g ? K.g(a) : K.call(null, a);
                }() : Kg.n(W, Be, new Q(null, 2, 5, R, [Ep, qc], null), Vx(cb, Bb)), new Q(null, 2, 5, R, [Ep, qc], null)));
              }
              nd = E(pc);
              Ld = null;
              od = 0;
            }
            Wc = 0;
          } else {
            break;
          }
        }
      }
      jg.h(f, bq.g(function() {
        var a = W;
        return K.g ? K.g(a) : K.call(null, a);
      }())) && Kg.n(W, Be, bq, f);
      ab += 1;
    } else {
      var rc = z(Eb);
      if (rc) {
        var Yb = rc;
        if (P(Yb)) {
          var Rb = v(Yb), Od = w(Yb), qd = Rb, Ic = L(Rb), Eb = Od, Ha = qd, eb = Ic
        } else {
          var sa = A(Yb), Zb = M.h(K.g ? K.g(Dx) : K.call(null, Dx), sa), Yc = M.j(K.g ? K.g(Dx) : K.call(null, Dx), sa + 1, null), rd = q(Yc) ? A(Vu(Yc)) : null, Jc = Vu(Zb), yc = A(Wu(Zb)), aa = Jq.g(Ge(Zb));
          if (1 === L(sv(rv(yc))) || sa === c) {
            Fx(r, g, sa, y), q(Zg.h(f, new Q(null, 2, 5, R, [Aq, Vp], null))) && Fx(r, g, sa, O.h(x.h(Aq.g(f), Aq.g(bq.g(function() {
              var a = aa;
              return K.g ? K.g(a) : K.call(null, a);
            }()))) ? function() {
              var a = aa;
              return K.g ? K.g(a) : K.call(null, a);
            }() : Kg.n(aa, Be, Gn, Rx(g, yc)), Gn)), q(function() {
              var a = Zg.h(f, new Q(null, 2, 5, R, [Aq, vq], null));
              return q(a) ? rd : a;
            }()) && Fx(r, g, sa, O.h(x.h(Aq.g(f), Aq.g(bq.g(function() {
              var a = aa;
              return K.g ? K.g(a) : K.call(null, a);
            }()))) ? function() {
              var a = aa;
              return K.g ? K.g(a) : K.call(null, a);
            }() : Kg.n(aa, Be, Sp, Sx(g, rd)), Sp));
          }
          for (var Pd = z(Lg.l(Dg, Ik.v(), k, Jc, J([B], 0))), qe = null, Qd = 0, Lb = 0;;) {
            if (Lb < Qd) {
              var $b = qe.B(null, Lb), lb = M.j($b, 0, null), vb = M.j($b, 1, null), Kc = M.j($b, 2, null), sd = M.j($b, 3, null);
              if (1 === L(sv(rv(Kc))) || sa === c) {
                Fx(r, vb, sa, sd), q(Zg.h(f, new Q(null, 2, 5, R, [dn, Yp], null))) && Fx(r, vb, sa, O.h(x.h(dn.g(f), dn.g(bq.g(function() {
                  var a = aa;
                  return K.g ? K.g(a) : K.call(null, a);
                }()))) ? function() {
                  var a = aa;
                  return K.g ? K.g(a) : K.call(null, a);
                }() : Kg.n(aa, Be, new Q(null, 2, 5, R, [Oq, lb], null), Wx(vb, Kc)), new Q(null, 2, 5, R, [Oq, lb], null))), q(Zg.h(f, new Q(null, 2, 5, R, [dn, Bm], null))) && Fx(r, vb, sa, O.h(x.h(dn.g(f), dn.g(bq.g(function() {
                  var a = aa;
                  return K.g ? K.g(a) : K.call(null, a);
                }()))) ? function() {
                  var a = aa;
                  return K.g ? K.g(a) : K.call(null, a);
                }() : Kg.n(aa, Be, new Q(null, 2, 5, R, [zp, lb], null), Yx(vb, Kc)), new Q(null, 2, 5, R, [zp, lb], null))), q(Zg.h(f, new Q(null, 2, 5, R, [dn, Vp], null))) && Fx(r, vb, sa, O.h(x.h(dn.g(f), dn.g(bq.g(function() {
                  var a = aa;
                  return K.g ? K.g(a) : K.call(null, a);
                }()))) ? function() {
                  var a = aa;
                  return K.g ? K.g(a) : K.call(null, a);
                }() : Kg.n(aa, Be, new Q(null, 2, 5, R, [zn, lb], null), Tx(vb, Kc)), new Q(null, 2, 5, R, [zn, lb], null))), q(Zg.h(f, new Q(null, 2, 5, R, [dn, xn], null))) && Fx(r, vb, sa, O.h(x.h(dn.g(f), dn.g(bq.g(function() {
                  var a = aa;
                  return K.g ? K.g(a) : K.call(null, a);
                }()))) ? function() {
                  var a = aa;
                  return K.g ? K.g(a) : K.call(null, a);
                }() : Kg.n(aa, Be, new Q(null, 2, 5, R, [fq, lb], null), Ux(vb, Kc)), new Q(null, 2, 5, R, [fq, lb], null))), q(Zg.h(f, new Q(null, 2, 5, R, [dn, Mm], null))) && Fx(r, vb, sa, O.h(x.h(dn.g(f), dn.g(bq.g(function() {
                  var a = aa;
                  return K.g ? K.g(a) : K.call(null, a);
                }()))) ? function() {
                  var a = aa;
                  return K.g ? K.g(a) : K.call(null, a);
                }() : Kg.n(aa, Be, new Q(null, 2, 5, R, [Ep, lb], null), Vx(vb, Kc)), new Q(null, 2, 5, R, [Ep, lb], null)));
              }
              Lb += 1;
            } else {
              var re = z(Pd);
              if (re) {
                var zc = re;
                if (P(zc)) {
                  var ja = v(zc), Ie = w(zc), Sb = ja, ac = L(ja), Pd = Ie, qe = Sb, Qd = ac
                } else {
                  var Lc = A(zc), bc = M.j(Lc, 0, null), Tb = M.j(Lc, 1, null), cc = M.j(Lc, 2, null), Je = M.j(Lc, 3, null);
                  if (1 === L(sv(rv(cc))) || sa === c) {
                    Fx(r, Tb, sa, Je), q(Zg.h(f, new Q(null, 2, 5, R, [dn, Yp], null))) && Fx(r, Tb, sa, O.h(x.h(dn.g(f), dn.g(bq.g(function() {
                      var a = aa;
                      return K.g ? K.g(a) : K.call(null, a);
                    }()))) ? function() {
                      var a = aa;
                      return K.g ? K.g(a) : K.call(null, a);
                    }() : Kg.n(aa, Be, new Q(null, 2, 5, R, [Oq, bc], null), Wx(Tb, cc)), new Q(null, 2, 5, R, [Oq, bc], null))), q(Zg.h(f, new Q(null, 2, 5, R, [dn, Bm], null))) && Fx(r, Tb, sa, O.h(x.h(dn.g(f), dn.g(bq.g(function() {
                      var a = aa;
                      return K.g ? K.g(a) : K.call(null, a);
                    }()))) ? function() {
                      var a = aa;
                      return K.g ? K.g(a) : K.call(null, a);
                    }() : Kg.n(aa, Be, new Q(null, 2, 5, R, [zp, bc], null), Yx(Tb, cc)), new Q(null, 2, 5, R, [zp, bc], null))), q(Zg.h(f, new Q(null, 2, 5, R, [dn, Vp], null))) && Fx(r, Tb, sa, O.h(x.h(dn.g(f), dn.g(bq.g(function() {
                      var a = aa;
                      return K.g ? K.g(a) : K.call(null, a);
                    }()))) ? function() {
                      var a = aa;
                      return K.g ? K.g(a) : K.call(null, a);
                    }() : Kg.n(aa, Be, new Q(null, 2, 5, R, [zn, bc], null), Tx(Tb, cc)), new Q(null, 2, 5, R, [zn, bc], null))), q(Zg.h(f, new Q(null, 2, 5, R, [dn, xn], null))) && Fx(r, Tb, sa, O.h(x.h(dn.g(f), dn.g(bq.g(function() {
                      var a = aa;
                      return K.g ? K.g(a) : K.call(null, a);
                    }()))) ? function() {
                      var a = aa;
                      return K.g ? K.g(a) : K.call(null, a);
                    }() : Kg.n(aa, Be, new Q(null, 2, 5, R, [fq, bc], null), Ux(Tb, cc)), new Q(null, 2, 5, R, [fq, bc], null))), q(Zg.h(f, new Q(null, 2, 5, R, [dn, Mm], null))) && Fx(r, Tb, sa, O.h(x.h(dn.g(f), dn.g(bq.g(function() {
                      var a = aa;
                      return K.g ? K.g(a) : K.call(null, a);
                    }()))) ? function() {
                      var a = aa;
                      return K.g ? K.g(a) : K.call(null, a);
                    }() : Kg.n(aa, Be, new Q(null, 2, 5, R, [Ep, bc], null), Vx(Tb, cc)), new Q(null, 2, 5, R, [Ep, bc], null)));
                  }
                  Pd = E(zc);
                  qe = null;
                  Qd = 0;
                }
                Lb = 0;
              } else {
                break;
              }
            }
          }
          jg.h(f, bq.g(function() {
            var a = aa;
            return K.g ? K.g(a) : K.call(null, a);
          }())) && Kg.n(aa, Be, bq, f);
          Eb = E(Yb);
          Ha = null;
          eb = 0;
        }
        ab = 0;
      } else {
        break;
      }
    }
  }
  qx(g, r, c);
  for (var Mc = z(k), td = null, se = 0, Zc = 0;;) {
    if (Zc < se) {
      var sc = td.B(null, Zc);
      qx(sc, r, c);
      Zc += 1;
    } else {
      var Ac = z(Mc);
      if (Ac) {
        var Cb = Ac;
        if (P(Cb)) {
          var Nc = v(Cb), te = w(Cb), ud = Nc, vd = L(Nc), Mc = te, td = ud, se = vd
        } else {
          var ue = A(Cb);
          qx(ue, r, c);
          Mc = E(Cb);
          td = null;
          se = 0;
        }
        Zc = 0;
      } else {
        break;
      }
    }
  }
  if (q(e)) {
    var wd = M.h(k, d);
    rx(wd, r, c, e);
  }
  if (q(Zg.h(f, new Q(null, 2, 5, R, [zm, Vp], null)))) {
    for (var Rd = z(Lg.l(Dg, Ik.v(), Vu(m), q(p) ? Vu(p) : null, J([eg.h(A(Wu(m)), Vu(m)), k, eg.h(g, k)], 0))), dc = null, Oc = 0, Bc = 0;;) {
      if (Bc < Oc) {
        var ec = dc.B(null, Bc), Sd = M.j(ec, 0, null), $c = M.j(ec, 1, null);
        M.j(ec, 2, null);
        var xd = M.j(ec, 3, null), Ke = M.j(ec, 4, null), Le = M.j(ec, 5, null);
        (Ra(e) || x.h(d, Sd)) && Gx(r, Mq.g($c), Ke, xd, Le, e, c, f);
        Bc += 1;
      } else {
        var ve = z(Rd);
        if (ve) {
          var yd = ve;
          if (P(yd)) {
            var we = v(yd), mg = w(yd), jh = we, ki = L(we), Rd = mg, dc = jh, Oc = ki
          } else {
            var Pc = A(yd), ng = M.j(Pc, 0, null), Me = M.j(Pc, 1, null);
            M.j(Pc, 2, null);
            var kh = M.j(Pc, 3, null), Ne = M.j(Pc, 4, null), lh = M.j(Pc, 5, null);
            (Ra(e) || x.h(d, ng)) && Gx(r, Mq.g(Me), Ne, kh, lh, e, c, f);
            Rd = E(yd);
            dc = null;
            Oc = 0;
          }
          Bc = 0;
        } else {
          break;
        }
      }
    }
  }
  if (q(q(e) ? c + 1 < L(K.g ? K.g(Dx) : K.call(null, Dx)) : e)) {
    var Oe = M.h(Vu(m), d), og = q(p) ? M.h(Vu(p), d) : null, li = M.h(k, d);
    Nx(r, Mq.g(Oe), Mq.g(og), li, e, c, C, f);
  }
  return null;
}
;var by = Ov(new Q(null, 2, 5, R, [80, 30], null)), cy = Hg.g ? Hg.g(Sh) : Hg.call(null, Sh), dy = Hg.g ? Hg.g(Hd) : Hg.call(null, Hd), ey = Hg.g ? Hg.g(Bk) : Hg.call(null, Bk), fy, gy = new Ka(null, 4, [Xp, .02, Dm, !1, rq, 1, Vq, 5], null);
fy = Hg.g ? Hg.g(gy) : Hg.call(null, gy);
function hy() {
  return Ek(Ik.g(2400), function() {
    return function(a, b, c, d, e) {
      return function g(k) {
        return new Sf(null, function(a, b, c, d, e) {
          return function() {
            for (;;) {
              var y = z(k);
              if (y) {
                if (P(y)) {
                  var B = v(y), C = L(B), F = Wf(C);
                  return function() {
                    for (var g = 0;;) {
                      if (g < C) {
                        var k = ob.h(B, g);
                        $f(F, function() {
                          var g = tv(by, k), y = M.j(g, 0, null), G = M.j(g, 1, null);
                          return(function() {
                            var d = Av(y - b), e = Av(G - c), d = a - (d > e ? d : e);
                            return 0 > d ? 0 : d;
                          }() + function() {
                            var b = Av(y - d), c = Av(G - e), b = a - (b > c ? b : c);
                            return 0 > b ? 0 : b;
                          }()) * sf.v() + 5 * function() {
                            var a = sf.v();
                            return Math.pow.h ? Math.pow.h(a, 3) : Math.pow.call(null, a, 3);
                          }();
                        }());
                        g += 1;
                      } else {
                        return!0;
                      }
                    }
                  }() ? Zf(F.Q(), g(w(y))) : Zf(F.Q(), null);
                }
                var I = A(y);
                return he(function() {
                  var g = tv(by, I), k = M.j(g, 0, null), y = M.j(g, 1, null);
                  return(function() {
                    var d = Av(k - b), e = Av(y - c), d = a - (d > e ? d : e);
                    return 0 > d ? 0 : d;
                  }() + function() {
                    var b = Av(k - d), c = Av(y - e), b = a - (b > c ? b : c);
                    return 0 > b ? 0 : b;
                  }()) * sf.v() + 5 * function() {
                    var a = sf.v();
                    return Math.pow.h ? Math.pow.h(a, 3) : Math.pow.call(null, a, 3);
                  }();
                }(), g(D(y)));
              }
              return null;
            }
          };
        }(a, b, c, d, e), null, null);
      };
    }(20, 40, 20, 90.5, 0)(Ik.g(2400));
  }());
}
function iy(a, b) {
  var c = Vq.g(b), c = Xg.h(Sh, Ug.h(function(a) {
    return function(b) {
      return Nb(b) >= a;
    };
  }(c), a));
  return Ck(Iv(c, by, rq.g(b)));
}
function jy(a, b, c) {
  er.h(cr("#inh2d-base-dist"), rq.g(a));
  er.h(cr("#inh2d-radius"), Bv.h(15, 2));
  er.h(cr("#inh2d-stimulus"), Bv.h(Vq.g(a), 2));
  er.h(cr("#inh2d-stimulus-next"), Bv.h(Vq.g(b), 2));
  er.h(cr("#inh2d-actual-level"), Bv.h(c, 2));
  er.h(cr("#inh2d-target-level"), Xp.g(a));
  a = c > Xp.g(a);
  er.h(cr("#inh2d-high-or-low"), a ? "high" : "low");
  er.h(cr("#inh2d-up-or-down"), a ? "up" : "down");
}
function ky(a, b) {
  var c = Px(jx(a)), d = Xw(c), e = Fe.j(pf, 0, wk(b)), e = Dv(function(a, b, c) {
    return function(a) {
      a /= c;
      return Bv.h(1 < a ? 1 : a, 2);
    };
  }(c, d, e), b);
  dx(d, "black");
  vx(d, a, e);
  return c;
}
function ly(a, b) {
  var c = Px(jx(a)), d = Xw(c);
  dx(d, "red");
  ux(d, a, b);
  return c;
}
function ny(a, b, c) {
  var d = Xw(cr("#inh2d-viz")), e;
  e = oq.g(K.g ? K.g(Bx) : K.call(null, Bx));
  var f = Ze(e) ? Fe.h(Fg, e) : e;
  e = O.h(f, Iq);
  var g = O.h(f, an), f = O.h(f, Rq);
  e = pe([Km, Vm, hn, wn, Pp, dq, gq, Eq, Iq, Zq], [0, by, f, g, 170, 0, 0, !0, e, f]);
  e = new yx(Vm.g(e), Km.g(e), Zq.g(e), hn.g(e), wn.g(e), gq.g(e), dq.g(e), Pp.g(e), Eq.g(e), Iq.g(e), null, Ce.l(e, Vm, J([Km, Zq, hn, wn, gq, dq, Pp, Eq, Iq], 0)));
  a = ky(e, a);
  b = ly(e, b);
  c = ly(e, c);
  d.save();
  $w(d, new Ka(null, 4, [tq, 0, um, 0, en, 500, Tp, 380], null));
  hx.n(d, a, 0, 0);
  hx.n(d, b, 0, 0);
  dx(d, "black");
  cx(d, new Ka(null, 3, [Yq, "global inhibition:", tq, 100, um, 170 + rf(10, 2)], null));
  hx.n(d, a, 0, 180);
  hx.n(d, c, 0, 180);
  d.restore();
}
function oy() {
  var a = L(K.g ? K.g(dy) : K.call(null, dy)) / 2400, b = Kg.n(fy, Pv, a, L(K.g ? K.g(cy) : K.call(null, cy))), c = function() {
    var a = hy();
    return Ig.h ? Ig.h(cy, a) : Ig.call(null, cy, a);
  }(), a = function() {
    var a = iy(c, b);
    return Ig.h ? Ig.h(dy, a) : Ig.call(null, dy, a);
  }(), d = L(a) / 2400, e = function() {
    var a;
    a = Ck(Gv(c, Xp.g(b), xv(by)));
    return Ig.h ? Ig.h(ey, a) : Ig.call(null, ey, a);
  }(), f = Pv(b, d, L(c));
  ny(c, a, e);
  jy(b, f, d);
}
ca("comportexviz.local_inhibition_2d.init", function() {
  var a = cr("#inh2d-viz");
  a.height = 380;
  a.width = 500;
  oy();
  var b = cr("#inh2d-step"), c = cr("#inh2d-global");
  return Mr(b, Kp, function() {
    return function() {
      try {
        oy();
      } catch (a) {
        if (a instanceof Error) {
          Vk.l(J([a], 0));
        } else {
          throw a;
        }
      }
      return!1;
    };
  }(b, c, a));
});
Ol || Ql && Ul("525");
Ol || Pl && Ul("1.9.3");
function py() {
}
py.Nd = function() {
  py.Od || (py.Od = new py);
};
py.Nd();
var qy = rf(300, 2), RC = Ov(new Q(null, 1, 5, R, [200], null)), SC = Hg.g ? Hg.g(0) : Hg.call(null, 0), TC = Hg.g ? Hg.g(Sh) : Hg.call(null, Sh), UC = Hg.g ? Hg.g(Bk) : Hg.call(null, Bk), VC = Hg.g ? Hg.g(Bk) : Hg.call(null, Bk), WC, XC = new Ka(null, 5, [Xp, .03, Dm, !1, wq, 15, rq, 2, Vq, 5], null);
WC = Hg.g ? Hg.g(XC) : Hg.call(null, XC);
function YC() {
  return Ek(Ik.g(200), function() {
    return function(a, b, c) {
      return function e(f) {
        return new Sf(null, function(a, b, c) {
          return function() {
            for (;;) {
              var m = z(f);
              if (m) {
                if (P(m)) {
                  var p = v(m), t = L(p), r = Wf(t);
                  return function() {
                    for (var e = 0;;) {
                      if (e < t) {
                        var f = ob.h(p, e);
                        $f(r, function() {
                          var e = tv(RC, f);
                          return function() {
                            var f;
                            f = a - Av(e - b);
                            f = 0 > f ? 0 : f;
                            var m = a - Av(e - c);
                            return f > m ? f : m;
                          }() * sf.v() + sf.g(4 * function() {
                            var a;
                            a = e / 200 * 12.56;
                            a = Math.sin.g ? Math.sin.g(a) : Math.sin.call(null, a);
                            return 0 < a ? a : 0;
                          }()) + 5 * function() {
                            var a = sf.v();
                            return Math.pow.h ? Math.pow.h(a, 3) : Math.pow.call(null, a, 3);
                          }();
                        }());
                        e += 1;
                      } else {
                        return!0;
                      }
                    }
                  }() ? Zf(r.Q(), e(w(m))) : Zf(r.Q(), null);
                }
                var y = A(m);
                return he(function() {
                  var e = tv(RC, y);
                  return function() {
                    var f;
                    f = a - Av(e - b);
                    f = 0 > f ? 0 : f;
                    var m = a - Av(e - c);
                    return f > m ? f : m;
                  }() * sf.v() + sf.g(4 * function() {
                    var a;
                    a = e / 200 * 12.56;
                    a = Math.sin.g ? Math.sin.g(a) : Math.sin.call(null, a);
                    return 0 < a ? a : 0;
                  }()) + 5 * function() {
                    var a = sf.v();
                    return Math.pow.h ? Math.pow.h(a, 3) : Math.pow.call(null, a, 3);
                  }();
                }(), e(D(m)));
              }
              return null;
            }
          };
        }(a, b, c), null, null);
      };
    }(30, 30, 210.5)(Ik.g(200));
  }());
}
function ZC(a, b) {
  var c = Vq.g(b), c = Xg.h(Sh, Ug.h(function(a) {
    return function(b) {
      return Nb(b) >= a;
    };
  }(c), a));
  return Ck(Iv(c, RC, rq.g(b)));
}
function $C(a, b, c) {
  er.h(cr("#inh-base-dist"), rq.g(a));
  er.h(cr("#inh-radius"), Bv.h(15, 2));
  er.h(cr("#inh-stimulus"), Bv.h(Vq.g(a), 2));
  er.h(cr("#inh-stimulus-next"), Bv.h(Vq.g(b), 2));
  er.h(cr("#inh-actual-level"), Bv.h(c, 2));
  er.h(cr("#inh-target-level"), Xp.g(a));
  a = c > Xp.g(a);
  er.h(cr("#inh-high-or-low"), a ? "high" : "low");
  er.h(cr("#inh-up-or-down"), a ? "up" : "down");
}
function aD(a, b, c, d, e, f) {
  b = z(b);
  for (var g = null, k = 0, l = 0;;) {
    if (l < k) {
      var m = g.B(null, l), p = M.j(m, 0, null), t = M.j(m, 1, null);
      dx(a, q(function() {
        var a = p;
        return c.g ? c.g(a) : c.call(null, a);
      }()) ? "red" : "black");
      bx(a, new Ka(null, 4, [tq, function() {
        var a = p;
        return d.g ? d.g(a) : d.call(null, a);
      }() - 1, um, function() {
        var a = t;
        return e.g ? e.g(a) : e.call(null, a);
      }(), Tp, function() {
        var a = t;
        return f.g ? f.g(a) : f.call(null, a);
      }(), en, 2.5], null));
      l += 1;
    } else {
      if (b = z(b)) {
        g = b, P(g) ? (b = v(g), l = w(g), g = b, k = L(b), b = l) : (b = A(g), p = M.j(b, 0, null), t = M.j(b, 1, null), dx(a, q(function() {
          var a = p;
          return c.g ? c.g(a) : c.call(null, a);
        }()) ? "red" : "black"), bx(a, new Ka(null, 4, [tq, function() {
          var a = p;
          return d.g ? d.g(a) : d.call(null, a);
        }() - 1, um, function() {
          var a = t;
          return e.g ? e.g(a) : e.call(null, a);
        }(), Tp, function() {
          var a = t;
          return f.g ? f.g(a) : f.call(null, a);
        }(), en, 2.5], null)), b = E(g), g = null, k = 0), l = 0;
      } else {
        break;
      }
    }
  }
}
function bD(a, b, c, d, e, f) {
  var g = rq.g(f);
  c = z(c);
  f = null;
  for (var k = 0, l = 0;;) {
    if (l < k) {
      var m = f.B(null, l), p = function() {
        var a = m;
        return b.g ? b.g(a) : b.call(null, a);
      }(), t = a;
      Yw(t);
      fx(t, function() {
        var a = m - 15;
        return d.g ? d.g(a) : d.call(null, a);
      }(), e.g ? e.g(0) : e.call(null, 0));
      gx(t, function() {
        var a = m - g;
        return d.g ? d.g(a) : d.call(null, a);
      }(), function() {
        var a = p;
        return e.g ? e.g(a) : e.call(null, a);
      }());
      gx(t, function() {
        var a = m + g;
        return d.g ? d.g(a) : d.call(null, a);
      }(), function() {
        var a = p;
        return e.g ? e.g(a) : e.call(null, a);
      }());
      gx(t, function() {
        var a = m + 15;
        return d.g ? d.g(a) : d.call(null, a);
      }(), e.g ? e.g(0) : e.call(null, 0));
      Zw(t);
      l += 1;
    } else {
      if (c = z(c)) {
        f = c;
        if (P(f)) {
          c = v(f), l = w(f), f = c, k = L(c), c = l;
        } else {
          var m = A(f), r = function() {
            var a = m;
            return b.g ? b.g(a) : b.call(null, a);
          }();
          c = a;
          Yw(c);
          fx(c, function() {
            var a = m - 15;
            return d.g ? d.g(a) : d.call(null, a);
          }(), e.g ? e.g(0) : e.call(null, 0));
          gx(c, function() {
            var a = m - g;
            return d.g ? d.g(a) : d.call(null, a);
          }(), function() {
            var a = r;
            return e.g ? e.g(a) : e.call(null, a);
          }());
          gx(c, function() {
            var a = m + g;
            return d.g ? d.g(a) : d.call(null, a);
          }(), function() {
            var a = r;
            return e.g ? e.g(a) : e.call(null, a);
          }());
          gx(c, function() {
            var a = m + 15;
            return d.g ? d.g(a) : d.call(null, a);
          }(), e.g ? e.g(0) : e.call(null, 0));
          Zw(c);
          c = E(f);
          f = null;
          k = 0;
        }
        l = 0;
      } else {
        break;
      }
    }
  }
}
function cD(a, b, c, d) {
  var e = Xw(cr("#inh-viz")), f = Fe.h(pf, wk(a)), g = Kg.h(SC, function(a, b) {
    return function(a) {
      return a > b ? a : b;
    };
  }(e, f)), k = function() {
    return function(a) {
      return a / 200 * 600;
    };
  }(e, f, g), l = function(a, b, c) {
    return function(a) {
      return a / c * qy;
    };
  }(e, f, g, k), m = function(a, b, c, d, e) {
    return function(a) {
      return qy - e(a);
    };
  }(e, f, g, k, l), p = Vq.g(d);
  e.save();
  $w(e, new Ka(null, 4, [tq, 0, um, 0, en, 600, Tp, 300], null));
  aD(e, a, b, k, m, l);
  dx(e, "black");
  cx(e, new Ka(null, 3, [Yq, "local inhibition", tq, rf(600, 2), um, rf(qy, 3)], null));
  ex(e, "#888888");
  bD(e, a, b, k, m, d);
  e.lineWidth = 2;
  ex(e, "black");
  Yw(e);
  fx(e, 0, m(0));
  gx(e, 600, m(0));
  Zw(e);
  ex(e, "#00bb44");
  dx(e, "#00bb44");
  Yw(e);
  fx(e, 0, m(p));
  gx(e, 600, m(p));
  Zw(e);
  cx(e, new Ka(null, 3, [Yq, "stimulus threshold", tq, rf(600, 2), um, m(p) - 2], null));
  aD(e, a, c, k, function() {
    return function() {
      return qy;
    };
  }(e, f, g, k, l, m, p), l);
  dx(e, "black");
  cx(e, new Ka(null, 3, [Yq, "global inhibition", tq, rf(600, 2), um, 300 - rf(qy, 3)], null));
  e.restore();
}
function dD() {
  var a = L(K.g ? K.g(UC) : K.call(null, UC)) / 200, b = Kg.n(WC, Pv, a, L(K.g ? K.g(TC) : K.call(null, TC))), c = function() {
    var a = YC();
    return Ig.h ? Ig.h(TC, a) : Ig.call(null, TC, a);
  }(), a = function() {
    var a = ZC(c, b);
    return Ig.h ? Ig.h(UC, a) : Ig.call(null, UC, a);
  }(), d = L(a) / 200, e = function() {
    var a;
    a = Ck(Gv(c, Xp.g(b), xv(RC)));
    return Ig.h ? Ig.h(VC, a) : Ig.call(null, VC, a);
  }(), f = Pv(b, d, L(c));
  cD(c, a, e, b);
  $C(b, f, d);
}
ca("comportexviz.local_inhibition_1d.init", function() {
  var a = cr("#inh-viz");
  a.height = 300;
  a.width = 600;
  dD();
  var b = cr("#inh-step");
  return Mr(b, Kp, function() {
    return function() {
      try {
        dD();
      } catch (a) {
        if (a instanceof Error) {
          Vk.l(J([a], 0));
        } else {
          throw a;
        }
      }
      return!1;
    };
  }(b, a));
});
var Ea = !1, Ca = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = J(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    return console.log.apply(console, Ya.g ? Ya.g(a) : Ya.call(null, a));
  }
  a.C = 0;
  a.p = function(a) {
    a = z(a);
    return b(a);
  };
  a.l = b;
  return a;
}(), eD = Hg.g ? Hg.g(null) : Hg.call(null, null), ay, fD = new Ka(null, 3, [Bp, 0, kn, 0, Wp, null], null);
ay = Hg.g ? Hg.g(fD) : Hg.call(null, fD);
var gD = Qw.v(), iD = function hD(b) {
  var c = Hg.g ? Hg.g(Sh) : Hg.call(null, Sh), d = function() {
    "undefined" === typeof Sv && (Sv = function(b, c, d, e) {
      this.tc = b;
      this.ch = c;
      this.Vd = d;
      this.Sd = e;
      this.F = 0;
      this.o = 393216;
    }, Sv.xb = !0, Sv.wb = "cljs.core.async/t92647", Sv.Nb = function() {
      return function(b, c) {
        return Ec(c, "cljs.core.async/t92647");
      };
    }(c), Sv.prototype.Qc = function() {
      return function(b, c, d) {
        Kg.n(this.tc, Be, c, d);
        return null;
      };
    }(c), Sv.prototype.Rc = function() {
      return function(b, c) {
        Kg.j(this.tc, Ce, c);
        return null;
      };
    }(c), Sv.prototype.L = function() {
      return function() {
        return this.Sd;
      };
    }(c), Sv.prototype.N = function() {
      return function(b, c) {
        return new Sv(this.tc, this.ch, this.Vd, c);
      };
    }(c));
    return new Sv(c, b, hD, null);
  }(), e = Qw.g(1), f = Hg.g ? Hg.g(null) : Hg.call(null, null), g = function(b, c, d, e) {
    return function() {
      return 0 === Kg.h(e, of) ? Sw.h(d, !0) : null;
    };
  }(c, d, e, f), k = Qw.g(1);
  nw(function(c, d, e, f, g, k) {
    return function() {
      var B = function() {
        return function(b) {
          return function() {
            function c(d) {
              for (;;) {
                var e;
                a: {
                  try {
                    for (;;) {
                      var f = b(d);
                      if (!Pf(f, X)) {
                        e = f;
                        break a;
                      }
                    }
                  } catch (g) {
                    if (g instanceof Object) {
                      d[5] = g;
                      Fw(d);
                      e = X;
                      break a;
                    }
                    throw g;
                  }
                  e = void 0;
                }
                if (!Pf(e, X)) {
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
            e.v = d;
            e.g = c;
            return e;
          }();
        }(function(c, d, e, f, g, k) {
          return function(c) {
            var l = c[1];
            if (7 === l) {
              var m = c, p = m;
              p[2] = c[2];
              p[1] = 3;
              return X;
            }
            if (20 === l) {
              var r = c[7], t = A(r), y = M.j(t, 0, null), B = M.j(t, 1, null);
              c[8] = y;
              m = c;
              m[1] = q(B) ? 22 : 23;
              return X;
            }
            if (27 === l) {
              var C = c[9], F = c[10], Ta = c[11], va = c[12], Ga = ob.h(C, F), ib = Sw.j(Ga, va, k);
              c[11] = Ga;
              m = c;
              m[1] = q(ib) ? 30 : 31;
              return X;
            }
            if (1 === l) {
              var rb = m = c;
              rb[2] = null;
              rb[1] = 2;
              return X;
            }
            if (24 === l) {
              var r = c[7], Eb = c[2], Ha = E(r), eb = null, ab = 0, $ = 0;
              c[13] = $;
              c[14] = Eb;
              c[15] = eb;
              c[16] = ab;
              c[17] = Ha;
              var hc = m = c;
              hc[2] = null;
              hc[1] = 8;
              return X;
            }
            if (39 === l) {
              var yb = m = c;
              yb[2] = null;
              yb[1] = 41;
              return X;
            }
            if (4 === l) {
              var va = c[12], Fb = c[2], Xb = null == Fb;
              c[12] = Fb;
              m = c;
              m[1] = q(Xb) ? 5 : 6;
              return X;
            }
            if (15 === l) {
              var $ = c[13], eb = c[15], ab = c[16], Ha = c[17], xc = c[2], W = Ha, nd = eb, Ld = ab;
              c[13] = $ + 1;
              c[18] = xc;
              c[15] = nd;
              c[16] = Ld;
              c[17] = W;
              var od = m = c;
              od[2] = null;
              od[1] = 8;
              return X;
            }
            if (21 === l) {
              var Wc = c[2], Md = m = c;
              Md[2] = Wc;
              Md[1] = 18;
              return X;
            }
            if (31 === l) {
              var Ta = c[11], Ib = k(null), Jb = e.Rc(null, Ta);
              c[19] = Ib;
              var nc = m = c;
              nc[2] = Jb;
              nc[1] = 32;
              return X;
            }
            if (32 === l) {
              var Kb = c[20], C = c[9], F = c[10], oc = c[21], pc = c[2], Xc = oc, pd = C, yf = F + 1;
              c[20] = Kb;
              c[22] = pc;
              c[9] = pd;
              c[10] = yf;
              c[21] = Xc;
              var zf = m = c;
              zf[2] = null;
              zf[1] = 25;
              return X;
            }
            if (40 === l) {
              var Nd = c[23], qc = k(null), cb = e.Rc(null, Nd);
              c[24] = qc;
              var Bb = m = c;
              Bb[2] = cb;
              Bb[1] = 41;
              return X;
            }
            if (33 === l) {
              var kb = c[25], rc = P(kb), m = c;
              m[1] = rc ? 36 : 37;
              return X;
            }
            if (13 === l) {
              var Yb = c[26], Rb = Uv(Yb), Od = m = c;
              Od[2] = Rb;
              Od[1] = 15;
              return X;
            }
            if (22 === l) {
              var y = c[8], qd = Uv(y), Ic = m = c;
              Ic[2] = qd;
              Ic[1] = 24;
              return X;
            }
            if (36 === l) {
              var kb = c[25], sa = v(kb), Zb = w(kb), Yc = L(sa), oc = Zb, C = sa, Kb = Yc, F = 0;
              c[20] = Kb;
              c[9] = C;
              c[10] = F;
              c[21] = oc;
              var rd = m = c;
              rd[2] = null;
              rd[1] = 25;
              return X;
            }
            if (41 === l) {
              var kb = c[25], Jc = c[2], oc = E(kb), C = null, F = Kb = 0;
              c[20] = Kb;
              c[9] = C;
              c[10] = F;
              c[21] = oc;
              c[27] = Jc;
              var yc = m = c;
              yc[2] = null;
              yc[1] = 25;
              return X;
            }
            if (43 === l) {
              var aa = m = c;
              aa[2] = null;
              aa[1] = 44;
              return X;
            }
            if (29 === l) {
              var Pd = c[2], qe = m = c;
              qe[2] = Pd;
              qe[1] = 26;
              return X;
            }
            if (44 === l) {
              c[28] = c[2];
              var Qd = m = c;
              Qd[2] = null;
              Qd[1] = 2;
              return X;
            }
            if (6 === l) {
              var Lb = c[29], $b = K.g ? K.g(d) : K.call(null, d), lb = uk($b), vb = L(lb), Kc = Ig.h ? Ig.h(g, vb) : Ig.call(null, g, vb), oc = z(lb), C = null, F = Kb = 0;
              c[20] = Kb;
              c[29] = lb;
              c[9] = C;
              c[30] = Kc;
              c[10] = F;
              c[21] = oc;
              var sd = m = c;
              sd[2] = null;
              sd[1] = 25;
              return X;
            }
            if (28 === l) {
              var kb = c[25], oc = c[21], re = z(oc);
              c[25] = re;
              m = c;
              m[1] = re ? 33 : 34;
              return X;
            }
            if (25 === l) {
              var Kb = c[20], F = c[10], zc = F < Kb, m = c;
              m[1] = q(zc) ? 27 : 28;
              return X;
            }
            if (34 === l) {
              var ja = m = c;
              ja[2] = null;
              ja[1] = 35;
              return X;
            }
            if (17 === l) {
              var Ie = m = c;
              Ie[2] = null;
              Ie[1] = 18;
              return X;
            }
            if (3 === l) {
              var Sb = c[2], m = c;
              return Ew(m, Sb);
            }
            if (12 === l) {
              var ac = c[2], Lc = m = c;
              Lc[2] = ac;
              Lc[1] = 9;
              return X;
            }
            if (2 === l) {
              return m = c, Dw(m, 4, b);
            }
            if (23 === l) {
              var bc = m = c;
              bc[2] = null;
              bc[1] = 24;
              return X;
            }
            if (35 === l) {
              var Tb = c[2], cc = m = c;
              cc[2] = Tb;
              cc[1] = 29;
              return X;
            }
            if (19 === l) {
              var r = c[7], Je = v(r), Mc = w(r), td = L(Je), Ha = Mc, eb = Je, ab = td, $ = 0;
              c[13] = $;
              c[15] = eb;
              c[16] = ab;
              c[17] = Ha;
              var se = m = c;
              se[2] = null;
              se[1] = 8;
              return X;
            }
            if (11 === l) {
              var r = c[7], Ha = c[17], Zc = z(Ha);
              c[7] = Zc;
              m = c;
              m[1] = Zc ? 16 : 17;
              return X;
            }
            if (9 === l) {
              var sc = c[2], Ac = m = c;
              Ac[2] = sc;
              Ac[1] = 7;
              return X;
            }
            if (5 === l) {
              var Cb = K.g ? K.g(d) : K.call(null, d), Ha = z(Cb), eb = null, $ = ab = 0;
              c[13] = $;
              c[15] = eb;
              c[16] = ab;
              c[17] = Ha;
              var Nc = m = c;
              Nc[2] = null;
              Nc[1] = 8;
              return X;
            }
            if (14 === l) {
              var te = m = c;
              te[2] = null;
              te[1] = 15;
              return X;
            }
            if (45 === l) {
              var ud = c[2], vd = m = c;
              vd[2] = ud;
              vd[1] = 44;
              return X;
            }
            if (26 === l) {
              var Lb = c[29], ue = c[2], wd = z(Lb);
              c[31] = ue;
              m = c;
              m[1] = wd ? 42 : 43;
              return X;
            }
            if (16 === l) {
              var r = c[7], Rd = P(r), m = c;
              m[1] = Rd ? 19 : 20;
              return X;
            }
            if (38 === l) {
              var dc = c[2], Oc = m = c;
              Oc[2] = dc;
              Oc[1] = 35;
              return X;
            }
            if (30 === l) {
              var Bc = m = c;
              Bc[2] = null;
              Bc[1] = 32;
              return X;
            }
            if (10 === l) {
              var $ = c[13], eb = c[15], ec = ob.h(eb, $), Yb = M.j(ec, 0, null), Sd = M.j(ec, 1, null);
              c[26] = Yb;
              m = c;
              m[1] = q(Sd) ? 13 : 14;
              return X;
            }
            if (18 === l) {
              var $c = c[2], xd = m = c;
              xd[2] = $c;
              xd[1] = 12;
              return X;
            }
            if (42 === l) {
              return m = c, Dw(m, 45, f);
            }
            if (37 === l) {
              var kb = c[25], Nd = c[23], va = c[12], Ke = A(kb), Le = Sw.j(Ke, va, k);
              c[23] = Ke;
              m = c;
              m[1] = q(Le) ? 39 : 40;
              return X;
            }
            if (8 === l) {
              var $ = c[13], ab = c[16], ve = $ < ab, m = c;
              m[1] = q(ve) ? 10 : 11;
              return X;
            }
            return null;
          };
        }(c, d, e, f, g, k), c, d, e, f, g, k);
      }(), C = function() {
        var b = B.v ? B.v() : B.call(null);
        b[6] = c;
        return b;
      }();
      return Cw(C);
    };
  }(k, c, d, e, f, g));
  return d;
}(gD), jD = Hg.g ? Hg.g(!1) : Hg.call(null, !1), kD, lD = new Ka(null, 3, [In, 200, jn, !0, Mp, 1], null);
kD = Hg.g ? Hg.g(lD) : Hg.call(null, lD);
function mD() {
  Kg.n(eD, Be, Cp, new Ka(null, 2, [nn, (new Date).getTime(), qn, pv(K.g ? K.g(eD) : K.call(null, eD))], null));
  var a = Qw.g(1);
  nw(function(a) {
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
                      if (!Pf(f, X)) {
                        d = f;
                        break a;
                      }
                    }
                  } catch (g) {
                    if (g instanceof Object) {
                      c[5] = g;
                      Fw(c);
                      d = X;
                      break a;
                    }
                    throw g;
                  }
                  d = void 0;
                }
                if (!Pf(d, X)) {
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
            d.v = c;
            d.g = b;
            return d;
          }();
        }(function() {
          return function(a) {
            var b = a[1];
            if (7 === b) {
              return a[7] = a[2], a[2] = null, a[1] = 2, X;
            }
            if (6 === b) {
              return b = a[2], a[2] = b, a[1] = 3, X;
            }
            if (5 === b) {
              return a[2] = null, a[1] = 6, X;
            }
            if (4 === b) {
              var b = K.g ? K.g(kD) : K.call(null, kD), b = In.g(b), b = Nw(b), c = Sw.h(gD, Kg.h(eD, Xu));
              a[8] = c;
              return Dw(a, 7, b);
            }
            return 3 === b ? (b = a[2], Ew(a, b)) : 2 === b ? (b = K.g ? K.g(jD) : K.call(null, jD), a[1] = q(b) ? 4 : 5, X) : 1 === b ? (a[2] = null, a[1] = 2, X) : null;
          };
        }(a), a);
      }(), d = function() {
        var d = c.v ? c.v() : c.call(null);
        d[6] = a;
        return d;
      }();
      return Cw(d);
    };
  }(a));
  return a;
}
Qc(jD, Fm, function(a, b, c, d) {
  return q(d) ? mD() : null;
});
function nD() {
  function a() {
    return $x();
  }
  return gr.g ? gr.g(a) : gr.call(null, a);
}
Qc(Bx, mq, function() {
  return nD();
});
Qc(ay, mq, function() {
  return nD();
});
var oD = Qw.g(1);
nw(function(a) {
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
                    if (!Pf(f, X)) {
                      e = f;
                      break a;
                    }
                  }
                } catch (g) {
                  if (g instanceof Object) {
                    c[5] = g;
                    Fw(c);
                    e = X;
                    break a;
                  }
                  throw g;
                }
                e = void 0;
              }
              if (!Pf(e, X)) {
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
          g.v = c;
          g.g = b;
          return g;
        }();
      }(function() {
        return function(a) {
          var b = a[1];
          if (7 === b) {
            return b = a, b[2] = a[2], b[1] = 3, X;
          }
          if (1 === b) {
            return b = Qw.v(), Uw.h(iD, b), a[7] = b, a[2] = null, a[1] = 2, X;
          }
          if (4 === b) {
            return b = a[8], b = a[2], a[8] = b, a[1] = q(b) ? 5 : 6, X;
          }
          if (13 === b) {
            var b = a[7], c = a[2];
            a[7] = b;
            a[9] = c;
            a[2] = null;
            a[1] = 2;
            return X;
          }
          if (6 === b) {
            return a[2] = null, a[1] = 7, X;
          }
          if (3 === b) {
            return b = a[2], Ew(a, b);
          }
          if (12 === b) {
            return a[2] = null, a[1] = 13, X;
          }
          if (2 === b) {
            return b = a[7], Dw(a, 4, b);
          }
          if (11 === b) {
            return b = nD(), a[2] = b, a[1] = 13, X;
          }
          if (9 === b) {
            return b = a[10], a[2] = b, a[1] = 10, X;
          }
          if (5 === b) {
            var b = a[8], b = pv(b), c = K.g ? K.g(kD) : K.call(null, kD), c = Mp.g(c), g = K.g ? K.g(kD) : K.call(null, kD), g = jn.g(g);
            a[11] = c;
            a[10] = g;
            a[12] = b;
            a[1] = q(g) ? 8 : 9;
            return X;
          }
          return 10 === b ? (b = a[2], a[1] = q(b) ? 11 : 12, X) : 8 === b ? (c = a[11], b = a[12], a[2] = 0 === (b % c + c) % c, a[1] = 10, X) : null;
        };
      }(a), a);
    }(), c = function() {
      var c = b.v ? b.v() : b.call(null);
      c[6] = a;
      return c;
    }();
    return Cw(c);
  };
}(oD));

})();

//# sourceMappingURL=comportexviz_inh.js.map