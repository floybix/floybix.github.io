;(function(){
var k, aa = this;
function p(a) {
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
function ba(a) {
  return "string" == typeof a;
}
var ca = "closure_uid_" + (1E9 * Math.random() >>> 0), ea = 0;
function fa(a, b) {
  var c = a.split("."), d = aa;
  c[0] in d || !d.execScript || d.execScript("var " + c[0]);
  for (var e;c.length && (e = c.shift());) {
    c.length || void 0 === b ? d = d[e] ? d[e] : d[e] = {} : d[e] = b;
  }
}
;function ha(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}
function ia(a) {
  return String(a).replace(/\-([a-z])/g, function(a, c) {
    return c.toUpperCase();
  });
}
;function ja(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
}
;function ka(a, b) {
  null != a && this.append.apply(this, arguments);
}
ka.prototype.xb = "";
ka.prototype.append = function(a, b, c) {
  this.xb += a;
  if (null != b) {
    for (var d = 1;d < arguments.length;d++) {
      this.xb += arguments[d];
    }
  }
  return this;
};
ka.prototype.toString = function() {
  return this.xb;
};
var la = Array.prototype, ma = la.indexOf ? function(a, b, c) {
  return la.indexOf.call(a, b, c);
} : function(a, b, c) {
  c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if (ba(a)) {
    return ba(b) && 1 == b.length ? a.indexOf(b, c) : -1;
  }
  for (;c < a.length;c++) {
    if (c in a && a[c] === b) {
      return c;
    }
  }
  return-1;
};
function na(a, b) {
  a.sort(b || oa);
}
function pa(a, b) {
  for (var c = 0;c < a.length;c++) {
    a[c] = {index:c, value:a[c]};
  }
  var d = b || oa;
  na(a, function(a, b) {
    return d(a.value, b.value) || a.index - b.index;
  });
  for (c = 0;c < a.length;c++) {
    a[c] = a[c].value;
  }
}
function oa(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
}
;var qa = null;
function ra() {
  return new q(null, 5, [sa, !0, ta, !0, ua, !1, va, !1, wa, null], null);
}
function r(a) {
  return null != a && !1 !== a;
}
function xa(a) {
  return r(a) ? !1 : !0;
}
function ya(a, b) {
  return a[p(null == b ? null : b)] ? !0 : a._ ? !0 : u ? !1 : null;
}
function za(a) {
  return null == a ? null : a.constructor;
}
function v(a, b) {
  var c = za(b), c = r(r(c) ? c.rb : c) ? c.qb : p(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function Ca(a) {
  var b = a.qb;
  return r(b) ? b : "" + y.g(a);
}
function Da(a) {
  for (var b = a.length, c = Array(b), d = 0;;) {
    if (d < b) {
      c[d] = a[d], d += 1;
    } else {
      break;
    }
  }
  return c;
}
var Ea = {}, Fa = {};
function Ga(a) {
  if (a ? a.T : a) {
    return a.T(a);
  }
  var b;
  b = Ga[p(null == a ? null : a)];
  if (!b && (b = Ga._, !b)) {
    throw v("ICounted.-count", a);
  }
  return b.call(null, a);
}
function Ha(a) {
  if (a ? a.W : a) {
    return a.W(a);
  }
  var b;
  b = Ha[p(null == a ? null : a)];
  if (!b && (b = Ha._, !b)) {
    throw v("IEmptyableCollection.-empty", a);
  }
  return b.call(null, a);
}
var Ia = {};
function Ja(a, b) {
  if (a ? a.R : a) {
    return a.R(a, b);
  }
  var c;
  c = Ja[p(null == a ? null : a)];
  if (!c && (c = Ja._, !c)) {
    throw v("ICollection.-conj", a);
  }
  return c.call(null, a, b);
}
var Ka = {}, A = function() {
  function a(a, b, c) {
    if (a ? a.sa : a) {
      return a.sa(a, b, c);
    }
    var g;
    g = A[p(null == a ? null : a)];
    if (!g && (g = A._, !g)) {
      throw v("IIndexed.-nth", a);
    }
    return g.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.H : a) {
      return a.H(a, b);
    }
    var c;
    c = A[p(null == a ? null : a)];
    if (!c && (c = A._, !c)) {
      throw v("IIndexed.-nth", a);
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
}(), La = {};
function Ma(a) {
  if (a ? a.ba : a) {
    return a.ba(a);
  }
  var b;
  b = Ma[p(null == a ? null : a)];
  if (!b && (b = Ma._, !b)) {
    throw v("ISeq.-first", a);
  }
  return b.call(null, a);
}
function Na(a) {
  if (a ? a.fa : a) {
    return a.fa(a);
  }
  var b;
  b = Na[p(null == a ? null : a)];
  if (!b && (b = Na._, !b)) {
    throw v("ISeq.-rest", a);
  }
  return b.call(null, a);
}
var Oa = {}, Pa = {}, Qa = function() {
  function a(a, b, c) {
    if (a ? a.Q : a) {
      return a.Q(a, b, c);
    }
    var g;
    g = Qa[p(null == a ? null : a)];
    if (!g && (g = Qa._, !g)) {
      throw v("ILookup.-lookup", a);
    }
    return g.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.P : a) {
      return a.P(a, b);
    }
    var c;
    c = Qa[p(null == a ? null : a)];
    if (!c && (c = Qa._, !c)) {
      throw v("ILookup.-lookup", a);
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
function Ra(a, b) {
  if (a ? a.Ub : a) {
    return a.Ub(a, b);
  }
  var c;
  c = Ra[p(null == a ? null : a)];
  if (!c && (c = Ra._, !c)) {
    throw v("IAssociative.-contains-key?", a);
  }
  return c.call(null, a, b);
}
function Sa(a, b, c) {
  if (a ? a.va : a) {
    return a.va(a, b, c);
  }
  var d;
  d = Sa[p(null == a ? null : a)];
  if (!d && (d = Sa._, !d)) {
    throw v("IAssociative.-assoc", a);
  }
  return d.call(null, a, b, c);
}
var Ta = {};
function Ua(a, b) {
  if (a ? a.Ra : a) {
    return a.Ra(a, b);
  }
  var c;
  c = Ua[p(null == a ? null : a)];
  if (!c && (c = Ua._, !c)) {
    throw v("IMap.-dissoc", a);
  }
  return c.call(null, a, b);
}
var Va = {};
function Wa(a) {
  if (a ? a.Jb : a) {
    return a.Jb(a);
  }
  var b;
  b = Wa[p(null == a ? null : a)];
  if (!b && (b = Wa._, !b)) {
    throw v("IMapEntry.-key", a);
  }
  return b.call(null, a);
}
function Ya(a) {
  if (a ? a.Kb : a) {
    return a.Kb(a);
  }
  var b;
  b = Ya[p(null == a ? null : a)];
  if (!b && (b = Ya._, !b)) {
    throw v("IMapEntry.-val", a);
  }
  return b.call(null, a);
}
var Za = {};
function $a(a, b) {
  if (a ? a.nc : a) {
    return a.nc(a, b);
  }
  var c;
  c = $a[p(null == a ? null : a)];
  if (!c && (c = $a._, !c)) {
    throw v("ISet.-disjoin", a);
  }
  return c.call(null, a, b);
}
function ab(a) {
  if (a ? a.jb : a) {
    return a.jb(a);
  }
  var b;
  b = ab[p(null == a ? null : a)];
  if (!b && (b = ab._, !b)) {
    throw v("IStack.-peek", a);
  }
  return b.call(null, a);
}
var cb = {};
function db(a, b, c) {
  if (a ? a.pb : a) {
    return a.pb(a, b, c);
  }
  var d;
  d = db[p(null == a ? null : a)];
  if (!d && (d = db._, !d)) {
    throw v("IVector.-assoc-n", a);
  }
  return d.call(null, a, b, c);
}
function B(a) {
  if (a ? a.Hb : a) {
    return a.Hb(a);
  }
  var b;
  b = B[p(null == a ? null : a)];
  if (!b && (b = B._, !b)) {
    throw v("IDeref.-deref", a);
  }
  return b.call(null, a);
}
var eb = {};
function fb(a) {
  if (a ? a.L : a) {
    return a.L(a);
  }
  var b;
  b = fb[p(null == a ? null : a)];
  if (!b && (b = fb._, !b)) {
    throw v("IMeta.-meta", a);
  }
  return b.call(null, a);
}
var gb = {};
function hb(a, b) {
  if (a ? a.M : a) {
    return a.M(a, b);
  }
  var c;
  c = hb[p(null == a ? null : a)];
  if (!c && (c = hb._, !c)) {
    throw v("IWithMeta.-with-meta", a);
  }
  return c.call(null, a, b);
}
var jb = {}, ob = function() {
  function a(a, b, c) {
    if (a ? a.ea : a) {
      return a.ea(a, b, c);
    }
    var g;
    g = ob[p(null == a ? null : a)];
    if (!g && (g = ob._, !g)) {
      throw v("IReduce.-reduce", a);
    }
    return g.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.da : a) {
      return a.da(a, b);
    }
    var c;
    c = ob[p(null == a ? null : a)];
    if (!c && (c = ob._, !c)) {
      throw v("IReduce.-reduce", a);
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
function pb(a, b, c) {
  if (a ? a.Ib : a) {
    return a.Ib(a, b, c);
  }
  var d;
  d = pb[p(null == a ? null : a)];
  if (!d && (d = pb._, !d)) {
    throw v("IKVReduce.-kv-reduce", a);
  }
  return d.call(null, a, b, c);
}
function qb(a, b) {
  if (a ? a.J : a) {
    return a.J(a, b);
  }
  var c;
  c = qb[p(null == a ? null : a)];
  if (!c && (c = qb._, !c)) {
    throw v("IEquiv.-equiv", a);
  }
  return c.call(null, a, b);
}
function rb(a) {
  if (a ? a.N : a) {
    return a.N(a);
  }
  var b;
  b = rb[p(null == a ? null : a)];
  if (!b && (b = rb._, !b)) {
    throw v("IHash.-hash", a);
  }
  return b.call(null, a);
}
var sb = {};
function tb(a) {
  if (a ? a.O : a) {
    return a.O(a);
  }
  var b;
  b = tb[p(null == a ? null : a)];
  if (!b && (b = tb._, !b)) {
    throw v("ISeqable.-seq", a);
  }
  return b.call(null, a);
}
var ub = {}, vb = {};
function wb(a) {
  if (a ? a.zb : a) {
    return a.zb(a);
  }
  var b;
  b = wb[p(null == a ? null : a)];
  if (!b && (b = wb._, !b)) {
    throw v("IReversible.-rseq", a);
  }
  return b.call(null, a);
}
function xb(a, b) {
  if (a ? a.qc : a) {
    return a.qc(a, b);
  }
  var c;
  c = xb[p(null == a ? null : a)];
  if (!c && (c = xb._, !c)) {
    throw v("ISorted.-sorted-seq", a);
  }
  return c.call(null, a, b);
}
function zb(a, b, c) {
  if (a ? a.rc : a) {
    return a.rc(a, b, c);
  }
  var d;
  d = zb[p(null == a ? null : a)];
  if (!d && (d = zb._, !d)) {
    throw v("ISorted.-sorted-seq-from", a);
  }
  return d.call(null, a, b, c);
}
function Ab(a, b) {
  if (a ? a.pc : a) {
    return a.pc(a, b);
  }
  var c;
  c = Ab[p(null == a ? null : a)];
  if (!c && (c = Ab._, !c)) {
    throw v("ISorted.-entry-key", a);
  }
  return c.call(null, a, b);
}
function Bb(a) {
  if (a ? a.oc : a) {
    return a.oc(a);
  }
  var b;
  b = Bb[p(null == a ? null : a)];
  if (!b && (b = Bb._, !b)) {
    throw v("ISorted.-comparator", a);
  }
  return b.call(null, a);
}
function Cb(a, b) {
  if (a ? a.Oc : a) {
    return a.Oc(0, b);
  }
  var c;
  c = Cb[p(null == a ? null : a)];
  if (!c && (c = Cb._, !c)) {
    throw v("IWriter.-write", a);
  }
  return c.call(null, a, b);
}
var Db = {};
function Eb(a, b, c) {
  if (a ? a.K : a) {
    return a.K(a, b, c);
  }
  var d;
  d = Eb[p(null == a ? null : a)];
  if (!d && (d = Eb._, !d)) {
    throw v("IPrintWithWriter.-pr-writer", a);
  }
  return d.call(null, a, b, c);
}
function Fb(a, b, c) {
  if (a ? a.tc : a) {
    return a.tc(a, b, c);
  }
  var d;
  d = Fb[p(null == a ? null : a)];
  if (!d && (d = Fb._, !d)) {
    throw v("IWatchable.-notify-watches", a);
  }
  return d.call(null, a, b, c);
}
function Jb(a, b, c) {
  if (a ? a.sc : a) {
    return a.sc(a, b, c);
  }
  var d;
  d = Jb[p(null == a ? null : a)];
  if (!d && (d = Jb._, !d)) {
    throw v("IWatchable.-add-watch", a);
  }
  return d.call(null, a, b, c);
}
function Kb(a, b) {
  if (a ? a.uc : a) {
    return a.uc(a, b);
  }
  var c;
  c = Kb[p(null == a ? null : a)];
  if (!c && (c = Kb._, !c)) {
    throw v("IWatchable.-remove-watch", a);
  }
  return c.call(null, a, b);
}
function Lb(a) {
  if (a ? a.yb : a) {
    return a.yb(a);
  }
  var b;
  b = Lb[p(null == a ? null : a)];
  if (!b && (b = Lb._, !b)) {
    throw v("IEditableCollection.-as-transient", a);
  }
  return b.call(null, a);
}
function Mb(a, b) {
  if (a ? a.nb : a) {
    return a.nb(a, b);
  }
  var c;
  c = Mb[p(null == a ? null : a)];
  if (!c && (c = Mb._, !c)) {
    throw v("ITransientCollection.-conj!", a);
  }
  return c.call(null, a, b);
}
function Nb(a) {
  if (a ? a.ob : a) {
    return a.ob(a);
  }
  var b;
  b = Nb[p(null == a ? null : a)];
  if (!b && (b = Nb._, !b)) {
    throw v("ITransientCollection.-persistent!", a);
  }
  return b.call(null, a);
}
function Ob(a, b, c) {
  if (a ? a.Mb : a) {
    return a.Mb(a, b, c);
  }
  var d;
  d = Ob[p(null == a ? null : a)];
  if (!d && (d = Ob._, !d)) {
    throw v("ITransientAssociative.-assoc!", a);
  }
  return d.call(null, a, b, c);
}
function Pb(a, b, c) {
  if (a ? a.Nc : a) {
    return a.Nc(0, b, c);
  }
  var d;
  d = Pb[p(null == a ? null : a)];
  if (!d && (d = Pb._, !d)) {
    throw v("ITransientVector.-assoc-n!", a);
  }
  return d.call(null, a, b, c);
}
function Ub(a) {
  if (a ? a.Jc : a) {
    return a.Jc();
  }
  var b;
  b = Ub[p(null == a ? null : a)];
  if (!b && (b = Ub._, !b)) {
    throw v("IChunk.-drop-first", a);
  }
  return b.call(null, a);
}
function C(a) {
  if (a ? a.lc : a) {
    return a.lc(a);
  }
  var b;
  b = C[p(null == a ? null : a)];
  if (!b && (b = C._, !b)) {
    throw v("IChunkedSeq.-chunked-first", a);
  }
  return b.call(null, a);
}
function E(a) {
  if (a ? a.mc : a) {
    return a.mc(a);
  }
  var b;
  b = E[p(null == a ? null : a)];
  if (!b && (b = E._, !b)) {
    throw v("IChunkedSeq.-chunked-rest", a);
  }
  return b.call(null, a);
}
function Vb(a) {
  if (a ? a.kc : a) {
    return a.kc(a);
  }
  var b;
  b = Vb[p(null == a ? null : a)];
  if (!b && (b = Vb._, !b)) {
    throw v("IChunkedNext.-chunked-next", a);
  }
  return b.call(null, a);
}
function Wb(a) {
  this.Dd = a;
  this.F = 0;
  this.p = 1073741824;
}
Wb.prototype.Oc = function(a, b) {
  return this.Dd.append(b);
};
function Xb(a) {
  var b = new ka;
  a.K(null, new Wb(b), ra());
  return "" + y.g(b);
}
var Yb = "undefined" !== typeof Math.imul && 0 !== (Math.imul.h ? Math.imul.h(4294967295, 5) : Math.imul.call(null, 4294967295, 5)) ? function(a, b) {
  return Math.imul(a, b);
} : function(a, b) {
  var c = a & 65535, d = b & 65535;
  return c * d + ((a >>> 16 & 65535) * d + c * (b >>> 16 & 65535) << 16 >>> 0) | 0;
};
function Zb(a) {
  a = Yb(a, 3432918353);
  return Yb(a << 15 | a >>> -15, 461845907);
}
function $b(a, b) {
  var c = a ^ b;
  return Yb(c << 13 | c >>> -13, 5) + 3864292196;
}
function ac(a, b) {
  var c = a ^ b, c = Yb(c ^ c >>> 16, 2246822507), c = Yb(c ^ c >>> 13, 3266489909);
  return c ^ c >>> 16;
}
var bc = {}, cc = 0;
function ic(a) {
  255 < cc && (bc = {}, cc = 0);
  var b = bc[a];
  if ("number" !== typeof b) {
    a: {
      if (null != a) {
        if (b = a.length, 0 < b) {
          for (var c = 0, d = 0;;) {
            if (c < b) {
              var e = c + 1, d = Yb(31, d) + a.charCodeAt(c), c = e
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
    bc[a] = b;
    cc += 1;
  }
  return a = b;
}
function jc(a) {
  a && (a.p & 4194304 || a.fd) ? a = a.N(null) : "number" === typeof a ? a = Math.floor(a) % 2147483647 : !0 === a ? a = 1 : !1 === a ? a = 0 : "string" === typeof a ? (a = ic(a), 0 !== a && (a = Zb(a), a = $b(0, a), a = ac(a, 4))) : a = null == a ? 0 : u ? rb(a) : null;
  return a;
}
function kc(a) {
  var b;
  b = a.name;
  var c;
  a: {
    c = 1;
    for (var d = 0;;) {
      if (c < b.length) {
        var e = c + 2, d = $b(d, Zb(b.charCodeAt(c - 1) | b.charCodeAt(c) << 16));
        c = e;
      } else {
        c = d;
        break a;
      }
    }
    c = void 0;
  }
  c = 1 === (b.length & 1) ? c ^ Zb(b.charCodeAt(b.length - 1)) : c;
  b = ac(c, Yb(2, b.length));
  a = ic(a.Fa);
  return b ^ a + 2654435769 + (b << 6) + (b >> 2);
}
function lc(a, b) {
  if (r(mc.h ? mc.h(a, b) : mc.call(null, a, b))) {
    return 0;
  }
  var c = xa(a.Fa);
  if (r(c ? b.Fa : c)) {
    return-1;
  }
  if (r(a.Fa)) {
    if (xa(b.Fa)) {
      return 1;
    }
    c = nc.h ? nc.h(a.Fa, b.Fa) : nc.call(null, a.Fa, b.Fa);
    return 0 === c ? nc.h ? nc.h(a.name, b.name) : nc.call(null, a.name, b.name) : c;
  }
  return oc ? nc.h ? nc.h(a.name, b.name) : nc.call(null, a.name, b.name) : null;
}
function pc(a, b, c, d, e) {
  this.Fa = a;
  this.name = b;
  this.mb = c;
  this.wb = d;
  this.ka = e;
  this.p = 2154168321;
  this.F = 4096;
}
k = pc.prototype;
k.K = function(a, b) {
  return Cb(b, this.mb);
};
k.N = function() {
  var a = this.wb;
  return null != a ? a : this.wb = a = kc(this);
};
k.M = function(a, b) {
  return new pc(this.Fa, this.name, this.mb, this.wb, b);
};
k.L = function() {
  return this.ka;
};
k.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Qa.j(c, this, null);
      case 3:
        return Qa.j(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Da(b)));
};
k.g = function(a) {
  return Qa.j(a, this, null);
};
k.h = function(a, b) {
  return Qa.j(a, this, b);
};
k.J = function(a, b) {
  return b instanceof pc ? this.mb === b.mb : !1;
};
k.toString = function() {
  return this.mb;
};
var qc = function() {
  function a(a, b) {
    var c = null != a ? "" + y.g(a) + "/" + y.g(b) : b;
    return new pc(a, b, c, null, null);
  }
  function b(a) {
    return a instanceof pc ? a : c.h(null, a);
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
function F(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.p & 8388608 || a.Mc)) {
    return a.O(null);
  }
  if (a instanceof Array || "string" === typeof a) {
    return 0 === a.length ? null : new rc(a, 0);
  }
  if (ya(sb, a)) {
    return tb(a);
  }
  if (u) {
    throw Error("" + y.g(a) + " is not ISeqable");
  }
  return null;
}
function I(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.p & 64 || a.Lb)) {
    return a.ba(null);
  }
  a = F(a);
  return null == a ? null : Ma(a);
}
function J(a) {
  return null != a ? a && (a.p & 64 || a.Lb) ? a.fa(null) : (a = F(a)) ? Na(a) : sc : sc;
}
function L(a) {
  return null == a ? null : a && (a.p & 128 || a.Xb) ? a.ga(null) : F(J(a));
}
var mc = function() {
  function a(a, b) {
    return null == a ? null == b : a === b || qb(a, b);
  }
  var b = null, c = function() {
    function a(b, d, h) {
      var l = null;
      2 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (b.h(a, d)) {
          if (L(e)) {
            a = d, d = I(e), e = L(e);
          } else {
            return b.h(d, I(e));
          }
        } else {
          return!1;
        }
      }
    }
    a.v = 2;
    a.m = function(a) {
      var b = I(a);
      a = L(a);
      var d = I(a);
      a = J(a);
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
        return c.k(b, e, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.v = 2;
  b.m = c.m;
  b.g = function() {
    return!0;
  };
  b.h = a;
  b.k = c.k;
  return b;
}();
function uc(a, b) {
  var c = Zb(a), c = $b(0, c);
  return ac(c, b);
}
function vc(a) {
  var b = 0, c = 1;
  for (a = F(a);;) {
    if (null != a) {
      b += 1, c = Yb(31, c) + jc(I(a)) | 0, a = L(a);
    } else {
      return uc(c, b);
    }
  }
}
function wc(a) {
  var b = 0, c = 0;
  for (a = F(a);;) {
    if (null != a) {
      b += 1, c = c + jc(I(a)) | 0, a = L(a);
    } else {
      return uc(c, b);
    }
  }
}
Fa["null"] = !0;
Ga["null"] = function() {
  return 0;
};
Date.prototype.J = function(a, b) {
  return b instanceof Date && this.toString() === b.toString();
};
qb.number = function(a, b) {
  return a === b;
};
eb["function"] = !0;
fb["function"] = function() {
  return null;
};
Ea["function"] = !0;
rb._ = function(a) {
  return a[ca] || (a[ca] = ++ea);
};
function xc(a) {
  return a + 1;
}
var yc = function() {
  function a(a, b, c, d) {
    for (var l = Ga(a);;) {
      if (d < l) {
        c = b.h ? b.h(c, A.h(a, d)) : b.call(null, c, A.h(a, d)), d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    for (var d = Ga(a), l = 0;;) {
      if (l < d) {
        c = b.h ? b.h(c, A.h(a, l)) : b.call(null, c, A.h(a, l)), l += 1;
      } else {
        return c;
      }
    }
  }
  function c(a, b) {
    var c = Ga(a);
    if (0 === c) {
      return b.q ? b.q() : b.call(null);
    }
    for (var d = A.h(a, 0), l = 1;;) {
      if (l < c) {
        d = b.h ? b.h(d, A.h(a, l)) : b.call(null, d, A.h(a, l)), l += 1;
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
  d.o = a;
  return d;
}(), zc = function() {
  function a(a, b, c, d) {
    for (var l = a.length;;) {
      if (d < l) {
        c = b.h ? b.h(c, a[d]) : b.call(null, c, a[d]), d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    for (var d = a.length, l = 0;;) {
      if (l < d) {
        c = b.h ? b.h(c, a[l]) : b.call(null, c, a[l]), l += 1;
      } else {
        return c;
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
        d = b.h ? b.h(d, a[l]) : b.call(null, d, a[l]), l += 1;
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
  d.o = a;
  return d;
}();
function Ac(a) {
  return a ? a.p & 2 || a.dd ? !0 : a.p ? !1 : ya(Fa, a) : ya(Fa, a);
}
function Bc(a) {
  return a ? a.p & 16 || a.Kc ? !0 : a.p ? !1 : ya(Ka, a) : ya(Ka, a);
}
function rc(a, b) {
  this.l = a;
  this.D = b;
  this.p = 166199550;
  this.F = 8192;
}
k = rc.prototype;
k.toString = function() {
  return Xb(this);
};
k.H = function(a, b) {
  var c = b + this.D;
  return c < this.l.length ? this.l[c] : null;
};
k.sa = function(a, b, c) {
  a = b + this.D;
  return a < this.l.length ? this.l[a] : c;
};
k.ga = function() {
  return this.D + 1 < this.l.length ? new rc(this.l, this.D + 1) : null;
};
k.T = function() {
  return this.l.length - this.D;
};
k.zb = function() {
  var a = Ga(this);
  return 0 < a ? new Cc(this, a - 1, null) : null;
};
k.N = function() {
  return vc(this);
};
k.J = function(a, b) {
  return Dc.h ? Dc.h(this, b) : Dc.call(null, this, b);
};
k.W = function() {
  return sc;
};
k.da = function(a, b) {
  return zc.o(this.l, b, this.l[this.D], this.D + 1);
};
k.ea = function(a, b, c) {
  return zc.o(this.l, b, c, this.D);
};
k.ba = function() {
  return this.l[this.D];
};
k.fa = function() {
  return this.D + 1 < this.l.length ? new rc(this.l, this.D + 1) : sc;
};
k.O = function() {
  return this;
};
k.R = function(a, b) {
  return O.h ? O.h(b, this) : O.call(null, b, this);
};
var Ec = function() {
  function a(a, b) {
    return b < a.length ? new rc(a, b) : null;
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
}(), N = function() {
  function a(a, b) {
    return Ec.h(a, b);
  }
  function b(a) {
    return Ec.h(a, 0);
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
function Cc(a, b, c) {
  this.Tb = a;
  this.D = b;
  this.w = c;
  this.p = 32374990;
  this.F = 8192;
}
k = Cc.prototype;
k.toString = function() {
  return Xb(this);
};
k.L = function() {
  return this.w;
};
k.ga = function() {
  return 0 < this.D ? new Cc(this.Tb, this.D - 1, null) : null;
};
k.T = function() {
  return this.D + 1;
};
k.N = function() {
  return vc(this);
};
k.J = function(a, b) {
  return Dc.h ? Dc.h(this, b) : Dc.call(null, this, b);
};
k.W = function() {
  return Fc.h ? Fc.h(sc, this.w) : Fc.call(null, sc, this.w);
};
k.da = function(a, b) {
  return Gc.h ? Gc.h(b, this) : Gc.call(null, b, this);
};
k.ea = function(a, b, c) {
  return Gc.j ? Gc.j(b, c, this) : Gc.call(null, b, c, this);
};
k.ba = function() {
  return A.h(this.Tb, this.D);
};
k.fa = function() {
  return 0 < this.D ? new Cc(this.Tb, this.D - 1, null) : sc;
};
k.O = function() {
  return this;
};
k.M = function(a, b) {
  return new Cc(this.Tb, this.D, b);
};
k.R = function(a, b) {
  return O.h ? O.h(b, this) : O.call(null, b, this);
};
function Hc(a) {
  return I(L(a));
}
function Mc(a) {
  for (;;) {
    var b = L(a);
    if (null != b) {
      a = b;
    } else {
      return I(a);
    }
  }
}
qb._ = function(a, b) {
  return a === b;
};
var Nc = function() {
  function a(a, b) {
    return null != a ? Ja(a, b) : Ja(sc, b);
  }
  var b = null, c = function() {
    function a(b, d, h) {
      var l = null;
      2 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (r(e)) {
          a = b.h(a, d), d = I(e), e = L(e);
        } else {
          return b.h(a, d);
        }
      }
    }
    a.v = 2;
    a.m = function(a) {
      var b = I(a);
      a = L(a);
      var d = I(a);
      a = J(a);
      return c(b, d, a);
    };
    a.k = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.k(b, e, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.v = 2;
  b.m = c.m;
  b.h = a;
  b.k = c.k;
  return b;
}();
function Oc(a) {
  return null == a ? null : Ha(a);
}
function P(a) {
  if (null != a) {
    if (a && (a.p & 2 || a.dd)) {
      a = a.T(null);
    } else {
      if (a instanceof Array) {
        a = a.length;
      } else {
        if ("string" === typeof a) {
          a = a.length;
        } else {
          if (ya(Fa, a)) {
            a = Ga(a);
          } else {
            if (u) {
              a: {
                a = F(a);
                for (var b = 0;;) {
                  if (Ac(a)) {
                    a = b + Ga(a);
                    break a;
                  }
                  a = L(a);
                  b += 1;
                }
                a = void 0;
              }
            } else {
              a = null;
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
var Pc = function() {
  function a(a, b, c) {
    for (;;) {
      if (null == a) {
        return c;
      }
      if (0 === b) {
        return F(a) ? I(a) : c;
      }
      if (Bc(a)) {
        return A.j(a, b, c);
      }
      if (F(a)) {
        a = L(a), b -= 1;
      } else {
        return u ? c : null;
      }
    }
  }
  function b(a, b) {
    for (;;) {
      if (null == a) {
        throw Error("Index out of bounds");
      }
      if (0 === b) {
        if (F(a)) {
          return I(a);
        }
        throw Error("Index out of bounds");
      }
      if (Bc(a)) {
        return A.h(a, b);
      }
      if (F(a)) {
        var c = L(a), g = b - 1;
        a = c;
        b = g;
      } else {
        if (u) {
          throw Error("Index out of bounds");
        }
        return null;
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
}(), Q = function() {
  function a(a, b, c) {
    if ("number" !== typeof b) {
      throw Error("index argument to nth must be a number.");
    }
    if (null == a) {
      return c;
    }
    if (a && (a.p & 16 || a.Kc)) {
      return a.sa(null, b, c);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : c;
    }
    if (ya(Ka, a)) {
      return A.h(a, b);
    }
    if (a ? a.p & 64 || a.Lb || (a.p ? 0 : ya(La, a)) : ya(La, a)) {
      return Pc.j(a, b, c);
    }
    if (u) {
      throw Error("nth not supported on this type " + y.g(Ca(za(a))));
    }
    return null;
  }
  function b(a, b) {
    if ("number" !== typeof b) {
      throw Error("index argument to nth must be a number");
    }
    if (null == a) {
      return a;
    }
    if (a && (a.p & 16 || a.Kc)) {
      return a.H(null, b);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : null;
    }
    if (ya(Ka, a)) {
      return A.h(a, b);
    }
    if (a ? a.p & 64 || a.Lb || (a.p ? 0 : ya(La, a)) : ya(La, a)) {
      return Pc.h(a, b);
    }
    if (u) {
      throw Error("nth not supported on this type " + y.g(Ca(za(a))));
    }
    return null;
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
    return null != a ? a && (a.p & 256 || a.Lc) ? a.Q(null, b, c) : a instanceof Array ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : ya(Pa, a) ? Qa.j(a, b, c) : u ? c : null : c;
  }
  function b(a, b) {
    return null == a ? null : a && (a.p & 256 || a.Lc) ? a.P(null, b) : a instanceof Array ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : ya(Pa, a) ? Qa.h(a, b) : null;
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
}(), S = function() {
  function a(a, b, c) {
    return null != a ? Sa(a, b, c) : Qc.h ? Qc.h([b], [c]) : Qc.call(null, [b], [c]);
  }
  var b = null, c = function() {
    function a(b, d, h, l) {
      var n = null;
      3 < arguments.length && (n = N(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, h, n);
    }
    function c(a, d, e, l) {
      for (;;) {
        if (a = b.j(a, d, e), r(l)) {
          d = I(l), e = Hc(l), l = L(L(l));
        } else {
          return a;
        }
      }
    }
    a.v = 3;
    a.m = function(a) {
      var b = I(a);
      a = L(a);
      var d = I(a);
      a = L(a);
      var l = I(a);
      a = J(a);
      return c(b, d, l, a);
    };
    a.k = c;
    return a;
  }(), b = function(b, e, f, g) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, e, f);
      default:
        return c.k(b, e, f, N(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.v = 3;
  b.m = c.m;
  b.j = a;
  b.k = c.k;
  return b;
}(), Rc = function() {
  function a(a, b) {
    return null == a ? null : Ua(a, b);
  }
  var b = null, c = function() {
    function a(b, d, h) {
      var l = null;
      2 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (null == a) {
          return null;
        }
        a = b.h(a, d);
        if (r(e)) {
          d = I(e), e = L(e);
        } else {
          return a;
        }
      }
    }
    a.v = 2;
    a.m = function(a) {
      var b = I(a);
      a = L(a);
      var d = I(a);
      a = J(a);
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
        return c.k(b, e, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.v = 2;
  b.m = c.m;
  b.g = function(a) {
    return a;
  };
  b.h = a;
  b.k = c.k;
  return b;
}();
function Sc(a) {
  var b = "function" == p(a);
  return b ? b : a ? r(r(null) ? null : a.cd) ? !0 : a.Rd ? !1 : ya(Ea, a) : ya(Ea, a);
}
function Tc(a, b) {
  this.n = a;
  this.w = b;
  this.F = 0;
  this.p = 393217;
}
k = Tc.prototype;
k.call = function() {
  var a = null;
  return a = function(a, c, d, e, f, g, h, l, n, m, s, w, x, t, z, G, H, M, K, Y, da, ga) {
    switch(arguments.length) {
      case 1:
        var D = a, D = this;
        return D.n.q ? D.n.q() : D.n.call(null);
      case 2:
        return D = a, D = this, D.n.g ? D.n.g(c) : D.n.call(null, c);
      case 3:
        return D = a, D = this, D.n.h ? D.n.h(c, d) : D.n.call(null, c, d);
      case 4:
        return D = a, D = this, D.n.j ? D.n.j(c, d, e) : D.n.call(null, c, d, e);
      case 5:
        return D = a, D = this, D.n.o ? D.n.o(c, d, e, f) : D.n.call(null, c, d, e, f);
      case 6:
        return D = a, D = this, D.n.I ? D.n.I(c, d, e, f, g) : D.n.call(null, c, d, e, f, g);
      case 7:
        return D = a, D = this, D.n.ha ? D.n.ha(c, d, e, f, g, h) : D.n.call(null, c, d, e, f, g, h);
      case 8:
        return D = a, D = this, D.n.wa ? D.n.wa(c, d, e, f, g, h, l) : D.n.call(null, c, d, e, f, g, h, l);
      case 9:
        return D = a, D = this, D.n.hb ? D.n.hb(c, d, e, f, g, h, l, n) : D.n.call(null, c, d, e, f, g, h, l, n);
      case 10:
        return D = a, D = this, D.n.ib ? D.n.ib(c, d, e, f, g, h, l, n, m) : D.n.call(null, c, d, e, f, g, h, l, n, m);
      case 11:
        return D = a, D = this, D.n.Wa ? D.n.Wa(c, d, e, f, g, h, l, n, m, s) : D.n.call(null, c, d, e, f, g, h, l, n, m, s);
      case 12:
        return D = a, D = this, D.n.Xa ? D.n.Xa(c, d, e, f, g, h, l, n, m, s, w) : D.n.call(null, c, d, e, f, g, h, l, n, m, s, w);
      case 13:
        return D = a, D = this, D.n.Ya ? D.n.Ya(c, d, e, f, g, h, l, n, m, s, w, x) : D.n.call(null, c, d, e, f, g, h, l, n, m, s, w, x);
      case 14:
        return D = a, D = this, D.n.Za ? D.n.Za(c, d, e, f, g, h, l, n, m, s, w, x, t) : D.n.call(null, c, d, e, f, g, h, l, n, m, s, w, x, t);
      case 15:
        return D = a, D = this, D.n.$a ? D.n.$a(c, d, e, f, g, h, l, n, m, s, w, x, t, z) : D.n.call(null, c, d, e, f, g, h, l, n, m, s, w, x, t, z);
      case 16:
        return D = a, D = this, D.n.ab ? D.n.ab(c, d, e, f, g, h, l, n, m, s, w, x, t, z, G) : D.n.call(null, c, d, e, f, g, h, l, n, m, s, w, x, t, z, G);
      case 17:
        return D = a, D = this, D.n.bb ? D.n.bb(c, d, e, f, g, h, l, n, m, s, w, x, t, z, G, H) : D.n.call(null, c, d, e, f, g, h, l, n, m, s, w, x, t, z, G, H);
      case 18:
        return D = a, D = this, D.n.cb ? D.n.cb(c, d, e, f, g, h, l, n, m, s, w, x, t, z, G, H, M) : D.n.call(null, c, d, e, f, g, h, l, n, m, s, w, x, t, z, G, H, M);
      case 19:
        return D = a, D = this, D.n.eb ? D.n.eb(c, d, e, f, g, h, l, n, m, s, w, x, t, z, G, H, M, K) : D.n.call(null, c, d, e, f, g, h, l, n, m, s, w, x, t, z, G, H, M, K);
      case 20:
        return D = a, D = this, D.n.fb ? D.n.fb(c, d, e, f, g, h, l, n, m, s, w, x, t, z, G, H, M, K, Y) : D.n.call(null, c, d, e, f, g, h, l, n, m, s, w, x, t, z, G, H, M, K, Y);
      case 21:
        return D = a, D = this, D.n.gb ? D.n.gb(c, d, e, f, g, h, l, n, m, s, w, x, t, z, G, H, M, K, Y, da) : D.n.call(null, c, d, e, f, g, h, l, n, m, s, w, x, t, z, G, H, M, K, Y, da);
      case 22:
        return D = a, D = this, T.ed ? T.ed(D.n, c, d, e, f, g, h, l, n, m, s, w, x, t, z, G, H, M, K, Y, da, ga) : T.call(null, D.n, c, d, e, f, g, h, l, n, m, s, w, x, t, z, G, H, M, K, Y, da, ga);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Da(b)));
};
k.q = function() {
  return this.n.q ? this.n.q() : this.n.call(null);
};
k.g = function(a) {
  return this.n.g ? this.n.g(a) : this.n.call(null, a);
};
k.h = function(a, b) {
  return this.n.h ? this.n.h(a, b) : this.n.call(null, a, b);
};
k.j = function(a, b, c) {
  return this.n.j ? this.n.j(a, b, c) : this.n.call(null, a, b, c);
};
k.o = function(a, b, c, d) {
  return this.n.o ? this.n.o(a, b, c, d) : this.n.call(null, a, b, c, d);
};
k.I = function(a, b, c, d, e) {
  return this.n.I ? this.n.I(a, b, c, d, e) : this.n.call(null, a, b, c, d, e);
};
k.ha = function(a, b, c, d, e, f) {
  return this.n.ha ? this.n.ha(a, b, c, d, e, f) : this.n.call(null, a, b, c, d, e, f);
};
k.wa = function(a, b, c, d, e, f, g) {
  return this.n.wa ? this.n.wa(a, b, c, d, e, f, g) : this.n.call(null, a, b, c, d, e, f, g);
};
k.hb = function(a, b, c, d, e, f, g, h) {
  return this.n.hb ? this.n.hb(a, b, c, d, e, f, g, h) : this.n.call(null, a, b, c, d, e, f, g, h);
};
k.ib = function(a, b, c, d, e, f, g, h, l) {
  return this.n.ib ? this.n.ib(a, b, c, d, e, f, g, h, l) : this.n.call(null, a, b, c, d, e, f, g, h, l);
};
k.Wa = function(a, b, c, d, e, f, g, h, l, n) {
  return this.n.Wa ? this.n.Wa(a, b, c, d, e, f, g, h, l, n) : this.n.call(null, a, b, c, d, e, f, g, h, l, n);
};
k.Xa = function(a, b, c, d, e, f, g, h, l, n, m) {
  return this.n.Xa ? this.n.Xa(a, b, c, d, e, f, g, h, l, n, m) : this.n.call(null, a, b, c, d, e, f, g, h, l, n, m);
};
k.Ya = function(a, b, c, d, e, f, g, h, l, n, m, s) {
  return this.n.Ya ? this.n.Ya(a, b, c, d, e, f, g, h, l, n, m, s) : this.n.call(null, a, b, c, d, e, f, g, h, l, n, m, s);
};
k.Za = function(a, b, c, d, e, f, g, h, l, n, m, s, w) {
  return this.n.Za ? this.n.Za(a, b, c, d, e, f, g, h, l, n, m, s, w) : this.n.call(null, a, b, c, d, e, f, g, h, l, n, m, s, w);
};
k.$a = function(a, b, c, d, e, f, g, h, l, n, m, s, w, x) {
  return this.n.$a ? this.n.$a(a, b, c, d, e, f, g, h, l, n, m, s, w, x) : this.n.call(null, a, b, c, d, e, f, g, h, l, n, m, s, w, x);
};
k.ab = function(a, b, c, d, e, f, g, h, l, n, m, s, w, x, t) {
  return this.n.ab ? this.n.ab(a, b, c, d, e, f, g, h, l, n, m, s, w, x, t) : this.n.call(null, a, b, c, d, e, f, g, h, l, n, m, s, w, x, t);
};
k.bb = function(a, b, c, d, e, f, g, h, l, n, m, s, w, x, t, z) {
  return this.n.bb ? this.n.bb(a, b, c, d, e, f, g, h, l, n, m, s, w, x, t, z) : this.n.call(null, a, b, c, d, e, f, g, h, l, n, m, s, w, x, t, z);
};
k.cb = function(a, b, c, d, e, f, g, h, l, n, m, s, w, x, t, z, G) {
  return this.n.cb ? this.n.cb(a, b, c, d, e, f, g, h, l, n, m, s, w, x, t, z, G) : this.n.call(null, a, b, c, d, e, f, g, h, l, n, m, s, w, x, t, z, G);
};
k.eb = function(a, b, c, d, e, f, g, h, l, n, m, s, w, x, t, z, G, H) {
  return this.n.eb ? this.n.eb(a, b, c, d, e, f, g, h, l, n, m, s, w, x, t, z, G, H) : this.n.call(null, a, b, c, d, e, f, g, h, l, n, m, s, w, x, t, z, G, H);
};
k.fb = function(a, b, c, d, e, f, g, h, l, n, m, s, w, x, t, z, G, H, M) {
  return this.n.fb ? this.n.fb(a, b, c, d, e, f, g, h, l, n, m, s, w, x, t, z, G, H, M) : this.n.call(null, a, b, c, d, e, f, g, h, l, n, m, s, w, x, t, z, G, H, M);
};
k.gb = function(a, b, c, d, e, f, g, h, l, n, m, s, w, x, t, z, G, H, M, K) {
  return this.n.gb ? this.n.gb(a, b, c, d, e, f, g, h, l, n, m, s, w, x, t, z, G, H, M, K) : this.n.call(null, a, b, c, d, e, f, g, h, l, n, m, s, w, x, t, z, G, H, M, K);
};
k.cd = !0;
k.M = function(a, b) {
  return new Tc(this.n, b);
};
k.L = function() {
  return this.w;
};
function Fc(a, b) {
  return Sc(a) && !(a ? a.p & 262144 || a.qd || (a.p ? 0 : ya(gb, a)) : ya(gb, a)) ? new Tc(a, b) : null == a ? null : hb(a, b);
}
function Uc(a) {
  var b = null != a;
  return(b ? a ? a.p & 131072 || a.hd || (a.p ? 0 : ya(eb, a)) : ya(eb, a) : b) ? fb(a) : null;
}
var Vc = function() {
  function a(a, b) {
    return null == a ? null : $a(a, b);
  }
  var b = null, c = function() {
    function a(b, d, h) {
      var l = null;
      2 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (null == a) {
          return null;
        }
        a = b.h(a, d);
        if (r(e)) {
          d = I(e), e = L(e);
        } else {
          return a;
        }
      }
    }
    a.v = 2;
    a.m = function(a) {
      var b = I(a);
      a = L(a);
      var d = I(a);
      a = J(a);
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
        return c.k(b, e, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.v = 2;
  b.m = c.m;
  b.g = function(a) {
    return a;
  };
  b.h = a;
  b.k = c.k;
  return b;
}();
function Wc(a) {
  return null == a ? !1 : a ? a.p & 8 || a.Kd ? !0 : a.p ? !1 : ya(Ia, a) : ya(Ia, a);
}
function Xc(a) {
  return null == a ? !1 : a ? a.p & 4096 || a.Pd ? !0 : a.p ? !1 : ya(Za, a) : ya(Za, a);
}
function Yc(a) {
  return a ? a.p & 16777216 || a.Od ? !0 : a.p ? !1 : ya(ub, a) : ya(ub, a);
}
function ed(a) {
  return null == a ? !1 : a ? a.p & 1024 || a.Md ? !0 : a.p ? !1 : ya(Ta, a) : ya(Ta, a);
}
function id(a) {
  return a ? a.p & 16384 || a.Qd ? !0 : a.p ? !1 : ya(cb, a) : ya(cb, a);
}
function jd(a) {
  return a ? a.F & 512 || a.Jd ? !0 : !1 : !1;
}
function kd(a) {
  var b = [];
  ja(a, function(a) {
    return function(b, e) {
      return a.push(e);
    };
  }(b));
  return b;
}
function ld(a, b, c, d, e) {
  for (;0 !== e;) {
    c[d] = a[b], d += 1, e -= 1, b += 1;
  }
}
var md = {};
function nd(a) {
  return null == a ? !1 : a ? a.p & 64 || a.Lb ? !0 : a.p ? !1 : ya(La, a) : ya(La, a);
}
function od(a) {
  return r(a) ? !0 : !1;
}
function pd(a, b) {
  return R.j(a, b, md) === md ? !1 : !0;
}
function nc(a, b) {
  if (a === b) {
    return 0;
  }
  if (null == a) {
    return-1;
  }
  if (null == b) {
    return 1;
  }
  if (za(a) === za(b)) {
    return a && (a.F & 2048 || a.Vb) ? a.Wb(null, b) : oa(a, b);
  }
  if (u) {
    throw Error("compare on non-nil objects of different types");
  }
  return null;
}
var qd = function() {
  function a(a, b, c, g) {
    for (;;) {
      var h = nc(Q.h(a, g), Q.h(b, g));
      if (0 === h && g + 1 < c) {
        g += 1;
      } else {
        return h;
      }
    }
  }
  function b(a, b) {
    var f = P(a), g = P(b);
    return f < g ? -1 : f > g ? 1 : u ? c.o(a, b, f, 0) : null;
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
  c.o = a;
  return c;
}();
function rd(a) {
  return mc.h(a, nc) ? nc : function(b, c) {
    var d = a.h ? a.h(b, c) : a.call(null, b, c);
    return "number" === typeof d ? d : r(d) ? -1 : r(a.h ? a.h(c, b) : a.call(null, c, b)) ? 1 : 0;
  };
}
var td = function() {
  function a(a, b) {
    if (F(b)) {
      var c = sd.g ? sd.g(b) : sd.call(null, b);
      pa(c, rd(a));
      return F(c);
    }
    return sc;
  }
  function b(a) {
    return c.h(nc, a);
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
}(), ud = function() {
  function a(a, b, c) {
    return td.h(function(c, f) {
      return rd(b).call(null, a.g ? a.g(c) : a.call(null, c), a.g ? a.g(f) : a.call(null, f));
    }, c);
  }
  function b(a, b) {
    return c.j(a, nc, b);
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
}(), Gc = function() {
  function a(a, b, c) {
    for (c = F(c);;) {
      if (c) {
        b = a.h ? a.h(b, I(c)) : a.call(null, b, I(c)), c = L(c);
      } else {
        return b;
      }
    }
  }
  function b(a, b) {
    var c = F(b);
    return c ? vd.j ? vd.j(a, I(c), L(c)) : vd.call(null, a, I(c), L(c)) : a.q ? a.q() : a.call(null);
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
}(), vd = function() {
  function a(a, b, c) {
    return c && (c.p & 524288 || c.kd) ? c.ea(null, a, b) : c instanceof Array ? zc.j(c, a, b) : "string" === typeof c ? zc.j(c, a, b) : ya(jb, c) ? ob.j(c, a, b) : u ? Gc.j(a, b, c) : null;
  }
  function b(a, b) {
    return b && (b.p & 524288 || b.kd) ? b.da(null, a) : b instanceof Array ? zc.h(b, a) : "string" === typeof b ? zc.h(b, a) : ya(jb, b) ? ob.h(b, a) : u ? Gc.h(a, b) : null;
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
function wd(a, b, c) {
  return null != c ? pb(c, a, b) : b;
}
var xd = function() {
  var a = null, b = function() {
    function b(a, c, g) {
      var h = null;
      2 < arguments.length && (h = N(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, a, c, h);
    }
    function d(b, c, d) {
      return vd.j(a, b + c, d);
    }
    b.v = 2;
    b.m = function(a) {
      var b = I(a);
      a = L(a);
      var c = I(a);
      a = J(a);
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
        return b.k(a, d, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.v = 2;
  a.m = b.m;
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
}(), yd = function() {
  var a = null, b = function() {
    function a(c, f, g) {
      var h = null;
      2 < arguments.length && (h = N(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, f, h);
    }
    function b(a, c, d) {
      for (;;) {
        if (a > c) {
          if (L(d)) {
            a = c, c = I(d), d = L(d);
          } else {
            return c > I(d);
          }
        } else {
          return!1;
        }
      }
    }
    a.v = 2;
    a.m = function(a) {
      var c = I(a);
      a = L(a);
      var g = I(a);
      a = J(a);
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
        return b.k(a, d, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.v = 2;
  a.m = b.m;
  a.g = function() {
    return!0;
  };
  a.h = function(a, b) {
    return a > b;
  };
  a.k = b.k;
  return a;
}(), zd = function() {
  var a = null, b = function() {
    function a(c, f, g) {
      var h = null;
      2 < arguments.length && (h = N(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, f, h);
    }
    function b(a, c, d) {
      for (;;) {
        if (a >= c) {
          if (L(d)) {
            a = c, c = I(d), d = L(d);
          } else {
            return c >= I(d);
          }
        } else {
          return!1;
        }
      }
    }
    a.v = 2;
    a.m = function(a) {
      var c = I(a);
      a = L(a);
      var g = I(a);
      a = J(a);
      return b(c, g, a);
    };
    a.k = b;
    return a;
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a >= d;
      default:
        return b.k(a, d, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.v = 2;
  a.m = b.m;
  a.g = function() {
    return!0;
  };
  a.h = function(a, b) {
    return a >= b;
  };
  a.k = b.k;
  return a;
}();
function Ad(a) {
  return a - 1;
}
var Bd = function() {
  function a(a, b) {
    return a > b ? a : b;
  }
  var b = null, c = function() {
    function a(b, d, h) {
      var l = null;
      2 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      return vd.j(b, a > d ? a : d, e);
    }
    a.v = 2;
    a.m = function(a) {
      var b = I(a);
      a = L(a);
      var d = I(a);
      a = J(a);
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
        return c.k(b, e, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.v = 2;
  b.m = c.m;
  b.g = function(a) {
    return a;
  };
  b.h = a;
  b.k = c.k;
  return b;
}(), Kd = function() {
  function a(a, b) {
    return a < b ? a : b;
  }
  var b = null, c = function() {
    function a(b, d, h) {
      var l = null;
      2 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      return vd.j(b, a < d ? a : d, e);
    }
    a.v = 2;
    a.m = function(a) {
      var b = I(a);
      a = L(a);
      var d = I(a);
      a = J(a);
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
        return c.k(b, e, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.v = 2;
  b.m = c.m;
  b.g = function(a) {
    return a;
  };
  b.h = a;
  b.k = c.k;
  return b;
}();
function Ld(a) {
  return 0 <= a ? Math.floor.g ? Math.floor.g(a) : Math.floor.call(null, a) : Math.ceil.g ? Math.ceil.g(a) : Math.ceil.call(null, a);
}
function Md(a, b) {
  return Ld((a - a % b) / b);
}
function Nd(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24;
}
function Od(a) {
  return 0 === a;
}
function Pd(a) {
  var b = 1;
  for (a = F(a);;) {
    if (a && 0 < b) {
      b -= 1, a = L(a);
    } else {
      return a;
    }
  }
}
var y = function() {
  function a(a) {
    return null == a ? "" : a.toString();
  }
  var b = null, c = function() {
    function a(b, d) {
      var h = null;
      1 < arguments.length && (h = N(Array.prototype.slice.call(arguments, 1), 0));
      return c.call(this, b, h);
    }
    function c(a, d) {
      for (var e = new ka(b.g(a)), l = d;;) {
        if (r(l)) {
          e = e.append(b.g(I(l))), l = L(l);
        } else {
          return e.toString();
        }
      }
    }
    a.v = 1;
    a.m = function(a) {
      var b = I(a);
      a = J(a);
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
        return c.k(b, N(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.v = 1;
  b.m = c.m;
  b.q = function() {
    return "";
  };
  b.g = a;
  b.k = c.k;
  return b;
}(), Qd = function() {
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
function Dc(a, b) {
  return od(Yc(b) ? function() {
    for (var c = F(a), d = F(b);;) {
      if (null == c) {
        return null == d;
      }
      if (null == d) {
        return!1;
      }
      if (mc.h(I(c), I(d))) {
        c = L(c), d = L(d);
      } else {
        return u ? !1 : null;
      }
    }
  }() : null);
}
function Rd(a) {
  var b = 0;
  for (a = F(a);;) {
    if (a) {
      var c = I(a), b = (b + (jc(Sd.g ? Sd.g(c) : Sd.call(null, c)) ^ jc(Td.g ? Td.g(c) : Td.call(null, c)))) % 4503599627370496;
      a = L(a);
    } else {
      return b;
    }
  }
}
function Ud(a, b, c, d, e) {
  this.w = a;
  this.first = b;
  this.Ua = c;
  this.count = d;
  this.A = e;
  this.p = 65937646;
  this.F = 8192;
}
k = Ud.prototype;
k.toString = function() {
  return Xb(this);
};
k.L = function() {
  return this.w;
};
k.ga = function() {
  return 1 === this.count ? null : this.Ua;
};
k.T = function() {
  return this.count;
};
k.jb = function() {
  return this.first;
};
k.N = function() {
  var a = this.A;
  return null != a ? a : this.A = a = vc(this);
};
k.J = function(a, b) {
  return Dc(this, b);
};
k.W = function() {
  return sc;
};
k.da = function(a, b) {
  return Gc.h(b, this);
};
k.ea = function(a, b, c) {
  return Gc.j(b, c, this);
};
k.ba = function() {
  return this.first;
};
k.fa = function() {
  return 1 === this.count ? sc : this.Ua;
};
k.O = function() {
  return this;
};
k.M = function(a, b) {
  return new Ud(b, this.first, this.Ua, this.count, this.A);
};
k.R = function(a, b) {
  return new Ud(this.w, b, this, this.count + 1, null);
};
function Vd(a) {
  this.w = a;
  this.p = 65937614;
  this.F = 8192;
}
k = Vd.prototype;
k.toString = function() {
  return Xb(this);
};
k.L = function() {
  return this.w;
};
k.ga = function() {
  return null;
};
k.T = function() {
  return 0;
};
k.jb = function() {
  return null;
};
k.N = function() {
  return 0;
};
k.J = function(a, b) {
  return Dc(this, b);
};
k.W = function() {
  return this;
};
k.da = function(a, b) {
  return Gc.h(b, this);
};
k.ea = function(a, b, c) {
  return Gc.j(b, c, this);
};
k.ba = function() {
  return null;
};
k.fa = function() {
  return sc;
};
k.O = function() {
  return null;
};
k.M = function(a, b) {
  return new Vd(b);
};
k.R = function(a, b) {
  return new Ud(this.w, b, null, 1, null);
};
var sc = new Vd(null);
function Wd(a) {
  return(a ? a.p & 134217728 || a.Nd || (a.p ? 0 : ya(vb, a)) : ya(vb, a)) ? wb(a) : vd.j(Nc, sc, a);
}
var Xd = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = N(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b;
    if (a instanceof rc && 0 === a.D) {
      b = a.l;
    } else {
      a: {
        for (b = [];;) {
          if (null != a) {
            b.push(a.ba(null)), a = a.ga(null);
          } else {
            break a;
          }
        }
        b = void 0;
      }
    }
    a = b.length;
    for (var e = sc;;) {
      if (0 < a) {
        var f = a - 1, e = e.R(null, b[a - 1]);
        a = f;
      } else {
        return e;
      }
    }
  }
  a.v = 0;
  a.m = function(a) {
    a = F(a);
    return b(a);
  };
  a.k = b;
  return a;
}();
function Yd(a, b, c, d) {
  this.w = a;
  this.first = b;
  this.Ua = c;
  this.A = d;
  this.p = 65929452;
  this.F = 8192;
}
k = Yd.prototype;
k.toString = function() {
  return Xb(this);
};
k.L = function() {
  return this.w;
};
k.ga = function() {
  return null == this.Ua ? null : F(this.Ua);
};
k.N = function() {
  var a = this.A;
  return null != a ? a : this.A = a = vc(this);
};
k.J = function(a, b) {
  return Dc(this, b);
};
k.W = function() {
  return Fc(sc, this.w);
};
k.da = function(a, b) {
  return Gc.h(b, this);
};
k.ea = function(a, b, c) {
  return Gc.j(b, c, this);
};
k.ba = function() {
  return this.first;
};
k.fa = function() {
  return null == this.Ua ? sc : this.Ua;
};
k.O = function() {
  return this;
};
k.M = function(a, b) {
  return new Yd(b, this.first, this.Ua, this.A);
};
k.R = function(a, b) {
  return new Yd(null, b, this, this.A);
};
function O(a, b) {
  var c = null == b;
  return(c ? c : b && (b.p & 64 || b.Lb)) ? new Yd(null, a, b, null) : new Yd(null, a, F(b), null);
}
function U(a, b, c, d) {
  this.Fa = a;
  this.name = b;
  this.ma = c;
  this.wb = d;
  this.p = 2153775105;
  this.F = 4096;
}
k = U.prototype;
k.K = function(a, b) {
  return Cb(b, ":" + y.g(this.ma));
};
k.N = function() {
  var a = this.wb;
  return null != a ? a : this.wb = a = kc(this) + 2654435769;
};
k.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return R.h(c, this);
      case 3:
        return R.j(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Da(b)));
};
k.g = function(a) {
  return R.h(a, this);
};
k.h = function(a, b) {
  return R.j(a, this, b);
};
k.J = function(a, b) {
  return b instanceof U ? this.ma === b.ma : !1;
};
k.toString = function() {
  return ":" + y.g(this.ma);
};
function V(a, b) {
  return a === b ? !0 : a instanceof U && b instanceof U ? a.ma === b.ma : !1;
}
var $d = function() {
  function a(a, b) {
    return new U(a, b, "" + y.g(r(a) ? "" + y.g(a) + "/" : null) + y.g(b), null);
  }
  function b(a) {
    if (a instanceof U) {
      return a;
    }
    if (a instanceof pc) {
      var b;
      if (a && (a.F & 4096 || a.jd)) {
        b = a.Fa;
      } else {
        throw Error("Doesn't support namespace: " + y.g(a));
      }
      return new U(b, Zd.g ? Zd.g(a) : Zd.call(null, a), a.mb, null);
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
function ae(a, b, c, d) {
  this.w = a;
  this.Eb = b;
  this.Y = c;
  this.A = d;
  this.F = 0;
  this.p = 32374988;
}
k = ae.prototype;
k.toString = function() {
  return Xb(this);
};
function be(a) {
  null != a.Eb && (a.Y = a.Eb.q ? a.Eb.q() : a.Eb.call(null), a.Eb = null);
  return a.Y;
}
k.L = function() {
  return this.w;
};
k.ga = function() {
  tb(this);
  return null == this.Y ? null : L(this.Y);
};
k.N = function() {
  var a = this.A;
  return null != a ? a : this.A = a = vc(this);
};
k.J = function(a, b) {
  return Dc(this, b);
};
k.W = function() {
  return Fc(sc, this.w);
};
k.da = function(a, b) {
  return Gc.h(b, this);
};
k.ea = function(a, b, c) {
  return Gc.j(b, c, this);
};
k.ba = function() {
  tb(this);
  return null == this.Y ? null : I(this.Y);
};
k.fa = function() {
  tb(this);
  return null != this.Y ? J(this.Y) : sc;
};
k.O = function() {
  be(this);
  if (null == this.Y) {
    return null;
  }
  for (var a = this.Y;;) {
    if (a instanceof ae) {
      a = be(a);
    } else {
      return this.Y = a, F(this.Y);
    }
  }
};
k.M = function(a, b) {
  return new ae(b, this.Eb, this.Y, this.A);
};
k.R = function(a, b) {
  return O(b, this);
};
function ce(a, b) {
  this.oa = a;
  this.end = b;
  this.F = 0;
  this.p = 2;
}
ce.prototype.T = function() {
  return this.end;
};
ce.prototype.add = function(a) {
  this.oa[this.end] = a;
  return this.end += 1;
};
ce.prototype.V = function() {
  var a = new de(this.oa, 0, this.end);
  this.oa = null;
  return a;
};
function ee(a) {
  return new ce(Array(a), 0);
}
function de(a, b, c) {
  this.l = a;
  this.$ = b;
  this.end = c;
  this.F = 0;
  this.p = 524306;
}
k = de.prototype;
k.da = function(a, b) {
  return zc.o(this.l, b, this.l[this.$], this.$ + 1);
};
k.ea = function(a, b, c) {
  return zc.o(this.l, b, c, this.$);
};
k.Jc = function() {
  if (this.$ === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new de(this.l, this.$ + 1, this.end);
};
k.H = function(a, b) {
  return this.l[this.$ + b];
};
k.sa = function(a, b, c) {
  return 0 <= b && b < this.end - this.$ ? this.l[this.$ + b] : c;
};
k.T = function() {
  return this.end - this.$;
};
var fe = function() {
  function a(a, b, c) {
    return new de(a, b, c);
  }
  function b(a, b) {
    return new de(a, b, a.length);
  }
  function c(a) {
    return new de(a, 0, a.length);
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
function ge(a, b, c, d) {
  this.V = a;
  this.Pa = b;
  this.w = c;
  this.A = d;
  this.p = 31850732;
  this.F = 1536;
}
k = ge.prototype;
k.toString = function() {
  return Xb(this);
};
k.L = function() {
  return this.w;
};
k.ga = function() {
  if (1 < Ga(this.V)) {
    return new ge(Ub(this.V), this.Pa, this.w, null);
  }
  var a = tb(this.Pa);
  return null == a ? null : a;
};
k.N = function() {
  var a = this.A;
  return null != a ? a : this.A = a = vc(this);
};
k.J = function(a, b) {
  return Dc(this, b);
};
k.W = function() {
  return Fc(sc, this.w);
};
k.ba = function() {
  return A.h(this.V, 0);
};
k.fa = function() {
  return 1 < Ga(this.V) ? new ge(Ub(this.V), this.Pa, this.w, null) : null == this.Pa ? sc : this.Pa;
};
k.O = function() {
  return this;
};
k.lc = function() {
  return this.V;
};
k.mc = function() {
  return null == this.Pa ? sc : this.Pa;
};
k.M = function(a, b) {
  return new ge(this.V, this.Pa, b, this.A);
};
k.R = function(a, b) {
  return O(b, this);
};
k.kc = function() {
  return null == this.Pa ? null : this.Pa;
};
function he(a, b) {
  return 0 === Ga(a) ? b : new ge(a, b, null, null);
}
function ie(a, b) {
  a.add(b);
}
function sd(a) {
  for (var b = [];;) {
    if (F(a)) {
      b.push(I(a)), a = L(a);
    } else {
      return b;
    }
  }
}
function je(a, b) {
  if (Ac(a)) {
    return P(a);
  }
  for (var c = a, d = b, e = 0;;) {
    if (0 < d && F(c)) {
      c = L(c), d -= 1, e += 1;
    } else {
      return e;
    }
  }
}
var le = function ke(b) {
  return null == b ? null : null == L(b) ? F(I(b)) : u ? O(I(b), ke(L(b))) : null;
}, me = function() {
  function a(a, b) {
    return new ae(null, function() {
      var c = F(a);
      return c ? jd(c) ? he(C(c), d.h(E(c), b)) : O(I(c), d.h(J(c), b)) : b;
    }, null, null);
  }
  function b(a) {
    return new ae(null, function() {
      return a;
    }, null, null);
  }
  function c() {
    return new ae(null, function() {
      return null;
    }, null, null);
  }
  var d = null, e = function() {
    function a(c, d, e) {
      var f = null;
      2 < arguments.length && (f = N(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, f);
    }
    function b(a, c, e) {
      return function s(a, b) {
        return new ae(null, function() {
          var c = F(a);
          return c ? jd(c) ? he(C(c), s(E(c), b)) : O(I(c), s(J(c), b)) : r(b) ? s(I(b), L(b)) : null;
        }, null, null);
      }(d.h(a, c), e);
    }
    a.v = 2;
    a.m = function(a) {
      var c = I(a);
      a = L(a);
      var d = I(a);
      a = J(a);
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
        return e.k(d, g, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.v = 2;
  d.m = e.m;
  d.q = c;
  d.g = b;
  d.h = a;
  d.k = e.k;
  return d;
}(), ye = function() {
  function a(a, b, c, d) {
    return O(a, O(b, O(c, d)));
  }
  function b(a, b, c) {
    return O(a, O(b, c));
  }
  var c = null, d = function() {
    function a(c, d, e, n, m) {
      var s = null;
      4 < arguments.length && (s = N(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, n, s);
    }
    function b(a, c, d, e, f) {
      return O(a, O(c, O(d, O(e, le(f)))));
    }
    a.v = 4;
    a.m = function(a) {
      var c = I(a);
      a = L(a);
      var d = I(a);
      a = L(a);
      var e = I(a);
      a = L(a);
      var m = I(a);
      a = J(a);
      return b(c, d, e, m, a);
    };
    a.k = b;
    return a;
  }(), c = function(c, f, g, h, l) {
    switch(arguments.length) {
      case 1:
        return F(c);
      case 2:
        return O(c, f);
      case 3:
        return b.call(this, c, f, g);
      case 4:
        return a.call(this, c, f, g, h);
      default:
        return d.k(c, f, g, h, N(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.v = 4;
  c.m = d.m;
  c.g = function(a) {
    return F(a);
  };
  c.h = function(a, b) {
    return O(a, b);
  };
  c.j = b;
  c.o = a;
  c.k = d.k;
  return c;
}();
function ze(a) {
  return Nb(a);
}
var Ae = function() {
  var a = null, b = function() {
    function a(c, f, g) {
      var h = null;
      2 < arguments.length && (h = N(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, f, h);
    }
    function b(a, c, d) {
      for (;;) {
        if (a = Mb(a, c), r(d)) {
          c = I(d), d = L(d);
        } else {
          return a;
        }
      }
    }
    a.v = 2;
    a.m = function(a) {
      var c = I(a);
      a = L(a);
      var g = I(a);
      a = J(a);
      return b(c, g, a);
    };
    a.k = b;
    return a;
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 2:
        return Mb(a, d);
      default:
        return b.k(a, d, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.v = 2;
  a.m = b.m;
  a.h = function(a, b) {
    return Mb(a, b);
  };
  a.k = b.k;
  return a;
}(), Be = function() {
  var a = null, b = function() {
    function a(c, f, g, h) {
      var l = null;
      3 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, f, g, l);
    }
    function b(a, c, d, h) {
      for (;;) {
        if (a = Ob(a, c, d), r(h)) {
          c = I(h), d = Hc(h), h = L(L(h));
        } else {
          return a;
        }
      }
    }
    a.v = 3;
    a.m = function(a) {
      var c = I(a);
      a = L(a);
      var g = I(a);
      a = L(a);
      var h = I(a);
      a = J(a);
      return b(c, g, h, a);
    };
    a.k = b;
    return a;
  }(), a = function(a, d, e, f) {
    switch(arguments.length) {
      case 3:
        return Ob(a, d, e);
      default:
        return b.k(a, d, e, N(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.v = 3;
  a.m = b.m;
  a.j = function(a, b, e) {
    return Ob(a, b, e);
  };
  a.k = b.k;
  return a;
}();
function De(a, b, c) {
  var d = F(c);
  if (0 === b) {
    return a.q ? a.q() : a.call(null);
  }
  c = Ma(d);
  var e = Na(d);
  if (1 === b) {
    return a.g ? a.g(c) : a.g ? a.g(c) : a.call(null, c);
  }
  var d = Ma(e), f = Na(e);
  if (2 === b) {
    return a.h ? a.h(c, d) : a.h ? a.h(c, d) : a.call(null, c, d);
  }
  var e = Ma(f), g = Na(f);
  if (3 === b) {
    return a.j ? a.j(c, d, e) : a.j ? a.j(c, d, e) : a.call(null, c, d, e);
  }
  var f = Ma(g), h = Na(g);
  if (4 === b) {
    return a.o ? a.o(c, d, e, f) : a.o ? a.o(c, d, e, f) : a.call(null, c, d, e, f);
  }
  var g = Ma(h), l = Na(h);
  if (5 === b) {
    return a.I ? a.I(c, d, e, f, g) : a.I ? a.I(c, d, e, f, g) : a.call(null, c, d, e, f, g);
  }
  var h = Ma(l), n = Na(l);
  if (6 === b) {
    return a.ha ? a.ha(c, d, e, f, g, h) : a.ha ? a.ha(c, d, e, f, g, h) : a.call(null, c, d, e, f, g, h);
  }
  var l = Ma(n), m = Na(n);
  if (7 === b) {
    return a.wa ? a.wa(c, d, e, f, g, h, l) : a.wa ? a.wa(c, d, e, f, g, h, l) : a.call(null, c, d, e, f, g, h, l);
  }
  var n = Ma(m), s = Na(m);
  if (8 === b) {
    return a.hb ? a.hb(c, d, e, f, g, h, l, n) : a.hb ? a.hb(c, d, e, f, g, h, l, n) : a.call(null, c, d, e, f, g, h, l, n);
  }
  var m = Ma(s), w = Na(s);
  if (9 === b) {
    return a.ib ? a.ib(c, d, e, f, g, h, l, n, m) : a.ib ? a.ib(c, d, e, f, g, h, l, n, m) : a.call(null, c, d, e, f, g, h, l, n, m);
  }
  var s = Ma(w), x = Na(w);
  if (10 === b) {
    return a.Wa ? a.Wa(c, d, e, f, g, h, l, n, m, s) : a.Wa ? a.Wa(c, d, e, f, g, h, l, n, m, s) : a.call(null, c, d, e, f, g, h, l, n, m, s);
  }
  var w = Ma(x), t = Na(x);
  if (11 === b) {
    return a.Xa ? a.Xa(c, d, e, f, g, h, l, n, m, s, w) : a.Xa ? a.Xa(c, d, e, f, g, h, l, n, m, s, w) : a.call(null, c, d, e, f, g, h, l, n, m, s, w);
  }
  var x = Ma(t), z = Na(t);
  if (12 === b) {
    return a.Ya ? a.Ya(c, d, e, f, g, h, l, n, m, s, w, x) : a.Ya ? a.Ya(c, d, e, f, g, h, l, n, m, s, w, x) : a.call(null, c, d, e, f, g, h, l, n, m, s, w, x);
  }
  var t = Ma(z), G = Na(z);
  if (13 === b) {
    return a.Za ? a.Za(c, d, e, f, g, h, l, n, m, s, w, x, t) : a.Za ? a.Za(c, d, e, f, g, h, l, n, m, s, w, x, t) : a.call(null, c, d, e, f, g, h, l, n, m, s, w, x, t);
  }
  var z = Ma(G), H = Na(G);
  if (14 === b) {
    return a.$a ? a.$a(c, d, e, f, g, h, l, n, m, s, w, x, t, z) : a.$a ? a.$a(c, d, e, f, g, h, l, n, m, s, w, x, t, z) : a.call(null, c, d, e, f, g, h, l, n, m, s, w, x, t, z);
  }
  var G = Ma(H), M = Na(H);
  if (15 === b) {
    return a.ab ? a.ab(c, d, e, f, g, h, l, n, m, s, w, x, t, z, G) : a.ab ? a.ab(c, d, e, f, g, h, l, n, m, s, w, x, t, z, G) : a.call(null, c, d, e, f, g, h, l, n, m, s, w, x, t, z, G);
  }
  var H = Ma(M), K = Na(M);
  if (16 === b) {
    return a.bb ? a.bb(c, d, e, f, g, h, l, n, m, s, w, x, t, z, G, H) : a.bb ? a.bb(c, d, e, f, g, h, l, n, m, s, w, x, t, z, G, H) : a.call(null, c, d, e, f, g, h, l, n, m, s, w, x, t, z, G, H);
  }
  var M = Ma(K), Y = Na(K);
  if (17 === b) {
    return a.cb ? a.cb(c, d, e, f, g, h, l, n, m, s, w, x, t, z, G, H, M) : a.cb ? a.cb(c, d, e, f, g, h, l, n, m, s, w, x, t, z, G, H, M) : a.call(null, c, d, e, f, g, h, l, n, m, s, w, x, t, z, G, H, M);
  }
  var K = Ma(Y), da = Na(Y);
  if (18 === b) {
    return a.eb ? a.eb(c, d, e, f, g, h, l, n, m, s, w, x, t, z, G, H, M, K) : a.eb ? a.eb(c, d, e, f, g, h, l, n, m, s, w, x, t, z, G, H, M, K) : a.call(null, c, d, e, f, g, h, l, n, m, s, w, x, t, z, G, H, M, K);
  }
  Y = Ma(da);
  da = Na(da);
  if (19 === b) {
    return a.fb ? a.fb(c, d, e, f, g, h, l, n, m, s, w, x, t, z, G, H, M, K, Y) : a.fb ? a.fb(c, d, e, f, g, h, l, n, m, s, w, x, t, z, G, H, M, K, Y) : a.call(null, c, d, e, f, g, h, l, n, m, s, w, x, t, z, G, H, M, K, Y);
  }
  var ga = Ma(da);
  Na(da);
  if (20 === b) {
    return a.gb ? a.gb(c, d, e, f, g, h, l, n, m, s, w, x, t, z, G, H, M, K, Y, ga) : a.gb ? a.gb(c, d, e, f, g, h, l, n, m, s, w, x, t, z, G, H, M, K, Y, ga) : a.call(null, c, d, e, f, g, h, l, n, m, s, w, x, t, z, G, H, M, K, Y, ga);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var T = function() {
  function a(a, b, c, d, e) {
    b = ye.o(b, c, d, e);
    c = a.v;
    return a.m ? (d = je(b, c + 1), d <= c ? De(a, d, b) : a.m(b)) : a.apply(a, sd(b));
  }
  function b(a, b, c, d) {
    b = ye.j(b, c, d);
    c = a.v;
    return a.m ? (d = je(b, c + 1), d <= c ? De(a, d, b) : a.m(b)) : a.apply(a, sd(b));
  }
  function c(a, b, c) {
    b = ye.h(b, c);
    c = a.v;
    if (a.m) {
      var d = je(b, c + 1);
      return d <= c ? De(a, d, b) : a.m(b);
    }
    return a.apply(a, sd(b));
  }
  function d(a, b) {
    var c = a.v;
    if (a.m) {
      var d = je(b, c + 1);
      return d <= c ? De(a, d, b) : a.m(b);
    }
    return a.apply(a, sd(b));
  }
  var e = null, f = function() {
    function a(c, d, e, f, g, x) {
      var t = null;
      5 < arguments.length && (t = N(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, e, f, g, t);
    }
    function b(a, c, d, e, f, g) {
      c = O(c, O(d, O(e, O(f, le(g)))));
      d = a.v;
      return a.m ? (e = je(c, d + 1), e <= d ? De(a, e, c) : a.m(c)) : a.apply(a, sd(c));
    }
    a.v = 5;
    a.m = function(a) {
      var c = I(a);
      a = L(a);
      var d = I(a);
      a = L(a);
      var e = I(a);
      a = L(a);
      var f = I(a);
      a = L(a);
      var g = I(a);
      a = J(a);
      return b(c, d, e, f, g, a);
    };
    a.k = b;
    return a;
  }(), e = function(e, h, l, n, m, s) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, h);
      case 3:
        return c.call(this, e, h, l);
      case 4:
        return b.call(this, e, h, l, n);
      case 5:
        return a.call(this, e, h, l, n, m);
      default:
        return f.k(e, h, l, n, m, N(arguments, 5));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.v = 5;
  e.m = f.m;
  e.h = d;
  e.j = c;
  e.o = b;
  e.I = a;
  e.k = f.k;
  return e;
}(), Ee = function() {
  function a(a, b, c, d, e, f) {
    return Fc(a, b.I ? b.I(Uc(a), c, d, e, f) : b.call(null, Uc(a), c, d, e, f));
  }
  function b(a, b, c, d, e) {
    return Fc(a, b.o ? b.o(Uc(a), c, d, e) : b.call(null, Uc(a), c, d, e));
  }
  function c(a, b, c, d) {
    return Fc(a, b.j ? b.j(Uc(a), c, d) : b.call(null, Uc(a), c, d));
  }
  function d(a, b, c) {
    return Fc(a, b.h ? b.h(Uc(a), c) : b.call(null, Uc(a), c));
  }
  function e(a, b) {
    return Fc(a, b.g ? b.g(Uc(a)) : b.call(null, Uc(a)));
  }
  var f = null, g = function() {
    function a(c, d, e, f, g, h, z) {
      var G = null;
      6 < arguments.length && (G = N(Array.prototype.slice.call(arguments, 6), 0));
      return b.call(this, c, d, e, f, g, h, G);
    }
    function b(a, c, d, e, f, g, h) {
      return Fc(a, T.k(c, Uc(a), d, e, f, N([g, h], 0)));
    }
    a.v = 6;
    a.m = function(a) {
      var c = I(a);
      a = L(a);
      var d = I(a);
      a = L(a);
      var e = I(a);
      a = L(a);
      var f = I(a);
      a = L(a);
      var g = I(a);
      a = L(a);
      var h = I(a);
      a = J(a);
      return b(c, d, e, f, g, h, a);
    };
    a.k = b;
    return a;
  }(), f = function(f, l, n, m, s, w, x) {
    switch(arguments.length) {
      case 2:
        return e.call(this, f, l);
      case 3:
        return d.call(this, f, l, n);
      case 4:
        return c.call(this, f, l, n, m);
      case 5:
        return b.call(this, f, l, n, m, s);
      case 6:
        return a.call(this, f, l, n, m, s, w);
      default:
        return g.k(f, l, n, m, s, w, N(arguments, 6));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  f.v = 6;
  f.m = g.m;
  f.h = e;
  f.j = d;
  f.o = c;
  f.I = b;
  f.ha = a;
  f.k = g.k;
  return f;
}(), Fe = function() {
  function a(a, b) {
    return!mc.h(a, b);
  }
  var b = null, c = function() {
    function a(c, d, h) {
      var l = null;
      2 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      return xa(T.o(mc, a, c, d));
    }
    a.v = 2;
    a.m = function(a) {
      var c = I(a);
      a = L(a);
      var d = I(a);
      a = J(a);
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
        return c.k(b, e, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.v = 2;
  b.m = c.m;
  b.g = function() {
    return!1;
  };
  b.h = a;
  b.k = c.k;
  return b;
}();
function Ge(a) {
  return F(a) ? a : null;
}
function He(a, b) {
  for (;;) {
    if (null == F(b)) {
      return!0;
    }
    if (r(a.g ? a.g(I(b)) : a.call(null, I(b)))) {
      var c = a, d = L(b);
      a = c;
      b = d;
    } else {
      return u ? !1 : null;
    }
  }
}
function Ie(a, b) {
  for (;;) {
    if (F(b)) {
      var c = a.g ? a.g(I(b)) : a.call(null, I(b));
      if (r(c)) {
        return c;
      }
      var c = a, d = L(b);
      a = c;
      b = d;
    } else {
      return null;
    }
  }
}
function Je(a) {
  if ("number" === typeof a && !isNaN(a) && Infinity !== a && parseFloat(a) === parseInt(a, 10)) {
    return 0 === (a & 1);
  }
  throw Error("Argument must be an integer: " + y.g(a));
}
function Ke(a) {
  return a;
}
function Le(a) {
  return function() {
    var b = null, c = function() {
      function b(a, d, h) {
        var l = null;
        2 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 2), 0));
        return c.call(this, a, d, l);
      }
      function c(b, d, e) {
        return xa(T.o(a, b, d, e));
      }
      b.v = 2;
      b.m = function(a) {
        var b = I(a);
        a = L(a);
        var d = I(a);
        a = J(a);
        return c(b, d, a);
      };
      b.k = c;
      return b;
    }(), b = function(b, e, f) {
      switch(arguments.length) {
        case 0:
          return xa(a.q ? a.q() : a.call(null));
        case 1:
          var g = b;
          return xa(a.g ? a.g(g) : a.call(null, g));
        case 2:
          var g = b, h = e;
          return xa(a.h ? a.h(g, h) : a.call(null, g, h));
        default:
          return c.k(b, e, N(arguments, 2));
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.v = 2;
    b.m = c.m;
    return b;
  }();
}
var Me = function() {
  function a(a, b, c) {
    return function() {
      var d = null, l = function() {
        function d(a, b, c, e) {
          var f = null;
          3 < arguments.length && (f = N(Array.prototype.slice.call(arguments, 3), 0));
          return h.call(this, a, b, c, f);
        }
        function h(d, l, m, n) {
          return a.g ? a.g(b.g ? b.g(T.I(c, d, l, m, n)) : b.call(null, T.I(c, d, l, m, n))) : a.call(null, b.g ? b.g(T.I(c, d, l, m, n)) : b.call(null, T.I(c, d, l, m, n)));
        }
        d.v = 3;
        d.m = function(a) {
          var b = I(a);
          a = L(a);
          var c = I(a);
          a = L(a);
          var d = I(a);
          a = J(a);
          return h(b, c, d, a);
        };
        d.k = h;
        return d;
      }(), d = function(d, h, s, w) {
        switch(arguments.length) {
          case 0:
            return a.g ? a.g(b.g ? b.g(c.q ? c.q() : c.call(null)) : b.call(null, c.q ? c.q() : c.call(null))) : a.call(null, b.g ? b.g(c.q ? c.q() : c.call(null)) : b.call(null, c.q ? c.q() : c.call(null)));
          case 1:
            var x = d;
            return a.g ? a.g(b.g ? b.g(c.g ? c.g(x) : c.call(null, x)) : b.call(null, c.g ? c.g(x) : c.call(null, x))) : a.call(null, b.g ? b.g(c.g ? c.g(x) : c.call(null, x)) : b.call(null, c.g ? c.g(x) : c.call(null, x)));
          case 2:
            var x = d, t = h;
            return a.g ? a.g(b.g ? b.g(c.h ? c.h(x, t) : c.call(null, x, t)) : b.call(null, c.h ? c.h(x, t) : c.call(null, x, t))) : a.call(null, b.g ? b.g(c.h ? c.h(x, t) : c.call(null, x, t)) : b.call(null, c.h ? c.h(x, t) : c.call(null, x, t)));
          case 3:
            var x = d, t = h, z = s;
            return a.g ? a.g(b.g ? b.g(c.j ? c.j(x, t, z) : c.call(null, x, t, z)) : b.call(null, c.j ? c.j(x, t, z) : c.call(null, x, t, z))) : a.call(null, b.g ? b.g(c.j ? c.j(x, t, z) : c.call(null, x, t, z)) : b.call(null, c.j ? c.j(x, t, z) : c.call(null, x, t, z)));
          default:
            return l.k(d, h, s, N(arguments, 3));
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      d.v = 3;
      d.m = l.m;
      return d;
    }();
  }
  function b(a, b) {
    return function() {
      var c = null, d = function() {
        function c(a, b, e, f) {
          var g = null;
          3 < arguments.length && (g = N(Array.prototype.slice.call(arguments, 3), 0));
          return d.call(this, a, b, e, g);
        }
        function d(c, g, h, l) {
          return a.g ? a.g(T.I(b, c, g, h, l)) : a.call(null, T.I(b, c, g, h, l));
        }
        c.v = 3;
        c.m = function(a) {
          var b = I(a);
          a = L(a);
          var c = I(a);
          a = L(a);
          var e = I(a);
          a = J(a);
          return d(b, c, e, a);
        };
        c.k = d;
        return c;
      }(), c = function(c, g, m, s) {
        switch(arguments.length) {
          case 0:
            return a.g ? a.g(b.q ? b.q() : b.call(null)) : a.call(null, b.q ? b.q() : b.call(null));
          case 1:
            var w = c;
            return a.g ? a.g(b.g ? b.g(w) : b.call(null, w)) : a.call(null, b.g ? b.g(w) : b.call(null, w));
          case 2:
            var w = c, x = g;
            return a.g ? a.g(b.h ? b.h(w, x) : b.call(null, w, x)) : a.call(null, b.h ? b.h(w, x) : b.call(null, w, x));
          case 3:
            var w = c, x = g, t = m;
            return a.g ? a.g(b.j ? b.j(w, x, t) : b.call(null, w, x, t)) : a.call(null, b.j ? b.j(w, x, t) : b.call(null, w, x, t));
          default:
            return d.k(c, g, m, N(arguments, 3));
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      c.v = 3;
      c.m = d.m;
      return c;
    }();
  }
  var c = null, d = function() {
    function a(c, d, e, n) {
      var m = null;
      3 < arguments.length && (m = N(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, d, e, m);
    }
    function b(a, c, d, e) {
      return function(a) {
        return function() {
          function b(a) {
            var d = null;
            0 < arguments.length && (d = N(Array.prototype.slice.call(arguments, 0), 0));
            return c.call(this, d);
          }
          function c(b) {
            b = T.h(I(a), b);
            for (var d = L(a);;) {
              if (d) {
                b = I(d).call(null, b), d = L(d);
              } else {
                return b;
              }
            }
          }
          b.v = 0;
          b.m = function(a) {
            a = F(a);
            return c(a);
          };
          b.k = c;
          return b;
        }();
      }(Wd(ye.o(a, c, d, e)));
    }
    a.v = 3;
    a.m = function(a) {
      var c = I(a);
      a = L(a);
      var d = I(a);
      a = L(a);
      var e = I(a);
      a = J(a);
      return b(c, d, e, a);
    };
    a.k = b;
    return a;
  }(), c = function(c, f, g, h) {
    switch(arguments.length) {
      case 0:
        return Ke;
      case 1:
        return c;
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, g);
      default:
        return d.k(c, f, g, N(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.v = 3;
  c.m = d.m;
  c.q = function() {
    return Ke;
  };
  c.g = function(a) {
    return a;
  };
  c.h = b;
  c.j = a;
  c.k = d.k;
  return c;
}(), Ne = function() {
  function a(a, b, c, d) {
    return function() {
      function e(a) {
        var b = null;
        0 < arguments.length && (b = N(Array.prototype.slice.call(arguments, 0), 0));
        return m.call(this, b);
      }
      function m(e) {
        return T.I(a, b, c, d, e);
      }
      e.v = 0;
      e.m = function(a) {
        a = F(a);
        return m(a);
      };
      e.k = m;
      return e;
    }();
  }
  function b(a, b, c) {
    return function() {
      function d(a) {
        var b = null;
        0 < arguments.length && (b = N(Array.prototype.slice.call(arguments, 0), 0));
        return e.call(this, b);
      }
      function e(d) {
        return T.o(a, b, c, d);
      }
      d.v = 0;
      d.m = function(a) {
        a = F(a);
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
        0 < arguments.length && (b = N(Array.prototype.slice.call(arguments, 0), 0));
        return d.call(this, b);
      }
      function d(c) {
        return T.j(a, b, c);
      }
      c.v = 0;
      c.m = function(a) {
        a = F(a);
        return d(a);
      };
      c.k = d;
      return c;
    }();
  }
  var d = null, e = function() {
    function a(c, d, e, f, s) {
      var w = null;
      4 < arguments.length && (w = N(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, w);
    }
    function b(a, c, d, e, f) {
      return function() {
        function b(a) {
          var c = null;
          0 < arguments.length && (c = N(Array.prototype.slice.call(arguments, 0), 0));
          return g.call(this, c);
        }
        function g(b) {
          return T.I(a, c, d, e, me.h(f, b));
        }
        b.v = 0;
        b.m = function(a) {
          a = F(a);
          return g(a);
        };
        b.k = g;
        return b;
      }();
    }
    a.v = 4;
    a.m = function(a) {
      var c = I(a);
      a = L(a);
      var d = I(a);
      a = L(a);
      var e = I(a);
      a = L(a);
      var f = I(a);
      a = J(a);
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
        return e.k(d, g, h, l, N(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.v = 4;
  d.m = e.m;
  d.g = function(a) {
    return a;
  };
  d.h = c;
  d.j = b;
  d.o = a;
  d.k = e.k;
  return d;
}();
function Oe(a, b) {
  return function d(b, f) {
    return new ae(null, function() {
      var g = F(f);
      if (g) {
        if (jd(g)) {
          for (var h = C(g), l = P(h), n = ee(l), m = 0;;) {
            if (m < l) {
              var s = a.h ? a.h(b + m, A.h(h, m)) : a.call(null, b + m, A.h(h, m));
              n.add(s);
              m += 1;
            } else {
              break;
            }
          }
          return he(n.V(), d(b + l, E(g)));
        }
        return O(a.h ? a.h(b, I(g)) : a.call(null, b, I(g)), d(b + 1, J(g)));
      }
      return null;
    }, null, null);
  }(0, b);
}
var Qe = function Pe(b, c) {
  return new ae(null, function() {
    var d = F(c);
    if (d) {
      if (jd(d)) {
        for (var e = C(d), f = P(e), g = ee(f), h = 0;;) {
          if (h < f) {
            var l = b.g ? b.g(A.h(e, h)) : b.call(null, A.h(e, h));
            null != l && g.add(l);
            h += 1;
          } else {
            break;
          }
        }
        return he(g.V(), Pe(b, E(d)));
      }
      e = b.g ? b.g(I(d)) : b.call(null, I(d));
      return null == e ? Pe(b, J(d)) : O(e, Pe(b, J(d)));
    }
    return null;
  }, null, null);
};
function Re(a, b) {
  return function d(b, f) {
    return new ae(null, function() {
      var g = F(f);
      if (g) {
        if (jd(g)) {
          for (var h = C(g), l = P(h), n = ee(l), m = 0;;) {
            if (m < l) {
              var s = a.h ? a.h(b + m, A.h(h, m)) : a.call(null, b + m, A.h(h, m));
              null != s && n.add(s);
              m += 1;
            } else {
              break;
            }
          }
          return he(n.V(), d(b + l, E(g)));
        }
        h = a.h ? a.h(b, I(g)) : a.call(null, b, I(g));
        return null == h ? d(b + 1, J(g)) : O(h, d(b + 1, J(g)));
      }
      return null;
    }, null, null);
  }(0, b);
}
var Se = function() {
  function a(a, b, c, e) {
    return new ae(null, function() {
      var n = F(b), m = F(c), s = F(e);
      return n && m && s ? O(a.j ? a.j(I(n), I(m), I(s)) : a.call(null, I(n), I(m), I(s)), d.o(a, J(n), J(m), J(s))) : null;
    }, null, null);
  }
  function b(a, b, c) {
    return new ae(null, function() {
      var e = F(b), n = F(c);
      return e && n ? O(a.h ? a.h(I(e), I(n)) : a.call(null, I(e), I(n)), d.j(a, J(e), J(n))) : null;
    }, null, null);
  }
  function c(a, b) {
    return new ae(null, function() {
      var c = F(b);
      if (c) {
        if (jd(c)) {
          for (var e = C(c), n = P(e), m = ee(n), s = 0;;) {
            if (s < n) {
              var w = a.g ? a.g(A.h(e, s)) : a.call(null, A.h(e, s));
              m.add(w);
              s += 1;
            } else {
              break;
            }
          }
          return he(m.V(), d.h(a, E(c)));
        }
        return O(a.g ? a.g(I(c)) : a.call(null, I(c)), d.h(a, J(c)));
      }
      return null;
    }, null, null);
  }
  var d = null, e = function() {
    function a(c, d, e, f, s) {
      var w = null;
      4 < arguments.length && (w = N(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, w);
    }
    function b(a, c, e, f, g) {
      var w = function t(a) {
        return new ae(null, function() {
          var b = d.h(F, a);
          return He(Ke, b) ? O(d.h(I, b), t(d.h(J, b))) : null;
        }, null, null);
      };
      return d.h(function() {
        return function(b) {
          return T.h(a, b);
        };
      }(w), w(Nc.k(g, f, N([e, c], 0))));
    }
    a.v = 4;
    a.m = function(a) {
      var c = I(a);
      a = L(a);
      var d = I(a);
      a = L(a);
      var e = I(a);
      a = L(a);
      var f = I(a);
      a = J(a);
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
        return e.k(d, g, h, l, N(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.v = 4;
  d.m = e.m;
  d.h = c;
  d.j = b;
  d.o = a;
  d.k = e.k;
  return d;
}(), Ue = function Te(b, c) {
  return new ae(null, function() {
    if (0 < b) {
      var d = F(c);
      return d ? O(I(d), Te(b - 1, J(d))) : null;
    }
    return null;
  }, null, null);
};
function Ve(a, b) {
  return new ae(null, function(c) {
    return function() {
      return c(a, b);
    };
  }(function(a, b) {
    for (;;) {
      var e = F(b);
      if (0 < a && e) {
        var f = a - 1, e = J(e);
        a = f;
        b = e;
      } else {
        return e;
      }
    }
  }), null, null);
}
var We = function() {
  function a(a, b) {
    return Ue(a, c.g(b));
  }
  function b(a) {
    return new ae(null, function() {
      return O(a, c.g(a));
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
}(), Xe = function() {
  function a(a, b) {
    return Ue(a, c.g(b));
  }
  function b(a) {
    return new ae(null, function() {
      return O(a.q ? a.q() : a.call(null), c.g(a));
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
}(), Ye = function() {
  function a(a, c) {
    return new ae(null, function() {
      var f = F(a), g = F(c);
      return f && g ? O(I(f), O(I(g), b.h(J(f), J(g)))) : null;
    }, null, null);
  }
  var b = null, c = function() {
    function a(b, d, h) {
      var l = null;
      2 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      return new ae(null, function() {
        var c = Se.h(F, Nc.k(e, d, N([a], 0)));
        return He(Ke, c) ? me.h(Se.h(I, c), T.h(b, Se.h(J, c))) : null;
      }, null, null);
    }
    a.v = 2;
    a.m = function(a) {
      var b = I(a);
      a = L(a);
      var d = I(a);
      a = J(a);
      return c(b, d, a);
    };
    a.k = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.k(b, e, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.v = 2;
  b.m = c.m;
  b.h = a;
  b.k = c.k;
  return b;
}();
function Ze(a, b) {
  return Ve(1, Ye.h(We.g(a), b));
}
function $e(a) {
  return function c(a, e) {
    return new ae(null, function() {
      var f = F(a);
      return f ? O(I(f), c(J(f), e)) : F(e) ? c(I(e), J(e)) : null;
    }, null, null);
  }(null, a);
}
var af = function() {
  function a(a, b) {
    return $e(Se.h(a, b));
  }
  var b = null, c = function() {
    function a(c, d, h) {
      var l = null;
      2 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      return $e(T.o(Se, a, c, d));
    }
    a.v = 2;
    a.m = function(a) {
      var c = I(a);
      a = L(a);
      var d = I(a);
      a = J(a);
      return b(c, d, a);
    };
    a.k = b;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.k(b, e, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.v = 2;
  b.m = c.m;
  b.h = a;
  b.k = c.k;
  return b;
}(), cf = function bf(b, c) {
  return new ae(null, function() {
    var d = F(c);
    if (d) {
      if (jd(d)) {
        for (var e = C(d), f = P(e), g = ee(f), h = 0;;) {
          if (h < f) {
            if (r(b.g ? b.g(A.h(e, h)) : b.call(null, A.h(e, h)))) {
              var l = A.h(e, h);
              g.add(l);
            }
            h += 1;
          } else {
            break;
          }
        }
        return he(g.V(), bf(b, E(d)));
      }
      e = I(d);
      d = J(d);
      return r(b.g ? b.g(e) : b.call(null, e)) ? O(e, bf(b, d)) : bf(b, d);
    }
    return null;
  }, null, null);
};
function df(a, b) {
  return cf(Le(a), b);
}
function ef(a) {
  return function c(a) {
    return new ae(null, function() {
      return O(a, r(Yc.g ? Yc.g(a) : Yc.call(null, a)) ? af.h(c, F.g ? F.g(a) : F.call(null, a)) : null);
    }, null, null);
  }(a);
}
function ff(a) {
  return cf(function(a) {
    return!Yc(a);
  }, J(ef(a)));
}
function gf(a, b) {
  return null != a ? a && (a.F & 4 || a.Ld) ? ze(vd.j(Mb, Lb(a), b)) : vd.j(Ja, a, b) : vd.j(Nc, sc, b);
}
var jf = function() {
  function a(a, b, c, d) {
    return gf(hf, Se.o(a, b, c, d));
  }
  function b(a, b, c) {
    return gf(hf, Se.j(a, b, c));
  }
  function c(a, b) {
    return ze(vd.j(function(b, c) {
      return Ae.h(b, a.g ? a.g(c) : a.call(null, c));
    }, Lb(hf), b));
  }
  var d = null, e = function() {
    function a(c, d, e, f, s) {
      var w = null;
      4 < arguments.length && (w = N(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, w);
    }
    function b(a, c, d, e, f) {
      return gf(hf, T.k(Se, a, c, d, e, N([f], 0)));
    }
    a.v = 4;
    a.m = function(a) {
      var c = I(a);
      a = L(a);
      var d = I(a);
      a = L(a);
      var e = I(a);
      a = L(a);
      var f = I(a);
      a = J(a);
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
        return e.k(d, g, h, l, N(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.v = 4;
  d.m = e.m;
  d.h = c;
  d.j = b;
  d.o = a;
  d.k = e.k;
  return d;
}(), zf = function() {
  function a(a, b, c, h) {
    return new ae(null, function() {
      var l = F(h);
      if (l) {
        var n = Ue(a, l);
        return a === P(n) ? O(n, d.o(a, b, c, Ve(b, l))) : Ja(sc, Ue(a, me.h(n, c)));
      }
      return null;
    }, null, null);
  }
  function b(a, b, c) {
    return new ae(null, function() {
      var h = F(c);
      if (h) {
        var l = Ue(a, h);
        return a === P(l) ? O(l, d.j(a, b, Ve(b, h))) : null;
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
  d.o = a;
  return d;
}(), Af = function() {
  function a(a, b, c) {
    var g = md;
    for (b = F(b);;) {
      if (b) {
        var h = a;
        if (h ? h.p & 256 || h.Lc || (h.p ? 0 : ya(Pa, h)) : ya(Pa, h)) {
          a = R.j(a, I(b), g);
          if (g === a) {
            return c;
          }
          b = L(b);
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
}(), Cf = function Bf(b, c, d) {
  var e = Q.j(c, 0, null);
  return(c = Pd(c)) ? S.j(b, e, Bf(R.h(b, e), c, d)) : S.j(b, e, d);
}, Df = function() {
  function a(a, b, c, d, f, s) {
    var w = Q.j(b, 0, null);
    return(b = Pd(b)) ? S.j(a, w, e.ha(R.h(a, w), b, c, d, f, s)) : S.j(a, w, c.o ? c.o(R.h(a, w), d, f, s) : c.call(null, R.h(a, w), d, f, s));
  }
  function b(a, b, c, d, f) {
    var s = Q.j(b, 0, null);
    return(b = Pd(b)) ? S.j(a, s, e.I(R.h(a, s), b, c, d, f)) : S.j(a, s, c.j ? c.j(R.h(a, s), d, f) : c.call(null, R.h(a, s), d, f));
  }
  function c(a, b, c, d) {
    var f = Q.j(b, 0, null);
    return(b = Pd(b)) ? S.j(a, f, e.o(R.h(a, f), b, c, d)) : S.j(a, f, c.h ? c.h(R.h(a, f), d) : c.call(null, R.h(a, f), d));
  }
  function d(a, b, c) {
    var d = Q.j(b, 0, null);
    return(b = Pd(b)) ? S.j(a, d, e.j(R.h(a, d), b, c)) : S.j(a, d, c.g ? c.g(R.h(a, d)) : c.call(null, R.h(a, d)));
  }
  var e = null, f = function() {
    function a(c, d, e, f, g, x, t) {
      var z = null;
      6 < arguments.length && (z = N(Array.prototype.slice.call(arguments, 6), 0));
      return b.call(this, c, d, e, f, g, x, z);
    }
    function b(a, c, d, f, g, h, t) {
      var z = Q.j(c, 0, null);
      return(c = Pd(c)) ? S.j(a, z, T.k(e, R.h(a, z), c, d, f, N([g, h, t], 0))) : S.j(a, z, T.k(d, R.h(a, z), f, g, h, N([t], 0)));
    }
    a.v = 6;
    a.m = function(a) {
      var c = I(a);
      a = L(a);
      var d = I(a);
      a = L(a);
      var e = I(a);
      a = L(a);
      var f = I(a);
      a = L(a);
      var g = I(a);
      a = L(a);
      var t = I(a);
      a = J(a);
      return b(c, d, e, f, g, t, a);
    };
    a.k = b;
    return a;
  }(), e = function(e, h, l, n, m, s, w) {
    switch(arguments.length) {
      case 3:
        return d.call(this, e, h, l);
      case 4:
        return c.call(this, e, h, l, n);
      case 5:
        return b.call(this, e, h, l, n, m);
      case 6:
        return a.call(this, e, h, l, n, m, s);
      default:
        return f.k(e, h, l, n, m, s, N(arguments, 6));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.v = 6;
  e.m = f.m;
  e.j = d;
  e.o = c;
  e.I = b;
  e.ha = a;
  e.k = f.k;
  return e;
}();
function Ef(a, b) {
  this.U = a;
  this.l = b;
}
function Ff(a) {
  return new Ef(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function Gf(a) {
  a = a.t;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function Hf(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = Ff(a);
    d.l[0] = c;
    c = d;
    b -= 5;
  }
}
var Jf = function If(b, c, d, e) {
  var f = new Ef(d.U, Da(d.l)), g = b.t - 1 >>> c & 31;
  5 === c ? f.l[g] = e : (d = d.l[g], b = null != d ? If(b, c - 5, d, e) : Hf(null, c - 5, e), f.l[g] = b);
  return f;
};
function Kf(a, b) {
  throw Error("No item " + y.g(a) + " in vector of length " + y.g(b));
}
function Lf(a) {
  var b = a.root;
  for (a = a.shift;;) {
    if (0 < a) {
      a -= 5, b = b.l[0];
    } else {
      return b.l;
    }
  }
}
function Mf(a, b) {
  if (b >= Gf(a)) {
    return a.S;
  }
  for (var c = a.root, d = a.shift;;) {
    if (0 < d) {
      var e = d - 5, c = c.l[b >>> d & 31], d = e
    } else {
      return c.l;
    }
  }
}
function Nf(a, b) {
  return 0 <= b && b < a.t ? Mf(a, b) : Kf(b, a.t);
}
var Pf = function Of(b, c, d, e, f) {
  var g = new Ef(d.U, Da(d.l));
  if (0 === c) {
    g.l[e & 31] = f;
  } else {
    var h = e >>> c & 31;
    b = Of(b, c - 5, d.l[h], e, f);
    g.l[h] = b;
  }
  return g;
};
function W(a, b, c, d, e, f) {
  this.w = a;
  this.t = b;
  this.shift = c;
  this.root = d;
  this.S = e;
  this.A = f;
  this.p = 167668511;
  this.F = 8196;
}
k = W.prototype;
k.toString = function() {
  return Xb(this);
};
k.P = function(a, b) {
  return Qa.j(this, b, null);
};
k.Q = function(a, b, c) {
  return "number" === typeof b ? A.j(this, b, c) : c;
};
k.Ib = function(a, b, c) {
  a = [0, c];
  for (c = 0;;) {
    if (c < this.t) {
      var d = Mf(this, c), e = d.length;
      a: {
        for (var f = 0, g = a[1];;) {
          if (f < e) {
            g = b.j ? b.j(g, f + c, d[f]) : b.call(null, g, f + c, d[f]), f += 1;
          } else {
            a[0] = e;
            a[1] = g;
            break a;
          }
        }
      }
      c += a[0];
    } else {
      return a[1];
    }
  }
};
k.H = function(a, b) {
  return Nf(this, b)[b & 31];
};
k.sa = function(a, b, c) {
  return 0 <= b && b < this.t ? Mf(this, b)[b & 31] : c;
};
k.pb = function(a, b, c) {
  if (0 <= b && b < this.t) {
    return Gf(this) <= b ? (a = Da(this.S), a[b & 31] = c, new W(this.w, this.t, this.shift, this.root, a, null)) : new W(this.w, this.t, this.shift, Pf(this, this.shift, this.root, b, c), this.S, null);
  }
  if (b === this.t) {
    return Ja(this, c);
  }
  if (u) {
    throw Error("Index " + y.g(b) + " out of bounds  [0," + y.g(this.t) + "]");
  }
  return null;
};
k.L = function() {
  return this.w;
};
k.T = function() {
  return this.t;
};
k.Jb = function() {
  return A.h(this, 0);
};
k.Kb = function() {
  return A.h(this, 1);
};
k.jb = function() {
  return 0 < this.t ? A.h(this, this.t - 1) : null;
};
k.zb = function() {
  return 0 < this.t ? new Cc(this, this.t - 1, null) : null;
};
k.N = function() {
  var a = this.A;
  return null != a ? a : this.A = a = vc(this);
};
k.J = function(a, b) {
  return Dc(this, b);
};
k.yb = function() {
  return new Qf(this.t, this.shift, Rf.g ? Rf.g(this.root) : Rf.call(null, this.root), Sf.g ? Sf.g(this.S) : Sf.call(null, this.S));
};
k.W = function() {
  return Fc(hf, this.w);
};
k.da = function(a, b) {
  return yc.h(this, b);
};
k.ea = function(a, b, c) {
  return yc.j(this, b, c);
};
k.va = function(a, b, c) {
  if ("number" === typeof b) {
    return db(this, b, c);
  }
  throw Error("Vector's key for assoc must be a number.");
};
k.O = function() {
  return 0 === this.t ? null : 32 >= this.t ? new rc(this.S, 0) : u ? Tf.o ? Tf.o(this, Lf(this), 0, 0) : Tf.call(null, this, Lf(this), 0, 0) : null;
};
k.M = function(a, b) {
  return new W(b, this.t, this.shift, this.root, this.S, this.A);
};
k.R = function(a, b) {
  if (32 > this.t - Gf(this)) {
    for (var c = this.S.length, d = Array(c + 1), e = 0;;) {
      if (e < c) {
        d[e] = this.S[e], e += 1;
      } else {
        break;
      }
    }
    d[c] = b;
    return new W(this.w, this.t + 1, this.shift, this.root, d, null);
  }
  c = (d = this.t >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = Ff(null), d.l[0] = this.root, e = Hf(null, this.shift, new Ef(null, this.S)), d.l[1] = e) : d = Jf(this, this.shift, this.root, new Ef(null, this.S));
  return new W(this.w, this.t + 1, c, d, [b], null);
};
k.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.H(null, c);
      case 3:
        return this.sa(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Da(b)));
};
k.g = function(a) {
  return this.H(null, a);
};
k.h = function(a, b) {
  return this.sa(null, a, b);
};
var X = new Ef(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), hf = new W(null, 0, 5, X, [], 0);
function Uf(a, b) {
  var c = a.length, d = b ? a : Da(a);
  if (32 > c) {
    return new W(null, c, 5, X, d, null);
  }
  for (var e = 32, f = (new W(null, 32, 5, X, d.slice(0, 32), null)).yb(null);;) {
    if (e < c) {
      var g = e + 1, f = Ae.h(f, d[e]), e = g
    } else {
      return Nb(f);
    }
  }
}
function Vf(a) {
  return Nb(vd.j(Mb, Lb(hf), a));
}
var Wf = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = N(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    return a instanceof rc && 0 === a.D ? Uf.h ? Uf.h(a.l, !0) : Uf.call(null, a.l, !0) : Vf(a);
  }
  a.v = 0;
  a.m = function(a) {
    a = F(a);
    return b(a);
  };
  a.k = b;
  return a;
}();
function Xf(a, b, c, d, e, f) {
  this.aa = a;
  this.Ea = b;
  this.D = c;
  this.$ = d;
  this.w = e;
  this.A = f;
  this.p = 32243948;
  this.F = 1536;
}
k = Xf.prototype;
k.toString = function() {
  return Xb(this);
};
k.ga = function() {
  if (this.$ + 1 < this.Ea.length) {
    var a = Tf.o ? Tf.o(this.aa, this.Ea, this.D, this.$ + 1) : Tf.call(null, this.aa, this.Ea, this.D, this.$ + 1);
    return null == a ? null : a;
  }
  return Vb(this);
};
k.N = function() {
  var a = this.A;
  return null != a ? a : this.A = a = vc(this);
};
k.J = function(a, b) {
  return Dc(this, b);
};
k.W = function() {
  return Fc(hf, this.w);
};
k.da = function(a, b) {
  return yc.h(Yf.j ? Yf.j(this.aa, this.D + this.$, P(this.aa)) : Yf.call(null, this.aa, this.D + this.$, P(this.aa)), b);
};
k.ea = function(a, b, c) {
  return yc.j(Yf.j ? Yf.j(this.aa, this.D + this.$, P(this.aa)) : Yf.call(null, this.aa, this.D + this.$, P(this.aa)), b, c);
};
k.ba = function() {
  return this.Ea[this.$];
};
k.fa = function() {
  if (this.$ + 1 < this.Ea.length) {
    var a = Tf.o ? Tf.o(this.aa, this.Ea, this.D, this.$ + 1) : Tf.call(null, this.aa, this.Ea, this.D, this.$ + 1);
    return null == a ? sc : a;
  }
  return E(this);
};
k.O = function() {
  return this;
};
k.lc = function() {
  return fe.h(this.Ea, this.$);
};
k.mc = function() {
  var a = this.D + this.Ea.length;
  return a < Ga(this.aa) ? Tf.o ? Tf.o(this.aa, Mf(this.aa, a), a, 0) : Tf.call(null, this.aa, Mf(this.aa, a), a, 0) : sc;
};
k.M = function(a, b) {
  return Tf.I ? Tf.I(this.aa, this.Ea, this.D, this.$, b) : Tf.call(null, this.aa, this.Ea, this.D, this.$, b);
};
k.R = function(a, b) {
  return O(b, this);
};
k.kc = function() {
  var a = this.D + this.Ea.length;
  return a < Ga(this.aa) ? Tf.o ? Tf.o(this.aa, Mf(this.aa, a), a, 0) : Tf.call(null, this.aa, Mf(this.aa, a), a, 0) : null;
};
var Tf = function() {
  function a(a, b, c, d, l) {
    return new Xf(a, b, c, d, l, null);
  }
  function b(a, b, c, d) {
    return new Xf(a, b, c, d, null, null);
  }
  function c(a, b, c) {
    return new Xf(a, Nf(a, b), b, c, null, null);
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
  d.o = b;
  d.I = a;
  return d;
}();
function Zf(a, b, c, d, e) {
  this.w = a;
  this.Na = b;
  this.start = c;
  this.end = d;
  this.A = e;
  this.p = 166617887;
  this.F = 8192;
}
k = Zf.prototype;
k.toString = function() {
  return Xb(this);
};
k.P = function(a, b) {
  return Qa.j(this, b, null);
};
k.Q = function(a, b, c) {
  return "number" === typeof b ? A.j(this, b, c) : c;
};
k.H = function(a, b) {
  return 0 > b || this.end <= this.start + b ? Kf(b, this.end - this.start) : A.h(this.Na, this.start + b);
};
k.sa = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : A.j(this.Na, this.start + b, c);
};
k.pb = function(a, b, c) {
  var d = this, e = d.start + b;
  return $f.I ? $f.I(d.w, S.j(d.Na, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b;
  }(), null) : $f.call(null, d.w, S.j(d.Na, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b;
  }(), null);
};
k.L = function() {
  return this.w;
};
k.T = function() {
  return this.end - this.start;
};
k.jb = function() {
  return A.h(this.Na, this.end - 1);
};
k.zb = function() {
  return this.start !== this.end ? new Cc(this, this.end - this.start - 1, null) : null;
};
k.N = function() {
  var a = this.A;
  return null != a ? a : this.A = a = vc(this);
};
k.J = function(a, b) {
  return Dc(this, b);
};
k.W = function() {
  return Fc(hf, this.w);
};
k.da = function(a, b) {
  return yc.h(this, b);
};
k.ea = function(a, b, c) {
  return yc.j(this, b, c);
};
k.va = function(a, b, c) {
  if ("number" === typeof b) {
    return db(this, b, c);
  }
  throw Error("Subvec's key for assoc must be a number.");
};
k.O = function() {
  var a = this;
  return function(b) {
    return function d(e) {
      return e === a.end ? null : O(A.h(a.Na, e), new ae(null, function() {
        return function() {
          return d(e + 1);
        };
      }(b), null, null));
    };
  }(this)(a.start);
};
k.M = function(a, b) {
  return $f.I ? $f.I(b, this.Na, this.start, this.end, this.A) : $f.call(null, b, this.Na, this.start, this.end, this.A);
};
k.R = function(a, b) {
  return $f.I ? $f.I(this.w, db(this.Na, this.end, b), this.start, this.end + 1, null) : $f.call(null, this.w, db(this.Na, this.end, b), this.start, this.end + 1, null);
};
k.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.H(null, c);
      case 3:
        return this.sa(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Da(b)));
};
k.g = function(a) {
  return this.H(null, a);
};
k.h = function(a, b) {
  return this.sa(null, a, b);
};
function $f(a, b, c, d, e) {
  for (;;) {
    if (b instanceof Zf) {
      c = b.start + c, d = b.start + d, b = b.Na;
    } else {
      var f = P(b);
      if (0 > c || 0 > d || c > f || d > f) {
        throw Error("Index out of bounds");
      }
      return new Zf(a, b, c, d, e);
    }
  }
}
var Yf = function() {
  function a(a, b, c) {
    return $f(null, a, b, c, null);
  }
  function b(a, b) {
    return c.j(a, b, P(a));
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
function ag(a, b) {
  return a === b.U ? b : new Ef(a, Da(b.l));
}
function Rf(a) {
  return new Ef({}, Da(a.l));
}
function Sf(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  ld(a, 0, b, 0, a.length);
  return b;
}
var cg = function bg(b, c, d, e) {
  d = ag(b.root.U, d);
  var f = b.t - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var g = d.l[f];
    b = null != g ? bg(b, c - 5, g, e) : Hf(b.root.U, c - 5, e);
  }
  d.l[f] = b;
  return d;
};
function Qf(a, b, c, d) {
  this.t = a;
  this.shift = b;
  this.root = c;
  this.S = d;
  this.p = 275;
  this.F = 88;
}
k = Qf.prototype;
k.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.P(null, c);
      case 3:
        return this.Q(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Da(b)));
};
k.g = function(a) {
  return this.P(null, a);
};
k.h = function(a, b) {
  return this.Q(null, a, b);
};
k.P = function(a, b) {
  return Qa.j(this, b, null);
};
k.Q = function(a, b, c) {
  return "number" === typeof b ? A.j(this, b, c) : c;
};
k.H = function(a, b) {
  if (this.root.U) {
    return Nf(this, b)[b & 31];
  }
  throw Error("nth after persistent!");
};
k.sa = function(a, b, c) {
  return 0 <= b && b < this.t ? A.h(this, b) : c;
};
k.T = function() {
  if (this.root.U) {
    return this.t;
  }
  throw Error("count after persistent!");
};
k.Nc = function(a, b, c) {
  var d = this;
  if (d.root.U) {
    if (0 <= b && b < d.t) {
      return Gf(this) <= b ? d.S[b & 31] = c : (a = function() {
        return function f(a, h) {
          var l = ag(d.root.U, h);
          if (0 === a) {
            l.l[b & 31] = c;
          } else {
            var n = b >>> a & 31, m = f(a - 5, l.l[n]);
            l.l[n] = m;
          }
          return l;
        };
      }(this).call(null, d.shift, d.root), d.root = a), this;
    }
    if (b === d.t) {
      return Mb(this, c);
    }
    if (u) {
      throw Error("Index " + y.g(b) + " out of bounds for TransientVector of length" + y.g(d.t));
    }
    return null;
  }
  throw Error("assoc! after persistent!");
};
k.Mb = function(a, b, c) {
  if ("number" === typeof b) {
    return Pb(this, b, c);
  }
  throw Error("TransientVector's key for assoc! must be a number.");
};
k.nb = function(a, b) {
  if (this.root.U) {
    if (32 > this.t - Gf(this)) {
      this.S[this.t & 31] = b;
    } else {
      var c = new Ef(this.root.U, this.S), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.S = d;
      if (this.t >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = Hf(this.root.U, this.shift, c);
        this.root = new Ef(this.root.U, d);
        this.shift = e;
      } else {
        this.root = cg(this, this.shift, this.root, c);
      }
    }
    this.t += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
k.ob = function() {
  if (this.root.U) {
    this.root.U = null;
    var a = this.t - Gf(this), b = Array(a);
    ld(this.S, 0, b, 0, a);
    return new W(null, this.t, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
function dg(a, b, c, d) {
  this.w = a;
  this.Ca = b;
  this.lb = c;
  this.A = d;
  this.F = 0;
  this.p = 31850572;
}
k = dg.prototype;
k.toString = function() {
  return Xb(this);
};
k.L = function() {
  return this.w;
};
k.N = function() {
  var a = this.A;
  return null != a ? a : this.A = a = vc(this);
};
k.J = function(a, b) {
  return Dc(this, b);
};
k.W = function() {
  return Fc(sc, this.w);
};
k.ba = function() {
  return I(this.Ca);
};
k.fa = function() {
  var a = L(this.Ca);
  return a ? new dg(this.w, a, this.lb, null) : null == this.lb ? Ha(this) : new dg(this.w, this.lb, null, null);
};
k.O = function() {
  return this;
};
k.M = function(a, b) {
  return new dg(b, this.Ca, this.lb, this.A);
};
k.R = function(a, b) {
  return O(b, this);
};
function eg(a, b, c, d, e) {
  this.w = a;
  this.count = b;
  this.Ca = c;
  this.lb = d;
  this.A = e;
  this.p = 31858766;
  this.F = 8192;
}
k = eg.prototype;
k.toString = function() {
  return Xb(this);
};
k.L = function() {
  return this.w;
};
k.T = function() {
  return this.count;
};
k.jb = function() {
  return I(this.Ca);
};
k.N = function() {
  var a = this.A;
  return null != a ? a : this.A = a = vc(this);
};
k.J = function(a, b) {
  return Dc(this, b);
};
k.W = function() {
  return fg;
};
k.ba = function() {
  return I(this.Ca);
};
k.fa = function() {
  return J(F(this));
};
k.O = function() {
  var a = F(this.lb), b = this.Ca;
  return r(r(b) ? b : a) ? new dg(null, this.Ca, F(a), null) : null;
};
k.M = function(a, b) {
  return new eg(b, this.count, this.Ca, this.lb, this.A);
};
k.R = function(a, b) {
  var c;
  r(this.Ca) ? (c = this.lb, c = new eg(this.w, this.count + 1, this.Ca, Nc.h(r(c) ? c : hf, b), null)) : c = new eg(this.w, this.count + 1, Nc.h(this.Ca, b), hf, null);
  return c;
};
var fg = new eg(null, 0, null, hf, 0);
function gg() {
  this.F = 0;
  this.p = 2097152;
}
gg.prototype.J = function() {
  return!1;
};
var hg = new gg;
function ig(a, b) {
  return od(ed(b) ? P(a) === P(b) ? He(Ke, Se.h(function(a) {
    return mc.h(R.j(b, I(a), hg), Hc(a));
  }, a)) : null : null);
}
function jg(a, b) {
  var c = a.l;
  if (b instanceof U) {
    a: {
      for (var d = c.length, e = b.ma, f = 0;;) {
        if (d <= f) {
          c = -1;
          break a;
        }
        var g = c[f];
        if (g instanceof U && e === g.ma) {
          c = f;
          break a;
        }
        if (u) {
          f += 2;
        } else {
          c = null;
          break a;
        }
      }
      c = void 0;
    }
  } else {
    if (ba(b) || "number" === typeof b) {
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
          if (u) {
            e += 2;
          } else {
            c = null;
            break a;
          }
        }
        c = void 0;
      }
    } else {
      if (b instanceof pc) {
        a: {
          d = c.length;
          e = b.mb;
          for (f = 0;;) {
            if (d <= f) {
              c = -1;
              break a;
            }
            g = c[f];
            if (g instanceof pc && e === g.mb) {
              c = f;
              break a;
            }
            if (u) {
              f += 2;
            } else {
              c = null;
              break a;
            }
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
              if (u) {
                e += 2;
              } else {
                c = null;
                break a;
              }
            }
            c = void 0;
          }
        } else {
          if (u) {
            a: {
              d = c.length;
              for (e = 0;;) {
                if (d <= e) {
                  c = -1;
                  break a;
                }
                if (mc.h(b, c[e])) {
                  c = e;
                  break a;
                }
                if (u) {
                  e += 2;
                } else {
                  c = null;
                  break a;
                }
              }
              c = void 0;
            }
          } else {
            c = null;
          }
        }
      }
    }
  }
  return c;
}
function kg(a, b, c) {
  this.l = a;
  this.D = b;
  this.ka = c;
  this.F = 0;
  this.p = 32374990;
}
k = kg.prototype;
k.toString = function() {
  return Xb(this);
};
k.L = function() {
  return this.ka;
};
k.ga = function() {
  return this.D < this.l.length - 2 ? new kg(this.l, this.D + 2, this.ka) : null;
};
k.T = function() {
  return(this.l.length - this.D) / 2;
};
k.N = function() {
  return vc(this);
};
k.J = function(a, b) {
  return Dc(this, b);
};
k.W = function() {
  return Fc(sc, this.ka);
};
k.da = function(a, b) {
  return Gc.h(b, this);
};
k.ea = function(a, b, c) {
  return Gc.j(b, c, this);
};
k.ba = function() {
  return new W(null, 2, 5, X, [this.l[this.D], this.l[this.D + 1]], null);
};
k.fa = function() {
  return this.D < this.l.length - 2 ? new kg(this.l, this.D + 2, this.ka) : sc;
};
k.O = function() {
  return this;
};
k.M = function(a, b) {
  return new kg(this.l, this.D, b);
};
k.R = function(a, b) {
  return O(b, this);
};
function q(a, b, c, d) {
  this.w = a;
  this.t = b;
  this.l = c;
  this.A = d;
  this.p = 16647951;
  this.F = 8196;
}
k = q.prototype;
k.toString = function() {
  return Xb(this);
};
k.forEach = function(a) {
  for (var b = F(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.H(null, e), g = Q.j(f, 0, null), f = Q.j(f, 1, null);
      a.h ? a.h(f, g) : a.call(null, f, g);
      e += 1;
    } else {
      if (b = F(b)) {
        jd(b) ? (c = C(b), b = E(b), g = c, d = P(c), c = g) : (c = I(b), g = Q.j(c, 0, null), f = Q.j(c, 1, null), a.h ? a.h(f, g) : a.call(null, f, g), b = L(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
k.P = function(a, b) {
  return Qa.j(this, b, null);
};
k.Q = function(a, b, c) {
  a = jg(this, b);
  return-1 === a ? c : this.l[a + 1];
};
k.Ib = function(a, b, c) {
  a = this.l.length;
  for (var d = 0;;) {
    if (d < a) {
      c = b.j ? b.j(c, this.l[d], this.l[d + 1]) : b.call(null, c, this.l[d], this.l[d + 1]), d += 2;
    } else {
      return c;
    }
  }
};
k.L = function() {
  return this.w;
};
k.T = function() {
  return this.t;
};
k.N = function() {
  var a = this.A;
  return null != a ? a : this.A = a = wc(this);
};
k.J = function(a, b) {
  return ig(this, b);
};
k.yb = function() {
  return new lg({}, this.l.length, Da(this.l));
};
k.W = function() {
  return hb(mg, this.w);
};
k.da = function(a, b) {
  return Gc.h(b, this);
};
k.ea = function(a, b, c) {
  return Gc.j(b, c, this);
};
k.Ra = function(a, b) {
  if (0 <= jg(this, b)) {
    var c = this.l.length, d = c - 2;
    if (0 === d) {
      return Ha(this);
    }
    for (var d = Array(d), e = 0, f = 0;;) {
      if (e >= c) {
        return new q(this.w, this.t - 1, d, null);
      }
      if (mc.h(b, this.l[e])) {
        e += 2;
      } else {
        if (u) {
          d[f] = this.l[e], d[f + 1] = this.l[e + 1], f += 2, e += 2;
        } else {
          return null;
        }
      }
    }
  } else {
    return this;
  }
};
k.va = function(a, b, c) {
  a = jg(this, b);
  if (-1 === a) {
    if (this.t < ng) {
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
      return new q(this.w, this.t + 1, e, null);
    }
    return hb(Sa(gf(og, this), b, c), this.w);
  }
  return c === this.l[a + 1] ? this : u ? (b = Da(this.l), b[a + 1] = c, new q(this.w, this.t, b, null)) : null;
};
k.Ub = function(a, b) {
  return-1 !== jg(this, b);
};
k.O = function() {
  var a = this.l;
  return 0 <= a.length - 2 ? new kg(a, 0, null) : null;
};
k.M = function(a, b) {
  return new q(b, this.t, this.l, this.A);
};
k.R = function(a, b) {
  if (id(b)) {
    return Sa(this, A.h(b, 0), A.h(b, 1));
  }
  for (var c = this, d = F(b);;) {
    if (null == d) {
      return c;
    }
    var e = I(d);
    if (id(e)) {
      c = Sa(c, A.h(e, 0), A.h(e, 1)), d = L(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
k.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.P(null, c);
      case 3:
        return this.Q(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Da(b)));
};
k.g = function(a) {
  return this.P(null, a);
};
k.h = function(a, b) {
  return this.Q(null, a, b);
};
var mg = new q(null, 0, [], null), ng = 8;
function pg(a) {
  for (var b = a.length, c = 0, d = Lb(mg);;) {
    if (c < b) {
      var e = c + 2, d = Ob(d, a[c], a[c + 1]), c = e
    } else {
      return Nb(d);
    }
  }
}
function lg(a, b, c) {
  this.Cb = a;
  this.vb = b;
  this.l = c;
  this.F = 56;
  this.p = 258;
}
k = lg.prototype;
k.Mb = function(a, b, c) {
  if (r(this.Cb)) {
    a = jg(this, b);
    if (-1 === a) {
      return this.vb + 2 <= 2 * ng ? (this.vb += 2, this.l.push(b), this.l.push(c), this) : Be.j(qg.h ? qg.h(this.vb, this.l) : qg.call(null, this.vb, this.l), b, c);
    }
    c !== this.l[a + 1] && (this.l[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
k.nb = function(a, b) {
  if (r(this.Cb)) {
    if (b ? b.p & 2048 || b.gd || (b.p ? 0 : ya(Va, b)) : ya(Va, b)) {
      return Ob(this, Sd.g ? Sd.g(b) : Sd.call(null, b), Td.g ? Td.g(b) : Td.call(null, b));
    }
    for (var c = F(b), d = this;;) {
      var e = I(c);
      if (r(e)) {
        c = L(c), d = Ob(d, Sd.g ? Sd.g(e) : Sd.call(null, e), Td.g ? Td.g(e) : Td.call(null, e));
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent!");
  }
};
k.ob = function() {
  if (r(this.Cb)) {
    return this.Cb = !1, new q(null, Md(this.vb, 2), this.l, null);
  }
  throw Error("persistent! called twice");
};
k.P = function(a, b) {
  return Qa.j(this, b, null);
};
k.Q = function(a, b, c) {
  if (r(this.Cb)) {
    return a = jg(this, b), -1 === a ? c : this.l[a + 1];
  }
  throw Error("lookup after persistent!");
};
k.T = function() {
  if (r(this.Cb)) {
    return Md(this.vb, 2);
  }
  throw Error("count after persistent!");
};
function qg(a, b) {
  for (var c = Lb(og), d = 0;;) {
    if (d < a) {
      c = Be.j(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function rg() {
  this.B = !1;
}
function sg(a, b) {
  return a === b ? !0 : V(a, b) ? !0 : u ? mc.h(a, b) : null;
}
var tg = function() {
  function a(a, b, c, g, h) {
    a = Da(a);
    a[b] = c;
    a[g] = h;
    return a;
  }
  function b(a, b, c) {
    a = Da(a);
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
  c.I = a;
  return c;
}();
function ug(a, b) {
  var c = Array(a.length - 2);
  ld(a, 0, c, 0, 2 * b);
  ld(a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
  return c;
}
var vg = function() {
  function a(a, b, c, g, h, l) {
    a = a.Db(b);
    a.l[c] = g;
    a.l[h] = l;
    return a;
  }
  function b(a, b, c, g) {
    a = a.Db(b);
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
  c.o = b;
  c.ha = a;
  return c;
}();
function wg(a, b, c) {
  for (var d = a.length, e = 0;;) {
    if (e < d) {
      var f = a[e];
      null != f ? c = b.j ? b.j(c, f, a[e + 1]) : b.call(null, c, f, a[e + 1]) : (f = a[e + 1], c = null != f ? f.ub(b, c) : c);
      e += 2;
    } else {
      return c;
    }
  }
}
function xg(a, b, c) {
  this.U = a;
  this.Z = b;
  this.l = c;
}
k = xg.prototype;
k.Db = function(a) {
  if (a === this.U) {
    return this;
  }
  var b = Nd(this.Z), c = Array(0 > b ? 4 : 2 * (b + 1));
  ld(this.l, 0, c, 0, 2 * b);
  return new xg(a, this.Z, c);
};
k.Nb = function() {
  return Hg.g ? Hg.g(this.l) : Hg.call(null, this.l);
};
k.ub = function(a, b) {
  return wg(this.l, a, b);
};
k.kb = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.Z & e)) {
    return d;
  }
  var f = Nd(this.Z & e - 1), e = this.l[2 * f], f = this.l[2 * f + 1];
  return null == e ? f.kb(a + 5, b, c, d) : sg(c, e) ? f : u ? d : null;
};
k.Ja = function(a, b, c, d, e, f) {
  var g = 1 << (c >>> b & 31), h = Nd(this.Z & g - 1);
  if (0 === (this.Z & g)) {
    var l = Nd(this.Z);
    if (2 * l < this.l.length) {
      a = this.Db(a);
      b = a.l;
      f.B = !0;
      a: {
        for (c = 2 * (l - h), f = 2 * h + (c - 1), l = 2 * (h + 1) + (c - 1);;) {
          if (0 === c) {
            break a;
          }
          b[l] = b[f];
          l -= 1;
          c -= 1;
          f -= 1;
        }
      }
      b[2 * h] = d;
      b[2 * h + 1] = e;
      a.Z |= g;
      return a;
    }
    if (16 <= l) {
      h = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      h[c >>> b & 31] = Ig.Ja(a, b + 5, c, d, e, f);
      for (e = d = 0;;) {
        if (32 > d) {
          0 !== (this.Z >>> d & 1) && (h[d] = null != this.l[e] ? Ig.Ja(a, b + 5, jc(this.l[e]), this.l[e], this.l[e + 1], f) : this.l[e + 1], e += 2), d += 1;
        } else {
          break;
        }
      }
      return new Jg(a, l + 1, h);
    }
    return u ? (b = Array(2 * (l + 4)), ld(this.l, 0, b, 0, 2 * h), b[2 * h] = d, b[2 * h + 1] = e, ld(this.l, 2 * h, b, 2 * (h + 1), 2 * (l - h)), f.B = !0, a = this.Db(a), a.l = b, a.Z |= g, a) : null;
  }
  l = this.l[2 * h];
  g = this.l[2 * h + 1];
  return null == l ? (l = g.Ja(a, b + 5, c, d, e, f), l === g ? this : vg.o(this, a, 2 * h + 1, l)) : sg(d, l) ? e === g ? this : vg.o(this, a, 2 * h + 1, e) : u ? (f.B = !0, vg.ha(this, a, 2 * h, null, 2 * h + 1, Kg.wa ? Kg.wa(a, b + 5, l, g, c, d, e) : Kg.call(null, a, b + 5, l, g, c, d, e))) : null;
};
k.Ia = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), g = Nd(this.Z & f - 1);
  if (0 === (this.Z & f)) {
    var h = Nd(this.Z);
    if (16 <= h) {
      g = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      g[b >>> a & 31] = Ig.Ia(a + 5, b, c, d, e);
      for (d = c = 0;;) {
        if (32 > c) {
          0 !== (this.Z >>> c & 1) && (g[c] = null != this.l[d] ? Ig.Ia(a + 5, jc(this.l[d]), this.l[d], this.l[d + 1], e) : this.l[d + 1], d += 2), c += 1;
        } else {
          break;
        }
      }
      return new Jg(null, h + 1, g);
    }
    a = Array(2 * (h + 1));
    ld(this.l, 0, a, 0, 2 * g);
    a[2 * g] = c;
    a[2 * g + 1] = d;
    ld(this.l, 2 * g, a, 2 * (g + 1), 2 * (h - g));
    e.B = !0;
    return new xg(null, this.Z | f, a);
  }
  h = this.l[2 * g];
  f = this.l[2 * g + 1];
  return null == h ? (h = f.Ia(a + 5, b, c, d, e), h === f ? this : new xg(null, this.Z, tg.j(this.l, 2 * g + 1, h))) : sg(c, h) ? d === f ? this : new xg(null, this.Z, tg.j(this.l, 2 * g + 1, d)) : u ? (e.B = !0, new xg(null, this.Z, tg.I(this.l, 2 * g, null, 2 * g + 1, Kg.ha ? Kg.ha(a + 5, h, f, b, c, d) : Kg.call(null, a + 5, h, f, b, c, d)))) : null;
};
k.Ob = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if (0 === (this.Z & d)) {
    return this;
  }
  var e = Nd(this.Z & d - 1), f = this.l[2 * e], g = this.l[2 * e + 1];
  return null == f ? (a = g.Ob(a + 5, b, c), a === g ? this : null != a ? new xg(null, this.Z, tg.j(this.l, 2 * e + 1, a)) : this.Z === d ? null : u ? new xg(null, this.Z ^ d, ug(this.l, e)) : null) : sg(c, f) ? new xg(null, this.Z ^ d, ug(this.l, e)) : u ? this : null;
};
var Ig = new xg(null, 0, []);
function Jg(a, b, c) {
  this.U = a;
  this.t = b;
  this.l = c;
}
k = Jg.prototype;
k.Db = function(a) {
  return a === this.U ? this : new Jg(a, this.t, Da(this.l));
};
k.Nb = function() {
  return Rg.g ? Rg.g(this.l) : Rg.call(null, this.l);
};
k.ub = function(a, b) {
  for (var c = this.l.length, d = 0, e = b;;) {
    if (d < c) {
      var f = this.l[d];
      null != f && (e = f.ub(a, e));
      d += 1;
    } else {
      return e;
    }
  }
};
k.kb = function(a, b, c, d) {
  var e = this.l[b >>> a & 31];
  return null != e ? e.kb(a + 5, b, c, d) : d;
};
k.Ja = function(a, b, c, d, e, f) {
  var g = c >>> b & 31, h = this.l[g];
  if (null == h) {
    return a = vg.o(this, a, g, Ig.Ja(a, b + 5, c, d, e, f)), a.t += 1, a;
  }
  b = h.Ja(a, b + 5, c, d, e, f);
  return b === h ? this : vg.o(this, a, g, b);
};
k.Ia = function(a, b, c, d, e) {
  var f = b >>> a & 31, g = this.l[f];
  if (null == g) {
    return new Jg(null, this.t + 1, tg.j(this.l, f, Ig.Ia(a + 5, b, c, d, e)));
  }
  a = g.Ia(a + 5, b, c, d, e);
  return a === g ? this : new Jg(null, this.t, tg.j(this.l, f, a));
};
k.Ob = function(a, b, c) {
  var d = b >>> a & 31, e = this.l[d];
  if (null != e) {
    a = e.Ob(a + 5, b, c);
    if (a === e) {
      d = this;
    } else {
      if (null == a) {
        if (8 >= this.t) {
          a: {
            e = this.l;
            a = 2 * (this.t - 1);
            b = Array(a);
            c = 0;
            for (var f = 1, g = 0;;) {
              if (c < a) {
                c !== d && null != e[c] && (b[f] = e[c], f += 2, g |= 1 << c), c += 1;
              } else {
                d = new xg(null, g, b);
                break a;
              }
            }
            d = void 0;
          }
        } else {
          d = new Jg(null, this.t - 1, tg.j(this.l, d, a));
        }
      } else {
        d = u ? new Jg(null, this.t, tg.j(this.l, d, a)) : null;
      }
    }
    return d;
  }
  return this;
};
function Sg(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (sg(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return-1;
    }
  }
}
function Tg(a, b, c, d) {
  this.U = a;
  this.Ta = b;
  this.t = c;
  this.l = d;
}
k = Tg.prototype;
k.Db = function(a) {
  if (a === this.U) {
    return this;
  }
  var b = Array(2 * (this.t + 1));
  ld(this.l, 0, b, 0, 2 * this.t);
  return new Tg(a, this.Ta, this.t, b);
};
k.Nb = function() {
  return Hg.g ? Hg.g(this.l) : Hg.call(null, this.l);
};
k.ub = function(a, b) {
  return wg(this.l, a, b);
};
k.kb = function(a, b, c, d) {
  a = Sg(this.l, this.t, c);
  return 0 > a ? d : sg(c, this.l[a]) ? this.l[a + 1] : u ? d : null;
};
k.Ja = function(a, b, c, d, e, f) {
  if (c === this.Ta) {
    b = Sg(this.l, this.t, d);
    if (-1 === b) {
      if (this.l.length > 2 * this.t) {
        return a = vg.ha(this, a, 2 * this.t, d, 2 * this.t + 1, e), f.B = !0, a.t += 1, a;
      }
      c = this.l.length;
      b = Array(c + 2);
      ld(this.l, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      f.B = !0;
      f = this.t + 1;
      a === this.U ? (this.l = b, this.t = f, a = this) : a = new Tg(this.U, this.Ta, f, b);
      return a;
    }
    return this.l[b + 1] === e ? this : vg.o(this, a, b + 1, e);
  }
  return(new xg(a, 1 << (this.Ta >>> b & 31), [null, this, null, null])).Ja(a, b, c, d, e, f);
};
k.Ia = function(a, b, c, d, e) {
  return b === this.Ta ? (a = Sg(this.l, this.t, c), -1 === a ? (a = 2 * this.t, b = Array(a + 2), ld(this.l, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.B = !0, new Tg(null, this.Ta, this.t + 1, b)) : mc.h(this.l[a], d) ? this : new Tg(null, this.Ta, this.t, tg.j(this.l, a + 1, d))) : (new xg(null, 1 << (this.Ta >>> a & 31), [null, this])).Ia(a, b, c, d, e);
};
k.Ob = function(a, b, c) {
  a = Sg(this.l, this.t, c);
  return-1 === a ? this : 1 === this.t ? null : u ? new Tg(null, this.Ta, this.t - 1, ug(this.l, Md(a, 2))) : null;
};
var Kg = function() {
  function a(a, b, c, g, h, l, n) {
    var m = jc(c);
    if (m === h) {
      return new Tg(null, m, 2, [c, g, l, n]);
    }
    var s = new rg;
    return Ig.Ja(a, b, m, c, g, s).Ja(a, b, h, l, n, s);
  }
  function b(a, b, c, g, h, l) {
    var n = jc(b);
    if (n === g) {
      return new Tg(null, n, 2, [b, c, h, l]);
    }
    var m = new rg;
    return Ig.Ia(a, n, b, c, m).Ia(a, g, h, l, m);
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
  c.ha = b;
  c.wa = a;
  return c;
}();
function Ug(a, b, c, d, e) {
  this.w = a;
  this.Ka = b;
  this.D = c;
  this.Y = d;
  this.A = e;
  this.F = 0;
  this.p = 32374860;
}
k = Ug.prototype;
k.toString = function() {
  return Xb(this);
};
k.L = function() {
  return this.w;
};
k.N = function() {
  var a = this.A;
  return null != a ? a : this.A = a = vc(this);
};
k.J = function(a, b) {
  return Dc(this, b);
};
k.W = function() {
  return Fc(sc, this.w);
};
k.da = function(a, b) {
  return Gc.h(b, this);
};
k.ea = function(a, b, c) {
  return Gc.j(b, c, this);
};
k.ba = function() {
  return null == this.Y ? new W(null, 2, 5, X, [this.Ka[this.D], this.Ka[this.D + 1]], null) : I(this.Y);
};
k.fa = function() {
  return null == this.Y ? Hg.j ? Hg.j(this.Ka, this.D + 2, null) : Hg.call(null, this.Ka, this.D + 2, null) : Hg.j ? Hg.j(this.Ka, this.D, L(this.Y)) : Hg.call(null, this.Ka, this.D, L(this.Y));
};
k.O = function() {
  return this;
};
k.M = function(a, b) {
  return new Ug(b, this.Ka, this.D, this.Y, this.A);
};
k.R = function(a, b) {
  return O(b, this);
};
var Hg = function() {
  function a(a, b, c) {
    if (null == c) {
      for (c = a.length;;) {
        if (b < c) {
          if (null != a[b]) {
            return new Ug(null, a, b, null, null);
          }
          var g = a[b + 1];
          if (r(g) && (g = g.Nb(), r(g))) {
            return new Ug(null, a, b + 2, g, null);
          }
          b += 2;
        } else {
          return null;
        }
      }
    } else {
      return new Ug(null, a, b, c, null);
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
function Vg(a, b, c, d, e) {
  this.w = a;
  this.Ka = b;
  this.D = c;
  this.Y = d;
  this.A = e;
  this.F = 0;
  this.p = 32374860;
}
k = Vg.prototype;
k.toString = function() {
  return Xb(this);
};
k.L = function() {
  return this.w;
};
k.N = function() {
  var a = this.A;
  return null != a ? a : this.A = a = vc(this);
};
k.J = function(a, b) {
  return Dc(this, b);
};
k.W = function() {
  return Fc(sc, this.w);
};
k.da = function(a, b) {
  return Gc.h(b, this);
};
k.ea = function(a, b, c) {
  return Gc.j(b, c, this);
};
k.ba = function() {
  return I(this.Y);
};
k.fa = function() {
  return Rg.o ? Rg.o(null, this.Ka, this.D, L(this.Y)) : Rg.call(null, null, this.Ka, this.D, L(this.Y));
};
k.O = function() {
  return this;
};
k.M = function(a, b) {
  return new Vg(b, this.Ka, this.D, this.Y, this.A);
};
k.R = function(a, b) {
  return O(b, this);
};
var Rg = function() {
  function a(a, b, c, g) {
    if (null == g) {
      for (g = b.length;;) {
        if (c < g) {
          var h = b[c];
          if (r(h) && (h = h.Nb(), r(h))) {
            return new Vg(a, b, c + 1, h, null);
          }
          c += 1;
        } else {
          return null;
        }
      }
    } else {
      return new Vg(a, b, c, g, null);
    }
  }
  function b(a) {
    return c.o(null, a, 0, null);
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
  c.o = a;
  return c;
}();
function Wg(a, b, c, d, e, f) {
  this.w = a;
  this.t = b;
  this.root = c;
  this.ia = d;
  this.ra = e;
  this.A = f;
  this.p = 16123663;
  this.F = 8196;
}
k = Wg.prototype;
k.toString = function() {
  return Xb(this);
};
k.forEach = function(a) {
  for (var b = F(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.H(null, e), g = Q.j(f, 0, null), f = Q.j(f, 1, null);
      a.h ? a.h(f, g) : a.call(null, f, g);
      e += 1;
    } else {
      if (b = F(b)) {
        jd(b) ? (c = C(b), b = E(b), g = c, d = P(c), c = g) : (c = I(b), g = Q.j(c, 0, null), f = Q.j(c, 1, null), a.h ? a.h(f, g) : a.call(null, f, g), b = L(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
k.P = function(a, b) {
  return Qa.j(this, b, null);
};
k.Q = function(a, b, c) {
  return null == b ? this.ia ? this.ra : c : null == this.root ? c : u ? this.root.kb(0, jc(b), b, c) : null;
};
k.Ib = function(a, b, c) {
  a = this.ia ? b.j ? b.j(c, null, this.ra) : b.call(null, c, null, this.ra) : c;
  return null != this.root ? this.root.ub(b, a) : u ? a : null;
};
k.L = function() {
  return this.w;
};
k.T = function() {
  return this.t;
};
k.N = function() {
  var a = this.A;
  return null != a ? a : this.A = a = wc(this);
};
k.J = function(a, b) {
  return ig(this, b);
};
k.yb = function() {
  return new Xg({}, this.root, this.t, this.ia, this.ra);
};
k.W = function() {
  return hb(og, this.w);
};
k.Ra = function(a, b) {
  if (null == b) {
    return this.ia ? new Wg(this.w, this.t - 1, this.root, !1, null, null) : this;
  }
  if (null == this.root) {
    return this;
  }
  if (u) {
    var c = this.root.Ob(0, jc(b), b);
    return c === this.root ? this : new Wg(this.w, this.t - 1, c, this.ia, this.ra, null);
  }
  return null;
};
k.va = function(a, b, c) {
  if (null == b) {
    return this.ia && c === this.ra ? this : new Wg(this.w, this.ia ? this.t : this.t + 1, this.root, !0, c, null);
  }
  a = new rg;
  b = (null == this.root ? Ig : this.root).Ia(0, jc(b), b, c, a);
  return b === this.root ? this : new Wg(this.w, a.B ? this.t + 1 : this.t, b, this.ia, this.ra, null);
};
k.Ub = function(a, b) {
  return null == b ? this.ia : null == this.root ? !1 : u ? this.root.kb(0, jc(b), b, md) !== md : null;
};
k.O = function() {
  if (0 < this.t) {
    var a = null != this.root ? this.root.Nb() : null;
    return this.ia ? O(new W(null, 2, 5, X, [null, this.ra], null), a) : a;
  }
  return null;
};
k.M = function(a, b) {
  return new Wg(b, this.t, this.root, this.ia, this.ra, this.A);
};
k.R = function(a, b) {
  if (id(b)) {
    return Sa(this, A.h(b, 0), A.h(b, 1));
  }
  for (var c = this, d = F(b);;) {
    if (null == d) {
      return c;
    }
    var e = I(d);
    if (id(e)) {
      c = Sa(c, A.h(e, 0), A.h(e, 1)), d = L(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
k.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.P(null, c);
      case 3:
        return this.Q(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Da(b)));
};
k.g = function(a) {
  return this.P(null, a);
};
k.h = function(a, b) {
  return this.Q(null, a, b);
};
var og = new Wg(null, 0, null, !1, null, 0);
function Qc(a, b) {
  for (var c = a.length, d = 0, e = Lb(og);;) {
    if (d < c) {
      var f = d + 1, e = e.Mb(null, a[d], b[d]), d = f
    } else {
      return Nb(e);
    }
  }
}
function Xg(a, b, c, d, e) {
  this.U = a;
  this.root = b;
  this.count = c;
  this.ia = d;
  this.ra = e;
  this.F = 56;
  this.p = 258;
}
k = Xg.prototype;
k.Mb = function(a, b, c) {
  return Yg(this, b, c);
};
k.nb = function(a, b) {
  var c;
  a: {
    if (this.U) {
      if (b ? b.p & 2048 || b.gd || (b.p ? 0 : ya(Va, b)) : ya(Va, b)) {
        c = Yg(this, Sd.g ? Sd.g(b) : Sd.call(null, b), Td.g ? Td.g(b) : Td.call(null, b));
        break a;
      }
      c = F(b);
      for (var d = this;;) {
        var e = I(c);
        if (r(e)) {
          c = L(c), d = Yg(d, Sd.g ? Sd.g(e) : Sd.call(null, e), Td.g ? Td.g(e) : Td.call(null, e));
        } else {
          c = d;
          break a;
        }
      }
    } else {
      throw Error("conj! after persistent");
    }
    c = void 0;
  }
  return c;
};
k.ob = function() {
  var a;
  if (this.U) {
    this.U = null, a = new Wg(null, this.count, this.root, this.ia, this.ra, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
k.P = function(a, b) {
  return null == b ? this.ia ? this.ra : null : null == this.root ? null : this.root.kb(0, jc(b), b);
};
k.Q = function(a, b, c) {
  return null == b ? this.ia ? this.ra : c : null == this.root ? c : this.root.kb(0, jc(b), b, c);
};
k.T = function() {
  if (this.U) {
    return this.count;
  }
  throw Error("count after persistent!");
};
function Yg(a, b, c) {
  if (a.U) {
    if (null == b) {
      a.ra !== c && (a.ra = c), a.ia || (a.count += 1, a.ia = !0);
    } else {
      var d = new rg;
      b = (null == a.root ? Ig : a.root).Ja(a.U, 0, jc(b), b, c, d);
      b !== a.root && (a.root = b);
      d.B && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
function Zg(a, b, c) {
  for (var d = b;;) {
    if (null != a) {
      b = c ? a.left : a.right, d = Nc.h(d, a), a = b;
    } else {
      return d;
    }
  }
}
function $g(a, b, c, d, e) {
  this.w = a;
  this.stack = b;
  this.Sb = c;
  this.t = d;
  this.A = e;
  this.F = 0;
  this.p = 32374862;
}
k = $g.prototype;
k.toString = function() {
  return Xb(this);
};
k.L = function() {
  return this.w;
};
k.T = function() {
  return 0 > this.t ? P(L(this)) + 1 : this.t;
};
k.N = function() {
  var a = this.A;
  return null != a ? a : this.A = a = vc(this);
};
k.J = function(a, b) {
  return Dc(this, b);
};
k.W = function() {
  return Fc(sc, this.w);
};
k.da = function(a, b) {
  return Gc.h(b, this);
};
k.ea = function(a, b, c) {
  return Gc.j(b, c, this);
};
k.ba = function() {
  var a = this.stack;
  return null == a ? null : ab(a);
};
k.fa = function() {
  var a = I(this.stack), a = Zg(this.Sb ? a.right : a.left, L(this.stack), this.Sb);
  return null != a ? new $g(null, a, this.Sb, this.t - 1, null) : sc;
};
k.O = function() {
  return this;
};
k.M = function(a, b) {
  return new $g(b, this.stack, this.Sb, this.t, this.A);
};
k.R = function(a, b) {
  return O(b, this);
};
function ah(a, b, c) {
  return new $g(null, Zg(a, null, b), b, c, null);
}
function bh(a, b, c, d) {
  return c instanceof ch ? c.left instanceof ch ? new ch(c.key, c.B, c.left.Qa(), new dh(a, b, c.right, d, null), null) : c.right instanceof ch ? new ch(c.right.key, c.right.B, new dh(c.key, c.B, c.left, c.right.left, null), new dh(a, b, c.right.right, d, null), null) : u ? new dh(a, b, c, d, null) : null : new dh(a, b, c, d, null);
}
function eh(a, b, c, d) {
  return d instanceof ch ? d.right instanceof ch ? new ch(d.key, d.B, new dh(a, b, c, d.left, null), d.right.Qa(), null) : d.left instanceof ch ? new ch(d.left.key, d.left.B, new dh(a, b, c, d.left.left, null), new dh(d.key, d.B, d.left.right, d.right, null), null) : u ? new dh(a, b, c, d, null) : null : new dh(a, b, c, d, null);
}
function fh(a, b, c, d) {
  if (c instanceof ch) {
    return new ch(a, b, c.Qa(), d, null);
  }
  if (d instanceof dh) {
    return eh(a, b, c, d.Pb());
  }
  if (d instanceof ch && d.left instanceof dh) {
    return new ch(d.left.key, d.left.B, new dh(a, b, c, d.left.left, null), eh(d.key, d.B, d.left.right, d.right.Pb()), null);
  }
  if (u) {
    throw Error("red-black tree invariant violation");
  }
  return null;
}
var hh = function gh(b, c, d) {
  d = null != b.left ? gh(b.left, c, d) : d;
  d = c.j ? c.j(d, b.key, b.B) : c.call(null, d, b.key, b.B);
  return null != b.right ? gh(b.right, c, d) : d;
};
function dh(a, b, c, d, e) {
  this.key = a;
  this.B = b;
  this.left = c;
  this.right = d;
  this.A = e;
  this.F = 0;
  this.p = 32402207;
}
k = dh.prototype;
k.Cc = function(a) {
  return a.Fc(this);
};
k.Pb = function() {
  return new ch(this.key, this.B, this.left, this.right, null);
};
k.Qa = function() {
  return this;
};
k.Bc = function(a) {
  return a.Ec(this);
};
k.replace = function(a, b, c, d) {
  return new dh(a, b, c, d, null);
};
k.Ec = function(a) {
  return new dh(a.key, a.B, this, a.right, null);
};
k.Fc = function(a) {
  return new dh(a.key, a.B, a.left, this, null);
};
k.ub = function(a, b) {
  return hh(this, a, b);
};
k.P = function(a, b) {
  return A.j(this, b, null);
};
k.Q = function(a, b, c) {
  return A.j(this, b, c);
};
k.H = function(a, b) {
  return 0 === b ? this.key : 1 === b ? this.B : null;
};
k.sa = function(a, b, c) {
  return 0 === b ? this.key : 1 === b ? this.B : u ? c : null;
};
k.pb = function(a, b, c) {
  return(new W(null, 2, 5, X, [this.key, this.B], null)).pb(null, b, c);
};
k.L = function() {
  return null;
};
k.T = function() {
  return 2;
};
k.Jb = function() {
  return this.key;
};
k.Kb = function() {
  return this.B;
};
k.jb = function() {
  return this.B;
};
k.N = function() {
  var a = this.A;
  return null != a ? a : this.A = a = vc(this);
};
k.J = function(a, b) {
  return Dc(this, b);
};
k.W = function() {
  return hf;
};
k.da = function(a, b) {
  return yc.h(this, b);
};
k.ea = function(a, b, c) {
  return yc.j(this, b, c);
};
k.va = function(a, b, c) {
  return S.j(new W(null, 2, 5, X, [this.key, this.B], null), b, c);
};
k.O = function() {
  return Ja(Ja(sc, this.B), this.key);
};
k.M = function(a, b) {
  return Fc(new W(null, 2, 5, X, [this.key, this.B], null), b);
};
k.R = function(a, b) {
  return new W(null, 3, 5, X, [this.key, this.B, b], null);
};
k.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.P(null, c);
      case 3:
        return this.Q(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Da(b)));
};
k.g = function(a) {
  return this.P(null, a);
};
k.h = function(a, b) {
  return this.Q(null, a, b);
};
function ch(a, b, c, d, e) {
  this.key = a;
  this.B = b;
  this.left = c;
  this.right = d;
  this.A = e;
  this.F = 0;
  this.p = 32402207;
}
k = ch.prototype;
k.Cc = function(a) {
  return new ch(this.key, this.B, this.left, a, null);
};
k.Pb = function() {
  throw Error("red-black tree invariant violation");
};
k.Qa = function() {
  return new dh(this.key, this.B, this.left, this.right, null);
};
k.Bc = function(a) {
  return new ch(this.key, this.B, a, this.right, null);
};
k.replace = function(a, b, c, d) {
  return new ch(a, b, c, d, null);
};
k.Ec = function(a) {
  return this.left instanceof ch ? new ch(this.key, this.B, this.left.Qa(), new dh(a.key, a.B, this.right, a.right, null), null) : this.right instanceof ch ? new ch(this.right.key, this.right.B, new dh(this.key, this.B, this.left, this.right.left, null), new dh(a.key, a.B, this.right.right, a.right, null), null) : u ? new dh(a.key, a.B, this, a.right, null) : null;
};
k.Fc = function(a) {
  return this.right instanceof ch ? new ch(this.key, this.B, new dh(a.key, a.B, a.left, this.left, null), this.right.Qa(), null) : this.left instanceof ch ? new ch(this.left.key, this.left.B, new dh(a.key, a.B, a.left, this.left.left, null), new dh(this.key, this.B, this.left.right, this.right, null), null) : u ? new dh(a.key, a.B, a.left, this, null) : null;
};
k.ub = function(a, b) {
  return hh(this, a, b);
};
k.P = function(a, b) {
  return A.j(this, b, null);
};
k.Q = function(a, b, c) {
  return A.j(this, b, c);
};
k.H = function(a, b) {
  return 0 === b ? this.key : 1 === b ? this.B : null;
};
k.sa = function(a, b, c) {
  return 0 === b ? this.key : 1 === b ? this.B : u ? c : null;
};
k.pb = function(a, b, c) {
  return(new W(null, 2, 5, X, [this.key, this.B], null)).pb(null, b, c);
};
k.L = function() {
  return null;
};
k.T = function() {
  return 2;
};
k.Jb = function() {
  return this.key;
};
k.Kb = function() {
  return this.B;
};
k.jb = function() {
  return this.B;
};
k.N = function() {
  var a = this.A;
  return null != a ? a : this.A = a = vc(this);
};
k.J = function(a, b) {
  return Dc(this, b);
};
k.W = function() {
  return hf;
};
k.da = function(a, b) {
  return yc.h(this, b);
};
k.ea = function(a, b, c) {
  return yc.j(this, b, c);
};
k.va = function(a, b, c) {
  return S.j(new W(null, 2, 5, X, [this.key, this.B], null), b, c);
};
k.O = function() {
  return Ja(Ja(sc, this.B), this.key);
};
k.M = function(a, b) {
  return Fc(new W(null, 2, 5, X, [this.key, this.B], null), b);
};
k.R = function(a, b) {
  return new W(null, 3, 5, X, [this.key, this.B, b], null);
};
k.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.P(null, c);
      case 3:
        return this.Q(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Da(b)));
};
k.g = function(a) {
  return this.P(null, a);
};
k.h = function(a, b) {
  return this.Q(null, a, b);
};
var jh = function ih(b, c, d, e, f) {
  if (null == c) {
    return new ch(d, e, null, null, null);
  }
  var g = b.h ? b.h(d, c.key) : b.call(null, d, c.key);
  return 0 === g ? (f[0] = c, null) : 0 > g ? (b = ih(b, c.left, d, e, f), null != b ? c.Bc(b) : null) : u ? (b = ih(b, c.right, d, e, f), null != b ? c.Cc(b) : null) : null;
}, lh = function kh(b, c) {
  if (null == b) {
    return c;
  }
  if (null == c) {
    return b;
  }
  if (b instanceof ch) {
    if (c instanceof ch) {
      var d = kh(b.right, c.left);
      return d instanceof ch ? new ch(d.key, d.B, new ch(b.key, b.B, b.left, d.left, null), new ch(c.key, c.B, d.right, c.right, null), null) : new ch(b.key, b.B, b.left, new ch(c.key, c.B, d, c.right, null), null);
    }
    return new ch(b.key, b.B, b.left, kh(b.right, c), null);
  }
  return c instanceof ch ? new ch(c.key, c.B, kh(b, c.left), c.right, null) : u ? (d = kh(b.right, c.left), d instanceof ch ? new ch(d.key, d.B, new dh(b.key, b.B, b.left, d.left, null), new dh(c.key, c.B, d.right, c.right, null), null) : fh(b.key, b.B, b.left, new dh(c.key, c.B, d, c.right, null))) : null;
}, nh = function mh(b, c, d, e) {
  if (null != c) {
    var f = b.h ? b.h(d, c.key) : b.call(null, d, c.key);
    if (0 === f) {
      return e[0] = c, lh(c.left, c.right);
    }
    if (0 > f) {
      return b = mh(b, c.left, d, e), null != b || null != e[0] ? c.left instanceof dh ? fh(c.key, c.B, b, c.right) : new ch(c.key, c.B, b, c.right, null) : null;
    }
    if (u) {
      b = mh(b, c.right, d, e);
      if (null != b || null != e[0]) {
        if (c.right instanceof dh) {
          if (e = c.key, d = c.B, c = c.left, b instanceof ch) {
            c = new ch(e, d, c, b.Qa(), null);
          } else {
            if (c instanceof dh) {
              c = bh(e, d, c.Pb(), b);
            } else {
              if (c instanceof ch && c.right instanceof dh) {
                c = new ch(c.right.key, c.right.B, bh(c.key, c.B, c.left.Pb(), c.right.left), new dh(e, d, c.right.right, b, null), null);
              } else {
                if (u) {
                  throw Error("red-black tree invariant violation");
                }
                c = null;
              }
            }
          }
        } else {
          c = new ch(c.key, c.B, c.left, b, null);
        }
      } else {
        c = null;
      }
      return c;
    }
  }
  return null;
}, ph = function oh(b, c, d, e) {
  var f = c.key, g = b.h ? b.h(d, f) : b.call(null, d, f);
  return 0 === g ? c.replace(f, e, c.left, c.right) : 0 > g ? c.replace(f, c.B, oh(b, c.left, d, e), c.right) : u ? c.replace(f, c.B, c.left, oh(b, c.right, d, e)) : null;
};
function qh(a, b, c, d, e) {
  this.pa = a;
  this.La = b;
  this.t = c;
  this.w = d;
  this.A = e;
  this.p = 418776847;
  this.F = 8192;
}
k = qh.prototype;
k.toString = function() {
  return Xb(this);
};
k.forEach = function(a) {
  for (var b = F(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.H(null, e), g = Q.j(f, 0, null), f = Q.j(f, 1, null);
      a.h ? a.h(f, g) : a.call(null, f, g);
      e += 1;
    } else {
      if (b = F(b)) {
        jd(b) ? (c = C(b), b = E(b), g = c, d = P(c), c = g) : (c = I(b), g = Q.j(c, 0, null), f = Q.j(c, 1, null), a.h ? a.h(f, g) : a.call(null, f, g), b = L(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
function rh(a, b) {
  for (var c = a.La;;) {
    if (null != c) {
      var d = a.pa.h ? a.pa.h(b, c.key) : a.pa.call(null, b, c.key);
      if (0 === d) {
        return c;
      }
      if (0 > d) {
        c = c.left;
      } else {
        if (u) {
          c = c.right;
        } else {
          return null;
        }
      }
    } else {
      return null;
    }
  }
}
k.P = function(a, b) {
  return Qa.j(this, b, null);
};
k.Q = function(a, b, c) {
  a = rh(this, b);
  return null != a ? a.B : c;
};
k.Ib = function(a, b, c) {
  return null != this.La ? hh(this.La, b, c) : c;
};
k.L = function() {
  return this.w;
};
k.T = function() {
  return this.t;
};
k.zb = function() {
  return 0 < this.t ? ah(this.La, !1, this.t) : null;
};
k.N = function() {
  var a = this.A;
  return null != a ? a : this.A = a = wc(this);
};
k.J = function(a, b) {
  return ig(this, b);
};
k.W = function() {
  return Fc(sh, this.w);
};
k.Ra = function(a, b) {
  var c = [null], d = nh(this.pa, this.La, b, c);
  return null == d ? null == Q.h(c, 0) ? this : new qh(this.pa, null, 0, this.w, null) : new qh(this.pa, d.Qa(), this.t - 1, this.w, null);
};
k.va = function(a, b, c) {
  a = [null];
  var d = jh(this.pa, this.La, b, c, a);
  return null == d ? (a = Q.h(a, 0), mc.h(c, a.B) ? this : new qh(this.pa, ph(this.pa, this.La, b, c), this.t, this.w, null)) : new qh(this.pa, d.Qa(), this.t + 1, this.w, null);
};
k.Ub = function(a, b) {
  return null != rh(this, b);
};
k.O = function() {
  return 0 < this.t ? ah(this.La, !0, this.t) : null;
};
k.M = function(a, b) {
  return new qh(this.pa, this.La, this.t, b, this.A);
};
k.R = function(a, b) {
  if (id(b)) {
    return Sa(this, A.h(b, 0), A.h(b, 1));
  }
  for (var c = this, d = F(b);;) {
    if (null == d) {
      return c;
    }
    var e = I(d);
    if (id(e)) {
      c = Sa(c, A.h(e, 0), A.h(e, 1)), d = L(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
k.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.P(null, c);
      case 3:
        return this.Q(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Da(b)));
};
k.g = function(a) {
  return this.P(null, a);
};
k.h = function(a, b) {
  return this.Q(null, a, b);
};
k.qc = function(a, b) {
  return 0 < this.t ? ah(this.La, b, this.t) : null;
};
k.rc = function(a, b, c) {
  if (0 < this.t) {
    a = null;
    for (var d = this.La;;) {
      if (null != d) {
        var e = this.pa.h ? this.pa.h(b, d.key) : this.pa.call(null, b, d.key);
        if (0 === e) {
          return new $g(null, Nc.h(a, d), c, -1, null);
        }
        if (r(c)) {
          0 > e ? (a = Nc.h(a, d), d = d.left) : d = d.right;
        } else {
          if (u) {
            0 < e ? (a = Nc.h(a, d), d = d.right) : d = d.left;
          } else {
            return null;
          }
        }
      } else {
        return null == a ? null : new $g(null, a, c, -1, null);
      }
    }
  } else {
    return null;
  }
};
k.pc = function(a, b) {
  return Sd.g ? Sd.g(b) : Sd.call(null, b);
};
k.oc = function() {
  return this.pa;
};
var sh = new qh(nc, null, 0, null, 0), th = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = N(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = F(a);
    for (var b = Lb(og);;) {
      if (a) {
        var e = L(L(a)), b = Be.j(b, I(a), Hc(a));
        a = e;
      } else {
        return Nb(b);
      }
    }
  }
  a.v = 0;
  a.m = function(a) {
    a = F(a);
    return b(a);
  };
  a.k = b;
  return a;
}();
function uh(a, b) {
  this.ja = a;
  this.ka = b;
  this.F = 0;
  this.p = 32374988;
}
k = uh.prototype;
k.toString = function() {
  return Xb(this);
};
k.L = function() {
  return this.ka;
};
k.ga = function() {
  var a = this.ja, a = (a ? a.p & 128 || a.Xb || (a.p ? 0 : ya(Oa, a)) : ya(Oa, a)) ? this.ja.ga(null) : L(this.ja);
  return null == a ? null : new uh(a, this.ka);
};
k.N = function() {
  return vc(this);
};
k.J = function(a, b) {
  return Dc(this, b);
};
k.W = function() {
  return Fc(sc, this.ka);
};
k.da = function(a, b) {
  return Gc.h(b, this);
};
k.ea = function(a, b, c) {
  return Gc.j(b, c, this);
};
k.ba = function() {
  return this.ja.ba(null).Jb(null);
};
k.fa = function() {
  var a = this.ja, a = (a ? a.p & 128 || a.Xb || (a.p ? 0 : ya(Oa, a)) : ya(Oa, a)) ? this.ja.ga(null) : L(this.ja);
  return null != a ? new uh(a, this.ka) : sc;
};
k.O = function() {
  return this;
};
k.M = function(a, b) {
  return new uh(this.ja, b);
};
k.R = function(a, b) {
  return O(b, this);
};
function vh(a) {
  return(a = F(a)) ? new uh(a, null) : null;
}
function Sd(a) {
  return Wa(a);
}
function wh(a, b) {
  this.ja = a;
  this.ka = b;
  this.F = 0;
  this.p = 32374988;
}
k = wh.prototype;
k.toString = function() {
  return Xb(this);
};
k.L = function() {
  return this.ka;
};
k.ga = function() {
  var a = this.ja, a = (a ? a.p & 128 || a.Xb || (a.p ? 0 : ya(Oa, a)) : ya(Oa, a)) ? this.ja.ga(null) : L(this.ja);
  return null == a ? null : new wh(a, this.ka);
};
k.N = function() {
  return vc(this);
};
k.J = function(a, b) {
  return Dc(this, b);
};
k.W = function() {
  return Fc(sc, this.ka);
};
k.da = function(a, b) {
  return Gc.h(b, this);
};
k.ea = function(a, b, c) {
  return Gc.j(b, c, this);
};
k.ba = function() {
  return this.ja.ba(null).Kb(null);
};
k.fa = function() {
  var a = this.ja, a = (a ? a.p & 128 || a.Xb || (a.p ? 0 : ya(Oa, a)) : ya(Oa, a)) ? this.ja.ga(null) : L(this.ja);
  return null != a ? new wh(a, this.ka) : sc;
};
k.O = function() {
  return this;
};
k.M = function(a, b) {
  return new wh(this.ja, b);
};
k.R = function(a, b) {
  return O(b, this);
};
function xh(a) {
  return(a = F(a)) ? new wh(a, null) : null;
}
function Td(a) {
  return Ya(a);
}
var yh = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = N(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    return r(Ie(Ke, a)) ? vd.h(function(a, b) {
      return Nc.h(r(a) ? a : mg, b);
    }, a) : null;
  }
  a.v = 0;
  a.m = function(a) {
    a = F(a);
    return b(a);
  };
  a.k = b;
  return a;
}();
function zh(a, b) {
  for (var c = mg, d = F(b);;) {
    if (d) {
      var e = I(d), f = R.j(a, e, Ah), c = Fe.h(f, Ah) ? S.j(c, e, f) : c, d = L(d)
    } else {
      return c;
    }
  }
}
function Bh(a, b, c) {
  this.w = a;
  this.sb = b;
  this.A = c;
  this.p = 15077647;
  this.F = 8196;
}
k = Bh.prototype;
k.toString = function() {
  return Xb(this);
};
k.forEach = function(a) {
  for (var b = F(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.H(null, e), g = Q.j(f, 0, null), f = Q.j(f, 1, null);
      a.h ? a.h(f, g) : a.call(null, f, g);
      e += 1;
    } else {
      if (b = F(b)) {
        jd(b) ? (c = C(b), b = E(b), g = c, d = P(c), c = g) : (c = I(b), g = Q.j(c, 0, null), f = Q.j(c, 1, null), a.h ? a.h(f, g) : a.call(null, f, g), b = L(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
k.P = function(a, b) {
  return Qa.j(this, b, null);
};
k.Q = function(a, b, c) {
  return Ra(this.sb, b) ? b : c;
};
k.L = function() {
  return this.w;
};
k.T = function() {
  return Ga(this.sb);
};
k.N = function() {
  var a = this.A;
  return null != a ? a : this.A = a = wc(this);
};
k.J = function(a, b) {
  return Xc(b) && P(this) === P(b) && He(function(a) {
    return function(b) {
      return pd(a, b);
    };
  }(this), b);
};
k.yb = function() {
  return new Ch(Lb(this.sb));
};
k.W = function() {
  return Fc(Dh, this.w);
};
k.nc = function(a, b) {
  return new Bh(this.w, Ua(this.sb, b), null);
};
k.O = function() {
  return vh(this.sb);
};
k.M = function(a, b) {
  return new Bh(b, this.sb, this.A);
};
k.R = function(a, b) {
  return new Bh(this.w, S.j(this.sb, b, null), null);
};
k.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.P(null, c);
      case 3:
        return this.Q(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Da(b)));
};
k.g = function(a) {
  return this.P(null, a);
};
k.h = function(a, b) {
  return this.Q(null, a, b);
};
var Dh = new Bh(null, mg, 0);
function Eh(a) {
  var b = a.length;
  if (b <= ng) {
    for (var c = 0, d = Lb(mg);;) {
      if (c < b) {
        var e = c + 1, d = Ob(d, a[c], null), c = e
      } else {
        return new Bh(null, Nb(d), null);
      }
    }
  } else {
    for (c = 0, d = Lb(Dh);;) {
      if (c < b) {
        e = c + 1, d = Mb(d, a[c]), c = e;
      } else {
        return Nb(d);
      }
    }
  }
}
function Ch(a) {
  this.Va = a;
  this.p = 259;
  this.F = 136;
}
k = Ch.prototype;
k.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Qa.j(this.Va, c, md) === md ? null : c;
      case 3:
        return Qa.j(this.Va, c, md) === md ? d : c;
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Da(b)));
};
k.g = function(a) {
  return Qa.j(this.Va, a, md) === md ? null : a;
};
k.h = function(a, b) {
  return Qa.j(this.Va, a, md) === md ? b : a;
};
k.P = function(a, b) {
  return Qa.j(this, b, null);
};
k.Q = function(a, b, c) {
  return Qa.j(this.Va, b, md) === md ? c : b;
};
k.T = function() {
  return P(this.Va);
};
k.nb = function(a, b) {
  this.Va = Be.j(this.Va, b, null);
  return this;
};
k.ob = function() {
  return new Bh(null, Nb(this.Va), null);
};
function Fh(a, b, c) {
  this.w = a;
  this.Ma = b;
  this.A = c;
  this.p = 417730831;
  this.F = 8192;
}
k = Fh.prototype;
k.toString = function() {
  return Xb(this);
};
k.forEach = function(a) {
  for (var b = F(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.H(null, e), g = Q.j(f, 0, null), f = Q.j(f, 1, null);
      a.h ? a.h(f, g) : a.call(null, f, g);
      e += 1;
    } else {
      if (b = F(b)) {
        jd(b) ? (c = C(b), b = E(b), g = c, d = P(c), c = g) : (c = I(b), g = Q.j(c, 0, null), f = Q.j(c, 1, null), a.h ? a.h(f, g) : a.call(null, f, g), b = L(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
k.P = function(a, b) {
  return Qa.j(this, b, null);
};
k.Q = function(a, b, c) {
  a = rh(this.Ma, b);
  return null != a ? a.key : c;
};
k.L = function() {
  return this.w;
};
k.T = function() {
  return P(this.Ma);
};
k.zb = function() {
  return 0 < P(this.Ma) ? Se.h(Sd, wb(this.Ma)) : null;
};
k.N = function() {
  var a = this.A;
  return null != a ? a : this.A = a = wc(this);
};
k.J = function(a, b) {
  return Xc(b) && P(this) === P(b) && He(function(a) {
    return function(b) {
      return pd(a, b);
    };
  }(this), b);
};
k.W = function() {
  return Fc(Gh, this.w);
};
k.nc = function(a, b) {
  return new Fh(this.w, Rc.h(this.Ma, b), null);
};
k.O = function() {
  return vh(this.Ma);
};
k.M = function(a, b) {
  return new Fh(b, this.Ma, this.A);
};
k.R = function(a, b) {
  return new Fh(this.w, S.j(this.Ma, b, null), null);
};
k.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.P(null, c);
      case 3:
        return this.Q(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Da(b)));
};
k.g = function(a) {
  return this.P(null, a);
};
k.h = function(a, b) {
  return this.Q(null, a, b);
};
k.qc = function(a, b) {
  return Se.h(Sd, xb(this.Ma, b));
};
k.rc = function(a, b, c) {
  return Se.h(Sd, zb(this.Ma, b, c));
};
k.pc = function(a, b) {
  return b;
};
k.oc = function() {
  return Bb(this.Ma);
};
var Gh = new Fh(null, sh, 0);
function Hh(a) {
  a = F(a);
  if (null == a) {
    return Dh;
  }
  if (a instanceof rc && 0 === a.D) {
    a = a.l;
    a: {
      for (var b = 0, c = Lb(Dh);;) {
        if (b < a.length) {
          var d = b + 1, c = c.nb(null, a[b]), b = d
        } else {
          a = c;
          break a;
        }
      }
      a = void 0;
    }
    return a.ob(null);
  }
  if (u) {
    for (d = Lb(Dh);;) {
      if (null != a) {
        b = a.ga(null), d = d.nb(null, a.ba(null)), a = b;
      } else {
        return d.ob(null);
      }
    }
  } else {
    return null;
  }
}
var Ih = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = N(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    return vd.j(Ja, Gh, a);
  }
  a.v = 0;
  a.m = function(a) {
    a = F(a);
    return b(a);
  };
  a.k = b;
  return a;
}();
function Zd(a) {
  if (a && (a.F & 4096 || a.jd)) {
    return a.name;
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error("Doesn't support name: " + y.g(a));
}
function Jh(a, b) {
  for (var c = Lb(mg), d = F(a), e = F(b);;) {
    if (d && e) {
      c = Be.j(c, I(d), I(e)), d = L(d), e = L(e);
    } else {
      return Nb(c);
    }
  }
}
var Kh = function() {
  function a(a, b, c) {
    return(a.g ? a.g(b) : a.call(null, b)) > (a.g ? a.g(c) : a.call(null, c)) ? b : c;
  }
  var b = null, c = function() {
    function a(b, d, h, l) {
      var n = null;
      3 < arguments.length && (n = N(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, h, n);
    }
    function c(a, d, e, l) {
      return vd.j(function(c, d) {
        return b.j(a, c, d);
      }, b.j(a, d, e), l);
    }
    a.v = 3;
    a.m = function(a) {
      var b = I(a);
      a = L(a);
      var d = I(a);
      a = L(a);
      var l = I(a);
      a = J(a);
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
        return c.k(b, e, f, N(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.v = 3;
  b.m = c.m;
  b.h = function(a, b) {
    return b;
  };
  b.j = a;
  b.k = c.k;
  return b;
}(), Lh = function() {
  function a(a, b, c) {
    return(a.g ? a.g(b) : a.call(null, b)) < (a.g ? a.g(c) : a.call(null, c)) ? b : c;
  }
  var b = null, c = function() {
    function a(b, d, h, l) {
      var n = null;
      3 < arguments.length && (n = N(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, h, n);
    }
    function c(a, d, e, l) {
      return vd.j(function(c, d) {
        return b.j(a, c, d);
      }, b.j(a, d, e), l);
    }
    a.v = 3;
    a.m = function(a) {
      var b = I(a);
      a = L(a);
      var d = I(a);
      a = L(a);
      var l = I(a);
      a = J(a);
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
        return c.k(b, e, f, N(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.v = 3;
  b.m = c.m;
  b.h = function(a, b) {
    return b;
  };
  b.j = a;
  b.k = c.k;
  return b;
}(), Nh = function Mh(b, c) {
  return new ae(null, function() {
    var d = F(c);
    return d ? r(b.g ? b.g(I(d)) : b.call(null, I(d))) ? O(I(d), Mh(b, J(d))) : null : null;
  }, null, null);
};
function Oh(a, b, c) {
  return function(d) {
    var e = Bb(a);
    return b.h ? b.h(e.h ? e.h(Ab(a, d), c) : e.call(null, Ab(a, d), c), 0) : b.call(null, e.h ? e.h(Ab(a, d), c) : e.call(null, Ab(a, d), c), 0);
  };
}
var Ph = function() {
  function a(a, b, c, g, h) {
    var l = zb(a, c, !0);
    if (r(l)) {
      var n = Q.j(l, 0, null);
      return Nh(Oh(a, g, h), r(Oh(a, b, c).call(null, n)) ? l : L(l));
    }
    return null;
  }
  function b(a, b, c) {
    var g = Oh(a, b, c);
    return r(Eh([yd, zd]).call(null, b)) ? (a = zb(a, c, !0), r(a) ? (b = Q.j(a, 0, null), r(g.g ? g.g(b) : g.call(null, b)) ? a : L(a)) : null) : Nh(g, xb(a, !0));
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
  c.I = a;
  return c;
}();
function Qh(a, b, c, d, e) {
  this.w = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.A = e;
  this.p = 32375006;
  this.F = 8192;
}
k = Qh.prototype;
k.toString = function() {
  return Xb(this);
};
k.H = function(a, b) {
  if (b < Ga(this)) {
    return this.start + b * this.step;
  }
  if (this.start > this.end && 0 === this.step) {
    return this.start;
  }
  throw Error("Index out of bounds");
};
k.sa = function(a, b, c) {
  return b < Ga(this) ? this.start + b * this.step : this.start > this.end && 0 === this.step ? this.start : c;
};
k.L = function() {
  return this.w;
};
k.ga = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new Qh(this.w, this.start + this.step, this.end, this.step, null) : null : this.start + this.step > this.end ? new Qh(this.w, this.start + this.step, this.end, this.step, null) : null;
};
k.T = function() {
  return xa(tb(this)) ? 0 : Math.ceil((this.end - this.start) / this.step);
};
k.N = function() {
  var a = this.A;
  return null != a ? a : this.A = a = vc(this);
};
k.J = function(a, b) {
  return Dc(this, b);
};
k.W = function() {
  return Fc(sc, this.w);
};
k.da = function(a, b) {
  return yc.h(this, b);
};
k.ea = function(a, b, c) {
  return yc.j(this, b, c);
};
k.ba = function() {
  return null == tb(this) ? null : this.start;
};
k.fa = function() {
  return null != tb(this) ? new Qh(this.w, this.start + this.step, this.end, this.step, null) : sc;
};
k.O = function() {
  return 0 < this.step ? this.start < this.end ? this : null : this.start > this.end ? this : null;
};
k.M = function(a, b) {
  return new Qh(b, this.start, this.end, this.step, this.A);
};
k.R = function(a, b) {
  return O(b, this);
};
var Rh = function() {
  function a(a, b, c) {
    return new Qh(null, a, b, c, null);
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
function Sh(a) {
  return ze(vd.j(function(a, c) {
    return Be.j(a, c, R.j(a, c, 0) + 1);
  }, Lb(mg), a));
}
var Th = function() {
  function a(a, b, f) {
    return O(b, new ae(null, function() {
      var g = F(f);
      return g ? c.j(a, a.h ? a.h(b, I(g)) : a.call(null, b, I(g)), J(g)) : null;
    }, null, null));
  }
  function b(a, b) {
    return new ae(null, function() {
      var f = F(b);
      return f ? c.j(a, I(f), J(f)) : Ja(sc, a.q ? a.q() : a.call(null));
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
}(), Uh = function() {
  function a(a, b, c) {
    return function() {
      var d = null, e = function() {
        function d(a, b, c, f) {
          var g = null;
          3 < arguments.length && (g = N(Array.prototype.slice.call(arguments, 3), 0));
          return e.call(this, a, b, c, g);
        }
        function e(d, l, m, n) {
          return new W(null, 3, 5, X, [T.I(a, d, l, m, n), T.I(b, d, l, m, n), T.I(c, d, l, m, n)], null);
        }
        d.v = 3;
        d.m = function(a) {
          var b = I(a);
          a = L(a);
          var c = I(a);
          a = L(a);
          var d = I(a);
          a = J(a);
          return e(b, c, d, a);
        };
        d.k = e;
        return d;
      }(), d = function(d, l, w, x) {
        switch(arguments.length) {
          case 0:
            return new W(null, 3, 5, X, [a.q ? a.q() : a.call(null), b.q ? b.q() : b.call(null), c.q ? c.q() : c.call(null)], null);
          case 1:
            var t = d;
            return new W(null, 3, 5, X, [a.g ? a.g(t) : a.call(null, t), b.g ? b.g(t) : b.call(null, t), c.g ? c.g(t) : c.call(null, t)], null);
          case 2:
            var t = d, z = l;
            return new W(null, 3, 5, X, [a.h ? a.h(t, z) : a.call(null, t, z), b.h ? b.h(t, z) : b.call(null, t, z), c.h ? c.h(t, z) : c.call(null, t, z)], null);
          case 3:
            var t = d, z = l, G = w;
            return new W(null, 3, 5, X, [a.j ? a.j(t, z, G) : a.call(null, t, z, G), b.j ? b.j(t, z, G) : b.call(null, t, z, G), c.j ? c.j(t, z, G) : c.call(null, t, z, G)], null);
          default:
            return e.k(d, l, w, N(arguments, 3));
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      d.v = 3;
      d.m = e.m;
      return d;
    }();
  }
  function b(a, b) {
    return function() {
      var c = null, d = function() {
        function c(a, b, e, f) {
          var g = null;
          3 < arguments.length && (g = N(Array.prototype.slice.call(arguments, 3), 0));
          return d.call(this, a, b, e, g);
        }
        function d(c, e, h, l) {
          return new W(null, 2, 5, X, [T.I(a, c, e, h, l), T.I(b, c, e, h, l)], null);
        }
        c.v = 3;
        c.m = function(a) {
          var b = I(a);
          a = L(a);
          var c = I(a);
          a = L(a);
          var e = I(a);
          a = J(a);
          return d(b, c, e, a);
        };
        c.k = d;
        return c;
      }(), c = function(c, e, h, w) {
        switch(arguments.length) {
          case 0:
            return new W(null, 2, 5, X, [a.q ? a.q() : a.call(null), b.q ? b.q() : b.call(null)], null);
          case 1:
            var x = c;
            return new W(null, 2, 5, X, [a.g ? a.g(x) : a.call(null, x), b.g ? b.g(x) : b.call(null, x)], null);
          case 2:
            var x = c, t = e;
            return new W(null, 2, 5, X, [a.h ? a.h(x, t) : a.call(null, x, t), b.h ? b.h(x, t) : b.call(null, x, t)], null);
          case 3:
            var x = c, t = e, z = h;
            return new W(null, 2, 5, X, [a.j ? a.j(x, t, z) : a.call(null, x, t, z), b.j ? b.j(x, t, z) : b.call(null, x, t, z)], null);
          default:
            return d.k(c, e, h, N(arguments, 3));
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      c.v = 3;
      c.m = d.m;
      return c;
    }();
  }
  function c(a) {
    return function() {
      var b = null, c = function() {
        function b(a, d, e, f) {
          var g = null;
          3 < arguments.length && (g = N(Array.prototype.slice.call(arguments, 3), 0));
          return c.call(this, a, d, e, g);
        }
        function c(b, d, e, g) {
          return new W(null, 1, 5, X, [T.I(a, b, d, e, g)], null);
        }
        b.v = 3;
        b.m = function(a) {
          var b = I(a);
          a = L(a);
          var d = I(a);
          a = L(a);
          var e = I(a);
          a = J(a);
          return c(b, d, e, a);
        };
        b.k = c;
        return b;
      }(), b = function(b, d, e, g) {
        switch(arguments.length) {
          case 0:
            return new W(null, 1, 5, X, [a.q ? a.q() : a.call(null)], null);
          case 1:
            var w = b;
            return new W(null, 1, 5, X, [a.g ? a.g(w) : a.call(null, w)], null);
          case 2:
            var w = b, x = d;
            return new W(null, 1, 5, X, [a.h ? a.h(w, x) : a.call(null, w, x)], null);
          case 3:
            var w = b, x = d, t = e;
            return new W(null, 1, 5, X, [a.j ? a.j(w, x, t) : a.call(null, w, x, t)], null);
          default:
            return c.k(b, d, e, N(arguments, 3));
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      b.v = 3;
      b.m = c.m;
      return b;
    }();
  }
  var d = null, e = function() {
    function a(c, d, e, f) {
      var s = null;
      3 < arguments.length && (s = N(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, d, e, s);
    }
    function b(a, c, d, e) {
      return function(a) {
        return function() {
          function b(c, d, e) {
            return vd.j(function() {
              return function(a, b) {
                return Nc.h(a, b.j ? b.j(c, d, e) : b.call(null, c, d, e));
              };
            }(a), hf, a);
          }
          function c(b, d) {
            return vd.j(function() {
              return function(a, c) {
                return Nc.h(a, c.h ? c.h(b, d) : c.call(null, b, d));
              };
            }(a), hf, a);
          }
          function d(b) {
            return vd.j(function() {
              return function(a, c) {
                return Nc.h(a, c.g ? c.g(b) : c.call(null, b));
              };
            }(a), hf, a);
          }
          function e() {
            return vd.j(function() {
              return function(a, b) {
                return Nc.h(a, b.q ? b.q() : b.call(null));
              };
            }(a), hf, a);
          }
          var f = null, g = function() {
            function b(a, d, e, f) {
              var g = null;
              3 < arguments.length && (g = N(Array.prototype.slice.call(arguments, 3), 0));
              return c.call(this, a, d, e, g);
            }
            function c(b, d, e, f) {
              return vd.j(function() {
                return function(a, c) {
                  return Nc.h(a, T.I(c, b, d, e, f));
                };
              }(a), hf, a);
            }
            b.v = 3;
            b.m = function(a) {
              var b = I(a);
              a = L(a);
              var d = I(a);
              a = L(a);
              var e = I(a);
              a = J(a);
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
                return g.k(a, f, h, N(arguments, 3));
            }
            throw Error("Invalid arity: " + arguments.length);
          };
          f.v = 3;
          f.m = g.m;
          return f;
        }();
      }(ye.o(a, c, d, e));
    }
    a.v = 3;
    a.m = function(a) {
      var c = I(a);
      a = L(a);
      var d = I(a);
      a = L(a);
      var e = I(a);
      a = J(a);
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
        return e.k(d, g, h, N(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.v = 3;
  d.m = e.m;
  d.g = c;
  d.h = b;
  d.j = a;
  d.k = e.k;
  return d;
}(), Vh = function() {
  function a(a, b) {
    for (;;) {
      if (F(b) && 0 < a) {
        var c = a - 1, g = L(b);
        a = c;
        b = g;
      } else {
        return null;
      }
    }
  }
  function b(a) {
    for (;;) {
      if (F(a)) {
        a = L(a);
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
}(), Wh = function() {
  function a(a, b) {
    Vh.h(a, b);
    return b;
  }
  function b(a) {
    Vh.g(a);
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
function Xh(a, b) {
  if ("string" === typeof b) {
    var c = a.exec(b);
    return mc.h(I(c), b) ? 1 === P(c) ? I(c) : Vf(c) : null;
  }
  throw new TypeError("re-matches must match against a string.");
}
function Yh(a) {
  var b;
  b = /^(?:\(\?([idmsux]*)\))?(.*)/;
  if ("string" === typeof a) {
    a = b.exec(a), b = null == a ? null : 1 === P(a) ? I(a) : Vf(a);
  } else {
    throw new TypeError("re-find must match against a string.");
  }
  Q.j(b, 0, null);
  a = Q.j(b, 1, null);
  b = Q.j(b, 2, null);
  return new RegExp(b, a);
}
function li(a, b, c, d, e, f, g) {
  var h = qa;
  try {
    qa = null == qa ? null : qa - 1;
    if (null != qa && 0 > qa) {
      return Cb(a, "#");
    }
    Cb(a, c);
    F(g) && (b.j ? b.j(I(g), a, f) : b.call(null, I(g), a, f));
    for (var l = L(g), n = wa.g(f) - 1;;) {
      if (!l || null != n && 0 === n) {
        F(l) && 0 === n && (Cb(a, d), Cb(a, "..."));
        break;
      } else {
        Cb(a, d);
        b.j ? b.j(I(l), a, f) : b.call(null, I(l), a, f);
        var m = L(l);
        c = n - 1;
        l = m;
        n = c;
      }
    }
    return Cb(a, e);
  } finally {
    qa = h;
  }
}
var mi = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = N(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    for (var e = F(b), f = null, g = 0, h = 0;;) {
      if (h < g) {
        var l = f.H(null, h);
        Cb(a, l);
        h += 1;
      } else {
        if (e = F(e)) {
          f = e, jd(f) ? (e = C(f), g = E(f), f = e, l = P(e), e = g, g = l) : (l = I(f), Cb(a, l), e = L(f), f = null, g = 0), h = 0;
        } else {
          return null;
        }
      }
    }
  }
  a.v = 1;
  a.m = function(a) {
    var d = I(a);
    a = J(a);
    return b(d, a);
  };
  a.k = b;
  return a;
}(), ni = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function Ci(a) {
  return'"' + y.g(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return ni[a];
  })) + '"';
}
var Fi = function Di(b, c, d) {
  if (null == b) {
    return Cb(c, "nil");
  }
  if (void 0 === b) {
    return Cb(c, "#\x3cundefined\x3e");
  }
  if (u) {
    r(function() {
      var c = R.h(d, ua);
      return r(c) ? (c = b ? b.p & 131072 || b.hd ? !0 : b.p ? !1 : ya(eb, b) : ya(eb, b)) ? Uc(b) : c : c;
    }()) && (Cb(c, "^"), Di(Uc(b), c, d), Cb(c, " "));
    if (null == b) {
      return Cb(c, "nil");
    }
    if (b.rb) {
      return b.Bb(b, c, d);
    }
    if (b && (b.p & 2147483648 || b.X)) {
      return b.K(null, c, d);
    }
    if (za(b) === Boolean || "number" === typeof b) {
      return Cb(c, "" + y.g(b));
    }
    if (null != b && b.constructor === Object) {
      return Cb(c, "#js "), Ei.o ? Ei.o(Se.h(function(c) {
        return new W(null, 2, 5, X, [$d.g(c), b[c]], null);
      }, kd(b)), Di, c, d) : Ei.call(null, Se.h(function(c) {
        return new W(null, 2, 5, X, [$d.g(c), b[c]], null);
      }, kd(b)), Di, c, d);
    }
    if (b instanceof Array) {
      return li(c, Di, "#js [", " ", "]", d, b);
    }
    if (ba(b)) {
      return r(ta.g(d)) ? Cb(c, Ci(b)) : Cb(c, b);
    }
    if (Sc(b)) {
      return mi.k(c, N(["#\x3c", "" + y.g(b), "\x3e"], 0));
    }
    if (b instanceof Date) {
      var e = function(b, c) {
        for (var d = "" + y.g(b);;) {
          if (P(d) < c) {
            d = "0" + y.g(d);
          } else {
            return d;
          }
        }
      };
      return mi.k(c, N(['#inst "', "" + y.g(b.getUTCFullYear()), "-", e(b.getUTCMonth() + 1, 2), "-", e(b.getUTCDate(), 2), "T", e(b.getUTCHours(), 2), ":", e(b.getUTCMinutes(), 2), ":", e(b.getUTCSeconds(), 2), ".", e(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0));
    }
    return b instanceof RegExp ? mi.k(c, N(['#"', b.source, '"'], 0)) : (b ? b.p & 2147483648 || b.X || (b.p ? 0 : ya(Db, b)) : ya(Db, b)) ? Eb(b, c, d) : u ? mi.k(c, N(["#\x3c", "" + y.g(b), "\x3e"], 0)) : null;
  }
  return null;
};
function Gi(a, b) {
  var c = new ka;
  a: {
    var d = new Wb(c);
    Fi(I(a), d, b);
    for (var e = F(L(a)), f = null, g = 0, h = 0;;) {
      if (h < g) {
        var l = f.H(null, h);
        Cb(d, " ");
        Fi(l, d, b);
        h += 1;
      } else {
        if (e = F(e)) {
          f = e, jd(f) ? (e = C(f), g = E(f), f = e, l = P(e), e = g, g = l) : (l = I(f), Cb(d, " "), Fi(l, d, b), e = L(f), f = null, g = 0), h = 0;
        } else {
          break a;
        }
      }
    }
  }
  return c;
}
var Hi = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = N(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b = ra();
    return null == a || xa(F(a)) ? "" : "" + y.g(Gi(a, b));
  }
  a.v = 0;
  a.m = function(a) {
    a = F(a);
    return b(a);
  };
  a.k = b;
  return a;
}();
function Ei(a, b, c, d) {
  return li(c, function(a, c, d) {
    b.j ? b.j(Wa(a), c, d) : b.call(null, Wa(a), c, d);
    Cb(c, " ");
    return b.j ? b.j(Ya(a), c, d) : b.call(null, Ya(a), c, d);
  }, "{", ", ", "}", d, F(a));
}
rc.prototype.X = !0;
rc.prototype.K = function(a, b, c) {
  return li(b, Fi, "(", " ", ")", c, this);
};
ae.prototype.X = !0;
ae.prototype.K = function(a, b, c) {
  return li(b, Fi, "(", " ", ")", c, this);
};
$g.prototype.X = !0;
$g.prototype.K = function(a, b, c) {
  return li(b, Fi, "(", " ", ")", c, this);
};
Ug.prototype.X = !0;
Ug.prototype.K = function(a, b, c) {
  return li(b, Fi, "(", " ", ")", c, this);
};
dh.prototype.X = !0;
dh.prototype.K = function(a, b, c) {
  return li(b, Fi, "[", " ", "]", c, this);
};
kg.prototype.X = !0;
kg.prototype.K = function(a, b, c) {
  return li(b, Fi, "(", " ", ")", c, this);
};
Fh.prototype.X = !0;
Fh.prototype.K = function(a, b, c) {
  return li(b, Fi, "#{", " ", "}", c, this);
};
Xf.prototype.X = !0;
Xf.prototype.K = function(a, b, c) {
  return li(b, Fi, "(", " ", ")", c, this);
};
Yd.prototype.X = !0;
Yd.prototype.K = function(a, b, c) {
  return li(b, Fi, "(", " ", ")", c, this);
};
Cc.prototype.X = !0;
Cc.prototype.K = function(a, b, c) {
  return li(b, Fi, "(", " ", ")", c, this);
};
Wg.prototype.X = !0;
Wg.prototype.K = function(a, b, c) {
  return Ei(this, Fi, b, c);
};
Vg.prototype.X = !0;
Vg.prototype.K = function(a, b, c) {
  return li(b, Fi, "(", " ", ")", c, this);
};
Zf.prototype.X = !0;
Zf.prototype.K = function(a, b, c) {
  return li(b, Fi, "[", " ", "]", c, this);
};
qh.prototype.X = !0;
qh.prototype.K = function(a, b, c) {
  return Ei(this, Fi, b, c);
};
Bh.prototype.X = !0;
Bh.prototype.K = function(a, b, c) {
  return li(b, Fi, "#{", " ", "}", c, this);
};
ge.prototype.X = !0;
ge.prototype.K = function(a, b, c) {
  return li(b, Fi, "(", " ", ")", c, this);
};
wh.prototype.X = !0;
wh.prototype.K = function(a, b, c) {
  return li(b, Fi, "(", " ", ")", c, this);
};
ch.prototype.X = !0;
ch.prototype.K = function(a, b, c) {
  return li(b, Fi, "[", " ", "]", c, this);
};
W.prototype.X = !0;
W.prototype.K = function(a, b, c) {
  return li(b, Fi, "[", " ", "]", c, this);
};
dg.prototype.X = !0;
dg.prototype.K = function(a, b, c) {
  return li(b, Fi, "(", " ", ")", c, this);
};
Vd.prototype.X = !0;
Vd.prototype.K = function(a, b) {
  return Cb(b, "()");
};
eg.prototype.X = !0;
eg.prototype.K = function(a, b, c) {
  return li(b, Fi, "#queue [", " ", "]", c, F(this));
};
q.prototype.X = !0;
q.prototype.K = function(a, b, c) {
  return Ei(this, Fi, b, c);
};
Qh.prototype.X = !0;
Qh.prototype.K = function(a, b, c) {
  return li(b, Fi, "(", " ", ")", c, this);
};
uh.prototype.X = !0;
uh.prototype.K = function(a, b, c) {
  return li(b, Fi, "(", " ", ")", c, this);
};
Ud.prototype.X = !0;
Ud.prototype.K = function(a, b, c) {
  return li(b, Fi, "(", " ", ")", c, this);
};
W.prototype.Vb = !0;
W.prototype.Wb = function(a, b) {
  return qd.h(this, b);
};
Zf.prototype.Vb = !0;
Zf.prototype.Wb = function(a, b) {
  return qd.h(this, b);
};
U.prototype.Vb = !0;
U.prototype.Wb = function(a, b) {
  return lc(this, b);
};
pc.prototype.Vb = !0;
pc.prototype.Wb = function(a, b) {
  return lc(this, b);
};
function Ii(a, b) {
  if (a ? a.ld : a) {
    return a.ld(a, b);
  }
  var c;
  c = Ii[p(null == a ? null : a)];
  if (!c && (c = Ii._, !c)) {
    throw v("IReset.-reset!", a);
  }
  return c.call(null, a, b);
}
var Ji = function() {
  function a(a, b, c, d, e) {
    if (a ? a.pd : a) {
      return a.pd(a, b, c, d, e);
    }
    var m;
    m = Ji[p(null == a ? null : a)];
    if (!m && (m = Ji._, !m)) {
      throw v("ISwap.-swap!", a);
    }
    return m.call(null, a, b, c, d, e);
  }
  function b(a, b, c, d) {
    if (a ? a.od : a) {
      return a.od(a, b, c, d);
    }
    var e;
    e = Ji[p(null == a ? null : a)];
    if (!e && (e = Ji._, !e)) {
      throw v("ISwap.-swap!", a);
    }
    return e.call(null, a, b, c, d);
  }
  function c(a, b, c) {
    if (a ? a.nd : a) {
      return a.nd(a, b, c);
    }
    var d;
    d = Ji[p(null == a ? null : a)];
    if (!d && (d = Ji._, !d)) {
      throw v("ISwap.-swap!", a);
    }
    return d.call(null, a, b, c);
  }
  function d(a, b) {
    if (a ? a.md : a) {
      return a.md(a, b);
    }
    var c;
    c = Ji[p(null == a ? null : a)];
    if (!c && (c = Ji._, !c)) {
      throw v("ISwap.-swap!", a);
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
  e.o = b;
  e.I = a;
  return e;
}();
function Ki(a, b, c, d) {
  this.state = a;
  this.w = b;
  this.Gd = c;
  this.ca = d;
  this.p = 2153938944;
  this.F = 16386;
}
k = Ki.prototype;
k.N = function() {
  return this[ca] || (this[ca] = ++ea);
};
k.tc = function(a, b, c) {
  a = F(this.ca);
  for (var d = null, e = 0, f = 0;;) {
    if (f < e) {
      var g = d.H(null, f), h = Q.j(g, 0, null), g = Q.j(g, 1, null);
      g.o ? g.o(h, this, b, c) : g.call(null, h, this, b, c);
      f += 1;
    } else {
      if (a = F(a)) {
        jd(a) ? (d = C(a), a = E(a), h = d, e = P(d), d = h) : (d = I(a), h = Q.j(d, 0, null), g = Q.j(d, 1, null), g.o ? g.o(h, this, b, c) : g.call(null, h, this, b, c), a = L(a), d = null, e = 0), f = 0;
      } else {
        return null;
      }
    }
  }
};
k.sc = function(a, b, c) {
  this.ca = S.j(this.ca, b, c);
  return this;
};
k.uc = function(a, b) {
  return this.ca = Rc.h(this.ca, b);
};
k.K = function(a, b, c) {
  Cb(b, "#\x3cAtom: ");
  Fi(this.state, b, c);
  return Cb(b, "\x3e");
};
k.L = function() {
  return this.w;
};
k.Hb = function() {
  return this.state;
};
k.J = function(a, b) {
  return this === b;
};
var Mi = function() {
  function a(a) {
    return new Ki(a, null, null, null);
  }
  var b = null, c = function() {
    function a(c, d) {
      var h = null;
      1 < arguments.length && (h = N(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, h);
    }
    function b(a, c) {
      var d = nd(c) ? T.h(th, c) : c, e = R.h(d, Li), d = R.h(d, ua);
      return new Ki(a, d, e, null);
    }
    a.v = 1;
    a.m = function(a) {
      var c = I(a);
      a = J(a);
      return b(c, a);
    };
    a.k = b;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.k(b, N(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.v = 1;
  b.m = c.m;
  b.g = a;
  b.k = c.k;
  return b;
}();
function Ni(a, b) {
  if (a instanceof Ki) {
    var c = a.Gd;
    if (null != c && !r(c.g ? c.g(b) : c.call(null, b))) {
      throw Error("Assert failed: Validator rejected reference state\n" + y.g(Hi.k(N([Xd(new pc(null, "validate", "validate", 1439230700, null), new pc(null, "new-value", "new-value", -1567397401, null))], 0))));
    }
    c = a.state;
    a.state = b;
    null != a.ca && Fb(a, c, b);
    return b;
  }
  return Ii(a, b);
}
var Oi = function() {
  function a(a, b, c, d) {
    return a instanceof Ki ? Ni(a, b.j ? b.j(a.state, c, d) : b.call(null, a.state, c, d)) : Ji.o(a, b, c, d);
  }
  function b(a, b, c) {
    return a instanceof Ki ? Ni(a, b.h ? b.h(a.state, c) : b.call(null, a.state, c)) : Ji.j(a, b, c);
  }
  function c(a, b) {
    return a instanceof Ki ? Ni(a, b.g ? b.g(a.state) : b.call(null, a.state)) : Ji.h(a, b);
  }
  var d = null, e = function() {
    function a(c, d, e, f, s) {
      var w = null;
      4 < arguments.length && (w = N(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, w);
    }
    function b(a, c, d, e, f) {
      return a instanceof Ki ? Ni(a, T.I(c, a.state, d, e, f)) : Ji.I(a, c, d, e, f);
    }
    a.v = 4;
    a.m = function(a) {
      var c = I(a);
      a = L(a);
      var d = I(a);
      a = L(a);
      var e = I(a);
      a = L(a);
      var f = I(a);
      a = J(a);
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
        return e.k(d, g, h, l, N(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.v = 4;
  d.m = e.m;
  d.h = c;
  d.j = b;
  d.o = a;
  d.k = e.k;
  return d;
}();
function Pi(a, b, c) {
  Jb(a, b, c);
}
var Qi = null, Ri = function() {
  function a(a) {
    null == Qi && (Qi = Mi.g(0));
    return qc.g("" + y.g(a) + y.g(Oi.h(Qi, xc)));
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
function Si(a, b) {
  return vd.j(function(b, d) {
    var e = a.g ? a.g(d) : a.call(null, d);
    return S.j(b, e, Nc.h(R.j(b, e, hf), d));
  }, mg, b);
}
function Ti(a) {
  this.gc = a;
  this.F = 0;
  this.p = 2153775104;
}
Ti.prototype.N = function() {
  for (var a = Hi.k(N([this], 0)), b = 0, c = 0;c < a.length;++c) {
    b = 31 * b + a.charCodeAt(c), b %= 4294967296;
  }
  return b;
};
Ti.prototype.K = function(a, b) {
  return Cb(b, '#uuid "' + y.g(this.gc) + '"');
};
Ti.prototype.J = function(a, b) {
  return b instanceof Ti && this.gc === b.gc;
};
Ti.prototype.toString = function() {
  return this.gc;
};
var Ui = new U(null, "inactive", "inactive"), Vi = new U(null, "y", "y"), Wi = new U(null, "no-deref-monitor", "no-deref-monitor"), Xi = new U(null, "in-synapses", "in-synapses"), Yi = new U(null, "fieldset", "fieldset"), Zi = new U(null, "fieldset#sim-controls", "fieldset#sim-controls"), $i = new U(null, "watches", "watches"), aj = new U(null, "boost-overlap-duty-ratio", "boost-overlap-duty-ratio"), bj = new U(null, "region-image", "region-image"), cj = new U(null, "ff-synapses", "ff-synapses"), 
dj = new U(null, "gap-countdown", "gap-countdown"), ej = new U(null, "down", "down"), fj = new U(null, "permanence-dec", "permanence-dec"), gj = new U(null, "active-history", "active-history"), hj = new U(null, "span#sim-rate", "span#sim-rate"), ij = new U(null, "predbits-image", "predbits-image"), jj = new U(null, "dh", "dh"), kj = new U(null, "boost", "boost"), lj = new U(null, "run-sim", "run-sim"), mj = new U(null, "a#sim-faster", "a#sim-faster"), nj = new U(null, "span#sim-timestep", "span#sim-timestep"), 
oj = new U(null, "transform", "transform"), ua = new U(null, "meta", "meta"), pj = new U(null, "selected", "selected"), qj = new U(null, "bit-width", "bit-width"), rj = new U(null, "dx", "dx"), sj = new U(null, "neighbours", "neighbours"), tj = new U(null, "overlap-history", "overlap-history"), va = new U(null, "dup", "dup"), uj = new U(null, "dir", "dir"), vj = new U(null, "segment-idx", "segment-idx"), wj = new U(null, "key", "key"), xj = new U(null, "sp-perm-dec", "sp-perm-dec"), yj = new U(null, 
"bottom", "bottom"), zj = new U(null, "button#sim-start", "button#sim-start"), Aj = new U(null, "exit", "exit"), u = new U(null, "else", "else"), Bj = new U(null, "disconnected", "disconnected"), Cj = new U(null, "boost-active-duty-ratio", "boost-active-duty-ratio"), Dj = new U(null, "lat-synapses", "lat-synapses"), Ej = new U(null, "button#sim-reset", "button#sim-reset"), Fj = new U(null, "derefed", "derefed"), Gj = new U(null, "prev-predictive-cells-by-column", "prev-predictive-cells-by-column"), 
Hj = new U(null, "yellow", "yellow"), Li = new U(null, "validator", "validator"), Ij = new U(null, "highlight", "highlight"), oc = new U(null, "default", "default"), Jj = new U(null, "cid", "cid"), Kj = new U(null, "button#anim-step", "button#anim-step"), Lj = new U(null, "finally-block", "finally-block"), Mj = new U(null, "columns", "columns"), Nj = new U(null, "a#anim-slower", "a#anim-slower"), Oj = new U(null, "w", "w"), Pj = new U(null, "sy", "sy"), Qj = new U(null, "anim-go?", "anim-go?"), Rj = 
new U(null, "dt", "dt"), Sj = new U(null, "parent-watchables", "parent-watchables"), Tj = new U(null, "value", "value"), Uj = new U(null, "viz-options", "viz-options"), Vj = new U(null, "time", "time"), qk = new U(null, "fieldset#anim-controls", "fieldset#anim-controls"), rk = new U(null, "mapping", "mapping"), sk = new U(null, "timestep", "timestep"), tk = new U(null, "dirty?", "dirty?"), uk = new U(null, "potential-frac", "potential-frac"), vk = new U(null, "width", "width"), wk = new U(null, "new-synapse-count", 
"new-synapse-count"), xk = new U(null, "a#sim-slower", "a#sim-slower"), yk = new U(null, "button#sim-step", "button#sim-step"), zk = new U(null, "dy", "dy"), Ak = new U(null, "connected", "connected"), Bk = new U(null, "p.detail", "p.detail"), Ck = new U(null, "submit", "submit"), Dk = new U(null, "legend", "legend"), Ek = new U(null, "permanence-inc", "permanence-inc"), Fk = new U(null, "avg-receptive-field-size", "avg-receptive-field-size"), Gk = new U(null, "fieldset#viz-options", "fieldset#viz-options"), 
Hk = new U(null, "predictive", "predictive"), Ik = new U(null, "potential-radius", "potential-radius"), Z = new U(null, "recur", "recur"), Jk = new U(null, "type", "type"), Kk = new U(null, "update", "update"), Lk = new U(null, "catch-block", "catch-block"), Mk = new U(null, "state", "state"), Nk = new U(null, "g.timestep", "g.timestep"), Ok = new U(null, "input-size", "input-size"), Pk = new U(null, "update-dom", "update-dom"), Qk = new U(null, "bursting?", "bursting?"), Rk = new U(null, "span#sim-ms-text", 
"span#sim-ms-text"), sa = new U(null, "flush-on-newline", "flush-on-newline"), Sk = new U(null, "segments", "segments"), Tk = new U(null, "sim-step-ms", "sim-step-ms"), Uk = new U(null, "button#anim-start", "button#anim-start"), Vk = new U(null, "synapses", "synapses"), Wk = new U(null, "learn-cells", "learn-cells"), Xk = new U(null, "all", "all"), Yk = new U(null, "active-columns", "active-columns"), Zk = new U(null, "activation-threshold", "activation-threshold"), $k = new U(null, "span#anim-every-text", 
"span#anim-every-text"), al = new U(null, "seed", "seed"), bl = new U(null, "up", "up"), cl = new U(null, "canvas", "canvas"), dl = new U(null, "ncol", "ncol"), el = new U(null, "enter", "enter"), fl = new U(null, "learning", "learning"), gl = new U(null, "region", "region"), hl = new U(null, "style", "style"), il = new U(null, "ts", "ts"), jl = new U(null, "div", "div"), kl = new U(null, "option", "option"), ta = new U(null, "readably", "readably"), ll = new U(null, "run-start", "run-start"), ml = 
new U(null, "activation", "activation"), nl = new U("org.nfrac.comportex.encoders", "bit-width", "org.nfrac.comportex.encoders/bit-width"), ol = new U(null, "counter", "counter"), pl = new U(null, "key-fn", "key-fn"), ql = new U(null, "spec", "spec"), rl = new U(null, "button#anim-stop", "button#anim-stop"), sl = new U(null, "random-double", "random-double"), tl = new U(null, "active-predicted", "active-predicted"), ul = new U(null, "click", "click"), vl = new U(null, "cp1x", "cp1x"), wl = new U(null, 
"fieldset#region-spec", "fieldset#region-spec"), xl = new U(null, "anim-every", "anim-every"), yl = new U(null, "max-boost", "max-boost"), zl = new U(null, "cp2x", "cp2x"), Al = new U(null, "stimulus-threshold", "stimulus-threshold"), Bl = new U(null, "active-cells", "active-cells"), Cl = new U(null, "g.plot-space", "g.plot-space"), Dl = new U(null, "sp-perm-inc", "sp-perm-inc"), El = new U(null, "h", "h"), Fl = new U(null, "from", "from"), Gl = new U(null, "a#anim-faster", "a#anim-faster"), wa = 
new U(null, "print-length", "print-length"), Hl = new U(null, "initial-perm", "initial-perm"), $ = new U(null, "active", "active"), Il = new U(null, "activation-level", "activation-level"), Jl = new U(null, "overlaps", "overlaps"), Kl = new U(null, "label", "label"), Ll = new U(null, "id", "id"), Ml = new U(null, "class", "class"), Nl = new U(null, "predictive-cells", "predictive-cells"), Ol = new U(null, "red", "red"), Pl = new U(null, "connected-perm", "connected-perm"), Ql = new U(null, "blue", 
"blue"), Rl = new U(null, "catch-exception", "catch-exception"), Sl = new U(null, "init-value", "init-value"), Tl = new U(null, "checked", "checked"), Ul = new U(null, "predictive-cells-by-column", "predictive-cells-by-column"), Vl = new U(null, "ts-plot", "ts-plot"), Wl = new U(null, "global-inhibition", "global-inhibition"), Xl = new U(null, "prev", "prev"), Yl = new U(null, "gap", "gap"), Zl = new U(null, "span.parameter-label", "span.parameter-label"), $l = new U(null, "button#sim-stop", "button#sim-stop"), 
am = new U(null, "continue-block", "continue-block"), bm = new U(null, "cp1y", "cp1y"), cm = new U(null, "right", "right"), dm = new U(null, "dw", "dw"), em = new U(null, "redraw", "redraw"), fm = new U(null, "display", "display"), gm = new U(null, "cell-ids", "cell-ids"), hm = new U(null, "f", "f"), im = new U(null, "sx", "sx"), jm = new U(null, "cell-id", "cell-id"), km = new U(null, "depth", "depth"), lm = new U(null, "br", "br"), mm = new U(null, "options", "options"), nm = new U(null, "x", "x"), 
xm = new U(null, "tag", "tag"), ym = new U(null, "predicted", "predicted"), zm = new U(null, "res", "res"), Am = new U(null, "sh", "sh"), Vm = new U(null, "capture", "capture"), Wm = new U(null, "sw", "sw"), Xm = new U(null, "domain", "domain"), Ym = new U(null, "input", "input"), Zm = new U(null, "cp2y", "cp2y"), $m = new U(null, "cells", "cells"), an = new U(null, "keep-n", "keep-n"), bn = new U(null, "first", "first"), cn = new U(null, "encode", "encode"), dn = new U(null, "change", "change"), 
en = new U(null, "purple", "purple"), fn = new U(null, "sp-perm-connected", "sp-perm-connected"), gn = new U(null, "bursting-columns", "bursting-columns"), hn = new U(null, "div#controls", "div#controls"), jn = new U("comportexviz.viz-canvas", "cache", "comportexviz.viz-canvas/cache"), kn = new U(null, "force-update?", "force-update?"), ln = new U(null, "duty-cycle-period", "duty-cycle-period"), mn = new U(null, "min-threshold", "min-threshold"), nn = new U(null, "last", "last"), on = new U(null, 
"form#region-spec-form", "form#region-spec-form"), pn = new U(null, "permanences", "permanences"), qn = new U(null, "svg#main", "svg#main"), rn = new U(null, "rect", "rect"), sn = new U(null, "step", "step"), tn = new U(null, "href", "href"), un = new U(null, "none", "none"), vn = new U(null, "bucket", "bucket"), wn = new U(null, "range", "range"), xn = new U(null, "height", "height"), yn = new U(null, "select", "select"), zn = new U(null, "in", "in"), An = new U(null, "left", "left"), Ah = new U("cljs.core", 
"not-found", "cljs.core/not-found"), Bn = new U(null, "text", "text"), Cn = new U(null, "span", "span"), Dn = new U(null, "inbits-image", "inbits-image"), En = new U(null, "margin", "margin"), Fn = new U(null, "data", "data");
function Gn(a, b) {
  var c = T.j(Kh, a, b);
  return O(c, df(function(a) {
    return function(b) {
      return a === b;
    };
  }(c), b));
}
var Hn = function() {
  function a(a, b) {
    return P(a) < P(b) ? vd.j(Nc, b, a) : vd.j(Nc, a, b);
  }
  var b = null, c = function() {
    function a(c, d, h) {
      var l = null;
      2 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      a = Gn(P, Nc.k(d, c, N([a], 0)));
      return vd.j(gf, I(a), J(a));
    }
    a.v = 2;
    a.m = function(a) {
      var c = I(a);
      a = L(a);
      var d = I(a);
      a = J(a);
      return b(c, d, a);
    };
    a.k = b;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 0:
        return Dh;
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.k(b, e, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.v = 2;
  b.m = c.m;
  b.q = function() {
    return Dh;
  };
  b.g = function(a) {
    return a;
  };
  b.h = a;
  b.k = c.k;
  return b;
}(), In = function() {
  function a(a, b) {
    for (;;) {
      if (P(b) < P(a)) {
        var c = a;
        a = b;
        b = c;
      } else {
        return vd.j(function(a, b) {
          return function(a, c) {
            return pd(b, c) ? a : Vc.h(a, c);
          };
        }(a, b), a, a);
      }
    }
  }
  var b = null, c = function() {
    function a(b, d, h) {
      var l = null;
      2 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      a = Gn(function(a) {
        return-P(a);
      }, Nc.k(e, d, N([a], 0)));
      return vd.j(b, I(a), J(a));
    }
    a.v = 2;
    a.m = function(a) {
      var b = I(a);
      a = L(a);
      var d = I(a);
      a = J(a);
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
        return c.k(b, e, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.v = 2;
  b.m = c.m;
  b.g = function(a) {
    return a;
  };
  b.h = a;
  b.k = c.k;
  return b;
}(), Jn = function() {
  function a(a, b) {
    return P(a) < P(b) ? vd.j(function(a, c) {
      return pd(b, c) ? Vc.h(a, c) : a;
    }, a, a) : vd.j(Vc, a, b);
  }
  var b = null, c = function() {
    function a(b, d, h) {
      var l = null;
      2 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      return vd.j(b, a, Nc.h(e, d));
    }
    a.v = 2;
    a.m = function(a) {
      var b = I(a);
      a = L(a);
      var d = I(a);
      a = J(a);
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
        return c.k(b, e, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.v = 2;
  b.m = c.m;
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
    var b, c = a.length, e = this, f = 0, g = e.D = e.Vc = 0, h = e.Ac = [];
    for (c || (a = [c++]);f < d;) {
      h[f] = f++;
    }
    for (f = 0;f < d;f++) {
      h[f] = h[g = t & g + a[f % c] + (b = h[f])], h[g] = b;
    }
    (e.Uc = function(a) {
      for (var b, c = 0, f = e.D, g = e.Vc, h = e.Ac;a--;) {
        b = h[f = t & f + 1], c = c * d + h[t & (h[f] = h[g = t & g + b]) + (h[g] = b)];
      }
      e.D = f;
      e.Vc = g;
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
      b[t & e] = t & (d ^= 19 * b[t & e]) + c.charCodeAt(e++);
    }
    return m(b);
  }
  function n() {
    var c;
    try {
      return a.crypto.getRandomValues(c = new Uint8Array(d)), m(c);
    } catch (e) {
      return[+new Date, a.document, a.history, a.navigator, a.screen, m(b)];
    }
  }
  function m(a) {
    return String.fromCharCode.apply(0, a);
  }
  var s = c.pow(d, e), w = c.pow(2, f), x = 2 * w, t = d - 1;
  c.seedrandom = function(a, f) {
    var t = [], M = l(h(f ? [a, m(b)] : 0 in arguments ? a : n(), 3), t), K = new g(t);
    l(m(K.Ac), b);
    c.random = function() {
      for (var a = K.Uc(e), b = s, c = 0;a < w;) {
        a = (a + c) * d, b *= d, c = K.Uc(1);
      }
      for (;a >= x;) {
        a /= 2, b /= 2, c >>>= 1;
      }
      return(a + c) / b;
    };
    return M;
  };
  l(c.random(), b);
})(this, [], Math, 256, 6, 52);
function Kn(a) {
  if (a ? a.Gc : a) {
    return a.Gc();
  }
  var b;
  b = Kn[p(null == a ? null : a)];
  if (!b && (b = Kn._, !b)) {
    throw v("IRandom.-next-double", a);
  }
  return b.call(null, a);
}
var Ln = function() {
  function a(a, b) {
    if (a ? a.Ic : a) {
      return a.Ic(0, b);
    }
    var c;
    c = Ln[p(null == a ? null : a)];
    if (!c && (c = Ln._, !c)) {
      throw v("IRandom.-next-int", a);
    }
    return c.call(null, a, b);
  }
  function b(a) {
    if (a ? a.Hc : a) {
      return a.Hc();
    }
    var b;
    b = Ln[p(null == a ? null : a)];
    if (!b && (b = Ln._, !b)) {
      throw v("IRandom.-next-int", a);
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
function Mn(a, b, c) {
  return b + (a.q ? a.q() : a.call(null)) * (c - b);
}
function Nn(a, b, c, d) {
  this.seed = a;
  this.Ga = b;
  this.G = c;
  this.C = d;
  this.p = 2229667594;
  this.F = 8192;
  2 < arguments.length ? (this.G = c, this.C = d) : this.C = this.G = null;
}
k = Nn.prototype;
k.P = function(a, b) {
  return Qa.j(this, b, null);
};
k.Q = function(a, b, c) {
  switch(b instanceof U ? b.ma : null) {
    case "random-double":
      return this.Ga;
    case "seed":
      return this.seed;
    default:
      return R.j(this.C, b, c);
  }
};
k.K = function(a, b, c) {
  return li(b, function() {
    return function(a) {
      return li(b, Fi, "", " ", "", c, a);
    };
  }(this), "#cemerick.pprng.SeededRandom{", ", ", "}", c, me.h(new W(null, 2, 5, X, [new W(null, 2, 5, X, [al, this.seed], null), new W(null, 2, 5, X, [sl, this.Ga], null)], null), this.C));
};
k.L = function() {
  return this.G;
};
k.T = function() {
  return 2 + P(this.C);
};
k.N = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Rd(this);
};
k.J = function(a, b) {
  return r(r(b) ? this.constructor === b.constructor && ig(this, b) : b) ? !0 : !1;
};
k.Ra = function(a, b) {
  return pd(new Bh(null, new q(null, 2, [al, null, sl, null], null), null), b) ? Rc.h(Fc(gf(mg, this), this.G), b) : new Nn(this.seed, this.Ga, this.G, Ge(Rc.h(this.C, b)), null);
};
k.va = function(a, b, c) {
  return r(V.h ? V.h(al, b) : V.call(null, al, b)) ? new Nn(c, this.Ga, this.G, this.C, null) : r(V.h ? V.h(sl, b) : V.call(null, sl, b)) ? new Nn(this.seed, c, this.G, this.C, null) : new Nn(this.seed, this.Ga, this.G, S.j(this.C, b, c), null);
};
k.O = function() {
  return F(me.h(new W(null, 2, 5, X, [new W(null, 2, 5, X, [al, this.seed], null), new W(null, 2, 5, X, [sl, this.Ga], null)], null), this.C));
};
k.M = function(a, b) {
  return new Nn(this.seed, this.Ga, b, this.C, this.A);
};
k.R = function(a, b) {
  return id(b) ? Sa(this, A.h(b, 0), A.h(b, 1)) : vd.j(Ja, this, b);
};
k.Gc = function() {
  return this.Ga.q ? this.Ga.q() : this.Ga.call(null);
};
k.Hc = function() {
  var a = Mn(this.Ga, -2147483648, 2147483647);
  return Ld(a);
};
k.Ic = function(a, b) {
  var c = Mn(this.Ga, 0, b);
  return Ld(c);
};
var On = function() {
  function a(a, b) {
    return Ln.h(a, b);
  }
  function b(a) {
    return Ln.g(a);
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
function Pn(a) {
  return Math.round.g ? Math.round.g(a) : Math.round.call(null, a);
}
function Qn(a) {
  return T.h(xd, a) / P(a);
}
var Rn = function() {
  function a(a) {
    Math.seedrandom.g ? Math.seedrandom.g(a) : Math.seedrandom.call(null, a);
    Math.seedrandom.g ? Math.seedrandom.g(a) : Math.seedrandom.call(null, a);
    return new Nn(a, Math.random);
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
}().q(), Sn = function() {
  function a(a, b) {
    if (!(a < b)) {
      throw Error("Assert failed: " + y.g(Hi.k(N([Xd(new pc(null, "\x3c", "\x3c", 993667236, null), new pc(null, "lower", "lower", -1534114948, null), new pc(null, "upper", "upper", 1886775433, null))], 0))));
    }
    return a + Kn(Rn) * (b - a);
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
function Tn(a) {
  return 0 + On.h(Rn, a - 0);
}
function Un(a) {
  a = Se.j(Xd, Xe.g(function() {
    return Kn(Rn);
  }), a);
  return Se.h(Hc, ud.h(I, a));
}
function Vn(a, b) {
  return vd.j(function(b, d) {
    return r(a.g ? a.g(d) : a.call(null, d)) ? b + 1 : b;
  }, 0, b);
}
function Wn(a, b) {
  return ze(vd.j(function(a, b) {
    var e = Q.j(b, 0, null), f = Q.j(b, 1, null);
    return Be.j(a, e, Nb(f));
  }, Lb(mg), ze(vd.j(function(b, d) {
    var e = Q.j(d, 0, null), f = Q.j(d, 1, null), g = a.h ? a.h(e, f) : a.call(null, e, f), h = R.j(b, g, Lb(mg));
    return Be.j(b, g, Be.j(h, e, f));
  }, Lb(mg), b))));
}
;var Xn = new q(null, 8, [km, 8, wk, 15, Zk, 12, mn, 8, Hl, .11, Pl, .5, Ek, .1, fj, .1], null);
function Yn(a, b) {
  return new q(null, 2, [Ll, new W(null, 2, 5, X, [b, a], null), Sk, hf], null);
}
function Zn(a, b) {
  var c = nd(b) ? T.h(th, b) : b, c = R.h(c, km);
  return S.j(a, $m, jf.j(Yn, Rh.g(c), We.g(Ll.g(a))));
}
function $n(a, b, c) {
  return Vn(function(a) {
    var e = Q.j(a, 0, null);
    return(a = Q.j(a, 1, null) >= c) ? b.g ? b.g(e) : b.call(null, e) : a;
  }, Vk.g(a));
}
function ao(a, b, c, d) {
  return Re(function(a, f) {
    var g = $n(f, b, d);
    return g >= c ? S.k(f, ml, g, N([vj, a], 0)) : null;
  }, Sk.g(a));
}
function bo(a, b, c) {
  return Qe(function(a) {
    var e;
    a: {
      e = Zk.g(c);
      for (var f = Pl.g(c), g = Sk.g(a);;) {
        var h = I(g);
        if (r(h)) {
          if ($n(h, b, f) >= e) {
            e = !0;
            break a;
          }
          g = L(g);
        } else {
          e = null;
          break a;
        }
      }
      e = void 0;
    }
    return r(e) ? Ll.g(a) : null;
  }, $m.g(a));
}
function co(a, b) {
  return gf(mg, Qe(function(c) {
    var d = bo(c, b, ql.g(a));
    return F(d) ? new W(null, 2, 5, X, [Ll.g(c), d], null) : null;
  }, Mj.g(a)));
}
function eo(a, b) {
  var c = vh(b), d = Mj.g(a);
  return vd.j(function(a, b) {
    return function(c, d) {
      var l = b.g ? b.g(d) : b.call(null, d), n = Ak.g(Xi.g(l));
      return vd.j(function() {
        return function(a, b) {
          return S.j(a, b, (a.h ? a.h(b, 0) : a.call(null, b, 0)) + 1);
        };
      }(l, n, a, b), c, vh(n));
    };
  }(c, d), mg, c);
}
function fo(a, b, c) {
  return gf(mg, Se.h(function(b) {
    var e = Q.h(Mj.g(a), b), f = c.g ? c.g(b) : c.call(null, b), g = null == f || xa(F(f)), e = g ? Se.h(Ll, $m.g(e)) : f;
    return new W(null, 2, 5, X, [b, new q(null, 2, [gm, e, Qk, g], null)], null);
  }, b));
}
function go(a, b) {
  var c = ao(a, b, 0, 0);
  return F(c) ? T.j(Kh, ml, c) : new q(null, 2, [vj, null, ml, 0], null);
}
function ho(a, b, c) {
  c = mn.g(c);
  var d = Se.h(function() {
    return function(a) {
      return S.j(go(a, b), jm, Ll.g(a));
    };
  }(c), a), d = T.j(Kh, ml, d);
  return ml.g(d) >= c ? d : new q(null, 1, [jm, Ll.g(T.j(Lh, Me.h(P, Sk), a))], null);
}
function io(a, b, c) {
  var d = Ek.g(c);
  c = fj.g(c);
  d = gf(mg, Se.h(function(a, c) {
    return function(d) {
      var h = Q.j(d, 0, null), l = Q.j(d, 1, null);
      return r(b.g ? b.g(h) : b.call(null, h)) ? new W(null, 2, 5, X, [h, function() {
        var b = l + a;
        return 1 < b ? 1 : b;
      }()], null) : new W(null, 2, 5, X, [h, function() {
        var a = l - c;
        return 0 > a ? 0 : a;
      }()], null);
    };
  }(d, c), Vk.g(a)));
  return S.j(a, Vk, d);
}
function jo(a, b, c) {
  c = fj.g(c);
  c = gf(mg, Se.h(function(a) {
    return function(c) {
      var f = Q.j(c, 0, null);
      c = Q.j(c, 1, null);
      r(b.g ? b.g(f) : b.call(null, f)) ? (c -= a, f = new W(null, 2, 5, X, [f, 0 > c ? 0 : c], null)) : f = new W(null, 2, 5, X, [f, c], null);
      return f;
    };
  }(c), Vk.g(a)));
  return S.j(a, Vk, c);
}
function ko(a, b, c, d, e) {
  return 0 < d ? (b = gf(Eh([b]), Se.h(I, vh(Vk.g(a)))), c = Ue(d, Un(df(function(a) {
    return function(b) {
      var c = Q.j(b, 0, null);
      Q.j(b, 1, null);
      return a.g ? a.g(c) : a.call(null, c);
    };
  }(b), c))), e = Se.j(Wf, c, We.g(Hl.g(e))), Df.o(a, new W(null, 1, 5, X, [Vk], null), gf, e)) : a;
}
function lo(a, b, c) {
  var d = Ll.g(a), e = Q.j(d, 0, null);
  Q.j(d, 1, null);
  d = wk.g(c);
  b = ko(new q(null, 1, [Vk, mg], null), e, b, d, c);
  return Df.o(a, new W(null, 1, 5, X, [Sk], null), Nc, b);
}
function mo(a, b, c) {
  var d = Zk.g(c), e = Pl.g(c), f = ao(a, b, d, e);
  return vd.j(function() {
    return function(a, d) {
      var e = vj.g(d);
      return Df.I(a, new W(null, 2, 5, X, [Sk, e], null), jo, b, c);
    };
  }(d, e, f), a, f);
}
function no(a, b, c, d) {
  b = Jn.h(d, b);
  d = ql.g(a);
  return vd.j(function(a, b) {
    return function(a, d) {
      var e = Q.j(d, 0, null), n = Q.j(d, 1, null);
      return Df.I(a, new W(null, 4, 5, X, [Mj, e, $m, n], null), mo, c, b);
    };
  }(b, d), a, b);
}
function oo(a, b, c, d, e, f) {
  b = r(b) ? $m.g(a) : Se.h(function(b) {
    Q.j(b, 0, null);
    b = Q.j(b, 1, null);
    return Q.h($m.g(a), b);
  }, c);
  d = ho(b, d, f);
  return r(vj.g(d)) ? d : ho(b, e, f);
}
function po(a, b, c, d, e, f) {
  var g = Ll.g(a), h = Q.j(g, 0, null), l = Q.j(g, 1, null);
  return r(b) ? Df.j(a, new W(null, 2, 5, X, [Sk, b], null), function(a, b) {
    return function(a) {
      var g = Vk.g(a), h = df(Me.h(Od, Td), g);
      a = P(h) < P(g) ? S.j(a, Vk, gf(mg, h)) : a;
      a = io(a, e, f);
      r(c) && (g = $n(a, e, 0), g = wk.g(f) - g, a = ko(a, b, d, g, f));
      return a;
    };
  }(g, h, l)) : lo(a, d, f);
}
function qo(a, b, c, d, e, f) {
  var g = Wk.h(a, Dh), h = ql.g(a);
  a = S.j(a, Wk, Dh);
  return no(wd(function(a, b) {
    return function(c, f, g) {
      var h = Af.h(c, new W(null, 2, 5, X, [Mj, f], null)), t = d.g ? d.g(f) : d.call(null, f);
      g = oo(h, t, gm.g(g), a, e, b);
      h = jm.g(g);
      Q.j(h, 0, null);
      var h = Q.j(h, 1, null), z = vj.g(g);
      return Df.o(Df.k(c, new W(null, 4, 5, X, [Mj, f, $m, h], null), po, z, t, a, N([e, b], 0)), new W(null, 1, 5, X, [Wk], null), Nc, jm.g(g));
    };
  }(g, h, a), a, b), c, e, f);
}
function ro(a, b, c) {
  var d = Bl.h(a, Dh), e = Nl.h(a, Dh), f = Ul.h(a, mg);
  b = fo(a, b, f);
  var g = Hh(af.h(gm, xh(b))), h = Hh(Qe(function() {
    return function(a) {
      var b = Q.j(a, 0, null);
      a = Q.j(a, 1, null);
      return r(Qk.g(a)) ? b : null;
    };
  }(d, e, f, b, g), b)), l = co(a, g), n = Hh(af.h(Td, l));
  a = S.k(a, Bl, g, N([gn, h, Nl, n, Ul, l, Gj, f], 0));
  return r(c) ? qo(a, b, g, h, d, e) : a;
}
;function so(a) {
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
;var to, uo, vo, wo;
function xo() {
  return aa.navigator ? aa.navigator.userAgent : null;
}
wo = vo = uo = to = !1;
var yo;
if (yo = xo()) {
  var zo = aa.navigator;
  to = 0 == yo.lastIndexOf("Opera", 0);
  uo = !to && (-1 != yo.indexOf("MSIE") || -1 != yo.indexOf("Trident"));
  vo = !to && -1 != yo.indexOf("WebKit");
  wo = !to && !vo && !uo && "Gecko" == zo.product;
}
var Ao = to, Bo = uo, Co = wo, Do = vo;
function Eo() {
  var a = aa.document;
  return a ? a.documentMode : void 0;
}
var Fo;
a: {
  var Go = "", Ho;
  if (Ao && aa.opera) {
    var Io = aa.opera.version, Go = "function" == typeof Io ? Io() : Io
  } else {
    if (Co ? Ho = /rv\:([^\);]+)(\)|;)/ : Bo ? Ho = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : Do && (Ho = /WebKit\/(\S+)/), Ho) {
      var Jo = Ho.exec(xo()), Go = Jo ? Jo[1] : ""
    }
  }
  if (Bo) {
    var Ko = Eo();
    if (Ko > parseFloat(Go)) {
      Fo = String(Ko);
      break a;
    }
  }
  Fo = Go;
}
var Lo = {};
function Mo(a) {
  var b;
  if (!(b = Lo[a])) {
    b = 0;
    for (var c = String(Fo).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), f = 0;0 == b && f < e;f++) {
      var g = c[f] || "", h = d[f] || "", l = RegExp("(\\d*)(\\D*)", "g"), n = RegExp("(\\d*)(\\D*)", "g");
      do {
        var m = l.exec(g) || ["", "", ""], s = n.exec(h) || ["", "", ""];
        if (0 == m[0].length && 0 == s[0].length) {
          break;
        }
        b = ha(0 == m[1].length ? 0 : parseInt(m[1], 10), 0 == s[1].length ? 0 : parseInt(s[1], 10)) || ha(0 == m[2].length, 0 == s[2].length) || ha(m[2], s[2]);
      } while (0 == b);
    }
    b = Lo[a] = 0 <= b;
  }
  return b;
}
var No = aa.document, Oo = No && Bo ? Eo() || ("CSS1Compat" == No.compatMode ? parseInt(Fo, 10) : 5) : void 0;
!Co && !Bo || Bo && Bo && 9 <= Oo || Co && Mo("1.9.1");
Bo && Mo("9");
var Po, Qo, Ro, So, To, Uo, Vo, Wo, Xo, Yo, Zo, $o, ap, bp, cp, dp, ep = {}.hasOwnProperty;
Wo = function(a) {
  console.log(a);
};
Zo = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
Yo = /^(svg|g|rect|circle|clipPath|path|line|polygon|polyline|text|textPath)$/;
$o = /^\s+$/;
Xo = /:(.+)/;
dp = {Hd:"http://www.w3.org/1999/xhtml", Sd:"http://www.w3.org/1999/xlink", Fd:"http://www.w3.org/2000/svg", xml:"http://www.w3.org/XML/1998/namespace", Td:"http://www.w3.org/2000/xmlns"};
Uo = function(a) {
  var b, c;
  c = a.split(":");
  b = c[0];
  c = c[1];
  return null != c ? [dp[b] || b, c] : a.match(Yo) ? [dp.Fd, a] : [dp.Hd, a];
};
Ro = function(a) {
  return ":*:" === a[0];
};
bp = function(a) {
  return null != a && a instanceof fp;
};
So = function(a) {
  return null != a && !1;
};
Po = function(a) {
  return null != a && null != a.forEach;
};
To = function(a) {
  return null != a && !Po(a) && !bp(a) && !So(a) && a instanceof Object;
};
Qo = function(a) {
  return null != a && null != a.nodeType;
};
ap = function(a) {
  return null != a && null != a.substring;
};
Vo = function(a) {
  return null != a && null != a.toFixed;
};
cp = function(a) {
  return 8 === a.nodeType || 3 === a.nodeType && a.textContent.match($o);
};
function gp(a, b) {
  var c, d, e, f, g;
  if (null != b.style) {
    f = b.style;
    var h;
    h = [];
    for (g in f) {
      ep.call(f, g) && (c = f[g], h.push(a.style[ia(g)] = c));
    }
    delete b.style;
  }
  if (null != b.properties) {
    f = b.properties;
    c = [];
    for (e in f) {
      ep.call(f, e) && (g = f[e], c.push(a[e] = g));
    }
    delete b.properties;
  }
  Po(b["class"]) && (a.setAttribute("class", b["class"].join(" ")), delete b["class"]);
  g = [];
  for (d in b) {
    ep.call(b, d) && (f = b[d], null != f ? (c = d.split(Xo), e = c[0], c = c[1], null != c ? g.push(a.setAttributeNS(dp[e] || e, c, f)) : g.push(a.setAttribute(d, f))) : g.push(a.removeAttribute(d)));
  }
}
function hp(a, b) {
  return null != b ? a.__singult_data__ = b : a.__singult_data__;
}
function ip(a) {
  return Vo(a) ? a.toString() : Po(a) ? jp(a) : a;
}
function jp(a) {
  var b, c, d, e, f;
  f = a[0];
  d = To(a[1]) ? [a[1], a.slice(2)] : [{}, a.slice(1)];
  a = d[0];
  d = d[1];
  e = f.match(Zo);
  f = e[1];
  b = e[2];
  e = e[3];
  null != b && (a.id = b);
  null != e && (b = e.split("."), Po(a["class"]) ? a["class"] = a["class"].concat(b) : ap(a["class"]) ? a["class"] = b.concat([a["class"]]) : null == a["class"] && (a["class"] = b));
  f = Uo(f);
  b = f[0];
  f = f[1];
  c = [];
  d.forEach(function(a) {
    if (null != a) {
      return Ro(a) ? a.slice(1).forEach(function(a) {
        return c.push(ip(a));
      }) : c.push(ip(a));
    }
  });
  return{Bd:b, tag:f, Dc:a, children:c};
}
function kp(a) {
  var b, c;
  if (bp(a)) {
    throw Error("Unify must be the first and only child of its parent.");
  }
  if (So(a)) {
    return null;
  }
  if (ap(a)) {
    return document.createTextNode(a);
  }
  if (Qo(a)) {
    return a;
  }
  b = document.createElementNS(a.Bd, a.tag);
  gp(b, a.Dc);
  bp(c = a.children[0]) ? null != c.la ? c.data.forEach(function(a) {
    var e;
    e = c.la(a);
    hp(e, a);
    return b.appendChild(e);
  }) : c.data.forEach(function(a) {
    var e;
    e = kp(ip(c.na(a)));
    hp(e, a);
    return b.appendChild(e);
  }) : a.children.forEach(function(a) {
    a = kp(a);
    if (null != a) {
      return b.appendChild(a);
    }
  });
  return b;
}
function fp(a, b, c, d, e, f, g) {
  this.data = a;
  this.na = b;
  this.ua = c;
  this.la = d;
  this.update = e;
  this.ta = f;
  this.td = g;
  return this;
}
function lp(a, b) {
  var c, d, e, f, g, h, l, n, m, s, w, x, t;
  g = b.la || function(c) {
    c = kp(ip(b.na(c)));
    a.appendChild(c);
    return c;
  };
  t = b.update || function(a, c) {
    return mp(a, ip(b.na(c)));
  };
  h = b.ta || function(b) {
    return a.removeChild(b);
  };
  m = b.ua || function(a, b) {
    return b;
  };
  c = a.childNodes;
  f = function(a, b) {
    return "\x00" + m(a, b);
  };
  w = function(a, b) {
    return f(hp(a), b);
  };
  s = function(a, c) {
    var d;
    if (b.td) {
      return d = t(a, c), hp(d, c);
    }
    d = hp(a);
    if (null != d.J ? !d.J(d, c) : d !== c) {
      return d = t(a, c), hp(d, c);
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
  x = {};
  for (d = 0;d < c.length;) {
    n = w(c[d], d), e[n] && (x[n] = c[d]), d += 1;
  }
  b.data.forEach(function(a, b) {
    var d, e, m;
    m = (d = b < c.length ? c[b] : void 0) ? w(d, b) : void 0;
    e = f(a, b);
    if (null == d) {
      return d = g(a), hp(d, a);
    }
    if (m === e) {
      return s(c[b], a);
    }
    x[m] || h(d);
    if (x[e]) {
      return d = x[e], l(d, b), s(d, a);
    }
    d = g(a);
    l(d, b);
    return hp(d, a);
  });
  for (d = b.data.length;d < c.length;) {
    h(c[d]);
  }
}
function mp(a, b) {
  var c, d, e, f;
  if (bp(b)) {
    lp(a, b);
  } else {
    if (!So(b)) {
      if (a.nodeName.toLowerCase() !== b.tag.toLowerCase()) {
        throw Wo(a), Wo(b), Error("Cannot merge $e into node of different type");
      }
      gp(a, b.Dc);
      if (a.hasChildNodes()) {
        for (e = d = f = a.childNodes.length - 1;0 >= f ? 0 >= d : 0 <= d;e = 0 >= f ? ++d : --d) {
          c = a.childNodes[e], cp(c) && a.removeChild(c);
        }
      }
      if (bp(b.children[0])) {
        mp(a, b.children[0]);
      } else {
        if (a.childNodes.length > b.children.length) {
          for (e = c = d = a.childNodes.length - 1;0 >= d ? 0 >= c : 0 <= c;e = 0 >= d ? ++c : --c) {
            a.removeChild(a.childNodes[e]);
          }
        }
        for (e = 0;e < b.children.length;) {
          d = b.children[e] || "";
          c = a.childNodes[e];
          if (ap(d)) {
            null != c ? c.textContent = d : a.appendChild(document.createTextNode(d));
          } else {
            if (!So(d)) {
              if (To(d)) {
                null != c ? mp(c, d) : a.appendChild(kp(d));
              } else {
                throw Wo(c), Wo(d), Error("Cannot merge children");
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
;function np(a, b, c, d, e, f, g, h, l) {
  this.data = a;
  this.na = b;
  this.ua = c;
  this.la = d;
  this.update = e;
  this.ta = f;
  this.Ba = g;
  this.G = h;
  this.C = l;
  this.p = 2229667594;
  this.F = 8192;
  7 < arguments.length ? (this.G = h, this.C = l) : this.C = this.G = null;
}
k = np.prototype;
k.P = function(a, b) {
  return Qa.j(this, b, null);
};
k.Q = function(a, b, c) {
  switch(b instanceof U ? b.ma : null) {
    case "force-update?":
      return this.Ba;
    case "exit":
      return this.ta;
    case "update":
      return this.update;
    case "enter":
      return this.la;
    case "key-fn":
      return this.ua;
    case "mapping":
      return this.na;
    case "data":
      return this.data;
    default:
      return R.j(this.C, b, c);
  }
};
k.K = function(a, b, c) {
  return li(b, function() {
    return function(a) {
      return li(b, Fi, "", " ", "", c, a);
    };
  }(this), "#singult.core.Unify{", ", ", "}", c, me.h(new W(null, 7, 5, X, [new W(null, 2, 5, X, [Fn, this.data], null), new W(null, 2, 5, X, [rk, this.na], null), new W(null, 2, 5, X, [pl, this.ua], null), new W(null, 2, 5, X, [el, this.la], null), new W(null, 2, 5, X, [Kk, this.update], null), new W(null, 2, 5, X, [Aj, this.ta], null), new W(null, 2, 5, X, [kn, this.Ba], null)], null), this.C));
};
k.L = function() {
  return this.G;
};
k.T = function() {
  return 7 + P(this.C);
};
k.N = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Rd(this);
};
k.J = function(a, b) {
  return r(r(b) ? this.constructor === b.constructor && ig(this, b) : b) ? !0 : !1;
};
k.Ra = function(a, b) {
  return pd(new Bh(null, new q(null, 7, [Aj, null, rk, null, Kk, null, el, null, pl, null, kn, null, Fn, null], null), null), b) ? Rc.h(Fc(gf(mg, this), this.G), b) : new np(this.data, this.na, this.ua, this.la, this.update, this.ta, this.Ba, this.G, Ge(Rc.h(this.C, b)), null);
};
k.va = function(a, b, c) {
  return r(V.h ? V.h(Fn, b) : V.call(null, Fn, b)) ? new np(c, this.na, this.ua, this.la, this.update, this.ta, this.Ba, this.G, this.C, null) : r(V.h ? V.h(rk, b) : V.call(null, rk, b)) ? new np(this.data, c, this.ua, this.la, this.update, this.ta, this.Ba, this.G, this.C, null) : r(V.h ? V.h(pl, b) : V.call(null, pl, b)) ? new np(this.data, this.na, c, this.la, this.update, this.ta, this.Ba, this.G, this.C, null) : r(V.h ? V.h(el, b) : V.call(null, el, b)) ? new np(this.data, this.na, this.ua, 
  c, this.update, this.ta, this.Ba, this.G, this.C, null) : r(V.h ? V.h(Kk, b) : V.call(null, Kk, b)) ? new np(this.data, this.na, this.ua, this.la, c, this.ta, this.Ba, this.G, this.C, null) : r(V.h ? V.h(Aj, b) : V.call(null, Aj, b)) ? new np(this.data, this.na, this.ua, this.la, this.update, c, this.Ba, this.G, this.C, null) : r(V.h ? V.h(kn, b) : V.call(null, kn, b)) ? new np(this.data, this.na, this.ua, this.la, this.update, this.ta, c, this.G, this.C, null) : new np(this.data, this.na, this.ua, 
  this.la, this.update, this.ta, this.Ba, this.G, S.j(this.C, b, c), null);
};
k.O = function() {
  return F(me.h(new W(null, 7, 5, X, [new W(null, 2, 5, X, [Fn, this.data], null), new W(null, 2, 5, X, [rk, this.na], null), new W(null, 2, 5, X, [pl, this.ua], null), new W(null, 2, 5, X, [el, this.la], null), new W(null, 2, 5, X, [Kk, this.update], null), new W(null, 2, 5, X, [Aj, this.ta], null), new W(null, 2, 5, X, [kn, this.Ba], null)], null), this.C));
};
k.M = function(a, b) {
  return new np(this.data, this.na, this.ua, this.la, this.update, this.ta, this.Ba, b, this.C, this.A);
};
k.R = function(a, b) {
  return id(b) ? Sa(this, A.h(b, 0), A.h(b, 1)) : vd.j(Ja, this, b);
};
var pp = function op(b) {
  if (b instanceof np) {
    var c = nd(b) ? T.h(th, b) : b, d = R.h(c, kn), e = R.h(c, Aj), f = R.h(c, Kk), g = R.h(c, el), h = R.h(c, pl), l = R.h(c, rk), n = R.h(c, Fn), m = function() {
      for (var b = [], c = F(n), d = null, e = 0, f = 0;;) {
        if (f < e) {
          var g = d.H(null, f);
          b.push(g);
          f += 1;
        } else {
          if (c = F(c)) {
            d = c, jd(d) ? (c = C(d), f = E(d), d = c, e = P(c), c = f) : (c = I(d), b.push(c), c = L(d), d = null, e = 0), f = 0;
          } else {
            break;
          }
        }
      }
      return b;
    }();
    return new fp(m, function(b, c, d, e, f, g, h, l) {
      return function(b) {
        return op(l.g ? l.g(b) : l.call(null, b));
      };
    }(b, c, d, e, f, g, h, l, n, m), h, g, f, e, d);
  }
  if (b instanceof U) {
    return Zd(b);
  }
  if (ed(b)) {
    c = {};
    b = F(b);
    d = null;
    for (f = e = 0;;) {
      if (f < e) {
        h = d.H(null, f);
        g = Q.j(h, 0, null);
        h = Q.j(h, 1, null);
        g = op(g);
        if ("string" !== typeof g) {
          throw "Cannot convert; JavaScript map keys must be strings";
        }
        c[g] = op(h);
        f += 1;
      } else {
        if (b = F(b)) {
          if (jd(b)) {
            e = C(b), b = E(b), d = e, e = P(e);
          } else {
            e = I(b);
            d = Q.j(e, 0, null);
            e = Q.j(e, 1, null);
            d = op(d);
            if ("string" !== typeof d) {
              throw "Cannot convert; JavaScript map keys must be strings";
            }
            c[d] = op(e);
            b = L(b);
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
  if (nd(b)) {
    c = [];
    c.push(":*:");
    b = F(b);
    d = null;
    for (f = e = 0;;) {
      if (f < e) {
        g = d.H(null, f), c.push(op(g)), f += 1;
      } else {
        if (b = F(b)) {
          d = b, jd(d) ? (b = C(d), f = E(d), d = b, e = P(b), b = f) : (b = I(d), c.push(op(b)), b = L(d), d = null, e = 0), f = 0;
        } else {
          break;
        }
      }
    }
    return c;
  }
  if (Wc(b)) {
    c = [];
    b = F(b);
    d = null;
    for (f = e = 0;;) {
      if (f < e) {
        g = d.H(null, f), c.push(op(g)), f += 1;
      } else {
        if (b = F(b)) {
          d = b, jd(d) ? (b = C(d), f = E(d), d = b, e = P(b), b = f) : (b = I(d), c.push(op(b)), b = L(d), d = null, e = 0), f = 0;
        } else {
          break;
        }
      }
    }
    return c;
  }
  return u ? b : null;
};
function qp(a, b) {
  return null == b ? null : mp.h ? mp.h(a, ip.g ? ip.g(pp(b)) : ip.call(null, pp(b))) : mp.call(null, a, ip.g ? ip.g(pp(b)) : ip.call(null, pp(b)));
}
var rp = function() {
  function a(a, d, e) {
    var f = null;
    2 < arguments.length && (f = N(Array.prototype.slice.call(arguments, 2), 0));
    return b.call(this, a, d, f);
  }
  function b(a, b, e) {
    var f = nd(e) ? T.h(th, e) : e;
    e = R.h(f, kn);
    var g = R.h(f, Aj), h = R.h(f, Kk), l = R.h(f, el), f = R.h(f, pl);
    return new np(a, b, f, l, h, g, e);
  }
  a.v = 2;
  a.m = function(a) {
    var d = I(a);
    a = L(a);
    var e = I(a);
    a = J(a);
    return b(d, e, a);
  };
  a.k = b;
  return a;
}();
r("undefined" != typeof NodeList) && (NodeList.prototype.Mc = !0, NodeList.prototype.O = function() {
  return N.h(this, 0);
});
HTMLCollection.prototype.Mc = !0;
HTMLCollection.prototype.O = function() {
  return N.h(this, 0);
};
function sp(a) {
  if (a ? a.hc : a) {
    return a.hc(a);
  }
  var b;
  b = sp[p(null == a ? null : a)];
  if (!b && (b = sp._, !b)) {
    throw v("IDom.-\x3edom", a);
  }
  return b.call(null, a);
}
W.prototype.hc = function() {
  return kp.g ? kp.g(ip.g ? ip.g(pp(this)) : ip.call(null, pp(this))) : kp.call(null, ip.g ? ip.g(pp(this)) : ip.call(null, pp(this)));
};
sp.string = function(a) {
  return tp.g ? tp.g(a) : tp.call(null, a);
};
r("undefined" != typeof Node) && (Node.prototype.hc = function() {
  return this;
});
var tp = function() {
  function a(a, b) {
    return sp(b).querySelector(a);
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
}(), up = function() {
  function a(a, b) {
    var c = sp(a), g = c.type;
    if (void 0 !== g) {
      switch(g.toLowerCase()) {
        case "checkbox":
        ;
        case "radio":
          c.checked = b ? "checked" : null;
          break;
        case "select-one":
          c.selectedIndex = -1;
          if (ba(b)) {
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
          ba(g) && (g = [g]);
          for (var l = 0;h = c.options[l];l++) {
            if (h.selected = !1, g) {
              for (var n, m = 0;n = g[m];m++) {
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
    return so(sp(a));
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
}(), vp = function() {
  var a = window.requestAnimationFrame;
  if (r(a)) {
    return a;
  }
  var b = window.webkitRequestAnimationFrame;
  return r(b) ? b : function(a, b) {
    return function(e) {
      return setTimeout(function() {
        return function() {
          return e.q ? e.q() : e.call(null);
        };
      }(a, b), 10);
    };
  }(b, a);
}();
var wp;
function xp(a) {
  var b = wp;
  try {
    wp = Mi.k(Dh, N([ua, new q(null, 1, [Wi, !0], null)], 0));
    var c = a.q ? a.q() : a.call(null);
    nd(c) && Wh.g(c);
    return new q(null, 2, [zm, c, Fj, B(wp)], null);
  } finally {
    wp = b;
  }
}
function yp(a) {
  r(function() {
    var b = wp;
    return r(b) ? xa(Wi.g(Uc(a))) : b;
  }()) && Oi.h(wp, function(b) {
    return Nc.h(b, a);
  });
}
Ki.prototype.Hb = function() {
  yp(this);
  return this.state;
};
function zp(a, b, c, d, e, f, g, h) {
  this.state = a;
  this.qa = b;
  this.f = c;
  this.key = d;
  this.ya = e;
  this.ca = f;
  this.G = g;
  this.C = h;
  this.p = 2229700362;
  this.F = 8194;
  6 < arguments.length ? (this.G = g, this.C = h) : this.C = this.G = null;
}
k = zp.prototype;
k.P = function(a, b) {
  return Qa.j(this, b, null);
};
k.Q = function(a, b, c) {
  switch(b instanceof U ? b.ma : null) {
    case "watches":
      return this.ca;
    case "parent-watchables":
      return this.ya;
    case "key":
      return this.key;
    case "f":
      return this.f;
    case "dirty?":
      return this.qa;
    case "state":
      return this.state;
    default:
      return R.j(this.C, b, c);
  }
};
k.K = function(a, b, c) {
  return li(b, function() {
    return function(a) {
      return li(b, Fi, "", " ", "", c, a);
    };
  }(this), "#reflex.core.ComputedObservable{", ", ", "}", c, me.h(new W(null, 6, 5, X, [new W(null, 2, 5, X, [Mk, this.state], null), new W(null, 2, 5, X, [tk, this.qa], null), new W(null, 2, 5, X, [hm, this.f], null), new W(null, 2, 5, X, [wj, this.key], null), new W(null, 2, 5, X, [Sj, this.ya], null), new W(null, 2, 5, X, [$i, this.ca], null)], null), this.C));
};
k.L = function() {
  return this.G;
};
k.T = function() {
  return 6 + P(this.C);
};
k.N = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Rd(this);
};
k.J = function(a, b) {
  return r(r(b) ? this.constructor === b.constructor && ig(this, b) : b) ? !0 : !1;
};
k.Ra = function(a, b) {
  return pd(new Bh(null, new q(null, 6, [$i, null, wj, null, Sj, null, tk, null, Mk, null, hm, null], null), null), b) ? Rc.h(Fc(gf(mg, this), this.G), b) : new zp(this.state, this.qa, this.f, this.key, this.ya, this.ca, this.G, Ge(Rc.h(this.C, b)), null);
};
k.va = function(a, b, c) {
  return r(V.h ? V.h(Mk, b) : V.call(null, Mk, b)) ? new zp(c, this.qa, this.f, this.key, this.ya, this.ca, this.G, this.C, null) : r(V.h ? V.h(tk, b) : V.call(null, tk, b)) ? new zp(this.state, c, this.f, this.key, this.ya, this.ca, this.G, this.C, null) : r(V.h ? V.h(hm, b) : V.call(null, hm, b)) ? new zp(this.state, this.qa, c, this.key, this.ya, this.ca, this.G, this.C, null) : r(V.h ? V.h(wj, b) : V.call(null, wj, b)) ? new zp(this.state, this.qa, this.f, c, this.ya, this.ca, this.G, this.C, 
  null) : r(V.h ? V.h(Sj, b) : V.call(null, Sj, b)) ? new zp(this.state, this.qa, this.f, this.key, c, this.ca, this.G, this.C, null) : r(V.h ? V.h($i, b) : V.call(null, $i, b)) ? new zp(this.state, this.qa, this.f, this.key, this.ya, c, this.G, this.C, null) : new zp(this.state, this.qa, this.f, this.key, this.ya, this.ca, this.G, S.j(this.C, b, c), null);
};
k.O = function() {
  return F(me.h(new W(null, 6, 5, X, [new W(null, 2, 5, X, [Mk, this.state], null), new W(null, 2, 5, X, [tk, this.qa], null), new W(null, 2, 5, X, [hm, this.f], null), new W(null, 2, 5, X, [wj, this.key], null), new W(null, 2, 5, X, [Sj, this.ya], null), new W(null, 2, 5, X, [$i, this.ca], null)], null), this.C));
};
k.tc = function() {
  for (var a = F(this.ca), b = null, c = 0, d = 0;;) {
    if (d < c) {
      var e = b.H(null, d);
      Q.j(e, 0, null);
      e = Q.j(e, 1, null);
      e.q ? e.q() : e.call(null);
      d += 1;
    } else {
      if (a = F(a)) {
        jd(a) ? (c = C(a), a = E(a), b = c, c = P(c)) : (b = I(a), Q.j(b, 0, null), e = Q.j(b, 1, null), e.q ? e.q() : e.call(null), a = L(a), b = null, c = 0), d = 0;
      } else {
        return null;
      }
    }
  }
};
k.sc = function(a, b, c) {
  return this.ca = S.j(this.ca, b, c);
};
k.uc = function(a, b) {
  return this.ca = Rc.h(this.ca, b);
};
k.M = function(a, b) {
  return new zp(this.state, this.qa, this.f, this.key, this.ya, this.ca, b, this.C, this.A);
};
k.R = function(a, b) {
  return id(b) ? Sa(this, A.h(b, 0), A.h(b, 1)) : vd.j(Ja, this, b);
};
k.Hb = function() {
  yp(this);
  if (xa(this.qa)) {
    return this.state;
  }
  for (var a = xp(this.f), b = nd(a) ? T.h(th, a) : a, c = R.h(b, Fj), d = R.h(b, zm), e = F(this.ya), f = null, g = 0, h = 0;;) {
    if (h < g) {
      var l = f.H(null, h);
      Kb(l, this.key);
      h += 1;
    } else {
      if (e = F(e)) {
        f = e, jd(f) ? (e = C(f), h = E(f), f = e, g = P(e), e = h) : (e = I(f), Kb(e, this.key), e = L(f), f = null, g = 0), h = 0;
      } else {
        break;
      }
    }
  }
  this.ya = c;
  e = F(c);
  f = null;
  for (h = g = 0;;) {
    if (h < g) {
      l = f.H(null, h), Pi(l, this.key, function(a, b, c, d, e, f, g, h, l, m) {
        return function() {
          m.qa = !0;
          return Fb(m, null, null);
        };
      }(e, f, g, h, l, a, b, c, d, this)), h += 1;
    } else {
      var n = F(e);
      if (n) {
        l = n;
        if (jd(l)) {
          e = C(l), h = E(l), f = e, g = P(e), e = h;
        } else {
          var m = I(l);
          Pi(m, this.key, function(a, b, c, d, e, f, g, h, l, m, n, ga) {
            return function() {
              ga.qa = !0;
              return Fb(ga, null, null);
            };
          }(e, f, g, h, m, l, n, a, b, c, d, this));
          e = L(l);
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
  this.qa = !1;
  return d;
};
k.fd = !0;
k.N = function() {
  return this.key;
};
var Ap = function() {
  function a(a, d, e) {
    var f = null;
    2 < arguments.length && (f = N(Array.prototype.slice.call(arguments, 2), 0));
    return b.call(this, a, d, f);
  }
  function b(a, b, e) {
    F(a) && (b.g ? b.g(I(a)) : b.call(null, I(a)));
    return T.o(rp, a, b, e);
  }
  a.v = 2;
  a.m = function(a) {
    var d = I(a);
    a = L(a);
    var e = I(a);
    a = J(a);
    return b(d, e, a);
  };
  a.k = b;
  return a;
}();
function Bp(a) {
  if (a ? a.Rc : a) {
    return a.Rc();
  }
  var b;
  b = Bp[p(null == a ? null : a)];
  if (!b && (b = Bp._, !b)) {
    throw v("PushbackReader.read-char", a);
  }
  return b.call(null, a);
}
function Cp(a, b) {
  if (a ? a.Sc : a) {
    return a.Sc(0, b);
  }
  var c;
  c = Cp[p(null == a ? null : a)];
  if (!c && (c = Cp._, !c)) {
    throw v("PushbackReader.unread", a);
  }
  return c.call(null, a, b);
}
function Dp(a, b, c) {
  this.Y = a;
  this.buffer = b;
  this.zc = c;
}
Dp.prototype.Rc = function() {
  return 0 === this.buffer.length ? (this.zc += 1, this.Y[this.zc]) : this.buffer.pop();
};
Dp.prototype.Sc = function(a, b) {
  return this.buffer.push(b);
};
function Ep(a) {
  var b = !/[^\t\n\r ]/.test(a);
  return r(b) ? b : "," === a;
}
var Fp = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = N(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, 0, e);
  }
  function b(a, b) {
    throw Error(T.h(y, b));
  }
  a.v = 1;
  a.m = function(a) {
    I(a);
    a = J(a);
    return b(0, a);
  };
  a.k = b;
  return a;
}();
function Gp(a, b) {
  for (var c = new ka(b), d = Bp(a);;) {
    var e;
    if (!(e = null == d || Ep(d))) {
      e = d;
      var f = "#" !== e;
      e = f ? (f = "'" !== e) ? (f = ":" !== e) ? Hp.g ? Hp.g(e) : Hp.call(null, e) : f : f : f;
    }
    if (e) {
      return Cp(a, d), c.toString();
    }
    c.append(d);
    d = Bp(a);
  }
}
function Ip(a) {
  for (;;) {
    var b = Bp(a);
    if ("\n" === b || "\r" === b || null == b) {
      return a;
    }
  }
}
var Jp = Yh("^([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+))(N)?$"), dq = Yh("^([-+]?[0-9]+)/([0-9]+)$"), eq = Yh("^([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?$"), fq = Yh("^[:]?([^0-9/].*/)?([^0-9/][^/]*)$");
function gq(a, b) {
  var c = a.exec(b);
  return null != c && c[0] === b ? 1 === c.length ? c[0] : c : null;
}
var hq = Yh("^[0-9A-Fa-f]{2}$"), iq = Yh("^[0-9A-Fa-f]{4}$");
function jq(a, b, c, d) {
  return r(Xh(a, d)) ? d : Fp.k(b, N(["Unexpected unicode escape \\", c, d], 0));
}
function kq(a) {
  return String.fromCharCode(parseInt(a, 16));
}
function lq(a) {
  var b = Bp(a), c = "t" === b ? "\t" : "r" === b ? "\r" : "n" === b ? "\n" : "\\" === b ? "\\" : '"' === b ? '"' : "b" === b ? "\b" : "f" === b ? "\f" : null;
  r(c) ? a = c : "x" === b ? (c = (new ka(Bp(a), Bp(a))).toString(), a = kq(jq(hq, a, b, c))) : "u" === b ? (c = (new ka(Bp(a), Bp(a), Bp(a), Bp(a))).toString(), a = kq(jq(iq, a, b, c))) : a = /[^0-9]/.test(b) ? u ? Fp.k(a, N(["Unexpected unicode escape \\", b], 0)) : null : String.fromCharCode(b);
  return a;
}
function mq(a, b) {
  for (var c = Lb(hf);;) {
    var d;
    a: {
      d = Ep;
      for (var e = b, f = Bp(e);;) {
        if (r(d.g ? d.g(f) : d.call(null, f))) {
          f = Bp(e);
        } else {
          d = f;
          break a;
        }
      }
      d = void 0;
    }
    r(d) || Fp.k(b, N(["EOF while reading"], 0));
    if (a === d) {
      return Nb(c);
    }
    e = Hp.g ? Hp.g(d) : Hp.call(null, d);
    r(e) ? d = e.h ? e.h(b, d) : e.call(null, b, d) : (Cp(b, d), d = nq.o ? nq.o(b, !0, null, !0) : nq.call(null, b, !0, null));
    c = d === b ? c : Ae.h(c, d);
  }
}
function oq(a, b) {
  return Fp.k(a, N(["Reader for ", b, " not implemented yet"], 0));
}
function pq(a, b) {
  var c = Bp(a), d = qq.g ? qq.g(c) : qq.call(null, c);
  if (r(d)) {
    return d.h ? d.h(a, b) : d.call(null, a, b);
  }
  d = rq.h ? rq.h(a, c) : rq.call(null, a, c);
  return r(d) ? d : Fp.k(a, N(["No dispatch macro for ", c], 0));
}
function sq(a, b) {
  return Fp.k(a, N(["Unmached delimiter ", b], 0));
}
function tq(a) {
  return T.h(Xd, mq(")", a));
}
function uq(a) {
  return mq("]", a);
}
function vq(a) {
  var b = mq("}", a), c = P(b);
  !Je(c) && Fp.k(a, N(["Map literal must contain an even number of forms"], 0));
  return T.h(th, b);
}
function wq(a) {
  for (var b = new ka, c = Bp(a);;) {
    if (null == c) {
      return Fp.k(a, N(["EOF while reading"], 0));
    }
    if ("\\" === c) {
      b.append(lq(a)), c = Bp(a);
    } else {
      if ('"' === c) {
        return b.toString();
      }
      if (oc) {
        b.append(c), c = Bp(a);
      } else {
        return null;
      }
    }
  }
}
function xq(a) {
  for (var b = new ka, c = Bp(a);;) {
    if (null == c) {
      return Fp.k(a, N(["EOF while reading"], 0));
    }
    if ("\\" === c) {
      b.append(c);
      var d = Bp(a);
      if (null == d) {
        return Fp.k(a, N(["EOF while reading"], 0));
      }
      var e = function() {
        var a = b;
        a.append(d);
        return a;
      }(), f = Bp(a), b = e, c = f;
    } else {
      if ('"' === c) {
        return b.toString();
      }
      if (u) {
        e = function() {
          var a = b;
          a.append(c);
          return a;
        }(), f = Bp(a), b = e, c = f;
      } else {
        return null;
      }
    }
  }
}
function yq(a, b) {
  var c = Gp(a, b);
  if (r(-1 != c.indexOf("/"))) {
    c = qc.h(Qd.j(c, 0, c.indexOf("/")), Qd.j(c, c.indexOf("/") + 1, c.length));
  } else {
    var d = qc.g(c), c = "nil" === c ? null : "true" === c ? !0 : "false" === c ? !1 : u ? d : null
  }
  return c;
}
function zq(a) {
  var b = Gp(a, Bp(a)), c = gq(fq, b), b = c[0], d = c[1], c = c[2];
  return void 0 !== d && ":/" === d.substring(d.length - 2, d.length) || ":" === c[c.length - 1] || -1 !== b.indexOf("::", 1) ? Fp.k(a, N(["Invalid token: ", b], 0)) : null != d && 0 < d.length ? $d.h(d.substring(0, d.indexOf("/")), c) : $d.g(b);
}
function Aq(a) {
  return function(b) {
    return Ja(Ja(sc, nq.o ? nq.o(b, !0, null, !0) : nq.call(null, b, !0, null)), a);
  };
}
function Bq() {
  return function(a) {
    return Fp.k(a, N(["Unreadable form"], 0));
  };
}
function Cq(a) {
  var b;
  b = nq.o ? nq.o(a, !0, null, !0) : nq.call(null, a, !0, null);
  b = b instanceof pc ? new q(null, 1, [xm, b], null) : "string" === typeof b ? new q(null, 1, [xm, b], null) : b instanceof U ? new pg([b, !0]) : u ? b : null;
  ed(b) || Fp.k(a, N(["Metadata must be Symbol,Keyword,String or Map"], 0));
  var c = nq.o ? nq.o(a, !0, null, !0) : nq.call(null, a, !0, null);
  return(c ? c.p & 262144 || c.qd || (c.p ? 0 : ya(gb, c)) : ya(gb, c)) ? Fc(c, yh.k(N([Uc(c), b], 0))) : Fp.k(a, N(["Metadata can only be applied to IWithMetas"], 0));
}
function Dq(a) {
  return Hh(mq("}", a));
}
function Eq(a) {
  return Yh(xq(a));
}
function Fq(a) {
  nq.o ? nq.o(a, !0, null, !0) : nq.call(null, a, !0, null);
  return a;
}
function Hp(a) {
  return'"' === a ? wq : ":" === a ? zq : ";" === a ? Ip : "'" === a ? Aq(new pc(null, "quote", "quote", 1377916282, null)) : "@" === a ? Aq(new pc(null, "deref", "deref", 1494944732, null)) : "^" === a ? Cq : "`" === a ? oq : "~" === a ? oq : "(" === a ? tq : ")" === a ? sq : "[" === a ? uq : "]" === a ? sq : "{" === a ? vq : "}" === a ? sq : "\\" === a ? Bp : "#" === a ? pq : null;
}
function qq(a) {
  return "{" === a ? Dq : "\x3c" === a ? Bq() : '"' === a ? Eq : "!" === a ? Ip : "_" === a ? Fq : null;
}
function nq(a, b, c) {
  for (;;) {
    var d = Bp(a);
    if (null == d) {
      return r(b) ? Fp.k(a, N(["EOF while reading"], 0)) : c;
    }
    if (!Ep(d)) {
      if (";" === d) {
        a = Ip.h ? Ip.h(a, d) : Ip.call(null, a);
      } else {
        if (u) {
          var e = Hp(d);
          if (r(e)) {
            e = e.h ? e.h(a, d) : e.call(null, a, d);
          } else {
            var e = a, f = void 0;
            !(f = !/[^0-9]/.test(d)) && (f = void 0, f = "+" === d || "-" === d) && (f = Bp(e), Cp(e, f), f = !/[^0-9]/.test(f));
            if (f) {
              a: {
                e = a;
                d = new ka(d);
                for (f = Bp(e);;) {
                  var g;
                  g = null == f;
                  g || (g = (g = Ep(f)) ? g : Hp.g ? Hp.g(f) : Hp.call(null, f));
                  if (r(g)) {
                    Cp(e, f);
                    f = d = d.toString();
                    g = void 0;
                    if (r(gq(Jp, f))) {
                      if (f = gq(Jp, f), null != f[2]) {
                        g = 0;
                      } else {
                        g = r(f[3]) ? [f[3], 10] : r(f[4]) ? [f[4], 16] : r(f[5]) ? [f[5], 8] : r(f[6]) ? [f[7], parseInt(f[6], 10)] : u ? [null, null] : null;
                        var h = g[0];
                        null == h ? g = null : (g = parseInt(h, g[1]), g = "-" === f[1] ? -g : g);
                      }
                    } else {
                      g = void 0, r(gq(dq, f)) ? (f = gq(dq, f), g = parseInt(f[1], 10) / parseInt(f[2], 10)) : g = r(gq(eq, f)) ? parseFloat(f) : null;
                    }
                    f = g;
                    e = r(f) ? f : Fp.k(e, N(["Invalid number format [", d, "]"], 0));
                    break a;
                  }
                  d.append(f);
                  f = Bp(e);
                }
                e = void 0;
              }
            } else {
              e = u ? yq(a, d) : null;
            }
          }
          if (e !== a) {
            return e;
          }
        } else {
          return null;
        }
      }
    }
  }
}
function Gq(a) {
  if (mc.h(3, P(a))) {
    return a;
  }
  if (3 < P(a)) {
    return Qd.j(a, 0, 3);
  }
  if (u) {
    for (a = new ka(a);;) {
      if (3 > a.xb.length) {
        a = a.append("0");
      } else {
        return a.toString();
      }
    }
  } else {
    return null;
  }
}
var Hq = function(a, b) {
  return function(c, d) {
    return R.h(r(d) ? b : a, c);
  };
}(new W(null, 13, 5, X, [null, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], null), new W(null, 13, 5, X, [null, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], null)), Iq = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
function Jq(a) {
  a = parseInt(a, 10);
  return xa(isNaN(a)) ? a : null;
}
function Kq(a, b, c, d) {
  a <= b && b <= c || Fp.k(null, N(["" + y.g(d) + " Failed:  " + y.g(a) + "\x3c\x3d" + y.g(b) + "\x3c\x3d" + y.g(c)], 0));
  return b;
}
function Lq(a) {
  var b = Xh(Iq, a);
  Q.j(b, 0, null);
  var c = Q.j(b, 1, null), d = Q.j(b, 2, null), e = Q.j(b, 3, null), f = Q.j(b, 4, null), g = Q.j(b, 5, null), h = Q.j(b, 6, null), l = Q.j(b, 7, null), n = Q.j(b, 8, null), m = Q.j(b, 9, null), s = Q.j(b, 10, null);
  if (xa(b)) {
    return Fp.k(null, N(["Unrecognized date/time syntax: " + y.g(a)], 0));
  }
  a = Jq(c);
  var b = function() {
    var a = Jq(d);
    return r(a) ? a : 1;
  }(), c = function() {
    var a = Jq(e);
    return r(a) ? a : 1;
  }(), w = function() {
    var a = Jq(f);
    return r(a) ? a : 0;
  }(), x = function() {
    var a = Jq(g);
    return r(a) ? a : 0;
  }(), t = function() {
    var a = Jq(h);
    return r(a) ? a : 0;
  }(), z = function() {
    var a = Jq(Gq(l));
    return r(a) ? a : 0;
  }(), n = (mc.h(n, "-") ? -1 : 1) * (60 * function() {
    var a = Jq(m);
    return r(a) ? a : 0;
  }() + function() {
    var a = Jq(s);
    return r(a) ? a : 0;
  }());
  return new W(null, 8, 5, X, [a, Kq(1, b, 12, "timestamp month field must be in range 1..12"), Kq(1, c, Hq.h ? Hq.h(b, 0 === (a % 4 + 4) % 4 && (0 !== (a % 100 + 100) % 100 || 0 === (a % 400 + 400) % 400)) : Hq.call(null, b, 0 === (a % 4 + 4) % 4 && (0 !== (a % 100 + 100) % 100 || 0 === (a % 400 + 400) % 400)), "timestamp day field must be in range 1..last day in month"), Kq(0, w, 23, "timestamp hour field must be in range 0..23"), Kq(0, x, 59, "timestamp minute field must be in range 0..59"), Kq(0, 
  t, mc.h(x, 59) ? 60 : 59, "timestamp second field must be in range 0..60"), Kq(0, z, 999, "timestamp millisecond field must be in range 0..999"), n], null);
}
var Mq = Mi.g(new q(null, 4, ["inst", function(a) {
  var b;
  if ("string" === typeof a) {
    if (b = Lq(a), r(b)) {
      a = Q.j(b, 0, null);
      var c = Q.j(b, 1, null), d = Q.j(b, 2, null), e = Q.j(b, 3, null), f = Q.j(b, 4, null), g = Q.j(b, 5, null), h = Q.j(b, 6, null);
      b = Q.j(b, 7, null);
      b = new Date(Date.UTC(a, c - 1, d, e, f, g, h) - 6E4 * b);
    } else {
      b = Fp.k(null, N(["Unrecognized date/time syntax: " + y.g(a)], 0));
    }
  } else {
    b = Fp.k(null, N(["Instance literal expects a string for its timestamp."], 0));
  }
  return b;
}, "uuid", function(a) {
  return "string" === typeof a ? new Ti(a) : Fp.k(null, N(["UUID literal expects a string as its representation."], 0));
}, "queue", function(a) {
  return id(a) ? gf(fg, a) : Fp.k(null, N(["Queue literal expects a vector for its elements."], 0));
}, "js", function(a) {
  if (id(a)) {
    var b = [];
    a = F(a);
    for (var c = null, d = 0, e = 0;;) {
      if (e < d) {
        var f = c.H(null, e);
        b.push(f);
        e += 1;
      } else {
        if (a = F(a)) {
          c = a, jd(c) ? (a = C(c), e = E(c), c = a, d = P(a), a = e) : (a = I(c), b.push(a), a = L(c), c = null, d = 0), e = 0;
        } else {
          break;
        }
      }
    }
    return b;
  }
  if (ed(a)) {
    b = {};
    a = F(a);
    c = null;
    for (e = d = 0;;) {
      if (e < d) {
        var g = c.H(null, e), f = Q.j(g, 0, null), g = Q.j(g, 1, null);
        b[Zd(f)] = g;
        e += 1;
      } else {
        if (a = F(a)) {
          jd(a) ? (d = C(a), a = E(a), c = d, d = P(d)) : (d = I(a), c = Q.j(d, 0, null), d = Q.j(d, 1, null), b[Zd(c)] = d, a = L(a), c = null, d = 0), e = 0;
        } else {
          break;
        }
      }
    }
    return b;
  }
  return u ? Fp.k(null, N(["JS literal expects a vector or map containing only string or unqualified keyword keys"], 0)) : null;
}], null)), Nq = Mi.g(null);
function rq(a, b) {
  var c = yq(a, b), d = R.h(B(Mq), "" + y.g(c)), e = B(Nq);
  return r(d) ? d.g ? d.g(nq(a, !0, null)) : d.call(null, nq(a, !0, null)) : r(e) ? e.h ? e.h(c, nq(a, !0, null)) : e.call(null, c, nq(a, !0, null)) : u ? Fp.k(a, N(["Could not find tag parser for ", "" + y.g(c), " in ", Hi.k(N([vh(B(Mq))], 0))], 0)) : null;
}
;var Oq = !Bo || Bo && 9 <= Oo, Pq = Bo && !Mo("9");
!Do || Mo("528");
Co && Mo("1.9b") || Bo && Mo("8") || Ao && Mo("9.5") || Do && Mo("528");
Co && !Mo("8") || Bo && Mo("9");
function Qq(a, b) {
  this.type = a;
  this.currentTarget = this.target = b;
  this.defaultPrevented = this.$c = !1;
}
Qq.prototype.preventDefault = function() {
  this.defaultPrevented = !0;
};
function Rq(a) {
  Rq[" "](a);
  return a;
}
Rq[" "] = function() {
};
function Sq(a, b) {
  Qq.call(this, a ? a.type : "");
  this.relatedTarget = this.currentTarget = this.target = null;
  this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
  this.Tc = this.state = null;
  if (a) {
    var c = this.type = a.type;
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    var d = a.relatedTarget;
    if (d) {
      if (Co) {
        var e;
        a: {
          try {
            Rq(d.nodeName);
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
    this.offsetX = Do || void 0 !== a.offsetX ? a.offsetX : a.layerX;
    this.offsetY = Do || void 0 !== a.offsetY ? a.offsetY : a.layerY;
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
    this.Tc = a;
    a.defaultPrevented && this.preventDefault();
  }
}
(function() {
  function a() {
  }
  a.prototype = Qq.prototype;
  Sq.Ed = Qq.prototype;
  Sq.prototype = new a;
  Sq.prototype.constructor = Sq;
  Sq.Id = function(a, c, d) {
    return Qq.prototype[c].apply(a, Array.prototype.slice.call(arguments, 2));
  };
})();
Sq.prototype.preventDefault = function() {
  Sq.Ed.preventDefault.call(this);
  var a = this.Tc;
  if (a.preventDefault) {
    a.preventDefault();
  } else {
    if (a.returnValue = !1, Pq) {
      try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1;
        }
      } catch (b) {
      }
    }
  }
};
var Tq = "closure_listenable_" + (1E6 * Math.random() | 0);
function Uq(a) {
  try {
    return!(!a || !a[Tq]);
  } catch (b) {
    return!1;
  }
}
var Vq = 0;
function Wq(a, b, c, d, e) {
  this.Gb = a;
  this.dc = null;
  this.src = b;
  this.type = c;
  this.jc = !!d;
  this.Fb = e;
  this.key = ++Vq;
  this.Qb = this.ic = !1;
}
function Xq(a) {
  a.Qb = !0;
  a.Gb = null;
  a.dc = null;
  a.src = null;
  a.Fb = null;
}
;function Yq(a) {
  this.src = a;
  this.Oa = {};
  this.fc = 0;
}
Yq.prototype.add = function(a, b, c, d, e) {
  var f = a.toString();
  a = this.Oa[f];
  a || (a = this.Oa[f] = [], this.fc++);
  var g = Zq(a, b, d, e);
  -1 < g ? (b = a[g], c || (b.ic = !1)) : (b = new Wq(b, this.src, f, !!d, e), b.ic = c, a.push(b));
  return b;
};
Yq.prototype.remove = function(a, b, c, d) {
  a = a.toString();
  if (!(a in this.Oa)) {
    return!1;
  }
  var e = this.Oa[a];
  b = Zq(e, b, c, d);
  return-1 < b ? (Xq(e[b]), la.splice.call(e, b, 1), 0 == e.length && (delete this.Oa[a], this.fc--), !0) : !1;
};
function $q(a, b) {
  var c = b.type;
  if (c in a.Oa) {
    var d = a.Oa[c], e = ma(d, b), f;
    (f = 0 <= e) && la.splice.call(d, e, 1);
    f && (Xq(b), 0 == a.Oa[c].length && (delete a.Oa[c], a.fc--));
  }
}
function Zq(a, b, c, d) {
  for (var e = 0;e < a.length;++e) {
    var f = a[e];
    if (!f.Qb && f.Gb == b && f.jc == !!c && f.Fb == d) {
      return e;
    }
  }
  return-1;
}
;var ar = "closure_lm_" + (1E6 * Math.random() | 0), br = {}, cr = 0;
function dr(a, b, c, d, e) {
  if ("array" == p(b)) {
    for (var f = 0;f < b.length;f++) {
      dr(a, b[f], c, d, e);
    }
    return null;
  }
  c = er(c);
  if (Uq(a)) {
    a = a.sd.add(String(b), c, !1, d, e);
  } else {
    if (!b) {
      throw Error("Invalid event type");
    }
    var f = !!d, g = fr(a);
    g || (a[ar] = g = new Yq(a));
    c = g.add(b, c, !1, d, e);
    c.dc || (d = gr(), c.dc = d, d.src = a, d.Gb = c, a.addEventListener ? a.addEventListener(b, d, f) : a.attachEvent(b in br ? br[b] : br[b] = "on" + b, d), cr++);
    a = c;
  }
  return a;
}
function gr() {
  var a = hr, b = Oq ? function(c) {
    return a.call(b.src, b.Gb, c);
  } : function(c) {
    c = a.call(b.src, b.Gb, c);
    if (!c) {
      return c;
    }
  };
  return b;
}
function ir(a, b, c, d) {
  var e = 1;
  if (a = fr(a)) {
    if (b = a.Oa[b]) {
      a = b.length;
      if (0 < a) {
        for (var f = Array(a), g = 0;g < a;g++) {
          f[g] = b[g];
        }
        b = f;
      } else {
        b = [];
      }
      for (a = 0;a < b.length;a++) {
        (f = b[a]) && f.jc == c && !f.Qb && (e &= !1 !== jr(f, d));
      }
    }
  }
  return Boolean(e);
}
function jr(a, b) {
  var c = a.Gb, d = a.Fb || a.src;
  if (a.ic && "number" != typeof a && a && !a.Qb) {
    var e = a.src;
    if (Uq(e)) {
      $q(e.sd, a);
    } else {
      var f = a.type, g = a.dc;
      e.removeEventListener ? e.removeEventListener(f, g, a.jc) : e.detachEvent && e.detachEvent(f in br ? br[f] : br[f] = "on" + f, g);
      cr--;
      (f = fr(e)) ? ($q(f, a), 0 == f.fc && (f.src = null, e[ar] = null)) : Xq(a);
    }
  }
  return c.call(d, b);
}
function hr(a, b) {
  if (a.Qb) {
    return!0;
  }
  if (!Oq) {
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
    c = new Sq(e, this);
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
        c.currentTarget = e[h], d &= ir(e[h], f, !0, c);
      }
      for (h = 0;!c.$c && h < e.length;h++) {
        c.currentTarget = e[h], d &= ir(e[h], f, !1, c);
      }
    }
    return d;
  }
  return jr(a, new Sq(b, this));
}
function fr(a) {
  a = a[ar];
  return a instanceof Yq ? a : null;
}
var kr = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
function er(a) {
  return "function" == p(a) ? a : a[kr] || (a[kr] = function(b) {
    return a.handleEvent(b);
  });
}
;var lr = function() {
  function a(a, d, e, f) {
    var g = null;
    3 < arguments.length && (g = N(Array.prototype.slice.call(arguments, 3), 0));
    return b.call(this, a, d, e, g);
  }
  function b(a, b, e, f) {
    f = nd(f) ? T.h(th, f) : f;
    f = R.j(f, Vm, !1);
    return dr(sp(a), Zd(b), e, f);
  }
  a.v = 3;
  a.m = function(a) {
    var d = I(a);
    a = L(a);
    var e = I(a);
    a = L(a);
    var f = I(a);
    a = J(a);
    return b(d, e, f, a);
  };
  a.k = b;
  return a;
}();
var mr = Qc([aj, xj, Cj, uk, Ik, Ok, dl, yl, Al, Dl, Il, Wl, fn, ln], [.001, .01, .001, .5, 80, 400, 400, 10, 3, .05, .04, !0, .1, 1E3]);
function nr(a, b) {
  return Wn(function(b, d) {
    return d >= a ? Ak : Bj;
  }, b);
}
function or(a, b) {
  var c = nd(b) ? T.h(th, b) : b, d = R.h(c, Dl), e = R.h(c, fn), f = R.h(c, uk), g = R.h(c, Ik), h = R.h(c, Ok), l = R.h(c, dl), n = Pn(a / l * h), m = Rh.h(function() {
    var a = n - g;
    return 0 > a ? 0 : a;
  }(), function() {
    var a = n + g;
    return h < a ? h : a;
  }()), s = f * P(m), w = Ue(s, Un(m)), c = Xe.h(s, function(a, b, c, d, e, f, g, h, l) {
    return function() {
      return Sn.h(l - h, l + h);
    };
  }(n, m, s, w, b, c, c, d, e, f, g, h, l));
  return nr(e, Se.j(Wf, w, c));
}
function pr(a, b) {
  return new q(null, 6, [Ll, a, Xi, or(a, b), sj, Dh, kj, 1, gj, Ih(), tj, Ih()], null);
}
function qr(a) {
  a = vh(Ak.g(Xi.g(a)));
  return F(a) ? T.h(Bd, a) - T.h(Kd, a) : 0;
}
function rr(a, b, c) {
  return Vc.h(Hh(Rh.h(function() {
    var b = a - c;
    return 0 > b ? 0 : b;
  }(), function() {
    var d = a + c + 1;
    return b < d ? b : d;
  }())), a);
}
function sr(a) {
  var b = ql.g(a), c = Ok.g(b), d = dl.g(b), e = Qn(Se.h(qr, Mj.g(a))), f = Pn(e / c * d), g = Md(f, 2), b = jf.h(function(a, b, c, d, e, f) {
    return function(a) {
      return S.j(a, sj, rr(Ll.g(a), c, f));
    };
  }(b, c, d, e, f, g), Mj.g(a));
  return S.k(a, Mj, b, N([Fk, g], 0));
}
function tr(a, b) {
  var c = Al.g(ql.g(a));
  return gf(mg, Qe(function(a) {
    return function(c) {
      var f;
      f = Ak.g(Xi.g(c));
      f = Vn(b, vh(f));
      f = f >= a ? f * kj.g(c) : null;
      return r(f) ? new W(null, 2, 5, X, [Ll.g(c), f], null) : null;
    };
  }(c), Mj.g(a)));
}
function ur(a, b) {
  return Df.o(a, new W(null, 1, 5, X, [tj], null), Nc, b);
}
function vr(a, b, c) {
  b = tr(a, b);
  return S.j(vd.j(function() {
    return function(a, b) {
      var f = Q.j(b, 0, null);
      Q.j(b, 1, null);
      return Df.o(a, new W(null, 2, 5, X, [Mj, f], null), ur, c);
    };
  }(b), a, b), Jl, b);
}
function wr(a, b, c) {
  var d = b.g ? b.g(Ll.g(a)) : b.call(null, Ll.g(a));
  if (r(d)) {
    var e = sj.g(a);
    a = function() {
      var a = Pn(c * (P(e) + 1));
      return 1 < a ? a : 1;
    }();
    if (Vn(b, e) < a) {
      return!0;
    }
    var f = d + Sn.h(-.1, .1);
    return Vn(function(a) {
      return function(c) {
        return(b.h ? b.h(c, 0) : b.call(null, c, 0)) > a;
      };
    }(f, e, a, d, d), e) < a;
  }
  return null;
}
function xr(a, b, c) {
  return gf(Dh, Qe(function(a) {
    return r(wr(a, b, c)) ? Ll.g(a) : null;
  }, Mj.g(a)));
}
function yr(a, b) {
  var c = ql.g(a), d = Il.g(c);
  r(Wl.g(c)) ? (c = Pn(d * P(Mj.g(a))), c = 1 < c ? c : 1, c = P(b) <= c ? Hh(vh(b)) : Hh(Se.h(I, Ue(c, ud.j(Td, yd, b))))) : c = xr(a, b, d);
  return c;
}
function zr(a, b) {
  return Df.o(a, new W(null, 1, 5, X, [gj], null), Nc, b);
}
function Ar(a, b) {
  var c = yr(a, Jl.g(a));
  return S.j(vd.j(function() {
    return function(a, c) {
      return Df.o(a, new W(null, 2, 5, X, [Mj, c], null), zr, b);
    };
  }(c), a, c), Yk, c);
}
function Br(a, b, c, d, e) {
  var f = Xi.g(a);
  e = nr(e, jf.h(function() {
    return function(a) {
      var e = Q.j(a, 0, null), f = Q.j(a, 1, null);
      a = r(b.g ? b.g(e) : b.call(null, e)) ? function() {
        var a = f + c;
        return 1 < a ? 1 : a;
      }() : function() {
        var a = f - d;
        return 0 > a ? 0 : a;
      }();
      return new W(null, 2, 5, X, [e, a], null);
    };
  }(f), me.h(Ak.g(f), Bj.g(f))));
  return S.j(a, Xi, e);
}
function Cr(a, b) {
  var c = Dl.g(ql.g(a)), d = xj.g(ql.g(a)), e = fn.g(ql.g(a)), c = vd.j(function(a, c, d) {
    return function(e, n) {
      return Df.j(e, new W(null, 1, 5, X, [n], null), function(a, c, d) {
        return function(e) {
          return Br(e, b, a, c, d);
        };
      }(a, c, d));
    };
  }(c, d, e), Mj.g(a), Yk.g(a));
  return S.j(a, Mj, c);
}
function Dr(a, b) {
  var c = Xi.g(a), c = nr(b, jf.h(function() {
    return function(a) {
      var c = Q.j(a, 0, null);
      a = Q.j(a, 1, null) + .1 * b;
      return new W(null, 2, 5, X, [c, 1 < a ? 1 : a], null);
    };
  }(c), me.h(Ak.g(c), Bj.g(c))));
  return S.j(a, Xi, c);
}
function Er(a, b) {
  var c = aj.g(ql.g(a)), d = Cj.g(ql.g(a)), e = ln.g(ql.g(a)), f = yl.g(ql.g(a)), g = fn.g(ql.g(a)), h = function(a, c, d) {
    return function(a) {
      return P(Ph.j(a, zd, b - d));
    };
  }(c, d, e, f, g), l = gf(mg, Se.h(Uh.h(Ll, Me.h(h, gj)), Mj.g(a))), n = gf(mg, Se.h(Uh.h(Ll, Me.h(h, tj)), Mj.g(a))), c = jf.h(function(a, b, c, d, e, f, g, h) {
    return function(c) {
      var f = sj.g(c), l = T.j(Bd, 1, xh(zh(h, f))), f = T.j(Bd, 1, xh(zh(g, f))), l = a * l, n = b * f, f = P(tj.g(c)), w = P(gj.g(c)), n = d - w / n * (d - 1), n = 1 < n ? n : 1;
      return S.j(f < l ? Dr(c, e) : c, kj, n);
    };
  }(c, d, e, f, g, h, l, n), Mj.g(a));
  return S.j(a, Mj, c);
}
function Fr(a) {
  var b = jf.h(function(a) {
    return Df.j(Df.j(a, new W(null, 1, 5, X, [gj], null), Oc), new W(null, 1, 5, X, [tj], null), Oc);
  }, Mj.g(a));
  return S.j(a, Mj, b);
}
;function Gr(a, b, c) {
  var d, e = sk.h(a, 0) + 1, f = ln.g(ql.g(a));
  d = r(c) ? 0 === (e % f + f) % f : c;
  f = r(c) ? 0 === (e % f + f) % f : c;
  a = S.j(a, sk, e);
  a = vr(a, b, e);
  a = Ar(a, e);
  b = r(c) ? Cr(a, b) : a;
  e = r(d) ? Er(b, e) : b;
  d = r(d) ? Fr(e) : e;
  d = r(f) ? sr(d) : d;
  return ro(d, Yk.g(d), c);
}
function Hr(a) {
  if (a ? a.Wc : a) {
    return a.Wc();
  }
  var b;
  b = Hr[p(null == a ? null : a)];
  if (!b && (b = Hr._, !b)) {
    throw v("PInputGenerator.bit-width", a);
  }
  return b.call(null, a);
}
function Ir(a) {
  if (a ? a.Xc : a) {
    return a.Xc();
  }
  var b;
  b = Ir[p(null == a ? null : a)];
  if (!b && (b = Ir._, !b)) {
    throw v("PInputGenerator.bits-value", a);
  }
  return b.call(null, a);
}
function Jr(a) {
  if (a ? a.Cd : a) {
    return a.value;
  }
  var b;
  b = Jr[p(null == a ? null : a)];
  if (!b && (b = Jr._, !b)) {
    throw v("PInputGenerator.domain-value", a);
  }
  return b.call(null, a);
}
function Kr(a) {
  if (a ? a.Zc : a) {
    return a.Zc();
  }
  var b;
  b = Kr[p(null == a ? null : a)];
  if (!b && (b = Kr._, !b)) {
    throw v("PInputGenerator.input-step", a);
  }
  return b.call(null, a);
}
function Lr(a) {
  if (a ? a.Yc : a) {
    return a.Yc();
  }
  var b;
  b = Lr[p(null == a ? null : a)];
  if (!b && (b = Lr._, !b)) {
    throw v("PInputGenerator.input-reset", a);
  }
  return b.call(null, a);
}
function Mr(a, b, c, d, e, f, g) {
  this.Ha = a;
  this.value = b;
  this.transform = c;
  this.xa = d;
  this.options = e;
  this.G = f;
  this.C = g;
  this.p = 2229667594;
  this.F = 8192;
  5 < arguments.length ? (this.G = f, this.C = g) : this.C = this.G = null;
}
k = Mr.prototype;
k.P = function(a, b) {
  return Qa.j(this, b, null);
};
k.Q = function(a, b, c) {
  switch(b instanceof U ? b.ma : null) {
    case "options":
      return this.options;
    case "encode":
      return this.xa;
    case "transform":
      return this.transform;
    case "value":
      return this.value;
    case "init-value":
      return this.Ha;
    default:
      return R.j(this.C, b, c);
  }
};
k.Wc = function() {
  return qj.g(this.options);
};
k.Xc = function() {
  return this.xa.g ? this.xa.g(this.value) : this.xa.call(null, this.value);
};
k.Cd = function() {
  return this.value;
};
k.Zc = function() {
  return S.j(this, Tj, this.transform.g ? this.transform.g(this.value) : this.transform.call(null, this.value));
};
k.Yc = function() {
  return S.j(this, Tj, this.Ha);
};
k.K = function(a, b, c) {
  return li(b, function() {
    return function(a) {
      return li(b, Fi, "", " ", "", c, a);
    };
  }(this), "#org.nfrac.comportex.core.InputGenerator{", ", ", "}", c, me.h(new W(null, 5, 5, X, [new W(null, 2, 5, X, [Sl, this.Ha], null), new W(null, 2, 5, X, [Tj, this.value], null), new W(null, 2, 5, X, [oj, this.transform], null), new W(null, 2, 5, X, [cn, this.xa], null), new W(null, 2, 5, X, [mm, this.options], null)], null), this.C));
};
k.L = function() {
  return this.G;
};
k.T = function() {
  return 5 + P(this.C);
};
k.N = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Rd(this);
};
k.J = function(a, b) {
  return r(r(b) ? this.constructor === b.constructor && ig(this, b) : b) ? !0 : !1;
};
k.Ra = function(a, b) {
  return pd(new Bh(null, new q(null, 5, [oj, null, Tj, null, Sl, null, mm, null, cn, null], null), null), b) ? Rc.h(Fc(gf(mg, this), this.G), b) : new Mr(this.Ha, this.value, this.transform, this.xa, this.options, this.G, Ge(Rc.h(this.C, b)), null);
};
k.va = function(a, b, c) {
  return r(V.h ? V.h(Sl, b) : V.call(null, Sl, b)) ? new Mr(c, this.value, this.transform, this.xa, this.options, this.G, this.C, null) : r(V.h ? V.h(Tj, b) : V.call(null, Tj, b)) ? new Mr(this.Ha, c, this.transform, this.xa, this.options, this.G, this.C, null) : r(V.h ? V.h(oj, b) : V.call(null, oj, b)) ? new Mr(this.Ha, this.value, c, this.xa, this.options, this.G, this.C, null) : r(V.h ? V.h(cn, b) : V.call(null, cn, b)) ? new Mr(this.Ha, this.value, this.transform, c, this.options, this.G, this.C, 
  null) : r(V.h ? V.h(mm, b) : V.call(null, mm, b)) ? new Mr(this.Ha, this.value, this.transform, this.xa, c, this.G, this.C, null) : new Mr(this.Ha, this.value, this.transform, this.xa, this.options, this.G, S.j(this.C, b, c), null);
};
k.O = function() {
  return F(me.h(new W(null, 5, 5, X, [new W(null, 2, 5, X, [Sl, this.Ha], null), new W(null, 2, 5, X, [Tj, this.value], null), new W(null, 2, 5, X, [oj, this.transform], null), new W(null, 2, 5, X, [cn, this.xa], null), new W(null, 2, 5, X, [mm, this.options], null)], null), this.C));
};
k.M = function(a, b) {
  return new Mr(this.Ha, this.value, this.transform, this.xa, this.options, b, this.C, this.A);
};
k.R = function(a, b) {
  return id(b) ? Sa(this, A.h(b, 0), A.h(b, 1)) : vd.j(Ja, this, b);
};
function Nr(a, b, c) {
  return new Mr(a, a, b, c, new q(null, 1, [qj, 300], null));
}
function Or(a, b) {
  var c = yh.k(N([mr, b], 0)), d = dl.g(c), c = sr.g ? sr.g(new q(null, 3, [Mj, jf.j(pr, Rh.g(d), We.g(c)), ql, c, Yk, Dh], null)) : sr.call(null, new q(null, 3, [Mj, jf.j(pr, Rh.g(d), We.g(c)), ql, c, Yk, Dh], null)), d = yh.k(N([Xn, ql.g(c)], 0)), c = S.k(c, ql, d, N([Mj, jf.j(Zn, Mj.g(c), We.g(d))], 0));
  return new q(null, 2, [gl, c, zn, a], null);
}
var Pr = function() {
  function a(a, b) {
    var c = Kr(zn.g(a));
    return Df.I(S.j(a, zn, c), new W(null, 1, 5, X, [gl], null), Gr, Ir(c), b);
  }
  function b(a) {
    return c.h(a, !0);
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
var Qr, Rr, Sr, Tr;
function Ur(a, b) {
  if (a ? a.Yb : a) {
    return a.Yb(a, b);
  }
  var c;
  c = Ur[p(null == a ? null : a)];
  if (!c && (c = Ur._, !c)) {
    throw v("ReadPort.take!", a);
  }
  return c.call(null, a, b);
}
function Vr(a, b, c) {
  if (a ? a.Zb : a) {
    return a.Zb(a, b, c);
  }
  var d;
  d = Vr[p(null == a ? null : a)];
  if (!d && (d = Vr._, !d)) {
    throw v("WritePort.put!", a);
  }
  return d.call(null, a, b, c);
}
function Wr(a) {
  if (a ? a.Ab : a) {
    return a.Ab(a);
  }
  var b;
  b = Wr[p(null == a ? null : a)];
  if (!b && (b = Wr._, !b)) {
    throw v("Channel.close!", a);
  }
  return b.call(null, a);
}
function Xr(a) {
  if (a ? a.Sa : a) {
    return a.Sa(a);
  }
  var b;
  b = Xr[p(null == a ? null : a)];
  if (!b && (b = Xr._, !b)) {
    throw v("Handler.active?", a);
  }
  return b.call(null, a);
}
function Yr(a) {
  if (a ? a.Aa : a) {
    return a.Aa(a);
  }
  var b;
  b = Yr[p(null == a ? null : a)];
  if (!b && (b = Yr._, !b)) {
    throw v("Handler.commit", a);
  }
  return b.call(null, a);
}
function Zr(a) {
  if (a ? a.vc : a) {
    return a.vc();
  }
  var b;
  b = Zr[p(null == a ? null : a)];
  if (!b && (b = Zr._, !b)) {
    throw v("Buffer.full?", a);
  }
  return b.call(null, a);
}
;function $r(a, b, c, d, e) {
  for (var f = 0;;) {
    if (f < e) {
      c[d + f] = a[b + f], f += 1;
    } else {
      break;
    }
  }
}
function as(a, b, c, d) {
  this.head = a;
  this.S = b;
  this.length = c;
  this.l = d;
}
as.prototype.pop = function() {
  if (0 === this.length) {
    return null;
  }
  var a = this.l[this.S];
  this.l[this.S] = null;
  this.S = (this.S + 1) % this.l.length;
  this.length -= 1;
  return a;
};
as.prototype.unshift = function(a) {
  this.l[this.head] = a;
  this.head = (this.head + 1) % this.l.length;
  this.length += 1;
  return null;
};
function bs(a, b) {
  a.length + 1 === a.l.length && a.resize();
  a.unshift(b);
}
as.prototype.resize = function() {
  var a = Array(2 * this.l.length);
  return this.S < this.head ? ($r(this.l, this.S, a, 0, this.length), this.S = 0, this.head = this.length, this.l = a) : this.S > this.head ? ($r(this.l, this.S, a, 0, this.l.length - this.S), $r(this.l, 0, a, this.l.length - this.S, this.head), this.S = 0, this.head = this.length, this.l = a) : this.S === this.head ? (this.head = this.S = 0, this.l = a) : null;
};
function cs(a, b) {
  for (var c = a.length, d = 0;;) {
    if (d < c) {
      var e = a.pop();
      (b.g ? b.g(e) : b.call(null, e)) && a.unshift(e);
      d += 1;
    } else {
      break;
    }
  }
}
function ds(a) {
  if (!(0 < a)) {
    throw Error("Assert failed: Can't create a ring buffer of size 0\n" + y.g(Hi.k(N([Xd(new pc(null, "\x3e", "\x3e", 1085014381, null), new pc(null, "n", "n", -2092305744, null), 0)], 0))));
  }
  return new as(0, 0, 0, Array(a));
}
function es(a, b) {
  this.oa = a;
  this.Ad = b;
  this.F = 0;
  this.p = 2;
}
es.prototype.T = function() {
  return this.oa.length;
};
es.prototype.vc = function() {
  return this.oa.length === this.Ad;
};
es.prototype.rd = function() {
  return this.oa.pop();
};
function fs(a, b) {
  if (!xa(Zr(a))) {
    throw Error("Assert failed: Can't add to a full buffer\n" + y.g(Hi.k(N([Xd(new pc(null, "not", "not", 1044554643, null), Xd(new pc("impl", "full?", "impl/full?", -97582774, null), new pc(null, "this", "this", 1028897902, null)))], 0))));
  }
  a.oa.unshift(b);
}
;var gs = null, hs = ds(32), is = !1, js = !1;
function ks() {
  is = !0;
  js = !1;
  for (var a = 0;;) {
    var b = hs.pop();
    if (null != b && (b.q ? b.q() : b.call(null), 1024 > a)) {
      a += 1;
      continue;
    }
    break;
  }
  is = !1;
  return 0 < hs.length ? ls.q ? ls.q() : ls.call(null) : null;
}
"undefined" !== typeof MessageChannel && (gs = new MessageChannel, gs.port1.onmessage = function() {
  return ks();
});
function ls() {
  var a = js;
  if (r(a ? is : a)) {
    return null;
  }
  js = !0;
  return "undefined" !== typeof MessageChannel ? gs.port2.postMessage(0) : "undefined" !== typeof setImmediate ? setImmediate(ks) : u ? setTimeout(ks, 0) : null;
}
function ms(a) {
  bs(hs, a);
  ls();
}
function ns(a, b) {
  setTimeout(a, b);
}
;var os, qs = function ps(b) {
  "undefined" === typeof os && (os = function(b, d, e) {
    this.B = b;
    this.bd = d;
    this.yd = e;
    this.F = 0;
    this.p = 425984;
  }, os.rb = !0, os.qb = "cljs.core.async.impl.channels/t16580", os.Bb = function(b, d) {
    return Cb(d, "cljs.core.async.impl.channels/t16580");
  }, os.prototype.Hb = function() {
    return this.B;
  }, os.prototype.L = function() {
    return this.yd;
  }, os.prototype.M = function(b, d) {
    return new os(this.B, this.bd, d);
  });
  return new os(b, ps, null);
};
function rs(a, b) {
  this.Fb = a;
  this.B = b;
}
function ss(a) {
  return Xr(a.Fb);
}
function ts(a, b, c, d, e, f) {
  this.Rb = a;
  this.ac = b;
  this.ec = c;
  this.$b = d;
  this.oa = e;
  this.closed = f;
}
ts.prototype.Ab = function() {
  if (!this.closed) {
    for (this.closed = !0;;) {
      var a = this.Rb.pop();
      if (null != a) {
        if (a.Sa(null)) {
          var b = a.Aa(null);
          ms(function(a) {
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
ts.prototype.Yb = function(a, b) {
  if (b.Sa(null)) {
    if (null != this.oa && 0 < P(this.oa)) {
      var c = b.Aa(null);
      return qs(this.oa.rd());
    }
    for (;;) {
      var d = this.ec.pop();
      if (null != d) {
        var e = d.Fb, f = d.B;
        if (e.Sa(null)) {
          var g = e.Aa(null), c = b.Aa(null);
          ms(function(a) {
            return function() {
              return a.g ? a.g(!0) : a.call(null, !0);
            };
          }(g, c, e, f, d, this));
          return qs(f);
        }
      } else {
        if (this.closed) {
          return c = b.Aa(null), qs(null);
        }
        64 < this.ac ? (this.ac = 0, cs(this.Rb, Xr)) : this.ac += 1;
        if (!(1024 > this.Rb.length)) {
          throw Error("Assert failed: " + y.g("No more than " + y.g(1024) + " pending takes are allowed on a single channel.") + "\n" + y.g(Hi.k(N([Xd(new pc(null, "\x3c", "\x3c", 993667236, null), Xd(new pc(null, ".-length", ".-length", -280799999, null), new pc(null, "takes", "takes", 298247964, null)), new pc("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", 1508600732, null))], 0))));
        }
        bs(this.Rb, b);
        return null;
      }
    }
  } else {
    return null;
  }
};
ts.prototype.Zb = function(a, b, c) {
  if (null == b) {
    throw Error("Assert failed: Can't put nil in on a channel\n" + y.g(Hi.k(N([Xd(new pc(null, "not", "not", 1044554643, null), Xd(new pc(null, "nil?", "nil?", 1612038930, null), new pc(null, "val", "val", 1769233139, null)))], 0))));
  }
  if ((a = this.closed) || !c.Sa(null)) {
    return qs(!a);
  }
  for (;;) {
    var d = this.Rb.pop();
    if (null != d) {
      if (d.Sa(null)) {
        var e = d.Aa(null);
        c = c.Aa(null);
        ms(function(a) {
          return function() {
            return a.g ? a.g(b) : a.call(null, b);
          };
        }(e, c, d, a, this));
        return qs(!0);
      }
    } else {
      if (null == this.oa || this.oa.vc()) {
        64 < this.$b ? (this.$b = 0, cs(this.ec, ss)) : this.$b += 1;
        if (!(1024 > this.ec.length)) {
          throw Error("Assert failed: " + y.g("No more than " + y.g(1024) + " pending puts are allowed on a single channel. Consider using a windowed buffer.") + "\n" + y.g(Hi.k(N([Xd(new pc(null, "\x3c", "\x3c", 993667236, null), Xd(new pc(null, ".-length", ".-length", -280799999, null), new pc(null, "puts", "puts", -1883877054, null)), new pc("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", 1508600732, null))], 0))));
        }
        bs(this.ec, new rs(c, b));
        return null;
      }
      c = c.Aa(null);
      fs(this.oa, b);
      return qs(!0);
    }
  }
};
function us(a) {
  return new ts(ds(32), 0, ds(32), 0, a, !1);
}
;var vs, xs = function ws(b) {
  "undefined" === typeof vs && (vs = function(b, d, e) {
    this.f = b;
    this.yc = d;
    this.xd = e;
    this.F = 0;
    this.p = 393216;
  }, vs.rb = !0, vs.qb = "cljs.core.async.impl.ioc-helpers/t16507", vs.Bb = function(b, d) {
    return Cb(d, "cljs.core.async.impl.ioc-helpers/t16507");
  }, vs.prototype.Sa = function() {
    return!0;
  }, vs.prototype.Aa = function() {
    return this.f;
  }, vs.prototype.L = function() {
    return this.xd;
  }, vs.prototype.M = function(b, d) {
    return new vs(this.f, this.yc, d);
  });
  return new vs(b, ws, null);
};
function ys(a) {
  try {
    return a[0].call(null, a);
  } catch (b) {
    if (b instanceof Object) {
      throw a[6].Ab(null), b;
    }
    if (u) {
      throw b;
    }
    return null;
  }
}
function zs(a, b, c) {
  c = c.Yb(null, xs(function(c) {
    a[2] = c;
    a[1] = b;
    return ys(a);
  }));
  return r(c) ? (a[2] = B(c), a[1] = b, Z) : null;
}
function As(a, b) {
  var c = a[6];
  null != b && c.Zb(null, b, xs(function() {
    return function() {
      return null;
    };
  }(c)));
  c.Ab(null);
  return c;
}
function Bs(a) {
  for (;;) {
    var b = a[4], c = Lk.g(b), d = Rl.g(b), e = a[5];
    if (r(function() {
      var a = e;
      return r(a) ? xa(b) : a;
    }())) {
      throw e;
    }
    if (r(function() {
      var a = e;
      return r(a) ? (a = c, r(a) ? e instanceof d : a) : a;
    }())) {
      a[1] = c;
      a[2] = e;
      a[5] = null;
      a[4] = S.k(b, Lk, null, N([Rl, null], 0));
      break;
    }
    if (r(function() {
      var a = e;
      return r(a) ? xa(c) && xa(Lj.g(b)) : a;
    }())) {
      a[4] = Xl.g(b);
    } else {
      if (r(function() {
        var a = e;
        return r(a) ? (a = xa(c)) ? Lj.g(b) : a : a;
      }())) {
        a[1] = Lj.g(b);
        a[4] = S.j(b, Lj, null);
        break;
      }
      if (r(function() {
        var a = xa(e);
        return a ? Lj.g(b) : a;
      }())) {
        a[1] = Lj.g(b);
        a[4] = S.j(b, Lj, null);
        break;
      }
      if (xa(e) && xa(Lj.g(b))) {
        a[1] = am.g(b);
        a[4] = Xl.g(b);
        break;
      }
      if (u) {
        throw Error("Assert failed: No matching clause\n" + y.g(Hi.k(N([!1], 0))));
      }
      break;
    }
  }
}
;var Cs = function() {
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
function Ds(a, b, c) {
  this.key = a;
  this.B = b;
  this.forward = c;
  this.F = 0;
  this.p = 2155872256;
}
Ds.prototype.K = function(a, b, c) {
  return li(b, Fi, "[", " ", "]", c, this);
};
Ds.prototype.O = function() {
  return Ja(Ja(sc, this.B), this.key);
};
var Es = function() {
  function a(a, b, c) {
    c = Array(c + 1);
    for (var g = 0;;) {
      if (g < c.length) {
        c[g] = null, g += 1;
      } else {
        break;
      }
    }
    return new Ds(a, b, c);
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
}(), Fs = function() {
  function a(a, b, c, g) {
    for (;;) {
      if (0 > c) {
        return a;
      }
      a: {
        for (;;) {
          var h = a.forward[c];
          if (r(h)) {
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
    return c.o(a, b, f, null);
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
  c.o = a;
  return c;
}();
function Gs(a, b) {
  this.tb = a;
  this.Da = b;
  this.F = 0;
  this.p = 2155872256;
}
Gs.prototype.K = function(a, b, c) {
  return li(b, function() {
    return function(a) {
      return li(b, Fi, "", " ", "", c, a);
    };
  }(this), "{", ", ", "}", c, this);
};
Gs.prototype.O = function() {
  return function(a) {
    return function c(d) {
      return new ae(null, function() {
        return function() {
          return null == d ? null : O(new W(null, 2, 5, X, [d.key, d.B], null), c(d.forward[0]));
        };
      }(a), null, null);
    };
  }(this)(this.tb.forward[0]);
};
Gs.prototype.put = function(a, b) {
  var c = Array(15), d = Fs.o(this.tb, a, this.Da, c).forward[0];
  if (null != d && d.key === a) {
    return d.B = b;
  }
  d = Cs.q();
  if (d > this.Da) {
    for (var e = this.Da + 1;;) {
      if (e <= d + 1) {
        c[e] = this.tb, e += 1;
      } else {
        break;
      }
    }
    this.Da = d;
  }
  for (d = Es.j(a, b, Array(d));;) {
    return 0 <= this.Da ? (c = c[0].forward, d.forward[0] = c[0], c[0] = d) : null;
  }
};
Gs.prototype.remove = function(a) {
  var b = Array(15), c = Fs.o(this.tb, a, this.Da, b).forward[0];
  if (null != c && c.key === a) {
    for (a = 0;;) {
      if (a <= this.Da) {
        var d = b[a].forward;
        d[a] === c && (d[a] = c.forward[a]);
        a += 1;
      } else {
        break;
      }
    }
    for (;;) {
      if (0 < this.Da && null == this.tb.forward[this.Da]) {
        this.Da -= 1;
      } else {
        return null;
      }
    }
  } else {
    return null;
  }
};
function Hs(a) {
  for (var b = Is, c = b.tb, d = b.Da;;) {
    if (0 > d) {
      return c === b.tb ? null : c;
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
var Is = new Gs(Es.g(0), 0);
function Js(a) {
  var b = (new Date).valueOf() + a, c = Hs(b), d = r(r(c) ? c.key < b + 10 : c) ? c.B : null;
  if (r(d)) {
    return d;
  }
  var e = us(null);
  Is.put(b, e);
  ns(function(a, b, c) {
    return function() {
      Is.remove(c);
      return a.Ab(null);
    };
  }(e, d, b, c), a);
  return e;
}
;var Ls = function Ks(b) {
  "undefined" === typeof Qr && (Qr = function(b, d, e) {
    this.f = b;
    this.yc = d;
    this.ud = e;
    this.F = 0;
    this.p = 393216;
  }, Qr.rb = !0, Qr.qb = "cljs.core.async/t13851", Qr.Bb = function(b, d) {
    return Cb(d, "cljs.core.async/t13851");
  }, Qr.prototype.Sa = function() {
    return!0;
  }, Qr.prototype.Aa = function() {
    return this.f;
  }, Qr.prototype.L = function() {
    return this.ud;
  }, Qr.prototype.M = function(b, d) {
    return new Qr(this.f, this.yc, d);
  });
  return new Qr(b, Ks, null);
}, Ms = function() {
  function a(a) {
    a = mc.h(a, 0) ? null : a;
    a = "number" === typeof a ? new es(ds(a), a) : a;
    return us(a);
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
}(), Ns = Ls(function() {
  return null;
}), Os = function() {
  function a(a, b, c, d) {
    a = Vr(a, b, Ls(c));
    return r(a) ? (b = B(a), r(d) ? c.g ? c.g(b) : c.call(null, b) : ms(function(a) {
      return function() {
        return c.g ? c.g(a) : c.call(null, a);
      };
    }(b, a, a)), b) : !0;
  }
  function b(a, b, c) {
    return d.o(a, b, c, !0);
  }
  function c(a, b) {
    var c = Vr(a, b, Ns);
    return r(c) ? B(c) : !0;
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
  d.o = a;
  return d;
}();
function Ps(a, b, c) {
  if (a ? a.Pc : a) {
    return a.Pc(a, b, c);
  }
  var d;
  d = Ps[p(null == a ? null : a)];
  if (!d && (d = Ps._, !d)) {
    throw v("Mult.tap*", a);
  }
  return d.call(null, a, b, c);
}
var Rs = function Qs(b) {
  var c = Mi.g(mg), d = function() {
    "undefined" === typeof Tr && (Tr = function(b, c, d, e) {
      this.wc = b;
      this.ch = c;
      this.zd = d;
      this.wd = e;
      this.F = 0;
      this.p = 393216;
    }, Tr.rb = !0, Tr.qb = "cljs.core.async/t14873", Tr.Bb = function() {
      return function(b, c) {
        return Cb(c, "cljs.core.async/t14873");
      };
    }(c), Tr.prototype.Pc = function() {
      return function(b, c, d) {
        Oi.o(this.wc, S, c, d);
        return null;
      };
    }(c), Tr.prototype.Qc = function() {
      return function(b, c) {
        Oi.j(this.wc, Rc, c);
        return null;
      };
    }(c), Tr.prototype.L = function() {
      return function() {
        return this.wd;
      };
    }(c), Tr.prototype.M = function() {
      return function(b, c) {
        return new Tr(this.wc, this.ch, this.zd, c);
      };
    }(c));
    return new Tr(c, b, Qs, null);
  }(), e = Ms.g(1), f = Mi.g(null), g = function(b, c, d, e) {
    return function() {
      return 0 === Oi.h(e, Ad) ? Os.h(d, !0) : null;
    };
  }(c, d, e, f), h = Ms.g(1);
  ms(function(c, d, e, f, g, h) {
    return function() {
      var t = function() {
        return function(b) {
          return function() {
            function c(d) {
              for (;;) {
                var e = function() {
                  try {
                    for (;;) {
                      var c = b(d);
                      if (!V(c, Z)) {
                        return c;
                      }
                    }
                  } catch (e) {
                    if (e instanceof Object) {
                      return d[5] = e, Bs(d), Z;
                    }
                    if (u) {
                      throw e;
                    }
                    return null;
                  }
                }();
                if (!V(e, Z)) {
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
              var m = c, n = m;
              n[2] = c[2];
              n[1] = 3;
              return Z;
            }
            if (20 === l) {
              var s = c[7], w = I(s), t = Q.j(w, 0, null), x = Q.j(w, 1, null);
              c[8] = t;
              m = c;
              m[1] = r(x) ? 22 : 23;
              return Z;
            }
            if (27 === l) {
              var z = c[9], G = c[10], ne = c[11], dc = c[12], oe = A.h(z, G), Cd = Os.j(oe, dc, h);
              c[11] = oe;
              m = c;
              m[1] = r(Cd) ? 30 : 31;
              return Z;
            }
            if (1 === l) {
              var Zh = m = c;
              Zh[2] = null;
              Zh[1] = 2;
              return Z;
            }
            if (24 === l) {
              var s = c[7], $h = c[2], ec = L(s), Ic = null, Qb = 0, Hb = 0;
              c[13] = ec;
              c[14] = Qb;
              c[15] = Hb;
              c[16] = $h;
              c[17] = Ic;
              var Dd = m = c;
              Dd[2] = null;
              Dd[1] = 8;
              return Z;
            }
            if (39 === l) {
              var yg = m = c;
              yg[2] = null;
              yg[1] = 41;
              return Z;
            }
            if (4 === l) {
              var dc = c[12], pe = c[2], om = null == pe;
              c[12] = pe;
              m = c;
              m[1] = r(om) ? 5 : 6;
              return Z;
            }
            if (15 === l) {
              var ec = c[13], Qb = c[14], Hb = c[15], Ic = c[17], Wj = ec, kf = Ic, Xj = Qb, pm = Hb + 1;
              c[18] = c[2];
              c[13] = Wj;
              c[14] = Xj;
              c[15] = pm;
              c[17] = kf;
              var Yj = m = c;
              Yj[2] = null;
              Yj[1] = 8;
              return Z;
            }
            if (21 === l) {
              var qm = c[2], Zj = m = c;
              Zj[2] = qm;
              Zj[1] = 18;
              return Z;
            }
            if (31 === l) {
              var ne = c[11], ak = Oi.h(g, Ad), lf = e.Qc(null, ne);
              c[19] = ak;
              var ai = m = c;
              ai[2] = lf;
              ai[1] = 32;
              return Z;
            }
            if (32 === l) {
              var z = c[9], G = c[10], Rb = c[20], Jc = c[21], rm = c[2], bk = Rb, bi = Jc, ci = G + 1;
              c[9] = z;
              c[10] = ci;
              c[20] = bk;
              c[22] = rm;
              c[21] = bi;
              var ck = m = c;
              ck[2] = null;
              ck[1] = 25;
              return Z;
            }
            if (40 === l) {
              var dk = c[23], di = Oi.h(g, Ad), ei = e.Qc(null, dk);
              c[24] = di;
              var zg = m = c;
              zg[2] = ei;
              zg[1] = 41;
              return Z;
            }
            if (33 === l) {
              var Ib = c[25], sm = jd(Ib), m = c;
              m[1] = sm ? 36 : 37;
              return Z;
            }
            if (13 === l) {
              var Ag = c[26], mf = Wr(Ag), fi = m = c;
              fi[2] = mf;
              fi[1] = 15;
              return Z;
            }
            if (22 === l) {
              var t = c[8], tm = Wr(t), ek = m = c;
              ek[2] = tm;
              ek[1] = 24;
              return Z;
            }
            if (36 === l) {
              var Ib = c[25], fk = C(Ib), um = E(Ib), fc = P(fk), Rb = um, z = fk, Jc = fc, G = 0;
              c[9] = z;
              c[10] = G;
              c[20] = Rb;
              c[21] = Jc;
              var Sb = m = c;
              Sb[2] = null;
              Sb[1] = 25;
              return Z;
            }
            if (41 === l) {
              var Ib = c[25], gc = c[2], Rb = L(Ib), z = null, G = Jc = 0;
              c[9] = z;
              c[10] = G;
              c[20] = Rb;
              c[27] = gc;
              c[21] = Jc;
              var yb = m = c;
              yb[2] = null;
              yb[1] = 25;
              return Z;
            }
            if (43 === l) {
              var Ed = m = c;
              Ed[2] = null;
              Ed[1] = 44;
              return Z;
            }
            if (29 === l) {
              var Tb = c[2], ad = m = c;
              ad[2] = Tb;
              ad[1] = 26;
              return Z;
            }
            if (44 === l) {
              c[28] = c[2];
              var qe = m = c;
              qe[2] = null;
              qe[1] = 2;
              return Z;
            }
            if (6 === l) {
              var re = c[29], se = B(d), Kc = vh(se), Fd = P(Kc), Gd = Ni(g, Fd), Rb = F(Kc), z = null, G = Jc = 0;
              c[30] = Gd;
              c[9] = z;
              c[10] = G;
              c[29] = Kc;
              c[20] = Rb;
              c[21] = Jc;
              var bd = m = c;
              bd[2] = null;
              bd[1] = 25;
              return Z;
            }
            if (28 === l) {
              var Rb = c[20], Ib = c[25], Lc = F(Rb);
              c[25] = Lc;
              m = c;
              m[1] = Lc ? 33 : 34;
              return Z;
            }
            if (25 === l) {
              var G = c[10], Jc = c[21], te = G < Jc, m = c;
              m[1] = r(te) ? 27 : 28;
              return Z;
            }
            if (34 === l) {
              var Hd = m = c;
              Hd[2] = null;
              Hd[1] = 35;
              return Z;
            }
            if (17 === l) {
              var nf = m = c;
              nf[2] = null;
              nf[1] = 18;
              return Z;
            }
            if (3 === l) {
              var gi = c[2], m = c;
              return As(m, gi);
            }
            if (12 === l) {
              var Bg = c[2], cd = m = c;
              cd[2] = Bg;
              cd[1] = 9;
              return Z;
            }
            if (2 === l) {
              return m = c, zs(m, 4, b);
            }
            if (23 === l) {
              var ue = m = c;
              ue[2] = null;
              ue[1] = 24;
              return Z;
            }
            if (35 === l) {
              var of = c[2], ve = m = c;
              ve[2] = of;
              ve[1] = 29;
              return Z;
            }
            if (19 === l) {
              var s = c[7], dd = C(s), hi = E(s), pf = P(dd), ec = hi, Ic = dd, Qb = pf, Hb = 0;
              c[13] = ec;
              c[14] = Qb;
              c[15] = Hb;
              c[17] = Ic;
              var Xa = m = c;
              Xa[2] = null;
              Xa[1] = 8;
              return Z;
            }
            if (11 === l) {
              var s = c[7], ec = c[13], Cg = F(ec);
              c[7] = Cg;
              m = c;
              m[1] = Cg ? 16 : 17;
              return Z;
            }
            if (9 === l) {
              var qf = c[2], we = m = c;
              we[2] = qf;
              we[1] = 7;
              return Z;
            }
            if (5 === l) {
              var Dg = B(d), ec = F(Dg), Ic = null, Hb = Qb = 0;
              c[13] = ec;
              c[14] = Qb;
              c[15] = Hb;
              c[17] = Ic;
              var xe = m = c;
              xe[2] = null;
              xe[1] = 8;
              return Z;
            }
            if (14 === l) {
              var Eg = m = c;
              Eg[2] = null;
              Eg[1] = 15;
              return Z;
            }
            if (45 === l) {
              var gk = c[2], ii = m = c;
              ii[2] = gk;
              ii[1] = 44;
              return Z;
            }
            if (26 === l) {
              var re = c[29], ji = c[2], ki = F(re);
              c[31] = ji;
              m = c;
              m[1] = ki ? 42 : 43;
              return Z;
            }
            if (16 === l) {
              var s = c[7], vm = jd(s), m = c;
              m[1] = vm ? 19 : 20;
              return Z;
            }
            if (38 === l) {
              var rf = c[2], hc = m = c;
              hc[2] = rf;
              hc[1] = 35;
              return Z;
            }
            if (30 === l) {
              var Fg = m = c;
              Fg[2] = null;
              Fg[1] = 32;
              return Z;
            }
            if (10 === l) {
              var Hb = c[15], Ic = c[17], hk = A.h(Ic, Hb), Ag = Q.j(hk, 0, null), ik = Q.j(hk, 1, null);
              c[26] = Ag;
              m = c;
              m[1] = r(ik) ? 13 : 14;
              return Z;
            }
            if (18 === l) {
              var jk = c[2], Gg = m = c;
              Gg[2] = jk;
              Gg[1] = 12;
              return Z;
            }
            if (42 === l) {
              return m = c, zs(m, 45, f);
            }
            if (37 === l) {
              var dk = c[23], dc = c[12], Ib = c[25], Id = I(Ib), kk = Os.j(Id, dc, h);
              c[23] = Id;
              m = c;
              m[1] = r(kk) ? 39 : 40;
              return Z;
            }
            if (8 === l) {
              var Qb = c[14], Hb = c[15], wm = Hb < Qb, m = c;
              m[1] = r(wm) ? 10 : 11;
              return Z;
            }
            return null;
          };
        }(c, d, e, f, g, h), c, d, e, f, g, h);
      }(), z = function() {
        var b = t.q ? t.q() : t.call(null);
        b[6] = c;
        return b;
      }();
      return ys(z);
    };
  }(h, c, d, e, f, g));
  return d;
}, Ss = function() {
  function a(a, b, c) {
    Ps(a, b, c);
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
function Ts(a, b) {
  var c = Array.prototype.slice.call(arguments), d = c.shift();
  if ("undefined" == typeof d) {
    throw Error("[goog.string.format] Template required");
  }
  return d.replace(/%([0\-\ \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(a, b, d, h, l, n, m, s) {
    if ("%" == n) {
      return "%";
    }
    var w = c.shift();
    if ("undefined" == typeof w) {
      throw Error("[goog.string.format] Not enough arguments");
    }
    arguments[0] = w;
    return Us[n].apply(null, arguments);
  });
}
var Us = {s:function(a, b, c) {
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
  return Us.f(parseInt(a, 10), b, c, d, 0, f, g, h);
}};
Us.i = Us.d;
Us.u = Us.d;
function Vs(a, b) {
  var c = nd(b) ? T.h(th, b) : b, d = R.h(c, El), e = R.h(c, Oj), f = R.h(c, Vi), c = R.h(c, nm);
  a.clearRect(c, f, e, d);
}
function Ws(a, b) {
  var c = nd(b) ? T.h(th, b) : b, d = R.h(c, El), e = R.h(c, Oj), f = R.h(c, Vi), c = R.h(c, nm);
  a.strokeRect(c, f, e, d);
}
function Xs(a, b) {
  var c = nd(b) ? T.h(th, b) : b, d = R.h(c, El), e = R.h(c, Oj), f = R.h(c, Vi), c = R.h(c, nm);
  a.fillRect(c, f, e, d);
}
function Ys(a, b) {
  var c = nd(b) ? T.h(th, b) : b, d = R.h(c, Vi), e = R.h(c, nm), c = R.h(c, Bn);
  a.fillText(c, e, d);
}
function Zs(a, b) {
  a.fillStyle = Zd(b);
}
function $s(a, b) {
  a.strokeStyle = Zd(b);
}
function at(a, b) {
  a.globalAlpha = b;
  return a;
}
var bt = function() {
  function a(a, b, c, g) {
    a.drawImage(b, c, g);
    return a;
  }
  function b(a, b, c) {
    var g = nd(c) ? T.h(th, c) : c;
    c = R.h(g, Am);
    var h = R.h(g, Wm), l = R.h(g, nm), n = R.h(g, Vi), m = R.h(g, jj), s = R.h(g, rj), w = R.h(g, Oj), x = R.h(g, Pj), t = R.h(g, zk), z = R.h(g, El), G = R.h(g, dm), H = R.h(g, im), g = P(g);
    if (r(mc.h ? mc.h(2, g) : mc.call(null, 2, g))) {
      a.drawImage(b, l, n);
    } else {
      if (r(mc.h ? mc.h(4, g) : mc.call(null, 4, g))) {
        a.drawImage(b, l, n, w, z);
      } else {
        if (r(mc.h ? mc.h(8, g) : mc.call(null, 8, g))) {
          a.drawImage(b, H, x, h, c, s, t, G, m);
        } else {
          throw Error("No matching clause: " + y.g(g));
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
  c.o = a;
  return c;
}(), ct = function() {
  function a(a, b, c, g, h, l, n) {
    a.bezierCurveTo(b, c, g, h, l, n);
    return a;
  }
  function b(a, b) {
    var c = nd(b) ? T.h(th, b) : b, g = R.h(c, Vi), h = R.h(c, nm), l = R.h(c, Zm), n = R.h(c, zl), m = R.h(c, bm), c = R.h(c, vl);
    a.bezierCurveTo(c, m, n, l, h, g);
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
  c.wa = a;
  return c;
}();
var dt = Mi.g(hf), et = Mi.g(25), ft = Mi.g(new q(null, 4, [Ym, new q(null, 2, [$, !0, ym, !0], null), Mj, new q(null, 2, [Jl, null, Hk, !0], null), cj, new q(null, 3, [$, null, Ui, null, pn, null], null), Dj, new q(null, 4, [Fl, fl, $, !0, Ui, null, pn, null], null)], null)), gt = function() {
  function a(a, b, c, g) {
    var h = a instanceof U ? function() {
      switch(a instanceof U ? a.ma : null) {
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
          throw Error("No matching clause: " + y.g(a));;
      }
    }() : a;
    return "hsla(" + y.g(h) + "," + y.g(Ld(100 * b)) + "%," + y.g(Ld(100 * c)) + "%," + y.g(g) + ")";
  }
  function b(a, b, f) {
    return c.o(a, b, f, 1);
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
  c.o = a;
  return c;
}();
function ht(a) {
  a = Ld(255 * a);
  return "rgb(" + y.g(a) + "," + y.g(a) + "," + y.g(a) + ")";
}
var it = new q(null, 5, [Ui, "white", $, gt.j(Ol, 1, .5), ym, gt.j(Ql, 1, .5), tl, gt.j(en, 1, .4), Ij, gt.o(Hj, 1, .75, .5)], null);
function jt() {
  return 5 * B(et) + 80;
}
function kt(a) {
  var b = jt(), c = 5 * B(et);
  return new W(null, 2, 5, X, [b + c - 5 * (a + 1), 10], null);
}
var lt = function() {
  function a(a, b) {
    return jf.j(xd, kt(b), c.g(a));
  }
  function b(a) {
    return new W(null, 2, 5, X, [2.5, 5 * (a + .5)], null);
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
function mt(a) {
  var b = 5 * B(et);
  return new W(null, 2, 5, X, [b - 5 * (a + 1), 10], null);
}
var nt = function() {
  function a(a, b) {
    return jf.j(xd, mt(b), c.g(a));
  }
  function b(a) {
    return new W(null, 2, 5, X, [0, 2 * a], null);
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
function ot(a, b) {
  var c = nt.h(a, b), d = Q.j(c, 0, null), c = Q.j(c, 1, null);
  return new W(null, 2, 5, X, [d + 2.5, c + 1], null);
}
function pt(a, b, c, d) {
  return new q(null, 4, [nm, a - c / 2, Vi, b - d / 2, Oj, c, El, d], null);
}
function qt(a, b) {
  $s(a, Ij.g(it));
  a.lineWidth = 3;
  Ws(a, b);
  $s(a, "black");
  a.lineWidth = 1;
  Ws(a, b);
}
function rt(a, b, c) {
  a.beginPath();
  b = F(b);
  for (var d = null, e = 0, f = 0;;) {
    if (f < e) {
      var g = d.H(null, f), h = nt.g(g), g = Q.j(h, 0, null), h = Q.j(h, 1, null);
      a.rect(g, h, 4.25, 1.7);
      f += 1;
    } else {
      if (b = F(b)) {
        jd(b) ? (e = C(b), b = E(b), d = e, e = P(e)) : (d = I(b), e = nt.g(d), d = Q.j(e, 0, null), e = Q.j(e, 1, null), a.rect(d, e, 4.25, 1.7), b = L(b), d = null, e = 0), f = 0;
      } else {
        break;
      }
    }
  }
  Zs(a, c);
  a.fill();
}
function st(a, b) {
  a.beginPath();
  Zs(a, ym.g(it));
  for (var c = F(b), d = null, e = 0, f = 0;;) {
    if (f < e) {
      var g = d.H(null, f), h = Q.j(g, 0, null), l = Q.j(g, 1, null), h = nt.g(h), g = Q.j(h, 0, null), h = Q.j(h, 1, null);
      at(a, .5 * function() {
        var a = l / 8;
        return 1 < a ? 1 : a;
      }());
      a.fillRect(g, h, 4.25, 1.7);
      f += 1;
    } else {
      if (c = F(c)) {
        if (jd(c)) {
          e = C(c), c = E(c), d = e, e = P(e);
        } else {
          var d = I(c), e = Q.j(d, 0, null), n = Q.j(d, 1, null), e = nt.g(e), d = Q.j(e, 0, null), e = Q.j(e, 1, null);
          at(a, .5 * function() {
            var a = n / 8;
            return 1 < a ? 1 : a;
          }());
          a.fillRect(d, e, 4.25, 1.7);
          c = L(c);
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
function tt(a, b, c) {
  var d = ot(0, b), e = Q.j(d, 0, null), d = Q.j(d, 1, null);
  b = ot(c - 1, b);
  Q.j(b, 0, null);
  b = Q.j(b, 1, null);
  qt(a, pt(e, (d + b) / 2, 6, 12 + (b - d)));
}
function ut(a, b, c, d) {
  a.arc(b, c, d, 0, 2 * Math.PI, !0);
}
function vt(a, b) {
  var c = a.h ? a.h(b, Ui) : a.call(null, b, Ui), d = it.g ? it.g(c) : it.call(null, c);
  r(d) ? c = d : (c /= 10, c = ht(Ld(16 * (1 - (1 < c ? 1 : c))) / 16));
  return c;
}
function wt(a, b, c, d) {
  var e = lt.h(0, b), f = Q.j(e, 0, null), e = Q.j(e, 1, null);
  b = lt.h(d - 1, b);
  Q.j(b, 0, null);
  b = Q.j(b, 1, null);
  qt(a, pt(f, (e + b) / 2, 6, 15 + (b - e)));
  r(c) && (e = lt.h(c, 0), f = Q.j(e, 0, null), e = Q.j(e, 1, null), b = lt.h(c, B(et) - 1), c = Q.j(b, 0, null), Q.j(b, 1, null), b = (f + c) / 2, c = 15 + (Math.abs.g ? Math.abs.g(c - f) : Math.abs.call(null, c - f)), qt(a, pt(b, e, c, 6)));
}
function xt(a, b, c, d) {
  a.save();
  a.lineWidth = 1;
  b = F(b);
  for (var e = null, f = 0, g = 0;;) {
    if (g < f) {
      var h = e.H(null, g), l = Q.j(h, 0, null), n = Q.j(h, 1, null), m = lt.h(l, c), s = Q.j(m, 0, null), w = Q.j(m, 1, null), x = Af.h(d, new W(null, 2, 5, X, [cj, pn], null)), h = function(b, d, e, f, g, h, l, m) {
        return function(b, d) {
          $s(a, r(d) ? "red" : "black");
          for (var e = F(b), f = null, g = 0, n = 0;;) {
            if (n < g) {
              var s = f.H(null, n), w = Q.j(s, 0, null), s = Q.j(s, 1, null), t = ot(w, c), w = Q.j(t, 0, null), t = Q.j(t, 1, null), x = a;
              at(x, r(m) ? s : 1);
              x.beginPath();
              x.moveTo(h - 1, l);
              x.lineTo(w, t);
              x.stroke();
              n += 1;
            } else {
              if (s = F(e)) {
                e = s, jd(e) ? (f = C(e), e = E(e), s = f, g = P(f), f = s) : (s = I(e), w = Q.j(s, 0, null), s = Q.j(s, 1, null), g = ot(w, c), f = Q.j(g, 0, null), g = Q.j(g, 1, null), n = a, at(n, r(m) ? s : 1), n.beginPath(), n.moveTo(h - 1, l), n.lineTo(f, g), n.stroke(), e = L(e), f = null, g = 0), n = 0;
              } else {
                return null;
              }
            }
          }
        };
      }(b, e, f, g, m, s, w, x, h, l, n);
      h(Ui.g(n), !1);
      h($.g(n), !0);
      g += 1;
    } else {
      if (l = F(b)) {
        n = l;
        if (jd(n)) {
          b = C(n), g = E(n), e = b, f = P(b), b = g;
        } else {
          var m = I(n), s = Q.j(m, 0, null), h = Q.j(m, 1, null), w = lt.h(s, c), x = Q.j(w, 0, null), t = Q.j(w, 1, null), z = Af.h(d, new W(null, 2, 5, X, [cj, pn], null));
          b = function(b, d, e, f, g, h, l, m) {
            return function(b, d) {
              $s(a, r(d) ? "red" : "black");
              for (var e = F(b), f = null, g = 0, n = 0;;) {
                if (n < g) {
                  var s = f.H(null, n), w = Q.j(s, 0, null), s = Q.j(s, 1, null), t = ot(w, c), w = Q.j(t, 0, null), t = Q.j(t, 1, null), x = a;
                  at(x, r(m) ? s : 1);
                  x.beginPath();
                  x.moveTo(h - 1, l);
                  x.lineTo(w, t);
                  x.stroke();
                  n += 1;
                } else {
                  if (s = F(e)) {
                    e = s, jd(e) ? (f = C(e), e = E(e), s = f, g = P(f), f = s) : (s = I(e), w = Q.j(s, 0, null), s = Q.j(s, 1, null), g = ot(w, c), f = Q.j(g, 0, null), g = Q.j(g, 1, null), n = a, at(n, r(m) ? s : 1), n.beginPath(), n.moveTo(h - 1, l), n.lineTo(f, g), n.stroke(), e = L(e), f = null, g = 0), n = 0;
                  } else {
                    return null;
                  }
                }
              }
            };
          }(b, e, f, g, w, x, t, z, m, s, h, n, l);
          b(Ui.g(h), !1);
          b($.g(h), !0);
          b = L(n);
          e = null;
          f = 0;
        }
        g = 0;
      } else {
        break;
      }
    }
  }
  a.restore();
}
function yt(a, b, c) {
  return Si(function(a) {
    var e = Q.j(a, 0, null);
    a = Q.j(a, 1, null);
    return new W(null, 2, 5, X, [a >= c ? Ak : Bj, r(b.g ? b.g(e) : b.call(null, e)) ? $ : Ui], null);
  }, a);
}
function zt(a, b, c) {
  b = Hh(cf(function(a) {
    var b = Q.j(a, 0, null);
    Q.j(a, 1, null);
    return mc.h(b, c);
  }, b));
  if (F(b)) {
    var d = Af.h(a, new W(null, 2, 5, X, [Mj, c], null)), e = Bl.g(a), f = Wk.g(a), g = mc.h(P(b), P($m.g(d)));
    return oo(d, g, b, f, e, ql.g(a));
  }
  return null;
}
function At(a, b, c, d, e, f) {
  a.save();
  var g = Af.h(d, new W(null, 2, 5, X, [Mj, b], null)), h = ql.g(d), l = Zk.g(ql.g(e)), n = Pl.g(h), m = Bl.g(d), s = Wk.g(d), w = Af.h(e, new W(null, 2, 5, X, [Yk, b], null)), x = Af.h(e, new W(null, 2, 5, X, [gn, b], null)), t = Bl.g(e), z = zt(d, t, b), G = $m.g(g), H = P(G), M = Se.h(Me.h(P, Sk), G), K = Se.h(Ne.h(Bd, 1), M), Y = T.h(xd, K), da = jt() + 5 * B(et) + 80, ga = jt() + 5 * B(et) + 80 + 30 + 20, D = .95 * window.innerHeight, bb = window.pageYOffset + 20, Aa = function(a, b, c, d, e, 
  f, g, h, l, m, n, s, w, t, x, z, D, G, H) {
    return function(a, b) {
      var c = T.j(xd, b, Ue(a, t)) / x;
      return new W(null, 2, 5, X, [D + 15, H + 10 + c * G], null);
    };
  }(g, h, l, n, m, s, w, x, t, z, G, H, M, K, Y, da, ga, D, bb), Ba = function(a, b, c, d, e, f, g, h, l, m, n, s, w, t, x, z, D, G, H, K) {
    return function(a) {
      a = K(a, 0);
      Q.j(a, 0, null);
      a = Q.j(a, 1, null);
      return new W(null, 2, 5, X, [z, a], null);
    };
  }(g, h, l, n, m, s, w, x, t, z, G, H, M, K, Y, da, ga, D, bb, Aa), ib = lt.h(b, 0), Zc = Q.j(ib, 0, null), $c = Q.j(ib, 1, null), Gb = function(a, b, c, d, e, f, g, h, l, m, n, s, w, t, x, z, D, G, H, K, M, Aa, Ba, Y) {
    return function(a, b) {
      var c = M(b), d = Q.j(c, 0, null), c = Q.j(c, 1, null);
      a.beginPath();
      a.moveTo(Ba + 2.5 + 1, Y);
      var e = (d - Ba) / 3;
      ct.wa(a, d - e, Y, Ba + e, c, d, c);
      a.stroke();
      return a;
    };
  }(g, h, l, n, m, s, w, x, t, z, G, H, M, K, Y, da, ga, D, bb, Aa, Ba, ib, Zc, $c), kb = function(a, b, c, d, e, f, g, h, l, m, n, s, w, t, x, z, D, G, H, K, M) {
    return function(a, b, c) {
      var d = M(b), e = Q.j(d, 0, null), d = Q.j(d, 1, null);
      c = K(b, c);
      b = Q.j(c, 0, null);
      c = Q.j(c, 1, null);
      a.beginPath();
      a.moveTo(b, c);
      a.lineTo(e + 10, d);
      a.stroke();
      return a;
    };
  }(g, h, l, n, m, s, w, x, t, z, G, H, M, K, Y, da, ga, D, bb, Aa, Ba, ib, Zc, $c, Gb);
  a.lineWidth = 5;
  $s(a, Ui.g(it));
  for (var ne = F(Oe(Wf, G)), dc = null, oe = 0, Cd = 0;;) {
    if (Cd < oe) {
      var Zh = dc.H(null, Cd), $h = Q.j(Zh, 0, null), ec = Q.j(Zh, 1, null), Ic = nd(ec) ? T.h(th, ec) : ec, Qb = R.h(Ic, Sk);
      Gb(a, $h);
      for (var Hb = F(Rh.g(P(Qb))), Dd = null, yg = 0, pe = 0;;) {
        if (pe < yg) {
          var om = Dd.H(null, pe);
          kb(a, $h, om);
          pe += 1;
        } else {
          var Wj = F(Hb);
          if (Wj) {
            var kf = Wj;
            if (jd(kf)) {
              var Xj = C(kf), pm = E(kf), Yj = Xj, qm = P(Xj), Hb = pm, Dd = Yj, yg = qm
            } else {
              var Zj = I(kf);
              kb(a, $h, Zj);
              Hb = L(kf);
              Dd = null;
              yg = 0;
            }
            pe = 0;
          } else {
            break;
          }
        }
      }
      Cd += 1;
    } else {
      var ak = F(ne);
      if (ak) {
        var lf = ak;
        if (jd(lf)) {
          var ai = C(lf), Rb = E(lf), Jc = ai, rm = P(ai), ne = Rb, dc = Jc, oe = rm
        } else {
          var bk = I(lf), bi = Q.j(bk, 0, null), ci = Q.j(bk, 1, null), ck = nd(ci) ? T.h(th, ci) : ci, dk = R.h(ck, Sk);
          Gb(a, bi);
          for (var di = F(Rh.g(P(dk))), ei = null, zg = 0, Ib = 0;;) {
            if (Ib < zg) {
              var sm = ei.H(null, Ib);
              kb(a, bi, sm);
              Ib += 1;
            } else {
              var Ag = F(di);
              if (Ag) {
                var mf = Ag;
                if (jd(mf)) {
                  var fi = C(mf), tm = E(mf), ek = fi, fk = P(fi), di = tm, ei = ek, zg = fk
                } else {
                  var um = I(mf);
                  kb(a, bi, um);
                  di = L(mf);
                  ei = null;
                  zg = 0;
                }
                Ib = 0;
              } else {
                break;
              }
            }
          }
          ne = L(lf);
          dc = null;
          oe = 0;
        }
        Cd = 0;
      } else {
        break;
      }
    }
  }
  for (var fc = F(Oe(Wf, G)), Sb = null, gc = 0, yb = 0;;) {
    if (yb < gc) {
      var Ed = Sb.H(null, yb), Tb = Q.j(Ed, 0, null), ad = Q.j(Ed, 1, null), qe = nd(ad) ? T.h(th, ad) : ad, re = R.h(qe, Sk), se = Ba(Tb), Kc = Q.j(se, 0, null), Fd = Q.j(se, 1, null), Gd = new W(null, 2, 5, X, [b, Tb], null), bd = t.g ? t.g(Gd) : t.call(null, Gd), Lc = mc.h(Gd, jm.g(z)), te = jf.h(function(a, b, c, d, e, f, g, h, l, m, n, s, w, t, x, z, D, G, H, K) {
        return function(a) {
          return yt(Vk.g(a), K, H);
        };
      }(fc, Sb, gc, yb, se, Kc, Fd, Gd, bd, Lc, Ed, Tb, ad, qe, re, g, h, l, n, m, s, w, x, t, z, G, H, M, K, Y, da, ga, D, bb, Aa, Ba, ib, Zc, $c, Gb, kb), re), Hd = function(a, b, c, d, e, f, g, h, l, m, n, s, w, t, x, z, D, G, H) {
        return function(a) {
          return P(a.g ? a.g(new W(null, 2, 5, X, [Ak, $], null)) : a.call(null, new W(null, 2, 5, X, [Ak, $], null))) >= H;
        };
      }(fc, Sb, gc, yb, se, Kc, Fd, Gd, bd, Lc, te, Ed, Tb, ad, qe, re, g, h, l, n, m, s, w, x, t, z, G, H, M, K, Y, da, ga, D, bb, Aa, Ba, ib, Zc, $c, Gb, kb), nf = r(function() {
        var a = bd;
        return r(a) ? Ie(Hd, te) : a;
      }()) ? tl : r(Ie(Hd, te)) ? ym : r(bd) ? $ : u ? Ui : null;
      if (r(bd)) {
        var gi = a;
        $s(gi, $.g(it));
        gi.lineWidth = 2;
        Gb(gi, Tb);
      }
      if (Lc) {
        var Bg = a;
        Zs(Bg, Ij.g(it));
        Bg.beginPath();
        ut(Bg, Kc, Fd, 18);
        Bg.fill();
      }
      var cd = a;
      Zs(cd, it.g ? it.g(nf) : it.call(null, nf));
      $s(cd, "black");
      cd.lineWidth = 1;
      cd.beginPath();
      ut(cd, Kc, Fd, 10);
      cd.stroke();
      cd.fill();
      Zs(a, "black");
      Ys(a, new q(null, 3, [Bn, "cell " + y.g(Tb) + y.g(Lc ? "   (learning on " + y.g(function() {
        var a = vj.g(z);
        return r(a) ? "segment " + y.g(a) : "new segment";
      }()) + ")" : null), nm, Kc, Vi, Fd - 10 - 5], null));
      for (var ue = F(Oe(Wf, te)), of = null, ve = 0, dd = 0;;) {
        if (dd < ve) {
          var hi = of.H(null, dd), pf = Q.j(hi, 0, null), Xa = Q.j(hi, 1, null), Cg = Aa(Tb, pf), qf = Q.j(Cg, 0, null), we = Q.j(Cg, 1, null), Dg = P(Xa.g ? Xa.g(new W(null, 2, 5, X, [Ak, $], null)) : Xa.call(null, new W(null, 2, 5, X, [Ak, $], null))), xe = Dg + P(Xa.g ? Xa.g(new W(null, 2, 5, X, [Ak, Ui], null)) : Xa.call(null, new W(null, 2, 5, X, [Ak, Ui], null))), Eg = P(Xa.g ? Xa.g(new W(null, 2, 5, X, [Bj, $], null)) : Xa.call(null, new W(null, 2, 5, X, [Bj, $], null))), gk = Eg + P(Xa.g ? 
          Xa.g(new W(null, 2, 5, X, [Bj, Ui], null)) : Xa.call(null, new W(null, 2, 5, X, [Bj, Ui], null))), ii = function() {
            var a = Dg / l;
            return 1 > a ? a : 1;
          }(), ji = Lc && mc.h(pf, vj.g(z)), ki = pt(qf, we, 30, 10), vm = pt(qf, we, 38, 18);
          if (ji) {
            var rf = a;
            Zs(rf, Ij.g(it));
            Xs(rf, vm);
          }
          var hc = a;
          at(hc, 1);
          $s(hc, "black");
          hc.lineWidth = 1;
          Ws(hc, ki);
          Zs(hc, "white");
          Xs(hc, ki);
          at(hc, ii);
          Zs(hc, $.g(it));
          Xs(hc, ki);
          at(hc, 1);
          if (Hd(Xa)) {
            var Fg = a;
            $s(Fg, $.g(it));
            Fg.lineWidth = 2;
            kb(Fg, Tb, pf);
          }
          Zs(a, "black");
          Ys(a, new q(null, 3, [Bn, "[" + y.g(pf) + "],  active / conn. \x3d " + y.g(Dg) + " / " + y.g(xe), nm, qf + 5 + 15, Vi, we - 5], null));
          Ys(a, new q(null, 3, [Bn, "   active / disconn. \x3d " + y.g(Eg) + " / " + y.g(gk), nm, qf + 5 + 15, Vi, we + 5], null));
          a.lineWidth = 1;
          var hk = Af.h(f, new W(null, 2, 5, X, [Dj, pn], null)), ik = function(b, d, e, f, g, h, l, m, n, s, w, t) {
            return function(b, d, e) {
              $s(a, r(r(d) ? e : d) ? "red" : r(r(d) ? xa(e) : d) ? "black" : r(e) ? gt.j(Ol, .5, .5) : xa(e) ? ht(.5) : null);
              b = F(b);
              d = null;
              for (var f = e = 0;;) {
                if (f < e) {
                  var g = d.H(null, f), h = Q.j(g, 0, null), l = Q.j(h, 0, null);
                  Q.j(h, 1, null);
                  var g = Q.j(g, 1, null), h = lt.h(l, c + 1), l = Q.j(h, 0, null), h = Q.j(h, 1, null), m = a;
                  at(m, r(n) ? g : 1);
                  m.beginPath();
                  m.moveTo(w, t);
                  m.lineTo(l + 1, h);
                  m.stroke();
                  f += 1;
                } else {
                  if (b = F(b)) {
                    jd(b) ? (e = C(b), b = E(b), d = e, e = P(e)) : (d = I(b), f = Q.j(d, 0, null), e = Q.j(f, 0, null), Q.j(f, 1, null), d = Q.j(d, 1, null), f = lt.h(e, c + 1), e = Q.j(f, 0, null), f = Q.j(f, 1, null), g = a, at(g, r(n) ? d : 1), g.beginPath(), g.moveTo(w, t), g.lineTo(e + 1, f), g.stroke(), b = L(b), d = null, e = 0), f = 0;
                  } else {
                    break;
                  }
                }
              }
              return at(a, 1);
            };
          }(ue, of, ve, dd, fc, Sb, gc, yb, hk, Cg, qf, we, Dg, xe, Eg, gk, ii, ji, hi, pf, Xa, se, Kc, Fd, Gd, bd, Lc, te, Hd, nf, Ed, Tb, ad, qe, re, g, h, l, n, m, s, w, x, t, z, G, H, M, K, Y, da, ga, D, bb, Aa, Ba, ib, Zc, $c, Gb, kb), jk = Af.h(f, new W(null, 2, 5, X, [Dj, Fl], null));
          if (mc.h(jk, Xk) || mc.h(jk, fl) && ji) {
            r(Af.h(f, new W(null, 2, 5, X, [Dj, Ui], null))) && ik(Xa.g ? Xa.g(new W(null, 2, 5, X, [Ak, Ui], null)) : Xa.call(null, new W(null, 2, 5, X, [Ak, Ui], null)), !0, !1), r(Af.h(f, new W(null, 2, 5, X, [Dj, $], null))) && ik(Xa.g ? Xa.g(new W(null, 2, 5, X, [Ak, $], null)) : Xa.call(null, new W(null, 2, 5, X, [Ak, $], null)), !0, !0);
          }
          dd += 1;
        } else {
          var Gg = F(ue);
          if (Gg) {
            var Id = Gg;
            if (jd(Id)) {
              var kk = C(Id), wm = E(Id), au = kk, bu = P(kk), ue = wm, of = au, ve = bu
            } else {
              var Bm = I(Id), oi = Q.j(Bm, 0, null), lb = Q.j(Bm, 1, null), Cm = Aa(Tb, oi), pi = Q.j(Cm, 0, null), qi = Q.j(Cm, 1, null), lk = P(lb.g ? lb.g(new W(null, 2, 5, X, [Ak, $], null)) : lb.call(null, new W(null, 2, 5, X, [Ak, $], null))), Kp = lk + P(lb.g ? lb.g(new W(null, 2, 5, X, [Ak, Ui], null)) : lb.call(null, new W(null, 2, 5, X, [Ak, Ui], null))), Dm = P(lb.g ? lb.g(new W(null, 2, 5, X, [Bj, $], null)) : lb.call(null, new W(null, 2, 5, X, [Bj, $], null))), Lp = Dm + P(lb.g ? lb.g(new W(null, 
              2, 5, X, [Bj, Ui], null)) : lb.call(null, new W(null, 2, 5, X, [Bj, Ui], null))), Mp = function() {
                var a = lk / l;
                return 1 > a ? a : 1;
              }(), Em = Lc && mc.h(oi, vj.g(z)), Fm = pt(pi, qi, 30, 10), cu = pt(pi, qi, 38, 18);
              if (Em) {
                var Np = a;
                Zs(Np, Ij.g(it));
                Xs(Np, cu);
              }
              var fd = a;
              at(fd, 1);
              $s(fd, "black");
              fd.lineWidth = 1;
              Ws(fd, Fm);
              Zs(fd, "white");
              Xs(fd, Fm);
              at(fd, Mp);
              Zs(fd, $.g(it));
              Xs(fd, Fm);
              at(fd, 1);
              if (Hd(lb)) {
                var Gm = a;
                $s(Gm, $.g(it));
                Gm.lineWidth = 2;
                kb(Gm, Tb, oi);
              }
              Zs(a, "black");
              Ys(a, new q(null, 3, [Bn, "[" + y.g(oi) + "],  active / conn. \x3d " + y.g(lk) + " / " + y.g(Kp), nm, pi + 5 + 15, Vi, qi - 5], null));
              Ys(a, new q(null, 3, [Bn, "   active / disconn. \x3d " + y.g(Dm) + " / " + y.g(Lp), nm, pi + 5 + 15, Vi, qi + 5], null));
              a.lineWidth = 1;
              var du = Af.h(f, new W(null, 2, 5, X, [Dj, pn], null)), Op = function(b, d, e, f, g, h, l, m, n, s, w, t) {
                return function(b, d, e) {
                  $s(a, r(r(d) ? e : d) ? "red" : r(r(d) ? xa(e) : d) ? "black" : r(e) ? gt.j(Ol, .5, .5) : xa(e) ? ht(.5) : null);
                  b = F(b);
                  d = null;
                  for (var f = e = 0;;) {
                    if (f < e) {
                      var g = d.H(null, f), h = Q.j(g, 0, null), l = Q.j(h, 0, null);
                      Q.j(h, 1, null);
                      var g = Q.j(g, 1, null), h = lt.h(l, c + 1), l = Q.j(h, 0, null), h = Q.j(h, 1, null), m = a;
                      at(m, r(n) ? g : 1);
                      m.beginPath();
                      m.moveTo(w, t);
                      m.lineTo(l + 1, h);
                      m.stroke();
                      f += 1;
                    } else {
                      if (b = F(b)) {
                        jd(b) ? (e = C(b), b = E(b), d = e, e = P(e)) : (d = I(b), f = Q.j(d, 0, null), e = Q.j(f, 0, null), Q.j(f, 1, null), d = Q.j(d, 1, null), f = lt.h(e, c + 1), e = Q.j(f, 0, null), f = Q.j(f, 1, null), g = a, at(g, r(n) ? d : 1), g.beginPath(), g.moveTo(w, t), g.lineTo(e + 1, f), g.stroke(), b = L(b), d = null, e = 0), f = 0;
                      } else {
                        break;
                      }
                    }
                  }
                  return at(a, 1);
                };
              }(ue, of, ve, dd, fc, Sb, gc, yb, du, Cm, pi, qi, lk, Kp, Dm, Lp, Mp, Em, Bm, oi, lb, Id, Gg, se, Kc, Fd, Gd, bd, Lc, te, Hd, nf, Ed, Tb, ad, qe, re, g, h, l, n, m, s, w, x, t, z, G, H, M, K, Y, da, ga, D, bb, Aa, Ba, ib, Zc, $c, Gb, kb), Pp = Af.h(f, new W(null, 2, 5, X, [Dj, Fl], null));
              if (mc.h(Pp, Xk) || mc.h(Pp, fl) && Em) {
                r(Af.h(f, new W(null, 2, 5, X, [Dj, Ui], null))) && Op(lb.g ? lb.g(new W(null, 2, 5, X, [Ak, Ui], null)) : lb.call(null, new W(null, 2, 5, X, [Ak, Ui], null)), !0, !1), r(Af.h(f, new W(null, 2, 5, X, [Dj, $], null))) && Op(lb.g ? lb.g(new W(null, 2, 5, X, [Ak, $], null)) : lb.call(null, new W(null, 2, 5, X, [Ak, $], null)), !0, !0);
              }
              ue = L(Id);
              of = null;
              ve = 0;
            }
            dd = 0;
          } else {
            break;
          }
        }
      }
      yb += 1;
    } else {
      var Lg = F(fc);
      if (Lg) {
        var Jd = Lg;
        if (jd(Jd)) {
          var Qp = C(Jd), eu = E(Jd), fu = Qp, gu = P(Qp), fc = eu, Sb = fu, gc = gu
        } else {
          var Mg = I(Jd), tc = Q.j(Mg, 0, null), sf = Q.j(Mg, 1, null), ri = nd(sf) ? T.h(th, sf) : sf, si = R.h(ri, Sk), Ng = Ba(tc), tf = Q.j(Ng, 0, null), uf = Q.j(Ng, 1, null), vf = new W(null, 2, 5, X, [b, tc], null), wf = t.g ? t.g(vf) : t.call(null, vf), Ce = mc.h(vf, jm.g(z)), Og = jf.h(function(a, b, c, d, e, f, g, h, l, m, n, s, w, t, x, z, D, G, H, K, M, Ba) {
            return function(a) {
              return yt(Vk.g(a), Ba, M);
            };
          }(fc, Sb, gc, yb, Ng, tf, uf, vf, wf, Ce, Mg, tc, sf, ri, si, Jd, Lg, g, h, l, n, m, s, w, x, t, z, G, H, M, K, Y, da, ga, D, bb, Aa, Ba, ib, Zc, $c, Gb, kb), si), Pg = function(a, b, c, d, e, f, g, h, l, m, n, s, w, t, x, z, D, G, H, K, M) {
            return function(a) {
              return P(a.g ? a.g(new W(null, 2, 5, X, [Ak, $], null)) : a.call(null, new W(null, 2, 5, X, [Ak, $], null))) >= M;
            };
          }(fc, Sb, gc, yb, Ng, tf, uf, vf, wf, Ce, Og, Mg, tc, sf, ri, si, Jd, Lg, g, h, l, n, m, s, w, x, t, z, G, H, M, K, Y, da, ga, D, bb, Aa, Ba, ib, Zc, $c, Gb, kb), mk = r(function() {
            var a = wf;
            return r(a) ? Ie(Pg, Og) : a;
          }()) ? tl : r(Ie(Pg, Og)) ? ym : r(wf) ? $ : u ? Ui : null;
          if (r(wf)) {
            var Hm = a;
            $s(Hm, $.g(it));
            Hm.lineWidth = 2;
            Gb(Hm, tc);
          }
          if (Ce) {
            var nk = a;
            Zs(nk, Ij.g(it));
            nk.beginPath();
            ut(nk, tf, uf, 18);
            nk.fill();
          }
          var xf = a;
          Zs(xf, it.g ? it.g(mk) : it.call(null, mk));
          $s(xf, "black");
          xf.lineWidth = 1;
          xf.beginPath();
          ut(xf, tf, uf, 10);
          xf.stroke();
          xf.fill();
          Zs(a, "black");
          Ys(a, new q(null, 3, [Bn, "cell " + y.g(tc) + y.g(Ce ? "   (learning on " + y.g(function() {
            var a = vj.g(z);
            return r(a) ? "segment " + y.g(a) : "new segment";
          }()) + ")" : null), nm, tf, Vi, uf - 10 - 5], null));
          for (var ti = F(Oe(Wf, Og)), ui = null, vi = 0, yf = 0;;) {
            if (yf < vi) {
              var Im = ui.H(null, yf), wi = Q.j(Im, 0, null), mb = Q.j(Im, 1, null), Jm = Aa(tc, wi), xi = Q.j(Jm, 0, null), yi = Q.j(Jm, 1, null), ok = P(mb.g ? mb.g(new W(null, 2, 5, X, [Ak, $], null)) : mb.call(null, new W(null, 2, 5, X, [Ak, $], null))), Rp = ok + P(mb.g ? mb.g(new W(null, 2, 5, X, [Ak, Ui], null)) : mb.call(null, new W(null, 2, 5, X, [Ak, Ui], null))), Km = P(mb.g ? mb.g(new W(null, 2, 5, X, [Bj, $], null)) : mb.call(null, new W(null, 2, 5, X, [Bj, $], null))), Sp = Km + P(mb.g ? 
              mb.g(new W(null, 2, 5, X, [Bj, Ui], null)) : mb.call(null, new W(null, 2, 5, X, [Bj, Ui], null))), Tp = function() {
                var a = ok / l;
                return 1 > a ? a : 1;
              }(), Lm = Ce && mc.h(wi, vj.g(z)), Mm = pt(xi, yi, 30, 10), hu = pt(xi, yi, 38, 18);
              if (Lm) {
                var Up = a;
                Zs(Up, Ij.g(it));
                Xs(Up, hu);
              }
              var gd = a;
              at(gd, 1);
              $s(gd, "black");
              gd.lineWidth = 1;
              Ws(gd, Mm);
              Zs(gd, "white");
              Xs(gd, Mm);
              at(gd, Tp);
              Zs(gd, $.g(it));
              Xs(gd, Mm);
              at(gd, 1);
              if (Pg(mb)) {
                var Nm = a;
                $s(Nm, $.g(it));
                Nm.lineWidth = 2;
                kb(Nm, tc, wi);
              }
              Zs(a, "black");
              Ys(a, new q(null, 3, [Bn, "[" + y.g(wi) + "],  active / conn. \x3d " + y.g(ok) + " / " + y.g(Rp), nm, xi + 5 + 15, Vi, yi - 5], null));
              Ys(a, new q(null, 3, [Bn, "   active / disconn. \x3d " + y.g(Km) + " / " + y.g(Sp), nm, xi + 5 + 15, Vi, yi + 5], null));
              a.lineWidth = 1;
              var iu = Af.h(f, new W(null, 2, 5, X, [Dj, pn], null)), Vp = function(b, d, e, f, g, h, l, m, n, s, w, t) {
                return function(b, d, e) {
                  $s(a, r(r(d) ? e : d) ? "red" : r(r(d) ? xa(e) : d) ? "black" : r(e) ? gt.j(Ol, .5, .5) : xa(e) ? ht(.5) : null);
                  b = F(b);
                  d = null;
                  for (var f = e = 0;;) {
                    if (f < e) {
                      var g = d.H(null, f), h = Q.j(g, 0, null), l = Q.j(h, 0, null);
                      Q.j(h, 1, null);
                      var g = Q.j(g, 1, null), h = lt.h(l, c + 1), l = Q.j(h, 0, null), h = Q.j(h, 1, null), m = a;
                      at(m, r(n) ? g : 1);
                      m.beginPath();
                      m.moveTo(w, t);
                      m.lineTo(l + 1, h);
                      m.stroke();
                      f += 1;
                    } else {
                      if (b = F(b)) {
                        jd(b) ? (e = C(b), b = E(b), d = e, e = P(e)) : (d = I(b), f = Q.j(d, 0, null), e = Q.j(f, 0, null), Q.j(f, 1, null), d = Q.j(d, 1, null), f = lt.h(e, c + 1), e = Q.j(f, 0, null), f = Q.j(f, 1, null), g = a, at(g, r(n) ? d : 1), g.beginPath(), g.moveTo(w, t), g.lineTo(e + 1, f), g.stroke(), b = L(b), d = null, e = 0), f = 0;
                      } else {
                        break;
                      }
                    }
                  }
                  return at(a, 1);
                };
              }(ti, ui, vi, yf, fc, Sb, gc, yb, iu, Jm, xi, yi, ok, Rp, Km, Sp, Tp, Lm, Im, wi, mb, Ng, tf, uf, vf, wf, Ce, Og, Pg, mk, Mg, tc, sf, ri, si, Jd, Lg, g, h, l, n, m, s, w, x, t, z, G, H, M, K, Y, da, ga, D, bb, Aa, Ba, ib, Zc, $c, Gb, kb), Wp = Af.h(f, new W(null, 2, 5, X, [Dj, Fl], null));
              if (mc.h(Wp, Xk) || mc.h(Wp, fl) && Lm) {
                r(Af.h(f, new W(null, 2, 5, X, [Dj, Ui], null))) && Vp(mb.g ? mb.g(new W(null, 2, 5, X, [Ak, Ui], null)) : mb.call(null, new W(null, 2, 5, X, [Ak, Ui], null)), !0, !1), r(Af.h(f, new W(null, 2, 5, X, [Dj, $], null))) && Vp(mb.g ? mb.g(new W(null, 2, 5, X, [Ak, $], null)) : mb.call(null, new W(null, 2, 5, X, [Ak, $], null)), !0, !0);
              }
              yf += 1;
            } else {
              var Om = F(ti);
              if (Om) {
                var Qg = Om;
                if (jd(Qg)) {
                  var Xp = C(Qg), ju = E(Qg), ku = Xp, lu = P(Xp), ti = ju, ui = ku, vi = lu
                } else {
                  var Pm = I(Qg), zi = Q.j(Pm, 0, null), nb = Q.j(Pm, 1, null), Qm = Aa(tc, zi), Ai = Q.j(Qm, 0, null), Bi = Q.j(Qm, 1, null), pk = P(nb.g ? nb.g(new W(null, 2, 5, X, [Ak, $], null)) : nb.call(null, new W(null, 2, 5, X, [Ak, $], null))), Yp = pk + P(nb.g ? nb.g(new W(null, 2, 5, X, [Ak, Ui], null)) : nb.call(null, new W(null, 2, 5, X, [Ak, Ui], null))), Rm = P(nb.g ? nb.g(new W(null, 2, 5, X, [Bj, $], null)) : nb.call(null, new W(null, 2, 5, X, [Bj, $], null))), Zp = Rm + P(nb.g ? 
                  nb.g(new W(null, 2, 5, X, [Bj, Ui], null)) : nb.call(null, new W(null, 2, 5, X, [Bj, Ui], null))), $p = function() {
                    var a = pk / l;
                    return 1 > a ? a : 1;
                  }(), Sm = Ce && mc.h(zi, vj.g(z)), Tm = pt(Ai, Bi, 30, 10), mu = pt(Ai, Bi, 38, 18);
                  if (Sm) {
                    var aq = a;
                    Zs(aq, Ij.g(it));
                    Xs(aq, mu);
                  }
                  var hd = a;
                  at(hd, 1);
                  $s(hd, "black");
                  hd.lineWidth = 1;
                  Ws(hd, Tm);
                  Zs(hd, "white");
                  Xs(hd, Tm);
                  at(hd, $p);
                  Zs(hd, $.g(it));
                  Xs(hd, Tm);
                  at(hd, 1);
                  if (Pg(nb)) {
                    var Um = a;
                    $s(Um, $.g(it));
                    Um.lineWidth = 2;
                    kb(Um, tc, zi);
                  }
                  Zs(a, "black");
                  Ys(a, new q(null, 3, [Bn, "[" + y.g(zi) + "],  active / conn. \x3d " + y.g(pk) + " / " + y.g(Yp), nm, Ai + 5 + 15, Vi, Bi - 5], null));
                  Ys(a, new q(null, 3, [Bn, "   active / disconn. \x3d " + y.g(Rm) + " / " + y.g(Zp), nm, Ai + 5 + 15, Vi, Bi + 5], null));
                  a.lineWidth = 1;
                  var nu = Af.h(f, new W(null, 2, 5, X, [Dj, pn], null)), bq = function(b, d, e, f, g, h, l, m, n, s, w, t) {
                    return function(b, d, e) {
                      $s(a, r(r(d) ? e : d) ? "red" : r(r(d) ? xa(e) : d) ? "black" : r(e) ? gt.j(Ol, .5, .5) : xa(e) ? ht(.5) : null);
                      b = F(b);
                      d = null;
                      for (var f = e = 0;;) {
                        if (f < e) {
                          var g = d.H(null, f), h = Q.j(g, 0, null), l = Q.j(h, 0, null);
                          Q.j(h, 1, null);
                          var g = Q.j(g, 1, null), h = lt.h(l, c + 1), l = Q.j(h, 0, null), h = Q.j(h, 1, null), m = a;
                          at(m, r(n) ? g : 1);
                          m.beginPath();
                          m.moveTo(w, t);
                          m.lineTo(l + 1, h);
                          m.stroke();
                          f += 1;
                        } else {
                          if (b = F(b)) {
                            jd(b) ? (e = C(b), b = E(b), d = e, e = P(e)) : (d = I(b), f = Q.j(d, 0, null), e = Q.j(f, 0, null), Q.j(f, 1, null), d = Q.j(d, 1, null), f = lt.h(e, c + 1), e = Q.j(f, 0, null), f = Q.j(f, 1, null), g = a, at(g, r(n) ? d : 1), g.beginPath(), g.moveTo(w, t), g.lineTo(e + 1, f), g.stroke(), b = L(b), d = null, e = 0), f = 0;
                          } else {
                            break;
                          }
                        }
                      }
                      return at(a, 1);
                    };
                  }(ti, ui, vi, yf, fc, Sb, gc, yb, nu, Qm, Ai, Bi, pk, Yp, Rm, Zp, $p, Sm, Pm, zi, nb, Qg, Om, Ng, tf, uf, vf, wf, Ce, Og, Pg, mk, Mg, tc, sf, ri, si, Jd, Lg, g, h, l, n, m, s, w, x, t, z, G, H, M, K, Y, da, ga, D, bb, Aa, Ba, ib, Zc, $c, Gb, kb), cq = Af.h(f, new W(null, 2, 5, X, [Dj, Fl], null));
                  if (mc.h(cq, Xk) || mc.h(cq, fl) && Sm) {
                    r(Af.h(f, new W(null, 2, 5, X, [Dj, Ui], null))) && bq(nb.g ? nb.g(new W(null, 2, 5, X, [Ak, Ui], null)) : nb.call(null, new W(null, 2, 5, X, [Ak, Ui], null)), !0, !1), r(Af.h(f, new W(null, 2, 5, X, [Dj, $], null))) && bq(nb.g ? nb.g(new W(null, 2, 5, X, [Ak, $], null)) : nb.call(null, new W(null, 2, 5, X, [Ak, $], null)), !0, !0);
                  }
                  ti = L(Qg);
                  ui = null;
                  vi = 0;
                }
                yf = 0;
              } else {
                break;
              }
            }
          }
          fc = L(Jd);
          Sb = null;
          gc = 0;
        }
        yb = 0;
      } else {
        break;
      }
    }
  }
  a.restore();
}
function Bt(a) {
  var b = nd(a) ? T.h(th, a) : a, c = R.h(b, Jj), d = R.h(b, Rj), e = Q.h(B(dt), d), f = gl.g(e), g = zn.g(e), h = Jr(g), l = Ir(g);
  return T.h(y, Ze("\n", ff(new W(null, 20, 5, X, ["__Selection__", "* timestep " + y.g(sk.g(f)) + " (delay " + y.g(d) + ")", "* column " + y.g(r(c) ? c : "nil"), "", "__Input__", "" + y.g(h) + " (" + y.g(P(l)) + " bits)", "", "__Active columns__", "" + y.g(td.g(Yk.g(f))), "", "__Active cells__", "" + y.g(td.g(Bl.g(f))), "", "__Learn cells__", "" + y.g(td.g(Wk.g(f))), "", "__Predicted cells__", "" + y.g(td.g(Nl.g(f))), "", r(c) ? function() {
    var n = d + 1, m = Q.h(B(dt), n), s = Af.h(m, new W(null, 3, 5, X, [gl, Mj, c], null)), w = gl.g(m), x = Bl.g(w), t = Af.h(f, new W(null, 2, 5, X, [Mj, c], null));
    return new W(null, 9, 5, X, ["__Active cells prev__", "" + y.g(td.g(Bl.g(w))), "", "__Learn cells prev__", "" + y.g(td.g(Wk.g(w))), "", "__Selected column__", "__Cells and their Dendrite segments__", Oe(function(a, b, c, d, e, f, g, h, l, m, n, s, w, t, x, Gb) {
      return function(kb, ne) {
        var dc = Sk.g(ne), oe = Bl.g(d), Cd = Wk.g(d);
        return new W(null, 3, 5, X, ["CELL " + y.g(kb), "" + y.g(P(dc)) + " \x3d " + y.g(td.g(Se.h(Me.h(P, Vk), dc))), function() {
          return function(a, b, c, d, e, f, g, h, l, m, n, s, w, t, x, z, D, G, H) {
            return function Rb(K) {
              return new ae(null, function(a, b, c, d, e, f, g, h, l, m, n, s, w, t, x, z, D, G, H) {
                return function() {
                  for (;;) {
                    var M = F(K);
                    if (M) {
                      var Ba = M;
                      if (jd(Ba)) {
                        var Aa = C(Ba), Y = P(Aa), ga = ee(Y);
                        return function() {
                          for (var K = 0;;) {
                            if (K < Y) {
                              var da = A.h(Aa, K), ib = Vk.g(a.g ? a.g(da) : a.call(null, da));
                              ie(ga, new W(null, 2, 5, X, ["  SEGMENT " + y.g(da), function() {
                                return function(a, b, c, d, e, f, g, h, l, m, n, s, w, t, x, z, D, G, H, K, M, Ba, Aa, Y, da, ga, ib) {
                                  return function rf(kb) {
                                    return new ae(null, function(a, b, c, d, e, f, g, h, l, m, n) {
                                      return function() {
                                        for (;;) {
                                          var a = F(kb);
                                          if (a) {
                                            if (jd(a)) {
                                              var b = C(a), c = P(b), d = ee(c);
                                              a: {
                                                for (var e = 0;;) {
                                                  if (e < c) {
                                                    var f = A.h(b, e), g = Q.j(f, 0, null), f = Q.j(f, 1, null), g = "  " + y.g(g) + " :\x3d\x3e " + y.g(Ts("%.2f", f)) + y.g(r(n.g ? n.g(g) : n.call(null, g)) ? " L" : r(m.g ? m.g(g) : m.call(null, g)) ? " A" : null);
                                                    d.add(g);
                                                    e += 1;
                                                  } else {
                                                    b = !0;
                                                    break a;
                                                  }
                                                }
                                                b = void 0;
                                              }
                                              return b ? he(d.V(), rf(E(a))) : he(d.V(), null);
                                            }
                                            b = I(a);
                                            d = Q.j(b, 0, null);
                                            b = Q.j(b, 1, null);
                                            return O("  " + y.g(d) + " :\x3d\x3e " + y.g(Ts("%.2f", b)) + y.g(r(n.g ? n.g(d) : n.call(null, d)) ? " L" : r(m.g ? m.g(d) : m.call(null, d)) ? " A" : null), rf(J(a)));
                                          }
                                          return null;
                                        }
                                      };
                                    }(a, b, c, d, e, f, g, h, l, m, n, s, w, t, x, z, D, G, H, K, M, Ba, Aa, Y, da, ga, ib), null, null);
                                  };
                                }(K, ib, da, Aa, Y, ga, Ba, M, a, b, c, d, e, f, g, h, l, m, n, s, w, t, x, z, D, G, H)(td.g(ib));
                              }()], null));
                              K += 1;
                            } else {
                              return!0;
                            }
                          }
                        }() ? he(ga.V(), Rb(E(Ba))) : he(ga.V(), null);
                      }
                      var da = I(Ba), ib = Vk.g(a.g ? a.g(da) : a.call(null, da));
                      return O(new W(null, 2, 5, X, ["  SEGMENT " + y.g(da), function() {
                        return function(a, b, c, d, e, f, g, h, l, m, n, s, w, t, x, z, D, G, H, K, M, Ba, Aa) {
                          return function xe(Y) {
                            return new ae(null, function(a, b, c, d, e, f, g) {
                              return function() {
                                for (;;) {
                                  var a = F(Y);
                                  if (a) {
                                    if (jd(a)) {
                                      var b = C(a), c = P(b), d = ee(c);
                                      a: {
                                        for (var e = 0;;) {
                                          if (e < c) {
                                            var h = A.h(b, e), l = Q.j(h, 0, null), h = Q.j(h, 1, null), l = "  " + y.g(l) + " :\x3d\x3e " + y.g(Ts("%.2f", h)) + y.g(r(g.g ? g.g(l) : g.call(null, l)) ? " L" : r(f.g ? f.g(l) : f.call(null, l)) ? " A" : null);
                                            d.add(l);
                                            e += 1;
                                          } else {
                                            b = !0;
                                            break a;
                                          }
                                        }
                                        b = void 0;
                                      }
                                      return b ? he(d.V(), xe(E(a))) : he(d.V(), null);
                                    }
                                    b = I(a);
                                    d = Q.j(b, 0, null);
                                    b = Q.j(b, 1, null);
                                    return O("  " + y.g(d) + " :\x3d\x3e " + y.g(Ts("%.2f", b)) + y.g(r(g.g ? g.g(d) : g.call(null, d)) ? " L" : r(f.g ? f.g(d) : f.call(null, d)) ? " A" : null), xe(J(a)));
                                  }
                                  return null;
                                }
                              };
                            }(a, b, c, d, e, f, g, h, l, m, n, s, w, t, x, z, D, G, H, K, M, Ba, Aa), null, null);
                          };
                        }(ib, da, Ba, M, a, b, c, d, e, f, g, h, l, m, n, s, w, t, x, z, D, G, H)(td.g(ib));
                      }()], null), Rb(J(Ba)));
                    }
                    return null;
                  }
                };
              }(a, b, c, d, e, f, g, h, l, m, n, s, w, t, x, z, D, G, H), null, null);
            };
          }(dc, oe, Cd, a, b, c, d, e, f, g, h, l, m, n, s, w, t, x, Gb)(Rh.g(P(dc)));
        }()], null);
      };
    }(n, m, s, w, x, t, e, f, g, h, l, a, b, b, c, d), $m.g(s))], null);
  }() : null], null))));
}
function Ct(a, b, c) {
  return r(Af.h(c, new W(null, 2, 5, X, [cj, $], null))) ? (b = Af.h(a, new W(null, 3, 5, X, [gl, Mj, b], null)), a = Ir(zn.g(a)), b = Ak.g(Xi.g(b)), new q(null, 2, [$, zh(b, a), Ui, r(Af.h(c, new W(null, 2, 5, X, [cj, Ui], null))) ? T.j(Rc, b, a) : null], null)) : null;
}
yt = function(a, b, c) {
  return Si(function(a) {
    var e = Q.j(a, 0, null);
    a = Q.j(a, 1, null);
    return new W(null, 2, 5, X, [a >= c ? Ak : Bj, r(b.g ? b.g(e) : b.call(null, e)) ? $ : Ui], null);
  }, a);
};
function Dt(a) {
  var b = sp(new W(null, 1, 5, X, [cl], null));
  b.width = 5;
  b.height = a;
  return b;
}
function Et(a) {
  var b = Dt(2 * a), c = b.getContext(Zd("2d"));
  rt(c, Rh.g(a), Ui.g(it));
  return b;
}
function Ft(a, b) {
  var c = Ir(a), d = Dt(2 * b), e = d.getContext(Zd("2d"));
  rt(e, c, $.g(it));
  return d;
}
function Gt(a, b) {
  var c = Ul.g(a), c = eo(a, c), d = Dt(2 * b), e = d.getContext(Zd("2d"));
  st(e, c);
  return d;
}
function Ht(a, b) {
  var c;
  if (r(Af.h(b, new W(null, 2, 5, X, [Mj, Hk], null)))) {
    c = Hh(vh(Gj.g(a)));
    var d = Yk.g(a), e = In.h(c, d);
    c = yh.k(N([Jh(c, We.g(ym)), Jh(d, We.g($)), Jh(e, We.g(tl))], 0));
  } else {
    c = Jh(Yk.g(a), We.g($));
  }
  var e = r(Af.h(b, new W(null, 2, 5, X, [Mj, Jl], null))) ? yh.k(N([Jl.g(a), c], 0)) : c, f = P(Mj.g(a));
  c = Dt(5 * f);
  d = c.getContext(Zd("2d"));
  d.save();
  for (var e = Si(Ne.h(vt, e), Rh.g(f)), e = F(e), f = null, g = 0, h = 0;;) {
    if (h < g) {
      var l = f.H(null, h), n = Q.j(l, 0, null), l = Q.j(l, 1, null);
      d.beginPath();
      for (var l = F(l), m = null, s = 0, w = 0;;) {
        if (w < s) {
          var x = m.H(null, w), t = lt.g(x), x = Q.j(t, 0, null), t = Q.j(t, 1, null);
          ut(d, x, t, 2.125);
          w += 1;
        } else {
          if (l = F(l)) {
            jd(l) ? (s = C(l), l = E(l), m = s, s = P(s)) : (m = I(l), s = lt.g(m), m = Q.j(s, 0, null), s = Q.j(s, 1, null), ut(d, m, s, 2.125), l = L(l), m = null, s = 0), w = 0;
          } else {
            break;
          }
        }
      }
      Zs(d, n);
      d.fill();
      h += 1;
    } else {
      if (e = F(e)) {
        if (jd(e)) {
          g = C(e), e = E(e), f = g, g = P(g);
        } else {
          g = I(e);
          f = Q.j(g, 0, null);
          g = Q.j(g, 1, null);
          d.beginPath();
          g = F(g);
          h = null;
          for (l = n = 0;;) {
            if (l < n) {
              m = h.H(null, l), s = lt.g(m), m = Q.j(s, 0, null), s = Q.j(s, 1, null), ut(d, m, s, 2.125), l += 1;
            } else {
              if (g = F(g)) {
                jd(g) ? (n = C(g), g = E(g), h = n, n = P(n)) : (h = I(g), n = lt.g(h), h = Q.j(n, 0, null), n = Q.j(n, 1, null), ut(d, h, n, 2.125), g = L(g), h = null, n = 0), l = 0;
              } else {
                break;
              }
            }
          }
          Zs(d, f);
          d.fill();
          e = L(e);
          f = null;
          g = 0;
        }
        h = 0;
      } else {
        break;
      }
    }
  }
  d.restore();
  return c;
}
function It() {
  var a = B(Jt), b = nd(a) ? T.h(th, a) : a, c = R.h(b, Rj), d = R.h(b, Jj);
  up.h("#detail-text", r(d) ? Bt(b) : "");
  var e = B(ft), f = Q.h(B(dt), c), g = Hr(zn.g(f)), h = P(Mj.g(gl.g(f))), l = sp("#viz"), n = l.getContext(Zd("2d")), m = Et(g), s = l.width;
  Vs(n, new q(null, 4, [nm, 0, Vi, 0, Oj, s, El, 1400], null));
  Ys(n, new q(null, 3, [Bn, "input bits.    time --\x3e", nm, 0, Vi, 8], null));
  Ys(n, new q(null, 3, [Bn, "columns.    time --\x3e", nm, jt(), Vi, 7], null));
  Ys(n, new q(null, 3, [Bn, "segments. " + y.g(r(d) ? "(arrows keys to move)" : "(click on a column)"), nm, jt() + 5 * B(et) + 80 + 30 + 20, Vi, 7], null));
  for (var w = F(Rh.g(P(B(dt)))), x = null, t = 0, z = 0;;) {
    if (z < t) {
      var G = x.H(null, z), H = Q.h(B(dt), G), M = Q.j(B(dt), G + 1, mg);
      gl.g(H);
      var K = jn.g(Uc(H)), Y = Uj.g(B(K));
      if (Fe.h(Ym.g(e), Ym.g(Y))) {
        var da = Ft(zn.g(H), g);
        Oi.k(K, S, Uj, e, N([Dn, da], 0));
        M = Gt(gl.g(M), g);
        Oi.k(K, S, Uj, e, N([ij, M], 0));
      }
      Fe.h(Mj.g(e), Mj.g(Y)) && (H = Ht(gl.g(H), e), Oi.k(K, S, Uj, e, N([bj, H], 0)));
      Y = mt(G);
      H = Q.j(Y, 0, null);
      Y = Q.j(Y, 1, null);
      bt.o(n, m, H, Y);
      r(Af.h(e, new W(null, 2, 5, X, [Ym, $], null))) && bt.o(n, Dn.g(B(K)), H, Y);
      r(Af.h(e, new W(null, 2, 5, X, [Ym, ym], null))) && bt.o(n, ij.g(B(K)), H, Y);
      H = kt(G);
      G = Q.j(H, 0, null);
      H = Q.j(H, 1, null);
      bt.o(n, bj.g(B(K)), G, H);
      z += 1;
    } else {
      if (w = F(w)) {
        jd(w) ? (t = C(w), w = E(w), x = t, t = P(t)) : (t = I(w), z = Q.h(B(dt), t), G = Q.j(B(dt), t + 1, mg), gl.g(z), x = jn.g(Uc(z)), K = Uj.g(B(x)), Fe.h(Ym.g(e), Ym.g(K)) && (H = Ft(zn.g(z), g), Oi.k(x, S, Uj, e, N([Dn, H], 0)), G = Gt(gl.g(G), g), Oi.k(x, S, Uj, e, N([ij, G], 0))), Fe.h(Mj.g(e), Mj.g(K)) && (z = Ht(gl.g(z), e), Oi.k(x, S, Uj, e, N([bj, z], 0))), K = mt(t), z = Q.j(K, 0, null), K = Q.j(K, 1, null), bt.o(n, m, z, K), r(Af.h(e, new W(null, 2, 5, X, [Ym, $], null))) && bt.o(n, 
        Dn.g(B(x)), z, K), r(Af.h(e, new W(null, 2, 5, X, [Ym, ym], null))) && bt.o(n, ij.g(B(x)), z, K), z = kt(t), t = Q.j(z, 0, null), z = Q.j(z, 1, null), bt.o(n, bj.g(B(x)), t, z), w = L(w), x = null, t = 0), z = 0;
      } else {
        break;
      }
    }
  }
  tt(n, c, g);
  wt(n, c, d, h);
  var ga = gl.g(f), D = gl.g(Q.j(B(dt), c + 1, mg)), bb = r(d) ? new W(null, 1, 5, X, [d], null) : Yk.g(ga), w = function() {
    return function(a, b, c, d, e, f, g, h, l, m, n, s, w, t, x, z) {
      return function Dd(D) {
        return new ae(null, function(a, b, c, d, e) {
          return function() {
            for (;;) {
              var a = F(D);
              if (a) {
                if (jd(a)) {
                  var b = C(a), c = P(b), f = ee(c);
                  a: {
                    for (var g = 0;;) {
                      if (g < c) {
                        var h = A.h(b, g), h = new W(null, 2, 5, X, [h, Ct(e, h, d)], null);
                        f.add(h);
                        g += 1;
                      } else {
                        b = !0;
                        break a;
                      }
                    }
                    b = void 0;
                  }
                  return b ? he(f.V(), Dd(E(a))) : he(f.V(), null);
                }
                f = I(a);
                return O(new W(null, 2, 5, X, [f, Ct(e, f, d)], null), Dd(J(a)));
              }
              return null;
            }
          };
        }(a, b, c, d, e, f, g, h, l, m, n, s, w, t, x, z), null, null);
      };
    }(ga, D, bb, e, f, g, h, l, n, m, s, a, b, b, c, d)(bb);
  }();
  xt(n, w, c, e);
  r(r(D) ? d : D) && At(n, d, c, D, ga, e);
  return null;
}
function Kt(a, b, c) {
  var d = Ms.q();
  dr(a, b, function(a) {
    return function(b) {
      Os.h(a, b);
      return r(c.g ? c.g(b) : c.call(null, b)) ? (b.preventDefault(), !1) : null;
    };
  }(d));
  return d;
}
function Lt(a, b) {
  var c = Kt(a, "click", function() {
    return!1;
  }), d = Ms.g(1);
  ms(function(a, c) {
    return function() {
      var d = function() {
        return function(a) {
          return function() {
            function b(c) {
              for (;;) {
                var d = function() {
                  try {
                    for (;;) {
                      var b = a(c);
                      if (!V(b, Z)) {
                        return b;
                      }
                    }
                  } catch (d) {
                    if (d instanceof Object) {
                      return c[5] = d, Bs(c), Z;
                    }
                    if (u) {
                      throw d;
                    }
                    return null;
                  }
                }();
                if (!V(d, Z)) {
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
            d.q = c;
            d.g = b;
            return d;
          }();
        }(function(a, c) {
          return function(a) {
            var d = a[1];
            if (7 === d) {
              var e = a[7], f = a[8], d = a[9], d = a[2], e = d.offsetX, f = d.offsetY, d = B(dt), d = P(d) - 2, g;
              g = jt();
              var h = 5 * B(et), h = g + h;
              g = Math.floor.g ? Math.floor.g((f - 10) / 5) : Math.floor.call(null, (f - 10) / 5);
              h = Math.floor.g ? Math.floor.g((h - e) / 5) : Math.floor.call(null, (h - e) / 5);
              g = 0 <= h && h <= P(B(dt)) && 0 <= g ? new W(null, 2, 5, X, [g, h], null) : null;
              a[7] = f;
              a[8] = g;
              a[10] = d;
              a[9] = e;
              a[1] = r(g) ? 8 : 9;
              return Z;
            }
            return 1 === d ? (a[2] = null, a[1] = 2, Z) : 4 === d ? zs(a, 7, c) : 13 === d ? (d = a[2], a[2] = d, a[1] = 10, Z) : 6 === d ? (d = a[2], a[2] = d, a[1] = 3, Z) : 3 === d ? (d = a[2], As(a, d)) : 12 === d ? (d = [Jj, Rj], e = [null, 0], d = Qc.h ? Qc.h(d, e) : Qc.call(null, d, e), d = Ni(b, d), a[2] = d, a[1] = 13, Z) : 2 === d ? (a[1] = 4, Z) : 11 === d ? (f = a[11], d = a[10], e = Q.j(f, 0, null), g = Q.j(f, 1, null), f = [Jj, Rj], d = [null, g < d ? g : d], d = Qc.h ? Qc.h(f, d) : 
            Qc.call(null, f, d), d = Ni(b, d), a[12] = e, a[2] = d, a[1] = 13, Z) : 9 === d ? (e = a[7], d = a[9], f = e, e = 5 * B(et), f = Math.floor.g ? Math.floor.g((f - 10) / 2) : Math.floor.call(null, (f - 10) / 2), d = Math.floor.g ? Math.floor.g((e - d) / 5) : Math.floor.call(null, (e - d) / 5), d = 0 <= d && d <= P(B(dt)) && 0 <= f ? new W(null, 2, 5, X, [f, d], null) : null, a[11] = d, a[1] = r(d) ? 11 : 12, Z) : 5 === d ? (a[2] = null, a[1] = 6, Z) : 10 === d ? (a[13] = a[2], a[2] = null, 
            a[1] = 2, Z) : 8 === d ? (f = a[8], d = a[10], e = Q.j(f, 0, null), g = Q.j(f, 1, null), f = [Jj, Rj], d = [e, g < d ? g : d], d = Qc.h ? Qc.h(f, d) : Qc.call(null, f, d), d = Ni(b, d), a[2] = d, a[1] = 10, Z) : null;
          };
        }(a, c), a, c);
      }(), h = function() {
        var b = d.q ? d.q() : d.call(null);
        b[6] = a;
        return b;
      }();
      return ys(h);
    };
  }(d, c));
}
var Mt = new q(null, 4, [37, An, 38, bl, 39, cm, 40, ej], null);
function Nt(a, b) {
  var c = Kt(document, "keydown", function(a) {
    return Mt.g ? Mt.g(a.keyCode) : Mt.call(null, a.keyCode);
  }), d = Ms.g(1);
  ms(function(c, d) {
    return function() {
      var g = function() {
        return function(a) {
          return function() {
            function b(c) {
              for (;;) {
                var d = function() {
                  try {
                    for (;;) {
                      var b = a(c);
                      if (!V(b, Z)) {
                        return b;
                      }
                    }
                  } catch (d) {
                    if (d instanceof Object) {
                      return c[5] = d, Bs(c), Z;
                    }
                    if (u) {
                      throw d;
                    }
                    return null;
                  }
                }();
                if (!V(d, Z)) {
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
              var g = e[7], h = e[8], t = e[2], z = t.keyCode, z = Mt.g ? Mt.g(z) : Mt.call(null, z), G = B(dt), H = P(G) - 2;
              e[9] = H;
              e[7] = z;
              e[8] = t;
              e[1] = r(z) ? 8 : 9;
              return Z;
            }
            if (1 === f) {
              return e[2] = null, e[1] = 2, Z;
            }
            if (4 === f) {
              return zs(e, 7, d);
            }
            if (15 === f) {
              var H = e[9], g = e[7], h = e[8], M = [Rj], K = new W(null, 1, 5, X, M, null), t = Oi.o(a, Df, K, function() {
                return function() {
                  return function(a) {
                    a -= 1;
                    return 0 < a ? a : 0;
                  };
                }(H, g, h, H, g, h, M, K, f, c, d);
              }());
              e[2] = t;
              e[1] = 16;
              return Z;
            }
            if (13 === f) {
              return t = B(a), t = 0 === Rj.g(t), e[1] = r(t) ? 14 : 15, Z;
            }
            if (6 === f) {
              return t = e[2], e[2] = t, e[1] = 3, Z;
            }
            if (17 === f) {
              var H = e[9], g = e[7], h = e[8], Y = [Jj], da = new W(null, 1, 5, X, Y, null), t = Oi.o(a, Df, da, function() {
                return function() {
                  return function(a) {
                    return r(a) ? a - 1 : 0;
                  };
                }(H, g, h, H, g, h, Y, da, f, c, d);
              }());
              e[2] = t;
              e[1] = 11;
              return Z;
            }
            if (3 === f) {
              return t = e[2], As(e, t);
            }
            if (12 === f) {
              var H = e[9], g = e[7], h = e[8], ga = [Rj], D = new W(null, 1, 5, X, ga, null), t = Oi.o(a, Df, D, function() {
                return function(a) {
                  return function(b) {
                    b += 1;
                    return b < a ? b : a;
                  };
                }(H, g, h, H, g, h, ga, D, f, c, d);
              }());
              e[2] = t;
              e[1] = 11;
              return Z;
            }
            if (2 === f) {
              return e[1] = 4, Z;
            }
            if (11 === f) {
              return t = e[2], e[2] = t, e[1] = 10, Z;
            }
            if (9 === f) {
              return e[2] = null, e[1] = 10, Z;
            }
            if (5 === f) {
              return e[2] = null, e[1] = 6, Z;
            }
            if (14 === f) {
              return z = b.q ? b.q() : b.call(null), t = Oi.h(a, Ke), e[10] = z, e[2] = t, e[1] = 16, Z;
            }
            if (16 === f) {
              return t = e[2], e[2] = t, e[1] = 11, Z;
            }
            if (10 === f) {
              return e[11] = e[2], e[2] = null, e[1] = 2, Z;
            }
            if (18 === f) {
              var H = e[9], g = e[7], h = e[8], bb = [Jj], Aa = new W(null, 1, 5, X, bb, null), t = Oi.o(a, Df, Aa, function() {
                return function() {
                  return function(a) {
                    return r(a) ? a + 1 : 0;
                  };
                }(H, g, h, H, g, h, bb, Aa, f, c, d);
              }());
              e[2] = t;
              e[1] = 11;
              return Z;
            }
            if (8 === f) {
              g = e[7];
              switch(g instanceof U ? g.ma : null) {
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
                  throw Error("No matching clause: " + y.g(g));;
              }
              return Z;
            }
            return null;
          };
        }(c, d), c, d);
      }(), h = function() {
        var a = g.q ? g.q() : g.call(null);
        a[6] = c;
        return a;
      }();
      return ys(h);
    };
  }(d, c));
}
function Ot() {
  var a = Pt(Qt), b = Jt, c = Rt, d = Ms.g(1);
  ms(function(b) {
    return function() {
      var c = function() {
        return function(a) {
          return function() {
            function b(c) {
              for (;;) {
                var d = function() {
                  try {
                    for (;;) {
                      var b = a(c);
                      if (!V(b, Z)) {
                        return b;
                      }
                    }
                  } catch (d) {
                    if (d instanceof Object) {
                      return c[5] = d, Bs(c), Z;
                    }
                    if (u) {
                      throw d;
                    }
                    return null;
                  }
                }();
                if (!V(d, Z)) {
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
        }(function(b) {
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
              var f = c[7], g = Mi.g(og), x = Ee.o(f, S, jn, g), e = Oi.h(dt, function() {
                return function(a) {
                  return function(b) {
                    return Vf(Ue(B(et), O(a, b)));
                  };
                }(x, f, f, f, g, x, d, b);
              }());
              c[8] = e;
              c[2] = null;
              c[1] = 2;
              return Z;
            }
            return 4 === d ? (f = c[7], e = c[2], c[7] = e, c[1] = r(e) ? 5 : 6, Z) : 3 === d ? (e = c[2], As(c, e)) : 2 === d ? zs(c, 4, a) : 1 === d ? (c[2] = null, c[1] = 2, Z) : null;
          };
        }(b), b);
      }(), d = function() {
        var a = c.q ? c.q() : c.call(null);
        a[6] = b;
        return a;
      }();
      return ys(d);
    };
  }(d));
  d = sp("#viz");
  d.width = .7 * (window.innerWidth - 20);
  d.height = 1400;
  Lt(d, b);
  Nt(b, c);
}
;var St = Qc([fj, xj, wk, Ek, Ik, Ok, Zk, dl, yl, Al, Dl, Hl, Il, Pl, Wl, km, fn, ln, mn], [.01, .01, 10, .04, 100, 200, 7, 300, 2, 2, .04, .16, .06, .2, !0, 5, .1, 1E3, 5]);
function Tt(a, b, c) {
  var d = Q.j(c, 0, null), e = Q.j(c, 1, null);
  return function(c, d, e, l) {
    return function(d) {
      r(d) ? (d = d > e ? d : e, d = Ld(((d < l ? d : l) - e) / c * (a - b)), d = Hh(Rh.h(d, d + b))) : d = Dh;
      return Fc(d, new q(null, 1, [nl, a], null));
    };
  }(e - d, c, d, e);
}
;var Ut = new W(null, 2, 5, X, [0, 7], null), Vt = new W(null, 2, 5, X, [bl, 0], null);
function Wt(a) {
  var b = Q.j(a, 0, null);
  a = Q.j(a, 1, null);
  a: {
    switch(b instanceof U ? b.ma : null) {
      case "down":
        b = a - 1;
        break a;
      case "up":
        b = a + 1;
        break a;
      default:
        throw Error("No matching clause: " + y.g(b));;
    }
  }
  b = 7 > b ? b : 7;
  b = 0 < b ? b : 0;
  a = new W(null, 2, 5, X, [bl, ej], null);
  a = Q.h(a, Tn(P(a)));
  return new W(null, 2, 5, X, [a, b], null);
}
var Xt = function() {
  function a(a) {
    return function(b) {
      return vd.h(function(a, b) {
        var c = nl.g(Uc(a)), d = nl.g(Uc(b));
        return Fc(gf(a, Se.h(Ne.h(xd, c), b)), new q(null, 1, [nl, c + d], null));
      }, Se.h(a, b));
    };
  }
  var b = null, c = function() {
    function a(c, d) {
      var h = null;
      1 < arguments.length && (h = N(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, h);
    }
    function b(a, c) {
      return function(b) {
        return vd.h(function(a, b) {
          var c = nl.g(Uc(a)), d = nl.g(Uc(b));
          return Fc(gf(a, Se.h(Ne.h(xd, c), b)), new q(null, 1, [nl, c + d], null));
        }, Se.j(function(a, b) {
          return a.g ? a.g(b) : a.call(null, b);
        }, ye.h(a, c), b));
      };
    }
    a.v = 1;
    a.m = function(a) {
      var c = I(a);
      a = J(a);
      return b(c, a);
    };
    a.k = b;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.k(b, N(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.v = 1;
  b.m = c.m;
  b.g = a;
  b.k = c.k;
  return b;
}().k(function(a, b) {
  var c = P(b), d = a / c, e = Jh(b, Rh.q()), f = Tt(a, d, new W(null, 2, 5, X, [0, c - 1], null));
  return function(a, b, c, d) {
    return function(a) {
      return d.g ? d.g(c.g ? c.g(a) : c.call(null, a)) : d.call(null, c.g ? c.g(a) : c.call(null, a));
    };
  }(c, d, e, f);
}(60, new W(null, 2, 5, X, [ej, bl], null)), N([Tt(240, 30, Ut)], 0));
fa("comportexviz.demos.signal_steps.model", function() {
  var a = Nr(Vt, Wt, Xt), b = S.k(St, Ok, 300, N([Ik, Md(300, 2)], 0));
  return Or(a, b);
});
Bo || Do && Mo("525");
Bo || Co && Mo("1.9.3");
function Yt(a, b, c, d) {
  this.domain = a;
  this.za = b;
  this.G = c;
  this.C = d;
  this.p = 2229667595;
  this.F = 8192;
  2 < arguments.length ? (this.G = c, this.C = d) : this.C = this.G = null;
}
k = Yt.prototype;
k.P = function(a, b) {
  return Qa.j(this, b, null);
};
k.Q = function(a, b, c) {
  switch(b instanceof U ? b.ma : null) {
    case "range":
      return this.za;
    case "domain":
      return this.domain;
    default:
      return R.j(this.C, b, c);
  }
};
k.K = function(a, b, c) {
  return li(b, function() {
    return function(a) {
      return li(b, Fi, "", " ", "", c, a);
    };
  }(this), "#c2.scale._linear{", ", ", "}", c, me.h(new W(null, 2, 5, X, [new W(null, 2, 5, X, [Xm, this.domain], null), new W(null, 2, 5, X, [wn, this.za], null)], null), this.C));
};
k.L = function() {
  return this.G;
};
k.T = function() {
  return 2 + P(this.C);
};
k.N = function() {
  var a = this.A;
  return null != a ? a : this.A = a = Rd(this);
};
k.J = function(a, b) {
  return r(r(b) ? this.constructor === b.constructor && ig(this, b) : b) ? !0 : !1;
};
k.Ra = function(a, b) {
  return pd(new Bh(null, new q(null, 2, [Xm, null, wn, null], null), null), b) ? Rc.h(Fc(gf(mg, this), this.G), b) : new Yt(this.domain, this.za, this.G, Ge(Rc.h(this.C, b)), null);
};
k.va = function(a, b, c) {
  return r(V.h ? V.h(Xm, b) : V.call(null, Xm, b)) ? new Yt(c, this.za, this.G, this.C, null) : r(V.h ? V.h(wn, b) : V.call(null, wn, b)) ? new Yt(this.domain, c, this.G, this.C, null) : new Yt(this.domain, this.za, this.G, S.j(this.C, b, c), null);
};
k.O = function() {
  return F(me.h(new W(null, 2, 5, X, [new W(null, 2, 5, X, [Xm, this.domain], null), new W(null, 2, 5, X, [wn, this.za], null)], null), this.C));
};
k.M = function(a, b) {
  return new Yt(this.domain, this.za, b, this.C, this.A);
};
k.R = function(a, b) {
  return id(b) ? Sa(this, A.h(b, 0), A.h(b, 1)) : vd.j(Ja, this, b);
};
k.call = function(a, b) {
  a = this;
  var c = Mc(a.domain) - I(a.domain), d = Mc(a.za) - I(a.za);
  return I(a.za) + d * ((b - I(a.domain)) / c);
};
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Da(b)));
};
k.g = function(a) {
  var b = Mc(this.domain) - I(this.domain), c = Mc(this.za) - I(this.za);
  return I(this.za) + c * ((a - I(this.domain)) / b);
};
var Zt = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = N(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = yh.k(N([new q(null, 2, [Xm, new W(null, 2, 5, X, [0, 1], null), wn, new W(null, 2, 5, X, [0, 1], null)], null), T.h(th, a)], 0));
    return new Yt(Xm.g(a), wn.g(a), null, Rc.k(a, Xm, N([wn], 0)));
  }
  a.v = 0;
  a.m = function(a) {
    a = F(a);
    return b(a);
  };
  a.k = b;
  return a;
}();
function $t(a) {
  return Yc(a) && mc.h(2, P(a)) ? a : ed(a) ? new W(null, 2, 5, X, [nm.g(a), Vi.g(a)], null) : null;
}
function ou(a) {
  var b = $t(a);
  a = Q.j(b, 0, null);
  b = Q.j(b, 1, null);
  return "translate(" + y.g(a) + "," + y.g(b) + ")";
}
function pu() {
  var a = new W(null, 2, 5, X, [1, -1], null);
  if ("number" === typeof a) {
    return "scale(" + y.g(a) + ")";
  }
  var b = $t(a), a = Q.j(b, 0, null), b = Q.j(b, 1, null);
  return "scale(" + y.g(a) + "," + y.g(b) + ")";
}
;function qu(a) {
  return T.h(xd, a) / P(a);
}
function ru(a, b) {
  var c = vh(I(b));
  return gf(mg, function() {
    return function(c) {
      return function f(g) {
        return new ae(null, function() {
          return function() {
            for (;;) {
              var c = F(g);
              if (c) {
                if (jd(c)) {
                  var d = C(c), n = P(d), m = ee(n);
                  a: {
                    for (var s = 0;;) {
                      if (s < n) {
                        var w = A.h(d, s), w = new W(null, 2, 5, X, [w, a.g ? a.g(Se.h(w, b)) : a.call(null, Se.h(w, b))], null);
                        m.add(w);
                        s += 1;
                      } else {
                        d = !0;
                        break a;
                      }
                    }
                    d = void 0;
                  }
                  return d ? he(m.V(), f(E(c))) : he(m.V(), null);
                }
                m = I(c);
                return O(new W(null, 2, 5, X, [m, a.g ? a.g(Se.h(m, b)) : a.call(null, Se.h(m, b))], null), f(J(c)));
              }
              return null;
            }
          };
        }(c), null, null);
      };
    }(c)(c);
  }());
}
function su(a, b, c) {
  a = Df.o(a, new W(null, 1, 5, X, [il], null), Nc, ru(qu, b));
  b = P(il.g(a));
  b > c && Je(b) ? (c = nd(a) ? T.h(th, a) : a, a = R.h(c, il), b = 2 * R.h(c, vn), c = S.k(c, vn, b, N([il, jf.h(Ne.h(ru, qu), zf.h(2, a))], 0))) : c = a;
  return c;
}
function tu(a) {
  var b = new W(null, 3, 5, X, [$, tl, ym], null), c = new q(null, 2, [An, 20, yj, 20], null), d = function() {
    var d = new zp(null, !0, function(c) {
      return function() {
        var d = nd(a) ? T.h(th, a) : a, e = R.h(d, an), f = R.h(d, il), m = 400 / e, s = dl.g(null == f ? null : ab(f)), w = Zt.k(N([Xm, new W(null, 2, 5, X, [0, .15 * s], null), wn, new W(null, 2, 5, X, [0, 179], null)], 0));
        return 0 < s ? new W(null, 3, 5, X, [jl, new W(null, 3, 5, X, [hl, new q(null, 1, [Jk, "text/css"], null), T.j(y, "g.timestep rect { stroke-width: 0px; }", function() {
          return function(a, b, c, d, e, f, g, h) {
            return function ga(l) {
              return new ae(null, function() {
                return function() {
                  for (;;) {
                    var a = F(l);
                    if (a) {
                      if (jd(a)) {
                        var b = C(a), c = P(b), d = ee(c);
                        a: {
                          for (var e = 0;;) {
                            if (e < c) {
                              var f = A.h(b, e), f = "." + y.g(Zd(f)) + " { fill: " + y.g(it.g ? it.g(f) : it.call(null, f)) + "}";
                              d.add(f);
                              e += 1;
                            } else {
                              b = !0;
                              break a;
                            }
                          }
                          b = void 0;
                        }
                        return b ? he(d.V(), ga(E(a))) : he(d.V(), null);
                      }
                      d = I(a);
                      return O("." + y.g(Zd(d)) + " { fill: " + y.g(it.g ? it.g(d) : it.call(null, d)) + "}", ga(J(a)));
                    }
                    return null;
                  }
                };
              }(a, b, c, d, e, f, g, h), null, null);
            };
          }(a, d, e, f, m, s, w, c)(b);
        }())], null), new W(null, 3, 5, X, [qn, new q(null, 1, [hl, new q(null, 4, [fm, "block", En, "auto", vk, 400 + An.g(c), xn, 180 + yj.g(c)], null)], null), new W(null, 3, 5, X, [Cl, new q(null, 1, [oj, "" + y.g(ou(new W(null, 2, 5, X, [An.g(c), 180], null))) + " " + y.g(pu())], null), Ap.k(Oe(Wf, f), function(a, c, d, e, f, g, h, l) {
          return function(m) {
            var n = Q.j(m, 0, null), s = Q.j(m, 1, null), w = Se.h(s, b), Aa = Th.j(xd, 0, w);
            return gf(new W(null, 2, 5, X, [Nk, new q(null, 1, [oj, ou(new W(null, 2, 5, X, [n * f + 1, 0], null))], null)], null), function() {
              return function(a, b, c, d, e, f, g, h, l, m, n, s, w) {
                return function Qb(t) {
                  return new ae(null, function(a, b, c, d, e, f, g, h, l, m, n, s) {
                    return function() {
                      for (;;) {
                        var a = F(t);
                        if (a) {
                          if (jd(a)) {
                            var b = C(a), c = P(b), d = ee(c);
                            a: {
                              for (var e = 0;;) {
                                if (e < c) {
                                  var f = A.h(b, e), g = Q.j(f, 0, null), h = Q.j(f, 1, null), f = Q.j(f, 2, null), g = new W(null, 2, 5, X, [rn, new q(null, 5, [Ml, g, nm, 0, Vi, s.g ? s.g(f) : s.call(null, f), vk, m, xn, s.g ? s.g(h) : s.call(null, h)], null)], null);
                                  d.add(g);
                                  e += 1;
                                } else {
                                  b = !0;
                                  break a;
                                }
                              }
                              b = void 0;
                            }
                            return b ? he(d.V(), Qb(E(a))) : he(d.V(), null);
                          }
                          c = I(a);
                          d = Q.j(c, 0, null);
                          b = Q.j(c, 1, null);
                          c = Q.j(c, 2, null);
                          return O(new W(null, 2, 5, X, [rn, new q(null, 5, [Ml, d, nm, 0, Vi, s.g ? s.g(c) : s.call(null, c), vk, m, xn, s.g ? s.g(b) : s.call(null, b)], null)], null), Qb(J(a)));
                        }
                        return null;
                      }
                    };
                  }(a, b, c, d, e, f, g, h, l, m, n, s, w), null, null);
                };
              }(w, Aa, m, n, s, a, c, d, e, f, g, h, l)(Se.o(Wf, b, w, Aa));
            }());
          };
        }(a, d, e, f, m, s, w, c), N([pl, Me.h(sk, Hc)], 0))], null)], null)], null) : null;
      };
    }(c), Ri.g("computed-observable"), mg, mg);
    B(d);
    return d;
  }(), e = sp("#plots");
  qp(e, B(d));
  Pi(d, Pk, function(a, b) {
    return function() {
      return qp(b, B(a));
    };
  }(d, e, c));
  return d;
}
;function uu(a) {
  if (r(Vj.g(ll.g(a)))) {
    var b = ll.g(a), c = (new Date).getTime() - Vj.g(b);
    return(sk.g(gl.g(a)) - sk.g(b)) / c * 1E3;
  }
  return null;
}
function vu(a) {
  return T.j(y, "display-", Ze("_", Se.h(Zd, a)));
}
function wu(a, b, c) {
  return new W(null, 3, 5, X, [Kl, new W(null, 2, 5, X, [Ym, new q(null, 3, [Ll, vu(b), Jk, "checkbox", Tl, r(Af.h(a, b)) ? "checked" : null], null)], null), c], null);
}
function xu(a) {
  var b = new W(null, 2, 5, X, [Dj, Fl], null), c = new W(null, 3, 5, X, [fl, Xk, un], null);
  return new W(null, 3, 5, X, [Kl, "Synapses from ", new W(null, 3, 5, X, [yn, new q(null, 1, [Ll, vu(b)], null), function() {
    return function e(c) {
      return new ae(null, function() {
        for (;;) {
          var g = F(c);
          if (g) {
            if (jd(g)) {
              var h = C(g), l = P(h), n = ee(l);
              a: {
                for (var m = 0;;) {
                  if (m < l) {
                    var s = A.h(h, m), s = new W(null, 3, 5, X, [kl, new q(null, 2, [Tj, Zd(s), pj, mc.h(Af.h(a, b), s) ? "selected" : null], null), Zd(s)], null);
                    n.add(s);
                    m += 1;
                  } else {
                    h = !0;
                    break a;
                  }
                }
                h = void 0;
              }
              return h ? he(n.V(), e(E(g))) : he(n.V(), null);
            }
            n = I(g);
            return O(new W(null, 3, 5, X, [kl, new q(null, 2, [Tj, Zd(n), pj, mc.h(Af.h(a, b), n) ? "selected" : null], null), Zd(n)], null), e(J(g)));
          }
          return null;
        }
      }, null, null);
    }(c);
  }()], null)], null);
}
function yu(a) {
  var b = Q.j(a, 0, null);
  a = Q.j(a, 1, null);
  return new W(null, 3, 5, X, [Kl, new W(null, 2, 5, X, [Zl, Zd(b)], null), new W(null, 2, 5, X, [Ym, new q(null, 2, [Ll, vu(new W(null, 1, 5, X, [b], null)), Tj, "" + y.g(a)], null)], null)], null);
}
function zu() {
  var a = Au, b = Bu, c = Cu, d = Rt, e = Du, f = function() {
    var d = new zp(null, !0, function() {
      return new W(null, 5, 5, X, [hn, new W(null, 10, 5, X, [Zi, new W(null, 2, 5, X, [Dk, "Simulation"], null), new W(null, 3, 5, X, [Kl, "Timestep:", new W(null, 2, 5, X, [nj, sk.g(gl.g(B(a)))], null)], null), new W(null, 3, 5, X, [hj, new q(null, 1, [Ml, "detail"], null), r(B(b)) ? Ts("%.1f steps/sec.", uu(B(a))) : null], null), new W(null, 1, 5, X, [lm], null), new W(null, 2, 5, X, [Ej, "Reset"], null), new W(null, 3, 5, X, [zj, new q(null, 1, [hl, new q(null, 1, [fm, r(B(b)) ? "none" : null], 
      null)], null), "Start"], null), new W(null, 3, 5, X, [$l, new q(null, 1, [hl, new q(null, 1, [fm, r(B(b)) ? null : "none"], null)], null), "Stop"], null), new W(null, 2, 5, X, [yk, "Step"], null), new W(null, 5, 5, X, [Kl, "Step every:", new W(null, 2, 5, X, [Rk, "" + y.g(Tk.g(B(c))) + " ms"], null), new W(null, 2, 5, X, [Cn, new W(null, 3, 5, X, [xk, new q(null, 1, [tn, "#"], null), "slower"], null)], null), new W(null, 2, 5, X, [Cn, new W(null, 3, 5, X, [mj, new q(null, 1, [tn, "#"], null), 
      "faster"], null)], null)], null)], null), new W(null, 6, 5, X, [qk, new W(null, 2, 5, X, [Dk, "Animation"], null), new W(null, 3, 5, X, [Uk, new q(null, 1, [hl, new q(null, 1, [fm, r(Qj.g(B(c))) ? "none" : null], null)], null), "Start"], null), new W(null, 3, 5, X, [rl, new q(null, 1, [hl, new q(null, 1, [fm, r(Qj.g(B(c))) ? null : "none"], null)], null), "Stop"], null), new W(null, 2, 5, X, [Kj, "Draw now"], null), new W(null, 5, 5, X, [Kl, "Draw every:", new W(null, 2, 5, X, [$k, "" + y.g(xl.g(B(c))) + 
      " steps"], null), new W(null, 2, 5, X, [Cn, new W(null, 3, 5, X, [Nj, new q(null, 1, [tn, "#"], null), "slower"], null)], null), new W(null, 2, 5, X, [Cn, new W(null, 3, 5, X, [Gl, new q(null, 1, [tn, "#"], null), "faster"], null)], null)], null)], null), function() {
        var a = B(ft);
        return new W(null, 6, 5, X, [Gk, new W(null, 2, 5, X, [Dk, "Visualisation"], null), new W(null, 5, 5, X, [Yi, new W(null, 2, 5, X, [Dk, "Input"], null), wu(a, new W(null, 2, 5, X, [Ym, $], null), "Active bits"), new W(null, 1, 5, X, [lm], null), wu(a, new W(null, 2, 5, X, [Ym, ym], null), "Predicted bits")], null), new W(null, 5, 5, X, [Yi, new W(null, 2, 5, X, [Dk, "Columns"], null), wu(a, new W(null, 2, 5, X, [Mj, Jl], null), "Overlap scores"), new W(null, 1, 5, X, [lm], null), wu(a, new W(null, 
        2, 5, X, [Mj, Hk], null), "Predictive columns")], null), new W(null, 7, 5, X, [Yi, new W(null, 2, 5, X, [Dk, "Feed-forward synapses"], null), wu(a, new W(null, 2, 5, X, [cj, $], null), "Active in-synapses"), new W(null, 1, 5, X, [lm], null), wu(a, new W(null, 2, 5, X, [cj, Ui], null), "Inactive in-synapses"), new W(null, 1, 5, X, [lm], null), wu(a, new W(null, 2, 5, X, [cj, pn], null), "Permanences")], null), new W(null, 9, 5, X, [Yi, new W(null, 2, 5, X, [Dk, "Dendrite segments"], null), 
        xu(a), new W(null, 1, 5, X, [lm], null), wu(a, new W(null, 2, 5, X, [Dj, $], null), "Active synapses"), new W(null, 1, 5, X, [lm], null), wu(a, new W(null, 2, 5, X, [Dj, Ui], null), "Inactive synapses"), new W(null, 1, 5, X, [lm], null), wu(a, new W(null, 2, 5, X, [Dj, pn], null), "Permanences")], null)], null);
      }(), function() {
        var b = ql.g(gl.g(B(a)));
        return new W(null, 2, 5, X, [on, new W(null, 4, 5, X, [wl, new W(null, 2, 5, X, [Dk, "Parameters"], null), Se.h(yu, td.g(b)), new W(null, 3, 5, X, [Bk, new W(null, 2, 5, X, [Ym, new q(null, 2, [Jk, "submit", Tj, "Set!"], null)], null), " (will be set immediately, but then use Reset above for any parameters that apply only in initialisation)"], null)], null)], null);
      }()], null);
    }, Ri.g("computed-observable"), mg, mg);
    B(d);
    return d;
  }(), g = sp("#controls");
  qp(g, B(f));
  Pi(f, Pk, function(a, b) {
    return function() {
      return qp(b, B(a));
    };
  }(f, g));
  lr("#sim-start", ul, function() {
    return Ni(b, !0);
  });
  lr("#sim-stop", ul, function() {
    return Ni(b, !1);
  });
  lr("#sim-step", ul, function() {
    return d.q ? d.q() : d.call(null);
  });
  lr("#sim-faster", ul, function() {
    return Oi.o(c, Df, new W(null, 1, 5, X, [Tk], null), function(a) {
      a -= 100;
      return 0 < a ? a : 0;
    });
  });
  lr("#sim-slower", ul, function() {
    return Oi.o(c, Df, new W(null, 1, 5, X, [Tk], null), function(a) {
      return a + 100;
    });
  });
  lr("#sim-reset", ul, function() {
    return Oi.h(a, function(a) {
      var b = nd(a) ? T.h(th, a) : a;
      a = R.h(b, gl);
      b = R.h(b, zn);
      return Or(Lr(b), ql.g(a));
    });
  });
  lr("#anim-start", ul, function() {
    return Oi.o(c, S, Qj, !0);
  });
  lr("#anim-stop", ul, function() {
    return Oi.o(c, S, Qj, !1);
  });
  lr("#anim-step", ul, function() {
    return e.q ? e.q() : e.call(null);
  });
  lr("#anim-faster", ul, function() {
    return Oi.o(c, Df, new W(null, 1, 5, X, [xl], null), function(a) {
      a -= 1;
      return 1 < a ? a : 1;
    });
  });
  lr("#anim-slower", ul, function() {
    return Oi.o(c, Df, new W(null, 1, 5, X, [xl], null), function(a) {
      return a + 1;
    });
  });
  for (var f = F(B(ft)), g = null, h = 0, l = 0;;) {
    if (l < h) {
      for (var n = g.H(null, l), m = Q.j(n, 0, null), s = Q.j(n, 1, null), w = F(s), x = null, t = 0, z = 0;;) {
        if (z < t) {
          var G = x.H(null, z), H = Q.j(G, 0, null), M = Q.j(G, 1, null), K = vu(new W(null, 2, 5, X, [m, H], null)), Y = sp("#" + y.g(K));
          lr(Y, dn, function(a, b, c, d, e, f, g, h, l, m, n, s, w, t, x) {
            return function() {
              var a;
              a = up.g(m);
              a = r(a) ? $d.g(a) : null;
              return Oi.o(ft, Cf, new W(null, 2, 5, X, [x, s], null), a);
            };
          }(w, x, t, z, f, g, h, l, K, Y, G, H, M, n, m, s));
          z += 1;
        } else {
          if (H = F(w)) {
            G = H;
            if (jd(G)) {
              w = C(G), z = E(G), x = w, t = P(w), w = z;
            } else {
              var M = I(G), K = Q.j(M, 0, null), Y = Q.j(M, 1, null), da = vu(new W(null, 2, 5, X, [m, K], null)), ga = sp("#" + y.g(da));
              lr(ga, dn, function(a, b, c, d, e, f, g, h, l, m, n, s, w, t, x, z, D) {
                return function() {
                  var a;
                  a = up.g(m);
                  a = r(a) ? $d.g(a) : null;
                  return Oi.o(ft, Cf, new W(null, 2, 5, X, [D, s], null), a);
                };
              }(w, x, t, z, f, g, h, l, da, ga, M, K, Y, G, H, n, m, s));
              w = L(G);
              x = null;
              t = 0;
            }
            z = 0;
          } else {
            break;
          }
        }
      }
      l += 1;
    } else {
      if (m = F(f)) {
        n = m;
        if (jd(n)) {
          f = C(n), l = E(n), g = f, h = P(f), f = l;
        } else {
          s = I(n);
          w = Q.j(s, 0, null);
          x = Q.j(s, 1, null);
          t = F(x);
          z = null;
          for (H = G = 0;;) {
            if (H < G) {
              M = z.H(null, H), K = Q.j(M, 0, null), Y = Q.j(M, 1, null), da = vu(new W(null, 2, 5, X, [w, K], null)), ga = sp("#" + y.g(da)), lr(ga, dn, function(a, b, c, d, e, f, g, h, l, m, n, s, w, t, x) {
                return function() {
                  var a;
                  a = up.g(m);
                  a = r(a) ? $d.g(a) : null;
                  return Oi.o(ft, Cf, new W(null, 2, 5, X, [x, s], null), a);
                };
              }(t, z, G, H, f, g, h, l, da, ga, M, K, Y, s, w, x, n, m)), H += 1;
            } else {
              if (K = F(t)) {
                M = K;
                if (jd(M)) {
                  t = C(M), H = E(M), z = t, G = P(t), t = H;
                } else {
                  var Y = I(M), da = Q.j(Y, 0, null), ga = Q.j(Y, 1, null), D = vu(new W(null, 2, 5, X, [w, da], null)), bb = sp("#" + y.g(D));
                  lr(bb, dn, function(a, b, c, d, e, f, g, h, l, m, n, s, w, t, x, z, D) {
                    return function() {
                      var a;
                      a = up.g(m);
                      a = r(a) ? $d.g(a) : null;
                      return Oi.o(ft, Cf, new W(null, 2, 5, X, [D, s], null), a);
                    };
                  }(t, z, G, H, f, g, h, l, D, bb, Y, da, ga, M, K, s, w, x, n, m));
                  t = L(M);
                  z = null;
                  G = 0;
                }
                H = 0;
              } else {
                break;
              }
            }
          }
          f = L(n);
          g = null;
          h = 0;
        }
        l = 0;
      } else {
        break;
      }
    }
  }
  f = ql.g(gl.g(B(a)));
  g = sp("#region-spec-form");
  return lr(g, Ck, function(b, c) {
    return function(d) {
      var e = vd.j(function() {
        return function(a, b) {
          var c = vu(new W(null, 1, 5, X, [b], null)), c = sp("#" + y.g(c)), c = up.g(c), c = nq(new Dp(c, [], -1), !1, null);
          return S.j(a, b, c);
        };
      }(b, c), mg, vh(b));
      Oi.o(a, Cf, new W(null, 2, 5, X, [gl, ql], null), e);
      d.preventDefault();
      return!1;
    };
  }(f, g));
}
;function Pt(a) {
  var b = Ms.q();
  Ss.h(a, b);
  return b;
}
var Au = Mi.g(null), Eu = Ms.q(), Qt = Rs(Eu), Gu = function Fu(b, c) {
  "undefined" === typeof Rr && (Rr = function(b, c, f, g) {
    this.ch = b;
    this.f = c;
    this.bc = f;
    this.cc = g;
    this.F = 0;
    this.p = 393216;
  }, Rr.rb = !0, Rr.qb = "cljs.core.async/t13887", Rr.Bb = function(b, c) {
    return Cb(c, "cljs.core.async/t13887");
  }, Rr.prototype.Zb = function(b, c, f) {
    return Vr(this.ch, c, f);
  }, Rr.prototype.Yb = function(b, c) {
    var f = this, g = this, h = Ur(f.ch, function() {
      "undefined" === typeof Sr && (Sr = function(b, c, d, e, f, g, h) {
        this.xc = b;
        this.ad = c;
        this.cc = d;
        this.ch = e;
        this.f = f;
        this.bc = g;
        this.vd = h;
        this.F = 0;
        this.p = 393216;
      }, Sr.rb = !0, Sr.qb = "cljs.core.async/t13890", Sr.Bb = function() {
        return function(b, c) {
          return Cb(c, "cljs.core.async/t13890");
        };
      }(g), Sr.prototype.Sa = function() {
        return function() {
          return Xr(this.xc);
        };
      }(g), Sr.prototype.Aa = function(b) {
        return function() {
          var c = this;
          return function(b) {
            return function(d) {
              return b.g ? b.g(null == d ? null : c.f.g ? c.f.g(d) : c.f.call(null, d)) : b.call(null, null == d ? null : c.f.g ? c.f.g(d) : c.f.call(null, d));
            };
          }(Yr(c.xc), this, b);
        };
      }(g), Sr.prototype.L = function() {
        return function() {
          return this.vd;
        };
      }(g), Sr.prototype.M = function() {
        return function(b, c) {
          return new Sr(this.xc, this.ad, this.cc, this.ch, this.f, this.bc, c);
        };
      }(g));
      return new Sr(c, g, f.cc, f.ch, f.f, f.bc, null);
    }());
    return r(r(h) ? null != B(h) : h) ? qs(f.f.g ? f.f.g(B(h)) : f.f.call(null, B(h))) : h;
  }, Rr.prototype.Ab = function() {
    return Wr(this.ch);
  }, Rr.prototype.L = function() {
    return this.cc;
  }, Rr.prototype.M = function(b, c) {
    return new Rr(this.ch, this.f, this.bc, c);
  });
  return new Rr(c, b, Fu, null);
}(Me.h(function(a) {
  var b = Hh(vh(Gj.g(a))), c = Yk.g(a), d = In.h(b, c), b = yh.k(N([Jh(b, We.g(ym)), Jh(c, We.g($)), Jh(d, We.g(tl))], 0));
  return S.k(yh.k(N([new q(null, 3, [$, 0, ym, 0, tl, 0], null), Sh(xh(b))], 0)), sk, sk.g(a), N([dl, P(Mj.g(a))], 0));
}, gl), Pt(Qt)), Hu = Rs(Gu), Iu = function(a, b) {
  var c = Mi.g(new q(null, 3, [vn, 1, il, hf, an, b], null)), d = Ms.g(1);
  ms(function(c, d) {
    return function() {
      var g = function() {
        return function(a) {
          return function() {
            function b(c) {
              for (;;) {
                var d = function() {
                  try {
                    for (;;) {
                      var b = a(c);
                      if (!V(b, Z)) {
                        return b;
                      }
                    }
                  } catch (d) {
                    if (d instanceof Object) {
                      return c[5] = d, Bs(c), Z;
                    }
                    if (u) {
                      throw d;
                    }
                    return null;
                  }
                }();
                if (!V(d, Z)) {
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
        }(function(c, d) {
          return function(c) {
            var e = c[1];
            if (7 === e) {
              return e = c, e[2] = c[2], e[1] = 3, Z;
            }
            if (6 === e) {
              var f = c[7], e = Oi.o(d, su, f, b), f = Oc(f);
              c[8] = f;
              c[9] = e;
              c[2] = null;
              c[1] = 2;
              return Z;
            }
            if (5 === e) {
              return f = c[7], c[8] = f, c[2] = null, c[1] = 2, Z;
            }
            if (4 === e) {
              var f = c[8], e = Nc.h(f, c[2]), f = P(e), g = B(d), g = vn.g(g);
              c[7] = e;
              c[1] = r(f < g) ? 5 : 6;
              return Z;
            }
            return 3 === e ? (e = c[2], As(c, e)) : 2 === e ? zs(c, 4, a) : 1 === e ? (f = hf, c[8] = f, c[2] = null, c[1] = 2, Z) : null;
          };
        }(c, d), c, d);
      }(), h = function() {
        var a = g.q ? g.q() : g.call(null);
        a[6] = c;
        return a;
      }();
      return ys(h);
    };
  }(d, c));
  return c;
}(Pt(Hu), 200), Bu = Mi.g(!1), Cu = Mi.g(new q(null, 3, [Tk, 500, Qj, !0, xl, 1], null)), Jt = Mi.g(new q(null, 2, [Jj, null, Rj, 0], null));
function Rt() {
  return Os.h(Eu, Oi.h(Au, Pr));
}
fa("comportexviz.main.set_model", function(a) {
  return Os.h(Eu, Ni(Au, a));
});
function Du() {
  return vp.g ? vp.g(function() {
    return It();
  }) : vp.call(null, function() {
    return It();
  });
}
function Ju() {
  Oi.o(Au, S, ll, new q(null, 2, [Vj, (new Date).getTime(), sk, sk.g(gl.g(B(Au)))], null));
  var a = Ms.g(1);
  ms(function(a) {
    return function() {
      var c = function() {
        return function(a) {
          return function() {
            function b(c) {
              for (;;) {
                var d = function() {
                  try {
                    for (;;) {
                      var b = a(c);
                      if (!V(b, Z)) {
                        return b;
                      }
                    }
                  } catch (d) {
                    if (d instanceof Object) {
                      return c[5] = d, Bs(c), Z;
                    }
                    if (u) {
                      throw d;
                    }
                    return null;
                  }
                }();
                if (!V(d, Z)) {
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
              return a[7] = a[2], a[2] = null, a[1] = 2, Z;
            }
            if (6 === b) {
              return b = a[2], a[2] = b, a[1] = 3, Z;
            }
            if (5 === b) {
              return a[2] = null, a[1] = 6, Z;
            }
            if (4 === b) {
              var b = B(Cu), b = Tk.g(b), b = Js(b), c = Rt();
              a[8] = c;
              return zs(a, 7, b);
            }
            return 3 === b ? (b = a[2], As(a, b)) : 2 === b ? (b = B(Bu), a[1] = r(b) ? 4 : 5, Z) : 1 === b ? (a[2] = null, a[1] = 2, Z) : null;
          };
        }(a), a);
      }(), d = function() {
        var d = c.q ? c.q() : c.call(null);
        d[6] = a;
        return d;
      }();
      return ys(d);
    };
  }(a));
  return a;
}
Jb(Bu, lj, function(a, b, c, d) {
  return r(d) ? Ju() : null;
});
Jb(Iu, Vl, function(a, b, c, d) {
  return tu(d);
});
Jb(ft, em, function() {
  return Du();
});
Jb(Jt, em, function() {
  return Du();
});
var Ku = Ms.g(1);
ms(function(a) {
  return function() {
    var b = function() {
      return function(a) {
        return function() {
          function b(c) {
            for (;;) {
              var e = function() {
                try {
                  for (;;) {
                    var b = a(c);
                    if (!V(b, Z)) {
                      return b;
                    }
                  }
                } catch (e) {
                  if (e instanceof Object) {
                    return c[5] = e, Bs(c), Z;
                  }
                  if (u) {
                    throw e;
                  }
                  return null;
                }
              }();
              if (!V(e, Z)) {
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
            return b = a, b[2] = a[2], b[1] = 3, Z;
          }
          if (1 === b) {
            return b = Pt(Qt), a[7] = b, a[2] = null, a[1] = 2, Z;
          }
          if (4 === b) {
            return b = a[8], b = a[2], a[8] = b, a[1] = r(b) ? 5 : 6, Z;
          }
          if (13 === b) {
            return b = a[7], a[9] = a[2], a[7] = b, a[2] = null, a[1] = 2, Z;
          }
          if (6 === b) {
            return a[2] = null, a[1] = 7, Z;
          }
          if (3 === b) {
            return b = a[2], As(a, b);
          }
          if (12 === b) {
            return a[2] = null, a[1] = 13, Z;
          }
          if (2 === b) {
            return b = a[7], zs(a, 4, b);
          }
          if (11 === b) {
            return b = Du(), a[2] = b, a[1] = 13, Z;
          }
          if (9 === b) {
            return b = a[10], a[2] = b, a[1] = 10, Z;
          }
          if (5 === b) {
            var b = a[8], b = gl.g(b), b = sk.g(b), c = B(Cu), c = xl.g(c), g = B(Cu), g = Qj.g(g);
            a[10] = g;
            a[11] = c;
            a[12] = b;
            a[1] = r(g) ? 8 : 9;
            return Z;
          }
          return 10 === b ? (b = a[2], a[1] = r(b) ? 11 : 12, Z) : 8 === b ? (c = a[11], b = a[12], a[2] = 0 === (b % c + c) % c, a[1] = 10, Z) : null;
        };
      }(a), a);
    }(), c = function() {
      var c = b.q ? b.q() : b.call(null);
      c[6] = a;
      return c;
    }();
    return ys(c);
  };
}(Ku));
dr(window, "load", function() {
  Ot();
  return zu();
});
var Lu = new q(null, 3, [Tj, 0, uj, bl, ol, 0], null);
function Mu(a) {
  var b = nd(a) ? T.h(th, a) : a, c = R.h(b, ol);
  a = R.h(b, uj);
  var d = R.h(b, Tj);
  if (3 > c) {
    return Df.j(b, new W(null, 1, 5, X, [ol], null), xc);
  }
  b = mc.h(a, bl) ? d + 1 : d - 1;
  a = 0 === b ? bl : mc.h(9, b) ? ej : u ? a : null;
  return new q(null, 3, [Tj, b, uj, a, ol, 1], null);
}
var Nu = function(a) {
  return function(b) {
    return a.g ? a.g(Tj.g(b)) : a.call(null, Tj.g(b));
  };
}(Tt(300, 30, new W(null, 2, 5, X, [0, 9], null)));
fa("comportexviz.demos.block_steps.model", function() {
  var a = Nr(Lu, Mu, Nu), b = S.k(St, Ok, 300, N([Ik, Md(300, 4)], 0));
  return Or(a, b);
});
var Ou = new W(null, 2, 5, X, [0, bl], null);
function Pu(a) {
  var b = Q.j(a, 0, null);
  a = Q.j(a, 1, null);
  return mc.h(a, bl) ? 9 > b ? new W(null, 2, 5, X, [b + 1, bl], null) : new W(null, 2, 5, X, [b - 1, ej], null) : 0 < b ? new W(null, 2, 5, X, [b - 1, ej], null) : new W(null, 2, 5, X, [b + 1, bl], null);
}
var Qu = function(a) {
  return function(b) {
    var c = Q.j(b, 0, null);
    Q.j(b, 1, null);
    return a.g ? a.g(c) : a.call(null, c);
  };
}(Tt(300, 30, new W(null, 2, 5, X, [0, 9], null)));
fa("comportexviz.demos.simple_steps.model", function() {
  var a = S.k(St, Ok, 300, N([Ik, Md(300, 4)], 0));
  return Or(Nr(Ou, Pu, Qu), a);
});
var Ru = new W(null, 2, 5, X, [0, 10], null), Su = jf.h(function(a) {
  return S.k(a, Tj, bn.g(a), N([dj, 0], 0));
}, new W(null, 3, 5, X, [new q(null, 4, [bn, 0, nn, 3, sn, xc, Yl, 3], null), new q(null, 4, [bn, 3, nn, 8, sn, xc, Yl, 4], null), new q(null, 4, [bn, 10, nn, 0, sn, Ad, Yl, 1], null)], null));
function Tu(a) {
  return jf.h(function(a) {
    return mc.h(Tj.g(a), nn.g(a)) ? S.k(a, Tj, null, N([dj, Yl.g(a) - 1], 0)) : xa(Tj.g(a)) && 0 < dj.g(a) ? Df.j(a, new W(null, 1, 5, X, [dj], null), Ad) : xa(Tj.g(a)) && 0 === dj.g(a) ? S.j(a, Tj, bn.g(a)) : u ? Df.j(a, new W(null, 1, 5, X, [Tj], null), sn.g(a)) : null;
  }, a);
}
var Uu = function(a) {
  return function(b) {
    return a.g ? a.g(Se.h(Tj, b)) : a.call(null, Se.h(Tj, b));
  };
}(function(a) {
  return function(b) {
    b = Se.h(a, b);
    return Fc(T.h(Hn, b), Uc(I(b)));
  };
}(Tt(300, 30, Ru)));
fa("comportexviz.demos.mixed_fixed_1d.model", function() {
  var a = Nr(Su, Tu, Uu), b = S.k(St, Ok, 300, N([Ik, Md(300, 2)], 0));
  return Or(a, b);
});

})();

//# sourceMappingURL=comportexviz.js.map