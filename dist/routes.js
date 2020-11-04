"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloTypescript = void 0;
var User_1 = __importDefault(require("./services/User"));
function HelloTypescript(request, response) {
    var user = User_1.default({
        name: 'Marcelo',
        age: 28,
        techs: [
            'NodeJS',
            'ReactJS',
            { title: 'React Native', experience: 100 }
        ]
    });
    return response.json({ message: user });
}
exports.HelloTypescript = HelloTypescript;
