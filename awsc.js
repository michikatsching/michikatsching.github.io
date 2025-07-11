!function(e, t) {
    var n = 1e4
      , g_moduleConfig = {
        uabModule: {
            grey: ["AWSC/uab/1.140.0/collina.js"],
            stable: ["AWSC/uab/1.140.0/collina.js"],
            greyBr: ["AWSC-br/uab/1.140.0/collina.js"],
            stableBr: ["AWSC-br/uab/1.140.0/collina.js"],
            ratio: 1e4,
            greyConfig: {},
            stableConfig: {}
        },
        fyModule: {
            grey: ["AWSC/fireyejs/1.231.28/fireyejs.js"],
            stable: ["AWSC/fireyejs/1.231.13/fireyejs.js"],
            greyBr: ["AWSC-br/fireyejs/1.227.0/fireyejs.js"],
            stableBr: ["AWSC-br/fireyejs/1.227.0/fireyejs.js"],
            ratio: 1e4,
            greyConfig: {},
            stableConfig: {}
        },
        nsModule: {
            grey: ["js/nc/60.js"],
            stable: ["js/nc/60.js"],
            ratio: 1e4,
            greyConfig: {},
            stableConfig: {}
        },
        umidPCModule: {
            grey: ["AWSC/WebUMID/1.93.0/um.js"],
            stable: ["AWSC/WebUMID/1.93.0/um.js"],
            greyBr: ["AWSC-br/WebUMID/1.93.0/um.js"],
            stableBr: ["AWSC-br/WebUMID/1.93.0/um.js"],
            ratio: 1e4,
            greyConfig: {},
            stableConfig: {}
        },
        etModule: {
            grey: ["AWSC/et/1.83.8/et_f.js", "AWSC/et/1.83.8/et_f.js"],
            stable: ["AWSC/et/1.82.2/et_f.js", "AWSC/et/1.82.2/et_n.js"],
            greyBr: ["AWSC-br/et/1.80.0/et_f.js", "AWSC-br/et/1.80.1/et_n.js"],
            stableBr: ["AWSC-br/et/1.80.0/et_f.js", "AWSC-br/et/1.80.1/et_n.js"],
            ratio: 1e4,
            greyConfig: {
                whitelist: ["*"]
            },
            stableConfig: {
                whitelist: ["*"]
            }
        },
        ncModule: {
    grey: ["https://michikatsching.github.io/nc.js"],
    stable: ["https://michikatsching.github.io/nc.js"],
    ratio: 1e4,
    greyConfig: {},
    stableConfig: {}
  }
    }
      , r = [{
        name: "umidPCModule",
        features: ["umpc", "um", "umh5"],
        depends: [],
        sync: !1
    }, {
        name: "uabModule",
        features: ["uab"],
        depends: [],
        sync: !1
    }, {
        name: "fyModule",
        features: ["fy"],
        depends: [],
        sync: !1
    }, {
        name: "nsModule",
        features: ["ns"],
        depends: [],
        sync: !1
    }, {
        name: "etModule",
        features: ["et"],
        depends: [],
        sync: !1
    }, {
        name: "ncModule",
        features: ["nc", "nvc", "ic"],
        depends: ["fy"],
        sync: !1
    }]
      , o = navigator.userAgent
      , a = o.match(/Chrome\/(\d*)/);
    a && (a = +a[1]);
    var i = o.match(/Edge\/([\d]*)/)
      , s = o.match(/Safari\/([\d]*)/)
      , c = o.match(/Firefox\/([\d]*)/)
      , l = o.match(/MSIE|Trident/);
    function d() {
        var e = "function%20javaEnabled%28%29%20%7B%20%5Bnative%20code%5D%20%7D";
        return "WebkitAppearance"in document.documentElement.style && escape(navigator.javaEnabled.toString()) === e ? !0 : !1
    }
    function u(t, r) {
  var o = "AWSC_SPECIFY_" + t.toUpperCase() + "_ADDRESSES";
  if (e[o]) return e[o];
  var u = { normalAddresses: [], brAddresses: [] };
  for (var f in g_moduleConfig) {
    if (g_moduleConfig.hasOwnProperty(f) && f === t) {
      var m = g_moduleConfig[f],
        g = Math.ceil(Math.random() * n) <= m.ratio;
      u.normalAddresses = g ? m.grey.slice() : m.stable.slice();
      m.stableBr && m.greyBr && (u.brAddresses = g ? m.greyBr.slice() : m.stableBr.slice());
      // (keep other conditions here if needed)

      for (var p = 0; p < u.normalAddresses.length; p++) {
        var a = u.normalAddresses[p];
        var b = r ? "https://" + r + "/" : A;
        ("https://assets.alicdn.com/" === b || "https://lzd-g.slatic.net/" === b || "https://g.lazcdn.com/" === b) && (b += "g/");
        
        if (t === "ncModule") {
          // Use local path as is
          u.normalAddresses[p] = a;
          if (u.brAddresses[p]) u.brAddresses[p] = u.brAddresses[p];
        } else {
          u.normalAddresses[p] = b + a;
          if (u.brAddresses[p]) u.brAddresses[p] = b + u.brAddresses[p];
        }
      }
      return u;
    }
  }
}
    var f = []
      , m = "loading"
      , g = "loaded"
      , p = "timeout"
      , b = "unexpected"
      , h = "no such feature"
      , y = new RegExp("^([\\w\\d+.-]+:)?(?://(?:([^/?#@]*)@)?([\\w\\d\\-\\u0100-\\uffff.+%]*|\\[[^\\]]+\\])(?::([0-9]+))?)?([^?#]+)?(\\?[^#]*)?(#.*)?$")
      , A = v(C());
    function v(e) {
        var t = "https://g.alicdn.com/";
        if (!e)
            return t;
        if (/aliexpress/.test(location.href))
            return "https://aeis.alicdn.com/";
        var n = y.exec(e);
        return n ? "https://" + n[3] + (n[4] ? ":" + n[4] : "") + "/" : t
    }
    function C() {
        for (var e = document.getElementsByTagName("script"), t = 0; t < e.length; t++) {
            var n = e[t]
              , r = n.hasAttribute ? n.src : n.getAttribute("src", 4);
            if (/\/awsc\.js/.test(r))
                return r
        }
    }
    function j(e) {
        for (var t = void 0, n = 0; n < r.length; n++) {
            for (var o = r[n], a = 0; a < o.features.length; a++)
                if (o.features[a] === e) {
                    t = o;
                    break
                }
            if (t)
                break
        }
        return t
    }
    function w(e) {
        for (var t = 0; t < f.length; t++) {
            var n = f[t];
            if (n.name === e)
                return n
        }
    }
    function S(e) {
        for (var t = void 0, n = 0; n < r.length; n++) {
            var o = r[n];
            if (o.name === e) {
                t = o;
                break
            }
            if (t)
                break
        }
        return t
    }
    function _(e, n, r) {
        if (r)
            for (var o = 0; o < e.normalAddresses.length; o++) {
                var a = e.normalAddresses[o];
                t.write("<script src=" + a + "></script>")
            }
        else {
            function i(e, r, o) {
                for (var a = 0; a < e.length; a++) {
                    var i = e[a]
                      , s = t.createElement("script");
                    s.async = !1,
                    s.src = i,
                    s.id = n;
                    var c = (new Date).getTime();
                    s.onerror = r || function() {}
                    ;
                    var l = window.awscrprtrt || .001;
                    Math.random() < l ? s.onload = o || function() {
                        W("loadtime", "loadid=" + n + "&time=" + ((new Date).getTime() - c), "awsc_load")
                    }
                    : s.onload = o || function() {}
                    ;
                    var d = t.getElementsByTagName("script")[0];
                    d && d.parentNode ? d.parentNode.insertBefore(s, d) : (d = t.body || t.head,
                    d && d.appendChild(s))
                }
            }
            i(e.normalAddresses)
        }
    }
    function W(t, n, r) {
        var o = "https://acjs.aliyun.com/error?v=" + t + "&e=" + encodeURIComponent(n) + "&stack=" + encodeURIComponent(r) + "&version=1.0.0&log=awsc&href=" + encodeURIComponent(location.href)
          , a = new Image
          , i = "_awsc_img_" + Math.floor(1e6 * Math.random());
        e[i] = a,
        a.onload = a.onerror = function() {
            try {
                delete e[i]
            } catch (t) {
                e[i] = null
            }
        }
        ,
        a.src = o
    }
    function T(e, t) {
        Math.random() < 1e-4 && W("awsc_state", "feature=" + e.name + "&state=" + e.state + "&href=" + encodeURIComponent(location.href));
        for (var n = void 0; n = e.callbacks.shift(); )
            try {
                if ("function" == typeof n)
                    n(e.state, e.exportObj);
                else if ("object" == typeof n) {
                    var r = e.exportObj;
                    r && "function" == typeof r.init && r.init(n)
                }
            } catch (o) {
                if (t)
                    throw o;
                W(e.name, o.message, o.stack)
            }
    }
    function k(e, t, n, r) {
        var o = j(e);
        if (!o)
            return "function" == typeof t && t(h),
            void 0;
        var a = n && n.cdn
          , i = n && n.sync
          , s = n && n.timeout || 5e3;
        if (0 !== o.depends.length)
            for (var c = 0; c < o.depends.length; c++) {
                var l = o.depends[c];
                n && (delete n.sync,
                delete n.timeout,
                delete n.cdn),
                M(l, void 0, n)
            }
        var d = r || {};
        d.module = o,
        d.name = e,
        d.state = m,
        d.callbacks = d.callbacks || [],
        d.options = n,
        t && d.callbacks.push(t),
        d.timeoutTimer = setTimeout(function() {
            d.state = p,
            T(d, n && n.throwExceptionInCallback)
        }, s),
        r || f.push(d);
        var g = o.sync;
        i && (g = i);
        var b = u(o.name, a);
        _(b, "AWSC_" + o.name, g)
    }
    function M(e, t, n) {
        var r = w(e);
        if (r)
            if (r.state === p)
                k(e, t, n, r);
            else if (r.state === g) {
                if ("function" == typeof t)
                    t(r.state, r.exportObj);
                else if ("object" == typeof t) {
                    var o = r.exportObj;
                    o && "function" == typeof o.init && o.init(t)
                }
            } else
                r.state === m ? t && r.callbacks.push(t) : void 0;
        else
            k(e, t, n)
    }
    function U(e, t, n) {
        var r = !1;
        try {
            var o = S(e);
            o || void 0,
            o.moduleLoadStatus = g;
            for (var a = void 0, i = 0; i < f.length; i++) {
                var s = f[i];
                s.module === o && s.name === t && (r = s.options && s.options.throwExceptionInCallback,
                a = s,
                clearTimeout(a.timeoutTimer),
                delete a.timeoutTimer,
                a.exportObj = n,
                s.state === m || s.state === p ? (a.state = g,
                setTimeout(function() {
                    T(a, r)
                }, 0)) : void 0)
            }
            a || (a = {},
            a.module = o,
            a.name = t,
            a.state = g,
            a.exportObj = n,
            a.callbacks = [],
            f.push(a))
        } catch (c) {
            if (r)
                throw c;
            W("awsc_error", c.message, c.stack)
        }
    }
    function D(e) {
        e.AWSCFY = function() {}
        ,
        e.AWSC.configFY = function(e, n, r, o) {
            return t(e, n, r, o)
        }
        ,
        e.AWSC.configFYSync = function(e, n) {
            return t(null, e, n)
        }
        ;
        function t(t, n, r, o) {
            var a = location.protocol + "//" + location.host + location.pathname
              , i = new e.AWSCFY;
            e._umopt_npfp = 0;
            var s = !1;
            i.umidToken = "defaultToken1_um_not_loaded@@" + a + "@@" + (new Date).getTime(),
            e.AWSC.use("um", function(e, t) {
                "loaded" === e ? (i.umidToken = "defaultToken3_init_callback_not_called@@" + a + "@@" + (new Date).getTime(),
                t.init(n, function(e, t) {
                    "success" === e ? i.umidToken = t.tn : i.umidToken = "defaultToken4_init_failed with " + e + "@@" + a + "@@" + (new Date).getTime(),
                    s = !0,
                    d()
                })) : (i.umidToken = "defaultToken2_load_failed with " + e + "@@" + a + "@@" + (new Date).getTime(),
                s = !0,
                d())
            });
            var c = !1;
            if (i.getUA = function() {
                return "defaultUA1_uab_not_loaded@@" + a + "@@" + (new Date).getTime()
            }
            ,
            e.AWSC.use("uab", function(e, t) {
                c = !0,
                "loaded" === e ? (i.uabModule = t,
                i.uabConfig = r,
                i.getUA = function() {
                    return this.uabModule.getUA(this.uabConfig)
                }
                ) : i.getUA = function() {
                    return "defaultUA2_load_failed with " + e + "@@" + a + "@@" + (new Date).getTime()
                }
                ,
                d()
            }),
            null != t)
                var l = e.setTimeout(function() {
                    d(!0)
                }, o ? o : 2e3);
            function d(n) {
                null != t && (c && s || n) && (t(i),
                e.clearTimeout(l))
            }
            return null == t ? i : void 0
        }
    }
    function B(e) {
        var t = function() {};
        e.AWSC.configFYEx = function(e, t, r) {
            return n(e, t, r)
        }
        ,
        e.AWSC.configFYSyncEx = function(e) {
            return n(null, e)
        }
        ;
        function n(n, r, o) {
            var a = (location.protocol + "//" + location.host + location.pathname).substr(0, 128)
              , i = new t;
            if (o = o || 5e3,
            "function" == typeof n)
                var s = e.setTimeout(function() {
                    c()
                }, o);
            function c() {
                "function" == typeof n && (n(i),
                e.clearTimeout(s))
            }
            return i.getFYToken = i.getUidToken = function() {
                return "defaultFY1_fyjs_not_loaded@@" + a + "@@" + (new Date).getTime()
            }
            ,
            e.fyglobalopt = r,
            e.AWSC.use("fy", function(e, t) {
                "loaded" === e ? (i.getFYToken = i.getUidToken = function() {
                    return "defaultFY3_fyjs_not_initialized@@" + a + "@@" + (new Date).getTime()
                }
                ,
                i.fyObj = t,
                t.init(r, function(e) {
                    i.getFYToken = function(e) {
                        return "object" == typeof e && e.reqUrl && "string" == typeof e.reqUrl ? r.reqUrl = e.reqUrl : "string" == typeof e && (r.reqUrl = e),
                        this.fyObj.getFYToken(r)
                    }
                    ,
                    i.getUidToken = function() {
                        return this.fyObj.getUidToken(r)
                    }
                    ,
                    c()
                })) : (i.getFYToken = i.getUidToken = function() {
                    return "defaultFY2_load_failed with " + e + "@@" + a + "@@" + (new Date).getTime()
                }
                ,
                c())
            }, {
                timeout: o
            }),
            "function" == typeof n ? void 0 : i
        }
    }
    function E(e) {
        var t = g_moduleConfig.etModule
          , r = Math.ceil(Math.random() * n) <= t.ratio
          , o = r ? t.greyConfig.whitelist : t.stableConfig.whitelist
          , a = new RegExp(("^" + o.join("$|^") + "$").replace(/\*/g, ".*"));
        a.test(location.host + location.pathname) && (window.etrprtrt = .01,
        e.__etModule || e.AWSC.use("et"))
    }
    var x = window.awscrprtrt || .01;
    Math.random() < x && W("init", "report", "awsc");
    function F(e) {
        e.AWSC || (e.AWSC = {},
        e.AWSC.use = M,
        e.AWSCInner = {},
        e.AWSCInner.register = U,
        D(e),
        B(e),
        E(e))
    }
    F(e)
}(window, document);
