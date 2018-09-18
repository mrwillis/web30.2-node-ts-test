import Web3 from "web3";

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:9545"));
console.log(web3.eth.blockNumber);
