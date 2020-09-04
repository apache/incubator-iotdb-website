(window.webpackJsonp=window.webpackJsonp||[]).push([[920],{1481:function(s,t,e){"use strict";e.r(t);var a=e(69),i=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"_0-9-0-10-版本iotdb-session-接口更新总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_0-9-0-10-版本iotdb-session-接口更新总结"}},[s._v("#")]),s._v(" 0.9-0.10 版本IoTDB Session 接口更新总结")]),s._v(" "),e("p",[s._v("从0.9到0.10版本的IoTDB session接口有了较大改变。一部分接口名称和参数类型发生了变化，另外新增了大量可用接口。所有session接口抛出的异常类型 "),e("em",[s._v("IoTDBSessionExeception")]),s._v(" 更改为 "),e("em",[s._v("IoTDBConnectionException")]),s._v(" 和 "),e("em",[s._v("StatementExecutionExeception")]),s._v(" 。下面详细介绍具体接口的变化。")]),s._v(" "),e("h3",{attrs:{id:"接口名称更改"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#接口名称更改"}},[s._v("#")]),s._v(" 接口名称更改")]),s._v(" "),e("h4",{attrs:{id:"insert"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#insert"}},[s._v("#")]),s._v(" insert()")]),s._v(" "),e("p",[s._v("用于插入一行数据，需提供数据点的deviceId, time, 所有measurement和相应的value值。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("void insert(String deviceId, long time, List<String> measurements, List<String> values)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("该方法在0.10版本中方法名发生变化")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("void insertRecord(String deviceId, long time, List<String> measurements, List<String> values)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h4",{attrs:{id:"insertrowinbatch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#insertrowinbatch"}},[s._v("#")]),s._v(" insertRowInBatch()")]),s._v(" "),e("p",[s._v("用于插入多行数据，需提供各行数据的deviceId, time, 所有measurement名称和相应的value值。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("void insertRowInBatch(List<String> deviceIds, List<Long> times, List<List<String>> measurementsList,   \n                      List<List<String>> valuesList)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("该方法在0.10版本中方法名发生变化")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("void insertRecords(List<String> deviceIds, List<Long> times, List<List<String>> measurementsList, \n                   List<List<String>> valuesList)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h4",{attrs:{id:"insertbatch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#insertbatch"}},[s._v("#")]),s._v(" insertBatch()")]),s._v(" "),e("p",[s._v('在0.9版本中用于以"RowBatch"结构为单位插入数据')]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("void insertBatch(RowBatch rowBatch)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v('在0.10版本中"RowBatch"类型更改为"Tablet"类型，因此方法名也随之改变。')]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("void insertTablet(Tablet tablet)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h4",{attrs:{id:"testinsertrow"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#testinsertrow"}},[s._v("#")]),s._v(" testInsertRow()")]),s._v(" "),e("p",[s._v("用于测试插入一行接口的响应")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("void testInsertRow(String deviceId, long time, List<String> measurements, List<String> values)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("在0.10版本中方法名改为testInsertRecord。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("void testInsertRecord(String deviceId, long time, List<String> measurements, List<String> values)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h4",{attrs:{id:"testinsertrowinbatch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#testinsertrowinbatch"}},[s._v("#")]),s._v(" testInsertRowInBatch()")]),s._v(" "),e("p",[s._v("用于测试插入多行数据接口的响应")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("void testInsertRowInBatch(List<String> deviceIds, List<Long> times, List<List<String>> measurementsList, \n                          List<List<String>> valuesList)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("在0.10版本中方法名改为testInsertRecords")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("void testInsertRecords(List<String> deviceIds, List<Long> times, List<List<String>> measurementsList, \n                       List<List<String>> valuesList)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h4",{attrs:{id:"testinsertbatch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#testinsertbatch"}},[s._v("#")]),s._v(" testInsertBatch")]),s._v(" "),e("p",[s._v("用于测试以RowBatch结构为单位插入数据的响应")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("void testInsertBatch(RowBatch rowBatch)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("在0.10版本中RowBatch类型更改为Tabet类型，因此方法名也随之改变为testInsertTablet")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("void testInsertTablet(Tablet tablet)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"新增接口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#新增接口"}},[s._v("#")]),s._v(" 新增接口")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("void open(boolean enableRPCCompression)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("开启一个session，并指定是否启用RPC压缩。注意客户端开启PRC压缩的状态需与服务端保持一致。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("void insertRecord(String deviceId, long time, List<String> measurements,\n      List<TSDataType> types, List<Object> values)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("插入一行数据，该方法和已有的insertRecord()方法不同在于需额外提供每个measurement的类型信息types，且参数values以原始类型的方式提供。写入速度相对于参数为String格式的insertRecord接口要快一些。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("void insertRecords(List<String> deviceIds, List<Long> times, List<List<String>> measurementsList, \n                   List<List<TSDataType>> typesList, List<List<Object>> valuesList)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("插入多行数据，该方法和已有的insertRecords()方法不同在于需额外提供每个measurement的类型信息typesList，且参数valuesList以原始类型的方式提供。写入速度相对于参数为String格式的insertRecords接口要快一些。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("void insertTablet(Tablet tablet, boolean sorted)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("提供额外的sorted参数，表示tablet是否内部已排好序，如sorted为真则会省去排序的过程从而提升处理速度。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("void insertTablets(Map<String, Tablet> tablets)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("新增insertTablets接口用于写入多个tablet结构，tablets参数为Map<device名, tablet数据>")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("void insertTablets(Map<String, Tablet> tablets, boolean sorted)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("带额外sorted参数的insertTablets接口")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("void testInsertRecord(String deviceId, long time, List<String> measurements, List<TSDataType> types, \n                      List<Object> values)\nvoid testInsertRecords(List<String> deviceIds, List<Long> times, List<List<String>> measurementsList, \n                      List<List<TSDataType>> typesList, List<List<Object>> valuesList)\nvoid testInsertTablet(Tablet tablet, boolean sorted)\nvoid testInsertTablets(Map<String, Tablet> tablets)\nvoid testInsertTablets(Map<String, Tablet> tablets, boolean sorted)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("以上接口均为新增的测试rpc响应的方法，用于测试新增的写入接口")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("void createTimeseries(String path, TSDataType dataType, TSEncoding encoding, CompressionType compressor, \t\n                      Map<String, String> props, Map<String, String> tags, Map<String, String> attributes, \n                      String measurementAlias)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("在原来createTimeseries接口的基础上，创建时间序列可以额外指定时间序列的props, tags, attributes和measurementAlias。如果不需要指定以上额外参数可以将参数设为null。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("void createMultiTimeseries(List<String> paths, List<TSDataType> dataTypes, List<TSEncoding> encodings, \n                           List<CompressionType> compressors, List<Map<String, String>> propsList, \n                           List<Map<String, String>> tagsList, List<Map<String, String>> attributesList, \n                           List<String> measurementAliasList)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("一次性创建多个时间序列，同时也可以指定多个时间序列的props, tags, attributes和measurementAlias。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("boolean checkTimeseriesExists(String path)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("用于检测时间序列是否存在")])])}),[],!1,null,null,null);t.default=i.exports}}]);