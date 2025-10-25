# 小米应用商店配置

## 配置说明

小米应用商店是小米官方的应用分发平台，需要配置`private_key`、`email`和`cer证书`。

::: warning 小米目前不能查询App状态
可以根据返回值查看线上最新的版本，如果是最新审核版本且没有设置定时发布，这证明审核已经通过。
:::


## 配置项

```json
{
  "private_key": "xxx",
  "email": "xxx"
}
```

cer证书

```text
-----BEGIN CERTIFICATE-----
xxx
-----END CERTIFICATE-----
```

### 参数说明

<img src = "/images/config_xiaomi.png" width="25%" />

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| private_key | string | 是 | 私钥 |
| email | string | 是 | 小米开发者账号（邮箱）|
| cer证书 | string | 是 | 证书 |

## 获取配置信息

[参考文档](https://dev.mi.com/xiaomihyperos/documentation/detail?pId=1134)
