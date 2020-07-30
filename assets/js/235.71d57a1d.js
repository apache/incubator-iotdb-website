(window.webpackJsonp=window.webpackJsonp||[]).push([[235],{791:function(t,_,v){"use strict";v.r(_);var a=v(69),e=Object(a.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"spark-tsfile-连接器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#spark-tsfile-连接器"}},[t._v("#")]),t._v(" Spark TsFile 连接器")]),t._v(" "),v("h2",{attrs:{id:"设计目的"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#设计目的"}},[t._v("#")]),t._v(" 设计目的")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("使用 Spark SQL 读取指定 TsFile 的数据，以 Spark DataFrame 的形式返回给客户端")])]),t._v(" "),v("li",[v("p",[t._v("使用 Spark DataFrame 中的数据生成 TsFile")])])]),t._v(" "),v("h2",{attrs:{id:"支持格式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#支持格式"}},[t._v("#")]),t._v(" 支持格式")]),t._v(" "),v("p",[t._v("宽表结构：TsFile 原生格式，IoTDB 原生路径格式")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("time")]),t._v(" "),v("th",[t._v("root.ln.wf02.wt02.temperature")]),t._v(" "),v("th",[t._v("root.ln.wf02.wt02.status")]),t._v(" "),v("th",[t._v("root.ln.wf02.wt02.hardware")]),t._v(" "),v("th",[t._v("root.ln.wf01.wt01.temperature")]),t._v(" "),v("th",[t._v("root.ln.wf01.wt01.status")]),t._v(" "),v("th",[t._v("root.ln.wf01.wt01.hardware")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("1")]),t._v(" "),v("td",[t._v("null")]),t._v(" "),v("td",[t._v("true")]),t._v(" "),v("td",[t._v("null")]),t._v(" "),v("td",[t._v("2.2")]),t._v(" "),v("td",[t._v("true")]),t._v(" "),v("td",[t._v("null")])]),t._v(" "),v("tr",[v("td",[t._v("2")]),t._v(" "),v("td",[t._v("null")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[t._v("aaa")]),t._v(" "),v("td",[t._v("2.2")]),t._v(" "),v("td",[t._v("null")]),t._v(" "),v("td",[t._v("null")])]),t._v(" "),v("tr",[v("td",[t._v("3")]),t._v(" "),v("td",[t._v("null")]),t._v(" "),v("td",[t._v("null")]),t._v(" "),v("td",[t._v("null")]),t._v(" "),v("td",[t._v("2.1")]),t._v(" "),v("td",[t._v("true")]),t._v(" "),v("td",[t._v("null")])]),t._v(" "),v("tr",[v("td",[t._v("4")]),t._v(" "),v("td",[t._v("null")]),t._v(" "),v("td",[t._v("true")]),t._v(" "),v("td",[t._v("bbb")]),t._v(" "),v("td",[t._v("null")]),t._v(" "),v("td",[t._v("null")]),t._v(" "),v("td",[t._v("null")])]),t._v(" "),v("tr",[v("td",[t._v("5")]),t._v(" "),v("td",[t._v("null")]),t._v(" "),v("td",[t._v("null")]),t._v(" "),v("td",[t._v("null")]),t._v(" "),v("td",[t._v("null")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[t._v("null")])]),t._v(" "),v("tr",[v("td",[t._v("6")]),t._v(" "),v("td",[t._v("null")]),t._v(" "),v("td",[t._v("null")]),t._v(" "),v("td",[t._v("ccc")]),t._v(" "),v("td",[t._v("null")]),t._v(" "),v("td",[t._v("null")]),t._v(" "),v("td",[t._v("null")])])])]),t._v(" "),v("p",[t._v("窄表结构: 关系型数据库模式，IoTDB align by device格式")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("time")]),t._v(" "),v("th",[t._v("device_name")]),t._v(" "),v("th",[t._v("status")]),t._v(" "),v("th",[t._v("hardware")]),t._v(" "),v("th",[t._v("temperature")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("1")]),t._v(" "),v("td",[t._v("root.ln.wf02.wt01")]),t._v(" "),v("td",[t._v("true")]),t._v(" "),v("td",[t._v("null")]),t._v(" "),v("td",[t._v("2.2")])]),t._v(" "),v("tr",[v("td",[t._v("1")]),t._v(" "),v("td",[t._v("root.ln.wf02.wt02")]),t._v(" "),v("td",[t._v("true")]),t._v(" "),v("td",[t._v("null")]),t._v(" "),v("td",[t._v("null")])]),t._v(" "),v("tr",[v("td",[t._v("2")]),t._v(" "),v("td",[t._v("root.ln.wf02.wt01")]),t._v(" "),v("td",[t._v("null")]),t._v(" "),v("td",[t._v("null")]),t._v(" "),v("td",[t._v("2.2")])]),t._v(" "),v("tr",[v("td",[t._v("2")]),t._v(" "),v("td",[t._v("root.ln.wf02.wt02")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[t._v("aaa")]),t._v(" "),v("td",[t._v("null")])]),t._v(" "),v("tr",[v("td",[t._v("3")]),t._v(" "),v("td",[t._v("root.ln.wf02.wt01")]),t._v(" "),v("td",[t._v("true")]),t._v(" "),v("td",[t._v("null")]),t._v(" "),v("td",[t._v("2.1")])]),t._v(" "),v("tr",[v("td",[t._v("4")]),t._v(" "),v("td",[t._v("root.ln.wf02.wt02")]),t._v(" "),v("td",[t._v("true")]),t._v(" "),v("td",[t._v("bbb")]),t._v(" "),v("td",[t._v("null")])]),t._v(" "),v("tr",[v("td",[t._v("5")]),t._v(" "),v("td",[t._v("root.ln.wf02.wt01")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[t._v("null")]),t._v(" "),v("td",[t._v("null")])]),t._v(" "),v("tr",[v("td",[t._v("6")]),t._v(" "),v("td",[t._v("root.ln.wf02.wt02")]),t._v(" "),v("td",[t._v("null")]),t._v(" "),v("td",[t._v("ccc")]),t._v(" "),v("td",[t._v("null")])])])]),t._v(" "),v("h2",{attrs:{id:"查询流程步骤"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#查询流程步骤"}},[t._v("#")]),t._v(" 查询流程步骤")]),t._v(" "),v("h4",{attrs:{id:"_1-表结构推断和生成"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-表结构推断和生成"}},[t._v("#")]),t._v(" 1. 表结构推断和生成")]),t._v(" "),v("p",[t._v("该步骤是为了使DataFrame的表结构与需要查询的 TsFile 的表结构匹配")]),t._v(" "),v("p",[t._v("主要逻辑在 src/main/scala/org/apache/iotdb/spark/tsfile/DefaultSource.scala 中的 inferSchema 函数")]),t._v(" "),v("h4",{attrs:{id:"_2-sql解析"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-sql解析"}},[t._v("#")]),t._v(" 2. SQL解析")]),t._v(" "),v("p",[t._v("该步骤目的是为了将用户 SQL 语句转化为 TsFile 原生的查询表达式")]),t._v(" "),v("p",[t._v("主要逻辑在 src/main/scala/org/apache/iotdb/spark/tsfile/DefaultSource.scala 中的 buildReader 函数")]),t._v(" "),v("p",[t._v("SQL解析分宽表结构与窄表结构")]),t._v(" "),v("h4",{attrs:{id:"_3-宽表结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-宽表结构"}},[t._v("#")]),t._v(" 3. 宽表结构")]),t._v(" "),v("p",[t._v("宽表结构的SQL解析主要逻辑在 src/main/scala/org/apache/iotdb/spark/tsfile/WideConverter.scala 中")]),t._v(" "),v("p",[t._v("该结构与 TsFile 原生查询结构基本相同，不需要特殊处理，直接将SQL语句转化为相应查询表达式即可")]),t._v(" "),v("h4",{attrs:{id:"_4-窄表结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-窄表结构"}},[t._v("#")]),t._v(" 4. 窄表结构")]),t._v(" "),v("p",[t._v("宽表结构的SQL解析主要逻辑在 src/main/scala/org/apache/iotdb/spark/tsfile/NarrowConverter.scala中")]),t._v(" "),v("p",[t._v("首先我们根据查询的schema确定要查询的时间序列，仅在tsfile中查询那些sql中存在的时间序列")]),t._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("requiredSchema.foreach((field: StructField) => {\n  if (field.name != QueryConstant.RESERVED_TIME\n    && field.name != NarrowConverter.DEVICE_NAME) {\n    measurementNames += field.name\n  }\n})\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br"),v("span",{staticClass:"line-number"},[t._v("3")]),v("br"),v("span",{staticClass:"line-number"},[t._v("4")]),v("br"),v("span",{staticClass:"line-number"},[t._v("5")]),v("br"),v("span",{staticClass:"line-number"},[t._v("6")]),v("br")])]),v("p",[t._v("SQL转化为表达式后，由于窄表结构与 TsFile 原生查询结构不同，需要先将表达式转化为与 device 有关的析取表达式\n，才可以转化为对 TsFile 的查询，转化代码在src/main/java/org/apache/iotdb/spark/tsfile/qp中")]),t._v(" "),v("p",[t._v("例子：")]),t._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("select time, device_name, s1 from tsfile_table where time > 1588953600000 and time < 1589040000000 and device_name = 'root.group1.d1'\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br")])]),v("p",[t._v("此时仅查询时间序列root.group1.d1.s1，条件表达式为[time > 1588953600000] and [time < 1589040000000]")]),t._v(" "),v("h4",{attrs:{id:"_5-查询实际执行"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-查询实际执行"}},[t._v("#")]),t._v(" 5. 查询实际执行")]),t._v(" "),v("p",[t._v("实际数据查询执行由 TsFile 原生组件完成，参见：")]),t._v(" "),v("ul",[v("li",[v("RouterLink",{attrs:{to:"/zh/SystemDesign/TsFile/Read.html"}},[t._v("Tsfile原生查询流程")])],1)]),t._v(" "),v("h2",{attrs:{id:"写入步骤流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#写入步骤流程"}},[t._v("#")]),t._v(" 写入步骤流程")]),t._v(" "),v("p",[t._v("写入主要是将 Dataframe 结构中的数据转化为 TsFile 的 RowRecord，使用 TsFile Writer 进行写入")]),t._v(" "),v("h4",{attrs:{id:"宽表结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#宽表结构"}},[t._v("#")]),t._v(" 宽表结构")]),t._v(" "),v("p",[t._v("其主要转化代码在如下两个文件中：")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("src/main/scala/org/apache/iotdb/spark/tsfile/WideConverter.scala 负责结构转化")])]),t._v(" "),v("li",[v("p",[t._v("src/main/scala/org/apache/iotdb/spark/tsfile/WideTsFileOutputWriter.scala 负责匹配 spark 接口与执行写入，会调用上一个文件中的结构转化功能")])])]),t._v(" "),v("h4",{attrs:{id:"窄表结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#窄表结构"}},[t._v("#")]),t._v(" 窄表结构")]),t._v(" "),v("p",[t._v("其主要转化代码在如下两个文件中：")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("src/main/scala/org/apache/iotdb/spark/tsfile/NarrowConverter.scala 负责结构转化")])]),t._v(" "),v("li",[v("p",[t._v("src/main/scala/org/apache/iotdb/spark/tsfile/NarrowTsFileOutputWriter.scala 负责匹配 spark 接口与执行写入，会调用上一个文件中的结构转化功能")])])])])}),[],!1,null,null,null);_.default=e.exports}}]);