(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{718:function(e,t,a){"use strict";a.r(t);var s=a(69),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"tsfile-hive-connector-user-guide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tsfile-hive-connector-user-guide"}},[e._v("#")]),e._v(" TsFile-Hive-Connector User Guide")]),e._v(" "),a("h2",{attrs:{id:"outline"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#outline"}},[e._v("#")]),e._v(" Outline")]),e._v(" "),a("ul",[a("li",[e._v("TsFile-Hive-Connector User Guide\n"),a("ul",[a("li",[e._v("About TsFile-Hive-Connector")]),e._v(" "),a("li",[e._v("System Requirements")]),e._v(" "),a("li",[e._v("Data Type Correspondence")]),e._v(" "),a("li",[e._v("Add Dependency For Hive")]),e._v(" "),a("li",[e._v("Creating Tsfile-backed Hive tables")]),e._v(" "),a("li",[e._v("Querying from Tsfile-backed Hive tables\n"),a("ul",[a("li",[e._v("Select Clause Example")]),e._v(" "),a("li",[e._v("Aggregate Clause Example")])])]),e._v(" "),a("li",[e._v("What's Next")])])])]),e._v(" "),a("h2",{attrs:{id:"about-tsfile-hive-connector"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#about-tsfile-hive-connector"}},[e._v("#")]),e._v(" About TsFile-Hive-Connector")]),e._v(" "),a("p",[e._v("TsFile-Hive-Connector implements the support of Hive for external data sources of Tsfile type. This enables users to operate Tsfile by Hive.")]),e._v(" "),a("p",[e._v("With this connector, you can")]),e._v(" "),a("ul",[a("li",[e._v("Load a single TsFile, from either the local file system or hdfs, into hive")]),e._v(" "),a("li",[e._v("Load all files in a specific directory, from either the local file system or hdfs, into hive")]),e._v(" "),a("li",[e._v("Query the tsfile through HQL.")]),e._v(" "),a("li",[e._v("As of now, the write operation is not supported in hive-connector. So, insert operation in HQL is not allowed while operating tsfile through hive.")])]),e._v(" "),a("h2",{attrs:{id:"system-requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#system-requirements"}},[e._v("#")]),e._v(" System Requirements")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Hadoop Version")]),e._v(" "),a("th",[e._v("Hive Version")]),e._v(" "),a("th",[e._v("Java Version")]),e._v(" "),a("th",[e._v("TsFile")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("2.7.3")]),e._v(" or "),a("code",[e._v("3.2.1")])]),e._v(" "),a("td",[a("code",[e._v("2.3.6")]),e._v(" or "),a("code",[e._v("3.1.2")])]),e._v(" "),a("td",[a("code",[e._v("1.8")])]),e._v(" "),a("td",[a("code",[e._v("0.10.0")])])])])]),e._v(" "),a("blockquote",[a("p",[e._v("Note: For more information about how to download and use TsFile, please see the following link: https://github.com/apache/incubator-iotdb/tree/master/tsfile.")])]),e._v(" "),a("h2",{attrs:{id:"data-type-correspondence"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-type-correspondence"}},[e._v("#")]),e._v(" Data Type Correspondence")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("TsFile data type")]),e._v(" "),a("th",[e._v("Hive field type")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("BOOLEAN")]),e._v(" "),a("td",[e._v("Boolean")])]),e._v(" "),a("tr",[a("td",[e._v("INT32")]),e._v(" "),a("td",[e._v("INT")])]),e._v(" "),a("tr",[a("td",[e._v("INT64")]),e._v(" "),a("td",[e._v("BIGINT")])]),e._v(" "),a("tr",[a("td",[e._v("FLOAT")]),e._v(" "),a("td",[e._v("Float")])]),e._v(" "),a("tr",[a("td",[e._v("DOUBLE")]),e._v(" "),a("td",[e._v("Double")])]),e._v(" "),a("tr",[a("td",[e._v("TEXT")]),e._v(" "),a("td",[e._v("STRING")])])])]),e._v(" "),a("h2",{attrs:{id:"add-dependency-for-hive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-dependency-for-hive"}},[e._v("#")]),e._v(" Add Dependency For Hive")]),e._v(" "),a("p",[e._v("To use hive-connector in hive, we should add the hive-connector jar into hive.")]),e._v(" "),a("p",[e._v("After downloading the code of iotdb from "),a("a",{attrs:{href:"https://github.com/apache/incubator-iotdb",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/apache/incubator-iotdb"),a("OutboundLink")],1),e._v(", you can use the command of "),a("code",[e._v("mvn clean package -pl hive-connector -am -Dmaven.test.skip=true")]),e._v(" to get a "),a("code",[e._v("hive-connector-X.X.X-jar-with-dependencies.jar")]),e._v(".")]),e._v(" "),a("p",[e._v("Then in hive, use the command of "),a("code",[e._v("add jar XXX")]),e._v(" to add the dependency. For example:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("hive> add jar /Users/hive/incubator-iotdb/hive-connector/target/hive-connector-0.10.0-jar-with-dependencies.jar;\n\nAdded [/Users/hive/incubator-iotdb/hive-connector/target/hive-connector-0.10.0-jar-with-dependencies.jar] to class path\nAdded resources: [/Users/hive/incubator-iotdb/hive-connector/target/hive-connector-0.10.0-jar-with-dependencies.jar]\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("h2",{attrs:{id:"creating-tsfile-backed-hive-tables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-tsfile-backed-hive-tables"}},[e._v("#")]),e._v(" Creating Tsfile-backed Hive tables")]),e._v(" "),a("p",[e._v("To create a Tsfile-backed table, specify the "),a("code",[e._v("serde")]),e._v(" as "),a("code",[e._v("org.apache.iotdb.hive.TsFileSerDe")]),e._v(",\nspecify the "),a("code",[e._v("inputformat")]),e._v(" as "),a("code",[e._v("org.apache.iotdb.hive.TSFHiveInputFormat")]),e._v(",\nand the "),a("code",[e._v("outputformat")]),e._v(" as "),a("code",[e._v("org.apache.iotdb.hive.TSFHiveOutputFormat")]),e._v(".")]),e._v(" "),a("p",[e._v("Also provide a schema which only contains two fields: "),a("code",[e._v("time_stamp")]),e._v(" and "),a("code",[e._v("sensor_id")]),e._v(" for the table.\n"),a("code",[e._v("time_stamp")]),e._v(" is the time value of the time series\nand "),a("code",[e._v("sensor_id")]),e._v(" is the name of the sensor you want to extract from the tsfile to hive such as "),a("code",[e._v("sensor_1")]),e._v(".\nThe name of the table can be any valid tables names in hive.")]),e._v(" "),a("p",[e._v("Also provide a location from which hive-connector will pull the most current data for the table.")]),e._v(" "),a("p",[e._v("The location must be a specific directory, it can be on your local file system or HDFS if you have set up Hadoop.\nIf it is in your local file system, the location should look like "),a("code",[e._v("file:///data/data/sequence/root.baic2.WWS.leftfrontdoor/")])]),e._v(" "),a("p",[e._v("At last, you should set the "),a("code",[e._v("device_id")]),e._v(" in "),a("code",[e._v("TBLPROPERTIES")]),e._v(" to the device name you want to analyze.")]),e._v(" "),a("p",[e._v("For example:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("CREATE EXTERNAL TABLE IF NOT EXISTS only_sensor_1(\n  time_stamp TIMESTAMP,\n  sensor_1 BIGINT)\nROW FORMAT SERDE 'org.apache.iotdb.hive.TsFileSerDe'\nSTORED AS\n  INPUTFORMAT 'org.apache.iotdb.hive.TSFHiveInputFormat'\n  OUTPUTFORMAT 'org.apache.iotdb.hive.TSFHiveOutputFormat'\nLOCATION '/data/data/sequence/root.baic2.WWS.leftfrontdoor/'\nTBLPROPERTIES ('device_id'='root.baic2.WWS.leftfrontdoor.plc1');\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br")])]),a("p",[e._v("In this example we're pulling the data of "),a("code",[e._v("root.baic2.WWS.leftfrontdoor.plc1.sensor_1")]),e._v(" from the directory of "),a("code",[e._v("/data/data/sequence/root.baic2.WWS.leftfrontdoor/")]),e._v(".\nThis table might result in a description as below:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("hive> describe only_sensor_1;\nOK\ntime_stamp          \ttimestamp              \tfrom deserializer\nsensor_1            \tbigint              \tfrom deserializer\nTime taken: 0.053 seconds, Fetched: 2 row(s)\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[e._v("At this point, the Tsfile-backed table can be worked with in Hive like any other table.")]),e._v(" "),a("h2",{attrs:{id:"querying-from-tsfile-backed-hive-tables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#querying-from-tsfile-backed-hive-tables"}},[e._v("#")]),e._v(" Querying from Tsfile-backed Hive tables")]),e._v(" "),a("p",[e._v("Before we do any queries, we should set the "),a("code",[e._v("hive.input.format")]),e._v(" in hive by executing the following command.")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("hive> set hive.input.format=org.apache.hadoop.hive.ql.io.HiveInputFormat;\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Now, we already have an external table named "),a("code",[e._v("only_sensor_1")]),e._v(" in hive.\nWe can use any query operations through HQL to analyse it.")]),e._v(" "),a("p",[e._v("For example:")]),e._v(" "),a("h3",{attrs:{id:"select-clause-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#select-clause-example"}},[e._v("#")]),e._v(" Select Clause Example")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("hive> select * from only_sensor_1 limit 10;\nOK\n1\t1000000\n2\t1000001\n3\t1000002\n4\t1000003\n5\t1000004\n6\t1000005\n7\t1000006\n8\t1000007\n9\t1000008\n10\t1000009\nTime taken: 1.464 seconds, Fetched: 10 row(s)\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br")])]),a("h3",{attrs:{id:"aggregate-clause-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aggregate-clause-example"}},[e._v("#")]),e._v(" Aggregate Clause Example")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("hive> select count(*) from only_sensor_1;\nWARNING: Hive-on-MR is deprecated in Hive 2 and may not be available in the future versions. Consider using a different execution engine (i.e. spark, tez) or using Hive 1.X releases.\nQuery ID = jackietien_20191016202416_d1e3e233-d367-4453-b39a-2aac9327a3b6\nTotal jobs = 1\nLaunching Job 1 out of 1\nNumber of reduce tasks determined at compile time: 1\nIn order to change the average load for a reducer (in bytes):\n  set hive.exec.reducers.bytes.per.reducer=<number>\nIn order to limit the maximum number of reducers:\n  set hive.exec.reducers.max=<number>\nIn order to set a constant number of reducers:\n  set mapreduce.job.reduces=<number>\nJob running in-process (local Hadoop)\n2019-10-16 20:24:18,305 Stage-1 map = 0%,  reduce = 0%\n2019-10-16 20:24:27,443 Stage-1 map = 100%,  reduce = 100%\nEnded Job = job_local867757288_0002\nMapReduce Jobs Launched:\nStage-Stage-1:  HDFS Read: 0 HDFS Write: 0 SUCCESS\nTotal MapReduce CPU Time Spent: 0 msec\nOK\n1000000\nTime taken: 11.334 seconds, Fetched: 1 row(s)\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br")])]),a("h2",{attrs:{id:"what-s-next"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-s-next"}},[e._v("#")]),e._v(" What's Next")]),e._v(" "),a("p",[e._v("We're currently only supporting read operation.\nWriting tables to Tsfiles is under development.")])])}),[],!1,null,null,null);t.default=n.exports}}]);