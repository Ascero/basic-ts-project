"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const port = process.env.port || 1337;
const app = express_1.default();
app.listen(port);
app.use(express_1.default.static('public'));
console.log('Listen to port ' + port);
