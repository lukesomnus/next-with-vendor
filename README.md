# Next.js vendor
next 打包时生成vendor文件
## Installation

```
npm install --save-dev next-with-vendor
```
or
```
yarn add next-with-vendor
```

## Usage
```js
// next.config.js
const withVendor = require('next-with-vendor')

module.exports = withVendor({
    // 需要打入vendor里的第三方依赖
    vendors: [
        'axios',
        'classnames',
        'lodash',
        'next',
        'react',
        'react-dom',
        'mobx',
        'mobx-react',
        '...'
    ],
    splitMinChunks:3   // 最小拆包引用数，默认为3
});
```