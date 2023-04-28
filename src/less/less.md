# 在webstrom中配置less

在 Node.js 环境中使用 Less ：

> npm install -g less


在浏览器环境中使用 Less ：

```html
<!--<link rel="stylesheet/less" type="text/css" href="styles.less" />-->
<!--<script src="//cdnjs.cloudflare.com/ajax/libs/less.js/3.11.1/less.min.js" ></script>-->
```

在webstrom配置：
"File" → "Settings" → "Tools" → "File Watchers"

配置文件:
参数：
```
$FileName$
$ProjectFileDir$/src/css/$FileNameWithoutExtension$.css
--source-map
```
要刷新的输出目录
```
$ProjectFileDir$/css/$FileNameWithoutExtension$.css $ProjectFileDir$/css/$FileNameWithoutExtension$.css.map
```
