(window.webpackJsonp=window.webpackJsonp||[]).push([[301],{867:function(e,t,s){"use strict";s.r(t);var a=s(68),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"数据增删改"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据增删改"}},[e._v("#")]),e._v(" 数据增删改")]),e._v(" "),s("p",[e._v("下面介绍四种常用数据操控操作，分别是插入，更新，删除和TTL设置")]),e._v(" "),s("h2",{attrs:{id:"数据插入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据插入"}},[e._v("#")]),e._v(" 数据插入")]),e._v(" "),s("h3",{attrs:{id:"单行数据-一个设备一个时间戳多个值-写入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#单行数据-一个设备一个时间戳多个值-写入"}},[e._v("#")]),e._v(" 单行数据（一个设备一个时间戳多个值）写入")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("对应的接口")]),e._v(" "),s("ul",[s("li",[e._v("JDBC 的 execute 和 executeBatch 接口")]),e._v(" "),s("li",[e._v("Session 的 insertRecord 和 insertRecords")])])]),e._v(" "),s("li",[s("p",[e._v("总入口: public void insert(InsertRowPlan insertRowPlan)   StorageEngine.java")]),e._v(" "),s("ul",[s("li",[e._v("找到对应的 StorageGroupProcessor")]),e._v(" "),s("li",[e._v("根据写入数据的时间以及当前设备落盘的最后时间戳，找到对应的 TsFileProcessor")]),e._v(" "),s("li",[e._v("写入 TsFileProcessor 对应的 memtable 中\n"),s("ul",[s("li",[e._v("如果是乱序文件，则更新tsfileResource中的endTimeMap")]),e._v(" "),s("li",[e._v("如果tsfile中没有该设备的信息，或新插入数据的时间小于已存startTime，则更新tsfileResource中的startTimeMap")])])]),e._v(" "),s("li",[e._v("记录写前日志")]),e._v(" "),s("li",[e._v("根据 memtable 大小，来判断是否触发异步持久化 memtable 操作\n"),s("ul",[s("li",[e._v("如果是顺序文件且执行了刷盘动作，则更新tsfileResource中的endTimeMap")])])]),e._v(" "),s("li",[e._v("根据当前磁盘 TsFile 的大小，判断是否触发文件关闭操作")])])])]),e._v(" "),s("h3",{attrs:{id:"批量数据-一个设备多个时间戳多个值-写入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#批量数据-一个设备多个时间戳多个值-写入"}},[e._v("#")]),e._v(" 批量数据（一个设备多个时间戳多个值）写入")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("对应的接口")]),e._v(" "),s("ul",[s("li",[e._v("Session 的 insertTablet")])])]),e._v(" "),s("li",[s("p",[e._v("总入口: public void insertTablet(InsertTabletPlan insertTabletPlan)  StorageEngine.java")]),e._v(" "),s("ul",[s("li",[e._v("找到对应的 StorageGroupProcessor")]),e._v(" "),s("li",[e._v("根据这批数据的时间以及当前设备落盘的最后时间戳，将这批数据分成小批，分别对应到一个 TsFileProcessor 中")]),e._v(" "),s("li",[e._v("分别将每小批写入 TsFileProcessor 对应的 memtable 中\n"),s("ul",[s("li",[e._v("如果是乱序文件，则更新tsfileResource中的endTimeMap")]),e._v(" "),s("li",[e._v("如果tsfile中没有该设备的信息，或新插入数据的时间小于已存startTime，则更新tsfileResource中的startTimeMap")])])]),e._v(" "),s("li",[e._v("记录写前日志")]),e._v(" "),s("li",[e._v("根据 memtable 大小，来判断是否触发异步持久化 memtable 操作\n"),s("ul",[s("li",[e._v("如果是顺序文件且执行了刷盘动作，则更新tsfileResource中的endTimeMap")])])]),e._v(" "),s("li",[e._v("根据当前磁盘 TsFile 的大小，判断是否触发文件关闭操作")])])])]),e._v(" "),s("h2",{attrs:{id:"数据更新"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据更新"}},[e._v("#")]),e._v(" 数据更新")]),e._v(" "),s("p",[e._v("目前不支持数据的原地更新操作，即update语句，但用户可以直接插入新的数据，在同一个时间点上的同一个时间序列以最新插入的数据为准\n旧数据会通过合并来自动删除，参见：")]),e._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/zh/SystemDesign/StorageEngine/MergeManager.html"}},[e._v("文件合并机制")])],1)]),e._v(" "),s("h2",{attrs:{id:"数据删除"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据删除"}},[e._v("#")]),e._v(" 数据删除")]),e._v(" "),s("ul",[s("li",[e._v("对应的接口\n"),s("ul",[s("li",[e._v("JDBC 的 execute 接口，使用delete SQL语句")])])])]),e._v(" "),s("p",[e._v("每个 StorageGroupProsessor 中针对每个分区会维护一个自增的版本号，由 SimpleFileVersionController 管理。\n每个内存缓冲区 memtable 在持久化的时候会申请一个版本号。持久化到 TsFile 后，会在 TsFileMetadata 中记录此 memtable 对应的 多个 ChunkGroup 的终止位置和版本号。\n查询时会根据此信息对 ChunkMetadata 赋 version。")]),e._v(" "),s("p",[e._v("StorageEngine.java中的delete入口:")]),e._v(" "),s("p",[s("code",[e._v("public void delete(String deviceId, String measurementId, long timestamp)")])]),e._v(" "),s("ul",[s("li",[e._v("找到对应的 StorageGroupProcessor")]),e._v(" "),s("li",[e._v("找到受影响的所有 working TsFileProcessor 记录写前日志")]),e._v(" "),s("li",[e._v("找到受影响的所有 TsFileResource，在其对应的 mods 文件中记录一条记录：path，version，startTime，endTime\n"),s("ul",[s("li",[e._v("如果存在 working memtable：则删除内存中的数据")]),e._v(" "),s("li",[e._v("如果存在 正在 flush 的 memtable，记录一条记录，查询时跳过删掉的数据（注意此时文件中已经为这些 memtable 记录了 mods）")])])])]),e._v(" "),s("p",[e._v("Mods文件用来存储所有的删除记录。下图的mods文件中，d1.s1落在 [100, 200], [180, 300]范围的数据，以及d1.s2落在[500, 1000]范围中的数据将会被删除。")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://user-images.githubusercontent.com/59866276/88248546-20952600-ccd4-11ea-88e9-84af8dde4304.jpg",alt:""}})]),e._v(" "),s("h2",{attrs:{id:"数据ttl设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据ttl设置"}},[e._v("#")]),e._v(" 数据TTL设置")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("对应的接口")]),e._v(" "),s("ul",[s("li",[e._v("JDBC 的 execute 接口，使用SET TTL语句")])])]),e._v(" "),s("li",[s("p",[e._v("总入口: public void setTTL(String storageGroup, long dataTTL) StorageEngine.java")]),e._v(" "),s("ul",[s("li",[e._v("找到对应的 StorageGroupProcessor")]),e._v(" "),s("li",[e._v("在 StorageGroupProcessor 中设置新的data ttl")]),e._v(" "),s("li",[e._v("对所有TsfileResource进行TTL检查")]),e._v(" "),s("li",[e._v("如果某个文件在当前TTL下失效，则删除文件")])])])]),e._v(" "),s("p",[e._v("同时，我们在 StorageEngine 中启动了一个定时检查文件TTL的线程，详见")]),e._v(" "),s("ul",[s("li",[e._v("src/main/java/org/apache/iotdb/db/engine/StorageEngine.java 中的 start 方法")])])])}),[],!1,null,null,null);t.default=r.exports}}]);