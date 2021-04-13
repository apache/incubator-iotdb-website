(window.webpackJsonp=window.webpackJsonp||[]).push([[523],{1092:function(s,e,n){"use strict";n.r(e);var t=n(69),a=Object(t.a)({},(function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"通信服务协议"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#通信服务协议"}},[s._v("#")]),s._v(" 通信服务协议")]),s._v(" "),n("h2",{attrs:{id:"thrift-rpc-接口"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#thrift-rpc-接口"}},[s._v("#")]),s._v(" Thrift rpc 接口")]),s._v(" "),n("h3",{attrs:{id:"简介"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),n("p",[s._v("Thrift是一个远程方法调用软件框架，用来进行可扩展且跨语言的服务的开发。\n它结合了功能强大的软件堆栈和代码生成引擎，\n以构建在 C++, Java, Go,Python, PHP, Ruby, Erlang, Perl, Haskell, C#, Cocoa, JavaScript, Node.js, Smalltalk, and OCaml 这些编程语言间无缝结合的、高效的服务。")]),s._v(" "),n("p",[s._v("IoTDB服务端和客户端之间使用thrift进行通信，实际使用中建议使用IoTDB提供的原生客户端封装:\nSession或Session Pool。如有特殊需要，您也可以直接针对RPC接口进行编程")]),s._v(" "),n("p",[s._v("默认IoTDB服务端使用6667端口作为RPC通信端口，可修改配置项中的")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("rpc_port=6667\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("更改默认接口")]),s._v(" "),n("h3",{attrs:{id:"rpc接口"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#rpc接口"}},[s._v("#")]),s._v(" rpc接口")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("// 打开一个 session\nTSOpenSessionResp openSession(1:TSOpenSessionReq req);\n\n// 关闭一个 session\nTSStatus closeSession(1:TSCloseSessionReq req);\n\n// 执行一条 SQL 语句\nTSExecuteStatementResp executeStatement(1:TSExecuteStatementReq req);\n\n// 批量执行 SQL 语句\nTSStatus executeBatchStatement(1:TSExecuteBatchStatementReq req);\n\n// 执行查询 SQL 语句\nTSExecuteStatementResp executeQueryStatement(1:TSExecuteStatementReq req);\n\n// 执行插入、删除 SQL 语句\nTSExecuteStatementResp executeUpdateStatement(1:TSExecuteStatementReq req);\n\n// 向服务器取下一批查询结果\nTSFetchResultsResp fetchResults(1:TSFetchResultsReq req)\n\n// 获取元数据\nTSFetchMetadataResp fetchMetadata(1:TSFetchMetadataReq req)\n\n// 取消某次查询操作\nTSStatus cancelOperation(1:TSCancelOperationReq req);\n\n// 关闭查询操作数据集，释放资源\nTSStatus closeOperation(1:TSCloseOperationReq req);\n\n// 获取时区信息\nTSGetTimeZoneResp getTimeZone(1:i64 sessionId);\n\n// 设置时区\nTSStatus setTimeZone(1:TSSetTimeZoneReq req);\n\n// 获取服务端配置\nServerProperties getProperties();\n\n// 设置存储组\nTSStatus setStorageGroup(1:i64 sessionId, 2:string storageGroup);\n\n// 创建时间序列\nTSStatus createTimeseries(1:TSCreateTimeseriesReq req);\n\n// 创建多条时间序列\nTSStatus createMultiTimeseries(1:TSCreateMultiTimeseriesReq req);\n\n// 删除时间序列\nTSStatus deleteTimeseries(1:i64 sessionId, 2:list<string> path)\n\n// 删除存储组\nTSStatus deleteStorageGroups(1:i64 sessionId, 2:list<string> storageGroup);\n\n// 按行插入数据\nTSStatus insertRecord(1:TSInsertRecordReq req);\n\n// 按String格式插入一条数据\nTSStatus insertStringRecord(1:TSInsertStringRecordReq req);\n\n// 按列插入数据\nTSStatus insertTablet(1:TSInsertTabletReq req);\n\n// 按列批量插入数据\nTSStatus insertTablets(1:TSInsertTabletsReq req);\n\n// 按行批量插入数据\nTSStatus insertRecords(1:TSInsertRecordsReq req);\n\n// 按行批量插入同属于某个设备的数据\nTSStatus insertRecordsOfOneDevice(1:TSInsertRecordsOfOneDeviceReq req);\n\n// 按String格式批量按行插入数据\nTSStatus insertStringRecords(1:TSInsertStringRecordsReq req);\n\n// 测试按列插入数据的延迟，注意：该接口不真实插入数据，只用来测试网络延迟\nTSStatus testInsertTablet(1:TSInsertTabletReq req);\n\n// 测试批量按列插入数据的延迟，注意：该接口不真实插入数据，只用来测试网络延迟\nTSStatus testInsertTablets(1:TSInsertTabletsReq req);\n\n// 测试按行插入数据的延迟，注意：该接口不真实插入数据，只用来测试网络延迟\nTSStatus testInsertRecord(1:TSInsertRecordReq req);\n\n// 测试按String格式按行插入数据的延迟，注意：该接口不真实插入数据，只用来测试网络延迟\nTSStatus testInsertStringRecord(1:TSInsertStringRecordReq req);\n\n// 测试按行插入数据的延迟，注意：该接口不真实插入数据，只用来测试网络延迟\nTSStatus testInsertRecords(1:TSInsertRecordsReq req);\n\n// 测试按行批量插入同属于某个设备的数据的延迟，注意：该接口不真实插入数据，只用来测试网络延迟\nTSStatus testInsertRecordsOfOneDevice(1:TSInsertRecordsOfOneDeviceReq req);\n\n// 测试按String格式批量按行插入数据的延迟，注意：该接口不真实插入数据，只用来测试网络延迟\nTSStatus testInsertStringRecords(1:TSInsertStringRecordsReq req);\n\n// 删除数据\nTSStatus deleteData(1:TSDeleteDataReq req);\n\n// 执行原始数据查询\nTSExecuteStatementResp executeRawDataQuery(1:TSRawDataQueryReq req);\n\n// 向服务器申请一个查询语句ID\ni64 requestStatementId(1:i64 sessionId);\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br"),n("span",{staticClass:"line-number"},[s._v("72")]),n("br"),n("span",{staticClass:"line-number"},[s._v("73")]),n("br"),n("span",{staticClass:"line-number"},[s._v("74")]),n("br"),n("span",{staticClass:"line-number"},[s._v("75")]),n("br"),n("span",{staticClass:"line-number"},[s._v("76")]),n("br"),n("span",{staticClass:"line-number"},[s._v("77")]),n("br"),n("span",{staticClass:"line-number"},[s._v("78")]),n("br"),n("span",{staticClass:"line-number"},[s._v("79")]),n("br"),n("span",{staticClass:"line-number"},[s._v("80")]),n("br"),n("span",{staticClass:"line-number"},[s._v("81")]),n("br"),n("span",{staticClass:"line-number"},[s._v("82")]),n("br"),n("span",{staticClass:"line-number"},[s._v("83")]),n("br"),n("span",{staticClass:"line-number"},[s._v("84")]),n("br"),n("span",{staticClass:"line-number"},[s._v("85")]),n("br"),n("span",{staticClass:"line-number"},[s._v("86")]),n("br"),n("span",{staticClass:"line-number"},[s._v("87")]),n("br"),n("span",{staticClass:"line-number"},[s._v("88")]),n("br"),n("span",{staticClass:"line-number"},[s._v("89")]),n("br"),n("span",{staticClass:"line-number"},[s._v("90")]),n("br"),n("span",{staticClass:"line-number"},[s._v("91")]),n("br"),n("span",{staticClass:"line-number"},[s._v("92")]),n("br"),n("span",{staticClass:"line-number"},[s._v("93")]),n("br"),n("span",{staticClass:"line-number"},[s._v("94")]),n("br"),n("span",{staticClass:"line-number"},[s._v("95")]),n("br"),n("span",{staticClass:"line-number"},[s._v("96")]),n("br"),n("span",{staticClass:"line-number"},[s._v("97")]),n("br"),n("span",{staticClass:"line-number"},[s._v("98")]),n("br"),n("span",{staticClass:"line-number"},[s._v("99")]),n("br"),n("span",{staticClass:"line-number"},[s._v("100")]),n("br"),n("span",{staticClass:"line-number"},[s._v("101")]),n("br"),n("span",{staticClass:"line-number"},[s._v("102")]),n("br"),n("span",{staticClass:"line-number"},[s._v("103")]),n("br"),n("span",{staticClass:"line-number"},[s._v("104")]),n("br")])]),n("h3",{attrs:{id:"idl定义文件位置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#idl定义文件位置"}},[s._v("#")]),s._v(" IDL定义文件位置")]),s._v(" "),n("p",[s._v("IDL定义文件的路径是thrift/src/main/thrift/rpc.thrift，其中包括了结构体定义与函数定义、")]),s._v(" "),n("h3",{attrs:{id:"生成文件位置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#生成文件位置"}},[s._v("#")]),s._v(" 生成文件位置")]),s._v(" "),n("p",[s._v("在mvn编译过程中，会调用thrift编译IDL文件，生成最终的.class文件\n生成的文件夹路径为thrift/target/classes/org/apache/iotdb/service/rpc/thrift")])])}),[],!1,null,null,null);e.default=a.exports}}]);