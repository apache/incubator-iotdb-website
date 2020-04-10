(window.webpackJsonp=window.webpackJsonp||[]).push([[1491],{1812:function(t,s,e){"use strict";e.r(s);var a=e(1),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("p",[t._v("有几种方法可以识别您正在使用的IoTDB版本：")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),e("p",[t._v("假设您的根目录是：")]),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),t._v(" "),e("p",[t._v("默认情况下，日志存储在IOTDB_HOME / logs下。 您可以通过在IOTDB_HOME / conf下配置logback.xml来更改日志级别和存储路径。")]),t._v(" "),t._m(14),t._v(" "),e("p",[t._v("默认设置下，数据文件（包括tsfile，元数据和WAL文件）存储在IOTDB_HOME / data下。")]),t._v(" "),t._m(15),t._v(" "),e("p",[t._v("使用IoTDB的命令行界面：")]),t._v(" "),t._m(16),t._m(17),t._v(" "),e("p",[t._v("在当前版本中，IoTDB支持查询时间序列数。 使用IoTDB的命令行界面：")]),t._v(" "),t._m(18),e("p",[t._v("如果使用Linux，则可以使用以下shell命令：")]),t._v(" "),t._m(19),t._m(20),t._v(" "),e("p",[t._v("是的。  IoTDB与开源生态系统紧密集成。IoTDB支持 "),e("a",{attrs:{href:"https://github.com/apache/incubator-iotdb/tree/master/hadoop",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hadoop"),e("OutboundLink")],1),t._v(", "),e("a",{attrs:{href:"https://github.com/apache/incubator-iotdb/tree/master/spark",target:"_blank",rel:"noopener noreferrer"}},[t._v("Spark"),e("OutboundLink")],1),t._v(" 和"),e("a",{attrs:{href:"https://github.com/apache/incubator-iotdb/tree/master/grafana",target:"_blank",rel:"noopener noreferrer"}},[t._v("Grafana"),e("OutboundLink")],1),t._v(" 可视化工具。")]),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),e("p",[t._v("例如，如果您想知道所有时间序列的类型，则\\ <时间序列路径>应该是“ root”。 该语句将是：")]),t._v(" "),t._m(25),t._m(26),t._v(" "),t._m(27),e("p",[t._v("否则，您也可以在时间序列路径中使用通配符：")]),t._v(" "),t._m(28),t._m(29),t._v(" "),t._m(30),t._v(" "),t._m(31)])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"经常问的问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#经常问的问题"}},[this._v("#")]),this._v(" 经常问的问题")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"如何识别我的iotdb版本？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何识别我的iotdb版本？"}},[this._v("#")]),this._v(" 如何识别我的IoTDB版本？")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("启动IoTDB的命令行界面：")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("> ./start-client.sh -p 6667 -pw root -u root -h localhost\n _____       _________  ______   ______    \n|_   _|     |  _   _  ||_   _ `.|_   _ \\   \n  | |   .--.|_/ | | \\_|  | | `. \\ | |_) |  \n  | | / .'`\\ \\  | |      | |  | | |  __'.  \n _| |_| \\__. | _| |_    _| |_.' /_| |__) | \n|_____|'.__.' |_____|  |______.'|_______/  version x.x.x\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("检查pom.xml文件：")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("<version>x.x.x</version>\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("使用JDBC API：")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("String iotdbVersion = tsfileDatabaseMetadata.getDatabaseProductVersion();\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("使用命令行界面：")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("IoTDB> show version\nshow version\n+---------------+\n|version        |\n+---------------+\n|x.x.x          |\n+---------------+\nTotal line number = 1\nIt costs 0.241s\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"在哪里可以找到iotdb日志？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在哪里可以找到iotdb日志？"}},[this._v("#")]),this._v(" 在哪里可以找到IoTDB日志？")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ pwd\n/workspace/incubator-iotdb\n\n$ ls -l\nserver/\nclient/\npom.xml\nReadme.md\n...\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Let "),s("code",[this._v("$IOTDB_HOME = /workspace/incubator-iotdb/server/target/iotdb-server-{project.version}")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Let "),s("code",[this._v("$IOTDB_CLI_HOME = /workspace/incubator-iotdb/client/target/iotdb-client-{project.version}")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"在哪里可以找到iotdb数据文件？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在哪里可以找到iotdb数据文件？"}},[this._v("#")]),this._v(" 在哪里可以找到IoTDB数据文件？")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"我如何知道iotdb中存储了多少时间序列？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#我如何知道iotdb中存储了多少时间序列？"}},[this._v("#")]),this._v(" 我如何知道IoTDB中存储了多少时间序列？")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("IoTDB> show timeseries root\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("结果,将有一个声明显示 "),s("code",[this._v("Total timeseries number")]),this._v(", 此数字是IoTDB中的时间序列号。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("IoTDB> count timeseries root\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('> grep "0,root" $IOTDB_HOME/data/system/schema/mlog.txt |  wc -l\n>   6\n')])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br"),s("span",{staticClass:"line-number"},[this._v("2")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"我可以使用hadoop和spark在iotdb中读取tsfile吗？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#我可以使用hadoop和spark在iotdb中读取tsfile吗？"}},[this._v("#")]),this._v(" 我可以使用Hadoop和Spark在IoTDB中读取TsFile吗？")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"iotdb如何处理重复点？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#iotdb如何处理重复点？"}},[this._v("#")]),this._v(" IoTDB如何处理重复点？")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("数据点由完整的时间序列路径（例如"),s("code",[this._v("root.vehicle.d0.s0")]),this._v("）和时间戳唯一标识。 如果您提交的新点的路径和时间戳与现有点相同，则IoTDB将更新该点的值，而不是插入新点。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"我如何知道特定时间序列的类型？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#我如何知道特定时间序列的类型？"}},[this._v("#")]),this._v(" 我如何知道特定时间序列的类型？")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("采用"),s("code",[this._v("SHOW TIMESERIES <timeseries path>")]),this._v(" IoTDB的命令行界面中的SQL：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("IoTDB> show timeseries root\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("如果要查询特定的传感器，可以将"),s("code",[this._v("<timeseries path>")]),this._v("替换为传感器名称。 例如：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("IoTDB> show timeseries root.fit.d1.s1\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("IoTDB> show timeseries root.fit.d1.*\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"如何更改iotdb的客户端时间显示格式？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何更改iotdb的客户端时间显示格式？"}},[this._v("#")]),this._v(" 如何更改IoTDB的客户端时间显示格式？")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("IoTDB的默认客户端时间显示格式是可读的 (例如 "),s("code",[this._v("1970-01-01T08:00:00.001")]),this._v("), 如果要以时间戳记类型或其他可读格式显示时间，请添加参数 "),s("code",[this._v("-disableIS08601")]),this._v(" 在启动命令中：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("> $IOTDB_CLI_HOME/sbin/start-client.sh -h 127.0.0.1 -p 6667 -u root -pw root -disableIS08601\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])}],!1,null,null,null);s.default=r.exports}}]);