#!/usr/bin/env node

var program = require('commander');

program
  .version(require('./package.json').version)
  .option('-p, --listen_port [port]', 'listening port', '1520')
  .option('-d, --dispatcher_addr [port:host]', 'dispatcher listening address', '1522:')
  .parse(process.argv)
;
console.log(program.listen_port,program.dispatcher_addr);

require('./dispatcher_monitor.js').start({
  listen_port : program.listen_port,
  dispatcher_addr : program.dispatcher_addr
});
