# App Store配置

## 配置说明

`App Store`需要配置`key_id`、`issuer_id`和`private_key`。

::: warning 注意
需要注意的是private_key需要带上`-----BEGIN PRIVATE KEY-----`和`-----END PRIVATE KEY-----`，包括换行符一起。
:::

## 配置项

```json
{
  "key_id": "xxx",
  "issuer_id": "xxx"
}
private_key
-----BEGIN PRIVATE KEY-----
XXX
-----END PRIVATE KEY-----
```

### 参数说明

<img src = "/images/config_apple.png" width="25%" />

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| key_id | string | 是 | key_id |
| issuer_id | string | 是 | issuer_id |
| private_key | string | 是 | private_key |

## 获取配置信息

[参考文档](https://developer.apple.com/documentation/appstoreconnectapi)
