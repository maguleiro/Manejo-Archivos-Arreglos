'use strict';
var fs = require('fs')

for (var key in fs)
  if (( typeof fs[key] != 'function'
     || key.match(/^[A-Z]/)
     || key.match(/^create/) 
     || key.match(/^(un)?watch/)
     || key.match(/Sync$/)
     ))
    exports[key.replace(/Sync$/, '')] = fs[key]
