(() => {
    var e = {
            674: function (e) {
                e.exports = (function () {
                    "use strict";
                    function e(t) {
                        return (
                            (e =
                                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                                    ? function (e) {
                                        return typeof e;
                                    }
                                    : function (e) {
                                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                    }),
                                e(t)
                        );
                    }
                    function t(e, n) {
                        return (
                            (t =
                                Object.setPrototypeOf ||
                                function (e, t) {
                                    return (e.__proto__ = t), e;
                                }),
                                t(e, n)
                        );
                    }
                    function n(e, r, o) {
                        return (
                            (n = (function () {
                                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                                if (Reflect.construct.sham) return !1;
                                if ("function" == typeof Proxy) return !0;
                                try {
                                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                                } catch (e) {
                                    return !1;
                                }
                            })()
                                ? Reflect.construct
                                : function (e, n, r) {
                                    var o = [null];
                                    o.push.apply(o, n);
                                    var a = new (Function.bind.apply(e, o))();
                                    return r && t(a, r.prototype), a;
                                }),
                                n.apply(null, arguments)
                        );
                    }
                    function r(e) {
                        return (
                            (function (e) {
                                if (Array.isArray(e)) return o(e);
                            })(e) ||
                            (function (e) {
                                if (("undefined" != typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"]) return Array.from(e);
                            })(e) ||
                            (function (e, t) {
                                if (e) {
                                    if ("string" == typeof e) return o(e, t);
                                    var n = Object.prototype.toString.call(e).slice(8, -1);
                                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(e, t) : void 0;
                                }
                            })(e) ||
                            (function () {
                                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                            })()
                        );
                    }
                    function o(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                        return r;
                    }
                    var a = Object.hasOwnProperty,
                        i = Object.setPrototypeOf,
                        l = Object.isFrozen,
                        c = Object.getPrototypeOf,
                        s = Object.getOwnPropertyDescriptor,
                        u = Object.freeze,
                        m = Object.seal,
                        f = Object.create,
                        p = "undefined" != typeof Reflect && Reflect,
                        d = p.apply,
                        h = p.construct;
                    d ||
                    (d = function (e, t, n) {
                        return e.apply(t, n);
                    }),
                    u ||
                    (u = function (e) {
                        return e;
                    }),
                    m ||
                    (m = function (e) {
                        return e;
                    }),
                    h ||
                    (h = function (e, t) {
                        return n(e, r(t));
                    });
                    var g,
                        y = O(Array.prototype.forEach),
                        b = O(Array.prototype.pop),
                        v = O(Array.prototype.push),
                        T = O(String.prototype.toLowerCase),
                        E = O(String.prototype.toString),
                        N = O(String.prototype.match),
                        w = O(String.prototype.replace),
                        A = O(String.prototype.indexOf),
                        _ = O(String.prototype.trim),
                        S = O(RegExp.prototype.test),
                        x =
                            ((g = TypeError),
                                function () {
                                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                    return h(g, t);
                                });
                    function O(e) {
                        return function (t) {
                            for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
                            return d(e, t, r);
                        };
                    }
                    function L(e, t, n) {
                        var r;
                        (n = null !== (r = n) && void 0 !== r ? r : T), i && i(e, null);
                        for (var o = t.length; o--; ) {
                            var a = t[o];
                            if ("string" == typeof a) {
                                var c = n(a);
                                c !== a && (l(t) || (t[o] = c), (a = c));
                            }
                            e[a] = !0;
                        }
                        return e;
                    }
                    function k(e) {
                        var t,
                            n = f(null);
                        for (t in e) !0 === d(a, e, [t]) && (n[t] = e[t]);
                        return n;
                    }
                    function R(e, t) {
                        for (; null !== e; ) {
                            var n = s(e, t);
                            if (n) {
                                if (n.get) return O(n.get);
                                if ("function" == typeof n.value) return O(n.value);
                            }
                            e = c(e);
                        }
                        return function (e) {
                            return console.warn("fallback value for", e), null;
                        };
                    }
                    var D = u([
                            "a",
                            "abbr",
                            "acronym",
                            "address",
                            "area",
                            "article",
                            "aside",
                            "audio",
                            "b",
                            "bdi",
                            "bdo",
                            "big",
                            "blink",
                            "blockquote",
                            "body",
                            "br",
                            "button",
                            "canvas",
                            "caption",
                            "center",
                            "cite",
                            "code",
                            "col",
                            "colgroup",
                            "content",
                            "data",
                            "datalist",
                            "dd",
                            "decorator",
                            "del",
                            "details",
                            "dfn",
                            "dialog",
                            "dir",
                            "div",
                            "dl",
                            "dt",
                            "element",
                            "em",
                            "fieldset",
                            "figcaption",
                            "figure",
                            "font",
                            "footer",
                            "form",
                            "h1",
                            "h2",
                            "h3",
                            "h4",
                            "h5",
                            "h6",
                            "head",
                            "header",
                            "hgroup",
                            "hr",
                            "html",
                            "i",
                            "img",
                            "input",
                            "ins",
                            "kbd",
                            "label",
                            "legend",
                            "li",
                            "main",
                            "map",
                            "mark",
                            "marquee",
                            "menu",
                            "menuitem",
                            "meter",
                            "nav",
                            "nobr",
                            "ol",
                            "optgroup",
                            "option",
                            "output",
                            "p",
                            "picture",
                            "pre",
                            "progress",
                            "q",
                            "rp",
                            "rt",
                            "ruby",
                            "s",
                            "samp",
                            "section",
                            "select",
                            "shadow",
                            "small",
                            "source",
                            "spacer",
                            "span",
                            "strike",
                            "strong",
                            "style",
                            "sub",
                            "summary",
                            "sup",
                            "table",
                            "tbody",
                            "td",
                            "template",
                            "textarea",
                            "tfoot",
                            "th",
                            "thead",
                            "time",
                            "tr",
                            "track",
                            "tt",
                            "u",
                            "ul",
                            "var",
                            "video",
                            "wbr",
                        ]),
                        M = u([
                            "svg",
                            "a",
                            "altglyph",
                            "altglyphdef",
                            "altglyphitem",
                            "animatecolor",
                            "animatemotion",
                            "animatetransform",
                            "circle",
                            "clippath",
                            "defs",
                            "desc",
                            "ellipse",
                            "filter",
                            "font",
                            "g",
                            "glyph",
                            "glyphref",
                            "hkern",
                            "image",
                            "line",
                            "lineargradient",
                            "marker",
                            "mask",
                            "metadata",
                            "mpath",
                            "path",
                            "pattern",
                            "polygon",
                            "polyline",
                            "radialgradient",
                            "rect",
                            "stop",
                            "style",
                            "switch",
                            "symbol",
                            "text",
                            "textpath",
                            "title",
                            "tref",
                            "tspan",
                            "view",
                            "vkern",
                        ]),
                        C = u([
                            "feBlend",
                            "feColorMatrix",
                            "feComponentTransfer",
                            "feComposite",
                            "feConvolveMatrix",
                            "feDiffuseLighting",
                            "feDisplacementMap",
                            "feDistantLight",
                            "feFlood",
                            "feFuncA",
                            "feFuncB",
                            "feFuncG",
                            "feFuncR",
                            "feGaussianBlur",
                            "feImage",
                            "feMerge",
                            "feMergeNode",
                            "feMorphology",
                            "feOffset",
                            "fePointLight",
                            "feSpecularLighting",
                            "feSpotLight",
                            "feTile",
                            "feTurbulence",
                        ]),
                        I = u([
                            "animate",
                            "color-profile",
                            "cursor",
                            "discard",
                            "fedropshadow",
                            "font-face",
                            "font-face-format",
                            "font-face-name",
                            "font-face-src",
                            "font-face-uri",
                            "foreignobject",
                            "hatch",
                            "hatchpath",
                            "mesh",
                            "meshgradient",
                            "meshpatch",
                            "meshrow",
                            "missing-glyph",
                            "script",
                            "set",
                            "solidcolor",
                            "unknown",
                            "use",
                        ]),
                        F = u([
                            "math",
                            "menclose",
                            "merror",
                            "mfenced",
                            "mfrac",
                            "mglyph",
                            "mi",
                            "mlabeledtr",
                            "mmultiscripts",
                            "mn",
                            "mo",
                            "mover",
                            "mpadded",
                            "mphantom",
                            "mroot",
                            "mrow",
                            "ms",
                            "mspace",
                            "msqrt",
                            "mstyle",
                            "msub",
                            "msup",
                            "msubsup",
                            "mtable",
                            "mtd",
                            "mtext",
                            "mtr",
                            "munder",
                            "munderover",
                        ]),
                        H = u(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]),
                        U = u(["#text"]),
                        z = u([
                            "accept",
                            "action",
                            "align",
                            "alt",
                            "autocapitalize",
                            "autocomplete",
                            "autopictureinpicture",
                            "autoplay",
                            "background",
                            "bgcolor",
                            "border",
                            "capture",
                            "cellpadding",
                            "cellspacing",
                            "checked",
                            "cite",
                            "class",
                            "clear",
                            "color",
                            "cols",
                            "colspan",
                            "controls",
                            "controlslist",
                            "coords",
                            "crossorigin",
                            "datetime",
                            "decoding",
                            "default",
                            "dir",
                            "disabled",
                            "disablepictureinpicture",
                            "disableremoteplayback",
                            "download",
                            "draggable",
                            "enctype",
                            "enterkeyhint",
                            "face",
                            "for",
                            "headers",
                            "height",
                            "hidden",
                            "high",
                            "href",
                            "hreflang",
                            "id",
                            "inputmode",
                            "integrity",
                            "ismap",
                            "kind",
                            "label",
                            "lang",
                            "list",
                            "loading",
                            "loop",
                            "low",
                            "max",
                            "maxlength",
                            "media",
                            "method",
                            "min",
                            "minlength",
                            "multiple",
                            "muted",
                            "name",
                            "nonce",
                            "noshade",
                            "novalidate",
                            "nowrap",
                            "open",
                            "optimum",
                            "pattern",
                            "placeholder",
                            "playsinline",
                            "poster",
                            "preload",
                            "pubdate",
                            "radiogroup",
                            "readonly",
                            "rel",
                            "required",
                            "rev",
                            "reversed",
                            "role",
                            "rows",
                            "rowspan",
                            "spellcheck",
                            "scope",
                            "selected",
                            "shape",
                            "size",
                            "sizes",
                            "span",
                            "srclang",
                            "start",
                            "src",
                            "srcset",
                            "step",
                            "style",
                            "summary",
                            "tabindex",
                            "title",
                            "translate",
                            "type",
                            "usemap",
                            "valign",
                            "value",
                            "width",
                            "xmlns",
                            "slot",
                        ]),
                        P = u([
                            "accent-height",
                            "accumulate",
                            "additive",
                            "alignment-baseline",
                            "ascent",
                            "attributename",
                            "attributetype",
                            "azimuth",
                            "basefrequency",
                            "baseline-shift",
                            "begin",
                            "bias",
                            "by",
                            "class",
                            "clip",
                            "clippathunits",
                            "clip-path",
                            "clip-rule",
                            "color",
                            "color-interpolation",
                            "color-interpolation-filters",
                            "color-profile",
                            "color-rendering",
                            "cx",
                            "cy",
                            "d",
                            "dx",
                            "dy",
                            "diffuseconstant",
                            "direction",
                            "display",
                            "divisor",
                            "dur",
                            "edgemode",
                            "elevation",
                            "end",
                            "fill",
                            "fill-opacity",
                            "fill-rule",
                            "filter",
                            "filterunits",
                            "flood-color",
                            "flood-opacity",
                            "font-family",
                            "font-size",
                            "font-size-adjust",
                            "font-stretch",
                            "font-style",
                            "font-variant",
                            "font-weight",
                            "fx",
                            "fy",
                            "g1",
                            "g2",
                            "glyph-name",
                            "glyphref",
                            "gradientunits",
                            "gradienttransform",
                            "height",
                            "href",
                            "id",
                            "image-rendering",
                            "in",
                            "in2",
                            "k",
                            "k1",
                            "k2",
                            "k3",
                            "k4",
                            "kerning",
                            "keypoints",
                            "keysplines",
                            "keytimes",
                            "lang",
                            "lengthadjust",
                            "letter-spacing",
                            "kernelmatrix",
                            "kernelunitlength",
                            "lighting-color",
                            "local",
                            "marker-end",
                            "marker-mid",
                            "marker-start",
                            "markerheight",
                            "markerunits",
                            "markerwidth",
                            "maskcontentunits",
                            "maskunits",
                            "max",
                            "mask",
                            "media",
                            "method",
                            "mode",
                            "min",
                            "name",
                            "numoctaves",
                            "offset",
                            "operator",
                            "opacity",
                            "order",
                            "orient",
                            "orientation",
                            "origin",
                            "overflow",
                            "paint-order",
                            "path",
                            "pathlength",
                            "patterncontentunits",
                            "patterntransform",
                            "patternunits",
                            "points",
                            "preservealpha",
                            "preserveaspectratio",
                            "primitiveunits",
                            "r",
                            "rx",
                            "ry",
                            "radius",
                            "refx",
                            "refy",
                            "repeatcount",
                            "repeatdur",
                            "restart",
                            "result",
                            "rotate",
                            "scale",
                            "seed",
                            "shape-rendering",
                            "specularconstant",
                            "specularexponent",
                            "spreadmethod",
                            "startoffset",
                            "stddeviation",
                            "stitchtiles",
                            "stop-color",
                            "stop-opacity",
                            "stroke-dasharray",
                            "stroke-dashoffset",
                            "stroke-linecap",
                            "stroke-linejoin",
                            "stroke-miterlimit",
                            "stroke-opacity",
                            "stroke",
                            "stroke-width",
                            "style",
                            "surfacescale",
                            "systemlanguage",
                            "tabindex",
                            "targetx",
                            "targety",
                            "transform",
                            "transform-origin",
                            "text-anchor",
                            "text-decoration",
                            "text-rendering",
                            "textlength",
                            "type",
                            "u1",
                            "u2",
                            "unicode",
                            "values",
                            "viewbox",
                            "visibility",
                            "version",
                            "vert-adv-y",
                            "vert-origin-x",
                            "vert-origin-y",
                            "width",
                            "word-spacing",
                            "wrap",
                            "writing-mode",
                            "xchannelselector",
                            "ychannelselector",
                            "x",
                            "x1",
                            "x2",
                            "xmlns",
                            "y",
                            "y1",
                            "y2",
                            "z",
                            "zoomandpan",
                        ]),
                        B = u([
                            "accent",
                            "accentunder",
                            "align",
                            "bevelled",
                            "close",
                            "columnsalign",
                            "columnlines",
                            "columnspan",
                            "denomalign",
                            "depth",
                            "dir",
                            "display",
                            "displaystyle",
                            "encoding",
                            "fence",
                            "frame",
                            "height",
                            "href",
                            "id",
                            "largeop",
                            "length",
                            "linethickness",
                            "lspace",
                            "lquote",
                            "mathbackground",
                            "mathcolor",
                            "mathsize",
                            "mathvariant",
                            "maxsize",
                            "minsize",
                            "movablelimits",
                            "notation",
                            "numalign",
                            "open",
                            "rowalign",
                            "rowlines",
                            "rowspacing",
                            "rowspan",
                            "rspace",
                            "rquote",
                            "scriptlevel",
                            "scriptminsize",
                            "scriptsizemultiplier",
                            "selection",
                            "separator",
                            "separators",
                            "stretchy",
                            "subscriptshift",
                            "supscriptshift",
                            "symmetric",
                            "voffset",
                            "width",
                            "xmlns",
                        ]),
                        j = u(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
                        W = m(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
                        G = m(/<%[\w\W]*|[\w\W]*%>/gm),
                        q = m(/\${[\w\W]*}/gm),
                        Y = m(/^data-[\-\w.\u00B7-\uFFFF]/),
                        $ = m(/^aria-[\-\w]+$/),
                        K = m(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
                        V = m(/^(?:\w+script|data):/i),
                        X = m(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
                        Z = m(/^html$/i),
                        J = m(/^[a-z][.\w]*(-[.\w]+)+$/i),
                        Q = function () {
                            return "undefined" == typeof window ? null : window;
                        };
                    return (function t() {
                        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Q(),
                            o = function (e) {
                                return t(e);
                            };
                        if (((o.version = "2.5.7"), (o.removed = []), !n || !n.document || 9 !== n.document.nodeType)) return (o.isSupported = !1), o;
                        var a = n.document,
                            i = n.document,
                            l = n.DocumentFragment,
                            c = n.HTMLTemplateElement,
                            s = n.Node,
                            m = n.Element,
                            f = n.NodeFilter,
                            p = n.NamedNodeMap,
                            d = void 0 === p ? n.NamedNodeMap || n.MozNamedAttrMap : p,
                            h = n.HTMLFormElement,
                            g = n.DOMParser,
                            O = n.trustedTypes,
                            ee = m.prototype,
                            te = R(ee, "cloneNode"),
                            ne = R(ee, "nextSibling"),
                            re = R(ee, "childNodes"),
                            oe = R(ee, "parentNode");
                        if ("function" == typeof c) {
                            var ae = i.createElement("template");
                            ae.content && ae.content.ownerDocument && (i = ae.content.ownerDocument);
                        }
                        var ie = (function (t, n) {
                                if ("object" !== e(t) || "function" != typeof t.createPolicy) return null;
                                var r = null,
                                    o = "data-tt-policy-suffix";
                                n.currentScript && n.currentScript.hasAttribute(o) && (r = n.currentScript.getAttribute(o));
                                var a = "dompurify" + (r ? "#" + r : "");
                                try {
                                    return t.createPolicy(a, {
                                        createHTML: function (e) {
                                            return e;
                                        },
                                        createScriptURL: function (e) {
                                            return e;
                                        },
                                    });
                                } catch (e) {
                                    return console.warn("TrustedTypes policy " + a + " could not be created."), null;
                                }
                            })(O, a),
                            le = ie ? ie.createHTML("") : "",
                            ce = i,
                            se = ce.implementation,
                            ue = ce.createNodeIterator,
                            me = ce.createDocumentFragment,
                            fe = ce.getElementsByTagName,
                            pe = a.importNode,
                            de = {};
                        try {
                            de = k(i).documentMode ? i.documentMode : {};
                        } catch (e) {}
                        var he = {};
                        o.isSupported = "function" == typeof oe && se && void 0 !== se.createHTMLDocument && 9 !== de;
                        var ge,
                            ye,
                            be = W,
                            ve = G,
                            Te = q,
                            Ee = Y,
                            Ne = $,
                            we = V,
                            Ae = X,
                            _e = J,
                            Se = K,
                            xe = null,
                            Oe = L({}, [].concat(r(D), r(M), r(C), r(F), r(U))),
                            Le = null,
                            ke = L({}, [].concat(r(z), r(P), r(B), r(j))),
                            Re = Object.seal(
                                Object.create(null, {
                                    tagNameCheck: { writable: !0, configurable: !1, enumerable: !0, value: null },
                                    attributeNameCheck: { writable: !0, configurable: !1, enumerable: !0, value: null },
                                    allowCustomizedBuiltInElements: { writable: !0, configurable: !1, enumerable: !0, value: !1 },
                                })
                            ),
                            De = null,
                            Me = null,
                            Ce = !0,
                            Ie = !0,
                            Fe = !1,
                            He = !0,
                            Ue = !1,
                            ze = !0,
                            Pe = !1,
                            Be = !1,
                            je = !1,
                            We = !1,
                            Ge = !1,
                            qe = !1,
                            Ye = !0,
                            $e = !1,
                            Ke = !0,
                            Ve = !1,
                            Xe = {},
                            Ze = null,
                            Je = L({}, [
                                "annotation-xml",
                                "audio",
                                "colgroup",
                                "desc",
                                "foreignobject",
                                "head",
                                "iframe",
                                "math",
                                "mi",
                                "mn",
                                "mo",
                                "ms",
                                "mtext",
                                "noembed",
                                "noframes",
                                "noscript",
                                "plaintext",
                                "script",
                                "style",
                                "svg",
                                "template",
                                "thead",
                                "title",
                                "video",
                                "xmp",
                            ]),
                            Qe = null,
                            et = L({}, ["audio", "video", "img", "source", "image", "track"]),
                            tt = null,
                            nt = L({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]),
                            rt = "http://www.w3.org/1998/Math/MathML",
                            ot = "http://www.w3.org/2000/svg",
                            at = "http://www.w3.org/1999/xhtml",
                            it = at,
                            lt = !1,
                            ct = null,
                            st = L({}, [rt, ot, at], E),
                            ut = ["application/xhtml+xml", "text/html"],
                            mt = null,
                            ft = i.createElement("form"),
                            pt = function (e) {
                                return e instanceof RegExp || e instanceof Function;
                            },
                            dt = function (t) {
                                (mt && mt === t) ||
                                ((t && "object" === e(t)) || (t = {}),
                                    (t = k(t)),
                                    (ge = ge = -1 === ut.indexOf(t.PARSER_MEDIA_TYPE) ? "text/html" : t.PARSER_MEDIA_TYPE),
                                    (ye = "application/xhtml+xml" === ge ? E : T),
                                    (xe = "ALLOWED_TAGS" in t ? L({}, t.ALLOWED_TAGS, ye) : Oe),
                                    (Le = "ALLOWED_ATTR" in t ? L({}, t.ALLOWED_ATTR, ye) : ke),
                                    (ct = "ALLOWED_NAMESPACES" in t ? L({}, t.ALLOWED_NAMESPACES, E) : st),
                                    (tt = "ADD_URI_SAFE_ATTR" in t ? L(k(nt), t.ADD_URI_SAFE_ATTR, ye) : nt),
                                    (Qe = "ADD_DATA_URI_TAGS" in t ? L(k(et), t.ADD_DATA_URI_TAGS, ye) : et),
                                    (Ze = "FORBID_CONTENTS" in t ? L({}, t.FORBID_CONTENTS, ye) : Je),
                                    (De = "FORBID_TAGS" in t ? L({}, t.FORBID_TAGS, ye) : {}),
                                    (Me = "FORBID_ATTR" in t ? L({}, t.FORBID_ATTR, ye) : {}),
                                    (Xe = "USE_PROFILES" in t && t.USE_PROFILES),
                                    (Ce = !1 !== t.ALLOW_ARIA_ATTR),
                                    (Ie = !1 !== t.ALLOW_DATA_ATTR),
                                    (Fe = t.ALLOW_UNKNOWN_PROTOCOLS || !1),
                                    (He = !1 !== t.ALLOW_SELF_CLOSE_IN_ATTR),
                                    (Ue = t.SAFE_FOR_TEMPLATES || !1),
                                    (ze = !1 !== t.SAFE_FOR_XML),
                                    (Pe = t.WHOLE_DOCUMENT || !1),
                                    (We = t.RETURN_DOM || !1),
                                    (Ge = t.RETURN_DOM_FRAGMENT || !1),
                                    (qe = t.RETURN_TRUSTED_TYPE || !1),
                                    (je = t.FORCE_BODY || !1),
                                    (Ye = !1 !== t.SANITIZE_DOM),
                                    ($e = t.SANITIZE_NAMED_PROPS || !1),
                                    (Ke = !1 !== t.KEEP_CONTENT),
                                    (Ve = t.IN_PLACE || !1),
                                    (Se = t.ALLOWED_URI_REGEXP || Se),
                                    (it = t.NAMESPACE || at),
                                    (Re = t.CUSTOM_ELEMENT_HANDLING || {}),
                                t.CUSTOM_ELEMENT_HANDLING && pt(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (Re.tagNameCheck = t.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
                                t.CUSTOM_ELEMENT_HANDLING && pt(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (Re.attributeNameCheck = t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
                                t.CUSTOM_ELEMENT_HANDLING && "boolean" == typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (Re.allowCustomizedBuiltInElements = t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
                                Ue && (Ie = !1),
                                Ge && (We = !0),
                                Xe &&
                                ((xe = L({}, r(U))),
                                    (Le = []),
                                !0 === Xe.html && (L(xe, D), L(Le, z)),
                                !0 === Xe.svg && (L(xe, M), L(Le, P), L(Le, j)),
                                !0 === Xe.svgFilters && (L(xe, C), L(Le, P), L(Le, j)),
                                !0 === Xe.mathMl && (L(xe, F), L(Le, B), L(Le, j))),
                                t.ADD_TAGS && (xe === Oe && (xe = k(xe)), L(xe, t.ADD_TAGS, ye)),
                                t.ADD_ATTR && (Le === ke && (Le = k(Le)), L(Le, t.ADD_ATTR, ye)),
                                t.ADD_URI_SAFE_ATTR && L(tt, t.ADD_URI_SAFE_ATTR, ye),
                                t.FORBID_CONTENTS && (Ze === Je && (Ze = k(Ze)), L(Ze, t.FORBID_CONTENTS, ye)),
                                Ke && (xe["#text"] = !0),
                                Pe && L(xe, ["html", "head", "body"]),
                                xe.table && (L(xe, ["tbody"]), delete De.tbody),
                                u && u(t),
                                    (mt = t));
                            },
                            ht = L({}, ["mi", "mo", "mn", "ms", "mtext"]),
                            gt = L({}, ["annotation-xml"]),
                            yt = L({}, ["title", "style", "font", "a", "script"]),
                            bt = L({}, M);
                        L(bt, C), L(bt, I);
                        var vt = L({}, F);
                        L(vt, H);
                        var Tt = function (e) {
                                v(o.removed, { element: e });
                                try {
                                    e.parentNode.removeChild(e);
                                } catch (t) {
                                    try {
                                        e.outerHTML = le;
                                    } catch (t) {
                                        e.remove();
                                    }
                                }
                            },
                            Et = function (e, t) {
                                try {
                                    v(o.removed, { attribute: t.getAttributeNode(e), from: t });
                                } catch (e) {
                                    v(o.removed, { attribute: null, from: t });
                                }
                                if ((t.removeAttribute(e), "is" === e && !Le[e]))
                                    if (We || Ge)
                                        try {
                                            Tt(t);
                                        } catch (e) {}
                                    else
                                        try {
                                            t.setAttribute(e, "");
                                        } catch (e) {}
                            },
                            Nt = function (e) {
                                var t, n;
                                if (je) e = "<remove></remove>" + e;
                                else {
                                    var r = N(e, /^[\r\n\t ]+/);
                                    n = r && r[0];
                                }
                                "application/xhtml+xml" === ge && it === at && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
                                var o = ie ? ie.createHTML(e) : e;
                                if (it === at)
                                    try {
                                        t = new g().parseFromString(o, ge);
                                    } catch (e) {}
                                if (!t || !t.documentElement) {
                                    t = se.createDocument(it, "template", null);
                                    try {
                                        t.documentElement.innerHTML = lt ? le : o;
                                    } catch (e) {}
                                }
                                var a = t.body || t.documentElement;
                                return e && n && a.insertBefore(i.createTextNode(n), a.childNodes[0] || null), it === at ? fe.call(t, Pe ? "html" : "body")[0] : Pe ? t.documentElement : a;
                            },
                            wt = function (e) {
                                return ue.call(e.ownerDocument || e, e, f.SHOW_ELEMENT | f.SHOW_COMMENT | f.SHOW_TEXT | f.SHOW_PROCESSING_INSTRUCTION | f.SHOW_CDATA_SECTION, null, !1);
                            },
                            At = function (e) {
                                return (
                                    e instanceof h &&
                                    ("string" != typeof e.nodeName ||
                                        "string" != typeof e.textContent ||
                                        "function" != typeof e.removeChild ||
                                        !(e.attributes instanceof d) ||
                                        "function" != typeof e.removeAttribute ||
                                        "function" != typeof e.setAttribute ||
                                        "string" != typeof e.namespaceURI ||
                                        "function" != typeof e.insertBefore ||
                                        "function" != typeof e.hasChildNodes)
                                );
                            },
                            _t = function (t) {
                                return "object" === e(s) ? t instanceof s : t && "object" === e(t) && "number" == typeof t.nodeType && "string" == typeof t.nodeName;
                            },
                            St = function (e, t, n) {
                                he[e] &&
                                y(he[e], function (e) {
                                    e.call(o, t, n, mt);
                                });
                            },
                            xt = function (e) {
                                var t;
                                if ((St("beforeSanitizeElements", e, null), At(e))) return Tt(e), !0;
                                if (S(/[\u0080-\uFFFF]/, e.nodeName)) return Tt(e), !0;
                                var n = ye(e.nodeName);
                                if (
                                    (St("uponSanitizeElement", e, { tagName: n, allowedTags: xe }),
                                    e.hasChildNodes() && !_t(e.firstElementChild) && (!_t(e.content) || !_t(e.content.firstElementChild)) && S(/<[/\w]/g, e.innerHTML) && S(/<[/\w]/g, e.textContent))
                                )
                                    return Tt(e), !0;
                                if ("select" === n && S(/<template/i, e.innerHTML)) return Tt(e), !0;
                                if (7 === e.nodeType) return Tt(e), !0;
                                if (ze && 8 === e.nodeType && S(/<[/\w]/g, e.data)) return Tt(e), !0;
                                if (!xe[n] || De[n]) {
                                    if (!De[n] && Lt(n)) {
                                        if (Re.tagNameCheck instanceof RegExp && S(Re.tagNameCheck, n)) return !1;
                                        if (Re.tagNameCheck instanceof Function && Re.tagNameCheck(n)) return !1;
                                    }
                                    if (Ke && !Ze[n]) {
                                        var r = oe(e) || e.parentNode,
                                            a = re(e) || e.childNodes;
                                        if (a && r)
                                            for (var i = a.length - 1; i >= 0; --i) {
                                                var l = te(a[i], !0);
                                                (l.__removalCount = (e.__removalCount || 0) + 1), r.insertBefore(l, ne(e));
                                            }
                                    }
                                    return Tt(e), !0;
                                }
                                return e instanceof m &&
                                !(function (e) {
                                    var t = oe(e);
                                    (t && t.tagName) || (t = { namespaceURI: it, tagName: "template" });
                                    var n = T(e.tagName),
                                        r = T(t.tagName);
                                    return (
                                        !!ct[e.namespaceURI] &&
                                        (e.namespaceURI === ot
                                            ? t.namespaceURI === at
                                                ? "svg" === n
                                                : t.namespaceURI === rt
                                                    ? "svg" === n && ("annotation-xml" === r || ht[r])
                                                    : Boolean(bt[n])
                                            : e.namespaceURI === rt
                                                ? t.namespaceURI === at
                                                    ? "math" === n
                                                    : t.namespaceURI === ot
                                                        ? "math" === n && gt[r]
                                                        : Boolean(vt[n])
                                                : e.namespaceURI === at
                                                    ? !(t.namespaceURI === ot && !gt[r]) && !(t.namespaceURI === rt && !ht[r]) && !vt[n] && (yt[n] || !bt[n])
                                                    : !("application/xhtml+xml" !== ge || !ct[e.namespaceURI]))
                                    );
                                })(e)
                                    ? (Tt(e), !0)
                                    : ("noscript" !== n && "noembed" !== n && "noframes" !== n) || !S(/<\/no(script|embed|frames)/i, e.innerHTML)
                                        ? (Ue && 3 === e.nodeType && ((t = e.textContent), (t = w(t, be, " ")), (t = w(t, ve, " ")), (t = w(t, Te, " ")), e.textContent !== t && (v(o.removed, { element: e.cloneNode() }), (e.textContent = t))),
                                            St("afterSanitizeElements", e, null),
                                            !1)
                                        : (Tt(e), !0);
                            },
                            Ot = function (e, t, n) {
                                if (Ye && ("id" === t || "name" === t) && (n in i || n in ft)) return !1;
                                if (Ie && !Me[t] && S(Ee, t));
                                else if (Ce && S(Ne, t));
                                else if (!Le[t] || Me[t]) {
                                    if (
                                        !(
                                            (Lt(e) &&
                                                ((Re.tagNameCheck instanceof RegExp && S(Re.tagNameCheck, e)) || (Re.tagNameCheck instanceof Function && Re.tagNameCheck(e))) &&
                                                ((Re.attributeNameCheck instanceof RegExp && S(Re.attributeNameCheck, t)) || (Re.attributeNameCheck instanceof Function && Re.attributeNameCheck(t)))) ||
                                            ("is" === t && Re.allowCustomizedBuiltInElements && ((Re.tagNameCheck instanceof RegExp && S(Re.tagNameCheck, n)) || (Re.tagNameCheck instanceof Function && Re.tagNameCheck(n))))
                                        )
                                    )
                                        return !1;
                                } else if (tt[t]);
                                else if (S(Se, w(n, Ae, "")));
                                else if (("src" !== t && "xlink:href" !== t && "href" !== t) || "script" === e || 0 !== A(n, "data:") || !Qe[e])
                                    if (Fe && !S(we, w(n, Ae, "")));
                                    else if (n) return !1;
                                return !0;
                            },
                            Lt = function (e) {
                                return "annotation-xml" !== e && N(e, _e);
                            },
                            kt = function (t) {
                                var n, r, a, i;
                                St("beforeSanitizeAttributes", t, null);
                                var l = t.attributes;
                                if (l) {
                                    var c = { attrName: "", attrValue: "", keepAttr: !0, allowedAttributes: Le };
                                    for (i = l.length; i--; ) {
                                        var s = (n = l[i]),
                                            u = s.name,
                                            m = s.namespaceURI;
                                        if (
                                            ((r = "value" === u ? n.value : _(n.value)),
                                                (a = ye(u)),
                                                (c.attrName = a),
                                                (c.attrValue = r),
                                                (c.keepAttr = !0),
                                                (c.forceKeepAttr = void 0),
                                                St("uponSanitizeAttribute", t, c),
                                                (r = c.attrValue),
                                            !c.forceKeepAttr && (Et(u, t), c.keepAttr))
                                        )
                                            if (He || !S(/\/>/i, r)) {
                                                Ue && ((r = w(r, be, " ")), (r = w(r, ve, " ")), (r = w(r, Te, " ")));
                                                var f = ye(t.nodeName);
                                                if (Ot(f, a, r))
                                                    if ((!$e || ("id" !== a && "name" !== a) || (Et(u, t), (r = "user-content-" + r)), ze && S(/((--!?|])>)|<\/(style|title)/i, r))) Et(u, t);
                                                    else {
                                                        if (ie && "object" === e(O) && "function" == typeof O.getAttributeType)
                                                            if (m);
                                                            else
                                                                switch (O.getAttributeType(f, a)) {
                                                                    case "TrustedHTML":
                                                                        r = ie.createHTML(r);
                                                                        break;
                                                                    case "TrustedScriptURL":
                                                                        r = ie.createScriptURL(r);
                                                                }
                                                        try {
                                                            m ? t.setAttributeNS(m, u, r) : t.setAttribute(u, r), At(t) ? Tt(t) : b(o.removed);
                                                        } catch (e) {}
                                                    }
                                            } else Et(u, t);
                                    }
                                    St("afterSanitizeAttributes", t, null);
                                }
                            },
                            Rt = function e(t) {
                                var n,
                                    r = wt(t);
                                for (St("beforeSanitizeShadowDOM", t, null); (n = r.nextNode()); ) St("uponSanitizeShadowNode", n, null), xt(n) || (n.content instanceof l && e(n.content), kt(n));
                                St("afterSanitizeShadowDOM", t, null);
                            };
                        return (
                            (o.sanitize = function (t) {
                                var r,
                                    i,
                                    c,
                                    u,
                                    m,
                                    f = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                if (((lt = !t) && (t = "\x3c!--\x3e"), "string" != typeof t && !_t(t))) {
                                    if ("function" != typeof t.toString) throw x("toString is not a function");
                                    if ("string" != typeof (t = t.toString())) throw x("dirty is not a string, aborting");
                                }
                                if (!o.isSupported) {
                                    if ("object" === e(n.toStaticHTML) || "function" == typeof n.toStaticHTML) {
                                        if ("string" == typeof t) return n.toStaticHTML(t);
                                        if (_t(t)) return n.toStaticHTML(t.outerHTML);
                                    }
                                    return t;
                                }
                                if ((Be || dt(f), (o.removed = []), "string" == typeof t && (Ve = !1), Ve)) {
                                    if (t.nodeName) {
                                        var p = ye(t.nodeName);
                                        if (!xe[p] || De[p]) throw x("root node is forbidden and cannot be sanitized in-place");
                                    }
                                } else if (t instanceof s) (1 === (i = (r = Nt("\x3c!----\x3e")).ownerDocument.importNode(t, !0)).nodeType && "BODY" === i.nodeName) || "HTML" === i.nodeName ? (r = i) : r.appendChild(i);
                                else {
                                    if (!We && !Ue && !Pe && -1 === t.indexOf("<")) return ie && qe ? ie.createHTML(t) : t;
                                    if (!(r = Nt(t))) return We ? null : qe ? le : "";
                                }
                                r && je && Tt(r.firstChild);
                                for (var d = wt(Ve ? t : r); (c = d.nextNode()); ) (3 === c.nodeType && c === u) || xt(c) || (c.content instanceof l && Rt(c.content), kt(c), (u = c));
                                if (((u = null), Ve)) return t;
                                if (We) {
                                    if (Ge) for (m = me.call(r.ownerDocument); r.firstChild; ) m.appendChild(r.firstChild);
                                    else m = r;
                                    return (Le.shadowroot || Le.shadowrootmod) && (m = pe.call(a, m, !0)), m;
                                }
                                var h = Pe ? r.outerHTML : r.innerHTML;
                                return (
                                    Pe && xe["!doctype"] && r.ownerDocument && r.ownerDocument.doctype && r.ownerDocument.doctype.name && S(Z, r.ownerDocument.doctype.name) && (h = "<!DOCTYPE " + r.ownerDocument.doctype.name + ">\n" + h),
                                    Ue && ((h = w(h, be, " ")), (h = w(h, ve, " ")), (h = w(h, Te, " "))),
                                        ie && qe ? ie.createHTML(h) : h
                                );
                            }),
                                (o.setConfig = function (e) {
                                    dt(e), (Be = !0);
                                }),
                                (o.clearConfig = function () {
                                    (mt = null), (Be = !1);
                                }),
                                (o.isValidAttribute = function (e, t, n) {
                                    mt || dt({});
                                    var r = ye(e),
                                        o = ye(t);
                                    return Ot(r, o, n);
                                }),
                                (o.addHook = function (e, t) {
                                    "function" == typeof t && ((he[e] = he[e] || []), v(he[e], t));
                                }),
                                (o.removeHook = function (e) {
                                    if (he[e]) return b(he[e]);
                                }),
                                (o.removeHooks = function (e) {
                                    he[e] && (he[e] = []);
                                }),
                                (o.removeAllHooks = function () {
                                    he = {};
                                }),
                                o
                        );
                    })();
                })();
            },
        },
        t = {};
    function n(r) {
        var o = t[r];
        if (void 0 !== o) return o.exports;
        var a = (t[r] = { exports: {} });
        return e[r].call(a.exports, a, a.exports, n), a.exports;
    }
    (n.n = (e) => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return n.d(t, { a: t }), t;
    }),
        (n.d = (e, t) => {
            for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        }),
        (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (() => {
            "use strict";
            const e = window.React,
                t = window.wc.wcBlocksRegistry,
                r = window.wp.i18n,
                o = window.wc.wcSettings,
                a = window.wp.htmlEntities;
            var i = n(674),
                l = n.n(i);
            const c = ["a", "b", "em", "i", "strong", "p", "br"],
                s = ["target", "href", "rel", "name", "download"],
                u = window.wp.element;
            var m;
            const f = (0, o.getPaymentMethodData)("cardgatebancontact", {}),
                p = (0, r.__)("Bancontact", "wc_payment_method_cardgatebancontact"),
                d = (0, a.decodeEntities)((null == f ? void 0 : f.title) || "") || p,
                h = () =>
                    (0, e.createElement)(
                        u.RawHTML,
                        null,
                        ((e) => {
                            const t = c,
                                n = s;
                            return l().sanitize(e, { ALLOWED_TAGS: t, ALLOWED_ATTR: n });
                        })(f.description || "")
                    ),
                g = {
                    name: "cardgatebancontact",
                    label: (0, e.createElement)((t) => {
                        var w = e.createElement("img", { src: f.icon, width: 28, height: 24, style: { display: "inline" } });
                        return f.show_icon || (w = null), e.createElement("span", { className: "wc-block-components-payment-method-label wc-block-components-payment-method-label--with-icon" }, w, (0, a.decodeEntities)(f.title) || p);
                    }, null),
                    content: (0, e.createElement)(h, null),
                    edit: (0, e.createElement)(h, null),
                    canMakePayment: () => !0,
                    ariaLabel: d,
                    supports: { features: null !== (m = null == f ? void 0 : f.supports) && void 0 !== m ? m : [] },
                };
            (0, t.registerPaymentMethod)(g);
        })();
})();
