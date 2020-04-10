(window.webpackJsonp=window.webpackJsonp||[]).push([[1019],{1340:function(e,a,t){"use strict";t.r(a);var i=t(1),v=Object(i.a)({},(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"content"},[t("h2",{attrs:{id:"tsfile-的-hive-连接器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tsfile-的-hive-连接器"}},[e._v("#")]),e._v(" TsFile 的 Hive 连接器")]),e._v(" "),t("p",[e._v("TsFile 的 Hive 连接器实现了通过 Hive 读取外部 TsFile 类型的文件格式的支持，使用户能够通过 Hive 操作 TsFile。")]),e._v(" "),t("p",[e._v("连接器的主要功能：")]),e._v(" "),t("ul",[t("li",[e._v("将单个 TsFile 文件加载进 Hive，不论文件是存储在本地文件系统或者是 HDFS 中")]),e._v(" "),t("li",[e._v("将某个特定目录下的所有文件加载进 Hive，不论文件是存储在本地文件系统或者是 HDFS 中")]),e._v(" "),t("li",[e._v("使用 HQL 查询 TsFile")]),e._v(" "),t("li",[e._v("到现在为止, 写操作在 hive-connector 中还不支持. 所以, HQL 中的 insert 操作是不被允许的")])]),e._v(" "),t("h3",{attrs:{id:"设计原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设计原理"}},[e._v("#")]),e._v(" 设计原理")]),e._v(" "),t("p",[e._v("Hive 连接器需要能够解析 TsFile 的文件格式，转化为 Hive 能够识别的按行返回的格式。也需要能够根据用户定义的 Table 的形式，格式化输出。所以，Hive 连接器的功能实现主要分成四个部分")]),e._v(" "),t("ul",[t("li",[e._v("将整个 TsFile 文件分片")]),e._v(" "),t("li",[e._v("从分片中读取数据，转化为 Hive 能够识别的数据类型")]),e._v(" "),t("li",[e._v("解析用户自定义的 Table")]),e._v(" "),t("li",[e._v("将数据反序列化为 Hive 的输出格式")])]),e._v(" "),t("h3",{attrs:{id:"具体实现类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#具体实现类"}},[e._v("#")]),e._v(" 具体实现类")]),e._v(" "),t("p",[e._v("上述的主要四个功能模块都有其对应的实现类，下面就分别介绍一下这四个实现类。")]),e._v(" "),t("h4",{attrs:{id:"org-apache-iotdb-hive-tsfhiveinputformat"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#org-apache-iotdb-hive-tsfhiveinputformat"}},[e._v("#")]),e._v(" org.apache.iotdb.hive.TSFHiveInputFormat")]),e._v(" "),t("p",[e._v("该类主要负责对输入的 TsFile 文件的格式化操作，它继承了"),t("code",[e._v("FileInputFormat<NullWritable, MapWritable>")]),e._v("类，一些通用的格式化操作在"),t("code",[e._v("FileInputFormat")]),e._v("中已经有实现，这个类覆写了它的"),t("code",[e._v("getSplits(JobConf, int)")]),e._v("方法，自定义了对于 TsFile 文件的分片方式；以及"),t("code",[e._v("getRecordReader(InputSpli, JobConf, Reporter)")]),e._v("方法，用于生成具体从一个分片中读取数据的\n"),t("code",[e._v("TSFHiveRecordReader")]),e._v("。")]),e._v(" "),t("h4",{attrs:{id:"org-apache-iotdb-hive-tsfhiverecordreader"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#org-apache-iotdb-hive-tsfhiverecordreader"}},[e._v("#")]),e._v(" org.apache.iotdb.hive.TSFHiveRecordReader")]),e._v(" "),t("p",[e._v("该类主要负责从一个分片中读取 TsFile 的数据。")]),e._v(" "),t("p",[e._v("它实现了"),t("code",[e._v("IReaderSet")]),e._v("接口，这个接口里是一些设置类内部属性的方法，主要是为了抽出"),t("code",[e._v("TSRecordReader")]),e._v("和"),t("code",[e._v("TSHiveRecordReader")]),e._v("中重复的代码部分。")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("public interface IReaderSet {\n\n  void setReader(TsFileSequenceReader reader);\n\n  void setMeasurementIds(List<String> measurementIds);\n\n  void setReadDeviceId(boolean isReadDeviceId);\n\n  void setReadTime(boolean isReadTime);\n}\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br")])]),t("p",[e._v("下面先介绍一下这个类的一些重要字段")]),e._v(" "),t("ul",[t("li",[t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("private List<QueryDataSet> dataSetList = new ArrayList<>();\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("这个分片所生成的所有的 QueryDataSet")])]),e._v(" "),t("li",[t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("private List<String> deviceIdList = new ArrayList<>();\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("设备名列表，这个顺序与 dataSetList 的顺序一致，即 deviceIdList[i] 是 dataSetList[i] 的设备名.")])]),e._v(" "),t("li",[t("p",[e._v("private int currentIndex = 0;")]),e._v(" "),t("p",[e._v("当前正在被处理的 QueryDataSet 的下标")])])]),e._v(" "),t("p",[e._v("这个类在构造函数里，调用了"),t("code",[e._v("TSFRecordReader")]),e._v("的"),t("code",[e._v("initialize(TSFInputSplit, Configuration, IReaderSet, List<QueryDataSet>, List<String>)")]),e._v("方法去初始化上面提到的一些类字段。它覆写了"),t("code",[e._v("RecordReader")]),e._v("的"),t("code",[e._v("next()")]),e._v("方法，用以返回从 TsFile 里读出的数据。")]),e._v(" "),t("h5",{attrs:{id:"next-nullwritable-mapwritable"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#next-nullwritable-mapwritable"}},[e._v("#")]),e._v(" next(NullWritable, MapWritable)")]),e._v(" "),t("p",[e._v("我们注意到它从 TsFile 读取出来数据之后，是以"),t("code",[e._v("MapWritable")]),e._v("的形式返回的，这里的"),t("code",[e._v("MapWritable")]),e._v("其实就是一个"),t("code",[e._v("Map")]),e._v("，只不过它的 key 与 value 都做了序列化与反序列化的特殊适配，它的读取流程如下")]),e._v(" "),t("ol",[t("li",[e._v("首先判断"),t("code",[e._v("dataSetList")]),e._v("当前位置的"),t("code",[e._v("QueryDataSet")]),e._v("还有没有值，如果没有值，则将"),t("code",[e._v("currentIndex")]),e._v("递增1，直到找到第一个有值的"),t("code",[e._v("QueryDataSet")])]),e._v(" "),t("li",[e._v("然后调用"),t("code",[e._v("QueryDataSet")]),e._v("的"),t("code",[e._v("next()")]),e._v("方法获得"),t("code",[e._v("RowRecord")])]),e._v(" "),t("li",[e._v("最后调用"),t("code",[e._v("TSFRecordReader")]),e._v("的"),t("code",[e._v("getCurrentValue()")]),e._v("方法，将"),t("code",[e._v("RowRecord")]),e._v("中的值放入"),t("code",[e._v("MapWritable")]),e._v("里")])]),e._v(" "),t("h4",{attrs:{id:"org-apache-iotdb-hive-tsfileserde"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#org-apache-iotdb-hive-tsfileserde"}},[e._v("#")]),e._v(" org.apache.iotdb.hive.TsFileSerDe")]),e._v(" "),t("p",[e._v("这个类继承了"),t("code",[e._v("AbstractSerDe")]),e._v("，也是我们实现Hive从自定义输入格式中读取数据所必须的。")]),e._v(" "),t("p",[e._v("它覆写了"),t("code",[e._v("AbstractSerDe")]),e._v("的"),t("code",[e._v("initialize()")]),e._v("方法，在这个方法里，从用户的建表 sql 里，解析出相应的设备名，传感器名以及传感器对应的类型。还要构建出"),t("code",[e._v("ObjectInspector")]),e._v("对象，这个对象主要负责数据类型的转化，由于 TsFile 只支持原始数据类型，所以当出现其他数据类型时，需要抛出异常，具体的构建过程在"),t("code",[e._v("createObjectInspectorWorker()")]),e._v("方法中可以看到。")]),e._v(" "),t("p",[e._v("这个类的最主要职责就是序列化和反序列化不同文件格式的数据，由于我们的 Hive 连接器暂时只支持读取操作，并不支持 insert 操作，所以只有反序列化的过程，所以仅覆写了"),t("code",[e._v("deserialize(Writable)")]),e._v("方法，该方法里调用了"),t("code",[e._v("TsFileDeserializer")]),e._v("的"),t("code",[e._v("deserialize()")]),e._v("方法。")]),e._v(" "),t("h4",{attrs:{id:"org-apache-iotdb-hive-tsfiledeserializer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#org-apache-iotdb-hive-tsfiledeserializer"}},[e._v("#")]),e._v(" org.apache.iotdb.hive.TsFileDeserializer")]),e._v(" "),t("p",[e._v("这个类就是将数据反序列化为 Hive 的输出格式，仅有一个"),t("code",[e._v("deserialize()")]),e._v("方法。")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("public Object deserialize(List<String>, List<TypeInfo>, Writable, String)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("这个方法的"),t("code",[e._v("Writable")]),e._v("参数就是"),t("code",[e._v("TSFHiveRecordReader")]),e._v("的"),t("code",[e._v("next()")]),e._v("生成的"),t("code",[e._v("MapWritable")]),e._v("。")]),e._v(" "),t("p",[e._v("首先判断"),t("code",[e._v("Writable")]),e._v("参数是不是"),t("code",[e._v("MapWritable")]),e._v("类型，如果不是，则抛出异常。")]),e._v(" "),t("p",[e._v("接着依次从"),t("code",[e._v("MapWritable")]),e._v("中取出该设备的传感器的值，如果遇到类型不匹配则抛异常，最后返回生成的结果集。")])])}],!1,null,null,null);a.default=v.exports}}]);