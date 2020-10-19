[![Version](https://img.shields.io/npm/v/@jellyfish-commuting/node-fetchjson)](https://www.npmjs.com/package/@jellyfish-commuting/node-fetchjson)
[![Licence](https://img.shields.io/npm/l/@jellyfish-commuting/node-fetchjson)](https://en.wikipedia.org/wiki/MIT_license)
[![Build](https://img.shields.io/travis/jellyfish-commuting/node-fetchjson)](https://travis-ci.org/github/jellyfish-commuting/node-fetchjson)
[![Coverage](https://img.shields.io/codecov/c/github/jellyfish-commuting/node-fetchjson)](https://codecov.io/gh/jellyfish-commuting/node-fetchjson)
[![Downloads](https://img.shields.io/npm/dt/@jellyfish-commuting/node-fetchjson)](https://www.npmjs.com/package/@jellyfish-commuting/node-fetchjson)

__*for internal use only - Just draft idea to easily fetch API in our apps*__

# fetchjson
_for more infos, see [fetchjson](https://https://github.com/jellyfish-commuting/fetch-json)_

### Install

```bash
yarn add @jellyfish-commuting/node-fetchjson
```
or
```bash
npm install @jellyfish-commuting/node-fetchjson
```
### Usage

```javascript
import fetchjson from '@jellyfish-commuting/node-fetchjson';

fetchjson('v1/users').then(payload => console.log(payload));
```
