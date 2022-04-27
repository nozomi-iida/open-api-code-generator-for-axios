"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
var build_1 = require("./build");
var path_1 = __importDefault(require("path"));
var run = function () {
    var configs = require(path_1.default.join(process.cwd(), "codegen.config.js"));
    (0, build_1.build)(configs);
};
exports.run = run;
//# sourceMappingURL=cli.js.map