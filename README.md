## Testrpc breaking example

### Usage
```
npm i
node deploy.js
```
Expected to return `true`, successfully tested on `morden`

Observed Behaviour of testrpc 2.0.1:
```
Unhandled rejection Error: Error: VM Exception while executing eth_call: invalid JUMP
    at /Users/mhhf/work/eth/testrpc/node_modules/web3-provider-engine/subproviders/vm.js:127:17
    at /Users/mhhf/work/eth/testrpc/node_modules/ethereumjs-vm/lib/runTx.js:55:5
    at /Users/mhhf/work/eth/testrpc/node_modules/async/lib/async.js:726:13
    at /Users/mhhf/work/eth/testrpc/node_modules/async/lib/async.js:52:16
    at /Users/mhhf/work/eth/testrpc/node_modules/async/lib/async.js:269:32
    at /Users/mhhf/work/eth/testrpc/node_modules/async/lib/async.js:44:16
    at /Users/mhhf/work/eth/testrpc/node_modules/async/lib/async.js:723:17
    at /Users/mhhf/work/eth/testrpc/node_modules/async/lib/async.js:167:37
    at /Users/mhhf/work/eth/testrpc/node_modules/ethereumjs-vm/lib/runTx.js:51:9
    at /Users/mhhf/work/eth/testrpc/node_modules/ethereumjs-vm/lib/cache.js:137:7
    at Object.module.exports.InvalidResponse (/Users/mhhf/tmp/gist/node_modules/web3/lib/web3/errors.js:35:16)
    at /Users/mhhf/tmp/gist/node_modules/web3/lib/web3/requestmanager.js:86:36
    at request.onreadystatechange (/Users/mhhf/tmp/gist/node_modules/web3/lib/web3/httpprovider.js:114:13)
    at dispatchEvent (/Users/mhhf/tmp/gist/node_modules/xmlhttprequest/lib/XMLHttpRequest.js:591:25)
    at setState (/Users/mhhf/tmp/gist/node_modules/xmlhttprequest/lib/XMLHttpRequest.js:610:14)
    at IncomingMessage.<anonymous> (/Users/mhhf/tmp/gist/node_modules/xmlhttprequest/lib/XMLHttpRequest.js:447:13)
    at emitNone (events.js:85:20)
    at IncomingMessage.emit (events.js:179:7)
    at endReadableNT (_stream_readable.js:913:12)
    at _combinedTickCallback (node.js:377:13)
    at process._tickCallback (node.js:401:11)
```

### System stats:
```
OS X 10.10.5 (14F1605)
testrpc 2.0.1 - d5efa9a
node v5.8.0
solc 0.3.1-c492d9be
```
