'use strict';

// CONTRACTS
//
// library Math {
//   function and(bool a, bool b) returns (bool c) {
//     return a && b;
//   }
// }
//
// contract A {
//   function testTrue() returns(bool){
//     return Math.and(true, true);
//   }
// }
//

var classes = {
  Math: {
    "bytecode": "6060604052608b8060106000396000f3650301c492d9be5060606040526000357c0100000000000000000000000000000000000000000000000000000000900480639f6ee0fc14604157603d565b6007565b605e60048080359060200190919080359060200190919050506074565b6040518082815260200191505060405180910390f35b6000828015607f5750815b90506085565b9291505056",
    "interface": "[{\"constant\":false,\"inputs\":[{\"name\":\"a\",\"type\":\"bool\"},{\"name\":\"b\",\"type\":\"bool\"}],\"name\":\"and\",\"outputs\":[{\"name\":\"c\",\"type\":\"bool\"}],\"type\":\"function\"}]\n",
    "solidity_interface": "library Math{function and(bool a,bool b)returns(bool c);}"
  },
  A: {
    "bytecode": "606060405260da8060106000396000f360606040526000357c0100000000000000000000000000000000000000000000000000000000900480634e4fb1fa146037576035565b005b604260048050506058565b6040518082815260200191505060405180910390f35b600073__Math__________________________________639f6ee0fc60016001604051837c010000000000000000000000000000000000000000000000000000000002815260040180838152602001828152602001925050506020604051808303818660325a03f41560025750505060405180519060200150905060d7565b9056",
    "interface": "[{\"constant\":false,\"inputs\":[],\"name\":\"testTrue\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"type\":\"function\"}]\n",
    "solidity_interface": "contract A{function testTrue()returns(bool );}"
  }
};



var Web3 = require('web3');
var Pudding = require("ether-pudding");
var web3 = new Web3();
Pudding.setWeb3(web3);

web3.setProvider(new Web3.providers.HttpProvider("http://localhost:8545"));
web3.eth.defaultAccount = web3.eth.coinbase;

// deploy library
var Math = Pudding.whisk({
  abi: JSON.parse(classes.Math.interface),
  binary: classes.Math.bytecode
});


Math.new({gas: 3141592}).then(function(math) {
  // Replace the lib address
  // 
  var A = Pudding.whisk({
    abi: JSON.parse(classes.A.interface),
    binary: classes.A.bytecode.replace(/__([^_]+)_*/g, (matched, name) => {
      return math.address.slice(2);
    })
  });
  return A.new({gas: 3141592});
}).then(function(a) {
  return a.testTrue.call();
}).then(function(v){
  console.log(v);
});
