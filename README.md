[![Version](https://img.shields.io/npm/v/@jollie/node-fetchjson)](https://www.npmjs.com/package/@jollie/node-fetchjson)
[![Licence](https://img.shields.io/npm/l/@jollie/node-fetchjson)](https://en.wikipedia.org/wiki/MIT_license)
[![Build](https://img.shields.io/travis/thejellyfish/node-fetchjson)](https://travis-ci.org/github/thejellyfish/node-fetchjson)
[![Coverage](https://img.shields.io/codecov/c/github/thejellyfish/node-fetchjson)](https://codecov.io/gh/thejellyfish/node-fetchjson)
[![Downloads](https://img.shields.io/npm/dt/@jollie/node-fetchjson)](https://www.npmjs.com/package/@jollie/node-fetchjson)

__*for internal use only - Just draft idea to easily fetch API in our apps*__

# fetchjson
Brings fetchjson to Node   
_for more infos, see [fetchjson](https://https://github.com/thejellyfish/fetch-json)_

### Install

```bash
yarn add @jollie/node-fetchjson
```
or
```bash
npm install @jollie/node-fetchjson
```
### Usage

```javascript
const fetchjson = require('@jollie/node-fetchjson');

fetchjson('https://myapi.io/v1/users').then(payload => console.log(payload));
```
