### 简介
这是一个非常简单的工具，可以在php项目中轻松使用webpack。

### 功能
1. 开发模式支持`devServer`
2. 支持热更新
3. php代码在开发与生产模式切换时无需更改，一次性简洁地插入css和js

### 使用
`webpack.config.js`

```js
const PhpWebpackPlugin=require('PhpWebpackPlugin Path')
const config={
    // ...
    plugins: [
        // ...

        new PhpWebpackPlugin({
        assetsMapPath: path.resolve(__dirname, '../map.php'),
        // devPath: 'http://localhost:8080/', // 可选，开发模式下assets路径，一般配合devServer使用
        // prodPath: '/dist/', // 可选，生产模式下assets路径
        // template: path.resolve(__dirname,'assets-map-template.php') // assets-map的模板php
        }),

        // ...
    ]
    // ...
}
```

`your.php`

```php
<?php
include 'map.php'; // 导入assets-map文件
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <?php insertCSS('index') ?>
  <title>标题</title>
</head>
<body>
  <h1>php webpack plugin</h1>
  <?php insertJS('index') ?>
</body>
</html>

```

**在sample中**

`npm run dev` 开发模式
`npm run build` 生成模式

两个模式均无需更改php文件，map.php自动生成
