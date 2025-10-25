# OPPO 软件商店配置

## 配置说明

OPPO 软件商店是 OPPO 官方的应用分发平台，需要配置应用Key、应用Secret和应用包名。

## 配置项

```json
{
  "oppo": {
    "appKey": "应用Key",
    "appSecret": "应用Secret",
    "packageName": "应用包名"
  }
}
```

### 参数说明

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| appKey | string | 是 | 应用的唯一标识Key |
| appSecret | string | 是 | 应用的密钥 |
| packageName | string | 是 | 应用的包名，如 com.example.app |

## 获取配置信息

### 步骤1：登录开放平台

访问 [OPPO 开放平台](https://open.oppomobile.com) 并登录你的开发者账号。

### 步骤2：进入应用管理

1. 点击右上角头像，进入「管理中心」
2. 选择「应用与游戏」
3. 找到你要配置的应用并点击进入

### 步骤3：获取凭证信息

在应用详情页面：
1. 找到「应用信息」标签页
2. 在页面中可以看到：
   - **App Key**：应用的唯一标识
   - **App Secret**：应用的密钥（点击「查看」按钮显示）
   - **包名**：应用的包名

## 配置示例

```json
{
  "apps": [
    {
      "name": "我的应用",
      "markets": {
        "oppo": {
          "appKey": "your_app_key_12345",
          "appSecret": "your_app_secret_abcdefg",
          "packageName": "com.example.myapp"
        }
      }
    }
  ]
}
```

## 注意事项

- App Secret 是敏感信息，请妥善保管
- 包名必须与提交到 OPPO 商店的应用包名完全一致
- 首次查看 App Secret 可能需要短信验证
- 建议使用环境变量管理敏感配置信息

## 常见问题

### 如何重置 App Secret？

1. 进入应用详情页面
2. 找到 App Secret 区域
3. 点击「重置」按钮
4. 验证身份后即可生成新的 Secret

### 包名填写错误怎么办？

包名在应用创建时就已确定，无法修改。请确保配置文件中的包名与应用实际包名一致。

### 提示"应用不存在"？

请检查：
1. App Key 是否填写正确
2. 应用是否已在 OPPO 软件商店创建
3. 开发者账号是否有该应用的权限

### 查看不到 App Secret？

请确保：
1. 账号已完成实名认证
2. 手机号已绑定并可以接收验证码
3. 具有该应用的管理员权限

