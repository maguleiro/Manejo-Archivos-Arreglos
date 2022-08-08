
# sync-fs

  Synchronous version of the node.js `fs` module.
  Replaces the functions that take result callbacks with synchronous ones.
  Intended as the complement to [then-fs](http://npm.im/then-fs) for using with [Concur.sync](http://npm.im/concur).

## Installation

    $ npm install sync-fs 

## API

  The API for `sync-fs` is like that of `then-fs` module except that any function which normally returns a promise is synchronous instead.

  Example:

```js
function readJSON(path) {
  return JSON.parse(fs.readFile(path, 'utf8'))
}
console.dir(readJSON(__dirname + '/package.json'))
```

## License

  MIT
