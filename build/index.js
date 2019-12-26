"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./style.css");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var App = function (props) {
  var images = props.images;
  if (images.length < 2) return null;
  /* define base variable */

  var nextMsec = props.nextMsec || 5000;
  var barHeight = props.barHeight || 1.5;
  var backgroundSize = props.backgroundSize || 'cover';
  var backgroundColor = props.backgroundColor || '#202322';

  var _a = (0, _react.useState)(0),
      position = _a[0],
      setPosition = _a[1];

  var _b = (0, _react.useState)(true),
      isTransition = _b[0],
      setIsTransition = _b[1];

  var _c = (0, _react.useState)(true),
      isReset = _c[0],
      setIsReset = _c[1];

  var timeout = (0, _react.useRef)([]);
  /* common functions */

  function sleep(ms) {
    return new Promise(function (r) {
      return setTimeout(r, ms);
    });
  }

  function noneTransition(callback) {
    var _this = this;

    return new Promise(function (resolve) {
      return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              setIsTransition(false);
              return [4
              /*yield*/
              , sleep(20)];

            case 1:
              _a.sent();

              callback();
              return [4
              /*yield*/
              , sleep(20)];

            case 2:
              _a.sent();

              setIsTransition(true);
              return [4
              /*yield*/
              , sleep(20)];

            case 3:
              _a.sent();

              resolve();
              return [2
              /*return*/
              ];
          }
        });
      });
    });
  }

  function startCarousel(p) {
    return __awaiter(this, void 0, void 0, function () {
      var _this = this;

      return __generator(this, function (_a) {
        if (timeout.current.length > 0) {
          timeout.current.forEach(function (n) {
            return clearTimeout(n);
          });
          timeout.current = [];
        }

        setIsReset(false);
        setPosition(p);
        timeout.current.push(setTimeout(function () {
          return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  if (!(p === images.length - 1)) return [3
                  /*break*/
                  , 3];
                  return [4
                  /*yield*/
                  , sleep(2000)];

                case 1:
                  _a.sent();

                  return [4
                  /*yield*/
                  , noneTransition(function () {
                    return setIsReset(true);
                  })];

                case 2:
                  _a.sent();

                  startCarousel(0);
                  return [3
                  /*break*/
                  , 4];

                case 3:
                  startCarousel(p + 1);
                  _a.label = 4;

                case 4:
                  return [2
                  /*return*/
                  ];
              }
            });
          });
        }, nextMsec));
        return [2
        /*return*/
        ];
      });
    });
  }

  function skip(w) {
    return __awaiter(this, void 0, void 0, function () {
      var afterPosition;

      var _this = this;

      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            afterPosition = w === 'next' ? position === images.length - 1 ? 0 : position + 1 : position === 0 ? 0 : position - 1;
            return [4
            /*yield*/
            , noneTransition(function () {
              return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                  switch (_a.label) {
                    case 0:
                      setIsReset(true);
                      return [4
                      /*yield*/
                      , sleep(20)];

                    case 1:
                      _a.sent();

                      startCarousel(afterPosition);
                      return [2
                      /*return*/
                      ];
                  }
                });
              });
            })];

          case 1:
            _a.sent();

            return [2
            /*return*/
            ];
        }
      });
    });
  }
  /* initialize */


  (0, _react.useEffect)(function () {
    (function () {
      return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , noneTransition(function () {
                return setIsReset(true);
              })];

            case 1:
              _a.sent();

              startCarousel(0);
              return [2
              /*return*/
              ];
          }
        });
      });
    })();
  }, [props.images]);
  /* when flip */

  var coordX = (0, _react.useRef)(0);

  function ontouchstart(e) {
    var touches = e.changedTouches[0];
    coordX.current = touches.pageX;
  }

  function ontouchend(e) {
    var touches = e.changedTouches[0];
    var diff = touches.pageX - coordX.current;

    if (Math.abs(diff) > 100) {
      skip(Math.sign(diff) > -1 ? 'before' : 'next');
    }
  }

  return _react.default.createElement("div", {
    id: "react-instagram-carousel",
    onTouchStart: ontouchstart,
    onTouchEnd: ontouchend
  }, images.map(function (v, k) {
    return _react.default.createElement("div", {
      className: "images-in-carousel",
      style: {
        backgroundImage: "url(" + v + ")",
        backgroundSize: backgroundSize,
        backgroundColor: backgroundColor,
        opacity: isReset ? k === 0 ? 1 : 0 : k === position ? 1 : 0
      },
      key: v
    });
  }), _react.default.createElement("div", {
    className: "hidden-box-for-click-skip",
    onClick: function () {
      return skip('before');
    }
  }), _react.default.createElement("div", {
    className: "hidden-box-for-click-skip",
    onClick: function () {
      return skip('next');
    }
  }), _react.default.createElement("div", {
    className: "bar-box"
  }, images.map(function (_, k) {
    return _react.default.createElement("div", {
      className: "bar",
      style: {
        width: "calc(100% / " + images.length + " - 6%)",
        height: barHeight + "px"
      },
      key: k
    }, _react.default.createElement("div", {
      className: 'load',
      style: {
        width: isReset ? "0" : k <= position ? "100%" : "0",
        transition: isTransition ? k === position ? nextMsec + "ms linear" : "0s" : "0s"
      },
      key: k
    }));
  })));
};

var _default = App;
exports.default = _default;