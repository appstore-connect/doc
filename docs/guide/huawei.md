# 华为应用商店配置

## 配置说明

华为应用商店配置需要配置`developer_id`、`client_id`和`client_secret`。

## 配置项格式参考

```json
{
  "type":"team_client_id",
  "developer_id":"xxx",
  "client_id":"xxx",
  "client_secret":"xxx",
  "configuration_version":"3.0"
}
```

### 参数说明

<img src = "/images/config_huawei.png" width="25%" />

`type`和`configuration_version`是固定值

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| developer_id | string | 是 | 华为应用商店的developer_id |
| client_id | string | 是 | API客户端ID |
| client_secret | string | 是 | API客户端密钥 |

## 获取配置信息

[参考文档](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agcapi-getstarted-0000001111845114#section103mcpsimp)
