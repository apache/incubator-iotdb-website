(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{644:function(t,a,e){"use strict";e.r(a);var s=e(69),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"spark-iotdb"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#spark-iotdb"}},[t._v("#")]),t._v(" Spark-IoTDB")]),t._v(" "),e("h3",{attrs:{id:"version"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[t._v("#")]),t._v(" version")]),t._v(" "),e("p",[t._v("The versions required for Spark and Java are as follow:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Spark Version")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Scala Version")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Java Version")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("TsFile")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("2.4.3")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("2.11")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("1.8")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("0.12.0")])])])])]),t._v(" "),e("blockquote",[e("p",[t._v("Currently we only support spark version 2.4.3 and there are some known issue on 2.4.7, do no use it")])]),t._v(" "),e("h3",{attrs:{id:"install"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[t._v("#")]),t._v(" Install")]),t._v(" "),e("p",[t._v("mvn clean scala:compile compile install")]),t._v(" "),e("h4",{attrs:{id:"maven-dependency"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#maven-dependency"}},[t._v("#")]),t._v(" Maven Dependency")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("    <dependency>\n      <groupId>org.apache.iotdb</groupId>\n      <artifactId>spark-iotdb-connector</artifactId>\n      <version>0.10.0</version>\n    </dependency>\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("h4",{attrs:{id:"spark-shell-user-guide"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#spark-shell-user-guide"}},[t._v("#")]),t._v(" spark-shell user guide")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('spark-shell --jars spark-iotdb-connector-0.12.0.jar,iotdb-jdbc-0.12.0-jar-with-dependencies.jar\n\nimport org.apache.iotdb.spark.db._\n\nval df = spark.read.format("org.apache.iotdb.spark.db").option("url","jdbc:iotdb://127.0.0.1:6667/").option("sql","select * from root").load\n\ndf.printSchema()\n\ndf.show()\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br")])]),e("p",[t._v("To partition rdd:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('spark-shell --jars spark-iotdb-connector-0.12.0.jar,iotdb-jdbc-0.12.0-jar-with-dependencies.jar\n\nimport org.apache.iotdb.spark.db._\n\nval df = spark.read.format("org.apache.iotdb.spark.db").option("url","jdbc:iotdb://127.0.0.1:6667/").option("sql","select * from root").\n                        option("lowerBound", [lower bound of time that you want query(include)]).option("upperBound", [upper bound of time that you want query(include)]).\n                        option("numPartition", [the partition number you want]).load\n\ndf.printSchema()\n\ndf.show()\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br")])]),e("h4",{attrs:{id:"schema-inference"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#schema-inference"}},[t._v("#")]),t._v(" Schema Inference")]),t._v(" "),e("p",[t._v("Take the following TsFile structure as an example: There are three Measurements in the TsFile schema: status, temperature, and hardware. The basic information of these three measurements is as follows:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Encode")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("status")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("PLAIN")])]),t._v(" "),e("tr",[e("td",[t._v("temperature")]),t._v(" "),e("td",[t._v("Float")]),t._v(" "),e("td",[t._v("RLE")])]),t._v(" "),e("tr",[e("td",[t._v("hardware")]),t._v(" "),e("td",[t._v("Text")]),t._v(" "),e("td",[t._v("PLAIN")])])])]),t._v(" "),e("p",[t._v("The existing data in the TsFile is as follows:")]),t._v(" "),e("img",{attrs:{width:"517",alt:"SI ",src:"https://user-images.githubusercontent.com/69114052/98197835-99a64980-1f62-11eb-84af-8301b8a6aad5.png"}}),t._v(" "),e("p",[t._v("The wide(default) table form is as follows:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("time")]),t._v(" "),e("th",[t._v("root.ln.wf02.wt02.temperature")]),t._v(" "),e("th",[t._v("root.ln.wf02.wt02.status")]),t._v(" "),e("th",[t._v("root.ln.wf02.wt02.hardware")]),t._v(" "),e("th",[t._v("root.ln.wf01.wt01.temperature")]),t._v(" "),e("th",[t._v("root.ln.wf01.wt01.status")]),t._v(" "),e("th",[t._v("root.ln.wf01.wt01.hardware")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("1")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("2.2")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("null")])]),t._v(" "),e("tr",[e("td",[t._v("2")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("aaa")]),t._v(" "),e("td",[t._v("2.2")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("null")])]),t._v(" "),e("tr",[e("td",[t._v("3")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("2.1")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("null")])]),t._v(" "),e("tr",[e("td",[t._v("4")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("bbb")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("null")])]),t._v(" "),e("tr",[e("td",[t._v("5")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("null")])]),t._v(" "),e("tr",[e("td",[t._v("6")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("ccc")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("null")])])])]),t._v(" "),e("p",[t._v("You can also use narrow table form which as follows: (You can see part 4 about how to use narrow form)")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("time")]),t._v(" "),e("th",[t._v("device_name")]),t._v(" "),e("th",[t._v("status")]),t._v(" "),e("th",[t._v("hardware")]),t._v(" "),e("th",[t._v("temperature")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("1")]),t._v(" "),e("td",[t._v("root.ln.wf02.wt01")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("2.2")])]),t._v(" "),e("tr",[e("td",[t._v("1")]),t._v(" "),e("td",[t._v("root.ln.wf02.wt02")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("null")])]),t._v(" "),e("tr",[e("td",[t._v("2")]),t._v(" "),e("td",[t._v("root.ln.wf02.wt01")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("2.2")])]),t._v(" "),e("tr",[e("td",[t._v("2")]),t._v(" "),e("td",[t._v("root.ln.wf02.wt02")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("aaa")]),t._v(" "),e("td",[t._v("null")])]),t._v(" "),e("tr",[e("td",[t._v("3")]),t._v(" "),e("td",[t._v("root.ln.wf02.wt01")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("2.1")])]),t._v(" "),e("tr",[e("td",[t._v("4")]),t._v(" "),e("td",[t._v("root.ln.wf02.wt02")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("bbb")]),t._v(" "),e("td",[t._v("null")])]),t._v(" "),e("tr",[e("td",[t._v("5")]),t._v(" "),e("td",[t._v("root.ln.wf02.wt01")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("null")])]),t._v(" "),e("tr",[e("td",[t._v("6")]),t._v(" "),e("td",[t._v("root.ln.wf02.wt02")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("ccc")]),t._v(" "),e("td",[t._v("null")])])])]),t._v(" "),e("h4",{attrs:{id:"transform-between-wide-and-narrow-table"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#transform-between-wide-and-narrow-table"}},[t._v("#")]),t._v(" Transform between wide and narrow table")]),t._v(" "),e("ul",[e("li",[t._v("from wide to narrow")])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('import org.apache.iotdb.spark.db._\n\nval wide_df = spark.read.format("org.apache.iotdb.spark.db").option("url", "jdbc:iotdb://127.0.0.1:6667/").option("sql", "select * from root where time < 1100 and time > 1000").load\nval narrow_df = Transformer.toNarrowForm(spark, wide_df)\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])]),e("ul",[e("li",[t._v("from narrow to wide")])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("import org.apache.iotdb.spark.db._\n\nval wide_df = Transformer.toWideForm(spark, narrow_df)\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("h4",{attrs:{id:"java-user-guide"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#java-user-guide"}},[t._v("#")]),t._v(" Java user guide")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('import org.apache.spark.sql.Dataset;\nimport org.apache.spark.sql.Row;\nimport org.apache.spark.sql.SparkSession;\nimport org.apache.iotdb.spark.db.*\n\npublic class Example {\n\n  public static void main(String[] args) {\n    SparkSession spark = SparkSession\n        .builder()\n        .appName("Build a DataFrame from Scratch")\n        .master("local[*]")\n        .getOrCreate();\n\n    Dataset<Row> df = spark.read().format("org.apache.iotdb.spark.db")\n        .option("url","jdbc:iotdb://127.0.0.1:6667/")\n        .option("sql","select * from root").load();\n\n    df.printSchema();\n\n    df.show();\n    \n    Dataset<Row> narrowTable = Transformer.toNarrowForm(spark, df)\n    narrowTable.show()\n  }\n}\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br"),e("span",{staticClass:"line-number"},[t._v("19")]),e("br"),e("span",{staticClass:"line-number"},[t._v("20")]),e("br"),e("span",{staticClass:"line-number"},[t._v("21")]),e("br"),e("span",{staticClass:"line-number"},[t._v("22")]),e("br"),e("span",{staticClass:"line-number"},[t._v("23")]),e("br"),e("span",{staticClass:"line-number"},[t._v("24")]),e("br"),e("span",{staticClass:"line-number"},[t._v("25")]),e("br"),e("span",{staticClass:"line-number"},[t._v("26")]),e("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);