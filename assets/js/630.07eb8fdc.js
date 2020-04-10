(window.webpackJsonp=window.webpackJsonp||[]).push([[630],{950:function(t,a,e){"use strict";e.r(a);var s=e(1),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("p",[t._v("The versions required for Spark and Java are as follow:")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),e("p",[t._v("mvn clean scala:compile compile install")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),e("p",[t._v("Take the following TsFile structure as an example: There are three Measurements in the TsFile schema: status, temperature, and hardware. The basic information of these three measurements is as follows:")]),t._v(" "),e("center",[e("table",{staticStyle:{"text-align":"center"}},[e("tr",[e("th",{attrs:{colspan:"2"}},[t._v("Name")]),e("th",{attrs:{colspan:"2"}},[t._v("Type")]),e("th",{attrs:{colspan:"2"}},[t._v("Encode")])]),t._v(" "),e("tr",[e("td",{attrs:{colspan:"2"}},[t._v("status")]),e("td",{attrs:{colspan:"2"}},[t._v("Boolean")]),e("td",{attrs:{colspan:"2"}},[t._v("PLAIN")])]),t._v(" "),e("tr",[e("td",{attrs:{colspan:"2"}},[t._v("temperature")]),e("td",{attrs:{colspan:"2"}},[t._v("Float")]),e("td",{attrs:{colspan:"2"}},[t._v("RLE")])]),t._v(" "),e("tr",[e("td",{attrs:{colspan:"2"}},[t._v("hardware")]),e("td",{attrs:{colspan:"2"}},[t._v("Text")]),e("td",{attrs:{colspan:"2"}},[t._v("PLAIN")])])])]),t._v(" "),e("p",[t._v("The existing data in the TsFile is as follows:")]),t._v(" "),e("center",[e("table",{staticStyle:{"text-align":"center"}},[e("tr",[e("th",{attrs:{colspan:"4"}},[t._v("device:root.ln.wf01.wt01")]),e("th",{attrs:{colspan:"4"}},[t._v("device:root.ln.wf02.wt02")])]),t._v(" "),e("tr",[e("th",{attrs:{colspan:"2"}},[t._v("status")]),e("th",{attrs:{colspan:"2"}},[t._v("temperature")]),e("th",{attrs:{colspan:"2"}},[t._v("hardware")]),e("th",{attrs:{colspan:"2"}},[t._v("status")])]),t._v(" "),e("tr",[e("th",[t._v("time")]),e("th",[t._v("value")]),e("th",[t._v("time")]),e("th",[t._v("value")]),e("th",[t._v("time")]),e("th",[t._v("value")]),e("th",[t._v("time")]),e("th",[t._v("value")])]),t._v(" "),e("tr",[e("td",[t._v("1")]),e("td",[t._v("True")]),e("td",[t._v("1")]),e("td",[t._v("2.2")]),e("td",[t._v("2")]),e("td",[t._v('"aaa"')]),e("td",[t._v("1")]),e("td",[t._v("True")])]),t._v(" "),e("tr",[e("td",[t._v("3")]),e("td",[t._v("True")]),e("td",[t._v("2")]),e("td",[t._v("2.2")]),e("td",[t._v("4")]),e("td",[t._v('"bbb"')]),e("td",[t._v("2")]),e("td",[t._v("False")])]),t._v(" "),e("tr",[e("td",[t._v("5")]),e("td",[t._v(" False ")]),e("td",[t._v("3")]),e("td",[t._v("2.1")]),e("td",[t._v("6")]),e("td",[t._v('"ccc"')]),e("td",[t._v("4")]),e("td",[t._v("True")])])])]),t._v(" "),e("p",[t._v("The wide(default) table form is as follows:")]),t._v(" "),t._m(11),t._v(" "),e("p",[t._v("You can also use narrow table form which as follows: (You can see part 4 about how to use narrow form)")]),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._m(16),t._v(" "),t._m(17),t._m(18),t._v(" "),t._m(19)],1)}),[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"spark-iotdb-connecter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spark-iotdb-connecter"}},[this._v("#")]),this._v(" Spark IoTDB Connecter")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"version"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[this._v("#")]),this._v(" version")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("table",[e("thead",[e("tr",[e("th",[t._v("Spark Version")]),t._v(" "),e("th",[t._v("Scala Version")]),t._v(" "),e("th",[t._v("Java Version")]),t._v(" "),e("th",[t._v("TsFile")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("2.4.3")])]),t._v(" "),e("td",[e("code",[t._v("2.11")])]),t._v(" "),e("td",[e("code",[t._v("1.8")])]),t._v(" "),e("td",[e("code",[t._v("0.10.0")])])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[this._v("#")]),this._v(" install")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"_1-maven-dependency"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-maven-dependency"}},[this._v("#")]),this._v(" 1. maven dependency")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v("    <dependency>\n      <groupId>org.apache.iotdb</groupId>\n      <artifactId>spark-iotdb-connector</artifactId>\n      <version>0.10.0</version>\n    </dependency>\n")])]),this._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[this._v("1")]),a("br"),a("span",{staticClass:"line-number"},[this._v("2")]),a("br"),a("span",{staticClass:"line-number"},[this._v("3")]),a("br"),a("span",{staticClass:"line-number"},[this._v("4")]),a("br"),a("span",{staticClass:"line-number"},[this._v("5")]),a("br")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"_2-spark-shell-user-guide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-spark-shell-user-guide"}},[this._v("#")]),this._v(" 2. spark-shell user guide")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('spark-shell --jars spark-iotdb-connector-0.10.0.jar,iotdb-jdbc-0.10.0-jar-with-dependencies.jar\n\nimport org.apache.iotdb.spark.db._\n\nval df = spark.read.format("org.apache.iotdb.spark.db").option("url","jdbc:iotdb://127.0.0.1:6667/").option("sql","select * from root").load\n\ndf.printSchema()\n\ndf.show()\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"if-you-want-to-partition-your-rdd-you-can-do-as-following"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#if-you-want-to-partition-your-rdd-you-can-do-as-following"}},[this._v("#")]),this._v(" if you want to partition your rdd, you can do as following")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('spark-shell --jars spark-iotdb-connector-0.10.0.jar,iotdb-jdbc-0.10.0-jar-with-dependencies.jar\n\nimport org.apache.iotdb.spark.db._\n\nval df = spark.read.format("org.apache.iotdb.spark.db").option("url","jdbc:iotdb://127.0.0.1:6667/").option("sql","select * from root").\n                        option("lowerBound", [lower bound of time that you want query(include)]).option("upperBound", [upper bound of time that you want query(include)]).\n                        option("numPartition", [the partition number you want]).load\n\ndf.printSchema()\n\ndf.show()\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"_3-schema-inference"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-schema-inference"}},[this._v("#")]),this._v(" 3. Schema Inference")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("table",[e("thead",[e("tr",[e("th",[t._v("time")]),t._v(" "),e("th",[t._v("root.ln.wf02.wt02.temperature")]),t._v(" "),e("th",[t._v("root.ln.wf02.wt02.status")]),t._v(" "),e("th",[t._v("root.ln.wf02.wt02.hardware")]),t._v(" "),e("th",[t._v("root.ln.wf01.wt01.temperature")]),t._v(" "),e("th",[t._v("root.ln.wf01.wt01.status")]),t._v(" "),e("th",[t._v("root.ln.wf01.wt01.hardware")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("1")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("2.2")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("null")])]),t._v(" "),e("tr",[e("td",[t._v("2")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("aaa")]),t._v(" "),e("td",[t._v("2.2")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("null")])]),t._v(" "),e("tr",[e("td",[t._v("3")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("2.1")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("null")])]),t._v(" "),e("tr",[e("td",[t._v("4")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("bbb")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("null")])]),t._v(" "),e("tr",[e("td",[t._v("5")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("null")])]),t._v(" "),e("tr",[e("td",[t._v("6")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("ccc")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("null")])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("table",[e("thead",[e("tr",[e("th",[t._v("time")]),t._v(" "),e("th",[t._v("device_name")]),t._v(" "),e("th",[t._v("status")]),t._v(" "),e("th",[t._v("hardware")]),t._v(" "),e("th",[t._v("temperature")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("1")]),t._v(" "),e("td",[t._v("root.ln.wf02.wt01")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("2.2")])]),t._v(" "),e("tr",[e("td",[t._v("1")]),t._v(" "),e("td",[t._v("root.ln.wf02.wt02")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("null")])]),t._v(" "),e("tr",[e("td",[t._v("2")]),t._v(" "),e("td",[t._v("root.ln.wf02.wt01")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("2.2")])]),t._v(" "),e("tr",[e("td",[t._v("2")]),t._v(" "),e("td",[t._v("root.ln.wf02.wt02")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("aaa")]),t._v(" "),e("td",[t._v("null")])]),t._v(" "),e("tr",[e("td",[t._v("3")]),t._v(" "),e("td",[t._v("root.ln.wf02.wt01")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("2.1")])]),t._v(" "),e("tr",[e("td",[t._v("4")]),t._v(" "),e("td",[t._v("root.ln.wf02.wt02")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("bbb")]),t._v(" "),e("td",[t._v("null")])]),t._v(" "),e("tr",[e("td",[t._v("5")]),t._v(" "),e("td",[t._v("root.ln.wf02.wt01")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("null")])]),t._v(" "),e("tr",[e("td",[t._v("6")]),t._v(" "),e("td",[t._v("root.ln.wf02.wt02")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("ccc")]),t._v(" "),e("td",[t._v("null")])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"_4-transform-between-wide-and-narrow-table"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-transform-between-wide-and-narrow-table"}},[this._v("#")]),this._v(" 4. Transform between wide and narrow table")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"from-wide-to-narrow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#from-wide-to-narrow"}},[this._v("#")]),this._v(" from wide to narrow")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v('import org.apache.iotdb.spark.db._\n\nval wide_df = spark.read.format("org.apache.iotdb.spark.db").option("url", "jdbc:iotdb://127.0.0.1:6667/").option("sql", "select * from root where time < 1100 and time > 1000").load\nval narrow_df = Transformer.toNarrowForm(spark, wide_df)\n')])]),this._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[this._v("1")]),a("br"),a("span",{staticClass:"line-number"},[this._v("2")]),a("br"),a("span",{staticClass:"line-number"},[this._v("3")]),a("br"),a("span",{staticClass:"line-number"},[this._v("4")]),a("br")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"from-narrow-to-wide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#from-narrow-to-wide"}},[this._v("#")]),this._v(" from narrow to wide")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v("import org.apache.iotdb.spark.db._\n\nval wide_df = Transformer.toWideForm(spark, narrow_df)\n")])]),this._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[this._v("1")]),a("br"),a("span",{staticClass:"line-number"},[this._v("2")]),a("br"),a("span",{staticClass:"line-number"},[this._v("3")]),a("br")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"_5-java-user-guide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-java-user-guide"}},[this._v("#")]),this._v(" 5. Java user guide")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('import org.apache.spark.sql.Dataset;\nimport org.apache.spark.sql.Row;\nimport org.apache.spark.sql.SparkSession;\nimport org.apache.iotdb.spark.db.*\n\npublic class Example {\n\n  public static void main(String[] args) {\n    SparkSession spark = SparkSession\n        .builder()\n        .appName("Build a DataFrame from Scratch")\n        .master("local[*]")\n        .getOrCreate();\n\n    Dataset<Row> df = spark.read().format("org.apache.iotdb.spark.db")\n        .option("url","jdbc:iotdb://127.0.0.1:6667/")\n        .option("sql","select * from root").load();\n\n    df.printSchema();\n\n    df.show();\n    \n    Dataset<Row> narrowTable = Transformer.toNarrowForm(spark, df)\n    narrowTable.show()\n  }\n}\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br"),e("span",{staticClass:"line-number"},[t._v("19")]),e("br"),e("span",{staticClass:"line-number"},[t._v("20")]),e("br"),e("span",{staticClass:"line-number"},[t._v("21")]),e("br"),e("span",{staticClass:"line-number"},[t._v("22")]),e("br"),e("span",{staticClass:"line-number"},[t._v("23")]),e("br"),e("span",{staticClass:"line-number"},[t._v("24")]),e("br"),e("span",{staticClass:"line-number"},[t._v("25")]),e("br"),e("span",{staticClass:"line-number"},[t._v("26")]),e("br")])])}],!1,null,null,null);a.default=r.exports}}]);