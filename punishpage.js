!function(e) {
    var t = {};
    function n(a) {
        if (t[a])
            return t[a].exports;
        var i = t[a] = {
            i: a,
            l: !1,
            exports: {}
        };
        return e[a].call(i.exports, i, i.exports, n),
        i.l = !0,
        i.exports
    }
    n.m = e,
    n.c = t,
    n.d = function(e, t, a) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: a
        })
    }
    ,
    n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(e, t) {
        if (1 & t && (e = n(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var a = Object.create(null);
        if (n.r(a),
        Object.defineProperty(a, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var i in e)
                n.d(a, i, function(t) {
                    return e[t]
                }
                .bind(null, i));
        return a
    }
    ,
    n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return n.d(t, "a", t),
        t
    }
    ,
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    n.p = "/",
    n(n.s = 5)
}({
    "./src/modules/i18n/language.js": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n)
                    Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
            }
            return e
        }
          , i = {
            "captcha-h5-tips": "Sorry, we have detected unusual traffic from your network.",
            "captcha-h5-tips-slider": "Please slide to verify.",
            "wait-h5-tips": "Please try again.",
            "deny-h5-tips": "We have detected unusual traffic from your network, please try again later.",
            "wait-pure-tips": "The server is busy, please try again later",
            "deny-pure-tips": "Unusual traffic detected, please try again later",
            "common-company-name": "@2003-Now Alibaba Group",
            "feedback-code": "Feedback ID",
            "feedback-link": "Click to feedback >",
            "pure-feedback-link": "Feedback",
            copyright: "© 1999-Now Alibaba.com Copyright",
            "captcha-title": "Captcha Interception",
            "deny-title": "Access denied",
            "wait-title": "System is busy",
            "previous-page": "BACK",
            "upgrade-text": "Oops! The version is too old<p>Your hand-tao version has expired, please follow the update reminder<br/>or go to the app store to update</p>",
            "close-btn-text": "I see",
            "solution-btn-text": "Solution"
        }
          , r = {
            "th-TH": {
                "captcha-h5-tips": "ขออภัยเราตรวจพบการเข้าชมที่ผิดปกติจากเครือข่ายของคุณ",
                "captcha-h5-tips-slider": "โปรดเลื่อนเพื่อยืนยัน",
                "wait-h5-tips": "โปรดลองใหม่อีกครั้ง",
                "deny-h5-tips": "เราตรวจพบการเข้าชมที่ผิดปกติจากเครือข่ายของคุณ โปรดลองใหม่อีกครั้งในภายหลัง",
                "wait-pure-tips": "ความแออัดของเครือข่าย โปรดรอสักครู่",
                "deny-pure-tips": "การเข้าถึงถูกปฏิเสธ โปรดรอสักครู่",
                "feedback-code": "Feedback ID",
                "feedback-link": "Click to feedback >",
                "pure-feedback-link": "Feedback",
                "common-company-name": "Alibaba Group",
                copyright: "© 1999-Now Alibaba.com Copyright",
                "captcha-title": "Captcha Interception",
                "deny-title": "Access denied",
                "wait-title": "System is busy",
                "previous-page": "BACK",
                "upgrade-text": "อ๊ะ! เวอร์ชันเก่าเกินไป<p>เวอร์ชัน hand-tao ของคุณหมดอายุแล้ว โปรดปฏิบัติตามการแจ้งเตือนการอัปเดต<br/>หรือไปที่ App Store เพื่ออัปเดต</p>",
                "close-btn-text": "ฉันเห็น",
                "solution-btn-text": "สารละลาย"
            },
            "vi-VN": {
                "captcha-h5-tips": "Rất tiếc, hệ thống của chúng tôi đã phát hiện lưu lượng truy cập bất thường từ mạng máy tính của bạn",
                "captcha-h5-tips-slider": "Vui lòng kéo sang phải để xác nhận",
                "wait-h5-tips": "Hệ thống của chúng tôi đã phát hiện lưu lượng truy cập bất thường từ mạng máy tính của bạn, vui lòng thử lại sau.",
                "deny-h5-tips": "Hệ thống của chúng tôi đã phát hiện lưu lượng truy cập bất thường từ mạng máy tính của bạn, vui lòng thử lại sau.",
                "wait-pure-tips": "Nghẽn mạng, vui lòng đợi",
                "deny-pure-tips": "Truy cập bị từ chối, vui lòng đợi",
                "common-company-name": "@2013-Bây giờ Alibaba Nhóm",
                "feedback-code": "Feedback ID",
                "feedback-link": "Phản hồi >",
                "pure-feedback-link": "Phản hồi",
                copyright: "© 1999-Now Alibaba.com Copyright",
                "captcha-title": "Captcha Interception",
                "deny-title": "Access denied",
                "wait-title": "System is busy",
                "previous-page": "BACK",
                "upgrade-text": "Giáo sư! Phiên bản quá cũ <p> Phiên bản hand-tao của bạn đã hết hạn, vui lòng làm theo lời nhắc cập nhật <br/> hoặc truy cập cửa hàng ứng dụng để cập nhật </p>",
                "close-btn-text": "Tôi thấy",
                "solution-btn-text": "giải pháp"
            },
            "zh-CN": {
                "captcha-h5-tips": "亲，请拖动下方滑块完成验证<p>通过验证以确保正常访问</p>",
                "common-company-name": "@2003-现在 阿里巴巴集团",
                "wait-h5-tips": "亲，网络拥堵<p>请稍后重试</p>",
                "deny-h5-tips": "亲，访问被拒绝",
                "wait-pure-tips": "网络拥堵，请稍后",
                "deny-pure-tips": "访问被拒绝，请稍后",
                "captcha-h5-tips-slider": "为保证您的正常访问请进行验证",
                "feedback-code": "错误码",
                "feedback-link": "点我反馈 >",
                "pure-feedback-link": "反馈",
                copyright: "© 1999-现在 Alibaba.com 版权所有",
                "captcha-title": "验证码拦截",
                "deny-title": "访问被拒绝",
                "wait-title": "系统正忙",
                "previous-page": "返回上一页",
                "upgrade-text": "哎呀！版本太旧了<p>您的手淘版本已经过期，请关注更新提醒<br/>或去应用商店更新</p>",
                "close-btn-text": "我知道了",
                "solution-btn-text": "解决方案"
            },
            "in-ID": {
                "captcha-h5-tips-slider": "Geser untuk verifikasi",
                "wait-h5-tips": "Silahkan coba lagi",
                "deny-h5-tips": "Mohon periksa koneksi jaringan Anda dan coba lagi",
                "wait-pure-tips": "Kemacetan jaringan, harap tunggu",
                "deny-pure-tips": "Akses ditolak, harap tunggu",
                "captcha-h5-tips": "Mohon maaf, silahkan periksa koneksi jaringan Anda dan coba lagi",
                "common-company-name": "@2003-Now Alibaba Group",
                "feedback-code": "Feedback ID",
                "feedback-link": "Click to feedback >",
                "pure-feedback-link": "Feedback",
                copyright: "© 1999-Now Alibaba.com Copyright",
                "captcha-title": "Captcha Interception",
                "deny-title": "Access denied",
                "wait-title": "System is busy",
                "previous-page": "BACK",
                "upgrade-text": "Ups! Versi terlalu lama<p>Versi hand-tao Anda telah kedaluwarsa, harap ikuti pengingat pembaruan<br/>atau buka toko aplikasi untuk memperbarui</p>",
                "close-btn-text": "saya mengerti",
                "solution-btn-text": "larutan"
            },
            "en-US": i,
            "ms-MY": {
                "captcha-h5-tips": "Kesesakan yang tidak dijangka telah di kesan dalam rangkaian kami.",
                "captcha-h5-tips-slider": "Sila leret untuk teruskan.",
                "wait-h5-tips": "Terdapat kesesakan pada sistem. Sila cuba sekali lagi.",
                "deny-h5-tips": "Kesesakan yang tidak dijangka telah di kesan dalam rangkaian kami. Sila cuba lagi sebentar lagi.",
                "wait-pure-tips": "Kesesakan rangkaian, sila tunggu",
                "deny-pure-tips": "Akses ditolak, sila tunggu",
                "feedback-code": "Feedback ID",
                "feedback-link": "Click to feedback >",
                "pure-feedback-link": "Feedback",
                "common-company-name": "@2003-Now Alibaba Group",
                copyright: "© 1999-Now Aliviverifybaba.com Copyright",
                "captcha-title": "Captcha Interception",
                "deny-title": "Access denied",
                "wait-title": "System is busy",
                "previous-page": "BACK",
                "upgrade-text": "Alamak! Versi terlalu lama <p> Versi tao tangan anda telah berakhir, ikuti peringatan kemas kini <br/> atau pergi ke app store untuk mengemas kini </p>",
                "close-btn-text": "saya faham",
                "solution-btn-text": "penyelesaian"
            },
            ne: {
                "captcha-h5-tips": "हामीले तपाईंको नेटवर्क असामान्य ट्राफिक फेला पारेको छौँ  ।",
                "captcha-h5-tips-slider": "कृपया प्रमाणिकरण गर्न स्लाइड गर्नुहोस्।",
                "wait-h5-tips": "पुन:प्रयास गर्नुहोस्।",
                "deny-h5-tips": "हामीले तपाईंको नेटवर्क असामान्य ट्राफिक फेला पारेको छौँ, कृपया केहि समयपछि पुन:प्रयास गर्नुहोस्।",
                "wait-pure-tips": "नेटवर्क भीड, कृपया प्रतीक्षा गर्नुहोस्",
                "deny-pure-tips": "पहुँच अस्वीकार गरियो, कृपया प्रतीक्षा गर्नुहोस्",
                "feedback-code": "Feedback ID",
                "feedback-link": "Click to feedback >",
                "pure-feedback-link": "Feedback",
                copyright: "© 1999-Now Alibaba.com Copyright",
                "captcha-title": "Captcha Interception",
                "deny-title": "Access denied",
                "wait-title": "System is busy",
                "previous-page": "BACK",
                "upgrade-text": "उफ्! संस्करण धेरै पुरानो छ <p> तपाइँको हात-ताओ संस्करण को म्याद समाप्त भएको छ, कृपया अपडेट रिमाइन्डर को पालन गर्नुहोस् <br/> वा अपडेट गर्न को लागी एप स्टोर मा जानुहोस् </p>",
                "close-btn-text": "मैले देखें",
                "solution-btn-text": "समाधान"
            },
            bn: {
                "captcha-h5-tips": "দুঃখিত, আমরা আপনার নেটওয়ার্ক থেকে অস্বাভাবিক ট্র্যাফিক সনাক্ত করেছি।",
                "captcha-h5-tips-slider": "যাচাই করার জন্য স্লাইড করুন।",
                "wait-h5-tips": "অনুগ্রহপূর্বক আবার চেষ্টা করুন.",
                "deny-h5-tips": "আমরা আপনার নেটওয়ার্ক থেকে অস্বাভাবিক ট্র্যাফিক সনাক্ত করেছি, অনুগ্রহপূর্বক আবার চেষ্টা করুন.।",
                "wait-pure-tips": "নেটওয়ার্ক কনজেশন, অনুগ্রহ করে অপেক্ষা করুন",
                "deny-pure-tips": "অ্যাক্সেস অস্বীকৃত, অনুগ্রহ করে অপেক্ষা করুন",
                "feedback-code": "Feedback ID",
                "feedback-link": "Click to feedback >",
                "pure-feedback-link": "Feedback",
                copyright: "© 1999-Now Alibaba.com Copyright",
                "captcha-title": "Captcha Interception",
                "deny-title": "Access denied",
                "wait-title": "System is busy",
                "previous-page": "BACK",
                "upgrade-text": "উফ! সংস্করণটি অনেক পুরনো <p> আপনার হ্যান্ড-টাও সংস্করণের মেয়াদ শেষ হয়ে গেছে, দয়া করে আপডেট রিমাইন্ডার অনুসরণ করুন <br/> অথবা আপডেট করতে অ্যাপ স্টোরে যান </p>",
                "close-btn-text": "আমি দেখি",
                "solution-btn-text": "সমাধান"
            },
            si: {
                "captcha-h5-tips": "සමාවෙන්න , ඔබේ ජාලයෙන් අපට අසාමාන්‍ය තදබදයක් වාර්තා වී ඇත.",
                "captcha-h5-tips-slider": "කරුණාකර තහවුරු කිරීමට ස්ලයිඩ් කරන්න.",
                "wait-h5-tips": "කරුණාකර නැවත උත්සහ කරන්න ",
                "deny-h5-tips": "ඔබේ ජාලයෙන් අපට අසාමාන්‍ය තදබදයක් වාර්තා වී ඇත.කරුණාකර පසුව උත්සහ කරන්න.",
                "wait-pure-tips": "ජාල තදබදය, කරුණාකර රැඳී සිටින්න",
                "deny-pure-tips": "ප්‍රවේශය ප්‍රතික්ෂේප විය, කරුණාකර රැඳී සිටින්න",
                "feedback-code": "Feedback ID",
                "feedback-link": "Click to feedback >",
                "pure-feedback-link": "Feedback",
                copyright: "© 1999-Now Alibaba.com Copyright",
                "captcha-title": "Captcha Interception",
                "deny-title": "Access denied",
                "wait-title": "System is busy",
                "previous-page": "BACK",
                "upgrade-text": "අපොයි! අනුවාදය ඉතා පරණයි <p> ඔබේ අත් ටාවෝ අනුවාදය කල් ඉකුත් වී ඇත, කරුණාකර යාවත්කාලීන සිහිකැඳවීම අනුගමනය කරන්න <br/> නැතහොත් යාවත්කාලීන කිරීමට යෙදුම් වෙළඳසැල වෙත යන්න </p>",
                "close-btn-text": "මම දකියි",
                "solution-btn-text": "විසඳුමක්"
            },
            my: {
                "captcha-h5-tips": "ဝမ္းနည္းပါတယ္။ သင္၏နက္ဝက္ခ္မွ ပံုမွန္မဟုတ္ေသာ ဝင္ေရာက္မႈမ်ားကို သတိျပဳမိပါသည္။",
                "captcha-h5-tips-slider": "အတည္ျပဳရန္ ေဘးသို႔ဆြဲပါ။",
                "wait-h5-tips": "ေက်းဇူးျပဳ၍ ေနာက္တစ္ႀကိမ္ ထပ္မံႀကိဳးစားပါ။",
                "deny-h5-tips": "သင္၏နက္ဝက္ခ္မွ ပံုမွန္မဟုတ္ေသာ ဝင္ေရာက္မႈမ်ားကို သတိျပဳမိပါသည္။ ေနာက္တစ္ႀကိမ္ ထပ္မံႀကိဳးစားပါ။",
                "wait-pure-tips": "ကွန်ရက်ပိတ်နေလို့ စောင့်ပါ။",
                "deny-pure-tips": "ဝင်သုံးခွင့် ငြင်းပယ်ခံရသည်၊ ကျေးဇူးပြု၍ စောင့်ပါ။",
                "feedback-code": "Feedback ID",
                "feedback-link": "Click to feedback >",
                "pure-feedback-link": "Feedback",
                copyright: "© 1999-Now Alibaba.com Copyright",
                "captcha-title": "Captcha Interception",
                "deny-title": "Access denied",
                "wait-title": "System is busy",
                "previous-page": "BACK",
                "upgrade-text": "သည်းခံပါ။ ဗားရှင်းသည်ဟောင်းလွန်းသည်။ <p> သင်၏ hand-tao ဗားရှင်းသက်တမ်းကုန်သွားပါပြီ၊ ကျေးဇူးပြု၍ update သတိပေးချက်ကိုလိုက်နာပါ၊ သို့မွမ်းမံရန် app store သို့သွားပါ </p>",
                "close-btn-text": "ဟုတ်လား",
                "solution-btn-text": "ဖြေရှင်းချက်"
            },
            "zh-TW": {
                "captcha-h5-tips": "親，請拖動下方滑塊完成驗證<p>通過驗證以確保正常訪問</p>",
                "common-company-name": "@2003-現在 阿里巴巴集團",
                "wait-h5-tips": "系統繁忙，請您稍等片刻，<p> 稍等馬上回來哦</p>",
                "deny-h5-tips": "您的訪問被拒絕",
                "wait-pure-tips": "網絡擁堵，請稍後",
                "deny-pure-tips": "訪問被拒絕，請稍後",
                "captcha-h5-tips-slider": "為保證您的正常訪問請進行驗證",
                "feedback-code": "反饋碼",
                "feedback-link": "點我回饋 >",
                "pure-feedback-link": "回饋",
                copyright: "© 1999-現在 Alibaba.com 版權所有",
                "captcha-title": "驗證碼攔截",
                "deny-title": "訪問被拒絕",
                "wait-title": "系統繁忙",
                "previous-page": "返回上一頁",
                "upgrade-text": "哎呀！版本太舊了<p>您的手淘版本已經過期，請關注更新提醒<br/>或去應用商店更新</p>",
                "close-btn-text": "我知道了",
                "solution-btn-text": "解決方案"
            },
            "ar-SA": a({}, i, {
                "wait-pure-tips": "الخادم مشغول ، يرجى المحاولة مرة أخرى لاحقًا",
                "deny-pure-tips": "تم اكتشاف حركة مرور غير عادية ، يرجى المحاولة مرة أخرى لاحقًا"
            }),
            "de-DE": a({}, i, {
                "wait-pure-tips": "Der Server ist ausgelastet, bitte versuchen Sie es später erneut",
                "deny-pure-tips": "Ungewöhnlicher Datenverkehr erkannt, bitte versuchen Sie es später erneut"
            }),
            "es-ES": a({}, i, {
                "wait-pure-tips": "El servidor está ocupado, inténtalo de nuevo más tarde",
                "deny-pure-tips": "Se detectó tráfico inusual, inténtelo de nuevo más tarde"
            }),
            "fr-FR": a({}, i, {
                "wait-pure-tips": "Le serveur est occupé, veuillez réessayer plus tard",
                "deny-pure-tips": "Trafic inhabituel détecté, veuillez réessayer plus tard"
            }),
            "it-IT": a({}, i, {
                "wait-pure-tips": "Il server è occupato, riprova più tardi",
                "deny-pure-tips": "Rilevato traffico insolito, riprova più tardi"
            }),
            "iw-HE": a({}, i, {
                "wait-pure-tips": "השרת תפוס, אנא נסה שוב מאוחר יותר",
                "deny-pure-tips": "זוהתה תנועה חריגה, אנא נסה שוב מאוחר יותר"
            }),
            "ja-JP": a({}, i, {
                "wait-pure-tips": "サーバーがビジーです。後でもう一度やり直してください",
                "deny-pure-tips": "異常なトラフィックが検出されました。しばらくしてからもう一度お試しください"
            }),
            "ko-KR": a({}, i, {
                "wait-pure-tips": "서버가 사용 중입니다. 나중에 다시 시도해 주세요",
                "deny-pure-tips": "비정상적인 트래픽이 감지되었습니다. 나중에 다시 시도해 주세요"
            }),
            "nl-NL": a({}, i, {
                "wait-pure-tips": "De server is bezet, probeer het later opnieuw",
                "deny-pure-tips": "Ongebruikelijk verkeer gedetecteerd, probeer het later opnieuw"
            }),
            "pt-BR": a({}, i, {
                "wait-pure-tips": "Serwer jest zajęty, spróbuj ponownie później",
                "deny-pure-tips": "Wykryto nietypowy ruch, spróbuj ponownie później"
            }),
            "ru-RU": a({}, i, {
                "feedback-link": "Нажмите здесь, чтобы оставить отзыв >",
                "wait-pure-tips": "Сервер занят, повторите попытку позже",
                "deny-pure-tips": "Обнаружен необычный трафик. Повторите попытку позже"
            }),
            "tr-TR": a({}, i, {
                "wait-pure-tips": "Sunucu meşgul, lütfen daha sonra tekrar deneyin",
                "deny-pure-tips": "Olağandışı trafik algılandı, lütfen daha sonra tekrar deneyin"
            }),
            "uk-UA": a({}, i, {
                "wait-pure-tips": "Перевантаження мережі, зачекайте",
                "deny-pure-tips": "Доступ заборонено, зачекайте"
            }),
            "kk-KZ": a({}, i, {
                "feedback-link": "Кері байланыс үшін мені басыңыз >"
            })
        };
        r.zh = r["zh-CN"],
        r.cn = r["zh-CN"],
        r["zh-cn"] = r["zh-CN"],
        r.th = r["th-TH"],
        r.vi = r["vi-VN"],
        r.id = r["in-ID"],
        r.ms = r["ms-MY"],
        r.tw = r["zh-TW"],
        r["ne-NP"] = r.ne,
        r["id-ID"] = r["in-ID"],
        r.ar = r["ar-SA"],
        r.de = r["de-DE"],
        r.es = r["es-ES"],
        r.fr = r["fr-FR"],
        r.it = r["it-IT"],
        r.he = r["iw-HE"],
        r.ja = r["ja-JP"],
        r.ko = r["ko-KR"],
        r.nl = r["nl-NL"],
        r.pt = r["pt-BR"],
        r.ru = r["ru-RU"],
        r.tr = r["tr-TR"],
        r.uk = r["uk-UA"],
        r.kk = r["kk-KZ"];
        for (var o = ["en", "en-SG", "en-GB", "en-PK", "en-MY", "en-VN", "en-TH"], c = 0; c < o.length; c++)
            r[o[c]] = r["en-US"];
        t.default = r
    },
    "./src/modules/i18n/nocaptcha-language.js": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = {
            ru_RU: {
                _startTEXT: "Проведите вправо",
                _yesTEXT: "Готово",
                _Loading: "Загрузка...",
                _error300: 'Что-то пошло не так. <a href="javascript:__nc.reset()">Обновите страницу</a> и попробуйте ещё раз',
                _errorNetwork: 'Нет интернета. Попробуйте <a href="javascript:__nc.reset()">обновить страницу</a>',
                LOADING: "Загрузка...",
                SLIDER_LABEL: "Пройдите, чтобы проверить",
                CHECK_Y: "Готово",
                ERROR_TITLE: "Что-то пошло не так",
                CHECK_N: "Ошибка",
                TIPS_TITLE: "Что-то пошло не так",
                ERROR_RELOAD: "Перезагрузить",
                ERROR_FEEDBACK: "Отзывы и предложения",
                SLIDE: "Пройдите, чтобы проверить",
                SUCCESS: "Готово",
                ERROR: "Что-то пошло не так",
                FAIL: "Перезагрузить",
                BXMARK: "Пожалуйста, обновите страницу и попробуйте снова"
            },
            es_ES: {
                _startTEXT: "Desliza para verificar",
                _yesTEXT: "Verificada",
                _Loading: "Cargando...",
                _error300: 'Vaya, algo ha ido mal. <a href="javascript:__nc.reset()">Actualiza</a> e inténtalo de nuevo.',
                _errorNetwork: 'Error en la conexión, <a href="javascript:__nc.reset()">actualiza</a>',
                LOADING: "Cargando...",
                SLIDER_LABEL: "Desliza para verificar",
                CHECK_Y: "Verificada",
                ERROR_TITLE: "Lo sentimos, algo ha ido mal.",
                CHECK_N: "Error",
                TIPS_TITLE: "Algo no ha ido como debería...",
                ERROR_RELOAD: "Volver a cargar",
                ERROR_FEEDBACK: "Comentarios y sugerencias",
                SLIDE: "Desliza para verificar",
                SUCCESS: "Verificada",
                ERROR: "Lo sentimos, algo ha ido mal.",
                FAIL: "Volver a cargar",
                BXMARK: "Actualice la página y vuelva a intentarlo"
            },
            pt_BR: {
                _startTEXT: "Deslize para verificar",
                _yesTEXT: "Verificado",
                _Loading: "Carregando...",
                _error300: 'Oops, ocorreu uma falha. <a href="javascript:__nc.reset()">Atualize</a> e tente novamente.',
                _errorNetwork: 'Falha na conexão, <a href="javascript:__nc.reset()">atualizar</a>.',
                LOADING: "Carregando...",
                SLIDER_LABEL: "Deslize para verificar",
                CHECK_Y: "Verificado",
                ERROR_TITLE: "Desculpe, ocorreu uma falha.",
                CHECK_N: "Erro",
                TIPS_TITLE: "Ops... Algo deu errado!",
                ERROR_RELOAD: "Recarregar",
                ERROR_FEEDBACK: "Sugestões e Comentários",
                SLIDE: "Deslize para verificar",
                SUCCESS: "Verificado",
                ERROR: "Desculpe, ocorreu uma falha.",
                FAIL: "Recarregar",
                BXMARK: "Por favor, atualize a página e tente novamente"
            },
            fr_FR: {
                _startTEXT: "Merci de glisser pour vérifier",
                _yesTEXT: "Vérifié",
                _Loading: "Chargement...",
                _error300: 'Oups, une erreur s\'est produite. Veuillez <a href="javascript:__nc.reset()">rafraîchir</a> et réessayer.',
                _errorNetwork: 'Erreur de réseau. Veuillez <a href="javascript:__nc.reset()">rafraîchir</a>.',
                LOADING: "Chargement...",
                SLIDER_LABEL: "Glisser pour vérifier",
                CHECK_Y: "Vérifié",
                ERROR_TITLE: "Désolé, une erreur s'est produite.",
                CHECK_N: "Erreur",
                TIPS_TITLE: "Oups, une erreur s'est produite.",
                ERROR_RELOAD: "Recharger",
                ERROR_FEEDBACK: "Suggestions et commentaires",
                SLIDE: "Glisser pour vérifier",
                SUCCESS: "Vérifié",
                ERROR: "Désolé, une erreur s'est produite.",
                FAIL: "Recharger",
                BXMARK: "Veuillez actualiser la page et réessayer"
            },
            in_ID: {
                _startTEXT: "Geser untuk memverifikasi",
                _yesTEXT: "Terverifikasi",
                _Loading: "Memuat",
                _error300: 'Ups, ada yang tidak beres. Harap <a href="javascript:__nc.reset()">segarkan</a> dan coba lagi.',
                _errorNetwork: 'Kesalahan jaringan. Harap <a href="javascript:__nc.reset()">segarkan</a>.',
                LOADING: "Memuat",
                SLIDER_LABEL: "Geser untuk memverifikasi",
                CHECK_Y: "Terverifikasi",
                ERROR_TITLE: "Maaf, ada yang tidak beres.",
                CHECK_N: "Eror",
                TIPS_TITLE: "Ups, ada yang tidak beres.",
                ERROR_RELOAD: "Muat ulang",
                ERROR_FEEDBACK: "Beri kami tanggapan",
                SLIDE: "Geser untuk memverifikasi",
                SUCCESS: "Terverifikasi",
                ERROR: "Maaf, ada yang tidak beres.",
                FAIL: "Muat ulang",
                BXMARK: "Silakan refresh halaman dan coba lagi"
            },
            tr_TR: {
                _startTEXT: "Doğrulamak için lütfen kaydırın",
                _yesTEXT: "Doğrulandı",
                _Loading: "Yükleniyor",
                _error300: 'Bir hata oluştu. Lütfen <a href="javascript:__nc.reset()">sayfayı yenileyin</a> ve tekrar deneyin.',
                _errorNetwork: 'Ağ hatası. Lütfen <a href="javascript:__nc.reset()">sayfayı yenileyin</a>.',
                LOADING: "Yükleniyor",
                SLIDER_LABEL: "Doğrulamak için kaydırın",
                CHECK_Y: "Doğrulandı",
                ERROR_TITLE: "Bir hata oluştu.",
                CHECK_N: "Hata",
                TIPS_TITLE: "Bir hata oluştu.",
                ERROR_RELOAD: "Yeniden yükle",
                ERROR_FEEDBACK: "Geri bildirim gönderin",
                SLIDE: "Doğrulamak için kaydırın",
                SUCCESS: "Doğrulandı",
                ERROR: "Bir hata oluştu.",
                FAIL: "Yeniden yükle",
                BXMARK: "Lütfen sayfayı yenileyin ve tekrar deneyin"
            },
            th_TH: {
                _startTEXT: "กรุณาเลื่อนเพื่อยืนยัน",
                _yesTEXT: "ตรวจสอบแล้ว",
                _Loading: "กำลังโหลด",
                _error300: 'อุ๊ปส์ มีบางอย่างผิดพลาด กรุณา<a href="javascript:__nc.reset()">รีเฟรช</a>และลองใหม่อีกครั้ง',
                _errorNetwork: 'เครือข่ายผิดพลาด กรุณา<a href="javascript:__nc.reset()">รีเฟรช</a>',
                LOADING: "กำลังโหลด",
                SLIDER_LABEL: "เลื่อนเพื่อตรวจสอบ",
                CHECK_Y: "ตรวจสอบแล้ว",
                ERROR_TITLE: "ขออภัย มีบางอย่างผิดพลาด",
                CHECK_N: "ผิดพลาด",
                TIPS_TITLE: "อุ๊ปส์ มีบางอย่างผิดพลาด",
                ERROR_RELOAD: "โหลดอีกครั้ง",
                ERROR_FEEDBACK: "แสดงความคิดเห็นให้เราทราบ",
                SLIDE: "เลื่อนเพื่อตรวจสอบ",
                SUCCESS: "ตรวจสอบแล้ว",
                ERROR: "ขออภัย มีบางอย่างผิดพลาด",
                FAIL: "โหลดอีกครั้ง",
                BXMARK: "โปรดรีเฟรชหน้าลองใหม่อีกครั้ง"
            },
            it_IT: {
                _startTEXT: "Scorri per verificare",
                _yesTEXT: "Verificato",
                _Loading: "Caricamento in corso",
                _error300: 'Ops, qualcosa è andato storto. <a href="javascript:__nc.reset()">Ricarica</a> e riprova.',
                _errorNetwork: 'Errore di rete. <a href="javascript:__nc.reset()">Ricarica</a>.',
                LOADING: "Caricamento in corso",
                SLIDER_LABEL: "Scorri per verificare",
                CHECK_Y: "Verificato",
                ERROR_TITLE: "Spiacenti, qualcosa è andato storto.",
                CHECK_N: "Errore",
                TIPS_TITLE: "Ops, c'è stato un problema.",
                ERROR_RELOAD: "Ricarica",
                ERROR_FEEDBACK: "Dacci un feedback",
                SLIDE: "Scorri per verificare",
                SUCCESS: "Verificato",
                ERROR: "Spiacenti, qualcosa è andato storto.",
                FAIL: "Ricarica",
                BXMARK: "Aggiorna la pagina e riprova"
            },
            de_DE: {
                _startTEXT: "Zum Verifizieren bitte schieben",
                _yesTEXT: "Überprüft",
                _Loading: "Laden",
                _error300: 'Ups, da ist etwas schief gelaufen. Bitte <a href="javascript:__nc.reset()">aktualisieren</a> und erneut versuchen.',
                _errorNetwork: 'Netzwerkfehler. Bitte <a href="javascript:__nc.reset()">aktualisieren</a>.',
                LOADING: "Laden",
                SLIDER_LABEL: "Zum Überprüfen wischen",
                CHECK_Y: "Überprüft",
                ERROR_TITLE: "Entschuldigung, etwas ist schief gelaufen.",
                CHECK_N: "Fehler",
                TIPS_TITLE: "Ups, etwas ist schiefgelaufen.",
                ERROR_RELOAD: "Aktualisieren",
                ERROR_FEEDBACK: "Geben Sie uns Feedback",
                SLIDE: "Zum Überprüfen wischen",
                SUCCESS: "Überprüft",
                ERROR: "Entschuldigung, etwas ist schief gelaufen.",
                FAIL: "Aktualisieren",
                BXMARK: "Bitte aktualisieren Sie die Seite und versuchen Sie es erneut"
            },
            iw_HE: {
                _startTEXT: "החליקו לאימות",
                _yesTEXT: "אומת",
                _Loading: "טוען",
                _error300: 'אופס, משהו השתבש. <a href="javascript:__nc.reset()">רעננו</a> את הדף ונסו שוב.',
                _errorNetwork: 'שגיאת מערכת. <a href="javascript:__nc.reset()">רעננו</a> את הדף',
                LOADING: "טוען",
                SLIDER_LABEL: "החליקו לאימות",
                CHECK_Y: "אומת",
                ERROR_TITLE: "מצטערים, משהו השתבש.",
                CHECK_N: "שגיאה",
                TIPS_TITLE: "אופס, משהו השתבש.",
                ERROR_RELOAD: "ריענון",
                ERROR_FEEDBACK: "תנו לנו משוב",
                SLIDE: "החליקו לאימות",
                SUCCESS: "אומת",
                ERROR: "מצטערים, משהו השתבש.",
                FAIL: "ריענון",
                BXMARK: "אנא לרענן את הדף ולנסות שוב"
            },
            ja_JP: {
                _startTEXT: "スライドして確認してください",
                _yesTEXT: "確証しました",
                _Loading: "ロード中",
                _error300: 'おっと、何かがうまくいきませんでした。<a href="javascript:__nc.reset()">リフレッシュして</a>もう一度お試し下さい。',
                _errorNetwork: 'ネットワークエラーが発生しました。<a href="javascript:__nc.reset()">リフレッシュして</a>ください。',
                LOADING: "ロード中",
                SLIDER_LABEL: "スライドして確認",
                CHECK_Y: "確証しました",
                ERROR_TITLE: "申し訳ありませんが、何かがうまくいきませんでした。",
                CHECK_N: "エラー",
                TIPS_TITLE: "おっと、何かがうまくいきませんでした。",
                ERROR_RELOAD: "リロード",
                ERROR_FEEDBACK: "フィードバックを送信",
                SLIDE: "スライドして確認",
                SUCCESS: "確証しました",
                ERROR: "申し訳ありませんが、何かがうまくいきませんでした。",
                FAIL: "リロード",
                BXMARK: "ページを更新して再試行してください"
            },
            ko_KR: {
                _startTEXT: "옆으로 밀어서 확인해 주세요",
                _yesTEXT: "확인 성공",
                _Loading: "로딩",
                _error300: '죄송합니다. 문제가 생겼어요. <a href="javascript:__nc.reset()">새로고침</a>해서 다시 시도해 주세요.',
                _errorNetwork: '네트워크 오류입니다. <a href="javascript:__nc.reset()">새로고침</a> 해주세요.',
                LOADING: "로딩",
                SLIDER_LABEL: "밀어서 확인하기",
                CHECK_Y: "확인 성공",
                ERROR_TITLE: "죄송합니다. 문제가 생겼어요.",
                CHECK_N: "오류",
                TIPS_TITLE: "죄송합니다. 문제가 생겼어요.",
                ERROR_RELOAD: "새로고침",
                ERROR_FEEDBACK: "피드백 전달",
                SLIDE: "밀어서 확인하기",
                SUCCESS: "확인 성공",
                ERROR: "죄송합니다. 문제가 생겼어요.",
                FAIL: "새로고침",
                BXMARK: "페이지를 새로 고치고 다시 시도하십시오."
            },
            nl_NL: {
                _startTEXT: "Veeg om te verifiëren",
                _yesTEXT: "Geverifieerd",
                _Loading: "Aan het laden",
                _error300: 'Oeps, er is iets misgegaan. <a href="javascript:__nc.reset()">Vernieuw</a> en probeer het nog een keer.',
                _errorNetwork: 'Netwerkfout. <a href="javascript:__nc.reset()">Vernieuw</a>.',
                LOADING: "Aan het laden",
                SLIDER_LABEL: "Veeg om te verifiëren",
                CHECK_Y: "Geverifieerd",
                ERROR_TITLE: "Er is iets misgegaan.",
                CHECK_N: "Fout",
                TIPS_TITLE: "Oeps, er ging iets mis.",
                ERROR_RELOAD: "Vernieuwen",
                ERROR_FEEDBACK: "Geef ons feedback",
                SLIDE: "Veeg om te verifiëren",
                SUCCESS: "Geverifieerd",
                ERROR: "Er is iets misgegaan.",
                FAIL: "Vernieuwen",
                BXMARK: "Vernieuw de pagina en probeer het opnieuw"
            },
            vi_VN: {
                _startTEXT: "Vui lòng trượt để xác nhận",
                _yesTEXT: "Đã xác minh",
                _Loading: "Đang tải",
                _error300: 'Rất tiếc, đã xảy ra sự cố. Vui lòng <a href="javascript:__nc.reset()">làm mới</a> và thử lại.',
                _errorNetwork: 'Lỗi mạng. Vui lòng <a href="javascript:__nc.reset()">làm mới</a>.',
                LOADING: "Đang tải",
                SLIDER_LABEL: "Trượt để xác minh",
                CHECK_Y: "Đã xác minh",
                ERROR_TITLE: "Xin lỗi, đã xảy ra sự cố.",
                CHECK_N: "Lỗi",
                TIPS_TITLE: "Rất tiếc, đã xảy ra sự cố.",
                ERROR_RELOAD: "Tải lại",
                ERROR_FEEDBACK: "Phản hồi cho chúng tôi",
                SLIDE: "Trượt để xác minh",
                SUCCESS: "Đã xác minh",
                ERROR: "Xin lỗi, đã xảy ra sự cố.",
                FAIL: "Tải lại",
                BXMARK: "Vui lòng làm mới trang và thử lại"
            },
            ar_SA: {
                _startTEXT: "يرجى التمرير للتحقق",
                _yesTEXT: "تمَّ التحقق!",
                _Loading: "جاري التحميل",
                _error300: 'نأسف، حدث خطأ. يرجى <a href="javascript:__nc.reset()">تحديث الصفحة</a> وإعادة المحاولة.',
                _errorNetwork: 'خطأ بالشبكة. يرجى <a href="javascript:__nc.reset()">تحديث الصفحة</a>.',
                LOADING: "جاري التحميل",
                SLIDER_LABEL: "مرر للتحقق",
                CHECK_Y: "تمَّ التحقق!",
                ERROR_TITLE: "نأسف، حدث خطأ.",
                CHECK_N: "خطأ",
                TIPS_TITLE: "نأسف، حدث خطأ.",
                ERROR_RELOAD: "إعادة التحميل",
                ERROR_FEEDBACK: "شاركنا ملاحظاتك",
                SLIDE: "مرر للتحقق",
                SUCCESS: "تمَّ التحقق!",
                ERROR: "نأسف، حدث خطأ.",
                FAIL: "إعادة التحميل",
                BXMARK: "يرجى تحديث الصفحة والمحاولة مرة أخرى"
            },
            pl_PL: {
                _startTEXT: "Proszę przesunąć, aby zweryfikować",
                _yesTEXT: "Zweryfikowano",
                _Loading: "Ładowanie",
                _error300: 'Ups, coś poszło nie tak. Proszę <a href="javascript:__nc.reset()">odświeżyć</a> i spróbować ponownie.',
                _errorNetwork: 'Błąd sieci. Proszę <a href="javascript:__nc.reset()">odświeżyć</a>.',
                LOADING: "Ładowanie",
                SLIDER_LABEL: "Przesuń, aby zweryfikować",
                CHECK_Y: "Zweryfikowano",
                ERROR_TITLE: "Przepraszamy, coś poszło nie tak.",
                CHECK_N: "Błąd",
                TIPS_TITLE: "Ups! Coś poszło nie tak.",
                ERROR_RELOAD: "Odśwież",
                ERROR_FEEDBACK: "Podziel się z nami swoją opinią",
                SLIDE: "Przesuń, aby zweryfikować",
                SUCCESS: "Zweryfikowano",
                ERROR: "Przepraszamy, coś poszło nie tak.",
                FAIL: "Odśwież",
                BXMARK: "Odśwież stronę i spróbuj ponownie"
            },
            uk_UA: {
                _startTEXT: "Протягніть, щоб підтвердити",
                _yesTEXT: "Підтверджено",
                _Loading: "Завантаження",
                _error300: 'Сталася помилка. <a href="javascript:__nc.reset()">Оновіть сторінку</a> та спробуйте ще раз.',
                _errorNetwork: 'Помилка мережі. <a href="javascript:__nc.reset()">Оновіть сторінку</a>.',
                LOADING: "Завантаження",
                SLIDER_LABEL: "Протягніть, щоб підтвердити",
                CHECK_Y: "Підтверджено",
                ERROR_TITLE: "На жаль, сталася помилка.",
                CHECK_N: "Помилка",
                TIPS_TITLE: "Сталася помилка.",
                ERROR_RELOAD: "Перезавантажити",
                ERROR_FEEDBACK: "Надішліть свій відгук",
                SLIDE: "Протягніть, щоб підтвердити",
                SUCCESS: "Підтверджено",
                ERROR: "На жаль, сталася помилка.",
                FAIL: "Перезавантажити",
                BXMARK: "Будь ласка, оновіть сторінку та повторіть спробу"
            },
            cn: {
                LOADING: "加载中...",
                SLIDE: "向右滑动验证",
                SUCCESS: "验证通过",
                ERROR: "非常抱歉，网络出错了...",
                FAIL: "验证失败，点击框体重试",
                BXMARK: "请刷新页面重试"
            },
            tw: {
                LOADING: "加載中...",
                SLIDE: "向右滑動驗證",
                SUCCESS: "驗證通過",
                ERROR: "非常抱歉，網絡出錯了...",
                FAIL: "驗證失敗，點擊框體重試",
                BXMARK: "請刷新頁面重試"
            },
            en: {
                FAIL: "Click to retry",
                BXMARK: "Please refresh the page and try again"
            }
        }
    },
    "./src/modules/pow/index.js": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a, i, r = n("./src/modules/punishpage/utils/index.js");
        var o = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;
        function c(e, t) {
            return e ? function(e, t, n) {
                for (var a = t + n, i = t; e[i] && !(i >= a); )
                    ++i;
                if (i - t > 16 && e.buffer && o)
                    return o.decode(e.subarray(t, i));
                for (var r = ""; t < i; ) {
                    var c = e[t++];
                    if (128 & c) {
                        var s = 63 & e[t++];
                        if (192 != (224 & c)) {
                            var d = 63 & e[t++];
                            if ((c = 224 == (240 & c) ? (15 & c) << 12 | s << 6 | d : (7 & c) << 18 | s << 12 | d << 6 | 63 & e[t++]) < 65536)
                                r += String.fromCharCode(c);
                            else {
                                var p = c - 65536;
                                r += String.fromCharCode(55296 | p >> 10, 56320 | 1023 & p)
                            }
                        } else
                            r += String.fromCharCode((31 & c) << 6 | s)
                    } else
                        r += String.fromCharCode(c)
                }
                return r
            }(i, e, t) : ""
        }
        var s = "https://g.alicdn.com/sd/punish"
          , d = "0.0.4"
          , p = {
            b: function() {
                return !0
            },
            c: function() {
                return Date.now()
            },
            d: function(e, t, n) {
                return i.copyWithin(e, t, t + n)
            },
            a: function(e) {
                0
            }
        };
        function l(e) {
            var t = window.TextDecoder;
            if (t)
                return (new t).decode(e);
            for (var n = "", a = 0; a < e.length; a++)
                n += String.fromCharCode(e[a]);
            return n
        }
        function u(e, t, n, a) {
            if (a)
                return fetch(s + "/" + d + "/program.wasm").then((function(e) {
                    t(e)
                }
                )).catch((function(a) {
                    n ? setTimeout((function() {
                        u(e, t, n - 1, !0)
                    }
                    ), 10) : t(!1, a && a.message)
                }
                ));
            var i = new XMLHttpRequest;
            i.onload = function() {
                t(i.response)
            }
            ,
            i.onerror = function(a) {
                n ? setTimeout((function() {
                    u(e, t, n - 1)
                }
                ), 10) : t(!1, a && a.message)
            }
            ,
            i.open("GET", e),
            i.responseType = "arraybuffer",
            i.send()
        }
        function f(e) {
            var t = !1
              , n = window.WebAssembly;
            if (n)
                try {
                    var a = new Uint32Array([1836278016, 1, 1610679297, 33751040, 84148225, 33648641, 17040642, 104873985, 25100550, 118161729, 1627456269, 1644232705, 1661009922, 118030336, 21037057, 167772427, 196869, 268438273, 1835101700, 17039717, 36765952, 259]);
                    new n.Module(a),
                    t = !0
                } catch (e) {
                    console.log(e)
                }
            t ? g(e) : function(e) {
                u(s + "/0.0.1/program.js", (function(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    if (t) {
                        var a, i = new Uint8Array(t), r = l(i);
                        try {
                            a = Function("return " + r)()
                        } catch (t) {
                            return void e(!1, t && t.message)
                        }
                        e({
                            _pp: a
                        })
                    } else
                        e(!1, "failed to load js mod by xhr," + n)
                }
                ), 10)
            }(e)
        }
        function g(e) {
            return "function" == typeof WebAssembly.instantiateStreaming && fetch && "function" == typeof fetch ? function(e) {
                u(s + "/" + d + "/program.wasm", (function(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    if (t) {
                        var a = WebAssembly.instantiateStreaming(t, {
                            a: p
                        });
                        return a.then(e, (function(t) {
                            return (0,
                            r.log)("WebAssembly解析失败: " + t, 21),
                            h(e)
                        }
                        ))
                    }
                    e(!1, "failed to load wasm mod by fetch," + n)
                }
                ), 10, !0)
            }(e) : h(e)
        }
        function h(e) {
            u(s + "/" + d + "/program.wasm", (function(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                t ? WebAssembly.compile(t).then((function(e) {
                    return WebAssembly.instantiate(e, {
                        a: p
                    })
                }
                )).then((function(t) {
                    e(t, "instance")
                }
                )) : e(!1, "failed to load wasm mod by xhr," + n)
            }
            ), 10)
        }
        var m = {
            init: function(e) {
                (0,
                r.randomUUID)("captcha", r.isWindVane ? "_$PX" : ""),
                f((function(t, n) {
                    var r;
                    if (t)
                        if ("instance" === n || t.instance && t.instance.exports) {
                            var o = "instance" === n ? t.exports : t.instance.exports;
                            a = o.e,
                            r = a.buffer,
                            i = new Uint8Array(r);
                            var s = function(e) {
                                return (s = o.g)(e)
                            };
                            t._pp = function(e, t, n, a, i, r, c, s, d, p, l) {
                                return o.j(e, t, n, a, i, r, c, s, d, p, l)
                            }
                            ,
                            t._free = function(e) {
                                return o.i(e)
                            }
                            ,
                            t._UTF8ToString = function(e, t, n) {
                                return o.h(e, t, n)
                            }
                            ,
                            t.stringToNewUTF8 = function(e) {
                                var t = function(e) {
                                    for (var t = 0, n = 0; n < e.length; ++n) {
                                        var a = e.charCodeAt(n);
                                        a <= 127 ? t++ : a <= 2047 ? t += 2 : a >= 55296 && a <= 57343 ? (t += 4,
                                        ++n) : t += 3
                                    }
                                    return t
                                }(e) + 1
                                  , n = s(t);
                                return n && function(e, t, n) {
                                    (function(e, t, n, a) {
                                        if (!(a > 0))
                                            return 0;
                                        for (var i = n, r = n + a - 1, o = 0; o < e.length; ++o) {
                                            var c = e.charCodeAt(o);
                                            if (c >= 55296 && c <= 57343)
                                                c = 65536 + ((1023 & c) << 10) | 1023 & e.charCodeAt(++o);
                                            if (c <= 127) {
                                                if (n >= r)
                                                    break;
                                                t[n++] = c
                                            } else if (c <= 2047) {
                                                if (n + 1 >= r)
                                                    break;
                                                t[n++] = 192 | c >> 6,
                                                t[n++] = 128 | 63 & c
                                            } else if (c <= 65535) {
                                                if (n + 2 >= r)
                                                    break;
                                                t[n++] = 224 | c >> 12,
                                                t[n++] = 128 | c >> 6 & 63,
                                                t[n++] = 128 | 63 & c
                                            } else {
                                                if (n + 3 >= r)
                                                    break;
                                                t[n++] = 240 | c >> 18,
                                                t[n++] = 128 | c >> 12 & 63,
                                                t[n++] = 128 | c >> 6 & 63,
                                                t[n++] = 128 | 63 & c
                                            }
                                        }
                                        t[n] = 0
                                    }
                                    )(e, i, t, n)
                                }(e, n, t),
                                n
                            }
                            ,
                            t.UTF8ToString = c,
                            e(t)
                        } else
                            e(t);
                    else
                        e(!1, n)
                }
                ))
            },
            setVersion: function(e) {
                d = e
            }
        };
        t.default = m
    },
    "./src/modules/punishpage/base-template.js": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n("./src/modules/punishpage/utils/index.js");
        t.default = function(e, t) {
            var n = e.uuid
              , i = e.copyright
              , r = e.logo
              , o = e.logoLink
              , c = e.action
              , s = (e.appUpgrade,
            e.headerConfig)
              , d = void 0 === s ? {} : s
              , p = e.cdc
              , l = e.isTaobaoApp
              , u = d.backUrl
              , f = d.isHeaderShow;
            "deny" === c && p && a.isInNativeSdk && (f = !0,
            u = (0,
            a.getNativeCloseUrl)() + "?close=true");
            var g = window.innerHeight || window.screen && window.screen.height;
            return '<div id="baxia-punish" class=\'baxia-punish ' + c + " " + (a.isMobile ? g && g < 550 ? " mobile half " : " mobile " : a.isPc ? " pc " : a.isAjax ? " pc-ajax " : " pc ") + (l ? " taobao-app" : "") + "'>\n    " + (r && "null" !== r ? '<div id="J_Header" class="header clearfix">\n    <h1 id="logo" class="logo">\n        <a href="' + o + '" target="_top">\n          <img src="' + r + '" title="点击查看源网页">\n        </a>\n    </h1>\n</div>' : "") + '\n    <div class="wrapper">\n    ' + (f ? "<div class='control-header'>\n          <div class='back' onclick=location.replace('" + u + '\') ><svg t="1614585590171" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4891" width="24" height="24"><path d="M691.8656 172.544a32 32 0 0 0-45.2608-45.2096l-358.4 358.4a37.12 37.12 0 0 0 0 52.5312l358.4 358.4a32 32 0 0 0 45.2608-45.2608L352.4096 512l339.456-339.456z" fill="#191F25" p-id="4892"></path></svg></div>\n          <div class=\'refresh\' onclick=location.reload()><svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>icon/24/icon_Y_shuaxin</title><g id="icon/24/icon_Y_shuaxin" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M12,1.5 C15.4955506,1.5 18.592149,3.20811721 20.5006488,5.8352051 L20.5,3.80901699 C20.5,3.53287462 20.7238576,3.30901699 21,3.30901699 C21.0776225,3.30901699 21.1541791,3.32708954 21.2236068,3.3618034 L22.5,4 L22.5,12 L21.2236068,12.6381966 C20.9766175,12.7616912 20.676281,12.6615791 20.5527864,12.4145898 C20.5180725,12.3451621 20.5,12.2686056 20.5,12.190983 L20.5,12 C20.5,7.30557963 16.6944204,3.5 12,3.5 C7.30557963,3.5 3.5,7.30557963 3.5,12 C3.5,16.6944204 7.30557963,20.5 12,20.5 C14.1783769,20.5 16.2255616,19.6785468 17.788251,18.2246937 L19.1505536,19.6889791 C17.2213363,21.4838325 14.6888945,22.5 12,22.5 C6.20101013,22.5 1.5,17.7989899 1.5,12 C1.5,6.20101013 6.20101013,1.5 12,1.5 Z" id="图标颜色" fill="#191F25" fill-rule="nonzero"></path></g></svg></div>\n          </div>' : "") + "\n    " + (l ? '<div class="taobao-app-header ' + ("deny" === c || "denyilegel_sign" === c ? "back" : "close") + '">\n            ' + ("deny" === c || "denyilegel_sign" === c ? '<img src="https://img.alicdn.com/imgextra/i2/O1CN01Cr0X8b1VUUyPnHELY_!!6000000002656-2-tps-33-30.png" />' : '<img src="https://img.alicdn.com/imgextra/i1/O1CN01bTkPvQ1YZU8KCwQgw_!!6000000003073-2-tps-28-28.png" />') + "\n          </div>" : "") + '\n    <div class="content-inside">\n       ' + t + '\n        </div>\n\n    <div class="copyright">\n    ' + (a.isMobile ? n : "") + "\n    <span>" + ("null" === i ? "" : i) + "</span>\n    </div>\n    </div>\n   </div> </div>"
        }
    },
    "./src/modules/punishpage/capgrid.js": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a, i = n("./src/modules/punishpage/base-template.js"), r = (a = i) && a.__esModule ? a : {
            default: a
        }, o = n("./src/modules/punishpage/utils/index.js");
        t.default = {
            template: function(e) {
                var t = e.uuid
                  , n = e.isMobile;
                return (0,
                r.default)(e, ' <div class="bannar">\n            <div class=\'captcha-tips\'>\n                <div id="nocaptcha" style="margin-top:0 !important"></div>\n                <p class="p-uuid-tips captcha-uuid-tips">' + (!n && t ? t : "") + "</p>\n            </div>\n        </div>")
            },
            render: function(e) {
                if (o.isMobile && window.innerWidth > 375 && (document.documentElement.style.fontSize = "37.5px"),
                !o.isMobile && window.innerHeight < 377 && window.innerWidth < window.innerHeight) {
                    var t = 1;
                    try {
                        var n = window.parent.innerWidth / 420
                          , a = window.parent.innerHeight / 320;
                        t = Math.min(n, a)
                    } catch (e) {
                        (0,
                        o.log)(e)
                    }
                    window.parent.postMessage(JSON.stringify({
                        action: "resizeIframe",
                        width: t < 1 ? 420 * t : 420,
                        height: t < 1 ? 320 * t : 320
                    }), "*")
                }
                try {
                    o.isMobile && o.isAjax && !o.isInNativeSdk && (window.parent.innerHeight < window.innerHeight || window.parent.innerWidth < window.innerWidth) && (window.parent.postMessage(JSON.stringify({
                        action: "resizeIframe",
                        width: window.parent.innerWidth,
                        height: window.parent.innerHeight
                    }), "*"),
                    location.reload())
                } catch (e) {
                    (0,
                    o.log)(e)
                }
                c(e),
                (0,
                o.initReferrer)()
            }
        };
        var c = function(e) {
            (0,
            o.loadCaptcha)(e.NCTOKENSTR),
            (0,
            o.loadScript)("https://g.alicdn.com/bsop-static/scratch-captcha/0.0.42/index.js", (function() {
                var t = e.NCAPPKEY
                  , n = e.NCTOKENSTR
                  , a = e.SECDATA
                  , i = e.renderTo
                  , r = e.noCaptchaLanguage
                  , c = e.isTaobaoApp
                  , s = e.notReport
                  , d = e.noCaptchaLanguageConfigJson
                  , p = e.noCaptchaColor
                  , l = e.action
                  , u = e.captchaConfigInfo
                  , f = e.clickSuccess
                  , g = e.clickFail
                  , h = e.dragSuccess
                  , m = e.dragFail
                  , _ = e.connectSuccess
                  , w = e.connectFail
                  , y = document.getElementById("bx-feedback-btn")
                  , v = (0,
                o.getSubmitPathPrefix)(e)
                  , b = v + "/_____tmd_____/report"
                  , k = 0
                  , E = l.replace("captcha", "")
                  , x = E.slice(0, 1).toUpperCase() + E.slice(1);
                (0,
                o.initCaptcha)(),
                window.scratchCaptcha && window.scratchCaptcha.init({
                    token: n,
                    appKey: t,
                    questionUrl: v + "/_____tmd_____/grid" + x + "Get",
                    replaceUrl: v + "/_____tmd_____/grid" + x + "Replace",
                    verifyUrl: v + "/_____tmd_____/grid" + x + "Verify",
                    x5secdata: a,
                    type: E,
                    captchaConfigInfo: u,
                    language: r,
                    isCapGrid: !0,
                    color: p || "orange",
                    isTaobaoApp: c,
                    renderTo: document.querySelector(i),
                    languageConfigJson: d,
                    ppFun: o.powFun,
                    verifySuccess: function(t, n) {
                        var a = void 0;
                        if ("click" === E && (a = f),
                        "drag" === E && (a = h),
                        "connect" === E && (a = _),
                        !n || o.isMiniprogram)
                            (0,
                            o.close)(n, a);
                        else
                            try {
                                (0,
                                o.checkCookie)(n, e, a)
                            } catch (e) {
                                (0,
                                o.log)("setCookie校验失败：" + e),
                                (0,
                                o.close)(n, a)
                            }
                    },
                    initSuccess: function() {
                        o.isInNativeSdk || o.isWindVane || o.isAliApp ? (window.feedbackLinkStr && window.feedbackLinkStr.indexOf("ncInitSuccess") < 0 && (window.feedbackLinkStr += "&ncInitSuccess=true"),
                        window.feedbackLinkStr && window.feedbackLinkStr.indexOf("netError") > -1 && window.feedbackLinkStr.replace("&netError=true", "")) : (y && y.href.indexOf("ncInitSuccess") < 0 && (y.href += "&ncInitSuccess=true"),
                        y && y.href.indexOf("netError") > -1 && y.href.replace("&netError=true", "")),
                        s || (0,
                        o.request)({
                            url: b,
                            type: "GET",
                            data: {
                                x5secdata: a,
                                type: "initSuccess",
                                msg: "capgrid init success",
                                uuid: n
                            },
                            uuid: n
                        })
                    },
                    initFail: function() {
                        o.isInNativeSdk || o.isWindVane || o.isAliApp ? window.feedbackLinkStr && window.feedbackLinkStr.indexOf("netError") < 0 && (window.feedbackLinkStr += "&netError=true") : y && y.href.indexOf("netError") < 0 && (y.href += "&netError=true")
                    },
                    verifyFail: function(t) {
                        o.isInNativeSdk || o.isWindVane || o.isAliApp ? y && window.feedbackLinkStr && window.feedbackLinkStr.indexOf("verifyFail") < 0 && (y.style.color = "#FAAD14",
                        window.feedbackLinkStr += "&verifyFail=true") : y && y.href.indexOf("verifyFail") < 0 && (y.style.color = "#FAAD14",
                        y.href += "&verifyFail=true"),
                        s || ((0,
                        o.request)({
                            url: b,
                            type: "GET",
                            data: {
                                x5secdata: a,
                                type: "verifyFail",
                                msg: t,
                                uuid: n
                            },
                            uuid: n
                        }),
                        3 === ++k && (k = 0,
                        (0,
                        o.screenshot)(e, !1, "Verifyfail screenshot success"))),
                        "click" === E && g && "function" == typeof g ? g() : "drag" === E && m && "function" == typeof m ? m() : "connect" === E && w && "function" == typeof w && w()
                    },
                    jsLoadReport: function(e, t, i) {
                        s || (0,
                        o.request)({
                            url: b,
                            type: "GET",
                            data: {
                                x5secdata: a,
                                type: "load" + e + t,
                                msg: i,
                                uuid: n
                            },
                            uuid: n
                        })
                    }
                })
            }
            ), e, "Capscratch", e.notReport)
        }
    },
    "./src/modules/punishpage/cappuzzle.js": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a, i = n("./src/modules/punishpage/base-template.js"), r = (a = i) && a.__esModule ? a : {
            default: a
        }, o = n("./src/modules/punishpage/utils/index.js");
        t.default = {
            template: function(e) {
                var t = e.uuid
                  , n = e.isMobile;
                return (0,
                r.default)(e, ' <div class="bannar">\n            <div class=\'captcha-tips\'>\n                <div id="nocaptcha" style="margin-top:0 !important"></div>\n                <p class="p-uuid-tips captcha-uuid-tips">' + (!n && t ? t : "") + "</p>\n            </div>\n        </div>")
            },
            render: function(e) {
                c(e),
                (0,
                o.initReferrer)()
            }
        };
        var c = function(e) {
            (0,
            o.loadCaptcha)(e.NCTOKENSTR),
            (0,
            o.loadScript)("https://g.alicdn.com/bsop-static/scratch-captcha/0.0.42/index.js", (function() {
                var t = e.NCAPPKEY
                  , n = e.NCTOKENSTR
                  , a = e.SECDATA
                  , i = e.renderTo
                  , r = e.noCaptchaLanguage
                  , c = e.isTaobaoApp
                  , s = e.notReport
                  , d = e.noCaptchaLanguageConfigJson
                  , p = e.cappuzzleSuccess
                  , l = e.cappuzzleFail
                  , u = document.getElementById("bx-feedback-btn")
                  , f = (0,
                o.getSubmitPathPrefix)(e)
                  , g = f + "/_____tmd_____/report"
                  , h = 0;
                (0,
                o.initCaptcha)(),
                window.scratchCaptcha && window.scratchCaptcha.init({
                    token: n,
                    appKey: t,
                    questionUrl: f + "/_____tmd_____/puzzleCaptchaGet",
                    verifyUrl: f + "/_____tmd_____/puzzleCaptchaValidate",
                    x5secdata: a,
                    type: "puzzle",
                    language: r,
                    renderTo: document.querySelector(i),
                    isTaobaoApp: c,
                    languageConfigJson: d,
                    ppFun: o.powFun,
                    verifySuccess: function(t, n) {
                        if (!n || o.isMiniprogram)
                            (0,
                            o.close)(n, p);
                        else
                            try {
                                (0,
                                o.checkCookie)(n, e, p)
                            } catch (e) {
                                (0,
                                o.log)("setCookie校验失败：" + e),
                                (0,
                                o.close)(n, p)
                            }
                    },
                    initSuccess: function() {
                        o.isInNativeSdk || o.isWindVane || o.isAliApp ? (window.feedbackLinkStr && window.feedbackLinkStr.indexOf("ncInitSuccess") < 0 && (window.feedbackLinkStr += "&ncInitSuccess=true"),
                        window.feedbackLinkStr && window.feedbackLinkStr.indexOf("netError") > -1 && window.feedbackLinkStr.replace("&netError=true", "")) : (u && u.href.indexOf("ncInitSuccess") < 0 && (u.href += "&ncInitSuccess=true"),
                        u && u.href.indexOf("netError") > -1 && u.href.replace("&netError=true", "")),
                        s || (0,
                        o.request)({
                            url: g,
                            type: "GET",
                            data: {
                                x5secdata: a,
                                type: "initSuccess",
                                msg: "cappuzzle init success",
                                uuid: n
                            },
                            uuid: n
                        })
                    },
                    initFail: function() {
                        o.isInNativeSdk || o.isWindVane || o.isAliApp ? window.feedbackLinkStr && window.feedbackLinkStr.indexOf("netError") < 0 && (window.feedbackLinkStr += "&netError=true") : u && u.href.indexOf("netError") < 0 && (u.href += "&netError=true")
                    },
                    verifyFail: function(t) {
                        o.isInNativeSdk || o.isWindVane || o.isAliApp ? u && window.feedbackLinkStr && window.feedbackLinkStr.indexOf("verifyFail") < 0 && (u.style.color = "#FAAD14",
                        window.feedbackLinkStr += "&verifyFail=true") : u && u.href.indexOf("verifyFail") < 0 && (u.style.color = "#FAAD14",
                        u.href += "&verifyFail=true"),
                        s || ((0,
                        o.request)({
                            url: g,
                            type: "GET",
                            data: {
                                x5secdata: a,
                                type: "verifyFail",
                                msg: t,
                                uuid: n
                            },
                            uuid: n
                        }),
                        3 === ++h && (h = 0,
                        (0,
                        o.screenshot)(e, !1, "Verifyfail screenshot success"))),
                        l && "function" == typeof l && l()
                    },
                    jsLoadReport: function(e, t, i) {
                        s || (0,
                        o.request)({
                            url: g,
                            type: "GET",
                            data: {
                                x5secdata: a,
                                type: "load" + e + t,
                                msg: i,
                                uuid: n
                            },
                            uuid: n
                        })
                    }
                })
            }
            ), e, "Cappuzzle", e.notReport)
        }
    },
    "./src/modules/punishpage/capscratch.js": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a, i = n("./src/modules/punishpage/base-template.js"), r = (a = i) && a.__esModule ? a : {
            default: a
        }, o = n("./src/modules/punishpage/utils/index.js");
        t.default = {
            template: function(e) {
                var t = e.uuid
                  , n = e.isMobile;
                return (0,
                r.default)(e, ' <div class="bannar">\n            <div class=\'captcha-tips\'>\n                <div id="nocaptcha" style="margin-top:0 !important"></div>\n                <p class="p-uuid-tips captcha-uuid-tips">' + (!n && t ? t : "") + "</p>\n            </div>\n        </div>")
            },
            render: function(e) {
                c(e),
                (0,
                o.initReferrer)()
            }
        };
        var c = function(e) {
            (0,
            o.loadCaptcha)(),
            (0,
            o.loadScript)("https://g.alicdn.com/bsop-static/scratch-captcha/0.0.43/index.js", (function() {
                var t = e.NCAPPKEY
                  , n = e.NCTOKENSTR
                  , a = e.SECDATA
                  , i = e.notReport
                  , r = e.noCaptchaLanguage
                  , c = e.noCaptchaLanguageConfigJson
                  , s = e.renderTo
                  , d = e.noCaptchaColor
                  , p = e.isTaobaoApp
                  , l = e.capslideSuccess
                  , u = e.capslideFail
                  , f = document.getElementById("bx-feedback-btn")
                  , g = (0,
                o.getSubmitPathPrefix)(e)
                  , h = g + "/_____tmd_____/report"
                  , m = 0;
                (0,
                o.initCaptcha)(),
                window.scratchCaptcha && window.scratchCaptcha.init({
                    token: n,
                    appKey: t,
                    questionUrl: g + "/_____tmd_____/newslidecaptcha",
                    verifyUrl: g + "/_____tmd_____/newslidevalidate",
                    x5secdata: a,
                    language: r,
                    color: d || "orange",
                    renderTo: document.querySelector(s),
                    isTaobaoApp: p,
                    languageConfigJson: c,
                    ppFun: o.powFun,
                    verifySuccess: function(t, n) {
                        if (!n || o.isMiniprogram)
                            (0,
                            o.close)(n, l);
                        else
                            try {
                                (0,
                                o.checkCookie)(n, e, l)
                            } catch (e) {
                                (0,
                                o.log)("setCookie校验失败：" + e),
                                (0,
                                o.close)(n, l)
                            }
                    },
                    initSuccess: function() {
                        o.isInNativeSdk || o.isWindVane || o.isAliApp ? (window.feedbackLinkStr && window.feedbackLinkStr.indexOf("ncInitSuccess") < 0 && (window.feedbackLinkStr += "&ncInitSuccess=true"),
                        window.feedbackLinkStr && window.feedbackLinkStr.indexOf("netError") > -1 && window.feedbackLinkStr.replace("&netError=true", "")) : (f && f.href.indexOf("ncInitSuccess") < 0 && (f.href += "&ncInitSuccess=true"),
                        f && f.href.indexOf("netError") > -1 && f.href.replace("&netError=true", "")),
                        i || (0,
                        o.request)({
                            url: h,
                            type: "GET",
                            data: {
                                x5secdata: a,
                                type: "initSuccess",
                                msg: "capscratch init success",
                                uuid: n
                            },
                            uuid: n
                        })
                    },
                    initFail: function() {
                        o.isInNativeSdk || o.isWindVane || o.isAliApp ? window.feedbackLinkStr && window.feedbackLinkStr.indexOf("netError") < 0 && (window.feedbackLinkStr += "&netError=true") : f && f.href.indexOf("netError") < 0 && (f.href += "&netError=true")
                    },
                    verifyFail: function(t) {
                        o.isInNativeSdk || o.isWindVane || o.isAliApp ? f && window.feedbackLinkStr && window.feedbackLinkStr.indexOf("verifyFail") < 0 && (f.style.color = "#FAAD14",
                        window.feedbackLinkStr += "&verifyFail=true") : f && f.href.indexOf("verifyFail") < 0 && (f.style.color = "#FAAD14",
                        f.href += "&verifyFail=true"),
                        i || ((0,
                        o.request)({
                            url: h,
                            type: "GET",
                            data: {
                                x5secdata: a,
                                type: "verifyFail",
                                msg: t,
                                uuid: n
                            },
                            uuid: n
                        }),
                        3 === ++m && (m = 0,
                        (0,
                        o.screenshot)(e, !1, "Verifyfail screenshot success"))),
                        u && "function" == typeof u && u()
                    },
                    jsLoadReport: function(e, t, r) {
                        i || (0,
                        o.request)({
                            url: h,
                            type: "GET",
                            data: {
                                x5secdata: a,
                                type: "load" + e + t,
                                msg: r,
                                uuid: n
                            },
                            uuid: n
                        })
                    }
                })
            }
            ), e, "Capscratch", e.notReport)
        }
    },
    "./src/modules/punishpage/capslide.js": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a, i = n("./src/modules/punishpage/base-template.js"), r = (a = i) && a.__esModule ? a : {
            default: a
        }, o = n("./src/modules/punishpage/utils/index.js");
        t.default = {
            template: function(e) {
                var t = e.customImage
                  , n = e.uuid
                  , a = e.languageConfig
                  , i = e.isMobile;
                return (0,
                r.default)(e, ' <div class="bannar">\n        <div class=\'bg-img-wrap\'>\n        <img id="bg-img" src="' + t + '" /></div>\n        <div class=\'captcha-tips\'><div class="warnning-text" style="margin-top:0">\n        ' + a["captcha-h5-tips"] + '\n        </div>\n        <center>\n        <div id="nocaptcha" style="margin-top:0 !important">\n        </div> <p class="p-uuid-tips captcha-uuid-tips">' + (!i && n ? n : "") + "</p></div>\n    </center>\n   \n    </div>")
            },
            render: function(e) {
                c(e),
                (0,
                o.initReferrer)()
            }
        };
        var c = function(e) {
            (0,
            o.loadScript)("https://g.alicdn.com/bsop-static/slide-captcha/0.0.18/index.js?t=500", (function() {
                var i = e.NCAPPKEY
                  , r = e.NCTOKENSTR
                  , c = e.SECDATA
                  , s = document.getElementById(a ? "pure-bx-feedback-btn" : "bx-feedback-btn")
                  , d = (0,
                o.getSubmitPathPrefix)(e)
                  , p = d + "/_____tmd_____/report";
                window.index.initSC({
                    token: r,
                    appKey: i,
                    getUrl: d + "/_____tmd_____/newslidecaptcha",
                    postUrl: d + "/_____tmd_____/newslidevalidate",
                    x5secdata: c,
                    language: n,
                    renderTo: document.querySelector(t),
                    callback: function(t) {
                        if (!t || o.isMiniprogram)
                            (0,
                            o.close)(t);
                        else
                            try {
                                (0,
                                o.checkCookie)(t, e)
                            } catch (e) {
                                (0,
                                o.log)("setCookie校验失败：" + e),
                                (0,
                                o.close)(t)
                            }
                    },
                    onload: function(e) {
                        s && s.href.indexOf("ncInitSuccess") < 0 && (s.href += "&ncInitSuccess=true"),
                        s && s.href.indexOf("netError") > -1 && s.href.replace("&netError=true", ""),
                        (0,
                        o.request)({
                            url: p,
                            type: "GET",
                            data: {
                                x5secdata: c,
                                type: "initSuccess",
                                msg: "capslide init success",
                                uuid: r
                            },
                            uuid: r
                        })
                    },
                    onerror: function(e) {
                        s && s.href.indexOf("netError") < 0 && (s.href += "&netError=true")
                    },
                    fail: function(e) {
                        s && s.href.indexOf("verifyFail") < 0 && (s.style.color = "#FAAD14",
                        s.href += "&verifyFail=true"),
                        (0,
                        o.request)({
                            url: p,
                            type: "GET",
                            data: {
                                x5secdata: c,
                                type: "verifyFail",
                                msg: e,
                                uuid: r
                            },
                            uuid: r
                        })
                    }
                })
            }
            ), e, "Capslide", e.notReport);
            var t = e.renderTo
              , n = e.noCaptchaLanguage
              , a = e.pureCaptcha
        }
    },
    "./src/modules/punishpage/captcha.js": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = c(n("./src/modules/punishpage/base-template.js"))
          , i = c(n("./src/modules/punishpage/render.js"))
          , r = c(n("./src/modules/punishpage/pureCaptcha.js"))
          , o = n("./src/modules/punishpage/utils/index.js");
        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        t.default = {
            template: function(e) {
                var t = e.customImage
                  , n = e.uuid
                  , i = e.languageConfig
                  , c = e.pureCaptcha
                  , s = e.isTaobaoApp
                  , d = ' <center>\n    <div id="nocaptcha" style="margin-top:45px;display:none;"> \n    </div>\n    <div id="captcha-loading">\n      <?xml version="1.0" encoding="utf-8"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="34px" height="34px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" style="width:100%;display:block;animation-play-state:paused" ><g transform="translate(80,50)" style="transform:matrix(1, 0, 0, 1, 80, 50);animation-play-state:paused" ><g transform="rotate(0)" style="transform:matrix(1, 0, 0, 1, 0, 0);animation-play-state:paused" ><circle cx="0" cy="0" r="6" fill="#ff5000" fill-opacity="0.125" transform="matrix(1.0625,0,0,1.0625,0,0)" style="transform:matrix(1.0625, 0, 0, 1.0625, 0, 0);animation-play-state:paused" ></circle></g></g>\n      <g transform="translate(71.21320343559643,71.21320343559643)" style="transform:matrix(1, 0, 0, 1, 71.2132, 71.2132);animation-play-state:paused" ><g transform="rotate(45)" style="transform:matrix(0.707107, 0.707107, -0.707107, 0.707107, 0, 0);animation-play-state:paused" ><circle cx="0" cy="0" r="6" fill="#ff5000" fill-opacity="0.25" transform="matrix(1.125,0,0,1.125,0,0)" style="transform:matrix(1.125, 0, 0, 1.125, 0, 0);animation-play-state:paused" ></circle></g></g>\n      <g transform="translate(50,80)" style="transform:matrix(1, 0, 0, 1, 50, 80);animation-play-state:paused" ><g transform="rotate(90)" style="transform:matrix(0, 1, -1, 0, 0, 0);animation-play-state:paused" ><circle cx="0" cy="0" r="6" fill="#ff5000" fill-opacity="0.375" transform="matrix(1.1875,0,0,1.1875,0,0)" style="transform:matrix(1.1875, 0, 0, 1.1875, 0, 0);animation-play-state:paused" ></circle></g></g>\n      <g transform="translate(28.786796564403577,71.21320343559643)" style="transform:matrix(1, 0, 0, 1, 28.7868, 71.2132);animation-play-state:paused" ><g transform="rotate(135)" style="transform:matrix(-0.707107, 0.707107, -0.707107, -0.707107, 0, 0);animation-play-state:paused" ><circle cx="0" cy="0" r="6" fill="#ff5000" fill-opacity="0.5" transform="matrix(1.25,0,0,1.25,0,0)" style="transform:matrix(1.25, 0, 0, 1.25, 0, 0);animation-play-state:paused" ></circle></g></g>\n      <g transform="translate(20,50.00000000000001)" style="transform:matrix(1, 0, 0, 1, 20, 50);animation-play-state:paused" ><g transform="rotate(180)" style="transform:matrix(-1, 0, 0, -1, 0, 0);animation-play-state:paused" ><circle cx="0" cy="0" r="6" fill="#ff5000" fill-opacity="0.625" transform="matrix(1.3125,0,0,1.3125,0,0)" style="transform:matrix(1.3125, 0, 0, 1.3125, 0, 0);animation-play-state:paused" ></circle></g></g>\n      <g transform="translate(28.78679656440357,28.786796564403577)" style="transform:matrix(1, 0, 0, 1, 28.7868, 28.7868);animation-play-state:paused" ><g transform="rotate(225)" style="transform:matrix(-0.707107, -0.707107, 0.707107, -0.707107, 0, 0);animation-play-state:paused" ><circle cx="0" cy="0" r="6" fill="#ff5000" fill-opacity="0.75" transform="matrix(1.375,0,0,1.375,0,0)" style="transform:matrix(1.375, 0, 0, 1.375, 0, 0);animation-play-state:paused" ></circle></g></g>\n      <g transform="translate(49.99999999999999,20)" style="transform:matrix(1, 0, 0, 1, 50, 20);animation-play-state:paused" ><g transform="rotate(270)" style="transform:matrix(0, -1, 1, 0, 0, 0);animation-play-state:paused" ><circle cx="0" cy="0" r="6" fill="#ff5000" fill-opacity="0.875" transform="matrix(1.4375,0,0,1.4375,0,0)" style="transform:matrix(1.4375, 0, 0, 1.4375, 0, 0);animation-play-state:paused" ></circle></g></g>\n      <g transform="translate(71.21320343559643,28.78679656440357)" style="transform:matrix(1, 0, 0, 1, 71.2132, 28.7868);animation-play-state:paused" ><g transform="rotate(315)" style="transform:matrix(0.707107, -0.707107, 0.707107, 0.707107, 0, 0);animation-play-state:paused" ><circle cx="0" cy="0" r="6" fill="#ff5000" fill-opacity="1" transform="matrix(1.5,0,0,1.5,0,0)" style="transform:matrix(1.5, 0, 0, 1.5, 0, 0);animation-play-state:paused" ></circle></g></g>\x3c!-- generated by https://loading.io/ --\x3e</svg>\n    </div>\n    <p class="p-uuid-tips captcha-uuid-tips">' + (!o.isMobile && n ? n : "") + '</p></div>\n</center>\n<form id="nc-verify-form" action="' + e.FORMACTIOIN + '" method="GET">\n    <input name="nc_token" value="' + e.NCTOKENSTR + '" type="hidden">\n    <input name="nc_session_id" id="nc-session-id" value="" type="hidden">\n    <input name="nc_sig" id="nc-sig" value="" type="hidden">\n    <input name="x5sec_domain" id="x5sec_domain" value="" type="hidden">\n    <input name="x5secdata" id="x5secdata" type="hidden" value="' + e.SECDATA + '">\n    <input name="x5step" id="x5step" type="hidden" value="' + e.BXSTEP + '">\n    <input name="ajax" id="ajax" type="hidden" value="true">\n    <input name="nc_app_key" id="nc_app_key" type="hidden" value="' + e.NCAPPKEY + '">\n</form>';
                return c ? "" + r.default + d : (0,
                a.default)(e, ' <div class="bannar">\n        ' + (s ? "<div class='captcha-tips'>\n                <div class=\"warnning-text\">\n                  " + i["captcha-h5-tips"] + "\n                </div>\n              </div>\n              <div class='captcha-bg' style='width: " + Math.min(window.innerWidth || 344, 344) + 'px;\'>\n                <div class=\'bg-img-wrap\'>\n                  <img id="bg-img" src="https://img.alicdn.com/imgextra/i4/O1CN01rVMa7f1jpTk63W4Zj_!!6000000004597-2-tps-392-239.png" onerror="customImageError(this)" />\n                </div>\n                ' + d : '<div class=\'bg-img-wrap\'>\n                <img id="bg-img" src="' + t + '" onerror="customImageError(this)" />\n              </div>\n              <div class=\'captcha-tips\'>\n                <div class="warnning-text">\n                  ' + i["captcha-h5-tips"] + "\n                </div>\n                " + d) + "\n      </div>")
            },
            ajaxSubmit: l,
            submit: d,
            formSubmit: function(e, t) {
                var n = p(e, t);
                document.getElementById("nc-verify-form").action = n.url,
                document.getElementById("nc-verify-form").submit()
            },
            render: function(e) {
                s(e),
                (0,
                o.initReferrer)(),
                e.pureCaptcha && (0,
                o.pureRender)("nocaptcha"),
                e.isTaobaoApp && (0,
                o.addEvent)("resize", window, (function() {
                    location.reload()
                }
                ))
            }
        };
        var s = function(e) {
            var t = ""
              , n = e.NCTOKENSTR
              , a = e.SECDATA
              , i = (0,
            o.getSubmitPathPrefix)(e) + "/_____tmd_____/report";
            try {
                t = e.isMobile && -1 === location.search.indexOf("pc_native=1") ? "register_h5" : "register",
                window.AWSC ? T() : (0,
                o.loadScript)("https://michikatsching.github.io/awsc.js", T, e, "AWSC", e.notReport)
            } catch (e) {
                (0,
                o.log)("加载滑块js异常，uuid：" + n + "，error：" + (e && e.message || JSON.stringify(e)))
            }
            var r = e.renderTo
              , c = e.NCAPPKEY
              , s = e.NCTOKENSTR
              , p = e.SECDATA
              , u = e.noCaptchaCallback
              , f = e.noCaptchaLanguage
              , g = e.noCaptchaLanguageCont
              , h = e.preNoCaptchaSubmit
              , m = e.noCaptchaSuccess
              , _ = e.noCaptchaFail
              , w = e.noCaptchaError
              , y = e.captchaFail
              , v = e.captchaError
              , b = e.isCaptchaLanguageI18n
              , k = e.languageConfig
              , E = e.pureCaptcha
              , x = e.ajaxSubmit
              , C = 0
              , S = {
                renderTo: r,
                appkey: c,
                token: s,
                scene: t,
                reportUrl: i + "?x5secdata=" + a + "&",
                callback: function(e) {
                    if (u)
                        return u(!1, e);
                    h && h(),
                    d(e)
                },
                fail: function(t) {
                    if (E && !document.getElementById("pure-bx-feedback-btn")) {
                        var r = document.createElement("div");
                        r.innerHTML = (0,
                        o.getFeedbackLink)(k["pure-feedback-link"], "pure-bx-feedback-btn", n, e),
                        document.body.appendChild(r)
                    }
                    var c = document.getElementById(E ? "pure-bx-feedback-btn" : "bx-feedback-btn");
                    c && (c.style.color = "#FAAD14"),
                    window.ncFailCode = t,
                    window.ncFailCodeList = window.ncFailCodeList || [],
                    window.ncFailCodeList.push(t),
                    o.isInNativeSdk || o.isWindVane || o.isAliApp ? window.feedbackLinkStr && window.feedbackLinkStr.indexOf(!1) ? window.feedbackLinkStr = window.feedbackLinkStr.split("errorcode=")[0] + "&errorcode=" + window.ncFailCodeList.join("%2C") : window.feedbackLinkStr += "&errorcode=" + window.ncFailCodeList.join("%2C") : c && (c.href.indexOf(!1) ? c.href = c.href.split("errorcode=")[0] + "&errorcode=" + window.ncFailCodeList.join("%2C") : c.href += "&errorcode=" + window.ncFailCodeList.join("%2C")),
                    e.notReport || ((0,
                    o.request)({
                        url: i,
                        type: "GET",
                        data: {
                            x5secdata: a,
                            type: "verifyFail",
                            msg: t,
                            uuid: n
                        },
                        uuid: n
                    }),
                    3 === ++C && (C = 0,
                    (0,
                    o.screenshot)(e, !1, "Verifyfail screenshot success"))),
                    _ && _(t),
                    y && y(t)
                },
                error: function(e) {
                    window.ncErrorCode = e,
                    w && w(e),
                    v && v(e)
                }
            };
            function T() {
                e.notReport || (0,
                o.request)({
                    url: i,
                    type: "GET",
                    data: {
                        x5secdata: p,
                        type: "loadSuccessAWSC",
                        msg: "AWSC.js_load_success",
                        uuid: s
                    },
                    uuid: s
                });
                try {
                    (0,
                    o.loadET)(e, i),
                    (0,
                    o.loadNC)(),
                    AWSC.use("nc", (function(t, n) {
                        var a = document.getElementById("nocaptcha")
                          , r = document.getElementById("captcha-loading");
                        if ("loaded" !== t ? (e.notReport || (0,
                        o.request)({
                            url: i,
                            type: "GET",
                            data: {
                                x5secdata: p,
                                type: "loadErrorNC",
                                msg: "nc.js_load_" + t,
                                uuid: s
                            },
                            uuid: s
                        }),
                        a && (a.style.display = "block"),
                        r && (r.style.display = "none")) : e.notReport || (0,
                        o.request)({
                            url: i,
                            type: "GET",
                            data: {
                                x5secdata: p,
                                type: "loadSuccessNC",
                                msg: "nc.js_load_" + t,
                                uuid: s
                            },
                            uuid: s
                        }),
                        (0,
                        o.startRenderCaptcha)(),
                        window.nc = n.init(S),
                        document.getElementById("nc_1_nocaptcha")) {
                            (0,
                            o.renderCaptchaSuccess)();
                            var d = 0
                              , l = setInterval((function() {
                                d++,
                                (window._config_.ppModule || 5 === d) && (clearInterval(l),
                                l = null,
                                (0,
                                o.runPow)(),
                                (0,
                                o.powFun)(s, c, null, "1", "1", "", (function() {
                                    document.getElementById("nocaptcha").style.display = "block",
                                    document.getElementById("captcha-loading").style.display = "none"
                                }
                                )))
                            }
                            ), 200)
                              , u = document.getElementById(E ? "pure-bx-feedback-btn" : "bx-feedback-btn");
                            o.isInNativeSdk || o.isWindVane || o.isAliApp ? window.feedbackLinkStr += "&ncInitSuccess=true" : u && (u.href += "&ncInitSuccess=true")
                        } else
                            a && (a.style.display = "block"),
                            r && (r.style.display = "none")
                    }
                    ), {
                        timeout: 3e4
                    })
                } catch (e) {
                    (0,
                    o.log)("渲染" + ("register_h5" === S.scene ? "h5" : "web") + "滑块异常，uuid：" + s + "，error：" + (e && e.message || JSON.stringify(e))),
                    document.getElementById("nocaptcha") && (document.getElementById("nocaptcha").style.display = "block"),
                    document.getElementById("captcha-loading") && (document.getElementById("captcha-loading").style.display = "none")
                }
            }
            f && (S.language = f),
            S.upLang = {},
            S.upLang[f] = {
                BXMARK: g.BXMARK
            },
            (window._custom_config_ && window._custom_config_.noCaptchaLanguageCont || g && (o.isMobile || b || "pl_PL" === f || "uk_UA" === f || E)) && (S.upLang = {},
            S.upLang[f] = g),
            u || (S.replaceCallback = function(t) {
                (0,
                o.slideEnd)();
                var n = (new Date).valueOf();
                x && "function" == typeof x ? ((0,
                o.runCustomCallback)(),
                x(e, t, m)) : l(e, t, m, n)
            }
            )
        };
        function d(e) {
            document.getElementById("nc-session-id").value = e.csessionid,
            document.getElementById("nc-sig").value = e.sig,
            document.getElementById("nc-verify-form").submit()
        }
        function p(e, t) {
            var n = location.pathname.indexOf("x5secdata%3D") > -1
              , a = {
                slidedata: JSON.stringify(t.data),
                x5secdata: e.SECDATA
            }
              , i = window._config_ || {}
              , r = i.partitionedLabel
              , c = i.cookieDisabled
              , s = i.ppt
              , d = i.nonce;
            if (r && (a.partitionedLabel = r),
            c && (a.cookieDisabled = c),
            e.pureCaptcha && (a.pureCaptcha = !0),
            void 0 !== s && (a.ppt = s),
            window.crypto && window.crypto.genRandomValues && "function" == typeof window.crypto.genRandomValues)
                try {
                    a._rand = window.crypto.genRandomValues(t.data.n)
                } catch (t) {
                    a._rand = "run_error",
                    (0,
                    o.log)(t.message, 29, e.NCTOKENSTR, e.NCAPPKEY)
                }
            else
                a._rand = d && "###nonce###" !== d ? "load_success" === window._config_._rand ? "empty" : window._config_._rand || "not_loaded" : "no_nonce";
            if (n) {
                var p = o.isLandscape ? "&landscape=1" : "";
                return {
                    data: a,
                    url: (0,
                    o.getSubmitPathPrefix)(e) + "/_____tmd_____/slide/" + encodeURIComponent("slidedata=" + JSON.stringify(t.data) + "&x5secdata=" + e.SECDATA + p)
                }
            }
            return o.isLandscape && (a.landscape = 1),
            {
                data: a,
                url: (0,
                o.getSubmitPathPrefix)(e) + "/_____tmd_____/slide"
            }
        }
        function l(e, t, n, a) {
            (0,
            o.runDefaultCallback)();
            var i = p(e, t);
            n && "function" == typeof n && (g = n),
            a && i.data && i.data && (i.data.ts = a),
            t.success = t.success || g,
            t.fail = t.fail || g,
            (0,
            o.startVerify)();
            var r = {
                url: i.url,
                type: "GET",
                dataType: "json",
                data: i.data,
                sign: !0,
                ppSign: window._config_.ppSign,
                uuid: e.NCTOKENSTR,
                success: function(n, a, i) {
                    try {
                        if (n.indexOf("Deny from x5") > -1)
                            return t.success(n, i, e);
                        if (n.indexOf("window._config_") > -1)
                            return void u(n);
                        if ((n = JSON.parse(n)).rgv587_flag)
                            return void f(n, e);
                        if (n.result && 0 === n.result.code)
                            g(n, i, e);
                        else if ((0,
                        o.verifyFail)(),
                        (0,
                        o.verifyRePow)(),
                        (0,
                        o.powFun)(e.NCTOKENSTR, e.NCAPPKEY, n.result.pp, "1", "1", "1"),
                        t.success(n, i, e),
                        n.result && 8778 === n.result.code) {
                            var r = document.getElementById("`nc_1_refresh1`");
                            r && (0,
                            o.addEvent)(o.isMobile ? "touchstart" : "mousedown", r, (function() {
                                (0,
                                o.close)(i)
                            }
                            ))
                        }
                    } catch (t) {
                        g(n, i, e)
                    }
                },
                error: function(e) {
                    g()
                }
            };
            if (e.customRequest && "function" == typeof e.customRequest)
                try {
                    (0,
                    o.startCustomVerify)(),
                    (0,
                    o.log)("命中自定义request", 24, e.NCTOKENSTR, e.NCAPPKEY),
                    e.customRequest(r)
                } catch (t) {
                    (0,
                    o.log)(t.message, 24, e.NCTOKENSTR, e.NCAPPKEY),
                    setTimeout((function() {
                        (0,
                        o.close)()
                    }
                    ), 100)
                }
            else
                (0,
                o.request)(r)
        }
        window.customImageError = function(e) {
            if ("https://img.alicdn.com/imgextra/i1/O1CN01rAc7zy1I9ns9kkTth_!!6000000000851-2-tps-134-134.png" !== e.src) {
                var t = window._config_ || {}
                  , n = t.NCTOKENSTR
                  , a = t.NCAPPKEY;
                (0,
                o.log)(window._custom_config_ && window._custom_config_.templateName, 11, n, a, e.src),
                e.src = "https://img.alicdn.com/imgextra/i1/O1CN01rAc7zy1I9ns9kkTth_!!6000000000851-2-tps-134-134.png"
            }
        }
        ;
        var u = function(e) {
            (0,
            o.upgrade)();
            var t = e.replace(/\s+/g, "").match(/window\.\_config_\=([^;]+)/)
              , n = "";
            t && t[1] && (n = t[1]),
            e = n && JSON.parse(n),
            window._config_ = e,
            document.getElementById("x5secdata").value = e.SECDATA,
            document.getElementById("nc_app_key").value = e.NCAPPKEY,
            e && void 0 === e.canFeedback && (e.canFeedback = (0,
            o.canFeedback)(e.action)),
            new i.default(e).render()
        }
          , f = function(e, t) {
            (0,
            o.upgrade)(t.NCTOKENSTR);
            var n = (0,
            o.getSubmitPathPrefix)(t) + "/_____tmd_____" + e.url.split("_____tmd_____")[1];
            o.isInNativeSdk && (n += "&native=1"),
            location.replace(n)
        };
        var g = function(e, t, n) {
            if (!t || o.isMiniprogram)
                (0,
                o.close)(t, n.captchaSuccess);
            else
                try {
                    (0,
                    o.checkCookie)(t, n, n.captchaSuccess)
                } catch (e) {
                    (0,
                    o.log)("setCookie校验失败：" + e),
                    (0,
                    o.close)(t, n.captchaSuccess)
                }
        }
    },
    "./src/modules/punishpage/close.js": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n("./src/modules/punishpage/utils/index.js");
        t.default = {
            template: function() {
                return "<div>跳转中，如果跳转失败，请手动回退。 Jumping,</div>"
            },
            render: function() {
                (0,
                a.close)()
            }
        }
    },
    "./src/modules/punishpage/constant.js": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.CUSTOM_PROPS = ["customImage", "logo", "logoLink", "copyright", "noCaptchaCallback", "language", "languageConfig", "languageConfigJson", "noCaptchaLanguage"],
        t.POW_ACTION = ["captcha", "captchacapslide", "captchacapslidev2", "captchascene", "captchacappuzzle", "captchadrag", "captchaclick", "captchaconnect"],
        t.SERVER_TEXT_ACTION = ["captcha", "captchacapslidev2", "captchascene", "captchacappuzzle", "captchadrag", "captchaclick", "captchaconnect"]
    },
    "./src/modules/punishpage/deny.js": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = o(n("./src/modules/punishpage/base-template.js"))
          , i = n("./src/modules/punishpage/utils/index.js")
          , r = o(n("./src/modules/punishpage/pureDenyWait.js"));
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        t.default = {
            template: function(e) {
                var t = e.languageConfig
                  , n = e.uuid
                  , o = e.uuidOrigin
                  , c = e.customImage
                  , s = e.appUpgrade
                  , d = e.upgradeHeaderImage
                  , p = e.upgradeImage
                  , l = e.upgradeText
                  , u = e.upgradeUrl
                  , f = e.upgradeBtnText
                  , g = e.upgradeBtnColor
                  , h = e.pureDenyWait
                  , m = e.cdc
                  , _ = e.isTaobaoApp
                  , w = document.referrer;
                return w.indexOf("___tmd___") > -1 && (w = ""),
                h ? r.default + '<div id="deny">\n              <img src="https://img.alicdn.com/imgextra/i1/O1CN01UpZUYt1mqnSN1BRl1_!!6000000005006-55-tps-14-14.svg">\n              <div class="deny-text">' + (t["deny-pure-tips"] || t["deny-h5-tips"]) + (0,
                i.getFeedbackLink)(t["feedback-link"], "pure-bx-feedback-btn", o, e) + "</div>\n          </div>" : (0,
                a.default)(e, "<div " + (s ? 'class="bannar app-upgrade"' : 'class="bannar"') + ">\n        " + (s ? '<div class="header-img"><div id="header-inner-img" style="background-image:url(\'' + (d || "https://img.alicdn.com/tfs/TB1sgcIkWNj0u4jSZFyXXXgMVXa-154-37.png") + "')\"></div></div>" : "") + '\n        <img id="bg-img" src="' + (s ? p || "https://img.alicdn.com/tfs/TB1vbn5jBFR4u4jSZFPXXanzFXa-200-200.png" : _ ? "https://img.alicdn.com/imgextra/i1/O1CN01ZRs4wF1UQXwEcJFnZ_!!6000000002512-2-tps-320-200.png" : c) + '" />\n        <div class="warnning-text' + (m ? " cdc" : "") + '" style="margin-bottom: 100px;">\n            ' + (s ? l || t["upgrade-text"] : m ? "网络服务有点问题<p>“别紧张，试试看刷新页面~”</p>" : t["deny-h5-tips"]) + "\n            \n            " + (e.showCenterClose && !s ? '<p style="text-align:center;margin-top: 10px;"><a  class="btn-submit-close" id="js-btn-submit-close" href="javascript:void(0)">' + t["close-btn-text"] + "</a>\n            </p>" : "") + "\n            " + (m && !s ? '<p style="text-align:center;margin-top: 10px;"><a  class="btn-cdc-solution" href="https://g.alicdn.com/sd/punish/cdc_deny_solution.html" target="_blank" rel="noreferrer">' + t["solution-btn-text"] + "</a>\n            </p>" : "") + "\n            " + (s ? '<a id="upgrade-btn" ' + (u ? 'href="' + u + '" ' : " ") + " " + (g ? 'style="background-color:' + g + '"' : "") + ">" + (f || t["close-btn-text"]) + "</a>" : "") + '\n            <p class="p-uuid-tips">' + (!i.isMobile && n ? n : "") + "</p>\n            " + (i.isMobile || !w || i.isAjax ? "" : '<a class="back-referrer" href=' + w + "><img class='back-up-img' src='https://img.alicdn.com/tfs/TB1AWGWD1L2gK0jSZFmXXc7iXXa-200-200.png' />" + t["previous-page"] + "</a>") + "\n        </div>\n    </div>")
            },
            render: function(e) {
                if (e.pureDenyWait && (0,
                i.pureRender)("deny"),
                e.appUpgrade) {
                    var t = encodeURIComponent(location.href.match(/uuid=([^&]+)/) && location.href.match(/uuid=([^&]+)/)[1] || e.NCTOKENSTR);
                    "test" !== t && "###NCTOKENSTR###" !== t && t && ((new Image).src = "https://fourier.alibaba.com/ts?ext=24&uuid=" + t)
                }
            }
        }
    },
    "./src/modules/punishpage/index.js": function(e, t, n) {
        "use strict";
        n("./src/modules/punishpage/render.js"),
        n("./src/modules/punishpage/style/index.less")
    },
    "./src/modules/punishpage/nlp.js": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a, i = n("./src/modules/punishpage/base-template.js"), r = (a = i) && a.__esModule ? a : {
            default: a
        }, o = n("./src/modules/punishpage/utils/index.js");
        t.default = {
            template: function(e) {
                var t = e.customImage
                  , n = e.uuid
                  , a = e.languageConfig
                  , i = e.isMobile;
                return (0,
                r.default)(e, ' <div class="bannar">\n        <div class=\'bg-img-wrap\'>\n        <img id="bg-img" src="' + t + '" /></div>\n        <div class=\'captcha-tips\'><div class="warnning-text">\n        ' + a["captcha-h5-tips"] + '\n        </div>\n        <center>\n        <div id="nocaptcha-nlp" style="width:100%">\n        </div> <p class="p-uuid-tips captcha-uuid-tips">' + (!i && n ? n : "") + '</p></div>\n    </center>\n    <form id="nc-verify-form" action="' + e.FORMACTIOIN + '" method="GET">\n        <input name="nc_token" value="' + e.NCTOKENSTR + '" type="hidden">\n        <input name="nc_session_id" id="nc-session-id" value="" type="hidden">\n        <input name="nc_sig" id="nc-sig" value="" type="hidden">\n        <input name="x5sec_domain" id="x5sec_domain" value="" type="hidden">\n        <input name="x5secdata" id="x5secdata" type="hidden" value="' + e.SECDATA + '">\n        <input name="x5step" id="x5step" type="hidden" value="' + e.BXSTEP + '">\n        <input name="ajax" id="ajax" type="hidden" value="true">\n        <input name="nc_app_key" id="nc_app_key" type="hidden" value="' + e.NCAPPKEY + '">\n        <input name="native" id="native" type="hidden" value="' + (o.isInNativeSdk ? "1" : "0") + '">\n    </form>\n    </div>')
            },
            render: function(e) {
                c(e),
                (0,
                o.initReferrer)()
            }
        };
        var c = function(e) {
            var t = e.NCAPPKEY
              , n = e.NCTOKENSTR
              , a = e.SECDATA
              , i = e.isMobile
              , r = (0,
            o.getSubmitPathPrefix)(e) + "/_____tmd_____/report";
            (0,
            o.loadScript)("//g.alicdn.com/sd/quizCaptcha/0.0.16/index.js", (function() {
                var c = {
                    appKey: t,
                    scene: "lc_register",
                    renderTo: "#nocaptcha-nlp",
                    token: n,
                    success: function(e) {
                        (0,
                        o.close)()
                    },
                    fail: function(t) {
                        !i && o.isAjax && (document.getElementsByClassName("token-enc")[0].innerHTML = (0,
                        o.getFeedbackLink)(n, "bx-feedback-btn", n, e));
                        var c = document.getElementById("bx-feedback-btn");
                        o.isInNativeSdk || o.isWindVane || o.isAliApp ? c && window.feedbackLinkStr && window.feedbackLinkStr.indexOf("verifyFail") < 0 && (c.style.color = "#FAAD14",
                        window.feedbackLinkStr += "&verifyFail=true") : c && c.href.indexOf("verifyFail") < 0 && (c.style.color = "#FAAD14",
                        c.href += "&verifyFail=true"),
                        (0,
                        o.request)({
                            url: r,
                            type: "GET",
                            data: {
                                x5secdata: a,
                                type: "verifyFail",
                                msg: t && t.code || t,
                                uuid: n
                            },
                            uuid: n
                        })
                    },
                    initSuccess: function(t) {
                        var c = document.getElementById("bx-feedback-btn");
                        !i && o.isAjax && (document.getElementsByClassName("token-enc")[0].innerHTML = (0,
                        o.getFeedbackLink)(n, "bx-feedback-btn", n, e).replace("</a>", "") + '<span class="tooltip-text">点我反馈</span></a>',
                        c = document.getElementById("bx-feedback-btn"),
                        o.isInNativeSdk || o.isWindVane || o.isAliApp ? c && window.feedbackLinkStr && window.feedbackLinkStr.indexOf("verifyFail") < 0 && t && (c.style.color = "#FAAD14",
                        window.feedbackLinkStr += "&verifyFail=true") : c && c.href.indexOf("verifyFail") < 0 && t && (c.style.color = "#FAAD14",
                        c.href += "&verifyFail=true"));
                        o.isInNativeSdk || o.isWindVane || o.isAliApp ? window.feedbackLinkStr && window.feedbackLinkStr.indexOf("ncInitSuccess") < 0 && (window.feedbackLinkStr += "&ncInitSuccess=true") : c && c.href.indexOf("ncInitSuccess") < 0 && (c.href += "&ncInitSuccess=true"),
                        (0,
                        o.request)({
                            url: r,
                            type: "GET",
                            data: {
                                x5secdata: a,
                                type: "initSuccess",
                                msg: "nlp init success",
                                uuid: n
                            },
                            uuid: n
                        })
                    }
                };
                o.isAjax && (c.width = 360);
                new window.quizCaptcha(c).init()
            }
            ), e, "NLP", e.notReport)
        }
    },
    "./src/modules/punishpage/pureCaptcha.js": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = "<style>\n/* PC 端样式自定义  */\nbody .bg-img-wrap,\nbody .warnning-text,\nbody .copyright,\n#logo,\n.bx-pu-qrcode-wrap {\n  display: none;\n}\n\nbody .content-inside {\n  padding: 0;\n}\n\n#nocaptcha {\n  margin-top: 0 !important;\n  width: auto;\n}\nbody #nc_1_nocaptcha {\n  margin: 0 !important;\n}\nbody .nc-container #nc_2_wrapper,\nbody .nc-container.tb-login #nc_2_wrapper {\n  max-width: none !important;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n}\n\nbody .nc-container #nc_1_wrapper,\nbody .nc-container.tb-login #nc_1_wrapper {\n  max-width: none !important;\n}\n\n/* 移动端样式自定义 */\n\n@media only screen and (-webkit-device-pixel-ratio: 2) and (max-device-height: 568px) and (min-device-width: 320px) {\n  #nocaptcha ._nc .stage1 .button .icon {\n    bottom: 0px;\n  }\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n}\n\nhtml,\nbody {\n  width: 100%;\n  height: 100%;\n  background-color: #fff;\n}\n\nbody,\np {\n  text-align: center;\n}\n\nbody .baxia-container {\n  margin-top: 20px;\n}\n\n#baxia-dialog-content {\n  height: 40px !important;\n}\n\n.custom-dialog-wrapper {\n  height: 40px;\n}\n\n#nocaptcha ._nc .stage1 {\n  height: 40px;\n  border-radius: 0;\n  background-color: transparent;\n}\n\n#nocaptcha ._nc .stage {\n  padding: 0;\n}\n\n#nocaptcha ._nc .stage1 .slider {\n  position: static;\n  left: 0;\n  right: 0;\n  height: 40px;\n  background-color: #e8e8e8;\n  border-radius: 0;\n}\n\n#nocaptcha ._nc .stage1 .slider .track {\n  border-radius: 0;\n}\n\n#nocaptcha ._nc .stage1 .track div,\n#nocaptcha ._nc .stage1 .label {\n  height: 40px;\n  line-height: 40px;\n}\n#nocaptcha {\n  max-height: 40px !important;\n  width: auto !important;\n}\n\n#nocaptcha ._nc .stage1 .label {\n}\n\n#nocaptcha ._nc .stage1 .button {\n  width: 40px;\n  height: 38px;\n  border: 1px solid #ccc;\n  border-radius: 0;\n  box-shadow: none;\n}\n\n#nocaptcha ._nc .icon-slide-arrow {\n  font-size: 16px;\n  color: #737383;\n}\n\n#nocaptcha ._nc .stage1 .icon {\n  left: 5px;\n  top: 14px;\n}\n\n#nocaptcha ._nc .stage1 {\n  height: 40px;\n}\n\n@media only screen and (-webkit-device-pixel-ratio: 2) and (max-device-height: 568px) and (min-device-width: 320px) {\n  #nocaptcha ._nc .stage1 .icon {\n    bottom: 14px;\n  }\n}\n\n#nocaptcha ._nc .stage1 .icon.icon-load-c {\n  top: 0px;\n}\n\n#nocaptcha ._nc .stage3 {\n  height: 40px;\n  font-size: 12px;\n  text-align: right;\n}\n\n#nocaptcha ._nc .stage3 .title {\n  margin: 0px;\n  font-size: 12px;\n  color: #e5a042;\n}\n\n#nocaptcha ._nc .menu {\n  width: auto;\n  margin: 0px 5px;\n  position: initial;\n}\n\n#nocaptcha ._nc .stage3 .menu {\n  position: initial;\n  display: initial;\n  margin: 0 5px;\n  width: auto;\n  height: auto;\n  border-radius: 0;\n  border: none;\n}\n\n#nocaptcha ._nc .menu.nc-sep {\n  display: none;\n}\n\n#nocaptcha ._nc .menu .label {\n  height: 12px;\n  line-height: 12px;\n  font-size: 12px;\n  position: initial;\n  color: #0394f5;\n}\n\n#nocaptcha ._nc .stage3 .menu .label {\n  font-size: 12px;\n  line-height: 12px;\n  color: #0394f5;\n}\n\n#nocaptcha ._nc .menu .icon {\n  font-size: 12px;\n  margin-right: 5px;\n  height: 12px;\n  width: 12px;\n}\n\n#nocaptcha ._nc .stage3 .menu .icon {\n  color: #999;\n  line-height: normal;\n}\n\n#nocaptcha ._nc .stage3 .menu.feedback .icon {\n  font-size: 12px;\n}\n\n#nocaptcha ._nc .menu .icon::before {\n  color: #0394f5;\n}\n\n#nocaptcha ._nc .stage1 .icon.icon-ok {\n  top: 0px;\n}\n\n#pure-bx-feedback-btn {\n  position: absolute;\n  color: #999;\n  font-size: 12px;\n  right: 6px;\n  top: 9px;\n  z-index: 9999;\n}\n</style>"
    },
    "./src/modules/punishpage/pureDenyWait.js": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = "<style>\n#deny {\n    background-color: #FFF1F0;\n    border: 1px solid #FFCCC7;\n}\n#wait {\n    background-color: #FFF4E3;\n    border: 1px solid #FEC14D;\n}\n#deny, #wait {\n    height: auto;\n    width: calc(100% - 2px);\n    width: -moz-calc(100% - 2px);\n    width: -webkit-calc(100% - 2px);\n    border-radius: 2px;\n}\n#deny img,#wait img {\n    width: 14px;\n    height: 14px;\n    margin: 9px 0px 9px 16px;\n    position: absolute;\n}\n#deny .deny-text,#wait .deny-text {\n    font-weight: 400;\n    font-size: 14px;\n    color: rgba(0,0,0,0.65);\n    letter-spacing: 0;\n    line-height: 22px;\n    margin: 5px 16px 5px 38px;\n    white-space: normal;\n    word-wrap: break-word;\n}\n#pure-bx-feedback-btn {\n    position: absolute;\n    text-decoration: none;\n    color: #999;\n    font-size: 12px;\n    right: 16px;\n}\n</style>"
    },
    "./src/modules/punishpage/render.js": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n)
                    Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
            }
            return e
        }
          , i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value"in a && (a.writable = !0),
                    Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n),
                a && e(t, a),
                t
            }
        }()
          , r = x(n("./src/modules/punishpage/deny.js"))
          , o = x(n("./src/modules/punishpage/wait.js"))
          , c = x(n("./src/modules/punishpage/nlp.js"))
          , s = x(n("./src/modules/punishpage/captcha.js"))
          , d = x(n("./src/modules/punishpage/close.js"))
          , p = x(n("./src/modules/punishpage/capslide.js"))
          , l = x(n("./src/modules/punishpage/capscratch.js"))
          , u = x(n("./src/modules/punishpage/cappuzzle.js"))
          , f = x(n("./src/modules/punishpage/capgrid.js"))
          , g = x(n("./src/modules/punishpage/vi.js"))
          , h = x(n("./src/modules/punishpage/upgrade.js"))
          , m = x(n("./src/modules/i18n/language.js"))
          , _ = n("./src/modules/punishpage/utils/index.js")
          , w = function(e) {
            if (e && e.__esModule)
                return e;
            var t = {};
            if (null != e)
                for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.default = e,
            t
        }(_)
          , y = n("./src/modules/punishpage/constant.js")
          , v = n("./src/modules/punishpage/utils/i18n-captcha.js")
          , b = n("./src/modules/punishpage/utils/index.js")
          , k = x(n("./src/modules/i18n/nocaptcha-language.js"))
          , E = x(n("./src/modules/pow/index.js"));
        function x(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var C = {
            deny: r.default,
            block: r.default,
            wait: o.default,
            captcha: s.default,
            captchanlp: c.default,
            captchacapslide: p.default,
            captchacapslidev2: l.default,
            captchascene: l.default,
            captchacappuzzle: u.default,
            captchavi: g.default,
            captchaclick: f.default,
            captchadrag: f.default,
            captchaconnect: f.default,
            nlp: c.default,
            close: d.default,
            capslide: p.default,
            upgrade: h.default,
            denyupgrade: h.default,
            denyrelogin: r.default,
            denycdc_forbidden: r.default,
            loginlv: r.default,
            denyet_point: r.default,
            denyilegel_sign: r.default
        }
          , S = function() {
            function e(t) {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                this.props = this.getDefaultProps(t),
                this.isIE() && (document.getElementsByTagName("html")[0].className = "ie-browser")
            }
            return i(e, [{
                key: "getNoCaptchaLanguage",
                value: function(e, t) {
                    var n = t.noCaptchaLanguage;
                    return t.isCaptchaLanguageI18n ? (0,
                    v.getI18nLanguage)() : n ? {
                        language: n,
                        languageCont: k.default[n] || k.default.cn
                    } : {
                        language: n = {
                            zh: "cn",
                            "zh-cn": "cn",
                            "en-us": "en",
                            "zh-tw": "tw",
                            ru: "ru_RU",
                            "ru-ru": "ru_RU",
                            es: "es_ES",
                            "es-es": "es_ES",
                            pt: "pt_BR",
                            "pt-br": "pt_BR",
                            fr: "fr_FR",
                            "fr-fr": "fr_FR",
                            id: "in_ID",
                            "in-id": "in_ID",
                            "id-id": "in_ID",
                            ms: "ms_MY",
                            "ms-my": "ms_MY",
                            tr: "tr_TR",
                            "tr-tr": "tr_TR",
                            th: "th_TH",
                            "th-th": "th_TH",
                            it: "it_IT",
                            "it-it": "it_IT",
                            de: "de_DE",
                            "de-de": "de_DE",
                            he: "iw_HE",
                            "iw-he": "iw_HE",
                            ja: "ja_JP",
                            "ja-jp": "ja_JP",
                            ko: "ko_KR",
                            "ko-kr": "ko_KR",
                            nl: "nl_NL",
                            "nl-nl": "nl_NL",
                            vi: "vi_VN",
                            "vi-vn": "vi_VN",
                            ar: "ar_SA",
                            "ar-sa": "ar_SA",
                            pl: "pl_PL",
                            "pl-pl": "pl_PL",
                            uk: "uk_UA",
                            "uk-ua": "uk_UA",
                            fil: "fil_PH",
                            ph: "fil_PH",
                            "fil-ph": "fil_PH",
                            "ur-PK": "ur_PK",
                            ur: "ur_PK",
                            "bn-BD": "bn_BD",
                            bn: "bn_BD",
                            "my-MM": "my_MM",
                            my: "my_MM",
                            "ne-NP": "ne_NP",
                            ne: "ne_NP",
                            si: "si",
                            kk: "kk_KZ",
                            "kk-KZ": "kk_KZ"
                        }[e ? e.toLowerCase() : "en-us"] || "en",
                        languageCont: k.default[n]
                    }
                }
            }, {
                key: "getHost",
                value: function(e) {
                    return "wait" === e || "deny" === e ? document.referrer : location.hostname
                }
            }, {
                key: "getLogoInfo",
                value: function(e) {
                    var t = this.getHost(e)
                      , n = (new Date).getFullYear();
                    return t.indexOf("taobao.com") > -1 ? {
                        logo: "https://img.alicdn.com/tfs/TB1UDHOcwoQMeJjy0FoXXcShVXa-286-118.png",
                        logoLink: "https://www.taobao.com/",
                        copyright: "© 2003-现在 Taobao.com 版权所有"
                    } : t.indexOf("tmall.com") > -1 ? {
                        logo: "https://img.alicdn.com/tfs/TB1MaLKRXXXXXaWXFXXXXXXXXXX-480-260.png",
                        logoLink: "https://www.tmall.com/",
                        copyright: "© 2003-" + n + " TMALL.COM 版权所有"
                    } : t.indexOf("aliyun.com") > -1 ? {
                        logo: "https://img.alicdn.com/tfs/TB13DzOjXP7gK0jSZFjXXc5aXXa-212-48.png",
                        logoLink: "https://www.aliyun.com/",
                        copyright: "© 2009-" + n + " Aliyun.com 版权所有"
                    } : t.indexOf("etao.com") > -1 ? {
                        logo: "https://gw.alicdn.com/tfs/TB1yRiUQVXXXXaAXFXXXXXXXXXX-620-220.png",
                        logoLink: "https://etao.com/",
                        copyright: "Copyright © 2010-" + n + " ETAO.COM 版权所有"
                    } : t.indexOf("alimama.com") > -1 ? {
                        logo: "https://img.alicdn.com/tfs/TB12M.meYH1gK0jSZFwXXc7aXXa-392-100.png",
                        logoLink: "https://www.alimama.com/index.htm",
                        copyright: "© 2007-现在 阿里妈妈版权所有"
                    } : t.indexOf("youku.com") > -1 ? {
                        logo: "https://gw.alicdn.com/tfs/TB1ugm9f5cKOu4jSZKbXXc19XXa-356-76.png",
                        logoLink: "https://www.youku.com/",
                        copyright: "Copyright©" + n + " 优酷 youku.com 版权所有"
                    } : t.indexOf("feizhu.com") > -1 ? {
                        logo: "https://gw.alicdn.com/bao/tfs/TB1mFZneMmH3KVjSZKzXXb2OXXa-748-467.png",
                        logoLink: "https://www.feizhu.com/",
                        copyright: "© Fliggy.com版权所有"
                    } : t.indexOf("ele.me") > -1 ? {
                        logo: "https://img.alicdn.com/tfs/TB10aMXfaNj0u4jSZFyXXXgMVXa-500-128.svg",
                        logoLink: "https://www.ele.me/",
                        copyright: "Copyright ©2008-" + n + " 上海拉扎斯信息科技有限公司, All Rights Reserved."
                    } : {
                        logo: "https://img.alicdn.com/tfs/TB17G2dJGmWBuNjy1XaXXXCbXXa-241-41.png",
                        logoLink: "https://www.alibaba.com/",
                        copyright: "© 1999-" + n + " Alibaba.com. All rights reserved. "
                    }
                }
            }, {
                key: "getDefaultProps",
                value: function(e) {
                    for (var t in e)
                        this.uselessProps(e, t) && delete e[t];
                    var n = this.getI18nProps(e)
                      , i = this.getLogoInfo(e.action)
                      , r = i.logo
                      , o = i.logoLink
                      , c = i.copyright;
                    return window._custom_config_ = this.formatCustomConfig(),
                    e = Object.assign({
                        logo: r,
                        logoLink: o,
                        customImage: "deny" === e.action ? "https://img.alicdn.com/imgextra/i4/O1CN01jNKpmR1ODMZOUKGaE_!!6000000001671-2-tps-223-222.png" : "https://img.alicdn.com/imgextra/i2/O1CN010VLpQY1VWKHBQuBUQ_!!6000000002660-2-tps-222-222.png",
                        action: "captcha",
                        copyright: c || n.languageConfig.copyright,
                        renderTemplate: !0
                    }, e, n, a({}, window._custom_config_))
                }
            }, {
                key: "formatCustomConfig",
                value: function() {
                    var e = window._custom_config_ || {};
                    return e.showCenterClose && !_.isMobile && (e.showCenterClose = !1),
                    e.appUpgrade && !_.isMobile && (e.appUpgrade = !1),
                    e
                }
            }, {
                key: "uselessProps",
                value: function(e, t) {
                    return y.CUSTOM_PROPS.indexOf(t) > -1 && ("" === e[t] || "string" == typeof e[t] && e[t].indexOf("###") > -1)
                }
            }, {
                key: "getI18nProps",
                value: function(e) {
                    var t = e.languageConfigJson
                      , n = e.language
                      , a = e.noCaptchaLanguage
                      , i = e.languageConfig
                      , r = n || a && a.replace("_", "-") || (navigator.browserLanguage ? navigator.browserLanguage : navigator.language);
                    if (t) {
                        if (t["en-US"])
                            for (var o = ["en", "en-SG", "en-GB", "en-PK", "en-MY", "en-VN", "en-TH"], c = 0; c < o.length; c++)
                                m.default[o[c]] = t["en-US"];
                        for (var s in t)
                            m.default[s] && (t[s] = Object.assign(m.default[s], t[s]))
                    }
                    var d = (t = Object.assign(m.default, t || {}))[r];
                    d || (d = t["en-US"]),
                    d = Object.assign(d, i || {});
                    var p = this.getNoCaptchaLanguage(r, e);
                    return {
                        languageConfig: d,
                        languageConfigJson: t,
                        language: r,
                        noCaptchaLanguage: p.language,
                        noCaptchaLanguageCont: p.languageCont
                    }
                }
            }, {
                key: "bindEvents",
                value: function() {
                    this.props.showCenterClose && document.getElementById("js-btn-submit-close") && (document.getElementById("js-btn-submit-close").onclick = this.closeHandler),
                    this.props.appUpgrade && !this.props.upgradeUrl && document.getElementById("upgrade-btn") && (document.getElementById("upgrade-btn").onclick = this.closeHandler)
                }
            }, {
                key: "closeHandler",
                value: function() {
                    if (window.frames.length !== parent.frames.length)
                        try {
                            window.parent.postMessage(JSON.stringify({
                                type: "child",
                                content: '{"sm3Token":"not-send"}'
                            }), "*")
                        } catch (e) {
                            alert("请手动退出")
                        }
                    else
                        (0,
                        b.close)()
                }
            }, {
                key: "setTitle",
                value: function(e) {
                    var t = this.props.languageConfig
                      , n = {
                        deny: t["deny-title"] || t["deny-h5-tips"],
                        denyet_point: t["deny-title"] || t["deny-h5-tips"],
                        block: t["deny-title"] || t["deny-h5-tips"],
                        denyrelogin: t["deny-title"] || t["deny-h5-tips"],
                        denyupgrade: t["deny-title"] || t["deny-h5-tips"],
                        loginlv: t["deny-title"] || t["deny-h5-tips"],
                        wait: t["deny-title"] || t["wait-h5-tips"],
                        captcha: t["captcha-title"] || t["captcha-h5-tips"],
                        nlp: t["captcha-title"] || t["captcha-h5-tips"],
                        captchanlp: t["captcha-title"] || t["captcha-h5-tips"],
                        captchacapslide: t["captcha-title"] || t["captcha-h5-tips"],
                        captchacapslidev2: t["captcha-title"] || t["captcha-h5-tips"],
                        captchascene: t["captcha-title"] || t["captcha-h5-tips"],
                        captchacappuzzle: t["captcha-title"] || t["captcha-h5-tips"],
                        captchavi: t["captcha-title"] || t["captcha-h5-tips"]
                    };
                    document.title = n[e] || t["captcha-title"]
                }
            }, {
                key: "isIE",
                value: function() {
                    var e = navigator.userAgent.toLowerCase()
                      , t = e.indexOf("msie") > -1
                      , n = void 0;
                    return t && (n = e.match(/msie ([\d.]+)/)[1]),
                    n <= 9
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.languageConfig
                      , i = t.action
                      , r = t.renderTemplate
                      , o = void 0 === r || r
                      , c = t.pureCaptcha
                      , s = t.pureDenyWait
                      , d = t.SECDATA
                      , p = t.NCTOKENSTR
                      , l = t.NCAPPKEY
                      , u = t.noCaptchaLanguage
                      , f = t.noCaptchaLanguageConfigJson
                      , g = C[i]
                      , h = Object.assign(this.props, {
                        uuid: this.getUUID(),
                        languageConfig: n,
                        isMobile: _.isMobile,
                        uuidOrigin: this.getUUIDValue()
                    });
                    o && ((0,
                    _.removeDom)("baxia-punish"),
                    (!(["captchaclick", "captchadrag", "captchaconnect"].indexOf(i) > -1) || _.isAjax && _.isMobile) && (document.documentElement.style.backgroundColor = "#fff",
                    document.body.style.backgroundColor = "#fff"),
                    document.body.innerHTML = document.body.innerHTML + g.template(h));
                    if (h.isTaobaoApp && ((0,
                    _.addEvent)("click", document.querySelector(".taobao-app-header"), (function() {
                        location.replace((0,
                        _.getNativeCloseUrl)() + "?action=close")
                    }
                    )),
                    "deny" === h.action && (document.body.style.backgroundColor = "#F3F6F8 !important")),
                    !_.isMobile || !_.isAjax || _.isInNativeSdk || c || s || this.mobileFix(),
                    _.isLandscape && this.landscapeFix(),
                    y.SERVER_TEXT_ACTION.indexOf(h.action) > -1) {
                        (0,
                        _.getText)();
                        try {
                            var m = (0,
                            _.getSubmitPathPrefix)(h) + "/_____tmd_____/punishTextFetch";
                            (0,
                            _.request)({
                                url: m,
                                type: "GET",
                                data: {
                                    x5secdata: d,
                                    language: u,
                                    action: i
                                },
                                uuid: p,
                                success: function(e) {
                                    if (!e)
                                        return g.render(h),
                                        window._captchaRendered_ = !0,
                                        void (0,
                                        _.log)("文案为空", 26, p, l);
                                    try {
                                        e = JSON.parse(e)
                                    } catch (t) {
                                        return g.render(h),
                                        window._captchaRendered_ = !0,
                                        void (0,
                                        _.log)("文案解析失败", 26, p, l, e)
                                    }
                                    var t, n, r;
                                    f && f[u] ? h.noCaptchaLanguageConfigJson[u] = a({}, e, f[u]) : f ? h.noCaptchaLanguageConfigJson[u] = e : h.noCaptchaLanguageConfigJson = (r = e,
                                    (n = u)in (t = {}) ? Object.defineProperty(t, n, {
                                        value: r,
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0
                                    }) : t[n] = r,
                                    t),
                                    "captcha" === i && (h.noCaptchaLanguageCont = e),
                                    g.render(h),
                                    window._captchaRendered_ = !0
                                },
                                error: function() {
                                    g.render(h),
                                    window._captchaRendered_ = !0,
                                    (0,
                                    _.log)("文案获取失败", 26, p, l)
                                }
                            }),
                            setTimeout((function() {
                                window._captchaRendered_ || (g.render(h),
                                window._captchaRendered_ = !0,
                                (0,
                                _.log)("文案获取3s超时", 26, p, l))
                            }
                            ), 3e3)
                        } catch (e) {
                            g.render(h),
                            window._captchaRendered_ = !0,
                            (0,
                            _.log)("文案获取异常", 26, p, l)
                        }
                    } else
                        g.render && g.render(h);
                    if (window._render_config_ = h,
                    this.setTitle(i),
                    this.bindEvents(),
                    this.renderQRCode(i),
                    this.props.canFeedback)
                        for (var w = document.querySelectorAll("#bx-feedback-btn"), v = 0; v < w.length; v++)
                            (0,
                            _.addEvent)("click", w[v], (function() {
                                (0,
                                _.feedbackClick)(i),
                                T(e.props, !0)
                            }
                            ));
                    if ("captchavi" === i && !_.isInNativeSdk)
                        try {
                            var b = document.getElementsByClassName("bx-pu-qrcode-wrap")[0]
                              , k = b.querySelector(".hide")
                              , E = document.querySelector("#baxia-punish .show");
                            (0,
                            _.addEvent)("click", k, (function() {
                                b.style.display = "none",
                                E.style.display = "flex"
                            }
                            )),
                            (0,
                            _.addEvent)("click", E, (function() {
                                b.style.display = "block",
                                E.style.display = "none"
                            }
                            ))
                        } catch (e) {
                            (0,
                            _.log)("反馈二维码隐藏/显示事件注册异常")
                        }
                }
            }, {
                key: "getUUIDValue",
                value: function() {
                    var e = location.href.match(/uuid=([^&]+)/)
                      , t = this.props.NCTOKENSTR;
                    return e && e[1] ? e = e[1] : t && "###NCTOKENSTR###" !== t && (e = t),
                    encodeURIComponent(e)
                }
            }, {
                key: "getUUID",
                value: function() {
                    var e = this.props
                      , t = e.languageConfig
                      , n = e.canFeedback
                      , a = e.canHideQrCode
                      , i = this.getUUIDValue()
                      , r = (0,
                    _.getFeedbackLink)(t["feedback-link"], "bx-feedback-btn", i, this.props);
                    return i && "undefined" !== i ? (a ? '<div class="show"><svg t="1710420587888" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5918" width="12" height="12"><path d="M925.696 384q19.456 0 37.376 7.68t30.72 20.48 20.48 30.72 7.68 37.376q0 20.48-7.68 37.888t-20.48 30.208-30.72 20.48-37.376 7.68l-287.744 0 0 287.744q0 20.48-7.68 37.888t-20.48 30.208-30.72 20.48-37.376 7.68q-20.48 0-37.888-7.68t-30.208-20.48-20.48-30.208-7.68-37.888l0-287.744-287.744 0q-20.48 0-37.888-7.68t-30.208-20.48-20.48-30.208-7.68-37.888q0-19.456 7.68-37.376t20.48-30.72 30.208-20.48 37.888-7.68l287.744 0 0-287.744q0-19.456 7.68-37.376t20.48-30.72 30.208-20.48 37.888-7.68q39.936 0 68.096 28.16t28.16 68.096l0 287.744 287.744 0z" p-id="5919" fill="#ffffff"></path></svg></div>' : "") + '<div class="bx-pu-qrcode-wrap"><div name="captcha-qrcode" class="captcha-qrcode"></div>' + (a ? '<div class="hide"><div class="hide-text"></div></div>' : "") + (n ? r : "<label>" + t["feedback-code"] + "</label>") : n ? r : ""
                }
            }, {
                key: "getQrCode",
                value: function() {
                    var e = location.href.match(/qrcode=([^&]+)/)
                      , t = this.props.qrcode;
                    return e && e[1] ? e = e[1] : t && "###REQUEST_COMPOSITE_INFO###" !== t && (e = t),
                    e && (e.indexOf("%7C") > 0 && (e = e.replace(/%7C/g, "|")),
                    e = (e = encodeURIComponent(e)).replace(/%7C/g, "|")),
                    e
                }
            }, {
                key: "renderQRCode",
                value: function(e) {
                    var t = this.props
                      , n = t.qrcodeRenderTo
                      , a = void 0 === n ? "captcha-qrcode" : n
                      , i = t.canFeedback
                      , r = t.language
                      , o = t.isTaobaoApp
                      , c = document.getElementsByName(a)[0]
                      , s = this.getUUIDValue();
                    if (s && c) {
                        var d = ["captchaclick", "captchadrag", "captchaconnect"].indexOf(e) > -1
                          , p = ["captchacapslidev2", "captchascene", "captchacappuzzle"].indexOf(e) > -1;
                        if (_.isLandscape && window.innerHeight <= 220 || (_.isAjax && !_.isMobile || window.innerHeight <= 420) && p || o && d && window.innerHeight < 577 || o && p && window.innerHeight < 490 || o && "captcha" === e && window.innerHeight < 515 || !o && window.innerHeight <= 664.5 && ["captchaclick", "captchadrag"].indexOf(e) > -1 || !o && window.innerHeight <= 590.5 && "captchaconnect" === e)
                            return i ? d || p || o && "captcha" === e ? (c.parentElement.style.lineHeight = "12px",
                            c.innerHTML = (["zh", "cn", "zh-cn", "zh_CN", "zh-CN"].indexOf(r) > -1 ? "反馈码" : "Code") + "：" + s) : c.innerHTML = (0,
                            _.getFeedbackLink)(s, "bx-feedback-btn", s, this.props) : c.innerHTML = s,
                            void (c.style.width = p ? "280px" : "100%");
                        if (!window.QRCode)
                            return void (c.innerHTML = i ? (0,
                            _.getFeedbackLink)(s, "bx-feedback-btn", s, this.props) : s);
                        var l = this.getQrCode();
                        new window.QRCode(c,{
                            text: l || s,
                            width: o ? 60 : 80,
                            colorDark: o ? "#11192D" : "#999",
                            height: o ? 60 : 80
                        })
                    }
                }
            }, {
                key: "mobileFix",
                value: function() {
                    var e = document.getElementsByTagName("body")[0];
                    if (e && e.style) {
                        e.style.position = "relative";
                        var t = window.innerHeight || 9999
                          , n = window.outerHeight || 9999
                          , a = window.screen && window.screen.height || 9999
                          , i = Math.min(t, n, a);
                        9999 === i ? i = "100%" : i += "px",
                        e.style.height = i
                    }
                }
            }, {
                key: "landscapeFix",
                value: function() {
                    var e = this.props.action;
                    if (window.innerHeight <= 420 && ("captchacapslidev2" === e || "captchascene" === e || "captchacappuzzle" === e)) {
                        var t = document.querySelector(".copyright");
                        t && (t.style.height = "24px",
                        t.style.top = "auto",
                        t.style.bottom = "6px")
                    }
                }
            }, {
                key: "stopPropagation",
                value: function() {
                    if (_.isMobile)
                        try {
                            var e = document.getElementById("nocaptcha");
                            if (!e)
                                return;
                            e.addEventListener ? e.addEventListener("touchmove", (function(e) {
                                !function(e) {
                                    e.preventDefault(),
                                    e.stopPropagation()
                                }(e)
                            }
                            ), !1) : e.attachEvent && e.attachEvent("ontouchmove", (function() {
                                return window.event.cancelBubble = !0,
                                !1
                            }
                            ))
                        } catch (e) {
                            (0,
                            _.log)("阻止冒泡失败")
                        }
                }
            }]),
            e
        }();
        function T(e, t, n) {
            if (t && (_.isInNativeSdk || _.isWindVane || _.isAliApp)) {
                if (window.bxScreenshoting)
                    return !1;
                window.bxScreenshoting = !0
            }
            return window.html2canvas ? (0,
            _.screenshot)(e, t, null, n) : (0,
            _.loadScript)("https://g.alicdn.com/bsop-static/sufei-punish/0.1.65/build/htmltocanvas.min.js", (function() {
                (0,
                _.screenshot)(e, t, null, n)
            }
            ), e, "Html2canvas", e.notReport),
            !1
        }
        function R() {
            if (!window._bxRendered_) {
                (0,
                _.startInit)(window._config_.action),
                window._bxRendered_ = !0,
                window.AWSC_SPECIFY_FYMODULE_ADDRESSES = {
                    normalAddresses: ["https://g.alicdn.com/AWSC/fireyejs/1.231.23/fireyejs.js"]
                },
                (0,
                _.downGradeHttp)(window._config_.downGradeHttp) && ((0,
                _.log)("http降级", 25, window._config_.NCTOKENSTR, window._config_.NCAPPKEY),
                window.location.replace(window.location.href.replace("https://", "http://") + "&httpjump=true")),
                (0,
                b.clearX5SecData)(window._config_.action),
                (0,
                _.getCookieDeprecationLabel)();
                var e = document.getElementsByTagName("punish-component")[0]
                  , t = function(e) {
                    var t = Object.assign({}, e || {})
                      , n = location.href.match(/action=([^&]+)/);
                    return n = n ? n[1] : "",
                    t.action && "###ACTION###" !== t.action && "###SUB_TYPE###" !== t.action && "###ACTION######SUB_TYPE###" !== t.action || (t.action = "captcha"),
                    t.action && t.action.indexOf("captchavi_") > -1 && (t.action = "captchavi"),
                    n && ["captcha", "captchanlp", "captchavi", "captchaslide", "deny", "wait", "upgrade", "denyupgrade"].indexOf(n) > -1 && (t.action = n),
                    t.showCenterClose && !_.isMobile && (t.showCenterClose = !1),
                    t.appUpgrade && !_.isMobile && (t.appUpgrade = !1),
                    void 0 === t.canFeedback && (t.canFeedback = (0,
                    _.canFeedback)(t.action)),
                    void 0 === t.canHideQrCode && (t.canHideQrCode = (0,
                    _.canHideQrCode)(t.action)),
                    void 0 === t.canScreenshot && t.action.indexOf("captcha") > -1 && t.action.indexOf("captchavi") < 0 && location.host.indexOf("bixi.alicdn") < 0 && (t.canScreenshot = !0),
                    void 0 === t.canLoadpageReport && (t.canLoadpageReport = t.canScreenshot || window._custom_config_ && window._custom_config_.canLoadpageReport),
                    "###HOST###" === t.HOST && (t.notReport = !0),
                    location.href.indexOf("istaobaoapp") > -1 && location.href.indexOf("new_ui=1") > -1 && (t.isTaobaoApp = !0),
                    t
                }(window._config_);
                if (e || !t.renderTemplate) {
                    if (y.POW_ACTION.indexOf(t.action) > -1) {
                        try {
                            t.nonce && "###nonce###" !== t.nonce && (0,
                            _.loadNonce)(t),
                            E.default.init((function(e, n) {
                                e ? window._config_.ppModule = e : (0,
                                _.log)("ppModule加载失败: " + n, 21, t.NCTOKENSTR, t.NCAPPKEY)
                            }
                            ))
                        } catch (e) {
                            (0,
                            _.log)("ppModule初始化失败: " + (e && e.message), 21, t.NCTOKENSTR, t.NCAPPKEY)
                        }
                        (0,
                        _.nativeReport)(t, (new Date).valueOf())
                    }
                    if (new S(t).render(),
                    "deny" === t.action || "wait" === t.action) {
                        if (Math.random() > .01)
                            return;
                        var n = location.href.match(/uuid=([^&]+)/);
                        n && n[1] && (n = encodeURIComponent(n[1])),
                        T(t, !1, n)
                    }
                    if (t.notReport)
                        return;
                    if (t.canLoadpageReport)
                        try {
                            (0,
                            _.reportLoadPageAndCookieDisabled)(t)
                        } catch (e) {
                            (0,
                            _.log)("cookie禁用校验失败：" + JSON.stringify(e))
                        }
                    if (t.canScreenshot) {
                        if (Math.random() > .1)
                            return;
                        if (y.POW_ACTION.indexOf(t.action) > -1) {
                            var a = void 0
                              , i = void 0
                              , r = !1;
                            try {
                                a = setInterval((function() {
                                    window._config_.ppSign && (clearInterval(a),
                                    a = null,
                                    clearInterval(i),
                                    i = null,
                                    r || (T(t),
                                    r = !0))
                                }
                                ), 100),
                                i = setTimeout((function() {
                                    clearInterval(a),
                                    a = null,
                                    T(t),
                                    r = !0
                                }
                                ), 3e3)
                            } catch (e) {
                                clearInterval(a),
                                a = null,
                                clearInterval(i),
                                i = null,
                                r = !0
                            }
                        } else
                            T(t)
                    }
                }
                e && e.remove && e.remove()
            }
        }
        t.default = S,
        "function" != typeof Object.assign && (Object.assign = function(e) {
            if (null === e)
                throw new TypeError("Cannot convert undefined or null to object");
            e = Object(e);
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                if (null !== n)
                    for (var a in n)
                        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
            }
            return e
        }
        );
        try {
            window.frameElement && window.frameElement.id && window.frameElement.id.indexOf("baxia") > -1 && R()
        } catch (e) {
            console.log("页面渲染失败: " + (e && e.message))
        }
        window.onload = function() {
            R()
        }
        ,
        window.sufeiPunish = {
            utils: w
        }
    },
    "./src/modules/punishpage/style/index.less": function(e, t) {},
    "./src/modules/punishpage/upgrade.js": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a, i = n("./src/modules/punishpage/base-template.js"), r = (a = i) && a.__esModule ? a : {
            default: a
        }, o = n("./src/modules/punishpage/utils/index.js");
        t.default = {
            template: function(e) {
                var t = e.languageConfig
                  , n = e.upgradeHeaderImage
                  , a = e.upgradeImage
                  , i = e.upgradeText
                  , c = e.upgradeUrl
                  , s = e.upgradeBtnText
                  , d = e.upgradeBtnColor;
                return (0,
                r.default)(e, '<div class="bannar app-upgrade">\n        <div class="header-img"><div id="header-inner-img" style="background-image:url(\'' + (n || "https://img.alicdn.com/tfs/TB1sgcIkWNj0u4jSZFyXXXgMVXa-154-37.png") + '\')"></div></div>\n        <img id="bg-img" src="' + (a || "https://img.alicdn.com/tfs/TB1vbn5jBFR4u4jSZFPXXanzFXa-200-200.png") + '" />\n        <div class="warnning-text" style="margin-bottom: 100px;">\n            ' + (i || t["upgrade-text"]) + "\n            \n            " + (o.isMobile ? '<a id="upgrade-btn" ' + (c ? 'href="' + c + '" ' : " ") + " " + (d ? 'style="background-color:' + d + '"' : "") + ">" + (s || t["close-btn-text"]) + "</a>" : "") + "\n        </div>\n    </div>")
            },
            render: function(e) {
                var t = encodeURIComponent(location.href.match(/uuid=([^&]+)/) && location.href.match(/uuid=([^&]+)/)[1] || e.NCTOKENSTR);
                "test" !== t && "###NCTOKENSTR###" !== t && t && ((new Image).src = "https://fourier.alibaba.com/ts?ext=24&uuid=" + t)
            }
        }
    },
    "./src/modules/punishpage/utils/i18n-captcha.js": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.getI18nLanguage = void 0;
        var a = n("./src/modules/punishpage/utils/index.js");
        t.getI18nLanguage = function(e) {
            var t = e || navigator.language.toLocaleLowerCase()
              , n = {
                _startTEXT: "Please slide to verify",
                _yesTEXT: "Verified",
                _Loading: "Loading",
                _error300: 'Oops... something\'s wrong. Please <a href="javascript:__nc.reset()">refresh</a> and try again.',
                _errorNetwork: 'Net Err. Please <a href="javascript:__nc.reset()">refresh</a>',
                LOADING: "Loading",
                SLIDE: "Please slide to verify",
                SUCCESS: "Verified",
                ERROR: "Net Err. Please refresh",
                FAIL: "Oops... something's wrong. Please click and try again."
            }
              , i = {
                LOADING: "Loading...",
                SLIDER_LABEL: "Slide to verify",
                CHECK_Y: "Verified",
                ERROR_TITLE: "Sorry, something wrong",
                ERROR_RELOAD: "Reload",
                ERROR_FEEDBACK: "Feedback",
                SLIDE: "Slide to verify",
                SUCCESS: "Verified",
                ERROR: "Sorry, something wrong",
                FAIL: "Reload"
            }
              , r = {
                vi: "Vui lòng kéo sang phải để xác nhận",
                id: "Geser untuk verifikasi",
                th: "โปรดเลื่อนเพื่อยืนยัน",
                ms: "Sila leret untuk teruskan."
            };
            try {
                r["vi-VN"] = r.vi,
                r["id-ID"] = r.id,
                r["th-TH"] = r.th,
                r["ms-BN"] = r.ms,
                r["ms-MY"] = r.ms,
                n.SLIDE = r[t] || n._startTEXT,
                i.SLIDE = r[t] || i.SLIDER_LABEL
            } catch (e) {
                console && console.log("e")
            }
            return {
                language: t,
                languageCont: a.isMobile ? i : n
            }
        }
    },
    "./src/modules/punishpage/utils/index.js": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.randomUUID = t.feedbackClick = t.upgrade = t.verifyFail = t.startCustomVerify = t.startVerify = t.runDefaultCallback = t.runCustomCallback = t.slideEnd = t.verifyRePow = t.runPow = t.renderCaptchaSuccess = t.startRenderCaptcha = t.initCaptcha = t.loadCaptcha = t.startInit = t.getText = t.loadNC = t.loadET = t.loadNonce = t.getNativeCloseUrl = t.downGradeHttp = t.getRequestHeaders = t.getCookieDeprecationLabel = t.powFun = t.isAliApp = t.isWindVane = t.screenshot = t.nativeReport = t.reportLoadPageAndCookieDisabled = t.getFeedbackLink = t.canHideQrCode = t.canFeedback = t.clearX5SecData = t.pureRender = t.isLandscape = t.log = t.getSubmitPathPrefix = t.addEvent = t.removeDom = t.isPc = t.isMiniprogram = t.isInNativeSdk = t.isMobile = t.initReferrer = t.checkCookie = t.close = t.getQueryString = t.isAjax = t.loadScript = t.request = t.addQueryString = void 0;
        var a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        , r = n("./src/modules/pow/index.js"), o = (a = r) && a.__esModule ? a : {
            default: a
        }, c = n("./src/modules/punishpage/constant.js");
        var s = ["captcha", "captchanlp", "captchacapslide", "captchacapslidev2", "captchascene", "captchacappuzzle", "captchavi", "captchaclick", "captchadrag", "captchaconnect", "deny", "denyrelogin", "denyupgrade", "wait", "block", "loginlv", "denyet_point", "denyilegel_sign"]
          , d = ["captchavi"]
          , p = {
            captcha: 1,
            deny: 2,
            wait: 3,
            captchanlp: 4,
            captchacapslide: 5,
            block: 6,
            denyrelogin: 7,
            denyupgrade: 8,
            captchacapslidev2: 9,
            captchascene: 9,
            loginlv: 10,
            captcharecaptcha: 11,
            captchacappuzzle: 12,
            denyet_point: 14,
            captchavi_verify_rp: 16,
            captchaclick: 18,
            captchadrag: 19,
            captchaconnect: 20,
            captchavi_taobao_up2: 21,
            captchavi_taobao_down2: 22,
            denyilegel_sign: 23
        }
          , l = function(e) {
            e = e || {};
            var t = [];
            for (var n in e.data)
                t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e.data[n]));
            t.push(("v=" + Math.random()).replace(".", ""));
            var a = t.join("&")
              , i = new XMLHttpRequest;
            i.onreadystatechange = function() {
                if (4 === i.readyState) {
                    var t = i.status;
                    t >= 200 && t < 300 ? e.success && e.success(i.responseText, i.responseXML, i) : (N(i.openParams && i.openParams[1] || e.url + "?" + a, 20, e.uuid, t, null, !0),
                    e.error && e.error(t))
                }
            }
            ;
            var r = void 0;
            if (e.sign)
                try {
                    (r = window.etSign && "function" == typeof window.etSign ? window.etSign("GET" === e.type ? e.url + "?" + a : e.url) : "nosgn") || "" === (r = String(r)) && (r = "null_str")
                } catch (e) {
                    r = "nosgn"
                }
            "GET" === e.type ? (i.open("GET", e.url + "?" + a, !0),
            r && i.setRequestHeader("bx_et", r),
            e.ppSign && i.setRequestHeader("bx-pp", e.ppSign),
            i.send(null)) : "POST" === e.type && (i.open("POST", e.url, !0),
            r && i.setRequestHeader("bx_et", r),
            e.ppSign && i.setRequestHeader("bx-pp", e.ppSign),
            i.setRequestHeader("Content-Type", "json" === e.dataType ? "application/json" : "application/x-www-form-urlencoded"),
            i.send("json" === e.dataType ? JSON.stringify(e.data) : a))
        }
          , u = function(e, t, n, a, i, r) {
            var o = document.createElement("script")
              , c = document.getElementsByTagName("head")[0]
              , s = !0;
            if (o.type = "text/javascript",
            o.charset = "UTF-8",
            o.src = e,
            o.crossOrigin = !0,
            a && !i) {
                var d = v(n) + "/_____tmd_____/report";
                o.onerror = function(e) {
                    l({
                        url: d,
                        type: "GET",
                        data: {
                            x5secdata: n.SECDATA,
                            type: "loadError" + a,
                            msg: a + ".js_load_error",
                            uuid: n.NCTOKENSTR
                        },
                        uuid: n.NCTOKENSTR
                    }),
                    s = !1,
                    o.onerror = null,
                    r && r(e)
                }
                ;
                var p = setTimeout((function() {
                    s && l({
                        url: d,
                        type: "GET",
                        data: {
                            x5secdata: n.SECDATA,
                            type: "loadTimeout" + a,
                            msg: a + ".js_load_timeout",
                            uuid: n.NCTOKENSTR
                        },
                        uuid: n.NCTOKENSTR
                    }),
                    clearTimeout(p),
                    p = null
                }
                ), 3e4)
            }
            o.addEventListener ? o.addEventListener("load", (function() {
                s = !1,
                t()
            }
            ), !1) : o.attachEvent && o.attachEvent("onreadystatechange", (function() {
                "loaded" === window.event.srcElement.readyState && (s = !1,
                t())
            }
            )),
            c.appendChild(o)
        }
          , f = document.documentElement || ""
          , g = document.body || ""
          , h = 320 === (f.clientHeight || g.clientHeight) || 480 === (f.clientHeight || g.clientHeight) || window.frames.length !== parent.frames.length
          , m = 0 === document.createElement("canvas").toDataURL("image/webp", 0).indexOf("data:image/webp")
          , _ = window.navigator.userAgent.match(/WindVane/i)
          , w = window.navigator.userAgent.match(/AliApp/i)
          , y = window.location.href.indexOf("addCookieToHeader") > -1
          , v = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = e.HOST
              , n = e.PATH
              , a = e.NCTOKENSTR
              , i = e.NCAPPKEY;
            try {
                "http:" === location.protocol && t.indexOf(":443") > -1 && (N("http with 443", 16, a, i, t),
                t = t.replace(":443", ""))
            } catch (e) {
                N("http with 443 err:" + JSON.stringify(e), 16, a, i, t)
            }
            return "//" + t + n
        }
          , b = function(e, t, n) {
            var a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (t.addEventListener)
                t.addEventListener(e, n, a);
            else if (t.attachEvent)
                return t.attachEvent("on" + e, n),
                !1
        }
          , k = function(e, t) {
            if (t && "function" == typeof t && !0 === t())
                return;
            if (T)
                return window._custom_config_ && window._custom_config_.sleepSubmit || window._config_ && window._config_.sleepSubmit ? void function(e, t) {
                    t = Math.floor(1e3 * t / 2),
                    setTimeout((function() {
                        var n = document.cookie.match(/x5sec=([^;]+)/);
                        if (n && n[1]) {
                            var a = new Date;
                            a.setTime(a.getTime() + 18e5),
                            document.cookie = "x5sec=" + n[1] + ";expires=" + a.toGMTString() + ";path=/;max-age=1800"
                        }
                        setTimeout((function() {
                            e && e()
                        }
                        ), t)
                    }
                    ), t)
                }((function() {
                    location.href = C()
                }
                ), window._custom_config_ && window._custom_config_.sleepTime || 2) : void (location.href = C());
            if (h && (location.href.indexOf("_____tmd_____") > -1 && location.search.indexOf("x5step=1") < 0 || location.host.indexOf("bixi.alicdn") > -1)) {
                try {
                    var n = {
                        smToken: "token",
                        queryToken: "sm",
                        sm: "sm"
                    };
                    if (y) {
                        var a = e && e.getResponseHeader("bx-x5sec");
                        if (a) {
                            for (var i = void 0, r = void 0, o = a.split(";"), c = 0; c < o.length; c++)
                                o[c].indexOf("x5sec") > -1 ? i = o[c].split("=")[1] : o[c].indexOf("Expires") > -1 && (r = new Date(o[c].split("=")[1]).valueOf());
                            n.x5sec = '{"value":"' + i + '","expire":"' + r + '","host":"' + window.location.host + '"}'
                        }
                    }
                    window.parent.postMessage(JSON.stringify({
                        type: "child",
                        content: JSON.stringify(n)
                    }), "*")
                } catch (e) {
                    window.parent.postMessage('{"type":"child","content":"{\\"smToken\\":\\"token\\",\\"queryToken\\":\\"sm\\",\\"sm\\":\\"sm\\"}"}')
                }
                try {
                    window.pointman.require(["m/messenger"], (function(e) {
                        e.initListener({
                            currentWin: window,
                            originWin: window.parent,
                            msgTransfer: "fromParent"
                        }),
                        e.send({
                            type: "msg:validateSuccess@sufei",
                            content: "smToken=xxxx"
                        })
                    }
                    ))
                } catch (e) {
                    console.log("not messenger")
                }
            } else {
                if (R)
                    return void E(e);
                sessionStorage && sessionStorage.x5referer !== location.href ? (location.replace(sessionStorage.x5referer || x()),
                sessionStorage.x5referer = "") : sessionStorage && sessionStorage.x5referer ? (sessionStorage.x5referer = "",
                location.reload()) : location.href = x()
            }
        }
          , E = function(e) {
            var t = location.search.match(/platform=([^&]+)/);
            if (t = t && t[1] || "wx",
            window[t]) {
                var n = void 0;
                ["wx", "tt"].indexOf(t) > -1 ? n = window[t].miniProgram : ["my", "dd", "ks"].indexOf(t) > -1 ? n = window[t] : ["swan"].indexOf(t) > -1 && (n = window[t].webView);
                var a = e && e.getResponseHeader("bx-x5sec");
                if (!a)
                    return n && n.postMessage({
                        data: {
                            success: !1
                        }
                    }),
                    void (n && n.navigateBack());
                for (var i = void 0, r = void 0, o = a.split(";"), c = 0; c < o.length; c++)
                    o[c].includes("x5sec") ? i = o[c].split("=")[1] : o[c].includes("Expires") && (r = new Date(o[c].split("=")[1]).valueOf());
                n && n.postMessage({
                    data: {
                        success: !0,
                        token: i,
                        expire: r
                    }
                }),
                n && n.navigateBack()
            }
        }
          , x = function() {
            var e = "https://www.taobao.com"
              , t = {
                "taobao.com": "https://www.taobao.com/",
                "tmall.com": "https://www.tmall.com/",
                "aliyun.com": "https://www.aliyun.com/",
                "1688.com": "https://www.1688.com/",
                "lazada.co.id": "https://www.lazada.co.id/",
                "lazada.co.th": "https://www.lazada.co.th/",
                "lazada.vn": "https://www.lazada.vn/",
                "lazada.com.my": "https://www.lazada.com.my/",
                "lazada.sg": "https://www.lazada.sg/",
                "lazada.com.ph": "https://www.lazada.com.ph/",
                "youku.com": "https://www.youku.com/",
                "aliexpress.com": "https://www.aliexpress.com/",
                "aliexpress.ru": "https://www.aliexpress.ru/",
                "aliexpress.us": "https://www.aliexpress.us/",
                "miravia.es": "https://www.miravia.es/",
                "jiaoyimao.com": "https://www.jiaoyimao.com/",
                "alibaba.com": "https://www.alibaba.com/",
                "alibabacloud.com": "https://www.alibabacloud.com/",
                "global.cainiao.com": "https://global.cainiao.com/",
                "cainiao.com": "https://www.cainiao.com/"
            };
            for (var n in t)
                if (!(location.host.indexOf(n) < 0)) {
                    e = t[n];
                    break
                }
            return N("Jump to front page,url: " + e, 23, window._config_.NCTOKENSTR, window._config_.NCAPPKEY),
            e
        }
          , C = function() {
            return location.href.indexOf("https://sec.taobao1111.com/") > -1 ? "https://sec.taobao1111.com/" : "https://sec.taobao.com/"
        }
          , S = (t.addQueryString = function(e, t, n) {
            return e.indexOf("?") > -1 ? e + "&" + t + "=" + n : e + "?" + t + "=" + n
        }
        ,
        location.href)
          , T = S.indexOf("native=1") > -1 || S.indexOf("tmd_nc=1") > -1
          , R = window._config_ && window._config_.isMiniprogram
          , O = navigator.userAgent.match(/.*(iPhone|iPad|Android|ios|SymbianOS|Windows Phone|ArkWeb).*/i) || T || R
          , A = S.indexOf("pc=1") > -1
          , L = window.innerWidth > window.innerHeight
          , I = !(location.href.indexOf("istaobaoapp") > -1 && location.href.indexOf("new_ui=1") > -1) && (O && "number" == typeof window.orientation && L ? 90 === window.orientation || -90 === window.orientation : L);
        b("DOMContentLoaded", window, (function() {
            var e = "number" == typeof window.orientation && "object" === i(window.onorientationchange);
            if (O) {
                var t, n = document.body.parentNode;
                b(e ? "orientationchange" : "resize", window, (function() {
                    location.reload()
                }
                )),
                t = I ? "landscape" : "portrait",
                n.setAttribute("class", t)
            }
        }
        ));
        var N = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
              , n = arguments[2]
              , a = arguments[3]
              , i = arguments[4]
              , r = arguments.length > 5 && void 0 !== arguments[5] && arguments[5]
              , o = {
                code: t,
                msg: r ? e + "" : (e + "").substr(0, 1e3) + ";",
                pid: "sufeiPunish",
                page: location.href.split(/[#?]/)[0],
                query: location.search.substr(1),
                hash: location.hash,
                referrer: document.referrer,
                title: document.title,
                ua: navigator.userAgent
            };
            n && (o.c1 = n,
            o.c2 = a,
            o.c3 = i),
            j(o, "//gm.mmstat.com/fsp.1.1?")
        };
        function j(e, t) {
            var n = [];
            for (var a in e)
                n.push(a + "=" + encodeURIComponent(e[a]));
            (new Image).src = t + n.join("&")
        }
        function P(e) {
            return e = (e = (e = (e = (e = (e = (e = (e = e.replace(/&/g, "")).replace(/>/g, "")).replace(/</g, "")).replace(/"/g, "")).replace(/'/g, "")).replace(/`/g, "")).replace(/javascript/g, "")).replace(/iframe/g, "")
        }
        function D(e) {
            var t = new Date;
            t.setTime(t.getTime() + -100);
            var n = "x5secdata=;maxAge=-100;expires=" + t.toUTCString() + ";path=/;" + (e ? "domain=" + e + ";" : "");
            document.cookie = n,
            document.cookie = n + "Secure;SameSite=None"
        }
        var F = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "captcha"
              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            try {
                if (c.POW_ACTION.indexOf(e) < 0)
                    return;
                window.crypto && window.crypto.randemUUID && window.crypto.randemUUID(null, t)
            } catch (e) {
                console.log(e)
            }
        };
        t.request = l,
        t.loadScript = u,
        t.isAjax = h,
        t.getQueryString = function(e, t) {
            var n = new RegExp("(^|&)" + t + "=([^&]*)(&|$)")
              , a = e.substr(1).match(n);
            return null !== a ? unescape(a[2]) : null
        }
        ,
        t.close = k,
        t.checkCookie = function(e, t, n) {
            var a = setTimeout((function() {
                return k(e, n)
            }
            ), 5e3)
              , i = t.NCTOKENSTR
              , r = t.NCAPPKEY
              , o = t.SECDATA
              , c = t.HOST
              , s = t.PATH
              , d = t.notReport
              , p = v(t) + "/_____tmd_____/report"
              , u = document.cookie.match(/x5sec=([^;]+)/g)
              , f = e && e.getResponseHeader("bx-x5sec") || ""
              , g = e && e.getResponseHeader("bx-x5sec-root") || "";
            if (u) {
                if (f = f.match(/x5sec=([^;]+)/)[1],
                g = g && g.match(/x5sec=([^;]+)/)[1],
                u[0] && (u[0] = u[0].match(/x5sec=([^;]+)/)[1]),
                u[1] && (u[1] = u[1].match(/x5sec=([^;]+)/)[1]),
                u[0] !== f && u[1] !== f && (document.cookie = e.getResponseHeader("bx-x5sec"),
                (u = document.cookie.match(/x5sec=([^;]+)/g)) && u[0] && (u[0] = u[0].match(/x5sec=([^;]+)/)[1]),
                u && u[1] && (u[1] = u[1].match(/x5sec=([^;]+)/)[1])),
                g && u[0] !== g && u[1] !== g && (document.cookie = e.getResponseHeader("bx-x5sec-root"),
                (u = document.cookie.match(/x5sec=([^;]+)/g)) && u[0] && (u[0] = u[0].match(/x5sec=([^;]+)/)[1]),
                u && u[1] && (u[1] = u[1].match(/x5sec=([^;]+)/)[1])),
                u[0] === f || u[1] === f ? d || l({
                    url: p,
                    type: "GET",
                    data: {
                        x5secdata: o,
                        type: "setCookieSuccess",
                        msg: "Set cookie success,x5sec:" + f,
                        uuid: i
                    },
                    uuid: i,
                    success: function() {
                        a && (clearTimeout(a),
                        a = null,
                        k(e, n))
                    },
                    error: function() {
                        a || (clearTimeout(a),
                        a = null,
                        k(e, n))
                    }
                }) : (N("子域setCookie更新失败", 14, i, r, "" + c + s),
                d || l({
                    url: p,
                    type: "GET",
                    data: {
                        x5secdata: o,
                        type: "setCookieFail",
                        msg: "Set cookie fail,x5sec:" + f,
                        uuid: i
                    },
                    uuid: i,
                    success: function() {
                        a && (clearTimeout(a),
                        a = null,
                        k(e, n))
                    },
                    error: function() {
                        a && (clearTimeout(a),
                        a = null,
                        k(e, n))
                    }
                })),
                !g)
                    return;
                u[0] === g || u[1] === g ? d || l({
                    url: p,
                    type: "GET",
                    data: {
                        x5secdata: o,
                        type: "setCookieSuccess",
                        msg: "Set cookie success,root x5sec:" + g,
                        uuid: i
                    },
                    uuid: i,
                    success: function() {
                        a && (clearTimeout(a),
                        a = null,
                        k(e, n))
                    },
                    error: function() {
                        a && (clearTimeout(a),
                        a = null,
                        k(e, n))
                    }
                }) : (N("根域setCookie更新失败", 14, i, r, "" + c + s),
                d || l({
                    url: p,
                    type: "GET",
                    data: {
                        x5secdata: o,
                        type: "setCookieFail",
                        msg: "Set cookie fail,root x5sec:" + g,
                        uuid: i
                    },
                    uuid: i,
                    success: function() {
                        a && (clearTimeout(a),
                        a = null,
                        k(e, n))
                    },
                    error: function() {
                        a && (clearTimeout(a),
                        a = null,
                        k(e, n))
                    }
                }))
            } else if (f && (document.cookie = f),
            g && (document.cookie = g),
            u = document.cookie.match(/x5sec=([^;]+)/g)) {
                if (d)
                    return;
                if (u[0] && (u[0] = u[0].match(/x5sec=([^;]+)/)[1]),
                u[1] && (u[1] = u[1].match(/x5sec=([^;]+)/)[1]),
                f = f.match(/x5sec=([^;]+)/)[1],
                g = g && g.match(/x5sec=([^;]+)/)[1],
                u[0] !== f && u[1] !== f || d || l({
                    url: p,
                    type: "GET",
                    data: {
                        x5secdata: o,
                        type: "setCookieSuccess",
                        msg: "Set cookie success,x5sec:" + f,
                        uuid: i
                    },
                    uuid: i,
                    success: function() {
                        a && (clearTimeout(a),
                        a = null,
                        k(e, n))
                    },
                    error: function() {
                        a && (clearTimeout(a),
                        a = null,
                        k(e, n))
                    }
                }),
                !g)
                    return;
                u[0] !== g && u[1] !== g || d || l({
                    url: p,
                    type: "GET",
                    data: {
                        x5secdata: o,
                        type: "setCookieSuccess",
                        msg: "Set cookie success,root x5sec:" + g,
                        uuid: i
                    },
                    uuid: i,
                    success: function() {
                        a && (clearTimeout(a),
                        a = null,
                        k(e, n))
                    },
                    error: function() {
                        a && (clearTimeout(a),
                        a = null,
                        k(e, n))
                    }
                })
            } else {
                if (d)
                    return;
                l({
                    url: p,
                    type: "GET",
                    data: {
                        x5secdata: o,
                        type: "setCookieFail",
                        msg: "Set cookie fail,all x5sec:" + f.match(/x5sec=([^;]+)/)[1],
                        uuid: i
                    },
                    uuid: i,
                    success: function() {
                        clearTimeout(a),
                        a = null,
                        k(e, n)
                    },
                    error: function() {
                        clearTimeout(a),
                        a = null,
                        k(e, n)
                    }
                })
            }
        }
        ,
        t.initReferrer = function() {
            try {
                if (localStorage && localStorage.closeReturn) {
                    var e = sessionStorage.x5referer;
                    return location.replace(e),
                    void (localStorage.closeReturn = "")
                }
                if (location.href.indexOf("_____tmd_____") > -1)
                    return;
                sessionStorage.x5referer = window.location.href
            } catch (e) {
                console.log("err")
            }
        }
        ,
        t.isMobile = O,
        t.isInNativeSdk = T,
        t.isMiniprogram = R,
        t.isPc = A,
        t.removeDom = function(e) {
            document.getElementById(e) && (document.getElementById(e).outerHTML = "")
        }
        ,
        t.addEvent = b,
        t.getSubmitPathPrefix = v,
        t.log = N,
        t.isLandscape = I,
        t.pureRender = function(e) {
            function t(e) {
                e <= 0 || window.parent.postMessage(JSON.stringify({
                    type: "msg:changeHeight",
                    content: e
                }), "*")
            }
            function n() {
                return document.getElementById(e).offsetHeight
            }
            var a = n();
            function i() {
                n() !== a && t(a = n())
            }
            t(a),
            document.addEventListener ? document.getElementById(e).addEventListener("DOMNodeInserted", i, !1) : (document.getElementById(e).addBehavior("foo.htc"),
            document.getElementById(e).attachEvent("onreadystatechange", i))
        }
        ,
        t.clearX5SecData = function(e) {
            try {
                if (F(e, _ ? "_$PA" : ""),
                document.cookie.indexOf("x5secdata") <= -1)
                    return;
                var t = location.host
                  , n = t.split(".")
                  , a = n.length > 5 ? 5 : n.length;
                1 !== a && 2 !== a || D(t),
                location.href.indexOf("_____tmd_____") > -1 && D("." + t),
                t = "." + n.pop();
                for (var i = 2; i < a; i++)
                    D(t = "." + n.pop() + t);
                D(t = (n.pop() || "") + t),
                D("")
            } catch (e) {
                console.log("x5secdata clear error")
            }
        }
        ,
        t.canFeedback = function(e) {
            return s.indexOf(e) > -1
        }
        ,
        t.canHideQrCode = function(e) {
            return d.indexOf(e) > -1
        }
        ,
        t.getFeedbackLink = function(e, t, n, a) {
            var i = a.HOST
              , r = a.PATH
              , o = a.SECDATA
              , c = a.action
              , s = a.appUpgrade
              , d = a.isPre
              , l = a.noCaptchaLanguage
              , u = a.isTaobaoApp
              , f = void 0;
            if (c.indexOf("captcha") < 0 && (f = (f = location.href.match(/origin=([^&]+)/)) && decodeURIComponent(f[1]).split("?")[0]))
                try {
                    f = "https:" !== (f = new URL(f)).protocol && "http:" !== f.protocol ? null : f.href
                } catch (e) {
                    "string" != typeof f || 0 !== f.indexOf("http") ? (N("Feedback origin illegal:" + JSON.stringify(f)),
                    f = null) : f = P(f)
                }
            var g = "_blank"
              , h = (f || "https://" + (navigator && navigator.userAgent && navigator.userAgent.indexOf("miniProgram") > -1 ? window.location.host : i) + "/" + r) + "/_____tmd_____/page/" + (d ? "feedback_pre" : "feedback") + "?rand=S3WxGHAgAt756EpznwfNzJq2AFA2qBNla3j6EINUS8We9dazM_iKElp8DwVSHZUevpC41Bx7RzivXIj9RnZgdg" + (c.indexOf("captcha") > -1 || "loginlv" === c ? "&x5secdata=" + encodeURIComponent(o) : "&uuid=" + encodeURIComponent(n)) + "&type=" + (s ? "8" : p["captchavi" === c ? window._config_.action : c]) + "&language=" + l + (u ? "&istaobaoapp=1" : "");
            return (T || _ || w) && (g = "_self",
            window.feedbackLinkStr = h,
            T && (window.feedbackLinkStr += "&native=1"),
            h = "javascript:void(0)"),
            '<a id="' + t + '" href="' + h + '" target="' + g + '">' + e + "</a>"
        }
        ,
        t.reportLoadPageAndCookieDisabled = function(e) {
            var t = void 0
              , n = e.NCTOKENSTR;
            if ("###HOST###" === e.HOST && (n = (n = location.href.match(/uuid=([^&]+)/)) && n[1],
            t = (t = location.href.match(/origin=([^&]+)/)) && decodeURIComponent(t[1]).split("?")[0]))
                try {
                    t = "https:" !== (t = new URL(t)).protocol && "http:" !== t.protocol ? null : t.href
                } catch (e) {
                    "string" != typeof t || 0 !== t.indexOf("http") ? (N("Deny origin illegal:" + JSON.stringify(t)),
                    t = null) : t = P(t)
                }
            var a = (t || v(e)) + "/_____tmd_____/report"
              , i = new Date;
            i.setSeconds(i.getSeconds() + 3),
            document.cookie = "bx-cookie-test=1;path=/;expires=" + i.toGMTString() + ";SameSite=None;Secure",
            document.cookie.indexOf("bx-cookie-test") < 0 && (window._config_.cookieDisabled = !0);
            var r = "";
            (e.action.indexOf("capslidev2") > 0 || e.action.indexOf("scene") > 0) && (r = ";" + window.innerWidth + "*" + window.innerHeight),
            window.innerHeight < 217 && ["captchaclick", "captchadrag", "captchaconnect"].indexOf(e.action) > -1 && (r = ";" + window.innerWidth + "*" + window.innerHeight);
            var o = {
                x5secdata: e.SECDATA,
                type: "loadPageSuccess",
                msg: "PunishPage load success" + r,
                uuid: n
            };
            "###HOST###" === e.HOST && delete o.x5secdata,
            F(e.action, _ ? "_$PB" : ""),
            l({
                url: a,
                type: "GET",
                data: o,
                uuid: n,
                success: function(t) {
                    if ((t = JSON.parse(t || "{}")).result && "cookieDisabled" === t.result.message && (window._config_.cookieDisabled = !0),
                    "###HOST###" !== e.HOST && !T && !R && t.result && "cookieDisabled" === t.result.message) {
                        var n = "";
                        n = navigator.cookieEnabled || Number(e.crossSite) ? "Third-party cookies disabled" : "Cookies disabled";
                        var a = document.getElementById(e.pureCaptcha ? "pure-bx-feedback-btn" : "bx-feedback-btn");
                        T || _ || w ? window.feedbackLinkStr += "&cookieDisabled=true" : a && (a.href += "&cookieDisabled=true"),
                        l({
                            url: v(e) + "/_____tmd_____/report",
                            type: "GET",
                            data: {
                                x5secdata: e.SECDATA,
                                type: "cookiesDisabled",
                                msg: n,
                                uuid: e.NCTOKENSTR
                            },
                            uuid: e.NCTOKENSTR
                        })
                    }
                }
            }),
            e.isTaobaoApp && N(e.action + " loadPageSuccess", 28, e.NCTOKENSTR, e.NCAPPKEY)
        }
        ,
        t.nativeReport = function(e, t) {
            if (T && lib && lib.mtop) {
                F(e.action, _ ? "_$PC" : "");
                var n = e.PATH
                  , a = e.SECDATA
                  , i = e.NCTOKENSTR
                  , r = e.NCAPPKEY;
                try {
                    var o = n.split("/")
                      , c = o && o[2]
                      , s = o && o[3];
                    if (!c)
                        return void N("mtop api解析失败: PATH=" + n);
                    lib.mtop.request({
                        api: c,
                        v: (s || "1.0") + "/_____tmd_____/sdrp?x5secdata=" + encodeURIComponent(a) + "&ts=" + t,
                        H5Request: !1,
                        WindVaneRequest: !0,
                        ecode: 0
                    }).then((function(e) {}
                    ), (function(e) {
                        N(JSON.stringify(e), 15, i, r)
                    }
                    ))
                } catch (e) {
                    N(JSON.stringify(e), 15, i, r)
                }
            }
        }
        ,
        t.screenshot = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
              , n = arguments[2]
              , a = arguments[3]
              , i = void 0;
            try {
                if (!window.html2canvas)
                    return void (window.bxScreenshoting = !1);
                F(e.action, _ ? "_$PD" : "");
                var r = {
                    useCORS: !0,
                    scale: 1
                };
                O || h || document.body.offsetWidth > 1024 && (r.scale = 1024 / document.body.offsetWidth),
                "captcha" === e.action && (i = document.getElementsByClassName("nc-lang-cnt")[0]) && (i.style.background = "transparent"),
                t && (T || _ || w) && window.feedbackLinkStr && setTimeout((function() {
                    window.bxScreenshoting && (window.bxScreenshoting = !1,
                    location.href = window.feedbackLinkStr)
                }
                ), 1500),
                window.html2canvas(document.body, r).then((function(r) {
                    var o;
                    if (i && (i.style.background = ""),
                    ("deny" === e.action || "wait" === e.action) && (o = (o = location.href.match(/origin=([^&]+)/)) && decodeURIComponent(o[1]).split("?")[0]))
                        try {
                            "https:" !== (o = new URL(o)).protocol && "http:" !== o.protocol && (o = null)
                        } catch (e) {
                            "string" != typeof o || 0 !== o.indexOf("http") ? (N("Feedback origin illegal:" + JSON.stringify(o)),
                            o = null) : o = P(o)
                        }
                    var c = (o && "//" + o.host + o.pathname || v(e)) + "/_____tmd_____/report"
                      , s = {
                        result: r.toDataURL(m ? "image/webp" : "image/jpeg", m ? .2 : .15),
                        type: "screenshotSuccess",
                        msg: n || "Screenshot success",
                        uuid: a || e.NCTOKENSTR
                    };
                    "###SECDATA###" !== e.SECDATA && (s.x5secdata = e.SECDATA),
                    l({
                        url: c,
                        type: "POST",
                        data: s,
                        success: function() {
                            t && (T || _ || w) && window.feedbackLinkStr && (window.bxScreenshoting = !1,
                            location.href = window.feedbackLinkStr)
                        },
                        error: function() {
                            t && (T || _ || w) && window.feedbackLinkStr && (window.bxScreenshoting = !1,
                            location.href = window.feedbackLinkStr)
                        }
                    })
                }
                )).catch((function(n) {
                    i && (i.style.background = "");
                    var a = e.NCTOKENSTR
                      , r = e.NCAPPKEY
                      , o = e.HOST
                      , c = e.PATH;
                    N(JSON.stringify(n), 19, a, r, "" + o + c),
                    t && (T || _ || w) && window.feedbackLinkStr && (window.bxScreenshoting = !1,
                    location.href = window.feedbackLinkStr)
                }
                ))
            } catch (n) {
                i && (i.style.background = "");
                var o = e.NCTOKENSTR
                  , c = e.NCAPPKEY
                  , s = e.HOST
                  , d = e.PATH;
                N(JSON.stringify(n), 19, o, c, "" + s + d),
                t && (T || _ || w) && window.feedbackLinkStr && (location.href = window.feedbackLinkStr)
            }
        }
        ,
        t.isWindVane = _,
        t.isAliApp = w,
        t.powFun = function(e, t, n, a, i, r, c) {
            var s = window._config_
              , d = s.pp
              , p = s.ppModule;
            setTimeout((function() {
                try {
                    if (!p)
                        return o.default.init((function(n, a) {
                            n ? window._config_.ppModule = n : N("ppModule加载失败: " + a, 21, e, t)
                        }
                        )),
                        c && c(),
                        void N("ppModule未加载，pp：" + JSON.stringify(d), 21, e, t);
                    if (!n && !d)
                        return c && c(),
                        void N("ppDetail未读取到", 21, e, t);
                    var s = Date.now()
                      , l = n || d
                      , u = l.l
                      , f = l.i
                      , g = l.q
                      , h = l.t
                      , m = l.f
                      , _ = l.k
                      , w = l.enc
                      , y = l.mt
                      , v = void 0 === y ? 3e3 : y
                      , b = p._pp
                      , k = p.stringToNewUTF8
                      , E = p.UTF8ToString
                      , x = p._free;
                    if (x) {
                        var C = b(u, f, k(g), k(h), k(m), k(_), k(w), k(a), k(i), k(r), v);
                        window._config_.ppSign = E(C),
                        x(C)
                    } else
                        window._config_.ppSign = b(u, f, g, h, m, _, w, a, i, r, v);
                    var S = Date.now();
                    window._config_.ppt = Math.floor(S - s),
                    c && c(window._config_.ppSign)
                } catch (n) {
                    c && c(),
                    N("pp计算失败，error：" + (n && n.message) + "，pp：" + JSON.stringify(d), 21, e, t)
                }
            }
            ))
        }
        ,
        t.getCookieDeprecationLabel = function() {
            try {
                "cookieDeprecationLabel"in navigator && navigator.cookieDeprecationLabel.getValue().then((function(e) {
                    e && (window._config_.partitionedLabel = e,
                    N(e, 22))
                }
                ))
            } catch (e) {
                N("标签加载异常：" + (e && e.message), 22)
            }
        }
        ,
        t.getRequestHeaders = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = [];
            for (var n in e.data)
                t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e.data[n]));
            t.push(("v=" + Math.random()).replace(".", ""));
            var a, i = t.join("&");
            try {
                a = window.etSign && "function" == typeof window.etSign ? window.etSign("GET" === e.type ? e.url + "?" + i : e.url) : "nosgn"
            } catch (e) {
                a = "nosgn"
            }
            return {
                bx_et: a,
                "bx-pp": window._config_.ppSign
            }
        }
        ,
        t.downGradeHttp = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            try {
                if (e && h && location.search.indexOf("httpjump=true") < 0 && "https:" === location.protocol) {
                    var t = document.cookie.match(/x5sec=([^;]+)/);
                    return t && (document.cookie = "x5sec=;max-age=0;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;samesite=none;secure"),
                    !0
                }
                return !1
            } catch (e) {
                return !1
            }
        }
        ,
        t.getNativeCloseUrl = C,
        t.loadNonce = function(e) {
            F(e.action, _ ? "_$PE" : ""),
            u("//" + (e.isPre ? "dev." : "") + "g.alicdn.com/secdev/entry/x/" + e.nonce + ".js", (function() {
                window._config_._rand = "load_success"
            }
            ), e, "Nonce", e.notReport, (function() {
                window._config_._rand = "load_error",
                N("load_error", 29, e.NCTOKENSTR, e.NCAPPKEY)
            }
            ))
        }
        ,
        t.loadET = function(e, t) {
            var n = e.NCTOKENSTR
              , a = e.SECDATA
              , i = e.action;
            F(i, _ ? "_$PF" : ""),
            AWSC.use("et", (function(i, r) {
                e.notReport || l("loaded" === i ? {
                    url: t,
                    type: "GET",
                    data: {
                        x5secdata: a,
                        type: "loadSuccessEt",
                        msg: "et.js_load_" + i,
                        uuid: n
                    },
                    uuid: n
                } : {
                    url: t,
                    type: "GET",
                    data: {
                        x5secdata: a,
                        type: "loadErrorEt",
                        msg: "et.js_load_" + i,
                        uuid: n
                    },
                    uuid: n
                })
            }
            ))
        }
        ,
        t.loadNC = function() {
            F("captcha", _ ? "_$PG" : "")
        }
        ,
        t.getText = function() {
            F("captcha", _ ? "_$PH" : "")
        }
        ,
        t.startInit = function(e) {
            F(e, _ ? "_$PI" : "")
        }
        ,
        t.loadCaptcha = function() {
            F("captcha", _ ? "_$PJ" : "")
        }
        ,
        t.initCaptcha = function() {
            F("captcha", _ ? "_$PK" : "")
        }
        ,
        t.startRenderCaptcha = function() {
            F("captcha", _ ? "_$PL" : "")
        }
        ,
        t.renderCaptchaSuccess = function() {
            F("captcha", _ ? "_$PM" : "")
        }
        ,
        t.runPow = function() {
            F("captcha", _ ? "_$PN" : "")
        }
        ,
        t.verifyRePow = function() {
            F("captcha", _ ? "_$PO" : "")
        }
        ,
        t.slideEnd = function() {
            F("captcha", _ ? "_$PP" : "")
        }
        ,
        t.runCustomCallback = function() {
            F("captcha", _ ? "_$PQ" : "")
        }
        ,
        t.runDefaultCallback = function() {
            F("captcha", _ ? "_$PR" : "")
        }
        ,
        t.startVerify = function() {
            F("captcha", _ ? "_$PS" : "")
        }
        ,
        t.startCustomVerify = function() {
            F("captcha", _ ? "_$PT" : "")
        }
        ,
        t.verifyFail = function() {
            F("captcha", _ ? "_$PU" : "")
        }
        ,
        t.upgrade = function() {
            F("captcha", _ ? "_$PV" : "")
        }
        ,
        t.feedbackClick = function(e) {
            F(e, _ ? "_$PW" : "")
        }
        ,
        t.randomUUID = F
    },
    "./src/modules/punishpage/vi.js": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a, i = n("./src/modules/punishpage/base-template.js"), r = (a = i) && a.__esModule ? a : {
            default: a
        }, o = n("./src/modules/punishpage/utils/index.js");
        var c = void 0;
        c = o.isMobile ? "captchavi_verify_rp" === window._config_.action ? o.isInNativeSdk || o.isWindVane || o.isAliApp ? "h5" : "mini" : "h5" : o.isAjax ? "mini" : "pc";
        function s() {
            return o.isInNativeSdk || "h5" === c && "captchavi_verify_rp" === window._config_.action
        }
        t.default = {
            template: function(e) {
                return s() ? "" : (e.logo = "",
                window.addEventListener("message", (function(e) {
                    e.data && e.data.indexOf("smToken") > -1 && (0,
                    o.close)()
                }
                )),
                "mini" === c && "captchavi_taobao_up2" === window._config_.action && window.parent.postMessage(JSON.stringify({
                    action: "resizeIframe",
                    width: 420,
                    height: 380
                }), "*"),
                (0,
                r.default)(e, ' <div class="bannar">\n      <iframe class="iframe-box" src="' + function(e) {
                    var t = (0,
                    o.getSubmitPathPrefix)(e) + "/_____tmd_____/viverify?entrance=" + c + "&x5secdata=" + e.SECDATA + "&x5step=100";
                    return (0,
                    o.getSubmitPathPrefix)(e) + "/_____tmd_____/viurl?entrance=" + c + "&x5secdata=" + e.SECDATA + "&bxOriginalUrl=" + encodeURIComponent(t)
                }(e) + '"></iframe>\n      ' + (!o.isMobile && e.uuid ? e.uuid : "") + "\n    </div>"))
            },
            render: function(e) {
                if (s()) {
                    if (location.href.indexOf("jumpReturn=true") > -1)
                        return (0,
                        o.close)();
                    var t = (0,
                    o.getSubmitPathPrefix)(e) + "/_____tmd_____/viverify?entrance=" + c + "&x5secdata=" + e.SECDATA + "&originalUrl=" + encodeURIComponent(o.isInNativeSdk ? (0,
                    o.addQueryString)(window.location.href, "jumpReturn", "true") : window.top.location.href)
                      , n = (0,
                    o.getSubmitPathPrefix)(e) + "/_____tmd_____/viurl?entrance=" + c + "&x5secdata=" + e.SECDATA + "&bxOriginalUrl=" + encodeURIComponent(t);
                    o.isInNativeSdk ? window.location.replace(n) : window.top.location.replace(n)
                }
            }
        }
    },
    "./src/modules/punishpage/wait.js": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = o(n("./src/modules/punishpage/base-template.js"))
          , i = n("./src/modules/punishpage/utils/index.js")
          , r = o(n("./src/modules/punishpage/pureDenyWait.js"));
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        t.default = {
            template: function(e) {
                var t = e.isMobile
                  , n = e.languageConfig
                  , o = e.uuid
                  , c = e.uuidOrigin
                  , s = e.customImage
                  , d = e.pureDenyWait
                  , p = document.referrer;
                return p.indexOf("___tmd___") > -1 && (p = ""),
                d ? r.default + '<div id="wait">\n          <img src="https://img.alicdn.com/imgextra/i1/O1CN01Zg3rez1QDwJCJn4Js_!!6000000001943-55-tps-14-14.svg">\n          <div class="deny-text">' + (n["wait-pure-tips"] || n["wait-h5-tips"]) + (0,
                i.getFeedbackLink)(n["feedback-link"], "pure-bx-feedback-btn", c, e) + "</div>\n      </div>" : (0,
                a.default)(e, '<div class="bannar">\n        <img id="bg-img" src="' + s + '" />\n        <div class="warnning-text" style="margin-bottom: 100px;">\n            ' + n["wait-h5-tips"] + "\n            " + (e.showCenterClose ? '<p style="text-align:center;margin-top: 10px;"><a  class="btn-submit-close" id="js-btn-submit-close" href="javascript:void(0)">' + n["close-btn-text"] + "</a>\n            </p>" : "") + '\n            <p class="p-uuid-tips">' + (!t && o ? o : "") + "</p>\n            " + (t || !p || i.isAjax ? "" : '<a class="back-referrer" href=' + p + "><img class='back-up-img' src='https://img.alicdn.com/tfs/TB1AWGWD1L2gK0jSZFmXXc7iXXa-200-200.png' />" + n["previous-page"] + "</a>") + "\n        </div>\n    </div>")
            },
            render: function(e) {
                e.pureDenyWait && (0,
                i.pureRender)("wait")
            }
        }
    },
    5: function(e, t, n) {
        e.exports = n("./src/modules/punishpage/index.js")
    }
});
