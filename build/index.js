"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _useInterval = _interopRequireDefault(require("use-interval"));

require("./style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  var max = nextMsec * images.length - 1;
  var speed = props.speed || 200;
  var barHeight = props.barHeight || 1.5;
  var backgroundSize = props.backgroundSize || 'cover';
  var backgroundColor = props.backgroundColor || '#202322';
  /* define state and ref */

  var _a = (0, _react.useState)(0),
      time = _a[0],
      setTime = _a[1]; // use this for decide progress bar fill or progress


  var _b = (0, _react.useState)(true),
      transition = _b[0],
      setTransition = _b[1]; // for switch progress bar animation on or off


  var _c = (0, _react.useState)(false),
      stop = _c[0],
      setStop = _c[1]; // stop carousel

  /*
    if this variable to specific number not 0,
    increase or decrease progress time,
    and skip carousel(integer or negative number)
  */


  var skipTime = (0, _react.useRef)(0);
  /* common function */

  var sleep = function (ms) {
    return new Promise(function (r) {
      return setTimeout(r, ms);
    });
  };
  /* init */


  (0, _react.useEffect)(function () {
    setTime(0);
  }, [props]);
  /* main processing */

  (0, _useInterval.default)(function () {
    if (stop === true) return;

    (function () {
      return __awaiter(void 0, void 0, void 0, function () {
        var n, isMinus, isOverMax;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              if (!(time >= max)) return [3
              /*break*/
              , 2];
              /*
                if carousel finished,
                wait 2 seconds, and reset.
              */

              setStop(true);
              return [4
              /*yield*/
              , sleep(2000)];

            case 1:
              _a.sent();

              setTransition(false);
              setTime(0);
              setStop(false);
              return [2
              /*return*/
              ];

            case 2:
              /*
                if want skip, must off animation.
                because each progress bar animation is independently.
              */
              setTransition(skipTime.current !== 0 ? false : true);
              n = time + speed + skipTime.current;
              isMinus = n < 0;
              isOverMax = n > max;
              setTime(isMinus ? speed : isOverMax ? max : n);
              skipTime.current = 0;
              return [2
              /*return*/
              ];
          }
        });
      });
    })();
  }, speed);
  /* use for display image and progress */

  var nowTime = Math.floor(time / nextMsec);
  var image = nowTime === images.length ? images[images.length - 1] : images[nowTime];
  /* for skip when click or flip */

  function skip(range) {
    if (stop === true) return;
    skipTime.current = range === 'increace' ? nextMsec : -nextMsec;
  }
  /* when flip */


  var coordX = (0, _react.useRef)(0);
  var interval;

  function ontouchstart(e) {
    var touches = e.changedTouches[0];
    coordX.current = touches.pageX;
    interval = setTimeout(function () {
      return setStop(true);
    }, 300);
  }

  function ontouchend(e) {
    if (interval) clearTimeout(interval);
    setStop(false);
    var touches = e.changedTouches[0];
    var diff = touches.pageX - coordX.current;

    if (Math.abs(diff) > 100) {
      skip(Math.sign(diff) > -1 ? 'decreace' : 'increace');
    }
  }

  return _react.default.createElement("div", {
    id: "react-instagram-carousel",
    style: {
      backgroundImage: "url(" + image + ")",
      backgroundSize: backgroundSize,
      backgroundColor: backgroundColor
    },
    onTouchStart: ontouchstart,
    onTouchEnd: ontouchend
  }, _react.default.createElement("div", {
    className: "hidden-box-for-click-skip",
    onClick: function () {
      return skip('decreace');
    }
  }), _react.default.createElement("div", {
    className: "hidden-box-for-click-skip",
    onClick: function () {
      return skip('increace');
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
        width: k + 1 <= nowTime // already
        ? '100%' : k === nowTime // nowTime
        ? Math.floor(time + speed - k * nextMsec) / nextMsec * 100 + "%" : '0%',
        transition: transition ? '.2s linear' : '0s'
      },
      key: k
    }));
  })));
};

var _default = App;
exports.default = _default;