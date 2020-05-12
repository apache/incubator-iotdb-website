(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{511:function(t,a,e){"use strict";e.r(a);var v=e(49),_=Object(v.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"spark-iotdb-connector"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#spark-iotdb-connector"}},[t._v("#")]),t._v(" Spark IOTDB connector")]),t._v(" "),e("h2",{attrs:{id:"aim-of-design"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aim-of-design"}},[t._v("#")]),t._v(" aim of design")]),t._v(" "),e("ul",[e("li",[t._v("Use Spark SQL to read IOTDB data and return it to the client in the form of a Spark DataFrame")])]),t._v(" "),e("h2",{attrs:{id:"main-idea"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#main-idea"}},[t._v("#")]),t._v(" main idea")]),t._v(" "),e("p",[t._v("Because IOTDB has the ability to parse and execute SQL, this part can directly forward SQL to the IOTDB process for execution, and then convert the data to RDD.")]),t._v(" "),e("h2",{attrs:{id:"implementation-process"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#implementation-process"}},[t._v("#")]),t._v(" Implementation process")]),t._v(" "),e("h4",{attrs:{id:"_1-entrance"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-entrance"}},[t._v("#")]),t._v(" 1.Entrance")]),t._v(" "),e("ul",[e("li",[t._v("src/main/scala/org/apache/iotdb/spark/db/DefaultSource.scala")])]),t._v(" "),e("h4",{attrs:{id:"_2-building-relation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-building-relation"}},[t._v("#")]),t._v(" 2. Building Relation")]),t._v(" "),e("p",[t._v("Relation mainly saves RDD meta-information, such as column names, partitioning strategies, and so on. Calling Relation's buildScan method can create RDDs")]),t._v(" "),e("ul",[e("li",[t._v("src/main/scala/org/apache/iotdb/spark/db/IoTDBRelation.scala")])]),t._v(" "),e("h4",{attrs:{id:"_3-building-rdd"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-building-rdd"}},[t._v("#")]),t._v(" 3. Building RDD")]),t._v(" "),e("p",[t._v("RDD executes SQL request to IOTDB and saves cursor")]),t._v(" "),e("ul",[e("li",[t._v("The compute method in src / main / scala / org / apache / iotdb / spark / db / IoTDBRDD.scala")])]),t._v(" "),e("h4",{attrs:{id:"_4-iterative-rdd"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-iterative-rdd"}},[t._v("#")]),t._v(" 4.Iterative RDD")]),t._v(" "),e("p",[t._v("Due to Spark's lazy loading mechanism, the RDD iteration is called specifically when the user traverses the RDD, which is the fetch result of IOTDB")]),t._v(" "),e("ul",[e("li",[t._v("getNext method in src / main / scala / org / apache / iotdb / spark / db / IoTDBRDD.scala")])]),t._v(" "),e("h2",{attrs:{id:"wide-and-narrow-table-structure-conversion"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#wide-and-narrow-table-structure-conversion"}},[t._v("#")]),t._v(" Wide and narrow table structure conversion")]),t._v(" "),e("p",[t._v("Wide table structure: IOTDB native path format")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("time")]),t._v(" "),e("th",[t._v("root.ln.wf02.wt02.temperature")]),t._v(" "),e("th",[t._v("root.ln.wf02.wt02.status")]),t._v(" "),e("th",[t._v("root.ln.wf02.wt02.hardware")]),t._v(" "),e("th",[t._v("root.ln.wf01.wt01.temperature")]),t._v(" "),e("th",[t._v("root.ln.wf01.wt01.status")]),t._v(" "),e("th",[t._v("root.ln.wf01.wt01.hardware")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("1")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("2.2")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("null")])]),t._v(" "),e("tr",[e("td",[t._v("2")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("aaa")]),t._v(" "),e("td",[t._v("2.2")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("null")])]),t._v(" "),e("tr",[e("td",[t._v("3")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("2.1")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("null")])]),t._v(" "),e("tr",[e("td",[t._v("4")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("bbb")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("null")])]),t._v(" "),e("tr",[e("td",[t._v("5")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("null")])]),t._v(" "),e("tr",[e("td",[t._v("6")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("ccc")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("null")])])])]),t._v(" "),e("p",[t._v("Narrow table structure: Relational database schema, IOTDB align by device format")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("time")]),t._v(" "),e("th",[t._v("device_name")]),t._v(" "),e("th",[t._v("status")]),t._v(" "),e("th",[t._v("hardware")]),t._v(" "),e("th",[t._v("temperature")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("1")]),t._v(" "),e("td",[t._v("root.ln.wf02.wt01")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("2.2")])]),t._v(" "),e("tr",[e("td",[t._v("1")]),t._v(" "),e("td",[t._v("root.ln.wf02.wt02")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("null")])]),t._v(" "),e("tr",[e("td",[t._v("2")]),t._v(" "),e("td",[t._v("root.ln.wf02.wt01")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("2.2")])]),t._v(" "),e("tr",[e("td",[t._v("2")]),t._v(" "),e("td",[t._v("root.ln.wf02.wt02")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("aaa")]),t._v(" "),e("td",[t._v("null")])]),t._v(" "),e("tr",[e("td",[t._v("3")]),t._v(" "),e("td",[t._v("root.ln.wf02.wt01")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("2.1")])]),t._v(" "),e("tr",[e("td",[t._v("4")]),t._v(" "),e("td",[t._v("root.ln.wf02.wt02")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("bbb")]),t._v(" "),e("td",[t._v("null")])]),t._v(" "),e("tr",[e("td",[t._v("5")]),t._v(" "),e("td",[t._v("root.ln.wf02.wt01")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("null")])]),t._v(" "),e("tr",[e("td",[t._v("6")]),t._v(" "),e("td",[t._v("root.ln.wf02.wt02")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("ccc")]),t._v(" "),e("td",[t._v("null")])])])]),t._v(" "),e("p",[t._v("Because the data queried by IOTDB defaults to a wide table structure, a wide-narrow table conversion is required. There are two implementation methods as follows")]),t._v(" "),e("h4",{attrs:{id:"_1-use-the-iotdb-group-by-device-statement"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-use-the-iotdb-group-by-device-statement"}},[t._v("#")]),t._v(" 1. Use the IOTDB group by device statement")]),t._v(" "),e("p",[t._v("This way you can get the narrow table structure directly, and the calculation is done by IOTDB")]),t._v(" "),e("h4",{attrs:{id:"_2-use-transformer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-use-transformer"}},[t._v("#")]),t._v(" 2. Use Transformer")]),t._v(" "),e("p",[t._v("You can use Transformer to convert between wide and narrow tables. The calculation is done by Spark.")]),t._v(" "),e("ul",[e("li",[t._v("src/main/scala/org/apache/iotdb/spark/db/Transformer.scala")])]),t._v(" "),e("p",[t._v("Wide table to narrow table uses traversing the device list to generate the corresponding narrow table. The parallelization strategy is better (no shuffle). The narrow table to wide table uses a timestamp-based join operation. There is potential for shuffle.  Performance issues")])])}),[],!1,null,null,null);a.default=_.exports}}]);