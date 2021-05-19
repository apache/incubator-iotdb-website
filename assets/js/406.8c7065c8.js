(window.webpackJsonp=window.webpackJsonp||[]).push([[406],{973:function(t,s,a){"use strict";a.r(s);var e=a(69),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"zeppelin-iotdb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zeppelin-iotdb"}},[t._v("#")]),t._v(" Zeppelin-IoTDB")]),t._v(" "),a("h3",{attrs:{id:"zeppelin简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zeppelin简介"}},[t._v("#")]),t._v(" Zeppelin简介")]),t._v(" "),a("p",[t._v("Apache Zeppelin 是一个基于网页的交互式数据分析系统。用户可以通过Zeppelin连接数据源并使用SQL、Scala等进行交互式操作。操作可以保存为文档（类似于Jupyter）。Zeppelin支持多种数据源，包括Spark、ElasticSearch、Cassandra和InfluxDB等等。现在，IoTDB已经支持使用Zeppelin进行操作。样例如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/5548915/102752947-520a3e80-43a5-11eb-8fb1-8fac471c8c7e.png",alt:"iotdb-note-snapshot"}})]),t._v(" "),a("h3",{attrs:{id:"zeppelin-iotdb解释器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zeppelin-iotdb解释器"}},[t._v("#")]),t._v(" Zeppelin-IoTDB解释器")]),t._v(" "),a("h4",{attrs:{id:"系统环境需求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#系统环境需求"}},[t._v("#")]),t._v(" 系统环境需求")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("IoTDB 版本")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Java 版本")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Zeppelin 版本")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v(">="),a("code",[t._v("0.12.0")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v(">="),a("code",[t._v("1.8.0_271")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v(">=0.9.0")])])])])]),t._v(" "),a("p",[t._v("安装 IoTDB：参考 "),a("RouterLink",{attrs:{to:"/zh/UserGuide/Master/Ecosystem Integration/QuickStart/QuickStart.html"}},[t._v("Quick Start")]),t._v(". 假设 IoTDB 安装在 "),a("code",[t._v("$IoTDB_HOME")]),t._v(".")],1),t._v(" "),a("p",[t._v("安装 Zeppelin：")]),t._v(" "),a("blockquote",[a("p",[t._v("方法1 直接下载：下载 "),a("a",{attrs:{href:"https://zeppelin.apache.org/download.html#",target:"_blank",rel:"noopener noreferrer"}},[t._v("Zeppelin"),a("OutboundLink")],1),t._v(" 并解压二进制文件。推荐下载 "),a("a",{attrs:{href:"http://www.apache.org/dyn/closer.cgi/zeppelin/zeppelin-0.9.0/zeppelin-0.9.0-bin-netinst.tgz",target:"_blank",rel:"noopener noreferrer"}},[t._v("netinst"),a("OutboundLink")],1),t._v(" 二进制包，此包由于未编译不相关的interpreter，因此大小相对较小。")]),t._v(" "),a("p",[t._v("方法2 源码编译：参考"),a("a",{attrs:{href:"https://zeppelin.apache.org/docs/latest/setup/basics/how_to_build.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("从源码构建 Zeppelin"),a("OutboundLink")],1),t._v(" ，使用命令为 "),a("code",[t._v("mvn clean package -pl zeppelin-web,zeppelin-server -am -DskipTests")]),t._v("。")])]),t._v(" "),a("p",[t._v("假设 Zeppelin 安装在 "),a("code",[t._v("$Zeppelin_HOME")]),t._v(".")]),t._v(" "),a("h4",{attrs:{id:"编译解释器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译解释器"}},[t._v("#")]),t._v(" 编译解释器")]),t._v(" "),a("p",[t._v("运行如下命令编译IoTDB Zeppelin解释器。")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$IoTDB_HOME")]),t._v("\nmvn clean package -pl zeppelin-interpreter -am -DskipTests\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("编译后的解释器位于如下目录：")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$IoTDB_HOME")]),t._v("/zeppelin-interpreter/target/zeppelin-"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("version"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("-SNAPSHOT-jar-with-dependencies.jar\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h4",{attrs:{id:"安装解释器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装解释器"}},[t._v("#")]),t._v(" 安装解释器")]),t._v(" "),a("p",[t._v("当你编译好了解释器，在Zeppelin的解释器目录下创建一个新的文件夹"),a("code",[t._v("iotdb")]),t._v("，并将IoTDB解释器放入其中。")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$IoTDB_HOME")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$Zeppelin_HOME")]),t._v("/interpreter/iotdb\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$IoTDB_HOME")]),t._v("/zeppelin-interpreter/target/zeppelin-"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("version"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("-SNAPSHOT-jar-with-dependencies.jar "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$Zeppelin_HOME")]),t._v("/interpreter/iotdb\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h4",{attrs:{id:"启动-zeppelin-和-iotdb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动-zeppelin-和-iotdb"}},[t._v("#")]),t._v(" 启动 Zeppelin 和 IoTDB")]),t._v(" "),a("p",[t._v("进入 "),a("code",[t._v("$Zeppelin_HOME")]),t._v(" 并运行Zeppelin：")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Unix/OS X")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ./bin/zeppelin-daemon.sh start\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Windows")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("bin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("zeppelin.cmd\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("进入 "),a("code",[t._v("$IoTDB_HOME")]),t._v(" 并运行IoTDB：")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Unix/OS X")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nohup")]),t._v(" sbin/start-server.sh "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("/dev/null "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("2")]),t._v(">")]),a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("&1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\nor\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nohup")]),t._v(" sbin/start-server.sh -c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("conf_path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" -rpc_port "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("rpc_port"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("/dev/null "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("2")]),t._v(">")]),a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("&1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Windows")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" sbin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("start-server.bat -c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("conf_path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" -rpc_port "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("rpc_port"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("h3",{attrs:{id:"使用-zeppelin-iotdb解释器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-zeppelin-iotdb解释器"}},[t._v("#")]),t._v(" 使用 Zeppelin-IoTDB解释器")]),t._v(" "),a("p",[t._v("当Zeppelin启动后，访问 "),a("a",{attrs:{href:"http://127.0.0.1:8080/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://127.0.0.1:8080/"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("通过如下步骤创建一个新的笔记本页面:")]),t._v(" "),a("ol",[a("li",[t._v("点击 "),a("code",[t._v("Create new node")]),t._v(" 按钮")]),t._v(" "),a("li",[t._v("设置笔记本名")]),t._v(" "),a("li",[t._v("选择解释器为iotdb")])]),t._v(" "),a("p",[t._v("现在可以开始使用Zeppelin操作IoTDB了。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/5548915/102752945-5171a800-43a5-11eb-8614-53b3276a3ce2.png",alt:"iotdb-create-note"}})]),t._v(" "),a("p",[t._v("我们提供了一些简单的SQL来展示Zeppelin-IoTDB解释器的使用：")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SET")]),t._v(" STORAGE "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("GROUP")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TO")]),t._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ln"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wf01"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wt01"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" TIMESERIES root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ln"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wf01"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wt01"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("status")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WITH")]),t._v(" DATATYPE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BOOLEAN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ENCODING"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("PLAIN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" TIMESERIES root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ln"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wf01"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wt01"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("temperature "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WITH")]),t._v(" DATATYPE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FLOAT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ENCODING"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("PLAIN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" TIMESERIES root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ln"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wf01"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wt01"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hardware "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WITH")]),t._v(" DATATYPE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("INT32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ENCODING"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("PLAIN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ln"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wf01"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wt01 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("timestamp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" temperature"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("status")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hardware"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ln"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wf01"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wt01 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("timestamp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" temperature"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("status")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hardware"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ln"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wf01"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wt01 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("timestamp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" temperature"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("status")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hardware"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("33")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ln"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wf01"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wt01 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("timestamp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" temperature"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("status")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hardware"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("44")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ln"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wf01"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wt01 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("timestamp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" temperature"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("status")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hardware"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5.5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("55")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ln"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wf01"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wt01\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("time")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("time")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br")])]),a("p",[t._v("样例如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/5548915/102752948-52a2d500-43a5-11eb-9156-0c55667eb4cd.png",alt:"iotdb-note-snapshot2"}})]),t._v(" "),a("p",[t._v("用户也可以参考 "),a("a",{attrs:{href:"https://zeppelin.apache.org/docs/0.9.0/usage/display_system/basic.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("[1]"),a("OutboundLink")],1),t._v(" 编写更丰富多彩的文档。")]),t._v(" "),a("p",[t._v("以上样例放置于 "),a("code",[t._v("$IoTDB_HOME/zeppelin-interpreter/Zeppelin-IoTDB-Demo.zpln")])]),t._v(" "),a("h3",{attrs:{id:"解释器配置项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解释器配置项"}},[t._v("#")]),t._v(" 解释器配置项")]),t._v(" "),a("p",[t._v("进入页面 "),a("a",{attrs:{href:"http://127.0.0.1:8080/#/interpreter",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://127.0.0.1:8080/#/interpreter"),a("OutboundLink")],1),t._v(" 并配置IoTDB的连接参数：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/5548915/102752940-50407b00-43a5-11eb-94fb-3e3be222183c.png",alt:"iotdb-configuration"}})]),t._v(" "),a("p",[t._v("可配置参数默认值和解释如下：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("属性")]),t._v(" "),a("th",[t._v("默认值")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("iotdb.host")]),t._v(" "),a("td",[t._v("127.0.0.1")]),t._v(" "),a("td",[t._v("IoTDB 主机名")])]),t._v(" "),a("tr",[a("td",[t._v("iotdb.port")]),t._v(" "),a("td",[t._v("6667")]),t._v(" "),a("td",[t._v("IoTDB 端口")])]),t._v(" "),a("tr",[a("td",[t._v("iotdb.username")]),t._v(" "),a("td",[t._v("root")]),t._v(" "),a("td",[t._v("用户名")])]),t._v(" "),a("tr",[a("td",[t._v("iotdb.password")]),t._v(" "),a("td",[t._v("root")]),t._v(" "),a("td",[t._v("密码")])]),t._v(" "),a("tr",[a("td",[t._v("iotdb.fetchSize")]),t._v(" "),a("td",[t._v("10000")]),t._v(" "),a("td",[t._v("查询结果分批次返回时，每一批数量")])]),t._v(" "),a("tr",[a("td",[t._v("iotdb.zoneId")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("时区ID")])]),t._v(" "),a("tr",[a("td",[t._v("iotdb.enable.rpc.compression")]),t._v(" "),a("td",[t._v("FALSE")]),t._v(" "),a("td",[t._v("是否允许rpc压缩")])]),t._v(" "),a("tr",[a("td",[t._v("iotdb.time.display.type")]),t._v(" "),a("td",[t._v("default")]),t._v(" "),a("td",[t._v("时间戳的展示格式")])])])])])}),[],!1,null,null,null);s.default=n.exports}}]);