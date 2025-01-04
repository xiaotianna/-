# im项目本地数据库方案

存储方案：`localstorage` `indexdb` `lowdb` `sqlite`

排除 json（`lowdb`）

排除 localstorage（因为存储量小）

最终选择：typeorm + sqlite

改

数据库选型方案，数据存储方案