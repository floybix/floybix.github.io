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
var k, aa = aa || {}, ca = this;
function ea(a) {
  return void 0 !== a;
}
function ga(a) {
  a = a.split(".");
  for (var b = ca, c;c = a.shift();) {
    if (null != b[c]) {
      b = b[c];
    } else {
      return null;
    }
  }
  return b;
}
function ja() {
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
function ka(a) {
  var b = m(a);
  return "array" == b || "object" == b && "number" == typeof a.length;
}
function la(a) {
  return "string" == typeof a;
}
function na(a) {
  return "number" == typeof a;
}
function oa(a) {
  return "function" == m(a);
}
function qa(a) {
  var b = typeof a;
  return "object" == b && null != a || "function" == b;
}
var ra = "closure_uid_" + (1E9 * Math.random() >>> 0), ta = 0;
function va(a, b, c) {
  return a.call.apply(a.bind, arguments);
}
function Aa(a, b, c) {
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
function Ba(a, b, c) {
  Ba = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? va : Aa;
  return Ba.apply(null, arguments);
}
var Ea = Date.now || function() {
  return+new Date;
};
function Fa(a, b) {
  var c = a.split("."), d = ca;
  c[0] in d || !d.execScript || d.execScript("var " + c[0]);
  for (var e;c.length && (e = c.shift());) {
    !c.length && ea(b) ? d[e] = b : d = d[e] ? d[e] : d[e] = {};
  }
}
function Ga(a, b) {
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
;function Ia(a, b) {
  for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1);e.length && 1 < c.length;) {
    d += c.shift() + e.shift();
  }
  return d + c.join("%s");
}
function Ka(a) {
  return/^[\s\xa0]*$/.test(null == a ? "" : String(a));
}
function La(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
}
function Ma(a) {
  if (!Oa.test(a)) {
    return a;
  }
  -1 != a.indexOf("\x26") && (a = a.replace(Pa, "\x26amp;"));
  -1 != a.indexOf("\x3c") && (a = a.replace(Qa, "\x26lt;"));
  -1 != a.indexOf("\x3e") && (a = a.replace(Ra, "\x26gt;"));
  -1 != a.indexOf('"') && (a = a.replace(Sa, "\x26quot;"));
  -1 != a.indexOf("'") && (a = a.replace(Ta, "\x26#39;"));
  -1 != a.indexOf("\x00") && (a = a.replace(Ua, "\x26#0;"));
  return a;
}
var Pa = /&/g, Qa = /</g, Ra = />/g, Sa = /"/g, Ta = /'/g, Ua = /\x00/g, Oa = /[\x00&<>"']/;
function Va(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}
function Wa(a) {
  return String(a).replace(/\-([a-z])/g, function(a, c) {
    return c.toUpperCase();
  });
}
;function Xa(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
}
function Ya(a) {
  var b = [], c = 0, d;
  for (d in a) {
    b[c++] = a[d];
  }
  return b;
}
function Za(a) {
  var b = [], c = 0, d;
  for (d in a) {
    b[c++] = d;
  }
  return b;
}
var $a = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function cb(a, b) {
  for (var c, d, e = 1;e < arguments.length;e++) {
    d = arguments[e];
    for (c in d) {
      a[c] = d[c];
    }
    for (var f = 0;f < $a.length;f++) {
      c = $a[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
}
;function db(a, b) {
  null != a && this.append.apply(this, arguments);
}
k = db.prototype;
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
function eb(a) {
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, eb);
  } else {
    var b = Error().stack;
    b && (this.stack = b);
  }
  a && (this.message = String(a));
}
Ga(eb, Error);
eb.prototype.name = "CustomError";
var fb;
function gb(a, b) {
  b.unshift(a);
  eb.call(this, Ia.apply(null, b));
  b.shift();
}
Ga(gb, eb);
gb.prototype.name = "AssertionError";
function hb(a, b) {
  throw new gb("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
}
;var ib = Array.prototype, jb = ib.indexOf ? function(a, b, c) {
  return ib.indexOf.call(a, b, c);
} : function(a, b, c) {
  c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if (la(a)) {
    return la(b) && 1 == b.length ? a.indexOf(b, c) : -1;
  }
  for (;c < a.length;c++) {
    if (c in a && a[c] === b) {
      return c;
    }
  }
  return-1;
}, lb = ib.forEach ? function(a, b, c) {
  ib.forEach.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = la(a) ? a.split("") : a, f = 0;f < d;f++) {
    f in e && b.call(c, e[f], f, a);
  }
}, mb = ib.filter ? function(a, b, c) {
  return ib.filter.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = [], f = 0, g = la(a) ? a.split("") : a, h = 0;h < d;h++) {
    if (h in g) {
      var l = g[h];
      b.call(c, l, h, a) && (e[f++] = l);
    }
  }
  return e;
};
function ob(a) {
  var b;
  a: {
    b = pb;
    for (var c = a.length, d = la(a) ? a.split("") : a, e = 0;e < c;e++) {
      if (e in d && b.call(void 0, d[e], e, a)) {
        b = e;
        break a;
      }
    }
    b = -1;
  }
  return 0 > b ? null : la(a) ? a.charAt(b) : a[b];
}
function qb(a) {
  return ib.concat.apply(ib, arguments);
}
function rb(a) {
  var b = a.length;
  if (0 < b) {
    for (var c = Array(b), d = 0;d < b;d++) {
      c[d] = a[d];
    }
    return c;
  }
  return[];
}
function sb(a, b) {
  a.sort(b || tb);
}
function vb(a, b) {
  for (var c = 0;c < a.length;c++) {
    a[c] = {index:c, value:a[c]};
  }
  var d = b || tb;
  sb(a, function(a, b) {
    return d(a.value, b.value) || a.index - b.index;
  });
  for (c = 0;c < a.length;c++) {
    a[c] = a[c].value;
  }
}
function tb(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
}
;function xb() {
  throw Error("No *print-fn* fn set for evaluation environment");
}
var yb = !0, zb = null;
function Ab() {
  return new n(null, 5, [Bb, !0, Db, !0, Eb, !1, Fb, !1, Gb, null], null);
}
function q(a) {
  return null != a && !1 !== a;
}
function Hb(a) {
  return null == a;
}
function Ib(a) {
  return q(a) ? !1 : !0;
}
function Mb(a, b) {
  return a[m(null == b ? null : b)] ? !0 : a._ ? !0 : !1;
}
function Nb(a) {
  return null == a ? null : a.constructor;
}
function r(a, b) {
  var c = Nb(b), c = q(q(c) ? c.wb : c) ? c.vb : m(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function Ob(a) {
  var b = a.vb;
  return q(b) ? b : "" + u.g(a);
}
function Pb(a) {
  for (var b = a.length, c = Array(b), d = 0;;) {
    if (d < b) {
      c[d] = a[d], d += 1;
    } else {
      break;
    }
  }
  return c;
}
function Qb(a) {
  return Array.prototype.slice.call(arguments);
}
var Sb = function() {
  function a(a, b) {
    function c(a, b) {
      a.push(b);
      return a;
    }
    var g = [];
    return Rb.j ? Rb.j(c, g, b) : Rb.call(null, c, g, b);
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
}(), Tb = {};
function Ub(a) {
  if (a ? a.ma : a) {
    return a.ma(a);
  }
  var b;
  b = Ub[m(null == a ? null : a)];
  if (!b && (b = Ub._, !b)) {
    throw r("ICloneable.-clone", a);
  }
  return b.call(null, a);
}
var $b = {};
function ac(a) {
  if (a ? a.Z : a) {
    return a.Z(a);
  }
  var b;
  b = ac[m(null == a ? null : a)];
  if (!b && (b = ac._, !b)) {
    throw r("ICounted.-count", a);
  }
  return b.call(null, a);
}
function bc(a) {
  if (a ? a.wa : a) {
    return a.wa(a);
  }
  var b;
  b = bc[m(null == a ? null : a)];
  if (!b && (b = bc._, !b)) {
    throw r("IEmptyableCollection.-empty", a);
  }
  return b.call(null, a);
}
var cc = {};
function dc(a, b) {
  if (a ? a.Y : a) {
    return a.Y(a, b);
  }
  var c;
  c = dc[m(null == a ? null : a)];
  if (!c && (c = dc._, !c)) {
    throw r("ICollection.-conj", a);
  }
  return c.call(null, a, b);
}
var ec = {}, v = function() {
  function a(a, b, c) {
    if (a ? a.ub : a) {
      return a.ub(a, b, c);
    }
    var g;
    g = v[m(null == a ? null : a)];
    if (!g && (g = v._, !g)) {
      throw r("IIndexed.-nth", a);
    }
    return g.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.H : a) {
      return a.H(a, b);
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
}(), fc = {};
function ic(a) {
  if (a ? a.Fa : a) {
    return a.Fa(a);
  }
  var b;
  b = ic[m(null == a ? null : a)];
  if (!b && (b = ic._, !b)) {
    throw r("ISeq.-first", a);
  }
  return b.call(null, a);
}
function jc(a) {
  if (a ? a.Xa : a) {
    return a.Xa(a);
  }
  var b;
  b = jc[m(null == a ? null : a)];
  if (!b && (b = jc._, !b)) {
    throw r("ISeq.-rest", a);
  }
  return b.call(null, a);
}
var kc = {}, qc = {}, rc = function() {
  function a(a, b, c) {
    if (a ? a.P : a) {
      return a.P(a, b, c);
    }
    var g;
    g = rc[m(null == a ? null : a)];
    if (!g && (g = rc._, !g)) {
      throw r("ILookup.-lookup", a);
    }
    return g.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.N : a) {
      return a.N(a, b);
    }
    var c;
    c = rc[m(null == a ? null : a)];
    if (!c && (c = rc._, !c)) {
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
}(), tc = {};
function uc(a, b) {
  if (a ? a.ue : a) {
    return a.ue(a, b);
  }
  var c;
  c = uc[m(null == a ? null : a)];
  if (!c && (c = uc._, !c)) {
    throw r("IAssociative.-contains-key?", a);
  }
  return c.call(null, a, b);
}
function vc(a, b, c) {
  if (a ? a.za : a) {
    return a.za(a, b, c);
  }
  var d;
  d = vc[m(null == a ? null : a)];
  if (!d && (d = vc._, !d)) {
    throw r("IAssociative.-assoc", a);
  }
  return d.call(null, a, b, c);
}
var Bc = {};
function Cc(a, b) {
  if (a ? a.Ra : a) {
    return a.Ra(a, b);
  }
  var c;
  c = Cc[m(null == a ? null : a)];
  if (!c && (c = Cc._, !c)) {
    throw r("IMap.-dissoc", a);
  }
  return c.call(null, a, b);
}
var Dc = {};
function Ec(a) {
  if (a ? a.Yd : a) {
    return a.Yd(a);
  }
  var b;
  b = Ec[m(null == a ? null : a)];
  if (!b && (b = Ec._, !b)) {
    throw r("IMapEntry.-key", a);
  }
  return b.call(null, a);
}
function Ic(a) {
  if (a ? a.Zd : a) {
    return a.Zd(a);
  }
  var b;
  b = Ic[m(null == a ? null : a)];
  if (!b && (b = Ic._, !b)) {
    throw r("IMapEntry.-val", a);
  }
  return b.call(null, a);
}
var Kc = {};
function Lc(a, b) {
  if (a ? a.kf : a) {
    return a.kf(a, b);
  }
  var c;
  c = Lc[m(null == a ? null : a)];
  if (!c && (c = Lc._, !c)) {
    throw r("ISet.-disjoin", a);
  }
  return c.call(null, a, b);
}
function Mc(a) {
  if (a ? a.dd : a) {
    return a.dd(a);
  }
  var b;
  b = Mc[m(null == a ? null : a)];
  if (!b && (b = Mc._, !b)) {
    throw r("IStack.-peek", a);
  }
  return b.call(null, a);
}
function Nc(a) {
  if (a ? a.ed : a) {
    return a.ed(a);
  }
  var b;
  b = Nc[m(null == a ? null : a)];
  if (!b && (b = Nc._, !b)) {
    throw r("IStack.-pop", a);
  }
  return b.call(null, a);
}
var Oc = {};
function Pc(a, b, c) {
  if (a ? a.pd : a) {
    return a.pd(a, b, c);
  }
  var d;
  d = Pc[m(null == a ? null : a)];
  if (!d && (d = Pc._, !d)) {
    throw r("IVector.-assoc-n", a);
  }
  return d.call(null, a, b, c);
}
function Qc(a) {
  if (a ? a.Dd : a) {
    return a.Dd(a);
  }
  var b;
  b = Qc[m(null == a ? null : a)];
  if (!b && (b = Qc._, !b)) {
    throw r("IDeref.-deref", a);
  }
  return b.call(null, a);
}
var Vc = {};
function Wc(a) {
  if (a ? a.L : a) {
    return a.L(a);
  }
  var b;
  b = Wc[m(null == a ? null : a)];
  if (!b && (b = Wc._, !b)) {
    throw r("IMeta.-meta", a);
  }
  return b.call(null, a);
}
var Xc = {};
function Yc(a, b) {
  if (a ? a.M : a) {
    return a.M(a, b);
  }
  var c;
  c = Yc[m(null == a ? null : a)];
  if (!c && (c = Yc._, !c)) {
    throw r("IWithMeta.-with-meta", a);
  }
  return c.call(null, a, b);
}
var Zc = {}, $c = function() {
  function a(a, b, c) {
    if (a ? a.La : a) {
      return a.La(a, b, c);
    }
    var g;
    g = $c[m(null == a ? null : a)];
    if (!g && (g = $c._, !g)) {
      throw r("IReduce.-reduce", a);
    }
    return g.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.Ka : a) {
      return a.Ka(a, b);
    }
    var c;
    c = $c[m(null == a ? null : a)];
    if (!c && (c = $c._, !c)) {
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
function ad(a, b, c) {
  if (a ? a.Xd : a) {
    return a.Xd(a, b, c);
  }
  var d;
  d = ad[m(null == a ? null : a)];
  if (!d && (d = ad._, !d)) {
    throw r("IKVReduce.-kv-reduce", a);
  }
  return d.call(null, a, b, c);
}
function bd(a, b) {
  if (a ? a.J : a) {
    return a.J(a, b);
  }
  var c;
  c = bd[m(null == a ? null : a)];
  if (!c && (c = bd._, !c)) {
    throw r("IEquiv.-equiv", a);
  }
  return c.call(null, a, b);
}
function cd(a) {
  if (a ? a.S : a) {
    return a.S(a);
  }
  var b;
  b = cd[m(null == a ? null : a)];
  if (!b && (b = cd._, !b)) {
    throw r("IHash.-hash", a);
  }
  return b.call(null, a);
}
var dd = {};
function ed(a) {
  if (a ? a.W : a) {
    return a.W(a);
  }
  var b;
  b = ed[m(null == a ? null : a)];
  if (!b && (b = ed._, !b)) {
    throw r("ISeqable.-seq", a);
  }
  return b.call(null, a);
}
var fd = {}, gd = {};
function md(a) {
  if (a ? a.Fd : a) {
    return a.Fd(a);
  }
  var b;
  b = md[m(null == a ? null : a)];
  if (!b && (b = md._, !b)) {
    throw r("IReversible.-rseq", a);
  }
  return b.call(null, a);
}
function nd(a, b) {
  if (a ? a.yg : a) {
    return a.yg(0, b);
  }
  var c;
  c = nd[m(null == a ? null : a)];
  if (!c && (c = nd._, !c)) {
    throw r("IWriter.-write", a);
  }
  return c.call(null, a, b);
}
var od = {};
function pd(a, b, c) {
  if (a ? a.U : a) {
    return a.U(a, b, c);
  }
  var d;
  d = pd[m(null == a ? null : a)];
  if (!d && (d = pd._, !d)) {
    throw r("IPrintWithWriter.-pr-writer", a);
  }
  return d.call(null, a, b, c);
}
function qd(a, b, c) {
  if (a ? a.mf : a) {
    return a.mf(a, b, c);
  }
  var d;
  d = qd[m(null == a ? null : a)];
  if (!d && (d = qd._, !d)) {
    throw r("IWatchable.-notify-watches", a);
  }
  return d.call(null, a, b, c);
}
function rd(a, b, c) {
  if (a ? a.lf : a) {
    return a.lf(a, b, c);
  }
  var d;
  d = rd[m(null == a ? null : a)];
  if (!d && (d = rd._, !d)) {
    throw r("IWatchable.-add-watch", a);
  }
  return d.call(null, a, b, c);
}
function sd(a, b) {
  if (a ? a.nf : a) {
    return a.nf(a, b);
  }
  var c;
  c = sd[m(null == a ? null : a)];
  if (!c && (c = sd._, !c)) {
    throw r("IWatchable.-remove-watch", a);
  }
  return c.call(null, a, b);
}
function td(a) {
  if (a ? a.Ed : a) {
    return a.Ed(a);
  }
  var b;
  b = td[m(null == a ? null : a)];
  if (!b && (b = td._, !b)) {
    throw r("IEditableCollection.-as-transient", a);
  }
  return b.call(null, a);
}
function ud(a, b) {
  if (a ? a.nd : a) {
    return a.nd(a, b);
  }
  var c;
  c = ud[m(null == a ? null : a)];
  if (!c && (c = ud._, !c)) {
    throw r("ITransientCollection.-conj!", a);
  }
  return c.call(null, a, b);
}
function vd(a) {
  if (a ? a.od : a) {
    return a.od(a);
  }
  var b;
  b = vd[m(null == a ? null : a)];
  if (!b && (b = vd._, !b)) {
    throw r("ITransientCollection.-persistent!", a);
  }
  return b.call(null, a);
}
function wd(a, b, c) {
  if (a ? a.ae : a) {
    return a.ae(a, b, c);
  }
  var d;
  d = wd[m(null == a ? null : a)];
  if (!d && (d = wd._, !d)) {
    throw r("ITransientAssociative.-assoc!", a);
  }
  return d.call(null, a, b, c);
}
function Ad(a, b, c) {
  if (a ? a.xg : a) {
    return a.xg(0, b, c);
  }
  var d;
  d = Ad[m(null == a ? null : a)];
  if (!d && (d = Ad._, !d)) {
    throw r("ITransientVector.-assoc-n!", a);
  }
  return d.call(null, a, b, c);
}
function Bd(a) {
  if (a ? a.tg : a) {
    return a.tg();
  }
  var b;
  b = Bd[m(null == a ? null : a)];
  if (!b && (b = Bd._, !b)) {
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
function y(a) {
  if (a ? a.jf : a) {
    return a.jf(a);
  }
  var b;
  b = y[m(null == a ? null : a)];
  if (!b && (b = y._, !b)) {
    throw r("IChunkedSeq.-chunked-rest", a);
  }
  return b.call(null, a);
}
function Cd(a) {
  if (a ? a.gf : a) {
    return a.gf(a);
  }
  var b;
  b = Cd[m(null == a ? null : a)];
  if (!b && (b = Cd._, !b)) {
    throw r("IChunkedNext.-chunked-next", a);
  }
  return b.call(null, a);
}
function Dd(a, b) {
  if (a ? a.Qh : a) {
    return a.Qh(a, b);
  }
  var c;
  c = Dd[m(null == a ? null : a)];
  if (!c && (c = Dd._, !c)) {
    throw r("IReset.-reset!", a);
  }
  return c.call(null, a, b);
}
var Ed = function() {
  function a(a, b, c, d, e) {
    if (a ? a.Uh : a) {
      return a.Uh(a, b, c, d, e);
    }
    var s;
    s = Ed[m(null == a ? null : a)];
    if (!s && (s = Ed._, !s)) {
      throw r("ISwap.-swap!", a);
    }
    return s.call(null, a, b, c, d, e);
  }
  function b(a, b, c, d) {
    if (a ? a.Th : a) {
      return a.Th(a, b, c, d);
    }
    var e;
    e = Ed[m(null == a ? null : a)];
    if (!e && (e = Ed._, !e)) {
      throw r("ISwap.-swap!", a);
    }
    return e.call(null, a, b, c, d);
  }
  function c(a, b, c) {
    if (a ? a.Sh : a) {
      return a.Sh(a, b, c);
    }
    var d;
    d = Ed[m(null == a ? null : a)];
    if (!d && (d = Ed._, !d)) {
      throw r("ISwap.-swap!", a);
    }
    return d.call(null, a, b, c);
  }
  function d(a, b) {
    if (a ? a.Rh : a) {
      return a.Rh(a, b);
    }
    var c;
    c = Ed[m(null == a ? null : a)];
    if (!c && (c = Ed._, !c)) {
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
function Fd(a) {
  this.$i = a;
  this.K = 0;
  this.B = 1073741824;
}
Fd.prototype.yg = function(a, b) {
  return this.$i.append(b);
};
function Gd(a) {
  var b = new db;
  a.U(null, new Fd(b), Ab());
  return "" + u.g(b);
}
var Hd = "undefined" !== typeof Math.imul && 0 !== (Math.imul.h ? Math.imul.h(4294967295, 5) : Math.imul.call(null, 4294967295, 5)) ? function(a, b) {
  return Math.imul.h ? Math.imul.h(a, b) : Math.imul.call(null, a, b);
} : function(a, b) {
  var c = a & 65535, d = b & 65535;
  return c * d + ((a >>> 16 & 65535) * d + c * (b >>> 16 & 65535) << 16 >>> 0) | 0;
};
function Id(a) {
  a = Hd(a, 3432918353);
  return Hd(a << 15 | a >>> -15, 461845907);
}
function Sd(a, b) {
  var c = a ^ b;
  return Hd(c << 13 | c >>> -13, 5) + 3864292196;
}
function Td(a, b) {
  var c = a ^ b, c = Hd(c ^ c >>> 16, 2246822507), c = Hd(c ^ c >>> 13, 3266489909);
  return c ^ c >>> 16;
}
function Ud(a) {
  var b;
  a: {
    b = 1;
    for (var c = 0;;) {
      if (b < a.length) {
        var d = b + 2, c = Sd(c, Id(a.charCodeAt(b - 1) | a.charCodeAt(b) << 16));
        b = d;
      } else {
        b = c;
        break a;
      }
    }
    b = void 0;
  }
  b = 1 === (a.length & 1) ? b ^ Id(a.charCodeAt(a.length - 1)) : b;
  return Td(b, Hd(2, a.length));
}
var Vd = {}, Wd = 0;
function Xd(a) {
  255 < Wd && (Vd = {}, Wd = 0);
  var b = Vd[a];
  if ("number" !== typeof b) {
    a: {
      if (null != a) {
        if (b = a.length, 0 < b) {
          for (var c = 0, d = 0;;) {
            if (c < b) {
              var e = c + 1, d = Hd(31, d) + a.charCodeAt(c), c = e
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
    Vd[a] = b;
    Wd += 1;
  }
  return a = b;
}
function Yd(a) {
  a && (a.B & 4194304 || a.ye) ? a = a.S(null) : "number" === typeof a ? a = (Math.floor.g ? Math.floor.g(a) : Math.floor.call(null, a)) % 2147483647 : !0 === a ? a = 1 : !1 === a ? a = 0 : "string" === typeof a ? (a = Xd(a), 0 !== a && (a = Id(a), a = Sd(0, a), a = Td(a, 4))) : a = null == a ? 0 : cd(a);
  return a;
}
function Zd(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
function $d(a, b) {
  if (q(ae.h ? ae.h(a, b) : ae.call(null, a, b))) {
    return 0;
  }
  if (q(function() {
    var c = Ib(a.uc);
    return c ? b.uc : c;
  }())) {
    return-1;
  }
  if (q(a.uc)) {
    if (Ib(b.uc)) {
      return 1;
    }
    var c = function() {
      var c = a.uc, d = b.uc;
      return be.h ? be.h(c, d) : be.call(null, c, d);
    }();
    if (0 === c) {
      var c = a.name, d = b.name;
      return be.h ? be.h(c, d) : be.call(null, c, d);
    }
    return c;
  }
  c = a.name;
  d = b.name;
  return be.h ? be.h(c, d) : be.call(null, c, d);
}
function ce(a, b, c, d, e) {
  this.uc = a;
  this.name = b;
  this.Hb = c;
  this.zd = d;
  this.tb = e;
  this.B = 2154168321;
  this.K = 4096;
}
k = ce.prototype;
k.U = function(a, b) {
  return nd(b, this.Hb);
};
k.S = function() {
  var a = this.zd;
  return null != a ? a : this.zd = a = Zd(Ud(this.name), Xd(this.uc));
};
k.M = function(a, b) {
  return new ce(this.uc, this.name, this.Hb, this.zd, b);
};
k.L = function() {
  return this.tb;
};
k.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return rc.j(c, this, null);
      case 3:
        return rc.j(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.h = function(a, c) {
    return rc.j(c, this, null);
  };
  a.j = function(a, c, d) {
    return rc.j(c, this, d);
  };
  return a;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Pb(b)));
};
k.g = function(a) {
  return rc.j(a, this, null);
};
k.h = function(a, b) {
  return rc.j(a, this, b);
};
k.J = function(a, b) {
  return b instanceof ce ? this.Hb === b.Hb : !1;
};
k.toString = function() {
  return this.Hb;
};
k.equiv = function(a) {
  return this.J(null, a);
};
var de = function() {
  function a(a, b) {
    var c = null != a ? "" + u.g(a) + "/" + u.g(b) : b;
    return new ce(a, b, c, null, null);
  }
  function b(a) {
    return a instanceof ce ? a : c.h(null, a);
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
    return 0 === a.length ? null : new le(a, 0);
  }
  if (Mb(dd, a)) {
    return ed(a);
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
  return null == a ? null : ic(a);
}
function E(a) {
  return null != a ? a && (a.B & 64 || a.$d) ? a.Xa(null) : (a = A(a)) ? jc(a) : me : me;
}
function F(a) {
  return null == a ? null : a && (a.B & 128 || a.ze) ? a.hb(null) : A(E(a));
}
var ae = function() {
  function a(a, b) {
    return null == a ? null == b : a === b || bd(a, b);
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
function ne(a, b) {
  var c = Id(a), c = Sd(0, c);
  return Td(c, b);
}
function oe(a) {
  var b = 0, c = 1;
  for (a = A(a);;) {
    if (null != a) {
      b += 1, c = Hd(31, c) + Yd(C(a)) | 0, a = F(a);
    } else {
      return ne(c, b);
    }
  }
}
function pe(a) {
  var b = 0, c = 0;
  for (a = A(a);;) {
    if (null != a) {
      b += 1, c = c + Yd(C(a)) | 0, a = F(a);
    } else {
      return ne(c, b);
    }
  }
}
$b["null"] = !0;
ac["null"] = function() {
  return 0;
};
Date.prototype.J = function(a, b) {
  return b instanceof Date && this.toString() === b.toString();
};
bd.number = function(a, b) {
  return a === b;
};
Vc["function"] = !0;
Wc["function"] = function() {
  return null;
};
Tb["function"] = !0;
cd._ = function(a) {
  return a[ra] || (a[ra] = ++ta);
};
function qe(a) {
  return a + 1;
}
function re(a) {
  this.I = a;
  this.K = 0;
  this.B = 32768;
}
re.prototype.Dd = function() {
  return this.I;
};
function se(a) {
  return a instanceof re;
}
function H(a) {
  return Qc(a);
}
var te = function() {
  function a(a, b, c, d) {
    for (var l = ac(a);;) {
      if (d < l) {
        var p = v.h(a, d);
        c = b.h ? b.h(c, p) : b.call(null, c, p);
        if (se(c)) {
          return Qc(c);
        }
        d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    var d = ac(a), l = c;
    for (c = 0;;) {
      if (c < d) {
        var p = v.h(a, c), l = b.h ? b.h(l, p) : b.call(null, l, p);
        if (se(l)) {
          return Qc(l);
        }
        c += 1;
      } else {
        return l;
      }
    }
  }
  function c(a, b) {
    var c = ac(a);
    if (0 === c) {
      return b.w ? b.w() : b.call(null);
    }
    for (var d = v.h(a, 0), l = 1;;) {
      if (l < c) {
        var p = v.h(a, l), d = b.h ? b.h(d, p) : b.call(null, d, p);
        if (se(d)) {
          return Qc(d);
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
}(), ue = function() {
  function a(a, b, c, d) {
    for (var l = a.length;;) {
      if (d < l) {
        var p = a[d];
        c = b.h ? b.h(c, p) : b.call(null, c, p);
        if (se(c)) {
          return Qc(c);
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
        if (se(l)) {
          return Qc(l);
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
        if (se(d)) {
          return Qc(d);
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
function Ge(a) {
  return a ? a.B & 2 || a.Gh ? !0 : a.B ? !1 : Mb($b, a) : Mb($b, a);
}
function He(a) {
  return a ? a.B & 16 || a.ug ? !0 : a.B ? !1 : Mb(ec, a) : Mb(ec, a);
}
function le(a, b) {
  this.p = a;
  this.R = b;
  this.B = 166199550;
  this.K = 8192;
}
k = le.prototype;
k.toString = function() {
  return Gd(this);
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
  return new le(this.p, this.R);
};
k.hb = function() {
  return this.R + 1 < this.p.length ? new le(this.p, this.R + 1) : null;
};
k.Z = function() {
  return this.p.length - this.R;
};
k.Fd = function() {
  var a = ac(this);
  return 0 < a ? new Ie(this, a - 1, null) : null;
};
k.S = function() {
  return oe(this);
};
k.J = function(a, b) {
  return Je.h ? Je.h(this, b) : Je.call(null, this, b);
};
k.wa = function() {
  return me;
};
k.Ka = function(a, b) {
  return ue.v(this.p, b, this.p[this.R], this.R + 1);
};
k.La = function(a, b, c) {
  return ue.v(this.p, b, c, this.R);
};
k.Fa = function() {
  return this.p[this.R];
};
k.Xa = function() {
  return this.R + 1 < this.p.length ? new le(this.p, this.R + 1) : me;
};
k.W = function() {
  return this;
};
k.Y = function(a, b) {
  return Ke.h ? Ke.h(b, this) : Ke.call(null, b, this);
};
var Le = function() {
  function a(a, b) {
    return b < a.length ? new le(a, b) : null;
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
    return Le.h(a, b);
  }
  function b(a) {
    return Le.h(a, 0);
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
function Ie(a, b, c) {
  this.Wd = a;
  this.R = b;
  this.G = c;
  this.B = 32374990;
  this.K = 8192;
}
k = Ie.prototype;
k.toString = function() {
  return Gd(this);
};
k.equiv = function(a) {
  return this.J(null, a);
};
k.L = function() {
  return this.G;
};
k.ma = function() {
  return new Ie(this.Wd, this.R, this.G);
};
k.hb = function() {
  return 0 < this.R ? new Ie(this.Wd, this.R - 1, null) : null;
};
k.Z = function() {
  return this.R + 1;
};
k.S = function() {
  return oe(this);
};
k.J = function(a, b) {
  return Je.h ? Je.h(this, b) : Je.call(null, this, b);
};
k.wa = function() {
  var a = me, b = this.G;
  return Me.h ? Me.h(a, b) : Me.call(null, a, b);
};
k.Ka = function(a, b) {
  return Ne.h ? Ne.h(b, this) : Ne.call(null, b, this);
};
k.La = function(a, b, c) {
  return Ne.j ? Ne.j(b, c, this) : Ne.call(null, b, c, this);
};
k.Fa = function() {
  return v.h(this.Wd, this.R);
};
k.Xa = function() {
  return 0 < this.R ? new Ie(this.Wd, this.R - 1, null) : me;
};
k.W = function() {
  return this;
};
k.M = function(a, b) {
  return new Ie(this.Wd, this.R, b);
};
k.Y = function(a, b) {
  return Ke.h ? Ke.h(b, this) : Ke.call(null, b, this);
};
function Oe(a) {
  return C(F(a));
}
function Xe(a) {
  for (;;) {
    var b = F(a);
    if (null != b) {
      a = b;
    } else {
      return C(a);
    }
  }
}
bd._ = function(a, b) {
  return a === b;
};
var Ze = function() {
  function a(a, b) {
    return null != a ? dc(a, b) : dc(me, b);
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
        return Ye;
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
    return Ye;
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
          if (Mb($b, a)) {
            a = ac(a);
          } else {
            a: {
              a = A(a);
              for (var b = 0;;) {
                if (Ge(a)) {
                  a = b + ac(a);
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
var $e = function() {
  function a(a, b, c) {
    for (;;) {
      if (null == a) {
        return c;
      }
      if (0 === b) {
        return A(a) ? C(a) : c;
      }
      if (He(a)) {
        return v.j(a, b, c);
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
      if (He(a)) {
        return v.h(a, b);
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
    if (Mb(ec, a)) {
      return v.h(a, b);
    }
    if (a ? a.B & 64 || a.$d || (a.B ? 0 : Mb(fc, a)) : Mb(fc, a)) {
      return $e.j(a, b, c);
    }
    throw Error("nth not supported on this type " + u.g(Ob(Nb(a))));
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
    if (Mb(ec, a)) {
      return v.h(a, b);
    }
    if (a ? a.B & 64 || a.$d || (a.B ? 0 : Mb(fc, a)) : Mb(fc, a)) {
      return $e.h(a, b);
    }
    throw Error("nth not supported on this type " + u.g(Ob(Nb(a))));
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
    return null != a ? a && (a.B & 256 || a.vg) ? a.P(null, b, c) : a instanceof Array ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : Mb(qc, a) ? rc.j(a, b, c) : c : c;
  }
  function b(a, b) {
    return null == a ? null : a && (a.B & 256 || a.vg) ? a.N(null, b) : a instanceof Array ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : Mb(qc, a) ? rc.h(a, b) : null;
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
    return null != a ? vc(a, b, c) : af([b], [c]);
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
          d = C(l), e = Oe(l), l = F(F(l));
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
}(), bf = function() {
  function a(a, b) {
    return null == a ? null : Cc(a, b);
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
function cf(a) {
  var b = oa(a);
  return q(b) ? b : a ? q(q(null) ? null : a.Fh) ? !0 : a.pf ? !1 : Mb(Tb, a) : Mb(Tb, a);
}
function df(a, b) {
  this.C = a;
  this.G = b;
  this.K = 0;
  this.B = 393217;
}
k = df.prototype;
k.call = function() {
  function a(a, b, c, d, e, f, g, h, s, l, p, t, w, z, B, D, I, K, N, M, L, T) {
    a = this.C;
    return R.xe ? R.xe(a, b, c, d, e, f, g, h, s, l, p, t, w, z, B, D, I, K, N, M, L, T) : R.call(null, a, b, c, d, e, f, g, h, s, l, p, t, w, z, B, D, I, K, N, M, L, T);
  }
  function b(a, b, c, d, e, f, g, h, s, l, p, t, w, z, B, D, I, K, N, M, L) {
    a = this;
    return a.C.Rc ? a.C.Rc(b, c, d, e, f, g, h, s, l, p, t, w, z, B, D, I, K, N, M, L) : a.C.call(null, b, c, d, e, f, g, h, s, l, p, t, w, z, B, D, I, K, N, M, L);
  }
  function c(a, b, c, d, e, f, g, h, s, l, p, t, w, z, B, D, I, K, N, M) {
    a = this;
    return a.C.Qc ? a.C.Qc(b, c, d, e, f, g, h, s, l, p, t, w, z, B, D, I, K, N, M) : a.C.call(null, b, c, d, e, f, g, h, s, l, p, t, w, z, B, D, I, K, N, M);
  }
  function d(a, b, c, d, e, f, g, h, s, l, p, t, w, z, B, D, I, K, N) {
    a = this;
    return a.C.Pc ? a.C.Pc(b, c, d, e, f, g, h, s, l, p, t, w, z, B, D, I, K, N) : a.C.call(null, b, c, d, e, f, g, h, s, l, p, t, w, z, B, D, I, K, N);
  }
  function e(a, b, c, d, e, f, g, h, s, l, p, t, w, z, B, D, I, K) {
    a = this;
    return a.C.Oc ? a.C.Oc(b, c, d, e, f, g, h, s, l, p, t, w, z, B, D, I, K) : a.C.call(null, b, c, d, e, f, g, h, s, l, p, t, w, z, B, D, I, K);
  }
  function f(a, b, c, d, e, f, g, h, s, l, p, t, w, z, B, D, I) {
    a = this;
    return a.C.Nc ? a.C.Nc(b, c, d, e, f, g, h, s, l, p, t, w, z, B, D, I) : a.C.call(null, b, c, d, e, f, g, h, s, l, p, t, w, z, B, D, I);
  }
  function g(a, b, c, d, e, f, g, h, s, l, p, t, w, z, B, D) {
    a = this;
    return a.C.Mc ? a.C.Mc(b, c, d, e, f, g, h, s, l, p, t, w, z, B, D) : a.C.call(null, b, c, d, e, f, g, h, s, l, p, t, w, z, B, D);
  }
  function h(a, b, c, d, e, f, g, h, s, l, p, t, w, z, B) {
    a = this;
    return a.C.Lc ? a.C.Lc(b, c, d, e, f, g, h, s, l, p, t, w, z, B) : a.C.call(null, b, c, d, e, f, g, h, s, l, p, t, w, z, B);
  }
  function l(a, b, c, d, e, f, g, h, s, l, p, t, w, z) {
    a = this;
    return a.C.Kc ? a.C.Kc(b, c, d, e, f, g, h, s, l, p, t, w, z) : a.C.call(null, b, c, d, e, f, g, h, s, l, p, t, w, z);
  }
  function p(a, b, c, d, e, f, g, h, s, l, p, t, w) {
    a = this;
    return a.C.Jc ? a.C.Jc(b, c, d, e, f, g, h, s, l, p, t, w) : a.C.call(null, b, c, d, e, f, g, h, s, l, p, t, w);
  }
  function s(a, b, c, d, e, f, g, h, s, l, p, t) {
    a = this;
    return a.C.Ic ? a.C.Ic(b, c, d, e, f, g, h, s, l, p, t) : a.C.call(null, b, c, d, e, f, g, h, s, l, p, t);
  }
  function t(a, b, c, d, e, f, g, h, s, l, p) {
    a = this;
    return a.C.Hc ? a.C.Hc(b, c, d, e, f, g, h, s, l, p) : a.C.call(null, b, c, d, e, f, g, h, s, l, p);
  }
  function w(a, b, c, d, e, f, g, h, s, l) {
    a = this;
    return a.C.Tc ? a.C.Tc(b, c, d, e, f, g, h, s, l) : a.C.call(null, b, c, d, e, f, g, h, s, l);
  }
  function B(a, b, c, d, e, f, g, h, s) {
    a = this;
    return a.C.Sc ? a.C.Sc(b, c, d, e, f, g, h, s) : a.C.call(null, b, c, d, e, f, g, h, s);
  }
  function z(a, b, c, d, e, f, g, h) {
    a = this;
    return a.C.Ib ? a.C.Ib(b, c, d, e, f, g, h) : a.C.call(null, b, c, d, e, f, g, h);
  }
  function D(a, b, c, d, e, f, g) {
    a = this;
    return a.C.Wa ? a.C.Wa(b, c, d, e, f, g) : a.C.call(null, b, c, d, e, f, g);
  }
  function K(a, b, c, d, e, f) {
    a = this;
    return a.C.Q ? a.C.Q(b, c, d, e, f) : a.C.call(null, b, c, d, e, f);
  }
  function L(a, b, c, d, e) {
    a = this;
    return a.C.v ? a.C.v(b, c, d, e) : a.C.call(null, b, c, d, e);
  }
  function I(a, b, c, d) {
    a = this;
    return a.C.j ? a.C.j(b, c, d) : a.C.call(null, b, c, d);
  }
  function M(a, b, c) {
    a = this;
    return a.C.h ? a.C.h(b, c) : a.C.call(null, b, c);
  }
  function T(a, b) {
    a = this;
    return a.C.g ? a.C.g(b) : a.C.call(null, b);
  }
  function ba(a) {
    a = this;
    return a.C.w ? a.C.w() : a.C.call(null);
  }
  var N = null, N = function(N, Y, fa, ia, pa, xa, wa, Ca, Da, ma, ya, Ja, sa, Na, Cb, ab, wb, bb, za, ld, Jc, sc) {
    switch(arguments.length) {
      case 1:
        return ba.call(this, N);
      case 2:
        return T.call(this, N, Y);
      case 3:
        return M.call(this, N, Y, fa);
      case 4:
        return I.call(this, N, Y, fa, ia);
      case 5:
        return L.call(this, N, Y, fa, ia, pa);
      case 6:
        return K.call(this, N, Y, fa, ia, pa, xa);
      case 7:
        return D.call(this, N, Y, fa, ia, pa, xa, wa);
      case 8:
        return z.call(this, N, Y, fa, ia, pa, xa, wa, Ca);
      case 9:
        return B.call(this, N, Y, fa, ia, pa, xa, wa, Ca, Da);
      case 10:
        return w.call(this, N, Y, fa, ia, pa, xa, wa, Ca, Da, ma);
      case 11:
        return t.call(this, N, Y, fa, ia, pa, xa, wa, Ca, Da, ma, ya);
      case 12:
        return s.call(this, N, Y, fa, ia, pa, xa, wa, Ca, Da, ma, ya, Ja);
      case 13:
        return p.call(this, N, Y, fa, ia, pa, xa, wa, Ca, Da, ma, ya, Ja, sa);
      case 14:
        return l.call(this, N, Y, fa, ia, pa, xa, wa, Ca, Da, ma, ya, Ja, sa, Na);
      case 15:
        return h.call(this, N, Y, fa, ia, pa, xa, wa, Ca, Da, ma, ya, Ja, sa, Na, Cb);
      case 16:
        return g.call(this, N, Y, fa, ia, pa, xa, wa, Ca, Da, ma, ya, Ja, sa, Na, Cb, ab);
      case 17:
        return f.call(this, N, Y, fa, ia, pa, xa, wa, Ca, Da, ma, ya, Ja, sa, Na, Cb, ab, wb);
      case 18:
        return e.call(this, N, Y, fa, ia, pa, xa, wa, Ca, Da, ma, ya, Ja, sa, Na, Cb, ab, wb, bb);
      case 19:
        return d.call(this, N, Y, fa, ia, pa, xa, wa, Ca, Da, ma, ya, Ja, sa, Na, Cb, ab, wb, bb, za);
      case 20:
        return c.call(this, N, Y, fa, ia, pa, xa, wa, Ca, Da, ma, ya, Ja, sa, Na, Cb, ab, wb, bb, za, ld);
      case 21:
        return b.call(this, N, Y, fa, ia, pa, xa, wa, Ca, Da, ma, ya, Ja, sa, Na, Cb, ab, wb, bb, za, ld, Jc);
      case 22:
        return a.call(this, N, Y, fa, ia, pa, xa, wa, Ca, Da, ma, ya, Ja, sa, Na, Cb, ab, wb, bb, za, ld, Jc, sc);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  N.g = ba;
  N.h = T;
  N.j = M;
  N.v = I;
  N.Q = L;
  N.Wa = K;
  N.Ib = D;
  N.Sc = z;
  N.Tc = B;
  N.Hc = w;
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
  return this.call.apply(this, [this].concat(Pb(b)));
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
k.Kc = function(a, b, c, d, e, f, g, h, l, p, s, t, w) {
  return this.C.Kc ? this.C.Kc(a, b, c, d, e, f, g, h, l, p, s, t, w) : this.C.call(null, a, b, c, d, e, f, g, h, l, p, s, t, w);
};
k.Lc = function(a, b, c, d, e, f, g, h, l, p, s, t, w, B) {
  return this.C.Lc ? this.C.Lc(a, b, c, d, e, f, g, h, l, p, s, t, w, B) : this.C.call(null, a, b, c, d, e, f, g, h, l, p, s, t, w, B);
};
k.Mc = function(a, b, c, d, e, f, g, h, l, p, s, t, w, B, z) {
  return this.C.Mc ? this.C.Mc(a, b, c, d, e, f, g, h, l, p, s, t, w, B, z) : this.C.call(null, a, b, c, d, e, f, g, h, l, p, s, t, w, B, z);
};
k.Nc = function(a, b, c, d, e, f, g, h, l, p, s, t, w, B, z, D) {
  return this.C.Nc ? this.C.Nc(a, b, c, d, e, f, g, h, l, p, s, t, w, B, z, D) : this.C.call(null, a, b, c, d, e, f, g, h, l, p, s, t, w, B, z, D);
};
k.Oc = function(a, b, c, d, e, f, g, h, l, p, s, t, w, B, z, D, K) {
  return this.C.Oc ? this.C.Oc(a, b, c, d, e, f, g, h, l, p, s, t, w, B, z, D, K) : this.C.call(null, a, b, c, d, e, f, g, h, l, p, s, t, w, B, z, D, K);
};
k.Pc = function(a, b, c, d, e, f, g, h, l, p, s, t, w, B, z, D, K, L) {
  return this.C.Pc ? this.C.Pc(a, b, c, d, e, f, g, h, l, p, s, t, w, B, z, D, K, L) : this.C.call(null, a, b, c, d, e, f, g, h, l, p, s, t, w, B, z, D, K, L);
};
k.Qc = function(a, b, c, d, e, f, g, h, l, p, s, t, w, B, z, D, K, L, I) {
  return this.C.Qc ? this.C.Qc(a, b, c, d, e, f, g, h, l, p, s, t, w, B, z, D, K, L, I) : this.C.call(null, a, b, c, d, e, f, g, h, l, p, s, t, w, B, z, D, K, L, I);
};
k.Rc = function(a, b, c, d, e, f, g, h, l, p, s, t, w, B, z, D, K, L, I, M) {
  return this.C.Rc ? this.C.Rc(a, b, c, d, e, f, g, h, l, p, s, t, w, B, z, D, K, L, I, M) : this.C.call(null, a, b, c, d, e, f, g, h, l, p, s, t, w, B, z, D, K, L, I, M);
};
k.Lh = function(a, b, c, d, e, f, g, h, l, p, s, t, w, B, z, D, K, L, I, M, T) {
  var ba = this.C;
  return R.xe ? R.xe(ba, a, b, c, d, e, f, g, h, l, p, s, t, w, B, z, D, K, L, I, M, T) : R.call(null, ba, a, b, c, d, e, f, g, h, l, p, s, t, w, B, z, D, K, L, I, M, T);
};
k.Fh = !0;
k.M = function(a, b) {
  return new df(this.C, b);
};
k.L = function() {
  return this.G;
};
function Me(a, b) {
  return cf(a) && !(a ? a.B & 262144 || a.Vh || (a.B ? 0 : Mb(Xc, a)) : Mb(Xc, a)) ? new df(a, b) : null == a ? null : Yc(a, b);
}
function ef(a) {
  var b = null != a;
  return(b ? a ? a.B & 131072 || a.Nh || (a.B ? 0 : Mb(Vc, a)) : Mb(Vc, a) : b) ? Wc(a) : null;
}
function ff(a) {
  return null == a ? null : Mc(a);
}
var gf = function() {
  function a(a, b) {
    return null == a ? null : Lc(a, b);
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
function hf(a) {
  return null == a || Ib(A(a));
}
function jf(a) {
  return null == a ? !1 : a ? a.B & 8 || a.vj ? !0 : a.B ? !1 : Mb(cc, a) : Mb(cc, a);
}
function kf(a) {
  return null == a ? !1 : a ? a.B & 4096 || a.Aj ? !0 : a.B ? !1 : Mb(Kc, a) : Mb(Kc, a);
}
function lf(a) {
  return a ? a.B & 16777216 || a.zj ? !0 : a.B ? !1 : Mb(fd, a) : Mb(fd, a);
}
function mf(a) {
  return null == a ? !1 : a ? a.B & 1024 || a.xj ? !0 : a.B ? !1 : Mb(Bc, a) : Mb(Bc, a);
}
function nf(a) {
  return a ? a.B & 16384 || a.Bj ? !0 : a.B ? !1 : Mb(Oc, a) : Mb(Oc, a);
}
function S(a) {
  return a ? a.K & 512 || a.uj ? !0 : !1 : !1;
}
function of(a) {
  var b = [];
  Xa(a, function(a, b) {
    return function(a, c) {
      return b.push(c);
    };
  }(a, b));
  return b;
}
function pf(a, b, c, d, e) {
  for (;0 !== e;) {
    c[d] = a[b], d += 1, e -= 1, b += 1;
  }
}
function qf(a, b, c, d, e) {
  b += e - 1;
  for (d += e - 1;0 !== e;) {
    c[d] = a[b], d -= 1, e -= 1, b -= 1;
  }
}
var Af = {};
function Bf(a) {
  return null == a ? !1 : a ? a.B & 64 || a.$d ? !0 : a.B ? !1 : Mb(fc, a) : Mb(fc, a);
}
function Cf(a) {
  return q(a) ? !0 : !1;
}
function Df(a, b) {
  return P.j(a, b, Af) === Af ? !1 : !0;
}
function Ef(a, b) {
  var c;
  if (c = null != a) {
    c = a ? a.B & 512 || a.tj ? !0 : a.B ? !1 : Mb(tc, a) : Mb(tc, a);
  }
  return c && Df(a, b) ? new U(null, 2, 5, V, [b, P.h(a, b)], null) : null;
}
function be(a, b) {
  if (a === b) {
    return 0;
  }
  if (null == a) {
    return-1;
  }
  if (null == b) {
    return 1;
  }
  if (Nb(a) === Nb(b)) {
    return a && (a.K & 2048 || a.ve) ? a.we(null, b) : tb(a, b);
  }
  throw Error("compare on non-nil objects of different types");
}
var Ff = function() {
  function a(a, b, c, g) {
    for (;;) {
      var h = be(O.h(a, g), O.h(b, g));
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
function Gf(a) {
  return ae.h(a, be) ? be : function(b, c) {
    var d = a.h ? a.h(b, c) : a.call(null, b, c);
    return "number" === typeof d ? d : q(d) ? -1 : q(a.h ? a.h(c, b) : a.call(null, c, b)) ? 1 : 0;
  };
}
var If = function() {
  function a(a, b) {
    if (A(b)) {
      var c = Hf.g ? Hf.g(b) : Hf.call(null, b), g = Gf(a);
      vb(c, g);
      return A(c);
    }
    return me;
  }
  function b(a) {
    return c.h(be, a);
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
}(), Jf = function() {
  function a(a, b, c) {
    return If.h(function(c, f) {
      return Gf(b).call(null, a.g ? a.g(c) : a.call(null, c), a.g ? a.g(f) : a.call(null, f));
    }, c);
  }
  function b(a, b) {
    return c.j(a, be, b);
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
}(), Ne = function() {
  function a(a, b, c) {
    for (c = A(c);;) {
      if (c) {
        var g = C(c);
        b = a.h ? a.h(b, g) : a.call(null, b, g);
        if (se(b)) {
          return Qc(b);
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
      return Rb.j ? Rb.j(a, g, c) : Rb.call(null, a, g, c);
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
}(), Rb = function() {
  function a(a, b, c) {
    return c && (c.B & 524288 || c.Ph) ? c.La(null, a, b) : c instanceof Array ? ue.j(c, a, b) : "string" === typeof c ? ue.j(c, a, b) : Mb(Zc, c) ? $c.j(c, a, b) : Ne.j(a, b, c);
  }
  function b(a, b) {
    return b && (b.B & 524288 || b.Ph) ? b.Ka(null, a) : b instanceof Array ? ue.h(b, a) : "string" === typeof b ? ue.h(b, a) : Mb(Zc, b) ? $c.h(b, a) : Ne.h(a, b);
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
function Kf(a, b, c) {
  return null != c ? ad(c, a, b) : b;
}
function Lf(a) {
  return a;
}
var Mf = function() {
  function a(a, b, c, g) {
    a = a.g ? a.g(b) : a.call(null, b);
    c = Rb.j(a, c, g);
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
}(), Nf = function() {
  var a = null, b = function() {
    function b(a, c, g) {
      var h = null;
      2 < arguments.length && (h = G(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, a, c, h);
    }
    function d(b, c, d) {
      return Rb.j(a, b + c, d);
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
}(), Of = function() {
  var a = null, b = function() {
    function b(a, c, g) {
      var h = null;
      2 < arguments.length && (h = G(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, a, c, h);
    }
    function d(b, c, d) {
      return Rb.j(a, b * c, d);
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
}(), Pf = function() {
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
function Qf(a) {
  return a - 1;
}
var Rf = function() {
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
      return Rb.j(b, a > d ? a : d, e);
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
}(), Sf = function() {
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
      return Rb.j(b, a < d ? a : d, e);
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
function Yf(a) {
  return 0 <= a ? Math.floor.g ? Math.floor.g(a) : Math.floor.call(null, a) : Math.ceil.g ? Math.ceil.g(a) : Math.ceil.call(null, a);
}
function Zf(a) {
  return Yf(a);
}
function $f(a, b) {
  return Yf((a - a % b) / b);
}
function ag(a, b) {
  var c = $f(a, b);
  return a - b * c;
}
var bg = function() {
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
function cg(a) {
  return Yf(bg.g(a));
}
function dg(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24;
}
function eg(a) {
  return 0 < a;
}
function fg(a) {
  return 0 === a;
}
function gg(a) {
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
      for (var e = new db(b.g(a)), l = d;;) {
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
}(), hg = function() {
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
function Je(a, b) {
  var c;
  if (lf(b)) {
    if (Ge(a) && Ge(b) && J(a) !== J(b)) {
      c = !1;
    } else {
      a: {
        c = A(a);
        for (var d = A(b);;) {
          if (null == c) {
            c = null == d;
            break a;
          }
          if (null != d && ae.h(C(c), C(d))) {
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
  return Cf(c);
}
function ig(a) {
  var b = 0;
  for (a = A(a);;) {
    if (a) {
      var c = C(a), b = (b + (Yd(function() {
        var a = c;
        return jg.g ? jg.g(a) : jg.call(null, a);
      }()) ^ Yd(function() {
        var a = c;
        return kg.g ? kg.g(a) : kg.call(null, a);
      }()))) % 4503599627370496;
      a = F(a);
    } else {
      return b;
    }
  }
}
function lg(a, b, c, d, e) {
  this.G = a;
  this.first = b;
  this.yc = c;
  this.count = d;
  this.A = e;
  this.B = 65937646;
  this.K = 8192;
}
k = lg.prototype;
k.toString = function() {
  return Gd(this);
};
k.equiv = function(a) {
  return this.J(null, a);
};
k.L = function() {
  return this.G;
};
k.ma = function() {
  return new lg(this.G, this.first, this.yc, this.count, this.A);
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
  return jc(this);
};
k.S = function() {
  var a = this.A;
  return null != a ? a : this.A = a = oe(this);
};
k.J = function(a, b) {
  return Je(this, b);
};
k.wa = function() {
  return me;
};
k.Ka = function(a, b) {
  return Ne.h(b, this);
};
k.La = function(a, b, c) {
  return Ne.j(b, c, this);
};
k.Fa = function() {
  return this.first;
};
k.Xa = function() {
  return 1 === this.count ? me : this.yc;
};
k.W = function() {
  return this;
};
k.M = function(a, b) {
  return new lg(b, this.first, this.yc, this.count, this.A);
};
k.Y = function(a, b) {
  return new lg(this.G, b, this, this.count + 1, null);
};
function mg(a) {
  this.G = a;
  this.B = 65937614;
  this.K = 8192;
}
k = mg.prototype;
k.toString = function() {
  return Gd(this);
};
k.equiv = function(a) {
  return this.J(null, a);
};
k.L = function() {
  return this.G;
};
k.ma = function() {
  return new mg(this.G);
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
  return Je(this, b);
};
k.wa = function() {
  return this;
};
k.Ka = function(a, b) {
  return Ne.h(b, this);
};
k.La = function(a, b, c) {
  return Ne.j(b, c, this);
};
k.Fa = function() {
  return null;
};
k.Xa = function() {
  return me;
};
k.W = function() {
  return null;
};
k.M = function(a, b) {
  return new mg(b);
};
k.Y = function(a, b) {
  return new lg(this.G, b, null, 1, null);
};
var me = new mg(null);
function ng(a) {
  return(a ? a.B & 134217728 || a.yj || (a.B ? 0 : Mb(gd, a)) : Mb(gd, a)) ? md(a) : Rb.j(Ze, me, a);
}
var og = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = G(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b;
    if (a instanceof le && 0 === a.R) {
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
    for (var e = me;;) {
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
function pg(a, b, c, d) {
  this.G = a;
  this.first = b;
  this.yc = c;
  this.A = d;
  this.B = 65929452;
  this.K = 8192;
}
k = pg.prototype;
k.toString = function() {
  return Gd(this);
};
k.equiv = function(a) {
  return this.J(null, a);
};
k.L = function() {
  return this.G;
};
k.ma = function() {
  return new pg(this.G, this.first, this.yc, this.A);
};
k.hb = function() {
  return null == this.yc ? null : A(this.yc);
};
k.S = function() {
  var a = this.A;
  return null != a ? a : this.A = a = oe(this);
};
k.J = function(a, b) {
  return Je(this, b);
};
k.wa = function() {
  return Me(me, this.G);
};
k.Ka = function(a, b) {
  return Ne.h(b, this);
};
k.La = function(a, b, c) {
  return Ne.j(b, c, this);
};
k.Fa = function() {
  return this.first;
};
k.Xa = function() {
  return null == this.yc ? me : this.yc;
};
k.W = function() {
  return this;
};
k.M = function(a, b) {
  return new pg(b, this.first, this.yc, this.A);
};
k.Y = function(a, b) {
  return new pg(null, b, this, this.A);
};
function Ke(a, b) {
  var c = null == b;
  return(c ? c : b && (b.B & 64 || b.$d)) ? new pg(null, a, b, null) : new pg(null, a, A(b), null);
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
  return nd(b, ":" + u.g(this.ja));
};
k.S = function() {
  var a = this.zd;
  return null != a ? a : this.zd = a = Zd(Ud(this.name), Xd(this.uc)) + 2654435769 | 0;
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
  return this.call.apply(this, [this].concat(Pb(b)));
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
var rg = function() {
  function a(a, b) {
    return new W(a, b, "" + u.g(q(a) ? "" + u.g(a) + "/" : null) + u.g(b), null);
  }
  function b(a) {
    if (a instanceof W) {
      return a;
    }
    if (a instanceof ce) {
      var b;
      if (a && (a.K & 4096 || a.Oh)) {
        b = a.uc;
      } else {
        throw Error("Doesn't support namespace: " + u.g(a));
      }
      return new W(b, qg.g ? qg.g(a) : qg.call(null, a), a.Hb, null);
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
function sg(a, b, c, d) {
  this.G = a;
  this.Nd = b;
  this.da = c;
  this.A = d;
  this.K = 0;
  this.B = 32374988;
}
k = sg.prototype;
k.toString = function() {
  return Gd(this);
};
k.equiv = function(a) {
  return this.J(null, a);
};
function tg(a) {
  null != a.Nd && (a.da = a.Nd.w ? a.Nd.w() : a.Nd.call(null), a.Nd = null);
  return a.da;
}
k.L = function() {
  return this.G;
};
k.hb = function() {
  ed(this);
  return null == this.da ? null : F(this.da);
};
k.S = function() {
  var a = this.A;
  return null != a ? a : this.A = a = oe(this);
};
k.J = function(a, b) {
  return Je(this, b);
};
k.wa = function() {
  return Me(me, this.G);
};
k.Ka = function(a, b) {
  return Ne.h(b, this);
};
k.La = function(a, b, c) {
  return Ne.j(b, c, this);
};
k.Fa = function() {
  ed(this);
  return null == this.da ? null : C(this.da);
};
k.Xa = function() {
  ed(this);
  return null != this.da ? E(this.da) : me;
};
k.W = function() {
  tg(this);
  if (null == this.da) {
    return null;
  }
  for (var a = this.da;;) {
    if (a instanceof sg) {
      a = tg(a);
    } else {
      return this.da = a, A(this.da);
    }
  }
};
k.M = function(a, b) {
  return new sg(b, this.Nd, this.da, this.A);
};
k.Y = function(a, b) {
  return Ke(b, this);
};
function ug(a, b) {
  this.Ab = a;
  this.end = b;
  this.K = 0;
  this.B = 2;
}
ug.prototype.Z = function() {
  return this.end;
};
ug.prototype.add = function(a) {
  this.Ab[this.end] = a;
  return this.end += 1;
};
ug.prototype.Gc = function() {
  var a = new vg(this.Ab, 0, this.end);
  this.Ab = null;
  return a;
};
function wg(a) {
  return new ug(Array(a), 0);
}
function vg(a, b, c) {
  this.p = a;
  this.ab = b;
  this.end = c;
  this.K = 0;
  this.B = 524306;
}
k = vg.prototype;
k.Ka = function(a, b) {
  return ue.v(this.p, b, this.p[this.ab], this.ab + 1);
};
k.La = function(a, b, c) {
  return ue.v(this.p, b, c, this.ab);
};
k.tg = function() {
  if (this.ab === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new vg(this.p, this.ab + 1, this.end);
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
var xg = function() {
  function a(a, b, c) {
    return new vg(a, b, c);
  }
  function b(a, b) {
    return new vg(a, b, a.length);
  }
  function c(a) {
    return new vg(a, 0, a.length);
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
function yg(a, b, c, d) {
  this.Gc = a;
  this.hc = b;
  this.G = c;
  this.A = d;
  this.B = 31850732;
  this.K = 1536;
}
k = yg.prototype;
k.toString = function() {
  return Gd(this);
};
k.equiv = function(a) {
  return this.J(null, a);
};
k.L = function() {
  return this.G;
};
k.hb = function() {
  if (1 < ac(this.Gc)) {
    return new yg(Bd(this.Gc), this.hc, this.G, null);
  }
  var a = ed(this.hc);
  return null == a ? null : a;
};
k.S = function() {
  var a = this.A;
  return null != a ? a : this.A = a = oe(this);
};
k.J = function(a, b) {
  return Je(this, b);
};
k.wa = function() {
  return Me(me, this.G);
};
k.Fa = function() {
  return v.h(this.Gc, 0);
};
k.Xa = function() {
  return 1 < ac(this.Gc) ? new yg(Bd(this.Gc), this.hc, this.G, null) : null == this.hc ? me : this.hc;
};
k.W = function() {
  return this;
};
k.hf = function() {
  return this.Gc;
};
k.jf = function() {
  return null == this.hc ? me : this.hc;
};
k.M = function(a, b) {
  return new yg(this.Gc, this.hc, b, this.A);
};
k.Y = function(a, b) {
  return Ke(b, this);
};
k.gf = function() {
  return null == this.hc ? null : this.hc;
};
function zg(a, b) {
  return 0 === ac(a) ? b : new yg(a, b, null, null);
}
function Lg(a, b) {
  a.add(b);
}
function Mg(a) {
  return a.Gc();
}
function Hf(a) {
  for (var b = [];;) {
    if (A(a)) {
      b.push(C(a)), a = F(a);
    } else {
      return b;
    }
  }
}
var Ng = function() {
  function a(a, b) {
    var c = Array(a);
    if (Bf(b)) {
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
    return "number" === typeof a ? c.h(a, null) : Sb.g(a);
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
function Og(a, b) {
  if (Ge(a)) {
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
var Qg = function Pg(b) {
  return null == b ? null : null == F(b) ? A(C(b)) : Ke(C(b), Pg(F(b)));
}, Rg = function() {
  function a(a, b) {
    return new sg(null, function() {
      var c = A(a);
      return c ? S(c) ? zg(x(c), d.h(y(c), b)) : Ke(C(c), d.h(E(c), b)) : b;
    }, null, null);
  }
  function b(a) {
    return new sg(null, function() {
      return a;
    }, null, null);
  }
  function c() {
    return new sg(null, function() {
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
        return new sg(null, function() {
          var c = A(a);
          return c ? S(c) ? zg(x(c), t(y(c), b)) : Ke(C(c), t(E(c), b)) : q(b) ? t(C(b), F(b)) : null;
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
}(), Sg = function() {
  function a(a, b, c, d) {
    return Ke(a, Ke(b, Ke(c, d)));
  }
  function b(a, b, c) {
    return Ke(a, Ke(b, c));
  }
  var c = null, d = function() {
    function a(c, d, e, p, s) {
      var t = null;
      4 < arguments.length && (t = G(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, p, t);
    }
    function b(a, c, d, e, f) {
      return Ke(a, Ke(c, Ke(d, Ke(e, Qg(f)))));
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
        return Ke(c, f);
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
    return Ke(a, b);
  };
  c.j = b;
  c.v = a;
  c.k = d.k;
  return c;
}();
function Tg(a) {
  return td(a);
}
function Ug(a) {
  return vd(a);
}
var Vg = function() {
  function a() {
    return td(Ye);
  }
  var b = null, c = function() {
    function a(c, d, h) {
      var l = null;
      2 < arguments.length && (l = G(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      for (;;) {
        if (a = ud(a, c), q(d)) {
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
        return ud(b, e);
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
    return ud(a, b);
  };
  b.k = c.k;
  return b;
}(), Wg = function() {
  var a = null, b = function() {
    function a(c, f, g, h) {
      var l = null;
      3 < arguments.length && (l = G(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, f, g, l);
    }
    function b(a, c, d, h) {
      for (;;) {
        if (a = wd(a, c, d), q(h)) {
          c = C(h), d = Oe(h), h = F(F(h));
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
        return wd(a, d, e);
      default:
        return b.k(a, d, e, G(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.D = 3;
  a.q = b.q;
  a.j = function(a, b, e) {
    return wd(a, b, e);
  };
  a.k = b.k;
  return a;
}();
function Xg(a, b, c) {
  var d = A(c);
  if (0 === b) {
    return a.w ? a.w() : a.call(null);
  }
  c = ic(d);
  var e = jc(d);
  if (1 === b) {
    return a.g ? a.g(c) : a.g ? a.g(c) : a.call(null, c);
  }
  var d = ic(e), f = jc(e);
  if (2 === b) {
    return a.h ? a.h(c, d) : a.h ? a.h(c, d) : a.call(null, c, d);
  }
  var e = ic(f), g = jc(f);
  if (3 === b) {
    return a.j ? a.j(c, d, e) : a.j ? a.j(c, d, e) : a.call(null, c, d, e);
  }
  var f = ic(g), h = jc(g);
  if (4 === b) {
    return a.v ? a.v(c, d, e, f) : a.v ? a.v(c, d, e, f) : a.call(null, c, d, e, f);
  }
  var g = ic(h), l = jc(h);
  if (5 === b) {
    return a.Q ? a.Q(c, d, e, f, g) : a.Q ? a.Q(c, d, e, f, g) : a.call(null, c, d, e, f, g);
  }
  var h = ic(l), p = jc(l);
  if (6 === b) {
    return a.Wa ? a.Wa(c, d, e, f, g, h) : a.Wa ? a.Wa(c, d, e, f, g, h) : a.call(null, c, d, e, f, g, h);
  }
  var l = ic(p), s = jc(p);
  if (7 === b) {
    return a.Ib ? a.Ib(c, d, e, f, g, h, l) : a.Ib ? a.Ib(c, d, e, f, g, h, l) : a.call(null, c, d, e, f, g, h, l);
  }
  var p = ic(s), t = jc(s);
  if (8 === b) {
    return a.Sc ? a.Sc(c, d, e, f, g, h, l, p) : a.Sc ? a.Sc(c, d, e, f, g, h, l, p) : a.call(null, c, d, e, f, g, h, l, p);
  }
  var s = ic(t), w = jc(t);
  if (9 === b) {
    return a.Tc ? a.Tc(c, d, e, f, g, h, l, p, s) : a.Tc ? a.Tc(c, d, e, f, g, h, l, p, s) : a.call(null, c, d, e, f, g, h, l, p, s);
  }
  var t = ic(w), B = jc(w);
  if (10 === b) {
    return a.Hc ? a.Hc(c, d, e, f, g, h, l, p, s, t) : a.Hc ? a.Hc(c, d, e, f, g, h, l, p, s, t) : a.call(null, c, d, e, f, g, h, l, p, s, t);
  }
  var w = ic(B), z = jc(B);
  if (11 === b) {
    return a.Ic ? a.Ic(c, d, e, f, g, h, l, p, s, t, w) : a.Ic ? a.Ic(c, d, e, f, g, h, l, p, s, t, w) : a.call(null, c, d, e, f, g, h, l, p, s, t, w);
  }
  var B = ic(z), D = jc(z);
  if (12 === b) {
    return a.Jc ? a.Jc(c, d, e, f, g, h, l, p, s, t, w, B) : a.Jc ? a.Jc(c, d, e, f, g, h, l, p, s, t, w, B) : a.call(null, c, d, e, f, g, h, l, p, s, t, w, B);
  }
  var z = ic(D), K = jc(D);
  if (13 === b) {
    return a.Kc ? a.Kc(c, d, e, f, g, h, l, p, s, t, w, B, z) : a.Kc ? a.Kc(c, d, e, f, g, h, l, p, s, t, w, B, z) : a.call(null, c, d, e, f, g, h, l, p, s, t, w, B, z);
  }
  var D = ic(K), L = jc(K);
  if (14 === b) {
    return a.Lc ? a.Lc(c, d, e, f, g, h, l, p, s, t, w, B, z, D) : a.Lc ? a.Lc(c, d, e, f, g, h, l, p, s, t, w, B, z, D) : a.call(null, c, d, e, f, g, h, l, p, s, t, w, B, z, D);
  }
  var K = ic(L), I = jc(L);
  if (15 === b) {
    return a.Mc ? a.Mc(c, d, e, f, g, h, l, p, s, t, w, B, z, D, K) : a.Mc ? a.Mc(c, d, e, f, g, h, l, p, s, t, w, B, z, D, K) : a.call(null, c, d, e, f, g, h, l, p, s, t, w, B, z, D, K);
  }
  var L = ic(I), M = jc(I);
  if (16 === b) {
    return a.Nc ? a.Nc(c, d, e, f, g, h, l, p, s, t, w, B, z, D, K, L) : a.Nc ? a.Nc(c, d, e, f, g, h, l, p, s, t, w, B, z, D, K, L) : a.call(null, c, d, e, f, g, h, l, p, s, t, w, B, z, D, K, L);
  }
  var I = ic(M), T = jc(M);
  if (17 === b) {
    return a.Oc ? a.Oc(c, d, e, f, g, h, l, p, s, t, w, B, z, D, K, L, I) : a.Oc ? a.Oc(c, d, e, f, g, h, l, p, s, t, w, B, z, D, K, L, I) : a.call(null, c, d, e, f, g, h, l, p, s, t, w, B, z, D, K, L, I);
  }
  var M = ic(T), ba = jc(T);
  if (18 === b) {
    return a.Pc ? a.Pc(c, d, e, f, g, h, l, p, s, t, w, B, z, D, K, L, I, M) : a.Pc ? a.Pc(c, d, e, f, g, h, l, p, s, t, w, B, z, D, K, L, I, M) : a.call(null, c, d, e, f, g, h, l, p, s, t, w, B, z, D, K, L, I, M);
  }
  T = ic(ba);
  ba = jc(ba);
  if (19 === b) {
    return a.Qc ? a.Qc(c, d, e, f, g, h, l, p, s, t, w, B, z, D, K, L, I, M, T) : a.Qc ? a.Qc(c, d, e, f, g, h, l, p, s, t, w, B, z, D, K, L, I, M, T) : a.call(null, c, d, e, f, g, h, l, p, s, t, w, B, z, D, K, L, I, M, T);
  }
  var N = ic(ba);
  jc(ba);
  if (20 === b) {
    return a.Rc ? a.Rc(c, d, e, f, g, h, l, p, s, t, w, B, z, D, K, L, I, M, T, N) : a.Rc ? a.Rc(c, d, e, f, g, h, l, p, s, t, w, B, z, D, K, L, I, M, T, N) : a.call(null, c, d, e, f, g, h, l, p, s, t, w, B, z, D, K, L, I, M, T, N);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var R = function() {
  function a(a, b, c, d, e) {
    b = Sg.v(b, c, d, e);
    c = a.D;
    return a.q ? (d = Og(b, c + 1), d <= c ? Xg(a, d, b) : a.q(b)) : a.apply(a, Hf(b));
  }
  function b(a, b, c, d) {
    b = Sg.j(b, c, d);
    c = a.D;
    return a.q ? (d = Og(b, c + 1), d <= c ? Xg(a, d, b) : a.q(b)) : a.apply(a, Hf(b));
  }
  function c(a, b, c) {
    b = Sg.h(b, c);
    c = a.D;
    if (a.q) {
      var d = Og(b, c + 1);
      return d <= c ? Xg(a, d, b) : a.q(b);
    }
    return a.apply(a, Hf(b));
  }
  function d(a, b) {
    var c = a.D;
    if (a.q) {
      var d = Og(b, c + 1);
      return d <= c ? Xg(a, d, b) : a.q(b);
    }
    return a.apply(a, Hf(b));
  }
  var e = null, f = function() {
    function a(c, d, e, f, g, B) {
      var z = null;
      5 < arguments.length && (z = G(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, e, f, g, z);
    }
    function b(a, c, d, e, f, g) {
      c = Ke(c, Ke(d, Ke(e, Ke(f, Qg(g)))));
      d = a.D;
      return a.q ? (e = Og(c, d + 1), e <= d ? Xg(a, e, c) : a.q(c)) : a.apply(a, Hf(c));
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
}(), Yg = function() {
  function a(a, b, c, d, e, f) {
    var g = Me, z = ef(a);
    b = b.Q ? b.Q(z, c, d, e, f) : b.call(null, z, c, d, e, f);
    return g(a, b);
  }
  function b(a, b, c, d, e) {
    var f = Me, g = ef(a);
    b = b.v ? b.v(g, c, d, e) : b.call(null, g, c, d, e);
    return f(a, b);
  }
  function c(a, b, c, d) {
    var e = Me, f = ef(a);
    b = b.j ? b.j(f, c, d) : b.call(null, f, c, d);
    return e(a, b);
  }
  function d(a, b, c) {
    var d = Me, e = ef(a);
    b = b.h ? b.h(e, c) : b.call(null, e, c);
    return d(a, b);
  }
  function e(a, b) {
    var c = Me, d;
    d = ef(a);
    d = b.g ? b.g(d) : b.call(null, d);
    return c(a, d);
  }
  var f = null, g = function() {
    function a(c, d, e, f, g, h, D) {
      var K = null;
      6 < arguments.length && (K = G(Array.prototype.slice.call(arguments, 6), 0));
      return b.call(this, c, d, e, f, g, h, K);
    }
    function b(a, c, d, e, f, g, h) {
      return Me(a, R.k(c, ef(a), d, e, f, G([g, h], 0)));
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
  }(), f = function(f, l, p, s, t, w, B) {
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
        return a.call(this, f, l, p, s, t, w);
      default:
        return g.k(f, l, p, s, t, w, G(arguments, 6));
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
}(), Zg = function() {
  function a(a, b) {
    return!ae.h(a, b);
  }
  var b = null, c = function() {
    function a(c, d, h) {
      var l = null;
      2 < arguments.length && (l = G(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      return Ib(R.v(ae, a, c, d));
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
function $g(a) {
  return A(a) ? a : null;
}
function ah(a, b) {
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
function bh(a, b) {
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
function ch(a) {
  if ("number" === typeof a && Ib(isNaN(a)) && Infinity !== a && parseFloat(a) === parseInt(a, 10)) {
    return 0 === (a & 1);
  }
  throw Error("Argument must be an integer: " + u.g(a));
}
function dh(a) {
  return function() {
    function b(b, c) {
      return Ib(a.h ? a.h(b, c) : a.call(null, b, c));
    }
    function c(b) {
      return Ib(a.g ? a.g(b) : a.call(null, b));
    }
    function d() {
      return Ib(a.w ? a.w() : a.call(null));
    }
    var e = null, f = function() {
      function b(a, d, e) {
        var f = null;
        2 < arguments.length && (f = G(Array.prototype.slice.call(arguments, 2), 0));
        return c.call(this, a, d, f);
      }
      function c(b, d, e) {
        return Ib(R.v(a, b, d, e));
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
function eh(a) {
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
var fh = function() {
  function a(a, b, c) {
    return function() {
      function d(h, s, l) {
        h = c.j ? c.j(h, s, l) : c.call(null, h, s, l);
        h = b.g ? b.g(h) : b.call(null, h);
        return a.g ? a.g(h) : a.call(null, h);
      }
      function l(d, h) {
        var s;
        s = c.h ? c.h(d, h) : c.call(null, d, h);
        s = b.g ? b.g(s) : b.call(null, s);
        return a.g ? a.g(s) : a.call(null, s);
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
      var t = null, w = function() {
        function d(a, b, c, e) {
          var f = null;
          3 < arguments.length && (f = G(Array.prototype.slice.call(arguments, 3), 0));
          return h.call(this, a, b, c, f);
        }
        function h(d, s, l, p) {
          d = R.Q(c, d, s, l, p);
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
            return w.k(a, b, c, G(arguments, 3));
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      t.D = 3;
      t.q = w.q;
      t.w = s;
      t.g = p;
      t.h = l;
      t.j = d;
      t.k = w.k;
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
        function d(c, g, h, s) {
          c = R.Q(b, c, g, h, s);
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
            b = R.h(C(a), b);
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
      }(ng(Sg.v(a, c, d, e)));
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
        return Lf;
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
    return Lf;
  };
  c.g = function(a) {
    return a;
  };
  c.h = b;
  c.j = a;
  c.k = d.k;
  return c;
}(), gh = function() {
  function a(a, b, c, d) {
    return function() {
      function e(a) {
        var b = null;
        0 < arguments.length && (b = G(Array.prototype.slice.call(arguments, 0), 0));
        return s.call(this, b);
      }
      function s(e) {
        return R.Q(a, b, c, d, e);
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
        return R.v(a, b, c, d);
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
        return R.j(a, b, c);
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
      var w = null;
      4 < arguments.length && (w = G(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, w);
    }
    function b(a, c, d, e, f) {
      return function() {
        function b(a) {
          var c = null;
          0 < arguments.length && (c = G(Array.prototype.slice.call(arguments, 0), 0));
          return g.call(this, c);
        }
        function g(b) {
          return R.Q(a, c, d, e, Rg.h(f, b));
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
function hh(a, b) {
  return function d(b, f) {
    return new sg(null, function() {
      var g = A(f);
      if (g) {
        if (S(g)) {
          for (var h = x(g), l = J(h), p = wg(l), s = 0;;) {
            if (s < l) {
              Lg(p, function() {
                var d = b + s, f = v.h(h, s);
                return a.h ? a.h(d, f) : a.call(null, d, f);
              }()), s += 1;
            } else {
              break;
            }
          }
          return zg(Mg(p), d(b + l, y(g)));
        }
        return Ke(function() {
          var d = C(g);
          return a.h ? a.h(b, d) : a.call(null, b, d);
        }(), d(b + 1, E(g)));
      }
      return null;
    }, null, null);
  }(0, b);
}
var ih = function() {
  function a(a, b) {
    return new sg(null, function() {
      var f = A(b);
      if (f) {
        if (S(f)) {
          for (var g = x(f), h = J(g), l = wg(h), p = 0;;) {
            if (p < h) {
              var s = function() {
                var b = v.h(g, p);
                return a.g ? a.g(b) : a.call(null, b);
              }();
              null != s && l.add(s);
              p += 1;
            } else {
              break;
            }
          }
          return zg(Mg(l), c.h(a, y(f)));
        }
        h = function() {
          var b = C(f);
          return a.g ? a.g(b) : a.call(null, b);
        }();
        return null == h ? c.h(a, E(f)) : Ke(h, c.h(a, E(f)));
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
function jh(a, b, c, d) {
  this.state = a;
  this.G = b;
  this.kj = c;
  this.Da = d;
  this.B = 6455296;
  this.K = 16386;
}
k = jh.prototype;
k.S = function() {
  return this[ra] || (this[ra] = ++ta);
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
        d = a, S(d) ? (e = x(d), d = y(d), a = e, f = J(e), e = a) : (a = C(d), h = O.j(a, 0, null), a = O.j(a, 1, null), e = h, f = b, g = c, a.v ? a.v(e, this, f, g) : a.call(null, e, this, f, g), d = F(d), e = null, f = 0), g = 0;
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
  return this.Da = bf.h(this.Da, b);
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
var mh = function() {
  function a(a) {
    return new jh(a, null, null, null);
  }
  var b = null, c = function() {
    function a(c, d) {
      var h = null;
      1 < arguments.length && (h = G(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, h);
    }
    function b(a, c) {
      var d = Bf(c) ? R.h(kh, c) : c, e = P.h(d, lh), d = P.h(d, Eb);
      return new jh(a, d, e, null);
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
function nh(a, b) {
  if (a instanceof jh) {
    var c = a.kj;
    if (null != c && !q(c.g ? c.g(b) : c.call(null, b))) {
      throw Error("Assert failed: Validator rejected reference state\n" + u.g(function() {
        var a = og(new ce(null, "validate", "validate", 1439230700, null), new ce(null, "new-value", "new-value", -1567397401, null));
        return oh.g ? oh.g(a) : oh.call(null, a);
      }()));
    }
    c = a.state;
    a.state = b;
    null != a.Da && qd(a, c, b);
    return b;
  }
  return Dd(a, b);
}
var ph = function() {
  function a(a, b, c, d) {
    if (a instanceof jh) {
      var e = a.state;
      b = b.j ? b.j(e, c, d) : b.call(null, e, c, d);
      a = nh(a, b);
    } else {
      a = Ed.v(a, b, c, d);
    }
    return a;
  }
  function b(a, b, c) {
    if (a instanceof jh) {
      var d = a.state;
      b = b.h ? b.h(d, c) : b.call(null, d, c);
      a = nh(a, b);
    } else {
      a = Ed.j(a, b, c);
    }
    return a;
  }
  function c(a, b) {
    var c;
    a instanceof jh ? (c = a.state, c = b.g ? b.g(c) : b.call(null, c), c = nh(a, c)) : c = Ed.h(a, b);
    return c;
  }
  var d = null, e = function() {
    function a(c, d, e, f, t) {
      var w = null;
      4 < arguments.length && (w = G(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, w);
    }
    function b(a, c, d, e, f) {
      return a instanceof jh ? nh(a, R.Q(c, a.state, d, e, f)) : Ed.Q(a, c, d, e, f);
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
}(), Bh = function() {
  function a(a, b) {
    return function g(b, c) {
      return new sg(null, function() {
        var e = A(c);
        if (e) {
          if (S(e)) {
            for (var s = x(e), t = J(s), w = wg(t), B = 0;;) {
              if (B < t) {
                var z = function() {
                  var c = b + B, e = v.h(s, B);
                  return a.h ? a.h(c, e) : a.call(null, c, e);
                }();
                null != z && w.add(z);
                B += 1;
              } else {
                break;
              }
            }
            return zg(Mg(w), g(b + t, y(e)));
          }
          t = function() {
            var c = C(e);
            return a.h ? a.h(b, c) : a.call(null, b, c);
          }();
          return null == t ? g(b + 1, E(e)) : Ke(t, g(b + 1, E(e)));
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
            var l = ph.h(c, qe), l = a.h ? a.h(l, h) : a.call(null, l, h);
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
      }(mh.g(-1));
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
}(), Ch = function() {
  function a(a, b, c, d) {
    return new sg(null, function() {
      var f = A(b), t = A(c), w = A(d);
      if (f && t && w) {
        var B = Ke, z;
        z = C(f);
        var D = C(t), K = C(w);
        z = a.j ? a.j(z, D, K) : a.call(null, z, D, K);
        f = B(z, e.v(a, E(f), E(t), E(w)));
      } else {
        f = null;
      }
      return f;
    }, null, null);
  }
  function b(a, b, c) {
    return new sg(null, function() {
      var d = A(b), f = A(c);
      if (d && f) {
        var t = Ke, w;
        w = C(d);
        var B = C(f);
        w = a.h ? a.h(w, B) : a.call(null, w, B);
        d = t(w, e.j(a, E(d), E(f)));
      } else {
        d = null;
      }
      return d;
    }, null, null);
  }
  function c(a, b) {
    return new sg(null, function() {
      var c = A(b);
      if (c) {
        if (S(c)) {
          for (var d = x(c), f = J(d), t = wg(f), w = 0;;) {
            if (w < f) {
              Lg(t, function() {
                var b = v.h(d, w);
                return a.g ? a.g(b) : a.call(null, b);
              }()), w += 1;
            } else {
              break;
            }
          }
          return zg(Mg(t), e.h(a, y(c)));
        }
        return Ke(function() {
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
        var f = null, w = function() {
          function c(a, b, e) {
            var f = null;
            2 < arguments.length && (f = G(Array.prototype.slice.call(arguments, 2), 0));
            return d.call(this, a, b, f);
          }
          function d(c, e, f) {
            e = R.j(a, e, f);
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
              return w.k(a, b, G(arguments, 2));
          }
          throw Error("Invalid arity: " + arguments.length);
        };
        f.D = 2;
        f.q = w.q;
        f.w = e;
        f.g = d;
        f.h = c;
        f.k = w.k;
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
        return new sg(null, function() {
          var b = e.h(A, a);
          return ah(Lf, b) ? Ke(e.h(C, b), D(e.h(E, b))) : null;
        }, null, null);
      };
      return e.h(function() {
        return function(b) {
          return R.h(a, b);
        };
      }(h), h(Ze.k(g, f, G([d, c], 0))));
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
}(), Dh = function() {
  function a(a, b) {
    return new sg(null, function() {
      if (0 < a) {
        var f = A(b);
        return f ? Ke(C(f), c.h(a - 1, E(f))) : null;
      }
      return null;
    }, null, null);
  }
  function b(a) {
    return function(b) {
      return function(a) {
        return function() {
          function c(d, g) {
            var h = Qc(a), l = ph.h(a, Qf), h = 0 < h ? b.h ? b.h(d, g) : b.call(null, d, g) : d;
            return 0 < l ? h : new re(h);
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
      }(mh.g(a));
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
}(), Eh = function() {
  function a(a, b) {
    return new sg(null, function(c) {
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
            var h = Qc(a);
            ph.h(a, Qf);
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
      }(mh.g(a));
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
}(), Fh = function() {
  function a(a, b) {
    return new sg(null, function(c) {
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
            var l = Qc(c);
            if (q(q(l) ? a.g ? a.g(h) : a.call(null, h) : l)) {
              return g;
            }
            nh(c, null);
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
      }(mh.g(!0));
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
}(), Gh = function() {
  function a(a, b) {
    return Dh.h(a, c.g(b));
  }
  function b(a) {
    return new sg(null, function() {
      return Ke(a, c.g(a));
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
}(), Hh = function() {
  function a(a, b) {
    return Dh.h(a, c.g(b));
  }
  function b(a) {
    return new sg(null, function() {
      return Ke(a.w ? a.w() : a.call(null), c.g(a));
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
}(), Jh = function Ih(b, c) {
  return Ke(c, new sg(null, function() {
    return Ih(b, b.g ? b.g(c) : b.call(null, c));
  }, null, null));
}, Kh = function() {
  function a(a, c) {
    return new sg(null, function() {
      var f = A(a), g = A(c);
      return f && g ? Ke(C(f), Ke(C(g), b.h(E(f), E(g)))) : null;
    }, null, null);
  }
  var b = null, c = function() {
    function a(b, d, h) {
      var l = null;
      2 < arguments.length && (l = G(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      return new sg(null, function() {
        var c = Ch.h(A, Ze.k(e, d, G([a], 0)));
        return ah(Lf, c) ? Rg.h(Ch.h(C, c), R.h(b, Ch.h(E, c))) : null;
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
function Lh(a, b) {
  return Eh.h(1, Kh.h(Gh.g(a), b));
}
var Nh = function() {
  function a(a) {
    return fh.h(Ch.g(a), Mh);
  }
  var b = null, c = function() {
    function a(c, d) {
      var h = null;
      1 < arguments.length && (h = G(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, h);
    }
    function b(a, c) {
      return R.h(Rg, R.j(Ch, a, c));
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
}(), Oh = function() {
  function a(a, b) {
    return new sg(null, function() {
      var f = A(b);
      if (f) {
        if (S(f)) {
          for (var g = x(f), h = J(g), l = wg(h), p = 0;;) {
            if (p < h) {
              var s;
              s = v.h(g, p);
              s = a.g ? a.g(s) : a.call(null, s);
              q(s) && (s = v.h(g, p), l.add(s));
              p += 1;
            } else {
              break;
            }
          }
          return zg(Mg(l), c.h(a, y(f)));
        }
        g = C(f);
        f = E(f);
        return q(a.g ? a.g(g) : a.call(null, g)) ? Ke(g, c.h(a, f)) : c.h(a, f);
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
}(), Ph = function() {
  function a(a, b) {
    return Oh.h(dh(a), b);
  }
  function b(a) {
    return Oh.g(dh(a));
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
function Qh(a, b, c) {
  return function e(c) {
    return new sg(null, function() {
      return Ke(c, q(a.g ? a.g(c) : a.call(null, c)) ? Nh.k(e, G([b.g ? b.g(c) : b.call(null, c)], 0)) : null);
    }, null, null);
  }(c);
}
function Rh(a) {
  return Oh.h(function(a) {
    return!lf(a);
  }, E(Qh(lf, A, a)));
}
var Sh = function() {
  function a(a, b, c) {
    return a && (a.K & 4 || a.Hh) ? Me(Ug(Mf.v(b, Vg, td(a), c)), ef(a)) : Mf.v(b, Ze, a, c);
  }
  function b(a, b) {
    return null != a ? a && (a.K & 4 || a.Hh) ? Me(Ug(Rb.j(ud, td(a), b)), ef(a)) : Rb.j(dc, a, b) : Rb.j(Ze, me, b);
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
}(), Th = function() {
  function a(a, b, c, d) {
    return Sh.h(Ye, Ch.v(a, b, c, d));
  }
  function b(a, b, c) {
    return Sh.h(Ye, Ch.j(a, b, c));
  }
  function c(a, b) {
    return Ug(Rb.j(function(b, c) {
      return Vg.h(b, a.g ? a.g(c) : a.call(null, c));
    }, td(Ye), b));
  }
  var d = null, e = function() {
    function a(c, d, e, f, t) {
      var w = null;
      4 < arguments.length && (w = G(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, w);
    }
    function b(a, c, d, e, f) {
      return Sh.h(Ye, R.k(Ch, a, c, d, e, G([f], 0)));
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
}(), Uh = function() {
  function a(a, b, c, h) {
    return new sg(null, function() {
      var l = A(h);
      if (l) {
        var p = Dh.h(a, l);
        return a === J(p) ? Ke(p, d.v(a, b, c, Eh.h(b, l))) : dc(me, Dh.h(a, Rg.h(p, c)));
      }
      return null;
    }, null, null);
  }
  function b(a, b, c) {
    return new sg(null, function() {
      var h = A(c);
      if (h) {
        var l = Dh.h(a, h);
        return a === J(l) ? Ke(l, d.j(a, b, Eh.h(b, h))) : null;
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
}(), Vh = function() {
  function a(a, b, c) {
    var g = Af;
    for (b = A(b);;) {
      if (b) {
        var h = a;
        if (h ? h.B & 256 || h.vg || (h.B ? 0 : Mb(qc, h)) : Mb(qc, h)) {
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
}(), Xh = function Wh(b, c, d) {
  var e = O.j(c, 0, null);
  return(c = gg(c)) ? Q.j(b, e, Wh(P.h(b, e), c, d)) : Q.j(b, e, d);
}, Yh = function() {
  function a(a, b, c, d, f, t) {
    var w = O.j(b, 0, null);
    return(b = gg(b)) ? Q.j(a, w, e.Wa(P.h(a, w), b, c, d, f, t)) : Q.j(a, w, function() {
      var b = P.h(a, w);
      return c.v ? c.v(b, d, f, t) : c.call(null, b, d, f, t);
    }());
  }
  function b(a, b, c, d, f) {
    var t = O.j(b, 0, null);
    return(b = gg(b)) ? Q.j(a, t, e.Q(P.h(a, t), b, c, d, f)) : Q.j(a, t, function() {
      var b = P.h(a, t);
      return c.j ? c.j(b, d, f) : c.call(null, b, d, f);
    }());
  }
  function c(a, b, c, d) {
    var f = O.j(b, 0, null);
    return(b = gg(b)) ? Q.j(a, f, e.v(P.h(a, f), b, c, d)) : Q.j(a, f, function() {
      var b = P.h(a, f);
      return c.h ? c.h(b, d) : c.call(null, b, d);
    }());
  }
  function d(a, b, c) {
    var d = O.j(b, 0, null);
    return(b = gg(b)) ? Q.j(a, d, e.j(P.h(a, d), b, c)) : Q.j(a, d, function() {
      var b = P.h(a, d);
      return c.g ? c.g(b) : c.call(null, b);
    }());
  }
  var e = null, f = function() {
    function a(c, d, e, f, g, B, z) {
      var D = null;
      6 < arguments.length && (D = G(Array.prototype.slice.call(arguments, 6), 0));
      return b.call(this, c, d, e, f, g, B, D);
    }
    function b(a, c, d, f, g, h, z) {
      var D = O.j(c, 0, null);
      return(c = gg(c)) ? Q.j(a, D, R.k(e, P.h(a, D), c, d, f, G([g, h, z], 0))) : Q.j(a, D, R.k(d, P.h(a, D), f, g, h, G([z], 0)));
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
      var z = C(a);
      a = E(a);
      return b(c, d, e, f, g, z, a);
    };
    a.k = b;
    return a;
  }(), e = function(e, h, l, p, s, t, w) {
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
function Zh(a, b) {
  this.ra = a;
  this.p = b;
}
function $h(a) {
  return new Zh(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function ai(a) {
  return new Zh(a.ra, Pb(a.p));
}
function bi(a) {
  a = a.F;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function ci(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = $h(a);
    d.p[0] = c;
    c = d;
    b -= 5;
  }
}
var ei = function di(b, c, d, e) {
  var f = ai(d), g = b.F - 1 >>> c & 31;
  5 === c ? f.p[g] = e : (d = d.p[g], b = null != d ? di(b, c - 5, d, e) : ci(null, c - 5, e), f.p[g] = b);
  return f;
};
function fi(a, b) {
  throw Error("No item " + u.g(a) + " in vector of length " + u.g(b));
}
function gi(a, b) {
  if (b >= bi(a)) {
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
function hi(a, b) {
  return 0 <= b && b < a.F ? gi(a, b) : fi(b, a.F);
}
var ji = function ii(b, c, d, e, f) {
  var g = ai(d);
  if (0 === c) {
    g.p[e & 31] = f;
  } else {
    var h = e >>> c & 31;
    b = ii(b, c - 5, d.p[h], e, f);
    g.p[h] = b;
  }
  return g;
}, li = function ki(b, c, d) {
  var e = b.F - 2 >>> c & 31;
  if (5 < c) {
    b = ki(b, c - 5, d.p[e]);
    if (null == b && 0 === e) {
      return null;
    }
    d = ai(d);
    d.p[e] = b;
    return d;
  }
  if (0 === e) {
    return null;
  }
  d = ai(d);
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
  return Gd(this);
};
k.equiv = function(a) {
  return this.J(null, a);
};
k.N = function(a, b) {
  return rc.j(this, b, null);
};
k.P = function(a, b, c) {
  return "number" === typeof b ? v.j(this, b, c) : c;
};
k.Xd = function(a, b, c) {
  a = 0;
  for (var d = c;;) {
    if (a < this.F) {
      var e = gi(this, a);
      c = e.length;
      a: {
        for (var f = 0;;) {
          if (f < c) {
            var g = f + a, h = e[f], d = b.j ? b.j(d, g, h) : b.call(null, d, g, h);
            if (se(d)) {
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
      if (se(e)) {
        return b = e, H.g ? H.g(b) : H.call(null, b);
      }
      a += c;
      d = e;
    } else {
      return d;
    }
  }
};
k.H = function(a, b) {
  return hi(this, b)[b & 31];
};
k.ub = function(a, b, c) {
  return 0 <= b && b < this.F ? gi(this, b)[b & 31] : c;
};
k.pd = function(a, b, c) {
  if (0 <= b && b < this.F) {
    return bi(this) <= b ? (a = Pb(this.la), a[b & 31] = c, new U(this.G, this.F, this.shift, this.root, a, null)) : new U(this.G, this.F, this.shift, ji(this, this.shift, this.root, b, c), this.la, null);
  }
  if (b === this.F) {
    return dc(this, c);
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
  return v.h(this, 0);
};
k.Zd = function() {
  return v.h(this, 1);
};
k.dd = function() {
  return 0 < this.F ? v.h(this, this.F - 1) : null;
};
k.ed = function() {
  if (0 === this.F) {
    throw Error("Can't pop empty vector");
  }
  if (1 === this.F) {
    return Yc(Ye, this.G);
  }
  if (1 < this.F - bi(this)) {
    return new U(this.G, this.F - 1, this.shift, this.root, this.la.slice(0, -1), null);
  }
  var a = gi(this, this.F - 2), b = li(this, this.shift, this.root), b = null == b ? V : b, c = this.F - 1;
  return 5 < this.shift && null == b.p[1] ? new U(this.G, c, this.shift - 5, b.p[0], a, null) : new U(this.G, c, this.shift, b, a, null);
};
k.Fd = function() {
  return 0 < this.F ? new Ie(this, this.F - 1, null) : null;
};
k.S = function() {
  var a = this.A;
  return null != a ? a : this.A = a = oe(this);
};
k.J = function(a, b) {
  return Je(this, b);
};
k.Ed = function() {
  var a = this;
  return new mi(a.F, a.shift, function() {
    var b = a.root;
    return ni.g ? ni.g(b) : ni.call(null, b);
  }(), function() {
    var b = a.la;
    return oi.g ? oi.g(b) : oi.call(null, b);
  }());
};
k.wa = function() {
  return Me(Ye, this.G);
};
k.Ka = function(a, b) {
  return te.h(this, b);
};
k.La = function(a, b, c) {
  a = 0;
  for (var d = c;;) {
    if (a < this.F) {
      var e = gi(this, a);
      c = e.length;
      a: {
        for (var f = 0;;) {
          if (f < c) {
            var g = e[f], d = b.h ? b.h(d, g) : b.call(null, d, g);
            if (se(d)) {
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
      if (se(e)) {
        return b = e, H.g ? H.g(b) : H.call(null, b);
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
    return Pc(this, b, c);
  }
  throw Error("Vector's key for assoc must be a number.");
};
k.W = function() {
  if (0 === this.F) {
    return null;
  }
  if (32 >= this.F) {
    return new le(this.la, 0);
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
  return pi.v ? pi.v(this, a, 0, 0) : pi.call(null, this, a, 0, 0);
};
k.M = function(a, b) {
  return new U(b, this.F, this.shift, this.root, this.la, this.A);
};
k.Y = function(a, b) {
  if (32 > this.F - bi(this)) {
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
  d ? (d = $h(null), d.p[0] = this.root, e = ci(null, this.shift, new Zh(null, this.la)), d.p[1] = e) : d = ei(this, this.shift, this.root, new Zh(null, this.la));
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
  return this.call.apply(this, [this].concat(Pb(b)));
};
k.g = function(a) {
  return this.H(null, a);
};
k.h = function(a, b) {
  return this.ub(null, a, b);
};
var V = new Zh(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), Ye = new U(null, 0, 5, V, [], 0);
function qi(a, b) {
  var c = a.length, d = b ? a : Pb(a);
  if (32 > c) {
    return new U(null, c, 5, V, d, null);
  }
  for (var e = 32, f = (new U(null, 32, 5, V, d.slice(0, 32), null)).Ed(null);;) {
    if (e < c) {
      var g = e + 1, f = Vg.h(f, d[e]), e = g
    } else {
      return vd(f);
    }
  }
}
function ri(a) {
  return vd(Rb.j(ud, td(Ye), a));
}
var Ci = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = G(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    return a instanceof le && 0 === a.R ? qi(a.p, !0) : ri(a);
  }
  a.D = 0;
  a.q = function(a) {
    a = A(a);
    return b(a);
  };
  a.k = b;
  return a;
}();
function Di(a, b, c, d, e, f) {
  this.Wb = a;
  this.Xc = b;
  this.R = c;
  this.ab = d;
  this.G = e;
  this.A = f;
  this.B = 32375020;
  this.K = 1536;
}
k = Di.prototype;
k.toString = function() {
  return Gd(this);
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
    a = pi.v ? pi.v(a, b, c, d) : pi.call(null, a, b, c, d);
    return null == a ? null : a;
  }
  return Cd(this);
};
k.S = function() {
  var a = this.A;
  return null != a ? a : this.A = a = oe(this);
};
k.J = function(a, b) {
  return Je(this, b);
};
k.wa = function() {
  return Me(Ye, this.G);
};
k.Ka = function(a, b) {
  var c = this;
  return te.h(function() {
    var a = c.Wb, b = c.R + c.ab, f = J(c.Wb);
    return Ei.j ? Ei.j(a, b, f) : Ei.call(null, a, b, f);
  }(), b);
};
k.La = function(a, b, c) {
  var d = this;
  return te.j(function() {
    var a = d.Wb, b = d.R + d.ab, c = J(d.Wb);
    return Ei.j ? Ei.j(a, b, c) : Ei.call(null, a, b, c);
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
    a = pi.v ? pi.v(a, b, c, d) : pi.call(null, a, b, c, d);
    return null == a ? me : a;
  }
  return y(this);
};
k.W = function() {
  return this;
};
k.hf = function() {
  return xg.h(this.Xc, this.ab);
};
k.jf = function() {
  var a = this.R + this.Xc.length;
  if (a < ac(this.Wb)) {
    var b = this.Wb, c = gi(this.Wb, a);
    return pi.v ? pi.v(b, c, a, 0) : pi.call(null, b, c, a, 0);
  }
  return me;
};
k.M = function(a, b) {
  var c = this.Wb, d = this.Xc, e = this.R, f = this.ab;
  return pi.Q ? pi.Q(c, d, e, f, b) : pi.call(null, c, d, e, f, b);
};
k.Y = function(a, b) {
  return Ke(b, this);
};
k.gf = function() {
  var a = this.R + this.Xc.length;
  if (a < ac(this.Wb)) {
    var b = this.Wb, c = gi(this.Wb, a);
    return pi.v ? pi.v(b, c, a, 0) : pi.call(null, b, c, a, 0);
  }
  return null;
};
var pi = function() {
  function a(a, b, c, d, l) {
    return new Di(a, b, c, d, l, null);
  }
  function b(a, b, c, d) {
    return new Di(a, b, c, d, null, null);
  }
  function c(a, b, c) {
    return new Di(a, hi(a, b), b, c, null, null);
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
function Fi(a, b, c, d, e) {
  this.G = a;
  this.Ec = b;
  this.start = c;
  this.end = d;
  this.A = e;
  this.B = 166617887;
  this.K = 8192;
}
k = Fi.prototype;
k.toString = function() {
  return Gd(this);
};
k.equiv = function(a) {
  return this.J(null, a);
};
k.N = function(a, b) {
  return rc.j(this, b, null);
};
k.P = function(a, b, c) {
  return "number" === typeof b ? v.j(this, b, c) : c;
};
k.H = function(a, b) {
  return 0 > b || this.end <= this.start + b ? fi(b, this.end - this.start) : v.h(this.Ec, this.start + b);
};
k.ub = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : v.j(this.Ec, this.start + b, c);
};
k.pd = function(a, b, c) {
  var d = this.start + b;
  a = this.G;
  c = Q.j(this.Ec, d, c);
  b = this.start;
  var e = this.end, d = d + 1, d = e > d ? e : d;
  return Gi.Q ? Gi.Q(a, c, b, d, null) : Gi.call(null, a, c, b, d, null);
};
k.L = function() {
  return this.G;
};
k.ma = function() {
  return new Fi(this.G, this.Ec, this.start, this.end, this.A);
};
k.Z = function() {
  return this.end - this.start;
};
k.dd = function() {
  return v.h(this.Ec, this.end - 1);
};
k.ed = function() {
  if (this.start === this.end) {
    throw Error("Can't pop empty vector");
  }
  var a = this.G, b = this.Ec, c = this.start, d = this.end - 1;
  return Gi.Q ? Gi.Q(a, b, c, d, null) : Gi.call(null, a, b, c, d, null);
};
k.Fd = function() {
  return this.start !== this.end ? new Ie(this, this.end - this.start - 1, null) : null;
};
k.S = function() {
  var a = this.A;
  return null != a ? a : this.A = a = oe(this);
};
k.J = function(a, b) {
  return Je(this, b);
};
k.wa = function() {
  return Me(Ye, this.G);
};
k.Ka = function(a, b) {
  return te.h(this, b);
};
k.La = function(a, b, c) {
  return te.j(this, b, c);
};
k.za = function(a, b, c) {
  if ("number" === typeof b) {
    return Pc(this, b, c);
  }
  throw Error("Subvec's key for assoc must be a number.");
};
k.W = function() {
  var a = this;
  return function(b) {
    return function d(e) {
      return e === a.end ? null : Ke(v.h(a.Ec, e), new sg(null, function() {
        return function() {
          return d(e + 1);
        };
      }(b), null, null));
    };
  }(this)(a.start);
};
k.M = function(a, b) {
  var c = this.Ec, d = this.start, e = this.end, f = this.A;
  return Gi.Q ? Gi.Q(b, c, d, e, f) : Gi.call(null, b, c, d, e, f);
};
k.Y = function(a, b) {
  var c = this.G, d = Pc(this.Ec, this.end, b), e = this.start, f = this.end + 1;
  return Gi.Q ? Gi.Q(c, d, e, f, null) : Gi.call(null, c, d, e, f, null);
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
  return this.call.apply(this, [this].concat(Pb(b)));
};
k.g = function(a) {
  return this.H(null, a);
};
k.h = function(a, b) {
  return this.ub(null, a, b);
};
function Gi(a, b, c, d, e) {
  for (;;) {
    if (b instanceof Fi) {
      c = b.start + c, d = b.start + d, b = b.Ec;
    } else {
      var f = J(b);
      if (0 > c || 0 > d || c > f || d > f) {
        throw Error("Index out of bounds");
      }
      return new Fi(a, b, c, d, e);
    }
  }
}
var Ei = function() {
  function a(a, b, c) {
    return Gi(null, a, b, c, null);
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
function Hi(a, b) {
  return a === b.ra ? b : new Zh(a, Pb(b.p));
}
function ni(a) {
  return new Zh({}, Pb(a.p));
}
function oi(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  pf(a, 0, b, 0, a.length);
  return b;
}
var Ji = function Ii(b, c, d, e) {
  d = Hi(b.root.ra, d);
  var f = b.F - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var g = d.p[f];
    b = null != g ? Ii(b, c - 5, g, e) : ci(b.root.ra, c - 5, e);
  }
  d.p[f] = b;
  return d;
};
function mi(a, b, c, d) {
  this.F = a;
  this.shift = b;
  this.root = c;
  this.la = d;
  this.B = 275;
  this.K = 88;
}
k = mi.prototype;
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
  return this.call.apply(this, [this].concat(Pb(b)));
};
k.g = function(a) {
  return this.N(null, a);
};
k.h = function(a, b) {
  return this.P(null, a, b);
};
k.N = function(a, b) {
  return rc.j(this, b, null);
};
k.P = function(a, b, c) {
  return "number" === typeof b ? v.j(this, b, c) : c;
};
k.H = function(a, b) {
  if (this.root.ra) {
    return hi(this, b)[b & 31];
  }
  throw Error("nth after persistent!");
};
k.ub = function(a, b, c) {
  return 0 <= b && b < this.F ? v.h(this, b) : c;
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
      return bi(this) <= b ? d.la[b & 31] = c : (a = function() {
        return function f(a, h) {
          var l = Hi(d.root.ra, h);
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
      return ud(this, c);
    }
    throw Error("Index " + u.g(b) + " out of bounds for TransientVector of length" + u.g(d.F));
  }
  throw Error("assoc! after persistent!");
};
k.ae = function(a, b, c) {
  if ("number" === typeof b) {
    return Ad(this, b, c);
  }
  throw Error("TransientVector's key for assoc! must be a number.");
};
k.nd = function(a, b) {
  if (this.root.ra) {
    if (32 > this.F - bi(this)) {
      this.la[this.F & 31] = b;
    } else {
      var c = new Zh(this.root.ra, this.la), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.la = d;
      if (this.F >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = ci(this.root.ra, this.shift, c);
        this.root = new Zh(this.root.ra, d);
        this.shift = e;
      } else {
        this.root = Ji(this, this.shift, this.root, c);
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
    var a = this.F - bi(this), b = Array(a);
    pf(this.la, 0, b, 0, a);
    return new U(null, this.F, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
function Ki(a, b, c, d) {
  this.G = a;
  this.Eb = b;
  this.xc = c;
  this.A = d;
  this.K = 0;
  this.B = 31850572;
}
k = Ki.prototype;
k.toString = function() {
  return Gd(this);
};
k.equiv = function(a) {
  return this.J(null, a);
};
k.L = function() {
  return this.G;
};
k.S = function() {
  var a = this.A;
  return null != a ? a : this.A = a = oe(this);
};
k.J = function(a, b) {
  return Je(this, b);
};
k.wa = function() {
  return Me(me, this.G);
};
k.Fa = function() {
  return C(this.Eb);
};
k.Xa = function() {
  var a = F(this.Eb);
  return a ? new Ki(this.G, a, this.xc, null) : null == this.xc ? bc(this) : new Ki(this.G, this.xc, null, null);
};
k.W = function() {
  return this;
};
k.M = function(a, b) {
  return new Ki(b, this.Eb, this.xc, this.A);
};
k.Y = function(a, b) {
  return Ke(b, this);
};
function Li(a, b, c, d, e) {
  this.G = a;
  this.count = b;
  this.Eb = c;
  this.xc = d;
  this.A = e;
  this.B = 31858766;
  this.K = 8192;
}
k = Li.prototype;
k.toString = function() {
  return Gd(this);
};
k.equiv = function(a) {
  return this.J(null, a);
};
k.L = function() {
  return this.G;
};
k.ma = function() {
  return new Li(this.G, this.count, this.Eb, this.xc, this.A);
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
    return a ? new Li(this.G, this.count - 1, a, this.xc, null) : new Li(this.G, this.count - 1, A(this.xc), Ye, null);
  }
  return this;
};
k.S = function() {
  var a = this.A;
  return null != a ? a : this.A = a = oe(this);
};
k.J = function(a, b) {
  return Je(this, b);
};
k.wa = function() {
  return Mi;
};
k.Fa = function() {
  return C(this.Eb);
};
k.Xa = function() {
  return E(A(this));
};
k.W = function() {
  var a = A(this.xc), b = this.Eb;
  return q(q(b) ? b : a) ? new Ki(null, this.Eb, A(a), null) : null;
};
k.M = function(a, b) {
  return new Li(b, this.count, this.Eb, this.xc, this.A);
};
k.Y = function(a, b) {
  var c;
  q(this.Eb) ? (c = this.xc, c = new Li(this.G, this.count + 1, this.Eb, Ze.h(q(c) ? c : Ye, b), null)) : c = new Li(this.G, this.count + 1, Ze.h(this.Eb, b), Ye, null);
  return c;
};
var Mi = new Li(null, 0, null, Ye, 0);
function Ni() {
  this.K = 0;
  this.B = 2097152;
}
Ni.prototype.J = function() {
  return!1;
};
Ni.prototype.equiv = function(a) {
  return this.J(null, a);
};
var Oi = new Ni;
function Pi(a, b) {
  return Cf(mf(b) ? J(a) === J(b) ? ah(Lf, Ch.h(function(a) {
    return ae.h(P.j(b, C(a), Oi), Oe(a));
  }, a)) : null : null);
}
function Qi(a) {
  this.da = a;
}
Qi.prototype.next = function() {
  if (null != this.da) {
    var a = C(this.da);
    this.da = F(this.da);
    return{done:!1, value:a};
  }
  return{done:!0, value:null};
};
function Ri(a) {
  return new Qi(A(a));
}
function Si(a) {
  this.da = a;
}
Si.prototype.next = function() {
  if (null != this.da) {
    var a = C(this.da), b = O.j(a, 0, null), a = O.j(a, 1, null);
    this.da = F(this.da);
    return{done:!1, value:[b, a]};
  }
  return{done:!0, value:null};
};
function Ti(a) {
  return new Si(A(a));
}
function Ui(a) {
  this.da = a;
}
Ui.prototype.next = function() {
  if (null != this.da) {
    var a = C(this.da);
    this.da = F(this.da);
    return{done:!1, value:[a, a]};
  }
  return{done:!0, value:null};
};
function Vi(a) {
  return new Ui(A(a));
}
function Wi(a, b) {
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
    if (d = la(b), q(q(d) ? d : "number" === typeof b)) {
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
      if (b instanceof ce) {
        a: {
          d = c.length;
          e = b.Hb;
          for (f = 0;;) {
            if (d <= f) {
              c = -1;
              break a;
            }
            g = c[f];
            if (g instanceof ce && e === g.Hb) {
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
              if (ae.h(b, c[e])) {
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
function Xi(a, b, c) {
  this.p = a;
  this.R = b;
  this.tb = c;
  this.K = 0;
  this.B = 32374990;
}
k = Xi.prototype;
k.toString = function() {
  return Gd(this);
};
k.equiv = function(a) {
  return this.J(null, a);
};
k.L = function() {
  return this.tb;
};
k.hb = function() {
  return this.R < this.p.length - 2 ? new Xi(this.p, this.R + 2, this.tb) : null;
};
k.Z = function() {
  return(this.p.length - this.R) / 2;
};
k.S = function() {
  return oe(this);
};
k.J = function(a, b) {
  return Je(this, b);
};
k.wa = function() {
  return Me(me, this.tb);
};
k.Ka = function(a, b) {
  return Ne.h(b, this);
};
k.La = function(a, b, c) {
  return Ne.j(b, c, this);
};
k.Fa = function() {
  return new U(null, 2, 5, V, [this.p[this.R], this.p[this.R + 1]], null);
};
k.Xa = function() {
  return this.R < this.p.length - 2 ? new Xi(this.p, this.R + 2, this.tb) : me;
};
k.W = function() {
  return this;
};
k.M = function(a, b) {
  return new Xi(this.p, this.R, b);
};
k.Y = function(a, b) {
  return Ke(b, this);
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
  return Gd(this);
};
k.equiv = function(a) {
  return this.J(null, a);
};
k.keys = function() {
  return Ri(Yi.g ? Yi.g(this) : Yi.call(null, this));
};
k.entries = function() {
  return Ti(A(this));
};
k.values = function() {
  return Ri(Zi.g ? Zi.g(this) : Zi.call(null, this));
};
k.has = function(a) {
  return Df(this, a);
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
        S(b) ? (c = x(b), b = y(b), g = c, d = J(c), c = g) : (c = C(b), g = O.j(c, 0, null), c = f = O.j(c, 1, null), a.h ? a.h(c, g) : a.call(null, c, g), b = F(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
k.N = function(a, b) {
  return rc.j(this, b, null);
};
k.P = function(a, b, c) {
  a = Wi(this, b);
  return-1 === a ? c : this.p[a + 1];
};
k.Xd = function(a, b, c) {
  a = this.p.length;
  for (var d = 0;;) {
    if (d < a) {
      var e = this.p[d], f = this.p[d + 1];
      c = b.j ? b.j(c, e, f) : b.call(null, c, e, f);
      if (se(c)) {
        return b = c, H.g ? H.g(b) : H.call(null, b);
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
  return null != a ? a : this.A = a = pe(this);
};
k.J = function(a, b) {
  return Pi(this, b);
};
k.Ed = function() {
  return new $i({}, this.p.length, Pb(this.p));
};
k.wa = function() {
  return Yc(aj, this.G);
};
k.Ka = function(a, b) {
  return Ne.h(b, this);
};
k.La = function(a, b, c) {
  return Ne.j(b, c, this);
};
k.Ra = function(a, b) {
  if (0 <= Wi(this, b)) {
    var c = this.p.length, d = c - 2;
    if (0 === d) {
      return bc(this);
    }
    for (var d = Array(d), e = 0, f = 0;;) {
      if (e >= c) {
        return new n(this.G, this.F - 1, d, null);
      }
      ae.h(b, this.p[e]) || (d[f] = this.p[e], d[f + 1] = this.p[e + 1], f += 2);
      e += 2;
    }
  } else {
    return this;
  }
};
k.za = function(a, b, c) {
  a = Wi(this, b);
  if (-1 === a) {
    if (this.F < bj) {
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
    return Yc(vc(Sh.h(cj, this), b, c), this.G);
  }
  if (c === this.p[a + 1]) {
    return this;
  }
  b = Pb(this.p);
  b[a + 1] = c;
  return new n(this.G, this.F, b, null);
};
k.ue = function(a, b) {
  return-1 !== Wi(this, b);
};
k.W = function() {
  var a = this.p;
  return 0 <= a.length - 2 ? new Xi(a, 0, null) : null;
};
k.M = function(a, b) {
  return new n(b, this.F, this.p, this.A);
};
k.Y = function(a, b) {
  if (nf(b)) {
    return vc(this, v.h(b, 0), v.h(b, 1));
  }
  for (var c = this, d = A(b);;) {
    if (null == d) {
      return c;
    }
    var e = C(d);
    if (nf(e)) {
      c = vc(c, v.h(e, 0), v.h(e, 1)), d = F(d);
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
  return this.call.apply(this, [this].concat(Pb(b)));
};
k.g = function(a) {
  return this.N(null, a);
};
k.h = function(a, b) {
  return this.P(null, a, b);
};
var aj = new n(null, 0, [], null), bj = 8;
function dj(a, b, c) {
  a = b ? a : Pb(a);
  if (c) {
    return new n(null, a.length / 2, a, null);
  }
  c = a.length;
  b = 0;
  for (var d = td(aj);;) {
    if (b < c) {
      var e = b + 2, d = wd(d, a[b], a[b + 1]);
      b = e;
    } else {
      return vd(d);
    }
  }
}
function $i(a, b, c) {
  this.Kd = a;
  this.Pd = b;
  this.p = c;
  this.K = 56;
  this.B = 258;
}
k = $i.prototype;
k.ae = function(a, b, c) {
  var d = this;
  if (q(d.Kd)) {
    a = Wi(this, b);
    if (-1 === a) {
      return d.Pd + 2 <= 2 * bj ? (d.Pd += 2, d.p.push(b), d.p.push(c), this) : Wg.j(function() {
        var a = d.Pd, b = d.p;
        return ej.h ? ej.h(a, b) : ej.call(null, a, b);
      }(), b, c);
    }
    c !== d.p[a + 1] && (d.p[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
k.nd = function(a, b) {
  if (q(this.Kd)) {
    if (b ? b.B & 2048 || b.Mh || (b.B ? 0 : Mb(Dc, b)) : Mb(Dc, b)) {
      return wd(this, jg.g ? jg.g(b) : jg.call(null, b), kg.g ? kg.g(b) : kg.call(null, b));
    }
    for (var c = A(b), d = this;;) {
      var e = C(c);
      if (q(e)) {
        var f = e, c = F(c), d = wd(d, function() {
          var a = f;
          return jg.g ? jg.g(a) : jg.call(null, a);
        }(), function() {
          var a = f;
          return kg.g ? kg.g(a) : kg.call(null, a);
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
    return this.Kd = !1, new n(null, $f(this.Pd, 2), this.p, null);
  }
  throw Error("persistent! called twice");
};
k.N = function(a, b) {
  return rc.j(this, b, null);
};
k.P = function(a, b, c) {
  if (q(this.Kd)) {
    return a = Wi(this, b), -1 === a ? c : this.p[a + 1];
  }
  throw Error("lookup after persistent!");
};
k.Z = function() {
  if (q(this.Kd)) {
    return $f(this.Pd, 2);
  }
  throw Error("count after persistent!");
};
function ej(a, b) {
  for (var c = td(cj), d = 0;;) {
    if (d < a) {
      c = Wg.j(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function fj() {
  this.I = !1;
}
function gj(a, b) {
  return a === b ? !0 : X(a, b) ? !0 : ae.h(a, b);
}
var hj = function() {
  function a(a, b, c, g, h) {
    a = Pb(a);
    a[b] = c;
    a[g] = h;
    return a;
  }
  function b(a, b, c) {
    a = Pb(a);
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
function ij(a, b) {
  var c = Array(a.length - 2);
  pf(a, 0, c, 0, 2 * b);
  pf(a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
  return c;
}
var jj = function() {
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
function kj(a, b, c) {
  for (var d = a.length, e = 0, f = c;;) {
    if (e < d) {
      c = a[e];
      if (null != c) {
        var g = a[e + 1];
        c = b.j ? b.j(f, c, g) : b.call(null, f, c, g);
      } else {
        c = a[e + 1], c = null != c ? c.vd(b, f) : f;
      }
      if (se(c)) {
        return a = c, H.g ? H.g(a) : H.call(null, a);
      }
      e += 2;
      f = c;
    } else {
      return f;
    }
  }
}
function lj(a, b, c) {
  this.ra = a;
  this.xa = b;
  this.p = c;
}
k = lj.prototype;
k.Ld = function(a) {
  if (a === this.ra) {
    return this;
  }
  var b = dg(this.xa), c = Array(0 > b ? 4 : 2 * (b + 1));
  pf(this.p, 0, c, 0, 2 * b);
  return new lj(a, this.xa, c);
};
k.ge = function() {
  var a = this.p;
  return mj.g ? mj.g(a) : mj.call(null, a);
};
k.vd = function(a, b) {
  return kj(this.p, a, b);
};
k.hd = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.xa & e)) {
    return d;
  }
  var f = dg(this.xa & e - 1), e = this.p[2 * f], f = this.p[2 * f + 1];
  return null == e ? f.hd(a + 5, b, c, d) : gj(c, e) ? f : d;
};
k.tc = function(a, b, c, d, e, f) {
  var g = 1 << (c >>> b & 31), h = dg(this.xa & g - 1);
  if (0 === (this.xa & g)) {
    var l = dg(this.xa);
    if (2 * l < this.p.length) {
      var p = this.Ld(a), s = p.p;
      f.I = !0;
      qf(s, 2 * h, s, 2 * (h + 1), 2 * (l - h));
      s[2 * h] = d;
      s[2 * h + 1] = e;
      p.xa |= g;
      return p;
    }
    if (16 <= l) {
      g = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      g[c >>> b & 31] = nj.tc(a, b + 5, c, d, e, f);
      for (p = h = 0;;) {
        if (32 > h) {
          0 !== (this.xa >>> h & 1) && (g[h] = null != this.p[p] ? nj.tc(a, b + 5, Yd(this.p[p]), this.p[p], this.p[p + 1], f) : this.p[p + 1], p += 2), h += 1;
        } else {
          break;
        }
      }
      return new oj(a, l + 1, g);
    }
    s = Array(2 * (l + 4));
    pf(this.p, 0, s, 0, 2 * h);
    s[2 * h] = d;
    s[2 * h + 1] = e;
    pf(this.p, 2 * h, s, 2 * (h + 1), 2 * (l - h));
    f.I = !0;
    p = this.Ld(a);
    p.p = s;
    p.xa |= g;
    return p;
  }
  var t = this.p[2 * h], w = this.p[2 * h + 1];
  if (null == t) {
    return l = w.tc(a, b + 5, c, d, e, f), l === w ? this : jj.v(this, a, 2 * h + 1, l);
  }
  if (gj(d, t)) {
    return e === w ? this : jj.v(this, a, 2 * h + 1, e);
  }
  f.I = !0;
  return jj.Wa(this, a, 2 * h, null, 2 * h + 1, function() {
    var f = b + 5;
    return pj.Ib ? pj.Ib(a, f, t, w, c, d, e) : pj.call(null, a, f, t, w, c, d, e);
  }());
};
k.sc = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), g = dg(this.xa & f - 1);
  if (0 === (this.xa & f)) {
    var h = dg(this.xa);
    if (16 <= h) {
      f = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      f[b >>> a & 31] = nj.sc(a + 5, b, c, d, e);
      for (var l = g = 0;;) {
        if (32 > g) {
          0 !== (this.xa >>> g & 1) && (f[g] = null != this.p[l] ? nj.sc(a + 5, Yd(this.p[l]), this.p[l], this.p[l + 1], e) : this.p[l + 1], l += 2), g += 1;
        } else {
          break;
        }
      }
      return new oj(null, h + 1, f);
    }
    l = Array(2 * (h + 1));
    pf(this.p, 0, l, 0, 2 * g);
    l[2 * g] = c;
    l[2 * g + 1] = d;
    pf(this.p, 2 * g, l, 2 * (g + 1), 2 * (h - g));
    e.I = !0;
    return new lj(null, this.xa | f, l);
  }
  var p = this.p[2 * g], s = this.p[2 * g + 1];
  if (null == p) {
    return h = s.sc(a + 5, b, c, d, e), h === s ? this : new lj(null, this.xa, hj.j(this.p, 2 * g + 1, h));
  }
  if (gj(c, p)) {
    return d === s ? this : new lj(null, this.xa, hj.j(this.p, 2 * g + 1, d));
  }
  e.I = !0;
  return new lj(null, this.xa, hj.Q(this.p, 2 * g, null, 2 * g + 1, function() {
    var e = a + 5;
    return pj.Wa ? pj.Wa(e, p, s, b, c, d) : pj.call(null, e, p, s, b, c, d);
  }()));
};
k.he = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if (0 === (this.xa & d)) {
    return this;
  }
  var e = dg(this.xa & d - 1), f = this.p[2 * e], g = this.p[2 * e + 1];
  return null == f ? (a = g.he(a + 5, b, c), a === g ? this : null != a ? new lj(null, this.xa, hj.j(this.p, 2 * e + 1, a)) : this.xa === d ? null : new lj(null, this.xa ^ d, ij(this.p, e))) : gj(c, f) ? new lj(null, this.xa ^ d, ij(this.p, e)) : this;
};
var nj = new lj(null, 0, []);
function oj(a, b, c) {
  this.ra = a;
  this.F = b;
  this.p = c;
}
k = oj.prototype;
k.Ld = function(a) {
  return a === this.ra ? this : new oj(a, this.F, Pb(this.p));
};
k.ge = function() {
  var a = this.p;
  return qj.g ? qj.g(a) : qj.call(null, a);
};
k.vd = function(a, b) {
  for (var c = this.p.length, d = 0, e = b;;) {
    if (d < c) {
      var f = this.p[d];
      if (null != f && (e = f.vd(a, e), se(e))) {
        return c = e, H.g ? H.g(c) : H.call(null, c);
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
    return a = jj.v(this, a, g, nj.tc(a, b + 5, c, d, e, f)), a.F += 1, a;
  }
  b = h.tc(a, b + 5, c, d, e, f);
  return b === h ? this : jj.v(this, a, g, b);
};
k.sc = function(a, b, c, d, e) {
  var f = b >>> a & 31, g = this.p[f];
  if (null == g) {
    return new oj(null, this.F + 1, hj.j(this.p, f, nj.sc(a + 5, b, c, d, e)));
  }
  a = g.sc(a + 5, b, c, d, e);
  return a === g ? this : new oj(null, this.F, hj.j(this.p, f, a));
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
                d = new lj(null, g, b);
                break a;
              }
            }
            d = void 0;
          }
        } else {
          d = new oj(null, this.F - 1, hj.j(this.p, d, a));
        }
      } else {
        d = new oj(null, this.F, hj.j(this.p, d, a));
      }
    }
    return d;
  }
  return this;
};
function rj(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (gj(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return-1;
    }
  }
}
function sj(a, b, c, d) {
  this.ra = a;
  this.Vc = b;
  this.F = c;
  this.p = d;
}
k = sj.prototype;
k.Ld = function(a) {
  if (a === this.ra) {
    return this;
  }
  var b = Array(2 * (this.F + 1));
  pf(this.p, 0, b, 0, 2 * this.F);
  return new sj(a, this.Vc, this.F, b);
};
k.ge = function() {
  var a = this.p;
  return mj.g ? mj.g(a) : mj.call(null, a);
};
k.vd = function(a, b) {
  return kj(this.p, a, b);
};
k.hd = function(a, b, c, d) {
  a = rj(this.p, this.F, c);
  return 0 > a ? d : gj(c, this.p[a]) ? this.p[a + 1] : d;
};
k.tc = function(a, b, c, d, e, f) {
  if (c === this.Vc) {
    b = rj(this.p, this.F, d);
    if (-1 === b) {
      if (this.p.length > 2 * this.F) {
        return a = jj.Wa(this, a, 2 * this.F, d, 2 * this.F + 1, e), f.I = !0, a.F += 1, a;
      }
      c = this.p.length;
      b = Array(c + 2);
      pf(this.p, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      f.I = !0;
      f = this.F + 1;
      a === this.ra ? (this.p = b, this.F = f, a = this) : a = new sj(this.ra, this.Vc, f, b);
      return a;
    }
    return this.p[b + 1] === e ? this : jj.v(this, a, b + 1, e);
  }
  return(new lj(a, 1 << (this.Vc >>> b & 31), [null, this, null, null])).tc(a, b, c, d, e, f);
};
k.sc = function(a, b, c, d, e) {
  return b === this.Vc ? (a = rj(this.p, this.F, c), -1 === a ? (a = 2 * this.F, b = Array(a + 2), pf(this.p, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.I = !0, new sj(null, this.Vc, this.F + 1, b)) : ae.h(this.p[a], d) ? this : new sj(null, this.Vc, this.F, hj.j(this.p, a + 1, d))) : (new lj(null, 1 << (this.Vc >>> a & 31), [null, this])).sc(a, b, c, d, e);
};
k.he = function(a, b, c) {
  a = rj(this.p, this.F, c);
  return-1 === a ? this : 1 === this.F ? null : new sj(null, this.Vc, this.F - 1, ij(this.p, $f(a, 2)));
};
var pj = function() {
  function a(a, b, c, g, h, l, p) {
    var s = Yd(c);
    if (s === h) {
      return new sj(null, s, 2, [c, g, l, p]);
    }
    var t = new fj;
    return nj.tc(a, b, s, c, g, t).tc(a, b, h, l, p, t);
  }
  function b(a, b, c, g, h, l) {
    var p = Yd(b);
    if (p === g) {
      return new sj(null, p, 2, [b, c, h, l]);
    }
    var s = new fj;
    return nj.sc(a, p, b, c, s).sc(a, g, h, l, s);
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
function tj(a, b, c, d, e) {
  this.G = a;
  this.jd = b;
  this.R = c;
  this.da = d;
  this.A = e;
  this.K = 0;
  this.B = 32374860;
}
k = tj.prototype;
k.toString = function() {
  return Gd(this);
};
k.equiv = function(a) {
  return this.J(null, a);
};
k.L = function() {
  return this.G;
};
k.S = function() {
  var a = this.A;
  return null != a ? a : this.A = a = oe(this);
};
k.J = function(a, b) {
  return Je(this, b);
};
k.wa = function() {
  return Me(me, this.G);
};
k.Ka = function(a, b) {
  return Ne.h(b, this);
};
k.La = function(a, b, c) {
  return Ne.j(b, c, this);
};
k.Fa = function() {
  return null == this.da ? new U(null, 2, 5, V, [this.jd[this.R], this.jd[this.R + 1]], null) : C(this.da);
};
k.Xa = function() {
  if (null == this.da) {
    var a = this.jd, b = this.R + 2;
    return mj.j ? mj.j(a, b, null) : mj.call(null, a, b, null);
  }
  var a = this.jd, b = this.R, c = F(this.da);
  return mj.j ? mj.j(a, b, c) : mj.call(null, a, b, c);
};
k.W = function() {
  return this;
};
k.M = function(a, b) {
  return new tj(b, this.jd, this.R, this.da, this.A);
};
k.Y = function(a, b) {
  return Ke(b, this);
};
var mj = function() {
  function a(a, b, c) {
    if (null == c) {
      for (c = a.length;;) {
        if (b < c) {
          if (null != a[b]) {
            return new tj(null, a, b, null, null);
          }
          var g = a[b + 1];
          if (q(g) && (g = g.ge(), q(g))) {
            return new tj(null, a, b + 2, g, null);
          }
          b += 2;
        } else {
          return null;
        }
      }
    } else {
      return new tj(null, a, b, c, null);
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
function uj(a, b, c, d, e) {
  this.G = a;
  this.jd = b;
  this.R = c;
  this.da = d;
  this.A = e;
  this.K = 0;
  this.B = 32374860;
}
k = uj.prototype;
k.toString = function() {
  return Gd(this);
};
k.equiv = function(a) {
  return this.J(null, a);
};
k.L = function() {
  return this.G;
};
k.S = function() {
  var a = this.A;
  return null != a ? a : this.A = a = oe(this);
};
k.J = function(a, b) {
  return Je(this, b);
};
k.wa = function() {
  return Me(me, this.G);
};
k.Ka = function(a, b) {
  return Ne.h(b, this);
};
k.La = function(a, b, c) {
  return Ne.j(b, c, this);
};
k.Fa = function() {
  return C(this.da);
};
k.Xa = function() {
  var a = this.jd, b = this.R, c = F(this.da);
  return qj.v ? qj.v(null, a, b, c) : qj.call(null, null, a, b, c);
};
k.W = function() {
  return this;
};
k.M = function(a, b) {
  return new uj(b, this.jd, this.R, this.da, this.A);
};
k.Y = function(a, b) {
  return Ke(b, this);
};
var qj = function() {
  function a(a, b, c, g) {
    if (null == g) {
      for (g = b.length;;) {
        if (c < g) {
          var h = b[c];
          if (q(h) && (h = h.ge(), q(h))) {
            return new uj(a, b, c + 1, h, null);
          }
          c += 1;
        } else {
          return null;
        }
      }
    } else {
      return new uj(a, b, c, g, null);
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
function vj(a, b, c, d, e, f) {
  this.G = a;
  this.F = b;
  this.root = c;
  this.ib = d;
  this.Gb = e;
  this.A = f;
  this.B = 16123663;
  this.K = 8196;
}
k = vj.prototype;
k.toString = function() {
  return Gd(this);
};
k.equiv = function(a) {
  return this.J(null, a);
};
k.keys = function() {
  return Ri(Yi.g ? Yi.g(this) : Yi.call(null, this));
};
k.entries = function() {
  return Ti(A(this));
};
k.values = function() {
  return Ri(Zi.g ? Zi.g(this) : Zi.call(null, this));
};
k.has = function(a) {
  return Df(this, a);
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
        S(b) ? (c = x(b), b = y(b), g = c, d = J(c), c = g) : (c = C(b), g = O.j(c, 0, null), c = f = O.j(c, 1, null), a.h ? a.h(c, g) : a.call(null, c, g), b = F(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
k.N = function(a, b) {
  return rc.j(this, b, null);
};
k.P = function(a, b, c) {
  return null == b ? this.ib ? this.Gb : c : null == this.root ? c : this.root.hd(0, Yd(b), b, c);
};
k.Xd = function(a, b, c) {
  this.ib && (a = this.Gb, c = b.j ? b.j(c, null, a) : b.call(null, c, null, a));
  return se(c) ? H.g ? H.g(c) : H.call(null, c) : null != this.root ? this.root.vd(b, c) : c;
};
k.L = function() {
  return this.G;
};
k.ma = function() {
  return new vj(this.G, this.F, this.root, this.ib, this.Gb, this.A);
};
k.Z = function() {
  return this.F;
};
k.S = function() {
  var a = this.A;
  return null != a ? a : this.A = a = pe(this);
};
k.J = function(a, b) {
  return Pi(this, b);
};
k.Ed = function() {
  return new wj({}, this.root, this.F, this.ib, this.Gb);
};
k.wa = function() {
  return Yc(cj, this.G);
};
k.Ra = function(a, b) {
  if (null == b) {
    return this.ib ? new vj(this.G, this.F - 1, this.root, !1, null, null) : this;
  }
  if (null == this.root) {
    return this;
  }
  var c = this.root.he(0, Yd(b), b);
  return c === this.root ? this : new vj(this.G, this.F - 1, c, this.ib, this.Gb, null);
};
k.za = function(a, b, c) {
  if (null == b) {
    return this.ib && c === this.Gb ? this : new vj(this.G, this.ib ? this.F : this.F + 1, this.root, !0, c, null);
  }
  a = new fj;
  b = (null == this.root ? nj : this.root).sc(0, Yd(b), b, c, a);
  return b === this.root ? this : new vj(this.G, a.I ? this.F + 1 : this.F, b, this.ib, this.Gb, null);
};
k.ue = function(a, b) {
  return null == b ? this.ib : null == this.root ? !1 : this.root.hd(0, Yd(b), b, Af) !== Af;
};
k.W = function() {
  if (0 < this.F) {
    var a = null != this.root ? this.root.ge() : null;
    return this.ib ? Ke(new U(null, 2, 5, V, [null, this.Gb], null), a) : a;
  }
  return null;
};
k.M = function(a, b) {
  return new vj(b, this.F, this.root, this.ib, this.Gb, this.A);
};
k.Y = function(a, b) {
  if (nf(b)) {
    return vc(this, v.h(b, 0), v.h(b, 1));
  }
  for (var c = this, d = A(b);;) {
    if (null == d) {
      return c;
    }
    var e = C(d);
    if (nf(e)) {
      c = vc(c, v.h(e, 0), v.h(e, 1)), d = F(d);
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
  return this.call.apply(this, [this].concat(Pb(b)));
};
k.g = function(a) {
  return this.N(null, a);
};
k.h = function(a, b) {
  return this.P(null, a, b);
};
var cj = new vj(null, 0, null, !1, null, 0);
function af(a, b) {
  for (var c = a.length, d = 0, e = td(cj);;) {
    if (d < c) {
      var f = d + 1, e = e.ae(null, a[d], b[d]), d = f
    } else {
      return vd(e);
    }
  }
}
function wj(a, b, c, d, e) {
  this.ra = a;
  this.root = b;
  this.count = c;
  this.ib = d;
  this.Gb = e;
  this.K = 56;
  this.B = 258;
}
k = wj.prototype;
k.ae = function(a, b, c) {
  return xj(this, b, c);
};
k.nd = function(a, b) {
  return yj(this, b);
};
k.od = function() {
  var a;
  if (this.ra) {
    this.ra = null, a = new vj(null, this.count, this.root, this.ib, this.Gb, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
k.N = function(a, b) {
  return null == b ? this.ib ? this.Gb : null : null == this.root ? null : this.root.hd(0, Yd(b), b);
};
k.P = function(a, b, c) {
  return null == b ? this.ib ? this.Gb : c : null == this.root ? c : this.root.hd(0, Yd(b), b, c);
};
k.Z = function() {
  if (this.ra) {
    return this.count;
  }
  throw Error("count after persistent!");
};
function yj(a, b) {
  if (a.ra) {
    if (b ? b.B & 2048 || b.Mh || (b.B ? 0 : Mb(Dc, b)) : Mb(Dc, b)) {
      return xj(a, jg.g ? jg.g(b) : jg.call(null, b), kg.g ? kg.g(b) : kg.call(null, b));
    }
    for (var c = A(b), d = a;;) {
      var e = C(c);
      if (q(e)) {
        var f = e, c = F(c), d = xj(d, function() {
          var a = f;
          return jg.g ? jg.g(a) : jg.call(null, a);
        }(), function() {
          var a = f;
          return kg.g ? kg.g(a) : kg.call(null, a);
        }())
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent");
  }
}
function xj(a, b, c) {
  if (a.ra) {
    if (null == b) {
      a.Gb !== c && (a.Gb = c), a.ib || (a.count += 1, a.ib = !0);
    } else {
      var d = new fj;
      b = (null == a.root ? nj : a.root).tc(a.ra, 0, Yd(b), b, c, d);
      b !== a.root && (a.root = b);
      d.I && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
function zj(a, b, c) {
  for (var d = b;;) {
    if (null != a) {
      b = c ? a.left : a.right, d = Ze.h(d, a), a = b;
    } else {
      return d;
    }
  }
}
function Aj(a, b, c, d, e) {
  this.G = a;
  this.stack = b;
  this.qe = c;
  this.F = d;
  this.A = e;
  this.K = 0;
  this.B = 32374862;
}
k = Aj.prototype;
k.toString = function() {
  return Gd(this);
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
  return null != a ? a : this.A = a = oe(this);
};
k.J = function(a, b) {
  return Je(this, b);
};
k.wa = function() {
  return Me(me, this.G);
};
k.Ka = function(a, b) {
  return Ne.h(b, this);
};
k.La = function(a, b, c) {
  return Ne.j(b, c, this);
};
k.Fa = function() {
  return ff(this.stack);
};
k.Xa = function() {
  var a = C(this.stack), a = zj(this.qe ? a.right : a.left, F(this.stack), this.qe);
  return null != a ? new Aj(null, a, this.qe, this.F - 1, null) : me;
};
k.W = function() {
  return this;
};
k.M = function(a, b) {
  return new Aj(b, this.stack, this.qe, this.F, this.A);
};
k.Y = function(a, b) {
  return Ke(b, this);
};
function Bj(a, b, c) {
  return new Aj(null, zj(a, null, b), b, c, null);
}
function Cj(a, b, c, d) {
  return c instanceof Dj ? c.left instanceof Dj ? new Dj(c.key, c.I, c.left.Fc(), new Ej(a, b, c.right, d, null), null) : c.right instanceof Dj ? new Dj(c.right.key, c.right.I, new Ej(c.key, c.I, c.left, c.right.left, null), new Ej(a, b, c.right.right, d, null), null) : new Ej(a, b, c, d, null) : new Ej(a, b, c, d, null);
}
function Fj(a, b, c, d) {
  return d instanceof Dj ? d.right instanceof Dj ? new Dj(d.key, d.I, new Ej(a, b, c, d.left, null), d.right.Fc(), null) : d.left instanceof Dj ? new Dj(d.left.key, d.left.I, new Ej(a, b, c, d.left.left, null), new Ej(d.key, d.I, d.left.right, d.right, null), null) : new Ej(a, b, c, d, null) : new Ej(a, b, c, d, null);
}
function Gj(a, b, c, d) {
  if (c instanceof Dj) {
    return new Dj(a, b, c.Fc(), d, null);
  }
  if (d instanceof Ej) {
    return Fj(a, b, c, d.me());
  }
  if (d instanceof Dj && d.left instanceof Ej) {
    return new Dj(d.left.key, d.left.I, new Ej(a, b, c, d.left.left, null), Fj(d.key, d.I, d.left.right, d.right.me()), null);
  }
  throw Error("red-black tree invariant violation");
}
var Ij = function Hj(b, c, d) {
  d = null != b.left ? Hj(b.left, c, d) : d;
  if (se(d)) {
    return H.g ? H.g(d) : H.call(null, d);
  }
  var e = b.key, f = b.I;
  d = c.j ? c.j(d, e, f) : c.call(null, d, e, f);
  if (se(d)) {
    return H.g ? H.g(d) : H.call(null, d);
  }
  b = null != b.right ? Hj(b.right, c, d) : d;
  return se(b) ? H.g ? H.g(b) : H.call(null, b) : b;
};
function Ej(a, b, c, d, e) {
  this.key = a;
  this.I = b;
  this.left = c;
  this.right = d;
  this.A = e;
  this.K = 0;
  this.B = 32402207;
}
k = Ej.prototype;
k.ig = function(a) {
  return a.mg(this);
};
k.me = function() {
  return new Dj(this.key, this.I, this.left, this.right, null);
};
k.Fc = function() {
  return this;
};
k.hg = function(a) {
  return a.lg(this);
};
k.replace = function(a, b, c, d) {
  return new Ej(a, b, c, d, null);
};
k.lg = function(a) {
  return new Ej(a.key, a.I, this, a.right, null);
};
k.mg = function(a) {
  return new Ej(a.key, a.I, a.left, this, null);
};
k.vd = function(a, b) {
  return Ij(this, a, b);
};
k.N = function(a, b) {
  return v.j(this, b, null);
};
k.P = function(a, b, c) {
  return v.j(this, b, c);
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
  return null != a ? a : this.A = a = oe(this);
};
k.J = function(a, b) {
  return Je(this, b);
};
k.wa = function() {
  return Ye;
};
k.Ka = function(a, b) {
  return te.h(this, b);
};
k.La = function(a, b, c) {
  return te.j(this, b, c);
};
k.za = function(a, b, c) {
  return Q.j(new U(null, 2, 5, V, [this.key, this.I], null), b, c);
};
k.W = function() {
  return dc(dc(me, this.I), this.key);
};
k.M = function(a, b) {
  return Me(new U(null, 2, 5, V, [this.key, this.I], null), b);
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
  return this.call.apply(this, [this].concat(Pb(b)));
};
k.g = function(a) {
  return this.N(null, a);
};
k.h = function(a, b) {
  return this.P(null, a, b);
};
function Dj(a, b, c, d, e) {
  this.key = a;
  this.I = b;
  this.left = c;
  this.right = d;
  this.A = e;
  this.K = 0;
  this.B = 32402207;
}
k = Dj.prototype;
k.ig = function(a) {
  return new Dj(this.key, this.I, this.left, a, null);
};
k.me = function() {
  throw Error("red-black tree invariant violation");
};
k.Fc = function() {
  return new Ej(this.key, this.I, this.left, this.right, null);
};
k.hg = function(a) {
  return new Dj(this.key, this.I, a, this.right, null);
};
k.replace = function(a, b, c, d) {
  return new Dj(a, b, c, d, null);
};
k.lg = function(a) {
  return this.left instanceof Dj ? new Dj(this.key, this.I, this.left.Fc(), new Ej(a.key, a.I, this.right, a.right, null), null) : this.right instanceof Dj ? new Dj(this.right.key, this.right.I, new Ej(this.key, this.I, this.left, this.right.left, null), new Ej(a.key, a.I, this.right.right, a.right, null), null) : new Ej(a.key, a.I, this, a.right, null);
};
k.mg = function(a) {
  return this.right instanceof Dj ? new Dj(this.key, this.I, new Ej(a.key, a.I, a.left, this.left, null), this.right.Fc(), null) : this.left instanceof Dj ? new Dj(this.left.key, this.left.I, new Ej(a.key, a.I, a.left, this.left.left, null), new Ej(this.key, this.I, this.left.right, this.right, null), null) : new Ej(a.key, a.I, a.left, this, null);
};
k.vd = function(a, b) {
  return Ij(this, a, b);
};
k.N = function(a, b) {
  return v.j(this, b, null);
};
k.P = function(a, b, c) {
  return v.j(this, b, c);
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
  return null != a ? a : this.A = a = oe(this);
};
k.J = function(a, b) {
  return Je(this, b);
};
k.wa = function() {
  return Ye;
};
k.Ka = function(a, b) {
  return te.h(this, b);
};
k.La = function(a, b, c) {
  return te.j(this, b, c);
};
k.za = function(a, b, c) {
  return Q.j(new U(null, 2, 5, V, [this.key, this.I], null), b, c);
};
k.W = function() {
  return dc(dc(me, this.I), this.key);
};
k.M = function(a, b) {
  return Me(new U(null, 2, 5, V, [this.key, this.I], null), b);
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
  return this.call.apply(this, [this].concat(Pb(b)));
};
k.g = function(a) {
  return this.N(null, a);
};
k.h = function(a, b) {
  return this.P(null, a, b);
};
var Kj = function Jj(b, c, d, e, f) {
  if (null == c) {
    return new Dj(d, e, null, null, null);
  }
  var g;
  g = c.key;
  g = b.h ? b.h(d, g) : b.call(null, d, g);
  if (0 === g) {
    return f[0] = c, null;
  }
  if (0 > g) {
    return b = Jj(b, c.left, d, e, f), null != b ? c.hg(b) : null;
  }
  b = Jj(b, c.right, d, e, f);
  return null != b ? c.ig(b) : null;
}, Mj = function Lj(b, c) {
  if (null == b) {
    return c;
  }
  if (null == c) {
    return b;
  }
  if (b instanceof Dj) {
    if (c instanceof Dj) {
      var d = Lj(b.right, c.left);
      return d instanceof Dj ? new Dj(d.key, d.I, new Dj(b.key, b.I, b.left, d.left, null), new Dj(c.key, c.I, d.right, c.right, null), null) : new Dj(b.key, b.I, b.left, new Dj(c.key, c.I, d, c.right, null), null);
    }
    return new Dj(b.key, b.I, b.left, Lj(b.right, c), null);
  }
  if (c instanceof Dj) {
    return new Dj(c.key, c.I, Lj(b, c.left), c.right, null);
  }
  d = Lj(b.right, c.left);
  return d instanceof Dj ? new Dj(d.key, d.I, new Ej(b.key, b.I, b.left, d.left, null), new Ej(c.key, c.I, d.right, c.right, null), null) : Gj(b.key, b.I, b.left, new Ej(c.key, c.I, d, c.right, null));
}, Oj = function Nj(b, c, d, e) {
  if (null != c) {
    var f;
    f = c.key;
    f = b.h ? b.h(d, f) : b.call(null, d, f);
    if (0 === f) {
      return e[0] = c, Mj(c.left, c.right);
    }
    if (0 > f) {
      return b = Nj(b, c.left, d, e), null != b || null != e[0] ? c.left instanceof Ej ? Gj(c.key, c.I, b, c.right) : new Dj(c.key, c.I, b, c.right, null) : null;
    }
    b = Nj(b, c.right, d, e);
    if (null != b || null != e[0]) {
      if (c.right instanceof Ej) {
        if (e = c.key, d = c.I, c = c.left, b instanceof Dj) {
          c = new Dj(e, d, c, b.Fc(), null);
        } else {
          if (c instanceof Ej) {
            c = Cj(e, d, c.me(), b);
          } else {
            if (c instanceof Dj && c.right instanceof Ej) {
              c = new Dj(c.right.key, c.right.I, Cj(c.key, c.I, c.left.me(), c.right.left), new Ej(e, d, c.right.right, b, null), null);
            } else {
              throw Error("red-black tree invariant violation");
            }
          }
        }
      } else {
        c = new Dj(c.key, c.I, c.left, b, null);
      }
    } else {
      c = null;
    }
    return c;
  }
  return null;
}, Qj = function Pj(b, c, d, e) {
  var f = c.key, g = b.h ? b.h(d, f) : b.call(null, d, f);
  return 0 === g ? c.replace(f, e, c.left, c.right) : 0 > g ? c.replace(f, c.I, Pj(b, c.left, d, e), c.right) : c.replace(f, c.I, c.left, Pj(b, c.right, d, e));
};
function Rj(a, b, c, d, e) {
  this.Zb = a;
  this.Dc = b;
  this.F = c;
  this.G = d;
  this.A = e;
  this.B = 418776847;
  this.K = 8192;
}
k = Rj.prototype;
k.forEach = function(a) {
  for (var b = A(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.H(null, e), g = O.j(f, 0, null), f = O.j(f, 1, null);
      a.h ? a.h(f, g) : a.call(null, f, g);
      e += 1;
    } else {
      if (b = A(b)) {
        S(b) ? (c = x(b), b = y(b), g = c, d = J(c), c = g) : (c = C(b), g = O.j(c, 0, null), c = f = O.j(c, 1, null), a.h ? a.h(c, g) : a.call(null, c, g), b = F(b), c = null, d = 0), e = 0;
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
  return Ti(A(this));
};
k.toString = function() {
  return Gd(this);
};
k.keys = function() {
  return Ri(Yi.g ? Yi.g(this) : Yi.call(null, this));
};
k.values = function() {
  return Ri(Zi.g ? Zi.g(this) : Zi.call(null, this));
};
k.equiv = function(a) {
  return this.J(null, a);
};
function Sj(a, b) {
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
  return Df(this, a);
};
k.N = function(a, b) {
  return rc.j(this, b, null);
};
k.P = function(a, b, c) {
  a = Sj(this, b);
  return null != a ? a.I : c;
};
k.Xd = function(a, b, c) {
  return null != this.Dc ? Ij(this.Dc, b, c) : c;
};
k.L = function() {
  return this.G;
};
k.ma = function() {
  return new Rj(this.Zb, this.Dc, this.F, this.G, this.A);
};
k.Z = function() {
  return this.F;
};
k.Fd = function() {
  return 0 < this.F ? Bj(this.Dc, !1, this.F) : null;
};
k.S = function() {
  var a = this.A;
  return null != a ? a : this.A = a = pe(this);
};
k.J = function(a, b) {
  return Pi(this, b);
};
k.wa = function() {
  return Me(Tj, this.G);
};
k.Ra = function(a, b) {
  var c = [null], d = Oj(this.Zb, this.Dc, b, c);
  return null == d ? null == O.h(c, 0) ? this : new Rj(this.Zb, null, 0, this.G, null) : new Rj(this.Zb, d.Fc(), this.F - 1, this.G, null);
};
k.za = function(a, b, c) {
  a = [null];
  var d = Kj(this.Zb, this.Dc, b, c, a);
  return null == d ? (a = O.h(a, 0), ae.h(c, a.I) ? this : new Rj(this.Zb, Qj(this.Zb, this.Dc, b, c), this.F, this.G, null)) : new Rj(this.Zb, d.Fc(), this.F + 1, this.G, null);
};
k.ue = function(a, b) {
  return null != Sj(this, b);
};
k.W = function() {
  return 0 < this.F ? Bj(this.Dc, !0, this.F) : null;
};
k.M = function(a, b) {
  return new Rj(this.Zb, this.Dc, this.F, b, this.A);
};
k.Y = function(a, b) {
  if (nf(b)) {
    return vc(this, v.h(b, 0), v.h(b, 1));
  }
  for (var c = this, d = A(b);;) {
    if (null == d) {
      return c;
    }
    var e = C(d);
    if (nf(e)) {
      c = vc(c, v.h(e, 0), v.h(e, 1)), d = F(d);
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
  return this.call.apply(this, [this].concat(Pb(b)));
};
k.g = function(a) {
  return this.N(null, a);
};
k.h = function(a, b) {
  return this.P(null, a, b);
};
var Tj = new Rj(be, null, 0, null, 0), kh = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = G(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = A(a);
    for (var b = td(cj);;) {
      if (a) {
        var e = F(F(a)), b = Wg.j(b, C(a), Oe(a));
        a = e;
      } else {
        return vd(b);
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
}(), Uj = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = G(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    return new n(null, $f(J(a), 2), R.h(Qb, a), null);
  }
  a.D = 0;
  a.q = function(a) {
    a = A(a);
    return b(a);
  };
  a.k = b;
  return a;
}(), Vj = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = G(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    for (var e = A(b), f = new Rj(Gf(a), null, 0, null, 0);;) {
      if (e) {
        var g = F(F(e)), f = Q.j(f, C(e), Oe(e)), e = g
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
function Wj(a, b) {
  this.pb = a;
  this.tb = b;
  this.K = 0;
  this.B = 32374988;
}
k = Wj.prototype;
k.toString = function() {
  return Gd(this);
};
k.equiv = function(a) {
  return this.J(null, a);
};
k.L = function() {
  return this.tb;
};
k.hb = function() {
  var a = this.pb, a = (a ? a.B & 128 || a.ze || (a.B ? 0 : Mb(kc, a)) : Mb(kc, a)) ? this.pb.hb(null) : F(this.pb);
  return null == a ? null : new Wj(a, this.tb);
};
k.S = function() {
  return oe(this);
};
k.J = function(a, b) {
  return Je(this, b);
};
k.wa = function() {
  return Me(me, this.tb);
};
k.Ka = function(a, b) {
  return Ne.h(b, this);
};
k.La = function(a, b, c) {
  return Ne.j(b, c, this);
};
k.Fa = function() {
  return this.pb.Fa(null).Yd(null);
};
k.Xa = function() {
  var a = this.pb, a = (a ? a.B & 128 || a.ze || (a.B ? 0 : Mb(kc, a)) : Mb(kc, a)) ? this.pb.hb(null) : F(this.pb);
  return null != a ? new Wj(a, this.tb) : me;
};
k.W = function() {
  return this;
};
k.M = function(a, b) {
  return new Wj(this.pb, b);
};
k.Y = function(a, b) {
  return Ke(b, this);
};
function Yi(a) {
  return(a = A(a)) ? new Wj(a, null) : null;
}
function jg(a) {
  return Ec(a);
}
function ok(a, b) {
  this.pb = a;
  this.tb = b;
  this.K = 0;
  this.B = 32374988;
}
k = ok.prototype;
k.toString = function() {
  return Gd(this);
};
k.equiv = function(a) {
  return this.J(null, a);
};
k.L = function() {
  return this.tb;
};
k.hb = function() {
  var a = this.pb, a = (a ? a.B & 128 || a.ze || (a.B ? 0 : Mb(kc, a)) : Mb(kc, a)) ? this.pb.hb(null) : F(this.pb);
  return null == a ? null : new ok(a, this.tb);
};
k.S = function() {
  return oe(this);
};
k.J = function(a, b) {
  return Je(this, b);
};
k.wa = function() {
  return Me(me, this.tb);
};
k.Ka = function(a, b) {
  return Ne.h(b, this);
};
k.La = function(a, b, c) {
  return Ne.j(b, c, this);
};
k.Fa = function() {
  return this.pb.Fa(null).Zd(null);
};
k.Xa = function() {
  var a = this.pb, a = (a ? a.B & 128 || a.ze || (a.B ? 0 : Mb(kc, a)) : Mb(kc, a)) ? this.pb.hb(null) : F(this.pb);
  return null != a ? new ok(a, this.tb) : me;
};
k.W = function() {
  return this;
};
k.M = function(a, b) {
  return new ok(this.pb, b);
};
k.Y = function(a, b) {
  return Ke(b, this);
};
function Zi(a) {
  return(a = A(a)) ? new ok(a, null) : null;
}
function kg(a) {
  return Ic(a);
}
var pk = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = G(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    return q(bh(Lf, a)) ? Rb.h(function(a, b) {
      return Ze.h(q(a) ? a : aj, b);
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
function qk(a, b) {
  for (var c = aj, d = A(b);;) {
    if (d) {
      var e = C(d), f = P.j(a, e, rk), c = Zg.h(f, rk) ? Q.j(c, e, f) : c, d = F(d)
    } else {
      return c;
    }
  }
}
function sk(a, b, c) {
  this.G = a;
  this.gd = b;
  this.A = c;
  this.B = 15077647;
  this.K = 8196;
}
k = sk.prototype;
k.toString = function() {
  return Gd(this);
};
k.equiv = function(a) {
  return this.J(null, a);
};
k.keys = function() {
  return Ri(A(this));
};
k.entries = function() {
  return Vi(A(this));
};
k.values = function() {
  return Ri(A(this));
};
k.has = function(a) {
  return Df(this, a);
};
k.forEach = function(a) {
  for (var b = A(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.H(null, e), g = O.j(f, 0, null), f = O.j(f, 1, null);
      a.h ? a.h(f, g) : a.call(null, f, g);
      e += 1;
    } else {
      if (b = A(b)) {
        S(b) ? (c = x(b), b = y(b), g = c, d = J(c), c = g) : (c = C(b), g = O.j(c, 0, null), c = f = O.j(c, 1, null), a.h ? a.h(c, g) : a.call(null, c, g), b = F(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
k.N = function(a, b) {
  return rc.j(this, b, null);
};
k.P = function(a, b, c) {
  return uc(this.gd, b) ? b : c;
};
k.L = function() {
  return this.G;
};
k.ma = function() {
  return new sk(this.G, this.gd, this.A);
};
k.Z = function() {
  return ac(this.gd);
};
k.S = function() {
  var a = this.A;
  return null != a ? a : this.A = a = pe(this);
};
k.J = function(a, b) {
  return kf(b) && J(this) === J(b) && ah(function(a) {
    return function(b) {
      return Df(a, b);
    };
  }(this), b);
};
k.Ed = function() {
  return new tk(td(this.gd));
};
k.wa = function() {
  return Me(uk, this.G);
};
k.kf = function(a, b) {
  return new sk(this.G, Cc(this.gd, b), null);
};
k.W = function() {
  return Yi(this.gd);
};
k.M = function(a, b) {
  return new sk(b, this.gd, this.A);
};
k.Y = function(a, b) {
  return new sk(this.G, Q.j(this.gd, b, null), null);
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
  return this.call.apply(this, [this].concat(Pb(b)));
};
k.g = function(a) {
  return this.N(null, a);
};
k.h = function(a, b) {
  return this.P(null, a, b);
};
var uk = new sk(null, aj, 0);
function vk(a) {
  var b = a.length;
  if (b <= bj) {
    for (var c = 0, d = td(aj);;) {
      if (c < b) {
        var e = c + 1, d = wd(d, a[c], null), c = e
      } else {
        return new sk(null, vd(d), null);
      }
    }
  } else {
    for (c = 0, d = td(uk);;) {
      if (c < b) {
        e = c + 1, d = ud(d, a[c]), c = e;
      } else {
        return vd(d);
      }
    }
  }
}
function tk(a) {
  this.$c = a;
  this.B = 259;
  this.K = 136;
}
k = tk.prototype;
k.call = function() {
  function a(a, b, c) {
    return rc.j(this.$c, b, Af) === Af ? c : b;
  }
  function b(a, b) {
    return rc.j(this.$c, b, Af) === Af ? null : b;
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
  return this.call.apply(this, [this].concat(Pb(b)));
};
k.g = function(a) {
  return rc.j(this.$c, a, Af) === Af ? null : a;
};
k.h = function(a, b) {
  return rc.j(this.$c, a, Af) === Af ? b : a;
};
k.N = function(a, b) {
  return rc.j(this, b, null);
};
k.P = function(a, b, c) {
  return rc.j(this.$c, b, Af) === Af ? c : b;
};
k.Z = function() {
  return J(this.$c);
};
k.nd = function(a, b) {
  this.$c = Wg.j(this.$c, b, null);
  return this;
};
k.od = function() {
  return new sk(null, vd(this.$c), null);
};
function wk(a, b, c) {
  this.G = a;
  this.ad = b;
  this.A = c;
  this.B = 417730831;
  this.K = 8192;
}
k = wk.prototype;
k.toString = function() {
  return Gd(this);
};
k.equiv = function(a) {
  return this.J(null, a);
};
k.keys = function() {
  return Ri(A(this));
};
k.entries = function() {
  return Vi(A(this));
};
k.values = function() {
  return Ri(A(this));
};
k.has = function(a) {
  return Df(this, a);
};
k.forEach = function(a) {
  for (var b = A(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.H(null, e), g = O.j(f, 0, null), f = O.j(f, 1, null);
      a.h ? a.h(f, g) : a.call(null, f, g);
      e += 1;
    } else {
      if (b = A(b)) {
        S(b) ? (c = x(b), b = y(b), g = c, d = J(c), c = g) : (c = C(b), g = O.j(c, 0, null), c = f = O.j(c, 1, null), a.h ? a.h(c, g) : a.call(null, c, g), b = F(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
k.N = function(a, b) {
  return rc.j(this, b, null);
};
k.P = function(a, b, c) {
  a = Sj(this.ad, b);
  return null != a ? a.key : c;
};
k.L = function() {
  return this.G;
};
k.ma = function() {
  return new wk(this.G, this.ad, this.A);
};
k.Z = function() {
  return J(this.ad);
};
k.Fd = function() {
  return 0 < J(this.ad) ? Ch.h(jg, md(this.ad)) : null;
};
k.S = function() {
  var a = this.A;
  return null != a ? a : this.A = a = pe(this);
};
k.J = function(a, b) {
  return kf(b) && J(this) === J(b) && ah(function(a) {
    return function(b) {
      return Df(a, b);
    };
  }(this), b);
};
k.wa = function() {
  return Me(xk, this.G);
};
k.kf = function(a, b) {
  return new wk(this.G, bf.h(this.ad, b), null);
};
k.W = function() {
  return Yi(this.ad);
};
k.M = function(a, b) {
  return new wk(b, this.ad, this.A);
};
k.Y = function(a, b) {
  return new wk(this.G, Q.j(this.ad, b, null), null);
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
  return this.call.apply(this, [this].concat(Pb(b)));
};
k.g = function(a) {
  return this.N(null, a);
};
k.h = function(a, b) {
  return this.P(null, a, b);
};
var xk = new wk(null, Tj, 0);
function yk(a) {
  a = A(a);
  if (null == a) {
    return uk;
  }
  if (a instanceof le && 0 === a.R) {
    a = a.p;
    a: {
      for (var b = 0, c = td(uk);;) {
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
  for (d = td(uk);;) {
    if (null != a) {
      b = a.hb(null), d = d.nd(null, a.Fa(null)), a = b;
    } else {
      return d.od(null);
    }
  }
}
var zk = function() {
  function a(a, b) {
    if (nf(b)) {
      var c = J(b);
      return Rb.j(function() {
        return function(b, c) {
          var e = Ef(a, O.h(b, c));
          return q(e) ? Q.j(b, c, Oe(e)) : b;
        };
      }(c), b, Dh.h(c, Jh(qe, 0)));
    }
    return Ch.h(function(b) {
      var c = Ef(a, b);
      return q(c) ? Oe(c) : b;
    }, b);
  }
  function b(a) {
    return Ch.g(function(b) {
      var c = Ef(a, b);
      return q(c) ? Ic(c) : b;
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
function Ak(a) {
  return function c(a, e) {
    return new sg(null, function() {
      return function(a, d) {
        for (;;) {
          var e = a, l = O.j(e, 0, null);
          if (e = A(e)) {
            if (Df(d, l)) {
              l = E(e), e = d, a = l, d = e;
            } else {
              return Ke(l, c(E(e), Ze.h(d, l)));
            }
          } else {
            return null;
          }
        }
      }.call(null, a, e);
    }, null, null);
  }(a, uk);
}
function qg(a) {
  if (a && (a.K & 4096 || a.Oh)) {
    return a.name;
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error("Doesn't support name: " + u.g(a));
}
function Bk(a, b) {
  for (var c = td(aj), d = A(a), e = A(b);;) {
    if (d && e) {
      c = Wg.j(c, C(d), C(e)), d = F(d), e = F(e);
    } else {
      return vd(c);
    }
  }
}
var Ck = function() {
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
      return Rb.j(function(c, d) {
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
}(), Dk = function() {
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
      return Rb.j(function(c, d) {
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
function Ek(a, b, c, d, e) {
  this.G = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.A = e;
  this.B = 32375006;
  this.K = 8192;
}
k = Ek.prototype;
k.toString = function() {
  return Gd(this);
};
k.equiv = function(a) {
  return this.J(null, a);
};
k.H = function(a, b) {
  if (b < ac(this)) {
    return this.start + b * this.step;
  }
  if (this.start > this.end && 0 === this.step) {
    return this.start;
  }
  throw Error("Index out of bounds");
};
k.ub = function(a, b, c) {
  return b < ac(this) ? this.start + b * this.step : this.start > this.end && 0 === this.step ? this.start : c;
};
k.L = function() {
  return this.G;
};
k.ma = function() {
  return new Ek(this.G, this.start, this.end, this.step, this.A);
};
k.hb = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new Ek(this.G, this.start + this.step, this.end, this.step, null) : null : this.start + this.step > this.end ? new Ek(this.G, this.start + this.step, this.end, this.step, null) : null;
};
k.Z = function() {
  if (Ib(ed(this))) {
    return 0;
  }
  var a = (this.end - this.start) / this.step;
  return Math.ceil.g ? Math.ceil.g(a) : Math.ceil.call(null, a);
};
k.S = function() {
  var a = this.A;
  return null != a ? a : this.A = a = oe(this);
};
k.J = function(a, b) {
  return Je(this, b);
};
k.wa = function() {
  return Me(me, this.G);
};
k.Ka = function(a, b) {
  return te.h(this, b);
};
k.La = function(a, b, c) {
  return te.j(this, b, c);
};
k.Fa = function() {
  return null == ed(this) ? null : this.start;
};
k.Xa = function() {
  return null != ed(this) ? new Ek(this.G, this.start + this.step, this.end, this.step, null) : me;
};
k.W = function() {
  return 0 < this.step ? this.start < this.end ? this : null : this.start > this.end ? this : null;
};
k.M = function(a, b) {
  return new Ek(b, this.start, this.end, this.step, this.A);
};
k.Y = function(a, b) {
  return Ke(b, this);
};
var Fk = function() {
  function a(a, b, c) {
    return new Ek(null, a, b, c, null);
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
function Gk(a) {
  return Ug(Rb.j(function(a, c) {
    return Wg.j(a, c, P.j(a, c, 0) + 1);
  }, td(aj), a));
}
var Hk = function() {
  function a(a, b, f) {
    return Ke(b, new sg(null, function() {
      var g = A(f);
      return g ? c.j(a, function() {
        var c = C(g);
        return a.h ? a.h(b, c) : a.call(null, b, c);
      }(), E(g)) : null;
    }, null, null));
  }
  function b(a, b) {
    return new sg(null, function() {
      var f = A(b);
      return f ? c.j(a, C(f), E(f)) : dc(me, a.w ? a.w() : a.call(null));
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
}(), Ik = function() {
  function a(a, b, c) {
    return function() {
      function d(e, s, l) {
        return new U(null, 3, 5, V, [a.j ? a.j(e, s, l) : a.call(null, e, s, l), b.j ? b.j(e, s, l) : b.call(null, e, s, l), c.j ? c.j(e, s, l) : c.call(null, e, s, l)], null);
      }
      function e(d, s) {
        return new U(null, 3, 5, V, [a.h ? a.h(d, s) : a.call(null, d, s), b.h ? b.h(d, s) : b.call(null, d, s), c.h ? c.h(d, s) : c.call(null, d, s)], null);
      }
      function s(d) {
        return new U(null, 3, 5, V, [a.g ? a.g(d) : a.call(null, d), b.g ? b.g(d) : b.call(null, d), c.g ? c.g(d) : c.call(null, d)], null);
      }
      function t() {
        return new U(null, 3, 5, V, [a.w ? a.w() : a.call(null), b.w ? b.w() : b.call(null), c.w ? c.w() : c.call(null)], null);
      }
      var w = null, B = function() {
        function d(a, b, c, f) {
          var g = null;
          3 < arguments.length && (g = G(Array.prototype.slice.call(arguments, 3), 0));
          return e.call(this, a, b, c, g);
        }
        function e(d, s, l, p) {
          return new U(null, 3, 5, V, [R.Q(a, d, s, l, p), R.Q(b, d, s, l, p), R.Q(c, d, s, l, p)], null);
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
      }(), w = function(a, b, c, f) {
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
      w.D = 3;
      w.q = B.q;
      w.w = t;
      w.g = s;
      w.h = e;
      w.j = d;
      w.k = B.k;
      return w;
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
      var t = null, w = function() {
        function c(a, b, e, f) {
          var g = null;
          3 < arguments.length && (g = G(Array.prototype.slice.call(arguments, 3), 0));
          return d.call(this, a, b, e, g);
        }
        function d(c, e, h, s) {
          return new U(null, 2, 5, V, [R.Q(a, c, e, h, s), R.Q(b, c, e, h, s)], null);
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
            return w.k(a, b, f, G(arguments, 3));
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      t.D = 3;
      t.q = w.q;
      t.w = s;
      t.g = e;
      t.h = d;
      t.j = c;
      t.k = w.k;
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
          return new U(null, 1, 5, V, [R.Q(a, b, d, e, g)], null);
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
            return Rb.j(function() {
              return function(a, b) {
                return Ze.h(a, b.j ? b.j(c, d, e) : b.call(null, c, d, e));
              };
            }(a), Ye, a);
          }
          function c(b, d) {
            return Rb.j(function() {
              return function(a, c) {
                return Ze.h(a, c.h ? c.h(b, d) : c.call(null, b, d));
              };
            }(a), Ye, a);
          }
          function d(b) {
            return Rb.j(function() {
              return function(a, c) {
                return Ze.h(a, c.g ? c.g(b) : c.call(null, b));
              };
            }(a), Ye, a);
          }
          function e() {
            return Rb.j(function() {
              return function(a, b) {
                return Ze.h(a, b.w ? b.w() : b.call(null));
              };
            }(a), Ye, a);
          }
          var f = null, g = function() {
            function b(a, d, e, f) {
              var g = null;
              3 < arguments.length && (g = G(Array.prototype.slice.call(arguments, 3), 0));
              return c.call(this, a, d, e, g);
            }
            function c(b, d, e, f) {
              return Rb.j(function() {
                return function(a, c) {
                  return Ze.h(a, R.Q(c, b, d, e, f));
                };
              }(a), Ye, a);
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
          }(), f = function(a, f, h, s) {
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
      }(Sg.v(a, c, d, e));
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
}(), Jk = function() {
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
}(), Kk = function() {
  function a(a, b) {
    Jk.h(a, b);
    return b;
  }
  function b(a) {
    Jk.g(a);
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
function Lk(a, b) {
  if ("string" === typeof b) {
    var c = a.exec(b);
    return ae.h(C(c), b) ? 1 === J(c) ? C(c) : ri(c) : null;
  }
  throw new TypeError("re-matches must match against a string.");
}
function Mk(a, b) {
  if ("string" === typeof b) {
    var c = a.exec(b);
    return null == c ? null : 1 === J(c) ? C(c) : ri(c);
  }
  throw new TypeError("re-find must match against a string.");
}
function Nk(a) {
  var b = Mk(/^(?:\(\?([idmsux]*)\))?(.*)/, a);
  O.j(b, 0, null);
  a = O.j(b, 1, null);
  b = O.j(b, 2, null);
  return new RegExp(b, a);
}
function Ok(a, b, c, d, e, f, g) {
  var h = zb;
  try {
    zb = null == zb ? null : zb - 1;
    if (null != zb && 0 > zb) {
      return nd(a, "#");
    }
    nd(a, c);
    if (A(g)) {
      var l = C(g);
      b.j ? b.j(l, a, f) : b.call(null, l, a, f);
    }
    for (var p = F(g), s = Gb.g(f) - 1;;) {
      if (!p || null != s && 0 === s) {
        A(p) && 0 === s && (nd(a, d), nd(a, "..."));
        break;
      } else {
        nd(a, d);
        var t = C(p);
        c = a;
        g = f;
        b.j ? b.j(t, c, g) : b.call(null, t, c, g);
        var w = F(p);
        c = s - 1;
        p = w;
        s = c;
      }
    }
    return nd(a, e);
  } finally {
    zb = h;
  }
}
var Pk = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = G(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    for (var e = A(b), f = null, g = 0, h = 0;;) {
      if (h < g) {
        var l = f.H(null, h);
        nd(a, l);
        h += 1;
      } else {
        if (e = A(e)) {
          f = e, S(f) ? (e = x(f), g = y(f), f = e, l = J(e), e = g, g = l) : (l = C(f), nd(a, l), e = F(f), f = null, g = 0), h = 0;
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
}(), Qk = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function Rk(a) {
  return'"' + u.g(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return Qk[a];
  })) + '"';
}
var Uk = function Sk(b, c, d) {
  if (null == b) {
    return nd(c, "nil");
  }
  if (void 0 === b) {
    return nd(c, "#\x3cundefined\x3e");
  }
  q(function() {
    var c = P.h(d, Eb);
    return q(c) ? (c = b ? b.B & 131072 || b.Nh ? !0 : b.B ? !1 : Mb(Vc, b) : Mb(Vc, b)) ? ef(b) : c : c;
  }()) && (nd(c, "^"), Sk(ef(b), c, d), nd(c, " "));
  if (null == b) {
    return nd(c, "nil");
  }
  if (b.wb) {
    return b.Bb(b, c, d);
  }
  if (b && (b.B & 2147483648 || b.ta)) {
    return b.U(null, c, d);
  }
  if (Nb(b) === Boolean || "number" === typeof b) {
    return nd(c, "" + u.g(b));
  }
  if (null != b && b.constructor === Object) {
    nd(c, "#js ");
    var e = Ch.h(function(c) {
      return new U(null, 2, 5, V, [rg.g(c), b[c]], null);
    }, of(b));
    return Tk.v ? Tk.v(e, Sk, c, d) : Tk.call(null, e, Sk, c, d);
  }
  return b instanceof Array ? Ok(c, Sk, "#js [", " ", "]", d, b) : q(la(b)) ? q(Db.g(d)) ? nd(c, Rk(b)) : nd(c, b) : cf(b) ? Pk.k(c, G(["#\x3c", "" + u.g(b), "\x3e"], 0)) : b instanceof Date ? (e = function(b, c) {
    for (var d = "" + u.g(b);;) {
      if (J(d) < c) {
        d = "0" + u.g(d);
      } else {
        return d;
      }
    }
  }, Pk.k(c, G(['#inst "', "" + u.g(b.getUTCFullYear()), "-", e(b.getUTCMonth() + 1, 2), "-", e(b.getUTCDate(), 2), "T", e(b.getUTCHours(), 2), ":", e(b.getUTCMinutes(), 2), ":", e(b.getUTCSeconds(), 2), ".", e(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0))) : b instanceof RegExp ? Pk.k(c, G(['#"', b.source, '"'], 0)) : (b ? b.B & 2147483648 || b.ta || (b.B ? 0 : Mb(od, b)) : Mb(od, b)) ? pd(b, c, d) : Pk.k(c, G(["#\x3c", "" + u.g(b), "\x3e"], 0));
};
function Vk(a, b) {
  var c = new db;
  a: {
    var d = new Fd(c);
    Uk(C(a), d, b);
    for (var e = A(F(a)), f = null, g = 0, h = 0;;) {
      if (h < g) {
        var l = f.H(null, h);
        nd(d, " ");
        Uk(l, d, b);
        h += 1;
      } else {
        if (e = A(e)) {
          f = e, S(f) ? (e = x(f), g = y(f), f = e, l = J(e), e = g, g = l) : (l = C(f), nd(d, " "), Uk(l, d, b), e = F(f), f = null, g = 0), h = 0;
        } else {
          break a;
        }
      }
    }
  }
  return c;
}
function Wk(a, b) {
  return hf(a) ? "" : "" + u.g(Vk(a, b));
}
var oh = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = G(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    return Wk(a, Ab());
  }
  a.D = 0;
  a.q = function(a) {
    a = A(a);
    return b(a);
  };
  a.k = b;
  return a;
}(), Xk = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = G(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b = Q.j(Ab(), Db, !1);
    a = Wk(a, b);
    xb.g ? xb.g(a) : xb.call(null, a);
    q(yb) ? (a = Ab(), xb.g ? xb.g("\n") : xb.call(null, "\n"), a = (P.h(a, Bb), null)) : a = null;
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
function Tk(a, b, c, d) {
  return Ok(c, function(a, c, d) {
    var h = Ec(a);
    b.j ? b.j(h, c, d) : b.call(null, h, c, d);
    nd(c, " ");
    a = Ic(a);
    return b.j ? b.j(a, c, d) : b.call(null, a, c, d);
  }, "{", ", ", "}", d, A(a));
}
le.prototype.ta = !0;
le.prototype.U = function(a, b, c) {
  return Ok(b, Uk, "(", " ", ")", c, this);
};
sg.prototype.ta = !0;
sg.prototype.U = function(a, b, c) {
  return Ok(b, Uk, "(", " ", ")", c, this);
};
Aj.prototype.ta = !0;
Aj.prototype.U = function(a, b, c) {
  return Ok(b, Uk, "(", " ", ")", c, this);
};
tj.prototype.ta = !0;
tj.prototype.U = function(a, b, c) {
  return Ok(b, Uk, "(", " ", ")", c, this);
};
Ej.prototype.ta = !0;
Ej.prototype.U = function(a, b, c) {
  return Ok(b, Uk, "[", " ", "]", c, this);
};
Xi.prototype.ta = !0;
Xi.prototype.U = function(a, b, c) {
  return Ok(b, Uk, "(", " ", ")", c, this);
};
wk.prototype.ta = !0;
wk.prototype.U = function(a, b, c) {
  return Ok(b, Uk, "#{", " ", "}", c, this);
};
Di.prototype.ta = !0;
Di.prototype.U = function(a, b, c) {
  return Ok(b, Uk, "(", " ", ")", c, this);
};
pg.prototype.ta = !0;
pg.prototype.U = function(a, b, c) {
  return Ok(b, Uk, "(", " ", ")", c, this);
};
Ie.prototype.ta = !0;
Ie.prototype.U = function(a, b, c) {
  return Ok(b, Uk, "(", " ", ")", c, this);
};
vj.prototype.ta = !0;
vj.prototype.U = function(a, b, c) {
  return Tk(this, Uk, b, c);
};
uj.prototype.ta = !0;
uj.prototype.U = function(a, b, c) {
  return Ok(b, Uk, "(", " ", ")", c, this);
};
Fi.prototype.ta = !0;
Fi.prototype.U = function(a, b, c) {
  return Ok(b, Uk, "[", " ", "]", c, this);
};
Rj.prototype.ta = !0;
Rj.prototype.U = function(a, b, c) {
  return Tk(this, Uk, b, c);
};
sk.prototype.ta = !0;
sk.prototype.U = function(a, b, c) {
  return Ok(b, Uk, "#{", " ", "}", c, this);
};
yg.prototype.ta = !0;
yg.prototype.U = function(a, b, c) {
  return Ok(b, Uk, "(", " ", ")", c, this);
};
jh.prototype.ta = !0;
jh.prototype.U = function(a, b, c) {
  nd(b, "#\x3cAtom: ");
  Uk(this.state, b, c);
  return nd(b, "\x3e");
};
ok.prototype.ta = !0;
ok.prototype.U = function(a, b, c) {
  return Ok(b, Uk, "(", " ", ")", c, this);
};
Dj.prototype.ta = !0;
Dj.prototype.U = function(a, b, c) {
  return Ok(b, Uk, "[", " ", "]", c, this);
};
U.prototype.ta = !0;
U.prototype.U = function(a, b, c) {
  return Ok(b, Uk, "[", " ", "]", c, this);
};
Ki.prototype.ta = !0;
Ki.prototype.U = function(a, b, c) {
  return Ok(b, Uk, "(", " ", ")", c, this);
};
mg.prototype.ta = !0;
mg.prototype.U = function(a, b) {
  return nd(b, "()");
};
Li.prototype.ta = !0;
Li.prototype.U = function(a, b, c) {
  return Ok(b, Uk, "#queue [", " ", "]", c, A(this));
};
n.prototype.ta = !0;
n.prototype.U = function(a, b, c) {
  return Tk(this, Uk, b, c);
};
Ek.prototype.ta = !0;
Ek.prototype.U = function(a, b, c) {
  return Ok(b, Uk, "(", " ", ")", c, this);
};
Wj.prototype.ta = !0;
Wj.prototype.U = function(a, b, c) {
  return Ok(b, Uk, "(", " ", ")", c, this);
};
lg.prototype.ta = !0;
lg.prototype.U = function(a, b, c) {
  return Ok(b, Uk, "(", " ", ")", c, this);
};
U.prototype.ve = !0;
U.prototype.we = function(a, b) {
  return Ff.h(this, b);
};
Fi.prototype.ve = !0;
Fi.prototype.we = function(a, b) {
  return Ff.h(this, b);
};
W.prototype.ve = !0;
W.prototype.we = function(a, b) {
  return $d(this, b);
};
ce.prototype.ve = !0;
ce.prototype.we = function(a, b) {
  return $d(this, b);
};
function Yk(a, b, c) {
  rd(a, b, c);
}
var Zk = null, $k = function() {
  function a(a) {
    null == Zk && (Zk = mh.g ? mh.g(0) : mh.call(null, 0));
    return de.g("" + u.g(a) + u.g(ph.h(Zk, qe)));
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
function al(a) {
  return function(b, c) {
    var d = a.h ? a.h(b, c) : a.call(null, b, c);
    return se(d) ? new re(d) : d;
  };
}
function Mh(a) {
  return function(b) {
    return function() {
      function c(a, c) {
        return Rb.j(b, a, c);
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
  }(al(a));
}
var bl = {};
function cl(a) {
  if (a ? a.Kh : a) {
    return a.Kh(a);
  }
  var b;
  b = cl[m(null == a ? null : a)];
  if (!b && (b = cl._, !b)) {
    throw r("IEncodeJS.-clj-\x3ejs", a);
  }
  return b.call(null, a);
}
function dl(a) {
  return(a ? q(q(null) ? null : a.Jh) || (a.pf ? 0 : Mb(bl, a)) : Mb(bl, a)) ? cl(a) : "string" === typeof a || "number" === typeof a || a instanceof W || a instanceof ce ? el.g ? el.g(a) : el.call(null, a) : oh.k(G([a], 0));
}
var el = function fl(b) {
  if (null == b) {
    return null;
  }
  if (b ? q(q(null) ? null : b.Jh) || (b.pf ? 0 : Mb(bl, b)) : Mb(bl, b)) {
    return cl(b);
  }
  if (b instanceof W) {
    return qg(b);
  }
  if (b instanceof ce) {
    return "" + u.g(b);
  }
  if (mf(b)) {
    var c = {};
    b = A(b);
    for (var d = null, e = 0, f = 0;;) {
      if (f < e) {
        var g = d.H(null, f), h = O.j(g, 0, null), g = O.j(g, 1, null);
        c[dl(h)] = fl(g);
        f += 1;
      } else {
        if (b = A(b)) {
          S(b) ? (e = x(b), b = y(b), d = e, e = J(e)) : (e = C(b), d = O.j(e, 0, null), e = O.j(e, 1, null), c[dl(d)] = fl(e), b = F(b), d = null, e = 0), f = 0;
        } else {
          break;
        }
      }
    }
    return c;
  }
  if (jf(b)) {
    c = [];
    b = A(Ch.h(fl, b));
    d = null;
    for (f = e = 0;;) {
      if (f < e) {
        h = d.H(null, f), c.push(h), f += 1;
      } else {
        if (b = A(b)) {
          d = b, S(d) ? (b = x(d), f = y(d), d = b, e = J(b), b = f) : (b = C(d), c.push(b), b = F(d), d = null, e = 0), f = 0;
        } else {
          break;
        }
      }
    }
    return c;
  }
  return b;
}, gl = {};
function hl(a, b) {
  if (a ? a.Ih : a) {
    return a.Ih(a, b);
  }
  var c;
  c = hl[m(null == a ? null : a)];
  if (!c && (c = hl._, !c)) {
    throw r("IEncodeClojure.-js-\x3eclj", a);
  }
  return c.call(null, a, b);
}
var Jl = function() {
  function a(a) {
    return b.k(a, G([new n(null, 1, [il, !1], null)], 0));
  }
  var b = null, c = function() {
    function a(c, d) {
      var h = null;
      1 < arguments.length && (h = G(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, h);
    }
    function b(a, c) {
      if (a ? q(q(null) ? null : a.wj) || (a.pf ? 0 : Mb(gl, a)) : Mb(gl, a)) {
        return hl(a, R.h(Uj, c));
      }
      if (A(c)) {
        var d = Bf(c) ? R.h(kh, c) : c, e = P.h(d, il);
        return function(a, b, c, d) {
          return function z(e) {
            return Bf(e) ? Kk.g(Ch.h(z, e)) : jf(e) ? Sh.h(null == e ? null : bc(e), Ch.h(z, e)) : e instanceof Array ? ri(Ch.h(z, e)) : Nb(e) === Object ? Sh.h(aj, function() {
              return function(a, b, c, d) {
                return function ba(f) {
                  return new sg(null, function(a, b, c, d) {
                    return function() {
                      for (;;) {
                        var a = A(f);
                        if (a) {
                          if (S(a)) {
                            var b = x(a), c = J(b), g = wg(c);
                            return function() {
                              for (var a = 0;;) {
                                if (a < c) {
                                  var f = v.h(b, a), h = g, s = V, l;
                                  l = f;
                                  l = d.g ? d.g(l) : d.call(null, l);
                                  f = new U(null, 2, 5, s, [l, z(e[f])], null);
                                  h.add(f);
                                  a += 1;
                                } else {
                                  return!0;
                                }
                              }
                            }() ? zg(Mg(g), ba(y(a))) : zg(Mg(g), null);
                          }
                          var h = C(a);
                          return Ke(new U(null, 2, 5, V, [function() {
                            var a = h;
                            return d.g ? d.g(a) : d.call(null, a);
                          }(), z(e[h])], null), ba(E(a)));
                        }
                        return null;
                      }
                    };
                  }(a, b, c, d), null, null);
                };
              }(a, b, c, d)(of(e));
            }()) : e;
          };
        }(c, d, e, q(e) ? rg : u)(a);
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
}(), bg = function() {
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
}(), cg = function(a) {
  a *= Math.random.w ? Math.random.w() : Math.random.call(null);
  return Math.floor.g ? Math.floor.g(a) : Math.floor.call(null, a);
};
function Kl(a, b) {
  return Ug(Rb.j(function(b, d) {
    var e = a.g ? a.g(d) : a.call(null, d);
    return Wg.j(b, e, Ze.h(P.j(b, e, Ye), d));
  }, td(aj), b));
}
function Ll(a) {
  this.Va = a;
  this.K = 0;
  this.B = 2153775104;
}
k = Ll.prototype;
k.S = function() {
  for (var a = oh.k(G([this], 0)), b = 0, c = 0;c < a.length;++c) {
    b = 31 * b + a.charCodeAt(c), b %= 4294967296;
  }
  return b;
};
k.U = function(a, b) {
  return nd(b, '#uuid "' + u.g(this.Va) + '"');
};
k.J = function(a, b) {
  return b instanceof Ll && this.Va === b.Va;
};
k.toString = function() {
  return this.Va;
};
k.equiv = function(a) {
  return this.J(null, a);
};
var Ml = new W(null, "inactive", "inactive", -306247616), Nl = new W(null, "y", "y", -1757859776), Ol = new W(null, "learn-segs", "learn-segs", -481861280), Pl = new W(null, "ppath", "ppath", -1758182784), Ql = new W(null, "retina_name", "retina_name", -891899232), Rl = new W(null, "encoding", "encoding", 1728578272), Sl = new W(null, "no-deref-monitor", "no-deref-monitor", 1171473184), Tl = new W(null, "seg-w-px", "seg-w-px", 1192509248), Ul = new W(null, "fieldset", "fieldset", -1949770816), Vl = 
new W(null, "fieldset#sim-controls", "fieldset#sim-controls", 443000993), Wl = new W(null, "watches", "watches", -273097535), Xl = new W(null, "boost-overlap-duty-ratio", "boost-overlap-duty-ratio", -1153915647), Yl = new W(null, "ff-perm-connected", "ff-perm-connected", 828443105), Zl = new W(null, "ff-synapses", "ff-synapses", -1536453151), $l = new W(null, "gap-countdown", "gap-countdown", -2051578079), am = new W(null, "target-density", "target-density", 391599009), bm = new W(null, "fieldset.region-spec", 
"fieldset.region-spec", 1547815873), cm = new W(null, "run-0-5", "run-0-5", -60879870), dm = new W(null, "ff-perm-init", "ff-perm-init", -588489726), em = new W(null, "min", "min", 444991522), fm = new W(null, "down", "down", 1565245570), gm = new W(null, "boosts", "boosts", 2116854050), hm = new W(null, "n-segments", "n-segments", -370398), im = new W("zip", "branch?", "zip/branch?", -998880862), jm = new W(null, "max-syns", "max-syns", -930774526), km = new W(null, "distal-punish?", "distal-punish?", 
1652249154), lm = new W(null, "span#sim-rate", "span#sim-rate", -400148894), mm = new W(null, "r", "r", -471384190), nm = new W(null, "text-margin", "text-margin", 1161346978), om = new W(null, "g.tick.major-tick", "g.tick.major-tick", 1467819139), pm = new W(null, "get", "get", 1683182755), qm = new W("zip", "children", "zip/children", -940194589), rm = new W(null, "dh", "dh", 528137731), sm = new W(null, "run-sim", "run-sim", 1708970627), tm = new W(null, "burst-cols", "burst-cols", 1737318083), 
um = new W(null, "a#sim-faster", "a#sim-faster", 1179722499), vm = new W(null, "tp-exc", "tp-exc", -2084609213), wm = new W(null, "diag-tl-br", "diag-tl-br", 307182435), xm = new W(null, "inh-radius", "inh-radius", 849540035), ym = new W(null, "span#sim-timestep", "span#sim-timestep", -764964893), zm = new W(null, "max-segs", "max-segs", -976352252), Am = new W(null, "json-params", "json-params", -1112693596), Bm = new W(null, "alternative", "alternative", 51666308), Cm = new W(null, "transform", 
"transform", 1381301764), Eb = new W(null, "meta", "meta", 1499536964), Dm = new W(null, "selected", "selected", 574897764), Em = new W(null, "dx", "dx", -381796732), Fm = new W(null, "seg-new-synapse-count", "seg-new-synapse-count", 841824004), Gm = new W(null, "seg-h-space-px", "seg-h-space-px", 1353315204), Hm = new W(null, "scroll-top", "scroll-top", -46723100), Im = new W(null, "scroll-counter", "scroll-counter", 628002885), Jm = new W("org.nfrac.comportex.demos.isolated-1d", "current-pattern-index", 
"org.nfrac.comportex.demos.isolated-1d/current-pattern-index", -20812731), Fb = new W(null, "dup", "dup", 556298533), Km = new W(null, "g.ticks", "g.ticks", 28507493), Lm = new W(null, "temporal-pooling", "temporal-pooling", 240992677), Mm = new W(null, "segment-idx", "segment-idx", -248867259), Nm = new W(null, "key", "key", -1516042587), Om = new W(null, "patch", "patch", 380775109), Pm = new W(null, "index", "index", -1531685915), Qm = new W(null, "pred-cells", "pred-cells", -549223386), Rm = 
new W(null, "bottom", "bottom", -1550509018), Sm = new W(null, "max-segments", "max-segments", -157037498), Tm = new W(null, "encoder", "encoder", -1113127834), Um = new W("org.nfrac.comportex.demos.isolated-2d", "current-pattern-index", "org.nfrac.comportex.demos.isolated-2d/current-pattern-index", -20812698), Vm = new W(null, "button#sim-start", "button#sim-start", -924760922), Wm = new W(null, "exit", "exit", 351849638), Xm = new W(null, "src-\x3ei", "src-\x3ei", -1634218746), Ym = new W(null, 
"distal-perm-dec", "distal-perm-dec", -223583802), Zm = new W(null, "disconnected", "disconnected", -1908014586), $m = new W(null, "cull", "cull", -1824785850), nn = new W(null, "boost-active-duty-ratio", "boost-active-duty-ratio", 891850342), on = new W(null, "tp-scores", "tp-scores", -375463769), pn = new W(null, "lat-synapses", "lat-synapses", 1341366663), qn = new W(null, "button#sim-reset", "button#sim-reset", -1103042169), rn = new W(null, "top", "top", -1856271961), sn = new W(null, "derefed", 
"derefed", 590684583), tn = new W(null, "password", "password", 417022471), un = new W(null, "transit-params", "transit-params", 357261095), vn = new W(null, "text.label", "text.label", 210580295), wn = new W(null, "topo", "topo", -1894825145), xn = new W(null, "yellow", "yellow", -881035449), lh = new W(null, "validator", "validator", -1966190681), yn = new W(null, "highlight", "highlight", -800930873), zn = new W(null, "get_fingerprint", "get_fingerprint", 669313064), An = new W(null, "method", 
"method", 55703592), Bn = new W(null, "line.rule", "line.rule", -722114232), Cn = new W(null, "button#anim-step", "button#anim-step", 1065036136), Dn = new W(null, "seg-h-px", "seg-h-px", -443969112), En = new W(null, "finally-block", "finally-block", 832982472), Fn = new W(null, "h-space-px", "h-space-px", -766035480), Gn = new W(null, "col-shrink", "col-shrink", -1043182072), Hn = new W(null, "i-\x3esrc", "i-\x3esrc", -299811032), In = new W(null, "learn-segments", "learn-segments", 1869208392), 
Jn = new W(null, "distal-perm-connected", "distal-perm-connected", -1849103512), Kn = new W(null, "columns", "columns", 1998437288), Ln = new W(null, "a#anim-slower", "a#anim-slower", -2103660568), Mn = new W(null, "w", "w", 354169001), Nn = new W(null, "seg-learn-threshold", "seg-learn-threshold", 1271249129), On = new W(null, "sy", "sy", 227523849), Pn = new W(null, "element-h", "element-h", -1458880151), Qn = new W(null, "anim-go?", "anim-go?", 1109067401), Rn = new W(null, "encoding-opts", "encoding-opts", 
-1805664631), Sn = new W(null, "dt", "dt", -368444759), Tn = new W(null, "formatter", "formatter", -483008823), Un = new W(null, "parent-watchables", "parent-watchables", -319854903), Vn = new W(null, "value", "value", 305978217), Wn = new W(null, "seg-stimulus-threshold", "seg-stimulus-threshold", -1901580343), Xn = new W(null, "green", "green", -945526839), Yn = new W(null, "rand-10", "rand-10", -1131947990), Zn = new W(null, "time", "time", 1385887882), $n = new W(null, "fieldset#anim-controls", 
"fieldset#anim-controls", 750977322), ao = new W(null, "mapping", "mapping", -1242405430), bo = new W(null, "sig-overlaps", "sig-overlaps", 436652586), co = new W(null, "page-up", "page-up", 1352555050), eo = new W(null, "username", "username", 1605666410), fo = new W(null, "regions", "regions", -1023815958), go = new W(null, "timestep", "timestep", -1557942486), ho = new W(null, "dirty?", "dirty?", -2059845846), io = new W(null, "y1", "y1", 589123466), jo = new W(null, "width", "width", -384071477), 
ko = new W(null, "a#sim-slower", "a#sim-slower", -8187669), lo = new W(null, "background", "background", -863952629), mo = new W(null, "column-dimensions", "column-dimensions", 935248171), no = new W(null, "button#sim-step", "button#sim-step", -991688373), oo = new W(null, "dy", "dy", 1719547243), po = new W(null, "connected", "connected", -169833045), qo = new W(null, "p.detail", "p.detail", -259333685), ro = new W(null, "submit", "submit", -49315317), so = new W(null, "active-duty-cycles", "active-duty-cycles", 
-2100410837), to = new W(null, "legend", "legend", -1027192245), uo = new W(null, "alternative-cells", "alternative-cells", 714708619), vo = new W(null, "shrink", "shrink", 1415287595), wo = new W(null, "orientation", "orientation", 623557579), xo = new W(null, "fieldset#viz-options", "fieldset#viz-options", -957799412), yo = new W(null, "predictive", "predictive", 742235276), zo = new W(null, "channel", "channel", 734187692), Ao = new W(null, "signal-cells", "signal-cells", -451652436), Bo = new W(null, 
"draw-steps", "draw-steps", -100988692), Z = new W(null, "recur", "recur", -437573268), Co = new W(null, "type", "type", 1174270348), Do = new W("comportexviz.viz-canvas", "acols", "comportexviz.viz-canvas/acols", 1747707340), Eo = new W(null, "update", "update", 1045576396), Fo = new W(null, "catch-block", "catch-block", 1175212748), Go = new W(null, "delete", "delete", -1768633620), wq = new W(null, "twos", "twos", 709888876), xq = new W(null, "ff-init-frac", "ff-init-frac", 503945132), yq = new W(null, 
"state", "state", -1988618099), zq = new W(null, "votes-frac", "votes-frac", -680687347), Aq = new W(null, "g.timestep", "g.timestep", -1438660275), Bq = new W(null, "distal-perm-inc", "distal-perm-inc", -162111059), Cq = new W(null, "major-tick-width", "major-tick-width", -401901043), Dq = new W("comportexviz.viz-canvas", "abits", "comportexviz.viz-canvas/abits", -1378531795), Eq = new W(null, "update-dom", "update-dom", 1414664877), Fq = new W(null, "seg-max-synapse-count", "seg-max-synapse-count", 
-139057427), Gq = new W(null, "span.detail", "span.detail", -1905752307), Hq = new W(null, "handlers", "handlers", 79528781), Iq = new W(null, "span#sim-ms-text", "span#sim-ms-text", -117079187), Bb = new W(null, "flush-on-newline", "flush-on-newline", -151457939), Jq = new W(null, "overlap-duty-cycles", "overlap-duty-cycles", 1224111053), Kq = new W(null, "sim-step-ms", "sim-step-ms", -1192536083), Lq = new W(null, "button#anim-start", "button#anim-start", 373847086), Mq = new W(null, "extra-distal-size", 
"extra-distal-size", -460733170), Nq = new W(null, "learn-cells", "learn-cells", -1536897586), Oq = new W(null, "all", "all", 892129742), Pq = new W(null, "ff-sg", "ff-sg", 18382766), Qq = new W(null, "span#anim-every-text", "span#anim-every-text", -815816561), Rq = new W(null, "l", "l", 1395893423), Sq = new W(null, "seed", "seed", 68613327), Tq = new W(null, "alternative-learning?", "alternative-learning?", -1659105041), Uq = new W(null, "up", "up", -269712113), Vq = new W("zip", "make-node", "zip/make-node", 
1103800591), Wq = new W(null, "canvas", "canvas", -1798817489), Xq = new W(null, "size", "size", 1098693007), Yq = new W(null, "headers", "headers", -835030129), Zq = new W(null, "learn-cols", "learn-cols", 164580271), $q = new W(null, "enter", "enter", 1792452624), ar = new W(null, "bit-h-px", "bit-h-px", -1081204688), br = new W("comportexviz.viz-canvas", "nsegcols", "comportexviz.viz-canvas/nsegcols", 1473275952), cr = new W(null, "server-port", "server-port", 663745648), dr = new W(null, "demote", 
"demote", 2088906896), er = new W(null, "learning", "learning", 612366512), fr = new W(null, "region", "region", 270415120), gr = new W(null, "style", "style", -496642736), hr = new W(null, "clamp?", "clamp?", 249465200), ir = new W(null, "ts", "ts", 1617209904), jr = new W(null, "term", "term", -1817390416), kr = new W(null, "div", "div", 1057191632), lr = new W(null, "option", "option", 65132272), Db = new W(null, "readably", "readably", 1129599760), mr = new W(null, "run-start", "run-start", 1984981840), 
nr = new W(null, "activation", "activation", 2128521072), or = new W("comportexviz.viz-canvas", "tpcols", "comportexviz.viz-canvas/tpcols", 500403377), pr = new W(null, "ff-grow-and-die?", "ff-grow-and-die?", 1154098385), qr = new W(null, "key-fn", "key-fn", -636154479), rr = new W(null, "head", "head", -771383919), sr = new W(null, "spec", "spec", 347520401), tr = new W(null, "g", "g", 1738089905), ur = new W(null, "bit-precision", "bit-precision", 2066921041), vr = new W(null, "button#anim-stop", 
"button#anim-stop", -279088527), wr = new W(null, "random-double", "random-double", -922602767), xr = new W(null, "active-predicted", "active-predicted", -72115407), yr = new W(null, "click", "click", 1912301393), zr = new W(null, "cp1x", "cp1x", 465245137), Ar = new W(null, "with-credentials?", "with-credentials?", -1773202222), Br = new W(null, "active-cols", "active-cols", -922660398), Cr = new W(null, "anim-every", "anim-every", 1633754642), Dr = new W(null, "max-boost", "max-boost", 608482834), 
Er = new W(null, "success", "success", 1890645906), Fr = new W(null, "ff-potential-radius", "ff-potential-radius", 254943154), Gr = new W(null, "label-margin", "label-margin", -17690670), Hr = new W(null, "height-px", "height-px", -1391665005), Ir = new W(null, "cp2x", "cp2x", -1682644749), Jr = new W(null, "form-params", "form-params", 1884296467), Kr = new W(null, "inhibition-speed", "inhibition-speed", 2020956531), Lr = new W(null, "line", "line", 212345235), Mr = new W(null, "android", "android", 
-2084094573), Nr = new W(null, "ff-perm-inc", "ff-perm-inc", -742369901), Or = new W(null, "tp-cells", "tp-cells", -1141498413), Pr = new W(null, "i-\x3etgt", "i-\x3etgt", -1469739469), Qr = new W("comportexviz.viz-canvas", "pbits", "comportexviz.viz-canvas/pbits", 1988133491), Rr = new W(null, "active-cells-by-col", "active-cells-by-col", 782265971), Sr = new W(null, "div#comportex-drawing", "div#comportex-drawing", 1638716307), Tr = new W(null, "active-cells", "active-cells", -1277925485), Ur = 
new W(null, "targets-by-source", "targets-by-source", -1472501869), Vr = new W(null, "g.plot-space", "g.plot-space", -1258275917), Wr = new W(null, "status", "status", -1997798413), Xr = new W(null, "h", "h", 1109658740), Yr = new W(null, "from", "from", 1815293044), Zr = new W(null, "a#anim-faster", "a#anim-faster", -1294334764), Gb = new W(null, "print-length", "print-length", 1931866356), $r = new W(null, "max", "max", 61366548), as = new W(null, "bit-coverage", "bit-coverage", -771349196), bs = 
new W(null, "active", "active", 1895962068), cs = new W(null, "col", "col", -1959363084), ds = new W(null, "activation-level", "activation-level", -1385123308), es = new W(null, "overlaps", "overlaps", 1398230580), fs = new W(null, "label", "label", 1718410804), gs = new W(null, "id", "id", -1388402092), hs = new W(null, "class", "class", -2030961996), is = new W(null, "red", "red", -969428204), js = new W(null, "blue", "blue", -622100620), ks = new W(null, "extent", "extent", -186399820), ls = new W(null, 
"decoding-opts", "decoding-opts", 1050289140), ms = new W(null, "catch-exception", "catch-exception", -1997306795), ns = new W(null, "opts", "opts", 155075701), os = new W(null, "init-value", "init-value", -374892331), ps = new W(null, "input-w-px", "input-w-px", -99789611), qs = new W(null, "top-px", "top-px", 1982343477), rs = new W(null, "distal-sg", "distal-sg", 752001365), ss = new W("comportexviz.viz-canvas", "pcols", "comportexviz.viz-canvas/pcols", 1740826069), ts = new W(null, "checked", 
"checked", -50955819), us = new W("org.nfrac.comportex.demos.isolated-1d", "gap-countdown", "org.nfrac.comportex.demos.isolated-1d/gap-countdown", 1385863765), vs = new W(null, "left-px", "left-px", -745883979), ws = new W(null, "ts-plot", "ts-plot", -1498457323), xs = new W(null, "global-inhibition", "global-inhibition", -936260811), ys = new W(null, "pnodes", "pnodes", 1739080565), zs = new W(null, "prev", "prev", -1597069226), As = new W(null, "svg", "svg", 856789142), Bs = new W(null, "changed?", 
"changed?", -437828330), Cs = new W(null, "url", "url", 276297046), Ds = new W(null, "span.parameter-label", "span.parameter-label", -815265354), Es = new W(null, "length", "length", 588987862), ot = new W(null, "button#sim-stop", "button#sim-stop", 1477647862), pt = new W(null, "continue-block", "continue-block", -1852047850), qt = new W("org.nfrac.comportex.demos.isolated-2d", "gap-countdown", "org.nfrac.comportex.demos.isolated-2d/gap-countdown", 1385863862), rt = new W(null, "query-params", "query-params", 
900640534), st = new W(null, "span#sim-reset-status", "span#sim-reset-status", 1741880118), tt = new W(null, "content-type", "content-type", -508222634), ut = new W(null, "step-counter", "step-counter", 881657879), vt = new W(null, "alternative-segments", "alternative-segments", -1132719081), wt = new W(null, "cp1y", "cp1y", 628283543), xt = new W(null, "div#comportex-controls", "div#comportex-controls", -1291722569), yt = new W(null, "div#comportex-parameters", "div#comportex-parameters", 737276119), 
zt = new W(null, "http", "http", 382524695), At = new W(null, "oauth-token", "oauth-token", 311415191), Bt = new W(null, "ff-perm-dec", "ff-perm-dec", 1363415607), Ct = new W(null, "right", "right", -452581833), Dt = new W(null, "post", "post", 269697687), Et = new W(null, "ticks", "ticks", -406190313), Ft = new W(null, "dw", "dw", -821060841), Gt = new W(null, "redraw", "redraw", -1075394793), Ht = new W(null, "input-dimensions", "input-dimensions", -1946955913), It = new W(null, "input-topology", 
"input-topology", -2015425577), Jt = new W(null, "display", "display", 242065432), Kt = new W(null, "syns-by-target", "syns-by-target", 1015999640), Lt = new W(null, "drawing", "drawing", 1181749528), Mt = new W(null, "f", "f", -1597136552), Nt = new W(null, "sx", "sx", -403071592), Ot = new W(null, "cell-id", "cell-id", 1789875608), Pt = new W(null, "saw-10-15", "saw-10-15", 953187768), Qt = new W(null, "depth", "depth", 1768663640), Rt = new W(null, "br", "br", 934104792), St = new W(null, "inhibition-base-distance", 
"inhibition-base-distance", 645074808), Tt = new W(null, "rev-5-1", "rev-5-1", -252300392), Ut = new W(null, "define-me!", "define-me!", -268367591), Vt = new W(null, "x", "x", 2099068185), Wt = new W(null, "subs", "subs", -186681991), Xt = new W(null, "x1", "x1", -1863922247), Yt = new W(null, "uri", "uri", -774711847), Zt = new W(null, "bit-w-px", "bit-w-px", -531552775), $t = new W(null, "form", "form", -1624062471), au = new W(null, "prior-pred-cells", "prior-pred-cells", 2074077785), bu = new W(null, 
"tag", "tag", -1290361223), cu = new W(null, "predicted", "predicted", 2110738041), du = new W(null, "res", "res", -1395007879), eu = new W(null, "sh", "sh", -682444007), fu = new W(null, "capture", "capture", -677031143), gu = new W(null, "sw", "sw", 833113913), hu = new W(null, "decoding", "decoding", -568180903), iu = new W(null, "domain", "domain", 1847214937), ju = new W(null, "input", "input", 556931961), ku = new W(null, "cp2y", "cp2y", 903335801), lu = new W(null, "server-name", "server-name", 
-1012104295), mu = new W(null, "ff-grow-up-to-count", "ff-grow-up-to-count", 738299833), nu = new W(null, "uuid", "uuid", -2145095719), ou = new W(null, "seq", "seq", -1817803783), pu = new W(null, "keep-n", "keep-n", -176064454), qu = new W(null, "put", "put", 1299772570), ru = new W(null, "json", "json", 1279968570), su = new W(null, "change", "change", -1163046502), tu = new W(null, "timeout", "timeout", -318625318), uu = new W(null, "down-1", "down-1", -85274150), vu = new W(null, "page-down", 
"page-down", -392838598), wu = new W(null, "purple", "purple", -876021126), xu = new W(null, "end", "end", -268185958), yu = new W(null, "transit-opts", "transit-opts", 1104386010), zu = new W(null, "y2", "y2", -718691301), Au = new W(null, "query-string", "query-string", -1018845061), Bu = new W(null, "max_results", "max_results", 776458459), Cu = new W(null, "circles?", "circles?", -1676300005), Du = new W("comportexviz", "draw-input", "comportexviz/draw-input", -516395685), Eu = new W(null, "inactive-syn", 
"inactive-syn", 1351816571), Fu = new W(null, "body", "body", -2049205669), Gu = new W(null, "down-right", "down-right", 1213350619), Hu = new W(null, "proximal-vs-distal-weight", "proximal-vs-distal-weight", -1312658693), Iu = new W(null, "jump-6-12", "jump-6-12", -1217478725), Ju = new W(null, "tgt-\x3ei", "tgt-\x3ei", -220968868), Ku = new W(null, "highlight-color", "highlight-color", -1394121540), Lu = new W("comportexviz.viz-canvas", "cache", "comportexviz.viz-canvas/cache", 33193148), Mu = 
new W(null, "force-update?", "force-update?", 137364796), Nu = new W(null, "distal-exc", "distal-exc", -506020516), Ou = new W(null, "duty-cycle-period", "duty-cycle-period", -962296356), Pu = new W(null, "layer-3", "layer-3", 891136476), Qu = new W(null, "pcon", "pcon", 219389436), Ru = new W(null, "edn-params", "edn-params", 894273052), Su = new W(null, "permanences", "permanences", -1713734116), Tu = new W("org.nfrac.comportex.core", "no-matching-UUID!", "org.nfrac.comportex.core/no-matching-UUID!", 
1023231548), Uu = new W("comportexviz.viz-canvas", "ocols", "comportexviz.viz-canvas/ocols", -2081286436), il = new W(null, "keywordize-keys", "keywordize-keys", 1310784252), Vu = new W(null, "rect", "rect", -108902628), Wu = new W(null, "step", "step", 1288888124), Xu = new W(null, "prox-exc", "prox-exc", -708084900), Yu = new W(null, "basic-auth", "basic-auth", -673163332), Zu = new W(null, "p", "p", 151049309), $u = new W(null, "ff-max-synapse-count", "ff-max-synapse-count", -497183491), av = 
new W("comportexviz.viz-canvas", "vcols", "comportexviz.viz-canvas/vcols", 649010429), bv = new W(null, "column-field", "column-field", -2123020963), cv = new W(null, "x2", "x2", -1362513475), dv = new W(null, "scheme", "scheme", 90199613), ev = new W(null, "trace-redirects", "trace-redirects", -1149427907), fv = new W(null, "spontaneous-activation?", "spontaneous-activation?", 1807538270), gv = new W(null, "run-6-10", "run-6-10", 295893118), hv = new W(null, "href", "href", -793805698), iv = new W(null, 
"none", "none", 1333468478), jv = new W(null, "request-method", "request-method", 1764796830), kv = new W(null, "votes-per-bit", "votes-per-bit", -1001226722), lv = new W(null, "bucket", "bucket", 1126218366), mv = new W(null, "elements-per-dt", "elements-per-dt", 703850270), nv = new W(null, "cull-zeros?", "cull-zeros?", -434506978), ov = new W(null, "col-d-px", "col-d-px", -985327682), pv = new W(null, "positions", "positions", -1380538434), qv = new W(null, "bit-shrink", "bit-shrink", -1161684994), 
rv = new W(null, "range", "range", 1639692286), sv = new W(null, "height", "height", 1025178622), tv = new W(null, "select", "select", 1147833503), uv = new W(null, "distal-perm-init", "distal-perm-init", -48514913), vv = new W(null, "ff-stimulus-threshold", "ff-stimulus-threshold", -48644961), wv = new W(null, "promote", "promote", -1158882145), xv = new W(null, "skip", "skip", 602715391), yv = new W(null, "cell-r-px", "cell-r-px", 423637311), zv = new W(null, "topology", "topology", -474296001), 
Av = new W(null, "left", "left", -399115937), rk = new W("cljs.core", "not-found", "cljs.core/not-found", -1572889185), Bv = new W(null, "raw-sg", "raw-sg", 955489791), Cv = new W(null, "accept", "accept", 1874130431), Dv = new W(null, "text", "text", -1790561697), Ev = new W(null, "element-w", "element-w", 2089708127), Fv = new W(null, "span", "span", 1394872991), Gv = new W(null, "margin", "margin", -995903681), Hv = new W(null, "data", "data", -232669377);
function Iv(a, b) {
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
      a instanceof Iv ? (c = a.bc(), d = a.Wc()) : (c = Za(a), d = Ya(a));
      for (var e = 0;e < c.length;e++) {
        this.set(c[e], d[e]);
      }
    }
  }
}
k = Iv.prototype;
k.Mg = function() {
  return this.Aa;
};
k.Wc = function() {
  Jv(this);
  for (var a = [], b = 0;b < this.mb.length;b++) {
    a.push(this.Bc[this.mb[b]]);
  }
  return a;
};
k.bc = function() {
  Jv(this);
  return this.mb.concat();
};
k.ce = function(a) {
  return Kv(this.Bc, a);
};
k.Cb = function(a, b) {
  if (this === a) {
    return!0;
  }
  if (this.Aa != a.Mg()) {
    return!1;
  }
  var c = b || Lv;
  Jv(this);
  for (var d, e = 0;d = this.mb[e];e++) {
    if (!c(this.get(d), a.get(d))) {
      return!1;
    }
  }
  return!0;
};
function Lv(a, b) {
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
  return Kv(this.Bc, a) ? (delete this.Bc[a], this.Aa--, this.mb.length > 2 * this.Aa && Jv(this), !0) : !1;
};
function Jv(a) {
  if (a.Aa != a.mb.length) {
    for (var b = 0, c = 0;b < a.mb.length;) {
      var d = a.mb[b];
      Kv(a.Bc, d) && (a.mb[c++] = d);
      b++;
    }
    a.mb.length = c;
  }
  if (a.Aa != a.mb.length) {
    for (var e = {}, c = b = 0;b < a.mb.length;) {
      d = a.mb[b], Kv(e, d) || (a.mb[c++] = d, e[d] = 1), b++;
    }
    a.mb.length = c;
  }
}
k.get = function(a, b) {
  return Kv(this.Bc, a) ? this.Bc[a] : b;
};
k.set = function(a, b) {
  Kv(this.Bc, a) || (this.Aa++, this.mb.push(a));
  this.Bc[a] = b;
};
k.forEach = function(a, b) {
  for (var c = this.bc(), d = 0;d < c.length;d++) {
    var e = c[d], f = this.get(e);
    a.call(b, f, e, this);
  }
};
k.clone = function() {
  return new Iv(this);
};
function Kv(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b);
}
;function Mv(a) {
  var b = a.type;
  if (!ea(b)) {
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
      return ea(a.value) ? a.value : null;
  }
}
;var Nv;
a: {
  var Ov = ca.navigator;
  if (Ov) {
    var Pv = Ov.userAgent;
    if (Pv) {
      Nv = Pv;
      break a;
    }
  }
  Nv = "";
}
;var Qv = -1 != Nv.indexOf("Opera") || -1 != Nv.indexOf("OPR"), Rv = -1 != Nv.indexOf("Trident") || -1 != Nv.indexOf("MSIE"), Sv = -1 != Nv.indexOf("Gecko") && -1 == Nv.toLowerCase().indexOf("webkit") && !(-1 != Nv.indexOf("Trident") || -1 != Nv.indexOf("MSIE")), Tv = -1 != Nv.toLowerCase().indexOf("webkit");
function Uv() {
  var a = ca.document;
  return a ? a.documentMode : void 0;
}
var Vv = function() {
  var a = "", b;
  if (Qv && ca.opera) {
    return a = ca.opera.version, oa(a) ? a() : a;
  }
  Sv ? b = /rv\:([^\);]+)(\)|;)/ : Rv ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : Tv && (b = /WebKit\/(\S+)/);
  b && (a = (a = b.exec(Nv)) ? a[1] : "");
  return Rv && (b = Uv(), b > parseFloat(a)) ? String(b) : a;
}(), Wv = {};
function Xv(a) {
  var b;
  if (!(b = Wv[a])) {
    b = 0;
    for (var c = La(String(Vv)).split("."), d = La(String(a)).split("."), e = Math.max(c.length, d.length), f = 0;0 == b && f < e;f++) {
      var g = c[f] || "", h = d[f] || "", l = RegExp("(\\d*)(\\D*)", "g"), p = RegExp("(\\d*)(\\D*)", "g");
      do {
        var s = l.exec(g) || ["", "", ""], t = p.exec(h) || ["", "", ""];
        if (0 == s[0].length && 0 == t[0].length) {
          break;
        }
        b = Va(0 == s[1].length ? 0 : parseInt(s[1], 10), 0 == t[1].length ? 0 : parseInt(t[1], 10)) || Va(0 == s[2].length, 0 == t[2].length) || Va(s[2], t[2]);
      } while (0 == b);
    }
    b = Wv[a] = 0 <= b;
  }
  return b;
}
var Yv = ca.document, Zv = Yv && Rv ? Uv() || ("CSS1Compat" == Yv.compatMode ? parseInt(Vv, 10) : 5) : void 0;
var $v = !Rv || Rv && 9 <= Zv, aw = !Sv && !Rv || Rv && Rv && 9 <= Zv || Sv && Xv("1.9.1"), bw = Rv && !Xv("9");
function cw(a) {
  return a ? new dw(ew(a)) : fb || (fb = new dw);
}
function fw(a, b) {
  var c = b && "*" != b ? b.toUpperCase() : "";
  return a.querySelectorAll && a.querySelector && c ? a.querySelectorAll(c + "") : a.getElementsByTagName(c || "*");
}
function gw(a, b) {
  Xa(b, function(b, d) {
    "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in hw ? a.setAttribute(hw[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b;
  });
}
var hw = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", frameborder:"frameBorder", height:"height", maxlength:"maxLength", role:"role", rowspan:"rowSpan", type:"type", usemap:"useMap", valign:"vAlign", width:"width"};
function iw(a, b, c, d) {
  function e(c) {
    c && b.appendChild(la(c) ? a.createTextNode(c) : c);
  }
  for (;d < c.length;d++) {
    var f = c[d];
    !ka(f) || qa(f) && 0 < f.nodeType ? e(f) : lb(jw(f) ? rb(f) : f, e);
  }
}
function kw(a) {
  return void 0 != a.firstElementChild ? a.firstElementChild : lw(a.firstChild);
}
function lw(a) {
  for (;a && 1 != a.nodeType;) {
    a = a.nextSibling;
  }
  return a;
}
function ew(a) {
  return 9 == a.nodeType ? a : a.ownerDocument || a.document;
}
var mw = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, nw = {IMG:" ", BR:"\n"};
function ow(a) {
  if (bw && "innerText" in a) {
    a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
  } else {
    var b = [];
    pw(a, b, !0);
    a = b.join("");
  }
  a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
  a = a.replace(/\u200B/g, "");
  bw || (a = a.replace(/ +/g, " "));
  " " != a && (a = a.replace(/^\s*/, ""));
  return a;
}
function pw(a, b, c) {
  if (!(a.nodeName in mw)) {
    if (3 == a.nodeType) {
      c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
    } else {
      if (a.nodeName in nw) {
        b.push(nw[a.nodeName]);
      } else {
        for (a = a.firstChild;a;) {
          pw(a, b, c), a = a.nextSibling;
        }
      }
    }
  }
}
function jw(a) {
  if (a && "number" == typeof a.length) {
    if (qa(a)) {
      return "function" == typeof a.item || "string" == typeof a.item;
    }
    if (oa(a)) {
      return "function" == typeof a.item;
    }
  }
  return!1;
}
function dw(a) {
  this.Id = a || ca.document || document;
}
k = dw.prototype;
k.qd = function(a, b, c) {
  var d = this.Id, e = arguments, f = e[0], g = e[1];
  if (!$v && g && (g.name || g.type)) {
    f = ["\x3c", f];
    g.name && f.push(' name\x3d"', Ma(g.name), '"');
    if (g.type) {
      f.push(' type\x3d"', Ma(g.type), '"');
      var h = {};
      cb(h, g);
      delete h.type;
      g = h;
    }
    f.push("\x3e");
    f = f.join("");
  }
  f = d.createElement(f);
  g && (la(g) ? f.className = g : "array" == m(g) ? f.className = g.join(" ") : gw(f, g));
  2 < e.length && iw(d, f, e, 2);
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
  iw(ew(a), a, arguments, 1);
};
k.Lg = function(a) {
  return aw && void 0 != a.children ? a.children : mb(a.childNodes, function(a) {
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
var qw, rw, sw, tw, uw, vw, ww, xw, yw, zw, Aw, Bw, Cw, Dw, Ew, Fw, Gw = {}.hasOwnProperty;
xw = function(a) {
  console.log(a);
};
Aw = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
zw = /^(svg|g|rect|circle|clipPath|path|line|polygon|polyline|text|textPath)$/;
Bw = /^\s+$/;
yw = /:(.+)/;
Fw = {qj:"http://www.w3.org/1999/xhtml", Dj:"http://www.w3.org/1999/xlink", ej:"http://www.w3.org/2000/svg", xml:"http://www.w3.org/XML/1998/namespace", Ej:"http://www.w3.org/2000/xmlns"};
vw = function(a) {
  var b, c;
  c = a.split(":");
  b = c[0];
  c = c[1];
  return null != c ? [Fw[b] || b, c] : a.match(zw) ? [Fw.ej, a] : [Fw.qj, a];
};
sw = function(a) {
  return ":*:" === a[0];
};
Dw = function(a) {
  return null != a && a instanceof Hw;
};
tw = function(a) {
  return null != a && !1;
};
qw = function(a) {
  return null != a && null != a.forEach;
};
uw = function(a) {
  return null != a && !qw(a) && !Dw(a) && !tw(a) && a instanceof Object;
};
rw = function(a) {
  return null != a && null != a.nodeType;
};
Cw = function(a) {
  return null != a && null != a.substring;
};
ww = function(a) {
  return null != a && null != a.toFixed;
};
Ew = function(a) {
  return 8 === a.nodeType || 3 === a.nodeType && a.textContent.match(Bw);
};
function Iw(a, b) {
  var c, d, e, f, g;
  if (null != b.style) {
    f = b.style;
    var h;
    h = [];
    for (g in f) {
      Gw.call(f, g) && (c = f[g], h.push(a.style[Wa(g)] = c));
    }
    delete b.style;
  }
  if (null != b.properties) {
    f = b.properties;
    c = [];
    for (e in f) {
      Gw.call(f, e) && (g = f[e], c.push(a[e] = g));
    }
    delete b.properties;
  }
  qw(b["class"]) && (a.setAttribute("class", b["class"].join(" ")), delete b["class"]);
  g = [];
  for (d in b) {
    Gw.call(b, d) && (f = b[d], null != f ? (c = d.split(yw), e = c[0], c = c[1], null != c ? g.push(a.setAttributeNS(Fw[e] || e, c, f)) : g.push(a.setAttribute(d, f))) : g.push(a.removeAttribute(d)));
  }
}
function Jw(a, b) {
  return null != b ? a.__singult_data__ = b : a.__singult_data__;
}
function Kw(a) {
  return ww(a) ? a.toString() : qw(a) ? Lw(a) : a;
}
function Lw(a) {
  var b, c, d, e, f;
  f = a[0];
  d = uw(a[1]) ? [a[1], a.slice(2)] : [{}, a.slice(1)];
  a = d[0];
  d = d[1];
  e = f.match(Aw);
  f = e[1];
  b = e[2];
  e = e[3];
  null != b && (a.id = b);
  null != e && (b = e.split("."), qw(a["class"]) ? a["class"] = a["class"].concat(b) : Cw(a["class"]) ? a["class"] = b.concat([a["class"]]) : null == a["class"] && (a["class"] = b));
  f = vw(f);
  b = f[0];
  f = f[1];
  c = [];
  d.forEach(function(a) {
    if (null != a) {
      return sw(a) ? a.slice(1).forEach(function(a) {
        return c.push(Kw(a));
      }) : c.push(Kw(a));
    }
  });
  return{Hi:b, tag:f, kg:a, children:c};
}
function Mw(a) {
  var b, c;
  if (Dw(a)) {
    throw Error("Unify must be the first and only child of its parent.");
  }
  if (tw(a)) {
    return null;
  }
  if (Cw(a)) {
    return document.createTextNode(a);
  }
  if (rw(a)) {
    return a;
  }
  b = document.createElementNS(a.Hi, a.tag);
  Iw(b, a.kg);
  Dw(c = a.children[0]) ? null != c.kb ? c.data.forEach(function(a) {
    var e;
    e = c.kb(a);
    Jw(e, a);
    return b.appendChild(e);
  }) : c.data.forEach(function(a) {
    var e;
    e = Mw(Kw(c.ob(a)));
    Jw(e, a);
    return b.appendChild(e);
  }) : a.children.forEach(function(a) {
    a = Mw(a);
    if (null != a) {
      return b.appendChild(a);
    }
  });
  return b;
}
function Hw(a, b, c, d, e, f, g) {
  this.data = a;
  this.ob = b;
  this.Fb = c;
  this.kb = d;
  this.update = e;
  this.Db = f;
  this.gi = g;
  return this;
}
function Nw(a, b) {
  var c, d, e, f, g, h, l, p, s, t, w, B, z;
  g = b.kb || function(c) {
    c = Mw(Kw(b.ob(c)));
    a.appendChild(c);
    return c;
  };
  z = b.update || function(a, c) {
    return Ow(a, Kw(b.ob(c)));
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
  w = function(a, b) {
    return f(Jw(a), b);
  };
  t = function(a, c) {
    var d;
    if (b.gi) {
      return d = z(a, c), Jw(d, c);
    }
    d = Jw(a);
    if (null != d.J ? !d.J(d, c) : d !== c) {
      return d = z(a, c), Jw(d, c);
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
    p = w(c[d], d), e[p] && (B[p] = c[d]), d += 1;
  }
  b.data.forEach(function(a, b) {
    var d, e, s;
    s = (d = b < c.length ? c[b] : void 0) ? w(d, b) : void 0;
    e = f(a, b);
    if (null == d) {
      return d = g(a), Jw(d, a);
    }
    if (s === e) {
      return t(c[b], a);
    }
    B[s] || h(d);
    if (B[e]) {
      return d = B[e], l(d, b), t(d, a);
    }
    d = g(a);
    l(d, b);
    return Jw(d, a);
  });
  for (d = b.data.length;d < c.length;) {
    h(c[d]);
  }
}
function Ow(a, b) {
  var c, d, e, f;
  if (Dw(b)) {
    Nw(a, b);
  } else {
    if (!tw(b)) {
      if (a.nodeName.toLowerCase() !== b.tag.toLowerCase()) {
        throw xw(a), xw(b), Error("Cannot merge $e into node of different type");
      }
      Iw(a, b.kg);
      if (a.hasChildNodes()) {
        for (e = d = f = a.childNodes.length - 1;0 >= f ? 0 >= d : 0 <= d;e = 0 >= f ? ++d : --d) {
          c = a.childNodes[e], Ew(c) && a.removeChild(c);
        }
      }
      if (Dw(b.children[0])) {
        Ow(a, b.children[0]);
      } else {
        if (a.childNodes.length > b.children.length) {
          for (e = c = d = a.childNodes.length - 1;0 >= d ? 0 >= c : 0 <= c;e = 0 >= d ? ++c : --c) {
            a.removeChild(a.childNodes[e]);
          }
        }
        for (e = 0;e < b.children.length;) {
          d = b.children[e] || "";
          c = a.childNodes[e];
          if (Cw(d)) {
            null != c ? c.textContent = d : a.appendChild(document.createTextNode(d));
          } else {
            if (!tw(d)) {
              if (uw(d)) {
                null != c ? Ow(c, d) : a.appendChild(Mw(d));
              } else {
                throw xw(c), xw(d), Error("Cannot merge children");
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
;function Pw(a, b, c, d, e, f, g, h, l) {
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
k = Pw.prototype;
k.N = function(a, b) {
  return rc.j(this, b, null);
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
  return Ok(b, function() {
    return function(a) {
      return Ok(b, Uk, "", " ", "", c, a);
    };
  }(this), "#singult.core.Unify{", ", ", "}", c, Rg.h(new U(null, 7, 5, V, [new U(null, 2, 5, V, [Hv, this.data], null), new U(null, 2, 5, V, [ao, this.ob], null), new U(null, 2, 5, V, [qr, this.Fb], null), new U(null, 2, 5, V, [$q, this.kb], null), new U(null, 2, 5, V, [Eo, this.update], null), new U(null, 2, 5, V, [Wm, this.Db], null), new U(null, 2, 5, V, [Mu, this.Tb], null)], null), this.l));
};
k.L = function() {
  return this.o;
};
k.ma = function() {
  return new Pw(this.data, this.ob, this.Fb, this.kb, this.update, this.Db, this.Tb, this.o, this.l, this.A);
};
k.Z = function() {
  return 7 + J(this.l);
};
k.S = function() {
  var a = this.A;
  return null != a ? a : this.A = a = ig(this);
};
k.J = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && Pi(this, b) : b) ? !0 : !1;
};
k.Ra = function(a, b) {
  return Df(new sk(null, new n(null, 7, [Wm, null, ao, null, Eo, null, $q, null, qr, null, Mu, null, Hv, null], null), null), b) ? bf.h(Me(Sh.h(aj, this), this.o), b) : new Pw(this.data, this.ob, this.Fb, this.kb, this.update, this.Db, this.Tb, this.o, $g(bf.h(this.l, b)), null);
};
k.za = function(a, b, c) {
  return q(X.h ? X.h(Hv, b) : X.call(null, Hv, b)) ? new Pw(c, this.ob, this.Fb, this.kb, this.update, this.Db, this.Tb, this.o, this.l, null) : q(X.h ? X.h(ao, b) : X.call(null, ao, b)) ? new Pw(this.data, c, this.Fb, this.kb, this.update, this.Db, this.Tb, this.o, this.l, null) : q(X.h ? X.h(qr, b) : X.call(null, qr, b)) ? new Pw(this.data, this.ob, c, this.kb, this.update, this.Db, this.Tb, this.o, this.l, null) : q(X.h ? X.h($q, b) : X.call(null, $q, b)) ? new Pw(this.data, this.ob, this.Fb, 
  c, this.update, this.Db, this.Tb, this.o, this.l, null) : q(X.h ? X.h(Eo, b) : X.call(null, Eo, b)) ? new Pw(this.data, this.ob, this.Fb, this.kb, c, this.Db, this.Tb, this.o, this.l, null) : q(X.h ? X.h(Wm, b) : X.call(null, Wm, b)) ? new Pw(this.data, this.ob, this.Fb, this.kb, this.update, c, this.Tb, this.o, this.l, null) : q(X.h ? X.h(Mu, b) : X.call(null, Mu, b)) ? new Pw(this.data, this.ob, this.Fb, this.kb, this.update, this.Db, c, this.o, this.l, null) : new Pw(this.data, this.ob, this.Fb, 
  this.kb, this.update, this.Db, this.Tb, this.o, Q.j(this.l, b, c), null);
};
k.W = function() {
  return A(Rg.h(new U(null, 7, 5, V, [new U(null, 2, 5, V, [Hv, this.data], null), new U(null, 2, 5, V, [ao, this.ob], null), new U(null, 2, 5, V, [qr, this.Fb], null), new U(null, 2, 5, V, [$q, this.kb], null), new U(null, 2, 5, V, [Eo, this.update], null), new U(null, 2, 5, V, [Wm, this.Db], null), new U(null, 2, 5, V, [Mu, this.Tb], null)], null), this.l));
};
k.M = function(a, b) {
  return new Pw(this.data, this.ob, this.Fb, this.kb, this.update, this.Db, this.Tb, b, this.l, this.A);
};
k.Y = function(a, b) {
  return nf(b) ? vc(this, v.h(b, 0), v.h(b, 1)) : Rb.j(dc, this, b);
};
var Rw = function Qw(b) {
  if (b instanceof Pw) {
    var c = Bf(b) ? R.h(kh, b) : b, d = P.h(c, Mu), e = P.h(c, Wm), f = P.h(c, Eo), g = P.h(c, $q), h = P.h(c, qr), l = P.h(c, ao), p = P.h(c, Hv), s = function() {
      for (var b = [], c = A(p), d = null, e = 0, f = 0;;) {
        if (f < e) {
          var g = d.H(null, f);
          b.push(g);
          f += 1;
        } else {
          if (c = A(c)) {
            d = c, S(d) ? (c = x(d), f = y(d), d = c, e = J(c), c = f) : (c = C(d), b.push(c), c = F(d), d = null, e = 0), f = 0;
          } else {
            break;
          }
        }
      }
      return b;
    }();
    return new Hw(s, function(b, c, d, e, f, g, h, s) {
      return function(b) {
        return Qw(s.g ? s.g(b) : s.call(null, b));
      };
    }(b, c, d, e, f, g, h, l, p, s), h, g, f, e, d);
  }
  if (b instanceof W) {
    return qg(b);
  }
  if (mf(b)) {
    c = {};
    b = A(b);
    d = null;
    for (f = e = 0;;) {
      if (f < e) {
        h = d.H(null, f);
        g = O.j(h, 0, null);
        h = O.j(h, 1, null);
        g = Qw(g);
        if ("string" !== typeof g) {
          throw "Cannot convert; JavaScript map keys must be strings";
        }
        c[g] = Qw(h);
        f += 1;
      } else {
        if (b = A(b)) {
          if (S(b)) {
            e = x(b), b = y(b), d = e, e = J(e);
          } else {
            e = C(b);
            d = O.j(e, 0, null);
            e = O.j(e, 1, null);
            d = Qw(d);
            if ("string" !== typeof d) {
              throw "Cannot convert; JavaScript map keys must be strings";
            }
            c[d] = Qw(e);
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
  if (Bf(b)) {
    c = [];
    c.push(":*:");
    b = A(b);
    d = null;
    for (f = e = 0;;) {
      if (f < e) {
        g = d.H(null, f), c.push(Qw(g)), f += 1;
      } else {
        if (b = A(b)) {
          d = b, S(d) ? (b = x(d), f = y(d), d = b, e = J(b), b = f) : (b = C(d), c.push(Qw(b)), b = F(d), d = null, e = 0), f = 0;
        } else {
          break;
        }
      }
    }
    return c;
  }
  if (jf(b)) {
    c = [];
    b = A(b);
    d = null;
    for (f = e = 0;;) {
      if (f < e) {
        g = d.H(null, f), c.push(Qw(g)), f += 1;
      } else {
        if (b = A(b)) {
          d = b, S(d) ? (b = x(d), f = y(d), d = b, e = J(b), b = f) : (b = C(d), c.push(Qw(b)), b = F(d), d = null, e = 0), f = 0;
        } else {
          break;
        }
      }
    }
    return c;
  }
  return b;
};
function Sw(a, b) {
  if (null == b) {
    return null;
  }
  var c;
  c = Rw(b);
  c = Kw.g ? Kw.g(c) : Kw.call(null, c);
  return Ow.h ? Ow.h(a, c) : Ow.call(null, a, c);
}
var Tw = function() {
  function a(a, d, e) {
    var f = null;
    2 < arguments.length && (f = G(Array.prototype.slice.call(arguments, 2), 0));
    return b.call(this, a, d, f);
  }
  function b(a, b, e) {
    var f = Bf(e) ? R.h(kh, e) : e;
    e = P.h(f, Mu);
    var g = P.h(f, Wm), h = P.h(f, Eo), l = P.h(f, $q), f = P.h(f, qr);
    return new Pw(a, b, f, l, h, g, e);
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
function Uw(a) {
  Rv && ea(a.cssText) ? a.cssText = ".goog-tabpane-clear { clear: both; height: 0px; overflow: hidden }" : a.innerHTML = ".goog-tabpane-clear { clear: both; height: 0px; overflow: hidden }";
}
;function Vw(a, b, c) {
  if ("string" === typeof b) {
    return a.replace(new RegExp(String(b).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), "g"), c);
  }
  if (q(b.hasOwnProperty("source"))) {
    return a.replace(new RegExp(b.source, "g"), c);
  }
  throw "Invalid match arg: " + u.g(b);
}
var Ww = function() {
  function a(a, b) {
    return R.h(u, Lh(a, b));
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
function Xw(a) {
  return a.toUpperCase();
}
function Yw(a) {
  return a.toLowerCase();
}
function Zw(a) {
  return 2 > J(a) ? Xw(a) : "" + u.g(Xw(hg.j(a, 0, 1))) + u.g(Yw(hg.h(a, 1)));
}
function $w(a, b) {
  if (0 >= b || b >= 2 + J(a)) {
    return Ze.h(ri(Ke("", Ch.h(u, A(a)))), "");
  }
  if (q(ae.h ? ae.h(1, b) : ae.call(null, 1, b))) {
    return new U(null, 1, 5, V, [a], null);
  }
  if (q(ae.h ? ae.h(2, b) : ae.call(null, 2, b))) {
    return new U(null, 2, 5, V, ["", a], null);
  }
  var c = b - 2;
  return Ze.h(ri(Ke("", Ei.j(ri(Ch.h(u, A(a))), 0, c))), hg.h(a, c));
}
var ax = function() {
  function a(a, b, c) {
    if (ae.h("" + u.g(b), "/(?:)/")) {
      b = $w(a, c);
    } else {
      if (1 > c) {
        b = ri(("" + u.g(a)).split(b));
      } else {
        a: {
          for (var g = c, h = Ye;;) {
            if (ae.h(g, 1)) {
              b = Ze.h(h, a);
              break a;
            }
            var l = Mk(b, a);
            if (q(l)) {
              var p = l, l = a.indexOf(p), p = a.substring(l + J(p)), g = g - 1, h = Ze.h(h, a.substring(0, l));
              a = p;
            } else {
              b = Ze.h(h, a);
              break a;
            }
          }
          b = void 0;
        }
      }
    }
    if (ae.h(0, c)) {
      a: {
        for (c = b;;) {
          if (ae.h("", ff(c))) {
            c = null == c ? null : Nc(c);
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
function bx(a) {
  if (a ? a.df : a) {
    return a.df(a);
  }
  var b;
  b = bx[m(null == a ? null : a)];
  if (!b && (b = bx._, !b)) {
    throw r("IDom.-\x3edom", a);
  }
  return b.call(null, a);
}
U.prototype.df = function() {
  var a;
  a = Rw(this);
  a = Kw.g ? Kw.g(a) : Kw.call(null, a);
  return Mw.g ? Mw.g(a) : Mw.call(null, a);
};
bx.string = function(a) {
  return cx.g ? cx.g(a) : cx.call(null, a);
};
q("undefined" != typeof Node) && (Node.prototype.df = function() {
  return this;
});
var cx = function() {
  function a(a, b) {
    return bx(b).querySelector(a);
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
}(), dx = function() {
  function a(a, b) {
    var c = bx(a);
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
          c.appendChild(ew(c).createTextNode(String(b)));
        }
      }
    }
    return c;
  }
  function b(a) {
    a = bx(a);
    return ow(a);
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
}(), ex = function() {
  function a(a, b) {
    var c = bx(a), g = c.type;
    if (ea(g)) {
      switch(g.toLowerCase()) {
        case "checkbox":
        ;
        case "radio":
          c.checked = b ? "checked" : null;
          break;
        case "select-one":
          c.selectedIndex = -1;
          if (la(b)) {
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
          la(g) && (g = [g]);
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
    a = bx(a);
    return Mv(a);
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
}(), fx = function() {
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
var gx;
function hx(a) {
  var b = gx;
  try {
    gx = function() {
      var a = uk, b = new n(null, 1, [Sl, !0], null);
      return mh.j ? mh.j(a, Eb, b) : mh.call(null, a, Eb, b);
    }();
    var c = a.w ? a.w() : a.call(null);
    Bf(c) && Kk.g(c);
    return new n(null, 2, [du, c, sn, function() {
      var a = gx;
      return H.g ? H.g(a) : H.call(null, a);
    }()], null);
  } finally {
    gx = b;
  }
}
function ix(a) {
  q(function() {
    var b = gx;
    return q(b) ? Ib(Sl.g(ef(a))) : b;
  }()) && ph.h(gx, function(b) {
    return Ze.h(b, a);
  });
}
jh.prototype.Dd = function() {
  ix(this);
  return this.state;
};
function jx(a, b, c, d, e, f, g, h) {
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
k = jx.prototype;
k.N = function(a, b) {
  return rc.j(this, b, null);
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
  return Ok(b, function() {
    return function(a) {
      return Ok(b, Uk, "", " ", "", c, a);
    };
  }(this), "#reflex.core.ComputedObservable{", ", ", "}", c, Rg.h(new U(null, 6, 5, V, [new U(null, 2, 5, V, [yq, this.state], null), new U(null, 2, 5, V, [ho, this.xb], null), new U(null, 2, 5, V, [Mt, this.f], null), new U(null, 2, 5, V, [Nm, this.key], null), new U(null, 2, 5, V, [Un, this.Mb], null), new U(null, 2, 5, V, [Wl, this.Da], null)], null), this.l));
};
k.L = function() {
  return this.o;
};
k.ma = function() {
  return new jx(this.state, this.xb, this.f, this.key, this.Mb, this.Da, this.o, this.l, this.A);
};
k.Z = function() {
  return 6 + J(this.l);
};
k.S = function() {
  var a = this.A;
  return null != a ? a : this.A = a = ig(this);
};
k.J = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && Pi(this, b) : b) ? !0 : !1;
};
k.Ra = function(a, b) {
  return Df(new sk(null, new n(null, 6, [Wl, null, Nm, null, Un, null, ho, null, yq, null, Mt, null], null), null), b) ? bf.h(Me(Sh.h(aj, this), this.o), b) : new jx(this.state, this.xb, this.f, this.key, this.Mb, this.Da, this.o, $g(bf.h(this.l, b)), null);
};
k.za = function(a, b, c) {
  return q(X.h ? X.h(yq, b) : X.call(null, yq, b)) ? new jx(c, this.xb, this.f, this.key, this.Mb, this.Da, this.o, this.l, null) : q(X.h ? X.h(ho, b) : X.call(null, ho, b)) ? new jx(this.state, c, this.f, this.key, this.Mb, this.Da, this.o, this.l, null) : q(X.h ? X.h(Mt, b) : X.call(null, Mt, b)) ? new jx(this.state, this.xb, c, this.key, this.Mb, this.Da, this.o, this.l, null) : q(X.h ? X.h(Nm, b) : X.call(null, Nm, b)) ? new jx(this.state, this.xb, this.f, c, this.Mb, this.Da, this.o, this.l, 
  null) : q(X.h ? X.h(Un, b) : X.call(null, Un, b)) ? new jx(this.state, this.xb, this.f, this.key, c, this.Da, this.o, this.l, null) : q(X.h ? X.h(Wl, b) : X.call(null, Wl, b)) ? new jx(this.state, this.xb, this.f, this.key, this.Mb, c, this.o, this.l, null) : new jx(this.state, this.xb, this.f, this.key, this.Mb, this.Da, this.o, Q.j(this.l, b, c), null);
};
k.W = function() {
  return A(Rg.h(new U(null, 6, 5, V, [new U(null, 2, 5, V, [yq, this.state], null), new U(null, 2, 5, V, [ho, this.xb], null), new U(null, 2, 5, V, [Mt, this.f], null), new U(null, 2, 5, V, [Nm, this.key], null), new U(null, 2, 5, V, [Un, this.Mb], null), new U(null, 2, 5, V, [Wl, this.Da], null)], null), this.l));
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
        S(a) ? (c = x(a), a = y(a), b = c, c = J(c)) : (b = C(a), O.j(b, 0, null), e = O.j(b, 1, null), e.w ? e.w() : e.call(null), a = F(a), b = null, c = 0), d = 0;
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
  return this.Da = bf.h(this.Da, b);
};
k.M = function(a, b) {
  return new jx(this.state, this.xb, this.f, this.key, this.Mb, this.Da, b, this.l, this.A);
};
k.Y = function(a, b) {
  return nf(b) ? vc(this, v.h(b, 0), v.h(b, 1)) : Rb.j(dc, this, b);
};
k.Dd = function() {
  ix(this);
  if (Ib(this.xb)) {
    return this.state;
  }
  for (var a = hx(this.f), b = Bf(a) ? R.h(kh, a) : a, c = P.h(b, sn), d = P.h(b, du), e = A(this.Mb), f = null, g = 0, h = 0;;) {
    if (h < g) {
      var l = f.H(null, h);
      sd(l, this.key);
      h += 1;
    } else {
      if (e = A(e)) {
        f = e, S(f) ? (e = x(f), h = y(f), f = e, g = J(e), e = h) : (e = C(f), sd(e, this.key), e = F(f), f = null, g = 0), h = 0;
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
      l = f.H(null, h), Yk(l, this.key, function(a, b, c, d, e, f, g, h, s, l) {
        return function() {
          l.xb = !0;
          return qd(l, null, null);
        };
      }(e, f, g, h, l, a, b, c, d, this)), h += 1;
    } else {
      var p = A(e);
      if (p) {
        l = p;
        if (S(l)) {
          e = x(l), h = y(l), f = e, g = J(e), e = h;
        } else {
          var s = C(l);
          Yk(s, this.key, function(a, b, c, d, e, f, g, h, s, l, p, N) {
            return function() {
              N.xb = !0;
              return qd(N, null, null);
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
var Zy = function() {
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
    return R.v(Tw, a, b, e);
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
function $y(a) {
  if (a ? a.Bg : a) {
    return a.Bg();
  }
  var b;
  b = $y[m(null == a ? null : a)];
  if (!b && (b = $y._, !b)) {
    throw r("PushbackReader.read-char", a);
  }
  return b.call(null, a);
}
function az(a, b) {
  if (a ? a.Cg : a) {
    return a.Cg(0, b);
  }
  var c;
  c = az[m(null == a ? null : a)];
  if (!c && (c = az._, !c)) {
    throw r("PushbackReader.unread", a);
  }
  return c.call(null, a, b);
}
function bz(a, b, c) {
  this.da = a;
  this.buffer = b;
  this.na = c;
}
bz.prototype.Bg = function() {
  return 0 === this.buffer.length ? (this.na += 1, this.da[this.na]) : this.buffer.pop();
};
bz.prototype.Cg = function(a, b) {
  return this.buffer.push(b);
};
function cz(a) {
  var b = !/[^\t\n\r ]/.test(a);
  return q(b) ? b : "," === a;
}
function dz(a, b) {
  var c;
  !(c = !/[^0-9]/.test(b)) && (c = "+" === b || "-" === b) && (c = $y(a), az(a, c), c = !/[^0-9]/.test(c));
  return c;
}
var ez = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = G(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, 0, e);
  }
  function b(a, b) {
    throw Error(R.h(u, b));
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
function fz(a, b) {
  for (var c = new db(b), d = $y(a);;) {
    var e;
    if (!(e = null == d || cz(d))) {
      e = d;
      var f = "#" !== e;
      e = f ? (f = "'" !== e) ? (f = ":" !== e) ? gz.g ? gz.g(e) : gz.call(null, e) : f : f : f;
    }
    if (e) {
      return az(a, d), c.toString();
    }
    c.append(d);
    d = $y(a);
  }
}
function hz(a) {
  for (;;) {
    var b = $y(a);
    if ("\n" === b || "\r" === b || null == b) {
      return a;
    }
  }
}
var iz = Nk("^([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+))(N)?$"), jz = Nk("^([-+]?[0-9]+)/([0-9]+)$"), kz = Nk("^([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?$"), lz = Nk("^[:]?([^0-9/].*/)?([^0-9/][^/]*)$");
function mz(a, b) {
  var c = a.exec(b);
  return null != c && c[0] === b ? 1 === c.length ? c[0] : c : null;
}
function nz(a) {
  if (q(mz(iz, a))) {
    a = mz(iz, a);
    var b = a[2];
    if (null != (ae.h(b, "") ? null : b)) {
      a = 0;
    } else {
      var b = q(a[3]) ? [a[3], 10] : q(a[4]) ? [a[4], 16] : q(a[5]) ? [a[5], 8] : q(a[6]) ? [a[7], parseInt(a[6], 10)] : [null, null], c = b[0];
      null == c ? a = null : (b = parseInt(c, b[1]), a = "-" === a[1] ? -b : b);
    }
  } else {
    q(mz(jz, a)) ? (a = mz(jz, a), a = parseInt(a[1], 10) / parseInt(a[2], 10)) : a = q(mz(kz, a)) ? parseFloat(a) : null;
  }
  return a;
}
var oz = Nk("^[0-9A-Fa-f]{2}$"), pz = Nk("^[0-9A-Fa-f]{4}$");
function qz(a, b, c, d) {
  return q(Lk(a, d)) ? d : ez.k(b, G(["Unexpected unicode escape \\", c, d], 0));
}
function rz(a) {
  return String.fromCharCode(parseInt(a, 16));
}
function sz(a) {
  var b = $y(a), c = "t" === b ? "\t" : "r" === b ? "\r" : "n" === b ? "\n" : "\\" === b ? "\\" : '"' === b ? '"' : "b" === b ? "\b" : "f" === b ? "\f" : null;
  q(c) ? a = c : "x" === b ? (c = (new db($y(a), $y(a))).toString(), a = rz(qz(oz, a, b, c))) : "u" === b ? (c = (new db($y(a), $y(a), $y(a), $y(a))).toString(), a = rz(qz(pz, a, b, c))) : a = /[^0-9]/.test(b) ? ez.k(a, G(["Unexpected unicode escape \\", b], 0)) : String.fromCharCode(b);
  return a;
}
function tz(a) {
  for (var b = $y(a);;) {
    var c;
    c = b;
    c = cz.g ? cz.g(c) : cz.call(null, c);
    if (q(c)) {
      b = $y(a);
    } else {
      return b;
    }
  }
}
function uz(a, b) {
  for (var c = td(Ye);;) {
    var d = tz(b);
    q(d) || ez.k(b, G(["EOF while reading"], 0));
    if (a === d) {
      return vd(c);
    }
    var e = function() {
      var a = d;
      return gz.g ? gz.g(a) : gz.call(null, a);
    }();
    if (q(e)) {
      var f = e, e = function() {
        var a = d;
        return f.h ? f.h(b, a) : f.call(null, b, a);
      }()
    } else {
      az(b, d), e = vz.v ? vz.v(b, !0, null, !0) : vz.call(null, b, !0, null);
    }
    c = e === b ? c : Vg.h(c, e);
  }
}
function wz(a, b) {
  return ez.k(a, G(["Reader for ", b, " not implemented yet"], 0));
}
function xz(a, b) {
  var c = $y(a), d = yz.g ? yz.g(c) : yz.call(null, c);
  if (q(d)) {
    return d.h ? d.h(a, b) : d.call(null, a, b);
  }
  d = zz.h ? zz.h(a, c) : zz.call(null, a, c);
  return q(d) ? d : ez.k(a, G(["No dispatch macro for ", c], 0));
}
function Az(a, b) {
  return ez.k(a, G(["Unmached delimiter ", b], 0));
}
function Bz(a) {
  return R.h(og, uz(")", a));
}
function Cz(a) {
  return uz("]", a);
}
function Dz(a) {
  var b = uz("}", a), c = J(b);
  !ch(c) && ez.k(a, G(["Map literal must contain an even number of forms"], 0));
  return R.h(kh, b);
}
function Ez(a, b) {
  for (var c = new db(b), d = $y(a);;) {
    if (q(function() {
      var a = null == d;
      if (a || (a = cz(d))) {
        return a;
      }
      a = d;
      return gz.g ? gz.g(a) : gz.call(null, a);
    }())) {
      az(a, d);
      var e = c.toString(), c = nz(e);
      return q(c) ? c : ez.k(a, G(["Invalid number format [", e, "]"], 0));
    }
    c.append(d);
    d = e = $y(a);
  }
}
function Fz(a) {
  for (var b = new db, c = $y(a);;) {
    if (null == c) {
      return ez.k(a, G(["EOF while reading"], 0));
    }
    if ("\\" === c) {
      b.append(sz(a));
    } else {
      if ('"' === c) {
        return b.toString();
      }
      b.append(c);
    }
    c = $y(a);
  }
}
function Gz(a) {
  for (var b = new db, c = $y(a);;) {
    if (null == c) {
      return ez.k(a, G(["EOF while reading"], 0));
    }
    if ("\\" === c) {
      b.append(c);
      var d = $y(a);
      if (null == d) {
        return ez.k(a, G(["EOF while reading"], 0));
      }
      var e = function() {
        var a = b;
        a.append(d);
        return a;
      }(), f = $y(a);
    } else {
      if ('"' === c) {
        return b.toString();
      }
      e = function() {
        var a = b;
        a.append(c);
        return a;
      }();
      f = $y(a);
    }
    b = e;
    c = f;
  }
}
function Hz(a, b) {
  var c = fz(a, b);
  if (q(-1 != c.indexOf("/"))) {
    c = de.h(hg.j(c, 0, c.indexOf("/")), hg.j(c, c.indexOf("/") + 1, c.length));
  } else {
    var d = de.g(c), c = "nil" === c ? null : "true" === c ? !0 : "false" === c ? !1 : d
  }
  return c;
}
function Iz(a) {
  var b = fz(a, $y(a)), c = mz(lz, b), b = c[0], d = c[1], c = c[2];
  return void 0 !== d && ":/" === d.substring(d.length - 2, d.length) || ":" === c[c.length - 1] || -1 !== b.indexOf("::", 1) ? ez.k(a, G(["Invalid token: ", b], 0)) : null != d && 0 < d.length ? rg.h(d.substring(0, d.indexOf("/")), c) : rg.g(b);
}
function Jz(a) {
  return function(b) {
    return dc(dc(me, vz.v ? vz.v(b, !0, null, !0) : vz.call(null, b, !0, null)), a);
  };
}
function Kz() {
  return function(a) {
    return ez.k(a, G(["Unreadable form"], 0));
  };
}
function Lz(a) {
  var b;
  b = vz.v ? vz.v(a, !0, null, !0) : vz.call(null, a, !0, null);
  b = b instanceof ce ? new n(null, 1, [bu, b], null) : "string" === typeof b ? new n(null, 1, [bu, b], null) : b instanceof W ? new dj([b, !0], !0, !1) : b;
  mf(b) || ez.k(a, G(["Metadata must be Symbol,Keyword,String or Map"], 0));
  var c = vz.v ? vz.v(a, !0, null, !0) : vz.call(null, a, !0, null);
  return(c ? c.B & 262144 || c.Vh || (c.B ? 0 : Mb(Xc, c)) : Mb(Xc, c)) ? Me(c, pk.k(G([ef(c), b], 0))) : ez.k(a, G(["Metadata can only be applied to IWithMetas"], 0));
}
function Mz(a) {
  return yk(uz("}", a));
}
function Nz(a) {
  return Nk(Gz(a));
}
function Oz(a) {
  vz.v ? vz.v(a, !0, null, !0) : vz.call(null, a, !0, null);
  return a;
}
function gz(a) {
  return'"' === a ? Fz : ":" === a ? Iz : ";" === a ? hz : "'" === a ? Jz(new ce(null, "quote", "quote", 1377916282, null)) : "@" === a ? Jz(new ce(null, "deref", "deref", 1494944732, null)) : "^" === a ? Lz : "`" === a ? wz : "~" === a ? wz : "(" === a ? Bz : ")" === a ? Az : "[" === a ? Cz : "]" === a ? Az : "{" === a ? Dz : "}" === a ? Az : "\\" === a ? $y : "#" === a ? xz : null;
}
function yz(a) {
  return "{" === a ? Mz : "\x3c" === a ? Kz() : '"' === a ? Nz : "!" === a ? hz : "_" === a ? Oz : null;
}
function vz(a, b, c) {
  for (;;) {
    var d = $y(a);
    if (null == d) {
      return q(b) ? ez.k(a, G(["EOF while reading"], 0)) : c;
    }
    if (!cz(d)) {
      if (";" === d) {
        var e = function() {
          var b = a, c = d;
          return hz.h ? hz.h(b, c) : hz.call(null, b);
        }();
        a = e;
      } else {
        var f = gz(d), e = q(f) ? function() {
          var b = a, c = d;
          return f.h ? f.h(b, c) : f.call(null, b, c);
        }() : dz(a, d) ? Ez(a, d) : Hz(a, d);
        if (e !== a) {
          return e;
        }
      }
    }
  }
}
function Pz(a) {
  return vz(new bz(a, [], -1), !1, null);
}
var Qz = function(a, b) {
  return function(c, d) {
    return P.h(q(d) ? b : a, c);
  };
}(new U(null, 13, 5, V, [null, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], null), new U(null, 13, 5, V, [null, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], null)), Rz = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
function Sz(a) {
  a = parseInt(a, 10);
  return Ib(isNaN(a)) ? a : null;
}
function Tz(a, b, c, d) {
  a <= b && b <= c || ez.k(null, G(["" + u.g(d) + " Failed:  " + u.g(a) + "\x3c\x3d" + u.g(b) + "\x3c\x3d" + u.g(c)], 0));
  return b;
}
function Uz(a) {
  var b = Lk(Rz, a);
  O.j(b, 0, null);
  var c = O.j(b, 1, null), d = O.j(b, 2, null), e = O.j(b, 3, null), f = O.j(b, 4, null), g = O.j(b, 5, null), h = O.j(b, 6, null), l = O.j(b, 7, null), p = O.j(b, 8, null), s = O.j(b, 9, null), t = O.j(b, 10, null);
  if (Ib(b)) {
    return ez.k(null, G(["Unrecognized date/time syntax: " + u.g(a)], 0));
  }
  var w = Sz(c), B = function() {
    var a = Sz(d);
    return q(a) ? a : 1;
  }();
  a = function() {
    var a = Sz(e);
    return q(a) ? a : 1;
  }();
  var b = function() {
    var a = Sz(f);
    return q(a) ? a : 0;
  }(), c = function() {
    var a = Sz(g);
    return q(a) ? a : 0;
  }(), z = function() {
    var a = Sz(h);
    return q(a) ? a : 0;
  }(), D = function() {
    var a;
    a: {
      if (ae.h(3, J(l))) {
        a = l;
      } else {
        if (3 < J(l)) {
          a = hg.j(l, 0, 3);
        } else {
          for (a = new db(l);;) {
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
    a = Sz(a);
    return q(a) ? a : 0;
  }(), p = (ae.h(p, "-") ? -1 : 1) * (60 * function() {
    var a = Sz(s);
    return q(a) ? a : 0;
  }() + function() {
    var a = Sz(t);
    return q(a) ? a : 0;
  }());
  return new U(null, 8, 5, V, [w, Tz(1, B, 12, "timestamp month field must be in range 1..12"), Tz(1, a, function() {
    var a;
    if (a = 0 === (w % 4 + 4) % 4) {
      a = 0 !== (w % 100 + 100) % 100 || 0 === (w % 400 + 400) % 400;
    }
    return Qz.h ? Qz.h(B, a) : Qz.call(null, B, a);
  }(), "timestamp day field must be in range 1..last day in month"), Tz(0, b, 23, "timestamp hour field must be in range 0..23"), Tz(0, c, 59, "timestamp minute field must be in range 0..59"), Tz(0, z, ae.h(c, 59) ? 60 : 59, "timestamp second field must be in range 0..60"), Tz(0, D, 999, "timestamp millisecond field must be in range 0..999"), p], null);
}
var Vz, Wz = new n(null, 4, ["inst", function(a) {
  var b;
  if ("string" === typeof a) {
    if (b = Uz(a), q(b)) {
      a = O.j(b, 0, null);
      var c = O.j(b, 1, null), d = O.j(b, 2, null), e = O.j(b, 3, null), f = O.j(b, 4, null), g = O.j(b, 5, null), h = O.j(b, 6, null);
      b = O.j(b, 7, null);
      b = new Date(Date.UTC(a, c - 1, d, e, f, g, h) - 6E4 * b);
    } else {
      b = ez.k(null, G(["Unrecognized date/time syntax: " + u.g(a)], 0));
    }
  } else {
    b = ez.k(null, G(["Instance literal expects a string for its timestamp."], 0));
  }
  return b;
}, "uuid", function(a) {
  return "string" === typeof a ? new Ll(a) : ez.k(null, G(["UUID literal expects a string as its representation."], 0));
}, "queue", function(a) {
  return nf(a) ? Sh.h(Mi, a) : ez.k(null, G(["Queue literal expects a vector for its elements."], 0));
}, "js", function(a) {
  if (nf(a)) {
    var b = [];
    a = A(a);
    for (var c = null, d = 0, e = 0;;) {
      if (e < d) {
        var f = c.H(null, e);
        b.push(f);
        e += 1;
      } else {
        if (a = A(a)) {
          c = a, S(c) ? (a = x(c), e = y(c), c = a, d = J(a), a = e) : (a = C(c), b.push(a), a = F(c), c = null, d = 0), e = 0;
        } else {
          break;
        }
      }
    }
    return b;
  }
  if (mf(a)) {
    b = {};
    a = A(a);
    c = null;
    for (e = d = 0;;) {
      if (e < d) {
        var g = c.H(null, e), f = O.j(g, 0, null), g = O.j(g, 1, null);
        b[qg(f)] = g;
        e += 1;
      } else {
        if (a = A(a)) {
          S(a) ? (d = x(a), a = y(a), c = d, d = J(d)) : (d = C(a), c = O.j(d, 0, null), d = O.j(d, 1, null), b[qg(c)] = d, a = F(a), c = null, d = 0), e = 0;
        } else {
          break;
        }
      }
    }
    return b;
  }
  return ez.k(null, G(["JS literal expects a vector or map containing only string or unqualified keyword keys"], 0));
}], null);
Vz = mh.g ? mh.g(Wz) : mh.call(null, Wz);
var Xz = mh.g ? mh.g(null) : mh.call(null, null);
function zz(a, b) {
  var c = Hz(a, b), d = P.h(H.g ? H.g(Vz) : H.call(null, Vz), "" + u.g(c)), e = H.g ? H.g(Xz) : H.call(null, Xz);
  return q(d) ? (c = vz(a, !0, null), d.g ? d.g(c) : d.call(null, c)) : q(e) ? (d = vz(a, !0, null), e.h ? e.h(c, d) : e.call(null, c, d)) : ez.k(a, G(["Could not find tag parser for ", "" + u.g(c), " in ", oh.k(G([Yi(H.g ? H.g(Vz) : H.call(null, Vz))], 0))], 0));
}
;var Yz = !Rv || Rv && 9 <= Zv, Zz = Rv && !Xv("9");
!Tv || Xv("528");
Sv && Xv("1.9b") || Rv && Xv("8") || Qv && Xv("9.5") || Tv && Xv("528");
Sv && !Xv("8") || Rv && Xv("9");
function $z() {
  0 != aA && (this[ra] || (this[ra] = ++ta));
}
var aA = 0;
$z.prototype.bi = !1;
function bA(a, b) {
  this.type = a;
  this.currentTarget = this.target = b;
  this.defaultPrevented = this.Sd = !1;
  this.sh = !0;
}
bA.prototype.preventDefault = function() {
  this.defaultPrevented = !0;
  this.sh = !1;
};
function cA(a) {
  cA[" "](a);
  return a;
}
cA[" "] = ja;
function dA(a, b) {
  bA.call(this, a ? a.type : "");
  this.relatedTarget = this.currentTarget = this.target = null;
  this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
  this.Hg = this.state = null;
  a && this.Od(a, b);
}
Ga(dA, bA);
dA.prototype.Od = function(a, b) {
  var c = this.type = a.type;
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if (d) {
    if (Sv) {
      var e;
      a: {
        try {
          cA(d.nodeName);
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
  this.offsetX = Tv || void 0 !== a.offsetX ? a.offsetX : a.layerX;
  this.offsetY = Tv || void 0 !== a.offsetY ? a.offsetY : a.layerY;
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
dA.prototype.preventDefault = function() {
  dA.dj.preventDefault.call(this);
  var a = this.Hg;
  if (a.preventDefault) {
    a.preventDefault();
  } else {
    if (a.returnValue = !1, Zz) {
      try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1;
        }
      } catch (b) {
      }
    }
  }
};
var eA = "closure_listenable_" + (1E6 * Math.random() | 0), fA = 0;
function gA(a, b, c, d, e) {
  this.wd = a;
  this.Re = null;
  this.src = b;
  this.type = c;
  this.te = !!d;
  this.qc = e;
  this.key = ++fA;
  this.Td = this.se = !1;
}
function hA(a) {
  a.Td = !0;
  a.wd = null;
  a.Re = null;
  a.src = null;
  a.qc = null;
}
;function iA(a) {
  this.src = a;
  this.ec = {};
  this.Ve = 0;
}
iA.prototype.add = function(a, b, c, d, e) {
  var f = a.toString();
  a = this.ec[f];
  a || (a = this.ec[f] = [], this.Ve++);
  var g = jA(a, b, d, e);
  -1 < g ? (b = a[g], c || (b.se = !1)) : (b = new gA(b, this.src, f, !!d, e), b.se = c, a.push(b));
  return b;
};
iA.prototype.remove = function(a, b, c, d) {
  a = a.toString();
  if (!(a in this.ec)) {
    return!1;
  }
  var e = this.ec[a];
  b = jA(e, b, c, d);
  return-1 < b ? (hA(e[b]), ib.splice.call(e, b, 1), 0 == e.length && (delete this.ec[a], this.Ve--), !0) : !1;
};
function kA(a, b) {
  var c = b.type;
  if (c in a.ec) {
    var d = a.ec[c], e = jb(d, b), f;
    (f = 0 <= e) && ib.splice.call(d, e, 1);
    f && (hA(b), 0 == a.ec[c].length && (delete a.ec[c], a.Ve--));
  }
}
iA.prototype.If = function(a, b, c, d) {
  a = this.ec[a.toString()];
  var e = -1;
  a && (e = jA(a, b, c, d));
  return-1 < e ? a[e] : null;
};
function jA(a, b, c, d) {
  for (var e = 0;e < a.length;++e) {
    var f = a[e];
    if (!f.Td && f.wd == b && f.te == !!c && f.qc == d) {
      return e;
    }
  }
  return-1;
}
;var lA = "closure_lm_" + (1E6 * Math.random() | 0), mA = {}, nA = 0;
function oA(a, b, c, d, e) {
  if ("array" == m(b)) {
    for (var f = 0;f < b.length;f++) {
      oA(a, b[f], c, d, e);
    }
    return null;
  }
  c = pA(c);
  if (a && a[eA]) {
    a = a.Tg(b, c, d, e);
  } else {
    if (!b) {
      throw Error("Invalid event type");
    }
    var f = !!d, g = qA(a);
    g || (a[lA] = g = new iA(a));
    c = g.add(b, c, !1, d, e);
    c.Re || (d = rA(), c.Re = d, d.src = a, d.wd = c, a.addEventListener ? a.addEventListener(b.toString(), d, f) : a.attachEvent(sA(b.toString()), d), nA++);
    a = c;
  }
  return a;
}
function rA() {
  var a = tA, b = Yz ? function(c) {
    return a.call(b.src, b.wd, c);
  } : function(c) {
    c = a.call(b.src, b.wd, c);
    if (!c) {
      return c;
    }
  };
  return b;
}
function uA(a, b, c, d, e) {
  if ("array" == m(b)) {
    for (var f = 0;f < b.length;f++) {
      uA(a, b[f], c, d, e);
    }
  } else {
    c = pA(c), a && a[eA] ? a.hj(b, c, d, e) : a && (a = qA(a)) && (b = a.If(b, c, !!d, e)) && vA(b);
  }
}
function vA(a) {
  if (!na(a) && a && !a.Td) {
    var b = a.src;
    if (b && b[eA]) {
      kA(b.Md, a);
    } else {
      var c = a.type, d = a.Re;
      b.removeEventListener ? b.removeEventListener(c, d, a.te) : b.detachEvent && b.detachEvent(sA(c), d);
      nA--;
      (c = qA(b)) ? (kA(c, a), 0 == c.Ve && (c.src = null, b[lA] = null)) : hA(a);
    }
  }
}
function sA(a) {
  return a in mA ? mA[a] : mA[a] = "on" + a;
}
function wA(a, b, c, d) {
  var e = 1;
  if (a = qA(a)) {
    if (b = a.ec[b.toString()]) {
      for (b = b.concat(), a = 0;a < b.length;a++) {
        var f = b[a];
        f && f.te == c && !f.Td && (e &= !1 !== xA(f, d));
      }
    }
  }
  return Boolean(e);
}
function xA(a, b) {
  var c = a.wd, d = a.qc || a.src;
  a.se && vA(a);
  return c.call(d, b);
}
function tA(a, b) {
  if (a.Td) {
    return!0;
  }
  if (!Yz) {
    var c = b || ga("window.event"), d = new dA(c, this), e = !0;
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
        d.currentTarget = c[h], e &= wA(c[h], f, !0, d);
      }
      for (h = 0;!d.Sd && h < c.length;h++) {
        d.currentTarget = c[h], e &= wA(c[h], f, !1, d);
      }
    }
    return e;
  }
  return xA(a, new dA(b, this));
}
function qA(a) {
  a = a[lA];
  return a instanceof iA ? a : null;
}
var yA = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
function pA(a) {
  if (oa(a)) {
    return a;
  }
  a[yA] || (a[yA] = function(b) {
    return a.handleEvent(b);
  });
  return a[yA];
}
;var zA = function() {
  function a(a, d, e, f) {
    var g = null;
    3 < arguments.length && (g = G(Array.prototype.slice.call(arguments, 3), 0));
    return b.call(this, a, d, e, g);
  }
  function b(a, b, e, f) {
    f = Bf(f) ? R.h(kh, f) : f;
    f = P.j(f, fu, !1);
    a = bx(a);
    b = qg(b);
    return oA(a, b, e, f);
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
function AA(a, b) {
  return Me(new U(null, 2, 5, V, [b, null], null), new n(null, 3, [Vq, a, qm, Wt, im, Wt], null));
}
function BA(a) {
  return a.g ? a.g(0) : a.call(null, 0);
}
function CA(a) {
  return im.g(ef(a)).call(null, BA(a));
}
function DA(a) {
  var b = O.j(a, 0, null), c = O.j(a, 1, null), d = Bf(c) ? R.h(kh, c) : c, e = P.h(d, Rq), c = P.h(d, Pl), f = P.h(d, ys), g = P.h(d, mm), d = P.h(d, Bs);
  return q(f) ? (f = ff(f), q(d) ? (d = V, b = Rg.h(e, Ke(b, g)), b = Vq.g(ef(a)).call(null, f, b), c = new U(null, 2, 5, d, [b, q(c) ? Q.j(c, Bs, !0) : c], null)) : c = new U(null, 2, 5, V, [f, c], null), Me(c, ef(a))) : null;
}
function EA(a) {
  for (;;) {
    if (ae.h(xu, a.g ? a.g(1) : a.call(null, 1))) {
      return BA(a);
    }
    var b = DA(a);
    if (q(b)) {
      a = b;
    } else {
      return BA(a);
    }
  }
}
function FA(a) {
  var b = O.j(a, 0, null), c = O.j(a, 1, null), c = Bf(c) ? R.h(kh, c) : c, d = P.h(c, Rq), e = P.h(c, mm), f = O.j(e, 0, null), g = gg(e);
  return q(q(c) ? e : c) ? Me(new U(null, 2, 5, V, [f, Q.k(c, Rq, Ze.h(d, b), G([mm, g], 0))], null), ef(a)) : null;
}
var GA = function() {
  function a(a, d, e) {
    var f = null;
    2 < arguments.length && (f = G(Array.prototype.slice.call(arguments, 2), 0));
    return b.call(this, a, d, f);
  }
  function b(a, b, e) {
    b = R.j(b, BA(a), e);
    O.j(a, 0, null);
    e = O.j(a, 1, null);
    return Me(new U(null, 2, 5, V, [b, Q.j(e, Bs, !0)], null), ef(a));
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
function HA(a) {
  if (ae.h(xu, a.g ? a.g(1) : a.call(null, 1))) {
    return a;
  }
  var b;
  b = CA(a);
  if (q(b)) {
    if (q(CA(a))) {
      b = O.j(a, 0, null);
      var c = O.j(a, 1, null), d;
      if (q(CA(a))) {
        d = qm.g(ef(a)).call(null, BA(a));
      } else {
        throw "called children on a leaf node";
      }
      var e = O.j(d, 0, null), f = gg(d);
      b = q(d) ? Me(new U(null, 2, 5, V, [e, new n(null, 4, [Rq, Ye, ys, q(c) ? Ze.h(ys.g(c), b) : new U(null, 1, 5, V, [b], null), Pl, c, mm, f], null)], null), ef(a)) : null;
    } else {
      b = null;
    }
  }
  if (q(b)) {
    return b;
  }
  b = FA(a);
  if (q(b)) {
    return b;
  }
  for (;;) {
    if (q(DA(a))) {
      b = FA(DA(a));
      if (q(b)) {
        return b;
      }
      a = DA(a);
    } else {
      return new U(null, 2, 5, V, [BA(a), xu], null);
    }
  }
}
function IA(a) {
  return ae.h(xu, a.g ? a.g(1) : a.call(null, 1));
}
;function JA(a) {
  if (a ? a.Lb : a) {
    return a.Lb(a);
  }
  var b;
  b = JA[m(null == a ? null : a)];
  if (!b && (b = JA._, !b)) {
    throw r("PTopological.topology", a);
  }
  return b.call(null, a);
}
function KA(a) {
  if (a ? a.bg : a) {
    return a.bg(a);
  }
  var b;
  b = KA[m(null == a ? null : a)];
  if (!b && (b = KA._, !b)) {
    throw r("PTopology.dimensions", a);
  }
  return b.call(null, a);
}
function LA(a, b) {
  if (a ? a.ag : a) {
    return a.ag(a, b);
  }
  var c;
  c = LA[m(null == a ? null : a)];
  if (!c && (c = LA._, !c)) {
    throw r("PTopology.coordinates-of-index", a);
  }
  return c.call(null, a, b);
}
function MA(a, b) {
  if (a ? a.cg : a) {
    return a.cg(a, b);
  }
  var c;
  c = MA[m(null == a ? null : a)];
  if (!c && (c = MA._, !c)) {
    throw r("PTopology.index-of-coordinates", a);
  }
  return c.call(null, a, b);
}
function NA(a, b, c, d) {
  if (a ? a.dg : a) {
    return a.dg(a, b, c, d);
  }
  var e;
  e = NA[m(null == a ? null : a)];
  if (!e && (e = NA._, !e)) {
    throw r("PTopology.neighbours*", a);
  }
  return e.call(null, a, b, c, d);
}
function OA(a, b, c) {
  if (a ? a.$f : a) {
    return a.$f(a, b, c);
  }
  var d;
  d = OA[m(null == a ? null : a)];
  if (!d && (d = OA._, !d)) {
    throw r("PTopology.coord-distance", a);
  }
  return d.call(null, a, b, c);
}
function PA(a) {
  return KA(JA(a));
}
function QA(a) {
  return R.h(Of, KA(a));
}
function RA(a) {
  return QA(JA(a));
}
var SA = function() {
  function a(a, b, e) {
    return NA(a, b, e, 0);
  }
  var b = null, b = function(b, d, e, f) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, d, e);
      case 4:
        return NA(b, d, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.j = a;
  b.v = function(a, b, e, f) {
    return NA(a, b, e, f);
  };
  return b;
}(), TA = function() {
  function a(a, b, c, g) {
    return Ch.h(gh.h(MA, a), NA(a, LA(a, b), c, g));
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
function UA(a, b, c) {
  if (a ? a.Zc : a) {
    return a.Zc(a, b, c);
  }
  var d;
  d = UA[m(null == a ? null : a)];
  if (!d && (d = UA._, !d)) {
    throw r("PEncodable.encode", a);
  }
  return d.call(null, a, b, c);
}
function VA(a, b, c) {
  if (a ? a.Qd : a) {
    return a.Qd(a, b, c);
  }
  var d;
  d = VA[m(null == a ? null : a)];
  if (!d && (d = VA._, !d)) {
    throw r("PEncodable.decode", a);
  }
  return d.call(null, a, b, c);
}
function WA(a) {
  if (a ? a.Ne : a) {
    return a.Ne(a);
  }
  var b;
  b = WA[m(null == a ? null : a)];
  if (!b && (b = WA._, !b)) {
    throw r("PParameterised.params", a);
  }
  return b.call(null, a);
}
function XA(a, b, c, d, e) {
  if (a ? a.lh : a) {
    return a.lh(0, b, c, d, e);
  }
  var f;
  f = XA[m(null == a ? null : a)];
  if (!f && (f = XA._, !f)) {
    throw r("PRegion.region-step*", a);
  }
  return f.call(null, a, b, c, d, e);
}
function YA(a) {
  if (a ? a.jh : a) {
    return a.jh();
  }
  var b;
  b = YA[m(null == a ? null : a)];
  if (!b && (b = YA._, !b)) {
    throw r("PRegion.ff-cells-per-column", a);
  }
  return b.call(null, a);
}
function ZA(a) {
  if (a ? a.ih : a) {
    return a.ih();
  }
  var b;
  b = ZA[m(null == a ? null : a)];
  if (!b && (b = ZA._, !b)) {
    throw r("PRegion.ff-active-cells", a);
  }
  return b.call(null, a);
}
function $A(a) {
  if (a ? a.kh : a) {
    return a.kh();
  }
  var b;
  b = $A[m(null == a ? null : a)];
  if (!b && (b = $A._, !b)) {
    throw r("PRegion.ff-signal-cells", a);
  }
  return b.call(null, a);
}
var aB = function() {
  function a(a, b, e) {
    return XA(a, b, e, uk, !0);
  }
  var b = null, b = function(b, d, e, f, g) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, d, e);
      case 5:
        return XA(b, d, e, f, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.j = a;
  b.Q = function(a, b, e, f, g) {
    return XA(a, b, e, f, g);
  };
  return b;
}();
function bB(a, b, c) {
  if (a ? a.$g : a) {
    return a.$g(0, b, c);
  }
  var d;
  d = bB[m(null == a ? null : a)];
  if (!d && (d = bB._, !d)) {
    throw r("PColumnField.columns-step", a);
  }
  return d.call(null, a, b, c);
}
function cB(a, b, c, d) {
  if (a ? a.Zg : a) {
    return a.Zg(0, b, 0, d);
  }
  var e;
  e = cB[m(null == a ? null : a)];
  if (!e && (e = cB._, !e)) {
    throw r("PColumnField.columns-learn", a);
  }
  return e.call(null, a, b, c, d);
}
function dB(a) {
  if (a ? a.Oi : a) {
    return a.$a;
  }
  var b;
  b = dB[m(null == a ? null : a)];
  if (!b && (b = dB._, !b)) {
    throw r("PColumnField.inhibition-radius", a);
  }
  return b.call(null, a);
}
function eB(a) {
  if (a ? a.Li : a) {
    return a.Ua;
  }
  var b;
  b = eB[m(null == a ? null : a)];
  if (!b && (b = eB._, !b)) {
    throw r("PColumnField.column-excitation", a);
  }
  return b.call(null, a);
}
function fB(a) {
  if (a ? a.Mi : a) {
    return a.Ta;
  }
  var b;
  b = fB[m(null == a ? null : a)];
  if (!b && (b = fB._, !b)) {
    throw r("PColumnField.column-overlaps", a);
  }
  return b.call(null, a);
}
function gB(a) {
  if (a ? a.Ni : a) {
    return a.bb;
  }
  var b;
  b = gB[m(null == a ? null : a)];
  if (!b && (b = gB._, !b)) {
    throw r("PColumnField.column-signal-overlaps", a);
  }
  return b.call(null, a);
}
function hB(a, b, c, d) {
  if (a ? a.gh : a) {
    return a.gh(0, b, 0, d);
  }
  var e;
  e = hB[m(null == a ? null : a)];
  if (!e && (e = hB._, !e)) {
    throw r("PLayerOfCells.layer-step", a);
  }
  return e.call(null, a, b, c, d);
}
function iB(a, b, c) {
  if (a ? a.fh : a) {
    return a.fh(0, b, c);
  }
  var d;
  d = iB[m(null == a ? null : a)];
  if (!d && (d = iB._, !d)) {
    throw r("PLayerOfCells.layer-learn", a);
  }
  return d.call(null, a, b, c);
}
function jB(a, b) {
  if (a ? a.dh : a) {
    return a.dh();
  }
  var c;
  c = jB[m(null == a ? null : a)];
  if (!c && (c = jB._, !c)) {
    throw r("PLayerOfCells.layer-depolarise", a);
  }
  return c.call(null, a, b);
}
function kB(a) {
  if (a ? a.eh : a) {
    return a.eh();
  }
  var b;
  b = kB[m(null == a ? null : a)];
  if (!b && (b = kB._, !b)) {
    throw r("PLayerOfCells.layer-depth", a);
  }
  return b.call(null, a);
}
function lB(a) {
  if (a ? a.Qi : a) {
    return a.Ea;
  }
  var b;
  b = lB[m(null == a ? null : a)];
  if (!b && (b = lB._, !b)) {
    throw r("PLayerOfCells.bursting-columns", a);
  }
  return b.call(null, a);
}
function mB(a) {
  if (a ? a.Pi : a) {
    return a.Na;
  }
  var b;
  b = mB[m(null == a ? null : a)];
  if (!b && (b = mB._, !b)) {
    throw r("PLayerOfCells.active-columns", a);
  }
  return b.call(null, a);
}
function nB(a) {
  if (a ? a.bh : a) {
    return a.bh();
  }
  var b;
  b = nB[m(null == a ? null : a)];
  if (!b && (b = nB._, !b)) {
    throw r("PLayerOfCells.active-cells", a);
  }
  return b.call(null, a);
}
function oB(a) {
  if (a ? a.Ri : a) {
    return a.Pa;
  }
  var b;
  b = oB[m(null == a ? null : a)];
  if (!b && (b = oB._, !b)) {
    throw r("PLayerOfCells.learnable-cells", a);
  }
  return b.call(null, a);
}
function pB(a) {
  if (a ? a.hh : a) {
    return a.hh();
  }
  var b;
  b = pB[m(null == a ? null : a)];
  if (!b && (b = pB._, !b)) {
    throw r("PLayerOfCells.signal-cells", a);
  }
  return b.call(null, a);
}
function qB(a) {
  if (a ? a.Ui : a) {
    return a.Qa;
  }
  var b;
  b = qB[m(null == a ? null : a)];
  if (!b && (b = qB._, !b)) {
    throw r("PLayerOfCells.temporal-pooling-cells", a);
  }
  return b.call(null, a);
}
function rB(a) {
  if (a ? a.Si : a) {
    return a.Ha;
  }
  var b;
  b = rB[m(null == a ? null : a)];
  if (!b && (b = rB._, !b)) {
    throw r("PLayerOfCells.predictive-cells", a);
  }
  return b.call(null, a);
}
function sB(a) {
  if (a ? a.Ti : a) {
    return a.Ia;
  }
  var b;
  b = sB[m(null == a ? null : a)];
  if (!b && (b = sB._, !b)) {
    throw r("PLayerOfCells.prior-predictive-cells", a);
  }
  return b.call(null, a);
}
function tB(a, b) {
  if (a ? a.Wf : a) {
    return a.Wf(a, b);
  }
  var c;
  c = tB[m(null == a ? null : a)];
  if (!c && (c = tB._, !c)) {
    throw r("PSynapseGraph.in-synapses", a);
  }
  return c.call(null, a, b);
}
function uB(a, b) {
  if (a ? a.Yf : a) {
    return a.Yf(a, b);
  }
  var c;
  c = uB[m(null == a ? null : a)];
  if (!c && (c = uB._, !c)) {
    throw r("PSynapseGraph.sources-connected-to", a);
  }
  return c.call(null, a, b);
}
function vB(a, b) {
  if (a ? a.Zf : a) {
    return a.Zf(a, b);
  }
  var c;
  c = vB[m(null == a ? null : a)];
  if (!c && (c = vB._, !c)) {
    throw r("PSynapseGraph.targets-connected-from", a);
  }
  return c.call(null, a, b);
}
function wB(a, b, c, d, e, f) {
  if (a ? a.Xf : a) {
    return a.Xf(a, b, c, d, e, f);
  }
  var g;
  g = wB[m(null == a ? null : a)];
  if (!g && (g = wB._, !g)) {
    throw r("PSynapseGraph.reinforce-in-synapses", a);
  }
  return g.call(null, a, b, c, d, e, f);
}
function xB(a, b, c, d) {
  if (a ? a.Uf : a) {
    return a.Uf(a, b, c, d);
  }
  var e;
  e = xB[m(null == a ? null : a)];
  if (!e && (e = xB._, !e)) {
    throw r("PSynapseGraph.conj-synapses", a);
  }
  return e.call(null, a, b, c, d);
}
function yB(a, b, c) {
  if (a ? a.Vf : a) {
    return a.Vf(a, b, c);
  }
  var d;
  d = yB[m(null == a ? null : a)];
  if (!d && (d = yB._, !d)) {
    throw r("PSynapseGraph.disj-synapses", a);
  }
  return d.call(null, a, b, c);
}
function zB(a, b) {
  if (a ? a.mh : a) {
    return a.mh(0, b);
  }
  var c;
  c = zB[m(null == a ? null : a)];
  if (!c && (c = zB._, !c)) {
    throw r("PSegments.cell-segments", a);
  }
  return c.call(null, a, b);
}
function AB(a, b) {
  if (a ? a.Pf : a) {
    return a.Pf(a, b);
  }
  var c;
  c = AB[m(null == a ? null : a)];
  if (!c && (c = AB._, !c)) {
    throw r("PFeedForward.bits-value*", a);
  }
  return c.call(null, a, b);
}
function BB(a, b) {
  if (a ? a.Sf : a) {
    return a.Sf(a, b);
  }
  var c;
  c = BB[m(null == a ? null : a)];
  if (!c && (c = BB._, !c)) {
    throw r("PFeedForward.signal-bits-value*", a);
  }
  return c.call(null, a, b);
}
function CB(a, b) {
  if (a ? a.Rf : a) {
    return a.Rf(a, b);
  }
  var c;
  c = CB[m(null == a ? null : a)];
  if (!c && (c = CB._, !c)) {
    throw r("PFeedForward.motor-bits-value*", a);
  }
  return c.call(null, a, b);
}
function DB(a, b) {
  if (a ? a.Tf : a) {
    return a.Tf(a, b);
  }
  var c;
  c = DB[m(null == a ? null : a)];
  if (!c && (c = DB._, !c)) {
    throw r("PFeedForward.source-of-bit", a);
  }
  return c.call(null, a, b);
}
function EB(a, b) {
  if (a ? a.Qf : a) {
    return a.Qf(a, b);
  }
  var c;
  c = EB[m(null == a ? null : a)];
  if (!c && (c = EB._, !c)) {
    throw r("PFeedForward.feed-forward-step*", a);
  }
  return c.call(null, a, b);
}
function FB(a) {
  if (a ? a.Vi : a) {
    return a.Vi(a);
  }
  var b;
  b = FB[m(null == a ? null : a)];
  if (!b && (b = FB._, !b)) {
    throw r("PMotorTopological.motor-topology", a);
  }
  return b.call(null, a);
}
function GB(a) {
  return KA(FB(a));
}
function HB(a, b) {
  if (a ? a.ah : a) {
    return a.ah(0, b);
  }
  var c;
  c = HB[m(null == a ? null : a)];
  if (!c && (c = HB._, !c)) {
    throw r("PFeedForwardComposite.source-of-incoming-bit", a);
  }
  return c.call(null, a, b);
}
var IB = function() {
  function a(a) {
    return AB(a, 0);
  }
  var b = null, b = function(b, d) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      case 2:
        return AB(b, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.g = a;
  b.h = function(a, b) {
    return AB(a, b);
  };
  return b;
}(), JB = function() {
  function a(a) {
    return BB(a, 0);
  }
  var b = null, b = function(b, d) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      case 2:
        return BB(b, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.g = a;
  b.h = function(a, b) {
    return BB(a, b);
  };
  return b;
}(), KB = function() {
  function a(a) {
    return EB(a, !0);
  }
  var b = null, b = function(b, d) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      case 2:
        return EB(b, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.g = a;
  b.h = function(a, b) {
    return EB(a, b);
  };
  return b;
}();
function LB(a) {
  if (a ? a.Pe : a) {
    return a.Pe(a);
  }
  var b;
  b = LB[m(null == a ? null : a)];
  if (!b && (b = LB._, !b)) {
    throw r("PTemporal.timestep", a);
  }
  return b.call(null, a);
}
function MB(a) {
  if (a ? a.Oe : a) {
    return a.Oe(a);
  }
  var b;
  b = MB[m(null == a ? null : a)];
  if (!b && (b = MB._, !b)) {
    throw r("PResettable.reset", a);
  }
  return b.call(null, a);
}
function NB(a) {
  if (a ? a.Wi : a) {
    return a.value;
  }
  var b;
  b = NB[m(null == a ? null : a)];
  if (!b && (b = NB._, !b)) {
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
      h[f] = h[g = z & g + a[f % c] + (b = h[f])], h[g] = b;
    }
    (e.Kg = function(a) {
      for (var b, c = 0, f = e.R, g = e.Rg, h = e.fg;a--;) {
        b = h[f = z & f + 1], c = c * d + h[z & (h[f] = h[g = z & g + b]) + (h[g] = b)];
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
      b[z & e] = z & (d ^= 19 * b[z & e]) + c.charCodeAt(e++);
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
  var t = c.pow(d, e), w = c.pow(2, f), B = 2 * w, z = d - 1;
  c.seedrandom = function(a, f) {
    var z = [], I = l(h(f ? [a, s(b)] : 0 in arguments ? a : p(), 3), z), M = new g(z);
    l(s(M.fg), b);
    c.random = function() {
      for (var a = M.Kg(e), b = t, c = 0;a < w;) {
        a = (a + c) * d, b *= d, c = M.Kg(1);
      }
      for (;a >= B;) {
        a /= 2, b /= 2, c >>>= 1;
      }
      return(a + c) / b;
    };
    return I;
  };
  l(c.random(), b);
})(this, [], Math, 256, 6, 52);
function OB(a) {
  if (a ? a.qg : a) {
    return a.qg();
  }
  var b;
  b = OB[m(null == a ? null : a)];
  if (!b && (b = OB._, !b)) {
    throw r("IRandom.-next-double", a);
  }
  return b.call(null, a);
}
var PB = function() {
  function a(a, b) {
    if (a ? a.sg : a) {
      return a.sg(0, b);
    }
    var c;
    c = PB[m(null == a ? null : a)];
    if (!c && (c = PB._, !c)) {
      throw r("IRandom.-next-int", a);
    }
    return c.call(null, a, b);
  }
  function b(a) {
    if (a ? a.rg : a) {
      return a.rg();
    }
    var b;
    b = PB[m(null == a ? null : a)];
    if (!b && (b = PB._, !b)) {
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
function QB(a, b, c) {
  return b + (a.w ? a.w() : a.call(null)) * (c - b);
}
function RB(a, b, c, d) {
  this.seed = a;
  this.Vb = b;
  this.o = c;
  this.l = d;
  this.B = 2229667594;
  this.K = 8192;
  2 < arguments.length ? (this.o = c, this.l = d) : this.l = this.o = null;
}
k = RB.prototype;
k.N = function(a, b) {
  return rc.j(this, b, null);
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
  return Ok(b, function() {
    return function(a) {
      return Ok(b, Uk, "", " ", "", c, a);
    };
  }(this), "#cemerick.pprng.SeededRandom{", ", ", "}", c, Rg.h(new U(null, 2, 5, V, [new U(null, 2, 5, V, [Sq, this.seed], null), new U(null, 2, 5, V, [wr, this.Vb], null)], null), this.l));
};
k.L = function() {
  return this.o;
};
k.ma = function() {
  return new RB(this.seed, this.Vb, this.o, this.l, this.A);
};
k.Z = function() {
  return 2 + J(this.l);
};
k.S = function() {
  var a = this.A;
  return null != a ? a : this.A = a = ig(this);
};
k.J = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && Pi(this, b) : b) ? !0 : !1;
};
k.Ra = function(a, b) {
  return Df(new sk(null, new n(null, 2, [Sq, null, wr, null], null), null), b) ? bf.h(Me(Sh.h(aj, this), this.o), b) : new RB(this.seed, this.Vb, this.o, $g(bf.h(this.l, b)), null);
};
k.za = function(a, b, c) {
  return q(X.h ? X.h(Sq, b) : X.call(null, Sq, b)) ? new RB(c, this.Vb, this.o, this.l, null) : q(X.h ? X.h(wr, b) : X.call(null, wr, b)) ? new RB(this.seed, c, this.o, this.l, null) : new RB(this.seed, this.Vb, this.o, Q.j(this.l, b, c), null);
};
k.W = function() {
  return A(Rg.h(new U(null, 2, 5, V, [new U(null, 2, 5, V, [Sq, this.seed], null), new U(null, 2, 5, V, [wr, this.Vb], null)], null), this.l));
};
k.M = function(a, b) {
  return new RB(this.seed, this.Vb, b, this.l, this.A);
};
k.Y = function(a, b) {
  return nf(b) ? vc(this, v.h(b, 0), v.h(b, 1)) : Rb.j(dc, this, b);
};
k.qg = function() {
  return this.Vb.w ? this.Vb.w() : this.Vb.call(null);
};
k.rg = function() {
  return Zf(QB(this.Vb, -2147483648, 2147483647));
};
k.sg = function(a, b) {
  return Zf(QB(this.Vb, 0, b));
};
var SB = function() {
  function a(a, b) {
    return PB.h(a, b);
  }
  function b(a) {
    return PB.g(a);
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
var TB = function() {
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
}(), UB = function() {
  function a(a) {
    Math.seedrandom.g ? Math.seedrandom.g(a) : Math.seedrandom.call(null, a);
    Math.seedrandom.g ? Math.seedrandom.g(a) : Math.seedrandom.call(null, a);
    return new RB(a, Math.random);
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
}().w(), VB = function() {
  function a(a, b) {
    if (!(a < b)) {
      throw Error("Assert failed: " + u.g(oh.k(G([og(new ce(null, "\x3c", "\x3c", 993667236, null), new ce(null, "lower", "lower", -1534114948, null), new ce(null, "upper", "upper", 1886775433, null))], 0))));
    }
    return a + OB(UB) * (b - a);
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
function WB(a) {
  return 0 + SB.h(UB, a - 0);
}
function XB(a) {
  return O.h(a, WB(J(a)));
}
function YB(a) {
  a = Ch.j(og, Hh.g(function() {
    return OB(UB);
  }), a);
  return Ch.h(Oe, Jf.h(C, a));
}
function ZB(a, b) {
  return Rb.j(function(b, d) {
    return q(a.g ? a.g(d) : a.call(null, d)) ? b + 1 : b;
  }, 0, b);
}
var $B = function() {
  function a(a, b, c) {
    return Ug(Rb.j(function(a, b) {
      var c = O.j(b, 0, null), d = O.j(b, 1, null);
      return Wg.j(a, c, vd(d));
    }, td(aj), Ug(Rb.j(function(b, e) {
      var l = O.j(e, 0, null), p = O.j(e, 1, null), s = a.h ? a.h(l, p) : a.call(null, l, p), t = P.j(b, s, td(c));
      return Wg.j(b, s, Wg.j(t, l, p));
    }, td(aj), b))));
  }
  function b(a, b) {
    return c.j(a, b, aj);
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
function aC(a, b, c) {
  return Ib(A(b)) ? a : Ug(Rb.j(function(a, b) {
    return Wg.j(a, b, function() {
      var f = P.h(a, b);
      return c.g ? c.g(f) : c.call(null, f);
    }());
  }, td(a), b));
}
function bC(a, b) {
  return Sh.h(function() {
    var a = null == b ? null : bc(b);
    return q(a) ? a : aj;
  }(), Th.h(function(b) {
    var d = O.j(b, 0, null);
    b = O.j(b, 1, null);
    return new U(null, 2, 5, V, [d, a.g ? a.g(b) : a.call(null, b)], null);
  }, b));
}
function cC(a, b) {
  if (0 < a) {
    for (var c = A(b), d = Vj(function() {
      return function(a, c) {
        return be(new U(null, 2, 5, V, [b.g ? b.g(a) : b.call(null, a), a], null), new U(null, 2, 5, V, [b.g ? b.g(c) : b.call(null, c), c], null));
      };
    }(c)), e = -1;;) {
      if (hf(c)) {
        return Yi(d);
      }
      var f = C(c), g = O.j(f, 0, null), h = O.j(f, 1, null);
      hf(d) ? (c = F(c), d = Q.j(d, g, h), g = h) : J(d) < a ? (c = F(c), d = Q.j(d, g, h), g = function() {
        var a = e, b = h;
        return a < b ? a : b;
      }()) : h > e ? (g = Q.j(bf.h(d, C(Yi(d))), g, h), c = F(c), d = g, g = C(Zi(g))) : (c = F(c), g = e);
      e = g;
    }
  } else {
    return me;
  }
}
;function dC(a, b, c, d, e, f, g) {
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
k = dC.prototype;
k.N = function(a, b) {
  return rc.j(this, b, null);
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
  return Ok(b, function() {
    return function(a) {
      return Ok(b, Uk, "", " ", "", c, a);
    };
  }(this), "#org.nfrac.comportex.synapses.SynapseGraph{", ", ", "}", c, Rg.h(new U(null, 5, 5, V, [new U(null, 2, 5, V, [Kt, this.Ob], null), new U(null, 2, 5, V, [Ur, this.Pb], null), new U(null, 2, 5, V, [Qu, this.rb], null), new U(null, 2, 5, V, [jm, this.Ub], null), new U(null, 2, 5, V, [nv, this.$b], null)], null), this.l));
};
k.L = function() {
  return this.o;
};
k.ma = function() {
  return new dC(this.Ob, this.Pb, this.rb, this.Ub, this.$b, this.o, this.l, this.A);
};
k.Z = function() {
  return 5 + J(this.l);
};
k.S = function() {
  var a = this.A;
  return null != a ? a : this.A = a = ig(this);
};
k.J = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && Pi(this, b) : b) ? !0 : !1;
};
k.Ra = function(a, b) {
  return Df(new sk(null, new n(null, 5, [jm, null, Ur, null, Kt, null, Qu, null, nv, null], null), null), b) ? bf.h(Me(Sh.h(aj, this), this.o), b) : new dC(this.Ob, this.Pb, this.rb, this.Ub, this.$b, this.o, $g(bf.h(this.l, b)), null);
};
k.za = function(a, b, c) {
  return q(X.h ? X.h(Kt, b) : X.call(null, Kt, b)) ? new dC(c, this.Pb, this.rb, this.Ub, this.$b, this.o, this.l, null) : q(X.h ? X.h(Ur, b) : X.call(null, Ur, b)) ? new dC(this.Ob, c, this.rb, this.Ub, this.$b, this.o, this.l, null) : q(X.h ? X.h(Qu, b) : X.call(null, Qu, b)) ? new dC(this.Ob, this.Pb, c, this.Ub, this.$b, this.o, this.l, null) : q(X.h ? X.h(jm, b) : X.call(null, jm, b)) ? new dC(this.Ob, this.Pb, this.rb, c, this.$b, this.o, this.l, null) : q(X.h ? X.h(nv, b) : X.call(null, nv, 
  b)) ? new dC(this.Ob, this.Pb, this.rb, this.Ub, c, this.o, this.l, null) : new dC(this.Ob, this.Pb, this.rb, this.Ub, this.$b, this.o, Q.j(this.l, b, c), null);
};
k.W = function() {
  return A(Rg.h(new U(null, 5, 5, V, [new U(null, 2, 5, V, [Kt, this.Ob], null), new U(null, 2, 5, V, [Ur, this.Pb], null), new U(null, 2, 5, V, [Qu, this.rb], null), new U(null, 2, 5, V, [jm, this.Ub], null), new U(null, 2, 5, V, [nv, this.$b], null)], null), this.l));
};
k.M = function(a, b) {
  return new dC(this.Ob, this.Pb, this.rb, this.Ub, this.$b, b, this.l, this.A);
};
k.Y = function(a, b) {
  return nf(b) ? vc(this, v.h(b, 0), v.h(b, 1)) : Rb.j(dc, this, b);
};
k.Wf = function(a, b) {
  return this.Ob.g ? this.Ob.g(b) : this.Ob.call(null, b);
};
k.Yf = function(a, b) {
  var c = this;
  return ih.h(function() {
    return function(a) {
      var b = O.j(a, 0, null);
      return O.j(a, 1, null) >= c.rb ? b : null;
    };
  }(this), tB(this, b));
};
k.Zf = function(a, b) {
  return this.Pb.g ? this.Pb.g(b) : this.Pb.call(null, b);
};
k.Xf = function(a, b, c, d, e, f) {
  var g = this;
  a = tB(this, b);
  var h = $B.h(function() {
    return function(a, b) {
      return q(c.g ? c.g(a) : c.call(null, a)) ? xv : q(d.g ? d.g(a) : d.call(null, a)) ? 1 === b ? xv : b < g.rb && b >= g.rb - e ? wv : Uq : 0 >= b ? q(g.$b) ? $m : xv : b >= g.rb && b < g.rb + f ? dr : fm;
    };
  }(a, this), a), l = pk.k(G([xv.g(h), bC(function() {
    return function(a) {
      a += e;
      return 1 > a ? a : 1;
    };
  }(a, h, this), Uq.g(h)), bC(function() {
    return function(a) {
      a += e;
      return 1 > a ? a : 1;
    };
  }(a, h, this), wv.g(h)), bC(function() {
    return function(a) {
      a -= f;
      return 0 < a ? a : 0;
    };
  }(a, h, this), fm.g(h)), bC(function() {
    return function(a) {
      return a - f;
    };
  }(a, h, this), dr.g(h))], 0));
  return Yh.Q(Yh.Q(Xh(this, new U(null, 2, 5, V, [Kt, b], null), l), new U(null, 1, 5, V, [Ur], null), aC, Yi(wv.g(h)), function() {
    return function(a) {
      return Ze.h(a, b);
    };
  }(a, h, l, this)), new U(null, 1, 5, V, [Ur], null), aC, Yi(dr.g(h)), function() {
    return function(a) {
      return gf.h(a, b);
    };
  }(a, h, l, this));
};
k.Uf = function(a, b, c, d) {
  var e = tB(this, b), f = Bk(c, Gh.g(d));
  a = pk.k(G([e, f], 0));
  var g = Xh(this, new U(null, 2, 5, V, [Kt, b], null), a);
  c = d >= this.rb ? Yh.Q(g, new U(null, 1, 5, V, [Ur], null), aC, c, function() {
    return function(a) {
      return Ze.h(a, b);
    };
  }(g, e, f, a, this)) : g;
  return J(a) > this.Ub ? yB(c, b, Dh.h(J(a) - this.Ub, Yi(Jf.h(kg, a)))) : c;
};
k.Vf = function(a, b, c) {
  return Yh.Q(Yh.j(this, new U(null, 2, 5, V, [Kt, b], null), function() {
    return function(a) {
      return R.j(bf, a, c);
    };
  }(this)), new U(null, 1, 5, V, [Ur], null), aC, c, function() {
    return function(a) {
      return gf.h(a, b);
    };
  }(this));
};
function eC(a) {
  return new dC(Kt.g(a), Ur.g(a), Qu.g(a), jm.g(a), nv.g(a), null, bf.k(a, Kt, G([Ur, Qu, jm, nv], 0)));
}
function fC(a, b, c, d, e) {
  b = Kf(function(a, b, d) {
    d = ih.h(function(a) {
      var b = O.j(a, 0, null);
      return O.j(a, 1, null) >= c ? b : null;
    }, d);
    return aC(a, d, function() {
      return function(a) {
        return Ze.h(a, b);
      };
    }(d));
  }, ri(Gh.h(b, uk)), a);
  return eC(new n(null, 5, [Kt, a, Ur, b, Qu, c, jm, d, nv, e], null));
}
function gC(a, b) {
  return Ug(Rb.j(function(b, d) {
    return Rb.j(function(a, b) {
      return Wg.j(a, b, P.j(a, b, 0) + 1);
    }, b, vB(a, d));
  }, td(aj), b));
}
function hC(a, b) {
  var c = O.j(b, 0, null), d = O.j(b, 1, null);
  return c * a + d;
}
function iC(a, b) {
  return new U(null, 2, 5, V, [$f(b, a), ag(b, a)], null);
}
function jC(a, b, c) {
  var d = O.j(c, 0, null), e = O.j(c, 1, null);
  c = O.j(c, 2, null);
  return d * a * b + e * b + c;
}
function kC(a, b, c) {
  var d = $f(c, a * b);
  a = ag(c, a * b);
  return new U(null, 3, 5, V, [d, $f(a, b), ag(a, b)], null);
}
function lC(a, b, c, d, e, f, g, h, l) {
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
k = lC.prototype;
k.N = function(a, b) {
  return rc.j(this, b, null);
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
  return Ok(b, function() {
    return function(a) {
      return Ok(b, Uk, "", " ", "", c, a);
    };
  }(this), "#org.nfrac.comportex.synapses.SynapseGraphBySegments{", ", ", "}", c, Rg.h(new U(null, 7, 5, V, [new U(null, 2, 5, V, [Bv, this.zb], null), new U(null, 2, 5, V, [Qt, this.depth], null), new U(null, 2, 5, V, [zm, this.Kb], null), new U(null, 2, 5, V, [Xm, this.eb], null), new U(null, 2, 5, V, [Hn, this.yb], null), new U(null, 2, 5, V, [Ju, this.ua], null), new U(null, 2, 5, V, [Pr, this.Jb], null)], null), this.l));
};
k.L = function() {
  return this.o;
};
k.ma = function() {
  return new lC(this.zb, this.depth, this.Kb, this.eb, this.yb, this.ua, this.Jb, this.o, this.l, this.A);
};
k.Z = function() {
  return 7 + J(this.l);
};
k.mh = function(a, b) {
  var c = O.j(b, 0, null), d = O.j(b, 1, null);
  return Th.h(function(a, b, c, d) {
    return function(a) {
      return tB(d, new U(null, 3, 5, V, [b, c, a], null));
    };
  }(b, c, d, this), Fk.g(this.Kb));
};
k.S = function() {
  var a = this.A;
  return null != a ? a : this.A = a = ig(this);
};
k.J = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && Pi(this, b) : b) ? !0 : !1;
};
k.Ra = function(a, b) {
  return Df(new sk(null, new n(null, 7, [zm, null, Xm, null, Hn, null, Pr, null, Qt, null, Ju, null, Bv, null], null), null), b) ? bf.h(Me(Sh.h(aj, this), this.o), b) : new lC(this.zb, this.depth, this.Kb, this.eb, this.yb, this.ua, this.Jb, this.o, $g(bf.h(this.l, b)), null);
};
k.za = function(a, b, c) {
  return q(X.h ? X.h(Bv, b) : X.call(null, Bv, b)) ? new lC(c, this.depth, this.Kb, this.eb, this.yb, this.ua, this.Jb, this.o, this.l, null) : q(X.h ? X.h(Qt, b) : X.call(null, Qt, b)) ? new lC(this.zb, c, this.Kb, this.eb, this.yb, this.ua, this.Jb, this.o, this.l, null) : q(X.h ? X.h(zm, b) : X.call(null, zm, b)) ? new lC(this.zb, this.depth, c, this.eb, this.yb, this.ua, this.Jb, this.o, this.l, null) : q(X.h ? X.h(Xm, b) : X.call(null, Xm, b)) ? new lC(this.zb, this.depth, this.Kb, c, this.yb, 
  this.ua, this.Jb, this.o, this.l, null) : q(X.h ? X.h(Hn, b) : X.call(null, Hn, b)) ? new lC(this.zb, this.depth, this.Kb, this.eb, c, this.ua, this.Jb, this.o, this.l, null) : q(X.h ? X.h(Ju, b) : X.call(null, Ju, b)) ? new lC(this.zb, this.depth, this.Kb, this.eb, this.yb, c, this.Jb, this.o, this.l, null) : q(X.h ? X.h(Pr, b) : X.call(null, Pr, b)) ? new lC(this.zb, this.depth, this.Kb, this.eb, this.yb, this.ua, c, this.o, this.l, null) : new lC(this.zb, this.depth, this.Kb, this.eb, this.yb, 
  this.ua, this.Jb, this.o, Q.j(this.l, b, c), null);
};
k.W = function() {
  return A(Rg.h(new U(null, 7, 5, V, [new U(null, 2, 5, V, [Bv, this.zb], null), new U(null, 2, 5, V, [Qt, this.depth], null), new U(null, 2, 5, V, [zm, this.Kb], null), new U(null, 2, 5, V, [Xm, this.eb], null), new U(null, 2, 5, V, [Hn, this.yb], null), new U(null, 2, 5, V, [Ju, this.ua], null), new U(null, 2, 5, V, [Pr, this.Jb], null)], null), this.l));
};
k.M = function(a, b) {
  return new lC(this.zb, this.depth, this.Kb, this.eb, this.yb, this.ua, this.Jb, b, this.l, this.A);
};
k.Y = function(a, b) {
  return nf(b) ? vc(this, v.h(b, 0), v.h(b, 1)) : Rb.j(dc, this, b);
};
k.Wf = function(a, b) {
  var c = tB(this.zb, this.ua.g ? this.ua.g(b) : this.ua.call(null, b));
  return Bk(Ch.h(this.yb, Yi(c)), Zi(c));
};
k.Yf = function(a, b) {
  return Ch.h(this.eb, uB(this.zb, this.ua.g ? this.ua.g(b) : this.ua.call(null, b)));
};
k.Zf = function(a, b) {
  return Ch.h(this.Jb, vB(this.zb, this.eb.g ? this.eb.g(b) : this.eb.call(null, b)));
};
k.Xf = function(a, b, c, d, e, f) {
  return Yh.k(this, new U(null, 1, 5, V, [Bv], null), wB, this.ua.g ? this.ua.g(b) : this.ua.call(null, b), fh.h(c, this.yb), fh.h(d, this.yb), G([e, f], 0));
};
k.Uf = function(a, b, c, d) {
  return Yh.Wa(this, new U(null, 1, 5, V, [Bv], null), xB, this.ua.g ? this.ua.g(b) : this.ua.call(null, b), Ch.h(this.eb, c), d);
};
k.Vf = function(a, b, c) {
  return Yh.Q(this, new U(null, 1, 5, V, [Bv], null), yB, this.ua.g ? this.ua.g(b) : this.ua.call(null, b), Ch.h(this.eb, c));
};
function mC(a) {
  return R.h(Rf, a) - R.h(Sf, a);
}
function nC(a, b, c) {
  var d = uB(a, c), e = Ch.h(gh.h(LA, b), d);
  if (A(e)) {
    if ("number" === typeof C(e)) {
      return mC(e);
    }
    var f = J(KA(b));
    return R.h(Rf, function() {
      return function(a, b, c) {
        return function s(d) {
          return new sg(null, function(a, b, c) {
            return function() {
              for (;;) {
                var e = A(d);
                if (e) {
                  var f = e;
                  if (S(f)) {
                    var g = x(f), h = J(g), l = wg(h);
                    return function() {
                      for (var d = 0;;) {
                        if (d < h) {
                          var s = v.h(g, d);
                          Lg(l, mC(Ch.h(function(a, b) {
                            return function(a) {
                              return O.h(a, b);
                            };
                          }(d, s, g, h, l, f, e, a, b, c), c)));
                          d += 1;
                        } else {
                          return!0;
                        }
                      }
                    }() ? zg(Mg(l), s(y(f))) : zg(Mg(l), null);
                  }
                  var T = C(f);
                  return Ke(mC(Ch.h(function(a) {
                    return function(b) {
                      return O.h(b, a);
                    };
                  }(T, f, e, a, b, c), c)), s(E(f)));
                }
                return null;
              }
            };
          }(a, b, c), null, null);
        };
      }(f, d, e)(Fk.g(f));
    }());
  }
  return 0;
}
function oC(a, b, c) {
  var d = R.h(Rf, KA(b)), e = R.h(Rf, KA(c));
  a = Ch.h(gh.j(nC, a, c), Fk.g(QA(b)));
  a = R.h(Nf, a) / J(a);
  d = $f(a / e * d, 2);
  d = TB.g(.7 * d);
  return 1 < d ? d : 1;
}
function pC(a, b, c) {
  b = TB.g(b * c);
  return cC(1 > b ? 1 : b, a);
}
function qC(a, b) {
  return Th.h(b, Fk.g(a));
}
function rC(a) {
  return Ug(Kf(function(a, c, d) {
    return q(d) ? Wg.j(a, c, d) : a;
  }, td(aj), a));
}
function sC(a, b, c, d, e) {
  for (var f = Yi(a), g = Tg(qC(QA(b), a));;) {
    if (a = C(f), q(a)) {
      var h = a;
      a = function() {
        var a = h;
        return g.g ? g.g(a) : g.call(null, a);
      }();
      if (q(a)) {
        var l = a, f = F(f);
        a = function() {
          for (var a = LA(b, h), f = SA.v(b, a, c, 0), t = g;;) {
            var w = C(f);
            if (q(w)) {
              var B = w, w = MA(b, B), z;
              z = w;
              z = t.g ? t.g(z) : t.call(null, z);
              if (q(z)) {
                if (B = OA(b, a, B) - d, B = (0 < B ? B : 0) / e, l >= z + B) {
                  f = F(f), t = Wg.j(t, w, null);
                } else {
                  if (l <= z - B) {
                    return Wg.j(t, h, null);
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
      return rC(vd(g));
    }
  }
}
;function tC(a) {
  return 0 > a ? -a : a;
}
function uC(a, b, c) {
  this.size = a;
  this.o = b;
  this.l = c;
  this.B = 2229667594;
  this.K = 8192;
  1 < arguments.length ? (this.o = b, this.l = c) : this.l = this.o = null;
}
k = uC.prototype;
k.N = function(a, b) {
  return rc.j(this, b, null);
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
  return Ok(b, function() {
    return function(a) {
      return Ok(b, Uk, "", " ", "", c, a);
    };
  }(this), "#org.nfrac.comportex.topology.OneDTopology{", ", ", "}", c, Rg.h(new U(null, 1, 5, V, [new U(null, 2, 5, V, [Xq, this.size], null)], null), this.l));
};
k.L = function() {
  return this.o;
};
k.ma = function() {
  return new uC(this.size, this.o, this.l, this.A);
};
k.Z = function() {
  return 1 + J(this.l);
};
k.S = function() {
  var a = this.A;
  return null != a ? a : this.A = a = ig(this);
};
k.J = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && Pi(this, b) : b) ? !0 : !1;
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
  return Rg.h(Fk.h(function() {
    var a = b + d + 1, c = e.size;
    return a < c ? a : c;
  }(), function() {
    var a = b + c + 1, d = e.size;
    return a < d ? a : d;
  }()), Fk.h(function() {
    var a = b - c;
    return 0 < a ? a : 0;
  }(), function() {
    var a = b - d;
    return 0 < a ? a : 0;
  }()));
};
k.$f = function(a, b, c) {
  return tC(c - b);
};
k.Ra = function(a, b) {
  return Df(new sk(null, new n(null, 1, [Xq, null], null), null), b) ? bf.h(Me(Sh.h(aj, this), this.o), b) : new uC(this.size, this.o, $g(bf.h(this.l, b)), null);
};
k.za = function(a, b, c) {
  return q(X.h ? X.h(Xq, b) : X.call(null, Xq, b)) ? new uC(c, this.o, this.l, null) : new uC(this.size, this.o, Q.j(this.l, b, c), null);
};
k.W = function() {
  return A(Rg.h(new U(null, 1, 5, V, [new U(null, 2, 5, V, [Xq, this.size], null)], null), this.l));
};
k.M = function(a, b) {
  return new uC(this.size, b, this.l, this.A);
};
k.Y = function(a, b) {
  return nf(b) ? vc(this, v.h(b, 0), v.h(b, 1)) : Rb.j(dc, this, b);
};
function vC(a, b, c, d) {
  this.width = a;
  this.height = b;
  this.o = c;
  this.l = d;
  this.B = 2229667594;
  this.K = 8192;
  2 < arguments.length ? (this.o = c, this.l = d) : this.l = this.o = null;
}
k = vC.prototype;
k.N = function(a, b) {
  return rc.j(this, b, null);
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
  return Ok(b, function() {
    return function(a) {
      return Ok(b, Uk, "", " ", "", c, a);
    };
  }(this), "#org.nfrac.comportex.topology.TwoDTopology{", ", ", "}", c, Rg.h(new U(null, 2, 5, V, [new U(null, 2, 5, V, [jo, this.width], null), new U(null, 2, 5, V, [sv, this.height], null)], null), this.l));
};
k.L = function() {
  return this.o;
};
k.ma = function() {
  return new vC(this.width, this.height, this.o, this.l, this.A);
};
k.Z = function() {
  return 2 + J(this.l);
};
k.S = function() {
  var a = this.A;
  return null != a ? a : this.A = a = ig(this);
};
k.J = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && Pi(this, b) : b) ? !0 : !1;
};
k.bg = function() {
  return new U(null, 2, 5, V, [this.width, this.height], null);
};
k.ag = function(a, b) {
  return new U(null, 2, 5, V, [$f(b, this.height), ag(b, this.height)], null);
};
k.cg = function(a, b) {
  var c = O.j(b, 0, null), d = O.j(b, 1, null);
  return c * this.height + d;
};
k.dg = function(a, b, c, d) {
  var e = this, f = O.j(b, 0, null);
  a = O.j(b, 1, null);
  return function(a, b, f, p) {
    return function t(w) {
      return new sg(null, function(a, b, f, g) {
        return function() {
          for (var h = w;;) {
            var l = A(h);
            if (l) {
              var p = l, T = C(p);
              if (l = A(function(a, b, c, e, f, g, h, l) {
                return function Ca(p) {
                  return new sg(null, function(a, b, c, e, f, g, h) {
                    return function() {
                      for (var a = p;;) {
                        if (a = A(a)) {
                          if (S(a)) {
                            var c = x(a), e = J(c), f = wg(e);
                            a: {
                              for (var l = 0;;) {
                                if (l < e) {
                                  var t = v.h(c, l);
                                  (tC(b - g) > d || tC(t - h) > d) && f.add(new U(null, 2, 5, V, [b, t], null));
                                  l += 1;
                                } else {
                                  c = !0;
                                  break a;
                                }
                              }
                              c = void 0;
                            }
                            return c ? zg(Mg(f), Ca(y(a))) : zg(Mg(f), null);
                          }
                          f = C(a);
                          if (tC(b - g) > d || tC(f - h) > d) {
                            return Ke(new U(null, 2, 5, V, [b, f], null), Ca(E(a)));
                          }
                          a = E(a);
                        } else {
                          return null;
                        }
                      }
                    };
                  }(a, b, c, e, f, g, h, l), null, null);
                };
              }(h, T, p, l, a, b, f, g)(Fk.h(function() {
                var a = f - c;
                return 0 < a ? a : 0;
              }(), function() {
                var a = f + c + 1, b = e.height;
                return a < b ? a : b;
              }())))) {
                return Rg.h(l, t(E(h)));
              }
              h = E(h);
            } else {
              return null;
            }
          }
        };
      }(a, b, f, p), null, null);
    };
  }(b, f, a, this)(Fk.h(function() {
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
  return tC(d - a) + tC(c - b);
};
k.Ra = function(a, b) {
  return Df(new sk(null, new n(null, 2, [jo, null, sv, null], null), null), b) ? bf.h(Me(Sh.h(aj, this), this.o), b) : new vC(this.width, this.height, this.o, $g(bf.h(this.l, b)), null);
};
k.za = function(a, b, c) {
  return q(X.h ? X.h(jo, b) : X.call(null, jo, b)) ? new vC(c, this.height, this.o, this.l, null) : q(X.h ? X.h(sv, b) : X.call(null, sv, b)) ? new vC(this.width, c, this.o, this.l, null) : new vC(this.width, this.height, this.o, Q.j(this.l, b, c), null);
};
k.W = function() {
  return A(Rg.h(new U(null, 2, 5, V, [new U(null, 2, 5, V, [jo, this.width], null), new U(null, 2, 5, V, [sv, this.height], null)], null), this.l));
};
k.M = function(a, b) {
  return new vC(this.width, this.height, b, this.l, this.A);
};
k.Y = function(a, b) {
  return nf(b) ? vc(this, v.h(b, 0), v.h(b, 1)) : Rb.j(dc, this, b);
};
var xC = function wC(b, c, d) {
  return wC(b, c, d);
};
function yC(a) {
  var b = O.j(a, 0, null), c = O.j(a, 1, null), d = O.j(a, 2, null), e = O.j(a, 3, null);
  switch(J(a)) {
    case 0:
      return new uC(0);
    case 1:
      return new uC(b);
    case 2:
      return new vC(b, c);
    case 3:
      return xC(b, c, d);
    case 4:
      return xC(b, c, d * e);
    default:
      throw Error("No matching clause: " + u.g(J(a)));;
  }
}
var zC = function() {
  function a(a, b) {
    for (;;) {
      var c = J(a), g = J(b), h = a, l = O.j(h, 0, null), p = O.j(h, 1, null), h = O.j(h, 2, null), s = b, t = O.j(s, 0, null), w = O.j(s, 1, null), s = O.j(s, 2, null);
      if (g > c) {
        l = a, a = b, b = l;
      } else {
        var B;
        B = (B = 0 === g) ? B : bh(fg, b);
        if (q(B)) {
          return a;
        }
        if (1 === c && 1 === g) {
          return new U(null, 1, 5, V, [l + t], null);
        }
        if (2 === c && 2 === g && p === w) {
          return new U(null, 2, 5, V, [l + t, p], null);
        }
        if (2 === c && 2 === g) {
          b = new U(null, 1, 5, V, [t * w], null);
        } else {
          if (2 === c && 1 === g && 0 === ag(t, p)) {
            return new U(null, 2, 5, V, [l + $f(t, p), p], null);
          }
          if (2 === c && 1 === g) {
            return new U(null, 1, 5, V, [l * p + t], null);
          }
          if (3 === c && 3 === g && h === s && p === w) {
            return new U(null, 3, 5, V, [l + t, p, h], null);
          }
          if (3 === c && 3 === g) {
            b = new U(null, 2, 5, V, [t, w * s], null);
          } else {
            if (3 === c && 2 === g && p === t && h === w) {
              return new U(null, 3, 5, V, [l + 1, p, h], null);
            }
            if (3 === c && 2 === g) {
              c = b, a = new U(null, 2, 5, V, [l, p * h], null), b = c;
            } else {
              if (3 === c && 1 === g && 0 === ag(t, h)) {
                return new U(null, 3, 5, V, [l, p + $f(t, h), h], null);
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
      return Rb.j(b, b.h(a, d), e);
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
var AC = af([Xl, Yl, dm, nn, mo, xq, pr, Dr, Fr, Nr, Bt, Ht, mu, Ou, $u, vv], [.001, .2, .16, .001, new U(null, 1, 5, V, [2048], null), .3, !1, 3, .3, .05, .005, new U(null, 1, 5, V, [Ut], null), 15, 1E3, 1E3, 3]);
function BC(a, b, c) {
  var d = Yl.g(c), e = Nr.g(c), f = function() {
    var a = d + 1 * e;
    return 1 > a ? a : 1;
  }(), g = function() {
    var a = d - 2 * e;
    return 0 < a ? a : 0;
  }(), h = Zf(Fr.g(c) * R.h(Rf, KA(b)));
  c = xq.g(c);
  var l = QA(b), p = QA(a), s = 1 === J(KA(a)) || 1 === J(KA(b)), t = KA(a), w = O.j(t, 0, null), B = O.j(t, 1, null), z = KA(b), D = O.j(z, 0, null), K = O.j(z, 1, null);
  return Th.h(function(c, d, e, f, g, h, s, l, p, t, w, z, B, D, K) {
    return function(ma) {
      var ya = p ? TB.g(ma / l * s) : function() {
        var c = LA(a, ma), d = O.j(c, 0, null), c = O.j(c, 1, null);
        return MA(b, new U(null, 2, 5, V, [TB.g(d / w * D), TB.g(c / z * K)], null));
      }(), Ja = ri(TA.j(b, ya, g)), sa = TB.g(h * J(Ja)), Na = .5 > h ? Hh.h(sa, function(a, b) {
        return function() {
          return XB(b);
        };
      }(ya, Ja, sa, c, d, e, f, g, h, s, l, p, t, w, z, B, D, K)) : Dh.h(sa, YB(Ja)), ya = Hh.h(sa, function(a, b, c, d, e, f, g, h) {
        return function() {
          return VB.h(h, g);
        };
      }(ya, Ja, sa, Na, c, d, e, f, g, h, s, l, p, t, w, z, B, D, K));
      return Bk(Na, ya);
    };
  }(d, e, f, g, h, c, l, p, s, t, w, B, z, D, K), Fk.g(p));
}
function CC(a, b, c) {
  c = vv.g(c);
  return Ug(Kf(function(a) {
    return function(c, f, g) {
      if (g < a) {
        return c;
      }
      var h = P.h(b, f);
      return Wg.j(c, f, g * h);
    };
  }(c), td(aj), a));
}
function DC(a, b, c, d) {
  var e = It.g(a), f = sr.g(a), g = Nr.g(f), h = Bt.g(f), l = dm.g(f), p = pr.g(f), s = mu.g(f), t = $u.g(f), w = Zf(Fr.g(f) * R.h(Rf, KA(e))), B = RA(a);
  return Yh.j(a, new U(null, 1, 5, V, [Pq], null), function(a, e, f, g, h, s, l, p, t, w) {
    return function(B) {
      return Rb.j(function(a, b, e, f, g, h, s, l, p, t) {
        return function(b, l) {
          var w = d.g ? d.g(l) : d.call(null, l), z, w = s - w;
          z = 0 > w ? 0 : w;
          w = wB(b, l, eh(!1), c, e, f);
          if (q(q(h) ? 0 < z : h)) {
            var N = QA(a), N = TB.g(l / t * N), N = LA(a, N);
            a: {
              for (var I = tB(w, l), B = me, D = YB(c);;) {
                if (hf(D) || J(B) >= z) {
                  z = B;
                  break a;
                }
                var M = C(c), K;
                K = M;
                K = I.g ? I.g(K) : I.call(null, K);
                q(K) || (K = LA(a, M), OA(a, K, N) < p && (B = Ze.h(B, M)));
                D = F(D);
              }
              z = void 0;
            }
            w = xB(w, l, z, g);
          }
          return w;
        };
      }(a, e, f, g, h, s, l, p, t, w), B, b);
    };
  }(e, f, g, h, l, p, s, t, w, B));
}
function EC(a, b) {
  var c = sr.g(a), d = Xl.g(c), e = nn.g(c), f = Dr.g(c), c = Nr.g(c), g = Jq.g(a), h = so.g(a), l = xm.g(a), p = TA.j(JA(a), b, l), l = R.j(Rf, 1, Zi(qk(g, p))), p = R.j(Rf, 1, Zi(qk(h, p))), d = d * l, l = e * p, e = P.h(g, b), h = P.h(h, b), f = f - h / l * (f - 1), f = 1 < f ? f : 1;
  return e < d ? Yh.k(a, new U(null, 1, 5, V, [Pq], null), wB, b, eh(!1), eh(!0), G([c, 0], 0)) : Xh(a, new U(null, 2, 5, V, [gm, b], null), f);
}
function FC(a, b, c) {
  var d = 1 / c;
  c = d * (c - 1);
  return aC(Th.h(function(a, b) {
    return function(a) {
      return a * b;
    };
  }(d, c), a), b, function(a) {
    return function(b) {
      return b + a;
    };
  }(d, c));
}
function GC(a) {
  return Q.j(a, xm, oC(Pq.g(a), zv.g(a), It.g(a)));
}
function HC(a, b, c, d, e, f, g, h, l, p, s, t, w) {
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
  this.l = w;
  this.B = 2229667594;
  this.K = 8192;
  11 < arguments.length ? (this.o = t, this.l = w) : this.l = this.o = null;
}
k = HC.prototype;
k.N = function(a, b) {
  return rc.j(this, b, null);
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
  return zv.g(this);
};
k.U = function(a, b, c) {
  return Ok(b, function() {
    return function(a) {
      return Ok(b, Uk, "", " ", "", c, a);
    };
  }(this), "#org.nfrac.comportex.columns.ColumnField{", ", ", "}", c, Rg.h(new U(null, 11, 5, V, [new U(null, 2, 5, V, [sr, this.T], null), new U(null, 2, 5, V, [Pq, this.Ya], null), new U(null, 2, 5, V, [zv, this.fa], null), new U(null, 2, 5, V, [It, this.lb], null), new U(null, 2, 5, V, [es, this.Ta], null), new U(null, 2, 5, V, [bo, this.bb], null), new U(null, 2, 5, V, [Xu, this.Ua], null), new U(null, 2, 5, V, [xm, this.$a], null), new U(null, 2, 5, V, [gm, this.gb], null), new U(null, 2, 5, 
  V, [so, this.jb], null), new U(null, 2, 5, V, [Jq, this.qb], null)], null), this.l));
};
k.L = function() {
  return this.o;
};
k.ma = function() {
  return new HC(this.T, this.Ya, this.fa, this.lb, this.Ta, this.bb, this.Ua, this.$a, this.gb, this.jb, this.qb, this.o, this.l, this.A);
};
k.Z = function() {
  return 11 + J(this.l);
};
k.S = function() {
  var a = this.A;
  return null != a ? a : this.A = a = ig(this);
};
k.J = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && Pi(this, b) : b) ? !0 : !1;
};
k.Ne = function() {
  return this.T;
};
k.$g = function(a, b, c) {
  a = gC(this.Ya, b);
  b = CC(a, this.gb, this.T);
  c = gC(this.Ya, c);
  return Q.k(this, go, go.h(this, 0) + 1, G([Xu, b, es, a, bo, c], 0));
};
k.Zg = function(a, b, c, d) {
  c = Ou.g(this.T);
  a = 0 === (go.g(this) % c + c) % c;
  b = DC(this, d, b, this.Ta);
  b = Yh.Q(b, new U(null, 1, 5, V, [Jq], null), FC, Yi(this.Ua), c);
  d = Yh.Q(b, new U(null, 1, 5, V, [so], null), FC, d, c);
  d = a ? Rb.j(EC, d, Fk.g(RA(d))) : d;
  return a ? GC(d) : d;
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
  return go.h(this, 0);
};
k.Ra = function(a, b) {
  return Df(new sk(null, new n(null, 11, [gm, null, xm, null, bo, null, so, null, Jq, null, Pq, null, sr, null, es, null, It, null, Xu, null, zv, null], null), null), b) ? bf.h(Me(Sh.h(aj, this), this.o), b) : new HC(this.T, this.Ya, this.fa, this.lb, this.Ta, this.bb, this.Ua, this.$a, this.gb, this.jb, this.qb, this.o, $g(bf.h(this.l, b)), null);
};
k.za = function(a, b, c) {
  return q(X.h ? X.h(sr, b) : X.call(null, sr, b)) ? new HC(c, this.Ya, this.fa, this.lb, this.Ta, this.bb, this.Ua, this.$a, this.gb, this.jb, this.qb, this.o, this.l, null) : q(X.h ? X.h(Pq, b) : X.call(null, Pq, b)) ? new HC(this.T, c, this.fa, this.lb, this.Ta, this.bb, this.Ua, this.$a, this.gb, this.jb, this.qb, this.o, this.l, null) : q(X.h ? X.h(zv, b) : X.call(null, zv, b)) ? new HC(this.T, this.Ya, c, this.lb, this.Ta, this.bb, this.Ua, this.$a, this.gb, this.jb, this.qb, this.o, this.l, 
  null) : q(X.h ? X.h(It, b) : X.call(null, It, b)) ? new HC(this.T, this.Ya, this.fa, c, this.Ta, this.bb, this.Ua, this.$a, this.gb, this.jb, this.qb, this.o, this.l, null) : q(X.h ? X.h(es, b) : X.call(null, es, b)) ? new HC(this.T, this.Ya, this.fa, this.lb, c, this.bb, this.Ua, this.$a, this.gb, this.jb, this.qb, this.o, this.l, null) : q(X.h ? X.h(bo, b) : X.call(null, bo, b)) ? new HC(this.T, this.Ya, this.fa, this.lb, this.Ta, c, this.Ua, this.$a, this.gb, this.jb, this.qb, this.o, this.l, 
  null) : q(X.h ? X.h(Xu, b) : X.call(null, Xu, b)) ? new HC(this.T, this.Ya, this.fa, this.lb, this.Ta, this.bb, c, this.$a, this.gb, this.jb, this.qb, this.o, this.l, null) : q(X.h ? X.h(xm, b) : X.call(null, xm, b)) ? new HC(this.T, this.Ya, this.fa, this.lb, this.Ta, this.bb, this.Ua, c, this.gb, this.jb, this.qb, this.o, this.l, null) : q(X.h ? X.h(gm, b) : X.call(null, gm, b)) ? new HC(this.T, this.Ya, this.fa, this.lb, this.Ta, this.bb, this.Ua, this.$a, c, this.jb, this.qb, this.o, this.l, 
  null) : q(X.h ? X.h(so, b) : X.call(null, so, b)) ? new HC(this.T, this.Ya, this.fa, this.lb, this.Ta, this.bb, this.Ua, this.$a, this.gb, c, this.qb, this.o, this.l, null) : q(X.h ? X.h(Jq, b) : X.call(null, Jq, b)) ? new HC(this.T, this.Ya, this.fa, this.lb, this.Ta, this.bb, this.Ua, this.$a, this.gb, this.jb, c, this.o, this.l, null) : new HC(this.T, this.Ya, this.fa, this.lb, this.Ta, this.bb, this.Ua, this.$a, this.gb, this.jb, this.qb, this.o, Q.j(this.l, b, c), null);
};
k.W = function() {
  return A(Rg.h(new U(null, 11, 5, V, [new U(null, 2, 5, V, [sr, this.T], null), new U(null, 2, 5, V, [Pq, this.Ya], null), new U(null, 2, 5, V, [zv, this.fa], null), new U(null, 2, 5, V, [It, this.lb], null), new U(null, 2, 5, V, [es, this.Ta], null), new U(null, 2, 5, V, [bo, this.bb], null), new U(null, 2, 5, V, [Xu, this.Ua], null), new U(null, 2, 5, V, [xm, this.$a], null), new U(null, 2, 5, V, [gm, this.gb], null), new U(null, 2, 5, V, [so, this.jb], null), new U(null, 2, 5, V, [Jq, this.qb], 
  null)], null), this.l));
};
k.M = function(a, b) {
  return new HC(this.T, this.Ya, this.fa, this.lb, this.Ta, this.bb, this.Ua, this.$a, this.gb, this.jb, this.qb, b, this.l, this.A);
};
k.Y = function(a, b) {
  return nf(b) ? vc(this, v.h(b, 0), v.h(b, 1)) : Rb.j(dc, this, b);
};
function IC() {
  function a() {
    return cg(16).toString(16);
  }
  return new Ll((new db(a(), a(), a(), a(), a(), a(), a(), a(), "-", a(), a(), a(), a(), "-4", a(), a(), a(), "-", (8 | 3 & cg(15)).toString(16), a(), a(), a(), "-", a(), a(), a(), a(), a(), a(), a(), a(), a(), a(), a(), a())).toString());
}
;function JC(a, b) {
  var c = R.j(Ck, a, b);
  return Ke(c, Ph.h(function(a) {
    return function(b) {
      return a === b;
    };
  }(c), b));
}
var KC = function() {
  function a(a, b) {
    return J(a) < J(b) ? Rb.j(Ze, b, a) : Rb.j(Ze, a, b);
  }
  var b = null, c = function() {
    function a(c, d, h) {
      var l = null;
      2 < arguments.length && (l = G(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      a = JC(J, Ze.k(d, c, G([a], 0)));
      return Rb.j(Sh, C(a), E(a));
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
        return uk;
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
    return uk;
  };
  b.g = function(a) {
    return a;
  };
  b.h = a;
  b.k = c.k;
  return b;
}(), LC = function() {
  function a(a, b) {
    for (;;) {
      if (J(b) < J(a)) {
        var c = a;
        a = b;
        b = c;
      } else {
        return Rb.j(function(a, b) {
          return function(a, c) {
            return Df(b, c) ? a : gf.h(a, c);
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
      a = JC(function(a) {
        return-J(a);
      }, Ze.k(e, d, G([a], 0)));
      return Rb.j(b, C(a), E(a));
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
}(), MC = function() {
  function a(a, b) {
    return J(a) < J(b) ? Rb.j(function(a, c) {
      return Df(b, c) ? gf.h(a, c) : a;
    }, a, a) : Rb.j(gf, a, b);
  }
  var b = null, c = function() {
    function a(b, d, h) {
      var l = null;
      2 < arguments.length && (l = G(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      return Rb.j(b, a, Ze.h(e, d));
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
var NC = af([km, Fm, Sm, Ym, Jn, Nn, Wn, mo, Bq, Fq, Tq, Kr, ds, xs, Qt, St, Hu, fv, uv], [!0, 15, 5, .01, .2, 8, 12, new U(null, 1, 5, V, [2048], null), .05, 22, !1, 2, .02, !1, 16, 4, 2, !1, .16]);
function OC(a, b, c) {
  return ZB(function(a) {
    var e = O.j(a, 0, null);
    return(a = O.j(a, 1, null) >= c) ? b.g ? b.g(e) : b.call(null, e) : a;
  }, a);
}
function PC(a, b, c, d) {
  return Bh.h(function(a, f) {
    var g = OC(f, b, d);
    return g >= c ? new n(null, 2, [nr, g, Mm, a], null) : null;
  }, a);
}
function QC(a, b) {
  return Ug(Kf(function(a, d, e) {
    if (e < b) {
      return a;
    }
    var f = null == d ? null : Nc(d);
    return Wg.j(a, f, function() {
      var b = P.j(a, f, 0) + 1;
      return e > b ? e : b;
    }());
  }, td(aj), a));
}
function RC(a, b, c, d) {
  return Ug(Kf(function(a, d, g) {
    g *= c;
    var h = Zi(b.g ? b.g(d) : b.call(null, d));
    return q(h) ? (h = R.h(Rf, h), Wg.j(a, d, h + g)) : Wg.j(a, d, g);
  }, td(aj), q(d) ? pk.k(G([Bk(Yi(b), Gh.g(0)), a], 0)) : a));
}
function SC(a, b, c, d, e) {
  var f = $B.h(function(a) {
    var b = O.j(a, 0, null);
    O.j(a, 1, null);
    return b;
  }, b);
  a = RC(a, f, Hu.g(e), fv.g(e));
  b = ds.g(e);
  c = q(xs.g(e)) ? pC(a, b, QA(c)) : Yi(sC(a, c, d, St.g(e), Kr.g(e)));
  e = Qt.g(e);
  d = td(aj);
  for (a = td(uk);;) {
    if (b = C(c), q(b)) {
      var g = b;
      b = function() {
        var a = g;
        return f.g ? f.g(a) : f.call(null, a);
      }();
      if (q(b)) {
        var h = R.j(Ck, kg, b);
        b = O.j(h, 0, null);
        O.j(h, 1, null);
        c = F(c);
        d = Wg.j(d, g, new U(null, 1, 5, V, [b], null));
      } else {
        c = F(c), d = Wg.j(d, g, Ch.j(Ci, Gh.g(g), Fk.g(e))), a = Vg.h(a, g);
      }
    } else {
      return new n(null, 2, [Rr, vd(d), tm, vd(a)], null);
    }
  }
}
function TC(a, b, c) {
  a = PC(a, b, 0, c);
  return A(a) ? R.j(Ck, nr, a) : new n(null, 2, [Mm, null, nr, 0], null);
}
function UC(a, b, c, d) {
  if (hf(c)) {
    return new n(null, 1, [Ot, C(b)], null);
  }
  var e = Ch.h(function(b) {
    var d = zB(a, b);
    return Q.j(TC(d, c, 0), Ot, b);
  }, b), e = R.j(Ck, nr, e);
  return nr.g(e) >= Nn.g(d) ? e : new n(null, 1, [Ot, XB(b)], null);
}
function VC(a, b, c, d) {
  var e = Sm.g(d), f = Fq.g(d), g = Nn.g(d);
  d = Jn.g(d);
  a = zB(a, new U(null, 2, 5, V, [b, c], null));
  return J(a) >= e ? R.j(Dk, function(a, b, c, d, e) {
    return function(f) {
      var g = O.h(e, f);
      return ZB(function(a, b, c, d, e) {
        return function(a) {
          return a >= e;
        };
      }(g, a, b, c, d, e), Zi(g)) * b + J(g) + f / J(e);
    };
  }(e, f, g, d, a), Fk.g(J(a))) : J(a);
}
function WC(a, b, c, d) {
  a = Sh.h(vk([b]), Ch.h(C, Yi(a)));
  return Dh.h(d, YB(Ph.h(function(a) {
    return function(b) {
      var c = O.j(b, 0, null);
      O.j(b, 1, null);
      return a.g ? a.g(c) : a.call(null, c);
    };
  }(a), c)));
}
function XC(a, b, c, d, e, f) {
  return Kf(function(a, b, l) {
    var p = O.j(b, 0, null);
    b = O.j(b, 1, null);
    var s = c.g ? c.g(p) : c.call(null, p), t = Bq.g(f), w = Ym.g(f);
    q(l) ? (a = wB(a, new U(null, 3, 5, V, [p, b, l], null), eh(!1), d, t, w), q(s) && (p = new U(null, 3, 5, V, [p, b, l], null), b = C(p), l = tB(a, p), s = OC(l, d, 0), s = Fm.g(f) - s, 0 < s && (b = WC(l, b, e, s), a = xB(a, p, b, uv.g(f))))) : (l = Fm.g(f), s = Nn.g(f), t = VC(a, p, b, f), l = WC(aj, p, e, l), J(l) < s || (p = new U(null, 3, 5, V, [p, b, t], null), b = tB(a, p), a = A(b) ? yB(a, p, Yi(b)) : a, a = xB(a, p, l, uv.g(f))));
    return a;
  }, a, b);
}
function YC(a, b, c, d, e, f, g) {
  var h = zB(a, new U(null, 2, 5, V, [b, c], null));
  e = PC(h, d, e, f);
  return Rb.j(function() {
    return function(a, e) {
      var f = Mm.g(e);
      return wB(a, new U(null, 3, 5, V, [b, c, f], null), d, eh(!1), 0, g);
    };
  }(h, e), a, e);
}
function ZC(a, b, c, d, e, f) {
  var g = Wn.g(f), h = Jn.g(f);
  f = Ym.g(f);
  b = MC.k(e, b, G([d], 0));
  return Rb.j(function(a, b, d) {
    return function(e, f) {
      var g = O.j(f, 0, null), h = O.j(f, 1, null);
      return YC(e, g, h, c, a, b, d);
    };
  }(g, h, f, b), a, b);
}
function $C(a, b, c, d, e) {
  var f = Jn.g(e);
  a = A(a);
  for (var g = td(uk), h = td(aj);;) {
    var l = C(a);
    if (q(l)) {
      var p = O.j(l, 0, null), l = O.j(l, 1, null), p = b.g ? b.g(p) : b.call(null, p);
      if (q(p)) {
        p = UC(c, l, d, e), l = Ot.g(p);
      } else {
        var l = C(l), s = zB(c, l), p = TC(s, d, f), p = q(Mm.g(p)) ? p : TC(s, d, 0)
      }
      a = F(a);
      g = Vg.h(g, l);
      h = Wg.j(h, l, Mm.g(p));
    } else {
      return new n(null, 2, [Nq, vd(g), Ol, vd(h)], null);
    }
  }
}
function aD(a, b, c, d, e, f) {
  c = Oh.h(function(c) {
    return bh(b, vB(a, c));
  }, MC.h(c, d));
  if (hf(c)) {
    return aj;
  }
  c = gC(a, c);
  c = QC(c, Wn.g(f));
  var g = yk(Ch.h(C, Yi(c))), g = Bk(g, Gh.g(1));
  e = SC(g, c, e, 5, f);
  c = Bf(e) ? R.h(kh, e) : e;
  e = P.h(c, Rr);
  c = P.h(c, tm);
  return Q.j($C(e, c, a, d, f), Zq, yk(Yi(e)));
}
function bD(a, b, c, d, e, f, g, h, l, p, s, t, w, B, z) {
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
  this.fb = w;
  this.o = B;
  this.l = z;
  this.B = 2229667594;
  this.K = 8192;
  13 < arguments.length ? (this.o = B, this.l = z) : this.l = this.o = null;
}
k = bD.prototype;
k.N = function(a, b) {
  return rc.j(this, b, null);
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
  return zv.g(this);
};
k.U = function(a, b, c) {
  return Ok(b, function() {
    return function(a) {
      return Ok(b, Uk, "", " ", "", c, a);
    };
  }(this), "#org.nfrac.comportex.cells.LayerOfCells{", ", ", "}", c, Rg.h(new U(null, 13, 5, V, [new U(null, 2, 5, V, [sr, this.T], null), new U(null, 2, 5, V, [zv, this.fa], null), new U(null, 2, 5, V, [rs, this.Ga], null), new U(null, 2, 5, V, [Br, this.Na], null), new U(null, 2, 5, V, [tm, this.Ea], null), new U(null, 2, 5, V, [Tr, this.Ja], null), new U(null, 2, 5, V, [Nq, this.Pa], null), new U(null, 2, 5, V, [Ao, this.cb], null), new U(null, 2, 5, V, [Or, this.Qa], null), new U(null, 2, 5, 
  V, [Qm, this.Ha], null), new U(null, 2, 5, V, [au, this.Ia], null), new U(null, 2, 5, V, [Nu, this.Sa], null), new U(null, 2, 5, V, [vm, this.fb], null)], null), this.l));
};
k.L = function() {
  return this.o;
};
k.ma = function() {
  return new bD(this.T, this.fa, this.Ga, this.Na, this.Ea, this.Ja, this.Pa, this.cb, this.Qa, this.Ha, this.Ia, this.Sa, this.fb, this.o, this.l, this.A);
};
k.Z = function() {
  return 13 + J(this.l);
};
k.dh = function() {
  var a = gC(this.Ga, this.Ja), a = QC(a, Wn.g(this.T)), b = yk(Yi(a));
  return Q.k(this, Qm, b, G([au, this.Ha, Nu, a], 0));
};
k.gh = function(a, b, c, d) {
  a = SC(b, this.Sa, this.fa, d, this.T);
  b = Bf(a) ? R.h(kh, a) : a;
  a = P.h(b, Rr);
  b = P.h(b, tm);
  c = yk(Yi(a));
  d = yk(R.h(Rg, Zi(a)));
  var e = yk(R.h(Rg, Zi(R.j(bf, a, b))));
  return Q.k(this, Rr, a, G([Br, c, tm, b, Tr, d, Ao, e, Or, uk], 0));
};
k.Ui = function() {
  return this.Qa;
};
k.Qi = function() {
  return this.Ea;
};
k.fh = function(a, b, c) {
  a = Rr.g(this);
  a = $C(a, this.Ea, this.Ga, b, this.T);
  var d = Bf(a) ? R.h(kh, a) : a;
  a = P.h(d, Nq);
  var d = P.h(d, Ol), e = q(Tq.g(this.T)) ? aD(this.Ga, this.Ja, this.Ia, b, this.fa, this.T) : null, f = Bf(e) ? R.h(kh, e) : e, g = P.h(f, Zq), e = P.h(f, Nq), f = P.h(f, Ol), h = XC(this.Ga, d, this.Ea, b, c, this.T), h = q(km.g(this.T)) ? ZC(h, this.Ja, b, this.Ha, this.Ia, this.T) : h, l = Tq.g(this.T);
  b = q(q(l) ? f : l) ? XC(h, f, g, b, c, this.T) : h;
  return Q.k(this, uo, e, G([vt, f, Nq, a, In, d, rs, b], 0));
};
k.eh = function() {
  return Qt.g(this.T);
};
k.hh = function() {
  return Ao.g(this);
};
k.Pi = function() {
  return this.Na;
};
k.Ti = function() {
  return this.Ia;
};
k.bh = function() {
  return Tr.g(this);
};
k.Ri = function() {
  return this.Pa;
};
k.Si = function() {
  return this.Ha;
};
k.S = function() {
  var a = this.A;
  return null != a ? a : this.A = a = ig(this);
};
k.J = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && Pi(this, b) : b) ? !0 : !1;
};
k.Ne = function() {
  return this.T;
};
k.Ra = function(a, b) {
  return Df(new sk(null, new n(null, 13, [tm, null, vm, null, Qm, null, Ao, null, Nq, null, sr, null, Br, null, Or, null, Tr, null, rs, null, au, null, Nu, null, zv, null], null), null), b) ? bf.h(Me(Sh.h(aj, this), this.o), b) : new bD(this.T, this.fa, this.Ga, this.Na, this.Ea, this.Ja, this.Pa, this.cb, this.Qa, this.Ha, this.Ia, this.Sa, this.fb, this.o, $g(bf.h(this.l, b)), null);
};
k.za = function(a, b, c) {
  return q(X.h ? X.h(sr, b) : X.call(null, sr, b)) ? new bD(c, this.fa, this.Ga, this.Na, this.Ea, this.Ja, this.Pa, this.cb, this.Qa, this.Ha, this.Ia, this.Sa, this.fb, this.o, this.l, null) : q(X.h ? X.h(zv, b) : X.call(null, zv, b)) ? new bD(this.T, c, this.Ga, this.Na, this.Ea, this.Ja, this.Pa, this.cb, this.Qa, this.Ha, this.Ia, this.Sa, this.fb, this.o, this.l, null) : q(X.h ? X.h(rs, b) : X.call(null, rs, b)) ? new bD(this.T, this.fa, c, this.Na, this.Ea, this.Ja, this.Pa, this.cb, this.Qa, 
  this.Ha, this.Ia, this.Sa, this.fb, this.o, this.l, null) : q(X.h ? X.h(Br, b) : X.call(null, Br, b)) ? new bD(this.T, this.fa, this.Ga, c, this.Ea, this.Ja, this.Pa, this.cb, this.Qa, this.Ha, this.Ia, this.Sa, this.fb, this.o, this.l, null) : q(X.h ? X.h(tm, b) : X.call(null, tm, b)) ? new bD(this.T, this.fa, this.Ga, this.Na, c, this.Ja, this.Pa, this.cb, this.Qa, this.Ha, this.Ia, this.Sa, this.fb, this.o, this.l, null) : q(X.h ? X.h(Tr, b) : X.call(null, Tr, b)) ? new bD(this.T, this.fa, this.Ga, 
  this.Na, this.Ea, c, this.Pa, this.cb, this.Qa, this.Ha, this.Ia, this.Sa, this.fb, this.o, this.l, null) : q(X.h ? X.h(Nq, b) : X.call(null, Nq, b)) ? new bD(this.T, this.fa, this.Ga, this.Na, this.Ea, this.Ja, c, this.cb, this.Qa, this.Ha, this.Ia, this.Sa, this.fb, this.o, this.l, null) : q(X.h ? X.h(Ao, b) : X.call(null, Ao, b)) ? new bD(this.T, this.fa, this.Ga, this.Na, this.Ea, this.Ja, this.Pa, c, this.Qa, this.Ha, this.Ia, this.Sa, this.fb, this.o, this.l, null) : q(X.h ? X.h(Or, b) : 
  X.call(null, Or, b)) ? new bD(this.T, this.fa, this.Ga, this.Na, this.Ea, this.Ja, this.Pa, this.cb, c, this.Ha, this.Ia, this.Sa, this.fb, this.o, this.l, null) : q(X.h ? X.h(Qm, b) : X.call(null, Qm, b)) ? new bD(this.T, this.fa, this.Ga, this.Na, this.Ea, this.Ja, this.Pa, this.cb, this.Qa, c, this.Ia, this.Sa, this.fb, this.o, this.l, null) : q(X.h ? X.h(au, b) : X.call(null, au, b)) ? new bD(this.T, this.fa, this.Ga, this.Na, this.Ea, this.Ja, this.Pa, this.cb, this.Qa, this.Ha, c, this.Sa, 
  this.fb, this.o, this.l, null) : q(X.h ? X.h(Nu, b) : X.call(null, Nu, b)) ? new bD(this.T, this.fa, this.Ga, this.Na, this.Ea, this.Ja, this.Pa, this.cb, this.Qa, this.Ha, this.Ia, c, this.fb, this.o, this.l, null) : q(X.h ? X.h(vm, b) : X.call(null, vm, b)) ? new bD(this.T, this.fa, this.Ga, this.Na, this.Ea, this.Ja, this.Pa, this.cb, this.Qa, this.Ha, this.Ia, this.Sa, c, this.o, this.l, null) : new bD(this.T, this.fa, this.Ga, this.Na, this.Ea, this.Ja, this.Pa, this.cb, this.Qa, this.Ha, 
  this.Ia, this.Sa, this.fb, this.o, Q.j(this.l, b, c), null);
};
k.W = function() {
  return A(Rg.h(new U(null, 13, 5, V, [new U(null, 2, 5, V, [sr, this.T], null), new U(null, 2, 5, V, [zv, this.fa], null), new U(null, 2, 5, V, [rs, this.Ga], null), new U(null, 2, 5, V, [Br, this.Na], null), new U(null, 2, 5, V, [tm, this.Ea], null), new U(null, 2, 5, V, [Tr, this.Ja], null), new U(null, 2, 5, V, [Nq, this.Pa], null), new U(null, 2, 5, V, [Ao, this.cb], null), new U(null, 2, 5, V, [Or, this.Qa], null), new U(null, 2, 5, V, [Qm, this.Ha], null), new U(null, 2, 5, V, [au, this.Ia], 
  null), new U(null, 2, 5, V, [Nu, this.Sa], null), new U(null, 2, 5, V, [vm, this.fb], null)], null), this.l));
};
k.M = function(a, b) {
  return new bD(this.T, this.fa, this.Ga, this.Na, this.Ea, this.Ja, this.Pa, this.cb, this.Qa, this.Ha, this.Ia, this.Sa, this.fb, b, this.l, this.A);
};
k.Y = function(a, b) {
  return nf(b) ? vc(this, v.h(b, 0), v.h(b, 1)) : Rb.j(dc, this, b);
};
FB.object = function() {
  return yC(new U(null, 1, 5, V, [0], null));
};
function cD(a, b, c, d, e, f) {
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
k = cD.prototype;
k.Oe = function() {
  var a = this;
  return Q.j(function() {
    var b = WA(a);
    return dD.g ? dD.g(b) : dD.call(null, b);
  }(), nu, this.Va);
};
k.N = function(a, b) {
  return rc.j(this, b, null);
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
  return JA(this.Rb);
};
k.U = function(a, b, c) {
  return Ok(b, function() {
    return function(a) {
      return Ok(b, Uk, "", " ", "", c, a);
    };
  }(this), "#org.nfrac.comportex.core.SensoryRegion{", ", ", "}", c, Rg.h(new U(null, 4, 5, V, [new U(null, 2, 5, V, [bv, this.Rb], null), new U(null, 2, 5, V, [Pu, this.nb], null), new U(null, 2, 5, V, [nu, this.Va], null), new U(null, 2, 5, V, [ut, this.jc], null)], null), this.l));
};
k.L = function() {
  return this.o;
};
k.ma = function() {
  return new cD(this.Rb, this.nb, this.Va, this.jc, this.o, this.l, this.A);
};
k.Z = function() {
  return 4 + J(this.l);
};
k.S = function() {
  var a = this.A;
  return null != a ? a : this.A = a = ig(this);
};
k.J = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && Pi(this, b) : b) ? !0 : !1;
};
k.Ne = function() {
  return pk.k(G([WA(this.Rb), WA(this.nb)], 0));
};
k.Pe = function() {
  return this.jc;
};
k.Ra = function(a, b) {
  return Df(new sk(null, new n(null, 4, [ut, null, nu, null, Pu, null, bv, null], null), null), b) ? bf.h(Me(Sh.h(aj, this), this.o), b) : new cD(this.Rb, this.nb, this.Va, this.jc, this.o, $g(bf.h(this.l, b)), null);
};
k.za = function(a, b, c) {
  return q(X.h ? X.h(bv, b) : X.call(null, bv, b)) ? new cD(c, this.nb, this.Va, this.jc, this.o, this.l, null) : q(X.h ? X.h(Pu, b) : X.call(null, Pu, b)) ? new cD(this.Rb, c, this.Va, this.jc, this.o, this.l, null) : q(X.h ? X.h(nu, b) : X.call(null, nu, b)) ? new cD(this.Rb, this.nb, c, this.jc, this.o, this.l, null) : q(X.h ? X.h(ut, b) : X.call(null, ut, b)) ? new cD(this.Rb, this.nb, this.Va, c, this.o, this.l, null) : new cD(this.Rb, this.nb, this.Va, this.jc, this.o, Q.j(this.l, b, c), null);
};
k.W = function() {
  return A(Rg.h(new U(null, 4, 5, V, [new U(null, 2, 5, V, [bv, this.Rb], null), new U(null, 2, 5, V, [Pu, this.nb], null), new U(null, 2, 5, V, [nu, this.Va], null), new U(null, 2, 5, V, [ut, this.jc], null)], null), this.l));
};
k.M = function(a, b) {
  return new cD(this.Rb, this.nb, this.Va, this.jc, b, this.l, this.A);
};
k.lh = function(a, b, c, d, e) {
  var f = nB(this.nb), g = oB(this.nb);
  a = bB(this.Rb, b, c);
  var h = hB(this.nb, eB(a), gB(a), dB(a)), f = q(e) ? iB(h, f, g) : h;
  d = jB(f, d);
  b = q(e) ? cB(a, b, c, mB(d)) : a;
  return Q.k(this, bv, b, G([Pu, d, ut, this.jc + 1], 0));
};
k.jh = function() {
  return kB(this.nb);
};
k.ih = function() {
  return nB(this.nb);
};
k.kh = function() {
  return pB(this.nb);
};
k.Y = function(a, b) {
  return nf(b) ? vc(this, v.h(b, 0), v.h(b, 1)) : Rb.j(dc, this, b);
};
function dD(a) {
  var b = pk.k(G([AC, a], 0)), c = Ht.g(b), d = mo.g(b), c = yC(c), d = yC(d), e = QA(c), f = QA(d), g = BC(d, c, b), b = af([gm, xm, bo, so, Jq, Pq, sr, es, It, Xu, zv], [ri(Gh.h(f, 1)), 1, aj, ri(Gh.h(f, 0)), ri(Gh.h(f, 0)), fC(g, e, Yl.g(b), $u.g(b), pr.g(b)), b, aj, c, aj, d]), b = new HC(sr.g(b), Pq.g(b), zv.g(b), It.g(b), es.g(b), bo.g(b), Xu.g(b), xm.g(b), gm.g(b), so.g(b), Jq.g(b), null, bf.k(b, sr, G([Pq, zv, It, es, bo, Xu, xm, gm, so, Jq], 0))), b = GC(b);
  a = pk.k(G([NC, a], 0));
  var c = mo.g(a), c = yC(c), f = QA(c), e = Qt.g(a), d = Sm.g(a), g = Fq.g(a), h = Jn.g(a), l = f * e, f = eC(new n(null, 5, [Kt, ri(Gh.h(f * e * d, aj)), Ur, ri(Gh.h(l, uk)), Qu, h, jm, g, nv, !0], null)), g = gh.j(jC, e, d), h = gh.j(kC, e, d), l = gh.h(hC, e), e = gh.h(iC, e), d = new n(null, 6, [Bv, f, zm, d, Ju, g, Pr, h, Xm, l, Hn, e], null), d = new lC(Bv.g(d), Qt.g(d), zm.g(d), Xm.g(d), Hn.g(d), Ju.g(d), Pr.g(d), null, bf.k(d, Bv, G([Qt, zm, Xm, Hn, Ju, Pr], 0)));
  a = af([tm, Qm, Ao, Nq, sr, Br, Or, Tr, rs, au, Nu, zv], [uk, uk, uk, uk, a, uk, uk, uk, d, uk, aj, c]);
  a = new bD(sr.g(a), zv.g(a), rs.g(a), Br.g(a), tm.g(a), Tr.g(a), Nq.g(a), Ao.g(a), Or.g(a), Qm.g(a), au.g(a), Nu.g(a), vm.g(a), null, bf.k(a, sr, G([zv, rs, Br, tm, Tr, Nq, Ao, Or, Qm, au, Nu, vm], 0)));
  b = new n(null, 4, [bv, b, Pu, a, nu, IC(), ut, 0], null);
  return new cD(bv.g(b), Pu.g(b), nu.g(b), ut.g(b), null, bf.k(b, bv, G([Pu, nu, ut], 0)));
}
function eD(a, b, c, d, e, f) {
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
k = eD.prototype;
k.Oe = function() {
  return Q.j(this, Vn, this.rc);
};
k.N = function(a, b) {
  return rc.j(this, b, null);
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
  return JA(this.ac);
};
k.Wi = function() {
  return this.value;
};
k.U = function(a, b, c) {
  return Ok(b, function() {
    return function(a) {
      return Ok(b, Uk, "", " ", "", c, a);
    };
  }(this), "#org.nfrac.comportex.core.SensoryInput{", ", ", "}", c, Rg.h(new U(null, 4, 5, V, [new U(null, 2, 5, V, [os, this.rc], null), new U(null, 2, 5, V, [Vn, this.value], null), new U(null, 2, 5, V, [Cm, this.transform], null), new U(null, 2, 5, V, [Tm, this.ac], null)], null), this.l));
};
k.L = function() {
  return this.o;
};
k.ma = function() {
  return new eD(this.rc, this.value, this.transform, this.ac, this.o, this.l, this.A);
};
k.Z = function() {
  return 4 + J(this.l);
};
k.S = function() {
  var a = this.A;
  return null != a ? a : this.A = a = ig(this);
};
k.J = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && Pi(this, b) : b) ? !0 : !1;
};
k.Pf = function(a, b) {
  return UA(this.ac, b, this.value);
};
k.Sf = function() {
  return uk;
};
k.Rf = function() {
  return uk;
};
k.Tf = function(a, b) {
  return new U(null, 1, 5, V, [b], null);
};
k.Qf = function() {
  var a = this;
  return Q.j(this, Vn, function() {
    var b = a.value;
    return a.transform.g ? a.transform.g(b) : a.transform.call(null, b);
  }());
};
k.Ra = function(a, b) {
  return Df(new sk(null, new n(null, 4, [Cm, null, Tm, null, Vn, null, os, null], null), null), b) ? bf.h(Me(Sh.h(aj, this), this.o), b) : new eD(this.rc, this.value, this.transform, this.ac, this.o, $g(bf.h(this.l, b)), null);
};
k.za = function(a, b, c) {
  return q(X.h ? X.h(os, b) : X.call(null, os, b)) ? new eD(c, this.value, this.transform, this.ac, this.o, this.l, null) : q(X.h ? X.h(Vn, b) : X.call(null, Vn, b)) ? new eD(this.rc, c, this.transform, this.ac, this.o, this.l, null) : q(X.h ? X.h(Cm, b) : X.call(null, Cm, b)) ? new eD(this.rc, this.value, c, this.ac, this.o, this.l, null) : q(X.h ? X.h(Tm, b) : X.call(null, Tm, b)) ? new eD(this.rc, this.value, this.transform, c, this.o, this.l, null) : new eD(this.rc, this.value, this.transform, 
  this.ac, this.o, Q.j(this.l, b, c), null);
};
k.W = function() {
  return A(Rg.h(new U(null, 4, 5, V, [new U(null, 2, 5, V, [os, this.rc], null), new U(null, 2, 5, V, [Vn, this.value], null), new U(null, 2, 5, V, [Cm, this.transform], null), new U(null, 2, 5, V, [Tm, this.ac], null)], null), this.l));
};
k.M = function(a, b) {
  return new eD(this.rc, this.value, this.transform, this.ac, b, this.l, this.A);
};
k.Y = function(a, b) {
  return nf(b) ? vc(this, v.h(b, 0), v.h(b, 1)) : Rb.j(dc, this, b);
};
function fD(a, b, c) {
  return new eD(a, a, b, c);
}
function gD(a, b) {
  var c = Ch.h(RA, a), c = Sg.h(0, Hk.h(Nf, c));
  return R.h(KC, Ch.j(b, a, c));
}
function hD(a) {
  var b = Ch.h(fh.h(QA, FB), a), b = Sg.h(0, Hk.h(Nf, b));
  return R.h(KC, Ch.j(CB, a, b));
}
function iD(a, b, c) {
  var d = O.j(c, 0, null);
  c = O.j(c, 1, null);
  return a + b * d + c;
}
function jD(a, b) {
  return gD(Wt.g(a), b);
}
function kD(a, b, c, d) {
  this.sb = a;
  this.zc = b;
  this.o = c;
  this.l = d;
  this.B = 2229667594;
  this.K = 8192;
  2 < arguments.length ? (this.o = c, this.l = d) : this.l = this.o = null;
}
k = kD.prototype;
k.Oe = function() {
  return Yh.j(Yh.j(this, new U(null, 1, 5, V, [Wt], null), function() {
    return function(a) {
      return Ch.h(MB, a);
    };
  }(this)), new U(null, 1, 5, V, [fr], null), MB);
};
k.N = function(a, b) {
  return rc.j(this, b, null);
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
  return yC(Ze.h(PA(this.sb), YA(this.sb)));
};
k.U = function(a, b, c) {
  return Ok(b, function() {
    return function(a) {
      return Ok(b, Uk, "", " ", "", c, a);
    };
  }(this), "#org.nfrac.comportex.core.RegionTree{", ", ", "}", c, Rg.h(new U(null, 2, 5, V, [new U(null, 2, 5, V, [fr, this.sb], null), new U(null, 2, 5, V, [Wt, this.zc], null)], null), this.l));
};
k.L = function() {
  return this.o;
};
k.ma = function() {
  return new kD(this.sb, this.zc, this.o, this.l, this.A);
};
k.Z = function() {
  return 2 + J(this.l);
};
k.S = function() {
  var a = this.A;
  return null != a ? a : this.A = a = ig(this);
};
k.J = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && Pi(this, b) : b) ? !0 : !1;
};
k.ah = function(a, b) {
  for (var c = 0, d = 0;;) {
    if (c < J(this.zc)) {
      var e = O.h(this.zc, c), f = RA(e);
      if (d <= b && b <= d + f + -1) {
        return new U(null, 2, 5, V, [c, DB(e, b - d)], null);
      }
      c += 1;
      d += Yf(f);
    } else {
      return null;
    }
  }
};
k.Pf = function(a, b) {
  var c = YA(this.sb);
  return Sh.h(uk, Th.h(gh.j(iD, b, c), ZA(this.sb)));
};
k.Sf = function(a, b) {
  var c = YA(this.sb);
  return Sh.h(uk, Th.h(gh.j(iD, b, c), $A(this.sb)));
};
k.Rf = function() {
  return uk;
};
k.Tf = function(a, b) {
  var c = YA(this.sb);
  return new U(null, 2, 5, V, [$f(b, c), ag(b, c)], null);
};
k.Qf = function(a, b) {
  var c = Ch.h(function() {
    return function(a) {
      return KB.h(a, b);
    };
  }(this), this.zc), d = aB.Q(this.sb, gD(c, IB), gD(c, JB), hD(c), b);
  return Q.k(this, fr, d, G([Wt, c], 0));
};
k.Pe = function() {
  return LB(this.sb);
};
k.Ra = function(a, b) {
  return Df(new sk(null, new n(null, 2, [fr, null, Wt, null], null), null), b) ? bf.h(Me(Sh.h(aj, this), this.o), b) : new kD(this.sb, this.zc, this.o, $g(bf.h(this.l, b)), null);
};
k.za = function(a, b, c) {
  return q(X.h ? X.h(fr, b) : X.call(null, fr, b)) ? new kD(c, this.zc, this.o, this.l, null) : q(X.h ? X.h(Wt, b) : X.call(null, Wt, b)) ? new kD(this.sb, c, this.o, this.l, null) : new kD(this.sb, this.zc, this.o, Q.j(this.l, b, c), null);
};
k.W = function() {
  return A(Rg.h(new U(null, 2, 5, V, [new U(null, 2, 5, V, [fr, this.sb], null), new U(null, 2, 5, V, [Wt, this.zc], null)], null), this.l));
};
k.M = function(a, b) {
  return new kD(this.sb, this.zc, b, this.l, this.A);
};
k.Y = function(a, b) {
  return nf(b) ? vc(this, v.h(b, 0), v.h(b, 1)) : Rb.j(dc, this, b);
};
function lD(a, b, c, d) {
  return Xe(Dh.h(c + 1, Jh(function(b) {
    b = new U(null, 1, 5, V, [b], null);
    var c = R.h(zC, Ch.h(PA, b)), g = R.h(zC, Ch.h(GB, b)), c = Q.k(d, Ht, c, G([Mq, R.h(Of, g)], 0)), c = a.g ? a.g(c) : a.call(null, c);
    return new kD(c, b);
  }, b)));
}
function mD(a) {
  return ri(ng(Oh.h(fr, Qh(Wt, Wt, a))));
}
function nD(a) {
  return Ch.h(fr, mD(a));
}
function oD(a) {
  return Ph.h(fr, Qh(Wt, Wt, a));
}
function pD(a) {
  return AA(function(a, c) {
    return Q.j(a, Wt, c);
  }, a);
}
function qD(a, b, c) {
  for (a = pD(a);;) {
    var d = fr.g(BA(a));
    if (q(d)) {
      var e = d;
      if (ae.h(b, nu.g(e))) {
        return EA(GA(a, function() {
          return function(a) {
            return Yh.j(a, new U(null, 1, 5, V, [fr], null), c);
          };
        }(a, e, d)));
      }
      if (IA(a)) {
        return Tu;
      }
      a = HA(a);
    } else {
      return null;
    }
  }
}
var rD = function() {
  function a(a, b) {
    var c = b.g ? b.g(a) : b.call(null, a), g = mB(c), c = sB(c), c = Sh.h(uk, Ch.h(C, c)), h = LC.h(c, g), g = pk.k(G([Bk(c, Gh.g(cu)), Bk(g, Gh.g(bs)), Bk(h, Gh.g(xr))], 0));
    return Q.k(pk.k(G([new n(null, 3, [bs, 0, cu, 0, xr, 0], null), Gk(Zi(g))], 0)), go, LB(a), G([Xq, QA(JA(a))], 0));
  }
  function b(a) {
    return c.h(a, Pu);
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
function sD(a, b) {
  var c = bv.g(a), d = Pq.g(c);
  return Ug(Rb.j(function(a, b) {
    return function(c, d) {
      var l = uB(b, d);
      return Rb.j(function() {
        return function(a, b) {
          return Wg.j(a, b, P.j(a, b, 0) + 1);
        };
      }(l, a, b), c, l);
    };
  }(c, d), td(aj), b));
}
;var tD, uD, vD, wD;
function xD(a, b) {
  if (a ? a.Ae : a) {
    return a.Ae(a, b);
  }
  var c;
  c = xD[m(null == a ? null : a)];
  if (!c && (c = xD._, !c)) {
    throw r("ReadPort.take!", a);
  }
  return c.call(null, a, b);
}
function yD(a, b, c) {
  if (a ? a.be : a) {
    return a.be(a, b, c);
  }
  var d;
  d = yD[m(null == a ? null : a)];
  if (!d && (d = yD._, !d)) {
    throw r("WritePort.put!", a);
  }
  return d.call(null, a, b, c);
}
function zD(a) {
  if (a ? a.Gd : a) {
    return a.Gd(a);
  }
  var b;
  b = zD[m(null == a ? null : a)];
  if (!b && (b = zD._, !b)) {
    throw r("Channel.close!", a);
  }
  return b.call(null, a);
}
function AD(a) {
  if (a ? a.Uc : a) {
    return a.Uc(a);
  }
  var b;
  b = AD[m(null == a ? null : a)];
  if (!b && (b = AD._, !b)) {
    throw r("Handler.active?", a);
  }
  return b.call(null, a);
}
function BD(a) {
  if (a ? a.Xb : a) {
    return a.Xb(a);
  }
  var b;
  b = BD[m(null == a ? null : a)];
  if (!b && (b = BD._, !b)) {
    throw r("Handler.commit", a);
  }
  return b.call(null, a);
}
function CD(a) {
  if (a ? a.of : a) {
    return a.of();
  }
  var b;
  b = CD[m(null == a ? null : a)];
  if (!b && (b = CD._, !b)) {
    throw r("Buffer.full?", a);
  }
  return b.call(null, a);
}
;function DD(a, b, c, d, e) {
  for (var f = 0;;) {
    if (f < e) {
      c[d + f] = a[b + f], f += 1;
    } else {
      break;
    }
  }
}
function ED(a, b, c, d) {
  this.head = a;
  this.la = b;
  this.length = c;
  this.p = d;
}
ED.prototype.pop = function() {
  if (0 === this.length) {
    return null;
  }
  var a = this.p[this.la];
  this.p[this.la] = null;
  this.la = (this.la + 1) % this.p.length;
  this.length -= 1;
  return a;
};
ED.prototype.unshift = function(a) {
  this.p[this.head] = a;
  this.head = (this.head + 1) % this.p.length;
  this.length += 1;
  return null;
};
function FD(a, b) {
  a.length + 1 === a.p.length && a.resize();
  a.unshift(b);
}
ED.prototype.resize = function() {
  var a = Array(2 * this.p.length);
  return this.la < this.head ? (DD(this.p, this.la, a, 0, this.length), this.la = 0, this.head = this.length, this.p = a) : this.la > this.head ? (DD(this.p, this.la, a, 0, this.p.length - this.la), DD(this.p, 0, a, this.p.length - this.la, this.head), this.la = 0, this.head = this.length, this.p = a) : this.la === this.head ? (this.head = this.la = 0, this.p = a) : null;
};
function GD(a, b) {
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
function sG(a) {
  if (!(0 < a)) {
    throw Error("Assert failed: Can't create a ring buffer of size 0\n" + u.g(oh.k(G([og(new ce(null, "\x3e", "\x3e", 1085014381, null), new ce(null, "n", "n", -2092305744, null), 0)], 0))));
  }
  return new ED(0, 0, 0, Array(a));
}
function tG(a, b) {
  this.Ab = a;
  this.xd = b;
  this.K = 0;
  this.B = 2;
}
tG.prototype.Z = function() {
  return this.Ab.length;
};
tG.prototype.of = function() {
  return this.Ab.length === this.xd;
};
tG.prototype.Wh = function() {
  return this.Ab.pop();
};
function uG(a, b) {
  if (!Ib(CD(a))) {
    throw Error("Assert failed: Can't add to a full buffer\n" + u.g(oh.k(G([og(new ce(null, "not", "not", 1044554643, null), og(new ce("impl", "full?", "impl/full?", -97582774, null), new ce(null, "this", "this", 1028897902, null)))], 0))));
  }
  a.Ab.unshift(b);
}
;var vG = null, wG = sG(32), xG = !1, yG = !1;
function zG() {
  xG = !0;
  yG = !1;
  for (var a = 0;;) {
    var b = wG.pop();
    if (null != b && (b.w ? b.w() : b.call(null), 1024 > a)) {
      a += 1;
      continue;
    }
    break;
  }
  xG = !1;
  return 0 < wG.length ? AG.w ? AG.w() : AG.call(null) : null;
}
"undefined" !== typeof MessageChannel && (vG = new MessageChannel, vG.port1.onmessage = function() {
  return zG();
});
function AG() {
  var a = yG;
  if (q(a ? xG : a)) {
    return null;
  }
  yG = !0;
  return "undefined" !== typeof MessageChannel ? vG.port2.postMessage(0) : "undefined" !== typeof setImmediate ? setImmediate(zG) : setTimeout(zG, 0);
}
function BG(a) {
  FD(wG, a);
  AG();
}
function CG(a, b) {
  setTimeout(a, b);
}
;var DG, FG = function EG(b) {
  "undefined" === typeof DG && (DG = function(b, d, e) {
    this.I = b;
    this.Bh = d;
    this.vi = e;
    this.K = 0;
    this.B = 425984;
  }, DG.wb = !0, DG.vb = "cljs.core.async.impl.channels/t34750", DG.Bb = function(b, d) {
    return nd(d, "cljs.core.async.impl.channels/t34750");
  }, DG.prototype.Dd = function() {
    return this.I;
  }, DG.prototype.L = function() {
    return this.vi;
  }, DG.prototype.M = function(b, d) {
    return new DG(this.I, this.Bh, d);
  });
  return new DG(b, EG, null);
};
function GG(a, b) {
  this.qc = a;
  this.I = b;
}
function HG(a) {
  return AD(a.qc);
}
function IG(a, b, c, d, e, f) {
  this.oe = a;
  this.Fe = b;
  this.Se = c;
  this.Ee = d;
  this.Ab = e;
  this.closed = f;
}
IG.prototype.Gd = function() {
  if (!this.closed) {
    for (this.closed = !0;;) {
      var a = this.oe.pop();
      if (null != a) {
        if (a.Uc(null)) {
          var b = a.Xb(null);
          BG(function(a) {
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
IG.prototype.Ae = function(a, b) {
  if (b.Uc(null)) {
    if (null != this.Ab && 0 < J(this.Ab)) {
      var c = b.Xb(null);
      return FG(this.Ab.Wh());
    }
    for (;;) {
      var d = this.Se.pop();
      if (null != d) {
        var e = d.qc, f = d.I;
        if (e.Uc(null)) {
          var g = e.Xb(null), c = b.Xb(null);
          BG(function(a) {
            return function() {
              return a.g ? a.g(!0) : a.call(null, !0);
            };
          }(g, c, e, f, d, this));
          return FG(f);
        }
      } else {
        if (this.closed) {
          return c = b.Xb(null), FG(null);
        }
        64 < this.Fe ? (this.Fe = 0, GD(this.oe, AD)) : this.Fe += 1;
        if (!(1024 > this.oe.length)) {
          throw Error("Assert failed: " + u.g("No more than " + u.g(1024) + " pending takes are allowed on a single channel.") + "\n" + u.g(oh.k(G([og(new ce(null, "\x3c", "\x3c", 993667236, null), og(new ce(null, ".-length", ".-length", -280799999, null), new ce(null, "takes", "takes", 298247964, null)), new ce("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", 1508600732, null))], 0))));
        }
        FD(this.oe, b);
        return null;
      }
    }
  } else {
    return null;
  }
};
IG.prototype.be = function(a, b, c) {
  if (null == b) {
    throw Error("Assert failed: Can't put nil in on a channel\n" + u.g(oh.k(G([og(new ce(null, "not", "not", 1044554643, null), og(new ce(null, "nil?", "nil?", 1612038930, null), new ce(null, "val", "val", 1769233139, null)))], 0))));
  }
  if ((a = this.closed) || !c.Uc(null)) {
    return FG(!a);
  }
  for (;;) {
    var d = this.oe.pop();
    if (null != d) {
      if (d.Uc(null)) {
        var e = d.Xb(null);
        c = c.Xb(null);
        BG(function(a) {
          return function() {
            return a.g ? a.g(b) : a.call(null, b);
          };
        }(e, c, d, a, this));
        return FG(!0);
      }
    } else {
      if (null == this.Ab || this.Ab.of()) {
        64 < this.Ee ? (this.Ee = 0, GD(this.Se, HG)) : this.Ee += 1;
        if (!(1024 > this.Se.length)) {
          throw Error("Assert failed: " + u.g("No more than " + u.g(1024) + " pending puts are allowed on a single channel. Consider using a windowed buffer.") + "\n" + u.g(oh.k(G([og(new ce(null, "\x3c", "\x3c", 993667236, null), og(new ce(null, ".-length", ".-length", -280799999, null), new ce(null, "puts", "puts", -1883877054, null)), new ce("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", 1508600732, null))], 0))));
        }
        FD(this.Se, new GG(c, b));
        return null;
      }
      c = c.Xb(null);
      uG(this.Ab, b);
      return FG(!0);
    }
  }
};
function JG(a) {
  return new IG(sG(32), 0, sG(32), 0, a, !1);
}
;var KG, MG = function LG(b) {
  "undefined" === typeof KG && (KG = function(b, d, e) {
    this.f = b;
    this.Hf = d;
    this.ui = e;
    this.K = 0;
    this.B = 393216;
  }, KG.wb = !0, KG.vb = "cljs.core.async.impl.ioc-helpers/t34614", KG.Bb = function(b, d) {
    return nd(d, "cljs.core.async.impl.ioc-helpers/t34614");
  }, KG.prototype.Uc = function() {
    return!0;
  }, KG.prototype.Xb = function() {
    return this.f;
  }, KG.prototype.L = function() {
    return this.ui;
  }, KG.prototype.M = function(b, d) {
    return new KG(this.f, this.Hf, d);
  });
  return new KG(b, LG, null);
};
function NG(a) {
  try {
    return a[0].call(null, a);
  } catch (b) {
    throw b instanceof Object && a[6].Gd(null), b;
  }
}
function OG(a, b, c) {
  c = c.Ae(null, MG(function(c) {
    a[2] = c;
    a[1] = b;
    return NG(a);
  }));
  return q(c) ? (a[2] = H.g ? H.g(c) : H.call(null, c), a[1] = b, Z) : null;
}
function PG(a, b, c, d) {
  c = c.be(null, d, MG(function(c) {
    a[2] = c;
    a[1] = b;
    return NG(a);
  }));
  return q(c) ? (a[2] = H.g ? H.g(c) : H.call(null, c), a[1] = b, Z) : null;
}
function QG(a, b) {
  var c = a[6];
  null != b && c.be(null, b, MG(function() {
    return function() {
      return null;
    };
  }(c)));
  c.Gd(null);
  return c;
}
function RG(a, b, c, d, e, f, g) {
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
k = RG.prototype;
k.N = function(a, b) {
  return rc.j(this, b, null);
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
  return Ok(b, function() {
    return function(a) {
      return Ok(b, Uk, "", " ", "", c, a);
    };
  }(this), "#cljs.core.async.impl.ioc-helpers.ExceptionFrame{", ", ", "}", c, Rg.h(new U(null, 5, 5, V, [new U(null, 2, 5, V, [Fo, this.kc], null), new U(null, 2, 5, V, [ms, this.lc], null), new U(null, 2, 5, V, [En, this.pc], null), new U(null, 2, 5, V, [pt, this.nc], null), new U(null, 2, 5, V, [zs, this.wc], null)], null), this.l));
};
k.L = function() {
  return this.o;
};
k.ma = function() {
  return new RG(this.kc, this.lc, this.pc, this.nc, this.wc, this.o, this.l, this.A);
};
k.Z = function() {
  return 5 + J(this.l);
};
k.S = function() {
  var a = this.A;
  return null != a ? a : this.A = a = ig(this);
};
k.J = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && Pi(this, b) : b) ? !0 : !1;
};
k.Ra = function(a, b) {
  return Df(new sk(null, new n(null, 5, [En, null, Fo, null, ms, null, zs, null, pt, null], null), null), b) ? bf.h(Me(Sh.h(aj, this), this.o), b) : new RG(this.kc, this.lc, this.pc, this.nc, this.wc, this.o, $g(bf.h(this.l, b)), null);
};
k.za = function(a, b, c) {
  return q(X.h ? X.h(Fo, b) : X.call(null, Fo, b)) ? new RG(c, this.lc, this.pc, this.nc, this.wc, this.o, this.l, null) : q(X.h ? X.h(ms, b) : X.call(null, ms, b)) ? new RG(this.kc, c, this.pc, this.nc, this.wc, this.o, this.l, null) : q(X.h ? X.h(En, b) : X.call(null, En, b)) ? new RG(this.kc, this.lc, c, this.nc, this.wc, this.o, this.l, null) : q(X.h ? X.h(pt, b) : X.call(null, pt, b)) ? new RG(this.kc, this.lc, this.pc, c, this.wc, this.o, this.l, null) : q(X.h ? X.h(zs, b) : X.call(null, zs, 
  b)) ? new RG(this.kc, this.lc, this.pc, this.nc, c, this.o, this.l, null) : new RG(this.kc, this.lc, this.pc, this.nc, this.wc, this.o, Q.j(this.l, b, c), null);
};
k.W = function() {
  return A(Rg.h(new U(null, 5, 5, V, [new U(null, 2, 5, V, [Fo, this.kc], null), new U(null, 2, 5, V, [ms, this.lc], null), new U(null, 2, 5, V, [En, this.pc], null), new U(null, 2, 5, V, [pt, this.nc], null), new U(null, 2, 5, V, [zs, this.wc], null)], null), this.l));
};
k.M = function(a, b) {
  return new RG(this.kc, this.lc, this.pc, this.nc, this.wc, b, this.l, this.A);
};
k.Y = function(a, b) {
  return nf(b) ? vc(this, v.h(b, 0), v.h(b, 1)) : Rb.j(dc, this, b);
};
function SG(a) {
  for (;;) {
    var b = a[4], c = Fo.g(b), d = ms.g(b), e = a[5];
    if (q(function() {
      var a = e;
      return q(a) ? Ib(b) : a;
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
      a[4] = Q.k(b, Fo, null, G([ms, null], 0));
      break;
    }
    if (q(function() {
      var a = e;
      return q(a) ? Ib(c) && Ib(En.g(b)) : a;
    }())) {
      a[4] = zs.g(b);
    } else {
      if (q(function() {
        var a = e;
        return q(a) ? (a = Ib(c)) ? En.g(b) : a : a;
      }())) {
        a[1] = En.g(b);
        a[4] = Q.j(b, En, null);
        break;
      }
      if (q(function() {
        var a = Ib(e);
        return a ? En.g(b) : a;
      }())) {
        a[1] = En.g(b);
        a[4] = Q.j(b, En, null);
        break;
      }
      if (Ib(e) && Ib(En.g(b))) {
        a[1] = pt.g(b);
        a[4] = zs.g(b);
        break;
      }
      throw Error("Assert failed: No matching clause\n" + u.g(oh.k(G([!1], 0))));
    }
  }
}
;var TG = function() {
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
function UG(a, b, c) {
  this.key = a;
  this.I = b;
  this.forward = c;
  this.K = 0;
  this.B = 2155872256;
}
UG.prototype.U = function(a, b, c) {
  return Ok(b, Uk, "[", " ", "]", c, this);
};
UG.prototype.W = function() {
  return dc(dc(me, this.I), this.key);
};
var VG = function() {
  function a(a, b, c) {
    c = Array(c + 1);
    for (var g = 0;;) {
      if (g < c.length) {
        c[g] = null, g += 1;
      } else {
        break;
      }
    }
    return new UG(a, b, c);
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
}(), WG = function() {
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
function XG(a, b) {
  this.td = a;
  this.dc = b;
  this.K = 0;
  this.B = 2155872256;
}
XG.prototype.U = function(a, b, c) {
  return Ok(b, function() {
    return function(a) {
      return Ok(b, Uk, "", " ", "", c, a);
    };
  }(this), "{", ", ", "}", c, this);
};
XG.prototype.W = function() {
  return function(a) {
    return function c(d) {
      return new sg(null, function() {
        return function() {
          return null == d ? null : Ke(new U(null, 2, 5, V, [d.key, d.I], null), c(d.forward[0]));
        };
      }(a), null, null);
    };
  }(this)(this.td.forward[0]);
};
XG.prototype.put = function(a, b) {
  var c = Array(15), d = WG.v(this.td, a, this.dc, c).forward[0];
  if (null != d && d.key === a) {
    return d.I = b;
  }
  d = TG.w();
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
  for (d = VG.j(a, b, Array(d));;) {
    return 0 <= this.dc ? (c = c[0].forward, d.forward[0] = c[0], c[0] = d) : null;
  }
};
XG.prototype.remove = function(a) {
  var b = Array(15), c = WG.v(this.td, a, this.dc, b).forward[0];
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
function YG(a) {
  for (var b = ZG, c = b.td, d = b.dc;;) {
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
var ZG = new XG(VG.g(0), 0);
function $G(a) {
  var b = (new Date).valueOf() + a, c = YG(b), d = q(q(c) ? c.key < b + 10 : c) ? c.I : null;
  if (q(d)) {
    return d;
  }
  var e = JG(null);
  ZG.put(b, e);
  CG(function(a, b, c) {
    return function() {
      ZG.remove(c);
      return a.Gd(null);
    };
  }(e, d, b, c), a);
  return e;
}
;var bH = function aH(b) {
  "undefined" === typeof tD && (tD = function(b, d, e) {
    this.f = b;
    this.Hf = d;
    this.ri = e;
    this.K = 0;
    this.B = 393216;
  }, tD.wb = !0, tD.vb = "cljs.core.async/t31692", tD.Bb = function(b, d) {
    return nd(d, "cljs.core.async/t31692");
  }, tD.prototype.Uc = function() {
    return!0;
  }, tD.prototype.Xb = function() {
    return this.f;
  }, tD.prototype.L = function() {
    return this.ri;
  }, tD.prototype.M = function(b, d) {
    return new tD(this.f, this.Hf, d);
  });
  return new tD(b, aH, null);
}, cH = function() {
  function a(a) {
    a = ae.h(a, 0) ? null : a;
    a = "number" === typeof a ? new tG(sG(a), a) : a;
    return JG(a);
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
}(), dH = function() {
  function a(a, b, c) {
    a = xD(a, bH(b));
    if (q(a)) {
      var g = H.g ? H.g(a) : H.call(null, a);
      q(c) ? b.g ? b.g(g) : b.call(null, g) : BG(function(a) {
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
}(), eH = bH(function() {
  return null;
}), fH = function() {
  function a(a, b, c, d) {
    a = yD(a, b, bH(c));
    return q(a) ? (b = H.g ? H.g(a) : H.call(null, a), q(d) ? c.g ? c.g(b) : c.call(null, b) : BG(function(a) {
      return function() {
        return c.g ? c.g(a) : c.call(null, a);
      };
    }(b, a, a)), b) : !0;
  }
  function b(a, b, c) {
    return d.v(a, b, c, !0);
  }
  function c(a, b) {
    var c = yD(a, b, eH);
    return q(c) ? H.g ? H.g(c) : H.call(null, c) : !0;
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
}(), hH = function gH(b, c) {
  "undefined" === typeof uD && (uD = function(b, c, f, g) {
    this.ch = b;
    this.f = c;
    this.Le = f;
    this.Me = g;
    this.K = 0;
    this.B = 393216;
  }, uD.wb = !0, uD.vb = "cljs.core.async/t31778", uD.Bb = function(b, c) {
    return nd(c, "cljs.core.async/t31778");
  }, uD.prototype.be = function(b, c, f) {
    return yD(this.ch, c, f);
  }, uD.prototype.Ae = function(b, c) {
    var f = this, g = this, h = xD(f.ch, function() {
      "undefined" === typeof vD && (vD = function(b, c, d, e, f, g, h) {
        this.Gf = b;
        this.zh = c;
        this.Me = d;
        this.ch = e;
        this.f = f;
        this.Le = g;
        this.si = h;
        this.K = 0;
        this.B = 393216;
      }, vD.wb = !0, vD.vb = "cljs.core.async/t31781", vD.Bb = function() {
        return function(b, c) {
          return nd(c, "cljs.core.async/t31781");
        };
      }(g), vD.prototype.Uc = function() {
        return function() {
          return AD(this.Gf);
        };
      }(g), vD.prototype.Xb = function(b) {
        return function() {
          var c = this;
          return function(b) {
            return function(d) {
              d = null == d ? null : c.f.g ? c.f.g(d) : c.f.call(null, d);
              return b.g ? b.g(d) : b.call(null, d);
            };
          }(BD(c.Gf), this, b);
        };
      }(g), vD.prototype.L = function() {
        return function() {
          return this.si;
        };
      }(g), vD.prototype.M = function() {
        return function(b, c) {
          return new vD(this.Gf, this.zh, this.Me, this.ch, this.f, this.Le, c);
        };
      }(g));
      return new vD(c, g, f.Me, f.ch, f.f, f.Le, null);
    }());
    return q(q(h) ? null != (H.g ? H.g(h) : H.call(null, h)) : h) ? FG(function() {
      var b = H.g ? H.g(h) : H.call(null, h);
      return f.f.g ? f.f.g(b) : f.f.call(null, b);
    }()) : h;
  }, uD.prototype.Gd = function() {
    return zD(this.ch);
  }, uD.prototype.L = function() {
    return this.Me;
  }, uD.prototype.M = function(b, c) {
    return new uD(this.ch, this.f, this.Le, c);
  });
  return new uD(c, b, gH, null);
}, iH = function() {
  function a(a, b, c) {
    var g = cH.g(1);
    BG(function(g) {
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
                        SG(c);
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
              return 7 === h ? (h = g, h[2] = g[2], h[1] = 3, Z) : 1 === h ? (g[2] = null, g[1] = 2, Z) : 4 === h ? (h = g[7], h = g[2], g[7] = h, g[1] = q(null == h) ? 5 : 6, Z) : 13 === h ? (g[2] = null, g[1] = 14, Z) : 6 === h ? (h = g[7], PG(g, 11, b, h)) : 3 === h ? (h = g[2], QG(g, h)) : 12 === h ? (g[2] = null, g[1] = 2, Z) : 2 === h ? OG(g, 4, a) : 11 === h ? (h = g[2], g[1] = q(h) ? 12 : 13, Z) : 9 === h ? (g[2] = null, g[1] = 10, Z) : 5 === h ? (g[1] = q(c) ? 8 : 9, Z) : 14 === h || 10 === 
              h ? (h = g[2], g[2] = h, g[1] = 7, Z) : 8 === h ? (h = zD(b), g[2] = h, g[1] = 10, Z) : null;
            };
          }(g), g);
        }(), p = function() {
          var a = l.w ? l.w() : l.call(null);
          a[6] = g;
          return a;
        }();
        return NG(p);
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
function jH(a, b, c) {
  if (a ? a.zg : a) {
    return a.zg(a, b, c);
  }
  var d;
  d = jH[m(null == a ? null : a)];
  if (!d && (d = jH._, !d)) {
    throw r("Mult.tap*", a);
  }
  return d.call(null, a, b, c);
}
var kH = function() {
  function a(a, b, c) {
    jH(a, b, c);
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
}(), lH = function() {
  function a(a, b, c) {
    b = ri(b);
    c = cH.g(c);
    var g = J(b), h = Ng.g(g), l = cH.g(1), p = mh.g ? mh.g(null) : mh.call(null, null), s = Th.h(function(a, b, c, d, e, f) {
      return function(g) {
        return function(a, b, c, d, e, f) {
          return function(a) {
            d[g] = a;
            return 0 === ph.h(f, Qf) ? fH.h(e, d.slice(0)) : null;
          };
        }(a, b, c, d, e, f);
      };
    }(b, c, g, h, l, p), Fk.g(g)), t = cH.g(1);
    BG(function(b, c, e, f, g, h, s, l) {
      return function() {
        var p = function() {
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
                        SG(c);
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
          }(function(b, c, e, f, g, h, s, l) {
            return function(b) {
              var g = b[1];
              if (7 === g) {
                return b[2] = null, b[1] = 8, Z;
              }
              if (1 === g) {
                return b[2] = null, b[1] = 2, Z;
              }
              if (4 === g) {
                var p = b[7], g = p < f;
                b[1] = q(g) ? 6 : 7;
                return Z;
              }
              if (15 === g) {
                return g = b[2], b[2] = g, b[1] = 3, Z;
              }
              if (13 === g) {
                return g = zD(e), b[2] = g, b[1] = 15, Z;
              }
              if (6 === g) {
                return b[2] = null, b[1] = 11, Z;
              }
              if (3 === g) {
                return g = b[2], QG(b, g);
              }
              if (12 === g) {
                var g = b[8], g = b[2], t = bh(Hb, g);
                b[8] = g;
                b[1] = q(t) ? 13 : 14;
                return Z;
              }
              return 2 === g ? (g = nh.h ? nh.h(s, f) : nh.call(null, s, f), p = 0, b[9] = g, b[7] = p, b[2] = null, b[1] = 4, Z) : 11 === g ? (p = b[7], b[4] = new RG(10, Object, null, 9, b[4]), g = function() {
                var a = p;
                return c.g ? c.g(a) : c.call(null, a);
              }(), t = function() {
                var a = p;
                return l.g ? l.g(a) : l.call(null, a);
              }(), g = dH.h(g, t), b[2] = g, SG(b), Z) : 9 === g ? (p = b[7], g = b[2], b[7] = p + 1, b[10] = g, b[2] = null, b[1] = 4, Z) : 5 === g ? (b[11] = b[2], OG(b, 12, h)) : 14 === g ? (g = b[8], g = R.h(a, g), PG(b, 16, e, g)) : 16 === g ? (b[12] = b[2], b[2] = null, b[1] = 2, Z) : 10 === g ? (t = b[2], g = ph.h(s, Qf), b[13] = t, b[2] = g, SG(b), Z) : 8 === g ? (g = b[2], b[2] = g, b[1] = 5, Z) : null;
            };
          }(b, c, e, f, g, h, s, l), b, c, e, f, g, h, s, l);
        }(), t = function() {
          var a = p.w ? p.w() : p.call(null);
          a[6] = b;
          return a;
        }();
        return NG(t);
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
function mH(a, b) {
  var c = Array.prototype.slice.call(arguments), d = c.shift();
  if ("undefined" == typeof d) {
    throw Error("[goog.string.format] Template required");
  }
  return d.replace(/%([0\-\ \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(a, b, d, h, l, p, s, t) {
    if ("%" == p) {
      return "%";
    }
    var w = c.shift();
    if ("undefined" == typeof w) {
      throw Error("[goog.string.format] Not enough arguments");
    }
    arguments[0] = w;
    return nH[p].apply(null, arguments);
  });
}
var nH = {s:function(a, b, c) {
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
  return nH.f(parseInt(a, 10), b, c, d, 0, f, g, h);
}};
nH.i = nH.d;
nH.u = nH.d;
function oH(a) {
  a.beginPath();
}
function pH(a) {
  a.save();
  return a;
}
function qH(a) {
  a.restore();
  return a;
}
function rH(a) {
  a.stroke();
}
function sH(a, b) {
  var c = Bf(b) ? R.h(kh, b) : b, d = P.h(c, Xr), e = P.h(c, Mn), f = P.h(c, Nl), c = P.h(c, Vt);
  a.clearRect(c, f, e, d);
}
function tH(a, b) {
  var c = Bf(b) ? R.h(kh, b) : b, d = P.h(c, Xr), e = P.h(c, Mn), f = P.h(c, Nl), c = P.h(c, Vt);
  a.strokeRect(c, f, e, d);
}
function uH(a, b) {
  var c = Bf(b) ? R.h(kh, b) : b, d = P.h(c, Xr), e = P.h(c, Mn), f = P.h(c, Nl), c = P.h(c, Vt);
  a.fillRect(c, f, e, d);
  return a;
}
function vH(a, b) {
  var c = Bf(b) ? R.h(kh, b) : b, d = P.h(c, Nl), e = P.h(c, Vt), c = P.h(c, Dv);
  a.fillText(c, e, d);
  return a;
}
function wH(a, b) {
  a.font = b;
  return a;
}
function xH(a, b) {
  a.fillStyle = qg(b);
  return a;
}
function yH(a, b) {
  a.strokeStyle = qg(b);
}
function zH(a, b) {
  a.globalAlpha = b;
  return a;
}
function AH(a, b) {
  a.textAlign = qg(b);
  return a;
}
function BH(a) {
  a.textBaseline = qg(rn);
  return a;
}
var CH = function() {
  function a(a, b, c, g) {
    a.drawImage(b, c, g);
    return a;
  }
  function b(a, b, c) {
    var g = Bf(c) ? R.h(kh, c) : c;
    c = P.h(g, eu);
    var h = P.h(g, gu), l = P.h(g, Vt), p = P.h(g, Nl), s = P.h(g, rm), t = P.h(g, Em), w = P.h(g, Mn), B = P.h(g, On), z = P.h(g, oo), D = P.h(g, Xr), K = P.h(g, Ft), L = P.h(g, Nt), g = J(g);
    if (q(ae.h ? ae.h(2, g) : ae.call(null, 2, g))) {
      a.drawImage(b, l, p);
    } else {
      if (q(ae.h ? ae.h(4, g) : ae.call(null, 4, g))) {
        a.drawImage(b, l, p, w, D);
      } else {
        if (q(ae.h ? ae.h(8, g) : ae.call(null, 8, g))) {
          a.drawImage(b, L, B, h, c, t, z, K, s);
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
}(), DH = function() {
  function a(a, b, c, g, h, l, p) {
    a.bezierCurveTo(b, c, g, h, l, p);
    return a;
  }
  function b(a, b) {
    var c = Bf(b) ? R.h(kh, b) : b, g = P.h(c, Nl), h = P.h(c, Vt), l = P.h(c, ku), p = P.h(c, Ir), s = P.h(c, wt), c = P.h(c, zr);
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
function EH(a) {
  if (a ? a.xf : a) {
    return a.xf(a);
  }
  var b;
  b = EH[m(null == a ? null : a)];
  if (!b && (b = EH._, !b)) {
    throw r("PArrayLayout.layout-bounds", a);
  }
  return b.call(null, a);
}
function FH(a, b) {
  if (a ? a.Af : a) {
    return a.Af(a, b);
  }
  var c;
  c = FH[m(null == a ? null : a)];
  if (!c && (c = FH._, !c)) {
    throw r("PArrayLayout.origin-px-topleft", a);
  }
  return c.call(null, a, b);
}
function GH(a, b) {
  if (a ? a.yf : a) {
    return a.yf(a, b);
  }
  var c;
  c = GH[m(null == a ? null : a)];
  if (!c && (c = GH._, !c)) {
    throw r("PArrayLayout.local-px-topleft", a);
  }
  return c.call(null, a, b);
}
function HH(a) {
  if (a ? a.uf : a) {
    return a.uf(a);
  }
  var b;
  b = HH[m(null == a ? null : a)];
  if (!b && (b = HH._, !b)) {
    throw r("PArrayLayout.element-size-px", a);
  }
  return b.call(null, a);
}
function IH(a) {
  if (a ? a.zf : a) {
    return a.zf(a);
  }
  var b;
  b = IH[m(null == a ? null : a)];
  if (!b && (b = IH._, !b)) {
    throw r("PArrayLayout.n-onscreen", a);
  }
  return b.call(null, a);
}
function JH(a) {
  if (a ? a.Eg : a) {
    return a.ba;
  }
  var b;
  b = JH[m(null == a ? null : a)];
  if (!b && (b = JH._, !b)) {
    throw r("PArrayLayout.top-id-onscreen", a);
  }
  return b.call(null, a);
}
function KH(a, b, c) {
  if (a ? a.sf : a) {
    return a.sf(a, b, c);
  }
  var d;
  d = KH[m(null == a ? null : a)];
  if (!d && (d = KH._, !d)) {
    throw r("PArrayLayout.clicked-id", a);
  }
  return d.call(null, a, b, c);
}
function LH(a, b, c) {
  if (a ? a.tf : a) {
    return a.tf(a, b, c);
  }
  var d;
  d = LH[m(null == a ? null : a)];
  if (!d && (d = LH._, !d)) {
    throw r("PArrayLayout.draw-element", a);
  }
  return d.call(null, a, b, c);
}
function MH(a, b, c) {
  if (a ? a.vf : a) {
    return a.vf(a, b, c);
  }
  var d;
  d = MH[m(null == a ? null : a)];
  if (!d && (d = MH._, !d)) {
    throw r("PArrayLayout.highlight-dt", a);
  }
  return d.call(null, a, b, c);
}
function NH(a, b, c, d) {
  if (a ? a.wf : a) {
    return a.wf(a, b, c, d);
  }
  var e;
  e = NH[m(null == a ? null : a)];
  if (!e && (e = NH._, !e)) {
    throw r("PArrayLayout.highlight-element", a);
  }
  return e.call(null, a, b, c, d);
}
function OH(a) {
  a = EH(a);
  return Vt.g(a) + Mn.g(a);
}
function PH(a, b, c) {
  var d = HH(a), e = O.j(d, 0, null), d = O.j(d, 1, null), f = FH(a, c);
  c = O.j(f, 0, null);
  f = O.j(f, 1, null);
  b = GH(a, b);
  a = O.j(b, 0, null);
  b = O.j(b, 1, null);
  return new U(null, 2, 5, V, [c + a + .5 * e, f + b + .5 * d], null);
}
function QH(a, b, c) {
  var d = JH(b), e = d + IH(b) + -1, f = 1 === J(KA(wn.g(b)));
  oH(a);
  c = A(c);
  for (var g = null, h = 0, l = 0;;) {
    if (l < h) {
      var p = g.H(null, l);
      d <= p && p <= e && (LH(b, a, p), f || (a.fill(), oH(a)));
      l += 1;
    } else {
      if (c = A(c)) {
        g = c, S(g) ? (c = x(g), l = y(g), g = c, h = J(c), c = l) : (c = C(g), d <= c && c <= e && (LH(b, a, c), f || (a.fill(), oH(a))), c = F(g), g = null, h = 0), l = 0;
      } else {
        break;
      }
    }
  }
}
function RH(a, b, c) {
  pH(a);
  c = A(Kl(c, Yi(c)));
  for (var d = null, e = 0, f = 0;;) {
    if (f < e) {
      var g = d.H(null, f), h = O.j(g, 0, null), g = O.j(g, 1, null);
      QH(a, b, g);
      g = a;
      zH.h ? zH.h(g, h) : zH.call(null, g, h);
      a.fill();
      f += 1;
    } else {
      if (c = A(c)) {
        S(c) ? (e = x(c), c = y(c), d = e, e = J(e)) : (e = C(c), d = O.j(e, 0, null), e = O.j(e, 1, null), QH(a, b, e), e = a, zH.h ? zH.h(e, d) : zH.call(null, e, d), a.fill(), c = F(c), d = null, e = 0), f = 0;
      } else {
        break;
      }
    }
  }
  qH(a);
}
function SH(a, b, c, d) {
  return a.arc(b, c, d, 0, 2 * Math.PI, !0);
}
function TH(a, b, c, d) {
  return new n(null, 4, [Vt, a - c / 2, Nl, b - d / 2, Mn, c, Xr, d], null);
}
function UH(a, b, c) {
  yH(a, c);
  a.lineWidth = 3;
  tH(a, b);
  yH(a, "black");
  a.lineWidth = 1;
  tH(a, b);
  return a;
}
function VH(a, b, c, d, e, f, g, h, l, p, s, t, w) {
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
  this.l = w;
  this.B = 2229667594;
  this.K = 8192;
  11 < arguments.length ? (this.o = t, this.l = w) : this.l = this.o = null;
}
k = VH.prototype;
k.N = function(a, b) {
  return rc.j(this, b, null);
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
  return Ok(b, function() {
    return function(a) {
      return Ok(b, Uk, "", " ", "", c, a);
    };
  }(this), "#comportexviz.viz-layouts.Grid1dLayout{", ", ", "}", c, Rg.h(new U(null, 11, 5, V, [new U(null, 2, 5, V, [wn, this.O], null), new U(null, 2, 5, V, [Hm, this.ba], null), new U(null, 2, 5, V, [Bo, this.Oa], null), new U(null, 2, 5, V, [Ev, this.V], null), new U(null, 2, 5, V, [Pn, this.X], null), new U(null, 2, 5, V, [vo, this.ea], null), new U(null, 2, 5, V, [vs, this.ca], null), new U(null, 2, 5, V, [qs, this.aa], null), new U(null, 2, 5, V, [Hr, this.ga], null), new U(null, 2, 5, V, 
  [Cu, this.ia], null), new U(null, 2, 5, V, [Ku, this.ha], null)], null), this.l));
};
k.L = function() {
  return this.o;
};
k.ma = function() {
  return new VH(this.O, this.ba, this.Oa, this.V, this.X, this.ea, this.ca, this.aa, this.ga, this.ia, this.ha, this.o, this.l, this.A);
};
k.Z = function() {
  return 11 + J(this.l);
};
k.zf = function() {
  var a = QA(this.O), b = (this.ga - this.aa) / this.X;
  return a < b ? a : b;
};
k.vf = function(a, b, c) {
  c = FH(this, c);
  a = O.j(c, 0, null);
  c = O.j(c, 1, null);
  var d = EH(this);
  return UH(b, new n(null, 4, [Vt, a, Nl, c - 5, Mn, this.V + 1, Xr, 10 + Xr.g(d)], null), this.ha);
};
k.uf = function() {
  return new U(null, 2, 5, V, [this.V, this.X], null);
};
k.tf = function(a, b, c) {
  c = GH(this, c);
  a = O.j(c, 0, null);
  c = O.j(c, 1, null);
  if (q(this.ia)) {
    var d = this.V * this.ea * .5;
    b = SH(b, a + d, c + d, d);
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
  return 0 <= a && a <= d.Oa && 0 <= f && f <= IH(this) ? new U(null, 2, 5, V, [a, g], null) : null;
};
k.wf = function(a, b, c, d) {
  a = FH(this, c);
  O.j(a, 0, null);
  a = O.j(a, 1, null);
  d = GH(this, d);
  O.j(d, 0, null);
  d = O.j(d, 1, null);
  c = EH(this);
  return UH(b, new n(null, 4, [Vt, Vt.g(c) - 5, Nl, a + d, Mn, Mn.g(c) + 10, Xr, this.X + 1], null), this.ha);
};
k.xf = function() {
  var a = this.ca, b = this.aa, c = this.Oa * this.V, d = this.ga, e = QA(this.O) * this.X;
  return new n(null, 4, [Vt, a, Nl, b, Mn, c, Xr, d < e ? d : e], null);
};
k.S = function() {
  var a = this.A;
  return null != a ? a : this.A = a = ig(this);
};
k.J = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && Pi(this, b) : b) ? !0 : !1;
};
k.Ra = function(a, b) {
  return Df(new sk(null, new n(null, 11, [Hm, null, wn, null, Pn, null, vo, null, Bo, null, Hr, null, qs, null, vs, null, Cu, null, Ku, null, Ev, null], null), null), b) ? bf.h(Me(Sh.h(aj, this), this.o), b) : new VH(this.O, this.ba, this.Oa, this.V, this.X, this.ea, this.ca, this.aa, this.ga, this.ia, this.ha, this.o, $g(bf.h(this.l, b)), null);
};
k.za = function(a, b, c) {
  return q(X.h ? X.h(wn, b) : X.call(null, wn, b)) ? new VH(c, this.ba, this.Oa, this.V, this.X, this.ea, this.ca, this.aa, this.ga, this.ia, this.ha, this.o, this.l, null) : q(X.h ? X.h(Hm, b) : X.call(null, Hm, b)) ? new VH(this.O, c, this.Oa, this.V, this.X, this.ea, this.ca, this.aa, this.ga, this.ia, this.ha, this.o, this.l, null) : q(X.h ? X.h(Bo, b) : X.call(null, Bo, b)) ? new VH(this.O, this.ba, c, this.V, this.X, this.ea, this.ca, this.aa, this.ga, this.ia, this.ha, this.o, this.l, null) : 
  q(X.h ? X.h(Ev, b) : X.call(null, Ev, b)) ? new VH(this.O, this.ba, this.Oa, c, this.X, this.ea, this.ca, this.aa, this.ga, this.ia, this.ha, this.o, this.l, null) : q(X.h ? X.h(Pn, b) : X.call(null, Pn, b)) ? new VH(this.O, this.ba, this.Oa, this.V, c, this.ea, this.ca, this.aa, this.ga, this.ia, this.ha, this.o, this.l, null) : q(X.h ? X.h(vo, b) : X.call(null, vo, b)) ? new VH(this.O, this.ba, this.Oa, this.V, this.X, c, this.ca, this.aa, this.ga, this.ia, this.ha, this.o, this.l, null) : q(X.h ? 
  X.h(vs, b) : X.call(null, vs, b)) ? new VH(this.O, this.ba, this.Oa, this.V, this.X, this.ea, c, this.aa, this.ga, this.ia, this.ha, this.o, this.l, null) : q(X.h ? X.h(qs, b) : X.call(null, qs, b)) ? new VH(this.O, this.ba, this.Oa, this.V, this.X, this.ea, this.ca, c, this.ga, this.ia, this.ha, this.o, this.l, null) : q(X.h ? X.h(Hr, b) : X.call(null, Hr, b)) ? new VH(this.O, this.ba, this.Oa, this.V, this.X, this.ea, this.ca, this.aa, c, this.ia, this.ha, this.o, this.l, null) : q(X.h ? X.h(Cu, 
  b) : X.call(null, Cu, b)) ? new VH(this.O, this.ba, this.Oa, this.V, this.X, this.ea, this.ca, this.aa, this.ga, c, this.ha, this.o, this.l, null) : q(X.h ? X.h(Ku, b) : X.call(null, Ku, b)) ? new VH(this.O, this.ba, this.Oa, this.V, this.X, this.ea, this.ca, this.aa, this.ga, this.ia, c, this.o, this.l, null) : new VH(this.O, this.ba, this.Oa, this.V, this.X, this.ea, this.ca, this.aa, this.ga, this.ia, this.ha, this.o, Q.j(this.l, b, c), null);
};
k.W = function() {
  return A(Rg.h(new U(null, 11, 5, V, [new U(null, 2, 5, V, [wn, this.O], null), new U(null, 2, 5, V, [Hm, this.ba], null), new U(null, 2, 5, V, [Bo, this.Oa], null), new U(null, 2, 5, V, [Ev, this.V], null), new U(null, 2, 5, V, [Pn, this.X], null), new U(null, 2, 5, V, [vo, this.ea], null), new U(null, 2, 5, V, [vs, this.ca], null), new U(null, 2, 5, V, [qs, this.aa], null), new U(null, 2, 5, V, [Hr, this.ga], null), new U(null, 2, 5, V, [Cu, this.ia], null), new U(null, 2, 5, V, [Ku, this.ha], 
  null)], null), this.l));
};
k.M = function(a, b) {
  return new VH(this.O, this.ba, this.Oa, this.V, this.X, this.ea, this.ca, this.aa, this.ga, this.ia, this.ha, b, this.l, this.A);
};
k.Y = function(a, b) {
  return nf(b) ? vc(this, v.h(b, 0), v.h(b, 1)) : Rb.j(dc, this, b);
};
function WH(a) {
  return new VH(wn.g(a), Hm.g(a), Bo.g(a), Ev.g(a), Pn.g(a), vo.g(a), vs.g(a), qs.g(a), Hr.g(a), Cu.g(a), Ku.g(a), null, bf.k(a, wn, G([Hm, Bo, Ev, Pn, vo, vs, qs, Hr, Cu, Ku], 0)));
}
function XH(a, b, c) {
  var d = Bf(c) ? R.h(kh, c) : c;
  c = P.h(d, Ku);
  var e = P.h(d, qv), f = P.h(d, ar), g = P.h(d, Zt), d = P.h(d, Bo);
  return WH(af([Hm, wn, Pn, vo, Bo, Hr, qs, vs, Cu, Ku, Ev], [0, a, f, e, d, 900, 30, b, !1, c, g]));
}
function YH(a, b, c, d, e, f, g, h, l, p, s, t) {
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
k = YH.prototype;
k.N = function(a, b) {
  return rc.j(this, b, null);
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
  return Ok(b, function() {
    return function(a) {
      return Ok(b, Uk, "", " ", "", c, a);
    };
  }(this), "#comportexviz.viz-layouts.Grid2dLayout{", ", ", "}", c, Rg.h(new U(null, 10, 5, V, [new U(null, 2, 5, V, [wn, this.O], null), new U(null, 2, 5, V, [Hm, this.ba], null), new U(null, 2, 5, V, [Ev, this.V], null), new U(null, 2, 5, V, [Pn, this.X], null), new U(null, 2, 5, V, [vo, this.ea], null), new U(null, 2, 5, V, [vs, this.ca], null), new U(null, 2, 5, V, [qs, this.aa], null), new U(null, 2, 5, V, [Hr, this.ga], null), new U(null, 2, 5, V, [Cu, this.ia], null), new U(null, 2, 5, V, 
  [Ku, this.ha], null)], null), this.l));
};
k.L = function() {
  return this.o;
};
k.ma = function() {
  return new YH(this.O, this.ba, this.V, this.X, this.ea, this.ca, this.aa, this.ga, this.ia, this.ha, this.o, this.l, this.A);
};
k.Z = function() {
  return 10 + J(this.l);
};
k.zf = function() {
  var a = KA(this.O), b = O.j(a, 0, null), a = O.j(a, 1, null), c = (this.ga - this.aa) / this.X;
  return b * (a < c ? a : c);
};
k.vf = function(a, b, c) {
  c = FH(this, c);
  a = O.j(c, 0, null);
  c = O.j(c, 1, null);
  var d = EH(this);
  return UH(b, new n(null, 4, [Vt, a - 5, Nl, c - 5, Mn, 10 + Mn.g(d), Xr, 10 + Xr.g(d)], null), this.ha);
};
k.uf = function() {
  return new U(null, 2, 5, V, [this.V, this.X], null);
};
k.tf = function(a, b, c) {
  c = GH(this, c);
  a = O.j(c, 0, null);
  c = O.j(c, 1, null);
  if (q(this.ia)) {
    var d = this.V * this.ea * .5;
    b = SH(b, a + d, c + d, d);
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
  var c = LA(this.O, b + this.ba), d = O.j(c, 0, null), c = O.j(c, 1, null);
  return new U(null, 2, 5, V, [d * this.V, c * this.X], null);
};
k.sf = function(a, b, c) {
  var d = this, e = KA(d.O);
  a = O.j(e, 0, null);
  var e = O.j(e, 1, null), f = function() {
    var a = (b - d.ca) / d.V;
    return Math.floor.g ? Math.floor.g(a) : Math.floor.call(null, a);
  }(), g = function() {
    var a = (c - d.aa) / d.X;
    return Math.floor.g ? Math.floor.g(a) : Math.floor.call(null, a);
  }();
  return 0 <= f && f <= a - 1 && 0 <= g && g <= e - 1 ? (a = MA(d.O, new U(null, 2, 5, V, [f, g], null)) - d.ba, new U(null, 2, 5, V, [0, a], null)) : null;
};
k.wf = function(a, b, c, d) {
  c = FH(this, c);
  a = O.j(c, 0, null);
  c = O.j(c, 1, null);
  var e = GH(this, d);
  d = O.j(e, 0, null);
  e = O.j(e, 1, null);
  EH(this);
  return UH(b, new n(null, 4, [Vt, a + d, Nl, c + e, Mn, this.V + 1, Xr, this.X + 1], null), this.ha);
};
k.xf = function() {
  var a = KA(this.O), b = O.j(a, 0, null), c = O.j(a, 1, null), a = this.ga, c = c * this.X;
  return new n(null, 4, [Vt, this.ca, Nl, this.aa, Mn, b * this.V, Xr, a < c ? a : c], null);
};
k.S = function() {
  var a = this.A;
  return null != a ? a : this.A = a = ig(this);
};
k.J = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && Pi(this, b) : b) ? !0 : !1;
};
k.Ra = function(a, b) {
  return Df(new sk(null, new n(null, 10, [Hm, null, wn, null, Pn, null, vo, null, Hr, null, qs, null, vs, null, Cu, null, Ku, null, Ev, null], null), null), b) ? bf.h(Me(Sh.h(aj, this), this.o), b) : new YH(this.O, this.ba, this.V, this.X, this.ea, this.ca, this.aa, this.ga, this.ia, this.ha, this.o, $g(bf.h(this.l, b)), null);
};
k.za = function(a, b, c) {
  return q(X.h ? X.h(wn, b) : X.call(null, wn, b)) ? new YH(c, this.ba, this.V, this.X, this.ea, this.ca, this.aa, this.ga, this.ia, this.ha, this.o, this.l, null) : q(X.h ? X.h(Hm, b) : X.call(null, Hm, b)) ? new YH(this.O, c, this.V, this.X, this.ea, this.ca, this.aa, this.ga, this.ia, this.ha, this.o, this.l, null) : q(X.h ? X.h(Ev, b) : X.call(null, Ev, b)) ? new YH(this.O, this.ba, c, this.X, this.ea, this.ca, this.aa, this.ga, this.ia, this.ha, this.o, this.l, null) : q(X.h ? X.h(Pn, b) : X.call(null, 
  Pn, b)) ? new YH(this.O, this.ba, this.V, c, this.ea, this.ca, this.aa, this.ga, this.ia, this.ha, this.o, this.l, null) : q(X.h ? X.h(vo, b) : X.call(null, vo, b)) ? new YH(this.O, this.ba, this.V, this.X, c, this.ca, this.aa, this.ga, this.ia, this.ha, this.o, this.l, null) : q(X.h ? X.h(vs, b) : X.call(null, vs, b)) ? new YH(this.O, this.ba, this.V, this.X, this.ea, c, this.aa, this.ga, this.ia, this.ha, this.o, this.l, null) : q(X.h ? X.h(qs, b) : X.call(null, qs, b)) ? new YH(this.O, this.ba, 
  this.V, this.X, this.ea, this.ca, c, this.ga, this.ia, this.ha, this.o, this.l, null) : q(X.h ? X.h(Hr, b) : X.call(null, Hr, b)) ? new YH(this.O, this.ba, this.V, this.X, this.ea, this.ca, this.aa, c, this.ia, this.ha, this.o, this.l, null) : q(X.h ? X.h(Cu, b) : X.call(null, Cu, b)) ? new YH(this.O, this.ba, this.V, this.X, this.ea, this.ca, this.aa, this.ga, c, this.ha, this.o, this.l, null) : q(X.h ? X.h(Ku, b) : X.call(null, Ku, b)) ? new YH(this.O, this.ba, this.V, this.X, this.ea, this.ca, 
  this.aa, this.ga, this.ia, c, this.o, this.l, null) : new YH(this.O, this.ba, this.V, this.X, this.ea, this.ca, this.aa, this.ga, this.ia, this.ha, this.o, Q.j(this.l, b, c), null);
};
k.W = function() {
  return A(Rg.h(new U(null, 10, 5, V, [new U(null, 2, 5, V, [wn, this.O], null), new U(null, 2, 5, V, [Hm, this.ba], null), new U(null, 2, 5, V, [Ev, this.V], null), new U(null, 2, 5, V, [Pn, this.X], null), new U(null, 2, 5, V, [vo, this.ea], null), new U(null, 2, 5, V, [vs, this.ca], null), new U(null, 2, 5, V, [qs, this.aa], null), new U(null, 2, 5, V, [Hr, this.ga], null), new U(null, 2, 5, V, [Cu, this.ia], null), new U(null, 2, 5, V, [Ku, this.ha], null)], null), this.l));
};
k.M = function(a, b) {
  return new YH(this.O, this.ba, this.V, this.X, this.ea, this.ca, this.aa, this.ga, this.ia, this.ha, b, this.l, this.A);
};
k.Y = function(a, b) {
  return nf(b) ? vc(this, v.h(b, 0), v.h(b, 1)) : Rb.j(dc, this, b);
};
function ZH(a) {
  return new YH(wn.g(a), Hm.g(a), Ev.g(a), Pn.g(a), vo.g(a), vs.g(a), qs.g(a), Hr.g(a), Cu.g(a), Ku.g(a), null, bf.k(a, wn, G([Hm, Ev, Pn, vo, vs, qs, Hr, Cu, Ku], 0)));
}
function $H(a, b, c) {
  var d = Bf(c) ? R.h(kh, c) : c;
  c = P.h(d, Ku);
  var e = P.h(d, qv), f = P.h(d, ar), d = P.h(d, Zt);
  return ZH(af([Hm, wn, Pn, vo, Hr, qs, vs, Cu, Ku, Ev], [0, a, f, e, 900, 30, b, !1, c, d]));
}
;var aI, bI = function() {
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
    return "hsla(" + u.g(h) + "," + u.g(Yf(100 * b)) + "%," + u.g(Yf(100 * c)) + "%," + u.g(g) + ")";
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
}(), $ = af([Ml, Bm, Lm, Zm, yn, lo, xr, bs, cu, Eu], ["white", bI.v(40, 1, .5, .75), bI.v(Xn, 1, .5, .4), "white", bI.v(xn, 1, .75, .5), "white", bI.j(wu, 1, .4), bI.j(is, 1, .5), bI.v(js, 1, .5, .5), "black"]), cI, dI = new n(null, 5, [ju, new n(null, 2, [bs, !0, cu, !0], null), Kn, new n(null, 7, [bs, !0, es, null, hm, null, yo, !0, Lm, !0, Bm, !1, Im, 0], null), Zl, new n(null, 4, [bs, null, Ml, null, Zm, null, Su, null], null), pn, new n(null, 5, [Yr, er, bs, !0, Ml, null, Zm, null, Su, null], 
null), Lt, af([Tl, Gm, Dn, Fn, Gn, Bo, ar, ps, Zt, Ku, ov, qv, yv], [30, 50, 10, 60, .85, 25, 3, 150, 3, yn.g($), 5, .85, 10])], null);
cI = mh.g ? mh.g(dI) : mh.call(null, dI);
var eI = mh.g ? mh.g(25) : mh.call(null, 25), fI, gI = Ye;
fI = mh.g ? mh.g(gI) : mh.call(null, gI);
var hI = mh.g ? mh.g(null) : mh.call(null, null);
function iI(a, b, c, d) {
  c = FH(b, c);
  b = O.j(c, 0, null);
  c = O.j(c, 1, null);
  CH.v(a, d, b, c);
}
function jI(a) {
  ph.v(hI, Yh, new U(null, 1, 5, V, [fo], null), function(b) {
    return Th.h(function(b) {
      var d = IH(b), e = mv.g(b);
      return Yh.j(b, new U(null, 1, 5, V, [Hm], null), function(b, c) {
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
  return ph.v(cI, Yh, new U(null, 2, 5, V, [Kn, Im], null), function(b) {
    return q(a) ? b + 1 : b - 1;
  });
}
function kI(a, b, c, d, e, f, g, h) {
  pH(a);
  a.lineWidth = 1;
  zH(a, 1);
  for (var l = bv.g(b), p = Pq.g(l), s = q(f) ? new U(null, 1, 5, V, [f], null) : mB(Pu.g(b)), t = IB.g(d), w = JB.g(d), B = Vh.h(h, new U(null, 2, 5, V, [Zl, Ml], null)), z = Vh.h(h, new U(null, 2, 5, V, [Zl, Zm], null)), D = Vh.h(h, new U(null, 2, 5, V, [Zl, Su], null)), K = A(s), L = null, I = 0, M = 0;;) {
    if (M < I) {
      for (var T = L.H(null, M), ba = A(Rg.k(q(z) ? new U(null, 1, 5, V, [Zm], null) : null, q(B) ? new U(null, 1, 5, V, [Eu], null) : null, G([new U(null, 2, 5, V, [bs, xr], null)], 0))), N = null, ua = 0, Y = 0;;) {
        if (Y < ua) {
          var fa = N.H(null, Y), ia = tB(p, T), pa = qk(ia, uB(p, T)), xa = function() {
            switch(fa instanceof W ? fa.ja : null) {
              case "disconnected":
                return R.j(bf, ia, Yi(pa));
              case "inactive-syn":
                return R.j(bf, pa, t);
              case "active-predicted":
                return qk(pa, w);
              case "active":
                return qk(pa, t);
              default:
                throw Error("No matching clause: " + u.g(fa));;
            }
          }(), wa = PH(c, T, g), Ca = O.j(wa, 0, null), Da = O.j(wa, 1, null);
          yH(a, function() {
            var a = fa;
            return $.g ? $.g(a) : $.call(null, a);
          }());
          for (var ma = A(xa), ya = null, Ja = 0, sa = 0;;) {
            if (sa < Ja) {
              var Na = ya.H(null, sa), Cb = O.j(Na, 0, null), ab = O.j(Na, 1, null), wb = DB(d, Cb), bb = O.j(wb, 0, null);
              O.j(wb, 1, null);
              var za = PH(e, bb, g), ld = O.j(za, 0, null), Jc = O.j(za, 1, null), sc = a;
              zH(sc, q(D) ? ab : 1);
              oH(sc);
              sc.moveTo(Ca - 1, Da);
              sc.lineTo(ld + 1, Jc);
              rH(sc);
              sa += 1;
            } else {
              var qh = A(ma);
              if (qh) {
                var wc = qh;
                if (S(wc)) {
                  var da = x(wc), hd = y(wc), xc = da, Jd = J(da), ma = hd, ya = xc, Ja = Jd
                } else {
                  var xd = C(wc), ee = O.j(xd, 0, null), yc = O.j(xd, 1, null), nb = DB(d, ee), lc = O.j(nb, 0, null);
                  O.j(nb, 1, null);
                  var mc = PH(e, lc, g), nc = O.j(mc, 0, null), ve = O.j(mc, 1, null), Kd = a;
                  zH(Kd, q(D) ? yc : 1);
                  oH(Kd);
                  Kd.moveTo(Ca - 1, Da);
                  Kd.lineTo(nc + 1, ve);
                  rH(Kd);
                  ma = F(wc);
                  ya = null;
                  Ja = 0;
                }
                sa = 0;
              } else {
                break;
              }
            }
          }
          Y += 1;
        } else {
          var we = A(ba);
          if (we) {
            var Fc = we;
            if (S(Fc)) {
              var Pe = x(Fc), Ld = y(Fc), Jb = Pe, Vb = J(Pe), ba = Ld, N = Jb, ua = Vb
            } else {
              var Rc = C(Fc), id = tB(p, T), Qe = qk(id, uB(p, T)), yd = function() {
                switch(Rc instanceof W ? Rc.ja : null) {
                  case "disconnected":
                    return R.j(bf, id, Yi(Qe));
                  case "inactive-syn":
                    return R.j(bf, Qe, t);
                  case "active-predicted":
                    return qk(Qe, w);
                  case "active":
                    return qk(Qe, t);
                  default:
                    throw Error("No matching clause: " + u.g(Rc));;
                }
              }(), Md = PH(c, T, g), Nd = O.j(Md, 0, null), fe = O.j(Md, 1, null);
              yH(a, function() {
                var a = Rc;
                return $.g ? $.g(a) : $.call(null, a);
              }());
              for (var Sc = A(yd), kb = null, zc = 0, xe = 0;;) {
                if (xe < zc) {
                  var ye = kb.H(null, xe), rf = O.j(ye, 0, null), ze = O.j(ye, 1, null), ha = DB(d, rf), Ae = O.j(ha, 0, null);
                  O.j(ha, 1, null);
                  var ge = PH(e, Ae, g), Be = O.j(ge, 0, null), Gc = O.j(ge, 1, null), Hc = a;
                  zH(Hc, q(D) ? ze : 1);
                  oH(Hc);
                  Hc.moveTo(Nd - 1, fe);
                  Hc.lineTo(Be + 1, Gc);
                  rH(Hc);
                  xe += 1;
                } else {
                  var gc = A(Sc);
                  if (gc) {
                    var Kb = gc;
                    if (S(Kb)) {
                      var he = x(Kb), jd = y(Kb), Ac = he, Lb = J(he), Sc = jd, kb = Ac, zc = Lb
                    } else {
                      var hc = C(Kb), sf = O.j(hc, 0, null), Ag = O.j(hc, 1, null), Ce = DB(d, sf), De = O.j(Ce, 0, null);
                      O.j(Ce, 1, null);
                      var ub = PH(e, De, g), Ha = O.j(ub, 0, null), Od = O.j(ub, 1, null), Wb = a;
                      zH(Wb, q(D) ? Ag : 1);
                      oH(Wb);
                      Wb.moveTo(Nd - 1, fe);
                      Wb.lineTo(Ha + 1, Od);
                      rH(Wb);
                      Sc = F(Kb);
                      kb = null;
                      zc = 0;
                    }
                    xe = 0;
                  } else {
                    break;
                  }
                }
              }
              ba = F(Fc);
              N = null;
              ua = 0;
            }
            Y = 0;
          } else {
            break;
          }
        }
      }
      M += 1;
    } else {
      var oc = A(K);
      if (oc) {
        var Pd = oc;
        if (S(Pd)) {
          var Re = x(Pd), Ee = y(Pd), Bg = Re, tf = J(Re), K = Ee, L = Bg, I = tf
        } else {
          for (var kd = C(Pd), Fe = A(Rg.k(q(z) ? new U(null, 1, 5, V, [Zm], null) : null, q(B) ? new U(null, 1, 5, V, [Eu], null) : null, G([new U(null, 2, 5, V, [bs, xr], null)], 0))), Tf = null, Se = 0, pc = 0;;) {
            if (pc < Se) {
              var uf = Tf.H(null, pc), Qd = tB(p, kd), Te = qk(Qd, uB(p, kd)), Cg = function() {
                switch(uf instanceof W ? uf.ja : null) {
                  case "disconnected":
                    return R.j(bf, Qd, Yi(Te));
                  case "inactive-syn":
                    return R.j(bf, Te, t);
                  case "active-predicted":
                    return qk(Te, w);
                  case "active":
                    return qk(Te, t);
                  default:
                    throw Error("No matching clause: " + u.g(uf));;
                }
              }(), Ue = PH(c, kd, g), ie = O.j(Ue, 0, null), zd = O.j(Ue, 1, null);
              yH(a, function() {
                var a = uf;
                return $.g ? $.g(a) : $.call(null, a);
              }());
              for (var vf = A(Cg), wf = null, je = 0, Tc = 0;;) {
                if (Tc < je) {
                  var Uf = wf.H(null, Tc), Vf = O.j(Uf, 0, null), Ve = O.j(Uf, 1, null), xf = DB(d, Vf), Xj = O.j(xf, 0, null);
                  O.j(xf, 1, null);
                  var rh = PH(e, Xj, g), ke = O.j(rh, 0, null), We = O.j(rh, 1, null), yf = a;
                  zH(yf, q(D) ? Ve : 1);
                  oH(yf);
                  yf.moveTo(ie - 1, zd);
                  yf.lineTo(ke + 1, We);
                  rH(yf);
                  Tc += 1;
                } else {
                  var Wf = A(vf);
                  if (Wf) {
                    var Xf = Wf;
                    if (S(Xf)) {
                      var si = x(Xf), kl = y(Xf), ll = si, Yj = J(si), vf = kl, wf = ll, je = Yj
                    } else {
                      var Zj = C(Xf), Uc = O.j(Zj, 0, null), Rd = O.j(Zj, 1, null), ti = DB(d, Uc), ui = O.j(ti, 0, null);
                      O.j(ti, 1, null);
                      var ml = PH(e, ui, g), Ho = O.j(ml, 0, null), Io = O.j(ml, 1, null), vi = a;
                      zH(vi, q(D) ? Rd : 1);
                      oH(vi);
                      vi.moveTo(ie - 1, zd);
                      vi.lineTo(Ho + 1, Io);
                      rH(vi);
                      vf = F(Xf);
                      wf = null;
                      je = 0;
                    }
                    Tc = 0;
                  } else {
                    break;
                  }
                }
              }
              pc += 1;
            } else {
              var ak = A(Fe);
              if (ak) {
                var sh = ak;
                if (S(sh)) {
                  var nl = x(sh), Jo = y(sh), an = nl, bn = J(nl), Fe = Jo, Tf = an, Se = bn
                } else {
                  var wi = C(sh), th = tB(p, kd), uh = qk(th, uB(p, kd)), xi = function() {
                    switch(wi instanceof W ? wi.ja : null) {
                      case "disconnected":
                        return R.j(bf, th, Yi(uh));
                      case "inactive-syn":
                        return R.j(bf, uh, t);
                      case "active-predicted":
                        return qk(uh, w);
                      case "active":
                        return qk(uh, t);
                      default:
                        throw Error("No matching clause: " + u.g(wi));;
                    }
                  }(), Dg = PH(c, kd, g), cn = O.j(Dg, 0, null), dn = O.j(Dg, 1, null);
                  yH(a, function() {
                    var a = wi;
                    return $.g ? $.g(a) : $.call(null, a);
                  }());
                  for (var ol = A(xi), pl = null, ql = 0, Eg = 0;;) {
                    if (Eg < ql) {
                      var yi = pl.H(null, Eg), bk = O.j(yi, 0, null), zi = O.j(yi, 1, null), rl = DB(d, bk), sl = O.j(rl, 0, null);
                      O.j(rl, 1, null);
                      var tl = PH(e, sl, g), en = O.j(tl, 0, null), ck = O.j(tl, 1, null), Ai = a;
                      zH(Ai, q(D) ? zi : 1);
                      oH(Ai);
                      Ai.moveTo(cn - 1, dn);
                      Ai.lineTo(en + 1, ck);
                      rH(Ai);
                      Eg += 1;
                    } else {
                      var ul = A(ol);
                      if (ul) {
                        var zf = ul;
                        if (S(zf)) {
                          var vl = x(zf), vh = y(zf), wl = vl, Ko = J(vl), ol = vh, pl = wl, ql = Ko
                        } else {
                          var fn = C(zf), gn = O.j(fn, 0, null), xl = O.j(fn, 1, null), dk = DB(d, gn), Lo = O.j(dk, 0, null);
                          O.j(dk, 1, null);
                          var ek = PH(e, Lo, g), fk = O.j(ek, 0, null), Mo = O.j(ek, 1, null), Bi = a;
                          zH(Bi, q(D) ? xl : 1);
                          oH(Bi);
                          Bi.moveTo(cn - 1, dn);
                          Bi.lineTo(fk + 1, Mo);
                          rH(Bi);
                          ol = F(zf);
                          pl = null;
                          ql = 0;
                        }
                        Eg = 0;
                      } else {
                        break;
                      }
                    }
                  }
                  Fe = F(sh);
                  Tf = null;
                  Se = 0;
                }
                pc = 0;
              } else {
                break;
              }
            }
          }
          K = F(Pd);
          L = null;
          I = 0;
        }
        M = 0;
      } else {
        break;
      }
    }
  }
  qH(a);
}
function lI(a, b, c) {
  return Kl(function(a) {
    var e = O.j(a, 0, null);
    a = O.j(a, 1, null);
    return new U(null, 2, 5, V, [a >= c ? po : Zm, q(b.g ? b.g(e) : b.call(null, e)) ? bs : Eu], null);
  }, a);
}
function mI(a, b, c) {
  if (a ? a.Hd : a) {
    return a.Hd(a, b, c);
  }
  var d;
  d = mI[m(null == a ? null : a)];
  if (!d && (d = mI._, !d)) {
    throw r("PCellsSegmentsLayout.seg-xy", a);
  }
  return d.call(null, a, b, c);
}
function nI(a, b) {
  if (a ? a.Be : a) {
    return a.Be(a, b);
  }
  var c;
  c = nI[m(null == a ? null : a)];
  if (!c && (c = nI._, !c)) {
    throw r("PCellsSegmentsLayout.cell-xy", a);
  }
  return c.call(null, a, b);
}
function oI(a, b, c) {
  a = Ch.j(Ci, Gh.g(a), Fk.g(b));
  return Th.h(function() {
    return function(a) {
      return ng(Fh.h(hf, ng(zB(c, a))));
    };
  }(a), a);
}
var qI = function pI(b, c, d, e, f, g) {
  var h = Ch.h(J, c), l = Ch.h(gh.h(Rf, 1), h), p = R.h(Nf, l), s = f + Vh.h(g, new U(null, 2, 5, V, [Lt, Gm], null)), t = Vh.h(g, new U(null, 2, 5, V, [Lt, ov], null)), w = .5 * t, B = Vh.h(g, new U(null, 2, 5, V, [Lt, yv], null)), z = Vh.h(g, new U(null, 2, 5, V, [Lt, Dn], null)), D = Vh.h(g, new U(null, 2, 5, V, [Lt, Tl], null)), K = .5 * D, L = .95 * window.innerHeight, I = window.pageYOffset + 2 * B, M = PH(d, b, e), T = O.j(M, 0, null), ba = O.j(M, 1, null);
  "undefined" === typeof aI && (aI = function(b, c, d, e, f, g, h, s, l, p, t, w, z, I, B, D, M, K, L, T, ba, Jc, sc) {
    this.Wg = b;
    this.th = c;
    this.Yh = d;
    this.Zh = e;
    this.og = f;
    this.bj = g;
    this.oh = h;
    this.rf = s;
    this.Eh = l;
    this.lj = p;
    this.aj = t;
    this.ci = w;
    this.Gi = z;
    this.Dg = I;
    this.qf = B;
    this.Vg = D;
    this.cj = M;
    this.Xh = K;
    this.uh = L;
    this.Yc = T;
    this.ph = ba;
    this.pg = Jc;
    this.qi = sc;
    this.K = 0;
    this.B = 393216;
  }, aI.wb = !0, aI.vb = "comportexviz.viz-canvas/t21654", aI.Bb = function() {
    return function(b, c) {
      return nd(c, "comportexviz.viz-canvas/t21654");
    };
  }(h, l, p, s, t, w, B, z, D, K, L, I, M, T, ba), aI.prototype.Hd = function() {
    return function(b, c, d) {
      b = R.j(Nf, d, Dh.h(c, this.Wg)) / this.Vg;
      return new U(null, 2, 5, V, [this.uh + this.th, this.ph + 30 + b * this.oh], null);
    };
  }(h, l, p, s, t, w, B, z, D, K, L, I, M, T, ba), aI.prototype.Be = function() {
    return function(b, c) {
      var d = mI(this, c, 0);
      O.j(d, 0, null);
      d = O.j(d, 1, null);
      return new U(null, 2, 5, V, [this.pg, d], null);
    };
  }(h, l, p, s, t, w, B, z, D, K, L, I, M, T, ba), aI.prototype.Ce = function() {
    return function(b, c, d) {
      d = nI(this, d);
      b = O.j(d, 0, null);
      d = O.j(d, 1, null);
      oH(c);
      c.moveTo(this.qf + this.Dg + 1, this.rf);
      var e = this.qf, f = (b - e) / 3;
      DH.Ib(c, b - f, this.rf, e + f, d, b, d);
      rH(c);
      return c;
    };
  }(h, l, p, s, t, w, B, z, D, K, L, I, M, T, ba), aI.prototype.fd = function() {
    return function(b, c, d, e) {
      var f = nI(this, d);
      b = O.j(f, 0, null);
      f = O.j(f, 1, null);
      e = mI(this, d, e);
      d = O.j(e, 0, null);
      e = O.j(e, 1, null);
      oH(c);
      c.moveTo(d, e);
      c.lineTo(b + this.og, f);
      rH(c);
      return c;
    };
  }(h, l, p, s, t, w, B, z, D, K, L, I, M, T, ba), aI.prototype.L = function() {
    return function() {
      return this.qi;
    };
  }(h, l, p, s, t, w, B, z, D, K, L, I, M, T, ba), aI.prototype.M = function() {
    return function(b, c) {
      return new aI(this.Wg, this.th, this.Yh, this.Zh, this.og, this.bj, this.oh, this.rf, this.Eh, this.lj, this.aj, this.ci, this.Gi, this.Dg, this.qf, this.Vg, this.cj, this.Xh, this.uh, this.Yc, this.ph, this.pg, c);
    };
  }(h, l, p, s, t, w, B, z, D, K, L, I, M, T, ba));
  return new aI(l, K, t, d, B, D, L, ba, pI, M, z, e, h, w, T, p, c, b, s, g, I, f, null);
};
function rI(a, b, c, d, e, f, g, h) {
  pH(a);
  var l = WA(c), p = Wn.g(l), s = Jn.g(l), t = bv.g(b), w = Pu.g(b), B = bv.g(c), z = Pu.g(c), D = nB(w), K = nB(z), L = rB(z), I = In.g(w), M = vt.g(w), T = P.h(mB(w), e), ba = P.h(lB(w), e), N = rs.g(w), ua = oI(e, kB(w), N), Y = qI(e, ua, d, f, g, h), fa = Vh.h(h, new U(null, 2, 5, V, [Lt, ov], null)), ia = Vh.h(h, new U(null, 2, 5, V, [Lt, yv], null)), pa = Vh.h(h, new U(null, 2, 5, V, [Lt, Dn], null)), xa = Vh.h(h, new U(null, 2, 5, V, [Lt, Tl], null)), wa = .5 * xa;
  a.lineWidth = fa;
  yH(a, lo.g($));
  for (var Ca = A(hh(Ci, ua)), Da = null, ma = 0, ya = 0;;) {
    if (ya < ma) {
      var Ja = Da.H(null, ya), sa = O.j(Ja, 0, null), Na = O.j(Ja, 1, null);
      Y.Ce(null, a, sa);
      for (var Cb = A(Fk.g(J(Na))), ab = null, wb = 0, bb = 0;;) {
        if (bb < wb) {
          var za = ab.H(null, bb);
          Y.fd(null, a, sa, za);
          bb += 1;
        } else {
          var ld = A(Cb);
          if (ld) {
            var Jc = ld;
            if (S(Jc)) {
              var sc = x(Jc), qh = y(Jc), wc = sc, da = J(sc), Cb = qh, ab = wc, wb = da
            } else {
              var hd = C(Jc);
              Y.fd(null, a, sa, hd);
              Cb = F(Jc);
              ab = null;
              wb = 0;
            }
            bb = 0;
          } else {
            break;
          }
        }
      }
      ya += 1;
    } else {
      var xc = A(Ca);
      if (xc) {
        var Jd = xc;
        if (S(Jd)) {
          var xd = x(Jd), ee = y(Jd), yc = xd, nb = J(xd), Ca = ee, Da = yc, ma = nb
        } else {
          var lc = C(Jd), mc = O.j(lc, 0, null), nc = O.j(lc, 1, null);
          Y.Ce(null, a, mc);
          for (var ve = A(Fk.g(J(nc))), Kd = null, we = 0, Fc = 0;;) {
            if (Fc < we) {
              var Pe = Kd.H(null, Fc);
              Y.fd(null, a, mc, Pe);
              Fc += 1;
            } else {
              var Ld = A(ve);
              if (Ld) {
                var Jb = Ld;
                if (S(Jb)) {
                  var Vb = x(Jb), Rc = y(Jb), id = Vb, Qe = J(Vb), ve = Rc, Kd = id, we = Qe
                } else {
                  var yd = C(Jb);
                  Y.fd(null, a, mc, yd);
                  ve = F(Jb);
                  Kd = null;
                  we = 0;
                }
                Fc = 0;
              } else {
                break;
              }
            }
          }
          Ca = F(Jd);
          Da = null;
          ma = 0;
        }
        ya = 0;
      } else {
        break;
      }
    }
  }
  for (var Md = A(hh(Ci, ua)), Nd = null, fe = 0, Sc = 0;;) {
    if (Sc < fe) {
      var kb = Nd.H(null, Sc), zc = O.j(kb, 0, null), xe = O.j(kb, 1, null), ye = Y.Be(null, zc), rf = O.j(ye, 0, null), ze = O.j(ye, 1, null), ha = new U(null, 2, 5, V, [e, zc], null), Ae = function() {
        var a = ha;
        return D.g ? D.g(a) : D.call(null, a);
      }(), ge = function() {
        var a = ha;
        return L.g ? L.g(a) : L.call(null, a);
      }(), Be = Ef(M, ha), Gc = function() {
        var a = Ef(I, ha);
        return q(a) ? a : Be;
      }(), Hc = q(Gc) ? Ic(Gc) : null, gc = Th.h(function(a, b, c, d, e, f, g, h, s, l, p, t, w, z, I, N, B, D, M, K, L, Uc, T, Y, ba) {
        return function(a) {
          return lI(a, ba, M);
        };
      }(Md, Nd, fe, Sc, ye, rf, ze, ha, Ae, ge, Be, Gc, Hc, kb, zc, xe, l, p, s, t, w, B, z, D, K, L, I, M, T, ba, N, ua, Y, fa, ia, pa, xa, wa), xe), Kb = function(a, b, c, d, e, f, g, h, s, l, p, t, w, z, I, N, B, D, M) {
        return function(a) {
          var b = new U(null, 2, 5, V, [po, bs], null);
          a = a.g ? a.g(b) : a.call(null, b);
          return J(a) >= M;
        };
      }(Md, Nd, fe, Sc, ye, rf, ze, ha, Ae, ge, Be, Gc, Hc, gc, kb, zc, xe, l, p, s, t, w, B, z, D, K, L, I, M, T, ba, N, ua, Y, fa, ia, pa, xa, wa), he = q(function() {
        var a = Ae;
        return q(a) ? ge : a;
      }()) ? xr : q(ge) ? cu : q(Ae) ? bs : Ml;
      if (q(Ae)) {
        var jd = a;
        yH(jd, bs.g($));
        jd.lineWidth = 2;
        Y.Ce(null, a, zc);
      }
      if (q(Gc)) {
        var Ac = a;
        xH(Ac, yn.g($));
        oH(Ac);
        SH(Ac, rf, ze, ia + 8);
        Ac.fill();
      }
      var Lb = a;
      xH(Lb, function() {
        var a = he;
        return $.g ? $.g(a) : $.call(null, a);
      }());
      yH(Lb, "black");
      Lb.lineWidth = 1;
      oH(Lb);
      SH(Lb, rf, ze, ia);
      rH(Lb);
      Lb.fill();
      xH(a, "black");
      vH(a, new n(null, 3, [Dv, "cell " + u.g(zc) + u.g(q(Gc) ? "   (learning on " + u.g(q(Hc) ? "segment " + u.g(Hc) : "new segment") + u.g(q(Be) ? " alternatively" : null) + ")" : null), Vt, rf, Nl, ze - ia - 5], null));
      for (var hc = A(hh(Ci, gc)), sf = null, Ag = 0, Ce = 0;;) {
        if (Ce < Ag) {
          var De = sf.H(null, Ce), ub = O.j(De, 0, null), Ha = O.j(De, 1, null), Od = Y.Hd(null, zc, ub), Wb = O.j(Od, 0, null), oc = O.j(Od, 1, null), Pd = J(function() {
            var a = new U(null, 2, 5, V, [po, bs], null);
            return Ha.g ? Ha.g(a) : Ha.call(null, a);
          }()), Re = Pd + J(function() {
            var a = new U(null, 2, 5, V, [po, Ml], null);
            return Ha.g ? Ha.g(a) : Ha.call(null, a);
          }()), Ee = J(function() {
            var a = new U(null, 2, 5, V, [Zm, bs], null);
            return Ha.g ? Ha.g(a) : Ha.call(null, a);
          }()), Bg = Ee + J(function() {
            var a = new U(null, 2, 5, V, [Zm, Ml], null);
            return Ha.g ? Ha.g(a) : Ha.call(null, a);
          }()), tf = function() {
            var a = Pd / p;
            return 1 > a ? a : 1;
          }(), kd = function() {
            var a = Gc;
            return q(a) ? ae.h(ub, Hc) : a;
          }(), Fe = TH(Wb, oc, xa, pa), Tf = TH(Wb, oc, xa + 8, pa + 8);
          if (q(kd)) {
            var Se = a;
            xH(Se, yn.g($));
            uH(Se, Tf);
          }
          var pc = a;
          zH(pc, 1);
          yH(pc, "black");
          pc.lineWidth = 1;
          tH(pc, Fe);
          xH(pc, "white");
          uH(pc, Fe);
          zH(pc, tf);
          xH(pc, bs.g($));
          uH(pc, Fe);
          zH(pc, 1);
          if (Kb(Ha)) {
            var uf = a;
            yH(uf, bs.g($));
            uf.lineWidth = 2;
            Y.fd(null, a, zc, ub);
          }
          xH(a, "black");
          vH(a, new n(null, 3, [Dv, "[" + u.g(ub) + "],  active " + u.g(Pd) + " / " + u.g(Re) + " conn. (" + u.g(Ee) + " / " + u.g(Bg) + " disconn.)", Vt, Wb + 5 + wa, Nl, oc], null));
          a.lineWidth = 1;
          var Qd = Vh.h(h, new U(null, 2, 5, V, [pn, Su], null)), Te = Vh.h(h, new U(null, 2, 5, V, [pn, bs], null)), Cg = Vh.h(h, new U(null, 2, 5, V, [pn, Ml], null)), Ue = Vh.h(h, new U(null, 2, 5, V, [pn, Zm], null)), ie = Vh.h(h, new U(null, 2, 5, V, [pn, Yr], null));
          if (q(function() {
            var a = ae.h(ie, Oq);
            return a ? a : (a = ae.h(ie, er)) ? kd : a;
          }())) {
            for (var zd = A(Rg.h(q(Cg) ? new U(null, 1, 5, V, [Eu], null) : null, q(Te) ? new U(null, 1, 5, V, [bs], null) : null)), vf = null, wf = 0, je = 0;;) {
              if (je < wf) {
                for (var Tc = vf.H(null, je), Uf = A(Rg.h(q(Ue) ? new U(null, 1, 5, V, [Zm], null) : null, new U(null, 1, 5, V, [po], null))), Vf = null, Ve = 0, xf = 0;;) {
                  if (xf < Ve) {
                    var Xj = Vf.H(null, xf), rh = function() {
                      var a = new U(null, 2, 5, V, [Xj, Tc], null);
                      return Ha.g ? Ha.g(a) : Ha.call(null, a);
                    }();
                    yH(a, function() {
                      var a = Tc;
                      return $.g ? $.g(a) : $.call(null, a);
                    }());
                    for (var ke = A(rh), We = null, yf = 0, Wf = 0;;) {
                      if (Wf < yf) {
                        var Xf = We.H(null, Wf), si = O.j(Xf, 0, null), kl = O.j(si, 0, null);
                        O.j(si, 1, null);
                        var ll = O.j(Xf, 1, null), Yj = PH(d, kl, f + 1), Zj = O.j(Yj, 0, null), Uc = O.j(Yj, 1, null), Rd = a;
                        zH(Rd, q(Qd) ? ll : 1);
                        oH(Rd);
                        Rd.moveTo(Wb, oc);
                        Rd.lineTo(Zj + 1, Uc);
                        rH(Rd);
                        Wf += 1;
                      } else {
                        var ti = A(ke);
                        if (ti) {
                          var ui = ti;
                          if (S(ui)) {
                            var ml = x(ui), Ho = y(ui), Io = ml, vi = J(ml), ke = Ho, We = Io, yf = vi
                          } else {
                            var ak = C(ui), sh = O.j(ak, 0, null), nl = O.j(sh, 0, null);
                            O.j(sh, 1, null);
                            var Jo = O.j(ak, 1, null), an = PH(d, nl, f + 1), bn = O.j(an, 0, null), wi = O.j(an, 1, null), th = a;
                            zH(th, q(Qd) ? Jo : 1);
                            oH(th);
                            th.moveTo(Wb, oc);
                            th.lineTo(bn + 1, wi);
                            rH(th);
                            ke = F(ui);
                            We = null;
                            yf = 0;
                          }
                          Wf = 0;
                        } else {
                          break;
                        }
                      }
                    }
                    zH(a, 1);
                    xf += 1;
                  } else {
                    var uh = A(Uf);
                    if (uh) {
                      var xi = uh;
                      if (S(xi)) {
                        var Dg = x(xi), cn = y(xi), dn = Dg, ol = J(Dg), Uf = cn, Vf = dn, Ve = ol
                      } else {
                        var pl = C(xi), ql = function() {
                          var a = new U(null, 2, 5, V, [pl, Tc], null);
                          return Ha.g ? Ha.g(a) : Ha.call(null, a);
                        }();
                        yH(a, function() {
                          var a = Tc;
                          return $.g ? $.g(a) : $.call(null, a);
                        }());
                        for (var Eg = A(ql), yi = null, bk = 0, zi = 0;;) {
                          if (zi < bk) {
                            var rl = yi.H(null, zi), sl = O.j(rl, 0, null), tl = O.j(sl, 0, null);
                            O.j(sl, 1, null);
                            var en = O.j(rl, 1, null), ck = PH(d, tl, f + 1), Ai = O.j(ck, 0, null), ul = O.j(ck, 1, null), zf = a;
                            zH(zf, q(Qd) ? en : 1);
                            oH(zf);
                            zf.moveTo(Wb, oc);
                            zf.lineTo(Ai + 1, ul);
                            rH(zf);
                            zi += 1;
                          } else {
                            var vl = A(Eg);
                            if (vl) {
                              var vh = vl;
                              if (S(vh)) {
                                var wl = x(vh), Ko = y(vh), fn = wl, gn = J(wl), Eg = Ko, yi = fn, bk = gn
                              } else {
                                var xl = C(vh), dk = O.j(xl, 0, null), Lo = O.j(dk, 0, null);
                                O.j(dk, 1, null);
                                var ek = O.j(xl, 1, null), fk = PH(d, Lo, f + 1), Mo = O.j(fk, 0, null), Bi = O.j(fk, 1, null), jl = a;
                                zH(jl, q(Qd) ? ek : 1);
                                oH(jl);
                                jl.moveTo(Wb, oc);
                                jl.lineTo(Mo + 1, Bi);
                                rH(jl);
                                Eg = F(vh);
                                yi = null;
                                bk = 0;
                              }
                              zi = 0;
                            } else {
                              break;
                            }
                          }
                        }
                        zH(a, 1);
                        Uf = F(xi);
                        Vf = null;
                        Ve = 0;
                      }
                      xf = 0;
                    } else {
                      break;
                    }
                  }
                }
                je += 1;
              } else {
                var hn = A(zd);
                if (hn) {
                  var yl = hn;
                  if (S(yl)) {
                    var Fs = x(yl), kx = y(yl), lx = Fs, mx = J(Fs), zd = kx, vf = lx, wf = mx
                  } else {
                    for (var jn = C(yl), No = A(Rg.h(q(Ue) ? new U(null, 1, 5, V, [Zm], null) : null, new U(null, 1, 5, V, [po], null))), Oo = null, Po = 0, zl = 0;;) {
                      if (zl < Po) {
                        var kn = Oo.H(null, zl), nx = function() {
                          var a = new U(null, 2, 5, V, [kn, jn], null);
                          return Ha.g ? Ha.g(a) : Ha.call(null, a);
                        }();
                        yH(a, function() {
                          var a = jn;
                          return $.g ? $.g(a) : $.call(null, a);
                        }());
                        for (var Qo = A(nx), Ro = null, So = 0, Al = 0;;) {
                          if (Al < So) {
                            var Gs = Ro.H(null, Al), Hs = O.j(Gs, 0, null), Bl = O.j(Hs, 0, null);
                            O.j(Hs, 1, null);
                            var Is = O.j(Gs, 1, null), To = PH(d, Bl, f + 1), ox = O.j(To, 0, null), px = O.j(To, 1, null), gk = a;
                            zH(gk, q(Qd) ? Is : 1);
                            oH(gk);
                            gk.moveTo(Wb, oc);
                            gk.lineTo(ox + 1, px);
                            rH(gk);
                            Al += 1;
                          } else {
                            var Js = A(Qo);
                            if (Js) {
                              var wh = Js;
                              if (S(wh)) {
                                var Ks = x(wh), qx = y(wh), rx = Ks, sx = J(Ks), Qo = qx, Ro = rx, So = sx
                              } else {
                                var Uo = C(wh), Vo = O.j(Uo, 0, null), tx = O.j(Vo, 0, null);
                                O.j(Vo, 1, null);
                                var Cl = O.j(Uo, 1, null), Ls = PH(d, tx, f + 1), ux = O.j(Ls, 0, null), Ms = O.j(Ls, 1, null), Dl = a;
                                zH(Dl, q(Qd) ? Cl : 1);
                                oH(Dl);
                                Dl.moveTo(Wb, oc);
                                Dl.lineTo(ux + 1, Ms);
                                rH(Dl);
                                Qo = F(wh);
                                Ro = null;
                                So = 0;
                              }
                              Al = 0;
                            } else {
                              break;
                            }
                          }
                        }
                        zH(a, 1);
                        zl += 1;
                      } else {
                        var Wo = A(No);
                        if (Wo) {
                          var hk = Wo;
                          if (S(hk)) {
                            var Ns = x(hk), Os = y(hk), Ps = Ns, vx = J(Ns), No = Os, Oo = Ps, Po = vx
                          } else {
                            var wx = C(hk), xx = function() {
                              var a = new U(null, 2, 5, V, [wx, jn], null);
                              return Ha.g ? Ha.g(a) : Ha.call(null, a);
                            }();
                            yH(a, function() {
                              var a = jn;
                              return $.g ? $.g(a) : $.call(null, a);
                            }());
                            for (var Xo = A(xx), Yo = null, Zo = 0, ik = 0;;) {
                              if (ik < Zo) {
                                var Qs = Yo.H(null, ik), $o = O.j(Qs, 0, null), Rs = O.j($o, 0, null);
                                O.j($o, 1, null);
                                var yx = O.j(Qs, 1, null), ap = PH(d, Rs, f + 1), zx = O.j(ap, 0, null), Ax = O.j(ap, 1, null), jk = a;
                                zH(jk, q(Qd) ? yx : 1);
                                oH(jk);
                                jk.moveTo(Wb, oc);
                                jk.lineTo(zx + 1, Ax);
                                rH(jk);
                                ik += 1;
                              } else {
                                var bp = A(Xo);
                                if (bp) {
                                  var El = bp;
                                  if (S(El)) {
                                    var cp = x(El), Ss = y(El), Bx = cp, Cx = J(cp), Xo = Ss, Yo = Bx, Zo = Cx
                                  } else {
                                    var Ts = C(El), Us = O.j(Ts, 0, null), Dx = O.j(Us, 0, null);
                                    O.j(Us, 1, null);
                                    var Ex = O.j(Ts, 1, null), Vs = PH(d, Dx, f + 1), Ws = O.j(Vs, 0, null), Xs = O.j(Vs, 1, null), Fl = a;
                                    zH(Fl, q(Qd) ? Ex : 1);
                                    oH(Fl);
                                    Fl.moveTo(Wb, oc);
                                    Fl.lineTo(Ws + 1, Xs);
                                    rH(Fl);
                                    Xo = F(El);
                                    Yo = null;
                                    Zo = 0;
                                  }
                                  ik = 0;
                                } else {
                                  break;
                                }
                              }
                            }
                            zH(a, 1);
                            No = F(hk);
                            Oo = null;
                            Po = 0;
                          }
                          zl = 0;
                        } else {
                          break;
                        }
                      }
                    }
                    zd = F(yl);
                    vf = null;
                    wf = 0;
                  }
                  je = 0;
                } else {
                  break;
                }
              }
            }
          }
          Ce += 1;
        } else {
          var dp = A(hc);
          if (dp) {
            var Gl = dp;
            if (S(Gl)) {
              var Ys = x(Gl), Zs = y(Gl), OM = Ys, PM = J(Ys), hc = Zs, sf = OM, Ag = PM
            } else {
              var HD = C(Gl), $s = O.j(HD, 0, null), Xb = O.j(HD, 1, null), ID = Y.Hd(null, zc, $s), Fg = O.j(ID, 0, null), Gg = O.j(ID, 1, null), Fx = J(function() {
                var a = new U(null, 2, 5, V, [po, bs], null);
                return Xb.g ? Xb.g(a) : Xb.call(null, a);
              }()), QM = Fx + J(function() {
                var a = new U(null, 2, 5, V, [po, Ml], null);
                return Xb.g ? Xb.g(a) : Xb.call(null, a);
              }()), JD = J(function() {
                var a = new U(null, 2, 5, V, [Zm, bs], null);
                return Xb.g ? Xb.g(a) : Xb.call(null, a);
              }()), RM = JD + J(function() {
                var a = new U(null, 2, 5, V, [Zm, Ml], null);
                return Xb.g ? Xb.g(a) : Xb.call(null, a);
              }()), SM = function() {
                var a = Fx / p;
                return 1 > a ? a : 1;
              }(), KD = function() {
                var a = Gc;
                return q(a) ? ae.h($s, Hc) : a;
              }(), Gx = TH(Fg, Gg, xa, pa), TM = TH(Fg, Gg, xa + 8, pa + 8);
              if (q(KD)) {
                var LD = a;
                xH(LD, yn.g($));
                uH(LD, TM);
              }
              var xh = a;
              zH(xh, 1);
              yH(xh, "black");
              xh.lineWidth = 1;
              tH(xh, Gx);
              xH(xh, "white");
              uH(xh, Gx);
              zH(xh, SM);
              xH(xh, bs.g($));
              uH(xh, Gx);
              zH(xh, 1);
              if (Kb(Xb)) {
                var MD = a;
                yH(MD, bs.g($));
                MD.lineWidth = 2;
                Y.fd(null, a, zc, $s);
              }
              xH(a, "black");
              vH(a, new n(null, 3, [Dv, "[" + u.g($s) + "],  active " + u.g(Fx) + " / " + u.g(QM) + " conn. (" + u.g(JD) + " / " + u.g(RM) + " disconn.)", Vt, Fg + 5 + wa, Nl, Gg], null));
              a.lineWidth = 1;
              var kk = Vh.h(h, new U(null, 2, 5, V, [pn, Su], null)), UM = Vh.h(h, new U(null, 2, 5, V, [pn, bs], null)), VM = Vh.h(h, new U(null, 2, 5, V, [pn, Ml], null)), ND = Vh.h(h, new U(null, 2, 5, V, [pn, Zm], null)), OD = Vh.h(h, new U(null, 2, 5, V, [pn, Yr], null));
              if (q(function() {
                var a = ae.h(OD, Oq);
                return a ? a : (a = ae.h(OD, er)) ? KD : a;
              }())) {
                for (var Hx = A(Rg.h(q(VM) ? new U(null, 1, 5, V, [Eu], null) : null, q(UM) ? new U(null, 1, 5, V, [bs], null) : null)), Ix = null, Jx = 0, ep = 0;;) {
                  if (ep < Jx) {
                    for (var at = Ix.H(null, ep), Kx = A(Rg.h(q(ND) ? new U(null, 1, 5, V, [Zm], null) : null, new U(null, 1, 5, V, [po], null))), Lx = null, Mx = 0, fp = 0;;) {
                      if (fp < Mx) {
                        var WM = Lx.H(null, fp), XM = function() {
                          var a = new U(null, 2, 5, V, [WM, at], null);
                          return Xb.g ? Xb.g(a) : Xb.call(null, a);
                        }();
                        yH(a, function() {
                          var a = at;
                          return $.g ? $.g(a) : $.call(null, a);
                        }());
                        for (var Nx = A(XM), Ox = null, Px = 0, gp = 0;;) {
                          if (gp < Px) {
                            var PD = Ox.H(null, gp), QD = O.j(PD, 0, null), YM = O.j(QD, 0, null);
                            O.j(QD, 1, null);
                            var ZM = O.j(PD, 1, null), RD = PH(d, YM, f + 1), $M = O.j(RD, 0, null), aN = O.j(RD, 1, null), hp = a;
                            zH(hp, q(kk) ? ZM : 1);
                            oH(hp);
                            hp.moveTo(Fg, Gg);
                            hp.lineTo($M + 1, aN);
                            rH(hp);
                            gp += 1;
                          } else {
                            var SD = A(Nx);
                            if (SD) {
                              var ip = SD;
                              if (S(ip)) {
                                var TD = x(ip), bN = y(ip), cN = TD, dN = J(TD), Nx = bN, Ox = cN, Px = dN
                              } else {
                                var UD = C(ip), VD = O.j(UD, 0, null), eN = O.j(VD, 0, null);
                                O.j(VD, 1, null);
                                var fN = O.j(UD, 1, null), WD = PH(d, eN, f + 1), gN = O.j(WD, 0, null), hN = O.j(WD, 1, null), jp = a;
                                zH(jp, q(kk) ? fN : 1);
                                oH(jp);
                                jp.moveTo(Fg, Gg);
                                jp.lineTo(gN + 1, hN);
                                rH(jp);
                                Nx = F(ip);
                                Ox = null;
                                Px = 0;
                              }
                              gp = 0;
                            } else {
                              break;
                            }
                          }
                        }
                        zH(a, 1);
                        fp += 1;
                      } else {
                        var XD = A(Kx);
                        if (XD) {
                          var kp = XD;
                          if (S(kp)) {
                            var YD = x(kp), iN = y(kp), jN = YD, kN = J(YD), Kx = iN, Lx = jN, Mx = kN
                          } else {
                            var lN = C(kp), mN = function() {
                              var a = new U(null, 2, 5, V, [lN, at], null);
                              return Xb.g ? Xb.g(a) : Xb.call(null, a);
                            }();
                            yH(a, function() {
                              var a = at;
                              return $.g ? $.g(a) : $.call(null, a);
                            }());
                            for (var Qx = A(mN), Rx = null, Sx = 0, lp = 0;;) {
                              if (lp < Sx) {
                                var ZD = Rx.H(null, lp), $D = O.j(ZD, 0, null), nN = O.j($D, 0, null);
                                O.j($D, 1, null);
                                var oN = O.j(ZD, 1, null), aE = PH(d, nN, f + 1), pN = O.j(aE, 0, null), qN = O.j(aE, 1, null), mp = a;
                                zH(mp, q(kk) ? oN : 1);
                                oH(mp);
                                mp.moveTo(Fg, Gg);
                                mp.lineTo(pN + 1, qN);
                                rH(mp);
                                lp += 1;
                              } else {
                                var bE = A(Qx);
                                if (bE) {
                                  var np = bE;
                                  if (S(np)) {
                                    var cE = x(np), rN = y(np), sN = cE, tN = J(cE), Qx = rN, Rx = sN, Sx = tN
                                  } else {
                                    var dE = C(np), eE = O.j(dE, 0, null), uN = O.j(eE, 0, null);
                                    O.j(eE, 1, null);
                                    var vN = O.j(dE, 1, null), fE = PH(d, uN, f + 1), wN = O.j(fE, 0, null), xN = O.j(fE, 1, null), op = a;
                                    zH(op, q(kk) ? vN : 1);
                                    oH(op);
                                    op.moveTo(Fg, Gg);
                                    op.lineTo(wN + 1, xN);
                                    rH(op);
                                    Qx = F(np);
                                    Rx = null;
                                    Sx = 0;
                                  }
                                  lp = 0;
                                } else {
                                  break;
                                }
                              }
                            }
                            zH(a, 1);
                            Kx = F(kp);
                            Lx = null;
                            Mx = 0;
                          }
                          fp = 0;
                        } else {
                          break;
                        }
                      }
                    }
                    ep += 1;
                  } else {
                    var gE = A(Hx);
                    if (gE) {
                      var pp = gE;
                      if (S(pp)) {
                        var hE = x(pp), yN = y(pp), zN = hE, AN = J(hE), Hx = yN, Ix = zN, Jx = AN
                      } else {
                        for (var bt = C(pp), Tx = A(Rg.h(q(ND) ? new U(null, 1, 5, V, [Zm], null) : null, new U(null, 1, 5, V, [po], null))), Ux = null, Vx = 0, qp = 0;;) {
                          if (qp < Vx) {
                            var BN = Ux.H(null, qp), CN = function() {
                              var a = new U(null, 2, 5, V, [BN, bt], null);
                              return Xb.g ? Xb.g(a) : Xb.call(null, a);
                            }();
                            yH(a, function() {
                              var a = bt;
                              return $.g ? $.g(a) : $.call(null, a);
                            }());
                            for (var Wx = A(CN), Xx = null, Yx = 0, rp = 0;;) {
                              if (rp < Yx) {
                                var iE = Xx.H(null, rp), jE = O.j(iE, 0, null), DN = O.j(jE, 0, null);
                                O.j(jE, 1, null);
                                var EN = O.j(iE, 1, null), kE = PH(d, DN, f + 1), FN = O.j(kE, 0, null), GN = O.j(kE, 1, null), sp = a;
                                zH(sp, q(kk) ? EN : 1);
                                oH(sp);
                                sp.moveTo(Fg, Gg);
                                sp.lineTo(FN + 1, GN);
                                rH(sp);
                                rp += 1;
                              } else {
                                var lE = A(Wx);
                                if (lE) {
                                  var tp = lE;
                                  if (S(tp)) {
                                    var mE = x(tp), HN = y(tp), IN = mE, JN = J(mE), Wx = HN, Xx = IN, Yx = JN
                                  } else {
                                    var nE = C(tp), oE = O.j(nE, 0, null), KN = O.j(oE, 0, null);
                                    O.j(oE, 1, null);
                                    var LN = O.j(nE, 1, null), pE = PH(d, KN, f + 1), MN = O.j(pE, 0, null), NN = O.j(pE, 1, null), up = a;
                                    zH(up, q(kk) ? LN : 1);
                                    oH(up);
                                    up.moveTo(Fg, Gg);
                                    up.lineTo(MN + 1, NN);
                                    rH(up);
                                    Wx = F(tp);
                                    Xx = null;
                                    Yx = 0;
                                  }
                                  rp = 0;
                                } else {
                                  break;
                                }
                              }
                            }
                            zH(a, 1);
                            qp += 1;
                          } else {
                            var qE = A(Tx);
                            if (qE) {
                              var vp = qE;
                              if (S(vp)) {
                                var rE = x(vp), ON = y(vp), PN = rE, QN = J(rE), Tx = ON, Ux = PN, Vx = QN
                              } else {
                                var RN = C(vp), SN = function() {
                                  var a = new U(null, 2, 5, V, [RN, bt], null);
                                  return Xb.g ? Xb.g(a) : Xb.call(null, a);
                                }();
                                yH(a, function() {
                                  var a = bt;
                                  return $.g ? $.g(a) : $.call(null, a);
                                }());
                                for (var Zx = A(SN), $x = null, ay = 0, wp = 0;;) {
                                  if (wp < ay) {
                                    var sE = $x.H(null, wp), tE = O.j(sE, 0, null), TN = O.j(tE, 0, null);
                                    O.j(tE, 1, null);
                                    var UN = O.j(sE, 1, null), uE = PH(d, TN, f + 1), VN = O.j(uE, 0, null), WN = O.j(uE, 1, null), xp = a;
                                    zH(xp, q(kk) ? UN : 1);
                                    oH(xp);
                                    xp.moveTo(Fg, Gg);
                                    xp.lineTo(VN + 1, WN);
                                    rH(xp);
                                    wp += 1;
                                  } else {
                                    var vE = A(Zx);
                                    if (vE) {
                                      var yp = vE;
                                      if (S(yp)) {
                                        var wE = x(yp), XN = y(yp), YN = wE, ZN = J(wE), Zx = XN, $x = YN, ay = ZN
                                      } else {
                                        var xE = C(yp), yE = O.j(xE, 0, null), $N = O.j(yE, 0, null);
                                        O.j(yE, 1, null);
                                        var aO = O.j(xE, 1, null), zE = PH(d, $N, f + 1), bO = O.j(zE, 0, null), cO = O.j(zE, 1, null), zp = a;
                                        zH(zp, q(kk) ? aO : 1);
                                        oH(zp);
                                        zp.moveTo(Fg, Gg);
                                        zp.lineTo(bO + 1, cO);
                                        rH(zp);
                                        Zx = F(yp);
                                        $x = null;
                                        ay = 0;
                                      }
                                      wp = 0;
                                    } else {
                                      break;
                                    }
                                  }
                                }
                                zH(a, 1);
                                Tx = F(vp);
                                Ux = null;
                                Vx = 0;
                              }
                              qp = 0;
                            } else {
                              break;
                            }
                          }
                        }
                        Hx = F(pp);
                        Ix = null;
                        Jx = 0;
                      }
                      ep = 0;
                    } else {
                      break;
                    }
                  }
                }
              }
              hc = F(Gl);
              sf = null;
              Ag = 0;
            }
            Ce = 0;
          } else {
            break;
          }
        }
      }
      Sc += 1;
    } else {
      var ct = A(Md);
      if (ct) {
        var Hl = ct;
        if (S(Hl)) {
          var AE = x(Hl), dO = y(Hl), eO = AE, fO = J(AE), Md = dO, Nd = eO, fe = fO
        } else {
          var dt = C(Hl), yh = O.j(dt, 0, null), by = O.j(dt, 1, null), et = Y.Be(null, yh), Ap = O.j(et, 0, null), Bp = O.j(et, 1, null), ln = new U(null, 2, 5, V, [e, yh], null), Cp = function() {
            var a = ln;
            return D.g ? D.g(a) : D.call(null, a);
          }(), ft = function() {
            var a = ln;
            return L.g ? L.g(a) : L.call(null, a);
          }(), gt = Ef(M, ln), lk = function() {
            var a = Ef(I, ln);
            return q(a) ? a : gt;
          }(), mn = q(lk) ? Ic(lk) : null, BE = Th.h(function(a, b, c, d, e, f, g, h, s, l, p, t, w, z, I, N, B, D, M, K, L, Uc, T, Y, ba, ua, wa) {
            return function(a) {
              return lI(a, wa, L);
            };
          }(Md, Nd, fe, Sc, et, Ap, Bp, ln, Cp, ft, gt, lk, mn, dt, yh, by, Hl, ct, l, p, s, t, w, B, z, D, K, L, I, M, T, ba, N, ua, Y, fa, ia, pa, xa, wa), by), CE = function(a, b, c, d, e, f, g, h, s, l, p, t, w, z, I, N, B, D, M, K, L) {
            return function(a) {
              var b = new U(null, 2, 5, V, [po, bs], null);
              a = a.g ? a.g(b) : a.call(null, b);
              return J(a) >= L;
            };
          }(Md, Nd, fe, Sc, et, Ap, Bp, ln, Cp, ft, gt, lk, mn, BE, dt, yh, by, Hl, ct, l, p, s, t, w, B, z, D, K, L, I, M, T, ba, N, ua, Y, fa, ia, pa, xa, wa), gO = q(function() {
            var a = Cp;
            return q(a) ? ft : a;
          }()) ? xr : q(ft) ? cu : q(Cp) ? bs : Ml;
          if (q(Cp)) {
            var DE = a;
            yH(DE, bs.g($));
            DE.lineWidth = 2;
            Y.Ce(null, a, yh);
          }
          if (q(lk)) {
            var ht = a;
            xH(ht, yn.g($));
            oH(ht);
            SH(ht, Ap, Bp, ia + 8);
            ht.fill();
          }
          var Il = a;
          xH(Il, function() {
            var a = gO;
            return $.g ? $.g(a) : $.call(null, a);
          }());
          yH(Il, "black");
          Il.lineWidth = 1;
          oH(Il);
          SH(Il, Ap, Bp, ia);
          rH(Il);
          Il.fill();
          xH(a, "black");
          vH(a, new n(null, 3, [Dv, "cell " + u.g(yh) + u.g(q(lk) ? "   (learning on " + u.g(q(mn) ? "segment " + u.g(mn) : "new segment") + u.g(q(gt) ? " alternatively" : null) + ")" : null), Vt, Ap, Nl, Bp - ia - 5], null));
          for (var cy = A(hh(Ci, BE)), dy = null, ey = 0, Dp = 0;;) {
            if (Dp < ey) {
              var EE = dy.H(null, Dp), it = O.j(EE, 0, null), Yb = O.j(EE, 1, null), FE = Y.Hd(null, yh, it), Hg = O.j(FE, 0, null), Ig = O.j(FE, 1, null), fy = J(function() {
                var a = new U(null, 2, 5, V, [po, bs], null);
                return Yb.g ? Yb.g(a) : Yb.call(null, a);
              }()), hO = fy + J(function() {
                var a = new U(null, 2, 5, V, [po, Ml], null);
                return Yb.g ? Yb.g(a) : Yb.call(null, a);
              }()), GE = J(function() {
                var a = new U(null, 2, 5, V, [Zm, bs], null);
                return Yb.g ? Yb.g(a) : Yb.call(null, a);
              }()), iO = GE + J(function() {
                var a = new U(null, 2, 5, V, [Zm, Ml], null);
                return Yb.g ? Yb.g(a) : Yb.call(null, a);
              }()), jO = function() {
                var a = fy / p;
                return 1 > a ? a : 1;
              }(), HE = function() {
                var a = lk;
                return q(a) ? ae.h(it, mn) : a;
              }(), gy = TH(Hg, Ig, xa, pa), kO = TH(Hg, Ig, xa + 8, pa + 8);
              if (q(HE)) {
                var IE = a;
                xH(IE, yn.g($));
                uH(IE, kO);
              }
              var zh = a;
              zH(zh, 1);
              yH(zh, "black");
              zh.lineWidth = 1;
              tH(zh, gy);
              xH(zh, "white");
              uH(zh, gy);
              zH(zh, jO);
              xH(zh, bs.g($));
              uH(zh, gy);
              zH(zh, 1);
              if (CE(Yb)) {
                var JE = a;
                yH(JE, bs.g($));
                JE.lineWidth = 2;
                Y.fd(null, a, yh, it);
              }
              xH(a, "black");
              vH(a, new n(null, 3, [Dv, "[" + u.g(it) + "],  active " + u.g(fy) + " / " + u.g(hO) + " conn. (" + u.g(GE) + " / " + u.g(iO) + " disconn.)", Vt, Hg + 5 + wa, Nl, Ig], null));
              a.lineWidth = 1;
              var mk = Vh.h(h, new U(null, 2, 5, V, [pn, Su], null)), lO = Vh.h(h, new U(null, 2, 5, V, [pn, bs], null)), mO = Vh.h(h, new U(null, 2, 5, V, [pn, Ml], null)), KE = Vh.h(h, new U(null, 2, 5, V, [pn, Zm], null)), LE = Vh.h(h, new U(null, 2, 5, V, [pn, Yr], null));
              if (q(function() {
                var a = ae.h(LE, Oq);
                return a ? a : (a = ae.h(LE, er)) ? HE : a;
              }())) {
                for (var hy = A(Rg.h(q(mO) ? new U(null, 1, 5, V, [Eu], null) : null, q(lO) ? new U(null, 1, 5, V, [bs], null) : null)), iy = null, jy = 0, Ep = 0;;) {
                  if (Ep < jy) {
                    for (var jt = iy.H(null, Ep), ky = A(Rg.h(q(KE) ? new U(null, 1, 5, V, [Zm], null) : null, new U(null, 1, 5, V, [po], null))), ly = null, my = 0, Fp = 0;;) {
                      if (Fp < my) {
                        var nO = ly.H(null, Fp), oO = function() {
                          var a = new U(null, 2, 5, V, [nO, jt], null);
                          return Yb.g ? Yb.g(a) : Yb.call(null, a);
                        }();
                        yH(a, function() {
                          var a = jt;
                          return $.g ? $.g(a) : $.call(null, a);
                        }());
                        for (var ny = A(oO), oy = null, py = 0, Gp = 0;;) {
                          if (Gp < py) {
                            var ME = oy.H(null, Gp), NE = O.j(ME, 0, null), pO = O.j(NE, 0, null);
                            O.j(NE, 1, null);
                            var qO = O.j(ME, 1, null), OE = PH(d, pO, f + 1), rO = O.j(OE, 0, null), sO = O.j(OE, 1, null), Hp = a;
                            zH(Hp, q(mk) ? qO : 1);
                            oH(Hp);
                            Hp.moveTo(Hg, Ig);
                            Hp.lineTo(rO + 1, sO);
                            rH(Hp);
                            Gp += 1;
                          } else {
                            var PE = A(ny);
                            if (PE) {
                              var Ip = PE;
                              if (S(Ip)) {
                                var QE = x(Ip), tO = y(Ip), uO = QE, vO = J(QE), ny = tO, oy = uO, py = vO
                              } else {
                                var RE = C(Ip), SE = O.j(RE, 0, null), wO = O.j(SE, 0, null);
                                O.j(SE, 1, null);
                                var xO = O.j(RE, 1, null), TE = PH(d, wO, f + 1), yO = O.j(TE, 0, null), zO = O.j(TE, 1, null), Jp = a;
                                zH(Jp, q(mk) ? xO : 1);
                                oH(Jp);
                                Jp.moveTo(Hg, Ig);
                                Jp.lineTo(yO + 1, zO);
                                rH(Jp);
                                ny = F(Ip);
                                oy = null;
                                py = 0;
                              }
                              Gp = 0;
                            } else {
                              break;
                            }
                          }
                        }
                        zH(a, 1);
                        Fp += 1;
                      } else {
                        var UE = A(ky);
                        if (UE) {
                          var Kp = UE;
                          if (S(Kp)) {
                            var VE = x(Kp), AO = y(Kp), BO = VE, CO = J(VE), ky = AO, ly = BO, my = CO
                          } else {
                            var DO = C(Kp), EO = function() {
                              var a = new U(null, 2, 5, V, [DO, jt], null);
                              return Yb.g ? Yb.g(a) : Yb.call(null, a);
                            }();
                            yH(a, function() {
                              var a = jt;
                              return $.g ? $.g(a) : $.call(null, a);
                            }());
                            for (var qy = A(EO), ry = null, sy = 0, Lp = 0;;) {
                              if (Lp < sy) {
                                var WE = ry.H(null, Lp), XE = O.j(WE, 0, null), FO = O.j(XE, 0, null);
                                O.j(XE, 1, null);
                                var GO = O.j(WE, 1, null), YE = PH(d, FO, f + 1), HO = O.j(YE, 0, null), IO = O.j(YE, 1, null), Mp = a;
                                zH(Mp, q(mk) ? GO : 1);
                                oH(Mp);
                                Mp.moveTo(Hg, Ig);
                                Mp.lineTo(HO + 1, IO);
                                rH(Mp);
                                Lp += 1;
                              } else {
                                var ZE = A(qy);
                                if (ZE) {
                                  var Np = ZE;
                                  if (S(Np)) {
                                    var $E = x(Np), JO = y(Np), KO = $E, LO = J($E), qy = JO, ry = KO, sy = LO
                                  } else {
                                    var aF = C(Np), bF = O.j(aF, 0, null), MO = O.j(bF, 0, null);
                                    O.j(bF, 1, null);
                                    var NO = O.j(aF, 1, null), cF = PH(d, MO, f + 1), OO = O.j(cF, 0, null), PO = O.j(cF, 1, null), Op = a;
                                    zH(Op, q(mk) ? NO : 1);
                                    oH(Op);
                                    Op.moveTo(Hg, Ig);
                                    Op.lineTo(OO + 1, PO);
                                    rH(Op);
                                    qy = F(Np);
                                    ry = null;
                                    sy = 0;
                                  }
                                  Lp = 0;
                                } else {
                                  break;
                                }
                              }
                            }
                            zH(a, 1);
                            ky = F(Kp);
                            ly = null;
                            my = 0;
                          }
                          Fp = 0;
                        } else {
                          break;
                        }
                      }
                    }
                    Ep += 1;
                  } else {
                    var dF = A(hy);
                    if (dF) {
                      var Pp = dF;
                      if (S(Pp)) {
                        var eF = x(Pp), QO = y(Pp), RO = eF, SO = J(eF), hy = QO, iy = RO, jy = SO
                      } else {
                        for (var kt = C(Pp), ty = A(Rg.h(q(KE) ? new U(null, 1, 5, V, [Zm], null) : null, new U(null, 1, 5, V, [po], null))), uy = null, vy = 0, Qp = 0;;) {
                          if (Qp < vy) {
                            var TO = uy.H(null, Qp), UO = function() {
                              var a = new U(null, 2, 5, V, [TO, kt], null);
                              return Yb.g ? Yb.g(a) : Yb.call(null, a);
                            }();
                            yH(a, function() {
                              var a = kt;
                              return $.g ? $.g(a) : $.call(null, a);
                            }());
                            for (var wy = A(UO), xy = null, yy = 0, Rp = 0;;) {
                              if (Rp < yy) {
                                var fF = xy.H(null, Rp), gF = O.j(fF, 0, null), VO = O.j(gF, 0, null);
                                O.j(gF, 1, null);
                                var WO = O.j(fF, 1, null), hF = PH(d, VO, f + 1), XO = O.j(hF, 0, null), YO = O.j(hF, 1, null), Sp = a;
                                zH(Sp, q(mk) ? WO : 1);
                                oH(Sp);
                                Sp.moveTo(Hg, Ig);
                                Sp.lineTo(XO + 1, YO);
                                rH(Sp);
                                Rp += 1;
                              } else {
                                var iF = A(wy);
                                if (iF) {
                                  var Tp = iF;
                                  if (S(Tp)) {
                                    var jF = x(Tp), ZO = y(Tp), $O = jF, aP = J(jF), wy = ZO, xy = $O, yy = aP
                                  } else {
                                    var kF = C(Tp), lF = O.j(kF, 0, null), bP = O.j(lF, 0, null);
                                    O.j(lF, 1, null);
                                    var cP = O.j(kF, 1, null), mF = PH(d, bP, f + 1), dP = O.j(mF, 0, null), eP = O.j(mF, 1, null), Up = a;
                                    zH(Up, q(mk) ? cP : 1);
                                    oH(Up);
                                    Up.moveTo(Hg, Ig);
                                    Up.lineTo(dP + 1, eP);
                                    rH(Up);
                                    wy = F(Tp);
                                    xy = null;
                                    yy = 0;
                                  }
                                  Rp = 0;
                                } else {
                                  break;
                                }
                              }
                            }
                            zH(a, 1);
                            Qp += 1;
                          } else {
                            var nF = A(ty);
                            if (nF) {
                              var Vp = nF;
                              if (S(Vp)) {
                                var oF = x(Vp), fP = y(Vp), gP = oF, hP = J(oF), ty = fP, uy = gP, vy = hP
                              } else {
                                var iP = C(Vp), jP = function() {
                                  var a = new U(null, 2, 5, V, [iP, kt], null);
                                  return Yb.g ? Yb.g(a) : Yb.call(null, a);
                                }();
                                yH(a, function() {
                                  var a = kt;
                                  return $.g ? $.g(a) : $.call(null, a);
                                }());
                                for (var zy = A(jP), Ay = null, By = 0, Wp = 0;;) {
                                  if (Wp < By) {
                                    var pF = Ay.H(null, Wp), qF = O.j(pF, 0, null), kP = O.j(qF, 0, null);
                                    O.j(qF, 1, null);
                                    var lP = O.j(pF, 1, null), rF = PH(d, kP, f + 1), mP = O.j(rF, 0, null), nP = O.j(rF, 1, null), Xp = a;
                                    zH(Xp, q(mk) ? lP : 1);
                                    oH(Xp);
                                    Xp.moveTo(Hg, Ig);
                                    Xp.lineTo(mP + 1, nP);
                                    rH(Xp);
                                    Wp += 1;
                                  } else {
                                    var sF = A(zy);
                                    if (sF) {
                                      var Yp = sF;
                                      if (S(Yp)) {
                                        var tF = x(Yp), oP = y(Yp), pP = tF, qP = J(tF), zy = oP, Ay = pP, By = qP
                                      } else {
                                        var uF = C(Yp), vF = O.j(uF, 0, null), rP = O.j(vF, 0, null);
                                        O.j(vF, 1, null);
                                        var sP = O.j(uF, 1, null), wF = PH(d, rP, f + 1), tP = O.j(wF, 0, null), uP = O.j(wF, 1, null), Zp = a;
                                        zH(Zp, q(mk) ? sP : 1);
                                        oH(Zp);
                                        Zp.moveTo(Hg, Ig);
                                        Zp.lineTo(tP + 1, uP);
                                        rH(Zp);
                                        zy = F(Yp);
                                        Ay = null;
                                        By = 0;
                                      }
                                      Wp = 0;
                                    } else {
                                      break;
                                    }
                                  }
                                }
                                zH(a, 1);
                                ty = F(Vp);
                                uy = null;
                                vy = 0;
                              }
                              Qp = 0;
                            } else {
                              break;
                            }
                          }
                        }
                        hy = F(Pp);
                        iy = null;
                        jy = 0;
                      }
                      Ep = 0;
                    } else {
                      break;
                    }
                  }
                }
              }
              Dp += 1;
            } else {
              var xF = A(cy);
              if (xF) {
                var $p = xF;
                if (S($p)) {
                  var yF = x($p), vP = y($p), wP = yF, xP = J(yF), cy = vP, dy = wP, ey = xP
                } else {
                  var zF = C($p), lt = O.j(zF, 0, null), Zb = O.j(zF, 1, null), AF = Y.Hd(null, yh, lt), Jg = O.j(AF, 0, null), Kg = O.j(AF, 1, null), Cy = J(function() {
                    var a = new U(null, 2, 5, V, [po, bs], null);
                    return Zb.g ? Zb.g(a) : Zb.call(null, a);
                  }()), yP = Cy + J(function() {
                    var a = new U(null, 2, 5, V, [po, Ml], null);
                    return Zb.g ? Zb.g(a) : Zb.call(null, a);
                  }()), BF = J(function() {
                    var a = new U(null, 2, 5, V, [Zm, bs], null);
                    return Zb.g ? Zb.g(a) : Zb.call(null, a);
                  }()), zP = BF + J(function() {
                    var a = new U(null, 2, 5, V, [Zm, Ml], null);
                    return Zb.g ? Zb.g(a) : Zb.call(null, a);
                  }()), AP = function() {
                    var a = Cy / p;
                    return 1 > a ? a : 1;
                  }(), CF = function() {
                    var a = lk;
                    return q(a) ? ae.h(lt, mn) : a;
                  }(), Dy = TH(Jg, Kg, xa, pa), BP = TH(Jg, Kg, xa + 8, pa + 8);
                  if (q(CF)) {
                    var DF = a;
                    xH(DF, yn.g($));
                    uH(DF, BP);
                  }
                  var Ah = a;
                  zH(Ah, 1);
                  yH(Ah, "black");
                  Ah.lineWidth = 1;
                  tH(Ah, Dy);
                  xH(Ah, "white");
                  uH(Ah, Dy);
                  zH(Ah, AP);
                  xH(Ah, bs.g($));
                  uH(Ah, Dy);
                  zH(Ah, 1);
                  if (CE(Zb)) {
                    var EF = a;
                    yH(EF, bs.g($));
                    EF.lineWidth = 2;
                    Y.fd(null, a, yh, lt);
                  }
                  xH(a, "black");
                  vH(a, new n(null, 3, [Dv, "[" + u.g(lt) + "],  active " + u.g(Cy) + " / " + u.g(yP) + " conn. (" + u.g(BF) + " / " + u.g(zP) + " disconn.)", Vt, Jg + 5 + wa, Nl, Kg], null));
                  a.lineWidth = 1;
                  var nk = Vh.h(h, new U(null, 2, 5, V, [pn, Su], null)), CP = Vh.h(h, new U(null, 2, 5, V, [pn, bs], null)), DP = Vh.h(h, new U(null, 2, 5, V, [pn, Ml], null)), FF = Vh.h(h, new U(null, 2, 5, V, [pn, Zm], null)), GF = Vh.h(h, new U(null, 2, 5, V, [pn, Yr], null));
                  if (q(function() {
                    var a = ae.h(GF, Oq);
                    return a ? a : (a = ae.h(GF, er)) ? CF : a;
                  }())) {
                    for (var Ey = A(Rg.h(q(DP) ? new U(null, 1, 5, V, [Eu], null) : null, q(CP) ? new U(null, 1, 5, V, [bs], null) : null)), Fy = null, Gy = 0, aq = 0;;) {
                      if (aq < Gy) {
                        for (var mt = Fy.H(null, aq), Hy = A(Rg.h(q(FF) ? new U(null, 1, 5, V, [Zm], null) : null, new U(null, 1, 5, V, [po], null))), Iy = null, Jy = 0, bq = 0;;) {
                          if (bq < Jy) {
                            var EP = Iy.H(null, bq), FP = function() {
                              var a = new U(null, 2, 5, V, [EP, mt], null);
                              return Zb.g ? Zb.g(a) : Zb.call(null, a);
                            }();
                            yH(a, function() {
                              var a = mt;
                              return $.g ? $.g(a) : $.call(null, a);
                            }());
                            for (var Ky = A(FP), Ly = null, My = 0, cq = 0;;) {
                              if (cq < My) {
                                var HF = Ly.H(null, cq), IF = O.j(HF, 0, null), GP = O.j(IF, 0, null);
                                O.j(IF, 1, null);
                                var HP = O.j(HF, 1, null), JF = PH(d, GP, f + 1), IP = O.j(JF, 0, null), JP = O.j(JF, 1, null), dq = a;
                                zH(dq, q(nk) ? HP : 1);
                                oH(dq);
                                dq.moveTo(Jg, Kg);
                                dq.lineTo(IP + 1, JP);
                                rH(dq);
                                cq += 1;
                              } else {
                                var KF = A(Ky);
                                if (KF) {
                                  var eq = KF;
                                  if (S(eq)) {
                                    var LF = x(eq), KP = y(eq), LP = LF, MP = J(LF), Ky = KP, Ly = LP, My = MP
                                  } else {
                                    var MF = C(eq), NF = O.j(MF, 0, null), NP = O.j(NF, 0, null);
                                    O.j(NF, 1, null);
                                    var OP = O.j(MF, 1, null), OF = PH(d, NP, f + 1), PP = O.j(OF, 0, null), QP = O.j(OF, 1, null), fq = a;
                                    zH(fq, q(nk) ? OP : 1);
                                    oH(fq);
                                    fq.moveTo(Jg, Kg);
                                    fq.lineTo(PP + 1, QP);
                                    rH(fq);
                                    Ky = F(eq);
                                    Ly = null;
                                    My = 0;
                                  }
                                  cq = 0;
                                } else {
                                  break;
                                }
                              }
                            }
                            zH(a, 1);
                            bq += 1;
                          } else {
                            var PF = A(Hy);
                            if (PF) {
                              var gq = PF;
                              if (S(gq)) {
                                var QF = x(gq), RP = y(gq), SP = QF, TP = J(QF), Hy = RP, Iy = SP, Jy = TP
                              } else {
                                var UP = C(gq), VP = function() {
                                  var a = new U(null, 2, 5, V, [UP, mt], null);
                                  return Zb.g ? Zb.g(a) : Zb.call(null, a);
                                }();
                                yH(a, function() {
                                  var a = mt;
                                  return $.g ? $.g(a) : $.call(null, a);
                                }());
                                for (var Ny = A(VP), Oy = null, Py = 0, hq = 0;;) {
                                  if (hq < Py) {
                                    var RF = Oy.H(null, hq), SF = O.j(RF, 0, null), WP = O.j(SF, 0, null);
                                    O.j(SF, 1, null);
                                    var XP = O.j(RF, 1, null), TF = PH(d, WP, f + 1), YP = O.j(TF, 0, null), ZP = O.j(TF, 1, null), iq = a;
                                    zH(iq, q(nk) ? XP : 1);
                                    oH(iq);
                                    iq.moveTo(Jg, Kg);
                                    iq.lineTo(YP + 1, ZP);
                                    rH(iq);
                                    hq += 1;
                                  } else {
                                    var UF = A(Ny);
                                    if (UF) {
                                      var jq = UF;
                                      if (S(jq)) {
                                        var VF = x(jq), $P = y(jq), aQ = VF, bQ = J(VF), Ny = $P, Oy = aQ, Py = bQ
                                      } else {
                                        var WF = C(jq), XF = O.j(WF, 0, null), cQ = O.j(XF, 0, null);
                                        O.j(XF, 1, null);
                                        var dQ = O.j(WF, 1, null), YF = PH(d, cQ, f + 1), eQ = O.j(YF, 0, null), fQ = O.j(YF, 1, null), kq = a;
                                        zH(kq, q(nk) ? dQ : 1);
                                        oH(kq);
                                        kq.moveTo(Jg, Kg);
                                        kq.lineTo(eQ + 1, fQ);
                                        rH(kq);
                                        Ny = F(jq);
                                        Oy = null;
                                        Py = 0;
                                      }
                                      hq = 0;
                                    } else {
                                      break;
                                    }
                                  }
                                }
                                zH(a, 1);
                                Hy = F(gq);
                                Iy = null;
                                Jy = 0;
                              }
                              bq = 0;
                            } else {
                              break;
                            }
                          }
                        }
                        aq += 1;
                      } else {
                        var ZF = A(Ey);
                        if (ZF) {
                          var lq = ZF;
                          if (S(lq)) {
                            var $F = x(lq), gQ = y(lq), hQ = $F, iQ = J($F), Ey = gQ, Fy = hQ, Gy = iQ
                          } else {
                            for (var nt = C(lq), Qy = A(Rg.h(q(FF) ? new U(null, 1, 5, V, [Zm], null) : null, new U(null, 1, 5, V, [po], null))), Ry = null, Sy = 0, mq = 0;;) {
                              if (mq < Sy) {
                                var jQ = Ry.H(null, mq), kQ = function() {
                                  var a = new U(null, 2, 5, V, [jQ, nt], null);
                                  return Zb.g ? Zb.g(a) : Zb.call(null, a);
                                }();
                                yH(a, function() {
                                  var a = nt;
                                  return $.g ? $.g(a) : $.call(null, a);
                                }());
                                for (var Ty = A(kQ), Uy = null, Vy = 0, nq = 0;;) {
                                  if (nq < Vy) {
                                    var aG = Uy.H(null, nq), bG = O.j(aG, 0, null), lQ = O.j(bG, 0, null);
                                    O.j(bG, 1, null);
                                    var mQ = O.j(aG, 1, null), cG = PH(d, lQ, f + 1), nQ = O.j(cG, 0, null), oQ = O.j(cG, 1, null), oq = a;
                                    zH(oq, q(nk) ? mQ : 1);
                                    oH(oq);
                                    oq.moveTo(Jg, Kg);
                                    oq.lineTo(nQ + 1, oQ);
                                    rH(oq);
                                    nq += 1;
                                  } else {
                                    var dG = A(Ty);
                                    if (dG) {
                                      var pq = dG;
                                      if (S(pq)) {
                                        var eG = x(pq), pQ = y(pq), qQ = eG, rQ = J(eG), Ty = pQ, Uy = qQ, Vy = rQ
                                      } else {
                                        var fG = C(pq), gG = O.j(fG, 0, null), sQ = O.j(gG, 0, null);
                                        O.j(gG, 1, null);
                                        var tQ = O.j(fG, 1, null), hG = PH(d, sQ, f + 1), uQ = O.j(hG, 0, null), vQ = O.j(hG, 1, null), qq = a;
                                        zH(qq, q(nk) ? tQ : 1);
                                        oH(qq);
                                        qq.moveTo(Jg, Kg);
                                        qq.lineTo(uQ + 1, vQ);
                                        rH(qq);
                                        Ty = F(pq);
                                        Uy = null;
                                        Vy = 0;
                                      }
                                      nq = 0;
                                    } else {
                                      break;
                                    }
                                  }
                                }
                                zH(a, 1);
                                mq += 1;
                              } else {
                                var iG = A(Qy);
                                if (iG) {
                                  var rq = iG;
                                  if (S(rq)) {
                                    var jG = x(rq), wQ = y(rq), xQ = jG, yQ = J(jG), Qy = wQ, Ry = xQ, Sy = yQ
                                  } else {
                                    var zQ = C(rq), AQ = function() {
                                      var a = new U(null, 2, 5, V, [zQ, nt], null);
                                      return Zb.g ? Zb.g(a) : Zb.call(null, a);
                                    }();
                                    yH(a, function() {
                                      var a = nt;
                                      return $.g ? $.g(a) : $.call(null, a);
                                    }());
                                    for (var Wy = A(AQ), Xy = null, Yy = 0, sq = 0;;) {
                                      if (sq < Yy) {
                                        var kG = Xy.H(null, sq), lG = O.j(kG, 0, null), BQ = O.j(lG, 0, null);
                                        O.j(lG, 1, null);
                                        var CQ = O.j(kG, 1, null), mG = PH(d, BQ, f + 1), DQ = O.j(mG, 0, null), EQ = O.j(mG, 1, null), tq = a;
                                        zH(tq, q(nk) ? CQ : 1);
                                        oH(tq);
                                        tq.moveTo(Jg, Kg);
                                        tq.lineTo(DQ + 1, EQ);
                                        rH(tq);
                                        sq += 1;
                                      } else {
                                        var nG = A(Wy);
                                        if (nG) {
                                          var uq = nG;
                                          if (S(uq)) {
                                            var oG = x(uq), FQ = y(uq), GQ = oG, HQ = J(oG), Wy = FQ, Xy = GQ, Yy = HQ
                                          } else {
                                            var pG = C(uq), qG = O.j(pG, 0, null), IQ = O.j(qG, 0, null);
                                            O.j(qG, 1, null);
                                            var JQ = O.j(pG, 1, null), rG = PH(d, IQ, f + 1), KQ = O.j(rG, 0, null), LQ = O.j(rG, 1, null), vq = a;
                                            zH(vq, q(nk) ? JQ : 1);
                                            oH(vq);
                                            vq.moveTo(Jg, Kg);
                                            vq.lineTo(KQ + 1, LQ);
                                            rH(vq);
                                            Wy = F(uq);
                                            Xy = null;
                                            Yy = 0;
                                          }
                                          sq = 0;
                                        } else {
                                          break;
                                        }
                                      }
                                    }
                                    zH(a, 1);
                                    Qy = F(rq);
                                    Ry = null;
                                    Sy = 0;
                                  }
                                  mq = 0;
                                } else {
                                  break;
                                }
                              }
                            }
                            Ey = F(lq);
                            Fy = null;
                            Gy = 0;
                          }
                          aq = 0;
                        } else {
                          break;
                        }
                      }
                    }
                  }
                  cy = F($p);
                  dy = null;
                  ey = 0;
                }
                Dp = 0;
              } else {
                break;
              }
            }
          }
          Md = F(Hl);
          Nd = null;
          fe = 0;
        }
        Sc = 0;
      } else {
        break;
      }
    }
  }
  qH(a);
}
function sI(a) {
  var b = Bf(a) ? R.h(kh, a) : a, c = P.h(b, Sn), d = P.h(b, fr), e = P.h(b, cs), f = O.h(H.g ? H.g(fI) : H.call(null, fI), c), g = nD(f), h = O.h(g, d), l = bv.g(h), p = Pu.g(h), s = C(oD(f)), t = NB(s), w = IB.g(s);
  return R.h(u, Lh("\n", Rh(qi(["__Selection__", "* timestep " + u.g(LB(h)) + " (delay " + u.g(c) + ")", "* column " + u.g(q(e) ? e : "nil"), "", "__Input__", "" + u.g(t) + " (" + u.g(J(w)) + " bits)", "", "__Active columns__", "" + u.g(If.g(mB(p))), "", "__Active cells__", "" + u.g(If.g(nB(p))), "", "__Learnable cells__", "" + u.g(If.g(oB(p))), "", "__Learning segments__", "" + u.g(If.g(In.g(p))), "", "__Signal cells__", "" + u.g(If.g(pB(p))), "", "__Alternative cells / segs__", "" + u.g(If.g(vt.g(p))), 
  "", "__TP scores__", "" + u.g(If.g(on.g(l))), "", "__Predicted cells__", "" + u.g(If.g(rB(p))), "", q(e) ? function() {
    var B = c + 1, z = O.h(H.g ? H.g(fI) : H.call(null, fI), B), D = O.h(nD(z), d), K = bv.g(D), L = Pu.g(D), I = Pq.g(K), M = rs.g(L), T = nB(L), ba = function() {
      var a = oB(L);
      return q(a) ? a : uk;
    }(), N = Jn.g(WA(D)), ua = O.h(mD(f), d), Y = jD(ua, IB), fa = jD(ua, JB);
    return new U(null, 14, 5, V, ["__Active cells prev__", "" + u.g(If.g(T)), "", "__Learn cells prev__", "" + u.g(If.g(ba)), "", "__Predicted cells prev__", "" + u.g(If.g(rB(L))), "", "__Selected column__", "__Connected ff-synapses__", function() {
      var ia = tB(I, e);
      return function(a, b, c, d, e, f, g, h, s, l, p, t, w, z, I, N, B, D, M, K, L, T, Y, ba, ua, ia, fa, nb) {
        return function mc(nc) {
          return new sg(null, function(a, b, c, d, e, f, g, h, s, l, p, t, w, z) {
            return function() {
              for (;;) {
                var a = A(nc);
                if (a) {
                  if (S(a)) {
                    var b = x(a), c = J(b), d = wg(c);
                    return function() {
                      for (var a = 0;;) {
                        if (a < c) {
                          var e = v.h(b, a), f = O.j(e, 0, null), e = O.j(e, 1, null);
                          Lg(d, "  " + u.g(f) + " :\x3d\x3e " + u.g(mH("%.2f", e)) + u.g(q(function() {
                            var a = f;
                            return z.g ? z.g(a) : z.call(null, a);
                          }()) ? " S" : null) + u.g(q(function() {
                            var a = f;
                            return w.g ? w.g(a) : w.call(null, a);
                          }()) ? " A " + u.g(HB(t, f)) : null));
                          a += 1;
                        } else {
                          return!0;
                        }
                      }
                    }() ? zg(Mg(d), mc(y(a))) : zg(Mg(d), null);
                  }
                  var e = C(a), f = O.j(e, 0, null), e = O.j(e, 1, null);
                  return Ke("  " + u.g(f) + " :\x3d\x3e " + u.g(mH("%.2f", e)) + u.g(q(function() {
                    var a = f;
                    return z.g ? z.g(a) : z.call(null, a);
                  }()) ? " S" : null) + u.g(q(function() {
                    var a = f;
                    return w.g ? w.g(a) : w.call(null, a);
                  }()) ? " A " + u.g(HB(t, f)) : null), mc(E(a)));
                }
                return null;
              }
            };
          }(a, b, c, d, e, f, g, h, s, l, p, t, w, z, I, N, B, D, M, K, L, T, Y, ba, ua, ia, fa, nb), null, null);
        };
      }(ia, B, z, D, K, L, I, M, T, ba, N, ua, Y, fa, f, g, h, l, p, s, t, w, a, b, b, c, d, e)(If.g(ia));
    }(), "__Cells and their Dendrite segments__", function() {
      return function(a, b, c, d, e, f, g, h, s, l, p, t, w, z, I, N, B, D, M, K, L, T, Y, ba, ua, fa, ee) {
        return function nb(lc) {
          return new sg(null, function(a, b, c, d, e, f, g, h, s, l, p, t, w, z, I, N, B, D, M, K, L, T, Y, ba, ua, wa, Da) {
            return function() {
              for (;;) {
                var ia = A(lc);
                if (ia) {
                  var fa = ia;
                  if (S(fa)) {
                    var pa = x(fa), xa = J(pa), Ca = wg(xa);
                    return function() {
                      for (var sa = 0;;) {
                        if (sa < xa) {
                          var ma = v.h(pa, sa), da = zB(g, new U(null, 2, 5, V, [Da, ma], null));
                          Lg(Ca, new U(null, 4, 5, V, ["CELL " + u.g(ma), "" + u.g(J(da)) + " \x3d " + u.g(Ch.h(J, da)), "Lateral excitation from this cell: " + u.g(vB(g, new U(null, 2, 5, V, [Da, ma], null))), function() {
                            return function(a, b, c, d, e, f, g, h, s, l, p, t, w, z, I, N, B, D, M, K, L, T, Y, ba, ua, wa, Da, ia, fa, pa, xa, Ca, sa, ma, da) {
                              return function ke(ha) {
                                return new sg(null, function(a, b, c, d, e, f, g, h, s, l, p, t, w, z, I, N, B, D, M, K, L, T, Y, ba, ua, wa, Da, ia, fa, pa, xa, Ca, sa, ma, da) {
                                  return function() {
                                    for (;;) {
                                      var za = A(ha);
                                      if (za) {
                                        var ya = za;
                                        if (S(ya)) {
                                          var Ja = x(ya), Na = J(Ja), Cb = wg(Na);
                                          return function() {
                                            for (var ha = 0;;) {
                                              if (ha < Na) {
                                                var ab = v.h(Ja, ha), Ha = O.j(ab, 0, null), bb = O.j(ab, 1, null);
                                                Lg(Cb, new U(null, 2, 5, V, ["  SEGMENT " + u.g(Ha), function() {
                                                  return function(a, b, c, d, e, f, g, h, s, l, p, t, w, z, I, N, B, D, M, K, L, T, Uc, Y, ba, ua, wa, Da, ia, fa, pa, xa, Ca, sa, ma, da, ha, za, ya, Ja, Na, ab, Cb, Ha) {
                                                    return function Cl(bb) {
                                                      return new sg(null, function(a, b, c, d, e, f, g, h, s, l, p, t, w, z, I, N, B, D, M, K, L, T, Uc, Y, ba, ua, wa) {
                                                        return function() {
                                                          for (;;) {
                                                            var a = A(bb);
                                                            if (a) {
                                                              if (S(a)) {
                                                                var b = x(a), c = J(b), d = wg(c);
                                                                return function() {
                                                                  for (var a = 0;;) {
                                                                    if (a < c) {
                                                                      var e = v.h(b, a), f = O.j(e, 0, null), e = O.j(e, 1, null);
                                                                      Lg(d, "  " + u.g(f) + u.g(e >= wa ? " :\x3d\x3e " : " :.: ") + u.g(mH("%.2f", e)) + u.g(q(function() {
                                                                        var a = f;
                                                                        return ua.g ? ua.g(a) : ua.call(null, a);
                                                                      }()) ? " L" : q(function() {
                                                                        var a = f;
                                                                        return ba.g ? ba.g(a) : ba.call(null, a);
                                                                      }()) ? " A" : null));
                                                                      a += 1;
                                                                    } else {
                                                                      return!0;
                                                                    }
                                                                  }
                                                                }() ? zg(Mg(d), Cl(y(a))) : zg(Mg(d), null);
                                                              }
                                                              var e = C(a), f = O.j(e, 0, null), e = O.j(e, 1, null);
                                                              return Ke("  " + u.g(f) + u.g(e >= wa ? " :\x3d\x3e " : " :.: ") + u.g(mH("%.2f", e)) + u.g(q(function() {
                                                                var a = f;
                                                                return ua.g ? ua.g(a) : ua.call(null, a);
                                                              }()) ? " L" : q(function() {
                                                                var a = f;
                                                                return ba.g ? ba.g(a) : ba.call(null, a);
                                                              }()) ? " A" : null), Cl(E(a)));
                                                            }
                                                            return null;
                                                          }
                                                        };
                                                      }(a, b, c, d, e, f, g, h, s, l, p, t, w, z, I, N, B, D, M, K, L, T, Uc, Y, ba, ua, wa, Da, ia, fa, pa, xa, Ca, sa, ma, da, ha, za, ya, Ja, Na, ab, Cb, Ha), null, null);
                                                    };
                                                  }(ha, a, ab, Ha, bb, Ja, Na, Cb, ya, za, b, c, d, e, f, g, h, s, l, p, t, w, z, I, N, B, D, M, K, L, T, Y, ba, ua, wa, Da, ia, fa, pa, xa, Ca, sa, ma, da)(If.g(bb));
                                                }()], null));
                                                ha += 1;
                                              } else {
                                                return!0;
                                              }
                                            }
                                          }() ? zg(Mg(Cb), ke(y(ya))) : zg(Mg(Cb), null);
                                        }
                                        var ab = C(ya), Ha = O.j(ab, 0, null), bb = O.j(ab, 1, null);
                                        return Ke(new U(null, 2, 5, V, ["  SEGMENT " + u.g(Ha), function() {
                                          return function(a, b, c, d, e, f, g, h, s, l, p, t, w, z, I, N, B, D, M, K, L, T, Uc, Y, ba, ua, wa, Da, ia, fa, pa, xa, Ca, sa, ma, da, ha, za, ya, Ja) {
                                            return function wh(Na) {
                                              return new sg(null, function(a, b, c, d, e, f, g, h, s, l, p, t, w, z, I, N, B, D, M, K, L, T, Uc) {
                                                return function() {
                                                  for (;;) {
                                                    var a = A(Na);
                                                    if (a) {
                                                      if (S(a)) {
                                                        var b = x(a), c = J(b), d = wg(c);
                                                        return function() {
                                                          for (var a = 0;;) {
                                                            if (a < c) {
                                                              var e = v.h(b, a), f = O.j(e, 0, null), e = O.j(e, 1, null);
                                                              Lg(d, "  " + u.g(f) + u.g(e >= Uc ? " :\x3d\x3e " : " :.: ") + u.g(mH("%.2f", e)) + u.g(q(function() {
                                                                var a = f;
                                                                return T.g ? T.g(a) : T.call(null, a);
                                                              }()) ? " L" : q(function() {
                                                                var a = f;
                                                                return L.g ? L.g(a) : L.call(null, a);
                                                              }()) ? " A" : null));
                                                              a += 1;
                                                            } else {
                                                              return!0;
                                                            }
                                                          }
                                                        }() ? zg(Mg(d), wh(y(a))) : zg(Mg(d), null);
                                                      }
                                                      var e = C(a), f = O.j(e, 0, null), e = O.j(e, 1, null);
                                                      return Ke("  " + u.g(f) + u.g(e >= Uc ? " :\x3d\x3e " : " :.: ") + u.g(mH("%.2f", e)) + u.g(q(function() {
                                                        var a = f;
                                                        return T.g ? T.g(a) : T.call(null, a);
                                                      }()) ? " L" : q(function() {
                                                        var a = f;
                                                        return L.g ? L.g(a) : L.call(null, a);
                                                      }()) ? " A" : null), wh(E(a)));
                                                    }
                                                    return null;
                                                  }
                                                };
                                              }(a, b, c, d, e, f, g, h, s, l, p, t, w, z, I, N, B, D, M, K, L, T, Uc, Y, ba, ua, wa, Da, ia, fa, pa, xa, Ca, sa, ma, da, ha, za, ya, Ja), null, null);
                                            };
                                          }(a, ab, Ha, bb, ya, za, b, c, d, e, f, g, h, s, l, p, t, w, z, I, N, B, D, M, K, L, T, Y, ba, ua, wa, Da, ia, fa, pa, xa, Ca, sa, ma, da)(If.g(bb));
                                        }()], null), ke(E(ya)));
                                      }
                                      return null;
                                    }
                                  };
                                }(a, b, c, d, e, f, g, h, s, l, p, t, w, z, I, N, B, D, M, K, L, T, Y, ba, ua, wa, Da, ia, fa, pa, xa, Ca, sa, ma, da), null, null);
                              };
                            }(sa, da, ma, pa, xa, Ca, fa, ia, a, b, c, d, e, f, g, h, s, l, p, t, w, z, I, N, B, D, M, K, L, T, Y, ba, ua, wa, Da)(hh(Ci, da));
                          }()], null));
                          sa += 1;
                        } else {
                          return!0;
                        }
                      }
                    }() ? zg(Mg(Ca), nb(y(fa))) : zg(Mg(Ca), null);
                  }
                  var sa = C(fa), ma = zB(g, new U(null, 2, 5, V, [Da, sa], null));
                  return Ke(new U(null, 4, 5, V, ["CELL " + u.g(sa), "" + u.g(J(ma)) + " \x3d " + u.g(Ch.h(J, ma)), "Lateral excitation from this cell: " + u.g(vB(g, new U(null, 2, 5, V, [Da, sa], null))), function() {
                    return function(a, b, c, d, e, f, g, h, s, l, p, t, w, z, I, N, B, D, M, K, L, T, Y, ba, ua, wa, Da, ia, fa, pa, xa) {
                      return function Tc(Ca) {
                        return new sg(null, function(a, b, c, d, e, f, g, h, s, l, p, t, w, z, I, N, B, D, M, K, L, T, Y, ba, ua, wa, Da, ia, fa, pa, xa) {
                          return function() {
                            for (;;) {
                              var sa = A(Ca);
                              if (sa) {
                                var ma = sa;
                                if (S(ma)) {
                                  var da = x(ma), ha = J(da), za = wg(ha);
                                  return function() {
                                    for (var Ca = 0;;) {
                                      if (Ca < ha) {
                                        var ya = v.h(da, Ca), Ja = O.j(ya, 0, null), Na = O.j(ya, 1, null);
                                        Lg(za, new U(null, 2, 5, V, ["  SEGMENT " + u.g(Ja), function() {
                                          return function(a, b, c, d, e, f, g, h, s, l, p, t, w, z, I, N, B, D, M, K, L, T, Y, Uc, ba, ua, wa, Da, ia, fa, pa, xa, Ca, ma, sa, da, ha, ya, za, Ja) {
                                            return function Bl(Na) {
                                              return new sg(null, function(a, b, c, d, e, f, g, h, s, l, p, t, w, z, I, N, B, D, M, K, L, T, Y) {
                                                return function() {
                                                  for (;;) {
                                                    var a = A(Na);
                                                    if (a) {
                                                      if (S(a)) {
                                                        var b = x(a), c = J(b), d = wg(c);
                                                        return function() {
                                                          for (var a = 0;;) {
                                                            if (a < c) {
                                                              var e = v.h(b, a), f = O.j(e, 0, null), e = O.j(e, 1, null);
                                                              Lg(d, "  " + u.g(f) + u.g(e >= Y ? " :\x3d\x3e " : " :.: ") + u.g(mH("%.2f", e)) + u.g(q(function() {
                                                                var a = f;
                                                                return T.g ? T.g(a) : T.call(null, a);
                                                              }()) ? " L" : q(function() {
                                                                var a = f;
                                                                return L.g ? L.g(a) : L.call(null, a);
                                                              }()) ? " A" : null));
                                                              a += 1;
                                                            } else {
                                                              return!0;
                                                            }
                                                          }
                                                        }() ? zg(Mg(d), Bl(y(a))) : zg(Mg(d), null);
                                                      }
                                                      var e = C(a), f = O.j(e, 0, null), e = O.j(e, 1, null);
                                                      return Ke("  " + u.g(f) + u.g(e >= Y ? " :\x3d\x3e " : " :.: ") + u.g(mH("%.2f", e)) + u.g(q(function() {
                                                        var a = f;
                                                        return T.g ? T.g(a) : T.call(null, a);
                                                      }()) ? " L" : q(function() {
                                                        var a = f;
                                                        return L.g ? L.g(a) : L.call(null, a);
                                                      }()) ? " A" : null), Bl(E(a)));
                                                    }
                                                    return null;
                                                  }
                                                };
                                              }(a, b, c, d, e, f, g, h, s, l, p, t, w, z, I, N, B, D, M, K, L, T, Y, Uc, ba, ua, wa, Da, ia, fa, pa, xa, Ca, ma, sa, da, ha, ya, za, Ja), null, null);
                                            };
                                          }(Ca, ya, Ja, Na, da, ha, za, ma, sa, a, b, c, d, e, f, g, h, s, l, p, t, w, z, I, N, B, D, M, K, L, T, Y, ba, ua, wa, Da, ia, fa, pa, xa)(If.g(Na));
                                        }()], null));
                                        Ca += 1;
                                      } else {
                                        return!0;
                                      }
                                    }
                                  }() ? zg(Mg(za), Tc(y(ma))) : zg(Mg(za), null);
                                }
                                var ya = C(ma), Ja = O.j(ya, 0, null), Na = O.j(ya, 1, null);
                                return Ke(new U(null, 2, 5, V, ["  SEGMENT " + u.g(Ja), function() {
                                  return function(a, b, c, d, e, f, g, h, s, l, p, t, w, z, I, N, B, D, M, K, L, T, Y, Uc, ba, ua, wa, Da, ia, fa, pa, xa, Ca, ma, sa, da) {
                                    return function kn(ha) {
                                      return new sg(null, function(a, b, c, d, e, f, g, h, s, l, p, t, w, z, I, N, B, D, M) {
                                        return function() {
                                          for (;;) {
                                            var a = A(ha);
                                            if (a) {
                                              if (S(a)) {
                                                var b = x(a), c = J(b), d = wg(c);
                                                return function() {
                                                  for (var a = 0;;) {
                                                    if (a < c) {
                                                      var e = v.h(b, a), f = O.j(e, 0, null), e = O.j(e, 1, null);
                                                      Lg(d, "  " + u.g(f) + u.g(e >= M ? " :\x3d\x3e " : " :.: ") + u.g(mH("%.2f", e)) + u.g(q(function() {
                                                        var a = f;
                                                        return D.g ? D.g(a) : D.call(null, a);
                                                      }()) ? " L" : q(function() {
                                                        var a = f;
                                                        return B.g ? B.g(a) : B.call(null, a);
                                                      }()) ? " A" : null));
                                                      a += 1;
                                                    } else {
                                                      return!0;
                                                    }
                                                  }
                                                }() ? zg(Mg(d), kn(y(a))) : zg(Mg(d), null);
                                              }
                                              var e = C(a), f = O.j(e, 0, null), e = O.j(e, 1, null);
                                              return Ke("  " + u.g(f) + u.g(e >= M ? " :\x3d\x3e " : " :.: ") + u.g(mH("%.2f", e)) + u.g(q(function() {
                                                var a = f;
                                                return D.g ? D.g(a) : D.call(null, a);
                                              }()) ? " L" : q(function() {
                                                var a = f;
                                                return B.g ? B.g(a) : B.call(null, a);
                                              }()) ? " A" : null), kn(E(a)));
                                            }
                                            return null;
                                          }
                                        };
                                      }(a, b, c, d, e, f, g, h, s, l, p, t, w, z, I, N, B, D, M, K, L, T, Y, Uc, ba, ua, wa, Da, ia, fa, pa, xa, Ca, ma, sa, da), null, null);
                                    };
                                  }(ya, Ja, Na, ma, sa, a, b, c, d, e, f, g, h, s, l, p, t, w, z, I, N, B, D, M, K, L, T, Y, ba, ua, wa, Da, ia, fa, pa, xa)(If.g(Na));
                                }()], null), Tc(E(ma)));
                              }
                              return null;
                            }
                          };
                        }(a, b, c, d, e, f, g, h, s, l, p, t, w, z, I, N, B, D, M, K, L, T, Y, ba, ua, wa, Da, ia, fa, pa, xa), null, null);
                      };
                    }(ma, sa, fa, ia, a, b, c, d, e, f, g, h, s, l, p, t, w, z, I, N, B, D, M, K, L, T, Y, ba, ua, wa, Da)(hh(Ci, ma));
                  }()], null), nb(E(fa)));
                }
                return null;
              }
            };
          }(a, b, c, d, e, f, g, h, s, l, p, t, w, z, I, N, B, D, M, K, L, T, Y, ba, ua, fa, ee), null, null);
        };
      }(B, z, D, K, L, I, M, T, ba, N, ua, Y, fa, f, g, h, l, p, s, t, w, a, b, b, c, d, e)(Fk.g(kB(p)));
    }()], null);
  }() : null, "", "__spec__", If.g(WA(h))], !0))));
}
function tI(a) {
  var b = Bf(a) ? R.h(kh, a) : a;
  a = P.h(b, Xr);
  var b = P.h(b, Mn), c = bx(new U(null, 1, 5, V, [Wq], null));
  c.width = b;
  c.height = a;
  return c;
}
function uI(a) {
  var b = tI(EH(a)), c = b.getContext(qg("2d")), d = JH(a);
  xH(c, lo.g($));
  QH(c, a, Fk.h(d, d + IH(a)));
  c.fill();
  return b;
}
function vI(a, b) {
  var c = tI(EH(a)), d = c.getContext(qg("2d")), e = IB.g(b);
  xH(d, bs.g($));
  QH(d, a, e);
  d.fill();
  return c;
}
function wI(a, b) {
  var c = tI(EH(a)), d = c.getContext(qg("2d")), e = Ak(Ch.h(C, rB(Pu.g(b)))), f = sD(b, e), e = bC(function() {
    return function(a) {
      a /= 8;
      return 1 < a ? 1 : a;
    };
  }(c, d, e, f), f);
  xH(d, cu.g($));
  RH(d, a, e);
  return c;
}
function xI(a, b) {
  var c = tI(EH(a)), d = c.getContext(qg("2d")), e = mB(Pu.g(b));
  xH(d, bs.g($));
  QH(d, a, e);
  d.fill();
  return c;
}
function yI(a, b) {
  var c = tI(EH(a)), d = c.getContext(qg("2d")), e = Ak(Ch.h(C, sB(Pu.g(b))));
  xH(d, cu.g($));
  QH(d, a, e);
  d.fill();
  return c;
}
function zI(a, b) {
  var c = tI(EH(a)), d = c.getContext(qg("2d")), e = Ch.h(C, qB(Pu.g(b)));
  xH(d, Lm.g($));
  QH(d, a, e);
  d.fill();
  return c;
}
function AI(a, b) {
  var c = tI(EH(a)), d = c.getContext(qg("2d")), e = Ch.h(C, uo.g(Pu.g(b)));
  xH(d, Bm.g($));
  QH(d, a, e);
  d.fill();
  return c;
}
function BI(a, b) {
  var c = tI(EH(a)), d = c.getContext(qg("2d")), e = bC(function() {
    return function(a) {
      a /= 16;
      return 1 < a ? 1 : a;
    };
  }(c, d), fB(bv.g(b)));
  xH(d, "black");
  RH(d, a, e);
  d.fill();
  return c;
}
function CI(a, b, c) {
  return Rb.h(function(b, e) {
    return b + ZB(A, zB(a, new U(null, 2, 5, V, [c, e], null)));
  }, Fk.g(b));
}
function DI(a, b) {
  var c = tI(EH(a)), d = c.getContext(qg("2d")), e = Pu.g(b), f = rs.g(e), g = RA(e), h = kB(e), e = bC(function() {
    return function(a) {
      a /= 16;
      return 1 < a ? 1 : a;
    };
  }(c, d, e, f, g, h), Bk(Fk.g(g), Ch.h(function(a, b, c, d, e, f) {
    return function(a) {
      return CI(d, f, a);
    };
  }(c, d, e, f, g, h), Fk.g(g))));
  xH(d, "black");
  RH(d, a, e);
  d.fill();
  return c;
}
function EI(a) {
  return "Showing " + u.g(JH(a)) + "--" + u.g(JH(a) + IH(a) + -1) + " of " + u.g(QA(wn.g(a)));
}
function FI() {
  var a = H.g ? H.g(GI) : H.call(null, GI), b = Bf(a) ? R.h(kh, a) : a, c = P.h(b, Sn), d = P.h(b, fr), e = P.h(b, cs);
  ex.h("#detail-text", q(e) ? sI(b) : "Select a column (by clicking on it) to see details.");
  var f = H.g ? H.g(cI) : H.call(null, cI), g = ju.g(H.g ? H.g(hI) : H.call(null, hI)), h = fo.g(H.g ? H.g(hI) : H.call(null, hI)), l = Vh.h(f, new U(null, 2, 5, V, [Lt, Bo], null)), p = O.h(H.g ? H.g(fI) : H.call(null, fI), c), s = O.j(H.g ? H.g(fI) : H.call(null, fI), c + 1, aj), t = bx("#comportex-viz"), w = t.getContext(qg("2d")), B = uI(g), z = Ch.h(uI, h), D = OH(Xe(h)) + Vh.h(f, new U(null, 2, 5, V, [Lt, Fn], null));
  sH(w, new n(null, 4, [Vt, 0, Nl, 0, Mn, t.width, Xr, 900], null));
  BH(w);
  vH(w, new n(null, 3, [Dv, "Input on selected timestep.", Vt, 2, Nl, 0], null));
  vH(w, new n(null, 3, [Dv, "Encoded bits.    \x3d\x3e time \x3d\x3e", Vt, Vt.g(EH(g)), Nl, 0], null));
  vH(w, new n(null, 3, [Dv, EI(g), Vt, Vt.g(EH(g)), Nl, 10], null));
  for (var K = A(hh(Ci, h)), L = null, I = 0, M = 0;;) {
    if (M < I) {
      var T = L.H(null, M), ba = O.j(T, 0, null), N = O.j(T, 1, null);
      vH(w, new n(null, 3, [Dv, "Region " + u.g(ba) + " columns.   \x3d\x3e time \x3d\x3e", Vt, Vt.g(EH(N)), Nl, 0], null));
      vH(w, new n(null, 3, [Dv, EI(N), Vt, Vt.g(EH(N)), Nl, 10], null));
      M += 1;
    } else {
      var ua = A(K);
      if (ua) {
        var Y = ua;
        if (S(Y)) {
          var fa = x(Y), ia = y(Y), pa = fa, xa = J(fa), K = ia, L = pa, I = xa
        } else {
          var wa = C(Y), Ca = O.j(wa, 0, null), Da = O.j(wa, 1, null);
          vH(w, new n(null, 3, [Dv, "Region " + u.g(Ca) + " columns.   \x3d\x3e time \x3d\x3e", Vt, Vt.g(EH(Da)), Nl, 0], null));
          vH(w, new n(null, 3, [Dv, EI(Da), Vt, Vt.g(EH(Da)), Nl, 10], null));
          K = F(Y);
          L = null;
          I = 0;
        }
        M = 0;
      } else {
        break;
      }
    }
  }
  var ma = D + Vh.h(f, new U(null, 2, 5, V, [Lt, Gm], null));
  vH(w, new n(null, 3, [Dv, "Segments. " + u.g(q(e) ? "(arrows keys to move)" : "(click on a column)") + " Page up / page down to scroll columns.", Vt, ma, Nl, 0], null));
  var ya = Vh.h(f, new U(null, 2, 5, V, [Lt, ps], null)), Ja = C(oD(p)), sa = C(nD(p)), Na = Du.g(Ja);
  q(Na) && (pH(w), w.translate(0, 30), Na.Q ? Na.Q(Ja, w, ya, 870, sa) : Na.call(null, Ja, w, ya, 870, sa), qH(w));
  for (var Cb = A(Fk.g(function() {
    var a = J(H.g ? H.g(fI) : H.call(null, fI));
    return l < a ? l : a;
  }())), ab = null, wb = 0, bb = 0;;) {
    if (bb < wb) {
      var za = ab.H(null, bb), ld = O.h(H.g ? H.g(fI) : H.call(null, fI), za), Jc = O.j(H.g ? H.g(fI) : H.call(null, fI), za + 1, aj), sc = C(nD(Jc)), qh = nD(ld), wc = C(oD(ld)), da = Lu.g(ef(ld));
      if (1 === J(PA(wc)) || za === c) {
        iI(w, g, za, B), q(Vh.h(f, new U(null, 2, 5, V, [ju, bs], null))) && iI(w, g, za, P.h(ae.h(ju.g(f), ju.g(ns.g(function() {
          var a = da;
          return H.g ? H.g(a) : H.call(null, a);
        }()))) ? function() {
          var a = da;
          return H.g ? H.g(a) : H.call(null, a);
        }() : ph.v(da, Q, Dq, vI(g, wc)), Dq)), q(function() {
          var a = Vh.h(f, new U(null, 2, 5, V, [ju, cu], null));
          return q(a) ? sc : a;
        }()) && iI(w, g, za, P.h(ae.h(ju.g(f), ju.g(ns.g(function() {
          var a = da;
          return H.g ? H.g(a) : H.call(null, a);
        }()))) ? function() {
          var a = da;
          return H.g ? H.g(a) : H.call(null, a);
        }() : ph.v(da, Q, Qr, wI(g, sc)), Qr));
      }
      for (var hd = A(Ch.k(Ci, Fk.w(), h, qh, G([z], 0))), xc = null, Jd = 0, xd = 0;;) {
        if (xd < Jd) {
          var ee = xc.H(null, xd), yc = O.j(ee, 0, null), nb = O.j(ee, 1, null), lc = O.j(ee, 2, null), mc = O.j(ee, 3, null);
          if (1 === J(PA(lc)) || za === c) {
            iI(w, nb, za, mc), q(Vh.h(f, new U(null, 2, 5, V, [Kn, es], null))) && iI(w, nb, za, P.h(ae.h(Kn.g(f), Kn.g(ns.g(function() {
              var a = da;
              return H.g ? H.g(a) : H.call(null, a);
            }()))) ? function() {
              var a = da;
              return H.g ? H.g(a) : H.call(null, a);
            }() : ph.v(da, Q, new U(null, 2, 5, V, [Uu, yc], null), BI(nb, lc)), new U(null, 2, 5, V, [Uu, yc], null))), q(Vh.h(f, new U(null, 2, 5, V, [Kn, hm], null))) && iI(w, nb, za, P.h(ae.h(Kn.g(f), Kn.g(ns.g(function() {
              var a = da;
              return H.g ? H.g(a) : H.call(null, a);
            }()))) ? function() {
              var a = da;
              return H.g ? H.g(a) : H.call(null, a);
            }() : ph.v(da, Q, new U(null, 2, 5, V, [br, yc], null), DI(nb, lc)), new U(null, 2, 5, V, [br, yc], null))), q(Vh.h(f, new U(null, 2, 5, V, [Kn, bs], null))) && iI(w, nb, za, P.h(ae.h(Kn.g(f), Kn.g(ns.g(function() {
              var a = da;
              return H.g ? H.g(a) : H.call(null, a);
            }()))) ? function() {
              var a = da;
              return H.g ? H.g(a) : H.call(null, a);
            }() : ph.v(da, Q, new U(null, 2, 5, V, [Do, yc], null), xI(nb, lc)), new U(null, 2, 5, V, [Do, yc], null))), q(Vh.h(f, new U(null, 2, 5, V, [Kn, yo], null))) && iI(w, nb, za, P.h(ae.h(Kn.g(f), Kn.g(ns.g(function() {
              var a = da;
              return H.g ? H.g(a) : H.call(null, a);
            }()))) ? function() {
              var a = da;
              return H.g ? H.g(a) : H.call(null, a);
            }() : ph.v(da, Q, new U(null, 2, 5, V, [ss, yc], null), yI(nb, lc)), new U(null, 2, 5, V, [ss, yc], null))), q(Vh.h(f, new U(null, 2, 5, V, [Kn, Lm], null))) && iI(w, nb, za, P.h(ae.h(Kn.g(f), Kn.g(ns.g(function() {
              var a = da;
              return H.g ? H.g(a) : H.call(null, a);
            }()))) ? function() {
              var a = da;
              return H.g ? H.g(a) : H.call(null, a);
            }() : ph.v(da, Q, new U(null, 2, 5, V, [or, yc], null), zI(nb, lc)), new U(null, 2, 5, V, [or, yc], null))), q(Vh.h(f, new U(null, 2, 5, V, [Kn, Bm], null))) && iI(w, nb, za, P.h(ae.h(Kn.g(f), Kn.g(ns.g(function() {
              var a = da;
              return H.g ? H.g(a) : H.call(null, a);
            }()))) ? function() {
              var a = da;
              return H.g ? H.g(a) : H.call(null, a);
            }() : ph.v(da, Q, new U(null, 2, 5, V, [av, yc], null), AI(nb, lc)), new U(null, 2, 5, V, [av, yc], null)));
          }
          xd += 1;
        } else {
          var nc = A(hd);
          if (nc) {
            var ve = nc;
            if (S(ve)) {
              var Kd = x(ve), we = y(ve), Fc = Kd, Pe = J(Kd), hd = we, xc = Fc, Jd = Pe
            } else {
              var Ld = C(ve), Jb = O.j(Ld, 0, null), Vb = O.j(Ld, 1, null), Rc = O.j(Ld, 2, null), id = O.j(Ld, 3, null);
              if (1 === J(PA(Rc)) || za === c) {
                iI(w, Vb, za, id), q(Vh.h(f, new U(null, 2, 5, V, [Kn, es], null))) && iI(w, Vb, za, P.h(ae.h(Kn.g(f), Kn.g(ns.g(function() {
                  var a = da;
                  return H.g ? H.g(a) : H.call(null, a);
                }()))) ? function() {
                  var a = da;
                  return H.g ? H.g(a) : H.call(null, a);
                }() : ph.v(da, Q, new U(null, 2, 5, V, [Uu, Jb], null), BI(Vb, Rc)), new U(null, 2, 5, V, [Uu, Jb], null))), q(Vh.h(f, new U(null, 2, 5, V, [Kn, hm], null))) && iI(w, Vb, za, P.h(ae.h(Kn.g(f), Kn.g(ns.g(function() {
                  var a = da;
                  return H.g ? H.g(a) : H.call(null, a);
                }()))) ? function() {
                  var a = da;
                  return H.g ? H.g(a) : H.call(null, a);
                }() : ph.v(da, Q, new U(null, 2, 5, V, [br, Jb], null), DI(Vb, Rc)), new U(null, 2, 5, V, [br, Jb], null))), q(Vh.h(f, new U(null, 2, 5, V, [Kn, bs], null))) && iI(w, Vb, za, P.h(ae.h(Kn.g(f), Kn.g(ns.g(function() {
                  var a = da;
                  return H.g ? H.g(a) : H.call(null, a);
                }()))) ? function() {
                  var a = da;
                  return H.g ? H.g(a) : H.call(null, a);
                }() : ph.v(da, Q, new U(null, 2, 5, V, [Do, Jb], null), xI(Vb, Rc)), new U(null, 2, 5, V, [Do, Jb], null))), q(Vh.h(f, new U(null, 2, 5, V, [Kn, yo], null))) && iI(w, Vb, za, P.h(ae.h(Kn.g(f), Kn.g(ns.g(function() {
                  var a = da;
                  return H.g ? H.g(a) : H.call(null, a);
                }()))) ? function() {
                  var a = da;
                  return H.g ? H.g(a) : H.call(null, a);
                }() : ph.v(da, Q, new U(null, 2, 5, V, [ss, Jb], null), yI(Vb, Rc)), new U(null, 2, 5, V, [ss, Jb], null))), q(Vh.h(f, new U(null, 2, 5, V, [Kn, Lm], null))) && iI(w, Vb, za, P.h(ae.h(Kn.g(f), Kn.g(ns.g(function() {
                  var a = da;
                  return H.g ? H.g(a) : H.call(null, a);
                }()))) ? function() {
                  var a = da;
                  return H.g ? H.g(a) : H.call(null, a);
                }() : ph.v(da, Q, new U(null, 2, 5, V, [or, Jb], null), zI(Vb, Rc)), new U(null, 2, 5, V, [or, Jb], null))), q(Vh.h(f, new U(null, 2, 5, V, [Kn, Bm], null))) && iI(w, Vb, za, P.h(ae.h(Kn.g(f), Kn.g(ns.g(function() {
                  var a = da;
                  return H.g ? H.g(a) : H.call(null, a);
                }()))) ? function() {
                  var a = da;
                  return H.g ? H.g(a) : H.call(null, a);
                }() : ph.v(da, Q, new U(null, 2, 5, V, [av, Jb], null), AI(Vb, Rc)), new U(null, 2, 5, V, [av, Jb], null)));
              }
              hd = F(ve);
              xc = null;
              Jd = 0;
            }
            xd = 0;
          } else {
            break;
          }
        }
      }
      Zg.h(f, ns.g(function() {
        var a = da;
        return H.g ? H.g(a) : H.call(null, a);
      }())) && ph.v(da, Q, ns, f);
      bb += 1;
    } else {
      var Qe = A(Cb);
      if (Qe) {
        var yd = Qe;
        if (S(yd)) {
          var Md = x(yd), Nd = y(yd), fe = Md, Sc = J(Md), Cb = Nd, ab = fe, wb = Sc
        } else {
          var kb = C(yd), zc = O.h(H.g ? H.g(fI) : H.call(null, fI), kb), xe = O.j(H.g ? H.g(fI) : H.call(null, fI), kb + 1, aj), ye = C(nD(xe)), rf = nD(zc), ze = C(oD(zc)), ha = Lu.g(ef(zc));
          if (1 === J(PA(ze)) || kb === c) {
            iI(w, g, kb, B), q(Vh.h(f, new U(null, 2, 5, V, [ju, bs], null))) && iI(w, g, kb, P.h(ae.h(ju.g(f), ju.g(ns.g(function() {
              var a = ha;
              return H.g ? H.g(a) : H.call(null, a);
            }()))) ? function() {
              var a = ha;
              return H.g ? H.g(a) : H.call(null, a);
            }() : ph.v(ha, Q, Dq, vI(g, ze)), Dq)), q(function() {
              var a = Vh.h(f, new U(null, 2, 5, V, [ju, cu], null));
              return q(a) ? ye : a;
            }()) && iI(w, g, kb, P.h(ae.h(ju.g(f), ju.g(ns.g(function() {
              var a = ha;
              return H.g ? H.g(a) : H.call(null, a);
            }()))) ? function() {
              var a = ha;
              return H.g ? H.g(a) : H.call(null, a);
            }() : ph.v(ha, Q, Qr, wI(g, ye)), Qr));
          }
          for (var Ae = A(Ch.k(Ci, Fk.w(), h, rf, G([z], 0))), ge = null, Be = 0, Gc = 0;;) {
            if (Gc < Be) {
              var Hc = ge.H(null, Gc), gc = O.j(Hc, 0, null), Kb = O.j(Hc, 1, null), he = O.j(Hc, 2, null), jd = O.j(Hc, 3, null);
              if (1 === J(PA(he)) || kb === c) {
                iI(w, Kb, kb, jd), q(Vh.h(f, new U(null, 2, 5, V, [Kn, es], null))) && iI(w, Kb, kb, P.h(ae.h(Kn.g(f), Kn.g(ns.g(function() {
                  var a = ha;
                  return H.g ? H.g(a) : H.call(null, a);
                }()))) ? function() {
                  var a = ha;
                  return H.g ? H.g(a) : H.call(null, a);
                }() : ph.v(ha, Q, new U(null, 2, 5, V, [Uu, gc], null), BI(Kb, he)), new U(null, 2, 5, V, [Uu, gc], null))), q(Vh.h(f, new U(null, 2, 5, V, [Kn, hm], null))) && iI(w, Kb, kb, P.h(ae.h(Kn.g(f), Kn.g(ns.g(function() {
                  var a = ha;
                  return H.g ? H.g(a) : H.call(null, a);
                }()))) ? function() {
                  var a = ha;
                  return H.g ? H.g(a) : H.call(null, a);
                }() : ph.v(ha, Q, new U(null, 2, 5, V, [br, gc], null), DI(Kb, he)), new U(null, 2, 5, V, [br, gc], null))), q(Vh.h(f, new U(null, 2, 5, V, [Kn, bs], null))) && iI(w, Kb, kb, P.h(ae.h(Kn.g(f), Kn.g(ns.g(function() {
                  var a = ha;
                  return H.g ? H.g(a) : H.call(null, a);
                }()))) ? function() {
                  var a = ha;
                  return H.g ? H.g(a) : H.call(null, a);
                }() : ph.v(ha, Q, new U(null, 2, 5, V, [Do, gc], null), xI(Kb, he)), new U(null, 2, 5, V, [Do, gc], null))), q(Vh.h(f, new U(null, 2, 5, V, [Kn, yo], null))) && iI(w, Kb, kb, P.h(ae.h(Kn.g(f), Kn.g(ns.g(function() {
                  var a = ha;
                  return H.g ? H.g(a) : H.call(null, a);
                }()))) ? function() {
                  var a = ha;
                  return H.g ? H.g(a) : H.call(null, a);
                }() : ph.v(ha, Q, new U(null, 2, 5, V, [ss, gc], null), yI(Kb, he)), new U(null, 2, 5, V, [ss, gc], null))), q(Vh.h(f, new U(null, 2, 5, V, [Kn, Lm], null))) && iI(w, Kb, kb, P.h(ae.h(Kn.g(f), Kn.g(ns.g(function() {
                  var a = ha;
                  return H.g ? H.g(a) : H.call(null, a);
                }()))) ? function() {
                  var a = ha;
                  return H.g ? H.g(a) : H.call(null, a);
                }() : ph.v(ha, Q, new U(null, 2, 5, V, [or, gc], null), zI(Kb, he)), new U(null, 2, 5, V, [or, gc], null))), q(Vh.h(f, new U(null, 2, 5, V, [Kn, Bm], null))) && iI(w, Kb, kb, P.h(ae.h(Kn.g(f), Kn.g(ns.g(function() {
                  var a = ha;
                  return H.g ? H.g(a) : H.call(null, a);
                }()))) ? function() {
                  var a = ha;
                  return H.g ? H.g(a) : H.call(null, a);
                }() : ph.v(ha, Q, new U(null, 2, 5, V, [av, gc], null), AI(Kb, he)), new U(null, 2, 5, V, [av, gc], null)));
              }
              Gc += 1;
            } else {
              var Ac = A(Ae);
              if (Ac) {
                var Lb = Ac;
                if (S(Lb)) {
                  var hc = x(Lb), sf = y(Lb), Ag = hc, Ce = J(hc), Ae = sf, ge = Ag, Be = Ce
                } else {
                  var De = C(Lb), ub = O.j(De, 0, null), Ha = O.j(De, 1, null), Od = O.j(De, 2, null), Wb = O.j(De, 3, null);
                  if (1 === J(PA(Od)) || kb === c) {
                    iI(w, Ha, kb, Wb), q(Vh.h(f, new U(null, 2, 5, V, [Kn, es], null))) && iI(w, Ha, kb, P.h(ae.h(Kn.g(f), Kn.g(ns.g(function() {
                      var a = ha;
                      return H.g ? H.g(a) : H.call(null, a);
                    }()))) ? function() {
                      var a = ha;
                      return H.g ? H.g(a) : H.call(null, a);
                    }() : ph.v(ha, Q, new U(null, 2, 5, V, [Uu, ub], null), BI(Ha, Od)), new U(null, 2, 5, V, [Uu, ub], null))), q(Vh.h(f, new U(null, 2, 5, V, [Kn, hm], null))) && iI(w, Ha, kb, P.h(ae.h(Kn.g(f), Kn.g(ns.g(function() {
                      var a = ha;
                      return H.g ? H.g(a) : H.call(null, a);
                    }()))) ? function() {
                      var a = ha;
                      return H.g ? H.g(a) : H.call(null, a);
                    }() : ph.v(ha, Q, new U(null, 2, 5, V, [br, ub], null), DI(Ha, Od)), new U(null, 2, 5, V, [br, ub], null))), q(Vh.h(f, new U(null, 2, 5, V, [Kn, bs], null))) && iI(w, Ha, kb, P.h(ae.h(Kn.g(f), Kn.g(ns.g(function() {
                      var a = ha;
                      return H.g ? H.g(a) : H.call(null, a);
                    }()))) ? function() {
                      var a = ha;
                      return H.g ? H.g(a) : H.call(null, a);
                    }() : ph.v(ha, Q, new U(null, 2, 5, V, [Do, ub], null), xI(Ha, Od)), new U(null, 2, 5, V, [Do, ub], null))), q(Vh.h(f, new U(null, 2, 5, V, [Kn, yo], null))) && iI(w, Ha, kb, P.h(ae.h(Kn.g(f), Kn.g(ns.g(function() {
                      var a = ha;
                      return H.g ? H.g(a) : H.call(null, a);
                    }()))) ? function() {
                      var a = ha;
                      return H.g ? H.g(a) : H.call(null, a);
                    }() : ph.v(ha, Q, new U(null, 2, 5, V, [ss, ub], null), yI(Ha, Od)), new U(null, 2, 5, V, [ss, ub], null))), q(Vh.h(f, new U(null, 2, 5, V, [Kn, Lm], null))) && iI(w, Ha, kb, P.h(ae.h(Kn.g(f), Kn.g(ns.g(function() {
                      var a = ha;
                      return H.g ? H.g(a) : H.call(null, a);
                    }()))) ? function() {
                      var a = ha;
                      return H.g ? H.g(a) : H.call(null, a);
                    }() : ph.v(ha, Q, new U(null, 2, 5, V, [or, ub], null), zI(Ha, Od)), new U(null, 2, 5, V, [or, ub], null))), q(Vh.h(f, new U(null, 2, 5, V, [Kn, Bm], null))) && iI(w, Ha, kb, P.h(ae.h(Kn.g(f), Kn.g(ns.g(function() {
                      var a = ha;
                      return H.g ? H.g(a) : H.call(null, a);
                    }()))) ? function() {
                      var a = ha;
                      return H.g ? H.g(a) : H.call(null, a);
                    }() : ph.v(ha, Q, new U(null, 2, 5, V, [av, ub], null), AI(Ha, Od)), new U(null, 2, 5, V, [av, ub], null)));
                  }
                  Ae = F(Lb);
                  ge = null;
                  Be = 0;
                }
                Gc = 0;
              } else {
                break;
              }
            }
          }
          Zg.h(f, ns.g(function() {
            var a = ha;
            return H.g ? H.g(a) : H.call(null, a);
          }())) && ph.v(ha, Q, ns, f);
          Cb = F(yd);
          ab = null;
          wb = 0;
        }
        bb = 0;
      } else {
        break;
      }
    }
  }
  MH(g, w, c);
  for (var oc = A(h), Pd = null, Re = 0, Ee = 0;;) {
    if (Ee < Re) {
      var Bg = Pd.H(null, Ee);
      MH(Bg, w, c);
      Ee += 1;
    } else {
      var tf = A(oc);
      if (tf) {
        var kd = tf;
        if (S(kd)) {
          var Fe = x(kd), Tf = y(kd), Se = Fe, pc = J(Fe), oc = Tf, Pd = Se, Re = pc
        } else {
          var uf = C(kd);
          MH(uf, w, c);
          oc = F(kd);
          Pd = null;
          Re = 0;
        }
        Ee = 0;
      } else {
        break;
      }
    }
  }
  if (q(e)) {
    var Qd = O.h(h, d);
    NH(Qd, w, c, e);
  }
  if (q(Vh.h(f, new U(null, 2, 5, V, [Zl, bs], null)))) {
    for (var Te = A(Ch.k(Ci, Fk.w(), nD(p), nD(s), G([Sg.h(C(oD(p)), mD(p)), h, Sg.h(g, h)], 0))), Cg = null, Ue = 0, ie = 0;;) {
      if (ie < Ue) {
        var zd = Cg.H(null, ie), vf = O.j(zd, 0, null), wf = O.j(zd, 1, null);
        O.j(zd, 2, null);
        var je = O.j(zd, 3, null), Tc = O.j(zd, 4, null), Uf = O.j(zd, 5, null);
        (Ib(e) || ae.h(d, vf)) && kI(w, wf, Tc, je, Uf, e, c, f);
        ie += 1;
      } else {
        var Vf = A(Te);
        if (Vf) {
          var Ve = Vf;
          if (S(Ve)) {
            var xf = x(Ve), Xj = y(Ve), rh = xf, ke = J(xf), Te = Xj, Cg = rh, Ue = ke
          } else {
            var We = C(Ve), yf = O.j(We, 0, null), Wf = O.j(We, 1, null);
            O.j(We, 2, null);
            var Xf = O.j(We, 3, null), si = O.j(We, 4, null), kl = O.j(We, 5, null);
            (Ib(e) || ae.h(d, yf)) && kI(w, Wf, si, Xf, kl, e, c, f);
            Te = F(Ve);
            Cg = null;
            Ue = 0;
          }
          ie = 0;
        } else {
          break;
        }
      }
    }
  }
  if (q(q(e) ? c + 1 < J(H.g ? H.g(fI) : H.call(null, fI)) : e)) {
    var ll = O.h(nD(p), d), Yj = O.h(nD(s), d), Zj = O.h(h, d);
    rI(w, ll, Yj, Zj, e, c, D, f);
  }
  return null;
}
function HI(a, b, c) {
  var d = cH.w();
  oA(a, b, function(a, b, d) {
    return function(a) {
      fH.h(d, a);
      return q(c.g ? c.g(a) : c.call(null, a)) ? (a.preventDefault(), !1) : null;
    };
  }(a, b, d));
  return d;
}
function II(a, b) {
  var c = HI(a, "click", function() {
    return!1;
  }), d = cH.g(1);
  BG(function(a, c) {
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
                      SG(c);
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
              var e = a[7], d = a[8], f = a[9], d = a[2], g = d.offsetX, f = d.offsetY, d = H.g ? H.g(hI) : H.call(null, hI), h = ju.g(d), d = H.g ? H.g(hI) : H.call(null, hI), e = fo.g(d), d = H.g ? H.g(fI) : H.call(null, fI), d = J(d) - 2, h = KH(h, g, f);
              a[7] = h;
              a[8] = g;
              a[10] = d;
              a[9] = f;
              a[11] = e;
              a[1] = q(h) ? 8 : 9;
              return Z;
            }
            return 1 === d ? (a[2] = null, a[1] = 2, Z) : 4 === d ? OG(a, 7, c) : 15 === d ? (d = a[2], a[2] = d, a[1] = 12, Z) : 13 === d ? (d = a[8], g = a[12], f = a[9], e = a[13], e = a[11], g = O.h(e, g), d = KH(g, d, f), a[13] = d, a[1] = q(d) ? 16 : 17, Z) : 6 === d ? (d = a[2], a[2] = d, a[1] = 3, Z) : 17 === d ? (g = a[12], a[12] = g + 1, a[2] = null, a[1] = 11, Z) : 3 === d ? (d = a[2], QG(a, d)) : 12 === d ? (d = a[2], a[2] = d, a[1] = 10, Z) : 2 === d ? (a[1] = 4, Z) : 11 === d ? (g = 
            a[12], e = a[11], d = J(e), a[1] = q(g < d) ? 13 : 14, Z) : 9 === d ? (a[12] = 0, a[2] = null, a[1] = 11, Z) : 5 === d ? (a[2] = null, a[1] = 6, Z) : 14 === d ? (d = ph.v(b, Q, cs, null), a[2] = d, a[1] = 15, Z) : 16 === d ? (g = a[12], d = a[10], e = a[13], f = O.j(e, 0, null), e = O.j(e, 1, null), d = af([fr, cs, Sn], [g, e, f < d ? f : d]), d = nh.h ? nh.h(b, d) : nh.call(null, b, d), a[2] = d, a[1] = 18, Z) : 10 === d ? (a[14] = a[2], a[2] = null, a[1] = 2, Z) : 18 === d ? (d = a[2], 
            a[2] = d, a[1] = 15, Z) : 8 === d ? (e = a[7], d = a[10], g = O.j(e, 0, null), e = O.j(e, 1, null), d = ph.v(b, Q, Sn, g < d ? g : d), a[15] = e, a[2] = d, a[1] = 10, Z) : null;
          };
        }(a, c), a, c);
      }(), h = function() {
        var b = d.w ? d.w() : d.call(null);
        b[6] = a;
        return b;
      }();
      return NG(h);
    };
  }(d, c));
}
var JI = new n(null, 6, [33, co, 34, vu, 37, Av, 38, Uq, 39, Ct, 40, fm], null);
function KI(a, b) {
  var c = HI(document, "keydown", function(a) {
    a = a.keyCode;
    return JI.g ? JI.g(a) : JI.call(null, a);
  }), d = cH.g(1);
  BG(function(c, d) {
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
                      SG(c);
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
              var g = e[7], h = e[8], z = e[2], D = z.keyCode, D = JI.g ? JI.g(D) : JI.call(null, D), K = H.g ? H.g(fI) : H.call(null, fI), L = J(K) - 2;
              e[7] = D;
              e[8] = z;
              e[9] = L;
              e[1] = q(D) ? 8 : 9;
              return Z;
            }
            if (20 === f) {
              return z = jI(!0), e[2] = z, e[1] = 11, Z;
            }
            if (1 === f) {
              return e[2] = null, e[1] = 2, Z;
            }
            if (4 === f) {
              return OG(e, 7, d);
            }
            if (15 === f) {
              var g = e[7], h = e[8], L = e[9], I = V, M = [Sn], T = new U(null, 1, 5, I, M, null), z = ph.v(a, Yh, T, function() {
                return function() {
                  return function(a) {
                    a -= 1;
                    return 0 < a ? a : 0;
                  };
                }(L, g, h, g, h, L, I, M, T, f, c, d);
              }());
              e[2] = z;
              e[1] = 16;
              return Z;
            }
            if (13 === f) {
              return z = H.g ? H.g(a) : H.call(null, a), z = 0 === Sn.g(z), e[1] = q(z) ? 14 : 15, Z;
            }
            if (6 === f) {
              return z = e[2], e[2] = z, e[1] = 3, Z;
            }
            if (17 === f) {
              var g = e[7], h = e[8], L = e[9], ba = V, N = [cs], ua = new U(null, 1, 5, ba, N, null), z = ph.v(a, Yh, ua, function() {
                return function() {
                  return function(a) {
                    return q(a) ? a - 1 : null;
                  };
                }(L, g, h, g, h, L, ba, N, ua, f, c, d);
              }());
              e[2] = z;
              e[1] = 11;
              return Z;
            }
            if (3 === f) {
              return z = e[2], QG(e, z);
            }
            if (12 === f) {
              var g = e[7], h = e[8], L = e[9], Y = V, fa = [Sn], ia = new U(null, 1, 5, Y, fa, null), z = ph.v(a, Yh, ia, function() {
                return function(a) {
                  return function(b) {
                    b += 1;
                    return b < a ? b : a;
                  };
                }(L, g, h, g, h, L, Y, fa, ia, f, c, d);
              }());
              e[2] = z;
              e[1] = 11;
              return Z;
            }
            if (2 === f) {
              return e[1] = 4, Z;
            }
            if (19 === f) {
              return z = jI(!1), e[2] = z, e[1] = 11, Z;
            }
            if (11 === f) {
              return z = e[2], e[2] = z, e[1] = 10, Z;
            }
            if (9 === f) {
              return e[2] = null, e[1] = 10, Z;
            }
            if (5 === f) {
              return e[2] = null, e[1] = 6, Z;
            }
            if (14 === f) {
              return D = b.w ? b.w() : b.call(null), z = ph.h(a, Lf), e[10] = D, e[2] = z, e[1] = 16, Z;
            }
            if (16 === f) {
              return z = e[2], e[2] = z, e[1] = 11, Z;
            }
            if (10 === f) {
              return e[11] = e[2], e[2] = null, e[1] = 2, Z;
            }
            if (18 === f) {
              var g = e[7], h = e[8], L = e[9], pa = V, xa = [cs], wa = new U(null, 1, 5, pa, xa, null), z = ph.v(a, Yh, wa, function() {
                return function() {
                  return function(a) {
                    return q(a) ? a + 1 : null;
                  };
                }(L, g, h, g, h, L, pa, xa, wa, f, c, d);
              }());
              e[2] = z;
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
      return NG(h);
    };
  }(d, c));
}
function LI(a) {
  var b = MI(), c = GI, d = NI, e = nD(a), f = Lt.g(H.g ? H.g(cI) : H.call(null, cI)), g = C(oD(a)), h = ps.g(f), l = JA(g);
  a = 1 === J(KA(l)) ? XH(l, h + 10, f) : $H(l, h + 10, f);
  var p = Fn.g(f), e = Rb.j(function(a, b, c, d, e, f, g) {
    return function(a, c) {
      var d = JA(c), e = ff(a), e = OH(q(e) ? e : f) + g;
      if (1 === J(KA(d))) {
        var h = Bf(b) ? R.h(kh, b) : b, l = P.h(h, Ku), s = P.h(h, Gn), p = P.h(h, ov), h = P.h(h, Bo), d = WH(af([Hm, wn, Pn, vo, Bo, Hr, qs, vs, Cu, Ku, Ev], [0, d, p, s, h, 900, 30, e, !0, l, p]))
      } else {
        p = Bf(b) ? R.h(kh, b) : b, l = P.h(p, Ku), s = P.h(p, Gn), p = P.h(p, ov), d = ZH(af([Hm, wn, Pn, vo, Hr, qs, vs, Cu, Ku, Ev], [0, d, p, s, 900, 30, e, !0, l, p]));
      }
      return Ze.h(a, d);
    };
  }(e, f, g, h, l, a, p), Ye, e), e = new n(null, 2, [ju, a, fo, e], null);
  nh.h ? nh.h(hI, e) : nh.call(null, hI, e);
  e = cH.g(1);
  BG(function(a) {
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
                      SG(c);
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
              var f = c[7], g = cj, h = mh.g ? mh.g(g) : mh.call(null, g), l = Yg.v(f, Q, Lu, h), e = ph.h(fI, function() {
                return function(a) {
                  return function(b) {
                    return ri(Dh.h(H.g ? H.g(eI) : H.call(null, eI), Ke(a, b)));
                  };
                }(l, f, f, f, g, h, l, d, a);
              }());
              c[8] = e;
              c[2] = null;
              c[1] = 2;
              return Z;
            }
            return 4 === d ? (f = c[7], e = c[2], c[7] = e, c[1] = q(e) ? 5 : 6, Z) : 3 === d ? (e = c[2], QG(c, e)) : 2 === d ? OG(c, 4, b) : 1 === d ? (c[2] = null, c[1] = 2, Z) : null;
          };
        }(a), a);
      }(), d = function() {
        var b = c.w ? c.w() : c.call(null);
        b[6] = a;
        return b;
      }();
      return NG(d);
    };
  }(e));
  e = bx("#comportex-viz");
  e.width = .7 * (window.innerWidth - 20);
  e.height = 900;
  II(e, c);
  KI(c, d);
}
;function OI(a, b) {
  if (a.classList) {
    a.classList.add(b);
  } else {
    var c;
    a.classList ? c = !a.classList.contains(b) : (a.classList ? c = a.classList : (c = a.className, c = la(c) && c.match(/\S+/g) || []), c = !(0 <= jb(c, b)));
    c && (a.className += 0 < a.className.length ? " " + b : b);
  }
}
;function PI() {
  $z.call(this);
  this.Md = new iA(this);
  this.Ah = this;
  this.qh = null;
}
Ga(PI, $z);
PI.prototype[eA] = !0;
k = PI.prototype;
k.addEventListener = function(a, b, c, d) {
  oA(this, a, b, c, d);
};
k.removeEventListener = function(a, b, c, d) {
  uA(this, a, b, c, d);
};
k.dispatchEvent = function(a) {
  var b, c = this.qh;
  if (c) {
    for (b = [];c;c = c.qh) {
      b.push(c);
    }
  }
  var c = this.Ah, d = a.type || a;
  if (la(a)) {
    a = new bA(a, c);
  } else {
    if (a instanceof bA) {
      a.target = a.target || c;
    } else {
      var e = a;
      a = new bA(d, c);
      cb(a, e);
    }
  }
  var e = !0, f;
  if (b) {
    for (var g = b.length - 1;!a.Sd && 0 <= g;g--) {
      f = a.currentTarget = b[g], e = QI(f, d, !0, a) && e;
    }
  }
  a.Sd || (f = a.currentTarget = c, e = QI(f, d, !0, a) && e, a.Sd || (e = QI(f, d, !1, a) && e));
  if (b) {
    for (g = 0;!a.Sd && g < b.length;g++) {
      f = a.currentTarget = b[g], e = QI(f, d, !1, a) && e;
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
function QI(a, b, c, d) {
  b = a.Md.ec[String(b)];
  if (!b) {
    return!0;
  }
  b = b.concat();
  for (var e = !0, f = 0;f < b.length;++f) {
    var g = b[f];
    if (g && !g.Td && g.te == c) {
      var h = g.wd, l = g.qc || g.src;
      g.se && kA(a.Md, g);
      e = !1 !== h.call(l, d) && e;
    }
  }
  return e && !1 != d.sh;
}
k.If = function(a, b, c, d) {
  return this.Md.If(String(a), b, c, d);
};
function RI(a, b, c) {
  if (oa(a)) {
    c && (a = Ba(a, c));
  } else {
    if (a && "function" == typeof a.handleEvent) {
      a = Ba(a.handleEvent, a);
    } else {
      throw Error("Invalid listener argument");
    }
  }
  return 2147483647 < b ? -1 : ca.setTimeout(a, b || 0);
}
;var SI, TI, UI, VI, WI, XI, YI;
function ZI(a, b, c) {
  var d = R.h(Nf, Zi(c));
  return 0 < d ? Jf.j(Ik.j(zq, as, ur), Pf, Oh.h(fh.h(eg, zq), Ch.h(function(b) {
    return function(d) {
      var g = UA(a, 0, d), h = qk(c, g), l = R.h(Nf, Zi(h)), h = Yi(h);
      return new n(null, 5, [Vn, d, as, J(h) / J(g), ur, J(h) / J(c), zq, l / b, kv, l / J(g)], null);
    };
  }(d), b))) : null;
}
var aJ = function $I(b, c) {
  "undefined" === typeof SI && (SI = function(b, c, f, g) {
    this.e = b;
    this.f = c;
    this.Zi = f;
    this.wi = g;
    this.K = 0;
    this.B = 393216;
  }, SI.wb = !0, SI.vb = "org.nfrac.comportex.encoders/t36936", SI.Bb = function(b, c) {
    return nd(c, "org.nfrac.comportex.encoders/t36936");
  }, SI.prototype.Zc = function(b, c, f) {
    return UA(this.e, c, this.f.g ? this.f.g(f) : this.f.call(null, f));
  }, SI.prototype.Qd = function(b, c, f) {
    return VA(this.e, c, f);
  }, SI.prototype.Lb = function() {
    return JA(this.e);
  }, SI.prototype.L = function() {
    return this.wi;
  }, SI.prototype.M = function(b, c) {
    return new SI(this.e, this.f, this.Zi, c);
  });
  return new SI(c, b, $I, null);
}, cJ = function bJ(b) {
  "undefined" === typeof TI && (TI = function(b, d, e) {
    this.e = b;
    this.fi = d;
    this.xi = e;
    this.K = 0;
    this.B = 393216;
  }, TI.wb = !0, TI.vb = "org.nfrac.comportex.encoders/t36943", TI.Bb = function(b, d) {
    return nd(d, "org.nfrac.comportex.encoders/t36943");
  }, TI.prototype.Zc = function(b, d, e) {
    var f = this;
    return R.h(KC, Ch.h(function() {
      return function(b) {
        return UA(f.e, d, b);
      };
    }(this), e));
  }, TI.prototype.Lb = function() {
    return JA(this.e);
  }, TI.prototype.L = function() {
    return this.xi;
  }, TI.prototype.M = function(b, d) {
    return new TI(this.e, this.fi, d);
  });
  return new TI(b, bJ, null);
}, dJ = function() {
  function a(a, c) {
    var f = PA(c), g = RA(c), h = Yh.v(f, new U(null, 1, 5, V, [0], null), Of, a), l = yC(h);
    "undefined" === typeof UI && (UI = function(a, b, c, d, e, f, g, h) {
      this.O = a;
      this.Df = b;
      this.Fg = c;
      this.di = d;
      this.e = e;
      this.xd = f;
      this.Ef = g;
      this.yi = h;
      this.K = 0;
      this.B = 393216;
    }, UI.wb = !0, UI.vb = "org.nfrac.comportex.encoders/t36952", UI.Bb = function() {
      return function(a, b) {
        return nd(b, "org.nfrac.comportex.encoders/t36952");
      };
    }(f, g, h, l), UI.prototype.Zc = function(a, b, c, d) {
      return function(e, f, g) {
        var h = this;
        return R.h(KC, hh(function() {
          return function(a, b) {
            return UA(h.e, f + a * h.Fg, b);
          };
        }(this, a, b, c, d), g));
      };
    }(f, g, h, l), UI.prototype.Lb = function() {
      return function() {
        return this.O;
      };
    }(f, g, h, l), UI.prototype.L = function() {
      return function() {
        return this.yi;
      };
    }(f, g, h, l), UI.prototype.M = function() {
      return function(a, b) {
        return new UI(this.O, this.Df, this.Fg, this.di, this.e, this.xd, this.Ef, b);
      };
    }(f, g, h, l));
    return new UI(l, h, g, f, c, a, b, null);
  }
  var b = null, c = function() {
    function a(b, d, h) {
      var l = null;
      2 < arguments.length && (l = G(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      var l = Sg.h(d, e), p = Ch.h(RA, l), s = Sg.h(0, Hk.h(Nf, p)), t = R.h(zC, Ch.h(PA, l)), w = yC(t);
      "undefined" === typeof VI && (VI = function(a, b, c, d, e, f, g, h, l, s) {
        this.O = a;
        this.Df = b;
        this.nh = c;
        this.pj = d;
        this.Gg = e;
        this.hc = f;
        this.e = g;
        this.xd = h;
        this.Ef = l;
        this.zi = s;
        this.K = 0;
        this.B = 393216;
      }, VI.wb = !0, VI.vb = "org.nfrac.comportex.encoders/t36955", VI.Bb = function() {
        return function(a, b) {
          return nd(b, "org.nfrac.comportex.encoders/t36955");
        };
      }(l, p, s, t, w), VI.prototype.Zc = function(a, b, c, d, e) {
        return function(f, g, h) {
          return R.h(KC, Ch.v(function() {
            return function(a, b, c) {
              return UA(a, g + b, c);
            };
          }(this, a, b, c, d, e), this.Gg, this.nh, h));
        };
      }(l, p, s, t, w), VI.prototype.Lb = function() {
        return function() {
          return this.O;
        };
      }(l, p, s, t, w), VI.prototype.L = function() {
        return function() {
          return this.zi;
        };
      }(l, p, s, t, w), VI.prototype.M = function() {
        return function(a, b) {
          return new VI(this.O, this.Df, this.nh, this.pj, this.Gg, this.hc, this.e, this.xd, this.Ef, b);
        };
      }(l, p, s, t, w));
      return new VI(w, t, s, p, l, e, d, a, b, null);
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
}(), fJ = function eJ(b, c, d) {
  var e = O.j(d, 0, null), f = O.j(d, 1, null), g = yC(new U(null, 1, 5, V, [b], null)), h = f - e;
  "undefined" === typeof WI && (WI = function(b, c, d, e, f, g, h, D, K, L) {
    this.span = b;
    this.O = c;
    this.upper = d;
    this.lower = e;
    this.mj = f;
    this.Xi = g;
    this.kd = h;
    this.re = D;
    this.ni = K;
    this.Ai = L;
    this.K = 0;
    this.B = 393216;
  }, WI.wb = !0, WI.vb = "org.nfrac.comportex.encoders/t36966", WI.Bb = function() {
    return function(b, c) {
      return nd(c, "org.nfrac.comportex.encoders/t36966");
    };
  }(g, h, d, e, f), WI.prototype.Zc = function() {
    return function(b, c, d) {
      return q(d) ? (b = this.lower, d = d > b ? d : b, b = this.upper, d = Yf(((d < b ? d : b) - this.lower) / this.span * (this.re - this.kd)), yk(Fk.h(c + d, c + d + this.kd))) : uk;
    };
  }(g, h, d, e, f), WI.prototype.Qd = function() {
    return function(b, c, d) {
      b = Fk.j(this.lower, this.upper, 5 < this.span && 250 > this.span ? 1 : this.span / 50);
      return Dh.h(d, ZI(this, b, c));
    };
  }(g, h, d, e, f), WI.prototype.Lb = function() {
    return function() {
      return this.O;
    };
  }(g, h, d, e, f), WI.prototype.L = function() {
    return function() {
      return this.Ai;
    };
  }(g, h, d, e, f), WI.prototype.M = function() {
    return function(b, c) {
      return new WI(this.span, this.O, this.upper, this.lower, this.mj, this.Xi, this.kd, this.re, this.ni, c);
    };
  }(g, h, d, e, f));
  return new WI(h, g, f, e, d, d, c, b, eJ, null);
}, hJ = function gJ(b, c) {
  var d = J(c), e = b / d, f = Bk(c, Fk.w()), g = fJ(b, e, new U(null, 2, 5, V, [0, d - 1], null));
  "undefined" === typeof XI && (XI = function(b, c, d, e, f, g, B, z) {
    this.Lf = b;
    this.Ze = c;
    this.kd = d;
    this.xd = e;
    this.values = f;
    this.re = g;
    this.Dh = B;
    this.Bi = z;
    this.K = 0;
    this.B = 393216;
  }, XI.wb = !0, XI.vb = "org.nfrac.comportex.encoders/t36973", XI.Bb = function() {
    return function(b, c) {
      return nd(c, "org.nfrac.comportex.encoders/t36973");
    };
  }(d, e, f, g), XI.prototype.Zc = function() {
    return function(b, c, d) {
      return UA(this.Lf, c, this.Ze.g ? this.Ze.g(d) : this.Ze.call(null, d));
    };
  }(d, e, f, g), XI.prototype.Qd = function() {
    return function(b, c, d) {
      return Dh.h(d, ZI(this, this.values, c));
    };
  }(d, e, f, g), XI.prototype.Lb = function() {
    return function() {
      return JA(this.Lf);
    };
  }(d, e, f, g), XI.prototype.L = function() {
    return function() {
      return this.Bi;
    };
  }(d, e, f, g), XI.prototype.M = function() {
    return function(b, c) {
      return new XI(this.Lf, this.Ze, this.kd, this.xd, this.values, this.re, this.Dh, c);
    };
  }(d, e, f, g));
  return new XI(g, f, e, d, c, b, gJ, null);
};
var iJ = new U(null, 2, 5, V, [0, 15], null), jJ = new n(null, 6, [cm, new U(null, 6, 5, V, [0, 1, 2, 3, 4, 5], null), Tt, new U(null, 5, 5, V, [5, 4, 3, 2, 1], null), gv, new U(null, 5, 5, V, [6, 7, 8, 9, 10], null), Iu, new U(null, 5, 5, V, [6, 7, 8, 11, 12], null), wq, new U(null, 8, 5, V, [0, 2, 4, 6, 8, 10, 12, 14], null), Pt, new U(null, 8, 5, V, [10, 12, 11, 13, 12, 14, 13, 15], null)], null), kJ = Yi(jJ);
function lJ() {
  return Q.k(bC(function(a) {
    return new n(null, 2, [ou, a, Pm, null], null);
  }, jJ), Jm, 0, G([us, null], 0));
}
function mJ(a) {
  var b = O.h(kJ, Jm.g(a)), c = a.g ? a.g(b) : a.call(null, b), d = ae.h(Pm.g(c), J(ou.g(c)) - 1), e = us.g(a);
  return Yh.j(Yh.j(Yh.j(a, new U(null, 1, 5, V, [b], null), function(a, b, c, d) {
    return function(a) {
      return c ? Q.j(a, Pm, null) : q(d) ? a : Ib(Pm.g(a)) ? Q.j(a, Pm, 0) : Yh.j(a, new U(null, 1, 5, V, [Pm], null), qe);
    };
  }(b, c, d, e)), new U(null, 1, 5, V, [Jm], null), function(a, b, c) {
    return function(a) {
      return c ? WB(J(jJ)) : a;
    };
  }(b, c, d, e)), new U(null, 1, 5, V, [us], null), function(a, b, c, d) {
    return function(a) {
      return c ? 4 : q(q(d) ? 0 < a - 1 : d) ? a - 1 : q(d) ? null : a;
    };
  }(b, c, d, e));
}
function nJ(a) {
  return q(Pm.g(a)) ? P.h(ou.g(a), Pm.g(a)) : null;
}
var oJ = aJ(function(a) {
  return Ch.h(nJ, Ch.h(a, kJ));
}, cJ(fJ(400, 25, iJ))), pJ = af([Yl, Fm, Sm, Ym, Jn, Nn, Wn, mo, xq, Bq, Fq, Dr, Fr, Nr, ds, xs, Bt, Qt, Ou, uv, vv], [.2, 12, 5, .01, .2, 7, 9, new U(null, 1, 5, V, [1E3], null), .3, .05, 18, 2, .1, .05, .02, !1, .01, 8, 1E5, .16, 3]);
function qJ() {
  return fD(lJ(), mJ, oJ);
}
Fa("org.nfrac.comportex.demos.isolated_1d.input_gen", qJ);
var rJ = function() {
  function a(a, b) {
    return lD(dD, qJ(), a, b);
  }
  function b(a) {
    return c.h(a, pJ);
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
Fa("org.nfrac.comportex.demos.isolated_1d.n_region_model", rJ);
Fa("comportexviz.demos.isolated_1d.n_region_model", function(a) {
  return rJ.g(a);
});
var sJ = new U(null, 2, 5, V, [0, 15], null), tJ = new n(null, 6, [cm, new U(null, 6, 5, V, [0, 1, 2, 3, 4, 5], null), Tt, new U(null, 5, 5, V, [5, 4, 3, 2, 1], null), gv, new U(null, 5, 5, V, [6, 7, 8, 9, 10], null), Iu, new U(null, 5, 5, V, [6, 7, 8, 11, 12], null), wq, new U(null, 8, 5, V, [0, 2, 4, 6, 8, 10, 12, 14], null), Pt, new U(null, 8, 5, V, [10, 12, 11, 13, 12, 14, 13, 15], null)], null), uJ = Yi(tJ), vJ = 2 * Zf(Rb.h(Nf, Ch.h(J, Zi(tJ))));
function wJ() {
  return bC(function(a) {
    return new n(null, 3, [ou, a, Pm, null, $l, WB(vJ)], null);
  }, tJ);
}
function xJ(a) {
  return bC(function(a) {
    return ae.h(Pm.g(a), J(ou.g(a)) - 1) ? Q.k(a, Pm, null, G([$l, WB(vJ)], 0)) : Ib(Pm.g(a)) && 0 < $l.g(a) ? Yh.j(a, new U(null, 1, 5, V, [$l], null), Qf) : Ib(Pm.g(a)) && 0 === $l.g(a) ? Q.j(a, Pm, 0) : Yh.j(a, new U(null, 1, 5, V, [Pm], null), qe);
  }, a);
}
function yJ(a) {
  return q(Pm.g(a)) ? P.h(ou.g(a), Pm.g(a)) : null;
}
var zJ = aJ(function(a) {
  return Ch.h(yJ, Ch.h(a, uJ));
}, cJ(fJ(400, 25, sJ))), AJ = af([Yl, Fm, Sm, Ym, Jn, Nn, Wn, mo, Bq, Fq, Dr, Fr, Nr, ds, xs, Bt, Qt, Ou, uv, vv], [.2, 12, 5, .01, .2, 7, 9, new U(null, 1, 5, V, [1E3], null), .05, 18, 2, .1, .05, .02, !1, .01, 8, 1E5, .16, 3]);
function BJ() {
  return fD(wJ(), xJ, zJ);
}
Fa("org.nfrac.comportex.demos.mixed_gaps_1d.input_gen", BJ);
var CJ = function() {
  function a(a, b) {
    return lD(dD, BJ(), a, b);
  }
  function b(a) {
    return c.h(a, AJ);
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
Fa("org.nfrac.comportex.demos.mixed_gaps_1d.n_region_model", CJ);
var DJ = new U(null, 2, 5, V, [50, 50], null), EJ = new U(null, 2, 5, V, [10, 10], null), FJ = new n(null, 4, [uu, Th.j(Ci, Gh.g(1), Fk.g(10)), Gu, Sh.h(Th.j(Ci, Gh.g(1), Fk.g(5)), Th.j(Ci, Fk.j(1, 10, 2), Gh.g(5))), wm, Th.j(Ci, Fk.g(10), Fk.g(10)), Yn, ri(Hh.h(10, function() {
  return new U(null, 2, 5, V, [VB.h(0, 10), VB.h(0, 10)], null);
}))], null), GJ = Yi(FJ);
function HJ() {
  return Q.k(bC(function(a) {
    return new n(null, 2, [ou, a, Pm, null], null);
  }, FJ), Um, 0, G([qt, null], 0));
}
function IJ(a) {
  var b = O.h(GJ, Um.g(a)), c = a.g ? a.g(b) : a.call(null, b), d = ae.h(Pm.g(c), J(ou.g(c)) - 1), e = qt.g(a);
  return Yh.j(Yh.j(Yh.j(a, new U(null, 1, 5, V, [b], null), function(a, b, c, d) {
    return function(a) {
      return c ? Q.j(a, Pm, null) : q(d) ? a : Ib(Pm.g(a)) ? Q.j(a, Pm, 0) : Yh.j(a, new U(null, 1, 5, V, [Pm], null), qe);
    };
  }(b, c, d, e)), new U(null, 1, 5, V, [Um], null), function(a, b, c) {
    return function(a) {
      return c ? WB(J(FJ)) : a;
    };
  }(b, c, d, e)), new U(null, 1, 5, V, [qt], null), function(a, b, c, d) {
    return function(a) {
      return c ? 0 : q(q(d) ? 0 < a - 1 : d) ? a - 1 : q(d) ? null : a;
    };
  }(b, c, d, e));
}
function JJ(a) {
  return q(Pm.g(a)) ? P.h(ou.g(a), Pm.g(a)) : null;
}
var LJ = aJ(function(a) {
  return Ch.h(JJ, Ch.h(a, GJ));
}, cJ(function KJ(b, c, d) {
  var e = O.j(d, 0, null), f = O.j(d, 1, null), g = yC(b), h = O.j(b, 0, null), l = O.j(b, 1, null);
  "undefined" === typeof YI && (YI = function(b, c, d, e, f, g, h, l, L, I, M, T) {
    this.nj = b;
    this.cf = c;
    this.kd = d;
    this.O = e;
    this.oj = f;
    this.xh = g;
    this.ji = h;
    this.Yi = l;
    this.$e = L;
    this.Og = I;
    this.mi = M;
    this.Ci = T;
    this.K = 0;
    this.B = 393216;
  }, YI.wb = !0, YI.vb = "org.nfrac.comportex.encoders/t37012", YI.Bb = function() {
    return function(b, c) {
      return nd(c, "org.nfrac.comportex.encoders/t37012");
    };
  }(g, b, h, l, d, e, f), YI.prototype.Zc = function(b, c, d, e, f, g, h) {
    return function(l, L, I) {
      var M = this, T = O.j(I, 0, null), ba = O.j(I, 1, null);
      if (q(T)) {
        l = function() {
          var b = 0 < T ? T : 0, c = M.$e;
          return b < c ? b : c;
        }();
        L = function() {
          var b = 0 < ba ? ba : 0, c = M.cf;
          return b < c ? b : c;
        }();
        var N = l / M.$e, ua = L / M.cf, Y = Yf(N * M.xh), fa = Yf(ua * M.Og), ia = new U(null, 2, 5, V, [Y, fa], null), pa = MA(M.O, ia);
        return yk(Dh.h(M.kd, Nh.k(function(b, c, d, e, f, g, h, l) {
          return function(b) {
            return TA.v(M.O, l, b, b - 1);
          };
        }(l, L, N, ua, Y, fa, ia, pa, this, I, T, ba, b, c, d, e, f, g, h), G([Fk.g(10)], 0))));
      }
      return uk;
    };
  }(g, b, h, l, d, e, f), YI.prototype.Qd = function(b, c, d, e, f, g, h) {
    return function(l, L, I) {
      var M = this, T = this;
      l = function() {
        return function(b, c, d, e, f, g, h, l) {
          return function Ca(s) {
            return new sg(null, function(b, c, d, e, f, g, h, l) {
              return function() {
                for (var p = s;;) {
                  var t = A(p);
                  if (t) {
                    var w = t, I = C(w);
                    if (t = A(function(b, c, d, e, f, g, h, l, s, p, t, w) {
                      return function nc(I) {
                        return new sg(null, function(b, c) {
                          return function() {
                            for (;;) {
                              var b = A(I);
                              if (b) {
                                if (S(b)) {
                                  var d = x(b), e = J(d), f = wg(e);
                                  a: {
                                    for (var g = 0;;) {
                                      if (g < e) {
                                        var h = v.h(d, g);
                                        f.add(new U(null, 2, 5, V, [c, h], null));
                                        g += 1;
                                      } else {
                                        d = !0;
                                        break a;
                                      }
                                    }
                                    d = void 0;
                                  }
                                  return d ? zg(Mg(f), nc(y(b))) : zg(Mg(f), null);
                                }
                                f = C(b);
                                return Ke(new U(null, 2, 5, V, [c, f], null), nc(E(b)));
                              }
                              return null;
                            }
                          };
                        }(b, c, d, e, f, g, h, l, s, p, t, w), null, null);
                      };
                    }(p, I, w, t, b, c, d, e, f, g, h, l)(Fk.g(M.cf)))) {
                      return Rg.h(t, Ca(E(p)));
                    }
                    p = E(p);
                  } else {
                    return null;
                  }
                }
              };
            }(b, c, d, e, f, g, h, l), null, null);
          };
        }(T, b, c, d, e, f, g, h)(Fk.g(M.$e));
      }();
      return Dh.h(I, ZI(T, l, L));
    };
  }(g, b, h, l, d, e, f), YI.prototype.Lb = function() {
    return function() {
      return this.O;
    };
  }(g, b, h, l, d, e, f), YI.prototype.L = function() {
    return function() {
      return this.Ci;
    };
  }(g, b, h, l, d, e, f), YI.prototype.M = function() {
    return function(b, c) {
      return new YI(this.nj, this.cf, this.kd, this.O, this.oj, this.xh, this.ji, this.Yi, this.$e, this.Og, this.mi, c);
    };
  }(g, b, h, l, d, e, f));
  return new YI(d, f, c, g, b, h, b, d, e, l, KJ, null);
}(DJ, 64, EJ))), MJ = af([Yl, Fm, Sm, Ym, Jn, Nn, Wn, mo, xq, Bq, Fq, Dr, Fr, Kr, Nr, ds, xs, Bt, Qt, St, Ou, uv, vv], [.2, 10, 5, .01, .2, 4, 5, new U(null, 2, 5, V, [20, 50], null), .3, .05, 18, 2, .2, .25, .05, .02, !1, .01, 8, 2, 1E5, .16, 3]);
function NJ() {
  return fD(HJ(), IJ, LJ);
}
Fa("org.nfrac.comportex.demos.isolated_2d.input_gen", NJ);
var OJ = function() {
  function a(a, b) {
    return lD(dD, NJ(), a, b);
  }
  function b(a) {
    return c.h(a, MJ);
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
Fa("org.nfrac.comportex.demos.isolated_2d.n_region_model", OJ);
Fa("comportexviz.demos.isolated_2d.n_region_model", function(a) {
  return OJ.g(a);
});
function PJ(a, b) {
  var c = Bf(b) ? R.h(kh, b) : b, d = P.h(c, Dv), e = P.h(c, Nl), c = P.h(c, Vt);
  pH(a);
  a.translate(c, e);
  a.rotate(Math.PI / 2);
  vH(a, new n(null, 3, [Vt, 0, Nl, 0, Dv, d], null));
  return qH(a);
}
function QJ(a) {
  return function(b, c, d, e, f) {
    var g = cH.g(1);
    BG(function(g) {
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
                        SG(c);
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
                var a = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
                null, null, null, null, null, null];
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
              if (7 === h) {
                var l = g[7], p = g[2], z = A(hh(Ci, l)), D = null, K = 0, L = 0, I;
                g[8] = L;
                g[9] = K;
                g[10] = z;
                g[11] = p;
                g[12] = D;
                var M = I = g;
                M[2] = null;
                M[1] = 23;
                return Z;
              }
              if (20 === h) {
                var T = g[13], ba = xH(c, "#eee"), N = [Vt, Nl, Mn, Xr], ua = $f(24, 4), Y = af(N, [0, T - ua, d, 24]), fa = uH(c, Y), ia = xH(c, "#000");
                g[14] = fa;
                g[15] = ba;
                var pa = I = g;
                pa[2] = ia;
                pa[1] = 22;
                return Z;
              }
              if (27 === h) {
                var xa = g[2], wa = I = g;
                wa[2] = xa;
                wa[1] = 24;
                return Z;
              }
              if (1 === h) {
                var Ca = g[16], Da = g[17], ma = g[18], ya = NB(b), Ja = O.j(ya, 0, null), sa = O.j(ya, 1, null), Na = O.j(ya, 2, null), l = P.h(a, Ja), Cb = Pu.g(f), ab = rB(Cb), wb = Ch.h(C, ab), bb = sD(f, wb), za = Tm.g(b), ld = VA(za, bb, 8), Jc = zo.g(ld);
                g[16] = Jc;
                g[7] = l;
                g[19] = Na;
                g[17] = Ja;
                g[20] = sa;
                g[18] = ld;
                I = g;
                I[1] = q(Jc) ? 2 : 3;
                return Z;
              }
              if (24 === h) {
                var sc = g[21], qh = g[2], wc = A(hh(Ci, sc)), da = null, hd = 0, xc = 0;
                g[22] = qh;
                g[23] = hd;
                g[24] = wc;
                g[25] = da;
                g[26] = xc;
                var Jd = I = g;
                Jd[2] = null;
                Jd[1] = 40;
                return Z;
              }
              if (55 === h) {
                var xd = g[27], ee = I = g;
                ee[2] = xd;
                ee[1] = 56;
                return Z;
              }
              if (39 === h) {
                var yc = g[28], nb = g[29], lc = g[30], mc = g[2], nc = af([Dv, Vt, Nl], [yc, 5, lc]), ve = vH(c, nc), z = F(nb), D = null, L = K = 0;
                g[31] = ve;
                g[8] = L;
                g[9] = K;
                g[10] = z;
                g[12] = D;
                g[32] = mc;
                var Kd = I = g;
                Kd[2] = null;
                Kd[1] = 23;
                return Z;
              }
              if (46 === h) {
                var we = g[33], Fc = I = g;
                Fc[2] = we;
                Fc[1] = 47;
                return Z;
              }
              if (4 === h) {
                var Pe = g[34], Ld = g[35], Da = g[17], Jb = g[36], Vb = g[37], sc = g[2], Rc = d - 30, id = d - 5, Qe = $f(e, 3), yd = 2 * $f(e, 3), Md = pH(c), Nd = wH(c, "small-caps 14px sans-serif"), fe = AH(c, Ct), Sc = af([Dv, Vt, Nl], ["votes %", Rc, yd + 14]), kb = PJ(c, Sc), zc = af([Dv, Vt, Nl], ["votes per bit", id, yd + 14]), xe = PJ(c, zc), ye = wH(c, "small-caps bold 14px sans-serif"), rf = BH(c), ze = AH(c, Av), ha = af([Dv, Vt, Nl], ["Sentences", 5, 5]), Ae = vH(c, ha), ge = af([Dv, 
                Vt, Nl], ["Current sentence", 5, Qe]), Be = vH(c, ge), Gc = af([Dv, Vt, Nl], ["Predictions", 5, yd]), Hc = vH(c, Gc), gc = wH(c, "12px sans-serif"), Kb = Eh.h(Da - 4, hh(Ci, a)), he = Dh.h(9, Kb), jd = A(hh(Ci, he)), Ac = null, Lb = 0, hc = 0;
                g[38] = ye;
                g[39] = kb;
                g[40] = Hc;
                g[41] = Lb;
                g[42] = fe;
                g[43] = Ac;
                g[44] = gc;
                g[34] = id;
                g[21] = sc;
                g[45] = Nd;
                g[46] = jd;
                g[35] = Qe;
                g[47] = Md;
                g[48] = Ae;
                g[49] = rf;
                g[50] = ze;
                g[36] = yd;
                g[51] = xe;
                g[37] = Rc;
                g[52] = Be;
                g[53] = hc;
                var sf = I = g;
                sf[2] = null;
                sf[1] = 6;
                return Z;
              }
              if (54 === h) {
                var xd = g[27], Ag = R.h(kh, xd), Ce = I = g;
                Ce[2] = Ag;
                Ce[1] = 56;
                return Z;
              }
              if (15 === h) {
                var De = I = g;
                De[2] = null;
                De[1] = 16;
                return Z;
              }
              if (48 === h) {
                var ub = g[54], Ha = S(ub);
                I = g;
                I[1] = Ha ? 51 : 52;
                return Z;
              }
              if (50 === h) {
                var Od = g[2], Wb = I = g;
                Wb[2] = Od;
                Wb[1] = 44;
                return Z;
              }
              if (21 === h) {
                var oc = I = g;
                oc[2] = null;
                oc[1] = 22;
                return Z;
              }
              if (31 === h) {
                var nb = g[29], Pd = S(nb);
                I = g;
                I[1] = Pd ? 34 : 35;
                return Z;
              }
              if (32 === h) {
                var Re = I = g;
                Re[2] = null;
                Re[1] = 33;
                return Z;
              }
              if (40 === h) {
                var hd = g[23], xc = g[26], Ee = xc < hd;
                I = g;
                I[1] = q(Ee) ? 42 : 43;
                return Z;
              }
              if (56 === h) {
                var Bg = g[55], ub = g[54], Pe = g[34], Jb = g[36], Vb = g[37], tf = g[2], kd = P.h(tf, kv), Fe = P.h(tf, zq), Tf = P.h(tf, Vn), Se = Jb + 24 * (Bg + 1), pc = AH(c, Av), uf = af([Dv, Vt, Nl], [Tf, 5, Se]), Qd = vH(c, uf), Te = AH(c, Ct), Cg = [Dv, Vt, Nl], Ue = TB.g(100 * Fe), ie = ["" + u.g(Ue), Vb, Se], zd = af(Cg, ie), vf = vH(c, zd), wf = [Dv, Vt, Nl], je = TB.g(kd), Tc = ["" + u.g(je), Pe, Se], Uf = af(wf, Tc), Vf = vH(c, Uf), wc = F(ub), da = null, xc = hd = 0;
                g[56] = vf;
                g[23] = hd;
                g[24] = wc;
                g[57] = pc;
                g[58] = Vf;
                g[59] = Qd;
                g[25] = da;
                g[60] = Te;
                g[26] = xc;
                var Ve = I = g;
                Ve[2] = null;
                Ve[1] = 40;
                return Z;
              }
              if (33 === h) {
                var xf = g[2], Xj = I = g;
                Xj[2] = xf;
                Xj[1] = 27;
                return Z;
              }
              if (13 === h) {
                var Lb = g[41], Ac = g[43], jd = g[46], rh = g[61], hc = g[53], ke = g[62], We = g[2], yf = [Dv, Vt, Nl], Wf = [Ww.h(" ", rh), 5, ke], Xf = af(yf, Wf), si = vH(c, Xf), kl = jd, ll = Ac, Yj = Lb, Zj = hc + 1;
                g[63] = We;
                g[41] = Yj;
                g[43] = ll;
                g[46] = kl;
                g[64] = si;
                g[53] = Zj;
                var Uc = I = g;
                Uc[2] = null;
                Uc[1] = 6;
                return Z;
              }
              if (22 === h) {
                var Rd = g[65], ti = g[66], T = g[13], ui = g[2], ml = [Dv, Vt, Nl], Ho = [Ww.h(" ", ti), 5, T], Io = af(ml, Ho), vi = vH(c, Io), jd = F(Rd), Ac = null, hc = Lb = 0;
                g[41] = Lb;
                g[43] = Ac;
                g[46] = jd;
                g[67] = ui;
                g[53] = hc;
                g[68] = vi;
                var ak = I = g;
                ak[2] = null;
                ak[1] = 6;
                return Z;
              }
              if (36 === h) {
                var sh = g[2], nl = I = g;
                nl[2] = sh;
                nl[1] = 33;
                return Z;
              }
              if (41 === h) {
                var Jo = g[2], an = qH(c);
                g[69] = Jo;
                I = g;
                return QG(I, an);
              }
              if (43 === h) {
                var ub = g[54], wc = g[24], bn = A(wc);
                g[54] = bn;
                I = g;
                I[1] = bn ? 48 : 49;
                return Z;
              }
              if (29 === h) {
                var wi = I = g;
                wi[2] = null;
                wi[1] = 30;
                return Z;
              }
              if (44 === h) {
                var th = g[2], uh = I = g;
                uh[2] = th;
                uh[1] = 41;
                return Z;
              }
              if (6 === h) {
                var Lb = g[41], hc = g[53], xi = hc < Lb;
                I = g;
                I[1] = q(xi) ? 8 : 9;
                return Z;
              }
              if (28 === h) {
                var Dg = g[70], cn = xH(c, "#eee"), dn = [Vt, Nl, Mn, Xr], ol = $f(24, 4), pl = af(dn, [0, Dg - ol, d, 24]), ql = uH(c, pl), Eg = xH(c, "#000");
                g[71] = ql;
                g[72] = cn;
                var yi = I = g;
                yi[2] = Eg;
                yi[1] = 30;
                return Z;
              }
              if (51 === h) {
                var ub = g[54], bk = x(ub), zi = y(ub), rl = J(bk), wc = zi, da = bk, hd = rl, xc = 0;
                g[23] = hd;
                g[24] = wc;
                g[25] = da;
                g[26] = xc;
                var sl = I = g;
                sl[2] = null;
                sl[1] = 40;
                return Z;
              }
              if (25 === h) {
                var L = g[8], Ld = g[35], D = g[12], sa = g[20], tl = v.h(D, L), en = O.j(tl, 0, null), ck = O.j(tl, 1, null), Dg = Ld + 24 * (en + 1), Ai = en === sa;
                g[70] = Dg;
                g[73] = ck;
                I = g;
                I[1] = q(Ai) ? 28 : 29;
                return Z;
              }
              if (34 === h) {
                var nb = g[29], ul = x(nb), zf = y(nb), vl = J(ul), z = zf, D = ul, K = vl, L = 0;
                g[8] = L;
                g[9] = K;
                g[10] = z;
                g[12] = D;
                var vh = I = g;
                vh[2] = null;
                vh[1] = 23;
                return Z;
              }
              if (17 === h) {
                var Rd = g[65], wl = x(Rd), Ko = y(Rd), fn = J(wl), jd = Ko, Ac = wl, Lb = fn, hc = 0;
                g[41] = Lb;
                g[43] = Ac;
                g[46] = jd;
                g[53] = hc;
                var gn = I = g;
                gn[2] = null;
                gn[1] = 6;
                return Z;
              }
              if (3 === h) {
                var ma = g[18], xl = I = g;
                xl[2] = ma;
                xl[1] = 4;
                return Z;
              }
              if (12 === h) {
                var dk = I = g;
                dk[2] = null;
                dk[1] = 13;
                return Z;
              }
              if (2 === h) {
                return Ca = g[16], I = g, OG(I, 5, Ca);
              }
              if (23 === h) {
                var L = g[8], K = g[9], Lo = L < K;
                I = g;
                I[1] = q(Lo) ? 25 : 26;
                return Z;
              }
              if (47 === h) {
                var ek = g[74], hd = g[23], wc = g[24], Pe = g[34], Jb = g[36], da = g[25], Vb = g[37], xc = g[26], fk = g[2], Mo = P.h(fk, kv), Bi = P.h(fk, zq), jl = P.h(fk, Vn), hn = Jb + 24 * (ek + 1), yl = AH(c, Av), Fs = af([Dv, Vt, Nl], [jl, 5, hn]), kx = vH(c, Fs), lx = AH(c, Ct), mx = [Dv, Vt, Nl], jn = TB.g(100 * Bi), No = ["" + u.g(jn), Vb, hn], Oo = af(mx, No), Po = vH(c, Oo), zl = [Dv, Vt, Nl], kn = TB.g(Mo), nx = ["" + u.g(kn), Pe, hn], Qo = af(zl, nx), Ro = vH(c, Qo), So = wc, Al = 
                da, Gs = hd, Hs = xc + 1;
                g[75] = Po;
                g[76] = kx;
                g[23] = Gs;
                g[24] = So;
                g[77] = yl;
                g[25] = Al;
                g[78] = Ro;
                g[79] = lx;
                g[26] = Hs;
                var Bl = I = g;
                Bl[2] = null;
                Bl[1] = 40;
                return Z;
              }
              if (35 === h) {
                var nb = g[29], Ld = g[35], sa = g[20], Is = C(nb), To = O.j(Is, 0, null), yc = O.j(Is, 1, null), lc = Ld + 24 * (To + 1), ox = To === sa;
                g[28] = yc;
                g[30] = lc;
                I = g;
                I[1] = q(ox) ? 37 : 38;
                return Z;
              }
              if (19 === h) {
                var px = g[2], gk = I = g;
                gk[2] = px;
                gk[1] = 16;
                return Z;
              }
              if (11 === h) {
                var ke = g[62], Js = xH(c, "#eee"), wh = [Vt, Nl, Mn, Xr], Ks = $f(24, 4), qx = af(wh, [0, ke - Ks, d, 24]), rx = uH(c, qx), sx = xH(c, "#000");
                g[80] = rx;
                g[81] = Js;
                var Uo = I = g;
                Uo[2] = sx;
                Uo[1] = 13;
                return Z;
              }
              if (9 === h) {
                var Rd = g[65], jd = g[46], Vo = A(jd);
                g[65] = Vo;
                I = g;
                I[1] = Vo ? 14 : 15;
                return Z;
              }
              if (5 === h) {
                var tx = g[2], Cl = I = g;
                Cl[2] = tx;
                Cl[1] = 4;
                return Z;
              }
              if (14 === h) {
                var Rd = g[65], Ls = S(Rd);
                I = g;
                I[1] = Ls ? 17 : 18;
                return Z;
              }
              if (45 === h) {
                var we = g[33], ux = R.h(kh, we), Ms = I = g;
                Ms[2] = ux;
                Ms[1] = 47;
                return Z;
              }
              if (53 === h) {
                var Dl = g[2], Wo = I = g;
                Wo[2] = Dl;
                Wo[1] = 50;
                return Z;
              }
              if (26 === h) {
                var nb = g[29], z = g[10], hk = A(z);
                g[29] = hk;
                I = g;
                I[1] = hk ? 31 : 32;
                return Z;
              }
              if (16 === h) {
                var Ns = g[2], Os = I = g;
                Os[2] = Ns;
                Os[1] = 10;
                return Z;
              }
              if (38 === h) {
                var Ps = I = g;
                Ps[2] = null;
                Ps[1] = 39;
                return Z;
              }
              if (30 === h) {
                var L = g[8], K = g[9], z = g[10], Dg = g[70], ck = g[73], D = g[12], vx = g[2], wx = af([Dv, Vt, Nl], [ck, 5, Dg]), xx = vH(c, wx), Xo = z, Yo = D, Zo = K;
                g[8] = L + 1;
                g[9] = Zo;
                g[10] = Xo;
                g[82] = xx;
                g[83] = vx;
                g[12] = Yo;
                var ik = I = g;
                ik[2] = null;
                ik[1] = 23;
                return Z;
              }
              if (10 === h) {
                var Qs = g[2], $o = I = g;
                $o[2] = Qs;
                $o[1] = 7;
                return Z;
              }
              if (18 === h) {
                var Rd = g[65], Da = g[17], Rs = C(Rd), yx = O.j(Rs, 0, null), ap = O.j(Rs, 1, null), zx = O.j(ap, 0, null), ti = O.j(ap, 1, null), T = 5 + 24 * (yx + 1), Ax = zx === Da;
                g[66] = ti;
                g[13] = T;
                I = g;
                I[1] = q(Ax) ? 20 : 21;
                return Z;
              }
              if (52 === h) {
                var ub = g[54], xd = g[27], jk = C(ub), Bg = O.j(jk, 0, null), bp = O.j(jk, 1, null), El = Bf(bp);
                g[55] = Bg;
                g[27] = bp;
                I = g;
                I[1] = El ? 54 : 55;
                return Z;
              }
              if (42 === h) {
                var we = g[33], da = g[25], xc = g[26], cp = v.h(da, xc), ek = O.j(cp, 0, null), Ss = O.j(cp, 1, null), Bx = Bf(Ss);
                g[74] = ek;
                g[33] = Ss;
                I = g;
                I[1] = Bx ? 45 : 46;
                return Z;
              }
              if (37 === h) {
                var lc = g[30], Cx = xH(c, "#eee"), Ts = [Vt, Nl, Mn, Xr], Us = $f(24, 4), Dx = af(Ts, [0, lc - Us, d, 24]), Ex = uH(c, Dx), Vs = xH(c, "#000");
                g[84] = Cx;
                g[85] = Ex;
                var Ws = I = g;
                Ws[2] = Vs;
                Ws[1] = 39;
                return Z;
              }
              if (8 === h) {
                var Ac = g[43], Da = g[17], hc = g[53], Xs = v.h(Ac, hc), Fl = O.j(Xs, 0, null), dp = O.j(Xs, 1, null), Gl = O.j(dp, 0, null), rh = O.j(dp, 1, null), ke = 5 + 24 * (Fl + 1), Ys = Gl === Da;
                g[61] = rh;
                g[62] = ke;
                I = g;
                I[1] = q(Ys) ? 11 : 12;
                return Z;
              }
              if (49 === h) {
                var Zs = I = g;
                Zs[2] = null;
                Zs[1] = 50;
                return Z;
              }
              return null;
            };
          }(g), g);
        }(), p = function() {
          var a = l.w ? l.w() : l.call(null);
          a[6] = g;
          return a;
        }();
        return NG(p);
      };
    }(g));
    return g;
  };
}
;function RJ(a) {
  if ("function" == typeof a.Wc) {
    return a.Wc();
  }
  if (la(a)) {
    return a.split("");
  }
  if (ka(a)) {
    for (var b = [], c = a.length, d = 0;d < c;d++) {
      b.push(a[d]);
    }
    return b;
  }
  return Ya(a);
}
function SJ(a, b) {
  if ("function" == typeof a.forEach) {
    a.forEach(b, void 0);
  } else {
    if (ka(a) || la(a)) {
      lb(a, b, void 0);
    } else {
      var c;
      if ("function" == typeof a.bc) {
        c = a.bc();
      } else {
        if ("function" != typeof a.Wc) {
          if (ka(a) || la(a)) {
            c = [];
            for (var d = a.length, e = 0;e < d;e++) {
              c.push(e);
            }
          } else {
            c = Za(a);
          }
        } else {
          c = void 0;
        }
      }
      for (var d = RJ(a), e = d.length, f = 0;f < e;f++) {
        b.call(void 0, d[f], c && c[f], a);
      }
    }
  }
}
;function TJ(a) {
  var b;
  b || (b = UJ(a || arguments.callee.caller, []));
  return b;
}
function UJ(a, b) {
  var c = [];
  if (0 <= jb(b, a)) {
    c.push("[...circular reference...]");
  } else {
    if (a && 50 > b.length) {
      c.push(VJ(a) + "(");
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
            f = (f = VJ(f)) ? f : "[fn]";
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
        c.push(UJ(a.caller, b));
      } catch (g) {
        c.push("[exception trying to get caller]\n");
      }
    } else {
      a ? c.push("[...long stack...]") : c.push("[end]");
    }
  }
  return c.join("");
}
function VJ(a) {
  if (WJ[a]) {
    return WJ[a];
  }
  a = String(a);
  if (!WJ[a]) {
    var b = /function ([^\(]+)/.exec(a);
    WJ[a] = b ? b[1] : "[Anonymous]";
  }
  return WJ[a];
}
var WJ = {};
function XJ(a, b, c, d, e) {
  this.reset(a, b, c, d, e);
}
XJ.prototype.Jg = null;
XJ.prototype.Ig = null;
var YJ = 0;
XJ.prototype.reset = function(a, b, c, d, e) {
  "number" == typeof e || YJ++;
  d || Ea();
  this.ke = a;
  this.Di = b;
  delete this.Jg;
  delete this.Ig;
};
XJ.prototype.vh = function(a) {
  this.ke = a;
};
function ZJ(a) {
  this.Fi = a;
  this.Pg = this.ff = this.ke = this.vc = null;
}
function $J(a, b) {
  this.name = a;
  this.value = b;
}
$J.prototype.toString = function() {
  return this.name;
};
var aK = new $J("SEVERE", 1E3), bK = new $J("CONFIG", 700), cK = new $J("FINE", 500);
k = ZJ.prototype;
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
function dK(a) {
  if (a.ke) {
    return a.ke;
  }
  if (a.vc) {
    return dK(a.vc);
  }
  hb("Root logger has no level set.");
  return null;
}
k.log = function(a, b, c) {
  if (a.value >= dK(this).value) {
    for (oa(b) && (b = b()), a = this.Ng(a, b, c, ZJ.prototype.log), b = "log:" + a.Di, ca.console && (ca.console.timeStamp ? ca.console.timeStamp(b) : ca.console.markTimeline && ca.console.markTimeline(b)), ca.msWriteProfilerMark && ca.msWriteProfilerMark(b), b = this;b;) {
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
  a = new XJ(a, String(b), this.Fi);
  if (c) {
    a.Jg = c;
    var e;
    d = d || ZJ.prototype.Ng;
    try {
      var f;
      var g = ga("window.location.href");
      if (la(c)) {
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
          l = c.fileName || c.filename || c.sourceURL || ca.$googDebugFname || g;
        } catch (s) {
          l = "Not available", b = !0;
        }
        f = !b && c.lineNumber && c.fileName && c.stack && c.message && c.name ? c : {message:c.message || "Not available", name:c.name || "UnknownError", lineNumber:h, fileName:l, stack:c.stack || "Not available"};
      }
      e = "Message: " + Ma(f.message) + '\nUrl: \x3ca href\x3d"view-source:' + f.fileName + '" target\x3d"_new"\x3e' + f.fileName + "\x3c/a\x3e\nLine: " + f.lineNumber + "\n\nBrowser stack:\n" + Ma(f.stack + "-\x3e ") + "[end]\n\nJS stack traversal:\n" + Ma(TJ(d) + "-\x3e ");
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
var eK = {}, fK = null;
function gK(a) {
  fK || (fK = new ZJ(""), eK[""] = fK, fK.vh(bK));
  var b;
  if (!(b = eK[a])) {
    b = new ZJ(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = gK(a.substr(0, c));
    c.Lg()[d] = b;
    b.ne(c);
    eK[a] = b;
  }
  return b;
}
;function hK(a, b) {
  a && a.log(cK, b, void 0);
}
;function iK() {
}
iK.prototype.ng = null;
function jK(a) {
  var b;
  (b = a.ng) || (b = {}, kK(a) && (b[0] = !0, b[1] = !0), b = a.ng = b);
  return b;
}
;var lK;
function mK() {
}
Ga(mK, iK);
function nK(a) {
  return(a = kK(a)) ? new ActiveXObject(a) : new XMLHttpRequest;
}
function kK(a) {
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
lK = new mK;
var oK = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;
function pK(a) {
  if (qK) {
    qK = !1;
    var b = ca.location;
    if (b) {
      var c = b.href;
      if (c && (c = (c = pK(c)[3] || null) && decodeURIComponent(c)) && c != b.hostname) {
        throw qK = !0, Error();
      }
    }
  }
  return a.match(oK);
}
var qK = Tv;
function rK(a) {
  PI.call(this);
  this.headers = new Iv;
  this.bf = a || null;
  this.Bd = !1;
  this.af = this.qa = null;
  this.ie = this.Sg = this.je = "";
  this.ee = this.Kf = this.Ke = this.Ff = !1;
  this.Ud = 0;
  this.Ue = null;
  this.rh = sK;
  this.Xe = this.yh = !1;
}
Ga(rK, PI);
var sK = "", tK = rK.prototype, uK = gK("goog.net.XhrIo");
tK.fc = uK;
var vK = /^https?$/i, wK = ["POST", "PUT"];
k = rK.prototype;
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
  this.qa = this.bf ? nK(this.bf) : nK(lK);
  this.af = this.bf ? jK(this.bf) : jK(lK);
  this.qa.onreadystatechange = Ba(this.Yg, this);
  try {
    hK(this.fc, xK(this, "Opening Xhr")), this.Kf = !0, this.qa.open(b, String(a), !0), this.Kf = !1;
  } catch (e) {
    hK(this.fc, xK(this, "Error opening Xhr: " + e.message));
    yK(this, e);
    return;
  }
  a = c || "";
  var f = this.headers.clone();
  d && SJ(d, function(a, b) {
    f.set(b, a);
  });
  d = ob(f.bc());
  c = ca.FormData && a instanceof ca.FormData;
  !(0 <= jb(wK, b)) || d || c || f.set("Content-Type", "application/x-www-form-urlencoded;charset\x3dutf-8");
  f.forEach(function(a, b) {
    this.qa.setRequestHeader(b, a);
  }, this);
  this.rh && (this.qa.responseType = this.rh);
  "withCredentials" in this.qa && (this.qa.withCredentials = this.yh);
  try {
    zK(this), 0 < this.Ud && (this.Xe = AK(this.qa), hK(this.fc, xK(this, "Will abort after " + this.Ud + "ms if incomplete, xhr2 " + this.Xe)), this.Xe ? (this.qa.timeout = this.Ud, this.qa.ontimeout = Ba(this.wh, this)) : this.Ue = RI(this.wh, this.Ud, this)), hK(this.fc, xK(this, "Sending request")), this.Ke = !0, this.qa.send(a), this.Ke = !1;
  } catch (g) {
    hK(this.fc, xK(this, "Send error: " + g.message)), yK(this, g);
  }
};
function AK(a) {
  return Rv && Xv(9) && na(a.timeout) && ea(a.ontimeout);
}
function pb(a) {
  return "content-type" == a.toLowerCase();
}
k.wh = function() {
  "undefined" != typeof aa && this.qa && (this.ie = "Timed out after " + this.Ud + "ms, aborting", hK(this.fc, xK(this, this.ie)), this.dispatchEvent("timeout"), this.abort(8));
};
function yK(a, b) {
  a.Bd = !1;
  a.qa && (a.ee = !0, a.qa.abort(), a.ee = !1);
  a.ie = b;
  BK(a);
  CK(a);
}
function BK(a) {
  a.Ff || (a.Ff = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"));
}
k.abort = function() {
  this.qa && this.Bd && (hK(this.fc, xK(this, "Aborting")), this.Bd = !1, this.ee = !0, this.qa.abort(), this.ee = !1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), CK(this));
};
k.Yg = function() {
  this.bi || (this.Kf || this.Ke || this.ee ? DK(this) : this.Ki());
};
k.Ki = function() {
  DK(this);
};
function DK(a) {
  if (a.Bd && "undefined" != typeof aa) {
    if (a.af[1] && 4 == EK(a) && 2 == FK(a)) {
      hK(a.fc, xK(a, "Local request error detected and ignored"));
    } else {
      if (a.Ke && 4 == EK(a)) {
        RI(a.Yg, 0, a);
      } else {
        if (a.dispatchEvent("readystatechange"), 4 == EK(a)) {
          hK(a.fc, xK(a, "Request complete"));
          a.Bd = !1;
          try {
            if (GK(a)) {
              a.dispatchEvent("complete"), a.dispatchEvent("success");
            } else {
              var b;
              try {
                b = 2 < EK(a) ? a.qa.statusText : "";
              } catch (c) {
                hK(a.fc, "Can not get status: " + c.message), b = "";
              }
              a.ie = b + " [" + FK(a) + "]";
              BK(a);
            }
          } finally {
            CK(a);
          }
        }
      }
    }
  }
}
function CK(a) {
  if (a.qa) {
    zK(a);
    var b = a.qa, c = a.af[0] ? ja : null;
    a.qa = null;
    a.af = null;
    a.dispatchEvent("ready");
    try {
      b.onreadystatechange = c;
    } catch (d) {
      (a = a.fc) && a.log(aK, "Problem encountered resetting onreadystatechange: " + d.message, void 0);
    }
  }
}
function zK(a) {
  a.qa && a.Xe && (a.qa.ontimeout = null);
  na(a.Ue) && (ca.clearTimeout(a.Ue), a.Ue = null);
}
function GK(a) {
  var b = FK(a), c;
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
      a = pK(String(a.je))[1] || null, !a && self.location && (a = self.location.protocol, a = a.substr(0, a.length - 1)), b = !vK.test(a ? a.toLowerCase() : "");
    }
    c = b;
  }
  return c;
}
function EK(a) {
  return a.qa ? a.qa.readyState : 0;
}
function FK(a) {
  try {
    return 2 < EK(a) ? a.qa.status : -1;
  } catch (b) {
    return-1;
  }
}
function HK(a) {
  try {
    return a.qa ? a.qa.responseText : "";
  } catch (b) {
    return hK(a.fc, "Can not get responseText: " + b.message), "";
  }
}
k.getAllResponseHeaders = function() {
  return this.qa && 4 == EK(this) ? this.qa.getAllResponseHeaders() : "";
};
function xK(a, b) {
  return b + " [" + a.Sg + " " + a.je + " " + FK(a) + "]";
}
;var IK = null, JK = Sv || Tv || Qv || "function" == typeof ca.atob;
function KK(a) {
  var b;
  if (q(a)) {
    if (JK) {
      b = ca.btoa(a);
    } else {
      b = [];
      for (var c = 0, d = 0;d < a.length;d++) {
        for (var e = a.charCodeAt(d);255 < e;) {
          b[c++] = e & 255, e >>= 8;
        }
        b[c++] = e;
      }
      if (!ka(b)) {
        throw Error("encodeByteArray takes an array as a parameter");
      }
      if (!IK) {
        for (IK = {}, a = 0;65 > a;a++) {
          IK[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d".charAt(a);
        }
      }
      a = IK;
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
var LK = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = G(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    O.j(b, 0, null);
    var e;
    q(a) ? (e = "" + u.g(a), e = Vw(encodeURIComponent(e), "*", "%2A")) : e = null;
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
}(), MK = function() {
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
af("TKGMYZEBP".split(""), [Math.pow(1024, 4), Math.pow(1024, 1), Math.pow(1024, 3), Math.pow(1024, 2), Math.pow(1024, 8), Math.pow(1024, 7), Math.pow(1024, 6), Math.pow(1024, 0), Math.pow(1024, 5)]);
function NK(a, b) {
  var c;
  if (a instanceof NK) {
    this.cc = ea(b) ? b : a.cc, OK(this, a.yd), c = a.Ye, PK(this), this.Ye = c, c = a.rd, PK(this), this.rd = c, QK(this, a.le), c = a.Rd, PK(this), this.Rd = c, RK(this, a.ld.clone()), c = a.Je, PK(this), this.Je = c;
  } else {
    if (a && (c = pK(String(a)))) {
      this.cc = !!b;
      OK(this, c[1] || "", !0);
      var d = c[2] || "";
      PK(this);
      this.Ye = d ? decodeURIComponent(d) : "";
      d = c[3] || "";
      PK(this);
      this.rd = d ? decodeURIComponent(d) : "";
      QK(this, c[4]);
      d = c[5] || "";
      PK(this);
      this.Rd = d ? decodeURIComponent(d) : "";
      RK(this, c[6] || "", !0);
      c = c[7] || "";
      PK(this);
      this.Je = c ? decodeURIComponent(c) : "";
    } else {
      this.cc = !!b, this.ld = new SK(null, 0, this.cc);
    }
  }
}
k = NK.prototype;
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
  b && a.push(TK(b, UK), ":");
  if (b = this.rd) {
    a.push("//");
    var c = this.Ye;
    c && a.push(TK(c, UK), "@");
    a.push(encodeURIComponent(String(b)));
    b = this.le;
    null != b && a.push(":", String(b));
  }
  if (b = this.Rd) {
    this.rd && "/" != b.charAt(0) && a.push("/"), a.push(TK(b, "/" == b.charAt(0) ? VK : WK));
  }
  (b = this.ld.toString()) && a.push("?", b);
  (b = this.Je) && a.push("#", TK(b, XK));
  return a.join("");
};
k.clone = function() {
  return new NK(this);
};
function OK(a, b, c) {
  PK(a);
  a.yd = c ? b ? decodeURIComponent(b) : "" : b;
  a.yd && (a.yd = a.yd.replace(/:$/, ""));
}
function QK(a, b) {
  PK(a);
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
function RK(a, b, c) {
  PK(a);
  b instanceof SK ? (a.ld = b, a.ld.eg(a.cc)) : (c || (b = TK(b, YK)), a.ld = new SK(b, 0, a.cc));
}
function PK(a) {
  if (a.li) {
    throw Error("Tried to modify a read-only Uri");
  }
}
k.eg = function(a) {
  this.cc = a;
  this.ld && this.ld.eg(a);
  return this;
};
function TK(a, b) {
  return la(a) ? encodeURI(a).replace(b, ZK) : null;
}
function ZK(a) {
  a = a.charCodeAt(0);
  return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
}
var UK = /[#\/\?@]/g, WK = /[\#\?:]/g, VK = /[\#\?]/g, YK = /[\#\?@]/g, XK = /#/g;
function SK(a, b, c) {
  this.Sb = a || null;
  this.cc = !!c;
}
function $K(a) {
  if (!a.Ma && (a.Ma = new Iv, a.Aa = 0, a.Sb)) {
    for (var b = a.Sb.split("\x26"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("\x3d"), e = null, f = null;
      0 <= d ? (e = b[c].substring(0, d), f = b[c].substring(d + 1)) : e = b[c];
      e = decodeURIComponent(e.replace(/\+/g, " "));
      e = aL(a, e);
      a.add(e, f ? decodeURIComponent(f.replace(/\+/g, " ")) : "");
    }
  }
}
k = SK.prototype;
k.Ma = null;
k.Aa = null;
k.Mg = function() {
  $K(this);
  return this.Aa;
};
k.add = function(a, b) {
  $K(this);
  this.Sb = null;
  a = aL(this, a);
  var c = this.Ma.get(a);
  c || this.Ma.set(a, c = []);
  c.push(b);
  this.Aa++;
  return this;
};
k.remove = function(a) {
  $K(this);
  a = aL(this, a);
  return this.Ma.ce(a) ? (this.Sb = null, this.Aa -= this.Ma.get(a).length, this.Ma.remove(a)) : !1;
};
k.clear = function() {
  this.Ma = this.Sb = null;
  this.Aa = 0;
};
k.Mf = function() {
  $K(this);
  return 0 == this.Aa;
};
k.ce = function(a) {
  $K(this);
  a = aL(this, a);
  return this.Ma.ce(a);
};
k.bc = function() {
  $K(this);
  for (var a = this.Ma.Wc(), b = this.Ma.bc(), c = [], d = 0;d < b.length;d++) {
    for (var e = a[d], f = 0;f < e.length;f++) {
      c.push(b[d]);
    }
  }
  return c;
};
k.Wc = function(a) {
  $K(this);
  var b = [];
  if (la(a)) {
    this.ce(a) && (b = qb(b, this.Ma.get(aL(this, a))));
  } else {
    a = this.Ma.Wc();
    for (var c = 0;c < a.length;c++) {
      b = qb(b, a[c]);
    }
  }
  return b;
};
k.set = function(a, b) {
  $K(this);
  this.Sb = null;
  a = aL(this, a);
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
  var a = new SK;
  a.Sb = this.Sb;
  this.Ma && (a.Ma = this.Ma.clone(), a.Aa = this.Aa);
  return a;
};
function aL(a, b) {
  var c = String(b);
  a.cc && (c = c.toLowerCase());
  return c;
}
k.eg = function(a) {
  a && !this.cc && ($K(this), this.Sb = null, this.Ma.forEach(function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), this.remove(d), 0 < a.length && (this.Sb = null, this.Ma.set(aL(this, d), rb(a)), this.Aa += a.length));
  }, this));
  this.cc = a;
};
var bL = "undefined" != typeof Object.keys ? function(a) {
  return Object.keys(a);
} : function(a) {
  return Za(a);
}, cL = "undefined" != typeof Array.isArray ? function(a) {
  return Array.isArray(a);
} : function(a) {
  return "array" === m(a);
};
function dL() {
  return Math.round(15 * Math.random()).toString(16);
}
;function eL(a, b) {
  if (null == a) {
    return null == b;
  }
  if (a === b) {
    return!0;
  }
  if ("object" === typeof a) {
    if (cL(a)) {
      if (cL(b) && a.length === b.length) {
        for (var c = 0;c < a.length;c++) {
          if (!eL(a[c], b[c])) {
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
      var c = 0, d = bL(b).length, e;
      for (e in a) {
        if (a.hasOwnProperty(e) && (c++, !b.hasOwnProperty(e) || !eL(a[e], b[e]))) {
          return!1;
        }
      }
      return c === d;
    }
  }
  return!1;
}
function fL(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
var gL = {}, hL = 0;
function iL(a) {
  var b = 0;
  if (null != a.forEach) {
    a.forEach(function(a, c) {
      b = (b + (jL(c) ^ jL(a))) % 4503599627370496;
    });
  } else {
    for (var c = bL(a), d = 0;d < c.length;d++) {
      var e = c[d], f = a[e], b = (b + (jL(e) ^ jL(f))) % 4503599627370496
    }
  }
  return b;
}
function kL(a) {
  var b = 0;
  if (cL(a)) {
    for (var c = 0;c < a.length;c++) {
      b = fL(b, jL(a[c]));
    }
  } else {
    a.forEach && a.forEach(function(a) {
      b = fL(b, jL(a));
    });
  }
  return b;
}
function jL(a) {
  if (null == a) {
    return 0;
  }
  switch(typeof a) {
    case "number":
      return a;
    case "boolean":
      return!0 === a ? 1 : 0;
    case "string":
      var b = gL[a];
      if (null == b) {
        for (var c = b = 0;c < a.length;++c) {
          b = 31 * b + a.charCodeAt(c), b %= 4294967296;
        }
        hL++;
        256 <= hL && (gL = {}, hL = 1);
        gL[a] = b;
      }
      a = b;
      return a;
    default:
      return a instanceof Date ? a.valueOf() : cL(a) ? kL(a) : a.mc ? a.mc() : iL(a);
  }
}
;function lL(a, b) {
  this.ya = a | 0;
  this.pa = b | 0;
}
var mL = {};
function nL(a) {
  if (-128 <= a && 128 > a) {
    var b = mL[a];
    if (b) {
      return b;
    }
  }
  b = new lL(a | 0, 0 > a ? -1 : 0);
  -128 <= a && 128 > a && (mL[a] = b);
  return b;
}
function oL(a) {
  return isNaN(a) || !isFinite(a) ? pL : a <= -qL ? rL : a + 1 >= qL ? sL : 0 > a ? tL(oL(-a)) : new lL(a % uL | 0, a / uL | 0);
}
function vL(a, b) {
  return new lL(a, b);
}
function wL(a, b) {
  if (0 == a.length) {
    throw Error("number format error: empty string");
  }
  var c = b || 10;
  if (2 > c || 36 < c) {
    throw Error("radix out of range: " + c);
  }
  if ("-" == a.charAt(0)) {
    return tL(wL(a.substring(1), c));
  }
  if (0 <= a.indexOf("-")) {
    throw Error('number format error: interior "-" character: ' + a);
  }
  for (var d = oL(Math.pow(c, 8)), e = pL, f = 0;f < a.length;f += 8) {
    var g = Math.min(8, a.length - f), h = parseInt(a.substring(f, f + g), c);
    8 > g ? (g = oL(Math.pow(c, g)), e = e.multiply(g).add(oL(h))) : (e = e.multiply(d), e = e.add(oL(h)));
  }
  return e;
}
var uL = 4294967296, qL = uL * uL / 2, pL = nL(0), xL = nL(1), yL = nL(-1), sL = vL(-1, 2147483647), rL = vL(0, -2147483648), zL = nL(16777216);
function AL(a) {
  return a.pa * uL + (0 <= a.ya ? a.ya : uL + a.ya);
}
k = lL.prototype;
k.toString = function(a) {
  a = a || 10;
  if (2 > a || 36 < a) {
    throw Error("radix out of range: " + a);
  }
  if (BL(this)) {
    return "0";
  }
  if (0 > this.pa) {
    if (this.Cb(rL)) {
      var b = oL(a), c = CL(this, b), b = DL(c.multiply(b), this);
      return c.toString(a) + b.ya.toString(a);
    }
    return "-" + tL(this).toString(a);
  }
  for (var c = oL(Math.pow(a, 6)), b = this, d = "";;) {
    var e = CL(b, c), f = DL(b, e.multiply(c)).ya.toString(a), b = e;
    if (BL(b)) {
      return f + d;
    }
    for (;6 > f.length;) {
      f = "0" + f;
    }
    d = "" + f + d;
  }
};
function BL(a) {
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
  return b && !c ? -1 : !b && c ? 1 : 0 > DL(this, a).pa ? -1 : 1;
};
function tL(a) {
  return a.Cb(rL) ? rL : vL(~a.ya, ~a.pa).add(xL);
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
  return vL((a & 65535) << 16 | h & 65535, c << 16 | d & 65535);
};
function DL(a, b) {
  return a.add(tL(b));
}
k.multiply = function(a) {
  if (BL(this) || BL(a)) {
    return pL;
  }
  if (this.Cb(rL)) {
    return 1 == (a.ya & 1) ? rL : pL;
  }
  if (a.Cb(rL)) {
    return 1 == (this.ya & 1) ? rL : pL;
  }
  if (0 > this.pa) {
    return 0 > a.pa ? tL(this).multiply(tL(a)) : tL(tL(this).multiply(a));
  }
  if (0 > a.pa) {
    return tL(this.multiply(tL(a)));
  }
  if (0 > this.compare(zL) && 0 > a.compare(zL)) {
    return oL(AL(this) * AL(a));
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
  return vL(s << 16 | t & 65535, l << 16 | p);
};
function CL(a, b) {
  if (BL(b)) {
    throw Error("division by zero");
  }
  if (BL(a)) {
    return pL;
  }
  if (a.Cb(rL)) {
    if (b.Cb(xL) || b.Cb(yL)) {
      return rL;
    }
    if (b.Cb(rL)) {
      return xL;
    }
    var c;
    c = 1;
    if (0 == c) {
      c = a;
    } else {
      var d = a.pa;
      c = 32 > c ? vL(a.ya >>> c | d << 32 - c, d >> c) : vL(d >> c - 32, 0 <= d ? 0 : -1);
    }
    c = CL(c, b).shiftLeft(1);
    if (c.Cb(pL)) {
      return 0 > b.pa ? xL : yL;
    }
    d = DL(a, b.multiply(c));
    return c.add(CL(d, b));
  }
  if (b.Cb(rL)) {
    return pL;
  }
  if (0 > a.pa) {
    return 0 > b.pa ? CL(tL(a), tL(b)) : tL(CL(tL(a), b));
  }
  if (0 > b.pa) {
    return tL(CL(a, tL(b)));
  }
  for (var e = pL, d = a;0 <= d.compare(b);) {
    c = Math.max(1, Math.floor(AL(d) / AL(b)));
    for (var f = Math.ceil(Math.log(c) / Math.LN2), f = 48 >= f ? 1 : Math.pow(2, f - 48), g = oL(c), h = g.multiply(b);0 > h.pa || 0 < h.compare(d);) {
      c -= f, g = oL(c), h = g.multiply(b);
    }
    BL(g) && (g = xL);
    e = e.add(g);
    d = DL(d, h);
  }
  return e;
}
k.shiftLeft = function(a) {
  a &= 63;
  if (0 == a) {
    return this;
  }
  var b = this.ya;
  return 32 > a ? vL(b << a, this.pa << a | b >>> 32 - a) : vL(0, b << a - 32);
};
function EL(a, b) {
  b &= 63;
  if (0 == b) {
    return a;
  }
  var c = a.pa;
  return 32 > b ? vL(a.ya >>> b | c << 32 - b, c >>> b) : 32 == b ? vL(c, 0) : vL(c >>> b - 32, 0);
}
;function FL(a, b) {
  this.tag = a;
  this.ka = b;
  this.sa = -1;
}
FL.prototype.toString = function() {
  return "[TaggedValue: " + this.tag + ", " + this.ka + "]";
};
FL.prototype.equiv = function(a) {
  return eL(this, a);
};
FL.prototype.equiv = FL.prototype.equiv;
FL.prototype.Yb = function(a) {
  return a instanceof FL ? this.tag === a.tag && eL(this.ka, a.ka) : !1;
};
FL.prototype.mc = function() {
  -1 === this.sa && (this.sa = fL(jL(this.tag), jL(this.ka)));
  return this.sa;
};
function GL(a, b) {
  return new FL(a, b);
}
var HL = wL("9007199254740992"), IL = wL("-9007199254740992");
lL.prototype.equiv = function(a) {
  return eL(this, a);
};
lL.prototype.equiv = lL.prototype.equiv;
lL.prototype.Yb = function(a) {
  return a instanceof lL && this.Cb(a);
};
lL.prototype.mc = function() {
  return this.ya;
};
function JL(a) {
  this.name = a;
  this.sa = -1;
}
JL.prototype.toString = function() {
  return ":" + this.name;
};
JL.prototype.equiv = function(a) {
  return eL(this, a);
};
JL.prototype.equiv = JL.prototype.equiv;
JL.prototype.Yb = function(a) {
  return a instanceof JL && this.name == a.name;
};
JL.prototype.mc = function() {
  -1 === this.sa && (this.sa = jL(this.name));
  return this.sa;
};
function KL(a) {
  this.name = a;
  this.sa = -1;
}
KL.prototype.toString = function() {
  return "[Symbol: " + this.name + "]";
};
KL.prototype.equiv = function(a) {
  return eL(this, a);
};
KL.prototype.equiv = KL.prototype.equiv;
KL.prototype.Yb = function(a) {
  return a instanceof KL && this.name == a.name;
};
KL.prototype.mc = function() {
  -1 === this.sa && (this.sa = jL(this.name));
  return this.sa;
};
function LL(a, b, c) {
  var d = "";
  c = c || b + 1;
  for (var e = 8 * (7 - b), f = nL(255).shiftLeft(e);b < c;b++, e -= 8, f = EL(f, 8)) {
    var g = EL(vL(a.ya & f.ya, a.pa & f.pa), e).toString(16);
    1 == g.length && (g = "0" + g);
    d += g;
  }
  return d;
}
function ML(a, b) {
  this.Jf = a;
  this.Nf = b;
  this.sa = -1;
}
ML.prototype.toString = function(a) {
  var b = this.Jf, c = this.Nf;
  a = "" + (LL(b, 0, 4) + "-");
  a += LL(b, 4, 6) + "-";
  a += LL(b, 6, 8) + "-";
  a += LL(c, 0, 2) + "-";
  return a += LL(c, 2, 8);
};
ML.prototype.equiv = function(a) {
  return eL(this, a);
};
ML.prototype.equiv = ML.prototype.equiv;
ML.prototype.Yb = function(a) {
  return a instanceof ML && this.Jf.Cb(a.Jf) && this.Nf.Cb(a.Nf);
};
ML.prototype.mc = function() {
  -1 === this.sa && (this.sa = jL(this.toString()));
  return this.sa;
};
Date.prototype.Yb = function(a) {
  return a instanceof Date ? this.valueOf() === a.valueOf() : !1;
};
Date.prototype.mc = function() {
  return this.valueOf();
};
function NL(a, b) {
  this.entries = a;
  this.type = b || 0;
  this.na = 0;
}
NL.prototype.next = function() {
  if (this.na < this.entries.length) {
    var a = null, a = 0 === this.type ? this.entries[this.na] : 1 === this.type ? this.entries[this.na + 1] : [this.entries[this.na], this.entries[this.na + 1]], a = {value:a, done:!1};
    this.na += 2;
    return a;
  }
  return{value:null, done:!0};
};
NL.prototype.next = NL.prototype.next;
function OL(a, b) {
  this.map = a;
  this.type = b || 0;
  this.keys = this.map.bc();
  this.na = 0;
  this.md = null;
  this.bd = 0;
}
OL.prototype.next = function() {
  if (this.na < this.map.size) {
    null != this.md && this.bd < this.md.length || (this.md = this.map.map[this.keys[this.na]], this.bd = 0);
    var a = null, a = 0 === this.type ? this.md[this.bd] : 1 === this.type ? this.md[this.bd + 1] : [this.md[this.bd], this.md[this.bd + 1]], a = {value:a, done:!1};
    this.na++;
    this.bd += 2;
    return a;
  }
  return{value:null, done:!0};
};
OL.prototype.next = OL.prototype.next;
function PL(a, b) {
  if ((b instanceof QL || b instanceof RL) && a.size === b.size) {
    for (var c in a.map) {
      for (var d = a.map[c], e = 0;e < d.length;e += 2) {
        if (!eL(d[e + 1], b.get(d[e]))) {
          return!1;
        }
      }
    }
    return!0;
  }
  if (null != b && "object" === typeof b && (c = bL(b), d = c.length, a.size === d)) {
    for (e = 0;e < d;e++) {
      var f = c[e];
      if (!a.has(f) || !eL(b[f], a.get(f))) {
        return!1;
      }
    }
    return!0;
  }
  return!1;
}
function RL(a) {
  this.va = a;
  this.oa = null;
  this.sa = -1;
  this.size = a.length / 2;
  this.gg = 0;
}
RL.prototype.toString = function() {
  return "[TransitArrayMap]";
};
function SL(a) {
  if (a.oa) {
    throw Error("Invalid operation, already converted");
  }
  if (8 > a.size) {
    return!1;
  }
  a.gg++;
  return 32 < a.gg ? (a.oa = TL(a.va, !0), a.va = [], !0) : !1;
}
RL.prototype.clear = function() {
  this.sa = -1;
  this.oa ? this.oa.clear() : this.va = [];
  this.size = 0;
};
RL.prototype.clear = RL.prototype.clear;
RL.prototype.keys = function() {
  return this.oa ? this.oa.keys() : new NL(this.va, 0);
};
RL.prototype.keys = RL.prototype.keys;
RL.prototype.ud = function() {
  if (this.oa) {
    return this.oa.ud();
  }
  for (var a = [], b = 0, c = 0;c < this.va.length;b++, c += 2) {
    a[b] = this.va[c];
  }
  return a;
};
RL.prototype.keySet = RL.prototype.ud;
RL.prototype.entries = function() {
  return this.oa ? this.oa.entries() : new NL(this.va, 2);
};
RL.prototype.entries = RL.prototype.entries;
RL.prototype.values = function() {
  return this.oa ? this.oa.values() : new NL(this.va, 1);
};
RL.prototype.values = RL.prototype.values;
RL.prototype.forEach = function(a) {
  if (this.oa) {
    this.oa.forEach(a);
  } else {
    for (var b = 0;b < this.va.length;b += 2) {
      a(this.va[b + 1], this.va[b]);
    }
  }
};
RL.prototype.forEach = RL.prototype.forEach;
RL.prototype.get = function(a, b) {
  if (this.oa) {
    return this.oa.get(a);
  }
  if (SL(this)) {
    return this.get(a);
  }
  for (var c = 0;c < this.va.length;c += 2) {
    if (eL(this.va[c], a)) {
      return this.va[c + 1];
    }
  }
  return b;
};
RL.prototype.get = RL.prototype.get;
RL.prototype.has = function(a) {
  if (this.oa) {
    return this.oa.has(a);
  }
  if (SL(this)) {
    return this.has(a);
  }
  for (var b = 0;b < this.va.length;b += 2) {
    if (eL(this.va[b], a)) {
      return!0;
    }
  }
  return!1;
};
RL.prototype.has = RL.prototype.has;
RL.prototype.set = function(a, b) {
  this.sa = -1;
  if (this.oa) {
    this.oa.set(a, b), this.size = this.oa.size;
  } else {
    for (var c = 0;c < this.va.length;c += 2) {
      if (eL(this.va[c], a)) {
        this.va[c + 1] = b;
        return;
      }
    }
    this.va.push(a);
    this.va.push(b);
    this.size++;
    32 < this.size && (this.oa = TL(this.va, !0), this.va = null);
  }
};
RL.prototype.set = RL.prototype.set;
RL.prototype["delete"] = function(a) {
  this.sa = -1;
  if (this.oa) {
    this.oa["delete"](a), this.size = this.oa.size;
  } else {
    for (var b = 0;b < this.va.length;b += 2) {
      if (eL(this.va[b], a)) {
        this.va.splice(b, 2);
        this.size--;
        break;
      }
    }
  }
};
RL.prototype.mc = function() {
  if (this.oa) {
    return this.oa.mc();
  }
  -1 === this.sa && (this.sa = iL(this));
  return this.sa;
};
RL.prototype.Yb = function(a) {
  return this.oa ? PL(this.oa, a) : PL(this, a);
};
function QL(a, b, c) {
  this.map = b || {};
  this.Ad = a || [];
  this.size = c || 0;
  this.sa = -1;
}
QL.prototype.toString = function() {
  return "[TransitMap]";
};
QL.prototype.clear = function() {
  this.sa = -1;
  this.map = {};
  this.Ad = [];
  this.size = 0;
};
QL.prototype.clear = QL.prototype.clear;
QL.prototype.bc = function() {
  return null != this.Ad ? this.Ad : bL(this.map);
};
QL.prototype["delete"] = function(a) {
  this.sa = -1;
  this.Ad = null;
  for (var b = jL(a), c = this.map[b], d = 0;d < c.length;d += 2) {
    if (eL(a, c[d])) {
      c.splice(d, 2);
      0 === c.length && delete this.map[b];
      this.size--;
      break;
    }
  }
};
QL.prototype.entries = function() {
  return new OL(this, 2);
};
QL.prototype.entries = QL.prototype.entries;
QL.prototype.forEach = function(a) {
  for (var b = this.bc(), c = 0;c < b.length;c++) {
    for (var d = this.map[b[c]], e = 0;e < d.length;e += 2) {
      a(d[e + 1], d[e], this);
    }
  }
};
QL.prototype.forEach = QL.prototype.forEach;
QL.prototype.get = function(a, b) {
  var c = jL(a), c = this.map[c];
  if (null != c) {
    for (var d = 0;d < c.length;d += 2) {
      if (eL(a, c[d])) {
        return c[d + 1];
      }
    }
  } else {
    return b;
  }
};
QL.prototype.get = QL.prototype.get;
QL.prototype.has = function(a) {
  var b = jL(a), b = this.map[b];
  if (null != b) {
    for (var c = 0;c < b.length;c += 2) {
      if (eL(a, b[c])) {
        return!0;
      }
    }
  }
  return!1;
};
QL.prototype.has = QL.prototype.has;
QL.prototype.keys = function() {
  return new OL(this, 0);
};
QL.prototype.keys = QL.prototype.keys;
QL.prototype.ud = function() {
  for (var a = this.bc(), b = [], c = 0;c < a.length;c++) {
    for (var d = this.map[a[c]], e = 0;e < d.length;e += 2) {
      b.push(d[e]);
    }
  }
  return b;
};
QL.prototype.keySet = QL.prototype.ud;
QL.prototype.set = function(a, b) {
  this.sa = -1;
  var c = jL(a), d = this.map[c];
  if (null == d) {
    this.Ad && this.Ad.push(c), this.map[c] = [a, b], this.size++;
  } else {
    for (var c = !0, e = 0;e < d.length;e += 2) {
      if (eL(b, d[e])) {
        c = !1;
        d[e] = b;
        break;
      }
    }
    c && (d.push(a), d.push(b), this.size++);
  }
};
QL.prototype.set = QL.prototype.set;
QL.prototype.values = function() {
  return new OL(this, 1);
};
QL.prototype.values = QL.prototype.values;
QL.prototype.mc = function() {
  -1 === this.sa && (this.sa = iL(this));
  return this.sa;
};
QL.prototype.Yb = function(a) {
  return PL(this, a);
};
function TL(a, b) {
  var c = !1;
  a = a || [];
  c = !1 === c ? c : !0;
  if ((!0 !== b || !b) && 64 >= a.length) {
    if (c) {
      var d = a;
      a = [];
      for (c = 0;c < d.length;c += 2) {
        for (var e = !1, f = 0;f < a.length;f += 2) {
          if (eL(a[f], d[c])) {
            a[f + 1] = d[c + 1];
            e = !0;
            break;
          }
        }
        e || (a.push(d[c]), a.push(d[c + 1]));
      }
    }
    return new RL(a);
  }
  for (var d = {}, e = [], g = 0, c = 0;c < a.length;c += 2) {
    var f = jL(a[c]), h = d[f];
    if (null == h) {
      e.push(f), d[f] = [a[c], a[c + 1]], g++;
    } else {
      for (var l = !0, f = 0;f < h.length;f += 2) {
        if (eL(h[f], a[c])) {
          h[f + 1] = a[c + 1];
          l = !1;
          break;
        }
      }
      l && (h.push(a[c]), h.push(a[c + 1]), g++);
    }
  }
  return new QL(e, d, g);
}
function UL(a) {
  this.map = a;
  this.size = a.size;
}
UL.prototype.toString = function() {
  return "[TransitSet]";
};
UL.prototype.add = function(a) {
  this.map.set(a, a);
  this.size = this.map.size;
};
UL.prototype.add = UL.prototype.add;
UL.prototype.clear = function() {
  this.map = new QL;
  this.size = 0;
};
UL.prototype.clear = UL.prototype.clear;
UL.prototype["delete"] = function(a) {
  this.map["delete"](a);
  this.size = this.map.size;
};
UL.prototype.entries = function() {
  return this.map.entries();
};
UL.prototype.entries = UL.prototype.entries;
UL.prototype.forEach = function(a) {
  var b = this;
  this.map.forEach(function(c, d) {
    a(d, b);
  });
};
UL.prototype.forEach = UL.prototype.forEach;
UL.prototype.has = function(a) {
  return this.map.has(a);
};
UL.prototype.has = UL.prototype.has;
UL.prototype.keys = function() {
  return this.map.keys();
};
UL.prototype.keys = UL.prototype.keys;
UL.prototype.ud = function() {
  return this.map.ud();
};
UL.prototype.keySet = UL.prototype.ud;
UL.prototype.values = function() {
  return this.map.values();
};
UL.prototype.values = UL.prototype.values;
UL.prototype.Yb = function(a) {
  if (a instanceof UL) {
    if (this.size === a.size) {
      return eL(this.map, a.map);
    }
  } else {
    return!1;
  }
};
UL.prototype.mc = function() {
  return jL(this.map);
};
function VL(a, b) {
  if (3 < a.length) {
    if (b) {
      return!0;
    }
    var c = a.charAt(1);
    return "~" === a.charAt(0) ? ":" === c || "$" === c || "#" === c : !1;
  }
  return!1;
}
function WL(a) {
  var b = Math.floor(a / 44);
  a = String.fromCharCode(a % 44 + 48);
  return 0 === b ? "^" + a : "^" + String.fromCharCode(b + 48) + a;
}
function XL() {
  this.Ch = this.de = this.na = 0;
  this.Qb = {};
}
XL.prototype.write = function(a, b) {
  if (VL(a, b)) {
    4096 === this.Ch ? (this.clear(), this.de = 0, this.Qb = {}) : 1936 === this.na && this.clear();
    var c = this.Qb[a];
    return null == c ? (this.Qb[a] = [WL(this.na), this.de], this.na++, a) : c[1] != this.de ? (c[1] = this.de, c[0] = WL(this.na), this.na++, a) : c[0];
  }
  return a;
};
XL.prototype.clear = function() {
  this.na = 0;
  this.de++;
};
function YL() {
  this.na = 0;
  this.Qb = [];
}
YL.prototype.write = function(a) {
  1936 == this.na && (this.na = 0);
  this.Qb[this.na] = a;
  this.na++;
  return a;
};
YL.prototype.Te = function(a) {
  return this.Qb[2 === a.length ? a.charCodeAt(1) - 48 : 44 * (a.charCodeAt(1) - 48) + (a.charCodeAt(2) - 48)];
};
YL.prototype.clear = function() {
  this.na = 0;
};
function ZL(a) {
  this.Hb = a;
}
function $L(a) {
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
$L.prototype.De = {Za:{_:function() {
  return null;
}, "?":function(a) {
  return "t" === a;
}, b:function(a) {
  return GL("b", a);
}, i:function(a) {
  "number" === typeof a || a instanceof lL || (a = wL(a, 10), a = 0 < a.compare(HL) || 0 > a.compare(IL) ? a : AL(a));
  return a;
}, n:function(a) {
  return GL("n", a);
}, d:function(a) {
  return parseFloat(a);
}, f:function(a) {
  return GL("f", a);
}, c:function(a) {
  return a;
}, ":":function(a) {
  return new JL(a);
}, $:function(a) {
  return new KL(a);
}, r:function(a) {
  return GL("r", a);
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
  b = vL(d, c);
  c = 0;
  f = 16;
  for (e = 24;24 > f;f += 2, e -= 8) {
    c |= parseInt(a.substring(f, f + 2), 16) << e;
  }
  d = 0;
  for (e = f = 24;32 > f;f += 2, e -= 8) {
    d |= parseInt(a.substring(f, f + 2), 16) << e;
  }
  c = vL(d, c);
  return new ML(b, c);
}, set:function(a) {
  a = a || [];
  for (var b = {}, c = [], d = 0, e = 0;e < a.length;e++) {
    var f = jL(a[e]), g = b[f];
    if (null == g) {
      c.push(f), b[f] = [a[e], a[e]], d++;
    } else {
      for (var f = !0, h = 0;h < g.length;h += 2) {
        if (eL(g[h], a[e])) {
          f = !1;
          break;
        }
      }
      f && (g.push(a[e]), g.push(a[e]), d++);
    }
  }
  return new UL(new QL(c, b, d));
}, list:function(a) {
  return GL("list", a);
}, link:function(a) {
  return GL("link", a);
}, cmap:function(a) {
  return TL(a);
}}, Cf:function(a, b) {
  return GL(a, b);
}, Qe:!0};
$L.prototype.Ba = function(a, b, c, d) {
  if (null == a) {
    return null;
  }
  switch(typeof a) {
    case "string":
      return VL(a, c) ? (a = aM(this, a), b && b.write(a, c), b = a) : b = "^" === a.charAt(0) && " " !== a.charAt(1) ? b.Te(a, c) : aM(this, a), b;
    case "object":
      if (cL(a)) {
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
            b = TL(d);
          }
        } else {
          b = bM(this, a, b, d);
        }
      } else {
        c = bL(a);
        var e = c[0];
        if ((d = 1 == c.length ? this.Ba(e, b, !1, !1) : null) && d instanceof ZL) {
          a = a[e], c = this.Za[d.Hb], b = null != c ? c(this.Ba(a, b, !1, !0)) : GL(d.Hb, this.Ba(a, b, !1, !1));
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
            b = TL(f);
          }
        }
      }
      return b;
  }
  return a;
};
$L.prototype.decode = $L.prototype.Ba;
function bM(a, b, c, d) {
  if (d) {
    var e = [];
    for (d = 0;d < b.length;d++) {
      e.push(a.Ba(b[d], c, !1, !1));
    }
    return e;
  }
  e = c && c.na;
  if (2 === b.length && "string" === typeof b[0] && (d = a.Ba(b[0], c, !1, !1)) && d instanceof ZL) {
    return b = b[1], e = a.Za[d.Hb], null != e ? e = e(a.Ba(b, c, !1, !0)) : GL(d.Hb, a.Ba(b, c, !1, !1));
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
function aM(a, b) {
  if ("~" === b.charAt(0)) {
    var c = b.charAt(1);
    if ("~" === c || "^" === c || "`" === c) {
      return b.substring(1);
    }
    if ("#" === c) {
      return new ZL(b.substring(2));
    }
    var d = a.Za[c];
    return null == d ? a.Cf(c, b.substring(2)) : d(b.substring(2));
  }
  return b;
}
;function cM(a) {
  this.ai = new $L(a);
}
function dM(a, b) {
  this.ij = a;
  this.options = b || {};
  this.Qb = this.options.cache ? this.options.cache : new YL;
}
dM.prototype.Te = function(a) {
  var b = this.Qb;
  a = this.ij.ai.Ba(JSON.parse(a), b);
  this.Qb.clear();
  return a;
};
dM.prototype.read = dM.prototype.Te;
var eM = 0, fM = (8 | 3 & Math.round(14 * Math.random())).toString(16), gM = "transit$guid$" + (dL() + dL() + dL() + dL() + dL() + dL() + dL() + dL() + "-" + dL() + dL() + dL() + dL() + "-4" + dL() + dL() + dL() + "-" + fM + dL() + dL() + dL() + "-" + dL() + dL() + dL() + dL() + dL() + dL() + dL() + dL() + dL() + dL() + dL() + dL());
function hM(a) {
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
  var b = a[gM];
  null == b && ("undefined" != typeof Object.defineProperty ? (b = ++eM, Object.defineProperty(a, gM, {value:b, enumerable:!1})) : a[gM] = b = ++eM);
  return b;
}
function iM(a, b) {
  for (var c = a.toString(), d = c.length;d < b;d++) {
    c = "0" + c;
  }
  return c;
}
function jM() {
}
jM.prototype.tag = function() {
  return "_";
};
jM.prototype.ka = function() {
  return null;
};
jM.prototype.Ca = function() {
  return "null";
};
function kM() {
}
kM.prototype.tag = function() {
  return "s";
};
kM.prototype.ka = function(a) {
  return a;
};
kM.prototype.Ca = function(a) {
  return a;
};
function lM() {
}
lM.prototype.tag = function() {
  return "i";
};
lM.prototype.ka = function(a) {
  return a;
};
lM.prototype.Ca = function(a) {
  return a.toString();
};
function mM() {
}
mM.prototype.tag = function() {
  return "i";
};
mM.prototype.ka = function(a) {
  return a.toString();
};
mM.prototype.Ca = function(a) {
  return a.toString();
};
function nM() {
}
nM.prototype.tag = function() {
  return "?";
};
nM.prototype.ka = function(a) {
  return a;
};
nM.prototype.Ca = function(a) {
  return a.toString();
};
function oM() {
}
oM.prototype.tag = function() {
  return "array";
};
oM.prototype.ka = function(a) {
  return a;
};
oM.prototype.Ca = function() {
  return null;
};
function pM() {
}
pM.prototype.tag = function() {
  return "map";
};
pM.prototype.ka = function(a) {
  return a;
};
pM.prototype.Ca = function() {
  return null;
};
function qM() {
}
qM.prototype.tag = function() {
  return "t";
};
qM.prototype.ka = function(a) {
  return a.getUTCFullYear() + "-" + iM(a.getUTCMonth() + 1, 2) + "-" + iM(a.getUTCDate(), 2) + "T" + iM(a.getUTCHours(), 2) + ":" + iM(a.getUTCMinutes(), 2) + ":" + iM(a.getUTCSeconds(), 2) + "." + iM(a.getUTCMilliseconds(), 3) + "Z";
};
qM.prototype.Ca = function(a, b) {
  return b.ka(a);
};
function rM() {
}
rM.prototype.tag = function() {
  return "m";
};
rM.prototype.ka = function(a) {
  return a.valueOf();
};
rM.prototype.Ca = function(a) {
  return a.valueOf().toString();
};
function sM() {
}
sM.prototype.tag = function() {
  return "u";
};
sM.prototype.ka = function(a) {
  return a.toString();
};
sM.prototype.Ca = function(a) {
  return a.toString();
};
function tM() {
}
tM.prototype.tag = function() {
  return ":";
};
tM.prototype.ka = function(a) {
  return a.name;
};
tM.prototype.Ca = function(a, b) {
  return b.ka(a);
};
function uM() {
}
uM.prototype.tag = function() {
  return "$";
};
uM.prototype.ka = function(a) {
  return a.name;
};
uM.prototype.Ca = function(a, b) {
  return b.ka(a);
};
function vM() {
}
vM.prototype.tag = function(a) {
  return a.tag;
};
vM.prototype.ka = function(a) {
  return a.ka;
};
vM.prototype.Ca = function() {
  return null;
};
function wM() {
}
wM.prototype.tag = function() {
  return "set";
};
wM.prototype.ka = function(a) {
  var b = [];
  a.forEach(function(a) {
    b.push(a);
  });
  return GL("array", b);
};
wM.prototype.Ca = function() {
  return null;
};
function xM() {
}
xM.prototype.tag = function() {
  return "map";
};
xM.prototype.ka = function(a) {
  return a;
};
xM.prototype.Ca = function() {
  return null;
};
function yM() {
}
yM.prototype.tag = function() {
  return "map";
};
yM.prototype.ka = function(a) {
  return a;
};
yM.prototype.Ca = function() {
  return null;
};
function zM() {
  this.Za = {};
  this.set(null, new jM);
  this.set(String, new kM);
  this.set(Number, new lM);
  this.set(lL, new mM);
  this.set(Boolean, new nM);
  this.set(Array, new oM);
  this.set(Object, new pM);
  this.set(Date, new rM);
  this.set(ML, new sM);
  this.set(JL, new tM);
  this.set(KL, new uM);
  this.set(FL, new vM);
  this.set(UL, new wM);
  this.set(RL, new xM);
  this.set(QL, new yM);
}
zM.prototype.get = function(a) {
  var b = null, b = "string" === typeof a ? this.Za[a] : this.Za[hM(a)];
  return null != b ? b : this.Za["default"];
};
zM.prototype.set = function(a, b) {
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
  c ? this.Za[a] = b : this.Za[hM(a)] = b;
};
function AM(a) {
  this.Yc = a || {};
  this.Qe = null != this.Yc.preferStrings ? this.Yc.preferStrings : !0;
  this.Xg = this.Yc.objectBuilder || null;
  this.Za = new zM;
  if (a = this.Yc.handlers) {
    if (cL(a) || !a.forEach) {
      throw Error('transit writer "handlers" option must be a map');
    }
    var b = this;
    a.forEach(function(a, d) {
      b.Za.set(d, a);
    });
  }
  this.We = this.Yc.unpack || function(a) {
    return a instanceof RL && null === a.oa ? a.va : !1;
  };
  this.pe = this.Yc && this.Yc.verbose || !1;
}
AM.prototype.qc = function(a) {
  var b = this.Za.get(null == a ? null : a.constructor);
  return null != b ? b : (a = a && a.transitTag) ? this.Za.get(a) : null;
};
function BM(a, b, c, d, e) {
  a = a + b + c;
  return e ? e.write(a, d) : a;
}
function CM(a, b, c) {
  var d = [];
  if (cL(b)) {
    for (var e = 0;e < b.length;e++) {
      d.push(DM(a, b[e], !1, c));
    }
  } else {
    b.forEach(function(b) {
      d.push(DM(a, b, !1, c));
    });
  }
  return d;
}
function EM(a, b) {
  if ("string" !== typeof b) {
    var c = a.qc(b);
    return c && 1 === c.tag(b).length;
  }
  return!0;
}
function FM(a, b) {
  var c = a.We(b), d = !0;
  if (c) {
    for (var e = 0;e < c.length && (d = EM(a, c[e]), d);e += 2) {
    }
    return d;
  }
  if (b.keys && (c = b.keys(), c.next)) {
    for (step = c.next();!step.done;) {
      d = EM(a, step.value);
      if (!d) {
        break;
      }
      step = c.next();
    }
    return d;
  }
  if (b.forEach) {
    return b.forEach(function(b, c) {
      d = d && EM(a, c);
    }), d;
  }
  throw Error("Cannot walk keys of object type " + (null == b ? null : b.constructor).name);
}
function GM(a, b, c) {
  if (b.constructor === Object || null != b.forEach) {
    if (a.pe) {
      if (null != b.forEach) {
        if (FM(a, b)) {
          var d = {};
          b.forEach(function(b, e) {
            d[DM(a, e, !0, !1)] = DM(a, b, !1, c);
          });
        } else {
          var e = a.We(b), f = [], g = BM("~#", "cmap", "", !0, c);
          if (e) {
            for (var h = 0;h < e.length;h += 2) {
              f.push(DM(a, e[h], !0, !1)), f.push(DM(a, e[h + 1], !1, c));
            }
          } else {
            b.forEach(function(b, d) {
              f.push(DM(a, d, !0, !1));
              f.push(DM(a, b, !1, c));
            });
          }
          d = {};
          d[g] = f;
        }
      } else {
        for (d = {}, e = bL(b), h = 0;h < e.length;h++) {
          d[DM(a, e[h], !0, !1)] = DM(a, b[e[h]], !1, c);
        }
      }
      return d;
    }
    if (null != b.forEach) {
      if (FM(a, b)) {
        e = a.We(b);
        d = ["^ "];
        if (e) {
          for (h = 0;h < e.length;h += 2) {
            d.push(DM(a, e[h], !0, c)), d.push(DM(a, e[h + 1], !1, c));
          }
        } else {
          b.forEach(function(b, e) {
            d.push(DM(a, e, !0, c));
            d.push(DM(a, b, !1, c));
          });
        }
        return d;
      }
      e = a.We(b);
      f = [];
      g = BM("~#", "cmap", "", !0, c);
      if (e) {
        for (h = 0;h < e.length;h += 2) {
          f.push(DM(a, e[h], !0, c)), f.push(DM(a, e[h + 1], !1, c));
        }
      } else {
        b.forEach(function(b, d) {
          f.push(DM(a, d, !0, c));
          f.push(DM(a, b, !1, c));
        });
      }
      return[g, f];
    }
    d = ["^ "];
    e = bL(b);
    for (h = 0;h < e.length;h++) {
      d.push(DM(a, e[h], !0, c)), d.push(DM(a, b[e[h]], !1, c));
    }
    return d;
  }
  if (null != a.Xg) {
    return a.Xg(b, function(b) {
      return DM(a, b, !0, c);
    }, function(b) {
      return DM(a, b, !1, c);
    });
  }
  h = (null == b ? null : b.constructor).name;
  e = Error("Cannot write " + h);
  e.data = {Of:b, type:h};
  throw e;
}
function DM(a, b, c, d) {
  var e = a.qc(b), f = e ? e.tag(b) : null, g = e ? e.ka(b) : null;
  if (null != e && null != f) {
    switch(f) {
      case "_":
        return c ? BM("~", "_", "", c, d) : null;
      case "s":
        return 0 < g.length ? (a = g.charAt(0), a = "~" === a || "^" === a || "`" === a ? "~" + g : g) : a = g, BM("", "", a, c, d);
      case "?":
        return c ? BM("~", "?", g.toString()[0], c, d) : g;
      case "i":
        return Infinity === g ? BM("~", "z", "INF", c, d) : -Infinity === g ? BM("~", "z", "-INF", c, d) : isNaN(g) ? BM("~", "z", "NaN", c, d) : c || "string" === typeof g || g instanceof lL ? BM("~", "i", g.toString(), c, d) : g;
      case "d":
        return c ? BM(g.rj, "d", g, c, d) : g;
      case "b":
        return BM("~", "b", g, c, d);
      case "'":
        return a.pe ? (b = {}, c = BM("~#", "'", "", !0, d), b[c] = DM(a, g, !1, d), d = b) : d = [BM("~#", "'", "", !0, d), DM(a, g, !1, d)], d;
      case "array":
        return CM(a, g, d);
      case "map":
        return GM(a, g, d);
      default:
        a: {
          if (1 === f.length) {
            if ("string" === typeof g) {
              d = BM("~", f, g, c, d);
              break a;
            }
            if (c || a.Qe) {
              (a = a.pe && new qM) ? (f = a.tag(b), g = a.Ca(b, a)) : g = e.Ca(b, e);
              if (null !== g) {
                d = BM("~", f, g, c, d);
                break a;
              }
              d = Error('Tag "' + f + '" cannot be encoded as string');
              d.data = {tag:f, ka:g, Of:b};
              throw d;
            }
          }
          b = f;
          c = g;
          a.pe ? (g = {}, g[BM("~#", b, "", !0, d)] = DM(a, c, !1, d), d = g) : d = [BM("~#", b, "", !0, d), DM(a, c, !1, d)];
        }
        return d;
    }
  } else {
    throw d = (null == b ? null : b.constructor).name, a = Error("Cannot write " + d), a.data = {Of:b, type:d}, a;
  }
}
function HM(a, b) {
  var c = a.qc(b);
  if (null != c) {
    return 1 === c.tag(b).length ? GL("'", b) : b;
  }
  var c = (null == b ? null : b.constructor).name, d = Error("Cannot write " + c);
  d.data = {Of:b, type:c};
  throw d;
}
function IM(a, b) {
  this.Vd = a;
  this.options = b || {};
  this.Qb = !1 === this.options.cache ? null : this.options.cache ? this.options.cache : new XL;
}
IM.prototype.oi = function() {
  return this.Vd;
};
IM.prototype.marshaller = IM.prototype.oi;
IM.prototype.write = function(a, b) {
  var c = null, d = b || {}, c = d.asMapKey || !1, e = this.Vd.pe ? !1 : this.Qb;
  !1 === d.marshalTop ? c = DM(this.Vd, a, c, e) : (d = this.Vd, c = JSON.stringify(DM(d, HM(d, a), c, e)));
  null != this.Qb && this.Qb.clear();
  return c;
};
IM.prototype.write = IM.prototype.write;
IM.prototype.register = function(a, b) {
  this.Vd.Za.set(a, b);
};
IM.prototype.register = IM.prototype.register;
function JM(a, b) {
  if ("json" === a || "json-verbose" === a || null == a) {
    var c = new cM(b);
    return new dM(c, b);
  }
  throw Error("Cannot create reader of type " + a);
}
function KM(a, b) {
  if ("json" === a || "json-verbose" === a || null == a) {
    "json-verbose" === a && (null == b && (b = {}), b.verbose = !0);
    var c = new AM(b);
    return new IM(c, b);
  }
  c = Error('Type must be "json"');
  c.data = {type:a};
  throw c;
}
;Ll.prototype.J = function(a, b) {
  return b instanceof Ll ? this.Va === b.Va : b instanceof ML ? this.Va === b.toString() : !1;
};
FL.prototype.J = function(a, b) {
  return this.equiv(b);
};
ML.prototype.J = function(a, b) {
  return b instanceof Ll ? bd(b, this) : this.equiv(b);
};
lL.prototype.J = function(a, b) {
  return this.equiv(b);
};
FL.prototype.ye = !0;
FL.prototype.S = function() {
  return jL.g ? jL.g(this) : jL.call(null, this);
};
ML.prototype.ye = !0;
ML.prototype.S = function() {
  return jL.g ? jL.g(this) : jL.call(null, this);
};
lL.prototype.ye = !0;
lL.prototype.S = function() {
  return jL.g ? jL.g(this) : jL.call(null, this);
};
function LM(a, b) {
  for (var c = A(of(b)), d = null, e = 0, f = 0;;) {
    if (f < e) {
      var g = d.H(null, f);
      a[g] = b[g];
      f += 1;
    } else {
      if (c = A(c)) {
        d = c, S(d) ? (c = x(d), f = y(d), d = c, e = J(c), c = f) : (c = C(d), a[c] = b[c], c = F(d), d = null, e = 0), f = 0;
      } else {
        break;
      }
    }
  }
  return a;
}
function MM() {
}
MM.prototype.Od = function() {
  return td(aj);
};
MM.prototype.add = function(a, b, c) {
  return Wg.j(a, b, c);
};
MM.prototype.Ie = function(a) {
  return vd(a);
};
MM.prototype.sd = function(a) {
  return dj.j ? dj.j(a, !0, !0) : dj.call(null, a, !0, !0);
};
function NM() {
}
NM.prototype.Od = function() {
  return td(Ye);
};
NM.prototype.add = function(a, b) {
  return Vg.h(a, b);
};
NM.prototype.Ie = function(a) {
  return vd(a);
};
NM.prototype.sd = function(a) {
  return qi.h ? qi.h(a, !0) : qi.call(null, a, !0);
};
var MQ = function() {
  function a(a, b) {
    var c = qg(a), g = LM({prefersStrings:!1, arrayBuilder:new NM, mapBuilder:new MM, handlers:el(pk.k(G([new n(null, 5, ["$", function() {
      return function(a) {
        return de.g(a);
      };
    }(c), ":", function() {
      return function(a) {
        return rg.g(a);
      };
    }(c), "set", function() {
      return function(a) {
        return Sh.h(uk, a);
      };
    }(c), "list", function() {
      return function(a) {
        return Sh.h(me, a.reverse());
      };
    }(c), "cmap", function() {
      return function(a) {
        for (var b = 0, c = td(aj);;) {
          if (b < a.length) {
            var d = b + 2, c = Wg.j(c, a[b], a[b + 1]), b = d
          } else {
            return vd(c);
          }
        }
      };
    }(c)], null), Hq.g(b)], 0)))}, el(bf.h(b, Hq)));
    return JM.h ? JM.h(c, g) : JM.call(null, c, g);
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
function NQ() {
}
NQ.prototype.tag = function() {
  return ":";
};
NQ.prototype.ka = function(a) {
  return a.ja;
};
NQ.prototype.Ca = function(a) {
  return a.ja;
};
function OQ() {
}
OQ.prototype.tag = function() {
  return "$";
};
OQ.prototype.ka = function(a) {
  return a.Hb;
};
OQ.prototype.Ca = function(a) {
  return a.Hb;
};
function PQ() {
}
PQ.prototype.tag = function() {
  return "list";
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
        c = a, S(c) ? (a = x(c), e = y(c), c = a, d = J(a), a = e) : (a = C(c), b.push(a), a = F(c), c = null, d = 0), e = 0;
      } else {
        break;
      }
    }
  }
  return GL.h ? GL.h("array", b) : GL.call(null, "array", b);
};
PQ.prototype.Ca = function() {
  return null;
};
function QQ() {
}
QQ.prototype.tag = function() {
  return "map";
};
QQ.prototype.ka = function(a) {
  return a;
};
QQ.prototype.Ca = function() {
  return null;
};
function RQ() {
}
RQ.prototype.tag = function() {
  return "set";
};
RQ.prototype.ka = function(a) {
  var b = [];
  a = A(a);
  for (var c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.H(null, e);
      b.push(f);
      e += 1;
    } else {
      if (a = A(a)) {
        c = a, S(c) ? (a = x(c), e = y(c), c = a, d = J(a), a = e) : (a = C(c), b.push(a), a = F(c), c = null, d = 0), e = 0;
      } else {
        break;
      }
    }
  }
  return GL.h ? GL.h("array", b) : GL.call(null, "array", b);
};
RQ.prototype.Ca = function() {
  return null;
};
function SQ() {
}
SQ.prototype.tag = function() {
  return "array";
};
SQ.prototype.ka = function(a) {
  var b = [];
  a = A(a);
  for (var c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.H(null, e);
      b.push(f);
      e += 1;
    } else {
      if (a = A(a)) {
        c = a, S(c) ? (a = x(c), e = y(c), c = a, d = J(a), a = e) : (a = C(c), b.push(a), a = F(c), c = null, d = 0), e = 0;
      } else {
        break;
      }
    }
  }
  return b;
};
SQ.prototype.Ca = function() {
  return null;
};
function TQ() {
}
TQ.prototype.tag = function() {
  return "u";
};
TQ.prototype.ka = function(a) {
  return a.Va;
};
TQ.prototype.Ca = function(a) {
  return this.ka(a);
};
var UQ = function() {
  function a(a, b) {
    var c = new NQ, g = new OQ, h = new PQ, l = new QQ, p = new RQ, s = new SQ, t = new TQ, w = pk.k(G([af([vj, pg, n, tj, Li, le, W, mg, sg, Fi, Ki, uj, ok, Xi, U, lg, Ie, sk, Rj, Wj, Di, wk, yg, ce, Ll, Ek, Aj], [l, h, l, h, h, h, c, h, h, s, h, h, h, h, s, h, h, p, l, h, h, p, h, g, t, h, h]), Hq.g(b)], 0)), B = qg(a), z = LM({unpack:function() {
      return function(a) {
        return a instanceof n ? a.p : !1;
      };
    }(B, c, g, h, l, p, s, t, w), handlers:function() {
      var a = Ub(w);
      a.forEach = function() {
        return function(a) {
          for (var b = A(this), c = null, d = 0, e = 0;;) {
            if (e < d) {
              var f = c.H(null, e), g = O.j(f, 0, null), f = O.j(f, 1, null);
              a.h ? a.h(f, g) : a.call(null, f, g);
              e += 1;
            } else {
              if (b = A(b)) {
                S(b) ? (c = x(b), b = y(b), g = c, d = J(c), c = g) : (c = C(b), g = O.j(c, 0, null), c = f = O.j(c, 1, null), a.h ? a.h(c, g) : a.call(null, c, g), b = F(b), c = null, d = 0), e = 0;
              } else {
                return null;
              }
            }
          }
        };
      }(a, B, c, g, h, l, p, s, t, w);
      return a;
    }(), objectBuilder:function(a, b, c, d, e, f, g, h, l) {
      return function(p, s, t) {
        return Kf(function() {
          return function(a, b, c) {
            a.push(s.g ? s.g(b) : s.call(null, b), t.g ? t.g(c) : t.call(null, c));
            return a;
          };
        }(a, b, c, d, e, f, g, h, l), ["^ "], p);
      };
    }(B, c, g, h, l, p, s, t, w)}, el(bf.h(b, Hq)));
    return KM.h ? KM.h(B, z) : KM.call(null, B, z);
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
function VQ(a) {
  a = Bf(a) ? R.h(kh, a) : a;
  var b = P.h(a, Au), c = P.h(a, Yt), d = P.h(a, cr), e = P.h(a, lu), f = P.h(a, dv);
  return "" + u.g(function() {
    var a = new NK;
    OK(a, qg(q(f) ? f : zt));
    PK(a);
    a.rd = e;
    QK(a, d);
    PK(a);
    a.Rd = c;
    RK(a, b, !0);
    return a;
  }());
}
function WQ(a) {
  return Ww.h("-", Ch.h(Zw, ax.h("" + u.g(a), /-/)));
}
function XQ(a) {
  return el(Bk(Ch.h(WQ, Yi(a)), Zi(a)));
}
function YQ(a, b, c) {
  return UQ.h(b, c).write(a);
}
function ZQ(a) {
  a = JSON.parse(a);
  return q(a) ? Jl.k(a, G([il, !0], 0)) : null;
}
function $Q(a) {
  a = el(a);
  return JSON.stringify(a);
}
function aR(a) {
  return Rb.j(function(a, c) {
    var d = ax.h(c, /:\s+/), e = O.j(d, 0, null), d = O.j(d, 1, null), f = Ka(e);
    return q(q(f) ? f : Ka(d)) ? a : Q.j(a, Yw(e), d);
  }, aj, ax.h(q(a) ? a : "", /(\n)|(\r)|(\r\n)|(\n\r)/));
}
;var bR, cR = aj;
bR = mh.g ? mh.g(cR) : mh.call(null, cR);
function dR(a) {
  return Ib(Ka(a)) ? Rb.j(function(a, c) {
    var d = ax.h(c, /=/), e = O.j(d, 0, null), d = O.j(d, 1, null);
    return Q.j(a, rg.g(MK(e)), MK(d));
  }, aj, ax.h("" + u.g(a), /&/)) : null;
}
function eR(a) {
  if (Ib(Ka(a))) {
    a = a instanceof NK ? a.clone() : new NK(a, void 0);
    var b = a.ld, c = rg.g(a.yd), d = a.le;
    return new n(null, 6, [dv, c, lu, a.rd, cr, q(q(d) ? 0 < d : d) ? d : null, Yt, a.Rd, Au, Ib(b.Mf()) ? "" + u.g(b) : null, rt, Ib(b.Mf()) ? dR("" + u.g(b)) : null], null);
  }
  return null;
}
function fR(a, b) {
  return "" + u.g(LK(qg(a))) + "\x3d" + u.g(LK("" + u.g(b)));
}
function gR(a, b) {
  return Ww.h("\x26", Ch.h(function(b) {
    return fR(a, b);
  }, b));
}
function hR(a) {
  var b = O.j(a, 0, null);
  a = O.j(a, 1, null);
  return jf(a) ? gR(b, a) : fR(b, a);
}
var iR = Bk("()*\x26^%$#!+", Ch.h(function(a) {
  return "\\" + u.g(a);
}, "()*\x26^%$#!+"));
function jR(a, b, c, d) {
  c = (d = Zg.h(rr, d)) ? Mk(Nk("(?i)" + u.g(Rb.h(u, zk.h(iR, c)))), "" + u.g(P.j(Yq.g(a), "content-type", ""))) : d;
  return q(c) ? Yh.j(a, new U(null, 1, 5, V, [Fu], null), b) : a;
}
var kR = new n(null, 4, [Rl, ru, Rn, aj, hu, ru, ls, aj], null), lR;
lR = function(a) {
  return function(b) {
    var c = zo.g(b);
    return q(c) ? iH.h(a.g ? a.g(b) : a.call(null, b), c) : a.g ? a.g(b) : a.call(null, b);
  };
}(function(a) {
  return function(b) {
    var c = Bf(b) ? R.h(kh, b) : b, d = P.h(c, rt), e = eR(Cs.g(c));
    return q(e) ? (b = Yh.j(bf.h(pk.k(G([c, e], 0)), Cs), new U(null, 1, 5, V, [rt], null), function(a, b, c, d, e, s) {
      return function(a) {
        return pk.k(G([a, s], 0));
      };
    }(e, e, b, c, c, d)), a.g ? a.g(b) : a.call(null, b)) : a.g ? a.g(c) : a.call(null, c);
  };
}(function(a) {
  return function(b) {
    var c = An.g(b);
    q(c) && (b = Q.j(bf.h(b, An), jv, c));
    return a.g ? a.g(b) : a.call(null, b);
  };
}(function(a) {
  return function(b) {
    b = q(Lk(/.*android.*/i, Nv)) ? Xh(b, new U(null, 2, 5, V, [rt, Mr], null), Math.random.w ? Math.random.w() : Math.random.call(null)) : b;
    return a.g ? a.g(b) : a.call(null, b);
  };
}(function(a) {
  return function(b) {
    var c = At.g(b);
    q(c) && (b = Xh(bf.h(b, At), new U(null, 2, 5, V, [Yq, "authorization"], null), "Bearer " + u.g(c)));
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
        var e, f = Yu.g(b);
        e = q(f) ? f : d;
        if (hf(e)) {
          return a.g ? a.g(b) : a.call(null, b);
        }
        b = bf.h(b, Yu);
        f = new U(null, 2, 5, V, [Yq, "authorization"], null);
        if (q(e)) {
          var s = mf(e) ? Ch.h(e, new U(null, 2, 5, V, [eo, tn], null)) : e;
          e = O.j(s, 0, null);
          s = O.j(s, 1, null);
          e = "Basic " + u.g(KK("" + u.g(e) + ":" + u.g(s)));
        } else {
          e = null;
        }
        b = Xh(b, f, e);
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
    b = Bf(b) ? R.h(kh, b) : b;
    var c = P.h(b, rt);
    q(c) && (b = Q.j(bf.h(b, rt), Au, Ww.h("\x26", Ch.h(hR, c))));
    return a.g ? a.g(b) : a.call(null, b);
  };
}(function(a) {
  return function(b) {
    return lH.h(function(a) {
      return jR(a, ZQ, "application/json", jv.g(b));
    }, new U(null, 1, 5, V, [a.g ? a.g(b) : a.call(null, b)], null));
  };
}(function(a) {
  return function(b) {
    var c = Am.g(b);
    q(c) && (b = Xh(Q.j(bf.h(b, Am), Fu, $Q(c)), new U(null, 2, 5, V, [Yq, "content-type"], null), "application/json"));
    return a.g ? a.g(b) : a.call(null, b);
  };
}(function(a) {
  return function(b) {
    var c = pk.k(G([kR, yu.g(b)], 0)), d = Bf(c) ? R.h(kh, c) : c, e = P.h(d, ls), f = P.h(d, hu);
    return lH.h(function(a, c, d, e, f) {
      return function(a) {
        return jR(a, f, "application/transit+json", jv.g(b));
      };
    }(c, d, e, f, function(a, b, c, d) {
      return function(a) {
        return MQ.h(d, c).Te(a);
      };
    }(c, d, e, f)), new U(null, 1, 5, V, [a.g ? a.g(b) : a.call(null, b)], null));
  };
}(function(a) {
  return function(b) {
    var c = un.g(b);
    if (q(c)) {
      var d = pk.k(G([kR, yu.g(b)], 0)), e = Bf(d) ? R.h(kh, d) : d, d = P.h(e, Rn), e = P.h(e, Rl);
      b = Xh(Q.j(bf.h(b, un), Fu, YQ(c, e, d)), new U(null, 2, 5, V, [Yq, "content-type"], null), "application/transit+json");
    }
    return a.g ? a.g(b) : a.call(null, b);
  };
}(function(a) {
  return function(b) {
    return lH.h(function(a) {
      return jR(a, Pz, "application/edn", jv.g(b));
    }, new U(null, 1, 5, V, [a.g ? a.g(b) : a.call(null, b)], null));
  };
}(function(a) {
  return function(b) {
    var c = Ru.g(b);
    q(c) && (b = Xh(Q.j(bf.h(b, Ru), Fu, oh.k(G([c], 0))), new U(null, 2, 5, V, [Yq, "content-type"], null), "application/edn"));
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
        e = tt.g(b);
        e = q(e) ? e : d;
        q(e) && (b = Xh(b, new U(null, 2, 5, V, [Yq, "content-type"], null), e));
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
    b = Bf(b) ? R.h(kh, b) : b;
    var c = P.h(b, jv), d = P.h(b, Jr);
    q(q(d) ? (new sk(null, new n(null, 4, [Om, null, Go, null, Dt, null, qu, null], null), null)).call(null, c) : d) && (b = Xh(Q.j(bf.h(b, Jr), Fu, Ww.h("\x26", Ch.h(hR, d))), new U(null, 2, 5, V, [Yq, "content-type"], null), "application/x-www-form-urlencoded"));
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
        e = Cv.g(b);
        e = q(e) ? e : d;
        q(e) && (b = Xh(b, new U(null, 2, 5, V, [Yq, "accept"], null), e));
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
  var b = Bf(a) ? R.h(kh, a) : a, c = P.h(b, Ar), d = P.h(b, Fu), e = P.h(b, Yq), f = P.h(b, jv), g = cH.w(), h = VQ(b), l = qg(q(f) ? f : pm), p = function() {
    var a = tu.g(b);
    return q(a) ? a : 0;
  }(), s = XQ(e), t = null == c ? !0 : c, w = function() {
    var a = new rK;
    a.Ud = Math.max(0, p);
    a.yh = t;
    return a;
  }();
  ph.v(bR, Q, g, w);
  w.Tg("complete", function(a, b) {
    return function(c) {
      c = c.target;
      fH.h(a, new n(null, 5, [Wr, FK(c), Er, GK(c), Fu, HK(c), Yq, aR(c.getAllResponseHeaders()), ev, new U(null, 2, 5, V, [b, String(c.je)], null)], null));
      ph.j(bR, bf, a);
      return zD(a);
    };
  }(g, h, l, p, s, t, w, a, b, b, c, d, e, f));
  w.send(h, l, d, s);
  return g;
}))))))))))))))));
var mR = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = G(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    var e = O.j(b, 0, null), e = pk.k(G([e, new n(null, 2, [An, Dt, Cs, a], null)], 0));
    return lR.g ? lR.g(e) : lR.call(null, e);
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
var nR, oR = new n(null, 1, [Ql, "en_associative"], null);
function pR(a, b) {
  return mR.k("" + u.g("http://api.cortical.io/rest") + "/expressions", G([new n(null, 4, [rt, oR, Am, new n(null, 1, [jr, b], null), Ar, !1, Yq, new n(null, 1, ["api-key", a], null)], null)], 0));
}
function qR(a, b, c) {
  return mR.k("" + u.g("http://api.cortical.io/rest") + "/expressions/similar_terms", G([new n(null, 4, [rt, Q.k(oR, zn, !0, G([Bu, c], 0)), Am, new n(null, 1, [pv, b], null), Ar, !1, Yq, new n(null, 1, ["api-key", a], null)], null)], 0));
}
function rR(a, b) {
  return Sh.h(null == a ? null : bc(a), Ch.g(function(a) {
    return a + b;
  }));
}
var tR = function sR(b, c, d) {
  var e = yC(new U(null, 2, 5, V, [128, 128], null)), f = function() {
    var b = aj;
    return mh.g ? mh.g(b) : mh.call(null, b);
  }(), g = function(b, c) {
    return function() {
      return yk(Hh.h(.02 * QA(b), function(b) {
        return function() {
          return WB(QA(b) - 1);
        };
      }(b, c)));
    };
  }(e, f);
  ph.v(f, Q, ".", g());
  var h = cH.g(1);
  BG(function(c, e, f, g) {
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
                      SG(d);
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
              var e = c[7], e = c[2], h = Er.g(e);
              c[7] = e;
              c[1] = q(h) ? 8 : 9;
              return Z;
            }
            if (20 === e) {
              return e = c[8], h = Xk.k(G([e], 0)), e = g(), c[9] = h, c[2] = e, c[1] = 21, Z;
            }
            if (1 === e) {
              var e = Ph.h(new sk(null, new n(null, 1, [".", null], null), null), d), e = Ch.h(Yw, e), l = A(e), p;
              c[10] = null;
              c[11] = l;
              c[12] = 0;
              c[13] = 0;
              c[2] = null;
              c[1] = 2;
              return Z;
            }
            if (4 === e) {
              var e = c[10], h = c[12], s = c[14], e = v.h(e, h), h = Xk.k(G(["requesting fingerprint for:", e], 0)), s = pR(b, e);
              c[15] = h;
              c[14] = e;
              return OG(c, 7, s);
            }
            return 15 === e ? (h = c[16], e = x(h), h = y(h), s = J(e), c[10] = e, c[11] = h, c[12] = 0, c[13] = s, c[2] = null, c[1] = 2, Z) : 21 === e ? (e = ph.v(f, Q, c[17], c[2]), h = $G(500), c[18] = e, OG(c, 22, h)) : 13 === e ? (c[2] = null, c[1] = 14, Z) : 22 === e ? (h = c[16], e = c[2], l = F(h), c[10] = null, c[11] = l, c[12] = 0, c[13] = 0, c[19] = e, c[2] = null, c[1] = 2, Z) : 6 === e ? (e = c[2], c[2] = e, c[1] = 3, Z) : 17 === e ? (e = c[2], c[2] = e, c[1] = 14, Z) : 3 === e ? (e = 
            c[2], QG(c, e)) : 12 === e ? (h = c[16], e = S(h), c[1] = e ? 15 : 16, Z) : 2 === e ? (h = c[12], p = c[13], e = h < p, c[1] = q(e) ? 4 : 5, Z) : 19 === e ? (e = c[8], e = Vh.h(e, new U(null, 2, 5, V, [Fu, pv], null)), e = yk(e), c[2] = e, c[1] = 21, Z) : 11 === e ? (e = c[10], l = c[11], h = c[12], p = c[13], s = c[2], c[10] = e, c[11] = l, c[12] = h + 1, c[13] = p, c[20] = s, c[2] = null, c[1] = 2, Z) : 9 === e ? (e = c[7], h = Xk.k(G([e], 0)), e = g(), c[21] = h, c[2] = e, c[1] = 10, 
            Z) : 5 === e ? (l = c[11], e = A(l), c[16] = e, c[1] = e ? 12 : 13, Z) : 14 === e ? (e = c[2], c[2] = e, c[1] = 6, Z) : 16 === e ? (h = c[16], e = C(h), h = Xk.k(G(["requesting fingerprint for:", e], 0)), s = pR(b, e), c[22] = h, c[17] = e, OG(c, 18, s)) : 10 === e ? (s = c[14], e = ph.v(f, Q, s, c[2]), h = $G(500), c[23] = e, OG(c, 11, h)) : 18 === e ? (e = c[2], h = Er.g(e), c[8] = e, c[1] = q(h) ? 19 : 20, Z) : 8 === e ? (e = c[7], e = Vh.h(e, new U(null, 2, 5, V, [Fu, pv], null)), 
            e = yk(e), c[2] = e, c[1] = 10, Z) : null;
          };
        }(c, e, f, g), c, e, f, g);
      }(), B = function() {
        var b = h.w ? h.w() : h.call(null);
        b[6] = c;
        return b;
      }();
      return NG(B);
    };
  }(h, e, f, g));
  "undefined" === typeof nR && (nR = function(b, c, d, e, f, g, h, D) {
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
  }, nR.wb = !0, nR.vb = "comportexviz.cortical-io/t14747", nR.Bb = function() {
    return function(b, c) {
      return nd(c, "comportexviz.cortical-io/t14747");
    };
  }(e, f, g), nR.prototype.Zc = function() {
    return function(b, c, d) {
      var e = this;
      return A(d) ? (b = P.h(function() {
        var b = e.ef;
        return H.g ? H.g(b) : H.call(null, b);
      }(), Yw(d)), 0 !== c ? rR(b, c) : b) : uk;
    };
  }(e, f, g), nR.prototype.Qd = function(b, c, d) {
    return function(e, f, g) {
      var h = this, D = this;
      return new n(null, 1, [zo, function() {
        var e = cH.g(1);
        BG(function(b, c, d, e, l) {
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
                            SG(d);
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
                    var N = p[7], t = Xk.k(G([N], 0));
                    p[2] = t;
                    p[1] = 8;
                    return Z;
                  }
                  if (6 === s) {
                    var I = p[8], N = p[7], D = p[9], L = g + 1, t = function() {
                      return function(b, c) {
                        return function(b) {
                          var d = yk(pv.g(b)), e = qk(f, d), g = R.h(Nf, Zi(e)), e = Yi(e);
                          return new n(null, 5, [Vn, jr.g(b), as, J(e) / J(d), ur, J(e) / J(f), zq, g / c, kv, g / J(d)], null);
                        };
                      }(N, I, D, I, N, D, L, s, b, c, d, e, l);
                    }(), K = [jr, pv], M = function() {
                      var b = h.ef;
                      return H.g ? H.g(b) : H.call(null, b);
                    }(), M = [".", P.h(M, ".")], K = af(K, M), M = Fu.g(N), K = Ke(K, M), t = Ch.h(t, K), t = Dh.h(L, t);
                    p[2] = t;
                    p[1] = 8;
                    return Z;
                  }
                  return 5 === s ? (N = p[7], t = p[2], K = Xk.k(G(["requested similar terms."], 0)), M = Er.g(t), p[7] = t, p[10] = K, p[1] = q(M) ? 6 : 7, Z) : 4 === s ? (t = p[2], QG(p, t)) : 3 === s ? (D = p[9], t = Zi(f), I = R.h(Nf, t), t = qR(h.jg, D, g), p[8] = I, OG(p, 5, t)) : 2 === s ? (t = Ye, p[2] = t, p[1] = 4, Z) : 1 === s ? (D = p[9], t = ih.h(function() {
                    return function() {
                      return function(b) {
                        var c = O.j(b, 0, null);
                        return O.j(b, 1, null) >= h.Ug ? c : null;
                      };
                    }(D, s, b, c, d, e, l);
                  }(), f), K = hf(t), p[9] = t, p[1] = K ? 2 : 3, Z) : null;
                };
              }(b, c, d, e, l), b, c, d, e, l);
            }(), s = function() {
              var c = p.w ? p.w() : p.call(null);
              c[6] = b;
              return c;
            }();
            return NG(s);
          };
        }(e, D, b, c, d));
        return e;
      }()], null);
    };
  }(e, f, g), nR.prototype.Lb = function() {
    return function() {
      return this.O;
    };
  }(e, f, g), nR.prototype.L = function() {
    return function() {
      return this.pi;
    };
  }(e, f, g), nR.prototype.M = function() {
    return function(b, c) {
      return new nR(this.hi, this.ef, this.O, this.gj, this.Ug, this.jg, this.$h, c);
    };
  }(e, f, g));
  return new nR(g, f, e, d, c, b, sR, null);
};
function uR(a, b, c, d) {
  PI.call(this);
  this.Jd = c || cw();
  this.He = a;
  this.ic = [];
  this.fj = b ? b : vR;
  this.jj = !!d;
  this.He.className = "goog-tabpane";
  a = [];
  for (b = kw(this.He);b;) {
    a.push(b), b = void 0 != b.nextElementSibling ? b.nextElementSibling : lw(b.nextSibling);
  }
  this.oc = this.Jd.qd("ul", {className:"goog-tabpane-tabs", tabIndex:"0"});
  this.Ac = this.Jd.qd("div", "goog-tabpane-cont");
  this.He.appendChild(this.Ac);
  b = this.He;
  switch(this.fj) {
    case vR:
      b.insertBefore(this.oc, this.Ac);
      b.insertBefore(wR(this), this.Ac);
      OI(b, "goog-tabpane-top");
      break;
    case 1:
      b.appendChild(this.oc);
      b.appendChild(wR(this));
      OI(b, "goog-tabpane-bottom");
      break;
    case 2:
      b.insertBefore(this.oc, this.Ac);
      OI(b, "goog-tabpane-left");
      break;
    case 3:
      b.insertBefore(this.oc, this.Ac);
      OI(b, "goog-tabpane-right");
      break;
    default:
      throw Error("Invalid tab location");;
  }
  this.oc.tabIndex = 0;
  oA(this.oc, this.jj ? "mousedown" : "click", this.Ii, !1, this);
  oA(this.oc, "keydown", this.Ji, !1, this);
  for (b = 0;c = a[b];b++) {
    c = new xR(c);
    if (c.vc && c.vc != this && c.vc instanceof uR) {
      d = c.vc;
      var e = c;
      na(e) && (e = d.ic[e]);
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
    ea(void 0) && void 0 != d ? (d = void 0, this.ic.splice(d, 0, c), this.oc.insertBefore(c.Ge, this.oc.childNodes[d])) : (this.ic.push(c), this.oc.appendChild(c.Ge));
    c.ne(this, d);
    this.Cc || (this.Cc = c, this.dispatchEvent(new yR("change", this, this.Cc)));
    this.Ac.appendChild(c.Ac);
    zR(c, c == this.Cc);
    c = void 0;
    for (d += 1;c = this.ic[d];d++) {
      c.fe = d;
    }
  }
}
Ga(uR, PI);
var vR = 0;
function wR(a) {
  var b = cw(void 0), c = null, d = b.Id;
  Rv && d.createStyleSheet ? (c = d.createStyleSheet(), Uw(c)) : (d = fw(b.Id, "head")[0], d || (c = fw(b.Id, "body")[0], d = b.qd("head"), c.parentNode.insertBefore(d, c)), c = b.qd("style"), Uw(c), b.appendChild(d, c));
  return a.Jd.qd("div", "goog-tabpane-clear");
}
function AR(a, b) {
  if (0 <= b && b < a.ic.length) {
    var c = a.ic[b];
    !c.isEnabled() || a.Cc && c == a.Cc || (zR(a.Cc, !1), zR(c, !0), a.Cc = c, a.dispatchEvent(new yR("change", a, a.Cc)));
  }
}
uR.prototype.Ii = function(a) {
  for (var b = a.target;b != this.oc;) {
    if ("LI" == b.tagName) {
      var c;
      for (c = 0;b = b.previousSibling;c++) {
      }
      AR(this, c);
      break;
    }
    b = b.parentNode;
  }
  a.preventDefault();
};
uR.prototype.Ji = function(a) {
  if (!(a.altKey || a.metaKey || a.ctrlKey)) {
    switch(a.keyCode) {
      case 37:
        a = this.Cc.fe - 1;
        AR(this, 0 > a ? this.ic.length - 1 : a);
        break;
      case 39:
        a = this.Cc.fe + 1;
        AR(this, a >= this.ic.length ? 0 : a);
        break;
      case 36:
        AR(this, 0);
        break;
      case 35:
        AR(this, this.ic.length - 1);
    }
  }
};
function xR(a, b, c) {
  var d, e;
  if (la(a) && !ea(b)) {
    d = a;
  } else {
    if (b) {
      d = b, e = a;
    } else {
      if (a) {
        if (b = kw(a)) {
          d = ow(b), b.parentNode.removeChild(b);
        }
        e = a;
      }
    }
  }
  this.Jd = c || cw();
  this.Ac = e || this.Jd.qd("div");
  this.Ge = this.Jd.qd("li", null, d);
  this.fe = this.vc = null;
  this.ei = !0;
}
xR.prototype.getParent = function() {
  return this.vc;
};
xR.prototype.isEnabled = function() {
  return this.ei;
};
function zR(a, b) {
  a.isEnabled() && (a.Ac.style.display = b ? "" : "none", a.Ge.className = b ? "goog-tabpane-tab-selected" : "goog-tabpane-tab");
}
xR.prototype.ne = function(a, b) {
  this.vc = a;
  this.fe = ea(b) ? b : null;
};
function yR(a, b, c) {
  bA.call(this, a, b);
  this.page = c;
}
Ga(yR, bA);
var BR = function() {
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
function CR(a) {
  return Math.floor.g ? Math.floor.g(a) : Math.floor.call(null, a);
}
function DR(a) {
  return Math.ceil.g ? Math.ceil.g(a) : Math.ceil.call(null, a);
}
function ER(a) {
  return Rb.h(Nf, a) / J(a);
}
var FR = function() {
  function a(a, b, c) {
    a = Fk.j(a, b, c);
    return(C(a) % c + c) % c === (b % c + c) % c ? Rg.h(a, new U(null, 1, 5, V, [b], null)) : a;
  }
  function b(a, b) {
    return Rg.h(Fk.h(a, b), new U(null, 1, 5, V, [b], null));
  }
  function c(a) {
    return Fk.g(a);
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
var GR = new U(null, 6, 5, V, [1, 5, 2, 2.5, 4, 3], null);
function HR(a) {
  return C(function() {
    return function c(d) {
      return new sg(null, function() {
        for (var e = d;;) {
          if (e = A(e)) {
            if (S(e)) {
              var f = x(e), g = J(f), h = wg(g);
              a: {
                for (var l = 0;;) {
                  if (l < g) {
                    var p = v.h(f, l), s = O.j(p, 0, null), p = O.j(p, 1, null);
                    ae.h(p, a) && h.add(s);
                    l += 1;
                  } else {
                    f = !0;
                    break a;
                  }
                }
                f = void 0;
              }
              return f ? zg(Mg(h), c(y(e))) : zg(Mg(h), null);
            }
            f = C(e);
            h = O.j(f, 0, null);
            f = O.j(f, 1, null);
            if (ae.h(f, a)) {
              return Ke(h, c(E(e)));
            }
            e = E(e);
          } else {
            return null;
          }
        }
      }, null, null);
    }(hh(Ci, GR));
  }());
}
function IR(a, b, c) {
  c = q(c) ? 1 : 0;
  return 1 >= J(GR) ? 1 - b + c : 1 - HR(a) / (J(GR) - 1) - b + c;
}
function JR(a, b, c, d) {
  return 1 - .5 * ((BR.h(b - d, 2) + BR.h(a - c, 2)) / BR.h(.1 * (b - a), 2));
}
function KR(a, b, c) {
  a = b - a;
  return c > a ? 1 - BR.h((c - a) / (.2 * a), 2) : 1;
}
function LR(a, b) {
  var c = a / b, d = b / a;
  return 2 - (c > d ? c : d);
}
function MR(a, b) {
  return a >= b ? 2 - a / b : 1;
}
function NR(a) {
  var b = O.j(a, 0, null), c = O.j(a, 1, null), d = O.j(a, 2, null);
  a = O.j(a, 3, null);
  var e = new U(null, 4, 5, V, [.2, .25, .5, .05], null);
  return b * (e.g ? e.g(0) : e.call(null, 0)) + c * (e.g ? e.g(1) : e.call(null, 1)) + d * (e.g ? e.g(2) : e.call(null, 2)) + a * (e.g ? e.g(3) : e.call(null, 3));
}
var OR = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = G(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    var e = O.j(a, 0, null), f = O.j(a, 1, null), g = Bf(b) ? R.h(kh, b) : b, h = P.j(g, hr, !1), l = P.j(g, Es, 500), p = P.j(g, am, .01);
    if ("number" === typeof e && "number" === typeof f && Zg.h(e, f)) {
      for (var s = mh.g ? mh.g(-2) : mh.call(null, -2), t = function() {
        var a = aj;
        return mh.g ? mh.g(a) : mh.call(null, a);
      }(), w = GR;!hf(w);) {
        for (var B = C(w), z = 1;;) {
          var D = IR(B, z, !0);
          if (NR(new U(null, 4, 5, V, [D, 1, 1, 1], null)) < (H.g ? H.g(s) : H.call(null, s))) {
            break;
          } else {
            for (var K = 2;;) {
              var L = MR(K / l, p);
              if (NR(new U(null, 4, 5, V, [D, 1, L, 1], null)) < (H.g ? H.g(s) : H.call(null, s))) {
                break;
              } else {
                for (var I = DR(Math.log((f - e) / ((K + 1) * z * K)) / Math.LN10);;) {
                  var M = B * z * BR.h(10, I), T = KR(e, f, (K - 1) * M);
                  if (NR(new U(null, 4, 5, V, [D, T, L, 1], null)) < (H.g ? H.g(s) : H.call(null, s))) {
                    break;
                  } else {
                    for (var T = e / M, ba = CR(f / M) - (K - 1);;) {
                      if (!(ba > T)) {
                        var N = ba * M, ua = N + (K - 1) * M, Y = IR(B, z, 0 < ua && 0 > N && 0 === (N % M + M) % M), fa = JR(e, f, N, ua), fa = NR(new U(null, 4, 5, V, [Y, fa, LR(K / l, p), 1], null));
                        if (!(fa < (H.g ? H.g(s) : H.call(null, s)))) {
                          Y = s;
                          nh.h ? nh.h(Y, fa) : nh.call(null, Y, fa);
                          Y = t;
                          N = new n(null, 3, [em, N, $r, ua, Wu, M], null);
                          nh.h ? nh.h(Y, N) : nh.call(null, Y, N);
                          ba += 1 / z;
                          continue;
                        }
                      }
                      break;
                    }
                    I += 1;
                  }
                }
                K += 1;
              }
            }
            z += 1;
          }
        }
        w = F(w);
      }
      var ia = H.g ? H.g(t) : H.call(null, t), w = new U(null, 2, 5, V, [q(h) ? e : function() {
        var a = em.g(ia);
        return a < e ? a : e;
      }(), q(h) ? f : function() {
        var a = $r.g(ia);
        return a > f ? a : f;
      }()], null);
      return new n(null, 4, [ks, w, em, C(w), $r, Oe(w), Et, Oh.h(function(a, b) {
        return function(a) {
          var c = O.j(b, 0, null), d = O.j(b, 1, null);
          return c <= a && a <= d;
        };
      }(ia, w, s, t, a, e, f, b, g, h, l, p), FR.j(em.g(ia), $r.g(ia), Wu.g(ia)))], null);
    }
    return new n(null, 4, [ks, 0, em, e, $r, f, Et, Ye], null);
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
function PR(a, b, c, d) {
  this.domain = a;
  this.Nb = b;
  this.o = c;
  this.l = d;
  this.B = 2229667595;
  this.K = 8192;
  2 < arguments.length ? (this.o = c, this.l = d) : this.l = this.o = null;
}
k = PR.prototype;
k.N = function(a, b) {
  return rc.j(this, b, null);
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
  return Ok(b, function() {
    return function(a) {
      return Ok(b, Uk, "", " ", "", c, a);
    };
  }(this), "#c2.scale._linear{", ", ", "}", c, Rg.h(new U(null, 2, 5, V, [new U(null, 2, 5, V, [iu, this.domain], null), new U(null, 2, 5, V, [rv, this.Nb], null)], null), this.l));
};
k.L = function() {
  return this.o;
};
k.ma = function() {
  return new PR(this.domain, this.Nb, this.o, this.l, this.A);
};
k.Z = function() {
  return 2 + J(this.l);
};
k.S = function() {
  var a = this.A;
  return null != a ? a : this.A = a = ig(this);
};
k.J = function(a, b) {
  return q(q(b) ? this.constructor === b.constructor && Pi(this, b) : b) ? !0 : !1;
};
k.Ra = function(a, b) {
  return Df(new sk(null, new n(null, 2, [iu, null, rv, null], null), null), b) ? bf.h(Me(Sh.h(aj, this), this.o), b) : new PR(this.domain, this.Nb, this.o, $g(bf.h(this.l, b)), null);
};
k.za = function(a, b, c) {
  return q(X.h ? X.h(iu, b) : X.call(null, iu, b)) ? new PR(c, this.Nb, this.o, this.l, null) : q(X.h ? X.h(rv, b) : X.call(null, rv, b)) ? new PR(this.domain, c, this.o, this.l, null) : new PR(this.domain, this.Nb, this.o, Q.j(this.l, b, c), null);
};
k.W = function() {
  return A(Rg.h(new U(null, 2, 5, V, [new U(null, 2, 5, V, [iu, this.domain], null), new U(null, 2, 5, V, [rv, this.Nb], null)], null), this.l));
};
k.M = function(a, b) {
  return new PR(this.domain, this.Nb, b, this.l, this.A);
};
k.Y = function(a, b) {
  return nf(b) ? vc(this, v.h(b, 0), v.h(b, 1)) : Rb.j(dc, this, b);
};
k.call = function(a, b) {
  a = this;
  var c = Xe(a.domain) - C(a.domain), d = Xe(a.Nb) - C(a.Nb);
  return C(a.Nb) + d * ((b - C(a.domain)) / c);
};
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Pb(b)));
};
k.g = function(a) {
  var b = Xe(this.domain) - C(this.domain), c = Xe(this.Nb) - C(this.Nb);
  return C(this.Nb) + c * ((a - C(this.domain)) / b);
};
var QR = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = G(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = pk.k(G([new n(null, 2, [iu, new U(null, 2, 5, V, [0, 1], null), rv, new U(null, 2, 5, V, [0, 1], null)], null), R.h(kh, a)], 0));
    return new PR(iu.g(a), rv.g(a), null, bf.k(a, iu, G([rv], 0)));
  }
  a.D = 0;
  a.q = function(a) {
    a = A(a);
    return b(a);
  };
  a.k = b;
  return a;
}();
function RR(a) {
  return lf(a) && ae.h(2, J(a)) ? a : mf(a) ? new U(null, 2, 5, V, [Vt.g(a), Nl.g(a)], null) : null;
}
function SR(a) {
  var b = RR(a);
  a = O.j(b, 0, null);
  b = O.j(b, 1, null);
  return "translate(" + u.g(a) + "," + u.g(b) + ")";
}
var TR = function() {
  function a(a, b) {
    var c = RR(b), g = O.j(c, 0, null), c = O.j(c, 1, null);
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
}(), UR = function() {
  function a(a, d, e) {
    var f = null;
    2 < arguments.length && (f = G(Array.prototype.slice.call(arguments, 2), 0));
    return b.call(this, a, d, f);
  }
  function b(a, b, e) {
    var f = Bf(e) ? R.h(kh, e) : e, g = P.j(f, Gr, 28), h = P.h(f, fs), l = P.j(f, nm, 9), p = P.j(f, Cq, 6), s = P.j(f, Tn, u), t = P.j(f, wo, Av), w = function() {
      switch(t instanceof W ? t.ja : null) {
        case "bottom":
          return new U(null, 6, 5, V, [Nl, Vt, io, zu, Xt, cv], null);
        case "top":
          return new U(null, 6, 5, V, [Nl, Vt, io, zu, Xt, cv], null);
        case "right":
          return new U(null, 6, 5, V, [Vt, Nl, Xt, cv, io, zu], null);
        case "left":
          return new U(null, 6, 5, V, [Vt, Nl, Xt, cv, io, zu], null);
        default:
          throw Error("No matching clause: " + u.g(t));;
      }
    }(), B = O.j(w, 0, null), z = O.j(w, 1, null), D = O.j(w, 2, null), K = O.j(w, 3, null), L = O.j(w, 4, null), I = O.j(w, 5, null), M = function() {
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
    return new U(null, 5, 5, V, [tr, new n(null, 1, [hs, "axis " + u.g(qg(t))], null), new U(null, 2, 5, V, [Bn, R.h(kh, Kh.h(new U(null, 2, 5, V, [L, I], null), rv.g(a)))], null), new U(null, 2, 5, V, [Km, Zy(Ch.j(Ci, b, Gh.g(a)), function(a, b, c, d, e, f, g, h, l, p, s, t, w, z, B) {
      return function(a) {
        var f = O.j(a, 0, null);
        a = O.j(a, 1, null);
        return new U(null, 4, 5, V, [om, new n(null, 1, [Cm, SR(new dj([b, 0, c, a.g ? a.g(f) : a.call(null, f)], !0, !1))], null), new U(null, 3, 5, V, [Dv, new dj([b, h * w], !0, !1), B.g ? B.g(f) : B.call(null, f)], null), new U(null, 2, 5, V, [Lr, new dj([d, 0, e, h * z], !0, !1)], null)], null);
      };
    }(w, B, z, D, K, L, I, M, e, f, g, h, l, p, s, t))], null), q(h) ? new U(null, 3, 5, V, [vn, new n(null, 1, [Cm, "" + u.g(SR(new dj([B, M * g, z, ER(rv.g(a))], !0, !1))) + " " + u.g(function() {
      switch(t instanceof W ? t.ja : null) {
        case "right":
          return TR.g(90);
        case "left":
          return TR.g(-90);
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
function VR(a) {
  return R.h(Nf, a) / J(a);
}
function WR(a, b) {
  var c = Yi(C(b));
  return Sh.h(aj, function() {
    return function(c) {
      return function f(g) {
        return new sg(null, function() {
          return function() {
            for (;;) {
              var c = A(g);
              if (c) {
                if (S(c)) {
                  var d = x(c), p = J(d), s = wg(p);
                  return function() {
                    for (var c = 0;;) {
                      if (c < p) {
                        var f = v.h(d, c), g = s, h = V, t = f, f = Ch.h(f, b), f = a.g ? a.g(f) : a.call(null, f);
                        g.add(new U(null, 2, 5, h, [t, f], null));
                        c += 1;
                      } else {
                        return!0;
                      }
                    }
                  }() ? zg(Mg(s), f(y(c))) : zg(Mg(s), null);
                }
                var t = C(c);
                return Ke(new U(null, 2, 5, V, [t, function() {
                  var c = Ch.h(t, b);
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
function XR(a, b, c) {
  a = Yh.v(a, new U(null, 1, 5, V, [ir], null), Ze, WR(VR, b));
  b = J(ir.g(a));
  b > c && ch(b) ? (c = Bf(a) ? R.h(kh, a) : a, a = P.h(c, ir), b = 2 * P.h(c, lv), c = Q.k(c, lv, b, G([ir, Th.h(gh.h(WR, VR), Uh.h(2, a))], 0))) : c = a;
  return c;
}
function YR(a) {
  var b = function() {
    var a = new n(null, 3, [lv, 1, ir, Ye, pu, 200], null);
    return mh.g ? mh.g(a) : mh.call(null, a);
  }(), c = cH.g(1);
  BG(function(b, c) {
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
                      SG(c);
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
              var e = b[7], d = ph.v(c, XR, e, 200), e = null == e ? null : bc(e);
              b[8] = d;
              b[9] = e;
              b[2] = null;
              b[1] = 2;
              return Z;
            }
            if (5 === d) {
              return e = b[7], b[9] = e, b[2] = null, b[1] = 2, Z;
            }
            if (4 === d) {
              var e = b[9], d = Ze.h(e, b[2]), e = J(d), f = H.g ? H.g(c) : H.call(null, c), f = lv.g(f);
              b[7] = d;
              b[1] = q(e < f) ? 5 : 6;
              return Z;
            }
            return 3 === d ? (d = b[2], QG(b, d)) : 2 === d ? OG(b, 4, a) : 1 === d ? (e = Ye, b[9] = e, b[2] = null, b[1] = 2, Z) : null;
          };
        }(b, c), b, c);
      }(), g = function() {
        var a = f.w ? f.w() : f.call(null);
        a[6] = b;
        return a;
      }();
      return NG(g);
    };
  }(c, b));
  return b;
}
function ZR(a, b) {
  var c = new U(null, 3, 5, V, [bs, xr, cu], null), d = new n(null, 4, [Av, 50, Ct, 30, Rm, 50, rn, 20], null), e = function() {
    var a = new jx(null, !0, function(a) {
      return function() {
        var d = Bf(b) ? R.h(kh, b) : b, e = P.h(d, lv), f = P.h(d, pu), g = P.h(d, ir), w = e * f, B = Xq.g(ff(g)), z = .1 * B, D = QR.k(G([iu, new U(null, 2, 5, V, [0, w], null), rv, new U(null, 2, 5, V, [0, 399], null)], 0)), K = Et.g(OR.k(iu.g(D), G([Es, 400], 0))), L = QR.k(G([iu, new U(null, 2, 5, V, [0, z], null), rv, new U(null, 2, 5, V, [179, 0], null)], 0)), I = QR.k(G([iu, new U(null, 2, 5, V, [0, z], null), rv, new U(null, 2, 5, V, [0, 179], null)], 0)), M = Et.g(OR.k(iu.g(L), G([Es, 450], 
        0)));
        return 0 < B ? new U(null, 3, 5, V, [kr, new U(null, 3, 5, V, [gr, new n(null, 1, [Co, "text/css"], null), R.Q(u, "g.timestep rect { stroke-width: 0px; }", ".plot-space line { stroke: black; }", ".plot-space text { font-size: 80%; }", function() {
          return function(a, b, c, d, e, f, g, h, l, p, s, t, w, z, B) {
            return function Na(I) {
              return new sg(null, function() {
                return function() {
                  for (;;) {
                    var a = A(I);
                    if (a) {
                      if (S(a)) {
                        var b = x(a), c = J(b), d = wg(c);
                        return function() {
                          for (var a = 0;;) {
                            if (a < c) {
                              var e = v.h(b, a);
                              Lg(d, "." + u.g(qg(e)) + " { fill: " + u.g(function() {
                                var a = e;
                                return $.g ? $.g(a) : $.call(null, a);
                              }()) + "}");
                              a += 1;
                            } else {
                              return!0;
                            }
                          }
                        }() ? zg(Mg(d), Na(y(a))) : zg(Mg(d), null);
                      }
                      var e = C(a);
                      return Ke("." + u.g(qg(e)) + " { fill: " + u.g(function() {
                        var a = e;
                        return $.g ? $.g(a) : $.call(null, a);
                      }()) + "}", Na(E(a)));
                    }
                    return null;
                  }
                };
              }(a, b, c, d, e, f, g, h, l, p, s, t, w, z, B), null, null);
            };
          }(b, d, e, f, g, w, B, z, D, D, K, L, I, M, a)(c);
        }())], null), new U(null, 3, 5, V, [As, new n(null, 1, [gr, new n(null, 4, [Jt, "block", Gv, "auto", jo, 400 + Av.g(a) + Ct.g(a), sv, 180 + Rm.g(a) + rn.g(a)], null)], null), new U(null, 5, 5, V, [Vr, new n(null, 1, [Cm, SR(new U(null, 2, 5, V, [Av.g(a), rn.g(a)], null))], null), UR.k(L, M, G([wo, Av, nm, 28, fs, "n. columns", Gr, 35], 0)), new U(null, 3, 5, V, [tr, new n(null, 1, [Cm, SR(new U(null, 2, 5, V, [0, 180], null))], null), UR.k(D, K, G([wo, Rm, nm, 18, fs, "timestep", Gr, 35], 
        0))], null), new U(null, 2, 5, V, [tr, Zy.k(hh(Ci, g), function(a, b, d, e, f, g, h, l, p, s, t, w, z, B, I) {
          return function(D) {
            var K = O.j(D, 0, null), L = O.j(D, 1, null), M = Ch.h(L, c), wb = Hk.h(Nf, M);
            return Sh.h(new U(null, 1, 5, V, [Aq], null), function() {
              return function(a, b, c, d, e, f, g, h, l, p, s, t, w, N, z, B, I, D, K, L) {
                return function Fc(M) {
                  return new sg(null, function(a, b, c, d, e, f, g, h, l, p, s, t, w, N, z, B, I, D) {
                    return function() {
                      for (;;) {
                        var a = A(M);
                        if (a) {
                          if (S(a)) {
                            var b = x(a), c = J(b), e = wg(c);
                            return function() {
                              for (var a = 0;;) {
                                if (a < c) {
                                  var f = v.h(b, a), g = O.j(f, 0, null), l = O.j(f, 1, null), p = O.j(f, 2, null);
                                  Lg(e, new U(null, 2, 5, V, [Vu, new n(null, 5, [hs, g, Vt, function() {
                                    var a = d * h;
                                    return N.g ? N.g(a) : N.call(null, a);
                                  }(), Nl, function() {
                                    var a = p;
                                    return I.g ? I.g(a) : I.call(null, a);
                                  }(), jo, z.g ? z.g(h) : z.call(null, h), sv, function() {
                                    var a = l;
                                    return D.g ? D.g(a) : D.call(null, a);
                                  }()], null)], null));
                                  a += 1;
                                } else {
                                  return!0;
                                }
                              }
                            }() ? zg(Mg(e), Fc(y(a))) : zg(Mg(e), null);
                          }
                          var f = C(a), g = O.j(f, 0, null), l = O.j(f, 1, null), p = O.j(f, 2, null);
                          return Ke(new U(null, 2, 5, V, [Vu, new n(null, 5, [hs, g, Vt, function() {
                            var a = d * h;
                            return N.g ? N.g(a) : N.call(null, a);
                          }(), Nl, function() {
                            var a = p;
                            return I.g ? I.g(a) : I.call(null, a);
                          }(), jo, z.g ? z.g(h) : z.call(null, h), sv, function() {
                            var a = l;
                            return D.g ? D.g(a) : D.call(null, a);
                          }()], null)], null), Fc(E(a)));
                        }
                        return null;
                      }
                    };
                  }(a, b, c, d, e, f, g, h, l, p, s, t, w, N, z, B, I, D, K, L), null, null);
                };
              }(M, wb, D, K, L, a, b, d, e, f, g, h, l, p, s, t, w, z, B, I)(Ch.v(Ci, c, M, wb));
            }());
          };
        }(b, d, e, f, g, w, B, z, D, D, K, L, I, M, a), G([qr, fh.h(go, Oe)], 0))], null)], null)], null)], null) : null;
      };
    }(d), $k.g("computed-observable"), aj, aj);
    H.g ? H.g(a) : H.call(null, a);
    return a;
  }(), f = bx(a);
  Sw(f, H.g ? H.g(e) : H.call(null, e));
  Yk(e, Eq, function(a, b) {
    return function() {
      return Sw(b, H.g ? H.g(a) : H.call(null, a));
    };
  }(e, f, d));
  return e;
}
;function $R() {
}
$R.ii = function() {
  $R.ki || ($R.ki = new $R);
};
$R.ii();
Rv || Tv && Xv("525");
Rv || Sv && Xv("1.9.3");
function aS(a) {
  return R.j(u, "comportex-", Lh("_", Ch.h(function(a) {
    return Vw(a, "?", "_QMARK_");
  }, Ch.h(function(a) {
    return "number" === typeof a ? "" + u.g(a) : qg(a);
  }, a))));
}
function bS(a, b, c) {
  return new U(null, 3, 5, V, [fs, new U(null, 2, 5, V, [ju, new n(null, 3, [gs, aS(b), Co, "checkbox", ts, q(Vh.h(a, b)) ? "checked" : null], null)], null), c], null);
}
function cS(a) {
  var b = new U(null, 2, 5, V, [pn, Yr], null), c = new U(null, 3, 5, V, [er, Oq, iv], null);
  return new U(null, 3, 5, V, [fs, "Synapses from ", new U(null, 3, 5, V, [tv, new n(null, 1, [gs, aS(b)], null), function() {
    return function e(c) {
      return new sg(null, function() {
        for (;;) {
          var g = A(c);
          if (g) {
            if (S(g)) {
              var h = x(g), l = J(h), p = wg(l);
              a: {
                for (var s = 0;;) {
                  if (s < l) {
                    var t = v.h(h, s), t = new U(null, 3, 5, V, [lr, new n(null, 2, [Vn, qg(t), Dm, ae.h(Vh.h(a, b), t) ? "selected" : null], null), qg(t)], null);
                    p.add(t);
                    s += 1;
                  } else {
                    h = !0;
                    break a;
                  }
                }
                h = void 0;
              }
              return h ? zg(Mg(p), e(y(g))) : zg(Mg(p), null);
            }
            p = C(g);
            return Ke(new U(null, 3, 5, V, [lr, new n(null, 2, [Vn, qg(p), Dm, ae.h(Vh.h(a, b), p) ? "selected" : null], null), qg(p)], null), e(E(g)));
          }
          return null;
        }
      }, null, null);
    }(c);
  }()], null)], null);
}
function dS(a, b) {
  var c = O.j(b, 0, null), d = O.j(b, 1, null);
  return new U(null, 3, 5, V, [fs, new U(null, 2, 5, V, [Ds, qg(c)], null), new U(null, 2, 5, V, [ju, new n(null, 2, [gs, aS(new U(null, 2, 5, V, [a, c], null)), Vn, "" + u.g(d)], null)], null)], null);
}
function eS() {
  var a = fS, b = gS, c = hS, d = NI, e = iS, f = function() {
    var d = new jx(null, !0, function() {
      var d = V, e = V, f = new U(null, 2, 5, V, [to, "Simulation"], null), g = new U(null, 3, 5, V, [fs, "Timestep:", new U(null, 2, 5, V, [ym, LB(H.g ? H.g(a) : H.call(null, a))], null)], null), h = V, B = new n(null, 1, [hs, "detail"], null), z;
      if (q(H.g ? H.g(b) : H.call(null, b))) {
        z = H.g ? H.g(a) : H.call(null, a);
        if (q(Zn.g(mr.g(z)))) {
          var D = mr.g(z), K = (new Date).getTime() - Zn.g(D);
          z = (LB(z) - go.g(D)) / K * 1E3;
        } else {
          z = null;
        }
        z = mH("%.1f steps/sec.", z);
      } else {
        z = null;
      }
      return new U(null, 3, 5, d, [xt, new U(null, 11, 5, e, [Vl, f, g, new U(null, 3, 5, h, [lm, B, z], null), new U(null, 1, 5, V, [Rt], null), new U(null, 3, 5, V, [Vm, new n(null, 1, [gr, new n(null, 1, [Jt, q(H.g ? H.g(b) : H.call(null, b)) ? "none" : null], null)], null), "Start"], null), new U(null, 3, 5, V, [ot, new n(null, 1, [gr, new n(null, 1, [Jt, q(H.g ? H.g(b) : H.call(null, b)) ? null : "none"], null)], null), "Stop"], null), new U(null, 2, 5, V, [no, "Step"], null), new U(null, 5, 
      5, V, [fs, "Step every:", new U(null, 2, 5, V, [Iq, "" + u.g(Kq.g(H.g ? H.g(c) : H.call(null, c))) + " ms"], null), new U(null, 2, 5, V, [Fv, new U(null, 3, 5, V, [ko, new n(null, 1, [hv, "#"], null), "slower"], null)], null), new U(null, 2, 5, V, [Fv, new U(null, 3, 5, V, [um, new n(null, 1, [hv, "#"], null), "faster"], null)], null)], null), new U(null, 2, 5, V, [qn, "Reset"], null), new U(null, 2, 5, V, [st, new n(null, 1, [hs, "detail"], null)], null)], null), new U(null, 6, 5, V, [$n, 
      new U(null, 2, 5, V, [to, "Animation"], null), new U(null, 3, 5, V, [Lq, new n(null, 1, [gr, new n(null, 1, [Jt, q(Qn.g(H.g ? H.g(c) : H.call(null, c))) ? "none" : null], null)], null), "Start"], null), new U(null, 3, 5, V, [vr, new n(null, 1, [gr, new n(null, 1, [Jt, q(Qn.g(H.g ? H.g(c) : H.call(null, c))) ? null : "none"], null)], null), "Stop"], null), new U(null, 2, 5, V, [Cn, "Draw now"], null), new U(null, 5, 5, V, [fs, "Draw every:", new U(null, 2, 5, V, [Qq, "" + u.g(Cr.g(H.g ? H.g(c) : 
      H.call(null, c))) + " steps"], null), new U(null, 2, 5, V, [Fv, new U(null, 3, 5, V, [Ln, new n(null, 1, [hv, "#"], null), "slower"], null)], null), new U(null, 2, 5, V, [Fv, new U(null, 3, 5, V, [Zr, new n(null, 1, [hv, "#"], null), "faster"], null)], null)], null)], null)], null);
    }, $k.g("computed-observable"), aj, aj);
    H.g ? H.g(d) : H.call(null, d);
    return d;
  }(), g = bx("#comportex-controls");
  Sw(g, H.g ? H.g(f) : H.call(null, f));
  Yk(f, Eq, function(a, b) {
    return function() {
      return Sw(b, H.g ? H.g(a) : H.call(null, a));
    };
  }(f, g));
  zA("#sim-start", yr, function() {
    return nh.h ? nh.h(b, !0) : nh.call(null, b, !0);
  });
  zA("#sim-stop", yr, function() {
    return nh.h ? nh.h(b, !1) : nh.call(null, b, !1);
  });
  zA("#sim-step", yr, function() {
    return d.w ? d.w() : d.call(null);
  });
  zA("#sim-faster", yr, function() {
    return ph.v(c, Yh, new U(null, 1, 5, V, [Kq], null), function(a) {
      a -= 100;
      return 0 < a ? a : 0;
    });
  });
  zA("#sim-slower", yr, function() {
    return ph.v(c, Yh, new U(null, 1, 5, V, [Kq], null), function(a) {
      return a + 100;
    });
  });
  zA("#sim-reset", yr, function() {
    var b = bx("#sim-reset-status");
    ph.h(a, MB);
    return dx.h(b, "reset complete.");
  });
  zA("#anim-start", yr, function() {
    return ph.v(c, Q, Qn, !0);
  });
  zA("#anim-stop", yr, function() {
    return ph.v(c, Q, Qn, !1);
  });
  zA("#anim-step", yr, function() {
    return e.w ? e.w() : e.call(null);
  });
  zA("#anim-faster", yr, function() {
    return ph.v(c, Yh, new U(null, 1, 5, V, [Cr], null), function(a) {
      a -= 1;
      return 1 < a ? a : 1;
    });
  });
  zA("#anim-slower", yr, function() {
    return ph.v(c, Yh, new U(null, 1, 5, V, [Cr], null), function(a) {
      return a + 1;
    });
  });
}
function jS() {
  var a = function() {
    var a = new jx(null, !0, function() {
      var a = V, b;
      b = H.g ? H.g(cI) : H.call(null, cI);
      b = new U(null, 6, 5, V, [xo, new U(null, 2, 5, V, [to, "Visualisation"], null), new U(null, 5, 5, V, [Ul, new U(null, 2, 5, V, [to, "Input"], null), bS(b, new U(null, 2, 5, V, [ju, bs], null), "Active bits"), new U(null, 1, 5, V, [Rt], null), bS(b, new U(null, 2, 5, V, [ju, cu], null), "Predicted bits")], null), new U(null, 13, 5, V, [Ul, new U(null, 2, 5, V, [to, "Columns"], null), bS(b, new U(null, 2, 5, V, [Kn, es], null), "Overlap scores"), new U(null, 1, 5, V, [Rt], null), bS(b, new U(null, 
      2, 5, V, [Kn, hm], null), "Num segments"), new U(null, 1, 5, V, [Rt], null), bS(b, new U(null, 2, 5, V, [Kn, bs], null), "Active columns"), new U(null, 1, 5, V, [Rt], null), bS(b, new U(null, 2, 5, V, [Kn, yo], null), "Predictive columns"), new U(null, 1, 5, V, [Rt], null), bS(b, new U(null, 2, 5, V, [Kn, Lm], null), "TP columns"), new U(null, 1, 5, V, [Rt], null), bS(b, new U(null, 2, 5, V, [Kn, Bm], null), "Alternative")], null), new U(null, 9, 5, V, [Ul, new U(null, 2, 5, V, [to, "Feed-forward synapses"], 
      null), bS(b, new U(null, 2, 5, V, [Zl, bs], null), "Active ff-synapses"), new U(null, 1, 5, V, [Rt], null), bS(b, new U(null, 2, 5, V, [Zl, Ml], null), "Inactive ff-synapses"), new U(null, 1, 5, V, [Rt], null), bS(b, new U(null, 2, 5, V, [Zl, Zm], null), "Disconnected ff-synapses"), new U(null, 1, 5, V, [Rt], null), bS(b, new U(null, 2, 5, V, [Zl, Su], null), "Permanences")], null), new U(null, 11, 5, V, [Ul, new U(null, 2, 5, V, [to, "Lateral dendrite segments"], null), cS(b), new U(null, 
      1, 5, V, [Rt], null), bS(b, new U(null, 2, 5, V, [pn, bs], null), "Active synapses"), new U(null, 1, 5, V, [Rt], null), bS(b, new U(null, 2, 5, V, [pn, Ml], null), "Inactive synapses"), new U(null, 1, 5, V, [Rt], null), bS(b, new U(null, 2, 5, V, [pn, Zm], null), "Disconnected synapses"), new U(null, 1, 5, V, [Rt], null), bS(b, new U(null, 2, 5, V, [pn, Su], null), "Permanences")], null)], null);
      return new U(null, 2, 5, a, [Sr, b], null);
    }, $k.g("computed-observable"), aj, aj);
    H.g ? H.g(a) : H.call(null, a);
    return a;
  }(), b = bx("#comportex-drawing");
  Sw(b, H.g ? H.g(a) : H.call(null, a));
  Yk(a, Eq, function(a, b) {
    return function() {
      return Sw(b, H.g ? H.g(a) : H.call(null, a));
    };
  }(a, b));
  for (var a = A(H.g ? H.g(cI) : H.call(null, cI)), b = null, c = 0, d = 0;;) {
    if (d < c) {
      for (var e = b.H(null, d), f = O.j(e, 0, null), g = O.j(e, 1, null), h = A(g), l = null, p = 0, s = 0;;) {
        if (s < p) {
          var t = l.H(null, s), w = O.j(t, 0, null), B = O.j(t, 1, null), z = aS(new U(null, 2, 5, V, [f, w], null)), D = bx("#" + u.g(z));
          q(D) && zA(D, su, function(a, b, c, d, e, f, g, h, l, p, s, t, w, z, B) {
            return function() {
              var a;
              a = ex.g(p);
              a = q(a) ? rg.g(a) : null;
              return ph.v(cI, Xh, new U(null, 2, 5, V, [B, t], null), a);
            };
          }(h, l, p, s, a, b, c, d, z, D, t, w, B, e, f, g));
          s += 1;
        } else {
          if (w = A(h)) {
            t = w;
            if (S(t)) {
              h = x(t), s = y(t), l = h, p = J(h), h = s;
            } else {
              var B = C(t), z = O.j(B, 0, null), D = O.j(B, 1, null), K = aS(new U(null, 2, 5, V, [f, z], null)), L = bx("#" + u.g(K));
              q(L) && zA(L, su, function(a, b, c, d, e, f, g, h, l, p, s, t, w, z, B, I, D) {
                return function() {
                  var a;
                  a = ex.g(p);
                  a = q(a) ? rg.g(a) : null;
                  return ph.v(cI, Xh, new U(null, 2, 5, V, [D, t], null), a);
                };
              }(h, l, p, s, a, b, c, d, K, L, B, z, D, t, w, e, f, g));
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
        if (S(e)) {
          a = x(e), d = y(e), b = a, c = J(a), a = d;
        } else {
          l = C(e);
          f = O.j(l, 0, null);
          g = O.j(l, 1, null);
          p = A(g);
          s = null;
          for (w = t = 0;;) {
            if (w < t) {
              B = s.H(null, w), z = O.j(B, 0, null), D = O.j(B, 1, null), K = aS(new U(null, 2, 5, V, [f, z], null)), L = bx("#" + u.g(K)), q(L) && zA(L, su, function(a, b, c, d, e, f, g, h, l, p, s, t, w, z, B) {
                return function() {
                  var a;
                  a = ex.g(p);
                  a = q(a) ? rg.g(a) : null;
                  return ph.v(cI, Xh, new U(null, 2, 5, V, [B, t], null), a);
                };
              }(p, s, t, w, a, b, c, d, K, L, B, z, D, l, f, g, e, h)), w += 1;
            } else {
              if (z = A(p)) {
                B = z;
                if (S(B)) {
                  p = x(B), w = y(B), s = p, t = J(p), p = w;
                } else {
                  var D = C(B), K = O.j(D, 0, null), L = O.j(D, 1, null), I = aS(new U(null, 2, 5, V, [f, K], null)), M = bx("#" + u.g(I));
                  q(M) && zA(M, su, function(a, b, c, d, e, f, g, h, l, p, s, t, w, z, B, I, D) {
                    return function() {
                      var a;
                      a = ex.g(p);
                      a = q(a) ? rg.g(a) : null;
                      return ph.v(cI, Xh, new U(null, 2, 5, V, [D, t], null), a);
                    };
                  }(p, s, t, w, a, b, c, d, I, M, D, K, L, B, z, l, f, g, e, h));
                  p = F(B);
                  s = null;
                  t = 0;
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
function kS() {
  var a = fS, b = GI, c = function() {
    var c = new jx(null, !0, function() {
      var c = fr.g(H.g ? H.g(b) : H.call(null, b));
      return new U(null, 2, 5, V, [yt, function() {
        var b = nD(H.g ? H.g(a) : H.call(null, a));
        return function(a, b) {
          return function K(c) {
            return new sg(null, function(a, b) {
              return function() {
                for (;;) {
                  var d = A(c);
                  if (d) {
                    if (S(d)) {
                      var e = x(d), f = J(e), g = wg(f);
                      a: {
                        for (var h = 0;;) {
                          if (h < f) {
                            var l = v.h(e, h), p = O.h(a, l), p = WA(p), l = new U(null, 3, 5, V, [kr, new n(null, 1, [gr, new n(null, 1, [Jt, Zg.h(l, b) ? "none" : null], null)], null), new U(null, 4, 5, V, [$t, new n(null, 1, [gs, "region-spec-form-" + u.g(l)], null), new U(null, 4, 5, V, [Zu, "Region " + u.g(l), new U(null, 1, 5, V, [Rt], null), new U(null, 2, 5, V, [Gq, "(click on a region to select it)"], null)], null), new U(null, 4, 5, V, [bm, new U(null, 2, 5, V, [to, "Parameters"], null), 
                            Ch.h(gh.h(dS, l), If.g(p)), new U(null, 3, 5, V, [qo, new U(null, 2, 5, V, [ju, new n(null, 2, [Co, "submit", Vn, "Set!"], null)], null), " (will be set immediately, but then use Reset above for any parameters that apply only in initialisation)"], null)], null)], null)], null);
                            g.add(l);
                            h += 1;
                          } else {
                            e = !0;
                            break a;
                          }
                        }
                        e = void 0;
                      }
                      return e ? zg(Mg(g), K(y(d))) : zg(Mg(g), null);
                    }
                    g = C(d);
                    e = O.h(a, g);
                    e = WA(e);
                    return Ke(new U(null, 3, 5, V, [kr, new n(null, 1, [gr, new n(null, 1, [Jt, Zg.h(g, b) ? "none" : null], null)], null), new U(null, 4, 5, V, [$t, new n(null, 1, [gs, "region-spec-form-" + u.g(g)], null), new U(null, 4, 5, V, [Zu, "Region " + u.g(g), new U(null, 1, 5, V, [Rt], null), new U(null, 2, 5, V, [Gq, "(click on a region to select it)"], null)], null), new U(null, 4, 5, V, [bm, new U(null, 2, 5, V, [to, "Parameters"], null), Ch.h(gh.h(dS, g), If.g(e)), new U(null, 3, 5, 
                    V, [qo, new U(null, 2, 5, V, [ju, new n(null, 2, [Co, "submit", Vn, "Set!"], null)], null), " (will be set immediately, but then use Reset above for any parameters that apply only in initialisation)"], null)], null)], null)], null), K(E(d)));
                  }
                  return null;
                }
              };
            }(a, b), null, null);
          };
        }(b, c)(Fk.g(J(b)));
      }()], null);
    }, $k.g("computed-observable"), aj, aj);
    H.g ? H.g(c) : H.call(null, c);
    return c;
  }(), d = bx("#comportex-parameters");
  Sw(d, H.g ? H.g(c) : H.call(null, c));
  Yk(c, Eq, function(a, b) {
    return function() {
      return Sw(b, H.g ? H.g(a) : H.call(null, a));
    };
  }(c, d));
  for (var c = A(Fk.g(J(nD(H.g ? H.g(a) : H.call(null, a))))), d = null, e = 0, f = 0;;) {
    if (f < e) {
      var g = d.H(null, f), h = bx("#region-spec-form-" + u.g(g));
      zA(h, ro, function(b, c, d, e, f, g) {
        return function(h) {
          var l = O.h(nD(H.g ? H.g(a) : H.call(null, a)), g), p = WA(l), M = Rb.j(function(a, b, c, d, e, f, g, h) {
            return function(a, b) {
              var c = aS(new U(null, 2, 5, V, [h, b], null)), c = bx("#" + u.g(c)), c = Pz(ex.g(c));
              return Q.j(a, b, c);
            };
          }(b, c, d, e, l, p, f, g), aj, Yi(p));
          ph.v(a, qD, nu.g(l), function(a, b, c, d, e, f, g) {
            return function(a) {
              return Xh(Xh(a, new U(null, 2, 5, V, [bv, sr], null), g), new U(null, 2, 5, V, [Pu, sr], null), g);
            };
          }(b, c, d, e, l, p, M, f, g));
          h.preventDefault();
          return!1;
        };
      }(c, d, e, f, h, g));
      f += 1;
    } else {
      var l = A(c);
      if (l) {
        h = l;
        if (S(h)) {
          c = x(h), f = y(h), d = c, e = J(c), c = f;
        } else {
          var g = C(h), p = bx("#region-spec-form-" + u.g(g));
          zA(p, ro, function(b, c, d, e, f, g, h, l) {
            return function(p) {
              var M = O.h(nD(H.g ? H.g(a) : H.call(null, a)), g), T = WA(M), ba = Rb.j(function(a, b, c, d, e, f, g, h) {
                return function(a, b) {
                  var c = aS(new U(null, 2, 5, V, [h, b], null)), c = bx("#" + u.g(c)), c = Pz(ex.g(c));
                  return Q.j(a, b, c);
                };
              }(b, c, d, e, M, T, f, g, h, l), aj, Yi(T));
              ph.v(a, qD, nu.g(M), function(a, b, c, d, e, f, g) {
                return function(a) {
                  return Xh(Xh(a, new U(null, 2, 5, V, [bv, sr], null), g), new U(null, 2, 5, V, [Pu, sr], null), g);
                };
              }(b, c, d, e, M, T, ba, f, g, h, l));
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
;yb = !1;
xb = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = G(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    return console.log.apply(console, Sb.g ? Sb.g(a) : Sb.call(null, a));
  }
  a.D = 0;
  a.q = function(a) {
    a = A(a);
    return b(a);
  };
  a.k = b;
  return a;
}();
function MI() {
  var a = lS, b = cH.w();
  kH.h(a, b);
  return b;
}
var fS = mh.g ? mh.g(null) : mh.call(null, null), GI, mS = new n(null, 3, [fr, 0, Sn, 0, cs, null], null);
GI = mh.g ? mh.g(mS) : mh.call(null, mS);
var nS = cH.w(), lS = function oS(b) {
  var c = function() {
    var b = aj;
    return mh.g ? mh.g(b) : mh.call(null, b);
  }(), d = function() {
    "undefined" === typeof wD && (wD = function(b, c, d, e) {
      this.Bf = b;
      this.ch = c;
      this.Ei = d;
      this.ti = e;
      this.K = 0;
      this.B = 393216;
    }, wD.wb = !0, wD.vb = "cljs.core.async/t32831", wD.Bb = function() {
      return function(b, c) {
        return nd(c, "cljs.core.async/t32831");
      };
    }(c), wD.prototype.zg = function() {
      return function(b, c, d) {
        ph.v(this.Bf, Q, c, d);
        return null;
      };
    }(c), wD.prototype.Ag = function() {
      return function(b, c) {
        ph.j(this.Bf, bf, c);
        return null;
      };
    }(c), wD.prototype.L = function() {
      return function() {
        return this.ti;
      };
    }(c), wD.prototype.M = function() {
      return function(b, c) {
        return new wD(this.Bf, this.ch, this.Ei, c);
      };
    }(c));
    return new wD(c, b, oS, null);
  }(), e = cH.g(1), f = mh.g ? mh.g(null) : mh.call(null, null), g = function(b, c, d, e) {
    return function() {
      return 0 === ph.h(e, Qf) ? fH.h(d, !0) : null;
    };
  }(c, d, e, f), h = cH.g(1);
  BG(function(c, d, e, f, g, h) {
    return function() {
      var z = function() {
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
                      SG(d);
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
              var t = c[7], w = C(t), z = O.j(w, 0, null), B = O.j(w, 1, null);
              c[8] = z;
              p = c;
              p[1] = q(B) ? 22 : 23;
              return Z;
            }
            if (27 === l) {
              var D = c[9], K = c[10], ma = c[11], ya = c[12], Ja = v.h(K, ma), sa = fH.j(Ja, ya, h);
              c[9] = Ja;
              p = c;
              p[1] = q(sa) ? 30 : 31;
              return Z;
            }
            if (1 === l) {
              var Na = p = c;
              Na[2] = null;
              Na[1] = 2;
              return Z;
            }
            if (24 === l) {
              var t = c[7], Cb = c[2], ab = F(t), wb = null, bb = 0, za = 0;
              c[13] = wb;
              c[14] = bb;
              c[15] = Cb;
              c[16] = ab;
              c[17] = za;
              var ld = p = c;
              ld[2] = null;
              ld[1] = 8;
              return Z;
            }
            if (39 === l) {
              var Jc = p = c;
              Jc[2] = null;
              Jc[1] = 41;
              return Z;
            }
            if (4 === l) {
              var ya = c[12], sc = c[2], qh = null == sc;
              c[12] = sc;
              p = c;
              p[1] = q(qh) ? 5 : 6;
              return Z;
            }
            if (15 === l) {
              var wb = c[13], bb = c[14], ab = c[16], za = c[17], wc = c[2], da = ab, hd = bb, xc = za + 1;
              c[13] = wb;
              c[14] = hd;
              c[18] = wc;
              c[16] = da;
              c[17] = xc;
              var Jd = p = c;
              Jd[2] = null;
              Jd[1] = 8;
              return Z;
            }
            if (21 === l) {
              var xd = c[2], ee = p = c;
              ee[2] = xd;
              ee[1] = 18;
              return Z;
            }
            if (31 === l) {
              var D = c[9], yc = ph.h(g, Qf), nb = e.Ag(null, D);
              c[19] = yc;
              var lc = p = c;
              lc[2] = nb;
              lc[1] = 32;
              return Z;
            }
            if (32 === l) {
              var K = c[10], mc = c[20], ma = c[11], nc = c[21], ve = nc, Kd = K, we = mc, Fc = ma + 1;
              c[22] = c[2];
              c[10] = Kd;
              c[20] = we;
              c[11] = Fc;
              c[21] = ve;
              var Pe = p = c;
              Pe[2] = null;
              Pe[1] = 25;
              return Z;
            }
            if (40 === l) {
              var Ld = c[23], Jb = ph.h(g, Qf), Vb = e.Ag(null, Ld);
              c[24] = Jb;
              var Rc = p = c;
              Rc[2] = Vb;
              Rc[1] = 41;
              return Z;
            }
            if (33 === l) {
              var id = c[25], Qe = S(id), p = c;
              p[1] = Qe ? 36 : 37;
              return Z;
            }
            if (13 === l) {
              var yd = c[26], Md = zD(yd), Nd = p = c;
              Nd[2] = Md;
              Nd[1] = 15;
              return Z;
            }
            if (22 === l) {
              var z = c[8], fe = zD(z), Sc = p = c;
              Sc[2] = fe;
              Sc[1] = 24;
              return Z;
            }
            if (36 === l) {
              var id = c[25], kb = x(id), zc = y(id), xe = J(kb), nc = zc, K = kb, mc = xe, ma = 0;
              c[10] = K;
              c[20] = mc;
              c[11] = ma;
              c[21] = nc;
              var ye = p = c;
              ye[2] = null;
              ye[1] = 25;
              return Z;
            }
            if (41 === l) {
              var id = c[25], rf = c[2], nc = F(id), K = null, ma = mc = 0;
              c[27] = rf;
              c[10] = K;
              c[20] = mc;
              c[11] = ma;
              c[21] = nc;
              var ze = p = c;
              ze[2] = null;
              ze[1] = 25;
              return Z;
            }
            if (43 === l) {
              var ha = p = c;
              ha[2] = null;
              ha[1] = 44;
              return Z;
            }
            if (29 === l) {
              var Ae = c[2], ge = p = c;
              ge[2] = Ae;
              ge[1] = 26;
              return Z;
            }
            if (44 === l) {
              c[28] = c[2];
              var Be = p = c;
              Be[2] = null;
              Be[1] = 2;
              return Z;
            }
            if (6 === l) {
              var Gc = c[29], Hc = H.g ? H.g(d) : H.call(null, d), gc = Yi(Hc), Kb = J(gc), he = nh.h ? nh.h(g, Kb) : nh.call(null, g, Kb), nc = A(gc), K = null, ma = mc = 0;
              c[29] = gc;
              c[10] = K;
              c[20] = mc;
              c[11] = ma;
              c[30] = he;
              c[21] = nc;
              var jd = p = c;
              jd[2] = null;
              jd[1] = 25;
              return Z;
            }
            if (28 === l) {
              var id = c[25], nc = c[21], Ac = A(nc);
              c[25] = Ac;
              p = c;
              p[1] = Ac ? 33 : 34;
              return Z;
            }
            if (25 === l) {
              var mc = c[20], ma = c[11], Lb = ma < mc, p = c;
              p[1] = q(Lb) ? 27 : 28;
              return Z;
            }
            if (34 === l) {
              var hc = p = c;
              hc[2] = null;
              hc[1] = 35;
              return Z;
            }
            if (17 === l) {
              var sf = p = c;
              sf[2] = null;
              sf[1] = 18;
              return Z;
            }
            if (3 === l) {
              var Ag = c[2], p = c;
              return QG(p, Ag);
            }
            if (12 === l) {
              var Ce = c[2], De = p = c;
              De[2] = Ce;
              De[1] = 9;
              return Z;
            }
            if (2 === l) {
              return p = c, OG(p, 4, b);
            }
            if (23 === l) {
              var ub = p = c;
              ub[2] = null;
              ub[1] = 24;
              return Z;
            }
            if (35 === l) {
              var Ha = c[2], Od = p = c;
              Od[2] = Ha;
              Od[1] = 29;
              return Z;
            }
            if (19 === l) {
              var t = c[7], Wb = x(t), oc = y(t), Pd = J(Wb), ab = oc, wb = Wb, bb = Pd, za = 0;
              c[13] = wb;
              c[14] = bb;
              c[16] = ab;
              c[17] = za;
              var Re = p = c;
              Re[2] = null;
              Re[1] = 8;
              return Z;
            }
            if (11 === l) {
              var t = c[7], ab = c[16], Ee = A(ab);
              c[7] = Ee;
              p = c;
              p[1] = Ee ? 16 : 17;
              return Z;
            }
            if (9 === l) {
              var Bg = c[2], tf = p = c;
              tf[2] = Bg;
              tf[1] = 7;
              return Z;
            }
            if (5 === l) {
              var kd = H.g ? H.g(d) : H.call(null, d), ab = A(kd), wb = null, za = bb = 0;
              c[13] = wb;
              c[14] = bb;
              c[16] = ab;
              c[17] = za;
              var Fe = p = c;
              Fe[2] = null;
              Fe[1] = 8;
              return Z;
            }
            if (14 === l) {
              var Tf = p = c;
              Tf[2] = null;
              Tf[1] = 15;
              return Z;
            }
            if (45 === l) {
              var Se = c[2], pc = p = c;
              pc[2] = Se;
              pc[1] = 44;
              return Z;
            }
            if (26 === l) {
              var Gc = c[29], uf = c[2], Qd = A(Gc);
              c[31] = uf;
              p = c;
              p[1] = Qd ? 42 : 43;
              return Z;
            }
            if (16 === l) {
              var t = c[7], Te = S(t), p = c;
              p[1] = Te ? 19 : 20;
              return Z;
            }
            if (38 === l) {
              var Cg = c[2], Ue = p = c;
              Ue[2] = Cg;
              Ue[1] = 35;
              return Z;
            }
            if (30 === l) {
              var ie = p = c;
              ie[2] = null;
              ie[1] = 32;
              return Z;
            }
            if (10 === l) {
              var wb = c[13], za = c[17], zd = v.h(wb, za), yd = O.j(zd, 0, null), vf = O.j(zd, 1, null);
              c[26] = yd;
              p = c;
              p[1] = q(vf) ? 13 : 14;
              return Z;
            }
            if (18 === l) {
              var wf = c[2], je = p = c;
              je[2] = wf;
              je[1] = 12;
              return Z;
            }
            if (42 === l) {
              return p = c, OG(p, 45, f);
            }
            if (37 === l) {
              var Ld = c[23], id = c[25], ya = c[12], Tc = C(id), Uf = fH.j(Tc, ya, h);
              c[23] = Tc;
              p = c;
              p[1] = q(Uf) ? 39 : 40;
              return Z;
            }
            if (8 === l) {
              var bb = c[14], za = c[17], Vf = za < bb, p = c;
              p[1] = q(Vf) ? 10 : 11;
              return Z;
            }
            return null;
          };
        }(c, d, e, f, g, h), c, d, e, f, g, h);
      }(), D = function() {
        var b = z.w ? z.w() : z.call(null);
        b[6] = c;
        return b;
      }();
      return NG(D);
    };
  }(h, c, d, e, f, g));
  return d;
}(nS), gS = mh.g ? mh.g(!1) : mh.call(null, !1), hS, pS = new n(null, 3, [Kq, 200, Qn, !0, Cr, 1], null);
hS = mh.g ? mh.g(pS) : mh.call(null, pS);
function NI() {
  return fH.h(nS, ph.h(fS, KB));
}
function qS() {
  ph.v(fS, Q, mr, new n(null, 2, [Zn, (new Date).getTime(), go, LB(H.g ? H.g(fS) : H.call(null, fS))], null));
  var a = cH.g(1);
  BG(function(a) {
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
                      SG(c);
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
              var b = H.g ? H.g(hS) : H.call(null, hS), b = Kq.g(b), b = $G(b), c = NI();
              a[8] = c;
              return OG(a, 7, b);
            }
            return 3 === b ? (b = a[2], QG(a, b)) : 2 === b ? (b = H.g ? H.g(gS) : H.call(null, gS), a[1] = q(b) ? 4 : 5, Z) : 1 === b ? (a[2] = null, a[1] = 2, Z) : null;
          };
        }(a), a);
      }(), d = function() {
        var d = c.w ? c.w() : c.call(null);
        d[6] = a;
        return d;
      }();
      return NG(d);
    };
  }(a));
  return a;
}
rd(gS, sm, function(a, b, c, d) {
  return q(d) ? qS() : null;
});
function rS(a) {
  var b = bx("#comportex-plots"), c = nD(a);
  a = function() {
    var a = new jx(null, !0, function(a) {
      return function() {
        return new U(null, 2, 5, V, [kr, function() {
          return function(a) {
            return function K(b) {
              return new sg(null, function() {
                return function() {
                  for (;;) {
                    var a = A(b);
                    if (a) {
                      if (S(a)) {
                        var c = x(a), d = J(c), e = wg(d);
                        a: {
                          for (var f = 0;;) {
                            if (f < d) {
                              var g = v.h(c, f), h = "comportex-plot-" + u.g(g), g = new U(null, 3, 5, V, [Ul, new U(null, 2, 5, V, [to, "Region " + u.g(g)], null), new U(null, 2, 5, V, [kr, new n(null, 1, [gs, h], null)], null)], null);
                              e.add(g);
                              f += 1;
                            } else {
                              c = !0;
                              break a;
                            }
                          }
                          c = void 0;
                        }
                        return c ? zg(Mg(e), K(y(a))) : zg(Mg(e), null);
                      }
                      e = C(a);
                      c = "comportex-plot-" + u.g(e);
                      return Ke(new U(null, 3, 5, V, [Ul, new U(null, 2, 5, V, [to, "Region " + u.g(e)], null), new U(null, 2, 5, V, [kr, new n(null, 1, [gs, c], null)], null)], null), K(E(a)));
                    }
                    return null;
                  }
                };
              }(a), null, null);
            };
          }(a)(Fk.g(J(a)));
        }()], null);
      };
    }(c), $k.g("computed-observable"), aj, aj);
    H.g ? H.g(a) : H.call(null, a);
    return a;
  }();
  b = bx(b);
  Sw(b, H.g ? H.g(a) : H.call(null, a));
  Yk(a, Eq, function(a, b) {
    return function() {
      return Sw(b, H.g ? H.g(a) : H.call(null, a));
    };
  }(a, b, c));
  b = A(Fk.g(J(c)));
  a = null;
  for (var d = 0, e = 0;;) {
    if (e < d) {
      var f = a.H(null, e), g = "comportex-plot-" + u.g(f), h = bx("#" + u.g(g)), l = hH(fh.j(rD, function(a, b, c, d, e, f, g) {
        return function(a) {
          return O.h(a, g);
        };
      }(b, a, d, e, h, g, f, c), nD), MI()), p = YR(l);
      Yk(p, ws, function(a, b, c, d, e) {
        return function(a, b, c, d) {
          return ZR(e, d);
        };
      }(b, a, d, e, h, l, p, g, f, c));
      e += 1;
    } else {
      if (h = A(b)) {
        g = h;
        if (S(g)) {
          b = x(g), e = y(g), a = b, d = J(b), b = e;
        } else {
          var f = C(g), l = "comportex-plot-" + u.g(f), p = bx("#" + u.g(l)), s = hH(fh.j(rD, function(a, b, c, d, e, f, g) {
            return function(a) {
              return O.h(a, g);
            };
          }(b, a, d, e, p, l, f, g, h, c), nD), MI()), t = YR(s);
          Yk(t, ws, function(a, b, c, d, e) {
            return function(a, b, c, d) {
              return ZR(e, d);
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
function iS() {
  function a() {
    return FI();
  }
  return fx.g ? fx.g(a) : fx.call(null, a);
}
rd(cI, Gt, function() {
  return iS();
});
rd(GI, Gt, function() {
  return iS();
});
var sS = cH.g(1);
BG(function(a) {
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
                    SG(c);
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
            return b = MI(), a[7] = b, a[2] = null, a[1] = 2, Z;
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
            return b = a[2], QG(a, b);
          }
          if (12 === b) {
            return a[2] = null, a[1] = 13, Z;
          }
          if (2 === b) {
            return b = a[7], OG(a, 4, b);
          }
          if (11 === b) {
            return b = iS(), a[2] = b, a[1] = 13, Z;
          }
          if (9 === b) {
            return b = a[10], a[2] = b, a[1] = 10, Z;
          }
          if (5 === b) {
            var b = a[8], b = LB(b), c = H.g ? H.g(hS) : H.call(null, hS), c = Cr.g(c), g = H.g ? H.g(hS) : H.call(null, hS), g = Qn.g(g);
            a[11] = c;
            a[10] = g;
            a[12] = b;
            a[1] = q(g) ? 8 : 9;
            return Z;
          }
          return 10 === b ? (b = a[2], a[1] = q(b) ? 11 : 12, Z) : 8 === b ? (c = a[11], b = a[12], a[2] = 0 === (b % c + c) % c, a[1] = 10, Z) : null;
        };
      }(a), a);
    }(), c = function() {
      var c = b.w ? b.w() : b.call(null);
      c[6] = a;
      return c;
    }();
    return NG(c);
  };
}(sS));
function tS(a) {
  var b = null == (H.g ? H.g(fS) : H.call(null, fS));
  fH.h(nS, nh.h ? nh.h(fS, a) : nh.call(null, fS, a));
  b ? (new uR(bx("#comportex-tabs")), rS(a), LI(a), eS(), jS(), a = kS()) : a = null;
  return a;
}
Fa("comportexviz.main.set_model", tS);
var uS = af([Yl, km, Fm, Sm, Ym, Jn, Nn, Wn, mo, xq, Bq, Fq, Dr, Fr, Kr, Nr, ds, xs, Bt, Qt, St, Ou, uv, vv], [.2, !1, 12, 5, .01, .2, 6, 9, new U(null, 2, 5, V, [40, 40], null), .3, .05, 18, 2, .15, .25, .05, .03, !1, .005, 8, 2, 1E5, .16, 3]);
function vS(a) {
  return Th.h(function(a) {
    return Ze.h(a, ".");
  }, Th.h(function(a) {
    return ax.h(a, /[^\w']+/);
  }, ax.h(La(a), /[^\w]*[\.\!\?]+[^\w]*/)));
}
function wS(a, b) {
  return function(c) {
    var d = O.j(c, 0, null), e = O.j(c, 1, null);
    c = O.j(c, 2, null);
    var f = P.h(a, d), g = J(a);
    return e === J(f) - 1 ? c === b - 1 ? new U(null, 3, 5, V, [((d + 1) % g + g) % g, 0, 0], null) : new U(null, 3, 5, V, [d, 0, c + 1], null) : new U(null, 3, 5, V, [d, e + 1, c], null);
  };
}
function xS(a, b, c) {
  b = vS(b);
  var d = Ak(R.h(Rg, b));
  a = aJ(function(a) {
    return function(b) {
      var c = O.j(b, 0, null), d = O.j(b, 1, null);
      O.j(b, 2, null);
      return Vh.h(a, new U(null, 2, 5, V, [c, d], null));
    };
  }(b, d), tR(a, 2, d));
  return fD(new U(null, 3, 5, V, [0, 0, 0], null), wS(b, c), a);
}
function yS(a, b, c) {
  a = xS(a, b, c);
  b = vS(b);
  return Q.j(a, Du, QJ(b));
}
Fa("comportexviz.demos.cortical_io_demo.input_gen", yS);
function zS(a, b, c, d) {
  return lD(dD, yS(a, b, c), d, uS);
}
Fa("comportexviz.demos.cortical_io_demo.n_region_model", zS);
function AS() {
  var a = ex.g(bx("#comportex-api-key")), b = Pz(ex.g(bx("#comportex-input-repeats"))), c = ex.g(bx("#comportex-input-text")), a = zS(a, c, b, 1);
  return tS.g ? tS.g(a) : tS.call(null, a);
}
Fa("comportexviz.demos.cortical_io_demo.restart_from_ui", AS);
Fa("comportexviz.demos.cortical_io_demo.handle_user_input_form", function() {
  var a = bx("#comportex-input-text-form");
  return zA(a, ro, function() {
    return function(a) {
      AS();
      a.preventDefault();
      return!1;
    };
  }(a));
});
Fa("comportexviz.demos.mixed_gaps_1d.n_region_model", function(a) {
  return CJ.g(a);
});
function BS(a, b) {
  return function(c) {
    var d = O.j(c, 0, null), e = O.j(c, 1, null);
    c = O.j(c, 2, null);
    var f = P.h(a, d), g = J(a);
    return e === J(f) ? c === b - 1 ? new U(null, 3, 5, V, [((d + 1) % g + g) % g, 0, 0], null) : new U(null, 3, 5, V, [d, 0, c + 1], null) : new U(null, 3, 5, V, [d, e + 1, c], null);
  };
}
function CS(a) {
  return Th.h(function(a) {
    return ri(Rg.k(new U(null, 1, 5, V, ["\x3e"], null), a, G([new U(null, 1, 5, V, ["."], null)], 0)));
  }, Th.h(function(a) {
    return ax.h(a, /[^\w']+/);
  }, ax.h(La(a), /[^\w]*\.+[^\w]*/)));
}
function DS(a, b) {
  var c = CS(a), d = Ak(R.h(Rg, c)), e = 35 * J(d), d = aJ(function(a) {
    return function(b) {
      var c = O.j(b, 0, null), d = O.j(b, 1, null);
      O.j(b, 2, null);
      return Vh.h(a, new U(null, 2, 5, V, [c, d], null));
    };
  }(c, d, e), hJ(e, d));
  return fD(new U(null, 3, 5, V, [0, -1, 0], null), BS(c, b), d);
}
var ES = af([Yl, km, Fm, Sm, Ym, Jn, Nn, Wn, mo, xq, Bq, Fq, Dr, Fr, Nr, ds, xs, Bt, Qt, Ou, uv, vv], [.2, !1, 12, 5, .01, .2, 7, 9, new U(null, 1, 5, V, [1E3], null), .3, .05, 18, 2, 1, .05, .03, !1, .005, 8, 1E5, .16, 3]);
Fa("org.nfrac.comportex.demos.simple_sentences.n_region_model", function() {
  function a(a, b, c, g) {
    a = DS(a, b);
    return lD(dD, a, c, g);
  }
  function b(a) {
    return c.v("Jane.\nChifung.\n\nJane has eyes.\nJane has a head.\nJane has a mouth.\nJane has a brain.\nJane has a book.\nJane has no friend.\n\nChifung has eyes.\nChifung has a head.\nChifung has a mouth.\nChifung has a brain.\nChifung has no book.\nChifung has a friend.\n\nJane is something.\nJane is alive.\nJane is a person.\nJane can talk.\nJane can walk.\nJane can eat.\n\nChifung is something.\nChifung is alive.\nChifung is a person.\nChifung can talk.\nChifung can walk.\nChifung can eat.\n\nfox has eyes.\nfox has a head.\nfox has a mouth.\nfox has a brain.\nfox has a tail.\nfox is something.\nfox is alive.\nfox is no person.\nfox can no talk.\nfox can walk.\nfox can eat.\n\ndoes Jane have eyes ? yes.\ndoes Jane have a head ? yes.\ndoes Jane have a mouth ? yes.\ndoes Jane have a brain ? yes.\ndoes Jane have a book ? yes.\ndoes Jane have a friend ? no.\ndoes Jane have a tail ? no.\n\ndoes Chifung have eyes ? yes.\ndoes Chifung have a head ? yes.\ndoes Chifung have a mouth ? yes.\ndoes Chifung have a brain ? yes.\ndoes Chifung have a book ? no.\ndoes Chifung have a friend ? yes.\ndoes Chifung have a tail ? no.\n\ndoes fox have eyes ? yes.\ndoes fox have a head ? yes.\ndoes fox have a mouth ? yes.\ndoes fox have a brain ? yes.\ndoes fox have a book ? no.\ndoes fox have a friend ? no.\ndoes fox have a tail ? yes.\n\nJane has no tail.\nChifung has no tail.\n", 
    3, a, ES);
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
function FS(a, b) {
  var c = DS(a, b), d = CS(a);
  return Q.j(c, Du, QJ(d));
}
Fa("comportexviz.demos.simple_sentences.input_gen", FS);
function GS(a, b, c) {
  return lD(dD, FS(a, b), c, ES);
}
Fa("comportexviz.demos.simple_sentences.n_region_model", GS);
function HS() {
  var a = Pz(ex.g(bx("#comportex-input-repeats"))), b = ex.g(bx("#comportex-input-text")), a = GS(b, a, 1);
  return tS.g ? tS.g(a) : tS.call(null, a);
}
Fa("comportexviz.demos.simple_sentences.restart_from_ui", HS);
Fa("comportexviz.demos.simple_sentences.handle_user_input_form", function() {
  var a = bx("#comportex-input-text-form");
  return zA(a, ro, function() {
    return function(a) {
      HS();
      a.preventDefault();
      return!1;
    };
  }(a));
});
var IS = new U(null, 2, 5, V, [0, 7], null), JS = new U(null, 2, 5, V, [Uq, 0], null);
function KS(a) {
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
  a = XB(new U(null, 2, 5, V, [Uq, fm], null));
  return new U(null, 2, 5, V, [a, b], null);
}
var LS = dJ.k(2, hJ(60, new U(null, 2, 5, V, [fm, Uq], null)), G([fJ(240, 30, IS)], 0)), MS = af([Yl, Fm, Sm, Ym, Jn, Nn, Wn, mo, Bq, Fq, Dr, Fr, Nr, ds, xs, Bt, Qt, Ou, uv, vv], [.2, 12, 5, .01, .2, 7, 9, new U(null, 1, 5, V, [500], null), .05, 18, 2, .2, .05, .04, !1, .01, 4, 1E5, .16, 3]);
function NS() {
  return fD(JS, KS, LS);
}
Fa("org.nfrac.comportex.demos.directional_steps_1d.input_gen", NS);
var OS = function() {
  function a(a, b) {
    return lD(dD, NS(), a, b);
  }
  function b(a) {
    return c.h(a, MS);
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
Fa("org.nfrac.comportex.demos.directional_steps_1d.n_region_model", OS);
Fa("comportexviz.demos.directional_steps_1d.n_region_model", function(a) {
  return OS.g(a);
});

})();

//# sourceMappingURL=comportexviz.js.map