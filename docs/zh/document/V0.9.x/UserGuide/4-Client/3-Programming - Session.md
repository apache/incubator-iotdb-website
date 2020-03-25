# 编程 - Session

## 依赖

* JDK >= 1.8
* Maven >= 3.1

## 仅在client模块中打包

在根目录下运行:
> mvn clean package -pl client -am -Dmaven.test.skip=true

## 安装到本地 maven 库

在根目录下运行:
> mvn clean install -pl session -am -Dmaven.test.skip=true

## 在 maven 中使用 session 接口

```
<dependencies>
    <dependency>
      <groupId>org.apache.iotdb</groupId>
      <artifactId>iotdb-session</artifactId>
      <version>0.9.1</version>
    </dependency>
</dependencies>
```

## Session 接口使用示例
下面将给出Session对应的接口的简要介绍和对应参数：

### 启动Session的相关命令：

* 初始化Session
  ​	Session(String host, int port)
  ​	Session(String host, String port, String username, String password)
  ​	Session(String host, int port, String username, String password)

* 开启Session
  ​	Session.open()

* 关闭Session
  ​	Session.close()

### Session的相关数据操作命令

* 设置存储组

  ```
  TSStatus setStorageGroup(String storageGroupId)
  ```

* 删除单个或多个存储组

  ```
  	TSStatus deleteStorageGroup(String storageGroup)
  	TSStatus deleteStorageGroups(List<String> storageGroups)
  ```

* 创建单个时间序列

  ```
  	TSStatus createTimeseries(String path, TSDataType dataType, TSEncoding encoding, CompressionType compressor)
  ```

* 删除一个或多个时间序列

  ```
  	TSStatus deleteTimeseries(String path)
  	TSStatus deleteTimeseries(List<String> paths)
  ```

* 删除某一特定时间前的时间序列

  ```
  	TSStatus deleteData(String path, long time)
  	TSStatus deleteData(List<String> paths, long time)
  ```

* 插入时序数据

  ```
  TSStatus insert(String deviceId, long time, List<String> measurements, List<String> values)
  ```

* 批量插入时序数据

  ```
  TSExecuteBatchStatementResp insertBatch(RowBatch rowBatch)
  ```

### 示例代码

 浏览上述接口的详细信息，请参阅代码session/src/main/java/org/apache/iotdb/session/Session.java

 使用上述接口的示例代码在example/session/src/main/java/org/apache/iotdb/SessionExample.java，在此文件中包含了开启session和执行批量插入等操作