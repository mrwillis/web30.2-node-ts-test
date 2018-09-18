"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const web3_1 = __importDefault(require("web3"));
const order_1 = require("cdx-contracts/dist/types/order");
const order_factory_1 = require("cdx-contracts/dist/utils/order_factory");
console.log(order_1.MakerOrder);
console.log(order_factory_1.OrderFactory);
const web3 = new web3_1.default(new web3_1.default.providers.HttpProvider("http://localhost:9545"));
console.log(web3.eth.blockNumber);
