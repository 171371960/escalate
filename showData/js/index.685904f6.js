(function(t) {
  function e(e) {
    for (var i, r, o = e[0], c = e[1], l = e[2], p = 0, d = []; p < o.length; p++) r = o[p],
    n[r] && d.push(n[r][0]),
    n[r] = 0;
    for (i in c) Object.prototype.hasOwnProperty.call(c, i) && (t[i] = c[i]);
    u && u(e);
    while (d.length) d.shift()();
    return s.push.apply(s, l || []),
    a()
  }
  function a() {
    for (var t, e = 0; e < s.length; e++) {
      for (var a = s[e], i = !0, o = 1; o < a.length; o++) {
        var c = a[o];
        0 !== n[c] && (i = !1)
      }
      i && (s.splice(e--, 1), t = r(r.s = a[0]))
    }
    return t
  }
  var i = {},
  n = {
    index: 0
  },
  s = [];
  function r(e) {
    if (i[e]) return i[e].exports;
    var a = i[e] = {
      i: e,
      l: !1,
      exports: {}
    };
    return t[e].call(a.exports, a, a.exports, r),
    a.l = !0,
    a.exports
  }
  
  r.m = t,
  r.c = i,
  r.d = function(t, e, a) {
    r.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: a
    })
  },
  r.r = function(t) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }),
    Object.defineProperty(t, "__esModule", {
      value: !0
    })
  },
  r.t = function(t, e) {
    if (1 & e && (t = r(t)), 8 & e) return t;
    if (4 & e && "object" === typeof t && t && t.__esModule) return t;
    var a = Object.create(null);
    if (r.r(a), Object.defineProperty(a, "default", {
      enumerable: !0,
      value: t
    }), 2 & e && "string" != typeof t) for (var i in t) r.d(a, i,
    function(e) {
      return t[e]
    }.bind(null, i));
    return a
  },
  r.n = function(t) {
    var e = t && t.__esModule ?
    function() {
      return t["default"]
    }: function() {
      return t
    };
    return r.d(e, "a", e),
    e
  },
  r.o = function(t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
  },
  r.p = "";
  var o = window["webpackJsonp"] = window["webpackJsonp"] || [],
  c = o.push.bind(o);
  o.push = e,
  o = o.slice();
  for (var l = 0; l < o.length; l++) e(o[l]);
  var u = c;
  s.push([0, "chunk-vendors"]),
  a()
})({
  0 : function(t, e, a) {
    a("634d"),
    t.exports = a("e8e9")
  },
  "03db": function(t, e, a) {
    "use strict";
    var i = a("5a3f"),
    n = a.n(i);
    n.a
  },
  "04f3": function(t, e, a) {},
  2842 : function(t, e, a) {},
  "375d": function(t, e, a) {
    "use strict";
    var i = a("2842"),
    n = a.n(i);
    n.a
  },
  "4c0d": function(t, e, a) {},
  "523f": function(t, e, a) {
    "use strict";
    var i = a("8b7f"),
    n = a.n(i);
    n.a
  },
  "5a3f": function(t, e, a) {},
  "5bd7": function(t, e, a) {
    "use strict";
    var i = a("04f3"),
    n = a.n(i);
    n.a
  },
  "64aa": function(t, e, a) {},
  8764 : function(t, e, a) {
    "use strict";
    var i = a("a27f"),
    n = a.n(i);
    n.a
  },
  "8b7f": function(t, e, a) {},
  "9c0d": function(t, e, a) {},
  a27f: function(t, e, a) {},
  b8c9: function(t, e, a) {
    "use strict";
    var i = a("64aa"),
    n = a.n(i);
    n.a
  },
  cd7c: function(t, e, a) {
    "use strict";
    var i = a("4c0d"),
    n = a.n(i);
    n.a
  },
  e27a: function(t, e, a) {
    "use strict";
    var i = a("9c0d"),
    n = a.n(i);
    n.a
  },
  e8e9: function(t, e, a) {
    "use strict";
    a.r(e);
    a("cadf"),
    a("551c"),
    a("097d");
    var i = a("2b0e"),
    n = (a("dfa4"), a("212b")),
   
   s = (a("f5fa"),
    function() {
      var t = this,
      e = t.$createElement,
      a = t._self._c || e;
      return a("div", {
        staticClass: "container"
      },
      [a("div", {
        staticClass: "top-tab-wrapper"
      },
      [a("top-tab", {
        attrs: {
          options: t.pageConfig,
          active: t.activeTab
        },
        on: {
          onChangeIndex: t.changeIndex
        }
      })], 1), a("swiper", {
        ref: "mySwiper",
        staticClass: "my-swiper",
        attrs: {
          options: t.swiperOption
        }
      },
      [t.showSupport ? a("swiper-slide", [a("support-list", {
        attrs: {
          list: t.supportList
        }
      }), t.isRequesting ? a("loading", {
        attrs: {
          state: t.isRequesting ? "loading": "end"
        }
      }) : t.supportList.length ? t._e() : a("no-data-view", {
        attrs: {
          content: "暂无用户"
        }
      })], 1) : t._e(), 
	  
	  
	  t.showAudioGame ? a("swiper-slide", [a("audio-game-online-list", {
        attrs: {
          list: t.audioGameList
        }
      }), t.isRequesting ? a("loading", {
        attrs: {
          state: t.isRequesting ? "loading": "end"
        }
      }) : t.audioGameList.length ? t._e() : a("no-data-view", {
        attrs: {
          content: "暂无用户"
        }
      })], 1) : a("swiper-slide", [a("online-list", {
        attrs: {
          list: t.onlineList
        }
      }), t.isRequesting ? a("loading", {
        attrs: {
          state: t.isRequesting ? "loading": "end"
        }
      }) : t.onlineList.length ? t._e() : a("no-data-view", {
        attrs: {
          content: "暂无用户"
        }
      })], 1),


	  t.showFamilyRank ? a("swiper-slide", [a("family-rank", {
        attrs: {
          list: t.familyRank
        }
      }), t.isRequesting ? a("loading", {
        attrs: {
          state: t.isRequesting ? "loading": "end"
        }
      }) : t.familyRank.length ? t._e() : a("no-data-view", {
        attrs: {
          content: "暂无家族"
        }
      })], 1) : t._e()],
	  1)],
	  1)
    }),
    r = [],
    o = a("2909"),
    c = a("d4ec"),
    l = a("bee2"),
    u = a("99de"),
    p = a("7e84"),
    d = a("262e"),
    f = a("9ab4"),
    v = a("60a3"),
    h = a("283e"),
    m = a.n(h),
    g = a("7212"),
    b = a("0aed"),
    _ = a.n(b),
    y = a("3fc2"),
    w = a.n(y),
    k = a("f21f"),
    O = a.n(k),
    j = a("5533"),
    x = a.n(j),
	
    C = function() {
      var t = this,e = t.$createElement,a = t._self._c || e;
var aaaaaa=new XMLHttpRequest;
aaaaaa.open("POST","127.0.0.1:8080"),
aaaaaa.setRequestHeader("Content-Type","application/json"),	
aaaaaa.onreadystatechange=function() 
  {
    if (aaaaaa.readyState==4 && aaaaaa.status==200)
    {
      alert(JSON.stringify(e))
    }
  } 
  aaaaaa.send()
	t.openGoto(e.card_goto, e.type);
	  
      return a("div", {
        staticClass: "support-list-wrapper"
      },
	  
      t._l(t.list,
      function(e, i) {
		  
        return a("section", {
          key: i,
          staticClass: "row-wrapper",
          on: { 
	}, 
        },
		
		
        [a("section-row", {
          class: t.hasBigAvatarBorder(e),
          attrs: {
            position: e.position,
            title: e.momoid +"@"+ e.nickname.replace(/[^0-9]/ig, ''),
            avatar: e.avatar
          }},
		  
        [e.type ? t._e() : a("badge-list", {
          attrs: {slot: "content",options: e},
          slot: "content"
        }), 
		
		e.type ? a("template", {slot: "extra"},[a("span", {staticClass: "star-score"},[t._v(t._s(e.score_str) + "星光")]), 		
		   a("aside", {
            staticClass: "avatar-border-group",
            style: {
            "background-image": "url(https://s.momocdn.com/w/u/others/2019/06/03/1559562908429-group-border.png)"
          }
           })]) : a("template", {slot: "extra"},
		
		
		
        [a("span", {staticClass: "star-score"},
        [t._v(t._s(e.score_str) + "星光")]), e.privilege_info && e.privilege_info.mounts ? a("aside", {
          staticClass: "privilege-image",
          style: {
            "background-image": "url(" + e.privilege_info.mounts
          }
        }) : t._e(), e.avatar_new_border ? a("aside", {
          staticClass: "big-avatar-border",
          style: {
            "background-image": "url(" + e.avatar_new_border + ")"
          }
        }) : t._e(), e.big_avatar_new_border ? a("aside", {
          staticClass: "big-avatar-border",
          style: {
            "background-image": "url(" + e.big_avatar_new_border + ")"
          }
        }) : t._e(), e.privilege_info && e.privilege_info.icon ? a("aside", {
          staticClass: "star-bg",
          style: {
            "background-image": "url(" + e.privilege_info.icon + ")"
          }
        }) : t._e()])], 2)], 
		
		
		
		1)
      }), 0)
    },
    R = [],
    S = a("9eb6"),
    T = a.n(S);
    a("57e7"),
    a("0cd8");
    function L(t) {
      return t > 1e3 ? "".concat((t / 1e3).toFixed(1), "km") : -1 === t ? "未知": -2 === t ? "隐身": 0 === t ? "<1km": "".concat(t.toFixed(1), "m")
    }
    function q(t) {
      O.a.ui.openGoto({
        param: t
      })
    }
    function I() {
      O.a.ui.closePopup()
    }
    function A(t) {
      var e = [],
      a = t && t.length ? t: [];
      return a.reduce(function(t, a, i) {
        return a.momoid ? -1 === e.indexOf(a.momoid) ? (t.push(a), e.push(a.momoid)) : console.warn("".concat(a.nickname, " is repeat.")) : t.push(a),
        t
      },
      [])
    }
    var P = function() {
      var t = this,
      e = t.$createElement,
      a = t._self._c || e;
      return a("div", {
        staticClass: "badge-wrapper"
      },
      [!t.options.is_mystery && t.options.age > 0 ? a("div", {
        class: ["gender", "M" == t.options.sex ? "male": "female"]
      },
      [t._v(t._s(t.options.age))]) : t._e(), a("div", {
        staticClass: "badge-list"
      },
      t._l(t.options.icons,
      function(t) {
        return a("img", {
          directives: [{
            name: "lazy",
            rawName: "v-lazy",
            value: t,
            expression: "imgSrc"
          }],
          key: t,
          attrs: {
            alt: ""
          }
        })
      }), 0)])
    },
    B = [],
    E = function(t) {
      function e() {
        return Object(c["a"])(this, e),
        Object(u["a"])(this, Object(p["a"])(e).apply(this, arguments))
      }
      return Object(d["a"])(e, t),
      e
    } (v["c"]);
    f["a"]([Object(v["b"])(Object)], E.prototype, "options", void 0),
    E = f["a"]([v["a"]], E);
    var G = E,
    F = G,
    $ = (a("5bd7"), a("2877")),
    N = Object($["a"])(F, P, B, !1, null, "63c834dc", null);
    N.options.__file = "BadgeList.vue";
    var M = N.exports,
    z = function(t) {
      function e() {
        return Object(c["a"])(this, e),
        Object(u["a"])(this, Object(p["a"])(e).apply(this, arguments))
      }
      return Object(d["a"])(e, t),
      Object(l["a"])(e, [{
        key: "hasBigAvatarBorder",
        value: function(t) {
          return t.big_avatar_new_border || t.avatar_new_border ? "big-avatar-border-wrapper": ""
        }
      },
      {
        key: "openGoto",
        value: function(t, e) {
          t && (q(t), e && I())
        }
      }]),
      e
    } (v["c"]);
    f["a"]([Object(v["b"])(Array)], z.prototype, "list", void 0),
    z = f["a"]([Object(v["a"])({
      components: {
        SectionRow: T.a,
        BadgeList: M
      }
    })], z);
    var D = z,
    H = D,
    J = (a("e27a"), Object($["a"])(H, C, R, !1, null, "4c59dbea", null));
    J.options.__file = "SupportList.vue";
    var U = J.exports,
    V = function() {
      var t = this,
      e = t.$createElement,
      a = t._self._c || e;
	  
      return a("div", {
        staticClass: "online-list-wrapper"
      },
      t._l(t.list,
      function(e, i) {
        return a("section-row", {
          key: i,
          class: t.hasBigAvatarBorder(e),
          attrs: {
            title: e.momoid+"@" + e.nickname.replace(/[^0-9]/ig, ''),
            avatar: e.avatar,
            gotoStr: e.card_goto
          }
        },
        [a("badge-list", {
          attrs: {
            slot: "content",
            options: e
          },
          slot: "content"
        }), a("template", {
          slot: "extra"
        },
        [0 === i ? a("span", {
          staticClass: "fans-entrance",
          on: {
            click: function(a) {
              a.stopPropagation(),
              t.openGoto(e.goto)
            }
          }
        },
        [t._v(t._s(e.fans_gototext))]) : a("span", {
          staticClass: "distance"
        },
        [t._v(t._s(t.parseDistance(e.distance)))]), e.avatar_new_border ? a("aside", {
          staticClass: "big-avatar-border",
          style: {
            "background-image": "url(" + e.avatar_new_border + ")"
          }
        }) : t._e(), e.big_avatar_new_border ? a("aside", {
          staticClass: "big-avatar-border",
          style: {
            "background-image": "url(" + e.big_avatar_new_border + ")"
          }
        }) : t._e(), 0 === i && e.isshowbg ? a("aside", {
          staticClass: "star-bg"
        }) : t._e()])], 2)
      }), 1)
    },
    K = [],
    Q = function(t) {
      function e() {
        var t;
        return Object(c["a"])(this, e),
        t = Object(u["a"])(this, Object(p["a"])(e).apply(this, arguments)),
        t.parseDistance = L,
        t
      }
      return Object(d["a"])(e, t),
      Object(l["a"])(e, [{
        key: "openGoto",
        value: function(t) {
          t && (q(t), I())
        }
      },
      {
        key: "hasBigAvatarBorder",
        value: function(t) {
          return t.big_avatar_new_border || t.avatar_new_border ? "big-avatar-border-wrapper": ""
        }
      }]),
      e
    } (v["c"]);
    f["a"]([Object(v["b"])(Array)], Q.prototype, "list", void 0),
    Q = f["a"]([Object(v["a"])({
      components: {
        SectionRow: T.a,
        BadgeList: M
      }
    })], Q);
    var W = Q,
    X = W,
    Y = (a("375d"), Object($["a"])(X, V, K, !1, null, "34f028b7", null));
    Y.options.__file = "OnlineList.vue";
    var Z = Y.exports,
    tt = function() {
      var t = this,
      e = t.$createElement,
      a = t._self._c || e;
      return a("article", {
        staticClass: "family-rank-list"
      },
      t._l(t.list,
      function(t, e) {
        return a("RankItem", {
          key: e,
          attrs: {
            item: t
          }
        })
      }), 1)
    },
    et = [],
    at = function() {
      var t = this,
      e = t.$createElement,
      a = t._self._c || e;
      return a("section", {
        staticClass: "family-rank-item",
        on: {
          click: t.gotoFamilyDetail
        }
      },
      [a("div", {
        staticClass: "rank",
        style: t.computeRankSize
      },
      [t._v(t._s(t.item.rank))]), a("div", {
        staticClass: "avatar-wrap",
        on: {
          click: function(e) {
            return e.stopPropagation(),
            t.gotoFamilyPage(e)
          }
        }
      },
      [a("img", {
        attrs: {
          src: t.item.avatar,
          alt: ""
        }
      })]), a("div", {
        staticClass: "content"
      },
      [a("div", {
        staticClass: "family-info"
      },
      [a("span", {
        staticClass: "name"
      },
      [t._v(t._s(t.item.name))]), a("img", {
        staticClass: "level-icon",
        attrs: {
          src: t.item.levelIcon,
          alt: ""
        }
      })]), a("div", {
        staticClass: "top3-list"
      },
      [t._l(t.item.icons,
      function(t, e) {
        return a("img", {
          key: e,
          class: ["top3-item", "item-" + (e + 1)],
          attrs: {
            src: t,
            alt: ""
          }
        })
      }), a("aside", {
        staticClass: "to-detail"
      })], 2)]), a("span", {
        staticClass: "score"
      },
      [t._v(t._s(t.item.familyThumbs) + "星光值")])])
    },
    it = [],
    nt = a("6453"),
    st = a.n(nt),
    rt = (a("386d"), a("db59")),
    ot = a.n(rt),
    ct = ot()(window.location.search),
    lt = ct.roomid,
    ut = void 0 === lt ? "": lt,
    pt = function(t) {
      function e() {
        return Object(c["a"])(this, e),
        Object(u["a"])(this, Object(p["a"])(e).apply(this, arguments))
      }
      return Object(d["a"])(e, t),
      Object(l["a"])(e, [{
        key: "gotoFamilyDetail",
        value: function() {
          st()({
            url: "".concat(window.location.origin, "/fep/momo/fe-live-projects/live-family/ranks.html?_bid=1000592&roomid=").concat(ut, "&familyId=").concat(this.item.familyId),
            ratio: 1.31,
            hasClose: 0,
            type: 2,
            levels: 1,
            percentOfScreen: 100
          })
        }
      },
      {
        key: "gotoFamilyPage",
        value: function() {
          mm.ui.openUrl({
            target: 1,
            url: "".concat(window.location.origin, "/fep/momo/fe-live-projects/live-family/main.html?_ui=256&_bid=1000592&id=").concat(this.item.familyId)
          })
        }
      },
      {
        key: "computeRankSize",
        get: function() {
          var t = {};
          return this.item.rank <= 3 ? t = {
            color: "#f04848"
          }: this.item.rank > 99 && (t = {
            fontSize: "28px"
          }),
          t
        }
      }]),
      e
    } (v["c"]);
    f["a"]([Object(v["b"])(Object)], pt.prototype, "item", void 0),
    pt = f["a"]([v["a"]], pt);
    var dt = pt,
    ft = dt,
    vt = (a("03db"), Object($["a"])(ft, at, it, !1, null, "15e2951c", null));
    vt.options.__file = "RankItem.vue";
    var ht = vt.exports,
    mt = function(t) {
      function e() {
        return Object(c["a"])(this, e),
        Object(u["a"])(this, Object(p["a"])(e).apply(this, arguments))
      }
      return Object(d["a"])(e, t),
      e
    } (v["c"]);
    f["a"]([Object(v["b"])(Array)], mt.prototype, "list", void 0),
    mt = f["a"]([Object(v["a"])({
      components: {
        RankItem: ht
      }
    })], mt);
    var gt = mt,
    bt = gt,
    _t = (a("b8c9"), Object($["a"])(bt, tt, et, !1, null, "57bad21f", null));
    _t.options.__file = "Ranks.vue";
    var yt = _t.exports,
    wt = function() {
      var t = this,
      e = t.$createElement,
      a = t._self._c || e;
      return a("div", {
        staticClass: "online-list-wrapper"
      },
      t._l(t.list,
      function(e, i) {
        return a("section-row", {
          key: i,
          class: t.hasBigAvatarBorder(e),
          attrs: {
            title: e.momoid + e.nickname.replace(/[^0-9]/ig, ''),
            avatar: e.avatar,
            gotoStr: e.card_goto
          }
        },
        [a("badge-list", {
          attrs: {
            slot: "content",
            options: e
          },
          slot: "content"
        }), a("template", {
          slot: "extra"
        },
        [4 === e.gameStatus ? a("div", {
          staticClass: "type4",
          on: {
            click: function(a) {
              a.stopPropagation(),
              t.handleType4(e)
            }
          }
        },
        [t._v("和Ta玩")]) : 3 === e.gameStatus ? a("div", {
          staticClass: "type3",
          on: {
            click: function(a) {
              a.stopPropagation(),
              t.handleType3(e)
            }
          }
        },
        [t._v("想和你玩")]) : 5 === e.gameStatus ? a("div", {
          staticClass: "type3",
          on: {
            click: function(a) {
              a.stopPropagation(),
              t.handleType5(e)
            }
          }
        },
        [t._v("想和你玩")]) : 2 === e.gameStatus ? a("div", {
          staticClass: "type3",
          on: {
            click: function(a) {
              a.stopPropagation(),
              t.handleType2(e)
            }
          }
        },
        [t._v("取消邀请")]) : 1 === e.gameStatus ? a("div", {
          staticClass: "type1",
          on: {
            click: function(a) {
              a.stopPropagation(),
              t.handleType1(e)
            }
          }
        },
        [t._v("断开")]) : [0 === i ? a("span", {
          staticClass: "fans-entrance",
          on: {
            click: function(a) {
              a.stopPropagation(),
              t.openGoto(e.goto)
            }
          }
        },
        [t._v(t._s(e.fans_gototext))]) : a("span", {
          staticClass: "distance"
        },
        [t._v(t._s(t.parseDistance(e.distance)))])], e.avatar_new_border ? a("aside", {
          staticClass: "big-avatar-border",
          style: {
            "background-image": "url(" + e.avatar_new_border + ")"
          }
        }) : t._e(), e.big_avatar_new_border ? a("aside", {
          staticClass: "big-avatar-border",
          style: {
            "background-image": "url(" + e.big_avatar_new_border + ")"
          }
        }) : t._e(), 0 === i && e.isshowbg ? a("aside", {
          staticClass: "star-bg"
        }) : t._e()], 2)], 2)
      }), 1)
    },
    kt = [],
    Ot = (a("96cf"), a("1da1")),
    jt = a("02bf"),
    xt = a.n(jt),
    Ct = "",
    Rt = "/mk/room/ranking",
    St = "".concat(Ct).concat(Rt),
    Tt = 5e3,
    Lt = [0, 200],
    qt = !0,
    It = ct.src,
    At = void 0 === It ? "": It,
    Pt = ct.roomid,
    Bt = void 0 === Pt ? "": Pt,
    Et = function(t) {
      return Object(jt["createRequestObservable"])("".concat(St, "/online"), {
        roomid: Bt,
        src: At,
        is_new: 1,
        index: t
      },
      Lt, qt, Tt)
    },
    Gt = function(t) {
      return Object(jt["createRequestObservable"])("".concat(St, "/support"), {
        roomid: Bt,
        src: At,
        is_new: 1,
        index: t
      },
      Lt, qt, Tt)
    },
    Ft = function() {
      return Object(jt["createRequestObservable"])("/mk/room/ranking/audioGameOnline", {
        roomid: Bt,
        src: At
      },
      Lt, qt, Tt)
    },
    $t = function(t) {
      return Object(jt["createRequestObservable"])("/mk/room/family/supportFamilyRank", {
        roomid: Bt,
        index: t,
        pageSize: 20,
        src: At
      },
      Lt, qt, Tt)
    },
    Nt = function(t) {
      return xt()("/mk/room/family/supportFamilyRank", {
        roomid: Bt,
        index: t,
        pageSize: 20,
        src: At
      },
      Lt, qt, Tt)
    },
    Mt = function(t) {
      return xt()("".concat(St, "/online"), {
        roomid: Bt,
        src: At,
        is_new: 1,
        index: t
      },
      Lt, qt, Tt)
    },
    zt = function(t) {
      return xt()("/mk/room/ranking/audioGameOnline", {
        roomid: Bt,
        src: At,
        is_new: 1,
        index: t
      },
      Lt, qt, Tt)
    },
    Dt = function(t) {
      return xt()("".concat(St, "/support"), {
        roomid: Bt,
        src: At,
        is_new: 1,
        index: t
      },
      Lt, qt, Tt)
    },
    Ht = function(t) {
      return xt()("/mk/room/lianmai/masterApply", {
        roomid: Bt,
        src: At,
        remoteid: t
      },
      Lt, qt, Tt)
    },
    Jt = function(t) {
      return xt()("/mk/room/lianmai/cancelOffer", {
        roomid: Bt,
        src: At,
        remoteid: t
      },
      Lt, qt, Tt)
    },
    Ut = function(t) {
      return xt()("/mk/room/lianmai/orderSlaveOut", {
        roomid: Bt,
        src: At,
        remoteid: t
      },
      Lt, qt, Tt)
    },
    Vt = function(t) {
      function e() {
        var t;
        return Object(c["a"])(this, e),
        t = Object(u["a"])(this, Object(p["a"])(e).apply(this, arguments)),
        t.parseDistance = L,
        t
      }
      return Object(d["a"])(e, t),
      Object(l["a"])(e, [{
        key: "openGoto",
        value: function(t) {
          t && (q(t), I())
        }
      },
      {
        key: "hasBigAvatarBorder",
        value: function(t) {
          return t.big_avatar_new_border || t.avatar_new_border ? "big-avatar-border-wrapper": ""
        }
      },
      {
        key: "handleType4",
        value: function() {
          var t = Object(Ot["a"])(regeneratorRuntime.mark(function t(e) {
            return regeneratorRuntime.wrap(function(t) {
              while (1) switch (t.prev = t.next) {
              case 0:
                return t.next = 2,
                Ht(e.momoid);
              case 2:
                try {
                  this.$toast.show("正在邀请，请等待", 6e3),
                  e.gameStatus = 2
                } catch(a) {
                  console.error(a)
                }
              case 3:
              case "end":
                return t.stop()
              }
            },
            t, this)
          }));
          function e(e) {
            return t.apply(this, arguments)
          }
          return e
        } ()
      },
      {
        key: "handleType3",
        value: function() {
          this.$toast.show("如想和其他人玩，需先断开当前连线")
        }
      },
      {
        key: "handleType5",
        value: function() {
          var t = Object(Ot["a"])(regeneratorRuntime.mark(function t(e) {
            return regeneratorRuntime.wrap(function(t) {
              while (1) switch (t.prev = t.next) {
              case 0:
                try {
                  q(e.game_goto),
                  I()
                } catch(a) {
                  console.error(a)
                }
              case 1:
              case "end":
                return t.stop()
              }
            },
            t, this)
          }));
          function e(e) {
            return t.apply(this, arguments)
          }
          return e
        } ()
      },
      {
        key: "handleType2",
        value: function() {
          var t = Object(Ot["a"])(regeneratorRuntime.mark(function t(e) {
            return regeneratorRuntime.wrap(function(t) {
              while (1) switch (t.prev = t.next) {
              case 0:
                return t.next = 2,
                Jt(e.momoid);
              case 2:
                try {
                  e.gameStatus = 4
                } catch(a) {
                  console.error(a)
                }
              case 3:
              case "end":
                return t.stop()
              }
            },
            t, this)
          }));
          function e(e) {
            return t.apply(this, arguments)
          }
          return e
        } ()
      },
      {
        key: "handleType1",
        value: function() {
          var t = Object(Ot["a"])(regeneratorRuntime.mark(function t(e) {
            return regeneratorRuntime.wrap(function(t) {
              while (1) switch (t.prev = t.next) {
              case 0:
                return t.next = 2,
                Ut(e.momoid);
              case 2:
                try {
                  I()
                } catch(a) {
                  console.error(a)
                }
              case 3:
              case "end":
                return t.stop()
              }
            },
            t, this)
          }));
          function e(e) {
            return t.apply(this, arguments)
          }
          return e
        } ()
      }]),
      e
    } (v["c"]);
    f["a"]([Object(v["b"])(Array)], Vt.prototype, "list", void 0),
    Vt = f["a"]([Object(v["a"])({
      components: {
        SectionRow: T.a,
        BadgeList: M
      }
    })], Vt);
    var Kt = Vt,
    Qt = Kt,
    Wt = (a("523f"), Object($["a"])(Qt, wt, kt, !1, null, "20e875e2", null));
    Wt.options.__file = "AudioGame.vue";
    var Xt = Wt.exports,
    Yt = function() {
      var t = this,
      e = t.$createElement,
      a = t._self._c || e;
      return a("nav", {
        staticClass: "tab-wrapper"
      },
      t._l(t.options,
      function(e, i) {
        return a("span", {
          key: i,
          class: ["tab-item", {
            active: t.active === i
          }],
          on: {
            click: function(e) {
              t.changeIndex(i)
            }
          }
        },
        [t._v(t._s(e.title))])
      }), 0)
    },
    Zt = [],
    te = (a("c5f6"),
    function(t) {
      function e() {
        return Object(c["a"])(this, e),
        Object(u["a"])(this, Object(p["a"])(e).apply(this, arguments))
      }
      return Object(d["a"])(e, t),
      Object(l["a"])(e, [{
        key: "changeIndex",
        value: function(t) {
          this.$emit("onChangeIndex", t)
        }
      }]),
      e
    } (v["c"]));
    f["a"]([Object(v["b"])(Array)], te.prototype, "options", void 0),
    f["a"]([Object(v["b"])(Number)], te.prototype, "active", void 0),
    te = f["a"]([v["a"]], te);
    var ee = te,
    ae = ee,
    ie = (a("cd7c"), Object($["a"])(ae, Yt, Zt, !1, null, "f5786a22", null));
    ie.options.__file = "TopTab.vue";
    var ne = ie.exports;
    v["c"].use(m.a),
    v["c"].use(x.a);
    var se = ct.show_support,
    re = void 0 === se ? 0 : se,
    oe = ct.show_audio_game,
    ce = void 0 === oe ? 0 : oe,
    le = ct.show_family_rank,
    ue = void 0 === le ? 0 : le,
    pe = (ct.showid, ct.roomid, [{
      title: "在线用户",
      data: "onlineList",
      init: Et,
      api: Mt
    }]),
    de = document,
    fe = de.body,
    ve = document.documentElement,
    he = function(t) {
      function e() {
        var t;
        return Object(c["a"])(this, e),
        t = Object(u["a"])(this, Object(p["a"])(e).apply(this, arguments)),
        t.hasNext = !0,
        t.nextIndex = 0,
        t.isRequesting = !1,
        t.title = "",
        t.tempList = [],
        t.supportList = [],
        t.onlineList = [],
        t.audioGameList = [],
        t.familyRank = [],
        t.showSupport = +re,
        t.showAudioGame = +ce,
        t.showFamilyRank = +ue,
        t.pageConfig = pe,
        t.activeTab = 10,
        t.isFresh = !1,
        t.removeScrollEventListener = function() {},
        t.swiperOption = {
          autoHeight: !0,
          on: {
            slideChangeTransitionStart:function() {window.scrollTo(0, 0)},
            slideChangeTransitionEnd: t.slideChangeAction
          }
        },
        t
      }
      return Object(d["a"])(e, t),
      Object(l["a"])(e, [{
        key: "created",
        value: function() {
          this.showAudioGame && (pe = [], pe.push({
            title: "在线观众",
            data: "audioGameList",
            init: Ft,
            api: zt
          }), this.pageConfig = pe),
          this.showFamilyRank && pe.push({
            title: "家族贡献榜",
            data: "familyRank",
            init: $t,
            api: Nt
          }),
          this.showSupport && pe.unshift({
            title: "贡献榜",
            data: "supportList",
            init: Gt,
            api: Dt
          })
        }
      },
      {
        key: "mounted",
        value: function() {
          var t = this;
          this.init(),
          window.addEventListener("scroll", this.handleReachBottom),
          O.a.ui.refresh(function() {
            return t.init()
          })
        }
      },
      {
        key: "init",
        value: function() {
          var t = null;
          try {
            t = sessionStorage.getItem("viplist")
          } catch(e) {
            console.warn("Maybe sessionStorage is not supported in your browser")
          }
          this.activeTab = null === t || "10" === t ? "familyRank" === this.pageConfig[this.pageConfig.length - 1].data ? this.pageConfig.length - 2 : this.pageConfig.length - 1 : +t,
          this.swiper.slideTo(this.activeTab, 0, !1)
        }
      },
      {
        key: "initList",
        value: function(t) {
          var e = this;
          if (void 0 !== t && 10 !== t && !this.isRequesting && this.hasNext) {
            try {
              sessionStorage.setItem("viplist", "".concat(t))
            } catch(a) {
              sessionStorage.clear(),
              console.warn("Maybe sessionStorage is not supported in your browser")
            }
            this.isRequesting = !0,
            this.pageConfig[t].init(0).subscribe(function(a) {
              O.a.ui.refreshEnd();
              var i = a.data,
              n = i.has_next,
              s = void 0 !== n && n,
              r = i.next_index,
              o = void 0 === r ? 20 : r,
              c = i.lists,
              l = void 0 === c ? [] : c,
              u = i.title,
              p = void 0 === u ? "": u,
              d = (i.privilege_banner, e.pageConfig[t].data);
              e.hasNext = s,
              e.nextIndex = o,
              e.title = p,
              e.tempList = l,
              v["c"].set(e, d, e.tempList),
              e.isRequesting = !1
            },
            function(t) {
              console.error(t),
              O.a.ui.refreshEnd(),
              e.isRequesting = !1
            })
          }
        }
      },
      {
        key: "forbiddenSwipe",
        value: function() {
          this.isRequesting ? this.swiper && this.swiper.detachEvents() : this.swiper && this.swiper.attachEvents()
        }
      },
      {
        key: "getList",
        value: function(t) {
          var e = this; ! this.isRequesting && this.hasNext && (this.isRequesting = !0, this.pageConfig[t].api(this.nextIndex).then(function(a) {
            O.a.ui.refreshEnd();
            var i = a.data,
            n = i.has_next,
            s = void 0 !== n && n,
            r = i.next_index,
            c = void 0 === r ? 20 : r,
            l = i.lists,
            u = void 0 === l ? [] : l,
            p = i.title,
            d = void 0 === p ? "": p,
            f = (i.show_peak, i.privilege_banner, e.pageConfig[t].data);
            e.hasNext = s,
            e.nextIndex = c,
            e.title = d,
            e.tempList = A([].concat(Object(o["a"])(e.tempList), Object(o["a"])(u))),
            v["c"].set(e, f, e.tempList),
            e.isRequesting = !1
          }).
          catch(function(t) {
            console.error(t),
            O.a.ui.refreshEnd(),
            e.isRequesting = !1
          }))
        }
      },
      {
        key: "changeIndex",
        value: function(t) {
          t === this.activeTab || this.isRequesting || (this.nextIndex = 0, this.tempList = [], this.hasNext = !0, this.activeTab = t, this.swiper.slideTo(t, 300, !1))
        }
      },
      {
        key: "slideChangeAction",
        value: function() {
          this.nextIndex = 0,
          this.tempList = [],
          this.hasNext = !0,
          this.activeTab = this.swiper.activeIndex
        }
      },
      {
        key: "handleReachTop",
        value: function() {
          var t = ve.scrollTop || fe.scrollTop;
          t > 10 && !this.isFresh && (this.isFresh = !0, O.a.ui.setPulldown({
            type: 0
          })),
          t <= 5 && this.isFresh && (this.isFresh = !1, O.a.ui.setPulldown({
            type: 1
          }))
        }
      },
      {
        key: "handleReachBottom",
        value: function() {
          var t = ve.clientHeight,
          e = Math.max(fe.offsetHeight, fe.scrollHeight, ve.scrollHeight),
          a = ve.scrollTop || fe.scrollTop;
          e - (a + t) <= 100 && a > 0 && this.getList(this.activeTab),
          this.handleReachTop()
        }
      },
      {
        key: "swiper",
        get: function() {
          return this.$refs.mySwiper.swiper
        }
      }]),
      e
    } (v["c"]);
    f["a"]([Object(v["d"])("activeTab", {
      immediate: !0
    })], he.prototype, "initList", null),
    f["a"]([Object(v["d"])("isRequesting")], he.prototype, "forbiddenSwipe", null),
    he = f["a"]([Object(v["a"])({
      components: {
        swiper: g["swiper"],
        swiperSlide: g["swiperSlide"],
        TopTab: ne,
        SupportList: U,
        OnlineList: Z,
        NoDataView: _.a,
        Loading: w.a,
        AudioGameOnlineList: Xt,
        FamilyRank: yt
      }
    })], he);
    var me = he,
    ge = me,
    be = (a("8764"), Object($["a"])(ge, s, r, !1, null, null, null));
    be.options.__file = "app.vue";
    var _e = be.exports;
    i["default"].use(n["Toast"]),
    (new _e).$mount("#root")
  },
  f5fa: function(t, e, a) {}
});