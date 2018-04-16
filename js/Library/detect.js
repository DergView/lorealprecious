/** Totally lifted from http://fendilife.fendi.com */
/*if (console === undefined) {
    console = {
        log : function() {}
    }
};*/
var _Desktop = false, _Device = {
    iphone4: false,
    iphone5: false,
    ipad: false,
    nexus4: false,
    galaxys2: false,
    galaxys3: false,
    galaxyTab1: false,
    galaxyTab2: false,
    smartphone: false,
    android: false,
    androidVersion: 0,
    ios: false,
    tablet: false,
    isDevice: false

}, _Browser = {}, _Three = true, ua = String(navigator.userAgent).toLowerCase();
function getBrowser() {
    var d = /(chrome)[ \/]([\w.]+)/.exec(ua) || /(webkit)[ \/]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];
    var a = {
        browser: d[1] || "",
        version: d[2] || "0"
    };
    if (a.browser) {
        _Browser[a.browser] = true;
        _Browser.version = a.version
    }
    if (_Browser.chrome) {
        _Browser.webkit = true
    } else {
        if (_Browser.webkit) {
            _Browser.safari = true
        }
    }
    var b = parseInt(_Browser.version), c = false;
    if (_Browser.msie && b < 8) {
        c = true
    } else {
        if (_Browser.mozilla && b < 6) {
            c = true
        } else {
            if (_Browser.safari && b < 4) {
                c = true
            } else {
                if (_Browser.opera && b < 11) {
                    c = true
                } else {
                    if (_Browser.chrome && b < 10) {
                        c = true
                    }
                }
            }
        }
    }
    _Browser.ie8 = false, _Browser.ie9 = false;
    if (_Browser.msie && b <= 8) {
        _Browser.ie8 = true
    }
    if (_Browser.msie && b <= 9) {
        _Browser.ie9 = true
    }
    if (c) { //really old browsers
        window.location.hash = "#upgrade";
        return false
    }
    return true
}
function get3D() {
    var a = _Browser.version;
    if (_Browser.msie) {
        _Three = false
    } else {
        if (_Browser.mozilla && a < 11) {
            _Three = false
        } else {
            if (_Browser.safari && a < 6) {
                _Three = false
            } else {
                if (_Browser.opera) {
                    _Three = false
                } else {
                    if (_Browser.chrome && a < 11) {
                        _Three = false
                    }
                }
            }
        }
    }
}
function getDevice() {
    var c = {
        device: ua.match(/(iphone|ipod|ipad|android)/),
        iphone: ua.match(/(iphone|android)/),
        ipod: ua.match(/(ipod)/),
        ipad: ua.match(/(ipad)/),
        android: ua.match(/(android)/),
        androidVersion: ua.match(/android [\d+\.]{3,5}/)
    }, d = screen.width, b = screen.height, f = document.getElementsByTagName("html"), g = document.getElementsByTagName("body"), k = "desktop", j = d;
    if (d > b) {
        j = d;
        d = b;
        b = j
    }
    if (c.androidVersion) {
        var a = ua.match(/android [\d+\.]{3,5}/)[0].replace("android ", ""), i = c.android ? parseFloat(a): 0;
        _Device.androidVersion = i
    }
    g[0].style.visibility = "hidden";
    if (d == 320 && b == 480 && c.iphone) {
        _Device.iphone4 = true;
        k = "iphone4"
    } else {
        if (d == 320 && b == 568 && c.iphone) {
            _Device.iphone5 = true;
            k = "iphone5"
        } else {
            if (d == 768 && b == 1024 && c.ipad) {
                _Device.ipad = true;
                k = "ipad"
            } else {
                if ((d == 480 && b == 800 && c.android) || (d == 320 && b == 534 && c.android)) {
                    _Device.galaxys2 = true;
                    k = "galaxys2"
                } else {
                    if (d == 720 && b == 1280 && c.android) {
                        _Device.galaxys3 = true;
                        k = "galaxys3"
                    } else {
                        if (d == 600 && b == 1024 && c.android) {
                            _Device.galaxyTab1 = true;
                            k = "galaxytab1"
                        } else {
                            if (d == 800 && b == 1280 && c.android) {
                                _Device.galaxyTab2 = true;
                                k = "galaxytab2"
                            } else {
                                if ((d == 768 && b == 1280 && c.android) || (d == 384)) {
                                    _Device.nexus4 = true;
                                    k = "nexus4"
                                }
                            }
                        }
                    }
                }
            }
        }
    }
   /* if (!_Device.smartphone && $mobile == 1) {
        _Device.smartphone = true;
        _Device.tablet = false;
        k = "mobile detected"
    }*/
    _Device.info = k + " " + d + " " + b;
    if (_Device.iphone4 || _Device.iphone5 || _Device.ipad) {
        _Device.ios = true
    } else {
        if (c.android) {
            _Device.android = true
        }
    }
    if (_Device.iphone4 || _Device.iphone5 || _Device.galaxys2 || _Device.galaxys3 || _Device.nexus4) {
        _Device.smartphone = true
    } else {
        if (_Device.ipad || _Device.galaxyTab1 || _Device.galaxyTab2 || _Device.nexus4) {
            _Device.tablet = true
        } else {
            _Device.isDevice = false;
            _Desktop = true
        }
    }
    if (_Device.smartphone || _Device.tablet) {
        _Device.isDevice = true
    }
    if (_Device.isDevice) {
        var h = _Device.smartphone ? "smartphone": _Device.tablet ? "tablet": "desktop", e = window.orientation == 0 || window.orientation == 90 ? "portrait": "landscape";
        f[0].className = h;
        g[0].id = e;
        setTimeout(function() {
            g[0].style.visibility = "visible"
        }, 50);
        window.addEventListener("orientationchange", function() {
            var l = (window.orientation == 0 || window.orientation == 180) ? "portrait": "landscape";
            g[0].id = l;
        })
    } else {
        f[0].className = "desktop";
        g[0].style.visibility = "visible"
    }
}
if (getBrowser()) {
    get3D();
    getDevice()
};
