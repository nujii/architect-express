# architect-express

This plugin allows for easy creation/configuration on an express 
server to be used by other plugins in an architect driven system

## Config Format

```json
{
  "packagePath": "./node_modules/architect-express",
  "port": 3000
}
```

## Usage

Let's use that puppy in our plugin

```js
module.exports = function (options, imports, register) {

  var app = imports.express;

  // Do stuf here. It's just an express server.
};
```

## TODO
- Allow registration of more apps
- Better configuration in config file
- Tests
