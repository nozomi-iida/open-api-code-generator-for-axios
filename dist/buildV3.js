"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildV3 = void 0;
var buildV3 = function (openapi) {
    // fileName = operationId
    var files = [];
    Object.keys(openapi.paths).forEach(function (path) {
        var _a;
        console.log((_a = openapi.paths[path]) === null || _a === void 0 ? void 0 : _a.parameters);
    });
};
exports.buildV3 = buildV3;
//# sourceMappingURL=buildV3.js.map