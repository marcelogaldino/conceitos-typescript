"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(name, age, techs) {
    if (name === void 0) { name = ''; }
    var data = {
        name: name,
        age: age,
        techs: techs
    };
    return data;
}
exports.default = createUser;
