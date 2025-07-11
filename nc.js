!function(e) {
    function t(i) {
        if (n[i])
            return n[i].exports;
        var a = n[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(a.exports, a, a.exports, t),
        a.l = !0,
        a.exports
    }
    var n = {};
    t.m = e,
    t.c = n,
    t.i = function(e) {
        return e
    }
    ,
    t.d = function(e, n, i) {
        t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: i
        })
    }
    ,
    t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return t.d(n, "a", n),
        n
    }
    ,
    t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    t.p = "",
    t(t.s = 9)
}([function(e, t, n) {
    "use strict";
    t.jsv = 1,
    t.URL = {
        cn: {
            serviceUrl: "https://ynuf.aliapp.org/service/um.json",
            initialize: "https://cf.aliyun.com/nocaptcha/initialize.jsonp",
            analyze: "https://cf.aliyun.com/nocaptcha/analyze.jsonp"
        },
        us: {
            serviceUrl: "https://us.ynuf.aliapp.org/service/um.json",
            initialize: "https://cfall.aliyun.com/nocaptcha/initialize.jsonp",
            analyze: "https://cfall.aliyun.com/nocaptcha/analyze.jsonp"
        }
    },
    t.ic = {
        query_url: "https://cf.aliyun.com/nvc/nvcAnalyze.jsonp",
        sc_height: 160,
        nc_height: 32,
        qc_width: 480,
        default_options: {
            default_icon: "https://img.alicdn.com/tfs/TB1KOMxl4rI8KJjy0FpXXb5hVXa-12-14.png",
            success_icon: "https://img.alicdn.com/tfs/TB1LbpGmcLJ8KJjy0FnXXcFDpXa-12-14.png",
            fail_icon: "https://img.alicdn.com/tfs/TB1hV39l9fD8KJjSszhXXbIJFXa-12-14.png",
            width: 300,
            height: 42,
            default_txt: "\u70b9\u51fb\u6309\u94ae\u5f00\u59cb\u667a\u80fd\u9a8c\u8bc1",
            success_txt: "\u9a8c\u8bc1\u6210\u529f",
            fail_txt: "\u9a8c\u8bc1\u5931\u8d25\uff0c\u8bf7\u518d\u6b21\u70b9\u51fb\u6309\u94ae\u5237\u65b0",
            neterr_txt: "\u7f51\u7edc\u5f02\u5e38\uff0c\u8bf7\u518d\u6b21\u70b9\u51fb\u6309\u94ae\u5237\u65b0",
            scaning_txt: "\u667a\u80fd\u68c0\u6d4b\u4e2d",
            secvrf_layout: !1
        }
    }
}
, function(e, t, n) {
    "use strict";
    function i(e, t, n) {
        e.__fy_options = e.__fy_options || {
            MaxMTLog: 300,
            MTInterval: 4,
            MinMTDwnLog: 30,
            MaxKSLog: 14,
            MaxFocusLog: 6,
            MaxNGPLog: 200,
            NGPInterval: 4,
            Enable: 3,
            location: e.options.foreign ? "us" : "cn",
            _umopt_npfp: 1
        },
        AWSC.configFYEx(function(n) {
            e.__fy = n,
            t && t(n)
        }, e.__fy_options, 1e3)
    }
    function a(e) {
        var t = ("initializeJsonp_" + Math.random()).replace(".", "")
          , n = o.URL[e.foreign ? "us" : "cn"].initialize + "?a=" + encodeURIComponent(e.appkey) + "&t=" + encodeURIComponent(e.token) + "&scene=" + encodeURIComponent(e.scene) + "&lang=" + e.language + "&v=" + r.version + "&href=" + encodeURIComponent(location.href.split("?")[0]) + "&comm={}&callback=" + t
          , i = document.createElement("script")
          , a = document.getElementsByTagName("script")[0];
        a.parentNode.insertBefore(i, a),
        window[t] = function(e) {}
        ,
        i.src = n
    }
    function s(e, t, n) {
        window.__awsc_et__ || window.__sec_entry_loaded ? (e.__et = {
            getETToken: window.etSign
        },
        t && t(!0)) : e.options.replaceCallback && AWSC.use("et", function(n, i) {
            e.__et = i,
            t && t(!0)
        }, {
            timeout: 1e3
        })
    }
    var o = n(0)
      , r = n(3);
    t.loadFY = i,
    t.initializationReport = a,
    t.loadET = s
}
, function(e, t, n) {
    "use strict";
    function i(e) {
        return 0 === e.indexOf("#") ? y.getElementById(e.slice(1)) : y.getElementById(e)
    }
    function a(e) {
        var t = y.createElement("style");
        t.type = "text/css",
        t.className = "nc-style",
        t.styleSheet ? t.styleSheet.cssText = e : t.innerHTML = e;
        var n = y.getElementsByTagName("script")
          , i = n[n.length - 1];
        i.parentNode.insertBefore(t, i)
    }
    function s(e) {
        if (e in w)
            return w[e];
        var t = document.createElement("b");
        return t.innerHTML = "\x3c!--[if IE " + e + "]><i></i><![endif]--\x3e",
        w[e] = 1 === t.getElementsByTagName("i").length
    }
    function o(e) {
        var t = document.documentElement.scrollTop;
        document.documentElement.scrollLeft;
        if (e.getBoundingClientRect) {
            var n = e.getBoundingClientRect();
            return {
                left: n.left,
                right: n.right,
                top: n.top - t,
                bottom: n.bottom - t
            }
        }
        var i = getElementLeft(e)
          , a = getElementTop(e);
        return {
            left: i,
            right: i + e.offsetWidth,
            top: a,
            bottom: a + e.offsetHeight
        }
    }
    function r(e, t, n) {
        e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on" + t, n)
    }
    function c(e, t, n) {
        e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent && e.detachEvent("on" + t, n)
    }
    function l(e, t) {
        if (!t)
            return !1;
        if (e.classList) {
            for (var n = t.split(/\s+/), i = 0; i < n.length; i++)
                if (!e.classList.contains(n[i]))
                    return !1;
            return !0
        }
        return new RegExp("(\\s|^)" + t + "(\\s|$)").test(e.className)
    }
    function d(e, t) {
        t && !l(e, t) && (e.classList ? e.classList.add.apply(e.classList, t.split(/\s+/)) : e.className += " " + t)
    }
    function p(e, t) {
        t && l(e, t) && (e.classList ? e.classList.remove.apply(e.classList, t.split(/\s+/)) : e.className = e.className.replace(new RegExp("(\\s|^)" + t + "(\\s|$)"), " ").replace(/^\s+|\s+$/g, ""))
    }
    function u(e) {
        var t = [];
        for (var n in e)
            e.hasOwnProperty(n) && t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
        return t.join("&")
    }
    function f(e) {
        var t, n = [], i = f;
        if ("string" == typeof e)
            return '"' + e.replace(/(['"\\])/g, "\\$1").replace(/(\n)/g, "\\n").replace(/(\r)/g, "\\r").replace(/(\t)/g, "\\t") + '"';
        if (void 0 === e)
            return "undefined";
        if ("object" == (void 0 === e ? "undefined" : v(e))) {
            if (null === e)
                return "null";
            if (e.sort) {
                for (t = 0; t < e.length; t++)
                    n.push(i(e[t]));
                n = "[" + n.join() + "]"
            } else {
                for (t in e)
                    e.hasOwnProperty(t) && n.push('"' + t + '":' + i(e[t]));
                n = "{" + n.join() + "}"
            }
            return n
        }
        return e.toString()
    }
    function h(e) {
        var t = 0;
        e.timeout = e.timeout || 3e3,
        e.times = e.times || 3;
        var n;
        if (e = e || {},
        !e.url || !e.callback)
            throw new Error("\u53c2\u6570\u4e0d\u5408\u6cd5");
        var i = ("jsonp_" + Math.random()).replace(".", "")
          , a = y.getElementsByTagName("script")[0]
          , s = "";
        e.data ? (e.data[e.callback] = i,
        s += u(e.data)) : s += e.callback + "=" + i;
        var o = y.createElement("script");
        a.parentNode.insertBefore(o, a),
        b[i] = function(t) {
            b[i] = function() {
                report("\u56de\u8c03\u5df2\u6267\u884c\u8fc7,\u4e0d\u518d\u6267\u884c"),
                b[i] = null
            }
            ;
            try {
                o.parentNode && o.parentNode.removeChild(o)
            } catch (e) {}
            clearInterval(n),
            e.success && e.success(t)
        }
        ,
        o.src = e.url + (-1 == e.url.indexOf("?") ? "?" : "&") + s,
        e.timeout && (n = setInterval(function() {
            t++;
            var a;
            if (t >= e.times) {
                b[i] = function() {}
                ,
                clearInterval(n);
                try {
                    o.parentNode && o.parentNode.removeChild(o)
                } catch (e) {}
                e.fail && e.fail(1)
            } else
                try {
                    o.parentNode && o.parentNode.removeChild(o),
                    o = y.createElement("script"),
                    a = y.getElementsByTagName("script")[0],
                    a.parentNode.insertBefore(o, a),
                    o.src = e.url + (-1 == e.url.indexOf("?") ? "?" : "&") + s + "&t=" + Math.random()
                } catch (e) {}
        }, e.timeout))
    }
    function g(e) {
        for (var t, n, i = [].slice.call(arguments), a = i.length, s = 1; s < a; s++) {
            t = i[s];
            for (n in t)
                t.hasOwnProperty(n) && ("Flag" === n && e[n] ? e[n] = e[n] | t[n] : e[n] = t[n])
        }
        return e
    }
    function m(e) {
        for (var t, n, i = [].slice.call(arguments), a = i.length, s = 1; s < a; s++) {
            t = i[s];
            for (n in t)
                t.hasOwnProperty(n) && (e[n] = t[n])
        }
        return e
    }
    function _(e, t, n) {
        if (t = t || y,
        n = n || "*",
        y.getElementsByClassName)
            return t.getElementsByClassName(e);
        for (var i = [], a = "*" === n && t.all ? t.all : t.getElementsByTagName(n), s = a.length; --s >= 0; )
            l(a[s], e) && i.push(a[s]);
        return i
    }
    function x(e, t, n) {
        if (e.reportUrl) {
            var i = {
                type: t,
                msg: (n + "").substr(0, 1e3) + ";",
                uuid: e.token
            }
              , a = [];
            for (var s in i)
                a.push(s + "=" + encodeURIComponent(i[s]));
            (new Image).src = e.reportUrl + a.join("&")
        }
    }
    var v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
      , b = window
      , y = document;
    t.query = i,
    t.insertCSS = a;
    var w = {};
    t.isIEX = s,
    t.getClientRect = o,
    t.addHandler = r,
    t.removeEvt = c,
    t.hasClass = l,
    t.addClass = d,
    t.removeClass = p,
    t.obj2param = u,
    t.obj2str = f,
    t.jsonp = h,
    t.extend = g,
    t.mix = m,
    t.getElementsByClassName = _,
    t.getNCPunish = x
}
, function(e, t, n) {
    "use strict";
    t.v = 1026,
    t.version = "v1.3.21"
}
, function(e, t, n) {
    "use strict";
    function i(e) {
        function t() {
            !n.jsReady && n.__fy && (n.jsReady = !0,
            a(n))
        }
        var n = this;
        n.constructor(e),
        n.options = e,
        n.NVC_Result = {},
        c.loadFY(n, function(e) {
            t()
        }, function(t) {
            e.error && e.error(d)
        }),
        n.NVC_Data = {
            a: e.appkey,
            c: e.token,
            d: e.scene,
            j: {
                test: 1
            }
        },
        e.trans && (n.NVC_Data.h = e.trans)
    }
    function a(e) {
        l.jsonp({
            url: "https://cf.aliyun.com/nvc/nvcPrepare.jsonp",
            callback: "callback",
            data: {
                a: JSON.stringify({
                    a: e.options.appkey,
                    d: e.options.scene,
                    c: e.options.token
                })
            },
            success: function(t) {
                t.result && (t.result.result && (e.NVC_Result.nvcPreRes = t.result.result),
                e.options.capCode = t.result.code,
                400 === e.options.capCode ? e.getNC() : 600 === e.options.capCode && e.getSC())
            }
        })
    }
    function s(e) {
        if (e.apimap) {
            var t = e.foreign ? "us" : "cn";
            r.URL[t].analyze = e.apimap.analyze ? e.apimap.analyze : r.URL[t].analyze,
            r.URL[t].initialize = e.apimap.initialize ? e.apimap.initialize : r.URL[t].initialize
        }
        if (e.language || (e.language = "cn"),
        !e.hasOwnProperty("default_txt") && e.hasOwnProperty("language") && o.hasOwnProperty(e.language) && (e.default_txt = o[e.language].default_txt),
        !e.hasOwnProperty("success_txt") && e.hasOwnProperty("language") && o.hasOwnProperty(e.language) && (e.success_txt = o[e.language].success_txt),
        !e.hasOwnProperty("fail_txt") && e.hasOwnProperty("language") && o.hasOwnProperty(e.language) && (e.fail_txt = o[e.language].fail_txt),
        !e.hasOwnProperty("neterr_txt") && e.hasOwnProperty("language") && o.hasOwnProperty(e.language) && (e.neterr_txt = o[e.language].neterr_txt),
        !e.hasOwnProperty("scaning_txt") && e.hasOwnProperty("language") && o.hasOwnProperty(e.language) && (e.scaning_txt = o[e.language].scaning_txt),
        e.test)
            e.appkey = "CF_APP_1",
            e.scene = "nvc_register",
            e.trans = e.trans || {},
            e.trans.nvcCode = 200,
            e.trans.key1 = "code0",
            e.test === u.TEST_BLOCK ? (e.trans.nvcCode = 800,
            e.trans.key1 = "code300") : e.test === u.TEST_NC_PASS ? (e.trans.nvcCode = 400,
            e.trans.key1 = "code0") : e.test === u.TEST_NC_BLOCK ? (e.trans.nvcCode = 400,
            e.trans.key1 = "code300") : e.test === u.TEST_SC_PASS ? (e.trans.nvcCode = 600,
            e.trans.key1 = "code0") : e.test === u.TEST_SC_BLOCK && (e.trans.nvcCode = 600,
            e.trans.key1 = "code300");
        else if ("string" != typeof e.appkey || "string" != typeof e.scene) {
            var n = window.console;
            n && n.error("Invalid NVC params: appkey=" + e.appkey + " scene=" + e.scene)
        }
        e.token = e.token || [e.appkey, e.scene, +new Date, Math.random()].join(":")
    }
    var o = n(8)
      , r = n(0)
      , c = n(1)
      , l = n(2)
      , d = "04";
    l.insertCSS(".sm-pop{position:absolute;background:#FFFFFF;border:1px solid #CFE2F6;z-index:10000;}.sm-pop-toplayer{position:fixed;background:#FAFAFA;top:0;right:0;bottom:0;left:0;z-index:100000;}.sm-pop-inner{position:absolute;width:100%;}.sm-pop-inner .qc-wrapper .qc-container{box-shadow:none;}.sm-pop-close{position:absolute;top:0;right:0;width:15px;height:15px;line-height:15px;text-align:center;background:url(https://img.alicdn.com/tfs/TB1z6LQmf6H8KJjy0FjXXaXepXa-14-14.png);cursor:pointer;}#sc{margin-left:100px;margin-top:200px;}.sm-btn-wrapper{position:relative;}.sm-txt{margin-left:20px;font-size:14px;vertical-align:middle;color:#3C3C3C;white-space:pre-wrap;}.sm-btn{line-height:42px;border:1px solid #dddddd;cursor:pointer;overflow:hidden;}#rectMask{overflow:hidden;position:absolute;top:0px;left:0px;}#sm-btn-bg{background-image:linear-gradient(0deg,#EDEDED,#ffffff);cursor:pointer;overflow:hidden;z-index:-1;position:absolute;top:1px;left:1px;}.sm-btn-default .sm-ico:hover{box-shadow:0 0 10px #00de76;background:rgba(0,222,118,.3);}.sm-btn-default:hover{-moz-box-shadow:0px 0px 8px #65F4B5;-webkit-box-shadow:0px 0px 8px #65F4B5;box-shadow:0px 0px 8px #65F4B5;}.sm-btn-success:hover{-moz-box-shadow:0px 0px 8px #65F4B5;-webkit-box-shadow:0px 0px 8px #65F4B5;box-shadow:0px 0px 8px #65F4B5;}.sm-btn-loading:hover{-moz-box-shadow:0px 0px 8px #65F4B5;-webkit-box-shadow:0px 0px 8px #65F4B5;box-shadow:0px 0px 8px #65F4B5;}.sm-btn-fail:hover{-moz-box-shadow:0px 0px 8px #F55742;-webkit-box-shadow:0px 0px 8px #F55742;box-shadow:0px 0px 8px #F55742;}.sm-btn-default .sm-ico,.sm-btn-loading .sm-ico,.sm-btn-success .sm-ico,.sm-btn-fail .sm-ico{position:relative;background:none;display:inline-block;margin-top:-3px;margin-left:12px;width:36px;height:36px;border-radius:50%;line-height:36px;text-align:center;vertical-align:middle;}.sm-btn-default .sm-ico-wave{width:26px;height:26px;border-radius:50%;animation:defaultWave 1.5s ease infinite;position:relative;z-index:800;left:5px;top:5px;}.sm-btn-loading .sm-ico-wave,.sm-btn-success .sm-ico-wave,.sm-btn-fail .sm-ico-wave{width:26px;height:26px;border-radius:50%;position:relative;z-index:800;left:5px;top:5px;}.sm-btn-default .sm-ico-wave,.sm-btn-loading .sm-ico-wave,.sm-btn-success .sm-ico-wave{background-image:linear-gradient(0deg,#3a9afa,#00de76);}.sm-btn-loading .shield,.sm-btn-default .shield,.sm-btn-success .shield,.sm-btn-fail .shield{width:12px;height:14px;line-height:38px;left:12px;position:absolute;z-index:1000;top:-1px;}.sm-btn-default .shield{animation:shieldanimation 1.5s infinite;}.sm-btn-default .out-silder-circle{position:absolute;width:36px;height:36px;background:#c3efe8;line-height:36px;border-radius:50%;text-align:center;vertical-align:middle;top:0;}.sm-btn-loading .out-silder-circle{position:absolute;width:36px;height:36px;background:linear-gradient(rgba(0,222,118,.8),rgba(0,222,118,.4),rgba(0,222,118,.3),rgba(0,222,118,.2));line-height:36px;border-radius:50%;text-align:center;vertical-align:middle;top:0px;}.sm-btn-default .out-silder-circle{animation:defaultOutsideWave 1.5s ease infinite;}.sm-btn-loading .out-silder-circle{animation:loadingWave 1s infinite;}.sm-btn-default .right-tick,.sm-btn-loading .right-tick{display:none;}.sm-btn-default .wrong-cross,.sm-btn-loading .wrong-cross,.sm-btn-success .wrong-cross{display:none;}.sm-btn-success .out-silder-circle,.sm-btn-fail .out-silder-circle{position:absolute;width:36px;height:36px;line-height:36px;border-radius:50%;text-align:center;vertical-align:middle;top:0;}.sm-btn-success .out-silder-circle{animation:successWave 1s infinite;animation-iteration-count:1;background:#c3efe8;}.sm-btn-success .sm-txt{color:#01BF8F;animation:successTxt 1s;animation-iteration-count:1;}.sm-btn-success .rect-top:before,.sm-btn-fail .rect-top:before{content:'';display:block;height:200%;position:absolute;top:0px;left:0px;}.sm-btn-success .rect-top:before{border-left:1px solid #00de76;animation:successRectLeft .5s;animation-iteration-count:1;}.sm-btn-success .rect-top,.sm-btn-fail .rect-top{position:absolute;top:0;left:0px;}.sm-btn-success .rect-top{animation:successRectTop 1s;animation-delay:.5s;animation-iteration-count:1;animation-fill-mode:forwards;}.sm-btn-success .rect-top:after,.sm-btn-fail .rect-top:after{content:'';display:block;height:100%;position:absolute;top:-1px;right:0;}.sm-btn-success .rect-top:after{animation:successRectRight .5s;animation-delay:1.5s;animation-iteration-count:1;animation-fill-mode:forwards;}.sm-btn-success .rect-bottom,.sm-btn-fail .rect-bottom{position:absolute;left:0px;}.sm-btn-success .rect-bottom{animation:successRectBottom 1s;animation-delay:.5s;animation-iteration-count:1;animation-fill-mode:forwards;}.sm-btn-success .rect-bottom:after,.sm-btn-fail .rect-bottom:after{content:'';display:block;height:100%;position:absolute;top:1px;right:0;}.sm-btn-success .rect-bottom:after{animation:successRectBottomRight .5s;animation-delay:1.5s;animation-iteration-count:1;animation-fill-mode:forwards;}.sm-btn-success .right-tick{position:absolute;width:8px;height:6px;display:block;top:18px;left:16px;z-index:2000;}.sm-btn-success .right-tick .right-tick-left,.sm-btn-success .right-tick .right-tick-right{position:absolute;height:1px;background:#00de76;}.sm-btn-success .right-tick .right-tick-left{transform:rotate(45deg);transform-origin:left top;top:-1px;left:-1px;animation:rightTickLeft .3s;animation-iteration-count:1;animation-fill-mode:forwards;}.sm-btn-success .right-tick .right-tick-right{transform:rotate(315deg);transform-origin:left bottom;top:1px;left:1px;animation:rightTickRight .3s;animation-delay:.29s;animation-iteration-count:1;animation-fill-mode:forwards;}.sm-btn-fail .sm-ico-wave{background-image:linear-gradient(0deg,#FC3BAB,#F26216);}.sm-btn-fail .out-silder-circle{background:rgba(244,88,58,.25);animation:failWave 1s infinite;animation-iteration-count:1;}.sm-btn-fail .sm-txt{color:#F55742;animation:failTxt 1s;animation-iteration-count:1;}.sm-btn-fail .rect-top:before{border-left:1px solid #F55742;animation:failRectLeft .5s;animation-iteration-count:1;}.sm-btn-fail .rect-top{animation:failRectTop 1s;animation-delay:.5s;animation-iteration-count:1;animation-fill-mode:forwards;}.sm-btn-fail .rect-top:after{animation:failRectRight .5s;animation-delay:1.5s;animation-iteration-count:1;animation-fill-mode:forwards;}.sm-btn-fail .rect-bottom{animation:failRectBottom 1s;animation-delay:.5s;animation-iteration-count:1;animation-fill-mode:forwards;}.sm-btn-fail .rect-bottom:after{animation:failRectBottomRight .5s;animation-delay:1.5s;animation-iteration-count:1;animation-fill-mode:forwards;}.sm-btn-fail .right-tick{display:none;}.sm-btn-fail .wrong-cross{position:absolute;width:8px;height:6px;display:block;top:19px;left:16px;z-index:2000;}.sm-btn-fail .wrong-cross .wrong-cross-left,.sm-btn-fail .wrong-cross .wrong-cross-right{position:absolute;height:1px;background:#F55742;}.sm-btn-fail .wrong-cross .wrong-cross-left{transform:rotate(135deg);transform-origin:left bottom;top:-6px;left:4px;animation:wrongCrossLeft .3s;animation-iteration-count:1;animation-fill-mode:forwards;}.sm-btn-fail .wrong-cross .wrong-cross-right{transform:rotate(45deg);transform-origin:left top;top:-5px;left:0px;animation:wrongCrossRight .3s;animation-delay:.29s;animation-iteration-count:1;animation-fill-mode:forwards;}@keyframes shieldanimation{0%{transform:scale(1);}20%{transform:scale(1.15);}40%{transform:scale(1);}100%{transform:scale(1);}}@keyframes defaultWave{0%{transform:scale(1);}20%{transform:scale(1.23);}40%{transform:scale(1);}100%{transform:scale(1);}}@keyframes defaultOutsideWave{0%{transform:scale(1);}20%{transform:scale(0.8125);}40%{transform:scale(1);}100%{transform:scale(1);}}@keyframes loadingWave{0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}@keyframes successWave{0%{background:none;}100%{background:#c3efe8;}}@keyframes successTxt{0%{color:#333333;}100%{color:#01BF8F;}}@keyframes successRectTop{0%{width:0;border-top:1px solid #00de76;}100%{width:100%;border-top:1px solid #00de76;}}@keyframes successRectLeft{0%{transform:scaleY(0);}100%{transform:scaleY(1);}}@keyframes successRectRight{0%{height:0;border-right:1px solid #00de76;}100%{height:104%;border-right:1px solid #00de76;}}@keyframes successRectBottom{0%{width:0;border-bottom:1px solid #00de76;}100%{width:100%;border-bottom:1px solid #00de76;}}@keyframes successRectBottomRight{0%{top:100%;border-right:1px solid #00de76;}100%{top:0px;border-right:1px solid #00de76;}}@keyframes failWave{0%{background:none;}100%{background:rgba(244,88,58,.25);}}@keyframes failTxt{0%{color:#333333;}100%{color:#F55742;}}@keyframes failRectTop{0%{width:0;border-top:1px solid #F55742;}100%{width:100%;border-top:1px solid #F55742;}}@keyframes failRectLeft{0%{transform:scaleY(0);}100%{transform:scaleY(1);}}@keyframes failRectRight{0%{height:0;border-right:1px solid #F55742;}100%{height:110%;border-right:1px solid #F55742;}}@keyframes failRectBottom{0%{width:0;border-bottom:1px solid #F55742;}100%{width:100%;border-bottom:1px solid #F55742;}}@keyframes failRectBottomRight{0%{top:100%;border-right:1px solid #F55742;}100%{top:1px;border-right:1px solid #F55742;}}@keyframes wrongCrossLeft{0%{width:0px;}100%{width:7px;}}@keyframes wrongCrossRight{0%{width:0px;}100%{width:7px;}}@keyframes rightTickLeft{0%{width:0px;}100%{width:3px;}}@keyframes rightTickRight{0%{width:0px;}100%{width:6px;}}");
    var p = function(e, t, n) {
        return e.style[t] = n
    };
    i.prototype = {
        constructor: function(e) {
            this.options = l.mix({}, r.ic.default_options, e),
            this.height = this.options.height < r.ic.default_options.height ? r.ic.default_options.height : this.options.height,
            "100%" == this.options.width ? this.width = "100%" : this.width = this.options.width < r.ic.default_options.width ? r.ic.default_options.width : this.options.width,
            this.fulfilled = !1,
            this.successful = !1,
            this.clicked = !1
        },
        render: function() {
            var e = this
              , t = document.getElementById(this.options.renderTo.replace(/^#/, ""))
              , n = l.getElementsByClassName("sm-btn")
              , i = n.length + 1;
            this.wrapper_id = "SM_BTN_WRAPPER_" + i,
            this.id = "SM_BTN_" + i,
            this.text_id = "SM_TXT_" + i,
            this.pop_id = "SM_POP_" + i,
            this.pop_inner_id = "SM_POP_INNER_" + i,
            this.pop_close_id = "SM_POP_CLOSE_" + i;
            var a = "<div id=" + this.id + ' class="sm-btn sm-btn-default">\n    <div class="sm-ico">\n      <div class="right-tick">\n        <div class="right-tick-left"></div>\n        <div class="right-tick-right"></div>\n      </div>\n      <div class="wrong-cross">\n        <div class="wrong-cross-left"></div>\n        <div class="wrong-cross-right"></div>\n      </div>\n      <div class="shield">\n        <svg width="12px" height="14px" viewBox="0 0 200 255">\n          <g id="Page3" stroke="#eeeeee" strokeWidth="1" fill="none" fillRule="evenodd">\n            <g id="Group3" fill="#ffffff" fillRule="nonzero">\n              <path d="M192.215987,31.5402031 C190.026012,31.619176 187.868479,31.6497744 185.757709,31.6497744 L185.748648,31.6497744 C130.221833,31.6497744 105.760339,6.2755772 105.556627,6.05672609 L100.008184,0 L94.4518488,6.05672609 C94.2095573,6.32191195 68.3980713,33.5987437 7.78430533,31.5402029 L2.8561292e-07,31.2753086 L0,146.302981 C0,176.418758 10.0841737,220.345176 97.2848165,253.952079 L100.000584,255 L102.715183,253.952079 C189.915826,220.345176 200,176.418467 200,146.302981 L200,31.2753086 L192.215987,31.5402031 Z"\n                id="Shape3"></path>\n            </g>\n          </g>\n        </svg>\n      </div>\n      <div class="sm-ico-wave"></div>\n      <div class="out-silder-circle"></div>\n    </div>\n    <span id=' + this.text_id + ' class="sm-txt">' + this.options.default_txt + '</span>\n    <div id="rectMask">\n      <div class="rect-top" id="rectTop"></div>\n      <div class="rect-bottom" id="rectBottom"></div>\n    </div>\n  </div>\n  <div id="sm-btn-bg">\n  </div>'
              , s = document.createElement("div");
            s.id = this.wrapper_id,
            l.addClass(s, "sm-btn-wrapper"),
            s.innerHTML = a,
            "100%" == this.width ? p(s.childNodes[0], "width", "100%") : p(s.childNodes[0], "width", this.width + "px"),
            p(s.childNodes[0], "height", this.height + "px"),
            p(s.childNodes[0], "lineHeight", this.height + "px"),
            t.appendChild(s);
            var o = document.getElementById(this.id)
              , r = document.getElementById("sm-btn-bg")
              , c = document.getElementById("rectMask")
              , d = document.getElementById("rectTop")
              , u = document.getElementById("rectBottom");
            "100%" == this.width ? p(r, "width", "100%") : p(r, "width", this.width + "px"),
            p(r, "height", this.height + "px"),
            p(r, "lineHeight", this.height + "px"),
            "100%" == this.width ? p(d, "width", "100%") : p(d, "width", this.width + "px"),
            p(d, "height", this.height / 2 + "px"),
            p(d, "lineHeight", this.height + "px"),
            "100%" == this.width ? p(u, "width", "100%") : p(u, "width", this.width + "px"),
            p(u, "height", this.height / 2 + "px"),
            p(u, "lineHeight", this.height + "px"),
            p(u, "top", this.height / 2 + 1 + "px"),
            "100%" == this.width ? p(c, "width", "calc(100% + 2px)") : p(c, "width", this.width + 2 + "px"),
            p(c, "width", this.width + 2 + "px"),
            p(c, "height", this.height + 2 + "px"),
            p(c, "lineHeight", this.height + 2 + "px"),
            l.addHandler(o, "click", function() {
                !e.clicked && !e.fulfilled && e.query(),
                !e.successful && e.fulfilled && e.reload()
            })
        },
        loadExt: function(e) {
            this.render()
        },
        getNVCVal: function() {
            var e = this;
            e.NVC_Data.a = e.options.appkey,
            e.NVC_Data.c = e.options.token,
            e.NVC_Data.d = e.options.scene,
            e.NVC_Data.h = e.options.trans || {};
            var t = e.NVC_Data;
            return t.b = e.__fy && e.__fy.getFYToken && e.__fy.getFYToken(e.__fy_options),
            t.h.umidToken = e.__fy && e.__fy.getFYToken && e.__fy.getUidToken(),
            e.NVC_Result.nvcPreRes && (t.e = e.NVC_Result.nvcPreRes.c),
            e.NVC_Result.sessionId && (t.f = e.NVC_Result.sessionId),
            e.NVC_Result.sig && (t.g = e.NVC_Result.sig),
            encodeURIComponent(JSON.stringify(t))
        },
        getNVCValAsync: function(e) {
            var t = this;
            t.NVC_Data.a = t.options.appkey,
            t.NVC_Data.c = t.options.token,
            t.NVC_Data.d = t.options.scene,
            t.NVC_Data.h = t.options.trans || {};
            var n = +new Date
              , i = setInterval(function() {
                var a = t.NVC_Data;
                a.b = t.__fy && t.__fy.getFYToken && t.__fy.getFYToken(t.__fy_options),
                a.h.umidToken = t.__fy && t.__fy.getFYToken && t.__fy.getUidToken(),
                (a.b || +new Date - n > 1e3) && (clearInterval(i),
                t.NVC_Result.nvcPreRes && (a.e = t.NVC_Result.nvcPreRes.c),
                t.NVC_Result.sessionId && (a.f = t.NVC_Result.sessionId),
                t.NVC_Result.sig && (a.g = t.NVC_Result.sig),
                e && e(encodeURIComponent(JSON.stringify(a))))
            }, 100)
        },
        getNC: function(e) {
            var t = this;
            e = e || {};
            var n = +new Date;
            t.options.popUp && popup.insertDom(1, t.options, n),
            AWSC.use("nc", function(i, a) {
                e.appkey = t.options.appkey,
                e.scene = t.options.scene,
                e.nvcToken = t.options.token,
                e.trans = t.options.trans,
                e.renderTo = t.options.renderTo,
                t.options.fontSize && (e.fontSize = t.options.fontSize),
                t.options.foreign && (e.foreign = t.options.foreign),
                t.options.language && (e.language = t.options.language),
                !e.customWidth && t.options.popUp && (e.width = 300),
                t.options.upLang && (e.upLang = t.options.upLang),
                e.success = function(e) {
                    t.NVC_Result.sessionId = e.sessionId,
                    t.NVC_Result.sig = e.sig,
                    t.options.popUp && popup.hideDom(1, n),
                    setTimeout(function() {
                        var e = document.getElementById(t.pop_id);
                        document.getElementById(t.wrapper_id).removeChild(e)
                    }, 1e3),
                    t.succeed(e)
                }
                ,
                e.fail = function(e) {
                    t.options.popUp && popup.hideDom(1, n),
                    setTimeout(function() {
                        var e = document.getElementById(t.pop_id);
                        document.getElementById(t.wrapper_id).removeChild(e)
                    }, 1e3),
                    t.fail(e)
                }
                ,
                e.error = function(e) {
                    t.options.popUp && popup.hideDom(1, n),
                    setTimeout(function() {
                        var e = document.getElementById(t.pop_id);
                        document.getElementById(t.wrapper_id).removeChild(e)
                    }, 1e3),
                    t.neterr(e)
                }
                ,
                t.nc = a.init(e)
            })
        },
        getSC: function() {
            var e = this
              , t = +new Date;
            e.options.popUp && popup.insertDom(2, e.NVC_Opt, t),
            e.SC_Opt = {
                elementID: [],
                is_Opt: "",
                type: "scrape",
                width: 300,
                height: 100,
                isEnabled: !0,
                timeout: 3e3,
                times: 3,
                language: "cn",
                foreign: 0,
                apimap: {},
                objects: ["https://img.alicdn.com/tps/TB1BT9jPFXXXXbyXFXXXXXXXXXX-80-80.png"]
            },
            AWSC.use("nc", function(n, i) {
                var a = l.mix(e.SC_Opt, e.options);
                a.callback = function(n) {
                    e.NVC_Result.sessionId = n.sessionId,
                    e.NVC_Result.sig = n.sig,
                    e.options.popUp && popup.hideDom(2, t),
                    e.options.nvcCallback && e.options.nvcCallback(e.getNVCVal())
                }
                ,
                e.sc = i.init(a)
            })
        },
        query: function() {
            var e = this;
            this.clicked = !0;
            var t = document.getElementById(this.id);
            l.removeClass(t, "sm-btn-default"),
            l.removeClass(t, "sm-btn-fail"),
            l.addClass(t, "sm-btn-loading");
            var n = this
              , i = document.getElementById(this.text_id);
            i.innerText = this.options.scaning_txt + "...";
            var a = 0
              , s = setInterval(function() {
                switch (a) {
                case 1:
                    i.innerText = e.options.scaning_txt + "";
                    break;
                case 2:
                    i.innerText = e.options.scaning_txt + ".";
                    break;
                case 3:
                    i.innerText = e.options.scaning_txt + "..";
                    break;
                case 4:
                    i.innerText = e.options.scaning_txt + "...",
                    a = 0
                }
                a++
            }, 300);
            n.getNVCValAsync(function(e) {
                l.jsonp({
                    url: r.ic.query_url,
                    data: {
                        a: decodeURIComponent(e),
                        v: .04
                    },
                    callback: "callback",
                    callbackName: "callback",
                    success: function(e) {
                        if (e.success) {
                            switch (e.result.code) {
                            case 100:
                            case 200:
                                e.result.result.token = n.options.token,
                                n.succeed(e.result.result);
                                break;
                            case 800:
                            case 900:
                                n.fail();
                                break;
                            case 400:
                                n.popNC("nc");
                                break;
                            case 600:
                                n.popNC("sc")
                            }
                            clearInterval(s)
                        } else
                            clearInterval(s),
                            n.fail()
                    },
                    fail: function() {
                        clearInterval(s),
                        n.neterr()
                    }
                })
            })
        },
        popNC: function(e) {
            this.fulfilled = !0;
            var t = this
              , n = document.createElement("div");
            n.id = this.pop_id,
            this.options.secvrf_layout ? l.addClass(n, "sm-pop-toplayer") : (l.addClass(n, "sm-pop"),
            "100%" == this.width ? p(n, "width", "calc(100% + 20px)") : p(n, "width", this.width + 20 + "px"),
            p(n, "left", "-10px"));
            var i = void 0
              , a = document.createElement("div");
            switch (a.id = this.pop_inner_id,
            l.addClass(a, "sm-pop-inner"),
            e) {
            case "sc":
            case "nc":
                p(n, "backgroundColor", ""),
                "sc" === e ? (i = (r.ic.sc_height > this.height ? r.ic.sc_height : this.height) + 20,
                this.options.secvrf_layout || (p(n, "height", i + "px"),
                p(n, "lineHeight", i + "px"),
                p(n, "top", -(i - this.height) / 2 + "px"))) : (i = (r.ic.nc_height > this.height ? r.ic.nc_height : this.height) + 40,
                this.options.secvrf_layout || (p(n, "height", i + "px"),
                p(n, "lineHeight", i + "px"),
                p(n, "top", -(i - this.height) / 2 + "px"))),
                "sc" === e ? p(a, "top", (i - r.ic.sc_height) / 2 + 10 + "px") : p(a, "top", (i - r.ic.nc_height) / 2 + "px"),
                this.options.secvrf_layout ? p(a, "left", (window.innerWidth - 300) / 2 + "px") : p(a, "left", "10px"),
                n.appendChild(a),
                t.options.renderTo = "#" + this.pop_inner_id,
                document.getElementById(this.wrapper_id).appendChild(n),
                "nc" === e ? t.getNC() : t.getSC()
            }
        },
        reload: function() {
            var e = document.getElementById(this.id);
            this.successful = !1,
            this.fulfilled = !1,
            l.removeClass(e, "sm-btn-success"),
            l.removeClass(e, "sm-btn-fail"),
            l.addClass(e, "sm-btn-default"),
            this.query()
        },
        reset: function() {
            var e = document.getElementById(this.id);
            this.successful = !1,
            l.removeClass(e, "sm-btn-success"),
            l.removeClass(e, "sm-btn-fail"),
            l.addClass(e, "sm-btn-default"),
            document.getElementById(this.text_id).innerText = this.options.default_txt,
            this.NVC_Data && this.NVC_Data.f && (this.NVC_Data.f = null),
            this.NVC_Data && this.NVC_Data.g && (this.NVC_Data.g = null),
            this.NVC_Data && this.NVC_Data.e && (this.NVC_Data.e = null),
            this.NVC_Data && this.NVC_Data.b && (this.NVC_Data.b = null),
            this.NVC_Data && this.NVC_Data.h && (this.NVC_Data.h = null),
            this.NVC_Result && this.NVC_Result.sessionId && (this.NVC_Result.sessionId = null),
            this.NVC_Result && this.NVC_Result.sig && (this.NVC_Result.sig = null),
            this.fulfilled = !0
        },
        succeed: function(e) {
            var t = document.getElementById(this.id);
            this.successful = !0,
            l.removeClass(t, "sm-btn-loading"),
            l.removeClass(t, "sm-btn-fail"),
            l.addClass(t, "sm-btn-success"),
            document.getElementById(this.text_id).innerText = this.options.success_txt,
            this.fulfilled = !0,
            this.options.success && this.options.success(e)
        },
        fail: function(e) {
            var t = document.getElementById(this.id);
            this.successful = !1,
            l.removeClass(t, "sm-btn-loading"),
            l.removeClass(t, "sm-btn-success"),
            l.addClass(t, "sm-btn-fail"),
            document.getElementById(this.text_id).innerText = this.options.fail_txt,
            this.fulfilled = !0,
            this.options.fail && this.options.fail(e)
        },
        neterr: function(e) {
            var t = document.getElementById(this.id);
            this.successful = !1,
            l.removeClass(t, "sm-btn-loading"),
            l.removeClass(t, "sm-btn-success"),
            l.addClass(t, "sm-btn-fail"),
            document.getElementById(this.text_id).innerText = this.options.neterr_txt,
            this.fulfilled = !0,
            this.options.error && this.options.error(e)
        },
        init: function() {
            this.loadExt()
        }
    };
    var u = {
        TEST_PASS: 200,
        TEST_NC_PASS: 4e3,
        TEST_NC_BLOCK: 400300,
        TEST_SC_PASS: 6e3,
        TEST_SC_BLOCK: 600300,
        TEST_BLOCK: 800,
        init: function(e) {
            e = e || {},
            s(e),
            c.initializationReport(e);
            var t = new i(e);
            return t.init(),
            {
                reset: function() {
                    return t.reset()
                },
                getNC: function(e) {
                    return t.getNC(e)
                },
                getNVCVal: function() {
                    return t.getNVCVal()
                },
                getNVCValAsync: function(e) {
                    return t.getNVCValAsync(e)
                }
            }
        }
    };
    e.exports = u
}
, function(e, t, n) {
    "use strict";
    function i() {
        for (var e = "https://at.alicdn.com/t/font_1465353706_4784257", t = '@charset "utf-8";@font-face{font-family:\'nc_iconfont\';src:url("' + e + '.eot");src:url("' + e + ".eot?#iefix\") format('embedded-opentype'),url(\"" + e + ".woff\") format('woff'),url(\"" + e + ".ttf\") format('truetype'),url(\"" + e + ".svg#iconfont\") format('svg')}.nc-container div#nc-loading-circle{background:transparent;width:20px;height:20px;display:inline-block;position:relative;vertical-align:middle}.nc-container div#nc-loading-circle .sk-circle{background:transparent;width:100%;height:100%;position:absolute;left:0;top:0}.nc-container #nc-loading-circle .sk-circle:before{content:'';display:block;margin:0 auto;width:15%;height:15%;background-color:#818181;border-radius:100%;-webkit-animation:sk-circleFadeDelay 1.2s infinite ease-in-out both;animation:sk-circleFadeDelay 1.2s infinite ease-in-out both}", n = 2; n <= 12; n++) {
            var i = 30 * (n - 1);
            t += ".nc-container #nc-loading-circle .sk-circle" + n + "{-webkit-transform:rotate(" + i + "deg);-ms-transform:rotate(" + i + "deg);transform:rotate(" + i + "deg)}";
            var a = 1.2 - .1 * (n - 1);
            t += ".nc-container #nc-loading-circle .sk-circle" + n + ":before{-webkit-animation-delay:-" + a + "s;animation-delay:-" + a + "s}"
        }
        t += '@-webkit-keyframes sk-circleFadeDelay{0%,39%,100%{opacity:0}40%{opacity:1}}@keyframes sk-circleFadeDelay{0%,39%,100%{opacity:0}40%{opacity:1}}.nc-container .scale_text2 #nc-loading-circle .sk-circle:before{background-color:#fff}.nc_iconfont{font-family:"nc_iconfont";color:#ff3f08;font-style:normal}.nc-container .nc_wrapper .errloading{text-align:center;border:#faf1d5 1px solid;text-indent:3px;background-image:none;width:auto;line-height:20px;padding:7px 5px 8px 5px;color:#ef9f06;}.nc-container .nc_wrapper .errloading a{color:#30a7fc}.button_move{transition:left .5s;-moz-transition:left .5s;-webkit-transition:left .5s;-o-transition:left .5s}.bg_move{transition:width .5s;-moz-transition:width .5s;-webkit-transition:width .5s;-o-transition:width .5s}.nc-container .nc_wrapper{width:300px;}.nc_scale{width:auto;height:34px;background:#e8e8e8;position:relative;margin:0;padding:0}.nc-container .nc_scale div{height:auto}.nc-container .nc_scale ul{list-style:none}.nc-container .nc_scale .btn_slide{color:#737383;background-image:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.nc-container .nc_scale span{text-align:center;width:40px;height:32px;line-height:32px;border:1px solid #ccc;position:absolute;left:0;cursor:move;background:#fff;z-index:2}.nc-container .nc_scale span.nc-lang-cnt{*line-height:34px;float:none;width:auto;height:auto;*height:34px;border:none;position:static;cursor:inherit;background:none;z-index:0;display:inline}@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){.nc_scale span{height:32px}}.nc-container .nc_wrapper .errloading .icon_warn{cursor:default;color:#ff3f08;float:left;background:transparent;z-index:3}.nc-container .nc_scale .btn_ok{cursor:default;line-height:34px;text-align:center;font-size:20px;background:#fff;z-index:3;color:#76c61d}.nc-container .nc_scale .nc_ok,.nc-container .nc_scale .nc_bg{background:#7ac23c}.nc-container .nc_scale .nc_bg{position:absolute;height:100%;_height:34px;left:0;width:10px}.nc-container .nc_scale .scale_text{width:100%;height:100%;text-align:center;position:absolute;z-index:1;background:transparent;color:#9c9c9c;line-height:34px;cursor:pointer}.nc-container .nc_scale .scale_text2{text-align:left;color:#fff;text-indent:10px}.nc-container .nc_scale .scale_text2 b{padding-left:0;font-weight:normal}.nc-container .nc_scale .scale_text.scale_loading_text{text-align:center}.scale_text i{font-style:normal;border:none;position:static;cursor:default;color:#fffc00;background:none;display:inline;width:100%}.nc-lang-ar_MA,.nc-lang-ar_SA,.nc-lang-iw_HE,.nc-lang-iw_IL{text-align:right;*text-align:left;}.nc-lang-ar_MA .nc_scale .scale_text2,.nc-lang-ar_SA .nc_scale .scale_text2,.nc-lang-iw_HE .nc_scale .scale_text2,.nc-lang-iw_IL .nc_scale .scale_text2{text-align:right;}.nc-lang-ar_MA .nc_scale .scale_text2 span,.nc-lang-ar_SA .nc_scale .scale_text2 span,.nc-lang-iw_HE .nc_scale .scale_text2 span,.nc-lang-iw_IL .nc_scale .scale_text2 span{*display:inline-block;padding:0 56px 0 0}.nc-lang-ar_MA span.nc-lang-cnt,.nc-lang-ar_SA span.nc-lang-cnt,.nc-lang-iw_HE span.nc-lang-cnt,.nc-lang-iw_IL span.nc-lang-cnt{text-align:right;direction:rtl}.nc-container{font-size:18px;-ms-touch-action:none;touch-action:none;}.nc-container p{margin:0;padding:0;display:inline}.nc-container .scale_text.scale_text span[data-nc-lang="SLIDE"]{display:inline-block;width:100%}.nc-container .scale_text.scale_text.slidetounlock span[data-nc-lang="SLIDE"]{background:-webkit-gradient(linear,left top,right top,color-stop(0,#4d4d4d),color-stop(.4,#4d4d4d),color-stop(.5,#fff),color-stop(.6,#4d4d4d),color-stop(1,#4d4d4d));-webkit-background-clip:text;-webkit-text-fill-color:transparent;-webkit-animation:slidetounlock 3s infinite;-webkit-text-size-adjust:none}.nc-container .nc_scale .nc-align-center.scale_text2{text-align:center;text-indent:-42px}@-webkit-keyframes slidetounlock{0%{background-position:-200px 0}100%{background-position:200px 0}}';
        var s = f.createElement("style");
        if (f.getElementsByTagName("head")[0].appendChild(s),
        s.styleSheet)
            s.styleSheet.disabled || (s.styleSheet.cssText = t);
        else
            try {
                s.innerHTML = t
            } catch (e) {
                s.innerText = t
            }
    }
    function a() {
        var e = '<div id="nc-loading-circle" class="nc-loading-circle">';
        if (!c.isIEX(8) && !c.isIEX(9))
            for (var t = 1; t < 13; t++)
                e += '<div class="sk-circle' + t + ' sk-circle"></div>';
        return e += "</div>"
    }
    function s(e) {
        function t() {
            function t() {
                !o.jsReady && o.__fy && (o.jsReady = !0,
                n())
            }
            function s() {
                !o.sgnReady && o.__et && (o.sgnReady = !0)
            }
            o.nc_wrapper.innerHTML = '<div id="nc_' + o.wrapperId + '__n1t_loading" class="nc_scale"><div id="nc_' + o.wrapperId + '__bg" class="nc_bg" style="width: 0px;"></div><div id="nc_' + o.wrapperId + '__scale_text_loading" class="scale_text"><span class="nc-lang-cnt"><b>' + l.getLanuage(e, "LOADING") + "</b></span>" + a() + "</div>",
            d.loadFY(o, function(e) {
                t()
            }, function(e) {
                i(g)
            }),
            d.loadET(o, function() {
                s()
            })
        }
        function n() {
            
            function t(t) {
                function i() {
                    return m()
                }
                
                window.ifunction = i
                function s(e) {
                    x || (x = !0);
                    var t = (e || u.event).clientX
                      , a = Math.min(S, Math.max(-2, R + (t - v)));
                    if (k.style.left = a + "px",
                    n(Math.round(100 * Math.max(0, a / S)), a),
                    t >= N + C.offsetWidth && (a < S || t - R < S))
                        return void d.call(this);
                    var s = c.getClientRect(k).left;
                    i()
                    a !== S && t - s - y !== S || i()
                }
                function d() {
                    parseInt(k.style.left) < S && (c.addClass(k, "button_move"),
                    c.addClass(b, "bg_move"),
                    k.style.left = "0px",
                    n(0, 0),
                    setTimeout(function() {
                        c.removeClass(k, "button_move"),
                        c.removeClass(b, "bg_move")
                    }, 500)),
                    c.removeEvt(this, "touchmove", h),
                    c.removeEvt(f, "touchmove", h),
                    c.removeEvt(f, "mousemove", s),
                    c.removeEvt(f, "mouseup", d)
                }
                function p(e) {
                    d.call(this, e.touches[0])
                }
                function h(e) {
                    e.preventDefault(),
                    s.call(this, e.touches[0])
                }
                try {
                    var g = document.getElementsByClassName("nc_iconfont btn_slide")
                      , _ = g && g[0] && g[0].getBoundingClientRect ? g[0].getBoundingClientRect() : {
                        x: "",
                        y: "",
                        width: "",
                        height: "",
                        top: "",
                        bottom: "",
                        left: "",
                        right: ""
                    };
                    o.options.trans = o.options.trans || {},
                    o.options.trans.ncbtn = _.x + "|" + _.y + "|" + _.width + "|" + _.height + "|" + _.top + "|" + _.bottom + "|" + _.left + "|" + _.right
                } catch (t) {
                    o.options.trans.ncbtn = "|||||||"
                }
                o.__fy.fyObj.startRecord();
                var x = !1
                  , v = (t || u.event).clientX
                  , y = k.offsetWidth
                  , S = C.offsetWidth - y
                  , R = k.offsetLeft
                  , N = c.getClientRect(C).left;
                c.addHandler(f, "mousemove", s),
                c.addHandler(f, "mouseup", d),
                c.addHandler(f, "touchmove", h),
                c.addHandler(f, "touchend", p)
            }
            function n(e, t) {
                S.style.width = Math.max(0, t) + k.offsetWidth / 2 + "px"
            }
            function r(e) {
                e.preventDefault(),
                t.call(this, e.touches[0])
            }
            function d(e) {
                for (var t = e.offsetLeft, n = e.offsetParent; null !== n; )
                    t += n.offsetLeft,
                    n = n.offsetParent;
                return t
            }
            function g(e) {
                for (var t = e.offsetTop, n = e.offsetParent; null !== n; )
                    t += n.offsetTop,
                    n = n.offsetParent;
                return t
            }
            function m() {
                return o.__fy.getFYToken(o.__fy_options)
            }
            
            function _(t) {
                k.className = "nc_iconfont btn_ok",
                k.innerHTML = "&#xe60b;",
                w.innerHTML = '<span class="nc-lang-cnt" data-nc-lang="SLIDE"><b>' + l.getLanuage(e, "SUCCESS") + "</b></span>",
                e.success && e.success(t)
            }
            function x(t) {
                if (t.success) {
                    if (0 === t.result.code) {
                        k.className = "nc_iconfont btn_ok",
                        k.innerHTML = "&#xe60b;",
                        w.innerHTML = '<span class="nc-lang-cnt" data-nc-lang="SLIDE"><b>' + l.getLanuage(e, "SUCCESS") + "</b></span>";
                        var n = {
                            sig: t.result.value,
                            sessionId: t.result.csessionid,
                            token: e.token
                        };
                        e.success && e.success(n)
                    } else if (300 === t.result.code || 69634 === t.result.code || 8778 === t.result.code || 8776 === t.result.code) {
                        var a = function(e, t, n) {
                            for (var i = 0, a = t, s = e.length; a < s; )
                                i <<= 3,
                                i += e.charCodeAt(a),
                                a += n;
                            i < 0 && (i = 0 - i);
                            for (var o = "0123456789abcdefghijkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ", r = ""; i >= 58; ) {
                                var c = i % 58;
                                r = o[c] + r,
                                i = (i - c) / 58
                            }
                            r += o[(new Date).getDate()];
                            var l = r.length;
                            return l > 6 && (r = r.substr(l - 6, l - 1)),
                            r
                        }(e.token, 0, 1);
                        8778 === t.result.code ? s(a, 1) : 8776 === t.result.code ? s(a, 2) : s(a, 0)
                    }
                } else
                    i(t.success)
            }
            o.nc_wrapper.innerHTML = "";
            var v = f.createElement("div");
            v.id = "nc_" + o.wrapperId + "_n1t",
            v.className = "nc_scale";
            var b = f.createElement("div");
            b.id = "nc_" + o.wrapperId + "__bg",
            b.className = "nc_bg",
            b.style.width = "0px",
            v.appendChild(b);
            var y = f.createElement("span");
            y.id = "nc_" + o.wrapperId + "_n1z",
            y.className = "nc_iconfont btn_slide",
            y.ariaLabel = "\u6ed1\u5757",
            y.tabIndex = 0,
            y.role = "button",
            y.style.left = "0px",
            y.innerHTML = "\ue601",
            v.appendChild(y);
            var w = f.createElement("div");
            w.id = "nc_" + o.wrapperId + "__scale_text",
            w.className = "scale_text slidetounlock",
            w.innerHTML = '<span class="nc-lang-cnt"  data-nc-lang="SLIDE">' + l.getLanuage(e, "SLIDE") + "</span>",
            v.appendChild(w),
            o.nc_wrapper.appendChild(v);
            var C = v
              , k = y
              , S = C.getElementsByTagName("DIV")[0];
            k.onmousedown = t,
            c.addHandler(k, "touchstart", r),
            C.onselectstart = function() {
                return !1
            }
        }
        
        function i(t) {
            o.nc_wrapper.innerHTML = "<div id = `nc_" + o.wrapperId + '_refresh1` class="errloading"><i id = `nc_' + o.wrapperId + '_refresh2` class="nc_iconfont icon_warn">&#xe60a;</i><span class="nc-lang-cnt" data-nc-lang="SLIDE">' + l.getLanuage(e, "ERROR") + "</span>" + (e.hideErrorCode ? "" : '<span class="nc-errcode">(' + t + ")</span>") + "</div>",
            c.addHandler(o.nc_wrapper, "mousedown", function e() {
                c.removeEvt(o.nc_wrapper, "mousedown", e),
                o.reset()
            }),
            c.addHandler(o.nc_wrapper, "touchend", function e() {
                c.removeEvt(o.nc_wrapper, "touchend", e),
                o.reset()
            }),
            e.error && e.error(t)
        }
        function s(t, n) {
            var i = "FAIL";
            1 === n && (i = "BXMARK"),
            2 === n && (i = "BXFASTMARK"),
            o.nc_wrapper.innerHTML = "<div id = `nc_" + o.wrapperId + '_refresh1` class="errloading"><i id = `nc_' + o.wrapperId + '_refresh2` class="nc_iconfont icon_warn">&#xe60a;</i>' + l.getLanuage(e, i) + (e.hideErrorCode ? "" : "(error:" + t + ")") + "</div>",
            c.addHandler(o.nc_wrapper, "mousedown", function e() {
                c.removeEvt(o.nc_wrapper, "mousedown", e),
                o.reset()
            }),
            c.addHandler(o.nc_wrapper, "touchend", function e() {
                c.removeEvt(o.nc_wrapper, "touchend", e),
                o.reset()
            }),
            e.fail && e.fail(t)
        }
        var o = this;
        o.options = e,
        o.wrapperId = ++u.__awscnc_wrapper_id__,
        function(t) {
            var n = c.query(t);
            o.nc_container = n,
            n.className = "sm-pop-inner nc-container",
            e.hide && (n.style.display = "none");
            var i = f.createElement("div");
            i.className = "nc_" + o.wrapperId + "_nocaptcha",
            i.id = "nc_" + o.wrapperId + "_nocaptcha",
            n.appendChild(i),
            c.insertCSS(".nc-container #nc_" + o.wrapperId + "_wrapper{width:" + ("auto" === e.width ? "auto" : e.width + "px") + ";height:" + e.height + "px;font-size:" + e.fontSize + "px;line-height:" + e.height + "px;}.nc-container .nc_" + o.wrapperId + "_n1z{width:" + (e.height / 34 * 42 | 0) + "px;}");
            var a = f.createElement("div");
            a.id = "nc_" + o.wrapperId + "_wrapper",
            a.className = "nc_wrapper",
            i.appendChild(a),
            o.nc_wrapper = a
        }(e.renderTo),
        o.initLoading = t,
        t(o.nc_wrapper)
    }
    function o(e) {
        if ("CF_APP_WAF" != e.appkey || e.foreign || (e.apimap = {
            analyze: "https://cf-app-waf.cfc.aliyuncs.com/nocaptcha/analyze.jsonp",
            initialize: "https://cf-app-waf.cfc.aliyuncs.com/nocaptcha/initialize.jsonp"
        }),
        "de" == e.serviceLocation && (e.apimap = {
            analyze: "https://cfdus.aliyun.com/nocaptcha/analyze.jsonp",
            initialize: "https://cfdus.aliyun.com/nocaptcha/initialize.jsonp"
        }),
        e.apimap) {
            var t = e.foreign ? "us" : "cn";
            p.URL[t].analyze = e.apimap.analyze ? e.apimap.analyze : p.URL[t].analyze,
            p.URL[t].initialize = e.apimap.initialize ? e.apimap.initialize : p.URL[t].initialize
        }
        if (e.test)
            e.appkey = "CF_APP_1",
            e.scene = "register",
            e.trans = e.trans || {},
            e.trans.key1 = m.TEST_PASS,
            e.test === m.TEST_BLOCK && (e.trans.key1 = m.TEST_BLOCK);
        else if ("string" != typeof e.appkey || "string" != typeof e.scene) {
            var n = window.console;
            n && n.error("Invalid NC params: appkey=" + e.appkey + " scene=" + e.scene)
        }
        if ("auto" !== e.width && (e.width = e.width > 300 ? e.width : 300),
        34 !== e.height && (e.height = e.height > 34 ? e.height : 34),
        e.fontSize ? e.fontSize = e.fontSize > 12 ? e.fontSize : 12 : e.fontSize = e.height / 34 * 12 | 0,
        e.timeout = e.timeout || 3e3,
        e.language = e.language || "cn",
        e.times = e.times || 5,
        e.hideErrorCode = !!e.hideErrorCode,
        e.token || (e.token = e.nvcToken || [e.appkey, e.scene, +new Date, Math.random()].join(":")),
        !e.replaceCallback && "function" != typeof e.success) {
            var n = u.console;
            n && n.error("Invalid NC params: success=" + e.success)
        }
    }
    function r(e) {
        function t() {
            var a = !(!n || !n.innerHTML) && -1 !== n.innerHTML.indexOf("data-nc-lang")
              , s = n && n.innerHTML ? n.innerHTML.replace(/[ \r\n\"<\/div>]/g, "") : "null";
            a && u.MutationObserver && (c.getNCPunish(e, "initSuccess", s),
            i.disconnect()),
            !u.MutationObserver && a && c.getNCPunish(e, "initSuccess", s),
            a || u.MutationObserver || setTimeout(t, 2e3)
        }
        var n;
        try {
            n = f.querySelector(e.renderTo) || f.querySelector("#" + e.renderTo)
        } catch (t) {
            n = void 0,
            c.getNCPunish(e, "initDomError", "targetNode is undefined")
        }
        if (u.MutationObserver && n) {
            var i = new MutationObserver(t)
              , a = {
                childList: !0,
                subtree: !0,
                attributes: !0
            };
            i.observe(n, a)
        } else
            setTimeout(t, 2e3)
    }
    var c = n(2)
      , l = n(7)
      , d = n(1)
      , p = n(0)
      , u = (n(3),
    window)
      , f = document;
    u.__awscnc_wrapper_id__ = u.__awscnc_wrapper_id__ || 0;
    var h = "00"
      , g = "04";
    s.prototype = {
        reset: function() {
            this.jsReady = !1;
            var e = this.options;
            e.token || (e.token = e.nvcToken || [e.appkey, e.scene, +new Date, Math.random()].join(":")),
            this.nc_wrapper && this.initLoading()
        },
        show: function() {
            this.nc_container.style.display = "block"
        },
        hide: function() {
            this.nc_container.style.display = "none"
        },
        setTrans: function(e) {},
        getToken: function() {
            return this.options.token
        },
        getFY: function() {
            return this.__fy.getFYToken({
                MaxMTLog: 300,
                MTInterval: 4,
                MinMTDwnLog: 30,
                MaxKSLog: 14,
                MaxFocusLog: 6,
                MaxNGPLog: 200,
                NGPInterval: 4,
                Enable: 3,
                location: "cn",
                _umopt_npfp: 1
            })
        }
    };
    var m = {
        TEST_PASS: "code0",
        TEST_BLOCK: "code300",
        init: function(e) {
            e = e || {};
            try {
                i(),
                o(e),
                e.reportUrl && r(e),
                d.initializationReport(e);
                var t = new s(e)
            } catch (t) {
                e.reportUrl && c.getNCPunish(e, "initError", t.message)
            }
            return {
                reset: function() {
                    return t.reset()
                },
                show: function() {
                    return t.show()
                },
                hide: function() {
                    return t.hide()
                },
                setTrans: function(e) {
                    return t.setTrans(e)
                },
                getToken: function() {
                    return t.getToken()
                },
                getFY: function() {
                    return t.getFY()
                }
            }
        }
    };
    e.exports = m
}
, function(e, t, n) {
    "use strict";
    function i(e) {
        function t() {
            !n.jsReady && n.__fy && (n.jsReady = !0,
            a(n))
        }
        var n = this;
        n.options = e,
        n.NVC_Result = {},
        o.loadFY(n, function(e) {
            t()
        }, function(t) {
            e.error && e.error(l)
        }),
        n.NVC_Data = {
            a: e.appkey,
            c: e.token,
            d: e.scene,
            j: {
                test: 1
            }
        },
        e.trans && (n.NVC_Data.h = e.trans)
    }
    function a(e) {
        c.jsonp({
            url: "https://cf.aliyun.com/nvc/nvcPrepare.jsonp",
            callback: "callback",
            data: {
                a: JSON.stringify({
                    a: e.options.appkey,
                    d: e.options.scene,
                    c: e.options.token
                })
            },
            success: function(t) {
                t.result && (t.result.result && (e.NVC_Result.nvcPreRes = t.result.result),
                e.options.capCode = t.result.code,
                400 === e.options.capCode ? e.getNC() : 600 === e.options.capCode && e.getSC())
            }
        })
    }
    function s(e) {
        if (e.apimap) {
            var t = e.foreign ? "us" : "cn";
            r.URL[t].analyze = e.apimap.analyze ? e.apimap.analyze : r.URL[t].analyze,
            r.URL[t].initialize = e.apimap.initialize ? e.apimap.initialize : r.URL[t].initialize
        }
        if (e.test)
            e.appkey = "CF_APP_1",
            e.scene = "nvc_register",
            e.trans = e.trans || {},
            e.trans.nvcCode = 200,
            e.trans.key1 = "code0",
            e.test === d.TEST_BLOCK ? (e.trans.nvcCode = 800,
            e.trans.key1 = "code300") : e.test === d.TEST_NC_PASS ? (e.trans.nvcCode = 400,
            e.trans.key1 = "code0") : e.test === d.TEST_NC_BLOCK ? (e.trans.nvcCode = 400,
            e.trans.key1 = "code300") : e.test === d.TEST_SC_PASS ? (e.trans.nvcCode = 600,
            e.trans.key1 = "code0") : e.test === d.TEST_SC_BLOCK && (e.trans.nvcCode = 600,
            e.trans.key1 = "code300");
        else if ("string" != typeof e.appkey || "string" != typeof e.scene) {
            var n = window.console;
            n && n.error("Invalid NVC params: appkey=" + e.appkey + " scene=" + e.scene)
        }
        e.language = e.language || "cn",
        e.token = e.token || [e.appkey, e.scene, +new Date, Math.random()].join(":")
    }
    var o = n(1)
      , r = n(0)
      , c = n(2)
      , l = (window,
    document,
    "04");
    i.prototype = {
        getNVCVal: function() {
            var e = this;
            e.NVC_Data.a = e.options.appkey,
            e.NVC_Data.c = e.options.token,
            e.NVC_Data.d = e.options.scene,
            e.NVC_Data.h = e.options.trans || {};
            var t = e.NVC_Data;
            return t.b = e.__fy && e.__fy.getFYToken && e.__fy.getFYToken(e.__fy_options),
            t.h.umidToken = e.__fy && e.__fy.getFYToken && e.__fy.getUidToken(),
            e.NVC_Result.nvcPreRes && (t.e = e.NVC_Result.nvcPreRes.c),
            e.NVC_Result.sessionId && (t.f = e.NVC_Result.sessionId),
            e.NVC_Result.sig && (t.g = e.NVC_Result.sig),
            encodeURIComponent(JSON.stringify(t))
        },
        getNVCValAsync: function(e) {
            var t = this;
            t.NVC_Data.a = t.options.appkey,
            t.NVC_Data.c = t.options.token,
            t.NVC_Data.d = t.options.scene,
            t.NVC_Data.h = t.options.trans || {};
            var n = +new Date
              , i = setInterval(function() {
                var a = t.NVC_Data;
                a.b = t.__fy && t.__fy.getFYToken && t.__fy.getFYToken(t.__fy_options),
                a.h.umidToken = t.__fy && t.__fy.getFYToken && t.__fy.getUidToken(),
                (a.b || +new Date - n > 1e3) && (clearInterval(i),
                t.NVC_Result.nvcPreRes && (a.e = t.NVC_Result.nvcPreRes.c),
                t.NVC_Result.sessionId && (a.f = t.NVC_Result.sessionId),
                t.NVC_Result.sig && (a.g = t.NVC_Result.sig),
                e && e(encodeURIComponent(JSON.stringify(a))))
            }, 100)
        },
        getNC: function(e) {
            if (e = e || {},
            e.appkey || e.scene || e.test) {
                var t = window.console;
                t && t.error("\u5728\u4e8c\u6b21\u9a8c\u8bc1\u4e2d\uff0c\u8bf7\u4e0d\u8981\u914d\u7f6e\u521d\u59cb\u5316\u53c2\u6570appkey\uff0cscene\uff0ctest\u7684\u503c")
            }
            var n = this;
            AWSC.use("nc", function(t, i) {
                e.appkey = n.options.appkey,
                e.scene = n.options.scene,
                e.nvcToken = n.options.token,
                e.trans = n.options.trans,
                e.success = function(e) {
                    n.NVC_Result.sessionId = e.sessionId,
                    n.NVC_Result.sig = e.sig,
                    n.options.success && n.options.success(n.getNVCVal())
                }
                ,
                e.fail = function(e) {
                    n.options.fail && n.options.fail(e)
                }
                ,
                e.error = function(e) {
                    n.options.error && n.options.error(e)
                }
                ,
                n.nc = i.init(e)
            })
        },
        getSC: function() {
            var e = this;
            e.SC_Opt = {
                elementID: [],
                is_Opt: "",
                type: "scrape",
                width: 300,
                height: 100,
                isEnabled: !0,
                timeout: 3e3,
                times: 3,
                language: "cn",
                foreign: 0,
                apimap: {},
                objects: ["https://img.alicdn.com/tps/TB1BT9jPFXXXXbyXFXXXXXXXXXX-80-80.png"]
            },
            AWSC.use("nc", function(t, n) {
                var i = c.extend(e.SC_Opt, e.options);
                i.nvcToken = e.options.token,
                i.test = void 0,
                i.success = function(t) {
                    e.NVC_Result.sessionId = t.sessionId,
                    e.NVC_Result.sig = t.sig,
                    e.options.success && e.options.success(e.getNVCVal())
                }
                ,
                i.fail = function(t) {
                    e.options.fail && e.options.fail(t)
                }
                ,
                e.sc = n.init(i)
            })
        },
        reset: function() {
            var e = this;
            e.NVC_Data && e.NVC_Data.f && (e.NVC_Data.f = null),
            e.NVC_Data && e.NVC_Data.g && (e.NVC_Data.g = null),
            e.NVC_Result && e.NVC_Result.sessionId && (e.NVC_Result.sessionId = null),
            e.NVC_Result && e.NVC_Result.sig && (e.NVC_Result.sig = null),
            e.nc && e.nc.reset()
        }
    };
    var d = {
        TEST_PASS: 200,
        TEST_NC_PASS: 4e3,
        TEST_NC_BLOCK: 400300,
        TEST_SC_PASS: 6e3,
        TEST_SC_BLOCK: 600300,
        TEST_BLOCK: 800,
        init: function(e) {
            e = e || {},
            s(e),
            o.initializationReport(e);
            var t = new i(e);
            return {
                getNVCVal: function() {
                    return t.getNVCVal()
                },
                getNVCValAsync: function(e) {
                    return t.getNVCValAsync(e)
                },
                getNC: function(e) {
                    return t.getNC(e)
                },
                getSC: function(e) {
                    return t.getSC(e)
                },
                reset: function() {
                    return t.reset()
                }
            }
        }
    };
    e.exports = d
}
, function(e, t, n) {
    "use strict";
    function i(e, t) {
        var n = e.language || a;
        return e.upLang && e.upLang[n] && e.upLang[n][t] ? e.upLang[n][t] : s[n] ? s[n][t] : s[a][t]
    }
    var a = "cn"
      , s = {
        cn: {
            SLIDE: "\u8bf7\u6309\u4f4f\u6ed1\u5757\uff0c\u62d6\u52a8\u5230\u6700\u53f3\u8fb9",
            SUCCESS: "\u9a8c\u8bc1\u901a\u8fc7",
            LOADING: "\u52a0\u8f7d\u4e2d",
            FAIL: "\u9a8c\u8bc1\u5931\u8d25\uff0c\u70b9\u51fb\u6846\u4f53\u91cd\u8bd5",
            ERROR: "\u7f51\u7edc\u4e0d\u7ed9\u529b\uff0c\u8bf7\u70b9\u51fb\u6846\u4f53\u91cd\u8bd5",
            BXMARK: "\u9a8c\u8bc1\u5931\u8d25\uff0c\u70b9\u51fb\u6846\u4f53\u91cd\u8bd5asiudoasjoid",
            BXFASTMARK: "\u64cd\u4f5c\u592a\u5feb\u5566\uff0c\u8bf7\u91cd\u8bd5"
        },
        zh_CN: {
            SLIDE: "\u8bf7\u6309\u4f4f\u6ed1\u5757\uff0c\u62d6\u52a8\u5230\u6700\u53f3\u8fb9",
            SUCCESS: "\u9a8c\u8bc1\u901a\u8fc7",
            LOADING: "\u52a0\u8f7d\u4e2d",
            FAIL: "\u9a8c\u8bc1\u5931\u8d25\uff0c\u70b9\u51fb\u6846\u4f53\u91cd\u8bd5",
            ERROR: "\u7f51\u7edc\u4e0d\u7ed9\u529b\uff0c\u8bf7\u70b9\u51fb\u6846\u4f53\u91cd\u8bd5",
            BXMARK: "\u9a8c\u8bc1\u5931\u8d25\uff0c\u70b9\u51fb\u6846\u4f53\u91cd\u8bd5",
            BXFASTMARK: "\u64cd\u4f5c\u592a\u5feb\u5566\uff0c\u8bf7\u91cd\u8bd5"
        },
        tw: {
            SLIDE: "\u8acb\u6309\u4f4f\u6ed1\u584a\uff0c\u62d6\u52d5\u5230\u6700\u53f3\u908a",
            SUCCESS: "\u9a57\u8b49\u901a\u904e",
            LOADING: "\u52a0\u8f09\u4e2d",
            FAIL: "\u9a57\u8b49\u5931\u6557\uff0c\u9ede\u64ca\u6846\u9ad4\u91cd\u8a66",
            ERROR: "\u7db2\u7d61\u4e0d\u7d66\u529b\uff0c\u8acb\u9ede\u64ca\u6846\u9ad4\u91cd\u8a66",
            BXMARK: "\u9a57\u8b49\u5931\u6557\uff0c\u9ede\u64ca\u6846\u9ad4\u91cd\u8a66",
            BXFASTMARK: "\u64cd\u4f5c\u592a\u5feb\u5566\uff0c\u8acb\u518d\u8a66\u4e00\u6b21"
        },
        en: {
            SLIDE: "Please slide to verify",
            SUCCESS: "Verified",
            LOADING: "Loading",
            FAIL: "Oops... something's wrong. Please refresh and try again.",
            ERROR: "Net Err. Please refresh, or feedback",
            BXMARK: "Oops... something's wrong. Please refresh and try again.",
            BXFASTMARK: "Oops... something's wrong. Please refresh and try again."
        },
        en_US: {
            SLIDE: "Please slide to verify",
            SUCCESS: "Verified",
            LOADING: "Loading",
            FAIL: "Oops... something's wrong. Please refresh and try again.",
            ERROR: "Net Err. Please refresh, or feedback",
            BXMARK: "Oops... something's wrong. Please refresh and try again.",
            BXFASTMARK: "Oops... something's wrong. Please refresh and try again."
        },
        ar_SA: {
            SLIDE: "\u064a\u0631\u062c\u0649 \u0627\u0644\u062a\u0645\u0631\u064a\u0631 \u0644\u0644\u062a\u062d\u0642\u0642",
            SUCCESS: "\u062a\u0645 \u0627\u0644\u062a\u062d\u0642\u0642",
            LOADING: "\u062c\u0627\u0631\u064a \u0627\u0644\u062a\u062d\u0645\u064a\u0644",
            FAIL: "\u0639\u0641\u0648\u0627... \u0634\u064a\u0621 \u0645\u0627 \u062e\u0637\u0623. \u064a\u0631\u062c\u0649 \u0627\u0644\u062a\u0646\u0634\u064a\u0637 \u0648\u0625\u0639\u0627\u062f\u0629 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629",
            ERROR: "\u062e\u0637\u0623 \u0628\u0627\u0644 \u0644\u0634 \u0643\u0629. \u064a\u0631\u062c\u0649 \u0627\u0644\u062a\u0646\u0634\u064a\u0637\u060c \u0623\u0648 \u0627\u0644\u062a\u0639\u0644\u064a\u0642",
            BXMARK: "\u0639\u0641\u0648\u0627... \u0634\u064a\u0621 \u0645\u0627 \u062e\u0637\u0623. \u064a\u0631\u062c\u0649 \u0627\u0644\u062a\u0646\u0634\u064a\u0637 \u0648\u0625\u0639\u0627\u062f\u0629 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629",
            BXFASTMARK: "\u0639\u0641\u0648\u0627... \u0634\u064a\u0621 \u0645\u0627 \u062e\u0637\u0623. \u064a\u0631\u062c\u0649 \u0627\u0644\u062a\u0646\u0634\u064a\u0637 \u0648\u0625\u0639\u0627\u062f\u0629 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629"
        },
        de_DE: {
            SLIDE: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bitte schieben Sie, um zu \xfcberpr\xfcfen",
            SUCCESS: "Verifiziert",
            LOADING: "Lade",
            FAIL: "Huch ... etwas ist schief gelaufen. Bitte aktualisieren Sie und versuchen Sie es erneut",
            ERROR: "Netzfehler. Bitte aktualisieren oder feedback angeben.",
            BXMARK: "Huch ... etwas ist schief gelaufen. Bitte aktualisieren Sie und versuchen Sie es erneut",
            BXFASTMARK: "Huch ... etwas ist schief gelaufen. Bitte aktualisieren Sie und versuchen Sie es erneut"
        },
        es_ES: {
            SLIDE: "Por favor, deslice para verificar",
            SUCCESS: "Verificado",
            LOADING: "Cargando",
            FAIL: "Vaya ... algo est\xe1 mal. Por favor actualizar y volver a intentar",
            ERROR: "Error de red. Por favor, actualice o inf\xf3rmenos",
            BXMARK: "Vaya ... algo est\xe1 mal. Por favor actualizar y volver a intentar",
            BXFASTMARK: "Vaya ... algo est\xe1 mal. Por favor actualizar y volver a intentar"
        },
        fr_FR: {
            SLIDE: "Faites glisser pour verifier ",
            SUCCESS: "V\xe9rifi\xe9",
            LOADING: "Chargement",
            FAIL: "Oups\u2026. Il y a eu un probl\xe8me. Actualisez et r\xe9essayez ",
            ERROR: "Erreur de r\xe9seau. Actualisez ou formuler des commentaires",
            BXMARK: "Oups\u2026. Il y a eu un probl\xe8me. Actualisez et r\xe9essayez ",
            BXFASTMARK: "Oups\u2026. Il y a eu un probl\xe8me. Actualisez et r\xe9essayez "
        },
        in_ID: {
            SLIDE: "Silahkan geser untuk memverifikasi",
            SUCCESS: "Terverifikasi",
            LOADING: "Memuat",
            FAIL: "Ups... Ada yang salah. Silakan refresh dan coba lagi",
            ERROR: "Kesalahan jaringan. Silakan refresh, atau umpan balik",
            BXMARK: "Ups... Ada yang salah. Silakan refresh dan coba lagi",
            BXFASTMARK: "Ups... Ada yang salah. Silakan refresh dan coba lagi"
        },
        it_IT: {
            SLIDE: "Per favore scorri per verificare",
            SUCCESS: "Verificato",
            LOADING: "Sto caricando",
            FAIL: "Oooops... C'\xe8 qualcosa che non va. Per favore rinfresca la pagina o riprova.",
            ERROR: "Errore della Rete. Per favore rinfresca la pagina o mandaci un commento.",
            BXMARK: "Oooops... C'\xe8 qualcosa che non va. Per favore rinfresca la pagina o riprova.",
            BXFASTMARK: "Oooops... C'\xe8 qualcosa che non va. Per favore rinfresca la pagina o riprova."
        },
        iw_HE: {
            SLIDE: "\u05d0\u05e0\u05d0 \u05d4\u05d7\u05dc\u05e7 \u05e2\u05dc \u05d4\u05de\u05e1\u05da \u05dc\u05d0\u05d9\u05de\u05d5\u05ea",
            SUCCESS: "\u05d0\u05d5\u05de\u05ea",
            LOADING: "\u05d8\u05d5\u05e2\u05df",
            FAIL: "\u05d0\u05d5\u05e4\u05e1... \u05d0\u05d9\u05e8\u05e2\u05d4 \u05ea\u05e7\u05dc\u05d4. \u05d9\u05e9 \u05dc\u05e8\u05e2\u05e0\u05df \u05d5\u05dc\u05e0\u05e1\u05d5\u05ea \u05e9\u05d5\u05d1",
            ERROR: "\u05e9\u05d2\u05d9\u05d0\u05ea \u05e8\u05e9\u05ea. \u05d9\u05e9 \u05dc\u05e8\u05e2\u05e0\u05df \u05d0\u05d5 \u05dc\u05e9\u05dc\u05d5\u05d7 \u05de\u05e9\u05d5\u05d1",
            BXMARK: "\u05d0\u05d5\u05e4\u05e1... \u05d0\u05d9\u05e8\u05e2\u05d4 \u05ea\u05e7\u05dc\u05d4. \u05d9\u05e9 \u05dc\u05e8\u05e2\u05e0\u05df \u05d5\u05dc\u05e0\u05e1\u05d5\u05ea \u05e9\u05d5\u05d1",
            BXFASTMARK: "\u05d0\u05d5\u05e4\u05e1... \u05d0\u05d9\u05e8\u05e2\u05d4 \u05ea\u05e7\u05dc\u05d4. \u05d9\u05e9 \u05dc\u05e8\u05e2\u05e0\u05df \u05d5\u05dc\u05e0\u05e1\u05d5\u05ea \u05e9\u05d5\u05d1"
        },
        ja_JP: {
            SLIDE: "\u30b9\u30e9\u30a4\u30c9\u3057\u3066\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044",
            SUCCESS: "\u691c\u8a3c",
            LOADING: "\u66f4\u65b0\u3057\u3066\u3044\u307e\u3059",
            FAIL: "\u4f55\u304b\u304c\u9593\u9055\u3044\u3067\u3001 \u66f4\u65b0\u3057\u3066 \u3082\u3046\u4e00\u5ea6\u3084\u308a\u76f4\u3057\u3057\u3066\u304f\u3060\u3055\u3044",
            ERROR: "Net Err.\u306f\u8aa4\u308b\u3002 \u66f4\u65b0\u3057\u3066 \u304f\u3060\u3055\u3044\u3002\u3042\u308b\u3044\u306f\u3001 \u30d5\u30a3\u30f3\u30c9\u30d0\u30c3\u30b0\u3092\u63d0\u4f9b\u3066\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
            BXMARK: "\u4f55\u304b\u304c\u9593\u9055\u3044\u3067\u3001 \u66f4\u65b0\u3057\u3066 \u3082\u3046\u4e00\u5ea6\u3084\u308a\u76f4\u3057\u3057\u3066\u304f\u3060\u3055\u3044",
            BXFASTMARK: "\u4f55\u304b\u304c\u9593\u9055\u3044\u3067\u3001 \u66f4\u65b0\u3057\u3066 \u3082\u3046\u4e00\u5ea6\u3084\u308a\u76f4\u3057\u3057\u3066\u304f\u3060\u3055\u3044"
        },
        ko_KR: {
            SLIDE: "\ubc00\uc5b4\uc11c \ud655\uc778\ud558\uae30",
            SUCCESS: "\ud655\uc778\ub428",
            LOADING: "\ub85c\ub529",
            FAIL: "\uc6c1\uc2a4\u2026\ubb34\uc5c7\uc778\uac00 \uc798\ubabb\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uc0c8\ub85c \uace0\uce58\uace0 \uc0c8\ub85c \uace0\uce58\uace0",
            ERROR: "\ub124\ud2b8 \uc624\ub958. \uc0c8\ub85c \uace0\uce68\ub610\ub294\ud53c\ub4dc\ubc31",
            BXMARK: "\uc6c1\uc2a4\u2026\ubb34\uc5c7\uc778\uac00 \uc798\ubabb\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uc0c8\ub85c \uace0\uce58\uace0 \uc0c8\ub85c \uace0\uce58\uace0",
            BXFASTMARK: "\uc6c1\uc2a4\u2026\ubb34\uc5c7\uc778\uac00 \uc798\ubabb\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uc0c8\ub85c \uace0\uce58\uace0 \uc0c8\ub85c \uace0\uce58\uace0"
        },
        nl_NL: {
            SLIDE: "Schuif om te bevestigen",
            SUCCESS: "Geverifieerd",
            LOADING: "Laden",
            FAIL: "Oeps\u2026er is iets fout. Vernieuw en probeer opnieuw",
            ERROR: "Netfout. vernieuw, of feedback",
            BXMARK: "Oeps\u2026er is iets fout. Vernieuw en probeer opnieuw",
            BXFASTMARK: "Oeps\u2026er is iets fout. Vernieuw en probeer opnieuw"
        },
        pt_BR: {
            SLIDE: "Por favor, deslize para verificar",
            SUCCESS: "Verificado",
            LOADING: "Carregando",
            FAIL: "Opa... Aconteceu um erro. Por favor, atualize e tente novamente",
            ERROR: "Erro de Rede. Por favor, atualize ou envie-nos uma mensagem sobre o erro",
            BXMARK: "Opa... Aconteceu um erro. Por favor, atualize e tente novamente",
            BXFASTMARK: "Opa... Aconteceu um erro. Por favor, atualize e tente novamente"
        },
        ru_RU: {
            SLIDE: "\u041f\u0440\u043e\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u043f\u0440\u0430\u0432\u043e",
            SUCCESS: "\u041f\u0440\u043e\u0432\u0435\u0440\u0435\u043d\u043e",
            LOADING: "\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430",
            FAIL: "\u041e\u0439, \u0447\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a. \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u0435 \u0438 \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437",
            ERROR: "\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u0435\u0442\u0438, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u0435 \u0438\u043b\u0438 \u043e\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439",
            BXMARK: "\u041e\u0439, \u0447\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a. \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u0435 \u0438 \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437",
            BXFASTMARK: "\u041e\u0439, \u0447\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a. \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u0435 \u0438 \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437"
        },
        th_TH: {
            SLIDE: "\u0e42\u0e1b\u0e23\u0e14\u0e40\u0e25\u0e37\u0e48\u0e2d\u0e19\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19 ",
            SUCCESS: "\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19\u0e41\u0e25\u0e49\u0e27",
            LOADING: "\u0e01\u0e33\u0e25\u0e31\u0e07\u0e42\u0e2b\u0e25\u0e14",
            FAIL: "Oops... \u0e1a\u0e32\u0e07\u0e2d\u0e22\u0e48\u0e32\u0e07 \u0e02\u0e31\u0e14\u0e02\u0e49\u0e2d\u0e07. \u0e01\u0e23\u0e38\u0e13 \u0e32\u0e23\u0e35\u0e40\u0e1f\u0e23\u0e0a  \u0e41\u0e25\u0e30\u0e25\u0e2d\u0e07\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07",
            ERROR: "\u0e40\u0e04\u0e23\u0e37\u0e2d\u0e02\u0e48\u0e32\u0e22\u0e02\u0e31\u0e14\u0e02\u0e49\u0e2d\u0e07 \u0e01\u0e23\u0e38\u0e13\u0e32 \u0e23\u0e35\u0e40\u0e1f\u0e23\u0e0a \u0e2b\u0e23\u0e37\u0e2d \u0e43\u0e2b\u0e49\u0e02\u0e49\u0e2d\u0e40\u0e2a\u0e19\u0e2d\u0e41\u0e19\u0e30 ",
            BXMARK: "Oops... \u0e1a\u0e32\u0e07\u0e2d\u0e22\u0e48\u0e32\u0e07 \u0e02\u0e31\u0e14\u0e02\u0e49\u0e2d\u0e07. \u0e01\u0e23\u0e38\u0e13 \u0e32\u0e23\u0e35\u0e40\u0e1f\u0e23\u0e0a  \u0e41\u0e25\u0e30\u0e25\u0e2d\u0e07\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07",
            BXFASTMARK: "Oops... \u0e1a\u0e32\u0e07\u0e2d\u0e22\u0e48\u0e32\u0e07 \u0e02\u0e31\u0e14\u0e02\u0e49\u0e2d\u0e07. \u0e01\u0e23\u0e38\u0e13 \u0e32\u0e23\u0e35\u0e40\u0e1f\u0e23\u0e0a  \u0e41\u0e25\u0e30\u0e25\u0e2d\u0e07\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07"
        },
        tr_TR: {
            SLIDE: "Do\u011frulamak i\xe7in kayd\u0131r\u0131n",
            SUCCESS: "Do\u011fruland\u0131",
            LOADING: "Y\xfckleniyor",
            FAIL: "T\xfch\u2026bir \u015feyler's ters. L\xfctfen yenileyin ve tekrar deneyin.",
            ERROR: "A\u011f Hatas\u0131. L\xfctfen yenileyin veya geri bildirin",
            BXMARK: "T\xfch\u2026bir \u015feyler's ters. L\xfctfen yenileyin ve tekrar deneyin.",
            BXFASTMARK: "T\xfch\u2026bir \u015feyler's ters. L\xfctfen yenileyin ve tekrar deneyin."
        },
        vi_VN: {
            SLIDE: "Vui l\xf2ng tr\u01b0\u1ee3t \u0111\u1ec3 x\xe1c th\u1ef1c",
            SUCCESS: "\u0110\xe3 x\xe1c th\u1ef1c",
            LOADING: "\u0110ang t\u1ea3i",
            FAIL: "R\u1ea5t ti\u1ebfc... \u0111\xe3 x\u1ea3y ra sai s\xf3t. Vui l\xf2ng l\xe0m m\u1edbi v\xe0 th\u1eed l\u1ea1i.",
            ERROR: "L\u1ed7i m\u1ea1ng. Vui l\xf2ng l\xe0m m\u1edbi, ho\u1eb7c g\u1eedi ph\u1ea3n h\u1ed3i",
            BXMARK: "R\u1ea5t ti\u1ebfc... \u0111\xe3 x\u1ea3y ra sai s\xf3t. Vui l\xf2ng l\xe0m m\u1edbi v\xe0 th\u1eed l\u1ea1i.",
            BXFASTMARK: "R\u1ea5t ti\u1ebfc... \u0111\xe3 x\u1ea3y ra sai s\xf3t. Vui l\xf2ng l\xe0m m\u1edbi v\xe0 th\u1eed l\u1ea1i."
        }
    };
    t.getLanuage = i
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = {
        cn: {
            default_txt: "\u70b9\u51fb\u6309\u94ae\u5f00\u59cb\u667a\u80fd\u9a8c\u8bc1",
            success_txt: "\u9a8c\u8bc1\u6210\u529f",
            fail_txt: "\u9a8c\u8bc1\u5931\u8d25\uff0c\u8bf7\u518d\u6b21\u70b9\u51fb\u6309\u94ae\u5237\u65b0",
            neterr_txt: "\u7f51\u7edc\u5f02\u5e38\uff0c\u8bf7\u518d\u6b21\u70b9\u51fb\u6309\u94ae\u5237\u65b0",
            scaning_txt: "\u667a\u80fd\u68c0\u6d4b\u4e2d"
        },
        tw: {
            default_txt: "\u6309\u4e00\u4e0b\u6309\u9215\u4ee5\u958b\u59cb\u667a\u6167\u9a57\u8b49",
            success_txt: "\u9a57\u8b49\u6210\u529f",
            fail_txt: "\u9a57\u8b49\u5931\u6557\u3002\u6309\u4e00\u4e0b\u9019\u88e1\u4ee5\u91cd\u65b0\u6574\u7406",
            neterr_txt: "\u9023\u7dda\u4e0d\u4f73\u3002\u6309\u4e00\u4e0b\u9019\u88e1\u4ee5\u91cd\u65b0\u6574\u7406",
            scaning_txt: "\u6b63\u5728\u9032\u884c\u667a\u6167\u6aa2\u67e5"
        },
        en: {
            default_txt: "Click the button to start verification",
            success_txt: "Verification successful",
            fail_txt: "Verification failed. Click to refresh",
            neterr_txt: "Poor connection. Click to refresh",
            scaning_txt: "Smart check underway"
        },
        es_ES: {
            default_txt: "Haz clic en el bot\xf3n para iniciar la verificaci\xf3n inteligente",
            success_txt: "Verificaci\xf3n completada correctamente",
            fail_txt: "Error de verificaci\xf3n. Haz clic aqu\xed para actualizar",
            neterr_txt: "Conexi\xf3n inestable. Haz clic aqu\xed para actualizar",
            scaning_txt: "Comprobaci\xf3n inteligente en curso"
        },
        pl_PL: {
            default_txt: "Kliknij przycisk, aby rozpocz\u0105\u0107 inteligentn\u0105 weryfikacj\u0119",
            success_txt: "Weryfikacja zako\u0144czona powodzeniem",
            fail_txt: "Weryfikacja nieudana. Kliknij tutaj, aby od\u015bwie\u017cy\u0107",
            neterr_txt: "S\u0142abe po\u0142\u0105czenie. Kliknij tutaj, aby od\u015bwie\u017cy\u0107",
            scaning_txt: "Kontrola inteligentna w toku"
        },
        fr_FR: {
            default_txt: "Cliquez sur le bouton pour lancer la v\xe9rification intelligente",
            success_txt: "R\xe9ussite de la v\xe9rification",
            fail_txt: "\xc9chec de la v\xe9rification. Cliquez ici pour actualiser",
            neterr_txt: "Qualit\xe9 de connexion faible. Cliquez ici pour actualiser",
            scaning_txt: "V\xe9rification intelligente en cours"
        },
        de_DE: {
            default_txt: "Klicken Sie auf die Schaltfl\xe4che, um die intelligente \xdcberpr\xfcfung zu starten",
            success_txt: "\xdcberpr\xfcfung erfolgreich",
            fail_txt: "\xdcberpr\xfcfung fehlgeschlagen. Klicken Sie hier, um zu aktualisieren",
            neterr_txt: "Schlechte Verbindung. Klicken Sie hier, um zu aktualisieren",
            scaning_txt: "Intelligente \xdcberpr\xfcfung wird ausgef\xfchrt"
        },
        it_IT: {
            default_txt: "Fare clic sul pulsante per avviare la verifica intelligente",
            success_txt: "Verifica riuscita",
            fail_txt: "Verifica non riuscita. Fare clic qui per aggiornare",
            neterr_txt: "Connessione instabile. Fare clic qui per aggiornare",
            scaning_txt: "Controllo intelligente in corso"
        },
        ru_RU: {
            default_txt: "\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443, \u0447\u0442\u043e\u0431\u044b \u043d\u0430\u0447\u0430\u0442\u044c \u0438\u043d\u0442\u0435\u043b\u043b\u0435\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435",
            success_txt: "\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435 \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u0435\u043d\u043e",
            fail_txt: "\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f. \u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u0437\u0434\u0435\u0441\u044c \u0434\u043b\u044f \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f",
            neterr_txt: "\u041d\u0435\u0441\u0442\u0430\u0431\u0438\u043b\u044c\u043d\u043e\u0435 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435. \u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u0437\u0434\u0435\u0441\u044c \u0434\u043b\u044f \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f",
            scaning_txt: "\u041e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0438\u043d\u0442\u0435\u043b\u043b\u0435\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u0430\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430"
        },
        ja_JP: {
            default_txt: "\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u3001\u30b9\u30de\u30fc\u30c8\u306a\u78ba\u8a8d\u3092\u958b\u59cb\u3057\u3066\u304f\u3060\u3055\u3044",
            success_txt: "\u78ba\u8a8d\u304c\u5b8c\u4e86\u3057\u307e\u3057\u305f",
            fail_txt: "\u78ba\u8a8d\u306b\u5931\u6557\u3057\u307e\u3057\u305f\uff01\u3053\u3061\u3089\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u66f4\u65b0\u3057\u3066\u304f\u3060\u3055\u3044",
            neterr_txt: "\u63a5\u7d9a\u72b6\u614b\u304c\u826f\u597d\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002\u3053\u3061\u3089\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u66f4\u65b0\u3057\u3066\u304f\u3060\u3055\u3044",
            scaning_txt: "\u30b9\u30de\u30fc\u30c8\u30c1\u30a7\u30c3\u30af\u306e\u5b9f\u65bd\u4e2d\u3067\u3059"
        },
        ko_KR: {
            default_txt: "\uc2a4\ub9c8\ud2b8 \uc778\uc99d\uc744 \uc2dc\uc791\ud558\ub824\uba74 \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uc138\uc694",
            success_txt: "\uc778\uc99d\uc5d0 \uc131\uacf5\ud588\uc2b5\ub2c8\ub2e4",
            fail_txt: "\uc778\uc99d\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4. \uc0c8\ub85c \uace0\uce58\ub824\uba74 \uc5ec\uae30\ub97c \ud074\ub9ad\ud558\uc138\uc694",
            neterr_txt: "\uc5f0\uacb0\uc774 \ubd88\ub7c9\ud569\ub2c8\ub2e4. \uc0c8\ub85c \uace0\uce58\ub824\uba74 \uc5ec\uae30\ub97c \ud074\ub9ad\ud558\uc138\uc694",
            scaning_txt: "\uc2a4\ub9c8\ud2b8 \uac80\uc0ac\ub97c \uc9c4\ud589\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4"
        },
        ar_SA: {
            default_txt: "\u0627\u0646\u0642\u0631 \u0641\u0648\u0642 \u0627\u0644\u0632\u0631 \u0644\u0628\u062f\u0621 \u0627\u0644\u062a\u062d\u0642\u0642 \u0627\u0644\u0630\u0643\u064a.",
            success_txt: "\u0646\u062c\u062d\u062a \u0639\u0645\u0644\u064a\u0629 \u0627\u0644\u062a\u062d\u0642\u0642! ",
            fail_txt: "\u0641\u0634\u0644\u062a \u0639\u0645\u0644\u064a\u0629 \u0627\u0644\u062a\u062d\u0642\u0642. \u0627\u0646\u0642\u0631 \u0647\u0646\u0627 \u0644\u0644\u062a\u062d\u062f\u064a\u062b. ",
            neterr_txt: "\u0627\u062a\u0635\u0627\u0644 \u0636\u0639\u064a\u0641. \u0627\u0646\u0642\u0631 \u0647\u0646\u0627 \u0644\u0644\u062a\u062d\u062f\u064a\u062b. ",
            scaning_txt: "\u0627\u0644\u062a\u062d\u0642\u0642 \u0627\u0644\u0630\u0643\u064a \u0642\u064a\u062f \u0627\u0644\u062a\u0646\u0641\u064a\u0630."
        },
        tr_TR: {
            default_txt: "Ak\u0131ll\u0131 do\u011frulama ba\u015flatmak i\xe7in d\xfc\u011fmeye t\u0131klay\u0131n",
            success_txt: "Do\u011frulama ba\u015far\u0131l\u0131",
            fail_txt: "Do\u011frulama ba\u015far\u0131s\u0131z. Yenilemek i\xe7in buraya t\u0131klay\u0131n",
            neterr_txt: "Zay\u0131f ba\u011flant\u0131. Yenilemek i\xe7in buraya t\u0131klay\u0131n",
            scaning_txt: "Ak\u0131ll\u0131 kontrol devrede"
        },
        th_TH: {
            default_txt: "\u0e04\u0e25\u0e34\u0e01\u0e1b\u0e38\u0e48\u0e21\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e40\u0e23\u0e34\u0e48\u0e21\u0e01\u0e32\u0e23\u0e15\u0e23\u0e27\u0e08\u0e2a\u0e2d\u0e1a\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e0a\u0e32\u0e0d\u0e09\u0e25\u0e32\u0e14",
            success_txt: "\u0e01\u0e32\u0e23\u0e15\u0e23\u0e27\u0e08\u0e2a\u0e2d\u0e1a\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08",
            fail_txt: "\u0e01\u0e32\u0e23\u0e15\u0e23\u0e27\u0e08\u0e2a\u0e2d\u0e1a\u0e25\u0e49\u0e21\u0e40\u0e2b\u0e25\u0e27 \u0e04\u0e25\u0e34\u0e01\u0e17\u0e35\u0e48\u0e19\u0e35\u0e48\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e23\u0e35\u0e40\u0e1f\u0e23\u0e0a",
            neterr_txt: "\u0e01\u0e32\u0e23\u0e40\u0e0a\u0e37\u0e48\u0e2d\u0e21\u0e15\u0e48\u0e2d\u0e44\u0e21\u0e48\u0e14\u0e35 \u0e04\u0e25\u0e34\u0e01\u0e17\u0e35\u0e48\u0e19\u0e35\u0e48\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e23\u0e35\u0e40\u0e1f\u0e23\u0e0a",
            scaning_txt: "\u0e01\u0e33\u0e25\u0e31\u0e07\u0e15\u0e23\u0e27\u0e08\u0e2a\u0e2d\u0e1a\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e0a\u0e32\u0e0d\u0e09\u0e25\u0e32\u0e14"
        },
        vi_VN: {
            default_txt: "Nh\u1ea5p v\xe0o n\xfat \u0111\u1ec3 b\u1eaft \u0111\u1ea7u x\xe1c minh th\xf4ng minh",
            success_txt: "X\xe1c minh th\xe0nh c\xf4ng",
            fail_txt: "X\xe1c minh b\u1ecb l\u1ed7i. Nh\u1ea5p v\xe0o \u0111\xe2y \u0111\u1ec3 l\xe0m m\u1edbi",
            neterr_txt: "K\u1ebft n\u1ed1i k\xe9m. Nh\u1ea5p v\xe0o \u0111\xe2y \u0111\u1ec3 l\xe0m m\u1edbi",
            scaning_txt: "Ki\u1ec3m tra th\xf4ng minh \u0111\u01b0\u1ee3c ti\u1ebfn h\xe0nh"
        },
        nl_NL: {
            default_txt: "Klik op de knop om slimme verificatie te starten",
            success_txt: "Verificatie geslaagd",
            fail_txt: "Verificatie mislukt. Klik hier om te vernieuwen",
            neterr_txt: "Slechte verbinding. Klik hier om te vernieuwen",
            scaning_txt: "Bezig met slimme controle"
        },
        iw_HE: {
            default_txt: "\u05dc\u05d7\u05e5 \u05e2\u05dc \u05d4\u05dc\u05d7\u05e6\u05df \u05db\u05d3\u05d9 \u05dc\u05d4\u05ea\u05d7\u05d9\u05dc \u05d1\u05d0\u05d9\u05de\u05d5\u05ea \u05d7\u05db\u05dd.",
            success_txt: "\u05d4\u05d0\u05d9\u05de\u05d5\u05ea \u05d4\u05e6\u05dc\u05d9\u05d7! ",
            fail_txt: "\u05d4\u05d0\u05d9\u05de\u05d5\u05ea \u05e0\u05db\u05e9\u05dc. \u05dc\u05d7\u05e5 \u05db\u05d0\u05df \u05db\u05d3\u05d9 \u05dc\u05e8\u05e2\u05e0\u05df. ",
            neterr_txt: "\u05d7\u05d9\u05d1\u05d5\u05e8 \u05d7\u05dc\u05e9. \u05dc\u05d7\u05e5 \u05db\u05d0\u05df \u05db\u05d3\u05d9 \u05dc\u05e8\u05e2\u05e0\u05df. ",
            scaning_txt: "\u05d1\u05d3\u05d9\u05e7\u05d4 \u05d7\u05db\u05de\u05d4 \u05de\u05ea\u05d1\u05e6\u05e2\u05ea."
        },
        in_ID: {
            default_txt: "Klik tombol untuk memulai verifikasi pintar",
            success_txt: "Verifikasi berhasil",
            fail_txt: "Verifikasi gagal. Klik di sini untuk menyegarkan",
            neterr_txt: "Koneksi yang buruk. Klik di sini untuk menyegarkan",
            scaning_txt: "Pemeriksaan pintar sedang berlangsung"
        }
    },
    e.exports = t.default
}
, function(e, t, n) {
    "use strict";
    var i = n(5)
      , a = n(4)
      , s = n(6);
    window.AWSCInner && (window.AWSCInner.register("ncModule", "nc", i),
    window.AWSCInner.register("ncModule", "ic", a),
    window.AWSCInner.register("ncModule", "nvc", s))
}
]);
