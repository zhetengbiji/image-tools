# image-tools
图像转换工具，可用于如下环境：uni-app、微信小程序、5+APP、浏览器

## 使用方式

### NPM

```
npm i image-tools --save
```

```js
import { pathToBase64 } from 'image-tools'
```

### 直接下载

```js
import { pathToBase64 } from '../../js/image-tools/index.js' // 此处路径需根据自己项目实际填写
```

## API

### pathToBase64

从路径转换为base64，uni-app、微信小程序和5+APP使用的路径不支持网络路径，如果是网络图片需要先使用下载API下载下来。

```js
pathToBase64(path)
  .then(base64 => {
    console.log(base64)
  })
  .catch(error => {
    console.error(error)
  })
```