
installation
=============

`npm install -g noradle-console`

start console
==============

```shell
noradle-console -h

Usage: server [options]

Options:

  -h, --help                         output usage information
  -V, --version                      output the version number
  -d, --dispatcher_addr [port:host]  dispatcher listening address, default to 1520
  -p, --listen_port [port]           listening port, default to 1522:
  
noradle-console -p 1520 -d 1522:
```

watch noradle runtime state in browser
=======================================

* access `http://localhost:1520/getOraSessions` to see all oracle session that connected to dispatcher
* access `http://localhost:1520/getClients` to see all node.js client who connected to dispatcher
* access `http://localhost:1520/getClientConfig` to see all node.js client configuration for dispatcher