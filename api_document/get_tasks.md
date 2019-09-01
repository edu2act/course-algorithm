# 获取任务查重结果

---

## 请求地址

- /review/v1/tasks/:task

## 请求方式

- GET

## 地址参数

| 参数 | 是否必填 | 描述     |
| :--- | :------- | :------- |
| task | 是       | `任务`ID |

## URL参数

| 参数 | 是否必填 | 描述                |
| :--- | :------- | :------------------ |
| ak   | 是       | `任务`的API访问秘钥 |

## 响应示例

``` json
{
    "count": 3,
    "results": [
        {
            "record": "jl0001",
            "ratio": "33",
            "sim_record": "jl0002"
        },
        {
            "record": "jl0002",
            "ratio": "98",
            "sim_record": "jl0001"
        },
        {
            "record": "jl0003",
            "ratio": "0",
            "sim_record": "jl0003"
        }
    ]
}
```

## 响应参数

| 参数                | 说明         |
| :------------------ | :----------- |
| count               | `记录`数量   |
| results             | 查重结果     |
| results::record     | `记录`ID     |
| results::ratio      | 相似比       |
| results::sim_record | 相似`记录`ID |