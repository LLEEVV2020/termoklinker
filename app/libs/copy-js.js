!function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document)
            throw new Error("jQuery requires a window with a document");
        return b(a)
    }
    : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = []
      , d = a.document
      , e = c.slice
      , f = c.concat
      , g = c.push
      , h = c.indexOf
      , i = {}
      , j = i.toString
      , k = i.hasOwnProperty
      , l = {}
      , m = "2.2.4"
      , n = function(a, b) {
        return new n.fn.init(a,b)
    }
      , o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , p = /^-ms-/
      , q = /-([\da-z])/gi
      , r = function(a, b) {
        return b.toUpperCase()
    };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function() {
            return e.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this)
        },
        pushStack: function(a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this,
            b.context = this.context,
            b
        },
        each: function(a) {
            return n.each(this, a)
        },
        map: function(a) {
            return this.pushStack(n.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(e.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length
              , c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: g,
        sort: c.sort,
        splice: c.splice
    },
    n.extend = n.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g,
        g = arguments[h] || {},
        h++),
        "object" == typeof g || n.isFunction(g) || (g = {}),
        h === i && (g = this,
        h--); i > h; h++)
            if (null != (a = arguments[h]))
                for (b in a)
                    c = g[b],
                    d = a[b],
                    g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1,
                    f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {},
                    g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }
    ,
    n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === n.type(a)
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            var b = a && a.toString();
            return !n.isArray(a) && b - parseFloat(b) + 1 >= 0
        },
        isPlainObject: function(a) {
            var b;
            if ("object" !== n.type(a) || a.nodeType || n.isWindow(a))
                return !1;
            if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype || {}, "isPrototypeOf"))
                return !1;
            for (b in a)
                ;
            return void 0 === b || k.call(a, b)
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a)
                return !1;
            return !0
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a
        },
        globalEval: function(a) {
            var b, c = eval;
            a = n.trim(a),
            a && (1 === a.indexOf("use strict") ? (b = d.createElement("script"),
            b.text = a,
            d.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        },
        camelCase: function(a) {
            return a.replace(p, "ms-").replace(q, r)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b) {
            var c, d = 0;
            if (s(a)) {
                for (c = a.length; c > d; d++)
                    if (b.call(a[d], d, a[d]) === !1)
                        break
            } else
                for (d in a)
                    if (b.call(a[d], d, a[d]) === !1)
                        break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(o, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)),
            c
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : h.call(b, a, c)
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++)
                a[e++] = b[d];
            return a.length = e,
            a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
                d = !b(a[f], f),
                d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, e, g = 0, h = [];
            if (s(a))
                for (d = a.length; d > g; g++)
                    e = b(a[g], g, c),
                    null != e && h.push(e);
            else
                for (g in a)
                    e = b(a[g], g, c),
                    null != e && h.push(e);
            return f.apply([], h)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, f;
            return "string" == typeof b && (c = a[b],
            b = a,
            a = c),
            n.isFunction(a) ? (d = e.call(arguments, 2),
            f = function() {
                return a.apply(b || this, d.concat(e.call(arguments)))
            }
            ,
            f.guid = a.guid = a.guid || n.guid++,
            f) : void 0
        },
        now: Date.now,
        support: l
    }),
    "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]),
    n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
        i["[object " + b + "]"] = b.toLowerCase()
    });
    function s(a) {
        var b = !!a && "length"in a && a.length
          , c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var t = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date, v = a.document, w = 0, x = 0, y = ga(), z = ga(), A = ga(), B = function(a, b) {
            return a === b && (l = !0),
            0
        }, C = 1 << 31, D = {}.hasOwnProperty, E = [], F = E.pop, G = E.push, H = E.push, I = E.slice, J = function(a, b) {
            for (var c = 0, d = a.length; d > c; c++)
                if (a[c] === b)
                    return c;
            return -1
        }, K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", L = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]", O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)", P = new RegExp(L + "+","g"), Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$","g"), R = new RegExp("^" + L + "*," + L + "*"), S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"), T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]","g"), U = new RegExp(O), V = new RegExp("^" + M + "$"), W = {
            ID: new RegExp("^#(" + M + ")"),
            CLASS: new RegExp("^\\.(" + M + ")"),
            TAG: new RegExp("^(" + M + "|[*])"),
            ATTR: new RegExp("^" + N),
            PSEUDO: new RegExp("^" + O),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)","i"),
            bool: new RegExp("^(?:" + K + ")$","i"),
            needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)","i")
        }, X = /^(?:input|select|textarea|button)$/i, Y = /^h\d$/i, Z = /^[^{]+\{\s*\[native \w/, $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, _ = /[+~]/, aa = /'|\\/g, ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)","ig"), ca = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
        }, da = function() {
            m()
        };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes),
            E[v.childNodes.length].nodeType
        } catch (ea) {
            H = {
                apply: E.length ? function(a, b) {
                    G.apply(a, I.call(b))
                }
                : function(a, b) {
                    var c = a.length
                      , d = 0;
                    while (a[c++] = b[d++])
                        ;
                    a.length = c - 1
                }
            }
        }
        function fa(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w = b && b.ownerDocument, x = b ? b.nodeType : 9;
            if (d = d || [],
            "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x)
                return d;
            if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b),
            b = b || n,
            p)) {
                if (11 !== x && (o = $.exec(a)))
                    if (f = o[1]) {
                        if (9 === x) {
                            if (!(j = b.getElementById(f)))
                                return d;
                            if (j.id === f)
                                return d.push(j),
                                d
                        } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f)
                            return d.push(j),
                            d
                    } else {
                        if (o[2])
                            return H.apply(d, b.getElementsByTagName(a)),
                            d;
                        if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName)
                            return H.apply(d, b.getElementsByClassName(f)),
                            d
                    }
                if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== x)
                        w = b,
                        s = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&") : b.setAttribute("id", k = u),
                        r = g(a),
                        h = r.length,
                        l = V.test(k) ? "#" + k : "[id='" + k + "']";
                        while (h--)
                            r[h] = l + " " + qa(r[h]);
                        s = r.join(","),
                        w = _.test(a) && oa(b.parentNode) || b
                    }
                    if (s)
                        try {
                            return H.apply(d, w.querySelectorAll(s)),
                            d
                        } catch (y) {} finally {
                            k === u && b.removeAttribute("id")
                        }
                }
            }
            return i(a.replace(Q, "$1"), b, d, e)
        }
        function ga() {
            var a = [];
            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()],
                b[c + " "] = e
            }
            return b
        }
        function ha(a) {
            return a[u] = !0,
            a
        }
        function ia(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b),
                b = null
            }
        }
        function ja(a, b) {
            var c = a.split("|")
              , e = c.length;
            while (e--)
                d.attrHandle[c[e]] = b
        }
        function ka(a, b) {
            var c = b && a
              , d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d)
                return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b)
                        return -1;
            return a ? 1 : -1
        }
        function la(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }
        function ma(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }
        function na(a) {
            return ha(function(b) {
                return b = +b,
                ha(function(c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    while (g--)
                        c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }
        function oa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        c = fa.support = {},
        f = fa.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }
        ,
        m = fa.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g,
            o = n.documentElement,
            p = !f(n),
            (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)),
            c.attributes = ia(function(a) {
                return a.className = "i",
                !a.getAttribute("className")
            }),
            c.getElementsByTagName = ia(function(a) {
                return a.appendChild(n.createComment("")),
                !a.getElementsByTagName("*").length
            }),
            c.getElementsByClassName = Z.test(n.getElementsByClassName),
            c.getById = ia(function(a) {
                return o.appendChild(a).id = u,
                !n.getElementsByName || !n.getElementsByName(u).length
            }),
            c.getById ? (d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c ? [c] : []
                }
            }
            ,
            d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }
            ) : (delete d.find.ID,
            d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }
            ),
            d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            }
            : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++])
                        1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }
            ,
            d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0
            }
            ,
            r = [],
            q = [],
            (c.qsa = Z.test(n.querySelectorAll)) && (ia(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"),
                a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"),
                a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="),
                a.querySelectorAll(":checked").length || q.push(":checked"),
                a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }),
            ia(function(a) {
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"),
                a.appendChild(b).setAttribute("name", "D"),
                a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="),
                a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"),
                a.querySelectorAll("*,:x"),
                q.push(",.*:")
            })),
            (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function(a) {
                c.disconnectedMatch = s.call(a, "div"),
                s.call(a, "[s!='']:x"),
                r.push("!=", O)
            }),
            q = q.length && new RegExp(q.join("|")),
            r = r.length && new RegExp(r.join("|")),
            b = Z.test(o.compareDocumentPosition),
            t = b || Z.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a
                  , d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            }
            : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a)
                            return !0;
                return !1
            }
            ,
            B = b ? function(a, b) {
                if (a === b)
                    return l = !0,
                    0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1,
                1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
            }
            : function(a, b) {
                if (a === b)
                    return l = !0,
                    0;
                var c, d = 0, e = a.parentNode, f = b.parentNode, g = [a], h = [b];
                if (!e || !f)
                    return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f)
                    return ka(a, b);
                c = a;
                while (c = c.parentNode)
                    g.unshift(c);
                c = b;
                while (c = c.parentNode)
                    h.unshift(c);
                while (g[d] === h[d])
                    d++;
                return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
            }
            ,
            n) : n
        }
        ,
        fa.matches = function(a, b) {
            return fa(a, null, null, b)
        }
        ,
        fa.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a),
            b = b.replace(T, "='$1']"),
            c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b)))
                try {
                    var d = s.call(a, b);
                    if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType)
                        return d
                } catch (e) {}
            return fa(b, n, null, [a]).length > 0
        }
        ,
        fa.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a),
            t(a, b)
        }
        ,
        fa.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()]
              , f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }
        ,
        fa.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }
        ,
        fa.uniqueSort = function(a) {
            var b, d = [], e = 0, f = 0;
            if (l = !c.detectDuplicates,
            k = !c.sortStable && a.slice(0),
            a.sort(B),
            l) {
                while (b = a[f++])
                    b === a[f] && (e = d.push(f));
                while (e--)
                    a.splice(d[e], 1)
            }
            return k = null,
            a
        }
        ,
        e = fa.getText = function(a) {
            var b, c = "", d = 0, f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent)
                        return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling)
                        c += e(a)
                } else if (3 === f || 4 === f)
                    return a.nodeValue
            } else
                while (b = a[d++])
                    c += e(b);
            return c
        }
        ,
        d = fa.selectors = {
            cacheLength: 50,
            createPseudo: ha,
            match: W,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(ba, ca),
                    a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca),
                    "~=" === a[2] && (a[3] = " " + a[3] + " "),
                    a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(),
                    "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]),
                    a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])),
                    a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]),
                    a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b),
                    a[2] = c.slice(0, b)),
                    a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ba, ca).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    }
                    : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = fa.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "",
                        "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3)
                      , g = "last" !== a.slice(-4)
                      , h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    }
                    : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h, t = !1;
                        if (q) {
                            if (f) {
                                while (p) {
                                    m = b;
                                    while (m = m[p])
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType)
                                            return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild],
                            g && s) {
                                m = q,
                                l = m[u] || (m[u] = {}),
                                k = l[m.uniqueID] || (l[m.uniqueID] = {}),
                                j = k[a] || [],
                                n = j[0] === w && j[1],
                                t = n && j[2],
                                m = n && q.childNodes[n];
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if (1 === m.nodeType && ++t && m === b) {
                                        k[a] = [w, n, t];
                                        break
                                    }
                            } else if (s && (m = b,
                            l = m[u] || (m[u] = {}),
                            k = l[m.uniqueID] || (l[m.uniqueID] = {}),
                            j = k[a] || [],
                            n = j[0] === w && j[1],
                            t = n),
                            t === !1)
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}),
                                    k = l[m.uniqueID] || (l[m.uniqueID] = {}),
                                    k[a] = [w, t]),
                                    m === b))
                                        break;
                            return t -= e,
                            t === d || t % d === 0 && t / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b],
                    d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function(a, c) {
                        var d, f = e(a, b), g = f.length;
                        while (g--)
                            d = J(a, f[g]),
                            a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }
                    ) : e
                }
            },
            pseudos: {
                not: ha(function(a) {
                    var b = []
                      , c = []
                      , d = h(a.replace(Q, "$1"));
                    return d[u] ? ha(function(a, b, c, e) {
                        var f, g = d(a, null, e, []), h = a.length;
                        while (h--)
                            (f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a,
                        d(b, null, f, c),
                        b[0] = null,
                        !c.pop()
                    }
                }),
                has: ha(function(a) {
                    return function(b) {
                        return fa(a, b).length > 0
                    }
                }),
                contains: ha(function(a) {
                    return a = a.replace(ba, ca),
                    function(b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                    }
                }),
                lang: ha(function(a) {
                    return V.test(a || "") || fa.error("unsupported lang: " + a),
                    a = a.replace(ba, ca).toLowerCase(),
                    function(b) {
                        var c;
                        do
                            if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                                return c = c.toLowerCase(),
                                c === a || 0 === c.indexOf(a + "-");
                        while ((b = b.parentNode) && 1 === b.nodeType);return !1
                    }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex,
                    a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return Y.test(a.nodeName)
                },
                input: function(a) {
                    return X.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: na(function() {
                    return [0]
                }),
                last: na(function(a, b) {
                    return [b - 1]
                }),
                eq: na(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: na(function(a, b) {
                    for (var c = 0; b > c; c += 2)
                        a.push(c);
                    return a
                }),
                odd: na(function(a, b) {
                    for (var c = 1; b > c; c += 2)
                        a.push(c);
                    return a
                }),
                lt: na(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0; )
                        a.push(d);
                    return a
                }),
                gt: na(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b; )
                        a.push(d);
                    return a
                })
            }
        },
        d.pseudos.nth = d.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            d.pseudos[b] = la(b);
        for (b in {
            submit: !0,
            reset: !0
        })
            d.pseudos[b] = ma(b);
        function pa() {}
        pa.prototype = d.filters = d.pseudos,
        d.setFilters = new pa,
        g = fa.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k)
                return b ? 0 : k.slice(0);
            h = a,
            i = [],
            j = d.preFilter;
            while (h) {
                c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h),
                i.push(f = [])),
                c = !1,
                (e = S.exec(h)) && (c = e.shift(),
                f.push({
                    value: c,
                    type: e[0].replace(Q, " ")
                }),
                h = h.slice(c.length));
                for (g in d.filter)
                    !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(),
                    f.push({
                        value: c,
                        type: g,
                        matches: e
                    }),
                    h = h.slice(c.length));
                if (!c)
                    break
            }
            return b ? h.length : h ? fa.error(a) : z(a, i).slice(0)
        }
        ;
        function qa(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++)
                d += a[b].value;
            return d
        }
        function ra(a, b, c) {
            var d = b.dir
              , e = c && "parentNode" === d
              , f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e)
                        return a(b, c, f)
            }
            : function(b, c, g) {
                var h, i, j, k = [w, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g))
                            return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (j = b[u] || (b[u] = {}),
                            i = j[b.uniqueID] || (j[b.uniqueID] = {}),
                            (h = i[d]) && h[0] === w && h[1] === f)
                                return k[2] = h[2];
                            if (i[d] = k,
                            k[2] = a(b, c, g))
                                return !0
                        }
            }
        }
        function sa(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d))
                        return !1;
                return !0
            }
            : a[0]
        }
        function ta(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++)
                fa(a, b[d], c);
            return c
        }
        function ua(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
                (f = a[h]) && (c && !c(f, d, e) || (g.push(f),
                j && b.push(h)));
            return g
        }
        function va(a, b, c, d, e, f) {
            return d && !d[u] && (d = va(d)),
            e && !e[u] && (e = va(e, f)),
            ha(function(f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || ta(b || "*", h.nodeType ? [h] : h, []), q = !a || !f && b ? p : ua(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i),
                d) {
                    j = ua(r, n),
                    d(j, [], h, i),
                    k = j.length;
                    while (k--)
                        (l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [],
                            k = r.length;
                            while (k--)
                                (l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)
                            (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else
                    r = ua(r === g ? r.splice(o, r.length) : r),
                    e ? e(null, g, r, i) : H.apply(g, r)
            })
        }
        function wa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function(a) {
                return a === b
            }, h, !0), l = ra(function(a) {
                return J(b, a) > -1
            }, h, !0), m = [function(a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                return b = null,
                e
            }
            ]; f > i; i++)
                if (c = d.relative[a[i].type])
                    m = [ra(sa(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches),
                    c[u]) {
                        for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type])
                                break;
                        return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a))
                    }
                    m.push(c)
                }
            return sa(m)
        }
        function xa(a, b) {
            var c = b.length > 0
              , e = a.length > 0
              , f = function(f, g, h, i, k) {
                var l, o, q, r = 0, s = "0", t = f && [], u = [], v = j, x = f || e && d.find.TAG("*", k), y = w += null == v ? 1 : Math.random() || .1, z = x.length;
                for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                    if (e && l) {
                        o = 0,
                        g || l.ownerDocument === n || (m(l),
                        h = !p);
                        while (q = a[o++])
                            if (q(l, g || n, h)) {
                                i.push(l);
                                break
                            }
                        k && (w = y)
                    }
                    c && ((l = !q && l) && r--,
                    f && t.push(l))
                }
                if (r += s,
                c && s !== r) {
                    o = 0;
                    while (q = b[o++])
                        q(t, u, g, h);
                    if (f) {
                        if (r > 0)
                            while (s--)
                                t[s] || u[s] || (u[s] = F.call(i));
                        u = ua(u)
                    }
                    H.apply(i, u),
                    k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i)
                }
                return k && (w = y,
                j = v),
                t
            };
            return c ? ha(f) : f
        }
        return h = fa.compile = function(a, b) {
            var c, d = [], e = [], f = A[a + " "];
            if (!f) {
                b || (b = g(a)),
                c = b.length;
                while (c--)
                    f = wa(b[c]),
                    f[u] ? d.push(f) : e.push(f);
                f = A(a, xa(e, d)),
                f.selector = a
            }
            return f
        }
        ,
        i = fa.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a);
            if (e = e || [],
            1 === o.length) {
                if (j = o[0] = o[0].slice(0),
                j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0],
                    !b)
                        return e;
                    n && (b = b.parentNode),
                    a = a.slice(j.shift().value.length)
                }
                i = W.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i],
                    d.relative[l = k.type])
                        break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
                        if (j.splice(i, 1),
                        a = f.length && qa(j),
                        !a)
                            return H.apply(e, f),
                            e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b),
            e
        }
        ,
        c.sortStable = u.split("").sort(B).join("") === u,
        c.detectDuplicates = !!l,
        m(),
        c.sortDetached = ia(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }),
        ia(function(a) {
            return a.innerHTML = "<a href='#'></a>",
            "#" === a.firstChild.getAttribute("href")
        }) || ja("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }),
        c.attributes && ia(function(a) {
            return a.innerHTML = "<input/>",
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
        }) || ja("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }),
        ia(function(a) {
            return null == a.getAttribute("disabled")
        }) || ja(K, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }),
        fa
    }(a);
    n.find = t,
    n.expr = t.selectors,
    n.expr[":"] = n.expr.pseudos,
    n.uniqueSort = n.unique = t.uniqueSort,
    n.text = t.getText,
    n.isXMLDoc = t.isXML,
    n.contains = t.contains;
    var u = function(a, b, c) {
        var d = []
          , e = void 0 !== c;
        while ((a = a[b]) && 9 !== a.nodeType)
            if (1 === a.nodeType) {
                if (e && n(a).is(c))
                    break;
                d.push(a)
            }
        return d
    }
      , v = function(a, b) {
        for (var c = []; a; a = a.nextSibling)
            1 === a.nodeType && a !== b && c.push(a);
        return c
    }
      , w = n.expr.match.needsContext
      , x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/
      , y = /^.[^:#\[\.,]*$/;
    function z(a, b, c) {
        if (n.isFunction(b))
            return n.grep(a, function(a, d) {
                return !!b.call(a, d, a) !== c
            });
        if (b.nodeType)
            return n.grep(a, function(a) {
                return a === b !== c
            });
        if ("string" == typeof b) {
            if (y.test(b))
                return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function(a) {
            return h.call(b, a) > -1 !== c
        })
    }
    n.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"),
        1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }
    ,
    n.fn.extend({
        find: function(a) {
            var b, c = this.length, d = [], e = this;
            if ("string" != typeof a)
                return this.pushStack(n(a).filter(function() {
                    for (b = 0; c > b; b++)
                        if (n.contains(e[b], this))
                            return !0
                }));
            for (b = 0; c > b; b++)
                n.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? n.unique(d) : d),
            d.selector = this.selector ? this.selector + " " + a : a,
            d
        },
        filter: function(a) {
            return this.pushStack(z(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(z(this, a || [], !0))
        },
        is: function(a) {
            return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length
        }
    });
    var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, C = n.fn.init = function(a, b, c) {
        var e, f;
        if (!a)
            return this;
        if (c = c || A,
        "string" == typeof a) {
            if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : B.exec(a),
            !e || !e[1] && b)
                return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
            if (e[1]) {
                if (b = b instanceof n ? b[0] : b,
                n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)),
                x.test(e[1]) && n.isPlainObject(b))
                    for (e in b)
                        n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                return this
            }
            return f = d.getElementById(e[2]),
            f && f.parentNode && (this.length = 1,
            this[0] = f),
            this.context = d,
            this.selector = a,
            this
        }
        return a.nodeType ? (this.context = this[0] = a,
        this.length = 1,
        this) : n.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector,
        this.context = a.context),
        n.makeArray(a, this))
    }
    ;
    C.prototype = n.fn,
    A = n(d);
    var D = /^(?:parents|prev(?:Until|All))/
      , E = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    n.fn.extend({
        has: function(a) {
            var b = n(a, this)
              , c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++)
                    if (n.contains(this, b[a]))
                        return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? h.call(n(a), this[0]) : h.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });
    function F(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType)
            ;
        return a
    }
    n.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return u(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return u(a, "parentNode", c)
        },
        next: function(a) {
            return F(a, "nextSibling")
        },
        prev: function(a) {
            return F(a, "previousSibling")
        },
        nextAll: function(a) {
            return u(a, "nextSibling")
        },
        prevAll: function(a) {
            return u(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return u(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return u(a, "previousSibling", c)
        },
        siblings: function(a) {
            return v((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return v(a.firstChild)
        },
        contents: function(a) {
            return a.contentDocument || n.merge([], a.childNodes)
        }
    }, function(a, b) {
        n.fn[a] = function(c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c),
            d && "string" == typeof d && (e = n.filter(d, e)),
            this.length > 1 && (E[a] || n.uniqueSort(e),
            D.test(a) && e.reverse()),
            this.pushStack(e)
        }
    });
    var G = /\S+/g;
    function H(a) {
        var b = {};
        return n.each(a.match(G) || [], function(a, c) {
            b[c] = !0
        }),
        b
    }
    n.Callbacks = function(a) {
        a = "string" == typeof a ? H(a) : n.extend({}, a);
        var b, c, d, e, f = [], g = [], h = -1, i = function() {
            for (e = a.once,
            d = b = !0; g.length; h = -1) {
                c = g.shift();
                while (++h < f.length)
                    f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length,
                    c = !1)
            }
            a.memory || (c = !1),
            b = !1,
            e && (f = c ? [] : "")
        }, j = {
            add: function() {
                return f && (c && !b && (h = f.length - 1,
                g.push(c)),
                function d(b) {
                    n.each(b, function(b, c) {
                        n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c)
                    })
                }(arguments),
                c && !b && i()),
                this
            },
            remove: function() {
                return n.each(arguments, function(a, b) {
                    var c;
                    while ((c = n.inArray(b, f, c)) > -1)
                        f.splice(c, 1),
                        h >= c && h--
                }),
                this
            },
            has: function(a) {
                return a ? n.inArray(a, f) > -1 : f.length > 0
            },
            empty: function() {
                return f && (f = []),
                this
            },
            disable: function() {
                return e = g = [],
                f = c = "",
                this
            },
            disabled: function() {
                return !f
            },
            lock: function() {
                return e = g = [],
                c || (f = c = ""),
                this
            },
            locked: function() {
                return !!e
            },
            fireWith: function(a, c) {
                return e || (c = c || [],
                c = [a, c.slice ? c.slice() : c],
                g.push(c),
                b || i()),
                this
            },
            fire: function() {
                return j.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!d
            }
        };
        return j
    }
    ,
    n.extend({
        Deferred: function(a) {
            var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]]
              , c = "pending"
              , d = {
                state: function() {
                    return c
                },
                always: function() {
                    return e.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var a = arguments;
                    return n.Deferred(function(c) {
                        n.each(b, function(b, f) {
                            var g = n.isFunction(a[b]) && a[b];
                            e[f[1]](function() {
                                var a = g && g.apply(this, arguments);
                                a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                            })
                        }),
                        a = null
                    }).promise()
                },
                promise: function(a) {
                    return null != a ? n.extend(a, d) : d
                }
            }
              , e = {};
            return d.pipe = d.then,
            n.each(b, function(a, f) {
                var g = f[2]
                  , h = f[3];
                d[f[1]] = g.add,
                h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock),
                e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments),
                    this
                }
                ,
                e[f[0] + "With"] = g.fireWith
            }),
            d.promise(e),
            a && a.call(e, e),
            e
        },
        when: function(a) {
            var b = 0, c = e.call(arguments), d = c.length, f = 1 !== d || a && n.isFunction(a.promise) ? d : 0, g = 1 === f ? a : n.Deferred(), h = function(a, b, c) {
                return function(d) {
                    b[a] = this,
                    c[a] = arguments.length > 1 ? e.call(arguments) : d,
                    c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                }
            }, i, j, k;
            if (d > 1)
                for (i = new Array(d),
                j = new Array(d),
                k = new Array(d); d > b; b++)
                    c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
            return f || g.resolveWith(k, c),
            g.promise()
        }
    });
    var I;
    n.fn.ready = function(a) {
        return n.ready.promise().done(a),
        this
    }
    ,
    n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? n.readyWait++ : n.ready(!0)
        },
        ready: function(a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0,
            a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]),
            n.fn.triggerHandler && (n(d).triggerHandler("ready"),
            n(d).off("ready"))))
        }
    });
    function J() {
        d.removeEventListener("DOMContentLoaded", J),
        a.removeEventListener("load", J),
        n.ready()
    }
    n.ready.promise = function(b) {
        return I || (I = n.Deferred(),
        "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(n.ready) : (d.addEventListener("DOMContentLoaded", J),
        a.addEventListener("load", J))),
        I.promise(b)
    }
    ,
    n.ready.promise();
    var K = function(a, b, c, d, e, f, g) {
        var h = 0
          , i = a.length
          , j = null == c;
        if ("object" === n.type(c)) {
            e = !0;
            for (h in c)
                K(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0,
        n.isFunction(d) || (g = !0),
        j && (g ? (b.call(a, d),
        b = null) : (j = b,
        b = function(a, b, c) {
            return j.call(n(a), c)
        }
        )),
        b))
            for (; i > h; h++)
                b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    }
      , L = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    };
    function M() {
        this.expando = n.expando + M.uid++
    }
    M.uid = 1,
    M.prototype = {
        register: function(a, b) {
            var c = b || {};
            return a.nodeType ? a[this.expando] = c : Object.defineProperty(a, this.expando, {
                value: c,
                writable: !0,
                configurable: !0
            }),
            a[this.expando]
        },
        cache: function(a) {
            if (!L(a))
                return {};
            var b = a[this.expando];
            return b || (b = {},
            L(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                value: b,
                configurable: !0
            }))),
            b
        },
        set: function(a, b, c) {
            var d, e = this.cache(a);
            if ("string" == typeof b)
                e[b] = c;
            else
                for (d in b)
                    e[d] = b[d];
            return e
        },
        get: function(a, b) {
            return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][b]
        },
        access: function(a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b),
            void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c),
            void 0 !== c ? c : b)
        },
        remove: function(a, b) {
            var c, d, e, f = a[this.expando];
            if (void 0 !== f) {
                if (void 0 === b)
                    this.register(a);
                else {
                    n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b),
                    b in f ? d = [b, e] : (d = e,
                    d = d in f ? [d] : d.match(G) || [])),
                    c = d.length;
                    while (c--)
                        delete f[d[c]]
                }
                (void 0 === b || n.isEmptyObject(f)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
            }
        },
        hasData: function(a) {
            var b = a[this.expando];
            return void 0 !== b && !n.isEmptyObject(b)
        }
    };
    var N = new M
      , O = new M
      , P = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , Q = /[A-Z]/g;
    function R(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(Q, "-$&").toLowerCase(),
            c = a.getAttribute(d),
            "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : P.test(c) ? n.parseJSON(c) : c;
                } catch (e) {}
                O.set(a, b, c)
            } else
                c = void 0;
        return c
    }
    n.extend({
        hasData: function(a) {
            return O.hasData(a) || N.hasData(a)
        },
        data: function(a, b, c) {
            return O.access(a, b, c)
        },
        removeData: function(a, b) {
            O.remove(a, b)
        },
        _data: function(a, b, c) {
            return N.access(a, b, c)
        },
        _removeData: function(a, b) {
            N.remove(a, b)
        }
    }),
    n.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = O.get(f),
                1 === f.nodeType && !N.get(f, "hasDataAttrs"))) {
                    c = g.length;
                    while (c--)
                        g[c] && (d = g[c].name,
                        0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)),
                        R(f, d, e[d])));
                    N.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                O.set(this, a)
            }) : K(this, function(b) {
                var c, d;
                if (f && void 0 === b) {
                    if (c = O.get(f, a) || O.get(f, a.replace(Q, "-$&").toLowerCase()),
                    void 0 !== c)
                        return c;
                    if (d = n.camelCase(a),
                    c = O.get(f, d),
                    void 0 !== c)
                        return c;
                    if (c = R(f, d, void 0),
                    void 0 !== c)
                        return c
                } else
                    d = n.camelCase(a),
                    this.each(function() {
                        var c = O.get(this, d);
                        O.set(this, d, b),
                        a.indexOf("-") > -1 && void 0 !== c && O.set(this, a, b)
                    })
            }, null, b, arguments.length > 1, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                O.remove(this, a)
            })
        }
    }),
    n.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue",
            d = N.get(a, b),
            c && (!d || n.isArray(c) ? d = N.access(a, b, n.makeArray(c)) : d.push(c)),
            d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = n.queue(a, b)
              , d = c.length
              , e = c.shift()
              , f = n._queueHooks(a, b)
              , g = function() {
                n.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(),
            d--),
            e && ("fx" === b && c.unshift("inprogress"),
            delete f.stop,
            e.call(a, g, f)),
            !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return N.get(a, c) || N.access(a, c, {
                empty: n.Callbacks("once memory").add(function() {
                    N.remove(a, [b + "queue", c])
                })
            })
        }
    }),
    n.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a,
            a = "fx",
            c--),
            arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a),
                "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                n.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1, e = n.Deferred(), f = this, g = this.length, h = function() {
                --d || e.resolveWith(f, [f])
            };
            "string" != typeof a && (b = a,
            a = void 0),
            a = a || "fx";
            while (g--)
                c = N.get(f[g], a + "queueHooks"),
                c && c.empty && (d++,
                c.empty.add(h));
            return h(),
            e.promise(b)
        }
    });
    var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , T = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$","i")
      , U = ["Top", "Right", "Bottom", "Left"]
      , V = function(a, b) {
        return a = b || a,
        "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
    };
    function W(a, b, c, d) {
        var e, f = 1, g = 20, h = d ? function() {
            return d.cur()
        }
        : function() {
            return n.css(a, b, "")
        }
        , i = h(), j = c && c[3] || (n.cssNumber[b] ? "" : "px"), k = (n.cssNumber[b] || "px" !== j && +i) && T.exec(n.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3],
            c = c || [],
            k = +i || 1;
            do
                f = f || ".5",
                k /= f,
                n.style(a, b, k + j);
            while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0,
        e = c[1] ? k + (c[1] + 1) * c[2] : +c[2],
        d && (d.unit = j,
        d.start = k,
        d.end = e)),
        e
    }
    var X = /^(?:checkbox|radio)$/i
      , Y = /<([\w:-]+)/
      , Z = /^$|\/(?:java|ecma)script/i
      , $ = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    $.optgroup = $.option,
    $.tbody = $.tfoot = $.colgroup = $.caption = $.thead,
    $.th = $.td;
    function _(a, b) {
        var c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c
    }
    function aa(a, b) {
        for (var c = 0, d = a.length; d > c; c++)
            N.set(a[c], "globalEval", !b || N.get(b[c], "globalEval"))
    }
    var ba = /<|&#?\w+;/;
    function ca(a, b, c, d, e) {
        for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], o = 0, p = a.length; p > o; o++)
            if (f = a[o],
            f || 0 === f)
                if ("object" === n.type(f))
                    n.merge(m, f.nodeType ? [f] : f);
                else if (ba.test(f)) {
                    g = g || l.appendChild(b.createElement("div")),
                    h = (Y.exec(f) || ["", ""])[1].toLowerCase(),
                    i = $[h] || $._default,
                    g.innerHTML = i[1] + n.htmlPrefilter(f) + i[2],
                    k = i[0];
                    while (k--)
                        g = g.lastChild;
                    n.merge(m, g.childNodes),
                    g = l.firstChild,
                    g.textContent = ""
                } else
                    m.push(b.createTextNode(f));
        l.textContent = "",
        o = 0;
        while (f = m[o++])
            if (d && n.inArray(f, d) > -1)
                e && e.push(f);
            else if (j = n.contains(f.ownerDocument, f),
            g = _(l.appendChild(f), "script"),
            j && aa(g),
            c) {
                k = 0;
                while (f = g[k++])
                    Z.test(f.type || "") && c.push(f)
            }
        return l
    }
    !function() {
        var a = d.createDocumentFragment()
          , b = a.appendChild(d.createElement("div"))
          , c = d.createElement("input");
        c.setAttribute("type", "radio"),
        c.setAttribute("checked", "checked"),
        c.setAttribute("name", "t"),
        b.appendChild(c),
        l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked,
        b.innerHTML = "<textarea>x</textarea>",
        l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var da = /^key/
      , ea = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , fa = /^([^.]*)(?:\.(.+)|)/;
    function ga() {
        return !0
    }
    function ha() {
        return !1
    }
    function ia() {
        try {
            return d.activeElement
        } catch (a) {}
    }
    function ja(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c,
            c = void 0);
            for (h in b)
                ja(a, h, c, d, b[h], f);
            return a
        }
        if (null == d && null == e ? (e = c,
        d = c = void 0) : null == e && ("string" == typeof c ? (e = d,
        d = void 0) : (e = d,
        d = c,
        c = void 0)),
        e === !1)
            e = ha;
        else if (!e)
            return a;
        return 1 === f && (g = e,
        e = function(a) {
            return n().off(a),
            g.apply(this, arguments)
        }
        ,
        e.guid = g.guid || (g.guid = n.guid++)),
        a.each(function() {
            n.event.add(this, b, e, d, c)
        })
    }
    n.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = N.get(a);
            if (r) {
                c.handler && (f = c,
                c = f.handler,
                e = f.selector),
                c.guid || (c.guid = n.guid++),
                (i = r.events) || (i = r.events = {}),
                (g = r.handle) || (g = r.handle = function(b) {
                    return "undefined" != typeof n && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0
                }
                ),
                b = (b || "").match(G) || [""],
                j = b.length;
                while (j--)
                    h = fa.exec(b[j]) || [],
                    o = q = h[1],
                    p = (h[2] || "").split(".").sort(),
                    o && (l = n.event.special[o] || {},
                    o = (e ? l.delegateType : l.bindType) || o,
                    l = n.event.special[o] || {},
                    k = n.extend({
                        type: o,
                        origType: q,
                        data: d,
                        handler: c,
                        guid: c.guid,
                        selector: e,
                        needsContext: e && n.expr.match.needsContext.test(e),
                        namespace: p.join(".")
                    }, f),
                    (m = i[o]) || (m = i[o] = [],
                    m.delegateCount = 0,
                    l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g)),
                    l.add && (l.add.call(a, k),
                    k.handler.guid || (k.handler.guid = c.guid)),
                    e ? m.splice(m.delegateCount++, 0, k) : m.push(k),
                    n.event.global[o] = !0)
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = N.hasData(a) && N.get(a);
            if (r && (i = r.events)) {
                b = (b || "").match(G) || [""],
                j = b.length;
                while (j--)
                    if (h = fa.exec(b[j]) || [],
                    o = q = h[1],
                    p = (h[2] || "").split(".").sort(),
                    o) {
                        l = n.event.special[o] || {},
                        o = (d ? l.delegateType : l.bindType) || o,
                        m = i[o] || [],
                        h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        g = f = m.length;
                        while (f--)
                            k = m[f],
                            !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1),
                            k.selector && m.delegateCount--,
                            l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle),
                        delete i[o])
                    } else
                        for (o in i)
                            n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(i) && N.remove(a, "handle events")
            }
        },
        dispatch: function(a) {
            a = n.event.fix(a);
            var b, c, d, f, g, h = [], i = e.call(arguments), j = (N.get(this, "events") || {})[a.type] || [], k = n.event.special[a.type] || {};
            if (i[0] = a,
            a.delegateTarget = this,
            !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j),
                b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem,
                    c = 0;
                    while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())
                        a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g,
                        a.data = g.data,
                        d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i),
                        void 0 !== d && (a.result = d) === !1 && (a.preventDefault(),
                        a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a),
                a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
                for (; i !== this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (d = [],
                        c = 0; h > c; c++)
                            f = b[c],
                            e = f.selector + " ",
                            void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length),
                            d[e] && d.push(f);
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }),
            g
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode),
                a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, e, f, g = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || d,
                e = c.documentElement,
                f = c.body,
                a.pageX = b.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0),
                a.pageY = b.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)),
                a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0),
                a
            }
        },
        fix: function(a) {
            if (a[n.expando])
                return a;
            var b, c, e, f = a.type, g = a, h = this.fixHooks[f];
            h || (this.fixHooks[f] = h = ea.test(f) ? this.mouseHooks : da.test(f) ? this.keyHooks : {}),
            e = h.props ? this.props.concat(h.props) : this.props,
            a = new n.Event(g),
            b = e.length;
            while (b--)
                c = e[b],
                a[c] = g[c];
            return a.target || (a.target = d),
            3 === a.target.nodeType && (a.target = a.target.parentNode),
            h.filter ? h.filter(a, g) : a
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== ia() && this.focus ? (this.focus(),
                    !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === ia() && this.blur ? (this.blur(),
                    !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(),
                    !1) : void 0
                },
                _default: function(a) {
                    return n.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        }
    },
    n.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    }
    ,
    n.Event = function(a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a,
        this.type = a.type,
        this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ga : ha) : this.type = a,
        b && n.extend(this, b),
        this.timeStamp = a && a.timeStamp || n.now(),
        void (this[n.expando] = !0)) : new n.Event(a,b)
    }
    ,
    n.Event.prototype = {
        constructor: n.Event,
        isDefaultPrevented: ha,
        isPropagationStopped: ha,
        isImmediatePropagationStopped: ha,
        isSimulated: !1,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = ga,
            a && !this.isSimulated && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = ga,
            a && !this.isSimulated && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = ga,
            a && !this.isSimulated && a.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return e && (e === d || n.contains(d, e)) || (a.type = f.origType,
                c = f.handler.apply(this, arguments),
                a.type = b),
                c
            }
        }
    }),
    n.fn.extend({
        on: function(a, b, c, d) {
            return ja(this, a, b, c, d)
        },
        one: function(a, b, c, d) {
            return ja(this, a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj)
                return d = a.handleObj,
                n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler),
                this;
            if ("object" == typeof a) {
                for (e in a)
                    this.off(e, b, a[e]);
                return this
            }
            return b !== !1 && "function" != typeof b || (c = b,
            b = void 0),
            c === !1 && (c = ha),
            this.each(function() {
                n.event.remove(this, a, c, b)
            })
        }
    });
    var ka = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi
      , la = /<script|<style|<link/i
      , ma = /checked\s*(?:[^=]|=\s*.checked.)/i
      , na = /^true\/(.*)/
      , oa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function pa(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }
    function qa(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type,
        a
    }
    function ra(a) {
        var b = na.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"),
        a
    }
    function sa(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (N.hasData(a) && (f = N.access(a),
            g = N.set(b, f),
            j = f.events)) {
                delete g.handle,
                g.events = {};
                for (e in j)
                    for (c = 0,
                    d = j[e].length; d > c; c++)
                        n.event.add(b, e, j[e][c])
            }
            O.hasData(a) && (h = O.access(a),
            i = n.extend({}, h),
            O.set(b, i))
        }
    }
    function ta(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && X.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
    }
    function ua(a, b, c, d) {
        b = f.apply([], b);
        var e, g, h, i, j, k, m = 0, o = a.length, p = o - 1, q = b[0], r = n.isFunction(q);
        if (r || o > 1 && "string" == typeof q && !l.checkClone && ma.test(q))
            return a.each(function(e) {
                var f = a.eq(e);
                r && (b[0] = q.call(this, e, f.html())),
                ua(f, b, c, d)
            });
        if (o && (e = ca(b, a[0].ownerDocument, !1, a, d),
        g = e.firstChild,
        1 === e.childNodes.length && (e = g),
        g || d)) {
            for (h = n.map(_(e, "script"), qa),
            i = h.length; o > m; m++)
                j = e,
                m !== p && (j = n.clone(j, !0, !0),
                i && n.merge(h, _(j, "script"))),
                c.call(a[m], j, m);
            if (i)
                for (k = h[h.length - 1].ownerDocument,
                n.map(h, ra),
                m = 0; i > m; m++)
                    j = h[m],
                    Z.test(j.type || "") && !N.access(j, "globalEval") && n.contains(k, j) && (j.src ? n._evalUrl && n._evalUrl(j.src) : n.globalEval(j.textContent.replace(oa, "")))
        }
        return a
    }
    function va(a, b, c) {
        for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++)
            c || 1 !== d.nodeType || n.cleanData(_(d)),
            d.parentNode && (c && n.contains(d.ownerDocument, d) && aa(_(d, "script")),
            d.parentNode.removeChild(d));
        return a
    }
    n.extend({
        htmlPrefilter: function(a) {
            return a.replace(ka, "<$1></$2>")
        },
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0), i = n.contains(a.ownerDocument, a);
            if (!(l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                for (g = _(h),
                f = _(a),
                d = 0,
                e = f.length; e > d; d++)
                    ta(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || _(a),
                    g = g || _(h),
                    d = 0,
                    e = f.length; e > d; d++)
                        sa(f[d], g[d]);
                else
                    sa(a, h);
            return g = _(h, "script"),
            g.length > 0 && aa(g, !i && _(a, "script")),
            h
        },
        cleanData: function(a) {
            for (var b, c, d, e = n.event.special, f = 0; void 0 !== (c = a[f]); f++)
                if (L(c)) {
                    if (b = c[N.expando]) {
                        if (b.events)
                            for (d in b.events)
                                e[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
                        c[N.expando] = void 0
                    }
                    c[O.expando] && (c[O.expando] = void 0)
                }
        }
    }),
    n.fn.extend({
        domManip: ua,
        detach: function(a) {
            return va(this, a, !0)
        },
        remove: function(a) {
            return va(this, a)
        },
        text: function(a) {
            return K(this, function(a) {
                return void 0 === a ? n.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function() {
            return ua(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = pa(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return ua(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = pa(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return ua(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return ua(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++)
                1 === a.nodeType && (n.cleanData(_(a, !1)),
                a.textContent = "");
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a,
            b = null == b ? a : b,
            this.map(function() {
                return n.clone(this, a, b)
            })
        },
        html: function(a) {
            return K(this, function(a) {
                var b = this[0] || {}
                  , c = 0
                  , d = this.length;
                if (void 0 === a && 1 === b.nodeType)
                    return b.innerHTML;
                if ("string" == typeof a && !la.test(a) && !$[(Y.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = n.htmlPrefilter(a);
                    try {
                        for (; d > c; c++)
                            b = this[c] || {},
                            1 === b.nodeType && (n.cleanData(_(b, !1)),
                            b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = [];
            return ua(this, arguments, function(b) {
                var c = this.parentNode;
                n.inArray(this, a) < 0 && (n.cleanData(_(this)),
                c && c.replaceChild(b, this))
            }, a)
        }
    }),
    n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        n.fn[a] = function(a) {
            for (var c, d = [], e = n(a), f = e.length - 1, h = 0; f >= h; h++)
                c = h === f ? this : this.clone(!0),
                n(e[h])[b](c),
                g.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var wa, xa = {
        HTML: "block",
        BODY: "block"
    };
    function ya(a, b) {
        var c = n(b.createElement(a)).appendTo(b.body)
          , d = n.css(c[0], "display");
        return c.detach(),
        d
    }
    function za(a) {
        var b = d
          , c = xa[a];
        return c || (c = ya(a, b),
        "none" !== c && c || (wa = (wa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),
        b = wa[0].contentDocument,
        b.write(),
        b.close(),
        c = ya(a, b),
        wa.detach()),
        xa[a] = c),
        c
    }
    var Aa = /^margin/
      , Ba = new RegExp("^(" + S + ")(?!px)[a-z%]+$","i")
      , Ca = function(b) {
        var c = b.ownerDocument.defaultView;
        return c && c.opener || (c = a),
        c.getComputedStyle(b)
    }
      , Da = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b)
            g[f] = a.style[f],
            a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b)
            a.style[f] = g[f];
        return e
    }
      , Ea = d.documentElement;
    !function() {
        var b, c, e, f, g = d.createElement("div"), h = d.createElement("div");
        if (h.style) {
            h.style.backgroundClip = "content-box",
            h.cloneNode(!0).style.backgroundClip = "",
            l.clearCloneStyle = "content-box" === h.style.backgroundClip,
            g.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
            g.appendChild(h);
            function i() {
                h.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
                h.innerHTML = "",
                Ea.appendChild(g);
                var d = a.getComputedStyle(h);
                b = "1%" !== d.top,
                f = "2px" === d.marginLeft,
                c = "4px" === d.width,
                h.style.marginRight = "50%",
                e = "4px" === d.marginRight,
                Ea.removeChild(g)
            }
            n.extend(l, {
                pixelPosition: function() {
                    return i(),
                    b
                },
                boxSizingReliable: function() {
                    return null == c && i(),
                    c
                },
                pixelMarginRight: function() {
                    return null == c && i(),
                    e
                },
                reliableMarginLeft: function() {
                    return null == c && i(),
                    f
                },
                reliableMarginRight: function() {
                    var b, c = h.appendChild(d.createElement("div"));
                    return c.style.cssText = h.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                    c.style.marginRight = c.style.width = "0",
                    h.style.width = "1px",
                    Ea.appendChild(g),
                    b = !parseFloat(a.getComputedStyle(c).marginRight),
                    Ea.removeChild(g),
                    h.removeChild(c),
                    b
                }
            })
        }
    }();
    function Fa(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ca(a),
        g = c ? c.getPropertyValue(b) || c[b] : void 0,
        "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)),
        c && !l.pixelMarginRight() && Ba.test(g) && Aa.test(b) && (d = h.width,
        e = h.minWidth,
        f = h.maxWidth,
        h.minWidth = h.maxWidth = h.width = g,
        g = c.width,
        h.width = d,
        h.minWidth = e,
        h.maxWidth = f),
        void 0 !== g ? g + "" : g
    }
    function Ga(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }
    var Ha = /^(none|table(?!-c[ea]).+)/
      , Ia = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Ja = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , Ka = ["Webkit", "O", "Moz", "ms"]
      , La = d.createElement("div").style;
    function Ma(a) {
        if (a in La)
            return a;
        var b = a[0].toUpperCase() + a.slice(1)
          , c = Ka.length;
        while (c--)
            if (a = Ka[c] + b,
            a in La)
                return a
    }
    function Na(a, b, c) {
        var d = T.exec(b);
        return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b
    }
    function Oa(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)
            "margin" === c && (g += n.css(a, c + U[f], !0, e)),
            d ? ("content" === c && (g -= n.css(a, "padding" + U[f], !0, e)),
            "margin" !== c && (g -= n.css(a, "border" + U[f] + "Width", !0, e))) : (g += n.css(a, "padding" + U[f], !0, e),
            "padding" !== c && (g += n.css(a, "border" + U[f] + "Width", !0, e)));
        return g
    }
    function Pa(a, b, c) {
        var d = !0
          , e = "width" === b ? a.offsetWidth : a.offsetHeight
          , f = Ca(a)
          , g = "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Fa(a, b, f),
            (0 > e || null == e) && (e = a.style[b]),
            Ba.test(e))
                return e;
            d = g && (l.boxSizingReliable() || e === a.style[b]),
            e = parseFloat(e) || 0
        }
        return e + Oa(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    function Qa(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
            d = a[g],
            d.style && (f[g] = N.get(d, "olddisplay"),
            c = d.style.display,
            b ? (f[g] || "none" !== c || (d.style.display = ""),
            "" === d.style.display && V(d) && (f[g] = N.access(d, "olddisplay", za(d.nodeName)))) : (e = V(d),
            "none" === c && e || N.set(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++)
            d = a[g],
            d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }
    n.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Fa(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b), i = a.style;
                return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h),
                g = n.cssHooks[b] || n.cssHooks[h],
                void 0 === c ? g && "get"in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c,
                "string" === f && (e = T.exec(c)) && e[1] && (c = W(a, b, e),
                f = "number"),
                null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")),
                l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"),
                g && "set"in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)),
                void 0)
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h),
            g = n.cssHooks[b] || n.cssHooks[h],
            g && "get"in g && (e = g.get(a, !0, c)),
            void 0 === e && (e = Fa(a, b, d)),
            "normal" === e && b in Ja && (e = Ja[b]),
            "" === c || c ? (f = parseFloat(e),
            c === !0 || isFinite(f) ? f || 0 : e) : e
        }
    }),
    n.each(["height", "width"], function(a, b) {
        n.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Ha.test(n.css(a, "display")) && 0 === a.offsetWidth ? Da(a, Ia, function() {
                    return Pa(a, b, d)
                }) : Pa(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e, f = d && Ca(a), g = d && Oa(a, b, d, "border-box" === n.css(a, "boxSizing", !1, f), f);
                return g && (e = T.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c,
                c = n.css(a, b)),
                Na(a, c, g)
            }
        }
    }),
    n.cssHooks.marginLeft = Ga(l.reliableMarginLeft, function(a, b) {
        return b ? (parseFloat(Fa(a, "marginLeft")) || a.getBoundingClientRect().left - Da(a, {
            marginLeft: 0
        }, function() {
            return a.getBoundingClientRect().left
        })) + "px" : void 0
    }),
    n.cssHooks.marginRight = Ga(l.reliableMarginRight, function(a, b) {
        return b ? Da(a, {
            display: "inline-block"
        }, Fa, [a, "marginRight"]) : void 0
    }),
    n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        n.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)
                    e[a + U[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        },
        Aa.test(a) || (n.cssHooks[a + b].set = Na)
    }),
    n.fn.extend({
        css: function(a, b) {
            return K(this, function(a, b, c) {
                var d, e, f = {}, g = 0;
                if (n.isArray(b)) {
                    for (d = Ca(a),
                    e = b.length; e > g; g++)
                        f[b[g]] = n.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return Qa(this, !0)
        },
        hide: function() {
            return Qa(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                V(this) ? n(this).show() : n(this).hide()
            })
        }
    });
    function Ra(a, b, c, d, e) {
        return new Ra.prototype.init(a,b,c,d,e)
    }
    n.Tween = Ra,
    Ra.prototype = {
        constructor: Ra,
        init: function(a, b, c, d, e, f) {
            this.elem = a,
            this.prop = c,
            this.easing = e || n.easing._default,
            this.options = b,
            this.start = this.now = this.cur(),
            this.end = d,
            this.unit = f || (n.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = Ra.propHooks[this.prop];
            return a && a.get ? a.get(this) : Ra.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = Ra.propHooks[this.prop];
            return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a,
            this.now = (this.end - this.start) * b + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            c && c.set ? c.set(this) : Ra.propHooks._default.set(this),
            this
        }
    },
    Ra.prototype.init.prototype = Ra.prototype,
    Ra.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""),
                b && "auto" !== b ? b : 0)
            },
            set: function(a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    },
    Ra.propHooks.scrollTop = Ra.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    },
    n.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    },
    n.fx = Ra.prototype.init,
    n.fx.step = {};
    var Sa, Ta, Ua = /^(?:toggle|show|hide)$/, Va = /queueHooks$/;
    function Wa() {
        return a.setTimeout(function() {
            Sa = void 0
        }),
        Sa = n.now()
    }
    function Xa(a, b) {
        var c, d = 0, e = {
            height: a
        };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b)
            c = U[d],
            e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a),
        e
    }
    function Ya(a, b, c) {
        for (var d, e = (_a.tweeners[b] || []).concat(_a.tweeners["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a))
                return d
    }
    function Za(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this, m = {}, o = a.style, p = a.nodeType && V(a), q = N.get(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"),
        null == h.unqueued && (h.unqueued = 0,
        i = h.empty.fire,
        h.empty.fire = function() {
            h.unqueued || i()
        }
        ),
        h.unqueued++,
        l.always(function() {
            l.always(function() {
                h.unqueued--,
                n.queue(a, "fx").length || h.empty.fire()
            })
        })),
        1 === a.nodeType && ("height"in b || "width"in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY],
        j = n.css(a, "display"),
        k = "none" === j ? N.get(a, "olddisplay") || za(a.nodeName) : j,
        "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")),
        c.overflow && (o.overflow = "hidden",
        l.always(function() {
            o.overflow = c.overflow[0],
            o.overflowX = c.overflow[1],
            o.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d],
            Ua.exec(e)) {
                if (delete b[d],
                f = f || "toggle" === e,
                e === (p ? "hide" : "show")) {
                    if ("show" !== e || !q || void 0 === q[d])
                        continue;
                    p = !0
                }
                m[d] = q && q[d] || n.style(a, d)
            } else
                j = void 0;
        if (n.isEmptyObject(m))
            "inline" === ("none" === j ? za(a.nodeName) : j) && (o.display = j);
        else {
            q ? "hidden"in q && (p = q.hidden) : q = N.access(a, "fxshow", {}),
            f && (q.hidden = !p),
            p ? n(a).show() : l.done(function() {
                n(a).hide()
            }),
            l.done(function() {
                var b;
                N.remove(a, "fxshow");
                for (b in m)
                    n.style(a, b, m[b])
            });
            for (d in m)
                g = Ya(p ? q[d] : 0, d, l),
                d in q || (q[d] = g.start,
                p && (g.end = g.start,
                g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }
    function $a(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = n.camelCase(c),
            e = b[d],
            f = a[c],
            n.isArray(f) && (e = f[1],
            f = a[c] = f[0]),
            c !== d && (a[d] = f,
            delete a[c]),
            g = n.cssHooks[d],
            g && "expand"in g) {
                f = g.expand(f),
                delete a[d];
                for (c in f)
                    c in a || (a[c] = f[c],
                    b[c] = e)
            } else
                b[d] = e
    }
    function _a(a, b, c) {
        var d, e, f = 0, g = _a.prefilters.length, h = n.Deferred().always(function() {
            delete i.elem
        }), i = function() {
            if (e)
                return !1;
            for (var b = Sa || Wa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)
                j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]),
            1 > f && i ? c : (h.resolveWith(a, [j]),
            !1)
        }, j = h.promise({
            elem: a,
            props: n.extend({}, b),
            opts: n.extend(!0, {
                specialEasing: {},
                easing: n.easing._default
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: Sa || Wa(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d),
                d
            },
            stop: function(b) {
                var c = 0
                  , d = b ? j.tweens.length : 0;
                if (e)
                    return this;
                for (e = !0; d > c; c++)
                    j.tweens[c].run(1);
                return b ? (h.notifyWith(a, [j, 1, 0]),
                h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]),
                this
            }
        }), k = j.props;
        for ($a(k, j.opts.specialEasing); g > f; f++)
            if (d = _a.prefilters[f].call(j, a, k, j.opts))
                return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)),
                d;
        return n.map(k, Ya, j),
        n.isFunction(j.opts.start) && j.opts.start.call(a, j),
        n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })),
        j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    n.Animation = n.extend(_a, {
        tweeners: {
            "*": [function(a, b) {
                var c = this.createTween(a, b);
                return W(c.elem, a, T.exec(b), c),
                c
            }
            ]
        },
        tweener: function(a, b) {
            n.isFunction(a) ? (b = a,
            a = ["*"]) : a = a.match(G);
            for (var c, d = 0, e = a.length; e > d; d++)
                c = a[d],
                _a.tweeners[c] = _a.tweeners[c] || [],
                _a.tweeners[c].unshift(b)
        },
        prefilters: [Za],
        prefilter: function(a, b) {
            b ? _a.prefilters.unshift(a) : _a.prefilters.push(a)
        }
    }),
    n.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? n.extend({}, a) : {
            complete: c || !c && b || n.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !n.isFunction(b) && b
        };
        return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default,
        null != d.queue && d.queue !== !0 || (d.queue = "fx"),
        d.old = d.complete,
        d.complete = function() {
            n.isFunction(d.old) && d.old.call(this),
            d.queue && n.dequeue(this, d.queue)
        }
        ,
        d
    }
    ,
    n.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(V).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, d) {
            var e = n.isEmptyObject(a)
              , f = n.speed(b, c, d)
              , g = function() {
                var b = _a(this, n.extend({}, a), f);
                (e || N.get(this, "finish")) && b.stop(!0)
            };
            return g.finish = g,
            e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop,
                b(c)
            };
            return "string" != typeof a && (c = b,
            b = a,
            a = void 0),
            b && a !== !1 && this.queue(a || "fx", []),
            this.each(function() {
                var b = !0
                  , e = null != a && a + "queueHooks"
                  , f = n.timers
                  , g = N.get(this);
                if (e)
                    g[e] && g[e].stop && d(g[e]);
                else
                    for (e in g)
                        g[e] && g[e].stop && Va.test(e) && d(g[e]);
                for (e = f.length; e--; )
                    f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c),
                    b = !1,
                    f.splice(e, 1));
                !b && c || n.dequeue(this, a)
            })
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"),
            this.each(function() {
                var b, c = N.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = n.timers, g = d ? d.length : 0;
                for (c.finish = !0,
                n.queue(this, a, []),
                e && e.stop && e.stop.call(this, !0),
                b = f.length; b--; )
                    f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0),
                    f.splice(b, 1));
                for (b = 0; g > b; b++)
                    d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }),
    n.each(["toggle", "show", "hide"], function(a, b) {
        var c = n.fn[b];
        n.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Xa(b, !0), a, d, e)
        }
    }),
    n.each({
        slideDown: Xa("show"),
        slideUp: Xa("hide"),
        slideToggle: Xa("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        n.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }),
    n.timers = [],
    n.fx.tick = function() {
        var a, b = 0, c = n.timers;
        for (Sa = n.now(); b < c.length; b++)
            a = c[b],
            a() || c[b] !== a || c.splice(b--, 1);
        c.length || n.fx.stop(),
        Sa = void 0
    }
    ,
    n.fx.timer = function(a) {
        n.timers.push(a),
        a() ? n.fx.start() : n.timers.pop()
    }
    ,
    n.fx.interval = 13,
    n.fx.start = function() {
        Ta || (Ta = a.setInterval(n.fx.tick, n.fx.interval))
    }
    ,
    n.fx.stop = function() {
        a.clearInterval(Ta),
        Ta = null
    }
    ,
    n.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    n.fn.delay = function(b, c) {
        return b = n.fx ? n.fx.speeds[b] || b : b,
        c = c || "fx",
        this.queue(c, function(c, d) {
            var e = a.setTimeout(c, b);
            d.stop = function() {
                a.clearTimeout(e)
            }
        })
    }
    ,
    function() {
        var a = d.createElement("input")
          , b = d.createElement("select")
          , c = b.appendChild(d.createElement("option"));
        a.type = "checkbox",
        l.checkOn = "" !== a.value,
        l.optSelected = c.selected,
        b.disabled = !0,
        l.optDisabled = !c.disabled,
        a = d.createElement("input"),
        a.value = "t",
        a.type = "radio",
        l.radioValue = "t" === a.value
    }();
    var ab, bb = n.expr.attrHandle;
    n.fn.extend({
        attr: function(a, b) {
            return K(this, n.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                n.removeAttr(this, a)
            })
        }
    }),
    n.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f)
                return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(),
                e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ab : void 0)),
                void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set"in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""),
                c) : e && "get"in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b),
                null == d ? void 0 : d))
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b),
                        c && (a.value = c),
                        b
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c, d, e = 0, f = b && b.match(G);
            if (f && 1 === a.nodeType)
                while (c = f[e++])
                    d = n.propFix[c] || c,
                    n.expr.match.bool.test(c) && (a[d] = !1),
                    a.removeAttribute(c)
        }
    }),
    ab = {
        set: function(a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c),
            c
        }
    },
    n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = bb[b] || n.find.attr;
        bb[b] = function(a, b, d) {
            var e, f;
            return d || (f = bb[b],
            bb[b] = e,
            e = null != c(a, b, d) ? b.toLowerCase() : null,
            bb[b] = f),
            e
        }
    });
    var cb = /^(?:input|select|textarea|button)$/i
      , db = /^(?:a|area)$/i;
    n.fn.extend({
        prop: function(a, b) {
            return K(this, n.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[n.propFix[a] || a]
            })
        }
    }),
    n.extend({
        prop: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f)
                return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b,
                e = n.propHooks[b]),
                void 0 !== c ? e && "set"in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get"in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = n.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : cb.test(a.nodeName) || db.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }),
    l.optSelected || (n.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex,
            null
        },
        set: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex,
            b.parentNode && b.parentNode.selectedIndex)
        }
    }),
    n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        n.propFix[this.toLowerCase()] = this
    });
    var eb = /[\t\r\n\f]/g;
    function fb(a) {
        return a.getAttribute && a.getAttribute("class") || ""
    }
    n.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a))
                return this.each(function(b) {
                    n(this).addClass(a.call(this, b, fb(this)))
                });
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++])
                    if (e = fb(c),
                    d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
                        g = 0;
                        while (f = b[g++])
                            d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        h = n.trim(d),
                        e !== h && c.setAttribute("class", h)
                    }
            }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a))
                return this.each(function(b) {
                    n(this).removeClass(a.call(this, b, fb(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++])
                    if (e = fb(c),
                    d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
                        g = 0;
                        while (f = b[g++])
                            while (d.indexOf(" " + f + " ") > -1)
                                d = d.replace(" " + f + " ", " ");
                        h = n.trim(d),
                        e !== h && c.setAttribute("class", h)
                    }
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function(c) {
                n(this).toggleClass(a.call(this, c, fb(this), b), b)
            }) : this.each(function() {
                var b, d, e, f;
                if ("string" === c) {
                    d = 0,
                    e = n(this),
                    f = a.match(G) || [];
                    while (b = f[d++])
                        e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else
                    void 0 !== a && "boolean" !== c || (b = fb(this),
                    b && N.set(this, "__className__", b),
                    this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : N.get(this, "__className__") || ""))
            })
        },
        hasClass: function(a) {
            var b, c, d = 0;
            b = " " + a + " ";
            while (c = this[d++])
                if (1 === c.nodeType && (" " + fb(c) + " ").replace(eb, " ").indexOf(b) > -1)
                    return !0;
            return !1
        }
    });
    var gb = /\r/g
      , hb = /[\x20\t\r\n\f]+/g;
    n.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length)
                    return d = n.isFunction(a),
                    this.each(function(c) {
                        var e;
                        1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a,
                        null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                            return null == a ? "" : a + ""
                        })),
                        b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()],
                        b && "set"in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                    });
                if (e)
                    return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()],
                    b && "get"in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value,
                    "string" == typeof c ? c.replace(gb, "") : null == c ? "" : c)
            }
        }
    }),
    n.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.trim(n.text(a)).replace(hb, " ")
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i],
                        (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
                            if (b = n(c).val(),
                            f)
                                return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    var c, d, e = a.options, f = n.makeArray(b), g = e.length;
                    while (g--)
                        d = e[g],
                        (d.selected = n.inArray(n.valHooks.option.get(d), f) > -1) && (c = !0);
                    return c || (a.selectedIndex = -1),
                    f
                }
            }
        }
    }),
    n.each(["radio", "checkbox"], function() {
        n.valHooks[this] = {
            set: function(a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0
            }
        },
        l.checkOn || (n.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        }
        )
    });
    var ib = /^(?:focusinfocus|focusoutblur)$/;
    n.extend(n.event, {
        trigger: function(b, c, e, f) {
            var g, h, i, j, l, m, o, p = [e || d], q = k.call(b, "type") ? b.type : b, r = k.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = i = e = e || d,
            3 !== e.nodeType && 8 !== e.nodeType && !ib.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."),
            q = r.shift(),
            r.sort()),
            l = q.indexOf(":") < 0 && "on" + q,
            b = b[n.expando] ? b : new n.Event(q,"object" == typeof b && b),
            b.isTrigger = f ? 2 : 3,
            b.namespace = r.join("."),
            b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            b.result = void 0,
            b.target || (b.target = e),
            c = null == c ? [b] : n.makeArray(c, [b]),
            o = n.event.special[q] || {},
            f || !o.trigger || o.trigger.apply(e, c) !== !1)) {
                if (!f && !o.noBubble && !n.isWindow(e)) {
                    for (j = o.delegateType || q,
                    ib.test(j + q) || (h = h.parentNode); h; h = h.parentNode)
                        p.push(h),
                        i = h;
                    i === (e.ownerDocument || d) && p.push(i.defaultView || i.parentWindow || a)
                }
                g = 0;
                while ((h = p[g++]) && !b.isPropagationStopped())
                    b.type = g > 1 ? j : o.bindType || q,
                    m = (N.get(h, "events") || {})[b.type] && N.get(h, "handle"),
                    m && m.apply(h, c),
                    m = l && h[l],
                    m && m.apply && L(h) && (b.result = m.apply(h, c),
                    b.result === !1 && b.preventDefault());
                return b.type = q,
                f || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !L(e) || l && n.isFunction(e[q]) && !n.isWindow(e) && (i = e[l],
                i && (e[l] = null),
                n.event.triggered = q,
                e[q](),
                n.event.triggered = void 0,
                i && (e[l] = i)),
                b.result
            }
        },
        simulate: function(a, b, c) {
            var d = n.extend(new n.Event, c, {
                type: a,
                isSimulated: !0
            });
            n.event.trigger(d, null, b)
        }
    }),
    n.fn.extend({
        trigger: function(a, b) {
            return this.each(function() {
                n.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }
    }),
    n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        n.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }),
    n.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }),
    l.focusin = "onfocusin"in a,
    l.focusin || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            n.event.simulate(b, a.target, n.event.fix(a))
        };
        n.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this
                  , e = N.access(d, b);
                e || d.addEventListener(a, c, !0),
                N.access(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this
                  , e = N.access(d, b) - 1;
                e ? N.access(d, b, e) : (d.removeEventListener(a, c, !0),
                N.remove(d, b))
            }
        }
    });
    var jb = a.location
      , kb = n.now()
      , lb = /\?/;
    n.parseJSON = function(a) {
        return JSON.parse(a + "")
    }
    ,
    n.parseXML = function(b) {
        var c;
        if (!b || "string" != typeof b)
            return null;
        try {
            c = (new a.DOMParser).parseFromString(b, "text/xml")
        } catch (d) {
            c = void 0
        }
        return c && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b),
        c
    }
    ;
    var mb = /#.*$/
      , nb = /([?&])_=[^&]*/
      , ob = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , pb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
      , qb = /^(?:GET|HEAD)$/
      , rb = /^\/\//
      , sb = {}
      , tb = {}
      , ub = "*/".concat("*")
      , vb = d.createElement("a");
    vb.href = jb.href;
    function wb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b,
            b = "*");
            var d, e = 0, f = b.toLowerCase().match(G) || [];
            if (n.isFunction(c))
                while (d = f[e++])
                    "+" === d[0] ? (d = d.slice(1) || "*",
                    (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }
    function xb(a, b, c, d) {
        var e = {}
          , f = a === tb;
        function g(h) {
            var i;
            return e[h] = !0,
            n.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j),
                g(j),
                !1)
            }),
            i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }
    function yb(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (c in b)
            void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && n.extend(!0, a, d),
        a
    }
    function zb(a, b, c) {
        var d, e, f, g, h = a.contents, i = a.dataTypes;
        while ("*" === i[0])
            i.shift(),
            void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                }
        if (i[0]in c)
            f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f),
        c[f]) : void 0
    }
    function Ab(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters)
                j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b),
            !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
            i = f,
            f = k.shift())
                if ("*" === f)
                    f = i;
                else if ("*" !== i && i !== f) {
                    if (g = j[i + " " + f] || j["* " + f],
                    !g)
                        for (e in j)
                            if (h = e.split(" "),
                            h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0],
                                k.unshift(h[1]));
                                break
                            }
                    if (g !== !0)
                        if (g && a["throws"])
                            b = g(b);
                        else
                            try {
                                b = g(b)
                            } catch (l) {
                                return {
                                    state: "parsererror",
                                    error: g ? l : "No conversion from " + i + " to " + f
                                }
                            }
                }
        return {
            state: "success",
            data: b
        }
    }
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: jb.href,
            type: "GET",
            isLocal: pb.test(jb.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": ub,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? yb(yb(a, n.ajaxSettings), b) : yb(n.ajaxSettings, a)
        },
        ajaxPrefilter: wb(sb),
        ajaxTransport: wb(tb),
        ajax: function(b, c) {
            "object" == typeof b && (c = b,
            b = void 0),
            c = c || {};
            var e, f, g, h, i, j, k, l, m = n.ajaxSetup({}, c), o = m.context || m, p = m.context && (o.nodeType || o.jquery) ? n(o) : n.event, q = n.Deferred(), r = n.Callbacks("once memory"), s = m.statusCode || {}, t = {}, u = {}, v = 0, w = "canceled", x = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (2 === v) {
                        if (!h) {
                            h = {};
                            while (b = ob.exec(g))
                                h[b[1].toLowerCase()] = b[2]
                        }
                        b = h[a.toLowerCase()]
                    }
                    return null == b ? null : b
                },
                getAllResponseHeaders: function() {
                    return 2 === v ? g : null
                },
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return v || (a = u[c] = u[c] || a,
                    t[a] = b),
                    this
                },
                overrideMimeType: function(a) {
                    return v || (m.mimeType = a),
                    this
                },
                statusCode: function(a) {
                    var b;
                    if (a)
                        if (2 > v)
                            for (b in a)
                                s[b] = [s[b], a[b]];
                        else
                            x.always(a[x.status]);
                    return this
                },
                abort: function(a) {
                    var b = a || w;
                    return e && e.abort(b),
                    z(0, b),
                    this
                }
            };
            if (q.promise(x).complete = r.add,
            x.success = x.done,
            x.error = x.fail,
            m.url = ((b || m.url || jb.href) + "").replace(mb, "").replace(rb, jb.protocol + "//"),
            m.type = c.method || c.type || m.method || m.type,
            m.dataTypes = n.trim(m.dataType || "*").toLowerCase().match(G) || [""],
            null == m.crossDomain) {
                j = d.createElement("a");
                try {
                    j.href = m.url,
                    j.href = j.href,
                    m.crossDomain = vb.protocol + "//" + vb.host != j.protocol + "//" + j.host
                } catch (y) {
                    m.crossDomain = !0
                }
            }
            if (m.data && m.processData && "string" != typeof m.data && (m.data = n.param(m.data, m.traditional)),
            xb(sb, m, c, x),
            2 === v)
                return x;
            k = n.event && m.global,
            k && 0 === n.active++ && n.event.trigger("ajaxStart"),
            m.type = m.type.toUpperCase(),
            m.hasContent = !qb.test(m.type),
            f = m.url,
            m.hasContent || (m.data && (f = m.url += (lb.test(f) ? "&" : "?") + m.data,
            delete m.data),
            m.cache === !1 && (m.url = nb.test(f) ? f.replace(nb, "$1_=" + kb++) : f + (lb.test(f) ? "&" : "?") + "_=" + kb++)),
            m.ifModified && (n.lastModified[f] && x.setRequestHeader("If-Modified-Since", n.lastModified[f]),
            n.etag[f] && x.setRequestHeader("If-None-Match", n.etag[f])),
            (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && x.setRequestHeader("Content-Type", m.contentType),
            x.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + ub + "; q=0.01" : "") : m.accepts["*"]);
            for (l in m.headers)
                x.setRequestHeader(l, m.headers[l]);
            if (m.beforeSend && (m.beforeSend.call(o, x, m) === !1 || 2 === v))
                return x.abort();
            w = "abort";
            for (l in {
                success: 1,
                error: 1,
                complete: 1
            })
                x[l](m[l]);
            if (e = xb(tb, m, c, x)) {
                if (x.readyState = 1,
                k && p.trigger("ajaxSend", [x, m]),
                2 === v)
                    return x;
                m.async && m.timeout > 0 && (i = a.setTimeout(function() {
                    x.abort("timeout")
                }, m.timeout));
                try {
                    v = 1,
                    e.send(t, z)
                } catch (y) {
                    if (!(2 > v))
                        throw y;
                    z(-1, y)
                }
            } else
                z(-1, "No Transport");
            function z(b, c, d, h) {
                var j, l, t, u, w, y = c;
                2 !== v && (v = 2,
                i && a.clearTimeout(i),
                e = void 0,
                g = h || "",
                x.readyState = b > 0 ? 4 : 0,
                j = b >= 200 && 300 > b || 304 === b,
                d && (u = zb(m, x, d)),
                u = Ab(m, u, x, j),
                j ? (m.ifModified && (w = x.getResponseHeader("Last-Modified"),
                w && (n.lastModified[f] = w),
                w = x.getResponseHeader("etag"),
                w && (n.etag[f] = w)),
                204 === b || "HEAD" === m.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = u.state,
                l = u.data,
                t = u.error,
                j = !t)) : (t = y,
                !b && y || (y = "error",
                0 > b && (b = 0))),
                x.status = b,
                x.statusText = (c || y) + "",
                j ? q.resolveWith(o, [l, y, x]) : q.rejectWith(o, [x, y, t]),
                x.statusCode(s),
                s = void 0,
                k && p.trigger(j ? "ajaxSuccess" : "ajaxError", [x, m, j ? l : t]),
                r.fireWith(o, [x, y]),
                k && (p.trigger("ajaxComplete", [x, m]),
                --n.active || n.event.trigger("ajaxStop")))
            }
            return x
        },
        getJSON: function(a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return n.get(a, void 0, b, "script")
        }
    }),
    n.each(["get", "post"], function(a, b) {
        n[b] = function(a, c, d, e) {
            return n.isFunction(c) && (e = e || d,
            d = c,
            c = void 0),
            n.ajax(n.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, n.isPlainObject(a) && a))
        }
    }),
    n._evalUrl = function(a) {
        return n.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }
    ,
    n.fn.extend({
        wrapAll: function(a) {
            var b;
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && b.insertBefore(this[0]),
            b.map(function() {
                var a = this;
                while (a.firstElementChild)
                    a = a.firstElementChild;
                return a
            }).append(this)),
            this)
        },
        wrapInner: function(a) {
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = n(this)
                  , c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = n.isFunction(a);
            return this.each(function(c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    n.expr.filters.hidden = function(a) {
        return !n.expr.filters.visible(a)
    }
    ,
    n.expr.filters.visible = function(a) {
        return a.offsetWidth > 0 || a.offsetHeight > 0 || a.getClientRects().length > 0
    }
    ;
    var Bb = /%20/g
      , Cb = /\[\]$/
      , Db = /\r?\n/g
      , Eb = /^(?:submit|button|image|reset|file)$/i
      , Fb = /^(?:input|select|textarea|keygen)/i;
    function Gb(a, b, c, d) {
        var e;
        if (n.isArray(b))
            n.each(b, function(b, e) {
                c || Cb.test(a) ? d(a, e) : Gb(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
            });
        else if (c || "object" !== n.type(b))
            d(a, b);
        else
            for (e in b)
                Gb(a + "[" + e + "]", b[e], c, d)
    }
    n.param = function(a, b) {
        var c, d = [], e = function(a, b) {
            b = n.isFunction(b) ? b() : null == b ? "" : b,
            d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional),
        n.isArray(a) || a.jquery && !n.isPlainObject(a))
            n.each(a, function() {
                e(this.name, this.value)
            });
        else
            for (c in a)
                Gb(c, a[c], b, e);
        return d.join("&").replace(Bb, "+")
    }
    ,
    n.fn.extend({
        serialize: function() {
            return n.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && Fb.test(this.nodeName) && !Eb.test(a) && (this.checked || !X.test(a))
            }).map(function(a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Db, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Db, "\r\n")
                }
            }).get()
        }
    }),
    n.ajaxSettings.xhr = function() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }
    ;
    var Hb = {
        0: 200,
        1223: 204
    }
      , Ib = n.ajaxSettings.xhr();
    l.cors = !!Ib && "withCredentials"in Ib,
    l.ajax = Ib = !!Ib,
    n.ajaxTransport(function(b) {
        var c, d;
        return l.cors || Ib && !b.crossDomain ? {
            send: function(e, f) {
                var g, h = b.xhr();
                if (h.open(b.type, b.url, b.async, b.username, b.password),
                b.xhrFields)
                    for (g in b.xhrFields)
                        h[g] = b.xhrFields[g];
                b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType),
                b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                for (g in e)
                    h.setRequestHeader(g, e[g]);
                c = function(a) {
                    return function() {
                        c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null,
                        "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Hb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
                            binary: h.response
                        } : {
                            text: h.responseText
                        }, h.getAllResponseHeaders()))
                    }
                }
                ,
                h.onload = c(),
                d = h.onerror = c("error"),
                void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function() {
                    4 === h.readyState && a.setTimeout(function() {
                        c && d()
                    })
                }
                ,
                c = c("abort");
                try {
                    h.send(b.hasContent && b.data || null)
                } catch (i) {
                    if (c)
                        throw i
                }
            },
            abort: function() {
                c && c()
            }
        } : void 0
    }),
    n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                return n.globalEval(a),
                a
            }
        }
    }),
    n.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1),
        a.crossDomain && (a.type = "GET")
    }),
    n.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(e, f) {
                    b = n("<script>").prop({
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(),
                        c = null,
                        a && f("error" === a.type ? 404 : 200, a.type)
                    }
                    ),
                    d.head.appendChild(b[0])
                },
                abort: function() {
                    c && c()
                }
            }
        }
    });
    var Jb = []
      , Kb = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Jb.pop() || n.expando + "_" + kb++;
            return this[a] = !0,
            a
        }
    }),
    n.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Kb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Kb.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
        h ? b[h] = b[h].replace(Kb, "$1" + e) : b.jsonp !== !1 && (b.url += (lb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
        b.converters["script json"] = function() {
            return g || n.error(e + " was not called"),
            g[0]
        }
        ,
        b.dataTypes[0] = "json",
        f = a[e],
        a[e] = function() {
            g = arguments
        }
        ,
        d.always(function() {
            void 0 === f ? n(a).removeProp(e) : a[e] = f,
            b[e] && (b.jsonpCallback = c.jsonpCallback,
            Jb.push(e)),
            g && n.isFunction(f) && f(g[0]),
            g = f = void 0
        }),
        "script") : void 0
    }),
    n.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a)
            return null;
        "boolean" == typeof b && (c = b,
        b = !1),
        b = b || d;
        var e = x.exec(a)
          , f = !c && [];
        return e ? [b.createElement(e[1])] : (e = ca([a], b, f),
        f && f.length && n(f).remove(),
        n.merge([], e.childNodes))
    }
    ;
    var Lb = n.fn.load;
    n.fn.load = function(a, b, c) {
        if ("string" != typeof a && Lb)
            return Lb.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h > -1 && (d = n.trim(a.slice(h)),
        a = a.slice(0, h)),
        n.isFunction(b) ? (c = b,
        b = void 0) : b && "object" == typeof b && (e = "POST"),
        g.length > 0 && n.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments,
            g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).always(c && function(a, b) {
            g.each(function() {
                c.apply(this, f || [a.responseText, b, a])
            })
        }
        ),
        this
    }
    ,
    n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        n.fn[b] = function(a) {
            return this.on(b, a)
        }
    }),
    n.expr.filters.animated = function(a) {
        return n.grep(n.timers, function(b) {
            return a === b.elem
        }).length
    }
    ;
    function Mb(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    n.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"), l = n(a), m = {};
            "static" === k && (a.style.position = "relative"),
            h = l.offset(),
            f = n.css(a, "top"),
            i = n.css(a, "left"),
            j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1,
            j ? (d = l.position(),
            g = d.top,
            e = d.left) : (g = parseFloat(f) || 0,
            e = parseFloat(i) || 0),
            n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))),
            null != b.top && (m.top = b.top - h.top + g),
            null != b.left && (m.left = b.left - h.left + e),
            "using"in b ? b.using.call(a, m) : l.css(m)
        }
    },
    n.fn.extend({
        offset: function(a) {
            if (arguments.length)
                return void 0 === a ? this : this.each(function(b) {
                    n.offset.setOffset(this, a, b)
                });
            var b, c, d = this[0], e = {
                top: 0,
                left: 0
            }, f = d && d.ownerDocument;
            if (f)
                return b = f.documentElement,
                n.contains(b, d) ? (e = d.getBoundingClientRect(),
                c = Mb(f),
                {
                    top: e.top + c.pageYOffset - b.clientTop,
                    left: e.left + c.pageXOffset - b.clientLeft
                }) : e
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0], d = {
                    top: 0,
                    left: 0
                };
                return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(),
                b = this.offset(),
                n.nodeName(a[0], "html") || (d = a.offset()),
                d.top += n.css(a[0], "borderTopWidth", !0),
                d.left += n.css(a[0], "borderLeftWidth", !0)),
                {
                    top: b.top - d.top - n.css(c, "marginTop", !0),
                    left: b.left - d.left - n.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent;
                while (a && "static" === n.css(a, "position"))
                    a = a.offsetParent;
                return a || Ea
            })
        }
    }),
    n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = "pageYOffset" === b;
        n.fn[a] = function(d) {
            return K(this, function(a, d, e) {
                var f = Mb(a);
                return void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e)
            }, a, d, arguments.length)
        }
    }),
    n.each(["top", "left"], function(a, b) {
        n.cssHooks[b] = Ga(l.pixelPosition, function(a, c) {
            return c ? (c = Fa(a, b),
            Ba.test(c) ? n(a).position()[b] + "px" : c) : void 0
        })
    }),
    n.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            n.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d)
                  , g = c || (d === !0 || e === !0 ? "margin" : "border");
                return K(this, function(b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement,
                    Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }),
    n.fn.extend({
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        },
        size: function() {
            return this.length
        }
    }),
    n.fn.andSelf = n.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return n
    });
    var Nb = a.jQuery
      , Ob = a.$;
    return n.noConflict = function(b) {
        return a.$ === n && (a.$ = Ob),
        b && a.jQuery === n && (a.jQuery = Nb),
        n
    }
    ,
    b || (a.jQuery = a.$ = n),
    n
});
function thumbs_rating_vote(ID, type) {
    var itemName = "thumbsrating" + ID;
    var container = '#thumbs-rating-' + ID;
    if (!localStorage.getItem(itemName)) {
        localStorage.setItem(itemName, true);
        var typeItemName = "thumbsrating" + ID + "-" + type;
        localStorage.setItem(typeItemName, true);
        var data = {
            action: 'thumbs_rating_add_vote',
            postid: ID,
            type: type,
            nonce: thumbs_rating_ajax.nonce
        };
        jQuery.post(thumbs_rating_ajax.ajax_url, data, function(response) {
            var object = jQuery(container);
            jQuery(container).html('');
            jQuery(container).append(response);
            jQuery(object).removeClass('thumbs-rating-container');
            jQuery(object).attr('id', '');
            var new_container = '#thumbs-rating-' + ID;
            if (type == 1) {
                thumbs_rating_class = ".thumbs-rating-up";
            } else {
                thumbs_rating_class = ".thumbs-rating-down";
            }
            jQuery(new_container + thumbs_rating_class).addClass('thumbs-rating-voted');
        });
    } else {
        jQuery('#thumbs-rating-' + ID + ' .thumbs-rating-already-voted').fadeIn().addClass('is-active');
    }
}
;var SF_LDATA = {
    "ajax_url": "http:\/\/termoklinker.pro\/wp-admin\/admin-ajax.php",
    "home_url": "http:\/\/termoklinker.pro\/"
};
!function t(e, r, a) {
    function n(s, o) {
        if (!r[s]) {
            if (!e[s]) {
                var l = "function" == typeof require && require;
                if (!o && l)
                    return l(s, !0);
                if (i)
                    return i(s, !0);
                var u = new Error("Cannot find module '" + s + "'");
                throw u.code = "MODULE_NOT_FOUND",
                u
            }
            var c = r[s] = {
                exports: {}
            };
            e[s][0].call(c.exports, function(t) {
                var r = e[s][1][t];
                return n(r ? r : t)
            }, c, c.exports, t, e, r, a)
        }
        return r[s].exports
    }
    for (var i = "function" == typeof require && require, s = 0; s < a.length; s++)
        n(a[s]);
    return n
}({
    1: [function(t, e, r) {
        var a = (t("./includes/fields"),
        t("./includes/pagination"),
        t("./includes/state"))
          , n = t("./includes/plugin");
        !function(t) {
            "use strict";
            t(function() {
                String.prototype.replaceAll = function(t, e, r) {
                    return this.replace(new RegExp(t.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g, "\\$&"),r ? "gi" : "g"), "string" == typeof e ? e.replace(/\$/g, "$$$$") : e)
                }
                ,
                Object.keys || (Object.keys = function() {
                    var t = Object.prototype.hasOwnProperty
                      , e = !{
                        toString: null
                    }.propertyIsEnumerable("toString")
                      , r = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"]
                      , a = r.length;
                    return function(n) {
                        if ("object" != typeof n && ("function" != typeof n || null === n))
                            throw new TypeError("Object.keys called on non-object");
                        var i, s, o = [];
                        for (i in n)
                            t.call(n, i) && o.push(i);
                        if (e)
                            for (s = 0; s < a; s++)
                                t.call(n, r[s]) && o.push(r[s]);
                        return o
                    }
                }()),
                t.fn.searchAndFilter = n,
                t(".searchandfilter").searchAndFilter(),
                t(document).on("click", ".search-filter-reset", function(e) {
                    e.preventDefault();
                    var r = "undefined" != typeof t(this).attr("data-search-form-id") ? t(this).attr("data-search-form-id") : ""
                      , n = "undefined" != typeof t(this).attr("data-sf-submit-form") ? t(this).attr("data-sf-submit-form") : "";
                    return a.getSearchForm(r).reset(n),
                    !1
                })
            }),
            t.easing.jswing = t.easing.swing,
            t.extend(t.easing, {
                def: "easeOutQuad",
                swing: function(e, r, a, n, i) {
                    return t.easing[t.easing.def](e, r, a, n, i)
                },
                easeInQuad: function(t, e, r, a, n) {
                    return a * (e /= n) * e + r
                },
                easeOutQuad: function(t, e, r, a, n) {
                    return -a * (e /= n) * (e - 2) + r
                },
                easeInOutQuad: function(t, e, r, a, n) {
                    return (e /= n / 2) < 1 ? a / 2 * e * e + r : -a / 2 * (--e * (e - 2) - 1) + r
                },
                easeInCubic: function(t, e, r, a, n) {
                    return a * (e /= n) * e * e + r
                },
                easeOutCubic: function(t, e, r, a, n) {
                    return a * ((e = e / n - 1) * e * e + 1) + r
                },
                easeInOutCubic: function(t, e, r, a, n) {
                    return (e /= n / 2) < 1 ? a / 2 * e * e * e + r : a / 2 * ((e -= 2) * e * e + 2) + r
                },
                easeInQuart: function(t, e, r, a, n) {
                    return a * (e /= n) * e * e * e + r
                },
                easeOutQuart: function(t, e, r, a, n) {
                    return -a * ((e = e / n - 1) * e * e * e - 1) + r
                },
                easeInOutQuart: function(t, e, r, a, n) {
                    return (e /= n / 2) < 1 ? a / 2 * e * e * e * e + r : -a / 2 * ((e -= 2) * e * e * e - 2) + r
                },
                easeInQuint: function(t, e, r, a, n) {
                    return a * (e /= n) * e * e * e * e + r
                },
                easeOutQuint: function(t, e, r, a, n) {
                    return a * ((e = e / n - 1) * e * e * e * e + 1) + r
                },
                easeInOutQuint: function(t, e, r, a, n) {
                    return (e /= n / 2) < 1 ? a / 2 * e * e * e * e * e + r : a / 2 * ((e -= 2) * e * e * e * e + 2) + r
                },
                easeInSine: function(t, e, r, a, n) {
                    return -a * Math.cos(e / n * (Math.PI / 2)) + a + r
                },
                easeOutSine: function(t, e, r, a, n) {
                    return a * Math.sin(e / n * (Math.PI / 2)) + r
                },
                easeInOutSine: function(t, e, r, a, n) {
                    return -a / 2 * (Math.cos(Math.PI * e / n) - 1) + r
                },
                easeInExpo: function(t, e, r, a, n) {
                    return 0 == e ? r : a * Math.pow(2, 10 * (e / n - 1)) + r
                },
                easeOutExpo: function(t, e, r, a, n) {
                    return e == n ? r + a : a * (-Math.pow(2, -10 * e / n) + 1) + r
                },
                easeInOutExpo: function(t, e, r, a, n) {
                    return 0 == e ? r : e == n ? r + a : (e /= n / 2) < 1 ? a / 2 * Math.pow(2, 10 * (e - 1)) + r : a / 2 * (-Math.pow(2, -10 * --e) + 2) + r
                },
                easeInCirc: function(t, e, r, a, n) {
                    return -a * (Math.sqrt(1 - (e /= n) * e) - 1) + r
                },
                easeOutCirc: function(t, e, r, a, n) {
                    return a * Math.sqrt(1 - (e = e / n - 1) * e) + r
                },
                easeInOutCirc: function(t, e, r, a, n) {
                    return (e /= n / 2) < 1 ? -a / 2 * (Math.sqrt(1 - e * e) - 1) + r : a / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + r
                },
                easeInElastic: function(t, e, r, a, n) {
                    var i = 1.70158
                      , s = 0
                      , o = a;
                    if (0 == e)
                        return r;
                    if (1 == (e /= n))
                        return r + a;
                    if (s || (s = .3 * n),
                    o < Math.abs(a)) {
                        o = a;
                        var i = s / 4
                    } else
                        var i = s / (2 * Math.PI) * Math.asin(a / o);
                    return -(o * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * n - i) * Math.PI / s)) + r
                },
                easeOutElastic: function(t, e, r, a, n) {
                    var i = 1.70158
                      , s = 0
                      , o = a;
                    if (0 == e)
                        return r;
                    if (1 == (e /= n))
                        return r + a;
                    if (s || (s = .3 * n),
                    o < Math.abs(a)) {
                        o = a;
                        var i = s / 4
                    } else
                        var i = s / (2 * Math.PI) * Math.asin(a / o);
                    return o * Math.pow(2, -10 * e) * Math.sin(2 * (e * n - i) * Math.PI / s) + a + r
                },
                easeInOutElastic: function(t, e, r, a, n) {
                    var i = 1.70158
                      , s = 0
                      , o = a;
                    if (0 == e)
                        return r;
                    if (2 == (e /= n / 2))
                        return r + a;
                    if (s || (s = .3 * n * 1.5),
                    o < Math.abs(a)) {
                        o = a;
                        var i = s / 4
                    } else
                        var i = s / (2 * Math.PI) * Math.asin(a / o);
                    return e < 1 ? -.5 * o * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * n - i) * Math.PI / s) + r : o * Math.pow(2, -10 * (e -= 1)) * Math.sin(2 * (e * n - i) * Math.PI / s) * .5 + a + r
                },
                easeInBack: function(t, e, r, a, n, i) {
                    return void 0 == i && (i = 1.70158),
                    a * (e /= n) * e * ((i + 1) * e - i) + r
                },
                easeOutBack: function(t, e, r, a, n, i) {
                    return void 0 == i && (i = 1.70158),
                    a * ((e = e / n - 1) * e * ((i + 1) * e + i) + 1) + r
                },
                easeInOutBack: function(t, e, r, a, n, i) {
                    return void 0 == i && (i = 1.70158),
                    (e /= n / 2) < 1 ? a / 2 * e * e * (((i *= 1.525) + 1) * e - i) + r : a / 2 * ((e -= 2) * e * (((i *= 1.525) + 1) * e + i) + 2) + r
                },
                easeInBounce: function(e, r, a, n, i) {
                    return n - t.easing.easeOutBounce(e, i - r, 0, n, i) + a
                },
                easeOutBounce: function(t, e, r, a, n) {
                    return (e /= n) < 1 / 2.75 ? 7.5625 * a * e * e + r : e < 2 / 2.75 ? a * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + r : e < 2.5 / 2.75 ? a * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + r : a * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + r
                },
                easeInOutBounce: function(e, r, a, n, i) {
                    return r < i / 2 ? .5 * t.easing.easeInBounce(e, 2 * r, 0, n, i) + a : .5 * t.easing.easeOutBounce(e, 2 * r - i, 0, n, i) + .5 * n + a
                }
            })
        }(jQuery),
        !function() {
            "use strict";
            function t(t) {
                return t.split("").reverse().join("")
            }
            function e(t, e) {
                return t.substring(0, e.length) === e
            }
            function r(t, e) {
                return t.slice(-1 * e.length) === e
            }
            function a(t, e, r) {
                if ((t[e] || t[r]) && t[e] === t[r])
                    throw new Error(e)
            }
            function n(t) {
                return "number" == typeof t && isFinite(t)
            }
            function i(t, e) {
                var r = Math.pow(10, e);
                return (Math.round(t * r) / r).toFixed(e)
            }
            function s(e, r, a, s, o, l, u, c, f, d, p, h) {
                var m, _, g, v = h, x = "", y = "";
                return l && (h = l(h)),
                !!n(h) && (e !== !1 && 0 === parseFloat(h.toFixed(e)) && (h = 0),
                0 > h && (m = !0,
                h = Math.abs(h)),
                e !== !1 && (h = i(h, e)),
                h = h.toString(),
                -1 !== h.indexOf(".") ? (_ = h.split("."),
                g = _[0],
                a && (x = a + _[1])) : g = h,
                r && (g = t(g).match(/.{1,3}/g),
                g = t(g.join(t(r)))),
                m && c && (y += c),
                s && (y += s),
                m && f && (y += f),
                y += g,
                y += x,
                o && (y += o),
                d && (y = d(y, v)),
                y)
            }
            function o(t, a, i, s, o, l, u, c, f, d, p, h) {
                var m, _ = "";
                return p && (h = p(h)),
                !(!h || "string" != typeof h) && (c && e(h, c) && (h = h.replace(c, ""),
                m = !0),
                s && e(h, s) && (h = h.replace(s, "")),
                f && e(h, f) && (h = h.replace(f, ""),
                m = !0),
                o && r(h, o) && (h = h.slice(0, -1 * o.length)),
                a && (h = h.split(a).join("")),
                i && (h = h.replace(i, ".")),
                m && (_ += "-"),
                _ += h,
                _ = _.replace(/[^0-9\.\-.]/g, ""),
                "" !== _ && (_ = Number(_),
                u && (_ = u(_)),
                !!n(_) && _))
            }
            function l(t) {
                var e, r, n, i = {};
                for (e = 0; e < f.length; e += 1)
                    if (r = f[e],
                    n = t[r],
                    void 0 === n)
                        "negative" !== r || i.negativeBefore ? "mark" === r && "." !== i.thousand ? i[r] = "." : i[r] = !1 : i[r] = "-";
                    else if ("decimals" === r) {
                        if (!(n >= 0 && 8 > n))
                            throw new Error(r);
                        i[r] = n
                    } else if ("encoder" === r || "decoder" === r || "edit" === r || "undo" === r) {
                        if ("function" != typeof n)
                            throw new Error(r);
                        i[r] = n
                    } else {
                        if ("string" != typeof n)
                            throw new Error(r);
                        i[r] = n
                    }
                return a(i, "mark", "thousand"),
                a(i, "prefix", "negative"),
                a(i, "prefix", "negativeBefore"),
                i
            }
            function u(t, e, r) {
                var a, n = [];
                for (a = 0; a < f.length; a += 1)
                    n.push(t[f[a]]);
                return n.push(r),
                e.apply("", n)
            }
            function c(t) {
                return this instanceof c ? void ("object" == typeof t && (t = l(t),
                this.to = function(e) {
                    return u(t, s, e)
                }
                ,
                this.from = function(e) {
                    return u(t, o, e)
                }
                )) : new c(t)
            }
            var f = ["decimals", "thousand", "mark", "prefix", "postfix", "encoder", "decoder", "negativeBefore", "negative", "edit", "undo"];
            window.wNumb = c
        }()
    }
    , {
        "./includes/fields": 4,
        "./includes/pagination": 5,
        "./includes/plugin": 6,
        "./includes/state": 8
    }],
    2: [function(t, e, r) {
        !function(t) {
            var a = !1;
            if ("function" == typeof define && define.amd && (define(t),
            a = !0),
            "object" == typeof r && (e.exports = t(),
            a = !0),
            !a) {
                var n = window.Cookies
                  , i = window.Cookies = t();
                i.noConflict = function() {
                    return window.Cookies = n,
                    i
                }
            }
        }(function() {
            function t() {
                for (var t = 0, e = {}; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var a in r)
                        e[a] = r[a]
                }
                return e
            }
            function e(r) {
                function a(e, n, i) {
                    var s;
                    if ("undefined" != typeof document) {
                        if (arguments.length > 1) {
                            if (i = t({
                                path: "/"
                            }, a.defaults, i),
                            "number" == typeof i.expires) {
                                var o = new Date;
                                o.setMilliseconds(o.getMilliseconds() + 864e5 * i.expires),
                                i.expires = o
                            }
                            i.expires = i.expires ? i.expires.toUTCString() : "";
                            try {
                                s = JSON.stringify(n),
                                /^[\{\[]/.test(s) && (n = s)
                            } catch (l) {}
                            n = r.write ? r.write(n, e) : encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent),
                            e = encodeURIComponent(String(e)),
                            e = e.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent),
                            e = e.replace(/[\(\)]/g, escape);
                            var u = "";
                            for (var c in i)
                                i[c] && (u += "; " + c,
                                i[c] !== !0 && (u += "=" + i[c]));
                            return document.cookie = e + "=" + n + u
                        }
                        e || (s = {});
                        for (var f = document.cookie ? document.cookie.split("; ") : [], d = /(%[0-9A-Z]{2})+/g, p = 0; p < f.length; p++) {
                            var h = f[p].split("=")
                              , m = h.slice(1).join("=");
                            this.json || '"' !== m.charAt(0) || (m = m.slice(1, -1));
                            try {
                                var _ = h[0].replace(d, decodeURIComponent);
                                if (m = r.read ? r.read(m, _) : r(m, _) || m.replace(d, decodeURIComponent),
                                this.json)
                                    try {
                                        m = JSON.parse(m)
                                    } catch (l) {}
                                if (e === _) {
                                    s = m;
                                    break
                                }
                                e || (s[_] = m)
                            } catch (l) {}
                        }
                        return s
                    }
                }
                return a.set = a,
                a.get = function(t) {
                    return a.call(a, t)
                }
                ,
                a.getJSON = function() {
                    return a.apply({
                        json: !0
                    }, [].slice.call(arguments))
                }
                ,
                a.defaults = {},
                a.remove = function(e, r) {
                    a(e, "", t(r, {
                        expires: -1
                    }))
                }
                ,
                a.withConverter = e,
                a
            }
            return e(function() {})
        })
    }
    , {}],
    3: [function(t, e, r) {
        !function(t) {
            "function" == typeof define && define.amd ? define([], t) : "object" == typeof r ? e.exports = t() : window.noUiSlider = t()
        }(function() {
            "use strict";
            function t(t) {
                return "object" == typeof t && "function" == typeof t.to && "function" == typeof t.from
            }
            function e(t) {
                t.parentElement.removeChild(t)
            }
            function r(t) {
                return null !== t && void 0 !== t
            }
            function a(t) {
                t.preventDefault()
            }
            function n(t) {
                return t.filter(function(t) {
                    return !this[t] && (this[t] = !0)
                }, {})
            }
            function i(t, e) {
                return Math.round(t / e) * e
            }
            function s(t, e) {
                var r = t.getBoundingClientRect()
                  , a = t.ownerDocument
                  , n = a.documentElement
                  , i = m(a);
                return /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (i.x = 0),
                e ? r.top + i.y - n.clientTop : r.left + i.x - n.clientLeft
            }
            function o(t) {
                return "number" == typeof t && !isNaN(t) && isFinite(t)
            }
            function l(t, e, r) {
                r > 0 && (d(t, e),
                setTimeout(function() {
                    p(t, e)
                }, r))
            }
            function u(t) {
                return Math.max(Math.min(t, 100), 0)
            }
            function c(t) {
                return Array.isArray(t) ? t : [t]
            }
            function f(t) {
                t = String(t);
                var e = t.split(".");
                return e.length > 1 ? e[1].length : 0
            }
            function d(t, e) {
                t.classList ? t.classList.add(e) : t.className += " " + e
            }
            function p(t, e) {
                t.classList ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)","gi"), " ")
            }
            function h(t, e) {
                return t.classList ? t.classList.contains(e) : new RegExp("\\b" + e + "\\b").test(t.className)
            }
            function m(t) {
                var e = void 0 !== window.pageXOffset
                  , r = "CSS1Compat" === (t.compatMode || "")
                  , a = e ? window.pageXOffset : r ? t.documentElement.scrollLeft : t.body.scrollLeft
                  , n = e ? window.pageYOffset : r ? t.documentElement.scrollTop : t.body.scrollTop;
                return {
                    x: a,
                    y: n
                }
            }
            function _() {
                return window.navigator.pointerEnabled ? {
                    start: "pointerdown",
                    move: "pointermove",
                    end: "pointerup"
                } : window.navigator.msPointerEnabled ? {
                    start: "MSPointerDown",
                    move: "MSPointerMove",
                    end: "MSPointerUp"
                } : {
                    start: "mousedown touchstart",
                    move: "mousemove touchmove",
                    end: "mouseup touchend"
                }
            }
            function g() {
                var t = !1;
                try {
                    var e = Object.defineProperty({}, "passive", {
                        get: function() {
                            t = !0
                        }
                    });
                    window.addEventListener("test", null, e)
                } catch (r) {}
                return t
            }
            function v() {
                return window.CSS && CSS.supports && CSS.supports("touch-action", "none")
            }
            function x(t, e) {
                return 100 / (e - t)
            }
            function y(t, e) {
                return 100 * e / (t[1] - t[0])
            }
            function b(t, e) {
                return y(t, t[0] < 0 ? e + Math.abs(t[0]) : e - t[0])
            }
            function w(t, e) {
                return e * (t[1] - t[0]) / 100 + t[0]
            }
            function j(t, e) {
                for (var r = 1; t >= e[r]; )
                    r += 1;
                return r
            }
            function S(t, e, r) {
                if (r >= t.slice(-1)[0])
                    return 100;
                var a = j(r, t)
                  , n = t[a - 1]
                  , i = t[a]
                  , s = e[a - 1]
                  , o = e[a];
                return s + b([n, i], r) / x(s, o)
            }
            function C(t, e, r) {
                if (r >= 100)
                    return t.slice(-1)[0];
                var a = j(r, e)
                  , n = t[a - 1]
                  , i = t[a]
                  , s = e[a - 1]
                  , o = e[a];
                return w([n, i], (r - s) * x(s, o))
            }
            function U(t, e, r, a) {
                if (100 === a)
                    return a;
                var n = j(a, t)
                  , s = t[n - 1]
                  , o = t[n];
                return r ? a - s > (o - s) / 2 ? o : s : e[n - 1] ? t[n - 1] + i(a - t[n - 1], e[n - 1]) : a
            }
            function P(t, e, r) {
                var a;
                if ("number" == typeof e && (e = [e]),
                !Array.isArray(e))
                    throw new Error("noUiSlider (" + G + "): 'range' contains invalid value.");
                if (a = "min" === t ? 0 : "max" === t ? 100 : parseFloat(t),
                !o(a) || !o(e[0]))
                    throw new Error("noUiSlider (" + G + "): 'range' value isn't numeric.");
                r.xPct.push(a),
                r.xVal.push(e[0]),
                a ? r.xSteps.push(!isNaN(e[1]) && e[1]) : isNaN(e[1]) || (r.xSteps[0] = e[1]),
                r.xHighestCompleteStep.push(0)
            }
            function E(t, e, r) {
                if (!e)
                    return !0;
                r.xSteps[t] = y([r.xVal[t], r.xVal[t + 1]], e) / x(r.xPct[t], r.xPct[t + 1]);
                var a = (r.xVal[t + 1] - r.xVal[t]) / r.xNumSteps[t]
                  , n = Math.ceil(Number(a.toFixed(3)) - 1)
                  , i = r.xVal[t] + r.xNumSteps[t] * n;
                r.xHighestCompleteStep[t] = i
            }
            function k(t, e, r) {
                this.xPct = [],
                this.xVal = [],
                this.xSteps = [r || !1],
                this.xNumSteps = [!1],
                this.xHighestCompleteStep = [],
                this.snap = e;
                var a, n = [];
                for (a in t)
                    t.hasOwnProperty(a) && n.push([t[a], a]);
                for (n.length && "object" == typeof n[0][0] ? n.sort(function(t, e) {
                    return t[0][0] - e[0][0]
                }) : n.sort(function(t, e) {
                    return t[0] - e[0]
                }),
                a = 0; a < n.length; a++)
                    P(n[a][1], n[a][0], this);
                for (this.xNumSteps = this.xSteps.slice(0),
                a = 0; a < this.xNumSteps.length; a++)
                    E(a, this.xNumSteps[a], this)
            }
            function A(e) {
                if (t(e))
                    return !0;
                throw new Error("noUiSlider (" + G + "): 'format' requires 'to' and 'from' methods.")
            }
            function M(t, e) {
                if (!o(e))
                    throw new Error("noUiSlider (" + G + "): 'step' is not numeric.");
                t.singleStep = e
            }
            function F(t, e) {
                if ("object" != typeof e || Array.isArray(e))
                    throw new Error("noUiSlider (" + G + "): 'range' is not an object.");
                if (void 0 === e.min || void 0 === e.max)
                    throw new Error("noUiSlider (" + G + "): Missing 'min' or 'max' in 'range'.");
                if (e.min === e.max)
                    throw new Error("noUiSlider (" + G + "): 'range' 'min' and 'max' cannot be equal.");
                t.spectrum = new k(e,t.snap,t.singleStep)
            }
            function O(t, e) {
                if (e = c(e),
                !Array.isArray(e) || !e.length)
                    throw new Error("noUiSlider (" + G + "): 'start' option is incorrect.");
                t.handles = e.length,
                t.start = e
            }
            function R(t, e) {
                if (t.snap = e,
                "boolean" != typeof e)
                    throw new Error("noUiSlider (" + G + "): 'snap' option must be a boolean.")
            }
            function N(t, e) {
                if (t.animate = e,
                "boolean" != typeof e)
                    throw new Error("noUiSlider (" + G + "): 'animate' option must be a boolean.")
            }
            function I(t, e) {
                if (t.animationDuration = e,
                "number" != typeof e)
                    throw new Error("noUiSlider (" + G + "): 'animationDuration' option must be a number.")
            }
            function T(t, e) {
                var r, a = [!1];
                if ("lower" === e ? e = [!0, !1] : "upper" === e && (e = [!1, !0]),
                e === !0 || e === !1) {
                    for (r = 1; r < t.handles; r++)
                        a.push(e);
                    a.push(!1)
                } else {
                    if (!Array.isArray(e) || !e.length || e.length !== t.handles + 1)
                        throw new Error("noUiSlider (" + G + "): 'connect' option doesn't match handle count.");
                    a = e
                }
                t.connect = a
            }
            function V(t, e) {
                switch (e) {
                case "horizontal":
                    t.ort = 0;
                    break;
                case "vertical":
                    t.ort = 1;
                    break;
                default:
                    throw new Error("noUiSlider (" + G + "): 'orientation' option is invalid.")
                }
            }
            function $(t, e) {
                if (!o(e))
                    throw new Error("noUiSlider (" + G + "): 'margin' option must be numeric.");
                if (0 !== e && (t.margin = t.spectrum.getMargin(e),
                !t.margin))
                    throw new Error("noUiSlider (" + G + "): 'margin' option is only supported on linear sliders.")
            }
            function L(t, e) {
                if (!o(e))
                    throw new Error("noUiSlider (" + G + "): 'limit' option must be numeric.");
                if (t.limit = t.spectrum.getMargin(e),
                !t.limit || t.handles < 2)
                    throw new Error("noUiSlider (" + G + "): 'limit' option is only supported on linear sliders with 2 or more handles.")
            }
            function q(t, e) {
                if (!o(e) && !Array.isArray(e))
                    throw new Error("noUiSlider (" + G + "): 'padding' option must be numeric or array of exactly 2 numbers.");
                if (Array.isArray(e) && 2 !== e.length && !o(e[0]) && !o(e[1]))
                    throw new Error("noUiSlider (" + G + "): 'padding' option must be numeric or array of exactly 2 numbers.");
                if (0 !== e) {
                    if (Array.isArray(e) || (e = [e, e]),
                    t.padding = [t.spectrum.getMargin(e[0]), t.spectrum.getMargin(e[1])],
                    t.padding[0] === !1 || t.padding[1] === !1)
                        throw new Error("noUiSlider (" + G + "): 'padding' option is only supported on linear sliders.");
                    if (t.padding[0] < 0 || t.padding[1] < 0)
                        throw new Error("noUiSlider (" + G + "): 'padding' option must be a positive number(s).");
                    if (t.padding[0] + t.padding[1] >= 100)
                        throw new Error("noUiSlider (" + G + "): 'padding' option must not exceed 100% of the range.")
                }
            }
            function Q(t, e) {
                switch (e) {
                case "ltr":
                    t.dir = 0;
                    break;
                case "rtl":
                    t.dir = 1;
                    break;
                default:
                    throw new Error("noUiSlider (" + G + "): 'direction' option was not recognized.")
                }
            }
            function D(t, e) {
                if ("string" != typeof e)
                    throw new Error("noUiSlider (" + G + "): 'behaviour' must be a string containing options.");
                var r = e.indexOf("tap") >= 0
                  , a = e.indexOf("drag") >= 0
                  , n = e.indexOf("fixed") >= 0
                  , i = e.indexOf("snap") >= 0
                  , s = e.indexOf("hover") >= 0;
                if (n) {
                    if (2 !== t.handles)
                        throw new Error("noUiSlider (" + G + "): 'fixed' behaviour must be used with 2 handles");
                    $(t, t.start[1] - t.start[0])
                }
                t.events = {
                    tap: r || i,
                    drag: a,
                    fixed: n,
                    snap: i,
                    hover: s
                }
            }
            function H(t, e) {
                if (e !== !1)
                    if (e === !0) {
                        t.tooltips = [];
                        for (var r = 0; r < t.handles; r++)
                            t.tooltips.push(!0)
                    } else {
                        if (t.tooltips = c(e),
                        t.tooltips.length !== t.handles)
                            throw new Error("noUiSlider (" + G + "): must pass a formatter for all handles.");
                        t.tooltips.forEach(function(t) {
                            if ("boolean" != typeof t && ("object" != typeof t || "function" != typeof t.to))
                                throw new Error("noUiSlider (" + G + "): 'tooltips' must be passed a formatter or 'false'.")
                        })
                    }
            }
            function B(t, e) {
                t.ariaFormat = e,
                A(e)
            }
            function z(t, e) {
                t.format = e,
                A(e)
            }
            function W(t, e) {
                if ("string" != typeof e && e !== !1)
                    throw new Error("noUiSlider (" + G + "): 'cssPrefix' must be a string or `false`.");
                t.cssPrefix = e
            }
            function X(t, e) {
                if ("object" != typeof e)
                    throw new Error("noUiSlider (" + G + "): 'cssClasses' must be an object.");
                if ("string" == typeof t.cssPrefix) {
                    t.cssClasses = {};
                    for (var r in e)
                        e.hasOwnProperty(r) && (t.cssClasses[r] = t.cssPrefix + e[r])
                } else
                    t.cssClasses = e
            }
            function Y(t) {
                var e = {
                    margin: 0,
                    limit: 0,
                    padding: 0,
                    animate: !0,
                    animationDuration: 300,
                    ariaFormat: K,
                    format: K
                }
                  , a = {
                    step: {
                        r: !1,
                        t: M
                    },
                    start: {
                        r: !0,
                        t: O
                    },
                    connect: {
                        r: !0,
                        t: T
                    },
                    direction: {
                        r: !0,
                        t: Q
                    },
                    snap: {
                        r: !1,
                        t: R
                    },
                    animate: {
                        r: !1,
                        t: N
                    },
                    animationDuration: {
                        r: !1,
                        t: I
                    },
                    range: {
                        r: !0,
                        t: F
                    },
                    orientation: {
                        r: !1,
                        t: V
                    },
                    margin: {
                        r: !1,
                        t: $
                    },
                    limit: {
                        r: !1,
                        t: L
                    },
                    padding: {
                        r: !1,
                        t: q
                    },
                    behaviour: {
                        r: !0,
                        t: D
                    },
                    ariaFormat: {
                        r: !1,
                        t: B
                    },
                    format: {
                        r: !1,
                        t: z
                    },
                    tooltips: {
                        r: !1,
                        t: H
                    },
                    cssPrefix: {
                        r: !0,
                        t: W
                    },
                    cssClasses: {
                        r: !0,
                        t: X
                    }
                }
                  , n = {
                    connect: !1,
                    direction: "ltr",
                    behaviour: "tap",
                    orientation: "horizontal",
                    cssPrefix: "noUi-",
                    cssClasses: {
                        target: "target",
                        base: "base",
                        origin: "origin",
                        handle: "handle",
                        handleLower: "handle-lower",
                        handleUpper: "handle-upper",
                        horizontal: "horizontal",
                        vertical: "vertical",
                        background: "background",
                        connect: "connect",
                        connects: "connects",
                        ltr: "ltr",
                        rtl: "rtl",
                        draggable: "draggable",
                        drag: "state-drag",
                        tap: "state-tap",
                        active: "active",
                        tooltip: "tooltip",
                        pips: "pips",
                        pipsHorizontal: "pips-horizontal",
                        pipsVertical: "pips-vertical",
                        marker: "marker",
                        markerHorizontal: "marker-horizontal",
                        markerVertical: "marker-vertical",
                        markerNormal: "marker-normal",
                        markerLarge: "marker-large",
                        markerSub: "marker-sub",
                        value: "value",
                        valueHorizontal: "value-horizontal",
                        valueVertical: "value-vertical",
                        valueNormal: "value-normal",
                        valueLarge: "value-large",
                        valueSub: "value-sub"
                    }
                };
                t.format && !t.ariaFormat && (t.ariaFormat = t.format),
                Object.keys(a).forEach(function(i) {
                    if (!r(t[i]) && void 0 === n[i]) {
                        if (a[i].r)
                            throw new Error("noUiSlider (" + G + "): '" + i + "' is required.");
                        return !0
                    }
                    a[i].t(e, r(t[i]) ? t[i] : n[i])
                }),
                e.pips = t.pips;
                var i = document.createElement("div")
                  , s = void 0 !== i.style.msTransform
                  , o = void 0 !== i.style.transform;
                e.transformRule = o ? "transform" : s ? "msTransform" : "webkitTransform";
                var l = [["left", "top"], ["right", "bottom"]];
                return e.style = l[e.dir][e.ort],
                e
            }
            function J(t, r, i) {
                function o(t, e) {
                    var r = St.createElement("div");
                    return e && d(r, e),
                    t.appendChild(r),
                    r
                }
                function f(t, e) {
                    var a = o(t, r.cssClasses.origin)
                      , n = o(a, r.cssClasses.handle);
                    return n.setAttribute("data-handle", e),
                    n.setAttribute("tabindex", "0"),
                    n.setAttribute("role", "slider"),
                    n.setAttribute("aria-orientation", r.ort ? "vertical" : "horizontal"),
                    0 === e ? d(n, r.cssClasses.handleLower) : e === r.handles - 1 && d(n, r.cssClasses.handleUpper),
                    a
                }
                function x(t, e) {
                    return !!e && o(t, r.cssClasses.connect)
                }
                function y(t, e) {
                    var a = o(e, r.cssClasses.connects);
                    ct = [],
                    ft = [],
                    ft.push(x(a, t[0]));
                    for (var n = 0; n < r.handles; n++)
                        ct.push(f(e, n)),
                        xt[n] = n,
                        ft.push(x(a, t[n + 1]))
                }
                function b(t) {
                    d(t, r.cssClasses.target),
                    0 === r.dir ? d(t, r.cssClasses.ltr) : d(t, r.cssClasses.rtl),
                    0 === r.ort ? d(t, r.cssClasses.horizontal) : d(t, r.cssClasses.vertical),
                    ut = o(t, r.cssClasses.base)
                }
                function w(t, e) {
                    return !!r.tooltips[e] && o(t.firstChild, r.cssClasses.tooltip)
                }
                function j() {
                    var t = ct.map(w);
                    Q("update", function(e, a, n) {
                        if (t[a]) {
                            var i = e[a];
                            r.tooltips[a] !== !0 && (i = r.tooltips[a].to(n[a])),
                            t[a].innerHTML = i
                        }
                    })
                }
                function S() {
                    Q("update", function(t, e, a, n, i) {
                        xt.forEach(function(t) {
                            var e = ct[t]
                              , n = z(vt, t, 0, !0, !0, !0)
                              , s = z(vt, t, 100, !0, !0, !0)
                              , o = i[t]
                              , l = r.ariaFormat.to(a[t]);
                            e.children[0].setAttribute("aria-valuemin", n.toFixed(1)),
                            e.children[0].setAttribute("aria-valuemax", s.toFixed(1)),
                            e.children[0].setAttribute("aria-valuenow", o.toFixed(1)),
                            e.children[0].setAttribute("aria-valuetext", l)
                        })
                    })
                }
                function C(t, e, r) {
                    if ("range" === t || "steps" === t)
                        return bt.xVal;
                    if ("count" === t) {
                        if (e < 2)
                            throw new Error("noUiSlider (" + G + "): 'values' (>= 2) required for mode 'count'.");
                        var a = e - 1
                          , n = 100 / a;
                        for (e = []; a--; )
                            e[a] = a * n;
                        e.push(100),
                        t = "positions"
                    }
                    return "positions" === t ? e.map(function(t) {
                        return bt.fromStepping(r ? bt.getStep(t) : t)
                    }) : "values" === t ? r ? e.map(function(t) {
                        return bt.fromStepping(bt.getStep(bt.toStepping(t)))
                    }) : e : void 0
                }
                function U(t, e, r) {
                    function a(t, e) {
                        return (t + e).toFixed(7) / 1
                    }
                    var i = {}
                      , s = bt.xVal[0]
                      , o = bt.xVal[bt.xVal.length - 1]
                      , l = !1
                      , u = !1
                      , c = 0;
                    return r = n(r.slice().sort(function(t, e) {
                        return t - e
                    })),
                    r[0] !== s && (r.unshift(s),
                    l = !0),
                    r[r.length - 1] !== o && (r.push(o),
                    u = !0),
                    r.forEach(function(n, s) {
                        var o, f, d, p, h, m, _, g, v, x, y = n, b = r[s + 1];
                        if ("steps" === e && (o = bt.xNumSteps[s]),
                        o || (o = b - y),
                        y !== !1 && void 0 !== b)
                            for (o = Math.max(o, 1e-7),
                            f = y; f <= b; f = a(f, o)) {
                                for (p = bt.toStepping(f),
                                h = p - c,
                                g = h / t,
                                v = Math.round(g),
                                x = h / v,
                                d = 1; d <= v; d += 1)
                                    m = c + d * x,
                                    i[m.toFixed(5)] = ["x", 0];
                                _ = r.indexOf(f) > -1 ? 1 : "steps" === e ? 2 : 0,
                                !s && l && (_ = 0),
                                f === b && u || (i[p.toFixed(5)] = [f, _]),
                                c = p
                            }
                    }),
                    i
                }
                function P(t, e, a) {
                    function n(t, e) {
                        var a = e === r.cssClasses.value
                          , n = a ? c : f
                          , i = a ? l : u;
                        return e + " " + n[r.ort] + " " + i[t]
                    }
                    function i(t, i) {
                        i[1] = i[1] && e ? e(i[0], i[1]) : i[1];
                        var l = o(s, !1);
                        l.className = n(i[1], r.cssClasses.marker),
                        l.style[r.style] = t + "%",
                        i[1] && (l = o(s, !1),
                        l.className = n(i[1], r.cssClasses.value),
                        l.setAttribute("data-value", i[0]),
                        l.style[r.style] = t + "%",
                        l.innerText = a.to(i[0]))
                    }
                    var s = St.createElement("div")
                      , l = [r.cssClasses.valueNormal, r.cssClasses.valueLarge, r.cssClasses.valueSub]
                      , u = [r.cssClasses.markerNormal, r.cssClasses.markerLarge, r.cssClasses.markerSub]
                      , c = [r.cssClasses.valueHorizontal, r.cssClasses.valueVertical]
                      , f = [r.cssClasses.markerHorizontal, r.cssClasses.markerVertical];
                    return d(s, r.cssClasses.pips),
                    d(s, 0 === r.ort ? r.cssClasses.pipsHorizontal : r.cssClasses.pipsVertical),
                    Object.keys(t).forEach(function(e) {
                        i(e, t[e])
                    }),
                    s
                }
                function E() {
                    pt && (e(pt),
                    pt = null)
                }
                function k(t) {
                    E();
                    var e = t.mode
                      , r = t.density || 1
                      , a = t.filter || !1
                      , n = t.values || !1
                      , i = t.stepped || !1
                      , s = C(e, n, i)
                      , o = U(r, e, s)
                      , l = t.format || {
                        to: Math.round
                    };
                    return pt = gt.appendChild(P(o, a, l))
                }
                function A() {
                    var t = ut.getBoundingClientRect()
                      , e = "offset" + ["Width", "Height"][r.ort];
                    return 0 === r.ort ? t.width || ut[e] : t.height || ut[e]
                }
                function M(t, e, a, n) {
                    var i = function(i) {
                        return !!(i = F(i, n.pageOffset, n.target || e)) && (!(gt.hasAttribute("disabled") && !n.doNotReject) && (!(h(gt, r.cssClasses.tap) && !n.doNotReject) && (!(t === ht.start && void 0 !== i.buttons && i.buttons > 1) && ((!n.hover || !i.buttons) && (_t || i.preventDefault(),
                        i.calcPoint = i.points[r.ort],
                        void a(i, n))))))
                    }
                      , s = [];
                    return t.split(" ").forEach(function(t) {
                        e.addEventListener(t, i, !!_t && {
                            passive: !0
                        }),
                        s.push([t, i])
                    }),
                    s
                }
                function F(t, e, r) {
                    var a, n, i = 0 === t.type.indexOf("touch"), s = 0 === t.type.indexOf("mouse"), o = 0 === t.type.indexOf("pointer");
                    if (0 === t.type.indexOf("MSPointer") && (o = !0),
                    i) {
                        var l = function(t) {
                            return t.target === r || r.contains(t.target)
                        };
                        if ("touchstart" === t.type) {
                            var u = Array.prototype.filter.call(t.touches, l);
                            if (u.length > 1)
                                return !1;
                            a = u[0].pageX,
                            n = u[0].pageY
                        } else {
                            var c = Array.prototype.find.call(t.changedTouches, l);
                            if (!c)
                                return !1;
                            a = c.pageX,
                            n = c.pageY
                        }
                    }
                    return e = e || m(St),
                    (s || o) && (a = t.clientX + e.x,
                    n = t.clientY + e.y),
                    t.pageOffset = e,
                    t.points = [a, n],
                    t.cursor = s || o,
                    t
                }
                function O(t) {
                    var e = t - s(ut, r.ort)
                      , a = 100 * e / A();
                    return a = u(a),
                    r.dir ? 100 - a : a
                }
                function R(t) {
                    var e = 100
                      , r = !1;
                    return ct.forEach(function(a, n) {
                        if (!a.hasAttribute("disabled")) {
                            var i = Math.abs(vt[n] - t);
                            (i < e || 100 === i && 100 === e) && (r = n,
                            e = i)
                        }
                    }),
                    r
                }
                function N(t, e) {
                    "mouseout" === t.type && "HTML" === t.target.nodeName && null === t.relatedTarget && T(t, e)
                }
                function I(t, e) {
                    if (navigator.appVersion.indexOf("MSIE 9") === -1 && 0 === t.buttons && 0 !== e.buttonsProperty)
                        return T(t, e);
                    var a = (r.dir ? -1 : 1) * (t.calcPoint - e.startCalcPoint)
                      , n = 100 * a / e.baseSize;
                    X(a > 0, n, e.locations, e.handleNumbers)
                }
                function T(t, e) {
                    e.handle && (p(e.handle, r.cssClasses.active),
                    yt -= 1),
                    e.listeners.forEach(function(t) {
                        Ct.removeEventListener(t[0], t[1])
                    }),
                    0 === yt && (p(gt, r.cssClasses.drag),
                    K(),
                    t.cursor && (Ut.style.cursor = "",
                    Ut.removeEventListener("selectstart", a))),
                    e.handleNumbers.forEach(function(t) {
                        H("change", t),
                        H("set", t),
                        H("end", t)
                    })
                }
                function V(t, e) {
                    var n;
                    if (1 === e.handleNumbers.length) {
                        var i = ct[e.handleNumbers[0]];
                        if (i.hasAttribute("disabled"))
                            return !1;
                        n = i.children[0],
                        yt += 1,
                        d(n, r.cssClasses.active)
                    }
                    t.stopPropagation();
                    var s = []
                      , o = M(ht.move, Ct, I, {
                        target: t.target,
                        handle: n,
                        listeners: s,
                        startCalcPoint: t.calcPoint,
                        baseSize: A(),
                        pageOffset: t.pageOffset,
                        handleNumbers: e.handleNumbers,
                        buttonsProperty: t.buttons,
                        locations: vt.slice()
                    })
                      , l = M(ht.end, Ct, T, {
                        target: t.target,
                        handle: n,
                        listeners: s,
                        doNotReject: !0,
                        handleNumbers: e.handleNumbers
                    })
                      , u = M("mouseout", Ct, N, {
                        target: t.target,
                        handle: n,
                        listeners: s,
                        doNotReject: !0,
                        handleNumbers: e.handleNumbers
                    });
                    s.push.apply(s, o.concat(l, u)),
                    t.cursor && (Ut.style.cursor = getComputedStyle(t.target).cursor,
                    ct.length > 1 && d(gt, r.cssClasses.drag),
                    Ut.addEventListener("selectstart", a, !1)),
                    e.handleNumbers.forEach(function(t) {
                        H("start", t)
                    })
                }
                function $(t) {
                    t.stopPropagation();
                    var e = O(t.calcPoint)
                      , a = R(e);
                    return a !== !1 && (r.events.snap || l(gt, r.cssClasses.tap, r.animationDuration),
                    tt(a, e, !0, !0),
                    K(),
                    H("slide", a, !0),
                    H("update", a, !0),
                    H("change", a, !0),
                    H("set", a, !0),
                    void (r.events.snap && V(t, {
                        handleNumbers: [a]
                    })))
                }
                function L(t) {
                    var e = O(t.calcPoint)
                      , r = bt.getStep(e)
                      , a = bt.fromStepping(r);
                    Object.keys(jt).forEach(function(t) {
                        "hover" === t.split(".")[0] && jt[t].forEach(function(t) {
                            t.call(dt, a)
                        })
                    })
                }
                function q(t) {
                    t.fixed || ct.forEach(function(t, e) {
                        M(ht.start, t.children[0], V, {
                            handleNumbers: [e]
                        })
                    }),
                    t.tap && M(ht.start, ut, $, {}),
                    t.hover && M(ht.move, ut, L, {
                        hover: !0
                    }),
                    t.drag && ft.forEach(function(e, a) {
                        if (e !== !1 && 0 !== a && a !== ft.length - 1) {
                            var n = ct[a - 1]
                              , i = ct[a]
                              , s = [e];
                            d(e, r.cssClasses.draggable),
                            t.fixed && (s.push(n.children[0]),
                            s.push(i.children[0])),
                            s.forEach(function(t) {
                                M(ht.start, t, V, {
                                    handles: [n, i],
                                    handleNumbers: [a - 1, a]
                                })
                            })
                        }
                    })
                }
                function Q(t, e) {
                    jt[t] = jt[t] || [],
                    jt[t].push(e),
                    "update" === t.split(".")[0] && ct.forEach(function(t, e) {
                        H("update", e)
                    })
                }
                function D(t) {
                    var e = t && t.split(".")[0]
                      , r = e && t.substring(e.length);
                    Object.keys(jt).forEach(function(t) {
                        var a = t.split(".")[0]
                          , n = t.substring(a.length);
                        e && e !== a || r && r !== n || delete jt[t]
                    })
                }
                function H(t, e, a) {
                    Object.keys(jt).forEach(function(n) {
                        var i = n.split(".")[0];
                        t === i && jt[n].forEach(function(t) {
                            t.call(dt, wt.map(r.format.to), e, wt.slice(), a || !1, vt.slice())
                        })
                    })
                }
                function B(t) {
                    return t + "%"
                }
                function z(t, e, a, n, i, s) {
                    return ct.length > 1 && (n && e > 0 && (a = Math.max(a, t[e - 1] + r.margin)),
                    i && e < ct.length - 1 && (a = Math.min(a, t[e + 1] - r.margin))),
                    ct.length > 1 && r.limit && (n && e > 0 && (a = Math.min(a, t[e - 1] + r.limit)),
                    i && e < ct.length - 1 && (a = Math.max(a, t[e + 1] - r.limit))),
                    r.padding && (0 === e && (a = Math.max(a, r.padding[0])),
                    e === ct.length - 1 && (a = Math.min(a, 100 - r.padding[1]))),
                    a = bt.getStep(a),
                    a = u(a),
                    !(a === t[e] && !s) && a
                }
                function W(t, e) {
                    var a = r.ort;
                    return (a ? e : t) + ", " + (a ? t : e)
                }
                function X(t, e, r, a) {
                    var n = r.slice()
                      , i = [!t, t]
                      , s = [t, !t];
                    a = a.slice(),
                    t && a.reverse(),
                    a.length > 1 ? a.forEach(function(t, r) {
                        var a = z(n, t, n[t] + e, i[r], s[r], !1);
                        a === !1 ? e = 0 : (e = a - n[t],
                        n[t] = a)
                    }) : i = s = [!0];
                    var o = !1;
                    a.forEach(function(t, a) {
                        o = tt(t, r[t] + e, i[a], s[a]) || o
                    }),
                    o && a.forEach(function(t) {
                        H("update", t),
                        H("slide", t)
                    })
                }
                function J(t, e) {
                    return r.dir ? 100 - t - e : t
                }
                function Z(t, e) {
                    vt[t] = e,
                    wt[t] = bt.fromStepping(e);
                    var a = "translate(" + W(B(J(e, 0) - Pt), "0") + ")";
                    ct[t].style[r.transformRule] = a,
                    et(t),
                    et(t + 1)
                }
                function K() {
                    xt.forEach(function(t) {
                        var e = vt[t] > 50 ? -1 : 1
                          , r = 3 + (ct.length + e * t);
                        ct[t].style.zIndex = r
                    })
                }
                function tt(t, e, r, a) {
                    return e = z(vt, t, e, r, a, !1),
                    e !== !1 && (Z(t, e),
                    !0)
                }
                function et(t) {
                    if (ft[t]) {
                        var e = 0
                          , a = 100;
                        0 !== t && (e = vt[t - 1]),
                        t !== ft.length - 1 && (a = vt[t]);
                        var n = a - e
                          , i = "translate(" + W(B(J(e, n)), "0") + ")"
                          , s = "scale(" + W(n / 100, "1") + ")";
                        ft[t].style[r.transformRule] = i + " " + s
                    }
                }
                function rt(t, e) {
                    return null === t || t === !1 || void 0 === t ? vt[e] : ("number" == typeof t && (t = String(t)),
                    t = r.format.from(t),
                    t = bt.toStepping(t),
                    t === !1 || isNaN(t) ? vt[e] : t)
                }
                function at(t, e) {
                    var a = c(t)
                      , n = void 0 === vt[0];
                    e = void 0 === e || !!e,
                    r.animate && !n && l(gt, r.cssClasses.tap, r.animationDuration),
                    xt.forEach(function(t) {
                        tt(t, rt(a[t], t), !0, !1)
                    }),
                    xt.forEach(function(t) {
                        tt(t, vt[t], !0, !0)
                    }),
                    K(),
                    xt.forEach(function(t) {
                        H("update", t),
                        null !== a[t] && e && H("set", t)
                    })
                }
                function nt(t) {
                    at(r.start, t)
                }
                function it() {
                    var t = wt.map(r.format.to);
                    return 1 === t.length ? t[0] : t
                }
                function st() {
                    for (var t in r.cssClasses)
                        r.cssClasses.hasOwnProperty(t) && p(gt, r.cssClasses[t]);
                    for (; gt.firstChild; )
                        gt.removeChild(gt.firstChild);
                    delete gt.noUiSlider
                }
                function ot() {
                    return vt.map(function(t, e) {
                        var r = bt.getNearbySteps(t)
                          , a = wt[e]
                          , n = r.thisStep.step
                          , i = null;
                        n !== !1 && a + n > r.stepAfter.startValue && (n = r.stepAfter.startValue - a),
                        i = a > r.thisStep.startValue ? r.thisStep.step : r.stepBefore.step !== !1 && a - r.stepBefore.highestStep,
                        100 === t ? n = null : 0 === t && (i = null);
                        var s = bt.countStepDecimals();
                        return null !== n && n !== !1 && (n = Number(n.toFixed(s))),
                        null !== i && i !== !1 && (i = Number(i.toFixed(s))),
                        [i, n]
                    })
                }
                function lt(t, e) {
                    var a = it()
                      , n = ["margin", "limit", "padding", "range", "animate", "snap", "step", "format"];
                    n.forEach(function(e) {
                        void 0 !== t[e] && (i[e] = t[e])
                    });
                    var s = Y(i);
                    n.forEach(function(e) {
                        void 0 !== t[e] && (r[e] = s[e])
                    }),
                    bt = s.spectrum,
                    r.margin = s.margin,
                    r.limit = s.limit,
                    r.padding = s.padding,
                    r.pips && k(r.pips),
                    vt = [],
                    at(t.start || a, e)
                }
                var ut, ct, ft, dt, pt, ht = _(), mt = v(), _t = mt && g(), gt = t, vt = [], xt = [], yt = 0, bt = r.spectrum, wt = [], jt = {}, St = t.ownerDocument, Ct = St.documentElement, Ut = St.body, Pt = "rtl" === St.dir || 1 === r.ort ? 0 : 100;
                return b(gt),
                y(r.connect, ut),
                q(r.events),
                at(r.start),
                dt = {
                    destroy: st,
                    steps: ot,
                    on: Q,
                    off: D,
                    get: it,
                    set: at,
                    reset: nt,
                    __moveHandles: function(t, e, r) {
                        X(t, e, vt, r)
                    },
                    options: i,
                    updateOptions: lt,
                    target: gt,
                    removePips: E,
                    pips: k
                },
                r.pips && k(r.pips),
                r.tooltips && j(),
                S(),
                dt
            }
            function Z(t, e) {
                if (!t || !t.nodeName)
                    throw new Error("noUiSlider (" + G + "): create requires a single element, got: " + t);
                if (t.noUiSlider)
                    throw new Error("noUiSlider (" + G + "): Slider was already initialized.");
                var r = Y(e, t)
                  , a = J(t, r, e);
                return t.noUiSlider = a,
                a
            }
            var G = "11.1.0";
            k.prototype.getMargin = function(t) {
                var e = this.xNumSteps[0];
                if (e && t / e % 1 !== 0)
                    throw new Error("noUiSlider (" + G + "): 'limit', 'margin' and 'padding' must be divisible by step.");
                return 2 === this.xPct.length && y(this.xVal, t)
            }
            ,
            k.prototype.toStepping = function(t) {
                return t = S(this.xVal, this.xPct, t)
            }
            ,
            k.prototype.fromStepping = function(t) {
                return C(this.xVal, this.xPct, t)
            }
            ,
            k.prototype.getStep = function(t) {
                return t = U(this.xPct, this.xSteps, this.snap, t)
            }
            ,
            k.prototype.getNearbySteps = function(t) {
                var e = j(t, this.xPct);
                return {
                    stepBefore: {
                        startValue: this.xVal[e - 2],
                        step: this.xNumSteps[e - 2],
                        highestStep: this.xHighestCompleteStep[e - 2]
                    },
                    thisStep: {
                        startValue: this.xVal[e - 1],
                        step: this.xNumSteps[e - 1],
                        highestStep: this.xHighestCompleteStep[e - 1]
                    },
                    stepAfter: {
                        startValue: this.xVal[e - 0],
                        step: this.xNumSteps[e - 0],
                        highestStep: this.xHighestCompleteStep[e - 0]
                    }
                }
            }
            ,
            k.prototype.countStepDecimals = function() {
                var t = this.xNumSteps.map(f);
                return Math.max.apply(null, t)
            }
            ,
            k.prototype.convert = function(t) {
                return this.getStep(this.toStepping(t))
            }
            ;
            var K = {
                to: function(t) {
                    return void 0 !== t && t.toFixed(2)
                },
                from: Number
            };
            return {
                version: G,
                create: Z
            }
        })
    }
    , {}],
    4: [function(t, e, r) {
        var a = {
            functions: {}
        };
        e.exports = a
    }
    , {}],
    5: [function(t, e, r) {
        var a = {
            setupLegacy: function() {},
            setupLegacy: function() {}
        };
        e.exports = a
    }
    , {}],
    6: [function(t, e, r) {
        (function(r) {
            var a = "undefined" != typeof window ? window.jQuery : "undefined" != typeof r ? r.jQuery : null
              , n = t("./state")
              , i = t("./process_form")
              , s = t("nouislider");
            t("js-cookie");
            e.exports = function(t) {
                var e = {
                    startOpened: !1,
                    isInit: !0,
                    action: ""
                }
                  , r = jQuery.extend(e, t);
                this.each(function() {
                    var t = a(this)
                      , e = this;
                    this.sfid = t.attr("data-sf-form-id"),
                    n.addSearchForm(this.sfid, this),
                    this.$fields = t.find("> ul > li"),
                    this.enable_taxonomy_archives = t.attr("data-taxonomy-archives"),
                    this.current_taxonomy_archive = t.attr("data-current-taxonomy-archive"),
                    "undefined" == typeof this.enable_taxonomy_archives && (this.enable_taxonomy_archives = "0"),
                    "undefined" == typeof this.current_taxonomy_archive && (this.current_taxonomy_archive = ""),
                    i.init(e.enable_taxonomy_archives, e.current_taxonomy_archive),
                    i.enableInputs(e),
                    "undefined" == typeof this.extra_query_params && (this.extra_query_params = {
                        all: {},
                        results: {},
                        ajax: {}
                    }),
                    this.template_is_loaded = t.attr("data-template-loaded"),
                    this.is_ajax = t.attr("data-ajax"),
                    this.instance_number = t.attr("data-instance-count"),
                    this.$ajax_results_container = jQuery(t.attr("data-ajax-target")),
                    this.results_url = t.attr("data-results-url"),
                    this.debug_mode = t.attr("data-debug-mode"),
                    this.update_ajax_url = t.attr("data-update-ajax-url"),
                    this.pagination_type = t.attr("data-ajax-pagination-type"),
                    this.auto_count = t.attr("data-auto-count"),
                    this.auto_count_refresh_mode = t.attr("data-auto-count-refresh-mode"),
                    this.only_results_ajax = t.attr("data-only-results-ajax"),
                    this.scroll_to_pos = t.attr("data-scroll-to-pos"),
                    this.custom_scroll_to = t.attr("data-custom-scroll-to"),
                    this.scroll_on_action = t.attr("data-scroll-on-action"),
                    this.lang_code = t.attr("data-lang-code"),
                    this.ajax_url = t.attr("data-ajax-url"),
                    this.ajax_form_url = t.attr("data-ajax-form-url"),
                    this.is_rtl = t.attr("data-is-rtl"),
                    this.display_result_method = t.attr("data-display-result-method"),
                    this.maintain_state = t.attr("data-maintain-state"),
                    this.ajax_action = "",
                    this.last_submit_query_params = "",
                    this.current_paged = parseInt(t.attr("data-init-paged")),
                    this.last_load_more_html = "",
                    this.load_more_html = "",
                    this.ajax_data_type = t.attr("data-ajax-data-type"),
                    this.ajax_target_attr = t.attr("data-ajax-target"),
                    this.use_history_api = t.attr("data-use-history-api"),
                    this.is_submitting = !1,
                    this.last_ajax_request = null,
                    "undefined" == typeof this.use_history_api && (this.use_history_api = ""),
                    "undefined" == typeof this.pagination_type && (this.pagination_type = "normal"),
                    "undefined" == typeof this.current_paged && (this.current_paged = 1),
                    "undefined" == typeof this.ajax_target_attr && (this.ajax_target_attr = ""),
                    "undefined" == typeof this.ajax_url && (this.ajax_url = ""),
                    "undefined" == typeof this.ajax_form_url && (this.ajax_form_url = ""),
                    "undefined" == typeof this.results_url && (this.results_url = ""),
                    "undefined" == typeof this.scroll_to_pos && (this.scroll_to_pos = ""),
                    "undefined" == typeof this.scroll_on_action && (this.scroll_on_action = ""),
                    "undefined" == typeof this.custom_scroll_to && (this.custom_scroll_to = ""),
                    this.$custom_scroll_to = jQuery(this.custom_scroll_to),
                    "undefined" == typeof this.update_ajax_url && (this.update_ajax_url = ""),
                    "undefined" == typeof this.debug_mode && (this.debug_mode = ""),
                    "undefined" == typeof this.ajax_target_object && (this.ajax_target_object = ""),
                    "undefined" == typeof this.template_is_loaded && (this.template_is_loaded = "0"),
                    "undefined" == typeof this.auto_count_refresh_mode && (this.auto_count_refresh_mode = "0"),
                    this.ajax_links_selector = t.attr("data-ajax-links-selector"),
                    this.auto_update = t.attr("data-auto-update"),
                    this.inputTimer = 0,
                    this.setInfiniteScrollContainer = function() {
                        this.is_max_paged = !1,
                        this.use_scroll_loader = t.attr("data-show-scroll-loader"),
                        this.infinite_scroll_container = t.attr("data-infinite-scroll-container"),
                        this.infinite_scroll_trigger_amount = t.attr("data-infinite-scroll-trigger"),
                        this.infinite_scroll_result_class = t.attr("data-infinite-scroll-result-class"),
                        this.$infinite_scroll_container = this.$ajax_results_container,
                        "undefined" == typeof this.infinite_scroll_container ? this.infinite_scroll_container = "" : this.$infinite_scroll_container = jQuery(t.attr("data-infinite-scroll-container")),
                        "undefined" == typeof this.infinite_scroll_result_class && (this.infinite_scroll_result_class = ""),
                        "undefined" == typeof this.use_scroll_loader && (this.use_scroll_loader = 1)
                    }
                    ,
                    this.setInfiniteScrollContainer(),
                    this.reset = function(t) {
                        return this.resetForm(t),
                        !0
                    }
                    ,
                    this.inputUpdate = function(t) {
                        if ("undefined" == typeof t)
                            var t = 300;
                        e.resetTimer(t)
                    }
                    ,
                    this.dateInputType = function() {
                        a(this);
                        if (1 == e.auto_update || 1 == e.auto_count_refresh_mode) {
                            var r = t.find(".sf-datepicker")
                              , n = r.length;
                            if (n > 1) {
                                var i = 0
                                  , s = 0;
                                r.each(function() {
                                    "" == a(this).val() && s++,
                                    i++
                                }),
                                0 == s && e.inputUpdate(1200)
                            } else
                                e.inputUpdate(1200)
                        }
                    }
                    ,
                    this.scrollToPos = function() {
                        var r = 0
                          , n = !0;
                        1 == e.is_ajax && ("window" == e.scroll_to_pos ? r = 0 : "form" == e.scroll_to_pos ? r = t.offset().top : "results" == e.scroll_to_pos ? e.$ajax_results_container.length > 0 && (r = e.$ajax_results_container.offset().top) : "custom" == e.scroll_to_pos ? e.$custom_scroll_to.length > 0 && (r = e.$custom_scroll_to.offset().top) : n = !1,
                        n && a("html, body").stop().animate({
                            scrollTop: r
                        }, "normal", "easeOutQuad"))
                    }
                    ,
                    this.attachActiveClass = function() {
                        t.on("change", 'input[type="radio"], input[type="checkbox"], select', function(t) {
                            var e = a(this)
                              , r = e.parent()
                              , n = e.prop("tagName").toLowerCase()
                              , i = e.attr("type")
                              , s = r.prop("tagName").toLowerCase();
                            if ("input" != n || "radio" != i && "checkbox" != i || "li" != s) {
                                if ("select" == n) {
                                    var o = e.children();
                                    o.removeClass("sf-option-active");
                                    var l = e.val()
                                      , u = "string" == typeof l || l instanceof String ? [l] : l;
                                    a(u).each(function(t, r) {
                                        e.find("option[value='" + r + "']").addClass("sf-option-active")
                                    })
                                }
                            } else {
                                var o = r.parent().find("li")
                                  , c = r.parent().find("input:checked");
                                o.removeClass("sf-option-active"),
                                c.each(function() {
                                    var t = a(this).closest("li");
                                    t.addClass("sf-option-active")
                                })
                            }
                        })
                    }
                    ,
                    this.initAutoUpdateEvents = function() {
                        if (1 == e.auto_update || 1 == e.auto_count_refresh_mode) {
                            t.on("change", 'input[type="radio"], input[type="checkbox"], select', function(t) {
                                e.inputUpdate(200)
                            }),
                            t.on("input", 'input[type="number"]', function(t) {
                                e.inputUpdate(800)
                            });
                            var r = t.find('input[type="text"]:not(.sf-datepicker)')
                              , a = r.val();
                            t.on("input", 'input[type="text"]:not(.sf-datepicker)', function() {
                                a != r.val() && e.inputUpdate(1200),
                                a = r.val()
                            }),
                            t.on("keypress", 'input[type="text"]:not(.sf-datepicker)', function(t) {
                                if (13 == t.which)
                                    return t.preventDefault(),
                                    e.submitForm(),
                                    !1
                            })
                        }
                    }
                    ,
                    this.clearTimer = function() {
                        clearTimeout(e.inputTimer)
                    }
                    ,
                    this.resetTimer = function(t) {
                        clearTimeout(e.inputTimer),
                        e.inputTimer = setTimeout(e.formUpdated, t)
                    }
                    ,
                    this.addDatePickers = function() {
                        var r = t.find(".sf-datepicker");
                        r.length > 0 && (r.each(function() {
                            var t = a(this)
                              , r = ""
                              , n = !1
                              , i = !1
                              , s = t.closest(".sf_date_field");
                            s.length > 0 && (r = s.attr("data-date-format"),
                            1 == s.attr("data-date-use-year-dropdown") && (n = !0),
                            1 == s.attr("data-date-use-month-dropdown") && (i = !0));
                            var o = {
                                inline: !0,
                                showOtherMonths: !0,
                                onSelect: function() {
                                    e.dateSelect()
                                },
                                dateFormat: r,
                                changeMonth: i,
                                changeYear: n
                            };
                            1 == e.is_rtl && (o.direction = "rtl"),
                            t.datepicker(o),
                            "" != e.lang_code ? a.datepicker.setDefaults(a.extend({
                                dateFormat: r
                            }, a.datepicker.regional[e.lang_code])) : a.datepicker.setDefaults(a.extend({
                                dateFormat: r
                            }, a.datepicker.regional.en))
                        }),
                        0 == a(".ll-skin-melon").length && r.datepicker("widget").wrap('<div class="ll-skin-melon searchandfilter-date-picker"/>'))
                    }
                    ,
                    this.dateSelect = function() {
                        var t = a(this);
                        if (1 == e.auto_update || 1 == e.auto_count_refresh_mode) {
                            var r = t.find(".sf-datepicker")
                              , n = r.length;
                            if (n > 1) {
                                var i = 0
                                  , s = 0;
                                r.each(function() {
                                    "" == a(this).val() && s++,
                                    i++
                                }),
                                0 == s && e.inputUpdate(1)
                            } else
                                e.inputUpdate(1)
                        }
                    }
                    ,
                    this.addRangeSliders = function() {
                        var r = t.find(".sf-meta-range-slider");
                        r.length > 0 && (r.each(function() {
                            var t = a(this)
                              , r = t.attr("data-min")
                              , n = t.attr("data-max")
                              , i = t.attr("data-start-min")
                              , o = t.attr("data-start-max")
                              , l = t.attr("data-display-values-as")
                              , u = t.attr("data-step")
                              , c = t.find(".sf-range-min")
                              , f = t.find(".sf-range-max")
                              , d = t.attr("data-decimal-places")
                              , p = t.attr("data-thousand-seperator")
                              , h = t.attr("data-decimal-seperator")
                              , m = wNumb({
                                mark: h,
                                decimals: parseFloat(d),
                                thousand: p
                            })
                              , _ = (parseFloat(i),
                            m.to(parseFloat(i)))
                              , g = m.to(parseFloat(o));
                            parseFloat(o);
                            "textinput" == l ? (c.val(_),
                            f.val(g)) : "text" == l && (c.html(_),
                            f.html(g));
                            var v = {
                                range: {
                                    min: [parseFloat(r)],
                                    max: [parseFloat(n)]
                                },
                                start: [_, g],
                                handles: 2,
                                connect: !0,
                                step: parseFloat(u),
                                behaviour: "extend-tap",
                                format: m
                            };
                            1 == e.is_rtl && (v.direction = "rtl");
                            var x = a(this).find(".meta-slider")[0];
                            "undefined" != typeof x.noUiSlider && x.noUiSlider.destroy(),
                            s.create(x, v),
                            c.off(),
                            c.on("change", function() {
                                x.noUiSlider.set([a(this).val(), null])
                            }),
                            f.off(),
                            f.on("change", function() {
                                x.noUiSlider.set([null, a(this).val()])
                            }),
                            x.noUiSlider.off("update"),
                            x.noUiSlider.on("update", function(t, r) {
                                var a = _
                                  , n = g
                                  , i = t[r];
                                r ? g = i : _ = i,
                                "textinput" == l ? (c.val(_),
                                f.val(g)) : "text" == l && (c.html(_),
                                f.html(g)),
                                1 != e.auto_update && 1 != e.auto_count_refresh_mode || a == _ && n == g || e.inputUpdate(800)
                            })
                        }),
                        e.clearTimer())
                    }
                    ,
                    this.init = function(r) {
                        if ("undefined" == typeof r)
                            var r = !1;
                        this.initAutoUpdateEvents(),
                        this.attachActiveClass(),
                        this.addDatePickers(),
                        this.addRangeSliders();
                        var n = t.find("select[data-combobox='1']");
                        n.length > 0 && n.each(function(t) {
                            var r = a(this)
                              , n = r.attr("data-combobox-nrm");
                            if ("undefined" != typeof r.chosen) {
                                var i = {
                                    search_contains: !0
                                };
                                "undefined" != typeof n && n && (i.no_results_text = n),
                                1 == e.is_rtl && r.addClass("chosen-rtl"),
                                r.chosen(i)
                            } else {
                                var s = {};
                                1 == e.is_rtl && (s.dir = "rtl"),
                                "undefined" != typeof n && n && (s.language = {
                                    noResults: function() {
                                        return n
                                    }
                                }),
                                r.select2(s)
                            }
                        }),
                        1 == e.is_ajax && e.setupAjaxPagination(),
                        t.submit(this.submitForm),
                        e.initWooCommerceControls(),
                        0 == r && (e.last_submit_query_params = e.getUrlParams(!1))
                    }
                    ,
                    this.onWindowScroll = function(t) {
                        if (!e.is_loading_more && !e.is_max_paged) {
                            var r = a(window).scrollTop()
                              , n = a(window).scrollTop() + a(window).height()
                              , i = parseInt(e.infinite_scroll_trigger_amount);
                            if (1 == e.$infinite_scroll_container.length) {
                                var s = e.$infinite_scroll_container.offset().top + e.$infinite_scroll_container.height();
                                e.$infinite_scroll_container.offset().top + e.$infinite_scroll_container.height() - r;
                                n > s + i && e.loadMoreResults()
                            }
                        }
                    }
                    ,
                    this.stripQueryStringAndHashFromPath = function(t) {
                        return t.split("?")[0].split("#")[0]
                    }
                    ,
                    this.gup = function(t, e) {
                        e || (e = location.href),
                        t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                        var r = "[\\?&]" + t + "=([^&#]*)"
                          , a = new RegExp(r)
                          , n = a.exec(e);
                        return null == n ? null : n[1]
                    }
                    ,
                    this.getUrlParams = function(t, r, a) {
                        if ("undefined" == typeof t)
                            var t = !0;
                        if ("undefined" == typeof r)
                            var r = "";
                        var n = ""
                          , s = i.getUrlParams(e)
                          , o = Object.keys(s).length
                          , l = 0;
                        if ("undefined" != typeof a && s.hasOwnProperty(a) && o--,
                        o > 0)
                            for (var u in s)
                                if (s.hasOwnProperty(u)) {
                                    var c = !0;
                                    "undefined" != typeof a && u == a && (c = !1),
                                    c && (n += u + "=" + s[u],
                                    l < o - 1 && (n += "&"),
                                    l++)
                                }
                        var f = ""
                          , d = n;
                        if (f = e.joinUrlParam(f, d),
                        1 == t) {
                            var p = e.$ajax_results_container.attr("data-paged");
                            "undefined" == typeof p && (p = 1),
                            p > 1 && (f = e.joinUrlParam(f, "sf_paged=" + p))
                        }
                        return f = e.addQueryParams(f, e.extra_query_params.all)
                    }
                    ,
                    this.addQueryParams = function(t, r) {
                        var a = ""
                          , n = Object.keys(r).length;
                        if (n > 0)
                            for (var i in r)
                                r.hasOwnProperty(i) && "" != r[i] && (a = i + "=" + r[i],
                                t = e.joinUrlParam(t, a));
                        return t
                    }
                    ,
                    this.addUrlParam = function(t, e) {
                        var r = "";
                        return "" != t && (r += t.indexOf("?") != -1 ? "&" : "?"),
                        "" != e ? t + r + e : t
                    }
                    ,
                    this.joinUrlParam = function(t, e) {
                        var r = "";
                        return "" != t && (r += "&"),
                        "" != e ? t + r + e : t
                    }
                    ,
                    this.setAjaxResultsURLs = function(t) {
                        if ("undefined" == typeof e.ajax_results_conf && (e.ajax_results_conf = new Array),
                        e.ajax_results_conf.processing_url = "",
                        e.ajax_results_conf.results_url = "",
                        e.ajax_results_conf.data_type = "",
                        "shortcode" == e.display_result_method)
                            e.ajax_results_conf.results_url = e.addUrlParam(e.results_url, t),
                            "" != e.lang_code && (t = e.joinUrlParam(t, "lang=" + e.lang_code)),
                            e.ajax_results_conf.processing_url = e.addUrlParam(e.ajax_url, t);
                        else if ("post_type_archive" == e.display_result_method) {
                            i.setTaxArchiveResultsUrl(e, e.results_url);
                            var r = i.getResultsUrl(e, e.results_url);
                            e.ajax_results_conf.results_url = e.addUrlParam(r, t),
                            e.ajax_results_conf.processing_url = e.addUrlParam(r, t)
                        } else if ("custom_woocommerce_store" == e.display_result_method) {
                            i.setTaxArchiveResultsUrl(e, e.results_url);
                            var r = i.getResultsUrl(e, e.results_url);
                            e.ajax_results_conf.results_url = e.addUrlParam(r, t),
                            e.ajax_results_conf.processing_url = e.addUrlParam(r, t)
                        } else
                            e.ajax_results_conf.results_url = e.addUrlParam(e.results_url, t),
                            e.ajax_results_conf.processing_url = e.addUrlParam(e.ajax_url, t);
                        e.ajax_results_conf.processing_url = e.addQueryParams(e.ajax_results_conf.processing_url, e.extra_query_params.ajax),
                        e.ajax_results_conf.data_type = e.ajax_data_type
                    }
                    ,
                    this.updateLoaderTag = function(t, r) {
                        var n;
                        n = "" != e.infinite_scroll_result_class ? e.$infinite_scroll_container.find(e.infinite_scroll_result_class).last().parent() : e.$infinite_scroll_container;
                        var r = n.prop("tagName")
                          , i = "div";
                        "ol" != r.toLowerCase() && "ul" != r.toLowerCase() || (i = "li");
                        var s = a("<" + i + " />").html(t.html())
                          , o = t.prop("attributes");
                        return a.each(o, function() {
                            s.attr(this.name, this.value)
                        }),
                        s
                    }
                    ,
                    this.loadMoreResults = function() {
                        e.is_loading_more = !0;
                        var t = {
                            sfid: e.sfid,
                            targetSelector: e.ajax_target_attr,
                            type: "load_more",
                            object: e
                        };
                        e.triggerEvent("sf:ajaxstart", t);
                        var r = e.getUrlParams(!0);
                        e.last_submit_query_params = e.getUrlParams(!1);
                        var n = ""
                          , i = ""
                          , s = ""
                          , o = this.current_paged + 1;
                        if (r = e.joinUrlParam(r, "sf_paged=" + o),
                        e.setAjaxResultsURLs(r),
                        n = e.ajax_results_conf.processing_url,
                        i = e.ajax_results_conf.results_url,
                        s = e.ajax_results_conf.data_type,
                        e.last_ajax_request && e.last_ajax_request.abort(),
                        1 == e.use_scroll_loader) {
                            var l = a("<div/>", {
                                "class": "search-filter-scroll-loading"
                            });
                            l = e.updateLoaderTag(l),
                            e.infiniteScrollAppend(l)
                        }
                        e.last_ajax_request = a.get(n, function(t, r, a) {
                            e.current_paged++,
                            e.last_ajax_request = null,
                            e.addResults(t, s)
                        }, s).fail(function(t, r, a) {
                            var i = {};
                            i.sfid = e.sfid,
                            i.object = e,
                            i.targetSelector = e.ajax_target_attr,
                            i.ajaxURL = n,
                            i.jqXHR = t,
                            i.textStatus = r,
                            i.errorThrown = a,
                            e.triggerEvent("sf:ajaxerror", i)
                        }).always(function() {
                            var t = {};
                            t.sfid = e.sfid,
                            t.targetSelector = e.ajax_target_attr,
                            t.object = e,
                            1 == e.use_scroll_loader && l.detach(),
                            e.is_loading_more = !1,
                            e.triggerEvent("sf:ajaxfinish", t)
                        })
                    }
                    ,
                    this.fetchAjaxResults = function() {
                        var r = {
                            sfid: e.sfid,
                            targetSelector: e.ajax_target_attr,
                            type: "load_results",
                            object: e
                        };
                        e.triggerEvent("sf:ajaxstart", r);
                        var n = t.find('input[type="text"]:focus').not(".sf-datepicker");
                        if (1 == n.length)
                            var s = n.attr("name");
                        if (t.addClass("search-filter-disabled"),
                        i.disableInputs(e),
                        e.$ajax_results_container.animate({
                            opacity: .5
                        }, "fast"),
                        "pagination" == e.ajax_action) {
                            var o = e.$ajax_results_container.attr("data-paged");
                            "undefined" == typeof o && (o = 1),
                            i.setTaxArchiveResultsUrl(e, e.results_url),
                            l = e.getUrlParams(!1),
                            o > 1 && (l = e.joinUrlParam(l, "sf_paged=" + o))
                        } else if ("submit" == e.ajax_action) {
                            var l = e.getUrlParams(!0);
                            e.last_submit_query_params = e.getUrlParams(!1)
                        }
                        var u = ""
                          , c = ""
                          , f = "";
                        e.setAjaxResultsURLs(l),
                        u = e.ajax_results_conf.processing_url,
                        c = e.ajax_results_conf.results_url,
                        f = e.ajax_results_conf.data_type,
                        e.last_ajax_request && e.last_ajax_request.abort(),
                        e.last_ajax_request = a.get(u, function(t, r, a) {
                            e.last_ajax_request = null,
                            e.scrollResults(),
                            e.updateResults(t, f),
                            e.updateUrlHistory(c),
                            e.setupAjaxPagination(),
                            e.isSubmitting = !1,
                            e.initWooCommerceControls()
                        }, f).fail(function(t, r, a) {
                            var n = {};
                            n.sfid = e.sfid,
                            n.targetSelector = e.ajax_target_attr,
                            n.object = e,
                            n.ajaxURL = u,
                            n.jqXHR = t,
                            n.textStatus = r,
                            n.errorThrown = a,
                            e.isSubmitting = !1,
                            e.triggerEvent("sf:ajaxerror", n)
                        }).always(function() {
                            e.$ajax_results_container.stop(!0, !0).animate({
                                opacity: 1
                            }, "fast");
                            var r = {};
                            if (r.sfid = e.sfid,
                            r.targetSelector = e.ajax_target_attr,
                            r.object = e,
                            t.removeClass("search-filter-disabled"),
                            i.enableInputs(e),
                            "" != s) {
                                var n = [];
                                e.$fields.each(function() {
                                    var t = a(this).find("input[name='" + s + "']");
                                    1 == t.length && (n = t)
                                }),
                                1 == n.length && (n.focus().val(n.val()),
                                e.focusCampo(n[0]))
                            }
                            t.find("input[name='_sf_search']").focus(),
                            e.triggerEvent("sf:ajaxfinish", r)
                        })
                    }
                    ,
                    this.focusCampo = function(t) {
                        if (null != t && 0 != t.value.length) {
                            if (t.createTextRange) {
                                var e = t.createTextRange();
                                e.moveStart("character", t.value.length),
                                e.collapse(),
                                e.select()
                            } else if (t.selectionStart || "0" == t.selectionStart) {
                                var r = t.value.length;
                                t.selectionStart = r,
                                t.selectionEnd = r,
                                t.focus()
                            }
                        } else
                            t.focus()
                    }
                    ,
                    this.triggerEvent = function(t, r) {
                        var n = a(".searchandfilter[data-sf-form-id='" + e.sfid + "']");
                        n.trigger(t, [r])
                    }
                    ,
                    this.fetchAjaxForm = function() {
                        var r = {
                            sfid: e.sfid,
                            targetSelector: e.ajax_target_attr,
                            type: "form",
                            object: e
                        };
                        e.triggerEvent("sf:ajaxformstart", [r]),
                        t.addClass("search-filter-disabled"),
                        i.disableInputs(e);
                        var n = e.getUrlParams();
                        "" != e.lang_code && (n = e.joinUrlParam(n, "lang=" + e.lang_code));
                        var s = e.addUrlParam(e.ajax_form_url, n)
                          , o = "json";
                        a.get(s, function(t, r, a) {
                            e.updateForm(t, o)
                        }, o).fail(function(t, r, a) {
                            var n = {};
                            n.sfid = e.sfid,
                            n.targetSelector = e.ajax_target_attr,
                            n.object = e,
                            n.ajaxURL = s,
                            n.jqXHR = t,
                            n.textStatus = r,
                            n.errorThrown = a,
                            e.triggerEvent("sf:ajaxerror", [n])
                        }).always(function() {
                            var r = {};
                            r.sfid = e.sfid,
                            r.targetSelector = e.ajax_target_attr,
                            r.object = e,
                            t.removeClass("search-filter-disabled"),
                            i.enableInputs(e),
                            e.triggerEvent("sf:ajaxformfinish", [r])
                        })
                    }
                    ,
                    this.copyListItemsContents = function(t, e) {
                        var r = this
                          , n = new Array
                          , i = new Array
                          , s = t.find("> ul > li");
                        s.each(function(t) {
                            n.push(a(this).html());
                            var e = a(this).prop("attributes");
                            i.push(e)
                        });
                        var o = 0
                          , l = e.find("> ul > li");
                        l.each(function(t) {
                            a(this).html(n[o]);
                            var e = a(s.get(o))
                              , i = a(this);
                            i.removeAttr("data-sf-taxonomy-archive"),
                            r.copyAttributes(e, i),
                            o++
                        })
                    }
                    ,
                    this.updateFormAttributes = function(t, e) {
                        var r = t.prop("attributes")
                          , n = e.prop("attributes");
                        a.each(n, function() {
                            e.removeAttr(this.name)
                        }),
                        a.each(r, function() {
                            e.attr(this.name, this.value)
                        })
                    }
                    ,
                    this.copyAttributes = function(t, e, r) {
                        if ("undefined" == typeof r)
                            var r = "";
                        var n = t.prop("attributes")
                          , i = e.prop("attributes");
                        a.each(i, function() {
                            "" != r && 0 == this.name.indexOf(r) && e.removeAttr(this.name)
                        }),
                        a.each(n, function() {
                            e.attr(this.name, this.value)
                        })
                    }
                    ,
                    this.copyFormAttributes = function(t, e) {
                        e.removeAttr("data-current-taxonomy-archive"),
                        this.copyAttributes(t, e)
                    }
                    ,
                    this.updateForm = function(e, r) {
                        var n = this;
                        "json" == r && "undefined" != typeof e.form && (t.off(),
                        n.copyListItemsContents(a(e.form), t),
                        this.init(!0),
                        1 == n.is_ajax && n.setupAjaxPagination())
                    }
                    ,
                    this.addResults = function(t, e) {
                        var r = this;
                        if ("json" == e)
                            r.load_more_html = t.results;
                        else if ("html" == e) {
                            var n = a(t);
                            r.load_more_html = n.find(r.ajax_target_attr).html()
                        }
                        var i = !1;
                        if (a("<div>" + r.load_more_html + "</div>").find("[data-search-filter-action='infinite-scroll-end']").length > 0 && (i = !0),
                        "" != r.infinite_scroll_container && (r.load_more_html = a("<div>" + r.load_more_html + "</div>").find(r.infinite_scroll_container).html()),
                        "" != r.infinite_scroll_result_class) {
                            var s = a("<div>" + r.load_more_html + "</div>").find(r.infinite_scroll_result_class)
                              , o = a("<div/>", {});
                            o.append(s),
                            r.load_more_html = o.html()
                        }
                        i ? (r.is_max_paged = !0,
                        r.last_load_more_html = r.load_more_html,
                        r.infiniteScrollAppend(r.load_more_html)) : r.last_load_more_html !== r.load_more_html ? (r.last_load_more_html = r.load_more_html,
                        r.infiniteScrollAppend(r.load_more_html)) : r.is_max_paged = !0
                    }
                    ,
                    this.infiniteScrollAppend = function(t) {
                        "" != e.infinite_scroll_result_class ? e.$infinite_scroll_container.find(e.infinite_scroll_result_class).last().after(t) : e.$infinite_scroll_container.append(t)
                    }
                    ,
                    this.updateResults = function(e, r) {
                        var n = this;
                        if ("json" == r)
                            n.$ajax_results_container.html(e.results),
                            "undefined" != typeof e.form && (t.off(),
                            n.removeAjaxPagination(),
                            n.copyListItemsContents(a(e.form), t),
                            n.copyFormAttributes(a(e.form), t),
                            t.searchAndFilter({
                                isInit: !1
                            }));
                        else if ("html" == r) {
                            var i = a(e);
                            if (n.$ajax_results_container.html(i.find(n.ajax_target_attr).html()),
                            n.$ajax_results_container.find(".searchandfilter").length > 0 && n.$ajax_results_container.find(".searchandfilter").searchAndFilter(),
                            0 == n.$ajax_results_container.find(".searchandfilter[data-sf-form-id='" + n.sfid + "']").length) {
                                var s = i.find(".searchandfilter[data-sf-form-id='" + n.sfid + "']");
                                1 == s.length && (t.off(),
                                n.removeAjaxPagination(),
                                n.copyListItemsContents(s, t),
                                n.copyFormAttributes(s, t),
                                t.searchAndFilter({
                                    isInit: !1
                                }))
                            }
                        }
                        n.is_max_paged = !1,
                        n.current_paged = 1,
                        n.setInfiniteScrollContainer()
                    }
                    ,
                    this.removeWooCommerceControls = function() {
                        var t = a(".woocommerce-ordering .orderby")
                          , e = a(".woocommerce-ordering");
                        e.off(),
                        t.off()
                    }
                    ,
                    this.addQueryParam = function(t, r, a) {
                        if ("undefined" == typeof a)
                            var a = "all";
                        e.extra_query_params[a][t] = r
                    }
                    ,
                    this.initWooCommerceControls = function() {
                        e.removeWooCommerceControls();
                        var r = a(".woocommerce-ordering .orderby")
                          , n = a(".woocommerce-ordering")
                          , i = "";
                        i = r.length > 0 ? r.val() : e.getQueryParamFromURL("orderby", window.location.href),
                        "menu_order" == i && (i = ""),
                        "" != i && i && (e.extra_query_params.all.orderby = i),
                        n.on("submit", function(t) {
                            return t.preventDefault(),
                            !1
                        }),
                        r.on("change", function(r) {
                            r.preventDefault();
                            var n = a(this).val();
                            return "menu_order" == n && (n = ""),
                            e.extra_query_params.all.orderby = n,
                            t.submit(),
                            !1
                        })
                    }
                    ,
                    this.scrollResults = function() {
                        var t = this;
                        t.scroll_on_action != t.ajax_action && "all" != t.scroll_on_action || t.scrollToPos()
                    }
                    ,
                    this.updateUrlHistory = function(e) {
                        var r = this
                          , a = 0;
                        window.history && window.history.pushState && (a = t.attr("data-use-history-api")),
                        1 == r.update_ajax_url && 1 == a && window.history && window.history.pushState && history.pushState(null, null, e)
                    }
                    ,
                    this.removeAjaxPagination = function() {
                        var t = this;
                        if ("undefined" != typeof t.ajax_links_selector) {
                            var e = jQuery(t.ajax_links_selector);
                            e.length > 0 && e.off()
                        }
                    }
                    ,
                    this.canFetchAjaxResults = function(t) {
                        if ("undefined" == typeof t)
                            var t = "";
                        var e = this
                          , r = !1;
                        if (1 == e.is_ajax) {
                            1 == e.$ajax_results_container.length && (r = !0);
                            var a = e.results_url
                              , n = window.location.href
                              , i = window.location.href.indexOf("#");
                            if (i !== -1 && (n = window.location.href.substr(0, window.location.href.indexOf("#"))),
                            ("custom_woocommerce_store" == e.display_result_method || "post_type_archive" == e.display_result_method) && 1 == e.enable_taxonomy_archives && "" !== e.current_taxonomy_archive)
                                return r = !0;
                            var s = n.split("?")
                              , o = "";
                            o = s.length > 0 ? s[0] : n;
                            var l = e.getQueryParamFromURL("lang", window.location.href);
                            "undefined" != typeof l && null !== l && (o = e.addUrlParam(o, "lang=" + l));
                            var u = e.getQueryParamFromURL("sfid", window.location.href);
                            Number(parseFloat(u)) == u && (o = e.addUrlParam(o, "sfid=" + u)),
                            o = o.replace(/\/$/, ""),
                            a = a.replace(/\/$/, "");
                            var c = -1;
                            o == a && (c = 1),
                            1 == e.only_results_ajax ? r = c > -1 : "pagination" == t && (c > -1 || (r = !1))
                        }
                        return r
                    }
                    ,
                    this.setupAjaxPagination = function() {
                        "undefined" != typeof e.ajax_links_selector && ("infinite_scroll" === this.pagination_type && 1 === parseInt(this.instance_number) && (a(window).off("scroll", e.onWindowScroll),
                        e.canFetchAjaxResults("pagination") && a(window).on("scroll", e.onWindowScroll)),
                        a(document).off("click", e.ajax_links_selector),
                        a(document).on("click", e.ajax_links_selector, function(t) {
                            if (e.canFetchAjaxResults("pagination")) {
                                t.preventDefault();
                                var r = jQuery(this).attr("href");
                                e.ajax_action = "pagination";
                                var a = e.getPagedFromURL(r);
                                return e.$ajax_results_container.attr("data-paged", a),
                                e.fetchAjaxResults(),
                                !1
                            }
                        }))
                    }
                    ,
                    this.getPagedFromURL = function(t) {
                        var r = 1
                          , a = e.getQueryParamFromURL("sf_paged", t);
                        return "string" != typeof a && "number" != typeof a || (r = a),
                        r
                    }
                    ,
                    this.getQueryParamFromURL = function(t, e) {
                        var r = "?" + e.split("?")[1];
                        if ("undefined" != typeof r) {
                            var a = decodeURIComponent((new RegExp("[?|&]" + t + "=([^&;]+?)(&|#|;|$)").exec(r) || [, ""])[1].replace(/\+/g, "%20")) || null;
                            return a
                        }
                        return ""
                    }
                    ,
                    this.formUpdated = function(t) {
                        return 1 == e.auto_update ? e.submitForm() : 0 == e.auto_update && 1 == e.auto_count_refresh_mode && e.formUpdatedFetchAjax(),
                        !1
                    }
                    ,
                    this.formUpdatedFetchAjax = function() {
                        return e.fetchAjaxForm(),
                        !1
                    }
                    ,
                    this.setFields = function(t) {
                        e.$fields.each(function() {
                            var t = a(this)
                              , e = t.find(".sf-meta-range-slider").attr("data-display-values-as");
                            "textinput" === e && (t.find(".meta-slider").length > 0,
                            t.find(".meta-slider").each(function(t) {
                                var e = a(this)[0]
                                  , r = a(this).closest(".sf-meta-range-slider")
                                  , n = r.find(".sf-range-min").val()
                                  , i = r.find(".sf-range-max").val();
                                e.noUiSlider.set([n, i])
                            }))
                        })
                    }
                    ,
                    this.submitForm = function(t) {
                        if (1 == e.isSubmitting)
                            return !1;
                        if (e.setFields(),
                        e.clearTimer(),
                        e.isSubmitting = !0,
                        i.setTaxArchiveResultsUrl(e, e.results_url),
                        e.$ajax_results_container.attr("data-paged", 1),
                        e.canFetchAjaxResults())
                            e.ajax_action = "submit",
                            e.fetchAjaxResults();
                        else {
                            var r = i.getResultsUrl(e, e.results_url)
                              , a = e.getUrlParams(!0, "");
                            r = e.addUrlParam(r, a),
                            window.location.href = r
                        }
                        return !1
                    }
                    ,
                    this.resetForm = function(t) {
                        e.$fields.each(function() {
                            var t = a(this);
                            t.find("select:not([multiple='multiple']) > option:first-child").prop("selected", !0),
                            t.find("select[multiple='multiple'] > option").prop("selected", !1),
                            t.find("input[type='checkbox']").prop("checked", !1),
                            t.find("> ul > li:first-child input[type='radio']").prop("checked", !0),
                            t.find("input[type='text']").val(""),
                            t.find("input[type='number']").each(function(t) {
                                var e = a(this);
                                e.parent().parent().hasClass("sf-meta-range") && (0 == t ? e.val(e.attr("min")) : 1 == t && e.val(e.attr("max")))
                            });
                            var e = t.find(".sf-meta-range-select-fromto");
                            if (e.length > 0) {
                                var r = e.attr("data-min")
                                  , n = e.attr("data-max");
                                e.find("select").each(function(t) {
                                    var e = a(this);
                                    0 == t ? e.val(r) : 1 == t && e.val(n)
                                })
                            }
                            var i = t.find(".sf-meta-range-radio-fromto");
                            if (i.length > 0) {
                                var r = i.attr("data-min")
                                  , n = i.attr("data-max")
                                  , s = i.find(".sf-input-range-radio");
                                s.each(function(t) {
                                    var e = a(this).find(".sf-input-radio");
                                    e.prop("checked", !1),
                                    0 == t ? e.filter('[value="' + r + '"]').prop("checked", !0) : 1 == t && e.filter('[value="' + n + '"]').prop("checked", !0)
                                })
                            }
                            t.find(".meta-slider").each(function(t) {
                                var e = a(this)[0]
                                  , r = a(this).closest(".sf-meta-range-slider")
                                  , n = r.attr("data-min")
                                  , i = r.attr("data-max");
                                e.noUiSlider.set([n, i])
                            });
                            var o = t.find("select[data-combobox='1']");
                            o.length > 0 && ("undefined" != typeof o.chosen ? o.trigger("chosen:updated") : (o.val(""),
                            o.trigger("change.select2")))
                        }),
                        e.clearTimer(),
                        "always" == t ? e.submitForm() : "never" == t ? 1 == this.auto_count_refresh_mode && e.formUpdatedFetchAjax() : "auto" == t && (1 == this.auto_update ? e.submitForm() : 1 == this.auto_count_refresh_mode && e.formUpdatedFetchAjax())
                    }
                    ,
                    this.init();
                    var o = {};
                    o.sfid = e.sfid,
                    o.targetSelector = e.ajax_target_attr,
                    o.object = this,
                    r.isInit && e.triggerEvent("sf:init", o)
                })
            }
        }
        ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {
        "./process_form": 7,
        "./state": 8,
        "js-cookie": 2,
        nouislider: 3
    }],
    7: [function(t, e, r) {
        (function(t) {
            var r = "undefined" != typeof window ? window.jQuery : "undefined" != typeof t ? t.jQuery : null;
            e.exports = {
                taxonomy_archives: 0,
                url_params: {},
                tax_archive_results_url: "",
                active_tax: "",
                fields: {},
                init: function(t, e) {
                    this.taxonomy_archives = 0,
                    this.url_params = {},
                    this.tax_archive_results_url = "",
                    this.active_tax = "",
                    this.taxonomy_archives = t,
                    this.current_taxonomy_archive = e,
                    this.clearUrlComponents()
                },
                setTaxArchiveResultsUrl: function(t, e, a) {
                    var n = this;
                    if (1 == this.taxonomy_archives) {
                        if ("undefined" == typeof a)
                            var a = !1;
                        var i = !1
                          , s = ""
                          , o = ""
                          , l = t.$fields.parent().find("[data-sf-taxonomy-archive='1']");
                        if (1 == l.length) {
                            i = l;
                            var u = i.attr("data-sf-field-type");
                            if ("tag" == u || "category" == u || "taxonomy" == u) {
                                var c = n.processTaxonomy(i, !0);
                                s = i.attr("data-sf-field-name");
                                var f = s.replace("_sft_", "");
                                c && (o = c.value)
                            }
                            "" == o && (i = !1)
                        }
                        if ("" != n.current_taxonomy_archive && n.current_taxonomy_archive != f)
                            return void (this.tax_archive_results_url = e);
                        if ("" != o && i || t.$fields.each(function() {
                            if (!i) {
                                var t = r(this).attr("data-sf-field-type");
                                if ("tag" == t || "category" == t || "taxonomy" == t) {
                                    var e = n.processTaxonomy(r(this), !0);
                                    s = r(this).attr("data-sf-field-name"),
                                    e && (o = e.value,
                                    "" != o && (i = r(this)))
                                }
                            }
                        }),
                        i && "" != o) {
                            var d = i.attr("data-sf-term-rewrite");
                            if ("" != d) {
                                var p = JSON.parse(d)
                                  , h = i.attr("data-sf-field-input-type");
                                if (n.active_tax = s,
                                "radio" == h || "checkbox" == h) {
                                    var m = !0
                                      , _ = o.split(",").join("+").split("+");
                                    if (_.length > 1 && (m = !1),
                                    m) {
                                        var g = i.find("input[value='" + o + "']")
                                          , v = g.parent()
                                          , x = v.attr("data-sf-depth")
                                          , y = new Array;
                                        y.push(o);
                                        for (var b = x; b > 0; b--)
                                            v = v.parent().parent(),
                                            y.push(v.find("input").val());
                                        y.reverse();
                                        var w = p[x]
                                          , j = w;
                                        r(y).each(function(t, e) {
                                            j = j.replace("[" + t + "]", e)
                                        }),
                                        this.tax_archive_results_url = j
                                    }
                                } else if ("select" == h || "multiselect" == h) {
                                    var m = !0
                                      , _ = o.split(",").join("+").split("+");
                                    if (_.length > 1 && (m = !1),
                                    m) {
                                        var v = i.find("option[value='" + o + "']")
                                          , x = v.attr("data-sf-depth")
                                          , y = new Array;
                                        y.push(o);
                                        for (var b = x; b > 0; b--)
                                            v = v.prevAll("option[data-sf-depth='" + (b - 1) + "']"),
                                            y.push(v.val());
                                        y.reverse();
                                        var w = p[x]
                                          , j = w;
                                        r(y).each(function(t, e) {
                                            j = j.replace("[" + t + "]", e)
                                        }),
                                        this.tax_archive_results_url = j
                                    }
                                }
                            }
                        }
                    }
                },
                getResultsUrl: function(t, e) {
                    return "" == this.tax_archive_results_url ? e : this.tax_archive_results_url
                },
                getUrlParams: function(t) {
                    if (this.buildUrlComponents(t, !0),
                    "" != this.tax_archive_results_url && "" != this.active_tax) {
                        var e = this.active_tax;
                        "undefined" != typeof this.url_params[e] && delete this.url_params[e]
                    }
                    return this.url_params
                },
                clearUrlComponents: function() {
                    this.url_params = {}
                },
                disableInputs: function(t) {
                    t.$fields.each(function() {
                        var t = r(this).find("input, select, .meta-slider");
                        t.attr("disabled", "disabled"),
                        t.attr("disabled", !0),
                        t.prop("disabled", !0),
                        t.trigger("chosen:updated")
                    })
                },
                enableInputs: function(t) {
                    t.$fields.each(function() {
                        var t = r(this).find("input, select, .meta-slider");
                        t.prop("disabled", !0),
                        t.removeAttr("disabled"),
                        t.trigger("chosen:updated")
                    })
                },
                buildUrlComponents: function(t, e) {
                    var a = this;
                    "undefined" != typeof e && 1 == e && this.clearUrlComponents(),
                    t.$fields.each(function() {
                        var t = (r(this).attr("data-sf-field-name"),
                        r(this).attr("data-sf-field-type"));
                        "search" == t ? a.processSearchField(r(this)) : "tag" == t || "category" == t || "taxonomy" == t ? a.processTaxonomy(r(this)) : "sort_order" == t ? a.processSortOrderField(r(this)) : "posts_per_page" == t ? a.processResultsPerPageField(r(this)) : "author" == t ? a.processAuthor(r(this)) : "post_type" == t ? a.processPostType(r(this)) : "post_date" == t ? a.processPostDate(r(this)) : "post_meta" == t && a.processPostMeta(r(this))
                    })
                },
                processSearchField: function(t) {
                    var e = this
                      , r = t.find("input[name^='_sf_search']");
                    if (r.length > 0) {
                        var a = (r.attr("name").replace("[]", ""),
                        r.val());
                        "" != a && (e.url_params._sf_s = encodeURIComponent(a))
                    }
                },
                processSortOrderField: function(t) {
                    this.processAuthor(t)
                },
                processResultsPerPageField: function(t) {
                    this.processAuthor(t)
                },
                getActiveTax: function(t) {
                    return this.active_tax
                },
                getSelectVal: function(t) {
                    var e = "";
                    return 0 != t.val() && (e = t.val()),
                    null == e && (e = ""),
                    e
                },
                getMetaSelectVal: function(t) {
                    var e = "";
                    return e = t.val(),
                    null == e && (e = ""),
                    e
                },
                getMultiSelectVal: function(t, e) {
                    var r = "+";
                    if ("or" == e && (r = ","),
                    "object" == typeof t.val() && null != t.val())
                        return t.val().join(r)
                },
                getMetaMultiSelectVal: function(t, e) {
                    var a = "-+-";
                    if ("or" == e && (a = "-,-"),
                    "object" == typeof t.val() && null != t.val()) {
                        var n = [];
                        return r(t.val()).each(function(t, e) {
                            n.push(e)
                        }),
                        n.join(a)
                    }
                    return ""
                },
                getCheckboxVal: function(t, e) {
                    var a = t.map(function() {
                        if (1 == r(this).prop("checked"))
                            return r(this).val()
                    }).get()
                      , n = "+";
                    return "or" == e && (n = ","),
                    a.join(n)
                },
                getMetaCheckboxVal: function(t, e) {
                    var a = t.map(function() {
                        if (1 == r(this).prop("checked"))
                            return r(this).val()
                    }).get()
                      , n = "-+-";
                    return "or" == e && (n = "-,-"),
                    a.join(n)
                },
                getRadioVal: function(t) {
                    var e = t.map(function() {
                        if (1 == r(this).prop("checked"))
                            return r(this).val()
                    }).get();
                    if (0 != e[0])
                        return e[0]
                },
                getMetaRadioVal: function(t) {
                    var e = t.map(function() {
                        if (1 == r(this).prop("checked"))
                            return r(this).val()
                    }).get();
                    return e[0]
                },
                processAuthor: function(t) {
                    var e, r = this, a = (t.attr("data-sf-field-type"),
                    t.attr("data-sf-field-input-type")), n = "", i = "";
                    if ("select" == a)
                        e = t.find("select"),
                        n = e.attr("name").replace("[]", ""),
                        i = r.getSelectVal(e);
                    else if ("multiselect" == a) {
                        e = t.find("select"),
                        n = e.attr("name").replace("[]", "");
                        e.attr("data-operator");
                        i = r.getMultiSelectVal(e, "or")
                    } else if ("checkbox" == a) {
                        if (e = t.find("ul > li input:checkbox"),
                        e.length > 0) {
                            n = e.attr("name").replace("[]", "");
                            t.find("> ul").attr("data-operator");
                            i = r.getCheckboxVal(e, "or")
                        }
                    } else
                        "radio" == a && (e = t.find("ul > li input:radio"),
                        e.length > 0 && (n = e.attr("name").replace("[]", ""),
                        i = r.getRadioVal(e)));
                    if ("undefined" != typeof i && "" != i) {
                        var s = "";
                        "_sf_author" == n ? s = "authors" : "_sf_sort_order" == n ? s = "sort_order" : "_sf_ppp" == n ? s = "_sf_ppp" : "_sf_post_type" == n && (s = "post_types"),
                        "" != s && (r.url_params[s] = i)
                    }
                },
                processPostType: function(t) {
                    this.processAuthor(t)
                },
                processPostMeta: function(t) {
                    var e, a = this, n = (t.attr("data-sf-field-type"),
                    t.attr("data-sf-field-input-type")), i = t.attr("data-sf-meta-type"), s = "", o = "";
                    if ("number" == i) {
                        if ("range-number" == n) {
                            e = t.find(".sf-meta-range-number input");
                            var l = [];
                            e.each(function() {
                                l.push(r(this).val())
                            }),
                            s = l.join("+")
                        } else if ("range-slider" == n) {
                            e = t.find(".sf-meta-range-slider input");
                            var u = t.find(".sf-meta-range-slider")
                              , c = u.attr("data-decimal-places")
                              , f = u.attr("data-thousand-seperator")
                              , d = u.attr("data-decimal-seperator")
                              , p = wNumb({
                                mark: d,
                                decimals: parseFloat(c),
                                thousand: f
                            })
                              , l = []
                              , h = t.find(".meta-slider")[0]
                              , m = h.noUiSlider.get();
                            l.push(p.from(m[0])),
                            l.push(p.from(m[1])),
                            s = l.join("+"),
                            o = u.attr("data-sf-field-name")
                        } else if ("range-radio" == n) {
                            e = t.find(".sf-input-range-radio"),
                            0 == e.length && (e = t.find("> ul"));
                            var u = t.find(".sf-meta-range");
                            if (e.length > 0) {
                                var _ = [];
                                e.each(function() {
                                    var t = r(this).find(".sf-input-radio");
                                    _.push(a.getMetaRadioVal(t))
                                }),
                                2 == _.length && Number(_[1]) < Number(_[0]) && (_[1] = _[0]),
                                s = _.join("+")
                            }
                            o = 1 == e.length ? e.find(".sf-input-radio").attr("name").replace("[]", "") : u.attr("data-sf-field-name")
                        } else if ("range-select" == n) {
                            e = t.find(".sf-input-select");
                            var u = t.find(".sf-meta-range");
                            if (e.length > 0) {
                                var _ = [];
                                e.each(function() {
                                    var t = r(this);
                                    _.push(a.getMetaSelectVal(t))
                                }),
                                2 == _.length && Number(_[1]) < Number(_[0]) && (_[1] = _[0]),
                                s = _.join("+")
                            }
                            o = 1 == e.length ? e.attr("name").replace("[]", "") : u.attr("data-sf-field-name")
                        } else
                            "range-checkbox" == n && (e = t.find("ul > li input:checkbox"),
                            e.length > 0 && (s = a.getCheckboxVal(e, "and")));
                        "" == o && (o = e.attr("name").replace("[]", ""))
                    } else if ("choice" == i) {
                        if ("select" == n)
                            e = t.find("select"),
                            s = a.getMetaSelectVal(e);
                        else if ("multiselect" == n) {
                            e = t.find("select");
                            var g = e.attr("data-operator");
                            s = a.getMetaMultiSelectVal(e, g)
                        } else if ("checkbox" == n) {
                            if (e = t.find("ul > li input:checkbox"),
                            e.length > 0) {
                                var g = t.find("> ul").attr("data-operator");
                                s = a.getMetaCheckboxVal(e, g);
                            }
                        } else
                            "radio" == n && (e = t.find("ul > li input:radio"),
                            e.length > 0 && (s = a.getMetaRadioVal(e)));
                        s = encodeURIComponent(s),
                        "undefined" != typeof e && e.length > 0 && (o = e.attr("name").replace("[]", ""),
                        o = o)
                    } else
                        "date" == i && a.processPostDate(t);
                    "undefined" != typeof s && "" != s && (a.url_params[encodeURIComponent(o)] = s)
                },
                processPostDate: function(t) {
                    var e, a = this, n = (t.attr("data-sf-field-type"),
                    t.attr("data-sf-field-input-type"),
                    ""), i = "";
                    e = t.find("ul > li input:text"),
                    n = e.attr("name").replace("[]", "");
                    var s = [];
                    if (e.each(function() {
                        s.push(r(this).val())
                    }),
                    2 == e.length ? "" == s[0] && "" == s[1] || (i = s.join("+"),
                    i = i.replace(/\//g, "")) : 1 == e.length && "" != s[0] && (i = s.join("+"),
                    i = i.replace(/\//g, "")),
                    "undefined" != typeof i && "" != i) {
                        var o = "";
                        o = "_sf_post_date" == n ? "post_date" : n,
                        "" != o && (a.url_params[o] = i)
                    }
                },
                processTaxonomy: function(t, e) {
                    "undefined" == typeof e && (e = !1);
                    var r, a = this, n = (t.attr("data-sf-field-type"),
                    t.attr("data-sf-field-input-type")), i = "", s = "";
                    if ("select" == n)
                        r = t.find("select"),
                        i = r.attr("name").replace("[]", ""),
                        s = a.getSelectVal(r);
                    else if ("multiselect" == n) {
                        r = t.find("select"),
                        i = r.attr("name").replace("[]", "");
                        var o = r.attr("data-operator");
                        s = a.getMultiSelectVal(r, o)
                    } else if ("checkbox" == n) {
                        if (r = t.find("ul > li input:checkbox"),
                        r.length > 0) {
                            i = r.attr("name").replace("[]", "");
                            var o = t.find("> ul").attr("data-operator");
                            s = a.getCheckboxVal(r, o)
                        }
                    } else
                        "radio" == n && (r = t.find("ul > li input:radio"),
                        r.length > 0 && (i = r.attr("name").replace("[]", ""),
                        s = a.getRadioVal(r)));
                    if ("undefined" != typeof s && "" != s) {
                        if (1 == e)
                            return {
                                name: i,
                                value: s
                            };
                        a.url_params[i] = s
                    }
                    if (1 == e)
                        return !1
                }
            }
        }
        ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {}],
    8: [function(t, e, r) {
        e.exports = {
            searchForms: {},
            init: function() {},
            addSearchForm: function(t, e) {
                this.searchForms[t] = e
            },
            getSearchForm: function(t) {
                return this.searchForms[t]
            }
        }
    }
    , {}]
}, {}, [1]);

(function() {
    var t, e, s, i, n = function(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    }, r = function(t, e) {
        function s() {
            this.constructor = t
        }
        for (var i in e)
            o.call(e, i) && (t[i] = e[i]);
        return s.prototype = e.prototype,
        t.prototype = new s,
        t.__super__ = e.prototype,
        t
    }, o = {}.hasOwnProperty;
    (i = function() {
        function t() {
            this.options_index = 0,
            this.parsed = []
        }
        return t.prototype.add_node = function(t) {
            return "OPTGROUP" === t.nodeName.toUpperCase() ? this.add_group(t) : this.add_option(t)
        }
        ,
        t.prototype.add_group = function(t) {
            var e, s, i, n, r, o;
            for (e = this.parsed.length,
            this.parsed.push({
                array_index: e,
                group: !0,
                label: t.label,
                title: t.title ? t.title : void 0,
                children: 0,
                disabled: t.disabled,
                classes: t.className
            }),
            o = [],
            s = 0,
            i = (r = t.childNodes).length; s < i; s++)
                n = r[s],
                o.push(this.add_option(n, e, t.disabled));
            return o
        }
        ,
        t.prototype.add_option = function(t, e, s) {
            if ("OPTION" === t.nodeName.toUpperCase())
                return "" !== t.text ? (null != e && (this.parsed[e].children += 1),
                this.parsed.push({
                    array_index: this.parsed.length,
                    options_index: this.options_index,
                    value: t.value,
                    text: t.text,
                    html: t.innerHTML,
                    title: t.title ? t.title : void 0,
                    selected: t.selected,
                    disabled: !0 === s ? s : t.disabled,
                    group_array_index: e,
                    group_label: null != e ? this.parsed[e].label : null,
                    classes: t.className,
                    style: t.style.cssText
                })) : this.parsed.push({
                    array_index: this.parsed.length,
                    options_index: this.options_index,
                    empty: !0
                }),
                this.options_index += 1
        }
        ,
        t
    }()).select_to_array = function(t) {
        var e, s, n, r, o;
        for (r = new i,
        s = 0,
        n = (o = t.childNodes).length; s < n; s++)
            e = o[s],
            r.add_node(e);
        return r.parsed
    }
    ,
    e = function() {
        function t(e, s) {
            this.form_field = e,
            this.options = null != s ? s : {},
            this.label_click_handler = n(this.label_click_handler, this),
            t.browser_is_supported() && (this.is_multiple = this.form_field.multiple,
            this.set_default_text(),
            this.set_default_values(),
            this.setup(),
            this.set_up_html(),
            this.register_observers(),
            this.on_ready())
        }
        return t.prototype.set_default_values = function() {
            return this.click_test_action = function(t) {
                return function(e) {
                    return t.test_active_click(e)
                }
            }(this),
            this.activate_action = function(t) {
                return function(e) {
                    return t.activate_field(e)
                }
            }(this),
            this.active_field = !1,
            this.mouse_on_container = !1,
            this.results_showing = !1,
            this.result_highlighted = null,
            this.is_rtl = this.options.rtl || /\bchosen-rtl\b/.test(this.form_field.className),
            this.allow_single_deselect = null != this.options.allow_single_deselect && null != this.form_field.options[0] && "" === this.form_field.options[0].text && this.options.allow_single_deselect,
            this.disable_search_threshold = this.options.disable_search_threshold || 0,
            this.disable_search = this.options.disable_search || !1,
            this.enable_split_word_search = null == this.options.enable_split_word_search || this.options.enable_split_word_search,
            this.group_search = null == this.options.group_search || this.options.group_search,
            this.search_contains = this.options.search_contains || !1,
            this.single_backstroke_delete = null == this.options.single_backstroke_delete || this.options.single_backstroke_delete,
            this.max_selected_options = this.options.max_selected_options || Infinity,
            this.inherit_select_classes = this.options.inherit_select_classes || !1,
            this.display_selected_options = null == this.options.display_selected_options || this.options.display_selected_options,
            this.display_disabled_options = null == this.options.display_disabled_options || this.options.display_disabled_options,
            this.include_group_label_in_selected = this.options.include_group_label_in_selected || !1,
            this.max_shown_results = this.options.max_shown_results || Number.POSITIVE_INFINITY,
            this.case_sensitive_search = this.options.case_sensitive_search || !1,
            this.hide_results_on_select = null == this.options.hide_results_on_select || this.options.hide_results_on_select
        }
        ,
        t.prototype.set_default_text = function() {
            return this.form_field.getAttribute("data-placeholder") ? this.default_text = this.form_field.getAttribute("data-placeholder") : this.is_multiple ? this.default_text = this.options.placeholder_text_multiple || this.options.placeholder_text || t.default_multiple_text : this.default_text = this.options.placeholder_text_single || this.options.placeholder_text || t.default_single_text,
            this.default_text = this.escape_html(this.default_text),
            this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || t.default_no_result_text
        }
        ,
        t.prototype.choice_label = function(t) {
            return this.include_group_label_in_selected && null != t.group_label ? "<b class='group-name'>" + this.escape_html(t.group_label) + "</b>" + t.html : t.html
        }
        ,
        t.prototype.mouse_enter = function() {
            return this.mouse_on_container = !0
        }
        ,
        t.prototype.mouse_leave = function() {
            return this.mouse_on_container = !1
        }
        ,
        t.prototype.input_focus = function(t) {
            if (this.is_multiple) {
                if (!this.active_field)
                    return setTimeout(function(t) {
                        return function() {
                            return t.container_mousedown()
                        }
                    }(this), 50)
            } else if (!this.active_field)
                return this.activate_field()
        }
        ,
        t.prototype.input_blur = function(t) {
            if (!this.mouse_on_container)
                return this.active_field = !1,
                setTimeout(function(t) {
                    return function() {
                        return t.blur_test()
                    }
                }(this), 100)
        }
        ,
        t.prototype.label_click_handler = function(t) {
            return this.is_multiple ? this.container_mousedown(t) : this.activate_field()
        }
        ,
        t.prototype.results_option_build = function(t) {
            var e, s, i, n, r, o, h;
            for (e = "",
            h = 0,
            n = 0,
            r = (o = this.results_data).length; n < r && (s = o[n],
            i = "",
            "" !== (i = s.group ? this.result_add_group(s) : this.result_add_option(s)) && (h++,
            e += i),
            (null != t ? t.first : void 0) && (s.selected && this.is_multiple ? this.choice_build(s) : s.selected && !this.is_multiple && this.single_set_selected_text(this.choice_label(s))),
            !(h >= this.max_shown_results)); n++)
                ;
            return e
        }
        ,
        t.prototype.result_add_option = function(t) {
            var e, s;
            return t.search_match && this.include_option_in_results(t) ? (e = [],
            t.disabled || t.selected && this.is_multiple || e.push("active-result"),
            !t.disabled || t.selected && this.is_multiple || e.push("disabled-result"),
            t.selected && e.push("result-selected"),
            null != t.group_array_index && e.push("group-option"),
            "" !== t.classes && e.push(t.classes),
            s = document.createElement("li"),
            s.className = e.join(" "),
            t.style && (s.style.cssText = t.style),
            s.setAttribute("data-option-array-index", t.array_index),
            s.innerHTML = t.highlighted_html || t.html,
            t.title && (s.title = t.title),
            this.outerHTML(s)) : ""
        }
        ,
        t.prototype.result_add_group = function(t) {
            var e, s;
            return (t.search_match || t.group_match) && t.active_options > 0 ? ((e = []).push("group-result"),
            t.classes && e.push(t.classes),
            s = document.createElement("li"),
            s.className = e.join(" "),
            s.innerHTML = t.highlighted_html || this.escape_html(t.label),
            t.title && (s.title = t.title),
            this.outerHTML(s)) : ""
        }
        ,
        t.prototype.results_update_field = function() {
            if (this.set_default_text(),
            this.is_multiple || this.results_reset_cleanup(),
            this.result_clear_highlight(),
            this.results_build(),
            this.results_showing)
                return this.winnow_results()
        }
        ,
        t.prototype.reset_single_select_options = function() {
            var t, e, s, i, n;
            for (n = [],
            t = 0,
            e = (s = this.results_data).length; t < e; t++)
                (i = s[t]).selected ? n.push(i.selected = !1) : n.push(void 0);
            return n
        }
        ,
        t.prototype.results_toggle = function() {
            return this.results_showing ? this.results_hide() : this.results_show()
        }
        ,
        t.prototype.results_search = function(t) {
            return this.results_showing ? this.winnow_results() : this.results_show()
        }
        ,
        t.prototype.winnow_results = function(t) {
            var e, s, i, n, r, o, h, l, c, _, a, u, d, p, f;
            for (this.no_results_clear(),
            _ = 0,
            e = (h = this.get_search_text()).replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"),
            c = this.get_search_regex(e),
            i = 0,
            n = (l = this.results_data).length; i < n; i++)
                (r = l[i]).search_match = !1,
                a = null,
                u = null,
                r.highlighted_html = "",
                this.include_option_in_results(r) && (r.group && (r.group_match = !1,
                r.active_options = 0),
                null != r.group_array_index && this.results_data[r.group_array_index] && (0 === (a = this.results_data[r.group_array_index]).active_options && a.search_match && (_ += 1),
                a.active_options += 1),
                f = r.group ? r.label : r.text,
                r.group && !this.group_search || (u = this.search_string_match(f, c),
                r.search_match = null != u,
                r.search_match && !r.group && (_ += 1),
                r.search_match ? (h.length && (d = u.index,
                o = f.slice(0, d),
                s = f.slice(d, d + h.length),
                p = f.slice(d + h.length),
                r.highlighted_html = this.escape_html(o) + "<em>" + this.escape_html(s) + "</em>" + this.escape_html(p)),
                null != a && (a.group_match = !0)) : null != r.group_array_index && this.results_data[r.group_array_index].search_match && (r.search_match = !0)));
            return this.result_clear_highlight(),
            _ < 1 && h.length ? (this.update_results_content(""),
            this.no_results(h)) : (this.update_results_content(this.results_option_build()),
            (null != t ? t.skip_highlight : void 0) ? void 0 : this.winnow_results_set_highlight())
        }
        ,
        t.prototype.get_search_regex = function(t) {
            var e, s;
            return s = this.search_contains ? t : "(^|\\s|\\b)" + t + "[^\\s]*",
            this.enable_split_word_search || this.search_contains || (s = "^" + s),
            e = this.case_sensitive_search ? "" : "i",
            new RegExp(s,e)
        }
        ,
        t.prototype.search_string_match = function(t, e) {
            var s;
            return s = e.exec(t),
            !this.search_contains && (null != s ? s[1] : void 0) && (s.index += 1),
            s
        }
        ,
        t.prototype.choices_count = function() {
            var t, e, s;
            if (null != this.selected_option_count)
                return this.selected_option_count;
            for (this.selected_option_count = 0,
            t = 0,
            e = (s = this.form_field.options).length; t < e; t++)
                s[t].selected && (this.selected_option_count += 1);
            return this.selected_option_count
        }
        ,
        t.prototype.choices_click = function(t) {
            if (t.preventDefault(),
            this.activate_field(),
            !this.results_showing && !this.is_disabled)
                return this.results_show()
        }
        ,
        t.prototype.keydown_checker = function(t) {
            var e, s;
            switch (s = null != (e = t.which) ? e : t.keyCode,
            this.search_field_scale(),
            8 !== s && this.pending_backstroke && this.clear_backstroke(),
            s) {
            case 8:
                this.backstroke_length = this.get_search_field_value().length;
                break;
            case 9:
                this.results_showing && !this.is_multiple && this.result_select(t),
                this.mouse_on_container = !1;
                break;
            case 13:
            case 27:
                this.results_showing && t.preventDefault();
                break;
            case 32:
                this.disable_search && t.preventDefault();
                break;
            case 38:
                t.preventDefault(),
                this.keyup_arrow();
                break;
            case 40:
                t.preventDefault(),
                this.keydown_arrow()
            }
        }
        ,
        t.prototype.keyup_checker = function(t) {
            var e, s;
            switch (s = null != (e = t.which) ? e : t.keyCode,
            this.search_field_scale(),
            s) {
            case 8:
                this.is_multiple && this.backstroke_length < 1 && this.choices_count() > 0 ? this.keydown_backstroke() : this.pending_backstroke || (this.result_clear_highlight(),
                this.results_search());
                break;
            case 13:
                t.preventDefault(),
                this.results_showing && this.result_select(t);
                break;
            case 27:
                this.results_showing && this.results_hide();
                break;
            case 9:
            case 16:
            case 17:
            case 18:
            case 38:
            case 40:
            case 91:
                break;
            default:
                this.results_search()
            }
        }
        ,
        t.prototype.clipboard_event_checker = function(t) {
            if (!this.is_disabled)
                return setTimeout(function(t) {
                    return function() {
                        return t.results_search()
                    }
                }(this), 50)
        }
        ,
        t.prototype.container_width = function() {
            return null != this.options.width ? this.options.width : this.form_field.offsetWidth + "px"
        }
        ,
        t.prototype.include_option_in_results = function(t) {
            return !(this.is_multiple && !this.display_selected_options && t.selected) && (!(!this.display_disabled_options && t.disabled) && !t.empty)
        }
        ,
        t.prototype.search_results_touchstart = function(t) {
            return this.touch_started = !0,
            this.search_results_mouseover(t)
        }
        ,
        t.prototype.search_results_touchmove = function(t) {
            return this.touch_started = !1,
            this.search_results_mouseout(t)
        }
        ,
        t.prototype.search_results_touchend = function(t) {
            if (this.touch_started)
                return this.search_results_mouseup(t)
        }
        ,
        t.prototype.outerHTML = function(t) {
            var e;
            return t.outerHTML ? t.outerHTML : ((e = document.createElement("div")).appendChild(t),
            e.innerHTML)
        }
        ,
        t.prototype.get_single_html = function() {
            return '<a class="chosen-single chosen-default">\n  <span>' + this.default_text + '</span>\n  <div><b></b></div>\n</a>\n<div class="chosen-drop">\n  <div class="chosen-search">\n    <input class="chosen-search-input" type="text" autocomplete="off" />\n  </div>\n  <ul class="chosen-results"></ul>\n</div>'
        }
        ,
        t.prototype.get_multi_html = function() {
            return '<ul class="chosen-choices">\n  <li class="search-field">\n    <input class="chosen-search-input" type="text" autocomplete="off" value="' + this.default_text + '" />\n  </li>\n</ul>\n<div class="chosen-drop">\n  <ul class="chosen-results"></ul>\n</div>'
        }
        ,
        t.prototype.get_no_results_html = function(t) {
            return '<li class="no-results">\n  ' + this.results_none_found + " <span>" + this.escape_html(t) + "</span>\n</li>"
        }
        ,
        t.browser_is_supported = function() {
            return "Microsoft Internet Explorer" === window.navigator.appName ? document.documentMode >= 8 : !(/iP(od|hone)/i.test(window.navigator.userAgent) || /IEMobile/i.test(window.navigator.userAgent) || /Windows Phone/i.test(window.navigator.userAgent) || /BlackBerry/i.test(window.navigator.userAgent) || /BB10/i.test(window.navigator.userAgent) || /Android.*Mobile/i.test(window.navigator.userAgent))
        }
        ,
        t.default_multiple_text = "Select Some Options",
        t.default_single_text = "Select an Option",
        t.default_no_result_text = "No results match",
        t
    }(),
    (t = jQuery).fn.extend({
        chosen: function(i) {
            return e.browser_is_supported() ? this.each(function(e) {
                var n, r;
                r = (n = t(this)).data("chosen"),
                "destroy" !== i ? r instanceof s || n.data("chosen", new s(this,i)) : r instanceof s && r.destroy()
            }) : this
        }
    }),
    s = function(s) {
        function n() {
            return n.__super__.constructor.apply(this, arguments)
        }
        return r(n, e),
        n.prototype.setup = function() {
            return this.form_field_jq = t(this.form_field),
            this.current_selectedIndex = this.form_field.selectedIndex
        }
        ,
        n.prototype.set_up_html = function() {
            var e, s;
            return (e = ["chosen-container"]).push("chosen-container-" + (this.is_multiple ? "multi" : "single")),
            this.inherit_select_classes && this.form_field.className && e.push(this.form_field.className),
            this.is_rtl && e.push("chosen-rtl"),
            s = {
                "class": e.join(" "),
                title: this.form_field.title
            },
            this.form_field.id.length && (s.id = this.form_field.id.replace(/[^\w]/g, "_") + "_chosen"),
            this.container = t("<div />", s),
            this.container.width(this.container_width()),
            this.is_multiple ? this.container.html(this.get_multi_html()) : this.container.html(this.get_single_html()),
            this.form_field_jq.hide().after(this.container),
            this.dropdown = this.container.find("div.chosen-drop").first(),
            this.search_field = this.container.find("input").first(),
            this.search_results = this.container.find("ul.chosen-results").first(),
            this.search_field_scale(),
            this.search_no_results = this.container.find("li.no-results").first(),
            this.is_multiple ? (this.search_choices = this.container.find("ul.chosen-choices").first(),
            this.search_container = this.container.find("li.search-field").first()) : (this.search_container = this.container.find("div.chosen-search").first(),
            this.selected_item = this.container.find(".chosen-single").first()),
            this.results_build(),
            this.set_tab_index(),
            this.set_label_behavior()
        }
        ,
        n.prototype.on_ready = function() {
            return this.form_field_jq.trigger("chosen:ready", {
                chosen: this
            })
        }
        ,
        n.prototype.register_observers = function() {
            return this.container.on("touchstart.chosen", function(t) {
                return function(e) {
                    t.container_mousedown(e)
                }
            }(this)),
            this.container.on("touchend.chosen", function(t) {
                return function(e) {
                    t.container_mouseup(e)
                }
            }(this)),
            this.container.on("mousedown.chosen", function(t) {
                return function(e) {
                    t.container_mousedown(e)
                }
            }(this)),
            this.container.on("mouseup.chosen", function(t) {
                return function(e) {
                    t.container_mouseup(e)
                }
            }(this)),
            this.container.on("mouseenter.chosen", function(t) {
                return function(e) {
                    t.mouse_enter(e)
                }
            }(this)),
            this.container.on("mouseleave.chosen", function(t) {
                return function(e) {
                    t.mouse_leave(e)
                }
            }(this)),
            this.search_results.on("mouseup.chosen", function(t) {
                return function(e) {
                    t.search_results_mouseup(e)
                }
            }(this)),
            this.search_results.on("mouseover.chosen", function(t) {
                return function(e) {
                    t.search_results_mouseover(e)
                }
            }(this)),
            this.search_results.on("mouseout.chosen", function(t) {
                return function(e) {
                    t.search_results_mouseout(e)
                }
            }(this)),
            this.search_results.on("mousewheel.chosen DOMMouseScroll.chosen", function(t) {
                return function(e) {
                    t.search_results_mousewheel(e)
                }
            }(this)),
            this.search_results.on("touchstart.chosen", function(t) {
                return function(e) {
                    t.search_results_touchstart(e)
                }
            }(this)),
            this.search_results.on("touchmove.chosen", function(t) {
                return function(e) {
                    t.search_results_touchmove(e)
                }
            }(this)),
            this.search_results.on("touchend.chosen", function(t) {
                return function(e) {
                    t.search_results_touchend(e)
                }
            }(this)),
            this.form_field_jq.on("chosen:updated.chosen", function(t) {
                return function(e) {
                    t.results_update_field(e)
                }
            }(this)),
            this.form_field_jq.on("chosen:activate.chosen", function(t) {
                return function(e) {
                    t.activate_field(e)
                }
            }(this)),
            this.form_field_jq.on("chosen:open.chosen", function(t) {
                return function(e) {
                    t.container_mousedown(e)
                }
            }(this)),
            this.form_field_jq.on("chosen:close.chosen", function(t) {
                return function(e) {
                    t.close_field(e)
                }
            }(this)),
            this.search_field.on("blur.chosen", function(t) {
                return function(e) {
                    t.input_blur(e)
                }
            }(this)),
            this.search_field.on("keyup.chosen", function(t) {
                return function(e) {
                    t.keyup_checker(e)
                }
            }(this)),
            this.search_field.on("keydown.chosen", function(t) {
                return function(e) {
                    t.keydown_checker(e)
                }
            }(this)),
            this.search_field.on("focus.chosen", function(t) {
                return function(e) {
                    t.input_focus(e)
                }
            }(this)),
            this.search_field.on("cut.chosen", function(t) {
                return function(e) {
                    t.clipboard_event_checker(e)
                }
            }(this)),
            this.search_field.on("paste.chosen", function(t) {
                return function(e) {
                    t.clipboard_event_checker(e)
                }
            }(this)),
            this.is_multiple ? this.search_choices.on("click.chosen", function(t) {
                return function(e) {
                    t.choices_click(e)
                }
            }(this)) : this.container.on("click.chosen", function(t) {
                t.preventDefault()
            })
        }
        ,
        n.prototype.destroy = function() {
            return t(this.container[0].ownerDocument).off("click.chosen", this.click_test_action),
            this.form_field_label.length > 0 && this.form_field_label.off("click.chosen"),
            this.search_field[0].tabIndex && (this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex),
            this.container.remove(),
            this.form_field_jq.removeData("chosen"),
            this.form_field_jq.show()
        }
        ,
        n.prototype.search_field_disabled = function() {
            return this.is_disabled = this.form_field.disabled || this.form_field_jq.parents("fieldset").is(":disabled"),
            this.container.toggleClass("chosen-disabled", this.is_disabled),
            this.search_field[0].disabled = this.is_disabled,
            this.is_multiple || this.selected_item.off("focus.chosen", this.activate_field),
            this.is_disabled ? this.close_field() : this.is_multiple ? void 0 : this.selected_item.on("focus.chosen", this.activate_field)
        }
        ,
        n.prototype.container_mousedown = function(e) {
            var s;
            if (!this.is_disabled)
                return !e || "mousedown" !== (s = e.type) && "touchstart" !== s || this.results_showing || e.preventDefault(),
                null != e && t(e.target).hasClass("search-choice-close") ? void 0 : (this.active_field ? this.is_multiple || !e || t(e.target)[0] !== this.selected_item[0] && !t(e.target).parents("a.chosen-single").length || (e.preventDefault(),
                this.results_toggle()) : (this.is_multiple && this.search_field.val(""),
                t(this.container[0].ownerDocument).on("click.chosen", this.click_test_action),
                this.results_show()),
                this.activate_field())
        }
        ,
        n.prototype.container_mouseup = function(t) {
            if ("ABBR" === t.target.nodeName && !this.is_disabled)
                return this.results_reset(t)
        }
        ,
        n.prototype.search_results_mousewheel = function(t) {
            var e;
            if (t.originalEvent && (e = t.originalEvent.deltaY || -t.originalEvent.wheelDelta || t.originalEvent.detail),
            null != e)
                return t.preventDefault(),
                "DOMMouseScroll" === t.type && (e *= 40),
                this.search_results.scrollTop(e + this.search_results.scrollTop())
        }
        ,
        n.prototype.blur_test = function(t) {
            if (!this.active_field && this.container.hasClass("chosen-container-active"))
                return this.close_field()
        }
        ,
        n.prototype.close_field = function() {
            return t(this.container[0].ownerDocument).off("click.chosen", this.click_test_action),
            this.active_field = !1,
            this.results_hide(),
            this.container.removeClass("chosen-container-active"),
            this.clear_backstroke(),
            this.show_search_field_default(),
            this.search_field_scale(),
            this.search_field.blur()
        }
        ,
        n.prototype.activate_field = function() {
            if (!this.is_disabled)
                return this.container.addClass("chosen-container-active"),
                this.active_field = !0,
                this.search_field.val(this.search_field.val()),
                this.search_field.focus()
        }
        ,
        n.prototype.test_active_click = function(e) {
            var s;
            return (s = t(e.target).closest(".chosen-container")).length && this.container[0] === s[0] ? this.active_field = !0 : this.close_field()
        }
        ,
        n.prototype.results_build = function() {
            return this.parsing = !0,
            this.selected_option_count = null,
            this.results_data = i.select_to_array(this.form_field),
            this.is_multiple ? this.search_choices.find("li.search-choice").remove() : (this.single_set_selected_text(),
            this.disable_search || this.form_field.options.length <= this.disable_search_threshold ? (this.search_field[0].readOnly = !0,
            this.container.addClass("chosen-container-single-nosearch")) : (this.search_field[0].readOnly = !1,
            this.container.removeClass("chosen-container-single-nosearch"))),
            this.update_results_content(this.results_option_build({
                first: !0
            })),
            this.search_field_disabled(),
            this.show_search_field_default(),
            this.search_field_scale(),
            this.parsing = !1
        }
        ,
        n.prototype.result_do_highlight = function(t) {
            var e, s, i, n, r;
            if (t.length) {
                if (this.result_clear_highlight(),
                this.result_highlight = t,
                this.result_highlight.addClass("highlighted"),
                i = parseInt(this.search_results.css("maxHeight"), 10),
                r = this.search_results.scrollTop(),
                n = i + r,
                s = this.result_highlight.position().top + this.search_results.scrollTop(),
                (e = s + this.result_highlight.outerHeight()) >= n)
                    return this.search_results.scrollTop(e - i > 0 ? e - i : 0);
                if (s < r)
                    return this.search_results.scrollTop(s)
            }
        }
        ,
        n.prototype.result_clear_highlight = function() {
            return this.result_highlight && this.result_highlight.removeClass("highlighted"),
            this.result_highlight = null
        }
        ,
        n.prototype.results_show = function() {
            return this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
                chosen: this
            }),
            !1) : (this.container.addClass("chosen-with-drop"),
            this.results_showing = !0,
            this.search_field.focus(),
            this.search_field.val(this.get_search_field_value()),
            this.winnow_results(),
            this.form_field_jq.trigger("chosen:showing_dropdown", {
                chosen: this
            }))
        }
        ,
        n.prototype.update_results_content = function(t) {
            return this.search_results.html(t)
        }
        ,
        n.prototype.results_hide = function() {
            return this.results_showing && (this.result_clear_highlight(),
            this.container.removeClass("chosen-with-drop"),
            this.form_field_jq.trigger("chosen:hiding_dropdown", {
                chosen: this
            })),
            this.results_showing = !1
        }
        ,
        n.prototype.set_tab_index = function(t) {
            var e;
            if (this.form_field.tabIndex)
                return e = this.form_field.tabIndex,
                this.form_field.tabIndex = -1,
                this.search_field[0].tabIndex = e
        }
        ,
        n.prototype.set_label_behavior = function() {
            if (this.form_field_label = this.form_field_jq.parents("label"),
            !this.form_field_label.length && this.form_field.id.length && (this.form_field_label = t("label[for='" + this.form_field.id + "']")),
            this.form_field_label.length > 0)
                return this.form_field_label.on("click.chosen", this.label_click_handler)
        }
        ,
        n.prototype.show_search_field_default = function() {
            return this.is_multiple && this.choices_count() < 1 && !this.active_field ? (this.search_field.val(this.default_text),
            this.search_field.addClass("default")) : (this.search_field.val(""),
            this.search_field.removeClass("default"))
        }
        ,
        n.prototype.search_results_mouseup = function(e) {
            var s;
            if ((s = t(e.target).hasClass("active-result") ? t(e.target) : t(e.target).parents(".active-result").first()).length)
                return this.result_highlight = s,
                this.result_select(e),
                this.search_field.focus()
        }
        ,
        n.prototype.search_results_mouseover = function(e) {
            var s;
            if (s = t(e.target).hasClass("active-result") ? t(e.target) : t(e.target).parents(".active-result").first())
                return this.result_do_highlight(s)
        }
        ,
        n.prototype.search_results_mouseout = function(e) {
            if (t(e.target).hasClass("active-result") || t(e.target).parents(".active-result").first())
                return this.result_clear_highlight()
        }
        ,
        n.prototype.choice_build = function(e) {
            var s, i;
            return s = t("<li />", {
                "class": "search-choice"
            }).html("<span>" + this.choice_label(e) + "</span>"),
            e.disabled ? s.addClass("search-choice-disabled") : ((i = t("<a />", {
                "class": "search-choice-close",
                "data-option-array-index": e.array_index
            })).on("click.chosen", function(t) {
                return function(e) {
                    return t.choice_destroy_link_click(e)
                }
            }(this)),
            s.append(i)),
            this.search_container.before(s)
        }
        ,
        n.prototype.choice_destroy_link_click = function(e) {
            if (e.preventDefault(),
            e.stopPropagation(),
            !this.is_disabled)
                return this.choice_destroy(t(e.target))
        }
        ,
        n.prototype.choice_destroy = function(t) {
            if (this.result_deselect(t[0].getAttribute("data-option-array-index")))
                return this.active_field ? this.search_field.focus() : this.show_search_field_default(),
                this.is_multiple && this.choices_count() > 0 && this.get_search_field_value().length < 1 && this.results_hide(),
                t.parents("li").first().remove(),
                this.search_field_scale()
        }
        ,
        n.prototype.results_reset = function() {
            if (this.reset_single_select_options(),
            this.form_field.options[0].selected = !0,
            this.single_set_selected_text(),
            this.show_search_field_default(),
            this.results_reset_cleanup(),
            this.trigger_form_field_change(),
            this.active_field)
                return this.results_hide()
        }
        ,
        n.prototype.results_reset_cleanup = function() {
            return this.current_selectedIndex = this.form_field.selectedIndex,
            this.selected_item.find("abbr").remove()
        }
        ,
        n.prototype.result_select = function(t) {
            var e, s;
            if (this.result_highlight)
                return e = this.result_highlight,
                this.result_clear_highlight(),
                this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
                    chosen: this
                }),
                !1) : (this.is_multiple ? e.removeClass("active-result") : this.reset_single_select_options(),
                e.addClass("result-selected"),
                s = this.results_data[e[0].getAttribute("data-option-array-index")],
                s.selected = !0,
                this.form_field.options[s.options_index].selected = !0,
                this.selected_option_count = null,
                this.is_multiple ? this.choice_build(s) : this.single_set_selected_text(this.choice_label(s)),
                this.is_multiple && (!this.hide_results_on_select || t.metaKey || t.ctrlKey) ? t.metaKey || t.ctrlKey ? this.winnow_results({
                    skip_highlight: !0
                }) : (this.search_field.val(""),
                this.winnow_results()) : (this.results_hide(),
                this.show_search_field_default()),
                (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) && this.trigger_form_field_change({
                    selected: this.form_field.options[s.options_index].value
                }),
                this.current_selectedIndex = this.form_field.selectedIndex,
                t.preventDefault(),
                this.search_field_scale())
        }
        ,
        n.prototype.single_set_selected_text = function(t) {
            return null == t && (t = this.default_text),
            t === this.default_text ? this.selected_item.addClass("chosen-default") : (this.single_deselect_control_build(),
            this.selected_item.removeClass("chosen-default")),
            this.selected_item.find("span").html(t)
        }
        ,
        n.prototype.result_deselect = function(t) {
            var e;
            return e = this.results_data[t],
            !this.form_field.options[e.options_index].disabled && (e.selected = !1,
            this.form_field.options[e.options_index].selected = !1,
            this.selected_option_count = null,
            this.result_clear_highlight(),
            this.results_showing && this.winnow_results(),
            this.trigger_form_field_change({
                deselected: this.form_field.options[e.options_index].value
            }),
            this.search_field_scale(),
            !0)
        }
        ,
        n.prototype.single_deselect_control_build = function() {
            if (this.allow_single_deselect)
                return this.selected_item.find("abbr").length || this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'),
                this.selected_item.addClass("chosen-single-with-deselect")
        }
        ,
        n.prototype.get_search_field_value = function() {
            return this.search_field.val()
        }
        ,
        n.prototype.get_search_text = function() {
            return t.trim(this.get_search_field_value())
        }
        ,
        n.prototype.escape_html = function(e) {
            return t("<div/>").text(e).html()
        }
        ,
        n.prototype.winnow_results_set_highlight = function() {
            var t, e;
            if (e = this.is_multiple ? [] : this.search_results.find(".result-selected.active-result"),
            null != (t = e.length ? e.first() : this.search_results.find(".active-result").first()))
                return this.result_do_highlight(t)
        }
        ,
        n.prototype.no_results = function(t) {
            var e;
            return e = this.get_no_results_html(t),
            this.search_results.append(e),
            this.form_field_jq.trigger("chosen:no_results", {
                chosen: this
            })
        }
        ,
        n.prototype.no_results_clear = function() {
            return this.search_results.find(".no-results").remove()
        }
        ,
        n.prototype.keydown_arrow = function() {
            var t;
            return this.results_showing && this.result_highlight ? (t = this.result_highlight.nextAll("li.active-result").first()) ? this.result_do_highlight(t) : void 0 : this.results_show()
        }
        ,
        n.prototype.keyup_arrow = function() {
            var t;
            return this.results_showing || this.is_multiple ? this.result_highlight ? (t = this.result_highlight.prevAll("li.active-result")).length ? this.result_do_highlight(t.first()) : (this.choices_count() > 0 && this.results_hide(),
            this.result_clear_highlight()) : void 0 : this.results_show()
        }
        ,
        n.prototype.keydown_backstroke = function() {
            var t;
            return this.pending_backstroke ? (this.choice_destroy(this.pending_backstroke.find("a").first()),
            this.clear_backstroke()) : (t = this.search_container.siblings("li.search-choice").last()).length && !t.hasClass("search-choice-disabled") ? (this.pending_backstroke = t,
            this.single_backstroke_delete ? this.keydown_backstroke() : this.pending_backstroke.addClass("search-choice-focus")) : void 0
        }
        ,
        n.prototype.clear_backstroke = function() {
            return this.pending_backstroke && this.pending_backstroke.removeClass("search-choice-focus"),
            this.pending_backstroke = null
        }
        ,
        n.prototype.search_field_scale = function() {
            var e, s, i, n, r, o, h;
            if (this.is_multiple) {
                for (r = {
                    position: "absolute",
                    left: "-1000px",
                    top: "-1000px",
                    display: "none",
                    whiteSpace: "pre"
                },
                s = 0,
                i = (o = ["fontSize", "fontStyle", "fontWeight", "fontFamily", "lineHeight", "textTransform", "letterSpacing"]).length; s < i; s++)
                    r[n = o[s]] = this.search_field.css(n);
                return (e = t("<div />").css(r)).text(this.get_search_field_value()),
                t("body").append(e),
                h = e.width() + 25,
                e.remove(),
                this.container.is(":visible") && (h = Math.min(this.container.outerWidth() - 10, h)),
                this.search_field.width(h)
            }
        }
        ,
        n.prototype.trigger_form_field_change = function(t) {
            return this.form_field_jq.trigger("input", t),
            this.form_field_jq.trigger("change", t)
        }
        ,
        n
    }()
}
).call(this);
if ("undefined" == typeof jQuery)
    throw new Error("Bootstrap's JavaScript requires jQuery");
+function(a) {
    "use strict";
    var b = a.fn.jquery.split(" ")[0].split(".");
    if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] > 3)
        throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(jQuery),
+function(a) {
    "use strict";
    function b() {
        var a = document.createElement("bootstrap")
          , b = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var c in b)
            if (void 0 !== a.style[c])
                return {
                    end: b[c]
                };
        return !1
    }
    a.fn.emulateTransitionEnd = function(b) {
        var c = !1
          , d = this;
        a(this).one("bsTransitionEnd", function() {
            c = !0
        });
        var e = function() {
            c || a(d).trigger(a.support.transition.end)
        };
        return setTimeout(e, b),
        this
    }
    ,
    a(function() {
        a.support.transition = b(),
        a.support.transition && (a.event.special.bsTransitionEnd = {
            bindType: a.support.transition.end,
            delegateType: a.support.transition.end,
            handle: function(b) {
                if (a(b.target).is(this))
                    return b.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery),
+function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var c = a(this)
              , e = c.data("bs.alert");
            e || c.data("bs.alert", e = new d(this)),
            "string" == typeof b && e[b].call(c)
        })
    }
    var c = '[data-dismiss="alert"]'
      , d = function(b) {
        a(b).on("click", c, this.close)
    };
    d.VERSION = "3.3.7",
    d.TRANSITION_DURATION = 150,
    d.prototype.close = function(b) {
        function c() {
            g.detach().trigger("closed.bs.alert").remove()
        }
        var e = a(this)
          , f = e.attr("data-target");
        f || (f = e.attr("href"),
        f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
        var g = a("#" === f ? [] : f);
        b && b.preventDefault(),
        g.length || (g = e.closest(".alert")),
        g.trigger(b = a.Event("close.bs.alert")),
        b.isDefaultPrevented() || (g.removeClass("in"),
        a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c())
    }
    ;
    var e = a.fn.alert;
    a.fn.alert = b,
    a.fn.alert.Constructor = d,
    a.fn.alert.noConflict = function() {
        return a.fn.alert = e,
        this
    }
    ,
    a(document).on("click.bs.alert.data-api", c, d.prototype.close)
}(jQuery),
+function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this)
              , e = d.data("bs.button")
              , f = "object" == typeof b && b;
            e || d.data("bs.button", e = new c(this,f)),
            "toggle" == b ? e.toggle() : b && e.setState(b)
        })
    }
    var c = function(b, d) {
        this.$element = a(b),
        this.options = a.extend({}, c.DEFAULTS, d),
        this.isLoading = !1
    };
    c.VERSION = "3.3.7",
    c.DEFAULTS = {
        loadingText: "loading..."
    },
    c.prototype.setState = function(b) {
        var c = "disabled"
          , d = this.$element
          , e = d.is("input") ? "val" : "html"
          , f = d.data();
        b += "Text",
        null == f.resetText && d.data("resetText", d[e]()),
        setTimeout(a.proxy(function() {
            d[e](null == f[b] ? this.options[b] : f[b]),
            "loadingText" == b ? (this.isLoading = !0,
            d.addClass(c).attr(c, c).prop(c, !0)) : this.isLoading && (this.isLoading = !1,
            d.removeClass(c).removeAttr(c).prop(c, !1))
        }, this), 0)
    }
    ,
    c.prototype.toggle = function() {
        var a = !0
          , b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
            var c = this.$element.find("input");
            "radio" == c.prop("type") ? (c.prop("checked") && (a = !1),
            b.find(".active").removeClass("active"),
            this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1),
            this.$element.toggleClass("active")),
            c.prop("checked", this.$element.hasClass("active")),
            a && c.trigger("change")
        } else
            this.$element.attr("aria-pressed", !this.$element.hasClass("active")),
            this.$element.toggleClass("active")
    }
    ;
    var d = a.fn.button;
    a.fn.button = b,
    a.fn.button.Constructor = c,
    a.fn.button.noConflict = function() {
        return a.fn.button = d,
        this
    }
    ,
    a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(c) {
        var d = a(c.target).closest(".btn");
        b.call(d, "toggle"),
        a(c.target).is('input[type="radio"], input[type="checkbox"]') || (c.preventDefault(),
        d.is("input,button") ? d.trigger("focus") : d.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(b) {
        a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type))
    })
}(jQuery),
+function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this)
              , e = d.data("bs.carousel")
              , f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b)
              , g = "string" == typeof b ? b : f.slide;
            e || d.data("bs.carousel", e = new c(this,f)),
            "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
        })
    }
    var c = function(b, c) {
        this.$element = a(b),
        this.$indicators = this.$element.find(".carousel-indicators"),
        this.options = c,
        this.paused = null,
        this.sliding = null,
        this.interval = null,
        this.$active = null,
        this.$items = null,
        this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)),
        "hover" == this.options.pause && !("ontouchstart"in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
    };
    c.VERSION = "3.3.7",
    c.TRANSITION_DURATION = 600,
    c.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    },
    c.prototype.keydown = function(a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
            switch (a.which) {
            case 37:
                this.prev();
                break;
            case 39:
                this.next();
                break;
            default:
                return
            }
            a.preventDefault()
        }
    }
    ,
    c.prototype.cycle = function(b) {
        return b || (this.paused = !1),
        this.interval && clearInterval(this.interval),
        this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)),
        this
    }
    ,
    c.prototype.getItemIndex = function(a) {
        return this.$items = a.parent().children(".item"),
        this.$items.index(a || this.$active)
    }
    ,
    c.prototype.getItemForDirection = function(a, b) {
        var c = this.getItemIndex(b)
          , d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;
        if (d && !this.options.wrap)
            return b;
        var e = "prev" == a ? -1 : 1
          , f = (c + e) % this.$items.length;
        return this.$items.eq(f)
    }
    ,
    c.prototype.to = function(a) {
        var b = this
          , c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(a > this.$items.length - 1 || a < 0))
            return this.sliding ? this.$element.one("slid.bs.carousel", function() {
                b.to(a)
            }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a))
    }
    ,
    c.prototype.pause = function(b) {
        return b || (this.paused = !0),
        this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end),
        this.cycle(!0)),
        this.interval = clearInterval(this.interval),
        this
    }
    ,
    c.prototype.next = function() {
        if (!this.sliding)
            return this.slide("next")
    }
    ,
    c.prototype.prev = function() {
        if (!this.sliding)
            return this.slide("prev")
    }
    ,
    c.prototype.slide = function(b, d) {
        var e = this.$element.find(".item.active")
          , f = d || this.getItemForDirection(b, e)
          , g = this.interval
          , h = "next" == b ? "left" : "right"
          , i = this;
        if (f.hasClass("active"))
            return this.sliding = !1;
        var j = f[0]
          , k = a.Event("slide.bs.carousel", {
            relatedTarget: j,
            direction: h
        });
        if (this.$element.trigger(k),
        !k.isDefaultPrevented()) {
            if (this.sliding = !0,
            g && this.pause(),
            this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var l = a(this.$indicators.children()[this.getItemIndex(f)]);
                l && l.addClass("active")
            }
            var m = a.Event("slid.bs.carousel", {
                relatedTarget: j,
                direction: h
            });
            return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b),
            f[0].offsetWidth,
            e.addClass(h),
            f.addClass(h),
            e.one("bsTransitionEnd", function() {
                f.removeClass([b, h].join(" ")).addClass("active"),
                e.removeClass(["active", h].join(" ")),
                i.sliding = !1,
                setTimeout(function() {
                    i.$element.trigger(m)
                }, 0)
            }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"),
            f.addClass("active"),
            this.sliding = !1,
            this.$element.trigger(m)),
            g && this.cycle(),
            this
        }
    }
    ;
    var d = a.fn.carousel;
    a.fn.carousel = b,
    a.fn.carousel.Constructor = c,
    a.fn.carousel.noConflict = function() {
        return a.fn.carousel = d,
        this
    }
    ;
    var e = function(c) {
        var d, e = a(this), f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
        if (f.hasClass("carousel")) {
            var g = a.extend({}, f.data(), e.data())
              , h = e.attr("data-slide-to");
            h && (g.interval = !1),
            b.call(f, g),
            h && f.data("bs.carousel").to(h),
            c.preventDefault()
        }
    };
    a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e),
    a(window).on("load", function() {
        a('[data-ride="carousel"]').each(function() {
            var c = a(this);
            b.call(c, c.data())
        })
    })
}(jQuery),
+function(a) {
    "use strict";
    function b(b) {
        var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
        return a(d)
    }
    function c(b) {
        return this.each(function() {
            var c = a(this)
              , e = c.data("bs.collapse")
              , f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
            !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1),
            e || c.data("bs.collapse", e = new d(this,f)),
            "string" == typeof b && e[b]()
        })
    }
    var d = function(b, c) {
        this.$element = a(b),
        this.options = a.extend({}, d.DEFAULTS, c),
        this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'),
        this.transitioning = null,
        this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
        this.options.toggle && this.toggle()
    };
    d.VERSION = "3.3.7",
    d.TRANSITION_DURATION = 350,
    d.DEFAULTS = {
        toggle: !0
    },
    d.prototype.dimension = function() {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height"
    }
    ,
    d.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(e && e.length && (b = e.data("bs.collapse"),
            b && b.transitioning))) {
                var f = a.Event("show.bs.collapse");
                if (this.$element.trigger(f),
                !f.isDefaultPrevented()) {
                    e && e.length && (c.call(e, "hide"),
                    b || e.data("bs.collapse", null));
                    var g = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0),
                    this.$trigger.removeClass("collapsed").attr("aria-expanded", !0),
                    this.transitioning = 1;
                    var h = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[g](""),
                        this.transitioning = 0,
                        this.$element.trigger("shown.bs.collapse")
                    };
                    if (!a.support.transition)
                        return h.call(this);
                    var i = a.camelCase(["scroll", g].join("-"));
                    this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
                }
            }
        }
    }
    ,
    d.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b),
            !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight,
                this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1),
                this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
                this.transitioning = 1;
                var e = function() {
                    this.transitioning = 0,
                    this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this)
            }
        }
    }
    ,
    d.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }
    ,
    d.prototype.getParent = function() {
        return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function(c, d) {
            var e = a(d);
            this.addAriaAndCollapsedClass(b(e), e)
        }, this)).end()
    }
    ,
    d.prototype.addAriaAndCollapsedClass = function(a, b) {
        var c = a.hasClass("in");
        a.attr("aria-expanded", c),
        b.toggleClass("collapsed", !c).attr("aria-expanded", c)
    }
    ;
    var e = a.fn.collapse;
    a.fn.collapse = c,
    a.fn.collapse.Constructor = d,
    a.fn.collapse.noConflict = function() {
        return a.fn.collapse = e,
        this
    }
    ,
    a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(d) {
        var e = a(this);
        e.attr("data-target") || d.preventDefault();
        var f = b(e)
          , g = f.data("bs.collapse")
          , h = g ? "toggle" : e.data();
        c.call(f, h)
    })
}(jQuery),
+function(a) {
    "use strict";
    function b(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"),
        c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d : b.parent()
    }
    function c(c) {
        c && 3 === c.which || (a(e).remove(),
        a(f).each(function() {
            var d = a(this)
              , e = b(d)
              , f = {
                relatedTarget: this
            };
            e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)),
            c.isDefaultPrevented() || (d.attr("aria-expanded", "false"),
            e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f)))))
        }))
    }
    function d(b) {
        return this.each(function() {
            var c = a(this)
              , d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new g(this)),
            "string" == typeof b && d[b].call(c)
        })
    }
    var e = ".dropdown-backdrop"
      , f = '[data-toggle="dropdown"]'
      , g = function(b) {
        a(b).on("click.bs.dropdown", this.toggle)
    };
    g.VERSION = "3.3.7",
    g.prototype.toggle = function(d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = b(e)
              , g = f.hasClass("open");
            if (c(),
            !g) {
                "ontouchstart"in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);
                var h = {
                    relatedTarget: this
                };
                if (f.trigger(d = a.Event("show.bs.dropdown", h)),
                d.isDefaultPrevented())
                    return;
                e.trigger("focus").attr("aria-expanded", "true"),
                f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h))
            }
            return !1
        }
    }
    ,
    g.prototype.keydown = function(c) {
        if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
            var d = a(this);
            if (c.preventDefault(),
            c.stopPropagation(),
            !d.is(".disabled, :disabled")) {
                var e = b(d)
                  , g = e.hasClass("open");
                if (!g && 27 != c.which || g && 27 == c.which)
                    return 27 == c.which && e.find(f).trigger("focus"),
                    d.trigger("click");
                var h = " li:not(.disabled):visible a"
                  , i = e.find(".dropdown-menu" + h);
                if (i.length) {
                    var j = i.index(c.target);
                    38 == c.which && j > 0 && j--,
                    40 == c.which && j < i.length - 1 && j++,
                    ~j || (j = 0),
                    i.eq(j).trigger("focus")
                }
            }
        }
    }
    ;
    var h = a.fn.dropdown;
    a.fn.dropdown = d,
    a.fn.dropdown.Constructor = g,
    a.fn.dropdown.noConflict = function() {
        return a.fn.dropdown = h,
        this
    }
    ,
    a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
        a.stopPropagation()
    }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown)
}(jQuery),
+function(a) {
    "use strict";
    function b(b, d) {
        return this.each(function() {
            var e = a(this)
              , f = e.data("bs.modal")
              , g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
            f || e.data("bs.modal", f = new c(this,g)),
            "string" == typeof b ? f[b](d) : g.show && f.show(d)
        })
    }
    var c = function(b, c) {
        this.options = c,
        this.$body = a(document.body),
        this.$element = a(b),
        this.$dialog = this.$element.find(".modal-dialog"),
        this.$backdrop = null,
        this.isShown = null,
        this.originalBodyPad = null,
        this.scrollbarWidth = 0,
        this.ignoreBackdropClick = !1,
        this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    c.VERSION = "3.3.7",
    c.TRANSITION_DURATION = 300,
    c.BACKDROP_TRANSITION_DURATION = 150,
    c.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    },
    c.prototype.toggle = function(a) {
        return this.isShown ? this.hide() : this.show(a)
    }
    ,
    c.prototype.show = function(b) {
        var d = this
          , e = a.Event("show.bs.modal", {
            relatedTarget: b
        });
        this.$element.trigger(e),
        this.isShown || e.isDefaultPrevented() || (this.isShown = !0,
        this.checkScrollbar(),
        this.setScrollbar(),
        this.$body.addClass("modal-open"),
        this.escape(),
        this.resize(),
        this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)),
        this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            d.$element.one("mouseup.dismiss.bs.modal", function(b) {
                a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0)
            })
        }),
        this.backdrop(function() {
            var e = a.support.transition && d.$element.hasClass("fade");
            d.$element.parent().length || d.$element.appendTo(d.$body),
            d.$element.show().scrollTop(0),
            d.adjustDialog(),
            e && d.$element[0].offsetWidth,
            d.$element.addClass("in"),
            d.enforceFocus();
            var f = a.Event("shown.bs.modal", {
                relatedTarget: b
            });
            e ? d.$dialog.one("bsTransitionEnd", function() {
                d.$element.trigger("focus").trigger(f)
            }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
        }))
    }
    ,
    c.prototype.hide = function(b) {
        b && b.preventDefault(),
        b = a.Event("hide.bs.modal"),
        this.$element.trigger(b),
        this.isShown && !b.isDefaultPrevented() && (this.isShown = !1,
        this.escape(),
        this.resize(),
        a(document).off("focusin.bs.modal"),
        this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),
        this.$dialog.off("mousedown.dismiss.bs.modal"),
        a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal())
    }
    ,
    c.prototype.enforceFocus = function() {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
            document === a.target || this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
        }, this))
    }
    ,
    c.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function(a) {
            27 == a.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }
    ,
    c.prototype.resize = function() {
        this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
    }
    ,
    c.prototype.hideModal = function() {
        var a = this;
        this.$element.hide(),
        this.backdrop(function() {
            a.$body.removeClass("modal-open"),
            a.resetAdjustments(),
            a.resetScrollbar(),
            a.$element.trigger("hidden.bs.modal")
        })
    }
    ,
    c.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(),
        this.$backdrop = null
    }
    ,
    c.prototype.backdrop = function(b) {
        var d = this
          , e = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var f = a.support.transition && e;
            if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body),
            this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) {
                return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
            }, this)),
            f && this.$backdrop[0].offsetWidth,
            this.$backdrop.addClass("in"),
            !b)
                return;
            f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var g = function() {
                d.removeBackdrop(),
                b && b()
            };
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g()
        } else
            b && b()
    }
    ,
    c.prototype.handleUpdate = function() {
        this.adjustDialog()
    }
    ,
    c.prototype.adjustDialog = function() {
        var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
        })
    }
    ,
    c.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }
    ,
    c.prototype.checkScrollbar = function() {
        var a = window.innerWidth;
        if (!a) {
            var b = document.documentElement.getBoundingClientRect();
            a = b.right - Math.abs(b.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < a,
        this.scrollbarWidth = this.measureScrollbar()
    }
    ,
    c.prototype.setScrollbar = function() {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "",
        this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
    }
    ,
    c.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }
    ,
    c.prototype.measureScrollbar = function() {
        var a = document.createElement("div");
        a.className = "modal-scrollbar-measure",
        this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a),
        b
    }
    ;
    var d = a.fn.modal;
    a.fn.modal = b,
    a.fn.modal.Constructor = c,
    a.fn.modal.noConflict = function() {
        return a.fn.modal = d,
        this
    }
    ,
    a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(c) {
        var d = a(this)
          , e = d.attr("href")
          , f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, ""))
          , g = f.data("bs.modal") ? "toggle" : a.extend({
            remote: !/#/.test(e) && e
        }, f.data(), d.data());
        d.is("a") && c.preventDefault(),
        f.one("show.bs.modal", function(a) {
            a.isDefaultPrevented() || f.one("hidden.bs.modal", function() {
                d.is(":visible") && d.trigger("focus")
            })
        }),
        b.call(f, g, this)
    })
}(jQuery),
+function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this)
              , e = d.data("bs.tooltip")
              , f = "object" == typeof b && b;
            !e && /destroy|hide/.test(b) || (e || d.data("bs.tooltip", e = new c(this,f)),
            "string" == typeof b && e[b]())
        })
    }
    var c = function(a, b) {
        this.type = null,
        this.options = null,
        this.enabled = null,
        this.timeout = null,
        this.hoverState = null,
        this.$element = null,
        this.inState = null,
        this.init("tooltip", a, b)
    };
    c.VERSION = "3.3.7",
    c.TRANSITION_DURATION = 150,
    c.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    },
    c.prototype.init = function(b, c, d) {
        if (this.enabled = !0,
        this.type = b,
        this.$element = a(c),
        this.options = this.getOptions(d),
        this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport),
        this.inState = {
            click: !1,
            hover: !1,
            focus: !1
        },
        this.$element[0]instanceof document.constructor && !this.options.selector)
            throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var e = this.options.trigger.split(" "), f = e.length; f--; ) {
            var g = e[f];
            if ("click" == g)
                this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
            else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter" : "focusin"
                  , i = "hover" == g ? "mouseleave" : "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)),
                this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = a.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }
    ,
    c.prototype.getDefaults = function() {
        return c.DEFAULTS
    }
    ,
    c.prototype.getOptions = function(b) {
        return b = a.extend({}, this.getDefaults(), this.$element.data(), b),
        b.delay && "number" == typeof b.delay && (b.delay = {
            show: b.delay,
            hide: b.delay
        }),
        b
    }
    ,
    c.prototype.getDelegateOptions = function() {
        var b = {}
          , c = this.getDefaults();
        return this._options && a.each(this._options, function(a, d) {
            c[a] != d && (b[a] = d)
        }),
        b
    }
    ,
    c.prototype.enter = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget,this.getDelegateOptions()),
        a(b.currentTarget).data("bs." + this.type, c)),
        b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0),
        c.tip().hasClass("in") || "in" == c.hoverState ? void (c.hoverState = "in") : (clearTimeout(c.timeout),
        c.hoverState = "in",
        c.options.delay && c.options.delay.show ? void (c.timeout = setTimeout(function() {
            "in" == c.hoverState && c.show()
        }, c.options.delay.show)) : c.show())
    }
    ,
    c.prototype.isInStateTrue = function() {
        for (var a in this.inState)
            if (this.inState[a])
                return !0;
        return !1
    }
    ,
    c.prototype.leave = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        if (c || (c = new this.constructor(b.currentTarget,this.getDelegateOptions()),
        a(b.currentTarget).data("bs." + this.type, c)),
        b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1),
        !c.isInStateTrue())
            return clearTimeout(c.timeout),
            c.hoverState = "out",
            c.options.delay && c.options.delay.hide ? void (c.timeout = setTimeout(function() {
                "out" == c.hoverState && c.hide()
            }, c.options.delay.hide)) : c.hide()
    }
    ,
    c.prototype.show = function() {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(b);
            var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (b.isDefaultPrevented() || !d)
                return;
            var e = this
              , f = this.tip()
              , g = this.getUID(this.type);
            this.setContent(),
            f.attr("id", g),
            this.$element.attr("aria-describedby", g),
            this.options.animation && f.addClass("fade");
            var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement
              , i = /\s?auto?\s?/i
              , j = i.test(h);
            j && (h = h.replace(i, "") || "top"),
            f.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(h).data("bs." + this.type, this),
            this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element),
            this.$element.trigger("inserted.bs." + this.type);
            var k = this.getPosition()
              , l = f[0].offsetWidth
              , m = f[0].offsetHeight;
            if (j) {
                var n = h
                  , o = this.getPosition(this.$viewport);
                h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h,
                f.removeClass(n).addClass(h)
            }
            var p = this.getCalculatedOffset(h, k, l, m);
            this.applyPlacement(p, h);
            var q = function() {
                var a = e.hoverState;
                e.$element.trigger("shown.bs." + e.type),
                e.hoverState = null,
                "out" == a && e.leave(e)
            };
            a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q()
        }
    }
    ,
    c.prototype.applyPlacement = function(b, c) {
        var d = this.tip()
          , e = d[0].offsetWidth
          , f = d[0].offsetHeight
          , g = parseInt(d.css("margin-top"), 10)
          , h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0),
        isNaN(h) && (h = 0),
        b.top += g,
        b.left += h,
        a.offset.setOffset(d[0], a.extend({
            using: function(a) {
                d.css({
                    top: Math.round(a.top),
                    left: Math.round(a.left)
                })
            }
        }, b), 0),
        d.addClass("in");
        var i = d[0].offsetWidth
          , j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? b.left += k.left : b.top += k.top;
        var l = /top|bottom/.test(c)
          , m = l ? 2 * k.left - e + i : 2 * k.top - f + j
          , n = l ? "offsetWidth" : "offsetHeight";
        d.offset(b),
        this.replaceArrow(m, d[0][n], l)
    }
    ,
    c.prototype.replaceArrow = function(a, b, c) {
        this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "")
    }
    ,
    c.prototype.setContent = function() {
        var a = this.tip()
          , b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b),
        a.removeClass("fade in top bottom left right")
    }
    ,
    c.prototype.hide = function(b) {
        function d() {
            "in" != e.hoverState && f.detach(),
            e.$element && e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type),
            b && b()
        }
        var e = this
          , f = a(this.$tip)
          , g = a.Event("hide.bs." + this.type);
        if (this.$element.trigger(g),
        !g.isDefaultPrevented())
            return f.removeClass("in"),
            a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(),
            this.hoverState = null,
            this
    }
    ,
    c.prototype.fixTitle = function() {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
    }
    ,
    c.prototype.hasContent = function() {
        return this.getTitle()
    }
    ,
    c.prototype.getPosition = function(b) {
        b = b || this.$element;
        var c = b[0]
          , d = "BODY" == c.tagName
          , e = c.getBoundingClientRect();
        null == e.width && (e = a.extend({}, e, {
            width: e.right - e.left,
            height: e.bottom - e.top
        }));
        var f = window.SVGElement && c instanceof window.SVGElement
          , g = d ? {
            top: 0,
            left: 0
        } : f ? null : b.offset()
          , h = {
            scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()
        }
          , i = d ? {
            width: a(window).width(),
            height: a(window).height()
        } : null;
        return a.extend({}, e, h, i, g)
    }
    ,
    c.prototype.getCalculatedOffset = function(a, b, c, d) {
        return "bottom" == a ? {
            top: b.top + b.height,
            left: b.left + b.width / 2 - c / 2
        } : "top" == a ? {
            top: b.top - d,
            left: b.left + b.width / 2 - c / 2
        } : "left" == a ? {
            top: b.top + b.height / 2 - d / 2,
            left: b.left - c
        } : {
            top: b.top + b.height / 2 - d / 2,
            left: b.left + b.width
        }
    }
    ,
    c.prototype.getViewportAdjustedDelta = function(a, b, c, d) {
        var e = {
            top: 0,
            left: 0
        };
        if (!this.$viewport)
            return e;
        var f = this.options.viewport && this.options.viewport.padding || 0
          , g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
            var h = b.top - f - g.scroll
              , i = b.top + f - g.scroll + d;
            h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
        } else {
            var j = b.left - f
              , k = b.left + f + c;
            j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k)
        }
        return e
    }
    ,
    c.prototype.getTitle = function() {
        var a, b = this.$element, c = this.options;
        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
    }
    ,
    c.prototype.getUID = function(a) {
        do
            a += ~~(1e6 * Math.random());
        while (document.getElementById(a));return a
    }
    ,
    c.prototype.tip = function() {
        if (!this.$tip && (this.$tip = a(this.options.template),
        1 != this.$tip.length))
            throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }
    ,
    c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }
    ,
    c.prototype.enable = function() {
        this.enabled = !0
    }
    ,
    c.prototype.disable = function() {
        this.enabled = !1
    }
    ,
    c.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }
    ,
    c.prototype.toggle = function(b) {
        var c = this;
        b && (c = a(b.currentTarget).data("bs." + this.type),
        c || (c = new this.constructor(b.currentTarget,this.getDelegateOptions()),
        a(b.currentTarget).data("bs." + this.type, c))),
        b ? (c.inState.click = !c.inState.click,
        c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
    }
    ,
    c.prototype.destroy = function() {
        var a = this;
        clearTimeout(this.timeout),
        this.hide(function() {
            a.$element.off("." + a.type).removeData("bs." + a.type),
            a.$tip && a.$tip.detach(),
            a.$tip = null,
            a.$arrow = null,
            a.$viewport = null,
            a.$element = null
        })
    }
    ;
    var d = a.fn.tooltip;
    a.fn.tooltip = b,
    a.fn.tooltip.Constructor = c,
    a.fn.tooltip.noConflict = function() {
        return a.fn.tooltip = d,
        this
    }
}(jQuery),
+function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this)
              , e = d.data("bs.popover")
              , f = "object" == typeof b && b;
            !e && /destroy|hide/.test(b) || (e || d.data("bs.popover", e = new c(this,f)),
            "string" == typeof b && e[b]())
        })
    }
    var c = function(a, b) {
        this.init("popover", a, b)
    };
    if (!a.fn.tooltip)
        throw new Error("Popover requires tooltip.js");
    c.VERSION = "3.3.7",
    c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }),
    c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype),
    c.prototype.constructor = c,
    c.prototype.getDefaults = function() {
        return c.DEFAULTS
    }
    ,
    c.prototype.setContent = function() {
        var a = this.tip()
          , b = this.getTitle()
          , c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b),
        a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c),
        a.removeClass("fade top bottom left right in"),
        a.find(".popover-title").html() || a.find(".popover-title").hide()
    }
    ,
    c.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }
    ,
    c.prototype.getContent = function() {
        var a = this.$element
          , b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
    }
    ,
    c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }
    ;
    var d = a.fn.popover;
    a.fn.popover = b,
    a.fn.popover.Constructor = c,
    a.fn.popover.noConflict = function() {
        return a.fn.popover = d,
        this
    }
}(jQuery),
+function(a) {
    "use strict";
    function b(c, d) {
        this.$body = a(document.body),
        this.$scrollElement = a(a(c).is(document.body) ? window : c),
        this.options = a.extend({}, b.DEFAULTS, d),
        this.selector = (this.options.target || "") + " .nav li > a",
        this.offsets = [],
        this.targets = [],
        this.activeTarget = null,
        this.scrollHeight = 0,
        this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)),
        this.refresh(),
        this.process()
    }
    function c(c) {
        return this.each(function() {
            var d = a(this)
              , e = d.data("bs.scrollspy")
              , f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this,f)),
            "string" == typeof c && e[c]()
        })
    }
    b.VERSION = "3.3.7",
    b.DEFAULTS = {
        offset: 10
    },
    b.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }
    ,
    b.prototype.refresh = function() {
        var b = this
          , c = "offset"
          , d = 0;
        this.offsets = [],
        this.targets = [],
        this.scrollHeight = this.getScrollHeight(),
        a.isWindow(this.$scrollElement[0]) || (c = "position",
        d = this.$scrollElement.scrollTop()),
        this.$body.find(this.selector).map(function() {
            var b = a(this)
              , e = b.data("target") || b.attr("href")
              , f = /^#./.test(e) && a(e);
            return f && f.length && f.is(":visible") && [[f[c]().top + d, e]] || null
        }).sort(function(a, b) {
            return a[0] - b[0]
        }).each(function() {
            b.offsets.push(this[0]),
            b.targets.push(this[1])
        })
    }
    ,
    b.prototype.process = function() {
        var a, b = this.$scrollElement.scrollTop() + this.options.offset, c = this.getScrollHeight(), d = this.options.offset + c - this.$scrollElement.height(), e = this.offsets, f = this.targets, g = this.activeTarget;
        if (this.scrollHeight != c && this.refresh(),
        b >= d)
            return g != (a = f[f.length - 1]) && this.activate(a);
        if (g && b < e[0])
            return this.activeTarget = null,
            this.clear();
        for (a = e.length; a--; )
            g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a])
    }
    ,
    b.prototype.activate = function(b) {
        this.activeTarget = b,
        this.clear();
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]'
          , d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")),
        d.trigger("activate.bs.scrollspy")
    }
    ,
    b.prototype.clear = function() {
        a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    }
    ;
    var d = a.fn.scrollspy;
    a.fn.scrollspy = c,
    a.fn.scrollspy.Constructor = b,
    a.fn.scrollspy.noConflict = function() {
        return a.fn.scrollspy = d,
        this
    }
    ,
    a(window).on("load.bs.scrollspy.data-api", function() {
        a('[data-spy="scroll"]').each(function() {
            var b = a(this);
            c.call(b, b.data())
        })
    })
}(jQuery),
+function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this)
              , e = d.data("bs.tab");
            e || d.data("bs.tab", e = new c(this)),
            "string" == typeof b && e[b]()
        })
    }
    var c = function(b) {
        this.element = a(b)
    };
    c.VERSION = "3.3.7",
    c.TRANSITION_DURATION = 150,
    c.prototype.show = function() {
        var b = this.element
          , c = b.closest("ul:not(.dropdown-menu)")
          , d = b.data("target");
        if (d || (d = b.attr("href"),
        d = d && d.replace(/.*(?=#[^\s]*$)/, "")),
        !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a")
              , f = a.Event("hide.bs.tab", {
                relatedTarget: b[0]
            })
              , g = a.Event("show.bs.tab", {
                relatedTarget: e[0]
            });
            if (e.trigger(f),
            b.trigger(g),
            !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
                var h = a(d);
                this.activate(b.closest("li"), c),
                this.activate(h, h.parent(), function() {
                    e.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: b[0]
                    }),
                    b.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: e[0]
                    })
                })
            }
        }
    }
    ,
    c.prototype.activate = function(b, d, e) {
        function f() {
            g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1),
            b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0),
            h ? (b[0].offsetWidth,
            b.addClass("in")) : b.removeClass("fade"),
            b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0),
            e && e()
        }
        var g = d.find("> .active")
          , h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
        g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(),
        g.removeClass("in")
    }
    ;
    var d = a.fn.tab;
    a.fn.tab = b,
    a.fn.tab.Constructor = c,
    a.fn.tab.noConflict = function() {
        return a.fn.tab = d,
        this
    }
    ;
    var e = function(c) {
        c.preventDefault(),
        b.call(a(this), "show")
    };
    a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
}(jQuery),
+function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this)
              , e = d.data("bs.affix")
              , f = "object" == typeof b && b;
            e || d.data("bs.affix", e = new c(this,f)),
            "string" == typeof b && e[b]()
        })
    }
    var c = function(b, d) {
        this.options = a.extend({}, c.DEFAULTS, d),
        this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)),
        this.$element = a(b),
        this.affixed = null,
        this.unpin = null,
        this.pinnedOffset = null,
        this.checkPosition()
    };
    c.VERSION = "3.3.7",
    c.RESET = "affix affix-top affix-bottom",
    c.DEFAULTS = {
        offset: 0,
        target: window
    },
    c.prototype.getState = function(a, b, c, d) {
        var e = this.$target.scrollTop()
          , f = this.$element.offset()
          , g = this.$target.height();
        if (null != c && "top" == this.affixed)
            return e < c && "top";
        if ("bottom" == this.affixed)
            return null != c ? !(e + this.unpin <= f.top) && "bottom" : !(e + g <= a - d) && "bottom";
        var h = null == this.affixed
          , i = h ? e : f.top
          , j = h ? g : b;
        return null != c && e <= c ? "top" : null != d && i + j >= a - d && "bottom"
    }
    ,
    c.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset)
            return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var a = this.$target.scrollTop()
          , b = this.$element.offset();
        return this.pinnedOffset = b.top - a
    }
    ,
    c.prototype.checkPositionWithEventLoop = function() {
        setTimeout(a.proxy(this.checkPosition, this), 1)
    }
    ,
    c.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var b = this.$element.height()
              , d = this.options.offset
              , e = d.top
              , f = d.bottom
              , g = Math.max(a(document).height(), a(document.body).height());
            "object" != typeof d && (f = e = d),
            "function" == typeof e && (e = d.top(this.$element)),
            "function" == typeof f && (f = d.bottom(this.$element));
            var h = this.getState(g, b, e, f);
            if (this.affixed != h) {
                null != this.unpin && this.$element.css("top", "");
                var i = "affix" + (h ? "-" + h : "")
                  , j = a.Event(i + ".bs.affix");
                if (this.$element.trigger(j),
                j.isDefaultPrevented())
                    return;
                this.affixed = h,
                this.unpin = "bottom" == h ? this.getPinnedOffset() : null,
                this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == h && this.$element.offset({
                top: g - b - f
            })
        }
    }
    ;
    var d = a.fn.affix;
    a.fn.affix = b,
    a.fn.affix.Constructor = c,
    a.fn.affix.noConflict = function() {
        return a.fn.affix = d,
        this
    }
    ,
    a(window).on("load", function() {
        a('[data-spy="affix"]').each(function() {
            var c = a(this)
              , d = c.data();
            d.offset = d.offset || {},
            null != d.offsetBottom && (d.offset.bottom = d.offsetBottom),
            null != d.offsetTop && (d.offset.top = d.offsetTop),
            b.call(c, d)
        })
    })
}(jQuery);
!function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery)
}(function(a) {
    var b, c = navigator.userAgent, d = /iphone/i.test(c), e = /chrome/i.test(c), f = /android/i.test(c);
    a.mask = {
        definitions: {
            9: "[0-9]",
            a: "[A-Za-z]",
            "*": "[A-Za-z0-9]"
        },
        autoclear: !0,
        dataName: "rawMaskFn",
        placeholder: "_"
    },
    a.fn.extend({
        caret: function(a, b) {
            var c;
            if (0 !== this.length && !this.is(":hidden"))
                return "number" == typeof a ? (b = "number" == typeof b ? b : a,
                this.each(function() {
                    this.setSelectionRange ? this.setSelectionRange(a, b) : this.createTextRange && (c = this.createTextRange(),
                    c.collapse(!0),
                    c.moveEnd("character", b),
                    c.moveStart("character", a),
                    c.select())
                })) : (this[0].setSelectionRange ? (a = this[0].selectionStart,
                b = this[0].selectionEnd) : document.selection && document.selection.createRange && (c = document.selection.createRange(),
                a = 0 - c.duplicate().moveStart("character", -1e5),
                b = a + c.text.length),
                {
                    begin: a,
                    end: b
                })
        },
        unmask: function() {
            return this.trigger("unmask")
        },
        mask: function(c, g) {
            var h, i, j, k, l, m, n, o;
            if (!c && this.length > 0) {
                h = a(this[0]);
                var p = h.data(a.mask.dataName);
                return p ? p() : void 0
            }
            return g = a.extend({
                autoclear: a.mask.autoclear,
                placeholder: a.mask.placeholder,
                completed: null
            }, g),
            i = a.mask.definitions,
            j = [],
            k = n = c.length,
            l = null,
            a.each(c.split(""), function(a, b) {
                "?" == b ? (n--,
                k = a) : i[b] ? (j.push(new RegExp(i[b])),
                null === l && (l = j.length - 1),
                k > a && (m = j.length - 1)) : j.push(null)
            }),
            this.trigger("unmask").each(function() {
                function h() {
                    if (g.completed) {
                        for (var a = l; m >= a; a++)
                            if (j[a] && C[a] === p(a))
                                return;
                        g.completed.call(B)
                    }
                }
                function p(a) {
                    return g.placeholder.charAt(a < g.placeholder.length ? a : 0)
                }
                function q(a) {
                    for (; ++a < n && !j[a]; )
                        ;
                    return a
                }
                function r(a) {
                    for (; --a >= 0 && !j[a]; )
                        ;
                    return a
                }
                function s(a, b) {
                    var c, d;
                    if (!(0 > a)) {
                        for (c = a,
                        d = q(b); n > c; c++)
                            if (j[c]) {
                                if (!(n > d && j[c].test(C[d])))
                                    break;
                                C[c] = C[d],
                                C[d] = p(d),
                                d = q(d)
                            }
                        z(),
                        B.caret(Math.max(l, a))
                    }
                }
                function t(a) {
                    var b, c, d, e;
                    for (b = a,
                    c = p(a); n > b; b++)
                        if (j[b]) {
                            if (d = q(b),
                            e = C[b],
                            C[b] = c,
                            !(n > d && j[d].test(e)))
                                break;
                            c = e
                        }
                }
                function u() {
                    var a = B.val()
                      , b = B.caret();
                    if (o && o.length && o.length > a.length) {
                        for (A(!0); b.begin > 0 && !j[b.begin - 1]; )
                            b.begin--;
                        if (0 === b.begin)
                            for (; b.begin < l && !j[b.begin]; )
                                b.begin++;
                        B.caret(b.begin, b.begin)
                    } else {
                        for (A(!0); b.begin < n && !j[b.begin]; )
                            b.begin++;
                        B.caret(b.begin, b.begin)
                    }
                    h()
                }
                function v() {
                    A(),
                    B.val() != E && B.change()
                }
                function w(a) {
                    if (!B.prop("readonly")) {
                        var b, c, e, f = a.which || a.keyCode;
                        o = B.val(),
                        8 === f || 46 === f || d && 127 === f ? (b = B.caret(),
                        c = b.begin,
                        e = b.end,
                        e - c === 0 && (c = 46 !== f ? r(c) : e = q(c - 1),
                        e = 46 === f ? q(e) : e),
                        y(c, e),
                        s(c, e - 1),
                        a.preventDefault()) : 13 === f ? v.call(this, a) : 27 === f && (B.val(E),
                        B.caret(0, A()),
                        a.preventDefault())
                    }
                }
                function x(b) {
                    if (!B.prop("readonly")) {
                        var c, d, e, g = b.which || b.keyCode, i = B.caret();
                        if (!(b.ctrlKey || b.altKey || b.metaKey || 32 > g) && g && 13 !== g) {
                            if (i.end - i.begin !== 0 && (y(i.begin, i.end),
                            s(i.begin, i.end - 1)),
                            c = q(i.begin - 1),
                            n > c && (d = String.fromCharCode(g),
                            j[c].test(d))) {
                                if (t(c),
                                C[c] = d,
                                z(),
                                e = q(c),
                                f) {
                                    var k = function() {
                                        a.proxy(a.fn.caret, B, e)()
                                    };
                                    setTimeout(k, 0)
                                } else
                                    B.caret(e);
                                i.begin <= m && h()
                            }
                            b.preventDefault()
                        }
                    }
                }
                function y(a, b) {
                    var c;
                    for (c = a; b > c && n > c; c++)
                        j[c] && (C[c] = p(c))
                }
                function z() {
                    B.val(C.join(""))
                }
                function A(a) {
                    var b, c, d, e = B.val(), f = -1;
                    for (b = 0,
                    d = 0; n > b; b++)
                        if (j[b]) {
                            for (C[b] = p(b); d++ < e.length; )
                                if (c = e.charAt(d - 1),
                                j[b].test(c)) {
                                    C[b] = c,
                                    f = b;
                                    break
                                }
                            if (d > e.length) {
                                y(b + 1, n);
                                break
                            }
                        } else
                            C[b] === e.charAt(d) && d++,
                            k > b && (f = b);
                    return a ? z() : k > f + 1 ? g.autoclear || C.join("") === D ? (B.val() && B.val(""),
                    y(0, n)) : z() : (z(),
                    B.val(B.val().substring(0, f + 1))),
                    k ? b : l
                }
                var B = a(this)
                  , C = a.map(c.split(""), function(a, b) {
                    return "?" != a ? i[a] ? p(b) : a : void 0
                })
                  , D = C.join("")
                  , E = B.val();
                B.data(a.mask.dataName, function() {
                    return a.map(C, function(a, b) {
                        return j[b] && a != p(b) ? a : null
                    }).join("")
                }),
                B.one("unmask", function() {
                    B.off(".mask").removeData(a.mask.dataName)
                }).on("focus.mask", function() {
                    if (!B.prop("readonly")) {
                        clearTimeout(b);
                        var a;
                        E = B.val(),
                        a = A(),
                        b = setTimeout(function() {
                            B.get(0) === document.activeElement && (z(),
                            a == c.replace("?", "").length ? B.caret(0, a) : B.caret(a))
                        }, 10)
                    }
                }).on("blur.mask", v).on("keydown.mask", w).on("keypress.mask", x).on("input.mask paste.mask", function() {
                    B.prop("readonly") || setTimeout(function() {
                        var a = A(!0);
                        B.caret(a),
                        h()
                    }, 0)
                }),
                e && f && B.off("input.mask").on("input.mask", u),
                A()
            })
        }
    })
});
!function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? a(require("jquery")) : a(jQuery)
}(function(a) {
    function b(a) {
        return h.raw ? a : encodeURIComponent(a)
    }
    function c(a) {
        return h.raw ? a : decodeURIComponent(a)
    }
    function d(a) {
        return b(h.json ? JSON.stringify(a) : String(a))
    }
    function e(a) {
        0 === a.indexOf('"') && (a = a.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return a = decodeURIComponent(a.replace(g, " ")),
            h.json ? JSON.parse(a) : a
        } catch (b) {}
    }
    function f(b, c) {
        var d = h.raw ? b : e(b);
        return a.isFunction(c) ? c(d) : d
    }
    var g = /\+/g
      , h = a.cookie = function(e, g, i) {
        if (void 0 !== g && !a.isFunction(g)) {
            if (i = a.extend({}, h.defaults, i),
            "number" == typeof i.expires) {
                var j = i.expires
                  , k = i.expires = new Date;
                k.setTime(+k + 864e5 * j)
            }
            return document.cookie = [b(e), "=", d(g), i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : ""].join("")
        }
        for (var l = e ? void 0 : {}, m = document.cookie ? document.cookie.split("; ") : [], n = 0, o = m.length; o > n; n++) {
            var p = m[n].split("=")
              , q = c(p.shift())
              , r = p.join("=");
            if (e && e === q) {
                l = f(r, g);
                break
            }
            e || void 0 === (r = f(r)) || (l[q] = r)
        }
        return l
    }
    ;
    h.defaults = {},
    a.removeCookie = function(b, c) {
        return void 0 === a.cookie(b) ? !1 : (a.cookie(b, "", a.extend({}, c, {
            expires: -1
        })),
        !a.cookie(b))
    }
});
!function(t, e, n, o) {
    "use strict";
    function i(t, e) {
        var o, i, a = [], s = 0;
        t && t.isDefaultPrevented() || (t.preventDefault(),
        e = t && t.data ? t.data.options : e || {},
        o = e.$target || n(t.currentTarget),
        i = o.attr("data-fancybox") || "",
        i ? (a = e.selector ? n(e.selector) : t.data ? t.data.items : [],
        a = a.length ? a.filter('[data-fancybox="' + i + '"]') : n('[data-fancybox="' + i + '"]'),
        s = a.index(o),
        s < 0 && (s = 0)) : a = [o],
        n.fancybox.open(a, e, s))
    }
    if (t.console = t.console || {
        info: function(t) {}
    },
    n) {
        if (n.fn.fancybox)
            return void console.info("fancyBox already initialized");
        var a = {
            loop: !1,
            gutter: 50,
            keyboard: !0,
            arrows: !0,
            infobar: !0,
            smallBtn: "auto",
            toolbar: "auto",
            buttons: ["zoom", "thumbs", "close"],
            idleTime: 3,
            protect: !1,
            modal: !1,
            image: {
                preload: !1
            },
            ajax: {
                settings: {
                    data: {
                        fancybox: !0
                    }
                }
            },
            iframe: {
                tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',
                preload: !0,
                css: {},
                attr: {
                    scrolling: "auto"
                }
            },
            defaultType: "image",
            animationEffect: "zoom",
            animationDuration: 366,
            zoomOpacity: "auto",
            transitionEffect: "fade",
            transitionDuration: 366,
            slideClass: "",
            baseClass: "",
            baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"></div></div></div>',
            spinnerTpl: '<div class="fancybox-loading"></div>',
            errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
            btnTpl: {
                download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg viewBox="0 0 40 40"><path d="M13,16 L20,23 L27,16 M20,7 L20,23 M10,24 L10,28 L30,28 L30,24" /></svg></a>',
                zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg viewBox="0 0 40 40"><path d="M18,17 m-8,0 a8,8 0 1,0 16,0 a8,8 0 1,0 -16,0 M24,22 L31,29" /></svg></button>',
                close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg viewBox="0 0 40 40"><path d="M10,10 L30,30 M30,10 L10,30" /></svg></button>',
                smallBtn: '<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"><svg viewBox="0 0 32 32"><path d="M10,10 L22,22 M22,10 L10,22"></path></svg></button>',
                arrowLeft: '<a data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}" href="javascript:;"><svg viewBox="0 0 40 40"><path d="M18,12 L10,20 L18,28 M10,20 L30,20"></path></svg></a>',
                arrowRight: '<a data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}" href="javascript:;"><svg viewBox="0 0 40 40"><path d="M10,20 L30,20 M22,12 L30,20 L22,28"></path></svg></a>'
            },
            parentEl: "body",
            autoFocus: !1,
            backFocus: !0,
            trapFocus: !0,
            fullScreen: {
                autoStart: !1
            },
            touch: {
                vertical: !0,
                momentum: !0
            },
            hash: null,
            media: {},
            slideShow: {
                autoStart: !1,
                speed: 4e3
            },
            thumbs: {
                autoStart: !1,
                hideOnClose: !0,
                parentEl: ".fancybox-container",
                axis: "y"
            },
            wheel: "auto",
            onInit: n.noop,
            beforeLoad: n.noop,
            afterLoad: n.noop,
            beforeShow: n.noop,
            afterShow: n.noop,
            beforeClose: n.noop,
            afterClose: n.noop,
            onActivate: n.noop,
            onDeactivate: n.noop,
            clickContent: function(t, e) {
                return "image" === t.type && "zoom"
            },
            clickSlide: "close",
            clickOutside: "close",
            dblclickContent: !1,
            dblclickSlide: !1,
            dblclickOutside: !1,
            mobile: {
                idleTime: !1,
                clickContent: function(t, e) {
                    return "image" === t.type && "toggleControls"
                },
                clickSlide: function(t, e) {
                    return "image" === t.type ? "toggleControls" : "close"
                },
                dblclickContent: function(t, e) {
                    return "image" === t.type && "zoom"
                },
                dblclickSlide: function(t, e) {
                    return "image" === t.type && "zoom"
                }
            },
            lang: "en",
            i18n: {
                en: {
                    CLOSE: "Close",
                    NEXT: "Next",
                    PREV: "Previous",
                    ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                    PLAY_START: "Start slideshow",
                    PLAY_STOP: "Pause slideshow",
                    FULL_SCREEN: "Full screen",
                    THUMBS: "Thumbnails",
                    DOWNLOAD: "Download",
                    SHARE: "Share",
                    ZOOM: "Zoom"
                },
                de: {
                    CLOSE: "Schliessen",
                    NEXT: "Weiter",
                    PREV: "Zurück",
                    ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.",
                    PLAY_START: "Diaschau starten",
                    PLAY_STOP: "Diaschau beenden",
                    FULL_SCREEN: "Vollbild",
                    THUMBS: "Vorschaubilder",
                    DOWNLOAD: "Herunterladen",
                    SHARE: "Teilen",
                    ZOOM: "Maßstab"
                }
            }
        }
          , s = n(t)
          , r = n(e)
          , c = 0
          , l = function(t) {
            return t && t.hasOwnProperty && t instanceof n
        }
          , d = function() {
            return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function(e) {
                return t.setTimeout(e, 1e3 / 60)
            }
        }()
          , u = function() {
            var t, n = e.createElement("fakeelement"), i = {
                transition: "transitionend",
                OTransition: "oTransitionEnd",
                MozTransition: "transitionend",
                WebkitTransition: "webkitTransitionEnd"
            };
            for (t in i)
                if (n.style[t] !== o)
                    return i[t];
            return "transitionend"
        }()
          , f = function(t) {
            return t && t.length && t[0].offsetHeight
        }
          , p = function(t, e) {
            var o = n.extend(!0, {}, t, e);
            return n.each(e, function(t, e) {
                n.isArray(e) && (o[t] = e)
            }),
            o
        }
          , h = function(t, o, i) {
            var a = this;
            a.opts = p({
                index: i
            }, n.fancybox.defaults),
            n.isPlainObject(o) && (a.opts = p(a.opts, o)),
            n.fancybox.isMobile && (a.opts = p(a.opts, a.opts.mobile)),
            a.id = a.opts.id || ++c,
            a.currIndex = parseInt(a.opts.index, 10) || 0,
            a.prevIndex = null,
            a.prevPos = null,
            a.currPos = 0,
            a.firstRun = !0,
            a.group = [],
            a.slides = {},
            a.addContent(t),
            a.group.length && (a.$lastFocus = n(e.activeElement).trigger("blur"),
            a.init())
        };
        n.extend(h.prototype, {
            init: function() {
                var i, a, s, r = this, c = r.group[r.currIndex], l = c.opts, d = n.fancybox.scrollbarWidth;
                n.fancybox.getInstance() || l.hideScrollbar === !1 || (n("body").addClass("fancybox-active"),
                !n.fancybox.isMobile && e.body.scrollHeight > t.innerHeight && (d === o && (i = n('<div style="width:100px;height:100px;overflow:scroll;" />').appendTo("body"),
                d = n.fancybox.scrollbarWidth = i[0].offsetWidth - i[0].clientWidth,
                i.remove()),
                n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar { margin-right: ' + d + "px; }</style>"),
                n("body").addClass("compensate-for-scrollbar"))),
                s = "",
                n.each(l.buttons, function(t, e) {
                    s += l.btnTpl[e] || ""
                }),
                a = n(r.translate(r, l.baseTpl.replace("{{buttons}}", s).replace("{{arrows}}", l.btnTpl.arrowLeft + l.btnTpl.arrowRight))).attr("id", "fancybox-container-" + r.id).addClass("fancybox-is-hidden").addClass(l.baseClass).data("FancyBox", r).appendTo(l.parentEl),
                r.$refs = {
                    container: a
                },
                ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function(t) {
                    r.$refs[t] = a.find(".fancybox-" + t)
                }),
                r.trigger("onInit"),
                r.activate(),
                r.jumpTo(r.currIndex)
            },
            translate: function(t, e) {
                var n = t.opts.i18n[t.opts.lang];
                return e.replace(/\{\{(\w+)\}\}/g, function(t, e) {
                    var i = n[e];
                    return i === o ? t : i
                })
            },
            addContent: function(t) {
                var e, i = this, a = n.makeArray(t);
                n.each(a, function(t, e) {
                    var a, s, r, c, l, d = {}, u = {};
                    n.isPlainObject(e) ? (d = e,
                    u = e.opts || e) : "object" === n.type(e) && n(e).length ? (a = n(e),
                    u = a.data() || {},
                    u = n.extend(!0, {}, u, u.options),
                    u.$orig = a,
                    d.src = i.opts.src || u.src || a.attr("href"),
                    d.type || d.src || (d.type = "inline",
                    d.src = e)) : d = {
                        type: "html",
                        src: e + ""
                    },
                    d.opts = n.extend(!0, {}, i.opts, u),
                    n.isArray(u.buttons) && (d.opts.buttons = u.buttons),
                    s = d.type || d.opts.type,
                    c = d.src || "",
                    !s && c && ((r = c.match(/\.(mp4|mov|ogv)((\?|#).*)?$/i)) ? (s = "video",
                    d.opts.videoFormat || (d.opts.videoFormat = "video/" + ("ogv" === r[1] ? "ogg" : r[1]))) : c.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? s = "image" : c.match(/\.(pdf)((\?|#).*)?$/i) ? s = "iframe" : "#" === c.charAt(0) && (s = "inline")),
                    s ? d.type = s : i.trigger("objectNeedsType", d),
                    d.contentType || (d.contentType = n.inArray(d.type, ["html", "inline", "ajax"]) > -1 ? "html" : d.type),
                    d.index = i.group.length,
                    "auto" == d.opts.smallBtn && (d.opts.smallBtn = n.inArray(d.type, ["html", "inline", "ajax"]) > -1),
                    "auto" === d.opts.toolbar && (d.opts.toolbar = !d.opts.smallBtn),
                    d.opts.$trigger && d.index === i.opts.index && (d.opts.$thumb = d.opts.$trigger.find("img:first")),
                    d.opts.$thumb && d.opts.$thumb.length || !d.opts.$orig || (d.opts.$thumb = d.opts.$orig.find("img:first")),
                    "function" === n.type(d.opts.caption) && (d.opts.caption = d.opts.caption.apply(e, [i, d])),
                    "function" === n.type(i.opts.caption) && (d.opts.caption = i.opts.caption.apply(e, [i, d])),
                    d.opts.caption instanceof n || (d.opts.caption = d.opts.caption === o ? "" : d.opts.caption + ""),
                    "ajax" === d.type && (l = c.split(/\s+/, 2),
                    l.length > 1 && (d.src = l.shift(),
                    d.opts.filter = l.shift())),
                    d.opts.modal && (d.opts = n.extend(!0, d.opts, {
                        infobar: 0,
                        toolbar: 0,
                        smallBtn: 0,
                        keyboard: 0,
                        slideShow: 0,
                        fullScreen: 0,
                        thumbs: 0,
                        touch: 0,
                        clickContent: !1,
                        clickSlide: !1,
                        clickOutside: !1,
                        dblclickContent: !1,
                        dblclickSlide: !1,
                        dblclickOutside: !1
                    })),
                    i.group.push(d)
                }),
                Object.keys(i.slides).length && (i.updateControls(),
                e = i.Thumbs,
                e && e.isActive && (e.create(),
                e.focus()))
            },
            addEvents: function() {
                var o = this;
                o.removeEvents(),
                o.$refs.container.on("click.fb-close", "[data-fancybox-close]", function(t) {
                    t.stopPropagation(),
                    t.preventDefault(),
                    o.close(t)
                }).on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function(t) {
                    t.stopPropagation(),
                    t.preventDefault(),
                    o.previous()
                }).on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function(t) {
                    t.stopPropagation(),
                    t.preventDefault(),
                    o.next()
                }).on("click.fb", "[data-fancybox-zoom]", function(t) {
                    o[o.isScaledDown() ? "scaleToActual" : "scaleToFit"]()
                }),
                s.on("orientationchange.fb resize.fb", function(t) {
                    t && t.originalEvent && "resize" === t.originalEvent.type ? d(function() {
                        o.update()
                    }) : (o.$refs.stage.hide(),
                    setTimeout(function() {
                        o.$refs.stage.show(),
                        o.update()
                    }, n.fancybox.isMobile ? 600 : 250))
                }),
                r.on("focusin.fb", function(t) {
                    var o = n.fancybox ? n.fancybox.getInstance() : null;
                    o.isClosing || !o.current || !o.current.opts.trapFocus || n(t.target).hasClass("fancybox-container") || n(t.target).is(e) || o && "fixed" !== n(t.target).css("position") && !o.$refs.container.has(t.target).length && (t.stopPropagation(),
                    o.focus())
                }),
                r.on("keydown.fb", function(t) {
                    var e = o.current
                      , i = t.keyCode || t.which;
                    if (e && e.opts.keyboard && !(t.ctrlKey || t.altKey || t.shiftKey || n(t.target).is("input") || n(t.target).is("textarea")))
                        return 8 === i || 27 === i ? (t.preventDefault(),
                        void o.close(t)) : 37 === i || 38 === i ? (t.preventDefault(),
                        void o.previous()) : 39 === i || 40 === i ? (t.preventDefault(),
                        void o.next()) : void o.trigger("afterKeydown", t, i)
                }),
                o.group[o.currIndex].opts.idleTime && (o.idleSecondsCounter = 0,
                r.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function(t) {
                    o.idleSecondsCounter = 0,
                    o.isIdle && o.showControls(),
                    o.isIdle = !1
                }),
                o.idleInterval = t.setInterval(function() {
                    o.idleSecondsCounter++,
                    o.idleSecondsCounter >= o.group[o.currIndex].opts.idleTime && !o.isDragging && (o.isIdle = !0,
                    o.idleSecondsCounter = 0,
                    o.hideControls())
                }, 1e3))
            },
            removeEvents: function() {
                var e = this;
                s.off("orientationchange.fb resize.fb"),
                r.off("focusin.fb keydown.fb .fb-idle"),
                this.$refs.container.off(".fb-close .fb-prev .fb-next"),
                e.idleInterval && (t.clearInterval(e.idleInterval),
                e.idleInterval = null)
            },
            previous: function(t) {
                return this.jumpTo(this.currPos - 1, t)
            },
            next: function(t) {
                return this.jumpTo(this.currPos + 1, t)
            },
            jumpTo: function(t, e) {
                var i, a, s, r, c, l, d, u = this, p = u.group.length;
                if (!(u.isDragging || u.isClosing || u.isAnimating && u.firstRun)) {
                    if (t = parseInt(t, 10),
                    a = u.current ? u.current.opts.loop : u.opts.loop,
                    !a && (t < 0 || t >= p))
                        return !1;
                    if (i = u.firstRun = !Object.keys(u.slides).length,
                    !(p < 2 && !i && u.isDragging)) {
                        if (r = u.current,
                        u.prevIndex = u.currIndex,
                        u.prevPos = u.currPos,
                        s = u.createSlide(t),
                        p > 1 && ((a || s.index > 0) && u.createSlide(t - 1),
                        (a || s.index < p - 1) && u.createSlide(t + 1)),
                        u.current = s,
                        u.currIndex = s.index,
                        u.currPos = s.pos,
                        u.trigger("beforeShow", i),
                        u.updateControls(),
                        l = n.fancybox.getTranslate(s.$slide),
                        s.isMoved = (0 !== l.left || 0 !== l.top) && !s.$slide.hasClass("fancybox-animated"),
                        s.forcedDuration = o,
                        n.isNumeric(e) ? s.forcedDuration = e : e = s.opts[i ? "animationDuration" : "transitionDuration"],
                        e = parseInt(e, 10),
                        i)
                            return s.opts.animationEffect && e && u.$refs.container.css("transition-duration", e + "ms"),
                            u.$refs.container.removeClass("fancybox-is-hidden"),
                            f(u.$refs.container),
                            u.$refs.container.addClass("fancybox-is-open"),
                            f(u.$refs.container),
                            s.$slide.addClass("fancybox-slide--previous"),
                            u.loadSlide(s),
                            s.$slide.removeClass("fancybox-slide--previous").addClass("fancybox-slide--current"),
                            void u.preload("image");
                        n.each(u.slides, function(t, e) {
                            n.fancybox.stop(e.$slide)
                        }),
                        s.$slide.removeClass("fancybox-slide--next fancybox-slide--previous").addClass("fancybox-slide--current"),
                        s.isMoved ? (c = Math.round(s.$slide.width()),
                        n.each(u.slides, function(t, o) {
                            var i = o.pos - s.pos;
                            n.fancybox.animate(o.$slide, {
                                top: 0,
                                left: i * c + i * o.opts.gutter
                            }, e, function() {
                                o.$slide.removeAttr("style").removeClass("fancybox-slide--next fancybox-slide--previous"),
                                o.pos === u.currPos && (s.isMoved = !1,
                                u.complete())
                            })
                        })) : u.$refs.stage.children().removeAttr("style"),
                        s.isLoaded ? u.revealContent(s) : u.loadSlide(s),
                        u.preload("image"),
                        r.pos !== s.pos && (d = "fancybox-slide--" + (r.pos > s.pos ? "next" : "previous"),
                        r.$slide.removeClass("fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous"),
                        r.isComplete = !1,
                        e && (s.isMoved || s.opts.transitionEffect) && (s.isMoved ? r.$slide.addClass(d) : (d = "fancybox-animated " + d + " fancybox-fx-" + s.opts.transitionEffect,
                        n.fancybox.animate(r.$slide, d, e, function() {
                            r.$slide.removeClass(d).removeAttr("style")
                        }))))
                    }
                }
            },
            createSlide: function(t) {
                var e, o, i = this;
                return o = t % i.group.length,
                o = o < 0 ? i.group.length + o : o,
                !i.slides[t] && i.group[o] && (e = n('<div class="fancybox-slide"></div>').appendTo(i.$refs.stage),
                i.slides[t] = n.extend(!0, {}, i.group[o], {
                    pos: t,
                    $slide: e,
                    isLoaded: !1
                }),
                i.updateSlide(i.slides[t])),
                i.slides[t]
            },
            scaleToActual: function(t, e, i) {
                var a, s, r, c, l, d = this, u = d.current, f = u.$content, p = n.fancybox.getTranslate(u.$slide).width, h = n.fancybox.getTranslate(u.$slide).height, g = u.width, b = u.height;
                !d.isAnimating && f && "image" == u.type && u.isLoaded && !u.hasError && (n.fancybox.stop(f),
                d.isAnimating = !0,
                t = t === o ? .5 * p : t,
                e = e === o ? .5 * h : e,
                a = n.fancybox.getTranslate(f),
                a.top -= n.fancybox.getTranslate(u.$slide).top,
                a.left -= n.fancybox.getTranslate(u.$slide).left,
                c = g / a.width,
                l = b / a.height,
                s = .5 * p - .5 * g,
                r = .5 * h - .5 * b,
                g > p && (s = a.left * c - (t * c - t),
                s > 0 && (s = 0),
                s < p - g && (s = p - g)),
                b > h && (r = a.top * l - (e * l - e),
                r > 0 && (r = 0),
                r < h - b && (r = h - b)),
                d.updateCursor(g, b),
                n.fancybox.animate(f, {
                    top: r,
                    left: s,
                    scaleX: c,
                    scaleY: l
                }, i || 330, function() {
                    d.isAnimating = !1
                }),
                d.SlideShow && d.SlideShow.isActive && d.SlideShow.stop())
            },
            scaleToFit: function(t) {
                var e, o = this, i = o.current, a = i.$content;
                !o.isAnimating && a && "image" == i.type && i.isLoaded && !i.hasError && (n.fancybox.stop(a),
                o.isAnimating = !0,
                e = o.getFitPos(i),
                o.updateCursor(e.width, e.height),
                n.fancybox.animate(a, {
                    top: e.top,
                    left: e.left,
                    scaleX: e.width / a.width(),
                    scaleY: e.height / a.height()
                }, t || 330, function() {
                    o.isAnimating = !1
                }))
            },
            getFitPos: function(t) {
                var e, n, o, i, a, s = this, r = t.$content, c = t.width || t.opts.width, l = t.height || t.opts.height, d = {};
                return !!(t.isLoaded && r && r.length) && (i = {
                    top: parseInt(t.$slide.css("paddingTop"), 10),
                    right: parseInt(t.$slide.css("paddingRight"), 10),
                    bottom: parseInt(t.$slide.css("paddingBottom"), 10),
                    left: parseInt(t.$slide.css("paddingLeft"), 10)
                },
                e = parseInt(s.$refs.stage.width(), 10) - (i.left + i.right),
                n = parseInt(s.$refs.stage.height(), 10) - (i.top + i.bottom),
                c && l || (c = e,
                l = n),
                o = Math.min(1, e / c, n / l),
                c = Math.floor(o * c),
                l = Math.floor(o * l),
                "image" === t.type ? (d.top = Math.floor(.5 * (n - l)) + i.top,
                d.left = Math.floor(.5 * (e - c)) + i.left) : "video" === t.contentType && (a = t.opts.width && t.opts.height ? c / l : t.opts.ratio || 16 / 9,
                l > c / a ? l = c / a : c > l * a && (c = l * a)),
                d.width = c,
                d.height = l,
                d)
            },
            update: function() {
                var t = this;
                n.each(t.slides, function(e, n) {
                    t.updateSlide(n)
                })
            },
            updateSlide: function(t, e) {
                var o = this
                  , i = t && t.$content
                  , a = t.width || t.opts.width
                  , s = t.height || t.opts.height;
                i && (a || s || "video" === t.contentType) && !t.hasError && (n.fancybox.stop(i),
                n.fancybox.setTranslate(i, o.getFitPos(t)),
                t.pos === o.currPos && (o.isAnimating = !1,
                o.updateCursor())),
                t.$slide.trigger("refresh"),
                o.$refs.toolbar.toggleClass("compensate-for-scrollbar", t.$slide.get(0).scrollHeight > t.$slide.get(0).clientHeight),
                o.trigger("onUpdate", t)
            },
            centerSlide: function(t, e) {
                var i, a, s = this;
                s.current && (i = Math.round(t.$slide.width()),
                a = t.pos - s.current.pos,
                n.fancybox.animate(t.$slide, {
                    top: 0,
                    left: a * i + a * t.opts.gutter,
                    opacity: 1
                }, e === o ? 0 : e, null, !1))
            },
            updateCursor: function(t, e) {
                var o, i = this, a = i.current, s = i.$refs.container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-drag fancybox-can-zoomOut");
                a && !i.isClosing && (o = i.isZoomable(),
                s.toggleClass("fancybox-is-zoomable", o),
                n("[data-fancybox-zoom]").prop("disabled", !o),
                o && ("zoom" === a.opts.clickContent || n.isFunction(a.opts.clickContent) && "zoom" === a.opts.clickContent(a)) ? i.isScaledDown(t, e) ? s.addClass("fancybox-can-zoomIn") : a.opts.touch ? s.addClass("fancybox-can-drag") : s.addClass("fancybox-can-zoomOut") : a.opts.touch && "video" !== a.contentType && s.addClass("fancybox-can-drag"))
            },
            isZoomable: function() {
                var t, e = this, n = e.current;
                if (n && !e.isClosing && "image" === n.type && !n.hasError) {
                    if (!n.isLoaded)
                        return !0;
                    if (t = e.getFitPos(n),
                    n.width > t.width || n.height > t.height)
                        return !0
                }
                return !1
            },
            isScaledDown: function(t, e) {
                var i = this
                  , a = !1
                  , s = i.current
                  , r = s.$content;
                return t !== o && e !== o ? a = t < s.width && e < s.height : r && (a = n.fancybox.getTranslate(r),
                a = a.width < s.width && a.height < s.height),
                a
            },
            canPan: function() {
                var t, e = this, n = !1, o = e.current;
                return "image" === o.type && (t = o.$content) && !o.hasError && (n = e.getFitPos(o),
                n = Math.abs(t.width() - n.width) > 1 || Math.abs(t.height() - n.height) > 1),
                n
            },
            loadSlide: function(t) {
                var e, o, i, a = this;
                if (!t.isLoading && !t.isLoaded) {
                    switch (t.isLoading = !0,
                    a.trigger("beforeLoad", t),
                    e = t.type,
                    o = t.$slide,
                    o.off("refresh").trigger("onReset").addClass(t.opts.slideClass),
                    e) {
                    case "image":
                        a.setImage(t);
                        break;
                    case "iframe":
                        a.setIframe(t);
                        break;
                    case "html":
                        a.setContent(t, t.src || t.content);
                        break;
                    case "video":
                        a.setContent(t, '<video class="fancybox-video" controls controlsList="nodownload"><source src="' + t.src + '" type="' + t.opts.videoFormat + "\">Your browser doesn't support HTML5 video</video");
                        break;
                    case "inline":
                        n(t.src).length ? a.setContent(t, n(t.src)) : a.setError(t);
                        break;
                    case "ajax":
                        a.showLoading(t),
                        i = n.ajax(n.extend({}, t.opts.ajax.settings, {
                            url: t.src,
                            success: function(e, n) {
                                "success" === n && a.setContent(t, e)
                            },
                            error: function(e, n) {
                                e && "abort" !== n && a.setError(t)
                            }
                        })),
                        o.one("onReset", function() {
                            i.abort()
                        });
                        break;
                    default:
                        a.setError(t)
                    }
                    return !0
                }
            },
            setImage: function(e) {
                var o, i, a, s, r, c = this, l = e.opts.srcset || e.opts.image.srcset;
                if (e.timouts = setTimeout(function() {
                    var t = e.$image;
                    !e.isLoading || t && t[0].complete || e.hasError || c.showLoading(e)
                }, 350),
                l) {
                    s = t.devicePixelRatio || 1,
                    r = t.innerWidth * s,
                    a = l.split(",").map(function(t) {
                        var e = {};
                        return t.trim().split(/\s+/).forEach(function(t, n) {
                            var o = parseInt(t.substring(0, t.length - 1), 10);
                            return 0 === n ? e.url = t : void (o && (e.value = o,
                            e.postfix = t[t.length - 1]))
                        }),
                        e
                    }),
                    a.sort(function(t, e) {
                        return t.value - e.value
                    });
                    for (var d = 0; d < a.length; d++) {
                        var u = a[d];
                        if ("w" === u.postfix && u.value >= r || "x" === u.postfix && u.value >= s) {
                            i = u;
                            break
                        }
                    }
                    !i && a.length && (i = a[a.length - 1]),
                    i && (e.src = i.url,
                    e.width && e.height && "w" == i.postfix && (e.height = e.width / e.height * i.value,
                    e.width = i.value),
                    e.opts.srcset = l)
                }
                e.$content = n('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(e.$slide.addClass("fancybox-slide--image")),
                o = e.opts.thumb || !(!e.opts.$thumb || !e.opts.$thumb.length) && e.opts.$thumb.attr("src"),
                e.opts.preload !== !1 && e.opts.width && e.opts.height && o && (e.width = e.opts.width,
                e.height = e.opts.height,
                e.$ghost = n("<img />").one("error", function() {
                    n(this).remove(),
                    e.$ghost = null
                }).one("load", function() {
                    c.afterLoad(e)
                }).addClass("fancybox-image").appendTo(e.$content).attr("src", o)),
                c.setBigImage(e)
            },
            setBigImage: function(t) {
                var e = this
                  , o = n("<img />");
                t.$image = o.one("error", function() {
                    e.setError(t)
                }).one("load", function() {
                    var n;
                    t.$ghost || (e.resolveImageSlideSize(t, this.naturalWidth, this.naturalHeight),
                    e.afterLoad(t)),
                    t.timouts && (clearTimeout(t.timouts),
                    t.timouts = null),
                    e.isClosing || (t.opts.srcset && (n = t.opts.sizes,
                    n && "auto" !== n || (n = (t.width / t.height > 1 && s.width() / s.height() > 1 ? "100" : Math.round(t.width / t.height * 100)) + "vw"),
                    o.attr("sizes", n).attr("srcset", t.opts.srcset)),
                    t.$ghost && setTimeout(function() {
                        t.$ghost && !e.isClosing && t.$ghost.hide()
                    }, Math.min(300, Math.max(1e3, t.height / 1600))),
                    e.hideLoading(t))
                }).addClass("fancybox-image").attr("src", t.src).appendTo(t.$content),
                (o[0].complete || "complete" == o[0].readyState) && o[0].naturalWidth && o[0].naturalHeight ? o.trigger("load") : o[0].error && o.trigger("error")
            },
            resolveImageSlideSize: function(t, e, n) {
                var o = parseInt(t.opts.width, 10)
                  , i = parseInt(t.opts.height, 10);
                t.width = e,
                t.height = n,
                o > 0 && (t.width = o,
                t.height = Math.floor(o * n / e)),
                i > 0 && (t.width = Math.floor(i * e / n),
                t.height = i)
            },
            setIframe: function(t) {
                var e, i = this, a = t.opts.iframe, s = t.$slide;
                t.$content = n('<div class="fancybox-content' + (a.preload ? " fancybox-is-hidden" : "") + '"></div>').css(a.css).appendTo(s),
                s.addClass("fancybox-slide--" + t.contentType),
                t.$iframe = e = n(a.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr(a.attr).appendTo(t.$content),
                a.preload ? (i.showLoading(t),
                e.on("load.fb error.fb", function(e) {
                    this.isReady = 1,
                    t.$slide.trigger("refresh"),
                    i.afterLoad(t)
                }),
                s.on("refresh.fb", function() {
                    var n, i, s = t.$content, r = a.css.width, c = a.css.height;
                    if (1 === e[0].isReady) {
                        try {
                            n = e.contents(),
                            i = n.find("body")
                        } catch (t) {}
                        i && i.length && i.children().length && (s.css({
                            width: "",
                            height: ""
                        }),
                        r === o && (r = Math.ceil(Math.max(i[0].clientWidth, i.outerWidth(!0)))),
                        r && s.width(r),
                        c === o && (c = Math.ceil(Math.max(i[0].clientHeight, i.outerHeight(!0)))),
                        c && s.height(c)),
                        s.removeClass("fancybox-is-hidden")
                    }
                })) : this.afterLoad(t),
                e.attr("src", t.src),
                s.one("onReset", function() {
                    try {
                        n(this).find("iframe").hide().unbind().attr("src", "//about:blank")
                    } catch (t) {}
                    n(this).off("refresh.fb").empty(),
                    t.isLoaded = !1
                })
            },
            setContent: function(t, e) {
                var o = this;
                o.isClosing || (o.hideLoading(t),
                t.$content && n.fancybox.stop(t.$content),
                t.$slide.empty(),
                l(e) && e.parent().length ? (e.parent().parent(".fancybox-slide--inline").trigger("onReset"),
                t.$placeholder = n("<div>").hide().insertAfter(e),
                e.css("display", "inline-block")) : t.hasError || ("string" === n.type(e) && (e = n("<div>").append(n.trim(e)).contents(),
                3 === e[0].nodeType && (e = n("<div>").html(e))),
                t.opts.filter && (e = n("<div>").html(e).find(t.opts.filter))),
                t.$slide.one("onReset", function() {
                    n(this).find("video,audio").trigger("pause"),
                    t.$placeholder && (t.$placeholder.after(e.hide()).remove(),
                    t.$placeholder = null),
                    t.$smallBtn && (t.$smallBtn.remove(),
                    t.$smallBtn = null),
                    t.hasError || (n(this).empty(),
                    t.isLoaded = !1)
                }),
                n(e).appendTo(t.$slide),
                n(e).is("video,audio") && (n(e).addClass("fancybox-video"),
                n(e).wrap("<div></div>"),
                t.contentType = "video",
                t.opts.width = t.opts.width || n(e).attr("width"),
                t.opts.height = t.opts.height || n(e).attr("height")),
                t.$content = t.$slide.children().filter("div,form,main,video,audio").first().addClass("fancybox-content"),
                t.$slide.addClass("fancybox-slide--" + t.contentType),
                this.afterLoad(t))
            },
            setError: function(t) {
                t.hasError = !0,
                t.$slide.trigger("onReset").removeClass("fancybox-slide--" + t.contentType).addClass("fancybox-slide--error"),
                t.contentType = "html",
                this.setContent(t, this.translate(t, t.opts.errorTpl)),
                t.pos === this.currPos && (this.isAnimating = !1)
            },
            showLoading: function(t) {
                var e = this;
                t = t || e.current,
                t && !t.$spinner && (t.$spinner = n(e.translate(e, e.opts.spinnerTpl)).appendTo(t.$slide))
            },
            hideLoading: function(t) {
                var e = this;
                t = t || e.current,
                t && t.$spinner && (t.$spinner.remove(),
                delete t.$spinner)
            },
            afterLoad: function(t) {
                var e = this;
                e.isClosing || (t.isLoading = !1,
                t.isLoaded = !0,
                e.trigger("afterLoad", t),
                e.hideLoading(t),
                t.pos === e.currPos && e.updateCursor(),
                !t.opts.smallBtn || t.$smallBtn && t.$smallBtn.length || (t.$smallBtn = n(e.translate(t, t.opts.btnTpl.smallBtn)).prependTo(t.$content)),
                t.opts.protect && t.$content && !t.hasError && (t.$content.on("contextmenu.fb", function(t) {
                    return 2 == t.button && t.preventDefault(),
                    !0
                }),
                "image" === t.type && n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)),
                e.revealContent(t))
            },
            revealContent: function(t) {
                var e, i, a, s, r = this, c = t.$slide, l = !1, d = !1;
                return e = t.opts[r.firstRun ? "animationEffect" : "transitionEffect"],
                a = t.opts[r.firstRun ? "animationDuration" : "transitionDuration"],
                a = parseInt(t.forcedDuration === o ? a : t.forcedDuration, 10),
                t.pos === r.currPos && (t.isComplete ? e = !1 : r.isAnimating = !0),
                !t.isMoved && t.pos === r.currPos && a || (e = !1),
                "zoom" === e && (t.pos === r.currPos && a && "image" === t.type && !t.hasError && (d = r.getThumbPos(t)) ? l = r.getFitPos(t) : e = "fade"),
                "zoom" === e ? (l.scaleX = l.width / d.width,
                l.scaleY = l.height / d.height,
                s = t.opts.zoomOpacity,
                "auto" == s && (s = Math.abs(t.width / t.height - d.width / d.height) > .1),
                s && (d.opacity = .1,
                l.opacity = 1),
                n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"), d),
                f(t.$content),
                void n.fancybox.animate(t.$content, l, a, function() {
                    r.isAnimating = !1,
                    r.complete()
                })) : (r.updateSlide(t),
                e ? (n.fancybox.stop(c),
                i = "fancybox-animated fancybox-slide--" + (t.pos >= r.prevPos ? "next" : "previous") + " fancybox-fx-" + e,
                c.removeAttr("style").removeClass("fancybox-slide--current fancybox-slide--next fancybox-slide--previous").addClass(i),
                t.$content.removeClass("fancybox-is-hidden"),
                f(c),
                void n.fancybox.animate(c, "fancybox-slide--current", a, function(e) {
                    c.removeClass(i).removeAttr("style"),
                    t.pos === r.currPos && r.complete()
                }, !0)) : (f(c),
                t.$content.removeClass("fancybox-is-hidden"),
                void (t.pos === r.currPos && r.complete())))
            },
            getThumbPos: function(o) {
                var i, a = this, s = !1, r = o.opts.$thumb, c = r && r.length && r[0].ownerDocument === e ? r.offset() : 0, l = function(e) {
                    for (var o, i = e[0], a = i.getBoundingClientRect(), s = []; null !== i.parentElement; )
                        "hidden" !== n(i.parentElement).css("overflow") && "auto" !== n(i.parentElement).css("overflow") || s.push(i.parentElement.getBoundingClientRect()),
                        i = i.parentElement;
                    return o = s.every(function(t) {
                        var e = Math.min(a.right, t.right) - Math.max(a.left, t.left)
                          , n = Math.min(a.bottom, t.bottom) - Math.max(a.top, t.top);
                        return e > 0 && n > 0
                    }),
                    o && a.bottom > 0 && a.right > 0 && a.left < n(t).width() && a.top < n(t).height()
                };
                return c && l(r) && (i = a.$refs.stage.offset(),
                s = {
                    top: c.top - i.top + parseFloat(r.css("border-top-width") || 0),
                    left: c.left - i.left + parseFloat(r.css("border-left-width") || 0),
                    width: r.width(),
                    height: r.height(),
                    scaleX: 1,
                    scaleY: 1
                }),
                s
            },
            complete: function() {
                var t = this
                  , o = t.current
                  , i = {};
                !o.isMoved && o.isLoaded && (o.isComplete || (o.isComplete = !0,
                o.$slide.siblings().trigger("onReset"),
                t.preload("inline"),
                f(o.$slide),
                o.$slide.addClass("fancybox-slide--complete"),
                n.each(t.slides, function(e, o) {
                    o.pos >= t.currPos - 1 && o.pos <= t.currPos + 1 ? i[o.pos] = o : o && (n.fancybox.stop(o.$slide),
                    o.$slide.off().remove())
                }),
                t.slides = i),
                t.isAnimating = !1,
                t.updateCursor(),
                t.trigger("afterShow"),
                o.$slide.find("video,audio").filter(":visible:first").trigger("play"),
                (n(e.activeElement).is("[disabled]") || o.opts.autoFocus && "image" != o.type && "iframe" !== o.type) && t.focus())
            },
            preload: function(t) {
                var e = this
                  , n = e.slides[e.currPos + 1]
                  , o = e.slides[e.currPos - 1];
                n && n.type === t && e.loadSlide(n),
                o && o.type === t && e.loadSlide(o)
            },
            focus: function() {
                var t, e = this.current;
                this.isClosing || e && e.isComplete && e.$content && (t = e.$content.find("input[autofocus]:enabled:visible:first"),
                t.length || (t = e.$content.find("button,:input,[tabindex],a").filter(":enabled:visible:first")),
                t = t && t.length ? t : e.$content,
                t.trigger("focus"))
            },
            activate: function() {
                var t = this;
                n(".fancybox-container").each(function() {
                    var e = n(this).data("FancyBox");
                    e && e.id !== t.id && !e.isClosing && (e.trigger("onDeactivate"),
                    e.removeEvents(),
                    e.isVisible = !1)
                }),
                t.isVisible = !0,
                (t.current || t.isIdle) && (t.update(),
                t.updateControls()),
                t.trigger("onActivate"),
                t.addEvents()
            },
            close: function(t, e) {
                var o, i, a, s, r, c, l, p = this, h = p.current, g = function() {
                    p.cleanUp(t)
                };
                return !p.isClosing && (p.isClosing = !0,
                p.trigger("beforeClose", t) === !1 ? (p.isClosing = !1,
                d(function() {
                    p.update()
                }),
                !1) : (p.removeEvents(),
                h.timouts && clearTimeout(h.timouts),
                a = h.$content,
                o = h.opts.animationEffect,
                i = n.isNumeric(e) ? e : o ? h.opts.animationDuration : 0,
                h.$slide.off(u).removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"),
                h.$slide.siblings().trigger("onReset").remove(),
                i && p.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing"),
                p.hideLoading(h),
                p.hideControls(),
                p.updateCursor(),
                "zoom" !== o || t !== !0 && a && i && "image" === h.type && !h.hasError && (l = p.getThumbPos(h)) || (o = "fade"),
                "zoom" === o ? (n.fancybox.stop(a),
                s = n.fancybox.getTranslate(a),
                c = {
                    top: s.top,
                    left: s.left,
                    scaleX: s.width / l.width,
                    scaleY: s.height / l.height,
                    width: l.width,
                    height: l.height
                },
                r = h.opts.zoomOpacity,
                "auto" == r && (r = Math.abs(h.width / h.height - l.width / l.height) > .1),
                r && (l.opacity = 0),
                n.fancybox.setTranslate(a, c),
                f(a),
                n.fancybox.animate(a, l, i, g),
                !0) : (o && i ? t === !0 ? setTimeout(g, i) : n.fancybox.animate(h.$slide.removeClass("fancybox-slide--current"), "fancybox-animated fancybox-slide--previous fancybox-fx-" + o, i, g) : g(),
                !0)))
            },
            cleanUp: function(t) {
                var e, o = this, i = n("body");
                o.current.$slide.trigger("onReset"),
                o.$refs.container.empty().remove(),
                o.trigger("afterClose", t),
                o.$lastFocus && o.current.opts.backFocus && o.$lastFocus.trigger("focus"),
                o.current = null,
                e = n.fancybox.getInstance(),
                e ? e.activate() : (i.removeClass("fancybox-active compensate-for-scrollbar"),
                n("#fancybox-style-noscroll").remove())
            },
            trigger: function(t, e) {
                var o, i = Array.prototype.slice.call(arguments, 1), a = this, s = e && e.opts ? e : a.current;
                return s ? i.unshift(s) : s = a,
                i.unshift(a),
                n.isFunction(s.opts[t]) && (o = s.opts[t].apply(s, i)),
                o === !1 ? o : void ("afterClose" !== t && a.$refs ? a.$refs.container.trigger(t + ".fb", i) : r.trigger(t + ".fb", i))
            },
            updateControls: function(t) {
                var e = this
                  , n = e.current
                  , o = n.index
                  , i = n.opts.caption
                  , a = e.$refs.container
                  , s = e.$refs.caption;
                n.$slide.trigger("refresh"),
                e.$caption = i && i.length ? s.html(i) : null,
                e.isHiddenControls || e.isIdle || e.showControls(),
                a.find("[data-fancybox-count]").html(e.group.length),
                a.find("[data-fancybox-index]").html(o + 1),
                a.find("[data-fancybox-prev]").toggleClass("disabled", !n.opts.loop && o <= 0),
                a.find("[data-fancybox-next]").toggleClass("disabled", !n.opts.loop && o >= e.group.length - 1),
                "image" === n.type ? a.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href", n.opts.image.src || n.src).show() : n.opts.toolbar && a.find("[data-fancybox-download],[data-fancybox-zoom]").hide()
            },
            hideControls: function() {
                this.isHiddenControls = !0,
                this.$refs.container.removeClass("fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav")
            },
            showControls: function() {
                var t = this
                  , e = t.current ? t.current.opts : t.opts
                  , n = t.$refs.container;
                t.isHiddenControls = !1,
                t.idleSecondsCounter = 0,
                n.toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons)).toggleClass("fancybox-show-infobar", !!(e.infobar && t.group.length > 1)).toggleClass("fancybox-show-nav", !!(e.arrows && t.group.length > 1)).toggleClass("fancybox-is-modal", !!e.modal),
                t.$caption ? n.addClass("fancybox-show-caption ") : n.removeClass("fancybox-show-caption")
            },
            toggleControls: function() {
                this.isHiddenControls ? this.showControls() : this.hideControls()
            }
        }),
        n.fancybox = {
            version: "3.3.5",
            defaults: a,
            getInstance: function(t) {
                var e = n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox")
                  , o = Array.prototype.slice.call(arguments, 1);
                return e instanceof h && ("string" === n.type(t) ? e[t].apply(e, o) : "function" === n.type(t) && t.apply(e, o),
                e)
            },
            open: function(t, e, n) {
                return new h(t,e,n)
            },
            close: function(t) {
                var e = this.getInstance();
                e && (e.close(),
                t === !0 && this.close())
            },
            destroy: function() {
                this.close(!0),
                r.add("body").off("click.fb-start", "**")
            },
            isMobile: e.createTouch !== o && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
            use3d: function() {
                var n = e.createElement("div");
                return t.getComputedStyle && t.getComputedStyle(n) && t.getComputedStyle(n).getPropertyValue("transform") && !(e.documentMode && e.documentMode < 11)
            }(),
            getTranslate: function(t) {
                var e;
                return !(!t || !t.length) && (e = t[0].getBoundingClientRect(),
                {
                    top: e.top || 0,
                    left: e.left || 0,
                    width: e.width,
                    height: e.height,
                    opacity: parseFloat(t.css("opacity"))
                })
            },
            setTranslate: function(t, e) {
                var n = ""
                  , i = {};
                if (t && e)
                    return e.left === o && e.top === o || (n = (e.left === o ? t.position().left : e.left) + "px, " + (e.top === o ? t.position().top : e.top) + "px",
                    n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")"),
                    e.scaleX !== o && e.scaleY !== o && (n = (n.length ? n + " " : "") + "scale(" + e.scaleX + ", " + e.scaleY + ")"),
                    n.length && (i.transform = n),
                    e.opacity !== o && (i.opacity = e.opacity),
                    e.width !== o && (i.width = e.width),
                    e.height !== o && (i.height = e.height),
                    t.css(i)
            },
            animate: function(t, e, i, a, s) {
                var r = !1;
                n.isFunction(i) && (a = i,
                i = null),
                n.isPlainObject(e) || t.removeAttr("style"),
                n.fancybox.stop(t),
                t.on(u, function(o) {
                    (!o || !o.originalEvent || t.is(o.originalEvent.target) && "z-index" != o.originalEvent.propertyName) && (n.fancybox.stop(t),
                    r && n.fancybox.setTranslate(t, r),
                    n.isPlainObject(e) ? s === !1 && t.removeAttr("style") : s !== !0 && t.removeClass(e),
                    n.isFunction(a) && a(o))
                }),
                n.isNumeric(i) && t.css("transition-duration", i + "ms"),
                n.isPlainObject(e) ? (e.scaleX !== o && e.scaleY !== o && (r = n.extend({}, e, {
                    width: t.width() * e.scaleX,
                    height: t.height() * e.scaleY,
                    scaleX: 1,
                    scaleY: 1
                }),
                delete e.width,
                delete e.height,
                t.parent().hasClass("fancybox-slide--image") && t.parent().addClass("fancybox-is-scaling")),
                n.fancybox.setTranslate(t, e)) : t.addClass(e),
                t.data("timer", setTimeout(function() {
                    t.trigger("transitionend")
                }, i + 16))
            },
            stop: function(t) {
                t && t.length && (clearTimeout(t.data("timer")),
                t.off("transitionend").css("transition-duration", ""),
                t.parent().removeClass("fancybox-is-scaling"))
            }
        },
        n.fn.fancybox = function(t) {
            var e;
            return t = t || {},
            e = t.selector || !1,
            e ? n("body").off("click.fb-start", e).on("click.fb-start", e, {
                options: t
            }, i) : this.off("click.fb-start").on("click.fb-start", {
                items: this,
                options: t
            }, i),
            this
        }
        ,
        r.on("click.fb-start", "[data-fancybox]", i),
        r.on("click.fb-start", "[data-trigger]", function(t) {
            i(t, {
                $target: n('[data-fancybox="' + n(t.currentTarget).attr("data-trigger") + '"]').eq(n(t.currentTarget).attr("data-index") || 0),
                $trigger: n(this)
            })
        })
    }
}(window, document, window.jQuery || jQuery),
function(t) {
    "use strict";
    var e = function(e, n, o) {
        if (e)
            return o = o || "",
            "object" === t.type(o) && (o = t.param(o, !0)),
            t.each(n, function(t, n) {
                e = e.replace("$" + t, n || "")
            }),
            o.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + o),
            e
    }
      , n = {
        youtube: {
            matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
            params: {
                autoplay: 1,
                autohide: 1,
                fs: 1,
                rel: 0,
                hd: 1,
                wmode: "transparent",
                enablejsapi: 1,
                html5: 1
            },
            paramPlace: 8,
            type: "iframe",
            url: "//www.youtube.com/embed/$4",
            thumb: "//img.youtube.com/vi/$4/hqdefault.jpg"
        },
        vimeo: {
            matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
            params: {
                autoplay: 1,
                hd: 1,
                show_title: 1,
                show_byline: 1,
                show_portrait: 0,
                fullscreen: 1,
                api: 1
            },
            paramPlace: 3,
            type: "iframe",
            url: "//player.vimeo.com/video/$2"
        },
        instagram: {
            matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
            type: "image",
            url: "//$1/p/$2/media/?size=l"
        },
        gmap_place: {
            matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
            type: "iframe",
            url: function(t) {
                return "//maps.google." + t[2] + "/?ll=" + (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12] + "").replace(/\?/, "&") + "&output=" + (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
            }
        },
        gmap_search: {
            matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
            type: "iframe",
            url: function(t) {
                return "//maps.google." + t[2] + "/maps?q=" + t[5].replace("query=", "q=").replace("api=1", "") + "&output=embed"
            }
        }
    };
    t(document).on("objectNeedsType.fb", function(o, i, a) {
        var s, r, c, l, d, u, f, p = a.src || "", h = !1;
        s = t.extend(!0, {}, n, a.opts.media),
        t.each(s, function(n, o) {
            if (c = p.match(o.matcher)) {
                if (h = o.type,
                f = n,
                u = {},
                o.paramPlace && c[o.paramPlace]) {
                    d = c[o.paramPlace],
                    "?" == d[0] && (d = d.substring(1)),
                    d = d.split("&");
                    for (var i = 0; i < d.length; ++i) {
                        var s = d[i].split("=", 2);
                        2 == s.length && (u[s[0]] = decodeURIComponent(s[1].replace(/\+/g, " ")))
                    }
                }
                return l = t.extend(!0, {}, o.params, a.opts[n], u),
                p = "function" === t.type(o.url) ? o.url.call(this, c, l, a) : e(o.url, c, l),
                r = "function" === t.type(o.thumb) ? o.thumb.call(this, c, l, a) : e(o.thumb, c),
                "youtube" === n ? p = p.replace(/&t=((\d+)m)?(\d+)s/, function(t, e, n, o) {
                    return "&start=" + ((n ? 60 * parseInt(n, 10) : 0) + parseInt(o, 10))
                }) : "vimeo" === n && (p = p.replace("&%23", "#")),
                !1
            }
        }),
        h ? (a.opts.thumb || a.opts.$thumb && a.opts.$thumb.length || (a.opts.thumb = r),
        "iframe" === h && (a.opts = t.extend(!0, a.opts, {
            iframe: {
                preload: !1,
                attr: {
                    scrolling: "no"
                }
            }
        })),
        t.extend(a, {
            type: h,
            src: p,
            origSrc: a.src,
            contentSource: f,
            contentType: "image" === h ? "image" : "gmap_place" == f || "gmap_search" == f ? "map" : "video"
        })) : p && (a.type = a.opts.defaultType)
    })
}(window.jQuery || jQuery),
function(t, e, n) {
    "use strict";
    var o = function() {
        return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function(e) {
            return t.setTimeout(e, 1e3 / 60)
        }
    }()
      , i = function() {
        return t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function(e) {
            t.clearTimeout(e)
        }
    }()
      , a = function(e) {
        var n = [];
        e = e.originalEvent || e || t.e,
        e = e.touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e];
        for (var o in e)
            e[o].pageX ? n.push({
                x: e[o].pageX,
                y: e[o].pageY
            }) : e[o].clientX && n.push({
                x: e[o].clientX,
                y: e[o].clientY
            });
        return n
    }
      , s = function(t, e, n) {
        return e && t ? "x" === n ? t.x - e.x : "y" === n ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) : 0
    }
      , r = function(t) {
        if (t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio') || n.isFunction(t.get(0).onclick) || t.data("selectable"))
            return !0;
        for (var e = 0, o = t[0].attributes, i = o.length; e < i; e++)
            if ("data-fancybox-" === o[e].nodeName.substr(0, 14))
                return !0;
        return !1
    }
      , c = function(e) {
        var n = t.getComputedStyle(e)["overflow-y"]
          , o = t.getComputedStyle(e)["overflow-x"]
          , i = ("scroll" === n || "auto" === n) && e.scrollHeight > e.clientHeight
          , a = ("scroll" === o || "auto" === o) && e.scrollWidth > e.clientWidth;
        return i || a
    }
      , l = function(t) {
        for (var e = !1; ; ) {
            if (e = c(t.get(0)))
                break;
            if (t = t.parent(),
            !t.length || t.hasClass("fancybox-stage") || t.is("body"))
                break
        }
        return e
    }
      , d = function(t) {
        var e = this;
        e.instance = t,
        e.$bg = t.$refs.bg,
        e.$stage = t.$refs.stage,
        e.$container = t.$refs.container,
        e.destroy(),
        e.$container.on("touchstart.fb.touch mousedown.fb.touch", n.proxy(e, "ontouchstart"))
    };
    d.prototype.destroy = function() {
        this.$container.off(".fb.touch")
    }
    ,
    d.prototype.ontouchstart = function(o) {
        var i = this
          , c = n(o.target)
          , d = i.instance
          , u = d.current
          , f = u.$content
          , p = "touchstart" == o.type;
        if (p && i.$container.off("mousedown.fb.touch"),
        (!o.originalEvent || 2 != o.originalEvent.button) && c.length && !r(c) && !r(c.parent()) && (c.is("img") || !(o.originalEvent.clientX > c[0].clientWidth + c.offset().left))) {
            if (!u || d.isAnimating || d.isClosing)
                return o.stopPropagation(),
                void o.preventDefault();
            if (i.realPoints = i.startPoints = a(o),
            i.startPoints.length) {
                if (o.stopPropagation(),
                i.startEvent = o,
                i.canTap = !0,
                i.$target = c,
                i.$content = f,
                i.opts = u.opts.touch,
                i.isPanning = !1,
                i.isSwiping = !1,
                i.isZooming = !1,
                i.isScrolling = !1,
                i.startTime = (new Date).getTime(),
                i.distanceX = i.distanceY = i.distance = 0,
                i.canvasWidth = Math.round(u.$slide[0].clientWidth),
                i.canvasHeight = Math.round(u.$slide[0].clientHeight),
                i.contentLastPos = null,
                i.contentStartPos = n.fancybox.getTranslate(i.$content) || {
                    top: 0,
                    left: 0
                },
                i.sliderStartPos = i.sliderLastPos || n.fancybox.getTranslate(u.$slide),
                i.stagePos = n.fancybox.getTranslate(d.$refs.stage),
                i.sliderStartPos.top -= i.stagePos.top,
                i.sliderStartPos.left -= i.stagePos.left,
                i.contentStartPos.top -= i.stagePos.top,
                i.contentStartPos.left -= i.stagePos.left,
                n(e).off(".fb.touch").on(p ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", n.proxy(i, "ontouchend")).on(p ? "touchmove.fb.touch" : "mousemove.fb.touch", n.proxy(i, "ontouchmove")),
                n.fancybox.isMobile && e.addEventListener("scroll", i.onscroll, !0),
                !i.opts && !d.canPan() || !c.is(i.$stage) && !i.$stage.find(c).length)
                    return void (c.is(".fancybox-image") && o.preventDefault());
                n.fancybox.isMobile && (l(c) || l(c.parent())) || o.preventDefault(),
                (1 === i.startPoints.length || u.hasError) && (i.instance.canPan() ? (n.fancybox.stop(i.$content),
                i.$content.css("transition-duration", ""),
                i.isPanning = !0) : i.isSwiping = !0,
                i.$container.addClass("fancybox-controls--isGrabbing")),
                2 === i.startPoints.length && "image" === u.type && (u.isLoaded || u.$ghost) && (i.canTap = !1,
                i.isSwiping = !1,
                i.isPanning = !1,
                i.isZooming = !0,
                n.fancybox.stop(i.$content),
                i.$content.css("transition-duration", ""),
                i.centerPointStartX = .5 * (i.startPoints[0].x + i.startPoints[1].x) - n(t).scrollLeft(),
                i.centerPointStartY = .5 * (i.startPoints[0].y + i.startPoints[1].y) - n(t).scrollTop(),
                i.percentageOfImageAtPinchPointX = (i.centerPointStartX - i.contentStartPos.left) / i.contentStartPos.width,
                i.percentageOfImageAtPinchPointY = (i.centerPointStartY - i.contentStartPos.top) / i.contentStartPos.height,
                i.startDistanceBetweenFingers = s(i.startPoints[0], i.startPoints[1]))
            }
        }
    }
    ,
    d.prototype.onscroll = function(t) {
        var n = this;
        n.isScrolling = !0,
        e.removeEventListener("scroll", n.onscroll, !0)
    }
    ,
    d.prototype.ontouchmove = function(t) {
        var e = this
          , o = n(t.target);
        return void 0 !== t.originalEvent.buttons && 0 === t.originalEvent.buttons ? void e.ontouchend(t) : e.isScrolling || !o.is(e.$stage) && !e.$stage.find(o).length ? void (e.canTap = !1) : (e.newPoints = a(t),
        void ((e.opts || e.instance.canPan()) && e.newPoints.length && e.newPoints.length && (e.isSwiping && e.isSwiping === !0 || t.preventDefault(),
        e.distanceX = s(e.newPoints[0], e.startPoints[0], "x"),
        e.distanceY = s(e.newPoints[0], e.startPoints[0], "y"),
        e.distance = s(e.newPoints[0], e.startPoints[0]),
        e.distance > 0 && (e.isSwiping ? e.onSwipe(t) : e.isPanning ? e.onPan() : e.isZooming && e.onZoom()))))
    }
    ,
    d.prototype.onSwipe = function(e) {
        var a, s = this, r = s.isSwiping, c = s.sliderStartPos.left || 0;
        if (r !== !0)
            "x" == r && (s.distanceX > 0 && (s.instance.group.length < 2 || 0 === s.instance.current.index && !s.instance.current.opts.loop) ? c += Math.pow(s.distanceX, .8) : s.distanceX < 0 && (s.instance.group.length < 2 || s.instance.current.index === s.instance.group.length - 1 && !s.instance.current.opts.loop) ? c -= Math.pow(-s.distanceX, .8) : c += s.distanceX),
            s.sliderLastPos = {
                top: "x" == r ? 0 : s.sliderStartPos.top + s.distanceY,
                left: c
            },
            s.requestId && (i(s.requestId),
            s.requestId = null),
            s.requestId = o(function() {
                s.sliderLastPos && (n.each(s.instance.slides, function(t, e) {
                    var o = e.pos - s.instance.currPos;
                    n.fancybox.setTranslate(e.$slide, {
                        top: s.sliderLastPos.top,
                        left: s.sliderLastPos.left + o * s.canvasWidth + o * e.opts.gutter
                    })
                }),
                s.$container.addClass("fancybox-is-sliding"))
            });
        else if (Math.abs(s.distance) > 10) {
            if (s.canTap = !1,
            s.instance.group.length < 2 && s.opts.vertical ? s.isSwiping = "y" : s.instance.isDragging || s.opts.vertical === !1 || "auto" === s.opts.vertical && n(t).width() > 800 ? s.isSwiping = "x" : (a = Math.abs(180 * Math.atan2(s.distanceY, s.distanceX) / Math.PI),
            s.isSwiping = a > 45 && a < 135 ? "y" : "x"),
            s.canTap = !1,
            "y" === s.isSwiping && n.fancybox.isMobile && (l(s.$target) || l(s.$target.parent())))
                return void (s.isScrolling = !0);
            s.instance.isDragging = s.isSwiping,
            s.startPoints = s.newPoints,
            n.each(s.instance.slides, function(t, e) {
                n.fancybox.stop(e.$slide),
                e.$slide.css("transition-duration", ""),
                e.inTransition = !1,
                e.pos === s.instance.current.pos && (s.sliderStartPos.left = n.fancybox.getTranslate(e.$slide).left - n.fancybox.getTranslate(s.instance.$refs.stage).left)
            }),
            s.instance.SlideShow && s.instance.SlideShow.isActive && s.instance.SlideShow.stop()
        }
    }
    ,
    d.prototype.onPan = function() {
        var t = this;
        return s(t.newPoints[0], t.realPoints[0]) < (n.fancybox.isMobile ? 10 : 5) ? void (t.startPoints = t.newPoints) : (t.canTap = !1,
        t.contentLastPos = t.limitMovement(),
        t.requestId && (i(t.requestId),
        t.requestId = null),
        void (t.requestId = o(function() {
            n.fancybox.setTranslate(t.$content, t.contentLastPos)
        })))
    }
    ,
    d.prototype.limitMovement = function() {
        var t, e, n, o, i, a, s = this, r = s.canvasWidth, c = s.canvasHeight, l = s.distanceX, d = s.distanceY, u = s.contentStartPos, f = u.left, p = u.top, h = u.width, g = u.height;
        return i = h > r ? f + l : f,
        a = p + d,
        t = Math.max(0, .5 * r - .5 * h),
        e = Math.max(0, .5 * c - .5 * g),
        n = Math.min(r - h, .5 * r - .5 * h),
        o = Math.min(c - g, .5 * c - .5 * g),
        l > 0 && i > t && (i = t - 1 + Math.pow(-t + f + l, .8) || 0),
        l < 0 && i < n && (i = n + 1 - Math.pow(n - f - l, .8) || 0),
        d > 0 && a > e && (a = e - 1 + Math.pow(-e + p + d, .8) || 0),
        d < 0 && a < o && (a = o + 1 - Math.pow(o - p - d, .8) || 0),
        {
            top: a,
            left: i
        }
    }
    ,
    d.prototype.limitPosition = function(t, e, n, o) {
        var i = this
          , a = i.canvasWidth
          , s = i.canvasHeight;
        return n > a ? (t = t > 0 ? 0 : t,
        t = t < a - n ? a - n : t) : t = Math.max(0, a / 2 - n / 2),
        o > s ? (e = e > 0 ? 0 : e,
        e = e < s - o ? s - o : e) : e = Math.max(0, s / 2 - o / 2),
        {
            top: e,
            left: t
        }
    }
    ,
    d.prototype.onZoom = function() {
        var e = this
          , a = e.contentStartPos
          , r = a.width
          , c = a.height
          , l = a.left
          , d = a.top
          , u = s(e.newPoints[0], e.newPoints[1])
          , f = u / e.startDistanceBetweenFingers
          , p = Math.floor(r * f)
          , h = Math.floor(c * f)
          , g = (r - p) * e.percentageOfImageAtPinchPointX
          , b = (c - h) * e.percentageOfImageAtPinchPointY
          , m = (e.newPoints[0].x + e.newPoints[1].x) / 2 - n(t).scrollLeft()
          , y = (e.newPoints[0].y + e.newPoints[1].y) / 2 - n(t).scrollTop()
          , v = m - e.centerPointStartX
          , x = y - e.centerPointStartY
          , w = l + (g + v)
          , $ = d + (b + x)
          , S = {
            top: $,
            left: w,
            scaleX: f,
            scaleY: f
        };
        e.canTap = !1,
        e.newWidth = p,
        e.newHeight = h,
        e.contentLastPos = S,
        e.requestId && (i(e.requestId),
        e.requestId = null),
        e.requestId = o(function() {
            n.fancybox.setTranslate(e.$content, e.contentLastPos)
        })
    }
    ,
    d.prototype.ontouchend = function(t) {
        var o = this
          , s = Math.max((new Date).getTime() - o.startTime, 1)
          , r = o.isSwiping
          , c = o.isPanning
          , l = o.isZooming
          , d = o.isScrolling;
        return o.endPoints = a(t),
        o.$container.removeClass("fancybox-controls--isGrabbing"),
        n(e).off(".fb.touch"),
        e.removeEventListener("scroll", o.onscroll, !0),
        o.requestId && (i(o.requestId),
        o.requestId = null),
        o.isSwiping = !1,
        o.isPanning = !1,
        o.isZooming = !1,
        o.isScrolling = !1,
        o.instance.isDragging = !1,
        o.canTap ? o.onTap(t) : (o.speed = 366,
        o.velocityX = o.distanceX / s * .5,
        o.velocityY = o.distanceY / s * .5,
        o.speedX = Math.max(.5 * o.speed, Math.min(1.5 * o.speed, 1 / Math.abs(o.velocityX) * o.speed)),
        void (c ? o.endPanning() : l ? o.endZooming() : o.endSwiping(r, d)))
    }
    ,
    d.prototype.endSwiping = function(t, e) {
        var o = this
          , i = !1
          , a = o.instance.group.length;
        o.sliderLastPos = null,
        "y" == t && !e && Math.abs(o.distanceY) > 50 ? (n.fancybox.animate(o.instance.current.$slide, {
            top: o.sliderStartPos.top + o.distanceY + 150 * o.velocityY,
            opacity: 0
        }, 200),
        i = o.instance.close(!0, 200)) : "x" == t && o.distanceX > 50 && a > 1 ? i = o.instance.previous(o.speedX) : "x" == t && o.distanceX < -50 && a > 1 && (i = o.instance.next(o.speedX)),
        i !== !1 || "x" != t && "y" != t || (e || a < 2 ? o.instance.centerSlide(o.instance.current, 150) : o.instance.jumpTo(o.instance.current.index)),
        o.$container.removeClass("fancybox-is-sliding")
    }
    ,
    d.prototype.endPanning = function() {
        var t, e, o, i = this;
        i.contentLastPos && (i.opts.momentum === !1 ? (t = i.contentLastPos.left,
        e = i.contentLastPos.top) : (t = i.contentLastPos.left + i.velocityX * i.speed,
        e = i.contentLastPos.top + i.velocityY * i.speed),
        o = i.limitPosition(t, e, i.contentStartPos.width, i.contentStartPos.height),
        o.width = i.contentStartPos.width,
        o.height = i.contentStartPos.height,
        n.fancybox.animate(i.$content, o, 330))
    }
    ,
    d.prototype.endZooming = function() {
        var t, e, o, i, a = this, s = a.instance.current, r = a.newWidth, c = a.newHeight;
        a.contentLastPos && (t = a.contentLastPos.left,
        e = a.contentLastPos.top,
        i = {
            top: e,
            left: t,
            width: r,
            height: c,
            scaleX: 1,
            scaleY: 1
        },
        n.fancybox.setTranslate(a.$content, i),
        r < a.canvasWidth && c < a.canvasHeight ? a.instance.scaleToFit(150) : r > s.width || c > s.height ? a.instance.scaleToActual(a.centerPointStartX, a.centerPointStartY, 150) : (o = a.limitPosition(t, e, r, c),
        n.fancybox.setTranslate(a.$content, n.fancybox.getTranslate(a.$content)),
        n.fancybox.animate(a.$content, o, 150)))
    }
    ,
    d.prototype.onTap = function(e) {
        var o, i = this, s = n(e.target), r = i.instance, c = r.current, l = e && a(e) || i.startPoints, d = l[0] ? l[0].x - n(t).scrollLeft() - i.stagePos.left : 0, u = l[0] ? l[0].y - n(t).scrollTop() - i.stagePos.top : 0, f = function(t) {
            var o = c.opts[t];
            if (n.isFunction(o) && (o = o.apply(r, [c, e])),
            o)
                switch (o) {
                case "close":
                    r.close(i.startEvent);
                    break;
                case "toggleControls":
                    r.toggleControls(!0);
                    break;
                case "next":
                    r.next();
                    break;
                case "nextOrClose":
                    r.group.length > 1 ? r.next() : r.close(i.startEvent);
                    break;
                case "zoom":
                    "image" == c.type && (c.isLoaded || c.$ghost) && (r.canPan() ? r.scaleToFit() : r.isScaledDown() ? r.scaleToActual(d, u) : r.group.length < 2 && r.close(i.startEvent))
                }
        };
        if ((!e.originalEvent || 2 != e.originalEvent.button) && (s.is("img") || !(d > s[0].clientWidth + s.offset().left))) {
            if (s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"))
                o = "Outside";
            else if (s.is(".fancybox-slide"))
                o = "Slide";
            else {
                if (!r.current.$content || !r.current.$content.find(s).addBack().filter(s).length)
                    return;
                o = "Content"
            }
            if (i.tapped) {
                if (clearTimeout(i.tapped),
                i.tapped = null,
                Math.abs(d - i.tapX) > 50 || Math.abs(u - i.tapY) > 50)
                    return this;
                f("dblclick" + o)
            } else
                i.tapX = d,
                i.tapY = u,
                c.opts["dblclick" + o] && c.opts["dblclick" + o] !== c.opts["click" + o] ? i.tapped = setTimeout(function() {
                    i.tapped = null,
                    f("click" + o)
                }, 500) : f("click" + o);
            return this
        }
    }
    ,
    n(e).on("onActivate.fb", function(t, e) {
        e && !e.Guestures && (e.Guestures = new d(e))
    })
}(window, document, window.jQuery || jQuery),
function(t, e) {
    "use strict";
    e.extend(!0, e.fancybox.defaults, {
        btnTpl: {
            slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg viewBox="0 0 40 40"><path d="M13,12 L27,20 L13,27 Z" /><path d="M15,10 v19 M23,10 v19" /></svg></button>'
        },
        slideShow: {
            autoStart: !1,
            speed: 3e3
        }
    });
    var n = function(t) {
        this.instance = t,
        this.init()
    };
    e.extend(n.prototype, {
        timer: null,
        isActive: !1,
        $button: null,
        init: function() {
            var t = this;
            t.$button = t.instance.$refs.toolbar.find("[data-fancybox-play]").on("click", function() {
                t.toggle()
            }),
            (t.instance.group.length < 2 || !t.instance.group[t.instance.currIndex].opts.slideShow) && t.$button.hide()
        },
        set: function(t) {
            var e = this;
            e.instance && e.instance.current && (t === !0 || e.instance.current.opts.loop || e.instance.currIndex < e.instance.group.length - 1) ? e.timer = setTimeout(function() {
                e.isActive && e.instance.jumpTo((e.instance.currIndex + 1) % e.instance.group.length)
            }, e.instance.current.opts.slideShow.speed) : (e.stop(),
            e.instance.idleSecondsCounter = 0,
            e.instance.showControls())
        },
        clear: function() {
            var t = this;
            clearTimeout(t.timer),
            t.timer = null
        },
        start: function() {
            var t = this
              , e = t.instance.current;
            e && (t.isActive = !0,
            t.$button.attr("title", e.opts.i18n[e.opts.lang].PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"),
            t.set(!0))
        },
        stop: function() {
            var t = this
              , e = t.instance.current;
            t.clear(),
            t.$button.attr("title", e.opts.i18n[e.opts.lang].PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"),
            t.isActive = !1
        },
        toggle: function() {
            var t = this;
            t.isActive ? t.stop() : t.start()
        }
    }),
    e(t).on({
        "onInit.fb": function(t, e) {
            e && !e.SlideShow && (e.SlideShow = new n(e))
        },
        "beforeShow.fb": function(t, e, n, o) {
            var i = e && e.SlideShow;
            o ? i && n.opts.slideShow.autoStart && i.start() : i && i.isActive && i.clear()
        },
        "afterShow.fb": function(t, e, n) {
            var o = e && e.SlideShow;
            o && o.isActive && o.set()
        },
        "afterKeydown.fb": function(n, o, i, a, s) {
            var r = o && o.SlideShow;
            !r || !i.opts.slideShow || 80 !== s && 32 !== s || e(t.activeElement).is("button,a,input") || (a.preventDefault(),
            r.toggle())
        },
        "beforeClose.fb onDeactivate.fb": function(t, e) {
            var n = e && e.SlideShow;
            n && n.stop()
        }
    }),
    e(t).on("visibilitychange", function() {
        var n = e.fancybox.getInstance()
          , o = n && n.SlideShow;
        o && o.isActive && (t.hidden ? o.clear() : o.set())
    })
}(document, window.jQuery || jQuery),
function(t, e) {
    "use strict";
    var n = function() {
        for (var e = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], n = {}, o = 0; o < e.length; o++) {
            var i = e[o];
            if (i && i[1]in t) {
                for (var a = 0; a < i.length; a++)
                    n[e[0][a]] = i[a];
                return n
            }
        }
        return !1
    }();
    if (!n)
        return void (e && e.fancybox && (e.fancybox.defaults.btnTpl.fullScreen = !1));
    var o = {
        request: function(e) {
            e = e || t.documentElement,
            e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)
        },
        exit: function() {
            t[n.exitFullscreen]()
        },
        toggle: function(e) {
            e = e || t.documentElement,
            this.isFullscreen() ? this.exit() : this.request(e)
        },
        isFullscreen: function() {
            return Boolean(t[n.fullscreenElement])
        },
        enabled: function() {
            return Boolean(t[n.fullscreenEnabled])
        }
    };
    e.extend(!0, e.fancybox.defaults, {
        btnTpl: {
            fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="{{FULL_SCREEN}}"><svg viewBox="0 0 40 40"><path d="M9,12 v16 h22 v-16 h-22 v8" /></svg></button>'
        },
        fullScreen: {
            autoStart: !1
        }
    }),
    e(t).on({
        "onInit.fb": function(t, e) {
            var n;
            e && e.group[e.currIndex].opts.fullScreen ? (n = e.$refs.container,
            n.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function(t) {
                t.stopPropagation(),
                t.preventDefault(),
                o.toggle()
            }),
            e.opts.fullScreen && e.opts.fullScreen.autoStart === !0 && o.request(),
            e.FullScreen = o) : e && e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()
        },
        "afterKeydown.fb": function(t, e, n, o, i) {
            e && e.FullScreen && 70 === i && (o.preventDefault(),
            e.FullScreen.toggle())
        },
        "beforeClose.fb": function(t, e) {
            e && e.FullScreen && e.$refs.container.hasClass("fancybox-is-fullscreen") && o.exit()
        }
    }),
    e(t).on(n.fullscreenchange, function() {
        var t = o.isFullscreen()
          , n = e.fancybox.getInstance();
        n && (n.current && "image" === n.current.type && n.isAnimating && (n.current.$content.css("transition", "none"),
        n.isAnimating = !1,
        n.update(!0, !0, 0)),
        n.trigger("onFullscreenChange", t),
        n.$refs.container.toggleClass("fancybox-is-fullscreen", t))
    })
}(document, window.jQuery || jQuery),
function(t, e) {
    "use strict";
    var n = "fancybox-thumbs"
      , o = n + "-active"
      , i = n + "-loading";
    e.fancybox.defaults = e.extend(!0, {
        btnTpl: {
            thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg viewBox="0 0 120 120"><path d="M30,30 h14 v14 h-14 Z M50,30 h14 v14 h-14 Z M70,30 h14 v14 h-14 Z M30,50 h14 v14 h-14 Z M50,50 h14 v14 h-14 Z M70,50 h14 v14 h-14 Z M30,70 h14 v14 h-14 Z M50,70 h14 v14 h-14 Z M70,70 h14 v14 h-14 Z" /></svg></button>'
        },
        thumbs: {
            autoStart: !1,
            hideOnClose: !0,
            parentEl: ".fancybox-container",
            axis: "y"
        }
    }, e.fancybox.defaults);
    var a = function(t) {
        this.init(t)
    };
    e.extend(a.prototype, {
        $button: null,
        $grid: null,
        $list: null,
        isVisible: !1,
        isActive: !1,
        init: function(t) {
            var e, n, o = this;
            o.instance = t,
            t.Thumbs = o,
            o.opts = t.group[t.currIndex].opts.thumbs,
            e = t.group[0],
            e = e.opts.thumb || !(!e.opts.$thumb || !e.opts.$thumb.length) && e.opts.$thumb.attr("src"),
            t.group.length > 1 && (n = t.group[1],
            n = n.opts.thumb || !(!n.opts.$thumb || !n.opts.$thumb.length) && n.opts.$thumb.attr("src")),
            o.$button = t.$refs.toolbar.find("[data-fancybox-thumbs]"),
            o.opts && e && n && e && n ? (o.$button.show().on("click", function() {
                o.toggle()
            }),
            o.isActive = !0) : o.$button.hide()
        },
        create: function() {
            var t, o = this, a = o.instance, s = o.opts.parentEl, r = [];
            o.$grid || (o.$grid = e('<div class="' + n + " " + n + "-" + o.opts.axis + '"></div>').appendTo(a.$refs.container.find(s).addBack().filter(s)),
            o.$grid.on("click", "li", function() {
                a.jumpTo(e(this).attr("data-index"))
            })),
            o.$list || (o.$list = e("<ul>").appendTo(o.$grid)),
            e.each(a.group, function(e, n) {
                t = n.opts.thumb || (n.opts.$thumb ? n.opts.$thumb.attr("src") : null),
                t || "image" !== n.type || (t = n.src),
                r.push('<li data-index="' + e + '" tabindex="0" class="' + i + '"' + (t && t.length ? ' style="background-image:url(' + t + ')" />' : "") + "></li>")
            }),
            o.$list[0].innerHTML = r.join(""),
            "x" === o.opts.axis && o.$list.width(parseInt(o.$grid.css("padding-right"), 10) + a.group.length * o.$list.children().eq(0).outerWidth(!0))
        },
        focus: function(t) {
            var e, n, i = this, a = i.$list, s = i.$grid;
            i.instance.current && (e = a.children().removeClass(o).filter('[data-index="' + i.instance.current.index + '"]').addClass(o),
            n = e.position(),
            "y" === i.opts.axis && (n.top < 0 || n.top > a.height() - e.outerHeight()) ? a.stop().animate({
                scrollTop: a.scrollTop() + n.top
            }, t) : "x" === i.opts.axis && (n.left < s.scrollLeft() || n.left > s.scrollLeft() + (s.width() - e.outerWidth())) && a.parent().stop().animate({
                scrollLeft: n.left
            }, t))
        },
        update: function() {
            var t = this;
            t.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible),
            t.isVisible ? (t.$grid || t.create(),
            t.instance.trigger("onThumbsShow"),
            t.focus(0)) : t.$grid && t.instance.trigger("onThumbsHide"),
            t.instance.update()
        },
        hide: function() {
            this.isVisible = !1,
            this.update()
        },
        show: function() {
            this.isVisible = !0,
            this.update()
        },
        toggle: function() {
            this.isVisible = !this.isVisible,
            this.update()
        }
    }),
    e(t).on({
        "onInit.fb": function(t, e) {
            var n;
            e && !e.Thumbs && (n = new a(e),
            n.isActive && n.opts.autoStart === !0 && n.show())
        },
        "beforeShow.fb": function(t, e, n, o) {
            var i = e && e.Thumbs;
            i && i.isVisible && i.focus(o ? 0 : 250)
        },
        "afterKeydown.fb": function(t, e, n, o, i) {
            var a = e && e.Thumbs;
            a && a.isActive && 71 === i && (o.preventDefault(),
            a.toggle())
        },
        "beforeClose.fb": function(t, e) {
            var n = e && e.Thumbs;
            n && n.isVisible && n.opts.hideOnClose !== !1 && n.$grid.hide()
        }
    })
}(document, window.jQuery || jQuery),
function(t, e) {
    "use strict";
    function n(t) {
        var e = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;",
            "`": "&#x60;",
            "=": "&#x3D;"
        };
        return String(t).replace(/[&<>"'`=\/]/g, function(t) {
            return e[t]
        })
    }
    e.extend(!0, e.fancybox.defaults, {
        btnTpl: {
            share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg viewBox="0 0 40 40"><path d="M6,30 C8,18 19,16 23,16 L23,16 L23,10 L33,20 L23,29 L23,24 C19,24 8,27 6,30 Z"></svg></button>'
        },
        share: {
            url: function(t, e) {
                return !t.currentHash && "inline" !== e.type && "html" !== e.type && (e.origSrc || e.src) || window.location
            },
            tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" /></p></div>'
        }
    }),
    e(t).on("click", "[data-fancybox-share]", function() {
        var t, o, i = e.fancybox.getInstance(), a = i.current || null;
        a && ("function" === e.type(a.opts.share.url) && (t = a.opts.share.url.apply(a, [i, a])),
        o = a.opts.share.tpl.replace(/\{\{media\}\}/g, "image" === a.type ? encodeURIComponent(a.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g, n(t)).replace(/\{\{descr\}\}/g, i.$caption ? encodeURIComponent(i.$caption.text()) : ""),
        e.fancybox.open({
            src: i.translate(i, o),
            type: "html",
            opts: {
                animationEffect: !1,
                afterLoad: function(t, e) {
                    i.$refs.container.one("beforeClose.fb", function() {
                        t.close(null, 0)
                    }),
                    e.$content.find(".fancybox-share__links a").click(function() {
                        return window.open(this.href, "Share", "width=550, height=450"),
                        !1
                    })
                }
            }
        }))
    })
}(document, window.jQuery || jQuery),
function(t, e, n) {
    "use strict";
    function o() {
        var t = e.location.hash.substr(1)
          , n = t.split("-")
          , o = n.length > 1 && /^\+?\d+$/.test(n[n.length - 1]) ? parseInt(n.pop(-1), 10) || 1 : 1
          , i = n.join("-");
        return {
            hash: t,
            index: o < 1 ? 1 : o,
            gallery: i
        }
    }
    function i(t) {
        var e;
        "" !== t.gallery && (e = n("[data-fancybox='" + n.escapeSelector(t.gallery) + "']").eq(t.index - 1).trigger("click.fb-start"))
    }
    function a(t) {
        var e, n;
        return !!t && (e = t.current ? t.current.opts : t.opts,
        n = e.hash || (e.$orig ? e.$orig.data("fancybox") : ""),
        "" !== n && n)
    }
    n.escapeSelector || (n.escapeSelector = function(t) {
        var e = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g
          , n = function(t, e) {
            return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
        };
        return (t + "").replace(e, n)
    }
    ),
    n(function() {
        n.fancybox.defaults.hash !== !1 && (n(t).on({
            "onInit.fb": function(t, e) {
                var n, i;
                e.group[e.currIndex].opts.hash !== !1 && (n = o(),
                i = a(e),
                i && n.gallery && i == n.gallery && (e.currIndex = n.index - 1))
            },
            "beforeShow.fb": function(n, o, i, s) {
                var r;
                i && i.opts.hash !== !1 && (r = a(o),
                r && (o.currentHash = r + (o.group.length > 1 ? "-" + (i.index + 1) : ""),
                e.location.hash !== "#" + o.currentHash && (o.origHash || (o.origHash = e.location.hash),
                o.hashTimer && clearTimeout(o.hashTimer),
                o.hashTimer = setTimeout(function() {
                    "replaceState"in e.history ? (e.history[s ? "pushState" : "replaceState"]({}, t.title, e.location.pathname + e.location.search + "#" + o.currentHash),
                    s && (o.hasCreatedHistory = !0)) : e.location.hash = o.currentHash,
                    o.hashTimer = null
                }, 300))))
            },
            "beforeClose.fb": function(n, o, i) {
                var s;
                i.opts.hash !== !1 && (s = a(o),
                o.currentHash && o.hasCreatedHistory ? e.history.back() : o.currentHash && ("replaceState"in e.history ? e.history.replaceState({}, t.title, e.location.pathname + e.location.search + (o.origHash || "")) : e.location.hash = o.origHash),
                o.currentHash = null,
                clearTimeout(o.hashTimer))
            }
        }),
        n(e).on("hashchange.fb", function() {
            var t, e = o();
            n.each(n(".fancybox-container").get().reverse(), function(e, o) {
                var i = n(o).data("FancyBox");
                if (i.currentHash)
                    return t = i,
                    !1
            }),
            t ? !t.currentHash || t.currentHash === e.gallery + "-" + e.index || 1 === e.index && t.currentHash == e.gallery || (t.currentHash = null,
            t.close()) : "" !== e.gallery && i(e)
        }),
        setTimeout(function() {
            n.fancybox.getInstance() || i(o())
        }, 50))
    })
}(document, window, window.jQuery || jQuery),
function(t, e) {
    "use strict";
    var n = (new Date).getTime();
    e(t).on({
        "onInit.fb": function(t, e, o) {
            e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function(t) {
                var o = e.current
                  , i = (new Date).getTime();
                e.group.length < 2 || o.opts.wheel === !1 || "auto" === o.opts.wheel && "image" !== o.type || (t.preventDefault(),
                t.stopPropagation(),
                o.$slide.hasClass("fancybox-animated") || (t = t.originalEvent || t,
                i - n < 250 || (n = i,
                e[(-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail) < 0 ? "next" : "previous"]())))
            })
        }
    })
}(document, window.jQuery || jQuery);
;(function(f) {
    "use strict";
    "function" === typeof define && define.amd ? define(["jquery"], f) : "undefined" !== typeof module && module.exports ? module.exports = f(require("jquery")) : f(jQuery)
}
)(function($) {
    "use strict";
    function n(a) {
        return !a.nodeName || -1 !== $.inArray(a.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"])
    }
    function h(a) {
        return $.isFunction(a) || $.isPlainObject(a) ? a : {
            top: a,
            left: a
        }
    }
    var p = $.scrollTo = function(a, d, b) {
        return $(window).scrollTo(a, d, b)
    }
    ;
    p.defaults = {
        axis: "xy",
        duration: 0,
        limit: !0
    };
    $.fn.scrollTo = function(a, d, b) {
        "object" === typeof d && (b = d,
        d = 0);
        "function" === typeof b && (b = {
            onAfter: b
        });
        "max" === a && (a = 9E9);
        b = $.extend({}, p.defaults, b);
        d = d || b.duration;
        var u = b.queue && 1 < b.axis.length;
        u && (d /= 2);
        b.offset = h(b.offset);
        b.over = h(b.over);
        return this.each(function() {
            function k(a) {
                var k = $.extend({}, b, {
                    queue: !0,
                    duration: d,
                    complete: a && function() {
                        a.call(q, e, b)
                    }
                });
                r.animate(f, k)
            }
            if (null !== a) {
                var l = n(this), q = l ? this.contentWindow || window : this, r = $(q), e = a, f = {}, t;
                switch (typeof e) {
                case "number":
                case "string":
                    if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(e)) {
                        e = h(e);
                        break
                    }
                    e = l ? $(e) : $(e, q);
                case "object":
                    if (e.length === 0)
                        return;
                    if (e.is || e.style)
                        t = (e = $(e)).offset()
                }
                var v = $.isFunction(b.offset) && b.offset(q, e) || b.offset;
                $.each(b.axis.split(""), function(a, c) {
                    var d = "x" === c ? "Left" : "Top"
                      , m = d.toLowerCase()
                      , g = "scroll" + d
                      , h = r[g]()
                      , n = p.max(q, c);
                    t ? (f[g] = t[m] + (l ? 0 : h - r.offset()[m]),
                    b.margin && (f[g] -= parseInt(e.css("margin" + d), 10) || 0,
                    f[g] -= parseInt(e.css("border" + d + "Width"), 10) || 0),
                    f[g] += v[m] || 0,
                    b.over[m] && (f[g] += e["x" === c ? "width" : "height"]() * b.over[m])) : (d = e[m],
                    f[g] = d.slice && "%" === d.slice(-1) ? parseFloat(d) / 100 * n : d);
                    b.limit && /^\d+$/.test(f[g]) && (f[g] = 0 >= f[g] ? 0 : Math.min(f[g], n));
                    !a && 1 < b.axis.length && (h === f[g] ? f = {} : u && (k(b.onAfterFirst),
                    f = {}))
                });
                k(b.onAfter)
            }
        })
    }
    ;
    p.max = function(a, d) {
        var b = "x" === d ? "Width" : "Height"
          , h = "scroll" + b;
        if (!n(a))
            return a[h] - $(a)[b.toLowerCase()]();
        var b = "client" + b
          , k = a.ownerDocument || a.document
          , l = k.documentElement
          , k = k.body;
        return Math.max(l[h], k[h]) - Math.min(l[b], k[b])
    }
    ;
    $.Tween.propHooks.scrollLeft = $.Tween.propHooks.scrollTop = {
        get: function(a) {
            return $(a.elem)[a.prop]()
        },
        set: function(a) {
            var d = this.get(a);
            if (a.options.interrupt && a._last && a._last !== d)
                return $(a.elem).stop();
            var b = Math.round(a.now);
            d !== b && ($(a.elem)[a.prop](b),
            a._last = this.get(a))
        }
    };
    return p
});
!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Swiper = t()
}(this, function() {
    "use strict";
    var e = "undefined" == typeof document ? {
        body: {},
        addEventListener: function() {},
        removeEventListener: function() {},
        activeElement: {
            blur: function() {},
            nodeName: ""
        },
        querySelector: function() {
            return null
        },
        querySelectorAll: function() {
            return []
        },
        getElementById: function() {
            return null
        },
        createEvent: function() {
            return {
                initEvent: function() {}
            }
        },
        createElement: function() {
            return {
                children: [],
                childNodes: [],
                style: {},
                setAttribute: function() {},
                getElementsByTagName: function() {
                    return []
                }
            }
        },
        location: {
            hash: ""
        }
    } : document
      , t = "undefined" == typeof window ? {
        document: e,
        navigator: {
            userAgent: ""
        },
        location: {},
        history: {},
        CustomEvent: function() {
            return this
        },
        addEventListener: function() {},
        removeEventListener: function() {},
        getComputedStyle: function() {
            return {
                getPropertyValue: function() {
                    return ""
                }
            }
        },
        Image: function() {},
        Date: function() {},
        screen: {},
        setTimeout: function() {},
        clearTimeout: function() {}
    } : window
      , i = function(e) {
        for (var t = 0; t < e.length; t += 1)
            this[t] = e[t];
        return this.length = e.length,
        this
    };
    function s(s, a) {
        var r = []
          , n = 0;
        if (s && !a && s instanceof i)
            return s;
        if (s)
            if ("string" == typeof s) {
                var o, l, d = s.trim();
                if (d.indexOf("<") >= 0 && d.indexOf(">") >= 0) {
                    var h = "div";
                    for (0 === d.indexOf("<li") && (h = "ul"),
                    0 === d.indexOf("<tr") && (h = "tbody"),
                    0 !== d.indexOf("<td") && 0 !== d.indexOf("<th") || (h = "tr"),
                    0 === d.indexOf("<tbody") && (h = "table"),
                    0 === d.indexOf("<option") && (h = "select"),
                    (l = e.createElement(h)).innerHTML = d,
                    n = 0; n < l.childNodes.length; n += 1)
                        r.push(l.childNodes[n])
                } else
                    for (o = a || "#" !== s[0] || s.match(/[ .<>:~]/) ? (a || e).querySelectorAll(s.trim()) : [e.getElementById(s.trim().split("#")[1])],
                    n = 0; n < o.length; n += 1)
                        o[n] && r.push(o[n])
            } else if (s.nodeType || s === t || s === e)
                r.push(s);
            else if (s.length > 0 && s[0].nodeType)
                for (n = 0; n < s.length; n += 1)
                    r.push(s[n]);
        return new i(r)
    }
    function a(e) {
        for (var t = [], i = 0; i < e.length; i += 1)
            -1 === t.indexOf(e[i]) && t.push(e[i]);
        return t
    }
    s.fn = i.prototype,
    s.Class = i,
    s.Dom7 = i;
    var r = {
        addClass: function(e) {
            if (void 0 === e)
                return this;
            for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                for (var s = 0; s < this.length; s += 1)
                    void 0 !== this[s].classList && this[s].classList.add(t[i]);
            return this
        },
        removeClass: function(e) {
            for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                for (var s = 0; s < this.length; s += 1)
                    void 0 !== this[s].classList && this[s].classList.remove(t[i]);
            return this
        },
        hasClass: function(e) {
            return !!this[0] && this[0].classList.contains(e)
        },
        toggleClass: function(e) {
            for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                for (var s = 0; s < this.length; s += 1)
                    void 0 !== this[s].classList && this[s].classList.toggle(t[i]);
            return this
        },
        attr: function(e, t) {
            var i = arguments;
            if (1 === arguments.length && "string" == typeof e)
                return this[0] ? this[0].getAttribute(e) : void 0;
            for (var s = 0; s < this.length; s += 1)
                if (2 === i.length)
                    this[s].setAttribute(e, t);
                else
                    for (var a in e)
                        this[s][a] = e[a],
                        this[s].setAttribute(a, e[a]);
            return this
        },
        removeAttr: function(e) {
            for (var t = 0; t < this.length; t += 1)
                this[t].removeAttribute(e);
            return this
        },
        data: function(e, t) {
            var i;
            if (void 0 !== t) {
                for (var s = 0; s < this.length; s += 1)
                    (i = this[s]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}),
                    i.dom7ElementDataStorage[e] = t;
                return this
            }
            if (i = this[0]) {
                if (i.dom7ElementDataStorage && e in i.dom7ElementDataStorage)
                    return i.dom7ElementDataStorage[e];
                var a = i.getAttribute("data-" + e);
                return a || void 0
            }
        },
        transform: function(e) {
            for (var t = 0; t < this.length; t += 1) {
                var i = this[t].style;
                i.webkitTransform = e,
                i.transform = e
            }
            return this
        },
        transition: function(e) {
            "string" != typeof e && (e += "ms");
            for (var t = 0; t < this.length; t += 1) {
                var i = this[t].style;
                i.webkitTransitionDuration = e,
                i.transitionDuration = e
            }
            return this
        },
        on: function() {
            for (var e, t = [], i = arguments.length; i--; )
                t[i] = arguments[i];
            var a = t[0]
              , r = t[1]
              , n = t[2]
              , o = t[3];
            function l(e) {
                var t = e.target;
                if (t) {
                    var i = e.target.dom7EventData || [];
                    if (i.unshift(e),
                    s(t).is(r))
                        n.apply(t, i);
                    else
                        for (var a = s(t).parents(), o = 0; o < a.length; o += 1)
                            s(a[o]).is(r) && n.apply(a[o], i)
                }
            }
            function d(e) {
                var t = e && e.target ? e.target.dom7EventData || [] : [];
                t.unshift(e),
                n.apply(this, t)
            }
            "function" == typeof t[1] && (a = (e = t)[0],
            n = e[1],
            o = e[2],
            r = void 0),
            o || (o = !1);
            for (var h, p = a.split(" "), c = 0; c < this.length; c += 1) {
                var u = this[c];
                if (r)
                    for (h = 0; h < p.length; h += 1)
                        u.dom7LiveListeners || (u.dom7LiveListeners = []),
                        u.dom7LiveListeners.push({
                            type: a,
                            listener: n,
                            proxyListener: l
                        }),
                        u.addEventListener(p[h], l, o);
                else
                    for (h = 0; h < p.length; h += 1)
                        u.dom7Listeners || (u.dom7Listeners = []),
                        u.dom7Listeners.push({
                            type: a,
                            listener: n,
                            proxyListener: d
                        }),
                        u.addEventListener(p[h], d, o)
            }
            return this
        },
        off: function() {
            for (var e, t = [], i = arguments.length; i--; )
                t[i] = arguments[i];
            var s = t[0]
              , a = t[1]
              , r = t[2]
              , n = t[3];
            "function" == typeof t[1] && (s = (e = t)[0],
            r = e[1],
            n = e[2],
            a = void 0),
            n || (n = !1);
            for (var o = s.split(" "), l = 0; l < o.length; l += 1)
                for (var d = 0; d < this.length; d += 1) {
                    var h = this[d];
                    if (a) {
                        if (h.dom7LiveListeners)
                            for (var p = 0; p < h.dom7LiveListeners.length; p += 1)
                                r ? h.dom7LiveListeners[p].listener === r && h.removeEventListener(o[l], h.dom7LiveListeners[p].proxyListener, n) : h.dom7LiveListeners[p].type === o[l] && h.removeEventListener(o[l], h.dom7LiveListeners[p].proxyListener, n)
                    } else if (h.dom7Listeners)
                        for (var c = 0; c < h.dom7Listeners.length; c += 1)
                            r ? h.dom7Listeners[c].listener === r && h.removeEventListener(o[l], h.dom7Listeners[c].proxyListener, n) : h.dom7Listeners[c].type === o[l] && h.removeEventListener(o[l], h.dom7Listeners[c].proxyListener, n)
                }
            return this
        },
        trigger: function() {
            for (var i = [], s = arguments.length; s--; )
                i[s] = arguments[s];
            for (var a = i[0].split(" "), r = i[1], n = 0; n < a.length; n += 1)
                for (var o = 0; o < this.length; o += 1) {
                    var l = void 0;
                    try {
                        l = new t.CustomEvent(a[n],{
                            detail: r,
                            bubbles: !0,
                            cancelable: !0
                        })
                    } catch (t) {
                        (l = e.createEvent("Event")).initEvent(a[n], !0, !0),
                        l.detail = r
                    }
                    this[o].dom7EventData = i.filter(function(e, t) {
                        return t > 0
                    }),
                    this[o].dispatchEvent(l),
                    this[o].dom7EventData = [],
                    delete this[o].dom7EventData
                }
            return this
        },
        transitionEnd: function(e) {
            var t, i = ["webkitTransitionEnd", "transitionend"], s = this;
            function a(r) {
                if (r.target === this)
                    for (e.call(this, r),
                    t = 0; t < i.length; t += 1)
                        s.off(i[t], a)
            }
            if (e)
                for (t = 0; t < i.length; t += 1)
                    s.on(i[t], a);
            return this
        },
        outerWidth: function(e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        },
        outerHeight: function(e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        },
        offset: function() {
            if (this.length > 0) {
                var i = this[0]
                  , s = i.getBoundingClientRect()
                  , a = e.body
                  , r = i.clientTop || a.clientTop || 0
                  , n = i.clientLeft || a.clientLeft || 0
                  , o = i === t ? t.scrollY : i.scrollTop
                  , l = i === t ? t.scrollX : i.scrollLeft;
                return {
                    top: s.top + o - r,
                    left: s.left + l - n
                }
            }
            return null
        },
        css: function(e, i) {
            var s;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (s = 0; s < this.length; s += 1)
                        for (var a in e)
                            this[s].style[a] = e[a];
                    return this
                }
                if (this[0])
                    return t.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (s = 0; s < this.length; s += 1)
                    this[s].style[e] = i;
                return this
            }
            return this
        },
        each: function(e) {
            if (!e)
                return this;
            for (var t = 0; t < this.length; t += 1)
                if (!1 === e.call(this[t], t, this[t]))
                    return this;
            return this
        },
        html: function(e) {
            if (void 0 === e)
                return this[0] ? this[0].innerHTML : void 0;
            for (var t = 0; t < this.length; t += 1)
                this[t].innerHTML = e;
            return this
        },
        text: function(e) {
            if (void 0 === e)
                return this[0] ? this[0].textContent.trim() : null;
            for (var t = 0; t < this.length; t += 1)
                this[t].textContent = e;
            return this
        },
        is: function(a) {
            var r, n, o = this[0];
            if (!o || void 0 === a)
                return !1;
            if ("string" == typeof a) {
                if (o.matches)
                    return o.matches(a);
                if (o.webkitMatchesSelector)
                    return o.webkitMatchesSelector(a);
                if (o.msMatchesSelector)
                    return o.msMatchesSelector(a);
                for (r = s(a),
                n = 0; n < r.length; n += 1)
                    if (r[n] === o)
                        return !0;
                return !1
            }
            if (a === e)
                return o === e;
            if (a === t)
                return o === t;
            if (a.nodeType || a instanceof i) {
                for (r = a.nodeType ? [a] : a,
                n = 0; n < r.length; n += 1)
                    if (r[n] === o)
                        return !0;
                return !1
            }
            return !1
        },
        index: function() {
            var e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling); )
                    1 === t.nodeType && (e += 1);
                return e
            }
        },
        eq: function(e) {
            if (void 0 === e)
                return this;
            var t, s = this.length;
            return new i(e > s - 1 ? [] : e < 0 ? (t = s + e) < 0 ? [] : [this[t]] : [this[e]])
        },
        append: function() {
            for (var t, s = [], a = arguments.length; a--; )
                s[a] = arguments[a];
            for (var r = 0; r < s.length; r += 1) {
                t = s[r];
                for (var n = 0; n < this.length; n += 1)
                    if ("string" == typeof t) {
                        var o = e.createElement("div");
                        for (o.innerHTML = t; o.firstChild; )
                            this[n].appendChild(o.firstChild)
                    } else if (t instanceof i)
                        for (var l = 0; l < t.length; l += 1)
                            this[n].appendChild(t[l]);
                    else
                        this[n].appendChild(t)
            }
            return this
        },
        prepend: function(t) {
            var s, a;
            for (s = 0; s < this.length; s += 1)
                if ("string" == typeof t) {
                    var r = e.createElement("div");
                    for (r.innerHTML = t,
                    a = r.childNodes.length - 1; a >= 0; a -= 1)
                        this[s].insertBefore(r.childNodes[a], this[s].childNodes[0])
                } else if (t instanceof i)
                    for (a = 0; a < t.length; a += 1)
                        this[s].insertBefore(t[a], this[s].childNodes[0]);
                else
                    this[s].insertBefore(t, this[s].childNodes[0]);
            return this
        },
        next: function(e) {
            return this.length > 0 ? e ? this[0].nextElementSibling && s(this[0].nextElementSibling).is(e) ? new i([this[0].nextElementSibling]) : new i([]) : this[0].nextElementSibling ? new i([this[0].nextElementSibling]) : new i([]) : new i([])
        },
        nextAll: function(e) {
            var t = []
              , a = this[0];
            if (!a)
                return new i([]);
            for (; a.nextElementSibling; ) {
                var r = a.nextElementSibling;
                e ? s(r).is(e) && t.push(r) : t.push(r),
                a = r
            }
            return new i(t)
        },
        prev: function(e) {
            if (this.length > 0) {
                var t = this[0];
                return e ? t.previousElementSibling && s(t.previousElementSibling).is(e) ? new i([t.previousElementSibling]) : new i([]) : t.previousElementSibling ? new i([t.previousElementSibling]) : new i([])
            }
            return new i([])
        },
        prevAll: function(e) {
            var t = []
              , a = this[0];
            if (!a)
                return new i([]);
            for (; a.previousElementSibling; ) {
                var r = a.previousElementSibling;
                e ? s(r).is(e) && t.push(r) : t.push(r),
                a = r
            }
            return new i(t)
        },
        parent: function(e) {
            for (var t = [], i = 0; i < this.length; i += 1)
                null !== this[i].parentNode && (e ? s(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
            return s(a(t))
        },
        parents: function(e) {
            for (var t = [], i = 0; i < this.length; i += 1)
                for (var r = this[i].parentNode; r; )
                    e ? s(r).is(e) && t.push(r) : t.push(r),
                    r = r.parentNode;
            return s(a(t))
        },
        closest: function(e) {
            var t = this;
            return void 0 === e ? new i([]) : (t.is(e) || (t = t.parents(e).eq(0)),
            t)
        },
        find: function(e) {
            for (var t = [], s = 0; s < this.length; s += 1)
                for (var a = this[s].querySelectorAll(e), r = 0; r < a.length; r += 1)
                    t.push(a[r]);
            return new i(t)
        },
        children: function(e) {
            for (var t = [], r = 0; r < this.length; r += 1)
                for (var n = this[r].childNodes, o = 0; o < n.length; o += 1)
                    e ? 1 === n[o].nodeType && s(n[o]).is(e) && t.push(n[o]) : 1 === n[o].nodeType && t.push(n[o]);
            return new i(a(t))
        },
        remove: function() {
            for (var e = 0; e < this.length; e += 1)
                this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        },
        add: function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            var i, a;
            for (i = 0; i < e.length; i += 1) {
                var r = s(e[i]);
                for (a = 0; a < r.length; a += 1)
                    this[this.length] = r[a],
                    this.length += 1
            }
            return this
        },
        styles: function() {
            return this[0] ? t.getComputedStyle(this[0], null) : {}
        }
    };
    Object.keys(r).forEach(function(e) {
        s.fn[e] = r[e]
    });
    var n, o, l, d = {
        deleteProps: function(e) {
            var t = e;
            Object.keys(t).forEach(function(e) {
                try {
                    t[e] = null
                } catch (e) {}
                try {
                    delete t[e]
                } catch (e) {}
            })
        },
        nextTick: function(e, t) {
            return void 0 === t && (t = 0),
            setTimeout(e, t)
        },
        now: function() {
            return Date.now()
        },
        getTranslate: function(e, i) {
            var s, a, r;
            void 0 === i && (i = "x");
            var n = t.getComputedStyle(e, null);
            return t.WebKitCSSMatrix ? ((a = n.transform || n.webkitTransform).split(",").length > 6 && (a = a.split(", ").map(function(e) {
                return e.replace(",", ".")
            }).join(", ")),
            r = new t.WebKitCSSMatrix("none" === a ? "" : a)) : s = (r = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","),
            "x" === i && (a = t.WebKitCSSMatrix ? r.m41 : 16 === s.length ? parseFloat(s[12]) : parseFloat(s[4])),
            "y" === i && (a = t.WebKitCSSMatrix ? r.m42 : 16 === s.length ? parseFloat(s[13]) : parseFloat(s[5])),
            a || 0
        },
        parseUrlQuery: function(e) {
            var i, s, a, r, n = {}, o = e || t.location.href;
            if ("string" == typeof o && o.length)
                for (r = (s = (o = o.indexOf("?") > -1 ? o.replace(/\S*\?/, "") : "").split("&").filter(function(e) {
                    return "" !== e
                })).length,
                i = 0; i < r; i += 1)
                    a = s[i].replace(/#\S+/g, "").split("="),
                    n[decodeURIComponent(a[0])] = void 0 === a[1] ? void 0 : decodeURIComponent(a[1]) || "";
            return n
        },
        isObject: function(e) {
            return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
        },
        extend: function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            for (var i = Object(e[0]), s = 1; s < e.length; s += 1) {
                var a = e[s];
                if (void 0 !== a && null !== a)
                    for (var r = Object.keys(Object(a)), n = 0, o = r.length; n < o; n += 1) {
                        var l = r[n]
                          , h = Object.getOwnPropertyDescriptor(a, l);
                        void 0 !== h && h.enumerable && (d.isObject(i[l]) && d.isObject(a[l]) ? d.extend(i[l], a[l]) : !d.isObject(i[l]) && d.isObject(a[l]) ? (i[l] = {},
                        d.extend(i[l], a[l])) : i[l] = a[l])
                    }
            }
            return i
        }
    }, h = (l = e.createElement("div"),
    {
        touch: t.Modernizr && !0 === t.Modernizr.touch || !!("ontouchstart"in t || t.DocumentTouch && e instanceof t.DocumentTouch),
        pointerEvents: !(!t.navigator.pointerEnabled && !t.PointerEvent),
        prefixedPointerEvents: !!t.navigator.msPointerEnabled,
        transition: (o = l.style,
        "transition"in o || "webkitTransition"in o || "MozTransition"in o),
        transforms3d: t.Modernizr && !0 === t.Modernizr.csstransforms3d || (n = l.style,
        "webkitPerspective"in n || "MozPerspective"in n || "OPerspective"in n || "MsPerspective"in n || "perspective"in n),
        flexbox: function() {
            for (var e = l.style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), i = 0; i < t.length; i += 1)
                if (t[i]in e)
                    return !0;
            return !1
        }(),
        observer: "MutationObserver"in t || "WebkitMutationObserver"in t,
        passiveListener: function() {
            var e = !1;
            try {
                var i = Object.defineProperty({}, "passive", {
                    get: function() {
                        e = !0
                    }
                });
                t.addEventListener("testPassiveListener", null, i)
            } catch (e) {}
            return e
        }(),
        gestures: "ongesturestart"in t
    }), p = function(e) {
        void 0 === e && (e = {});
        var t = this;
        t.params = e,
        t.eventsListeners = {},
        t.params && t.params.on && Object.keys(t.params.on).forEach(function(e) {
            t.on(e, t.params.on[e])
        })
    }, c = {
        components: {
            configurable: !0
        }
    };
    p.prototype.on = function(e, t, i) {
        var s = this;
        if ("function" != typeof t)
            return s;
        var a = i ? "unshift" : "push";
        return e.split(" ").forEach(function(e) {
            s.eventsListeners[e] || (s.eventsListeners[e] = []),
            s.eventsListeners[e][a](t)
        }),
        s
    }
    ,
    p.prototype.once = function(e, t, i) {
        var s = this;
        if ("function" != typeof t)
            return s;
        return s.on(e, function i() {
            for (var a = [], r = arguments.length; r--; )
                a[r] = arguments[r];
            t.apply(s, a),
            s.off(e, i)
        }, i)
    }
    ,
    p.prototype.off = function(e, t) {
        var i = this;
        return e.split(" ").forEach(function(e) {
            void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e].forEach(function(s, a) {
                s === t && i.eventsListeners[e].splice(a, 1)
            })
        }),
        i
    }
    ,
    p.prototype.emit = function() {
        for (var e = [], t = arguments.length; t--; )
            e[t] = arguments[t];
        var i, s, a, r = this;
        return r.eventsListeners ? ("string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0],
        s = e.slice(1, e.length),
        a = r) : (i = e[0].events,
        s = e[0].data,
        a = e[0].context || r),
        (Array.isArray(i) ? i : i.split(" ")).forEach(function(e) {
            if (r.eventsListeners[e]) {
                var t = [];
                r.eventsListeners[e].forEach(function(e) {
                    t.push(e)
                }),
                t.forEach(function(e) {
                    e.apply(a, s)
                })
            }
        }),
        r) : r
    }
    ,
    p.prototype.useModulesParams = function(e) {
        var t = this;
        t.modules && Object.keys(t.modules).forEach(function(i) {
            var s = t.modules[i];
            s.params && d.extend(e, s.params)
        })
    }
    ,
    p.prototype.useModules = function(e) {
        void 0 === e && (e = {});
        var t = this;
        t.modules && Object.keys(t.modules).forEach(function(i) {
            var s = t.modules[i]
              , a = e[i] || {};
            s.instance && Object.keys(s.instance).forEach(function(e) {
                var i = s.instance[e];
                t[e] = "function" == typeof i ? i.bind(t) : i
            }),
            s.on && t.on && Object.keys(s.on).forEach(function(e) {
                t.on(e, s.on[e])
            }),
            s.create && s.create.bind(t)(a)
        })
    }
    ,
    c.components.set = function(e) {
        this.use && this.use(e)
    }
    ,
    p.installModule = function(e) {
        for (var t = [], i = arguments.length - 1; i-- > 0; )
            t[i] = arguments[i + 1];
        var s = this;
        s.prototype.modules || (s.prototype.modules = {});
        var a = e.name || Object.keys(s.prototype.modules).length + "_" + d.now();
        return s.prototype.modules[a] = e,
        e.proto && Object.keys(e.proto).forEach(function(t) {
            s.prototype[t] = e.proto[t]
        }),
        e.static && Object.keys(e.static).forEach(function(t) {
            s[t] = e.static[t]
        }),
        e.install && e.install.apply(s, t),
        s
    }
    ,
    p.use = function(e) {
        for (var t = [], i = arguments.length - 1; i-- > 0; )
            t[i] = arguments[i + 1];
        var s = this;
        return Array.isArray(e) ? (e.forEach(function(e) {
            return s.installModule(e)
        }),
        s) : s.installModule.apply(s, [e].concat(t))
    }
    ,
    Object.defineProperties(p, c);
    var u = {
        updateSize: function() {
            var e, t, i = this.$el;
            e = void 0 !== this.params.width ? this.params.width : i[0].clientWidth,
            t = void 0 !== this.params.height ? this.params.height : i[0].clientHeight,
            0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10),
            t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10),
            d.extend(this, {
                width: e,
                height: t,
                size: this.isHorizontal() ? e : t
            }))
        },
        updateSlides: function() {
            var e = this.params
              , i = this.$wrapperEl
              , s = this.size
              , a = this.rtlTranslate
              , r = this.wrongRTL
              , n = i.children("." + this.params.slideClass)
              , o = this.virtual && e.virtual.enabled ? this.virtual.slides.length : n.length
              , l = []
              , p = []
              , c = []
              , u = e.slidesOffsetBefore;
            "function" == typeof u && (u = e.slidesOffsetBefore.call(this));
            var v = e.slidesOffsetAfter;
            "function" == typeof v && (v = e.slidesOffsetAfter.call(this));
            var f = o
              , m = this.snapGrid.length
              , g = this.snapGrid.length
              , b = e.spaceBetween
              , w = -u
              , y = 0
              , x = 0;
            if (void 0 !== s) {
                var E, T;
                "string" == typeof b && b.indexOf("%") >= 0 && (b = parseFloat(b.replace("%", "")) / 100 * s),
                this.virtualSize = -b,
                a ? n.css({
                    marginLeft: "",
                    marginTop: ""
                }) : n.css({
                    marginRight: "",
                    marginBottom: ""
                }),
                e.slidesPerColumn > 1 && (E = Math.floor(o / e.slidesPerColumn) === o / this.params.slidesPerColumn ? o : Math.ceil(o / e.slidesPerColumn) * e.slidesPerColumn,
                "auto" !== e.slidesPerView && "row" === e.slidesPerColumnFill && (E = Math.max(E, e.slidesPerView * e.slidesPerColumn)));
                for (var S, C = e.slidesPerColumn, M = E / C, z = M - (e.slidesPerColumn * M - o), P = 0; P < o; P += 1) {
                    T = 0;
                    var k = n.eq(P);
                    if (e.slidesPerColumn > 1) {
                        var $ = void 0
                          , L = void 0
                          , I = void 0;
                        "column" === e.slidesPerColumnFill ? (I = P - (L = Math.floor(P / C)) * C,
                        (L > z || L === z && I === C - 1) && (I += 1) >= C && (I = 0,
                        L += 1),
                        $ = L + I * E / C,
                        k.css({
                            "-webkit-box-ordinal-group": $,
                            "-moz-box-ordinal-group": $,
                            "-ms-flex-order": $,
                            "-webkit-order": $,
                            order: $
                        })) : L = P - (I = Math.floor(P / M)) * M,
                        k.css("margin-" + (this.isHorizontal() ? "top" : "left"), 0 !== I && e.spaceBetween && e.spaceBetween + "px").attr("data-swiper-column", L).attr("data-swiper-row", I)
                    }
                    if ("none" !== k.css("display")) {
                        if ("auto" === e.slidesPerView) {
                            var D = t.getComputedStyle(k[0], null);
                            T = this.isHorizontal() ? k[0].getBoundingClientRect().width + parseFloat(D.getPropertyValue("margin-left")) + parseFloat(D.getPropertyValue("margin-right")) : k[0].getBoundingClientRect().height + parseFloat(D.getPropertyValue("margin-top")) + parseFloat(D.getPropertyValue("margin-bottom")),
                            e.roundLengths && (T = Math.floor(T))
                        } else
                            T = (s - (e.slidesPerView - 1) * b) / e.slidesPerView,
                            e.roundLengths && (T = Math.floor(T)),
                            n[P] && (this.isHorizontal() ? n[P].style.width = T + "px" : n[P].style.height = T + "px");
                        n[P] && (n[P].swiperSlideSize = T),
                        c.push(T),
                        e.centeredSlides ? (w = w + T / 2 + y / 2 + b,
                        0 === y && 0 !== P && (w = w - s / 2 - b),
                        0 === P && (w = w - s / 2 - b),
                        Math.abs(w) < .001 && (w = 0),
                        x % e.slidesPerGroup == 0 && l.push(w),
                        p.push(w)) : (x % e.slidesPerGroup == 0 && l.push(w),
                        p.push(w),
                        w = w + T + b),
                        this.virtualSize += T + b,
                        y = T,
                        x += 1
                    }
                }
                if (this.virtualSize = Math.max(this.virtualSize, s) + v,
                a && r && ("slide" === e.effect || "coverflow" === e.effect) && i.css({
                    width: this.virtualSize + e.spaceBetween + "px"
                }),
                h.flexbox && !e.setWrapperSize || (this.isHorizontal() ? i.css({
                    width: this.virtualSize + e.spaceBetween + "px"
                }) : i.css({
                    height: this.virtualSize + e.spaceBetween + "px"
                })),
                e.slidesPerColumn > 1 && (this.virtualSize = (T + e.spaceBetween) * E,
                this.virtualSize = Math.ceil(this.virtualSize / e.slidesPerColumn) - e.spaceBetween,
                this.isHorizontal() ? i.css({
                    width: this.virtualSize + e.spaceBetween + "px"
                }) : i.css({
                    height: this.virtualSize + e.spaceBetween + "px"
                }),
                e.centeredSlides)) {
                    S = [];
                    for (var O = 0; O < l.length; O += 1)
                        l[O] < this.virtualSize + l[0] && S.push(l[O]);
                    l = S
                }
                if (!e.centeredSlides) {
                    S = [];
                    for (var A = 0; A < l.length; A += 1)
                        l[A] <= this.virtualSize - s && S.push(l[A]);
                    l = S,
                    Math.floor(this.virtualSize - s) - Math.floor(l[l.length - 1]) > 1 && l.push(this.virtualSize - s)
                }
                0 === l.length && (l = [0]),
                0 !== e.spaceBetween && (this.isHorizontal() ? a ? n.css({
                    marginLeft: b + "px"
                }) : n.css({
                    marginRight: b + "px"
                }) : n.css({
                    marginBottom: b + "px"
                })),
                d.extend(this, {
                    slides: n,
                    snapGrid: l,
                    slidesGrid: p,
                    slidesSizesGrid: c
                }),
                o !== f && this.emit("slidesLengthChange"),
                l.length !== m && (this.params.watchOverflow && this.checkOverflow(),
                this.emit("snapGridLengthChange")),
                p.length !== g && this.emit("slidesGridLengthChange"),
                (e.watchSlidesProgress || e.watchSlidesVisibility) && this.updateSlidesOffset()
            }
        },
        updateAutoHeight: function(e) {
            var t, i = [], s = 0;
            if ("number" == typeof e ? this.setTransition(e) : !0 === e && this.setTransition(this.params.speed),
            "auto" !== this.params.slidesPerView && this.params.slidesPerView > 1)
                for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) {
                    var a = this.activeIndex + t;
                    if (a > this.slides.length)
                        break;
                    i.push(this.slides.eq(a)[0])
                }
            else
                i.push(this.slides.eq(this.activeIndex)[0]);
            for (t = 0; t < i.length; t += 1)
                if (void 0 !== i[t]) {
                    var r = i[t].offsetHeight;
                    s = r > s ? r : s
                }
            s && this.$wrapperEl.css("height", s + "px")
        },
        updateSlidesOffset: function() {
            for (var e = this.slides, t = 0; t < e.length; t += 1)
                e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
        },
        updateSlidesProgress: function(e) {
            void 0 === e && (e = this.translate || 0);
            var t = this.params
              , i = this.slides
              , s = this.rtlTranslate;
            if (0 !== i.length) {
                void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
                var a = -e;
                s && (a = e),
                i.removeClass(t.slideVisibleClass);
                for (var r = 0; r < i.length; r += 1) {
                    var n = i[r]
                      , o = (a + (t.centeredSlides ? this.minTranslate() : 0) - n.swiperSlideOffset) / (n.swiperSlideSize + t.spaceBetween);
                    if (t.watchSlidesVisibility) {
                        var l = -(a - n.swiperSlideOffset)
                          , d = l + this.slidesSizesGrid[r];
                        (l >= 0 && l < this.size || d > 0 && d <= this.size || l <= 0 && d >= this.size) && i.eq(r).addClass(t.slideVisibleClass)
                    }
                    n.progress = s ? -o : o
                }
            }
        },
        updateProgress: function(e) {
            void 0 === e && (e = this.translate || 0);
            var t = this.params
              , i = this.maxTranslate() - this.minTranslate()
              , s = this.progress
              , a = this.isBeginning
              , r = this.isEnd
              , n = a
              , o = r;
            0 === i ? (s = 0,
            a = !0,
            r = !0) : (a = (s = (e - this.minTranslate()) / i) <= 0,
            r = s >= 1),
            d.extend(this, {
                progress: s,
                isBeginning: a,
                isEnd: r
            }),
            (t.watchSlidesProgress || t.watchSlidesVisibility) && this.updateSlidesProgress(e),
            a && !n && this.emit("reachBeginning toEdge"),
            r && !o && this.emit("reachEnd toEdge"),
            (n && !a || o && !r) && this.emit("fromEdge"),
            this.emit("progress", s)
        },
        updateSlidesClasses: function() {
            var e, t = this.slides, i = this.params, s = this.$wrapperEl, a = this.activeIndex, r = this.realIndex, n = this.virtual && i.virtual.enabled;
            t.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass),
            (e = n ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + a + '"]') : t.eq(a)).addClass(i.slideActiveClass),
            i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass));
            var o = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
            i.loop && 0 === o.length && (o = t.eq(0)).addClass(i.slideNextClass);
            var l = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
            i.loop && 0 === l.length && (l = t.eq(-1)).addClass(i.slidePrevClass),
            i.loop && (o.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass),
            l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass))
        },
        updateActiveIndex: function(e) {
            var t, i = this.rtlTranslate ? this.translate : -this.translate, s = this.slidesGrid, a = this.snapGrid, r = this.params, n = this.activeIndex, o = this.realIndex, l = this.snapIndex, h = e;
            if (void 0 === h) {
                for (var p = 0; p < s.length; p += 1)
                    void 0 !== s[p + 1] ? i >= s[p] && i < s[p + 1] - (s[p + 1] - s[p]) / 2 ? h = p : i >= s[p] && i < s[p + 1] && (h = p + 1) : i >= s[p] && (h = p);
                r.normalizeSlideIndex && (h < 0 || void 0 === h) && (h = 0)
            }
            if ((t = a.indexOf(i) >= 0 ? a.indexOf(i) : Math.floor(h / r.slidesPerGroup)) >= a.length && (t = a.length - 1),
            h !== n) {
                var c = parseInt(this.slides.eq(h).attr("data-swiper-slide-index") || h, 10);
                d.extend(this, {
                    snapIndex: t,
                    realIndex: c,
                    previousIndex: n,
                    activeIndex: h
                }),
                this.emit("activeIndexChange"),
                this.emit("snapIndexChange"),
                o !== c && this.emit("realIndexChange"),
                this.emit("slideChange")
            } else
                t !== l && (this.snapIndex = t,
                this.emit("snapIndexChange"))
        },
        updateClickedSlide: function(e) {
            var t = this.params
              , i = s(e.target).closest("." + t.slideClass)[0]
              , a = !1;
            if (i)
                for (var r = 0; r < this.slides.length; r += 1)
                    this.slides[r] === i && (a = !0);
            if (!i || !a)
                return this.clickedSlide = void 0,
                void (this.clickedIndex = void 0);
            this.clickedSlide = i,
            this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(s(i).attr("data-swiper-slide-index"), 10) : this.clickedIndex = s(i).index(),
            t.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide()
        }
    };
    var v = {
        getTranslate: function(e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            var t = this.params
              , i = this.rtlTranslate
              , s = this.translate
              , a = this.$wrapperEl;
            if (t.virtualTranslate)
                return i ? -s : s;
            var r = d.getTranslate(a[0], e);
            return i && (r = -r),
            r || 0
        },
        setTranslate: function(e, t) {
            var i = this.rtlTranslate
              , s = this.params
              , a = this.$wrapperEl
              , r = this.progress
              , n = 0
              , o = 0;
            this.isHorizontal() ? n = i ? -e : e : o = e,
            s.roundLengths && (n = Math.floor(n),
            o = Math.floor(o)),
            s.virtualTranslate || (h.transforms3d ? a.transform("translate3d(" + n + "px, " + o + "px, 0px)") : a.transform("translate(" + n + "px, " + o + "px)")),
            this.translate = this.isHorizontal() ? n : o;
            var l = this.maxTranslate() - this.minTranslate();
            (0 === l ? 0 : (e - this.minTranslate()) / l) !== r && this.updateProgress(e),
            this.emit("setTranslate", this.translate, t)
        },
        minTranslate: function() {
            return -this.snapGrid[0]
        },
        maxTranslate: function() {
            return -this.snapGrid[this.snapGrid.length - 1]
        }
    };
    var f = {
        setTransition: function(e, t) {
            this.$wrapperEl.transition(e),
            this.emit("setTransition", e, t)
        },
        transitionStart: function(e, t) {
            void 0 === e && (e = !0);
            var i = this.activeIndex
              , s = this.params
              , a = this.previousIndex;
            s.autoHeight && this.updateAutoHeight();
            var r = t;
            if (r || (r = i > a ? "next" : i < a ? "prev" : "reset"),
            this.emit("transitionStart"),
            e && i !== a) {
                if ("reset" === r)
                    return void this.emit("slideResetTransitionStart");
                this.emit("slideChangeTransitionStart"),
                "next" === r ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart")
            }
        },
        transitionEnd: function(e, t) {
            void 0 === e && (e = !0);
            var i = this.activeIndex
              , s = this.previousIndex;
            this.animating = !1,
            this.setTransition(0);
            var a = t;
            if (a || (a = i > s ? "next" : i < s ? "prev" : "reset"),
            this.emit("transitionEnd"),
            e && i !== s) {
                if ("reset" === a)
                    return void this.emit("slideResetTransitionEnd");
                this.emit("slideChangeTransitionEnd"),
                "next" === a ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd")
            }
        }
    };
    var m = {
        slideTo: function(e, t, i, s) {
            void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === i && (i = !0);
            var a = this
              , r = e;
            r < 0 && (r = 0);
            var n = a.params
              , o = a.snapGrid
              , l = a.slidesGrid
              , d = a.previousIndex
              , p = a.activeIndex
              , c = a.rtlTranslate
              , u = a.$wrapperEl;
            if (a.animating && n.preventIntercationOnTransition)
                return !1;
            var v = Math.floor(r / n.slidesPerGroup);
            v >= o.length && (v = o.length - 1),
            (p || n.initialSlide || 0) === (d || 0) && i && a.emit("beforeSlideChangeStart");
            var f, m = -o[v];
            if (a.updateProgress(m),
            n.normalizeSlideIndex)
                for (var g = 0; g < l.length; g += 1)
                    -Math.floor(100 * m) >= Math.floor(100 * l[g]) && (r = g);
            if (a.initialized && r !== p) {
                if (!a.allowSlideNext && m < a.translate && m < a.minTranslate())
                    return !1;
                if (!a.allowSlidePrev && m > a.translate && m > a.maxTranslate() && (p || 0) !== r)
                    return !1
            }
            return f = r > p ? "next" : r < p ? "prev" : "reset",
            c && -m === a.translate || !c && m === a.translate ? (a.updateActiveIndex(r),
            n.autoHeight && a.updateAutoHeight(),
            a.updateSlidesClasses(),
            "slide" !== n.effect && a.setTranslate(m),
            "reset" !== f && (a.transitionStart(i, f),
            a.transitionEnd(i, f)),
            !1) : (0 !== t && h.transition ? (a.setTransition(t),
            a.setTranslate(m),
            a.updateActiveIndex(r),
            a.updateSlidesClasses(),
            a.emit("beforeTransitionStart", t, s),
            a.transitionStart(i, f),
            a.animating || (a.animating = !0,
            u.transitionEnd(function() {
                a && !a.destroyed && a.transitionEnd(i, f)
            }))) : (a.setTransition(0),
            a.setTranslate(m),
            a.updateActiveIndex(r),
            a.updateSlidesClasses(),
            a.emit("beforeTransitionStart", t, s),
            a.transitionStart(i, f),
            a.transitionEnd(i, f)),
            !0)
        },
        slideToLoop: function(e, t, i, s) {
            void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === i && (i = !0);
            var a = e;
            return this.params.loop && (a += this.loopedSlides),
            this.slideTo(a, t, i, s)
        },
        slideNext: function(e, t, i) {
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0);
            var s = this.params
              , a = this.animating;
            return s.loop ? !a && (this.loopFix(),
            this._clientLeft = this.$wrapperEl[0].clientLeft,
            this.slideTo(this.activeIndex + s.slidesPerGroup, e, t, i)) : this.slideTo(this.activeIndex + s.slidesPerGroup, e, t, i)
        },
        slidePrev: function(e, t, i) {
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0);
            var s = this.params
              , a = this.animating;
            return s.loop ? !a && (this.loopFix(),
            this._clientLeft = this.$wrapperEl[0].clientLeft,
            this.slideTo(this.activeIndex - 1, e, t, i)) : this.slideTo(this.activeIndex - 1, e, t, i)
        },
        slideReset: function(e, t, i) {
            return void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            this.slideTo(this.activeIndex, e, t, i)
        },
        slideToClosest: function(e, t, i) {
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0);
            var s = this.activeIndex
              , a = Math.floor(s / this.params.slidesPerGroup);
            if (a < this.snapGrid.length - 1) {
                var r = this.rtlTranslate ? this.translate : -this.translate
                  , n = this.snapGrid[a];
                r - n > (this.snapGrid[a + 1] - n) / 2 && (s = this.params.slidesPerGroup)
            }
            return this.slideTo(s, e, t, i)
        },
        slideToClickedSlide: function() {
            var e, t = this, i = t.params, a = t.$wrapperEl, r = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView, n = t.clickedIndex;
            if (i.loop) {
                if (t.animating)
                    return;
                e = parseInt(s(t.clickedSlide).attr("data-swiper-slide-index"), 10),
                i.centeredSlides ? n < t.loopedSlides - r / 2 || n > t.slides.length - t.loopedSlides + r / 2 ? (t.loopFix(),
                n = a.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(),
                d.nextTick(function() {
                    t.slideTo(n)
                })) : t.slideTo(n) : n > t.slides.length - r ? (t.loopFix(),
                n = a.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(),
                d.nextTick(function() {
                    t.slideTo(n)
                })) : t.slideTo(n)
            } else
                t.slideTo(n)
        }
    };
    var g = {
        loopCreate: function() {
            var t = this
              , i = t.params
              , a = t.$wrapperEl;
            a.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
            var r = a.children("." + i.slideClass);
            if (i.loopFillGroupWithBlank) {
                var n = i.slidesPerGroup - r.length % i.slidesPerGroup;
                if (n !== i.slidesPerGroup) {
                    for (var o = 0; o < n; o += 1) {
                        var l = s(e.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
                        a.append(l)
                    }
                    r = a.children("." + i.slideClass)
                }
            }
            "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = r.length),
            t.loopedSlides = parseInt(i.loopedSlides || i.slidesPerView, 10),
            t.loopedSlides += i.loopAdditionalSlides,
            t.loopedSlides > r.length && (t.loopedSlides = r.length);
            var d = []
              , h = [];
            r.each(function(e, i) {
                var a = s(i);
                e < t.loopedSlides && h.push(i),
                e < r.length && e >= r.length - t.loopedSlides && d.push(i),
                a.attr("data-swiper-slide-index", e)
            });
            for (var p = 0; p < h.length; p += 1)
                a.append(s(h[p].cloneNode(!0)).addClass(i.slideDuplicateClass));
            for (var c = d.length - 1; c >= 0; c -= 1)
                a.prepend(s(d[c].cloneNode(!0)).addClass(i.slideDuplicateClass))
        },
        loopFix: function() {
            var e, t = this.params, i = this.activeIndex, s = this.slides, a = this.loopedSlides, r = this.allowSlidePrev, n = this.allowSlideNext, o = this.snapGrid, l = this.rtlTranslate;
            this.allowSlidePrev = !0,
            this.allowSlideNext = !0;
            var d = -o[i] - this.getTranslate();
            i < a ? (e = s.length - 3 * a + i,
            e += a,
            this.slideTo(e, 0, !1, !0) && 0 !== d && this.setTranslate((l ? -this.translate : this.translate) - d)) : ("auto" === t.slidesPerView && i >= 2 * a || i > s.length - 2 * t.slidesPerView) && (e = -s.length + i + a,
            e += a,
            this.slideTo(e, 0, !1, !0) && 0 !== d && this.setTranslate((l ? -this.translate : this.translate) - d));
            this.allowSlidePrev = r,
            this.allowSlideNext = n
        },
        loopDestroy: function() {
            var e = this.$wrapperEl
              , t = this.params
              , i = this.slides;
            e.children("." + t.slideClass + "." + t.slideDuplicateClass).remove(),
            i.removeAttr("data-swiper-slide-index")
        }
    };
    var b = {
        setGrabCursor: function(e) {
            if (!h.touch && this.params.simulateTouch) {
                var t = this.el;
                t.style.cursor = "move",
                t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab",
                t.style.cursor = e ? "-moz-grabbin" : "-moz-grab",
                t.style.cursor = e ? "grabbing" : "grab"
            }
        },
        unsetGrabCursor: function() {
            h.touch || (this.el.style.cursor = "")
        }
    };
    var w = {
        appendSlide: function(e) {
            var t = this.$wrapperEl
              , i = this.params;
            if (i.loop && this.loopDestroy(),
            "object" == typeof e && "length"in e)
                for (var s = 0; s < e.length; s += 1)
                    e[s] && t.append(e[s]);
            else
                t.append(e);
            i.loop && this.loopCreate(),
            i.observer && h.observer || this.update()
        },
        prependSlide: function(e) {
            var t = this.params
              , i = this.$wrapperEl
              , s = this.activeIndex;
            t.loop && this.loopDestroy();
            var a = s + 1;
            if ("object" == typeof e && "length"in e) {
                for (var r = 0; r < e.length; r += 1)
                    e[r] && i.prepend(e[r]);
                a = s + e.length
            } else
                i.prepend(e);
            t.loop && this.loopCreate(),
            t.observer && h.observer || this.update(),
            this.slideTo(a, 0, !1)
        },
        removeSlide: function(e) {
            var t = this.params
              , i = this.$wrapperEl
              , s = this.activeIndex;
            t.loop && (this.loopDestroy(),
            this.slides = i.children("." + t.slideClass));
            var a, r = s;
            if ("object" == typeof e && "length"in e) {
                for (var n = 0; n < e.length; n += 1)
                    a = e[n],
                    this.slides[a] && this.slides.eq(a).remove(),
                    a < r && (r -= 1);
                r = Math.max(r, 0)
            } else
                a = e,
                this.slides[a] && this.slides.eq(a).remove(),
                a < r && (r -= 1),
                r = Math.max(r, 0);
            t.loop && this.loopCreate(),
            t.observer && h.observer || this.update(),
            t.loop ? this.slideTo(r + this.loopedSlides, 0, !1) : this.slideTo(r, 0, !1)
        },
        removeAllSlides: function() {
            for (var e = [], t = 0; t < this.slides.length; t += 1)
                e.push(t);
            this.removeSlide(e)
        }
    }
      , y = function() {
        var i = t.navigator.userAgent
          , s = {
            ios: !1,
            android: !1,
            androidChrome: !1,
            desktop: !1,
            windows: !1,
            iphone: !1,
            ipod: !1,
            ipad: !1,
            cordova: t.cordova || t.phonegap,
            phonegap: t.cordova || t.phonegap
        }
          , a = i.match(/(Windows Phone);?[\s\/]+([\d.]+)?/)
          , r = i.match(/(Android);?[\s\/]+([\d.]+)?/)
          , n = i.match(/(iPad).*OS\s([\d_]+)/)
          , o = i.match(/(iPod)(.*OS\s([\d_]+))?/)
          , l = !n && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
        if (a && (s.os = "windows",
        s.osVersion = a[2],
        s.windows = !0),
        r && !a && (s.os = "android",
        s.osVersion = r[2],
        s.android = !0,
        s.androidChrome = i.toLowerCase().indexOf("chrome") >= 0),
        (n || l || o) && (s.os = "ios",
        s.ios = !0),
        l && !o && (s.osVersion = l[2].replace(/_/g, "."),
        s.iphone = !0),
        n && (s.osVersion = n[2].replace(/_/g, "."),
        s.ipad = !0),
        o && (s.osVersion = o[3] ? o[3].replace(/_/g, ".") : null,
        s.iphone = !0),
        s.ios && s.osVersion && i.indexOf("Version/") >= 0 && "10" === s.osVersion.split(".")[0] && (s.osVersion = i.toLowerCase().split("version/")[1].split(" ")[0]),
        s.desktop = !(s.os || s.android || s.webView),
        s.webView = (l || n || o) && i.match(/.*AppleWebKit(?!.*Safari)/i),
        s.os && "ios" === s.os) {
            var d = s.osVersion.split(".")
              , h = e.querySelector('meta[name="viewport"]');
            s.minimalUi = !s.webView && (o || l) && (1 * d[0] == 7 ? 1 * d[1] >= 1 : 1 * d[0] > 7) && h && h.getAttribute("content").indexOf("minimal-ui") >= 0
        }
        return s.pixelRatio = t.devicePixelRatio || 1,
        s
    }();
    function x() {
        var e = this.params
          , t = this.el;
        if (!t || 0 !== t.offsetWidth) {
            e.breakpoints && this.setBreakpoint();
            var i = this.allowSlideNext
              , s = this.allowSlidePrev;
            if (this.allowSlideNext = !0,
            this.allowSlidePrev = !0,
            this.updateSize(),
            this.updateSlides(),
            e.freeMode) {
                var a = Math.min(Math.max(this.translate, this.maxTranslate()), this.minTranslate());
                this.setTranslate(a),
                this.updateActiveIndex(),
                this.updateSlidesClasses(),
                e.autoHeight && this.updateAutoHeight()
            } else
                this.updateSlidesClasses(),
                ("auto" === e.slidesPerView || e.slidesPerView > 1) && this.isEnd && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0);
            this.allowSlidePrev = s,
            this.allowSlideNext = i
        }
    }
    var E = {
        attachEvents: function() {
            var i = this.params
              , a = this.touchEvents
              , r = this.el
              , n = this.wrapperEl;
            this.onTouchStart = function(i) {
                var a = this.touchEventsData
                  , r = this.params
                  , n = this.touches;
                if (!this.animating || !r.preventIntercationOnTransition) {
                    var o = i;
                    if (o.originalEvent && (o = o.originalEvent),
                    a.isTouchEvent = "touchstart" === o.type,
                    (a.isTouchEvent || !("which"in o) || 3 !== o.which) && (!a.isTouched || !a.isMoved))
                        if (r.noSwiping && s(o.target).closest(r.noSwipingSelector ? r.noSwipingSelector : "." + r.noSwipingClass)[0])
                            this.allowClick = !0;
                        else if (!r.swipeHandler || s(o).closest(r.swipeHandler)[0]) {
                            n.currentX = "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX,
                            n.currentY = "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY;
                            var l = n.currentX
                              , h = n.currentY;
                            if (!(y.ios && !y.cordova && r.iOSEdgeSwipeDetection && l <= r.iOSEdgeSwipeThreshold && l >= t.screen.width - r.iOSEdgeSwipeThreshold)) {
                                if (d.extend(a, {
                                    isTouched: !0,
                                    isMoved: !1,
                                    allowTouchCallbacks: !0,
                                    isScrolling: void 0,
                                    startMoving: void 0
                                }),
                                n.startX = l,
                                n.startY = h,
                                a.touchStartTime = d.now(),
                                this.allowClick = !0,
                                this.updateSize(),
                                this.swipeDirection = void 0,
                                r.threshold > 0 && (a.allowThresholdMove = !1),
                                "touchstart" !== o.type) {
                                    var p = !0;
                                    s(o.target).is(a.formElements) && (p = !1),
                                    e.activeElement && s(e.activeElement).is(a.formElements) && e.activeElement !== o.target && e.activeElement.blur(),
                                    p && this.allowTouchMove && o.preventDefault()
                                }
                                this.emit("touchStart", o)
                            }
                        }
                }
            }
            .bind(this),
            this.onTouchMove = function(t) {
                var i = this.touchEventsData
                  , a = this.params
                  , r = this.touches
                  , n = this.rtlTranslate
                  , o = t;
                if (o.originalEvent && (o = o.originalEvent),
                i.isTouched) {
                    if (!i.isTouchEvent || "mousemove" !== o.type) {
                        var l = "touchmove" === o.type ? o.targetTouches[0].pageX : o.pageX
                          , h = "touchmove" === o.type ? o.targetTouches[0].pageY : o.pageY;
                        if (o.preventedByNestedSwiper)
                            return r.startX = l,
                            void (r.startY = h);
                        if (!this.allowTouchMove)
                            return this.allowClick = !1,
                            void (i.isTouched && (d.extend(r, {
                                startX: l,
                                startY: h,
                                currentX: l,
                                currentY: h
                            }),
                            i.touchStartTime = d.now()));
                        if (i.isTouchEvent && a.touchReleaseOnEdges && !a.loop)
                            if (this.isVertical()) {
                                if (h < r.startY && this.translate <= this.maxTranslate() || h > r.startY && this.translate >= this.minTranslate())
                                    return i.isTouched = !1,
                                    void (i.isMoved = !1)
                            } else if (l < r.startX && this.translate <= this.maxTranslate() || l > r.startX && this.translate >= this.minTranslate())
                                return;
                        if (i.isTouchEvent && e.activeElement && o.target === e.activeElement && s(o.target).is(i.formElements))
                            return i.isMoved = !0,
                            void (this.allowClick = !1);
                        if (i.allowTouchCallbacks && this.emit("touchMove", o),
                        !(o.targetTouches && o.targetTouches.length > 1)) {
                            r.currentX = l,
                            r.currentY = h;
                            var p, c = r.currentX - r.startX, u = r.currentY - r.startY;
                            if (void 0 === i.isScrolling && (this.isHorizontal() && r.currentY === r.startY || this.isVertical() && r.currentX === r.startX ? i.isScrolling = !1 : c * c + u * u >= 25 && (p = 180 * Math.atan2(Math.abs(u), Math.abs(c)) / Math.PI,
                            i.isScrolling = this.isHorizontal() ? p > a.touchAngle : 90 - p > a.touchAngle)),
                            i.isScrolling && this.emit("touchMoveOpposite", o),
                            "undefined" == typeof startMoving && (r.currentX === r.startX && r.currentY === r.startY || (i.startMoving = !0)),
                            i.isScrolling)
                                i.isTouched = !1;
                            else if (i.startMoving) {
                                this.allowClick = !1,
                                o.preventDefault(),
                                a.touchMoveStopPropagation && !a.nested && o.stopPropagation(),
                                i.isMoved || (a.loop && this.loopFix(),
                                i.startTranslate = this.getTranslate(),
                                this.setTransition(0),
                                this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
                                i.allowMomentumBounce = !1,
                                !a.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0),
                                this.emit("sliderFirstMove", o)),
                                this.emit("sliderMove", o),
                                i.isMoved = !0;
                                var v = this.isHorizontal() ? c : u;
                                r.diff = v,
                                v *= a.touchRatio,
                                n && (v = -v),
                                this.swipeDirection = v > 0 ? "prev" : "next",
                                i.currentTranslate = v + i.startTranslate;
                                var f = !0
                                  , m = a.resistanceRatio;
                                if (a.touchReleaseOnEdges && (m = 0),
                                v > 0 && i.currentTranslate > this.minTranslate() ? (f = !1,
                                a.resistance && (i.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + i.startTranslate + v, m))) : v < 0 && i.currentTranslate < this.maxTranslate() && (f = !1,
                                a.resistance && (i.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - i.startTranslate - v, m))),
                                f && (o.preventedByNestedSwiper = !0),
                                !this.allowSlideNext && "next" === this.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate),
                                !this.allowSlidePrev && "prev" === this.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate),
                                a.threshold > 0) {
                                    if (!(Math.abs(v) > a.threshold || i.allowThresholdMove))
                                        return void (i.currentTranslate = i.startTranslate);
                                    if (!i.allowThresholdMove)
                                        return i.allowThresholdMove = !0,
                                        r.startX = r.currentX,
                                        r.startY = r.currentY,
                                        i.currentTranslate = i.startTranslate,
                                        void (r.diff = this.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY)
                                }
                                a.followFinger && ((a.freeMode || a.watchSlidesProgress || a.watchSlidesVisibility) && (this.updateActiveIndex(),
                                this.updateSlidesClasses()),
                                a.freeMode && (0 === i.velocities.length && i.velocities.push({
                                    position: r[this.isHorizontal() ? "startX" : "startY"],
                                    time: i.touchStartTime
                                }),
                                i.velocities.push({
                                    position: r[this.isHorizontal() ? "currentX" : "currentY"],
                                    time: d.now()
                                })),
                                this.updateProgress(i.currentTranslate),
                                this.setTranslate(i.currentTranslate))
                            }
                        }
                    }
                } else
                    i.startMoving && i.isScrolling && this.emit("touchMoveOpposite", o)
            }
            .bind(this),
            this.onTouchEnd = function(e) {
                var t = this
                  , i = t.touchEventsData
                  , s = t.params
                  , a = t.touches
                  , r = t.rtlTranslate
                  , n = t.$wrapperEl
                  , o = t.slidesGrid
                  , l = t.snapGrid
                  , h = e;
                if (h.originalEvent && (h = h.originalEvent),
                i.allowTouchCallbacks && t.emit("touchEnd", h),
                i.allowTouchCallbacks = !1,
                !i.isTouched)
                    return i.isMoved && s.grabCursor && t.setGrabCursor(!1),
                    i.isMoved = !1,
                    void (i.startMoving = !1);
                s.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                var p, c = d.now(), u = c - i.touchStartTime;
                if (t.allowClick && (t.updateClickedSlide(h),
                t.emit("tap", h),
                u < 300 && c - i.lastClickTime > 300 && (i.clickTimeout && clearTimeout(i.clickTimeout),
                i.clickTimeout = d.nextTick(function() {
                    t && !t.destroyed && t.emit("click", h)
                }, 300)),
                u < 300 && c - i.lastClickTime < 300 && (i.clickTimeout && clearTimeout(i.clickTimeout),
                t.emit("doubleTap", h))),
                i.lastClickTime = d.now(),
                d.nextTick(function() {
                    t.destroyed || (t.allowClick = !0)
                }),
                !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === a.diff || i.currentTranslate === i.startTranslate)
                    return i.isTouched = !1,
                    i.isMoved = !1,
                    void (i.startMoving = !1);
                if (i.isTouched = !1,
                i.isMoved = !1,
                i.startMoving = !1,
                p = s.followFinger ? r ? t.translate : -t.translate : -i.currentTranslate,
                s.freeMode) {
                    if (p < -t.minTranslate())
                        return void t.slideTo(t.activeIndex);
                    if (p > -t.maxTranslate())
                        return void (t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
                    if (s.freeModeMomentum) {
                        if (i.velocities.length > 1) {
                            var v = i.velocities.pop()
                              , f = i.velocities.pop()
                              , m = v.position - f.position
                              , g = v.time - f.time;
                            t.velocity = m / g,
                            t.velocity /= 2,
                            Math.abs(t.velocity) < s.freeModeMinimumVelocity && (t.velocity = 0),
                            (g > 150 || d.now() - v.time > 300) && (t.velocity = 0)
                        } else
                            t.velocity = 0;
                        t.velocity *= s.freeModeMomentumVelocityRatio,
                        i.velocities.length = 0;
                        var b = 1e3 * s.freeModeMomentumRatio
                          , w = t.velocity * b
                          , y = t.translate + w;
                        r && (y = -y);
                        var x, E = !1, T = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio;
                        if (y < t.maxTranslate())
                            s.freeModeMomentumBounce ? (y + t.maxTranslate() < -T && (y = t.maxTranslate() - T),
                            x = t.maxTranslate(),
                            E = !0,
                            i.allowMomentumBounce = !0) : y = t.maxTranslate();
                        else if (y > t.minTranslate())
                            s.freeModeMomentumBounce ? (y - t.minTranslate() > T && (y = t.minTranslate() + T),
                            x = t.minTranslate(),
                            E = !0,
                            i.allowMomentumBounce = !0) : y = t.minTranslate();
                        else if (s.freeModeSticky) {
                            for (var S, C = 0; C < l.length; C += 1)
                                if (l[C] > -y) {
                                    S = C;
                                    break
                                }
                            y = -(y = Math.abs(l[S] - y) < Math.abs(l[S - 1] - y) || "next" === t.swipeDirection ? l[S] : l[S - 1])
                        }
                        if (0 !== t.velocity)
                            b = r ? Math.abs((-y - t.translate) / t.velocity) : Math.abs((y - t.translate) / t.velocity);
                        else if (s.freeModeSticky)
                            return void t.slideToClosest();
                        s.freeModeMomentumBounce && E ? (t.updateProgress(x),
                        t.setTransition(b),
                        t.setTranslate(y),
                        t.transitionStart(!0, t.swipeDirection),
                        t.animating = !0,
                        n.transitionEnd(function() {
                            t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"),
                            t.setTransition(s.speed),
                            t.setTranslate(x),
                            n.transitionEnd(function() {
                                t && !t.destroyed && t.transitionEnd()
                            }))
                        })) : t.velocity ? (t.updateProgress(y),
                        t.setTransition(b),
                        t.setTranslate(y),
                        t.transitionStart(!0, t.swipeDirection),
                        t.animating || (t.animating = !0,
                        n.transitionEnd(function() {
                            t && !t.destroyed && t.transitionEnd()
                        }))) : t.updateProgress(y),
                        t.updateActiveIndex(),
                        t.updateSlidesClasses()
                    } else if (s.freeModeSticky)
                        return void t.slideToClosest();
                    (!s.freeModeMomentum || u >= s.longSwipesMs) && (t.updateProgress(),
                    t.updateActiveIndex(),
                    t.updateSlidesClasses())
                } else {
                    for (var M = 0, z = t.slidesSizesGrid[0], P = 0; P < o.length; P += s.slidesPerGroup)
                        void 0 !== o[P + s.slidesPerGroup] ? p >= o[P] && p < o[P + s.slidesPerGroup] && (M = P,
                        z = o[P + s.slidesPerGroup] - o[P]) : p >= o[P] && (M = P,
                        z = o[o.length - 1] - o[o.length - 2]);
                    var k = (p - o[M]) / z;
                    if (u > s.longSwipesMs) {
                        if (!s.longSwipes)
                            return void t.slideTo(t.activeIndex);
                        "next" === t.swipeDirection && (k >= s.longSwipesRatio ? t.slideTo(M + s.slidesPerGroup) : t.slideTo(M)),
                        "prev" === t.swipeDirection && (k > 1 - s.longSwipesRatio ? t.slideTo(M + s.slidesPerGroup) : t.slideTo(M))
                    } else {
                        if (!s.shortSwipes)
                            return void t.slideTo(t.activeIndex);
                        "next" === t.swipeDirection && t.slideTo(M + s.slidesPerGroup),
                        "prev" === t.swipeDirection && t.slideTo(M)
                    }
                }
            }
            .bind(this),
            this.onClick = function(e) {
                this.allowClick || (this.params.preventClicks && e.preventDefault(),
                this.params.preventClicksPropagation && this.animating && (e.stopPropagation(),
                e.stopImmediatePropagation()))
            }
            .bind(this);
            var o = "container" === i.touchEventsTarget ? r : n
              , l = !!i.nested;
            if (h.touch || !h.pointerEvents && !h.prefixedPointerEvents) {
                if (h.touch) {
                    var p = !("touchstart" !== a.start || !h.passiveListener || !i.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    o.addEventListener(a.start, this.onTouchStart, p),
                    o.addEventListener(a.move, this.onTouchMove, h.passiveListener ? {
                        passive: !1,
                        capture: l
                    } : l),
                    o.addEventListener(a.end, this.onTouchEnd, p)
                }
                (i.simulateTouch && !y.ios && !y.android || i.simulateTouch && !h.touch && y.ios) && (o.addEventListener("mousedown", this.onTouchStart, !1),
                e.addEventListener("mousemove", this.onTouchMove, l),
                e.addEventListener("mouseup", this.onTouchEnd, !1))
            } else
                o.addEventListener(a.start, this.onTouchStart, !1),
                e.addEventListener(a.move, this.onTouchMove, l),
                e.addEventListener(a.end, this.onTouchEnd, !1);
            (i.preventClicks || i.preventClicksPropagation) && o.addEventListener("click", this.onClick, !0),
            this.on("resize observerUpdate", x, !0)
        },
        detachEvents: function() {
            var t = this.params
              , i = this.touchEvents
              , s = this.el
              , a = this.wrapperEl
              , r = "container" === t.touchEventsTarget ? s : a
              , n = !!t.nested;
            if (h.touch || !h.pointerEvents && !h.prefixedPointerEvents) {
                if (h.touch) {
                    var o = !("onTouchStart" !== i.start || !h.passiveListener || !t.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    r.removeEventListener(i.start, this.onTouchStart, o),
                    r.removeEventListener(i.move, this.onTouchMove, n),
                    r.removeEventListener(i.end, this.onTouchEnd, o)
                }
                (t.simulateTouch && !y.ios && !y.android || t.simulateTouch && !h.touch && y.ios) && (r.removeEventListener("mousedown", this.onTouchStart, !1),
                e.removeEventListener("mousemove", this.onTouchMove, n),
                e.removeEventListener("mouseup", this.onTouchEnd, !1))
            } else
                r.removeEventListener(i.start, this.onTouchStart, !1),
                e.removeEventListener(i.move, this.onTouchMove, n),
                e.removeEventListener(i.end, this.onTouchEnd, !1);
            (t.preventClicks || t.preventClicksPropagation) && r.removeEventListener("click", this.onClick, !0),
            this.off("resize observerUpdate", x)
        }
    };
    var T = {
        setBreakpoint: function() {
            var e = this.activeIndex
              , t = this.loopedSlides;
            void 0 === t && (t = 0);
            var i = this.params
              , s = i.breakpoints;
            if (s && (!s || 0 !== Object.keys(s).length)) {
                var a = this.getBreakpoint(s);
                if (a && this.currentBreakpoint !== a) {
                    var r = a in s ? s[a] : this.originalParams
                      , n = i.loop && r.slidesPerView !== i.slidesPerView;
                    d.extend(this.params, r),
                    d.extend(this, {
                        allowTouchMove: this.params.allowTouchMove,
                        allowSlideNext: this.params.allowSlideNext,
                        allowSlidePrev: this.params.allowSlidePrev
                    }),
                    this.currentBreakpoint = a,
                    n && (this.loopDestroy(),
                    this.loopCreate(),
                    this.updateSlides(),
                    this.slideTo(e - t + this.loopedSlides, 0, !1)),
                    this.emit("breakpoint", r)
                }
            }
        },
        getBreakpoint: function(e) {
            if (e) {
                var i = !1
                  , s = [];
                Object.keys(e).forEach(function(e) {
                    s.push(e)
                }),
                s.sort(function(e, t) {
                    return parseInt(e, 10) - parseInt(t, 10)
                });
                for (var a = 0; a < s.length; a += 1) {
                    var r = s[a];
                    r >= t.innerWidth && !i && (i = r)
                }
                return i || "max"
            }
        }
    }
      , S = function() {
        return {
            isIE: !!t.navigator.userAgent.match(/Trident/g) || !!t.navigator.userAgent.match(/MSIE/g),
            isSafari: (e = t.navigator.userAgent.toLowerCase(),
            e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0),
            isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
        };
        var e
    }();
    var C = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "container",
        initialSlide: 0,
        speed: 300,
        preventIntercationOnTransition: !1,
        iOSEdgeSwipeDetection: !1,
        iOSEdgeSwipeThreshold: 20,
        freeMode: !1,
        freeModeMomentum: !0,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: !0,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: !1,
        freeModeMinimumVelocity: .02,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: "column",
        slidesPerGroup: 1,
        centeredSlides: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        watchOverflow: !1,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !0,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        watchSlidesVisibility: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: "swiper-container-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0
    }
      , M = {
        update: u,
        translate: v,
        transition: f,
        slide: m,
        loop: g,
        grabCursor: b,
        manipulation: w,
        events: E,
        breakpoints: T,
        checkOverflow: {
            checkOverflow: function() {
                var e = this.isLocked;
                this.isLocked = 1 === this.snapGrid.length,
                this.allowTouchMove = !this.isLocked,
                e && e !== this.isLocked && (this.isEnd = !1,
                this.navigation.update())
            }
        },
        classes: {
            addClasses: function() {
                var e = this.classNames
                  , t = this.params
                  , i = this.rtl
                  , s = this.$el
                  , a = [];
                a.push(t.direction),
                t.freeMode && a.push("free-mode"),
                h.flexbox || a.push("no-flexbox"),
                t.autoHeight && a.push("autoheight"),
                i && a.push("rtl"),
                t.slidesPerColumn > 1 && a.push("multirow"),
                y.android && a.push("android"),
                y.ios && a.push("ios"),
                S.isIE && (h.pointerEvents || h.prefixedPointerEvents) && a.push("wp8-" + t.direction),
                a.forEach(function(i) {
                    e.push(t.containerModifierClass + i)
                }),
                s.addClass(e.join(" "))
            },
            removeClasses: function() {
                var e = this.$el
                  , t = this.classNames;
                e.removeClass(t.join(" "))
            }
        },
        images: {
            loadImage: function(e, i, s, a, r, n) {
                var o;
                function l() {
                    n && n()
                }
                e.complete && r ? l() : i ? ((o = new t.Image).onload = l,
                o.onerror = l,
                a && (o.sizes = a),
                s && (o.srcset = s),
                i && (o.src = i)) : l()
            },
            preloadImages: function() {
                var e = this;
                function t() {
                    void 0 !== e && null !== e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                    e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(),
                    e.emit("imagesReady")))
                }
                e.imagesToLoad = e.$el.find("img");
                for (var i = 0; i < e.imagesToLoad.length; i += 1) {
                    var s = e.imagesToLoad[i];
                    e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t)
                }
            }
        }
    }
      , z = {}
      , P = function(e) {
        function t() {
            for (var i, a, r, n = [], o = arguments.length; o--; )
                n[o] = arguments[o];
            1 === n.length && n[0].constructor && n[0].constructor === Object ? r = n[0] : (a = (i = n)[0],
            r = i[1]),
            r || (r = {}),
            r = d.extend({}, r),
            a && !r.el && (r.el = a),
            e.call(this, r),
            Object.keys(M).forEach(function(e) {
                Object.keys(M[e]).forEach(function(i) {
                    t.prototype[i] || (t.prototype[i] = M[e][i])
                })
            });
            var l = this;
            void 0 === l.modules && (l.modules = {}),
            Object.keys(l.modules).forEach(function(e) {
                var t = l.modules[e];
                if (t.params) {
                    var i = Object.keys(t.params)[0]
                      , s = t.params[i];
                    if ("object" != typeof s)
                        return;
                    if (!(i in r && "enabled"in s))
                        return;
                    !0 === r[i] && (r[i] = {
                        enabled: !0
                    }),
                    "object" != typeof r[i] || "enabled"in r[i] || (r[i].enabled = !0),
                    r[i] || (r[i] = {
                        enabled: !1
                    })
                }
            });
            var p = d.extend({}, C);
            l.useModulesParams(p),
            l.params = d.extend({}, p, z, r),
            l.originalParams = d.extend({}, l.params),
            l.passedParams = d.extend({}, r),
            l.$ = s;
            var c = s(l.params.el);
            if (a = c[0]) {
                if (c.length > 1) {
                    var u = [];
                    return c.each(function(e, i) {
                        var s = d.extend({}, r, {
                            el: i
                        });
                        u.push(new t(s))
                    }),
                    u
                }
                a.swiper = l,
                c.data("swiper", l);
                var v, f, m = c.children("." + l.params.wrapperClass);
                return d.extend(l, {
                    $el: c,
                    el: a,
                    $wrapperEl: m,
                    wrapperEl: m[0],
                    classNames: [],
                    slides: s(),
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal: function() {
                        return "horizontal" === l.params.direction
                    },
                    isVertical: function() {
                        return "vertical" === l.params.direction
                    },
                    rtl: "rtl" === a.dir.toLowerCase() || "rtl" === c.css("direction"),
                    rtlTranslate: "horizontal" === l.params.direction && ("rtl" === a.dir.toLowerCase() || "rtl" === c.css("direction")),
                    wrongRTL: "-webkit-box" === m.css("display"),
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: !0,
                    isEnd: !1,
                    translate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: !1,
                    allowSlideNext: l.params.allowSlideNext,
                    allowSlidePrev: l.params.allowSlidePrev,
                    touchEvents: (v = ["touchstart", "touchmove", "touchend"],
                    f = ["mousedown", "mousemove", "mouseup"],
                    h.pointerEvents ? f = ["pointerdown", "pointermove", "pointerup"] : h.prefixedPointerEvents && (f = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]),
                    l.touchEventsTouch = {
                        start: v[0],
                        move: v[1],
                        end: v[2]
                    },
                    l.touchEventsDesktop = {
                        start: f[0],
                        move: f[1],
                        end: f[2]
                    },
                    h.touch || !l.params.simulateTouch ? l.touchEventsTouch : l.touchEventsDesktop),
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        formElements: "input, select, option, textarea, button, video",
                        lastClickTime: d.now(),
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        isTouchEvent: void 0,
                        startMoving: void 0
                    },
                    allowClick: !0,
                    allowTouchMove: l.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                }),
                l.useModules(),
                l.params.init && l.init(),
                l
            }
        }
        e && (t.__proto__ = e),
        t.prototype = Object.create(e && e.prototype),
        t.prototype.constructor = t;
        var i = {
            extendedDefaults: {
                configurable: !0
            },
            defaults: {
                configurable: !0
            },
            Class: {
                configurable: !0
            },
            $: {
                configurable: !0
            }
        };
        return t.prototype.slidesPerViewDynamic = function() {
            var e = this.params
              , t = this.slides
              , i = this.slidesGrid
              , s = this.size
              , a = this.activeIndex
              , r = 1;
            if (e.centeredSlides) {
                for (var n, o = t[a].swiperSlideSize, l = a + 1; l < t.length; l += 1)
                    t[l] && !n && (r += 1,
                    (o += t[l].swiperSlideSize) > s && (n = !0));
                for (var d = a - 1; d >= 0; d -= 1)
                    t[d] && !n && (r += 1,
                    (o += t[d].swiperSlideSize) > s && (n = !0))
            } else
                for (var h = a + 1; h < t.length; h += 1)
                    i[h] - i[a] < s && (r += 1);
            return r
        }
        ,
        t.prototype.update = function() {
            var e = this;
            e && !e.destroyed && (e.updateSize(),
            e.updateSlides(),
            e.updateProgress(),
            e.updateSlidesClasses(),
            e.params.freeMode ? (t(),
            e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || t(),
            e.emit("update"));
            function t() {
                var t = e.rtlTranslate ? -1 * e.translate : e.translate
                  , i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                e.setTranslate(i),
                e.updateActiveIndex(),
                e.updateSlidesClasses()
            }
        }
        ,
        t.prototype.init = function() {
            this.initialized || (this.emit("beforeInit"),
            this.params.breakpoints && this.setBreakpoint(),
            this.addClasses(),
            this.params.loop && this.loopCreate(),
            this.updateSize(),
            this.updateSlides(),
            this.params.watchOverflow && this.checkOverflow(),
            this.params.grabCursor && this.setGrabCursor(),
            this.params.preloadImages && this.preloadImages(),
            this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit),
            this.attachEvents(),
            this.initialized = !0,
            this.emit("init"))
        }
        ,
        t.prototype.destroy = function(e, t) {
            void 0 === e && (e = !0),
            void 0 === t && (t = !0);
            var i = this
              , s = i.params
              , a = i.$el
              , r = i.$wrapperEl
              , n = i.slides;
            i.emit("beforeDestroy"),
            i.initialized = !1,
            i.detachEvents(),
            s.loop && i.loopDestroy(),
            t && (i.removeClasses(),
            a.removeAttr("style"),
            r.removeAttr("style"),
            n && n.length && n.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")),
            i.emit("destroy"),
            Object.keys(i.eventsListeners).forEach(function(e) {
                i.off(e)
            }),
            !1 !== e && (i.$el[0].swiper = null,
            i.$el.data("swiper", null),
            d.deleteProps(i)),
            i.destroyed = !0
        }
        ,
        t.extendDefaults = function(e) {
            d.extend(z, e)
        }
        ,
        i.extendedDefaults.get = function() {
            return z
        }
        ,
        i.defaults.get = function() {
            return C
        }
        ,
        i.Class.get = function() {
            return e
        }
        ,
        i.$.get = function() {
            return s
        }
        ,
        Object.defineProperties(t, i),
        t
    }(p)
      , k = {
        name: "device",
        proto: {
            device: y
        },
        static: {
            device: y
        }
    }
      , $ = {
        name: "support",
        proto: {
            support: h
        },
        static: {
            support: h
        }
    }
      , L = {
        name: "browser",
        proto: {
            browser: S
        },
        static: {
            browser: S
        }
    }
      , I = {
        name: "resize",
        create: function() {
            var e = this;
            d.extend(e, {
                resize: {
                    resizeHandler: function() {
                        e && !e.destroyed && e.initialized && (e.emit("beforeResize"),
                        e.emit("resize"))
                    },
                    orientationChangeHandler: function() {
                        e && !e.destroyed && e.initialized && e.emit("orientationchange")
                    }
                }
            })
        },
        on: {
            init: function() {
                t.addEventListener("resize", this.resize.resizeHandler),
                t.addEventListener("orientationchange", this.resize.orientationChangeHandler)
            },
            destroy: function() {
                t.removeEventListener("resize", this.resize.resizeHandler),
                t.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
            }
        }
    }
      , D = {
        func: t.MutationObserver || t.WebkitMutationObserver,
        attach: function(e, t) {
            void 0 === t && (t = {});
            var i = this
              , s = new (0,
            D.func)(function(e) {
                e.forEach(function(e) {
                    i.emit("observerUpdate", e)
                })
            }
            );
            s.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData
            }),
            i.observer.observers.push(s)
        },
        init: function() {
            if (h.observer && this.params.observer) {
                if (this.params.observeParents)
                    for (var e = this.$el.parents(), t = 0; t < e.length; t += 1)
                        this.observer.attach(e[t]);
                this.observer.attach(this.$el[0], {
                    childList: !1
                }),
                this.observer.attach(this.$wrapperEl[0], {
                    attributes: !1
                })
            }
        },
        destroy: function() {
            this.observer.observers.forEach(function(e) {
                e.disconnect()
            }),
            this.observer.observers = []
        }
    }
      , O = {
        name: "observer",
        params: {
            observer: !1,
            observeParents: !1
        },
        create: function() {
            d.extend(this, {
                observer: {
                    init: D.init.bind(this),
                    attach: D.attach.bind(this),
                    destroy: D.destroy.bind(this),
                    observers: []
                }
            })
        },
        on: {
            init: function() {
                this.observer.init()
            },
            destroy: function() {
                this.observer.destroy()
            }
        }
    }
      , A = {
        update: function(e) {
            var t = this
              , i = t.params
              , s = i.slidesPerView
              , a = i.slidesPerGroup
              , r = i.centeredSlides
              , n = t.virtual
              , o = n.from
              , l = n.to
              , h = n.slides
              , p = n.slidesGrid
              , c = n.renderSlide
              , u = n.offset;
            t.updateActiveIndex();
            var v, f, m, g = t.activeIndex || 0;
            v = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top",
            r ? (f = Math.floor(s / 2) + a,
            m = Math.floor(s / 2) + a) : (f = s + (a - 1),
            m = a);
            var b = Math.max((g || 0) - m, 0)
              , w = Math.min((g || 0) + f, h.length - 1)
              , y = (t.slidesGrid[b] || 0) - (t.slidesGrid[0] || 0);
            function x() {
                t.updateSlides(),
                t.updateProgress(),
                t.updateSlidesClasses(),
                t.lazy && t.params.lazy.enabled && t.lazy.load()
            }
            if (d.extend(t.virtual, {
                from: b,
                to: w,
                offset: y,
                slidesGrid: t.slidesGrid
            }),
            o === b && l === w && !e)
                return t.slidesGrid !== p && y !== u && t.slides.css(v, y + "px"),
                void t.updateProgress();
            if (t.params.virtual.renderExternal)
                return t.params.virtual.renderExternal.call(t, {
                    offset: y,
                    from: b,
                    to: w,
                    slides: function() {
                        for (var e = [], t = b; t <= w; t += 1)
                            e.push(h[t]);
                        return e
                    }()
                }),
                void x();
            var E = []
              , T = [];
            if (e)
                t.$wrapperEl.find("." + t.params.slideClass).remove();
            else
                for (var S = o; S <= l; S += 1)
                    (S < b || S > w) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + S + '"]').remove();
            for (var C = 0; C < h.length; C += 1)
                C >= b && C <= w && (void 0 === l || e ? T.push(C) : (C > l && T.push(C),
                C < o && E.push(C)));
            T.forEach(function(e) {
                t.$wrapperEl.append(c(h[e], e))
            }),
            E.sort(function(e, t) {
                return e < t
            }).forEach(function(e) {
                t.$wrapperEl.prepend(c(h[e], e))
            }),
            t.$wrapperEl.children(".swiper-slide").css(v, y + "px"),
            x()
        },
        renderSlide: function(e, t) {
            var i = this.params.virtual;
            if (i.cache && this.virtual.cache[t])
                return this.virtual.cache[t];
            var a = i.renderSlide ? s(i.renderSlide.call(this, e, t)) : s('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
            return a.attr("data-swiper-slide-index") || a.attr("data-swiper-slide-index", t),
            i.cache && (this.virtual.cache[t] = a),
            a
        },
        appendSlide: function(e) {
            this.virtual.slides.push(e),
            this.virtual.update(!0)
        },
        prependSlide: function(e) {
            if (this.virtual.slides.unshift(e),
            this.params.virtual.cache) {
                var t = this.virtual.cache
                  , i = {};
                Object.keys(t).forEach(function(e) {
                    i[e + 1] = t[e]
                }),
                this.virtual.cache = i
            }
            this.virtual.update(!0),
            this.slideNext(0)
        }
    }
      , H = {
        name: "virtual",
        params: {
            virtual: {
                enabled: !1,
                slides: [],
                cache: !0,
                renderSlide: null,
                renderExternal: null
            }
        },
        create: function() {
            d.extend(this, {
                virtual: {
                    update: A.update.bind(this),
                    appendSlide: A.appendSlide.bind(this),
                    prependSlide: A.prependSlide.bind(this),
                    renderSlide: A.renderSlide.bind(this),
                    slides: this.params.virtual.slides,
                    cache: {}
                }
            })
        },
        on: {
            beforeInit: function() {
                if (this.params.virtual.enabled) {
                    this.classNames.push(this.params.containerModifierClass + "virtual");
                    var e = {
                        watchSlidesProgress: !0
                    };
                    d.extend(this.params, e),
                    d.extend(this.originalParams, e),
                    this.virtual.update()
                }
            },
            setTranslate: function() {
                this.params.virtual.enabled && this.virtual.update()
            }
        }
    }
      , N = {
        handle: function(i) {
            var s = this.rtlTranslate
              , a = i;
            a.originalEvent && (a = a.originalEvent);
            var r = a.keyCode || a.charCode;
            if (!this.allowSlideNext && (this.isHorizontal() && 39 === r || this.isVertical() && 40 === r))
                return !1;
            if (!this.allowSlidePrev && (this.isHorizontal() && 37 === r || this.isVertical() && 38 === r))
                return !1;
            if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || e.activeElement && e.activeElement.nodeName && ("input" === e.activeElement.nodeName.toLowerCase() || "textarea" === e.activeElement.nodeName.toLowerCase()))) {
                if (this.params.keyboard.onlyInViewport && (37 === r || 39 === r || 38 === r || 40 === r)) {
                    var n = !1;
                    if (this.$el.parents("." + this.params.slideClass).length > 0 && 0 === this.$el.parents("." + this.params.slideActiveClass).length)
                        return;
                    var o = t.innerWidth
                      , l = t.innerHeight
                      , d = this.$el.offset();
                    s && (d.left -= this.$el[0].scrollLeft);
                    for (var h = [[d.left, d.top], [d.left + this.width, d.top], [d.left, d.top + this.height], [d.left + this.width, d.top + this.height]], p = 0; p < h.length; p += 1) {
                        var c = h[p];
                        c[0] >= 0 && c[0] <= o && c[1] >= 0 && c[1] <= l && (n = !0)
                    }
                    if (!n)
                        return
                }
                this.isHorizontal() ? (37 !== r && 39 !== r || (a.preventDefault ? a.preventDefault() : a.returnValue = !1),
                (39 === r && !s || 37 === r && s) && this.slideNext(),
                (37 === r && !s || 39 === r && s) && this.slidePrev()) : (38 !== r && 40 !== r || (a.preventDefault ? a.preventDefault() : a.returnValue = !1),
                40 === r && this.slideNext(),
                38 === r && this.slidePrev()),
                this.emit("keyPress", r)
            }
        },
        enable: function() {
            this.keyboard.enabled || (s(e).on("keydown", this.keyboard.handle),
            this.keyboard.enabled = !0)
        },
        disable: function() {
            this.keyboard.enabled && (s(e).off("keydown", this.keyboard.handle),
            this.keyboard.enabled = !1)
        }
    }
      , B = {
        name: "keyboard",
        params: {
            keyboard: {
                enabled: !1,
                onlyInViewport: !0
            }
        },
        create: function() {
            d.extend(this, {
                keyboard: {
                    enabled: !1,
                    enable: N.enable.bind(this),
                    disable: N.disable.bind(this),
                    handle: N.handle.bind(this)
                }
            })
        },
        on: {
            init: function() {
                this.params.keyboard.enabled && this.keyboard.enable()
            },
            destroy: function() {
                this.keyboard.enabled && this.keyboard.disable()
            }
        }
    };
    var G = {
        lastScrollTime: d.now(),
        event: t.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function() {
            var t = "onwheel"in e;
            if (!t) {
                var i = e.createElement("div");
                i.setAttribute("onwheel", "return;"),
                t = "function" == typeof i.onwheel
            }
            return !t && e.implementation && e.implementation.hasFeature && !0 !== e.implementation.hasFeature("", "") && (t = e.implementation.hasFeature("Events.wheel", "3.0")),
            t
        }() ? "wheel" : "mousewheel",
        normalize: function(e) {
            var t = 0
              , i = 0
              , s = 0
              , a = 0;
            return "detail"in e && (i = e.detail),
            "wheelDelta"in e && (i = -e.wheelDelta / 120),
            "wheelDeltaY"in e && (i = -e.wheelDeltaY / 120),
            "wheelDeltaX"in e && (t = -e.wheelDeltaX / 120),
            "axis"in e && e.axis === e.HORIZONTAL_AXIS && (t = i,
            i = 0),
            s = 10 * t,
            a = 10 * i,
            "deltaY"in e && (a = e.deltaY),
            "deltaX"in e && (s = e.deltaX),
            (s || a) && e.deltaMode && (1 === e.deltaMode ? (s *= 40,
            a *= 40) : (s *= 800,
            a *= 800)),
            s && !t && (t = s < 1 ? -1 : 1),
            a && !i && (i = a < 1 ? -1 : 1),
            {
                spinX: t,
                spinY: i,
                pixelX: s,
                pixelY: a
            }
        },
        handleMouseEnter: function() {
            this.mouseEntered = !0
        },
        handleMouseLeave: function() {
            this.mouseEntered = !1
        },
        handle: function(e) {
            var i = e
              , s = this
              , a = s.params.mousewheel;
            if (!s.mouseEntered && !a.releaseOnEdges)
                return !0;
            i.originalEvent && (i = i.originalEvent);
            var r = 0
              , n = s.rtlTranslate ? -1 : 1
              , o = G.normalize(i);
            if (a.forceToAxis)
                if (s.isHorizontal()) {
                    if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY)))
                        return !0;
                    r = o.pixelX * n
                } else {
                    if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX)))
                        return !0;
                    r = o.pixelY
                }
            else
                r = Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * n : -o.pixelY;
            if (0 === r)
                return !0;
            if (a.invert && (r = -r),
            s.params.freeMode) {
                var l = s.getTranslate() + r * a.sensitivity
                  , h = s.isBeginning
                  , p = s.isEnd;
                if (l >= s.minTranslate() && (l = s.minTranslate()),
                l <= s.maxTranslate() && (l = s.maxTranslate()),
                s.setTransition(0),
                s.setTranslate(l),
                s.updateProgress(),
                s.updateActiveIndex(),
                s.updateSlidesClasses(),
                (!h && s.isBeginning || !p && s.isEnd) && s.updateSlidesClasses(),
                s.params.freeModeSticky && (clearTimeout(s.mousewheel.timeout),
                s.mousewheel.timeout = d.nextTick(function() {
                    s.slideToClosest()
                }, 300)),
                s.emit("scroll", i),
                s.params.autoplay && s.params.autoplayDisableOnInteraction && s.stopAutoplay(),
                l === s.minTranslate() || l === s.maxTranslate())
                    return !0
            } else {
                if (d.now() - s.mousewheel.lastScrollTime > 60)
                    if (r < 0)
                        if (s.isEnd && !s.params.loop || s.animating) {
                            if (a.releaseOnEdges)
                                return !0
                        } else
                            s.slideNext(),
                            s.emit("scroll", i);
                    else if (s.isBeginning && !s.params.loop || s.animating) {
                        if (a.releaseOnEdges)
                            return !0
                    } else
                        s.slidePrev(),
                        s.emit("scroll", i);
                s.mousewheel.lastScrollTime = (new t.Date).getTime()
            }
            return i.preventDefault ? i.preventDefault() : i.returnValue = !1,
            !1
        },
        enable: function() {
            if (!G.event)
                return !1;
            if (this.mousewheel.enabled)
                return !1;
            var e = this.$el;
            return "container" !== this.params.mousewheel.eventsTarged && (e = s(this.params.mousewheel.eventsTarged)),
            e.on("mouseenter", this.mousewheel.handleMouseEnter),
            e.on("mouseleave", this.mousewheel.handleMouseLeave),
            e.on(G.event, this.mousewheel.handle),
            this.mousewheel.enabled = !0,
            !0
        },
        disable: function() {
            if (!G.event)
                return !1;
            if (!this.mousewheel.enabled)
                return !1;
            var e = this.$el;
            return "container" !== this.params.mousewheel.eventsTarged && (e = s(this.params.mousewheel.eventsTarged)),
            e.off(G.event, this.mousewheel.handle),
            this.mousewheel.enabled = !1,
            !0
        }
    }
      , X = {
        update: function() {
            var e = this.params.navigation;
            if (!this.params.loop) {
                var t = this.navigation
                  , i = t.$nextEl
                  , s = t.$prevEl;
                s && s.length > 0 && (this.isBeginning ? s.addClass(e.disabledClass) : s.removeClass(e.disabledClass),
                s[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)),
                i && i.length > 0 && (this.isEnd ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass),
                i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass))
            }
        },
        init: function() {
            var e, t, i = this, a = i.params.navigation;
            (a.nextEl || a.prevEl) && (a.nextEl && (e = s(a.nextEl),
            i.params.uniqueNavElements && "string" == typeof a.nextEl && e.length > 1 && 1 === i.$el.find(a.nextEl).length && (e = i.$el.find(a.nextEl))),
            a.prevEl && (t = s(a.prevEl),
            i.params.uniqueNavElements && "string" == typeof a.prevEl && t.length > 1 && 1 === i.$el.find(a.prevEl).length && (t = i.$el.find(a.prevEl))),
            e && e.length > 0 && e.on("click", function(e) {
                e.preventDefault(),
                i.isEnd && !i.params.loop || i.slideNext()
            }),
            t && t.length > 0 && t.on("click", function(e) {
                e.preventDefault(),
                i.isBeginning && !i.params.loop || i.slidePrev()
            }),
            d.extend(i.navigation, {
                $nextEl: e,
                nextEl: e && e[0],
                $prevEl: t,
                prevEl: t && t[0]
            }))
        },
        destroy: function() {
            var e = this.navigation
              , t = e.$nextEl
              , i = e.$prevEl;
            t && t.length && (t.off("click"),
            t.removeClass(this.params.navigation.disabledClass)),
            i && i.length && (i.off("click"),
            i.removeClass(this.params.navigation.disabledClass))
        }
    }
      , Y = {
        update: function() {
            var e = this.rtl
              , t = this.params.pagination;
            if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                var i, a = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length, r = this.pagination.$el, n = this.params.loop ? Math.ceil((a - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;
                if (this.params.loop ? ((i = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > a - 1 - 2 * this.loopedSlides && (i -= a - 2 * this.loopedSlides),
                i > n - 1 && (i -= n),
                i < 0 && "bullets" !== this.params.paginationType && (i = n + i)) : i = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0,
                "bullets" === t.type && this.pagination.bullets && this.pagination.bullets.length > 0) {
                    var o, l, d, h = this.pagination.bullets;
                    if (t.dynamicBullets && (this.pagination.bulletSize = h.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0),
                    r.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (t.dynamicMainBullets + 4) + "px"),
                    t.dynamicMainBullets > 1 && void 0 !== this.previousIndex && (this.pagination.dynamicBulletIndex += i - this.previousIndex,
                    this.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex = t.dynamicMainBullets - 1 : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)),
                    o = i - this.pagination.dynamicBulletIndex,
                    d = ((l = o + (Math.min(h.length, t.dynamicMainBullets) - 1)) + o) / 2),
                    h.removeClass(t.bulletActiveClass + " " + t.bulletActiveClass + "-next " + t.bulletActiveClass + "-next-next " + t.bulletActiveClass + "-prev " + t.bulletActiveClass + "-prev-prev " + t.bulletActiveClass + "-main"),
                    r.length > 1)
                        h.each(function(e, a) {
                            var r = s(a)
                              , n = r.index();
                            n === i && r.addClass(t.bulletActiveClass),
                            t.dynamicBullets && (n >= o && n <= l && r.addClass(t.bulletActiveClass + "-main"),
                            n === o && r.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"),
                            n === l && r.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next"))
                        });
                    else if (h.eq(i).addClass(t.bulletActiveClass),
                    t.dynamicBullets) {
                        for (var p = h.eq(o), c = h.eq(l), u = o; u <= l; u += 1)
                            h.eq(u).addClass(t.bulletActiveClass + "-main");
                        p.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"),
                        c.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next")
                    }
                    if (t.dynamicBullets) {
                        var v = Math.min(h.length, t.dynamicMainBullets + 4)
                          , f = (this.pagination.bulletSize * v - this.pagination.bulletSize) / 2 - d * this.pagination.bulletSize
                          , m = e ? "right" : "left";
                        h.css(this.isHorizontal() ? m : "top", f + "px")
                    }
                }
                if ("fraction" === t.type && (r.find("." + t.currentClass).text(i + 1),
                r.find("." + t.totalClass).text(n)),
                "progressbar" === t.type) {
                    var g = (i + 1) / n
                      , b = g
                      , w = 1;
                    this.isHorizontal() || (w = g,
                    b = 1),
                    r.find("." + t.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + b + ") scaleY(" + w + ")").transition(this.params.speed)
                }
                "custom" === t.type && t.renderCustom ? (r.html(t.renderCustom(this, i + 1, n)),
                this.emit("paginationRender", this, r[0])) : this.emit("paginationUpdate", this, r[0]),
                r[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass)
            }
        },
        render: function() {
            var e = this.params.pagination;
            if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                var t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length
                  , i = this.pagination.$el
                  , s = "";
                if ("bullets" === e.type) {
                    for (var a = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, r = 0; r < a; r += 1)
                        e.renderBullet ? s += e.renderBullet.call(this, r, e.bulletClass) : s += "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">";
                    i.html(s),
                    this.pagination.bullets = i.find("." + e.bulletClass)
                }
                "fraction" === e.type && (s = e.renderFraction ? e.renderFraction.call(this, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>',
                i.html(s)),
                "progressbar" === e.type && (s = e.renderProgressbar ? e.renderProgressbar.call(this, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>',
                i.html(s)),
                "custom" !== e.type && this.emit("paginationRender", this.pagination.$el[0])
            }
        },
        init: function() {
            var e = this
              , t = e.params.pagination;
            if (t.el) {
                var i = s(t.el);
                0 !== i.length && (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && 1 === e.$el.find(t.el).length && (i = e.$el.find(t.el)),
                "bullets" === t.type && t.clickable && i.addClass(t.clickableClass),
                i.addClass(t.modifierClass + t.type),
                "bullets" === t.type && t.dynamicBullets && (i.addClass("" + t.modifierClass + t.type + "-dynamic"),
                e.pagination.dynamicBulletIndex = 0,
                t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
                t.clickable && i.on("click", "." + t.bulletClass, function(t) {
                    t.preventDefault();
                    var i = s(this).index() * e.params.slidesPerGroup;
                    e.params.loop && (i += e.loopedSlides),
                    e.slideTo(i)
                }),
                d.extend(e.pagination, {
                    $el: i,
                    el: i[0]
                }))
            }
        },
        destroy: function() {
            var e = this.params.pagination;
            if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                var t = this.pagination.$el;
                t.removeClass(e.hiddenClass),
                t.removeClass(e.modifierClass + e.type),
                this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass),
                e.clickable && t.off("click", "." + e.bulletClass)
            }
        }
    }
      , V = {
        setTranslate: function() {
            if (this.params.scrollbar.el && this.scrollbar.el) {
                var e = this.scrollbar
                  , t = this.rtlTranslate
                  , i = this.progress
                  , s = e.dragSize
                  , a = e.trackSize
                  , r = e.$dragEl
                  , n = e.$el
                  , o = this.params.scrollbar
                  , l = s
                  , d = (a - s) * i;
                t ? (d = -d) > 0 ? (l = s - d,
                d = 0) : -d + s > a && (l = a + d) : d < 0 ? (l = s + d,
                d = 0) : d + s > a && (l = a - d),
                this.isHorizontal() ? (h.transforms3d ? r.transform("translate3d(" + d + "px, 0, 0)") : r.transform("translateX(" + d + "px)"),
                r[0].style.width = l + "px") : (h.transforms3d ? r.transform("translate3d(0px, " + d + "px, 0)") : r.transform("translateY(" + d + "px)"),
                r[0].style.height = l + "px"),
                o.hide && (clearTimeout(this.scrollbar.timeout),
                n[0].style.opacity = 1,
                this.scrollbar.timeout = setTimeout(function() {
                    n[0].style.opacity = 0,
                    n.transition(400)
                }, 1e3))
            }
        },
        setTransition: function(e) {
            this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
        },
        updateSize: function() {
            if (this.params.scrollbar.el && this.scrollbar.el) {
                var e = this.scrollbar
                  , t = e.$dragEl
                  , i = e.$el;
                t[0].style.width = "",
                t[0].style.height = "";
                var s, a = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight, r = this.size / this.virtualSize, n = r * (a / this.size);
                s = "auto" === this.params.scrollbar.dragSize ? a * r : parseInt(this.params.scrollbar.dragSize, 10),
                this.isHorizontal() ? t[0].style.width = s + "px" : t[0].style.height = s + "px",
                i[0].style.display = r >= 1 ? "none" : "",
                this.params.scrollbarHide && (i[0].style.opacity = 0),
                d.extend(e, {
                    trackSize: a,
                    divider: r,
                    moveDivider: n,
                    dragSize: s
                }),
                e.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass)
            }
        },
        setDragPosition: function(e) {
            var t, i = this.scrollbar, s = this.rtlTranslate, a = i.$el, r = i.dragSize, n = i.trackSize;
            t = ((this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - a.offset()[this.isHorizontal() ? "left" : "top"] - r / 2) / (n - r),
            t = Math.max(Math.min(t, 1), 0),
            s && (t = 1 - t);
            var o = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t;
            this.updateProgress(o),
            this.setTranslate(o),
            this.updateActiveIndex(),
            this.updateSlidesClasses()
        },
        onDragStart: function(e) {
            var t = this.params.scrollbar
              , i = this.scrollbar
              , s = this.$wrapperEl
              , a = i.$el
              , r = i.$dragEl;
            this.scrollbar.isTouched = !0,
            e.preventDefault(),
            e.stopPropagation(),
            s.transition(100),
            r.transition(100),
            i.setDragPosition(e),
            clearTimeout(this.scrollbar.dragTimeout),
            a.transition(0),
            t.hide && a.css("opacity", 1),
            this.emit("scrollbarDragStart", e)
        },
        onDragMove: function(e) {
            var t = this.scrollbar
              , i = this.$wrapperEl
              , s = t.$el
              , a = t.$dragEl;
            this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1,
            t.setDragPosition(e),
            i.transition(0),
            s.transition(0),
            a.transition(0),
            this.emit("scrollbarDragMove", e))
        },
        onDragEnd: function(e) {
            var t = this.params.scrollbar
              , i = this.scrollbar.$el;
            this.scrollbar.isTouched && (this.scrollbar.isTouched = !1,
            t.hide && (clearTimeout(this.scrollbar.dragTimeout),
            this.scrollbar.dragTimeout = d.nextTick(function() {
                i.css("opacity", 0),
                i.transition(400)
            }, 1e3)),
            this.emit("scrollbarDragEnd", e),
            t.snapOnRelease && this.slideToClosest())
        },
        enableDraggable: function() {
            if (this.params.scrollbar.el) {
                var t = this.scrollbar
                  , i = this.touchEvents
                  , s = this.touchEventsDesktop
                  , a = this.params
                  , r = t.$el[0]
                  , n = !(!h.passiveListener || !a.passiveListener) && {
                    passive: !1,
                    capture: !1
                }
                  , o = !(!h.passiveListener || !a.passiveListener) && {
                    passive: !0,
                    capture: !1
                };
                h.touch || !h.pointerEvents && !h.prefixedPointerEvents ? (h.touch && (r.addEventListener(i.start, this.scrollbar.onDragStart, n),
                r.addEventListener(i.move, this.scrollbar.onDragMove, n),
                r.addEventListener(i.end, this.scrollbar.onDragEnd, o)),
                (a.simulateTouch && !y.ios && !y.android || a.simulateTouch && !h.touch && y.ios) && (r.addEventListener("mousedown", this.scrollbar.onDragStart, n),
                e.addEventListener("mousemove", this.scrollbar.onDragMove, n),
                e.addEventListener("mouseup", this.scrollbar.onDragEnd, o))) : (r.addEventListener(s.start, this.scrollbar.onDragStart, n),
                e.addEventListener(s.move, this.scrollbar.onDragMove, n),
                e.addEventListener(s.end, this.scrollbar.onDragEnd, o))
            }
        },
        disableDraggable: function() {
            if (this.params.scrollbar.el) {
                var t = this.scrollbar
                  , i = this.touchEvents
                  , s = this.touchEventsDesktop
                  , a = this.params
                  , r = t.$el[0]
                  , n = !(!h.passiveListener || !a.passiveListener) && {
                    passive: !1,
                    capture: !1
                }
                  , o = !(!h.passiveListener || !a.passiveListener) && {
                    passive: !0,
                    capture: !1
                };
                h.touch || !h.pointerEvents && !h.prefixedPointerEvents ? (h.touch && (r.removeEventListener(i.start, this.scrollbar.onDragStart, n),
                r.removeEventListener(i.move, this.scrollbar.onDragMove, n),
                r.removeEventListener(i.end, this.scrollbar.onDragEnd, o)),
                (a.simulateTouch && !y.ios && !y.android || a.simulateTouch && !h.touch && y.ios) && (r.removeEventListener("mousedown", this.scrollbar.onDragStart, n),
                e.removeEventListener("mousemove", this.scrollbar.onDragMove, n),
                e.removeEventListener("mouseup", this.scrollbar.onDragEnd, o))) : (r.removeEventListener(s.start, this.scrollbar.onDragStart, n),
                e.removeEventListener(s.move, this.scrollbar.onDragMove, n),
                e.removeEventListener(s.end, this.scrollbar.onDragEnd, o))
            }
        },
        init: function() {
            if (this.params.scrollbar.el) {
                var e = this.scrollbar
                  , t = this.$el
                  , i = this.params.scrollbar
                  , a = s(i.el);
                this.params.uniqueNavElements && "string" == typeof i.el && a.length > 1 && 1 === t.find(i.el).length && (a = t.find(i.el));
                var r = a.find("." + this.params.scrollbar.dragClass);
                0 === r.length && (r = s('<div class="' + this.params.scrollbar.dragClass + '"></div>'),
                a.append(r)),
                d.extend(e, {
                    $el: a,
                    el: a[0],
                    $dragEl: r,
                    dragEl: r[0]
                }),
                i.draggable && e.enableDraggable()
            }
        },
        destroy: function() {
            this.scrollbar.disableDraggable()
        }
    }
      , R = {
        setTransform: function(e, t) {
            var i = this.rtl
              , a = s(e)
              , r = i ? -1 : 1
              , n = a.attr("data-swiper-parallax") || "0"
              , o = a.attr("data-swiper-parallax-x")
              , l = a.attr("data-swiper-parallax-y")
              , d = a.attr("data-swiper-parallax-scale")
              , h = a.attr("data-swiper-parallax-opacity");
            if (o || l ? (o = o || "0",
            l = l || "0") : this.isHorizontal() ? (o = n,
            l = "0") : (l = n,
            o = "0"),
            o = o.indexOf("%") >= 0 ? parseInt(o, 10) * t * r + "%" : o * t * r + "px",
            l = l.indexOf("%") >= 0 ? parseInt(l, 10) * t + "%" : l * t + "px",
            void 0 !== h && null !== h) {
                var p = h - (h - 1) * (1 - Math.abs(t));
                a[0].style.opacity = p
            }
            if (void 0 === d || null === d)
                a.transform("translate3d(" + o + ", " + l + ", 0px)");
            else {
                var c = d - (d - 1) * (1 - Math.abs(t));
                a.transform("translate3d(" + o + ", " + l + ", 0px) scale(" + c + ")")
            }
        },
        setTranslate: function() {
            var e = this
              , t = e.$el
              , i = e.slides
              , a = e.progress
              , r = e.snapGrid;
            t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(t, i) {
                e.parallax.setTransform(i, a)
            }),
            i.each(function(t, i) {
                var n = i.progress;
                e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (n += Math.ceil(t / 2) - a * (r.length - 1)),
                n = Math.min(Math.max(n, -1), 1),
                s(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(t, i) {
                    e.parallax.setTransform(i, n)
                })
            })
        },
        setTransition: function(e) {
            void 0 === e && (e = this.params.speed);
            this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(t, i) {
                var a = s(i)
                  , r = parseInt(a.attr("data-swiper-parallax-duration"), 10) || e;
                0 === e && (r = 0),
                a.transition(r)
            })
        }
    }
      , F = {
        getDistanceBetweenTouches: function(e) {
            if (e.targetTouches.length < 2)
                return 1;
            var t = e.targetTouches[0].pageX
              , i = e.targetTouches[0].pageY
              , s = e.targetTouches[1].pageX
              , a = e.targetTouches[1].pageY;
            return Math.sqrt(Math.pow(s - t, 2) + Math.pow(a - i, 2))
        },
        onGestureStart: function(e) {
            var t = this.params.zoom
              , i = this.zoom
              , a = i.gesture;
            if (i.fakeGestureTouched = !1,
            i.fakeGestureMoved = !1,
            !h.gestures) {
                if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2)
                    return;
                i.fakeGestureTouched = !0,
                a.scaleStart = F.getDistanceBetweenTouches(e)
            }
            a.$slideEl && a.$slideEl.length || (a.$slideEl = s(e.target).closest(".swiper-slide"),
            0 === a.$slideEl.length && (a.$slideEl = this.slides.eq(this.activeIndex)),
            a.$imageEl = a.$slideEl.find("img, svg, canvas"),
            a.$imageWrapEl = a.$imageEl.parent("." + t.containerClass),
            a.maxRatio = a.$imageWrapEl.attr("data-swiper-zoom") || t.maxRatio,
            0 !== a.$imageWrapEl.length) ? (a.$imageEl.transition(0),
            this.zoom.isScaling = !0) : a.$imageEl = void 0
        },
        onGestureChange: function(e) {
            var t = this.params.zoom
              , i = this.zoom
              , s = i.gesture;
            if (!h.gestures) {
                if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2)
                    return;
                i.fakeGestureMoved = !0,
                s.scaleMove = F.getDistanceBetweenTouches(e)
            }
            s.$imageEl && 0 !== s.$imageEl.length && (h.gestures ? this.zoom.scale = e.scale * i.currentScale : i.scale = s.scaleMove / s.scaleStart * i.currentScale,
            i.scale > s.maxRatio && (i.scale = s.maxRatio - 1 + Math.pow(i.scale - s.maxRatio + 1, .5)),
            i.scale < t.minRatio && (i.scale = t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, .5)),
            s.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"))
        },
        onGestureEnd: function(e) {
            var t = this.params.zoom
              , i = this.zoom
              , s = i.gesture;
            if (!h.gestures) {
                if (!i.fakeGestureTouched || !i.fakeGestureMoved)
                    return;
                if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !y.android)
                    return;
                i.fakeGestureTouched = !1,
                i.fakeGestureMoved = !1
            }
            s.$imageEl && 0 !== s.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, s.maxRatio), t.minRatio),
            s.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"),
            i.currentScale = i.scale,
            i.isScaling = !1,
            1 === i.scale && (s.$slideEl = void 0))
        },
        onTouchStart: function(e) {
            var t = this.zoom
              , i = t.gesture
              , s = t.image;
            i.$imageEl && 0 !== i.$imageEl.length && (s.isTouched || (y.android && e.preventDefault(),
            s.isTouched = !0,
            s.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX,
            s.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
        },
        onTouchMove: function(e) {
            var t = this.zoom
              , i = t.gesture
              , s = t.image
              , a = t.velocity;
            if (i.$imageEl && 0 !== i.$imageEl.length && (this.allowClick = !1,
            s.isTouched && i.$slideEl)) {
                s.isMoved || (s.width = i.$imageEl[0].offsetWidth,
                s.height = i.$imageEl[0].offsetHeight,
                s.startX = d.getTranslate(i.$imageWrapEl[0], "x") || 0,
                s.startY = d.getTranslate(i.$imageWrapEl[0], "y") || 0,
                i.slideWidth = i.$slideEl[0].offsetWidth,
                i.slideHeight = i.$slideEl[0].offsetHeight,
                i.$imageWrapEl.transition(0),
                this.rtl && (s.startX = -s.startX,
                s.startY = -s.startY));
                var r = s.width * t.scale
                  , n = s.height * t.scale;
                if (!(r < i.slideWidth && n < i.slideHeight)) {
                    if (s.minX = Math.min(i.slideWidth / 2 - r / 2, 0),
                    s.maxX = -s.minX,
                    s.minY = Math.min(i.slideHeight / 2 - n / 2, 0),
                    s.maxY = -s.minY,
                    s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX,
                    s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY,
                    !s.isMoved && !t.isScaling) {
                        if (this.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x))
                            return void (s.isTouched = !1);
                        if (!this.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y))
                            return void (s.isTouched = !1)
                    }
                    e.preventDefault(),
                    e.stopPropagation(),
                    s.isMoved = !0,
                    s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX,
                    s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY,
                    s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)),
                    s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)),
                    s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)),
                    s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)),
                    a.prevPositionX || (a.prevPositionX = s.touchesCurrent.x),
                    a.prevPositionY || (a.prevPositionY = s.touchesCurrent.y),
                    a.prevTime || (a.prevTime = Date.now()),
                    a.x = (s.touchesCurrent.x - a.prevPositionX) / (Date.now() - a.prevTime) / 2,
                    a.y = (s.touchesCurrent.y - a.prevPositionY) / (Date.now() - a.prevTime) / 2,
                    Math.abs(s.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0),
                    Math.abs(s.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0),
                    a.prevPositionX = s.touchesCurrent.x,
                    a.prevPositionY = s.touchesCurrent.y,
                    a.prevTime = Date.now(),
                    i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)")
                }
            }
        },
        onTouchEnd: function() {
            var e = this.zoom
              , t = e.gesture
              , i = e.image
              , s = e.velocity;
            if (t.$imageEl && 0 !== t.$imageEl.length) {
                if (!i.isTouched || !i.isMoved)
                    return i.isTouched = !1,
                    void (i.isMoved = !1);
                i.isTouched = !1,
                i.isMoved = !1;
                var a = 300
                  , r = 300
                  , n = s.x * a
                  , o = i.currentX + n
                  , l = s.y * r
                  , d = i.currentY + l;
                0 !== s.x && (a = Math.abs((o - i.currentX) / s.x)),
                0 !== s.y && (r = Math.abs((d - i.currentY) / s.y));
                var h = Math.max(a, r);
                i.currentX = o,
                i.currentY = d;
                var p = i.width * e.scale
                  , c = i.height * e.scale;
                i.minX = Math.min(t.slideWidth / 2 - p / 2, 0),
                i.maxX = -i.minX,
                i.minY = Math.min(t.slideHeight / 2 - c / 2, 0),
                i.maxY = -i.minY,
                i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX),
                i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY),
                t.$imageWrapEl.transition(h).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)")
            }
        },
        onTransitionEnd: function() {
            var e = this.zoom
              , t = e.gesture;
            t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"),
            t.$imageWrapEl.transform("translate3d(0,0,0)"),
            t.$slideEl = void 0,
            t.$imageEl = void 0,
            t.$imageWrapEl = void 0,
            e.scale = 1,
            e.currentScale = 1)
        },
        toggle: function(e) {
            var t = this.zoom;
            t.scale && 1 !== t.scale ? t.out() : t.in(e)
        },
        in: function(e) {
            var t, i, a, r, n, o, l, d, h, p, c, u, v, f, m, g, b = this.zoom, w = this.params.zoom, y = b.gesture, x = b.image;
            (y.$slideEl || (y.$slideEl = this.clickedSlide ? s(this.clickedSlide) : this.slides.eq(this.activeIndex),
            y.$imageEl = y.$slideEl.find("img, svg, canvas"),
            y.$imageWrapEl = y.$imageEl.parent("." + w.containerClass)),
            y.$imageEl && 0 !== y.$imageEl.length) && (y.$slideEl.addClass("" + w.zoomedSlideClass),
            void 0 === x.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX,
            i = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = x.touchesStart.x,
            i = x.touchesStart.y),
            b.scale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio,
            b.currentScale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio,
            e ? (m = y.$slideEl[0].offsetWidth,
            g = y.$slideEl[0].offsetHeight,
            a = y.$slideEl.offset().left + m / 2 - t,
            r = y.$slideEl.offset().top + g / 2 - i,
            l = y.$imageEl[0].offsetWidth,
            d = y.$imageEl[0].offsetHeight,
            h = l * b.scale,
            p = d * b.scale,
            v = -(c = Math.min(m / 2 - h / 2, 0)),
            f = -(u = Math.min(g / 2 - p / 2, 0)),
            n = a * b.scale,
            o = r * b.scale,
            n < c && (n = c),
            n > v && (n = v),
            o < u && (o = u),
            o > f && (o = f)) : (n = 0,
            o = 0),
            y.$imageWrapEl.transition(300).transform("translate3d(" + n + "px, " + o + "px,0)"),
            y.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + b.scale + ")"))
        },
        out: function() {
            var e = this.zoom
              , t = this.params.zoom
              , i = e.gesture;
            i.$slideEl || (i.$slideEl = this.clickedSlide ? s(this.clickedSlide) : this.slides.eq(this.activeIndex),
            i.$imageEl = i.$slideEl.find("img, svg, canvas"),
            i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass)),
            i.$imageEl && 0 !== i.$imageEl.length && (e.scale = 1,
            e.currentScale = 1,
            i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
            i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
            i.$slideEl.removeClass("" + t.zoomedSlideClass),
            i.$slideEl = void 0)
        },
        enable: function() {
            var e = this.zoom;
            if (!e.enabled) {
                e.enabled = !0;
                var t = !("touchstart" !== this.touchEvents.start || !h.passiveListener || !this.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                h.gestures ? (this.$wrapperEl.on("gesturestart", ".swiper-slide", e.onGestureStart, t),
                this.$wrapperEl.on("gesturechange", ".swiper-slide", e.onGestureChange, t),
                this.$wrapperEl.on("gestureend", ".swiper-slide", e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.on(this.touchEvents.start, ".swiper-slide", e.onGestureStart, t),
                this.$wrapperEl.on(this.touchEvents.move, ".swiper-slide", e.onGestureChange, t),
                this.$wrapperEl.on(this.touchEvents.end, ".swiper-slide", e.onGestureEnd, t)),
                this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove)
            }
        },
        disable: function() {
            var e = this.zoom;
            if (e.enabled) {
                this.zoom.enabled = !1;
                var t = !("touchstart" !== this.touchEvents.start || !h.passiveListener || !this.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                h.gestures ? (this.$wrapperEl.off("gesturestart", ".swiper-slide", e.onGestureStart, t),
                this.$wrapperEl.off("gesturechange", ".swiper-slide", e.onGestureChange, t),
                this.$wrapperEl.off("gestureend", ".swiper-slide", e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.off(this.touchEvents.start, ".swiper-slide", e.onGestureStart, t),
                this.$wrapperEl.off(this.touchEvents.move, ".swiper-slide", e.onGestureChange, t),
                this.$wrapperEl.off(this.touchEvents.end, ".swiper-slide", e.onGestureEnd, t)),
                this.$wrapperEl.off(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove)
            }
        }
    }
      , W = {
        loadInSlide: function(e, t) {
            void 0 === t && (t = !0);
            var i = this
              , a = i.params.lazy;
            if (void 0 !== e && 0 !== i.slides.length) {
                var r = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : i.slides.eq(e)
                  , n = r.find("." + a.elementClass + ":not(." + a.loadedClass + "):not(." + a.loadingClass + ")");
                !r.hasClass(a.elementClass) || r.hasClass(a.loadedClass) || r.hasClass(a.loadingClass) || (n = n.add(r[0])),
                0 !== n.length && n.each(function(e, n) {
                    var o = s(n);
                    o.addClass(a.loadingClass);
                    var l = o.attr("data-background")
                      , d = o.attr("data-src")
                      , h = o.attr("data-srcset")
                      , p = o.attr("data-sizes");
                    i.loadImage(o[0], d || l, h, p, !1, function() {
                        if (void 0 !== i && null !== i && i && (!i || i.params) && !i.destroyed) {
                            if (l ? (o.css("background-image", 'url("' + l + '")'),
                            o.removeAttr("data-background")) : (h && (o.attr("srcset", h),
                            o.removeAttr("data-srcset")),
                            p && (o.attr("sizes", p),
                            o.removeAttr("data-sizes")),
                            d && (o.attr("src", d),
                            o.removeAttr("data-src"))),
                            o.addClass(a.loadedClass).removeClass(a.loadingClass),
                            r.find("." + a.preloaderClass).remove(),
                            i.params.loop && t) {
                                var e = r.attr("data-swiper-slide-index");
                                if (r.hasClass(i.params.slideDuplicateClass)) {
                                    var s = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");
                                    i.lazy.loadInSlide(s.index(), !1)
                                } else {
                                    var n = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                    i.lazy.loadInSlide(n.index(), !1)
                                }
                            }
                            i.emit("lazyImageReady", r[0], o[0])
                        }
                    }),
                    i.emit("lazyImageLoad", r[0], o[0])
                })
            }
        },
        load: function() {
            var e = this
              , t = e.$wrapperEl
              , i = e.params
              , a = e.slides
              , r = e.activeIndex
              , n = e.virtual && i.virtual.enabled
              , o = i.lazy
              , l = i.slidesPerView;
            function d(e) {
                if (n) {
                    if (t.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]').length)
                        return !0
                } else if (a[e])
                    return !0;
                return !1
            }
            function h(e) {
                return n ? s(e).attr("data-swiper-slide-index") : s(e).index()
            }
            if ("auto" === l && (l = 0),
            e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0),
            e.params.watchSlidesVisibility)
                t.children("." + i.slideVisibleClass).each(function(t, i) {
                    var a = n ? s(i).attr("data-swiper-slide-index") : s(i).index();
                    e.lazy.loadInSlide(a)
                });
            else if (l > 1)
                for (var p = r; p < r + l; p += 1)
                    d(p) && e.lazy.loadInSlide(p);
            else
                e.lazy.loadInSlide(r);
            if (o.loadPrevNext)
                if (l > 1 || o.loadPrevNextAmount && o.loadPrevNextAmount > 1) {
                    for (var c = o.loadPrevNextAmount, u = l, v = Math.min(r + u + Math.max(c, u), a.length), f = Math.max(r - Math.max(u, c), 0), m = r + l; m < v; m += 1)
                        d(m) && e.lazy.loadInSlide(m);
                    for (var g = f; g < r; g += 1)
                        d(g) && e.lazy.loadInSlide(g)
                } else {
                    var b = t.children("." + i.slideNextClass);
                    b.length > 0 && e.lazy.loadInSlide(h(b));
                    var w = t.children("." + i.slidePrevClass);
                    w.length > 0 && e.lazy.loadInSlide(h(w))
                }
        }
    }
      , q = {
        LinearSpline: function(e, t) {
            var i, s, a, r, n, o = function(e, t) {
                for (s = -1,
                i = e.length; i - s > 1; )
                    e[a = i + s >> 1] <= t ? s = a : i = a;
                return i
            };
            return this.x = e,
            this.y = t,
            this.lastIndex = e.length - 1,
            this.interpolate = function(e) {
                return e ? (n = o(this.x, e),
                r = n - 1,
                (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0
            }
            ,
            this
        },
        getInterpolateFunction: function(e) {
            this.controller.spline || (this.controller.spline = this.params.loop ? new q.LinearSpline(this.slidesGrid,e.slidesGrid) : new q.LinearSpline(this.snapGrid,e.snapGrid))
        },
        setTranslate: function(e, t) {
            var i, s, a = this, r = a.controller.control;
            function n(e) {
                var t = a.rtlTranslate ? -a.translate : a.translate;
                "slide" === a.params.controller.by && (a.controller.getInterpolateFunction(e),
                s = -a.controller.spline.interpolate(-t)),
                s && "container" !== a.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (a.maxTranslate() - a.minTranslate()),
                s = (t - a.minTranslate()) * i + e.minTranslate()),
                a.params.controller.inverse && (s = e.maxTranslate() - s),
                e.updateProgress(s),
                e.setTranslate(s, a),
                e.updateActiveIndex(),
                e.updateSlidesClasses()
            }
            if (Array.isArray(r))
                for (var o = 0; o < r.length; o += 1)
                    r[o] !== t && r[o]instanceof P && n(r[o]);
            else
                r instanceof P && t !== r && n(r)
        },
        setTransition: function(e, t) {
            var i, s = this, a = s.controller.control;
            function r(t) {
                t.setTransition(e, s),
                0 !== e && (t.transitionStart(),
                t.$wrapperEl.transitionEnd(function() {
                    a && (t.params.loop && "slide" === s.params.controller.by && t.loopFix(),
                    t.transitionEnd())
                }))
            }
            if (Array.isArray(a))
                for (i = 0; i < a.length; i += 1)
                    a[i] !== t && a[i]instanceof P && r(a[i]);
            else
                a instanceof P && t !== a && r(a)
        }
    }
      , j = {
        makeElFocusable: function(e) {
            return e.attr("tabIndex", "0"),
            e
        },
        addElRole: function(e, t) {
            return e.attr("role", t),
            e
        },
        addElLabel: function(e, t) {
            return e.attr("aria-label", t),
            e
        },
        disableEl: function(e) {
            return e.attr("aria-disabled", !0),
            e
        },
        enableEl: function(e) {
            return e.attr("aria-disabled", !1),
            e
        },
        onEnterKey: function(e) {
            var t = this.params.a11y;
            if (13 === e.keyCode) {
                var i = s(e.target);
                this.navigation && this.navigation.$nextEl && i.is(this.navigation.$nextEl) && (this.isEnd && !this.params.loop || this.slideNext(),
                this.isEnd ? this.a11y.notify(t.lastSlideMessage) : this.a11y.notify(t.nextSlideMessage)),
                this.navigation && this.navigation.$prevEl && i.is(this.navigation.$prevEl) && (this.isBeginning && !this.params.loop || this.slidePrev(),
                this.isBeginning ? this.a11y.notify(t.firstSlideMessage) : this.a11y.notify(t.prevSlideMessage)),
                this.pagination && i.is("." + this.params.pagination.bulletClass) && i[0].click()
            }
        },
        notify: function(e) {
            var t = this.a11y.liveRegion;
            0 !== t.length && (t.html(""),
            t.html(e))
        },
        updateNavigation: function() {
            if (!this.params.loop) {
                var e = this.navigation
                  , t = e.$nextEl
                  , i = e.$prevEl;
                i && i.length > 0 && (this.isBeginning ? this.a11y.disableEl(i) : this.a11y.enableEl(i)),
                t && t.length > 0 && (this.isEnd ? this.a11y.disableEl(t) : this.a11y.enableEl(t))
            }
        },
        updatePagination: function() {
            var e = this
              , t = e.params.a11y;
            e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each(function(i, a) {
                var r = s(a);
                e.a11y.makeElFocusable(r),
                e.a11y.addElRole(r, "button"),
                e.a11y.addElLabel(r, t.paginationBulletMessage.replace(/{{index}}/, r.index() + 1))
            })
        },
        init: function() {
            this.$el.append(this.a11y.liveRegion);
            var e, t, i = this.params.a11y;
            this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl),
            this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl),
            e && (this.a11y.makeElFocusable(e),
            this.a11y.addElRole(e, "button"),
            this.a11y.addElLabel(e, i.nextSlideMessage),
            e.on("keydown", this.a11y.onEnterKey)),
            t && (this.a11y.makeElFocusable(t),
            this.a11y.addElRole(t, "button"),
            this.a11y.addElLabel(t, i.prevSlideMessage),
            t.on("keydown", this.a11y.onEnterKey)),
            this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.on("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
        },
        destroy: function() {
            var e, t;
            this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove(),
            this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl),
            this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl),
            e && e.off("keydown", this.a11y.onEnterKey),
            t && t.off("keydown", this.a11y.onEnterKey),
            this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
        }
    }
      , K = {
        init: function() {
            if (this.params.history) {
                if (!t.history || !t.history.pushState)
                    return this.params.history.enabled = !1,
                    void (this.params.hashNavigation.enabled = !0);
                var e = this.history;
                e.initialized = !0,
                e.paths = K.getPathValues(),
                (e.paths.key || e.paths.value) && (e.scrollToSlide(0, e.paths.value, this.params.runCallbacksOnInit),
                this.params.history.replaceState || t.addEventListener("popstate", this.history.setHistoryPopState))
            }
        },
        destroy: function() {
            this.params.history.replaceState || t.removeEventListener("popstate", this.history.setHistoryPopState)
        },
        setHistoryPopState: function() {
            this.history.paths = K.getPathValues(),
            this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
        },
        getPathValues: function() {
            var e = t.location.pathname.slice(1).split("/").filter(function(e) {
                return "" !== e
            })
              , i = e.length;
            return {
                key: e[i - 2],
                value: e[i - 1]
            }
        },
        setHistory: function(e, i) {
            if (this.history.initialized && this.params.history.enabled) {
                var s = this.slides.eq(i)
                  , a = K.slugify(s.attr("data-history"));
                t.location.pathname.includes(e) || (a = e + "/" + a);
                var r = t.history.state;
                r && r.value === a || (this.params.history.replaceState ? t.history.replaceState({
                    value: a
                }, null, a) : t.history.pushState({
                    value: a
                }, null, a))
            }
        },
        slugify: function(e) {
            return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
        },
        scrollToSlide: function(e, t, i) {
            if (t)
                for (var s = 0, a = this.slides.length; s < a; s += 1) {
                    var r = this.slides.eq(s);
                    if (K.slugify(r.attr("data-history")) === t && !r.hasClass(this.params.slideDuplicateClass)) {
                        var n = r.index();
                        this.slideTo(n, e, i)
                    }
                }
            else
                this.slideTo(0, e, i)
        }
    }
      , U = {
        onHashCange: function() {
            var t = e.location.hash.replace("#", "");
            t !== this.slides.eq(this.activeIndex).attr("data-hash") && this.slideTo(this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + t + '"]').index())
        },
        setHash: function() {
            if (this.hashNavigation.initialized && this.params.hashNavigation.enabled)
                if (this.params.hashNavigation.replaceState && t.history && t.history.replaceState)
                    t.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || "");
                else {
                    var i = this.slides.eq(this.activeIndex)
                      , s = i.attr("data-hash") || i.attr("data-history");
                    e.location.hash = s || ""
                }
        },
        init: function() {
            if (!(!this.params.hashNavigation.enabled || this.params.history && this.params.history.enabled)) {
                this.hashNavigation.initialized = !0;
                var i = e.location.hash.replace("#", "");
                if (i)
                    for (var a = 0, r = this.slides.length; a < r; a += 1) {
                        var n = this.slides.eq(a);
                        if ((n.attr("data-hash") || n.attr("data-history")) === i && !n.hasClass(this.params.slideDuplicateClass)) {
                            var o = n.index();
                            this.slideTo(o, 0, this.params.runCallbacksOnInit, !0)
                        }
                    }
                this.params.hashNavigation.watchState && s(t).on("hashchange", this.hashNavigation.onHashCange)
            }
        },
        destroy: function() {
            this.params.hashNavigation.watchState && s(t).off("hashchange", this.hashNavigation.onHashCange)
        }
    }
      , _ = {
        run: function() {
            var e = this
              , t = e.slides.eq(e.activeIndex)
              , i = e.params.autoplay.delay;
            t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
            e.autoplay.timeout = d.nextTick(function() {
                e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(),
                e.slidePrev(e.params.speed, !0, !0),
                e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0),
                e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0),
                e.emit("autoplay")) : e.params.loop ? (e.loopFix(),
                e.slideNext(e.params.speed, !0, !0),
                e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0),
                e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0),
                e.emit("autoplay"))
            }, i)
        },
        start: function() {
            return void 0 === this.autoplay.timeout && (!this.autoplay.running && (this.autoplay.running = !0,
            this.emit("autoplayStart"),
            this.autoplay.run(),
            !0))
        },
        stop: function() {
            return !!this.autoplay.running && (void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout),
            this.autoplay.timeout = void 0),
            this.autoplay.running = !1,
            this.emit("autoplayStop"),
            !0))
        },
        pause: function(e) {
            var t = this;
            t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout),
            t.autoplay.paused = !0,
            0 !== e && t.params.autoplay.waitForTransition ? t.$wrapperEl.transitionEnd(function() {
                t && !t.destroyed && (t.autoplay.paused = !1,
                t.autoplay.running ? t.autoplay.run() : t.autoplay.stop())
            }) : (t.autoplay.paused = !1,
            t.autoplay.run())))
        }
    }
      , Z = {
        setTranslate: function() {
            for (var e = this.slides, t = 0; t < e.length; t += 1) {
                var i = this.slides.eq(t)
                  , s = -i[0].swiperSlideOffset;
                this.params.virtualTranslate || (s -= this.translate);
                var a = 0;
                this.isHorizontal() || (a = s,
                s = 0);
                var r = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                i.css({
                    opacity: r
                }).transform("translate3d(" + s + "px, " + a + "px, 0px)")
            }
        },
        setTransition: function(e) {
            var t = this
              , i = t.slides
              , s = t.$wrapperEl;
            if (i.transition(e),
            t.params.virtualTranslate && 0 !== e) {
                var a = !1;
                i.transitionEnd(function() {
                    if (!a && t && !t.destroyed) {
                        a = !0,
                        t.animating = !1;
                        for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1)
                            s.trigger(e[i])
                    }
                })
            }
        }
    }
      , Q = {
        setTranslate: function() {
            var e, t = this.$el, i = this.$wrapperEl, a = this.slides, r = this.width, n = this.height, o = this.rtlTranslate, l = this.size, d = this.params.cubeEffect, h = this.isHorizontal(), p = this.virtual && this.params.virtual.enabled, c = 0;
            d.shadow && (h ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = s('<div class="swiper-cube-shadow"></div>'),
            i.append(e)),
            e.css({
                height: r + "px"
            })) : 0 === (e = t.find(".swiper-cube-shadow")).length && (e = s('<div class="swiper-cube-shadow"></div>'),
            t.append(e)));
            for (var u = 0; u < a.length; u += 1) {
                var v = a.eq(u)
                  , f = u;
                p && (f = parseInt(v.attr("data-swiper-slide-index"), 10));
                var m = 90 * f
                  , g = Math.floor(m / 360);
                o && (m = -m,
                g = Math.floor(-m / 360));
                var b = Math.max(Math.min(v[0].progress, 1), -1)
                  , w = 0
                  , y = 0
                  , x = 0;
                f % 4 == 0 ? (w = 4 * -g * l,
                x = 0) : (f - 1) % 4 == 0 ? (w = 0,
                x = 4 * -g * l) : (f - 2) % 4 == 0 ? (w = l + 4 * g * l,
                x = l) : (f - 3) % 4 == 0 && (w = -l,
                x = 3 * l + 4 * l * g),
                o && (w = -w),
                h || (y = w,
                w = 0);
                var E = "rotateX(" + (h ? 0 : -m) + "deg) rotateY(" + (h ? m : 0) + "deg) translate3d(" + w + "px, " + y + "px, " + x + "px)";
                if (b <= 1 && b > -1 && (c = 90 * f + 90 * b,
                o && (c = 90 * -f - 90 * b)),
                v.transform(E),
                d.slideShadows) {
                    var T = h ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top")
                      , C = h ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
                    0 === T.length && (T = s('<div class="swiper-slide-shadow-' + (h ? "left" : "top") + '"></div>'),
                    v.append(T)),
                    0 === C.length && (C = s('<div class="swiper-slide-shadow-' + (h ? "right" : "bottom") + '"></div>'),
                    v.append(C)),
                    T.length && (T[0].style.opacity = Math.max(-b, 0)),
                    C.length && (C[0].style.opacity = Math.max(b, 0))
                }
            }
            if (i.css({
                "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
                "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
                "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
                "transform-origin": "50% 50% -" + l / 2 + "px"
            }),
            d.shadow)
                if (h)
                    e.transform("translate3d(0px, " + (r / 2 + d.shadowOffset) + "px, " + -r / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")");
                else {
                    var M = Math.abs(c) - 90 * Math.floor(Math.abs(c) / 90)
                      , z = 1.5 - (Math.sin(2 * M * Math.PI / 360) / 2 + Math.cos(2 * M * Math.PI / 360) / 2)
                      , P = d.shadowScale
                      , k = d.shadowScale / z
                      , $ = d.shadowOffset;
                    e.transform("scale3d(" + P + ", 1, " + k + ") translate3d(0px, " + (n / 2 + $) + "px, " + -n / 2 / k + "px) rotateX(-90deg)")
                }
            var L = S.isSafari || S.isUiWebView ? -l / 2 : 0;
            i.transform("translate3d(0px,0," + L + "px) rotateX(" + (this.isHorizontal() ? 0 : c) + "deg) rotateY(" + (this.isHorizontal() ? -c : 0) + "deg)")
        },
        setTransition: function(e) {
            var t = this.$el;
            this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
            this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
        }
    }
      , J = {
        setTranslate: function() {
            for (var e = this.slides, t = this.rtlTranslate, i = 0; i < e.length; i += 1) {
                var a = e.eq(i)
                  , r = a[0].progress;
                this.params.flipEffect.limitRotation && (r = Math.max(Math.min(a[0].progress, 1), -1));
                var n = -180 * r
                  , o = 0
                  , l = -a[0].swiperSlideOffset
                  , d = 0;
                if (this.isHorizontal() ? t && (n = -n) : (d = l,
                l = 0,
                o = -n,
                n = 0),
                a[0].style.zIndex = -Math.abs(Math.round(r)) + e.length,
                this.params.flipEffect.slideShadows) {
                    var h = this.isHorizontal() ? a.find(".swiper-slide-shadow-left") : a.find(".swiper-slide-shadow-top")
                      , p = this.isHorizontal() ? a.find(".swiper-slide-shadow-right") : a.find(".swiper-slide-shadow-bottom");
                    0 === h.length && (h = s('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'),
                    a.append(h)),
                    0 === p.length && (p = s('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'),
                    a.append(p)),
                    h.length && (h[0].style.opacity = Math.max(-r, 0)),
                    p.length && (p[0].style.opacity = Math.max(r, 0))
                }
                a.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)")
            }
        },
        setTransition: function(e) {
            var t = this
              , i = t.slides
              , s = t.activeIndex
              , a = t.$wrapperEl;
            if (i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
            t.params.virtualTranslate && 0 !== e) {
                var r = !1;
                i.eq(s).transitionEnd(function() {
                    if (!r && t && !t.destroyed) {
                        r = !0,
                        t.animating = !1;
                        for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1)
                            a.trigger(e[i])
                    }
                })
            }
        }
    }
      , ee = {
        setTranslate: function() {
            for (var e = this.width, t = this.height, i = this.slides, a = this.$wrapperEl, r = this.slidesSizesGrid, n = this.params.coverflowEffect, o = this.isHorizontal(), l = this.translate, d = o ? e / 2 - l : t / 2 - l, p = o ? n.rotate : -n.rotate, c = n.depth, u = 0, v = i.length; u < v; u += 1) {
                var f = i.eq(u)
                  , m = r[u]
                  , g = (d - f[0].swiperSlideOffset - m / 2) / m * n.modifier
                  , b = o ? p * g : 0
                  , w = o ? 0 : p * g
                  , y = -c * Math.abs(g)
                  , x = o ? 0 : n.stretch * g
                  , E = o ? n.stretch * g : 0;
                Math.abs(E) < .001 && (E = 0),
                Math.abs(x) < .001 && (x = 0),
                Math.abs(y) < .001 && (y = 0),
                Math.abs(b) < .001 && (b = 0),
                Math.abs(w) < .001 && (w = 0);
                var T = "translate3d(" + E + "px," + x + "px," + y + "px)  rotateX(" + w + "deg) rotateY(" + b + "deg)";
                if (f.transform(T),
                f[0].style.zIndex = 1 - Math.abs(Math.round(g)),
                n.slideShadows) {
                    var S = o ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top")
                      , C = o ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
                    0 === S.length && (S = s('<div class="swiper-slide-shadow-' + (o ? "left" : "top") + '"></div>'),
                    f.append(S)),
                    0 === C.length && (C = s('<div class="swiper-slide-shadow-' + (o ? "right" : "bottom") + '"></div>'),
                    f.append(C)),
                    S.length && (S[0].style.opacity = g > 0 ? g : 0),
                    C.length && (C[0].style.opacity = -g > 0 ? -g : 0)
                }
            }
            (h.pointerEvents || h.prefixedPointerEvents) && (a[0].style.perspectiveOrigin = d + "px 50%")
        },
        setTransition: function(e) {
            this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
        }
    }
      , te = [k, $, L, I, O, H, B, {
        name: "mousewheel",
        params: {
            mousewheel: {
                enabled: !1,
                releaseOnEdges: !1,
                invert: !1,
                forceToAxis: !1,
                sensitivity: 1,
                eventsTarged: "container"
            }
        },
        create: function() {
            d.extend(this, {
                mousewheel: {
                    enabled: !1,
                    enable: G.enable.bind(this),
                    disable: G.disable.bind(this),
                    handle: G.handle.bind(this),
                    handleMouseEnter: G.handleMouseEnter.bind(this),
                    handleMouseLeave: G.handleMouseLeave.bind(this),
                    lastScrollTime: d.now()
                }
            })
        },
        on: {
            init: function() {
                this.params.mousewheel.enabled && this.mousewheel.enable()
            },
            destroy: function() {
                this.mousewheel.enabled && this.mousewheel.disable()
            }
        }
    }, {
        name: "navigation",
        params: {
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock"
            }
        },
        create: function() {
            d.extend(this, {
                navigation: {
                    init: X.init.bind(this),
                    update: X.update.bind(this),
                    destroy: X.destroy.bind(this)
                }
            })
        },
        on: {
            init: function() {
                this.navigation.init(),
                this.navigation.update()
            },
            toEdge: function() {
                this.navigation.update()
            },
            fromEdge: function() {
                this.navigation.update()
            },
            destroy: function() {
                this.navigation.destroy()
            },
            click: function(e) {
                var t = this.navigation
                  , i = t.$nextEl
                  , a = t.$prevEl;
                !this.params.navigation.hideOnClick || s(e.target).is(a) || s(e.target).is(i) || (i && i.toggleClass(this.params.navigation.hiddenClass),
                a && a.toggleClass(this.params.navigation.hiddenClass))
            }
        }
    }, {
        name: "pagination",
        params: {
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
                modifierClass: "swiper-pagination-",
                currentClass: "swiper-pagination-current",
                totalClass: "swiper-pagination-total",
                hiddenClass: "swiper-pagination-hidden",
                progressbarFillClass: "swiper-pagination-progressbar-fill",
                clickableClass: "swiper-pagination-clickable",
                lockClass: "swiper-pagination-lock"
            }
        },
        create: function() {
            d.extend(this, {
                pagination: {
                    init: Y.init.bind(this),
                    render: Y.render.bind(this),
                    update: Y.update.bind(this),
                    destroy: Y.destroy.bind(this),
                    dynamicBulletIndex: 0
                }
            })
        },
        on: {
            init: function() {
                this.pagination.init(),
                this.pagination.render(),
                this.pagination.update()
            },
            activeIndexChange: function() {
                this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update()
            },
            snapIndexChange: function() {
                this.params.loop || this.pagination.update()
            },
            slidesLengthChange: function() {
                this.params.loop && (this.pagination.render(),
                this.pagination.update())
            },
            snapGridLengthChange: function() {
                this.params.loop || (this.pagination.render(),
                this.pagination.update())
            },
            destroy: function() {
                this.pagination.destroy()
            },
            click: function(e) {
                this.params.pagination.el && this.params.pagination.hideOnClick && this.pagination.$el.length > 0 && !s(e.target).hasClass(this.params.pagination.bulletClass) && this.pagination.$el.toggleClass(this.params.pagination.hiddenClass)
            }
        }
    }, {
        name: "scrollbar",
        params: {
            scrollbar: {
                el: null,
                dragSize: "auto",
                hide: !1,
                draggable: !1,
                snapOnRelease: !0,
                lockClass: "swiper-scrollbar-lock",
                dragClass: "swiper-scrollbar-drag"
            }
        },
        create: function() {
            d.extend(this, {
                scrollbar: {
                    init: V.init.bind(this),
                    destroy: V.destroy.bind(this),
                    updateSize: V.updateSize.bind(this),
                    setTranslate: V.setTranslate.bind(this),
                    setTransition: V.setTransition.bind(this),
                    enableDraggable: V.enableDraggable.bind(this),
                    disableDraggable: V.disableDraggable.bind(this),
                    setDragPosition: V.setDragPosition.bind(this),
                    onDragStart: V.onDragStart.bind(this),
                    onDragMove: V.onDragMove.bind(this),
                    onDragEnd: V.onDragEnd.bind(this),
                    isTouched: !1,
                    timeout: null,
                    dragTimeout: null
                }
            })
        },
        on: {
            init: function() {
                this.scrollbar.init(),
                this.scrollbar.updateSize(),
                this.scrollbar.setTranslate()
            },
            update: function() {
                this.scrollbar.updateSize()
            },
            resize: function() {
                this.scrollbar.updateSize()
            },
            observerUpdate: function() {
                this.scrollbar.updateSize()
            },
            setTranslate: function() {
                this.scrollbar.setTranslate()
            },
            setTransition: function(e) {
                this.scrollbar.setTransition(e)
            },
            destroy: function() {
                this.scrollbar.destroy()
            }
        }
    }, {
        name: "parallax",
        params: {
            parallax: {
                enabled: !1
            }
        },
        create: function() {
            d.extend(this, {
                parallax: {
                    setTransform: R.setTransform.bind(this),
                    setTranslate: R.setTranslate.bind(this),
                    setTransition: R.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                this.params.parallax.enabled && (this.params.watchSlidesProgress = !0)
            },
            init: function() {
                this.params.parallax && this.parallax.setTranslate()
            },
            setTranslate: function() {
                this.params.parallax && this.parallax.setTranslate()
            },
            setTransition: function(e) {
                this.params.parallax && this.parallax.setTransition(e)
            }
        }
    }, {
        name: "zoom",
        params: {
            zoom: {
                enabled: !1,
                maxRatio: 3,
                minRatio: 1,
                toggle: !0,
                containerClass: "swiper-zoom-container",
                zoomedSlideClass: "swiper-slide-zoomed"
            }
        },
        create: function() {
            var e = this
              , t = {
                enabled: !1,
                scale: 1,
                currentScale: 1,
                isScaling: !1,
                gesture: {
                    $slideEl: void 0,
                    slideWidth: void 0,
                    slideHeight: void 0,
                    $imageEl: void 0,
                    $imageWrapEl: void 0,
                    maxRatio: 3
                },
                image: {
                    isTouched: void 0,
                    isMoved: void 0,
                    currentX: void 0,
                    currentY: void 0,
                    minX: void 0,
                    minY: void 0,
                    maxX: void 0,
                    maxY: void 0,
                    width: void 0,
                    height: void 0,
                    startX: void 0,
                    startY: void 0,
                    touchesStart: {},
                    touchesCurrent: {}
                },
                velocity: {
                    x: void 0,
                    y: void 0,
                    prevPositionX: void 0,
                    prevPositionY: void 0,
                    prevTime: void 0
                }
            };
            "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(i) {
                t[i] = F[i].bind(e)
            }),
            d.extend(e, {
                zoom: t
            })
        },
        on: {
            init: function() {
                this.params.zoom.enabled && this.zoom.enable()
            },
            destroy: function() {
                this.zoom.disable()
            },
            touchStart: function(e) {
                this.zoom.enabled && this.zoom.onTouchStart(e)
            },
            touchEnd: function(e) {
                this.zoom.enabled && this.zoom.onTouchEnd(e)
            },
            doubleTap: function(e) {
                this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e)
            },
            transitionEnd: function() {
                this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
            }
        }
    }, {
        name: "lazy",
        params: {
            lazy: {
                enabled: !1,
                loadPrevNext: !1,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: !1,
                elementClass: "swiper-lazy",
                loadingClass: "swiper-lazy-loading",
                loadedClass: "swiper-lazy-loaded",
                preloaderClass: "swiper-lazy-preloader"
            }
        },
        create: function() {
            d.extend(this, {
                lazy: {
                    initialImageLoaded: !1,
                    load: W.load.bind(this),
                    loadInSlide: W.loadInSlide.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
            },
            init: function() {
                this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
            },
            scroll: function() {
                this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
            },
            resize: function() {
                this.params.lazy.enabled && this.lazy.load()
            },
            scrollbarDragMove: function() {
                this.params.lazy.enabled && this.lazy.load()
            },
            transitionStart: function() {
                this.params.lazy.enabled && (this.params.lazy.loadOnTransitionStart || !this.params.lazy.loadOnTransitionStart && !this.lazy.initialImageLoaded) && this.lazy.load()
            },
            transitionEnd: function() {
                this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
            }
        }
    }, {
        name: "controller",
        params: {
            controller: {
                control: void 0,
                inverse: !1,
                by: "slide"
            }
        },
        create: function() {
            d.extend(this, {
                controller: {
                    control: this.params.controller.control,
                    getInterpolateFunction: q.getInterpolateFunction.bind(this),
                    setTranslate: q.setTranslate.bind(this),
                    setTransition: q.setTransition.bind(this)
                }
            })
        },
        on: {
            update: function() {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0,
                delete this.controller.spline)
            },
            resize: function() {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0,
                delete this.controller.spline)
            },
            observerUpdate: function() {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0,
                delete this.controller.spline)
            },
            setTranslate: function(e, t) {
                this.controller.control && this.controller.setTranslate(e, t)
            },
            setTransition: function(e, t) {
                this.controller.control && this.controller.setTransition(e, t)
            }
        }
    }, {
        name: "a11y",
        params: {
            a11y: {
                enabled: !0,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}"
            }
        },
        create: function() {
            var e = this;
            d.extend(e, {
                a11y: {
                    liveRegion: s('<span class="' + e.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
                }
            }),
            Object.keys(j).forEach(function(t) {
                e.a11y[t] = j[t].bind(e)
            })
        },
        on: {
            init: function() {
                this.params.a11y.enabled && (this.a11y.init(),
                this.a11y.updateNavigation())
            },
            toEdge: function() {
                this.params.a11y.enabled && this.a11y.updateNavigation()
            },
            fromEdge: function() {
                this.params.a11y.enabled && this.a11y.updateNavigation()
            },
            paginationUpdate: function() {
                this.params.a11y.enabled && this.a11y.updatePagination()
            },
            destroy: function() {
                this.params.a11y.enabled && this.a11y.destroy()
            }
        }
    }, {
        name: "history",
        params: {
            history: {
                enabled: !1,
                replaceState: !1,
                key: "slides"
            }
        },
        create: function() {
            d.extend(this, {
                history: {
                    init: K.init.bind(this),
                    setHistory: K.setHistory.bind(this),
                    setHistoryPopState: K.setHistoryPopState.bind(this),
                    scrollToSlide: K.scrollToSlide.bind(this),
                    destroy: K.destroy.bind(this)
                }
            })
        },
        on: {
            init: function() {
                this.params.history.enabled && this.history.init()
            },
            destroy: function() {
                this.params.history.enabled && this.history.destroy()
            },
            transitionEnd: function() {
                this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
            }
        }
    }, {
        name: "hash-navigation",
        params: {
            hashNavigation: {
                enabled: !1,
                replaceState: !1,
                watchState: !1
            }
        },
        create: function() {
            d.extend(this, {
                hashNavigation: {
                    initialized: !1,
                    init: U.init.bind(this),
                    destroy: U.destroy.bind(this),
                    setHash: U.setHash.bind(this),
                    onHashCange: U.onHashCange.bind(this)
                }
            })
        },
        on: {
            init: function() {
                this.params.hashNavigation.enabled && this.hashNavigation.init()
            },
            destroy: function() {
                this.params.hashNavigation.enabled && this.hashNavigation.destroy()
            },
            transitionEnd: function() {
                this.hashNavigation.initialized && this.hashNavigation.setHash()
            }
        }
    }, {
        name: "autoplay",
        params: {
            autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1
            }
        },
        create: function() {
            d.extend(this, {
                autoplay: {
                    running: !1,
                    paused: !1,
                    run: _.run.bind(this),
                    start: _.start.bind(this),
                    stop: _.stop.bind(this),
                    pause: _.pause.bind(this)
                }
            })
        },
        on: {
            init: function() {
                this.params.autoplay.enabled && this.autoplay.start()
            },
            beforeTransitionStart: function(e, t) {
                this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop())
            },
            sliderFirstMove: function() {
                this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
            },
            destroy: function() {
                this.autoplay.running && this.autoplay.stop()
            }
        }
    }, {
        name: "effect-fade",
        params: {
            fadeEffect: {
                crossFade: !1
            }
        },
        create: function() {
            d.extend(this, {
                fadeEffect: {
                    setTranslate: Z.setTranslate.bind(this),
                    setTransition: Z.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                if ("fade" === this.params.effect) {
                    this.classNames.push(this.params.containerModifierClass + "fade");
                    var e = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !0
                    };
                    d.extend(this.params, e),
                    d.extend(this.originalParams, e)
                }
            },
            setTranslate: function() {
                "fade" === this.params.effect && this.fadeEffect.setTranslate()
            },
            setTransition: function(e) {
                "fade" === this.params.effect && this.fadeEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-cube",
        params: {
            cubeEffect: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: .94
            }
        },
        create: function() {
            d.extend(this, {
                cubeEffect: {
                    setTranslate: Q.setTranslate.bind(this),
                    setTransition: Q.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                if ("cube" === this.params.effect) {
                    this.classNames.push(this.params.containerModifierClass + "cube"),
                    this.classNames.push(this.params.containerModifierClass + "3d");
                    var e = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        resistanceRatio: 0,
                        spaceBetween: 0,
                        centeredSlides: !1,
                        virtualTranslate: !0
                    };
                    d.extend(this.params, e),
                    d.extend(this.originalParams, e)
                }
            },
            setTranslate: function() {
                "cube" === this.params.effect && this.cubeEffect.setTranslate()
            },
            setTransition: function(e) {
                "cube" === this.params.effect && this.cubeEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-flip",
        params: {
            flipEffect: {
                slideShadows: !0,
                limitRotation: !0
            }
        },
        create: function() {
            d.extend(this, {
                flipEffect: {
                    setTranslate: J.setTranslate.bind(this),
                    setTransition: J.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                if ("flip" === this.params.effect) {
                    this.classNames.push(this.params.containerModifierClass + "flip"),
                    this.classNames.push(this.params.containerModifierClass + "3d");
                    var e = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !0
                    };
                    d.extend(this.params, e),
                    d.extend(this.originalParams, e)
                }
            },
            setTranslate: function() {
                "flip" === this.params.effect && this.flipEffect.setTranslate()
            },
            setTransition: function(e) {
                "flip" === this.params.effect && this.flipEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-coverflow",
        params: {
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: !0
            }
        },
        create: function() {
            d.extend(this, {
                coverflowEffect: {
                    setTranslate: ee.setTranslate.bind(this),
                    setTransition: ee.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                "coverflow" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "coverflow"),
                this.classNames.push(this.params.containerModifierClass + "3d"),
                this.params.watchSlidesProgress = !0,
                this.originalParams.watchSlidesProgress = !0)
            },
            setTranslate: function() {
                "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
            },
            setTransition: function(e) {
                "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
            }
        }
    }];
    return void 0 === P.use && (P.use = P.Class.use,
    P.installModule = P.Class.installModule),
    P.use(te),
    P
});
!function(a, b, c, d) {
    function e(b, c) {
        this.settings = null,
        this.options = a.extend({}, e.Defaults, c),
        this.$element = a(b),
        this._handlers = {},
        this._plugins = {},
        this._supress = {},
        this._current = null,
        this._speed = null,
        this._coordinates = [],
        this._breakpoint = null,
        this._width = null,
        this._items = [],
        this._clones = [],
        this._mergers = [],
        this._widths = [],
        this._invalidated = {},
        this._pipe = [],
        this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null
            },
            direction: null
        },
        this._states = {
            current: {},
            tags: {
                initializing: ["busy"],
                animating: ["busy"],
                dragging: ["interacting"]
            }
        },
        a.each(["onResize", "onThrottledResize"], a.proxy(function(b, c) {
            this._handlers[c] = a.proxy(this[c], this)
        }, this)),
        a.each(e.Plugins, a.proxy(function(a, b) {
            this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this)
        }, this)),
        a.each(e.Workers, a.proxy(function(b, c) {
            this._pipe.push({
                filter: c.filter,
                run: a.proxy(c.run, this)
            })
        }, this)),
        this.setup(),
        this.initialize()
    }
    e.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        checkVisibility: !0,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: b,
        fallbackEasing: "swing",
        slideTransition: "",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    },
    e.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    },
    e.Type = {
        Event: "event",
        State: "state"
    },
    e.Plugins = {},
    e.Workers = [{
        filter: ["width", "settings"],
        run: function() {
            this._width = this.$element.width()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            a.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            this.$stage.children(".cloned").remove()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            var b = this.settings.margin || ""
              , c = !this.settings.autoWidth
              , d = this.settings.rtl
              , e = {
                width: "auto",
                "margin-left": d ? b : "",
                "margin-right": d ? "" : b
            };
            !c && this.$stage.children().css(e),
            a.css = e
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin
              , c = null
              , d = this._items.length
              , e = !this.settings.autoWidth
              , f = [];
            for (a.items = {
                merge: !1,
                width: b
            }; d--; )
                c = this._mergers[d],
                c = this.settings.mergeFit && Math.min(c, this.settings.items) || c,
                a.items.merge = c > 1 || a.items.merge,
                f[d] = e ? b * c : this._items[d].width();
            this._widths = f
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var b = []
              , c = this._items
              , d = this.settings
              , e = Math.max(2 * d.items, 4)
              , f = 2 * Math.ceil(c.length / 2)
              , g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0
              , h = ""
              , i = "";
            for (g /= 2; g > 0; )
                b.push(this.normalize(b.length / 2, !0)),
                h += c[b[b.length - 1]][0].outerHTML,
                b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)),
                i = c[b[b.length - 1]][0].outerHTML + i,
                g -= 1;
            this._clones = b,
            a(h).addClass("cloned").appendTo(this.$stage),
            a(i).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b; )
                d = f[c - 1] || 0,
                e = this._widths[this.relative(c)] + this.settings.margin,
                f.push(d + e * a);
            this._coordinates = f
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var a = this.settings.stagePadding
              , b = this._coordinates
              , c = {
                width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
                "padding-left": a || "",
                "padding-right": a || ""
            };
            this.$stage.css(c)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            var b = this._coordinates.length
              , c = !this.settings.autoWidth
              , d = this.$stage.children();
            if (c && a.items.merge)
                for (; b--; )
                    a.css.width = this._widths[this.relative(b)],
                    d.eq(b).css(a.css);
            else
                c && (a.css.width = a.items.width,
                d.css(a.css))
        }
    }, {
        filter: ["items"],
        run: function() {
            this._coordinates.length < 1 && this.$stage.removeAttr("style")
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            a.current = a.current ? this.$stage.children().index(a.current) : 0,
            a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)),
            this.reset(a.current)
        }
    }, {
        filter: ["position"],
        run: function() {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            var a, b, c, d, e = this.settings.rtl ? 1 : -1, f = 2 * this.settings.stagePadding, g = this.coordinates(this.current()) + f, h = g + this.width() * e, i = [];
            for (c = 0,
            d = this._coordinates.length; c < d; c++)
                a = this._coordinates[c - 1] || 0,
                b = Math.abs(this._coordinates[c]) + f * e,
                (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
            this.$stage.children(".active").removeClass("active"),
            this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"),
            this.$stage.children(".center").removeClass("center"),
            this.settings.center && this.$stage.children().eq(this.current()).addClass("center")
        }
    }],
    e.prototype.initializeStage = function() {
        this.$stage = this.$element.find("." + this.settings.stageClass),
        this.$stage.length || (this.$element.addClass(this.options.loadingClass),
        this.$stage = a("<" + this.settings.stageElement + ">", {
            class: this.settings.stageClass
        }).wrap(a("<div/>", {
            class: this.settings.stageOuterClass
        })),
        this.$element.append(this.$stage.parent()))
    }
    ,
    e.prototype.initializeItems = function() {
        var b = this.$element.find(".owl-item");
        if (b.length)
            return this._items = b.get().map(function(b) {
                return a(b)
            }),
            this._mergers = this._items.map(function() {
                return 1
            }),
            void this.refresh();
        this.replace(this.$element.children().not(this.$stage.parent())),
        this.isVisible() ? this.refresh() : this.invalidate("width"),
        this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)
    }
    ,
    e.prototype.initialize = function() {
        if (this.enter("initializing"),
        this.trigger("initialize"),
        this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl),
        this.settings.autoWidth && !this.is("pre-loading")) {
            var a, b, c;
            a = this.$element.find("img"),
            b = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d,
            c = this.$element.children(b).width(),
            a.length && c <= 0 && this.preloadAutoWidthImages(a)
        }
        this.initializeStage(),
        this.initializeItems(),
        this.registerEventHandlers(),
        this.leave("initializing"),
        this.trigger("initialized")
    }
    ,
    e.prototype.isVisible = function() {
        return !this.settings.checkVisibility || this.$element.is(":visible")
    }
    ,
    e.prototype.setup = function() {
        var b = this.viewport()
          , c = this.options.responsive
          , d = -1
          , e = null;
        c ? (a.each(c, function(a) {
            a <= b && a > d && (d = Number(a))
        }),
        e = a.extend({}, this.options, c[d]),
        "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()),
        delete e.responsive,
        e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s","g"), "$1" + d))) : e = a.extend({}, this.options),
        this.trigger("change", {
            property: {
                name: "settings",
                value: e
            }
        }),
        this._breakpoint = d,
        this.settings = e,
        this.invalidate("settings"),
        this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        })
    }
    ,
    e.prototype.optionsLogic = function() {
        this.settings.autoWidth && (this.settings.stagePadding = !1,
        this.settings.merge = !1)
    }
    ,
    e.prototype.prepare = function(b) {
        var c = this.trigger("prepare", {
            content: b
        });
        return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)),
        this.trigger("prepared", {
            content: c.data
        }),
        c.data
    }
    ,
    e.prototype.update = function() {
        for (var b = 0, c = this._pipe.length, d = a.proxy(function(a) {
            return this[a]
        }, this._invalidated), e = {}; b < c; )
            (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e),
            b++;
        this._invalidated = {},
        !this.is("valid") && this.enter("valid")
    }
    ,
    e.prototype.width = function(a) {
        switch (a = a || e.Width.Default) {
        case e.Width.Inner:
        case e.Width.Outer:
            return this._width;
        default:
            return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }
    ,
    e.prototype.refresh = function() {
        this.enter("refreshing"),
        this.trigger("refresh"),
        this.setup(),
        this.optionsLogic(),
        this.$element.addClass(this.options.refreshClass),
        this.update(),
        this.$element.removeClass(this.options.refreshClass),
        this.leave("refreshing"),
        this.trigger("refreshed")
    }
    ,
    e.prototype.onThrottledResize = function() {
        b.clearTimeout(this.resizeTimer),
        this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    }
    ,
    e.prototype.onResize = function() {
        return !!this._items.length && (this._width !== this.$element.width() && (!!this.isVisible() && (this.enter("resizing"),
        this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"),
        !1) : (this.invalidate("width"),
        this.refresh(),
        this.leave("resizing"),
        void this.trigger("resized")))))
    }
    ,
    e.prototype.registerEventHandlers = function() {
        a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)),
        !1 !== this.settings.responsive && this.on(b, "resize", this._handlers.onThrottledResize),
        this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass),
        this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)),
        this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
            return !1
        })),
        this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)),
        this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)))
    }
    ,
    e.prototype.onDragStart = function(b) {
        var d = null;
        3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","),
        d = {
            x: d[16 === d.length ? 12 : 4],
            y: d[16 === d.length ? 13 : 5]
        }) : (d = this.$stage.position(),
        d = {
            x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left,
            y: d.top
        }),
        this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(),
        this.invalidate("position")),
        this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type),
        this.speed(0),
        this._drag.time = (new Date).getTime(),
        this._drag.target = a(b.target),
        this._drag.stage.start = d,
        this._drag.stage.current = d,
        this._drag.pointer = this.pointer(b),
        a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)),
        a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function(b) {
            var d = this.difference(this._drag.pointer, this.pointer(b));
            a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)),
            Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(),
            this.enter("dragging"),
            this.trigger("drag"))
        }, this)))
    }
    ,
    e.prototype.onDragMove = function(a) {
        var b = null
          , c = null
          , d = null
          , e = this.difference(this._drag.pointer, this.pointer(a))
          , f = this.difference(this._drag.stage.start, e);
        this.is("dragging") && (a.preventDefault(),
        this.settings.loop ? (b = this.coordinates(this.minimum()),
        c = this.coordinates(this.maximum() + 1) - b,
        f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()),
        c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()),
        d = this.settings.pullDrag ? -1 * e.x / 5 : 0,
        f.x = Math.max(Math.min(f.x, b + d), c + d)),
        this._drag.stage.current = f,
        this.animate(f.x))
    }
    ,
    e.prototype.onDragEnd = function(b) {
        var d = this.difference(this._drag.pointer, this.pointer(b))
          , e = this._drag.stage.current
          , f = d.x > 0 ^ this.settings.rtl ? "left" : "right";
        a(c).off(".owl.core"),
        this.$element.removeClass(this.options.grabClass),
        (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
        this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)),
        this.invalidate("position"),
        this.update(),
        this._drag.direction = f,
        (Math.abs(d.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() {
            return !1
        })),
        this.is("dragging") && (this.leave("dragging"),
        this.trigger("dragged"))
    }
    ,
    e.prototype.closest = function(b, c) {
        var e = -1
          , f = 30
          , g = this.width()
          , h = this.coordinates();
        return this.settings.freeDrag || a.each(h, a.proxy(function(a, i) {
            return "left" === c && b > i - f && b < i + f ? e = a : "right" === c && b > i - g - f && b < i - g + f ? e = a + 1 : this.op(b, "<", i) && this.op(b, ">", h[a + 1] !== d ? h[a + 1] : i - g) && (e = "left" === c ? a + 1 : a),
            -1 === e
        }, this)),
        this.settings.loop || (this.op(b, ">", h[this.minimum()]) ? e = b = this.minimum() : this.op(b, "<", h[this.maximum()]) && (e = b = this.maximum())),
        e
    }
    ,
    e.prototype.animate = function(b) {
        var c = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(),
        c && (this.enter("animating"),
        this.trigger("translate")),
        a.support.transform3d && a.support.transition ? this.$stage.css({
            transform: "translate3d(" + b + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "")
        }) : c ? this.$stage.animate({
            left: b + "px"
        }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({
            left: b + "px"
        })
    }
    ,
    e.prototype.is = function(a) {
        return this._states.current[a] && this._states.current[a] > 0
    }
    ,
    e.prototype.current = function(a) {
        if (a === d)
            return this._current;
        if (0 === this._items.length)
            return d;
        if (a = this.normalize(a),
        this._current !== a) {
            var b = this.trigger("change", {
                property: {
                    name: "position",
                    value: a
                }
            });
            b.data !== d && (a = this.normalize(b.data)),
            this._current = a,
            this.invalidate("position"),
            this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }
    ,
    e.prototype.invalidate = function(b) {
        return "string" === a.type(b) && (this._invalidated[b] = !0,
        this.is("valid") && this.leave("valid")),
        a.map(this._invalidated, function(a, b) {
            return b
        })
    }
    ,
    e.prototype.reset = function(a) {
        (a = this.normalize(a)) !== d && (this._speed = 0,
        this._current = a,
        this.suppress(["translate", "translated"]),
        this.animate(this.coordinates(a)),
        this.release(["translate", "translated"]))
    }
    ,
    e.prototype.normalize = function(a, b) {
        var c = this._items.length
          , e = b ? 0 : this._clones.length;
        return !this.isNumeric(a) || c < 1 ? a = d : (a < 0 || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2),
        a
    }
    ,
    e.prototype.relative = function(a) {
        return a -= this._clones.length / 2,
        this.normalize(a, !0)
    }
    ,
    e.prototype.maximum = function(a) {
        var b, c, d, e = this.settings, f = this._coordinates.length;
        if (e.loop)
            f = this._clones.length / 2 + this._items.length - 1;
        else if (e.autoWidth || e.merge) {
            if (b = this._items.length)
                for (c = this._items[--b].width(),
                d = this.$element.width(); b-- && !((c += this._items[b].width() + this.settings.margin) > d); )
                    ;
            f = b + 1
        } else
            f = e.center ? this._items.length - 1 : this._items.length - e.items;
        return a && (f -= this._clones.length / 2),
        Math.max(f, 0)
    }
    ,
    e.prototype.minimum = function(a) {
        return a ? 0 : this._clones.length / 2
    }
    ,
    e.prototype.items = function(a) {
        return a === d ? this._items.slice() : (a = this.normalize(a, !0),
        this._items[a])
    }
    ,
    e.prototype.mergers = function(a) {
        return a === d ? this._mergers.slice() : (a = this.normalize(a, !0),
        this._mergers[a])
    }
    ,
    e.prototype.clones = function(b) {
        var c = this._clones.length / 2
          , e = c + this._items.length
          , f = function(a) {
            return a % 2 == 0 ? e + a / 2 : c - (a + 1) / 2
        };
        return b === d ? a.map(this._clones, function(a, b) {
            return f(b)
        }) : a.map(this._clones, function(a, c) {
            return a === b ? f(c) : null
        })
    }
    ,
    e.prototype.speed = function(a) {
        return a !== d && (this._speed = a),
        this._speed
    }
    ,
    e.prototype.coordinates = function(b) {
        var c, e = 1, f = b - 1;
        return b === d ? a.map(this._coordinates, a.proxy(function(a, b) {
            return this.coordinates(b)
        }, this)) : (this.settings.center ? (this.settings.rtl && (e = -1,
        f = b + 1),
        c = this._coordinates[b],
        c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0,
        c = Math.ceil(c))
    }
    ,
    e.prototype.duration = function(a, b, c) {
        return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
    }
    ,
    e.prototype.to = function(a, b) {
        var c = this.current()
          , d = null
          , e = a - this.relative(c)
          , f = (e > 0) - (e < 0)
          , g = this._items.length
          , h = this.minimum()
          , i = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += -1 * f * g),
        a = c + e,
        (d = ((a - h) % g + g) % g + h) !== a && d - e <= i && d - e > 0 && (c = d - e,
        a = d,
        this.reset(c))) : this.settings.rewind ? (i += 1,
        a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)),
        this.speed(this.duration(c, a, b)),
        this.current(a),
        this.isVisible() && this.update()
    }
    ,
    e.prototype.next = function(a) {
        a = a || !1,
        this.to(this.relative(this.current()) + 1, a)
    }
    ,
    e.prototype.prev = function(a) {
        a = a || !1,
        this.to(this.relative(this.current()) - 1, a)
    }
    ,
    e.prototype.onTransitionEnd = function(a) {
        if (a !== d && (a.stopPropagation(),
        (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0)))
            return !1;
        this.leave("animating"),
        this.trigger("translated")
    }
    ,
    e.prototype.viewport = function() {
        var d;
        return this.options.responsiveBaseElement !== b ? d = a(this.options.responsiveBaseElement).width() : b.innerWidth ? d = b.innerWidth : c.documentElement && c.documentElement.clientWidth ? d = c.documentElement.clientWidth : console.warn("Can not detect viewport width."),
        d
    }
    ,
    e.prototype.replace = function(b) {
        this.$stage.empty(),
        this._items = [],
        b && (b = b instanceof jQuery ? b : a(b)),
        this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)),
        b.filter(function() {
            return 1 === this.nodeType
        }).each(a.proxy(function(a, b) {
            b = this.prepare(b),
            this.$stage.append(b),
            this._items.push(b),
            this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
        }, this)),
        this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0),
        this.invalidate("items")
    }
    ,
    e.prototype.add = function(b, c) {
        var e = this.relative(this._current);
        c = c === d ? this._items.length : this.normalize(c, !0),
        b = b instanceof jQuery ? b : a(b),
        this.trigger("add", {
            content: b,
            position: c
        }),
        b = this.prepare(b),
        0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b),
        0 !== this._items.length && this._items[c - 1].after(b),
        this._items.push(b),
        this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b),
        this._items.splice(c, 0, b),
        this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)),
        this._items[e] && this.reset(this._items[e].index()),
        this.invalidate("items"),
        this.trigger("added", {
            content: b,
            position: c
        })
    }
    ,
    e.prototype.remove = function(a) {
        (a = this.normalize(a, !0)) !== d && (this.trigger("remove", {
            content: this._items[a],
            position: a
        }),
        this._items[a].remove(),
        this._items.splice(a, 1),
        this._mergers.splice(a, 1),
        this.invalidate("items"),
        this.trigger("removed", {
            content: null,
            position: a
        }))
    }
    ,
    e.prototype.preloadAutoWidthImages = function(b) {
        b.each(a.proxy(function(b, c) {
            this.enter("pre-loading"),
            c = a(c),
            a(new Image).one("load", a.proxy(function(a) {
                c.attr("src", a.target.src),
                c.css("opacity", 1),
                this.leave("pre-loading"),
                !this.is("pre-loading") && !this.is("initializing") && this.refresh()
            }, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"))
        }, this))
    }
    ,
    e.prototype.destroy = function() {
        this.$element.off(".owl.core"),
        this.$stage.off(".owl.core"),
        a(c).off(".owl.core"),
        !1 !== this.settings.responsive && (b.clearTimeout(this.resizeTimer),
        this.off(b, "resize", this._handlers.onThrottledResize));
        for (var d in this._plugins)
            this._plugins[d].destroy();
        this.$stage.children(".cloned").remove(),
        this.$stage.unwrap(),
        this.$stage.children().contents().unwrap(),
        this.$stage.children().unwrap(),
        this.$stage.remove(),
        this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s","g"), "")).removeData("owl.carousel")
    }
    ,
    e.prototype.op = function(a, b, c) {
        var d = this.settings.rtl;
        switch (b) {
        case "<":
            return d ? a > c : a < c;
        case ">":
            return d ? a < c : a > c;
        case ">=":
            return d ? a <= c : a >= c;
        case "<=":
            return d ? a >= c : a <= c
        }
    }
    ,
    e.prototype.on = function(a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
    }
    ,
    e.prototype.off = function(a, b, c, d) {
        a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
    }
    ,
    e.prototype.trigger = function(b, c, d, f, g) {
        var h = {
            item: {
                count: this._items.length,
                index: this.current()
            }
        }
          , i = a.camelCase(a.grep(["on", b, d], function(a) {
            return a
        }).join("-").toLowerCase())
          , j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({
            relatedTarget: this
        }, h, c));
        return this._supress[b] || (a.each(this._plugins, function(a, b) {
            b.onTrigger && b.onTrigger(j)
        }),
        this.register({
            type: e.Type.Event,
            name: b
        }),
        this.$element.trigger(j),
        this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)),
        j
    }
    ,
    e.prototype.enter = function(b) {
        a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) {
            this._states.current[b] === d && (this._states.current[b] = 0),
            this._states.current[b]++
        }, this))
    }
    ,
    e.prototype.leave = function(b) {
        a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) {
            this._states.current[b]--
        }, this))
    }
    ,
    e.prototype.register = function(b) {
        if (b.type === e.Type.Event) {
            if (a.event.special[b.name] || (a.event.special[b.name] = {}),
            !a.event.special[b.name].owl) {
                var c = a.event.special[b.name]._default;
                a.event.special[b.name]._default = function(a) {
                    return !c || !c.apply || a.namespace && -1 !== a.namespace.indexOf("owl") ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments)
                }
                ,
                a.event.special[b.name].owl = !0
            }
        } else
            b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags,
            this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function(c, d) {
                return a.inArray(c, this._states.tags[b.name]) === d
            }, this)))
    }
    ,
    e.prototype.suppress = function(b) {
        a.each(b, a.proxy(function(a, b) {
            this._supress[b] = !0
        }, this))
    }
    ,
    e.prototype.release = function(b) {
        a.each(b, a.proxy(function(a, b) {
            delete this._supress[b]
        }, this))
    }
    ,
    e.prototype.pointer = function(a) {
        var c = {
            x: null,
            y: null
        };
        return a = a.originalEvent || a || b.event,
        a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a,
        a.pageX ? (c.x = a.pageX,
        c.y = a.pageY) : (c.x = a.clientX,
        c.y = a.clientY),
        c
    }
    ,
    e.prototype.isNumeric = function(a) {
        return !isNaN(parseFloat(a))
    }
    ,
    e.prototype.difference = function(a, b) {
        return {
            x: a.x - b.x,
            y: a.y - b.y
        }
    }
    ,
    a.fn.owlCarousel = function(b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
            var d = a(this)
              , f = d.data("owl.carousel");
            f || (f = new e(this,"object" == typeof b && b),
            d.data("owl.carousel", f),
            a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(b, c) {
                f.register({
                    type: e.Type.Event,
                    name: c
                }),
                f.$element.on(c + ".owl.carousel.core", a.proxy(function(a) {
                    a.namespace && a.relatedTarget !== this && (this.suppress([c]),
                    f[c].apply(this, [].slice.call(arguments, 1)),
                    this.release([c]))
                }, f))
            })),
            "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c)
        })
    }
    ,
    a.fn.owlCarousel.Constructor = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this._core = b,
        this._interval = null,
        this._visible = null,
        this._handlers = {
            "initialized.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.autoRefresh && this.watch()
            }, this)
        },
        this._core.options = a.extend({}, e.Defaults, this._core.options),
        this._core.$element.on(this._handlers)
    };
    e.Defaults = {
        autoRefresh: !0,
        autoRefreshInterval: 500
    },
    e.prototype.watch = function() {
        this._interval || (this._visible = this._core.isVisible(),
        this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
    }
    ,
    e.prototype.refresh = function() {
        this._core.isVisible() !== this._visible && (this._visible = !this._visible,
        this._core.$element.toggleClass("owl-hidden", !this._visible),
        this._visible && this._core.invalidate("width") && this._core.refresh())
    }
    ,
    e.prototype.destroy = function() {
        var a, c;
        b.clearInterval(this._interval);
        for (a in this._handlers)
            this._core.$element.off(a, this._handlers[a]);
        for (c in Object.getOwnPropertyNames(this))
            "function" != typeof this[c] && (this[c] = null)
    }
    ,
    a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this._core = b,
        this._loaded = [],
        this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function(b) {
                if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type)) {
                    var c = this._core.settings
                      , e = c.center && Math.ceil(c.items / 2) || c.items
                      , f = c.center && -1 * e || 0
                      , g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f
                      , h = this._core.clones().length
                      , i = a.proxy(function(a, b) {
                        this.load(b)
                    }, this);
                    for (c.lazyLoadEager > 0 && (e += c.lazyLoadEager,
                    c.loop && (g -= c.lazyLoadEager,
                    e++)); f++ < e; )
                        this.load(h / 2 + this._core.relative(g)),
                        h && a.each(this._core.clones(this._core.relative(g)), i),
                        g++
                }
            }, this)
        },
        this._core.options = a.extend({}, e.Defaults, this._core.options),
        this._core.$element.on(this._handlers)
    };
    e.Defaults = {
        lazyLoad: !1,
        lazyLoadEager: 0
    },
    e.prototype.load = function(c) {
        var d = this._core.$stage.children().eq(c)
          , e = d && d.find(".owl-lazy");
        !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function(c, d) {
            var e, f = a(d), g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src") || f.attr("data-srcset");
            this._core.trigger("load", {
                element: f,
                url: g
            }, "lazy"),
            f.is("img") ? f.one("load.owl.lazy", a.proxy(function() {
                f.css("opacity", 1),
                this._core.trigger("loaded", {
                    element: f,
                    url: g
                }, "lazy")
            }, this)).attr("src", g) : f.is("source") ? f.one("load.owl.lazy", a.proxy(function() {
                this._core.trigger("loaded", {
                    element: f,
                    url: g
                }, "lazy")
            }, this)).attr("srcset", g) : (e = new Image,
            e.onload = a.proxy(function() {
                f.css({
                    "background-image": 'url("' + g + '")',
                    opacity: "1"
                }),
                this._core.trigger("loaded", {
                    element: f,
                    url: g
                }, "lazy")
            }, this),
            e.src = g)
        }, this)),
        this._loaded.push(d.get(0)))
    }
    ,
    e.prototype.destroy = function() {
        var a, b;
        for (a in this.handlers)
            this._core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
            "function" != typeof this[b] && (this[b] = null)
    }
    ,
    a.fn.owlCarousel.Constructor.Plugins.Lazy = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(c) {
        this._core = c,
        this._previousHeight = null,
        this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.autoHeight && this.update()
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.autoHeight && "position" === a.property.name && this.update()
            }, this),
            "loaded.owl.lazy": a.proxy(function(a) {
                a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
            }, this)
        },
        this._core.options = a.extend({}, e.Defaults, this._core.options),
        this._core.$element.on(this._handlers),
        this._intervalId = null;
        var d = this;
        a(b).on("load", function() {
            d._core.settings.autoHeight && d.update()
        }),
        a(b).resize(function() {
            d._core.settings.autoHeight && (null != d._intervalId && clearTimeout(d._intervalId),
            d._intervalId = setTimeout(function() {
                d.update()
            }, 250))
        })
    };
    e.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    },
    e.prototype.update = function() {
        var b = this._core._current
          , c = b + this._core.settings.items
          , d = this._core.settings.lazyLoad
          , e = this._core.$stage.children().toArray().slice(b, c)
          , f = []
          , g = 0;
        a.each(e, function(b, c) {
            f.push(a(c).height())
        }),
        g = Math.max.apply(null, f),
        g <= 1 && d && this._previousHeight && (g = this._previousHeight),
        this._previousHeight = g,
        this._core.$stage.parent().height(g).addClass(this._core.settings.autoHeightClass)
    }
    ,
    e.prototype.destroy = function() {
        var a, b;
        for (a in this._handlers)
            this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
            "function" != typeof this[b] && (this[b] = null)
    }
    ,
    a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this._core = b,
        this._videos = {},
        this._playing = null,
        this._handlers = {
            "initialized.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.register({
                    type: "state",
                    name: "playing",
                    tags: ["interacting"]
                })
            }, this),
            "resize.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault()
            }, this),
            "refreshed.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && "position" === a.property.name && this._playing && this.stop()
            }, this),
            "prepared.owl.carousel": a.proxy(function(b) {
                if (b.namespace) {
                    var c = a(b.content).find(".owl-video");
                    c.length && (c.css("display", "none"),
                    this.fetch(c, a(b.content)))
                }
            }, this)
        },
        this._core.options = a.extend({}, e.Defaults, this._core.options),
        this._core.$element.on(this._handlers),
        this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function(a) {
            this.play(a)
        }, this))
    };
    e.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    },
    e.prototype.fetch = function(a, b) {
        var c = function() {
            return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube"
        }()
          , d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id")
          , e = a.attr("data-width") || this._core.settings.videoWidth
          , f = a.attr("data-height") || this._core.settings.videoHeight
          , g = a.attr("href");
        if (!g)
            throw new Error("Missing video URL.");
        if (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),
        d[3].indexOf("youtu") > -1)
            c = "youtube";
        else if (d[3].indexOf("vimeo") > -1)
            c = "vimeo";
        else {
            if (!(d[3].indexOf("vzaar") > -1))
                throw new Error("Video URL not supported.");
            c = "vzaar"
        }
        d = d[6],
        this._videos[g] = {
            type: c,
            id: d,
            width: e,
            height: f
        },
        b.attr("data-video", g),
        this.thumbnail(a, this._videos[g])
    }
    ,
    e.prototype.thumbnail = function(b, c) {
        var d, e, f, g = c.width && c.height ? "width:" + c.width + "px;height:" + c.height + "px;" : "", h = b.find("img"), i = "src", j = "", k = this._core.settings, l = function(c) {
            e = '<div class="owl-video-play-icon"></div>',
            d = k.lazyLoad ? a("<div/>", {
                class: "owl-video-tn " + j,
                srcType: c
            }) : a("<div/>", {
                class: "owl-video-tn",
                style: "opacity:1;background-image:url(" + c + ")"
            }),
            b.after(d),
            b.after(e)
        };
        if (b.wrap(a("<div/>", {
            class: "owl-video-wrapper",
            style: g
        })),
        this._core.settings.lazyLoad && (i = "data-src",
        j = "owl-lazy"),
        h.length)
            return l(h.attr(i)),
            h.remove(),
            !1;
        "youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg",
        l(f)) : "vimeo" === c.type ? a.ajax({
            type: "GET",
            url: "//vimeo.com/api/v2/video/" + c.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(a) {
                f = a[0].thumbnail_large,
                l(f)
            }
        }) : "vzaar" === c.type && a.ajax({
            type: "GET",
            url: "//vzaar.com/api/videos/" + c.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(a) {
                f = a.framegrab_url,
                l(f)
            }
        })
    }
    ,
    e.prototype.stop = function() {
        this._core.trigger("stop", null, "video"),
        this._playing.find(".owl-video-frame").remove(),
        this._playing.removeClass("owl-video-playing"),
        this._playing = null,
        this._core.leave("playing"),
        this._core.trigger("stopped", null, "video")
    }
    ,
    e.prototype.play = function(b) {
        var c, d = a(b.target), e = d.closest("." + this._core.settings.itemClass), f = this._videos[e.attr("data-video")], g = f.width || "100%", h = f.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"),
        this._core.trigger("play", null, "video"),
        e = this._core.items(this._core.relative(e.index())),
        this._core.reset(e.index()),
        c = a('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'),
        c.attr("height", h),
        c.attr("width", g),
        "youtube" === f.type ? c.attr("src", "//www.youtube.com/embed/" + f.id + "?autoplay=1&rel=0&v=" + f.id) : "vimeo" === f.type ? c.attr("src", "//player.vimeo.com/video/" + f.id + "?autoplay=1") : "vzaar" === f.type && c.attr("src", "//view.vzaar.com/" + f.id + "/player?autoplay=true"),
        a(c).wrap('<div class="owl-video-frame" />').insertAfter(e.find(".owl-video")),
        this._playing = e.addClass("owl-video-playing"))
    }
    ,
    e.prototype.isInFullScreen = function() {
        var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
        return b && a(b).parent().hasClass("owl-video-frame")
    }
    ,
    e.prototype.destroy = function() {
        var a, b;
        this._core.$element.off("click.owl.video");
        for (a in this._handlers)
            this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
            "function" != typeof this[b] && (this[b] = null)
    }
    ,
    a.fn.owlCarousel.Constructor.Plugins.Video = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this.core = b,
        this.core.options = a.extend({}, e.Defaults, this.core.options),
        this.swapping = !0,
        this.previous = d,
        this.next = d,
        this.handlers = {
            "change.owl.carousel": a.proxy(function(a) {
                a.namespace && "position" == a.property.name && (this.previous = this.core.current(),
                this.next = a.property.value)
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function(a) {
                a.namespace && (this.swapping = "translated" == a.type)
            }, this),
            "translate.owl.carousel": a.proxy(function(a) {
                a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        },
        this.core.$element.on(this.handlers)
    };
    e.Defaults = {
        animateOut: !1,
        animateIn: !1
    },
    e.prototype.swap = function() {
        if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
            this.core.speed(0);
            var b, c = a.proxy(this.clear, this), d = this.core.$stage.children().eq(this.previous), e = this.core.$stage.children().eq(this.next), f = this.core.settings.animateIn, g = this.core.settings.animateOut;
            this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next),
            d.one(a.support.animation.end, c).css({
                left: b + "px"
            }).addClass("animated owl-animated-out").addClass(g)),
            f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f))
        }
    }
    ,
    e.prototype.clear = function(b) {
        a(b.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),
        this.core.onTransitionEnd()
    }
    ,
    e.prototype.destroy = function() {
        var a, b;
        for (a in this.handlers)
            this.core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
            "function" != typeof this[b] && (this[b] = null)
    }
    ,
    a.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this._core = b,
        this._call = null,
        this._time = 0,
        this._timeout = 0,
        this._paused = !0,
        this._handlers = {
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._paused && (this._time = 0)
            }, this),
            "initialized.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.autoplay && this.play()
            }, this),
            "play.owl.autoplay": a.proxy(function(a, b, c) {
                a.namespace && this.play(b, c)
            }, this),
            "stop.owl.autoplay": a.proxy(function(a) {
                a.namespace && this.stop()
            }, this),
            "mouseover.owl.autoplay": a.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "mouseleave.owl.autoplay": a.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
            }, this),
            "touchstart.owl.core": a.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "touchend.owl.core": a.proxy(function() {
                this._core.settings.autoplayHoverPause && this.play()
            }, this)
        },
        this._core.$element.on(this._handlers),
        this._core.options = a.extend({}, e.Defaults, this._core.options)
    };
    e.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    },
    e.prototype._next = function(d) {
        this._call = b.setTimeout(a.proxy(this._next, this, d), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()),
        this._core.is("interacting") || c.hidden || this._core.next(d || this._core.settings.autoplaySpeed)
    }
    ,
    e.prototype.read = function() {
        return (new Date).getTime() - this._time
    }
    ,
    e.prototype.play = function(c, d) {
        var e;
        this._core.is("rotating") || this._core.enter("rotating"),
        c = c || this._core.settings.autoplayTimeout,
        e = Math.min(this._time % (this._timeout || c), c),
        this._paused ? (this._time = this.read(),
        this._paused = !1) : b.clearTimeout(this._call),
        this._time += this.read() % c - e,
        this._timeout = c,
        this._call = b.setTimeout(a.proxy(this._next, this, d), c - e)
    }
    ,
    e.prototype.stop = function() {
        this._core.is("rotating") && (this._time = 0,
        this._paused = !0,
        b.clearTimeout(this._call),
        this._core.leave("rotating"))
    }
    ,
    e.prototype.pause = function() {
        this._core.is("rotating") && !this._paused && (this._time = this.read(),
        this._paused = !0,
        b.clearTimeout(this._call))
    }
    ,
    e.prototype.destroy = function() {
        var a, b;
        this.stop();
        for (a in this._handlers)
            this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
            "function" != typeof this[b] && (this[b] = null)
    }
    ,
    a.fn.owlCarousel.Constructor.Plugins.autoplay = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    "use strict";
    var e = function(b) {
        this._core = b,
        this._initialized = !1,
        this._pages = [],
        this._controls = {},
        this._templates = [],
        this.$element = this._core.$element,
        this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        },
        this._handlers = {
            "prepared.owl.carousel": a.proxy(function(b) {
                b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
            }, this),
            "added.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop())
            }, this),
            "remove.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1)
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && "position" == a.property.name && this.draw()
            }, this),
            "initialized.owl.carousel": a.proxy(function(a) {
                a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"),
                this.initialize(),
                this.update(),
                this.draw(),
                this._initialized = !0,
                this._core.trigger("initialized", null, "navigation"))
            }, this),
            "refreshed.owl.carousel": a.proxy(function(a) {
                a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"),
                this.update(),
                this.draw(),
                this._core.trigger("refreshed", null, "navigation"))
            }, this)
        },
        this._core.options = a.extend({}, e.Defaults, this._core.options),
        this.$element.on(this._handlers)
    };
    e.Defaults = {
        nav: !1,
        navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
        navSpeed: !1,
        navElement: 'button type="button" role="presentation"',
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotsData: !1,
        dotsSpeed: !1,
        dotsContainer: !1
    },
    e.prototype.initialize = function() {
        var b, c = this._core.settings;
        this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"),
        this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function(a) {
            this.prev(c.navSpeed)
        }, this)),
        this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function(a) {
            this.next(c.navSpeed)
        }, this)),
        c.dotsData || (this._templates = [a('<button role="button">').addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]),
        this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"),
        this._controls.$absolute.on("click", "button", a.proxy(function(b) {
            var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
            b.preventDefault(),
            this.to(d, c.dotsSpeed)
        }, this));
        for (b in this._overrides)
            this._core[b] = a.proxy(this[b], this)
    }
    ,
    e.prototype.destroy = function() {
        var a, b, c, d, e;
        e = this._core.settings;
        for (a in this._handlers)
            this.$element.off(a, this._handlers[a]);
        for (b in this._controls)
            "$relative" === b && e.navContainer ? this._controls[b].html("") : this._controls[b].remove();
        for (d in this.overides)
            this._core[d] = this._overrides[d];
        for (c in Object.getOwnPropertyNames(this))
            "function" != typeof this[c] && (this[c] = null)
    }
    ,
    e.prototype.update = function() {
        var a, b, c, d = this._core.clones().length / 2, e = d + this._core.items().length, f = this._core.maximum(!0), g = this._core.settings, h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
        if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)),
        g.dots || "page" == g.slideBy)
            for (this._pages = [],
            a = d,
            b = 0,
            c = 0; a < e; a++) {
                if (b >= h || 0 === b) {
                    if (this._pages.push({
                        start: Math.min(f, a - d),
                        end: a - d + h - 1
                    }),
                    Math.min(f, a - d) === f)
                        break;
                    b = 0,
                    ++c
                }
                b += this._core.mergers(this._core.relative(a))
            }
    }
    ,
    e.prototype.draw = function() {
        var b, c = this._core.settings, d = this._core.items().length <= c.items, e = this._core.relative(this._core.current()), f = c.loop || c.rewind;
        this._controls.$relative.toggleClass("disabled", !c.nav || d),
        c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)),
        this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))),
        this._controls.$absolute.toggleClass("disabled", !c.dots || d),
        c.dots && (b = this._pages.length - this._controls.$absolute.children().length,
        c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : b < 0 && this._controls.$absolute.children().slice(b).remove(),
        this._controls.$absolute.find(".active").removeClass("active"),
        this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"))
    }
    ,
    e.prototype.onTrigger = function(b) {
        var c = this._core.settings;
        b.page = {
            index: a.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items)
        }
    }
    ,
    e.prototype.current = function() {
        var b = this._core.relative(this._core.current());
        return a.grep(this._pages, a.proxy(function(a, c) {
            return a.start <= b && a.end >= b
        }, this)).pop()
    }
    ,
    e.prototype.getPosition = function(b) {
        var c, d, e = this._core.settings;
        return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages),
        d = this._pages.length,
        b ? ++c : --c,
        c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()),
        d = this._core.items().length,
        b ? c += e.slideBy : c -= e.slideBy),
        c
    }
    ,
    e.prototype.next = function(b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
    }
    ,
    e.prototype.prev = function(b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
    }
    ,
    e.prototype.to = function(b, c, d) {
        var e;
        !d && this._pages.length ? (e = this._pages.length,
        a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c)
    }
    ,
    a.fn.owlCarousel.Constructor.Plugins.Navigation = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    "use strict";
    var e = function(c) {
        this._core = c,
        this._hashes = {},
        this.$element = this._core.$element,
        this._handlers = {
            "initialized.owl.carousel": a.proxy(function(c) {
                c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
            }, this),
            "prepared.owl.carousel": a.proxy(function(b) {
                if (b.namespace) {
                    var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                    if (!c)
                        return;
                    this._hashes[c] = b.content
                }
            }, this),
            "changed.owl.carousel": a.proxy(function(c) {
                if (c.namespace && "position" === c.property.name) {
                    var d = this._core.items(this._core.relative(this._core.current()))
                      , e = a.map(this._hashes, function(a, b) {
                        return a === d ? b : null
                    }).join();
                    if (!e || b.location.hash.slice(1) === e)
                        return;
                    b.location.hash = e
                }
            }, this)
        },
        this._core.options = a.extend({}, e.Defaults, this._core.options),
        this.$element.on(this._handlers),
        a(b).on("hashchange.owl.navigation", a.proxy(function(a) {
            var c = b.location.hash.substring(1)
              , e = this._core.$stage.children()
              , f = this._hashes[c] && e.index(this._hashes[c]);
            f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0)
        }, this))
    };
    e.Defaults = {
        URLhashListener: !1
    },
    e.prototype.destroy = function() {
        var c, d;
        a(b).off("hashchange.owl.navigation");
        for (c in this._handlers)
            this._core.$element.off(c, this._handlers[c]);
        for (d in Object.getOwnPropertyNames(this))
            "function" != typeof this[d] && (this[d] = null)
    }
    ,
    a.fn.owlCarousel.Constructor.Plugins.Hash = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    function e(b, c) {
        var e = !1
          , f = b.charAt(0).toUpperCase() + b.slice(1);
        return a.each((b + " " + h.join(f + " ") + f).split(" "), function(a, b) {
            if (g[b] !== d)
                return e = !c || b,
                !1
        }),
        e
    }
    function f(a) {
        return e(a, !0)
    }
    var g = a("<support>").get(0).style
      , h = "Webkit Moz O ms".split(" ")
      , i = {
        transition: {
            end: {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd",
                transition: "transitionend"
            }
        },
        animation: {
            end: {
                WebkitAnimation: "webkitAnimationEnd",
                MozAnimation: "animationend",
                OAnimation: "oAnimationEnd",
                animation: "animationend"
            }
        }
    }
      , j = {
        csstransforms: function() {
            return !!e("transform")
        },
        csstransforms3d: function() {
            return !!e("perspective")
        },
        csstransitions: function() {
            return !!e("transition")
        },
        cssanimations: function() {
            return !!e("animation")
        }
    };
    j.csstransitions() && (a.support.transition = new String(f("transition")),
    a.support.transition.end = i.transition.end[a.support.transition]),
    j.cssanimations() && (a.support.animation = new String(f("animation")),
    a.support.animation.end = i.animation.end[a.support.animation]),
    j.csstransforms() && (a.support.transform = new String(f("transform")),
    a.support.transform3d = j.csstransforms3d())
}(window.Zepto || window.jQuery, window, document);
function shMod() {}
function wordpressChangeImageSize(imgSelector, newSize) {
    $(imgSelector).each(function() {
        var imgArr = $(this).attr('src').split('-');
        var newImg = '';
        var postfix = imgArr[imgArr.length - 1].split('.');
        postfix[0] = newSize;
        imgArr[imgArr.length - 1] = postfix.join('.');
        newImg = imgArr.join('-');
        $(this).attr('src', newImg);
    });
}
function centralizeBlock(selector, type) {
    var current = $(selector);
    var currentWidth = current.outerWidth();
    var parentWidth = current.parent().width();
    current.css(type ? 'left' : 'margin-left', parentWidth / 2 - currentWidth / 2 + 'px');
}
function centralizeVertBlock(selector, type) {
    var current = $(selector);
    var currentHeight = current.outerHeight();
    var parentHeight = current.parent().height();
    current.css(type ? 'top' : 'margin-top', parentHeight / 2 - currentHeight / 2 + 'px');
}
function heightByParentPalitra() {
    setTimeout(function() {
        $('.palitra-slider__arrow-cont').height($('.palitra-container').height());
        $('.palitra-container img:last').load(function() {
            $('.palitra-slider__arrow-cont').height($('.palitra-container').height());
        })
    }, 2000);
}
function heightByParentProject() {
    $('.report-slider__arrow-cont').height($('.project-container .owl-stage-outer').outerHeight());
}
function heightByParentSale() {
    $('.sale-slider img:last').load(function() {
        $('.sale-slider__arrow-cont').height($('.sale-slider .sale-slider_item').outerHeight());
    })
    $('.sale-slider__arrow-cont').height($('.sale-slider .sale-slider_item').outerHeight());
}
function addTabs() {
    $('.super-tab .tab-header').click(function() {
        var tabContent = $(this).parent().find('.tab-content');
        var mainTab = $(this);
        if (tabContent.parent().hasClass('active')) {
            tabContent.slideUp('300', function() {
                mainTab.parent().removeClass('active');
            });
        } else {
            tabContent.slideDown('300');
            mainTab.parent().addClass('active');
        }
    });
}
$(function() {
    if ($('.project-title').length) {
        $('#measurement-project').val($('.project-title').html());
    }
    window.currentPage = 1;
    $('[data-page-current]').on('click', function() {
        var self = $(this);
        var total = self.data('page-total');
        var href = self.data('page-url');
        var facade = self.data('facade');
        self.prop('disabled', true);
        currentPage += 1;
        $.ajax({
            url: '/' + href + '/page/' + currentPage + '/',
            type: 'GET',
            success: function(html) {
                var body = $('#' + href, html).html();
                $('#' + href).append(body);
                self.prop('disabled', false);
                if (href == 'projects') {
                    if (currentPage == total) {
                        $('.tk-section-buttons .tk-btn.tk-btn-style5').remove();
                    }
                } else {
                    if (currentPage == total) {
                        $('.tk-section-buttons').remove();
                    }
                }
                if (facade) {
                    if (currentPage == '2') {
                        self.next().removeClass('hidden');
                        self.remove();
                    }
                }
            }
        });
    });
    $('[data-toggle="menu"]').on('click', function() {
        $('html').toggleClass('menu-open');
    });
    if ($('.js-slider_products').length) {
        productsSlider = new Swiper('.js-slider_products .swiper-container',{
            navigation: {
                nextEl: '.js-slider_products .swiper-button-next',
                prevEl: '.js-slider_products .swiper-button-prev',
            },
            loop: true,
            slidesPerView: 4,
            spaceBetween: 25,
            breakpoints: {
                1249: {
                    slidesPerView: 2,
                },
                639: {
                    slidesPerView: 1,
                }
            },
        });
    }
    if ($('.js-slider_pride').length) {
        prideGallery = new Swiper('.js-slider_pride .swiper-container',{
            navigation: {
                nextEl: '.js-slider_pride-thumb .swiper-button-next',
                prevEl: '.js-slider_pride-thumb .swiper-button-prev',
            },
            loop: true,
            simulateTouch: false,
        });
        prideThumbs = new Swiper('.js-slider_pride-thumb .swiper-container',{
            loop: true,
            simulateTouch: false,
        });
        prideGallery.on('slideChange', function() {
            var index = prideGallery.activeIndex;
            prideThumbs.slideTo(index);
        });
    }
    var projectGalleryBig = new Swiper('.js-projectGalleryBig .swiper-container',{
        loop: false,
        navigation: {
            nextEl: '.js-projectGalleryBig .swiper-button-next',
            prevEl: '.js-projectGalleryBig .swiper-button-prev',
        },
    });
    var projectGalleryThumb = new Swiper('.js-projectGalleryThumb .swiper-container',{
        loop: false,
        navigation: {
            nextEl: '.js-projectGalleryThumb .swiper-button-next',
            prevEl: '.js-projectGalleryThumb .swiper-button-prev',
        },
        simulateTouch: false,
        touchRatio: .5,
        slidesPerView: 5,
        spaceBetween: 20,
        breakpoints: {
            479: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            639: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            767: {
                slidesPerView: 4,
                spaceBetween: 20
            },
            1023: {
                slidesPerView: 5,
                spaceBetween: 20
            },
            1249: {
                slidesPerView: 4,
                spaceBetween: 20
            },
        },
    });
    projectGalleryBig.on('slideChange', function() {
        $('.js-projectGalleryThumb .swiper-slide').removeClass('active');
        $('.js-projectGalleryThumb .swiper-slide').eq(projectGalleryBig.activeIndex).addClass('active');
        projectGalleryThumb.slideTo(projectGalleryBig.activeIndex);
    });
    var projectGallery = {
        change: function(index) {
            $(".js-projectGalleryThumb .swiper-slide.active").removeClass('active');
            $(".js-projectGalleryThumb .swiper-slide").eq(index).addClass('active');
        }
    }
    $(".js-projectGalleryThumb .swiper-slide").eq(0).addClass('active');
    $(document).on('click', '.js-projectGalleryThumb .swiper-slide:not(".active")', function(event) {
        var index = $(this).index();
        projectGalleryThumb.slideTo(index);
        projectGalleryBig.slideTo(index);
        projectGallery.change(index);
    });
    $('.js-projectGalleryBig [data-fancybox="gallery"]').fancybox({
        beforeShow: function(instance) {
            var index = instance.currIndex;
            projectGalleryThumb.slideTo(index);
            projectGalleryBig.slideTo(index);
            projectGallery.change(index);
        }
    });
    new Swiper('.js-facade_include .swiper-container',{
        loop: true,
        navigation: {
            nextEl: '.js-facade_include .swiper-button-next',
            prevEl: '.js-facade_include .swiper-button-prev',
        },
    });
    new Swiper('.js-facade_slider .swiper-container',{
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        navigation: {
            nextEl: '.js-facade_slider .swiper-button-next',
            prevEl: '.js-facade_slider .swiper-button-prev',
        },
    });
    var facadeGalleryBig = new Swiper('.js-facadeGalleryBig .swiper-container',{
        loop: false,
        simulateTouch: false,
    });
    var facadeGalleryThumb = new Swiper('.js-facadeGalleryThumb .swiper-container',{
        loop: true,
        simulateTouch: false,
        touchRatio: .5,
        slidesPerView: 4,
        spaceBetween: 0,
        breakpoints: {
            480: {
                slidesPerView: 2
            },
            639: {
                slidesPerView: 3
            },
            1249: {
                slidesPerView: 4
            },
        },
        navigation: {
            nextEl: '.js-facadeGallery-next',
            prevEl: '.js-facadeGallery-prev',
        },
    });
    new Swiper('.js-main_slider-1 .swiper-container',{
        loop: true,
        navigation: {
            nextEl: '.js-main_slider-1 .swiper-button-next',
            prevEl: '.js-main_slider-1 .swiper-button-prev',
        },
    });
    new Swiper('.js-main_slider-1 .swiper-container',{
        loop: true,
        navigation: {
            nextEl: '.js-main_slider-1 .swiper-button-next',
            prevEl: '.js-main_slider-1 .swiper-button-prev',
        },
    });
    new Swiper('.js-slider_montaj .swiper-container',{
        loop: true,
        navigation: {
            nextEl: '.js-slider_montaj .swiper-button-next',
            prevEl: '.js-slider_montaj .swiper-button-prev',
        },
        breakpoints: {
            639: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            1023: {
                slidesPerView: 2,
                spaceBetween: 20
            }
        },
    });
    new Swiper('.article-slider-1 .swiper-container',{
        loop: true,
        navigation: {
            nextEl: '.article-slider-1 .swiper-button-next',
            prevEl: '.article-slider-1 .swiper-button-prev',
        },
    });
    new Swiper('.js-main_slider-2 .swiper-container',{
        loop: true,
        navigation: {
            nextEl: '.js-main_slider-2 .swiper-button-next',
            prevEl: '.js-main_slider-2 .swiper-button-prev',
        },
    });
    new Swiper('.js-main_slider-3 .swiper-container',{
        loop: true,
        navigation: {
            nextEl: '.js-main_slider-3 .swiper-button-next',
            prevEl: '.js-main_slider-3 .swiper-button-prev',
        },
    });
    new Swiper('.js-main_slider-4 .swiper-container',{
        slidesPerView: 3,
        spaceBetween: 15,
        loop: true,
        navigation: {
            nextEl: '.js-main_slider-4 .swiper-button-next',
            prevEl: '.js-main_slider-4 .swiper-button-prev',
        },
        breakpoints: {
            992: {
                slidesPerView: 2,
                spaceBetween: 0
            },
            639: {
                slidesPerView: 1,
                spaceBetween: 0
            }
        },
    });
    new Swiper('.js-main_slider-5>.swiper-container',{
        slidesPerView: 3,
        spaceBetween: 1,
        loop: true,
        breakpoints: {
            1023: {
                slidesPerView: 1,
                spaceBetween: 0
            }
        },
        allowSwipeToNext: false,
        allowSwipeToPrev: false,
        simulateTouch: false,
        navigation: {
            nextEl: '.js-main_slider-5>.swiper-button-next',
            prevEl: '.js-main_slider-5>.swiper-button-prev',
        },
    });
    new Swiper('.js-slider_main .swiper-container',{
        effect: 'fade',
        loop: true,
        navigation: {
            nextEl: '.js-slider_main .swiper-button-next',
            prevEl: '.js-slider_main .swiper-button-prev',
        },
    });
    slider_1 = new Swiper('.slider_1 .swiper-container',{
        loop: false,
        simulateTouch: false,
        navigation: {
            nextEl: '.slider_1 .swiper-button-next',
            prevEl: '.slider_1 .swiper-button-prev',
        },
        slidesPerView: 1,
    });
    slider_3 = new Swiper('.slider_3 .swiper-container',{
        loop: true,
        navigation: {
            nextEl: '.slider_3 .swiper-button-next',
            prevEl: '.slider_3 .swiper-button-prev',
        },
        pagination: {
            el: '.slider_3 .swiper-pagination',
            clickable: true,
        },
        autoHeight: true,
        slidesPerView: 1,
        breakpoints: {
            639: {
                spaceBetween: 20,
            },
        }
    });
    slider_5 = new Swiper('.slider_5 .swiper-container',{
        loop: false,
        simulateTouch: false,
        navigation: {
            nextEl: '.slider_5 .swiper-button-next',
            prevEl: '.slider_5 .swiper-button-prev',
        },
        pagination: {
            el: '.slider_5 .swiper-pagination',
            clickable: true,
        },
        slidesPerView: 3,
        spaceBetween: 30,
        breakpoints: {
            639: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            1023: {
                slidesPerView: 2
            }
        }
    });
    slider_6 = new Swiper('.slider_6 .swiper-container',{
        loop: false,
        simulateTouch: false,
        navigation: {
            nextEl: '.slider_6 .swiper-button-next',
            prevEl: '.slider_6 .swiper-button-prev',
        },
        pagination: {
            el: '.slider_6 .swiper-pagination',
            clickable: true,
        },
        slidesPerView: 3,
        spaceBetween: 30,
        breakpoints: {
            639: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            1023: {
                slidesPerView: 2
            }
        }
    });
    slider_7 = new Swiper('.slider_7 .swiper-container',{
        loop: true,
        simulateTouch: false,
        navigation: {
            nextEl: '.slider_7 .swiper-button-next',
            prevEl: '.slider_7 .swiper-button-prev',
        },
        pagination: {
            el: '.slider_7 .swiper-pagination',
            clickable: true,
        },
        slidesPerView: 3,
        spaceBetween: 30,
        breakpoints: {
            639: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            1023: {
                slidesPerView: 2
            }
        },
        autoHeight: true,
    });
    slider_8 = new Swiper('.slider_8 .swiper-container',{
        loop: false,
        pagination: {
            el: '.slider_8 .swiper-pagination',
            clickable: true,
        },
    });
    new Swiper('.js-articles-catalog .swiper-container',{
        loop: true,
        simulateTouch: false,
        navigation: {
            nextEl: '.js-articles-catalog .swiper-button-next',
            prevEl: '.js-articles-catalog .swiper-button-prev',
        },
        slidesPerView: 4,
        spaceBetween: 30,
        breakpoints: {
            639: {
                slidesPerView: 1
            },
            1023: {
                slidesPerView: 2
            },
            1249: {
                slidesPerView: 3,
                spaceBetween: 20
            }
        }
    });
    new Swiper('.js-single_products .swiper-container',{
        loop: true,
        simulateTouch: false,
        navigation: {
            nextEl: '.js-single_products .swiper-button-next',
            prevEl: '.js-single_products .swiper-button-prev',
        },
        slidesPerView: 3,
        spaceBetween: 20,
        breakpoints: {
            639: {
                slidesPerView: 1
            },
            1023: {
                slidesPerView: 2
            },
        }
    });
    new Swiper('.article-portfolio .swiper-container',{
        loop: true,
        simulateTouch: false,
        navigation: {
            nextEl: '.article-portfolio .swiper-button-next',
            prevEl: '.article-portfolio .swiper-button-prev',
        },
        slidesPerView: 4,
        spaceBetween: 30,
        breakpoints: {
            639: {
                slidesPerView: 1
            },
            1023: {
                slidesPerView: 2
            },
            1249: {
                slidesPerView: 3,
                spaceBetween: 20
            }
        }
    });
    var $form = $('form');
    $(document).on('afterClose.fb', function(e, instance, slide) {
        var $fbForm = $('.tk-modal form.wpcf7-form');
        $fbForm.trigger('reset');
        $fbForm.find('input,textarea').removeClass('wpcf7-not-valid');
        $('form.wpcf7-form').find('.input-container').removeClass('focus');
        $fbForm.find('.wpcf7-response-output').hide().html('');
        $fbForm.find('.wpcf7-not-valid-tip').html('');
        if ($fbForm.find('.wpcf7-acceptance').is('check')) {
            $fbForm.find('.wpcf7-submit').prop('disabled', true);
        }
    });
    $(document).on('beforeShow.fb', function(e, instance, slide) {
        var $self = slide.opts.$orig;
        var $modalID = instance.current.src;
        if ($modalID == '#order-form') {
            var $formName = $self.data('form-name');
            $('#order-form').find('.tk-modal-title').text($formName);
            $('input[name="order-subject"]').val($formName);
        }
    });
    document.addEventListener('wpcf7mailsent', function() {
        $.fancybox.close();
        $.fancybox.open({
            src: '#form-success',
            type: 'inline',
            opts: {
                modal: true
            },
        });
    }, false);
    $('.mask-phone').mask('+7 (999) 999-99-99', {
        autoclear: false
    });
    TextareaGrow.init($('textarea'));
    formInput.update($form);
    //menu.fixed();
    $('.montaj-gallery .images-list img').click(function() {
        if ($(this).is(':not(.active)')) {
            $(this).parent().find('img').removeClass('active');
            $(this).addClass('active');
            $('.montaj-gallery .main-img img').attr('src', $(this).data('full'));
        }
    });
    $(window).resize(function() {
        heightByParentSale()
        centralizeVertBlock('.product-palitra__item-info .item-title', 0);
    });
    $('.fancybox-img').fancybox({
        height: '100%',
        scrolling: 'no'
    });
    addTabs();
    heightByParentPalitra();
    heightByParentProject();
    heightByParentSale();
    if ($("#owl-demo").length) {
        $("#owl-demo").owlCarousel({
            items: 1,
            navText: ["<span class='glyphicon glyphicon-chevron-left'></span>", "<span class='glyphicon glyphicon-chevron-right'></span>"],
            dots: true,
            loop: true,
            nav: true,
            smartSpeed: 600,
            autoplaySpeed: 600,
            autoplay: true,
            autoplayTimeout: 5000,
            responsive: {
                0: {
                    items: 1,
                    navText: ["<span class='glyphicon glyphicon-chevron-left'></span>", "<span class='glyphicon glyphicon-chevron-right'></span>"],
                    dots: false,
                    loop: true,
                    nav: true,
                },
                1199: {
                    items: 1,
                    navText: ["<span class='glyphicon glyphicon-chevron-left'></span>", "<span class='glyphicon glyphicon-chevron-right'></span>"],
                    dots: true,
                    loop: true,
                    nav: true,
                },
            }
        });
    }
    $('.form-style-2 .file-upload').click(function() {
        var parent = $(this).parents('form');
        parent.find('.pj-file input').click()
    });
    $('.form-style-2 .btn-style-2').click(function() {
        var parent = $(this).parents('form');
        parent.find('input[type="submit"]').click()
    });
    $('.form-style-2 .pj-file input').change(function() {
        var par = $(this).parents('form');
        var fileOriginal = $(this).val();
        var file = fileOriginal.split('\\').pop();
        par.find('.file-upload input').val(file);
    });
    var sliders = [];
    $(".slider-s1 .slider").each(function(i, e) {
        sliders[i] = $(this);
        sliders[i].on('initialized.owl.carousel', function(event) {
            var wrapper = $(this).parents('.slider-wrapper');
            wrapper.find('.arr-left').click(function() {
                sliders[i].trigger('prev.owl.carousel');
            });
            wrapper.find('.arr-right').click(function() {
                sliders[i].trigger('next.owl.carousel');
            });
        })
        sliders[i].owlCarousel({
            items: 1,
            dots: false,
            loop: true,
            nav: false,
            autoHeight: true
        });
    });
    if ($("#palitra-slider").length) {
        $("#palitra-slider").owlCarousel({
            items: 1,
            navText: ["<span class='glyphicon glyphicon-chevron-left'></span>", "<span class='glyphicon glyphicon-chevron-right'></span>"],
            dots: true,
            loop: true,
        });
    }
    if ($(".banners").length) {
        $(".banners").owlCarousel({
            items: 1,
            navText: ["<span class='glyphicon glyphicon-chevron-left'></span>", "<span class='glyphicon glyphicon-chevron-right'></span>"],
            dots: false,
            loop: true,
            nav: true,
            autoplay: true,
            autoplayTimeout: 5000
        });
    }
    if ($(".tk-catalog").length) {
        $(".tk-catalog").owlCarousel({
            items: 3,
            navText: ["<span class='glyphicon glyphicon-chevron-left'></span>", "<span class='glyphicon glyphicon-chevron-right'></span>"],
            dots: false,
            loop: true,
            nav: true,
            responsive: {
                0: {
                    items: 1,
                },
                480: {
                    items: 3,
                },
            },
        });
    }
    $('.palitra-slider__arrow-left').click(function() {
        $('#palitra-slider .glyphicon-chevron-left').click();
    });
    $('.palitra-slider__arrow-right').click(function() {
        $('#palitra-slider .glyphicon-chevron-right').click();
    });
    centralizeVertBlock('.product-palitra__item-info .item-title', 0);
    $('.img-product-palitra img:last').load(function() {
        centralizeVertBlock('.product-palitra__item-info .item-title', 0);
    });
    centralizeVertBlock('.product-palitra__item-info .item-title', 0);
    if ($(".product-mini-slider").length) {
        $(".product-mini-slider").owlCarousel({
            items: 1,
            navText: ["<span class='glyphicon glyphicon-chevron-left'></span>", "<span class='glyphicon glyphicon-chevron-right'></span>"],
            dots: true,
            loop: false,
        });
    }
    var palitraCar2 = $("#palitra-slider2,.palitra-slider-a");
    if (palitraCar2.length) {
        palitraCar2.on('initialized.owl.carousel', function(event) {
            var sliderContainer = $(this).parent().parent();
            var curSlider = $(this);
            sliderContainer.find('.palitra-slider__arrow-left').click(function() {
                curSlider.trigger('prev.owl.carousel');
            });
            sliderContainer.find('.palitra-slider__arrow-right').click(function() {
                curSlider.trigger('next.owl.carousel');
            });
        });
        palitraCar2.owlCarousel({
            items: 1,
            navText: ['<img src="/wp-content/themes/termoklinker__/images/slider_arrow-prev.png" alt="">', '<img src="/wp-content/themes/termoklinker__/images/slider_arrow-next.png" alt="">'],
            dots: false,
            loop: true,
            nav: true,
        });
    }
    var owl = $("#project-slider");
    if (owl.length) {
        owl.on('translated.owl.carousel', function() {
            $('#project-slider .center .small-image img').each(function() {
                $(this).attr('src', $(this).data('minifl'));
            });
        });
        owl.on('initialized.owl.carousel', function() {
            $('#project-slider .center .small-image img').each(function() {
                $(this).attr('src', $(this).data('minifl'));
            });
            heightByParentProject();
            $('.project-container img:last').load(function() {
                heightByParentProject();
            });
        })
        $('.report__arrow-left').click(function() {
            owl.trigger('prev.owl.carousel');
        });
        $('.report__arrow-right').click(function() {
            owl.trigger('next.owl.carousel');
        });
        owl.owlCarousel({
            center: true,
            items: 3,
            loop: true,
            nav: false,
            navText: ["<img src='images/10arrowleft.png' alt=''>", "<img src='images/10arrowright.png' alt=''>"],
            mouseDrag: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                    loop: true,
                    center: true,
                },
                991: {
                    items: 3,
                    nav: false,
                    loop: true,
                    center: true,
                },
                1199: {
                    items: 3,
                    nav: false,
                    loop: true,
                    center: true,
                }
            }
        });
    }
    var saleSlider = $(".sale-slider");
    if (saleSlider.length) {
        saleSlider.owlCarousel({
            items: 1,
            dots: true,
            loop: true,
        });
        $('.palitra-slider__arrow--left').click(function() {
            saleSlider.trigger('prev.owl.carousel');
        });
        $('.palitra-slider__arrow--right').click(function() {
            saleSlider.trigger('next.owl.carousel');
        });
    }
    if ($("#owl-demo34").length) {
        $("#owl-demo34").owlCarousel({
            items: 1,
            navText: ["<img src='images/leftarrow-archive.png' alt=''>", "<img src='images/rightarrow-archive.png' alt=''>"],
            dots: false,
            loop: true,
            nav: true,
        });
    }
    $('.small-image').click(function() {
        var bigImg = $(this).data('bigimg');
        $(this).closest('.project-main').find('.big-image img').attr('src', bigImg);
    });
    var $sync1 = $("#sync1")
      , $sync2 = $("#sync2")
      , duration = 300;
    if ($sync1.length) {
        $sync1.owlCarousel({
            items: 1,
            dots: false,
            nav: true,
            loop: true,
            autoHeight: true,
            navText: ["<span class='glyphicon glyphicon-chevron-left'></span>", "<span class='glyphicon glyphicon-chevron-right'></span>"],
        }).on('changed.owl.carousel', function(e) {
            var syncedPosition = syncPosition(e.item.index);
            if (syncedPosition != "stayStill") {
                $sync2.trigger('to.owl.carousel', [syncedPosition, duration, true]);
            }
        });
    }
    if ($sync2.length) {
        $sync2.on('initialized.owl.carousel', function() {
            $('.owl-item a').fancybox({
                height: '100%',
                scrolling: 'no'
            });
            $(this).find('.active:eq(2)').addClass('center');
        }).on('changed.owl.carousel', function(e) {
            var cEl = $(this).find('.owl-item:eq(' + (e.item.index + 2) + ')')
            $(this).find('.owl-item').removeClass('center').removeClass('a-center').removeClass('p-center');
            cEl.addClass('center');
            cEl.next().addClass('a-center');
            cEl.prev().addClass('p-center');
        }).owlCarousel({
            items: 5,
            dots: false,
        }).on('click', '.owl-item', function() {});
    }
    function addClassCurrent(index) {
        $sync2.find(".owl-item").removeClass("current").eq(index).addClass("current");
    }
    function syncPosition(index) {
        addClassCurrent(index);
        var itemsNo = $sync2.find(".owl-item").length;
        var visibleItemsNo = $sync2.find(".owl-item.active").length;
        if (itemsNo === visibleItemsNo) {
            return "stayStill";
        }
        var visibleCurrentIndex = $sync2.find(".owl-item.active").index($sync2.find(".owl-item.current"));
        if (visibleCurrentIndex == 0 && index != 0) {
            return index - 1;
        }
        if (visibleCurrentIndex == (visibleItemsNo - 1) && index != (itemsNo - 1)) {
            return index - visibleItemsNo + 2;
        }
        return "stayStill";
    }
    function center(number) {
        var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
        var num = number;
        var found = false;
        for (var i in sync2visible) {
            if (num === sync2visible[i]) {
                var found = true;
            }
        }
        if (found === false) {
            if (num > sync2visible[sync2visible.length - 1]) {
                sync2.trigger("owl.goTo", num - sync2visible.length + 2)
            } else {
                if (num - 1 === -1) {
                    num = 0;
                }
                sync2.trigger("owl.goTo", num);
            }
        } else if (num === sync2visible[sync2visible.length - 1]) {
            sync2.trigger("owl.goTo", sync2visible[1])
        } else if (num === sync2visible[0]) {
            sync2.trigger("owl.goTo", num - 1)
        }
    }
    if ($('.contacts__slider.one, .contacts__slider.two').length) {
        $('.contacts__slider.one, .contacts__slider.two').owlCarousel({
            items: 1,
            dots: false,
            margin: 4,
            center: true,
            loop: true,
            stagePadding: 50,
            nav: true,
            navText: ['<img src="/images/lft.png" alt="" />', '<span class="contactNavBtn"><img src="/images/rght.png" alt="" /></span>'],
        });
    }
});
var TextareaGrow = {
    grow: function(t) {
        if (t.scrollHeight > 32) {
            t.style.height = 'auto';
            t.style.height = (t.scrollHeight + 2) + 'px';
        }
    },
    init: function(self) {
        if (self.length) {
            TextareaGrow.grow(self[0]);
            self.each(function() {
                $(this).on('change keyup paste input', function() {
                    TextareaGrow.grow($(this)[0]);
                });
            });
        }
    }
}
/*var menu = {
    fixed: function() {
        var stOff = $('.header-bottom').offset().top - ($('#wpadminbar') ? 0 : $('#wpadminbar').outerHeight());
        var fl1 = false;
        $(window).scroll(function() {
            if (!fl1)
                stOff = $('.header-bottom').offset().top - ($('#wpadminbar') ? 0 : $('#wpadminbar').outerHeight());
            if ($(window).scrollTop() >= stOff && !fl1) {
                fl1 = true;
                $('.header').addClass('fixed-menu');
                $('.header-top').css('margin-top', $('.fixed-menu .header-bottom').outerHeight() + 'px');
                $('.fixed-menu .header-bottom').css('top', ($('#wpadminbar') ? 0 : $('#wpadminbar').outerHeight()) + 'px');
            }
            if (($(window).scrollTop()) < stOff && fl1) {
                fl1 = false
                $('.header').removeClass('fixed-menu');
                $('.header-top').css('margin-top', 0);
            }
        });
    }
}*/
var formInput = {
    update: function(self) {
        self.find('.input-container input,.input-container textarea').bind('focus', function(event) {
            $(this).parent().parent('.input-container').addClass('focus');
            $(this).removeClass('wpcf7-not-valid');
        }).bind('blur', function(event) {
            if (!$(this).val()) {
                $(this).parent().parent('.input-container').removeClass('focus');
            }
        }).bind('change', function(event) {
            if (!$(this).val()) {
                $(this).parent().parent('.input-container').removeClass('focus');
            } else {
                $(this).parent().parent('.input-container').addClass('focus');
            }
        });
    }
};
var recaptchaWidgets = [];
var recaptchaCallback = function() {
    var forms = document.getElementsByTagName('form');
    var pattern = /(^|\s)g-recaptcha(\s|$)/;
    for (var i = 0; i < forms.length; i++) {
        var divs = forms[i].getElementsByTagName('div');
        for (var j = 0; j < divs.length; j++) {
            var sitekey = divs[j].getAttribute('data-sitekey');
            if (divs[j].className && divs[j].className.match(pattern) && sitekey) {
                var params = {
                    'sitekey': sitekey,
                    'theme': divs[j].getAttribute('data-theme'),
                    'type': divs[j].getAttribute('data-type'),
                    'size': divs[j].getAttribute('data-size'),
                    'tabindex': divs[j].getAttribute('data-tabindex')
                };
                var callback = divs[j].getAttribute('data-callback');
                if (callback && 'function' == typeof window[callback]) {
                    params['callback'] = window[callback];
                }
                var expired_callback = divs[j].getAttribute('data-expired-callback');
                if (expired_callback && 'function' == typeof window[expired_callback]) {
                    params['expired-callback'] = window[expired_callback];
                }
                var widget_id = grecaptcha.render(divs[j], params);
                recaptchaWidgets.push(widget_id);
                break;
            }
        }
    }
};
/*!
 * jQuery Form Plugin
 * version: 3.51.0-2014.06.20
 * Requires jQuery v1.5 or later
 * Copyright (c) 2014 M. Alsup
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 */
!function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("undefined" != typeof jQuery ? jQuery : window.Zepto)
}(function(e) {
    "use strict";
    function t(t) {
        var r = t.data;
        t.isDefaultPrevented() || (t.preventDefault(),
        e(t.target).ajaxSubmit(r))
    }
    function r(t) {
        var r = t.target
          , a = e(r);
        if (!a.is("[type=submit],[type=image]")) {
            var n = a.closest("[type=submit]");
            if (0 === n.length)
                return;
            r = n[0]
        }
        var i = this;
        if (i.clk = r,
        "image" == r.type)
            if (void 0 !== t.offsetX)
                i.clk_x = t.offsetX,
                i.clk_y = t.offsetY;
            else if ("function" == typeof e.fn.offset) {
                var o = a.offset();
                i.clk_x = t.pageX - o.left,
                i.clk_y = t.pageY - o.top
            } else
                i.clk_x = t.pageX - r.offsetLeft,
                i.clk_y = t.pageY - r.offsetTop;
        setTimeout(function() {
            i.clk = i.clk_x = i.clk_y = null
        }, 100)
    }
    function a() {
        if (e.fn.ajaxSubmit.debug) {
            var t = "[jquery.form] " + Array.prototype.join.call(arguments, "");
            window.console && window.console.log ? window.console.log(t) : window.opera && window.opera.postError && window.opera.postError(t)
        }
    }
    var n = {};
    n.fileapi = void 0 !== e("<input type='file'/>").get(0).files,
    n.formdata = void 0 !== window.FormData;
    var i = !!e.fn.prop;
    e.fn.attr2 = function() {
        if (!i)
            return this.attr.apply(this, arguments);
        var e = this.prop.apply(this, arguments);
        return e && e.jquery || "string" == typeof e ? e : this.attr.apply(this, arguments)
    }
    ,
    e.fn.ajaxSubmit = function(t) {
        function r(r) {
            var a, n, i = e.param(r, t.traditional).split("&"), o = i.length, s = [];
            for (a = 0; o > a; a++)
                i[a] = i[a].replace(/\+/g, " "),
                n = i[a].split("="),
                s.push([decodeURIComponent(n[0]), decodeURIComponent(n[1])]);
            return s
        }
        function o(a) {
            for (var n = new FormData, i = 0; i < a.length; i++)
                n.append(a[i].name, a[i].value);
            if (t.extraData) {
                var o = r(t.extraData);
                for (i = 0; i < o.length; i++)
                    o[i] && n.append(o[i][0], o[i][1])
            }
            t.data = null;
            var s = e.extend(!0, {}, e.ajaxSettings, t, {
                contentType: !1,
                processData: !1,
                cache: !1,
                type: u || "POST"
            });
            t.uploadProgress && (s.xhr = function() {
                var r = e.ajaxSettings.xhr();
                return r.upload && r.upload.addEventListener("progress", function(e) {
                    var r = 0
                      , a = e.loaded || e.position
                      , n = e.total;
                    e.lengthComputable && (r = Math.ceil(a / n * 100)),
                    t.uploadProgress(e, a, n, r)
                }, !1),
                r
            }
            ),
            s.data = null;
            var c = s.beforeSend;
            return s.beforeSend = function(e, r) {
                r.data = t.formData ? t.formData : n,
                c && c.call(this, e, r)
            }
            ,
            e.ajax(s)
        }
        function s(r) {
            function n(e) {
                var t = null;
                try {
                    e.contentWindow && (t = e.contentWindow.document)
                } catch (r) {
                    a("cannot get iframe.contentWindow document: " + r)
                }
                if (t)
                    return t;
                try {
                    t = e.contentDocument ? e.contentDocument : e.document
                } catch (r) {
                    a("cannot get iframe.contentDocument: " + r),
                    t = e.document
                }
                return t
            }
            function o() {
                function t() {
                    try {
                        var e = n(g).readyState;
                        a("state = " + e),
                        e && "uninitialized" == e.toLowerCase() && setTimeout(t, 50)
                    } catch (r) {
                        a("Server abort: ", r, " (", r.name, ")"),
                        s(k),
                        j && clearTimeout(j),
                        j = void 0
                    }
                }
                var r = f.attr2("target")
                  , i = f.attr2("action")
                  , o = "multipart/form-data"
                  , c = f.attr("enctype") || f.attr("encoding") || o;
                w.setAttribute("target", p),
                (!u || /post/i.test(u)) && w.setAttribute("method", "POST"),
                i != m.url && w.setAttribute("action", m.url),
                m.skipEncodingOverride || u && !/post/i.test(u) || f.attr({
                    encoding: "multipart/form-data",
                    enctype: "multipart/form-data"
                }),
                m.timeout && (j = setTimeout(function() {
                    T = !0,
                    s(D)
                }, m.timeout));
                var l = [];
                try {
                    if (m.extraData)
                        for (var d in m.extraData)
                            m.extraData.hasOwnProperty(d) && l.push(e.isPlainObject(m.extraData[d]) && m.extraData[d].hasOwnProperty("name") && m.extraData[d].hasOwnProperty("value") ? e('<input type="hidden" name="' + m.extraData[d].name + '">').val(m.extraData[d].value).appendTo(w)[0] : e('<input type="hidden" name="' + d + '">').val(m.extraData[d]).appendTo(w)[0]);
                    m.iframeTarget || v.appendTo("body"),
                    g.attachEvent ? g.attachEvent("onload", s) : g.addEventListener("load", s, !1),
                    setTimeout(t, 15);
                    try {
                        w.submit()
                    } catch (h) {
                        var x = document.createElement("form").submit;
                        x.apply(w)
                    }
                } finally {
                    w.setAttribute("action", i),
                    w.setAttribute("enctype", c),
                    r ? w.setAttribute("target", r) : f.removeAttr("target"),
                    e(l).remove()
                }
            }
            function s(t) {
                if (!x.aborted && !F) {
                    if (M = n(g),
                    M || (a("cannot access response document"),
                    t = k),
                    t === D && x)
                        return x.abort("timeout"),
                        void S.reject(x, "timeout");
                    if (t == k && x)
                        return x.abort("server abort"),
                        void S.reject(x, "error", "server abort");
                    if (M && M.location.href != m.iframeSrc || T) {
                        g.detachEvent ? g.detachEvent("onload", s) : g.removeEventListener("load", s, !1);
                        var r, i = "success";
                        try {
                            if (T)
                                throw "timeout";
                            var o = "xml" == m.dataType || M.XMLDocument || e.isXMLDoc(M);
                            if (a("isXml=" + o),
                            !o && window.opera && (null === M.body || !M.body.innerHTML) && --O)
                                return a("requeing onLoad callback, DOM not available"),
                                void setTimeout(s, 250);
                            var u = M.body ? M.body : M.documentElement;
                            x.responseText = u ? u.innerHTML : null,
                            x.responseXML = M.XMLDocument ? M.XMLDocument : M,
                            o && (m.dataType = "xml"),
                            x.getResponseHeader = function(e) {
                                var t = {
                                    "content-type": m.dataType
                                };
                                return t[e.toLowerCase()]
                            }
                            ,
                            u && (x.status = Number(u.getAttribute("status")) || x.status,
                            x.statusText = u.getAttribute("statusText") || x.statusText);
                            var c = (m.dataType || "").toLowerCase()
                              , l = /(json|script|text)/.test(c);
                            if (l || m.textarea) {
                                var f = M.getElementsByTagName("textarea")[0];
                                if (f)
                                    x.responseText = f.value,
                                    x.status = Number(f.getAttribute("status")) || x.status,
                                    x.statusText = f.getAttribute("statusText") || x.statusText;
                                else if (l) {
                                    var p = M.getElementsByTagName("pre")[0]
                                      , h = M.getElementsByTagName("body")[0];
                                    p ? x.responseText = p.textContent ? p.textContent : p.innerText : h && (x.responseText = h.textContent ? h.textContent : h.innerText)
                                }
                            } else
                                "xml" == c && !x.responseXML && x.responseText && (x.responseXML = X(x.responseText));
                            try {
                                E = _(x, c, m)
                            } catch (y) {
                                i = "parsererror",
                                x.error = r = y || i
                            }
                        } catch (y) {
                            a("error caught: ", y),
                            i = "error",
                            x.error = r = y || i
                        }
                        x.aborted && (a("upload aborted"),
                        i = null),
                        x.status && (i = x.status >= 200 && x.status < 300 || 304 === x.status ? "success" : "error"),
                        "success" === i ? (m.success && m.success.call(m.context, E, "success", x),
                        S.resolve(x.responseText, "success", x),
                        d && e.event.trigger("ajaxSuccess", [x, m])) : i && (void 0 === r && (r = x.statusText),
                        m.error && m.error.call(m.context, x, i, r),
                        S.reject(x, "error", r),
                        d && e.event.trigger("ajaxError", [x, m, r])),
                        d && e.event.trigger("ajaxComplete", [x, m]),
                        d && !--e.active && e.event.trigger("ajaxStop"),
                        m.complete && m.complete.call(m.context, x, i),
                        F = !0,
                        m.timeout && clearTimeout(j),
                        setTimeout(function() {
                            m.iframeTarget ? v.attr("src", m.iframeSrc) : v.remove(),
                            x.responseXML = null
                        }, 100)
                    }
                }
            }
            var c, l, m, d, p, v, g, x, y, b, T, j, w = f[0], S = e.Deferred();
            if (S.abort = function(e) {
                x.abort(e)
            }
            ,
            r)
                for (l = 0; l < h.length; l++)
                    c = e(h[l]),
                    i ? c.prop("disabled", !1) : c.removeAttr("disabled");
            if (m = e.extend(!0, {}, e.ajaxSettings, t),
            m.context = m.context || m,
            p = "jqFormIO" + (new Date).getTime(),
            m.iframeTarget ? (v = e(m.iframeTarget),
            b = v.attr2("name"),
            b ? p = b : v.attr2("name", p)) : (v = e('<iframe name="' + p + '" src="' + m.iframeSrc + '" />'),
            v.css({
                position: "absolute",
                top: "-1000px",
                left: "-1000px"
            })),
            g = v[0],
            x = {
                aborted: 0,
                responseText: null,
                responseXML: null,
                status: 0,
                statusText: "n/a",
                getAllResponseHeaders: function() {},
                getResponseHeader: function() {},
                setRequestHeader: function() {},
                abort: function(t) {
                    var r = "timeout" === t ? "timeout" : "aborted";
                    a("aborting upload... " + r),
                    this.aborted = 1;
                    try {
                        g.contentWindow.document.execCommand && g.contentWindow.document.execCommand("Stop")
                    } catch (n) {}
                    v.attr("src", m.iframeSrc),
                    x.error = r,
                    m.error && m.error.call(m.context, x, r, t),
                    d && e.event.trigger("ajaxError", [x, m, r]),
                    m.complete && m.complete.call(m.context, x, r)
                }
            },
            d = m.global,
            d && 0 === e.active++ && e.event.trigger("ajaxStart"),
            d && e.event.trigger("ajaxSend", [x, m]),
            m.beforeSend && m.beforeSend.call(m.context, x, m) === !1)
                return m.global && e.active--,
                S.reject(),
                S;
            if (x.aborted)
                return S.reject(),
                S;
            y = w.clk,
            y && (b = y.name,
            b && !y.disabled && (m.extraData = m.extraData || {},
            m.extraData[b] = y.value,
            "image" == y.type && (m.extraData[b + ".x"] = w.clk_x,
            m.extraData[b + ".y"] = w.clk_y)));
            var D = 1
              , k = 2
              , A = e("meta[name=csrf-token]").attr("content")
              , L = e("meta[name=csrf-param]").attr("content");
            L && A && (m.extraData = m.extraData || {},
            m.extraData[L] = A),
            m.forceSync ? o() : setTimeout(o, 10);
            var E, M, F, O = 50, X = e.parseXML || function(e, t) {
                return window.ActiveXObject ? (t = new ActiveXObject("Microsoft.XMLDOM"),
                t.async = "false",
                t.loadXML(e)) : t = (new DOMParser).parseFromString(e, "text/xml"),
                t && t.documentElement && "parsererror" != t.documentElement.nodeName ? t : null
            }
            , C = e.parseJSON || function(e) {
                return window.eval("(" + e + ")")
            }
            , _ = function(t, r, a) {
                var n = t.getResponseHeader("content-type") || ""
                  , i = "xml" === r || !r && n.indexOf("xml") >= 0
                  , o = i ? t.responseXML : t.responseText;
                return i && "parsererror" === o.documentElement.nodeName && e.error && e.error("parsererror"),
                a && a.dataFilter && (o = a.dataFilter(o, r)),
                "string" == typeof o && ("json" === r || !r && n.indexOf("json") >= 0 ? o = C(o) : ("script" === r || !r && n.indexOf("javascript") >= 0) && e.globalEval(o)),
                o
            };
            return S
        }
        if (!this.length)
            return a("ajaxSubmit: skipping submit process - no element selected"),
            this;
        var u, c, l, f = this;
        "function" == typeof t ? t = {
            success: t
        } : void 0 === t && (t = {}),
        u = t.type || this.attr2("method"),
        c = t.url || this.attr2("action"),
        l = "string" == typeof c ? e.trim(c) : "",
        l = l || window.location.href || "",
        l && (l = (l.match(/^([^#]+)/) || [])[1]),
        t = e.extend(!0, {
            url: l,
            success: e.ajaxSettings.success,
            type: u || e.ajaxSettings.type,
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
        }, t);
        var m = {};
        if (this.trigger("form-pre-serialize", [this, t, m]),
        m.veto)
            return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),
            this;
        if (t.beforeSerialize && t.beforeSerialize(this, t) === !1)
            return a("ajaxSubmit: submit aborted via beforeSerialize callback"),
            this;
        var d = t.traditional;
        void 0 === d && (d = e.ajaxSettings.traditional);
        var p, h = [], v = this.formToArray(t.semantic, h);
        if (t.data && (t.extraData = t.data,
        p = e.param(t.data, d)),
        t.beforeSubmit && t.beforeSubmit(v, this, t) === !1)
            return a("ajaxSubmit: submit aborted via beforeSubmit callback"),
            this;
        if (this.trigger("form-submit-validate", [v, this, t, m]),
        m.veto)
            return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"),
            this;
        var g = e.param(v, d);
        p && (g = g ? g + "&" + p : p),
        "GET" == t.type.toUpperCase() ? (t.url += (t.url.indexOf("?") >= 0 ? "&" : "?") + g,
        t.data = null) : t.data = g;
        var x = [];
        if (t.resetForm && x.push(function() {
            f.resetForm()
        }),
        t.clearForm && x.push(function() {
            f.clearForm(t.includeHidden)
        }),
        !t.dataType && t.target) {
            var y = t.success || function() {}
            ;
            x.push(function(r) {
                var a = t.replaceTarget ? "replaceWith" : "html";
                e(t.target)[a](r).each(y, arguments)
            })
        } else
            t.success && x.push(t.success);
        if (t.success = function(e, r, a) {
            for (var n = t.context || this, i = 0, o = x.length; o > i; i++)
                x[i].apply(n, [e, r, a || f, f])
        }
        ,
        t.error) {
            var b = t.error;
            t.error = function(e, r, a) {
                var n = t.context || this;
                b.apply(n, [e, r, a, f])
            }
        }
        if (t.complete) {
            var T = t.complete;
            t.complete = function(e, r) {
                var a = t.context || this;
                T.apply(a, [e, r, f])
            }
        }
        var j = e("input[type=file]:enabled", this).filter(function() {
            return "" !== e(this).val()
        })
          , w = j.length > 0
          , S = "multipart/form-data"
          , D = f.attr("enctype") == S || f.attr("encoding") == S
          , k = n.fileapi && n.formdata;
        a("fileAPI :" + k);
        var A, L = (w || D) && !k;
        t.iframe !== !1 && (t.iframe || L) ? t.closeKeepAlive ? e.get(t.closeKeepAlive, function() {
            A = s(v)
        }) : A = s(v) : A = (w || D) && k ? o(v) : e.ajax(t),
        f.removeData("jqxhr").data("jqxhr", A);
        for (var E = 0; E < h.length; E++)
            h[E] = null;
        return this.trigger("form-submit-notify", [this, t]),
        this
    }
    ,
    e.fn.ajaxForm = function(n) {
        if (n = n || {},
        n.delegation = n.delegation && e.isFunction(e.fn.on),
        !n.delegation && 0 === this.length) {
            var i = {
                s: this.selector,
                c: this.context
            };
            return !e.isReady && i.s ? (a("DOM not ready, queuing ajaxForm"),
            e(function() {
                e(i.s, i.c).ajaxForm(n)
            }),
            this) : (a("terminating; zero elements found by selector" + (e.isReady ? "" : " (DOM not ready)")),
            this)
        }
        return n.delegation ? (e(document).off("submit.form-plugin", this.selector, t).off("click.form-plugin", this.selector, r).on("submit.form-plugin", this.selector, n, t).on("click.form-plugin", this.selector, n, r),
        this) : this.ajaxFormUnbind().bind("submit.form-plugin", n, t).bind("click.form-plugin", n, r)
    }
    ,
    e.fn.ajaxFormUnbind = function() {
        return this.unbind("submit.form-plugin click.form-plugin")
    }
    ,
    e.fn.formToArray = function(t, r) {
        var a = [];
        if (0 === this.length)
            return a;
        var i, o = this[0], s = this.attr("id"), u = t ? o.getElementsByTagName("*") : o.elements;
        if (u && !/MSIE [678]/.test(navigator.userAgent) && (u = e(u).get()),
        s && (i = e(':input[form="' + s + '"]').get(),
        i.length && (u = (u || []).concat(i))),
        !u || !u.length)
            return a;
        var c, l, f, m, d, p, h;
        for (c = 0,
        p = u.length; p > c; c++)
            if (d = u[c],
            f = d.name,
            f && !d.disabled)
                if (t && o.clk && "image" == d.type)
                    o.clk == d && (a.push({
                        name: f,
                        value: e(d).val(),
                        type: d.type
                    }),
                    a.push({
                        name: f + ".x",
                        value: o.clk_x
                    }, {
                        name: f + ".y",
                        value: o.clk_y
                    }));
                else if (m = e.fieldValue(d, !0),
                m && m.constructor == Array)
                    for (r && r.push(d),
                    l = 0,
                    h = m.length; h > l; l++)
                        a.push({
                            name: f,
                            value: m[l]
                        });
                else if (n.fileapi && "file" == d.type) {
                    r && r.push(d);
                    var v = d.files;
                    if (v.length)
                        for (l = 0; l < v.length; l++)
                            a.push({
                                name: f,
                                value: v[l],
                                type: d.type
                            });
                    else
                        a.push({
                            name: f,
                            value: "",
                            type: d.type
                        })
                } else
                    null !== m && "undefined" != typeof m && (r && r.push(d),
                    a.push({
                        name: f,
                        value: m,
                        type: d.type,
                        required: d.required
                    }));
        if (!t && o.clk) {
            var g = e(o.clk)
              , x = g[0];
            f = x.name,
            f && !x.disabled && "image" == x.type && (a.push({
                name: f,
                value: g.val()
            }),
            a.push({
                name: f + ".x",
                value: o.clk_x
            }, {
                name: f + ".y",
                value: o.clk_y
            }))
        }
        return a
    }
    ,
    e.fn.formSerialize = function(t) {
        return e.param(this.formToArray(t))
    }
    ,
    e.fn.fieldSerialize = function(t) {
        var r = [];
        return this.each(function() {
            var a = this.name;
            if (a) {
                var n = e.fieldValue(this, t);
                if (n && n.constructor == Array)
                    for (var i = 0, o = n.length; o > i; i++)
                        r.push({
                            name: a,
                            value: n[i]
                        });
                else
                    null !== n && "undefined" != typeof n && r.push({
                        name: this.name,
                        value: n
                    })
            }
        }),
        e.param(r)
    }
    ,
    e.fn.fieldValue = function(t) {
        for (var r = [], a = 0, n = this.length; n > a; a++) {
            var i = this[a]
              , o = e.fieldValue(i, t);
            null === o || "undefined" == typeof o || o.constructor == Array && !o.length || (o.constructor == Array ? e.merge(r, o) : r.push(o))
        }
        return r
    }
    ,
    e.fieldValue = function(t, r) {
        var a = t.name
          , n = t.type
          , i = t.tagName.toLowerCase();
        if (void 0 === r && (r = !0),
        r && (!a || t.disabled || "reset" == n || "button" == n || ("checkbox" == n || "radio" == n) && !t.checked || ("submit" == n || "image" == n) && t.form && t.form.clk != t || "select" == i && -1 == t.selectedIndex))
            return null;
        if ("select" == i) {
            var o = t.selectedIndex;
            if (0 > o)
                return null;
            for (var s = [], u = t.options, c = "select-one" == n, l = c ? o + 1 : u.length, f = c ? o : 0; l > f; f++) {
                var m = u[f];
                if (m.selected) {
                    var d = m.value;
                    if (d || (d = m.attributes && m.attributes.value && !m.attributes.value.specified ? m.text : m.value),
                    c)
                        return d;
                    s.push(d)
                }
            }
            return s
        }
        return e(t).val()
    }
    ,
    e.fn.clearForm = function(t) {
        return this.each(function() {
            e("input,select,textarea", this).clearFields(t)
        })
    }
    ,
    e.fn.clearFields = e.fn.clearInputs = function(t) {
        var r = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function() {
            var a = this.type
              , n = this.tagName.toLowerCase();
            r.test(a) || "textarea" == n ? this.value = "" : "checkbox" == a || "radio" == a ? this.checked = !1 : "select" == n ? this.selectedIndex = -1 : "file" == a ? /MSIE/.test(navigator.userAgent) ? e(this).replaceWith(e(this).clone(!0)) : e(this).val("") : t && (t === !0 && /hidden/.test(a) || "string" == typeof t && e(this).is(t)) && (this.value = "")
        })
    }
    ,
    e.fn.resetForm = function() {
        return this.each(function() {
            ("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) && this.reset()
        })
    }
    ,
    e.fn.enable = function(e) {
        return void 0 === e && (e = !0),
        this.each(function() {
            this.disabled = !e
        })
    }
    ,
    e.fn.selected = function(t) {
        return void 0 === t && (t = !0),
        this.each(function() {
            var r = this.type;
            if ("checkbox" == r || "radio" == r)
                this.checked = t;
            else if ("option" == this.tagName.toLowerCase()) {
                var a = e(this).parent("select");
                t && a[0] && "select-one" == a[0].type && a.find("option").selected(!1),
                this.selected = t
            }
        })
    }
    ,
    e.fn.ajaxSubmit.debug = !1
});
var _wpcf7 = {
    "recaptcha": {
        "messages": {
            "empty": "\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435, \u0447\u0442\u043e \u0432\u044b \u043d\u0435 \u0440\u043e\u0431\u043e\u0442."
        }
    },
    "cached": "1"
};
(function($) {
    'use strict';
    if (typeof _wpcf7 === 'undefined' || _wpcf7 === null) {
        return;
    }
    _wpcf7 = $.extend({
        cached: 0,
        inputs: []
    }, _wpcf7);
    $.fn.wpcf7InitForm = function() {
        this.ajaxForm({
            beforeSubmit: function(arr, $form, options) {
                $form.wpcf7ClearResponseOutput();
                $form.find('[aria-invalid]').attr('aria-invalid', 'false');
                $form.find('.ajax-loader').addClass('is-active');
                return true;
            },
            beforeSerialize: function($form, options) {
                $form.find('[placeholder].placeheld').each(function(i, n) {
                    $(n).val('');
                });
                return true;
            },
            data: {
                '_wpcf7_is_ajax_call': 1
            },
            dataType: 'json',
            success: $.wpcf7AjaxSuccess,
            error: function(xhr, status, error, $form) {
                var e = $('<div class="ajax-error"></div>').text(error.message);
                $form.after(e);
            }
        });
        if (_wpcf7.cached) {
            this.wpcf7OnloadRefill();
        }
        this.wpcf7ToggleSubmit();
        this.find('.wpcf7-submit').wpcf7AjaxLoader();
        this.find('.wpcf7-acceptance').click(function() {
            $(this).closest('form').wpcf7ToggleSubmit();
        });
        this.find('.wpcf7-exclusive-checkbox').wpcf7ExclusiveCheckbox();
        this.find('.wpcf7-list-item.has-free-text').wpcf7ToggleCheckboxFreetext();
        this.find('[placeholder]').wpcf7Placeholder();
        if (_wpcf7.jqueryUi && !_wpcf7.supportHtml5.date) {
            this.find('input.wpcf7-date[type="date"]').each(function() {
                $(this).datepicker({
                    dateFormat: 'yy-mm-dd',
                    minDate: new Date($(this).attr('min')),
                    maxDate: new Date($(this).attr('max'))
                });
            });
        }
        if (_wpcf7.jqueryUi && !_wpcf7.supportHtml5.number) {
            this.find('input.wpcf7-number[type="number"]').each(function() {
                $(this).spinner({
                    min: $(this).attr('min'),
                    max: $(this).attr('max'),
                    step: $(this).attr('step')
                });
            });
        }
        this.find('.wpcf7-character-count').wpcf7CharacterCount();
        this.find('.wpcf7-validates-as-url').change(function() {
            $(this).wpcf7NormalizeUrl();
        });
        this.find('.wpcf7-recaptcha').wpcf7Recaptcha();
    }
    ;
    $.wpcf7AjaxSuccess = function(data, status, xhr, $form) {
        if (!$.isPlainObject(data) || $.isEmptyObject(data)) {
            return;
        }
        _wpcf7.inputs = $form.serializeArray();
        var $responseOutput = $form.find('div.wpcf7-response-output');
        $form.wpcf7ClearResponseOutput();
        $form.find('.wpcf7-form-control').removeClass('wpcf7-not-valid');
        $form.removeClass('invalid spam sent failed');
        if (data.captcha) {
            $form.wpcf7RefillCaptcha(data.captcha);
        }
        if (data.quiz) {
            $form.wpcf7RefillQuiz(data.quiz);
        }
        if (data.invalids) {
            $.each(data.invalids, function(i, n) {
                $form.find(n.into).wpcf7NotValidTip(n.message);
                $form.find(n.into).find('.wpcf7-form-control').addClass('wpcf7-not-valid');
                $form.find(n.into).find('[aria-invalid]').attr('aria-invalid', 'true');
            });
            $responseOutput.addClass('wpcf7-validation-errors');
            $form.addClass('invalid');
            $(data.into).wpcf7TriggerEvent('invalid');
        } else if (1 == data.spam) {
            $form.find('[name="g-recaptcha-response"]').each(function() {
                if ('' == $(this).val()) {
                    var $recaptcha = $(this).closest('.wpcf7-form-control-wrap');
                    $recaptcha.wpcf7NotValidTip(_wpcf7.recaptcha.messages.empty);
                }
            });
            $responseOutput.addClass('wpcf7-spam-blocked');
            $form.addClass('spam');
            $(data.into).wpcf7TriggerEvent('spam');
        } else if (1 == data.mailSent) {
            $responseOutput.addClass('wpcf7-mail-sent-ok');
            $form.addClass('sent');
            if (data.onSentOk) {
                $.each(data.onSentOk, function(i, n) {
                    eval(n)
                });
            }
            $(data.into).wpcf7TriggerEvent('mailsent');
        } else {
            $responseOutput.addClass('wpcf7-mail-sent-ng');
            $form.addClass('failed');
            $(data.into).wpcf7TriggerEvent('mailfailed');
        }
        if (data.onSubmit) {
            $.each(data.onSubmit, function(i, n) {
                eval(n)
            });
        }
        $(data.into).wpcf7TriggerEvent('submit');
        if (1 == data.mailSent) {
            $form.resetForm();
        }
        $form.find('[placeholder].placeheld').each(function(i, n) {
            $(n).val($(n).attr('placeholder'));
        });
        $responseOutput.append(data.message).slideDown('fast');
        $responseOutput.attr('role', 'alert');
        $.wpcf7UpdateScreenReaderResponse($form, data);
    }
    ;
    $.fn.wpcf7TriggerEvent = function(name) {
        return this.each(function() {
            var elmId = this.id;
            var inputs = _wpcf7.inputs;
            var event = new CustomEvent('wpcf7' + name,{
                bubbles: true,
                detail: {
                    id: elmId,
                    inputs: inputs
                }
            });
            this.dispatchEvent(event);
            $(this).trigger('wpcf7:' + name);
            $(this).trigger(name + '.wpcf7');
        });
    }
    ;
    $.fn.wpcf7ExclusiveCheckbox = function() {
        return this.find('input:checkbox').click(function() {
            var name = $(this).attr('name');
            $(this).closest('form').find('input:checkbox[name="' + name + '"]').not(this).prop('checked', false);
        });
    }
    ;
    $.fn.wpcf7Placeholder = function() {
        if (_wpcf7.supportHtml5.placeholder) {
            return this;
        }
        return this.each(function() {
            $(this).val($(this).attr('placeholder'));
            $(this).addClass('placeheld');
            $(this).focus(function() {
                if ($(this).hasClass('placeheld')) {
                    $(this).val('').removeClass('placeheld');
                }
            });
            $(this).blur(function() {
                if ('' === $(this).val()) {
                    $(this).val($(this).attr('placeholder'));
                    $(this).addClass('placeheld');
                }
            });
        });
    }
    ;
    $.fn.wpcf7AjaxLoader = function() {
        return this.each(function() {
            $(this).after('<span class="ajax-loader"></span>');
        });
    }
    ;
    $.fn.wpcf7ToggleSubmit = function() {
        return this.each(function() {
            var form = $(this);
            if (this.tagName.toLowerCase() != 'form') {
                form = $(this).find('form').first();
            }
            if (form.hasClass('wpcf7-acceptance-as-validation')) {
                return;
            }
            var submit = form.find('input:submit');
            if (!submit.length) {
                return;
            }
            var acceptances = form.find('input:checkbox.wpcf7-acceptance');
            if (!acceptances.length) {
                return;
            }
            submit.removeAttr('disabled');
            acceptances.each(function(i, n) {
                n = $(n);
                if (n.hasClass('wpcf7-invert') && n.is(':checked') || !n.hasClass('wpcf7-invert') && !n.is(':checked')) {
                    submit.attr('disabled', 'disabled');
                }
            });
        });
    }
    ;
    $.fn.wpcf7ToggleCheckboxFreetext = function() {
        return this.each(function() {
            var $wrap = $(this).closest('.wpcf7-form-control');
            if ($(this).find(':checkbox, :radio').is(':checked')) {
                $(this).find(':input.wpcf7-free-text').prop('disabled', false);
            } else {
                $(this).find(':input.wpcf7-free-text').prop('disabled', true);
            }
            $wrap.find(':checkbox, :radio').change(function() {
                var $cb = $('.has-free-text', $wrap).find(':checkbox, :radio');
                var $freetext = $(':input.wpcf7-free-text', $wrap);
                if ($cb.is(':checked')) {
                    $freetext.prop('disabled', false).focus();
                } else {
                    $freetext.prop('disabled', true);
                }
            });
        });
    }
    ;
    $.fn.wpcf7CharacterCount = function() {
        return this.each(function() {
            var $count = $(this);
            var name = $count.attr('data-target-name');
            var down = $count.hasClass('down');
            var starting = parseInt($count.attr('data-starting-value'), 10);
            var maximum = parseInt($count.attr('data-maximum-value'), 10);
            var minimum = parseInt($count.attr('data-minimum-value'), 10);
            var updateCount = function($target) {
                var length = $target.val().length;
                var count = down ? starting - length : length;
                $count.attr('data-current-value', count);
                $count.text(count);
                if (maximum && maximum < length) {
                    $count.addClass('too-long');
                } else {
                    $count.removeClass('too-long');
                }
                if (minimum && length < minimum) {
                    $count.addClass('too-short');
                } else {
                    $count.removeClass('too-short');
                }
            };
            $count.closest('form').find(':input[name="' + name + '"]').each(function() {
                updateCount($(this));
                $(this).keyup(function() {
                    updateCount($(this));
                });
            });
        });
    }
    ;
    $.fn.wpcf7NormalizeUrl = function() {
        return this.each(function() {
            var val = $.trim($(this).val());
            if (val && !val.match(/^[a-z][a-z0-9.+-]*:/i)) {
                val = val.replace(/^\/+/, '');
                val = 'http://' + val;
            }
            $(this).val(val);
        });
    }
    ;
    $.fn.wpcf7NotValidTip = function(message) {
        return this.each(function() {
            var $into = $(this);
            $into.find('span.wpcf7-not-valid-tip').remove();
            $into.append('<span role="alert" class="wpcf7-not-valid-tip">' + message + '</span>');
            if ($into.is('.use-floating-validation-tip *')) {
                $('.wpcf7-not-valid-tip', $into).mouseover(function() {
                    $(this).wpcf7FadeOut();
                });
                $(':input', $into).focus(function() {
                    $('.wpcf7-not-valid-tip', $into).not(':hidden').wpcf7FadeOut();
                });
            }
        });
    }
    ;
    $.fn.wpcf7FadeOut = function() {
        return this.each(function() {
            $(this).animate({
                opacity: 0
            }, 'fast', function() {
                $(this).css({
                    'z-index': -100
                });
            });
        });
    }
    ;
    $.fn.wpcf7OnloadRefill = function() {
        return this.each(function() {
            var url = $(this).attr('action');
            if (0 < url.indexOf('#')) {
                url = url.substr(0, url.indexOf('#'));
            }
            var id = $(this).find('input[name="_wpcf7"]').val();
            var unitTag = $(this).find('input[name="_wpcf7_unit_tag"]').val();
            $.getJSON(url, {
                _wpcf7_is_ajax_call: 1,
                _wpcf7: id,
                _wpcf7_request_ver: $.now()
            }, function(data) {
                if (data && data.captcha) {
                    $('#' + unitTag).wpcf7RefillCaptcha(data.captcha);
                }
                if (data && data.quiz) {
                    $('#' + unitTag).wpcf7RefillQuiz(data.quiz);
                }
            });
        });
    }
    ;
    $.fn.wpcf7RefillCaptcha = function(captcha) {
        return this.each(function() {
            var form = $(this);
            $.each(captcha, function(i, n) {
                form.find(':input[name="' + i + '"]').clearFields();
                form.find('img.wpcf7-captcha-' + i).attr('src', n);
                var match = /([0-9]+)\.(png|gif|jpeg)$/.exec(n);
                form.find('input:hidden[name="_wpcf7_captcha_challenge_' + i + '"]').attr('value', match[1]);
            });
        });
    }
    ;
    $.fn.wpcf7RefillQuiz = function(quiz) {
        return this.each(function() {
            var form = $(this);
            $.each(quiz, function(i, n) {
                form.find(':input[name="' + i + '"]').clearFields();
                form.find(':input[name="' + i + '"]').siblings('span.wpcf7-quiz-label').text(n[0]);
                form.find('input:hidden[name="_wpcf7_quiz_answer_' + i + '"]').attr('value', n[1]);
            });
        });
    }
    ;
    $.fn.wpcf7ClearResponseOutput = function() {
        return this.each(function() {
            $(this).find('div.wpcf7-response-output').hide().empty().removeClass('wpcf7-mail-sent-ok wpcf7-mail-sent-ng wpcf7-validation-errors wpcf7-spam-blocked').removeAttr('role');
            $(this).find('span.wpcf7-not-valid-tip').remove();
            $(this).find('.ajax-loader').removeClass('is-active');
        });
    }
    ;
    $.fn.wpcf7Recaptcha = function() {
        return this.each(function() {
            var events = 'wpcf7:spam wpcf7:mailsent wpcf7:mailfailed';
            $(this).closest('div.wpcf7').on(events, function(e) {
                if (recaptchaWidgets && grecaptcha) {
                    $.each(recaptchaWidgets, function(index, value) {
                        grecaptcha.reset(value);
                    });
                }
            });
        });
    }
    ;
    $.wpcf7UpdateScreenReaderResponse = function($form, data) {
        $('.wpcf7 .screen-reader-response').html('').attr('role', '');
        if (data.message) {
            var $response = $form.siblings('.screen-reader-response').first();
            $response.append(data.message);
            if (data.invalids) {
                var $invalids = $('<ul></ul>');
                $.each(data.invalids, function(i, n) {
                    if (n.idref) {
                        var $li = $('<li></li>').append($('<a></a>').attr('href', '#' + n.idref).append(n.message));
                    } else {
                        var $li = $('<li></li>').append(n.message);
                    }
                    $invalids.append($li);
                });
                $response.append($invalids);
            }
            $response.attr('role', 'alert').focus();
        }
    }
    ;
    $.wpcf7SupportHtml5 = function() {
        var features = {};
        var input = document.createElement('input');
        features.placeholder = 'placeholder'in input;
        var inputTypes = ['email', 'url', 'tel', 'number', 'range', 'date'];
        $.each(inputTypes, function(index, value) {
            input.setAttribute('type', value);
            features[value] = input.type !== 'text';
        });
        return features;
    }
    ;
    $(function() {
        _wpcf7.supportHtml5 = $.wpcf7SupportHtml5();
        $('div.wpcf7 > form').wpcf7InitForm();
    });
}
)(jQuery);
(function() {
    if (typeof window.CustomEvent === "function")
        return false;
    function CustomEvent(event, params) {
        params = params || {
            bubbles: false,
            cancelable: false,
            detail: undefined
        };
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
    }
    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent;
}
)();
!function(t, e, a) {
    (e[a] = e[a] || []).push(function() {
        try {
            e.yaCounter20132791 = new Ya.Metrika({
                id: 20132791,
                webvisor: !0,
                clickmap: !0,
                trackLinks: !0,
                accurateTrackBounce: !0
            })
        } catch (t) {}
    });
    var c = t.getElementsByTagName("script")[0]
      , n = t.createElement("script")
      , r = function() {
        c.parentNode.insertBefore(n, c)
    };
    n.async = !0,
    n.src = ("https:" == t.location.protocol ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js",
    "[object Opera]" == e.opera ? t.addEventListener("DOMContentLoaded", r, !1) : r()
}(document, window, "yandex_metrika_callbacks");
!function(e, a, t) {
    (a[t] = a[t] || []).push(function() {
        try {
            a.yaCounter48559898 = new Ya.Metrika({
                id: 48559898,
                clickmap: !0,
                trackLinks: !0,
                accurateTrackBounce: !0,
                webvisor: !0
            })
        } catch (e) {}
    });
    var c = e.getElementsByTagName("script")[0]
      , n = e.createElement("script")
      , r = function() {
        c.parentNode.insertBefore(n, c)
    };
    n.async = !0,
    n.src = "//mc.yandex.ru/metrika/watch.js",
    "[object Opera]" == a.opera ? e.addEventListener("DOMContentLoaded", r, !1) : r()
}(document, window, "yandex_metrika_callbacks");
function gtag() {
    dataLayer.push(arguments)
}
window.dataLayer = window.dataLayer || [],
gtag("js", new Date),
gtag("config", "UA-103134960-1");
!function(e, t, r) {
    window.supportAPIMethod = r;
    var n = e.createElement("script");
    n.id = "supportScript",
    n.charset = "utf-8",
    n.async = !0;
    n.src = "//me-talk.ru/support/support.js?h=941bfc8f57587c2f1069d947328b3e9e";
    var p = e.getElementsByTagName("script")[0];
    t[r] = t[r] || function() {
        (t[r].q = t[r].q || []).push(arguments)
    }
    ,
    p ? p.parentNode.insertBefore(n, p) : e.documentElement.firstChild.appendChild(n)
}(document, window, "MeTalk");
