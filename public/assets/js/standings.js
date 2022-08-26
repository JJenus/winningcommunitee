!(function (e) {
  function t(r) {
    if (n[r]) return n[r].exports;
    var o = (n[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
  }
  var n = {};
  (t.m = e),
    (t.c = n),
    (t.d = function (e, n, r) {
      t.o(e, n) ||
        Object.defineProperty(e, n, {
          configurable: !1,
          enumerable: !0,
          get: r,
        });
    }),
    (t.n = function (e) {
      var n =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return t.d(n, "a", n), n;
    }),
    (t.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (t.p = ""),
    t((t.s = 0));
})([
  function (e, t, n) {
    "use strict";
    function r(e, t) {
      if (!e) throw Error("API method required");
      if (((e = e.toLowerCase()), -1 === a.indexOf(e)))
        throw Error("Method ".concat(e, " is not supported"));
      switch (e) {
        case "params":
          Object(i.a)(t);
          break;
        default:
          console.warn("No handler defined for ".concat(e));
      }
    }
    function o(e, t) {
      for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
      return e;
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = (n(1), n(2)),
      a = ["params"];
    !(function (e) {
      var t = { showOdds: !1 },
        n = e[e.fsStandingsEmbed],
        i = n.q;
      if (i)
        for (var a = 0; a < i.length; a++)
          "init" == i[a][0].toLowerCase()
            ? (t = o(t, i[a][1]))
            : r(i[a][0], i[a][1]);
      (n = r), (n.configurations = t);
    })(window);
  },
  function (e, t, n) {
    "use strict";
  },
  function (e, t, n) {
    "use strict";
    function r(e) {
      var t = "https://footystats.org/e/standings?id=" + e.leagueID,
        n = document.createElement("div");
      (n.innerHTML = l.a),
        document
          .getElementById(e.elementID)
          .insertAdjacentElement("afterbegin", n);
      var r = document.getElementById("fsInsertRowsHere"),
        s = document.getElementById("replaceBadge"),
        f = document.getElementById("replaceTitle");
      (u.table = document.getElementById("fsEmbedTable")),
        (u.next = document.getElementById("fs-table-navigation-next")),
        (u.previous = document.getElementById("fs-table-navigation-previous")),
        fetch(t, { method: "GET", mode: "cors" })
          .then(function (e) {
            return e.json();
          })
          .then(function (e) {
            if (
              (e.image && s.setAttribute("src", e.image),
              e.league_url &&
                (f.setAttribute("href", e.league_url),
                f.setAttribute("target", "_blank"),
                f.setAttribute("rel", "nofollow")),
              e.title ? (f.innerHTML = e.title) : (f.innerHTML = "Not Found"),
              e.flag_url)
            ) {
              var t = document.createElement("img");
              t.classList.add("fs-country-flag"),
                t.setAttribute("src", e.flag_url),
                f.insertAdjacentElement("afterbegin", t);
            }
            for (var n in e)
              if (void 0 !== e[n].html) {
                var o = document.createElement("tr");
                o.classList.add("fs-table-row"),
                  (o.innerHTML = e[n].html),
                  r.insertAdjacentElement("beforeend", o),
                  i(),
                  a(u.page);
              }
          }),
        u.next.addEventListener("click", function () {
          u.page++, a(u.page);
        }),
        u.previous.addEventListener("click", function () {
          u.page--, a(u.page);
        }),
        i(),
        o(),
        a(u.page);
    }
    function o() {
      u.tableItems.forEach(function (e) {
        e.dataset.page > u.max && (u.max = e.dataset.page);
      });
    }
    function i() {
      u.tableItems = u.table.querySelectorAll("th,td");
    }
    function a(e) {
      0 == e
        ? u.previous.classList.add("fs-nav-disabled")
        : u.previous.classList.remove("fs-nav-disabled"),
        e == u.max
          ? u.next.classList.add("fs-nav-disabled")
          : u.next.classList.remove("fs-nav-disabled"),
        u.tableItems.forEach(function (t) {
          if (void 0 !== t.dataset.page) {
            var n = t.dataset.page;
            t.style.display = e == n ? "table-cell" : "none";
          }
        });
    }
    t.a = r;
    var s = n(3),
      l = n.n(s),
      f = n(4),
      c = (n.n(f), n(9)),
      u = (n.n(c), { page: 0, max: 0 });
  },
  function (e, t) {
    e.exports =
      '<div class="fs-embed-wrapper">\n\n  <div class="fs-embed-header">\n\n    <div class="fs-header-badge">\n      <img id="replaceBadge" alt="">\n    </div>\n\n    <div class="fs-header-title">\n      <a class="fs-strong-title" id=\'replaceTitle\'></a>\n      <div class="fs-medium-title">Standings</div>\n    </div>\n    <div class="fs-header-actions">\n      <div class="fs-header-actions-label">View More</div>\n      <div class="fs-header-table-navigation">\n        <a id=\'fs-table-navigation-previous\'></a>\n        <a id=\'fs-table-navigation-next\'></a>\n      </div>\n    </div>\n\n  </div>\n\n  <div class="fs-embed-body">\n    <table class="fs-embed-table" id="fsEmbedTable">\n      <thead>\n        <tr class="fs-embed-table-header">\n          <th class="fs-table-item rank">#</th>\n          <th class="fs-table-item team">Team</th>\n          <th class="fs-table-item fs-align-center" data-page="0">P</th>\n          <th class="fs-table-item fs-align-center" data-page="0">W</th>\n          <th class="fs-table-item fs-align-center" data-page="0">D</th>\n          <th class="fs-table-item fs-align-center" data-page="0">L</th>\n          <th class="fs-table-item fs-align-center" data-page="0">PTS</th>\n          <th class="fs-table-item fs-align-center" data-page="1">GF</th>\n          <th class="fs-table-item fs-align-center" data-page="1">GA</th>\n          <th class="fs-table-item fs-align-center" data-page="1">GD</th>\n          <th class="fs-table-item fs-align-center" data-page="1">PPG</th>\n        </tr>\n      </thead>\n      <tbody id=\'fsInsertRowsHere\'></tbody>\n    </table>\n    </div>\n  </div>\n\n</div>';
  },
  function (e, t, n) {
    var r = n(5);
    "string" == typeof r && (r = [[e.i, r, ""]]);
    var o = { hmr: !0 };
    o.transform = void 0;
    n(7)(r, o);
    r.locals && (e.exports = r.locals);
  },
  function (e, t, n) {
    (t = e.exports = n(6)(!1)),
      t.push([
        e.i,
        ".fs-embed-wrapper{width:100%;font-family:sans-serif;background:#fff;border:1px solid #d4d9df;box-shadow:0 1px 8px 0 rgba(0,0,0,.06);border-radius:10px;margin:10px 0}.fs-embed-wrapper *{line-height:normal!important;font-family:inherit!important;float:none!important}.fs-standings{font-size:14px}.fs-embed-header{background:transparent;position:relative;border-radius:10px 10px 0 0;box-shadow:0 1px 4px 0 rgba(19,40,71,.07),inset 0 -1px 0 0 rgba(58,94,141,.16);height:60px;display:flex;flex-wrap:no-wrap;align-items:center}.fs-embed-header .fs-header-badge{flex-shrink:0;width:60px;height:60px;display:flex;align-items:center;justify-content:center;border-right:1px solid #e0e6ed;margin-right:15px}.fs-embed-header .fs-header-badge img{width:40px;display:block;margin:auto}.fs-embed-header .fs-header-title{flex:1;max-width:calc(70% - 60px)}.fs-embed-header .fs-header-title,.fs-embed-header .fs-header-title *{display:inline-block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fs-embed-header .fs-header-title .fs-country-flag{display:inline;width:14px;margin-right:6px}.fs-embed-header .fs-header-title .fs-strong-title{display:block;width:100%;font-weight:700;color:#183053;margin-bottom:2px;text-decoration:none;font-size:14px}.fs-embed-header .fs-header-title .fs-medium-title{display:inline-block;max-width:100%;color:#47576e;font-size:12px}.fs-embed-header .fs-header-actions{text-align:right;position:absolute;top:5px;right:10px}.fs-embed-header .fs-header-actions .fs-header-actions-label{font-size:10px;text-transform:uppercase;font-weight:700;margin-bottom:4px;color:#278e20}.fs-embed-header .fs-header-actions .fs-header-table-navigation{list-style:none;padding:0;margin:0}.fs-embed-header .fs-header-actions .fs-header-table-navigation a{display:inline-block;background:#fff;height:30px;width:30px;color:#2c78e7;border-radius:100px;line-height:30px;text-align:center;text-decoration:none;border:1px solid rgba(35,101,179,.14);box-shadow:0 1px 4px 0 rgba(0,0,0,.09);background-repeat:no-repeat!important;background-size:12px!important;background-position:50% 49%!important;cursor:pointer}.fs-embed-header .fs-header-actions .fs-header-table-navigation a#fs-table-navigation-previous{background-image:url(https://cdn.footystats.org/fonts/font-awesome/solid/left.png)}.fs-embed-header .fs-header-actions .fs-header-table-navigation a#fs-table-navigation-previous.fs-nav-disabled{background-image:url(https://cdn.footystats.org/fonts/font-awesome/solid/left-disabled.png)}.fs-embed-header .fs-header-actions .fs-header-table-navigation a#fs-table-navigation-next{background-image:url(https://cdn.footystats.org/fonts/font-awesome/solid/right.png)}.fs-embed-header .fs-header-actions .fs-header-table-navigation a#fs-table-navigation-next.fs-nav-disabled{background-image:url(https://cdn.footystats.org/fonts/font-awesome/solid/right-disabled.png)}.fs-embed-header .fs-header-actions .fs-header-table-navigation a.fs-nav-disabled{background:#f1f1f1;border:1px solid #f1f1f1;box-shadow:none;color:#d3d3d3;pointer-events:none}.fs-embed-body{max-height:300px;overflow-y:scroll;padding:10px;display:block}.fs-embed-table{border-collapse:collapse;width:100%;table-layout:fixed;border:0!important}.fs-embed-table thead{border:0!important;font-size:11px;color:#08366b;font-weight:700}.fs-embed-table td{border:0!important;font-size:12px;padding:5px 0!important;vertical-align:middle}.fs-embed-table tbody,.fs-embed-table tbody tr{border:0!important}.fs-embed-table tbody tr:last-child{border-bottom:0!important}.fs-table-row{border-bottom:1px solid #f0f0f0!important;vertical-align:baseline!important}.fs-table-item{min-width:20px!important;text-align:left!important;border:0!important}.fs-table-item.link{color:#1565dc;font-weight:700;text-decoration:none;display:inline-block;max-width:90%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.fs-table-item.rank{color:#497591;min-width:auto;font-size:12px;text-align:center;padding:0 10px 0 0!important;width:20px}.fs-table-item.team{font-size:12px;width:50%}.fs-table-item.fs-align-center{text-align:center}",
        "",
      ]);
  },
  function (e, t) {
    function n(e, t) {
      var n = e[1] || "",
        o = e[3];
      if (!o) return n;
      if (t && "function" == typeof btoa) {
        var i = r(o);
        return [n]
          .concat(
            o.sources.map(function (e) {
              return "/*# sourceURL=" + o.sourceRoot + e + " */";
            })
          )
          .concat([i])
          .join("\n");
      }
      return [n].join("\n");
    }
    function r(e) {
      return (
        "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," +
        btoa(unescape(encodeURIComponent(JSON.stringify(e)))) +
        " */"
      );
    }
    e.exports = function (e) {
      var t = [];
      return (
        (t.toString = function () {
          return this.map(function (t) {
            var r = n(t, e);
            return t[2] ? "@media " + t[2] + "{" + r + "}" : r;
          }).join("");
        }),
        (t.i = function (e, n) {
          "string" == typeof e && (e = [[null, e, ""]]);
          for (var r = {}, o = 0; o < this.length; o++) {
            var i = this[o][0];
            "number" == typeof i && (r[i] = !0);
          }
          for (o = 0; o < e.length; o++) {
            var a = e[o];
            ("number" == typeof a[0] && r[a[0]]) ||
              (n && !a[2]
                ? (a[2] = n)
                : n && (a[2] = "(" + a[2] + ") and (" + n + ")"),
              t.push(a));
          }
        }),
        t
      );
    };
  },
  function (e, t, n) {
    function r(e, t) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
          o = h[r.id];
        if (o) {
          o.refs++;
          for (var i = 0; i < o.parts.length; i++) o.parts[i](r.parts[i]);
          for (; i < r.parts.length; i++) o.parts.push(c(r.parts[i], t));
        } else {
          for (var a = [], i = 0; i < r.parts.length; i++)
            a.push(c(r.parts[i], t));
          h[r.id] = { id: r.id, refs: 1, parts: a };
        }
      }
    }
    function o(e, t) {
      for (var n = [], r = {}, o = 0; o < e.length; o++) {
        var i = e[o],
          a = t.base ? i[0] + t.base : i[0],
          s = i[1],
          l = i[2],
          f = i[3],
          c = { css: s, media: l, sourceMap: f };
        r[a] ? r[a].parts.push(c) : n.push((r[a] = { id: a, parts: [c] }));
      }
      return n;
    }
    function i(e, t) {
      var n = g(e.insertInto);
      if (!n)
        throw new Error(
          "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
        );
      var r = v[v.length - 1];
      if ("top" === e.insertAt)
        r
          ? r.nextSibling
            ? n.insertBefore(t, r.nextSibling)
            : n.appendChild(t)
          : n.insertBefore(t, n.firstChild),
          v.push(t);
      else if ("bottom" === e.insertAt) n.appendChild(t);
      else {
        if ("object" != typeof e.insertAt || !e.insertAt.before)
          throw new Error(
            "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
          );
        var o = g(e.insertInto + " " + e.insertAt.before);
        n.insertBefore(t, o);
      }
    }
    function a(e) {
      if (null === e.parentNode) return !1;
      e.parentNode.removeChild(e);
      var t = v.indexOf(e);
      t >= 0 && v.splice(t, 1);
    }
    function s(e) {
      var t = document.createElement("style");
      return (e.attrs.type = "text/css"), f(t, e.attrs), i(e, t), t;
    }
    function l(e) {
      var t = document.createElement("link");
      return (
        (e.attrs.type = "text/css"),
        (e.attrs.rel = "stylesheet"),
        f(t, e.attrs),
        i(e, t),
        t
      );
    }
    function f(e, t) {
      Object.keys(t).forEach(function (n) {
        e.setAttribute(n, t[n]);
      });
    }
    function c(e, t) {
      var n, r, o, i;
      if (t.transform && e.css) {
        if (!(i = t.transform(e.css))) return function () {};
        e.css = i;
      }
      if (t.singleton) {
        var f = y++;
        (n = m || (m = s(t))),
          (r = u.bind(null, n, f, !1)),
          (o = u.bind(null, n, f, !0));
      } else
        e.sourceMap &&
        "function" == typeof URL &&
        "function" == typeof URL.createObjectURL &&
        "function" == typeof URL.revokeObjectURL &&
        "function" == typeof Blob &&
        "function" == typeof btoa
          ? ((n = l(t)),
            (r = p.bind(null, n, t)),
            (o = function () {
              a(n), n.href && URL.revokeObjectURL(n.href);
            }))
          : ((n = s(t)),
            (r = d.bind(null, n)),
            (o = function () {
              a(n);
            }));
      return (
        r(e),
        function (t) {
          if (t) {
            if (
              t.css === e.css &&
              t.media === e.media &&
              t.sourceMap === e.sourceMap
            )
              return;
            r((e = t));
          } else o();
        }
      );
    }
    function u(e, t, n, r) {
      var o = n ? "" : r.css;
      if (e.styleSheet) e.styleSheet.cssText = w(t, o);
      else {
        var i = document.createTextNode(o),
          a = e.childNodes;
        a[t] && e.removeChild(a[t]),
          a.length ? e.insertBefore(i, a[t]) : e.appendChild(i);
      }
    }
    function d(e, t) {
      var n = t.css,
        r = t.media;
      if ((r && e.setAttribute("media", r), e.styleSheet))
        e.styleSheet.cssText = n;
      else {
        for (; e.firstChild; ) e.removeChild(e.firstChild);
        e.appendChild(document.createTextNode(n));
      }
    }
    function p(e, t, n) {
      var r = n.css,
        o = n.sourceMap,
        i = void 0 === t.convertToAbsoluteUrls && o;
      (t.convertToAbsoluteUrls || i) && (r = x(r)),
        o &&
          (r +=
            "\n/*# sourceMappingURL=data:application/json;base64," +
            btoa(unescape(encodeURIComponent(JSON.stringify(o)))) +
            " */");
      var a = new Blob([r], { type: "text/css" }),
        s = e.href;
      (e.href = URL.createObjectURL(a)), s && URL.revokeObjectURL(s);
    }
    var h = {},
      b = (function (e) {
        var t;
        return function () {
          return void 0 === t && (t = e.apply(this, arguments)), t;
        };
      })(function () {
        return window && document && document.all && !window.atob;
      }),
      g = (function (e) {
        var t = {};
        return function (n) {
          if (void 0 === t[n]) {
            var r = e.call(this, n);
            if (r instanceof window.HTMLIFrameElement)
              try {
                r = r.contentDocument.head;
              } catch (e) {
                r = null;
              }
            t[n] = r;
          }
          return t[n];
        };
      })(function (e) {
        return document.querySelector(e);
      }),
      m = null,
      y = 0,
      v = [],
      x = n(8);
    e.exports = function (e, t) {
      if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document)
        throw new Error(
          "The style-loader cannot be used in a non-browser environment"
        );
      (t = t || {}),
        (t.attrs = "object" == typeof t.attrs ? t.attrs : {}),
        t.singleton || "boolean" == typeof t.singleton || (t.singleton = b()),
        t.insertInto || (t.insertInto = "head"),
        t.insertAt || (t.insertAt = "bottom");
      var n = o(e, t);
      return (
        r(n, t),
        function (e) {
          for (var i = [], a = 0; a < n.length; a++) {
            var s = n[a],
              l = h[s.id];
            l.refs--, i.push(l);
          }
          if (e) {
            r(o(e, t), t);
          }
          for (var a = 0; a < i.length; a++) {
            var l = i[a];
            if (0 === l.refs) {
              for (var f = 0; f < l.parts.length; f++) l.parts[f]();
              delete h[l.id];
            }
          }
        }
      );
    };
    var w = (function () {
      var e = [];
      return function (t, n) {
        return (e[t] = n), e.filter(Boolean).join("\n");
      };
    })();
  },
  function (e, t) {
    e.exports = function (e) {
      var t = "undefined" != typeof window && window.location;
      if (!t) throw new Error("fixUrls requires window.location");
      if (!e || "string" != typeof e) return e;
      var n = t.protocol + "//" + t.host,
        r = n + t.pathname.replace(/\/[^\/]*$/, "/");
      return e.replace(
        /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
        function (e, t) {
          var o = t
            .trim()
            .replace(/^"(.*)"$/, function (e, t) {
              return t;
            })
            .replace(/^'(.*)'$/, function (e, t) {
              return t;
            });
          if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o)) return e;
          var i;
          return (
            (i =
              0 === o.indexOf("//")
                ? o
                : 0 === o.indexOf("/")
                ? n + o
                : r + o.replace(/^\.\//, "")),
            "url(" + JSON.stringify(i) + ")"
          );
        }
      );
    };
  },
  function (e, t, n) {
    (function (e) {
      function r(e, n) {
        var r = { seen: [], stylize: i };
        return (
          arguments.length >= 3 && (r.depth = arguments[2]),
          arguments.length >= 4 && (r.colors = arguments[3]),
          h(n) ? (r.showHidden = n) : n && t._extend(r, n),
          x(r.showHidden) && (r.showHidden = !1),
          x(r.depth) && (r.depth = 2),
          x(r.colors) && (r.colors = !1),
          x(r.customInspect) && (r.customInspect = !0),
          r.colors && (r.stylize = o),
          s(r, e, r.depth)
        );
      }
      function o(e, t) {
        var n = r.styles[t];
        return n
          ? "[" + r.colors[n][0] + "m" + e + "[" + r.colors[n][1] + "m"
          : e;
      }
      function i(e, t) {
        return e;
      }
      function a(e) {
        var t = {};
        return (
          e.forEach(function (e, n) {
            t[e] = !0;
          }),
          t
        );
      }
      function s(e, n, r) {
        if (
          e.customInspect &&
          n &&
          T(n.inspect) &&
          n.inspect !== t.inspect &&
          (!n.constructor || n.constructor.prototype !== n)
        ) {
          var o = n.inspect(r, e);
          return y(o) || (o = s(e, o, r)), o;
        }
        var i = l(e, n);
        if (i) return i;
        var h = Object.keys(n),
          b = a(h);
        if (
          (e.showHidden && (h = Object.getOwnPropertyNames(n)),
          E(n) && (h.indexOf("message") >= 0 || h.indexOf("description") >= 0))
        )
          return f(n);
        if (0 === h.length) {
          if (T(n)) {
            var g = n.name ? ": " + n.name : "";
            return e.stylize("[Function" + g + "]", "special");
          }
          if (w(n))
            return e.stylize(RegExp.prototype.toString.call(n), "regexp");
          if (j(n)) return e.stylize(Date.prototype.toString.call(n), "date");
          if (E(n)) return f(n);
        }
        var m = "",
          v = !1,
          x = ["{", "}"];
        if ((p(n) && ((v = !0), (x = ["[", "]"])), T(n))) {
          m = " [Function" + (n.name ? ": " + n.name : "") + "]";
        }
        if (
          (w(n) && (m = " " + RegExp.prototype.toString.call(n)),
          j(n) && (m = " " + Date.prototype.toUTCString.call(n)),
          E(n) && (m = " " + f(n)),
          0 === h.length && (!v || 0 == n.length))
        )
          return x[0] + m + x[1];
        if (r < 0)
          return w(n)
            ? e.stylize(RegExp.prototype.toString.call(n), "regexp")
            : e.stylize("[Object]", "special");
        e.seen.push(n);
        var O;
        return (
          (O = v
            ? c(e, n, r, b, h)
            : h.map(function (t) {
                return u(e, n, r, b, t, v);
              })),
          e.seen.pop(),
          d(O, m, x)
        );
      }
      function l(e, t) {
        if (x(t)) return e.stylize("undefined", "undefined");
        if (y(t)) {
          var n =
            "'" +
            JSON.stringify(t)
              .replace(/^"|"$/g, "")
              .replace(/'/g, "\\'")
              .replace(/\\"/g, '"') +
            "'";
          return e.stylize(n, "string");
        }
        return m(t)
          ? e.stylize("" + t, "number")
          : h(t)
          ? e.stylize("" + t, "boolean")
          : b(t)
          ? e.stylize("null", "null")
          : void 0;
      }
      function f(e) {
        return "[" + Error.prototype.toString.call(e) + "]";
      }
      function c(e, t, n, r, o) {
        for (var i = [], a = 0, s = t.length; a < s; ++a)
          z(t, String(a)) ? i.push(u(e, t, n, r, String(a), !0)) : i.push("");
        return (
          o.forEach(function (o) {
            o.match(/^\d+$/) || i.push(u(e, t, n, r, o, !0));
          }),
          i
        );
      }
      function u(e, t, n, r, o, i) {
        var a, l, f;
        if (
          ((f = Object.getOwnPropertyDescriptor(t, o) || { value: t[o] }),
          f.get
            ? (l = f.set
                ? e.stylize("[Getter/Setter]", "special")
                : e.stylize("[Getter]", "special"))
            : f.set && (l = e.stylize("[Setter]", "special")),
          z(r, o) || (a = "[" + o + "]"),
          l ||
            (e.seen.indexOf(f.value) < 0
              ? ((l = b(n) ? s(e, f.value, null) : s(e, f.value, n - 1)),
                l.indexOf("\n") > -1 &&
                  (l = i
                    ? l
                        .split("\n")
                        .map(function (e) {
                          return "  " + e;
                        })
                        .join("\n")
                        .substr(2)
                    : "\n" +
                      l
                        .split("\n")
                        .map(function (e) {
                          return "   " + e;
                        })
                        .join("\n")))
              : (l = e.stylize("[Circular]", "special"))),
          x(a))
        ) {
          if (i && o.match(/^\d+$/)) return l;
          (a = JSON.stringify("" + o)),
            a.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
              ? ((a = a.substr(1, a.length - 2)), (a = e.stylize(a, "name")))
              : ((a = a
                  .replace(/'/g, "\\'")
                  .replace(/\\"/g, '"')
                  .replace(/(^"|"$)/g, "'")),
                (a = e.stylize(a, "string")));
        }
        return a + ": " + l;
      }
      function d(e, t, n) {
        var r = 0;
        return e.reduce(function (e, t) {
          return (
            r++,
            t.indexOf("\n") >= 0 && r++,
            e + t.replace(/\u001b\[\d\d?m/g, "").length + 1
          );
        }, 0) > 60
          ? n[0] +
              ("" === t ? "" : t + "\n ") +
              " " +
              e.join(",\n  ") +
              " " +
              n[1]
          : n[0] + t + " " + e.join(", ") + " " + n[1];
      }
      function p(e) {
        return Array.isArray(e);
      }
      function h(e) {
        return "boolean" == typeof e;
      }
      function b(e) {
        return null === e;
      }
      function g(e) {
        return null == e;
      }
      function m(e) {
        return "number" == typeof e;
      }
      function y(e) {
        return "string" == typeof e;
      }
      function v(e) {
        return "symbol" == typeof e;
      }
      function x(e) {
        return void 0 === e;
      }
      function w(e) {
        return O(e) && "[object RegExp]" === S(e);
      }
      function O(e) {
        return "object" == typeof e && null !== e;
      }
      function j(e) {
        return O(e) && "[object Date]" === S(e);
      }
      function E(e) {
        return O(e) && ("[object Error]" === S(e) || e instanceof Error);
      }
      function T(e) {
        return "function" == typeof e;
      }
      function k(e) {
        return (
          null === e ||
          "boolean" == typeof e ||
          "number" == typeof e ||
          "string" == typeof e ||
          "symbol" == typeof e ||
          void 0 === e
        );
      }
      function S(e) {
        return Object.prototype.toString.call(e);
      }
      function L(e) {
        return e < 10 ? "0" + e.toString(10) : e.toString(10);
      }
      function A() {
        var e = new Date(),
          t = [L(e.getHours()), L(e.getMinutes()), L(e.getSeconds())].join(":");
        return [e.getDate(), M[e.getMonth()], t].join(" ");
      }
      function z(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
      function I(e, t) {
        if (!e) {
          var n = new Error("Promise was rejected with a falsy value");
          (n.reason = e), (e = n);
        }
        return t(e);
      }
      function U(t) {
        function n() {
          for (var n = [], r = 0; r < arguments.length; r++)
            n.push(arguments[r]);
          var o = n.pop();
          if ("function" != typeof o)
            throw new TypeError("The last argument must be of type Function");
          var i = this,
            a = function () {
              return o.apply(i, arguments);
            };
          t.apply(this, n).then(
            function (t) {
              e.nextTick(a, null, t);
            },
            function (t) {
              e.nextTick(I, t, a);
            }
          );
        }
        if ("function" != typeof t)
          throw new TypeError(
            'The "original" argument must be of type Function'
          );
        return (
          Object.setPrototypeOf(n, Object.getPrototypeOf(t)),
          Object.defineProperties(n, P(t)),
          n
        );
      }
      var P =
          Object.getOwnPropertyDescriptors ||
          function (e) {
            for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++)
              n[t[r]] = Object.getOwnPropertyDescriptor(e, t[r]);
            return n;
          },
        R = /%[sdj%]/g;
      (t.format = function (e) {
        if (!y(e)) {
          for (var t = [], n = 0; n < arguments.length; n++)
            t.push(r(arguments[n]));
          return t.join(" ");
        }
        for (
          var n = 1,
            o = arguments,
            i = o.length,
            a = String(e).replace(R, function (e) {
              if ("%%" === e) return "%";
              if (n >= i) return e;
              switch (e) {
                case "%s":
                  return String(o[n++]);
                case "%d":
                  return Number(o[n++]);
                case "%j":
                  try {
                    return JSON.stringify(o[n++]);
                  } catch (e) {
                    return "[Circular]";
                  }
                default:
                  return e;
              }
            }),
            s = o[n];
          n < i;
          s = o[++n]
        )
          b(s) || !O(s) ? (a += " " + s) : (a += " " + r(s));
        return a;
      }),
        (t.deprecate = function (n, r) {
          function o() {
            if (!i) {
              if (e.throwDeprecation) throw new Error(r);
              e.traceDeprecation ? console.trace(r) : console.error(r),
                (i = !0);
            }
            return n.apply(this, arguments);
          }
          if (void 0 !== e && !0 === e.noDeprecation) return n;
          if (void 0 === e)
            return function () {
              return t.deprecate(n, r).apply(this, arguments);
            };
          var i = !1;
          return o;
        });
      var B,
        D = {};
      (t.debuglog = function (n) {
        if (
          (x(B) && (B = e.env.NODE_DEBUG || ""), (n = n.toUpperCase()), !D[n])
        )
          if (new RegExp("\\b" + n + "\\b", "i").test(B)) {
            var r = e.pid;
            D[n] = function () {
              var e = t.format.apply(t, arguments);
              console.error("%s %d: %s", n, r, e);
            };
          } else D[n] = function () {};
        return D[n];
      }),
        (t.inspect = r),
        (r.colors = {
          bold: [1, 22],
          italic: [3, 23],
          underline: [4, 24],
          inverse: [7, 27],
          white: [37, 39],
          grey: [90, 39],
          black: [30, 39],
          blue: [34, 39],
          cyan: [36, 39],
          green: [32, 39],
          magenta: [35, 39],
          red: [31, 39],
          yellow: [33, 39],
        }),
        (r.styles = {
          special: "cyan",
          number: "yellow",
          boolean: "yellow",
          undefined: "grey",
          null: "bold",
          string: "green",
          date: "magenta",
          regexp: "red",
        }),
        (t.isArray = p),
        (t.isBoolean = h),
        (t.isNull = b),
        (t.isNullOrUndefined = g),
        (t.isNumber = m),
        (t.isString = y),
        (t.isSymbol = v),
        (t.isUndefined = x),
        (t.isRegExp = w),
        (t.isObject = O),
        (t.isDate = j),
        (t.isError = E),
        (t.isFunction = T),
        (t.isPrimitive = k),
        (t.isBuffer = n(11));
      var M = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      (t.log = function () {
        console.log("%s - %s", A(), t.format.apply(t, arguments));
      }),
        (t.inherits = n(12)),
        (t._extend = function (e, t) {
          if (!t || !O(t)) return e;
          for (var n = Object.keys(t), r = n.length; r--; ) e[n[r]] = t[n[r]];
          return e;
        });
      var N =
        "undefined" != typeof Symbol ? Symbol("util.promisify.custom") : void 0;
      (t.promisify = function (e) {
        function t() {
          for (
            var t,
              n,
              r = new Promise(function (e, r) {
                (t = e), (n = r);
              }),
              o = [],
              i = 0;
            i < arguments.length;
            i++
          )
            o.push(arguments[i]);
          o.push(function (e, r) {
            e ? n(e) : t(r);
          });
          try {
            e.apply(this, o);
          } catch (e) {
            n(e);
          }
          return r;
        }
        if ("function" != typeof e)
          throw new TypeError(
            'The "original" argument must be of type Function'
          );
        if (N && e[N]) {
          var t = e[N];
          if ("function" != typeof t)
            throw new TypeError(
              'The "util.promisify.custom" argument must be of type Function'
            );
          return (
            Object.defineProperty(t, N, {
              value: t,
              enumerable: !1,
              writable: !1,
              configurable: !0,
            }),
            t
          );
        }
        return (
          Object.setPrototypeOf(t, Object.getPrototypeOf(e)),
          N &&
            Object.defineProperty(t, N, {
              value: t,
              enumerable: !1,
              writable: !1,
              configurable: !0,
            }),
          Object.defineProperties(t, P(e))
        );
      }),
        (t.promisify.custom = N),
        (t.callbackify = U);
    }.call(t, n(10)));
  },
  function (e, t) {
    function n() {
      throw new Error("setTimeout has not been defined");
    }
    function r() {
      throw new Error("clearTimeout has not been defined");
    }
    function o(e) {
      if (c === setTimeout) return setTimeout(e, 0);
      if ((c === n || !c) && setTimeout)
        return (c = setTimeout), setTimeout(e, 0);
      try {
        return c(e, 0);
      } catch (t) {
        try {
          return c.call(null, e, 0);
        } catch (t) {
          return c.call(this, e, 0);
        }
      }
    }
    function i(e) {
      if (u === clearTimeout) return clearTimeout(e);
      if ((u === r || !u) && clearTimeout)
        return (u = clearTimeout), clearTimeout(e);
      try {
        return u(e);
      } catch (t) {
        try {
          return u.call(null, e);
        } catch (t) {
          return u.call(this, e);
        }
      }
    }
    function a() {
      b &&
        p &&
        ((b = !1), p.length ? (h = p.concat(h)) : (g = -1), h.length && s());
    }
    function s() {
      if (!b) {
        var e = o(a);
        b = !0;
        for (var t = h.length; t; ) {
          for (p = h, h = []; ++g < t; ) p && p[g].run();
          (g = -1), (t = h.length);
        }
        (p = null), (b = !1), i(e);
      }
    }
    function l(e, t) {
      (this.fun = e), (this.array = t);
    }
    function f() {}
    var c,
      u,
      d = (e.exports = {});
    !(function () {
      try {
        c = "function" == typeof setTimeout ? setTimeout : n;
      } catch (e) {
        c = n;
      }
      try {
        u = "function" == typeof clearTimeout ? clearTimeout : r;
      } catch (e) {
        u = r;
      }
    })();
    var p,
      h = [],
      b = !1,
      g = -1;
    (d.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      h.push(new l(e, t)), 1 !== h.length || b || o(s);
    }),
      (l.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (d.title = "browser"),
      (d.browser = !0),
      (d.env = {}),
      (d.argv = []),
      (d.version = ""),
      (d.versions = {}),
      (d.on = f),
      (d.addListener = f),
      (d.once = f),
      (d.off = f),
      (d.removeListener = f),
      (d.removeAllListeners = f),
      (d.emit = f),
      (d.prependListener = f),
      (d.prependOnceListener = f),
      (d.listeners = function (e) {
        return [];
      }),
      (d.binding = function (e) {
        throw new Error("process.binding is not supported");
      }),
      (d.cwd = function () {
        return "/";
      }),
      (d.chdir = function (e) {
        throw new Error("process.chdir is not supported");
      }),
      (d.umask = function () {
        return 0;
      });
  },
  function (e, t) {
    e.exports = function (e) {
      return (
        e &&
        "object" == typeof e &&
        "function" == typeof e.copy &&
        "function" == typeof e.fill &&
        "function" == typeof e.readUInt8
      );
    };
  },
  function (e, t) {
    "function" == typeof Object.create
      ? (e.exports = function (e, t) {
          (e.super_ = t),
            (e.prototype = Object.create(t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            }));
        })
      : (e.exports = function (e, t) {
          e.super_ = t;
          var n = function () {};
          (n.prototype = t.prototype),
            (e.prototype = new n()),
            (e.prototype.constructor = e);
        });
  },
]);
