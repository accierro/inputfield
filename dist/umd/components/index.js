(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./Input"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./Input"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Input);
    global.undefined = mod.exports;
  }
})(this, function (exports, _Input) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_Input).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _Input[key];
      }
    });
  });
});
//# sourceMappingURL=index.js.map