"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(_a) {
    var _b = _a.name, name = _b === void 0 ? '' : _b, age = _a.age, techs = _a.techs;
    var data = {
        name: name,
        age: age,
        techs: techs
    };
    return data;
}
exports.default = createUser;
