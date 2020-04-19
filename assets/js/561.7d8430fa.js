(window.webpackJsonp=window.webpackJsonp||[]).push([[561],{1017:function(t,_,v){"use strict";v.r(_);var a=v(49),r=Object(a.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"spark-iotdb-连接器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#spark-iotdb-连接器"}},[t._v("#")]),t._v(" Spark IOTDB 连接器")]),t._v(" "),v("h2",{attrs:{id:"设计目的"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#设计目的"}},[t._v("#")]),t._v(" 设计目的")]),t._v(" "),v("ul",[v("li",[t._v("使用Spark SQL读取IOTDB的数据，以Spark DataFrame的形式返回给客户端")])]),t._v(" "),v("h2",{attrs:{id:"核心思想"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#核心思想"}},[t._v("#")]),t._v(" 核心思想")]),t._v(" "),v("p",[t._v("由于IOTDB具有解析和执行SQL的能力，故该部分可以直接将SQL转发给IOTDB进程执行，将数据拿到后转换为RDD即可")]),t._v(" "),v("h2",{attrs:{id:"执行流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#执行流程"}},[t._v("#")]),t._v(" 执行流程")]),t._v(" "),v("h4",{attrs:{id:"_1-入口"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-入口"}},[t._v("#")]),t._v(" 1. 入口")]),t._v(" "),v("ul",[v("li",[t._v("src/main/scala/org/apache/iotdb/spark/db/DefaultSource.scala")])]),t._v(" "),v("h4",{attrs:{id:"_2-构建relation"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-构建relation"}},[t._v("#")]),t._v(" 2. 构建Relation")]),t._v(" "),v("p",[t._v("Relation主要保存了RDD的元信息，比如列名字，分区策略等，调用Relation的buildScan方法可以创建RDD")]),t._v(" "),v("ul",[v("li",[t._v("src/main/scala/org/apache/iotdb/spark/db/IoTDBRelation.scala")])]),t._v(" "),v("h4",{attrs:{id:"_3-构建rdd"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-构建rdd"}},[t._v("#")]),t._v(" 3. 构建RDD")]),t._v(" "),v("p",[t._v("RDD中执行对IOTDB的SQL请求，保存游标")]),t._v(" "),v("ul",[v("li",[t._v("src/main/scala/org/apache/iotdb/spark/db/IoTDBRDD.scala中的compute方法")])]),t._v(" "),v("h4",{attrs:{id:"_4-迭代rdd"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-迭代rdd"}},[t._v("#")]),t._v(" 4. 迭代RDD")]),t._v(" "),v("p",[t._v("由于Spark懒加载机制，用户遍历RDD时才具体调用RDD的迭代，也就是IOTDB的fetch Result")]),t._v(" "),v("ul",[v("li",[t._v("src/main/scala/org/apache/iotdb/spark/db/IoTDBRDD.scala中的getNext方法")])]),t._v(" "),v("h2",{attrs:{id:"宽窄表结构转换"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#宽窄表结构转换"}},[t._v("#")]),t._v(" 宽窄表结构转换")]),t._v(" "),v("p",[t._v("宽表结构：IOTDB原生路径格式")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("time")]),t._v(" "),v("th",[t._v("root.ln.wf02.wt02.temperature")]),t._v(" "),v("th",[t._v("root.ln.wf02.wt02.status")]),t._v(" "),v("th",[t._v("root.ln.wf02.wt02.hardware")]),t._v(" "),v("th",[t._v("root.ln.wf01.wt01.temperature")]),t._v(" "),v("th",[t._v("root.ln.wf01.wt01.status")]),t._v(" "),v("th",[t._v("root.ln.wf01.wt01.hardware")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("1")]),t._v(" "),v("td",[t._v("null")]),t._v(" "),v("td",[t._v("true")]),t._v(" "),v("td",[t._v("null")]),t._v(" "),v("td",[t._v("2.2")]),t._v(" "),v("td",[t._v("true")]),t._v(" "),v("td",[t._v("null")])]),t._v(" "),v("tr",[v("td",[t._v("2")]),t._v(" "),v("td",[t._v("null")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[t._v("aaa")]),t._v(" "),v("td",[t._v("2.2")]),t._v(" "),v("td",[t._v("null")]),t._v(" "),v("td",[t._v("null")])]),t._v(" "),v("tr",[v("td",[t._v("3")]),t._v(" "),v("td",[t._v("null")]),t._v(" "),v("td",[t._v("null")]),t._v(" "),v("td",[t._v("null")]),t._v(" "),v("td",[t._v("2.1")]),t._v(" "),v("td",[t._v("true")]),t._v(" "),v("td",[t._v("null")])]),t._v(" "),v("tr",[v("td",[t._v("4")]),t._v(" "),v("td",[t._v("null")]),t._v(" "),v("td",[t._v("true")]),t._v(" "),v("td",[t._v("bbb")]),t._v(" "),v("td",[t._v("null")]),t._v(" "),v("td",[t._v("null")]),t._v(" "),v("td",[t._v("null")])]),t._v(" "),v("tr",[v("td",[t._v("5")]),t._v(" "),v("td",[t._v("null")]),t._v(" "),v("td",[t._v("null")]),t._v(" "),v("td",[t._v("null")]),t._v(" "),v("td",[t._v("null")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[t._v("null")])]),t._v(" "),v("tr",[v("td",[t._v("6")]),t._v(" "),v("td",[t._v("null")]),t._v(" "),v("td",[t._v("null")]),t._v(" "),v("td",[t._v("ccc")]),t._v(" "),v("td",[t._v("null")]),t._v(" "),v("td",[t._v("null")]),t._v(" "),v("td",[t._v("null")])])])]),t._v(" "),v("p",[t._v("窄表结构: 关系型数据库模式，IOTDB align by device格式")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("time")]),t._v(" "),v("th",[t._v("device_name")]),t._v(" "),v("th",[t._v("status")]),t._v(" "),v("th",[t._v("hardware")]),t._v(" "),v("th",[t._v("temperature")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("1")]),t._v(" "),v("td",[t._v("root.ln.wf02.wt01")]),t._v(" "),v("td",[t._v("true")]),t._v(" "),v("td",[t._v("null")]),t._v(" "),v("td",[t._v("2.2")])]),t._v(" "),v("tr",[v("td",[t._v("1")]),t._v(" "),v("td",[t._v("root.ln.wf02.wt02")]),t._v(" "),v("td",[t._v("true")]),t._v(" "),v("td",[t._v("null")]),t._v(" "),v("td",[t._v("null")])]),t._v(" "),v("tr",[v("td",[t._v("2")]),t._v(" "),v("td",[t._v("root.ln.wf02.wt01")]),t._v(" "),v("td",[t._v("null")]),t._v(" "),v("td",[t._v("null")]),t._v(" "),v("td",[t._v("2.2")])]),t._v(" "),v("tr",[v("td",[t._v("2")]),t._v(" "),v("td",[t._v("root.ln.wf02.wt02")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[t._v("aaa")]),t._v(" "),v("td",[t._v("null")])]),t._v(" "),v("tr",[v("td",[t._v("3")]),t._v(" "),v("td",[t._v("root.ln.wf02.wt01")]),t._v(" "),v("td",[t._v("true")]),t._v(" "),v("td",[t._v("null")]),t._v(" "),v("td",[t._v("2.1")])]),t._v(" "),v("tr",[v("td",[t._v("4")]),t._v(" "),v("td",[t._v("root.ln.wf02.wt02")]),t._v(" "),v("td",[t._v("true")]),t._v(" "),v("td",[t._v("bbb")]),t._v(" "),v("td",[t._v("null")])]),t._v(" "),v("tr",[v("td",[t._v("5")]),t._v(" "),v("td",[t._v("root.ln.wf02.wt01")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[t._v("null")]),t._v(" "),v("td",[t._v("null")])]),t._v(" "),v("tr",[v("td",[t._v("6")]),t._v(" "),v("td",[t._v("root.ln.wf02.wt02")]),t._v(" "),v("td",[t._v("null")]),t._v(" "),v("td",[t._v("ccc")]),t._v(" "),v("td",[t._v("null")])])])]),t._v(" "),v("p",[t._v("由于IOTDB查询到的数据默认为宽表结构，所以需要宽窄表转换，有如下两个实现方法")]),t._v(" "),v("h4",{attrs:{id:"_1-使用iotdb的group-by-device语句"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-使用iotdb的group-by-device语句"}},[t._v("#")]),t._v(" 1. 使用IOTDB的group by device语句")]),t._v(" "),v("p",[t._v("这种方式可以直接拿到窄表结构，计算由IOTDB完成")]),t._v(" "),v("h4",{attrs:{id:"_2-使用transformer"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用transformer"}},[t._v("#")]),t._v(" 2. 使用Transformer")]),t._v(" "),v("p",[t._v("可以使用Transformer进行宽窄表之间的转换，计算由Spark完成")]),t._v(" "),v("ul",[v("li",[t._v("src/main/scala/org/apache/iotdb/spark/db/Transformer.scala")])]),t._v(" "),v("p",[t._v("宽表转窄表使用了遍历device列表，生成对应的窄表，在union起来的策略，并行性较好（无shuffle）")]),t._v(" "),v("p",[t._v("窄表转宽表使用了基于timestamp的join操作，有shuffle，可能存在潜在的性能问题")])])}),[],!1,null,null,null);_.default=r.exports}}]);